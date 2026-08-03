/**
 * Miso: 한국어 수업 — Автоматический подсчёт уроков
 * Загружает level_N/index.html, собирает id уроков из атрибутов data-lesson
 * и отдаёт карту { level_1: [...], ..., level_6: [...] }.
 * Результат кэшируется на сессию в sessionStorage.
 */
(function() {
    'use strict';

    var LEVELS = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5', 'level_6'];
    var CACHE_KEY = 'misoLevelLessons';

    function parseLessonIds(html) {
        var ids = [];
        var seen = {};
        var re = /data-lesson="([^"]+)"/g;
        var m;
        while ((m = re.exec(html)) !== null) {
            if (!seen[m[1]]) {
                seen[m[1]] = true;
                ids.push(m[1]);
            }
        }
        return ids;
    }

    function fetchLevel(basePath, levelId) {
        return fetch(basePath + levelId + '/index.html').then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status + ' for ' + levelId);
            return res.text();
        }).then(parseLessonIds);
    }

    // basePath: '' для корня, '../' для страниц в подпапках (en/)
    function load(basePath) {
        try {
            var cached = sessionStorage.getItem(CACHE_KEY);
            if (cached) {
                return Promise.resolve(JSON.parse(cached));
            }
        } catch (e) { /* sessionStorage недоступен — работаем без кэша */ }

        return Promise.all(LEVELS.map(function(id) {
            return fetchLevel(basePath || '', id);
        })).then(function(lists) {
            var map = {};
            LEVELS.forEach(function(id, i) { map[id] = lists[i]; });
            try {
                sessionStorage.setItem(CACHE_KEY, JSON.stringify(map));
            } catch (e) {}
            console.log('[OK] LevelLessons: карта уроков собрана из страниц уровней');
            return map;
        });
    }

    function total(map) {
        var sum = 0;
        Object.keys(map).forEach(function(k) { sum += map[k].length; });
        return sum;
    }

    // «281 урок», «92 урока», «58 уроков»
    function ruCount(n) {
        var m10 = n % 10;
        var m100 = n % 100;
        if (m10 === 1 && m100 !== 11) return n + ' урок';
        if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return n + ' урока';
        return n + ' уроков';
    }

    function enCount(n) {
        return n + (n === 1 ? ' lesson' : ' lessons');
    }

    window.LevelLessons = { load: load, total: total, ruCount: ruCount, enCount: enCount };
})();
