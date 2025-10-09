// Квиз в стиле Duolingo для BLACKPINK
function startVocabQuiz() {
    const vocabulary = [
        {korean: '언니', pronunciation: 'онни', meaning: 'старшая сестра', member: 'Jisoo'},
        {korean: '예쁘다', pronunciation: 'еппыдда', meaning: 'красивая', member: 'Jisoo'},
        {korean: '배우', pronunciation: 'пеу', meaning: 'актер', member: 'Jisoo'},
        {korean: '솔로', pronunciation: 'солло', meaning: 'соло', member: 'Jennie'},
        {korean: '래퍼', pronunciation: 'рэпо', meaning: 'рэпер', member: 'Jennie'},
        {korean: '목소리', pronunciation: 'моксори', meaning: 'голос', member: 'Rosé'},
        {korean: '기타', pronunciation: 'гита', meaning: 'гитара', member: 'Rosé'},
        {korean: '춤', pronunciation: 'чум', meaning: 'танец', member: 'Lisa'},
        {korean: '막내', pronunciation: 'макнэ', meaning: 'самая младшая', member: 'Lisa'},
        {korean: '에너지', pronunciation: 'энодзи', meaning: 'энергия', member: 'Lisa'}
    ];
    
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;
    let currentWord = null;
    
    // Перемешиваем слова
    const shuffledWords = vocabulary.sort(() => Math.random() - 0.5).slice(0, 6);
    
    function createDuolingoQuiz() {
        const quizHTML = `
            <div id="duolingoQuiz" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #58cc02, #89e219); z-index: 10000; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <!-- Шапка с прогресс-баром -->
                <div style="background: white; padding: 15px 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: space-between;">
                    <button onclick="closeDuolingoQuiz()" style="background: none; border: none; font-size: 24px; color: #afafaf; cursor: pointer; padding: 5px;">✕</button>
                    <div style="flex: 1; margin: 0 20px;">
                        <div id="progressBar" style="background: #e5e5e5; height: 16px; border-radius: 8px; overflow: hidden;">
                            <div id="progressFill" style="background: #58cc02; height: 100%; width: 0%; transition: width 0.3s ease; border-radius: 8px;"></div>
                        </div>
                    </div>
                    <div style="color: #777; font-weight: bold;" id="questionCounter">1/${shuffledWords.length}</div>
                </div>
                
                <!-- Основное содержимое -->
                <div style="display: flex; flex-direction: column; height: calc(100vh - 70px); max-width: 600px; margin: 0 auto; padding: 20px;">
                    <!-- Карточка с вопросом -->
                    <div style="background: white; border-radius: 20px; padding: 30px; margin-bottom: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); flex: 1; display: flex; flex-direction: column; justify-content: center; text-align: center;">
                        <h2 style="color: #3c3c3c; margin-bottom: 10px; font-size: 22px;">Переведите это слово:</h2>
                        
                        <div id="koreanWord" style="font-size: 4em; color: #58cc02; font-weight: bold; margin: 20px 0;"></div>
                        <div id="pronunciation" style="font-size: 1.4em; color: #afafaf; font-style: italic; margin-bottom: 10px;"></div>
                        <div id="memberInfo" style="font-size: 1.1em; color: #777; margin-bottom: 30px;"></div>
                        
                        <button onclick="playDuoSound()" style="background: #1cb0f6; color: white; border: none; padding: 12px 20px; border-radius: 12px; cursor: pointer; font-size: 16px; margin: 10px auto; display: block;">
                            🔊 Прослушать
                        </button>
                    </div>
                    
                    <!-- Варианты ответов -->
                    <div id="answersContainer" style="margin-bottom: 20px;"></div>
                    
                    <!-- Кнопка проверки -->
                    <button id="checkButton" onclick="checkDuoAnswer()" disabled 
                            style="background: #e5e5e5; color: #afafaf; border: none; padding: 16px; border-radius: 12px; font-size: 16px; font-weight: bold; cursor: not-allowed; width: 100%; margin-bottom: 20px;">
                        Проверить
                    </button>
                    
                    <!-- Результат ответа -->
                    <div id="resultMessage" style="text-align: center; font-size: 18px; font-weight: bold; min-height: 25px;"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', quizHTML);
        showDuoQuestion();
    }
    
    function showDuoQuestion() {
        if (currentQuestion >= shuffledWords.length) {
            showDuoResults();
            return;
        }
        
        currentWord = shuffledWords[currentQuestion];
        selectedAnswer = null;
        
        // Обновляем прогресс
        const progress = ((currentQuestion) / shuffledWords.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('questionCounter').textContent = `${currentQuestion + 1}/${shuffledWords.length}`;
        
        // Обновляем вопрос
        document.getElementById('koreanWord').textContent = currentWord.korean;
        document.getElementById('pronunciation').textContent = '[' + currentWord.pronunciation + ']';
        document.getElementById('memberInfo').textContent = '🎤 ' + currentWord.member + ' - BLACKPINK';
        
        // Создаём варианты ответов
        const wrongAnswers = vocabulary
            .filter(w => w.meaning !== currentWord.meaning)
            .map(w => w.meaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        const allAnswers = [currentWord.meaning, ...wrongAnswers]
            .sort(() => Math.random() - 0.5);
        
        const answersContainer = document.getElementById('answersContainer');
        answersContainer.innerHTML = '';
        
        allAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.style.cssText = 'background: white; border: 2px solid #e5e5e5; padding: 16px; margin: 8px 0; border-radius: 12px; font-size: 16px; cursor: pointer; width: 100%; text-align: left; transition: all 0.2s;';
            
            button.onclick = () => selectDuoAnswer(button, answer);
            
            button.onmouseover = () => {
                if (!button.classList.contains('selected')) {
                    button.style.borderColor = '#b7b7b7';
                    button.style.backgroundColor = '#f7f7f7';
                }
            };
            
            button.onmouseout = () => {
                if (!button.classList.contains('selected')) {
                    button.style.borderColor = '#e5e5e5';
                    button.style.backgroundColor = 'white';
                }
            };
            
            answersContainer.appendChild(button);
        });
        
        // Обнуляем кнопку проверки
        const checkBtn = document.getElementById('checkButton');
        checkBtn.disabled = true;
        checkBtn.style.background = '#e5e5e5';
        checkBtn.style.color = '#afafaf';
        checkBtn.style.cursor = 'not-allowed';
        checkBtn.textContent = 'Проверить';
        checkBtn.onclick = checkDuoAnswer;
        
        document.getElementById('resultMessage').innerHTML = '';
    }
    
    function selectDuoAnswer(button, answer) {
        // Убираем выделение со всех кнопок
        document.querySelectorAll('#answersContainer button').forEach(btn => {
            btn.classList.remove('selected');
            btn.style.borderColor = '#e5e5e5';
            btn.style.backgroundColor = 'white';
        });
        
        // Выделяем выбранный
        button.classList.add('selected');
        button.style.borderColor = '#1cb0f6';
        button.style.backgroundColor = '#ddf4ff';
        
        selectedAnswer = answer;
        
        // Активируем кнопку проверки
        const checkBtn = document.getElementById('checkButton');
        checkBtn.disabled = false;
        checkBtn.style.background = '#58cc02';
        checkBtn.style.color = 'white';
        checkBtn.style.cursor = 'pointer';
    }
    
    function checkDuoAnswer() {
        if (!selectedAnswer) return;
        
        const isCorrect = selectedAnswer === currentWord.meaning;
        const resultDiv = document.getElementById('resultMessage');
        const checkBtn = document.getElementById('checkButton');
        
        if (isCorrect) {
            score++;
            resultDiv.innerHTML = '✅ Правильно!';
            resultDiv.style.color = '#58cc02';
            
            // Подсвечиваем правильный ответ
            document.querySelectorAll('#answersContainer button').forEach(btn => {
                if (btn.textContent === currentWord.meaning) {
                    btn.style.borderColor = '#58cc02';
                    btn.style.backgroundColor = '#d7ffb8';
                }
            });
        } else {
            resultDiv.innerHTML = '❌ Неправильно. Правильный ответ: ' + currentWord.meaning;
            resultDiv.style.color = '#ff4b4b';
            
            // Подсвечиваем неправильный и правильный
            document.querySelectorAll('#answersContainer button').forEach(btn => {
                if (btn.textContent === selectedAnswer) {
                    btn.style.borderColor = '#ff4b4b';
                    btn.style.backgroundColor = '#ffdfe0';
                } else if (btn.textContent === currentWord.meaning) {
                    btn.style.borderColor = '#58cc02';
                    btn.style.backgroundColor = '#d7ffb8';
                }
            });
        }
        
        // Меняем кнопку на "Продолжить"
        checkBtn.textContent = 'Продолжить';
        checkBtn.onclick = nextDuoQuestion;
        checkBtn.style.background = '#1cb0f6';
    }
    
    function nextDuoQuestion() {
        currentQuestion++;
        showDuoQuestion();
    }
    
    function showDuoResults() {
        const percentage = Math.round((score / shuffledWords.length) * 100);
        let emoji = '🎉';
        let message = 'Отличная работа!';
        
        if (percentage >= 80) {
            emoji = '🏆';
            message = 'Прекрасный результат!';
        } else if (percentage >= 60) {
            emoji = '⭐';
            message = 'Хорошая работа!';
        } else {
            emoji = '💪';
            message = 'Продолжай стараться!';
        }
        
        const resultsHTML = `
            <div style="text-align: center; color: white; padding: 40px;">
                <div style="font-size: 6em; margin-bottom: 20px;">${emoji}</div>
                <h1 style="font-size: 2.5em; margin-bottom: 10px;">${message}</h1>
                <div style="font-size: 1.8em; margin-bottom: 20px;">${score}/${shuffledWords.length} правильных</div>
                <div style="font-size: 1.5em; margin-bottom: 40px;">${percentage}%</div>
                
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="document.getElementById('duolingoQuiz').remove(); startVocabQuiz();" 
                            style="background: white; color: #58cc02; border: none; padding: 16px 24px; border-radius: 12px; font-size: 16px; font-weight: bold; cursor: pointer;">
                        🔄 Повторить
                    </button>
                    <button onclick="document.getElementById('duolingoQuiz').remove();" 
                            style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 16px 24px; border-radius: 12px; font-size: 16px; font-weight: bold; cursor: pointer;">
                        ✅ Завершить
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('duolingoQuiz').innerHTML = resultsHTML;
    }
    
    window.selectDuoAnswer = selectDuoAnswer;
    window.checkDuoAnswer = checkDuoAnswer;
    window.nextDuoQuestion = nextDuoQuestion;
    
    window.playDuoSound = function() {
        if (currentWord && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentWord.korean);
            utterance.lang = 'ko-KR';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    };
    
    window.closeDuolingoQuiz = function() {
        document.getElementById('duolingoQuiz').remove();
    };
    
    // Запускаем квиз
    createDuolingoQuiz();
}

// Добавляем функцию в глобальный контекст
window.startVocabQuiz = startVocabQuiz;
