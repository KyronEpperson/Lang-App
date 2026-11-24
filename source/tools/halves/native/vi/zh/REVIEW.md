# vi-zh native half: cold review (2026-11-24)

The reviewer is **not a native speaker of Vietnamese**. Everything marked for a native check at the end should be read by one before release.

The review covers the merged files of `tools/halves/native/vi/zh/` only. Every fix was applied by id from a re-runnable script (`…/scratchpad/review-vizh/fix.js`, which reads the backup in `…/scratchpad/review-vizh/backup/`). `work/`, `course.json`, `target/`, `mk_native.js` and git were not touched.

Final validator: `node tools/halves/validate.js vi zh --all` → **errors: 0**, warnings 15. All 15 were checked:
- 7 polyphones;
- 7 "adds Han" in bodies;
- 1 Han run count in `characters.01.why`.

None needs a change.

## 1. What I checked

- **Every row of every file:**
  - 886 cards;
  - 127 dialogues, 287 examples, 231 sentences, 28 patterns;
  - 84 checks and 392 practice items. Each was read against `target/zh/practice.jsonl`: `a`, `x`, `alt`, `strict` and the options;
  - 31 decks, 6 groups, 11 labels, 28 lesson rows, all 28 lesson bodies, `ui.json`.
- **Hán Việt:** every (character, reading) pair on the 641 decided cards was checked against an opened page. That is 496 pairs and 493 characters, listed in the appendix.
  - A script cross-checked every card reading against those pages. Result: 496 / 496 match.
- **Consistency:**
  - A script collected every Chinese sentence glossed in more than one place (cards, dialogue halves, examples, sentences) and listed the ones glossed differently. Nine came up, and each is decided below.
  - Deck meanings: no duplicates in any deck (case-insensitive, trimmed).
  - Options: no two options identical in any question.
  - Deck labels: unique.
- **Old-style tone placement** (*hoà, khoá, thuỷ, toạ*): a grep finds none left in readings or prose. Every hit was *quý*, which is correct.

## 2. Decisions table (every point of `docs/briefs/vi-zh-review-open.md`)

| # | Point | Decision | Rows |
|---|---|---|---|
| 1.1 | w2's readings picked from a Wiktionary mirror (午 晚 期 鐘 秋 冬 份 遍 套 碗 支 帥 看 聽 輕 甜 髮 笑 晴 淨 般 慢 最 比 康 健 厲 涼 壞 楚 離 裏 候 旁 亮 難 惜 李 娜) | Every one is confirmed on hvdic.thivien.net. Highlights: 晴 *tình* ✓, 淨 *tịnh* ✓, 般 *ban* ✓, 遍 *biến* ✓, 帥 *soái* ✓ (soái, suý, suất), 離 *ly* ✓, 難 *nan* ✓, 娜 *na* ✓. **No change.** | — |
| 1.2 | 层 «tằng» marked same | hvdic gives only *tằng*, and Vietnamese says *tầng*. **Downgraded to `none`**; the note now names *tầng*. | c0774 |
| 1.3 | 安静 «yên tĩnh» | hvdic 安 lists **an, yên**, so *yên* is a listed Hán Việt reading. The hvdic word page for 安靜 gives *an tĩnh*, but Vietnamese says *yên tĩnh*. **Kept** `same` / *yên tĩnh*. The 安 an / yên warning is accepted. | c0560 |
| 1.4 | Skipped: 苹果, 矮, 错 / 不错, 比较, 眼睛, 有空, 你 他 她 它 您 | **错 → `none` «thác»** (hvdic: thác = sai sót; thố = sắp đặt), and **不错 → `none` «bất thác»**. Everything else stays `skip`, because the page gives several readings without saying which one fits this meaning: 苹 biền / bình / phanh / tần; 矮 nuỵ / oải / ải; 較 giác / giáo / giảo / giếu; 睛 tinh / tình. The pronouns have no useful reading. | c0567, c0568 |
| 1.5 | w1's calls | Every reading is confirmed. Two hvUse calls changed, the rest are kept:<br>• Kept: 对 shifted *đối*; 喝 *hát* (hvdic: hát, hạt, ái, ới) with its "chỉ trùng âm" note; 女儿 shifted *nữ nhi*; 包子 none «bao tử» with its homophone note; 老师 none *lão sư*; 先生 shifted *tiên sinh*; 事情 same *sự tình*; 路 same *lộ*; 游戏 shifted *du hí*; 包 shifted *bao*; 票 same *phiếu*; 想 shifted *tưởng*; 辣 none *lạt* with its Southern-*lạt* note; 姐姐 *thư thư* (hvdic 姐: thư, tả).<br>• **可以 `same` → `shifted`**: Vietnamese *khả dĩ* means "acceptable" (giải pháp khả dĩ), not "may". | c0440 |
| 1.6 | w2's false friends | All are kept as `shifted`, and each note was checked: 方便, 高兴, 快乐, 明白, 红, 可能, 非常, 自己, 大家, 中间, 斤, 开心. | — |
| 1.7 | Tone placement | Already all new-style (hòa, khóa, tọa, thụy, hỏa, thủy). Nothing to change. | — |
| 1.8 | *i / y* spelling | Mixed: hy, kỳ, kỷ, lý, mỹ (y) next to hỉ, tỉ (i). hvdic lists both forms for each of these, so I did not churn them. A native can decide (item 16). | — |
| 2.1 | 我要一杯咖啡 | **«Cho tôi một cốc cà phê.»** everywhere. s0164 changed; the want-can body still explains 要 = muốn. | s0164 |
| 2.2 | g009 «Được!» vs 好 «tốt» | Both kept. In g009, 好 answers 好吗？, so it means OK; the card means "good". | — |
| 2.3 | g062 «Bạn bị làm sao?» | Kept. The card adds the second reading «/ Đau ở đâu?»; the dialogue keeps the line that fits. | — |
| 2.4 | 两点十分 | Card c0190 changed from «2:10» to **«hai giờ mười phút»**, matching s0143. c0191 «8 giờ 15 phút» changed to «tám giờ mười lăm phút», so the deck reads alike. | c0190, c0191 |
| 2.5 | 妈 «(như trong 妈妈)»; 服务员; 不要辣的; 好吧; 您贵姓 | Checked: consistent everywhere. The card labels in brackets («(gọi nhân viên phục vụ)», «(hỏi người lớn)», «(đáp khiêm tốn)») are dropped only inside dialogues, which is intended. | — |
| 2.6 | Prompt quoting | w4's “…” changed to **«…»** (w3's style) in every `q` / `p` / `why` / `hint` / option of practice and checks for lessons 15–28. Bodies are unchanged. | 67 practice rows, 34 check rows |
| 2.7 | «Lỗi thường gặp:», «hàng phím dấu thanh» | Already uniform (pinyin, tones and every tip). | — |
| 2.8 | Cross-references | shi: «bài 3, “Biến điệu”» and «bài 17, “Gia đình và tuổi”». The others already match their titles (pronouns / family → bài 12; zai → bài 13; word-order → bài 24, short title; ye-dou → «bài 23», number only, to avoid adding Han). | shi.html |
| 3 | Prefilled rows rewritten | w1's 21 `pre` notes and w2's c0564, c0607, c0615 are correct and kept. numbers.03 / .04 `1.005` / `1.500` are correct Vietnamese format. | — |
| 4.1 | «một trăm hai» = 120, «ba nghìn năm» (numbers) | Kept: the colloquial readings are standard. Listed for a native (item 10). | — |
| 4.2 | Couplets and boards in phồn thể (characters) | Softened: «cũng là» → «**thường là** chữ phồn thể». | characters.html |
| 4.3 | «Tiếng Trung chỉ có một lời tạm biệt» | Untrue (拜拜 exists). Rewritten in greetings.html and card c0071: «Người đi hay người ở lại đều nói 再见 / câu này như nhau». | greetings.html, c0071 |
| 4.4 | *động từ năng nguyện, câu liên động, động từ ly hợp* | Kept. A web search shows these are the terms Vietnamese Chinese-teaching sites use: PREP, «Động từ năng nguyện», https://prepedu.com/vi/blog/dong-tu-nang-nguyen; PREP, «động từ li hợp», https://prepedu.com/vi/blog/dong-tu-li-hop. PREP spells *li*; the course spells *ly*, which is also correct. | — |
| 4.5 | «nhà có bốn miệng ăn» (口) | Kept: *miệng ăn* is a set Vietnamese expression. | — |
| 4.6 | *hay / hoặc* split | Kept. The body already hedges it («gần giống», «thường»). | — |
| 4.7 | Culture notes | • c0063: softened to «khá giống người Việt… có khi nghe khách sáo».<br>• c0545 (dạo này béo ra): kept, already hedged.<br>• c0309 (Ăn cơm chưa?): kept, it is the profile's bridge.<br>• Scan-to-pay (food): kept. | c0063 |
| 5.1 | 很 glossed without «rất» | Kept (profile §5.4): «Cô ấy cao.», «Tôi bận.». Bare adjectives are natural Vietnamese; where the line needs weight, the writers used «lắm» or «quá». | — |
| 5.2 | 了 with «rồi» on past-time sentences | s0174 changed to **«Hôm qua tôi đã đi Thượng Hải rồi.»**: *đã … rồi* keeps the 了 cue and reads more naturally with *hôm qua*. g078 already reads «đã sống … năm năm rồi». No line has *đã* alone for 了. | s0174 |
| 5.3 | «tôi» to a teacher (g060, g082) | Kept. Profile §1 bans *em* in the course voice, and the speaker is an adult learner. vi-ko drops the pronoun («Thưa thầy, cho hỏi một câu ạ»), but these two lines need an "I". Item 4 for a native. | — |
| 5.4 | *ngài* for 您贵姓 | Kept «Ngài họ gì ạ?» / «Xin hỏi, ngài họ gì ạ?». The Chinese is itself very formal, and no gender is known. Item 5. | — |
| 5.5 | 老师 → *thầy* | Kept («thầy giáo, cô giáo», «Chào thầy (cô) ạ!»). | — |
| 5.6 | mình / cậu in romantic lines | Settled: **mình + bạn** for lines to someone not yet close (opening lines, asking out), **mình + cậu** for confessions and lines between people already seeing each other. This matches vi-ko's romantic rule. | — |
| 5.7 | 车 → «ô tô» | Kept (card «xe; ô tô»; sentences «ô tô»). | — |
| 5.8 | «Thế à?», «Đâu có, đâu có.», «Bạn khéo miệng quá!» | Kept. Natural; *dẻo miệng* is listed as an alternative for a native (item 7). | — |
| 5.9 | Level title *Tiền bối*; deck label «Bẫy thường gặp» | Kept (vi-ko reuse; profile §3.5). | — |
| 6 | ba-bie.12 / .13 and 咱们 | For the lead (target half). Not touched. | — |

**Other fixes found in the read:**

| Fix | Rows |
|---|---|
| "miền Bắc / miền Nam" would read as Vietnam's regions. Now «miền Bắc / miền Nam Trung Quốc» in notes and bodies, and «(giọng phương Bắc)» in the 这儿 / 那儿 / 哪儿 meanings. | c0637, c0645, c0646, c0648, c0712, question-words.html |
| 最 note: «(chỉ để dễ nhớ)» → «như trong «tối đa»». | c0606 |
| «Đây là quần áo rất đắt.» → «… rất đắt tiền.» | s0099 |
| word-order.14 prompt: «lên lớp» (said of the teacher) → «vào học», as card c0249 has it. | word-order.14 |

## 3. Hán Việt audit

- **Pairs checked:** 496 (character, reading) pairs on 641 decided cards, covering 493 distinct characters. After the review: 547 readings in all.
  - 487 characters were checked on hvdic.thivien.net character pages (Âm Hán Việt line, or the headword where the page printed no labelled line: 支 壞 頭 姨 心 界 害 舊).
  - Merged Simplified forms were checked on the Traditional page this word uses: 發 / 髮, 後, 乾, 面 / 麵, 裏, 臺, 隻 / 只, 機, 鐘, 準, 種, 陰, 為.
  - 前 *tiền*, 右 *hữu*, 明 *minh*: en.wiktionary (hvdic refused access at the time).
  - 四 *tứ* and 然 *nhiên*: hvdic word pages 四方 *tứ phương* and 當然 *đương nhiên*.
- **Wrong readings found:** **0.** All 496 card readings appear on the page.
- **Readings added:** 2, both from `skip` to `none`: 错 *thác*, 不错 *bất thác*.
- **hvUse changed:** 3.
  - 层 `same` → `none`;
  - 可以 `same` → `shifted`;
  - 错 / 不错 `skip` → `none` (counted with the two readings above).
- **Downgraded to skip:** 0.
- **Polyphones** (all legitimate, checked on the page): 好 hảo / hiếu (爱好), 只 chích (隻) / chỉ, 面 miến (麵) / diện, 行 hành / hàng, 乐 nhạc / lạc, 觉 giác / giáo (睡觉), 安 an / yên.
- **`trad`:** every printed Traditional form is the right one for this word: 乾淨, 麵條, 頭髮, 後, 裏, 臺, 層, 種, 鐘, 陰, 為, 帥, 給, 從, 離.
- **Names:**
  - 王 Vương, 李 Lý, 陳 Trần, 張 Trương, 偉 vĩ, 娜 na, 静 tĩnh: all on hvdic;
  - 王明 Vương Minh, 张伟 Trương Vĩ, 陈静 Trần Tĩnh, 李娜 Lý Na;
  - places 北京 Bắc Kinh, 上海 Thượng Hải, 西安 Tây An, 天安门 Thiên An Môn, 成都 Thành Đô (characters as checked);
  - 长城 «Vạn Lý Trường Thành» is the usual Vietnamese name.
- **Unverified:** **none.**

## 4. Rows changed per file

| File | Rows |
|---|---|
| cards.jsonl | 14 (c0063 c0071 c0190 c0191 c0440 c0567 c0568 c0606 c0637 c0645 c0646 c0648 c0712 c0774) |
| sentences.jsonl | 3 (s0099 s0164 s0174) |
| practice.jsonl | 67: 66 quote-style only, plus word-order.14 (quotes and cue) |
| checks.jsonl | 34 (quote style only) |
| lessons/*.html | 4 files: greetings (1), shi (2), question-words (2), characters (1) |
| dialog, examples, patterns, decks, groups, labels, lessons.jsonl, ui.json | 0 |

## 5. Final deck labels (31) and group names (6)

All are unchanged from the merge (permanent progress keys).

Decks:
1. Âm pinyin
2. Cặp thanh điệu
3. Chữ Hán đầu tiên
4. Chào hỏi & lễ phép
5. Gia đình & mọi người
6. Giới thiệu bản thân
7. Số & tiền
8. Lượng từ
9. Ăn uống
10. Mua sắm
11. Thời gian & ngày tháng
12. Hỏi chỗ, hỏi đường
13. Du lịch & đi lại
14. Công việc & học tập
15. Sức khỏe & nhờ giúp
16. Miêu tả
17. Câu hỏi & từ nối
18. Bẫy thường gặp
19. Danh từ thông dụng
20. Động từ thông dụng
21. Tính từ thông dụng
22. Trạng từ thông dụng
23. Đại từ thông dụng
24. Giới từ thông dụng
25. Từ nối thông dụng
26. Từ cảm thán thông dụng
27. Từ hữu ích
28. Lượng từ mở rộng
29. Trợ từ thông dụng
30. Lời khen
31. Tán tỉnh

Groups:
1. Âm và chữ
2. Bước đầu
3. Từ ngữ hằng ngày
4. Đi đây đi đó
5. Hội thoại
6. Từ vựng cốt lõi

Lesson titles:
- The 14 roadmap titles match profile §3.5 exactly.
- `measure` is «15 · Lượng từ: 个, 本, 杯».
- `ui.json`: the 12 keys exist, name Chinese, and the grammar-search example is «ví dụ 了 hoặc 'muốn'».

## 6. For a native speaker (20)

1. 安静 «yên tĩnh» given as the Hán Việt reading (hvdic lists *yên* for 安; its word page says *an tĩnh*).
2. 层 now `none`: «tằng», with the note «tiếng Việt nói *tầng*».
3. 可以 note: is «khả dĩ = có thể chấp nhận được» right?
4. «tôi» to a teacher (g060 «Thưa thầy Vương, tôi vào được không ạ?», g082): acceptable for an adult learner, or should the line drop the pronoun?
5. «Ngài họ gì ạ?» for 您贵姓: too formal?
6. Flirting deck: mình + bạn (early lines) vs mình + cậu (close lines). Natural?
7. «Bạn khéo miệng quá!» (你的嘴真甜) vs «Bạn dẻo miệng quá!».
8. «Hôm qua tôi đã đi Thượng Hải rồi» (đã … rồi), next to bare «rồi» in «Tôi mua ba quyển sách rồi».
9. 很 glossed bare: «Cô ấy cao.», «Món này cay.», «Ở đây náo nhiệt.»
10. «một trăm hai» = 120 and «ba nghìn năm» = 3.500 as parallels to 一百五 and 三块五.
11. «nhà có bốn miệng ăn» as the bridge for 口.
12. *hay* (questions) vs *hoặc* (statements) as a Vietnamese tendency.
13. «(giọng phương Bắc)» in the meanings of 这儿 / 那儿 / 哪儿.
14. Level titles «Lữ khách», «Nhà thám hiểm», «Tiền bối» (for "Speaker").
15. Deck label «Từ hữu ích» (Top words), next to the other «… thông dụng» labels.
16. *i / y* in readings: hy, kỳ, kỷ, lý, mỹ vs hỉ, tỉ. Should they be unified?
17. «tượng binh mã» for 兵马俑, and «gà Kung Pao» for 宫保鸡丁 (or *gà Cung Bảo*?).
18. «Tiểu Lý» for 小李 (g014): natural in a gloss?
19. c0063 «người Trung Quốc ít nói cảm ơn… khá giống người Việt»: true to Vietnamese experience?
20. c0306 / bu-mei «(Hôm đó) tôi không đi» for 我没去, against «Tôi đã không đi».

## 7. Edits per writer (all opus)

- **w1:** 5 rows (c0063 c0071 c0190 c0191 c0440), of which 1 hvUse change; Hán Việt readings changed: 0.
- **w2:** 9 rows (c0567 c0568 c0606 c0637 c0645 c0646 c0648 c0712 c0774), of which 3 hvUse changes and 2 readings added from `skip`; Hán Việt readings changed: 0 (none wrong).
- **w3:** 1 row (s0099) + 6 edits in 4 bodies (greetings, shi, question-words, characters); Hán Việt readings changed: 0 (w3 has no cards).
- **w4:** 3 rows of content (s0164, s0174, word-order.14) + 100 rows of quote style only (66 practice, 34 checks); Hán Việt readings changed: 0 (w4 has no cards).

## Appendix: readings as opened (hvdic.thivien.net unless marked)

The appendix gives each character with the readings its page lists; the card uses one of them.

一 nhất · 七 thất · 万 mặc, vạn · 丈 trượng · 三 tam, tám, tạm · 上 thướng, thượng · 下 há, hạ · 不 bưu, bất, bỉ, phi, phu, phầu, phủ · 世 thế · 东 đông · 丢 đâu · 两 lưỡng, lượng, lạng · 个 cá, cán · 中 trung, trúng · 为 vi, vy, vị · 久 cửu · 樂 lạc, nhạc, nhạo · 九 cưu, cửu · 習 tập · 書 thư · 買 mãi · 事 sự · 二 nhị · 五 ngũ · 交 giao · 京 kinh, nguyên · 人 nhân, nhơn · 今 kim · 介 giới · 從 thung, tung, tòng, tùng, túng, tụng · 付 phó, phụ · 以 dĩ · 件 kiện · 休 hu, hưu · 會 cối, hội · 傘 tán, tản · 但 đán, đãn · 位 vị · 住 trú, trụ · 体 bổn, thể · 作 tá, tác · 便 tiện · 做 tố · 兒 nghê, nhi · 元 nguyên · 先 tiên, tiến · 全 toàn · 八 bát · 公 công · 六 lục · 關 loan, quan · 興 hưng, hứng · 其 cơ, ki, ky, kì, kí, ký, kỳ · 再 tái · 寫 tả · 冷 lãnh · 準 chuyết, chuẩn · 出 xuý, xuất, xích · 分 phân, phần, phận · 剛 cang, cương · 別 biệt · 到 đáo · 刻 hặc, khắc · 前 tiền (Wiktionary) · 辦 biện, bạn · 加 gia · 動 động · 包 bao · 北 bắc, bối, bội · 匙 thi · 醫 y, ỷ · 十 thập · 千 thiên · 午 ngọ · 半 bán · 單 thiền, thiện, đan, đơn, đạn · 賣 mại · 危 nguy, quỵ · 厲 lại, lệ · 廁 trắc, xí · 廚 trù · 去 khu, khứ, khử · 又 hữu, hựu · 友 hữu · 雙 song · 發 bát, phát · 髮 bị, phát · 口 khẩu · 句 câu, cú, cấu · 隻 chích · 只 chích, chỉ · 叫 khiếu · 可 khả, khắc · 臺 thai, đài · 右 hữu (Wiktionary) · 號 hiệu, hào, hạo · 司 ti, ty, tư · 吃 cật, ngật · 同 đồng · 名 danh · 後 hấu, hậu · 吻 vẫn · 週 chu · 和 hoà, hoạ, hồ · 鹹 giảm, hàm · 哥 ca · 哭 khốc · 唱 xướng · 商 thương · 喜 hi, hí, hý, hỉ, hỷ · 喝 hát, hạt, ái, ới · 四 tứ (word page 四方) · 回 hối, hồi · 因 nhân · 園 viên · 困 khốn · 國 quốc · 圖 đồ · 在 tại · 地 địa · 場 tràng, trường · 壞 hoài, hoại · 坐 toạ · 塊 khối · 城 giàm, thành · 備 bị · 夏 giá, giạ, hạ · 外 ngoại · 多 đa · 大 thái, đại · 天 thiên · 夫 phu, phù · 頭 đầu · 套 sáo · 女 nhữ, nứ, nữ, nự · 奶 nãi · 好 hiếu, hảo · 如 như · 媽 ma, mụ · 妹 muội · 妻 thê, thế · 始 thuỷ, thí, thỉ · 姐 thư, tả · 姨 di · 婆 bà · 婚 hôn · 子 tí, tý, tử · 字 tự · 學 học · 孩 hài · 安 an, yên · 完 hoàn · 定 đính, định · 宜 nghi · 寶 bảo, bửu · 實 chí, thật, thực · 客 khách · 室 thất · 害 hại, hạt · 家 cô, gia · 容 dong, dung · 對 đối · 小 tiểu · 少 thiếu, thiểu · 層 tằng · 居 cư, ky, kí, ký · 山 san, sơn · 歲 tuế · 工 công · 左 tá, tả · 差 sai, si, soa, sái, ta, tha · 己 kỉ, kỷ · 已 dĩ · 市 thị · 帥 soái, suý, suất · 師 sư · 希 hi, hy · 帶 đái, đới · 幫 bang · 常 thường · 乾 can, càn, kiền · 年 niên · 床 sàng · 應 ưng, ứng · 店 điếm · 康 khang, khương · 開 khai · 弟 đễ, đệ · 張 trương, trướng · 當 đang, đáng, đương · 影 ảnh · 往 vãng · 得 đắc · 微 vi, vy · 心 tâm · 忘 vong, vô, vương · 忙 mang · 快 khoái · 怕 phách, phạ · 思 tai, tư, tứ · 總 tông, tổng · 息 tức · 情 tình · 惜 tích · 想 tưởng · 意 y, ý · 慢 mạn · 懂 đổng · 戲 hi, huy, hí, hô, hý · 我 ngã · 或 hoặc, vực · 戶 hộ · 房 bàng, phòng · 所 sở · 手 thủ · 才 tài · 打 tá, đả · 找 hoa, qua, trảo · 护 hộ · 擔 đam, đảm · 拐 quải · 拿 nã · 換 hoán · 支 chi · 放 phóng, phương, phỏng · 教 giao, giáo · 文 văn, vấn · 斤 cân, cấn · 新 tân · 方 bàng, phương · 旁 banh, bàng, bạng, phang · 旅 lữ · 日 nhật, nhựt · 舊 cựu · 早 tảo · 時 thì, thời · 明 minh (Wiktionary) · 易 dị, dịch · 星 tinh · 春 xuân · 昨 tạc · 是 thị · 晚 vãn · 晴 tình · 暖 huyên, noãn · 最 tối · 月 nguyệt · 有 dựu, hữu, hựu · 朋 bằng · 服 phục · 望 vọng · 期 cơ, ki, ky, kì, kỳ · 木 mộc · 末 mạt · 本 bôn, bản, bổn · 机 cơ, ki, ky, kì, kỷ · 李 lí, lý · 條 thiêu, điêu, điều · 來 lai, lãi · 杯 bôi · 板 bản · 林 lâm · 果 quả · 校 giáo, hiệu, hào · 樣 dạng · 桌 trác · 森 sâm · 椅 kỷ, y, ỷ · 楚 sở · 次 thứ, tư · 歡 hoan · 歌 ca · 正 chinh, chánh, chính · 步 bộ · 死 tử · 段 đoàn, đoán, đoạn · 母 mẫu · 每 mai, môi, mỗi · 比 bì, bí, bỉ, tỉ, tỵ, tỷ · 毛 mao, mô · 氣 khí, khất · 水 thuỷ · 漢 hán · 湯 sương, thang, thãng · 汽 hất, khí, ất · 沒 một · 油 du · 泳 vịnh · 洗 tiển, tẩy · 清 sảnh, thanh · 渴 hạt, khát, kiệt · 游 du · 漂 phiêu, phiếu, xiếu · 澡 tháo, táo · 火 hoả · 灯 đinh, đăng · 點 điểm · 煙 yên · 烤 khảo · 熱 nhiệt · 然 nhiên (word page 當然) · 照 chiếu · 愛 ái · 父 phụ, phủ · 爺 da, gia · 爸 ba, bả · 片 phiến · 牛 ngưu · 物 vật · 特 đặc · 狗 cẩu · 貓 miêu · 玩 ngoạn · 現 hiện · 班 ban · 理 lí, lý · 瓶 bình · 甜 điềm · 生 sanh, sinh · 用 dụng · 電 điện · 男 nam · 界 giới · 病 bệnh · 瘦 sấu · 白 bạch · 百 bá, bách, mạch · 鹽 diêm, diễm · 盤 bàn · 直 trị, trực · 看 khan, khán · 真 chân · 眼 nhãn, nhẫn · 睡 thuỵ · 知 tri, trí · 短 đoản · 碼 mã · 碗 oản, uyển · 禮 lễ · 票 phiêu, phiếu, tiêu · 離 li, ly, lệ · 秋 thu, thâu · 種 chúng, chủng · 租 tô · 穿 xuyên, xuyến · 窗 song · 站 trạm · 笑 tiếu · 筆 bút · 第 đệ · 等 đẳng · 簡 giản · 算 toán · 米 mễ · 糖 đường · 累 loã, luy, luỵ, luỹ · 紅 công, hồng · 紙 chỉ · 紹 thiệu · 經 kinh · 結 kế, kết · 給 cấp · 綠 lục · 網 võng · 美 mĩ, mỹ · 老 lão · 考 khảo · 者 giả · 聰 thông · 肉 nhụ, nhục, nậu · 胖 bàn, phán · 能 nai, năng, nại · 腦 não · 自 tự · 舒 thư · 舞 vũ · 般 ban, bàn, bát · 色 sắc · 節 tiết, tiệt · 苦 cổ, khổ · 英 anh · 茶 trà · 藥 dược · 菜 thái · 藍 lam · 蛋 đản · 行 hàng, hành, hãng, hạng, hạnh · 衣 y, ý · 被 bí, bị, phi · 西 tây, tê · 要 yêu, yếu · 見 hiện, kiến · 視 thị · 覺 giác, giáo · 認 nhận · 让 nhượng · 記 kí, ký · 識 chí, thức · 詞 từ · 試 thí · 話 thoại · 該 cai · 語 ngứ, ngữ, ngự · 說 duyệt, thoát, thuyết, thuế · 請 thỉnh, tình, tính · 讀 đậu, độc · 課 khoá · 謝 tạ · 貴 quý · 走 tẩu · 起 khỉ, khởi · 超 siêu · 跑 bào · 路 lạc, lộ · 跳 khiêu, đào · 身 quyên, thân · 車 xa · 輕 khinh, khánh · 輛 lượng, lạng · 辣 lạt · 邊 biên · 過 qua, quá · 迎 nghinh, nghênh, nghịnh · 運 vận · 近 cấn, cận, ký · 進 tiến, tấn · 遠 viến, viển, viễn · 送 tống · 遍 biến · 道 đáo, đạo · 鄰 lân · 部 bẫu, bộ · 酒 tửu · 酸 toan · 重 trùng, trọng · 裏 lí, lý · 鐘 chung · 鑰 dược, thược · 錢 tiền, tiễn · 鐵 thiết · 銀 ngân · 鍋 oa · 長 tràng, trướng, trường, trưởng, trượng · 門 môn · 問 vấn · 間 gian, gián, nhàn · 鬧 nháo, náo · 阴 âm, ấm · 阿 a, á, ốc · 附 phụ · 院 viện · 險 hiểm · 難 na, nan, nạn · 雨 vú, vũ, vụ · 零 linh · 需 nhu, nhuyễn, noạ, tu · 靜 tĩnh, tịnh · 非 phi, phỉ · 面 diện, miến · 麵 miến · 鞋 hài · 音 âm, ấm · 題 đề, đệ · 顏 nhan · 飛 phi · 飯 phãn, phạn · 餃 giáo, giảo, kiểu · 餓 ngã, ngạ · 館 quán · 香 hương · 馬 mã · 罵 mạ · 高 cao · 魚 ngư · 鳥 điểu · 雞 kê · 鴨 áp · 麻 ma · 黃 hoàng, huỳnh · 黑 hắc · 淨 tịnh · 涼 lương, lượng · 亮 lương, lượng · 份 bân, phân, phần · 冬 đông · 健 kiện · 聽 thinh, thính · 錯 thác (sai sót), thố (sắp đặt) · 苹 biền, bình, phanh, tần · 矮 nuỵ, oải, ải · 較 giác, giáo, giảo, giếu · 睛 tinh, tình · 娜 na, nã, nả · 偉 vĩ · 陳 trần, trận · 王 vương, vượng.
