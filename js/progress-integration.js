/**
 * Jane Korea - Progress Integration for reading-content.html
 * Версія: 1.0
 */

// Ініціалізація при завантаженні
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ProgressTracker !== 'undefined') {
        ProgressTracker.init();
        console.log('[OK] Progress tracker initialized for reading-content');
    }
});

// Функція збереження прогресу після тесту
function saveTextProgress(finalScore) {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const category = urlParams.get('category');
    const textId = urlParams.get('textId');
    
    if (!level || !category || !textId) {
        console.error('[ERROR] Missing URL parameters');
        return;
    }
    
    // Підрахунок вивчених слів
    const learnedWords = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
    const wordsCount = learnedWords.length;
    
    // Зберігаємо прогрес
    ProgressTracker.markTextCompleted(level, category, textId, finalScore, wordsCount);
    
    console.log('[+] Progress saved:', {level, category, textId, score: finalScore, words: wordsCount});
    
    // Показати вітання
    showCompletionCelebration(finalScore);
}

// Вітання після завершення
function showCompletionCelebration(score) {
    const progress = ProgressTracker.get();
    const totalTexts = progress.stats.totalTexts;
    const streak = progress.stats.currentStreak;
    
    let message = `🎉 Вітаємо! Текст завершено!\n\n`;
    message += `📊 Результат: ${score}%\n`;
    message += `📚 Всього текстів пройдено: ${totalTexts}\n`;
    message += `🔥 Серія днів: ${streak}`;
    
    // Перевірка на нові досягнення
    if (totalTexts === 1) {
        message += `\n\n🥇 НОВЕ ДОСЯГНЕННЯ: Перший текст!`;
    }
    if (score === 100) {
        message += `\n\n💯 НОВЕ ДОСЯГНЕННЯ: Ідеальний результат!`;
    }
    if (streak === 7) {
        message += `\n\n🔥 НОВЕ ДОСЯГНЕННЯ: Тижнева серія!`;
    }
    
    alert(message);
}

console.log('[OK] Progress integration loaded');
