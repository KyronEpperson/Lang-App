# vi-ko native half: cold review (2026-11-23)

**The reviewer is not a native speaker of Vietnamese.** Every judgement on Vietnamese wording below comes from careful reading, not from a native ear. The list at the end names what a native speaker should still look at.

## What I checked

- **Every jsonl row**, read next to its Korean in `target/ko/` and, where a cue or a claim was in doubt, the English half:
  - 1,413 cards and 201 dialogues;
  - 275 examples, 47 patterns and 294 sentences;
  - 99 checks and 462 practice items;
  - 56 deck labels and descriptions, 6 groups, 140 labels, and 33 lesson titles and blurbs.
- **All 33 lesson bodies.**
- **Practice and check prompts** against `a`, `x` and the options. I looked for distractors that differ from the answer only in tense, level or place particle, and checked that the prompt carries the cue.
- **Every Hán-Việt and false-friend claim** (list below), the sound anchors, the proverb and idiom equivalents, and the KakaoTalk "1" fact.
- **Mechanical checks:**
  - duplicate meanings within a deck (none);
  - identical options (none);
  - the same Korean glossed two ways across cards, sentences, examples, dialogue lines and pause labels;
  - leftover English;
  - comma-grouped numbers in Vietnamese text;
  - cross-references.

Every fix is applied by id from `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-viko/fix.py` (session scratch).
- The script always starts from the pre-review copy `…/review-viko/backup/` and can be re-run with the same result.
- It asserts that the Hangul runs, the `@@` count and the dialogue ` / ` of every edited field are unchanged.
- Lesson edits are exact one-time replacements, and the script asserts that the Hangul is unchanged in every edited body except the already-waived `hangul`.

I touched only the merged jsonl files and `lessons/*.html` here. I did not touch `work/`, `ui.json`, `trainer.json`, `course.json`, `target/` or `src/`. **Do not run `mk_native.js vi --merge` again**: it rebuilds the half from `work/` and would undo this review.

**Validator:** `node tools/halves/validate.js vi ko` gives **errors: 0**, with 3 warnings:
- the waived extra jamo in `hangul`;
- the `<ul>` of the reading guide in `hangul`;
- the extra list in `polite`, which is intentional.

`assemble.js vi ko` succeeds and its output passes `node --check`. Words remaining: 192.
- **Cards (180):** country names spelled as in English (*Mexico, Canada…*) and brand or romanization rows. These are intentional.
- **Practice (7):** "Seoul (seo-ul)" and Korean-only explanations such as "가요 → 갔어요", which need no translation.
- **`trainer.json` (5):** out of scope.

## Decisions

| Point | Decision | Applied to |
|---|---|---|
| 학생: *học sinh* or *sinh viên* | **Choose by meaning.** Korean 학생 covers any student. A Vietnamese *học sinh* is a school pupil, and an adult who says "I'm a student" is *sinh viên*. So every "I'm a student" gloss and prompt is now **sinh viên**, as profile §5.3 has it. Two places stay as they were: the card ko.c0682 «học sinh, sinh viên», and the level title t03 *Học sinh* (a stage of learning, not this sentence). **The cognate tip is kept**: ko.c0081 «학생 học sinh, sinh viên (cùng gốc Hán với “học sinh”)»; nouns.html «학생 cùng gốc Hán với *học sinh* (tiếng Hàn dùng cho cả học sinh lẫn sinh viên)». | 9 sentences, 3 checks, 10 practice items, nouns.html, isseoyo.html, c0081 |
| Where *ạ* goes | **The rule:** *ạ* goes on a line whose listener is an elder, a teacher, one's own boss, or a customer being served, and whose Korean honours that listener. It never goes on a plain 요 line between equals, and never in the app voice.<br>**선생님:** always *ạ* («Thưa thầy, cho hỏi một câu ạ»; 선생님, 안녕하세요 = «Xin chào thầy ạ»).<br>**사장님:** depends on who says it. Said to one's own boss, it takes *ạ*. Said by a customer to a shop owner (사장님, 계산해 주세요 «Ông chủ ơi, tính tiền giúp tôi»), it takes none: the title is shop courtesy, and the Korean line is a plain 주세요.<br>**-시- about a third person** (사장님 계세요?) gets no *ạ*. | titles.11, titles.14 (the rest already followed this) |
| Romantic 반말 | **No pronoun** when the Vietnamese reads naturally without one («Nhớ quá», «Ngủ ngon nhé»). **mình / cậu** when the line needs an "I" or a "you" to make sense: 좋아해 «Mình thích cậu», 너밖에 없어 «Mình chỉ có cậu thôi». Never *anh / em*. This matches what the dialogues already did. | c0414, c0423, c0429, c0440, c0441, c0445, c0447, c0530, c0542, g104, g126, g127, g128 |
| Past negative: *đã không* | **Never *đã không*.** The pattern is *không* plus a time anchor: the Korean's own time word (*Hôm qua (tôi) không ăn*), otherwise *hôm đó / lúc đó*. A bracketed anchor marks a word the Korean leaves out: «(Hôm đó tôi) không đi». ***chưa*** is used when the meaning is "not yet" (아직 안 먹었어요 «Tôi chưa ăn»). Affirmative past prompts keep ***đã*** as the cue (profile §8). past.html now states this convention for the practice prompts. | s0092, s0097, s0132, s0139, s0222; joining.k2/.02, past.05, past.14, story.14; e197, e206; past.html |
| *đã rất tốt* | **Never *đã rất* + adjective.** A past adjective becomes *lúc đó* + adjective + *lắm*, or carries the sentence's time word: 좋았어요 «(Lúc đó) tốt lắm»; «Hôm nay tôi vui lắm». Story sentences that already sit in a past narrative drop the marker («Nhưng bộ phim dài quá»). The matching mc prompt keeps an anchor, because a present-tense distractor exists: «Nhưng hôm đó bộ phim dài quá». | s0090, s0227, past.04, story.03, e172, c0421, past.html |
| 저기요 | **The gloss is always a *Xin lỗi* form:** «Xin lỗi, cho hỏi» when a question follows, and «Xin lỗi!» when the speaker calls for service or makes a request. **«Em ơi! / Anh ơi!»** is named only in notes, as the Vietnamese way of doing the same thing (c0085, c0575, food.k1, food.01, food.html), and never as the gloss, because it would add an age and a gender the Korean does not have. The card and pause meaning stays the fixed «Xin lỗi, cho hỏi (để gọi ai đó)». | g011, g012, s0181, c0575, food.k1, food.01 |
| *cốc* vs *ly* | **Kept as written; it was already consistent.** *cốc* is used for ordering and counting cups (the profile's Northern form). *ly* stays in drinking idioms (*cạn ly, làm một ly, mời uống một ly*) and in the double gloss 잔 = «cốc, ly». *mì ly* (cup noodles) is the established term. | — |
| Number format | Vietnamese text writes **4.500 won / 1.000** everywhere, and Korean rows keep 4,500원. A scan found no comma-grouped number in any Vietnamese field. The one exception is numbers.html's «Ở Hàn Quốc, số được viết với dấu phẩy: 50,000», which shows the Korean convention on purpose (profile §3.1). The original pre-filled rows (4,500 / 12,000 / 38,900 / 1,000 …) had all been written as 4.500 etc. at the merge. | — |
| 베트남에서 왔어요 in meet | **Left out**, as the launching message directs. It would need a `_waive`, which the profile does not plan. The meet tip keeps the English Hangul (미국, 필리핀, 일본). | — |
| Same Korean, same gloss | **Unified:**<br>• 성함이 어떻게 되세요? «Xin hỏi quý danh là gì ạ?» (c0247, g094, honorific.06);<br>• 번호 좀 알려 줄래? «Cho mình xin số điện thoại được không?»;<br>• 오늘 예쁘네요 «Hôm nay trông bạn xinh quá»;<br>• 나랑 사귀자 «Hẹn hò với mình đi»;<br>• 나 너 좋아하는 것 같아 «Hình như mình thích cậu mất rồi»;<br>• 포장이요 «Mang đi»;<br>• 어디서 볼까 «Gặp nhau ở đâu nhỉ?»;<br>• 어디야 «Đang ở đâu đấy?»;<br>• 많이 드세요 «Ăn nhiều vào nhé»;<br>• 잘 모르겠어요 «Tôi không chắc lắm»;<br>• 좋은 하루 보내세요 «Chúc bạn một ngày tốt lành»;<br>• 한국어 잘하시네요 «Bạn nói tiếng Hàn giỏi quá»;<br>• 어제 늦게 잤어요 (e009 = e104);<br>• Americano (capitalised);<br>• «lối ra số N» (g037);<br>• «trạm xe buýt»;<br>• 혹시 «không biết…, liệu…» (p040);<br>• -(으)면 안 돼요? «nếu tôi … thì có sao không?» (p042).<br>**Left as context variants:** 별말씀을요 («Không có gì đâu» after thanks, «Bạn quá khen rồi» after praise) and 아니에요. | see the rows-changed table |
| Hán-Việt readings and false friends | **Every claim in the half was checked against the characters**, and every one is correct, so all are kept:<br>• 학생 學生 học sinh · 감사 感謝 cảm tạ · 안녕 安寧 an ninh · 한국어 韓國語 · 화장 化粧 hóa trang;<br>• 제일 第一 đệ nhất · 계산 計算 kế toán ✗ · 시간 時間 thời gian · 층 層 tầng · 호선 號線 hiệu tuyến;<br>• 행복 幸福 hạnh phúc · 긴장 緊張 khẩn trương ✗ · 병원 病院 bệnh viện · 은행 銀行 ngân hàng (also 銀杏, ginkgo);<br>• 편의 便宜 tiện nghi ✗ · 시장 市場 thị trường ✗ · 백화 百貨 bách hóa · 공원 公園 công viên · 취미 趣味 thú vị ✗;<br>• 운동 運動 vận động · 여행 旅行 lữ hành · 해산 海産 hải sản · 신호 信號 tín hiệu · 무대 舞臺 vũ đài;<br>• 가족 家族 gia tộc ✗ · 최고 最高 tối cao ✗ · 회의 會議 hội nghị ✗ · 공부 工夫 công phu ✗ · 권 卷 quyển;<br>• 매일 每日 *mỗi + nhật* (每 reads *mỗi* in Hán-Việt) · 사장 社長 xã trưởng ✗ · 부장 部長 bộ trưởng ✗ · the Sino-Korean numerals.<br>(✗ = taught as a false friend.)<br>**Hedged:** c0117's 콘센트 ← "concentric plug" is a common folk account, so it now reads «thường được cho là». 준비 / 주의 appear nowhere in the half (profile illustrations only). No hanja are printed outside the idioms' target field. | c0117 |
| Proverb and idiom equivalents | **All checked and kept:** 티끌 모아 태산 «Góp gió thành bão», 금강산도 식후경 «Có thực mới vực được đạo», 세 살 버릇 여든까지 «Giang sơn dễ đổi, bản tính khó dời», 백지장도 맞들면 낫다 «Một cây làm chẳng nên non», 누워서 떡 먹기 «Dễ như ăn kẹo», 고생 끝에 낙이 온다 «Khổ trước sướng sau».<br>**Idioms:** new readings were not added. The existing readings (chuyển họa vi phúc, khổ tận cam lai, đại khí vãn thành, hữu bị vô hoạn, thất điên bát khởi, dĩ tâm truyền tâm, cẩm thượng thiêm hoa, đa đa ích thiện, quá do bất cập, nhất phiến đan tâm, ôn cố tri tân, khuyến thiện trừng ác, bách chiến bách thắng) all match the hanja. The equivalents are introduced with «như», never as "the same idiom". | — |
| Sound anchors (cards = hangul lesson = deck descriptions) | **ㅓ:** «gần “ơ” (cơm) nhưng mở miệng rộng hơn, môi không tròn». The hangul table said "between ơ and o", which is now worded the same way as card c0002 and the guide.<br>**ㅅ** = «x»; **before ㅣ** «hơi giống “s” giọng Nam». The lesson now says this as well as card c0019; no Hangul was added.<br>**ㅈ** = «“ch” nhẹ, không phải “gi”» in the card, the lesson table, the guide and the deck description.<br>**Tense ㄲ ㄸ ㅃ ㅉ ㅆ** ≈ Vietnamese «c, t, p, ch, x» said tight (cards c0027–c0031, lesson, guide, Advanced deck description).<br>**ㅋ ㅍ ㅊ** = «c, p, ch» plus a puff like «th», not «kh / ph». | hangul.html |
| Email sign-off @@ 드림 | «Xin cảm ơn. Trân trọng, @@». This is the Vietnamese email close, where the old gloss «@@ kính thư» was odd. office.05 now compares 드림 with «Trân trọng». It works with any name. | s0301, office.05 |
| Office titles in glosses | **Kept «quản lý» for 과장(님)** (profile glossary), because office.11 / .14 must lead to 과장님, and «sếp» would also fit 사장님 / 팀장님. A native should judge «Thưa quản lý» (item 6). | — |

**Other accuracy and naturalness fixes:**
- c0193 «깜짝 놀랐어요 = tôi giật cả mình» (was «làm tôi…»).
- c1000 example «hay là mình đi uống cà phê nhé?».
- c1047 헉 «trời!; chết thật» (*hự* is a grunt of pain).
- g115 «Đúng là cậu nhất luôn» (word order).
- g127 «Bảo có chuyện muốn nói mà?» (*nghe nói* meant hearsay).
- g155 / g161: dropped a stiff *đã* where a time word already carries the past.
- e078, e193, e268, e274: natural past.
- noun-modifiers.html «(Cái túi to.)» (an extra *này* had been added).
- story.html cross-reference «(bài 10, “Thì quá khứ”)». The full title would add Hangul, so only its Vietnamese part is given.
- Blurbs: titles «gọi tên trống không»; numbers now says hours take native numbers («đếm, nói tuổi và giờ»), which matches the known fact and the body.
- hangul.k2 options «âm ng / âm h / âm g» (were bare English-identical letters).

**Checked and found correct, no change:**
- KakaoTalk «1 = chưa đọc; 읽씹 = số 1 đã mất mà không trả lời» (texting.html).
- Hours native / minutes and money Sino-Korean everywhere: cards c0150 / c0151 / c0408 / c1110 / c1111, patterns p033 / p034, numbers.k1 / k2, the numbers practice items.
- Every type-in prompt leads to its accepted answers. The tense, level and place cues were present apart from the past-negative and past-adjective items fixed above.
- No pointer to the Đọc tab.
- No English left in bodies, headers or options.

## Rows changed

| File | Rows changed |
|---|---|
| cards.jsonl | 19 |
| dialog.jsonl | 21 |
| examples.jsonl | 8 |
| sentences.jsonl | 18 |
| checks.jsonl | 6 |
| practice.jsonl | 23 |
| labels.jsonl | 3 |
| patterns.jsonl | 2 |
| lessons.jsonl | 2 (titles, numbers blurbs) |
| decks, groups | 0 |
| lessons/*.html | 6 files: hangul, nouns, isseoyo, past, noun-modifiers, story |

That is 102 jsonl rows and 6 bodies in all.

## Final deck labels (56) and group names (6), unchanged

- **Decks:**
  - Nguyên âm (Hangul) · Phụ âm (Hangul) · Nâng cao (Hangul) · Mẹo phát âm · Câu sinh tồn · Giới thiệu bản thân · Câu sinh tồn 2;
  - Hỏi chỗ, hỏi đường · Quán cà phê & cửa hàng tiện lợi · Con số ngoài đời · Đơn vị đếm · Thời tiết & cảm xúc · Từ nối · Bác sĩ & hiệu thuốc;
  - Nhà ở & việc vặt · Kính ngữ · Địa điểm & tòa nhà · Sở thích · Món ăn · Đồ uống · Hoạt động;
  - Phim ảnh & giải trí · Vị trí & phương hướng · Động từ cơ bản · Trợ từ · Số · Lời ngọt ngào · Câu nói dễ thương;
  - Tán tỉnh · Nhắn tin thân mật · Khen & cổ vũ · Đi chơi · K-pop & văn hóa fan · Mạng xã hội & tiếng lóng · Hẹn hò nghiêm túc;
  - Công việc & văn phòng · Chuyện phiếm · Gọi món · Chỉ đường & giao thông · Thời gian & ngày tháng · Gia đình & mọi người · Tính từ;
  - Câu thoại phim Hàn · Danh từ thông dụng · Động từ thông dụng · Tính từ thông dụng · Trạng từ thông dụng · Đại từ thông dụng · Trợ từ mở rộng;
  - Từ nối mở rộng · Từ cảm thán thông dụng · Từ hữu ích · Đơn vị đếm mở rộng · Từ ngữ tán tỉnh · Lời khen hằng ngày · Các quốc gia.
- **Groups:** Nền tảng · Hằng ngày · Từ vựng · Ngữ pháp · Giao lưu · Từ vựng cốt lõi.

## For a native speaker to check (max 20)

1. The *sinh viên* choice for 학생 in every "I'm a student" line, and the nouns.html tip.
2. The past conventions: «(Hôm đó tôi) không đi», «(Lúc đó) tốt lắm», «Nhưng hôm đó bộ phim dài quá». Are the bracketed anchors acceptable in lesson glosses?
3. Romantic lines with *mình / cậu* («Mình thích cậu», «Mình chỉ có cậu thôi»). Do they sound too school-age for adult couples?
4. *ạ* placement: «Xin chào thầy ạ», «Thưa thầy, cho hỏi một câu ạ», but «Ông chủ ơi, tính tiền giúp tôi» with no *ạ*.
5. 저기요 = «Xin lỗi!» / «Xin lỗi, cho hỏi», with «Em ơi!» named only in notes.
6. «Thưa quản lý, có rảnh một chút không ạ?» (g107, e072) and «Quản lý ơi…» (office.11 / .14). Would «Sếp ơi» or «Thưa trưởng phòng» be more natural?
7. The ㅓ anchor «gần “ơ” nhưng mở miệng rộng hơn» and ㅅ before ㅣ «hơi giống “s” giọng Nam».
8. The fixed glosses with *ạ*: 수고하셨습니다 «Hôm nay đã vất vả rồi ạ», 수고하세요 «Chúc làm việc tốt ạ», 수고 많으셨어요 «Đã vất vả nhiều rồi ạ».
9. 덕분에요 = «Vâng, nhờ trời» (g026, g097). The teacher says «Vâng» to a student in g097 because 네 = *Vâng* is a fixed gloss.
10. «Trân trọng, @@» for @@ 드림.
11. 별말씀을요 «Không có gì đâu» / «Bạn quá khen rồi», and 과찬이세요 «Bạn khen tôi quá lời rồi».
12. Interjections: 헉 «trời!; chết thật», 아싸 «hay quá!; tuyệt!», 짜잔 «tèn ten!», 에휴 «haiz».
13. 당신을 사랑해요 «Tôi yêu người» (song register), and 당신 «bạn, mình (vợ chồng…)».
14. 씨 «danh xưng sau tên (≈ anh, chị)» and 그쪽 «bạn (với người lạ…)».
15. Country exonyms: *Gruzia, Ý, Li-băng, Ma-rốc, Séc, Litva*, and the Latin-script forms.
16. The idiom equivalents i02 «một công đôi việc» and i09 «cả thèm chóng chán» (*nhất cử lưỡng tiện* and *ba ngày đánh cá…* are alternatives).
17. The level titles *Chồi non, Tiền bối, Cao thủ, Bậc thầy, Sư phụ*.
18. «Hôm sinh nhật, tôi nhận được rất nhiều quà», «Trời bỗng đổ mưa», «Vừa về đến nhà là tôi ngủ luôn».
19. The texting comparison «Giống người Việt viết “ko”, “dc”, “hihi”» and ㅎㅎ = «hihi».
20. The food.html line «Ở quán Việt bạn gọi “Em ơi!”» and the meal-ritual comparison (*mời* vs 잘 먹겠습니다).
