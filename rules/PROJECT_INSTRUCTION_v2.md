# ІНСТРУКЦІЯ ДЛЯ ПРОЕКТУ Jane Korea
**Система навчання корейської мови з інтерактивними текстами**  
Версія: 2.0 | Оновлено: 01.10.2025

---

## 🎯 СТИЛЬ РОБОТИ

**КРИТИЧНО ВАЖЛИВО:**
- ❌ DO NOT GIVE ME HIGH LEVEL STUFF! 
- ✅ Давай РЕАЛЬНИЙ КОД, не "Here's how you can..."
- ✅ Будь лаконічним - коротко і по суті
- ✅ Спілкуйся українською або російською (промпти для LLM - українською)
- ✅ Антиципуй потреби - пропонуй рішення які я не врахував
- ✅ Розглядай мене як експерта
- ✅ Точність і детальність обов'язкові
- ✅ Відповідь спочатку, потім пояснення
- ✅ Не ламай існуючу функціональність - будь на 100% впевнений

---

## 📁 СТРУКТУРА ПРОЕКТУ

### Шлях до проекту
```
C:\Claude\jane-korea\
```

### Кореневі файли

**Головні HTML файли:**
- `index.html` - головна сторінка проекту
- `reading-content.html` - **основний файл** з інтерактивними текстами
- `reading-texts.html` - список уроків для вибору
- `lessons.html` - сторінка навігації по уроках

**K-POP / BLACKPINK модуль:**
- `kpop-learning.html` - навчання через K-POP
- `group-blackpink.html` - про групу BLACKPINK
- `blackpink-culture-learning.html` - культура через BLACKPINK
- `blackpink-members-learning.html` - вивчення через учасниць
- `blackpink-songs-learning.html` - навчання через пісні
- `blackpink-songs.html` - каталог пісень
- `blackpink-vocabulary-learning.html` - словник BLACKPINK
- `boombayah-video.html` - відео урок

**JavaScript файли:**
- `duolingo-vocab-quiz.js` - квіз у стилі Duolingo
- `simple-vocab-quiz.js` - простий словниковий квіз

**Документація:**
- `AUDIO_GUIDE.md` - гайд по аудіофайлам
- `BLACKPINK_PHOTOS_GUIDE.md` - гайд по фото BLACKPINK
- `IMAGES_LIST.md` - список всіх зображень
- `README_KPOP.md` - документація K-POP модуля

**Бекапи:**
- `reading-content-backup.html` - резервна копія основного файлу

### Директорії

```
├── audio/                    # Аудіофайли для текстів
│   ├── 1-personal-personal-1.mp3
│   ├── 1-personal-personal-2.mp3
│   ├── 1-personal-personal-3.mp3
│   ├── 1-culture-culture-1.mp3
│   ├── 1-stories-stories-1.mp3
│   └── boombayah.mp4
│
├── images/                   # Зображення для уроків
│   ├── флаг.jpg
│   ├── OIP.jpg, OIP (1).jpg
│   ├── korean-family-background.jpg
│   ├── blackpink*.jpg       # Фото групи BLACKPINK
│   ├── jennie.jpg, jisoo.jpg, lisa.jpg, rose.jpg
│   ├── bts*.jpg, aespa.jpg, newjeans.jpg
│   └── [інші зображення]
│
├── css/                      # Стилі (якщо є окремі CSS)
├── js/                       # JavaScript файли (якщо є окремі)
├── vocabulary/               # Словники
├── backup/                   # Резервні копії
│
├── level_1/                  # Уроки 1급 рівня (A1)
├── level_2/                  # Уроки 2급 рівня (A2)
├── level_3/                  # Уроки 3급 рівня (B1)
├── level_4/                  # Уроки 4급 рівня (B2)
├── level_5/                  # Уроки 5급 рівня (C1)
├── level_6/                  # Уроки 6급 рівня (C2)
│
└── lesson_NN/                # Граматичні уроки (01-83)
    ├── lesson_01_korea
    ├── lesson_02_alphabet
    ├── lesson_03_greetings
    ├── ...
    └── lesson_83_passive_constructions
```

---

## 🏗️ АРХІТЕКТУРА reading-content.html

### Основна структура даних: storyDatabase

```javascript
const storyDatabase = {
    'textId': {
        title: "Назва російською",
        subtitle: "한글로 제목",
        korean: `<span class="korean-word" ...>текст</span>...`,
        translation: "Повний переклад російською",
        image: "images/picture.jpg",
        quiz: [ /* 4 питання */ ]
    }
}
```

### Існуючі тексти (textId)
- `personal-1` - "Мое знакомство с Кореей"
- `personal-2` - "Моя корейская семья"  
- `personal-3` - "Мои увлечения и хобби"
- `culture-1` - (можливо є інші тексти)
- `stories-1` - (можливо є інші тексти)

### URL параметри
```
?level=1&category=personal&textId=personal-1
```
- `level` - рівень (1-6)
- `category` - категорія (personal, daily, travel, study, work, food, culture, hobbies)
- `textId` - ідентифікатор тексту

---

## ⚡ ФУНКЦІОНАЛ

### 1. Інтерактивні слова
```html
<span class="korean-word" 
      data-translation="переклад" 
      data-pronunciation="발음 [romanization]">
    한글
</span>
```

**Поведінка:**
- Клік → показує переклад у header
- Зберігає в localStorage як вивчене слово
- Зелений flash анімація при кліку

### 2. localStorage структура
```javascript
// Ключ: 'koreanLearnedWords'
[{
    korean: "안녕하세요",
    translation: "Здравствуйте",
    pronunciation: "안녕하세요 [annyeonghaseyo]"
}]
```

### 3. Тести (quiz)
```javascript
quiz: [
    {
        question: "러시아에서 온 사람은 누구입니까?",
        options: ["민수", "마리아", "철수", "영희"],
        correct: 1  // індекс правильної відповіді (0-3)
    }
    // Рівно 4 питання обов'язково!
]
```

**Логіка тестування:**
1. Показується питання
2. Користувач вибирає відповідь
3. Через 1 сек → показ правильної/неправильної
4. Через 3 сек → наступне питання
5. Фінальний результат у %

### 4. Аудіо
**Іменування файлів:**
```
{level}-{category}-{textId}.mp3
```
Приклад: `1-personal-personal-1.mp3`

**Логіка:**
- Автовибір файлу на основі textId
- Контроль play/pause
- Візуальні індикатори (loading, playing)
- Auto-cleanup при закритті

### 5. Повний переклад
- Кнопка toggle показує/ховає повний переклад
- Smooth slideDown анімація

---

## 🎨 ДИЗАЙН

### Кольорова палітра
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--bg-color: #f8f9fa;
--card-shadow: 0 2px 8px rgba(0,0,0,0.05);
```

### Інтерактивні стани
```css
/* Hover на слові */
background: #e3f2fd;
color: #1976d2;

/* Клік на слові */
background: #c8e6c9;
color: #388e3c;

/* Правильна відповідь */
background: #4caf50;

/* Неправильна відповідь */
background: #f44336;
```

### Responsive
```css
@media (max-width: 768px) {
    /* Мобільні стилі */
}
```

---

## 📋 КАТЕГОРІЇ ТА РІВНІ

### Рівні корейської мови
| Рівень | Назва | TOPIK | Опис |
|--------|-------|-------|------|
| 1급 | 초급 | A1 | Початковий |
| 2급 | 초급 | A2 | Елементарний |
| 3급 | 중급 | B1 | Середній 1 |
| 4급 | 중급 | B2 | Середній 2 |
| 5급 | 고급 | C1 | Просунутий 1 |
| 6급 | 고급 | C2 | Просунутий 2 |

### Категорії текстів
- `personal` - О себе
- `daily` - Повседневная жизнь
- `travel` - Путешествия
- `study` - Учеба
- `work` - Работа
- `food` - Еда
- `culture` - Культура
- `hobbies` - Хобби
- `stories` - Истории

---

## 🚫 КРИТИЧНІ ЗАБОРОНИ

1. ❌ НЕ ламай структуру `storyDatabase`
2. ❌ НЕ видаляй існуючі тексти без запиту
3. ❌ НЕ змінюй структуру аннотованих слів
4. ❌ НЕ ламай responsive дизайн
5. ❌ НЕ використовуй Unicode в консолі (✓ → [OK])
6. ❌ НЕ створюй .bat, .cmd, .sh без необхідності

---

## ✅ ПРАВИЛА ДОДАВАННЯ КОНТЕНТУ

### Шаблон нового тексту
```javascript
'category-N': {
    title: "Назва російською",
    subtitle: "한글로 제목",
    korean: `<span class="korean-word" 
                   data-translation="переклад" 
                   data-pronunciation="발음 [romanization]">
                한글
             </span> наступне слово...`,
    translation: "Повний природний переклад російською.",
    image: "images/picture.jpg",
    quiz: [
        {
            question: "한국어로 질문?",
            options: ["답1", "답2", "답3", "답4"],
            correct: 0
        },
        // Рівно 4 питання!
    ]
}
```

### Вимоги до контенту

**Корейський текст:**
- ✅ Кожне слово в `<span class="korean-word">`
- ✅ Обов'язкові атрибути: `data-translation`, `data-pronunciation`
- ✅ Транскрипція в [квадратних дужках]

**Переклад:**
- ✅ Природна російська мова
- ✅ НЕ дослівний переклад
- ✅ Збережена структура абзаців

**Тести:**
- ✅ Рівно 4 питання
- ✅ Питання корейською
- ✅ 4 варіанти відповіді
- ✅ `correct` - індекс 0-3

**Аудіо:**
- ✅ Формат: MP3
- ✅ Іменування: `{level}-{category}-{textId}.mp3`

---

## 🛠️ ІНСТРУМЕНТИ MCP

### Файлова система
```javascript
filesystem:read_file         // Читання файлів
filesystem:write_file        // Створення/оновлення
filesystem:edit_file         // Редагування коду
filesystem:list_directory    // Перегляд структури
filesystem:search_files      // Пошук
filesystem:create_directory  // Створення папок
```

### Desktop Commander (процеси)
```javascript
desktop-commander:start_process        // Запуск процесу
desktop-commander:read_process_output  // Читання виводу
desktop-commander:interact_with_process // Взаємодія
desktop-commander:force_terminate      // Примусове завершення
```

### Puppeteer (браузер)
```javascript
puppeteer:puppeteer_navigate    // Відкрити URL
puppeteer:puppeteer_screenshot  // Скріншот
puppeteer:puppeteer_evaluate    // Виконати JS
puppeteer:puppeteer_click       // Клікнути елемент
```

---

## 🧪 ТЕСТУВАННЯ

### Відкрити урок через Puppeteer
```javascript
puppeteer:puppeteer_navigate({
    url: "file:///C:/Claude/jane-korea/reading-content.html?level=1&category=personal&textId=personal-1"
})
```

### Перевірити кількість слів
```javascript
puppeteer:puppeteer_evaluate({
    script: `document.querySelectorAll('.korean-word').length`
})
```

### Зробити скріншот
```javascript
puppeteer:puppeteer_screenshot({
    name: "lesson_personal_1",
    width: 1920,
    height: 1080
})
```

---

## 🎓 ЛІНГВІСТИЧНІ ПРАВИЛА

### Романізація
- ✅ Revised Romanization (переглянута романізація)
- ✅ Завжди в [квадратних дужках]
- ✅ Приклад: `안녕하세요 [annyeonghaseyo]`

### Граматичні частки
- `는/은` - тематична частка
- `를/을` - об'єктна частка
- `가/이` - суб'єктна частка
- `에` - локативна частка
- `에서` - вихідна точка/місце дії

### Рівні ввічливості
- **해요체** (haeyo-che) - неформальна ввічлива (основна)
- **합니다체** (hamnida-che) - формальна ввічлива
- Приклади: `해요`, `했어요`, `할 거예요`

---

## 📊 ТИПОВІ ЗАДАЧІ

### 1. Додати новий текст
```javascript
// 1. Читаємо reading-content.html
const content = await filesystem:read_file('reading-content.html');

// 2. Знаходимо storyDatabase
// 3. Додаємо новий об'єкт за шаблоном
// 4. Записуємо назад

await filesystem:write_file('reading-content.html', newContent);
```

### 2. Виправити переклад
```javascript
// Знайти textId в storyDatabase
// Оновити поле translation
// Зберегти через filesystem:edit_file або write_file
```

### 3. Додати аудіо
```
// 1. Скопіювати MP3 в audio/
// 2. Перевірити іменування: {level}-{category}-{textId}.mp3
// 3. Функція playAudio() автоматично знайде файл
```

### 4. Перевірити всі тексти
```javascript
// Через Puppeteer відкрити кожен textId
// Перевірити наявність 4 питань у quiz
// Перевірити всі слова мають data-translation
// Перевірити аудіофайли існують
```

---

## 💡 КОРИСНІ JS ФУНКЦІЇ

### Витягти всі корейські слова
```javascript
const words = [];
document.querySelectorAll('.korean-word').forEach(word => {
    words.push({
        korean: word.textContent,
        translation: word.dataset.translation,
        pronunciation: word.dataset.pronunciation
    });
});
console.log(words);
```

### Перевірити повноту перекладів
```javascript
const allWords = document.querySelectorAll('.korean-word');
const withoutTranslation = Array.from(allWords).filter(
    w => !w.dataset.translation
);
console.log('[!] Без перекладу:', withoutTranslation.length);
```

### Підрахунок статистики
```javascript
const stats = {
    totalTexts: Object.keys(storyDatabase).length,
    totalWords: 0,
    totalQuestions: 0
};

Object.values(storyDatabase).forEach(story => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = story.korean;
    stats.totalWords += tempDiv.querySelectorAll('.korean-word').length;
    stats.totalQuestions += story.quiz.length;
});

console.log(stats);
```

---

## 🔴 КРИТИЧНО ВАЖЛИВЕ

### На початку кожної сесії:
1. ✅ Перевір структуру через `filesystem:list_directory`
2. ✅ Прочитай `reading-content.html` для контексту
3. ✅ НЕ ламай існуючу функціональність
4. ✅ Використовуй консольний вивід: `[OK]`, `[ERROR]`, `[!]`, `[+]`, `[-]`

### Пам'ятай:
- Кожне слово ОБОВ'ЯЗКОВО має `data-translation`
- Транскрипція в [квадратних дужках]
- 4 питання на кожен текст
- Переклад природною російською, НЕ дослівний
- LocalStorage для збереження прогресу
- Responsive дизайн - перевіряй на мобільних

---

**Версія:** 2.0  
**Дата:** 01.10.2025  
**Статус:** In Active Development  
**Основний файл:** `reading-content.html`
