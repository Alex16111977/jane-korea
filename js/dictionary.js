/**
 * Miso: 한국어 수업 - Dictionary Module
 * Общий API для работы с личным словарём
 * Использует существующий ключ koreanLearnedWords в localStorage
 */

(function() {
    'use strict';

    var STORAGE_KEY = 'koreanLearnedWords';

    /**
     * Получить все слова из словаря
     * @returns {Array} массив слов
     */
    function getAll() {
        try {
            var data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('[ERROR] Dictionary.getAll:', e);
            return [];
        }
    }

    /**
     * Сохранить весь массив слов
     * @param {Array} words
     */
    function saveAll(words) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
            // Firebase sync если доступен
            if (window.FirebaseSync && typeof window.FirebaseSync.saveWordsToCloud === 'function') {
                window.FirebaseSync.saveWordsToCloud();
            }
        } catch (e) {
            console.error('[ERROR] Dictionary.saveAll:', e);
        }
    }

    /**
     * Проверить, сохранено ли слово
     * @param {string} korean - корейское слово
     * @returns {boolean}
     */
    function isWordSaved(korean) {
        var words = getAll();
        var needle = korean.trim();
        return words.some(function(w) {
            return w.korean.trim() === needle;
        });
    }

    /**
     * Добавить слово в словарь (с дедупликацией)
     * @param {string} korean
     * @param {string} translation
     * @param {string} pronunciation
     * @param {string} [source] - откуда добавлено (textKey или lesson id)
     * @returns {boolean} true если добавлено, false если уже было
     */
    function addWord(korean, translation, pronunciation, source) {
        if (!korean || !translation) return false;

        var words = getAll();
        var needle = korean.trim();

        // Дедупликация
        var exists = words.some(function(w) {
            return w.korean.trim() === needle;
        });
        if (exists) return false;

        words.push({
            korean: needle,
            translation: translation.trim(),
            pronunciation: (pronunciation || '').trim(),
            textKey: source || '',
            addedAt: new Date().toISOString()
        });

        saveAll(words);
        if (window.SRS) { window.SRS.initWord(needle); }
        if (window.DailyTasks) { window.DailyTasks.updateTask('learnWords'); }
        console.log('[+] Dictionary: added', needle);
        return true;
    }

    /**
     * Удалить слово из словаря
     * @param {string} korean
     * @returns {boolean} true если удалено
     */
    function removeWord(korean) {
        var words = getAll();
        var needle = korean.trim();
        var filtered = words.filter(function(w) {
            return w.korean.trim() !== needle;
        });

        if (filtered.length === words.length) return false;

        saveAll(filtered);
        console.log('[-] Dictionary: removed', needle);
        return true;
    }

    /**
     * Количество слов в словаре
     * @returns {number}
     */
    function getCount() {
        return getAll().length;
    }

    // Экспорт
    window.Dictionary = {
        getAll: getAll,
        saveAll: saveAll,
        isWordSaved: isWordSaved,
        addWord: addWord,
        removeWord: removeWord,
        getCount: getCount
    };

    console.log('[OK] Dictionary module loaded');
})();
