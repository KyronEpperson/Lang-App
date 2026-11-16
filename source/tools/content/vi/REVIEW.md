# vi-en cold review (VI-REVIEWER), 2026-11-16

**Scope.** Everything under tools/content/vi except profile.json and the deviations files, plus the `t` fields of tools/i18n/vi/ui.json and tools/i18n/vi/roadmap.json. No generator, pack, src/app.html or other language was touched; build.sh was not run; nothing was committed.

**Status.** Every check passes on scratch outputs:
- content: `gen.js vi`, `validate.js vi` (PASS: all checks OK) and `parity.js vi` (PASS: shared English side matches ko-en);
- interface: i18n `gen.py vi` and `validate.js vi` (PASS);
- roadmap: `road.py check vi` (425/425).

Also checked:
- `node --check` passes on every JS file in the folder, including the new pron_check.js.
- There is no Hangul anywhere under tools/content/vi, and every touched file is NFC.
- Comparing ui.json and roadmap.json with the originals, with `t` stripped, shows identical files, so only `t` changed.

**Read in full:** all 41 lessons (bodies, checks, practice prompts, `why`, `hint`), 430 cards, DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS and meta.js. In the interface, every short exact string, every long sentence, all 271 patterns and all 425 roadmap titles.

## 1. What changed (103 edits)

### IPA: 36 rows (rules in PRON-RULES.md, checker pron_check.js)
- **Same English, different IPA (3 phrases, 4 words).**
  - *I'm working from home today*: frʌm in the lesson → frəm, as on the deck card.
  - *I really like it*: ˈriːəli → ˈriːli.
  - Vietnam viːət- / viːet- → viːetˈnɑːm everywhere; Vietnamese likewise.
  - *what* wɑːt → wʌt (2 rows).
- **Weak forms (settled).**
  - *me* miː → mi in 8 unstressed rows, for example *She called me* /ʃi kɑːld mi/. *It's on me* and *Me neither* keep /miː/.
  - *we* wiː → wi in 13 rows, so it matches he /hi/ and she /ʃi/.
  - *than* ðæn → ðən; stranded-only *from* frʌm → frəm in *She's from the United States*.
- **Linking.**
  - Added *maɪnd‿ˈoʊpənɪŋ*, *naɪn‿oʊ faɪv*, and *ðɪs‿ˈiːmeɪl* (lesson copy).
  - Settled: no link across commas and none after r or ɚ. Both were already followed everywhere.
- **Abbreviation stress:** *TV* tiːˈviː → tiː ˈviː. Every abbreviation now stresses only its last letter.

### Teaching accuracy: 14
- **be, tip.** Before: «Câu này có hành động không? Có thì dùng do / does; không có (trạng thái…) thì dùng to be». That test gives the wrong answer for *like, live, want*. After: «Ngoài to be, câu này có động từ nào khác không (like, live, work, want…)?»
- **countable, some / any.** The rule «any trong câu… nghi vấn» contradicted the lesson's own *Can I have some water?* Added the request and offer exception.
- **countable.** «Một số từ đếm được trong tiếng Việt» → «Một số từ tiếng Việt đếm thoải mái (“một thông tin”, “hai lời khuyên”) nhưng trong tiếng Anh lại là danh từ không đếm được». Vietnamese has no countability category.
- **to-ing heading.** «V-ing: việc đang làm, việc thích làm» sat over *finish* and *mind* → «V-ing: sau enjoy, finish, mind, keep, stop».
- **adjectives check `why`.** «Từ ngắn thêm -er và gấp đôi phụ âm cuối» read as a general rule (cheap → cheaper) → it now explains doubling for *big* only.
- **pron body.** «mỗi từ có một âm tiết đọc mạnh» → only words of two or more syllables have a stressed syllable, and small words are reduced.
- **pron body.** «tắt nút “Hiện phiên âm”» named a control that does not exist. The engine renders the chip «Aa phiên âm» and the setting «Hiện phiên âm khi luyện tập», and the text now names those.
- **plurals body.** «Đây là lỗi người Việt mắc nhiều nhất» contradicted the articles lesson (profile §4 ranks articles first) → «một trong những lỗi… nhiều nhất (cùng với mạo từ)».
- **conditionals.** The example translation «Nếu có thời gian, tôi đã đi du lịch rồi» reads as type 3 → «…thì tôi sẽ đi du lịch (tiếc là bây giờ không có)».
- **Korean-course leftovers in card notes:**
  - *What's up?*: «Không liên quan gì đến “ở trên” (up)» → it is a casual “dạo này thế nào?”.
  - *coffee*: «Giữ âm /f/ ở giữa» → stress contrast with “cà phê”.
  - *copy*: «Âm giữa là /p/ bật hơi» → stress, and not “cóp-pi”.
  - *very*: «Đọc thành /b/ sẽ nghe như berry» → Vietnamese already has “v”.
- **DIALOG.** *I met BTS at the airport* (an artist name, against profile §9) → *I met a famous singer at the airport*.

### Prompts and accepted answers: 7
- **Shared lessons, prompt made specific** (accepted answers are parity-bound):
  - past, order «Tôi đã đi chơi với bạn bè» → «(Một em bé kể) Con đã chơi với các bạn». It taught *played with my friends* for adults, which the calque deck and the phrasal deck mark as an error.
  - past, type «Tôi đã xem một bộ phim» → «… (dùng watch)». irregular-past teaches *I saw a movie* for the same prompt.
  - plurals, type «Tôi có hai chị gái» → «Tôi có hai chị em gái». *two older sisters* was rejected.
  - to-ing, type «Tôi thích đọc sách» → «… (dùng enjoy)». *I like reading* was rejected.
  - conditionals, order: the prompt now has «(bây giờ)… sẽ».
  - idioms, type: added «(bắt chéo ngón tay)». *I hope everything goes well* was rejected.
- **vi-only lesson, answers added:** final-sounds «Mẹ tôi nấu ăn ngon» now also accepts *cooks really / very well*.

### Calque deck «Lỗi dịch từ tiếng Việt»: 1
- *I need to go grocery shopping* was not a learner error. *go to the market* is normal US English for a grocery store. It became *It's raining heavily.* («It's raining big. ✗ → It's raining heavily. ✓ “Mưa to”…»).
- The deck stays at 19 cards. The other 18 were checked and kept.

### Vietnamese wording and terminology: 14
- **Regional rule (profile §2), applied as follows:**
  - On cards and word glosses for an everyday object, give both forms: *car* «xe ô tô / xe hơi», *sick* «ốm / bệnh» (*ốm* means "thin" in the South), *banana* «chuối».
  - In running text, translations and prompts, use the first (northern) form only: cốc, ô tô, bố mẹ, áo phông, nem rán, quần bò.
  - DIALOG translations were not given « / » because there it separates the speakers.
- **Gloss alternatives.** «;» and «,» → « / » in 8 lesson glosses, for example «bể chứa; xe tăng» → «bể chứa / xe tăng» and «chấy, rận» → «chấy / chí» (matching the card).
- **Spelling and markup:**
  - «tivi» → «ti vi» (3), matching the deck.
  - English in `<i>` → `<b>` (profile §2).
  - Prompt «gạo, cơm» → «gạo / cơm».
- **Level title.** meta.js TITLES «Người trò chuyện» → «Hoạt ngôn», matching ui.json.
- **Checked and already uniform:** the §3 grammar terms (mạo từ, danh từ đếm được, ngôi thứ ba số ít, động từ nguyên mẫu, quá khứ phân từ (V3), dạng V-ing, động từ khuyết thiếu), traditional tone-mark placement (no hoà / khoẻ), no anh / chị / em / mình addressed to the learner, and *ạ* only in service dialogues.

### Interface: 23 `t` values in ui.json
- **Tab bar.**
  - "Practice" «Luyện tập» → «Luyện» (5 characters). The matching «{1}/{2} · Luyện» and «Luyện · thao tác nhanh» were changed too.
  - Drills keeps «Kỹ năng»: distinct from «Luyện» and 7 characters.
  - The bar now reads «Hôm nay · Luyện · Ôn tập · Bài học · Kỹ năng · Tiến độ · Góp ý».
  - The share card «DRILLS» «BÀI LUYỆN» → «KỸ NĂNG», like the tab and the recap.
- **"Type" «Loại» → «Gõ».** app.html uses this key for the quiz chip «⌨️ … EN», which read «⌨️ Loại EN».
- **Language name capitalised mid-sentence.** `tgtName()` / `uiName()` capitalise the result of `Intl.DisplayNames`, so the slot receives «Tiếng Anh». Every pattern that used it mid-sentence now puts it first or after a colon:
  - «Học {1}, 5 phút mỗi ngày» → «{1} · 5 phút mỗi ngày»;
  - «Gõ bằng {1}…» → «{1}: gõ vào đây…»;
  - «Không có bàn phím {1}?» → «{1}: không có bàn phím? Chọn từ có sẵn»;
  - «Đang học {1}…» → «Đã chuyển khóa học: {1} · …»;
  - «Tiến độ {1}» → «{1} · tiến độ»;
  - «Đã gộp vào {1}.» → «{1}: đã gộp.»;
  - also «gõ câu trả lời · {1}», «Hãy gõ câu trả lời ({1})…» and the share text.
- **Hashtags.** «#cơbản #dulịch…» → «#coban #dulich #giaotiep #congviec #giaitri #kynang» (unaccented, as Vietnamese hashtags are usually typed; see the top ten).
- **Other:**
  - legacy title Sprout «Mầm non» (which also means "kindergarten") → «Chồi non»;
  - «Bài mới» (New quiz, ambiguous) → «Trắc nghiệm mới»;
  - Talker «Hoạt ngôn» kept and aligned with meta.js.

### Roadmap: 8 titles
- «Tiếng Tây Ban Nha ở Tây Ban Nha» → «Tiếng Tây Ban Nha chuẩn (Tây Ban Nha)»; likewise Pháp and Đức, modelled on «Tiếng Hàn chuẩn (Seoul)».
- «Tiếng Phổ thông» → «Tiếng Trung phổ thông».
- «estar, và ser so với estar» → «estar; phân biệt ser và estar».
- «A2 · Làm được việc» → «A2 · Xoay xở hằng ngày».
- «Âm và câu sinh tồn» (a calque) → «Âm và câu cấp tốc».
- «Kính ngữ tóm tắt» → «Sơ lược về kính ngữ».
- Measure words are already «Loại từ» (zh, ja, th). «lượng từ» occurs nowhere.

### Files
- New: PRON-RULES.md, pron_check.js (a checker, not part of the build), REVIEW.md.
- Edited: decks.js, extra.js, lessons.js, practice.js, meta.js, more/a1.js, more/a2.js, more/b1.js; `t` only in ui.json and roadmap.json.

## 2. For a native speaker: the ten things I am least sure of
1. **The tab label «Luyện».** It is short enough, but terse, and the same key also renders the lesson button «✍️ Luyện · 14» and the badge «Luyện 80%». Alternatives: «Tập», «Học thẻ» (wrong for the lesson button).
2. **Unaccented hashtags «#coban, #dulich…».** This breaks profile §2's full-diacritics rule in exchange for hashtag convention. Alternatives: keep diacritics («#cơbản») or use spaced labels.
3. **«Kỹ năng» for Drills**, rather than the glossary's «bài luyện». It was chosen to stay distinct from «Luyện».
4. **Weak *me / we* /mi wi/ even at the end of a sentence, with *are / were / be* in full** while *was* is weak. Someone who knows the dictionary forms may find the mix odd.
5. **The new calque card *It's raining heavily* («big rain ✗»).** I believe it is a common error, but no fetched source confirms it. «The sky is raining ✗» (kept from the writers, backed by profile §8 but not by data) is equally unverified.
6. **The regional rule:** both forms on card glosses, northern forms in running text (áo phông, nem rán, quần bò, bố mẹ). Southern learners may want more pairs.
7. **The level titles «Hoạt ngôn» (Talker) and «Chồi non» (Sprout).**
8. **The prompt rewrites** «(Một em bé kể) Con đã chơi với các bạn» and «Tôi có hai chị em gái».
9. **The slot rewordings with the language name first** («Tiếng Anh: gõ vào đây…», «Tiếng Anh · 5 phút mỗi ngày»). They are correct but read like labels.
10. **The name transcriptions** Nguyen /wɪn/, Hue /hweɪ/ and pho /fʌ/. These are approximations of the American readings.

## 3. Found but not fixed (out of scope or parity-bound)
- **Shared items that reject natural answers or accept wrong ones:**
  - will, type «Để tôi đóng cửa» accepts *I'll get the door* (which means "answer the door"); fixing it needs an `items` deviation.
  - email, type «Ngày mai tôi nghỉ» rejects *I have a day off tomorrow*.
  - modals rejects *You should go see a doctor*.
  - polite «… (lịch sự)» rejects *Can you help me*.
  - In each case the hints steer the learner.
- **Defensible distractors (parity-bound):** countable mc *Can I have ___ water?* (*a water* is normal restaurant English) and *Do you have any question?*
- **Check option «~ing (opening)»** (polite check 3) has no Vietnamese text in ko-en, so parity fixes it. The glossary would say «dạng V-ing».
- **deviations.json:**
  - The «Lỗi dịch từ tiếng Việt» reason still lists «đi chợ», but the card is now *It's raining heavily*; the lead should update the text.
  - parity reports `lessons:final-sounds` and `lessons:noun-phrase` as unused (they are covered by `extraLessons`). This was already the case before the review.
- **UI keys that need an engine split:**
  - "Practice" serves the tab, the lesson practice button and the badge;
  - "Type" serves the quiz chip and the feedback radiogroup's aria-label, which now reads «Gõ»;
  - legacy Korean keys (Hangul reading drill, 요-form register chips) are translated loosely.
- **Roadmap basis line** «… điều chỉnh cho người nói tiếng Hàn» is a faithful translation of the shared English roadmap, but it reads oddly to a Vietnamese user. That is the lead's call.
- **Card targets that remain Korean-specific:** *Who's your bias?* (and the Jimin dialogue). Practice and checks keep Seoul, Busan, Jeju, kimchi and Han Kang, as profile §9 directs.
- **Profile §6** does not cover weak *from / than / me / we*, links across commas, or abbreviation stress. PRON-RULES.md settles them; the profile owner should sign off.
- **pron_check.js** does not scan IPA inside notes and prose. Those spans were checked by eye.
