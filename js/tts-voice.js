/**
 * Jane Korea — улучшение качества озвучки (TTS)
 *
 * 1. Если для фразы есть готовый MP3 (сгенерирован ElevenLabs,
 *    см. tools/tts-generate.py и audio/tts/manifest.json) — играем его.
 * 2. Иначе перехватываем speechSynthesis.speak и подставляем лучший
 *    доступный корейский голос вместо первого попавшегося (робота).
 * Код самих страниц не меняется: события start/end пробрасываются
 * на utterance, так что цепочки диалогов (u.onend) работают.
 */
(function() {
    'use strict';

    if (!('speechSynthesis' in window)) return;
    if (window.JKTTS) return;

    var synth = window.speechSynthesis;
    var bestKo = null;
    var loggedName = null;

    // Базовый URL сайта — из src самого скрипта (работает на любой глубине)
    var BASE = (function() {
        var cs = document.currentScript;
        if (cs && cs.src) return cs.src.replace(/js\/tts-voice\.js.*$/, '');
        return '';
    })();

    // =============================================
    // MP3-озвучка (ElevenLabs)
    // =============================================
    var mp3Files = null;   // { "фраза": "hash.mp3" } — основной диктор
    var mp3FilesB = null;  // { "фраза": "hash-b.mp3" } — второй диктор (диалоги)
    var player = null;

    function normKey(s) {
        return (s || '').replace(/🔊/g, '')
            .replace(/\[[^\]]*\]/g, '')   // [романизация] не озвучивается
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/g, '');
    }

    function stopMp3() {
        if (player) {
            try { player.pause(); player.currentTime = 0; } catch (e) {}
        }
    }

    if (window.fetch) {
        fetch(BASE + 'audio/tts/manifest.json')
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(j) {
                if (j && j.files) {
                    mp3Files = j.files;
                    mp3FilesB = j.filesB || null;
                    console.log('[OK] TTS: MP3-озвучка доступна (' +
                        Object.keys(mp3Files).length + ' фраз)');
                }
            })
            .catch(function() { /* нет манифеста — работаем через TTS */ });
    }

    // Страницы помечают реплики диалогов высотой тона:
    // pitch < 1 — второй собеседник, для него есть мужская дорожка (filesB)
    function lookupFile(u) {
        var key = normKey(u.text);
        if (mp3FilesB && typeof u.pitch === 'number' && u.pitch < 1 &&
            mp3FilesB[key]) {
            return mp3FilesB[key];
        }
        return mp3Files ? mp3Files[key] : null;
    }

    // Играет MP3 для utterance; true — если файл есть и запущен
    function tryPlayMp3(u, fallback) {
        var file = lookupFile(u);
        if (!file) return false;

        stopMp3();
        if (!player) player = new Audio();
        var settled = false;

        player.onended = function() {
            if (settled) return;
            settled = true;
            try { u.dispatchEvent(new Event('end')); } catch (e) {}
        };
        player.onerror = function() {
            if (settled) return;
            settled = true;
            fallback(); // файл битый/не скачался — озвучим браузером
        };

        player.src = BASE + 'audio/tts/' + file;
        var p = player.play();
        if (p && p.catch) {
            p.catch(function() {
                if (settled) return;
                settled = true;
                fallback();
            });
        }
        try { u.dispatchEvent(new Event('start')); } catch (e) {}
        return true;
    }

    // Голоса-"персонажи" Apple (Eloquence): Eddy, Grandma, Rocko и т.п. —
    // именно они звучат как робот. voiceURI в Chrome их не выдаёт,
    // поэтому фильтруем по имени.
    var NOVELTY = /\b(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|albert|fred|jester|junior|kathy|organ|superstar|trinoids|whisper|zarvox|bahh|bells|boing|bubbles|cellos|wobble)\b/;

    // Известные качественные корейские голоса:
    // Apple — Yuna/Юна; Microsoft — Heami, SunHi, InJoon, Hyunsu; Google — сетевой
    var KNOWN_GOOD = /(yuna|юна|suhyun|jian|sora|heami|sunhi|injoon|hyunsu|bongjin|gookmin|jimin|seohyeon|yujin)/;

    function scoreVoice(v) {
        var name = (v.name + ' ' + (v.voiceURI || '')).toLowerCase();
        var score = 0;
        if (name.indexOf('natural') !== -1) score += 100; // Edge Natural — самый живой
        if (name.indexOf('google') !== -1) score += 80;   // сетевой голос Chrome
        if (name.indexOf('premium') !== -1) score += 60;  // Apple premium
        if (name.indexOf('enhanced') !== -1) score += 50; // Apple enhanced
        if (name.indexOf('siri') !== -1) score += 40;
        if (KNOWN_GOOD.test(name)) score += 30;
        if (name.indexOf('online') !== -1) score += 20;
        if (name.indexOf('compact') !== -1) score -= 50;  // урезанный, звучит хуже
        if (name.indexOf('espeak') !== -1) score -= 150;
        if (name.indexOf('eloquence') !== -1) score -= 150;
        if (NOVELTY.test(name)) score -= 200;
        return score;
    }

    function pickKoreanVoice() {
        var voices = synth.getVoices();
        var best = null;
        var bestScore = -Infinity;
        for (var i = 0; i < voices.length; i++) {
            var v = voices[i];
            if ((v.lang || '').toLowerCase().indexOf('ko') !== 0) continue;
            var s = scoreVoice(v);
            if (s > bestScore) { bestScore = s; best = v; }
        }
        bestKo = best;
        if (best && best.name !== loggedName) {
            loggedName = best.name;
            console.log('[OK] TTS: выбран корейский голос — ' + best.name);
        }
        return best;
    }

    // Все приличные корейские голоса, лучшие первыми —
    // страницы могут выбирать разных дикторов для разных текстов.
    // Порог >= 0 отсекает урезанные (compact) и роботные голоса:
    // с плохим произношением лучше один хороший голос, чем разнообразие
    function listKoreanVoices() {
        var voices = synth.getVoices();
        var out = [];
        for (var i = 0; i < voices.length; i++) {
            var v = voices[i];
            if ((v.lang || '').toLowerCase().indexOf('ko') !== 0) continue;
            var s = scoreVoice(v);
            if (s >= 0) out.push({ voice: v, score: s });
        }
        out.sort(function(a, b) { return b.score - a.score; });
        return out.map(function(x) { return x.voice; });
    }

    // Голоса подгружаются асинхронно
    pickKoreanVoice();
    if (typeof synth.addEventListener === 'function') {
        synth.addEventListener('voiceschanged', pickKoreanVoice);
    }

    var HANGUL = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;

    var origSpeak = synth.speak.bind(synth);
    var origCancel = synth.cancel.bind(synth);

    function speakWithBrowserTTS(u) {
        try {
            // Явно выбранный страницей голос не перетираем —
            // так тексты могут звучать разными дикторами
            if (!u.voice) {
                if (!bestKo) pickKoreanVoice();
                if (bestKo) {
                    u.voice = bestKo;
                    u.lang = bestKo.lang;
                }
            }
            // Слишком медленная скорость усиливает эффект "робота"
            if (u.rate && u.rate < 0.85) u.rate = 0.85;
        } catch (e) {
            // Никогда не блокируем озвучку из-за ошибки подбора голоса
        }
        return origSpeak(u);
    }

    synth.speak = function(u) {
        var isKorean = false;
        try {
            isKorean = (u.lang || '').toLowerCase().indexOf('ko') === 0 ||
                       HANGUL.test(u.text || '');
        } catch (e) {}
        if (isKorean) {
            try {
                if (tryPlayMp3(u, function() { speakWithBrowserTTS(u); })) return;
            } catch (e) {}
            return speakWithBrowserTTS(u);
        }
        return origSpeak(u);
    };

    // Страницы зовут cancel() перед новой фразой — глушим и MP3
    synth.cancel = function() {
        stopMp3();
        return origCancel();
    };

    // =============================================
    // Проигрывание диалогов
    // На части уроков playDialogueSequence собирает реплики со всей
    // .content-section — если в секции два диалога, любая кнопка играет
    // всё с начала первого. Заменяем на версию, которая всегда находит
    // именно СВОЙ диалог: ближайший .dialogue-box над кнопкой.
    // =============================================
    var dialogueRun = 0; // токен: новый запуск глушит предыдущую цепочку

    function findDialogueBox(btn) {
        var box = btn.closest && btn.closest('.dialogue-box, .person-description');
        if (box) return box;
        // кнопка стоит после своего диалога — берём последний бокс над ней
        var boxes = document.querySelectorAll('.dialogue-box, .person-description');
        var best = null;
        for (var i = 0; i < boxes.length; i++) {
            if (btn.compareDocumentPosition(boxes[i]) & Node.DOCUMENT_POSITION_PRECEDING) {
                best = boxes[i];
            }
        }
        return best || boxes[0] || null;
    }

    function fixedPlayDialogue(btn, origFn) {
        var box = findDialogueBox(btn);
        var lines = box ? box.querySelectorAll('.dialogue-line') : [];
        if (!lines.length && box) lines = box.querySelectorAll('.korean-text');
        if (!lines.length) {
            if (origFn) origFn(btn);
            return;
        }

        var texts = [];
        for (var i = 0; i < lines.length; i++) {
            var k = lines[i].querySelector &&
                (lines[i].querySelector('.korean-text') ||
                 lines[i].querySelector('.dialogue-korean')) || lines[i];
            var t = normKey(k.textContent);
            if (t && HANGUL.test(t)) texts.push({ text: t, el: lines[i] });
        }
        if (!texts.length) return;

        var run = ++dialogueRun;
        synth.cancel();
        var origLabel = btn.textContent;
        btn.textContent = '⏸ Воспроизводится...';

        function finish() {
            btn.textContent = origLabel;
            texts.forEach(function(x) { x.el.style.background = ''; });
        }

        var idx = 0;
        function next() {
            if (run !== dialogueRun) return; // запущен другой диалог
            if (idx >= texts.length) { finish(); return; }
            texts.forEach(function(x) { x.el.style.background = ''; });
            texts[idx].el.style.background = 'rgba(102,126,234,0.15)';
            var u = new SpeechSynthesisUtterance(texts[idx].text);
            u.lang = 'ko-KR';
            u.rate = 0.95;
            u.pitch = idx % 2 === 0 ? 1.1 : 0.9; // признак смены диктора
            u.onend = function() {
                if (run !== dialogueRun) return;
                idx++;
                setTimeout(next, 500);
            };
            u.onerror = u.onend;
            synth.speak(u);
        }
        next();
    }

    function installDialogueFix() {
        if (typeof window.playDialogueSequence === 'function') {
            var orig = window.playDialogueSequence;
            window.playDialogueSequence = function(btn) {
                fixedPlayDialogue(btn, orig);
            };
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', installDialogueFix);
    } else {
        installDialogueFix();
    }

    window.JKTTS = {
        pickKoreanVoice: pickKoreanVoice,
        getKoreanVoice: function() { return bestKo; },
        listKoreanVoices: listKoreanVoices,
        hasMp3: function(text) { return !!(mp3Files && mp3Files[normKey(text)]); }
    };
})();
