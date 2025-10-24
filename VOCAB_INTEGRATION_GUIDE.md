# ІНСТРУКЦІЯ З ІНТЕГРАЦІЇ СИСТЕМИ ВИВЧЕННЯ СЛІВ
## Jane Korea - Vocabulary Learning Integration

### 📋 Що було створено:

1. **level-4-texts.js** - Нові тексти для рівня 4 (B2)
2. **vocab-learning.js** - Система вивчення слів з 3 режимами
3. **vocab-learning.css** - Стилі для системи вивчення
4. **vocab-learning-integration.html** - HTML код для інтеграції

---

## 🔧 ПОКРОКОВА ІНТЕГРАЦІЯ

### Крок 1: Додати підключення файлів в `reading-content.html`

Додайте в секцію `<head>` ПЕРЕД закриваючим тегом `</style>`:

```html
<!-- Vocabulary Learning Styles -->
<link rel="stylesheet" href="vocab-learning.css">
```

Додайте в кінець `<body>` ПЕРЕД закриваючим тегом `</body>`:

```html
<!-- Vocabulary Learning Script -->
<script src="vocab-learning.js"></script>
<script src="level-4-texts.js"></script>
```

---

### Крок 2: Додати HTML блок вкладки "Учить слова"

Знайдіть блок з кнопками керування (`.controls-row`), додайте нову кнопку:

```html
<button class="control-btn" onclick="toggleVocabLearning()" id="vocabBtn">
    <span>📚</span> Учить слова
</button>
```

Знайдіть секцію де знаходиться `vocabSection` (показ вивчених слів), додайте ПІСЛЯ неї:

```html
<!-- VOCAB LEARNING SECTION -->
<div class="vocab-learning-section" id="vocabLearningSection" style="display: none;">
    <div class="vocab-learning-title">
        📚 Вивчення слів з тексту
    </div>
    
    <!-- Вибір режиму -->
    <div class="vocab-mode-selector">
        <button class="vocab-mode-btn" onclick="vocabLearning.loadWordsFromText(); vocabLearning.startTestMode();">
            <div class="vocab-mode-icon">✏️</div>
            <div>Тест</div>
            <div style="font-size: 12px; opacity: 0.8;">Вибери переклад</div>
        </button>
        
        <button class="vocab-mode-btn" onclick="vocabLearning.loadWordsFromText(); vocabLearning.startCardsMode();">
            <div class="vocab-mode-icon">🎴</div>
            <div>Картки</div>
            <div style="font-size: 12px; opacity: 0.8;">Клікай для перекладу</div>
        </button>
        
        <button class="vocab-mode-btn" onclick="vocabLearning.loadWordsFromText(); vocabLearning.startMatchMode();">
            <div class="vocab-mode-icon">🔗</div>
            <div>З'єднання</div>
            <div style="font-size: 12px; opacity: 0.8;">Сполучи слова</div>
        </button>
    </div>
    
    <!-- Контент режимів -->
    <div id="vocabLearningContent">
        <div style="text-align: center; color: #666; padding: 60px 20px;">
            <div style="font-size: 48px; margin-bottom: 20px;">👆</div>
            <div style="font-size: 20px; font-weight: 600;">Оберіть режим навчання</div>
        </div>
    </div>
</div>
```

---

### Крок 3: Додати JavaScript функції

Знайдіть існуючу функцію `toggleQuiz()` і додайте після неї:

```javascript
function toggleVocabLearning() {
    vocabLearningVisible = !vocabLearningVisible;
    const section = document.getElementById('vocabLearningSection');
    const koreanContent = document.getElementById('koreanContent');
    const translationSection = document.getElementById('translationSection');
    const quizSection = document.getElementById('quizSection');
    const vocabSection = document.getElementById('vocabSection');
    const vocabBtn = document.getElementById('vocabBtn');
    
    if (vocabLearningVisible) {
        // Завантажити слова з тексту
        vocabLearning.loadWordsFromText();
        
        section.style.display = 'block';
        // Сховати інший контент
        koreanContent.style.display = 'none';
        translationSection.style.display = 'none';
        quizSection.style.display = 'none';
        vocabSection.style.display = 'none';
        
        translationVisible = false;
        quizVisible = false;
        vocabVisible = false;
        
        // Оновити кнопки
        vocabBtn.innerHTML = '<span>❌</span> Закрити';
        vocabBtn.classList.add('active');
        
        document.getElementById('quizBtn').classList.remove('active');
        document.getElementById('quizBtn').innerHTML = '<span>🧠</span> Тест';
    } else {
        section.style.display = 'none';
        // Показати корейський текст назад
        koreanContent.style.display = 'block';
        
        // Скинути кнопку
        vocabBtn.innerHTML = '<span>📚</span> Учить слова';
        vocabBtn.classList.remove('active');
    }
}
```

Додайте змінну в початок JavaScript блоку (де оголошені інші змінні):

```javascript
let vocabLearningVisible = false;
```

---

### Крок 4: Додати тексти рівня 4 до storyDatabase

Знайдіть об'єкт `storyDatabase` і додайте в кінці:

```javascript
const storyDatabase = {
    1: { /* існуючі тексти level 1 */ },
    2: { /* існуючі тексти level 2 */ },
    3: { /* існуючі тексти level 3 */ },
    
    // НОВИЙ РІВЕНЬ 4
    4: level4Texts[4]  // Це завантажить тексти з level-4-texts.js
};
```

---

## ✅ ПЕРЕВІРКА РОБОТИ

1. Відкрийте `reading-content.html?level=4&category=personal&textId=personal-1`
2. Має з'явитись кнопка "📚 Учить слова"
3. Клік на кнопку відкриває вкладку з 3 режимами
4. Кожен режим повинен працювати окремо

### Режими:
- **✏️ Тест** - 10 питань з вибором перекладу
- **🎴 Картки** - Флеш-картки (клік переворачує)
- **🔗 З'єднання** - Сполучити корейське слово з перекладом

---

## 📝 ДОДАТКОВІ НАЛАШТУВАННЯ

### Змінити кількість питань в тесті:
В `vocab-learning.js` знайдіть:
```javascript
const words = this.shuffle([...this.currentWords]).slice(0, 10);
```
Замініть `10` на потрібну кількість.

### Змінити кількість слів для з'єднання:
В `vocab-learning.js` знайдіть:
```javascript
const words = this.shuffle([...this.currentWords]).slice(0, 6);
```
Замініть `6` на потрібну кількість (рекомендовано 6-8).

### Змінити кольорову схему:
Відредагуйте `vocab-learning.css`:
- Основний колір: `#667eea` → ваш колір
- Правильна відповідь: `#4caf50` → ваш колір
- Неправильна відповідь: `#f44336` → ваш колір

---

## 🎯 ТЕСТУВАННЯ

Перевірте:
- ✅ Всі 3 режими відкриваються
- ✅ Тест показує 10 питань
- ✅ Картки перевертаються при кліку
- ✅ З'єднання підсвічує правильні/неправильні відповіді
- ✅ Результати відображаються коректно
- ✅ Кнопка "Закрити" повертає до тексту
- ✅ Responsive дизайн на мобільних

---

## 🐛 TROUBLESHOOTING

### Проблема: Кнопка не з'являється
**Рішення:** Перевірте чи додано `<button>` в блок `.controls-row`

### Проблема: Тексти рівня 4 не завантажуються
**Рішення:** 
1. Перевірте чи підключено `level-4-texts.js`
2. Перевірте чи додано `4: level4Texts[4]` в storyDatabase

### Проблема: Стилі не застосовуються
**Рішення:** Перевірте чи підключено `vocab-learning.css` в `<head>`

### Проблема: Функції не працюють
**Рішення:** 
1. Відкрийте консоль браузера (F12)
2. Перевірте чи є помилки
3. Перевірте чи підключено `vocab-learning.js`

---

## 📱 ПІДТРИМКА МОБІЛЬНИХ

Система автоматично адаптується:
- Картки менші на мобільних
- Режим з'єднання показує колонки вертикально
- Кнопки адаптуються під ширину екрану

---

**Версія:** 1.0  
**Дата:** 15.10.2025  
**Розробник:** Claude + User Collaboration  
**Проект:** Jane Korea - Korean Learning Platform