// ============================================
// РІВЕНЬ 4 - СЕРЕДНЬО-ПРОДВИНУТИЙ (B2)
// ============================================

const level4Texts = {
    4: {
        personal: [
            {
                id: 'personal-1',
                title: "Моя работа и карьера",
                subtitle: "나의 일과 커리어",
                korean: `<span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="в IT компании" data-pronunciation="IT 회사에서 [IT hoesaeseo]">IT 회사에서</span> <span class="korean-word" data-translation="программистом" data-pronunciation="프로그래머로 [peurogeuraemeoro]">프로그래머로</span> <span class="korean-word" data-translation="работаю" data-pronunciation="일하고 있어요 [ilhago isseoyo]">일하고 있어요</span>. <span class="korean-word" data-translation="работа" data-pronunciation="직장 [jikjang]">직장</span> <span class="korean-word" data-translation="жизнь" data-pronunciation="생활은 [saenghwareun]">생활은</span> <span class="korean-word" data-translation="интересная" data-pronunciation="흥미로워요 [heungmirowoyo]">흥미로워요</span>.

<span class="korean-word" data-translation="главное" data-pronunciation="가장 [gajang]">가장</span> <span class="korean-word" data-translation="хорошее" data-pronunciation="좋은 [joeun]">좋은</span> <span class="korean-word" data-translation="это" data-pronunciation="것은 [geoseun]">것은</span> <span class="korean-word" data-translation="гибкий" data-pronunciation="유연한 [yuyeonhan]">유연한</span> <span class="korean-word" data-translation="график работы" data-pronunciation="근무 시간 [geunmu sigan]">근무 시간</span><span class="korean-word" data-translation="입니다" data-pronunciation="입니다 [imnida]">입니다</span>. <span class="korean-word" data-translation="дистанционно" data-pronunciation="재택근무를 [jaetaekgeunmureul]">재택근무를</span> <span class="korean-word" data-translation="могу" data-pronunciation="할 수 [hal su]">할 수</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="команда" data-pronunciation="팀원들과 [timwondeulgwa]">팀원들과</span> <span class="korean-word" data-translation="отношения" data-pronunciation="관계가 [gwangyega]">관계가</span> <span class="korean-word" data-translation="хорошие" data-pronunciation="좋습니다 [josseumnida]">좋습니다</span>. <span class="korean-word" data-translation="все" data-pronunciation="모두 [modu]">모두</span> <span class="korean-word" data-translation="профессионалы" data-pronunciation="전문가들이에요 [jeonmungadeuri-eyo]">전문가들이에요</span>. <span class="korean-word" data-translation="у них" data-pronunciation="그들에게서 [geudeuregeseo]">그들에게서</span> <span class="korean-word" data-translation="многое" data-pronunciation="많은 것을 [maneun geoseul]">많은 것을</span> <span class="korean-word" data-translation="учусь" data-pronunciation="배워요 [baewoyo]">배워요</span>.

<span class="korean-word" data-translation="дальнейшем" data-pronunciation="앞으로 [apeuro]">앞으로</span> <span class="korean-word" data-translation="ведущим" data-pronunciation="선임 [seonim]">선임</span> <span class="korean-word" data-translation="разработчиком" data-pronunciation="개발자가 [gaebalchaga]">개발자가</span> <span class="korean-word" data-translation="стать" data-pronunciation="되고 [doego]">되고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>. <span class="korean-word" data-translation="навыки" data-pronunciation="기술을 [gisureul]">기술을</span> <span class="korean-word" data-translation="развивать" data-pronunciation="발전시키고 [baljeonshikigo]">발전시키고</span> <span class="korean-word" data-translation="опыт" data-pronunciation="경험을 [gyeongheomeul]">경험을</span> <span class="korean-word" data-translation="накапливать" data-pronunciation="쌓고 [ssatgo]">쌓고</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>.`,
                translation: "Я работаю программистом в IT компании. Рабочая жизнь интересная. Самое хорошее это гибкий график работы. Могу работать дистанционно. Отношения с членами команды хорошие. Все профессионалы. У них многому учусь. В дальнейшем хочу стать ведущим разработчиком. Развиваю навыки и накапливаю опыт.",
                image: "images/office-work.jpg",
                quiz: [
                    {
                        question: "어디에서 일하고 있어요? (Где работает?)",
                        options: ["은행", "학교", "IT 회사", "병원"],
                        correct: 2
                    },
                    {
                        question: "직장 생활의 가장 좋은 점은 무엇이에요? (Что самое лучшее в работе?)",
                        options: ["높은 급여", "유연한 근무 시간", "회사 위치", "무료 식사"],
                        correct: 1
                    },
                    {
                        question: "팀원들과의 관계는 어때요? (Какие отношения с коллегами?)",
                        options: ["나빠요", "좋아요", "보통이에요", "모르겠어요"],
                        correct: 1
                    },
                    {
                        question: "앞으로 무엇이 되고 싶어요? (Кем хочет стать?)",
                        options: ["선생님", "의사", "선임 개발자", "요리사"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'personal-2',
                title: "Баланс работы и жизни",
                subtitle: "일과 삶의 균형",
                korean: `<span class="korean-word" data-translation="современное" data-pronunciation="현대 [hyeondae]">현대</span> <span class="korean-word" data-translation="общество" data-pronunciation="사회에서 [sahoeseo]">사회에서</span> <span class="korean-word" data-translation="работа" data-pronunciation="일 [il]">일</span><span class="korean-word" data-translation="과" data-pronunciation="과 [gwa]">과</span> <span class="korean-word" data-translation="жизнь" data-pronunciation="삶 [sam]">삶</span><span class="korean-word" data-translation="의" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="баланс" data-pronunciation="균형 [gyunhyeong]">균형</span><span class="korean-word" data-translation="은" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="очень" data-pronunciation="매우 [maeu]">매우</span> <span class="korean-word" data-translation="важная" data-pronunciation="중요한 [jungyohan]">중요한</span> <span class="korean-word" data-translation="тема" data-pronunciation="주제 [juje]">주제</span><span class="korean-word" data-translation="입니다" data-pronunciation="입니다 [imnida]">입니다</span>.

<span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="будние дни" data-pronunciation="평일에는 [pyeongireneun]">평일에는</span> <span class="korean-word" data-translation="работе" data-pronunciation="일에 [ire]">일에</span> <span class="korean-word" data-translation="сосредотачиваюсь" data-pronunciation="집중하고 [jipjunghago]">집중하고</span>, <span class="korean-word" data-translation="выходные" data-pronunciation="주말에는 [jumareneun]">주말에는</span> <span class="korean-word" data-translation="себе" data-pronunciation="자신을 [jasineul]">자신을</span> <span class="korean-word" data-translation="위해" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="время" data-pronunciation="시간을 [siganeul]">시간을</span> <span class="korean-word" data-translation="трачу" data-pronunciation="보내요 [bonaeyo]">보내요</span>.

<span class="korean-word" data-translation="хобби" data-pronunciation="취미 [chwimi]">취미</span><span class="korean-word" data-translation="생활" data-pronunciation="생활 [saenghwal]">생활</span><span class="korean-word" data-translation="도" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="важно" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>. <span class="korean-word" data-translation="книги" data-pronunciation="책을 [chaegeul]">책을</span> <span class="korean-word" data-translation="читать" data-pronunciation="읽거나 [ilkkeona]">읽거나</span> <span class="korean-word" data-translation="йогой" data-pronunciation="요가를 [yogareul]">요가를</span> <span class="korean-word" data-translation="занимаюсь" data-pronunciation="해요 [haeyo]">해요</span>. <span class="korean-word" data-translation="друзья" data-pronunciation="친구들과 [chingudeulgwa]">친구들과</span> <span class="korean-word" data-translation="встречи" data-pronunciation="만남도 [mannamdo]">만남도</span> <span class="korean-word" data-translation="регулярно" data-pronunciation="정기적으로 [jeonggijeogeuro]">정기적으로</span> <span class="korean-word" data-translation="есть" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="самообразование" data-pronunciation="자기 개발 [jagi gaebal]">자기 개발</span><span class="korean-word" data-translation="을" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="위해" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="온라인" data-pronunciation="온라인 [onrain]">온라인</span> <span class="korean-word" data-translation="강좌" data-pronunciation="강좌를 [gangjwareul]">강좌를</span> <span class="korean-word" data-translation="듣고" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="баланс" data-pronunciation="균형 [gyunhyeong]">균형</span> <span class="korean-word" data-translation="잡힌" data-pronunciation="잡힌 [japhin]">잡힌</span> <span class="korean-word" data-translation="삶" data-pronunciation="삶이 [sami]">삶이</span> <span class="korean-word" data-translation="가장" data-pronunciation="가장 [gajang]">가장</span> <span class="korean-word" data-translation="중요" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>.`,
                translation: "В современном обществе баланс работы и жизни это очень важная тема. Я в будние дни сосредотачиваюсь на работе, в выходные трачу время для себя. Хобби тоже важны. Читаю книги или занимаюсь йогой. С друзьями встречи тоже регулярные. Для самообразования слушаю онлайн курсы. Сбалансированная жизнь самое важное.",
                image: "images/work-life-balance.jpg",
                quiz: [
                    {
                        question: "현대 사회에서 무엇이 중요한 주제예요? (Что важная тема в современном обществе?)",
                        options: ["돈", "명예", "일과 삶의 균형", "성공"],
                        correct: 2
                    },
                    {
                        question: "평일에는 무엇을 해요? (Что делает в будние дни?)",
                        options: ["일에 집중해요", "쉬어요", "여행해요", "잠을 자요"],
                        correct: 0
                    },
                    {
                        question: "취미 생활로 무엇을 해요? (Какие хобби?)",
                        options: ["게임", "책 읽기와 요가", "등산", "요리"],
                        correct: 1
                    },
                    {
                        question: "자기 개발을 위해 무엇을 해요? (Что делает для самообразования?)",
                        options: ["온라인 강좌를 들어요", "텔레비전을 봐요", "잠을 자요", "음악을 들어요"],
                        correct: 0
                    }
                ]
            },
            {
                id: 'personal-3',
                title: "Мои планы на будущее",
                subtitle: "나의 미래 계획",
                korean: `<span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="в будущем" data-pronunciation="미래에 [miraee]">미래에</span> <span class="korean-word" data-translation="Корею" data-pronunciation="한국으로 [hangugeuro]">한국으로</span> <span class="korean-word" data-translation="переехать" data-pronunciation="이주하고 [ijuhago]">이주하고</span> <span class="korean-word" data-translation="хочу" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>. <span class="korean-word" data-translation="два года" data-pronunciation="이 년 [i nyeon]">이 년</span> <span class="korean-word" data-translation="후에" data-pronunciation="후에 [hue]">후에</span> <span class="korean-word" data-translation="을" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="목표" data-pronunciation="목표로 [mokpyoro]">목표로</span> <span class="korean-word" data-translation="하고" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="이를" data-pronunciation="이를 [ireul]">이를</span> <span class="korean-word" data-translation="위해" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="сейчас" data-pronunciation="지금 [jigeum]">지금</span> <span class="korean-word" data-translation="열심히" data-pronunciation="열심히 [yeolsimhi]">열심히</span> <span class="korean-word" data-translation="корейский язык" data-pronunciation="한국어를 [hangugeoreul]">한국어를</span> <span class="korean-word" data-translation="공부하고" data-pronunciation="공부하고 [gongbuhago]">공부하고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="TOPIK" data-pronunciation="TOPIK [TOPIK]">TOPIK</span> <span class="korean-word" data-translation="5급" data-pronunciation="5급 [ogeup]">5급</span> <span class="korean-word" data-translation="합격이" data-pronunciation="합격이 [hapgyeogi]">합격이</span> <span class="korean-word" data-translation="목표" data-pronunciation="목표예요 [mokpyoyeyo]">목표예요</span>.

<span class="korean-word" data-translation="일자리도" data-pronunciation="일자리도 [iljaridO]">일자리도</span> <span class="korean-word" data-translation="찾고" data-pronunciation="찾고 [chajgo]">찾고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="이력서를" data-pronunciation="이력서를 [iryeokseoreul]">이력서를</span> <span class="korean-word" data-translation="준비하고" data-pronunciation="준비하고 [junbihago]">준비하고</span> <span class="korean-word" data-translation="한국" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="회사들에" data-pronunciation="회사들에 [hoesadeure]">회사들에</span> <span class="korean-word" data-translation="지원할" data-pronunciation="지원할 [jiwonhal]">지원할</span> <span class="korean-word" data-translation="계획" data-pronunciation="계획이에요 [gyehoegiеyo]">계획이에요</span>.

<span class="korean-word" data-translation="문화" data-pronunciation="문화 [munhwa]">문화</span> <span class="korean-word" data-translation="적응도" data-pronunciation="적응도 [jeogeungdo]">적응도</span> <span class="korean-word" data-translation="중요해요" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>. <span class="korean-word" data-translation="한국" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="드라마를" data-pronunciation="드라마를 [deuram areul]">드라마를</span> <span class="korean-word" data-translation="보고" data-pronunciation="보고 [bogo]">보고</span>, <span class="korean-word" data-translation="음악을" data-pronunciation="음악을 [eumageul]">음악을</span> <span class="korean-word" data-translation="들으면서" data-pronunciation="들으면서 [deureumyeonseo]">들으면서</span> <span class="korean-word" data-translation="문화를" data-pronunciation="문화를 [munhwareul]">문화를</span> <span class="korean-word" data-translation="배워요" data-pronunciation="배워요 [baewoyo]">배워요</span>.

<span class="korean-word" data-translation="꿈을" data-pronunciation="꿈을 [kkumeul]">꿈을</span> <span class="korean-word" data-translation="실현하기" data-pronunciation="실현하기 [silhyeonhagi]">실현하기</span> <span class="korean-word" data-translation="위해" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="한" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="걸음씩" data-pronunciation="걸음씩 [georeumssik]">걸음씩</span> <span class="korean-word" data-translation="나아가고" data-pronunciation="나아가고 [naagago]">나아가고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>!`,
                translation: "Я в будущем хочу переехать в Корею. Цель через два года. Для этого сейчас усердно изучаю корейский язык. Цель сдать TOPIK 5 уровень. Ищу также работу. Готовлю резюме и планирую подавать в корейские компании. Культурная адаптация тоже важна. Смотрю корейские дорамы, слушая музыку, изучаю культуру. Чтобы реализовать мечту, делаю шаги вперёд!",
                image: "images/korea-dream.jpg",
                quiz: [
                    {
                        question: "언제 한국으로 이주하고 싶어요? (Когда хочет переехать в Корею?)",
                        options: ["내년", "이 년 후", "다섯 년 후", "십 년 후"],
                        correct: 1
                    },
                    {
                        question: "TOPIK 몇 급 합격이 목표예요? (Какой уровень TOPIK цель?)",
                        options: ["3급", "4급", "5급", "6급"],
                        correct: 2
                    },
                    {
                        question: "한국 회사들에 무엇을 할 계획이에요? (Что планирует делать в корейских компаниях?)",
                        options: ["방문하기", "지원하기", "구경하기", "공부하기"],
                        correct: 1
                    },
                    {
                        question: "문화를 배우기 위해 무엇을 해요? (Что делает для изучения культуры?)",
                        options: ["책만 읽어요", "드라마를 보고 음악을 들어요", "잠을 자요", "운동해요"],
                        correct: 1
                    }
                ]
            }
        ],
        
        stories: [
            {
                id: 'stories-1',
                title: "Неожиданная встреча в метро",
                subtitle: "지하철에서의 뜻밖의 만남",
                korean: `<span class="korean-word" data-translation="прошлой неделе" data-pronunciation="지난주에 [jinanjue]">지난주에</span> <span class="korean-word" data-translation="평소" data-pronunciation="평소처럼 [pyeongso cheoreom]">평소처럼</span> <span class="korean-word" data-translation="на работу" data-pronunciation="출근길에 [chulgeun gire]">출근길에</span> <span class="korean-word" data-translation="метро" data-pronunciation="지하철을 [jihacheoreul]">지하철을</span> <span class="korean-word" data-translation="타고" data-pronunciation="타고 [tago]">타고</span> <span class="korean-word" data-translation="있었어요" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="как обычно" data-pronunciation="늘 [neul]">늘</span> <span class="korean-word" data-translation="���ак" data-pronunciation="그렇듯 [geureoetteut]">그렇듯</span> <span class="korean-word" data-translation="наушники" data-pronunciation="이어폰을 [ieoponeul]">이어폰을</span> <span class="korean-word" data-translation="끼고" data-pronunciation="끼고 [kkigo]">끼고</span> <span class="korean-word" data-translation="음악을" data-pronunciation="음악을 [eumageul]">음악을</span> <span class="korean-word" data-translation="듣고" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="있었죠" data-pronunciation="있었죠 [isseotjyo]">있었죠</span>.

<span class="korean-word" data-translation="갑자기" data-pronunciation="갑자기 [gapjagi]">갑자기</span> <span class="korean-word" data-translation="누군가" data-pronunciation="누군가가 [nugungaga]">누군가가</span> <span class="korean-word" data-translation="어깨를" data-pronunciation="어깨를 [eokkaereul]">어깨를</span> <span class="korean-word" data-translation="톡" data-pronunciation="톡 [tok]">톡</span> <span class="korean-word" data-translation="쳤어요" data-pronunciation="쳤어요 [chyeosseoyo]">쳤어요</span>. <span class="korean-word" data-translation="돌아보니" data-pronunciation="돌아보니 [doraboni]">돌아보니</span> <span class="korean-word" data-translation="старший" data-pronunciation="고등학교 [godeunghakgyo]">고등학교</span> <span class="korean-word" data-translation="времена" data-pronunciation="때 [ttae]">때</span> <span class="korean-word" data-translation="은사님" data-pronunciation="은사님 [eunsanim]">은사님</span><span class="korean-word" data-translation="이셨어요" data-pronunciation="이셨어요 [isyeosseoyo]">이셨어요</span>!

<span class="korean-word" data-translation="십 년" data-pronunciation="십 년 [sip nyeon]">십 년</span> <span class="korean-word" data-translation="만에" data-pronunciation="만에 [mane]">만에</span> <span class="korean-word" data-translation="만난" data-pronunciation="만난 [mannan]">만난</span> <span class="korean-word" data-translation="선생님" data-pronunciation="선생님은 [seonsaengnimeun]">선생님은</span> <span class="korean-word" data-translation="전혀" data-pronunciation="전혀 [jeonhyeo]">전혀</span> <span class="korean-word" data-translation="변하지" data-pronunciation="변하지 [byeonhaji]">변하지</span> <span class="korean-word" data-translation="않으셨어요" data-pronunciation="않으셨어요 [anheusyeosseoyo]">않으셨어요</span>. <span class="korean-word" data-translation="짧은" data-pronunciation="짧은 [jjalbeun]">짧은</span> <span class="korean-word" data-translation="시간" data-pronunciation="시간이었지만 [siganieotjiman]">시간이었지만</span> <span class="korean-word" data-translation="근황을" data-pronunciation="근황을 [geunhwangeul]">근황을</span> <span class="korean-word" data-translation="나눴어요" data-pronunciation="나눴어요 [nanwosseoyo]">나눴어요</span>.

<span class="korean-word" data-translation="선생님께서는" data-pronunciation="선생님께서는 [seonsaengnimkkeseo-neun]">선생님께서는</span> <span class="korean-word" data-translation="지금도" data-pronunciation="지금도 [jigeumdo]">지금도</span> <span class="korean-word" data-translation="가르치고" data-pronunciation="가르치고 [gareuchigo]">가르치고</span> <span class="korean-word" data-translation="계신다고" data-pronunciation="계신다고 [gyeshindago]">계신다고</span> <span class="korean-word" data-translation="하셨어요" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="예전처럼" data-pronunciation="예전처럼 [yejeon cheoreom]">예전처럼</span> <span class="korean-word" data-translation="열정적으로" data-pronunciation="열정적으로 [yeoljeong jeogeuro]">열정적으로</span> <span class="korean-word" data-translation="학생들을" data-pronunciation="학생들을 [haksaengdeureul]">학생들을</span> <span class="korean-word" data-translation="지도하신다는" data-pronunciation="지도하신다는 [jidohasindaneun]">지도하신다는</span> <span class="korean-word" data-translation="말씀이" data-pronunciation="말씀이 [malsseum-i]">말씀이</span> <span class="korean-word" data-translation="감동적이었어요" data-pronunciation="감동적이었어요 [gamdongjeogieosseoyo]">감동적이었어요</span>.

<span class="korean-word" data-translation="헤어지기" data-pronunciation="헤어지기 [heeojigi]">헤어지기</span> <span class="korean-word" data-translation="전에" data-pronunciation="전에 [jeone]">전에</span> <span class="korean-word" data-translation="연락처를" data-pronunciation="연락처를 [yeollakcheoreul]">연락처를</span> <span class="korean-word" data-translation="교환했어요" data-pronunciation="교환했어요 [gyohwanhaesseoyo]">교환했어요</span>. <span class="korean-word" data-translation="이번" data-pronunciation="이번 [ibeon]">이번</span> <span class="korean-word" data-translation="주말에" data-pronunciation="주말에 [jumare]">주말에</span> <span class="korean-word" data-translation="차" data-pronunciation="차를 [chareul]">차를</span> <span class="korean-word" data-translation="마시러" data-pronunciation="마시러 [masireo]">마시러</span> <span class="korean-word" data-translation="가기로" data-pronunciation="가기로 [gagiro]">가기로</span> <span class="korean-word" data-translation="약속했답니다" data-pronunciation="약속했답니다 [yaksokhaetdamnida]">약속했답니다</span>!`,
                translation: "На прошлой неделе как обычно ехал на работу в метро. Как всегда слушал музыку в наушниках. Вдруг кто-то похлопал меня по плечу. Обернулся - это был мой школьный учитель! Учитель, которого я встретил спустя десять лет, совсем не изменился. Хоть времени было мало, но мы обменялись новостями о жизни. Учитель сказал, что до сих пор преподаёт. Было трогательно услышать, что он с тем же энтузиазмом учит студентов. Перед расставанием обменялись контактами. Договорились встретиться на выходных за чаем!",
                image: "images/subway-meeting.jpg",
                quiz: [
                    {
                        question: "어디에서 선생님을 만났어요? (Где встретил учителя?)",
                        options: ["버스에서", "지하철에서", "카페에서", "학교에서"],
                        correct: 1
                    },
                    {
                        question: "몇 년 만에 만났어요? (Через сколько лет встретились?)",
                        options: ["오 년", "십 년", "십오 년", "이십 년"],
                        correct: 1
                    },
                    {
                        question: "선생님은 지금 무엇을 하고 계세요? (Чем сейчас занимается учитель?)",
                        options: ["은퇴하셨어요", "여행 중이에요", "가르치고 계세요", "사업하세요"],
                        correct: 2
                    },
                    {
                        question: "언제 다시 만나기로 약속했어요? (Когда договорились встретиться?)",
                        options: ["내일", "다음 주", "이번 주말", "다음 달"],
                        correct: 2
                    }
                ]
            },
            
            {
                id: 'stories-2',
                title: "Первый день на новой работе",
                subtitle: "새 직장에서의 첫날",
                korean: `<span class="korean-word" data-translation="сегодня" data-pronunciation="오늘 [oneul]">오늘</span><span class="korean-word" data-translation="은" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="새" data-pronunciation="새 [sae]">새</span> <span class="korean-word" data-translation="직장" data-pronunciation="직장 [jikjang]">직장</span><span class="korean-word" data-translation="에서의" data-pronunciation="에서의 [eseoeui]">에서의</span> <span class="korean-word" data-translation="첫날" data-pronunciation="첫날 [chotnal]">첫날</span><span class="korean-word" data-translation="이었어요" data-pronunciation="이었어요 [ieosseoyo]">이었어요</span>. <span class="korean-word" data-translation="아침부터" data-pronunciation="아침부터 [achim buteo]">아침부터</span> <span class="korean-word" data-translation="긴장" data-pronunciation="긴장 [ginjang]">긴장</span><span class="korean-word" data-translation="돼서" data-pronunciation="돼서 [dwaeseo]">돼서</span> <span class="korean-word" data-translation="잠도" data-pronunciation="잠도 [jamdo]">잠도</span> <span class="korean-word" data-translation="제대로" data-pronunciation="제대로 [jedaero]">제대로</span> <span class="korean-word" data-translation="못" data-pronunciation="못 [mot]">못</span> <span class="korean-word" data-translation="잤어요" data-pronunciation="잤어요 [jasseoyo]">잤어요</span>.

<span class="korean-word" data-translation="회사에" data-pronunciation="회사에 [hoesae]">회사에</span> <span class="korean-word" data-translation="도착하자마자" data-pronunciation="도착하자마자 [dochakajamaja]">도착하자마자</span> <span class="korean-word" data-translation="팀장님께서" data-pronunciation="팀장님께서 [timjang nimkkeseo]">팀장님께서</span> <span class="korean-word" data-translation="따뜻하게" data-pronunciation="따뜻하게 [ttatteuthage]">따뜻하게</span> <span class="korean-word" data-translation="맞아" data-pronunciation="맞아 [maja]">맞아</span> <span class="korean-word" data-translation="주셨어요" data-pronunciation="주셨어요 [jusyeosseoyo]">주셨어요</span>. <span class="korean-word" data-translation="사무실을" data-pronunciation="사무실을 [samusireul]">사무실을</span> <span class="korean-word" data-translation="둘러보며" data-pronunciation="둘러보며 [dulleobomyeo]">둘러보며</span> <span class="korean-word" data-translation="팀원들을" data-pronunciation="팀원들을 [timwondeureul]">팀원들을</span> <span class="korean-word" data-translation="소개" data-pronunciation="소개 [sogae]">소개</span><span class="korean-word" data-translation="받았어요" data-pronunciation="받았어요 [badasseoyo]">받았어요</span>.

<span class="korean-word" data-translation="점심시간에는" data-pronunciation="점심시간에는 [jeomshimsiganeneun]">점심시간에는</span> <span class="korean-word" data-translation="팀원들과" data-pronunciation="팀원들과 [timwondeulgwa]">팀원들과</span> <span class="korean-word" data-translation="함께" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="식사를" data-pronunciation="식사를 [siksareul]">식사를</span> <span class="korean-word" data-translation="했어요" data-pronunciation="했어요 [haesseoyo]">했어요</span>. <span class="korean-word" data-translation="모두" data-pronunciation="모두 [modu]">모두</span> <span class="korean-word" data-translation="친절하게" data-pronunciation="친절하게 [chinjolhage]">친절하게</span> <span class="korean-word" data-translation="회사" data-pronunciation="회사 [hoesa]">회사</span> <span class="korean-word" data-translation="문화와" data-pronunciation="문화와 [munhwawa]">문화와</span> <span class="korean-word" data-translation="업무에" data-pronunciation="업무에 [eobmue]">업무에</span> <span class="korean-word" data-translation="대해" data-pronunciation="대해 [daehae]">대해</span> <span class="korean-word" data-translation="설명해" data-pronunciation="설명해 [seolmyeonghae]">설명해</span> <span class="korean-word" data-translation="주셨어요" data-pronunciation="주셨어요 [jusyeosseoyo]">주셨어요</span>.

<span class="korean-word" data-translation="오후에는" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="신입사원" data-pronunciation="신입사원 [sinipsawon]">신입사원</span> <span class="korean-word" data-translation="오리엔테이션이" data-pronunciation="오리엔테이션이 [orienteishon-i]">오리엔테이션이</span> <span class="korean-word" data-translation="있었어요" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="회사의" data-pronunciation="회사의 [hoesaui]">회사의</span> <span class="korean-word" data-translation="비전과" data-pronunciation="비전과 [bijeongwa]">비전과</span> <span class="korean-word" data-translation="목표" data-pronunciation="목표 [mokpyo]">목표</span><span class="korean-word" data-translation="를" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="배울" data-pronunciation="배울 [baeul]">배울</span> <span class="korean-word" data-translation="수" data-pronunciation="수 [su]">수</span> <span class="korean-word" data-translation="있었죠" data-pronunciation="있었죠 [isseotjyo]">있었죠</span>.

<span class="korean-word" data-translation="퇴근길에" data-pronunciation="퇴근길에 [toegeun gire]">퇴근길에</span> <span class="korean-word" data-translation="오늘" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="하루를" data-pronunciation="하루를 [harureul]">하루를</span> <span class="korean-word" data-translation="되돌아봤어요" data-pronunciation="되돌아봤어요 [dwidorabwasseoyo]">되돌아봤어요</span>. <span class="korean-word" data-translation="걱정했던" data-pronunciation="걱정했던 [geokjeonghaetdeon]">걱정했던</span> <span class="korean-word" data-translation="것보다" data-pronunciation="것보다 [geot boda]">것보다</span> <span class="korean-word" data-translation="훨씬" data-pronunciation="훨씬 [hwolssin]">훨씬</span> <span class="korean-word" data-translation="좋았어요" data-pronunciation="좋았어요 [joasseoyo]">좋았어요</span>. <span class="korean-word" data-translation="새로운" data-pronunciation="새로운 [saeroun]">새로운</span> <span class="korean-word" data-translation="시작이" data-pronunciation="시작이 [sijagi]">시작이</span> <span class="korean-word" data-translation="기대돼요" data-pronunciation="기대돼요 [gidaedwaeyo]">기대돼요</span>!`,
                translation: "Сегодня был первый день на новой работе. С утра нервничал и даже не мог нормально спать. Как только прибыл в компанию, руководитель команды тепло встретил. Осматривая офис, меня представили членам команды. В обеденное время вместе поели с коллегами. Все доброжелательно рассказали о культуре компании и о работе. Во второй половине дня была ориентация для новых сотрудников. Смог узнать о видении и целях компании. По дороге домой оглянулся на сегодняшний день. Было намного лучше, чем я беспокоился. Жду нового начала!",
                image: "images/first-day-work.jpg",
                quiz: [
                    {
                        question: "오늘은 무슨 날이었어요? (Какой был сегодня день?)",
                        options: ["휴가 첫날", "새 직장 첫날", "학교 첫날", "출장 첫날"],
                        correct: 1
                    },
                    {
                        question: "아침에 왜 잠을 못 잤어요? (Почему не мог спать утром?)",
                        options: ["아팠어서", "긴장돼서", "신나서", "바빠서"],
                        correct: 1
                    },
                    {
                        question: "점심시간에 무엇을 했어요? (Что делал в обеденное время?)",
                        options: ["혼자 식사했어요", "팀원들과 식사했어요", "일했어요", "잠을 잤어요"],
                        correct: 1
                    },
                    {
                        question: "첫날은 어땠어요? (Каким был первый день?)",
                        options: ["걱정보다 좋았어요", "최악이었어요", "힘들었어요", "지루했어요"],
                        correct: 0
                    }
                ]
            },
            
            {
                id: 'stories-3',
                title: "Помощь незнакомцу",
                subtitle: "낯선 사람을 도와준 이야기",
                korean: `<span class="korean-word" data-translation="지난" data-pronunciation="지난 [jinan]">지난</span> <span class="korean-word" data-translation="토요일" data-pronunciation="토요일 [toyoil]">토요일</span><span class="korean-word" data-translation="에" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="명동" data-pronunciation="명동 [myeongdong]">명동</span><span class="korean-word" data-translation="에서" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="흥미로운" data-pronunciation="흥미로운 [heungmiroun]">흥미로운</span> <span class="korean-word" data-translation="일이" data-pronunciation="일이 [iri]">일이</span> <span class="korean-word" data-translation="있었어요" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="쇼핑을" data-pronunciation="쇼핑을 [syopingeul]">쇼핑을</span> <span class="korean-word" data-translation="하고" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="있는데" data-pronunciation="있는데 [inneunde]">있는데</span>, <span class="korean-word" data-translation="외국인" data-pronunciation="외국인 [oegugin]">외국인</span> <span class="korean-word" data-translation="관광객이" data-pronunciation="관광객이 [gwangwang gaegi]">관광객이</span> <span class="korean-word" data-translation="길을" data-pronunciation="길을 [gireul]">길을</span> <span class="korean-word" data-translation="물어보셨어요" data-pronunciation="물어보셨어요 [mureobosyeosseoyo]">물어보셨어요</span>.

<span class="korean-word" data-translation="처음에는" data-pronunciation="처음에는 [cheoeumeneun]">처음에는</span> <span class="korean-word" data-translation="영어로" data-pronunciation="영어로 [yeongeoro]">영어로</span> <span class="korean-word" data-translation="대화를" data-pronunciation="대화를 [daehwareul]">대화를</span> <span class="korean-word" data-translation="시작했는데" data-pronunciation="시작했는데 [sijakaenneunde]">시작했는데</span>, <span class="korean-word" data-translation="그" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="분이" data-pronunciation="분이 [buni]">분이</span> <span class="korean-word" data-translation="한국어를" data-pronunciation="한국어를 [hangugeoreul]">한국어를</span> <span class="korean-word" data-translation="공부하고" data-pronunciation="공부하고 [gongbuhago]">공부하고</span> <span class="korean-word" data-translation="계시다고" data-pronunciation="계시다고 [gyeshindago]">계시다고</span> <span class="korean-word" data-translation="하셨어요" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="그래서" data-pronunciation="그래서 [geuraeseo]">그래서</span> <span class="korean-word" data-translation="천천히" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="한국어로" data-pronunciation="한국어로 [hangugeoro]">한국어로</span> <span class="korean-word" data-translation="설명해" data-pronunciation="설명해 [seolmyeonghae]">설명해</span> <span class="korean-word" data-translation="드렸어요" data-pronunciation="드렸어요 [deuryeosseoyo]">드렸어요</span>.

<span class="korean-word" data-translation="가는" data-pronunciation="가는 [ganeun]">가는</span> <span class="korean-word" data-translation="길에" data-pronunciation="길에 [gire]">길에</span> <span class="korean-word" data-translation="여러" data-pronunciation="여러 [yeoreo]">여러</span> <span class="korean-word" data-translation="이야기를" data-pronunciation="이야기를 [iyagireul]">이야기를</span> <span class="korean-word" data-translation="나눴어요" data-pronunciation="나눴어요 [nanwosseoyo]">나눴어요</span>. <span class="korean-word" data-translation="그" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="분은" data-pronunciation="분은 [buneun]">분은</span> <span class="korean-word" data-translation="프랑스" data-pronunciation="프랑스 [peurangseu]">프랑스</span><span class="korean-word" data-translation="에서" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="오신" data-pronunciation="오신 [osin]">오신</span> <span class="korean-word" data-translation="교사" data-pronunciation="교사셨고 [gyosasyeotgo]">교사셨고</span>, <span class="korean-word" data-translation="한국" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="문화에" data-pronunciation="문화에 [munhwae]">문화에</span> <span class="korean-word" data-translation="큰" data-pronunciation="큰 [keun]">큰</span> <span class="korean-word" data-translation="관심이" data-pronunciation="관심이 [gwansimi]">관심이</span> <span class="korean-word" data-translation="있으셨어요" data-pronunciation="있으셨어요 [isseusyeosseoyo]">있으셨어요</span>.

<span class="korean-word" data-translation="목적지에" data-pronunciation="목적지에 [mokjeokjie]">목적지에</span> <span class="korean-word" data-translation="도착한" data-pronunciation="도착한 [dochakan]">도착한</span> <span class="korean-word" data-translation="후" data-pronunciation="후 [hu]">후</span>, <span class="korean-word" data-translation="그" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="분께서" data-pronunciation="분께서 [bunkkeseo]">분께서</span> <span class="korean-word" data-translation="감사하다며" data-pronunciation="감사하다며 [gamsahadamyeo]">감사하다며</span> <span class="korean-word" data-translation="이메일" data-pronunciation="이메일 [imeil]">이메일</span> <span class="korean-word" data-translation="주소를" data-pronunciation="주소를 [jusoreul]">주소를</span> <span class="korean-word" data-translation="교환하자고" data-pronunciation="교환하자고 [gyohwanjago]">교환하자고</span> <span class="korean-word" data-translation="하셨어요" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="지금도" data-pronunciation="지금도 [jigeumdo]">지금도</span> <span class="korean-word" data-translation="가끔" data-pronunciation="가끔 [gakkeum]">가끔</span> <span class="korean-word" data-translation="연락하며" data-pronunciation="연락하며 [yeollakamyeo]">연락하며</span> <span class="korean-word" data-translation="언어" data-pronunciation="언어 [eoneo]">언어</span> <span class="korean-word" data-translation="교환을" data-pronunciation="교환을 [gyohwaneul]">교환을</span> <span class="korean-word" data-translation="하고" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="있답니다" data-pronunciation="있답니다 [itdamnida]">있답니다</span>!

<span class="korean-word" data-translation="작은" data-pronunciation="작은 [jageun]">작은</span> <span class="korean-word" data-translation="친절이" data-pronunciation="친절이 [chinjori]">친절이</span> <span class="korean-word" data-translation="좋은" data-pronunciation="좋은 [joeun]">좋은</span> <span class="korean-word" data-translation="인연으로" data-pronunciation="인연으로 [inyeoneuro]">인연으로</span> <span class="korean-word" data-translation="이어졌네요" data-pronunciation="이어졌네요 [ieojyeot-neyo]">이어졌네요</span>!`,
                translation: "В прошлую субботу в Мёндоне произошло интересное событие. Делал покупки, когда иностранный турист спросил дорогу. Сначала начал разговор на английском, но тот человек сказал, что изучает корейский. Поэтому медленно объяснил на корейском языке. По дороге много говорили. Оказалось, что он учитель из Франции и очень интересуется корейской культурой. После прибытия в пункт назначения, он с благодарностью предложил обменяться e-mail адресами. До сих пор иногда общаемся и обмениваемся языковыми знаниями! Маленькая доброта переросла в хорошую связь!",
                image: "images/helping-tourist.jpg",
                quiz: [
                    {
                        question: "어디에서 외국인을 만났어요? (Где встретил иностранца?)",
                        options: ["인사동", "명동", "강남", "홍대"],
                        correct: 1
                    },
                    {
                        question: "외국인은 어느 나라에서 왔어요? (Из какой страны иностранец?)",
                        options: ["일본", "중국", "프랑스", "미국"],
                        correct: 2
                    },
                    {
                        question: "외국인의 직업은 무엇이에요? (Какая профессия у иностранца?)",
                        options: ["의사", "교사", "요리사", "변호사"],
                        correct: 1
                    },
                    {
                        question: "지금도 외국인과 무엇을 하고 있어요? (Что до сих пор делает с иностранцем?)",
                        options: ["여행해요", "언어 교환을 해요", "일해요", "공부해요"],
                        correct: 1
                    }
                ]
            }
        ],
        
        culture: [
            {
                id: 'culture-1',
                title: "Корейский офисный этикет",
                subtitle: "한국의 사무실 예절",
                korean: `<span class="korean-word" data-translation="한국" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="회사" data-pronunciation="회사 [hoesa]">회사</span><span class="korean-word" data-translation="에서는" data-pronunciation="에서는 [eseoneun]">에서는</span> <span class="korean-word" data-translation="독특한" data-pronunciation="독특한 [deukthan]">독특한</span> <span class="korean-word" data-translation="직장" data-pronunciation="직장 [jikjang]">직장</span> <span class="korean-word" data-translation="문화가" data-pronunciation="문화가 [munhwaga]">문화가</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="무엇보다" data-pronunciation="무엇보다 [mueotboda]">무엇보다</span> <span class="korean-word" data-translation="위계질서가" data-pronunciation="위계질서가 [wigyejilseoga]">위계질서가</span> <span class="korean-word" data-translation="중요해요" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>.

<span class="korean-word" data-translation="상사에게는" data-pronunciation="상사에게는 [sangsaegeneun]">상사에게는</span> <span class="korean-word" data-translation="존댓말을" data-pronunciation="존댓말을 [jondaenmareul]">존댓말을</span> <span class="korean-word" data-translation="꼭" data-pronunciation="꼭 [kkok]">꼭</span> <span class="korean-word" data-translation="사용해야" data-pronunciation="사용해야 [sayonghaeya]">사용해야</span> <span class="korean-word" data-translation="하며" data-pronunciation="하며 [hamyeo]">하며</span>, <span class="korean-word" data-translation="호칭도" data-pronunciation="호칭도 [hochingdo]">호칭도</span> <span class="korean-word" data-translation="조심스럽게" data-pronunciation="조심스럽게 [josimseureopge]">조심스럽게</span> <span class="korean-word" data-translation="사용해야" data-pronunciation="사용해야 [sayonghaeya]">사용해야</span> <span class="korean-word" data-translation="해요" data-pronunciation="해요 [haeyo]">해요</span>. <span class="korean-word" data-translation="예를" data-pronunciation="예를 [yereul]">예를</span> <span class="korean-word" data-translation="들어" data-pronunciation="들어 [deureo]">들어</span> <span class="korean-word" data-translation="김" data-pronunciation="김 [kim]">김</span> <span class="korean-word" data-translation="부장님" data-pronunciation="부장님 [bujangnim]">부장님</span>, <span class="korean-word" data-translation="이" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="대리님" data-pronunciation="대리님 [daerinim]">대리님</span> <span class="korean-word" data-translation="같이" data-pronunciation="같이 [gachi]">같이</span> <span class="korean-word" data-translation="직급과" data-pronunciation="직급과 [jikgeupgwa]">직급과</span> <span class="korean-word" data-translation="함께" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="부르는" data-pronunciation="부르는 [bureuneun]">부르는</span> <span class="korean-word" data-translation="것이" data-pronunciation="것이 [geosi]">것이</span> <span class="korean-word" data-translation="일반적이에요" data-pronunciation="일반적이에요 [ilbanjeogiеyo]">일반적이에요</span>.

<span class="korean-word" data-translation="회의" data-pronunciation="회의 [hoeui]">회의</span> <span class="korean-word" data-translation="시간에는" data-pronunciation="시간에는 [siganeneun]">시간에는</span> <span class="korean-word" data-translation="상사의" data-pronunciation="상사의 [sangsaui]">상사의</span> <span class="korean-word" data-translation="말을" data-pronunciation="말을 [mareul]">말을</span> <span class="korean-word" data-translation="끝까지" data-pronunciation="끝까지 [kkeutkkaji]">끝까지</span> <span class="korean-word" data-translation="듣고" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="의견을" data-pronunciation="의견을 [uigyeoneul]">의견을</span> <span class="korean-word" data-translation="조심스럽게" data-pronunciation="조심스럽게 [josimseureopge]">조심스럽게</span> <span class="korean-word" data-translation="제시하는" data-pronunciation="제시하는 [jesihaneun]">제시하는</span> <span class="korean-word" data-translation="것이" data-pronunciation="것이 [geosi]">것이</span> <span class="korean-word" data-translation="예의예요" data-pronunciation="예의예요 [yeuiyeyo]">예의예요</span>.

<span class="korean-word" data-translation="회식" data-pronunciation="회식 [hoesik]">회식</span> <span class="korean-word" data-translation="문화도" data-pronunciation="문화도 [munhwado]">문화도</span> <span class="korean-word" data-translation="특별해요" data-pronunciation="특별해요 [teukbyeolhaeyo]">특별해요</span>. <span class="korean-word" data-translation="팀워크를" data-pronunciation="팀워크를 [timwokeureul]">팀워크를</span> <span class="korean-word" data-translation="다지고" data-pronunciation="다지고 [dajigo]">다지고</span> <span class="korean-word" data-translation="친목을" data-pronunciation="친목을 [chinmogeul]">친목을</span> <span class="korean-word" data-translation="도모하기" data-pronunciation="도모하기 [domohagi]">도모하기</span> <span class="korean-word" data-translation="위한" data-pronunciation="위한 [wihan]">위한</span> <span class="korean-word" data-translation="중요한" data-pronunciation="중요한 [jungyohan]">중요한</span> <span class="korean-word" data-translation="시간이에요" data-pronunciation="시간이에요 [siganieyo]">시간이에요</span>.

<span class="korean-word" data-translation="최근에는" data-pronunciation="최근에는 [choegyeoneneun]">최근에는</span> <span class="korean-word" data-translation="수평적인" data-pronunciation="수평적인 [supyeongjeogin]">수평적인</span> <span class="korean-word" data-translation="조직" data-pronunciation="조직 [jojik]">조직</span> <span class="korean-word" data-translation="문화가" data-pronunciation="문화가 [munhwaga]">문화가</span> <span class="korean-word" data-translation="확산되고" data-pronunciation="확산되고 [hwaksandoego]">확산되고</span> <span class="korean-word" data-translation="있지만" data-pronunciation="있지만 [itjiman]">있지만</span>, <span class="korean-word" data-translation="여전히" data-pronunciation="여전히 [yeojeonhi]">여전히</span> <span class="korean-word" data-translation="전통적인" data-pronunciation="전통적인 [jeontongjeogin]">전통적인</span> <span class="korean-word" data-translation="예절이" data-pronunciation="예절이 [yejeorii]">예절이</span> <span class="korean-word" data-translation="중시되고" data-pronunciation="중시되고 [jungshidoego]">중시되고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>.`,
                translation: "В корейских компаниях есть уникальная офисная культура. Прежде всего важна иерархия. К руководителям обязательно нужно использовать уважительную речь, и обращения также нужно использовать осторожно. Например, обычно называют вместе с должностью, как директор Ким, заместитель Ли. Во время совещаний - вежливость выслушать начальника до конца и осторожно представлять своё мнение. Культура корпоративных ужинов тоже особенная. Это важное время для укрепления командной работы и сплочённости. В последнее время распространяется горизонтальная организационная культура, но до сих пор ценится традиционный этикет.",
                image: "images/office-etiquette.jpg",
                quiz: [
                    {
                        question: "한국 회사에서 가장 중요한 것은 무엇이에요? (Что самое важное в корейской компании?)",
                        options: ["자유", "위계질서", "돈", "편안함"],
                        correct: 1
                    },
                    {
                        question: "상사에게 어떻게 말해야 해요? (Как нужно говорить с начальником?)",
                        options: ["반말로", "존댓말로", "영어로", "큰 소리로"],
                        correct: 1
                    },
                    {
                        question: "회식 문화의 목적은 무엇이에요? (Какова цель культуры корпоративных ужинов?)",
                        options: ["돈 벌기", "팀워크와 친목 도모", "비즈니스", "교육"],
                        correct: 1
                    },
                    {
                        question: "최근 한국 회사 문화는 어떻게 변하고 있어요? (Как меняется недавняя корейская офисная культура?)",
                        options: ["더 엄격해지고 있어요", "수평적으로 변하고 있어요", "변하지 않아요", "나빠지고 있어요"],
                        correct: 1
                    }
                ]
            },
            
            {
                id: 'culture-2',
                title: "Феномен K-Drama",
                subtitle: "K-드라마의 인기",
                korean: `<span class="korean-word" data-translation="한국" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="드라마는" data-pronunciation="드라마는 [deuramaneun]">드라마는</span> <span class="korean-word" data-translation="전" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="세계적으로" data-pronunciation="세계적으로 [segyejeogeuro]">세계적으로</span> <span class="korean-word" data-translation="엄청난" data-pronunciation="엄청난 [eomcheongnan]">엄청난</span> <span class="korean-word" data-translation="인기를" data-pronunciation="인기를 [ingireul]">인기를</span> <span class="korean-word" data-translation="끌고" data-pronunciation="끌고 [kkeulgo]">끌고</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="Netflix를" data-pronunciation="Netflix를 [Netflix-reul]">Netflix를</span> <span class="korean-word" data-translation="통해" data-pronunciation="통해 [tonghae]">통해</span> <span class="korean-word" data-translation="전" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="세계" data-pronunciation="세계 [segye]">세계</span> <span class="korean-word" data-translation="시청자들이" data-pronunciation="시청자들이 [sicheongja deuri]">시청자들이</span> <span class="korean-word" data-translation="쉽게" data-pronunciation="쉽게 [swipge]">쉽게</span> <span class="korean-word" data-translation="접근할" data-pronunciation="접근할 [jeopgeunhal]">접근할</span> <span class="korean-word" data-translation="수" data-pronunciation="수 [su]">수</span> <span class="korean-word" data-translation="있게" data-pronunciation="있게 [itge]">있게</span> <span class="korean-word" data-translation="되었어요" data-pronunciation="되었어요 [doeeosseoyo]">되었어요</span>.

<span class="korean-word" data-translation="K-드라마의" data-pronunciation="K-드라마의 [K-deuramaui]">K-드라마의</span> <span class="korean-word" data-translation="인기" data-pronunciation="인기 [ingi]">인기</span> <span class="korean-word" data-translation="비결은" data-pronunciation="비결은 [bigyeoreun]">비결은</span> <span class="korean-word" data-translation="여러" data-pronunciation="여러 [yeoreo]">여러</span> <span class="korean-word" data-translation="가지가" data-pronunciation="가지가 [gajiga]">가지가</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="첫째" data-pronunciation="첫째 [cheotjе]">첫째</span>, <span class="korean-word" data-translation="감동적인" data-pronunciation="감동적인 [gamdong jeogin]">감동적인</span> <span class="korean-word" data-translation="스토리와" data-pronunciation="스토리와 [seutoriwa]">스토리와</span> <span class="korean-word" data-translation="잘" data-pronunciation="잘 [jal]">잘</span> <span class="korean-word" data-translation="짜여진" data-pronunciation="짜여진 [jjayeojin]">짜여진</span> <span class="korean-word" data-translation="시나리오예요" data-pronunciation="시나리오예요 [sinarioyeyo]">시나리오예요</span>. <span class="korean-word" data-translation="로맨스부터" data-pronunciation="로맨스부터 [romaenseubuteo]">로맨스부터</span> <span class="korean-word" data-translation="스릴러까지" data-pronunciation="스릴러까지 [seurilleokkaji]">스릴러까지</span> <span class="korean-word" data-translation="다양한" data-pronunciation="다양한 [dayanghan]">다양한</span> <span class="korean-word" data-translation="장르를" data-pronunciation="장르를 [jangreureul]">장르를</span> <span class="korean-word" data-translation="다뤄요" data-pronunciation="다뤄요 [darywoyo]">다뤄요</span>.

<span class="korean-word" data-translation="둘째" data-pronunciation="둘째 [duljje]">둘째</span>, <span class="korean-word" data-translation="뛰어난" data-pronunciation="뛰어난 [ttwieornan]">뛰어난</span> <span class="korean-word" data-translation="배우들의" data-pronunciation="배우들의 [baeudeului]">배우들의</span> <span class="korean-word" data-translation="연기력이에요" data-pronunciation="연기력이에요 [yeongiryeogieyo]">연기력이에요</span>. <span class="korean-word" data-translation="감정" data-pronunciation="감정 [gamjeong]">감정</span> <span class="korean-word" data-translation="표현이" data-pronunciation="표현이 [pyohyeoni]">표현이</span> <span class="korean-word" data-translation="섬세하고" data-pronunciation="섬세하고 [seomsehago]">섬세하고</span> <span class="korean-word" data-translation="깊이" data-pronunciation="깊이 [gipi]">깊이</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="셋째" data-pronunciation="셋째 [setjje]">셋째</span>, <span class="korean-word" data-translation="아름다운" data-pronunciation="아름다운 [areumdaun]">아름다운</span> <span class="korean-word" data-translation="촬영지와" data-pronunciation="촬영지와 [chwalyeongjiwa]">촬영지와</span> <span class="korean-word" data-translation="OST예요" data-pronunciation="OST예요 [OST yeyo]">OST예요</span>. <span class="korean-word" data-translation="한국의" data-pronunciation="한국의 [hangugui]">한국의</span> <span class="korean-word" data-translation="아름다운" data-pronunciation="아름다운 [areumdaun]">아름다운</span> <span class="korean-word" data-translation="풍경과" data-pronunciation="풍경과 [punggyeonggwa]">풍경과</span> <span class="korean-word" data-translation="감성적인" data-pronunciation="감성적인 [gamseong jeogin]">감성적인</span> <span class="korean-word" data-translation="음악이" data-pronunciation="음악이 [eumagi]">음악이</span> <span class="korean-word" data-translation="드라마를" data-pronunciation="드라마를 [deuramareul]">드라마를</span> <span class="korean-word" data-translation="더" data-pronunciation="더 [deo]">더</span> <span class="korean-word" data-translation="특별하게" data-pronunciation="특별하게 [teukbyeolhage]">특별하게</span> <span class="korean-word" data-translation="만들어요" data-pronunciation="만들어요 [mandeureoyo]">만들어요</span>.

<span class="korean-word" data-translation="이러한" data-pronunciation="이러한 [ireоhan]">이러한</span> <span class="korean-word" data-translation="요소들이" data-pronunciation="요소들이 [yosodeuri]">요소들이</span> <span class="korean-word" data-translation="K-드라마를" data-pronunciation="K-드라마를 [K-deuramareul]">K-드라마를</span> <span class="korean-word" data-translation="전" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="세계" data-pronunciation="세계 [segye]">세계</span> <span class="korean-word" data-translation="사람들의" data-pronunciation="사람들의 [saramdeului]">사람들의</span> <span class="korean-word" data-translation="사랑을" data-pronunciation="사랑을 [sarangeul]">사랑을</span> <span class="korean-word" data-translation="받게" data-pronunciation="받게 [batge]">받게</span> <span class="korean-word" data-translation="만들었어요" data-pronunciation="만들었어요 [mandeureosseoyo]">만들었어요</span>!`,
                translation: "Корейские дорамы пользуются огромной популярностью во всём мире. Благодаря Netflix зрители со всего мира могут легко получить к ним доступ. У популярности K-Drama есть несколько секретов. Во-первых, трогательные истории и хорошо продуманные сценарии. Охватывают разнообразные жанры от романтики до триллеров. Во-вторых, превосходное актёрское мастерство. Выражение эмоций тонкое и глубокое. В-третьих, красивые места съёмок и OST. Красивые пейзажи Кореи и эмоциональная музыка делают дораму ещё более особенной. Эти элементы сделали K-Drama любимыми людьми по всему миру!",
                image: "images/kdrama-popular.jpg",
                quiz: [
                    {
                        question: "K-드라마는 어떻게 전 세계에 퍼졌어요? (Как K-Drama распространилась по всему миру?)",
                        options: ["텔레비전", "라디오", "Netflix", "신문"],
                        correct: 2
                    },
                    {
                        question: "K-드라마 인기의 첫 번째 비결은 무엇이에요? (Какой первый секрет популярности K-Drama?)",
                        options: ["짧은 시간", "감동적인 스토리", "저렴한 가격", "빠른 속도"],
                        correct: 1
                    },
                    {
                        question: "K-드라마는 어떤 장르를 다뤄요? (Какие жанры охватывает K-Drama?)",
                        options: ["로맨스만", "스릴러만", "다양한 장르", "코미디만"],
                        correct: 2
                    },
                    {
                        question: "K-드라마를 특별하게 만드는 세 번째 요소는? (Какой третий элемент делает K-Drama особенной?)",
                        options: ["배우들", "아름다운 촬영지와 OST", "감독", "길이"],
                        correct: 1
                    }
                ]
            }
        ],
        
        science: [
            {
                id: 'science-1',
                title: "Искусственный интеллект в повседневной жизни",
                subtitle: "일상생활 속 인공지능",
                korean: `<span class="korean-word" data-translation="인공지능" data-pronunciation="인공지능 [ingong jineung]">인공지능</span><span class="korean-word" data-translation="은" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="이제" data-pronunciation="이제 [ije]">이제</span> <span class="korean-word" data-translation="우리" data-pronunciation="우리 [uri]">우리</span> <span class="korean-word" data-translation="일상" data-pronunciation="일상 [ilsang]">일상</span><span class="korean-word" data-translation="의" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="일부가" data-pronunciation="일부가 [ilbuga]">일부가</span> <span class="korean-word" data-translation="되었어요" data-pronunciation="되었어요 [doeeosseoyo]">되었어요</span>. <span class="korean-word" data-translation="스마트폰의" data-pronunciation="스마트폰의 [seumateup onui]">스마트폰의</span> <span class="korean-word" data-translation="음성" data-pronunciation="음성 [eumseong]">음성</span> <span class="korean-word" data-translation="비서부터" data-pronunciation="비서부터 [biseobuteo]">비서부터</span> <span class="korean-word" data-translation="온라인" data-pronunciation="온라인 [onrain]">온라인</span> <span class="korean-word" data-translation="쇼핑" data-pronunciation="쇼핑 [syoping]">쇼핑</span> <span class="korean-word" data-translation="추천까지" data-pronunciation="추천까지 [chucheonkkaji]">추천까지</span>, <span class="korean-word" data-translation="AI는" data-pronunciation="AI는 [AIneun]">AI는</span> <span class="korean-word" data-translation="어디에나" data-pronunciation="어디에나 [eodieina]">어디에나</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="기계" data-pronunciation="기계 [gigye]">기계</span> <span class="korean-word" data-translation="학습은" data-pronunciation="학습은 [haksseubeun]">학습은</span> <span class="korean-word" data-translation="AI의" data-pronunciation="AI의 [AIui]">AI의</span> <span class="korean-word" data-translation="핵심" data-pronunciation="핵심 [haeksim]">핵심</span> <span class="korean-word" data-translation="기술이에요" data-pronunciation="기술이에요 [gisurieyo]">기술이에요</span>. <span class="korean-word" data-translation="컴퓨터가" data-pronunciation="컴퓨터가 [keompyuteoga]">컴퓨터가</span> <span class="korean-word" data-translation="데이터를" data-pronunciation="데이터를 [deitareul]">데이터를</span> <span class="korean-word" data-translation="분석하고" data-pronunciation="분석하고 [bunseokago]">분석하고</span> <span class="korean-word" data-translation="패턴을" data-pronunciation="패턴을 [paeteoneul]">패턴을</span> <span class="korean-word" data-translation="찾아내요" data-pronunciation="찾아내요 [chajanaeyo]">찾아내요</span>. <span class="korean-word" data-translation="이를" data-pronunciation="이를 [ireul]">이를</span> <span class="korean-word" data-translation="통해" data-pronunciation="통해 [tonghae]">통해</span> <span class="korean-word" data-translation="스스로" data-pronunciation="스스로 [seuseuro]">스스로</span> <span class="korean-word" data-translation="학습하고" data-pronunciation="학습하고 [haksseupago]">학습하고</span> <span class="korean-word" data-translation="발전해요" data-pronunciation="발전해요 [baljeonhaeyo]">발전해요</span>.

<span class="korean-word" data-translation="의료" data-pronunciation="의료 [uiryo]">의료</span> <span class="korean-word" data-translation="분야에서는" data-pronunciation="분야에서는 [bunyaeseoneun]">분야에서는</span> <span class="korean-word" data-translation="AI가" data-pronunciation="AI가 [AIga]">AI가</span> <span class="korean-word" data-translation="질병을" data-pronunciation="질병을 [jilbyeongeul]">질병을</span> <span class="korean-word" data-translation="진단하고" data-pronunciation="진단하고 [jindanhago]">진단하고</span> <span class="korean-word" data-translation="치료법을" data-pronunciation="치료법을 [chiryobeobeul]">치료법을</span> <span class="korean-word" data-translation="제안해요" data-pronunciation="제안해요 [jеanhaeyo]">제안해요</span>. <span class="korean-word" data-translation="자율" data-pronunciation="자율 [jayul]">자율</span> <span class="korean-word" data-translation="주행" data-pronunciation="주행 [juhaeng]">주행</span> <span class="korean-word" data-translation="자동차는" data-pronunciation="자동차는 [jadongchaneun]">자동차는</span> <span class="korean-word" data-translation="교통" data-pronunciation="교통 [gyotong]">교통</span> <span class="korean-word" data-translation="안전을" data-pronunciation="안전을 [anjeoneul]">안전을</span> <span class="korean-word" data-translation="향상시켜요" data-pronunciation="향상시켜요 [hyangsa ngshikyeoyo]">향상시켜요</span>.

<span class="korean-word" data-translation="하지만" data-pronunciation="하지만 [hajiman]">하지만</span> <span class="korean-word" data-translation="윤리적" data-pronunciation="윤리적 [yunrijеok]">윤리적</span> <span class="korean-word" data-translation="문제도" data-pronunciation="문제도 [munjedo]">문제도</span> <span class="korean-word" data-translation="있어요" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="개인" data-pronunciation="개인 [gaein]">개인</span> <span class="korean-word" data-translation="정보" data-pronunciation="정보 [jeongbo]">정보</span> <span class="korean-word" data-translation="보호와" data-pronunciation="보호와 [bohowa]">보호와</span> <span class="korean-word" data-translation="AI의" data-pronunciation="AI의 [AIui]">AI의</span> <span class="korean-word" data-translation="올바른" data-pronunciation="올바른 [olbareun]">올바른</span> <span class="korean-word" data-translation="사용에" data-pronunciation="사용에 [sayonge]">사용에</span> <span class="korean-word" data-translation="대한" data-pronunciation="대한 [daehan]">대한</span> <span class="korean-word" data-translation="논의가" data-pronunciation="논의가 [noiniga]">논의가</span> <span class="korean-word" data-translation="필요해요" data-pronunciation="필요해요 [piryohaeyo]">필요해요</span>.

<span class="korean-word" data-translation="앞으로" data-pronunciation="앞으로 [apeuro]">앞으로</span> <span class="korean-word" data-translation="AI는" data-pronunciation="AI는 [AIneun]">AI는</span> <span class="korean-word" data-translation="더욱" data-pronunciation="더욱 [deoyuk]">더욱</span> <span class="korean-word" data-translation="발전하여" data-pronunciation="발전하여 [baljeonhayeo]">발전하여</span> <span class="korean-word" data-translation="우리" data-pronunciation="우리 [uri]">우리</span> <span class="korean-word" data-translation="삶의" data-pronunciation="삶의 [samui]">삶의</span> <span class="korean-word" data-translation="질을" data-pronunciation="질을 [jireul]">질을</span> <span class="korean-word" data-translation="향상시킬" data-pronunciation="향상시킬 [hyangsangshikil]">향상시킬</span> <span class="korean-word" data-translation="거예요" data-pronunciation="거예요 [geoyeyo]">거예요</span>!`,
                translation: "Искусственный интеллект теперь стал частью нашей повседневной жизни. От голосовых помощников в смартфонах до рекомендаций при онлайн-шопинге - AI везде. Машинное обучение - ключевая технология AI. Компьютер анализирует данные и находит паттерны. Благодаря этому самостоятельно учится и развивается. В медицинской области AI диагностирует болезни и предлагает методы лечения. Автономные автомобили повышают безопасность дорожного движения. Но есть и этические проблемы. Нужны дискуссии о защите личной информации и правильном использовании AI. В будущем AI будет ещё более развиваться и повышать качество нашей жизни!",
                image: "images/ai-daily-life.jpg",
                quiz: [
                    {
                        question: "AI는 우리 생활 어디에 있어요? (Где находится AI в нашей жизни?)",
                        options: ["어디에나 있어요", "없어요", "일부만 있어요", "모르겠어요"],
                        correct: 0
                    },
                    {
                        question: "AI의 핵심 기술은 무엇이에요? (Какая ключевая технология AI?)",
                        options: ["게임", "기계 학습", "음악", "그림"],
                        correct: 1
                    },
                    {
                        question: "의료 분야에서 AI는 무엇을 해요? (Что делает AI в медицинской области?)",
                        options: ["요리", "질병 진단과 치료법 제안", "청소", "교육"],
                        correct: 1
                    },
                    {
                        question: "AI와 관련된 문제는 무엇이에요? (Какая проблема связана с AI?)",
                        options: ["너무 느려요", "윤리적 문제", "너무 비싸요", "없어요"],
                        correct: 1
                    }
                ]
            }
        ],
        
        travel: [
            {
                id: 'travel-1',
                title: "Экспедиция по крепости Хвасон",
                subtitle: "수원 화성 성곽 기행",
                korean: `<span class="korean-word" data-translation="прошлой весной" data-pronunciation="지난 봄 [jinan bom]">지난 봄</span> <span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="изучающего архитектуру" data-pronunciation="건축을 공부하는 [geonchugeul gongbuhaneun]">건축을 공부하는</span> <span class="korean-word" data-translation="друга" data-pronunciation="친구와 [chingugwa]">친구와</span> <span class="korean-word" data-translation="вместе" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="крепость Хвасон в Сувоне" data-pronunciation="수원 화성을 [Suwon Hwaseongeul]">수원 화성을</span> <span class="korean-word" data-translation="вдоль" data-pronunciation="따라 [ttara]">따라</span> <span class="korean-word" data-translation="пеший исследовательский поход" data-pronunciation="걷는 답사를 [geodneun damsareul]">걷는 답사를</span> <span class="korean-word" data-translation="совершил" data-pronunciation="떠났어요 [tteonasseoyo]">떠났어요</span>.

<span class="korean-word" data-translation="со стен крепости" data-pronunciation="성곽 위에서 [seonggwak wieseo]">성곽 위에서</span> <span class="korean-word" data-translation="смотрящие вниз улочки" data-pronunciation="내려다보이는 골목마다 [naeryeodaboineun golmokmada]">내려다보이는 골목마다</span> <span class="korean-word" data-translation="эпохи Чосон" data-pronunciation="조선 시대 [Joseon sidae]">조선 시대</span> <span class="korean-word" data-translation="оборонительная система" data-pronunciation="방어 시스템이 [bang-eo siseutemi]">방어 시스템이</span> <span class="korean-word" data-translation="как есть" data-pronunciation="그대로 [geudaero]">그대로</span> <span class="korean-word" data-translation="сохранилась" data-pronunciation="남아 있어서 [nam-a isseoseo]">남아 있어서</span> <span class="korean-word" data-translation="восхищение" data-pronunciation="감탄이 [gamtani]">감탄이</span> <span class="korean-word" data-translation="вырывалось" data-pronunciation="나왔어요 [nawasseoyo]">나왔어요</span>.

<span class="korean-word" data-translation="утром" data-pronunciation="오전에는 [ojeoneneun]">오전에는</span> <span class="korean-word" data-translation="от ворот Чананмун" data-pronunciation="장안문에서 [Janganmun-eseo]">장안문에서</span> <span class="korean-word" data-translation="стартовав" data-pronunciation="출발해 [chulbalhae]">출발해</span> <span class="korean-word" data-translation="до башни Сободон" data-pronunciation="서북공심돈까지 [seobuk gongsimdonkkaji]">서북공심돈까지</span> <span class="korean-word" data-translation="медленно" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="двигались" data-pronunciation="이동하며 [idonghamyeo]">이동하며</span> <span class="korean-word" data-translation="гидa объяснения" data-pronunciation="안내사의 설명을 [annaesa-ui seolmyeongeul]">안내사의 설명을</span> <span class="korean-word" data-translation="слушали" data-pronunciation="들었고 [deureotgo]">들었고</span>, <span class="korean-word" data-translation="днём" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="к рынку Пальдальмун" data-pronunciation="팔달문 시장으로 [Paldalmun sijangeuro]">팔달문 시장으로</span> <span class="korean-word" data-translation="спустились" data-pronunciation="내려가 [naeryeoga]">내려가</span> <span class="korean-word" data-translation="местными рекомендованный" data-pronunciation="지역 주민이 추천한 [jiyeok jumin-i chuchanhan]">지역 주민이 추천한</span> <span class="korean-word" data-translation="кальгуксу" data-pronunciation="칼국수와 [kalguksuwa]">칼국수와</span> <span class="korean-word" data-translation="улицу жареной курицы" data-pronunciation="통닭 골목을 [tongdak golmogeul]">통닭 골목을</span> <span class="korean-word" data-translation="испытали" data-pronunciation="체험했어요 [cheheomhaesseoyo]">체험했어요</span>.

<span class="korean-word" data-translation="когда наступил вечер" data-pronunciation="저녁이 되자 [jeonyeogi doeja]">저녁이 되자</span> <span class="korean-word" data-translation="подсветка крепости" data-pronunciation="성곽 조명이 [seonggwak jomyeongi]">성곽 조명이</span> <span class="korean-word" data-translation="загорелась" data-pronunciation="켜지며 [kyeojimyeo]">켜지며</span> <span class="korean-word" data-translation="город" data-pronunciation="도시가 [dosiga]">도시가</span> <span class="korean-word" data-translation="ещё более" data-pronunciation="한층 [hancheung]">한층</span> <span class="korean-word" data-translation="тихим стал" data-pronunciation="고요해졌고 [goyohaejyeotgo]">고요해졌고</span>, <span class="korean-word" data-translation="мы" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="в центре традиционных домов" data-pronunciation="한옥체험관에서 [hanok cheheomgwan-eseo]">한옥체험관에서</span> <span class="korean-word" data-translation="проходивший" data-pronunciation="열린 [yeollin]">열린</span> <span class="korean-word" data-translation="мастер-класс по традиционным инструментам" data-pronunciation="전통 악기 워크숍에 [jeontong akgi wok-seushobe]">전통 악기 워크숍에</span> <span class="korean-word" data-translation="участвуя" data-pronunciation="참여하며 [chamyeohamyeo]">참여하며</span> <span class="korean-word" data-translation="день завершили" data-pronunciation="하루를 마무리했어요 [harureul mamurihesseoyo]">하루를 마무리했어요</span>.`,
                translation: "Прошлой весной мы с другом-архитектором прошли пешком крепость Хвасон в Сувоне, восхищаясь сохранившейся оборонительной системой. Утром слушали гида по пути от Чананмуна до башни Собукконсимдон, а днём дегустировали кальгуксу и жареную курицу на рынке Пальдальмун. Вечером нас впечатлила подсветка крепости и мастер-класс по традиционным инструментам в ханоке.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "누구와 답사를 떠났어요? (С кем отправился на экспедицию?)",
                        options: ["혼자서", "가족과", "건축을 공부하는 친구와", "회사 동료와"],
                        correct: 2
                    },
                    {
                        question: "성곽 위에서 어떤 감정을 느꼈어요? (Какое чувство испытал на крепости?)",
                        options: ["지루함", "감탄", "불안", "피곤함"],
                        correct: 1
                    },
                    {
                        question: "오후에는 어디로 내려갔어요? (Куда спустились днём?)",
                        options: ["한옥 박물관", "팔달문 시장", "시청", "기차역"],
                        correct: 1
                    },
                    {
                        question: "저녁에는 무엇을 했어요? (Что делали вечером?)",
                        options: ["불꽃놀이를 봤어요", "전통 악기 워크숍에 참여했어요", "야간 등반을 했어요", "온천에 갔어요"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'travel-2',
                title: "Кофейный фестиваль в Канныне",
                subtitle: "강릉 커피 축제 여행",
                korean: `<span class="korean-word" data-translation="на рассветном поезде KTX" data-pronunciation="새벽 KTX로 [saebyeok KTX-ro]">새벽 KTX로</span> <span class="korean-word" data-translation="Сеул покинув" data-pronunciation="서울을 출발해 [seoureul chulbalhae]">서울을 출발해</span> <span class="korean-word" data-translation="в Кангнынской станции" data-pronunciation="강릉역에 [Gangneung-yeoge]">강릉역에</span> <span class="korean-word" data-translation="добрался" data-pronunciation="도착하니 [dochakhani]">도착하니</span> <span class="korean-word" data-translation="морской туман" data-pronunciation="바다 안개가 [bada angaega]">바다 안개가</span> <span class="korean-word" data-translation="ещё оставался" data-pronunciation="아직 남아 있었어요 [ajik nama isseosseoyo]">아직 남아 있었어요</span>.

<span class="korean-word" data-translation="после рассвета на пляже Кёнпо" data-pronunciation="경포해변에서 해돋이를 본 뒤 [Gyeongpo haebyeon-eseo haedodireul bon dwi]">경포해변에서 해돋이를 본 뒤</span> <span class="korean-word" data-translation="в музее кофе" data-pronunciation="커피박물관에서 [keopi bangmulgwan-eseo]">커피박물관에서</span> <span class="korean-word" data-translation="обжарку зёрен показывающий" data-pronunciation="원두를 볶는 시연을 [wondu-reul bokneun siyeoneul]">원두를 볶는 시연을</span> <span class="korean-word" data-translation="пережил" data-pronunciation="체험하고 [cheheomhago]">체험하고</span>, <span class="korean-word" data-translation="с владельцем небольшой ростерии" data-pronunciation="소규모 로스터리 대표와 [sogyumo rosteori daepyowa]">소규모 로스터리 대표와</span> <span class="korean-word" data-translation="устойчивые сделки" data-pronunciation="지속 가능한 거래에 대해 [jisok ganeunghan georae-e daehae]">지속 가능한 거래에 대해</span> <span class="korean-word" data-translation="интервью провёл" data-pronunciation="인터뷰했어요 [inteobyuhaesseoyo]">인터뷰했어요</span>.

<span class="korean-word" data-translation="днём" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="на кофейной улице пляжа Аньмок" data-pronunciation="안목해변 커피거리에서 [Anmok haebyeon keopi georieseo]">안목해변 커피거리에서</span> <span class="korean-word" data-translation="разнообразные дрипы" data-pronunciation="각양각색의 드립을 [gak-yanggakssege deuribeul]">각양각색의 드립을</span> <span class="korean-word" data-translation="сравнительно дегустируя" data-pronunciation="비교 시음하며 [bigyo sieumhamyeo]">비교 시음하며</span> <span class="korean-word" data-translation="ароматические заметки" data-pronunciation="향미 노트를 [hyangmi noteureul]">향미 노트를</span> <span class="korean-word" data-translation="записывал" data-pronunciation="작성했고 [jakseonghaetgo]">작성했고</span>, <span class="korean-word" data-translation="вечером" data-pronunciation="저녁에는 [jeonyeogeneun]">저녁에는</span> <span class="korean-word" data-translation="на классе по сочетанию" data-pronunciation="페어링 클래스를 [paeoring keullaeseureul]">페어링 클래스를</span> <span class="korean-word" data-translation="послушал" data-pronunciation="들으며 [deureumyeo]">들으며</span> <span class="korean-word" data-translation="каннынские ханква" data-pronunciation="강릉 한과와 [Gangneung hangwawa]">강릉 한과와</span> <span class="korean-word" data-translation="моносорт" data-pronunciation="싱글 오리진을 [single origin-eul]">싱글 오리진을</span> <span class="korean-word" data-translation="вместе пробовал" data-pronunciation="함께 맛봤어요 [hamkke matbwasseoyo]">함께 맛봤어요</span>.`,
                translation: "На рассветном поезде KTX я прибыл в Каннын, где ещё держался морской туман. После рассвета на пляже Кёнпо посетил музей кофе, увидел обжарку зёрен и поговорил с владельцем ростерии об устойчивой торговле. Днём дегустировал разные методы заваривания на кофейной улице Аньмок, а вечером пробовал ханква с моносортным кофе на классе по фудпейрингу.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "어떻게 강릉에 도착했어요? (Как добрался до Каннына?)",
                        options: ["버스로", "비행기로", "KTX로", "자동차로"],
                        correct: 2
                    },
                    {
                        question: "오전에는 어떤 체험을 했어요? (Какой опыт получил утром?)",
                        options: ["한옥 투어", "커피박물관에서 원두 볶는 시연을 봤어요", "스키를 탔어요", "서핑을 했어요"],
                        correct: 1
                    },
                    {
                        question: "안목해변 커피거리에서 무엇을 했어요? (Что делал на кофейной улице Аньмок?)",
                        options: ["사진만 찍었어요", "비교 시음을 하며 향미 노트를 작성했어요", "기념품을 샀어요", "공연을 봤어요"],
                        correct: 1
                    },
                    {
                        question: "저녁 클래스에서 무엇을 함께 맛봤어요? (Что пробовали на вечернем классе?)",
                        options: ["생선구이", "강릉 한과와 싱글 오리진", "초코 케이크", "막국수"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'travel-3',
                title: "Экомаршрут вдоль Намхангана",
                subtitle: "남한강 생태 트레일",
                korean: `<span class="korean-word" data-translation="каждые выходные" data-pronunciation="주말마다 [jumalmada]">주말마다</span> <span class="korean-word" data-translation="проводящийся" data-pronunciation="운영되는 [unyeongdoeneun]">운영되는</span> <span class="korean-word" data-translation="экологический велосипедный тур по Намхангану" data-pronunciation="남한강 생태 자전거 투어에 [namhangang saengtae jajeongeo tueoe]">남한강 생태 자전거 투어에</span> <span class="korean-word" data-translation="участвовал" data-pronunciation="참여해 [chamyeohae]">참여해</span> <span class="korean-word" data-translation="медленно" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="по набережной" data-pronunciation="강둑을 따라 [gangdugeul ttara]">강둑을 따라</span> <span class="korean-word" data-translation="двигался" data-pronunciation="이동했어요 [idonghaesseoyo]">이동했어요</span>.

<span class="korean-word" data-translation="экскурсовод" data-pronunciation="해설사는 [haeseolsaneun]">해설사는</span> <span class="korean-word" data-translation="каждую зону мигрирующих птиц" data-pronunciation="철새 보호 구역마다 [cheolsse boho guyeokmada]">철새 보호 구역마다</span> <span class="korean-word" data-translation="телескоп" data-pronunciation="망원경을 [mangwongyeongeul]">망원경을</span> <span class="korean-word" data-translation="устанавливал" data-pronunciation="설치해 주었고 [seolchhae ju-eotgo]">설치해 주었고</span>, <span class="korean-word" data-translation="мы" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="рабочий лист" data-pronunciation="기록지를 [girok-jireul]">기록지를</span> <span class="korean-word" data-translation="смотрели" data-pronunciation="보며 [bomy eo]">보며</span> <span class="korean-word" data-translation="названия птиц" data-pronunciation="관찰한 새의 이름과 [gwancharhan saeui ireumgwa]">관찰한 새의 이름과</span> <span class="korean-word" data-translation="маршруты миграции" data-pronunciation="이동 경로를 [idong gyeongroreul]">이동 경로를</span> <span class="korean-word" data-translation="отмечали" data-pronunciation="표시했어요 [pyosihesseoyo]">표시했어요</span>.

<span class="korean-word" data-translation="на обед" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="кооперативный локал-фуд кафе" data-pronunciation="협동조합이 운영하는 로컬 푸드 카페에서 [hyeopdongjoapi unyeonghaneun lokal pudeu kapeeseo]">협동조합이 운영하는 로컬 푸드 카페에서</span> <span class="korean-word" data-translation="сезонный овощной сет" data-pronunciation="제철 채소 정식을 [jecheol chaeso jeongsigeul]">제철 채소 정식을</span> <span class="korean-word" data-translation="вкусил" data-pronunciation="맛보고 [matbogo]">맛보고</span>, <span class="korean-word" data-translation="днём" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="ферму" data-pronunciation="농장 체험을 [nongjang cheheomeul]">농장 체험을</span> <span class="korean-word" data-translation="продолжая" data-pronunciation="이어가며 [ieogamyeo]">이어가며</span> <span class="korean-word" data-translation="проект углеродной нейтральности" data-pronunciation="탄소중립 프로젝트를 [tanso jungnip peurojekteureul]">탄소중립 프로젝트를</span> <span class="korean-word" data-translation="представили" data-pronunciation="소개했어요 [sogaehaesseoyo]">소개했어요</span>.

<span class="korean-word" data-translation="завершая тур" data-pronunciation="투어를 마치며 [tu-eoreul machimyeo]">투어를 마치며</span> <span class="korean-word" data-translation="с участниками" data-pronunciation="참가자들과 [chamgajadeulgwa]">참가자들과</span> <span class="korean-word" data-translation="обмен мнениями" data-pronunciation="피드백을 [pideubaegeul]">피드백을</span> <span class="korean-word" data-translation="делились" data-pronunciation="나누고 [nanugo]">나누고</span> <span class="korean-word" data-translation="следующего месяца" data-pronunciation="다음 달 [daeum dal]">다음 달</span> <span class="korean-word" data-translation="мониторинг" data-pronunciation="모니터링 일정에도 [moniteoring iljeong-edo]">모니터링 일정에도</span> <span class="korean-word" data-translation="вместе участвовать" data-pronunciation="함께하기로 [hamkkehagiro]">함께하기로</span> <span class="korean-word" data-translation="пообещали" data-pronunciation="약속했어요 [yaksokhaesseoyo]">약속했어요</span>.`,
                translation: "Я присоединился к экологическому велотуру вдоль Намхангана и неторопливо ехал по набережной. Экскурсовод ставил телескопы в зонах перелётных птиц, а мы отмечали виды и маршруты в рабочем листе. На обед попробовали сезонное меню в кооперативном кафе и продолжили на ферме, где рассказали о проекте углеродной нейтральности. В конце тура обменялись отзывами и договорились участвовать в следующем мониторинге.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "어떤 교통수단으로 이동했어요? (На чём передвигались во время тура?)",
                        options: ["도보로", "자전거로", "버스로", "배로"],
                        correct: 1
                    },
                    {
                        question: "해설사는 무엇을 설치해 주었어요? (Что устанавливал экскурсовод?)",
                        options: ["텐트", "망원경", "스피커", "조명"],
                        correct: 1
                    },
                    {
                        question: "점심에는 어디에서 식사했어요? (Где обедали?)",
                        options: ["호텔", "협동조합 로컬 푸드 카페", "기차역", "시장"],
                        correct: 1
                    },
                    {
                        question: "투어가 끝날 때 무엇을 약속했어요? (О чём договорились в конце тура?)",
                        options: ["다음 달 모니터링에 함께하기로 했어요", "다시 여행하지 않기로 했어요", "사진을 공유하지 않기로 했어요", "기념품을 사기로 했어요"],
                        correct: 0
                    }
                ]
            }
        ],
        food: [
            {
                id: 'food-1',
                title: "Гастрономический тур по Чонджу",
                subtitle: "전주 미식 투어",
                korean: `<span class="korean-word" data-translation="едва прибыл на станцию Чонджу" data-pronunciation="전주역에 도착하자마자 [Jeonju-yeoge dochakhajamaja]">전주역에 도착하자마자</span> <span class="korean-word" data-translation="с гастрономическим гидом" data-pronunciation="미식 가이드와 [misik gaideuwa]">미식 가이드와</span> <span class="korean-word" data-translation="встретился" data-pronunciation="합류해 [hamryuhae]">합류해</span> <span class="korean-word" data-translation="о переулках и ингредиентах" data-pronunciation="골목길 역사와 식재료 이야기를 [golmokgil yeoksa wa sikjaeryo iyagireul]">골목길 역사와 식재료 이야기를</span> <span class="korean-word" data-translation="услышал" data-pronunciation="들었어요 [deureosseoyo]">들었어요</span>.

<span class="korean-word" data-translation="в обед" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="мастер пибимпапа" data-pronunciation="전주비빔밥 장인에게서 [Jeonju bibimbap janginegeseo]">전주비빔밥 장인에게서</span> <span class="korean-word" data-translation="как чистить овощи" data-pronunciation="나물 손질법을 [namul sonjilbeobeul]">나물 손질법을</span> <span class="korean-word" data-translation="учился" data-pronunciation="배우고 [baeugo]">배우고</span>, <span class="korean-word" data-translation="днём" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="в винокурне макколли" data-pronunciation="막걸리 양조장에서 [makgeolli yangjojange seo]">막걸리 양조장에서</span> <span class="korean-word" data-translation="брожение нурука" data-pronunciation="누룩 발효 과정을 [nuruk balhyo gwajeongeul]">누룩 발효 과정을</span> <span class="korean-word" data-translation="пережил" data-pronunciation="체험했어요 [cheheomhaesseoyo]">체험했어요</span>.

<span class="korean-word" data-translation="вечером" data-pronunciation="저녁에는 [jeonyeogeneun]">저녁에는</span> <span class="korean-word" data-translation="на ночной рынок Наму" data-pronunciation="남부시장 야시장으로 [Nambu sijang yasiya ng-euro]">남부시장 야시장으로</span> <span class="korean-word" data-translation="переместились" data-pronunciation="이동해 [idonghae]">이동해</span> <span class="korean-word" data-translation="молодые шефы" data-pronunciation="청년 셰프들이 [cheongnyeon shyepeudeuri]">청년 셰프들이</span> <span class="korean-word" data-translation="созданный фьюжн" data-pronunciation="만든 퓨전 전주 떡갈비와 [mandeun pyujeon Jeonju tteokgalbiwa]">만든 퓨전 전주 떡갈비와</span> <span class="korean-word" data-translation="десерт якква" data-pronunciation="약과 디저트를 [yakkwa dijeoteureul]">약과 디저트를</span> <span class="korean-word" data-translation="пробовал" data-pronunciation="맛봤어요 [matbwasseoyo]">맛봤어요</span>.

<span class="korean-word" data-translation="завершая день" data-pronunciation="일정을 마무리하며 [iljeongeul mamurihamyeo]">일정을 마무리하며</span> <span class="korean-word" data-translation="с местными шефами" data-pronunciation="지역 셰프들과 [jiyeok shyepeudeulgwa]">지역 셰프들과</span> <span class="korean-word" data-translation="справедливое распределение ингредиентов" data-pronunciation="공정한 식재료 유통에 대한 [gongjeonghan sikjaeryo yutonge dae han]">공정한 식재료 유통에 대한</span> <span class="korean-word" data-translation="круглый стол" data-pronunciation="좌담에도 [jwadam-edo]">좌담에도</span> <span class="korean-word" data-translation="участвовал" data-pronunciation="참여했어요 [chamyeohaesseoyo]">참여했어요</span>.`,
                translation: "Сразу после прибытия в Чонджу я встретился с гидом, который рассказал о переулках и местных продуктах. Днём учился у мастера пибимпапа и наблюдал брожение в винокурне макколли. Вечером пробовал фьюжн блюда на ночном рынке и обсуждал с шефами честные цепочки поставок.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "전주에서 누구와 투어를 시작했어요? (С кем начался тур в Чонджу?)",
                        options: ["친구와", "미식 가이드와", "가족과", "혼자"],
                        correct: 1
                    },
                    {
                        question: "점심에는 무엇을 배웠어요? (Чему научился в обед?)",
                        options: ["막걸리 담그기", "나물 손질법", "김치 담그기", "과일 고르는 법"],
                        correct: 1
                    },
                    {
                        question: "저녁에는 어디를 방문했어요? (Куда отправились вечером?)",
                        options: ["한옥마을", "남부시장 야시장", "박물관", "대학"],
                        correct: 1
                    },
                    {
                        question: "마지막 활동은 무엇이었어요? (Какое было заключительное занятие?)",
                        options: ["요리 대회", "좌담 참여", "공연 관람", "자전거 타기"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'food-2',
                title: "Вегетарианский ханчжонщик",
                subtitle: "사찰식 한정식 체험",
                korean: `<span class="korean-word" data-translation="в пригородном храме" data-pronunciation="서울 근교 사찰에서 [Seoul geungyo sachareseo]">서울 근교 사찰에서</span> <span class="korean-word" data-translation="прошедшая" data-pronunciation="진행된 [jinhaengdoen]">진행된</span> <span class="korean-word" data-translation="программа храмовой трапезы" data-pronunciation="사찰식 한정식 프로그램에 [sachalsik hanjeongsik peurogeurame]">사찰식 한정식 프로그램에</span> <span class="korean-word" data-translation="участвовал" data-pronunciation="참가해 [chamga hae]">참가해</span> <span class="korean-word" data-translation="утреннюю медитацию" data-pronunciation="새벽 참선을 [saebyeok chamseoneul]">새벽 참선을</span> <span class="korean-word" data-translation="завершив" data-pronunciation="마친 뒤 [machin dwi]">마친 뒤</span> <span class="korean-word" data-translation="на кухню" data-pronunciation="주방으로 [jubang-euro]">주방으로</span> <span class="korean-word" data-translation="направился" data-pronunciation="향했어요 [hyanghaesseoyo]">향했어요</span>.

<span class="korean-word" data-translation="монах-наставник" data-pronunciation="수행 스님은 [suhaeng seunimeun]">수행 스님은</span> <span class="korean-word" data-translation="горные травы и ферментированные соусы" data-pronunciation="산나물과 발효 장을 [sannamul gwa balhyo jang-eul]">산나물과 발효 장을</span> <span class="korean-word" data-translation="центром" data-pronunciation="중심으로 [jungsimeuro]">중심으로</span> <span class="korean-word" data-translation="сезонный стол" data-pronunciation="한 계절 밥상을 [han gyejeol bapsangeul]">한 계절 밥상을</span> <span class="korean-word" data-translation="представил" data-pronunciation="소개하며 [sogaehamyeo]">소개하며</span> <span class="korean-word" data-translation="связь еды и практики" data-pronunciation="음식과 수행의 연결 [eumsikgwa suhaeng-ui yeongyeol]">음식과 수행의 연결</span> <span class="korean-word" data-translation="философию" data-pronunciation="철학을 [cheolhageul]">철학을</span> <span class="korean-word" data-translation="объяснил" data-pronunciation="설명했어요 [seolmyeonghaesseoyo]">설명했어요</span>.

<span class="korean-word" data-translation="мы сами" data-pronunciation="우리는 직접 [urineun jikjeop]">우리는 직접</span> <span class="korean-word" data-translation="тофу прессовали" data-pronunciation="두부를 눌러 만들고 [dubu-reul nulleo mandeulgo]">두부를 눌러 만들고</span>, <span class="korean-word" data-translation="в масле периллы тушёную редьку" data-pronunciation="들기름으로 조린 무청과 [deulgireumeuro jorin mucheonggwa]">들기름으로 조린 무청과</span> <span class="korean-word" data-translation="жареные пецнии" data-pronunciation="쑥갓전을 [ssukgajjeoneul]">쑥갓전을</span> <span class="korean-word" data-translation="приготовили" data-pronunciation="차렸어요 [charyeosseoyo]">차렸어요</span>.

<span class="korean-word" data-translation="после трапезы" data-pronunciation="식사 후에는 [siksa hueneun]">식사 후에는</span> <span class="korean-word" data-translation="минимизацию пищевых отходов" data-pronunciation="음식물 쓰레기 최소화를 [eumsikmul sseuregi choesohwareul]">음식물 쓰레기 최소화를</span> <span class="korean-word" data-translation="для" data-pronunciation="위한 [wihan]">위한</span> <span class="korean-word" data-translation="раздельный сбор" data-pronunciation="분리배출법을 [bunribaechulbeobeul]">분리배출법을</span> <span class="korean-word" data-translation="практиковали" data-pronunciation="실습하며 [silsseubhamyeo]">실습하며</span> <span class="korean-word" data-translation="устойчивую культуру питания" data-pronunciation="지속 가능한 식문화를 [jisok ganeunghan sikmunhwareul]">지속 가능한 식문화를</span> <span class="korean-word" data-translation="вновь осмыслили" data-pronunciation="되새겼어요 [doeswigyeosseoyo]">되새겼어요</span>.`,
                translation: "Я посетил программу храмовой трапезы под Сеулом: после утренней медитации мы отправились на кухню. Наставник рассказал о сезонных травах и ферментированных соусах, связывая еду с практикой. Мы сами прессовали тофу, готовили блюда из зелени и учились сортировать отходы, чтобы поддерживать устойчивую культуру питания.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "프로그램은 어디에서 진행됐어요? (Где проходила программа?)",
                        options: ["도심 카페", "서울 근교 사찰", "해변 리조트", "백화점"],
                        correct: 1
                    },
                    {
                        question: "수행 스님은 무엇을 설명했어요? (Что объяснил монах-наставник?)",
                        options: ["사찰 예절", "음식과 수행의 연결 철학", "불교 미술", "차 만들기"],
                        correct: 1
                    },
                    {
                        question: "참가자들이 직접 만든 음식은 무엇이에요? (Какое блюдо готовили сами участники?)",
                        options: ["불고기", "두부와 쑥갓전", "해물파전", "김밥"],
                        correct: 1
                    },
                    {
                        question: "식사 후에는 어떤 실습을 했어요? (Какую практику выполняли после трапезы?)",
                        options: ["꽃꽂이", "분리배출법", "서예", "명상"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'food-3',
                title: "Фудтех в сеульском стартапе",
                subtitle: "서울 푸드테크 연구소",
                korean: `<span class="korean-word" data-translation="в первый день" data-pronunciation="첫날 [cheonnal]">첫날</span> <span class="korean-word" data-translation="как интерн в исследовательской лаборатории фудтеха в Сонсудоне" data-pronunciation="성수동 푸드테크 연구소 인턴으로 [Seongsudong pudeute ke yeonguso inteoneuro]">성수동 푸드테크 연구소 인턴으로</span> <span class="korean-word" data-translation="присоединившись" data-pronunciation="합류한 [hamryuhan]">합류한</span> <span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="инструктаж по безопасности" data-pronunciation="실험실 안전 교육과 [siheomsil anjeon gyoyukwa]">실험실 안전 교육과</span> <span class="korean-word" data-translation="тур по стерильным процессам" data-pronunciation="무균 공정 투어를 [mugyun gongjeong tueoreul]">무균 공정 투어를</span> <span class="korean-word" data-translation="получил" data-pronunciation="받았어요 [badasseoyo]">받았어요</span>.

<span class="korean-word" data-translation="исследователи" data-pronunciation="연구원들은 [yeonguwondeureun]">연구원들은</span> <span class="korean-word" data-translation="баланс питательных веществ" data-pronunciation="영양 균형을 [yeongyang gyunhyeongeul]">영양 균형을</span> <span class="korean-word" data-translation="регулирующий" data-pronunciation="조정하는 [jojeonghaneun]">조정하는</span> <span class="korean-word" data-translation="алгоритм" data-pronunciation="알고리즘을 [algojimeul]">알고리즘을</span> <span class="korean-word" data-translation="показали" data-pronunciation="시연해 주었고 [siyeon hae ju-eotgo]">시연해 주었고</span>, <span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="сенсорами собранные" data-pronunciation="센서가 수집한 [senseeoga sujiphan]">센서가 수집한</span> <span class="korean-word" data-translation="данные о вкусе" data-pronunciation="맛 데이터를 [mat deiteoreul]">맛 데이터를</span> <span class="korean-word" data-translation="визуализировал" data-pronunciation="시각화 작업을 [sigakhwa jageobeul]">시각화 작업을</span> <span class="korean-word" data-translation="ответственность взял" data-pronunciation="담당했어요 [damdanghaesseoyo]">담당했어요</span>.

<span class="korean-word" data-translation="за обедом" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="растительные белки" data-pronunciation="식물성 단백질 [singmulseong danbaekjil]">식물성 단백질</span> <span class="korean-word" data-translation="стартер продукт" data-pronunciation="스타터 제품을 [seutateo jae pumeul]">스타터 제품을</span> <span class="korean-word" data-translation="дегустируя" data-pronunciation="시식하며 [sisikhamyeo]">시식하며</span> <span class="korean-word" data-translation="обсуждение" data-pronunciation="피드백을 [pideubaegeul]">피드백을</span> <span class="korean-word" data-translation="провели" data-pronunciation="토론했고 [toronhaetgo]">토론했고</span>, <span class="korean-word" data-translation="днём" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="партнёр стартапа" data-pronunciation="스타트업 파트너와 [seutateueop pateuneowa]">스타트업 파트너와</span> <span class="korean-word" data-translation="сотрудничавший" data-pronunciation="협업하는 [hyeobeobhaneun]">협업하는</span> <span class="korean-word" data-translation="робот-шеф" data-pronunciation="로봇 조리 테스트를 [robot jori teseuteureul]">로봇 조리 테스트를</span> <span class="korean-word" data-translation="наблюдал" data-pronunciation="관찰했어요 [gwanchalhaesseoyo]">관찰했어요</span>.

<span class="korean-word" data-translation="к концу дня" data-pronunciation="하루가 끝날 무렵 [haruga kkeutnal muryeop]">하루가 끝날 무렵</span> <span class="korean-word" data-translation="прототип продукта" data-pronunciation="프로토타입 시제품을 [peurototap sise-pumeul]">프로토타입 시제품을</span> <span class="korean-word" data-translation="оценивающая" data-pronunciation="평가하는 [pyeonggahaneun]">평가하는</span> <span class="korean-word" data-translation="панель" data-pronunciation="패널 미팅에 [paeneol miting-e]">패널 미팅에</span> <span class="korean-word" data-translation="участвовал" data-pronunciation="참여해 [chamyeohae]">참여해</span> <span class="korean-word" data-translation="будущую стратегию запуска" data-pronunciation="향후 출시 전략을 [hyanghu chulsi jeonlyageul]">향후 출시 전략을</span> <span class="korean-word" data-translation="записал" data-pronunciation="메모했어요 [memohaesseoyo]">메모했어요</span>.`,
                translation: "В первый день стажировки в сеульской фудтех-лаборатории я прошёл инструктаж по безопасности и познакомился со стерильными линиями. Исследователи показали алгоритм балансировки питательных веществ для культивируемого мяса, а я визуализировал данные вкусовых датчиков. За обедом дегустировали растительные прототипы, после чего наблюдали тесты с роботом-шефом и обсуждали стратегию запуска на панельной встрече.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "첫날 어떤 교육을 받았어요? (Какой инструктаж прошёл в первый день?)",
                        options: ["마케팅 교육", "실험실 안전 교육", "회계 교육", "서비스 교육"],
                        correct: 1
                    },
                    {
                        question: "연구원들이 시연한 것은 무엇이에요? (Что продемонстрировали исследователи?)",
                        options: ["커피 추출", "영양 균형 조정 알고리즘", "3D 프린팅", "포장 디자인"],
                        correct: 1
                    },
                    {
                        question: "오후에는 어떤 테스트를 관찰했어요? (Какой тест наблюдали днём?)",
                        options: ["로봇 조리 테스트", "드론 배송", "VR 체험", "재무 분석"],
                        correct: 0
                    },
                    {
                        question: "하루가 끝날 무렵 무엇을 했어요? (Что делали в конце дня?)",
                        options: ["프로토타입 패널 미팅에 참여했어요", "주방 청소를 했어요", "영화 촬영을 했어요", "휴식을 취했어요"],
                        correct: 0
                    }
                ]
            }
        ]
    }
};

// Merge з основним storyDatabase
if (typeof storyDatabase !== 'undefined') {
    Object.assign(storyDatabase, level4Texts);
}

// Експорт для використання
if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4Texts;
}