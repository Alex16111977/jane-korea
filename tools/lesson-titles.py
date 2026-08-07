#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — карта «папка урока → русское название» для ссылок на теорию.

В старых курсах ссылки записаны строкой («lesson_104_consonant_assimilation»),
и страница показывала пользователю английский слаг. Название урока уже есть
в самой странице — в <title>, поэтому карту собираем оттуда, а не вручную.

    python3 tools/lesson-titles.py            # собрать js/lesson-titles.js
    python3 tools/lesson-titles.py --check    # показать, что получилось
"""

import argparse
import glob
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_JS = os.path.join(ROOT, 'js', 'lesson-titles.js')

TITLE = re.compile(r'<title>(.*?)</title>', re.S | re.I)
TAG = re.compile(r'<[^>]+>')

# Хвосты и приставки, которые в названии ссылки только мешают
STRIP_TAIL = re.compile(r'\s*[-–—|]\s*(Корейский язык|Miso.*|한국어.*)$', re.I)
# «👨‍👩‍👧‍👦 Урок 5: Семья» → «👨‍👩‍👧‍👦 Семья»: эмодзи сохраняем, номер урока убираем
STRIP_HEAD = re.compile(r'(?<![\w])(Урок|Lesson)\s*\d+\s*[:.)]\s*', re.I)


def page_title(path):
    try:
        head = open(path, encoding='utf-8', errors='ignore').read(4000)
    except OSError:
        return ''
    m = TITLE.search(head)
    if not m:
        return ''
    text = html.unescape(TAG.sub('', m.group(1)))
    text = re.sub(r'\s+', ' ', text).strip()
    text = STRIP_TAIL.sub('', text)
    text = STRIP_HEAD.sub('', text, count=1)
    return text.strip()


def collect():
    titles = {}
    patterns = ('lesson_*/index.html', 'vocabulary/*/index.html',
                'level_*/lesson_*/index.html')
    for pattern in patterns:
        for path in sorted(glob.glob(os.path.join(ROOT, pattern))):
            folder = os.path.relpath(os.path.dirname(path), ROOT)
            if folder.endswith(' 2'):          # дубли облачной синхронизации
                continue
            name = page_title(path)
            if not name:
                continue
            if folder.startswith('vocabulary/') and not name.lower().startswith('словарь'):
                name = 'Словарь: ' + name
            titles[folder] = name
    return titles


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='не писать файл, только показать')
    args = ap.parse_args()

    titles = collect()
    if not titles:
        sys.exit('[ERROR] Не нашлось ни одной страницы урока')

    print('[+] Страниц с названием:', len(titles))
    for folder in list(titles)[:5]:
        print('   ', folder, '→', titles[folder])

    if args.check:
        print('[OK] Проверка, файл не записан')
        return

    header = (
        '/**\n'
        ' * Русские названия уроков и словарей для ссылок «Теория по этим темам».\n'
        f' * {len(titles)} страниц. Собрано из <title> самих страниц.\n'
        ' *\n'
        ' * Файл сгенерирован tools/lesson-titles.py — правки вносите в сами уроки.\n'
        ' */\n'
        'window.lessonTitles = '
    )
    with open(OUT_JS, 'w', encoding='utf-8') as fh:
        fh.write(header + json.dumps(titles, ensure_ascii=False, indent=1,
                                     sort_keys=True) + ';\n')
    print('[OK] Записано:', os.path.relpath(OUT_JS, ROOT))


if __name__ == '__main__':
    main()
