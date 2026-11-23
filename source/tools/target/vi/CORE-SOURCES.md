# Core words, Flirting and Compliments for en-vi: sources, order and skips

Writer CORE-VI, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (eleven Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments). The decks were added to the end of `profile.json`. No existing file was changed.

Variety: Northern (Hanoi), as the course profile sets. Southern words appear only in notes ("South: …"). Tone marks use the traditional placement (*khỏe, hòa, chìa khóa*), and every target is NFC. A build script checks both.

## 1. Frequency source actually opened

**Read this first.** One real ranking was opened. Its entries are almost all **single syllables** (the document does not define its tokens), and it comes from **written** text. Only single-syllable cards could get a rank from it. Every multi-syllable card (*bây giờ, thời gian, mặc dù*), every interjection, and the whole Flirting and Compliments decks are ordered by the writer's judgement.

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| [Corpora of Vietnamese Texts (CVT), combined word frequency list](https://vnspeech.sdsu.edu/wp-content/uploads/2024/01/Research-Corpora-Word-Lists-CVT-word-freq-list.pdf), hosted by the SDSU Vietnamese speech lab | Pham, G., Kohnert, K. & Carney, E. (2008), *Corpora of Vietnamese Texts: Lexical effects of intended audience and publication place*, Behavior Research Methods 40, 154–163. Newspapers plus children's books, 1,055,617 tokens. The document does not define its tokens; the entries read are almost all single syllables, plus some names, abbreviations and numbers. The list writes Vietnamese in an ASCII code (digits for tones, `dd` for đ, and so on). | None is stated. The document asks to be cited as above. Only rank positions were used; no text was copied. | **Rank anchors for single-syllable cards.** Ranks 1–600 were read. |

**How the ranks were read.** Downloading the PDF failed (the proxy returned 403), so the list was read through the web-fetch tool in three passes (ranks 1–120, 121–320 and 321–600). The tool also turned the ASCII code into normal spelling, as a best effort. So the ranks are **approximate**:
- a few syllables appear twice, probably because the source spells them two ways (*công* 22 and 168, *được* 11 and 266, *đây* 91 and 475, *bản*, *báo*, *đối*, *qua*, *loại*, *bất*, *đầu*, *vận*, *dụng*, *hội*). The first position was used;
- no word was checked against the PDF by eye.

The 600 syllables used are kept in the writer's scratch folder (`ranks.txt`). They are not in this course folder.

**Sort rule.** The build script applies this rule to every Core words deck:
1. cards whose target is one syllable and in the top 600 come first, in rank order;
2. the other cards follow in the writer's judgement order;
3. in `Top words`, the numbers 11–20, the number forms *lăm, mốt, tư*, the days and the time words come last, in counting or clock order.

**Syllable ranks overruled.** These syllables are in the top 600 mostly as part of another word, so they were treated as unranked and placed by judgement: *cơ* (in *cơ quan*), *viên* (in *nhân viên*), *vị* (in *đơn vị*), *bộ* (also "ministry"), *tự* (in *tự do*), *hồ* (in *Hồ Chí Minh*), *tin* (in *tin tức*; the card is the verb "believe"), *đông* (also "east"). Other ranks are inflated in the same way and were left as they are. For example, *ông* 21 includes "Mr." in the news, *đường* includes "sugar", and *hàng* includes "row" and "goods".

**Cards with a source rank** (approximate CVT rank in brackets). All other cards are ordered by judgement.
- **Top nouns:** nước 41, đầu 59, số 63, việc 64, trường 95, điều 103, cách 105, hàng 106, báo 139, tiếng 164, đường 173, giá 178, lần 179, mặt 203, tên 232, bên 260, chuyện 261, cây 276, nơi 288, phòng 294, tiền 312, bệnh 316, tuổi 330, điện 333, ảnh 358, phố 359, máy 366, bài 367, khách 404, cửa 409, câu 427, đời 456, biển 495, vợ 510, chồng 562, cha 585, đồ 593. Judgement from *chỗ* on, with everyday food, clothes and places first and then compound nouns.
- **Top verbs:** có 4, là 5, được 11, ra 16, đến 18, vào 19, về 25, làm 31, phải 33, bị 39, nói 46, lên 55, học 75, biết 81, thấy 86, nhận 124, muốn 187, cần 207, tìm 220, sống 226, đưa 243, xuống 247, hỏi 252, lấy 257, nhìn 270, gọi 277, trả 283, đánh 284, nghe 296, chơi 319, giúp 321, xem 324, thích 341, kể 342, xin 349, yêu 357, mất 364, đổi 373, mang 382, gặp 391, chết 395, nghĩ 400, đứng 414, mở 424, chịu 447, dùng 449, giữ 472, đặt 499, viết 517, lo 524, sợ 542, ngồi 556, chuyển 572, hiểu 574. Judgement from *uống* on.
- **Top adjectives:** mới 100, khác 108, cao 136, lớn 147, mạnh 248, trẻ 295, khó 343, vàng 399, dài 403, tốt 410, đúng 421, xa 473, rõ 483, vui 534. Judgement from *đông* and *ngon* on.
- **Top adverbs:** đã 10, cũng 24, lại 30, sẽ 38, thế 42, còn 53, chỉ 54, đang 79, hơn 83, rất 92, nhất 104, cùng 114, vừa 185, quá 192, thật 216, nữa 217, thường 227, đều 228, ngay 229, cứ 293, khoảng 362, từng 374, lâu 476, luôn 491, lắm 589. Judgement from *vẫn* on.
- **Top pronouns:** ông 21, đó 32, tôi 34, anh 68, mình 72, họ 89, đây 91, gì 140, em 141, nó 150, nhau 225, bác 263, chị 353, cậu 520. Judgement from *tớ* on: the plurals, then the *ấy* forms, *kia*, possessives and indefinites.
- **Top prepositions:** của 2, cho 7, trong 9, với 14, như 23, ở 26, từ 40, tại 44, trên 47, sau 60, theo 66, qua 87, trước 96, lúc 153, bằng 156, tới 165, ngoài 211, gần 269, giữa 287, dưới 397, khỏi 419, sang 423, bởi 506. Judgement from *đối với* on.
- **Top conjunctions:** và 1, để 15, khi 28, thì 48, vì 67, rằng 102, hay 109, nên 117, nếu 169, tuy 303, dù 350, hoặc 458. Judgement from *mặc dù* on.
- **Top interjections:** all judgement. No interjection is in the top 600; the source is written text.
- **Top words:** không 6, các 8, những 13, này 20, nhiều 51, cả 61, nào 93, sao 231, mọi 262, đâu 326, mỗi 340, ít 469, hãy 504, mấy 537, vài 571. Judgement from *bao nhiêu* on; the numbers, days and times come last, in order.
- **Top classifiers:** con 17, cuộc 99, cái 118, chiếc 309. Judgement from *bộ* on.
- **Top particles:** vậy 212, thôi 595, đấy 598. Judgement from *ạ* on (spoken particles are rare in newspapers and children's books).

**Bias to keep in mind.** The corpus is newspapers and children's books, so it ranks news words high (*chính, quốc, dân, công*; none of these was used) and spoken words low (particles, interjections, *ạ, nhé, nhỉ*). The judgement order leans toward everyday spoken Hanoi Vietnamese.

**Could not be read** (all tried on 2026-11-23):
- the PDF itself through `curl`: proxy 403. The same happened for the newspaper and children's lists on the same host;
- en.wiktionary.org `Wiktionary:Frequency_lists/Vietnamese`: not on the fetch allowlist;
- trungducha.de (the "Extracting the most common words in Vietnamese" blog, reached through a redirect from devintdha.github.io): not on the fetch allowlist;
- the CVT newspaper-only list opened through the fetch tool, but the tool would not list the entries, and it was not used.

**Suggestion for the lead.** Re-rank the judgement tails against a spoken or subtitles list (OpenSubtitles Vietnamese, or a word-segmented corpus such as VnCoreNLP frequencies) on a machine that can download one. Only the order inside each deck should move.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Classes renamed or added

- **Top nouns** shows each noun bare, as a dictionary does and as the course's own noun cards do (*bác sĩ, khách sạn*). A noun needs a classifier only to be counted or pointed at; that is what Top classifiers teaches. A note names the classifier only where it is not the obvious *cái* or *con* (*vợ, chồng: người*; *cây* is itself one).
- **Top adjectives** is kept, but Vietnamese adjectives are stative verbs: they take no *là* (*Anh ấy cao*), and they work as predicates. The deck description says so, and the notes show the verb-like use.
- **Top verbs:** Vietnamese verbs never change. Instead of an "I-form", each note gives the key frame or collocation, for example *biết + verb* for a skill, or *mặc / đội / đi* for wearing clothes, hats and shoes. No verb is irregular.
- **Top pronouns** is the kinship address system. Each meaning says who says the word to whom, and gives both its "you" and its "I" use (*anh*: "you, to a man a little older; I, a man to someone younger"). It also covers the *ấy* forms (he / she), the plurals, the demonstratives *đây, đó, kia*, *gì*, the possessives *của tôi, của bạn*, and the indefinites.
- **Top prepositions** is kept. Vietnamese has real prepositions (*của, trong, với, từ, trên*), but several are also verbs (*ở, cho, tới, sang*), and the notes say so.
- **Top classifiers (added).** A Vietnamese noun needs a classifier to be counted or pointed at. The deck covers true classifiers (*con, cái, chiếc, quyển, tờ, bức, quả, tấm, căn, ngôi, bông, viên, đứa, chuyến, vị, bộ, cuộc*), container measures used the same way (*cốc, ly, bát, chai, hộp, gói, miếng, đôi*) and the measure *cân* (kilo).
- **Top particles (added).** The sentence-final and calling particles: *ạ, nhé, nhỉ, à, chứ, thôi, đấy, cơ, ư, kìa, vậy, ơi, cái đã*.
- **Time markers** *đã, đang, sẽ, vừa, sắp, từng* are in Top adverbs. Vietnamese grammars call them adverbs (*phó từ*), and they sit before the verb like *cũng* and *rất*.

## 3. Where words with two homes went

| Word | Deck | Its other use (shown in the note) |
|---|---|---|
| cho | Top prepositions ("for; to") | verb "give, let" (*Cho tôi…*) |
| ở | Top prepositions ("at; in") | verb "be at, live" |
| đến, về, vào | Top verbs | "to, until" / "about" / "on (a day)" |
| tới, sang | Top prepositions | verbs "arrive", "go over" |
| được | Top verbs | "can", passive |
| phải | Top verbs ("must") | *Phải không?* (right?), *Phải.* (That's right.) |
| nên | Top conjunctions ("so") | modal "should" |
| hay | Top conjunctions ("or", in questions) | adjective "interesting", adverb "often" |
| còn | Top adverbs ("still; left") | "and as for" (*Còn anh?*) |
| thôi | Top particles ("only; that's all") | *Thôi!* = Stop! |
| đâu | Top words ("where") | *Không đâu* (not at all) |
| này | Top words ("this", after a noun) | *Này!* = Hey! |
| mới | Top adjectives ("new") | "just" before a verb |
| gần / xa | Top prepositions ("near") / Top adjectives ("far") | both are also adjectives |
| là | Top verbs ("be") | "that" in speech (*Em nghĩ là…*) |
| không | Top words (no, not, zero) | the yes/no question tag |
| con | Top classifiers (animals) | "child", and "I" to your parents |
| cây, bài | Top nouns | also classifiers |
| chết | Top verbs ("die") | *Thôi chết!* is a separate card in Top interjections |
| Hả? | Top interjections | as a sentence-final particle (*Thật hả?*), in its note; a bare *hả* card would differ only by punctuation |
| ừ | Top words (yes / no) | — |
| mắt, tóc, giọng, nụ cười | Flirting | left out of Top nouns |

## 4. Words skipped because the course already has them

Each word below matches an existing card exactly, ignoring capitals and . , ! ? marks. Each was left out (rule 3). The launch message asked for *đi, cô, chú, bà, bạn* (pronouns or particles). They are already cards, so their use is shown in a neighbouring card's note or example instead.

| Deck | Skipped | Already a card in |
|---|---|---|
| Top nouns | nhà, xe, phở, gió, rau, trời, tay, tai, thư, chân, quê, người, chanh, da | Letters and sounds |
| Top nouns | bàn, cá, bò, sữa, gà, năm (year) | Tone pairs |
| Top nouns | mẹ, bố | Family and kinship |
| Top nouns | ngân hàng | Around town and directions |
| Top nouns | khách sạn, sân bay, xe ôm | Travel and transport |
| Top nouns | giáo viên, sinh viên, học sinh, công ty | Work and study |
| Top nouns | bác sĩ, hiệu thuốc | Health and help |
| Top nouns | áo dài | Shopping and the market |
| Top nouns | ga, xăng, chè | Traps for English speakers |
| Top nouns (judgement) | sách, mèo, chó, ghế, điện thoại, xe máy, xe đạp, giấy, tranh, đũa | Classifiers and things teaches them as *quyển sách, con mèo, cái ghế…*, the same meaning with a classifier, so a bare card would be a near-duplicate |
| Top verbs | đi, ăn, ngủ | Letters and sounds |
| Top verbs | mua, bán, múa, nằm, sửa | Tone pairs |
| Top adjectives | đẹp, to, nhỏ | Describing things |
| Top adjectives | bận | Tone pairs |
| Top adjectives | khô | Letters and sounds |
| Top adjectives | ốm | Traps for English speakers |
| Top adverbs | rồi, chưa (*Rồi.*, *Chưa.*) | Questions and connectors |
| Top adverbs | hôm nay, hôm qua, ngày mai | Time, days and dates |
| Top pronouns | bạn | Tone pairs |
| Top pronouns | cô, chú, cháu | Family and kinship |
| Top pronouns | bà | Traps for English speakers |
| Top pronouns | ai (*Ai?*) | Questions and connectors |
| Top pronouns (judgement) | cái này, cái kia | Classifiers and things (already cards; the bare determiners *này*, *kia* were added with different meanings) |
| Top prepositions | bên trái, bên phải (as phrases) | Around town and directions |
| Top conjunctions | nhưng | Questions and connectors |
| Top conjunctions | mà | Tone pairs |
| Top interjections | Dạ, Vâng | Polite Vietnamese |
| Top interjections | Cứu tôi với! | Health and help |
| Top interjections | Ngon quá!, Đắt quá!, Rẻ quá! | Food and drink; Shopping and the market |
| Top interjections | Không sao. | Greetings and courtesy |
| Top words | một, hai, ba, bốn, sáu, bảy, tám, chín, mười, mười lăm, hai mươi tư | Numbers and money |
| Top words | năm (five) | Tone pairs |
| Top words | thứ hai, thứ bảy, chủ nhật | Time, days and dates |
| Top words | tối | Tone pairs |
| Top words | tại sao, khi nào, cái gì, cái nào (*Tại sao?*, …) | Questions and connectors |
| Top classifiers | người | Letters and sounds |
| Top particles | đi | Letters and sounds (to go) |
| Top particles | mà | Tone pairs (but) |
| Top particles | rồi, chưa | Questions and connectors |
| Top particles | dạ, vâng | Polite Vietnamese |
| Flirting | đẹp | Describing things (used in Flirting phrases instead) |
| Compliments | Bạn nói tiếng Việt giỏi quá! | Work and study (the plan's other two "your Vietnamese" lines are used instead) |
| Compliments | Ngon quá! | Food and drink |

**Total skipped as already cards:** 102 table entries for 92 distinct words (some words, such as *người, năm, mà, rồi, chưa, dạ, vâng*, were wanted for two decks), all exact matches, plus 12 by judgement (the 10 bare nouns, *cái này* and *cái kia*). Words that would only clash with another of the new decks (for example a bare particle *hả* beside the interjection *Hả?*) were not counted.

**Classifiers note.** The `classifiers` lesson teaches *con, cái, quyển, chiếc* (and *cốc, ly, đôi* in its table). None of these is a bare card, so they are cards in Top classifiers, as in the Spanish course, where bare words that appeared only inside phrase cards were added. If the lead reads the launch message ("only those the course does not already teach") as "not taught in a lesson either", drop *con, cái, quyển, chiếc, cốc, ly, đôi* from Top classifiers. The deck still has 19 cards.

## 5. Pron tool

Every pron was generated by `respell.js` through the build script. Nothing was typed by hand, and `EXC` was not touched. Every target parsed, so **no word was left out because of the tool**. *Zalo* and *Canada* (in two draft example sentences) made it throw, so those sentences were rewritten. The English loanword *crush* (young people's word for a crush) could not be respelled and was never added. `repron.js vi` reports 0 rewritten.

## 6. Native check first

1. *Em cười xinh lắm.* (the plan's own doubt; alternative: *Em có nụ cười đẹp lắm.*)
2. *Chị nói tiếng Việt sõi quá!* (is *sõi* what people say to a foreigner?)
3. *Anh khéo nịnh quá!* and *Anh dẻo miệng quá!* as playful deflections
4. *Anh tốt lắm, nhưng mình không hợp nhau đâu.* (a kind, clear no)
5. *Không dám ạ.* as a reply to praise (dated?)
6. *cơ* as a Hanoi insisting particle (*Em muốn cái này cơ!*), and *cái đã* (*Ăn cái đã!*)
7. *Khiếp!* and *Ôi giời ơi!* as Hanoi interjections; *Hú hồn!*
8. *cậu / tớ* (described as Hanoi students' pair) and *bác* for strangers of about 55 and up
9. *Hôm nay anh đẹp trai thế!* (thế for surprise) and *Em để tóc này hợp lắm.*
10. *Em bé đáng yêu quá!* and its note: is the baby-praise belief still worth a mention in 2026? (the plan's own question)
