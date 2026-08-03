#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Jane Korea — сборка грамматического урока из JSON.

Берёт JSON с описанием уроков, собирает lesson_<NN>_<slug>/index.html по
шаблону существующих уроков (интро, диалог, грамматика, примеры, итог,
кнопка «пройдено») и по флагу регистрирует их в навигации: карточка в
level_<N>/index.html и ID в списке уровня в lessons.html.

    python3 tools/lesson-build.py tools/lesson-data/funfun2-a.json --dry-run
    python3 tools/lesson-build.py tools/lesson-data/funfun2-a.json
    python3 tools/lesson-build.py tools/lesson-data/funfun2-a.json --register

Формат входного файла:

{
  "lessons": [
    {
      "num": 95,                       # номер урока -> lesson_95_<slug>
      "slug": "exclamation_neyo",
      "level": 2,                       # 1-6, определяет цвета и навигацию
      "emoji": "😮",                   # иконка карточки уровня
      "title": "Восклицание -네요",     # заголовок урока и <title>
      "card": "감기 걸렸네요! — реакция на то, что видишь прямо сейчас",
      "intro": "Сегодня разбираем окончание <strong>-네요</strong>…",
      "points": ["<strong>-네요</strong> — удивление в момент речи", ...],
      "dialogue": [["수미", "한국어를 아주 잘하시네요.", "Вы прекрасно говорите по-корейски."], ...],
      "concept": {"title": "🔑 Что такое -네요", "text": "…"},
      "sections": [
        {"title": "Раздел 1: …", "kind": "consonant|vowel|adjective",
         "head": "…", "text": "…",
         "examples": [["잘하다 → 잘하 + 네요 = <strong>잘하네요</strong>", "хорошо говорите!"], ...]}
      ],
      "examples": [["한국어를 아주 잘하시네요.", "Вы очень хорошо говорите по-корейски."], ...],
      "summary": ["<strong>-네요</strong> — восклицание о том, что узнал сейчас", ...],
      "prev": ["lesson_94_medicine", "Урок 94"],   # необязательно
      "next": ["lesson_96_progressive", "Урок 96"] # необязательно
    }
  ]
}

Ссылки prev/next можно не задавать: если в одном файле идёт цепочка уроков,
соседи проставляются автоматически.
"""

import argparse
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS = os.path.join(ROOT, 'lessons.html')

REQUIRED = ('num', 'slug', 'level', 'emoji', 'title', 'card', 'intro',
            'points', 'dialogue', 'concept', 'sections', 'examples', 'summary')

# (фон-1, фон-2, акцент рамок, акцент 2, rgb акцента, эмодзи фона 1, эмодзи фона 2)
LEVEL_THEME = {
    1: ('#43a047', '#1b5e20', '#2e7d32', '#43a047', '67,160,71', '🌱', '🌿'),
    2: ('#0f8b8d', '#0a5c5e', '#00838f', '#0097a7', '15,139,141', '💬', '🤝'),
    3: ('#ef6c00', '#e65100', '#e65100', '#f57c00', '239,108,0', '🔥', '🎯'),
    4: ('#8e24aa', '#4a148c', '#6a1b9a', '#8e24aa', '142,36,170', '🌸', '🎓'),
    5: ('#d81b60', '#7b1030', '#b71c1c', '#c62828', '216,27,96', '💠', '🌐'),
    6: ('#5c6bc0', '#283593', '#303f9f', '#3949ab', '92,107,192', '🏛️', '📜'),
}

LEVEL_NAME = {1: '1급', 2: '2급', 3: '3급', 4: '4급', 5: '5급', 6: '6급'}
LEVEL_ICON = {1: '🌱', 2: '💬', 3: '🔥', 4: '🌸', 5: '💎', 6: '🎓'}

KIND_CLASS = {'consonant': 'consonant-rule', 'vowel': 'vowel-rule',
              'adjective': 'adjective-rule'}

HANGUL = re.compile(r'[가-힯ㄱ-ㆎ]')


def fail(msg):
    print('[ERROR] %s' % msg)
    sys.exit(1)


def esc(text):
    """Экранируем только то, что не является нашей разметкой (<strong>, <br>)."""
    return text


def build_html(les, prev, nxt):
    lvl = les['level']
    c1, c2, accent, accent2, rgb, emo1, emo2 = LEVEL_THEME[lvl]
    lvl_dir = 'level_%d' % lvl
    lvl_label = '%s %s Уровень' % (LEVEL_ICON[lvl], LEVEL_NAME[lvl])
    lesson_id = 'lesson_%d_%s' % (les['num'], les['slug'])

    points = '\n'.join(
        '                    <li>%s</li>' % p for p in les['points'])

    dialogue = []
    for row in les['dialogue']:
        who, ko, ru = row
        dialogue.append('                    <p><strong>%s:</strong> %s</p>' % (who, ko))
        dialogue.append('                    <p class="translation">%s</p>' % ru)
    dialogue = '\n'.join(dialogue)

    sections = []
    for sec in les['sections']:
        cls = KIND_CLASS.get(sec.get('kind', 'consonant'), 'consonant-rule')
        body = ['                <h3>%s</h3>\n' % sec['title'],
                '                <div class="%s">' % cls,
                '                    <h4>%s</h4>' % sec['head']]
        if sec.get('text'):
            body.append('                    <p>%s</p>' % sec['text'])
        for ex in sec.get('examples', []):
            ko, ru = ex
            body.append('                    <div class="example">')
            body.append('                        <p>%s</p>' % ko)
            body.append('                        <p class="grammar-note">%s</p>' % ru)
            body.append('                    </div>')
        body.append('                </div>')
        sections.append('\n'.join(body))
    sections = '\n\n'.join(sections)

    examples = []
    for ko, ru in les['examples']:
        examples.append('                <div class="korean-example">')
        examples.append('                    <p>%s</p>' % ko)
        examples.append('                    <p class="translation">%s</p>' % ru)
        examples.append('                </div>')
    examples = '\n'.join(examples)

    summary = '\n'.join(
        '                        <li>%s</li>' % s for s in les['summary'])

    # --- Блоки продвинутого урока (4-6급): все опциональны ---
    authentic = ''
    if les.get('text'):
        t = les['text']
        rows = []
        for ko, ru in t['lines']:
            rows.append('                    <div class="src-line">')
            rows.append('                        <p class="src-ko">%s</p>' % ko)
            rows.append('                        <p class="src-ru">%s</p>' % ru)
            rows.append('                    </div>')
        note = ('                    <p class="src-note">%s</p>' % t['note']) if t.get('note') else ''
        authentic = ('            <section class="authentic">\n'
                     '                <h2>📰 %s</h2>\n'
                     '                <div class="src-box">\n'
                     '                    <p class="src-origin">%s</p>\n'
                     '%s\n%s\n'
                     '                </div>\n'
                     '            </section>\n' %
                     (t['title'], t.get('source', ''), '\n'.join(rows), note))

    compare = ''
    if les.get('compare'):
        c = les['compare']
        head = ''.join('<th>%s</th>' % h for h in c['headers'])
        body = []
        for row in c['rows']:
            body.append('                        <tr>' +
                        ''.join('<td>%s</td>' % cell for cell in row) + '</tr>')
        compare = ('            <section class="compare">\n'
                   '                <h2>🔍 %s</h2>\n'
                   '                <div class="table-wrap">\n'
                   '                    <table>\n'
                   '                        <tr>%s</tr>\n'
                   '%s\n'
                   '                    </table>\n'
                   '                </div>\n'
                   '            </section>\n' % (c['title'], head, '\n'.join(body)))

    mistakes = ''
    if les.get('mistakes'):
        items = []
        for wrong, right, why in les['mistakes']:
            items.append('                <div class="mistake">\n'
                         '                    <p class="wrong">✗ %s</p>\n'
                         '                    <p class="right">✓ %s</p>\n'
                         '                    <p class="why">%s</p>\n'
                         '                </div>' % (wrong, right, why))
        mistakes = ('            <section class="mistakes">\n'
                    '                <h2>⚠️ Типичные ошибки</h2>\n'
                    '%s\n'
                    '            </section>\n' % '\n'.join(items))

    quiz = ''
    quiz_json = '[]'
    if les.get('quiz'):
        items = []
        for i, q in enumerate(les['quiz']):
            opts = '\n'.join(
                '                        <button class="quiz-opt" data-q="%d" data-o="%d">%s</button>'
                % (i, j, o) for j, o in enumerate(q['options']))
            items.append('                <div class="quiz-item" id="q%d">\n'
                         '                    <p class="quiz-q">%d. %s</p>\n'
                         '                    <div class="quiz-opts">\n%s\n                    </div>\n'
                         '                    <p class="quiz-why" id="why%d">%s</p>\n'
                         '                </div>' % (i, i + 1, q['q'], opts, i, q.get('why', '')))
        quiz = ('            <section class="quiz">\n'
                '                <h2>🎯 Проверьте себя</h2>\n'
                '%s\n'
                '                <p class="quiz-score" id="quizScore"></p>\n'
                '            </section>\n' % '\n'.join(items))
        quiz_json = json.dumps([q['correct'] for q in les['quiz']])

    nav = []
    if prev:
        nav.append('                <a href="../%s/index.html" class="prev-lesson">← %s</a>'
                   % (prev[0], prev[1]))
    nav.append('                <a href="../%s/index.html" class="lessons-index">%s</a>'
               % (lvl_dir, lvl_label))
    if nxt:
        nav.append('                <a href="../%s/index.html" class="next-lesson">%s →</a>'
                   % (nxt[0], nxt[1]))
    nav = '\n'.join(nav)

    return TEMPLATE.format(
        title=les['title'], c1=c1, c2=c2, accent=accent, accent2=accent2,
        rgb=rgb, emo1=emo1, emo2=emo2, lvl_dir=lvl_dir, lvl_label=lvl_label,
        intro=les['intro'], points=points, dialogue=dialogue,
        concept_title=les['concept']['title'], concept_text=les['concept']['text'],
        sections=sections, examples=examples, summary=summary, nav=nav,
        lesson_id=lesson_id, authentic=authentic, compare=compare,
        mistakes=mistakes, quiz=quiz, quiz_json=quiz_json)


TEMPLATE = """<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Корейский язык</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            font-family: 'Noto Sans KR', sans-serif;
            background:
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 45%),
                radial-gradient(circle at 80% 80%, rgba({rgb},0.3) 0%, transparent 50%),
                repeating-linear-gradient(160deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 80px),
                linear-gradient(135deg, {c1} 0%, {c2} 50%, {c2} 100%);
            min-height: 100vh;
            color: #333;
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }}

        body::before {{
            content: '{emo1}';
            position: fixed;
            top: 14%;
            right: 4%;
            font-size: 100px;
            opacity: 0.04;
            animation: floatSlow 10s ease-in-out infinite;
            pointer-events: none;
            z-index: 0;
        }}

        body::after {{
            content: '{emo2}';
            position: fixed;
            bottom: 8%;
            left: 5%;
            font-size: 90px;
            opacity: 0.04;
            animation: floatSlow 13s ease-in-out infinite reverse;
            pointer-events: none;
            z-index: 0;
        }}

        @keyframes floatSlow {{
            0%, 100% {{ transform: translateY(0) scale(1); }}
            50% {{ transform: translateY(-20px) scale(1.03); }}
        }}

        .container {{
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            animation: fadeInUp 0.8s ease;
        }}

        @keyframes fadeInUp {{
            from {{ opacity: 0; transform: translateY(30px); }}
            to {{ opacity: 1; transform: translateY(0); }}
        }}

        @keyframes slideInLeft {{
            from {{ opacity: 0; transform: translateX(-30px); }}
            to {{ opacity: 1; transform: translateX(0); }}
        }}

        header {{
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid rgba(255,255,255,0.2);
        }}

        nav {{
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }}

        nav a {{
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            background: rgba(255,255,255,0.15);
            border-radius: 25px;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }}

        nav a:hover {{
            background: rgba(255,255,255,0.25);
            transform: translateY(-2px);
        }}

        h1 {{
            color: white;
            font-size: 2.5em;
            text-align: center;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            margin-bottom: 10px;
        }}

        main {{
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.3);
        }}

        section {{
            margin-bottom: 40px;
            animation: slideInLeft 0.6s ease;
            animation-fill-mode: both;
        }}

        section:nth-child(2) {{ animation-delay: 0.2s; }}
        section:nth-child(3) {{ animation-delay: 0.4s; }}
        section:nth-child(4) {{ animation-delay: 0.6s; }}
        section:nth-child(5) {{ animation-delay: 0.8s; }}

        h2 {{
            color: #4a5568;
            font-size: 1.8em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid {accent};
            position: relative;
        }}

        h2::after {{
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 60px;
            height: 3px;
            background: {accent2};
        }}

        h3 {{
            color: #2d3748;
            font-size: 1.4em;
            margin-bottom: 15px;
            margin-top: 25px;
        }}

        h4 {{
            color: #4a5568;
            font-size: 1.2em;
            margin-bottom: 10px;
            font-weight: 600;
        }}

        .lesson-intro {{
            background: linear-gradient(135deg, {c1}15, {c2}15);
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid {accent};
        }}

        .lesson-intro ul {{
            list-style: none;
            padding-left: 0;
        }}

        .lesson-intro li {{
            padding: 8px 0;
            padding-left: 30px;
            position: relative;
        }}

        .lesson-intro li::before {{
            content: '✓';
            position: absolute;
            left: 0;
            color: {accent};
            font-weight: bold;
            font-size: 1.2em;
        }}

        .dialogue {{
            background: linear-gradient(135deg, #fff8ec, #ffeccd);
            padding: 25px;
            border-radius: 15px;
            margin: 25px 0;
        }}

        .dialogue-box {{
            background: rgba(255,255,255,0.9);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }}

        .dialogue-box p {{
            margin-bottom: 10px;
            font-size: 1.1em;
        }}

        .dialogue-box strong {{
            color: {accent};
            font-weight: 600;
        }}

        .dialogue-box .translation {{
            color: #55506e;
            font-style: italic;
            margin-left: 20px;
        }}

        .translation {{
            color: #55506e;
            font-style: italic;
            margin-left: 20px;
        }}

        .grammar-rule {{
            background: rgba({rgb}, 0.1);
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border-left: 4px solid {accent};
        }}

        .example {{
            background: rgba({rgb}, 0.12);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: 'Noto Sans KR', sans-serif;
        }}

        .example p {{
            margin-bottom: 8px;
            font-size: 1.05em;
        }}

        .note, .grammar-note {{
            color: #4a5568;
            font-size: 0.9em;
            font-style: italic;
        }}

        .korean-example {{
            background: white;
            padding: 20px;
            border-radius: 12px;
            margin: 15px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border-left: 4px solid {accent2};
            transition: all 0.3s ease;
            cursor: pointer;
        }}

        .korean-example:hover {{
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }}

        .korean-example p:first-child {{
            font-size: 1.2em;
            font-weight: 500;
            color: #2d3748;
            margin-bottom: 8px;
        }}

        .concept-box {{
            background: linear-gradient(135deg, {c1}, {c2});
            color: white;
            padding: 25px;
            border-radius: 15px;
            margin: 20px 0;
        }}

        .concept-box h3 {{
            color: white;
            margin-top: 0;
        }}

        .consonant-rule {{
            background: linear-gradient(135deg, #fff0f5, #ffe0ea);
            padding: 20px;
            border-radius: 12px;
            margin: 15px 0;
            border-left: 4px solid #dc3545;
        }}

        .vowel-rule {{
            background: linear-gradient(135deg, #edfafa, #d5f0f0);
            padding: 20px;
            border-radius: 12px;
            margin: 15px 0;
            border-left: 4px solid #17a2b8;
        }}

        .adjective-rule {{
            background: linear-gradient(135deg, #eefaf1, #d8f0e0);
            padding: 20px;
            border-radius: 12px;
            margin: 15px 0;
            border-left: 4px solid #28a745;
        }}

        .summary-box {{
            background: linear-gradient(135deg, {c1}, {c2});
            color: white;
            padding: 25px;
            border-radius: 15px;
        }}

        .summary-box ul {{
            list-style: none;
            padding-left: 0;
        }}

        .summary-box li {{
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
        }}

        .summary-box li::before {{
            content: '📌';
            position: absolute;
            left: 0;
        }}

        .navigation {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
        }}

        .navigation a {{
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }}

        .prev-lesson, .next-lesson {{
            background: linear-gradient(135deg, {c1}, {c2});
            color: white;
        }}

        .prev-lesson:hover, .next-lesson:hover {{
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba({rgb}, 0.4);
        }}

        .lessons-index {{
            background: rgba({rgb}, 0.1);
            color: {accent};
            border: 2px solid {accent};
        }}

        .lessons-index:hover {{
            background: {accent};
            color: white;
        }}

        footer {{
            text-align: center;
            padding: 20px;
            color: white;
            font-size: 0.9em;
        }}

        @media (max-width: 768px) {{
            main {{ padding: 22px; }}
            h1 {{ font-size: 1.8em; }}
            .navigation {{ flex-direction: column; gap: 12px; }}
        }}
    </style>
    <link rel="stylesheet" href="../css/lesson-theme.css">
</head>
<body>
    <div class="container">
        <header>
            <nav>
                <a href="../index.html">🏠 Главная</a>
                <a href="../{lvl_dir}/index.html">{lvl_label}</a>
            </nav>
            <h1>{title}</h1>
        </header>

        <main>
            <section class="lesson-intro">
                <h2>📖 Что мы изучаем</h2>
                <p>{intro}</p>
                <ul>
{points}
                </ul>
            </section>

            <section class="dialogue">
                <h2>💬 Диалог урока</h2>
                <div class="dialogue-box">
{dialogue}
                </div>
            </section>

            <section class="grammar-explanation">
                <h2>📚 Грамматическое объяснение</h2>

                <div class="concept-box">
                    <h3>{concept_title}</h3>
                    <p>{concept_text}</p>
                </div>

{sections}
            </section>

            <section class="examples">
                <h2>📝 Примеры использования</h2>

{examples}
            </section>

            <section class="summary">
                <h2>📋 Краткое содержание</h2>
                <div class="summary-box">
                    <ul>
{summary}
                    </ul>
                </div>
            </section>

            <div class="navigation">
{nav}
            </div>
        </main>

        <footer>
            <p>&copy; 2025 Корейский язык с Джейн. Все права защищены.</p>
        </footer>

        <!-- Кнопка завершения урока -->
        <div style="text-align: center; margin: 40px 0; padding: 30px;">
            <button id="completeLessonBtn" onclick="completeLesson()" style="
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                border: none;
                padding: 18px 40px;
                font-size: 1.2em;
                font-weight: 600;
                border-radius: 30px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 6px 20px rgba(76,175,80,0.3);
                font-family: 'Noto Sans KR', sans-serif;
            ">Отметить урок как пройденный</button>
        </div>
</div>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
    <script src="../js/firebase-config.js"></script>
    <script src="../js/firebase-sync.js"></script>
    <script src="../js/firebase-auth.js"></script>
    <script src="../js/progress-tracker.js"></script>
    <script>
        // Кнопка завершения урока
        var LESSON_ID = '{lesson_id}';

        function completeLesson() {{
            if (window.ProgressTracker) {{
                if (!ProgressTracker.markLessonCompleted(LESSON_ID)) return;
                var btn = document.getElementById('completeLessonBtn');
                btn.textContent = 'Пройдено!';
                btn.style.background = '#2e7d32';
                btn.style.cursor = 'default';
                btn.disabled = true;
                btn.style.opacity = '0.85';
                console.log('[OK] Lesson completed:', LESSON_ID);
            }}
        }}

        // Проверяем статус при загрузке
        document.addEventListener('DOMContentLoaded', function() {{
            if (window.ProgressTracker) {{
                var progress = ProgressTracker.get();
                if (progress && progress.completedLessons && progress.completedLessons[LESSON_ID]) {{
                    var btn = document.getElementById('completeLessonBtn');
                    if (btn) {{
                        btn.textContent = 'Пройдено!';
                        btn.style.background = '#2e7d32';
                        btn.style.cursor = 'default';
                        btn.disabled = true;
                        btn.style.opacity = '0.85';
                    }}
                }}
            }}
        }});
    </script>
<script src="../js/dictionary.js"></script>
    <script src="../js/dictionary-inject.js"></script>
    <script src="../js/global-nav.js"></script>
</body>
</html>
"""


def register(les, lesson_id):
    """Карточка в level_<N>/index.html и ID в списке уровня в lessons.html."""
    lvl_path = os.path.join(ROOT, 'level_%d' % les['level'], 'index.html')
    with open(lvl_path, encoding='utf-8') as f:
        page = f.read()

    if 'data-lesson="%s"' % lesson_id not in page:
        card = ('            <div class="lesson-item" data-lesson="%s">\n'
                '                <h3>%s %s <span class="lesson-difficulty grammar">Грамматика</span></h3>\n'
                '                <p>%s</p>\n'
                '                <a href="../%s/index.html" class="lesson-link">Изучить →</a>\n'
                '            </div>\n\n' % (lesson_id, les['emoji'], les['title'],
                                            les['card'], lesson_id))
        # вставляем после последней карточки-урока страницы уровня
        idx = page.rfind('            <div class="lesson-item"')
        if idx == -1:
            print('[!] %s: не найден блок .lesson-item, карточка не добавлена' % lvl_path)
        else:
            end = page.find('</div>', page.find('lesson-link', idx))
            end = page.find('\n', end) + 1
            page = page[:end] + '\n' + card.rstrip('\n') + '\n' + page[end:]
            with open(lvl_path, 'w', encoding='utf-8') as f:
                f.write(page)
            print('[+] карточка -> level_%d/index.html' % les['level'])
    else:
        print('[=] карточка уже есть в level_%d' % les['level'])

    with open(LESSONS, encoding='utf-8') as f:
        nav = f.read()
    if "'%s'" % lesson_id in nav:
        print('[=] ID уже есть в lessons.html')
        return
    key = "'level_%d': [" % les['level']
    pos = nav.find(key)
    if pos == -1:
        print('[!] lessons.html: не найден список level_%d' % les['level'])
        return
    end = nav.find('\n', pos) + 1
    nav = nav[:end] + "                '%s',\n" % lesson_id + nav[end:]
    with open(LESSONS, 'w', encoding='utf-8') as f:
        f.write(nav)
    print('[+] ID -> lessons.html')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('data', help='JSON с уроками')
    ap.add_argument('--dry-run', action='store_true', help='только проверить данные')
    ap.add_argument('--register', action='store_true',
                    help='добавить карточку уровня и ID в lessons.html')
    args = ap.parse_args()

    with open(args.data, encoding='utf-8') as f:
        data = json.load(f)
    lessons = data['lessons']

    for les in lessons:
        miss = [k for k in REQUIRED if k not in les]
        if miss:
            fail('урок %s: нет полей %s' % (les.get('slug', '?'), ', '.join(miss)))
        if les['level'] not in LEVEL_THEME:
            fail('урок %s: level должен быть 1-6' % les['slug'])
        if not HANGUL.search(json.dumps(les, ensure_ascii=False)):
            fail('урок %s: нет корейского текста' % les['slug'])

    ids = ['lesson_%d_%s' % (l['num'], l['slug']) for l in lessons]

    for i, les in enumerate(lessons):
        lesson_id = ids[i]
        prev = les.get('prev')
        nxt = les.get('next')
        if prev is None and i > 0:
            prev = [ids[i - 1], 'Урок %d' % lessons[i - 1]['num']]
        if nxt is None and i < len(lessons) - 1:
            nxt = [ids[i + 1], 'Урок %d' % lessons[i + 1]['num']]

        page = build_html(les, prev, nxt)
        out_dir = os.path.join(ROOT, lesson_id)
        out = os.path.join(out_dir, 'index.html')

        if args.dry_run:
            print('[OK] %s — %d разделов, %d примеров, %d байт' %
                  (lesson_id, len(les['sections']), len(les['examples']), len(page)))
            continue

        os.makedirs(out_dir, exist_ok=True)
        with open(out, 'w', encoding='utf-8') as f:
            f.write(page)
        print('[+] %s/index.html' % lesson_id)

        if args.register:
            register(les, lesson_id)

    print('[OK] уроков обработано: %d' % len(lessons))


if __name__ == '__main__':
    main()
