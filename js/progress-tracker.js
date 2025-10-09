/**
 * Jane Korea - Progress Tracking System
 * Версія: 1.0
 * Дата: 2025-10-09
 */

const STORAGE_KEY = 'janeKoreaProgress';

// Ініціалізація структури даних
function initProgress() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
        return JSON.parse(existing);
    }
    
    const initial = {
        completedTexts: {},
        completedLessons: {},
        completedKpop: {},
        stats: {
            totalTexts: 0,
            totalLessons: 0,
            totalKpop: 0,
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            studyTimeMinutes: 0
        },
        achievements: []
    };
    
    saveProgress(initial);
    return initial;
}

// Зберегти прогрес
function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    console.log('[OK] Progress saved');
}

// Отримати прогрес
function getProgress() {
    return initProgress();
}

// Відмітити текст як завершений
function markTextCompleted(level, category, textId, quizScore, wordsLearned) {
    const progress = getProgress();
    const key = `${level}-${category}-${textId}`;
    
    progress.completedTexts[key] = {
        completed: true,
        completedAt: new Date().toISOString(),
        quizScore: quizScore,
        wordsLearned: wordsLearned
    };
    
    progress.stats.totalTexts = Object.keys(progress.completedTexts).length;
    updateStreak(progress);
    
    saveProgress(progress);
    console.log('[+] Text completed:', key);
    return progress;
}

// Відмітити урок як пройденим
function markLessonCompleted(lessonId) {
    const progress = getProgress();
    
    if (!progress.completedLessons[lessonId]) {
        progress.completedLessons[lessonId] = {
            completed: true,
            completedAt: new Date().toISOString(),
            revisited: 0
        };
    } else {
        progress.completedLessons[lessonId].revisited++;
    }
    
    progress.stats.totalLessons = Object.keys(progress.completedLessons).length;
    updateStreak(progress);
    
    saveProgress(progress);
    console.log('[+] Lesson completed:', lessonId);
    return progress;
}

// Оновити серію днів
function updateStreak(progress) {
    const today = new Date().toDateString();
    const lastActivity = progress.stats.lastActivityDate;
    
    if (!lastActivity) {
        progress.stats.currentStreak = 1;
        progress.stats.longestStreak = 1;
    } else {
        const lastDate = new Date(lastActivity).toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (lastDate === today) {
            // Сьогодні вже навчався - не змінюємо
        } else if (lastDate === yesterday) {
            // Вчора навчався - продовжуємо серію
            progress.stats.currentStreak++;
            if (progress.stats.currentStreak > progress.stats.longestStreak) {
                progress.stats.longestStreak = progress.stats.currentStreak;
            }
        } else {
            // Пропустив день - скидаємо серію
            progress.stats.currentStreak = 1;
        }
    }
    
    progress.stats.lastActivityDate = today;
}

// Перевірити чи текст завершено
function isTextCompleted(level, category, textId) {
    const progress = getProgress();
    const key = `${level}-${category}-${textId}`;
    return !!progress.completedTexts[key];
}

// Перевірити чи урок завершено
function isLessonCompleted(lessonId) {
    const progress = getProgress();
    return !!progress.completedLessons[lessonId];
}

// Скинути весь прогрес
function resetProgress() {
    if (confirm('Ви впевнені? Весь прогрес буде втрачено!')) {
        localStorage.removeItem(STORAGE_KEY);
        console.log('[!] Progress reset');
        location.reload();
    }
}

// Експорт функцій
window.ProgressTracker = {
    init: initProgress,
    get: getProgress,
    save: saveProgress,
    markTextCompleted,
    markLessonCompleted,
    isTextCompleted,
    isLessonCompleted,
    resetProgress
};

console.log('[OK] ProgressTracker loaded');
