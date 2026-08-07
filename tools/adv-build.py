#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — сборка js/adv-exercises.js из tools/lesson-data/*.json.

Продвинутый курс 2–6급 делается не вручную: уроки грамматики (lesson_95…133)
уже описаны в JSON для tools/lesson-build.py, и в каждом есть всё, из чего
получается упражнение:

    points    → «Правило урока» (read, ключа нет)
    sections  → «Образуйте форму»: 많다 → 사람이 많더라고요
    quiz      → «Выберите верную форму» (варианты книги идут в текст задания)
    mistakes  → «Исправьте ошибку»: неверная фраза → верная + почему
    examples  → «Переведите на корейский» (reveal, самопроверка по ключу)
    compare   → «Сравните формы» (reveal)
    dialogue  → диалог урока, text → текст урока с переводом

    python3 tools/adv-build.py            # собрать js/adv-exercises.js
    python3 tools/adv-build.py --check    # только проверить

Почему варианты quiz склеены тремя пробелами: js/exercise-trainer.js режет
текст задания по /[,;·/]|\\s{2,}/ и, если находит там правильный ответ,
строит кнопки выбора из настоящих дистракторов книги, а не из чужих ответов.
"""

import argparse
import glob
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_GLOB = os.path.join(ROOT, 'tools', 'lesson-data', '*.json')
OUT_JS = os.path.join(ROOT, 'js', 'adv-exercises.js')

SRC = 'adv'
TAG = re.compile(r'<[^>]+>')
OPT_SEP = '   '                      # три пробела — разделитель вариантов


def clean(s):
    """Снимает разметку: в JSON уроков лежит HTML с <strong> и <b>."""
    return re.sub(r'\s+', ' ', html.unescape(TAG.sub('', str(s or '')))).strip()


def short(s, limit=24):
    """Что сверять в тренажёре: длинный ключ он не проверит, только покажет."""
    return s if len(s) <= limit else None


def with_why(answer, why):
    """Ключ = ответ + разбор. Сверяется всё равно только поле c."""
    why = clean(why)
    return answer + ' — ' + why if why else answer


# =============================================
# Упражнения одного урока
# =============================================

def ex_rule(num, lesson):
    items = [{'q': clean(p)} for p in lesson.get('points', []) if clean(p)]
    if not items:
        return None
    return {'id': f'{num}.1', 'kind': 'read',
            'title': 'Правило урока — прочитайте перед упражнениями', 'items': items}


def ex_forms(num, lesson):
    """Из sections: «많다 → 사람이 많더라고요» — левая часть в задание, правая в ключ."""
    items = []
    for sec in lesson.get('sections', []):
        for pair in sec.get('examples', []):
            left = clean(pair[0])
            if '→' not in left:
                continue
            stem, form = [x.strip() for x in left.split('→', 1)]
            if not stem or not form:
                continue
            item = {'q': stem + ' →', 'a': form}
            ru = clean(pair[1]) if len(pair) > 1 else ''
            if ru:
                item['h'] = ru
            items.append(item)
    if len(items) < 2:
        return None
    return {'id': f'{num}.2', 'kind': 'input',
            'title': 'Образуйте форму по образцу', 'items': items}


def ex_quiz(num, lesson):
    """Два упражнения: с короткими вариантами — с автопроверкой, с длинными —
    самопроверка. Длинный вариант тренажёр не превратит в кнопки выбора и
    заставит набирать фразу целиком — так вопрос становится нерешаемым."""
    checkable, reveal = [], []
    for q in lesson.get('quiz', []):
        options = [clean(o) for o in q.get('options', [])]
        idx = q.get('correct', 0)
        if not options or idx >= len(options):
            continue
        answer = options[idx]
        # Разбор ответа идёт в ключ, а не в подсказку: под заданием он был бы
        # спойлером — «почему» здесь прямо называет верный вариант.
        item = {'q': clean(q['q']) + OPT_SEP + OPT_SEP.join(options),
                'a': with_why(answer, q.get('why')), 'c': answer}
        (checkable if all(short(o) for o in options) else reveal).append(item)

    out = []
    if checkable:
        out.append({'id': f'{num}.3', 'kind': 'input',
                    'title': 'Выберите верную форму', 'items': checkable})
    if reveal:
        out.append({'id': f'{num}.7', 'kind': 'reveal',
                    'title': 'Проверьте понимание: выберите ответ, потом откройте ключ',
                    'items': reveal})
    return out


def ex_mistakes(num, lesson):
    items = []
    for row in lesson.get('mistakes', []):
        wrong, right = clean(row[0]), clean(row[1])
        if not wrong or not right:
            continue
        # У части ошибок в ключе два равноправных исправления через « / » —
        # сверяем по первому, а показываем оба.
        items.append({'q': wrong + '  (✗)', 'c': right.split(' / ')[0].strip(),
                      'a': with_why(right, row[2] if len(row) > 2 else '')})
    if not items:
        return None
    return {'id': f'{num}.4', 'kind': 'input',
            'title': 'Исправьте ошибку', 'items': items}


def ex_translate(num, lesson):
    """Перевод — самопроверка по ключу: у длинной фразы законных вариантов много."""
    items = [{'q': clean(ru), 'a': clean(ko)}
             for ko, ru in (p[:2] for p in lesson.get('examples', []))
             if clean(ko) and clean(ru)]
    if not items:
        return None
    return {'id': f'{num}.5', 'kind': 'reveal',
            'title': 'Переведите на корейский, потом откройте ключ', 'items': items}


def ex_compare(num, lesson):
    cmp_ = lesson.get('compare') or {}
    items = []
    for row in cmp_.get('rows', []):
        row = [clean(x) for x in row]
        if len(row) < 2 or not row[0]:
            continue
        items.append({'q': row[0] + ' — что сообщает и когда неуместно?',
                      'a': ' · '.join(x for x in row[1:] if x)})
    if not items:
        return None
    return {'id': f'{num}.6', 'kind': 'reveal',
            'title': clean(cmp_.get('title')) or 'Сравните формы', 'items': items}


BOLD = re.compile(r'<b>(.*?)</b>', re.S)
SPEAKER = re.compile(r'^[^:：]{1,14}\s*[:：]\s*')


def ex_cloze(num, lesson):
    """Пропуск ставится не наугад: в аутентичных текстах целевая конструкция
    уже выделена <b>, её и вырезаем."""
    items = []
    for pair in (lesson.get('text') or {}).get('lines', []):
        raw = pair[0]
        target = BOLD.search(raw)
        if not target:
            continue
        answer = clean(target.group(1))
        gapped = clean(BOLD.sub('______', raw))
        if not answer or '______' not in gapped:
            continue
        item = {'q': gapped, 'a': answer}
        ru = clean(pair[1]) if len(pair) > 1 else ''
        if ru:
            item['h'] = ru
        items.append(item)
    if not items:
        return None
    return {'id': f'{num}.8', 'kind': 'input',
            'title': 'Вставьте пропущенную конструкцию', 'items': items}


def ex_order(num, lesson):
    """Порядок слов по репликам диалога: одно предложение, 3–8 слов."""
    items, seen = [], set()
    for row in lesson.get('dialogue', []):
        ko = SPEAKER.sub('', clean(row[1]) if len(row) > 1 else '')
        ru = SPEAKER.sub('', clean(row[2]) if len(row) > 2 else '')
        if not ko or not ru or ko in seen:
            continue
        if re.findall(r'[.!?]', ko.rstrip('.!?')):
            continue
        if not 3 <= len(ko.split()) <= 8:
            continue
        seen.add(ko)
        items.append({'q': ru, 'a': ko})
    if len(items) < 3:
        return None
    return {'id': f'{num}.9', 'kind': 'order',
            'title': 'Соберите реплику из слов', 'items': items[:6]}


def ex_match(num, lesson):
    """Пары «форма ↔ что она сообщает» из таблицы сравнения."""
    items = []
    for row in (lesson.get('compare') or {}).get('rows', []):
        form, sense = clean(row[0]) if row else '', clean(row[1]) if len(row) > 1 else ''
        if not form or not sense or len(form) > 24:
            continue
        items.append({'q': form, 'a': sense})
    if len(items) < 3:
        return None
    return {'id': f'{num}.10', 'kind': 'match',
            'title': 'Сопоставьте форму и её значение', 'items': items}


BUILDERS = (ex_rule, ex_forms, ex_quiz, ex_mistakes, ex_translate, ex_compare,
            ex_cloze, ex_order, ex_match)


# =============================================
# Урок целиком
# =============================================

def build_unit(lesson):
    num = lesson['num']
    unit = {
        'n': 'g%d' % num,
        'name': clean(lesson.get('title')),
        'topic': clean(lesson.get('card')),
        'level': lesson.get('level'),
        'src': SRC,
        'links': [],
        'ex': [],
    }

    folder = 'lesson_%d_%s' % (num, lesson.get('slug', ''))
    if os.path.isdir(os.path.join(ROOT, folder)):
        unit['links'].append({'href': folder, 't': 'Теория: ' + unit['name']})

    for row in lesson.get('dialogue', []):
        ko = clean(row[1]) if len(row) > 1 else ''
        ru = clean(row[2]) if len(row) > 2 else ''
        if not ko:
            continue
        who = clean(row[0])
        unit.setdefault('dialog', []).append(
            {'k': (who + ' : ' + ko) if who else ko, 'r': ru or None})

    text = lesson.get('text') or {}
    ko_lines = [clean(p[0]) for p in text.get('lines', [])]
    ru_lines = [clean(p[1]) if len(p) > 1 else '' for p in text.get('lines', [])]
    if ko_lines:
        unit['text'] = {'ko': ko_lines, 'ru': ru_lines}

    for make in BUILDERS:
        ex = make(num, lesson)
        if not ex:
            continue
        unit['ex'].extend(ex if isinstance(ex, list) else [ex])
    unit['ex'].sort(key=lambda e: [int(p) for p in e['id'].split('.')])
    return unit


def load_lessons():
    """Уроки из всех файлов; дубли по номеру — берём самый полный."""
    best = {}
    for path in sorted(glob.glob(DATA_GLOB)):
        if ' 2.json' in path:                     # копии от синхронизации
            continue
        try:
            data = json.load(open(path, encoding='utf-8'))
        except json.JSONDecodeError as err:
            print('[!] Пропущен', os.path.basename(path), '—', err)
            continue
        for lesson in data.get('lessons', []):
            if 'examples' not in lesson or 'num' not in lesson:
                continue                          # не грамматический урок
            weight = sum(len(lesson.get(k, ()))
                         for k in ('examples', 'quiz', 'mistakes', 'sections'))
            num = lesson['num']
            if num not in best or weight > best[num][0]:
                best[num] = (weight, lesson, os.path.basename(path))
    return [v[1] for v in sorted(best.values(), key=lambda v: (v[1]['level'], v[1]['num']))]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='только проверить, не писать файл')
    args = ap.parse_args()

    lessons = load_lessons()
    if not lessons:
        sys.exit('[ERROR] В tools/lesson-data не нашлось уроков с полем examples')

    units, errors = [], []
    for lesson in lessons:
        unit = build_unit(lesson)
        if unit['level'] not in (1, 2, 3, 4, 5, 6):
            errors.append('[ERROR] %s: level %r' % (unit['n'], unit['level']))
        if not unit['name'] or not unit['topic']:
            errors.append('[ERROR] %s: пустое название или тема' % unit['n'])
        playable = [e for e in unit['ex'] if e['kind'] != 'read']
        if not playable:
            errors.append('[ERROR] %s: нет ни одного упражнения с ключом' % unit['n'])
        for ex in unit['ex']:
            for n, it in enumerate(ex['items'], 1):
                where = '%s / %s.%d' % (unit['n'], ex['id'], n)
                if not it.get('q'):
                    errors.append('[ERROR] %s: пустой вопрос' % where)
                if ex['kind'] == 'read' and it.get('a'):
                    errors.append('[ERROR] %s: у read не должно быть ключа' % where)
                if ex['kind'] != 'input':
                    continue
                if not (it.get('c') or it.get('a')):
                    errors.append('[ERROR] %s: нечего сверять' % where)
                # в c уходит только ответ: разбор и второй вариант сверять нельзя
                if ' — ' in (it.get('c') or '') or ' / ' in (it.get('c') or ''):
                    errors.append('[ERROR] %s: в c попал разбор или второй вариант' % where)
        units.append(unit)

    if errors:
        print('\n'.join(errors))
        sys.exit('[ERROR] Ошибок: %d — файл не записан' % len(errors))

    total_ex = sum(len(u['ex']) for u in units)
    total_items = sum(len(e['items']) for u in units for e in u['ex'])
    by_level = {}
    for u in units:
        by_level[u['level']] = by_level.get(u['level'], 0) + 1
    print('[+] Уроков:', len(units), '| упражнений:', total_ex, '| заданий:', total_items)
    print('[+] По уровням:', ' '.join('%d급 — %d' % (k, by_level[k]) for k in sorted(by_level)))
    print('[+] Диалогов:', sum(1 for u in units if u.get('dialog')),
          '| текстов:', sum(1 for u in units if u.get('text')),
          '| без ссылки на теорию:', sum(1 for u in units if not u['links']))

    if args.check:
        print('[OK] Проверка пройдена, файл не записан')
        return

    header = (
        '/**\n'
        ' * Продвинутая грамматика 2-6급 — курс собран из уроков сайта\n'
        ' * (lesson_95…133): правило, образование формы, выбор верного варианта,\n'
        ' * работа над ошибками, перевод и сравнение близких конструкций.\n'
        f' * {len(units)} уроков, {total_ex} упражнений, {total_items} заданий.\n'
        ' *\n'
        ' * Файл сгенерирован tools/adv-build.py из tools/lesson-data/*.json —\n'
        ' * правки вносите там.\n'
        ' */\n'
        'window.advExercises = '
    )
    with open(OUT_JS, 'w', encoding='utf-8') as fh:
        fh.write(header + json.dumps(units, ensure_ascii=False, indent=1) + ';\n')
    print('[OK] Записано:', os.path.relpath(OUT_JS, ROOT))


if __name__ == '__main__':
    main()
