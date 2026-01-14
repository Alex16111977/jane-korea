/**
 * Jane Korea - Firebase Authentication Module
 * Обеспечивает вход через Google
 */

// Состояние авторизации
let currentUser = null;
let authStateListeners = [];

// Инициализация Firebase Auth
function initFirebaseAuth() {
    if (!window.FirebaseConfig || !window.FirebaseConfig.isConfigured()) {
        console.warn('[Auth] Firebase не настроен. Используется только localStorage.');
        updateAuthUI(null);
        return;
    }

    try {
        // Инициализация Firebase (если ещё не инициализирован)
        if (!firebase.apps.length) {
            firebase.initializeApp(window.FirebaseConfig.config);
        }

        // Слушатель изменения состояния авторизации
        firebase.auth().onAuthStateChanged(async (user) => {
            currentUser = user;
            console.log('[Auth] Состояние изменилось:', user ? user.email : 'не авторизован');

            updateAuthUI(user);

            // Уведомляем всех слушателей
            authStateListeners.forEach(listener => listener(user));

            if (user) {
                // Пользователь вошёл - синхронизируем данные
                await syncDataOnLogin(user);
            }
        });

        console.log('[Auth] Firebase Auth инициализирован');
    } catch (error) {
        console.error('[Auth] Ошибка инициализации:', error);
        updateAuthUI(null);
    }
}

// Вход через Google
async function signInWithGoogle() {
    if (!window.FirebaseConfig || !window.FirebaseConfig.isConfigured()) {
        showAuthMessage('Firebase не настроен. Смотрите инструкцию в js/firebase-config.js', 'error');
        return;
    }

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });

        // Показываем индикатор загрузки
        showAuthLoading(true);

        const result = await firebase.auth().signInWithPopup(provider);
        console.log('[Auth] Успешный вход:', result.user.email);
        showAuthMessage(`Добро пожаловать, ${result.user.displayName}!`, 'success');

    } catch (error) {
        console.error('[Auth] Ошибка входа:', error);

        let message = 'Ошибка входа. Попробуйте снова.';
        if (error.code === 'auth/popup-closed-by-user') {
            message = 'Вход отменён';
        } else if (error.code === 'auth/network-request-failed') {
            message = 'Ошибка сети. Проверьте подключение к интернету.';
        } else if (error.code === 'auth/unauthorized-domain') {
            message = 'Домен не авторизован. Добавьте его в Firebase Console.';
        }

        showAuthMessage(message, 'error');
    } finally {
        showAuthLoading(false);
    }
}

// Выход
async function signOut() {
    if (!firebase.apps.length) {
        console.warn('[Auth] Firebase не инициализирован');
        return;
    }

    try {
        await firebase.auth().signOut();
        console.log('[Auth] Пользователь вышел');
        showAuthMessage('Вы вышли из аккаунта', 'info');
    } catch (error) {
        console.error('[Auth] Ошибка выхода:', error);
        showAuthMessage('Ошибка при выходе', 'error');
    }
}

// Получить текущего пользователя
function getCurrentUser() {
    return currentUser;
}

// Проверить, авторизован ли пользователь
function isUserLoggedIn() {
    return currentUser !== null;
}

// Добавить слушатель изменения состояния авторизации
function onAuthStateChanged(callback) {
    authStateListeners.push(callback);
    // Сразу вызываем с текущим состоянием
    if (currentUser !== undefined) {
        callback(currentUser);
    }
}

// Синхронизация данных при входе
async function syncDataOnLogin(user) {
    if (window.FirebaseSync && typeof window.FirebaseSync.syncOnLogin === 'function') {
        await window.FirebaseSync.syncOnLogin(user);
    }
}

// Обновление UI авторизации
function updateAuthUI(user) {
    const authContainer = document.getElementById('auth-container');
    const userInfo = document.getElementById('user-info');
    const signInBtn = document.getElementById('google-signin-btn');
    const signOutBtn = document.getElementById('signout-btn');
    const profileBtn = document.getElementById('profile-btn');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const syncStatus = document.getElementById('sync-status');

    if (!authContainer) return;

    if (user) {
        // Пользователь авторизован
        if (signInBtn) signInBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'flex';
        if (signOutBtn) signOutBtn.style.display = 'inline-block';
        if (profileBtn) profileBtn.style.display = 'inline-block';

        if (userAvatar) {
            userAvatar.src = user.photoURL || 'https://www.gravatar.com/avatar/?d=mp';
            userAvatar.alt = user.displayName || 'User';
        }
        if (userName) {
            userName.textContent = user.displayName || user.email;
        }
        if (syncStatus) {
            syncStatus.textContent = 'Синхронизировано';
            syncStatus.className = 'sync-status synced';
        }
    } else {
        // Пользователь не авторизован
        if (signInBtn) signInBtn.style.display = 'inline-flex';
        if (userInfo) userInfo.style.display = 'none';
        if (signOutBtn) signOutBtn.style.display = 'none';
        if (profileBtn) profileBtn.style.display = 'none';

        if (syncStatus) {
            syncStatus.textContent = 'Данные сохраняются локально';
            syncStatus.className = 'sync-status local';
        }
    }
}

// Показать сообщение
function showAuthMessage(message, type = 'info') {
    const messageEl = document.getElementById('auth-message');
    if (!messageEl) {
        console.log(`[Auth Message] ${type}: ${message}`);
        return;
    }

    messageEl.textContent = message;
    messageEl.className = `auth-message ${type} show`;

    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 4000);
}

// Показать/скрыть индикатор загрузки
function showAuthLoading(show) {
    const signInBtn = document.getElementById('google-signin-btn');
    if (signInBtn) {
        if (show) {
            signInBtn.classList.add('loading');
            signInBtn.disabled = true;
        } else {
            signInBtn.classList.remove('loading');
            signInBtn.disabled = false;
        }
    }
}

// Экспорт функций
window.FirebaseAuth = {
    init: initFirebaseAuth,
    signInWithGoogle,
    signOut,
    getCurrentUser,
    isLoggedIn: isUserLoggedIn,
    onAuthStateChanged
};

// Автоматическая инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Небольшая задержка для загрузки Firebase SDK
    setTimeout(initFirebaseAuth, 100);
});

console.log('[Auth] Module loaded');
