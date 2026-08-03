/**
 * Jane Korea — озвучка лексики в таблицах и карточках уроков.
 *
 * Навешивает кнопку воспроизведения на каждую ячейку <td class="ko"> и на
 * каждый заголовок .slang-korean, чтобы не прописывать speakKorean() вручную
 * в сотнях строк разметки.
 *
 * Озвучка идёт через SpeechSynthesisUtterance — js/tts-voice.js перехватывает
 * вызов и подставляет готовый MP3 из audio/tts/manifest.json, если он есть.
 * Ключи фраз нормализуются так же, как в tools/tts-generate.py (функция norm),
 * иначе MP3 не найдётся и сработает синтезатор браузера.
 */
(function() {
    'use strict';

    if (!('speechSynthesis' in window)) return;
    if (window.JKLessonAudio) return;

    var SELECTORS = ['td.ko', '.slang-korean'];
    var HANGUL = /[가-힣]/;
    var CYRILLIC = /[Ѐ-ӿ]/;

    /** Нормализация — копия norm() из tools/tts-generate.py */
    function normalize(s) {
        return (s || '')
            .replace(/🔊/g, '')     // значок динамика
            .replace(/\[[^\]]*\]/g, '')       // [романизация] не озвучивается
            .replace(/\s*\/\s*/g, ', ')       // «막걸리 / 탁주» -> «막걸리, 탁주»
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/g, '');
    }

    function speak(text) {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.lang = 'ko-KR';
        u.rate = 0.7;
        u.pitch = 1.0;
        window.speechSynthesis.speak(u);
    }

    function makeButton(text, light) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'jk-cell-audio' + (light ? ' jk-cell-audio-light' : '');
        btn.setAttribute('aria-label', 'Прослушать: ' + text);
        btn.title = 'Прослушать';
        btn.textContent = '🔊';
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            speak(text);
        });
        return btn;
    }

    function injectStyles() {
        if (document.getElementById('jk-cell-audio-style')) return;
        var css = document.createElement('style');
        css.id = 'jk-cell-audio-style';
        css.textContent =
            '.jk-cell-audio{background:rgba(0,0,0,0.06);border:none;border-radius:50%;' +
            'width:24px;height:24px;font-size:0.72em;line-height:1;cursor:pointer;padding:0;' +
            'margin-left:7px;vertical-align:middle;opacity:0.55;transition:all .2s ease;' +
            'display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}' +
            '.jk-cell-audio:hover{opacity:1;transform:scale(1.15);background:rgba(0,0,0,0.12)}' +
            '.jk-cell-audio-light{background:rgba(255,255,255,0.22);opacity:0.75}' +
            '.jk-cell-audio-light:hover{background:rgba(255,255,255,0.38)}' +
            '@media (max-width:768px){.jk-cell-audio{width:22px;height:22px;margin-left:5px}}';
        document.head.appendChild(css);
    }

    function enhance(root) {
        var count = 0;
        SELECTORS.forEach(function(sel) {
            (root || document).querySelectorAll(sel).forEach(function(el) {
                if (el.querySelector('.jk-cell-audio')) return;

                var raw = el.textContent || '';
                if (!HANGUL.test(raw)) return;
                // «прил. + 게 생기다» — описание конструкции, а не фраза
                if (CYRILLIC.test(raw)) return;

                var text = normalize(raw);
                if (!text) return;

                el.appendChild(makeButton(text, el.classList.contains('slang-korean')));
                count++;
            });
        });
        return count;
    }

    function init() {
        injectStyles();
        var n = enhance(document);
        if (n) console.log('[OK] Озвучка лексики: кнопок добавлено ' + n);
    }

    window.JKLessonAudio = { enhance: enhance, normalize: normalize };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
