/**
 * Jane Korea - Firebase Configuration
 * Проект: jane-korea
 */

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTm1wiKEFCmJf_0PkNtsCZYYaESAa3tGk",
    authDomain: "jane-korea.firebaseapp.com",
    projectId: "jane-korea",
    storageBucket: "jane-korea.firebasestorage.app",
    messagingSenderId: "660055000170",
    appId: "1:660055000170:web:8d0698a5764781bfe4f613",
    measurementId: "G-X400CYKLVS"
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
