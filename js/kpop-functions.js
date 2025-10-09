// 🌟 Функции для K-POP секции 🌟
// Переменная для отслеживания текущего воспроизводящегося аудио
let currentAudio = null;
let currentPlayingGroup = null;
let audioInitialized = false; // Флаг для мобильных устройств

// 📱 Простая инициализация аудио
function initAudioForMobile() {
    if (audioInitialized) return;
    
    // Получаем все аудио элементы
    const audioElements = document.querySelectorAll('audio');
    
    // Простая загрузка аудио элементов
    audioElements.forEach(audio => {
        audio.load();
        audio.volume = 0.8;
    });
    
    audioInitialized = true;
    console.log('[OK] Audio initialized');
}

// 🎵 Функция воспроизведения/остановки песни группы (с поддержкой мобильных)
function playGroupSong(groupName) {
    // Проверяем, играет ли эта группа сейчас
    if (currentPlayingGroup === groupName && currentAudio && !currentAudio.paused) {
        // Если эта группа уже играет - останавливаем
        stopCurrentMusic();
        showMusicNotification('Остановлено ✨');
        return;
    }
    
    // Останавливаем предыдущее аудио если играет
    if (currentAudio) {
        stopCurrentMusic();
    }
    
    // Получаем аудио элемент
    const audio = document.getElementById(groupName + '-audio');
    if (audio) {
        currentAudio = audio;
        currentPlayingGroup = groupName;
        
        // Добавляем визуальный эффект
        addPlayingEffect(groupName);
        
        // 📱 Инициализируем аудио если нужно (одновременно с воспроизведением)
        if (!audioInitialized) {
            audio.muted = false;
            audio.load(); // Загружаем аудио
            audioInitialized = true;
            console.log('[OK] Audio initialized during playback');
        }
        
        // Устанавливаем параметры аудио
        audio.muted = false;
        audio.volume = 0.8;
        
        // Пытаемся воспроизвести с обработкой ошибок
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log(`[OK] Playing ${groupName} song`);
                showMusicNotification('Играет: ' + getGroupDisplayName(groupName));
            }).catch(error => {
                console.log(`[ERROR] Cannot play ${groupName}: ${error.message}`);
                
                // Убираем визуальный эффект при ошибке
                removePlayingEffect(groupName);
                
                // Показываем пользователю подсказку
                if (error.name === 'NotAllowedError') {
                    showMusicNotification('Кликните еще раз для воспроизведения! 🎵');
                } else {
                    showMusicNotification('Ошибка воспроизведения ⚠️');
                }
            });
        }
        
        // Убираем эффект когда песня закончится
        audio.onended = () => {
            stopCurrentMusic();
        };
        
    } else {
        console.log(`[ERROR] Audio element ${groupName}-audio not found`);
        showMusicNotification('Ошибка: аудио не найдено ⚠️');
    }
}

// 🛑 Останавливаем текущую музыку
function stopCurrentMusic() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    if (currentPlayingGroup) {
        removePlayingEffect(currentPlayingGroup);
    }
    
    currentAudio = null;
    currentPlayingGroup = null;
}

// 🎨 Добавляем визуальный эффект воспроизведения
function addPlayingEffect(groupName) {
    const container = document.querySelector(`[onclick="playGroupSong('${groupName}')"]`);
    if (container) {
        container.classList.add('playing');
        
        // Добавляем пульсирующий эффект
        container.style.animation = 'musicPulse 1s ease-in-out infinite';
        container.style.boxShadow = '0 0 30px rgba(255,107,157,0.8)';
        
        // Обновляем подсказку
        const hint = container.querySelector('.video-hint');
        if (hint) {
            hint.innerHTML = '🔊 Клик: остановить';
            hint.style.background = 'rgba(255,107,157,0.6)';
        }
        
        // Добавляем музыкальную иконку
        const overlay = container.querySelector('.group-overlay');
        const musicIcon = document.createElement('div');
        musicIcon.className = 'playing-icon';
        musicIcon.innerHTML = '🎵';
        musicIcon.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            animation: bounce 0.6s ease-in-out infinite alternate;
        `;
        overlay.appendChild(musicIcon);
    }
}

// 🎨 Убираем визуальный эффект воспроизведения
function removePlayingEffect(groupName) {
    const container = document.querySelector(`[onclick="playGroupSong('${groupName}')"]`);
    if (container) {
        container.classList.remove('playing');
        container.style.animation = '';
        container.style.boxShadow = '';
        
        // Возвращаем обычную подсказку
        const hint = container.querySelector('.video-hint');
        if (hint) {
            hint.innerHTML = '🎵 Клик: играть';
            hint.style.background = 'rgba(255,107,157,0.2)';
        }
        
        // Убираем музыкальную иконку
        const playingIcon = container.querySelector('.playing-icon');
        if (playingIcon) {
            playingIcon.remove();
        }
    }
}

// 🏷️ Получаем красивое имя группы для уведомления
function getGroupDisplayName(groupName) {
    const names = {
        'blackpink': 'BLACKPINK 블랙핑크',
        'bts': 'BTS 방탄소년단',
        'newjeans': 'NewJeans 뉴진스',
        'aespa': 'aespa 애스파'
    };
    return names[groupName] || groupName;
}

// 🔔 Показываем уведомление о воспроизведении
function showMusicNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = 'music-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">🎵</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Стили уведомления
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(255,107,157,0.4);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Убираем уведомление через 3 секунды
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.5s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }
    }, 3000);
}

// Добавляем CSS анимации
const musicStyles = document.createElement('style');
musicStyles.textContent = `
    @keyframes musicPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes bounce {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-10px) rotate(15deg); }
    }
    
    @keyframes slideIn {
        0% { 
            transform: translateX(100%);
            opacity: 0;
        }
        100% { 
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        0% { 
            transform: translateX(0);
            opacity: 1;
        }
        100% { 
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .kpop-group-container.playing {
        transform: translateY(-8px) scale(1.02);
    }
    
    .video-hint {
        margin-top: 8px;
        font-size: 0.9em;
        opacity: 0.9;
        transition: all 0.3s ease;
    }
    
    .kpop-group-container:hover .video-hint {
        opacity: 1;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(musicStyles);

// 📱 Поддержка мобильных устройств и touch событий
document.addEventListener('DOMContentLoaded', function() {
    const groupContainers = document.querySelectorAll('.kpop-group-container');
    
    // 🖱️ Эффекты для десктопа (hover)
    groupContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            if (!this.classList.contains('playing')) {
                this.style.filter = 'brightness(1.1)';
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
        
        container.addEventListener('mouseleave', function() {
            if (!this.classList.contains('playing')) {
                this.style.filter = '';
                this.style.transform = '';
            }
        });
        
        // 📱 Touch событие для мобильных устройств (убрали preventDefault)
        container.addEventListener('touchstart', function(e) {
            // Добавляем эффект касания
            this.style.filter = 'brightness(1.2)';
            this.style.transform = 'translateY(-4px) scale(1.01)';
        });
        
        container.addEventListener('touchend', function(e) {
            // Убираем эффект касания если не играет
            if (!this.classList.contains('playing')) {
                this.style.filter = '';
                this.style.transform = '';
            }
        });
    });
    
    // Простая инициализация аудио элементов
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.preload = 'auto';
        audio.volume = 0.8;
    });
    
    console.log('[OK] Audio elements initialized');
});

// 🔊 Функция для проверки и вывода информации об аудио для отладки
function debugAudioStatus() {
    console.log('=== AUDIO DEBUG INFO ===');
    console.log('Audio initialized:', audioInitialized);
    console.log('Current playing group:', currentPlayingGroup);
    console.log('Audio elements count:', document.querySelectorAll('audio').length);
    
    document.querySelectorAll('audio').forEach(audio => {
        console.log(`${audio.id}:`, {
            paused: audio.paused,
            currentTime: audio.currentTime,
            readyState: audio.readyState,
            volume: audio.volume,
            muted: audio.muted
        });
    });
}
