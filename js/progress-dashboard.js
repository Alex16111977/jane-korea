/**
 * Jane Korea - Progress Dashboard Component
 * Версия: 1.0
 */

// Генерация HTML панели прогресса
function renderProgressDashboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('[ERROR] Dashboard container not found:', containerId);
        return;
    }
    
    const progress = ProgressTracker.get();
    
    // Подсчет статистики
    const totalTexts = Object.keys(progress.completedTexts).length;
    const totalLessons = Object.keys(progress.completedLessons).length;
    const streak = progress.stats.currentStreak || 0;
    const studyTime = Math.floor(progress.stats.studyTimeMinutes || 0);
    
    // Проверка достижений
    const achievements = checkAllAchievements(progress);
    
    // HTML панели
    const html = `
        <div class="progress-dashboard">
            <div class="dashboard-header">
                <h3>📊 Ваш прогресс</h3>
                <button class="reset-progress" onclick="ProgressTracker.resetProgress()">
                    🔄 Сбросить прогресс
                </button>
            </div>
            
            <div class="stats-grid">
                <!-- Интерактивные тексты -->
                <div class="stat-card">
                    <div class="stat-icon">📖</div>
                    <div class="stat-value">${totalTexts}</div>
                    <div class="stat-label">Текстов пройдено</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((totalTexts/6)*100, 100)}%"></div>
                    </div>
                </div>
                
                <!-- Грамматические уроки -->
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-value">${totalLessons}</div>
                    <div class="stat-label">Уроков пройдено</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((totalLessons/50)*100, 100)}%"></div>
                    </div>
                </div>
                
                <!-- Серия дней -->
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${streak}</div>
                    <div class="stat-label">Дней подряд</div>
                </div>
                
                <!-- Время обучения -->
                <div class="stat-card">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-value">${studyTime}</div>
                    <div class="stat-label">Минут обучения</div>
                </div>
            </div>
            
            <!-- Достижения -->
            <div class="achievements">
                <h4>🏆 Достижения</h4>
                <div class="badges">
                    ${achievements.map(a => `
                        <div class="badge ${a.earned ? 'earned' : 'locked'}">
                            ${a.icon} ${a.title}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    console.log('[OK] Dashboard rendered');
}

// Проверка всех достижений
function checkAllAchievements(progress) {
    const totalTexts = Object.keys(progress.completedTexts).length;
    const totalLessons = Object.keys(progress.completedLessons).length;
    const streak = progress.stats.currentStreak || 0;
    
    // Проверка на 100% результат
    const hasPerfectScore = Object.values(progress.completedTexts)
        .some(t => t.quizScore === 100);
    
    return [
        {
            id: 'first_text',
            icon: '🥇',
            title: 'Первый текст',
            earned: totalTexts >= 1
        },
        {
            id: 'text_master_5',
            icon: '📚',
            title: '5 текстов',
            earned: totalTexts >= 5
        },
        {
            id: 'perfect_quiz',
            icon: '💯',
            title: 'Идеальный результат',
            earned: hasPerfectScore
        },
        {
            id: 'streak_7',
            icon: '🔥',
            title: 'Недельная серия',
            earned: streak >= 7
        },
        {
            id: 'grammar_guru_10',
            icon: '📝',
            title: '10 уроков',
            earned: totalLessons >= 10
        },
        {
            id: 'text_master_10',
            icon: '🎓',
            title: '10 текстов',
            earned: totalTexts >= 10
        }
    ];
}

// Экспорт
window.ProgressDashboard = {
    render: renderProgressDashboard,
    checkAchievements: checkAllAchievements
};

console.log('[OK] ProgressDashboard loaded');
