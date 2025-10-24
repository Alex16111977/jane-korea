# ІНСТРУКЦІЯ ПО ІНТЕГРАЦІЇ КНОПКИ "УЧИТЬ СЛОВА"
Версія: 1.0 | Дата: 16.10.2025

## ЩО ЗРОБЛЕНО

✅ Створено `vocab-learning.js` - система вивчення слів з 3 режимами
✅ Створено `vocab-learning.css` - стилі для модалки
✅ Створено `PATCH_vocab_button.js` - патч з інструкціями

## ЯК ПРАЦЮЄ

1. **Користувач клікає на слова в тексті** → слова зберігаються в localStorage
2. **Кнопка "Учить слова" з'являється** коли є хоч 1 вивчене слово
3. **Натискання кнопки** → відкривається модалка з вибором режиму:
   - 📝 **Тест** - вибери правильний переклад
   - 🎴 **Карточки** - клікай щоб перегорнути
   - 🔗 **З'єднання** - з'єднай корейські слова з перекладами

## КРОКИ ІНТЕГРАЦІЇ

### Крок 1: Перевірити файли

Переконайтеся що ці файли існують:
```
C:\Claude\jane-korea\vocab-learning.js    ← Система вивчення
C:\Claude\jane-korea\vocab-learning.css   ← Стилі модалки
C:\Claude\jane-korea\reading-content.html ← Основний файл (треба патчити)
```

### Крок 2: Оновити reading-content.html

#### 2.1 Додати у `<head>`:
Після рядка:
```html
<!-- Progress Tracking -->
<script src="js/progress-tracker.js"></script>
```

Вже є:
```html
<!-- Vocabulary Learning Styles -->
<link rel="stylesheet" href="vocab-learning.css">
```
✅ Це вже є - нічого не робити!

#### 2.2 В HTML є секція з модалкою (вже є):
```html
<!-- VOCAB LEARNING SECTION -->
<div class="vocab-learning-section" id="vocabLearningSection" style="display: none;">
    ...
</div>
```
✅ Вже є, але **ПОТРІБНО ВИПРАВИТИ** текст всередині:

**ЗНАЙТИ:**
```html
<div class="vocab-learning-title">
    📚 Вивчення слів з тексту
</div>
```

**ЗАМІНИТИ НА:**
```html
<div class="vocab-learning-title">
    📚 Изучение слов
</div>
```

**ЗНАЙТИ всі `onclick` в кнопках режимів:**
```html
<button class="vocab-mode-btn" onclick="vocabLearning.loadWordsFromText(); vocabLearning.startTestMode();">
    <div class="vocab-mode-icon">✏️</div>
    <div>Тест</div>
    <div style="font-size: 12px; opacity: 0.8;">Вибери переклад</div>
</button>
```

**ЗАМІНИТИ НА (для ВСІХ ТРЬОХ кнопок):**
```html
<button class="vocab-mode-btn" onclick="vocabLearning.startTestMode()">
    <div class="vocab-mode-icon">✏️</div>
    <div>Тест</div>
    <div style="font-size: 12px; opacity: 0.8;">Выбери перевод</div>
</button>

<button class="vocab-mode-btn" onclick="vocabLearning.startCardsMode()">
    <div class="vocab-mode-icon">🎴</div>
    <div>Карточки</div>
    <div style="font-size: 12px; opacity: 0.8;">Кликай для перевода</div>
</button>

<button class="vocab-mode-btn" onclick="vocabLearning.startMatchMode()">
    <div class="vocab-mode-icon">🔗</div>
    <div>Соединение</div>
    <div style="font-size: 12px; opacity: 0.8;">Соедини слова</div>
</button>
```

**ЗНАЙТИ повідомлення:**
```html
<div style="text-align: center; color: #666; padding: 60px 20px;">
    <div style="font-size: 48px; margin-bottom: 20px;">👆</div>
    <div style="font-size: 20px; font-weight: 600;">Оберіть режим навчання</div>
</div>
```

**ЗАМІНИТИ НА:**
```html
<div style="text-align: center; color: #666; padding: 60px 20px;">
    <div style="font-size: 48px; margin-bottom: 20px;">👆</div>
    <div style="font-size: 20px; font-weight: 600;">Выберите режим обучения</div>
</div>
```

#### 2.3 В кінці HTML перед `</body>` вже є:
```html
<!-- Vocabulary Learning Script -->
<script src="vocab-learning.js"></script>
```
✅ Вже є - нічого не робити!

#### 2.4 Додати функцію toggleVocabLearning в <script>

**ЗНАЙТИ:**
```javascript
function toggleQuiz() {
    // ... існуючий код ...
}
```

**ДОДАТИ ПІСЛЯ:**
```javascript
// Відкриття модалки вивчення слів
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
```

#### 2.5 Оновити обробник кліку на слово

**ЗНАЙТИ:**
```javascript
document.querySelectorAll('.korean-word').forEach(word => {
    word.addEventListener('click', function() {
        // ... існуючий код що зберігає слово ...
    });
});
```

**ЗАМІНИТИ або ДОДАТИ в кінці обробника:**
```javascript
// *** Оновити кнопку "Учить слова" після додавання слова ***
updateVocabButton();
```

Весь обробник має виглядати так:
```javascript
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
```

#### 2.6 Приховати кнопку на початку

**ЗНАЙТИ:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    ProgressTracker.init();
    console.log('[OK] Progress tracker initialized');
    updatePageInfo();
    updateBackButton();
    loadCurrentText();
});
```

**ЗМІНИТИ НА:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    ProgressTracker.init();
    console.log('[OK] Progress tracker initialized');
    updatePageInfo();
    updateBackButton();
    updateVocabButton(); // ← ДОДАТИ ЦЕЙ РЯДОК
    loadCurrentText();
});
```

### Крок 3: Тестування

1. Відкрити `reading-content.html` в браузері
2. Натиснути на декілька слів в тексті (мінімум 4)
3. Перевірити що кнопка "Учить слова (N)" з'явилась
4. Натиснути на кнопку
5. Вибрати режим і перевірити роботу

### Крок 4: Очистити localStorage (якщо потрібно)

Відкрити консоль браузера (F12) і виконати:
```javascript
localStorage.removeItem('koreanLearnedWords');
location.reload();
```

## ПЕРЕВІРОЧНИЙ СПИСОК

- [ ] vocab-learning.js існує і підключений
- [ ] vocab-learning.css існує і підключений
- [ ] HTML модалка виправлена на російську мову
- [ ] Функція toggleVocabLearning() додана
- [ ] Обробник кліку має виклик updateVocabButton()
- [ ] DOMContentLoaded має виклик updateVocabButton()
- [ ] Кнопка прихована при завантаженні (якщо немає слів)
- [ ] Кнопка з'являється після кліку на слова
- [ ] Модалка відкривається при кліку на кнопку
- [ ] Всі 3 режими працюють

## МОЖЛИВІ ПОМИЛКИ

### Кнопка не з'являється
- Перевірити чи викликається `updateVocabButton()` після кліку на слово
- Перевірити в localStorage чи є `koreanLearnedWords`

### Модалка не відкривається
- Перевірити чи є функція `toggleVocabLearning()` в <script>
- Перевірити чи правильний onclick на кнопці

### Режими не працюють
- Перевірити чи підключений `vocab-learning.js`
- Перевірити консоль браузера на помилки

## КОНТАКТИ

Якщо щось не працює - перевір консоль браузера (F12 → Console)

Версія: 1.0
Дата: 16.10.2025
