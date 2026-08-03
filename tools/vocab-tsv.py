#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""TSV -> JSON для tools/vocab-build.py.

Компактный формат ввода: шапка со свойствами страницы и строки слов через
табуляцию. Романизация считается автоматически (tools/romanize.py), поэтому
в TSV её писать не нужно.

    #slug: topik3_adverbs
    #emoji: ⚡
    #title: TOPIK 중급: наречия
    #korean: 부사
    #kr_read: пуса
    #subtitle: 106 наречий среднего уровня
    #level: 3
    #group: freq|Частота и время|빈도
    группа<TAB>эмодзи<TAB>한글<TAB>перевод<TAB>пример<TAB>перевод примера

    python3 tools/vocab-tsv.py tools/vocab-data/topik3_adverbs.tsv
    -> tools/vocab-data/topik3_adverbs.json
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from romanize import romanize  # noqa: E402

FIELDS = ('group', 'emoji', 'korean', 'translation', 'example', 'exampleTr')


def convert(path):
    data = {'groups': [], 'words': []}
    errors = []
    with open(path, encoding='utf-8') as f:
        for n, line in enumerate(f, 1):
            line = line.rstrip('\n')
            if not line.strip():
                continue
            if line.startswith('#'):
                key, _, val = line[1:].partition(':')
                key, val = key.strip(), val.strip()
                if key == 'group':
                    parts = val.split('|')
                    if len(parts) != 3:
                        errors.append('строка %d: группа должна быть key|Название|한글' % n)
                        continue
                    data['groups'].append(parts)
                elif key == 'level':
                    data['level'] = int(val)
                elif key:
                    data[key] = val
                continue
            cells = line.split('\t')
            if len(cells) != len(FIELDS):
                errors.append('строка %d: %d колонок вместо %d -> %s'
                              % (n, len(cells), len(FIELDS), line[:60]))
                continue
            w = dict(zip(FIELDS, (c.strip() for c in cells)))
            w['romanization'] = romanize(w['korean'])
            data['words'].append(w)

    if errors:
        print('[ERROR] ' + '\n[ERROR] '.join(errors))
        raise SystemExit(1)

    out = os.path.splitext(path)[0] + '.json'
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    print('[OK] %s -> %s (%d слов, %d групп)'
          % (os.path.basename(path), os.path.basename(out),
             len(data['words']), len(data['groups'])))
    return out


if __name__ == '__main__':
    if len(sys.argv) < 2:
        raise SystemExit('использование: vocab-tsv.py file.tsv [file2.tsv ...]')
    for p in sys.argv[1:]:
        convert(p)
