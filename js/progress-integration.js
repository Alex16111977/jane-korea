/**
 * Miso: 한국어 수업 - Progress Integration for reading-content.html
 * Версія: 1.0
 */

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ProgressTracker !== 'undefined') {
        ProgressTracker.init();
        console.log('[OK] Progress tracker initialized for reading-content');
    }
});

// Функция сохранения прогресса после теста
function saveTextProgress(finalScore) {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const category = urlParams.get('category');
    const textId = urlParams.get('textId');
    
    if (!level || !category || !textId) {
        console.error('[ERROR] Missing URL parameters');
        return;
    }
    
    // Подсчёт изученных слов
    let wordsCount = 0;
    if (typeof window !== 'undefined' && typeof window.getWordsForCurrentText === 'function') {
        const wordsForText = window.getWordsForCurrentText();
        wordsCount = Array.isArray(wordsForText) ? wordsForText.length : 0;
    }
    
    // Сохраняем прогресс
    ProgressTracker.markTextCompleted(level, category, textId, finalScore, wordsCount);
    
    console.log('[+] Progress saved:', {level, category, textId, score: finalScore, words: wordsCount});
    
    // Показать поздравление
    showCompletionCelebration(finalScore);
}

// Поздравление после завершения
function showCompletionCelebration(score) {
    const progress = ProgressTracker.get();
    const totalTexts = progress.stats.totalTexts;
    const streak = progress.stats.currentStreak;
    
    let message = `📊 Результат: ${score}%\n`;
    message += `📚 Всего текстов пройдено: ${totalTexts}\n`;
    message += `🔥 Серия дней: ${streak}`;

    // Проверка новых достижений
    if (totalTexts === 1) {
        message += `\n\n🥇 НОВОЕ ДОСТИЖЕНИЕ: Первый текст!`;
    }
    if (score === 100) {
        message += `\n\n💯 НОВОЕ ДОСТИЖЕНИЕ: Идеальный результат!`;
    }
    if (streak === 7) {
        message += `\n\n🔥 НОВОЕ ДОСТИЖЕНИЕ: Недельная серия!`;
    }

    if (window.JKModal) {
        window.JKModal.success(message, 'Поздравляем! Текст завершён!');
    } else {
        alert('🎉 Поздравляем! Текст завершён!\n\n' + message);
    }
}

console.log('[OK] Progress integration loaded');
