#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Jane Korea — генерация MP3-озвучки уроков.

Извлекает все корейские фразы из страниц уроков (литералы speakKorean/
speakWord/speak + содержимое элементов .korean-text), генерирует MP3
и ведёт манифест audio/tts/manifest.json, который на лету подхватывает
js/tts-voice.js.

Движки:
    edge        — нейроголоса Microsoft (edge-tts), БЕСПЛАТНО. По умолчанию.
    elevenlabs  — ElevenLabs API, нужен ключ (--key / ELEVENLABS_API_KEY / .env)

Использование:
    python3 tools/tts-generate.py --dry-run          # что будет сгенерировано
    python3 tools/tts-generate.py --list-voices      # корейские голоса движка
    python3 tools/tts-generate.py --limit 20         # пробная партия
    python3 tools/tts-generate.py                    # всё
"""

import argparse
import glob
import hashlib
import json
import os
import re
import threading
import time
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, 'audio', 'tts')
MANIFEST_PATH = os.path.join(OUT_DIR, 'manifest.json')

EDGE_DEFAULT_VOICE = 'ko-KR-SunHiNeural'
# Второй диктор для диалогов (нечётные реплики, pitch < 1 на страницах)
EDGE_DEFAULT_VOICE_B = 'ko-KR-InJoonNeural'

EL_API_BASE = 'https://api.elevenlabs.io/v1'
EL_DEFAULT_MODEL = 'eleven_multilingual_v2'
EL_DEFAULT_FORMAT = 'mp3_44100_64'
# Sarah — премейд-голос, есть на любом аккаунте. Для лучшего корейского
# добавьте нативный голос из Voice Library и передайте --voice-id.
EL_DEFAULT_VOICE = 'EXAVITQu4vr4xnSDxMaL'

LESSON_GLOBS = ['lesson_*/index.html', 'lesson_*/*/index.html', 'level_*/*/index.html',
                'vocabulary/*/index.html']

HANGUL = re.compile(r'[가-힯]')
CYRILLIC = re.compile(r'[Ѐ-ӿ]')
CALL_RE = re.compile(r"speak(?:Korean|Word|)\(\s*(['\"])(.*?)\1", re.S)
KOREAN_TEXT_RE = re.compile(r'class="korean-text"[^>]*>([^<]*)<')
# Лексика в таблицах и карточках — кнопки на неё вешает js/lesson-audio.js
CELL_RES = [
    re.compile(r'<td class="ko">([^<]*)</td>'),
    re.compile(r'class="slang-korean">([^<]*)<'),
]
# Слова и примеры страниц словаря живут в JS-массиве, а не в разметке
VOCAB_RES = [
    re.compile(r"\bkorean: '((?:[^'\\]|\\.)*)'"),
    re.compile(r"\bexample: '((?:[^'\\]|\\.)*)'"),
]


def norm(s):
    """Нормализация фразы — та же, что в js/tts-voice.js (normKey)."""
    s = s.replace('\U0001F50A', '')          # значок динамика
    s = re.sub(r'\[[^\]]*\]', '', s)          # [романизация] не озвучивается
    return ' '.join(s.split()).strip()


def norm_cell(s):
    """Нормализация ячейки — та же, что в js/lesson-audio.js (normalize).

    Отличается от norm() только заменой слэша: «막걸리 / 탁주» произносится
    как перечисление, а не как знак препинания.
    """
    s = s.replace('\U0001F50A', '')
    s = re.sub(r'\[[^\]]*\]', '', s)
    s = re.sub(r'\s*/\s*', ', ', s)
    return ' '.join(s.split()).strip()


def collect_phrases():
    """Возвращает (все фразы, реплики диалогов).

    Реплики диалогов (.korean-text) дополнительно озвучиваются вторым
    диктором: страницы помечают нечётные реплики pitch < 1, и
    js/tts-voice.js по этому признаку берёт мужскую дорожку.
    """
    files = []
    for g in LESSON_GLOBS:
        files.extend(glob.glob(os.path.join(ROOT, g)))
    phrases = set()
    dialogue = set()
    for f in sorted(set(files)):
        try:
            txt = open(f, encoding='utf-8').read()
        except OSError as e:
            print('[ERROR] не прочитан %s: %s' % (f, e))
            continue
        for m in CALL_RE.finditer(txt):
            p = norm(m.group(2))
            if p and HANGUL.search(p):
                phrases.add(p)
        for m in KOREAN_TEXT_RE.finditer(txt):
            p = norm(m.group(1))
            if p and HANGUL.search(p):
                phrases.add(p)
                dialogue.add(p)
        for rx in CELL_RES:
            for m in rx.finditer(txt):
                raw = m.group(1)
                # «прил. + 게 생기다» — описание конструкции, а не фраза
                if CYRILLIC.search(raw):
                    continue
                p = norm_cell(raw)
                if p and HANGUL.search(p):
                    phrases.add(p)
        for rx in VOCAB_RES:
            for m in rx.finditer(txt):
                raw = m.group(1).replace("\\'", "'")
                if CYRILLIC.search(raw):
                    continue
                p = norm(raw)
                if p and HANGUL.search(p):
                    phrases.add(p)
    return sorted(phrases), sorted(dialogue)


def phrase_filename(text, variant='a'):
    h = hashlib.sha1(text.encode('utf-8')).hexdigest()[:16]
    return h + ('-b.mp3' if variant == 'b' else '.mp3')


# =============================================
# Движок: edge-tts (бесплатный)
# =============================================

def edge_speed_to_rate(speed):
    return '%+d%%' % round((speed - 1.0) * 100)


def edge_tts_one(text, voice, speed):
    import asyncio
    import edge_tts

    async def run():
        comm = edge_tts.Communicate(text, voice, rate=edge_speed_to_rate(speed))
        buf = b''
        async for chunk in comm.stream():
            if chunk['type'] == 'audio':
                buf += chunk['data']
        return buf

    attempt = 0
    while True:
        attempt += 1
        try:
            audio = asyncio.run(run())
            if not audio:
                raise RuntimeError('пустой ответ')
            return audio
        except Exception as e:
            if attempt < 6:
                time.sleep(min(2 ** attempt, 30))
                continue
            raise RuntimeError('edge-tts: %s' % e)


def edge_list_voices():
    import asyncio
    import edge_tts

    voices = asyncio.run(edge_tts.list_voices())
    ko = [v for v in voices if v['Locale'].startswith('ko')]
    print('Корейские голоса edge-tts (%d):' % len(ko))
    for v in ko:
        print('  %s  (%s)' % (v['ShortName'], v['Gender']))


# =============================================
# Движок: ElevenLabs
# =============================================

def load_api_key(cli_key):
    if cli_key:
        return cli_key
    if os.environ.get('ELEVENLABS_API_KEY'):
        return os.environ['ELEVENLABS_API_KEY']
    env_path = os.path.join(ROOT, '.env')
    if os.path.exists(env_path):
        for line in open(env_path, encoding='utf-8'):
            line = line.strip()
            if line.startswith('ELEVENLABS_API_KEY='):
                return line.split('=', 1)[1].strip().strip('"\'')
    return None


def el_request(path, api_key, payload=None, timeout=90):
    url = EL_API_BASE + path
    data = json.dumps(payload).encode('utf-8') if payload is not None else None
    req = urllib.request.Request(url, data=data, method='POST' if data else 'GET')
    req.add_header('xi-api-key', api_key)
    if data:
        req.add_header('Content-Type', 'application/json')
    return urllib.request.urlopen(req, timeout=timeout)


def el_list_voices(api_key):
    with el_request('/voices', api_key) as r:
        voices = json.load(r).get('voices', [])
    print('Голоса на аккаунте (%d):' % len(voices))
    for v in voices:
        labels = v.get('labels') or {}
        lang = labels.get('language', '')
        mark = '  <-- корейский' if 'ko' in str(labels).lower() else ''
        print('  %s  %s  [%s]%s' % (v['voice_id'], v['name'], lang, mark))


def el_pick_voice(api_key, cli_voice):
    if cli_voice:
        return cli_voice, None
    try:
        with el_request('/voices', api_key) as r:
            voices = json.load(r).get('voices', [])
        for v in voices:
            if 'ko' in str(v.get('labels') or {}).lower():
                return v['voice_id'], v['name']
    except Exception as e:
        print('[!] не удалось получить список голосов: %s' % e)
    return EL_DEFAULT_VOICE, 'Sarah (premade)'


def el_tts_one(text, voice_id, model, fmt, speed, api_key):
    payload = {
        'text': text,
        'model_id': model,
        'voice_settings': {
            'stability': 0.5,
            'similarity_boost': 0.75,
            'speed': speed,
        },
    }
    path = '/text-to-speech/%s?output_format=%s' % (voice_id, fmt)
    attempt = 0
    while True:
        attempt += 1
        try:
            with el_request(path, api_key, payload) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            body = ''
            try:
                body = e.read().decode('utf-8', 'replace')[:200]
            except Exception:
                pass
            if e.code == 401:
                raise SystemExit('[ERROR] 401 — неверный API-ключ ElevenLabs')
            if e.code in (429, 500, 502, 503) and attempt < 6:
                wait = min(2 ** attempt, 30)
                print('[!] HTTP %d, повтор через %ds (%s)' % (e.code, wait, body))
                time.sleep(wait)
                continue
            raise RuntimeError('HTTP %d: %s' % (e.code, body))
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < 6:
                time.sleep(min(2 ** attempt, 30))
                continue
            raise RuntimeError('сеть: %s' % e)


# =============================================
# Основной поток
# =============================================

def main():
    ap = argparse.ArgumentParser(description='Генерация MP3-озвучки уроков')
    ap.add_argument('--backend', choices=['edge', 'elevenlabs'], default='edge')
    ap.add_argument('--voice', help='голос (edge: ko-KR-SunHiNeural и т.п.)')
    ap.add_argument('--voice-b', default=EDGE_DEFAULT_VOICE_B,
                    help='второй диктор для диалогов (edge); "none" — отключить')
    ap.add_argument('--key', help='API-ключ ElevenLabs')
    ap.add_argument('--voice-id', help='ID голоса ElevenLabs')
    ap.add_argument('--model', default=EL_DEFAULT_MODEL, help='модель ElevenLabs')
    ap.add_argument('--format', default=EL_DEFAULT_FORMAT, help='формат ElevenLabs')
    ap.add_argument('--speed', type=float, default=0.95,
                    help='скорость речи 0.7-1.2 (по умолчанию 0.95)')
    ap.add_argument('--limit', type=int, default=0, help='сгенерировать не больше N файлов')
    ap.add_argument('--workers', type=int, default=6, help='параллельные запросы')
    ap.add_argument('--dry-run', action='store_true', help='только посчитать')
    ap.add_argument('--list-voices', action='store_true')
    args = ap.parse_args()

    if args.list_voices:
        if args.backend == 'edge':
            edge_list_voices()
        else:
            api_key = load_api_key(args.key)
            if not api_key:
                raise SystemExit('[ERROR] нет API-ключа ElevenLabs')
            el_list_voices(api_key)
        return

    phrases, dialogue_phrases = collect_phrases()
    os.makedirs(OUT_DIR, exist_ok=True)

    manifest = {'files': {}}
    if os.path.exists(MANIFEST_PATH):
        try:
            manifest = json.load(open(MANIFEST_PATH, encoding='utf-8'))
        except ValueError:
            print('[!] манифест повреждён, начинаю заново')
    files_map = manifest.setdefault('files', {})

    two_speakers = args.backend == 'edge' and args.voice_b.lower() != 'none'
    files_b = manifest.setdefault('filesB', {}) if two_speakers else {}

    def missing(fmap, p):
        return (p not in fmap
                or not os.path.exists(os.path.join(OUT_DIR, fmap[p])))

    todo = [(p, 'a') for p in phrases if missing(files_map, p)]
    if two_speakers:
        todo += [(p, 'b') for p in dialogue_phrases if missing(files_b, p)]
    chars = sum(len(p) for p, _ in todo)
    total = len(phrases) + (len(dialogue_phrases) if two_speakers else 0)
    print('Дорожек всего: %d (фраз %d + диалоги вторым диктором %d) | '
          'уже готово: %d | к генерации: %d (%d символов)'
          % (total, len(phrases),
             len(dialogue_phrases) if two_speakers else 0,
             total - len(todo), len(todo), chars))

    if args.dry_run:
        return
    if not todo:
        print('[OK] всё уже сгенерировано')
        return

    manifest['backend'] = args.backend
    if args.backend == 'edge':
        voice = args.voice or EDGE_DEFAULT_VOICE
        manifest['voice'] = voice
        if two_speakers:
            manifest['voiceB'] = args.voice_b
        print('Движок: edge-tts | голос: %s | второй диктор: %s | скорость: %s'
              % (voice, args.voice_b if two_speakers else 'нет', args.speed))

        def generate(text, variant='a'):
            v = args.voice_b if variant == 'b' else voice
            return edge_tts_one(text, v, args.speed)
    else:
        api_key = load_api_key(args.key)
        if not api_key:
            raise SystemExit('[ERROR] нет API-ключа: --key, ELEVENLABS_API_KEY или .env')
        voice_id, voice_name = el_pick_voice(api_key, args.voice_id)
        manifest['voice'] = voice_name or voice_id
        manifest['model'] = args.model
        print('Движок: ElevenLabs | голос: %s (%s) | модель: %s | скорость: %s'
              % (voice_id, voice_name or '--voice-id', args.model, args.speed))

        def generate(text, variant='a'):
            return el_tts_one(text, voice_id, args.model, args.format,
                              args.speed, api_key)

    if args.limit:
        todo = todo[:args.limit]

    lock = threading.Lock()
    done = [0]
    errors = []

    def save_manifest():
        tmp = MANIFEST_PATH + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(manifest, f, ensure_ascii=False, indent=1)
        os.replace(tmp, MANIFEST_PATH)

    def worker(chunk):
        for text, variant in chunk:
            try:
                audio = generate(text, variant)
            except (RuntimeError, Exception) as e:
                with lock:
                    errors.append((text, str(e)))
                    print('[ERROR] "%s": %s' % (text[:30], e))
                continue
            fname = phrase_filename(text, variant)
            with open(os.path.join(OUT_DIR, fname), 'wb') as f:
                f.write(audio)
            with lock:
                (files_b if variant == 'b' else files_map)[text] = fname
                done[0] += 1
                if done[0] % 50 == 0 or done[0] == len(todo):
                    save_manifest()
                    print('[+] %d/%d' % (done[0], len(todo)))

    n = max(1, args.workers)
    chunks = [todo[i::n] for i in range(n)]
    threads = [threading.Thread(target=worker, args=(c,)) for c in chunks if c]
    t0 = time.time()
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    save_manifest()

    print('[OK] готово: %d файлов за %d сек, ошибок: %d'
          % (done[0], time.time() - t0, len(errors)))
    if errors:
        for text, err in errors[:10]:
            print('  [-] %s — %s' % (text[:40], err))
        print('Запустите скрипт повторно — докачает только недостающее.')


if __name__ == '__main__':
    main()
