#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — озвучка текстов для чтения через edge-tts (бесплатно).

Тот же набор текстов, что и у tools/tts-elevenlabs.py (логика поиска берётся
оттуда же), но синтез идёт бесплатным edge-tts, без ключей и лимитов.
Файлы кладутся в audio/{уровень}-{категория}-{id}.mp3 — под теми именами,
которые ищет reading-content.html.

    python3 tools/tts-texts.py --dry-run
    python3 tools/tts-texts.py

Запросы идут в 8 потоков. Уже озвученные тексты пропускаются, --force
перезаписывает.
"""

import argparse
import asyncio
import importlib.util
import os
import sys

import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICE = 'ko-KR-SunHiNeural'
THREADS = 8

# разбор баз текстов лежит в соседнем скрипте, дублировать его незачем
_spec = importlib.util.spec_from_file_location(
    'tts_elevenlabs', os.path.join(ROOT, 'tools', 'tts-elevenlabs.py'))
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)


async def synth(out, text, sem, done):
    async with sem:
        await edge_tts.Communicate(text, VOICE).save(out)
        done.append(out)
        if len(done) % 10 == 0:
            print('[+] %d готово' % len(done))


async def run(jobs):
    sem = asyncio.Semaphore(THREADS)
    done = []
    await asyncio.gather(*(synth(o, t, sem, done) for o, t in jobs))
    return done


def main():
    ap = argparse.ArgumentParser(description='Озвучка текстов через edge-tts')
    ap.add_argument('--force', action='store_true', help='перезаписать существующие')
    ap.add_argument('--dry-run', action='store_true', help='только показать список')
    args = ap.parse_args()

    jobs = _mod.scan_site()
    if args.force:
        pass  # scan_site уже отсеял озвученные; --force имеет смысл после ручной чистки
    print('[i] к озвучке %d текстов, %d символов'
          % (len(jobs), sum(len(t) for _, t in jobs)))
    if args.dry_run or not jobs:
        return
    done = asyncio.run(run(jobs))
    print('[OK] озвучено %d файлов' % len(done))


if __name__ == '__main__':
    main()
