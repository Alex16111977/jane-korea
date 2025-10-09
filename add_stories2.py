# -*- coding: utf-8 -*-
import codecs

# Читаємо файл
with codecs.open('C:/Claude/jane-korea/reading-content.html', 'r', 'utf-8') as f:
    lines = f.readlines()

# Знаходимо позицію для вставки (рядок 697 + 1)
insert_pos = 697

# Текст для вставки
stories_2_text = """,
                    {
                        id: 'stories-2',
                        title: "Встреча с другом в парке",
                        subtitle: "공원에서 친구와의 만남",
                        korean: `<span class="korean-word" data-translation="вчера" data-pronunciation="어제 [eoje]">어제</span> <span class="korean-word" data-translation="я" data-pronunciation="저는 [jeoneun]">저는</span> <span class="korean-word" data-translation="друга" data-pronunciation="친구 [chingu]">친구</span><span class="korean-word" data-translation="를" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="встретил" data-pronunciation="만났어요 [mannassseoyo]">만났어요</span>. <span class="korean-word" data-translation="его" data-pronunciation="그 [geu]">그</span> <span class="korean-word" data-translation="имя" data-pronunciation="이름 [ireum]">이름</span><span class="korean-word" data-translation="은" data-pronunciation="은 [eun]">은</span> <span class="korean-word" data-translation="Минсу" data-pronunciation="민수 [minsu]">민수</span><span class="korean-word" data-translation="예요" data-pronunciation="예요 [yeyo]">예요</span>. <span class="korean-word" data-translation="мы" data-pronunciation="우리 [uri]">우리</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="в парке" data-pronunciation="공원 [gongwon]">공원</span><span class="korean-word" data-translation="에서" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="встретились" data-pronunciation="만났어요 [mannassseoyo]">만났어요</span>.

<span class="korean-word" data-translation="погода" data-pronunciation="날씨 [nalssi]">날씨</span><span class="korean-word" data-translation="가" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="очень" data-pronunciation="정말 [jeongmal]">정말</span> <span class="korean-word" data-translation="хорошая" data-pronunciation="좋았어요 [joassseoyo]">좋았어요</span>! <span class="korean-word" data-translation="солнце" data-pronunciation="해 [hae]">해</span><span class="korean-word" data-translation="가" data-pronunciation="가 [ga]">가</span> <span class="korean-word" data-translation="светило" data-pronunciation="빛났어요 [binnassseoyo]">빛났어요</span>. <span class="korean-word" data-translation="мы" data-pronunciation="우리 [uri]">우리</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="скамейке" data-pronunciation="벤치 [benchi]">벤치</span><span class="korean-word" data-translation="에" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="сели" data-pronunciation="앉았어요 [anjassseoyo]">앉았어요</span>. <span class="korean-word" data-translation="и" data-pronunciation="그리고 [geurigo]">그리고</span> <span class="korean-word" data-translation="много" data-pronunciation="많이 [mani]">많이</span> <span class="korean-word" data-translation="разговаривали" data-pronunciation="이야기했어요 [iyagihaesseoyo]">이야기했어요</span>.

<span class="korean-word" data-translation="Минсу" data-pronunciation="민수 [minsu]">민수</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="мне" data-pronunciation="저에게 [jeoege]">저에게</span> <span class="korean-word" data-translation="интересную" data-pronunciation="재미있는 [jaemiinneun]">재미있는</span> <span class="korean-word" data-translation="историю" data-pronunciation="이야기 [iyagi]">이야기</span><span class="korean-word" data-translation="를" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="рассказал" data-pronunciation="했어요 [haesseoyo]">했어요</span>. <span class="korean-word" data-translation="его" data-pronunciation="그의 [geuui]">그의</span> <span class="korean-word" data-translation="семья" data-pronunciation="가족 [gajok]">가족</span><span class="korean-word" data-translation="이" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="в Пусан" data-pronunciation="부산 [busan]">부산</span><span class="korean-word" data-translation="에" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="поехала" data-pronunciation="갔어요 [gassseoyo]">갔어요</span>. <span class="korean-word" data-translation="там" data-pronunciation="거기 [geogi]">거기</span><span class="korean-word" data-translation="에서" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="море" data-pronunciation="바다 [bada]">바다</span><span class="korean-word" data-translation="를" data-pronunciation="를 [reul]">를</span> <span class="korean-word" data-translation="видели" data-pronunciation="봤어요 [bwassseoyo]">봤어요</span>!

<span class="korean-word" data-translation="потом" data-pronunciation="나중에 [najunge]">나중에</span> <span class="korean-word" data-translation="мы" data-pronunciation="우리 [uri]">우리</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="мороженое" data-pronunciation="아이스크림 [aiseukeulim]">아이스크림</span><span class="korean-word" data-translation="을" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="купили" data-pronunciation="샀어요 [sassseoyo]">샀어요</span>. <span class="korean-word" data-translation="очень" data-pronunciation="너무 [neomu]">너무</span> <span class="korean-word" data-translation="вкусно" data-pronunciation="맛있었어요 [masisseosseoyo]">맛있었어요</span>! <span class="korean-word" data-translation="я" data-pronunciation="저 [jeo]">저</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="клубничное" data-pronunciation="딸기 [ttalgi]">딸기</span> <span class="korean-word" data-translation="мороженое" data-pronunciation="아이스크림 [aiseukeulim]">아이스크림</span><span class="korean-word" data-translation="을" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="выбрал" data-pronunciation="골랐어요 [gollassseoyo]">골랐어요</span>. <span class="korean-word" data-translation="Минсу" data-pronunciation="민수 [minsu]">민수</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="шоколадное" data-pronunciation="초콜릿 [chokollit]">초콜릿</span> <span class="korean-word" data-translation="мороженое" data-pronunciation="아이스크림 [aiseukeulim]">아이스크림</span><span class="korean-word" data-translation="을" data-pronunciation="을 [eul]">을</span> <span class="korean-word" data-translation="выбрал" data-pronunciation="골랐어요 [gollassseoyo]">골랐어요</span>.

<span class="korean-word" data-translation="время" data-pronunciation="시간 [sigan]">시간</span><span class="korean-word" data-translation="이" data-pronunciation="이 [i]">이</span> <span class="korean-word" data-translation="быстро" data-pronunciation="빨리 [ppalli]">빨리</span> <span class="korean-word" data-translation="прошло" data-pronunciation="지나갔어요 [jinagassseoyo]">지나갔어요</span>. <span class="korean-word" data-translation="мы" data-pronunciation="우리 [uri]">우리</span><span class="korean-word" data-translation="는" data-pronunciation="는 [neun]">는</span> <span class="korean-word" data-translation="три" data-pronunciation="세 [se]">세</span> <span class="korean-word" data-translation="часа" data-pronunciation="시간 [sigan]">시간</span> <span class="korean-word" data-translation="동안" data-pronunciation="동안 [dongan]">동안</span> <span class="korean-word" data-translation="разговаривали" data-pronunciation="이야기했어요 [iyagihaesseoyo]">이야기했어요</span>. <span class="korean-word" data-translation="очень" data-pronunciation="정말 [jeongmal]">정말</span> <span class="korean-word" data-translation="весело" data-pronunciation="즐거웠어요 [jeulgeoweosseoyo]">즐거웠어요</span>! <span class="korean-word" data-translation="на следующей неделе" data-pronunciation="다음 주 [daeum ju]">다음 주</span><span class="korean-word" data-translation="에" data-pronunciation="에 [e]">에</span> <span class="korean-word" data-translation="снова" data-pronunciation="또 [tto]">또</span> <span class="korean-word" data-translation="встретимся" data-pronunciation="만날 거예요 [mannal geoyeyo]">만날 거예요</span>!`,
                        translation: "Вчера я встретил друга. Его имя Минсу. Мы встретились в парке. Погода была очень хорошая! Солнце светило. Мы сели на скамейку. И много разговаривали. Минсу рассказал мне интересную историю. Его семья поехала в Пусан. Там они видели море! Потом мы купили мороженое. Было очень вкусно! Я выбрал клубничное мороженое. Минсу выбрал шоколадное. Время прошло быстро. Мы разговаривали три часа. Было очень весело! На следующей неделе встретимся снова!",
                        quiz: [
                            {
                                question: "언제 친구를 만났습니까? (Когда встретил друга?)",
                                options: ["오늘", "어제", "내일", "모레"],
                                correct: 1
                            },
                            {
                                question: "어디에서 만났습니까? (Где встретились?)",
                                options: ["카페", "집", "공원", "학교"],
                                correct: 2
                            },
                            {
                                question: "무엇을 샀습니까? (Что купили?)",
                                options: ["커피", "케이크", "주스", "아이스크림"],
                                correct: 3
                            },
                            {
                                question: "얼마나 이야기했습니까? (Сколько времени разговаривали?)",
                                options: ["한 시간", "두 시간", "세 시간", "네 시간"],
                                correct: 2
                            }
                        ]
                    }
"""

# Вставляємо текст після рядка 697 (закриваючі дужки stories-1)
lines.insert(insert_pos, stories_2_text)

# Записуємо файл назад
with codecs.open('C:/Claude/jane-korea/reading-content.html', 'w', 'utf-8') as f:
    f.writelines(lines)

print("[OK] stories-2 added successfully!")
