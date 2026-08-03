#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — сборка js/book-exercises.js из PDF самоучителя.

Источник: А. В. Ан, «Корейский язык без репетитора» (АСТ, 2019), 289 страниц.

    python3 tools/book-exercises-build.py "~/Downloads/Корейский язык без репетитора .pdf"
    python3 tools/book-exercises-build.py <pdf> --dump-vocab words.json

Зачем нужен отдельный шаг: в PDF корейский текст лежит в шрифте
Batang-KSCms-UHC-H с Identity-H и без ToUnicode, поэтому pdftotext/pdfium
выдают мусор вида «Ệ㰩Ⱖ» вместо «거짓말». Проверка на полусотне слов
показала, что это ровно постоянный сдвиг: слоги хангыля смещены на
0x8DAA, отдельные чамо — на 0x2394. Функция decode() возвращает их назад.

Требуется pdftotext (brew install poppler).
"""

import argparse
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_JS = os.path.join(ROOT, 'js', 'book-exercises.js')

HANGUL_OFFSET = 0x8DAA          # слоги 가-힣
JAMO_OFFSET = 0x2394            # отдельные чамо ㄱ-ㆎ

# Знаки препинания книги тоже попали в тот же сломанный шрифт
SYMBOLS = {'궾': '—', '궽': '-', '귐': '…', '귆': '«', '귇': '»', 'G': ' '}

HAN = re.compile(r'[가-힣]')


# =============================================
# Расшифровка
# =============================================

def decode(text):
    out = []
    for ch in text:
        code = ord(ch)
        syllable = code + HANGUL_OFFSET
        if 0xAC00 <= syllable <= 0xD7A3 and code > 0x0500:
            out.append(chr(syllable))
            continue
        jamo = code + JAMO_OFFSET
        if 0x3131 <= jamo <= 0x318E and 0x0D9D <= code <= 0x0DFA:
            out.append(chr(jamo))
            continue
        out.append(ch)
    return ''.join(out)


def clean(text):
    for bad, good in SYMBOLS.items():
        text = text.replace(bad, good)
    # Латинские буквы на месте знаков препинания — только рядом с хангылем,
    # иначе пострадают «TV», «A학점», «K-POP»
    text = re.sub(r'(?<=[가-힣])S(?=[\se»]|$)', ',', text)
    text = re.sub(r'(?<=[가-힣])U(?=[\se»]|$)', '.', text)
    text = re.sub(r'(?<=[가-힣])f(?=[\se»]|$)', '?', text)
    text = re.sub(r'(?<=[가-힣])H(?=[\se»]|$)', '!', text)
    text = re.sub(r'\bc(?=[가-힣«])', '«', text)
    text = re.sub(r'(?<=[가-힣.,?!…])e(?![а-яёa-z])', '»', text)
    text = re.sub(r'\s+b\s+', ', ', text)
    return re.sub(r'[ \t]+', ' ', text)


def has_hangul(line):
    return bool(HAN.search(line))


def extract_text(pdf_path):
    if not os.path.exists(pdf_path):
        sys.exit('[ERROR] Файл не найден: ' + pdf_path)
    try:
        raw = subprocess.run(['pdftotext', '-layout', pdf_path, '-'],
                             capture_output=True, check=True).stdout.decode('utf-8')
    except FileNotFoundError:
        sys.exit('[ERROR] Нет pdftotext. Установите: brew install poppler')
    return clean(decode(raw))


# =============================================
# Разбор на блоки
# =============================================

def split_blocks(lines, start, stop):
    """Режет диапазон строк на блоки «Упражнение N.M ...»."""
    heads = [i for i in range(start, stop)
             if re.match(r'^\s*Упражнение\s*\d', lines[i])]
    blocks = {}
    for idx, i in enumerate(heads):
        end = heads[idx + 1] if idx + 1 < len(heads) else min(stop, i + 45)
        body = []
        for line in lines[i:end]:
            if not line.strip():
                continue
            if re.match(r'^\s*\d{1,3}\s*$', line):            # колонцифра
                continue
            if re.match(r'^\s*(УРОК \d+|ВВОДНЫЙ УРОК)\s*$', line):
                continue
            if body and re.match(r'^\s*(ТЕКСТ|ДИАЛОГ[И]?|СЛОВАРЬ УРОКА|'
                                 r'СЛОВАРИК К ТЕКСТУ|ПОЛЕЗНЫЕ ВЫРАЖЕНИЯ|'
                                 r'Урок \d+)\s*$', line):
                break
            body.append(line.rstrip())
        text = '\n'.join(body)
        m = re.match(r'\s*Упражнение\s*(\d+)\.\s*(\d+)([аб]?)', text)
        blocks[f'{m.group(1)}.{m.group(2)}{m.group(3)}'] = text[m.end():].strip()
    return blocks


def numbered(body):
    """Возвращает (заголовок, [пункты]) — переносы строк склеиваются."""
    lines = body.split('\n')
    head, rest = [], []
    for i, line in enumerate(lines):
        if re.match(r'\s*\d{1,2}[.)]\s', line):
            rest = lines[i:]
            break
        head.append(line)
    if not rest:
        return ' '.join(head).strip(), []
    items, cur = [], None
    for line in rest:
        m = re.match(r'\s*(\d{1,2})[.)]\s*(.*)', line)
        if m:
            if cur:
                items.append(cur)
            cur = m.group(2).strip()
        elif cur is not None:
            cur = (cur + ' ' + line.strip()).strip()
    if cur:
        items.append(cur)
    return ' '.join(head).strip(), [re.sub(r'\s+', ' ', x).strip(' .,') for x in items]


def word_list(text):
    return [p.strip(' .') for p in re.split(r'[,;]', text) if p.strip(' .')]


def split_title(title):
    """Отделяет формулировку задания от списка слов после неё."""
    parts = re.split(r'[:.]\s+(?=[가-힣])', title, maxsplit=1)
    if len(parts) == 1:
        return title, ''
    return parts[0].rstrip(':. ') + ':', parts[1]


# Упражнения, где задание и ключ — списки слов через запятую
LIST_EX = {'6.1', '6.2', '7.1', '8.1', '12.1', '18.1'}
# Задание — слова в столбик, ключ — строки «форма — перевод»
PAIR_EX = {'14.1', '17.1', '17.2'}
# Ключ сгруппирован: русский перевод, под ним несколько форм
GROUP_EX = {'19.1', '19.2', '19.3'}


def build_exercise(num, title, questions, answers, key_raw):
    items, kind = [], 'reveal'

    if num in LIST_EX:
        title, tail = split_title(title)
        qs, ans = word_list(tail), word_list(key_raw.replace('\n', ' '))
        items = [{'q': q, 'a': ans[i] if i < len(ans) else None}
                 for i, q in enumerate(qs)]
        kind = 'input'

    elif num in PAIR_EX:
        title, tail = split_title(title)
        qs = [x.strip() for x in re.split(r'\s{2,}', tail) if x.strip()]
        ans = [x.strip() for x in key_raw.split('\n') if x.strip()]
        items = [{'q': q, 'a': ans[i] if i < len(ans) else None}
                 for i, q in enumerate(qs)]
        kind = 'input'

    elif num in GROUP_EX:
        title, tail = split_title(title)
        qs = [x.strip() for x in re.split(r'\s{2,}', tail) if x.strip()]
        groups, cur = [], None
        for line in [x.strip() for x in key_raw.split('\n') if x.strip()]:
            if HAN.search(line):
                if cur:
                    cur[1].append(line)
            else:
                if cur:
                    groups.append(cur)
                cur = [line, []]
        if cur:
            groups.append(cur)
        items = [{'q': qs[i] if i < len(qs) else g[1][0],
                  'a': ' / '.join(g[1]), 'hint': g[0]}
                 for i, g in enumerate(groups)]
        kind = 'input'

    elif num == '18.2':
        tail = title.split('слов:', 1)[1] if 'слов:' in title else ''
        adverbs = word_list(key_raw.replace('\n', ' '))
        items = [{'q': w, 'a': 'наречие' if w in adverbs else '—'}
                 for w in word_list(tail)]
        title = 'Выпишите все наречия из перечисленных слов:'
        kind = 'select'

    elif questions:
        items = [{'q': q, 'a': answers[i] if i < len(answers) else None}
                 for i, q in enumerate(questions)]
        # автопроверка только для коротких корейских ответов
        short = [i for i in items if i['a']]
        kind = 'input' if short and all(
            HAN.search(i['a']) and len(i['a']) < 26 for i in short) else 'reveal'

    else:
        kind = 'open'

    if items and not any(i.get('a') for i in items):
        kind = 'read'
    return {'title': re.sub(r'\s+', ' ', title).strip(), 'kind': kind, 'items': items}


def answer_to_check(answer):
    """Корейская часть ответа — с ней сверяется поле ввода."""
    if not answer:
        return None
    head = answer.split(' — ')[0].split(' / ')[0]
    head = re.sub(r'\(.*?\)', '', head).strip()
    m = re.match(r'^[가-힣0-9\s()/]+', head)
    return (m.group(0).strip() if m else None) or None


# =============================================
# Диалоги, тексты и словарики к ним
# =============================================

SECTION_STOP = (r'^\s*(ТЕКСТ|ДИАЛОГ[И]?|УПРАЖНЕНИЯ|СЛОВАРЬ УРОКА|СЛОВАРИК К ТЕКСТУ|'
                r'ПОЛЕЗНЫЕ ВЫРАЖЕНИЯ|Урок \d+|Ключи|Приложения)\s*$')


def section_blocks(lines, head, limit=90):
    """Все блоки заданного раздела с номером урока, к которому они относятся."""
    out = []
    for i, line in enumerate(lines):
        if not re.match(r'^\s*' + head + r'\s*$', line):
            continue
        body = []
        for x in lines[i + 1:i + limit]:
            if re.match(SECTION_STOP, x):
                break
            if not x.strip() or re.match(r'^\s*\d{1,3}\s*$', x):
                continue
            body.append(x.strip())
        num = 0                      # вводный урок, если заголовка выше нет
        for j in range(i, -1, -1):
            m = re.match(r'^\s*Урок (\d+)\s*$', lines[j])
            if m:
                num = int(m.group(1))
                break
        out.append((num, body))
    return out


def split_ko_ru(body):
    """Делит блок на корейскую и русскую половины: перевод идёт следом."""
    ko, ru, seen_ru = [], [], False
    for line in body:
        if has_hangul(line):
            if seen_ru:            # корейский после перевода — новый кусок, склеиваем
                ko.append(line)
            else:
                ko.append(line)
        else:
            if re.match(r'^\s*(Прочитайте|Переведите|Дочитайте|Ответьте|Выучите)', line):
                continue
            seen_ru = True
            ru.append(line)
    return ko, ru


def glue(prev, nxt):
    """Соединяет строку, разорванную переносом.

    В корейском наборе перенос чаще всего рвёт слово посередине
    («회사에 갑니 / 다», «다음 / 에»), поэтому по умолчанию склеиваем без
    пробела. Информации о том, был ли на конце строки пробел, в PDF не
    остаётся: pdftotext её отбрасывает, а pdfplumber склеивает токены через
    перенос. Поэтому в редких случаях, когда перенос попал на пробел, внутри
    предложения остаётся лишний стык — на чтении это не сказывается.
    """
    return prev + nxt


def join_wrapped(lines, korean=True):
    """Склеивает строки, разорванные переносом.

    В русском перенос идёт по слогам с дефисом, в корейском — в любом месте.
    """
    out = []
    for line in lines:
        if not out or line.startswith(('—', '«')):
            out.append(line)
            continue
        prev = out[-1]
        if not korean:
            out[-1] = prev[:-1] + line if prev.endswith('-') else prev + ' ' + line
        elif prev and prev[-1] in '.!?»…':
            out[-1] = prev + ' ' + line
        else:
            out[-1] = glue(prev, line)
    return [re.sub(r'\s+', ' ', x).strip() for x in out]


def to_sentences(chunks):
    """Режет длинные абзацы на предложения — так текст читается построчно."""
    out = []
    for chunk in chunks:
        for part in re.split(r'(?<=[.!?»])\s+', chunk):
            part = part.strip()
            if part:
                out.append(part)
    return out


def build_dialogs(lines):
    result = {}
    for num, body in section_blocks(lines, r'ДИАЛОГ[И]?'):
        ko, ru = split_ko_ru(body)
        ko, ru = join_wrapped(ko), join_wrapped(ru, korean=False)
        rows = [{'k': ko[i], 'r': ru[i] if i < len(ru) else None}
                for i in range(len(ko))]
        if rows:
            result.setdefault(num, []).extend(rows)
    return result


def build_texts(lines):
    """Текст + словарик к нему. Перевода в книге у большинства текстов нет."""
    texts, glossary = {}, {}
    for num, body in section_blocks(lines, r'ТЕКСТ', limit=120):
        ko, ru = split_ko_ru(body)
        ko = to_sentences(join_wrapped(ko))
        ru = to_sentences(join_wrapped(ru, korean=False))
        if ko:
            texts.setdefault(num, {'ko': [], 'ru': []})
            texts[num]['ko'].extend(ko)
            texts[num]['ru'].extend(ru)
    # Словарик свёрстан в две колонки, pdftotext склеивает их в одну строку:
    # «날마다 каждый день   회사 компания» — берём все пары «хангыль + русский»
    rx = re.compile(r'([가-힣][가-힣\s]*?)\s+'
                    r'([А-Яа-яЁё][А-Яа-яЁё\s,;()«»-]*?)(?=\s+[가-힣]|\s*$)')
    for num, body in section_blocks(lines, r'СЛОВАРИК К ТЕКСТУ', limit=60):
        words, seen = [], set()
        for line in body:
            for m in rx.finditer(line):
                ko, ru = m.group(1).strip(), m.group(2).strip(' ,.;')
                if ru and ko not in seen:
                    seen.add(ko)
                    words.append({'k': ko, 'r': ru})
        if words:
            glossary.setdefault(num, []).extend(words)
    return texts, glossary


# =============================================
# Уроки
# =============================================

UNITS = [
    (0, 'Вводный урок', 'Корейский алфавит, основы чтения и письма', 1,
     ['lesson_02_alphabet']),
    (1, 'Урок 1', 'Пары согласных, ассимиляция согласных', 1,
     ['lesson_104_consonant_assimilation', 'lesson_02_alphabet', 'vocabulary/polite_formulas']),
    (2, 'Урок 2', 'Числительные, дата и время, счётные комплексы', 1,
     ['lesson_04_numbers', 'lesson_93_large_numbers', 'vocabulary/counters', 'vocabulary/date']),
    (3, 'Урок 3', 'Местоимения, порядок слов, именное сказуемое, стили вежливости', 1,
     ['lesson_08_politeness', 'lesson_10_copula', 'lesson_14_demonstratives']),
    (4, 'Урок 4', 'Падежи, частицы и послелоги', 1,
     ['lesson_20_accusative_case', 'lesson_21_location_ending', 'lesson_22_direction_ending',
      'lesson_32_dative_case', 'lesson_33_possessive_case', 'vocabulary/everyday_nouns']),
    (5, 'Урок 5', 'Глаголы, отрицание, чередования в основах глаголов', 2,
     ['lesson_09_negation', 'lesson_17_verb_conjugation', 'lesson_87_not_vs_cant',
      'vocabulary/verbs_actions']),
    (6, 'Урок 6', 'Вторая основа, разговорно-вежливый стиль, прошедшее время', 2,
     ['lesson_18_informal_verbs', 'lesson_27_past_tense']),
    (7, 'Урок 7', 'Причастия (определительные формы), желательный вид', 2,
     ['lesson_34_want_desire']),
    (8, 'Урок 8', 'Будущее время, деепричастия (часть 1)', 2,
     ['lesson_30_future_tense', 'lesson_28_conjunction_go', 'lesson_54_purpose_movement']),
    (9, 'Урок 9', 'Деепричастия (часть 2), разрешение и запрет, окончание 지요?', 2,
     ['lesson_66_permission', 'lesson_67_prohibition']),
    (10, 'Урок 10', 'Служебные глаголы 주다/드리다, конструкция 아/어 보다', 2,
     ['lesson_61_helping_actions', 'lesson_70_trying_experience']),
    (11, 'Урок 11', 'Длительный вид, возможность и умение', 2,
     ['lesson_63_ability', 'lesson_68_inability_ji_moshada']),
    (12, 'Урок 12', 'Повелительное и пригласительное наклонение, -(으)니까', 2,
     ['lesson_59_suggestion_eulkayo', 'lesson_82_reason_consequence']),
    (13, 'Урок 13', 'Служебные слова, отглагольные послелоги', 3,
     ['lesson_109_verbal_postpositions', 'lesson_82_reason_consequence',
      'lesson_86_time_constructions', 'vocabulary/abstract_life']),
    (14, 'Урок 14', 'Субстантивация, конструкции с 기', 3, []),
    (15, 'Урок 15', 'Предположение -(으)ㄴ/는/(으)ㄹ 것 같다, 나 보다', 3,
     ['lesson_73_supposition']),
    (16, 'Урок 16', 'Опыт -(으)ㄴ 적이 있다/없다, время -(으)ㄴ 지 되다', 3,
     ['lesson_70_trying_experience']),
    (17, 'Урок 17', 'Прилагательные, степени сравнения, словообразование', 3,
     ['lesson_110_adjective_derivation', 'lesson_24_adjective_conjugation',
      'lesson_81_comparative_constructions']),
    (18, 'Урок 18', 'Наречия', 3, ['lesson_88_time_adverbs']),
    (19, 'Урок 19', 'Нейтрально-книжный стиль 한다체', 4, []),
    (20, 'Урок 20', 'Косвенная речь, конструкция -다면서/라면서', 4,
     ['lesson_108_hearsay_damyeonseo']),
]


# =============================================
# Словарь книги (для tools/vocab-build.py)
# =============================================

def dump_vocab(lines, path):
    def find(pattern, start):
        for i in range(start, len(lines)):
            if re.search(pattern, lines[i]):
                return i
        return -1

    i_verbs = find(r'^\s*Список самых\s*$', 7000)
    i_kr = find(r'^\s*Корейско-русский\s*$', i_verbs)
    i_ru = find(r'^\s*Русско-корейский\s*$', i_kr)
    i_keys = find(r'^\s*Ключи\s*$', i_ru)

    rx_kr = re.compile(r'([가-힣][가-힣\s()]*?)\s*\[([^\]]+)\]\s*'
                       r'([А-Яа-яЁё][^\[]*?)(?=\s{2,}[가-힣]|\s*$)')
    rx_ru = re.compile(r'^\s*([А-Яа-яЁё][А-Яа-яЁё\s,\-()]*?)\s+'
                       r'([가-힣][가-힣\s()]*?)\s*\[([^\]]+)\]\s*$')

    words = {}
    for line in lines[i_kr:i_ru]:
        for m in rx_kr.finditer(line):
            ru = m.group(3).strip(' ,.')
            if ru:
                words.setdefault(m.group(1).strip(),
                                 {'k': m.group(1).strip(), 'tr': m.group(2).strip(), 'ru': ru})
    for a, b in ((i_verbs, i_kr), (i_ru, i_keys)):
        for line in lines[a:b]:
            m = rx_ru.match(line)
            if m:
                words.setdefault(m.group(2).strip(),
                                 {'k': m.group(2).strip(), 'tr': m.group(3).strip(),
                                  'ru': m.group(1).strip()})
    json.dump(list(words.values()), open(path, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    print('[OK] Словарь книги:', len(words), 'слов ->', path)


# =============================================

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('pdf', help='путь к PDF самоучителя')
    ap.add_argument('--dump-vocab', metavar='FILE', help='выгрузить словарь книги в JSON')
    ap.add_argument('--dry-run', action='store_true', help='только показать статистику')
    args = ap.parse_args()

    lines = extract_text(os.path.expanduser(args.pdf)).split('\n')
    i_keys = max(i for i, l in enumerate(lines) if re.match(r'^\s*Ключи\s*$', l))

    tasks = split_blocks(lines, 0, i_keys)
    keys = split_blocks(lines, i_keys, len(lines))
    print('[+] Заданий:', len(tasks), '| ключей:', len(keys))

    dialogs = build_dialogs(lines[:i_keys])
    texts, glossary = build_texts(lines[:i_keys])
    print('[+] Диалогов:', len(dialogs), '| текстов:', len(texts),
          '| словариков:', len(glossary))

    parsed = {}
    for num, body in tasks.items():
        title, questions = numbered(body)
        _, answers = numbered(keys.get(num, ''))
        ex = build_exercise(num, title, questions, answers, keys.get(num, ''))
        for item in ex['items']:
            check = answer_to_check(item.get('a'))
            if check and check != item.get('a'):
                item['c'] = check
        parsed[num] = ex

    by_unit = {}
    for num, ex in parsed.items():
        by_unit.setdefault(int(num.split('.')[0]), []).append((num, ex))
    for lst in by_unit.values():
        lst.sort(key=lambda x: [int(p) if p.isdigit() else p
                                for p in re.findall(r'\d+|[аб]', x[0])])

    units = []
    for n, name, topic, level, links in UNITS:
        exercises = []
        for num, ex in by_unit.get(n, []):
            entry = {'id': num, 'title': ex['title'], 'kind': ex['kind']}
            items = []
            for it in ex['items']:
                obj = {'q': it['q']}
                for src, dst in (('a', 'a'), ('c', 'c'), ('hint', 'h')):
                    if it.get(src):
                        obj[dst] = it[src]
                items.append(obj)
            if items:
                entry['items'] = items
            exercises.append(entry)
        unit = {'n': n, 'name': name, 'topic': topic,
                'level': level, 'links': links, 'ex': exercises}
        if dialogs.get(n):
            unit['dialog'] = dialogs[n]
        if texts.get(n) and texts[n]['ko']:
            unit['text'] = texts[n]
        if glossary.get(n):
            unit['glossary'] = glossary[n]
        units.append(unit)

    total_ex = sum(len(u['ex']) for u in units)
    total_items = sum(len(e.get('items', [])) for u in units for e in u['ex'])
    total_dialog = sum(len(u.get('dialog', [])) for u in units)
    total_text = sum(len(u.get('text', {}).get('ko', [])) for u in units)
    print('[+] Уроков:', len(units), '| упражнений:', total_ex, '| заданий:', total_items)
    print('[+] Реплик в диалогах:', total_dialog, '| строк в текстах:', total_text,
          '| слов в словариках:', sum(len(u.get('glossary', [])) for u in units))

    if args.dump_vocab:
        dump_vocab(lines, args.dump_vocab)

    if args.dry_run:
        print('[!] --dry-run: файл не записан')
        return

    header = (
        '/**\n'
        ' * Упражнения из самоучителя «Корейский язык без репетитора» (А. В. Ан, АСТ, 2019).\n'
        f' * {len(units)} уроков, {total_ex} упражнений, {total_items} заданий с ключами.\n'
        ' *\n'
        ' * kind:\n'
        ' *   input  — короткий ответ, проверяется автоматически (поле c — что сверять)\n'
        ' *   reveal — развёрнутый перевод, ключ открывается кнопкой\n'
        ' *   select — отметить подходящие слова\n'
        ' *   read   — прочитать вслух, ключа нет\n'
        ' *   open   — творческое задание без ключа\n'
        ' *\n'
        ' * Файл сгенерирован tools/book-exercises-build.py — правки вносите там.\n'
        ' */\n'
        'window.bookExercises = '
    )
    with open(OUT_JS, 'w', encoding='utf-8') as fh:
        fh.write(header + json.dumps(units, ensure_ascii=False, indent=1) + ';\n')
    print('[OK] Записано:', os.path.relpath(OUT_JS, ROOT))


if __name__ == '__main__':
    main()
