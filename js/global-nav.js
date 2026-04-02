/**
 * Global Navigation Component v2.0
 * Единая навигация для всех страниц Jane Korea
 * Desktop: top bar с ссылками, поиском, статистикой, auth
 * Mobile: компактный top bar + bottom tab bar + hamburger overlay
 */

(function() {
    'use strict';

    // =============================================
    // PATH PREFIX — определяем из src скрипта
    // =============================================
    function getPathPrefix() {
        var scripts = document.querySelectorAll('script[src*="global-nav"]');
        if (scripts.length > 0) {
            var src = scripts[scripts.length - 1].getAttribute('src');
            return src.replace('js/global-nav.js', '');
        }
        return '';
    }

    var PREFIX = getPathPrefix();

    // =============================================
    // LANGUAGE DETECTION
    // =============================================
    function detectLanguage() {
        var path = window.location.pathname;
        if (path.indexOf('/en/') !== -1) return 'en';
        return 'ru';
    }

    var LANG = detectLanguage();

    // EN pages list (pages that exist in /en/)
    var EN_PAGES = ['index.html', 'lessons.html', 'reading-texts.html', 'kpop-learning.html',
        'profile.html', 'about.html', 'faq.html'];

    function getLangSwitchUrl() {
        var path = window.location.pathname;
        var search = window.location.search;
        var pageName = path.split('/').pop() || 'index.html';
        if (LANG === 'en') {
            return PREFIX + pageName + search;
        }
        if (EN_PAGES.indexOf(pageName) !== -1) {
            return PREFIX + 'en/' + pageName + search;
        }
        return PREFIX + 'en/index.html';
    }

    // For EN pages, nav links to sibling files (same /en/ folder)
    // For links to RU-only content, use PREFIX (goes up to root)
    function getPageUrl(filename) {
        if (LANG === 'en' && EN_PAGES.indexOf(filename) !== -1) {
            return filename;
        }
        return PREFIX + filename;
    }

    var STRINGS = {
        ru: {
            navHome: 'Главная', navLessons: 'Уроки', navTexts: 'Тексты',
            navVocab: 'Словарь', navKpop: 'K-POP', navProfile: 'Профиль',
            navMore: 'Ещё', navSearch: 'Поиск', navMenu: 'Меню',
            login: 'Войти', loginGoogle: 'Войти через Google', logout: 'Выйти',
            myProfile: 'Мой профиль',
            guestWarning: 'Прогресс не сохраняется',
            guestMobileWarning: 'Прогресс не сохраняется. Войдите, чтобы сохранить!',
            statsDays: 'Дней подряд', statsTexts: 'Текстов', statsLessons: 'Уроков',
            statsTitle: 'Статистика', statsLink: 'Подробная статистика',
            searchPlaceholder: 'Поиск уроков, слов, тем...',
            searchMobilePlaceholder: 'Поиск...',
            searchEmpty: 'Ничего не найдено',
            searchMore: 'Ещё {n} результатов...',
            footerDesc: 'Интерактивная платформа для изучения корейского языка через тексты, грамматику и K-POP',
            footerLearning: 'Обучение', footerGrammar: 'Уроки грамматики',
            footerReading: 'Тексты для чтения', footerVocab: 'Словарь',
            footerProject: 'Проект', footerAbout: 'О проекте',
            footerLevels: 'Уровни',
            footerRights: 'Все права защищены.',
            langSwitch: 'EN', langSwitchTitle: 'English version'
        },
        en: {
            navHome: 'Home', navLessons: 'Lessons', navTexts: 'Texts',
            navVocab: 'Vocabulary', navKpop: 'K-POP', navProfile: 'Profile',
            navMore: 'More', navSearch: 'Search', navMenu: 'Menu',
            login: 'Sign In', loginGoogle: 'Sign in with Google', logout: 'Sign Out',
            myProfile: 'My Profile',
            guestWarning: 'Progress is not saved',
            guestMobileWarning: 'Progress is not saved. Sign in to save!',
            statsDays: 'Day streak', statsTexts: 'Texts', statsLessons: 'Lessons',
            statsTitle: 'Statistics', statsLink: 'Detailed statistics',
            searchPlaceholder: 'Search lessons, words, topics...',
            searchMobilePlaceholder: 'Search...',
            searchEmpty: 'Nothing found',
            searchMore: '{n} more results...',
            footerDesc: 'Interactive platform for learning Korean through texts, grammar, and K-POP',
            footerLearning: 'Learning', footerGrammar: 'Grammar Lessons',
            footerReading: 'Reading Texts', footerVocab: 'Vocabulary',
            footerProject: 'Project', footerAbout: 'About',
            footerLevels: 'Levels',
            footerRights: 'All rights reserved.',
            langSwitch: 'RU', langSwitchTitle: 'Русская версия'
        }
    };

    var S = STRINGS[LANG];

    // =============================================
    // ACTIVE PAGE DETECTION
    // =============================================
    function getActivePage() {
        var path = window.location.pathname;
        var pageName = path.split('/').pop() || 'index.html';

        var pageMap = {
            'index.html': 'index',
            'lessons.html': 'lessons',
            'reading-texts.html': 'texts',
            'reading-content.html': 'texts',
            'vocabulary-learning.html': 'vocab',
            'kpop-learning.html': 'kpop',
            'profile.html': 'profile',
            'group-blackpink.html': 'kpop',
            'blackpink-vocabulary-learning.html': 'kpop',
            'blackpink-songs-learning.html': 'kpop',
            'blackpink-culture-learning.html': 'kpop',
            'blackpink-members-learning.html': 'kpop',
            'blackpink-songs.html': 'kpop',
            'boombayah-video.html': 'kpop',
            'song-boombayah.html': 'kpop',
            'song-whistle.html': 'kpop',
            'song-playing-with-fire.html': 'kpop',
            'song-ddu-du.html': 'kpop',
            'group-bts.html': 'kpop',
            'phrases.html': 'phrases',
            'games.html': 'games',
            'kpop-fan-phrases.html': 'kpop',
            'kpop-industry.html': 'kpop',
            'kpop-song-learn.html': 'kpop',
            'korean-trends.html': 'index',
            'daily-korean.html': 'index',
            'handwriting.html': 'index',
            'korean-culture.html': 'index',
            'challenge.html': 'index',
            'diary.html': 'profile',
            'dramas.html': 'index',
            'listening.html': 'index',
            'about.html': 'index',
            'faq.html': 'index'
        };

        if (pageMap[pageName]) return pageMap[pageName];

        if (path.includes('/lesson_') || path.includes('/level_')) return 'lessons';
        if (path.includes('/vocabulary/') || path.includes('/vocabulary-')) return 'vocab';

        return '';
    }

    var activePage = getActivePage();

    // =============================================
    // SVG ICONS
    // =============================================
    var ICONS = {
        home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
        texts: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
        vocab: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
        music: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
        user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
        more: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
        close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        stats: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
        logout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2 2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
    };

    // =============================================
    // NAV LINKS DATA
    // =============================================
    var NAV_LINKS = [
        { id: 'index', label: S.navHome, icon: ICONS.home, url: 'index.html' },
        { id: 'lessons', label: S.navLessons, icon: ICONS.book, url: 'lessons.html' },
        { id: 'texts', label: S.navTexts, icon: ICONS.texts, url: 'reading-texts.html' },
        { id: 'vocab', label: S.navVocab, icon: ICONS.vocab, url: 'vocabulary-learning.html' },
        { id: 'kpop', label: S.navKpop, icon: ICONS.music, url: 'kpop-learning.html' },
        { id: 'profile', label: S.navProfile, icon: ICONS.user, url: 'profile.html' }
    ];

    // Bottom bar: первые 4 + "Ещё"
    var BOTTOM_LINKS = NAV_LINKS.slice(0, 4);

    // =============================================
    // SEARCH DATA (~121 записей)
    // =============================================
    var SEARCH_DATA = [
        // Основные страницы
        { t: 'Главная страница', u: 'index.html', k: 'главная home' },
        { t: 'Все уроки грамматики', u: 'lessons.html', k: 'уроки грамматика lessons' },
        { t: 'Мой профиль и прогресс', u: 'profile.html', k: 'профиль прогресс статистика profile' },
        { t: 'Практика слов', u: 'vocabulary-learning.html', k: 'словарь слова vocabulary' },
        { t: 'Разговорные фразы', u: 'phrases.html', k: 'фразы разговорные phrases кафе такси врач магазин аэропорт отель ресторан ситуации' },
        { t: 'Мини-игры', u: 'games.html', k: 'игры games memory пары виселица слово собери угадай диктант диалог перевод' },
        { t: 'Корейский на каждый день', u: 'daily-korean.html', k: 'диалоги каждый день ситуации разговор daily кофе метро врач ресторан магазин банк почта' },
        { t: 'Корейский письменный', u: 'handwriting.html', k: 'письмо хангыль почерк штрихи рукописный handwriting canvas писать' },
        { t: 'Корейская культура', u: 'korean-culture.html', k: 'культура нунчи хан традиции общество culture этикет возраст конфуцианство' },
        { t: 'Челлендж 30 дней', u: 'challenge.html', k: 'челлендж вызов 30 дней challenge план обучения мотивация' },
        { t: 'Мой дневник на корейском', u: 'diary.html', k: 'дневник записи diary писать текст практика журнал' },
        { t: 'Учи корейский по дорамам', u: 'dramas.html', k: 'дорамы сериалы kdrama фразы фильмы drama' },
        { t: 'Аудирование', u: 'listening.html', k: 'аудирование слушание listening слух восприятие речь' },
        { t: 'Урок 90: Подготовка к TOPIK', u: 'lesson_90_topik_prep/index.html', k: 'topik экзамен подготовка тест' },
        { t: 'Урок 91: Написание эссе', u: 'lesson_91_essay_writing/index.html', k: 'эссе сочинение письмо writing' },
        { t: 'Урок 92: Традиции и праздники', u: 'lesson_92_traditions/index.html', k: 'традиции праздники соллаль чусок ханбок' },
        { t: 'Урок 93: Большие числа и деньги', u: 'lesson_93_large_numbers/index.html', k: 'числа деньги воны цены' },
        { t: 'Урок 94: Медицина и аптека', u: 'lesson_94_medicine/index.html', k: 'медицина аптека врач больница лекарства' },

        // Уроки (53 root)
        { t: 'Урок 1: Знакомство с Кореей', u: 'lesson_01_korea/index.html', k: 'корея знакомство 1' },
        { t: 'Урок 2: Корейский алфавит 한글', u: 'lesson_02_alphabet/index.html', k: 'алфавит хангыль 2' },
        { t: 'Урок 3: Приветствие и знакомство', u: 'lesson_03_greetings/index.html', k: 'приветствие знакомство 3' },
        { t: 'Урок 4: Числа и время', u: 'lesson_04_numbers/index.html', k: 'числа время 4' },
        { t: 'Урок 5: Семья и отношения', u: 'lesson_05_family/index.html', k: 'семья отношения 5' },
        { t: 'Урок 6: Базовая грамматика 이/가 и 은/는', u: 'lesson_06_grammar/index.html', k: 'грамматика частицы 6' },
        { t: 'Урок 7: Времена глаголов', u: 'lesson_07_verb_tenses/index.html', k: 'глаголы времена 7' },
        { t: 'Урок 8: Формы вежливости 존댓말', u: 'lesson_08_politeness/index.html', k: 'вежливость формы 8' },
        { t: 'Урок 9: Отрицательные формы 부정문', u: 'lesson_09_negation/index.html', k: 'отрицание негативные 9' },
        { t: 'Урок 10: Связка 이에요/예요', u: 'lesson_10_copula/index.html', k: 'связка 10' },
        { t: 'Урок 11: Неформальная связка 이야/야', u: 'lesson_11_informal_copula/index.html', k: 'неформальная связка 11' },
        { t: 'Урок 12: Официальная связка 입니다', u: 'lesson_12_formal_copula/index.html', k: 'официальная связка 12' },
        { t: 'Урок 13: Отрицание связок', u: 'lesson_13_copula_negation/index.html', k: 'отрицание связка 13' },
        { t: 'Урок 14: Указательные слова 이것/그것/저것', u: 'lesson_14_demonstratives/index.html', k: 'указательные 14' },
        { t: 'Урок 15: Глаголы иметь/не иметь 있어요/없어요', u: 'lesson_15_demonstratives_practice/index.html', k: 'иметь 15' },
        { t: 'Урок 16: Глаголы местонахождения', u: 'lesson_16_location_verbs/index.html', k: 'местонахождение 16' },
        { t: 'Урок 17: Спряжение глаголов 아요/어요', u: 'lesson_17_verb_conjugation/index.html', k: 'спряжение 17' },
        { t: 'Урок 18: Просто-личный стиль глаголов', u: 'lesson_18_informal_verbs/index.html', k: 'неформальный стиль 18' },
        { t: 'Урок 19: Вежливо-официальный стиль 습니다', u: 'lesson_19_formal_verbs/index.html', k: 'официальный стиль 19' },
        { t: 'Урок 20: Винительный падеж 을/를', u: 'lesson_20_accusative_case/index.html', k: 'винительный падеж 20' },
        { t: 'Урок 21: Окончание места действия 에서', u: 'lesson_21_location_ending/index.html', k: 'место действия 21' },
        { t: 'Урок 22: Окончание направления 에', u: 'lesson_22_direction_ending/index.html', k: 'направление 22' },
        { t: 'Урок 23: Временной показатель 에', u: 'lesson_23_time_marker/index.html', k: 'время показатель 23' },
        { t: 'Урок 24: Склонение прилагательных', u: 'lesson_24_adjective_conjugation/index.html', k: 'прилагательные 24' },
        { t: 'Урок 25: Союз 하고', u: 'lesson_25_hago_conjunction/index.html', k: 'союз хаго 25' },
        { t: 'Урок 26: Соединение существительных 과/와', u: 'lesson_26_conjunction_particles/index.html', k: 'соединение 26' },
        { t: 'Урок 27: Прошедшее время', u: 'lesson_27_past_tense/index.html', k: 'прошедшее время 27' },
        { t: 'Урок 28: Соединительное окончание -고', u: 'lesson_28_conjunction_go/index.html', k: 'соединительное 28' },
        { t: 'Урок 29: Последовательность действий -고', u: 'lesson_29_sequence_go/index.html', k: 'последовательность 29' },
        { t: 'Урок 30: Будущее время 을/ㄹ 거예요', u: 'lesson_30_future_tense/index.html', k: 'будущее время 30' },
        { t: 'Урок 32: Дательный падеж 에게/한테/께', u: 'lesson_32_dative_case/index.html', k: 'дательный падеж 32' },
        { t: 'Урок 33: Притяжательный падеж 의', u: 'lesson_33_possessive_case/index.html', k: 'притяжательный 33' },
        { t: 'Урок 34: Выражение желания 고 싶다', u: 'lesson_34_want_desire/index.html', k: 'желание хотеть 34' },
        { t: 'Урок 38: Частица тоже 도', u: 'lesson_38_also_do/index.html', k: 'тоже также 38' },
        { t: 'Урок 39: Частица только 만', u: 'lesson_39_only_man/index.html', k: 'только 39' },
        { t: 'Урок 61: Действия для других 아/어 주다', u: 'lesson_61_helping_actions/index.html', k: 'помощь действия 61' },
        { t: 'Урок 62: Долженствование 아/어야 하다', u: 'lesson_62_obligation/index.html', k: 'долженствование 62' },
        { t: 'Урок 63: Возможность -(으)ㄹ 수 있다', u: 'lesson_63_ability/index.html', k: 'возможность способность 63' },
        { t: 'Урок 64: Условие для намерения -(으)려면', u: 'lesson_64_conditional_intention/index.html', k: 'условие намерение 64' },
        { t: 'Урок 65: Минимальные условия -기만 하면', u: 'lesson_65_minimum_condition/index.html', k: 'минимальные условия 65' },
        { t: 'Урок 66: Разрешение -아도 되다', u: 'lesson_66_permission/index.html', k: 'разрешение 66' },
        { t: 'Урок 67: Запрет -(으)면 안 되다', u: 'lesson_67_prohibition/index.html', k: 'запрет 67' },
        { t: 'Урок 68: Неспособность -지 못하다', u: 'lesson_68_inability_ji_moshada/index.html', k: 'неспособность 68' },
        { t: 'Урок 69: Намерение и обещание -(으)ㄹ게요', u: 'lesson_69_intention_promise/index.html', k: 'намерение обещание 69' },
        { t: 'Урок 70: Попытка и опыт -아/어 보다', u: 'lesson_70_trying_experience/index.html', k: 'попытка опыт 70' },
        { t: 'Урок 71: От кого -에게서/-한테서', u: 'lesson_71_from_whom/index.html', k: 'от кого 71' },
        { t: 'Урок 72: Намерение и воля -겠-', u: 'lesson_72_future_intention/index.html', k: 'воля 72' },
        { t: 'Урок 73: Предположение -겠-', u: 'lesson_73_supposition/index.html', k: 'предположение 73' },
        { t: 'Урок 74: ㅂ-неправильные глаголы', u: 'lesson_74_irregular_bieup/index.html', k: 'неправильные 74' },
        { t: 'Урок 75: ㄷ-неправильные глаголы', u: 'lesson_75_irregular_digeut/index.html', k: 'неправильные 75' },
        { t: 'Урок 76: ㅅ-неправильные глаголы', u: 'lesson_76_irregular_siot/index.html', k: 'неправильные 76' },
        { t: 'Урок 77: ㅡ-неправильные глаголы', u: 'lesson_77_irregular_eu/index.html', k: 'неправильные 77' },
        { t: 'Урок 78: ㅎ-неправильные глаголы', u: 'lesson_78_irregular_hieut/index.html', k: 'неправильные 78' },
        { t: 'Урок 79: ㄹ-неправильные глаголы', u: 'lesson_79_irregular_rieul/index.html', k: 'неправильные 79' },
        { t: 'Урок 80: Обладание 가지다/갖다', u: 'lesson_80_possession_advanced/index.html', k: 'обладание 80' },
        { t: 'Урок 81: Сравнительные конструкции -보다', u: 'lesson_81_comparative_constructions/index.html', k: 'сравнение 81' },
        { t: 'Урок 82: Причина и следствие -기 때문에', u: 'lesson_82_reason_consequence/index.html', k: 'причина следствие 82' },
        { t: 'Урок 83: Пассивные конструкции', u: 'lesson_83_passive_constructions/index.html', k: 'пассив залог 83' },

        // Уроки level_2
        { t: 'Уровень 2: Основы грамматики', u: 'level_2/lesson_01_grammar/index.html', k: 'грамматика уровень 2' },
        { t: 'Уровень 2: Формы вежливости', u: 'level_2/lesson_02_politeness/index.html', k: 'вежливость уровень 2' },

        // Уроки level_6
        { t: 'Уровень 6: Академическая лексика', u: 'level_6/lesson_academic_vocabulary/index.html', k: 'академическая лексика 6' },
        { t: 'Уровень 6: Деловая лексика', u: 'level_6/lesson_business_vocabulary/index.html', k: 'деловая лексика бизнес 6' },
        { t: 'Уровень 6: Идиомы и фразеологизмы', u: 'level_6/lesson_idioms/index.html', k: 'идиомы фразеологизмы 6' },
        { t: 'Уровень 6: Литературные выражения', u: 'level_6/lesson_literary_expressions/index.html', k: 'литературные выражения 6' },
        { t: 'Уровень 6: Социальные темы', u: 'level_6/lesson_social_topics/index.html', k: 'социальные темы 6' },

        // Уровни
        { t: '1급 - Элементарный уровень', u: 'level_1/index.html', k: 'уровень 1 элементарный A1' },
        { t: '2급 - Базовый уровень', u: 'level_2/index.html', k: 'уровень 2 базовый A2' },
        { t: '3급 - Средний уровень', u: 'level_3/index.html', k: 'уровень 3 средний B1' },
        { t: '4급 - Средне-продвинутый уровень', u: 'level_4/index.html', k: 'уровень 4 продвинутый B2' },
        { t: '5급 - Продвинутый уровень', u: 'level_5/index.html', k: 'уровень 5 продвинутый C1' },
        { t: '6급 - Мастерский уровень', u: 'level_6/index.html', k: 'уровень 6 мастерский C2' },

        // Словарь
        { t: 'Словарь: Прилагательные 형용사', u: 'vocabulary/adjectives/index.html', k: 'прилагательные' },
        { t: 'Словарь: Животные 동물', u: 'vocabulary/animals/index.html', k: 'животные' },
        { t: 'Словарь: Части тела 몸', u: 'vocabulary/body/index.html', k: 'тело части' },
        { t: 'Словарь: Одежда 옷', u: 'vocabulary/clothes/index.html', k: 'одежда' },
        { t: 'Словарь: Цвета 색깔', u: 'vocabulary/colors/index.html', k: 'цвета' },
        { t: 'Словарь: Эмоции', u: 'vocabulary/emotions/index.html', k: 'эмоции чувства' },
        { t: 'Словарь: Корейская еда', u: 'vocabulary/food/index.html', k: 'еда' },
        { t: 'Словарь: Дом и мебель 집과 가구', u: 'vocabulary/house/index.html', k: 'дом мебель' },
        { t: 'Словарь: Профессии 직업', u: 'vocabulary/professions/index.html', k: 'профессии работа' },
        { t: 'Словарь: В школе 학교에서', u: 'vocabulary/school/index.html', k: 'школа учёба' },
        { t: 'Словарь: Действия 동사', u: 'vocabulary/verbs/index.html', k: 'глаголы действия' },
        { t: 'Словарь: Погода 날씨', u: 'vocabulary/weather/index.html', k: 'погода' },
        { t: 'Словарь: Страны и национальности 나라', u: 'vocabulary/countries/index.html', k: 'страны национальности' },
        { t: 'Словарь: Еда и напитки 음식과 음료', u: 'vocabulary/basicfood/index.html', k: 'еда напитки фрукты' },
        { t: 'Словарь: Времена года и месяцы 계절', u: 'vocabulary/seasons/index.html', k: 'времена сезоны месяцы' },
        { t: 'Словарь: Транспорт 교통', u: 'vocabulary/transport/index.html', k: 'транспорт автобус метро' },
        { t: 'Словарь: Дни недели и время 요일', u: 'vocabulary/daystime/index.html', k: 'дни недели время' },
        { t: 'Словарь: Вопросительные слова 의문사', u: 'vocabulary/questions/index.html', k: 'вопросы вопросительные' },
        { t: 'Словарь: Союзы 접속사', u: 'vocabulary/conjunctions/index.html', k: 'союзы и но поэтому грамматика' },
        { t: 'Словарь: Город и места 도시', u: 'vocabulary/city/index.html', k: 'город места больница школа парк кафе' },
        { t: 'Словарь: Хобби 취미', u: 'vocabulary/hobbies/index.html', k: 'хобби увлечения свободное время музыка спорт' },
        { t: 'Словарь: Деньги и покупки 돈', u: 'vocabulary/money/index.html', k: 'деньги покупки цена дорого дешево вон' },

        // K-POP
        { t: 'K-POP: Учим корейский через музыку', u: 'kpop-learning.html', k: 'kpop музыка' },
        { t: 'BLACKPINK 블랙핑크', u: 'group-blackpink.html', k: 'blackpink блэкпинк' },
        { t: 'K-POP Словарь с BLACKPINK', u: 'blackpink-vocabulary-learning.html', k: 'blackpink словарь' },
        { t: 'Тексты песен BLACKPINK', u: 'blackpink-songs-learning.html', k: 'blackpink песни тексты' },
        { t: 'Корейская культура через BLACKPINK', u: 'blackpink-culture-learning.html', k: 'blackpink культура' },
        { t: 'Участницы BLACKPINK', u: 'blackpink-members-learning.html', k: 'blackpink участницы' },
        { t: 'BLACKPINK Songs 2016', u: 'blackpink-songs.html', k: 'blackpink songs 2016' },
        { t: 'BOOMBAYAH Music Video', u: 'boombayah-video.html', k: 'boombayah видео' },
        { t: 'BTS 방탄소년단', u: 'group-bts.html', k: 'bts бтс бантан bangtan' },

        // Тексты по уровням и категориям
        { t: 'Тексты для чтения', u: 'reading-texts.html', k: 'тексты чтение reading' },
        { t: 'Тексты 1급 - О себе', u: 'reading-texts.html?level=1&category=personal', k: 'тексты 1 о себе personal' },
        { t: 'Тексты 1급 - Рассказы', u: 'reading-texts.html?level=1&category=stories', k: 'тексты 1 рассказы stories' },
        { t: 'Тексты 1급 - Культура', u: 'reading-texts.html?level=1&category=culture', k: 'тексты 1 культура culture' },
        { t: 'Тексты 1급 - Путешествия', u: 'reading-texts.html?level=1&category=travel', k: 'тексты 1 путешествия travel' },
        { t: 'Тексты 1급 - Еда', u: 'reading-texts.html?level=1&category=food', k: 'тексты 1 еда food' },
        { t: 'Тексты 2급 - О себе', u: 'reading-texts.html?level=2&category=personal', k: 'тексты 2 о себе' },
        { t: 'Тексты 2급 - Рассказы', u: 'reading-texts.html?level=2&category=stories', k: 'тексты 2 рассказы' },
        { t: 'Тексты 2급 - Культура', u: 'reading-texts.html?level=2&category=culture', k: 'тексты 2 культура' },
        { t: 'Тексты 2급 - Путешествия', u: 'reading-texts.html?level=2&category=travel', k: 'тексты 2 путешествия' },
        { t: 'Тексты 2급 - Еда', u: 'reading-texts.html?level=2&category=food', k: 'тексты 2 еда' },
        { t: 'Тексты 3급 - О себе', u: 'reading-texts.html?level=3&category=personal', k: 'тексты 3 о себе' },
        { t: 'Тексты 3급 - Рассказы', u: 'reading-texts.html?level=3&category=stories', k: 'тексты 3 рассказы' },
        { t: 'Тексты 3급 - Культура', u: 'reading-texts.html?level=3&category=culture', k: 'тексты 3 культура' },
        { t: 'Тексты 3급 - Путешествия', u: 'reading-texts.html?level=3&category=travel', k: 'тексты 3 путешествия' },
        { t: 'Тексты 3급 - Еда', u: 'reading-texts.html?level=3&category=food', k: 'тексты 3 еда' },
        { t: 'Тексты 4급 - О себе', u: 'reading-texts.html?level=4&category=personal', k: 'тексты 4 о себе' },
        { t: 'Тексты 4급 - Рассказы', u: 'reading-texts.html?level=4&category=stories', k: 'тексты 4 рассказы' },
        { t: 'Тексты 4급 - Культура', u: 'reading-texts.html?level=4&category=culture', k: 'тексты 4 культура' },
        { t: 'Тексты 4급 - Путешествия', u: 'reading-texts.html?level=4&category=travel', k: 'тексты 4 путешествия' },
        { t: 'Тексты 4급 - Еда', u: 'reading-texts.html?level=4&category=food', k: 'тексты 4 еда' },
        { t: 'Тексты 5급 - О себе', u: 'reading-texts.html?level=5&category=personal', k: 'тексты 5 о себе' },
        { t: 'Тексты 5급 - Рассказы', u: 'reading-texts.html?level=5&category=stories', k: 'тексты 5 рассказы' },
        { t: 'Тексты 5급 - Культура', u: 'reading-texts.html?level=5&category=culture', k: 'тексты 5 культура' },
        { t: 'Тексты 5급 - Путешествия', u: 'reading-texts.html?level=5&category=travel', k: 'тексты 5 путешествия' },
        { t: 'Тексты 5급 - Еда', u: 'reading-texts.html?level=5&category=food', k: 'тексты 5 еда' },
        { t: 'Тексты 6급 - О себе', u: 'reading-texts.html?level=6&category=personal', k: 'тексты 6 о себе' },
        { t: 'Тексты 6급 - Рассказы', u: 'reading-texts.html?level=6&category=stories', k: 'тексты 6 рассказы' },
        { t: 'Тексты 6급 - Культура', u: 'reading-texts.html?level=6&category=culture', k: 'тексты 6 культура' },
        { t: 'Тексты 6급 - Путешествия', u: 'reading-texts.html?level=6&category=travel', k: 'тексты 6 путешествия' },
        { t: 'Тексты 6급 - Еда', u: 'reading-texts.html?level=6&category=food', k: 'тексты 6 еда' }
    ];

    // =============================================
    // SEARCH DATA EN
    // =============================================
    var SEARCH_DATA_EN = [
        { t: 'Home', u: 'index.html', k: 'home main' },
        { t: 'Grammar Lessons', u: 'lessons.html', k: 'lessons grammar' },
        { t: 'My Profile', u: 'profile.html', k: 'profile progress statistics' },
        { t: 'Vocabulary Practice', u: 'vocabulary-learning.html', k: 'vocabulary words' },
        { t: 'Reading Texts', u: 'reading-texts.html', k: 'texts reading levels' },
        { t: 'K-POP Learning', u: 'kpop-learning.html', k: 'kpop music blackpink bts' },
        { t: 'About the Project', u: 'about.html', k: 'about project' },
        { t: 'FAQ', u: 'faq.html', k: 'faq questions help' },
        { t: 'BLACKPINK', u: 'group-blackpink.html', k: 'blackpink kpop' },
        { t: 'BTS', u: 'group-bts.html', k: 'bts bangtan kpop' },
        { t: 'Level 1 Texts', u: 'reading-texts.html?level=1', k: 'level 1 beginner A1' },
        { t: 'Level 2 Texts', u: 'reading-texts.html?level=2', k: 'level 2 basic A2' },
        { t: 'Level 3 Texts', u: 'reading-texts.html?level=3', k: 'level 3 intermediate B1' },
        { t: 'Level 4 Texts', u: 'reading-texts.html?level=4', k: 'level 4 upper B2' },
        { t: 'Level 5 Texts', u: 'reading-texts.html?level=5', k: 'level 5 advanced C1' },
        { t: 'Level 6 Texts', u: 'reading-texts.html?level=6', k: 'level 6 mastery C2' }
    ];

    var ACTIVE_SEARCH_DATA = (LANG === 'en') ? SEARCH_DATA_EN : SEARCH_DATA;

    // =============================================
    // CSS STYLES
    // =============================================
    var navCSS = '\
    <style id="jk-nav-styles">\
        /* Reset for nav elements */\
        .jk-nav *, .jk-bottom-bar *, .jk-mobile-menu * { box-sizing: border-box; margin: 0; padding: 0; }\
        .jk-nav a, .jk-bottom-bar a, .jk-mobile-menu a { text-decoration: none; }\
\
        /* ======== TOP NAV BAR ======== */\
        .jk-nav {\
            position: sticky;\
            top: 0;\
            left: 0;\
            right: 0;\
            z-index: 9999;\
            background: rgba(255, 255, 255, 0.95);\
            backdrop-filter: blur(12px);\
            -webkit-backdrop-filter: blur(12px);\
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);\
            border-bottom: 1px solid rgba(255, 107, 157, 0.08);\
            font-family: "Noto Sans KR", "Malgun Gothic", sans-serif;\
        }\
        .jk-nav-inner {\
            display: flex;\
            align-items: center;\
            justify-content: space-between;\
            padding: 8px 16px;\
            max-width: 1400px;\
            margin: 0 auto;\
            gap: 8px;\
        }\
\
        /* Brand — hidden until decided */\
        .jk-nav-brand { display: none; }\
\
        /* Desktop nav links — hidden on mobile */\
        .jk-nav-links {\
            display: none;\
            gap: 4px;\
            flex-wrap: wrap;\
            justify-content: center;\
        }\
        .jk-nav-link {\
            color: #555;\
            padding: 8px 14px;\
            border-radius: 20px;\
            font-size: 14px;\
            font-weight: 500;\
            transition: all 0.3s ease;\
            white-space: nowrap;\
            display: flex;\
            align-items: center;\
            gap: 6px;\
        }\
        .jk-nav-link:hover {\
            background: rgba(255, 107, 157, 0.1);\
            color: #ff6b9d;\
        }\
        .jk-nav-link.jk-active {\
            background: linear-gradient(135deg, #ff6b9d, #c44569);\
            color: white;\
        }\
        .jk-nav-link .jk-nav-icon { display: none; }\
\
        /* Right actions */\
        .jk-nav-actions {\
            display: flex;\
            align-items: center;\
            gap: 6px;\
            flex-shrink: 0;\
        }\
        .jk-nav-action-btn {\
            background: none;\
            border: none;\
            cursor: pointer;\
            color: #666;\
            padding: 8px;\
            border-radius: 50%;\
            transition: all 0.2s ease;\
            display: flex;\
            align-items: center;\
            justify-content: center;\
            position: relative;\
        }\
        .jk-nav-action-btn:hover {\
            background: rgba(255, 107, 157, 0.1);\
            color: #ff6b9d;\
        }\
\
        /* Stats button */\
        .jk-nav-stats-toggle {\
            display: none;\
            gap: 4px;\
            font-size: 13px;\
            font-weight: 600;\
            padding: 6px 12px;\
            border-radius: 20px;\
            background: rgba(255, 107, 157, 0.08);\
            color: #c44569;\
        }\
        .jk-nav-stats-toggle:hover {\
            background: rgba(255, 107, 157, 0.15);\
        }\
\
        /* Auth section */\
        .jk-nav-auth { display: flex; align-items: center; gap: 8px; }\
        .jk-nav-guest { display: flex; align-items: center; gap: 6px; }\
        .jk-nav-login-btn {\
            background: linear-gradient(135deg, #ff6b9d, #c44569);\
            color: white;\
            border: none;\
            padding: 6px 16px;\
            border-radius: 20px;\
            font-size: 13px;\
            font-weight: 600;\
            cursor: pointer;\
            transition: all 0.2s ease;\
            font-family: "Noto Sans KR", sans-serif;\
        }\
        .jk-nav-login-btn:hover {\
            transform: scale(1.03);\
            box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);\
        }\
        .jk-nav-user { display: flex; align-items: center; gap: 8px; }\
        .jk-nav-avatar-btn {\
            background: none;\
            border: none;\
            cursor: pointer;\
            padding: 0;\
            border-radius: 50%;\
        }\
        .jk-nav-avatar {\
            width: 34px;\
            height: 34px;\
            border-radius: 50%;\
            border: 2px solid #ff6b9d;\
            object-fit: cover;\
        }\
\
        /* Guest warning — desktop only */\
        .jk-nav-guest-warning {\
            display: none;\
            align-items: center;\
            gap: 6px;\
            background: linear-gradient(135deg, #fff3cd, #ffeaa7);\
            padding: 5px 12px;\
            border-radius: 20px;\
            font-size: 11px;\
            color: #856404;\
        }\
\
        /* Hamburger */\
        .jk-nav-burger {\
            display: flex;\
            flex-direction: column;\
            gap: 5px;\
            background: none;\
            border: none;\
            cursor: pointer;\
            padding: 8px;\
            border-radius: 8px;\
            transition: background 0.2s;\
        }\
        .jk-nav-burger:hover { background: rgba(0,0,0,0.05); }\
        .jk-nav-burger span {\
            width: 20px;\
            height: 2px;\
            background: #333;\
            border-radius: 2px;\
            transition: all 0.3s ease;\
            display: block;\
        }\
        .jk-nav-burger.jk-open span:nth-child(1) {\
            transform: rotate(45deg) translate(5px, 5px);\
        }\
        .jk-nav-burger.jk-open span:nth-child(2) { opacity: 0; }\
        .jk-nav-burger.jk-open span:nth-child(3) {\
            transform: rotate(-45deg) translate(5px, -5px);\
        }\
\
        /* ======== SEARCH PANEL ======== */\
        .jk-search-panel {\
            display: none;\
            padding: 10px 16px 14px;\
            border-top: 1px solid rgba(0, 0, 0, 0.05);\
            max-width: 1400px;\
            margin: 0 auto;\
        }\
        .jk-search-panel.jk-open { display: block; }\
        .jk-search-input {\
            width: 100%;\
            padding: 10px 16px;\
            border: 2px solid rgba(255, 107, 157, 0.2);\
            border-radius: 20px;\
            font-size: 14px;\
            font-family: "Noto Sans KR", sans-serif;\
            outline: none;\
            transition: border-color 0.3s ease;\
            background: white;\
        }\
        .jk-search-input:focus { border-color: #ff6b9d; }\
        .jk-search-results {\
            margin-top: 8px;\
            background: white;\
            border-radius: 12px;\
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\
            max-height: 300px;\
            overflow-y: auto;\
            display: none;\
        }\
        .jk-search-results.jk-show { display: block; }\
        .jk-search-item {\
            display: block;\
            padding: 10px 16px;\
            color: #333;\
            font-size: 14px;\
            transition: background 0.15s;\
            border-bottom: 1px solid #f0f0f0;\
        }\
        .jk-search-item:last-child { border-bottom: none; }\
        .jk-search-item:hover { background: rgba(255, 107, 157, 0.06); color: #c44569; }\
        .jk-search-item mark {\
            background: rgba(255, 107, 157, 0.2);\
            color: #c44569;\
            border-radius: 2px;\
            padding: 0 2px;\
        }\
        .jk-search-empty {\
            padding: 20px 16px;\
            text-align: center;\
            color: #999;\
            font-size: 14px;\
        }\
\
        /* ======== STATS DROPDOWN ======== */\
        .jk-stats-dropdown {\
            display: none;\
            position: absolute;\
            top: calc(100% + 4px);\
            right: 16px;\
            background: white;\
            border-radius: 16px;\
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\
            padding: 16px;\
            min-width: 260px;\
            z-index: 10000;\
        }\
        .jk-stats-dropdown.jk-show {\
            display: block;\
            animation: jkSlideDown 0.2s ease;\
        }\
        @keyframes jkSlideDown {\
            from { opacity: 0; transform: translateY(-8px); }\
            to { opacity: 1; transform: translateY(0); }\
        }\
        .jk-stats-grid {\
            display: grid;\
            grid-template-columns: repeat(3, 1fr);\
            gap: 12px;\
            text-align: center;\
        }\
        .jk-stats-item { display: flex; flex-direction: column; gap: 2px; }\
        .jk-stats-icon { font-size: 20px; }\
        .jk-stats-value {\
            font-size: 20px;\
            font-weight: 700;\
            color: #333;\
        }\
        .jk-stats-label {\
            font-size: 11px;\
            color: #999;\
        }\
        .jk-stats-link {\
            display: block;\
            text-align: center;\
            margin-top: 12px;\
            padding-top: 12px;\
            border-top: 1px solid #f0f0f0;\
            color: #ff6b9d;\
            font-size: 13px;\
            font-weight: 500;\
        }\
        .jk-stats-link:hover { color: #c44569; }\
\
        /* ======== USER DROPDOWN ======== */\
        .jk-user-dropdown {\
            display: none;\
            position: absolute;\
            top: calc(100% + 4px);\
            right: 16px;\
            background: white;\
            border-radius: 16px;\
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\
            padding: 12px;\
            min-width: 220px;\
            z-index: 10000;\
        }\
        .jk-user-dropdown.jk-show {\
            display: block;\
            animation: jkSlideDown 0.2s ease;\
        }\
        .jk-user-dd-header {\
            display: flex;\
            align-items: center;\
            gap: 10px;\
            padding: 8px;\
        }\
        .jk-user-dd-avatar {\
            width: 40px;\
            height: 40px;\
            border-radius: 50%;\
            object-fit: cover;\
        }\
        .jk-user-dd-name { font-weight: 600; font-size: 14px; color: #333; }\
        .jk-user-dd-divider {\
            height: 1px;\
            background: #f0f0f0;\
            margin: 8px 0;\
        }\
        .jk-user-dd-item {\
            display: block;\
            width: 100%;\
            padding: 8px 12px;\
            border-radius: 10px;\
            font-size: 14px;\
            color: #555;\
            cursor: pointer;\
            transition: background 0.15s;\
            background: none;\
            border: none;\
            text-align: left;\
            font-family: "Noto Sans KR", sans-serif;\
        }\
        .jk-user-dd-item:hover { background: rgba(255, 107, 157, 0.08); color: #c44569; }\
        .jk-user-dd-logout { color: #e74c3c; }\
        .jk-user-dd-logout:hover { background: rgba(231, 76, 60, 0.08); color: #c0392b; }\
\
        /* ======== MOBILE MENU OVERLAY ======== */\
        .jk-mobile-menu {\
            position: fixed;\
            top: 0;\
            left: 0;\
            right: 0;\
            bottom: 0;\
            z-index: 9997;\
            background: rgba(255, 255, 255, 0.98);\
            backdrop-filter: blur(20px);\
            -webkit-backdrop-filter: blur(20px);\
            transform: translateX(100%);\
            transition: transform 0.3s ease;\
            overflow-y: auto;\
            padding: 70px 20px 90px;\
            font-family: "Noto Sans KR", "Malgun Gothic", sans-serif;\
        }\
        .jk-mobile-menu.jk-open { transform: translateX(0); }\
\
        .jk-mobile-search {\
            margin-bottom: 24px;\
        }\
        .jk-mobile-nav-links {\
            display: flex;\
            flex-direction: column;\
            gap: 4px;\
            margin-bottom: 24px;\
        }\
        .jk-mobile-link {\
            display: flex;\
            align-items: center;\
            gap: 12px;\
            padding: 14px 16px;\
            border-radius: 14px;\
            color: #555;\
            font-size: 16px;\
            font-weight: 500;\
            transition: all 0.2s ease;\
        }\
        .jk-mobile-link:hover { background: rgba(255, 107, 157, 0.06); }\
        .jk-mobile-link.jk-active {\
            background: linear-gradient(135deg, #ff6b9d, #c44569);\
            color: white;\
        }\
        .jk-mobile-link .jk-mobile-icon {\
            width: 24px;\
            height: 24px;\
            display: flex;\
            align-items: center;\
            justify-content: center;\
            flex-shrink: 0;\
        }\
\
        .jk-mobile-stats {\
            background: rgba(255, 107, 157, 0.05);\
            border-radius: 16px;\
            padding: 16px;\
            margin-bottom: 20px;\
        }\
        .jk-mobile-stats-title {\
            font-size: 13px;\
            font-weight: 600;\
            color: #999;\
            margin-bottom: 12px;\
            text-transform: uppercase;\
            letter-spacing: 0.5px;\
        }\
\
        .jk-mobile-auth {\
            padding-top: 16px;\
            border-top: 1px solid #f0f0f0;\
        }\
        .jk-mobile-auth-user {\
            display: flex;\
            align-items: center;\
            gap: 12px;\
            margin-bottom: 12px;\
        }\
        .jk-mobile-auth-avatar {\
            width: 44px;\
            height: 44px;\
            border-radius: 50%;\
            border: 2px solid #ff6b9d;\
            object-fit: cover;\
        }\
        .jk-mobile-auth-name { font-weight: 600; font-size: 15px; color: #333; }\
        .jk-mobile-logout-btn {\
            width: 100%;\
            padding: 10px;\
            border: 1px solid #e74c3c;\
            border-radius: 12px;\
            background: none;\
            color: #e74c3c;\
            font-size: 14px;\
            font-weight: 500;\
            cursor: pointer;\
            transition: all 0.2s;\
            font-family: "Noto Sans KR", sans-serif;\
        }\
        .jk-mobile-logout-btn:hover { background: rgba(231, 76, 60, 0.08); }\
        .jk-mobile-login-btn {\
            width: 100%;\
            padding: 12px;\
            background: linear-gradient(135deg, #ff6b9d, #c44569);\
            border: none;\
            border-radius: 12px;\
            color: white;\
            font-size: 15px;\
            font-weight: 600;\
            cursor: pointer;\
            transition: all 0.2s;\
            font-family: "Noto Sans KR", sans-serif;\
        }\
        .jk-mobile-login-btn:hover { box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3); }\
\
        /* ======== BOTTOM TAB BAR ======== */\
        .jk-bottom-bar {\
            position: fixed;\
            bottom: 0;\
            left: 0;\
            right: 0;\
            z-index: 9998;\
            display: flex;\
            justify-content: space-around;\
            align-items: center;\
            background: rgba(255, 255, 255, 0.98);\
            backdrop-filter: blur(12px);\
            -webkit-backdrop-filter: blur(12px);\
            border-top: 1px solid rgba(0, 0, 0, 0.06);\
            padding: 6px 0;\
            padding-bottom: max(6px, env(safe-area-inset-bottom));\
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.04);\
            font-family: "Noto Sans KR", "Malgun Gothic", sans-serif;\
        }\
        .jk-bottom-tab {\
            display: flex;\
            flex-direction: column;\
            align-items: center;\
            gap: 2px;\
            color: #999;\
            font-size: 10px;\
            font-weight: 500;\
            padding: 4px 8px;\
            border-radius: 8px;\
            transition: color 0.2s ease;\
            -webkit-tap-highlight-color: transparent;\
            background: none;\
            border: none;\
            cursor: pointer;\
        }\
        .jk-bottom-tab.jk-active { color: #ff6b9d; }\
        .jk-bottom-tab.jk-active svg { stroke: #ff6b9d; }\
        .jk-bottom-icon {\
            display: flex;\
            align-items: center;\
            justify-content: center;\
            width: 24px;\
            height: 24px;\
        }\
        .jk-bottom-label { line-height: 1; }\
\
        /* More panel (mobile) */\
        .jk-more-panel {\
            display: none;\
            position: fixed;\
            bottom: 60px;\
            right: 8px;\
            background: white;\
            border-radius: 16px;\
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\
            padding: 8px;\
            z-index: 10001;\
            min-width: 180px;\
            font-family: "Noto Sans KR", sans-serif;\
        }\
        .jk-more-panel.jk-show {\
            display: block;\
            animation: jkSlideUp 0.2s ease;\
        }\
        @keyframes jkSlideUp {\
            from { opacity: 0; transform: translateY(8px); }\
            to { opacity: 1; transform: translateY(0); }\
        }\
        .jk-more-item {\
            display: flex;\
            align-items: center;\
            gap: 10px;\
            padding: 10px 12px;\
            border-radius: 10px;\
            color: #555;\
            font-size: 14px;\
            font-weight: 500;\
            transition: background 0.15s;\
        }\
        .jk-more-item:hover { background: rgba(255, 107, 157, 0.06); }\
        .jk-more-item.jk-active { color: #ff6b9d; }\
\
        /* Body padding for bottom bar */\
        body.jk-has-bottombar { padding-bottom: 64px; }\
\
        /* ======== DESKTOP (>768px) ======== */\
        @media (min-width: 769px) {\
            .jk-nav-inner { padding: 10px 24px; gap: 12px; }\
            .jk-nav-links { display: flex; }\
            .jk-nav-burger { display: none; }\
            .jk-bottom-bar { display: none; }\
            .jk-mobile-menu { display: none !important; }\
            .jk-more-panel { display: none !important; }\
            body.jk-has-bottombar { padding-bottom: 0; }\
            .jk-nav-stats-toggle { display: flex; }\
            .jk-nav-guest-warning { display: flex; }\
        }\
\
        /* ======== LARGE DESKTOP (>1100px) ======== */\
        @media (min-width: 1100px) {\
            .jk-nav-link { padding: 8px 16px; }\
            .jk-nav-link .jk-nav-icon { display: flex; }\
        }\
\
        /* ======== LANG TOGGLE ======== */\
        .jk-lang-toggle {\
            display: inline-flex; align-items: center; justify-content: center;\
            width: 32px; height: 32px; border-radius: 8px;\
            background: rgba(102, 126, 234, 0.1); color: #667eea;\
            font-weight: 700; font-size: 12px; letter-spacing: 0.5px;\
            text-decoration: none; transition: all 0.2s ease;\
        }\
        .jk-lang-toggle:hover { background: #667eea; color: #fff; }\
\
        /* ======== HIDE LEGACY NAV ======== */\
        .auth-header-bar .main-nav { display: none !important; }\
        .auth-header-bar .search-container { display: none !important; }\
        .auth-header-bar #auth-container { display: none !important; }\
    </style>';

    // =============================================
    // HTML GENERATION
    // =============================================
    function buildNavHTML() {
        var linksHTML = '';
        NAV_LINKS.forEach(function(link) {
            linksHTML += '<a href="' + getPageUrl(link.url) + '" class="jk-nav-link' +
                (activePage === link.id ? ' jk-active' : '') + '" data-page="' + link.id + '">' +
                '<span class="jk-nav-icon">' + link.icon + '</span>' +
                '<span>' + link.label + '</span></a>';
        });

        return '<header class="jk-nav" id="jk-nav">' +
            '<div class="jk-nav-inner">' +
                // Brand
                '<a href="' + getPageUrl('index.html') + '" class="jk-nav-brand">' +
                    '<span class="jk-nav-logo">JK</span>' +
                    '<span class="jk-nav-wordmark">Jane Korea</span>' +
                '</a>' +
                // Desktop links
                '<nav class="jk-nav-links" id="jk-nav-links">' + linksHTML + '</nav>' +
                // Right actions
                '<div class="jk-nav-actions">' +
                    // Lang toggle
                    '<a href="' + getLangSwitchUrl() + '" class="jk-lang-toggle" title="' + S.langSwitchTitle + '">' + S.langSwitch + '</a>' +
                    // Search toggle
                    '<button class="jk-nav-action-btn" id="jk-search-toggle" aria-label="' + S.navSearch + '">' + ICONS.search + '</button>' +
                    // Stats toggle (desktop, shown when logged in)
                    '<button class="jk-nav-stats-toggle" id="jk-stats-toggle" style="display:none">' +
                        '<span>&#128293;</span><span id="jk-nav-streak">0</span>' +
                    '</button>' +
                    // Guest warning (desktop)
                    '<div class="jk-nav-guest-warning" id="jk-nav-guest-warning">' +
                        '<span>' + S.guestWarning + '</span>' +
                    '</div>' +
                    // Auth
                    '<div class="jk-nav-auth" id="jk-nav-auth">' +
                        '<div class="jk-nav-guest" id="jk-nav-guest">' +
                            '<button class="jk-nav-login-btn" id="jk-nav-login">' + S.login + '</button>' +
                        '</div>' +
                        '<div class="jk-nav-user" id="jk-nav-user" style="display:none">' +
                            '<button class="jk-nav-avatar-btn" id="jk-nav-avatar-btn">' +
                                '<img id="jk-nav-avatar" class="jk-nav-avatar" src="" alt="">' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                    // Mobile hamburger
                    '<button class="jk-nav-burger" id="jk-nav-burger" aria-label="' + S.navMenu + '">' +
                        '<span></span><span></span><span></span>' +
                    '</button>' +
                '</div>' +
            '</div>' +
            // Search panel
            '<div class="jk-search-panel" id="jk-search-panel">' +
                '<input type="text" class="jk-search-input" id="jk-search-input" placeholder="' + S.searchPlaceholder + '" autocomplete="off">' +
                '<div class="jk-search-results" id="jk-search-results"></div>' +
            '</div>' +
            // Stats dropdown
            '<div class="jk-stats-dropdown" id="jk-stats-dropdown">' +
                '<div class="jk-stats-grid">' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128293;</span><span class="jk-stats-value" id="jk-stats-streak">0</span><span class="jk-stats-label">' + S.statsDays + '</span></div>' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128218;</span><span class="jk-stats-value" id="jk-stats-texts">0</span><span class="jk-stats-label">' + S.statsTexts + '</span></div>' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128214;</span><span class="jk-stats-value" id="jk-stats-lessons">0</span><span class="jk-stats-label">' + S.statsLessons + '</span></div>' +
                '</div>' +
                '<a href="' + getPageUrl('profile.html') + '" class="jk-stats-link">' + S.statsLink + ' &rarr;</a>' +
            '</div>' +
            // User dropdown
            '<div class="jk-user-dropdown" id="jk-user-dropdown">' +
                '<div class="jk-user-dd-header">' +
                    '<img id="jk-user-dd-avatar" class="jk-user-dd-avatar" src="" alt="">' +
                    '<div><div class="jk-user-dd-name" id="jk-user-dd-name"></div></div>' +
                '</div>' +
                '<div class="jk-user-dd-divider"></div>' +
                '<a href="' + getPageUrl('profile.html') + '" class="jk-user-dd-item">' + S.myProfile + '</a>' +
                '<button class="jk-user-dd-item jk-user-dd-logout" id="jk-nav-logout">' + S.logout + '</button>' +
            '</div>' +
        '</header>';
    }

    function buildMobileMenuHTML() {
        var linksHTML = '';
        NAV_LINKS.forEach(function(link) {
            linksHTML += '<a href="' + getPageUrl(link.url) + '" class="jk-mobile-link' +
                (activePage === link.id ? ' jk-active' : '') + '">' +
                '<span class="jk-mobile-icon">' + link.icon + '</span>' +
                '<span>' + link.label + '</span></a>';
        });

        return '<div class="jk-mobile-menu" id="jk-mobile-menu">' +
            '<div class="jk-mobile-search">' +
                '<input type="text" class="jk-search-input" id="jk-mobile-search-input" placeholder="' + S.searchMobilePlaceholder + '" autocomplete="off">' +
                '<div class="jk-search-results" id="jk-mobile-search-results"></div>' +
            '</div>' +
            '<nav class="jk-mobile-nav-links">' + linksHTML + '</nav>' +
            '<div class="jk-mobile-stats">' +
                '<div class="jk-mobile-stats-title">' + S.statsTitle + '</div>' +
                '<div class="jk-stats-grid">' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128293;</span><span class="jk-stats-value" id="jk-mobile-stats-streak">0</span><span class="jk-stats-label">' + S.statsDays + '</span></div>' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128218;</span><span class="jk-stats-value" id="jk-mobile-stats-texts">0</span><span class="jk-stats-label">' + S.statsTexts + '</span></div>' +
                    '<div class="jk-stats-item"><span class="jk-stats-icon">&#128214;</span><span class="jk-stats-value" id="jk-mobile-stats-lessons">0</span><span class="jk-stats-label">' + S.statsLessons + '</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="jk-mobile-auth" id="jk-mobile-auth">' +
                '<div class="jk-mobile-auth-guest" id="jk-mobile-guest">' +
                    '<p style="color:#856404;font-size:13px;margin-bottom:10px;">' + S.guestMobileWarning + '</p>' +
                    '<button class="jk-mobile-login-btn" id="jk-mobile-login">' + S.loginGoogle + '</button>' +
                '</div>' +
                '<div class="jk-mobile-auth-logged" id="jk-mobile-logged" style="display:none">' +
                    '<div class="jk-mobile-auth-user">' +
                        '<img id="jk-mobile-avatar" class="jk-mobile-auth-avatar" src="" alt="">' +
                        '<span class="jk-mobile-auth-name" id="jk-mobile-name"></span>' +
                    '</div>' +
                    '<button class="jk-mobile-logout-btn" id="jk-mobile-logout">' + S.logout + '</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    function buildBottomBarHTML() {
        var tabsHTML = '';
        BOTTOM_LINKS.forEach(function(link) {
            tabsHTML += '<a href="' + getPageUrl(link.url) + '" class="jk-bottom-tab' +
                (activePage === link.id ? ' jk-active' : '') + '" data-page="' + link.id + '">' +
                '<span class="jk-bottom-icon">' + link.icon + '</span>' +
                '<span class="jk-bottom-label">' + link.label + '</span></a>';
        });

        // "Ещё" tab
        tabsHTML += '<button class="jk-bottom-tab' +
            (['kpop', 'profile'].indexOf(activePage) >= 0 ? ' jk-active' : '') +
            '" id="jk-bottom-more">' +
            '<span class="jk-bottom-icon">' + ICONS.more + '</span>' +
            '<span class="jk-bottom-label">' + S.navMore + '</span></button>';

        // More panel
        var moreItems = [
            { id: 'kpop', label: S.navKpop, icon: ICONS.music, url: getPageUrl('kpop-learning.html') },
            { id: 'profile', label: S.navProfile, icon: ICONS.user, url: getPageUrl('profile.html') }
        ];
        var morePanelHTML = '<div class="jk-more-panel" id="jk-more-panel">';
        moreItems.forEach(function(item) {
            morePanelHTML += '<a href="' + item.url + '" class="jk-more-item' +
                (activePage === item.id ? ' jk-active' : '') + '">' +
                '<span>' + item.icon + '</span><span>' + item.label + '</span></a>';
        });
        morePanelHTML += '</div>';

        return '<nav class="jk-bottom-bar" id="jk-bottom-bar">' + tabsHTML + '</nav>' + morePanelHTML;
    }

    // =============================================
    // SEARCH LOGIC
    // =============================================
    var searchTimeout = null;

    function performSearch(query, resultsEl) {
        if (!query || query.length < 2) {
            resultsEl.classList.remove('jk-show');
            return;
        }

        var q = query.toLowerCase();
        var matches = [];

        ACTIVE_SEARCH_DATA.forEach(function(item) {
            var searchable = (item.t + ' ' + item.k).toLowerCase();
            if (searchable.indexOf(q) >= 0) {
                matches.push(item);
            }
        });

        if (matches.length === 0) {
            resultsEl.innerHTML = '<div class="jk-search-empty">' + S.searchEmpty + '</div>';
            resultsEl.classList.add('jk-show');
            return;
        }

        var html = '';
        var max = Math.min(matches.length, 10);
        for (var i = 0; i < max; i++) {
            var m = matches[i];
            var title = highlightMatch(m.t, q);
            html += '<a class="jk-search-item" href="' + getPageUrl(m.u) + '">' + title + '</a>';
        }
        if (matches.length > 10) {
            html += '<div class="jk-search-empty">' + S.searchMore.replace('{n}', matches.length - 10) + '</div>';
        }

        resultsEl.innerHTML = html;
        resultsEl.classList.add('jk-show');
    }

    function highlightMatch(text, query) {
        var idx = text.toLowerCase().indexOf(query);
        if (idx < 0) return text;
        return text.substring(0, idx) +
            '<mark>' + text.substring(idx, idx + query.length) + '</mark>' +
            text.substring(idx + query.length);
    }

    // =============================================
    // AUTH STATE
    // =============================================
    function updateNavAuthState(user) {
        var guest = document.getElementById('jk-nav-guest');
        var userEl = document.getElementById('jk-nav-user');
        var avatar = document.getElementById('jk-nav-avatar');
        var guestWarning = document.getElementById('jk-nav-guest-warning');
        var statsToggle = document.getElementById('jk-stats-toggle');

        // Desktop
        if (guest) guest.style.display = user ? 'none' : 'flex';
        if (userEl) userEl.style.display = user ? 'flex' : 'none';
        if (guestWarning) guestWarning.style.display = user ? 'none' : '';
        if (statsToggle) statsToggle.style.display = user ? '' : 'none';

        if (user) {
            if (avatar && user.photoURL) avatar.src = user.photoURL;
            var ddAvatar = document.getElementById('jk-user-dd-avatar');
            var ddName = document.getElementById('jk-user-dd-name');
            if (ddAvatar && user.photoURL) ddAvatar.src = user.photoURL;
            if (ddName && user.displayName) ddName.textContent = user.displayName;
        }

        // Mobile
        var mobileGuest = document.getElementById('jk-mobile-guest');
        var mobileLogged = document.getElementById('jk-mobile-logged');
        var mobileAvatar = document.getElementById('jk-mobile-avatar');
        var mobileName = document.getElementById('jk-mobile-name');

        if (mobileGuest) mobileGuest.style.display = user ? 'none' : 'block';
        if (mobileLogged) mobileLogged.style.display = user ? 'block' : 'none';
        if (user) {
            if (mobileAvatar && user.photoURL) mobileAvatar.src = user.photoURL;
            if (mobileName && user.displayName) mobileName.textContent = user.displayName;
        }
    }

    // =============================================
    // STATS
    // =============================================
    function updateNavStats() {
        var progress = null;
        if (window.ProgressTracker && window.ProgressTracker.getProgress) {
            progress = window.ProgressTracker.getProgress();
        }
        if (!progress) {
            // Try localStorage directly
            try {
                var raw = localStorage.getItem('janeKoreaProgress');
                if (raw) progress = JSON.parse(raw);
            } catch(e) { /* ignore */ }
        }
        if (!progress) return;

        var stats = progress.stats || {};
        var streak = stats.currentStreak || 0;
        var texts = stats.totalTexts || 0;
        var lessons = (progress.completedLessons ? Object.keys(progress.completedLessons).length : 0);

        // Desktop
        setText('jk-nav-streak', streak);
        setText('jk-stats-streak', streak);
        setText('jk-stats-texts', texts);
        setText('jk-stats-lessons', lessons);

        // Mobile
        setText('jk-mobile-stats-streak', streak);
        setText('jk-mobile-stats-texts', texts);
        setText('jk-mobile-stats-lessons', lessons);
    }

    function setText(id, value) {
        var el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    // =============================================
    // EVENT HANDLERS
    // =============================================
    function bindEvents() {
        // Search toggle
        var searchToggle = document.getElementById('jk-search-toggle');
        var searchPanel = document.getElementById('jk-search-panel');
        var searchInput = document.getElementById('jk-search-input');
        var searchResults = document.getElementById('jk-search-results');

        if (searchToggle) {
            searchToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                searchPanel.classList.toggle('jk-open');
                if (searchPanel.classList.contains('jk-open')) {
                    searchInput.focus();
                }
                closeDropdowns('search');
            });
        }

        // Search input (desktop)
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                var val = this.value;
                searchTimeout = setTimeout(function() {
                    performSearch(val, searchResults);
                }, 200);
            });
        }

        // Mobile search input
        var mobileSearchInput = document.getElementById('jk-mobile-search-input');
        var mobileSearchResults = document.getElementById('jk-mobile-search-results');
        if (mobileSearchInput) {
            mobileSearchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                var val = this.value;
                searchTimeout = setTimeout(function() {
                    performSearch(val, mobileSearchResults);
                }, 200);
            });
        }

        // Stats toggle
        var statsToggle = document.getElementById('jk-stats-toggle');
        var statsDropdown = document.getElementById('jk-stats-dropdown');
        if (statsToggle) {
            statsToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                statsDropdown.classList.toggle('jk-show');
                closeDropdowns('stats');
            });
        }

        // Avatar / User dropdown
        var avatarBtn = document.getElementById('jk-nav-avatar-btn');
        var userDropdown = document.getElementById('jk-user-dropdown');
        if (avatarBtn) {
            avatarBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userDropdown.classList.toggle('jk-show');
                closeDropdowns('user');
            });
        }

        // Login buttons
        var loginBtns = [
            document.getElementById('jk-nav-login'),
            document.getElementById('jk-mobile-login')
        ];
        loginBtns.forEach(function(btn) {
            if (btn) {
                btn.addEventListener('click', function() {
                    if (window.FirebaseAuth && window.FirebaseAuth.signInWithGoogle) {
                        window.FirebaseAuth.signInWithGoogle();
                    }
                });
            }
        });

        // Logout buttons
        var logoutBtns = [
            document.getElementById('jk-nav-logout'),
            document.getElementById('jk-mobile-logout')
        ];
        logoutBtns.forEach(function(btn) {
            if (btn) {
                btn.addEventListener('click', function() {
                    if (window.FirebaseAuth && window.FirebaseAuth.signOut) {
                        window.FirebaseAuth.signOut();
                    }
                });
            }
        });

        // Hamburger toggle
        var burger = document.getElementById('jk-nav-burger');
        var mobileMenu = document.getElementById('jk-mobile-menu');
        if (burger) {
            burger.addEventListener('click', function(e) {
                e.stopPropagation();
                burger.classList.toggle('jk-open');
                mobileMenu.classList.toggle('jk-open');
                document.body.style.overflow = mobileMenu.classList.contains('jk-open') ? 'hidden' : '';
            });
        }

        // Bottom bar "More" button
        var moreBtn = document.getElementById('jk-bottom-more');
        var morePanel = document.getElementById('jk-more-panel');
        if (moreBtn && morePanel) {
            moreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                morePanel.classList.toggle('jk-show');
            });
        }

        // Close dropdowns on outside click
        document.addEventListener('click', function(e) {
            var target = e.target;
            // Close search
            if (searchPanel && !searchPanel.contains(target) && target !== searchToggle) {
                searchPanel.classList.remove('jk-open');
                if (searchResults) searchResults.classList.remove('jk-show');
            }
            // Close stats
            if (statsDropdown && !statsDropdown.contains(target) && target !== statsToggle) {
                statsDropdown.classList.remove('jk-show');
            }
            // Close user dropdown
            if (userDropdown && !userDropdown.contains(target) && target !== avatarBtn && !avatarBtn.contains(target)) {
                userDropdown.classList.remove('jk-show');
            }
            // Close more panel
            if (morePanel && !morePanel.contains(target) && target !== moreBtn) {
                morePanel.classList.remove('jk-show');
            }
        });

        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAll();
            }
        });
    }

    function closeDropdowns(except) {
        var statsDropdown = document.getElementById('jk-stats-dropdown');
        var userDropdown = document.getElementById('jk-user-dropdown');
        var searchPanel = document.getElementById('jk-search-panel');
        var morePanel = document.getElementById('jk-more-panel');

        if (except !== 'stats' && statsDropdown) statsDropdown.classList.remove('jk-show');
        if (except !== 'user' && userDropdown) userDropdown.classList.remove('jk-show');
        if (except !== 'search' && searchPanel) searchPanel.classList.remove('jk-open');
        if (except !== 'more' && morePanel) morePanel.classList.remove('jk-show');
    }

    function closeAll() {
        closeDropdowns();
        var burger = document.getElementById('jk-nav-burger');
        var mobileMenu = document.getElementById('jk-mobile-menu');
        if (burger) burger.classList.remove('jk-open');
        if (mobileMenu) mobileMenu.classList.remove('jk-open');
        document.body.style.overflow = '';
    }

    // =============================================
    // FOOTER
    // =============================================
    function buildFooterHTML() {
        return '<footer class="jk-footer">' +
            '<div class="jk-footer-inner">' +
                '<div class="jk-footer-brand">' +
                    '<h3>Jane Korea</h3>' +
                    '<p>' + S.footerDesc + '</p>' +
                '</div>' +
                '<div class="jk-footer-col">' +
                    '<h4>' + S.footerLearning + '</h4>' +
                    '<a href="' + getPageUrl('lessons.html') + '">' + S.footerGrammar + '</a>' +
                    '<a href="' + getPageUrl('reading-texts.html') + '">' + S.footerReading + '</a>' +
                    '<a href="' + getPageUrl('vocabulary-learning.html') + '">' + S.footerVocab + '</a>' +
                    '<a href="' + getPageUrl('kpop-learning.html') + '">K-POP</a>' +
                '</div>' +
                '<div class="jk-footer-col">' +
                    '<h4>' + S.footerProject + '</h4>' +
                    '<a href="' + getPageUrl('about.html') + '">' + S.footerAbout + '</a>' +
                    '<a href="' + getPageUrl('faq.html') + '">FAQ</a>' +
                    '<a href="' + getPageUrl('profile.html') + '">' + S.navProfile + '</a>' +
                '</div>' +
                '<div class="jk-footer-col">' +
                    '<h4>' + S.footerLevels + '</h4>' +
                    '<a href="' + getPageUrl('reading-texts.html') + '?level=1">1급 (A1)</a>' +
                    '<a href="' + getPageUrl('reading-texts.html') + '?level=2">2급 (A2)</a>' +
                    '<a href="' + getPageUrl('reading-texts.html') + '?level=3">3급 (B1)</a>' +
                    '<a href="' + getPageUrl('reading-texts.html') + '?level=4">4급 (B2)</a>' +
                '</div>' +
            '</div>' +
            '<div class="jk-footer-bottom">' +
                '<span>&copy; ' + new Date().getFullYear() + ' Jane Korea. ' + S.footerRights + '</span>' +
            '</div>' +
        '</footer>';
    }

    // =============================================
    // FADE-IN OBSERVER
    // =============================================
    function initFadeInObserver() {
        if (!('IntersectionObserver' in window)) return;

        var targets = document.querySelectorAll('.level-card, .special-section, .jk-footer-col, .jk-footer-brand');
        targets.forEach(function(el) {
            el.classList.add('jk-fade-in');
        });

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('jk-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.jk-fade-in').forEach(function(el) {
            observer.observe(el);
        });
    }

    // =============================================
    // INIT
    // =============================================
    function initGlobalNav() {
        // Prevent double init
        if (document.getElementById('jk-nav')) return;

        // Inject styles
        if (!document.getElementById('jk-nav-styles')) {
            document.head.insertAdjacentHTML('beforeend', navCSS);
        }

        // Inject nav HTML
        document.body.insertAdjacentHTML('afterbegin', buildNavHTML());

        // Inject footer + mobile menu + bottom bar
        document.body.insertAdjacentHTML('beforeend', buildFooterHTML());
        document.body.insertAdjacentHTML('beforeend', buildMobileMenuHTML());
        document.body.insertAdjacentHTML('beforeend', buildBottomBarHTML());

        // Add body class for bottom bar padding on mobile
        document.body.classList.add('jk-has-bottombar');

        // Bind events
        bindEvents();

        // Init auth state
        initAuth();

        // Init stats
        updateNavStats();

        // Init fade-in animations
        setTimeout(initFadeInObserver, 100);

        console.log('[OK] Global nav v2 initialized');
    }

    function initAuth() {
        if (window.FirebaseAuth && window.FirebaseAuth.onAuthStateChanged) {
            window.FirebaseAuth.onAuthStateChanged(function(user) {
                updateNavAuthState(user);
                updateNavStats();
            });
        } else {
            // Wait for Firebase
            setTimeout(function() {
                if (window.FirebaseAuth && window.FirebaseAuth.onAuthStateChanged) {
                    window.FirebaseAuth.onAuthStateChanged(function(user) {
                        updateNavAuthState(user);
                        updateNavStats();
                    });
                }
                if (window.FirebaseAuth && window.FirebaseAuth.getCurrentUser) {
                    updateNavAuthState(window.FirebaseAuth.getCurrentUser());
                }
                updateNavStats();
            }, 1500);
        }
    }

    // =============================================
    // BOOTSTRAP
    // =============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalNav);
    } else {
        initGlobalNav();
    }

    // Export
    window.GlobalNav = {
        init: initGlobalNav,
        updateAuth: updateNavAuthState,
        updateStats: updateNavStats
    };

})();
