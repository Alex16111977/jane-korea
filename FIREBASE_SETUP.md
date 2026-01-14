# Firebase Setup Guide / Инструкция по настройке Firebase

## Шаг 1: Создание проекта Firebase

1. Перейдите на [Firebase Console](https://console.firebase.google.com/)
2. Нажмите **"Создать проект"** (Create a project)
3. Введите имя проекта, например: `jane-korea-app`
4. Отключите Google Analytics (необязательно)
5. Нажмите **"Создать проект"**

## Шаг 2: Добавление веб-приложения

1. На главной странице проекта нажмите иконку **</>** (Web)
2. Введите название приложения: `Jane Korea Web`
3. **НЕ** ставьте галочку "Firebase Hosting"
4. Нажмите **"Зарегистрировать приложение"**
5. Скопируйте значения из `firebaseConfig`:

```javascript
const firebaseConfig = {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

6. Откройте файл `js/firebase-config.js` и замените значения на свои

## Шаг 3: Включение аутентификации Google

1. В Firebase Console перейдите в **Authentication**
2. Нажмите **"Начать"** (Get started)
3. Во вкладке **Sign-in method** найдите **Google**
4. Нажмите на Google и включите его (Enable)
5. Введите email для поддержки проекта
6. Нажмите **"Сохранить"**

## Шаг 4: Добавление домена GitHub Pages

1. В разделе **Authentication > Settings**
2. Найдите **Authorized domains**
3. Нажмите **"Добавить домен"**
4. Добавьте: `alex16111977.github.io` (замените на ваш домен)
5. Также добавьте `localhost` для локального тестирования

## Шаг 5: Создание базы данных Firestore

1. В Firebase Console перейдите в **Firestore Database**
2. Нажмите **"Создать базу данных"**
3. Выберите **Production mode** (Режим производства)
4. Выберите ближайший регион (например, `europe-west1`)
5. Нажмите **"Создать"**

## Шаг 6: Настройка правил безопасности Firestore

1. В Firestore Database перейдите на вкладку **Rules**
2. Замените правила на следующие:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Пользователи могут читать/писать только свои данные
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Нажмите **"Опубликовать"**

## Шаг 7: Обновление конфигурации

Откройте файл `js/firebase-config.js` и замените значения:

```javascript
const firebaseConfig = {
    apiKey: "ВАШ_API_KEY",
    authDomain: "ВАШ_PROJECT_ID.firebaseapp.com",
    projectId: "ВАШ_PROJECT_ID",
    storageBucket: "ВАШ_PROJECT_ID.appspot.com",
    messagingSenderId: "ВАШ_MESSAGING_SENDER_ID",
    appId: "ВАШ_APP_ID"
};
```

## Готово!

После выполнения всех шагов:
1. Закоммитьте изменения в репозиторий
2. Дождитесь деплоя на GitHub Pages
3. Откройте сайт и нажмите "Войти через Google"

## Структура данных в Firestore

Каждый пользователь имеет документ в коллекции `users`:

```
users/
  {userId}/
    email: "user@gmail.com"
    displayName: "Имя Пользователя"
    photoURL: "https://..."
    createdAt: Timestamp
    lastLogin: Timestamp
    lastUpdated: Timestamp
    progress: {
      completedTexts: {...}
      completedLessons: {...}
      completedKpop: {...}
      stats: {
        totalTexts: 5
        totalLessons: 10
        currentStreak: 3
        longestStreak: 7
        lastActivityDate: "..."
        studyTimeMinutes: 180
      }
      achievements: [...]
    }
    learnedWords: [
      {
        korean: "안녕하세요"
        translation: "Привет"
        pronunciation: "annyeonghaseyo"
        textKey: "level-3-personal-1"
      },
      ...
    ]
```

## Бесплатные лимиты Firebase

Firebase Spark Plan (бесплатный):
- **Authentication**: Без ограничений на количество пользователей
- **Firestore**:
  - 1 GiB хранилища
  - 50,000 чтений в день
  - 20,000 записей в день
  - 20,000 удалений в день

Этого более чем достаточно для учебного проекта!

## Устранение неполадок

### Ошибка "auth/unauthorized-domain"
Убедитесь, что домен добавлен в **Authentication > Settings > Authorized domains**

### Ошибка "permission-denied"
Проверьте правила безопасности Firestore

### Данные не синхронизируются
1. Проверьте консоль браузера на наличие ошибок
2. Убедитесь, что вы вошли в аккаунт Google
3. Проверьте статус синхронизации в UI
