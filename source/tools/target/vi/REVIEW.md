# en-vi cold review (EN-VI-REVIEWER, 2026-11-18)

Baseline before edits: gen + validate PASS (18 decks / 319 cards, 28 lessons, 392 items, 90 dialogues, 45 examples, 18 patterns).
Backup of the pre-review files: scratchpad p3/vi-orig-backup.

## Batches
(appended as each file is done)

(Restarted 2026-11-19 by a second reviewer from the beginning; the first pass made no edits.)

### Batch 0: syllable census and pron tool baseline
- Script: scratchpad p3/rv/syl.js lists every distinct syllable (853 incl. English words in options) with the gloss of its source string. Every Vietnamese string outside distractors parses with respell.js (no stray letters, no stop ending with a level/falling/dipping/broken tone). No misspelled syllable found in answers, cards, dialogues or examples.
- `node tools/target/repron.js vi` at start: 543 prons read, 0 rewritten.

### Batch 1: decks-a.js, decks-b.js, extra-a.js, extra-b.js (read in full)
- decks-a.js (12): 11 cards had a stray "|" as their note (rows ending " | | " parse to note "|"): note emptied. `tám` note claimed "a word ending in t" (tám ends in m): replaced.
- decks-b.js (7): "Chị có bận không?" note "bận has the heavy tone: bạn is a friend" (misleading, both are heavy) → "bận has the vowel mark â; bạn, with plain a, is a friend". "Đợi em một chút nhé." (bare imperative + nhé to an older person) → "Chị đợi em một chút nhé." (to a woman a little older). Notes trimmed where they overclaimed: "The place word comes before what it locates" (bên cạnh) → plain wording; "A skill takes biết, not có thể" → "usually"; "Vietnamese uses both" vì/nên → "often used together"; "cũng vậy, more common in the South" (unsupported regional claim) → dropped; "Anh ơi to someone younger sounds odd" → positive rule.
- extra-a.js (0).
- extra-b.js (2): "Mùa đông, ở đâu lạnh hơn?" (odd question for a Hanoi/Saigon answer) → "Hà Nội hay Sài Gòn lạnh hơn?"; "Quán này đi." → "Ăn ở quán này đi."
- lessons-3.js (2, consequential): example row and fi item that quoted "Đợi em một chút nhé." follow the new card.

### Batch 2: lessons-1.js, lessons-2.js, lessons-3.js (read in full: bodies, example rows, checks, all 392 practice items)
- lessons-1.js (0): no wrong Vietnamese found. The bận/bạn "why" lines already say "vowel mark â" here.
- lessons-2.js (2): family body "When in doubt, guess younger" contradicted the pronouns lesson ("treat them as a little older") → now scoped to choosing among chị / cô / bà for a woman. classifiers ty "this table": added `chiếc bàn này` (accepted in this-that, missing here).
- lessons-3.js (4 + 2 consequential from batch 1): time check option "tối bảy giờ" (heard in speech, so not safely wrong) → "giờ bảy tối"; time mc option "Bây giờ là giờ gì?" (colloquially possible) → "Bây giờ là thứ mấy?" with the why extended; biet tip no longer calls "Tôi có thể nói tiếng Việt" a mistake outright ("biết is the natural choice"); because body "usually uses both" → "often".
- Scripted checks over all practice: no fi item whose wrong fill differs from the answer only by missing marks lacks !strict; ty fallback tiles that are mark twins (phái, đó, mướn) are wrong-mark forms, which the engine marks wrong anyway, so no !strict needed; no fallback tile rebuilds an accepted answer; no answer list carries two tone-mark placements; every `or` item printed and checked for a second grammatical order: none found.
- Mark twins and their glosses checked: gai thorn, me tamarind, mè (other word), hóc choke on a bone, ánh light, bạt tarp, rể son-in-law, rễ root, xương bone, viết write, vẽ draw, chua sour, khoe show off, ôm hug, đặt book, phố street, chờ wait, bò cow: all correct. "Not this word"/"wrong" labels (tàm, khồng, gí, mốn, rười) are not common words used as such. Note: Wiktionary lists rưỡi ("and a half", "ba giờ rưỡi") with no alternative forms; rưởi is not given as a variant there. I believe rưởi is seen as a spelling after trăm/nghìn in some usage, but could not source it, so the strict fill "Ba giờ __" keeps rưởi as wrong and it is on the native-check list.

### Batch 3: pron tool spot check
- 88 syllables run through respell.js against the profile key (d/gi/r = z, tr/ch, s/x, final c/ch/nh/ng, -anh/-ach, ươ uô iê, ây/ay, ai/ay, ao/au, glide w in oa oe uê uy uâ qu, gi + i, the six tone symbols, stop finals): da gì giá giờ rau rẽ trà trời chợ chị sữa xe xin sân trắng chanh bánh sách ếch bệnh xinh thích học ngọc đọc khác tác nước người muốn chuối thuốc tiền việt biết đâu đây mấy tay tai sao sau gửi hưu rượu nhiều khuya khuỷu quyển nguyễn hoa khỏe thuê tuần ngủ nghe ghế kém gà phở bạn mặt tháng Huế quê cửa mua mưa thúy giết gìn quốc giường gió ruột xoăn quả gia giữa thủy thuỷ hoà hòa oanh khoảng toán ngoài thoại huyền. 0 deviations from the key. No tool change needed; repron reports 0 rewritten.
- Prons quoted in body text and mc options (vee-uht., baing/ mee_, fer?, baing/, bahn.) equal the tool's output.

### Writers' doubt list: decisions
- Kinship pronouns, ạ / dạ / vâng / nhé: modelled consistently; only change "Đợi em một chút nhé." → "Chị đợi em một chút nhé." (batch 1).
- "Có, tôi thích." kept (natural short yes). "Tôi không phải giáo viên" without là kept as accepted (natural in speech).
- năm người bạn, hai cốc trà đá, một đôi giày, bàn này without cái: all natural, kept.
- hai mươi tư / hai mươi bốn: both taught as fine. mấy (small numbers, children's ages, mấy giờ, thứ mấy): kept.
- đã without rồi (Anh ấy đã đi Huế, Hôm qua tôi đã đi Hội An): natural, kept.
- thích is never used as a polite "I'd like": confirmed everywhere.
- Wrong options: "Tôi có bơi" and fronted "Bao nhiêu tiền cái này?" no longer occur; "Tôi được bơi" kept as wrong (the item says "I learned how"); "Bây giờ là giờ gì?" and "tối bảy giờ" replaced (batch 2); "Tôi bị vui" kept as wrong.
- Hanoi kém, Southern quẹo, ốm (North sick / South thin), "50k", "Dạ, vâng ạ": kept.

### For the lead (outside this folder; not edited)
- docs/profiles/en-vi.md line ~531 still carries the sample why "bận has the heavy tone: bạn is a friend". No copy remains in tools/target/vi (lessons-1 "my friend" and lessons-2 "Bạn muốn gì" contrast bạn with bàn, a real tone contrast, and are correct).

## Totals (34 edits)
| File | Wrong Vietnamese | Wrong teaching | Practice | Pron | Wording / consistency |
|---|---|---|---|---|---|
| decks-a.js | 0 | 1 | 0 | 0 | 11 |
| decks-b.js | 1 | 7 | 0 | 0 | 0 |
| extra-a.js | 0 | 0 | 0 | 0 | 0 |
| extra-b.js | 2 | 0 | 0 | 0 | 0 |
| lessons-1.js | 0 | 0 | 2 | 0 | 0 |
| lessons-2.js | 0 | 1 | 1 | 0 | 0 |
| lessons-3.js | 0 | 2 | 4 | 0 | 2 |
| respell.js | 0 | 0 | 0 | 0 | 0 |

Read in full: every deck card, dialogue, example, pattern, lesson body, example row, check and practice item; profile §1–3, §6, §7, §10, §11, the start of §9, PRACTICE-SPEC, TARGET-BRIEF and the PHASE2 addendum. Not opened: profile §4–5, §8 and the per-deck sample tables of §9 (only grepped for prices).

## Ten things a native speaker should check first
1. Chị đợi em một chút nhé. (new card; replaces bare Đợi em một chút nhé to an older person)
2. Có, tôi thích. as the short yes to Em có thích phở không? (yes-no lesson)
3. Ba giờ rưỡi with rưởi marked wrong in a strict fill (rưởi is a variant after trăm / nghìn)
4. Hà Nội hay Sài Gòn lạnh hơn? and Ăn ở quán này đi. (rewritten dialogue lines)
5. Wrong options Bây giờ là thứ mấy? (for "What time is it now?") and giờ bảy tối (for "seven in the evening")
6. biết vs có thể: is Tôi có thể nói tiếng Việt really less natural than Tôi biết nói tiếng Việt? (biet tip)
7. Cháu chào cô ạ to a friend's mother (extra-a dialogue; bác if she is older than your parents?)
8. Em ơi for a young waiter, Anh ơi / Chị ơi for older staff (deck note), and tôi + ạ combinations accepted in requests (Cho tôi hai cốc trà đá ạ)
9. kém as the Hanoi way to give minutes before the hour, and chè = tea in Hanoi (Traps deck)
10. Tôi cũng thế / Tôi cũng vậy, Dạ, vâng ạ, Mời bác ăn cơm ạ: register and naturalness

### Batch 4: profile §7 / §10.3 conformance and dictionary checks
- §10.3 asks for !strict on mc items whose options differ only by marks: added to vowels "Which word means hand?" (tây), vowels "oo with smiling lips" (u), prices "fifty thousand dong" (năm mười). lessons-1.js +2, lessons-3.js +1 (practice). No strand-(a) ty item lacks !strict; no fi item with a mark-twin distractor lacks it.
- lessons-3.js fi "Chị đợi em một chút __." distractor "không" (makes a possible question, "…một chút không?") → "gì" (practice).
- decks-b.js hiệu thuốc note "The South says nhà thuốc" (nhà thuốc is on signs everywhere) → "You will also see nhà thuốc on pharmacy signs" (teaching). Left on the check list: "bát (South: tô)" for noodle bowls (the profile's table gives chén for the rice bowl).
- Left unaligned on purpose (both glosses are right): cơm gà "chicken and rice" / "rice with chicken"; Ngon quá "Delicious!" / "So delicious!"; Làm ơn cho tôi hỏi "may I ask?" / "may I ask something?".
- Source-verified (vdict / Wiktionary mirrors / bietviet): hóc = choke on (a bone), bạt = tarpaulin, rể = son-in-law, rễ = root (Proto-Vietic "root"), me = tamarind (also a child's word for mom), khoe from 誇 "boast", rưỡi = and a half. Direct Wiktionary and most vdict URLs were blocked by the fetch allowlist, so everything else (the remaining twins, the once-only syllables, place names such as Hàng Bạc, Lê Duẩn, Nội Bài, Hạ Long, Sa Pa) rests on the reviewer's own knowledge of Vietnamese and is NOT source-verified.
- Summary of the Vietnamese pass: the syllable and tone census found no misspelled or mis-toned word anywhere. The three "wrong Vietnamese" fixes (Đợi em… nhé, Mùa đông ở đâu lạnh hơn?, Quán này đi.) are register / naturalness judgments, not confirmed errors.

## Final run (2026-11-19)
- `node tools/target/repron.js vi`: 543 prons read, 0 rewritten. `node --check` passes on every JS file.
- `node tools/target/gen.js vi`: 28 of 28 lessons · 18 decks · 319 cards (wrote packs/course-en-vi.js).
- `node tools/target/validate.js vi`: decks 18 · cards 319 · lessons 28/28 · practice items 392 · dialogues 90 · examples 45 · patterns 18 — PASS: all checks OK.
