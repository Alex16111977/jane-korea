/**
 * Miso: 한국어 수업 — Lesson Chrome v3
 * - Скролл-прогресс-бар сверху страницы
 * - Сквозная навигация «← Предыдущий / Следующий →» для всех уроков
 *
 * Автоподключается из global-nav.js.
 * Определяет группу и позицию урока по URL.
 *
 * v3: списки L1-L6 пересобраны из реального порядка карточек на
 * level_N/index.html (в v2 они были захардкожены по старой, короче
 * версии программы и не обновлялись при добавлении новых уроков —
 * из-за этого "Следующий" вёл не туда или обрывался). Формат записи
 * теперь [абсолютный_путь_от_корня_сайта, подпись], потому что уроки
 * физически лежат в разных местах (корень проекта, level_N/,
 * level_N/vocabulary/, vocabulary/) — относительный URL строится
 * динамически через relativePath(), а не сборкой по фиксированному
 * префиксу.
 */
(function() {
    'use strict';

    // ===================================================
    // УПОРЯДОЧЕННЫЕ СПИСКИ УРОКОВ ПО ГРУППАМ
    // Формат записи: [абсолютный путь от корня сайта, подпись]
    // Порядок = порядок прохождения в программе (как на level_N/index.html).
    // ===================================================

    // -- Корневые уроки без своего level_N (не показаны ни на одной
    //    странице уровня — историческая часть программы) --

    var ROOT = [
        ['/lesson_01_korea/index.html', 'Знакомство с Кореей'],
        ['/lesson_02_alphabet/index.html', 'Алфавит хангыль'],
        ['/lesson_03_greetings/index.html', 'Приветствие и знакомство'],
        ['/lesson_04_numbers/index.html', 'Числа и время'],
        ['/lesson_05_family/index.html', 'Семья и отношения'],
        ['/lesson_06_grammar/index.html', 'Грамматика 1: частицы 이/가 и 은/는'],
        ['/lesson_07_verb_tenses/index.html', 'Времена глаголов'],
        ['/lesson_08_politeness/index.html', 'Формы вежливости 존댓말'],
        ['/lesson_09_negation/index.html', 'Отрицательные формы'],
        ['/lesson_10_copula/index.html', 'Связка 이에요/예요'],
        ['/lesson_11_informal_copula/index.html', 'Неформальная связка'],
        ['/lesson_12_formal_copula/index.html', 'Официальная связка'],
        ['/lesson_13_copula_negation/index.html', 'Отрицание связок'],
        ['/lesson_14_demonstratives/index.html', 'Указательные слова'],
        ['/lesson_15_demonstratives_practice/index.html', 'Есть/нет 있어요/없어요'],
        ['/lesson_16_location_verbs/index.html', 'Глаголы местонахождения'],
        ['/lesson_17_verb_conjugation/index.html', 'Спряжение глаголов 아요/어요'],
        ['/lesson_18_informal_verbs/index.html', 'Просто-личный стиль'],
        ['/lesson_19_formal_verbs/index.html', 'Вежливо-официальный стиль'],
        ['/lesson_20_accusative_case/index.html', 'Винительный падеж 을/를'],
        ['/lesson_21_location_ending/index.html', 'Место действия 에서'],
        ['/lesson_22_direction_ending/index.html', 'Направление 에'],
        ['/lesson_23_time_marker/index.html', 'Временной показатель 에'],
        ['/lesson_24_adjective_conjugation/index.html', 'Склонение прилагательных'],
        ['/lesson_25_hago_conjunction/index.html', 'Союз "и" 하고'],
        ['/lesson_26_conjunction_particles/index.html', 'Соединение 란/이란, 과/와'],
        ['/lesson_27_past_tense/index.html', 'Прошедшее время'],
        ['/lesson_28_conjunction_go/index.html', 'Соединительное -고'],
        ['/lesson_29_sequence_go/index.html', 'Последовательность с -고'],
        ['/lesson_30_future_tense/index.html', 'Будущее время 을/ㄹ 거예요'],
        ['/lesson_32_dative_case/index.html', 'Дательный падеж 에게/한테'],
        ['/lesson_33_possessive_case/index.html', 'Притяжательный падеж 의'],
        ['/lesson_34_want_desire/index.html', 'Желание 고 싶다'],
        ['/lesson_38_also_do/index.html', 'Частица 도 — тоже'],
        ['/lesson_39_only_man/index.html', 'Частица 만 — только'],
        ['/lesson_47_simultaneous_actions/index.html', 'Одновременные действия -면서'],
        ['/lesson_48_after_action/index.html', 'После действия -은/ㄴ 후에'],
        ['/lesson_50_before_action/index.html', 'Перед действием -기 전에'],
        ['/lesson_51_after_formal/index.html', 'Формальное «после» -고 나서'],
        ['/lesson_53_instrumental_ro/index.html', 'Инструментальный 로/으로'],
        ['/lesson_54_purpose_movement/index.html', 'Цель движения -러/으러'],
        ['/lesson_55_honorific_si/index.html', 'Почтительная -(으)시-'],
        ['/lesson_56_contrast_jiman/index.html', 'Противопоставление -지만'],
        ['/lesson_57_choice_ina/index.html', 'Выбор 이나'],
        ['/lesson_58_choice_geona/index.html', 'Выбор 거나'],
        ['/lesson_59_suggestion_eulkayo/index.html', 'Предложение -(으)ㄹ까요'],
        ['/lesson_61_helping_actions/index.html', 'Действия для других 주다'],
        ['/lesson_62_obligation/index.html', 'Долженствование 아/어야 하다'],
        ['/lesson_63_ability/index.html', 'Возможность -(으)ㄹ 수 있다'],
        ['/lesson_64_conditional_intention/index.html', 'Условие -(으)려면'],
        ['/lesson_65_minimum_condition/index.html', 'Минимум -기만 하면'],
        ['/lesson_66_permission/index.html', 'Разрешение -아도 되다'],
        ['/lesson_67_prohibition/index.html', 'Запрет -(으)면 안 되다'],
        ['/lesson_68_inability_ji_moshada/index.html', 'Неспособность -지 못하다'],
        ['/lesson_69_intention_promise/index.html', 'Намерение -(으)ㄹ게요'],
        ['/lesson_70_trying_experience/index.html', 'Попытка -아/어 보다'],
        ['/lesson_71_from_whom/index.html', 'От кого -에게서'],
        ['/lesson_72_future_intention/index.html', 'Намерение -겠-'],
        ['/lesson_73_supposition/index.html', 'Предположение -겠-'],
        ['/lesson_74_irregular_bieup/index.html', 'Неправильные ㅂ'],
        ['/lesson_75_irregular_digeut/index.html', 'Неправильные ㄷ'],
        ['/lesson_76_irregular_siot/index.html', 'Неправильные ㅅ'],
        ['/lesson_77_irregular_eu/index.html', 'Неправильные ㅡ'],
        ['/lesson_78_irregular_hieut/index.html', 'Неправильные ㅎ'],
        ['/lesson_79_irregular_rieul/index.html', 'Неправильные 르'],
        ['/lesson_80_possession_advanced/index.html', 'Обладание 가지다/갖다'],
        ['/lesson_81_comparative_constructions/index.html', 'Сравнительные -보다'],
        ['/lesson_82_reason_consequence/index.html', 'Причина -기 때문에'],
        ['/lesson_83_passive_constructions/index.html', 'Пассивный залог'],
        ['/lesson_84_constructions_neun_daero/index.html', 'Конструкции -는 대로'],
        ['/lesson_85_conditional_damyeon/index.html', 'Условное -다면'],
        ['/lesson_86_time_constructions/index.html', 'Временные конструкции'],
        ['/lesson_87_not_vs_cant/index.html', '안 vs 못'],
        ['/lesson_88_time_adverbs/index.html', '아직/이미/벌써'],
        ['/lesson_89_conjunctions_practice/index.html', 'Союзы 그래서/그런데'],
        ['/lesson_90_topik_prep/index.html', 'Подготовка к TOPIK II'],
        ['/lesson_91_essay_writing/index.html', 'Написание эссе'],
        ['/lesson_92_traditions/index.html', 'Корейские традиции'],
        ['/lesson_93_large_numbers/index.html', 'Большие числа и деньги'],
        ['/lesson_94_medicine/index.html', 'Корейская медицина']
    ];

    // -- Level 1 (1급) — порядок = карточки на level_1/index.html --
    var L1 = [
        ['/level_1/lesson_numbers_units/index.html', 'Числа с единицами'],
        ['/lesson_01_korea/index.html', 'Знакомство с Кореей'],
        ['/lesson_02_alphabet/index.html', 'Алфавит хангыль'],
        ['/lesson_104_consonant_assimilation/index.html', 'Пары согласных и ассимиляция'],
        ['/lesson_03_greetings/index.html', 'Приветствие'],
        ['/lesson_04_numbers/index.html', 'Числа'],
        ['/lesson_05_family/index.html', 'Семья'],
        ['/level_1/lesson_daily_routine/index.html', 'Распорядок дня'],
        ['/level_1/lesson_korean_keyboard/index.html', 'Корейская клавиатура'],
        ['/level_1/lesson_pronunciation/index.html', 'Правила произношения'],
        ['/level_1/lesson_liaison/index.html', '연음 — связывание звуков'],
        ['/level_1/lesson_tensification/index.html', '경음화 — напряжение согласных'],
        ['/level_1/lesson_h_deletion/index.html', 'ㅎ 탈락 — исчезающая ㅎ'],
        ['/level_1/lesson_lateralization/index.html', '유음화 — ㄴ становится ㄹ'],
        ['/level_1/lesson_n_insertion/index.html', 'ㄴ 첨가 — появление лишней ㄴ'],
        ['/level_1/lesson_palatalization/index.html', '구개음화 — ㄷ/ㅌ смягчаются'],
        ['/level_1/lesson_minimal_pairs/index.html', 'Минимальные пары'],
        ['/level_1/lesson_stroke_order/index.html', 'Порядок написания черт'],
        ['/level_1/lesson_korean_vs_russian/index.html', 'Корейский vs Русский'],
        ['/level_1/lesson_01_grammar/index.html', 'Основы грамматики'],
        ['/lesson_06_grammar/index.html', 'Грамматика 1: Частицы 이/가 и 은/는'],
        ['/lesson_10_copula/index.html', 'Грамматика 2: Связка 이다'],
        ['/lesson_11_informal_copula/index.html', 'Неформальная связка'],
        ['/lesson_12_formal_copula/index.html', 'Формальная связка'],
        ['/lesson_13_copula_negation/index.html', 'Отрицание связки'],
        ['/lesson_14_demonstratives/index.html', 'Указательные слова'],
        ['/level_1/lesson_demonstratives_full/index.html', '이/그/저 — полная система'],
        ['/lesson_15_demonstratives_practice/index.html', 'Глаголы 있어요/없어요'],
        ['/level_1/lesson_sov_order/index.html', 'Порядок слов SOV'],
        ['/level_1/lesson_topic_particle/index.html', 'Частица темы 은/는'],
        ['/level_1/lesson_subject_particle/index.html', 'Частица подлежащего 이/가'],
        ['/level_1/lesson_pronouns/index.html', 'Местоимения'],
        ['/level_1/lesson_place_prepositions/index.html', 'Предлоги места'],
        ['/level_1/lesson_particle_e/index.html', 'Частица места 에'],
        ['/level_1/lesson_particle_do/index.html', 'Частица 도 — тоже'],
        ['/level_1/lesson_question_sentences/index.html', 'Вопросительные предложения'],
        ['/level_1/lesson_counters_basic/index.html', 'Счётные слова'],
        ['/level_1/lesson_health_phrases/index.html', 'Здоровье и самочувствие'],
        ['/level_1/lesson_phone_numbers/index.html', 'Телефон и адрес'],
        ['/level_1/lesson_object_particle/index.html', 'Частица 을/를'],
        ['/level_1/lesson_location_eseo/index.html', 'Частица 에서'],
        ['/level_1/lesson_yes_no/index.html', 'Да и Нет (네/아니요)'],
        ['/level_1/lesson_time_age/index.html', 'Время и возраст'],
        ['/level_1/lesson_from_eseo/index.html', '에서 — «из» (источник)'],
        ['/level_1/lesson_eseo_kkaji/index.html', '에서 ~ 까지 — от … до'],
        ['/level_1/lesson_direction_euro/index.html', '으로/로 — направление'],
        ['/level_1/lesson_future_georeyeo/index.html', '할 거예요 — будущее время'],
        ['/level_1/lesson_verb_conjugation/index.html', 'Спряжение глаголов 아요/어요/해요'],
        ['/level_1/lesson_particle_ege/index.html', 'Частица 에게/한테 — кому'],
        ['/level_1/lesson_negation/index.html', 'Отрицание 안/못'],
        ['/level_1/lesson_want_gosipda/index.html', '-고 싶다 — хочу'],
        ['/level_1/lesson_adverbs_degree/index.html', 'Наречия степени'],
        ['/level_1/lesson_connecting_go/index.html', 'Соединительный -고'],
        ['/level_1/lesson_particle_man/index.html', 'Частица 만 — только'],
        ['/level_1/lesson_possessive_ui/index.html', 'Частица 의 — чей'],
        ['/level_1/lesson_not_but_anira/index.html', '이/가 아니라 — не X, а Y'],
        ['/level_1/lesson_rieul_verbs/index.html', 'ㄹ-глаголы — 살다 → 삽니다'],
        ['/level_1/lesson_formal_imperative/index.html', 'Просьба -(으)십시오 / -(으)세요'],
        ['/level_1/lesson_honorific_words/index.html', 'Почтительные слова'],
        ['/level_1/lesson_question_determiners/index.html', '무슨 / 어느 / 어떤 / 몇'],
        ['/level_1/lesson_neunyo_short/index.html', '-은요? / -는요? · N-요'],
        ['/level_1/lesson_adverb_da/index.html', '다 — всё, полностью'],
        ['/level_1/lesson_price_per_unit/index.html', 'N에 얼마예요? — цена за единицу'],
        ['/vocabulary/colors/index.html', 'Цвета'],
        ['/vocabulary/body/index.html', 'Части тела'],
        ['/vocabulary/adjectives/index.html', 'Прилагательные'],
        ['/vocabulary/opposites/index.html', 'Противоположности'],
        ['/vocabulary/places/index.html', 'География Кореи'],
        ['/vocabulary/synonyms/index.html', 'Синонимы'],
        ['/vocabulary/verbs/index.html', 'Действия (глаголы)'],
        ['/vocabulary/professions/index.html', 'Профессии'],
        ['/vocabulary/house/index.html', 'Дом и мебель'],
        ['/vocabulary/school/index.html', 'В школе'],
        ['/vocabulary/countries/index.html', 'Страны и национальности'],
        ['/vocabulary/basicfood/index.html', 'Еда и напитки'],
        ['/vocabulary/seasons/index.html', 'Времена года и месяцы'],
        ['/vocabulary/transport/index.html', 'Транспорт'],
        ['/vocabulary/daystime/index.html', 'Дни недели и время'],
        ['/vocabulary/questions/index.html', 'Вопросительные слова'],
        ['/vocabulary/conjunctions/index.html', 'Союзы'],
        ['/vocabulary/city/index.html', 'Город и места'],
        ['/vocabulary/hobbies/index.html', 'Хобби и свободное время'],
        ['/vocabulary/clothes/index.html', 'Одежда'],
        ['/vocabulary/money/index.html', 'Деньги и покупки'],
        ['/level_1/lesson_weather_basic/index.html', 'Погода'],
        ['/level_1/lesson_emotions_basic/index.html', 'Эмоции'],
        ['/level_1/lesson_nature_simple/index.html', 'Природа'],
        ['/level_1/lesson_antonyms/index.html', 'Антонимы'],
        ['/level_1/lesson_korean_food/index.html', 'Корейская кухня'],
        ['/level_1/lesson_numbers_life/index.html', 'Числа в жизни'],
        ['/level_1/lesson_english_loanwords/index.html', 'Английские заимствования'],
        ['/level_1/lesson_describe_person/index.html', 'Описание человека'],
        ['/level_1/lesson_confusing_words/index.html', 'Слова, которые легко перепутать'],
        ['/level_1/lesson_movement_verbs/index.html', 'Глаголы движения'],
        ['/vocabulary/time_adverbs/index.html', 'Наречия времени'],
        ['/vocabulary/date/index.html', 'Дата — год, месяц, день'],
        ['/vocabulary/animals/index.html', 'Животные'],
        ['/level_1/lesson_campus/index.html', 'Университет: аудитория и кампус'],
        ['/level_1/lesson_food_order/index.html', 'Виды кухни и заказ в ресторане'],
        ['/level_1/lesson_majors/index.html', 'Специальность и учёба'],
        ['/vocabulary/slang/index.html', 'Живая разговорная речь'],
        ['/vocabulary/kpop_fandom/index.html', 'K-POP и фандом'],
        ['/vocabulary/counters/index.html', 'Счётные слова'],
        ['/vocabulary/bathroom/index.html', 'Ванная и туалет'],
        ['/vocabulary/topik1_nouns_1/index.html', 'TOPIK 초급: существительные I'],
        ['/vocabulary/topik1_nouns_2/index.html', 'TOPIK 초급: существительные II'],
        ['/vocabulary/topik1_verbs/index.html', 'TOPIK 초급: глаголы'],
        ['/vocabulary/topik1_adj_adv/index.html', 'TOPIK 초급: прилагательные и наречия'],
        ['/vocabulary/topik1_numbers_pronouns/index.html', 'TOPIK 초급: числа, местоимения, счётные слова'],
        ['/vocabulary/korea_realia/index.html', 'Реалии Кореи: места, услуги, связь'],
        ['/vocabulary/polite_formulas/index.html', 'Вежливые формулы и фразы'],
        ['/level_1/lesson_yonsei_review/index.html', 'Повторяем всё: 정리해 봅시다'],
        ['/level_1/lesson_introduction_dialogue/index.html', 'Знакомство'],
        ['/level_1/lesson_cafe_shopping/index.html', 'Кафе и магазин'],
        ['/level_1/lesson_about_me/index.html', 'Рассказ о себе'],
        ['/level_1/lesson_transport_dialogue/index.html', 'Транспорт: диалоги'],
        ['/level_1/lesson_pharmacy_dialogue/index.html', 'Аптека и больница'],
        ['/level_1/lesson_sms_chat/index.html', 'SMS и KakaoTalk'],
        ['/level_1/lesson_russian_mistakes/index.html', 'Частые ошибки русскоязычных'],
        ['/level_1/lesson_shopping_clothes/index.html', 'В магазине одежды'],
        ['/level_1/lesson_directions_basic/index.html', 'Базовая навигация'],
        ['/level_1/lesson_fill_form/index.html', 'Заполняем анкету'],
        ['/level_1/lesson_etiquette/index.html', 'Корейский этикет'],
        ['/level_1/lesson_holidays/index.html', 'Корейские праздники'],
        ['/level_1/lesson_kdrama_phrases/index.html', 'K-drama фразы'],
        ['/level_1/lesson_korean_names/index.html', 'Обращения и имена'],
        ['/level_1/lesson_korean_age/index.html', 'Корейский возраст (한국 나이)'],
        ['/level_1/lesson_casual_slang/index.html', 'Разговорный сленг'],
        ['/level_1/lesson_street_greetings/index.html', 'Живые приветствия и прощания']
    ];

    // -- Level 2 (2급) — порядок = карточки на level_2/index.html --
    var L2 = [
        ['/level_2/lesson_intro_attributive/index.html', '관형사형 -는 · -(으)ㄴ · -(으)ㄹ'],
        ['/level_2/lesson_intro_must/index.html', '아/어야 하다 — надо сделать'],
        ['/level_2/lesson_intro_ability/index.html', '(으)ㄹ 수 있다/없다 — могу'],
        ['/level_2/lesson_intro_myeonseo/index.html', '(으)면서 — одновременно'],
        ['/level_2/lesson_intro_haeboda/index.html', '아/어 보다 — попробовать'],
        ['/level_2/lesson_intro_geoyo/index.html', '(으)ㄹ게요 — я сделаю'],
        ['/level_2/lesson_experience_jeoki/index.html', '-ㄴ/은 적이 있다/없다'],
        ['/level_2/lesson_seems_like/index.html', '-는 것 같다 / -(으)ㄹ 것 같다'],
        ['/level_2/lesson_neunde/index.html', '(으)ㄴ/는데 — а, но, кстати'],
        ['/level_2/lesson_time_now/index.html', '지금 · 이제 · 요즘 · 아까 · 이따가'],
        ['/level_2/lesson_reactions/index.html', '네요 · -군요 · -나요? — реакция'],
        ['/level_2/lesson_ge_adverb/index.html', '게 · -아/어하다 · -는 데 걸리다'],
        ['/level_2/lesson_jul_alda/index.html', '(으)ㄹ 줄 알다/모르다 — уметь'],
        ['/level_2/lesson_volition/index.html', '겠어요 · -(으)ㄹ래요 · -(으)시겠어요'],
        ['/level_2/lesson_purpose/index.html', '(으)려고 · -기 위해서 · -기로 하다'],
        ['/level_2/lesson_concession_wish/index.html', '아/어도 · можно не · хотелось бы'],
        ['/level_2/lesson_small_particles/index.html', '밖에 · 마다 · 처럼 · 쯤'],
        ['/level_2/lesson_supposition_geoyeyo/index.html', '(으)ㄹ 거예요 — предположение'],
        ['/level_2/lesson_if_myeon/index.html', '-(으)면 — если: введение'],
        ['/level_2/lesson_topic_vs_subject/index.html', '은/는 vs 이/가'],
        ['/level_2/lesson_02_politeness/index.html', 'Уровни вежливости'],
        ['/lesson_09_negation/index.html', 'Отрицание'],
        ['/lesson_24_adjective_conjugation/index.html', 'Спряжение прилагательных'],
        ['/lesson_87_not_vs_cant/index.html', '안 vs 못 — углублённый'],
        ['/lesson_88_time_adverbs/index.html', '아직/이미/벌써'],
        ['/lesson_89_conjunctions_practice/index.html', 'Союзы — углублённый'],
        ['/level_2/lesson_particle_ege/index.html', '께 / 께서 — вежливое «кому» и «кто»'],
        ['/level_2/lesson_connecting_go/index.html', 'Соединительный союз -고'],
        ['/level_2/lesson_go_sipahada/index.html', '-고 싶어하다 — он/она хочет'],
        ['/level_2/lesson_adjective_modifier/index.html', 'Прилагательные перед сущ. -(으)ㄴ'],
        ['/level_2/lesson_aseo_cause/index.html', '-아서/어서 — причина и последовательность'],
        ['/level_2/lesson_nikkayo/index.html', '(으)니까요 — потому что (в конце)'],
        ['/level_2/lesson_condition_myeon/index.html', '-(으)면 — если: подробно'],
        ['/level_2/lesson_but_jiman/index.html', '-지만 — но, однако'],
        ['/level_2/lesson_past_questions/index.html', 'Вопросы в прошедшем времени'],
        ['/lesson_57_choice_ina/index.html', 'Выбор 이나 — «или»'],
        ['/lesson_58_choice_geona/index.html', 'Выбор 거나'],
        ['/level_2/lesson_plans_intention/index.html', '(으)ㄹ까 하다 · -아/어야겠다 — планы'],
        ['/level_2/lesson_geodeunyo/index.html', '거든요 · -인데요 — объяснение'],
        ['/level_2/lesson_quantity_particles/index.html', '부터 · 씩 · 이상/이하 · 만 빼고'],
        ['/lesson_95_assumption_geot_gatda/index.html', 'Предположение -(으)ㄹ 것 같다'],
        ['/lesson_96_tendency_pyeonida/index.html', 'Скорее да, чем нет -는/(으)ㄴ 편이다'],
        ['/lesson_97_solution_myeon_doeda/index.html', 'Достаточно сделать -(으)면 되다'],
        ['/lesson_98_concession_gineun_hada/index.html', 'Вообще-то да, но… -기는 하다'],
        ['/lesson_99_modesty_gineunyo/index.html', 'Ну что вы! -기는요'],
        ['/lesson_100_any_deunji/index.html', 'Что угодно, когда угодно -(이)든지'],
        ['/lesson_101_becoming_i_ga_doeda/index.html', 'Становиться кем-то -이/가 되다'],
        ['/lesson_102_nothing_amu_do/index.html', 'Ничего и никто — 아무 -도'],
        ['/lesson_103_price_jjari_eochi/index.html', 'Цена и сумма: -짜리 и -어치'],
        ['/lesson_16_location_verbs/index.html', 'Есть/нет 있다/없다'],
        ['/level_2/lesson_irregular_verbs/index.html', 'Неправильные глаголы (불규칙)'],
        ['/lesson_18_informal_verbs/index.html', 'Неформальные глаголы'],
        ['/lesson_19_formal_verbs/index.html', 'Формальные глаголы'],
        ['/lesson_27_past_tense/index.html', 'Прошедшее время'],
        ['/lesson_30_future_tense/index.html', 'Будущее время'],
        ['/level_2/lesson_past_perfect/index.html', '았/었었어요 — давнопрошедшее'],
        ['/level_2/lesson_intonation/index.html', '억양 — интонация решает смысл'],
        ['/level_2/lesson_ida_questions/index.html', '이다 в вопросах'],
        ['/level_2/lesson_uncertainty/index.html', 'Неопределённость'],
        ['/level_2/lesson_requests/index.html', 'Просьбы и команды'],
        ['/level_2/lesson_counters/index.html', 'Счётные слова — расширенный'],
        ['/level_2/lesson_emotions/index.html', 'Эмоции — расширенный'],
        ['/level_2/lesson_shopping/index.html', 'Покупки в магазине'],
        ['/level_2/lesson_weather_talk/index.html', 'Погода в разговоре — расширенный'],
        ['/lesson_59_suggestion_eulkayo/index.html', 'Предложение -(으)ㄹ까요?'],
        ['/level_2/lesson_eupsida/index.html', '(으)ㅂ시다 — давайте сделаем'],
        ['/level_2/lesson_advice_jigeuraeyo/index.html', '지 그래요? · -는 게 좋겠다 — совет'],
        ['/level_2/lesson_progressive/index.html', 'Прогрессив -고 있다'],
        ['/level_2/lesson_state_verbs/index.html', '고 있다 ② · -아/어 있다 — состояния'],
        ['/level_2/lesson_changes/index.html', '아/어지다 · -게 되다 — изменения'],
        ['/lesson_61_helping_actions/index.html', '아/어 주다'],
        ['/level_2/lesson_eo_deurida/index.html', '아/어 드리다 — для старшего'],
        ['/lesson_69_intention_promise/index.html', '(으)ㄹ게요'],
        ['/lesson_70_trying_experience/index.html', '아/어 보다'],
        ['/lesson_68_inability_ji_moshada/index.html', '지 못하다'],
        ['/lesson_62_obligation/index.html', '아/어야 하다'],
        ['/lesson_71_from_whom/index.html', '에게서/-한테서'],
        ['/lesson_54_purpose_movement/index.html', 'Цель движения -(으)러'],
        ['/level_2/lesson_noda_duda/index.html', '아/어 놓다 · -아/어 두다 — заранее'],
        ['/level_2/lesson_gajigo/index.html', '아/어 가지고 · 가져오다/가져가다'],
        ['/level_2/lesson_boida/index.html', 'A-아/어 보이다 — «выглядит»'],
        ['/level_2/lesson_when_ttae/index.html', '-(으)ㄹ 때 — когда'],
        ['/level_2/lesson_duration/index.html', '는 중 · 동안 · (으)ㄴ 지'],
        ['/level_2/lesson_before_after/index.html', '-기 전에 / 후에 — до и после'],
        ['/level_2/lesson_confirmation_jyo/index.html', '-지요/죠? — правда ведь?'],
        ['/level_2/lesson_personality/index.html', 'Характер и личность'],
        ['/level_2/lesson_education/index.html', 'Образование и учёба'],
        ['/level_2/lesson_daily_detail/index.html', 'Распорядок дня — подробно'],
        ['/level_2/lesson_restaurant_dialogue/index.html', 'В ресторане — диалоги'],
        ['/level_2/lesson_tense_comparison/index.html', 'Три времени вместе'],
        ['/level_2/lesson_meeting_friend/index.html', 'Встреча с другом'],
        ['/level_2/lesson_sports_vocab/index.html', 'Спорт и фитнес'],
        ['/level_2/lesson_nature_vocab/index.html', 'Природа и пейзаж'],
        ['/level_2/vocabulary/time/index.html', 'Время'],
        ['/vocabulary/travel_vocab/index.html', 'Путешествия'],
        ['/vocabulary/sports/index.html', 'Спорт — базовый словарь'],
        ['/vocabulary/office/index.html', 'Офис'],
        ['/vocabulary/communication/index.html', 'Общение и связь'],
        ['/level_2/lesson_adverbs_degree/index.html', 'Наречия степени'],
        ['/level_2/lesson_time_frequency_adverbs/index.html', 'Наречия времени и частотности'],
        ['/level_2/lesson_abstract_nouns/index.html', 'Абстрактные существительные'],
        ['/level_2/lesson_spoken_shortcuts/index.html', 'Разговорные сокращения'],
        ['/level_2/lesson_weather_detailed/index.html', 'Погода — подробная лексика'],
        ['/level_2/lesson_nature_environment/index.html', 'Природа и окружающая среда'],
        ['/level_2/lesson_state_adjectives/index.html', 'Прилагательные состояния'],
        ['/level_2/lesson_filler_words/index.html', 'Слова-связки и филлеры'],
        ['/level_2/lesson_friends_titles/index.html', 'Друзья, знакомства и обращения'],
        ['/level_2/lesson_vocab_pop_culture/index.html', '대중문화 — поп-культура'],
        ['/level_2/lesson_vocab_lost_items/index.html', '분실 — потерял вещь'],
        ['/level_2/lesson_vocab_recycling/index.html', '분리수거 — сортировка мусора'],
        ['/level_2/lesson_vocab_cooking/index.html', '요리법과 요리 도구 — готовим'],
        ['/level_2/lesson_vocab_public_offices/index.html', '공공 기관 — госучреждения'],
        ['/level_2/lesson_vocab_office_supplies/index.html', '사무용품과 직장 생활 — офис'],
        ['/level_2/lesson_vocab_public_places/index.html', '공공장소 — общественные места'],
        ['/level_2/lesson_vocab_medicine_types/index.html', '증상과 약품 종류 — аптека'],
        ['/level_2/lesson_vocab_school_life/index.html', '학교생활 — школьная жизнь'],
        ['/level_2/lesson_vocab_housing/index.html', '주거 형태와 이사 — жильё и переезд'],
        ['/vocabulary/adverbs_spoken/index.html', 'Разговорные наречия'],
        ['/vocabulary/taste_cooking/index.html', 'Вкус и готовка'],
        ['/vocabulary/personality/index.html', 'Характер и личность'],
        ['/vocabulary/romance/index.html', 'Любовь и отношения'],
        ['/vocabulary/symptoms/index.html', 'Симптомы и болезни'],
        ['/vocabulary/aegyo/index.html', 'Милая речь (애교)'],
        ['/vocabulary/verbs_actions/index.html', 'Глаголы: второй круг'],
        ['/vocabulary/everyday_nouns/index.html', 'Быт, вещи и заимствования'],
        ['/vocabulary/games/index.html', 'Игры и школьные забавы'],
        ['/level_2/lesson_culture_gestures/index.html', '한국의 몸짓 언어 — жесты'],
        ['/level_2/lesson_culture_traffic_signs/index.html', '한국의 교통 표지판 — знаки'],
        ['/level_2/lesson_culture_hobbies/index.html', '취미와 여가 생활 — досуг'],
        ['/level_2/lesson_culture_health_habits/index.html', '건강에 좋은 생활 습관'],
        ['/level_2/lesson_culture_weather_life/index.html', '날씨와 생활 — погода и сезоны'],
        ['/level_2/lesson_culture_etiquette/index.html', '한국의 예절 — этикет и извинения']
    ];

    // -- Level 3 (3급) — порядок = карточки на level_3/index.html --
    var L3 = [
        ['/lesson_21_location_ending/index.html', 'Место действия 에서'],
        ['/lesson_32_dative_case/index.html', 'Дательный падеж 에게/한테'],
        ['/lesson_33_possessive_case/index.html', 'Притяжательность 의'],
        ['/lesson_38_also_do/index.html', 'Тоже 도'],
        ['/lesson_39_only_man/index.html', '1️⃣ Урок 5: Только 만'],
        ['/level_3/lesson_ro_uses/index.html', '(으)로 해서 · (으)로 만들다 · (으)로 유명하다'],
        ['/level_3/lesson_jamaja/index.html', 'Как только -자마자'],
        ['/lesson_25_hago_conjunction/index.html', 'Соединение 하고'],
        ['/lesson_26_conjunction_particles/index.html', 'Частицы 와/과, 랑/이랑'],
        ['/lesson_28_conjunction_go/index.html', 'Союз 고'],
        ['/level_3/lesson_rhetorical/index.html', 'Риторические вопросы'],
        ['/level_3/lesson_nominalization/index.html', 'Номинализация 기/는 것'],
        ['/lesson_63_ability/index.html', 'Способности 을 수 있다'],
        ['/lesson_81_comparative_constructions/index.html', 'Сравнения 보다'],
        ['/lesson_53_instrumental_ro/index.html', 'Инструмент/способ 로'],
        ['/lesson_29_sequence_go/index.html', 'Последовательность 고 나서'],
        ['/lesson_56_contrast_jiman/index.html', 'Противопоставление 지만'],
        ['/level_3/lesson_topic_subject_deep/index.html', '이/가 vs 은/는 подробно'],
        ['/level_3/lesson_because_aseo/index.html', 'Причина 아서/어서'],
        ['/level_3/lesson_not_but_anira/index.html', 'Не X, а Y — 이/가 아니라'],
        ['/level_3/lesson_phone_talk/index.html', 'Телефонные разговоры'],
        ['/level_3/lesson_question_particles/index.html', 'Вопросительные частицы'],
        ['/level_3/lesson_appearance/index.html', 'Описание внешности'],
        ['/level_3/lesson_inability_su_eopda/index.html', 'Невозможность -을 수 없다'],
        ['/level_3/lesson_indirect_question/index.html', 'Косвенный вопрос -는지'],
        ['/level_3/lesson_daga_interruption/index.html', 'Прерывание -다가'],
        ['/level_3/lesson_myeonseo_simultaneous/index.html', 'Одновременность -(으)면서'],
        ['/level_3/lesson_irregular_verbs_intro/index.html', 'Неправильные глаголы'],
        ['/lesson_74_irregular_bieup/index.html', 'Неправильные ㅂ — углублённо'],
        ['/lesson_75_irregular_digeut/index.html', 'Неправильные ㄷ — углублённо'],
        ['/lesson_76_irregular_siot/index.html', 'Неправильные ㅅ — углублённо'],
        ['/lesson_77_irregular_eu/index.html', 'Неправильные ㅡ'],
        ['/lesson_78_irregular_hieut/index.html', 'Неправильные ㅎ'],
        ['/lesson_79_irregular_rieul/index.html', 'Неправильные 르'],
        ['/level_3/lesson_future_geoyeyo/index.html', 'Будущее время -(으)ㄹ 거예요'],
        ['/level_3/lesson_intention_ryeogo/index.html', 'Намерение -(으)려고 하다'],
        ['/level_3/lesson_permission_prohibition/index.html', 'Разрешение и запрет'],
        ['/level_3/lesson_experience_jeok/index.html', 'Опыт -(으)ㄴ 적이 있다'],
        ['/level_3/lesson_must_deep/index.html', 'Долженствование -아/어야 하다'],
        ['/level_3/lesson_attributive_forms/index.html', 'Атрибутивные формы глаголов'],
        ['/level_3/lesson_honorific_si/index.html', 'Почтительная речь -(으)시-'],
        ['/level_3/lesson_indirect_speech_basic/index.html', 'Косвенная речь -다고 하다'],
        ['/lesson_64_conditional_intention/index.html', 'Условие намерения -(으)려면'],
        ['/level_3/lesson_aseo_vs_nikka/index.html', '아서 vs -니까'],
        ['/lesson_82_reason_consequence/index.html', 'Причина -기 때문에'],
        ['/lesson_72_future_intention/index.html', 'Запланировано -(으)ㄹ 예정이다'],
        ['/level_3/lesson_tenikka_tende/index.html', '(으)ㄹ 테니까 · -(으)ㄹ 텐데'],
        ['/level_3/lesson_moreugetda/index.html', '(으)ㄹ지 모르겠다 · 얼마나 -(으)ㄴ지 몰라요'],
        ['/level_3/lesson_gi_evaluation/index.html', '기가 쉽다/어렵다 · -기에 좋다 · -기 시작하다'],
        ['/level_3/lesson_description_compare/index.html', 'N에 대해서 · N에 비해서 · N적'],
        ['/level_3/lesson_indirect_short/index.html', '대요 · -냬요 · -재요 · -래요'],
        ['/level_3/lesson_daesin_irado/index.html', 'N 대신(에) · N(이)라도'],
        ['/level_3/lesson_formal_expressions/index.html', '(스)ㅂ니다만 · -기 바랍니다 · 한다체'],
        ['/lesson_109_verbal_postpositions/index.html', 'Отглагольные послелоги 대하여 · 위하여 · 통하여'],
        ['/lesson_110_adjective_derivation/index.html', 'Именные прилагательные -적 и словообразование'],
        ['/level_3/lesson_work_university/index.html', 'На работе / в университете'],
        ['/level_3/lesson_medical/index.html', 'В больнице и аптеке'],
        ['/level_3/lesson_bank/index.html', 'В банке'],
        ['/level_3/lesson_directions/index.html', 'Дорога и навигация'],
        ['/level_3/lesson_hotel/index.html', 'В гостинице'],
        ['/level_3/lesson_social_topics/index.html', 'Социальные темы'],
        ['/level_3/lesson_cooking_vocab/index.html', 'Кулинария'],
        ['/vocabulary/weather/index.html', 'Погода'],
        ['/level_3/lesson_transport_detail/index.html', 'Транспорт'],
        ['/lesson_92_traditions/index.html', 'Традиции и праздники'],
        ['/lesson_93_large_numbers/index.html', 'Большие числа и деньги'],
        ['/level_3/lesson_party_korean/index.html', 'Тусовка по-корейски: 술자리 и 노래방'],
        ['/vocabulary/party/index.html', 'Тусовка и застолье'],
        ['/vocabulary/onomatopoeia/index.html', 'Звукоподражания и миметика'],
        ['/vocabulary/beauty/index.html', 'Косметика и уход'],
        ['/vocabulary/space/index.html', 'Космос и планеты'],
        ['/vocabulary/topik3_nouns_1/index.html', 'TOPIK 중급: существительные I'],
        ['/vocabulary/topik3_nouns_2/index.html', 'TOPIK 중급: существительные II'],
        ['/vocabulary/topik3_nouns_3/index.html', 'TOPIK 중급: существительные III'],
        ['/vocabulary/topik3_verbs_1/index.html', 'TOPIK 중급: глаголы I'],
        ['/vocabulary/topik3_verbs_2/index.html', 'TOPIK 중급: глаголы II'],
        ['/vocabulary/topik3_adjectives/index.html', 'TOPIK 중급: прилагательные'],
        ['/vocabulary/topik3_adverbs/index.html', 'TOPIK 중급: наречия'],
        ['/vocabulary/fairy_tale/index.html', 'Сказка «Красная Шапочка»'],
        ['/vocabulary/abstract_life/index.html', 'Понятия, люди и служебные слова'],
        ['/vocabulary/hairstyle/index.html', 'В парикмахерской'],
        ['/vocabulary/holidays/index.html', 'Корейские праздники'],
        ['/vocabulary/trip_planning/index.html', 'Планируем поездку'],
        ['/vocabulary/marriage/index.html', 'Отношения и брак'],
        ['/vocabulary/accidents/index.html', 'Происшествия и аварии'],
        ['/vocabulary/mystic/index.html', 'Мистика и суеверия']
    ];

    // -- Level 4 (4급) — порядок = карточки на level_4/index.html --
    var L4 = [
        ['/level_4/lesson_boni/index.html', '다 보니'],
        ['/level_4/lesson_gime/index.html', '는 김에'],
        ['/level_4/lesson_deoni/index.html', '았/었더니'],
        ['/level_4/lesson_maryeonida/index.html', '기 마련이다'],
        ['/level_4/lesson_semida/index.html', '(으)ㄴ/는 셈이다'],
        ['/level_4/lesson_dedaga/index.html', '는 데다가'],
        ['/level_4/lesson_through_tonghae/index.html', 'Через/посредством 통해서'],
        ['/lesson_83_passive_constructions/index.html', 'Пассивные конструкции'],
        ['/level_4/lesson_causative/index.html', 'Каузатив'],
        ['/level_4/lesson_ge_hada/index.html', 'Побуждение -게 하다'],
        ['/level_4/lesson_indirect_speech/index.html', 'Косвенная речь — все формы'],
        ['/level_4/lesson_neurago/index.html', 'Причина -느라고'],
        ['/level_4/lesson_baramae/index.html', 'Неожиданная причина -는 바람에'],
        ['/level_4/lesson_eulsurok/index.html', 'Чем..., тем... -(으)ㄹ수록'],
        ['/level_4/lesson_dorok/index.html', 'Чтобы / до степени -도록'],
        ['/level_4/lesson_deon/index.html', 'Ретроспектив -던/-았던'],
        ['/level_4/lesson_beorida/index.html', 'Завершённость -아/어 버리다, -고 말다'],
        ['/level_4/lesson_ppeonhada/index.html', 'Чуть не... -(으)ㄹ 뻔하다'],
        ['/level_4/lesson_neundedo/index.html', 'Несмотря на -(으)ㄴ/는데도'],
        ['/level_4/lesson_chaero/index.html', 'В состоянии -(으)ㄴ 채로'],
        ['/level_4/lesson_written_style/index.html', 'Письменный стиль 문어체'],
        ['/level_4/lesson_internet_slang/index.html', 'Интернет-сленг'],
        ['/level_4/lesson_writing_messages/index.html', 'Написание писем и сообщений'],
        ['/lesson_105_retrospective_deoragoyo/index.html', 'Личное наблюдение -더라고요 · -던데요'],
        ['/lesson_106_cause_gillae/index.html', 'Повод для действия -길래'],
        ['/lesson_107_shared_knowledge_janayo/index.html', 'Общее знание -잖아요'],
        ['/lesson_108_hearsay_damyeonseo/index.html', 'Слухи и упрёк -다면서요 · -라면서요'],
        ['/lesson_130_pretend_cheokhada/index.html', 'Притворяться -는 척하다'],
        ['/lesson_131_regret_geol_geuraetda/index.html', 'Сожаление -(으)ㄹ 걸 그랬다'],
        ['/lesson_132_degree_jeongdoro/index.html', 'Степень действия -(으)ㄹ 정도로'],
        ['/lesson_91_essay_writing/index.html', 'Написание эссе'],
        ['/lesson_90_topik_prep/index.html', 'Подготовка к TOPIK II'],
        ['/level_4/technology_vocabulary/index.html', 'Технологии'],
        ['/level_4/culture_vocabulary/index.html', 'Культура и искусство'],
        ['/level_4/health_vocabulary/index.html', 'Здоровье и медицина'],
        ['/lesson_94_medicine/index.html', 'Медицина и аптека — практика'],
        ['/level_4/lesson_finance_vocab/index.html', 'Финансы'],
        ['/level_4/lesson_legal_basics/index.html', 'Юридические основы'],
        ['/level_4/business_vocabulary/index.html', 'Деловая лексика'],
        ['/level_4/emotions_vocabulary/index.html', 'Эмоции и чувства'],
        ['/level_4/society_vocabulary/index.html', 'Общество и политика'],
        ['/level_4/ecology_vocabulary/index.html', 'Экология и природа'],
        ['/level_4/education_vocabulary/index.html', 'Образование'],
        ['/level_4/lesson_symptoms_vocab/index.html', 'Симптомы и жалобы'],
        ['/level_4/lesson_people_types/index.html', 'Социальные типажи и ярлыки'],
        ['/vocabulary/people_types/index.html', 'Люди, роли и типажи'],
        ['/vocabulary/religion/index.html', 'Религии и мировоззрение']
    ];

    // -- Level 5 (5급) — порядок = карточки на level_5/index.html --
    var L5 = [
        ['/level_5/lesson_neunba/index.html', '는바'],
        ['/level_5/lesson_mangjeong/index.html', '을망정'],
        ['/level_5/lesson_neuni/index.html', '느니'],
        ['/level_5/lesson_goja/index.html', '고자'],
        ['/level_5/lesson_doe/index.html', '(으)되'],
        ['/level_5/lesson_isang/index.html', '는 이상'],
        ['/level_5/lesson_conditions_decisions/index.html', 'Условия и решения'],
        ['/level_5/lesson_concession_advanced/index.html', 'Уступка: -더라도 · -(으)ㄹ지라도 · -(으)ㄴ들 · -고도'],
        ['/level_5/lesson_supposition_advanced/index.html', 'Допущение и сходство'],
        ['/level_5/lesson_choice_advanced/index.html', 'Выбор и уточнение'],
        ['/level_5/lesson_bookish_cause/index.html', 'Книжная причина и источник'],
        ['/level_5/lesson_addition/index.html', 'Добавление и включение'],
        ['/level_5/lesson_habits_degree/index.html', 'Привычки, отношение и степень'],
        ['/level_5/lesson_intention_advanced/index.html', 'Намерение: что задумал и что вышло'],
        ['/level_5/lesson_supposition_degree/index.html', 'Предположение и вероятность'],
        ['/level_5/lesson_enumeration/index.html', 'Перечисление и неизбежность'],
        ['/level_5/lesson_result_retrospect/index.html', 'Результат и ретроспекция'],
        ['/level_5/lesson_situation_emphasis/index.html', 'Ситуация, критерий и усиление'],
        ['/level_5/lesson_bookish_connectors/index.html', 'Книжные связки'],
        ['/level_5/lesson_apprehension/index.html', 'Опасение, притворство, отрицание'],
        ['/level_5/lesson_causative_passive_full/index.html', 'Полная система 사동/피동'],
        ['/level_5/lesson_narrative_style/index.html', 'Нарративный стиль'],
        ['/level_5/lesson_punctuation/index.html', 'Корейская пунктуация'],
        ['/level_5/lesson_not_only/index.html', 'Не только... но и -뿐만 아니라'],
        ['/level_5/lesson_meanwhile_banmyeon/index.html', 'Тогда как -는 반면에'],
        ['/level_5/lesson_subjunctive_if_only/index.html', 'Сослагательное -(았/었)더라면'],
        ['/level_5/lesson_ganjeop_nuance/index.html', 'Оттенки косвенной речи'],
        ['/level_5/lesson_yangtae_chuchuk/index.html', 'Модальность предположения'],
        ['/level_5/lesson_matchumbeop/index.html', 'Орфография C1 (맞춤법)'],
        ['/level_5/lesson_guoche_chukyak/index.html', 'Разговорная редукция (구어체 축약)'],
        ['/level_5/lesson_suryang_eorimsu/index.html', 'Приблизительное количество'],
        ['/lesson_111_probability_beophada/index.html', 'Правдоподобие -(으)ㄹ 법하다 · -(으)ㄹ 성싶다'],
        ['/lesson_112_situation_madang_cha/index.html', 'Ситуация -는 마당에 · -는 차에'],
        ['/lesson_113_formal_time_apseo/index.html', 'Официальное время -기에 앞서 · -는 데 있어'],
        ['/level_5/business_korean/index.html', 'Деловой корейский'],
        ['/level_5/high_honorifics/index.html', 'Высокие формы вежливости'],
        ['/level_5/newspaper_style/index.html', 'Газетный стиль'],
        ['/level_5/causality/index.html', 'Причинные конструкции'],
        ['/level_5/contrasts/index.html', 'Противопоставления'],
        ['/level_5/lesson_proverbs/index.html', 'Корейские пословицы (속담)'],
        ['/level_5/lesson_topik_54_essay/index.html', 'TOPIK 쓰기 54번: эссе-рассуждение'],
        ['/level_5/lesson_gyeokssik_jeonhwan/index.html', 'Переключение регистров'],
        ['/level_5/literary_korean/index.html', 'Литературный корейский'],
        ['/level_5/psychology/index.html', 'Психология и культура'],
        ['/level_5/academic_korean/index.html', 'Академический корейский'],
        ['/level_5/dialects/index.html', 'Диалекты'],
        ['/level_5/lesson_dialects/index.html', 'Диалекты: разбор по регионам'],
        ['/level_5/lesson_media_news/index.html', 'Медиа и новости'],
        ['/level_5/lesson_emotions_deep/index.html', 'Глубокие эмоции'],
        ['/level_5/lesson_appearance_slang/index.html', 'Внешность: 얼짱, 몸짱 и 성형수술'],
        ['/vocabulary/appearance/index.html', 'Внешность и стиль']
    ];

    // -- Level 6 (6급) — порядок = карточки на level_6/index.html --
    var L6 = [
        ['/level_6/lesson_mangjeong_concessive/index.html', 'Конструкция -을망정'],
        ['/level_6/lesson_geonman_contrast/index.html', 'Конструкция -건만'],
        ['/level_6/lesson_dasipi_evidential/index.html', 'Конструкция -다시피'],
        ['/level_6/lesson_tonge_circumstance/index.html', 'Конструкция -는 통에'],
        ['/level_6/lesson_museopge_immediacy/index.html', 'Конструкция -기가 무섭게'],
        ['/level_6/lesson_keonyeong_farfrom/index.html', 'Конструкция -기는커녕'],
        ['/level_6/lesson_eumeurosseo_means/index.html', 'Конструкция -음으로써'],
        ['/level_6/lesson_gie_literary_cause/index.html', 'Конструкция -기에'],
        ['/level_6/lesson_sadong_nuances/index.html', 'Нюансы каузатива (사동)'],
        ['/level_6/lesson_pidong_nuances/index.html', 'Нюансы пассива (피동)'],
        ['/level_6/lesson_bokmun_nopim/index.html', 'Расширенные правила 주체 높임'],
        ['/level_6/lesson_pair_distinctions/index.html', 'Различение близких конструкций'],
        ['/level_6/lesson_gime_maryeon/index.html', '-는 김에 и -기 마련이다'],
        ['/level_6/lesson_sajaseongeo/index.html', '사자성어 — четырёхсимвольные идиомы'],
        ['/level_6/lesson_jondaenmal_banmal/index.html', '존댓말 vs 반말 — полная система'],
        ['/level_6/lesson_rhetoric/index.html', 'Корейская риторика'],
        ['/level_6/lesson_homonyms/index.html', 'Омонимы и паронимы'],
        ['/level_6/lesson_etymology/index.html', 'Этимология (어원)'],
        ['/lesson_114_belittling_bulgwahada/index.html', 'Принижение -에 불과하다 · -느니만 못하다'],
        ['/lesson_115_extreme_geujieopda/index.html', 'Крайняя степень -기 그지없다 · -기 짝이 없다'],
        ['/lesson_116_literary_eullachimyeon/index.html', 'Литературные обороты -(으)ㄹ라치면 · -(으)ㄹ세라'],
        ['/level_6/lesson_poetry_analysis/index.html', 'Анализ поэзии и символизм'],
        ['/level_6/lesson_official_documents/index.html', 'Судебные решения и госдокументы'],
        ['/level_6/lesson_academic_writing/index.html', 'Структура научной статьи'],
        ['/level_6/lesson_diplomatic_language/index.html', 'Язык дипломатии и переговоров'],
        ['/level_6/lesson_editorial_style/index.html', 'Стиль газетных передовиц'],
        ['/level_6/lesson_legal_language/index.html', 'Язык юридических документов'],
        ['/level_6/lesson_minwon_writing/index.html', 'Написание 민원 (гражданского обращения)'],
        ['/level_6/lesson_business_email_writing/index.html', 'Написание деловых писем (업무 이메일)'],
        ['/level_6/lesson_jagi_sogaeseo_writing/index.html', 'Написание 자기소개서'],
        ['/level_6/lesson_hoeuirok_writing/index.html', 'Написание 회의록'],
        ['/level_6/lesson_dopyo_tonggye/index.html', 'Описание графиков и статистики'],
        ['/level_6/lesson_hyeondaesa_baegyeong/index.html', 'Культурно-исторический фон XX века'],
        ['/level_6/lesson_ko_ru_translation/index.html', 'Ловушки корейско-русского перевода'],
        ['/level_6/lesson_balpyo_qna/index.html', 'Публичное выступление и Q&A'],
        ['/level_6/lesson_gugeo_sunhwa/index.html', 'История языковой политики Кореи'],
        ['/level_6/lesson_topik_reading_strategy/index.html', 'Стратегия чтения TOPIK 6급'],
        ['/level_6/lesson_seosa_gibeop/index.html', 'Анализ повествовательной техники'],
        ['/level_6/lesson_geosigyeongje/index.html', 'Макроэкономическая лексика'],
        ['/level_6/lesson_guknae_jeongchi/index.html', 'Лексика внутренней политики'],
        ['/level_6/lesson_sinche_gwanyongeo/index.html', 'Идиомы с частями тела'],
        ['/level_6/lesson_academic_vocabulary/index.html', 'Академическая лексика'],
        ['/level_6/lesson_idioms/index.html', 'Идиомы и фразеологизмы'],
        ['/level_6/lesson_business_vocabulary/index.html', 'Корпоративная стратегия'],
        ['/level_6/lesson_literary_expressions/index.html', 'Литературные выражения'],
        ['/level_6/lesson_medical_vocabulary/index.html', 'Медицинская лексика'],
        ['/level_6/lesson_classic_texts/index.html', 'Классические тексты'],
        ['/level_6/lesson_hanja_nuances/index.html', '한자어 — китайские заимствования'],
        ['/level_6/lesson_honorifics_real/index.html', 'Гонорификативность в реальности'],
        ['/level_6/lesson_it_vocabulary/index.html', 'IT-лексика'],
        ['/level_6/lesson_legal_litigation/index.html', 'Юридическая лексика: судопроизводство'],
        ['/level_6/lesson_north_korean/index.html', 'Северокорейский язык (북한 말)'],
        ['/level_6/lesson_korean_humor/index.html', 'Корейский юмор и мемы'],
        ['/level_6/lesson_street_korean/index.html', 'Уличный корейский: понимать, но не говорить'],
        ['/level_5/mastery/index.html', 'Итог курса: 한국어 마스터']
    ];

    // Все группы с метаданными.
    // Порядок важен: level_1..level_6 идут раньше root, потому что
    // многие корневые уроки ТАКЖЕ показаны как карточки на каком-то
    // уровне — там их и нужно искать первыми, чтобы получить соседей
    // по актуальной программе, а не по старому корневому списку.
    var GROUPS = [
        { id: 'level_1', list: L1,   levelLabel: '1급', indexPath: '/level_1/index.html' },
        { id: 'level_2', list: L2,   levelLabel: '2급', indexPath: '/level_2/index.html' },
        { id: 'level_3', list: L3,   levelLabel: '3급', indexPath: '/level_3/index.html' },
        { id: 'level_4', list: L4,   levelLabel: '4급', indexPath: '/level_4/index.html' },
        { id: 'level_5', list: L5,   levelLabel: '5급', indexPath: '/level_5/index.html' },
        { id: 'level_6', list: L6,   levelLabel: '6급', indexPath: '/level_6/index.html' },
        { id: 'root',    list: ROOT, levelLabel: '기초', indexPath: '/lessons.html' }
    ];

    // ===================================================
    // ОТНОСИТЕЛЬНЫЙ URL МЕЖДУ ДВУМЯ АБСОЛЮТНЫМИ ПУТЯМИ САЙТА
    // Не зависит от глубины вложенности — работает для любой
    // комбинации (корень, level_N/, level_N/vocabulary/, vocabulary/).
    // ===================================================
    function relativePath(fromAbsPath, toAbsPath) {
        var fromParts = fromAbsPath.split('/').filter(Boolean);
        var toParts = toAbsPath.split('/').filter(Boolean);
        fromParts.pop(); // убираем index.html — считаем от каталога текущего файла
        var toFile = toParts.pop();

        var common = 0;
        while (common < fromParts.length && common < toParts.length &&
               fromParts[common] === toParts[common]) {
            common++;
        }

        var segments = [];
        for (var i = common; i < fromParts.length; i++) segments.push('..');
        for (var j = common; j < toParts.length; j++) segments.push(toParts[j]);
        segments.push(toFile);
        return segments.join('/');
    }

    // ===================================================
    // ДЕТЕКЦИЯ ТЕКУЩЕГО УРОКА И ГРУППЫ
    // Ищем по тому, чем реально заканчивается URL страницы — это
    // устойчиво и к file://, и к деплою из подпапки.
    // ===================================================
    function detectCurrentLesson() {
        var path = window.location.pathname;

        function endsWith(str, suffix) {
            return str.length >= suffix.length &&
                   str.substring(str.length - suffix.length) === suffix;
        }

        for (var g = 0; g < GROUPS.length; g++) {
            var grp = GROUPS[g];
            for (var j = 0; j < grp.list.length; j++) {
                if (endsWith(path, grp.list[j][0])) {
                    return { group: grp, index: j };
                }
            }
        }
        return null;
    }

    function isLessonPage() {
        return detectCurrentLesson() !== null;
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
        var currentAbs = grp.list[idx][0];
        var prevUrl = hasPrev ? relativePath(currentAbs, grp.list[idx - 1][0]) : null;
        var nextUrl = hasNext ? relativePath(currentAbs, grp.list[idx + 1][0]) : null;
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
        var indexUrl = relativePath(currentAbs, grp.indexPath);
        posDiv.innerHTML = 'Урок ' + position + ' — ' + grp.levelLabel +
                           ' &nbsp;|&nbsp; <a href="' + indexUrl + '">Все уроки ' + grp.levelLabel + ' →</a>';
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
