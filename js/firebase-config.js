/**
 * Jane Korea - Firebase Configuration
 *
 * ИНСТРУКЦИЯ ПО НАСТРОЙКЕ:
 * 1. Перейдите на https://console.firebase.google.com/
 * 2. Создайте новый проект (или используйте существующий)
 * 3. Добавьте веб-приложение (Web App)
 * 4. Скопируйте ваши настройки в firebaseConfig ниже
 * 5. Включите Authentication > Sign-in method > Google
 * 6. Создайте Firestore Database в режиме production
 * 7. Добавьте домен github.io в Authentication > Settings > Authorized domains
 */

// Firebase Configuration
// ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ ИЗ FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Флаг для проверки, настроен ли Firebase
const isFirebaseConfigured = () => {
    return firebaseConfig.apiKey !== "YOUR_API_KEY" &&
           firebaseConfig.projectId !== "YOUR_PROJECT_ID";
};

// Экспорт конфигурации
window.FirebaseConfig = {
    config: firebaseConfig,
    isConfigured: isFirebaseConfigured
};

console.log('[Firebase] Configuration loaded');
