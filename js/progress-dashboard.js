/**
 * Jane Korea - Progress Dashboard Component
 * Версія: 1.0
 */

// Генерація HTML панелі прогресу
function renderProgressDashboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('[ERROR] Dashboard container not found:', containerId);
        return;
    }
    
    const progress = ProgressTracker.get();
    
    // Підрахунок статистики
    const totalTexts = Object.keys(progress.completedTexts).length;
    const totalLessons = Object.keys(progress.completedLessons).length;
    const streak = progress.stats.currentStreak || 0;
    const studyTime = Math.floor(progress.stats.studyTimeMinutes || 0);
    
    // Перевірка досягнень
    const achievements = checkAllAchievements(progress);
    
    // HTML панелі
    const html = `
        <div class="progress-dashboard">
            <div class="dashboard-header">
                <h3>📊 Ваш прогрес</h3>
                <button class="reset-progress" onclick="ProgressTracker.resetProgress()">
                    🔄 Скинути прогрес
                </button>
            </div>
            
            <div class="stats-grid">
                <!-- Інтерактивні тексти -->
                <div class="stat-card">
                    <div class="stat-icon">📖</div>
                    <div class="stat-value">${totalTexts}</div>
                    <div class="stat-label">Тексти пройдено</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((totalTexts/6)*100, 100)}%"></div>
                    </div>
                </div>
                
                <!-- Граматичні уроки -->
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-value">${totalLessons}</div>
                    <div class="stat-label">Уроки пройдено</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((totalLessons/50)*100, 100)}%"></div>
                    </div>
                </div>
                
                <!-- Серія днів -->
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${streak}</div>
                    <div class="stat-label">Днів підряд</div>
                </div>
                
                <!-- Час навчання -->
                <div class="stat-card">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-value">${studyTime}</div>
                    <div class="stat-label">Хвилин навчання</div>
                </div>
            </div>
            
            <!-- Досягнення -->
            <div class="achievements">
                <h4>🏆 Досягнення</h4>
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

// Перевірка всіх досягнень
function checkAllAchievements(progress) {
    const totalTexts = Object.keys(progress.completedTexts).length;
    const totalLessons = Object.keys(progress.completedLessons).length;
    const streak = progress.stats.currentStreak || 0;
    
    // Перевірка на 100% результат
    const hasPerfectScore = Object.values(progress.completedTexts)
        .some(t => t.quizScore === 100);
    
    return [
        {
            id: 'first_text',
            icon: '🥇',
            title: 'Перший текст',
            earned: totalTexts >= 1
        },
        {
            id: 'text_master_5',
            icon: '📚',
            title: '5 текстів',
            earned: totalTexts >= 5
        },
        {
            id: 'perfect_quiz',
            icon: '💯',
            title: 'Ідеальний результат',
            earned: hasPerfectScore
        },
        {
            id: 'streak_7',
            icon: '🔥',
            title: 'Тижнева серія',
            earned: streak >= 7
        },
        {
            id: 'grammar_guru_10',
            icon: '📝',
            title: '10 уроків',
            earned: totalLessons >= 10
        },
        {
            id: 'text_master_10',
            icon: '🎓',
            title: '10 текстів',
            earned: totalTexts >= 10
        }
    ];
}

// Експорт
window.ProgressDashboard = {
    render: renderProgressDashboard,
    checkAchievements: checkAllAchievements
};

console.log('[OK] ProgressDashboard loaded');
