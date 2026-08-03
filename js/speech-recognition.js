/**
 * Speech Recognition Module for Miso: 한국어 수업
 * Allows students to practice Korean pronunciation
 * Uses Web Speech API (Chrome/Edge only)
 * Exported as window.SpeechPractice
 */
(function() {
    'use strict';

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var isSupported = !!SpeechRecognition;
    var recognition = null;
    var isListening = false;

    function init() {
        if (!isSupported) {
            console.log('[!] SpeechRecognition not supported in this browser');
            return false;
        }
        recognition = new SpeechRecognition();
        recognition.lang = 'ko-KR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;
        recognition.continuous = false;
        console.log('[OK] SpeechRecognition initialized');
        return true;
    }

    /**
     * Start listening and compare with expected Korean text
     * @param {string} expectedText - Korean text the user should say
     * @param {function} callback - Called with result object
     */
    function listen(expectedText, callback) {
        if (!recognition) {
            if (!init()) {
                callback({ error: 'not-supported' });
                return;
            }
        }

        if (isListening) {
            recognition.stop();
        }

        isListening = true;

        recognition.onresult = function(event) {
            isListening = false;
            var results = [];
            for (var i = 0; i < event.results[0].length; i++) {
                results.push({
                    transcript: event.results[0][i].transcript,
                    confidence: event.results[0][i].confidence
                });
            }

            var best = results[0];
            var comparison = compareTexts(expectedText, best.transcript);

            callback({
                success: true,
                transcript: best.transcript,
                confidence: Math.round(best.confidence * 100),
                score: comparison.score,
                matches: comparison.matches,
                alternatives: results,
                expected: expectedText
            });
        };

        recognition.onerror = function(event) {
            isListening = false;
            console.log('[ERROR] SpeechRecognition:', event.error);
            callback({ error: event.error });
        };

        recognition.onend = function() {
            isListening = false;
        };

        recognition.start();
    }

    /**
     * Stop listening
     */
    function stop() {
        if (recognition && isListening) {
            recognition.stop();
            isListening = false;
        }
    }

    /**
     * Normalize Korean text for comparison
     * Remove spaces, punctuation, special chars
     */
    function normalize(text) {
        return text
            .replace(/[\s.,!?~:;·…\-()'"]/g, '')
            .replace(/[0-9]/g, '')
            .toLowerCase()
            .trim();
    }

    /**
     * Compare expected vs spoken text
     * @returns {{ score: number, matches: boolean[] }}
     */
    function compareTexts(expected, spoken) {
        var e = normalize(expected);
        var s = normalize(spoken);

        if (e === s) {
            return { score: 100, matches: new Array(e.length).fill(true) };
        }

        if (e.length === 0 || s.length === 0) {
            return { score: 0, matches: [] };
        }

        // Character-level comparison with simple alignment
        var maxLen = Math.max(e.length, s.length);
        var matchCount = 0;
        var matches = [];

        for (var i = 0; i < e.length; i++) {
            if (i < s.length && e[i] === s[i]) {
                matchCount++;
                matches.push(true);
            } else {
                matches.push(false);
            }
        }

        var score = Math.round((matchCount / maxLen) * 100);
        return { score: score, matches: matches };
    }

    /**
     * Get score emoji and message
     */
    function getScoreMessage(score) {
        if (score >= 90) return { emoji: '', message: 'Отлично! Произношение почти идеальное!' };
        if (score >= 70) return { emoji: '', message: 'Хорошо! Но можно ещё лучше.' };
        if (score >= 50) return { emoji: '', message: 'Неплохо. Попробуйте ещё раз.' };
        return { emoji: '', message: 'Попробуйте снова. Слушайте и повторяйте.' };
    }

    /**
     * Check if the browser supports speech recognition
     */
    function checkSupport() {
        return isSupported;
    }

    window.SpeechPractice = {
        isSupported: isSupported,
        listen: listen,
        stop: stop,
        init: init,
        checkSupport: checkSupport,
        getScoreMessage: getScoreMessage,
        compareTexts: compareTexts
    };

    console.log('[OK] SpeechPractice module loaded (supported: ' + isSupported + ')');
})();
