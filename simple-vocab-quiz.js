// Простой словарный квиз BLACKPINK
function startVocabQuiz() {
    const words = [
        {korean: '언니', meaning: 'старшая сестра', member: 'Jisoo'},
        {korean: '예쁘다', meaning: 'красивая', member: 'Jisoo'},
        {korean: '솔로', meaning: 'соло', member: 'Jennie'},
        {korean: '래퍼', meaning: 'рэпер', member: 'Jennie'},
        {korean: '목소리', meaning: 'голос', member: 'Rosé'},
        {korean: '기타', meaning: 'гитара', member: 'Rosé'},
        {korean: '춤', meaning: 'танец', member: 'Lisa'},
        {korean: '막내', meaning: 'самая младшая', member: 'Lisa'}
    ];
    
    let current = 0;
    let score = 0;
    let quizActive = true;
    
    function showWord() {
        if (!quizActive || current >= words.length) {
            if (quizActive) {
                alert(`🎉 Квиз завершен! Ваш счет: ${score}/${words.length} (${Math.round(score/words.length*100)}%)`);
            }
            return;
        }
        
        const word = words[current];
        const answer = prompt(`📚 Корейский словарь BLACKPINK\n\nКак переводится "${word.korean}"?\n\nУчастница: ${word.member}\nВопрос: ${current + 1}/${words.length}\nСчет: ${score}\n\n(Нажмите Отмена для выхода)`);
        
        // Если нажали Отмена - закрываем квиз
        if (answer === null) {
            quizActive = false;
            alert('❌ Квиз прерван. Увидимся в следующий раз!');
            return;
        }
        
        if (answer && answer.toLowerCase().includes(word.meaning.toLowerCase())) {
            alert('✅ Правильно! +1 балл');
            score++;
        } else {
            alert(`❌ Неправильно. Правильный ответ: "${word.meaning}"`);
        }
        
        current++;
        setTimeout(showWord, 500);
    }
    
    // Показываем начальное сообщение
    const start = confirm('📚 Словарный квиз BLACKPINK\n\nГотов изучать корейские слова от участниц BLACKPINK?\n\n8 слов ждут тебя!\n\nНажми ОК для начала или Отмена для выхода');
    
    if (start) {
        showWord();
    } else {
        alert('👋 Возвращайся, когда будешь готов изучать корейский!');
    }
}

// Добавляем функцию в глобальный контекст
window.startVocabQuiz = startVocabQuiz;
