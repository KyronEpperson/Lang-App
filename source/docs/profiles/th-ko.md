# Thai speakers learning Korean: pair profile

Course `th-ko` is Korean for speakers of Thai. It is a standard course assembled from two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards; `docs/HALVES-SPEC.md`);
- a native half `tools/halves/native/th/ko/`, written in Thai by four writers (w1–w4) from this profile.

This profile is the writers' authority. It follows the structure of `docs/profiles/tl-ko.md`, keeps the Thai house style of `docs/profiles/th.md` (th-en) wherever this profile does not say otherwise, and decides up front everything the es-ko review (`native/es/ko/REVIEW.md`) had to settle afterwards. Where th.md and this profile differ, **this profile wins for th-ko**.

**Evidence tags:**
- **[research-backed]**: a study opened for this profile; sample named. **(Thai L1)** means the learners are Thai speakers.
- **[convention]**: what reference works, official transcription rules or established practice do.
- **[practitioner]**: a teacher's, blog's or site's stated view, without data.
- **[inference]**: this profile's reasoning. **Every Thai sentence written here is [inference]**: the author is not a native speaker, and §11 lists what a Thai reviewer must check first.
- **[th.md]**: taken from the th-en profile, whose sources were not re-opened.

## 1. Summary

1. **Register:** standard Central Thai in Thai script. Prose is neutral, friendly written Thai with **no ครับ/ค่ะ and no gendered pronoun for the learner**. Commands are soft and use no pronoun; คุณ only where a subject is needed (§3.1).
2. **ครับ/ค่ะ live only inside glosses of Korean lines.** There they show the Korean speech level: a 요-form or -습니다 line ends in **ครับ/ค่ะ** (questions **ครับ/คะ**), a 반말 line has no particle, and tags mark formal and honorific. They never appear in instructions (§3.2).
3. **Terms:** Thai grammar terms from a closed list, aligned with the app's own Thai strings: คำช่วย (particle), ตัวสะกด (받침), ลักษณนาม (counter), ก้านกริยา (stem), รูป 요, รูปทางการ, รูปกันเอง (반말), รูปยกย่อง. Tabs: **วันนี้ · บทเรียน · ฝึกหัด · ทบทวน · พัฒนาการ** (§3.5–3.6).
4. **Sound bridges:** Thai already has a three-way stop contrast (ก/ค, ต/ท, ป/พ plus voiced บ/ด). Korean tense ≈ Thai plain (ㄲ≈ก), aspirated ≈ Thai aspirated (ㅋ≈ค), but **Korean plain ㄱㄷㅂㅈ has no Thai home**. Thai learners confused lenis/fortis in perception (25% correct discrimination, n=32) and ㅈ/ㅊ, ㅂ/ㅍ in production (n=79). ㅡ = อือ exactly. Finals = Thai มาตราตัวสะกด, unreleased, **except final ㄹ**, which Thai reads as น (§5, §6).
5. **Grammar bridges:** noun + number + classifier (กาแฟ 2 แก้ว = 커피 두 잔); question words stay in place (นี่อะไร = 이거 뭐예요); dropped pronouns; ด้วย after the noun like 도; หน่อย ≈ 좀; reason-first เลย ≈ -아/어서; หมื่น = 만 (both from Middle Chinese 萬). **Traps:** SVO→SOV, modifiers flip sides, particles after the noun, obligatory past tense (no "time word is enough"), ไม่ได้ + verb = past negative, ทาน used about oneself vs 드시다 never (§4).
6. **Respellings:** Thai-script spellings of Korean are **comparisons, never readings** (tone, length, final ล, no letter for ㄱ-type sounds). The reading aid is the shared Revised Romanization, and §6.2 gives a paste-ready Thai guide to read it.

## 2. Learners

- **School and university students.** Korean is taught in Thai secondary schools, and Korean is a university-entrance (A-Level) subject. A Burapha University study found 2024 freshmen had studied Korean "for about 3-4 years before entering university" ([Kim & Kim, Burapha](https://so06.tci-thaijo.org/index.php/klcj/article/view/287231)) [research-backed (Thai L1), n=47]. The A-Level detail is from the same page.
- **Workers bound for Korea (EPS-TOPIK).** A Thammasat study surveyed 384 Thai workers preparing for EPS-TOPIK and 30 instructors: learners "have work obligations, time constraints, and financial barriers", courses are short exam-prep programmes, and a prior basic course is recommended ([Boonphisudsilp 2025](https://so04.tci-thaijo.org/index.php/abc/article/view/271834)) [research-backed (Thai L1), abstract]. EPS workplace vocabulary is **not** in these 33 lessons.
- **K-pop and K-drama fans**, who often already read Thai-script spellings of Korean names and lyrics (§6.1) [inference].
- **Starting point:** reading Thai script fluently; English is weak for many adults (EF EPI 2025: Thailand 402, "Very low") [th.md]. So **never explain Korean through English**, and do not rely on English sounds.

## 3. Register, glosses and terms

### 3.1 Variety and register of the Thai text

- **Standard Central Thai** (Bangkok), as in th.md §2. No regional forms, no slang in prose.
- **Voice:** a friendly teacher. Neutral written Thai (ภาษาเขียนที่เป็นกันเอง), complete soft sentences.
  - **No ครับ / ค่ะ / คะ / จ้ะ** in lesson prose, `q`, `why`, `hint`, deck descriptions, labels, notes' explanatory parts or interface strings. The learner's gender is unknown, and particles would give the app a gender [th.md §2].
  - No pronoun for the learner where Thai can drop it; **คุณ** only where a subject is needed. Never ท่าน, เธอ, นาย, แก, หนู for the learner.
  - Commands: plain verb, softened by ลอง / ได้เลย / ก่อน where natural (`ลองพูดตาม`, `จำไว้ว่า…`). กรุณา is not used in lessons.
  - นะ at most once per passage, only in encouragement.
- **Punctuation and spacing** (th.md §2, binding):
  - no full stop after a Thai sentence and no commas inside one; a space separates phrases and sentences;
  - **one space on each side of every Latin word, digit and Hangul run** inside Thai: `ใส่ 요 ท้ายประโยค`, `บทที่ 10`, `คำอ่าน gamsahamnida`;
  - no question mark after a Thai question (glosses and prompts included); exclamation marks only in praise;
  - ๆ takes a space before and after (`ช้า ๆ`), per th.md (en-th writes it attached inside Thai target text; that rule does not apply here);
  - Arabic digits; NFC; never U+200B; ำ as U+0E33.
- **Names of things:** ภาษาเกาหลี, ภาษาไทย, ฮันกึล (Hangul, as the app's Thai roadmap writes it), เกาหลี, โซล. The course name in `course.json` is `"name": "ภาษาเกาหลี"`; `brand` stays `한글`.

### 3.2 Glosses of Korean lines: the particle rule

**Where it applies:** card `meaning` of a whole Korean utterance; `{{ex:}}` sentence glosses (`sentences.jsonl`); dialogue `tr`; example `tr`; practice `p`; pause-item and greeting labels; and a gloss quoted inside `q`, `why` or a lesson body (`“ขอบคุณครับ/ค่ะ”`).

**Where it never applies:** instructions and explanations (`q`, `why`, `hint`, lesson prose, deck `desc`, group names, deck labels), pattern `meaning`s (`patterns.jsonl`), cards whose Korean is a single word, a dictionary form (가다) or a fragment pattern (저는 ___이에요), and the gloss column of lesson tables.

**How to decide: read the Korean row, not the English.** The Korean is not in the work files. Join by id against `target/ko/cards.jsonl`, `sentences.jsonl`, `dialog.jsonl`, `examples.jsonl` and `practice.jsonl` (read-only), and decide by the Korean ending:

| Korean ending | Thai gloss | Tag (only where §3.2.1 needs one) | Example |
|---|---|---|---|
| 요-form (-아요/-어요, 이에요, 주세요, fragment + 요) | Thai sentence + **ครับ/ค่ะ**; questions **ครับ/คะ** | (สุภาพ) | 고마워요 → ขอบคุณครับ/ค่ะ · 어디 가요? → ไปไหนครับ/คะ · 커피요 → กาแฟครับ/ค่ะ |
| -습니다 / -ㅂ니까 | formal wording + **ครับ/ค่ะ** / **ครับ/คะ** | **(ทางการ)** | 감사합니다 → ขอบคุณครับ/ค่ะ (ทางการ) |
| 반말 (no 요) | Thai sentence, **no particle**; casual wording (นะ, เหรอ, ขอบใจ…) allowed | (กันเอง) | 고마워 → ขอบใจนะ · 어디 가? → ไปไหน |
| -(으)시- / honorific verb | polite Thai vocabulary (ทาน, พักผ่อน, อยู่…) + **ครับ/ค่ะ** | **(ยกย่อง)** | 드세요 → ทานเยอะ ๆ นะครับ/คะ (ยกย่อง) |

#### 3.2.1 Exact mechanics

- **Spelling:** always the unspaced pairs **ครับ/ค่ะ** (statements, requests, commands) and **ครับ/คะ** (questions, and requests ending in นะ: `นะครับ/คะ`). Attach to the preceding Thai word with no space. Never ` / ` with spaces: that is the alternative separator (th.md) and the dialogue line separator. Never one particle alone.
- **One particle per line.** A gloss or dialogue line with several sentences ends in one particle, after the last sentence. Earlier sentences stay polite in wording.
- **Tags:** add a tag wherever the English row has a tag, translated: (polite) → (สุภาพ), (polite 요-form) → (รูป 요), (casual) → (กันเอง), (formal) → (ทางการ), (honorific) → (ยกย่อง). Also add one where two meanings in one deck, two options of one question, or a prompt's answer and its `x` would otherwise read the same (고맙습니다 / 고마워요). Tags are Thai only, unless the English tag itself contains that Hangul.
- **네 / 응 / 아니요 / 아니:** 네 alone as a whole line → `ครับ/ค่ะ`; 네 + more → `ใช่` (agreeing) or `ได้` (accepting), with the line-final particle. 응 → `อือ` / `ใช่`; 아니요 → `ไม่ครับ/ค่ะ` / `ไม่ใช่ครับ/ค่ะ`; 아니 → `ไม่` / `ไม่ใช่`. The card for 네 says it is both "yes" and the polite response, like ครับ/ค่ะ itself.
- **Pronouns in glosses:** drop them wherever Thai would, which is most of the time. When the Korean line keeps 저 / 나 and the point needs it (저도요, 저는요?, contrast), write **ฉัน** (gender-neutral in writing and learning materials, th.md §2). The speech level shows in the particle, not in the pronoun. 우리 → เรา / พวกเรา. 너 → เธอ (the usual subtitle choice). 당신 → คุณ, with the lesson note that 당신 is not the polite "you". 그 사람 → เขา, 이분 → ท่านนี้.
- **Override note:** th.md §2 bans particles in translations for th-en. That stays true for every non-gloss field here; only the gloss fields above use the pair.

**Why particles, unlike tl-ko's "no *po*":** ครับ/ค่ะ match 요 better than *po* matches it. Both attach to a bare noun (กาแฟครับ ≈ 커피요), both drop with close friends, and both double as "yes". So the gloss itself teaches the level. The `polite` lesson then states the four breaks (§4.8), so learners do not conclude "요 = ครับ/ค่ะ" [inference].

### 3.3 Fixed phrases: one gloss each

| Korean | Thai gloss (cards, sentences, dialogues, pause items) |
|---|---|
| 안녕하세요 | สวัสดีครับ/ค่ะ |
| 안녕히 가세요 | สวัสดีครับ/ค่ะ (พูดกับคนที่กำลังจะไป) |
| 안녕히 계세요 | สวัสดีครับ/ค่ะ (พูดกับคนที่อยู่ต่อ) |
| 안녕히 주무세요 | ราตรีสวัสดิ์ครับ/ค่ะ (ยกย่อง) |
| 감사합니다 / 고마워요 / 고마워 | ขอบคุณครับ/ค่ะ (ทางการ) / ขอบคุณครับ/ค่ะ / ขอบใจนะ |
| 죄송합니다 / 미안해요 / 미안해 | ขอโทษครับ/ค่ะ (ทางการ) / ขอโทษครับ/ค่ะ / ขอโทษนะ |
| 잘 부탁드립니다 (meeting) | ฝากเนื้อฝากตัวด้วยครับ/ค่ะ |
| 잘 부탁드립니다 (업무), 확인 부탁드립니다 | รบกวนด้วยนะครับ/คะ / รบกวนตรวจสอบด้วยครับ/ค่ะ |
| 잘 먹겠습니다 | ขอบคุณสำหรับอาหารครับ/ค่ะ (ก่อนกิน) |
| 잘 먹었습니다 | อิ่มแล้ว ขอบคุณสำหรับอาหารครับ/ค่ะ (หลังกิน) |
| 수고하세요 | ขอให้ทำงานราบรื่นนะครับ/คะ (พูดกับคนที่ยังทำงานอยู่ ตอนเราจะไป) |
| 수고하셨습니다 | ขอบคุณสำหรับงานวันนี้ครับ/ค่ะ (ทางการ) — never "ทำได้ดี", which grades a superior |
| 수고했어요 / 수고했어 | วันนี้เหนื่อยแย่เลยนะครับ/คะ / วันนี้เหนื่อยแย่เลยนะ (to peers or juniors) |
| 고생했어 | ลำบากแย่เลยนะ |
| -(으)ㄹ게요 | เดี๋ยว…นะครับ/คะ (a promise): 갈게요 → เดี๋ยวไปนะครับ/คะ |
| -자 | …กันเถอะ: 먹자 → กินกันเถอะ |
| -(으)ㄹ까요? | …กันไหมครับ/คะ / …ดีไหมครับ/คะ |
| -(으)ㄹ래요? | อยาก…ไหมครับ/คะ |
| 혹시 | ไม่ทราบว่า… (polite rows); …หรือเปล่า at the end (casual rows) |
| 좀 | หน่อย (after the verb phrase: 물 좀 주세요 → ขอน้ำหน่อยครับ/ค่ะ) |
| 선생님 | ครู (noun); คุณครู (address); คุณหมอ where the context is a doctor |
| 사장님 | เจ้าของร้าน (shop, restaurant); ท่านประธาน / ประธานบริษัท (company) |
| 대리 · 과장 · 차장 · 부장 · 팀장 · 대표 | ผู้ช่วยผู้จัดการ · ผู้จัดการ · ผู้จัดการอาวุโส · หัวหน้าแผนก · หัวหน้าทีม · ซีอีโอ (ranks vary by company; say so once in `office`) |
| 고객님 | คุณลูกค้า |
| 미국에서 왔어요 | มาจากอเมริกาครับ/ค่ะ (see §9) |

**Level titles** (`labels.jsonl`): 새싹 ต้นกล้า · 학생 นักเรียน · 선배 รุ่นพี่ · 고수 ยอดฝีมือ · 달인 ผู้เชี่ยวชาญ · 사범 ปรมาจารย์. **Greetings:** night "ดึกแล้ว วันนี้เหนื่อยแย่เลยนะ", then อรุณสวัสดิ์ · สวัสดีตอนบ่าย · สวัสดีตอนเย็น (labels: no particle). **Pause set labels:** คำชม · สำนวนประจำวัน · มารยาทพื้นฐาน · สุภาษิต. Pause items are glosses (particle rule applies).

### 3.4 Sample prose (all [inference], for the native check)

1. ภาษาเกาหลีวางคำกริยาไว้ท้ายประโยคเสมอ
2. คำช่วย 을/를 ต่อท้ายคำนาม ไม่ได้อยู่หน้าคำนามแบบ ที่ ใน หรือ จาก ในภาษาไทย
3. ถ้าไม่แน่ใจ ให้ใช้รูป 요 ไว้ก่อน สุภาพเกินดีกว่าห้วนเกิน
4. 요 คล้าย ครับ/ค่ะ ตรงที่ทำให้ประโยคสุภาพ แต่ 요 ไม่บอกเพศของผู้พูด และต้องอยู่ท้ายทุกประโยค
5. นับของแบบเดียวกับภาษาไทยเลย: คำนาม จำนวน แล้วตามด้วยลักษณนาม
6. ภาษาไทยไม่ต้องเปลี่ยนรูปกริยาเมื่อพูดถึงเมื่อวาน แต่ภาษาเกาหลีต้องเปลี่ยนเป็นรูปอดีตทุกครั้ง
7. คำแสดงคำถามอยู่ที่เดิม เหมือนภาษาไทย: นี่อะไร = 이거 뭐예요
8. ตัวสะกด ㄹ ต้องออกเป็นเสียง ล จริง ๆ อย่าอ่านเป็น น แบบตัวสะกด ล ในภาษาไทย
9. เก่งมาก ทบทวนการ์ดชุดนี้อีกครั้งพรุ่งนี้ จะได้จำได้นาน

(Hangul in these samples is illustrative; a real row must keep its English row's Hangul set, §3.7.)

### 3.5 Glossary (closed list: one term per idea)

| Idea | Thai term, exactly | Do not use / note |
|---|---|---|
| particle (은/는, 에, 도…) | **คำช่วย** | not "Particle", not คำบ่งชี้ (academic). Thai grammar has no word class called คำช่วย, so it is free for Korean [practitioner: Univext uses it] |
| 은/는 · 이/가 · 을/를 | **คำช่วยบอกหัวเรื่อง · คำช่วยบอกประธาน · คำช่วยบอกกรรม** | |
| topic / subject / object | **หัวเรื่อง / ประธาน / กรรม** | "หัวเรื่อง" only for the 은/는 noun |
| Thai ที่ ใน ไป จาก กับ | **คำบุพบท** | only when comparing with Thai |
| noun / verb | **คำนาม / คำกริยา** | |
| 먹다, 가다 | **กริยาแสดงการกระทำ** | |
| 크다, 좋다 | **กริยาบอกลักษณะ** | คำคุณศัพท์ only where the English says "adjective" (deck label, lesson 27 blurb), glossed once as กริยาบอกลักษณะ |
| 공부하다 | **กริยา 하다** | |
| stem | **ก้านกริยา** | as the app's Thai roadmap writes it; not รากศัพท์ |
| 가다 (form) | **รูปพจนานุกรม** | |
| -아요, -고, -았어요 | **ส่วนลงท้าย** | **not คำลงท้าย**: in Thai, คำลงท้าย means ครับ/ค่ะ/นะ, and the `polite` lesson needs both ideas apart |
| Thai ครับ/ค่ะ/นะ | **คำลงท้าย** | only when comparing |
| politeness level | **ระดับภาษา** | |
| -습니다 / 요-form / 반말 | **รูปทางการ / รูป 요 (รูปสุภาพ) / รูปกันเอง (반말)** | not ภาษาหยาบ for 반말 |
| -(으)시-, 드시다 | **รูปยกย่อง / กริยายกย่อง** | as the roadmap's คำยกย่อง |
| 씨, 님, 오빠; Thai คุณ, พี่, น้อง | **คำเรียก** | as the roadmap |
| counter (개, 명, 잔) | **ลักษณนาม** | the Thai term itself: the concept is shared |
| native / Sino-Korean numbers | **ตัวเลขเกาหลีแท้ / ตัวเลขจีน-เกาหลี** | never "จีน" alone |
| tense | **รูปปัจจุบัน / รูปอดีต / รูปอนาคต** | not กาล; Thai แล้ว กำลัง จะ = **คำบอกเวลาภาษาไทย** |
| time word | **คำบอกเวลา** | |
| pronoun / question word | **คำสรรพนาม / คำแสดงคำถาม** | |
| connector | **คำเชื่อม** | |
| softener (좀, 혹시) | **คำเสริมให้นุ่มนวล** | not "คำช่วย…" (taken) |
| negative | **ประโยคปฏิเสธ** | |
| plural / possessive | **พหูพจน์ / ความเป็นเจ้าของ** | |
| modifier before a noun | **การขยายคำนาม** | |
| word order / sentence | **ลำดับคำ / ประโยค** | |
| Hangul / letter (jamo) | **ฮันกึล / ตัวอักษร** | |
| vowel / consonant | **สระ / พยัญชนะ** | |
| 받침 | **ตัวสะกด (받침)** | the Thai school term; a real bridge (§6) |
| one written block / syllable | **พยางค์** | one word for both |
| ㄱ ㄷ ㅂ ㅈ ㅅ / ㅋ ㅌ ㅍ ㅊ / ㄲ ㄸ ㅃ ㅆ ㅉ | **เสียงธรรมดา / เสียงพ่นลม / เสียงเกร็ง** | learners may know "เสียงหนัก" for tense; mention once in `hangul` |
| linking / nasal change / sound change | **การเชื่อมเสียง / การกลายเป็นเสียงนาสิก / การเปลี่ยนเสียง** | |
| romanization | **คำอ่าน** (UI); **คำอ่านอักษรโรมัน** at first mention | the UI string "Romanization" is คำอ่าน |
| tone / vowel length | **วรรณยุกต์ / สระเสียงสั้น-ยาว** | only to say Korean has neither |
| loanword | **คำยืม** | |

### 3.6 Interface names

From the Thai interface pack `packs/i18n-th.js` (`exact`), exactly as on screen:
- Tabs: **วันนี้** (Today), **บทเรียน** (Lessons), **ฝึกหัด** (Practice), **ทบทวน** (Review), **พัฒนาการ** (Progress).
- Buttons: **จำได้** (Got it), **อีกครั้ง** (Again), **ตรวจคำตอบ** (Check). Deck **ชุดการ์ด**, card **การ์ด**, the user deck **วลีของฉัน** (My phrases).
- "Read" is **ทักษะ** and holds drills that this course does not have, so prose never names it.
- `ui.json` (the 14 `uiKeys`) uses the same words; "Romanization" → คำอ่าน.

### 3.7 Format constraints

- **Hangul set-equality** (spec §6): every Thai string carries exactly the Hangul runs of its English row. No added Korean, none dropped. Tags and respellings are Thai only.
- **Waivers** (`"_waive":["hangul"]` + `_note` on the lesson's `lessons.jsonl` title row): needed for **`hangul`** (the reading guide names jamo not in the English body) and **`sound-changes`** only if a writer adds jamo beyond its English set. No other lesson needs one; `meet` gets none (§9).
- **Deck descriptions and card notes** cannot borrow jamo. The Hangul-deck descriptions carry the reading notes in RR letters + Thai only.
- **Deck labels** are progress keys: Thai, unique, short, not วลีของฉัน or "My phrases", none starting with the English word "Hangul" or "Pronunciation". w1 lists them in the report.
- Dialogue `tr` keeps exactly one ` / `. Blanks `__` stay. No braces in glosses. `q p why hint` ≤ 400 characters; options ≤ 200.
- **The `on…=` pattern:** never a space + `on` + letters + `=` in a body (Latin only: rare in Thai, but watch RR such as `oneul =`). Write `oneul: วันนี้`.
- **Stroke line:** `hangul` keeps "แตะตัวอักษรเพื่อดูลำดับการเขียนอีกครั้ง" (the diagrams exist). `sound-changes` drops the "open Read … Sound changes drill" sentence and points to บทเรียน / ทบทวน instead.
- **Cross-references** use the Thai number and title from §7 ("บทที่ 32 ขอสิ่งต่าง ๆ อย่างสุภาพ"), so the four writers agree without waiting for each other.
- **"Say it 3 ways" headers:** `polite` and `meet` → ทางการ · สุภาพ · กันเอง. `plans` → **สุภาพมาก** · สุภาพ · กันเอง, because its first column holds -시- forms (가시겠어요, 있으세요), not -습니다. The table's gloss column gets no particle.

## 4. What a Thai speaker already knows: bridges and where they break

Thai facts are standard grammar as in th.md §4 and en-th.md [th.md]; Korean facts are from the English half. All mappings are [inference] unless tagged.

### 4.1 Word order: SVO → SOV, question words in place

- Thai is SVO (ฉันกินข้าว); Korean is SOV (밥을 먹어요). The verb closes every Korean sentence. Rewrite `sov` and `sentences` against Thai order, not English.
- **Bridge: question words stay where the answer goes, in both languages.** นี่อะไร = 이거 뭐예요; ห้องน้ำอยู่ไหน = 화장실 어디예요; คุณไปไหน ≈ 어디 가요. The English half's warning "don't move the question word to the front" is an English-speaker error. For Thai readers, present it as a shared habit.
- **Bridge: topic first.** Thai fronts a topic freely (ข้าว ฉันกินแล้ว); 은/는 marks the same "as for…" frame.
- **Trap: everything that describes a noun flips sides.** Thai: บ้านใหญ่, บ้านของฉัน, บ้านหลังนี้, อาหารที่ฉันชอบ. Korean: 큰 집, 제 집, 이 집, 제가 좋아하는 음식. Only counting keeps the Thai order (§4.5).

### 4.2 Particles vs prepositions and word order

- Thai shows roles by word order and by prepositions **before** the noun (ที่บ้าน, จากโซล). Korean shows them by particles **after** the noun (집에, 서울에서). Thai has no subject or object marker at all.
- **에 / 에서 ← one Thai ที่:** อยู่ที่บ้าน = 집에 있어요; กินข้าวที่บ้าน = 집에서 밥을 먹어요. Teach by the verb: going, coming or being → 에; doing → 에서. จาก (from) = 에서 too.
- **ไป needs no preposition** (ไปโรงเรียน). Expect 학교 가요 with no 에: colloquial Korean allows it, but practice answers expect the particle unless the target row lists the bare form.
- **ด้วย = 도, and it sits after the noun** like 도: ฉันด้วย = 저도. 저도요 = ฉันด้วยครับ/ค่ะ. Break: 도 replaces 은/는, 이/가, 을/를.
- **เท่านั้น / แค่ = 만:** กาแฟเท่านั้น = 커피만 (same position); แค่กาแฟ puts the word in front.
- **กับ** (with) = 하고 / 랑, outside the core lessons.

### 4.3 เป็น / คือ, มี, อยู่ and 이에요 / 있어요 / 없어요

| Thai | Korean | Job |
|---|---|---|
| ฉันเป็นนักเรียน / นี่คือโรงเรียน | 학생이에요 / 여기는 학교예요 | A = B |
| ไม่ใช่นักเรียน | 학생이 아니에요 | A ≠ B |
| มีแมว | 고양이가 있어요 | having |
| ที่นี่มีโรงเรียน | 여기에 학교가 있어요 | existing |
| อยู่ที่โรงเรียน | 학교에 있어요 | being somewhere |
| ไม่มีเวลา / เขาไม่อยู่ | 시간이 없어요 / 없어요 | not having, not there |

- Rebuild `isseoyo` on this table: **있어요 = มี + อยู่ in one word; 없어요 = ไม่มี and ไม่อยู่.** The English "is does two jobs" framing goes.
- **Bridge: describing words need no "be"** in Thai (อาหารอร่อย) and none in Korean (맛있어요), so the English "don't add *is*" warning is unnecessary. Never compare 이에요 with an English copula.

### 4.4 Tense vs แล้ว / กำลัง / จะ

- Thai verbs never change. Time comes from time words and optional markers: แล้ว (done), กำลัง (in progress), จะ (future), เคย (ever). Korean marks tense in the verb, every time.
- **Trap 1 (main):** a time word is not enough. เมื่อวานไปตลาด → 어제 시장에 갔어요; 어제 시장에 가요 ✗. Thai learners of English make exactly this error, ranked first in Thai writing [th.md §4 item 2]; expect the same in Korean [inference].
- **Bridge:** จะ ≈ -(으)ㄹ 거예요, and คงจะ ≈ 거예요 with describing verbs ("probably"). กำลังกิน ≈ 먹어요 (the present covers "right now").
- **ไม่ได้ + verb = past negative** (ไม่ได้ไป = 안 갔어요); ยังไม่ได้กิน = 아직 안 먹었어요 (past, not present). **Contrast:** ไปไม่ได้ (verb + ไม่ได้) = 못 가요 / 갈 수 없어요. Use the pair in `past`, `negation` and `cant`.
- แล้ว on a present Korean verb is the predicted calque (먹어요 for กินแล้ว) [inference].

### 4.5 Classifiers = counters (the strongest grammar bridge)

- Same order: **noun + number + classifier**. กาแฟ 2 แก้ว = 커피 두 잔; แมว 3 ตัว = 고양이 세 마리; หนังสือ 3 เล่ม = 책 세 권; ตั๋ว 2 ใบ = 표 두 장. Question: กี่แก้ว = 몇 잔 (กี่/몇 + classifier, same slot).
- The Thai term ลักษณนาม is the course term (§3.5). Rewrite `counters`' "like two *cups* of coffee in English" as "เหมือนภาษาไทยเลย".
- **Breaks:** (1) Korean uses native numbers and shortens 1–4 (한 개, not 하나 개); (2) Thai คน 3 คน repeats the noun, while Korean uses 명 (사람 세 명); (3) Thai puts the classifier with demonstratives (แมวตัวนี้), Korean does not (이 고양이); (4) the particle follows the counter (맥주 두 병을).

### 4.6 Numbers: one Thai system, two Korean ones, and shared Chinese roots

- Thai has one system. Korean has two: native (counting, hours, age) and Sino-Korean (money, minutes, dates, phones, floors).
- **Bridge (verified):** Thai numerals 2, 3, 4, 6, 7, 8, 9, 10 and หมื่น (10,000) are "traceable to Middle Chinese" ([Wikipedia, *Thai numerals*](https://en.wikipedia.org/wiki/Thai_numerals)), and Sino-Korean numerals come from Chinese too. That is why 삼 ≈ สาม, 사 ≈ สี่, 육 ≈ หก, 칠 ≈ เจ็ด, 팔 ≈ แปด, 구 ≈ เก้า, 십 ≈ สิบ, 이(십) ≈ ยี่(สิบ). Present it as a memory aid ("มีรากจากภาษาจีนเหมือนกัน"), not a sound rule.
- **만 = หมื่น:** Korean counts in 10,000s, and so does Thai. 50,000 won = 오만 원 = ห้าหมื่นวอน. Replace the English tip "not 1,000" with this bridge. **Break:** Thai has แสน (100,000), Korean says 십만; ล้าน = 백만.
- **Trap:** hours are native (세 시, not 삼 시); age is native (스무 살). Thai age (อายุ 20 ปี) and clock words (บ่ายสามโมง) give no clue, so the rule must be learned.

### 4.7 Speech levels and honorifics vs ครับ/ค่ะ, pronouns and kin terms

Thai encodes respect with sentence particles (ครับ/ค่ะ), pronouns (ผม/ดิฉัน/ฉัน), kin terms (พี่/น้อง) and polite vocabulary (ทาน / รับประทาน vs กิน). Korean uses verb endings (요, -습니다, 반말), the subject honorific -(으)시-, special verbs (드시다) and titles (씨, 님).

**Bridges:**
1. **ครับ/ค่ะ ≈ 요:** a polite add-on that also attaches to fragments (กาแฟครับ / 커피요), that friends drop, and whose bare form means "yes" (ครับ ≈ 네).
2. **ทาน / รับประทาน vs กิน ≈ 드시다 vs 먹다:** Thai already swaps a verb to show respect.
3. **Age sets the relationship.** Thais ask age early to choose พี่ or น้อง; Koreans ask 몇 살이에요? to choose the level. This is the frame for `meet`.
4. **คุณ + name ≈ name + 씨** (คุณมินซู = 민수 씨); คุณลูกค้า = 고객님.

**Breaks** (state all four in `polite`; `honorific` repeats 3):
1. **ครับ/ค่ะ tell the speaker's gender; 요 never does.** Everyone says the same 요.
2. **요 must end every sentence at that level.** Thai drops ครับ/ค่ะ within a conversation even with strangers; dropping 요 means switching to 반말.
3. **-시- honours the person doing the action, never yourself.** Thais say ผมทานแล้วครับ politely about themselves; 저는 드셨어요 ✗ → 저는 먹었어요. 할머니가 주무세요 honours grandma even when speaking to a friend.
4. **-습니다 is a different ending, not a stronger particle.** It marks the situation (announcements, the office, first meetings). The nearest Thai is formal vocabulary (ขอบพระคุณ, ดิฉัน / กระผม), not a different ครับ.

**Kin terms:**
- พี่ is the same whoever speaks. Korean 형/오빠 (older male) and 누나/언니 (older female) depend on **the speaker's** gender: men say 형 and 누나, women say 오빠 and 언니. This is the `titles` trap.
- Thais call service staff พี่ / น้อง (น้องครับ to a young waiter). Korean defaults are 저기요, 사장님 and 기사님.
- **คุณ ≠ 당신:** Korean has no safe polite "you"; it drops it or uses name + 씨 or a title.

### 4.8 Other bridges (all [inference])

- **Dropped pronouns are shared.** Do not teach Thai learners to add 저는; the English half's "Korean drops what's obvious" lands immediately.
- **Answering negative questions:** ใช่ agrees with the statement, and so does 네 (안 가요? — 네 = "right, I'm not going"). A bridge, unlike English [th.md §4 item 13 for the Thai side].
- **ไหม at the end ≈ rising tone in the 요-form;** -습니까 is a question ending like ไหม. Thai has no question word order to unlearn.
- **Connectors:** -고 ≈ แล้วก็ / และ; -지만 ≈ แต่; **-아/어서 ≈ (ก็)เลย, reason first** (ยุ่งเลยไม่ได้ไป = 바빠서 안 갔어요). เพราะ puts the reason second, Korean never does. Story words: 먼저 ก่อนอื่น, 그리고 แล้วก็, 그다음에 หลังจากนั้น, 그래서 ก็เลย, 그런데 แต่ / ว่าแต่, 마지막으로 สุดท้าย.
- **Comparison:** A ถูกกว่า B = A가 B보다 싸요. 보다 goes on B and comes before the adjective. ที่สุด comes after the adjective (อร่อยที่สุด); 제일 comes before (제일 맛있어요).
- **Want / like:** อยาก + verb ≈ -고 싶어요 (after the stem); ชอบ + noun ≈ 을/를 좋아해요. Trap: 좋아요 takes 이/가.
- **Must / may / can:** ต้อง (before the verb) ≈ -아/어야 해요 (after); ไม่ต้อง ≈ 안 -아/어도 돼요; ขอ…ได้ไหม ≈ -아/어도 돼요?; verb + ได้ ≈ -(으)ㄹ 수 있어요; ไม่รู้ ≈ 몰라요; ไม่แน่ใจ ≈ 모르겠어요.
- **Requests and plans:** ขอ…หน่อย ≈ …좀 주세요; ช่วย…หน่อยได้ไหม ≈ -아/어 주시겠어요?; …กันเถอะ ≈ -자; …กันไหม ≈ -(으)ㄹ까요?
- **Texting:** ㅋㅋ ≈ 555 (Thai "ha" from ห้า); ㅠㅠ is used in Thai chats too; 읽씹 ≈ อ่านแล้วไม่ตอบ; KakaoTalk ≈ LINE, the Thai default chat app [inference].
- **Spacing:** Thai writes no spaces between words, and Korean does: one space after each word and its attached particles (커피를 마셔요; never 커피 를). Teach it in `hangul` or `sentences` as a writing rule [inference]. Practice answers accept some variants (두시간 / 두 시간) only where the target row lists them.

## 5. Error zones, ranked

Ranking [inference]: Thai-L1 data first, then frequency, then lesson-local traps.

1. **Plain vs tense vs aspirated stops.**
   - [research-backed (Thai L1)] Wongampai (2025), 32 Thai undergraduates with no prior Korean, perception tests ([abstract](https://so03.tci-thaijo.org/index.php/rpu/article/view/296984), [PDF](https://so03.tci-thaijo.org/index.php/rpu/article/download/296984/192170/1339068)). Aspirated–lenis and fortis–aspirated pairs were discriminated at 100%; **lenis–fortis at 25%**. Identification: lenis 70%, fortis 80%. The paper attributes this to Thai lacking a tense/lax laryngeal contrast. Its "lenis → Thai aspirated, fortis → Thai unaspirated" assimilation is cited from earlier work, not measured. It cites F0 as a possible cue, as a hypothesis only.
   - [research-backed (Thai L1)] Kim (2024), 79 beginners, oral production ([abstract](https://so02.tci-thaijo.org/index.php/hasss/article/view/268381)): "ㅊ and ㅈ, and ㅍ and ㅂ were derived as the most challenging initial phonemes/letters". This is a lenis–aspirated problem in production, whereas Wongampai found a lenis–fortis problem in perception. **The two findings differ; do not merge them.** Teach all three series, and tell the learner that ㄱㄷㅂㅈ is the sound Thai has no letter for (§6).
2. **Final ㄹ and ㄹ/ㄴ.** Kim (2024): "ㄹ and ㄴ were also seen as challenging final phonemes/letters", including ㄴ → ㄹ ("the reverse of the previous studies"). [convention] Thai reads final ล as /n/ (ศาล = *san*) [th.md §4]. Predicted: 물 → "มุน", 서울 ending in n [inference].
3. **Diphthongs.** Kim (2024): "ㅠ, ㅛ, ㅕ, and ㅖ have emerged as the most challenging vowels." Teach each as one syllable with a quick glide.
4. **ㅓ vs ㅗ** [inference]. Thai media spell ㅓ with ออ and sometimes โอ (서울 = โซล), so ㅓ and ㅗ may merge toward Thai โอ/ออ.
5. **Particles: position, choice, omission.** [research-backed (Thai L1), relative clauses only] Kessri (2023), 35 Bangkok students: wrong case marker 13.57% and omitted marker 5.71% of errors; misordering 12.62% (sentence) and 16.67% (word) ([PDF](https://so04.tci-thaijo.org/index.php/abc/article/download/265414/182122/1075872)). Predicted beyond that study: 에/에서 from one ที่, and 이/가 vs 은/는.
6. **Tense left to the time word** (§4.4) [inference].
7. **Speech level** [inference]: 요 dropped mid-conversation; 드시다 about oneself (from ทาน); 오빠 / 형 chosen by the listener; 당신 for คุณ; 반말 with friendly older people.
8. **Modifiers after the noun:** 가방 큰 ✗ → 큰 가방; 음식 제가 좋아하는 ✗ [inference; Kessri's relative-clause misorderings are consistent with it].
9. **Number system and 1–4 shortening:** 삼 시 ✗, 하나 개 ✗, 이십 살 ✗ [inference].
10. **Sound-change rules:** Jung (2024) found palatalization errors highest, then "hardening" (tensification) and assimilation, rising after 10 months without review ([abstract](https://so06.tci-thaijo.org/index.php/klcj/article/view/273916)) [research-backed (Thai L1), sample size not given].
11. **Spacing and Hangul spelling** in writing (§4.8) [inference].

## 6. Reading guide: Korean sounds through Thai letters

### 6.1 Policy: Thai respellings are comparisons, never readings

- **The reading aid is the Korean half's Revised Romanization (RR) plus audio.** It is shared, fixed and target-side; writers cannot change it (spec §5).
- **Thai-script respellings** (คำอ่านภาษาไทย) are familiar to fans, but they cannot be the reading:
  1. **Tones.** Every Thai syllable has a tone, and dead syllables (short vowel or stop final) force low or high tones. Korean has no tones.
  2. **Length.** Thai must pick a short or long vowel (อะ / อา); Korean has no learner-relevant length.
  3. **Final ล reads น** (§5 item 2), exactly where Korean needs l.
  4. **No letter** for ㄱㄷㅂㅈ (plain), ㅆ, or ㅓ. Even official practice disagrees: the Royal Institute's Korean transcription rules (B.E. 2555) write initial ㄱ ㄷ ㅂ ㅈ as **ค ท พ ช**, merging them with ㅋ ㅌ ㅍ ㅊ, and medial ones as ก ด บ จ. Guidebooks are inconsistent ([Saijitborisut 2025](https://so06.tci-thaijo.org/index.php/rdibsru/article/download/287266/192807/1303862)) [convention]. Popular spellings write ㄲㄸㅃㅉ as ก ต ป จ (โอปป้า for 오빠) [practitioner, unverified].
- **So respellings appear only as comparisons:** in the `hangul` and `sound-changes` bodies and in jamo / pronunciation card notes. They are introduced by คล้าย / ใกล้เคียง / ระหว่าง… กับ…, for one letter, one syllable or one short word. Never in glosses, meanings, prompts or options, and never for a whole sentence.
- **When writing a respelling:** use low-class (ค ท พ ช ซ ฮ น ม ร ล ว ย ง) or mid-class letters (ก จ ด ต บ ป อ), never high-class letters (ข ฉ ถ ผ ฝ ส ห), which add a rising tone. Break syllables with "-". Add "ไม่ต้องออกวรรณยุกต์" once per lesson.

### 6.2 Thai letter map (for writers; the paste-ready text is §6.3)

| Korean | RR | Compare with Thai | Where the mapping breaks |
|---|---|---|---|
| ㄲ ㄸ ㅃ ㅉ | kk tt pp jj | **ก ต ป จ**: tight, no puff | Near-exact. Not long or doubled. Pitch starts high |
| ㅋ ㅌ ㅍ ㅊ | k t p ch | **ค ท พ ช**, with a stronger puff | **Trap:** a Thai reader of road signs reads Latin *t p k* as ต ป ก (Phuket: *ph* = พ). In RR, *t p k* are the **aspirated** ones |
| ㄱ ㄷ ㅂ ㅈ (start of word) | g d b j | **no Thai letter**: between ก/ค, ต/ท, ป/พ, จ/ช, a little breath, voiceless, the vowel starts low | **Not** Thai บ ด (voiced) at the start. This is the series Thai learners confuse (§5.1) |
| ㄱ ㄷ ㅂ ㅈ (between vowels) | g d b j | voiced: ก that buzzes, ด, บ, จ that buzzes | Only บ and ด exist in Thai |
| ㅅ / ㅆ | s / ss | ซ / ซ said tight with no breath | ㅅ before ㅣ, ㅑ, ㅕ, ㅛ, ㅠ: between ซี and ชี (시 *si*). ㅆ has no Thai letter |
| ㄹ (start, between vowels) | r | **ร**, one light tap, never trilled | Thai's casual ร→ล merger does no harm here: Korean has one ㄹ |
| ㄹ (end of syllable) | l | **a real ล**: the tongue tip stays on the gum ridge | **Thai final ล = น.** 물 *mul* ≠ มุน. ㄹㄹ *ll* = a long l |
| ㄴ ㅁ / ㅇ (end) | n m / ng | น ม / ง | ㅇ at the start is **silent**: not Thai อ, which starts with a catch (glottal stop) |
| ㅎ | h | ฮ | Weak or silent between vowels (좋아요 *joayo*) |
| ㅏ ㅣ ㅜ | a i u | อา อี อู | Short or long does not matter |
| ㅗ | o | โอ, rounder and tighter | |
| ㅓ | eo | between **ออ** and **เออ**: open like ออ, lips unrounded | One vowel. Media spell it ออ or โอ, which blurs it with ㅗ |
| ㅡ | eu | **อือ** | Exact: Thai has this vowel |
| ㅐ / ㅔ | ae / e | between แอ and เอ | The same sound in modern Seoul speech; the spelling differs |
| ㅑ ㅕ ㅛ ㅠ ㅖ ㅒ | ya yeo yo yu ye yae | ยา ยอ โย ยู เย แย | One syllable each (§5.3) |
| ㅘ ㅝ ㅙ ㅞ ㅚ ㅟ ㅢ | wa wo wae we oe wi ui | วา วอ แว เว เว วี อึย | ㅢ is one syllable (อึ + อี quickly) |

**Finals: the big bridge.** Korean allows seven final sounds, k n t l m p ng. Six are Thai มาตรา: แม่กก แม่กน แม่กด แม่กม แม่กบ แม่กง. Like Thai, they are **unreleased** (밥 *bap*: close the lips and stop). Korean spelling neutralises finals just as Thai does: ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ end as **t** (แม่กด), like Thai ส ช จ ศ in final position; ㅋ ㄲ end as k, ㅍ as p. The seventh, **l**, has no Thai มาตรา, so it is the one to drill [convention for the Thai side; inference for the comparison].

**Pitch, not tone** [hypothesis]: in Seoul speech, a vowel after a tense or aspirated consonant (and ㅅ ㅎ) starts higher, and after a plain one lower. Thai ears are tuned to pitch, so "ㄲ starts high, ㄱ starts low" may help. It is a property of the consonant, not a word tone, and the rest of the word stays flat. Wongampai cites F0 work, but the claim was not tested on Thai learners. Mark it "อาจช่วยได้" in the lesson, never as a rule.

### 6.3 Paste-ready guide (for `hangul`; [inference], native check §11)

> **วิธีอ่านคำอ่านอักษรโรมัน**
>
> ตัวอักษรโรมันใต้ภาษาเกาหลีทุกบรรทัดคือคำอ่านตามระบบทางการของเกาหลี ไม่ใช่การอ่านแบบป้ายถนนไทย อ่านตามนี้
>
> **สระ**
> - **a i u** = อา อี อู · **o** (ㅗ) = โอ แต่ห่อปากกลมและแน่นกว่า
> - **eo** (ㅓ) = สระเดียว ระหว่าง ออ กับ เออ อ้าปากแบบ ออ แต่ไม่ห่อปาก ไม่ใช่ เอ-โอ
> - **eu** (ㅡ) = อือ ภาษาไทยมีเสียงนี้อยู่แล้ว
> - **ae** (ㅐ) และ **e** (ㅔ) = ปัจจุบันออกเสียงเหมือนกัน ระหว่าง แอ กับ เอ
> - **ya yeo yo yu ye wa wo wi ui** = หนึ่งพยางค์ ร่อนเสียงเร็ว ๆ เช่น yeo = ยอ ไม่ใช่ ยี-ออ
> - ภาษาเกาหลีไม่แยกสระสั้นยาว และไม่มีวรรณยุกต์ อ่านทุกพยางค์ด้วยเสียงเรียบ ๆ
>
> **พยัญชนะ**
> - **k t p ch** (ㅋ ㅌ ㅍ ㅊ) = ค ท พ ช พ่นลมแรงกว่าภาษาไทย ระวัง t ในที่นี้ไม่ใช่ ต
> - **kk tt pp jj** (ㄲ ㄸ ㅃ ㅉ) = ก ต ป จ ไม่มีลม ไม่ได้ออกเสียงสองครั้ง
> - **ss** (ㅆ) = ซ ที่เกร็งคอ ไม่มีลม
> - **g d b j** (ㄱ ㄷ ㅂ ㅈ) ต้นคำ = เสียงกลาง ๆ ระหว่าง ก กับ ค ต กับ ท ป กับ พ จ กับ ช มีลมเล็กน้อย ไม่ใช่ บ หรือ ด ของไทย ถ้าอยู่ระหว่างสระจะก้องขึ้น ใกล้ บ ด
> - **s** = ซ ถ้าอยู่หน้า i จะใกล้ ชี เบา ๆ
> - **h** = ฮ · **n m** = น ม · **ng** = ง พบที่ท้ายพยางค์เท่านั้น
> - **r** (ㄹ ระหว่างสระ) = ร แตะลิ้นครั้งเดียว ไม่รัว
> - **l** (ㄹ ท้ายพยางค์) = ล จริง ๆ ปลายลิ้นแตะปุ่มเหงือกค้างไว้ ไม่ใช่ น แบบตัวสะกด ล ในภาษาไทย **ll** = ล ยาว
>
> **ตัวสะกด**
> - มีเสียงตัวสะกด 7 เสียง คือ k n t l m p ng ตรงกับแม่กก แม่กน แม่กด แม่กม แม่กบ แม่กง และเพิ่ม l อีกหนึ่งเสียง
> - ตัวสะกดไม่ปล่อยลม เหมือนภาษาไทย **bap** (ข้าว) ปิดปากแล้วหยุด
>
> **กฎ 3 ข้อที่ต่างจากภาษาไทย**
> 1. ㅇ ต้นพยางค์ไม่มีเสียง ไม่ใช่ อ ที่มีเสียงกักในคอ ตัวสะกดจึงเลื่อนไปเป็นเสียงต้นของพยางค์ถัดไป **hangugeo** = ฮัน-กู-กอ ไม่ใช่ ฮัน-กุก-ออ
> 2. ไม่มีวรรณยุกต์ ถ้าเห็นคำอ่านภาษาไทยของคำเกาหลี ให้ถือเป็นเสียงใกล้เคียงเท่านั้น
> 3. คำอ่านเขียนตามเสียงจริง ไม่ใช่ตามตัวสะกด 감사합니다 อ่านว่า **gamsahamnida** พูดตามคำอ่าน เขียนตามฮันกึล

**Placement:**
- The full guide goes in `hangul` (waiver).
- `sound-changes` repeats rules 1 and 3 and the finals paragraph, using only its English body's jamo.
- The three Hangul-deck descriptions carry their part **in RR letters and Thai, with no jamo**: vowels give eo / eu / ae–e; consonants give k t p ch vs g d b j, r vs l; advanced gives kk tt pp ss jj.
- Jamo card notes (ko.c0001–ko.c0060) use the same wording, within each card's own Hangul set.
- Never compare with English sounds anywhere.

## 7. Per-lesson notes and Thai titles

Titles are fixed here so cross-references agree (keep each English title's Hangul). "Rewrite" = English-built passages to rebuild, not translate.

| # | id | Thai title | Thai angle |
|---|---|---|---|
| 1 | `hangul` | 1 · ฮันกึลในรวดเดียว | Insert §6.3 (waiver). อ ↔ ㅇ look alike as vowel carriers, but ㅇ is silent. Rewrite the vowel table's "uh / oo / ee / bed". Keep the stroke line |
| 2 | `polite` | 2 · ระดับภาษา | Build on ครับ/ค่ะ ≈ 요 and the four breaks (§4.7). คำลงท้าย vs ส่วนลงท้าย. Rule of thumb stays |
| 3 | `meet` | 3 · การพบปะผู้คน | Age question ≈ choosing พี่/น้อง. 이에요/예요 by the last block. Goodbyes: Thai says สวัสดี both ways; Korean picks by who leaves |
| 4 | `sound-changes` | 4 · การเปลี่ยนเสียง: ทำไม 감사합니다 จึงออกเสียงต่างไป | Linking without อ's catch. Nasal change is easy for Thai (ง is a normal onset). Drop the Read-drill line. Use RR + Thai syllable breaks, not English respellings |
| 5 | `nouns` | 5 · คำนามและ 은/는 | "No a/the, no plural" is already true of Thai: say so. 이/그/저 ≈ นี้/นั้น/โน้น but **before** the noun. Owner first (제 집 vs บ้านของฉัน) |
| 6 | `isseoyo` | 6 · 있어요 และ 없어요 | The §4.3 table: มี + อยู่ → 있어요; ไม่มี / ไม่อยู่ → 없어요; เป็น / คือ → 이에요 |
| 7 | `pronouns-questions` | 7 · คำสรรพนามและคำแสดงคำถาม | Question words in place (a bridge). คุณ ≠ 당신. 저 / 나 vs ผม / ฉัน: Korean picks by level, Thai by gender and level |
| 8 | `verbbasics` | 8 · คำกริยา | Verbs never change for the person (as in Thai). Describing verbs = Thai adjectives as predicates. Drop the "to …" infinitive framing; 하다 verbs ≈ ทำ + noun |
| 9 | `verbs` | 9 · รูปปัจจุบัน: รูป 요 | One form = กิน / กำลังกิน / กินไหม (by tone). 아요/어요 by the stem's last vowel is new |
| 10 | `past` | 10 · รูปอดีต: 았어요 / 었어요 | §4.4 trap 1. ไม่ได้ไป = 안 갔어요. Replace "I ate / have eaten / did eat" with "กินแล้ว / เคยกิน / กิน (เมื่อวาน)" → all 먹었어요 |
| 11 | `future` | 11 · รูปอนาคตและแผน: -(으)ㄹ 거예요 | จะ ≈ 거예요; คงจะ for guesses. "kkeoyeyo": say "tight k = ก" |
| 12 | `sov` | 12 · ลำดับคำและ 을/를 | Thai SVO → Korean SOV throughout. 을/를 has no Thai equivalent; dropping it in speech feels natural to Thai learners |
| 13 | `particles` | 13 · 에 และ 에서 พร้อมแผนที่คำช่วย | One ที่ → 에 / 에서 by the verb; จาก → 에서. The map gets a column "ภาษาไทย: คำบุพบทหน้าคำนาม" |
| 14 | `negation` | 14 · การปฏิเสธ: 안 และ -지 않아요 | ไม่ before the verb ≈ 안. ไม่ใช่ = 아니에요; ไม่มี = 없어요. 안 sits after the object, unlike ไม่ |
| 15 | `do-man` | 15 · 도 และ 만: ด้วยและเท่านั้น | ด้วย after the noun = 도; เท่านั้น = 만. 저도 안 가요 = ฉันก็ไม่ไปเหมือนกัน |
| 16 | `sentences` | 16 · การประกอบคำนามกับคำกริยา | The four shapes against Thai order. Rewrite the "English order" mistakes as "ลำดับแบบไทย" |
| 17 | `want-like` | 17 · อยากและชอบ: -고 싶어요, 좋아해요 | อยาก (before) → -고 싶어요 (after). ชอบ takes no marker; 좋아해요 takes 을/를 |
| 18 | `numbers` | 18 · ระบบตัวเลขสองแบบ | §4.6: shared Chinese roots, 만 = หมื่น, แสน breaks. Hours and age native. Rewrite "build like English digits" as "ต่อกันแบบเลขไทย: 이십오 = ยี่สิบห้า" |
| 19 | `food` | 19 · กินข้าวนอกบ้าน | Classifiers as in Thai (กาแฟ 2 แก้ว). 잘 먹겠습니다 has no Thai set phrase: explain it |
| 20 | `getting-around` | 20 · การเดินทางไปมา | T-money ≈ Rabbit card (BTS) [inference]. Taxi lines are new |
| 21 | `titles` | 21 · คำเรียกและคำยกย่อง | 씨 ≈ คุณ but after the name. พี่ → 형/오빠/누나/언니 by the speaker's gender. Column "(you female / you male)" → "ถ้าผู้พูดเป็นผู้หญิง / ผู้ชาย" |
| 22 | `plans` | 22 · การนัดหมาย | -자 = …กันเถอะ; -(으)ㄹ까요 = …กันไหม; -(으)ㄹ래요 = อยาก…ไหม. Table header สุภาพมาก (§3.7). Station exits as in BTS / MRT |
| 23 | `texting` | 23 · แชตแบบคนเกาหลี | ㅋㅋ ≈ 555; KakaoTalk ≈ LINE; 넵 ≈ ครับผม / ค่า (playful). 읽씹 = อ่านไม่ตอบ |
| 24 | `counters` | 24 · ลักษณนาม | The bridge (§4.5) and its four breaks |
| 25 | `joining` | 25 · การเชื่อมประโยค: -고 -지만 และ -아/어서 | -아/어서 ≈ (ก็)เลย, reason first; not เพราะ order |
| 26 | `story` | 26 · การเล่าเรื่องในอดีต | Connector table (§4.8). Every verb past even after เมื่อวาน. "the Past tense lesson" → บทที่ 10 รูปอดีต |
| 27 | `noun-modifiers` | 27 · การขยายคำนาม: 좋은 날씨, 큰 가방 | **Flip:** อากาศดี → 좋은 날씨; อาหารที่ฉันชอบ → 제가 좋아하는 음식. "No that/which/who" → "ไม่มีคำว่า ที่ หลังคำนาม" |
| 28 | `compare` | 28 · การเปรียบเทียบ: 보다, 더, 제일 | กว่า ≈ 더 + 보다 on B. ที่สุด after vs 제일 before |
| 29 | `cant` | 29 · ทำไม่ได้ ทำได้ และไม่รู้ | ไปไม่ได้ = 못 가요 vs ไม่ได้ไป = 안 갔어요. ไม่รู้ ≈ 몰라요; ไม่แน่ใจ ≈ 모르겠어요 |
| 30 | `have-to` | 30 · ต้องทำ: -아/어야 해요 | ต้อง before vs -아/어야 해요 after; ไม่ต้อง ≈ 안 -아/어도 돼요. "the Asking politely lesson" → บทที่ 32 |
| 31 | `honorific` | 31 · กริยายกย่อง | ทาน / รับประทาน ≈ 드시다, but never about oneself (§4.7 break 3). "Your partner's parents" stays |
| 32 | `requests` | 32 · ขอสิ่งต่าง ๆ อย่างสุภาพ | หน่อย ≈ 좀; ไม่ทราบว่า ≈ 혹시; ช่วย…หน่อยได้ไหม ≈ 주시겠어요. Table glosses in Thai |
| 33 | `office` | 33 · ภาษาเกาหลีในที่ทำงาน | -습니다 = workplace register. Title alone (부장님) vs Thai คุณ / พี่ + nickname. The 수고 family per §3.3. Pouring ≈ Thai respect for elders at the table |

Lesson blurbs follow the same rules (no particles; Hangul as in English).

## 8. Practice prompts and checks

**Join by id, always.** For each practice row, read `target/ko/practice.jsonl`: `t`, `a` (accepted answers; `a[0]` is the model and builds the tiles), `x` (wrong forms to exclude), `hint`. Read `sentences.jsonl` for `{{ex:}}` rows.

**Each `type` and `order` prompt must lead to `a[0]` and to no `x`.** Cue three things:
1. **Politeness:** by the §3.2 table. A prompt whose answer is a 요-form ends in ครับ/ค่ะ (ครับ/คะ); a 반말 answer has no particle; a -습니다 answer carries (ทางการ); a -시- answer carries (ยกย่อง) or the English situation cue ("พูดกับผู้ใหญ่"). Keep every English tag and situation cue ("(to a taxi driver)" → "(พูดกับคนขับแท็กซี่)", "Text a friend:" → "แชตหาเพื่อน:").
2. **Tense:** a past answer → the prompt contains แล้ว, a past time word (เมื่อวาน, เมื่อกี้) or ไม่ได้ + verb; a future answer → จะ; a present answer → neither. If the Thai stays ambiguous, add (อดีต) / (ปัจจุบัน) / (อนาคต) where the English has "past" in `hint`.
3. **Person:** write ฉัน only when `a[0]` contains 저/제/나; otherwise drop the pronoun (answers with and without 저는 are usually both listed). Name the third person as the English does (เพื่อน, มินซู).

**Other prompt rules:**
- "(write the number in Hangul)" → "(เขียนตัวเลขเป็นอักษรเกาหลี)".
- "(use -(으)ㄹ까요)" keeps the Hangul unchanged.
- `mc` `q` and `why` are instructions: no particles, except inside a quoted gloss.
- `why` is one sentence, giving the Thai angle where §4 has one.
- Prose options must stay distinct after translation.
- Check `x` too: polite.14's `x` is 괜찮아요, so its casual prompt has no ครับ/ค่ะ.

## 9. Localisation

- **Follow the Korean row as given.** Today the rows say 미국에서 왔어요 (ko.c0077, ko.g021, ko.s0012, ko.s0127, ko.p005, meet.06, particles.03): gloss **มาจากอเมริกา(ครับ/ค่ะ)**, never "ประเทศไทย". The Korean half is moving to a blank "저는 ___에서 왔어요"-type row plus a Countries deck. When the export lands, gloss the blank row with the blank kept (มาจาก ___ ครับ/ค่ะ) and the Countries cards with standard Thai country names (태국 ไทย, 미국 อเมริกา, 영국 อังกฤษ…). Do not add 태국 anywhere before then; `meet` gets no waiver.
- **Prose** may name ไทย, กรุงเทพฯ, เชียงใหม่ in Thai letters; money in บาท; chat app LINE; transport BTS / MRT.
- **Names and places in Thai script.** Use the established Thai media spelling where one exists, otherwise the Royal Institute rule (initial ㄱㄷㅂㅈ → ค ท พ ช; tense → ก ต ป จ; ㅅ/ㅆ → ซ). The spellings below are common Thai forms, not individually verified:

| Korean (RR) | Thai |
|---|---|
| 키이 (Kii) | คีอี |
| 민수 / 지은 / 리사 / 김 | มินซู / จีอึน / ลิซ่า / คิม |
| 서울 / 명동 / 강남 / 홍대 / 홍익 | โซล / เมียงดง / คังนัม / ฮงแด / ฮงอิก |
| 인천 / 한강 / 부산 / 제주 | อินชอน / แม่น้ำฮัน / ปูซาน / เชจู |
| 롯데 / 신세계 / 현대 | ล็อตเต้ / ชินเซเก / ฮุนได |
| 오클라호마 / 조선 | โอคลาโฮมา / โชซอน |
| 떡볶이 / 김밥 / 아이스 아메리카노 | ต็อกบกกี / คิมบับ / ไอซ์อเมริกาโน่ |
| 카카오톡 / 티머니 | คาเคาทอล์ก / ทีมันนี่ |

- **Loanwords:** where the English note says "from English", say the word comes from English as Thai also borrowed it (커피 ↔ คอฟฟี่ in Thai cafés, กาแฟ native). Konglish jokes need a Thai angle or a plain note.

## 10. What NOT to do

- **No Korean beyond the English row's Hangul** without a `_waive` + `_note` (only `hangul`, and `sound-changes` if needed).
- **No English left in Thai text:** no English glosses, no English grammar terms, no "like *bed*" sound comparisons. Exceptions: RR letters, digits, brand names (KakaoTalk, T-money may stay Latin in notes), and the English word for a loanword's source.
- **No invented etymologies.** Only the Middle-Chinese numeral link (§4.6) is cleared. The English half's own claims (e.g. 콘센트) are carried as written, never extended.
- **No ครับ/ค่ะ in instructions**, no single gendered particle, no ผม / ดิฉัน in glosses.
- **No Thai respelling as a reading** (§6.1). No high-class letters in respellings.
- **No mentions of trainers or drills** (ทักษะ / Read): all trainers are off for this course.
- **No changes to `f`, `id`, `k`, `src`**, and no retyping of `src` (edit by script, by id).
- **No promises about TOPIK or EPS results.**

## 11. Native check and unverified claims

**Twelve questions for a Thai reviewer:**
1. §3.2: do ครับ/ค่ะ in polite glosses, and none in casual ones, read naturally, or as clutter?
2. Is ฉัน beside ครับ/ค่ะ acceptable in learning materials?
3. Does เธอ for 너 match current subtitles?
4. §3.3: are ฝากเนื้อฝากตัวด้วย, วันนี้เหนื่อยแย่เลยนะ, ขอให้ทำงานราบรื่นนะ and ขอบคุณสำหรับงานวันนี้ right for the 수고 / 부탁 family?
5. Is ไม่ทราบว่า a fair match for 혹시?
6. §3.5: คำช่วย, ส่วนลงท้าย, ก้านกริยา, กริยาบอกลักษณะ, เสียงธรรมดา / เสียงพ่นลม / เสียงเกร็ง: clear to a learner?
7. §6.3: is the whole guide natural? In particular "ระหว่าง ออ กับ เออ" for ㅓ, and "ระหว่าง ซี กับ ชี" for 시.
8. §6.3: is "ตัวสะกด ล = น" common knowledge, so that the warning lands?
9. §9 name spellings, especially คีอี, ชินเซเก, ทีมันนี่ and คาเคาทอล์ก.
10. §4.8: 555 for ㅋㅋ, LINE for KakaoTalk, Rabbit card for T-money?
11. Level titles: ยอดฝีมือ, ผู้เชี่ยวชาญ, ปรมาจารย์?
12. ราตรีสวัสดิ์ for 안녕히 주무세요: too bookish? Would หลับฝันดี be better?

**Evidence limits:**
- **Wongampai 2025:** perception only; 32 southern bidialectal students; one inconsistency between text and table (fortis 80%).
- **Kim 2024:** abstract only; no error rates.
- **Kessri 2023:** relative clauses only.
- **Jung 2024:** abstract only; unclear category labels ("descreening").
- **Kim & Kim (Burapha):** n=47; no publication year on the page.
- **Boonphisudsilp 2025:** abstract only.
- **Saijitborisut 2025:** gave only part of the Royal Institute 2555 table (initial and medial lenis, ㅏ). **The tense-consonant, vowel and final rows of §6.2 are inference and common practice, not the official table**, which could not be fetched.
- **The EPS-TOPIK Thai textbook** (hrdkorea.or.kr PDF) failed to load, so the textbook's own Thai terms were not checked.

**Unverified [inference / practitioner]:**
- the F0 cue (§6.2);
- ㅓ / ㅗ merging (§5.4);
- every predicted error in §5 items 6–9 and 11;
- popular ㄲ→ก spellings;
- every Thai sentence, gloss and name in this profile.

## Sources

Opened for this profile (2026-11-23):
- [Wongampai, N. (2025). Perception of Korean Stop Consonants in the Seoul Dialect by Thai Learners of KFL. *J. Humanities and Social Sciences, Rajapruk University* 11(3)](https://so03.tci-thaijo.org/index.php/rpu/article/view/296984) ([PDF](https://so03.tci-thaijo.org/index.php/rpu/article/download/296984/192170/1339068))
- [Kim, C.-Y. (2024). Thai KFL learners' phonological awareness, orthographic awareness, and pronunciation production. *HASSS* 24(3)](https://so02.tci-thaijo.org/index.php/hasss/article/view/268381)
- [Kessri, N. (2023). Syntactic errors in Korean relative clauses by beginning Thai learners](https://so04.tci-thaijo.org/index.php/abc/article/download/265414/182122/1075872)
- [Jung, M. (2024). Thai students' mispronunciation of Korean: phonological phenomena. *KLCS Journal* 6(1)](https://so06.tci-thaijo.org/index.php/klcj/article/view/273916)
- [Saijitborisut, T. (2025). A critical analysis of Korean transcription into Thai](https://so06.tci-thaijo.org/index.php/rdibsru/article/download/287266/192807/1303862)
- [Boonphisudsilp, K. (2025). Problems of learning and teaching Korean for Thai EPS-TOPIK workers](https://so04.tci-thaijo.org/index.php/abc/article/view/271834)
- [Kim, K. & Kim, U. J. Pre-university Korean learning and academic performance, Burapha University](https://so06.tci-thaijo.org/index.php/klcj/article/view/287231)
- [Univext: common Korean mistakes (Thai terms คำช่วย, ลักษณนาม, เสียงพ่นลม)](https://univext.com/th/blog/480/kho-phit-phlat-phasa-kaoli-thi-phop-boi)
- [Wikipedia: Thai numerals](https://en.wikipedia.org/wiki/Thai_numerals)
- [TruePlookpanya TOPIK word list (shows inconsistent Thai respellings: 가게 คา-เก, 그 กือ)](https://www.trueplookpanya.com/knowledge/content/97108-lankor-lan-)

Local files read: `docs/HALVES-SPEC.md`; `docs/profiles/tl-ko.md`, `ja-ko.md` §3.2, `th.md` §1–6 and §10, `en-th.md` §2; `docs/briefs/tl-ko-writer.md`; `tools/halves/native/tl/ko/work/README.md`; `tools/halves/native/es/ko/REVIEW.md`; `tools/halves/native/en/ko/` (lessons.jsonl, decks.jsonl, labels.jsonl, sentences, practice, all 33 lesson bodies skimmed); `tools/halves/target/ko/` (course.json, cards, sentences, practice); `packs/i18n-th.js` (`exact` and `road`).
