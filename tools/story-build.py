#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — добавление текста для чтения из JSON.

Собирает разметку <span class="korean-word"> с переводом и произношением
(романизация считается автоматически, tools/romanize.py) и вставляет запись
в storyDatabase (reading-content.html) и textsDatabase (reading-texts.html),
плюс картинку в обе карты изображений.

    python3 tools/story-build.py story.json --dry-run
    python3 tools/story-build.py story.json

Формат входного файла — см. tools/story-example.json. Обязательные поля:
level, category, id, title, subtitle, preview, image, paragraphs,
translation, quiz (ровно 4 вопроса).

paragraphs — список абзацев, абзац это список токенов "한글|перевод".
Токен, начинающийся с "+", приклеивается к предыдущему слову без пробела
(так оформляются частицы: "학교|школа", "+에|в").
"""

import argparse
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from romanize import romanize  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, 'reading-content.html')
TEXTS = os.path.join(ROOT, 'reading-texts.html')
# Тексты 1-2급 лежат в storyDatabase внутри reading-content.html, а 3-6급 —
# в отдельных файлах level-N-texts.js: там объект плоский (сразу категории)
# и абзацы обёрнуты в <p>...</p>. Объявлен он по-разному: 3급 через window.,
# остальные через const.
LEVEL_FILE = {n: os.path.join(ROOT, 'level-%d-texts.js' % n) for n in (3, 4, 5, 6)}
REQUIRED = ('level', 'category', 'id', 'title', 'subtitle', 'preview', 'image',
            'paragraphs', 'translation', 'quiz')


def validate(d):
    problems = [f'нет обязательного поля "{k}"' for k in REQUIRED if k not in d]
    if problems:
        return problems
    if len(d['quiz']) != 4:
        problems.append('в quiz должно быть ровно 4 вопроса, а не %d' % len(d['quiz']))
    for i, q in enumerate(d['quiz'], 1):
        if len(q.get('options', [])) != 4:
            problems.append('вопрос #%d: нужно ровно 4 варианта ответа' % i)
        if not 0 <= q.get('correct', -1) <= 3:
            problems.append('вопрос #%d: correct должен быть 0-3' % i)
    if not os.path.exists(os.path.join(ROOT, d['image'])):
        problems.append('нет файла картинки %s' % d['image'])
    for p, para in enumerate(d['paragraphs'], 1):
        for tok in para:
            if '|' not in tok:
                problems.append('абзац %d: токен %r без разделителя "|"' % (p, tok))
    return problems


def esc(s):
    return s.replace('&', '&amp;').replace('"', '&quot;')


def build_korean(paragraphs, wrap=False):
    """Список абзацев -> строка с размеченными словами.

    wrap=True оборачивает каждый абзац в <p>...</p> — так размечены тексты
    в level-N-texts.js, тогда как в reading-content.html абзацы разделены
    пустой строкой.
    """
    out = []
    for para in paragraphs:
        chunks = []
        for tok in para:
            word, _, tr = tok.partition('|')
            glue = word.startswith('+')
            word = word.lstrip('+')
            tail = ''
            m = re.search(r'([.,!?…]+)$', word)
            if m:                      # знак препинания выносим за span
                tail = m.group(1)
                word = word[:-len(tail)]
            span = ('<span class="korean-word" data-translation="%s" '
                    'data-pronunciation="%s [%s]">%s</span>%s'
                    % (esc(tr), esc(word), romanize(word), word, tail))
            chunks.append(('' if glue or not chunks else ' ') + span)
        out.append(''.join(chunks))
    if wrap:
        return '\n'.join('<p>%s</p>' % p for p in out)
    return '\n\n'.join(out)


def js(s):
    return "'%s'" % s.replace('\\', '\\\\').replace("'", "\\'")


def jstr(s):
    """Содержимое двойных кавычек в JS: перенос строки в литерал не влезает."""
    return (s.replace('\\', '\\\\').replace('"', '\\"')
             .replace('\n', '\\n').replace('\r', ''))


def build_story_entry(d, indent, wrap=False):
    p = ' ' * indent
    quiz = []
    for q in d['quiz']:
        opts = ', '.join('"%s"' % jstr(o) for o in q['options'])
        quiz += [p + '    {',
                 p + '        question: "%s",' % jstr(q['question']),
                 p + '        options: [%s],' % opts,
                 p + '        correct: %d' % q['correct'],
                 p + '    },']
    quiz[-1] = quiz[-1].rstrip(',')
    return '\n'.join([
        p + '{',
        p + "    id: '%s'," % d['id'],
        p + '    title: "%s",' % jstr(d['title']),
        p + '    subtitle: "%s",' % jstr(d['subtitle']),
        p + '    korean: `%s`,' % build_korean(d['paragraphs'], wrap),
        p + '    translation: "%s",' % jstr(d['translation']),
        p + '    quiz: [',
        '\n'.join(quiz),
        p + '    ]',
        p + '}',
    ])


def build_list_entry(d, indent):
    p = ' ' * indent
    return '\n'.join([
        p + '{',
        p + "    id: '%s'," % d['id'],
        p + '    title: "%s",' % jstr(d['title']),
        p + '    subtitle: "%s",' % jstr(d['subtitle']),
        p + '    preview: "%s"' % jstr(d['preview']),
        p + '}',
    ])


def find_category_array(text, root_marker, level, category):
    """Границы массива категории: (позиция закрывающей скобки, отступ элементов).

    Ищем по отступам, а не по счётчику скобок: в тексте есть строки вида
    data-pronunciation="한국 [hanguk]", и скобки внутри строк сбили бы счёт.
    """
    i = text.index(root_marker)
    if level is None:
        # плоский файл level-N-texts.js: категории лежат прямо в корне
        i += len(root_marker)
        level_pad = ''
    else:
        m = re.search(r'\n(\s{4,})%d: \{' % level, text[i:])
        if not m:
            raise SystemExit('[ERROR] в %s нет уровня %d' % (root_marker, level))
        level_pad = m.group(1)
        i += m.end()
    # блок уровня заканчивается "}" с тем же отступом; искать категорию можно
    # только внутри него, иначе поиск уедет в соседний уровень
    block_end = re.search(r'\n%s\};?,?\n' % level_pad, text[i:])
    if not block_end:
        raise SystemExit('[ERROR] не найден конец блока уровня %s' % level)
    block = text[i:i + block_end.start()]

    cat_pad = level_pad + '    '
    m = re.search(r'\n%s%s: \[' % (cat_pad, category), block)
    if not m:
        return None, len(cat_pad) + 4, (i, level_pad)
    end = re.search(r'\n%s\](,?)\n' % cat_pad, block[m.end():])
    if not end:
        raise SystemExit('[ERROR] не найден конец массива %s' % category)
    return i + m.end() + end.start() + 1, len(cat_pad) + 4, None


def add_category(text, level_info, category, entry, indent):
    """Создаёт массив новой категории в конце блока уровня."""
    i, level_pad = level_info
    end = re.search(r'\n%s\};?,?\n' % level_pad, text[i:])
    if not end:
        raise SystemExit('[ERROR] не найден конец блока уровня')
    pos = i + end.start()
    head = text[:pos].rstrip()
    if not head.endswith(','):
        head += ','
    block = '\n%s%s: [\n%s\n%s],' % (level_pad + '    ', category, entry, level_pad + '    ')
    return head + block + text[pos:]


def insert_image(text, story_id, image, alt, marker):
    """Добавляет запись в карту картинок, если её ещё нет."""
    if "'%s':" % story_id in text[text.index(marker):text.index(marker) + 8000]:
        return text, False
    i = text.index(marker)
    line_end = text.index('\n', text.index('{', i)) + 1
    pad = re.match(r'\s*', text[line_end:]).group(0)
    if marker.endswith('storyImageMap = {'):
        entry = "%s'%s': { src: '%s', alt: '%s' },\n" % (pad, story_id, image, alt)
    else:
        entry = "%s'%s': '%s',\n" % (pad, story_id, os.path.basename(image))
    return text[:line_end] + entry + text[line_end:], True


def main():
    ap = argparse.ArgumentParser(description='Добавление текста для чтения')
    ap.add_argument('source', help='JSON с описанием текста')
    ap.add_argument('--dry-run', action='store_true', help='только проверить данные')
    args = ap.parse_args()

    d = json.load(open(args.source, encoding='utf-8'))
    problems = validate(d)
    if problems:
        print('[ERROR] ' + '\n[ERROR] '.join(problems))
        raise SystemExit(1)

    words = sum(len(p) for p in d['paragraphs'])
    print('[OK] данные корректны: %s (%d급, %s) — %d слов, %d вопросов'
          % (d['id'], d['level'], d['category'], words, len(d['quiz'])))
    if args.dry_run:
        print('[i] сухой прогон: файлы не изменены')
        return

    # Ключ картинки всегда с номером уровня: в разных уровнях встречаются
    # одинаковые id (sports-1 есть и в 1급, и во 2급), а поиск идёт
    # `map[level-id] || map[id]` — без префикса запись перехватила бы чужой текст.
    key = '%d-%s' % (d['level'], d['id'])

    if d['level'] in LEVEL_FILE:
        store_path = LEVEL_FILE[d['level']]
        head = open(store_path, encoding='utf-8').read()
        store_marker = next((c for c in ('window.level%dTexts = {' % d['level'],
                                         'const level%dTexts = {' % d['level'])
                             if c in head), None)
        if not store_marker:
            raise SystemExit('[ERROR] в %s не найден объект level%dTexts'
                             % (os.path.basename(store_path), d['level']))
        # 4급 хранит категории под ключом уровня (level4Texts[4]), остальные —
        # прямо в корне объекта
        nested = re.match(r'\s*\n\s*%d: \{' % d['level'],
                          head[head.index(store_marker) + len(store_marker):])
        store_level, wrap = (d['level'] if nested else None), True
    else:
        store_path, store_marker = CONTENT, 'const storyDatabase'
        store_level, wrap = d['level'], False

    for path, marker, lvl, img_marker, builder, label in (
            (store_path, store_marker, store_level,
             'const storyImageMap = {' if store_path == CONTENT else None,
             lambda d, i: build_story_entry(d, i, wrap),
             os.path.basename(store_path) + ': текст'),
            (TEXTS, 'const textsDatabase', d['level'], 'const imageMap = {',
             build_list_entry, 'reading-texts.html: карточка')):
        text = open(path, encoding='utf-8').read()
        pos, indent, level_info = find_category_array(text, marker, lvl, d['category'])
        # id уникален в пределах уровня: sports-1 может быть и в 1급, и во 2급
        if pos is not None:
            start = text.rindex('[', 0, pos)
            if "id: '%s'" % d['id'] in text[start:pos]:
                raise SystemExit('[ERROR] текст %s уже есть в %s (уровень %d, %s)'
                                 % (d['id'], os.path.basename(path), d['level'], d['category']))
        entry = builder(d, indent)
        if pos is None:
            text = add_category(text, level_info, d['category'], entry, indent)
            note = ' (создана категория %s)' % d['category']
        else:
            text = text[:pos].rstrip() + ',\n' + entry + '\n' + ' ' * (indent - 4) + text[pos:]
            note = ''
        added = True
        if img_marker:      # в level-N-texts.js карты картинок нет
            text, added = insert_image(text, key, d['image'], d.get('alt', d['title']), img_marker)
        open(path, 'w', encoding='utf-8').write(text)
        print('[+] %s добавлен%s%s' % (label, note, '' if added else ' (картинка уже была)'))

    if store_path != CONTENT:
        # картинку всё равно ищет reading-content.html — дописываем туда
        text = open(CONTENT, encoding='utf-8').read()
        text, added = insert_image(text, key, d['image'], d.get('alt', d['title']),
                                   'const storyImageMap = {')
        if added:
            open(CONTENT, 'w', encoding='utf-8').write(text)
            print('[+] reading-content.html: картинка добавлена')
    print('[i] дальше: озвучка файла audio/%d-%s-%s.mp3'
          % (d['level'], d['category'], d['id']))


if __name__ == '__main__':
    main()
