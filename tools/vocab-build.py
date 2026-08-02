#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — сборка страницы словаря из списка слов.

Берёт JSON со словами, собирает готовую страницу vocabulary/<slug>/index.html
на основе шаблона vocabulary/money/index.html (режимы «Словарь / Карточки /
Тест / Слушать», поиск, озвучка) и по флагу регистрирует её в навигации.

    python3 tools/vocab-build.py words.json --dry-run   # проверить данные
    python3 tools/vocab-build.py words.json             # собрать страницу
    python3 tools/vocab-build.py words.json --register  # + карточка и ID в навигации

После сборки озвучьте новые слова:

    python3 tools/tts-sync.py --dry-run
    python3 tools/tts-sync.py

Формат входного файла — см. tools/vocab-example.json. Обязательные поля:
slug, title, emoji, korean, kr_read, subtitle, level (1-6), groups, words.
Цвета страницы подставляются по уровню, поэтому задавать их не нужно.

Пометки уместности пишутся прямо в translation: «(со своими)» — только с
друзьями-ровесниками, «(грубо)» — понимать, но не употреблять. Если такие
слова есть, на странице автоматически появляется блок-легенда со счётчиком.
"""

import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE = os.path.join(ROOT, 'vocabulary', 'money', 'index.html')
LESSONS = os.path.join(ROOT, 'lessons.html')

# Цвета шаблона, которые заменяются на цвета уровня
TPL_PRIMARY, TPL_LIGHT = '#c62828', '#ef5350'

LEVEL_COLORS = {
    1: ('#4caf50', '#66bb6a'),
    2: ('#2196F3', '#42A5F5'),
    3: ('#FF9800', '#FFA726'),
    4: ('#9C27B0', '#AB47BC'),
    5: ('#E91E63', '#EC407A'),
    6: ('#667eea', '#764ba2'),
}

REQUIRED = ('slug', 'title', 'emoji', 'korean', 'kr_read', 'subtitle', 'level', 'groups', 'words')
WORD_FIELDS = ('group', 'emoji', 'korean', 'romanization', 'translation', 'example', 'exampleTr')

# Слоги (가-힣) и отдельные чамо (ㅋㅋㅋ, ㅠㅠ, ㄳ — чат-сокращения тоже слова)
HANGUL = re.compile(r'[가-힯ㄱ-ㆎ]')

# Контраст темы css/lesson-theme.css: шаблон money содержит несколько
# слишком светлых для текста цветов, на страницах проекта они заменены
# на тёмные. Применяем те же правила, иначе пересборка их затирает.
CONTRAST = {
    '#777': '#55506e', '#888': '#55506e', '#aaa': '#6b6684',
    '#e67e22': '#b45309', '#ff9800': '#b26a00', '#ff6b6b': '#d64545',
    '#f57c00': '#c25e00', '#74b9ff': '#2b6cb0',
}


def apply_contrast(text):
    """Заменяет светлые цвета ТЕКСТА на тёмные; фон не трогает."""
    def repl(m):
        new = CONTRAST.get(m.group(2).lower())
        return m.group(1) + new if new else m.group(0)
    return re.sub(r'((?<!-)\bcolor:\s*)(#[0-9a-fA-F]{3,6})\b', repl, text)


# =============================================
# Проверка данных
# =============================================

def validate(data):
    """Возвращает список проблем. Пустой список — данные в порядке."""
    problems = []

    for key in REQUIRED:
        if key not in data:
            problems.append('нет обязательного поля "%s"' % key)
    if problems:
        return problems

    if data['level'] not in LEVEL_COLORS:
        problems.append('level должен быть от 1 до 6, а не %r' % data['level'])
    if not re.fullmatch(r'[a-z0-9_]+', data['slug']):
        problems.append('slug должен состоять из латиницы, цифр и подчёркиваний: %r' % data['slug'])

    groups = [g[0] for g in data['groups']]
    if len(groups) != len(set(groups)):
        problems.append('в groups есть повторяющиеся ключи')
    for g in data['groups']:
        if len(g) != 3:
            problems.append('группа %r должна быть вида [ключ, "Название", "한글"]' % (g,))

    seen = {}
    for i, w in enumerate(data['words'], 1):
        missing = [f for f in WORD_FIELDS if not w.get(f)]
        if missing:
            problems.append('слово #%d (%s): не заполнено %s'
                            % (i, w.get('korean', '?'), ', '.join(missing)))
            continue
        if w['group'] not in groups:
            problems.append('слово #%d (%s): группа "%s" не описана в groups'
                            % (i, w['korean'], w['group']))
        if not HANGUL.search(w['korean']):
            problems.append('слово #%d (%s): в korean нет хангыля' % (i, w['korean']))
        if w['korean'] in seen:
            problems.append('слово "%s" повторяется (строки %d и %d) — в личном словаре '
                            'останется только одно' % (w['korean'], seen[w['korean']], i))
        seen[w['korean']] = i

    used = {w['group'] for w in data['words']}
    for g in groups:
        if g not in used:
            problems.append('группа "%s" объявлена, но ни одного слова в ней нет' % g)

    return problems


# =============================================
# Сборка страницы
# =============================================

def js_str(s):
    return "'%s'" % s.replace('\\', '\\\\').replace("'", "\\'")


def build_words(words):
    rows = ["            {group: %s, emoji: '%s', korean: %s, romanization: %s, "
            "translation: %s, example: %s, exampleTr: %s}"
            % (js_str(w['group']), w['emoji'], js_str(w['korean']), js_str(w['romanization']),
               js_str(w['translation']), js_str(w['example']), js_str(w['exampleTr']))
            for w in words]
    return 'var vocabulary = [\n' + ',\n'.join(rows) + '\n        ];'


def build_labels(groups):
    rows = ["            %-9s {ru: %s, kr: %s}" % (g[0] + ':', js_str(g[1]), js_str(g[2]))
            for g in groups]
    return 'var groupLabels = {\n' + ',\n'.join(rows) + '\n        };'


def build_intro(data, primary):
    """Блок «О категории»: подсказка про режимы, легенда меток, ссылка на урок."""
    mid = sum(1 for w in data['words'] if '(со своими)' in w['translation'])
    hard = sum(1 for w in data['words'] if '(грубо)' in w['translation'])
    ok = len(data['words']) - mid - hard

    parts = ['        <!-- Описание категории -->',
             '        <div class="grammar-block" style="display: block;">',
             '            <h3>&#128161; О категории</h3>',
             '            <div style="padding: 22px 30px 26px;">',
             '            <p style="color: #555; margin: 0; font-size: 0.97em; line-height: 1.6;">'
             'Слова сгруппированы по темам &mdash; переключайтесь между режимами '
             '<strong>Словарь</strong>, <strong>Карточки</strong>, <strong>Тест</strong> и '
             '<strong>Слушать</strong> вверху страницы.</p>']

    if mid or hard:
        badge = ('                <span style="background:%s; color:%s; padding:6px 14px; '
                 'border-radius:14px; font-size:0.85em; font-weight:700;">%s &mdash; %d</span>')
        parts += [
            '            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 16px 0 12px;">',
            badge % ('#e8f5e9', '#2e7d32', 'безопасно', ok),
            badge % ('#fff8e1', '#ef6c00', 'со своими', mid),
            badge % ('#ffebee', '#d32f2f', 'грубо', hard),
            '            </div>',
            '            <p style="color: #777; margin: 0; font-size: 0.9em;">',
            '                Пометка <strong>(со своими)</strong> &mdash; только с друзьями-ровесниками, '
            '<strong>(грубо)</strong> &mdash; распознавать, но не употреблять.',
            '            </p>']

    parts.append('            <p style="color: #888; margin: 14px 0 0 0; font-size: 0.9em;">'
                 'Всего слов: <strong>%d</strong> в %d группах.'
                 % (len(data['words']), len(data['groups'])))
    if data.get('lesson_href'):
        parts.append('                &nbsp;Связанный урок: '
                     '<a href="%s" style="color: %s; font-weight: 600;">%s</a>.'
                     % (data['lesson_href'], primary, data.get('lesson_name', 'урок')))
    parts += ['            </p>', '            </div>', '        </div>', '']
    return '\n'.join(parts)


def cut(text, marker, what):
    """Ищет маркер шаблона и понятно ругается, если его больше нет."""
    if marker not in text:
        raise SystemExit('[ERROR] в шаблоне %s не найден %s (%r).\n'
                         '        Шаблон изменился — поправьте tools/vocab-build.py.'
                         % (TEMPLATE, what, marker))
    return text.index(marker)


def build_page(data):
    tpl = open(TEMPLATE, encoding='utf-8').read()
    primary, light = LEVEL_COLORS[data['level']]
    s = tpl

    s = re.sub(r'<title>[^<]*</title>', '<title>Словарь: %s</title>' % data['title'], s, count=1)
    s = s.replace('<a href="../../level_1/index.html"',
                  '<a href="../../level_%d/index.html"' % data['level'], 1)
    s = s.replace('>← К 1급</a>', '>← К %d급</a>' % data['level'], 1)

    header = re.search(r'<div class="vocab-header">.*?\n        </div>\n', s, re.S)
    if not header:
        raise SystemExit('[ERROR] в шаблоне не найден блок .vocab-header')
    s = s.replace(header.group(0),
                  '<div class="vocab-header">\n'
                  '            <h1>%s %s</h1>\n'
                  '            <div class="korean-title">%s [%s]</div>\n'
                  '            <p>%s</p>\n'
                  '        </div>\n' % (data['emoji'], data['title'], data['korean'],
                                        data['kr_read'], data['subtitle']), 1)

    a = cut(s, '        <!-- Grammar toggle -->', 'начало грамматического блока')
    b = cut(s, '        <div class="study-mode">', 'переключатель режимов')
    s = s[:a] + build_intro(data, primary) + '\n' + s[b:]

    if not re.search(r'var vocabulary = \[.*?\n        \];', s, re.S):
        raise SystemExit('[ERROR] в шаблоне не найден массив vocabulary')
    s = re.sub(r'var vocabulary = \[.*?\n        \];', build_words(data['words']), s, count=1, flags=re.S)
    s = re.sub(r'var groupLabels = \{.*?\n        \};', build_labels(data['groups']), s, count=1, flags=re.S)

    # порядок групп в шаблоне жёстко зашит под категорию money
    order = ', '.join(js_str(g[0]) for g in data['groups'])
    s = re.sub(r"var groupsOrder = \[[^\]]*\];", "var groupsOrder = [%s];" % order, s, count=1)

    s = s.replace(TPL_PRIMARY, primary).replace(TPL_LIGHT, light)
    s = re.sub(r"var LESSON_ID = '[^']*'", "var LESSON_ID = 'vocabulary_%s'" % data['slug'], s, count=1)
    return apply_contrast(s)


# =============================================
# Регистрация в навигации
# =============================================

def register(data):
    """Карточка на странице уровня + ID в карте уроков lessons.html."""
    lid = 'vocabulary_' + data['slug']
    level_page = os.path.join(ROOT, 'level_%d' % data['level'], 'index.html')
    desc = data.get('card_desc') or data['subtitle']
    done = []

    s = open(level_page, encoding='utf-8').read()
    if 'data-lesson="%s"' % lid in s:
        done.append('[=] карточка уже была на level_%d' % data['level'])
    else:
        card = ('            <div class="lesson-item" data-lesson="%s">\n'
                '                <h3>%s %s <span class="lesson-difficulty vocabulary">Слова</span></h3>\n'
                '                <p>%s</p>\n'
                '                <a href="../vocabulary/%s/index.html" class="lesson-link">Изучить →</a>\n'
                '            </div>\n'
                % (lid, data['emoji'], data['title'], desc, data['slug']))
        m = re.search(r'<div class="lesson-grid" id="grid-vocab">', s)
        if not m:
            raise SystemExit('[ERROR] на %s нет секции id="grid-vocab" — добавьте карточку вручную'
                             % level_page)
        i, depth = m.end(), 1
        while depth:
            o, c = s.find('<div', i), s.find('</div>', i)
            if c == -1:
                raise SystemExit('[ERROR] не найден конец секции grid-vocab в %s' % level_page)
            if o != -1 and o < c:
                depth += 1
                i = o + 4
            else:
                depth -= 1
                i = c + 6
        line_start = s.rfind('\n', 0, i - 6) + 1
        open(level_page, 'w', encoding='utf-8').write(s[:line_start] + card + s[line_start:])
        done.append('[OK] карточка добавлена на level_%d' % data['level'])

    s = open(LESSONS, encoding='utf-8').read()
    if "'%s'" % lid in s:
        done.append('[=] ID уже был в карте уроков')
    else:
        lvl = 'level_%d' % data['level']
        m = re.search(r"('%s': \[)(.*?)(\n            \],?\n)" % lvl, s, re.S)
        if not m:
            raise SystemExit('[ERROR] в lessons.html не найдена карта уровня %s' % lvl)
        s = s[:m.start(2)] + m.group(2).rstrip() + ",\n                '%s'" % lid + s[m.end(2):]
        open(LESSONS, 'w', encoding='utf-8').write(s)
        done.append('[OK] ID добавлен в карту уроков lessons.html')

    return done


# =============================================

def main():
    ap = argparse.ArgumentParser(
        description='Сборка страницы словаря из JSON со словами',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='Пример входного файла: tools/vocab-example.json')
    ap.add_argument('source', help='JSON с описанием категории и словами')
    ap.add_argument('--register', action='store_true',
                    help='добавить карточку на страницу уровня и ID в lessons.html')
    ap.add_argument('--dry-run', action='store_true',
                    help='только проверить данные, ничего не записывать')
    args = ap.parse_args()

    if not os.path.exists(args.source):
        raise SystemExit('[ERROR] файл не найден: %s' % args.source)
    try:
        data = json.load(open(args.source, encoding='utf-8'))
    except ValueError as e:
        raise SystemExit('[ERROR] это не корректный JSON: %s' % e)

    problems = validate(data)
    if problems:
        print('[ERROR] в данных %d проблем:' % len(problems))
        for p in problems:
            print('  [-] %s' % p)
        raise SystemExit(1)

    mid = sum(1 for w in data['words'] if '(со своими)' in w['translation'])
    hard = sum(1 for w in data['words'] if '(грубо)' in w['translation'])
    print('[OK] данные корректны: %s — %d слов в %d группах, уровень %d급'
          % (data['slug'], len(data['words']), len(data['groups']), data['level']))
    if mid or hard:
        print('     пометки: со своими — %d, грубо — %d' % (mid, hard))

    if args.dry_run:
        out = os.path.join('vocabulary', data['slug'], 'index.html')
        print('[i] сухой прогон: страница %s не записана' % out)
        if args.register:
            print('[i] регистрация на level_%d тоже пропущена' % data['level'])
        return

    page = build_page(data)
    out_dir = os.path.join(ROOT, 'vocabulary', data['slug'])
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, 'index.html')
    existed = os.path.exists(out_path)
    open(out_path, 'w', encoding='utf-8').write(page)
    print('[%s] vocabulary/%s/index.html' % ('~' if existed else '+', data['slug']))

    if args.register:
        for line in register(data):
            print(line)

    print('[i] дальше: python3 tools/tts-sync.py --dry-run  (и затем без флага)')


if __name__ == '__main__':
    main()
