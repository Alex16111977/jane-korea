#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — разбиение составных заданий на атомарные.

В самоучителе один пункт упражнения часто содержит сразу список слов,
а ключ — список ответов к ним:

    q: "만들다, 멀다, 맵다, 좁다"
    a: "만든, 먼, 매운, 좁은"

Такой пункт нельзя проверить автоматически и неудобно тренировать.
Скрипт разбивает его на четыре отдельных задания «одно слово — один ответ».

Разбиваем только когда число частей в вопросе и в ключе совпадает —
задания вида «найдите лишнее слово» (7 слов в вопросе, 1 в ключе)
остаются как были.

Как модуль:  from exercise_split import split_items
Как скрипт:  python3 tools/exercise_split.py js/topic-exercises.js [--dry]
"""

import json
import re
import sys

HAN = re.compile(r'[가-힣]')

# Внутри скобок запятые не разделяют пункты: «가다 [када, ида]»
SPLIT_RE = re.compile(r',\s*(?![^\[\](){}]*[\])}])')

# Нумерация пунктов внутри одной строки: «1) 가다 2) 오다»
NUM_RE = re.compile(r'(?:^|\s)\d+[).]\s*')


def _parts(text):
    """Разбить перечисление на части. Пустой список — разбивать нечего."""
    text = (text or '').strip()
    if not text:
        return []

    nums = [p.strip() for p in NUM_RE.split(text) if p.strip()]
    if len(nums) > 1:
        return nums

    return [p.strip() for p in SPLIT_RE.split(text) if p.strip()]


def _check_value(part):
    """Что сверять с ответом пользователя: без транскрипции и пояснений."""
    val = re.sub(r'\[[^\]]*\]', '', part)          # [ода]
    val = re.sub(r'\([^)]*\)', '', val)            # (пояснение)
    val = val.split('/')[0]                        # 단/ 달콤한 -> 단
    val = val.strip(' .;:-—')
    return val if HAN.search(val) else part.strip()


def split_item(item):
    """Один пункт -> список пунктов. Если разбивать нечего, вернёт [item]."""
    q, a = item.get('q'), item.get('a')
    if not q or not a:
        return [item]

    qs, ans = _parts(q), _parts(a)

    # Перечисление — это три и более однородных пункта. Две части через
    # запятую почти всегда одно предложение: «Нет, я не студент»
    if len(qs) < 3 or len(qs) != len(ans):
        return [item]

    # Части должны быть словами или короткими фразами, а не разорванным
    # предложением с запятыми («Я пришёл домой, потом поел, потом лёг»)
    if any(len(p) > 40 for p in qs + ans):
        return [item]
    if any(p[-1] in '.!?' for p in qs + ans):
        return [item]

    out = []
    for qi, ai in zip(qs, ans):
        new = {'q': qi, 'a': ai}
        if item.get('h'):
            new['h'] = item['h']
        chk = _check_value(ai)
        if chk and chk != ai:
            new['c'] = chk
        elif item.get('c') and len(qs) == 1:
            new['c'] = item['c']
        out.append(new)
    return out


def split_items(exercise):
    """Разбить пункты упражнения. Меняет только input и reveal."""
    if exercise.get('kind') not in ('input', 'reveal'):
        return exercise
    items = []
    for it in exercise.get('items', []):
        items.extend(split_item(it))
    exercise['items'] = items
    return exercise


def split_units(units):
    for u in units:
        for e in u.get('ex', []):
            split_items(e)
    return units


# =============================================
# CLI: правка готового js-файла со списком уроков
# =============================================

def _load_js(path):
    src = open(path, encoding='utf-8').read()
    start = src.index('[')
    end = src.rindex(']') + 1
    return src[:start], json.loads(src[start:end]), src[end:]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    dry = '--dry' in sys.argv
    if not args:
        print('[ERROR] Укажите файл: python3 tools/exercise_split.py js/topic-exercises.js')
        return 1

    path = args[0]
    head, units, tail = _load_js(path)

    before = sum(len(e.get('items', [])) for u in units for e in u.get('ex', []))
    samples = []
    for u in units:
        for e in u.get('ex', []):
            if e.get('kind') not in ('input', 'reveal'):
                continue
            for it in e.get('items', []):
                parts = split_item(it)
                if len(parts) > 1 and len(samples) < 5:
                    samples.append((u['n'], e['id'], it['q'][:60], [p['q'] for p in parts][:4]))

    split_units(units)
    after = sum(len(e.get('items', [])) for u in units for e in u.get('ex', []))

    print('[+] %s: %d -> %d заданий' % (path, before, after))
    for s in samples:
        print('    урок %s, упр. %s: "%s" -> %s' % s)

    if dry:
        print('[!] --dry: файл не изменён')
        return 0

    body = json.dumps(units, ensure_ascii=False, indent=1)
    open(path, 'w', encoding='utf-8').write(head + body + tail)
    print('[OK] Записано:', path)
    return 0


if __name__ == '__main__':
    sys.exit(main())
