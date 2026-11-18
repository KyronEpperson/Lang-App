# th-en cold review (TH-REVIEWER), 2026-11-18

**Scope.** Everything under tools/content/th except profile.json and the deviations files, plus the `t` fields of tools/i18n/th/ui.json and tools/i18n/th/roadmap.json. No generator, pack, src/app.html or other language was touched; build.sh was not run; nothing was committed. No shared English string (check options, practice `o` / `a` / `x`, fill `q`, deck targets) was changed, except accepted answers in the th-only `tinglish` lesson.

**Status (scratch outputs in the p2 scratchpad).**
- `gen.js th` → `validate.js th`: **PASS: all checks OK**
- `parity.js th`: **PASS: shared English side matches ko-en** (warning, pre-existing: unused deviations `lessons:tinglish`, `lessons:time-markers`, covered by `extraLessons`)
- `lint.js th`: **0 blocking · 8 meaning variants (info) · 0 K-pop leftovers (info)** (was 22; the 8 left are listed in §1, Glosses)
- `i18n/gen.py th` → `i18n/validate.js th`: **PASS** (exact 769, patterns 272, road 425; warnings=1 block of 3 long labels: Privacy, Privacy & terms, both pre-existing, and Streak card, which is an `<img alt>` and never laid out)
- `road.py check th`: **roadmap strings 425/425 translated**
- `node --check` passes on all 9 JS files in the folder; no Hangul anywhere under tools/content/th; JSON round-trips byte-identically apart from `t` (ui.json 14 values, roadmap.json 4).
- `node tools/content/th/pron_check.js`: **pairs 791 · phrase conflicts 0 · word conflicts 0 · rule hits 0** (the lead's one conflict, *but*, is now an allowed pair).

## 1. What changed

### Card notes and glosses (decks.js 9, extra.js 3)
No Korean-course leftovers survived in the notes (no Konglish, Hangul, politeness levels or K-pop explanations; the *What's up?* note is already a Thai note). The fixes are accuracy and wording:
- **Keep the change.** «มักใช้กับแท็กซี่หรือคนส่งของแทนการให้ทิป» said the phrase replaces a tip; it *is* the tip → «ให้เงินทอนเป็นทิป มักใช้กับแท็กซี่หรือคนส่งของ».
- **It's up to you.** The note said *depend on you* should become *It depends on you*, which means "it relies on you", not "your call" → «…ส่วน It depends on you. แปลว่า “ขึ้นอยู่กับสิ่งที่คุณทำ” ไม่ใช่ “เลือกเองเลย” ถ้าให้อีกฝ่ายตัดสินใจใช้ It's up to you.»
- **I'm going to buy some food.** «ใช้ some นำหน้า» implied *some* is required → «food เป็นคำนามนับไม่ได้ จึงไม่ใช้ a (ใส่ some ได้)».
- **find out** gloss «รู้ความจริง / สืบรู้» → «ได้รู้ / สืบจนรู้».
- **Can you make it less sweet?** «sweet little» (unsourced) → «sweet little หรือ sweet less ซึ่งเจ้าของภาษาฟังแล้วงง».
- **bus** note «ลากลมเสียงซี่» → «ลากลมเป็นเสียง ซ … ไม่งั้นจะฟังเป็น but».
- **Mr. Somchai** note reworded so the reason comes first: «ในบริษัทไทยพูด Mr. Somchai ได้เพราะคนไทยเรียกกันด้วยชื่อต้น แต่กับชาวต่างชาติใช้ Mr. หรือ Ms. + นามสกุล». The claim itself is right and matches the `email` lesson.
- «อีก 15 นาทีห้าโมง» → «อีก 15 นาทีจะห้าโมง»; «เที่ยวบินของฉันดีเลย์» → «…ล่าช้า (ดีเลย์)».
- extra.js: *Live and learn* «ใช้ชีวิตแล้วก็เรียนรู้ไป» → «ผิดเป็นครู»; *Stop putting off your homework!* «เลิกผัดการบ้าน» (a clipped idiom) → «เลิกผัดวันประกันพรุ่งเรื่องการบ้านได้แล้ว!» (the deck's gloss for *put off*); *Get cold feet* «ปอดแหกนาทีสุดท้าย» → «ใจฝ่อนาทีสุดท้าย» (same meaning, not slang in a gloss).

**Writers' doubts settled (no change):**
- *That's all right.* for ไม่เป็นไร (replacing the profile's *Never mind.*): **keep.** *Never mind* means "forget what I said"; using it for thanks and apologies is the Tinglish error, and the note says exactly that. *Never mind* stays in the pause set as «ช่างเถอะ ไม่มีอะไร» and NVM as «ช่างมันเถอะ», which agree with the note.
- «ตายยาก» (*Speak of the devil*), «ชาติหน้าตอนบ่าย ๆ» (*When pigs fly*), «แพงหูฉี่» (*costs an arm and a leg*): all correct Thai equivalents, neutral enough for app copy.
- «เมน» for *bias*: the Thai fandom term; the note also gives *favorite member*.
- «open the air», «depend on you», «I'm full already»: plausible Tinglish (no source, as the writers said); the notes frame them as habits, not measured errors.

### Lessons, checks and practice (lessons.js 28, practice.js 1, more/a1.js 6, more/a2.js 4)
- **Korean-course leftover in `email`.** The body and check 2 used «ทุกคนเหนื่อยกันมาก» as "what Thais say" with distractors *You suffered a lot / Good suffering*, a calque of a Korean office formula, not a Thai one. Body → «คนไทยอาจพูดว่า “ขอบคุณที่เหนื่อยกันมา” “รบกวนด้วยนะ” หรือ “ฝากด้วยนะ” ซึ่งแปลตรง ๆ ไม่ได้ (You suffered a lot. ✗)» plus a new bullet «แทน “ฝากด้วยนะ” เมื่อขอให้ช่วย: Thanks in advance!»; check question → «(ที่คนไทยอาจพูดว่า “ขอบคุณที่เหนื่อยกันมา”)», so the shared English distractors still make sense.
- **pron lesson, toggle names.** «ปิดได้ที่ตั้งค่า “แสดงคำอ่าน (IPA)”» named no real control → «ปิดได้ด้วยปุ่ม “Aa คำอ่าน” หรือที่ตั้งค่า “แสดงคำอ่าน (IPA) ตอนฝึก”» (the chip and settings strings in ui.json).
- **pron lesson, lips.** «ปิดริมฝีปากทั้งสองข้าง» reads as "both sides (corners) of the mouth" → «ริมฝีปากบนและล่างประกบกัน» in the body, the F/P/V/B table, check 2's option and the pron practice `why`.
- **pron lesson, predictions worded as tendencies** (profile §4.14): «bus จะกลายเป็น but และ fill จะกลายเป็น fin» → «bus อาจฟังเป็น but และ fill อาจฟังเป็น fin»; «นิสัยนี้ติดมาในภาษาอังกฤษ» (ร → ล) → «นิสัยนี้มักติดมาในภาษาอังกฤษด้วย». The Thai spelling facts (ส สะกดแม่กด, ล สะกดแม่กน) stay stated as facts.
- **adjectives check 1 `why`.** «คำสั้นเติม -er และเพิ่มพยัญชนะท้ายอีกตัว» stated doubling as general (cheap → cheaper contradicts it) → «big ลงท้ายด้วยสระเดี่ยว + พยัญชนะตัวเดียว จึงเพิ่ม g อีกตัวก่อนเติม -er: bigger».
- **third-s body.** «นี่คือข้อผิดพลาดที่พบมากที่สุด…» rests on one 43-student study → «…ที่พบบ่อยที่สุดอย่างหนึ่ง…».
- **object-have tip.** *I am two brothers. ✗* is not a Thai error → «Have two brothers. ✗ → I have two brothers. ✓ (ภาษาอังกฤษละประธานไม่ได้)» (Thai drops subjects, profile §4.9).
- **will.** «“เดี๋ยวฉัน…เอง” … ตรงกับ I'll พอดี» → «ที่ใช้เสนอตัวหรือตัดสินใจทันที มักตรงกับ I'll». The equation is right for offers and on-the-spot decisions, not always.
- **modals.** «คนไทยมักแปล “ไม่ต้อง” เป็น must not» (no source) → «คำว่า “ไม่ต้อง” มีคำว่า ต้อง อยู่ด้วย จึงอาจแปลผิดเป็น must not».
- **first-conditional.** «ไม่มีคำที่ตรงกับ ก็ ใช้จุลภาค (,) คั่นสองส่วนแทน» made the comma a translation of ก็ → «…เวลาเขียนให้ใช้จุลภาค (,) คั่นระหว่างสองส่วนเมื่อ if อยู่ข้างหน้า» (agrees with the next section: no comma when *if* comes second).
- **relative.** «คนไทยจึงมักพูดว่า the place at I live» → «อาจพูดว่า» (profile §11: no source).
- **tinglish type «ขอเช็กบิลหน่อย»** (th-only, so `a` may grow): + *Could I have the check*, *Could we have the check*.
- Smaller: `prep` adds the Thai source of *stay with home* («“อยู่กับบ้าน”»); `numbers` «ตำแหน่งจุลภาคคือหน่วย» → «จุลภาคในตัวเลขบอกตำแหน่งของคำเหล่านี้ … (ten thousand) … (one hundred thousand)»; `smalltalk` *It was nice talking to you* gloss now equals the deck's «ยินดีที่ได้คุยด้วย»; `questions` «วางคำถามไว้» → «วางคำแสดงคำถามไว้» (glossary); `the` «รถไฟฟ้าใต้ดิน» → «รถไฟใต้ดิน» (as in the deck); `phrasal` `<i>` → `<b>` (profile: English is bold).
- **Glosses (lint meaning variants 22 → 8).** The pron lesson's 11 single-word rows glossed alternatives with a bare space («ขวา ถูกต้อง», «แสง เบา») against the profile's ` / ` and against the pron deck's own wording; they now copy the deck («ขวา / ถูกต้อง», «แสง / ไฟ / เบา», «รถเมล์ / รถบัส», «ถามแล้ว (กริยาช่อง 2 ของ ask)»…). *Are you okay?* (be) and *I'll call you later.* (tense) now match their other lesson rows. The 8 left differ on purpose: an added context tag («ฉันทำงานที่ธนาคาร (เป็นประจำ)» in `tense`), the idioms lesson's literal images in brackets (4 rows), «ฉันเป็นนักเรียน» (articles, one reading of the deck's two), «ฉันเบื่อ» (the tinglish lesson quotes the Thai sentence it translates) and «เปล่า ไม่ได้ไป» (the tinglish example is about not going).
- **Terms, checked:** «กริยาทั่วไป» (any verb other than Verb to be) is used throughout be, present, questions, third-s, object-have and PATTERNS, the usual Thai ELT pair with Verb to be. «กริยาหลัก» appears 4 times in `present` in its own sense, main verb as against an auxiliary (frequency adverbs go «หน้ากริยาหลัก»), so it was left. «กริยาเติม -ing» (can-like, continuous) is a description of the glossary's «รูป -ing», not a competing term.
- **Checked, unchanged:** the be/questions tips use the PHASE2 "is there another verb besides be?" test; `countable` has the request/offer exception for *some*; `to-ing` lists *finish, mind* under -ing correctly; «“กินข้าวหรือยัง”» as a prompt in `time-markers` and `perfect-2` is fine because `smalltalk` explains it as a greeting and the time-markers mc adds «(ถามว่ากินแล้วหรือยัง)».

### Pronunciation (lessons.js 1, pron_check.js 1, PRON-RULES.md)
- pron lesson stress table: *McDonald's* /məkˈdɑːnəldz/ → /məkˈdɑːnldz/ (the deck's form, PRON-RULES §A4). The checker cannot see table cells, so every IPA string in lesson prose, tables and card notes was compared by hand; this was the only mismatch.
- pron_check.js: *but* added to ALLOWED (citation /ˈbʌt/ vs weak /bət/), as the lead asked.
- PRON-RULES.md (copied from zh) rewritten where it described the Chinese course: the zh change history and the Chinese-name line are gone; §B records *but*, *might* and *they're*; new §E lists the 38 word forms that occur only in th-en (Thai names and places, the Thai minimal pairs, the Tinglish deck), each with its single transcription.

### Interface (ui.json 14 `t` values)
- **Level titles** now agree with meta.js TITLES: Beginner «เริ่มต้น» → «มือใหม่»; meta.js Master «ปรมาจารย์» → «ยอดฝีมือ» (the interface's Master), which also stops Master and the legacy Sensei («ปรมาจารย์») sharing one name. Student, Talker, Traveler, Local, Pro already matched.
- **«Lv» → «เลเวล»** in `{n}/{n} → Lv {n}` (a small stat line on the Progress page beside «เลเวล {n} · …»; the only Lv left).
- **Typing-drill "streak"** (4 patterns) «ต่อเนื่อง {n}» → «ถูกติดกัน {n}»: here it counts consecutive correct answers, and «ต่อเนื่อง» alone reads as the daily study streak.
- **Streak card** (img alt) «การ์ดต่อเนื่อง» ("continuous card") → «การ์ดสถิติเรียนต่อเนื่อง»; Share card «การ์ดแชร์» → «การ์ดสำหรับแชร์».
- **Drills tab quoted in a count line:** `{n}/{n} · Drills` «… · ฝึกทักษะ» → «… · ทักษะ», in step with the lead's tab rename (the other six tab-count lines already quote their tab labels).
- Wording: Text size «ขนาดอักษร» → «ขนาดตัวอักษร»; How much time a day? «วันละใช้เวลาเท่าไร» → «ใช้เวลาวันละเท่าไร»; Conversational in 90 days → «พูดคล่องใน 90 วัน» (as in meta.js PLAN_PRESETS); button name quoted in «แล้วแตะ “จำได้” เมื่อจำได้แล้ว»; stray colon dropped from «พลาด {1} ใบ».
- **Tried and reverted:** «กำลังซิงค์กับบัญชี {1}» for `Syncing as {x}` (the engine's fallback value is «บัญชีของคุณ», which would double «บัญชี»), and «พิมพ์ประโยค» for the practice heading `Write it` (type items include phrases such as *three trees*, and the tile fallback involves no typing), so «เขียนคำตอบ» stays.
- **Doubts left as written:** «ความเป็นส่วนตัว» (15 code points, a footer link; no shorter natural word), «วันต่อเนื่อง» under the streak number (reads "5 วันต่อเนื่อง"; I tried «วันที่เรียนต่อเนื่อง», but it trips the overflow warning on a stat tile and the canvas, so I reverted it), leech «การ์ดจำยาก», bury «ไว้พรุ่งนี้», the Buddhist Era date «พ.ย. 2569» (profile §10 keeps BE in the interface), and the conjugator strings (they describe Korean forms the English course does not use).
- **Counts rendered:** all 196 patterns with an integer slot were rendered from ui.json at 0, 1, 2, 5 and 21 and read. Every count is noun + number + classifier or number + unit («การ์ด 21 ใบ», «เหลือ 0 อัน», «อีก 1 ใบจะเชี่ยวชาญ», «แบบทดสอบ 2 ครั้ง», «เหรียญประจำสัปดาห์ 5 เหรียญ»), so all five values read correctly. That run is also how the stale «ฝึกทักษะ» tab quote above turned up. «→ เลเวล {3}» was not checked at 390px (it is on the Progress page, not in the tab bar or chips). Language-name slots sit at the start or after a colon («{1}: พิมพ์คำตอบ», «ความคืบหน้า: {1}»), and none is written «ภาษา{1}». Weekday headers อา จ อ พ พฤ ศ ส are the standard abbreviations. Tab labels and session chips untouched.

### Roadmap (4 titles)
- «el / la, un / una» → «el / la และ un / una» and «और, लेकिन, क्योंकि» → «और लेकिन และ क्योंकि» (the list style of every other title).
- «who / that: อธิบายคนและสิ่งของ» → «who / that: ขยายคนและสิ่งของ» (same verb as the course lesson title).
- «การใช้ Infinitive» → «การใช้กริยารูปอินฟินิทีฟ» (as in the es / pt / fr titles).

### meta.js (2)
TITLES (above) and DESC «ขอรหัส Wi-Fi» → «ขอรหัสไวไฟ» (as in the deck meaning).

## 2. Edit counts per file

| file | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js | 4 | 5 | 0 | 0 | 9 |
| extra.js | 0 | 3 | 0 | 0 | 3 |
| lessons.js | 10 | 3 | 1 | 14 | 28 |
| practice.js | 1 | 0 | 0 | 0 | 1 |
| more/a1.js | 4 | 2 | 0 | 0 | 6 |
| more/a2.js | 4 | 0 | 0 | 0 | 4 |
| more/b1.js | 0 | 0 | 0 | 0 | 0 |
| meta.js | 0 | 2 | 0 | 0 | 2 |
| pron_check.js | 0 | 0 | 1 | 0 | 1 |
| PRON-RULES.md | 0 | 0 | rewritten (§B, §D, new §E) | 0 | — |
| ui.json (`t`) | 5 | 7 | 0 | 2 | 14 |
| roadmap.json (`t`) | 0 | 2 | 0 | 2 | 4 |
| **total** | **28** | **24** | **2** | **18** | **72** |

The automated scans (Thai full stops, commas inside Thai sentences, ? after Thai questions, ๆ spacing, ครับ/ค่ะ in app text, zero-width spaces, decomposed สระอำ, ฯลฯ) found nothing to fix in content: the five writers were already uniform. «!» appears only in translations that mirror an English «!» and in praise.

## 3. What I read in full and what I only scanned
- **Read in full:** decks.js (all 21 decks, 408 cards and every note); extra.js (89 dialogues, 56 examples, 25 patterns, 4 pause sets, 26 idioms); lessons.js (11 lesson bodies and their checks); practice.js (11 sets); more/a1.js, more/a2.js, more/b1.js (30 lesson bodies, checks and practice sets, including both th-only lessons); meta.js; all 425 roadmap titles; all 769 exact interface strings and 271 pattern templates, read as truncated one-line dumps (the first 110 characters of the English and 160 of the Thai).
- **Only scanned:** the tails of the long privacy and legal sentences in ui.json (beyond 160 characters), the `ko` / `context` reference fields, and the Korean-only grammar index and conjugator strings (checked only that they are Thai and harmless). Practice `why` lines were read; the accepted-answer lists of shared items were scanned for missing natural answers rather than tested one by one. Thai IPA renderings of names were not checked against the engine's voice.

## 4. For a native speaker: the ten things I am least sure of
1. **«ใจฝ่อนาทีสุดท้าย»** for *get cold feet* (was «ปอดแหกนาทีสุดท้าย»). Alternatives: «ถอดใจนาทีสุดท้าย», «เกิดลังเลกะทันหัน».
2. **«ขอบคุณที่เหนื่อยกันมา» / «ฝากด้วยนะ»** as the Thai office phrases in the `email` lesson and check, replacing a Korean-derived «ทุกคนเหนื่อยกันมาก».
3. **«ถูกติดกัน {n}»** for the typing drill's streak counter. Alternative: «ถูกต่อเนื่อง {n}».
4. **Level titles «มือใหม่ … ยอดฝีมือ»** (meta.js and interface now agree). Is «ยอดฝีมือ» or «ปรมาจารย์» the better top title?
5. **«วันต่อเนื่อง»** under the streak number, kept for length; «วันที่เรียนต่อเนื่อง» is clearer if the tile has room.
6. **«ประกบริมฝีปากบนและล่าง»** for closing the lips (P / B), replacing «ปิดริมฝีปากทั้งสองข้าง».
7. **«ผิดเป็นครู»** for *Live and learn*: close in use, not a literal match.
8. **Tinglish forms with no source**: «sweet little / sweet less», «open the air», «depend on you», «I'm full already». Real, or invented by the writers?
9. **The *Mr. Somchai* note**: whether Thai companies really use *Mr.* + first name in English (common in Thailand), or whether the app should advise *Khun Somchai*.
10. **«การ์ดสถิติเรียนต่อเนื่อง»** (alt text) and **«ความเป็นส่วนตัว»** in the footer: wording and length.

## 5. Found but not fixed (out of scope or parity-bound)
- **Shared practice items whose natural Thai answer is rejected** (widening `a` breaks parity; the prompt cues mostly steer): pron ty «เบามาก» (*so light*, *really light*); prep ty «ฉันดื่มกาแฟตอนเช้า» (*every morning*); questions ty «พูดภาษาอังกฤษได้ไหม» already accepts *Can you*; email ty «พรุ่งนี้ฉันหยุดงาน» is broad already.
- **Shared English distractors that are acceptable English**: `countable` mc *Can I have ___ water?* (*a water* is normal when ordering); `object-have` and practice still contain *I am two brothers.* as a distractor (harmless).
- **Shared English with Korean or US context**, kept per profile §9: *Who's your bias?* (K-pop), Seoul / Busan / Jeju / Daegu / kimchi / won / Han Kang / Korean in checks and practice, translated literally. DIALOG *I play football* is US-ambiguous (American football), but DIALOG English is not mine to change.
- **Roadmap basis line** «ลำดับ CEFR A1-B1 ปรับให้เหมาะกับผู้พูดภาษาเกาหลี» is a faithful translation of the shared English and reads oddly to Thai users (the zh reviewer flagged the same); the lead's call.
- **Roadmap lists vs lesson titles.** Roadmap titles drop the commas inside English lists («and but or so และ because»), while course lesson titles keep them («and, but, or, so, because»). Both follow the profile (English keeps its own punctuation). I made only the two foreign-script roadmap titles consistent and left the rest.
- **Interface keys only an engine change can fix:** "Read" and "Drills" both carry «ทักษะ»; "Type" serves the quiz chip and the feedback radiogroup; the conjugator and grammar-index strings describe Korean forms.
- **Overflow warnings** for «ความเป็นส่วนตัว» and «ความเป็นส่วนตัวและข้อกำหนด» are pre-existing; the validator counts combining marks, so the rendered width is smaller than the count suggests. Check at 390px if the footer wraps.
- **deviations.json** still lists `lessons:tinglish` and `lessons:time-markers`, which parity reports as unused (covered by `extraLessons`); not edited, as it is outside my scope.
