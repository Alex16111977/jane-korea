# Jane Korea — Правила проекта

Интерактивная платформа для изучения корейского языка. Чистый HTML5 + CSS3 + JavaScript (ES6+) + Firebase. Без сборщиков, фреймворков и транспиляции.

## Стиль работы

- Давай РЕАЛЬНЫЙ КОД, не "Here's how you can..."
- Кратко и по сути
- Общайся на русском языке
- Предугадывай потребности — предлагай решения, которые пользователь не учёл
- Точность и детальность обязательны
- Сначала ответ, потом объяснение
- НЕ ломай существующую функциональность — будь на 100% уверен

## Структура проекта

```
jane-korea/
├── index.html                  # Главная страница
├── reading-content.html        # ОСНОВНОЙ ФАЙЛ — интерактивные тексты, storyDatabase
├── reading-texts.html          # Список уроков для выбора
├── lessons.html                # Навигация по грамматическим урокам (83 урока)
├── kpop-learning.html          # Обучение через K-POP
├── profile.html                # Профиль и статистика пользователя
├── vocabulary-learning.html    # Практика словаря
│
├── css/                        # Стили
│   ├── style.css               # Основные стили
│   ├── kpop-styles.css         # Стили K-POP модуля
│   ├── auth-styles.css         # Стили аутентификации
│   ├── profile-styles.css      # Стили профиля
│   ├── progress.css            # Стили прогресса
│   └── vocabulary-styles.css   # Стили словаря
│
├── js/                         # JavaScript модули
│   ├── progress-tracker.js     # Отслеживание прогресса (localStorage)
│   ├── progress-dashboard.js   # UI статистики
│   ├── firebase-auth.js        # Google Auth
│   ├── firebase-config.js      # Конфигурация Firebase
│   ├── firebase-sync.js        # Синхронизация с Firestore
│   ├── kpop-functions.js       # K-POP логика и аудио
│   ├── global-nav.js           # Навигация
│   └── level3-sentence-segments.js  # Парсинг грамматики уровня 3
│
├── audio/                      # Аудиофайлы для текстов (MP3)
├── images/                     # Изображения (WebP, JPG)
├── vocabulary/                 # Ресурсы словаря
│
├── level-3-texts.js            # Данные текстов уровня 3
├── level-4-texts.js            # Данные текстов уровня 4
├── level-5-texts.js            # Данные текстов уровня 5
├── level-6-texts.js            # Данные текстов уровня 6
│
├── level_1/ ... level_6/       # 6 уровней (1급-6급, A1-C2)
├── lesson_01_korea/ ... lesson_83_passive_constructions/  # 83 грамматических урока
│
└── rules/                      # Подробная документация проекта
    ├── PROJECT_INSTRUCTION_v2.md
    ├── QUICK_RULES.md
    └── PROJECT_ANALYSIS.md
```

## Архитектура storyDatabase

Центральная структура данных в `reading-content.html`:

```javascript
const storyDatabase = {
    'textId': {
        title: "Название на русском",
        subtitle: "한글로 제목",
        korean: `<span class="korean-word"
                       data-translation="перевод"
                       data-pronunciation="발음 [romanization]">한글</span>...`,
        translation: "Полный перевод на русском",
        image: "images/picture.jpg",
        quiz: [
            {
                question: "한국어로 질문?",
                options: ["답1", "답2", "답3", "답4"],
                correct: 0  // индекс 0-3
            }
            // Ровно 4 вопроса!
        ]
    }
}
```

Тексты уровней 3-6 вынесены в отдельные файлы `level-N-texts.js`.

URL-параметры: `?level=1&category=personal&textId=personal-1`

## Правила контента

### Корейский текст
- Каждое слово ОБЯЗАТЕЛЬНО в `<span class="korean-word">`
- Обязательные атрибуты: `data-translation`, `data-pronunciation`
- Транскрипция в [квадратных скобках], Revised Romanization
- Пример: `안녕하세요 [annyeonghaseyo]`

### Перевод
- Естественный русский язык, НЕ дословный перевод
- Сохранять структуру абзацев

### Тесты (quiz)
- Ровно 4 вопроса на каждый текст
- Вопросы на корейском
- 4 варианта ответа
- `correct` — индекс правильного ответа (0-3)

### Аудио
- Формат: MP3
- Именование: `{level}-{category}-{textId}.mp3`
- Пример: `1-personal-personal-1.mp3`

## Категории и уровни

**Уровни:** 1급(A1), 2급(A2), 3급(B1), 4급(B2), 5급(C1), 6급(C2)

**Категории:** personal, daily, travel, study, work, food, culture, hobbies, stories

## Конвенции кода

- CSS классы: kebab-case (`.korean-word`, `.level-card`)
- JavaScript функции: camelCase (`markTextCompleted()`, `playGroupSong()`)
- Ключи хранилища: PascalCase для неймспейса (`janeKoreaProgress`)
- Модули экспортируются как глобальные объекты: `window.ProgressTracker`, `window.FirebaseAuth`, `window.FirebaseSync`
- Консольный вывод: `[OK]`, `[ERROR]`, `[!]`, `[+]`, `[-]` — БЕЗ Unicode-символов (не ✓, а [OK])

## Состояние и хранение данных

1. **localStorage** — основное хранилище (ключ `janeKoreaProgress`)
   - completedTexts, completedLessons, completedKpop
   - stats (totalTexts, currentStreak, longestStreak, studyTimeMinutes)
   - achievements
2. **Firebase Firestore** — облачная синхронизация при аутентификации
   - Коллекция `users`, документ по userId
   - Мержит локальные + облачные данные при входе
3. **Сессионное состояние** — глобальные переменные (currentUser, currentAudio)

## Дизайн

```css
/* Основной градиент */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Hover на слове */
background: #e3f2fd; color: #1976d2;

/* Клик на слове */
background: #c8e6c9; color: #388e3c;

/* Правильный ответ */
background: #4caf50;

/* Неправильный ответ */
background: #f44336;
```

- Шрифт: `'Noto Sans KR', 'Malgun Gothic', sans-serif`
- Responsive: `@media (max-width: 768px)`
- Анимации: `transition: 0.3s ease` стандарт
- Тени карточек: `box-shadow: 0 15px 40px rgba(0,0,0,0.1)`

## Запреты

1. НЕ ломать структуру `storyDatabase`
2. НЕ удалять существующие тексты без запроса
3. НЕ изменять структуру аннотированных слов
4. НЕ ломать responsive дизайн
5. НЕ использовать Unicode в консоли (✓ → [OK])
6. НЕ создавать .bat, .cmd, .sh без необходимости
7. НЕ ломать существующую функциональность

## Тестирование

Автоматических тестов нет. Проверка вручную через браузер:
- Открыть текст через URL-параметры
- Проверить наличие 4 вопросов в quiz
- Проверить что все слова имеют `data-translation`
- Проверить что аудиофайлы существуют
- Проверить responsive на мобильных разрешениях
