/* ========================================
   READY TO USE - Скопіюй в консоль браузера (F12)
   ======================================== */

// ШАГ 1: Додати стилі
const style = document.createElement('style');
style.textContent = `
.translation-header {
    gap: 15px !important;
    flex-wrap: wrap !important;
}

.learn-word-btn {
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: none;
}

.learn-word-btn:hover {
    background: #45a049;
    transform: scale(1.05);
}

.learn-word-btn.added {
    background: #666;
    cursor: not-allowed;
}
`;
document.head.appendChild(style);

// ШАГ 2: Змінити HTML header
const header = document.getElementById('translationHeader');
if (header) {
    const originalText = header.textContent;
    header.innerHTML = `
        <span id="translationText">${originalText}</span>
        <button class="learn-word-btn" id="learnWordBtn">+ Учить</button>
    `;
}

// ШАГ 3: Поточне слово
window.currentWordToLearn = null;

// ШАГ 4: Функція додавання слова
window.addWordToLearn = function() {
    if (!window.currentWordToLearn) return;
    
    const btn = document.getElementById('learnWordBtn');
    const learnedWords = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
    
    const index = learnedWords.findIndex(w => w.korean === window.currentWordToLearn.korean);
    
    if (index === -1) {
        learnedWords.push(window.currentWordToLearn);
        localStorage.setItem('koreanLearnedWords', JSON.stringify(learnedWords));
        
        btn.textContent = '✓ Додано';
        btn.classList.add('added');
        
        // Оновити кнопку внизу
        if (typeof updateVocabButton === 'function') {
            updateVocabButton();
        }
        
        setTimeout(() => {
            btn.textContent = '+ Учить';
            btn.classList.remove('added');
        }, 2000);
    } else {
        btn.textContent = '✓ Вже додано';
        btn.classList.add('added');
    }
};

// ШАГ 5: Додати обробник кліку на кнопку
document.getElementById('learnWordBtn').addEventListener('click', window.addWordToLearn);

// ШАГ 6: Змінити обробник кліку на слова
document.querySelectorAll('.korean-word').forEach(word => {
    // Видалити старі обробники
    const newWord = word.cloneNode(true);
    word.parentNode.replaceChild(newWord, word);
    
    // Додати новий обробник
    newWord.addEventListener('click', function() {
        const translation = this.dataset.translation;
        const pronunciation = this.dataset.pronunciation;
        const korean = this.textContent;
        
        // Показати переклад
        const translationText = document.getElementById('translationText');
        if (translationText) {
            translationText.textContent = `${korean} = ${translation} [${pronunciation}]`;
        }
        
        // Зберегти поточне слово
        window.currentWordToLearn = {
            korean: korean,
            translation: translation,
            pronunciation: pronunciation
        };
        
        // Показати кнопку "Учить"
        const learnBtn = document.getElementById('learnWordBtn');
        if (learnBtn) {
            learnBtn.style.display = 'inline-block';
            
            // Перевірити чи слово вже додане
            const learnedWords = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
            const index = learnedWords.findIndex(w => w.korean === korean);
            
            if (index !== -1) {
                learnBtn.textContent = '✓ Вже додано';
                learnBtn.classList.add('added');
            } else {
                learnBtn.textContent = '+ Учить';
                learnBtn.classList.remove('added');
            }
        }
        
        // Візуальний ефект
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

console.log('✅ Патч застосовано! Тепер:');
console.log('1. Клікай на слово → з\'явиться кнопка "+ Учить"');
console.log('2. Натискай "+ Учить" → слово додається до списку');
console.log('3. Кнопка "Учить слова" внизу → показує вибрані слова');
