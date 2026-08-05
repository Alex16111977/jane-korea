#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — добавление слов в СУЩЕСТВУЮЩИЕ категории словаря.

vocab-build.py собирает страницу с нуля, но большинство старых категорий
(body, house, weather, ...) собраны вручную и каждая со своим форматом записи.
Этот скрипт дописывает слова в готовую страницу, копируя формат первой записи
массива — поэтому поля и раскладка строк не разъезжаются.

    python3 tools/vocab-append.py patch.json --dry-run   # проверить
    python3 tools/vocab-append.py patch.json             # дописать

Формат patch.json — список пачек:

    [{"slug": "body",
      "entries": [{"korean": "눈동자", "reading": "nundongja",
                   "translation": "зрачок", "emoji": "👁️",
                   "group": "",              # значение поля group/category
                   "example": "...", "exampleTr": "..."}]}]

Ключ "reading" ложится в romanization или pronunciation — как в файле.
Ключ "group" ложится в group или category — как в файле.
Если у категории есть tools/vocab-data/<slug>.json, слова дописываются туда
и страница пересобирается через vocab-build.py (флаг --rebuild).

После добавления слов озвучьте их: python3 tools/tts-sync.py
"""

import argparse
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOCAB = os.path.join(ROOT, 'vocabulary')
DATA = os.path.join(ROOT, 'tools', 'vocab-data')

# Синонимы полей: как называется в файле -> как называется в патче
ALIAS = {
    'romanization': 'reading', 'pronunciation': 'reading',
    'exampleTr': 'exampleTr', 'exampleTranslation': 'exampleTr',
    'group': 'group', 'category': 'group',
    'korean': 'korean', 'translation': 'translation',
    'emoji': 'emoji', 'example': 'example',
}


def find_array(text):
    """Границы массива слов: (start, end) — индексы в тексте.

    start — позиция первой '{' первой записи, end — позиция символа перед '];'.
    """
    first = re.search(r"\n[ \t]*\{[^{}]{0,200}?korean\s*:", text)
    if not first:
        sys.exit('[ERROR] не найден массив слов (нет записи с korean:)')
    entry_start = first.start(0) + 1
    last = None
    for m in re.finditer(r"korean:", text):
        last = m
    close = text.find('];', last.end())
    if close < 0:
        sys.exit('[ERROR] не найдено закрытие массива "];"')
    return entry_start, close


def take_template(text, start):
    """Текст первой записи целиком (со скобками), без хвостовой запятой."""
    depth = 0
    for i in range(start, len(text)):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return text[start:i + 1]
    sys.exit('[ERROR] не удалось разобрать первую запись массива')


VALUE = re.compile(r"(\b\w+)(\s*:\s*)(['\"])(.*?)(?<!\\)\3", re.S)


def render(template, entry, slug):
    """Подставляет значения записи в формат первой записи файла."""
    missing = []

    def repl(m):
        key, sep, quote = m.group(1), m.group(2), m.group(3)
        field = ALIAS.get(key)
        if field is None:
            return m.group(0)
        if field not in entry:
            missing.append(f'{slug}: нет поля "{field}" (в файле — {key})')
            return m.group(0)
        val = str(entry[field]).replace('\\', '\\\\').replace(quote, '\\' + quote)
        return f'{key}{sep}{quote}{val}{quote}'

    out = VALUE.sub(repl, template)
    if missing:
        for p in sorted(set(missing)):
            print('[ERROR] ' + p)
        sys.exit(1)
    return out


def append_html(slug, entries, dry):
    path = os.path.join(VOCAB, slug, 'index.html')
    if not os.path.exists(path):
        sys.exit(f'[ERROR] нет страницы {path}')
    text = open(path, encoding='utf-8').read()
    start, close = find_array(text)
    template = take_template(text, start)

    # Поля, которых нет в ALIAS, копируются из первой записи как есть — а это
    # почти всегда ошибка (dotClass, baseVerb и т.п. останутся от чужого слова).
    unknown = sorted({k for k, _, _, _ in VALUE.findall(template)} - set(ALIAS))
    if unknown:
        print(f'[!] {slug}: поля {", ".join(unknown)} скопируются из первой записи '
              f'без изменений — проверьте результат или правьте страницу вручную')

    have = set(re.findall(r"korean:\s*['\"]([^'\"]+)['\"]", text))
    fresh = [e for e in entries if e['korean'] not in have]
    skipped = [e['korean'] for e in entries if e['korean'] in have]

    if not fresh:
        print(f'[!] {slug}: всё уже есть, пропуск')
        return 0

    blocks = [render(template, e, slug) for e in fresh]
    head = text[:close].rstrip()
    if not head.endswith(','):
        head += ','
    pad = re.search(r'\n([ \t]*)$', text[:start]).group(1)   # отступ первой записи
    body = ''.join('\n' + pad + b + ',' for b in blocks)
    new = head + body + '\n' + text[close:]

    if dry:
        print(f'[dry] {slug}: +{len(fresh)} слов' +
              (f', пропущено {len(skipped)}' if skipped else ''))
        print('      пример:', blocks[0].replace('\n', ' ')[:150])
    else:
        open(path, 'w', encoding='utf-8').write(new)
        print(f'[OK] {slug}: +{len(fresh)} слов -> vocabulary/{slug}/index.html' +
              (f' (пропущено {len(skipped)}: {", ".join(skipped)})' if skipped else ''))
    return len(fresh)


def append_json(slug, entries, dry, rebuild):
    path = os.path.join(DATA, slug + '.json')
    data = json.load(open(path, encoding='utf-8'))
    groups = {g[0] for g in data['groups']}
    have = {w['korean'] for w in data['words']}
    fresh = []
    for e in entries:
        if e['korean'] in have:
            continue
        if e['group'] not in groups:
            sys.exit(f'[ERROR] {slug}: группы "{e["group"]}" нет, есть {sorted(groups)}')
        fresh.append({
            'group': e['group'], 'emoji': e['emoji'], 'korean': e['korean'],
            'romanization': e['reading'], 'translation': e['translation'],
            'example': e['example'], 'exampleTr': e['exampleTr'],
        })
    if not fresh:
        print(f'[!] {slug}: всё уже есть, пропуск')
        return 0
    if dry:
        print(f'[dry] {slug}: +{len(fresh)} слов в JSON (было {len(data["words"])})')
        return len(fresh)
    data['words'].extend(fresh)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f'[OK] {slug}: +{len(fresh)} слов -> tools/vocab-data/{slug}.json')
    if rebuild:
        r = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'vocab-build.py'), path],
                           capture_output=True, text=True)
        print('     ' + (r.stdout.strip().splitlines() or ['(нет вывода)'])[-1])
        if r.returncode:
            print(r.stderr)
            sys.exit(f'[ERROR] пересборка {slug} упала')
    return len(fresh)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('patch')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--no-rebuild', action='store_true',
                    help='не пересобирать JSON-категории через vocab-build.py')
    args = ap.parse_args()

    patches = json.load(open(args.patch, encoding='utf-8'))
    if isinstance(patches, dict):
        patches = [patches]

    total = 0
    for p in patches:
        slug, entries = p['slug'], p['entries']
        if os.path.exists(os.path.join(DATA, slug + '.json')):
            total += append_json(slug, entries, args.dry_run, not args.no_rebuild)
        else:
            total += append_html(slug, entries, args.dry_run)

    print(f'\n[+] всего слов: {total}')
    if not args.dry_run and total:
        print('[i] дальше: python3 tools/tts-sync.py --dry-run  (и затем без флага)')


if __name__ == '__main__':
    main()
