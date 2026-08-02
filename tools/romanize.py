#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Revised Romanization (RR) для корейских слов словаря.

Учитывает основные правила произношения на стыке слогов: перенос батчима
на ㅇ, носовую ассимиляцию, ㄹ/ㄴ, аспирацию с ㅎ, удвоение ㄹㄹ.

    python3 tools/romanize.py 학년 좋다 앉아요
    from romanize import romanize
"""
import sys

CHO = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj',
       'ch', 'k', 't', 'p', 'h']
JUNG = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe',
        'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i']
JONG = ['', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k', 'm', 'l', 'l', 'l', 'p',
        'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't']

JONG_NAME = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ',
             'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
             'ㅍ', 'ㅎ']
CHO_NAME = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ',
            'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

# Батчим переезжает в онсет следующего слога с ㅇ: (что остаётся, что уезжает)
LINK = {
    'ㄱ': ('', 'g'), 'ㄲ': ('', 'kk'), 'ㄳ': ('', 'ks'), 'ㄴ': ('', 'n'),
    'ㄵ': ('', 'nj'), 'ㄶ': ('', 'n'), 'ㄷ': ('', 'd'), 'ㄹ': ('', 'r'),
    'ㄺ': ('l', 'g'), 'ㄻ': ('l', 'm'), 'ㄼ': ('l', 'b'), 'ㄽ': ('l', 's'),
    'ㄾ': ('l', 't'), 'ㄿ': ('l', 'p'), 'ㅀ': ('', 'r'), 'ㅁ': ('', 'm'),
    'ㅂ': ('', 'b'), 'ㅄ': ('p', 's'), 'ㅅ': ('', 's'), 'ㅆ': ('', 'ss'),
    'ㅇ': ('ng', ''), 'ㅈ': ('', 'j'), 'ㅊ': ('', 'ch'), 'ㅋ': ('', 'k'),
    'ㅌ': ('', 't'), 'ㅍ': ('', 'p'), 'ㅎ': ('', ''),
}

STOP = {'k': 'ng', 't': 'n', 'p': 'm'}          # перед ㄴ/ㅁ/ㄹ
ASPIRATE_AFTER_H = {'ㄱ': 'k', 'ㄷ': 't', 'ㅈ': 'ch', 'ㅅ': 'ss'}  # ㅎ + смычный
ASPIRATE_BEFORE_H = {'k': 'k', 't': 't', 'p': 'p'}                # смычный + ㅎ


def _syl(ch):
    if not ('가' <= ch <= '힣'):
        return None
    code = ord(ch) - 0xAC00
    return code // 588, (code % 588) // 28, code % 28


def romanize(text):
    chars = list(text)
    syls = [_syl(c) for c in chars]
    override = [None] * (len(chars) + 1)   # замена онсета следующего слога
    out = []

    for i, ch in enumerate(chars):
        s = syls[i]
        if s is None:
            out.append(ch)
            continue
        cho, jung, jong = s
        head = override[i] if override[i] is not None else CHO[cho]
        out.append(head + JUNG[jung])

        if not jong:
            continue
        name, tail = JONG_NAME[jong], JONG[jong]
        nxt = syls[i + 1] if i + 1 < len(syls) else None
        if nxt is None:
            out.append('t' if name == 'ㅎ' else tail)
            continue
        n_name = CHO_NAME[nxt[0]]

        # 1. следующий слог с ㅇ — батчим переезжает в онсет
        if n_name == 'ㅇ':
            keep, move = LINK[name]
            # палатализация: 굳이 guji, 같이 gachi
            if nxt[1] == 20 and name in ('ㄷ', 'ㅌ'):
                move = 'j' if name == 'ㄷ' else 'ch'
            out.append(keep)
            override[i + 1] = move
            continue

        # 2. батчим с ㅎ
        if name in ('ㅎ', 'ㄶ', 'ㅀ'):
            pre = {'ㅎ': '', 'ㄶ': 'n', 'ㅀ': 'l'}[name]
            if n_name in ASPIRATE_AFTER_H:
                out.append(pre)
                override[i + 1] = ASPIRATE_AFTER_H[n_name]
            elif n_name == 'ㄴ':
                out.append(pre or 'n')
            elif n_name == 'ㄹ' and pre == 'l':
                out.append('l')
                override[i + 1] = 'l'
            else:
                out.append(pre or 't')
            continue

        # 3. смычный + ㅎ -> аспирация (у сдвоенных батчимов первый звук остаётся)
        if n_name == 'ㅎ' and tail in ASPIRATE_BEFORE_H:
            out.append(LINK[name][0])
            # 닫히다 dachida, 굳히다 guchida
            if name in ('ㄷ', 'ㅌ') and nxt[1] == 20:
                override[i + 1] = 'ch'
            else:
                override[i + 1] = ASPIRATE_BEFORE_H[tail]
            continue

        # 4. носовая ассимиляция перед ㄴ/ㅁ
        if n_name in ('ㄴ', 'ㅁ') and tail in STOP:
            out.append(STOP[tail])
            continue

        # 5. перед ㄹ
        if n_name == 'ㄹ':
            if tail in ('l', 'n'):
                out.append('l')
                override[i + 1] = 'l'
                continue
            if tail in STOP:
                out.append(STOP[tail])
                override[i + 1] = 'n'
                continue
            if tail in ('m', 'ng'):
                out.append(tail)
                override[i + 1] = 'n'
                continue

        # 6. ㄴ + ㄹ уже выше; ㄹ + ㄴ -> ll
        if tail == 'l' and n_name == 'ㄴ':
            out.append('l')
            override[i + 1] = 'l'
            continue

        out.append(tail)

    res = ''.join(out)
    for c in 'kptcs':
        res = res.replace(c * 3, c * 2)
    return res


if __name__ == '__main__':
    for w in sys.argv[1:]:
        print(w, '->', romanize(w))
