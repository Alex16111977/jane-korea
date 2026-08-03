#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Досинхронизация озвучки словарей (vocabulary/*) и урока о семье.

Проходит по страницам, собирает корейские слова, примеры и русские переводы,
и генерирует MP3 для всего, чего нет в манифесте или чей файл пропал с диска.
Запросы идут в 8 параллельных потоков — это примерно в 8 раз быстрее очереди
по одному (проверено замером: 8 фраз за 1.0 с против 8.2 с).

    python3 tools/tts-sync.py --dry-run   # только показать, что будет сгенерировано
    python3 tools/tts-sync.py             # сгенерировать

Голоса: ko-KR-SunHiNeural (корейский), ru-RU-SvetlanaNeural (русский).
Имя файла — sha1(текст)[:16], то же правило, что и в tools/tts-generate.py,
поэтому манифесты обоих скриптов совместимы.
"""
import asyncio, glob, hashlib, json, os, re, sys
import edge_tts

ROOT = '/Users/yevheniialytvyniuk/Documents/GitHub/jane-korea'
OUT = os.path.join(ROOT, 'audio', 'tts')
MANIFEST = os.path.join(OUT, 'manifest.json')
KO_VOICE = 'ko-KR-SunHiNeural'
RU_VOICE = 'ru-RU-SvetlanaNeural'

PAGES = sorted(glob.glob('vocabulary/*/index.html')) + ['lesson_05_family/index.html']

HANGUL = re.compile(r'[가-힯]')


def collect(path):
    txt = open(os.path.join(ROOT, path), encoding='utf-8').read()
    ko, ru = [], []
    ko += re.findall(r"korean: '([^']+)'", txt)
    ko += re.findall(r"example: '([^']+)'", txt)
    ko += re.findall(r"speakKorean\('([^']+)'\)", txt)
    ko += re.findall(r"speak\('([^']+)'\)", txt)
    for a, b in re.findall(r"\{a: '([^']+)', b: '([^']+)'", txt):
        ko += [a, b]
    ru += re.findall(r"translation: '([^']+)'", txt)
    ru += re.findall(r"exampleTr: '([^']+)'", txt)
    ru += re.findall(r"exampleTranslation: '([^']+)'", txt)
    ko += re.findall(r"pronunciation: '([^']+)'", txt)
    ko = [t for t in ko if HANGUL.search(t) and '$' not in t]
    ru = [t for t in ru if not HANGUL.search(t) and '$' not in t]
    return ko, ru


async def synth(text, voice, path):
    for attempt in range(3):
        try:
            comm = edge_tts.Communicate(text, voice)
            buf = b''
            async for chunk in comm.stream():
                if chunk['type'] == 'audio':
                    buf += chunk['data']
            if len(buf) < 800:
                raise RuntimeError('пустой поток')
            with open(path, 'wb') as f:
                f.write(buf)
            return
        except Exception:
            if attempt == 2:
                raise
            await asyncio.sleep(2)


async def main():
    man = json.load(open(MANIFEST, encoding='utf-8'))
    todo = []
    for page in PAGES:
        ko, ru = collect(page)
        for key, voice, suffix, lst in (('files', KO_VOICE, '.mp3', ko),
                                        ('filesRu', RU_VOICE, '-ru.mp3', ru)):
            for t in dict.fromkeys(lst):
                fn = hashlib.sha1(t.encode('utf-8')).hexdigest()[:16] + suffix
                exists = os.path.exists(os.path.join(OUT, fn))
                if t in man[key] and exists:
                    continue
                todo.append((key, voice, fn, t, exists))
    # убираем дубли между страницами
    seen, uniq = set(), []
    for item in todo:
        if item[3] in seen:
            continue
        seen.add(item[3])
        uniq.append(item)
    print('[+] к генерации: %d' % len(uniq))
    if '--dry-run' in sys.argv:
        for k, v, fn, t, ex in uniq[:40]:
            print('   %s %s' % (k, t))
        return
    sem = asyncio.Semaphore(8)          # 8 параллельных запросов вместо очереди по одному
    done = [0]
    lock = asyncio.Lock()

    async def worker(item):
        key, voice, fn, t, exists = item
        async with sem:
            if not exists:
                await synth(t, voice, os.path.join(OUT, fn))
        async with lock:
            man[key][t] = fn
            done[0] += 1
            if done[0] % 40 == 0:
                print('[+] %d/%d' % (done[0], len(uniq)), flush=True)
                tmp = MANIFEST + '.tmp'
                with open(tmp, 'w', encoding='utf-8') as f:
                    json.dump(man, f, ensure_ascii=False, indent=1)
                os.replace(tmp, MANIFEST)

    await asyncio.gather(*(worker(i) for i in uniq))
    done = done[0]
    tmp = MANIFEST + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(man, f, ensure_ascii=False, indent=1)
    os.replace(tmp, MANIFEST)
    print('[OK] обработано %d | ko=%d ru=%d' % (done, len(man['files']), len(man['filesRu'])))


asyncio.run(main())
