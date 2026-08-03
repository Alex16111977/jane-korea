/**
 * Miso: 한국어 수업 - Spaced Repetition System (SRS)
 * Интервальное повторение по упрощённой системе Leitner
 * Интервалы: 1 → 3 → 7 → 14 → 30 дней
 */

(function() {
    'use strict';

    var STORAGE_KEY = 'koreanSRS';
    var INTERVALS = [1, 3, 7, 14, 30];

    /**
     * Получить все SRS данные
     * @returns {Object} { "word": { interval, nextReview, reviews, lastReview } }
     */
    function getData() {
        try {
            var data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('[ERROR] SRS.getData:', e);
            return {};
        }
    }

    /**
     * Сохранить SRS данные
     * @param {Object} data
     */
    function saveData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('[ERROR] SRS.saveData:', e);
        }
    }

    /**
     * Получить данные для конкретного слова
     * @param {string} korean
     * @returns {Object|null}
     */
    function getWordData(korean) {
        var data = getData();
        return data[korean.trim()] || null;
    }

    /**
     * Получить сегодняшнюю дату в формате YYYY-MM-DD
     */
    function today() {
        return new Date().toISOString().split('T')[0];
    }

    /**
     * Добавить дни к дате
     * @param {string} dateStr - YYYY-MM-DD
     * @param {number} days
     * @returns {string} YYYY-MM-DD
     */
    function addDays(dateStr, days) {
        var d = new Date(dateStr);
        d.setDate(d.getDate() + days);
        return d.toISOString().split('T')[0];
    }

    /**
     * Инициализировать слово в SRS (если ещё нет)
     * @param {string} korean
     */
    function initWord(korean) {
        var data = getData();
        var key = korean.trim();
        if (!data[key]) {
            data[key] = {
                interval: 1,
                nextReview: today(),
                reviews: 0,
                lastReview: null
            };
            saveData(data);
        }
    }

    /**
     * Записать результат повторения
     * @param {string} korean
     * @param {string} quality - 'know' | 'hard' | 'again'
     */
    function reviewWord(korean, quality) {
        var data = getData();
        var key = korean.trim();
        var word = data[key] || {
            interval: 1,
            nextReview: today(),
            reviews: 0,
            lastReview: null
        };

        word.reviews++;
        word.lastReview = today();

        var currentIdx = INTERVALS.indexOf(word.interval);
        if (currentIdx === -1) currentIdx = 0;

        if (quality === 'know') {
            // Переход на следующий уровень
            var nextIdx = Math.min(currentIdx + 1, INTERVALS.length - 1);
            word.interval = INTERVALS[nextIdx];
        } else if (quality === 'hard') {
            // Остаётся на том же уровне
            // interval не меняется
        } else if (quality === 'again') {
            // Сброс на начало
            word.interval = INTERVALS[0];
        }

        word.nextReview = addDays(today(), word.interval);
        data[key] = word;
        saveData(data);
    }

    /**
     * Получить уровень слова (1-5)
     * @param {string} korean
     * @returns {number}
     */
    function getLevel(korean) {
        var word = getWordData(korean);
        if (!word) return 0;
        var idx = INTERVALS.indexOf(word.interval);
        return idx >= 0 ? idx + 1 : 1;
    }

    /**
     * Фильтровать слова из koreanLearnedWords по SRS-расписанию
     */
    function getDueToday() {
        var data = getData();
        var todayStr = today();
        var result = [];

        // Берём слова из словаря
        var words = [];
        try {
            words = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
        } catch(e) {}

        words.forEach(function(w) {
            var key = w.korean.trim();
            var srs = data[key];
            if (!srs) {
                // Слово ещё не в SRS — считаем его новым, к повтору сегодня
                result.push(w);
            } else if (srs.nextReview <= todayStr) {
                result.push(w);
            }
        });

        return result;
    }

    function getDueTomorrow() {
        var data = getData();
        var tomorrowStr = addDays(today(), 1);
        var result = [];

        var words = [];
        try {
            words = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
        } catch(e) {}

        words.forEach(function(w) {
            var key = w.korean.trim();
            var srs = data[key];
            if (srs && srs.nextReview === tomorrowStr) {
                result.push(w);
            }
        });

        return result;
    }

    function getDueLater() {
        var data = getData();
        var tomorrowStr = addDays(today(), 1);
        var result = [];

        var words = [];
        try {
            words = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
        } catch(e) {}

        words.forEach(function(w) {
            var key = w.korean.trim();
            var srs = data[key];
            if (srs && srs.nextReview > tomorrowStr) {
                result.push(w);
            }
        });

        return result;
    }

    /**
     * Статистика
     * @returns {Object} { today, tomorrow, later, total }
     */
    function getStats() {
        var dueToday = getDueToday();
        var dueTomorrow = getDueTomorrow();
        var dueLater = getDueLater();

        return {
            today: dueToday.length,
            tomorrow: dueTomorrow.length,
            later: dueLater.length,
            total: dueToday.length + dueTomorrow.length + dueLater.length
        };
    }

    /**
     * Цвет уровня
     * @param {number} level 1-5
     * @returns {string} CSS color
     */
    function getLevelColor(level) {
        var colors = {
            0: '#999',     // не начато
            1: '#f44336',  // 1 день - красный
            2: '#ff9800',  // 3 дня - оранжевый
            3: '#ffc107',  // 7 дней - жёлтый
            4: '#4caf50',  // 14 дней - зелёный
            5: '#667eea'   // 30 дней - выучено
        };
        return colors[level] || '#999';
    }

    /**
     * Текст уровня
     * @param {number} level 1-5
     * @returns {string}
     */
    function getLevelText(level) {
        var texts = {
            0: 'Новое',
            1: '1 день',
            2: '3 дня',
            3: '7 дней',
            4: '14 дней',
            5: 'Выучено'
        };
        return texts[level] || 'Новое';
    }

    /**
     * Форматировать дату для отображения
     * @param {string} dateStr - YYYY-MM-DD
     * @returns {string}
     */
    function formatDate(dateStr) {
        if (!dateStr) return '';
        var todayStr = today();
        var tomorrowStr = addDays(todayStr, 1);

        if (dateStr === todayStr) return 'Сегодня';
        if (dateStr === tomorrowStr) return 'Завтра';
        if (dateStr < todayStr) return 'Просрочено';

        var d = new Date(dateStr);
        return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    }

    // Экспорт
    window.SRS = {
        getData: getData,
        saveData: saveData,
        getWordData: getWordData,
        reviewWord: reviewWord,
        getLevel: getLevel,
        getDueToday: getDueToday,
        getDueTomorrow: getDueTomorrow,
        getDueLater: getDueLater,
        getStats: getStats,
        initWord: initWord,
        getLevelColor: getLevelColor,
        getLevelText: getLevelText,
        formatDate: formatDate,
        INTERVALS: INTERVALS
    };

    console.log('[OK] SRS module loaded');
})();
