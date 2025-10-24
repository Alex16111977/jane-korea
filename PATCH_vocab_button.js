// === PATCH для reading-content.html ===
// Додати ЦІ ФУНКЦІЇ в <script> секцію reading-content.html

// ФУНКЦІЯ 1: Відкриття модалки вивчення слів
function toggleVocabLearning() {
    const section = document.getElementById('vocabLearningSection');
    vocabLearningVisible = !vocabLearningVisible;
    
    if (vocabLearningVisible) {
        // Скрити інші секції
        document.getElementById('translationSection').classList.remove('show');
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('vocabSection').style.display = 'none';
        
        // Показати модалку вибору режиму
        section.style.display = 'block';
        
        // Завантажити слова
        vocabLearning.loadLearnedWords();
        
        // Скролити до секції
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        section.style.display = 'none';
    }
}

// ФУНКЦІЯ 2: Оновлення обробки кліку на слово (ЗАМІНИТИ ІСНУЮЧУ!)
// Знайдіть в коді де додається обробник події на .korean-word і ЗАМІНІТЬ на це:

document.querySelectorAll('.korean-word').forEach(word => {
    word.addEventListener('click', function() {
        const translation = this.dataset.translation;
        const pronunciation = this.dataset.pronunciation;
        const korean = this.textContent;
        
        // Показати переклад в header
        document.getElementById('translationHeader').textContent = 
            `${korean} = ${translation} [${pronunciation}]`;
        
        // Зберегти слово
        const wordData = {
            korean: korean,
            translation: translation,
            pronunciation: pronunciation
        };
        
        // Перевірити чи слово вже є
        const index = learnedWords.findIndex(w => w.korean === korean);
        if (index === -1) {
            learnedWords.push(wordData);
            localStorage.setItem('koreanLearnedWords', JSON.stringify(learnedWords));
        }
        
        // Візуальний ефект
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
        
        // *** КРИТИЧНО: Оновити кнопку "Учить слова" ***
        updateVocabButton();
    });
});

// ФУНКЦІЯ 3: Приховати кнопку на початку (ДОДАТИ В DOMContentLoaded)
// Знайдіть document.addEventListener('DOMContentLoaded', ...) і додайте:

document.addEventListener('DOMContentLoaded', function() {
    // ... існуючий код ...
    
    // Приховати кнопку якщо немає слів
    updateVocabButton();
    
    // ... решта існуючого коду ...
});

// ІНСТРУКЦІЯ ПО ВПРОВАДЖЕННЮ:
// 1. Відкрити reading-content.html
// 2. Знайти секцію <script>
// 3. Додати функцію toggleVocabLearning() 
// 4. ЗАМІНИТИ обробник кліку на korean-word на новий з updateVocabButton()
// 5. В DOMContentLoaded додати виклик updateVocabButton()
