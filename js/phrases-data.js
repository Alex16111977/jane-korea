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

        ,

        // =====================================================
        // 7. На почте
        // =====================================================
        {
            id: 'post-office',
            icon: '\uD83D\uDCEE',
            title: 'На почте',
            titleKr: '우체국에서',
            color: '#00695C',
            description: 'Отправка посылок, писем, почтовые услуги',
            phrases: [
                {
                    korean: '이 소포를 보내고 싶어요',
                    romanization: 'i soporeul bonaego sipeoyo',
                    translation: 'Я хочу отправить эту посылку',
                    note: 'Сопо (소포) = посылка'
                },
                {
                    korean: '러시아까지 얼마예요?',
                    romanization: 'reosiakkaji eolmayeyo?',
                    translation: 'Сколько стоит до России?',
                    note: 'Укажите страну назначения'
                },
                {
                    korean: '빠른 우편으로 보내 주세요',
                    romanization: 'ppareun upyeoneuro bonae juseyo',
                    translation: 'Отправьте экспресс-почтой',
                    note: 'Ппарын упхён (빠른 우편) = экспресс-почта'
                },
                {
                    korean: '며칠 정도 걸려요?',
                    romanization: 'myeochil jeongdo geollyeoyo?',
                    translation: 'Сколько дней займёт?',
                    note: 'Спрашивайте о сроках доставки'
                },
                {
                    korean: '등기우편으로 보내 주세요',
                    romanization: 'deunggiupyeoneuro bonae juseyo',
                    translation: 'Отправьте заказным письмом',
                    note: 'Тынги (등기) = заказное, с отслеживанием'
                },
                {
                    korean: '우표를 사고 싶어요',
                    romanization: 'upyoreul sago sipeoyo',
                    translation: 'Хочу купить марки',
                    note: 'Упхё (우표) = почтовая марка'
                },
                {
                    korean: '운송장 번호를 알려 주세요',
                    romanization: 'unsongjang beonhoreul allyeo juseyo',
                    translation: 'Скажите номер отслеживания',
                    note: 'Унсонджан (운송장) = накладная/трек-номер'
                },
                {
                    korean: '깨지기 쉬운 물건이에요',
                    romanization: 'kkaejigi swiun mulgeonieyeo',
                    translation: 'Это хрупкая вещь',
                    note: 'Предупредите о хрупкости содержимого'
                },
                {
                    korean: '무게를 재 주세요',
                    romanization: 'mugereul jae juseyo',
                    translation: 'Взвесьте, пожалуйста',
                    note: 'Муге (무게) = вес'
                },
                {
                    korean: '국제 택배를 보내려고요',
                    romanization: 'gukje taekbaereul bonaeryeogoyo',
                    translation: 'Хочу отправить международную посылку',
                    note: 'Кукче тэкпэ (국제 택배) = международная курьерская доставка'
                },
                {
                    korean: '보험을 들고 싶어요',
                    romanization: 'boheomeul deulgo sipeoyo',
                    translation: 'Хочу застраховать',
                    note: 'Похом (보험) = страховка на посылку'
                },
                {
                    korean: '상자가 필요해요',
                    romanization: 'sangjaga piryohaeyo',
                    translation: 'Мне нужна коробка',
                    note: 'Санджа (상자) = коробка. В корейских почтовых отделениях можно купить коробки'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: отправка посылки в Россию',
                lines: [
                    { speaker: '손님', korean: '안녕하세요. 이 소포를 러시아에 보내고 싶어요.', translation: 'Здравствуйте. Хочу отправить эту посылку в Россию.' },
                    { speaker: '직원', korean: '네. 무게를 재 볼게요. 2.5킬로그램이에요.', translation: 'Хорошо. Давайте взвесим. 2.5 килограмма.' },
                    { speaker: '직원', korean: '일반 우편은 25,000원, 빠른 우편은 45,000원이에요.', translation: 'Обычная почта — 25 000 вон, экспресс — 45 000 вон.' },
                    { speaker: '손님', korean: '일반 우편으로 할게요. 며칠 걸려요?', translation: 'Обычной почтой. Сколько дней?' },
                    { speaker: '직원', korean: '보통 2주 정도 걸립니다.', translation: 'Обычно около 2 недель.' },
                    { speaker: '손님', korean: '운송장 번호 좀 주세요.', translation: 'Дайте трек-номер, пожалуйста.' },
                    { speaker: '직원', korean: '네, 여기 영수증에 적혀 있어요. 온라인으로 추적할 수 있어요.', translation: 'Да, вот на чеке. Можно отследить онлайн.' }
                ]
            }
        },

        // =====================================================
        // 8. В банке
        // =====================================================
        {
            id: 'bank',
            icon: '\uD83C\uDFE6',
            title: 'В банке',
            titleKr: '은행에서',
            color: '#1565C0',
            description: 'Обмен валют, счета, переводы',
            phrases: [
                {
                    korean: '환전하고 싶어요',
                    romanization: 'hwanjeonhago sipeoyo',
                    translation: 'Хочу обменять валюту',
                    note: 'Хванджон (환전) = обмен валюты'
                },
                {
                    korean: '오늘 환율이 어떻게 돼요?',
                    romanization: 'oneul hwanyuri eotteoke dwaeyo?',
                    translation: 'Какой сегодня курс обмена?',
                    note: 'Хваньюль (환율) = обменный курс'
                },
                {
                    korean: '달러를 원으로 바꾸고 싶어요',
                    romanization: 'dalleoreul woneuro bakkugo sipeoyo',
                    translation: 'Хочу обменять доллары на воны',
                    note: 'Паккуда (바꾸다) = обменять'
                },
                {
                    korean: '계좌를 개설하고 싶어요',
                    romanization: 'gyejwareul gaeseolhago sipeoyo',
                    translation: 'Хочу открыть счёт',
                    note: 'Кеджва кэсоль (계좌 개설) = открытие счёта'
                },
                {
                    korean: '여권이 필요해요?',
                    romanization: 'yeogwoni piryohaeyo?',
                    translation: 'Нужен паспорт?',
                    note: 'Ёгвон (여권) = заграничный паспорт'
                },
                {
                    korean: 'ATM이 어디에 있어요?',
                    romanization: 'ATMi eodie isseoyo?',
                    translation: 'Где банкомат?',
                    note: 'В Корее банкоматы есть в магазинах CU, GS25'
                },
                {
                    korean: '해외 송금을 하려고요',
                    romanization: 'haeoe songgeumuel haryeogoyo',
                    translation: 'Хочу сделать международный перевод',
                    note: 'Хэве сонгым (해외 송금) = международный денежный перевод'
                },
                {
                    korean: '수수료가 얼마예요?',
                    romanization: 'susuryoga eolmayeyo?',
                    translation: 'Какая комиссия?',
                    note: 'Сусурё (수수료) = комиссия/сбор'
                },
                {
                    korean: '잔액을 확인하고 싶어요',
                    romanization: 'janaegeul hwaginhago sipeoyo',
                    translation: 'Хочу проверить баланс',
                    note: 'Чанэк (잔액) = остаток на счёте'
                },
                {
                    korean: '통장을 만들어 주세요',
                    romanization: 'tongjangeul mandeureo juseyo',
                    translation: 'Сделайте, пожалуйста, сберкнижку',
                    note: 'Тонджан (통장) = сберкнижка (до сих пор популярны в Корее)'
                },
                {
                    korean: '카드를 분실했어요',
                    romanization: 'kadeureul bunsilhaesseoyo',
                    translation: 'Я потерял карту',
                    note: 'Пунсиль (분실) = потеря. Срочно блокируйте карту!'
                },
                {
                    korean: '이체하고 싶어요',
                    romanization: 'ichehago sipeoyo',
                    translation: 'Хочу сделать перевод',
                    note: 'Иче (이체) = банковский перевод внутри Кореи'
                },
                {
                    korean: '소액으로 바꿔 주세요',
                    romanization: 'soaegeuro bakkwo juseyo',
                    translation: 'Разменяйте на мелкие купюры',
                    note: 'Соэк (소액) = мелкие деньги'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: обмен валюты',
                lines: [
                    { speaker: '손님', korean: '안녕하세요. 환전하고 싶어요.', translation: 'Здравствуйте. Хочу обменять валюту.' },
                    { speaker: '직원', korean: '어떤 통화를 바꾸시겠어요?', translation: 'Какую валюту хотите обменять?' },
                    { speaker: '손님', korean: '달러 500불을 원으로 바꿔 주세요.', translation: '500 долларов на воны, пожалуйста.' },
                    { speaker: '직원', korean: '오늘 환율은 1달러에 1,320원입니다.', translation: 'Сегодня курс: 1 доллар = 1320 вон.' },
                    { speaker: '직원', korean: '수수료 포함해서 655,000원입니다.', translation: 'С комиссией получается 655 000 вон.' },
                    { speaker: '손님', korean: '네, 좋아요. 만 원짜리로 주세요.', translation: 'Хорошо. Купюрами по 10 000 вон.' },
                    { speaker: '직원', korean: '여권 좀 보여 주세요.', translation: 'Покажите паспорт, пожалуйста.' }
                ]
            }
        },

        // =====================================================
        // 9. В университете
        // =====================================================
        {
            id: 'university',
            icon: '\uD83C\uDF93',
            title: 'В университете',
            titleKr: '대학교에서',
            color: '#6A1B9A',
            description: 'Учёба, занятия, студенческая жизнь',
            phrases: [
                {
                    korean: '수강 신청은 어떻게 해요?',
                    romanization: 'sugang sincheoneun eotteoke haeyo?',
                    translation: 'Как записаться на курс?',
                    note: 'Суган синчхон (수강 신청) = регистрация на курс'
                },
                {
                    korean: '이번 학기에 뭐 들어요?',
                    romanization: 'ibeon hakgie mwo deureoyo?',
                    translation: 'Что берёте в этом семестре?',
                    note: 'Хакки (학기) = семестр'
                },
                {
                    korean: '교수님 연구실이 어디예요?',
                    romanization: 'gyosunim yeongusiri eodiyeyo?',
                    translation: 'Где кабинет профессора?',
                    note: 'Кёсуним (교수님) = профессор (вежливо). Ёнгусиль (연구실) = кабинет/лаборатория'
                },
                {
                    korean: '도서관은 몇 시까지 해요?',
                    romanization: 'doseogwaneun myeot sikkaji haeyo?',
                    translation: 'До скольки работает библиотека?',
                    note: 'Тосогван (도서관) = библиотека'
                },
                {
                    korean: '과제 마감이 언제예요?',
                    romanization: 'gwaje magami eonjeveyo?',
                    translation: 'Когда дедлайн задания?',
                    note: 'Кваджэ (과제) = задание, магам (마감) = дедлайн'
                },
                {
                    korean: '시험 범위가 어디까지예요?',
                    romanization: 'siheom beomwiga eodikkajiyeyo?',
                    translation: 'Какой объём материала на экзамене?',
                    note: 'Пхомви (범위) = диапазон/объём'
                },
                {
                    korean: '학식이 싸고 맛있어요',
                    romanization: 'haksigi ssago masisseoyo',
                    translation: 'Студенческая столовая дешёвая и вкусная',
                    note: 'Хаксик (학식) = студенческая еда/столовая'
                },
                {
                    korean: '기숙사에 살아요?',
                    romanization: 'gisuksae sarayo?',
                    translation: 'Вы живёте в общежитии?',
                    note: 'Кисукса (기숙사) = общежитие'
                },
                {
                    korean: '출석을 부르겠습니다',
                    romanization: 'chulseok bureugessseumnida',
                    translation: 'Буду отмечать посещаемость',
                    note: 'Чхульсок (출석) = посещаемость/присутствие'
                },
                {
                    korean: '교환 학생이에요',
                    romanization: 'gyohwan haksaengieyo',
                    translation: 'Я студент по обмену',
                    note: 'Кёхван хаксэн (교환 학생) = студент по обмену'
                },
                {
                    korean: '전공이 뭐예요?',
                    romanization: 'jeongongi mwoyeyo?',
                    translation: 'Какая у вас специальность?',
                    note: 'Чонгон (전공) = специальность/major'
                },
                {
                    korean: '학점이 몇 점이에요?',
                    romanization: 'hakjeomi myeot jeomieyo?',
                    translation: 'Какой у вас средний балл?',
                    note: 'Хакчом (학점) = кредиты/оценки. GPA в Корее обычно из 4.5'
                },
                {
                    korean: '동아리에 가입하고 싶어요',
                    romanization: 'dongariae gaiphago sipeoyo',
                    translation: 'Хочу вступить в клуб',
                    note: 'Тонари (동아리) = студенческий клуб/кружок'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: регистрация на курсы',
                lines: [
                    { speaker: '학생 A', korean: '이번 학기에 뭐 들어?', translation: 'Что берёшь в этом семестре?' },
                    { speaker: '학생 B', korean: '한국어 수업이랑 역사 수업 들으려고. 너는?', translation: 'Хочу взять корейский и историю. А ты?' },
                    { speaker: '학생 A', korean: '나도 한국어! 김 교수님 수업 들어?', translation: 'Я тоже корейский! У профессора Кима?' },
                    { speaker: '학생 B', korean: '응, 월수금 10시 수업. 근데 수강 신청이 너무 빨리 마감돼.', translation: 'Да, пн-ср-пт в 10. Но регистрация закрывается очень быстро.' },
                    { speaker: '학생 A', korean: '맞아. 인기 있는 수업은 1분 만에 꽉 차더라.', translation: 'Точно. Популярные курсы заполняются за минуту.' },
                    { speaker: '학생 B', korean: '점심 같이 학식 먹으러 갈래?', translation: 'Пойдём вместе в столовую на обед?' },
                    { speaker: '학생 A', korean: '좋아! 오늘 메뉴가 뭔지 봐야지.', translation: 'Давай! Надо посмотреть сегодняшнее меню.' }
                ]
            }
        },

        // =====================================================
        // 10. На рынке Тондэмун
        // =====================================================
        {
            id: 'dongdaemun',
            icon: '\uD83C\uDFEA',
            title: 'На рынке Тондэмун',
            titleKr: '동대문 시장에서',
            color: '#E65100',
            description: 'Торговля, торг, одежда оптом',
            phrases: [
                {
                    korean: '이거 얼마예요?',
                    romanization: 'igeo eolmayeyo?',
                    translation: 'Сколько это стоит?',
                    note: 'Самый базовый вопрос на рынке'
                },
                {
                    korean: '좀 깎아 주세요',
                    romanization: 'jom kkakka juseyo',
                    translation: 'Сделайте скидку',
                    note: 'Ккакка (깎아) = снизить цену. Торг на рынке — нормальная практика!'
                },
                {
                    korean: '너무 비싸요',
                    romanization: 'neomu bissayo',
                    translation: 'Слишком дорого',
                    note: 'Говорите уверенно — продавцы привыкли торговаться'
                },
                {
                    korean: '만 원에 해 주세요',
                    romanization: 'man wone hae juseyo',
                    translation: 'Сделайте за 10 000 вон',
                    note: 'Предложите свою цену'
                },
                {
                    korean: '두 개 사면 할인해 줄 수 있어요?',
                    romanization: 'du gae samyeon halinhae jul su isseoyo?',
                    translation: 'Если возьму два, скидка будет?',
                    note: 'Тондэмун славится оптовыми ценами'
                },
                {
                    korean: '다른 색 있어요?',
                    romanization: 'dareun saek isseoyo?',
                    translation: 'Другой цвет есть?',
                    note: 'Сэк (색) = цвет'
                },
                {
                    korean: '이거 입어 봐도 돼요?',
                    romanization: 'igeo ibeo bwado dwaeyo?',
                    translation: 'Можно это примерить?',
                    note: 'Ибо пода (입어 보다) = примерить'
                },
                {
                    korean: '사이즈가 좀 큰 것 같아요',
                    romanization: 'saizeuga jom keun geot gatayo',
                    translation: 'Размер кажется великоват',
                    note: 'Кхын (큰) = большой, чагын (작은) = маленький'
                },
                {
                    korean: '현금으로 하면 더 싸요?',
                    romanization: 'hyeongeumeureo hamyeon deo ssayo?',
                    translation: 'Наличными будет дешевле?',
                    note: 'На рынках часто дают скидку за наличные'
                },
                {
                    korean: '도매로 사고 싶어요',
                    romanization: 'domaero sago sipeoyo',
                    translation: 'Хочу купить оптом',
                    note: 'Томэ (도매) = оптовая продажа. Тондэмун — центр оптовой торговли'
                },
                {
                    korean: '원단은 몇 층에서 팔아요?',
                    romanization: 'wondaneun myeot cheungeseo parayo?',
                    translation: 'На каком этаже продают ткани?',
                    note: 'Вондан (원단) = ткань/материал'
                },
                {
                    korean: '교환이나 환불 가능해요?',
                    romanization: 'gyohwanina hwanbul ganeunghaeyo?',
                    translation: 'Обмен или возврат возможен?',
                    note: 'Кёхван (교환) = обмен, хванбуль (환불) = возврат денег'
                },
                {
                    korean: '카드 돼요?',
                    romanization: 'kadeu dwaeyo?',
                    translation: 'Картой можно?',
                    note: 'Короткая форма. Не все торговцы принимают карты'
                }
            ],
            dialogue: {
                title: 'Мини-диалог: торг на рынке',
                lines: [
                    { speaker: '손님', korean: '이 자켓 얼마예요?', translation: 'Сколько стоит эта куртка?' },
                    { speaker: '사장님', korean: '그거 3만 원이에요.', translation: 'Это 30 000 вон.' },
                    { speaker: '손님', korean: '너무 비싸요. 좀 깎아 주세요.', translation: 'Слишком дорого. Сделайте скидку.' },
                    { speaker: '사장님', korean: '음... 2만 5천 원에 해 줄게요.', translation: 'Хм... Давам за 25 000 вон.' },
                    { speaker: '손님', korean: '두 개 사면 4만 원에 해 주세요.', translation: 'Если возьму два, сделайте за 40 000 вон.' },
                    { speaker: '사장님', korean: '에이, 그건 너무 싸요. 4만 5천 원이요.', translation: 'Ну, это слишком дёшево. 45 000 вон.' },
                    { speaker: '손님', korean: '좋아요! 현금으로 할게요.', translation: 'Хорошо! Заплачу наличными.' },
                    { speaker: '사장님', korean: '감사합니다! 또 오세요~', translation: 'Спасибо! Приходите ещё~' }
                ]
            }
        }

    ] // конец массива situations
};

console.log('[OK] PhrasesData loaded:', window.PhrasesData.situations.length, 'situations');
