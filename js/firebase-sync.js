/**
 * Miso: 한국어 수업 - Firebase Firestore Sync Module
 * Синхронизация данных пользователя с облаком
 */

// Константы для localStorage ключей
const LOCAL_PROGRESS_KEY = 'janeKoreaProgress';
const LOCAL_WORDS_KEY = 'koreanLearnedWords';
const LOCAL_TEXT_KEY = 'koreanCurrentTextKey';
const LOCAL_DIARY_KEY = 'koreanDiary';

// Firestore коллекции
const USERS_COLLECTION = 'users';

// Флаг синхронизации
let isSyncing = false;
let lastSyncTime = null;

/**
 * Инициализация Firestore
 */
function getFirestore() {
    if (!firebase.apps.length) return null;
    return firebase.firestore();
}

/**
 * Получить ссылку на документ пользователя
 */
function getUserDocRef(userId) {
    const db = getFirestore();
    if (!db || !userId) return null;
    return db.collection(USERS_COLLECTION).doc(userId);
}

/**
 * Синхронизация при входе пользователя
 * Объединяет локальные данные с облачными
 */
async function syncOnLogin(user) {
    if (!user || isSyncing) return;

    isSyncing = true;
    updateSyncStatus('syncing');

    try {
        const userRef = getUserDocRef(user.uid);
        if (!userRef) {
            throw new Error('Firestore не инициализирован');
        }

        // Получаем данные из облака
        const doc = await userRef.get();
        const cloudData = doc.exists ? doc.data() : null;

        // Получаем локальные данные
        const localProgress = getLocalProgress();
        const localWords = getLocalWords();
        const localDiary = getLocalDiary();

        if (cloudData) {
            // Объединяем данные (cloud + local)
            const mergedData = mergeUserData(cloudData, localProgress, localWords, localDiary);

            // Сохраняем объединённые данные в облако
            await userRef.set(mergedData, { merge: true });

            // Обновляем локальное хранилище
            saveLocalProgress(mergedData.progress);
            saveLocalWords(mergedData.learnedWords);
            saveLocalDiary(mergedData.diary);

            console.log('[Sync] Данные объединены и синхронизированы');
        } else {
            // Новый пользователь - создаём документ с локальными данными
            const userData = {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                progress: localProgress,
                learnedWords: localWords,
                diary: localDiary
            };

            await userRef.set(userData);
            console.log('[Sync] Создан новый профиль пользователя');
        }

        lastSyncTime = new Date();
        updateSyncStatus('synced');

    } catch (error) {
        console.error('[Sync] Ошибка синхронизации:', error);
        updateSyncStatus('error');
    } finally {
        isSyncing = false;
    }
}

/**
 * Сохранить прогресс в облако
 */
async function saveProgressToCloud(progress) {
    const user = window.FirebaseAuth?.getCurrentUser();
    if (!user) return false;

    try {
        const userRef = getUserDocRef(user.uid);
        if (!userRef) return false;

        await userRef.update({
            progress: progress,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });

        console.log('[Sync] Прогресс сохранён в облако');
        return true;
    } catch (error) {
        console.error('[Sync] Ошибка сохранения прогресса:', error);
        return false;
    }
}

/**
 * Сохранить изученные слова в облако
 */
async function saveWordsToCloud(words) {
    const user = window.FirebaseAuth?.getCurrentUser();
    if (!user) return false;

    try {
        const userRef = getUserDocRef(user.uid);
        if (!userRef) return false;

        await userRef.update({
            learnedWords: words,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });

        console.log('[Sync] Слова сохранены в облако');
        return true;
    } catch (error) {
        console.error('[Sync] Ошибка сохранения слов:', error);
        return false;
    }
}

/**
 * Сохранить дневник в облако
 */
async function saveDiaryToCloud(diary) {
    const user = window.FirebaseAuth?.getCurrentUser();
    if (!user) return false;

    try {
        const userRef = getUserDocRef(user.uid);
        if (!userRef) return false;

        await userRef.set({
            diary: diary,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        console.log('[Sync] Дневник сохранён в облако');
        return true;
    } catch (error) {
        console.error('[Sync] Ошибка сохранения дневника:', error);
        return false;
    }
}

/**
 * Загрузить данные из облака
 */
async function loadFromCloud() {
    const user = window.FirebaseAuth?.getCurrentUser();
    if (!user) return null;

    try {
        const userRef = getUserDocRef(user.uid);
        if (!userRef) return null;

        const doc = await userRef.get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    } catch (error) {
        console.error('[Sync] Ошибка загрузки данных:', error);
        return null;
    }
}

/**
 * Объединение данных из облака и локального хранилища
 */
function mergeUserData(cloudData, localProgress, localWords, localDiary) {
    // Объединяем прогресс
    const mergedProgress = mergeProgress(
        cloudData.progress || {},
        localProgress || {}
    );

    // Объединяем изученные слова (убираем дубликаты)
    const mergedWords = mergeWords(
        cloudData.learnedWords || [],
        localWords || []
    );

    // Объединяем записи дневника (убираем дубликаты по id)
    const mergedDiary = mergeDiaryEntries(
        cloudData.diary || { entries: [] },
        localDiary || { entries: [] }
    );

    return {
        ...cloudData,
        progress: mergedProgress,
        learnedWords: mergedWords,
        diary: mergedDiary,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
}

/**
 * Объединение прогресса
 */
function mergeProgress(cloudProgress, localProgress) {
    const merged = {
        completedTexts: {},
        completedLessons: {},
        completedKpop: {},
        stats: {
            totalTexts: 0,
            totalLessons: 0,
            totalKpop: 0,
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            studyTimeMinutes: 0
        },
        achievements: []
    };

    // Объединяем completedTexts
    merged.completedTexts = {
        ...(cloudProgress.completedTexts || {}),
        ...(localProgress.completedTexts || {})
    };

    // Объединяем completedLessons
    merged.completedLessons = {
        ...(cloudProgress.completedLessons || {}),
        ...(localProgress.completedLessons || {})
    };

    // Объединяем completedKpop
    merged.completedKpop = {
        ...(cloudProgress.completedKpop || {}),
        ...(localProgress.completedKpop || {})
    };

    // Пересчитываем статистику
    merged.stats.totalTexts = Object.keys(merged.completedTexts).length;
    merged.stats.totalLessons = Object.keys(merged.completedLessons).length;
    merged.stats.totalKpop = Object.keys(merged.completedKpop).length;

    // Берём лучшие значения для серий
    merged.stats.currentStreak = Math.max(
        cloudProgress.stats?.currentStreak || 0,
        localProgress.stats?.currentStreak || 0
    );
    merged.stats.longestStreak = Math.max(
        cloudProgress.stats?.longestStreak || 0,
        localProgress.stats?.longestStreak || 0
    );

    // Берём максимум времени обучения (не суммируем, иначе удваивается при каждой синхронизации)
    merged.stats.studyTimeMinutes = Math.max(
        cloudProgress.stats?.studyTimeMinutes || 0,
        localProgress.stats?.studyTimeMinutes || 0
    );

    // Берём последнюю дату активности
    const cloudDate = cloudProgress.stats?.lastActivityDate;
    const localDate = localProgress.stats?.lastActivityDate;
    if (cloudDate && localDate) {
        merged.stats.lastActivityDate = new Date(cloudDate) > new Date(localDate)
            ? cloudDate : localDate;
    } else {
        merged.stats.lastActivityDate = cloudDate || localDate;
    }

    // Объединяем достижения (убираем дубликаты)
    const cloudAchievements = cloudProgress.achievements || [];
    const localAchievements = localProgress.achievements || [];
    merged.achievements = [...new Set([...cloudAchievements, ...localAchievements])];

    return merged;
}

/**
 * Объединение изученных слов
 */
function mergeWords(cloudWords, localWords) {
    const wordMap = new Map();

    // Добавляем облачные слова
    cloudWords.forEach(word => {
        const key = `${word.korean}-${word.textKey}`;
        wordMap.set(key, word);
    });

    // Добавляем локальные слова (перезаписывают если совпадают)
    localWords.forEach(word => {
        const key = `${word.korean}-${word.textKey}`;
        if (!wordMap.has(key)) {
            wordMap.set(key, word);
        }
    });

    return Array.from(wordMap.values());
}

/**
 * Объединение записей дневника (по id, побеждает более свежая версия)
 */
function mergeDiaryEntries(cloudDiary, localDiary) {
    const entryMap = new Map();

    (cloudDiary.entries || []).forEach(entry => entryMap.set(entry.id, entry));

    (localDiary.entries || []).forEach(entry => {
        const existing = entryMap.get(entry.id);
        const localTime = entry.updatedAt || entry.createdAt || '';
        const existingTime = existing ? (existing.updatedAt || existing.createdAt || '') : '';
        if (!existing || localTime > existingTime) {
            entryMap.set(entry.id, entry);
        }
    });

    const merged = Array.from(entryMap.values());
    merged.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return { entries: merged };
}

/**
 * Локальные функции для работы с localStorage
 */
function getLocalProgress() {
    try {
        const data = localStorage.getItem(LOCAL_PROGRESS_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('[Sync] Ошибка чтения локального прогресса:', error);
        return null;
    }
}

function saveLocalProgress(progress) {
    try {
        localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('[Sync] Ошибка сохранения локального прогресса:', error);
    }
}

function getLocalWords() {
    try {
        const data = localStorage.getItem(LOCAL_WORDS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('[Sync] Ошибка чтения локальных слов:', error);
        return [];
    }
}

function saveLocalWords(words) {
    try {
        localStorage.setItem(LOCAL_WORDS_KEY, JSON.stringify(words));
    } catch (error) {
        console.error('[Sync] Ошибка сохранения локальных слов:', error);
    }
}

function getLocalDiary() {
    try {
        const data = localStorage.getItem(LOCAL_DIARY_KEY);
        return data ? JSON.parse(data) : { entries: [] };
    } catch (error) {
        console.error('[Sync] Ошибка чтения локального дневника:', error);
        return { entries: [] };
    }
}

function saveLocalDiary(diary) {
    try {
        localStorage.setItem(LOCAL_DIARY_KEY, JSON.stringify(diary));
    } catch (error) {
        console.error('[Sync] Ошибка сохранения локального дневника:', error);
    }
}

/**
 * Обновление статуса синхронизации в UI
 */
function updateSyncStatus(status) {
    const syncStatusEl = document.getElementById('sync-status');
    const syncIndicator = document.getElementById('sync-indicator');

    if (syncStatusEl) {
        switch (status) {
            case 'syncing':
                syncStatusEl.textContent = 'Синхронизация...';
                syncStatusEl.className = 'sync-status syncing';
                break;
            case 'synced':
                syncStatusEl.textContent = 'Синхронизировано';
                syncStatusEl.className = 'sync-status synced';
                break;
            case 'error':
                syncStatusEl.textContent = 'Ошибка синхронизации';
                syncStatusEl.className = 'sync-status error';
                break;
            case 'local':
                syncStatusEl.textContent = 'Только локально';
                syncStatusEl.className = 'sync-status local';
                break;
        }
    }

    if (syncIndicator) {
        syncIndicator.className = `sync-indicator ${status}`;
    }
}

/**
 * Ручная синхронизация
 */
async function manualSync() {
    const user = window.FirebaseAuth?.getCurrentUser();
    if (!user) {
        console.log('[Sync] Пользователь не авторизован');
        return;
    }

    await syncOnLogin(user);
}

/**
 * Экспорт всех данных пользователя (для резервной копии)
 */
async function exportUserData() {
    const progress = getLocalProgress();
    const words = getLocalWords();
    const diary = getLocalDiary();

    const exportData = {
        exportDate: new Date().toISOString(),
        progress: progress,
        learnedWords: words,
        diary: diary
    };

    // Создаём и скачиваем файл
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `miso-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    console.log('[Sync] Данные экспортированы');
}

/**
 * Импорт данных пользователя из файла
 */
async function importUserData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const data = JSON.parse(e.target.result);

                if (data.progress) {
                    saveLocalProgress(data.progress);
                }
                if (data.learnedWords) {
                    saveLocalWords(data.learnedWords);
                }
                if (data.diary) {
                    saveLocalDiary(data.diary);
                }

                // Синхронизируем с облаком если авторизован
                const user = window.FirebaseAuth?.getCurrentUser();
                if (user) {
                    await syncOnLogin(user);
                }

                console.log('[Sync] Данные импортированы');
                resolve(true);
            } catch (error) {
                console.error('[Sync] Ошибка импорта:', error);
                reject(error);
            }
        };
        reader.readAsText(file);
    });
}

// Экспорт функций
window.FirebaseSync = {
    syncOnLogin,
    saveProgressToCloud,
    saveWordsToCloud,
    saveDiaryToCloud,
    loadFromCloud,
    manualSync,
    exportUserData,
    importUserData,
    getLocalProgress,
    saveLocalProgress,
    getLocalWords,
    saveLocalWords,
    getLocalDiary,
    saveLocalDiary
};

console.log('[Sync] Module loaded');
