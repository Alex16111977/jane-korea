// ============================================
// LEVEL 4 - UPPER-INTERMEDIATE (B2)
// ============================================

const level4Texts = {
    4: {
        personal: [
            {
                id: 'personal-1',
                title: "My Work and Career",
                subtitle: "나의 일과 커리어",
                korean: `<span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="at an IT company" data-pronunciation="IT 회사에서 [IT hoesaeseo]">IT 회사에서</span> <span class="korean-word" data-translation="as a programmer" data-pronunciation="프로그래머로 [peurogeuraemeoro]">프로그래머로</span> <span class="korean-word" data-translation="work" data-pronunciation="일하고 있어요 [ilhago isseoyo]">일하고 있어요</span>. <span class="korean-word" data-translation="work" data-pronunciation="직장 [jikjang]">직장</span> <span class="korean-word" data-translation="life" data-pronunciation="생활은 [saenghwareun]">생활은</span> <span class="korean-word" data-translation="interesting" data-pronunciation="흥미로워요 [heungmirowoyo]">흥미로워요</span>.

<span class="korean-word" data-translation="the best thing" data-pronunciation="가장 [gajang]">가장</span> <span class="korean-word" data-translation="good" data-pronunciation="좋은 [joeun]">좋은</span> <span class="korean-word" data-translation="thing" data-pronunciation="것은 [geoseun]">것은</span> <span class="korean-word" data-translation="flexible" data-pronunciation="유연한 [yuyeonhan]">유연한</span> <span class="korean-word" data-translation="working hours" data-pronunciation="근무 시간 [geunmu sigan]">근무 시간</span><span class="korean-word" data-translation="is" data-pronunciation="입니다 [imnida]">입니다</span>. <span class="korean-word" data-translation="remotely" data-pronunciation="재택근무를 [jaetaekgeunmureul]">재택근무를</span> <span class="korean-word" data-translation="can" data-pronunciation="할 수 [hal su]">할 수</span> <span class="korean-word" data-translation="do" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="team members" data-pronunciation="팀원들과 [timwondeulgwa]">팀원들과</span> <span class="korean-word" data-translation="relationships" data-pronunciation="관계가 [gwangyega]">관계가</span> <span class="korean-word" data-translation="good" data-pronunciation="좋습니다 [josseumnida]">좋습니다</span>. <span class="korean-word" data-translation="everyone" data-pronunciation="모두 [modu]">모두</span> <span class="korean-word" data-translation="professionals" data-pronunciation="전문가들이에요 [jeonmungadeuri-eyo]">전문가들이에요</span>. <span class="korean-word" data-translation="from them" data-pronunciation="그들에게서 [geudeuregeseo]">그들에게서</span> <span class="korean-word" data-translation="a lot" data-pronunciation="많은 것을 [maneun geoseul]">많은 것을</span> <span class="korean-word" data-translation="learn" data-pronunciation="배워요 [baewoyo]">배워요</span>.

<span class="korean-word" data-translation="in the future" data-pronunciation="앞으로 [apeuro]">앞으로</span> <span class="korean-word" data-translation="senior" data-pronunciation="선임 [seonim]">선임</span> <span class="korean-word" data-translation="developer" data-pronunciation="개발자가 [gaebalchaga]">개발자가</span> <span class="korean-word" data-translation="become" data-pronunciation="되고 [doego]">되고</span> <span class="korean-word" data-translation="want" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>. <span class="korean-word" data-translation="skills" data-pronunciation="기술을 [gisureul]">기술을</span> <span class="korean-word" data-translation="develop" data-pronunciation="발전시키고 [baljeonshikigo]">발전시키고</span> <span class="korean-word" data-translation="experience" data-pronunciation="경험을 [gyeongheomeul]">경험을</span> <span class="korean-word" data-translation="accumulate" data-pronunciation="쌓고 [ssatgo]">쌓고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>.`,
                translation: "I work as a programmer at an IT company. Work life is interesting. The best thing is the flexible working hours. I can work remotely. Relationships with team members are good. Everyone is a professional. I learn a lot from them. In the future, I want to become a senior developer. I'm developing my skills and gaining experience.",
                image: "images/office-work.jpg",
                quiz: [
                    {
                        question: "어디에서 일하고 있어요? (Where does he work?)",
                        options: ["은행", "학교", "IT 회사", "병원"],
                        correct: 2
                    },
                    {
                        question: "직장 생활의 가장 좋은 점은 무엇이에요? (What's the best thing about work?)",
                        options: ["높은 급여", "유연한 근무 시간", "회사 위치", "무료 식사"],
                        correct: 1
                    },
                    {
                        question: "팀원들과의 관계는 어때요? (How are the relationships with colleagues?)",
                        options: ["나빠요", "좋아요", "보통이에요", "모르겠어요"],
                        correct: 1
                    },
                    {
                        question: "앞으로 무엇이 되고 싶어요? (What does he want to become?)",
                        options: ["선생님", "의사", "선임 개발자", "요리사"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'personal-2',
                title: "Work-Life Balance",
                subtitle: "일과 삶의 균형",
                korean: `<span class="korean-word" data-translation="modern" data-pronunciation="현대 [hyeondae]">현대</span> <span class="korean-word" data-translation="society" data-pronunciation="사회에서 [sahoeseo]">사회에서</span> <span class="korean-word" data-translation="work" data-pronunciation="일 [il]">일</span><span class="korean-word" data-translation="and" data-pronunciation="과 [gwa]">과</span> <span class="korean-word" data-translation="life" data-pronunciation="삶 [sam]">삶</span><span class="korean-word" data-translation="'s" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="balance" data-pronunciation="균형 [gyunhyeong]">균형</span><span class="korean-word" data-translation="(topic)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="very" data-pronunciation="매우 [maeu]">매우</span> <span class="korean-word" data-translation="important" data-pronunciation="중요한 [jungyohan]">중요한</span> <span class="korean-word" data-translation="topic" data-pronunciation="주제 [juje]">주제</span><span class="korean-word" data-translation="is" data-pronunciation="입니다 [imnida]">입니다</span>.

<span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="on weekdays" data-pronunciation="평일에는 [pyeongireneun]">평일에는</span> <span class="korean-word" data-translation="on work" data-pronunciation="일에 [ire]">일에</span> <span class="korean-word" data-translation="focus" data-pronunciation="집중하고 [jipjunghago]">집중하고</span>, <span class="korean-word" data-translation="on weekends" data-pronunciation="주말에는 [jumareneun]">주말에는</span> <span class="korean-word" data-translation="myself" data-pronunciation="자신을 [jasineul]">자신을</span> <span class="korean-word" data-translation="for" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="time" data-pronunciation="시간을 [siganeul]">시간을</span> <span class="korean-word" data-translation="spend" data-pronunciation="보내요 [bonaeyo]">보내요</span>.

<span class="korean-word" data-translation="hobby" data-pronunciation="취미 [chwimi]">취미</span><span class="korean-word" data-translation="life" data-pronunciation="생활 [saenghwal]">생활</span><span class="korean-word" data-translation="also" data-pronunciation="도 [do]">도</span> <span class="korean-word" data-translation="important" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>. <span class="korean-word" data-translation="books" data-pronunciation="책을 [chaegeul]">책을</span> <span class="korean-word" data-translation="read" data-pronunciation="읽거나 [ilkkeona]">읽거나</span> <span class="korean-word" data-translation="yoga" data-pronunciation="요가를 [yogareul]">요가를</span> <span class="korean-word" data-translation="do" data-pronunciation="해요 [haeyo]">해요</span>. <span class="korean-word" data-translation="friends" data-pronunciation="친구들과 [chingudeulgwa]">친구들과</span> <span class="korean-word" data-translation="meetups" data-pronunciation="만남도 [mannamdo]">만남도</span> <span class="korean-word" data-translation="regularly" data-pronunciation="정기적으로 [jeonggijeogeuro]">정기적으로</span> <span class="korean-word" data-translation="have" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="self-improvement" data-pronunciation="자기 개발 [jagi gaebal]">자기 개발</span><span class="korean-word" data-translation="(object)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="for" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="online" data-pronunciation="온라인 [onrain]">온라인</span> <span class="korean-word" data-translation="courses" data-pronunciation="강좌를 [gangjwareul]">강좌를</span> <span class="korean-word" data-translation="listen to" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="balance" data-pronunciation="균형 [gyunhyeong]">균형</span> <span class="korean-word" data-translation="balanced" data-pronunciation="잡힌 [japhin]">잡힌</span> <span class="korean-word" data-translation="life" data-pronunciation="삶이 [sami]">삶이</span> <span class="korean-word" data-translation="most" data-pronunciation="가장 [gajang]">가장</span> <span class="korean-word" data-translation="important" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>.`,
                translation: "In modern society, work-life balance is a very important topic. On weekdays I focus on work, and on weekends I spend time for myself. Hobbies are also important. I read books or do yoga. I also meet friends regularly. For self-improvement, I take online courses. A balanced life is the most important thing.",
                image: "images/work-life-balance.jpg",
                quiz: [
                    {
                        question: "현대 사회에서 무엇이 중요한 주제예요? (What is an important topic in modern society?)",
                        options: ["돈", "명예", "일과 삶의 균형", "성공"],
                        correct: 2
                    },
                    {
                        question: "평일에는 무엇을 해요? (What does he do on weekdays?)",
                        options: ["일에 집중해요", "쉬어요", "여행해요", "잠을 자요"],
                        correct: 0
                    },
                    {
                        question: "취미 생활로 무엇을 해요? (What hobbies does he have?)",
                        options: ["게임", "책 읽기와 요가", "등산", "요리"],
                        correct: 1
                    },
                    {
                        question: "자기 개발을 위해 무엇을 해요? (What does he do for self-improvement?)",
                        options: ["온라인 강좌를 들어요", "텔레비전을 봐요", "잠을 자요", "음악을 들어요"],
                        correct: 0
                    }
                ]
            },
            {
                id: 'personal-3',
                title: "My Plans for the Future",
                subtitle: "나의 미래 계획",
                korean: `<span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="in the future" data-pronunciation="미래에 [miraee]">미래에</span> <span class="korean-word" data-translation="to Korea" data-pronunciation="한국으로 [hangugeuro]">한국으로</span> <span class="korean-word" data-translation="move" data-pronunciation="이주하고 [ijuhago]">이주하고</span> <span class="korean-word" data-translation="want" data-pronunciation="싶어요 [sipeoyo]">싶어요</span>. <span class="korean-word" data-translation="two years" data-pronunciation="이 년 [i nyeon]">이 년</span> <span class="korean-word" data-translation="later" data-pronunciation="후에 [hue]">후에</span> <span class="korean-word" data-translation="(object)" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="goal" data-pronunciation="목표로 [mokpyoro]">목표로</span> <span class="korean-word" data-translation="doing" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="for this" data-pronunciation="이를 [ireul]">이를</span> <span class="korean-word" data-translation="for" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="now" data-pronunciation="지금 [jigeum]">지금</span> <span class="korean-word" data-translation="diligently" data-pronunciation="열심히 [yeolsimhi]">열심히</span> <span class="korean-word" data-translation="Korean language" data-pronunciation="한국어를 [hangugeoreul]">한국어를</span> <span class="korean-word" data-translation="studying" data-pronunciation="공부하고 [gongbuhago]">공부하고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="TOPIK" data-pronunciation="TOPIK [TOPIK]">TOPIK</span> <span class="korean-word" data-translation="level 5" data-pronunciation="5급 [ogeup]">5급</span> <span class="korean-word" data-translation="passing" data-pronunciation="합격이 [hapgyeogi]">합격이</span> <span class="korean-word" data-translation="goal" data-pronunciation="목표예요 [mokpyoyeyo]">목표예요</span>.

<span class="korean-word" data-translation="a job too" data-pronunciation="일자리도 [iljaridO]">일자리도</span> <span class="korean-word" data-translation="looking for" data-pronunciation="찾고 [chajgo]">찾고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="resume" data-pronunciation="이력서를 [iryeokseoreul]">이력서를</span> <span class="korean-word" data-translation="preparing" data-pronunciation="준비하고 [junbihago]">준비하고</span> <span class="korean-word" data-translation="Korean" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="companies" data-pronunciation="회사들에 [hoesadeure]">회사들에</span> <span class="korean-word" data-translation="apply" data-pronunciation="지원할 [jiwonhal]">지원할</span> <span class="korean-word" data-translation="plan" data-pronunciation="계획이에요 [gyehoegiеyo]">계획이에요</span>.

<span class="korean-word" data-translation="cultural" data-pronunciation="문화 [munhwa]">문화</span> <span class="korean-word" data-translation="adaptation" data-pronunciation="적응도 [jeogeungdo]">적응도</span> <span class="korean-word" data-translation="important" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>. <span class="korean-word" data-translation="Korean" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="dramas" data-pronunciation="드라마를 [deuram areul]">드라마를</span> <span class="korean-word" data-translation="watching" data-pronunciation="보고 [bogo]">보고</span>, <span class="korean-word" data-translation="music" data-pronunciation="음악을 [eumageul]">음악을</span> <span class="korean-word" data-translation="listening to" data-pronunciation="들으면서 [deureumyeonseo]">들으면서</span> <span class="korean-word" data-translation="culture" data-pronunciation="문화를 [munhwareul]">문화를</span> <span class="korean-word" data-translation="learn" data-pronunciation="배워요 [baewoyo]">배워요</span>.

<span class="korean-word" data-translation="dream" data-pronunciation="꿈을 [kkumeul]">꿈을</span> <span class="korean-word" data-translation="realize" data-pronunciation="실현하기 [silhyeonhagi]">실현하기</span> <span class="korean-word" data-translation="for" data-pronunciation="위해 [wihae]">위해</span> <span class="korean-word" data-translation="one" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="step at a time" data-pronunciation="걸음씩 [georeumssik]">걸음씩</span> <span class="korean-word" data-translation="moving forward" data-pronunciation="나아가고 [naagago]">나아가고</span> <span class="korean-word" data-translation="am" data-pronunciation="있어요 [isseoyo]">있어요</span>!`,
                translation: "In the future, I want to move to Korea. My goal is in two years. For this, I'm diligently studying Korean now. My goal is to pass TOPIK level 5. I'm also looking for a job. I'm preparing my resume and plan to apply to Korean companies. Cultural adaptation is also important. I watch Korean dramas and listen to music to learn the culture. To realize my dream, I'm moving forward one step at a time!",
                image: "images/korea-dream.jpg",
                quiz: [
                    {
                        question: "언제 한국으로 이주하고 싶어요? (When does he want to move to Korea?)",
                        options: ["내년", "이 년 후", "다섯 년 후", "십 년 후"],
                        correct: 1
                    },
                    {
                        question: "TOPIK 몇 급 합격이 목표예요? (What TOPIK level is the goal?)",
                        options: ["3급", "4급", "5급", "6급"],
                        correct: 2
                    },
                    {
                        question: "한국 회사들에 무엇을 할 계획이에요? (What does he plan to do at Korean companies?)",
                        options: ["방문하기", "지원하기", "구경하기", "공부하기"],
                        correct: 1
                    },
                    {
                        question: "문화를 배우기 위해 무엇을 해요? (What does he do to learn culture?)",
                        options: ["책만 읽어요", "드라마를 보고 음악을 들어요", "잠을 자요", "운동해요"],
                        correct: 1
                    }
                ]
            }
        ],

        stories: [
            {
                id: 'stories-1',
                title: "An Unexpected Meeting on the Subway",
                subtitle: "지하철에서의 뜻밖의 만남",
                korean: `<span class="korean-word" data-translation="last week" data-pronunciation="지난주에 [jinanjue]">지난주에</span> <span class="korean-word" data-translation="as usual" data-pronunciation="평소처럼 [pyeongso cheoreom]">평소처럼</span> <span class="korean-word" data-translation="on the way to work" data-pronunciation="출근길에 [chulgeun gire]">출근길에</span> <span class="korean-word" data-translation="subway" data-pronunciation="지하철을 [jihacheoreul]">지하철을</span> <span class="korean-word" data-translation="riding" data-pronunciation="타고 [tago]">타고</span> <span class="korean-word" data-translation="was" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="as always" data-pronunciation="늘 [neul]">늘</span> <span class="korean-word" data-translation="like" data-pronunciation="그렇듯 [geureoetteut]">그렇듯</span> <span class="korean-word" data-translation="earphones" data-pronunciation="이어폰을 [ieoponeul]">이어폰을</span> <span class="korean-word" data-translation="wearing" data-pronunciation="끼고 [kkigo]">끼고</span> <span class="korean-word" data-translation="music" data-pronunciation="음악을 [eumageul]">음악을</span> <span class="korean-word" data-translation="listening to" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="was" data-pronunciation="있었죠 [isseotjyo]">있었죠</span>.

<span class="korean-word" data-translation="suddenly" data-pronunciation="갑자기 [gapjagi]">갑자기</span> <span class="korean-word" data-translation="someone" data-pronunciation="누군가가 [nugungaga]">누군가가</span> <span class="korean-word" data-translation="shoulder" data-pronunciation="어깨를 [eokkaereul]">어깨를</span> <span class="korean-word" data-translation="tap" data-pronunciation="톡 [tok]">톡</span> <span class="korean-word" data-translation="tapped" data-pronunciation="쳤어요 [chyeosseoyo]">쳤어요</span>. <span class="korean-word" data-translation="turned around" data-pronunciation="돌아보니 [doraboni]">돌아보니</span> <span class="korean-word" data-translation="high school" data-pronunciation="고등학교 [godeunghakgyo]">고등학교</span> <span class="korean-word" data-translation="days" data-pronunciation="때 [ttae]">때</span> <span class="korean-word" data-translation="teacher" data-pronunciation="은사님 [eunsanim]">은사님</span><span class="korean-word" data-translation="it was" data-pronunciation="이셨어요 [isyeosseoyo]">이셨어요</span>!

<span class="korean-word" data-translation="ten years" data-pronunciation="십 년 [sip nyeon]">십 년</span> <span class="korean-word" data-translation="after" data-pronunciation="만에 [mane]">만에</span> <span class="korean-word" data-translation="met" data-pronunciation="만난 [mannan]">만난</span> <span class="korean-word" data-translation="teacher" data-pronunciation="선생님은 [seonsaengnimeun]">선생님은</span> <span class="korean-word" data-translation="at all" data-pronunciation="전혀 [jeonhyeo]">전혀</span> <span class="korean-word" data-translation="changed" data-pronunciation="변하지 [byeonhaji]">변하지</span> <span class="korean-word" data-translation="hadn't" data-pronunciation="않으셨어요 [anheusyeosseoyo]">않으셨어요</span>. <span class="korean-word" data-translation="short" data-pronunciation="짧은 [jjalbeun]">짧은</span> <span class="korean-word" data-translation="time" data-pronunciation="시간이었지만 [siganieotjiman]">시간이었지만</span> <span class="korean-word" data-translation="updates" data-pronunciation="근황을 [geunhwangeul]">근황을</span> <span class="korean-word" data-translation="shared" data-pronunciation="나눴어요 [nanwosseoyo]">나눴어요</span>.

<span class="korean-word" data-translation="the teacher" data-pronunciation="선생님께서는 [seonsaengnimkkeseo-neun]">선생님께서는</span> <span class="korean-word" data-translation="still" data-pronunciation="지금도 [jigeumdo]">지금도</span> <span class="korean-word" data-translation="teaching" data-pronunciation="가르치고 [gareuchigo]">가르치고</span> <span class="korean-word" data-translation="is" data-pronunciation="계신다고 [gyeshindago]">계신다고</span> <span class="korean-word" data-translation="said" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="as before" data-pronunciation="예전처럼 [yejeon cheoreom]">예전처럼</span> <span class="korean-word" data-translation="passionately" data-pronunciation="열정적으로 [yeoljeong jeogeuro]">열정적으로</span> <span class="korean-word" data-translation="students" data-pronunciation="학생들을 [haksaengdeureul]">학생들을</span> <span class="korean-word" data-translation="teaching" data-pronunciation="지도하신다는 [jidohasindaneun]">지도하신다는</span> <span class="korean-word" data-translation="words" data-pronunciation="말씀이 [malsseum-i]">말씀이</span> <span class="korean-word" data-translation="touching" data-pronunciation="감동적이었어요 [gamdongjeogieosseoyo]">감동적이었어요</span>.

<span class="korean-word" data-translation="before parting" data-pronunciation="헤어지기 [heeojigi]">헤어지기</span> <span class="korean-word" data-translation="before" data-pronunciation="전에 [jeone]">전에</span> <span class="korean-word" data-translation="contact info" data-pronunciation="연락처를 [yeollakcheoreul]">연락처를</span> <span class="korean-word" data-translation="exchanged" data-pronunciation="교환했어요 [gyohwanhaesseoyo]">교환했어요</span>. <span class="korean-word" data-translation="this" data-pronunciation="이번 [ibeon]">이번</span> <span class="korean-word" data-translation="weekend" data-pronunciation="주말에 [jumare]">주말에</span> <span class="korean-word" data-translation="tea" data-pronunciation="차를 [chareul]">차를</span> <span class="korean-word" data-translation="to drink" data-pronunciation="마시러 [masireo]">마시러</span> <span class="korean-word" data-translation="to go" data-pronunciation="가기로 [gagiro]">가기로</span> <span class="korean-word" data-translation="promised" data-pronunciation="약속했답니다 [yaksokhaetdamnida]">약속했답니다</span>!`,
                translation: "Last week, I was riding the subway to work as usual. As always, I had my earphones in and was listening to music. Suddenly someone tapped me on the shoulder. I turned around and it was my high school teacher! The teacher, whom I met after ten years, hadn't changed at all. Though it was a short time, we caught up on each other's lives. The teacher said they were still teaching. It was touching to hear they were guiding students with the same passion as before. Before parting, we exchanged contact information. We promised to meet for tea this weekend!",
                image: "images/subway-meeting.jpg",
                quiz: [
                    {
                        question: "어디에서 선생님을 만났어요? (Where did he meet the teacher?)",
                        options: ["버스에서", "지하철에서", "카페에서", "학교에서"],
                        correct: 1
                    },
                    {
                        question: "몇 년 만에 만났어요? (After how many years did they meet?)",
                        options: ["오 년", "십 년", "십오 년", "이십 년"],
                        correct: 1
                    },
                    {
                        question: "선생님은 지금 무엇을 하고 계세요? (What is the teacher doing now?)",
                        options: ["은퇴하셨어요", "여행 중이에요", "가르치고 계세요", "사업하세요"],
                        correct: 2
                    },
                    {
                        question: "언제 다시 만나기로 약속했어요? (When did they promise to meet again?)",
                        options: ["내일", "다음 주", "이번 주말", "다음 달"],
                        correct: 2
                    }
                ]
            },

            {
                id: 'stories-2',
                title: "First Day at a New Job",
                subtitle: "새 직장에서의 첫날",
                korean: `<span class="korean-word" data-translation="today" data-pronunciation="오늘 [oneul]">오늘</span><span class="korean-word" data-translation="(topic)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="new" data-pronunciation="새 [sae]">새</span> <span class="korean-word" data-translation="workplace" data-pronunciation="직장 [jikjang]">직장</span><span class="korean-word" data-translation="at" data-pronunciation="에서의 [eseoeui]">에서의</span> <span class="korean-word" data-translation="first day" data-pronunciation="첫날 [chotnal]">첫날</span><span class="korean-word" data-translation="was" data-pronunciation="이었어요 [ieosseoyo]">이었어요</span>. <span class="korean-word" data-translation="from the morning" data-pronunciation="아침부터 [achim buteo]">아침부터</span> <span class="korean-word" data-translation="nervous" data-pronunciation="긴장 [ginjang]">긴장</span><span class="korean-word" data-translation="because" data-pronunciation="돼서 [dwaeseo]">돼서</span> <span class="korean-word" data-translation="sleep" data-pronunciation="잠도 [jamdo]">잠도</span> <span class="korean-word" data-translation="properly" data-pronunciation="제대로 [jedaero]">제대로</span> <span class="korean-word" data-translation="couldn't" data-pronunciation="못 [mot]">못</span> <span class="korean-word" data-translation="sleep" data-pronunciation="잤어요 [jasseoyo]">잤어요</span>.

<span class="korean-word" data-translation="at the company" data-pronunciation="회사에 [hoesae]">회사에</span> <span class="korean-word" data-translation="as soon as arrived" data-pronunciation="도착하자마자 [dochakajamaja]">도착하자마자</span> <span class="korean-word" data-translation="the team leader" data-pronunciation="팀장님께서 [timjang nimkkeseo]">팀장님께서</span> <span class="korean-word" data-translation="warmly" data-pronunciation="따뜻하게 [ttatteuthage]">따뜻하게</span> <span class="korean-word" data-translation="greeted" data-pronunciation="맞아 [maja]">맞아</span> <span class="korean-word" data-translation="(gave)" data-pronunciation="주셨어요 [jusyeosseoyo]">주셨어요</span>. <span class="korean-word" data-translation="the office" data-pronunciation="사무실을 [samusireul]">사무실을</span> <span class="korean-word" data-translation="looking around" data-pronunciation="둘러보며 [dulleobomyeo]">둘러보며</span> <span class="korean-word" data-translation="team members" data-pronunciation="팀원들을 [timwondeureul]">팀원들을</span> <span class="korean-word" data-translation="introduction" data-pronunciation="소개 [sogae]">소개</span><span class="korean-word" data-translation="received" data-pronunciation="받았어요 [badasseoyo]">받았어요</span>.

<span class="korean-word" data-translation="at lunchtime" data-pronunciation="점심시간에는 [jeomshimsiganeneun]">점심시간에는</span> <span class="korean-word" data-translation="with team members" data-pronunciation="팀원들과 [timwondeulgwa]">팀원들과</span> <span class="korean-word" data-translation="together" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="meal" data-pronunciation="식사를 [siksareul]">식사를</span> <span class="korean-word" data-translation="had" data-pronunciation="했어요 [haesseoyo]">했어요</span>. <span class="korean-word" data-translation="everyone" data-pronunciation="모두 [modu]">모두</span> <span class="korean-word" data-translation="kindly" data-pronunciation="친절하게 [chinjolhage]">친절하게</span> <span class="korean-word" data-translation="company" data-pronunciation="회사 [hoesa]">회사</span> <span class="korean-word" data-translation="culture and" data-pronunciation="문화와 [munhwawa]">문화와</span> <span class="korean-word" data-translation="work" data-pronunciation="업무에 [eobmue]">업무에</span> <span class="korean-word" data-translation="about" data-pronunciation="대해 [daehae]">대해</span> <span class="korean-word" data-translation="explained" data-pronunciation="설명해 [seolmyeonghae]">설명해</span> <span class="korean-word" data-translation="(gave)" data-pronunciation="주셨어요 [jusyeosseoyo]">주셨어요</span>.

<span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="new employee" data-pronunciation="신입사원 [sinipsawon]">신입사원</span> <span class="korean-word" data-translation="orientation" data-pronunciation="오리엔테이션이 [orienteishon-i]">오리엔테이션이</span> <span class="korean-word" data-translation="there was" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="company's" data-pronunciation="회사의 [hoesaui]">회사의</span> <span class="korean-word" data-translation="vision and" data-pronunciation="비전과 [bijeongwa]">비전과</span> <span class="korean-word" data-translation="goals" data-pronunciation="목표 [mokpyo]">목표</span><span class="korean-word" data-translation="(object)" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="learn" data-pronunciation="배울 [baeul]">배울</span> <span class="korean-word" data-translation="could" data-pronunciation="수 [su]">수</span> <span class="korean-word" data-translation="was" data-pronunciation="있었죠 [isseotjyo]">있었죠</span>.

<span class="korean-word" data-translation="on the way home" data-pronunciation="퇴근길에 [toegeun gire]">퇴근길에</span> <span class="korean-word" data-translation="today's" data-pronunciation="오늘 [oneul]">오늘</span> <span class="korean-word" data-translation="day" data-pronunciation="하루를 [harureul]">하루를</span> <span class="korean-word" data-translation="reflected on" data-pronunciation="되돌아봤어요 [dwidorabwasseoyo]">되돌아봤어요</span>. <span class="korean-word" data-translation="worried" data-pronunciation="걱정했던 [geokjeonghaetdeon]">걱정했던</span> <span class="korean-word" data-translation="than" data-pronunciation="것보다 [geot boda]">것보다</span> <span class="korean-word" data-translation="much" data-pronunciation="훨씬 [hwolssin]">훨씬</span> <span class="korean-word" data-translation="was good" data-pronunciation="좋았어요 [joasseoyo]">좋았어요</span>. <span class="korean-word" data-translation="new" data-pronunciation="새로운 [saeroun]">새로운</span> <span class="korean-word" data-translation="beginning" data-pronunciation="시작이 [sijagi]">시작이</span> <span class="korean-word" data-translation="exciting" data-pronunciation="기대돼요 [gidaedwaeyo]">기대돼요</span>!`,
                translation: "Today was the first day at my new job. I was nervous since morning and couldn't sleep properly. As soon as I arrived at the company, the team leader warmly greeted me. While touring the office, I was introduced to the team members. At lunchtime, I had a meal with my colleagues. Everyone kindly explained about the company culture and work. In the afternoon, there was a new employee orientation. I could learn about the company's vision and goals. On the way home, I reflected on the day. It was much better than I had worried. I'm excited for this new beginning!",
                image: "images/first-day-work.jpg",
                quiz: [
                    {
                        question: "오늘은 무슨 날이었어요? (What day was today?)",
                        options: ["휴가 첫날", "새 직장 첫날", "학교 첫날", "출장 첫날"],
                        correct: 1
                    },
                    {
                        question: "아침에 왜 잠을 못 잤어요? (Why couldn't he sleep in the morning?)",
                        options: ["아팠어서", "긴장돼서", "신나서", "바빠서"],
                        correct: 1
                    },
                    {
                        question: "점심시간에 무엇을 했어요? (What did he do at lunchtime?)",
                        options: ["혼자 식사했어요", "팀원들과 식사했어요", "일했어요", "잠을 잤어요"],
                        correct: 1
                    },
                    {
                        question: "첫날은 어땠어요? (How was the first day?)",
                        options: ["걱정보다 좋았어요", "최악이었어요", "힘들었어요", "지루했어요"],
                        correct: 0
                    }
                ]
            },

            {
                id: 'stories-3',
                title: "Helping a Stranger",
                subtitle: "낯선 사람을 도와준 이야기",
                korean: `<span class="korean-word" data-translation="last" data-pronunciation="지난 [jinan]">지난</span> <span class="korean-word" data-translation="Saturday" data-pronunciation="토요일 [toyoil]">토요일</span><span class="korean-word" data-translation="on" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="Myeongdong" data-pronunciation="명동 [myeongdong]">명동</span><span class="korean-word" data-translation="in" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="interesting" data-pronunciation="흥미로운 [heungmiroun]">흥미로운</span> <span class="korean-word" data-translation="thing" data-pronunciation="일이 [iri]">일이</span> <span class="korean-word" data-translation="happened" data-pronunciation="있었어요 [isseosseoyo]">있었어요</span>. <span class="korean-word" data-translation="shopping" data-pronunciation="쇼핑을 [syopingeul]">쇼핑을</span> <span class="korean-word" data-translation="doing" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="was" data-pronunciation="있는데 [inneunde]">있는데</span>, <span class="korean-word" data-translation="foreigner" data-pronunciation="외국인 [oegugin]">외국인</span> <span class="korean-word" data-translation="tourist" data-pronunciation="관광객이 [gwangwang gaegi]">관광객이</span> <span class="korean-word" data-translation="way" data-pronunciation="길을 [gireul]">길을</span> <span class="korean-word" data-translation="asked" data-pronunciation="물어보셨어요 [mureobosyeosseoyo]">물어보셨어요</span>.

<span class="korean-word" data-translation="at first" data-pronunciation="처음에는 [cheoeumeneun]">처음에는</span> <span class="korean-word" data-translation="in English" data-pronunciation="영어로 [yeongeoro]">영어로</span> <span class="korean-word" data-translation="conversation" data-pronunciation="대화를 [daehwareul]">대화를</span> <span class="korean-word" data-translation="started" data-pronunciation="시작했는데 [sijakaenneunde]">시작했는데</span>, <span class="korean-word" data-translation="that" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="person" data-pronunciation="분이 [buni]">분이</span> <span class="korean-word" data-translation="Korean" data-pronunciation="한국어를 [hangugeoreul]">한국어를</span> <span class="korean-word" data-translation="studying" data-pronunciation="공부하고 [gongbuhago]">공부하고</span> <span class="korean-word" data-translation="is" data-pronunciation="계시다고 [gyeshindago]">계시다고</span> <span class="korean-word" data-translation="said" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="so" data-pronunciation="그래서 [geuraeseo]">그래서</span> <span class="korean-word" data-translation="slowly" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="in Korean" data-pronunciation="한국어로 [hangugeoro]">한국어로</span> <span class="korean-word" data-translation="explained" data-pronunciation="설명해 [seolmyeonghae]">설명해</span> <span class="korean-word" data-translation="gave" data-pronunciation="드렸어요 [deuryeosseoyo]">드렸어요</span>.

<span class="korean-word" data-translation="on the way" data-pronunciation="가는 [ganeun]">가는</span> <span class="korean-word" data-translation="way" data-pronunciation="길에 [gire]">길에</span> <span class="korean-word" data-translation="various" data-pronunciation="여러 [yeoreo]">여러</span> <span class="korean-word" data-translation="stories" data-pronunciation="이야기를 [iyagireul]">이야기를</span> <span class="korean-word" data-translation="shared" data-pronunciation="나눴어요 [nanwosseoyo]">나눴어요</span>. <span class="korean-word" data-translation="that" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="person" data-pronunciation="분은 [buneun]">분은</span> <span class="korean-word" data-translation="France" data-pronunciation="프랑스 [peurangseu]">프랑스</span><span class="korean-word" data-translation="from" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="came" data-pronunciation="오신 [osin]">오신</span> <span class="korean-word" data-translation="teacher" data-pronunciation="교사셨고 [gyosasyeotgo]">교사셨고</span>, <span class="korean-word" data-translation="Korean" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="culture" data-pronunciation="문화에 [munhwae]">문화에</span> <span class="korean-word" data-translation="great" data-pronunciation="큰 [keun]">큰</span> <span class="korean-word" data-translation="interest" data-pronunciation="관심이 [gwansimi]">관심이</span> <span class="korean-word" data-translation="had" data-pronunciation="있으셨어요 [isseusyeosseoyo]">있으셨어요</span>.

<span class="korean-word" data-translation="at the destination" data-pronunciation="목적지에 [mokjeokjie]">목적지에</span> <span class="korean-word" data-translation="arrived" data-pronunciation="도착한 [dochakan]">도착한</span> <span class="korean-word" data-translation="after" data-pronunciation="후 [hu]">후</span>, <span class="korean-word" data-translation="that" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="person" data-pronunciation="분께서 [bunkkeseo]">분께서</span> <span class="korean-word" data-translation="saying thank you" data-pronunciation="감사하다며 [gamsahadamyeo]">감사하다며</span> <span class="korean-word" data-translation="email" data-pronunciation="이메일 [imeil]">이메일</span> <span class="korean-word" data-translation="address" data-pronunciation="주소를 [jusoreul]">주소를</span> <span class="korean-word" data-translation="exchange" data-pronunciation="교환하자고 [gyohwanjago]">교환하자고</span> <span class="korean-word" data-translation="said" data-pronunciation="하셨어요 [hasyeosseoyo]">하셨어요</span>. <span class="korean-word" data-translation="still" data-pronunciation="지금도 [jigeumdo]">지금도</span> <span class="korean-word" data-translation="sometimes" data-pronunciation="가끔 [gakkeum]">가끔</span> <span class="korean-word" data-translation="keeping in touch" data-pronunciation="연락하며 [yeollakamyeo]">연락하며</span> <span class="korean-word" data-translation="language" data-pronunciation="언어 [eoneo]">언어</span> <span class="korean-word" data-translation="exchange" data-pronunciation="교환을 [gyohwaneul]">교환을</span> <span class="korean-word" data-translation="doing" data-pronunciation="하고 [hago]">하고</span> <span class="korean-word" data-translation="are" data-pronunciation="있답니다 [itdamnida]">있답니다</span>!

<span class="korean-word" data-translation="small" data-pronunciation="작은 [jageun]">작은</span> <span class="korean-word" data-translation="kindness" data-pronunciation="친절이 [chinjori]">친절이</span> <span class="korean-word" data-translation="good" data-pronunciation="좋은 [joeun]">좋은</span> <span class="korean-word" data-translation="connection" data-pronunciation="인연으로 [inyeoneuro]">인연으로</span> <span class="korean-word" data-translation="led to" data-pronunciation="이어졌네요 [ieojyeot-neyo]">이어졌네요</span>!`,
                translation: "Last Saturday, something interesting happened in Myeongdong. I was shopping when a foreign tourist asked for directions. At first, we started talking in English, but the person said they were studying Korean. So I slowly explained in Korean. On the way, we shared many stories. That person was a teacher from France and was very interested in Korean culture. After arriving at the destination, they gratefully suggested exchanging email addresses. We still keep in touch occasionally and do language exchanges! A small act of kindness turned into a wonderful connection!",
                image: "images/helping-tourist.jpg",
                quiz: [
                    {
                        question: "어디에서 외국인을 만났어요? (Where did he meet the foreigner?)",
                        options: ["인사동", "명동", "강남", "홍대"],
                        correct: 1
                    },
                    {
                        question: "외국인은 어느 나라에서 왔어요? (What country was the foreigner from?)",
                        options: ["일본", "중국", "프랑스", "미국"],
                        correct: 2
                    },
                    {
                        question: "외국인의 직업은 무엇이에요? (What is the foreigner's profession?)",
                        options: ["의사", "교사", "요리사", "변호사"],
                        correct: 1
                    },
                    {
                        question: "지금도 외국인과 무엇을 하고 있어요? (What do they still do with the foreigner?)",
                        options: ["여행해요", "언어 교환을 해요", "일해요", "공부해요"],
                        correct: 1
                    }
                ]
            }
        ],

        culture: [
            {
                id: 'culture-1',
                title: "Korean Office Etiquette",
                subtitle: "한국의 사무실 예절",
                korean: `<span class="korean-word" data-translation="Korean" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="company" data-pronunciation="회사 [hoesa]">회사</span><span class="korean-word" data-translation="in" data-pronunciation="에서는 [eseoneun]">에서는</span> <span class="korean-word" data-translation="unique" data-pronunciation="독특한 [deukthan]">독특한</span> <span class="korean-word" data-translation="workplace" data-pronunciation="직장 [jikjang]">직장</span> <span class="korean-word" data-translation="culture" data-pronunciation="문화가 [munhwaga]">문화가</span> <span class="korean-word" data-translation="exists" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="above all" data-pronunciation="무엇보다 [mueotboda]">무엇보다</span> <span class="korean-word" data-translation="hierarchy" data-pronunciation="위계질서가 [wigyejilseoga]">위계질서가</span> <span class="korean-word" data-translation="important" data-pronunciation="중요해요 [jungyohaeyo]">중요해요</span>.

<span class="korean-word" data-translation="to superiors" data-pronunciation="상사에게는 [sangsaegeneun]">상사에게는</span> <span class="korean-word" data-translation="formal speech" data-pronunciation="존댓말을 [jondaenmareul]">존댓말을</span> <span class="korean-word" data-translation="must" data-pronunciation="꼭 [kkok]">꼭</span> <span class="korean-word" data-translation="use" data-pronunciation="사용해야 [sayonghaeya]">사용해야</span> <span class="korean-word" data-translation="and" data-pronunciation="하며 [hamyeo]">하며</span>, <span class="korean-word" data-translation="titles" data-pronunciation="호칭도 [hochingdo]">호칭도</span> <span class="korean-word" data-translation="carefully" data-pronunciation="조심스럽게 [josimseureopge]">조심스럽게</span> <span class="korean-word" data-translation="use" data-pronunciation="사용해야 [sayonghaeya]">사용해야</span> <span class="korean-word" data-translation="should" data-pronunciation="해요 [haeyo]">해요</span>. <span class="korean-word" data-translation="for example" data-pronunciation="예를 [yereul]">예를</span> <span class="korean-word" data-translation="for" data-pronunciation="들어 [deureo]">들어</span> <span class="korean-word" data-translation="Kim" data-pronunciation="김 [kim]">김</span> <span class="korean-word" data-translation="department head" data-pronunciation="부장님 [bujangnim]">부장님</span>, <span class="korean-word" data-translation="Lee" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="assistant manager" data-pronunciation="대리님 [daerinim]">대리님</span> <span class="korean-word" data-translation="like" data-pronunciation="같이 [gachi]">같이</span> <span class="korean-word" data-translation="with the title" data-pronunciation="직급과 [jikgeupgwa]">직급과</span> <span class="korean-word" data-translation="together" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="calling" data-pronunciation="부르는 [bureuneun]">부르는</span> <span class="korean-word" data-translation="thing" data-pronunciation="것이 [geosi]">것이</span> <span class="korean-word" data-translation="common" data-pronunciation="일반적이에요 [ilbanjeogiеyo]">일반적이에요</span>.

<span class="korean-word" data-translation="meeting" data-pronunciation="회의 [hoeui]">회의</span> <span class="korean-word" data-translation="during" data-pronunciation="시간에는 [siganeneun]">시간에는</span> <span class="korean-word" data-translation="superior's" data-pronunciation="상사의 [sangsaui]">상사의</span> <span class="korean-word" data-translation="words" data-pronunciation="말을 [mareul]">말을</span> <span class="korean-word" data-translation="until the end" data-pronunciation="끝까지 [kkeutkkaji]">끝까지</span> <span class="korean-word" data-translation="listen" data-pronunciation="듣고 [deutgo]">듣고</span> <span class="korean-word" data-translation="opinion" data-pronunciation="의견을 [uigyeoneul]">의견을</span> <span class="korean-word" data-translation="carefully" data-pronunciation="조심스럽게 [josimseureopge]">조심스럽게</span> <span class="korean-word" data-translation="present" data-pronunciation="제시하는 [jesihaneun]">제시하는</span> <span class="korean-word" data-translation="thing" data-pronunciation="것이 [geosi]">것이</span> <span class="korean-word" data-translation="polite" data-pronunciation="예의예요 [yeuiyeyo]">예의예요</span>.

<span class="korean-word" data-translation="company dinner" data-pronunciation="회식 [hoesik]">회식</span> <span class="korean-word" data-translation="culture" data-pronunciation="문화도 [munhwado]">문화도</span> <span class="korean-word" data-translation="special" data-pronunciation="특별해요 [teukbyeolhaeyo]">특별해요</span>. <span class="korean-word" data-translation="teamwork" data-pronunciation="팀워크를 [timwokeureul]">팀워크를</span> <span class="korean-word" data-translation="strengthen" data-pronunciation="다지고 [dajigo]">다지고</span> <span class="korean-word" data-translation="camaraderie" data-pronunciation="친목을 [chinmogeul]">친목을</span> <span class="korean-word" data-translation="promote" data-pronunciation="도모하기 [domohagi]">도모하기</span> <span class="korean-word" data-translation="for" data-pronunciation="위한 [wihan]">위한</span> <span class="korean-word" data-translation="important" data-pronunciation="중요한 [jungyohan]">중요한</span> <span class="korean-word" data-translation="time" data-pronunciation="시간이에요 [siganieyo]">시간이에요</span>.

<span class="korean-word" data-translation="recently" data-pronunciation="최근에는 [choegyeoneneun]">최근에는</span> <span class="korean-word" data-translation="horizontal" data-pronunciation="수평적인 [supyeongjeogin]">수평적인</span> <span class="korean-word" data-translation="organizational" data-pronunciation="조직 [jojik]">조직</span> <span class="korean-word" data-translation="culture" data-pronunciation="문화가 [munhwaga]">문화가</span> <span class="korean-word" data-translation="spreading" data-pronunciation="확산되고 [hwaksandoego]">확산되고</span> <span class="korean-word" data-translation="but" data-pronunciation="있지만 [itjiman]">있지만</span>, <span class="korean-word" data-translation="still" data-pronunciation="여전히 [yeojeonhi]">여전히</span> <span class="korean-word" data-translation="traditional" data-pronunciation="전통적인 [jeontongjeogin]">전통적인</span> <span class="korean-word" data-translation="etiquette" data-pronunciation="예절이 [yejeorii]">예절이</span> <span class="korean-word" data-translation="valued" data-pronunciation="중시되고 [jungshidoego]">중시되고</span> <span class="korean-word" data-translation="is" data-pronunciation="있어요 [isseoyo]">있어요</span>.`,
                translation: "Korean companies have a unique workplace culture. Above all, hierarchy is important. You must use formal speech with superiors, and titles must also be used carefully. For example, it's common to address people with their job title, like Department Head Kim or Assistant Manager Lee. During meetings, it's polite to listen to the superior until the end and then carefully present your opinion. The company dinner culture is also special. It's an important time for strengthening teamwork and building camaraderie. Recently, horizontal organizational culture is spreading, but traditional etiquette is still valued.",
                image: "images/office-etiquette.jpg",
                quiz: [
                    {
                        question: "한국 회사에서 가장 중요한 것은 무엇이에요? (What is the most important thing in Korean companies?)",
                        options: ["자유", "위계질서", "돈", "편안함"],
                        correct: 1
                    },
                    {
                        question: "상사에게 어떻게 말해야 해요? (How should you speak to superiors?)",
                        options: ["반말로", "존댓말로", "영어로", "큰 소리로"],
                        correct: 1
                    },
                    {
                        question: "회식 문화의 목적은 무엇이에요? (What is the purpose of company dinner culture?)",
                        options: ["돈 벌기", "팀워크와 친목 도모", "비즈니스", "교육"],
                        correct: 1
                    },
                    {
                        question: "최근 한국 회사 문화는 어떻게 변하고 있어요? (How is Korean corporate culture changing recently?)",
                        options: ["더 엄격해지고 있어요", "수평적으로 변하고 있어요", "변하지 않아요", "나빠지고 있어요"],
                        correct: 1
                    }
                ]
            },

            {
                id: 'culture-2',
                title: "The K-Drama Phenomenon",
                subtitle: "K-드라마의 인기",
                korean: `<span class="korean-word" data-translation="Korean" data-pronunciation="한국 [hanguk]">한국</span> <span class="korean-word" data-translation="dramas" data-pronunciation="드라마는 [deuramaneun]">드라마는</span> <span class="korean-word" data-translation="whole" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="worldwide" data-pronunciation="세계적으로 [segyejeogeuro]">세계적으로</span> <span class="korean-word" data-translation="enormous" data-pronunciation="엄청난 [eomcheongnan]">엄청난</span> <span class="korean-word" data-translation="popularity" data-pronunciation="인기를 [ingireul]">인기를</span> <span class="korean-word" data-translation="attracting" data-pronunciation="끌고 [kkeulgo]">끌고</span> <span class="korean-word" data-translation="are" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="Netflix" data-pronunciation="Netflix를 [Netflix-reul]">Netflix를</span> <span class="korean-word" data-translation="through" data-pronunciation="통해 [tonghae]">통해</span> <span class="korean-word" data-translation="whole" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="world" data-pronunciation="세계 [segye]">세계</span> <span class="korean-word" data-translation="viewers" data-pronunciation="시청자들이 [sicheongja deuri]">시청자들이</span> <span class="korean-word" data-translation="easily" data-pronunciation="쉽게 [swipge]">쉽게</span> <span class="korean-word" data-translation="access" data-pronunciation="접근할 [jeopgeunhal]">접근할</span> <span class="korean-word" data-translation="can" data-pronunciation="수 [su]">수</span> <span class="korean-word" data-translation="to be able" data-pronunciation="있게 [itge]">있게</span> <span class="korean-word" data-translation="became" data-pronunciation="되었어요 [doeeosseoyo]">되었어요</span>.

<span class="korean-word" data-translation="K-Drama's" data-pronunciation="K-드라마의 [K-deuramaui]">K-드라마의</span> <span class="korean-word" data-translation="popularity" data-pronunciation="인기 [ingi]">인기</span> <span class="korean-word" data-translation="secret" data-pronunciation="비결은 [bigyeoreun]">비결은</span> <span class="korean-word" data-translation="several" data-pronunciation="여러 [yeoreo]">여러</span> <span class="korean-word" data-translation="things" data-pronunciation="가지가 [gajiga]">가지가</span> <span class="korean-word" data-translation="there are" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="first" data-pronunciation="첫째 [cheotjе]">첫째</span>, <span class="korean-word" data-translation="touching" data-pronunciation="감동적인 [gamdong jeogin]">감동적인</span> <span class="korean-word" data-translation="stories and" data-pronunciation="스토리와 [seutoriwa]">스토리와</span> <span class="korean-word" data-translation="well" data-pronunciation="잘 [jal]">잘</span> <span class="korean-word" data-translation="crafted" data-pronunciation="짜여진 [jjayeojin]">짜여진</span> <span class="korean-word" data-translation="scripts" data-pronunciation="시나리오예요 [sinarioyeyo]">시나리오예요</span>. <span class="korean-word" data-translation="from romance" data-pronunciation="로맨스부터 [romaenseubuteo]">로맨스부터</span> <span class="korean-word" data-translation="to thrillers" data-pronunciation="스릴러까지 [seurilleokkaji]">스릴러까지</span> <span class="korean-word" data-translation="various" data-pronunciation="다양한 [dayanghan]">다양한</span> <span class="korean-word" data-translation="genres" data-pronunciation="장르를 [jangreureul]">장르를</span> <span class="korean-word" data-translation="cover" data-pronunciation="다뤄요 [darywoyo]">다뤄요</span>.

<span class="korean-word" data-translation="second" data-pronunciation="둘째 [duljje]">둘째</span>, <span class="korean-word" data-translation="outstanding" data-pronunciation="뛰어난 [ttwieornan]">뛰어난</span> <span class="korean-word" data-translation="actors'" data-pronunciation="배우들의 [baeudeului]">배우들의</span> <span class="korean-word" data-translation="acting skills" data-pronunciation="연기력이에요 [yeongiryeogieyo]">연기력이에요</span>. <span class="korean-word" data-translation="emotion" data-pronunciation="감정 [gamjeong]">감정</span> <span class="korean-word" data-translation="expression" data-pronunciation="표현이 [pyohyeoni]">표현이</span> <span class="korean-word" data-translation="delicate" data-pronunciation="섬세하고 [seomsehago]">섬세하고</span> <span class="korean-word" data-translation="deep" data-pronunciation="깊이 [gipi]">깊이</span> <span class="korean-word" data-translation="has" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="third" data-pronunciation="셋째 [setjje]">셋째</span>, <span class="korean-word" data-translation="beautiful" data-pronunciation="아름다운 [areumdaun]">아름다운</span> <span class="korean-word" data-translation="filming locations and" data-pronunciation="촬영지와 [chwalyeongjiwa]">촬영지와</span> <span class="korean-word" data-translation="OST" data-pronunciation="OST예요 [OST yeyo]">OST예요</span>. <span class="korean-word" data-translation="Korea's" data-pronunciation="한국의 [hangugui]">한국의</span> <span class="korean-word" data-translation="beautiful" data-pronunciation="아름다운 [areumdaun]">아름다운</span> <span class="korean-word" data-translation="scenery and" data-pronunciation="풍경과 [punggyeonggwa]">풍경과</span> <span class="korean-word" data-translation="emotional" data-pronunciation="감성적인 [gamseong jeogin]">감성적인</span> <span class="korean-word" data-translation="music" data-pronunciation="음악이 [eumagi]">음악이</span> <span class="korean-word" data-translation="drama" data-pronunciation="드라마를 [deuramareul]">드라마를</span> <span class="korean-word" data-translation="more" data-pronunciation="더 [deo]">더</span> <span class="korean-word" data-translation="special" data-pronunciation="특별하게 [teukbyeolhage]">특별하게</span> <span class="korean-word" data-translation="make" data-pronunciation="만들어요 [mandeureoyo]">만들어요</span>.

<span class="korean-word" data-translation="these" data-pronunciation="이러한 [ireоhan]">이러한</span> <span class="korean-word" data-translation="elements" data-pronunciation="요소들이 [yosodeuri]">요소들이</span> <span class="korean-word" data-translation="K-Drama" data-pronunciation="K-드라마를 [K-deuramareul]">K-드라마를</span> <span class="korean-word" data-translation="whole" data-pronunciation="전 [jeon]">전</span> <span class="korean-word" data-translation="world" data-pronunciation="세계 [segye]">세계</span> <span class="korean-word" data-translation="people's" data-pronunciation="사람들의 [saramdeului]">사람들의</span> <span class="korean-word" data-translation="love" data-pronunciation="사랑을 [sarangeul]">사랑을</span> <span class="korean-word" data-translation="receive" data-pronunciation="받게 [batge]">받게</span> <span class="korean-word" data-translation="made" data-pronunciation="만들었어요 [mandeureosseoyo]">만들었어요</span>!`,
                translation: "Korean dramas are attracting enormous popularity worldwide. Through Netflix, viewers around the world can now easily access them. There are several secrets to K-Drama's popularity. First, touching stories and well-crafted scripts. They cover various genres from romance to thrillers. Second, the outstanding acting skills of the actors. Their emotional expression is delicate and deep. Third, beautiful filming locations and OSTs. Korea's beautiful scenery and emotional music make dramas even more special. These elements have made K-Drama beloved by people all over the world!",
                image: "images/kdrama-popular.jpg",
                quiz: [
                    {
                        question: "K-드라마는 어떻게 전 세계에 퍼졌어요? (How did K-Drama spread worldwide?)",
                        options: ["텔레비전", "라디오", "Netflix", "신문"],
                        correct: 2
                    },
                    {
                        question: "K-드라마 인기의 첫 번째 비결은 무엇이에요? (What is the first secret of K-Drama's popularity?)",
                        options: ["짧은 시간", "감동적인 스토리", "저렴한 가격", "빠른 속도"],
                        correct: 1
                    },
                    {
                        question: "K-드라마는 어떤 장르를 다뤄요? (What genres does K-Drama cover?)",
                        options: ["로맨스만", "스릴러만", "다양한 장르", "코미디만"],
                        correct: 2
                    },
                    {
                        question: "K-드라마를 특별하게 만드는 세 번째 요소는? (What is the third element that makes K-Drama special?)",
                        options: ["배우들", "아름다운 촬영지와 OST", "감독", "길이"],
                        correct: 1
                    }
                ]
            }
        ],

        science: [
            {
                id: 'science-1',
                title: "Artificial Intelligence in Everyday Life",
                subtitle: "일상생활 속 인공지능",
                korean: `<span class="korean-word" data-translation="artificial intelligence" data-pronunciation="인공지능 [ingong jineung]">인공지능</span><span class="korean-word" data-translation="(topic)" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="now" data-pronunciation="이제 [ije]">이제</span> <span class="korean-word" data-translation="our" data-pronunciation="우리 [uri]">우리</span> <span class="korean-word" data-translation="daily" data-pronunciation="일상 [ilsang]">일상</span><span class="korean-word" data-translation="'s" data-pronunciation="의 [ui]">의</span> <span class="korean-word" data-translation="part" data-pronunciation="일부가 [ilbuga]">일부가</span> <span class="korean-word" data-translation="became" data-pronunciation="되었어요 [doeeosseoyo]">되었어요</span>. <span class="korean-word" data-translation="smartphone's" data-pronunciation="스마트폰의 [seumateup onui]">스마트폰의</span> <span class="korean-word" data-translation="voice" data-pronunciation="음성 [eumseong]">음성</span> <span class="korean-word" data-translation="from assistants" data-pronunciation="비서부터 [biseobuteo]">비서부터</span> <span class="korean-word" data-translation="online" data-pronunciation="온라인 [onrain]">온라인</span> <span class="korean-word" data-translation="shopping" data-pronunciation="쇼핑 [syoping]">쇼핑</span> <span class="korean-word" data-translation="to recommendations" data-pronunciation="추천까지 [chucheonkkaji]">추천까지</span>, <span class="korean-word" data-translation="AI" data-pronunciation="AI는 [AIneun]">AI는</span> <span class="korean-word" data-translation="everywhere" data-pronunciation="어디에나 [eodieina]">어디에나</span> <span class="korean-word" data-translation="exists" data-pronunciation="있어요 [isseoyo]">있어요</span>.

<span class="korean-word" data-translation="machine" data-pronunciation="기계 [gigye]">기계</span> <span class="korean-word" data-translation="learning" data-pronunciation="학습은 [haksseubeun]">학습은</span> <span class="korean-word" data-translation="AI's" data-pronunciation="AI의 [AIui]">AI의</span> <span class="korean-word" data-translation="core" data-pronunciation="핵심 [haeksim]">핵심</span> <span class="korean-word" data-translation="technology" data-pronunciation="기술이에요 [gisurieyo]">기술이에요</span>. <span class="korean-word" data-translation="computer" data-pronunciation="컴퓨터가 [keompyuteoga]">컴퓨터가</span> <span class="korean-word" data-translation="data" data-pronunciation="데이터를 [deitareul]">데이터를</span> <span class="korean-word" data-translation="analyzes" data-pronunciation="분석하고 [bunseokago]">분석하고</span> <span class="korean-word" data-translation="patterns" data-pronunciation="패턴을 [paeteoneul]">패턴을</span> <span class="korean-word" data-translation="finds" data-pronunciation="찾아내요 [chajanaeyo]">찾아내요</span>. <span class="korean-word" data-translation="through this" data-pronunciation="이를 [ireul]">이를</span> <span class="korean-word" data-translation="through" data-pronunciation="통해 [tonghae]">통해</span> <span class="korean-word" data-translation="by itself" data-pronunciation="스스로 [seuseuro]">스스로</span> <span class="korean-word" data-translation="learns" data-pronunciation="학습하고 [haksseupago]">학습하고</span> <span class="korean-word" data-translation="develops" data-pronunciation="발전해요 [baljeonhaeyo]">발전해요</span>.

<span class="korean-word" data-translation="medical" data-pronunciation="의료 [uiryo]">의료</span> <span class="korean-word" data-translation="in the field" data-pronunciation="분야에서는 [bunyaeseoneun]">분야에서는</span> <span class="korean-word" data-translation="AI" data-pronunciation="AI가 [AIga]">AI가</span> <span class="korean-word" data-translation="diseases" data-pronunciation="질병을 [jilbyeongeul]">질병을</span> <span class="korean-word" data-translation="diagnoses" data-pronunciation="진단하고 [jindanhago]">진단하고</span> <span class="korean-word" data-translation="treatments" data-pronunciation="치료법을 [chiryobeobeul]">치료법을</span> <span class="korean-word" data-translation="suggests" data-pronunciation="제안해요 [jеanhaeyo]">제안해요</span>. <span class="korean-word" data-translation="autonomous" data-pronunciation="자율 [jayul]">자율</span> <span class="korean-word" data-translation="driving" data-pronunciation="주행 [juhaeng]">주행</span> <span class="korean-word" data-translation="cars" data-pronunciation="자동차는 [jadongchaneun]">자동차는</span> <span class="korean-word" data-translation="traffic" data-pronunciation="교통 [gyotong]">교통</span> <span class="korean-word" data-translation="safety" data-pronunciation="안전을 [anjeoneul]">안전을</span> <span class="korean-word" data-translation="improve" data-pronunciation="향상시켜요 [hyangsa ngshikyeoyo]">향상시켜요</span>.

<span class="korean-word" data-translation="however" data-pronunciation="하지만 [hajiman]">하지만</span> <span class="korean-word" data-translation="ethical" data-pronunciation="윤리적 [yunrijеok]">윤리적</span> <span class="korean-word" data-translation="problems" data-pronunciation="문제도 [munjedo]">문제도</span> <span class="korean-word" data-translation="exist" data-pronunciation="있어요 [isseoyo]">있어요</span>. <span class="korean-word" data-translation="personal" data-pronunciation="개인 [gaein]">개인</span> <span class="korean-word" data-translation="information" data-pronunciation="정보 [jeongbo]">정보</span> <span class="korean-word" data-translation="protection and" data-pronunciation="보호와 [bohowa]">보호와</span> <span class="korean-word" data-translation="AI's" data-pronunciation="AI의 [AIui]">AI의</span> <span class="korean-word" data-translation="proper" data-pronunciation="올바른 [olbareun]">올바른</span> <span class="korean-word" data-translation="use" data-pronunciation="사용에 [sayonge]">사용에</span> <span class="korean-word" data-translation="about" data-pronunciation="대한 [daehan]">대한</span> <span class="korean-word" data-translation="discussion" data-pronunciation="논의가 [noiniga]">논의가</span> <span class="korean-word" data-translation="needed" data-pronunciation="필요해요 [piryohaeyo]">필요해요</span>.

<span class="korean-word" data-translation="in the future" data-pronunciation="앞으로 [apeuro]">앞으로</span> <span class="korean-word" data-translation="AI" data-pronunciation="AI는 [AIneun]">AI는</span> <span class="korean-word" data-translation="even more" data-pronunciation="더욱 [deoyuk]">더욱</span> <span class="korean-word" data-translation="developing" data-pronunciation="발전하여 [baljeonhayeo]">발전하여</span> <span class="korean-word" data-translation="our" data-pronunciation="우리 [uri]">우리</span> <span class="korean-word" data-translation="life's" data-pronunciation="삶의 [samui]">삶의</span> <span class="korean-word" data-translation="quality" data-pronunciation="질을 [jireul]">질을</span> <span class="korean-word" data-translation="will improve" data-pronunciation="향상시킬 [hyangsangshikil]">향상시킬</span> <span class="korean-word" data-translation="will" data-pronunciation="거예요 [geoyeyo]">거예요</span>!`,
                translation: "Artificial intelligence has now become part of our everyday lives. From voice assistants on smartphones to online shopping recommendations, AI is everywhere. Machine learning is AI's core technology. Computers analyze data and find patterns. Through this, they learn and develop on their own. In the medical field, AI diagnoses diseases and suggests treatments. Autonomous vehicles improve traffic safety. However, there are also ethical issues. Discussions about personal information protection and proper use of AI are needed. In the future, AI will develop even further and improve the quality of our lives!",
                image: "images/ai-daily-life.jpg",
                quiz: [
                    {
                        question: "AI는 우리 생활 어디에 있어요? (Where is AI in our lives?)",
                        options: ["어디에나 있어요", "없어요", "일부만 있어요", "모르겠어요"],
                        correct: 0
                    },
                    {
                        question: "AI의 핵심 기술은 무엇이에요? (What is AI's core technology?)",
                        options: ["게임", "기계 학습", "음악", "그림"],
                        correct: 1
                    },
                    {
                        question: "의료 분야에서 AI는 무엇을 해요? (What does AI do in the medical field?)",
                        options: ["요리", "질병 진단과 치료법 제안", "청소", "교육"],
                        correct: 1
                    },
                    {
                        question: "AI와 관련된 문제는 무엇이에요? (What problem is related to AI?)",
                        options: ["너무 느려요", "윤리적 문제", "너무 비싸요", "없어요"],
                        correct: 1
                    }
                ]
            }
        ],

        travel: [
            {
                id: 'travel-1',
                title: "Expedition Along Hwaseong Fortress",
                subtitle: "수원 화성 성곽 기행",
                korean: `<p><span class="korean-word" data-translation="last" data-pronunciation="지난 [jinan]">지난</span> <span class="korean-word" data-translation="spring" data-pronunciation="봄 [bom]">봄</span> <span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="architecture" data-pronunciation="건축을 [geonchugeul]">건축을</span> <span class="korean-word" data-translation="studying" data-pronunciation="공부하는 [gongbuhaneun]">공부하는</span> <span class="korean-word" data-translation="with a friend" data-pronunciation="친구와 [chingugwa]">친구와</span> <span class="korean-word" data-translation="together" data-pronunciation="함께 [hamkke]">함께</span> <span class="korean-word" data-translation="Suwon" data-pronunciation="수원 [Suwon]">수원</span> <span class="korean-word" data-translation="Hwaseong Fortress" data-pronunciation="화성을 [Hwaseongeul]">화성을</span> <span class="korean-word" data-translation="along" data-pronunciation="따라 [ttara]">따라</span> <span class="korean-word" data-translation="walking" data-pronunciation="걷는 [geodneun]">걷는</span> <span class="korean-word" data-translation="expedition" data-pronunciation="답사를 [dapsareul]">답사를</span> <span class="korean-word" data-translation="set off on" data-pronunciation="떠났어요 [tteonasseoyo]">떠났어요</span>.</p>
<p><span class="korean-word" data-translation="fortress walls" data-pronunciation="성곽 [seonggwak]">성곽</span> <span class="korean-word" data-translation="from above" data-pronunciation="위에서 [wieseo]">위에서</span> <span class="korean-word" data-translation="visible below" data-pronunciation="내려다보이는 [naeryeodaboineun]">내려다보이는</span> <span class="korean-word" data-translation="in every alley" data-pronunciation="골목마다 [golmokmada]">골목마다</span> <span class="korean-word" data-translation="Joseon era" data-pronunciation="조선 시대 [Joseon sidae]">조선 시대</span> <span class="korean-word" data-translation="defensive" data-pronunciation="방어 [bang-eo]">방어</span> <span class="korean-word" data-translation="system" data-pronunciation="시스템이 [siseutemi]">시스템이</span> <span class="korean-word" data-translation="as is" data-pronunciation="그대로 [geudaero]">그대로</span> <span class="korean-word" data-translation="remained" data-pronunciation="남아 있어서 [nama isseoseo]">남아 있어서</span> <span class="korean-word" data-translation="admiration" data-pronunciation="감탄이 [gamtani]">감탄이</span> <span class="korean-word" data-translation="came out" data-pronunciation="나왔어요 [nawasseoyo]">나왔어요</span>.</p>
<p><span class="korean-word" data-translation="in the morning" data-pronunciation="오전에는 [ojeoneneun]">오전에는</span> <span class="korean-word" data-translation="from Janganmun Gate" data-pronunciation="장안문에서 [Janganmun-eseo]">장안문에서</span> <span class="korean-word" data-translation="departing" data-pronunciation="출발해 [chulbalhae]">출발해</span> <span class="korean-word" data-translation="to Seobuk Gongsimdon Tower" data-pronunciation="서북공심돈까지 [seobuk gongsimdonkkaji]">서북공심돈까지</span> <span class="korean-word" data-translation="slowly" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="moving" data-pronunciation="이동하며 [idonghamyeo]">이동하며</span> <span class="korean-word" data-translation="guide's" data-pronunciation="안내사의 [annaesaui]">안내사의</span> <span class="korean-word" data-translation="explanations" data-pronunciation="설명을 [seolmyeongeul]">설명을</span> <span class="korean-word" data-translation="listened to" data-pronunciation="들었고 [deureotgo]">들었고</span>, <span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="to Paldalmun Market" data-pronunciation="팔달문 시장으로 [Paldalmun sijangeuro]">팔달문 시장으로</span> <span class="korean-word" data-translation="going down" data-pronunciation="내려가 [naeryeoga]">내려가</span> <span class="korean-word" data-translation="local residents" data-pronunciation="지역 주민이 [jiyeok jumini]">지역 주민이</span> <span class="korean-word" data-translation="recommended" data-pronunciation="추천한 [chucheonhan]">추천한</span> <span class="korean-word" data-translation="kalguksu and" data-pronunciation="칼국수와 [kalguksuwa]">칼국수와</span> <span class="korean-word" data-translation="fried chicken alley" data-pronunciation="통닭 골목을 [tongdak golmogeul]">통닭 골목을</span> <span class="korean-word" data-translation="experienced" data-pronunciation="체험했어요 [cheheomhaesseoyo]">체험했어요</span>.</p>
<p><span class="korean-word" data-translation="when evening came" data-pronunciation="저녁이 되자 [jeonyeogi doeja]">저녁이 되자</span> <span class="korean-word" data-translation="fortress" data-pronunciation="성곽 [seonggwak]">성곽</span> <span class="korean-word" data-translation="lighting" data-pronunciation="조명이 [jomyeongi]">조명이</span> <span class="korean-word" data-translation="turned on" data-pronunciation="켜지며 [kyeojimyeo]">켜지며</span> <span class="korean-word" data-translation="city" data-pronunciation="도시가 [dosiga]">도시가</span> <span class="korean-word" data-translation="even more" data-pronunciation="한층 [hancheung]">한층</span> <span class="korean-word" data-translation="became quiet" data-pronunciation="고요해졌고 [goyohaejyeotgo]">고요해졌고</span>, <span class="korean-word" data-translation="we" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="at the hanok experience center" data-pronunciation="한옥체험관에서 [hanok cheheomgwaneseo]">한옥체험관에서</span> <span class="korean-word" data-translation="held" data-pronunciation="열린 [yeollin]">열린</span> <span class="korean-word" data-translation="traditional instruments" data-pronunciation="전통 악기 [jeontong akgi]">전통 악기</span> <span class="korean-word" data-translation="workshop" data-pronunciation="워크숍에 [woksyobe]">워크숍에</span> <span class="korean-word" data-translation="participating" data-pronunciation="참여하며 [chamyeohamyeo]">참여하며</span> <span class="korean-word" data-translation="day" data-pronunciation="하루를 [harureul]">하루를</span> <span class="korean-word" data-translation="wrapped up" data-pronunciation="마무리했어요 [mamurihesseoyo]">마무리했어요</span>.</p>`,
                translation: "Last spring, my friend who studies architecture and I went on a walking expedition along Hwaseong Fortress in Suwon, admiring the preserved defensive system. In the morning, we listened to the guide from Janganmun Gate to Seobuk Gongsimdon Tower, and in the afternoon we tasted kalguksu and fried chicken at Paldalmun Market. In the evening, we were impressed by the fortress lighting and a traditional instrument workshop at a hanok center.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "누구와 답사를 떠났어요? (Who did he go on the expedition with?)",
                        options: ["혼자서", "가족과", "건축을 공부하는 친구와", "회사 동료와"],
                        correct: 2
                    },
                    {
                        question: "성곽 위에서 어떤 감정을 느꼈어요? (What feeling did he experience on the fortress?)",
                        options: ["지루함", "감탄", "불안", "피곤함"],
                        correct: 1
                    },
                    {
                        question: "오후에는 어디로 내려갔어요? (Where did they go down in the afternoon?)",
                        options: ["한옥 박물관", "팔달문 시장", "시청", "기차역"],
                        correct: 1
                    },
                    {
                        question: "저녁에는 무엇을 했어요? (What did they do in the evening?)",
                        options: ["불꽃놀이를 봤어요", "전통 악기 워크숍에 참여했어요", "야간 등반을 했어요", "온천에 갔어요"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'travel-2',
                title: "Coffee Festival in Gangneung",
                subtitle: "강릉 커피 축제 여행",
                korean: `<p><span class="korean-word" data-translation="at dawn" data-pronunciation="새벽 [saebyeok]">새벽</span> <span class="korean-word" data-translation="by KTX" data-pronunciation="KTX로 [KTX-ro]">KTX로</span> <span class="korean-word" data-translation="from Seoul" data-pronunciation="서울을 [seoureul]">서울을</span> <span class="korean-word" data-translation="departing" data-pronunciation="출발해 [chulbalhae]">출발해</span> <span class="korean-word" data-translation="at Gangneung Station" data-pronunciation="강릉역에 [Gangneung-yeoge]">강릉역에</span> <span class="korean-word" data-translation="arriving" data-pronunciation="도착하니 [dochakhani]">도착하니</span> <span class="korean-word" data-translation="sea" data-pronunciation="바다 [bada]">바다</span> <span class="korean-word" data-translation="fog" data-pronunciation="안개가 [angaega]">안개가</span> <span class="korean-word" data-translation="still" data-pronunciation="아직 [ajik]">아직</span> <span class="korean-word" data-translation="remained" data-pronunciation="남아 있었어요 [nama isseosseoyo]">남아 있었어요</span>.</p>
<p><span class="korean-word" data-translation="at Gyeongpo Beach" data-pronunciation="경포해변에서 [Gyeongpo haebyeoneseo]">경포해변에서</span> <span class="korean-word" data-translation="sunrise" data-pronunciation="해돋이를 [haedodireul]">해돋이를</span> <span class="korean-word" data-translation="after watching" data-pronunciation="본 뒤 [bon dwi]">본 뒤</span> <span class="korean-word" data-translation="at the coffee museum" data-pronunciation="커피박물관에서 [keopi bangmulgwaneseo]">커피박물관에서</span> <span class="korean-word" data-translation="beans" data-pronunciation="원두를 [wondureul]">원두를</span> <span class="korean-word" data-translation="roasting" data-pronunciation="볶는 [bokneun]">볶는</span> <span class="korean-word" data-translation="demonstration" data-pronunciation="시연을 [siyeoneul]">시연을</span> <span class="korean-word" data-translation="experienced" data-pronunciation="체험하고 [cheheomhago]">체험하고</span>, <span class="korean-word" data-translation="small-scale roastery" data-pronunciation="소규모 로스터리 [sogyumo roseuteori]">소규모 로스터리</span> <span class="korean-word" data-translation="with the owner" data-pronunciation="대표와 [daepyowa]">대표와</span> <span class="korean-word" data-translation="sustainable" data-pronunciation="지속 가능한 [jisok ganeunghan]">지속 가능한</span> <span class="korean-word" data-translation="about trade" data-pronunciation="거래에 대해 [georaee daehae]">거래에 대해</span> <span class="korean-word" data-translation="interviewed" data-pronunciation="인터뷰했어요 [inteobyuhaesseoyo]">인터뷰했어요</span>.</p>
<p><span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="Anmok Beach" data-pronunciation="안목해변 [Anmok haebyeon]">안목해변</span> <span class="korean-word" data-translation="on the coffee street" data-pronunciation="커피거리에서 [keopi georieseo]">커피거리에서</span> <span class="korean-word" data-translation="various" data-pronunciation="각양각색의 [gakyanggaksaegui]">각양각색의</span> <span class="korean-word" data-translation="drip coffees" data-pronunciation="드립을 [deuripeul]">드립을</span> <span class="korean-word" data-translation="comparatively" data-pronunciation="비교 [bigyo]">비교</span> <span class="korean-word" data-translation="tasting" data-pronunciation="시음하며 [sieumhamyeo]">시음하며</span> <span class="korean-word" data-translation="flavor" data-pronunciation="향미 [hyangmi]">향미</span> <span class="korean-word" data-translation="notes" data-pronunciation="노트를 [noteureul]">노트를</span> <span class="korean-word" data-translation="wrote" data-pronunciation="작성했고 [jakseonghaetgo]">작성했고</span>, <span class="korean-word" data-translation="in the evening" data-pronunciation="저녁에는 [jeonyeogeneun]">저녁에는</span> <span class="korean-word" data-translation="pairing class" data-pronunciation="페어링 클래스를 [paeoring keullaeseureul]">페어링 클래스를</span> <span class="korean-word" data-translation="attending" data-pronunciation="들으며 [deureumyeo]">들으며</span> <span class="korean-word" data-translation="Gangneung" data-pronunciation="강릉 [Gangneung]">강릉</span> <span class="korean-word" data-translation="hangwa and" data-pronunciation="한과와 [hangwawa]">한과와</span> <span class="korean-word" data-translation="single origin" data-pronunciation="싱글 오리진을 [single origin-eul]">싱글 오리진을</span> <span class="korean-word" data-translation="tasted together" data-pronunciation="함께 맛봤어요 [hamkke matbwasseoyo]">함께 맛봤어요</span>.</p>`,
                translation: "I arrived in Gangneung on a dawn KTX train, where sea fog still lingered. After watching the sunrise at Gyeongpo Beach, I visited the coffee museum, saw a bean roasting demonstration, and spoke with a roastery owner about sustainable trade. In the afternoon, I tasted various brewing methods on Anmok Beach coffee street, and in the evening tried hangwa with single-origin coffee at a food pairing class.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "어떻게 강릉에 도착했어요? (How did he get to Gangneung?)",
                        options: ["버스로", "비행기로", "KTX로", "자동차로"],
                        correct: 2
                    },
                    {
                        question: "오전에는 어떤 체험을 했어요? (What experience did he have in the morning?)",
                        options: ["한옥 투어", "커피박물관에서 원두 볶는 시연을 봤어요", "스키를 탔어요", "서핑을 했어요"],
                        correct: 1
                    },
                    {
                        question: "안목해변 커피거리에서 무엇을 했어요? (What did he do on Anmok Beach coffee street?)",
                        options: ["사진만 찍었어요", "비교 시음을 하며 향미 노트를 작성했어요", "기념품을 샀어요", "공연을 봤어요"],
                        correct: 1
                    },
                    {
                        question: "저녁 클래스에서 무엇을 함께 맛봤어요? (What did they taste at the evening class?)",
                        options: ["생선구이", "강릉 한과와 싱글 오리진", "초코 케이크", "막국수"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'travel-3',
                title: "Eco Trail Along the Namhangang River",
                subtitle: "남한강 생태 트레일",
                korean: `<p><span class="korean-word" data-translation="every weekend" data-pronunciation="주말마다 [jumalmada]">주말마다</span> <span class="korean-word" data-translation="operated" data-pronunciation="운영되는 [unyeongdoeneun]">운영되는</span> <span class="korean-word" data-translation="Namhangang" data-pronunciation="남한강 [namhangang]">남한강</span> <span class="korean-word" data-translation="ecological" data-pronunciation="생태 [saengtae]">생태</span> <span class="korean-word" data-translation="bicycle" data-pronunciation="자전거 [jajeongeo]">자전거</span> <span class="korean-word" data-translation="on a tour" data-pronunciation="투어에 [tueoe]">투어에</span> <span class="korean-word" data-translation="joining" data-pronunciation="참여해 [chamyeohae]">참여해</span> <span class="korean-word" data-translation="slowly" data-pronunciation="천천히 [cheoncheonhi]">천천히</span> <span class="korean-word" data-translation="riverbank" data-pronunciation="강둑을 [gangdugeul]">강둑을</span> <span class="korean-word" data-translation="along" data-pronunciation="따라 [ttara]">따라</span> <span class="korean-word" data-translation="moved" data-pronunciation="이동했어요 [idonghaesseoyo]">이동했어요</span>.</p>
<p><span class="korean-word" data-translation="the guide" data-pronunciation="해설사는 [haeseolsaneun]">해설사는</span> <span class="korean-word" data-translation="migratory birds" data-pronunciation="철새 [cheolsae]">철새</span> <span class="korean-word" data-translation="protected" data-pronunciation="보호 [boho]">보호</span> <span class="korean-word" data-translation="in each zone" data-pronunciation="구역마다 [guyeokmada]">구역마다</span> <span class="korean-word" data-translation="telescope" data-pronunciation="망원경을 [mangwongyeongeul]">망원경을</span> <span class="korean-word" data-translation="set up" data-pronunciation="설치해 주었고 [seolchihae jueotgo]">설치해 주었고</span>, <span class="korean-word" data-translation="we" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="worksheet" data-pronunciation="기록지를 [girokjireul]">기록지를</span> <span class="korean-word" data-translation="looking at" data-pronunciation="보며 [bomyeo]">보며</span> <span class="korean-word" data-translation="observed" data-pronunciation="관찰한 [gwanchalhan]">관찰한</span> <span class="korean-word" data-translation="birds'" data-pronunciation="새의 [saeui]">새의</span> <span class="korean-word" data-translation="names and" data-pronunciation="이름과 [ireumgwa]">이름과</span> <span class="korean-word" data-translation="migration" data-pronunciation="이동 [idong]">이동</span> <span class="korean-word" data-translation="routes" data-pronunciation="경로를 [gyeongroreul]">경로를</span> <span class="korean-word" data-translation="marked" data-pronunciation="표시했어요 [pyosihesseoyo]">표시했어요</span>.</p>
<p><span class="korean-word" data-translation="for lunch" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="cooperative" data-pronunciation="협동조합이 [hyeopdongjoabi]">협동조합이</span> <span class="korean-word" data-translation="operated" data-pronunciation="운영하는 [unyeonghaneun]">운영하는</span> <span class="korean-word" data-translation="local food" data-pronunciation="로컬 푸드 [lokal pudeu]">로컬 푸드</span> <span class="korean-word" data-translation="at a cafe" data-pronunciation="카페에서 [kapeeseo]">카페에서</span> <span class="korean-word" data-translation="seasonal" data-pronunciation="제철 [jecheol]">제철</span> <span class="korean-word" data-translation="vegetable" data-pronunciation="채소 [chaeso]">채소</span> <span class="korean-word" data-translation="set meal" data-pronunciation="정식을 [jeongsigeul]">정식을</span> <span class="korean-word" data-translation="tasted" data-pronunciation="맛보고 [matbogo]">맛보고</span>, <span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="farm" data-pronunciation="농장 [nongjang]">농장</span> <span class="korean-word" data-translation="experience" data-pronunciation="체험을 [cheheomeul]">체험을</span> <span class="korean-word" data-translation="continuing" data-pronunciation="이어가며 [ieogamyeo]">이어가며</span> <span class="korean-word" data-translation="carbon neutrality" data-pronunciation="탄소중립 [tanso jungnip]">탄소중립</span> <span class="korean-word" data-translation="project" data-pronunciation="프로젝트를 [peurojekteureul]">프로젝트를</span> <span class="korean-word" data-translation="introduced" data-pronunciation="소개했어요 [sogaehaesseoyo]">소개했어요</span>.</p>
<p><span class="korean-word" data-translation="tour" data-pronunciation="투어를 [tueoreul]">투어를</span> <span class="korean-word" data-translation="finishing" data-pronunciation="마치며 [machimyeo]">마치며</span> <span class="korean-word" data-translation="with participants" data-pronunciation="참가자들과 [chamgajadeulgwa]">참가자들과</span> <span class="korean-word" data-translation="feedback" data-pronunciation="피드백을 [pideubaegeul]">피드백을</span> <span class="korean-word" data-translation="shared" data-pronunciation="나누고 [nanugo]">나누고</span> <span class="korean-word" data-translation="next" data-pronunciation="다음 [daeum]">다음</span> <span class="korean-word" data-translation="month's" data-pronunciation="달 [dal]">달</span> <span class="korean-word" data-translation="monitoring" data-pronunciation="모니터링 [moniteoring]">모니터링</span> <span class="korean-word" data-translation="in the schedule too" data-pronunciation="일정에도 [iljeonge-do]">일정에도</span> <span class="korean-word" data-translation="to join together" data-pronunciation="함께하기로 [hamkkehagiro]">함께하기로</span> <span class="korean-word" data-translation="promised" data-pronunciation="약속했어요 [yaksokhaesseoyo]">약속했어요</span>.</p>`,
                translation: "I joined an ecological bike tour along the Namhangang River and leisurely rode along the riverbank. The guide set up telescopes in migratory bird zones, and we recorded bird names and migration routes on worksheets. For lunch, we tried a seasonal vegetable set meal at a cooperative local food cafe, and in the afternoon continued with a farm experience where they introduced a carbon neutrality project. At the end of the tour, we shared feedback and promised to join next month's monitoring session.",
                image: "images/level3-travel.svg",
                quiz: [
                    {
                        question: "어떤 교통수단으로 이동했어요? (What transportation was used during the tour?)",
                        options: ["도보로", "자전거로", "버스로", "배로"],
                        correct: 1
                    },
                    {
                        question: "해설사는 무엇을 설치해 주었어요? (What did the guide set up?)",
                        options: ["텐트", "망원경", "스피커", "조명"],
                        correct: 1
                    },
                    {
                        question: "점심에는 어디에서 식사했어요? (Where did they have lunch?)",
                        options: ["호텔", "협동조합 로컬 푸드 카페", "기차역", "시장"],
                        correct: 1
                    },
                    {
                        question: "투어가 끝날 때 무엇을 약속했어요? (What did they promise at the end of the tour?)",
                        options: ["다음 달 모니터링에 함께하기로 했어요", "다시 여행하지 않기로 했어요", "사진을 공유하지 않기로 했어요", "기념품을 사기로 했어요"],
                        correct: 0
                    }
                ]
            }
        ],
        food: [
            {
                id: 'food-1',
                title: "Gastronomic Tour of Jeonju",
                subtitle: "전주 미식 투어",
                korean: `<p><span class="korean-word" data-translation="at Jeonju Station" data-pronunciation="전주역에 [Jeonju-yeoge]">전주역에</span> <span class="korean-word" data-translation="upon arriving" data-pronunciation="도착하자마자 [dochakhajamaja]">도착하자마자</span> <span class="korean-word" data-translation="gastronomic" data-pronunciation="미식 [misik]">미식</span> <span class="korean-word" data-translation="with a guide" data-pronunciation="가이드와 [gaideuwa]">가이드와</span> <span class="korean-word" data-translation="met up" data-pronunciation="합류해 [hamryuhae]">합류해</span> <span class="korean-word" data-translation="alleyways'" data-pronunciation="골목길 [golmokgil]">골목길</span> <span class="korean-word" data-translation="history and" data-pronunciation="역사와 [yeoksawa]">역사와</span> <span class="korean-word" data-translation="ingredients'" data-pronunciation="식재료 [sikjaeryo]">식재료</span> <span class="korean-word" data-translation="story" data-pronunciation="이야기를 [iyagireul]">이야기를</span> <span class="korean-word" data-translation="heard" data-pronunciation="들었어요 [deureosseoyo]">들었어요</span>.</p>
<p><span class="korean-word" data-translation="at lunch" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="Jeonju bibimbap" data-pronunciation="전주비빔밥 [Jeonju bibimbap]">전주비빔밥</span> <span class="korean-word" data-translation="from a master" data-pronunciation="장인에게서 [janginegeseo]">장인에게서</span> <span class="korean-word" data-translation="vegetable" data-pronunciation="나물 [namul]">나물</span> <span class="korean-word" data-translation="preparation" data-pronunciation="손질법을 [sonjilbeobeul]">손질법을</span> <span class="korean-word" data-translation="learned" data-pronunciation="배우고 [baeugo]">배우고</span>, <span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="makgeolli" data-pronunciation="막걸리 [makgeolli]">막걸리</span> <span class="korean-word" data-translation="at a brewery" data-pronunciation="양조장에서 [yangjojang-eseo]">양조장에서</span> <span class="korean-word" data-translation="nuruk" data-pronunciation="누룩 [nuruk]">누룩</span> <span class="korean-word" data-translation="fermentation" data-pronunciation="발효 [balhyo]">발효</span> <span class="korean-word" data-translation="process" data-pronunciation="과정을 [gwajeong-eul]">과정을</span> <span class="korean-word" data-translation="experienced" data-pronunciation="체험했어요 [cheheomhaesseoyo]">체험했어요</span>.</p>
<p><span class="korean-word" data-translation="in the evening" data-pronunciation="저녁에는 [jeonyeogeneun]">저녁에는</span> <span class="korean-word" data-translation="to Nambu Market" data-pronunciation="남부시장 [Nambu sijang]">남부시장</span> <span class="korean-word" data-translation="night market" data-pronunciation="야시장으로 [yasijang-euro]">야시장으로</span> <span class="korean-word" data-translation="moved to" data-pronunciation="이동해 [idonghae]">이동해</span> <span class="korean-word" data-translation="young" data-pronunciation="청년 [cheongnyeon]">청년</span> <span class="korean-word" data-translation="chefs" data-pronunciation="셰프들이 [syepeudeuri]">셰프들이</span> <span class="korean-word" data-translation="made" data-pronunciation="만든 [mandeun]">만든</span> <span class="korean-word" data-translation="fusion" data-pronunciation="퓨전 [pyujeon]">퓨전</span> <span class="korean-word" data-translation="Jeonju" data-pronunciation="전주 [Jeonju]">전주</span> <span class="korean-word" data-translation="tteokgalbi and" data-pronunciation="떡갈비와 [tteokgalbiwa]">떡갈비와</span> <span class="korean-word" data-translation="yakgwa" data-pronunciation="약과 [yakkwa]">약과</span> <span class="korean-word" data-translation="dessert" data-pronunciation="디저트를 [dijeteureul]">디저트를</span> <span class="korean-word" data-translation="tasted" data-pronunciation="맛봤어요 [matbwasseoyo]">맛봤어요</span>.</p>
<p><span class="korean-word" data-translation="schedule" data-pronunciation="일정을 [iljeong-eul]">일정을</span> <span class="korean-word" data-translation="wrapping up" data-pronunciation="마무리하며 [mamurihamyeo]">마무리하며</span> <span class="korean-word" data-translation="local" data-pronunciation="지역 [jiyeok]">지역</span> <span class="korean-word" data-translation="with chefs" data-pronunciation="셰프들과 [syepeudeulgwa]">셰프들과</span> <span class="korean-word" data-translation="fair" data-pronunciation="공정한 [gongjeonghan]">공정한</span> <span class="korean-word" data-translation="ingredients'" data-pronunciation="식재료 [sikjaeryo]">식재료</span> <span class="korean-word" data-translation="about distribution" data-pronunciation="유통에 대한 [yutong-e daehan]">유통에 대한</span> <span class="korean-word" data-translation="at a roundtable too" data-pronunciation="좌담에도 [jwadam-edo]">좌담에도</span> <span class="korean-word" data-translation="participated" data-pronunciation="참여했어요 [chamyeohaesseoyo]">참여했어요</span>.</p>`,
                translation: "Right after arriving in Jeonju, I met up with a food guide who told me about the alleyways and local ingredients. At lunch, I learned vegetable preparation from a bibimbap master, and in the afternoon observed the fermentation process at a makgeolli brewery. In the evening, I tasted fusion dishes at the night market and discussed fair supply chains with local chefs.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "전주에서 누구와 투어를 시작했어요? (Who did the tour start with in Jeonju?)",
                        options: ["친구와", "미식 가이드와", "가족과", "혼자"],
                        correct: 1
                    },
                    {
                        question: "점심에는 무엇을 배웠어요? (What did he learn at lunch?)",
                        options: ["막걸리 담그기", "나물 손질법", "김치 담그기", "과일 고르는 법"],
                        correct: 1
                    },
                    {
                        question: "저녁에는 어디를 방문했어요? (Where did they go in the evening?)",
                        options: ["한옥마을", "남부시장 야시장", "박물관", "대학"],
                        correct: 1
                    },
                    {
                        question: "마지막 활동은 무엇이었어요? (What was the last activity?)",
                        options: ["요리 대회", "좌담 참여", "공연 관람", "자전거 타기"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'food-2',
                title: "Vegetarian Temple Cuisine",
                subtitle: "사찰식 한정식 체험",
                korean: `<p><span class="korean-word" data-translation="Seoul's" data-pronunciation="서울 [Seoul]">서울</span> <span class="korean-word" data-translation="suburban" data-pronunciation="근교 [geungyo]">근교</span> <span class="korean-word" data-translation="at a temple" data-pronunciation="사찰에서 [sachaleso]">사찰에서</span> <span class="korean-word" data-translation="held" data-pronunciation="진행된 [jinhaengdoen]">진행된</span> <span class="korean-word" data-translation="temple-style" data-pronunciation="사찰식 [sachalsik]">사찰식</span> <span class="korean-word" data-translation="hanjeongsik" data-pronunciation="한정식 [hanjeongsik]">한정식</span> <span class="korean-word" data-translation="in the program" data-pronunciation="프로그램에 [peurogeurame]">프로그램에</span> <span class="korean-word" data-translation="joining" data-pronunciation="참가해 [chamgahae]">참가해</span> <span class="korean-word" data-translation="dawn" data-pronunciation="새벽 [saebyeok]">새벽</span> <span class="korean-word" data-translation="meditation" data-pronunciation="참선을 [chamseoneul]">참선을</span> <span class="korean-word" data-translation="after finishing" data-pronunciation="마친 뒤 [machin dwi]">마친 뒤</span> <span class="korean-word" data-translation="to the kitchen" data-pronunciation="주방으로 [jubang-euro]">주방으로</span> <span class="korean-word" data-translation="headed" data-pronunciation="향했어요 [hyanghaesseoyo]">향했어요</span>.</p>
<p><span class="korean-word" data-translation="practicing" data-pronunciation="수행 [suhaeng]">수행</span> <span class="korean-word" data-translation="monk" data-pronunciation="스님은 [seunimeun]">스님은</span> <span class="korean-word" data-translation="mountain herbs and" data-pronunciation="산나물과 [sannamulgwa]">산나물과</span> <span class="korean-word" data-translation="fermented" data-pronunciation="발효 [balhyo]">발효</span> <span class="korean-word" data-translation="paste" data-pronunciation="장을 [jangeul]">장을</span> <span class="korean-word" data-translation="centering on" data-pronunciation="중심으로 [jungsimeuro]">중심으로</span> <span class="korean-word" data-translation="one" data-pronunciation="한 [han]">한</span> <span class="korean-word" data-translation="season's" data-pronunciation="계절 [gyejeol]">계절</span> <span class="korean-word" data-translation="table" data-pronunciation="밥상을 [bapsangeul]">밥상을</span> <span class="korean-word" data-translation="introducing" data-pronunciation="소개하며 [sogaehamyeo]">소개하며</span> <span class="korean-word" data-translation="food and" data-pronunciation="음식과 [eumsikgwa]">음식과</span> <span class="korean-word" data-translation="practice's" data-pronunciation="수행의 [suhaeng-ui]">수행의</span> <span class="korean-word" data-translation="connection" data-pronunciation="연결 [yeongyeol]">연결</span> <span class="korean-word" data-translation="philosophy" data-pronunciation="철학을 [cheolhageul]">철학을</span> <span class="korean-word" data-translation="explained" data-pronunciation="설명했어요 [seolmyeonghaesseoyo]">설명했어요</span>.</p>
<p><span class="korean-word" data-translation="we" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="ourselves" data-pronunciation="직접 [jikjeop]">직접</span> <span class="korean-word" data-translation="tofu" data-pronunciation="두부를 [dubureul]">두부를</span> <span class="korean-word" data-translation="pressing" data-pronunciation="눌러 [nulleo]">눌러</span> <span class="korean-word" data-translation="made" data-pronunciation="만들고 [mandeulgo]">만들고</span>, <span class="korean-word" data-translation="with perilla oil" data-pronunciation="들기름으로 [deulgireumeuro]">들기름으로</span> <span class="korean-word" data-translation="braised" data-pronunciation="조린 [jorin]">조린</span> <span class="korean-word" data-translation="radish greens and" data-pronunciation="무청과 [mucheonggwa]">무청과</span> <span class="korean-word" data-translation="mugwort pancakes" data-pronunciation="쑥갓전을 [ssukgatjeoneul]">쑥갓전을</span> <span class="korean-word" data-translation="prepared" data-pronunciation="차렸어요 [charyeosseoyo]">차렸어요</span>.</p>
<p><span class="korean-word" data-translation="after meal" data-pronunciation="식사 [siksa]">식사</span> <span class="korean-word" data-translation="after" data-pronunciation="후에는 [hueneun]">후에는</span> <span class="korean-word" data-translation="food waste" data-pronunciation="음식물 [eumsikmul]">음식물</span> <span class="korean-word" data-translation="waste" data-pronunciation="쓰레기 [sseuregi]">쓰레기</span> <span class="korean-word" data-translation="minimization" data-pronunciation="최소화를 [choesohwareul]">최소화를</span> <span class="korean-word" data-translation="for" data-pronunciation="위한 [wihan]">위한</span> <span class="korean-word" data-translation="waste sorting" data-pronunciation="분리배출법을 [bunribaechulbeobeul]">분리배출법을</span> <span class="korean-word" data-translation="practicing" data-pronunciation="실습하며 [silseubhamyeo]">실습하며</span> <span class="korean-word" data-translation="sustainable" data-pronunciation="지속 가능한 [jisok ganeunghan]">지속 가능한</span> <span class="korean-word" data-translation="food culture" data-pronunciation="식문화를 [sikmunhwareul]">식문화를</span> <span class="korean-word" data-translation="reflected on" data-pronunciation="되새겼어요 [doesaekyeosseoyo]">되새겼어요</span>.</p>`,
                translation: "I joined a temple cuisine program at a temple outside Seoul: after dawn meditation, we headed to the kitchen. The monk explained the philosophy connecting food and spiritual practice, introducing a seasonal table centered on mountain herbs and fermented pastes. We pressed tofu ourselves, prepared dishes with radish greens and mugwort pancakes, and practiced waste sorting to support sustainable food culture.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "프로그램은 어디에서 진행됐어요? (Where was the program held?)",
                        options: ["도심 카페", "서울 근교 사찰", "해변 리조트", "백화점"],
                        correct: 1
                    },
                    {
                        question: "수행 스님은 무엇을 설명했어요? (What did the monk explain?)",
                        options: ["사찰 예절", "음식과 수행의 연결 철학", "불교 미술", "차 만들기"],
                        correct: 1
                    },
                    {
                        question: "참가자들이 직접 만든 음식은 무엇이에요? (What food did the participants make themselves?)",
                        options: ["불고기", "두부와 쑥갓전", "해물파전", "김밥"],
                        correct: 1
                    },
                    {
                        question: "식사 후에는 어떤 실습을 했어요? (What practice did they do after the meal?)",
                        options: ["꽃꽂이", "분리배출법", "서예", "명상"],
                        correct: 1
                    }
                ]
            },
            {
                id: 'food-3',
                title: "Food Tech at a Seoul Startup",
                subtitle: "서울 푸드테크 연구소",
                korean: `<p><span class="korean-word" data-translation="on the first day" data-pronunciation="첫날 [cheonnal]">첫날</span> <span class="korean-word" data-translation="in Seongsu-dong" data-pronunciation="성수동 [Seongsudong]">성수동</span> <span class="korean-word" data-translation="food tech" data-pronunciation="푸드테크 [pudeute ke]">푸드테크</span> <span class="korean-word" data-translation="laboratory" data-pronunciation="연구소 [yeonguso]">연구소</span> <span class="korean-word" data-translation="as an intern" data-pronunciation="인턴으로 [inteoneuro]">인턴으로</span> <span class="korean-word" data-translation="having joined" data-pronunciation="합류한 [hamryuhan]">합류한</span> <span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="laboratory" data-pronunciation="실험실 [silheomshil]">실험실</span> <span class="korean-word" data-translation="safety" data-pronunciation="안전 [anjeon]">안전</span> <span class="korean-word" data-translation="training and" data-pronunciation="교육과 [gyoyukgwa]">교육과</span> <span class="korean-word" data-translation="sterile" data-pronunciation="무균 [mugyun]">무균</span> <span class="korean-word" data-translation="process" data-pronunciation="공정 [gongjeong]">공정</span> <span class="korean-word" data-translation="tour" data-pronunciation="투어를 [tueoreul]">투어를</span> <span class="korean-word" data-translation="received" data-pronunciation="받았어요 [badasseoyo]">받았어요</span>.</p>
<p><span class="korean-word" data-translation="researchers" data-pronunciation="연구원들은 [yeonguwondeureun]">연구원들은</span> <span class="korean-word" data-translation="nutritional" data-pronunciation="영양 [yeongyang]">영양</span> <span class="korean-word" data-translation="balance" data-pronunciation="균형을 [gyunhyeongeul]">균형을</span> <span class="korean-word" data-translation="adjusting" data-pronunciation="조정하는 [jojeonghaneun]">조정하는</span> <span class="korean-word" data-translation="algorithm" data-pronunciation="알고리즘을 [algojimeul]">알고리즘을</span> <span class="korean-word" data-translation="demonstrated" data-pronunciation="시연해 [siyeonhae]">시연해</span> <span class="korean-word" data-translation="gave and" data-pronunciation="주었고 [jueotgo]">주었고</span>, <span class="korean-word" data-translation="I" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="sensor" data-pronunciation="센서가 [senseoga]">센서가</span> <span class="korean-word" data-translation="collected" data-pronunciation="수집한 [sujiphan]">수집한</span> <span class="korean-word" data-translation="taste" data-pronunciation="맛 [mat]">맛</span> <span class="korean-word" data-translation="data" data-pronunciation="데이터를 [deiteoreul]">데이터를</span> <span class="korean-word" data-translation="visualization" data-pronunciation="시각화 [sigakhwa]">시각화</span> <span class="korean-word" data-translation="work" data-pronunciation="작업을 [jageobeul]">작업을</span> <span class="korean-word" data-translation="was in charge of" data-pronunciation="담당했어요 [damdanghaesseoyo]">담당했어요</span>.</p>
<p><span class="korean-word" data-translation="at lunch" data-pronunciation="점심에는 [jeomshimeneun]">점심에는</span> <span class="korean-word" data-translation="plant-based" data-pronunciation="식물성 [singmulseong]">식물성</span> <span class="korean-word" data-translation="protein" data-pronunciation="단백질 [danbaekjil]">단백질</span> <span class="korean-word" data-translation="starter" data-pronunciation="스타터 [seutateo]">스타터</span> <span class="korean-word" data-translation="product" data-pronunciation="제품을 [jepumeul]">제품을</span> <span class="korean-word" data-translation="tasting" data-pronunciation="시식하며 [sisikhamyeo]">시식하며</span> <span class="korean-word" data-translation="feedback" data-pronunciation="피드백을 [pideubaegeul]">피드백을</span> <span class="korean-word" data-translation="discussed" data-pronunciation="토론했고 [toronhaetgo]">토론했고</span>, <span class="korean-word" data-translation="in the afternoon" data-pronunciation="오후에는 [ohueneun]">오후에는</span> <span class="korean-word" data-translation="startup's" data-pronunciation="스타트업 [seutateueop]">스타트업</span> <span class="korean-word" data-translation="with partner" data-pronunciation="파트너와 [pateuneowa]">파트너와</span> <span class="korean-word" data-translation="collaborating" data-pronunciation="협업하는 [hyeopeobhaneun]">협업하는</span> <span class="korean-word" data-translation="robot" data-pronunciation="로봇 [robot]">로봇</span> <span class="korean-word" data-translation="cooking" data-pronunciation="조리 [jori]">조리</span> <span class="korean-word" data-translation="test" data-pronunciation="테스트를 [teseuteureul]">테스트를</span> <span class="korean-word" data-translation="observed" data-pronunciation="관찰했어요 [gwanchalhaesseoyo]">관찰했어요</span>.</p>
<p><span class="korean-word" data-translation="day" data-pronunciation="하루가 [haruga]">하루가</span> <span class="korean-word" data-translation="ending" data-pronunciation="끝날 [kkeutnal]">끝날</span> <span class="korean-word" data-translation="around" data-pronunciation="무렵 [muryeop]">무렵</span> <span class="korean-word" data-translation="prototype" data-pronunciation="프로토타입 [peurototaip]">프로토타입</span> <span class="korean-word" data-translation="product" data-pronunciation="시제품을 [sijepumeul]">시제품을</span> <span class="korean-word" data-translation="evaluating" data-pronunciation="평가하는 [pyeonggahaneun]">평가하는</span> <span class="korean-word" data-translation="panel" data-pronunciation="패널 [paeneol]">패널</span> <span class="korean-word" data-translation="at the meeting" data-pronunciation="미팅에 [mitinge]">미팅에</span> <span class="korean-word" data-translation="participating" data-pronunciation="참여해 [chamyeohae]">참여해</span> <span class="korean-word" data-translation="future" data-pronunciation="향후 [hyanghu]">향후</span> <span class="korean-word" data-translation="launch" data-pronunciation="출시 [chulsi]">출시</span> <span class="korean-word" data-translation="strategy" data-pronunciation="전략을 [jeonlyageul]">전략을</span> <span class="korean-word" data-translation="took notes on" data-pronunciation="메모했어요 [memohaesseoyo]">메모했어요</span>.</p>`,
                translation: "On my first day as an intern at a food tech lab in Seongsu-dong, Seoul, I completed safety training and toured the sterile production lines. Researchers demonstrated a nutritional balancing algorithm, and I was responsible for visualizing taste sensor data. At lunch, we tasted plant-based protein prototypes, and in the afternoon observed robot cooking tests with a partner startup. At the end of the day, I joined a panel meeting to evaluate prototypes and noted the launch strategy.",
                image: "images/level3-food.svg",
                quiz: [
                    {
                        question: "첫날 어떤 교육을 받았어요? (What training was received on the first day?)",
                        options: ["마케팅 교육", "실험실 안전 교육", "회계 교육", "서비스 교육"],
                        correct: 1
                    },
                    {
                        question: "연구원들이 시연한 것은 무엇이에요? (What did the researchers demonstrate?)",
                        options: ["커피 추출", "영양 균형 조정 알고리즘", "3D 프린팅", "포장 디자인"],
                        correct: 1
                    },
                    {
                        question: "오후에는 어떤 테스트를 관찰했어요? (What test was observed in the afternoon?)",
                        options: ["로봇 조리 테스트", "드론 배송", "VR 체험", "재무 분석"],
                        correct: 0
                    },
                    {
                        question: "하루가 끝날 무렵 무엇을 했어요? (What did they do at the end of the day?)",
                        options: ["프로토타입 패널 미팅에 참여했어요", "주방 청소를 했어요", "영화 촬영을 했어요", "휴식을 취했어요"],
                        correct: 0
                    }
                ]
            }
        ]
    }
};

// Merge with main storyDatabase
if (typeof storyDatabase !== 'undefined') {
    Object.assign(storyDatabase, level4Texts);
}

// Export for usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4Texts;
}