/**
 * Jane Korea - Progress Tracking System
 * Версия: 2.0 (с поддержкой Firebase)
 * Дата: 2025-10-09
 */

const STORAGE_KEY = 'janeKoreaProgress';

// Инициализация структуры данных
function initProgress() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
        return JSON.parse(existing);
    }

    const initial = {
        completedTexts: {},
        completedLessons: {},
        completedKpop: {},
        completedDialogues: {},
        stats: {
            totalTexts: 0,
            totalLessons: 0,
            totalKpop: 0,
            totalDialogues: 0,
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

// Показать уведомление "нужен вход"
function showLoginRequiredToast() {
    let el = document.getElementById('jk-login-toast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'jk-login-toast';
        el.style.cssText = [
            'position:fixed', 'bottom:24px', 'left:50%', 'transform:translateX(-50%)',
            'background:#333', 'color:#fff', 'padding:14px 28px', 'border-radius:14px',
            'z-index:99999', 'font-family:\'Noto Sans KR\',sans-serif', 'font-size:15px',
            'box-shadow:0 4px 20px rgba(0,0,0,0.35)', 'transition:opacity 0.3s',
            'text-align:center', 'max-width:320px', 'line-height:1.5'
        ].join(';');
        document.body.appendChild(el);
    }
    el.innerHTML = '🔐 Войдите через Google,<br>чтобы сохранить прогресс';
    el.style.opacity = '1';
    el.style.display = 'block';
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => { el.style.display = 'none'; }, 300);
    }, 3500);
}

// Проверить авторизацию перед сохранением
function requireLogin() {
    if (window.FirebaseAuth && !window.FirebaseAuth.isLoggedIn()) {
        showLoginRequiredToast();
        console.log('[!] Progress not saved: user not logged in');
        return false;
    }
    return true;
}

// Сохранить прогресс (только если авторизован)
function saveProgress(progress) {
    if (!requireLogin()) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    console.log('[OK] Progress saved locally');

    if (window.FirebaseSync && window.FirebaseAuth?.isLoggedIn()) {
        window.FirebaseSync.saveProgressToCloud(progress)
            .then(success => {
                if (success) console.log('[OK] Progress synced to cloud');
            })
            .catch(err => console.error('[ERR] Cloud sync failed:', err));
    }
}

// Получить прогресс
function getProgress() {
    return initProgress();
}

// Отметить текст как завершенный
function markTextCompleted(level, category, textId, quizScore, wordsLearned) {
    if (!requireLogin()) return null;
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
    if (window.DailyTasks) { window.DailyTasks.updateTask('readText'); }
    console.log('[+] Text completed:', key);
    return progress;
}

// Отметить урок как пройденный
function markLessonCompleted(lessonId) {
    if (!requireLogin()) return null;
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
    if (window.DailyTasks) { window.DailyTasks.updateTask('studyLesson'); }
    console.log('[+] Lesson completed:', lessonId);
    setTimeout(function() { _addUnmarkBtn(lessonId); }, 100);
    return progress;
}

// Отметить диалог как пройденный
function markDialogueCompleted(categoryId, dialogueId) {
    const progress = getProgress();
    if (!progress.completedDialogues) progress.completedDialogues = {};
    const key = categoryId + '/' + dialogueId;

    progress.completedDialogues[key] = {
        completed: true,
        completedAt: new Date().toISOString()
    };

    if (!progress.stats.totalDialogues) progress.stats.totalDialogues = 0;
    progress.stats.totalDialogues = Object.keys(progress.completedDialogues).length;
    updateStreak(progress);

    saveProgress(progress);
    console.log('[+] Dialogue completed:', key);
    return progress;
}

// Обновить серию дней
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
            // Сегодня уже учился - не меняем
        } else if (lastDate === yesterday) {
            // Вчера учился - продолжаем серию
            progress.stats.currentStreak++;
            if (progress.stats.currentStreak > progress.stats.longestStreak) {
                progress.stats.longestStreak = progress.stats.currentStreak;
            }
        } else {
            // Пропустил день - сбрасываем серию
            progress.stats.currentStreak = 1;
        }
    }
    
    progress.stats.lastActivityDate = today;
}

// Проверить завершен ли текст
function isTextCompleted(level, category, textId) {
    const progress = getProgress();
    const key = `${level}-${category}-${textId}`;
    return !!progress.completedTexts[key];
}

// Проверить завершен ли урок
function isLessonCompleted(lessonId) {
    const progress = getProgress();
    return !!progress.completedLessons[lessonId];
}

// Снять отметку с урока
function markLessonUncompleted(lessonId) {
    if (!requireLogin()) return null;
    const progress = getProgress();
    if (progress.completedLessons && progress.completedLessons[lessonId]) {
        delete progress.completedLessons[lessonId];
        progress.stats.totalLessons = Object.keys(progress.completedLessons).length;
        saveProgress(progress);
        console.log('[-] Lesson uncompleted:', lessonId);
    }
    return progress;
}

// Добавить кнопку "Убрать отметку" рядом с completeLessonBtn
function _addUnmarkBtn(lessonId) {
    var btn = document.getElementById('completeLessonBtn');
    if (!btn) return;
    if (document.getElementById('jk-unmark-btn')) return;

    var lid = lessonId || (typeof LESSON_ID !== 'undefined' ? LESSON_ID : null);
    if (!lid) return;
    var progress = getProgress();
    if (!progress.completedLessons || !progress.completedLessons[lid]) return;

    var unmarkBtn = document.createElement('button');
    unmarkBtn.id = 'jk-unmark-btn';
    unmarkBtn.textContent = 'Убрать отметку';
    unmarkBtn.style.cssText = [
        'display:block', 'margin:10px auto 0', 'background:none', 'border:none',
        'color:#bbb', 'font-size:13px', 'cursor:pointer', 'text-decoration:underline',
        'font-family:\'Noto Sans KR\',sans-serif', 'padding:4px 8px', 'transition:color 0.2s'
    ].join(';');
    unmarkBtn.onmouseover = function() { this.style.color = '#e53935'; };
    unmarkBtn.onmouseout  = function() { this.style.color = '#bbb'; };

    unmarkBtn.onclick = function() {
        var activeLid = typeof LESSON_ID !== 'undefined' ? LESSON_ID : lid;
        if (!markLessonUncompleted(activeLid)) return;
        btn.textContent = 'Отметить урок как пройденный';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        btn.style.cursor = 'pointer';
        btn.disabled = false;
        btn.style.opacity = '1';
        unmarkBtn.remove();
        console.log('[-] Lesson button reset');
    };

    btn.parentNode.insertBefore(unmarkBtn, btn.nextSibling);
}

// Автопроверка кнопки при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    function checkBtn() {
        var lid = typeof LESSON_ID !== 'undefined' ? LESSON_ID : null;
        if (!lid) return;
        if (isLessonCompleted(lid)) _addUnmarkBtn(lid);
    }
    // Проверяем через 350ms — после DOMContentLoaded уроков и до Firebase sync
    setTimeout(checkBtn, 350);
    // Повторно после Firebase sync
    if (window.FirebaseAuth) {
        window.FirebaseAuth.onAuthStateChanged(function() {
            setTimeout(checkBtn, 1500);
        });
    }
});

// Сбросить весь прогресс
function resetProgress() {
    if (confirm('Вы уверены? Весь прогресс будет потерян!')) {
        localStorage.removeItem(STORAGE_KEY);
        console.log('[!] Progress reset');
        location.reload();
    }
}

// Экспорт функций
window.ProgressTracker = {
    init: initProgress,
    get: getProgress,
    save: saveProgress,
    markTextCompleted,
    markLessonCompleted,
    markLessonUncompleted,
    markDialogueCompleted,
    isTextCompleted,
    isLessonCompleted,
    resetProgress
};

console.log('[OK] ProgressTracker loaded');
