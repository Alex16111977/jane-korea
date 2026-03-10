/**
 * Jane Korea — Ежедневные диалоги для практики корейского языка
 * 8 категорий, по 2 диалога в каждой (16 диалогов)
 * Экспорт: window.DailyDialoguesData
 */

window.DailyDialoguesData = {
    categories: [

        // =====================================================
        // 1. В кофейне / 카페에서
        // =====================================================
        {
            id: 'coffee-shop',
            icon: '☕',
            title: 'В кофейне',
            titleKr: '카페에서',
            color: '#795548',
            description: 'Заказ напитков и десертов в корейской кофейне',
            culturalNote: 'Корея — одна из мировых столиц кофейной культуры. В Сеуле кофеен больше, чем в Нью-Йорке. Корейцы любят «아메리카노» (американо) и часто заказывают напитки на вынос.',
            dialogues: [
                {
                    id: 'coffee-order-1',
                    title: 'Простой заказ кофе',
                    titleKr: '커피 주문하기',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="добро пожаловать" data-pronunciation="어서오세요 [eoseooseyo]">어서오세요</span>, <span class="korean-word" data-translation="заказ" data-pronunciation="주문 [jumun]">주문</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="говорить (вежл.)" data-pronunciation="말씀해 [malssseumhae]">말씀해</span> <span class="korean-word" data-translation="пожалуйста (вежл.)" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Добро пожаловать, говорите ваш заказ, пожалуйста.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="американо" data-pronunciation="아메리카노 [amerikano]">아메리카노</span> <span class="korean-word" data-translation="один (счётное)" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="стакан (счётное слово)" data-pronunciation="잔 [jan]">잔</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Один американо, пожалуйста.',
                            grammarNote: '한 잔 — счётное слово для напитков в стаканах'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="горячий" data-pronunciation="뜨거운 [tteugeoun]">뜨거운</span> <span class="korean-word" data-translation="напиток (вежл.)" data-pronunciation="걸로 [geollo]">걸로</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="드릴까요 [deurilkkayo]">드릴까요</span>, <span class="korean-word" data-translation="со льдом" data-pronunciation="아이스로 [aiseuro]">아이스로</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="드릴까요 [deurilkkayo]">드릴까요</span>?',
                            translation: 'Горячий или со льдом?',
                            grammarNote: 'V-ㄹ까요? — вежливый вопрос-предложение'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="со льдом" data-pronunciation="아이스로 [aiseuro]">아이스로</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Со льдом, пожалуйста.',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="размер" data-pronunciation="사이즈 [saijeu]">사이즈</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="какой" data-pronunciation="어떤 [eotteon]">어떤</span> <span class="korean-word" data-translation="(вещь, вежл.)" data-pronunciation="걸로 [geollo]">걸로</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="드릴까요 [deurilkkayo]">드릴까요</span>?',
                            translation: 'Какой размер?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="большой (гранде)" data-pronunciation="그란데 [geurande]">그란데</span> <span class="korean-word" data-translation="размер" data-pronunciation="사이즈 [saijeu]">사이즈</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="요 [yo]">요</span>.',
                            translation: 'Размер гранде.',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="всего" data-pronunciation="총 [chong]">총</span> <span class="korean-word" data-translation="четыре тысячи пятьсот" data-pronunciation="사천오백 [sacheonobaek]">사천오백</span> <span class="korean-word" data-translation="вон (валюта)" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть/будет (вежл.)" data-pronunciation="입니다 [imnida]">입니다</span>. <span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="요 [yo]">요</span>, <span class="korean-word" data-translation="наличные" data-pronunciation="현금 [hyeongeum]">현금</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="이요 [iyo]">이요</span>?',
                            translation: 'Всего 4500 вон. Картой или наличными?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(творительный падеж)" data-pronunciation="로 [ro]">로</span> <span class="korean-word" data-translation="оплачу (вежл.)" data-pronunciation="할게요 [halgeyo]">할게요</span>.',
                            translation: 'Картой оплачу.',
                            grammarNote: 'N(으)로 — указание инструмента/способа'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N 주세요',
                            meaning: 'Дайте N, пожалуйста',
                            examples: ['물 주세요', '메뉴 주세요']
                        },
                        {
                            pattern: 'V-ㄹ까요?',
                            meaning: 'Предложение/вопрос: мне сделать V?',
                            examples: ['도와 드릴까요?', '포장해 드릴까요?']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '아이스로 주세요', translation: 'Со льдом, пожалуйста' },
                        { korean: '뜨거운 걸로 주세요', translation: 'Горячий, пожалуйста' },
                        { korean: '포장해 주세요', translation: 'На вынос, пожалуйста' },
                        { korean: '여기서 마실게요', translation: 'Буду пить здесь' },
                        { korean: '영수증 주세요', translation: 'Чек, пожалуйста' }
                    ]
                },
                {
                    id: 'coffee-order-2',
                    title: 'Заказ с особыми пожеланиями',
                    titleKr: '특별한 주문',
                    difficulty: 'medium',
                    lines: [
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="извините (обращение)" data-pronunciation="저기요 [jeogiyo]">저기요</span>, <span class="korean-word" data-translation="меню" data-pronunciation="메뉴 [menyu]">메뉴</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="смотреть (возможно)" data-pronunciation="볼 [bol]">볼</span> <span class="korean-word" data-translation="можно ли" data-pronunciation="수 있을까요 [su isseulkkayo]">수 있을까요</span>?',
                            translation: 'Извините, можно посмотреть меню?',
                            grammarNote: 'V-ㄹ 수 있을까요? — вежливая просьба о возможности'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="вот (пожалуйста)" data-pronunciation="여기요 [yeogiyo]">여기요</span>. <span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="рекомендация" data-pronunciation="추천 [chucheon]">추천</span> <span class="korean-word" data-translation="меню" data-pronunciation="메뉴 [menyu]">메뉴</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="клубничный" data-pronunciation="딸기 [ttalgi]">딸기</span> <span class="korean-word" data-translation="латте" data-pronunciation="라떼 [latte]">라떼</span><span class="korean-word" data-translation="есть/является (вежл.)" data-pronunciation="예요 [yeyo]">예요</span>.',
                            translation: 'Конечно, вот. Сегодня рекомендуем клубничный латте.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="тогда" data-pronunciation="그럼 [geureom]">그럼</span> <span class="korean-word" data-translation="клубничный" data-pronunciation="딸기 [ttalgi]">딸기</span> <span class="korean-word" data-translation="латте" data-pronunciation="라떼 [latte]">라떼</span> <span class="korean-word" data-translation="один" data-pronunciation="하나 [hana]">하나</span><span class="korean-word" data-translation="и, с" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="чизкейк" data-pronunciation="치즈케이크 [chijeukkeikeu]">치즈케이크</span> <span class="korean-word" data-translation="один" data-pronunciation="하나 [hana]">하나</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Тогда один клубничный латте и один чизкейк, пожалуйста.',
                            grammarNote: 'N하고 N — перечисление: N и N'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="латте" data-pronunciation="라떼 [latte]">라떼</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="сладость" data-pronunciation="단맛 [danmat]">단맛</span> <span class="korean-word" data-translation="регулирование" data-pronunciation="조절 [jojeol]">조절</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="возможно" data-pronunciation="가능한데요 [ganeunghandeyo]">가능한데요</span>, <span class="korean-word" data-translation="как" data-pronunciation="어떻게 [eotteoke]">어떻게</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="드릴까요 [deurilkkayo]">드릴까요</span>?',
                            translation: 'Сладость латте можно отрегулировать, как сделать?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="сахар" data-pronunciation="설탕 [seoltang]">설탕</span> <span class="korean-word" data-translation="немного" data-pronunciation="조금 [jogeum]">조금</span><span class="korean-word" data-translation="только" data-pronunciation="만 [man]">만</span> <span class="korean-word" data-translation="положить" data-pronunciation="넣어 [neoeo]">넣어</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>. <span class="korean-word" data-translation="слишком" data-pronunciation="너무 [neomu]">너무</span> <span class="korean-word" data-translation="сладкий" data-pronunciation="단 [dan]">단</span> <span class="korean-word" data-translation="(вещь)" data-pronunciation="건 [geon]">건</span> <span class="korean-word" data-translation="не любить" data-pronunciation="싫어해요 [sireohaeyo]">싫어해요</span>.',
                            translation: 'Сахара совсем немного, пожалуйста. Не люблю слишком сладкое.',
                            grammarNote: 'N만 — ограничительная частица «только»'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="понял(а)" data-pronunciation="알겠습니다 [algesseumnida]">알겠습니다</span>. <span class="korean-word" data-translation="здесь" data-pronunciation="매장 [maejang]">매장</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="кушать" data-pronunciation="드시나요 [deusinayo]">드시나요</span>, <span class="korean-word" data-translation="на вынос" data-pronunciation="포장 [pojang]">포장</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="이요 [iyo]">이요</span>?',
                            translation: 'Поняла. Будете здесь или на вынос?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="здесь" data-pronunciation="매장 [maejang]">매장</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="кушать (вежл.)" data-pronunciation="먹을게요 [meogeulgeyo]">먹을게요</span>. <span class="korean-word" data-translation="и ещё" data-pronunciation="그리고 [geurigo]">그리고</span> <span class="korean-word" data-translation="вай-фай" data-pronunciation="와이파이 [waipai]">와이파이</span> <span class="korean-word" data-translation="пароль" data-pronunciation="비밀번호 [bimilbeonho]">비밀번호</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="сказать (возможно)" data-pronunciation="알려 [allyeo]">알려</span> <span class="korean-word" data-translation="дать (возможно)" data-pronunciation="주실 [jusil]">주실</span> <span class="korean-word" data-translation="можно ли" data-pronunciation="수 있나요 [su innayo]">수 있나요</span>?',
                            translation: 'Буду здесь. И ещё можно узнать пароль от Wi-Fi?',
                            grammarNote: 'V-아/어 주실 수 있나요? — очень вежливая просьба'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник',
                            korean: '<span class="korean-word" data-translation="пароль" data-pronunciation="비밀번호 [bimilbeonho]">비밀번호</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="чек" data-pronunciation="영수증 [yeongsujeung]">영수증</span> <span class="korean-word" data-translation="внизу" data-pronunciation="아래 [arae]">아래</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="написано" data-pronunciation="적혀 [jeokyeo]">적혀</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>.',
                            translation: 'Пароль написан внизу чека.',
                            grammarNote: 'V-아/어 있다 — результат действия (написано и остаётся)'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-ㄹ 수 있을까요?',
                            meaning: 'Можно ли V? (вежливая просьба)',
                            examples: ['볼 수 있을까요?', '바꿀 수 있을까요?']
                        },
                        {
                            pattern: 'N하고 N',
                            meaning: 'N и N (перечисление)',
                            examples: ['커피하고 케이크', '빵하고 우유']
                        },
                        {
                            pattern: 'N만',
                            meaning: 'Только N',
                            examples: ['조금만', '하나만']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '덜 달게 해 주세요', translation: 'Сделайте менее сладким' },
                        { korean: '샷 추가해 주세요', translation: 'Добавьте шот эспрессо' },
                        { korean: '우유를 두유로 바꿔 주세요', translation: 'Замените молоко на соевое' },
                        { korean: '텀블러에 담아 주세요', translation: 'Налейте в мой термостакан' }
                    ]
                }
            ]
        },

        // =====================================================
        // 2. В метро / 지하철에서
        // =====================================================
        {
            id: 'metro',
            icon: '🚇',
            title: 'В метро',
            titleKr: '지하철에서',
            color: '#1565C0',
            description: 'Поездки в метро, покупка билетов, ориентирование',
            culturalNote: 'Метро в Сеуле — одно из лучших в мире. Карта T-money используется и в метро, и в автобусах. Станции объявляются на корейском, английском и китайском языках.',
            dialogues: [
                {
                    id: 'metro-ticket-1',
                    title: 'Покупка карты T-money',
                    titleKr: '티머니 카드 구매',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="извините" data-pronunciation="실례합니다 [sillyehamnida]">실례합니다</span>, <span class="korean-word" data-translation="T-money" data-pronunciation="티머니 [timoni]">티머니</span> <span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="где" data-pronunciation="어디서 [eodiseo]">어디서</span> <span class="korean-word" data-translation="купить (возможно)" data-pronunciation="살 [sal]">살</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Извините, где можно купить карту T-money?',
                            grammarNote: '어디서 — «где» (место действия)'
                        },
                        {
                            speaker: '역무원',
                            speakerRu: 'Сотрудник станции',
                            korean: '<span class="korean-word" data-translation="магазин" data-pronunciation="편의점 [pyeonuijeom]">편의점</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="купить (возможно)" data-pronunciation="살 [sal]">살</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>. <span class="korean-word" data-translation="выход" data-pronunciation="출구 [chulgu]">출구</span> <span class="korean-word" data-translation="рядом" data-pronunciation="근처 [geuncheo]">근처</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>.',
                            translation: 'Можно купить в минимаркете. Он рядом с выходом.',
                            grammarNote: null
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="пополнение" data-pronunciation="충전 [chungjeon]">충전</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="там" data-pronunciation="거기서 [geogiseo]">거기서</span> <span class="korean-word" data-translation="делать (возможно)" data-pronunciation="할 [hal]">할</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Пополнить тоже можно там?',
                            grammarNote: 'N도 — частица «тоже, и»'
                        },
                        {
                            speaker: '역무원',
                            speakerRu: 'Сотрудник станции',
                            korean: '<span class="korean-word" data-translation="да" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="но" data-pronunciation="그런데 [geureonde]">그런데</span> <span class="korean-word" data-translation="пополнение" data-pronunciation="충전 [chungjeon]">충전</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="автомат" data-pronunciation="자판기 [japangi]">자판기</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="возможно" data-pronunciation="돼요 [dwaeyo]">돼요</span>.',
                            translation: 'Да, но пополнить можно и в автомате.',
                            grammarNote: null
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="сколько" data-pronunciation="얼마 [eolma]">얼마</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>, <span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span> <span class="korean-word" data-translation="цена" data-pronunciation="값 [gap]">값</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span>?',
                            translation: 'Сколько стоит карта?',
                            grammarNote: null
                        },
                        {
                            speaker: '역무원',
                            speakerRu: 'Сотрудник станции',
                            korean: '<span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="две тысячи пятьсот" data-pronunciation="이천오백 [icheonobaek]">이천오백</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>. <span class="korean-word" data-translation="отдельно" data-pronunciation="따로 [ttaro]">따로</span> <span class="korean-word" data-translation="пополнение" data-pronunciation="충전 [chungjeon]">충전</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="нужно делать" data-pronunciation="해야 해요 [haeya haeyo]">해야 해요</span>.',
                            translation: 'Карта стоит 2500 вон. Нужно пополнить отдельно.',
                            grammarNote: 'V-아/어야 하다 — необходимость, «нужно»'
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="спасибо" data-pronunciation="감사합니다 [gamsahamnida]">감사합니다</span>!',
                            translation: 'Спасибо!',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-ㄹ 수 있다',
                            meaning: 'Мочь, иметь возможность V',
                            examples: ['갈 수 있어요', '먹을 수 있어요']
                        },
                        {
                            pattern: 'V-아/어야 하다',
                            meaning: 'Нужно, должен V',
                            examples: ['가야 해요', '공부해야 해요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '몇 번 출구예요?', translation: 'Какой номер выхода?' },
                        { korean: '이 역에서 내려요?', translation: 'На этой станции выходить?' },
                        { korean: '환승은 어디서 해요?', translation: 'Где делать пересадку?' },
                        { korean: '만 원 충전해 주세요', translation: 'Пополните на 10000 вон' }
                    ]
                },
                {
                    id: 'metro-directions-2',
                    title: 'Как добраться до нужной станции',
                    titleKr: '역까지 가는 법',
                    difficulty: 'medium',
                    lines: [
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="извините" data-pronunciation="저기요 [jeogiyo]">저기요</span>, <span class="korean-word" data-translation="Мёндон" data-pronunciation="명동 [myeongdong]">명동</span><span class="korean-word" data-translation="(направление)" data-pronunciation="까지 [kkaji]">까지</span> <span class="korean-word" data-translation="как" data-pronunciation="어떻게 [eotteoke]">어떻게</span> <span class="korean-word" data-translation="ехать" data-pronunciation="가요 [gayo]">가요</span>?',
                            translation: 'Извините, как доехать до Мёндона?',
                            grammarNote: 'N까지 — до (места назначения)'
                        },
                        {
                            speaker: '시민',
                            speakerRu: 'Прохожий',
                            korean: '<span class="korean-word" data-translation="здесь" data-pronunciation="여기 [yeogi]">여기</span><span class="korean-word" data-translation="из" data-pronunciation="서 [seo]">서</span> <span class="korean-word" data-translation="четвёртая" data-pronunciation="사 [sa]">사</span> <span class="korean-word" data-translation="линия (номер)" data-pronunciation="호선 [hoseon]">호선</span> <span class="korean-word" data-translation="садиться" data-pronunciation="타고 [tago]">타고</span> <span class="korean-word" data-translation="Чхундженно" data-pronunciation="충정로 [chungjeongnoh]">충정로</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="пересадка" data-pronunciation="환승 [hwanseung]">환승</span><span class="korean-word" data-translation="делать" data-pronunciation="하세요 [haseyo]">하세요</span>.',
                            translation: 'Отсюда садитесь на 4-ю линию и на Чхунджонно пересядьте.',
                            grammarNote: 'V-고 — соединение действий: V и потом V'
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="какая" data-pronunciation="몇 [myeot]">몇</span> <span class="korean-word" data-translation="линия (номер)" data-pronunciation="호선 [hoseon]">호선</span><span class="korean-word" data-translation="на (направление)" data-pronunciation="으로 [euro]">으로</span> <span class="korean-word" data-translation="пересаживаться" data-pronunciation="환승해야 [hwanseunghaeya]">환승해야</span> <span class="korean-word" data-translation="(вопрос)" data-pronunciation="돼요 [dwaeyo]">돼요</span>?',
                            translation: 'На какую линию нужно пересесть?',
                            grammarNote: null
                        },
                        {
                            speaker: '시민',
                            speakerRu: 'Прохожий',
                            korean: '<span class="korean-word" data-translation="вторая" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="линия (номер)" data-pronunciation="호선 [hoseon]">호선</span><span class="korean-word" data-translation="на (направление)" data-pronunciation="으로 [euro]">으로</span> <span class="korean-word" data-translation="пересаживайтесь" data-pronunciation="갈아타세요 [garataseyo]">갈아타세요</span>. <span class="korean-word" data-translation="Ыльджиро" data-pronunciation="을지로 [euljiro]">을지로</span> <span class="korean-word" data-translation="направление" data-pronunciation="방면 [bangmyeon]">방면</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="이요 [iyo]">이요</span>.',
                            translation: 'Пересядьте на 2-ю линию. В сторону Ыльджиро.',
                            grammarNote: 'N 방면 — в направлении N'
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="сколько" data-pronunciation="몇 [myeot]">몇</span> <span class="korean-word" data-translation="станция" data-pronunciation="정거장 [jeonggeojang]">정거장</span> <span class="korean-word" data-translation="ехать (нужно)" data-pronunciation="가야 [gaya]">가야</span> <span class="korean-word" data-translation="(вопрос)" data-pronunciation="돼요 [dwaeyo]">돼요</span>?',
                            translation: 'Сколько станций ехать?',
                            grammarNote: null
                        },
                        {
                            speaker: '시민',
                            speakerRu: 'Прохожий',
                            korean: '<span class="korean-word" data-translation="пересадка" data-pronunciation="환승 [hwanseung]">환승</span> <span class="korean-word" data-translation="после" data-pronunciation="후에 [hue]">후에</span> <span class="korean-word" data-translation="две" data-pronunciation="두 [du]">두</span> <span class="korean-word" data-translation="станция" data-pronunciation="정거장 [jeonggeojang]">정거장</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="이요 [iyo]">이요</span>. <span class="korean-word" data-translation="примерно" data-pronunciation="대략 [daeryak]">대략</span> <span class="korean-word" data-translation="двадцать" data-pronunciation="이십 [isip]">이십</span> <span class="korean-word" data-translation="минут" data-pronunciation="분 [bun]">분</span> <span class="korean-word" data-translation="занимает" data-pronunciation="걸려요 [geollyeoyo]">걸려요</span>.',
                            translation: 'После пересадки две станции. Примерно 20 минут займёт.',
                            grammarNote: 'N 후에 — после N'
                        },
                        {
                            speaker: '승객',
                            speakerRu: 'Пассажир',
                            korean: '<span class="korean-word" data-translation="подробно" data-pronunciation="자세히 [jasehi]">자세히</span> <span class="korean-word" data-translation="рассказать" data-pronunciation="알려 [allyeo]">알려</span> <span class="korean-word" data-translation="дать" data-pronunciation="주셔서 [jusyeoseo]">주셔서</span> <span class="korean-word" data-translation="спасибо" data-pronunciation="감사합니다 [gamsahamnida]">감사합니다</span>.',
                            translation: 'Спасибо, что подробно рассказали.',
                            grammarNote: 'V-아/어 주셔서 감사합니다 — благодарность за действие'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N까지 어떻게 가요?',
                            meaning: 'Как добраться до N?',
                            examples: ['서울역까지 어떻게 가요?', '공항까지 어떻게 가요?']
                        },
                        {
                            pattern: 'V-고',
                            meaning: 'Соединение действий: V и (потом)',
                            examples: ['타고 내려요', '걸어가고 환승해요']
                        },
                        {
                            pattern: 'N 방면',
                            meaning: 'В направлении N',
                            examples: ['강남 방면', '인천 방면']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '이 열차는 어디로 가요?', translation: 'Куда идёт этот поезд?' },
                        { korean: '다음 역이 어디예요?', translation: 'Какая следующая станция?' },
                        { korean: '급행 열차예요?', translation: 'Это экспресс?' },
                        { korean: '반대 방향이에요', translation: 'Это обратное направление' },
                        { korean: '내릴 역을 지나쳤어요', translation: 'Я проехал свою станцию' }
                    ]
                }
            ]
        },

        // =====================================================
        // 3. У врача / 병원에서
        // =====================================================
        {
            id: 'doctor',
            icon: '🏥',
            title: 'У врача',
            titleKr: '병원에서',
            color: '#c62828',
            description: 'Запись к врачу, описание симптомов, получение рецепта',
            culturalNote: 'В Корее медицина на высоком уровне. Визит к врачу без страховки стоит недорого (около 5000-15000 вон). Аптеки (약국) находятся отдельно от больниц, и рецепт нужно нести в аптеку самостоятельно.',
            dialogues: [
                {
                    id: 'doctor-visit-1',
                    title: 'Визит с простудой',
                    titleKr: '감기로 병원 방문',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '간호사',
                            speakerRu: 'Медсестра',
                            korean: '<span class="korean-word" data-translation="какая" data-pronunciation="어떤 [eotteon]">어떤</span> <span class="korean-word" data-translation="симптом" data-pronunciation="증상 [jeungsang]">증상</span><span class="korean-word" data-translation="из-за" data-pronunciation="으로 [euro]">으로</span> <span class="korean-word" data-translation="прийти" data-pronunciation="오셨어요 [osyeosseoyo]">오셨어요</span>?',
                            translation: 'С какими симптомами вы пришли?',
                            grammarNote: 'V-셨어요 — прошедшее время в вежливой форме'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="вчера" data-pronunciation="어제 [eoje]">어제</span><span class="korean-word" data-translation="от/с" data-pronunciation="부터 [buteo]">부터</span> <span class="korean-word" data-translation="горло" data-pronunciation="목 [mok]">목</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="болеть" data-pronunciation="아프고 [apeugo]">아프고</span> <span class="korean-word" data-translation="кашель" data-pronunciation="기침 [gichim]">기침</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="выходить" data-pronunciation="나요 [nayo]">나요</span>.',
                            translation: 'Со вчерашнего дня болит горло и кашель.',
                            grammarNote: 'N부터 — с (момента времени)'
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="температура" data-pronunciation="열 [yeol]">열</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>? <span class="korean-word" data-translation="рот" data-pronunciation="입 [ip]">입</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="открыть" data-pronunciation="벌려 [beollyeo]">벌려</span> <span class="korean-word" data-translation="посмотрите" data-pronunciation="보세요 [boseyo]">보세요</span>.',
                            translation: 'Температура есть? Откройте рот, пожалуйста.',
                            grammarNote: 'V-아/어 보세요 — попробуйте V (вежливая просьба)'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="утром" data-pronunciation="아침 [achim]">아침</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="измерить" data-pronunciation="재 [jae]">재</span> <span class="korean-word" data-translation="посмотрел" data-pronunciation="봤는데 [bwanneunde]">봤는데</span> <span class="korean-word" data-translation="тридцать восемь" data-pronunciation="삼십팔 [samsippal]">삼십팔</span> <span class="korean-word" data-translation="градус" data-pronunciation="도 [do]">도</span><span class="korean-word" data-translation="было" data-pronunciation="였어요 [yeosseoyo]">였어요</span>.',
                            translation: 'Утром измерил — было 38 градусов.',
                            grammarNote: 'V-아/어 봤는데 — попробовал V, и (результат)'
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="простуда" data-pronunciation="감기 [gamgi]">감기</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>. <span class="korean-word" data-translation="лекарство" data-pronunciation="약 [yak]">약</span> <span class="korean-word" data-translation="выписать" data-pronunciation="처방해 [cheobanghae]">처방해</span> <span class="korean-word" data-translation="дам" data-pronunciation="드릴게요 [deurilgeyo]">드릴게요</span>. <span class="korean-word" data-translation="три" data-pronunciation="삼 [sam]">삼</span> <span class="korean-word" data-translation="день" data-pronunciation="일 [il]">일</span> <span class="korean-word" data-translation="доля (часть)" data-pronunciation="분 [bun]">분</span> <span class="korean-word" data-translation="выписать" data-pronunciation="처방할게요 [cheobanghageyo]">처방할게요</span>.',
                            translation: 'Это простуда. Выпишу лекарство. На три дня.',
                            grammarNote: 'V-아/어 드릴게요 — я сделаю для вас (вежливое обещание)'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="лекарство" data-pronunciation="약 [yak]">약</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="как" data-pronunciation="어떻게 [eotteoke]">어떻게</span> <span class="korean-word" data-translation="принимать" data-pronunciation="먹어야 [meogoya]">먹어야</span> <span class="korean-word" data-translation="(вопрос)" data-pronunciation="돼요 [dwaeyo]">돼요</span>?',
                            translation: 'Как принимать лекарство?',
                            grammarNote: null
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="один день" data-pronunciation="하루 [haru]">하루</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="три" data-pronunciation="세 [se]">세</span> <span class="korean-word" data-translation="раз" data-pronunciation="번 [beon]">번</span>, <span class="korean-word" data-translation="после еды" data-pronunciation="식후 [sikhu]">식후</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="принимайте" data-pronunciation="드세요 [deuseyo]">드세요</span>. <span class="korean-word" data-translation="отдых" data-pronunciation="푹 쉬세요 [puk swiseyo]">푹 쉬세요</span>.',
                            translation: 'Три раза в день, после еды. Отдыхайте хорошо.',
                            grammarNote: '하루에 세 번 — три раза в день'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N부터',
                            meaning: 'С/от (начальная точка времени)',
                            examples: ['월요일부터', '아침부터']
                        },
                        {
                            pattern: 'V-아/어 보세요',
                            meaning: 'Попробуйте сделать V',
                            examples: ['먹어 보세요', '입어 보세요']
                        },
                        {
                            pattern: 'V-아/어 드릴게요',
                            meaning: 'Я сделаю для вас (вежливое обещание)',
                            examples: ['설명해 드릴게요', '도와 드릴게요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '머리가 아파요', translation: 'У меня болит голова' },
                        { korean: '콧물이 나요', translation: 'У меня насморк' },
                        { korean: '소화가 안 돼요', translation: 'У меня несварение' },
                        { korean: '알레르기가 있어요', translation: 'У меня аллергия' }
                    ]
                },
                {
                    id: 'doctor-visit-2',
                    title: 'Боль в животе и обследование',
                    titleKr: '복통과 검사',
                    difficulty: 'medium',
                    lines: [
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="где" data-pronunciation="어디 [eodi]">어디</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="неудобно/болит" data-pronunciation="불편하세요 [bulpyeonhaseyo]">불편하세요</span>?',
                            translation: 'Где вас беспокоит?',
                            grammarNote: null
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="живот" data-pronunciation="배 [bae]">배</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="очень" data-pronunciation="많이 [mani]">많이</span> <span class="korean-word" data-translation="болеть" data-pronunciation="아파요 [apayo]">아파요</span>. <span class="korean-word" data-translation="три" data-pronunciation="삼 [sam]">삼</span> <span class="korean-word" data-translation="день" data-pronunciation="일 [il]">일</span> <span class="korean-word" data-translation="(уже)" data-pronunciation="째 [jjae]">째</span> <span class="korean-word" data-translation="продолжаться" data-pronunciation="계속되고 있어요 [gyesokdoego isseoyo]">계속되고 있어요</span>.',
                            translation: 'Очень болит живот. Уже три дня продолжается.',
                            grammarNote: 'V-고 있다 — длительное действие (прогрессив)'
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="тошнота" data-pronunciation="구역질 [guyeokjil]">구역질</span><span class="korean-word" data-translation="или" data-pronunciation="이나 [ina]">이나</span> <span class="korean-word" data-translation="понос" data-pronunciation="설사 [seolsa]">설사</span> <span class="korean-word" data-translation="симптом" data-pronunciation="증상 [jeungsang]">증상</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="есть" data-pronunciation="있으세요 [isseuseyo]">있으세요</span>?',
                            translation: 'Есть тошнота или понос?',
                            grammarNote: 'N(이)나 N — N или N'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="тошнота" data-pronunciation="구역질 [guyeokjil]">구역질</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="нет" data-pronunciation="없는데 [eomneunde]">없는데</span> <span class="korean-word" data-translation="понос" data-pronunciation="설사 [seolsa]">설사</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="аппетит" data-pronunciation="식욕 [sigyok]">식욕</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="нет" data-pronunciation="없어요 [eopseoyo]">없어요</span>.',
                            translation: 'Тошноты нет, но понос немного есть. Аппетита тоже нет.',
                            grammarNote: null
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="анализ крови" data-pronunciation="혈액 검사 [hyeoraek geomsa]">혈액 검사</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="УЗИ" data-pronunciation="초음파 [choumpa]">초음파</span> <span class="korean-word" data-translation="обследование" data-pronunciation="검사 [geomsa]">검사</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="нужно сделать" data-pronunciation="해 봐야 할 것 같아요 [hae bwaya hal geot gatayo]">해 봐야 할 것 같아요</span>.',
                            translation: 'Нужно будет сделать анализ крови и УЗИ.',
                            grammarNote: 'V-아/어야 할 것 같다 — кажется, нужно будет V'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="результат" data-pronunciation="결과 [gyeolgwa]">결과</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="когда" data-pronunciation="언제 [eonje]">언제</span> <span class="korean-word" data-translation="выходит" data-pronunciation="나와요 [nawayo]">나와요</span>?',
                            translation: 'Когда будут результаты?',
                            grammarNote: null
                        },
                        {
                            speaker: '의사',
                            speakerRu: 'Врач',
                            korean: '<span class="korean-word" data-translation="результат" data-pronunciation="결과 [gyeolgwa]">결과</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="завтра" data-pronunciation="내일 [naeil]">내일</span> <span class="korean-word" data-translation="выходит" data-pronunciation="나와요 [nawayo]">나와요</span>. <span class="korean-word" data-translation="сначала" data-pronunciation="일단 [ildan]">일단</span> <span class="korean-word" data-translation="лекарство от боли" data-pronunciation="진통제 [jintongje]">진통제</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="выписать" data-pronunciation="처방해 [cheobanghae]">처방해</span> <span class="korean-word" data-translation="дам" data-pronunciation="드릴게요 [deurilgeyo]">드릴게요</span>.',
                            translation: 'Результаты будут завтра. Пока выпишу обезболивающее.',
                            grammarNote: '일단 — «пока, сначала»'
                        },
                        {
                            speaker: '환자',
                            speakerRu: 'Пациент',
                            korean: '<span class="korean-word" data-translation="страховка" data-pronunciation="보험 [boheom]">보험</span> <span class="korean-word" data-translation="применение" data-pronunciation="적용 [jeogyong]">적용</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="возможно" data-pronunciation="되나요 [doenayo]">되나요</span>?',
                            translation: 'Страховка покрывает?',
                            grammarNote: 'N이/가 되다 — быть возможным, применяться'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-고 있다',
                            meaning: 'V продолжается (длительное действие)',
                            examples: ['기다리고 있어요', '먹고 있어요']
                        },
                        {
                            pattern: 'V-아/어야 할 것 같다',
                            meaning: 'Кажется, нужно V',
                            examples: ['가야 할 것 같아요', '확인해야 할 것 같아요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '처방전 주세요', translation: 'Дайте рецепт, пожалуйста' },
                        { korean: '약국이 어디에 있어요?', translation: 'Где находится аптека?' },
                        { korean: '진료비가 얼마예요?', translation: 'Сколько стоит приём?' },
                        { korean: '다시 와야 하나요?', translation: 'Нужно прийти ещё раз?' },
                        { korean: '진단서가 필요해요', translation: 'Мне нужна справка' }
                    ]
                }
            ]
        },

        // =====================================================
        // 4. Знакомство / 소개
        // =====================================================
        {
            id: 'meeting',
            icon: '🤝',
            title: 'Знакомство',
            titleKr: '소개',
            color: '#6A1B9A',
            description: 'Первое знакомство, представление себя, обмен контактами',
            culturalNote: 'В Корее при знакомстве очень важен возраст — от него зависит уровень вежливости речи. Вопрос «Сколько вам лет?» (몇 살이에요?) считается нормальным при знакомстве. Визитки принимают и дают двумя руками.',
            dialogues: [
                {
                    id: 'meeting-casual-1',
                    title: 'Знакомство на мероприятии',
                    titleKr: '행사에서 만남',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '민수',
                            speakerRu: 'Минсу',
                            korean: '<span class="korean-word" data-translation="здравствуйте" data-pronunciation="안녕하세요 [annyeonghaseyo]">안녕하세요</span>! <span class="korean-word" data-translation="я (вежл.)" data-pronunciation="저 [jeo]">저</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="Ким Минсу" data-pronunciation="김민수 [gimminsoo]">김민수</span><span class="korean-word" data-translation="есть/быть (вежл.)" data-pronunciation="라고 합니다 [rago hamnida]">라고 합니다</span>.',
                            translation: 'Здравствуйте! Меня зовут Ким Минсу.',
                            grammarNote: 'N(이)라고 합니다 — меня зовут N'
                        },
                        {
                            speaker: '유리',
                            speakerRu: 'Юри',
                            korean: '<span class="korean-word" data-translation="здравствуйте" data-pronunciation="안녕하세요 [annyeonghaseyo]">안녕하세요</span>, <span class="korean-word" data-translation="я (вежл.)" data-pronunciation="저 [jeo]">저</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="Юри" data-pronunciation="유리 [yuri]">유리</span><span class="korean-word" data-translation="есть/быть (вежл.)" data-pronunciation="예요 [yeyo]">예요</span>. <span class="korean-word" data-translation="приятно познакомиться" data-pronunciation="만나서 반갑습니다 [mannaseo bangapseumnida]">만나서 반갑습니다</span>.',
                            translation: 'Здравствуйте, я Юри. Приятно познакомиться.',
                            grammarNote: null
                        },
                        {
                            speaker: '민수',
                            speakerRu: 'Минсу',
                            korean: '<span class="korean-word" data-translation="приятно познакомиться" data-pronunciation="반갑습니다 [bangapseumnida]">반갑습니다</span>. <span class="korean-word" data-translation="работа" data-pronunciation="직업 [jigeop]">직업</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="что" data-pronunciation="뭐 [mwo]">뭐</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>?',
                            translation: 'Приятно. Кем вы работаете?',
                            grammarNote: null
                        },
                        {
                            speaker: '유리',
                            speakerRu: 'Юри',
                            korean: '<span class="korean-word" data-translation="я (вежл.)" data-pronunciation="저 [jeo]">저</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="дизайнер" data-pronunciation="디자이너 [dijaineo]">디자이너</span><span class="korean-word" data-translation="есть/быть (вежл.)" data-pronunciation="예요 [yeyo]">예요</span>. <span class="korean-word" data-translation="Минсу" data-pronunciation="민수 [minsoo]">민수</span> <span class="korean-word" data-translation="(обращение)" data-pronunciation="씨 [ssi]">씨</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span><span class="korean-word" data-translation="(вопрос)" data-pronunciation="요 [yo]">요</span>?',
                            translation: 'Я дизайнер. А вы, Минсу?',
                            grammarNote: 'N 씨 — вежливое обращение по имени'
                        },
                        {
                            speaker: '민수',
                            speakerRu: 'Минсу',
                            korean: '<span class="korean-word" data-translation="я (вежл.)" data-pronunciation="저 [jeo]">저</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="IT-компания" data-pronunciation="IT 회사 [aitee hoesa]">IT 회사</span><span class="korean-word" data-translation="в" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="работать" data-pronunciation="일하고 있어요 [ilhago isseoyo]">일하고 있어요</span>. <span class="korean-word" data-translation="программист" data-pronunciation="프로그래머 [peurogeuraemeo]">프로그래머</span><span class="korean-word" data-translation="есть/быть (вежл.)" data-pronunciation="예요 [yeyo]">예요</span>.',
                            translation: 'Я работаю в IT-компании. Программист.',
                            grammarNote: 'N에서 일하다 — работать в N'
                        },
                        {
                            speaker: '유리',
                            speakerRu: 'Юри',
                            korean: '<span class="korean-word" data-translation="о" data-pronunciation="아 [a]">아</span>, <span class="korean-word" data-translation="правда" data-pronunciation="정말요 [jeongmallyo]">정말요</span>? <span class="korean-word" data-translation="хобби" data-pronunciation="취미 [chwimi]">취미</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="что" data-pronunciation="뭐 [mwo]">뭐</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>?',
                            translation: 'О, правда? А какое у вас хобби?',
                            grammarNote: null
                        },
                        {
                            speaker: '민수',
                            speakerRu: 'Минсу',
                            korean: '<span class="korean-word" data-translation="фотография" data-pronunciation="사진 [sajin]">사진</span> <span class="korean-word" data-translation="снимать" data-pronunciation="찍는 [jjingneun]">찍는</span> <span class="korean-word" data-translation="(вещь)" data-pronunciation="걸 [geol]">걸</span> <span class="korean-word" data-translation="любить" data-pronunciation="좋아해요 [joahaeyo]">좋아해요</span>. <span class="korean-word" data-translation="номер телефона" data-pronunciation="전화번호 [jeonhwabeonho]">전화번호</span> <span class="korean-word" data-translation="обменяться" data-pronunciation="교환 [gyohwan]">교환</span><span class="korean-word" data-translation="делать (предложение)" data-pronunciation="할까요 [halkkayo]">할까요</span>?',
                            translation: 'Люблю фотографировать. Обменяемся номерами?',
                            grammarNote: 'V-ㄹ까요? — предложение сделать вместе'
                        },
                        {
                            speaker: '유리',
                            speakerRu: 'Юри',
                            korean: '<span class="korean-word" data-translation="хорошо" data-pronunciation="좋아요 [joayo]">좋아요</span>! <span class="korean-word" data-translation="KakaoTalk" data-pronunciation="카카오톡 [kakaotok]">카카오톡</span> <span class="korean-word" data-translation="ID" data-pronunciation="아이디 [aidi]">아이디</span> <span class="korean-word" data-translation="сказать" data-pronunciation="알려 [allyeo]">알려</span> <span class="korean-word" data-translation="дам" data-pronunciation="드릴게요 [deurilgeyo]">드릴게요</span>.',
                            translation: 'Хорошо! Дам вам свой ID в KakaoTalk.',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N(이)라고 합니다',
                            meaning: 'Меня зовут N (формальное представление)',
                            examples: ['김민수라고 합니다', '마리아라고 합니다']
                        },
                        {
                            pattern: 'N에서 일하다',
                            meaning: 'Работать в N',
                            examples: ['학교에서 일해요', '병원에서 일해요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '어디에서 오셨어요?', translation: 'Откуда вы приехали?' },
                        { korean: '한국에 얼마나 계셨어요?', translation: 'Как долго вы в Корее?' },
                        { korean: '카카오톡 해요?', translation: 'Вы есть в KakaoTalk?' },
                        { korean: '다음에 또 만나요', translation: 'Давайте ещё встретимся' }
                    ]
                },
                {
                    id: 'meeting-formal-2',
                    title: 'Деловое знакомство',
                    titleKr: '비즈니스 소개',
                    difficulty: 'hard',
                    lines: [
                        {
                            speaker: '박 과장',
                            speakerRu: 'Начальник Пак',
                            korean: '<span class="korean-word" data-translation="рад встрече" data-pronunciation="처음 뵙겠습니다 [cheoeum boepgesseumnida]">처음 뵙겠습니다</span>. <span class="korean-word" data-translation="компания «Самсон»" data-pronunciation="삼성 회사 [samseong hoesa]">삼성 회사</span><span class="korean-word" data-translation="(принадлежность)" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="начальник отдела Пак" data-pronunciation="박 과장 [bak gwajang]">박 과장</span><span class="korean-word" data-translation="есть/быть (форм.)" data-pronunciation="입니다 [imnida]">입니다</span>.',
                            translation: 'Рад впервые встретиться. Я начальник отдела Пак из компании «Самсон».',
                            grammarNote: '처음 뵙겠습니다 — формальная фраза при первой встрече'
                        },
                        {
                            speaker: '이 대리',
                            speakerRu: 'Заместитель Ли',
                            korean: '<span class="korean-word" data-translation="рад встрече" data-pronunciation="처음 뵙겠습니다 [cheoeum boepgesseumnida]">처음 뵙겠습니다</span>. <span class="korean-word" data-translation="(компания) Хангук Трейд" data-pronunciation="한국 무역 [hanguk muyeok]">한국 무역</span><span class="korean-word" data-translation="(принадлежность)" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="заместитель Ли" data-pronunciation="이 대리 [i daeri]">이 대리</span><span class="korean-word" data-translation="есть/быть (форм.)" data-pronunciation="입니다 [imnida]">입니다</span>. <span class="korean-word" data-translation="визитка" data-pronunciation="명함 [myeongham]">명함</span> <span class="korean-word" data-translation="вот (даю)" data-pronunciation="드리겠습니다 [deurigesseumnida]">드리겠습니다</span>.',
                            translation: 'Рад познакомиться. Я заместитель Ли из «Хангук Трейд». Вот моя визитка.',
                            grammarNote: 'V-겠습니다 — формальное намерение'
                        },
                        {
                            speaker: '박 과장',
                            speakerRu: 'Начальник Пак',
                            korean: '<span class="korean-word" data-translation="спасибо" data-pronunciation="감사합니다 [gamsahamnida]">감사합니다</span>. <span class="korean-word" data-translation="мой (вежл.)" data-pronunciation="제 [je]">제</span> <span class="korean-word" data-translation="визитка" data-pronunciation="명함 [myeongham]">명함</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="получите (вежл.)" data-pronunciation="받으세요 [badeuseyo]">받으세요</span>. <span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="встреча" data-pronunciation="미팅 [miting]">미팅</span> <span class="korean-word" data-translation="хорошо" data-pronunciation="잘 [jal]">잘</span> <span class="korean-word" data-translation="давайте проведём" data-pronunciation="부탁드립니다 [butakdeurimnida]">부탁드립니다</span>.',
                            translation: 'Спасибо. Вот и моя визитка. Надеюсь на плодотворную встречу.',
                            grammarNote: '잘 부탁드립니다 — формальная фраза: прошу хорошо отнестись'
                        },
                        {
                            speaker: '이 대리',
                            speakerRu: 'Заместитель Ли',
                            korean: '<span class="korean-word" data-translation="заранее" data-pronunciation="미리 [miri]">미리</span> <span class="korean-word" data-translation="подготовить" data-pronunciation="준비한 [junbihan]">준비한</span> <span class="korean-word" data-translation="материалы" data-pronunciation="자료 [jaryo]">자료</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="есть" data-pronunciation="있습니다 [itseumnida]">있습니다</span>. <span class="korean-word" data-translation="посмотреть" data-pronunciation="확인해 [hwaginhae]">확인해</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="주시겠어요 [jusigesseoyo]">주시겠어요</span>?',
                            translation: 'У меня есть заранее подготовленные материалы. Не могли бы вы их посмотреть?',
                            grammarNote: 'V-아/어 주시겠어요? — очень вежливая просьба'
                        },
                        {
                            speaker: '박 과장',
                            speakerRu: 'Начальник Пак',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="물론이죠 [mullonijyo]">물론이죠</span>. <span class="korean-word" data-translation="наша" data-pronunciation="저희 [jeohui]">저희</span> <span class="korean-word" data-translation="компания" data-pronunciation="회사 [hoesa]">회사</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="сотрудничество" data-pronunciation="협력 [hyeomnyeok]">협력</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="интерес" data-pronunciation="관심 [gwansim]">관심</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="много (есть)" data-pronunciation="많습니다 [manseumnida]">많습니다</span>.',
                            translation: 'Конечно. Наша компания тоже очень заинтересована в сотрудничестве.',
                            grammarNote: '저희 — «наш» (скромная форма 우리)'
                        },
                        {
                            speaker: '이 대리',
                            speakerRu: 'Заместитель Ли',
                            korean: '<span class="korean-word" data-translation="на следующей неделе" data-pronunciation="다음 주 [daeum ju]">다음 주</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="ещё раз" data-pronunciation="다시 [dasi]">다시</span> <span class="korean-word" data-translation="встреча" data-pronunciation="미팅 [miting]">미팅</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="назначить" data-pronunciation="잡을 [jabeul]">잡을</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있을까요 [su isseulkkayo]">수 있을까요</span>?',
                            translation: 'Можно назначить ещё одну встречу на следующей неделе?',
                            grammarNote: null
                        },
                        {
                            speaker: '박 과장',
                            speakerRu: 'Начальник Пак',
                            korean: '<span class="korean-word" data-translation="расписание" data-pronunciation="일정 [iljeong]">일정</span> <span class="korean-word" data-translation="проверить" data-pronunciation="확인하고 [hwaginhago]">확인하고</span> <span class="korean-word" data-translation="связаться" data-pronunciation="연락 [yeollak]">연락</span> <span class="korean-word" data-translation="дам" data-pronunciation="드리겠습니다 [deurigesseumnida]">드리겠습니다</span>.',
                            translation: 'Проверю расписание и свяжусь с вами.',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: '처음 뵙겠습니다',
                            meaning: 'Рад впервые встретиться (формальное знакомство)',
                            examples: ['처음 뵙겠습니다, 김 부장입니다']
                        },
                        {
                            pattern: 'V-아/어 주시겠어요?',
                            meaning: 'Не могли бы вы V? (очень вежливая просьба)',
                            examples: ['설명해 주시겠어요?', '보내 주시겠어요?']
                        },
                        {
                            pattern: 'N에 관심이 많다',
                            meaning: 'Очень заинтересован в N',
                            examples: ['한국 문화에 관심이 많아요', '이 프로젝트에 관심이 많습니다']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '명함을 받을 수 있을까요?', translation: 'Могу ли я получить визитку?' },
                        { korean: '이메일로 연락드리겠습니다', translation: 'Свяжусь по электронной почте' },
                        { korean: '좋은 말씀 감사합니다', translation: 'Спасибо за добрые слова' },
                        { korean: '앞으로 잘 부탁드립니다', translation: 'Прошу хорошо отнестись в будущем' }
                    ]
                }
            ]
        },

        // =====================================================
        // 5. В ресторане / 식당에서
        // =====================================================
        {
            id: 'restaurant',
            icon: '🍽️',
            title: 'В ресторане',
            titleKr: '식당에서',
            color: '#E65100',
            description: 'Заказ еды, просьбы к официанту, оплата счёта',
            culturalNote: 'В корейских ресторанах подают бесплатные закуски «반찬» (панчхан), которые можно просить добавить. Чаевые в Корее не приняты. Для вызова официанта нажимают кнопку на столе или говорят «저기요».',
            dialogues: [
                {
                    id: 'restaurant-order-1',
                    title: 'Заказ корейского барбекю',
                    titleKr: '고기 주문하기',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="извините" data-pronunciation="저기요 [jeogiyo]">저기요</span>, <span class="korean-word" data-translation="заказ" data-pronunciation="주문 [jumun]">주문</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="делать (буду)" data-pronunciation="할게요 [halgeyo]">할게요</span>.',
                            translation: 'Извините, хочу сделать заказ.',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="да" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="говорите" data-pronunciation="말씀하세요 [malsseumhaseyo]">말씀하세요</span>.',
                            translation: 'Да, слушаю.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="свиная грудинка" data-pronunciation="삼겹살 [samgyeopsal]">삼겹살</span> <span class="korean-word" data-translation="две" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="порция" data-pronunciation="인분 [inbun]">인분</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="холодная лапша" data-pronunciation="냉면 [naengmyeon]">냉면</span> <span class="korean-word" data-translation="одна" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="порция (тарелка)" data-pronunciation="그릇 [geureut]">그릇</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Две порции самгёпсаль и одну холодную лапшу, пожалуйста.',
                            grammarNote: 'N인분 — счётное слово для порций'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="напиток" data-pronunciation="음료 [eumnyo]">음료</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="как" data-pronunciation="어떻게 [eotteoke]">어떻게</span> <span class="korean-word" data-translation="дать (вежл.)" data-pronunciation="드릴까요 [deurilkkayo]">드릴까요</span>?',
                            translation: 'Какие напитки?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="соджу" data-pronunciation="소주 [soju]">소주</span> <span class="korean-word" data-translation="одна" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="бутылка" data-pronunciation="병 [byeong]">병</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="кола" data-pronunciation="콜라 [kolla]">콜라</span> <span class="korean-word" data-translation="два" data-pronunciation="두 [du]">두</span> <span class="korean-word" data-translation="стакан" data-pronunciation="잔 [jan]">잔</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Одну бутылку соджу и две колы, пожалуйста.',
                            grammarNote: '한 병 — счётное слово для бутылок'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="понял(а)" data-pronunciation="알겠습니다 [algesseumnida]">알겠습니다</span>. <span class="korean-word" data-translation="немного" data-pronunciation="잠시만 [jamsiman]">잠시만</span> <span class="korean-word" data-translation="ждите" data-pronunciation="기다려 주세요 [gidaryeo juseyo]">기다려 주세요</span>.',
                            translation: 'Понятно. Подождите немного, пожалуйста.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="и ещё" data-pronunciation="그리고 [geurigo]">그리고</span> <span class="korean-word" data-translation="панчхан" data-pronunciation="반찬 [banchan]">반찬</span> <span class="korean-word" data-translation="добавка" data-pronunciation="리필 [ripil]">리필</span> <span class="korean-word" data-translation="возможно" data-pronunciation="돼요 [dwaeyo]">돼요</span>?',
                            translation: 'И ещё, можно добавку панчхан?',
                            grammarNote: 'N 리필 돼요? — можно ли добавку N?'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N 주세요',
                            meaning: 'Дайте N, пожалуйста',
                            examples: ['물 주세요', '메뉴 주세요']
                        },
                        {
                            pattern: 'N인분',
                            meaning: 'N порций (счётное слово для еды)',
                            examples: ['삼 인분', '일 인분']
                        },
                        {
                            pattern: 'V-아/어 주세요',
                            meaning: 'Пожалуйста, сделайте V',
                            examples: ['기다려 주세요', '가져다 주세요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '메뉴판 좀 주세요', translation: 'Дайте меню, пожалуйста' },
                        { korean: '이거 뭐예요?', translation: 'Что это?' },
                        { korean: '맵지 않게 해 주세요', translation: 'Сделайте не острым' },
                        { korean: '계산서 주세요', translation: 'Счёт, пожалуйста' },
                        { korean: '맛있었어요', translation: 'Было вкусно' }
                    ]
                },
                {
                    id: 'restaurant-problem-2',
                    title: 'Просьбы и уточнения в ресторане',
                    titleKr: '식당에서 요청하기',
                    difficulty: 'medium',
                    lines: [
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="извините" data-pronunciation="저기요 [jeogiyo]">저기요</span>, <span class="korean-word" data-translation="это" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="блюдо" data-pronunciation="음식 [eumsik]">음식</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="арахис" data-pronunciation="땅콩 [ttangkong]">땅콩</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="входить" data-pronunciation="들어가나요 [deureogannayo]">들어가나요</span>? <span class="korean-word" data-translation="аллергия" data-pronunciation="알레르기 [allereugi]">알레르기</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어서요 [isseoseoyo]">있어서요</span>.',
                            translation: 'Извините, в этом блюде есть арахис? У меня аллергия.',
                            grammarNote: 'V-아/어서요 — потому что V (объяснение причины)'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="подождите" data-pronunciation="잠깐만요 [jamkkanmanyo]">잠깐만요</span>, <span class="korean-word" data-translation="кухня" data-pronunciation="주방 [jubang]">주방</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="проверить" data-pronunciation="확인해 [hwaginhae]">확인해</span> <span class="korean-word" data-translation="посмотрю" data-pronunciation="볼게요 [bolgeyo]">볼게요</span>. <span class="korean-word" data-translation="арахис" data-pronunciation="땅콩 [ttangkong]">땅콩</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="не входить" data-pronunciation="안 들어간다고 [an deurogandago]">안 들어간다고</span> <span class="korean-word" data-translation="(передаю)" data-pronunciation="합니다 [hamnida]">합니다</span>.',
                            translation: 'Подождите, уточню на кухне. Говорят, арахис не входит.',
                            grammarNote: 'V-ㄴ다고 하다 — передача чужой речи (косвенная речь)'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="спасибо" data-pronunciation="감사합니다 [gamsahamnida]">감사합니다</span>. <span class="korean-word" data-translation="и ещё" data-pronunciation="그리고 [geurigo]">그리고</span> <span class="korean-word" data-translation="это" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="блюдо" data-pronunciation="요리 [yori]">요리</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="сколько" data-pronunciation="얼마나 [eolmana]">얼마나</span> <span class="korean-word" data-translation="острый" data-pronunciation="매워요 [maewoyo]">매워요</span>?',
                            translation: 'Спасибо. А насколько острое это блюдо?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="острый" data-pronunciation="매운 [maeun]">매운</span> <span class="korean-word" data-translation="сторона" data-pronunciation="편 [pyeon]">편</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>. <span class="korean-word" data-translation="остроту" data-pronunciation="매운맛 [maeunmat]">매운맛</span> <span class="korean-word" data-translation="регулирование" data-pronunciation="조절 [jojeol]">조절</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="возможно" data-pronunciation="가능해요 [ganeunghaeyo]">가능해요</span>.',
                            translation: 'Довольно острое. Но остроту можно отрегулировать.',
                            grammarNote: 'A-ㄴ 편이다 — скорее A, довольно A'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="тогда" data-pronunciation="그럼 [geureom]">그럼</span> <span class="korean-word" data-translation="не остро" data-pronunciation="안 맵게 [an maepge]">안 맵게</span> <span class="korean-word" data-translation="сделайте" data-pronunciation="해 주세요 [hae juseyo]">해 주세요</span>. <span class="korean-word" data-translation="рис" data-pronunciation="밥 [bap]">밥</span> <span class="korean-word" data-translation="добавка" data-pronunciation="추가 [chuga]">추가</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="возможно" data-pronunciation="돼요 [dwaeyo]">돼요</span>?',
                            translation: 'Тогда сделайте не острым. А можно добавить рис?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Официант',
                            korean: '<span class="korean-word" data-translation="рис" data-pronunciation="공기밥 [gonggibap]">공기밥</span> <span class="korean-word" data-translation="добавка" data-pronunciation="추가 [chuga]">추가</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="тысяча" data-pronunciation="천 [cheon]">천</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>.',
                            translation: 'Дополнительная порция риса стоит 1000 вон.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Гость',
                            korean: '<span class="korean-word" data-translation="хорошо" data-pronunciation="좋아요 [joayo]">좋아요</span>, <span class="korean-word" data-translation="одна" data-pronunciation="하나 [hana]">하나</span> <span class="korean-word" data-translation="добавьте" data-pronunciation="추가해 주세요 [chugahae juseyo]">추가해 주세요</span>. <span class="korean-word" data-translation="счёт" data-pronunciation="계산 [gyesan]">계산</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="вместе" data-pronunciation="같이 [gachi]">같이</span> <span class="korean-word" data-translation="сделайте" data-pronunciation="해 주세요 [hae juseyo]">해 주세요</span>.',
                            translation: 'Хорошо, добавьте одну. Счёт вместе, пожалуйста.',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-아/어서요',
                            meaning: 'Потому что V (объяснение причины)',
                            examples: ['바빠서요', '몰라서요']
                        },
                        {
                            pattern: 'A-ㄴ 편이다',
                            meaning: 'Скорее A, довольно A',
                            examples: ['비싼 편이에요', '조용한 편이에요']
                        },
                        {
                            pattern: 'V-ㄴ다고 하다',
                            meaning: 'Говорят, что V (косвенная речь)',
                            examples: ['맛있다고 해요', '좋다고 합니다']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '소금 좀 주세요', translation: 'Дайте соль, пожалуйста' },
                        { korean: '따로따로 계산해 주세요', translation: 'Раздельный счёт, пожалуйста' },
                        { korean: '포장해 주세요', translation: 'Заверните с собой' },
                        { korean: '추천 메뉴가 뭐예요?', translation: 'Какое блюдо рекомендуете?' }
                    ]
                }
            ]
        },

        // =====================================================
        // 6. В магазине / 가게에서
        // =====================================================
        {
            id: 'shop',
            icon: '🛍️',
            title: 'В магазине',
            titleKr: '가게에서',
            color: '#2E7D32',
            description: 'Покупки, примерка, скидки и возврат товара',
            culturalNote: 'Торговаться в Корее принято на рынках (시장), но не в обычных магазинах. В торговых центрах часто бывают сезонные распродажи (세일). Фраза «깎아 주세요» (скиньте цену) используется только на рынках.',
            dialogues: [
                {
                    id: 'shop-clothes-1',
                    title: 'Покупка одежды',
                    titleKr: '옷 사기',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '직원',
                            speakerRu: 'Продавец',
                            korean: '<span class="korean-word" data-translation="добро пожаловать" data-pronunciation="어서오세요 [eoseooseyo]">어서오세요</span>. <span class="korean-word" data-translation="что" data-pronunciation="뭐 [mwo]">뭐</span> <span class="korean-word" data-translation="искать" data-pronunciation="찾으시는 [chajeuseineun]">찾으시는</span> <span class="korean-word" data-translation="(вещь)" data-pronunciation="거 [geo]">거</span> <span class="korean-word" data-translation="есть" data-pronunciation="있으세요 [isseuseyo]">있으세요</span>?',
                            translation: 'Добро пожаловать. Что-то ищете?',
                            grammarNote: 'V-시는 거 있으세요? — вежливый вопрос'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="куртка" data-pronunciation="자켓 [jaket]">자켓</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="посмотреть" data-pronunciation="보려고요 [boryeogoyo]">보려고요</span>. <span class="korean-word" data-translation="весна" data-pronunciation="봄 [bom]">봄</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="надевать" data-pronunciation="입을 [ibeul]">입을</span> <span class="korean-word" data-translation="(вещь)" data-pronunciation="건데요 [geondeyo]">건데요</span>.',
                            translation: 'Хочу посмотреть куртки. На весну.',
                            grammarNote: 'V-려고요 — собираюсь V'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Продавец',
                            korean: '<span class="korean-word" data-translation="какой" data-pronunciation="어떤 [eotteon]">어떤</span> <span class="korean-word" data-translation="стиль" data-pronunciation="스타일 [seutail]">스타일</span> <span class="korean-word" data-translation="предпочитать" data-pronunciation="좋아하세요 [joahaseyo]">좋아하세요</span>? <span class="korean-word" data-translation="размер" data-pronunciation="사이즈 [saijeu]">사이즈</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span><span class="korean-word" data-translation="(вопрос)" data-pronunciation="요 [yo]">요</span>?',
                            translation: 'Какой стиль предпочитаете? Какой размер?',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="M-размер" data-pronunciation="엠 사이즈 [em saijeu]">엠 사이즈</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="요 [yo]">요</span>. <span class="korean-word" data-translation="это" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="куртка" data-pronunciation="자켓 [jaket]">자켓</span> <span class="korean-word" data-translation="примерка" data-pronunciation="입어 [ibeo]">입어</span> <span class="korean-word" data-translation="посмотреть (возможно)" data-pronunciation="볼 [bol]">볼</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Размер M. Можно примерить эту куртку?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Продавец',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="примерочная" data-pronunciation="탈의실 [taruisil]">탈의실</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="вон там" data-pronunciation="저쪽 [jeojjok]">저쪽</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>.',
                            translation: 'Конечно, примерочная вон там.',
                            grammarNote: null
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="это" data-pronunciation="이거 [igeo]">이거</span> <span class="korean-word" data-translation="сколько" data-pronunciation="얼마 [eolma]">얼마</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>?',
                            translation: 'Сколько это стоит?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Продавец',
                            korean: '<span class="korean-word" data-translation="пятьдесят девять тысяч" data-pronunciation="오만구천 [omangucheon]">오만구천</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>. <span class="korean-word" data-translation="сейчас" data-pronunciation="지금 [jigeum]">지금</span> <span class="korean-word" data-translation="скидка" data-pronunciation="할인 [halin]">할인</span> <span class="korean-word" data-translation="середина (период)" data-pronunciation="중 [jung]">중</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>.',
                            translation: '59 000 вон. Сейчас проходит акция.',
                            grammarNote: 'N 중이다 — в процессе N'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-려고요',
                            meaning: 'Собираюсь V',
                            examples: ['사려고요', '먹으려고요']
                        },
                        {
                            pattern: 'V-아/어 볼 수 있어요?',
                            meaning: 'Можно попробовать V?',
                            examples: ['입어 볼 수 있어요?', '맛 볼 수 있어요?']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '다른 색 있어요?', translation: 'Есть другой цвет?' },
                        { korean: '좀 더 큰 사이즈 있어요?', translation: 'Есть размер побольше?' },
                        { korean: '이거 살게요', translation: 'Я возьму это' },
                        { korean: '그냥 볼게요', translation: 'Я просто посмотрю' },
                        { korean: '카드 돼요?', translation: 'Картой можно?' }
                    ]
                },
                {
                    id: 'shop-market-2',
                    title: 'Покупки на рынке с торгом',
                    titleKr: '시장에서 흥정하기',
                    difficulty: 'hard',
                    lines: [
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="тётушка (обращение)" data-pronunciation="이모님 [imonim]">이모님</span>, <span class="korean-word" data-translation="эти" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="клубника" data-pronunciation="딸기 [ttalgi]">딸기</span> <span class="korean-word" data-translation="один" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="коробка" data-pronunciation="박스 [bakseu]">박스</span> <span class="korean-word" data-translation="сколько" data-pronunciation="얼마 [eolma]">얼마</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>?',
                            translation: 'Тётушка, сколько стоит коробка клубники?',
                            grammarNote: '이모님 — уважительное обращение к женщине-продавцу на рынке'
                        },
                        {
                            speaker: '상인',
                            speakerRu: 'Торговка',
                            korean: '<span class="korean-word" data-translation="один" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="коробка" data-pronunciation="박스 [bakseu]">박스</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="пятнадцать тысяч" data-pronunciation="만오천 [manocheon]">만오천</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>. <span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="утром" data-pronunciation="아침 [achim]">아침</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="поступить" data-pronunciation="들어온 [deureon]">들어온</span> <span class="korean-word" data-translation="(вещь)" data-pronunciation="거 [geo]">거</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>.',
                            translation: '15 000 вон за коробку. Поступили сегодня утром.',
                            grammarNote: 'V-(으)ㄴ 거예요 — это то, что V (объяснение)'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="дорого" data-pronunciation="비싸네요 [bissaneyo]">비싸네요</span>. <span class="korean-word" data-translation="немного" data-pronunciation="조금 [jogeum]">조금</span> <span class="korean-word" data-translation="скинуть" data-pronunciation="깎아 [kkakka]">깎아</span> <span class="korean-word" data-translation="дать (возможно)" data-pronunciation="주실 [jusil]">주실</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Немного дороговато. Можно скинуть?',
                            grammarNote: '깎아 주다 — скинуть цену (только на рынке!)'
                        },
                        {
                            speaker: '상인',
                            speakerRu: 'Торговка',
                            korean: '<span class="korean-word" data-translation="две" data-pronunciation="두 [du]">두</span> <span class="korean-word" data-translation="коробка" data-pronunciation="박스 [bakseu]">박스</span> <span class="korean-word" data-translation="купить" data-pronunciation="사시면 [sasimyeon]">사시면</span> <span class="korean-word" data-translation="двадцать пять тысяч" data-pronunciation="이만오천 [imanocheon]">이만오천</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="дам" data-pronunciation="드릴게요 [deurilgeyo]">드릴게요</span>.',
                            translation: 'Если возьмёте две коробки, отдам за 25 000 вон.',
                            grammarNote: 'V-(으)시면 — если вы V (вежливое условие)'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="тогда" data-pronunciation="그럼 [geureom]">그럼</span> <span class="korean-word" data-translation="две" data-pronunciation="두 [du]">두</span> <span class="korean-word" data-translation="коробка" data-pronunciation="박스 [bakseu]">박스</span> <span class="korean-word" data-translation="возьму" data-pronunciation="살게요 [salgeyo]">살게요</span>. <span class="korean-word" data-translation="сумка (пакет)" data-pronunciation="봉투 [bongtu]">봉투</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="положить" data-pronunciation="넣어 [neoeo]">넣어</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Тогда возьму две коробки. Положите в пакет, пожалуйста.',
                            grammarNote: null
                        },
                        {
                            speaker: '상인',
                            speakerRu: 'Торговка',
                            korean: '<span class="korean-word" data-translation="спасибо" data-pronunciation="감사합니다 [gamsahamnida]">감사합니다</span>. <span class="korean-word" data-translation="мандарины" data-pronunciation="귤 [gyul]">귤</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="свежий" data-pronunciation="신선한데 [sinseonhande]">신선한데</span> <span class="korean-word" data-translation="как" data-pronunciation="어때요 [eottaeyo]">어때요</span>?',
                            translation: 'Спасибо. Мандарины тоже свежие, как насчёт них?',
                            grammarNote: 'A-ㄴ데 어때요? — A, как насчёт?'
                        },
                        {
                            speaker: '손님',
                            speakerRu: 'Покупатель',
                            korean: '<span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="хорошо (достаточно)" data-pronunciation="괜찮아요 [gwaenchanayo]">괜찮아요</span>. <span class="korean-word" data-translation="в следующий раз" data-pronunciation="다음에 [daeume]">다음에</span> <span class="korean-word" data-translation="куплю" data-pronunciation="살게요 [salgeyo]">살게요</span>!',
                            translation: 'Сегодня не нужно. Куплю в следующий раз!',
                            grammarNote: '다음에 — в следующий раз'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-(으)시면',
                            meaning: 'Если вы V (вежливое условие)',
                            examples: ['오시면 좋겠어요', '말씀하시면 도와 드릴게요']
                        },
                        {
                            pattern: '깎아 주세요',
                            meaning: 'Скиньте цену (только на рынках)',
                            examples: ['좀 깎아 주세요', '많이 깎아 주세요']
                        },
                        {
                            pattern: 'A-ㄴ데 어때요?',
                            meaning: 'A, как насчёт? (предложение)',
                            examples: ['맛있는데 어때요?', '예쁜데 어때요?']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '맛보기 돼요?', translation: 'Можно попробовать?' },
                        { korean: '신선해요?', translation: 'Свежее?' },
                        { korean: '현금으로 할게요', translation: 'Заплачу наличными' },
                        { korean: '좀 더 싼 거 있어요?', translation: 'Есть что-нибудь дешевле?' }
                    ]
                }
            ]
        },

        // =====================================================
        // 7. В банке / 은행에서
        // =====================================================
        {
            id: 'bank',
            icon: '🏦',
            title: 'В банке',
            titleKr: '은행에서',
            color: '#F57F17',
            description: 'Открытие счёта, обмен валюты, денежные переводы',
            culturalNote: 'В Корее для открытия банковского счёта иностранцу нужен паспорт и карта пребывания (외국인등록증). Обмен валюты в банках имеет лучший курс, чем в аэропорту. Мобильный банкинг очень развит.',
            dialogues: [
                {
                    id: 'bank-exchange-1',
                    title: 'Обмен валюты',
                    titleKr: '환전하기',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="здравствуйте" data-pronunciation="안녕하세요 [annyeonghaseyo]">안녕하세요</span>. <span class="korean-word" data-translation="обмен валюты" data-pronunciation="환전 [hwanjeon]">환전</span> <span class="korean-word" data-translation="хочу (вежл.)" data-pronunciation="하고 싶은데요 [hago sipeundeyo]">하고 싶은데요</span>.',
                            translation: 'Здравствуйте. Я хотел бы обменять валюту.',
                            grammarNote: 'V-고 싶은데요 — хотел бы V (мягкая просьба)'
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="какая" data-pronunciation="어떤 [eotteon]">어떤</span> <span class="korean-word" data-translation="валюта" data-pronunciation="통화 [tonghwa]">통화</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="обменять" data-pronunciation="바꾸시려고요 [bakkusiryeogoyo]">바꾸시려고요</span>?',
                            translation: 'Какую валюту хотите обменять?',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="доллары" data-pronunciation="달러 [dalleo]">달러</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="воны" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="на (направление)" data-pronunciation="으로 [euro]">으로</span> <span class="korean-word" data-translation="обменять" data-pronunciation="바꾸고 [bakkugo]">바꾸고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>. <span class="korean-word" data-translation="пятьсот" data-pronunciation="오백 [obaek]">오백</span> <span class="korean-word" data-translation="доллар" data-pronunciation="달러 [dalleo]">달러</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="요 [yo]">요</span>.',
                            translation: 'Хочу обменять доллары на воны. 500 долларов.',
                            grammarNote: 'N(으)로 바꾸다 — обменять на N'
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="курс обмена" data-pronunciation="환율 [hwanyul]">환율</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="один" data-pronunciation="일 [il]">일</span> <span class="korean-word" data-translation="доллар" data-pronunciation="달러 [dalleo]">달러</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="тысяча триста двадцать" data-pronunciation="천삼백이십 [cheonsambaegiship]">천삼백이십</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="이에요 [ieyo]">이에요</span>.',
                            translation: 'Сегодня курс 1320 вон за доллар.',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="понял" data-pronunciation="알겠어요 [algesseoyo]">알겠어요</span>. <span class="korean-word" data-translation="обменяйте" data-pronunciation="환전해 [hwanjeonhae]">환전해</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>. <span class="korean-word" data-translation="паспорт" data-pronunciation="여권 [yeogwon]">여권</span> <span class="korean-word" data-translation="нужен" data-pronunciation="필요해요 [piryohaeyo]">필요해요</span>?',
                            translation: 'Понятно. Обменяйте, пожалуйста. Паспорт нужен?',
                            grammarNote: 'N 필요하다 — N нужен/необходим'
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="да" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="паспорт" data-pronunciation="여권 [yeogwon]">여권</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="покажите" data-pronunciation="보여 주세요 [boyeo juseyo]">보여 주세요</span>. <span class="korean-word" data-translation="здесь" data-pronunciation="여기 [yeogi]">여기</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="подпись" data-pronunciation="서명 [seomyeong]">서명</span> <span class="korean-word" data-translation="сделайте" data-pronunciation="해 주세요 [hae juseyo]">해 주세요</span>.',
                            translation: 'Да, покажите паспорт. И подпишите здесь.',
                            grammarNote: null
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="всего" data-pronunciation="총 [chong]">총</span> <span class="korean-word" data-translation="шестьсот шестьдесят тысяч" data-pronunciation="육십육만 [yuksimyungman]">육십육만</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="입니다 [imnida]">입니다</span>. <span class="korean-word" data-translation="подтвердите" data-pronunciation="확인해 [hwaginhae]">확인해</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>.',
                            translation: 'Всего 660 000 вон. Проверьте, пожалуйста.',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-고 싶은데요',
                            meaning: 'Хотел бы V (мягкая просьба)',
                            examples: ['알고 싶은데요', '가고 싶은데요']
                        },
                        {
                            pattern: 'N(으)로 바꾸다',
                            meaning: 'Обменять/заменить на N',
                            examples: ['원으로 바꾸다', '다른 걸로 바꾸다']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '환율이 어떻게 돼요?', translation: 'Какой сейчас курс?' },
                        { korean: '수수료가 있어요?', translation: 'Есть комиссия?' },
                        { korean: '잔돈으로 주세요', translation: 'Дайте мелкими купюрами' },
                        { korean: '만 원짜리로 주세요', translation: 'Купюрами по 10 000 вон' }
                    ]
                },
                {
                    id: 'bank-account-2',
                    title: 'Открытие банковского счёта',
                    titleKr: '계좌 개설하기',
                    difficulty: 'hard',
                    lines: [
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="счёт (банковский)" data-pronunciation="계좌 [gyejwa]">계좌</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="открыть" data-pronunciation="개설하고 [gaeseorhago]">개설하고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶은데요 [sipeundeyo]">싶은데요</span>, <span class="korean-word" data-translation="какие" data-pronunciation="어떤 [eotteon]">어떤</span> <span class="korean-word" data-translation="документы" data-pronunciation="서류 [seoryu]">서류</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="нужны" data-pronunciation="필요해요 [piryohaeyo]">필요해요</span>?',
                            translation: 'Хочу открыть счёт. Какие документы нужны?',
                            grammarNote: null
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="паспорт" data-pronunciation="여권 [yeogwon]">여권</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="карта пребывания" data-pronunciation="외국인등록증 [oegugindeungnokjeung]">외국인등록증</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="нужны" data-pronunciation="필요합니다 [piryohamnida]">필요합니다</span>. <span class="korean-word" data-translation="оба" data-pronunciation="둘 다 [dul da]">둘 다</span> <span class="korean-word" data-translation="принести" data-pronunciation="가져오셨어요 [gajyeoosyeosseoyo]">가져오셨어요</span>?',
                            translation: 'Нужны паспорт и карта пребывания. Вы оба принесли?',
                            grammarNote: '둘 다 — оба, и то и другое'
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="да" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="вот" data-pronunciation="여기 [yeogi]">여기</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="(банковская) книжка" data-pronunciation="통장 [tongjang]">통장</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span> <span class="korean-word" data-translation="оба" data-pronunciation="둘 다 [dul da]">둘 다</span> <span class="korean-word" data-translation="сделать (возможно)" data-pronunciation="만들 [mandeul]">만들</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Да, вот. Можно сделать и книжку, и карту?',
                            grammarNote: null
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="возможно" data-pronunciation="가능합니다 [ganeunghamnida]">가능합니다</span>. <span class="korean-word" data-translation="дебетовая" data-pronunciation="체크 [chekeu]">체크</span> <span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="рекомендовать" data-pronunciation="추천드립니다 [chucheondeurimnida]">추천드립니다</span>. <span class="korean-word" data-translation="ежемесячная комиссия" data-pronunciation="월 수수료 [wol susuryeo]">월 수수료</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="нет" data-pronunciation="없어요 [eopseoyo]">없어요</span>.',
                            translation: 'Конечно, возможно. Рекомендую дебетовую карту. Ежемесячной комиссии нет.',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="интернет-банкинг" data-pronunciation="인터넷 뱅킹 [inteonet baengking]">인터넷 뱅킹</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="регистрация" data-pronunciation="신청 [sincheong]">신청</span><span class="korean-word" data-translation="делать (возможно)" data-pronunciation="할 [hal]">할</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있나요 [su innayo]">수 있나요</span>?',
                            translation: 'Можно ещё подключить интернет-банкинг?',
                            grammarNote: null
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="да" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="здесь" data-pronunciation="여기 [yeogi]">여기</span> <span class="korean-word" data-translation="заявление" data-pronunciation="신청서 [sincheongseo]">신청서</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="заполнить" data-pronunciation="작성해 [jakseonghae]">작성해</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>. <span class="korean-word" data-translation="приложение" data-pronunciation="앱 [aep]">앱</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="установить" data-pronunciation="설치하시면 [seolchisihmyeon]">설치하시면</span> <span class="korean-word" data-translation="перевод" data-pronunciation="이체 [iche]">이체</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="удобно" data-pronunciation="편하게 [pyeonhage]">편하게</span> <span class="korean-word" data-translation="делать (возможно)" data-pronunciation="하실 [hasil]">하실</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>.',
                            translation: 'Да, заполните вот это заявление. Если установите приложение, переводы тоже будет удобно делать.',
                            grammarNote: 'V-(으)시면 — если вы сделаете V'
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="карта" data-pronunciation="카드 [kadeu]">카드</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="когда" data-pronunciation="언제 [eonje]">언제</span> <span class="korean-word" data-translation="получить" data-pronunciation="받을 [badeul]">받을</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Когда можно получить карту?',
                            grammarNote: null
                        },
                        {
                            speaker: '은행원',
                            speakerRu: 'Сотрудник банка',
                            korean: '<span class="korean-word" data-translation="примерно" data-pronunciation="약 [yak]">약</span> <span class="korean-word" data-translation="одна" data-pronunciation="일 [il]">일</span> <span class="korean-word" data-translation="неделя" data-pronunciation="주일 [juil]">주일</span> <span class="korean-word" data-translation="занимает" data-pronunciation="걸립니다 [geollimnida]">걸립니다</span>. <span class="korean-word" data-translation="зарегистрированный адрес" data-pronunciation="등록 주소 [deungnok juso]">등록 주소</span><span class="korean-word" data-translation="на (направление)" data-pronunciation="로 [ro]">로</span> <span class="korean-word" data-translation="доставка" data-pronunciation="배송 [baesong]">배송</span><span class="korean-word" data-translation="(будет сделано)" data-pronunciation="됩니다 [doemnida]">됩니다</span>.',
                            translation: 'Примерно неделя. Доставят на ваш зарегистрированный адрес.',
                            grammarNote: 'N(으)로 배송되다 — быть доставленным на N'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'N이/가 필요하다',
                            meaning: 'N нужен/необходим',
                            examples: ['도움이 필요해요', '시간이 필요합니다']
                        },
                        {
                            pattern: 'V-ㄹ 수 있나요?',
                            meaning: 'Можно ли V? (вежливый вопрос)',
                            examples: ['바꿀 수 있나요?', '취소할 수 있나요?']
                        },
                        {
                            pattern: 'N(으)로 배송되다',
                            meaning: 'Быть доставленным на/в N',
                            examples: ['집으로 배송됩니다', '회사로 배송돼요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '잔액 확인 좀 해 주세요', translation: 'Проверьте баланс, пожалуйста' },
                        { korean: '비밀번호를 바꾸고 싶어요', translation: 'Хочу сменить пароль (PIN)' },
                        { korean: '해외 송금 가능해요?', translation: 'Возможен международный перевод?' },
                        { korean: '통장을 재발급 받고 싶어요', translation: 'Хочу перевыпустить книжку' }
                    ]
                }
            ]
        },

        // =====================================================
        // 8. На почте / 우체국에서
        // =====================================================
        {
            id: 'post-office',
            icon: '📮',
            title: 'На почте',
            titleKr: '우체국에서',
            color: '#00695C',
            description: 'Отправка посылок и писем, получение корреспонденции',
            culturalNote: 'Корейская почта (우체국) работает очень быстро и надёжно. Внутренняя доставка занимает 1-2 дня. EMS (международная экспресс-доставка) — популярный способ отправить посылку за границу. На почте также можно оплатить счета.',
            dialogues: [
                {
                    id: 'post-send-1',
                    title: 'Отправка посылки',
                    titleKr: '소포 보내기',
                    difficulty: 'easy',
                    lines: [
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="посылка" data-pronunciation="소포 [sopo]">소포</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="отправить" data-pronunciation="보내고 [bonaego]">보내고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶은데요 [sipeundeyo]">싶은데요</span>.',
                            translation: 'Хочу отправить посылку.',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="куда" data-pronunciation="어디 [eodi]">어디</span><span class="korean-word" data-translation="в (направление)" data-pronunciation="로 [ro]">로</span> <span class="korean-word" data-translation="отправить" data-pronunciation="보내시나요 [bonaesinayo]">보내시나요</span>?',
                            translation: 'Куда отправляете?',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="Россия" data-pronunciation="러시아 [reosia]">러시아</span><span class="korean-word" data-translation="в (направление)" data-pronunciation="로 [ro]">로</span> <span class="korean-word" data-translation="отправить" data-pronunciation="보내려고요 [bonaeryeogoyo]">보내려고요</span>. <span class="korean-word" data-translation="сколько" data-pronunciation="얼마나 [eolmana]">얼마나</span> <span class="korean-word" data-translation="занимает" data-pronunciation="걸려요 [geollyeoyo]">걸려요</span>?',
                            translation: 'В Россию. Сколько по времени займёт?',
                            grammarNote: '얼마나 걸리다 — сколько времени занимает'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="обычная" data-pronunciation="일반 [ilban]">일반</span> <span class="korean-word" data-translation="доставка" data-pronunciation="배송 [baesong]">배송</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="примерно" data-pronunciation="약 [yak]">약</span> <span class="korean-word" data-translation="две" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="неделя" data-pronunciation="주 [ju]">주</span>, <span class="korean-word" data-translation="EMS" data-pronunciation="이엠에스 [iemseu]">EMS</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="пять-семь" data-pronunciation="오~칠 [o~chil]">오~칠</span> <span class="korean-word" data-translation="день" data-pronunciation="일 [il]">일</span> <span class="korean-word" data-translation="занимает" data-pronunciation="걸려요 [geollyeoyo]">걸려요</span>.',
                            translation: 'Обычная доставка — около двух недель, EMS — 5-7 дней.',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: 'EMS<span class="korean-word" data-translation="(творительный падеж)" data-pronunciation="로 [ro]">로</span> <span class="korean-word" data-translation="отправлю" data-pronunciation="보낼게요 [bonaelgeyo]">보낼게요</span>. <span class="korean-word" data-translation="цена" data-pronunciation="요금 [yogeum]">요금</span><span class="korean-word" data-translation="(субъектная частица)" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="сколько" data-pronunciation="얼마 [eolma]">얼마</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>?',
                            translation: 'Отправлю EMS. Сколько стоит?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="сначала" data-pronunciation="먼저 [meonjeo]">먼저</span> <span class="korean-word" data-translation="вес" data-pronunciation="무게 [muge]">무게</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="измерить" data-pronunciation="재 [jae]">재</span> <span class="korean-word" data-translation="посмотрю" data-pronunciation="볼게요 [bolgeyo]">볼게요</span>. <span class="korean-word" data-translation="три" data-pronunciation="삼 [sam]">삼</span> <span class="korean-word" data-translation="килограмм" data-pronunciation="킬로 [killo]">킬로</span><span class="korean-word" data-translation="есть" data-pronunciation="네요 [neyo]">네요</span>. <span class="korean-word" data-translation="сорок пять тысяч" data-pronunciation="사만오천 [samanocheon]">사만오천</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="есть" data-pronunciation="입니다 [imnida]">입니다</span>.',
                            translation: 'Сначала взвешу. 3 кг. 45 000 вон.',
                            grammarNote: 'A/V-네요 — выражение обнаружения факта'
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="хорошо" data-pronunciation="좋아요 [joayo]">좋아요</span>. <span class="korean-word" data-translation="отслеживание" data-pronunciation="추적 [chujok]">추적</span> <span class="korean-word" data-translation="номер" data-pronunciation="번호 [beonho]">번호</span> <span class="korean-word" data-translation="получить (возможно)" data-pronunciation="받을 [badeul]">받을</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있어요 [su isseoyo]">수 있어요</span>?',
                            translation: 'Хорошо. Можно получить номер отслеживания?',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="네 [ne]">네</span>, <span class="korean-word" data-translation="чек" data-pronunciation="영수증 [yeongsujeung]">영수증</span><span class="korean-word" data-translation="в" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="написано" data-pronunciation="적혀 [jeokyeo]">적혀</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="онлайн" data-pronunciation="온라인 [onrain]">온라인</span><span class="korean-word" data-translation="из/в" data-pronunciation="으로 [euro]">으로</span> <span class="korean-word" data-translation="отслеживание" data-pronunciation="조회 [johoe]">조회</span> <span class="korean-word" data-translation="возможно" data-pronunciation="가능해요 [ganeunghaeyo]">가능해요</span>.',
                            translation: 'Конечно, номер указан на чеке. Можно отслеживать онлайн.',
                            grammarNote: null
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-고 싶은데요',
                            meaning: 'Хотел бы V (мягкая просьба)',
                            examples: ['보내고 싶은데요', '찾고 싶은데요']
                        },
                        {
                            pattern: '얼마나 걸리다',
                            meaning: 'Сколько времени занимает',
                            examples: ['얼마나 걸려요?', '이틀 걸려요']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '등기로 보내 주세요', translation: 'Отправьте заказным письмом' },
                        { korean: '빠른 배송 돼요?', translation: 'Быстрая доставка возможна?' },
                        { korean: '보험 붙일까요?', translation: 'Оформить страховку?' },
                        { korean: '세관 신고서 어떻게 써요?', translation: 'Как заполнить таможенную декларацию?' }
                    ]
                },
                {
                    id: 'post-receive-2',
                    title: 'Получение посылки и отправка письма',
                    titleKr: '소포 수령과 편지 보내기',
                    difficulty: 'medium',
                    lines: [
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="посылка" data-pronunciation="소포 [sopo]">소포</span> <span class="korean-word" data-translation="получение" data-pronunciation="수령 [suryeong]">수령</span><span class="korean-word" data-translation="пришёл (вежл.)" data-pronunciation="하러 왔는데요 [hareo wanneundeyo]">하러 왔는데요</span>. <span class="korean-word" data-translation="уведомление" data-pronunciation="통지서 [tongjiseo]">통지서</span><span class="korean-word" data-translation="(объектная частица)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="получить" data-pronunciation="받았어요 [badasseoyo]">받았어요</span>.',
                            translation: 'Я пришёл забрать посылку. Получил уведомление.',
                            grammarNote: 'V-러 오다 — прийти, чтобы V'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="уведомление" data-pronunciation="통지서 [tongjiseo]">통지서</span><span class="korean-word" data-translation="и" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="удостоверение личности" data-pronunciation="신분증 [sinbunjeung]">신분증</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="покажите" data-pronunciation="보여 주세요 [boyeo juseyo]">보여 주세요</span>.',
                            translation: 'Покажите уведомление и удостоверение личности.',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="вот" data-pronunciation="여기요 [yeogiyo]">여기요</span>. <span class="korean-word" data-translation="и ещё" data-pronunciation="그리고 [geurigo]">그리고</span> <span class="korean-word" data-translation="международное" data-pronunciation="국제 [gukje]">국제</span> <span class="korean-word" data-translation="письмо" data-pronunciation="편지 [pyeonji]">편지</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="отправить" data-pronunciation="보내고 [bonaego]">보내고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>.',
                            translation: 'Вот. И ещё хочу отправить международное письмо.',
                            grammarNote: null
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="какая" data-pronunciation="어느 [eoneu]">어느</span> <span class="korean-word" data-translation="страна" data-pronunciation="나라 [nara]">나라</span><span class="korean-word" data-translation="в (направление)" data-pronunciation="로 [ro]">로</span><span class="korean-word" data-translation="(вопрос)" data-pronunciation="요 [yo]">요</span>? <span class="korean-word" data-translation="марка" data-pronunciation="우표 [upyo]">우표</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="наклеить" data-pronunciation="붙이셨어요 [buchisyeosseoyo]">붙이셨어요</span>?',
                            translation: 'В какую страну? Марку наклеили?',
                            grammarNote: null
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="Россия" data-pronunciation="러시아 [reosia]">러시아</span><span class="korean-word" data-translation="в (направление)" data-pronunciation="로요 [royo]">로요</span>. <span class="korean-word" data-translation="марка" data-pronunciation="우표 [upyo]">우표</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="ещё не" data-pronunciation="아직 [ajik]">아직</span> <span class="korean-word" data-translation="не наклеил" data-pronunciation="안 붙였어요 [an buchyeosseoyo]">안 붙였어요</span>. <span class="korean-word" data-translation="здесь" data-pronunciation="여기서 [yeogiseo]">여기서</span> <span class="korean-word" data-translation="купить (возможно)" data-pronunciation="살 [sal]">살</span> <span class="korean-word" data-translation="можно" data-pronunciation="수 있죠 [su itjyo]">수 있죠</span>?',
                            translation: 'В Россию. Марку ещё не наклеил. Можно купить здесь?',
                            grammarNote: 'V-ㄹ 수 있죠? — ведь можно V? (подтверждение)'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="конечно" data-pronunciation="물론이죠 [mullonijyo]">물론이죠</span>. <span class="korean-word" data-translation="Россия" data-pronunciation="러시아 [reosia]">러시아</span><span class="korean-word" data-translation="(направление)" data-pronunciation="까지 [kkaji]">까지</span> <span class="korean-word" data-translation="авиапочта" data-pronunciation="항공편 [hanggongpyeon]">항공편</span><span class="korean-word" data-translation="(тематическая частица)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="марка" data-pronunciation="우표 [upyo]">우표</span> <span class="korean-word" data-translation="четыреста восемьдесят" data-pronunciation="사백팔십 [sabaekpalsip]">사백팔십</span> <span class="korean-word" data-translation="вон" data-pronunciation="원 [won]">원</span><span class="korean-word" data-translation="(принадлежность)" data-pronunciation="짜리 [jjari]">짜리</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="예요 [yeyo]">예요</span>.',
                            translation: 'Конечно. До России авиапочтой — марка за 480 вон.',
                            grammarNote: 'N짜리 — стоимостью N (для обозначения цены)'
                        },
                        {
                            speaker: '고객',
                            speakerRu: 'Клиент',
                            korean: '<span class="korean-word" data-translation="две" data-pronunciation="두 [du]">두</span> <span class="korean-word" data-translation="штука" data-pronunciation="장 [jang]">장</span> <span class="korean-word" data-translation="пожалуйста" data-pronunciation="주세요 [juseyo]">주세요</span>. <span class="korean-word" data-translation="письмо" data-pronunciation="편지 [pyeonji]">편지</span> <span class="korean-word" data-translation="отправка" data-pronunciation="발송 [balsong]">발송</span><span class="korean-word" data-translation="тоже" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="сделайте" data-pronunciation="해 주세요 [hae juseyo]">해 주세요</span>.',
                            translation: 'Две штуки, пожалуйста. И отправьте письмо тоже.',
                            grammarNote: '장 — счётное слово для плоских предметов (марки, бумага)'
                        },
                        {
                            speaker: '직원',
                            speakerRu: 'Сотрудник почты',
                            korean: '<span class="korean-word" data-translation="понял(а)" data-pronunciation="알겠습니다 [algesseumnida]">알겠습니다</span>. <span class="korean-word" data-translation="вот" data-pronunciation="여기 [yeogi]">여기</span> <span class="korean-word" data-translation="ваша" data-pronunciation="고객님 [gogaengnim]">고객님</span> <span class="korean-word" data-translation="посылка" data-pronunciation="소포 [sopo]">소포</span><span class="korean-word" data-translation="(вежл. окончание)" data-pronunciation="요 [yo]">요</span>. <span class="korean-word" data-translation="подпись" data-pronunciation="서명 [seomyeong]">서명</span> <span class="korean-word" data-translation="немного" data-pronunciation="좀 [jom]">좀</span> <span class="korean-word" data-translation="сделайте" data-pronunciation="해 주세요 [hae juseyo]">해 주세요</span>.',
                            translation: 'Понятно. Вот ваша посылка. Подпишите, пожалуйста.',
                            grammarNote: '고객님 — уважительное обращение к клиенту'
                        }
                    ],
                    grammarBreakdown: [
                        {
                            pattern: 'V-러 오다/가다',
                            meaning: 'Прийти/пойти, чтобы V',
                            examples: ['먹으러 가요', '사러 왔어요']
                        },
                        {
                            pattern: 'N짜리',
                            meaning: 'Стоимостью N, номиналом N',
                            examples: ['천 원짜리', '오백 원짜리']
                        },
                        {
                            pattern: 'V-ㄹ 수 있죠?',
                            meaning: 'Ведь можно V? (подтверждение)',
                            examples: ['할 수 있죠?', '올 수 있죠?']
                        }
                    ],
                    usefulPhrases: [
                        { korean: '택배 보내려고요', translation: 'Хочу отправить курьерскую посылку' },
                        { korean: '깨지기 쉬운 물건이에요', translation: 'Это хрупкий предмет' },
                        { korean: '내용물이 뭐예요?', translation: 'Что внутри (содержимое)?' },
                        { korean: '선물이에요', translation: 'Это подарок' },
                        { korean: '포장 좀 해 주세요', translation: 'Упакуйте, пожалуйста' }
                    ]
                }
            ]
        }

    ]
};

console.log('[OK] DailyDialoguesData loaded');