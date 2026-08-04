#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — сборка js/snu-exercises.js из tools/snu-data/*.json.

Источник: 서울대학교 언어교육원, «한국어 1» (문진미디어, 2000), 30 уроков.
Книга — скан без текстового слоя, поэтому упражнения перенесены вручную
в JSON по одному файлу на урок. Ключей в самой книге нет: задания — это
подстановочные упражнения, ответ однозначно выводится из образца.

    python3 tools/snu-build.py            # собрать js/snu-exercises.js
    python3 tools/snu-build.py --check    # только проверить данные

Схема файла урока (tools/snu-data/NN.json):

    {
      "n": "s1",                     # id урока, уникальный среди всех курсов
      "name": "Урок 1 · ...",
      "topic": "чему учит урок",
      "level": 1,                    # 급 для фильтра на хабе
      "links": [{"href": "lesson_14_demonstratives", "t": "название"}],
      "dialog":   [{"k": "한국어", "r": "перевод"}],
      "glossary": [{"k": "단어",   "r": "перевод"}],
      "ex": [{"id": "1.1", "title": "...", "kind": "input",
              "items": [{"q": "задание", "a": "ключ",
                         "c": "что сверять", "h": "подсказка"}]}]
    }

kind:
    input  — короткий ответ, проверяется автоматически (c — что сверять)
    reveal — развёрнутый ответ, ключ открывается кнопкой
    select — отметить подходящие пункты (a: '—' — не подходит)
    read   — прочитать вслух, ключа нет
    open   — творческое задание без ключа
"""

import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, 'tools', 'snu-data')
OUT_JS = os.path.join(ROOT, 'js', 'snu-exercises.js')

KINDS = {'input', 'reveal', 'select', 'read', 'open'}
SRC = 'snu'


def fail(msg, errors):
    errors.append('[ERROR] ' + msg)


def check_unit(unit, path, errors, seen_ids):
    where = os.path.basename(path)

    for field in ('n', 'name', 'topic', 'level', 'ex'):
        if field not in unit:
            fail(f'{where}: нет поля {field}', errors)

    n = unit.get('n')
    if n in seen_ids:
        fail(f'{where}: id урока {n} уже занят', errors)
    seen_ids.add(n)

    if unit.get('level') not in (1, 2, 3, 4):
        fail(f'{where}: level должен быть 1-4, а не {unit.get("level")}', errors)

    # Ссылки на теорию должны существовать на диске
    for link in unit.get('links', []):
        href = link['href'] if isinstance(link, dict) else link
        if not os.path.isdir(os.path.join(ROOT, href)):
            fail(f'{where}: нет папки урока {href}', errors)

    ex_ids = set()
    for ex in unit.get('ex', []):
        eid = ex.get('id')
        if eid in ex_ids:
            fail(f'{where}: упражнение {eid} задано дважды', errors)
        ex_ids.add(eid)

        if ex.get('kind') not in KINDS:
            fail(f'{where} / {eid}: неизвестный kind {ex.get("kind")}', errors)
        if not ex.get('title'):
            fail(f'{where} / {eid}: пустой заголовок', errors)

        items = ex.get('items', [])
        if ex['kind'] in ('input', 'reveal', 'select') and not items:
            fail(f'{where} / {eid}: у kind={ex["kind"]} должны быть items', errors)

        for i, it in enumerate(items, 1):
            if not it.get('q'):
                fail(f'{where} / {eid}.{i}: пустой вопрос', errors)
            if ex['kind'] in ('input', 'reveal', 'select') and not it.get('a'):
                fail(f'{where} / {eid}.{i}: нет ключа', errors)
            if ex['kind'] == 'read' and it.get('a'):
                fail(f'{where} / {eid}.{i}: у kind=read ключа быть не должно', errors)


def counts(units):
    ex = sum(len(u['ex']) for u in units)
    items = sum(len(e.get('items', [])) for u in units for e in u['ex'])
    keys = sum(1 for u in units for e in u['ex']
               for it in e.get('items', []) if it.get('a'))
    return ex, items, keys


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='только проверить, не писать файл')
    args = ap.parse_args()

    files = sorted(f for f in os.listdir(DATA_DIR) if re.fullmatch(r'\d+\.json', f))
    if not files:
        sys.exit('[ERROR] Нет файлов уроков в ' + os.path.relpath(DATA_DIR, ROOT))

    units, errors, seen = [], [], set()
    for name in files:
        path = os.path.join(DATA_DIR, name)
        try:
            unit = json.load(open(path, encoding='utf-8'))
        except json.JSONDecodeError as err:
            fail(f'{name}: сломанный JSON — {err}', errors)
            continue
        check_unit(unit, path, errors, seen)
        unit['src'] = SRC
        # Пустые items у open-заданий только мешают — убираем
        for ex in unit.get('ex', []):
            if not ex.get('items'):
                ex.pop('items', None)
        units.append(unit)

    if errors:
        print('\n'.join(errors))
        sys.exit('[ERROR] Ошибок: %d — файл не записан' % len(errors))

    total_ex, total_items, total_keys = counts(units)
    dialogs = sum(len(u.get('dialog', [])) for u in units)
    words = sum(len(u.get('glossary', [])) for u in units)
    print('[+] Уроков:', len(units), '| упражнений:', total_ex,
          '| заданий:', total_items, '| с ключами:', total_keys)
    print('[+] Реплик в диалогах:', dialogs, '| слов в словариках:', words)

    if args.check:
        print('[OK] Проверка пройдена, файл не записан')
        return

    header = (
        '/**\n'
        ' * Курс 서울대 한국어 1 — учебник Института языкового образования\n'
        ' * Сеульского национального университета (문진미디어, 2000).\n'
        f' * {len(units)} уроков, {total_ex} упражнений, {total_items} заданий.\n'
        ' *\n'
        ' * kind:\n'
        ' *   input  — короткий ответ, проверяется автоматически (поле c — что сверять)\n'
        ' *   reveal — развёрнутый ответ, ключ открывается кнопкой\n'
        ' *   select — отметить подходящие пункты\n'
        ' *   read   — прочитать вслух, ключа нет\n'
        ' *   open   — творческое задание без ключа\n'
        ' *\n'
        ' * Файл сгенерирован tools/snu-build.py из tools/snu-data/*.json —\n'
        ' * правки вносите там.\n'
        ' */\n'
        'window.snuExercises = '
    )
    with open(OUT_JS, 'w', encoding='utf-8') as fh:
        fh.write(header + json.dumps(units, ensure_ascii=False, indent=1) + ';\n')
    print('[OK] Записано:', os.path.relpath(OUT_JS, ROOT))


if __name__ == '__main__':
    main()
