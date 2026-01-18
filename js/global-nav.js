/**
 * Global Navigation Component
 * Добавляет единую навигацию на все страницы сайта
 */

(function() {
    'use strict';

    // Определяем текущую страницу
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop() || 'index.html';

    // Определяем уровень вложенности для корректных путей
    const isInSubfolder = currentPath.includes('/lesson_') ||
                          currentPath.includes('/level_') ||
                          currentPath.includes('/vocabulary/');
    const pathPrefix = isInSubfolder ? '../' : '';

    // HTML навигации
    const navHTML = `
    <div class="global-nav-bar" id="global-nav-bar">
        <nav class="global-nav">
            <a href="${pathPrefix}index.html" class="nav-link ${pageName === 'index.html' ? 'active' : ''}">Главная</a>
            <a href="${pathPrefix}lessons.html" class="nav-link ${pageName === 'lessons.html' ? 'active' : ''}">Уроки</a>
            <a href="${pathPrefix}reading-texts.html" class="nav-link ${pageName === 'reading-texts.html' ? 'active' : ''}">Тексты</a>
            <a href="${pathPrefix}kpop-learning.html" class="nav-link ${pageName === 'kpop-learning.html' ? 'active' : ''}">K-POP</a>
            <a href="${pathPrefix}profile.html" class="nav-link ${pageName === 'profile.html' ? 'active' : ''}">Профиль</a>
        </nav>

        <div class="nav-auth-section">
            <!-- Предупреждение для гостей -->
            <div id="nav-guest-warning" class="nav-guest-warning">
                <span>⚠️</span>
                <span>Данные не сохраняются.</span>
                <button onclick="FirebaseAuth && FirebaseAuth.signInWithGoogle()" class="nav-login-btn">Войти</button>
            </div>

            <!-- Информация о пользователе -->
            <div id="nav-user-info" class="nav-user-info" style="display:none;">
                <a href="${pathPrefix}profile.html" class="nav-profile-link">
                    <img id="nav-user-avatar" class="nav-avatar" src="" alt="">
                    <span id="nav-user-name" class="nav-username"></span>
                </a>
                <button onclick="FirebaseAuth && FirebaseAuth.signOut()" class="nav-logout-btn">Выйти</button>
            </div>
        </div>
    </div>
    `;

    // CSS стили
    const navCSS = `
    <style id="global-nav-styles">
        .global-nav-bar {
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }
        .global-nav {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
        }
        .global-nav .nav-link {
            color: #555;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            white-space: nowrap;
        }
        .global-nav .nav-link:hover {
            background: rgba(255,107,157,0.1);
            color: #ff6b9d;
        }
        .global-nav .nav-link.active {
            background: linear-gradient(135deg, #ff6b9d, #c44569);
            color: white;
        }
        .nav-auth-section {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .nav-guest-warning {
            display: flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #fff3cd, #ffeaa7);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            color: #856404;
        }
        .nav-login-btn {
            background: #ff6b9d;
            color: white;
            border: none;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        .nav-login-btn:hover {
            background: #e55a8a;
            transform: scale(1.05);
        }
        .nav-user-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .nav-profile-link {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            color: #333;
        }
        .nav-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #ff6b9d;
        }
        .nav-username {
            font-size: 14px;
            font-weight: 500;
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .nav-logout-btn {
            background: none;
            border: 1px solid #ddd;
            color: #666;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .nav-logout-btn:hover {
            background: #f5f5f5;
            border-color: #ccc;
        }

        /* Адаптивность */
        @media (max-width: 768px) {
            .global-nav-bar {
                padding: 8px 12px;
            }
            .global-nav {
                order: 2;
                width: 100%;
                justify-content: center;
            }
            .global-nav .nav-link {
                padding: 6px 10px;
                font-size: 12px;
            }
            .nav-auth-section {
                order: 1;
                width: 100%;
                justify-content: flex-end;
            }
            .nav-guest-warning span:nth-child(2) {
                display: none;
            }
            .nav-username {
                display: none;
            }
        }

        /* Скрываем старую навигацию если есть */
        .auth-header-bar .main-nav {
            display: none !important;
        }
    </style>
    `;

    // Вставляем стили и навигацию при загрузке
    function initGlobalNav() {
        // Добавляем стили
        if (!document.getElementById('global-nav-styles')) {
            document.head.insertAdjacentHTML('beforeend', navCSS);
        }

        // Добавляем навигацию в начало body
        const existingNav = document.getElementById('global-nav-bar');
        if (!existingNav) {
            document.body.insertAdjacentHTML('afterbegin', navHTML);
        }

        // Слушаем изменения авторизации
        updateNavAuthState();

        // Подписываемся на изменения Firebase Auth
        if (window.FirebaseAuth && window.FirebaseAuth.onAuthStateChanged) {
            window.FirebaseAuth.onAuthStateChanged(function(user) {
                updateNavAuthState(user);
            });
        } else {
            // Ждем инициализации Firebase
            setTimeout(function() {
                if (window.FirebaseAuth && window.FirebaseAuth.onAuthStateChanged) {
                    window.FirebaseAuth.onAuthStateChanged(function(user) {
                        updateNavAuthState(user);
                    });
                }
                // Проверяем текущее состояние
                if (window.FirebaseAuth && window.FirebaseAuth.getCurrentUser) {
                    updateNavAuthState(window.FirebaseAuth.getCurrentUser());
                }
            }, 1000);
        }
    }

    function updateNavAuthState(user) {
        const guestWarning = document.getElementById('nav-guest-warning');
        const userInfo = document.getElementById('nav-user-info');
        const avatar = document.getElementById('nav-user-avatar');
        const userName = document.getElementById('nav-user-name');

        if (!guestWarning || !userInfo) return;

        if (user) {
            guestWarning.style.display = 'none';
            userInfo.style.display = 'flex';
            if (avatar && user.photoURL) avatar.src = user.photoURL;
            if (userName && user.displayName) userName.textContent = user.displayName.split(' ')[0];
        } else {
            guestWarning.style.display = 'flex';
            userInfo.style.display = 'none';
        }
    }

    // Инициализируем при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalNav);
    } else {
        initGlobalNav();
    }

    // Экспортируем для внешнего использования
    window.GlobalNav = {
        init: initGlobalNav,
        updateAuth: updateNavAuthState
    };

})();
