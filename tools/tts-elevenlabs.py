#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — озвучка текстов для чтения через ElevenLabs.

Берёт JSON текста (tools/story-data/*.json), склеивает корейский из токенов
"한글|перевод" и кладёт MP3 в audio/{уровень}-{категория}-{id}.mp3 — под тем
именем, которое ищет reading-content.html.

Ключ читается ТОЛЬКО из окружения, в репозиторий он не попадает:

    export ELEVENLABS_API_KEY='...'          # получить в профиле ElevenLabs
    export ELEVENLABS_VOICE_ID='...'         # необязательно, см. --list-voices

    python3 tools/tts-elevenlabs.py --list-voices
    python3 tools/tts-elevenlabs.py tools/story-data/l3-sports-1.json --dry-run
    python3 tools/tts-elevenlabs.py tools/story-data/*.json

У большинства текстов JSON нет — они живут прямо в reading-content.html и
level-N-texts.js. Для них есть режим --from-site: он берёт корейский из самих
баз и озвучивает всё, у чего ещё нет MP3.

    python3 tools/tts-elevenlabs.py --from-site --dry-run
    python3 tools/tts-elevenlabs.py --from-site --budget 9000

Модель по умолчанию — eleven_multilingual_v2, она умеет корейский.
Сервис считает символы, на бесплатном тарифе это 10 000 в месяц, поэтому
--budget N останавливает набор, не выходя за лимит, а --dry-run показывает
объём заранее.
"""

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(ROOT, 'audio')
API = 'https://api.elevenlabs.io/v1'
MODEL = 'eleven_multilingual_v2'


def api_key():
    key = os.environ.get('ELEVENLABS_API_KEY')
    if not key:
        raise SystemExit('[ERROR] нет ELEVENLABS_API_KEY в окружении.\n'
                         "        export ELEVENLABS_API_KEY='ваш ключ'")
    return key


def request(url, data=None, key=None, raw=False):
    req = urllib.request.Request(url, data=data, method='POST' if data else 'GET')
    req.add_header('xi-api-key', key or api_key())
    if data:
        req.add_header('Content-Type', 'application/json')
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.read() if raw else json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8', 'replace')[:400]
        raise SystemExit('[ERROR] ElevenLabs ответил %d: %s' % (e.code, body))
    except urllib.error.URLError as e:
        raise SystemExit('[ERROR] сеть недоступна: %s' % e.reason)


def list_voices():
    data = request(API + '/voices')
    for v in data.get('voices', []):
        labels = v.get('labels') or {}
        print('%-24s %s  %s' % (v['voice_id'], v.get('name', '?'),
                                ', '.join('%s=%s' % kv for kv in labels.items())))
    print('\n[i] выбранный id положите в ELEVENLABS_VOICE_ID')


def korean_text(d):
    """Абзацы из токенов "한글|перевод" -> чистый корейский для озвучки."""
    paras = []
    for para in d['paragraphs']:
        words = []
        for tok in para:
            word = tok.partition('|')[0]
            glue = word.startswith('+')
            word = word.lstrip('+')
            words.append(word if glue or not words else ' ' + word)
        paras.append(''.join(words))
    return '\n'.join(paras)


STORY_RX = re.compile(
    r"id: '([^']+)',\s*\n\s*title:.*?\n\s*subtitle:.*?\n\s*korean: `(.*?)`,\s*\n\s*translation:",
    re.S)


def strip_markup(korean):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', korean)).strip()


def listed_texts():
    """Пары (уровень, категория, id), которые реально показаны в списке уроков.

    В базах текстов больше, чем на странице выбора: часть записей осталась
    от старых версий и пользователю недоступна — озвучивать их не за что.
    """
    text = open(os.path.join(ROOT, 'reading-texts.html'), encoding='utf-8').read()
    ids, lvl, cat = set(), None, None
    for line in text.splitlines():
        m = re.match(r'\s{8,12}(\d): \{', line)
        if m:
            lvl = int(m.group(1))
            continue
        m = re.match(r'\s{12,16}(\w+): \[', line)
        if m:
            cat = m.group(1)
            continue
        m = re.search(r"id: '([^']+)'", line)
        if m and lvl:
            ids.add((lvl, cat, m.group(1)))
    return ids


def scan_site():
    """Все тексты сайта -> [(уровень, категория, id, корейский)].

    1-2급 лежат в storyDatabase внутри reading-content.html, 3-6급 —
    в level-N-texts.js (в reading-content для них только заглушки).
    """
    found = []
    listed = listed_texts()
    text = open(os.path.join(ROOT, 'reading-content.html'), encoding='utf-8').read()
    start = text.index('const storyDatabase')
    stop = re.search(r'\n\s+3: \(typeof level3Texts', text[start:])
    head = text[start:start + stop.start()]
    # внутри storyDatabase уровни лежат блоками "1: {" и "2: {" — их надо
    # разделить, иначе один и тот же текст запишется под оба уровня
    sources = []
    bounds = [m for m in re.finditer(r'\n\s+(\d): \{', head)]
    for i, m in enumerate(bounds):
        end = bounds[i + 1].start() if i + 1 < len(bounds) else len(head)
        sources.append((head[m.end():end], (int(m.group(1)),)))
    for lvl in (3, 4, 5, 6):
        path = os.path.join(ROOT, 'level-%d-texts.js' % lvl)
        if os.path.exists(path):
            sources.append((open(path, encoding='utf-8').read(), (lvl,)))

    for blob, levels in sources:
        # блок категории тянется до начала следующей: искать закрывающую скобку
        # нельзя — первой попадётся конец quiz у первого же текста
        marks = [m for m in re.finditer(r'\n\s+(\w+): \[', blob)
                 if m.group(1) not in ('quiz', 'options')]
        for lvl in levels:
            for i, cat_m in enumerate(marks):
                cat = cat_m.group(1)
                stop = marks[i + 1].start() if i + 1 < len(marks) else len(blob)
                for sid, ko in STORY_RX.findall(blob[cat_m.end():stop]):
                    if (lvl, cat, sid) not in listed:
                        continue
                    out = os.path.join(AUDIO, '%d-%s-%s.mp3' % (lvl, cat, sid))
                    if os.path.exists(out):
                        continue
                    plain = strip_markup(ko)
                    if plain and not any(j[0] == out for j in found):
                        found.append((out, plain))
    return found


def main():
    ap = argparse.ArgumentParser(description='Озвучка текстов через ElevenLabs')
    ap.add_argument('sources', nargs='*', help='JSON-файлы текстов')
    ap.add_argument('--from-site', action='store_true',
                    help='взять тексты прямо из reading-content.html и level-N-texts.js')
    ap.add_argument('--budget', type=int,
                    help='остановить набор на N символов (бесплатный тариф — 10000/мес)')
    ap.add_argument('--voice', default=os.environ.get('ELEVENLABS_VOICE_ID'),
                    help='voice_id (по умолчанию ELEVENLABS_VOICE_ID)')
    ap.add_argument('--model', default=MODEL)
    ap.add_argument('--list-voices', action='store_true', help='показать голоса и выйти')
    ap.add_argument('--force', action='store_true', help='перезаписать существующие MP3')
    ap.add_argument('--dry-run', action='store_true', help='только показать объём')
    args = ap.parse_args()

    if args.list_voices:
        list_voices()
        return
    if not args.sources and not args.from_site:
        ap.error('укажите JSON текста или --from-site')

    candidates = []
    for src in args.sources:
        d = json.load(open(src, encoding='utf-8'))
        out = os.path.join(AUDIO, '%d-%s-%s.mp3' % (d['level'], d['category'], d['id']))
        candidates.append((out, korean_text(d)))
    if args.from_site:
        seen = {c[0] for c in candidates}
        candidates += [c for c in scan_site() if c[0] not in seen]

    jobs, total, skipped = [], 0, 0
    for out, text in candidates:
        if os.path.exists(out) and not args.force:
            print('[=] уже есть: %s' % os.path.basename(out))
            continue
        if args.budget and total + len(text) > args.budget:
            skipped += 1
            continue
        jobs.append((out, text))
        total += len(text)
        print('[+] %s — %d символов' % (os.path.basename(out), len(text)))

    print('[i] к озвучке %d файлов, %d символов' % (len(jobs), total))
    if skipped:
        print('[!] отложено по бюджету: %d текстов — запустите ещё раз, '
              'когда обновится квота' % skipped)
    if args.dry_run or not jobs:
        return
    if not args.voice:
        raise SystemExit('[ERROR] нет voice_id: --voice ... или ELEVENLABS_VOICE_ID\n'
                         '        список голосов: --list-voices')

    key = api_key()
    for out, text in jobs:
        body = json.dumps({'text': text, 'model_id': args.model,
                           'output_format': 'mp3_44100_128'}).encode('utf-8')
        mp3 = request('%s/text-to-speech/%s' % (API, args.voice), body, key, raw=True)
        open(out, 'wb').write(mp3)
        print('[OK] %s (%d КБ)' % (os.path.basename(out), len(mp3) // 1024))


if __name__ == '__main__':
    main()
