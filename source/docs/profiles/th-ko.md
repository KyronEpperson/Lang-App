# Thai speakers learning Korean: pair profile

Course `th-ko`: Korean for Thai speakers. It is a standard course built from the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards; `docs/HALVES-SPEC.md`) and a Thai native half `tools/halves/native/th/ko/`, which four writers (w1–w4) fill from this profile.

This profile is the writers' authority:
- It follows `docs/profiles/tl-ko.md` in structure.
- It keeps the Thai house style of `docs/profiles/th.md` (th-en) unless it says otherwise. Where the two differ, **this profile wins for th-ko**.
- It settles up front the questions the es-ko review (`native/es/ko/REVIEW.md`) had to settle afterwards.

**Tags:**
- **[research]**: a study opened for this profile, sample named. **(Thai L1)** means the learners are Thai.
- **[convention]**: reference works, official rules or established practice.
- **[practitioner]**: a stated view without data.
- **[inference]**: this profile's reasoning. Every Thai sentence written here is [inference] (the author is not a native speaker); §11 lists the native checks.
- **[th.md]**: taken from the th-en profile, whose sources were not re-opened.

## 1. Summary

1. **Register (§3.1):** standard Central Thai. Prose has no polite particles and no gendered pronoun for the learner.
2. **ครับ/ค่ะ only in glosses of Korean lines (§3.2).** They show the Korean speech level and never appear in instructions.
3. **Terms (§3.4):** a closed Thai list that matches the app's own Thai strings (คำช่วย, ตัวสะกด, ลักษณนาม, ก้านกริยา).
4. **Sounds (§5, §6):** Thai's three-way stop contrast maps tense consonants and aspirated ones, but **not plain ㄱㄷㅂㅈ**. Thai finals are a bridge, **except final ㄹ**.
5. **Grammar (§4):**
   - **Bridges:** classifiers, question words in place, dropped pronouns, หมื่น = 만.
   - **Traps:** SOV order, modifiers flipped to the other side of the noun, obligatory tense, ทาน vs 드시다.
6. **Respellings (§6.1):** Thai-script respellings are comparisons, never readings.

## 2. Learners

- **School and university students.** Korean is taught in Thai secondary schools. Burapha freshmen in 2024 had studied it "for about 3-4 years before entering university" ([Kim & Kim](https://so06.tci-thaijo.org/index.php/klcj/article/view/287231)) [research (Thai L1), n=47].
- **EPS-TOPIK workers.** In a survey of 384 workers, learners "have work obligations, time constraints, and financial barriers", and courses are short exam cramming ([Boonphisudsilp 2025](https://so04.tci-thaijo.org/index.php/abc/article/view/271834)) [research, abstract]. Workplace vocabulary is not in these 33 lessons.
- **K-pop / K-drama fans.** Many already read Thai-script spellings of Korean (§6.1) [inference].
- **Weak English for many adults:** EF EPI 2025, Thailand 402, "Very low" [th.md]. So never explain Korean through English grammar or English sounds.

## 3. Register, glosses, terms

### 3.1 The Thai text

- **Variety and voice:** standard Central Thai, as in th.md §2. A friendly teacher writing neutral written Thai (ภาษาเขียนที่เป็นกันเอง), in complete, soft sentences.
- **No polite particles in prose.** This covers lesson prose, `q`, `why`, `hint`, deck `desc`, labels, the explanatory part of notes, and interface strings. The learner's gender is unknown [th.md §2].
- **Addressing the learner:**
  - Drop the pronoun wherever Thai allows; use คุณ only where a subject is needed.
  - Never use ท่าน, เธอ, นาย, แก or หนู for the learner.
  - Commands: a plain verb, softened with ลอง… or …ได้เลย. No กรุณา.
  - นะ at most once per passage, and only in encouragement.
- **Punctuation and spacing** (th.md §2):
  - no full stop and no commas in Thai sentences; a space separates phrases and sentences;
  - **one space on each side of every Latin word, digit and Hangul run** (`ใส่ 요 ท้ายประโยค`, `บทที่ 10`);
  - no question mark after a Thai question, in glosses and prompts too; `!` only in praise;
  - ๆ is spaced on both sides (th.md, not en-th);
  - Arabic digits, NFC, never U+200B.
- **Names:** ภาษาเกาหลี, ภาษาไทย, ฮันกึล (as the app's Thai roadmap writes it), โซล. In `course.json`: `"name": "ภาษาเกาหลี"`, `brand` stays `한글`.

### 3.2 Glosses of Korean lines: the particle rule

**Where it applies:**
- card `meaning` of a sentence or set phrase, including one-word ones (고마워요, 네);
- `sentences` glosses (`{{ex:}}`);
- dialogue and example `tr`;
- practice `p`;
- pause items;
- any gloss quoted inside `q`, `why` or a body (“ขอบคุณครับ/ค่ะ”).

**Where it never applies:**
- instructions and explanations;
- labels, including the four greetings, which are shown daily as UI;
- deck descriptions;
- pattern `meaning`s;
- cards for bare nouns, dictionary forms (가다) or frames (저는 ___이에요);
- the gloss column of lesson tables.

**Decide from the Korean row, not the English.** The work files hold no Korean, so join by id against `target/ko/` (`cards`, `sentences`, `dialog`, `examples`, `practice`; read-only).

| Korean ending | Thai gloss | Tag | Example |
|---|---|---|---|
| 요-form (incl. 이에요, 주세요, noun + 요) | + **ครับ/ค่ะ**; questions **ครับ/คะ** | (สุภาพ) | 고마워요 → ขอบคุณครับ/ค่ะ · 어디 가요? → ไปไหนครับ/คะ · 커피요 → กาแฟครับ/ค่ะ |
| -습니다 / -ㅂ니까 | formal wording + **ครับ/ค่ะ** | **(ทางการ)** | 감사합니다 → ขอบคุณครับ/ค่ะ (ทางการ) |
| 반말 | **no particle**; casual wording allowed (นะ, เหรอ, ขอบใจ) | (กันเอง) | 고마워 → ขอบใจนะ · 어디 가? → ไปไหน |
| -(으)시- / honorific verb | polite vocabulary (ทาน, พักผ่อน, อยู่) + **ครับ/ค่ะ** | **(ยกย่อง)** | 드세요 → ทานเยอะ ๆ นะครับ/คะ (ยกย่อง) |
| -(으)세요 as a request or a set phrase (가세요, 앉으세요, 주세요, 안녕하세요) | treated as a 요-form: นะครับ/คะ, เชิญ…ครับ/ค่ะ, ขอ…ครับ/ค่ะ | only per the tag rule | 앉으세요 → เชิญนั่งครับ/ค่ะ |

**Mechanics:**
- **Spelling.** Always the unspaced pair: **ครับ/ค่ะ** for statements, requests and commands; **ครับ/คะ** for questions and for requests ending in นะ (`นะครับ/คะ`). Attach it to the word before. Never use one particle alone. Never space the slash: ` / ` is the alternative separator and the dialogue separator.
- **One particle per line,** after the last sentence of a gloss or a dialogue line.
- **Tag rule.** Write a tag in exactly three cases, and never otherwise:
  1. the English row has one: (polite) → (สุภาพ), (polite 요-form) → (รูป 요), (casual) → (กันเอง), (formal) → (ทางการ), (honorific) → (ยกย่อง);
  2. a practice `p` needs one to rule out an `x` or another level;
  3. two meanings in one deck, or two options of one question, would otherwise read the same (고맙습니다 / 고마워요).

  An English situation cue such as "(to an elder)" is translated as a cue, not as a tag. Tags are Thai only.
- **네 and its family:**
  - 네 alone on a line → `ครับ/ค่ะ`; 네 + more → `ใช่` (agreeing) or `ได้` (accepting), with the particle at the end of the line.
  - 응 → `อือ` / `ใช่`.
  - 아니요 → `ไม่ใช่ครับ/ค่ะ` / `ไม่ครับ/ค่ะ`; 아니 → `ไม่ใช่` / `ไม่`.
- **Pronouns:**
  - Drop them wherever Thai would. Where 저 / 나 must stay (저도요, 저는요?, contrast), write **ฉัน** for both: the level shows in the particle.
  - 우리 → เรา / พวกเรา; 너 → เธอ (the subtitle norm); 당신 → คุณ (the lesson says it is not the polite "you"); 그 사람 → เขา; 이분 → ท่านนี้.
  - Never ผม / ดิฉัน in glosses.

**Why use particles here, when tl-ko bans *po* in glosses** [inference]: ครับ/ค่ะ fit 요 closely. Both attach to a bare noun (กาแฟครับ ≈ 커피요), both drop between friends, and both double as "yes". So the gloss itself teaches the level, and `polite` states the four breaks (§4.7). th.md's ban on particles in translations still holds for every other field.

### 3.3 Fixed phrases (one gloss each)

Level tags are added only by the §3.2 tag rule. The parentheses below are situation cues and stay.

| Korean | Thai |
|---|---|
| 안녕히 가세요 / 계세요 | สวัสดีครับ/ค่ะ (พูดกับคนที่กำลังจะไป) / (พูดกับคนที่อยู่ต่อ) |
| 안녕히 주무세요 | ราตรีสวัสดิ์ครับ/ค่ะ |
| 죄송합니다 / 미안해요 / 미안해 | ขอโทษครับ/ค่ะ / ขอโทษครับ/ค่ะ / ขอโทษนะ (deck collisions get tags) |
| 잘 부탁드립니다 (meeting / 업무) | ฝากเนื้อฝากตัวด้วยครับ/ค่ะ / รบกวนด้วยนะครับ/คะ |
| 잘 먹겠습니다 / 잘 먹었습니다 | ขอบคุณสำหรับอาหารครับ/ค่ะ (ก่อนกิน) / อิ่มแล้ว ขอบคุณครับ/ค่ะ (หลังกิน) |
| 수고하세요 | ขอให้ทำงานราบรื่นนะครับ/คะ (to someone still working, as you leave) |
| 수고하셨습니다 | ขอบคุณสำหรับงานวันนี้ครับ/ค่ะ. Never "ทำได้ดี", which grades a superior |
| 수고했어요 / 수고했어 · 고생했어 | วันนี้เหนื่อยแย่เลยนะครับ/คะ / วันนี้เหนื่อยแย่เลยนะ · ลำบากแย่เลยนะ |
| -(으)ㄹ게요 · -자 | เดี๋ยว…นะครับ/คะ (a promise: 갈게요 เดี๋ยวไปนะครับ/คะ) · …กันเถอะ |
| -(으)ㄹ까요? · -(으)ㄹ래요? | …กันไหมครับ/คะ · อยาก…ไหมครับ/คะ |
| 혹시 · 좀 | ไม่ทราบว่า… (casual: …หรือเปล่า) · หน่อย |
| 선생님 · 사장님 · 고객님 | ครู / คุณครู (คุณหมอ for a doctor) · เจ้าของร้าน / ประธานบริษัท · คุณลูกค้า |
| 대리 · 과장 · 차장 · 부장 · 팀장 · 대표 | ผู้ช่วยผู้จัดการ · ผู้จัดการ · ผู้จัดการอาวุโส · หัวหน้าแผนก · หัวหน้าทีม · ซีอีโอ (`office` says ranks vary) |

**Labels:**
- **Level titles:** 새싹 ต้นกล้า · 학생 นักเรียน · 선배 รุ่นพี่ · 고수 ยอดฝีมือ · 달인 ผู้เชี่ยวชาญ · 사범 ปรมาจารย์.
- **Greetings** (labels, no particle): ดึกแล้ว วันนี้เหนื่อยแย่เลยนะ · อรุณสวัสดิ์ · สวัสดีตอนบ่าย · สวัสดีตอนเย็น.
- **Pause sets:** คำชม · สำนวนประจำวัน · มารยาทพื้นฐาน · สุภาษิต. Pause items follow the particle rule.
- **Sample voice:**
  - «요 คล้าย ครับ/ค่ะ ตรงที่ทำให้ประโยคสุภาพ แต่ 요 ไม่บอกเพศของผู้พูด และต้องอยู่ท้ายทุกประโยค»
  - «ภาษาไทยไม่ต้องเปลี่ยนรูปกริยาเมื่อพูดถึงเมื่อวาน แต่ภาษาเกาหลีต้องใช้รูปอดีตทุกครั้ง»

### 3.4 Glossary (closed list)

| Idea | Thai term | Note |
|---|---|---|
| particle | **คำช่วย** | Not "Particle" and not the academic คำบ่งชี้. Thai grammar has no class with this name [practitioner: Univext] |
| 은/는 · 이/가 · 을/를 | **คำช่วยบอกหัวเรื่อง · บอกประธาน · บอกกรรม** | หัวเรื่อง is used only for the 은/는 noun |
| Thai ที่ ใน จาก | **คำบุพบท** | only in comparisons |
| noun / verb | **คำนาม / คำกริยา** | |
| action / describing verb | **กริยาแสดงการกระทำ / กริยาบอกลักษณะ** | Use คำคุณศัพท์ only where the English says "adjective" |
| 하다 verb · stem · 가다-form | **กริยา 하다 · ก้านกริยา · รูปพจนานุกรม** | ก้านกริยา as in the app's roadmap |
| Korean ending (-아요, -고) | **ส่วนลงท้าย** | **Not คำลงท้าย**: that word means ครับ/ค่ะ/นะ, and `polite` needs the two ideas kept apart |
| Thai ครับ/ค่ะ/นะ | **คำลงท้าย** | only in comparisons |
| politeness level | **ระดับภาษา** | |
| -습니다 / 요-form / 반말 | **รูปทางการ / รูป 요 (รูปสุภาพ) / รูปกันเอง (반말)** | Never ภาษาหยาบ |
| -(으)시- / 드시다 | **รูปยกย่อง / กริยายกย่อง** | |
| 씨, 님, 오빠; Thai คุณ, พี่ | **คำเรียก** | |
| counter | **ลักษณนาม** | The Thai term itself: the concept is shared |
| native / Sino-Korean numbers | **ตัวเลขเกาหลีแท้ / ตัวเลขจีน-เกาหลี** | |
| tenses | **รูปปัจจุบัน / รูปอดีต / รูปอนาคต** | Not กาล. Thai แล้ว กำลัง จะ are **คำบอกเวลาภาษาไทย** |
| time word · pronoun · question word · connector | **คำบอกเวลา · คำสรรพนาม · คำแสดงคำถาม · คำเชื่อม** | |
| softener (좀, 혹시) | **คำเสริมให้นุ่มนวล** | |
| negative · plural · possessive · modifier | **ประโยคปฏิเสธ · พหูพจน์ · ความเป็นเจ้าของ · การขยายคำนาม** | |
| vowel / consonant / letter / block | **สระ / พยัญชนะ / ตัวอักษร / พยางค์** | One word, พยางค์, for both the block and the syllable |
| 받침 | **ตัวสะกด (받침)** | the Thai school term; a bridge |
| plain / aspirated / tense | **เสียงธรรมดา / เสียงพ่นลม / เสียงเกร็ง** | Mention once that some books say เสียงหนัก |
| linking / nasal change / sound change | **การเชื่อมเสียง / การกลายเป็นเสียงนาสิก / การเปลี่ยนเสียง** | |
| romanization | **คำอ่าน** (UI); **คำอ่านอักษรโรมัน** at first mention | |
| tone / vowel length | **วรรณยุกต์ / สระสั้น-ยาว** | only to say that Korean has neither |

### 3.5 Interface names

From `packs/i18n-th.js` `exact`:
- **Tabs:** วันนี้ · บทเรียน · ฝึกหัด · ทบทวน · พัฒนาการ.
- **Buttons:** จำได้ (Got it) · อีกครั้ง (Again) · ตรวจคำตอบ (Check).
- **Things:** ชุดการ์ด (deck) · การ์ด (card) · วลีของฉัน (My phrases).
- **Read = ทักษะ.** It holds the trainers, which are off for this course, so never name it.
- **`ui.json`** (`uiKeys`) uses the same words; Romanization → คำอ่าน.

### 3.6 Format constraints

- **Hangul set-equality.** Each Thai string keeps exactly its English row's Hangul runs. **The Korean in §4 and §7 is there for the writer's understanding.** It goes into a body only if that body's English already has the same runs (`{{ex:}}` rows do not count). Otherwise make the point in Thai alone. For example, `past`, `negation` and `cant` can show the ไม่ได้ไป / ไปไม่ได้ contrast in Thai, next to Korean the body already has.
- **`_waive`.** Only `hangul` needs one (the guide names extra jamo), and `sound-changes` only if a writer adds jamo. Put it with a `_note` on the `lessons.jsonl` title row.
- **Deck descriptions and card notes cannot add jamo.** Reading notes there use RR letters and Thai.
- **Deck labels** are progress keys. Each is Thai, unique and short, and is neither วลีของฉัน nor "My phrases". No label starts with English "Hangul" or "Pronunciation". w1 lists them.
- **Dialogue `tr`** keeps one ` / `.
- **Blanks** `__` stay.
- **No braces** in glosses.
- **Length limits:** `q p why hint` ≤ 400 characters, options ≤ 200.
- **No space + `on` + letters + `=`** in bodies. Watch RR words such as *oneul*: write `oneul: วันนี้`.
- **Stroke diagrams:** `hangul` keeps "แตะตัวอักษรเพื่อดูลำดับการเขียนอีกครั้ง".
- **`sound-changes`** drops the "open Read … Sound changes drill" sentence and points to บทเรียน / ทบทวน instead.
- **Cross-references** use §7's Thai number and title (บทที่ 32 ขอสิ่งต่าง ๆ อย่างสุภาพ).
- **"Say it 3 ways" headers:** `polite` and `meet` use ทางการ · สุภาพ · กันเอง. `plans` uses **สุภาพมาก** · สุภาพ · กันเอง, because its first column holds -시- forms, not -습니다. Table glosses carry no particle.

## 4. What a Thai speaker already knows

Thai-side facts follow th.md §4 and en-th.md [th.md]. Mappings are [inference] unless tagged.

### 4.1 Word order and the noun phrase

- **SVO → SOV.** Thai: ฉันกินข้าว. Korean: 밥을 먹어요, with the verb last. Rewrite `sov` and `sentences` against Thai order.
- **Bridge: question words stay in place in both languages.** นี่อะไร = 이거 뭐예요; ห้องน้ำอยู่ไหน = 화장실 어디예요. The English half's "don't front the question word" is an English-speaker error: present it as a shared habit.
- **Bridge: topic first** (ข้าว ฉันกินแล้ว) works like the 은/는 frame.
- **Trap: describing words flip sides.** Thai puts them after the noun: บ้านใหญ่, บ้านของฉัน, บ้านหลังนี้, อาหารที่ฉันชอบ. Korean puts them before: 큰 집, 제 집, 이 집, 제가 좋아하는 음식. Only counting keeps the Thai order (§4.5).

### 4.2 Prepositions before, particles after

- **Thai has no subject or object markers.** It uses word order, plus prepositions *before* the noun (ที่บ้าน, จากโซล). Korean uses particles *after* the noun (집에, 서울에서).
- **One ที่ → 에 or 에서, chosen by the verb:** อยู่ที่บ้าน = 집에 있어요; กินข้าวที่บ้าน = 집에서 먹어요. จาก = 에서.
- **ไป takes no preposition**, so expect 학교 가요 without 에. It is colloquially fine, but practice answers expect 에 unless the target row lists the bare form.
- **ด้วย sits after the noun, like 도:** ฉันด้วย = 저도.
- **เท่านั้น = 만** (กาแฟเท่านั้น = 커피만). The trap: 도 and 만 *replace* 은/는, 이/가 and 을/를.

### 4.3 เป็น / คือ, มี, อยู่ → 이에요, 있어요, 없어요

| Thai | Korean | Job |
|---|---|---|
| เป็นนักเรียน / นี่คือโรงเรียน | 학생이에요 / 여기는 학교예요 | A = B |
| ไม่ใช่นักเรียน | 학생이 아니에요 | A ≠ B |
| มีแมว · ที่นี่มีโรงเรียน | 고양이가 있어요 · 여기에 학교가 있어요 | having, existing |
| อยู่ที่โรงเรียน | 학교에 있어요 | location |
| ไม่มีเวลา · เขาไม่อยู่ | 시간이 없어요 · 없어요 | negatives |

**있어요 = มี + อยู่ in one word; 없어요 = ไม่มี and ไม่อยู่.** Rebuild `isseoyo` on this table and drop the English "is does two jobs". Thai adjectives need no "be" (อาหารอร่อย), and Korean ones don't either (맛있어요), so the English warning is moot.

### 4.4 Tense vs แล้ว / กำลัง / จะ

- **Thai verbs never change.** Time words and optional แล้ว / กำลัง / จะ / เคย carry the time. Korean marks tense on every verb.
- **Main trap: a time word is not enough.** เมื่อวานไปตลาด → 어제 시장에 갔어요, not 가요. Thai learners of English rank this error first in writing [th.md §4]. Expect the same in Korean [inference].
- **จะ ≈ -(으)ㄹ 거예요;** คงจะ ≈ 거예요 with describing verbs ("probably"). กำลังกิน ≈ 먹어요.
- **ไม่ได้ + verb = past negative:** ไม่ได้ไป = 안 갔어요; ยังไม่ได้กิน = 아직 안 먹었어요. Contrast **ไปไม่ได้ = 못 가요 / 갈 수 없어요.** Use the pair in `past`, `negation` and `cant`.

### 4.5 Classifiers = counters (strongest bridge)

- **Same order: noun + number + classifier.** กาแฟ 2 แก้ว = 커피 두 잔; แมว 3 ตัว = 고양이 세 마리; ตั๋ว 2 ใบ = 표 두 장; กี่แก้ว = 몇 잔.
- **Breaks:**
  1. native numbers, with 1–4 shortened (한 개);
  2. คน 3 คน vs 사람 세 명;
  3. แมวตัวนี้ vs 이 고양이 (no counter after a demonstrative);
  4. the particle goes after the counter (맥주 두 병을).

### 4.6 Numbers: shared Chinese roots, 만 = หมื่น

- **Shared roots.** Thai numerals 2, 3, 4, 6–10 and หมื่น are "traceable to Middle Chinese" ([Wikipedia](https://en.wikipedia.org/wiki/Thai_numerals)), and so are the Sino-Korean numerals. So 삼 ≈ สาม, 사 ≈ สี่, 육 ≈ หก, 칠 ≈ เจ็ด, 팔 ≈ แปด, 구 ≈ เก้า, 십 ≈ สิบ, 이(십) ≈ ยี่(สิบ). Present this as a memory aid ("มีรากจากภาษาจีนเหมือนกัน"), not a sound rule.
- **만 = หมื่น.** Both languages count in ten-thousands: 오만 원 = ห้าหมื่นวอน. This replaces the English "not 1,000" tip. Break: แสน = 십만; ล้าน = 백만.
- **Trap:** hours (세 시, not 삼 시) and age (스무 살) are native. Thai clock and age words give no clue.

### 4.7 Speech levels vs ครับ/ค่ะ, pronouns, kin terms

**Bridges:**
1. **ครับ/ค่ะ ≈ 요.** Both attach to fragments (กาแฟครับ / 커피요), both drop with friends, and each also means "yes", like 네.
2. **ทาน / รับประทาน vs กิน ≈ 드시다 vs 먹다.** Thai already swaps the verb to show respect.
3. **Thais ask age to choose พี่ / น้อง; Koreans ask 몇 살이에요? to choose the speech level.** This is the frame for `meet`.
4. **คุณมินซู ≈ 민수 씨,** with the title on the other side of the name; คุณลูกค้า ≈ 고객님.

**Breaks** (all four in `polite`; `honorific` repeats 3):
1. ครับ/ค่ะ mark the speaker's gender. 요 never does.
2. 요 must end every sentence at that level. Thai drops ครับ/ค่ะ inside a conversation, even with strangers; dropping 요 means switching to 반말.
3. -시- honours the doer and never yourself. Thais say ผมทานแล้วครับ about themselves, but 저는 드셨어요 is wrong (✗ → 먹었어요). 할머니가 주무세요 honours grandma even in talk with a friend.
4. -습니다 is a different ending tied to the situation (announcements, offices, first meetings), not a stronger particle. The nearest Thai is formal vocabulary (ขอบพระคุณ).

**Kin terms:**
- พี่ is the same whoever speaks. Korean 형/오빠 and 누나/언니 depend on **the speaker's** gender: men say 형 and 누나, women say 오빠 and 언니.
- Thais call staff พี่ / น้อง; Koreans say 저기요, 사장님, 기사님.
- คุณ ≠ 당신: Korean drops "you", or uses name + 씨 or a title instead.

### 4.8 Other bridges ([inference])

- **Dropped pronouns are shared.** Never push 저는.
- **Negative questions:** ใช่ and 네 both agree with the statement (안 가요? — 네 = "right, not going").
- **Questions:** ไหม at the end ≈ rising tone in the 요-form; -습니까 is a question ending like ไหม.
- **Connectors:** -고 ≈ แล้วก็; -지만 ≈ แต่; **-아/어서 ≈ (ก็)เลย, reason first** (ยุ่งเลยไม่ได้ไป = 바빠서 안 갔어요). เพราะ puts the reason second.
  - Story connectors: 먼저 ก่อนอื่น, 그리고 แล้วก็, 그다음에 หลังจากนั้น, 그래서 ก็เลย, 그런데 แต่ / ว่าแต่, 마지막으로 สุดท้าย.
- **Comparison:** A ถูกกว่า B = A가 B보다 싸요 (보다 on B). อร่อยที่สุด vs 제일 맛있어요: ที่สุด comes after, 제일 before.
- **Want / like:** อยาก + verb → -고 싶어요; ชอบ + noun → 을/를 좋아해요 (but 좋아요 takes 이/가).
- **Must / may / can:** ต้อง (before the verb) → -아/어야 해요 (after); ไม่ต้อง → 안 -아/어도 돼요; ขอ…ได้ไหม → -아/어도 돼요?; verb + ได้ → -(으)ㄹ 수 있어요.
- **Don't know:** ไม่รู้ / ไม่แน่ใจ → 몰라요 / 모르겠어요.
- **Requests:** ขอ…หน่อย → 좀 주세요; ช่วย…หน่อยได้ไหม → -아/어 주시겠어요?
- **Texting:** ㅋㅋ ≈ 555; KakaoTalk ≈ LINE; 읽씹 ≈ อ่านแล้วไม่ตอบ.
- **Spacing:** Thai has no word spaces; Korean spaces each word together with its particles (커피를 마셔요, never 커피 를). Teach this once as a writing rule.

## 5. Error zones, ranked

1. **Plain / tense / aspirated stops.**
   - [research (Thai L1)] Wongampai 2025, perception, 32 undergraduates with no prior Korean ([PDF](https://so03.tci-thaijo.org/index.php/rpu/article/download/296984/192170/1339068)). Aspirated–lenis and fortis–aspirated pairs were discriminated 100%, **lenis–fortis 25%**; identification was lenis 70%, fortis 80%. The author blames Thai's lack of a tense/lax contrast. The F0 discussion is hypothesis only.
   - [research (Thai L1)] Kim 2024, production, 79 beginners ([abstract](https://so02.tci-thaijo.org/index.php/hasss/article/view/268381)): "ㅊ and ㅈ, and ㅍ and ㅂ … most challenging initial phonemes".
   - **The two findings differ** (lenis–fortis in perception, lenis–aspirated in production); do not merge them. Teach all three series, and name ㄱㄷㅂㅈ as the one Thai has no letter for.
2. **Final ㄹ, and ㄹ/ㄴ.** Kim 2024 found final ㄹ and ㄴ challenging, including ㄴ → ㄹ. Thai reads final ล as /n/ (ศาล = *san*) [th.md]. So expect 물 said as "มุน" [inference].
3. **Diphthongs.** Kim 2024: "ㅠ, ㅛ, ㅕ, and ㅖ … the most challenging vowels". Teach each as one syllable.
4. **ㅓ vs ㅗ** [inference]: Thai media write ㅓ as ออ or โอ (서울 = โซล).
5. **Particles.**
   - [research (Thai L1), relative clauses only] Kessri 2023, 35 students ([PDF](https://so04.tci-thaijo.org/index.php/abc/article/download/265414/182122/1075872)): wrong marker 13.57% of errors, omitted marker 5.71%, misordering 12.62% / 16.67%.
   - Predicted [inference]: 에/에서 from ที่, and 이/가 vs 은/는.
6. **Tense left to the time word** (§4.4) [inference].
7. **Speech level** [inference]: 요 dropped mid-talk; 드시다 about oneself; 오빠/형 chosen by the listener; 당신 used for คุณ.
8. **Modifiers placed after the noun** (가방 큰 ✗) [inference; consistent with Kessri's misorderings].
9. **Number system** (삼 시 ✗, 하나 개 ✗, 이십 살 ✗) [inference].
10. **Sound-change rules.** Palatalization had the highest error rate, then tensification and assimilation, and errors rose after 10 months without review ([Jung 2024](https://so06.tci-thaijo.org/index.php/klcj/article/view/273916)) [research (Thai L1), abstract, n not given].
11. **Spacing** in writing [inference].

## 6. Reading guide

### 6.1 Policy: respellings are comparisons

**The reading aid is RR plus audio.** RR is target-side and fixed; writers cannot change it (spec §5).

Thai-script respellings are familiar to fans but cannot serve as the reading:
1. **Tones.** Every Thai syllable has a tone, and dead syllables force low or high. Korean has no tones.
2. **Vowel length.** Thai must pick อะ or อา; Korean has no length to learn.
3. **Final ล reads น.**
4. **Missing letters.** Thai has none for plain ㄱㄷㅂㅈ, ㅆ or ㅓ.
   - The Royal Institute rules (B.E. 2555) write initial ㄱㄷㅂㅈ as **ค ท พ ช**, which merges them with ㅋㅌㅍㅊ, and medial ones as ก ด บ จ.
   - Guidebooks are inconsistent ([Saijitborisut 2025](https://so06.tci-thaijo.org/index.php/rdibsru/article/download/287266/192807/1303862)) [convention].
   - Popular spellings use ก ต ป จ for ㄲㄸㅃㅉ (โอปป้า) [practitioner, unverified].

**Rule:**
- **Where respellings may appear:** only as comparisons, in the `hangul` and `sound-changes` bodies and in jamo / pronunciation card notes. Introduce them with คล้าย, ใกล้เคียง or ระหว่าง…กับ…, and limit each to one letter, one syllable or one short word.
- **Where they never appear:** glosses, meanings, prompts and options; never for a whole sentence.
- **Letters to use:**
  - only low-class letters (ค ท พ ช ซ ฮ น ม ร ล ว ย ง) or mid-class letters (ก จ ด ต บ ป อ);
  - never high-class letters (ข ฉ ถ ผ ฝ ส ห), which add a rising tone;
  - break syllables with "-", and say "ไม่ต้องออกวรรณยุกต์" once per lesson.

### 6.2 Writers' notes beyond the guide

- **Map:** tense ㄲㄸㅃㅉ ≈ ก ต ป จ (near-exact); aspirated ㅋㅌㅍㅊ ≈ ค ท พ ช (stronger puff); plain ㄱㄷㅂㅈ has **no Thai letter** (voiceless at the start, voiced between vowels); ㅡ = อือ exactly; ㅓ between ออ and เออ; ㅆ, ㅓ and initial ㄱㄷㅂㅈ are the gaps. Diphthongs are one syllable each (§5 item 3).
- **Road-sign trap:** Thai romanisation writes ป ต ก as *p t k* and พ ท ค as *ph th kh* (Phuket). In RR, plain *p t k* are the **aspirated** ㅍ ㅌ ㅋ, and *kk tt pp* are the Thai-like ones. Say this in `hangul`.
- **Finals, the big bridge.** Six of Korean's seven finals are Thai มาตรา (แม่กก กน กด กม กบ กง), unreleased as in Thai. Neutralisation matches too: ㅅㅆㅈㅊㅌㅎ end as t (แม่กด), like Thai final ส ช จ ศ; ㅋ ㄲ → k; ㅍ → p. The seventh, **l**, has no มาตรา, and Thai reads final ล as น: this is the one to drill [convention for Thai; inference for the comparison].
- **ㅇ vs อ:** both are vowel carriers in writing, but Thai อ begins with a catch (glottal stop) and ㅇ is silent. That is why Thai readers block linking.
- **Pitch, not tone** [hypothesis, untested on Thai learners]: in Seoul speech the vowel starts higher after tense and aspirated consonants (and ㅅ ㅎ), lower after plain ones. "ㄲ starts high, ㄱ starts low" may help a Thai ear ("อาจช่วยได้"). It belongs to the consonant; it is not a tone, and the word stays flat.

### 6.3 Paste-ready guide (`hangul`; [inference])

> **วิธีอ่านคำอ่านอักษรโรมัน**
> ตัวอักษรโรมันใต้ภาษาเกาหลีคือคำอ่านตามระบบทางการของเกาหลี ไม่ใช่แบบป้ายถนนไทย
>
> **สระ**
> - **a i u** = อา อี อู · **o** (ㅗ) = โอ ห่อปากกลมและแน่นกว่า
> - **eo** (ㅓ) = สระเดียว ระหว่าง ออ กับ เออ อ้าปากแบบ ออ แต่ไม่ห่อปาก
> - **eu** (ㅡ) = อือ · **ae** (ㅐ) และ **e** (ㅔ) = เสียงเดียวกัน ระหว่าง แอ กับ เอ
> - **ya yeo yo yu ye wa wo wi ui** = หนึ่งพยางค์ เช่น yeo = ยอ ไม่ใช่ ยี-ออ
> - ไม่มีสระสั้นยาว ไม่มีวรรณยุกต์ อ่านทุกพยางค์เสียงเรียบ ๆ
>
> **พยัญชนะ**
> - **k t p ch** (ㅋ ㅌ ㅍ ㅊ) = ค ท พ ช พ่นลมแรง ระวัง t ไม่ใช่ ต
> - **kk tt pp jj** (ㄲ ㄸ ㅃ ㅉ) = ก ต ป จ ไม่มีลม ไม่ได้ออกเสียงสองครั้ง · **ss** (ㅆ) = ซ ที่เกร็งคอ
> - **g d b j** (ㄱ ㄷ ㅂ ㅈ) ต้นคำ = ระหว่าง ก กับ ค ต กับ ท ป กับ พ จ กับ ช มีลมเล็กน้อย ไม่ใช่ บ ด ของไทย ระหว่างสระจะก้องขึ้น
> - **s** = ซ หน้า i ใกล้ ชี เบา ๆ · **h** = ฮ · **ng** = ง อยู่ท้ายพยางค์เท่านั้น
> - **r** (ㄹ ระหว่างสระ) = ร แตะลิ้นครั้งเดียว · **l** (ㄹ ท้ายพยางค์) = ล จริง ๆ ปลายลิ้นแตะปุ่มเหงือกค้างไว้ ไม่ใช่ น แบบตัวสะกด ล ในภาษาไทย
>
> **ตัวสะกด** มี 7 เสียง k n t l m p ng ตรงกับแม่กก กน กด กม กบ กง และเพิ่ม l ไม่ปล่อยลม เหมือนภาษาไทย: **bap** (ข้าว) ปิดปากแล้วหยุด
>
> **กฎ 3 ข้อ**
> 1. ㅇ ต้นพยางค์ไม่มีเสียง ไม่ใช่ อ ที่กักเสียงในคอ ตัวสะกดจึงเลื่อนไปพยางค์ถัดไป: **hangugeo** = ฮัน-กู-กอ ไม่ใช่ ฮัน-กุก-ออ
> 2. คำอ่านภาษาไทยของคำเกาหลีเป็นแค่เสียงใกล้เคียง ไม่ต้องออกวรรณยุกต์
> 3. คำอ่านเขียนตามเสียงจริง: 감사합니다 = **gamsahamnida** พูดตามคำอ่าน เขียนตามฮันกึล

**Placement:**
- **`hangul`:** the whole guide (waived).
- **`sound-changes`:** repeats rules 1 and 3 and the finals line, using only the jamo of its English body.
- **The three Hangul-deck descriptions:** RR and Thai only, no jamo.
  - vowels deck: eo, eu, ae–e;
  - consonants deck: k t p ch vs g d b j, and r vs l;
  - advanced deck: kk tt pp ss jj.
- **Jamo card notes (ko.c0001–0060):** the same wording, within each card's own Hangul set.
- **Never compare with English sounds.**

## 7. Per-lesson notes and Thai titles

Titles are fixed here so cross-references agree. Each title keeps its English title's Hangul.

| # | id | Thai title | Thai angle (rewrite, don't translate) |
|---|---|---|---|
| 1 | `hangul` | 1 · ฮันกึลในรวดเดียว | §6.3 (waiver). อ and ㅇ are both vowel carriers, but ㅇ is silent. Replace "uh / oo / ee / bed" |
| 2 | `polite` | 2 · ระดับภาษา | ครับ/ค่ะ ≈ 요 plus the four breaks (§4.7). Separate คำลงท้าย from ส่วนลงท้าย |
| 3 | `meet` | 3 · การพบปะผู้คน | Asking age ≈ choosing พี่/น้อง. Thai สวัสดี works both ways, but the Korean goodbye depends on who leaves |
| 4 | `sound-changes` | 4 · การเปลี่ยนเสียง: ทำไม 감사합니다 จึงออกเสียงต่างไป | Linking with no อ catch. ง is an easy onset for Thais. RR + Thai syllable breaks; drop the Read-drill line |
| 5 | `nouns` | 5 · คำนามและ 은/는 | "No a/the, no plural": Thai is the same. 이/그/저 ≈ นี้/นั้น/โน้น, but before the noun. The owner comes first |
| 6 | `isseoyo` | 6 · 있어요 และ 없어요 | The §4.3 table |
| 7 | `pronouns-questions` | 7 · คำสรรพนามและคำแสดงคำถาม | Question words stay in place (a bridge). คุณ ≠ 당신. 저/나 depend on level; ผม/ฉัน on gender |
| 8 | `verbbasics` | 8 · คำกริยา | No person agreement, as in Thai. Describing verbs = Thai predicates. Drop the "to …" framing |
| 9 | `verbs` | 9 · รูปปัจจุบัน: รูป 요 | One form = กิน / กำลังกิน / กินไหม. 아요/어요 by vowel is new |
| 10 | `past` | 10 · รูปอดีต: 았어요 / 었어요 | Time word ≠ tense. ไม่ได้ไป = 안 갔어요. "I ate / have eaten / did eat" → กินแล้ว / เคยกิน → 먹었어요 |
| 11 | `future` | 11 · รูปอนาคตและแผน: -(으)ㄹ 거예요 | จะ; คงจะ for guesses. "kkeoyeyo" = tight k (ก) |
| 12 | `sov` | 12 · ลำดับคำและ 을/를 | Thai SVO vs Korean SOV throughout. 을/를 has no Thai counterpart |
| 13 | `particles` | 13 · 에 และ 에서 พร้อมแผนที่คำช่วย | One ที่ → 에 / 에서 by the verb; จาก → 에서. Map column: "ภาษาไทย: คำบุพบทหน้าคำนาม" |
| 14 | `negation` | 14 · การปฏิเสธ: 안 และ -지 않아요 | ไม่ ≈ 안, but 안 comes after the object. ไม่ใช่ = 아니에요; ไม่มี = 없어요 |
| 15 | `do-man` | 15 · 도 และ 만: ด้วยและเท่านั้น | ด้วย / เท่านั้น after the noun. 저도 안 가요 = ฉันก็ไม่ไปเหมือนกัน |
| 16 | `sentences` | 16 · การประกอบคำนามกับคำกริยา | Four shapes against Thai order. Mistakes framed as "ลำดับแบบไทย" |
| 17 | `want-like` | 17 · อยากและชอบ: -고 싶어요, 좋아해요 | อยาก comes before, -고 싶어요 after. ชอบ takes no marker; 좋아해요 takes 을/를 |
| 18 | `numbers` | 18 · ระบบตัวเลขสองแบบ | §4.6. "Build like English digits" → "ต่อแบบเลขไทย: 이십오 = ยี่สิบห้า" |
| 19 | `food` | 19 · กินข้าวนอกบ้าน | Classifiers as in Thai. The meal phrases (example rows) have no Thai set phrase: say so in Thai |
| 20 | `getting-around` | 20 · การเดินทางไปมา | T-money ≈ Rabbit card [inference]. Taxi lines are new |
| 21 | `titles` | 21 · คำเรียกและคำยกย่อง | 씨 ≈ คุณ but after the name. พี่ → 형/오빠/누나/언니 by the speaker's gender. The column becomes "ถ้าผู้พูดเป็นผู้หญิง / ผู้ชาย" |
| 22 | `plans` | 22 · การนัดหมาย | -자 / -(으)ㄹ까요 / -(으)ㄹ래요 per §3.3. Header สุภาพมาก. Station exits as at BTS / MRT |
| 23 | `texting` | 23 · แชตแบบคนเกาหลี | ㅋㅋㅋ ≈ 555; KakaoTalk ≈ LINE; 넵 ≈ playful ครับผม / ค่า |
| 24 | `counters` | 24 · ลักษณนาม | §4.5: the bridge and its four breaks |
| 25 | `joining` | 25 · การเชื่อมประโยค: -고 -지만 และ -아/어서 | -아/어서 ≈ (ก็)เลย, reason first, unlike เพราะ |
| 26 | `story` | 26 · การเล่าเรื่องในอดีต | Connectors per §4.8. "the Past tense lesson" → บทที่ 10 รูปอดีต |
| 27 | `noun-modifiers` | 27 · การขยายคำนาม: 좋은 날씨, 큰 가방 | **Flip:** กระเป๋าใบใหญ่ → 큰 가방; อาหารที่ฉันชอบ → 제가 좋아하는 음식. "ไม่มีคำว่า ที่ หลังคำนาม" |
| 28 | `compare` | 28 · การเปรียบเทียบ: 보다, 더, 제일 | กว่า ≈ 더 + 보다 on B; ที่สุด after vs 제일 before |
| 29 | `cant` | 29 · ทำไม่ได้ ทำได้ และไม่รู้ | ไปไม่ได้ (= 못) vs ไม่ได้ไป (= past 안): make the contrast in Thai, next to the body's own 못 examples |
| 30 | `have-to` | 30 · ต้องทำ: -아/어야 해요 | ต้อง comes before, 야 해요 after. "the Asking politely lesson" → บทที่ 32 |
| 31 | `honorific` | 31 · กริยายกย่อง | ทาน ≈ 드시다, but never about oneself |
| 32 | `requests` | 32 · ขอสิ่งต่าง ๆ อย่างสุภาพ | หน่อย ≈ 좀; ไม่ทราบว่า ≈ 혹시; ช่วย…หน่อยได้ไหม ≈ 주시겠어요 |
| 33 | `office` | 33 · ภาษาเกาหลีในที่ทำงาน | The formal ending is the workplace register. A bare title (부장님) vs Thai คุณ / พี่ + nickname. The 수고 family per §3.3 |

Blurbs follow the same rules.

## 8. Practice prompts

**Join by id** with `target/ko/practice.jsonl`:
- `a[0]` is the model answer, and the tiles are built from it;
- `x` lists the forms the prompt must not lead to;
- `hint` carries the Korean lead.

**Every `type` and `order` prompt must lead to `a[0]` and to no `x`.** Cue three things:
1. **Politeness:** follow §3.2.
   - 요 answer → ครับ/ค่ะ; 반말 answer → no particle; -습니다 → (ทางการ); -시- → (ยกย่อง) or a situation cue.
   - Keep every English cue: "(to a taxi driver)" → (พูดกับคนขับแท็กซี่); "Text a friend:" → แชตหาเพื่อน:.
2. **Tense:**
   - past → แล้ว, a past time word, or ไม่ได้ + verb;
   - future → จะ;
   - present → none of these.
   - If it stays ambiguous, add (อดีต), (ปัจจุบัน) or (อนาคต).
3. **Person:** write ฉัน only when `a[0]` has 저/제/나. Name third persons as the English does.

**Other rules:**
- "(write the number in Hangul)" → (เขียนตัวเลขเป็นอักษรเกาหลี).
- Hangul in "(use -(으)ㄹ까요)" is kept exactly.
- `q` and `why` take no particles, except inside a quoted gloss.
- `why` is one sentence and uses §4's Thai angle.
- Prose options must stay distinct.
- Example: polite.14 has `x` 괜찮아요, so its casual prompt carries no particle.

## 9. Localisation

**Follow the Korean row as given.**
- Today, ko.c0077, ko.g021, ko.s0012, ko.s0127, ko.p005, meet.06 and particles.03 say 미국에서 왔어요. Gloss them **มาจากอเมริกา(ครับ/ค่ะ)**, never ไทย.
- The Korean half is moving to a blank "I'm from ___" row plus a Countries deck. When that export lands:
  - gloss the blank row with the blank kept (มาจาก ___ ครับ/ค่ะ);
  - gloss each country with its standard Thai name (태국 ไทย, 미국 อเมริกา, 영국 อังกฤษ).
- Add no 태국 before then; `meet` gets no waiver.

**Prose** may name ไทย, กรุงเทพฯ, บาท, LINE and BTS / MRT.

**Names and places are written in Thai script.** Use the established media spelling where one exists. Otherwise write initial ㄱㄷㅂㅈ as ค ท พ ช (the Royal Institute rule), and by common practice [unverified] tense consonants as ก ต ป จ and ㅅ / ㅆ as ซ. The forms below are common usage and were not individually verified:

| Korean | Thai | Korean | Thai |
|---|---|---|---|
| 키이 (Kii) | คีอี | 민수 · 지은 · 리사 · 김 | มินซู · จีอึน · ลิซ่า · คิม |
| 서울 · 명동 · 강남 | โซล · เมียงดง · คังนัม | 홍대 · 홍익 · 인천 · 한강 | ฮงแด · ฮงอิก · อินชอน · แม่น้ำฮัน |
| 롯데 · 신세계 · 현대 | ล็อตเต้ · ชินเซเก · ฮุนได | 오클라호마 · 조선 | โอคลาโฮมา · โชซอน |
| 떡볶이 · 김밥 | ต็อกบกกี · คิมบับ | 카카오톡 · 티머니 | คาเคาทอล์ก · ทีมันนี่ |

## 10. What NOT to do

- **No added Korean** beyond the English row's Hangul. The exception is a `_waive` + `_note` (`hangul`, and `sound-changes` if needed).
- **No English left in.** That includes English glosses, English grammar terms and "as in *bed*" sound comparisons. Allowed: RR, digits, brand names, and the source word of a loanword.
- **No invented etymologies.** The Middle-Chinese numerals link (§4.6) is the only one cleared. Etymologies already in the English half are carried as written, never extended.
- **No particles in instructions.** No single gendered particle, and no ผม / ดิฉัน in glosses.
- **No Thai respelling used as a reading** (§6.1), and no high-class letters in respellings.
- **No trainers or drills** (ทักษะ / Read): they are all off.
- **Never edit `f`, `id`, `k`, `src`,** and never retype `src`. Edit by script, by id.
- **No promises about TOPIK or EPS results.**

## 11. Native check and unverified claims

**For a Thai reviewer:**
1. §3.2: do ครับ/ค่ะ in polite glosses read naturally or as clutter? Is ฉัน beside ครับ/ค่ะ acceptable? Is เธอ the right word for 너?
2. §3.3: are these natural?
   - ฝากเนื้อฝากตัวด้วย
   - วันนี้เหนื่อยแย่เลยนะ
   - ขอให้ทำงานราบรื่นนะ
   - ขอบคุณสำหรับงานวันนี้
   - ไม่ทราบว่า for 혹시
   - ราตรีสวัสดิ์ (too bookish?)
3. §3.4: are คำช่วย, ส่วนลงท้าย, ก้านกริยา, กริยาบอกลักษณะ and the three consonant names clear?
4. §6.3: is the guide natural? Check especially ㅓ "ระหว่าง ออ กับ เออ" and 시 "ใกล้ ชี".
5. Are §9's names right (คีอี, ชินเซเก, ทีมันนี่, คาเคาทอล์ก)? Are 555 for ㅋㅋ and the Rabbit card for T-money fair matches? Do the level titles work?

**Evidence limits:**
- **Wongampai:** perception only; southern bidialectal students; the text and table disagree on fortis at 80%.
- **Kim 2024 and Jung 2024:** abstracts only.
- **Kessri:** relative clauses only.
- **Burapha:** n=47, year not stated.
- **Royal Institute 2555:** only part of the table was seen. **The tense, vowel and final mappings in §6.2 are inference and common practice, not the official table.**
- **EPS-TOPIK Thai textbook** (hrdkorea PDF): it failed to load, so its Thai terms are unchecked.

**Unverified:**
- the F0 cue;
- ㅓ/ㅗ merging;
- §5 items 6–9 and 11;
- popular spellings;
- every Thai sentence in this profile.

## Sources

All web sources are linked inline (opened 2026-11-23), plus [Univext](https://univext.com/th/blog/480/kho-phit-phlat-phasa-kaoli-thi-phop-boi) for the Thai terms คำช่วย, ลักษณนาม and เสียงพ่นลม. Local files read:
- `docs/HALVES-SPEC.md`;
- the tl-ko, ja-ko §3.2, th §1–6 and §10, and en-th §2 profiles;
- `docs/briefs/tl-ko-writer.md`;
- `native/tl/ko/work/README.md` and `native/es/ko/REVIEW.md`;
- `native/en/ko/`, with all 33 lesson bodies skimmed;
- `target/ko/`;
- `packs/i18n-th.js`.
