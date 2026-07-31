/**
 * Miso: 한국어 수업 — Lesson Chrome v2
 * - Скролл-прогресс-бар сверху страницы
 * - Сквозная навигация «← Предыдущий / Следующий →» для всех уроков
 *
 * Автоподключается из global-nav.js.
 * Определяет группу и позицию урока по URL.
 */
(function() {
    'use strict';

    // ===================================================
    // УПОРЯДОЧЕННЫЕ СПИСКИ УРОКОВ ПО ГРУППАМ
    // Формат: [dir_name, short_label]
    // Порядок = порядок прохождения в программе.
    // ===================================================

    // -- Корневые уроки (lesson_XX_name в корне проекта) --
    var ROOT = [
        ['lesson_01_korea', 'Знакомство с Кореей'],
        ['lesson_02_alphabet', 'Алфавит хангыль'],
        ['lesson_03_greetings', 'Приветствие и знакомство'],
        ['lesson_04_numbers', 'Числа и время'],
        ['lesson_05_family', 'Семья и отношения'],
        ['lesson_06_grammar', 'Грамматика 1: частицы 이/가 и 은/는'],
        ['lesson_07_verb_tenses', 'Времена глаголов'],
        ['lesson_08_politeness', 'Формы вежливости 존댓말'],
        ['lesson_09_negation', 'Отрицательные формы'],
        ['lesson_10_copula', 'Связка 이에요/예요'],
        ['lesson_11_informal_copula', 'Неформальная связка'],
        ['lesson_12_formal_copula', 'Официальная связка'],
        ['lesson_13_copula_negation', 'Отрицание связок'],
        ['lesson_14_demonstratives', 'Указательные слова'],
        ['lesson_15_demonstratives_practice', 'Есть/нет 있어요/없어요'],
        ['lesson_16_location_verbs', 'Глаголы местонахождения'],
        ['lesson_17_verb_conjugation', 'Спряжение глаголов 아요/어요'],
        ['lesson_18_informal_verbs', 'Просто-личный стиль'],
        ['lesson_19_formal_verbs', 'Вежливо-официальный стиль'],
        ['lesson_20_accusative_case', 'Винительный падеж 을/를'],
        ['lesson_21_location_ending', 'Место действия 에서'],
        ['lesson_22_direction_ending', 'Направление 에'],
        ['lesson_23_time_marker', 'Временной показатель 에'],
        ['lesson_24_adjective_conjugation', 'Склонение прилагательных'],
        ['lesson_25_hago_conjunction', 'Союз "и" 하고'],
        ['lesson_26_conjunction_particles', 'Соединение 란/이란, 과/와'],
        ['lesson_27_past_tense', 'Прошедшее время'],
        ['lesson_28_conjunction_go', 'Соединительное -고'],
        ['lesson_29_sequence_go', 'Последовательность с -고'],
        ['lesson_30_future_tense', 'Будущее время 을/ㄹ 거예요'],
        ['lesson_32_dative_case', 'Дательный падеж 에게/한테'],
        ['lesson_33_possessive_case', 'Притяжательный падеж 의'],
        ['lesson_34_want_desire', 'Желание 고 싶다'],
        ['lesson_38_also_do', 'Частица 도 — тоже'],
        ['lesson_39_only_man', 'Частица 만 — только'],
        ['lesson_47_simultaneous_actions', 'Одновременные действия -면서'],
        ['lesson_48_after_action', 'После действия -은/ㄴ 후에'],
        ['lesson_50_before_action', 'Перед действием -기 전에'],
        ['lesson_51_after_formal', 'Формальное «после» -고 나서'],
        ['lesson_53_instrumental_ro', 'Инструментальный 로/으로'],
        ['lesson_54_purpose_movement', 'Цель движения -러/으러'],
        ['lesson_55_honorific_si', 'Почтительная -(으)시-'],
        ['lesson_56_contrast_jiman', 'Противопоставление -지만'],
        ['lesson_57_choice_ina', 'Выбор 이나'],
        ['lesson_58_choice_geona', 'Выбор 거나'],
        ['lesson_59_suggestion_eulkayo', 'Предложение -(으)ㄹ까요'],
        ['lesson_61_helping_actions', 'Действия для других 주다'],
        ['lesson_62_obligation', 'Долженствование 아/어야 하다'],
        ['lesson_63_ability', 'Возможность -(으)ㄹ 수 있다'],
        ['lesson_64_conditional_intention', 'Условие -(으)려면'],
        ['lesson_65_minimum_condition', 'Минимум -기만 하면'],
        ['lesson_66_permission', 'Разрешение -아도 되다'],
        ['lesson_67_prohibition', 'Запрет -(으)면 안 되다'],
        ['lesson_68_inability_ji_moshada', 'Неспособность -지 못하다'],
        ['lesson_69_intention_promise', 'Намерение -(으)ㄹ게요'],
        ['lesson_70_trying_experience', 'Попытка -아/어 보다'],
        ['lesson_71_from_whom', 'От кого -에게서'],
        ['lesson_72_future_intention', 'Намерение -겠-'],
        ['lesson_73_supposition', 'Предположение -겠-'],
        ['lesson_74_irregular_bieup', 'Неправильные ㅂ'],
        ['lesson_75_irregular_digeut', 'Неправильные ㄷ'],
        ['lesson_76_irregular_siot', 'Неправильные ㅅ'],
        ['lesson_77_irregular_eu', 'Неправильные ㅡ'],
        ['lesson_78_irregular_hieut', 'Неправильные ㅎ'],
        ['lesson_79_irregular_rieul', 'Неправильные 르'],
        ['lesson_80_possession_advanced', 'Обладание 가지다/갖다'],
        ['lesson_81_comparative_constructions', 'Сравнительные -보다'],
        ['lesson_82_reason_consequence', 'Причина -기 때문에'],
        ['lesson_83_passive_constructions', 'Пассивный залог'],
        ['lesson_84_constructions_neun_daero', 'Конструкции -는 대로'],
        ['lesson_85_conditional_damyeon', 'Условное -다면'],
        ['lesson_86_time_constructions', 'Временные конструкции'],
        ['lesson_87_not_vs_cant', '안 vs 못'],
        ['lesson_88_time_adverbs', '아직/이미/벌써'],
        ['lesson_89_conjunctions_practice', 'Союзы 그래서/그런데'],
        ['lesson_90_topik_prep', 'Подготовка к TOPIK II'],
        ['lesson_91_essay_writing', 'Написание эссе'],
        ['lesson_92_traditions', 'Корейские традиции'],
        ['lesson_93_large_numbers', 'Большие числа и деньги'],
        ['lesson_94_medicine', 'Корейская медицина']
    ];

    // -- Level 1 (1급) --
    var L1 = [
        ['lesson_01_grammar', 'Основы грамматики'],
        ['lesson_about_me', 'Описание себя'],
        ['lesson_antonyms', 'Антонимы'],
        ['lesson_cafe_shopping', 'В кафе и магазине'],
        ['lesson_casual_slang', 'Разговорный и сленг'],
        ['lesson_confusing_words', 'Слова-ловушки'],
        ['lesson_connecting_go', 'Союз -고'],
        ['lesson_counters_basic', 'Счётные слова'],
        ['lesson_daily_routine', 'Распорядок дня'],
        ['lesson_describe_person', 'Описание человека'],
        ['lesson_direction_euro', 'Направление 으로/로'],
        ['lesson_directions_basic', 'Как спросить дорогу'],
        ['lesson_emotions_basic', 'Базовые эмоции'],
        ['lesson_english_loanwords', 'Заимствования 외래어'],
        ['lesson_etiquette', 'Корейский этикет'],
        ['lesson_fill_form', 'Заполняем анкету'],
        ['lesson_from_eseo', '에서 — откуда'],
        ['lesson_future_georeyeo', 'Будущее -(으)ㄹ 거예요'],
        ['lesson_health_phrases', 'Здоровье'],
        ['lesson_holidays', 'Праздники'],
        ['lesson_introduction_dialogue', 'Диалог знакомства'],
        ['lesson_kdrama_phrases', 'K-drama фразы'],
        ['lesson_korean_age', 'Корейский возраст'],
        ['lesson_korean_food', 'Корейская кухня'],
        ['lesson_korean_keyboard', 'Корейская клавиатура'],
        ['lesson_korean_names', 'Имена и обращения'],
        ['lesson_korean_vs_russian', 'Корейский vs Русский'],
        ['lesson_location_eseo', 'Частица 에서'],
        ['lesson_minimal_pairs', 'Минимальные пары'],
        ['lesson_movement_verbs', 'Глаголы движения'],
        ['lesson_nature_simple', 'Простая природа'],
        ['lesson_negation', 'Отрицание 안/못'],
        ['lesson_not_but_anira', '아니라 — не X, а Y'],
        ['lesson_daesin_irado', '대신에 · (이)라도'],
        ['lesson_numbers_life', 'Числа в жизни'],
        ['lesson_numbers_units', 'Числа с единицами'],
        ['lesson_object_particle', 'Объект 을/를'],
        ['lesson_particle_do', 'Частица 도'],
        ['lesson_particle_e', 'Частица 에'],
        ['lesson_particle_ege', 'Частица 에게/한테'],
        ['lesson_particle_man', 'Частица 만'],
        ['lesson_pharmacy_dialogue', 'В аптеке'],
        ['lesson_phone_numbers', 'Телефон и адрес'],
        ['lesson_place_prepositions', 'Предлоги места'],
        ['lesson_possessive_ui', 'Частица 의'],
        ['lesson_pronouns', 'Местоимения'],
        ['lesson_pronunciation', 'Произношение'],
        ['lesson_question_sentences', 'Вопросы'],
        ['lesson_russian_mistakes', 'Ошибки русскоязычных'],
        ['lesson_shopping_clothes', 'Магазин одежды'],
        ['lesson_sms_chat', 'SMS и KakaoTalk'],
        ['lesson_sov_order', 'Порядок слов SOV'],
        ['lesson_stroke_order', 'Порядок черт'],
        ['lesson_subject_particle', 'Подлежащее 이/가'],
        ['lesson_time_age', 'Время и возраст'],
        ['lesson_topic_particle', 'Тема 은/는'],
        ['lesson_transport_dialogue', 'Транспорт'],
        ['lesson_adverbs_degree', 'Наречия степени'],
        ['lesson_verb_conjugation', 'Спряжение глаголов'],
        ['lesson_want_gosipda', '-고 싶다'],
        ['lesson_weather_basic', 'Погода'],
        ['lesson_yes_no', 'Да и Нет 네/아니요']
    ];

    // -- Level 2 (2급) --
    var L2 = [
        ['lesson_experience_jeoki', 'Бывало ли -ㄴ 적이'],
        ['lesson_seems_like', '-는 것 같다 кажется'],
        ['lesson_boida', '-아/어 보이다 выглядит'],
        ['lesson_if_myeon', '-(으)면 если'],
        ['lesson_topic_vs_subject', '은/는 vs 이/가'],
        ['lesson_02_politeness', 'Формы вежливости'],
        ['lesson_particle_ege', 'Вежливое 께/께서'],
        ['lesson_connecting_go', 'Союз -고'],
        ['lesson_go_sipahada', '-고 싶어하다'],
        ['lesson_adjective_modifier', 'Прилагательные -(으)ㄴ'],
        ['lesson_aseo_cause', '-아서/어서 причина'],
        ['lesson_geodeunyo', '-거든요 объяснение'],
        ['lesson_condition_myeon', '-(으)면 если, подробно'],
        ['lesson_but_jiman', '-지만 но'],
        ['lesson_past_questions', 'Вопросы в прошедшем'],
        ['lesson_irregular_verbs', 'Неправильные глаголы'],
        ['lesson_ida_questions', '이다 в вопросах'],
        ['lesson_uncertainty', 'Неопределённость'],
        ['lesson_plans_intention', '-(으)ㄹ까 하다 · -아/어야겠다'],
        ['lesson_requests', 'Просьбы и команды'],
        ['lesson_advice_jigeuraeyo', '-지 그래요? совет'],
        ['lesson_counters', 'Счётные слова расш.'],
        ['lesson_quantity_particles', '부터 · 씩 · 이상 · 만 빼고'],
        ['lesson_emotions', 'Эмоции и чувства'],
        ['lesson_shopping', 'Покупки'],
        ['lesson_weather_talk', 'Погода в разговоре'],
        ['lesson_progressive', 'Прогрессив -고 있다'],
        ['lesson_noda_duda', '-아/어 놓다 · -아/어 두다'],
        ['lesson_gajigo', '-아/어 가지고'],
        ['lesson_when_ttae', '-(으)ㄹ 때'],
        ['lesson_before_after', 'До и после'],
        ['lesson_confirmation_jyo', '-지요/죠?'],
        ['lesson_personality', 'Характер и личность'],
        ['lesson_education', 'Образование'],
        ['lesson_daily_detail', 'Распорядок дня подр.'],
        ['lesson_restaurant_dialogue', 'В ресторане'],
        ['lesson_tense_comparison', 'Три времени'],
        ['lesson_meeting_friend', 'Встреча с другом'],
        ['lesson_sports_vocab', 'Спорт и фитнес'],
        ['lesson_nature_vocab', 'Природа и пейзаж'],
        ['lesson_adverbs_degree', 'Наречия степени'],
        ['lesson_time_frequency_adverbs', 'Наречия времени и частотности'],
        ['lesson_abstract_nouns', 'Абстрактные существительные'],
        ['lesson_spoken_shortcuts', 'Разговорные сокращения'],
        ['lesson_weather_detailed', 'Погода подробно'],
        ['lesson_nature_environment', 'Природа'],
        ['lesson_state_adjectives', 'Прилагательные состояния'],
        ['lesson_filler_words', 'Филлеры']
    ];

    // -- Level 3 (3급) --
    var L3 = [
        ['lesson_topic_subject_deep', '이/가 vs 은/는 подробно'],
        ['lesson_because_aseo', 'Причина 아서/어서'],
        ['lesson_future_geoyeyo', 'Будущее -(으)ㄹ 거예요'],
        ['lesson_honorific_si', 'Почтительная -(으)시-'],
        ['lesson_experience_jeok', 'Опыт -ㄴ 적이 있다'],
        ['lesson_intention_ryeogo', 'Намерение -(으)려고'],
        ['lesson_indirect_speech_basic', 'Косвенная речь'],
        ['lesson_indirect_short', '-대요 · -냬요 · -재요 · -래요'],
        ['lesson_attributive_forms', 'Атрибутивные формы'],
        ['lesson_irregular_verbs_intro', 'Неправильные глаголы'],
        ['lesson_permission_prohibition', 'Разрешение и запрет'],
        ['lesson_must_deep', 'Долженствование углубл.'],
        ['lesson_tenikka_tende', '-(으)ㄹ 테니까 · -(으)ㄹ 텐데'],
        ['lesson_not_but_anira', '아니라 — не X, а Y'],
        ['lesson_question_particles', 'Вопросительные частицы'],
        ['lesson_inability_su_eopda', '-ㄹ 수 없다'],
        ['lesson_indirect_question', '-는지 알다/모르다'],
        ['lesson_moreugetda', '-(으)ㄹ지 모르겠다'],
        ['lesson_daga_interruption', '-다가 вдруг'],
        ['lesson_myeonseo_simultaneous', '-(으)면서 одновременно'],
        ['lesson_appearance', 'Описание внешности'],
        ['lesson_description_compare', '에 대해서 · 에 비해서 · N적'],
        ['lesson_transport_detail', 'Транспорт и путешествия'],
        ['lesson_directions', 'Дорога и навигация'],
        ['lesson_ro_uses', '(으)로 해서 · 로 만들다 · 로 유명하다'],
        ['lesson_bank', 'В банке'],
        ['lesson_hotel', 'В гостинице'],
        ['lesson_medical', 'Больница и аптека'],
        ['lesson_phone_talk', 'Телефонные разговоры'],
        ['lesson_formal_expressions', 'ㅂ니다만 · 기 바랍니다 · 한다체'],
        ['lesson_aseo_vs_nikka', '-아서 vs -니까'],
        ['lesson_cooking_vocab', 'Кулинария и рецепты'],
        ['lesson_jamaja', '-자마자 — как только'],
        ['lesson_nominalization', 'Номинализация 기/는 것'],
        ['lesson_gi_evaluation', '-기가 쉽다 · -기에 좋다'],
        ['lesson_rhetorical', 'Риторические вопросы'],
        ['lesson_social_topics', 'Социальные темы'],
        ['lesson_work_university', 'Работа и университет']
    ];

    // -- Level 4 (4급) --
    var L4 = [
        ['lesson_causative', 'Каузатив'],
        ['lesson_indirect_speech', 'Косвенная речь 고 하다'],
        ['lesson_symptoms_vocab', 'Симптомы и жалобы'],
        ['lesson_finance_vocab', 'Финансы и банк'],
        ['lesson_legal_basics', 'Юридические основы'],
        ['lesson_internet_slang', 'Интернет-сленг'],
        ['lesson_writing_messages', 'Написание писем'],
        ['lesson_baramae', '-는 바람에 — из-за того что'],
        ['lesson_beorida', '-아/어 버리다 — совсем, окончательно'],
        ['lesson_boni', '-다 보니 — незаметно для себя'],
        ['lesson_chaero', '-(으)ㄴ 채로 — в таком состоянии'],
        ['lesson_dedaga', '-는 데다가 — вдобавок'],
        ['lesson_deon', 'Ретроспективное -던'],
        ['lesson_deoni', '-았/었더니 — сделал и обнаружил'],
        ['lesson_dorok', '-도록 — чтобы, до такой степени'],
        ['lesson_eulsurok', '-(으)ㄹ수록 — чем..., тем...'],
        ['lesson_ge_hada', '-게 하다 — заставить, позволить'],
        ['lesson_gime', '-는 김에 — раз уж делаю'],
        ['lesson_maryeonida', '-기 마련이다 — так уж заведено'],
        ['lesson_neundedo', '-(으)ㄴ/는데도 — несмотря на'],
        ['lesson_neurago', '-느라고 — был занят, поэтому'],
        ['lesson_ppeonhada', '-(으)ㄹ 뻔하다 — чуть не...'],
        ['lesson_semida', '-(으)ㄴ/는 셈이다 — можно сказать'],
        ['lesson_through_tonghae', '통해(서) через'],
        ['lesson_written_style', 'Письменный стиль 문어체']
    ];

    // -- Level 5 (5급) --
    var L5 = [
        ['lesson_not_only', '-뿐만 아니라'],
        ['lesson_meanwhile_banmyeon', '-는 반면에'],
        ['lesson_subjunctive_if_only', '-(았/었)더라면 если бы'],
        ['lesson_media_news', 'Медиа и новости'],
        ['lesson_emotions_deep', 'Эмоции углубл.'],
        ['lesson_causative_passive_full', 'Каузатив и пассив'],
        ['lesson_narrative_style', 'Нарративный стиль'],
        ['lesson_punctuation', 'Пунктуация'],
        ['lesson_dialects', 'Диалекты'],
        ['lesson_proverbs', 'Пословицы'],
        ['lesson_doe', '-(으)되 — да, но при условии'],
        ['lesson_goja', '-고자 — с целью'],
        ['lesson_isang', '-는 이상 — раз уж так'],
        ['lesson_mangjeong', '-을망정 — пусть даже'],
        ['lesson_neunba', '-는바 — согласно нижеследующему'],
        ['lesson_neuni', '-느니 — уж лучше... чем...']
    ];

    // -- Level 6 (6급) --
    var L6 = [
        ['lesson_academic_vocabulary', 'Академическая лексика'],
        ['lesson_business_vocabulary', 'Деловая лексика'],
        ['lesson_idioms', 'Идиомы'],
        ['lesson_literary_expressions', 'Литературные выражения'],
        ['lesson_classic_texts', 'Классические тексты'],
        ['lesson_hanja_nuances', 'Нюансы 한자어'],
        ['lesson_korean_humor', 'Корейский юмор'],
        ['lesson_honorifics_real', 'Гонорификативность'],
        ['lesson_etymology', 'Этимология'],
        ['lesson_homonyms', 'Омонимы и паронимы'],
        ['lesson_jondaenmal_banmal', '존댓말 vs 반말'],
        ['lesson_north_korean', 'Северокорейский язык'],
        ['lesson_rhetoric', 'Корейская риторика'],
        ['lesson_sajaseongeo', '사자성어'],
        ['lesson_academic_writing', 'Структура научной статьи'],
        ['lesson_bokmun_nopim', 'Расширенные правила 주체 높임'],
        ['lesson_business_email_writing', 'Деловые письма (업무 이메일)'],
        ['lesson_dasipi_evidential', '-다시피'],
        ['lesson_diplomatic_language', 'Язык дипломатии'],
        ['lesson_dopyo_tonggye', 'Графики и статистика'],
        ['lesson_editorial_style', 'Стиль газетных передовиц'],
        ['lesson_eumeurosseo_means', '-음으로써'],
        ['lesson_geonman_contrast', '-건만'],
        ['lesson_gie_literary_cause', '-기에'],
        ['lesson_hoeuirok_writing', 'Написание 회의록'],
        ['lesson_hyeondaesa_baegyeong', 'Культурно-исторический фон XX века'],
        ['lesson_it_vocabulary', 'IT-лексика'],
        ['lesson_jagi_sogaeseo_writing', 'Написание 자기소개서'],
        ['lesson_keonyeong_farfrom', '-기는커녕'],
        ['lesson_legal_language', 'Язык юридических документов'],
        ['lesson_legal_litigation', 'Юридическая лексика: суд'],
        ['lesson_mangjeong_concessive', '-을망정/-ㄹ망정'],
        ['lesson_medical_vocabulary', 'Медицинская лексика'],
        ['lesson_minwon_writing', 'Написание 민원'],
        ['lesson_museopge_immediacy', '-기가 무섭게'],
        ['lesson_official_documents', 'Язык госдокументов'],
        ['lesson_pair_distinctions', 'Различение близких конструкций'],
        ['lesson_pidong_nuances', 'Нюансы пассива (피동)'],
        ['lesson_poetry_analysis', '시 분석과 상징'],
        ['lesson_sadong_nuances', 'Нюансы каузатива (사동)'],
        ['lesson_tonge_circumstance', '-는 통에'],
        ['lesson_ko_ru_translation', 'Ловушки корейско-русского перевода'],
        ['lesson_balpyo_qna', 'Публичное выступление и Q&A'],
        ['lesson_gugeo_sunhwa', 'История языковой политики Кореи']
    ];

    // Все группы с метаданными
    var GROUPS = [
        { id: 'root',    list: ROOT, prefix: '../',   levelDir: null,      levelLabel: '기초', indexUrl: '../lessons.html' },
        { id: 'level_1', list: L1,   prefix: '../',   levelDir: 'level_1', levelLabel: '1급',  indexUrl: '../level_1/index.html' },
        { id: 'level_2', list: L2,   prefix: '../',   levelDir: 'level_2', levelLabel: '2급',  indexUrl: '../level_2/index.html' },
        { id: 'level_3', list: L3,   prefix: '../',   levelDir: 'level_3', levelLabel: '3급',  indexUrl: '../level_3/index.html' },
        { id: 'level_4', list: L4,   prefix: '../',   levelDir: 'level_4', levelLabel: '4급',  indexUrl: '../level_4/index.html' },
        { id: 'level_5', list: L5,   prefix: '../',   levelDir: 'level_5', levelLabel: '5급',  indexUrl: '../level_5/index.html' },
        { id: 'level_6', list: L6,   prefix: '../',   levelDir: 'level_6', levelLabel: '6급',  indexUrl: '../level_6/index.html' }
    ];

    // ===================================================
    // ДЕТЕКЦИЯ ТЕКУЩЕГО УРОКА И ГРУППЫ
    // ===================================================
    function detectCurrentLesson() {
        var path = window.location.pathname;
        var parts = path.split('/').filter(function(p) { return p && p !== 'index.html'; });
        if (parts.length === 0) return null;

        var lessonDir = null;
        var parentDir = null;

        // /lesson_XX_name/index.html — root lesson
        // /level_N/lesson_name/index.html — level lesson
        // /lesson_XX_name/advanced/index.html — subpage of root lesson
        for (var i = parts.length - 1; i >= 0; i--) {
            if (parts[i].indexOf('lesson_') === 0) {
                lessonDir = parts[i];
                parentDir = i > 0 ? parts[i - 1] : null;
                break;
            }
        }
        if (!lessonDir) return null;

        // Определяем группу
        var groupId = 'root';
        if (parentDir && parentDir.indexOf('level_') === 0) {
            groupId = parentDir;
        }

        // Ищем в правильной группе
        for (var g = 0; g < GROUPS.length; g++) {
            var grp = GROUPS[g];
            if (grp.id !== groupId) continue;
            for (var j = 0; j < grp.list.length; j++) {
                if (grp.list[j][0] === lessonDir) {
                    return { group: grp, index: j, dir: lessonDir };
                }
            }
        }
        return null;
    }

    function isLessonPage() {
        return detectCurrentLesson() !== null;
    }

    function buildUrl(group, index) {
        var entry = group.list[index];
        if (!entry) return null;
        if (group.levelDir) {
            // level_N lesson: ../../level_N/lesson_name/index.html
            // but from within level_N, it's just ../lesson_name/index.html
            return '../' + entry[0] + '/index.html';
        }
        // root lesson
        return '../' + entry[0] + '/index.html';
    }

    // ===================================================
    // СКРОЛЛ-ПРОГРЕСС-БАР
    // ===================================================
    function injectScrollProgress() {
        if (document.getElementById('jk-scroll-progress')) return;
        var style = document.createElement('style');
        style.textContent =
            '#jk-scroll-progress {' +
            '  position: fixed; top: 0; left: 0;' +
            '  height: 3px; width: 0%;' +
            '  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);' +
            '  z-index: 99998; transition: width 0.1s linear;' +
            '  box-shadow: 0 0 8px rgba(102, 126, 234, 0.5);' +
            '  pointer-events: none;' +
            '}';
        document.head.appendChild(style);
        var bar = document.createElement('div');
        bar.id = 'jk-scroll-progress';
        document.body.appendChild(bar);

        function update() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
            bar.style.width = (docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0) + '%';
        }
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    // ===================================================
    // НАВИГАЦИЯ ← ПРЕДЫДУЩИЙ / СЛЕДУЮЩИЙ →
    // ===================================================
    function injectLessonNav() {
        var info = detectCurrentLesson();
        if (!info) return;
        if (document.getElementById('jk-lesson-nav')) return;

        var grp = info.group;
        var idx = info.index;
        var hasPrev = idx > 0;
        var hasNext = idx < grp.list.length - 1;
        var prevLabel = hasPrev ? grp.list[idx - 1][1] : null;
        var nextLabel = hasNext ? grp.list[idx + 1][1] : null;
        var prevUrl = hasPrev ? buildUrl(grp, idx - 1) : null;
        var nextUrl = hasNext ? buildUrl(grp, idx + 1) : null;
        var position = (idx + 1) + ' / ' + grp.list.length;

        var style = document.createElement('style');
        style.textContent =
            '#jk-lesson-nav {' +
            '  max-width: 1000px; margin: 40px auto 50px; padding: 0 20px;' +
            '  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;' +
            '  font-family: "Noto Sans KR", "Malgun Gothic", sans-serif;' +
            '}' +
            '#jk-lesson-nav .jk-nav-btn {' +
            '  display: block; padding: 20px 24px; background: white;' +
            '  border-radius: 16px; text-decoration: none; color: #333;' +
            '  box-shadow: 0 8px 28px rgba(0,0,0,0.08); transition: all 0.3s ease;' +
            '  border: 2px solid transparent;' +
            '}' +
            '#jk-lesson-nav .jk-nav-btn:hover {' +
            '  transform: translateY(-3px);' +
            '  box-shadow: 0 14px 36px rgba(102,126,234,0.25);' +
            '  border-color: #667eea;' +
            '}' +
            '#jk-lesson-nav .jk-nav-direction {' +
            '  font-size: 0.78em; text-transform: uppercase; letter-spacing: 1.5px;' +
            '  color: #888; font-weight: 600; margin-bottom: 6px;' +
            '}' +
            '#jk-lesson-nav .jk-nav-title {' +
            '  font-size: 1.1em; font-weight: 700; color: #333;' +
            '}' +
            '#jk-lesson-nav .jk-nav-prev { text-align: left; }' +
            '#jk-lesson-nav .jk-nav-next { text-align: right; }' +
            '#jk-lesson-nav .jk-nav-empty {' +
            '  background: rgba(255,255,255,0.5); box-shadow: none;' +
            '  opacity: 0.5; cursor: default;' +
            '}' +
            '#jk-lesson-nav .jk-nav-empty:hover {' +
            '  transform: none; box-shadow: none; border-color: transparent;' +
            '}' +
            '#jk-lesson-nav-position {' +
            '  grid-column: 1 / -1; text-align: center;' +
            '  font-size: 0.82em; color: #999; padding: 8px 0 0;' +
            '}' +
            '#jk-lesson-nav-position a { color: #667eea; text-decoration: none; }' +
            '#jk-lesson-nav-position a:hover { text-decoration: underline; }' +
            '@media (max-width: 600px) {' +
            '  #jk-lesson-nav { grid-template-columns: 1fr; }' +
            '  #jk-lesson-nav .jk-nav-next { text-align: left; }' +
            '}';
        document.head.appendChild(style);

        var nav = document.createElement('div');
        nav.id = 'jk-lesson-nav';
        nav.setAttribute('aria-label', 'Навигация по урокам');

        function makeBtn(className, direction, label, url) {
            if (url) {
                var a = document.createElement('a');
                a.className = 'jk-nav-btn ' + className;
                a.href = url;
                a.innerHTML = '<div class="jk-nav-direction">' + direction + '</div>' +
                              '<div class="jk-nav-title">' + label + '</div>';
                return a;
            }
            var div = document.createElement('div');
            div.className = 'jk-nav-btn ' + className + ' jk-nav-empty';
            var msg = className.indexOf('prev') !== -1 ? 'Это первый урок' : 'Последний урок серии';
            div.innerHTML = '<div class="jk-nav-direction">' + msg + '</div><div class="jk-nav-title">&nbsp;</div>';
            return div;
        }

        nav.appendChild(makeBtn('jk-nav-prev', '← Предыдущий', prevLabel, prevUrl));
        nav.appendChild(makeBtn('jk-nav-next', 'Следующий →', nextLabel, nextUrl));

        // Позиция: "Урок 15 / 74 — 기초 | Все уроки →"
        var posDiv = document.createElement('div');
        posDiv.id = 'jk-lesson-nav-position';
        posDiv.innerHTML = 'Урок ' + position + ' — ' + grp.levelLabel +
                           ' &nbsp;|&nbsp; <a href="' + grp.indexUrl + '">Все уроки ' + grp.levelLabel + ' →</a>';
        nav.appendChild(posDiv);

        // Вставляем внизу
        var complete = document.getElementById('completeLessonBtn');
        var target = complete ? complete.closest('div[style]') : null;
        if (target && target.parentNode) {
            target.parentNode.insertBefore(nav, target.nextSibling);
        } else {
            document.body.appendChild(nav);
        }
    }

    // ===================================================
    // ИНИЦИАЛИЗАЦИЯ
    // ===================================================
    function init() {
        injectScrollProgress();
        if (isLessonPage()) {
            injectLessonNav();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.JKLessonChrome = {
        detectCurrentLesson: detectCurrentLesson,
        GROUPS: GROUPS
    };
})();
