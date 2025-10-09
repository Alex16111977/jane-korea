# -*- coding: utf-8 -*-
import codecs

# Читаємо файл
with codecs.open('C:/Claude/jane-korea/reading-content.html', 'r', 'utf-8') as f:
    lines = f.readlines()

# Знаходимо позицію для вставки (рядок 697 + 1)
insert_pos = 697

# Текст для вставки
stories_2_text = """
                    {
                        id: 'stories-2',
                        title: "Встреча с другом в парке",
                        subtitle: "공원에서 친구와의 만남",
                        korean: `<span class="korean-word" data-translation="вчера" data-pronunciation="어제 [eoje]">어제</span> <span class="korean-word" data-translation="днём" data-pronunciation="오후에 [ohu-e]">오후에</span> <span class="korean-word" data-translation="друг" data-pronunciation="친구 [chingu]">친구</span> <span class="korean-word" data-translation="Джихун" data-pronunciation="지훈 [jihun]">지훈</span><span class="korean-word" data-translation="с" data-pronunciation="과 [gwa]">과</span> <span class="korean-word" data-translation="парк" data-pronunciation="공원 [gongwon]">공원</span><span class="korean-word" data-translation="에서" data-pronunciation="에서 [eseo]">에서</span> <span class="korean-word" data-translation="встретился" data-pronunciation="만났어요 [mannasseoyo]">만났어요</span>.

<span class="korean-word" data-translation="погода" data-pronunciation="날씨가 [nalssiga]">날씨가</span> <span class="korean-word" data-translation="ясной" data-pronunciation="맑고 [malggo]">맑고</span> <span class="korean-word" data-translation="тёплой" data-pronunciation="따뜻해서 [ttatteuthaeseo]">따뜻해서</span> <span class="korean-word" data-translation="скамейке" data-pronunciation="벤치에 [benchie]">벤치에</span> <span class="korean-word" data-translation="сидя" data-pronunciation="앉아 [anja]">앉아</span> <span class="korean-word" data-translation="долго" data-pronunciation="오래 [orae]">오래</span> <span class="korean-word" data-translation="разговаривали" data-pronunciation="이야기했어요 [iyagihaesseoyo]">이야기했어요</span>.

<span class="korean-word" data-translation="мы" data-pronunciation="우리는 [urineun]">우리는</span> <span class="korean-word" data-translation="школа" data-pronunciation="학교 [hakgyo]">학교</span> <span class="korean-word" data-translation="воспоминания" data-pronunciation="추억에 [chueoge]">추억에</span> <span class="korean-word" data-translation="о" data-pronunciation="대해 [daehae]">대해</span> <span class="korean-word" data-translation="говоря" data-pronunciation="이야기하면서 [iyagihamyeonseo]">이야기하면서</span> <span class="korean-word" data-translation="много" data-pronunciation="많이 [mani]">많이</span> <span class="korean-word" data-translation="смеялись" data-pronunciation="웃었어요 [usosseoyo]">웃었어요</span>.

<span class="korean-word" data-translation="перед расставанием" data-pronunciation="헤어지기 전에 [heeoji-gi jeone]">헤어지기 전에</span> <span class="korean-word" data-translation="следующие" data-pronunciation="다음 [daeum]">다음</span> <span class="korean-word" data-translation="выходные" data-pronunciation="주말에 [jumare]">주말에</span> <span class="korean-word" data-translation="снова" data-pronunciation="다시 [dasi]">다시</span> <span class="korean-word" data-translation="встретиться" data-pronunciation="만나기로 [mannagiro]">만나기로</span> <span class="korean-word" data-translation="пообещали" data-pronunciation="약속했어요 [yaksokaesseoyo]">약속했어요</span>.`,
                        translation: "Вчера днём я встретился с другом Джихуном в парке. Погода была ясной и тёплой, мы сидели на скамейке и долго разговаривали. Мы вспоминали школьные годы и много смеялись. Перед расставанием пообещали встретиться снова на следующих выходных.",
                        quiz: [
                            {
                                question: "어디에서 만났습니까? (Где встретились?)",
                                options: ["카페에서", "공원에서", "도서관에서", "집에서"],
                                correct: 1
                            },
                            {
                                question: "날씨는 어땠습니까? (Какая была погода?)",
                                options: ["추웠다", "비가 왔다", "맑고 따뜻했다", "눈이 왔다"],
                                correct: 2
                            },
                            {
                                question: "무엇에 대해 이야기했습니까? (О чём говорили?)",
                                options: ["일에 대해", "학교 추억에 대해", "여행 계획에 대해", "음악에 대해"],
                                correct: 1
                            },
                            {
                                question: "헤어지기 전에 무엇을 약속했습니까? (Что пообещали перед расставанием?)",
                                options: ["사진을 찍기로 했다", "디저트를 먹기로 했다", "다시 만나기로 했다", "선물을 사기로 했다"],
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
