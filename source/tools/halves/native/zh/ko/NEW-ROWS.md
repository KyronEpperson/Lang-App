# zh-ko half: top-up of 2026-11-23 (for the cold reviewer)

One writer, not a native speaker, wrote these rows for the 2026-11-23 Korean-half update: Core words, Countries, Flirting words, Compliments, and the learner-name token `@@`. No native speaker has checked them yet.

`node tools/halves/validate.js zh ko` gives **errors: 0** and **words remaining: 0 of 25577**. The one warning left is the existing waived `hangul.html`. `assemble.js zh ko` builds 56 decks and 1413 cards, and the file passes `node --check`. The validator checks format and Hangul only, not the Chinese.

How the rows were written:
* Every edit was applied by id from a script in session scratch (`…/scratchpad/topup-zh/apply.py`, `lessons.py`, data in `data/*.tsv` and `data/edits.jsonl`). The pre-edit copy is in `…/topup-zh/base/`.
* Untouched rows are byte-identical. `mk_native.js` was not run, and `ui.json`, `trainer.json`, `course.json` and `work/` were not touched.
* `REVIEW.md` binds these rows: 礼貌体 / 正式体 / 半语, 松音 / 紧音 / 送气音, 不规则, ㄹ 脱落, 基本形, the tags （正式）（礼貌）（半语）（尊敬）.
* Person names are in Latin letters (Minsu, Jisu, Minjun, Haneul, Minji). Place names use their standard Chinese forms (首尔, 明洞, 南山塔, 宿务).

## Counts

| File | Added | Changed | Removed |
|---|---|---|---|
| decks.jsonl | 13 | 0 | 0 |
| groups.jsonl | 1 (`ko.grp.core-words`) | 0 | 0 |
| cards.jsonl | 773 (ko.c0643–ko.c1415) | 1 (ko.c0617 note: 멕시코 사람) | 1 (ko.c0077) |
| examples.jsonl | 201 (ko.e075–ko.e275) | 0 | 0 |
| dialog.jsonl | 52 (ko.g150–ko.g201) | 2 (ko.g019 `@@`, ko.g021 菲律宾 / 宿务) | 0 |
| sentences.jsonl | 5 (ko.s0297–ko.s0301) | 0 | 5 (ko.s0295, s0012, s0127, s0289, s0292) |
| practice.jsonl | 0 | 4 (meet.06 墨西哥; particles.03 q + why 日本; office.05 q 키이 → `@@`; office.08 p Kii → `@@`) | 0 |
| lessons/*.html | 0 | 3: meet (ex ids + the new country tip), particles and office (ex ids only) | 0 |
| patterns, checks, labels, lessons.jsonl | 0 | 0 | 0 |

## Deck labels and group name (permanent progress keys)

| Deck id | Label |
|---|---|
| ko.d.top-nouns | 常用名词 |
| ko.d.top-verbs | 常用动词 |
| ko.d.top-adjectives | 常用形容词 |
| ko.d.top-adverbs | 常用副词 |
| ko.d.top-pronouns | 常用代词 |
| ko.d.top-particles | 更多助词 (the existing deck is 「助词」) |
| ko.d.top-connectors | 更多连接词 (the existing deck is 「连接词」) |
| ko.d.top-interjections | 常用感叹词 |
| ko.d.top-words | 实用小词 |
| ko.d.top-counters | 更多量词 (the existing deck is 「量词」) |
| ko.d.flirting-words | 恋爱词汇 (the existing decks are 「搭讪示好」 and 「恋爱进阶」) |
| ko.d.compliments | 日常夸奖 (the existing deck is 「捧场与夸赞」) |
| ko.d.countries | 国家和地区 (the deck includes 대만, 홍콩, 마카오, 팔레스타인, 코소보, 푸에르토리코 and 괌) |
| group ko.grp.core-words | 核心词汇 |

## Decisions

* **Countries: standard Mainland names.** A few choices need noting:
  * 대만 / 홍콩 / 마카오 are glossed with the plain names 台湾 / 香港 / 澳门, under the label 「国家和地区」. The notes add nothing that the English lacks.
  * 북한 is glossed 朝鲜. The note says that 北韩 is the Korean usage.
  * 튀르키예 is 土耳其, and 조지아 is 格鲁吉亚 (the note mentions 佐治亚州).
  * 도미니카 공화국 / 도미니카 연방 are 多米尼加共和国 / 多米尼克, and the two Congos are 刚果民主共和国 / 刚果共和国.
  * 에스와티니 is 斯威士兰（埃斯瓦蒂尼）, and 미크로네시아 is 密克罗尼西亚联邦.
* **`meet.html` tip.** It shows exactly 미국에서、필리핀에서、일본에서 왔어요, with no waiver, and adds in Chinese only “……包括中国”. This also clears the old div 4→3 structure warning.
* **`@@`.** Every row keeps one `@@` with a space on each side (我叫 @@。, 市场部的 @@, @@ 敬上). Nothing is attached to the name.
* **您.** It appears only where the Korean is honorific or humble (-시-, 드리다, 말씀, 분):
  * the -시- compliments, 드세요, 기억하세요, 도와드릴까요, 몇 분이세요;
  * the work-email 您好 (ko.s0300, office.08), as in REVIEW.

  It is kept off where the Korean is plain (좋은 생각이에요, 많이 늘었어요, 발표 잘 들었습니다). It is also kept off two playful -시- lines aimed at peers: c1173 你可真会说话 and c1185 你心地真好.
* **라면 = 方便面.** c1171 and g188 say 「吃碗方便面」, matching the reviewed card c0300 (라면 方便面; 라멘 是日式拉面).
* **Consistency with existing glosses.** I checked headwords against the reviewed cards: 식당 饭馆, 노래방 练歌房, 김밥 紫菜包饭, 삼겹살 五花肉, 회식 聚餐, 떡볶이 辣炒年糕, 치킨 炸鸡, 동생 弟弟 / 妹妹. Words for "casual": 반말 = 半语, and casual vocabulary = 口语. "Slang" = 流行语, as in the existing deck descs. Quotes are “ ”, as the profile says (no 「」).
* **Flirting register scale.** Mild / Warm / Bold = **轻松 / 暖心 / 大胆**, used the same way on every card.
* **Grammar words.** 해요 形式 (in the deck descs, where the English has 해요), 修饰名词, ㄷ / ㅂ / ㅅ / ㅎ / 르 不规则, ㄹ 脱落, ㅡ 脱落, 规则变化, 连接词尾, 量词, 固有词数字 / 汉字词数字.
* **Same Korean, same gloss.** Lines already glossed elsewhere reuse that gloss:
  * 한국에 가고 싶어요 我想去韩国
  * 어제 늦게 잤어요
  * 많이 드세요 多吃点
  * 이거 얼마예요? 这个多少钱？
  * 비싸지만 맛있어요
  * 뭐 먹고 싶어요?
  * 밥 먹었어요? 吃饭了吗？
  * 동생 弟弟（或妹妹）
  * 수고 → 辛苦（您）了, with no 受苦

### 汉字 printed in the new notes

All are simplified forms of the Korean hanja. They are written as 汉字“…” without adding Hangul, and they come from my own knowledge, not from a dictionary page.

* 问题 中 程度 时间 世界 后 生活 方法 会社（中文“公司”） 内容 册 点 学生 理由 房 电话 饮食 山 门 气分 物件 经验 故乡 健康 写真 自动车 半 / 班 价格 英语 质问 父母 医师 对答 始作 宿题 票 地下铁 周末 生日 药 周 韩国语
* 使用 愿 努力 准备 结婚 到着 记忆 出发 · 重要 必要 异常 健康 便 有名 特别 亲切 不便 · 继续 第一 恒常 普通 · 自身 自己
* 午后 千 零 / 空 昨年 午前 来年 百 · 月火水木金土日 (on the 화 / 수 / 목 cards) · 台 曲 篇 人分
* 魅力的 多情 微笑 性格 理想型 · 童颜 过赞 发表
* Countries: 大韩民国 北韩 朝鲜民主主义人民共和国 日本 中国 台湾 美国 印度 英国 泰国 独逸

Left out because I was unsure of them: 동네, 가게, 원래, 조용하다, the exact characters of 호주, and the opaque words (미안하다, 남편, 선물).

## 20 rows most worth a native check

1. **Countries deck label 「国家和地区」, and 台湾 / 香港 / 澳门** as plain glosses (c1216–c1218). Is this acceptable for Mainland readers?
2. **c1213 북한 = 朝鲜**: the note on 北韩 / 朝鲜民主主义人民共和国.
3. **c1381 斯威士兰（埃斯瓦蒂尼）** and **c1413 密克罗尼西亚联邦**: are these the current official Chinese names?
4. **Deck labels** 更多助词 / 更多连接词 / 更多量词 / 实用小词 / 恋爱词汇 / 日常夸奖, and the group 核心词汇: are they natural as permanent names, and distinct enough from 「助词」「连接词」「量词」「捧场与夸赞」「搭讪示好」?
5. **Register scale 轻松 / 暖心 / 大胆** on the flirting cards (c1116–c1178). Does 轻松 read as "mild"?
6. **c1171**: the film title 《春逝》 for 봄날은 간다 (2001), and the gloss 「要不要上来吃碗方便面？（玩笑话）」 (라면 = 方便面, as in c0300).
7. **c1125 다정하다**: the false-friend note 「汉字“多情”，但意思是“体贴”，不是中文的“多情”」. Is the contrast fair?
8. **c0725 질문** 「汉字“质问”，但只是“提问”」 and **c0842 이상하다** 「汉字“异常”，但意思是“奇怪”」: are these fair false-friend notes?
9. **c0677 회사** 「汉字“会社”，中文说“公司”」 and **c1234 독일** 「汉字“独逸”」: is printing Japanese-looking hanja helpful or confusing?
10. **c1132 분위기** 「气质；氛围」 and **c1157 분위기 있으시네요** 「您很有气质」: these follow REVIEW's 你很有气质 for the pause item.
11. **c1138 훈남** 「暖男；看着舒服的帅哥」 and **c1139 심쿵** 「心动；心跳漏一拍」: natural?
12. **c1201 발표 잘 들었습니다** 「这次报告我听得很受益」 and **c1202** 「我学到了很多」: the right register toward a boss?
13. **c1203 수고 많으셨어요** 「辛苦您了」: does it fit the REVIEW 수고 family?
14. **c1204–c1211, the modest replies**: 哪里哪里 / 哪里，我还差得远呢 / 您过奖了；哪里的话 / 您太过奖了 / 没什么特别的 / 都是托你的福. Are the pairs distinct enough?
15. **c1044 아야 「哎哟（疼）」, c1045 에휴 「唉」, c1047 헉 「（倒吸一口气）啊！」, c1051 아이참 「哎呀，讨厌（害羞、撒娇）」, c1055 짜잔 「当当当！」**: the interjection equivalents.
16. **c0893 좀** 「一点儿；请（缓和语气）」 and **c0935 혹시** 「是不是……；万一」: do the glosses fit the softener use?
17. **c0973 그쪽** 「你（对陌生人，字面是“那边”）」 and **c0956 당신**: is the warning phrased well?
18. **c1109 한 판** 「一局；一盘（游戏）；一板」 (계란 한 판 = 一板鸡蛋（30 个）): is 一板 the usual word?
19. **The `meet.html` tip** 「任何国家都这样说：……“国家和地区”卡组里有所有国家，包括中国。」
20. **Example glosses with tags**: e206 / e207 （书面语）, e208 （歌词，或老夫老妻之间）, e228 （说朋友）, plus e164 「韩国菜我吃得惯」 for 잘 먹어요.
