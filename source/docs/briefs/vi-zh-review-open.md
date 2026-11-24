# vi-zh: lead's merge results and the writers' open points (2026-11-24)

Merged ONCE by the lead (`mk_native.js vi --target zh --merge`): never merge again; edit only the merged files in `tools/halves/native/vi/zh/`. `validate.js vi zh --all`: errors 0, warnings 15 (7 "read two ways": 面 觉 行 安 好 只 乐; "adds Han" in lessons you / tones / time; one Han run count in practice characters.01.why). Hán Việt: 641 of 641 decided, 545 readings.

## 1. Hán Việt (the worst error in this course is a wrong reading: re-check ALL by an opened page)
- **w2's sourcing is weaker than w1's.** w1 read hvdic.thivien.net pages (`work/hv-w1.tsv`). w2 could not reach hvdic and used a Wiktionary mirror; for these characters the page listed mixed "Hán Nôm readings" and the writer PICKED the Sino-Vietnamese-looking one: 午 晚 期 鐘 秋 冬 份 遍 套 碗 支 帥 看 聽 輕 甜 髮 笑 晴 淨 般 慢 最 比 康 健 厲 涼 壞 楚 離 裏 候 旁 亮 難 惜 李 娜. Check every one on hvdic.thivien.net (or another page that labels the Hán Việt reading); especially 晴 tình, 淨 tịnh, 般 ban, 遍 biến, 帥 soái, 離 ly, 難 nan, 层 «tằng» marked same, 安静 «yên tĩnh» (is *yên* a Hán Việt reading or should it be *an tĩnh*?).
- Skipped for lack of a confirmed reading (decide: fill from a page, or leave skipped): 苹果 (bình / tần), 矮 (nụy / oải / ải), 错 / 不错 (thác / thố), 眼睛, 有空, 比较 (giác / giảo), pronouns 你 他 她 它 您.
- w1's calls to check: 对 shifted (đối), 喝 «hát» (sound coincidence note), 女儿 nữ nhi, 包子 «bao tử», 老师 none (lão sư), 先生 tiên sinh, 事情 sự tình, 路 lộ, 游戏 du hí, 包 bao, 票 phiếu, 想 tưởng, 可以 khả dĩ, 辣 «lạt», kinship «thư thư» for 姐姐. w2's false friends: 方便 高兴 快乐 明白 红 可能 非常 自己 大家 中间 斤 开心.
- Tone placement: w1 wrote the new style (hỏa, thủy). Make w2's readings and all prose consistent with it.

## 2. One gloss per repeated sentence (`work/REPEATS.md`, `work/NOTES-w*.md`)
Writers finished at different times; harmonise across cards, dialogues, examples, lessons, practice:
- 我要一杯咖啡: w2 (listed first) «Cho tôi một cốc cà phê.»; w4 wrote «Tôi muốn một cốc cà phê».
- g009 «Được!» (w2) vs w1's «tốt»; g062 «Bạn bị làm sao?» (w2) vs w1's gloss.
- 两点十分: card «2:10» vs w4 «hai giờ mười phút». 妈 keeps «(như trong 妈妈)».
- 服务员 «Xin lỗi! (gọi nhân viên phục vụ)»; 不要辣的 «Không lấy cay nhé»; 好吧 «Thôi được»; 您贵姓 «Ngài họ gì ạ?» / «Xin hỏi, ngài họ gì ạ?».
- Prompt quoting: w3 uses «…» =, w4 uses “…” =: unify. Tip label «Lỗi thường gặp:». Accent-bar term «hàng phím dấu thanh» (w2 pinyin, w3 tones).
- Cross-references between lessons («bài 3 (biến điệu)», «bài 17 (gia đình)», «bài 23», «bài 24»): make them match the final titles.

## 3. Prefilled rows the writers rewrote (keep their Chinese)
w1: 21 `pre` card notes on Hán Việt cards (e.g. c0457, c0486, c0411). w2: c0564, c0607, c0615. w3: numbers.03 o[2] and numbers.04 o[3] now `1.005` / `1.500`.

## 4. Claims from a writer's own knowledge (open a page or soften)
«một trăm hai» = 120 and «ba nghìn năm» parallels (numbers); chữ Hán on Vietnamese couplets and boards are phồn thể (characters); «Tiếng Trung chỉ có một lời tạm biệt» (greetings; 拜拜 exists); terms *động từ năng nguyện*, *câu liên động*, *động từ ly hợp*; «nhà có bốn miệng ăn» for 口; *hay* vs *hoặc* split (and-or); culture notes c0063, c0545, c0309; scan-to-pay sentence (food).

## 5. Register and wording
很 sentences glossed without «rất» (reads bare?); 了 with «rồi» on past-time sentences («Hôm qua tôi đi Thượng Hải rồi», g078 «đã sống … năm năm rồi»): never *đã* alone (profile §5.4); «tôi» to a teacher (g060, g082); *ngài* for 您; 老师 → *thầy*; mình/cậu in romantic lines; 车 → «ô tô»; «Thế à?», «Đâu có, đâu có.», «Bạn khéo miệng quá!»; level title *Tiền bối*; deck label «Bẫy thường gặp».

## 6. For the lead (do not fix in the native half)
`ba-bie.12` / `.13` accept only 我们 where 咱们 is also right: the lead adds it in the Chinese half.

End REVIEW.md with one line per writer (w1–w4, all opus): the number of edits you had to make to that writer's rows, and the count of Hán Việt readings you changed.
