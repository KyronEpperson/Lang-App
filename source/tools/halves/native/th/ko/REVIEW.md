# th-ko native half: cold review (2026-11-23)

**The reviewer is not a native speaker of Thai.** Every Thai wording choice below is a non-native judgment; the list at the end names what a Thai speaker should check first.

## What I checked

- **Every jsonl row**, joined by id with its Korean in `target/ko/` (and the English half where a cue or claim was in doubt): 1413 cards, 201 dialogues, 275 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items, 56 decks, 6 groups, 140 labels (pause items read against their Korean in `target/ko/course.json`), 33 lesson titles and blurbs.
- **All 33 lesson bodies.**
- **Practice and checks** against `a` / `x` / options: every `type` and `order` prompt cues politeness, tense and person enough to reach `a[0]` and to rule out `x`, and a script listed every mc option, check option and `x` that differs from the answer only in tense or level, each checked for a cue.
- **Mechanical scans** (scripts in the scratch folder): same Korean with more than one Thai gloss across cards, sentences, examples, dialogue halves, pause items and practice prompts; duplicate meanings within a deck and identical options; a particle audit by Korean ending (missing pair on 요/습니다 lines, pair on 반말, lone ครับ / ค่ะ / คะ, spaced slash, ครับ/ค่ะ on questions); Thai commas / full stops / question marks; leftover English; `บทที่ N` cross-references against `lessons.jsonl`; Thai name spellings; นาฬิกา; the stop-series wording in `trainer.json` (read only, no conflict found).
- I touched only the 11 merged `*.jsonl` and `lessons/*.html` here (plus this file). `work/`, `ui.json`, `trainer.json`, `course.json`, `target/` and `src/` are untouched. **Do not run `mk_native.js th --merge` again**: it rebuilds from `work/` and would undo this review.

Every edit is applied by id from one idempotent script that always starts from the pre-review copy: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-thko/tools/apply.py` (fixes in `fixes1.py` and `lfix1.py`, base in `base/`). A second run changes nothing (same hash). The script refuses any edit that changes a field's Hangul set, its `@@` count, a dialogue ` / ` or a blank. These files are session scratch.

**Validator:** `node tools/halves/validate.js th ko` → **errors: 0**, 5 warnings (the 4 pre-existing Hangul run-count warnings c0045, compare.k2, titles.k1, plans.14 and the waived extra jamo in `hangul.html`). Words remaining: 3 (ko.c0037 `ui / i / e`, ko.c0160 `2026`, ko.c0408 `3:30`, correctly identical to English). `assemble.js th ko` → 56 decks, 1413 cards; output passes `node --check`.

## Decisions

| Question raised | Decision | Applied to |
|---|---|---|
| Where ครับ/ค่ะ goes | Decide from the Korean ending. Pair on every gloss of a 요 / -습니다 / -시- line, including one-word 요-predicates (adjectives deck 좋아요 → ดี / ชอบครับ/ค่ะ). No pair on 반말, on dictionary forms (top-verbs, top-adjectives `-다`), on frames (저는 ___이에요) and on the core-verbs deck, whose 요-form cards gloss the verb itself (가요 → ไป (가다)). Questions and นะ: ครับ/คะ. One pair per line, at the end, with two exceptions kept on purpose: a countdown or interjection after it (g098 ได้แน่นอนครับ/ค่ะ หนึ่ง สอง สาม) and a two-speaker gloss (s0211, now joined by “—” like s0129). Quoted full-sentence glosses inside notes, `q`, `why` and bodies carry the pair (“ขอบคุณครับ/ค่ะ”); word glosses and table columns do not. The audit of the jsonl found no lone particle, no spaced slash and no pair on 반말. In lesson prose the only bare ครับ / ค่ะ / ผม are quoted Thai examples on purpose (polite.html กาแฟครับ, ผมทานแล้วครับ; texting.html ครับผม / ค่า; pronouns-questions.html ผม หรือ ดิฉัน), which show Thai usage, not glosses. | polite.html now says the pair also marks 습니다 and -시- lines |
| 네 + answer as ใช่ | After a verb question, echo the verb (มี / รับ / ได้ / เรียน / เสร็จ), as Thai does. ใช่ stays for agreeing with a statement (g028, g088), for a noun / identity question (g167, g170) and for “Yes, I'm sorry” (polite.13). 네 accepting or acknowledging before another phrase is ได้, as the dialogues already had it (g008, g135 ได้ ขอบคุณ…): polite.07 / .12 now read ได้ ขอบคุณครับ/ค่ะ. | g016, g024, g045, g050, g166; polite.07, .12 |
| “Formal” column headers | The header names what every cell is. polite: ทางการ (고맙습니다, 미안합니다); meet: ทางการ / ยกย่อง (반갑습니다 + 성함이 어떻게 되세요?) kept; plans: **ยกย่อง** (가시겠어요?, 있으세요? are -시- forms), replacing สุภาพมาก, which is not a glossary term. This overrides profile §3.6 for plans. | plans.html |
| 잘 자 vs 좋은 꿈 꿔 | 잘 자 = **หลับสบายนะ** (잘 자요 = หลับสบายนะครับ/คะ); 좋은 꿈 꿔 = **ฝันดีนะ**. | c0427 note, c0461, c0888 note, texting.08 |
| 저기요 glossed three ways | One gloss **ขอโทษนะครับ/คะ** plus a situation cue: (เรียกให้หันมา) on the card and pause item, (เรียกพนักงาน) on s0181; quoted as “ขอโทษนะครับ/คะ” in food.k1 / food.01; inside a dialogue line it is ขอโทษนะ + the request, with the pair at the end. | s0181, food.k1, food.01, g005, g010, g011, g012 |
| 수고하셨습니다 | Profile family kept and checked on every row: 수고하셨습니다 / 수고하셨어요 = ขอบคุณสำหรับงานวันนี้ครับ/ค่ะ (also from a boss, g108); 수고하세요 = ขอให้ทำงานราบรื่นนะครับ/คะ; 수고했어(요) = วันนี้เหนื่อยแย่เลยนะ(ครับ/คะ); 고생했어 = ลำบากแย่เลยนะ. No ทำได้ดี anywhere in the 수고 family. | no change needed |
| Letter cards with Thai sound comparisons in the meaning | Kept: on jamo / pronunciation cards the meaning *is* the sound (the English meaning is “a as in father”), so these are the profile's allowed jamo-card comparisons, not glosses. One format: RR + คล้าย / ตรงกับ / ระหว่าง…กับ…, low- or mid-class letters only. | c0001, c0014 (n คล้าย น), c0017 (m คล้าย ม) |
| Stop series | One statement everywhere: plain ㄱㄷㅂㅈ (g d b j) at the start = **ระหว่าง ก กับ ค / ต กับ ท / ป กับ พ / จ กับ ช**, a little breath, voiced between vowels, no Thai letter; tense ㄲㄸㅃㅉ ≈ ก ต ป จ, no breath; aspirated ㅋㅌㅍㅊ ≈ ค ท พ ช with a stronger puff. Cards c0013–c0031 and c0045–c0048, the consonant deck desc, `hangul.html`, `sound-changes.html` and `future.html` (kk = ก) already agreed; hangul.k2's distractor “g” now reads g (ระหว่าง ก กับ ค). | hangul.k2 |
| Times | Glosses use spoken Thai clock words chosen by the Korean's context (บ่ายสองโมง, เก้าโมงเช้า, หนึ่งทุ่ม, ห้าทุ่ม, ตีสอง), never นาฬิกา. Where the Korean hour is bare and nothing decides, both readings are given (한 시 → บ่ายโมง / ตีหนึ่ง). Prompts that test the hour keep the Korean number visible: “3 โมง”, “4 โมง”, “2:30 (สองโมงสามสิบนาที)”. Applied back over every row with 시: a 7 o'clock film is หนึ่งทุ่ม (e089, like s0201 / g062), waking at 7 stays เจ็ดโมง, 세 시쯤 is ประมาณบ่ายสามโมง in both c0993 and e253. | c1110, c0993, e089, numbers.k2, numbers.03, .06, .10, .13, counters.14 |
| Tense cue | **(อดีต)** after the quoted gloss or at the end of `p`, only where แล้ว / มา / a time word / ไม่ได้ do not already make the past clear (past.08, story.13; past.12 hint อดีต). A script listed every option and `x` that differs from the answer only in tense or level; two mc prompts had no cue and now carry (อดีต). | story.02, story.03 |
| คำชม deck vs pause label | Both kept. Deck labels must be unique among decks, and they are; the pause label is the Thai gloss of 칭찬 shown as “칭찬 · คำชม”, never a deck or a progress key. Renaming either would only swap a word for a synonym. | none |
| กล้า for “Bold” | Replaced by **จัดเต็ม** (full-on), because a trailing กล้า reads as “brave”. Only 3 rows used it. The deck desc now explains the scale: นุ่มนวล อบอุ่น หรือจัดเต็ม. | c1119, c1156, c1160, desc ko.d.flirting-words |
| Korean food and place names | One spelling each, as the merge already had: คิมบับ ต็อกบกกี บิบิมบับ พุลโกกิ รามยอน มักกอลลี จีแก (찌개) ซุปกิมจิ (김치찌개) · โซล เมียงดง คังนัม ฮงแด ฮงอิก อินชอน แม่น้ำฮัน หอคอยนัมซาน โชซอน · ล็อตเต้ ชินเซเก ฮุนได คาเคาทอล์ก. T-money is now ทีมันนี่ everywhere (c0594 keeps “(T-money)”), Rabbit is แรบบิท. | c0594 |
| Same Korean, same gloss | Unified where the split was real: 계산해 주세요 เช็กบิลด้วยครับ/ค่ะ; 성함이 어떻게 되세요? ขอทราบชื่อได้ไหมครับ/คะ; 조심히 가세요 กลับดี ๆ นะครับ/คะ; 좋은 하루 보내세요 ขอให้มีวันที่ดีนะครับ/คะ; 카드 돼요? จ่ายบัตรได้ไหม; 카드로 할게요 เดี๋ยวจ่ายด้วยบัตรนะครับ/คะ; 적립 되세요? มีบัตรสะสมแต้มไหม; 사이즈 뭐 있어요? มีขนาดอะไรบ้าง; 번호 좀 알려 줄래? บอกเบอร์หน่อยได้ไหม; 집에 잘 들어갔어? ถึงบ้านปลอดภัยไหม; 나랑 사귀자 มาคบกันเถอะ; 나 너 좋아하는 것 같아; 야, 뭐 해? เฮ้ย; 밥 먹었어? กินข้าวหรือยัง; 저 사람 คนโน้น; 똑바로 가세요 / 여기서 세워 주세요 with เลย. Spelling: เท่าไหร่ and เมื่อไหร่ throughout (was mixed with เท่าไร / เมื่อไร). Variants that only add a context cue or are a different sentence type were kept. | listed in the cell |
| Thai punctuation | Trailing full stops removed from every native field (mostly `why` lines and notes ending in a Korean form, e.g. “가요 → 갔어요.”). Korean sentences keep their own punctuation inside Thai notes. | mechanical |
| Trainers | The profile says the trainers are off, but `trainer.json` is complete and assembly turns them on. I added no prose either way; worth aligning the profile. | none |

Other fixes: c0133 note 먹고 갈게요 = กินที่นี่ (not ทาน, it is about oneself); c0117 콘센트 etymology hedged (เชื่อกันว่า); c0735 선물이에요 = เป็นของขวัญ; c0775 note reworded; c0497 note split; c0250 note; c0404 / c0406 notes lost their commas; g001 drops the calque ยินดีที่ได้รู้จักเป็นครั้งแรก; e166 이것 좀 도와주세요 is a request, not a question; pause expression.14 설마 = คงไม่หรอกมั้ง (was ไม่มั้ง); `pronouns-questions.html` said 이분 means “that person”, now “ท่านนี้”; top-interjections desc and c1055 / g174 짜잔 = แท่นแท้น.

## Rows changed per file

Each row counted once.

| File | Rows changed |
|---|---|
| cards.jsonl | 59 (28 only lost a trailing full stop) |
| dialog.jsonl | 23 |
| practice.jsonl | 71 (57 of them only lost a trailing full stop) |
| checks.jsonl | 10 (7 only lost a trailing full stop) |
| sentences.jsonl | 3 |
| decks.jsonl | 3 (descs only) |
| labels.jsonl | 2 |
| examples.jsonl | 2 |
| lessons.jsonl | 1 (spelling) |
| patterns, groups | 0 |
| lessons/*.html | 3: plans, polite, pronouns-questions |

## Final deck labels (56) and group names (6)

No label or group name changed; all are unique, short Thai, and none collides with วลีของฉัน.

| id | label |
|---|---|
| ko.d.hangul-vowels | สระฮันกึล |
| ko.d.hangul-consonants | พยัญชนะฮันกึล |
| ko.d.hangul-advanced | ฮันกึลขั้นสูง |
| ko.d.pronunciation-tips | เคล็ดลับการออกเสียง |
| ko.d.survival-phrases | ประโยคเอาตัวรอด |
| ko.d.introductions | การแนะนำตัว |
| ko.d.survival-phrases-2 | ประโยคเอาตัวรอด 2 |
| ko.d.asking-around | สอบถามทั่วไป |
| ko.d.cafe-convenience-store | คาเฟ่และร้านสะดวกซื้อ |
| ko.d.numbers-in-the-wild | ตัวเลขในชีวิตจริง |
| ko.d.counters | ลักษณนาม |
| ko.d.weather-feelings | อากาศและความรู้สึก |
| ko.d.connectors | คำเชื่อม |
| ko.d.doctor-pharmacy | หมอและร้านขายยา |
| ko.d.housing-errands | ที่พักและธุระ |
| ko.d.honorifics | รูปยกย่อง |
| ko.d.places-buildings | สถานที่และอาคาร |
| ko.d.hobbies | งานอดิเรก |
| ko.d.food-words | คำศัพท์อาหาร |
| ko.d.drinks | เครื่องดื่ม |
| ko.d.activities | กิจกรรม |
| ko.d.tv-entertainment | ทีวีและความบันเทิง |
| ko.d.position-direction-words | ตำแหน่งและทิศทาง |
| ko.d.core-verbs | คำกริยาหลัก |
| ko.d.particles | คำช่วย |
| ko.d.numbers | ตัวเลข |
| ko.d.sweet-talk | คำหวาน |
| ko.d.cute-things-to-say | ประโยคน่ารัก |
| ko.d.flirting | การจีบ |
| ko.d.casual-texting | แชตกับเพื่อน |
| ko.d.hype-cool | คำเชียร์และคำชม |
| ko.d.hanging-out | ออกไปเที่ยวกัน |
| ko.d.k-pop-fan-culture | เคป๊อปและแฟนคลับ |
| ko.d.social-media-slang | โซเชียลและสแลง |
| ko.d.dating-deeper | เดตแบบจริงจัง |
| ko.d.work-office | งานและออฟฟิศ |
| ko.d.small-talk | คุยเล่นทั่วไป |
| ko.d.food-ordering | อาหารและการสั่ง |
| ko.d.directions-transport | ทิศทางและการเดินทาง |
| ko.d.time-days | เวลาและวัน |
| ko.d.family-people | ครอบครัวและผู้คน |
| ko.d.adjectives | คำคุณศัพท์ |
| ko.d.k-drama-phrases | ประโยคในซีรีส์เกาหลี |
| ko.d.top-nouns | คำนามที่ใช้บ่อย |
| ko.d.top-verbs | คำกริยาที่ใช้บ่อย |
| ko.d.top-adjectives | คำคุณศัพท์ที่ใช้บ่อย |
| ko.d.top-adverbs | คำวิเศษณ์ที่ใช้บ่อย |
| ko.d.top-pronouns | คำสรรพนามที่ใช้บ่อย |
| ko.d.top-particles | คำช่วยเพิ่มเติม |
| ko.d.top-connectors | คำเชื่อมเพิ่มเติม |
| ko.d.top-interjections | คำอุทานที่ใช้บ่อย |
| ko.d.top-words | คำทั่วไปที่ใช้บ่อย |
| ko.d.top-counters | ลักษณนามเพิ่มเติม |
| ko.d.flirting-words | คำศัพท์สำหรับจีบ |
| ko.d.compliments | คำชม |
| ko.d.countries | ประเทศ |

| group id | name |
|---|---|
| ko.grp.foundations | พื้นฐาน |
| ko.grp.everyday | ชีวิตประจำวัน |
| ko.grp.vocabulary | คำศัพท์ |
| ko.grp.grammar | ไวยากรณ์ |
| ko.grp.social | เข้าสังคม |
| ko.grp.core-words | คำศัพท์หลัก |

## For a native speaker to check (max 20)

1. ครับ/ค่ะ in glosses overall: natural or clutter? In particular ได้ ขอบคุณครับ/ค่ะ for 네, 고마워요 (polite.07, .12, g135) and ใช่ ขอโทษครับ/ค่ะ (polite.13).
2. ฉัน beside ครับ/ค่ะ (ฉันชื่อมินซูครับ/ค่ะ) and เธอ for 너.
3. 잘 자 = หลับสบายนะ vs 좋은 꿈 꿔 = ฝันดีนะ: is ฝันดี the more natural rendering of 잘 자 for Thai readers?
4. The plans header ยกย่อง and the meet header ทางการ / ยกย่อง.
5. 저기요 = ขอโทษนะครับ/คะ, and ขอโทษนะ + request inside a line (g005, g011, g012) where a Thai would say พี่ครับ / น้องคะ.
6. The 수고 family: ขอบคุณสำหรับงานวันนี้ (also from a boss, g108), ขอให้ทำงานราบรื่นนะ, วันนี้เหนื่อยแย่เลยนะ, ลำบากแย่เลยนะ.
7. Times: บ่ายโมง / ตีหนึ่ง for 한 시, and the prompts “3 โมง”, “2 โมง”, “4 โมง” for bare hours.
8. จัดเต็ม for “Bold” on the flirting scale, and the bare scale words at the end of notes (นุ่มนวล / อบอุ่น).
9. Echoing the verb for 네: รับ ขอหนึ่งใบ (g045), มี แพ้ถั่วลิสง (g050), เรียนอยู่ (g024), เสร็จแล้ว (g166).
10. Pause labels: expression.14 คงไม่หรอกมั้ง, expression.12 สุดยอด / ไม่จริงน่า, compliment.17 มีออร่า, compliment.13 มีคุณอยู่แล้วอุ่นใจ.
11. Interjections: แท่นแท้น (짜잔), แฮ่ (왁!), เฮือก แย่แล้ว (헉), ตายละ ลืม (아차), ตายแล้ว แม่เจ้า (어머).
12. 별말씀을요 = ไม่เป็นไรเลยครับ/ค่ะ as a reply to praise (c1206, g002, g201).
13. Name spellings: ทีมันนี่, คาเคาทอล์ก, ชินเซเก, คังนัม, เมียงดง, จีแก for 찌개, พุลโกกิ.
14. Glossary terms in lessons: คำช่วย, ส่วนลงท้าย vs คำลงท้าย (polite.html), ก้านกริยา, กริยาบอกลักษณะ, เสียงธรรมดา / เสียงพ่นลม / เสียงเกร็ง.
15. The hangul reading guide: ㅓ “ระหว่าง ออ กับ เออ”, ㅅ before i “ใกล้ ชี เบา ๆ”, hangugeo = ฮัน-กู-กอ.
16. Country names: ตุรกี (ทูร์เคีย), เช็กเกีย, อังกฤษ (สหราชอาณาจักร) next to อิงแลนด์.
17. Idioms and sayings: i29 เก้าในสิบ, i09 ไฟไหม้ฟาง, saying.07 ง่ายเหมือนปอกกล้วยเข้าปาก, saying.06 ดันมาตรงวันนี้พอดี.
18. Slang glosses: 인정 ยอมรับเลย / ก็จริงนะ, 대박이다 ปังมาก, 훈남 หนุ่มหล่อออร่าอบอุ่น, 존맛탱 อร่อยสุด ๆ.
19. c1171 라면 먹고 갈래요? note: the film is named by its English title One Fine Spring Day; is there a known Thai title?
20. 아저씨 = ผู้ชายวัยกลางคน คุณลุง and 아줌마 = ผู้หญิงวัยกลางคน (no ป้า), c0712 / c0741.
