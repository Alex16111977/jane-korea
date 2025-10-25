// ============================================
// СИСТЕМА ИЗУЧЕНИЯ СЛОВ - VOCABULARY LEARNING
// Три режима: Тест, Карточки, Соединение
// Использует только слова, на которые КЛИКНУЛ пользователь
// ============================================

class VocabularyLearning {
    constructor() {
        this.currentWords = [];
        this.currentMode = null;
        this.score = 0;
        this.questionIndex = 0;
        this.selectedPairs = [];
        this.currentTextId = null;
    }

    // Загрузить слова ИЗ LOCALSTORAGE (на которые кликнул пользователь)
    loadLearnedWords(filterTextId = this.currentTextId) {
        const learnedWords = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');

        if (learnedWords.length === 0) {
            return [];
        }

        const filtered = learnedWords.filter(word => {
            if (!word || !word.korean) {
                return false;
            }

            if (!filterTextId) {
                return !word.textId;
            }

            return word.textId === filterTextId;
        });

        if (filtered.length === 0) {
            this.currentWords = [];
            return [];
        }

        // Удалить дубликаты
        const uniqueWords = [];
        const seen = new Set();

        for (const word of filtered) {
            const key = `${word.textId || 'none'}::${word.korean}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueWords.push(word);
            }
        }

        this.currentWords = uniqueWords;
        return uniqueWords;
    }

    // Для совместимости с обработчиками на странице чтения
    loadWordsFromText(textId = null) {
        if (textId === null || typeof textId === 'undefined') {
            textId = window.currentStoryId || window.selectedTextId || null;
        }

        this.currentTextId = textId;
        return this.loadLearnedWords(textId);
    }

    // Перемешать массив
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Получить случайные неправильные ответы
    getRandomWrongAnswers(correctTranslation, count = 3) {
        const wrong = this.currentWords
            .filter(w => w.translation !== correctTranslation)
            .map(w => w.translation);
        
        return this.shuffle(wrong).slice(0, count);
    }

    // РЕЖИМ 1: ТЕСТ
    startTestMode() {
        this.loadLearnedWords(this.currentTextId);

        if (this.currentWords.length === 0) {
            this.showNoWordsMessage();
            return;
        }
        
        if (this.currentWords.length < 4) {
            this.showNotEnoughWordsMessage();
            return;
        }
        
        this.currentMode = 'test';
        this.score = 0;
        this.questionIndex = 0;
        
        const words = this.shuffle([...this.currentWords]).slice(0, Math.min(10, this.currentWords.length));
        
        this.renderTestMode(words);
    }

    renderTestMode(words) {
        const container = document.getElementById('vocabLearningContent');
        
        if (this.questionIndex >= words.length) {
            this.showTestResults(words.length);
            return;
        }
        
        const currentWord = words[this.questionIndex];
        const wrongAnswers = this.getRandomWrongAnswers(currentWord.translation, 3);
        const allOptions = this.shuffle([currentWord.translation, ...wrongAnswers]);
        
        let html = `
            <div class="vocab-test-mode">
                <div class="vocab-progress">
                    Вопрос ${this.questionIndex + 1} из ${words.length}
                </div>
                <div class="vocab-question-card">
                    <div class="vocab-korean-question">${currentWord.korean}</div>
                    <div class="vocab-pronunciation">${currentWord.pronunciation || ''}</div>
                    <div class="vocab-options">
                        ${allOptions.map((opt, i) => `
                            <button class="vocab-option" data-answer="${opt}" data-correct="${currentWord.translation}">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                    <div class="vocab-result" id="vocabTestResult"></div>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Добавить обработчики событий
        document.querySelectorAll('.vocab-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleTestAnswer(e.target, words);
            });
        });
    }

    handleTestAnswer(button, words) {
        const selectedAnswer = button.dataset.answer;
        const correctAnswer = button.dataset.correct;
        const isCorrect = selectedAnswer === correctAnswer;
        
        // Отключить все кнопки
        document.querySelectorAll('.vocab-option').forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        
        // Показать правильный/неправильный ответ
        if (isCorrect) {
            button.classList.add('vocab-correct');
            this.score++;
            document.getElementById('vocabTestResult').innerHTML = 
                '<span style="color: #4caf50;">✓ Правильно!</span>';
        } else {
            button.classList.add('vocab-incorrect');
            document.querySelectorAll('.vocab-option').forEach(btn => {
                if (btn.dataset.answer === correctAnswer) {
                    btn.classList.add('vocab-correct');
                }
            });
            document.getElementById('vocabTestResult').innerHTML = 
                '<span style="color: #f44336;">✗ Неправильно! Правильный ответ: ' + correctAnswer + '</span>';
        }
        
        // Следующий вопрос через 2 секунды
        setTimeout(() => {
            this.questionIndex++;
            this.renderTestMode(words);
        }, 2000);
    }

    showTestResults(totalQuestions) {
        const container = document.getElementById('vocabLearningContent');
        const percentage = Math.round((this.score / totalQuestions) * 100);
        
        let emoji = '😔';
        let message = 'Нужно ещё поработать';
        let color = '#f44336';
        
        if (percentage >= 90) {
            emoji = '🎉';
            message = 'Отлично!';
            color = '#4caf50';
        } else if (percentage >= 70) {
            emoji = '😊';
            message = 'Хорошо!';
            color = '#2196f3';
        } else if (percentage >= 50) {
            emoji = '😐';
            message = 'Неплохо';
            color = '#ff9800';
        }
        
        container.innerHTML = `
            <div class="vocab-test-results">
                <div style="font-size: 72px; margin-bottom: 20px;">${emoji}</div>
                <div style="font-size: 48px; color: ${color}; font-weight: bold; margin-bottom: 15px;">
                    ${percentage}%
                </div>
                <div style="font-size: 24px; color: ${color}; margin-bottom: 30px;">
                    ${message}
                </div>
                <div style="font-size: 18px; color: #666; margin-bottom: 30px;">
                    Правильных ответов: ${this.score} из ${totalQuestions}
                </div>
                <button class="vocab-mode-btn" onclick="vocabLearning.startTestMode()">
                    🔄 Попробовать ещё раз
                </button>
            </div>
        `;
    }

    // РЕЖИМ 2: КАРТОЧКИ
    startCardsMode() {
        this.loadLearnedWords(this.currentTextId);
        
        if (this.currentWords.length === 0) {
            this.showNoWordsMessage();
            return;
        }
        
        this.currentMode = 'cards';
        this.questionIndex = 0;
        
        const words = this.shuffle([...this.currentWords]);
        this.renderCardsMode(words);
    }

    renderCardsMode(words) {
        const container = document.getElementById('vocabLearningContent');
        
        if (this.questionIndex >= words.length) {
            container.innerHTML = `
                <div class="vocab-cards-complete">
                    <div style="font-size: 48px; margin-bottom: 20px;">🎊</div>
                    <div style="font-size: 24px; font-weight: bold; margin-bottom: 15px;">
                        Все карточки просмотрены!
                    </div>
                    <div style="font-size: 16px; color: #666; margin-bottom: 30px;">
                        Вы просмотрели ${words.length} слов
                    </div>
                    <button class="vocab-mode-btn" onclick="vocabLearning.startCardsMode()">
                        🔄 Начать сначала
                    </button>
                </div>
            `;
            return;
        }
        
        const currentWord = words[this.questionIndex];
        
        container.innerHTML = `
            <div class="vocab-cards-mode">
                <div class="vocab-progress">
                    Карточка ${this.questionIndex + 1} из ${words.length}
                </div>
                <div class="vocab-flashcard" id="flashcard" onclick="vocabLearning.flipCard()">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <div class="card-korean">${currentWord.korean}</div>
                            <div class="card-hint">Нажми, чтобы перевернуть</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="card-translation">${currentWord.translation}</div>
                            <div class="card-pronunciation">${currentWord.pronunciation || ''}</div>
                        </div>
                    </div>
                </div>
                <div class="vocab-card-controls">
                    <button class="vocab-card-btn vocab-prev" onclick="vocabLearning.previousCard(${JSON.stringify(words).replace(/"/g, '&quot;')})" ${this.questionIndex === 0 ? 'disabled' : ''}>
                        ← Предыдущая
                    </button>
                    <button class="vocab-card-btn vocab-next" onclick="vocabLearning.nextCard(${JSON.stringify(words).replace(/"/g, '&quot;')})">
                        Следующая →
                    </button>
                </div>
            </div>
        `;
    }

    flipCard() {
        const card = document.getElementById('flashcard');
        card.classList.toggle('flipped');
    }

    nextCard(words) {
        this.questionIndex++;
        this.renderCardsMode(words);
    }

    previousCard(words) {
        if (this.questionIndex > 0) {
            this.questionIndex--;
            this.renderCardsMode(words);
        }
    }

    // РЕЖИМ 3: СОЕДИНЕНИЕ
    startMatchMode() {
        this.loadLearnedWords(this.currentTextId);
        
        if (this.currentWords.length === 0) {
            this.showNoWordsMessage();
            return;
        }
        
        if (this.currentWords.length < 3) {
            this.showNotEnoughWordsMessage();
            return;
        }
        
        this.currentMode = 'match';
        this.selectedPairs = [];
        this.score = 0;
        
        const words = this.shuffle([...this.currentWords]).slice(0, Math.min(6, this.currentWords.length));
        this.renderMatchMode(words);
    }

    renderMatchMode(words) {
        const container = document.getElementById('vocabLearningContent');
        
        const shuffledTranslations = this.shuffle(words.map(w => w.translation));
        
        container.innerHTML = `
            <div class="vocab-match-mode">
                <div class="vocab-match-instructions">
                    Соедини корейские слова с переводами
                </div>
                <div class="vocab-match-score">
                    Правильно: <span id="matchScore">0</span> / ${words.length}
                </div>
                <div class="vocab-match-container">
                    <div class="vocab-match-column vocab-korean-column">
                        ${words.map((word, i) => `
                            <div class="vocab-match-item vocab-korean-item" data-index="${i}" data-korean="${word.korean}">
                                ${word.korean}
                            </div>
                        `).join('')}
                    </div>
                    <div class="vocab-match-column vocab-translation-column">
                        ${shuffledTranslations.map((trans, i) => `
                            <div class="vocab-match-item vocab-translation-item" data-translation="${trans}">
                                ${trans}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Добавить обработчики событий
        this.setupMatchEventListeners(words);
    }

    setupMatchEventListeners(words) {
        let selectedKorean = null;
        let selectedTranslation = null;
        
        document.querySelectorAll('.vocab-korean-item').forEach(item => {
            item.addEventListener('click', () => {
                // Снять предыдущее выделение
                document.querySelectorAll('.vocab-korean-item').forEach(i => i.classList.remove('vocab-selected'));
                
                // Выделить текущий
                item.classList.add('vocab-selected');
                selectedKorean = {
                    element: item,
                    korean: item.dataset.korean,
                    index: item.dataset.index
                };
                
                // Если оба выбраны, проверить
                if (selectedKorean && selectedTranslation) {
                    this.checkMatch(words, selectedKorean, selectedTranslation);
                    selectedKorean = null;
                    selectedTranslation = null;
                }
            });
        });
        
        document.querySelectorAll('.vocab-translation-item').forEach(item => {
            item.addEventListener('click', () => {
                // Снять предыдущее выделение
                document.querySelectorAll('.vocab-translation-item').forEach(i => i.classList.remove('vocab-selected'));
                
                // Выделить текущий
                item.classList.add('vocab-selected');
                selectedTranslation = {
                    element: item,
                    translation: item.dataset.translation
                };
                
                // Если оба выбраны, проверить
                if (selectedKorean && selectedTranslation) {
                    this.checkMatch(words, selectedKorean, selectedTranslation);
                    selectedKorean = null;
                    selectedTranslation = null;
                }
            });
        });
    }

    checkMatch(words, korean, translation) {
        const correctWord = words.find(w => w.korean === korean.korean);
        
        if (correctWord && correctWord.translation === translation.translation) {
            // Правильно!
            korean.element.classList.add('vocab-matched');
            translation.element.classList.add('vocab-matched');
            korean.element.classList.remove('vocab-selected');
            translation.element.classList.remove('vocab-selected');
            
            this.score++;
            document.getElementById('matchScore').textContent = this.score;
            
            // Если все соединены
            if (this.score === words.length) {
                setTimeout(() => {
                    this.showMatchComplete();
                }, 500);
            }
        } else {
            // Неправильно!
            korean.element.classList.add('vocab-wrong');
            translation.element.classList.add('vocab-wrong');
            
            setTimeout(() => {
                korean.element.classList.remove('vocab-selected', 'vocab-wrong');
                translation.element.classList.remove('vocab-selected', 'vocab-wrong');
            }, 800);
        }
    }

    showMatchComplete() {
        const container = document.getElementById('vocabLearningContent');
        container.innerHTML = `
            <div class="vocab-match-complete">
                <div style="font-size: 72px; margin-bottom: 20px;">🎉</div>
                <div style="font-size: 32px; font-weight: bold; color: #4caf50; margin-bottom: 20px;">
                    Поздравляем!
                </div>
                <div style="font-size: 20px; color: #666; margin-bottom: 30px;">
                    Вы успешно соединили все слова!
                </div>
                <button class="vocab-mode-btn" onclick="vocabLearning.startMatchMode()">
                    🔄 Попробовать ещё раз
                </button>
            </div>
        `;
    }

    // Показать сообщение об отсутствии слов
    showNoWordsMessage() {
        const container = document.getElementById('vocabLearningContent');
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666;">
                <div style="font-size: 64px; margin-bottom: 20px;">📚</div>
                <div style="font-size: 24px; font-weight: 600; margin-bottom: 15px;">
                    Нет изученных слов
                </div>
                <div style="font-size: 16px; line-height: 1.6; max-width: 400px; margin: 0 auto;">
                    Нажимайте на слова в тексте и используйте кнопку «Учить слово», чтобы добавить их в список для изучения.
                    После того как нажмёте на несколько слов, вернитесь сюда и выберите режим обучения!
                </div>
            </div>
        `;
    }

    // Показать сообщение о недостаточном количестве слов
    showNotEnoughWordsMessage() {
        const container = document.getElementById('vocabLearningContent');
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666;">
                <div style="font-size: 64px; margin-bottom: 20px;">📖</div>
                <div style="font-size: 24px; font-weight: 600; margin-bottom: 15px;">
                    Недостаточно слов
                </div>
                <div style="font-size: 16px; line-height: 1.6; max-width: 400px; margin: 0 auto;">
                    Для этого режима нужно как минимум 4 слова.
                    Нажмите на больше слов в тексте, чтобы начать обучение!
                </div>
            </div>
        `;
    }
}

// Создать глобальный экземпляр
const vocabLearning = new VocabularyLearning();

// === ФУНКЦИЯ ОБНОВЛЕНИЯ КНОПКИ "УЧИТЬ СЛОВА" ===
function updateVocabButton() {
    const vocabBtn = document.getElementById('vocabBtn');
    if (!vocabBtn) {
        return;
    }

    const learnedWords = JSON.parse(localStorage.getItem('koreanLearnedWords') || '[]');
    const currentTextId = window.currentStoryId || window.selectedTextId || null;

    const wordsForText = learnedWords.filter(word => word && word.textId === currentTextId);

    if (wordsForText.length > 0) {
        vocabBtn.style.display = 'flex';
        vocabBtn.innerHTML = '<span>📚</span> Учить слова';
    } else {
        vocabBtn.style.display = 'none';
        vocabBtn.innerHTML = '<span>📚</span> Учить слова';
    }
}

// Вызывать при загрузке страницы
document.addEventListener('DOMContentLoaded', updateVocabButton);

// Экспорт для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VocabularyLearning;
}