/**
 * Daily Tasks Module for Jane Korea
 * Tracks daily learning goals with specific tasks
 * Exported as window.DailyTasks
 */
(function() {
    'use strict';

    var STORAGE_KEY = 'janeKoreaDailyTasks';

    var TASK_DEFINITIONS = [
        {
            id: 'learnWords',
            name: 'Выучить 5 слов',
            icon: '',
            target: 5,
            link: 'vocabulary-learning.html',
            linkText: 'Словарь'
        },
        {
            id: 'studyLesson',
            name: 'Пройти урок',
            icon: '',
            target: 1,
            link: 'lessons.html',
            linkText: 'Уроки'
        },
        {
            id: 'readText',
            name: 'Прочитать текст',
            icon: '',
            target: 1,
            link: 'reading-texts.html',
            linkText: 'Тексты'
        },
        {
            id: 'passQuiz',
            name: 'Пройти тест',
            icon: '',
            target: 1,
            link: 'vocabulary-learning.html',
            linkText: 'Тест'
        },
        {
            id: 'reviewSRS',
            name: 'Повторить 5 слов (SRS)',
            icon: '',
            target: 5,
            link: 'vocabulary-learning.html',
            linkText: 'Повторение'
        }
    ];

    /**
     * Get today's date as YYYY-MM-DD string
     */
    function getTodayString() {
        var d = new Date();
        var year = d.getFullYear();
        var month = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return year + '-' + month + '-' + day;
    }

    /**
     * Load tasks from localStorage, reset if new day
     */
    function loadTasks() {
        var today = getTodayString();
        var stored = null;

        try {
            stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
        } catch(e) {
            console.log('[ERROR] DailyTasks parse error:', e);
        }

        if (!stored || stored.date !== today) {
            // New day — reset tasks
            var tasks = {};
            TASK_DEFINITIONS.forEach(function(def) {
                tasks[def.id] = {
                    current: 0,
                    completed: false
                };
            });

            stored = {
                date: today,
                tasks: tasks,
                allCompleted: false
            };

            saveTasks(stored);
            console.log('[+] DailyTasks reset for', today);
        }

        return stored;
    }

    /**
     * Save tasks to localStorage
     */
    function saveTasks(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch(e) {
            console.log('[ERROR] DailyTasks save error:', e);
        }
    }

    /**
     * Increment a task's progress
     * @param {string} taskId - One of: learnWords, studyLesson, readText, passQuiz, reviewSRS
     * @param {number} amount - How much to increment (default: 1)
     */
    function updateTask(taskId, amount) {
        if (typeof amount === 'undefined') amount = 1;

        var data = loadTasks();
        var task = data.tasks[taskId];
        if (!task) {
            console.log('[!] DailyTasks: unknown task', taskId);
            return;
        }

        var def = TASK_DEFINITIONS.find(function(d) { return d.id === taskId; });
        if (!def) return;

        task.current = Math.min(task.current + amount, def.target);
        if (task.current >= def.target) {
            task.completed = true;
        }

        // Check if all tasks completed
        var allDone = true;
        TASK_DEFINITIONS.forEach(function(d) {
            if (!data.tasks[d.id].completed) allDone = false;
        });
        data.allCompleted = allDone;

        saveTasks(data);
        console.log('[+] DailyTasks:', taskId, task.current + '/' + def.target);

        // Dispatch event for UI updates
        try {
            window.dispatchEvent(new CustomEvent('dailyTaskUpdated', {
                detail: { taskId: taskId, data: data }
            }));
        } catch(e) { /* old browsers */ }

        return data;
    }

    /**
     * Get current tasks data
     */
    function getTasks() {
        return loadTasks();
    }

    /**
     * Get task definitions
     */
    function getDefinitions() {
        return TASK_DEFINITIONS;
    }

    /**
     * Get completion stats
     * @returns {{ completed: number, total: number, percentage: number }}
     */
    function getStats() {
        var data = loadTasks();
        var completed = 0;
        var total = TASK_DEFINITIONS.length;

        TASK_DEFINITIONS.forEach(function(def) {
            if (data.tasks[def.id] && data.tasks[def.id].completed) {
                completed++;
            }
        });

        return {
            completed: completed,
            total: total,
            percentage: Math.round((completed / total) * 100)
        };
    }

    window.DailyTasks = {
        updateTask: updateTask,
        getTasks: getTasks,
        getDefinitions: getDefinitions,
        getStats: getStats,
        loadTasks: loadTasks
    };

    console.log('[OK] DailyTasks module loaded');
})();
