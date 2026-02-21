/**
 * Jane Korea — Разговорные фразы для реальных ситуаций в Корее
 * 6 ситуаций: кафе, такси, врач, рынок, аэропорт, отель
 * Каждая ситуация содержит 12-15 фраз и мини-диалог (6-8 реплик)
 * Экспорт: window.PhrasesData
 */

window.PhrasesData = {
    situations: [

        // =====================================================
        // 1. В кафе / ресторане
        // =====================================================
        {
            id: 'cafe',
            icon: '\uD83C\uDF7D',
            title: 'В кафе / ресторане',
            titleKr: '카페 / 식당에서',
            color: '#FF6B35',
            description: 'Заказ еды, меню, оплата',
            phrases: [
                {
                    korean: '메뉴판 좀 주세요',
                    romanization: 'menyupan jom juseyo',
                    translation: 'Дайте, пожалуйста, меню',
                    note: 'Базовая просьба в любом заведении'
                },
                {
                    korean: '주문할게요',
                    romanization: 'jumunhalgeyo',
                    translation: 'Я буду заказывать',
                    note: 'Говорите, когда готовы сделать заказ'
                },
                {
                    korean: '물 좀 주세요',
                    romanization: 'mul jom juseyo',
                    translation: 'Дайте, пожалуйста, воду',
                    note: 'В Корее вода в ресторанах бесплатная'
                },
                {
                    korean: '추천 메뉴가 뭐예요?',
                    romanization: 'chucheon menyuga mwoyeyo?',
                    translation: 'Что порекомендуете?',
                    note: 'Хороший способ узнать фирменное блюдо'
                },
                {
                    korean: '여기서 제일 인기 있는 게 뭐예요?',
                    romanization: 'yeogiseo jeil ingi inneun ge mwoyeyo?',
                    translation: 'Что здесь самое популярное?',
                    note: 'Корейцы любят, когда иностранцы интересуются их едой'
                },
                {
                    korean: '이거 매워요?',
                    romanization: 'igeo maewoyo?',
                    translation: 'Это острое?',
                    note: 'Очень важный вопрос в Корее!'
                },
                {
                    korean: '안 매운 것으로 주세요',
                    romanization: 'an maeun geoseuro juseyo',
                    translation: 'Дайте, пожалуйста, не острое',
                    note: 'Если не любите острое — запомните эту фразу'
                },
                {
                    korean: '아이스 아메리카노 하나 주세요',
                    romanization: 'aiseu amerikano hana juseyo',
                    translation: 'Один айс американо, пожалуйста',
                    note: 'Самый популярный напиток в корейских кафе'
                },
                {
                    korean: '계산서 주세요',
                    romanization: 'gyesanseo juseyo',
                    translation: 'Счёт, пожалуйста',
                    note: 'В Корее обычно платят на кассе у выхода'
                },
                {
                    korean: '카드로 결제할게요',
                    romanization: 'kadeuro gyeoljehalgeyo',
                    translation: 'Оплачу картой',
                    note: 'В Корее карты принимают практически везде'
                },
                {
                    korean: '현금으로 할게요',
                    romanization: 'hyeongeumeuro halgeyo',
                    translation: 'Оплачу наличными',
                    note: 'Наличные всё ещё используют на рынках и в мелких кафе'
                },
                {
                    korean: '너무 맛있어요!',
                    romanization: 'neomu masisseoyo!',
                    translation: 'Очень вкусно!',
                    note: 'Комплимент повару — всегда приятно'
                },
                {
                    korean: '더 주세요',
                    romanization: 'deo juseyo',
                    translation: 'Добавьте ещё, пожалуйста',
                    note: 'Во многих корейских ресторанах добавка риса и банчанов бесплатна'
                },
                {
                    korean: '포장해 주세요',
                    romanization: 'pojanghae juseyo',
                    translation: 'Упакуйте с собой, пожалуйста',
                    note: 'Поджан (포장) = take-out. Можно также сказать 가져갈게요'
                },
                {
                    korean: '채식 메뉴 있어요?',
                    romanization: 'chaesik menyu isseoyo?',
                    translation: 'Есть вегетарианское меню?',
                    note: 'Вегетарианство набирает популярность, но выбор пока ограничен'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: заказ в кафе',
                lines: [
                    { speaker: '손님', korean: '여기요! 메뉴판 좀 주세요.', translation: 'Извините! Дайте меню, пожалуйста.' },
                    { speaker: '직원', korean: '네, 여기 있습니다. 주문하시겠어요?', translation: 'Да, вот. Будете заказывать?' },
                    { speaker: '손님', korean: '추천 메뉴가 뭐예요?', translation: 'Что порекомендуете?' },
                    { speaker: '직원', korean: '비빔냉면이 제일 인기 있어요.', translation: 'Пибим нэнмён самый популярный.' },
                    { speaker: '손님', korean: '그거 매워요? 안 매운 것으로 주세요.', translation: 'Это острое? Дайте не острое, пожалуйста.' },
                    { speaker: '직원', korean: '네, 알겠습니다. 음료는요?', translation: 'Хорошо. Напитки будете?' },
                    { speaker: '손님', korean: '아이스 아메리카노 하나요. 계산서 주세요.', translation: 'Один айс американо. Счёт, пожалуйста.' },
                    { speaker: '직원', korean: '총 15,000원입니다. 카드로 하시겠어요?', translation: 'Всего 15 000 вон. Картой оплатите?' }
                ]
            }
        },

        // =====================================================
        // 2. В такси
        // =====================================================
        {
            id: 'taxi',
            icon: '\uD83D\uDE95',
            title: 'В такси',
            titleKr: '택시에서',
            color: '#4CAF50',
            description: 'Поездка, направления, оплата',
            phrases: [
                {
                    korean: '택시 불러 주세요',
                    romanization: 'taeksi bulleo juseyo',
                    translation: 'Вызовите такси, пожалуйста',
                    note: 'Можно попросить на ресепшене отеля'
                },
                {
                    korean: '이 주소로 가 주세요',
                    romanization: 'i jusoro ga juseyo',
                    translation: 'Отвезите по этому адресу, пожалуйста',
                    note: 'Покажите адрес на экране телефона — так надёжнее'
                },
                {
                    korean: '얼마나 걸려요?',
                    romanization: 'eolmana geollyeoyo?',
                    translation: 'Сколько времени ехать?',
                    note: 'Полезно спросить перед поездкой'
                },
                {
                    korean: '얼마예요?',
                    romanization: 'eolmayeyo?',
                    translation: 'Сколько стоит?',
                    note: 'Можно спросить примерную стоимость заранее'
                },
                {
                    korean: '왼쪽으로 가 주세요',
                    romanization: 'oenjjogeuro ga juseyo',
                    translation: 'Поверните налево, пожалуйста',
                    note: 'Вэнчок (왼쪽) = левая сторона'
                },
                {
                    korean: '오른쪽으로 가 주세요',
                    romanization: 'oreunjjogeuro ga juseyo',
                    translation: 'Поверните направо, пожалуйста',
                    note: 'Орынчок (오른쪽) = правая сторона'
                },
                {
                    korean: '직진해 주세요',
                    romanization: 'jikjinhae juseyo',
                    translation: 'Прямо, пожалуйста',
                    note: 'Чикчин (직진) = прямо'
                },
                {
                    korean: '여기서 세워 주세요',
                    romanization: 'yeogiseo sewo juseyo',
                    translation: 'Остановите здесь, пожалуйста',
                    note: 'Сэво (세워) = остановить'
                },
                {
                    korean: '길이 많이 막히네요',
                    romanization: 'giri mani makineyo',
                    translation: 'Большая пробка',
                    note: 'Пробки в Сеуле — обычное дело, особенно в час пик'
                },
                {
                    korean: '트렁크 열어 주세요',
                    romanization: 'teureongkeu yeoreo juseyo',
                    translation: 'Откройте багажник, пожалуйста',
                    note: 'Тхырончхы (트렁크) — от английского trunk'
                },
                {
                    korean: '에어컨 좀 틀어 주세요',
                    romanization: 'eeokeon jom teureo juseyo',
                    translation: 'Включите кондиционер, пожалуйста',
                    note: 'Летом в Корее очень жарко и влажно'
                },
                {
                    korean: '좀 빨리 가 주세요',
                    romanization: 'jom ppalli ga juseyo',
                    translation: 'Побыстрее, пожалуйста',
                    note: 'Используйте осторожно — водители могут обидеться'
                },
                {
                    korean: '거스름돈 주세요',
                    romanization: 'geoseureumdon juseyo',
                    translation: 'Сдачу, пожалуйста',
                    note: 'При оплате наличными'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: поездка от аэропорта до отеля',
                lines: [
                    { speaker: '승객', korean: '안녕하세요. 이 주소로 가 주세요.', translation: 'Здравствуйте. Отвезите по этому адресу, пожалуйста.' },
                    { speaker: '기사', korean: '네, 알겠습니다. 명동 호텔이죠?', translation: 'Хорошо. Отель в Мёндоне?' },
                    { speaker: '승객', korean: '네, 맞아요. 얼마나 걸려요?', translation: 'Да, верно. Сколько ехать?' },
                    { speaker: '기사', korean: '길이 안 막히면 40분 정도요.', translation: 'Если нет пробок, минут 40.' },
                    { speaker: '승객', korean: '트렁크 열어 주세요. 가방이 있어요.', translation: 'Откройте багажник. У меня чемодан.' },
                    { speaker: '기사', korean: '도착했습니다. 35,000원입니다.', translation: 'Приехали. 35 000 вон.' },
                    { speaker: '승객', korean: '카드로 결제할게요. 감사합니다!', translation: 'Оплачу картой. Спасибо!' }
                ]
            }
        },

        // =====================================================
        // 3. У врача
        // =====================================================
        {
            id: 'doctor',
            icon: '\uD83C\uDFE5',
            title: 'У врача',
            titleKr: '병원에서',
            color: '#2196F3',
            description: 'Симптомы, осмотр, лекарства',
            phrases: [
                {
                    korean: '예약하고 싶은데요',
                    romanization: 'yeyakhago sipeundeyo',
                    translation: 'Я хотел(а) бы записаться на приём',
                    note: 'В Корее можно прийти и без записи, но ждать дольше'
                },
                {
                    korean: '머리가 아파요',
                    romanization: 'meoriga apayo',
                    translation: 'У меня болит голова',
                    note: 'Мори (머리) = голова, апайо (아파요) = болит'
                },
                {
                    korean: '배가 아파요',
                    romanization: 'baega apayo',
                    translation: 'У меня болит живот',
                    note: 'Пэ (배) = живот'
                },
                {
                    korean: '목이 아파요',
                    romanization: 'mogi apayo',
                    translation: 'У меня болит горло',
                    note: 'Мок (목) = горло/шея'
                },
                {
                    korean: '열이 있어요',
                    romanization: 'yeori isseoyo',
                    translation: 'У меня температура',
                    note: 'Ёль (열) = жар/температура'
                },
                {
                    korean: '알레르기가 있어요',
                    romanization: 'allereugi-ga isseoyo',
                    translation: 'У меня есть аллергия',
                    note: 'Обязательно сообщите об аллергиях перед назначением лекарств'
                },
                {
                    korean: '처방전 주세요',
                    romanization: 'cheobangjon juseyo',
                    translation: 'Дайте рецепт, пожалуйста',
                    note: 'Рецепт нужно отнести в аптеку (약국)'
                },
                {
                    korean: '가까운 약국이 어디예요?',
                    romanization: 'gakkaun yakgugi eodiyeyo?',
                    translation: 'Где ближайшая аптека?',
                    note: 'Аптеки в Корее обозначены знаком 약'
                },
                {
                    korean: '보험이 되나요?',
                    romanization: 'boheomi doenayo?',
                    translation: 'Страховка покрывает?',
                    note: 'Узнайте, покрывает ли ваша страховка осмотр'
                },
                {
                    korean: '언제부터 아파셨어요?',
                    romanization: 'eonjebuteo apasyeosseoyo?',
                    translation: 'С каких пор болит?',
                    note: 'Врач часто задаёт этот вопрос — подготовьте ответ'
                },
                {
                    korean: '약을 처방해 주세요',
                    romanization: 'yageul cheobanghae juseyo',
                    translation: 'Выпишите лекарство, пожалуйста',
                    note: 'Як (약) = лекарство/таблетки'
                },
                {
                    korean: '감기에 걸린 것 같아요',
                    romanization: 'gamgie geollin geot gatayo',
                    translation: 'Кажется, я простудился(-ась)',
                    note: 'Камги (감기) = простуда'
                },
                {
                    korean: '다음 진료는 언제예요?',
                    romanization: 'daeum jillyoneun eonjeyeyo?',
                    translation: 'Когда следующий приём?',
                    note: 'Чилле (진료) = осмотр/приём'
                },
                {
                    korean: '진료비가 얼마예요?',
                    romanization: 'jillyobiga eolmayeyo?',
                    translation: 'Сколько стоит осмотр?',
                    note: 'Без страховки осмотр может стоить 30 000-50 000 вон'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: визит к врачу с простудой',
                lines: [
                    { speaker: '환자', korean: '안녕하세요. 감기에 걸린 것 같아요.', translation: 'Здравствуйте. Кажется, я простудился.' },
                    { speaker: '의사', korean: '언제부터 아파셨어요?', translation: 'С каких пор болеете?' },
                    { speaker: '환자', korean: '어제부터요. 목이 아프고 열이 있어요.', translation: 'Со вчера. Болит горло и есть температура.' },
                    { speaker: '의사', korean: '알레르기가 있으세요?', translation: 'Аллергии есть?' },
                    { speaker: '환자', korean: '아니요, 없어요.', translation: 'Нет, нет аллергии.' },
                    { speaker: '의사', korean: '약을 처방해 드릴게요. 3일 동안 드세요.', translation: 'Выпишу лекарство. Принимайте 3 дня.' },
                    { speaker: '환자', korean: '감사합니다. 진료비가 얼마예요?', translation: 'Спасибо. Сколько стоит осмотр?' },
                    { speaker: '의사', korean: '보험 적용하면 5,000원입니다.', translation: 'Со страховкой 5 000 вон.' }
                ]
            }
        },

        // =====================================================
        // 4. На рынке / в магазине
        // =====================================================
        {
            id: 'market',
            icon: '\uD83D\uDED2',
            title: 'На рынке / в магазине',
            titleKr: '시장 / 가게에서',
            color: '#9C27B0',
            description: 'Покупки, торг, примерка',
            phrases: [
                {
                    korean: '이거 얼마예요?',
                    romanization: 'igeo eolmayeyo?',
                    translation: 'Сколько это стоит?',
                    note: 'Самая важная фраза на рынке'
                },
                {
                    korean: '좀 깎아 주세요',
                    romanization: 'jom kkakka juseyo',
                    translation: 'Сделайте скидку, пожалуйста',
                    note: 'Торговаться на рынках — нормально, в магазинах — нет'
                },
                {
                    korean: '입어 봐도 되나요?',
                    romanization: 'ibeo bwado doenayo?',
                    translation: 'Можно примерить?',
                    note: 'Спрашивайте перед примеркой — это вежливо'
                },
                {
                    korean: '다른 사이즈 있어요?',
                    romanization: 'dareun saijeu isseoyo?',
                    translation: 'Есть другой размер?',
                    note: 'Корейские размеры могут отличаться от европейских'
                },
                {
                    korean: '다른 색깔 있어요?',
                    romanization: 'dareun saekkal isseoyo?',
                    translation: 'Есть другой цвет?',
                    note: 'Сэккаль (색깔) = цвет'
                },
                {
                    korean: '봉투 주세요',
                    romanization: 'bongtu juseyo',
                    translation: 'Дайте пакет, пожалуйста',
                    note: 'Пакеты в Корее платные (100-500 вон)'
                },
                {
                    korean: '카드 되나요?',
                    romanization: 'kadeu doenayo?',
                    translation: 'Картой можно?',
                    note: 'На традиционных рынках лучше иметь наличные'
                },
                {
                    korean: '할인 있어요?',
                    romanization: 'harin isseoyo?',
                    translation: 'Есть скидка?',
                    note: 'Харин (할인) = скидка'
                },
                {
                    korean: '신선해요?',
                    romanization: 'sinseonhaeyo?',
                    translation: 'Свежее?',
                    note: 'Спрашивайте про фрукты, овощи и морепродукты'
                },
                {
                    korean: '1킬로그램 주세요',
                    romanization: 'il killogeuraem juseyo',
                    translation: 'Один килограмм, пожалуйста',
                    note: 'На рынках товар часто продают на вес'
                },
                {
                    korean: '맛봐도 되나요?',
                    romanization: 'masbwado doenayo?',
                    translation: 'Можно попробовать?',
                    note: 'На рынках часто дают попробовать бесплатно'
                },
                {
                    korean: '너무 비싸요',
                    romanization: 'neomu bissayo',
                    translation: 'Слишком дорого',
                    note: 'Помогает начать торг'
                },
                {
                    korean: '탈의실이 어디예요?',
                    romanization: 'taruisiri eodiyeyo?',
                    translation: 'Где примерочная?',
                    note: 'Тхарыисиль (탈의실) = примерочная'
                },
                {
                    korean: '영수증 주세요',
                    romanization: 'yeongsujeung juseyo',
                    translation: 'Чек, пожалуйста',
                    note: 'Сохраняйте чеки для tax refund'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: покупка фруктов на рынке с торгом',
                lines: [
                    { speaker: '손님', korean: '사과 얼마예요?', translation: 'Сколько стоят яблоки?' },
                    { speaker: '상인', korean: '한 봉지에 5,000원이에요.', translation: 'Один пакет 5 000 вон.' },
                    { speaker: '손님', korean: '너무 비싸요. 좀 깎아 주세요.', translation: 'Слишком дорого. Сделайте скидку.' },
                    { speaker: '상인', korean: '그럼 4,000원에 드릴게요.', translation: 'Тогда отдам за 4 000 вон.' },
                    { speaker: '손님', korean: '맛봐도 되나요?', translation: 'Можно попробовать?' },
                    { speaker: '상인', korean: '네, 드세요! 오늘 아침에 들어온 거예요.', translation: 'Да, попробуйте! Сегодня утром завезли.' },
                    { speaker: '손님', korean: '맛있네요! 두 봉지 주세요.', translation: 'Вкусно! Дайте два пакета.' },
                    { speaker: '상인', korean: '감사합니다! 또 오세요!', translation: 'Спасибо! Приходите ещё!' }
                ]
            }
        },

        // =====================================================
        // 5. В аэропорту
        // =====================================================
        {
            id: 'airport',
            icon: '\u2708\uFE0F',
            title: 'В аэропорту',
            titleKr: '공항에서',
            color: '#E91E63',
            description: 'Регистрация, посадка, багаж',
            phrases: [
                {
                    korean: '여권 여기 있습니다',
                    romanization: 'yeogwon yeogi iseumnida',
                    translation: 'Вот мой паспорт',
                    note: 'Ёгвон (여권) = паспорт'
                },
                {
                    korean: '탑승권 주세요',
                    romanization: 'tapseunggwon juseyo',
                    translation: 'Посадочный талон, пожалуйста',
                    note: 'Тхапсынгвон (탑승권) = посадочный талон'
                },
                {
                    korean: '탑승구가 어디예요?',
                    romanization: 'tapseungguga eodiyeyo?',
                    translation: 'Где выход на посадку?',
                    note: 'Тхапсынгу (탑승구) = gate/выход'
                },
                {
                    korean: '탑승 수속은 어디에서 해요?',
                    romanization: 'tapseung susogeun eodieseo haeyo?',
                    translation: 'Где регистрация?',
                    note: 'Тхапсын сусок (탑승 수속) = check-in'
                },
                {
                    korean: '짐을 부치고 싶어요',
                    romanization: 'jimeul buchigo sipeoyo',
                    translation: 'Я хочу сдать багаж',
                    note: 'Чим (짐) = багаж/вещи'
                },
                {
                    korean: '기내 수하물은 하나예요',
                    romanization: 'ginae suhamureun hanayeyo',
                    translation: 'Ручная кладь одна',
                    note: 'Кинэ сухамуль (기내 수하물) = ручная кладь'
                },
                {
                    korean: '비행기가 연착되었어요',
                    romanization: 'bihaenggiga yeonchakdoeeosseoyo',
                    translation: 'Рейс задержан',
                    note: 'Ёнчхак (연착) = задержка'
                },
                {
                    korean: '환승은 어디에서 해요?',
                    romanization: 'hwanseungeun eodieseo haeyo?',
                    translation: 'Где пересадка?',
                    note: 'Хвансын (환승) = пересадка/транзит'
                },
                {
                    korean: '면세점이 어디예요?',
                    romanization: 'myeonsejeomi eodiyeyo?',
                    translation: 'Где duty free?',
                    note: 'Мёнседжом (면세점) = магазин duty free'
                },
                {
                    korean: '출구가 어디예요?',
                    romanization: 'chulguga eodiyeyo?',
                    translation: 'Где выход?',
                    note: 'Чхульгу (출구) = выход'
                },
                {
                    korean: '짐을 잃어버렸어요',
                    romanization: 'jimeul ireobeoryeosseoyo',
                    translation: 'Я потерял(а) багаж',
                    note: 'Обратитесь на стойку lost & found'
                },
                {
                    korean: '세관 심사는 어디예요?',
                    romanization: 'segwan simsaneun eodiyeyo?',
                    translation: 'Где таможня?',
                    note: 'Сегван (세관) = таможня'
                },
                {
                    korean: '신고할 물건이 없습니다',
                    romanization: 'singohal mulgeoni eoseumnida',
                    translation: 'Мне нечего декларировать',
                    note: 'Стандартный ответ на таможне'
                },
                {
                    korean: '방송을 들었는데 못 알아들었어요',
                    romanization: 'bangsongeul deureotneunde mot aradeureoesseoyo',
                    translation: 'Я слышал(а) объявление, но не понял(а)',
                    note: 'Полезно, если объявления только на корейском'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: регистрация и посадка',
                lines: [
                    { speaker: '승객', korean: '안녕하세요. 탑승 수속하려고요.', translation: 'Здравствуйте. Я на регистрацию.' },
                    { speaker: '직원', korean: '여권과 탑승권 보여 주세요.', translation: 'Покажите паспорт и посадочный.' },
                    { speaker: '승객', korean: '여기 있습니다. 짐을 부치고 싶어요.', translation: 'Вот. Я хочу сдать багаж.' },
                    { speaker: '직원', korean: '가방을 여기 올려 주세요. 탑승구는 12번입니다.', translation: 'Поставьте чемодан сюда. Выход номер 12.' },
                    { speaker: '승객', korean: '면세점이 어디예요?', translation: 'Где duty free?' },
                    { speaker: '직원', korean: '출국 심사 후에 오른쪽에 있습니다.', translation: 'После паспортного контроля справа.' },
                    { speaker: '승객', korean: '감사합니다!', translation: 'Спасибо!' }
                ]
            }
        },

        // =====================================================
        // 6. В отеле
        // =====================================================
        {
            id: 'hotel',
            icon: '\uD83C\uDFE8',
            title: 'В отеле',
            titleKr: '호텔에서',
            color: '#FF9800',
            description: 'Заселение, услуги, выезд',
            phrases: [
                {
                    korean: '예약했습니다',
                    romanization: 'yeyakhaesseumnida',
                    translation: 'У меня есть бронь',
                    note: 'Назовите имя и покажите подтверждение'
                },
                {
                    korean: '체크인 하고 싶습니다',
                    romanization: 'chekeu-in hago sipseumnida',
                    translation: 'Я хочу заселиться',
                    note: 'Чхекхыин (체크인) — от английского check-in'
                },
                {
                    korean: '체크아웃은 몇 시예요?',
                    romanization: 'chekeu-auseun myeot siyeyo?',
                    translation: 'Во сколько выселение?',
                    note: 'Обычно в 11:00 или 12:00'
                },
                {
                    korean: '방 열쇠 주세요',
                    romanization: 'bang yeolsoe juseyo',
                    translation: 'Дайте ключ от номера, пожалуйста',
                    note: 'Обычно это карточка-ключ'
                },
                {
                    korean: '와이파이 비밀번호가 뭐예요?',
                    romanization: 'waipai bimilbeonhoga mwoyeyo?',
                    translation: 'Какой пароль от WiFi?',
                    note: 'Вайпхай (와이파이) = WiFi'
                },
                {
                    korean: '조식은 몇 시부터예요?',
                    romanization: 'josiguen myeot sibuteoyeyo?',
                    translation: 'Со скольки завтрак?',
                    note: 'Чосик (조식) = завтрак'
                },
                {
                    korean: '방 청소 부탁드립니다',
                    romanization: 'bang cheongso butakdeurimnida',
                    translation: 'Уберите номер, пожалуйста',
                    note: 'Бутхак (부탁) = просьба, вежливая форма'
                },
                {
                    korean: '수건 더 주세요',
                    romanization: 'sugeon deo juseyo',
                    translation: 'Дайте ещё полотенце, пожалуйста',
                    note: 'Сугон (수건) = полотенце'
                },
                {
                    korean: '에어컨이 안 돼요',
                    romanization: 'eeokeon-i an dwaeyo',
                    translation: 'Кондиционер не работает',
                    note: 'Сообщите на ресепшен о любых поломках'
                },
                {
                    korean: '하루 더 묵고 싶어요',
                    romanization: 'haru deo mukgo sipeoyo',
                    translation: 'Я хочу продлить на один день',
                    note: 'Хару (하루) = один день, мукта (묵다) = остановиться на ночь'
                },
                {
                    korean: '택시 불러 주실 수 있어요?',
                    romanization: 'taeksi bulleo jusil su isseoyo?',
                    translation: 'Можете вызвать такси?',
                    note: 'Ресепшен поможет вызвать такси'
                },
                {
                    korean: '금고가 있나요?',
                    romanization: 'geumgoga innayo?',
                    translation: 'Есть сейф?',
                    note: 'Кымго (금고) = сейф'
                },
                {
                    korean: '몇 층이에요?',
                    romanization: 'myeot cheungieyo?',
                    translation: 'На каком этаже?',
                    note: 'Чхын (층) = этаж'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: заселение в отель',
                lines: [
                    { speaker: '손님', korean: '안녕하세요. 예약했습니다. 김이라고 합니다.', translation: 'Здравствуйте. У меня бронь. Меня зовут Ким.' },
                    { speaker: '직원', korean: '네, 확인되었습니다. 3박 예약이시죠?', translation: 'Да, нашла. Бронь на 3 ночи?' },
                    { speaker: '손님', korean: '네, 맞아요. 와이파이 비밀번호가 뭐예요?', translation: 'Да, верно. Какой пароль от WiFi?' },
                    { speaker: '직원', korean: '비밀번호는 방에 적혀 있습니다. 7층 705호실입니다.', translation: 'Пароль в номере. Ваш номер 705, 7-й этаж.' },
                    { speaker: '손님', korean: '조식은 몇 시부터예요?', translation: 'Со скольки завтрак?' },
                    { speaker: '직원', korean: '7시부터 10시까지 2층 식당에서 드실 수 있습니다.', translation: 'С 7 до 10 в ресторане на 2-м этаже.' },
                    { speaker: '손님', korean: '감사합니다!', translation: 'Спасибо!' }
                ]
            }
        }

    ] // конец массива situations
};

console.log('[OK] PhrasesData loaded:', window.PhrasesData.situations.length, 'situations');
