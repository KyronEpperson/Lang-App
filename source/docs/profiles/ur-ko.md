# Urdu speakers learning Korean: pair profile

Course `ur-ko` is Korean for Urdu speakers, assembled from two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards; see `docs/HALVES-SPEC.md`);
- the Urdu half `tools/halves/native/ur/ko/`, written by w1–w4 from the `mk_native.js ur` work files, then kept current by a top-up writer (`docs/briefs/x-ko-topup.md`).

This profile is the writers' authority. Its analysis follows `hi-ko.md` (and the section plan of `mr-ko.md`), because Urdu grammar is Hindi grammar: SOV, postpositions, آپ / تم / تو, the four-way stop series, gendered verbs. **The wording is Urdu, never Hindi:** شکریہ not धन्यवाद-style words, السلام علیکم not نمستے, Persian-Arabic school terms (فعل, اسم, صفت, حرفِ جار), Perso-Arabic script, right to left.

**What binds this profile:** the Urdu interface dictionary `tools/i18n/ur/NOTES.md` (register, glossary, tab names, level titles, quiz words, typography, RTL conventions) and `ui.json`. Its choices are reused unchanged in §2–§3. Where this profile adds something NOTES leaves open, it says so (the -습니다 tag, "ending", the stop-series terms, the particle term's first-use gloss).

**Author: not a native Urdu speaker.** Every Urdu sentence here is **[inference]** unless tagged. Evidence tags:
- **[source]**: a page opened for this profile (Sources);
- **[convention]**: school grammar, the app's own files, or general reference knowledge, not opened;
- **[inference]**: this profile's reasoning;
- **[unverified]**: looked for and not confirmed. Build nothing new on it.

## 1. Summary of decisions

1. **Register.** Everyday standard Pakistani Urdu, as Pakistani apps write it (NOTES §1). English loans that Pakistanis use are written in Urdu script (کارڈ, کیفے, میٹرو, واٹس ایپ). No Hindi-only Sanskrit words, no heavy literary words. The learner is **آپ** with the **-یں** imperative (پڑھیں, سنیں, یاد رکھیں). Never تم / تو toward the learner.
2. **Korean levels.** 반말 → **تم**; 요 → **آپ**; -습니다 → آپ + formal words; -시- → آپ with -یے forms and respect words toward the listener, the **respect plural** for a third person. **Never تو.** Tags only where the English has them: **(رسمی) / (مؤدب) / (بے تکلف) / (تعظیمی)**.
3. **Gender.** Urdu verbs show the speaker's and addressee's gender; the app knows neither. Order: neutral wording → the scene → the unspaced pair جاتا/جاتی (§2.3).
4. **Big bridge.** Verb-final order, question words in place, and the Urdu postposition map (کو, میں, سے, کا) onto the particles (§4.1). Urdu postpositions are **separate words**; Korean particles are **glued on**.
5. **Sound bridge.** Urdu already has ک کھ گ گھ. Map: ㄱ ≈ soft گ, ㅋ ≈ کھ, ㄲ ≈ a tight ک (§6). Urdu ف is [f], so ㅍ ≈ پھ, **never ف**.
6. **Script policy.** Short vowels are unwritten in Urdu, so Urdu script **compares single sounds through anchor words** (آم, اَب, دودھ) with at most one written vowel mark; it **never respells a Korean word** (§6).
7. **Right to left.** Every field is typed in **logical (reading) order**; no bidi control characters; Western digits; ۔ ، ؟; fields start with an Urdu letter; Korean ? / ! dropped inside Urdu prose; ← only between Urdu items (§3.5). This is the part most likely to go wrong, and **no automated test checks it for ur** (§10).
8. **Pakistani frame.** بھائی / باجی ↔ 형·오빠 / 누나·언니; صاحب / صاحبہ ↔ 님; جی ↔ 네; rupees, لاکھ / کروڑ, واٹس ایپ; a halal note in `food` (§8).
9. **Learners.** EPS workers (Pakistan's Employment Permit System quota rose to 5,400 in 2025, and applicants must pass EPS-TOPIK [source: ProPakistani]); NUML students (NUML has a Korean department, and the King Sejong Institute at NUML Islamabad opened in 2012 with HRD Korea [source: Express Tribune]); K-drama and K-pop fans [inference]. Write for an adult with no linguistics.

## 2. Register, glosses, gender

### 2.1 Voice and typography

- **Address (NOTES §1).** -یں imperative for instructions (پڑھیں, کہیں, ٹائپ کریں); impersonal or dative frames (آپ کو یاد ہوگا, یاد رکھنے کی بات:). Praise: شاباش!, بہت خوب!, بالکل درست!. No یار, no ارے toward the learner.
- **Spelling (NOTES §1, en-ur §2.7).** Urdu code points only: ی U+06CC, ک U+06A9, ہ U+06C1, ھ U+06BE (aspiration only), ے U+06D2; never the Arabic ye / kaf / heh / teh marbuta. NFC. One spelling per word: چاہیے, لیے, کیجیے / دیجیے / لیجیے, گئی / گئے, نئی, کہہ (stem), امریکہ, **سکول** (en-ur), اسٹیشن, اسٹور.
- **Punctuation.** ۔ ends a sentence, ، comma, ؟ question, ؛ semicolon. Never ASCII `. , ?` directly after Urdu. `: ! … / · — × + =` as in English. Straight quotes `"…"` (NOTES). `✗` / `✓`. ` / ` only for alternatives and the dialogue split.
- **Digits.** Western 0–9 only; no ۰–۹, no ٠–٩. `%` after the number.
- **Script.** Korean in Hangul, RR in Latin, exactly as in the English row. Everything else in Urdu script, brands included: کاکاؤ ٹاک, واٹس ایپ, انسٹاگرام, ٹی منی, کے-پاپ, کے-ڈرامہ (the hyphen keeps کے from reading as the possessive, NOTES §5). Latin is allowed only for RR, its letters (*eo*, *kk*) and NOTES §2's closed list (XP, Aa, A / B, Lang App).
- **Vowel marks.** None in ordinary text. Allowed only as §6 allows, and for the homograph marks if a sentence would otherwise misread (مَیں "I" vs مِیں "in" is never needed in normal prose: reword instead).
- **No ZWNJ, ZWJ, RLM, LRM, U+2066–2069, U+202A–202E, tatweel** (NOTES §1).
- **Course name** (`course.json`): `{"native":"ur","name":"کوریائی","brand":"한글"}`. Language names are feminine: کوریائی آسان ہے؟; ہنگل is treated as feminine too (ہنگل سیکھی جا سکتی ہے) [inference].
- **Lint.** A lesson body must never contain a space + *on* + letters + `=`; in Urdu text that can only happen in RR, so put `:` after an RR word before `=`.

### 2.2 Speech levels and how to gloss them

| Korean | Urdu gloss | Example |
|---|---|---|
| 반말 | **تم**, -و command (بیٹھو, کھاؤ, دیکھو) | 뭐 해? → کیا ہو رہا ہے؟ |
| 요-form, -(으)세요 between equals or to a stranger | **آپ**, -یں command | 앉아요 / 앉으세요 → بیٹھیں |
| -습니다 | آپ + formal words | 감사합니다 → شکریہ · 죄송합니다 → معاف کیجیے |
| -시- to a listener shown as elder, teacher, boss or customer; special verbs (드세요, 주무세요, 계세요) | آپ + **-یے** forms and respect words (تشریف رکھیے, لیجیے, فرمائیے) | 맛있게 드세요 → مزے سے کھائیے |
| -시- about a third person | **respect plural** | 할머니가 주무세요 → دادی سو رہی ہیں · 사장님 계세요? → مالک صاحب ہیں؟ |
| 성함 · 말씀 · 드리다 | **اسمِ گرامی · فرمانا · پیش کرنا / عرض کرنا** | 성함이 어떻게 되세요? → آپ کا اسمِ گرامی؟ |
| 주세요 | دیں / دے دیں; ذرا for 좀; **no براہ کرم, no پلیز** | 물 주세요 → پانی دے دیں |
| -아/어 주세요 | … دیں | 천천히 말해 주세요 → آہستہ بولیں |
| 주시겠어요? | **… دیجیے گا؟** | 찍어 주시겠어요? → تصویر کھینچ دیجیے گا؟ |

Rules:
- **Both directions.** A 요 / -습니다 / -시- line never gets تم; a 반말 line never gets آپ. Fixed phrases take no pronoun.
- **The -یں / -یے split is the Urdu way to show what -시- adds** (this is the decision the tl review had to make afterwards). Use -یے only when the line or its dialogue shows a listener of higher status, or the Korean uses a special honorific word. Directions to a stranger (똑바로 가세요) stay -یں: سیدھا جائیں.
- **جی.** 네 = **جی** / جی ہاں; 아니요 = **جی نہیں**; 응 = ہاں; 아니 = نہیں. Never add جی or صاحب where the Korean has no 네, 님 or title.
- **براہ کرم** only where the English says "please" *and* the line is written or formal (email, sign, announcement). NOTES uses it once.
- **Never تو**, not even for 반말: Urdu تو is intimate or rude; Korean 반말 between friends is ordinary. `polite` may name تو once to say this.

### 2.3 Gender: speaker, addressee, third person

**A. The speaker ("I"). Take the first rule that fits.**

1. **A neutral frame with the same tense and meaning:**

| Korean | Neutral Urdu frame | Example |
|---|---|---|
| like / have / kin | مجھے X پسند ہے · میرے پاس X ہے · میرا ایک بھائی ہے | 커피가 좋아요 → مجھے کافی پسند ہے |
| be + noun (invariant noun) | میں طالب علم ہوں · میں ڈاکٹر ہوں | 학생이에요 → میں طالب علم ہوں |
| hungry / don't know / understood | مجھے بھوک لگی ہے · مجھے نہیں پتا · سمجھ آ گئی | 알겠어요 → جی، سمجھ آ گئی |
| past of a transitive verb | **نے** frame (agrees with the object) | 밥을 먹었어요 → میں نے کھانا کھا لیا |
| -고 싶어요 | **… کو دل چاہتا ہے** | 집에 가고 싶어요 → گھر جانے کو دل چاہتا ہے |
| -아/어야 해요 | **مجھے … ہے**; in a prompt whose `x` is the want-form: **مجھے لازمی … ہے** | 가야 해요 → مجھے جانا ہے |
| -(으)ㄹ 수 있어요 (skill) | **مجھے … آتا ہے** | 한국어 할 수 있어요 → مجھے کوریائی بولنی آتی ہے |
| 못 (this time) | **میرا … نہیں ہو سکے گا** | 오늘 못 가요 → آج میرا آنا نہیں ہو سکے گا |
| age | میری عمر … سال ہے | 스물여덟 살이에요 → میری عمر اٹھائیس سال ہے |

- **The frames must stay distinct**, so no prompt in lessons 11, 17, 29, 30 fits two answers: want = دل چاہتا ہے · must = مجھے … ہے · can = مجھے … آتا ہے · future = جاؤں گا/گی.
- **Never reword across a cue.** مجھے جانا ہے is "have to", never "want".

2. **The scene fixes the speaker.** 오빠 / 언니 in the speaker's mouth → female; 형 / 누나 → male. 민수 is male; 지은, 리사 female. An English he / she decides too.

3. **Otherwise, the unspaced pair, masculine first, on the inflected word only:** میں گھر جاتا/جاتی ہوں · میں کل جاؤں گا/گی · میں گھر گیا/گئی.
   - Urdu has no neutral "I" present or intransitive past, so expect the pair in lessons 9, 10, 11, 26.
   - **Never a spaced ` / `**: that is the dialogue separator.
   - Bare masculine forms in §4 and §8 are shorthand for the pair.

**B. The addressee.**
- **آپ lines:** neutral first (imperative, dative, نے: آپ نے کیا کھایا؟, آپ کو کیا چاہیے؟), then the generic masculine plural (آپ کہاں جا رہے ہیں؟), as NOTES §1 does. Never a pair on آپ.
- **تم lines (반말):** neutral first, with the same meaning (کیا ہو رہا ہے؟ for 뭐 해?, the imperative, a نے past: تم نے کھانا کھایا؟), then the scene (to 오빠 / 형 → male; to 언니 / 누나 → female), then the pair: پہنچ گئے/گئیں؟. Applies to texting, plans, flirting, sweet talk, hanging out.

**C. Third persons.** 친구 = دوست (generic masculine agreement: دوست آیا) unless the Korean or English marks a woman (سہیلی only then). 선생님 / 사장님 / 할머니 take the respect plural only where the Korean has -시- or 님.

## 3. Glossary, screen names, labels, RTL

### 3.1 Terms (closed list; NOTES §1 and §3 reused, additions marked +)

| Idea | Term |
|---|---|
| Korean · Hangul · romanization (RR line) | **کوریائی · ہنگل · رومن** (never تلفظ for the RR line) |
| Korean particle | **پارٹیکل** (m., invariant). + First use per lesson: "چھوٹا لفظ جو اسم کے بعد آتا ہے، اردو کے حروفِ جار (کو، میں، سے) کی طرح، مگر اسم سے جڑ کر لکھا جاتا ہے" |
| Urdu کو, میں, سے, کا, پر | + **حرفِ جار** (pl. حروفِ جار) |
| 은/는 · 이/가 · 을/를 | + **موضوع کا پارٹیکل · فاعل کا پارٹیکل · مفعول کا پارٹیکل** |
| noun · pronoun · verb · adjective · adverb | **اسم · ضمیر · فعل · صفت · متعلق فعل** |
| 크다, 좋다 | + **صفتی فعل** ("کوریائی میں صفت بھی فعل ہے") |
| dictionary form · stem | **لغت والی شکل** (≈ the -نا form: جانا) · **اسٹیم** |
| -아요, -고, -지만 | + **لاحقہ** (pl. لاحقے) |
| 공부하다 type | **하다 والا فعل** |
| 요-form | **요 والی شکل** |
| -습니다 · 요 · 반말 · -시- | + **رسمی** · **مؤدب** · **بے تکلف** · **تعظیمی**. Together: + **ادب کے درجے** (one = درجہ) |
| 씨, 님, 오빠 | **القاب** (roadmap: القاب اور تعظیمی الفاظ) |
| 개, 명, 잔 | **کاؤنٹر** |
| two number sets | + **خالص کوریائی** · **سائنو-کوریائی** (never چینی گنتی) |
| tenses | **ماضی · حال · مستقبل** |
| word order · question word · irregular · conjugation | **الفاظ کی ترتیب · سوالیہ لفظ · بے قاعدہ · گردان** |
| connector · softener | + جوڑنے والا لفظ · نرمی لانے والا لفظ |
| vowel · consonant · block · syllable · 받침 | **حرفِ علت · حرفِ صحیح · بلاک · ہجا · آخری حرف** ("ایک بلاک = ایک ہجا") |
| ㄱㄷㅂㅅㅈ · ㅋㅌㅍㅊ · ㄲㄸㅃㅆㅉ | + **سادہ · ہوا والے · کسے ہوئے** حروفِ صحیح. First use: "ہوا والے = کھ، تھ، پھ، چھ جیسی دو چشمی ھ والی آوازیں" |
| sound change · 연음 · 비음화 | **آواز کی تبدیلی** · + **ملا کر پڑھنا** · + **ناک والی تبدیلی** (not غنّہ, which suggests ں) |
| pattern · grammar · loanword · stroke order | **پیٹرن · گرامر** · + دخیل لفظ · + لکھنے کی ترتیب |

### 3.2 Screen names (NOTES §3–4, exact)

- **Tabs:** آج · اسباق · مشق · دہرائی · پیش رفت; advanced tab **پڑھنا**; فیڈبیک.
- **Buttons:** یاد ہے · دوبارہ · چیک · 📖 براؤز · میرے جملے · ⏰ سب باقی.
- **Lesson** = سبق (pl. اسباق). Cross-references: **سبق N، "title"** (e.g. سبق 32، "ادب سے مانگنا").
- **Naming the Read tab and drills is allowed**, because w4 fills `wT.jsonl`: `sound-changes` keeps its last tip ("پڑھنا کھولیں اور آواز کی تبدیلی کی ڈرل کریں"); `hangul` keeps "Tap a letter to replay" as **کسی حرف پر ٹیپ کریں، وہ دوبارہ لکھا جائے گا**. If `wT.jsonl` is not completed, the lead drops the sound-changes line.

### 3.3 Labels (permanent progress keys: final once written)

**Deck labels (56, `decks.jsonl` order).** All start with an Urdu letter, none ends in ۔, none is میرے جملے, all unique.

| # | id | label | # | id | label |
|---|---|---|---|---|---|
| 1 | hangul-vowels | ہنگل کے حروفِ علت | 29 | flirting | فلرٹ |
| 2 | hangul-consonants | ہنگل کے حروفِ صحیح | 30 | casual-texting | دوستوں سے چیٹ |
| 3 | hangul-advanced | ہنگل: اگلا مرحلہ | 31 | hype-cool | جوش اور واہ واہ |
| 4 | pronunciation-tips | تلفظ کے نکات | 32 | hanging-out | دوستوں کے ساتھ |
| 5 | survival-phrases | ضروری جملے | 33 | k-pop-fan-culture | کے-پاپ اور فین کلچر |
| 6 | introductions | تعارف | 34 | social-media-slang | سوشل میڈیا اور سلینگ |
| 7 | survival-phrases-2 | ضروری جملے 2 | 35 | dating-deeper | ڈیٹنگ: اگلا قدم |
| 8 | asking-around | پوچھ گچھ | 36 | work-office | کام اور دفتر |
| 9 | cafe-convenience-store | کیفے اور جنرل اسٹور | 37 | small-talk | گپ شپ |
| 10 | numbers-in-the-wild | روزمرہ میں نمبر | 38 | food-ordering | کھانا اور آرڈر |
| 11 | counters | کاؤنٹر | 39 | directions-transport | راستہ اور سواری |
| 12 | weather-feelings | موسم اور احساسات | 40 | time-days | وقت اور دن |
| 13 | connectors | جوڑنے والے الفاظ | 41 | family-people | خاندان اور لوگ |
| 14 | doctor-pharmacy | ڈاکٹر اور فارمیسی | 42 | adjectives | صفات |
| 15 | housing-errands | گھر اور روز کے کام | 43 | k-drama-phrases | کے-ڈرامے کے ڈائیلاگ |
| 16 | honorifics | تعظیمی شکلیں | 44 | top-nouns | عام اسم |
| 17 | places-buildings | جگہیں اور عمارتیں | 45 | top-verbs | عام افعال |
| 18 | hobbies | مشغلے | 46 | top-adjectives | عام صفات |
| 19 | food-words | کھانوں کے نام | 47 | top-adverbs | عام متعلق فعل |
| 20 | drinks | مشروبات | 48 | top-pronouns | عام ضمیریں |
| 21 | activities | روزمرہ سرگرمیاں | 49 | top-particles | مزید پارٹیکل |
| 22 | tv-entertainment | ٹی وی اور تفریح | 50 | top-connectors | مزید جوڑنے والے الفاظ |
| 23 | position-direction-words | جگہ اور سمت | 51 | top-interjections | عام فجائیہ الفاظ |
| 24 | core-verbs | اہم افعال | 52 | top-words | عام چھوٹے الفاظ |
| 25 | particles | پارٹیکل | 53 | top-counters | مزید کاؤنٹر |
| 26 | numbers | گنتی | 54 | flirting-words | فلرٹ کے الفاظ |
| 27 | sweet-talk | میٹھی باتیں | 55 | compliments | تعریفیں |
| 28 | cute-things-to-say | پیاری باتیں | 56 | countries | ممالک |

The ten "Top" decks use **عام** ("common"), or **مزید** where the English description says "beyond / missing from the … deck".

**Groups (6):** foundations **بنیاد** · everyday **روزمرہ** (interface) · vocabulary **ذخیرۂ الفاظ** · grammar **گرامر** (interface) · social **سماجی** (interface) · core-words **عام ترین الفاظ**.

**`labels.jsonl` rows the interface already fixes (reuse exactly):**
- Level titles: t01 کونپل · t03 طالب علم · t05 سینئر · t08 پرو · t12 استاد · t16 سینسی.
- Greetings: night دیر ہو گئی، شاباش · morning صبح بخیر · afternoon سہ پہر بخیر · evening شام بخیر.
- Goals and plans: سفر اور گھومنا پھرنا · ڈیٹنگ، دوست اور باہر گھومنا · کے-ڈرامے اور موسیقی · کام اور پڑھائی · کوریا کا سفر · دوست اور ڈیٹنگ · 90 دن میں بات چیت.

**Labels this profile fixes:** pause sets compliment **تعریف** · expression **روزمرہ کے جملے** · polite **ادب کے بنیادی الفاظ** · saying **اقوال**; `ko.d.mydeck` **جو کچھ آپ نے خود شامل کیا**. Pause items follow §7; within one set no two glosses may be equal (tl / zh reviews fixed duplicates there). Idioms may use a real Urdu proverb only if the meaning truly matches (e.g. ko.i02 ایک تیر سے دو شکار); otherwise a plain gloss.

### 3.4 Lesson titles (stored "N · title"; each keeps exactly the English title's Hangul)

Where `tools/i18n/ur/roadmap.json` words a matching title, its Urdu is reused, **not its Hangul** (the roadmap adds 이에요/예요, -(스)ㅂ니다, 보다 더 and reorders the joining endings).

1 · ہنگل ایک نشست میں
2 · ادب کے درجے
3 · لوگوں سے ملنا
4 · آواز کی تبدیلیاں: 감사합니다 مختلف کیوں سنائی دیتا ہے
5 · اسم اور 은/는
6 · 있어요 اور 없어요
7 · ضمیر اور سوالیہ الفاظ
8 · افعال
9 · حال: 요 والی شکل
10 · ماضی: 았어요 / 었어요
11 · مستقبل اور ارادے: -(으)ㄹ 거예요
12 · الفاظ کی ترتیب اور 을/를
13 · 에 اور 에서، اور پارٹیکل کا نقشہ
14 · انکار: 안 اور -지 않아요
15 · 도 اور 만: بھی اور صرف
16 · اسم اور فعل ملا کر جملے
17 · چاہنا اور پسند کرنا: -고 싶어요، 좋아해요
18 · گنتی کے دو نظام
19 · باہر کھانا
20 · آنا جانا
21 · القاب اور تعظیمی الفاظ
22 · پروگرام بنانا
23 · کوریائی انداز میں میسج
24 · کاؤنٹر
25 · جملے جوڑنا: -고، -지만، -아/어서
26 · ماضی کی کہانی سنانا
27 · اسم کی صفت بیان کرنا: 좋은 날씨، 큰 가방
28 · موازنہ: 보다، 더، 제일
29 · نہ کر پانا، کر سکنا اور نہ جاننا
30 · کرنا پڑنا: -아/어야 해요
31 · تعظیمی افعال
32 · ادب سے مانگنا
33 · دفتر کی کوریائی

### 3.5 Right to left with Hangul and Latin inside (rules for every field)

The interface runs `<html dir=rtl lang=ur>`. Hangul, RR and digits are left-to-right islands inside right-to-left Urdu. The Unicode bidi algorithm lays them out; the writer's job is to type so that it lays them out right. **No automated check catches a bidi mistake in ur-ko** (§10), so these rules are the safeguard.

1. **Type in reading order. Always.** The first thing a reader should read comes first in the string. Never reorder text so it "looks right" in a left-to-right code editor; JSONL in an editor will look scrambled, and that is expected. Judge layout only in the app or a `dir=rtl` HTML preview.
2. **No bidi control characters** (RLM, LRM, isolates, embeddings), no ZWNJ / ZWJ, no tatweel. The engine isolates its own slots; text must not depend on invisible characters.
3. **Start every field with an Urdu letter where possible.** Chips, options, quiz prompts and table cells use `unicode-bidi: plaintext`, so the first strong letter sets the whole field's direction (NOTES §1). A field that starts with Hangul or Latin turns left-to-right and its Urdu punctuation lands on the wrong side. Write **حرف ㅏ: …**, not **ㅏ: …**; **مثال: 의사 …**, not **의사 …**. Exception: a field that is the English row's pure Korean or symbols (no Latin words) stays as it is.
4. **Where Hangul sits in a gloss or note:** Korean first, then its RR, then the Urdu meaning in brackets: `의사 ui-sa (ڈاکٹر)`. Hangul + RR form one left-to-right island and read naturally; the brackets mirror automatically. Never put the Urdu meaning between the Hangul and its RR.
5. **"X = Y".** Write it in reading order: `안녕하세요 = السلام علیکم` shows the Korean on the right, then `=`, then the Urdu: read right to left it says "안녕하세요 is السلام علیکم". `ㅏ = آ`, `بھی = 도` work the same way. A formula made only of Hangul, Latin, digits and `+ = →` (`ㄱ + ㅏ + ㅇ = 강`, `가 = ga`) is one left-to-right island: keep it exactly as in English.
6. **Arrows.**
   - Between two Korean or Latin items (`한국말 → 한궁말`, `ㄴ→ㄷ→ㅌ`, `하나→한`): **keep →**. The island renders left to right, so → points the right way.
   - Between Urdu items, or Urdu and Korean (a step in a flow): **←, in logical order**, so it points along the reading direction, as NOTES does (پڑھنا 한 ← اردو, پیش رفت ← بیک اپ).
   - Never "back" arrows in course text.
7. **Punctuation after a Korean run belongs to the Urdu sentence.** End with ۔ / ، / ؟ (۔ and ؟ are strong right-to-left letters and always land correctly). **Drop a Korean phrase's own `?` or `!` inside Urdu prose** (it would show at the island's left, i.e. before the Korean): write `뭐 해 (کیا ہو رہا ہے؟)`. Keep it only where RR follows it (`뭐 해? mwo hae`), because then it sits inside the island. The validator does not count `?` / `!`, only Hangul runs.
8. **Digits.** Western digits after Urdu are fine (`3,000 وون`, `2:30`, `80%`). **No digit ranges with a dash** (`1–10` displays as "10–1"): write `1 سے 10 تک`. Signs before numbers follow NOTES (`+25` → `انعام: 25`).
9. **Tables.** In RTL the first column is on the right. Keep the English column order and structure; only translate. Korean cells (`<td class="k">`) are isolated left to right by the app's CSS. A cell mixing Urdu and Korean starts with Urdu (rule 3).
10. **Dialogue glosses** `line A / line B`: line A appears on the right. Fine as written.
11. **`@@`** is neutral; the inserted name may be Latin or Hangul. Urdu postpositions are separate words, so `@@ کو`, `@@ نے`, `@@ صاحب` work with any name. Avoid gendered words agreeing with `@@` (آپ کا مخلص ✗). Email sign-off: **شکریہ۔ @@**.
12. **RR in bodies:** `<i>gamsahamnida</i>`; in plain fields bare. An RR word directly before Urdu punctuation is fine.

## 4. Grammar bridges and traps

The Urdu grammar below is school-grammar knowledge [convention, not opened], shared with Hindi (hi-ko §4). The Hangul in §4, §6, §8 is for the writers' understanding: a field may contain it only if its English row has the same Hangul runs, or under `_waive`.

### 4.1 SOV and the حروفِ جار map

- **What holds.** Same order, including the long frame کون · کب · کس کے ساتھ · کہاں · کیا · فعل. Question words stay in place: یہ کیا ہے؟ = 이거 뭐예요? Negation sits right before the verb.
- **What breaks.**
  1. **Spacing.** Urdu writes حروفِ جار apart (گھر میں); Korean glues particles on (집에). Expect 집 에 ✗.
  2. **کیا.** It opens an Urdu yes/no question; Korean only changes the voice. کیا is also 뭐.
  3. **"You".** Korean drops it; Urdu says آپ constantly.
  4. **Oblique.** Urdu bends the noun before a postposition (لڑکا → لڑکے کو); Korean never touches the noun, but the particle has two shapes after a consonant or vowel (집을 / 차를).

| Urdu | Example | Korean | Note |
|---|---|---|---|
| — / نے (subject) | میں گیا · میں نے کھایا | 이/가, topic 은/는 | نے depends on tense and verb; 이/가 never does |
| کو (object) | علی کو دیکھا | 을/를 (every object) | چائے پیتا ہوں has no کو, but 차를 마셔요 |
| کو (to a person) | دوست کو دیا | 에게 / 한테 | |
| میں / پر (place) | گھر میں ہوں · گھر میں آرام | 에 (be, go, time) · 에서 (do) | one میں, two Korean particles: the core trap of سبق 13 |
| کو / — (time) | پیر کو · تین بجے | 에 | 월요일에 · 세 시에 |
| سے (from a place / time) | لاہور سے آیا · پیر سے | 에서 · 부터 | 라호르에서 needs `_waive`; prose only |
| تک | جمعہ تک | 까지 | exact |
| سے (by means) | بس سے | (으)로 | 버스로 |
| کے ساتھ | دوست کے ساتھ | 하고 / 랑 | |
| سے (comparison) | ٹیکسی سے سستی | 보다 | same slot (§4.7) |
| کا / کی / کے | میرا بھائی، میری بہن | 의, mostly dropped (제 집) | no agreement in Korean |

Urdu often drops the postposition with جانا (گھر جاتا ہوں); Korean wants 에 (집에 가요), though casual 집 가요 exists, so this error costs little.

### 4.2 بھی, ہی, صرف, تو

- **بھی ↔ 도.** Holds: بھی + نہیں = "either" (میں بھی نہیں = 저도 안). Breaks: 도 **replaces** 은/는, 이/가, 을/를 (저는도 ✗); it stacks only after 에 / 에서, as بھی stacks after میں (گھر میں بھی = 집에도).
- **صرف / ہی ↔ 만.** صرف پانی دے دیں = 물만 주세요. ہی is mostly emphasis, so teach 만 = صرف.
- **تو ↔ 은/는** only for contrast (کافی تو نہیں پیتا ≈ 커피는 안 마셔요). 은/는 appears in almost every sentence: never write "은/는 = تو". Teach it as "جہاں تک … کی بات ہے".

### 4.3 ہے has three jobs; Korean splits them

| Urdu | Korean | Job |
|---|---|---|
| میں طالب علم ہوں | 학생이에요 | A = B |
| میں سکول میں ہوں | 학교에 있어요 | location |
| میرے پاس وقت ہے · میرا ایک بھائی ہے | 시간이 있어요 · 형이 있어요 | having (the thing is the subject in both) |
| یہاں ایک سکول ہے | 여기에 학교가 있어요 | existing |
| وقت نہیں ہے · ڈاکٹر نہیں ہوں | 시간이 없어요 · 의사가 아니에요 | one نہیں, two Korean words |

Predicted errors [inference]: 고양이예요 for "I have a cat" (isseoyo.12 rejects it); 안 있어요 ✗.

### 4.4 Verbs, tense, negation

- **Dictionary form.** -다 ≈ -نا (먹다 ≈ کھانا); اسٹیم 먹 ≈ the root کھا.
- **No agreement.** Korean verbs never change for person, gender or number. Say it early, as relief.
- **Describing verbs.** اچھا ہے is one Korean word, 좋아요 (좋아이에요 ✗).
- **하다 verbs ≈ کرنا.** پڑھائی کرنا = 공부하다, and the split is the same: پڑھائی نہیں کرتا = 공부 안 해요.
- **Present.** 가요 = جاتا ہوں + جا رہا ہوں + a question by tone.
- **Past.** کھایا, کھا لیا, کھا چکا = 먹었어요, with no نے and no gender. Urdu's نے has no Korean echo.
- **Future.** جاؤں گا ≈ 갈 거예요; the presumptive (مہنگا ہوگا) ≈ the "probably" use (비쌀 거예요).
- **Negation.** نہیں before the verb = 안 before the verb (کافی نہیں پیتا = 커피 안 마셔요): a direct match. مت / نہ ≈ -지 마세요. -지 않아요 is the longer written-flavoured form.
- **Can / can't.** مجھے … آتا ہے ≈ -(으)ㄹ 수 있어요; نہیں کر سکتا (ability, circumstance) ≈ 못; نہیں کروں گا (choice) ≈ 안; مجھے نہیں پتا = 몰라요.

### 4.5 مجھے پسند ہے vs 좋아해요

In مجھے کافی پسند ہے the thing liked is the subject: exactly **커피가 좋아요**. 좋아해요 takes 을/를. Predicted error: 커피가 좋아해요 ✗ [inference; the same is predicted for Hindi, Marathi and Filipino]. Teach the triangle: "مجھے X پسند ہے" = X가 좋아요 = X를 좋아해요.

### 4.6 Politeness, address, kinship

- **What holds** [inference]. آپ / تم follows age and closeness, like 요 / 반말. Moving to تم takes consent, like 말 놔도 돼요 ("مجھ سے 'تم' کہہ کر بات کریں").
- **What breaks** (teach these four):
  1. Urdu marks respect on the pronoun, plural agreement, the -یے imperative, جی and صاحب. Korean marks it **only on the verb ending** and drops "you": 당신 ≠ آپ. Use name + 씨, a title, or nothing.
  2. تم to a young waiter or driver is common in Pakistan; in Korea every adult stranger gets 요. Predicted error: 반말 to staff.
  3. -습니다 marks the situation, not the person (شکریہ vs تھینکس).
  4. Korean has a humble "I" (저 vs 나); Urdu has none.
- **-시- = the respect plural.** ابو گھر پر ہیں ≈ 계세요; دادی سو رہی ہیں ≈ 주무세요. Urdu even has the special words: **اسمِ گرامی ≈ 성함, فرمانا ≈ 말씀하시다, عرض کرنا ≈ 말씀드리다, تشریف رکھنا ≈ 앉으시다**. Breaks: Urdu uses one plural for the listener and for a third person; Korean splits them into 요 and -시-. Never -시- for yourself (저는 가세요 ✗), just as nobody says "میں تشریف لایا".
- **Address terms.**
  - **بھائی / باجی (آپی) ≈ 형·오빠 / 누나·언니**, but the Korean choice depends on the **speaker's** gender: a man says 형 / 누나, a woman 오빠 / 언니. Urdu بھائی / باجی do not change with the speaker.
  - **صاحب / صاحبہ ≈ 님** with a role: 과장님 ≈ مینیجر صاحب, 선생님 ≈ سر / میڈم or استاد صاحب, 기사님 ≈ ڈرائیور صاحب.
  - **씨** has no Urdu twin: it is lighter than صاحب, used between colleagues and new acquaintances. Gloss 민수 씨 with the bare name (منسو); explain in سبق 21. Neither 씨 nor 님 goes on your own name, as nobody puts جی or صاحب after their own name.
  - Pakistanis call strangers بھائی صاحب / باجی / انکل / آنٹی; Koreans say 저기요 or a role (기사님, 사장님). Korean also uses kin words this way (이모 for a restaurant auntie, 아저씨), a familiar idea.
- **Kinship.** Urdu splits paternal and maternal kin (دادا / نانا, چچا / ماموں, پھوپھی / خالہ); Korean does too (외- for the mother's side; 고모 / 이모). Urdu splits older and younger siblings by adjective (بڑا بھائی); Korean splits them by word and by the speaker's gender (형 / 오빠 vs 동생). Use these bridges only where the row's Hangul allows.

### 4.7 Comparing, modifiers, joining, numbers, counters

- **Comparing.** بس ٹیکسی سے سستی ہے = 버스가 택시보다 싸요: the same order. زیادہ ≈ 더, سب سے ≈ 제일.
- **Modifiers.** Urdu participles already sit before the noun: کل آنے والا دوست ≈ 내일 올 친구, کل دیکھی ہوئی فلم ≈ 어제 본 영화. Breaks: Urdu participles agree (دیکھا ہوا / دیکھی ہوئی); Korean ones never do. The correlative جو … وہ has no Korean form: everything goes before the noun.
- **Joining.** -کر ≈ -고 / -아/어서 for a sequence (گھر جا کر سو گیا ≈ 집에 가서 잤어요); neither takes a tense. Reason + **اس لیے** has the Korean order (مصروف ہوں، اس لیے نہیں آؤں گا ≈ 바빠서 안 가요); کیونکہ puts the reason second, which -아/어서 cannot do. لیکن / مگر = -지만. Story words: پہلے (먼저), اور (그리고), پھر / اس کے بعد (그다음에), اس لیے (그래서), لیکن (그런데), آخر میں (마지막으로).
- **Numbers.**
  - Urdu 1–100 must be memorised; Sino-Korean is ten words plus a rule: good news.
  - Pakistan groups in لاکھ / کروڑ: 10만 = ایک لاکھ, 1000만 = ایک کروڑ.
  - **Hours take native numbers** (تین بجے = 세 시); **minutes, money, dates, floors, phone numbers take Sino-Korean**. Fix any blurb that says Sino-Korean is for "time" (zh review).
  - ساڑھے تین = 세 시 반. سوا / پونے have no Korean word: use 분 (3시 15분).
  - Age: native number + 살. 살 sounds like Urdu سال ("year"): **a labelled coincidence, never an etymology**.
- **Counters.** Urdu has a small echo: **عدد** in lists and bills (پانچ عدد کرسیاں) and **دانے** in market speech (چھ دانے انڈے) ≈ 개; **افراد** ≈ 명 [convention, not opened]. Breaks: Urdu puts the number first (دو کپ چائے); Korean puts the noun first, then number + counter (차 두 잔). Expect 두 커피 ✗.

## 5. Error zones, ranked [inference unless tagged]

1. **Stops.** Plain ㄱ ㄷ ㅂ ㅈ said as ک ت پ چ (heard as ㄲ ㄸ ㅃ ㅉ); RR *k t p ch* read the Roman-Urdu / Pakistani-English way, unaspirated, which also comes out tense. Hindi listener studies (hi-ko §5) are evidence for the same stop system; carry them over as inference only.
2. **Retroflex t / d.** Pakistani English makes English t / d retroflex [convention], so RR *t d* may come out as ٹ ڈ. Korean ㄷ ㅌ ㄸ are never retroflex.
3. **ㅍ as ف.** Urdu ف is [f], and loans like کافی have f where Korean has ㅍ (커피). Also ㅈ as ز in loans (피자).
4. **Final nasals before a consonant [source].** In a study of 10 Pakistani students' speaking-exam recordings (Aman Ullah, Sangmyung University), final ㄴ ㅁ ㅇ were mostly right in one-syllable words and word-finally, but errors were high when the nasal came first in a two-syllable word before a consonant (친구, 담배, 종교); the author traces this to the Urdu ن, which takes the place of the next consonant (as in انگور, انبار). Teach: in 친구 the tongue tip stays up for ㄴ.
5. **Nasal vowels.** Final ㄴ / ㅇ said as a nasal vowel (ں): 강 ≠ "گاں".
6. **RR vowels.** *a* read as زبر (short), because Roman Urdu writes زبر as *a* and آ as *aa*; *eo* read as "یو" / "او" (the press spelling سیول teaches it); *eu* as "یو"; *ae* as "اے" with two vowels.
7. **Particles.** کو-thinking for 을/를; میں → 에 vs 에서; 커피가 좋아해요 ✗; spaces before particles.
8. **ہے.** 고양이예요 for "I have a cat"; 좋아이에요 ✗; 안 있어요 ✗.
9. **Politeness.** 당신; 반말 to staff; -시- for yourself.
10. **Lesson-local.** 그 vs 저 (وہ covers both); 들 everywhere; counter order; 이에요 / 예요; final ㄹ said as ر or as ڑ; final stops released.

## 6. Reading guide

Voicing is never contrastive in Korean: there is no ک / گ pair, only plain / tense / aspirated.

**Policy: Urdu script compares, it never reads.** Three Urdu facts force this:
1. **Short vowels are unwritten**: a bare Urdu spelling of a Korean word (سیول, گنگنم) cannot show its vowels.
2. و is o, u, au or v; ی is i, e, ai or y; so a single letter is ambiguous.
3. There is no letter for ㅡ, and none of its own for ㅓ.

**Decision (short vowels).**
- Compare **one sound at a time**, through an **anchor word** from the closed list below that every Pakistani reader pronounces the same way: "ㅜ جیسے دودھ کا و".
- Where a short vowel matters, **name the mark in words** (زبر، زیر، پیش) and write it on **at most one letter**: اَ, اِ, اُ. A one-syllable comparison may carry one jazm: 옷 ≈ "اوتْ".
- Marks only in the `hangul` and `sound-changes` bodies, the three Hangul deck descriptions, and the notes of ko.c0001–c0060. Nastaliq draws marks small; never rely on one alone, always add the anchor or the mouth description.
- Never a whole-word Urdu respelling as a reading. Name and loan spellings in glosses (منسو, کمچی, سیول) are labels, not readings (§9.3).
- Never compare with English sounds ("as in father"); the anchor is always Urdu.

**Anchor words (closed list):** آم · اَب · دو · دودھ · تیر · کے · واہ · کھانا · کام · گانا · تھوڑا · تم · دن · پھول · پانی · بات · چھوٹا · چائے · جان · سال · ہاں · دل · بِلّی · رنگ.

### 6.1 Sound table (card notes ko.c0001–c0060, the `hangul` table, deck descriptions)

| Jamo (RR) | Comparison for an Urdu speaker | Trap |
|---|---|---|
| ㅏ a | آ as in آم (not long) | not زبر |
| ㅓ eo | the زبر of اَب, but the jaw lower and the tongue further back; lips **not** rounded (Seoul [ʌ̹] [source: Wikipedia]) | not او, not "یو" |
| ㅗ · ㅜ · ㅣ | و of دو (lips rounded, tight) · و of دودھ · ی of تیر; length does not matter | |
| ㅡ eu | پیش (اُ) with the lips spread, as in a smile | no Urdu letter |
| ㅐ = ㅔ | ے of کے | not "اَے", two vowels |
| ㅑ ㅛ ㅠ · ㅘ · ㅟ | یا یو یُو · وا of واہ · وی | |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | ی + ㅓ · و + ㅓ · about وے · ㅡ + ی | *yeo* ≠ یو; *wo* ≠ وو |
| ㄱ ㄷ ㅂ ㅈ | soft گ (گانا) · د (دن) · ب (بات) · ج (جان), never with ھ | never ک ت پ چ, never گھ |
| ㅋ ㅌ ㅍ ㅊ | کھ (کھانا) · تھ (تھوڑا) · پھ (پھول) · چھ (چھوٹا): strong air | ㅍ ≠ ف; ㅌ ≠ ٹھ |
| ㄲ ㄸ ㅃ ㅉ | ک (کام) · ت (تم) · پ (پانی) · چ (چائے): no air, tight throat, higher pitch | not doubled (no تشدید) |
| ㄷ ㅌ ㄸ | the ت / د family, **never** ٹ / ڈ | Korean has no retroflex |
| ㅅ / ㅆ | س of سال / a tight س; before ㅣ about ش | |
| ㅎ | ہ of ہاں, often silent between vowels | not ح, not خ |
| ㄹ | a light ر (one tap) between vowels; at the end ل of دل; ㄹㄹ = the لّ of بِلّی | final ㄹ is not ر, never ڑ |
| final ㅇ | the ن of رنگ, without the گ | 강 ≠ "گاں", ≠ "گانگ" |
| ㄴ ㅁ | ن م; a final ㄴ is a full ن (tongue tip up), never ں, also before ㄱ / ㅂ (친구) | §5 item 4 |
| finals | ک، ت، پ held, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → ت (옷 ≈ "اوتْ") | not "اوس" |

**Script bridge [inference].** Hangul draws mouth shapes; Urdu readers already know that ھ turns ک into کھ, the same "add a stroke, add air" idea as ㄱ → ㅋ. One **بلاک** = one **ہجا**. Breaks: Hangul writes every vowel as a full letter (no unwritten زبر); it runs left to right; ㅇ at the start is silent; the final consonant sits inside the block; reading block by block kills linking (سبق 4).

### 6.2 Romanization letters this reader will misread

Pakistanis read Roman Urdu daily (*aa* = آ, *ee* = ی, *oo* = و, *kh* = خ, *gh* = غ, *ph* = پھ or ف, *th* = تھ or ٹھ) [convention, not opened]. RR is not Roman Urdu: *a* = آ, *k t p ch* are airy, *kk tt pp jj* are tight, *eo* / *eu* are single vowels, and *kh* / *gh* / *ph* / *th* never occur in RR.

### 6.3 Ready-to-paste guide for lesson 1 (`hangul`, which needs `_waive`; parts also go into `sound-changes` and the three Hangul deck descriptions)

> **رومن کیسے پڑھیں** — یہ رومن انگریزی پڑھنے والوں کے لیے بنی ہے، رومن اردو کے لیے نہیں۔ اس لیے:
> - **a** ہمیشہ کھلا "آ" ہے، جیسے آم میں؛ زبر نہیں۔ زبر کے قریب آواز **eo** ہے: منہ "اَب" سے ذرا زیادہ کھلا، ہونٹ گول نہیں۔ *seoul* میں "یو" نہیں ہے۔
> - **eu**: "اُ" کہیں، مگر ہونٹ مسکراہٹ کی طرح پھیلا کر؛ اردو میں اس کا کوئی حرف نہیں۔ **ae** اور **e** دونوں "کے" والی ے ہیں۔ **o** = "دو" والا و، **u** = "دودھ" والا و۔
> - **k, t, p, ch** = کھ، تھ، پھ، چھ: منہ کے آگے ہتھیلی رکھیں تو ہوا لگے۔ **p** میں ہونٹ بند ہوتے ہیں؛ یہ "ف" نہیں۔ **kk, tt, pp, jj** = ک، ت، پ، چ: ہوا نہیں، گلا کسا ہوا، مگر تشدید کی طرح لمبا نہیں۔
> - **g, d, b, j** شروع میں ہلکے گ، د، ب، ج۔ **t, d** دانتوں والے ت اور د ہیں، ٹ اور ڈ نہیں۔
> - **r** دو حروفِ علت کے بیچ ہلکا سا ر؛ آخر میں **l** صاف ل: *mul*۔ **ng** = "رنگ" والا ن، بغیر گ کے۔ آخر کا **n** پورا ن ہے، "ں" نہیں۔
> - آخر میں **k, t, p**: منہ بند کر کے رک جائیں، ہوا نہ چھوڑیں: *bap*۔ آخری حرف اگلے حرفِ علت سے مل کر پڑھا جاتا ہے: *hangugeo*۔
> - رومن سہارا ہے، اصل ہنگل ہے: 감사합니다 = *gamsahamnida*۔

(In the HTML body, `*…*` becomes `<i>…</i>` and the list a `<ul>`, inside the English body's existing structure.)

## 7. Fixed phrases (one gloss everywhere, across all writers)

A card meaning may be shorter; a bracketed tag says who the line is for; a card note may add the literal meaning.

| Korean | Urdu | Korean | Urdu |
|---|---|---|---|
| 안녕하세요 | السلام علیکم | 안녕 (반말) | ہائے / بائے (by context) |
| 안녕히 가세요 | اللہ حافظ (جانے والے سے) | 안녕히 계세요 | اللہ حافظ (رکنے والے سے) |
| 감사합니다 / 고맙습니다 | شکریہ | 고마워요 · 고마워 | شکریہ (مؤدب) · تھینکس |
| 죄송합니다 | معاف کیجیے | 미안해요 · 미안해 | معاف کریں · سوری |
| 네 · 아니요 | جی · جی نہیں | 응 · 아니 | ہاں · نہیں |
| 괜찮아요 | کوئی بات نہیں / ٹھیک ہے; declining: نہیں، شکریہ | 저기요 | سنیے |
| 잠깐만요 | ایک منٹ | 처음 뵙겠습니다 | پہلی ملاقات ہے |
| 만나서 반갑습니다 / 반가워요 | آپ سے مل کر خوشی ہوئی | 반가워 | تم سے مل کر خوشی ہوئی |
| 잘 부탁드립니다 (meeting) | امید ہے آپ کا ساتھ اچھا رہے گا | 잘 부탁드립니다 (work, email) | آپ کے تعاون کا پیشگی شکریہ |
| 잘 먹겠습니다 | کھانے کا شکریہ (کھانے سے پہلے) | 잘 먹었습니다 | بہت مزیدار تھا، شکریہ (کھانے کے بعد) |
| 맛있게 드세요 | مزے سے کھائیے | 계산해 주세요 | بل دے دیں |
| 수고하셨습니다 | آج کی محنت کا شکریہ | 수고 많으셨어요 | آپ نے بہت محنت کی، شکریہ |
| 수고하세요 | آپ کا کام اچھا چلے (کام کرتے رہنے والے سے) | 수고했어 / 수고했어요 | تم نے اچھا کام کیا / آپ نے اچھا کام کیا |
| 고생했어 | تم نے بڑی مشقت اٹھائی | 좋은 하루 보내세요 | آپ کا دن اچھا گزرے |
| 주세요 · -아/어 주세요 | دے دیں · … دیں | 주시겠어요? | … دیجیے گا؟ |
| 좀 | ذرا | 혹시 | … ہوگا؟ (کیا انگریزی مینیو ہوگا؟) |
| 알겠습니다 / 알겠어요 | جی، سمجھ آ گئی | 넵, 확인했습니다 | جی، دیکھ لیا |
| 콜 · 오케이 콜 | ڈن! · اوکے، ڈن! | 대박 | زبردست! |
| 진짜? | سچ میں؟ | 아이고 | ہائے! |
| 화이팅 | ہمت کرو! | 축하해요 · 생일 축하해요 | مبارک ہو · سالگرہ مبارک |
| 잘 자 · 안녕히 주무세요 | شب بخیر · شب بخیر (بزرگوں سے) | 집에 잘 들어가세요 | خیریت سے گھر پہنچیں |
| 오랜만이에요 | بڑے دنوں بعد ملاقات ہوئی | 말 놔도 돼요 | مجھ سے "تم" کہہ کر بات کریں |
| 선생님 | سر / میڈم (استاد) | 사장님 | مالک; calling out: بھائی صاحب / باجی |
| 과장님 · 팀장님 | مینیجر صاحب · ٹیم لیڈ صاحب | 오빠·형 / 언니·누나 | بھائی / باجی (§4.6) |
| 기사님 | ڈرائیور صاحب | 씨 (민수 씨) | the bare name (منسو), explained in سبق 21 |
| 화장실 | واش روم | 학교 | سکول |

Notes:
- **The two goodbyes always say who leaves.** Urdu has one اللہ حافظ for both, so the bracket is mandatory, and cards add the literal meaning ("سکون سے جائیں / سکون سے رہیں"). En-ur accepts خدا حافظ too; this course glosses with اللہ حافظ only, for consistency (§12).
- **Greetings are secular in Korean.** السلام علیکم is used because it is what Pakistanis say for "hello" at any hour (the interface uses it); no note on religion.
- **잘 먹겠습니다** before eating, **잘 먹었습니다** after; never one gloss for both. `food` may say the moment is the one where many Pakistanis say بسم اللہ, but the Korean phrase thanks the host or the cook [inference].
- **수고하세요** is said by the one **leaving**, to someone still working; never a stayer's goodbye.
- **화이팅** is level-neutral, but ہمت کرو is تم; in a 요 / 습니다 line write **ہمت کریں!**.
- **사장님, 계산해 주세요** → بھائی صاحب، بل دے دیں.
- **Alcohol words** (소주, 맥주, 회식 drinking) are glossed plainly (سوجو، کوریائی شراب); never skipped.

## 8. Per-lesson notes

**B** = what to build on. **R** = an English-built passage to rewrite, not translate. All [inference] unless tagged.

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: بلاک = ہجا; ھ makes air as an extra stroke does; §6.3 guide. R: the vowel-table sounds ("uh", "oo", "ee", "bed") → §6.1 anchors; "Tap a letter to replay" (§3.2). `_waive` on the title row |
| 2 | `polite` | B: آپ / تم ≈ 요 / 반말; تو does not exist in Korean; شکریہ / تھینکس. Paragraph: in this course -یے forms mark -시- or respect to a superior, -یں marks plain 요, so 요 ≠ -یے. Headers: درجہ · لاحقہ · کس سے؛ Say-it-3-ways: رسمی · مؤدب · بے تکلف |
| 3 | `meet` | B: السلام علیکم at any hour; age sets address in both cultures; Urdu has one اللہ حافظ, Korean two. Column header "Formal" → **رسمی / تعظیمی** (it holds 성함이 어떻게 되세요?). Keep مائیک / خوان. Country tip: may add **파키스탄에서** to the list under `_waive` (the only planned addition) |
| 4 | `sound-changes` | B: Urdu already assimilates ن to the next sound (انگور, انبار), so "sounds change their neighbours" is familiar; but Korean changes stops into nasals (한국말 → 한궁말), and keeps ㄴ before ㄱ / ㅂ (§5 item 4). ㄹㄹ = بِلّی. Keep the drill line (§3.2) |
| 5 | `nouns` | B: no articles in either; no gender (Urdu's two genders vanish); the noun never takes an oblique form. Trap: یہ / وہ two-way vs 이 / 그 / 저; 들 optional |
| 6 | `isseoyo` | R: the "English 'is'" opening → ہے's three jobs (§4.3); میرے پاس / میرا ایک بھائی |
| 7 | `pronouns-questions` | B: question words in place; کیا has two jobs; ہمارا گھر / ہماری امی ≈ 우리 집 / 우리 엄마; آپ ≠ 당신 |
| 8 | `verbbasics` | B: -نا ≈ -다, root, no agreement, صفتی فعل with no ہے, کرنا ≈ 하다. R: the "to …" framing |
| 9 | `verbs` | B: one form = جاتا ہوں + جا رہا ہوں + question; "I" glosses take the pair |
| 10 | `past` | B: one past, no نے, no gender. R: "I ate / have eaten" → کھایا / کھا لیا / کھا چکا. Intransitive "I" takes the pair (گیا/گئی) |
| 11 | `future` | B: جاؤں گا/گی; the presumptive ہوگا = "probably". R: "kkeoyeyo" → "کسا ہوا ک" |
| 12 | `sov` | B: SOV in both; کو only on people or definite objects vs 을/를 on every object. R: every "English is SVO" line |
| 13 | `particles` | B: گھر میں ہوں = 집에 / گھر میں آرام = 집에서; سے = 에서 "from"; پیر کو / تین بجے = 에. Tip: "اردو میں ایک میں، کوریائی میں 에 (ہونا، جانا، وقت) اور 에서 (کرنا)". R: "English 'at'" |
| 14 | `negation` | B: نہیں before the verb = 안 (direct match); پڑھائی نہیں کرتا = 공부 안 해요; نہیں ہے → 없어요 / 아니에요 |
| 15 | `do-man` | B: §4.2; بھی + نہیں; صرف = 만 |
| 16 | `sentences` | B: same frame as Urdu; Korean drops ہے after describing verbs. R: the "English order" mistakes |
| 17 | `want-like` | B: §4.5; want = دل چاہتا ہے in every prompt |
| 18 | `numbers` | B: §4.7; لاکھ / کروڑ; ساڑھے تین = 세 시 반; 살 / سال coincidence (labelled). R: "like English digits" → "دس الفاظ اور ایک اصول" |
| 19 | `food` | B: دو کپ چائے vs 차 두 잔; مزے سے کھائیے = 맛있게 드세요. **Halal tip** (prose, no added Hangul): many soups and ramen use pork-bone broth, kimchi jjigae is often made with pork, galbi / bulgogi marinades may contain cooking wine; the KMF (Korea Muslim Federation) certifies halal restaurants, most of them near the Seoul Central Mosque in Itaewon [source: seoulstart]. 삼겹살 is glossed honestly as سؤر کا گوشت (c0297) |
| 20 | `getting-around` | B: Lahore Orange Line / Karachi Green Line bus / Islamabad Metro ≈ Seoul subway; T-money ≈ میٹرو کارڈ; numbered exits |
| 21 | `titles` | B: بھائی / باجی with the speaker-gender twist; صاحب / صاحبہ ≈ 님; 씨 lighter than صاحب; never on your own name; بھائی صاحب / آنٹی for strangers vs 저기요. R: "(you female / male)" → "(اگر آپ خاتون ہیں / مرد ہیں)" |
| 22 | `plans` | B: چلو کھاتے ہیں ≈ 먹자; چلیں؟ ≈ -(으)ㄹ까요?; آؤ گے؟ ≈ -(으)ㄹ래요?. Column "Formal" → **زیادہ تعظیمی** (가시겠어요?, 있으세요? are -시- 요-forms, not -습니다) |
| 23 | `texting` | B: ㅋㅋ ≈ ہاہا / LOL in Urdu script; **in KakaoTalk the "1" means NOT yet read**; it disappears when read. 읽씹 = the 1 is gone and no reply ≈ واٹس ایپ پر نیلے ٹک، جواب نہیں. The English `src` has it backwards: write it correctly |
| 24 | `counters` | B: عدد / دانے ≈ 개, افراد ≈ 명 (§4.7); number first in Urdu, after the noun in Korean |
| 25 | `joining` | B: -کر; reason + اس لیے; لیکن = -지만. R: "and / but / so" → اور / لیکن / اس لیے |
| 26 | `story` | B: the story words (§4.7); intransitive "I" past takes the pair |
| 27 | `noun-modifiers` | B: -نے والا / -ا ہوا participles; no جو … وہ. R: "no that / which" → "کوریائی میں 'جو … وہ' نہیں" |
| 28 | `compare` | B: سے = 보다 in the same slot; زیادہ / سب سے |
| 29 | `cant` | B: نہیں کر سکتا ≈ 못, نہیں کروں گا ≈ 안; مجھے نہیں پتا = 몰라요; 모르겠어요 ≈ "سمجھ نہیں آ رہی". cant.14 ("by choice") is a natural place for "میں گوشت نہیں کھاتا/کھاتی" with no religious comment |
| 30 | `have-to` | B: مجھے … ہے / پڑے گا; ضرورت نہیں = 안 가도 돼요. Cross-reference → سبق 32، "ادب سے مانگنا" |
| 31 | `honorific` | B: respect plural = -시-; اسمِ گرامی = 성함; فرمانا = 말씀하시다; تشریف رکھیے ≈ 앉으세요; never for yourself |
| 32 | `requests` | B: ذرا = 좀; … ہوگا؟ = 혹시; دیجیے گا؟ = 주시겠어요?; "یہاں بیٹھ جاؤں تو کوئی مسئلہ تو نہیں؟" ≈ -(으)면 안 돼요?; "تصویر لے لوں؟" ≈ -아/어도 돼요? |
| 33 | `office` | B: a title alone ≈ سر / میڈم; مینیجر صاحب; 회식 ≈ ٹیم ڈنر; the 수고 family (§7); 운전해야 돼요 as the polite excuse for not drinking, and a religious reason is fully acceptable (prose, no added Hangul). Sign-off: شکریہ۔ @@ |

## 9. Row conventions

### 9.1 Format (spec §4–6)

- **Hangul** set-equal to the English row. Exceptions need `"_waive":["hangul"]` + `_note` (lesson bodies: on the title row in `lessons.jsonl`). Planned: `hangul`; `meet` only for 파키스탄에서.
- **Dialogues:** exactly one ` / `. **Blanks** `__` / `___` unchanged. **Glosses:** no `{ }`.
- **"Where are you from?"** (어디에서 왔어요?) = **آپ کہاں سے ہیں؟** (neutral). **"I'm from ___"** = **میں ___ سے ہوں** (neutral: no gender, separate postposition after the blank). 미국에서 왔어요 → میں امریکہ سے ہوں.
- **Lengths:** `q p why hint` ≤ 400 characters; options ≤ 200, never identical within an item. Urdu runs a little longer than English; Nastaliq is tall, so keep labels and options short (§10).
- **Meanings** distinct within each deck (case-insensitive compare), even for near-synonyms (زبردست! vs کمال!).
- **Lesson bodies:** same `<h3>` / div / table structure, tokens unchanged and in order, no English in prose or headers, no `<img> <svg> <script> <style>`, no `javascript:`.

### 9.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) before writing each prompt.
- **Level.** تم for a 반말 answer; آپ for 요 / -습니다 / -시-. Copy the English tags and scene cues: (مؤدب), (رسمی), (بے تکلف), "دوست کو میسج:", "کسی بزرگ سے:", "ٹیم لیڈ سے، کام کے بعد:". A tag is required wherever `x` differs from `a` only in level (polite.12–14, texting.14, honorific.12–14, office.12).
- **Tense.** §2.3 frames. Where `x` is another tense, add **(ماضی) · (حال) · (مستقبل)**: past.12 (hint *past* → ماضی), past.13–14, story.14, future.12–14.
- **Known pitfalls.** verbs.12 / verbbasics.12 "(I) go home" → (میں) گھر جاتا/جاتی ہوں · want-like.12 → گھر جانے کو دل چاہتا ہے · have-to.12–13 (x = 가고 / 공부하고) → مجھے لازمی گھر جانا ہے · cant.13 → آج میرا آنا نہیں ہو سکے گا (못 استعمال کریں) · cant.14 → میں گوشت نہیں کھاتا/کھاتی (اپنی مرضی سے، 안 استعمال کریں) · numbers.12 → میری عمر اٹھائیس سال ہے (عدد ہنگل میں لکھیں) · isseoyo.12 → میرے پاس ایک بلی ہے.
- **Method cues stay:** (안 استعمال کریں), (-(으)ㄹ까요 استعمال کریں), (عدد ہنگل میں لکھیں). "(I)" → "(میں)", then §2.3. Instructions use -یں.

### 9.3 Names, places, localisation

- **People:** 민수 منسو, 지은 جی اون, 리사 لیزا, Mike مائیک, Juan خوان.
- **Places:** کوریا، سیول، بوسان، میونگ دونگ، ہونگدے، گنگنم، انچیون [Pakistani press spellings unverified; سیول is the interface's].
- **Other Korean names, dishes, fandom words:** an established Pakistani spelling if one exists (کمچی, سوجو, کے-پاپ, بی ٹی ایس); otherwise transcribe the RR: g گ · k / kk ک · d د · t / tt ت · b ب · p / pp پ · j / jj ج · ch چ · s / ss س · h ہ · n ن · m م · ng نگ · r ر · l ل · a ا / آ · eo / o او · u و · eu اُ · i ی · ae / e ے; y- ی, w- و. Labels, not readings, so ㅓ → او is allowed here only.
- **The learner's name `@@`:** keep exactly as many as the English row; §3.5 rule 11.
- **Countries:** gloss what the row says; 미국 = امریکہ; never swap in Pakistan (파키스탄 is card c1225). Prose may say "اپنا ملک لگائیں: پاکستان" with no Hangul.
- **Local frame:** rupees with no exchange rates; واٹس ایپ; جاز کیش / ایزی پیسہ for mobile payment; میٹرو; رکشہ.

## 10. Course `ui.json`, app issues, trainer notes

- **No wording changes are needed**: the Urdu interface was written for ur-ko and already says کوریائی / ہنگل / رومن (NOTES intro).
- **`ui.json` must still hold the 14 `uiKeys`**, or `validate.js` counts them as words remaining. Copy them **verbatim** from `tools/i18n/ur/ui.json` `exact[key].t`.
- **One real override** (NOTES translated the English keys literally): `"No match. Try the English meaning."` → `"کوئی نتیجہ نہیں۔ اردو مطلب سے تلاش کریں۔"` (the Browse search matches native meanings).
- **What writers must know from NOTES §6 (app issues, lead's work):**
  1. **Font block for `lang=ur`.** Until a `[lang=ur]` block like the Arabic one lands, the Urdu interface shows a fallback font with default line height and letter-spacing, which breaks joining and clips tall Nastaliq. Do not judge length or look from a pre-fix preview; keep labels, options and table headers short anyway.
  2. **Slot wrapping.** `setI18n()` does not isolate pattern slots, so a Latin- or Hangul-initial value inside an interface pattern (a deck name in "{1} …") can pull punctuation to the wrong side. Deck labels and group names therefore start with an Urdu letter (all of §3.3 do).
  3. **RTL tests are Arabic-only** (`rtl_site.js`, `ship.sh`). Nothing tests ur-ko layout automatically. Writers check bidi by eye (§3.5); the lead runs `RTL_COURSE=ur-ko node tools/site/rtl.js ur` once the pack exists and does one screenshot pass on cards, tiles, the answer box and lesson tables (NOTES §6 item 5).
  - Also for the lead: the add-card form inputs carry inline `text-align:left`, so the Urdu meaning field is left-aligned under RTL.
- **w4 (`wT.jsonl`).** Terms from §3.1. Sound-rule names: ملا کر پڑھنا · ناک والی تبدیلی · ہ کا غائب ہونا · ل والی تبدیلی · کساؤ والی تبدیلی · ہوا والی تبدیلی · آخری حرف کی سادہ آواز. Glosses short, as `native/es/ko/trainer.json`; `%n` slots and Hangul exactly as `src`; start each value with an Urdu letter where it does not start with a slot.
- **`hangul.alt`** is authored by the lead. Candidate Roman-Urdu spellings [inference]: *aa* ㅏ, *ee* ㅣ, *oo* ㅜ, *ay* ㅐ; check them against spec §10.3 first. Keep typed mode: Pakistanis type Latin on phones.

## 11. What not to do

- **No Korean beyond the source row without `_waive`.** Never edit `f`, `id`, `k`, `src` or any Korean field.
- **No English in Latin script** (only RR, its letters, NOTES §2). **No Hindi words** (धन्यवाद-type, نمستے, پرشن, اتّر). **No Arabic letter variants**, no Urdu digits, no ASCII `. , ?` after Urdu.
- **No bidi control characters**; no reordering for the code editor; no digit ranges with a dash; no Korean `?` / `!` stranded inside Urdu prose.
- **No invented etymologies.** 살 / سال is a coincidence; state no origin beyond what the English says; no Persian or Arabic "cognates" for Sino-Korean words.
- **No whole-word Urdu respellings as readings**; no comparisons with English sounds; no vowel marks outside §6.
- **Address and gender.** Never تم / تو toward the learner; never تو for 반말; no براہ کرم / پلیز with a plain 주세요; no added جی / صاحب; no silent gender choice; no spaced gender slash.
- **Particles.** Never "은/는 = تو", "을/를 = کو", "에 = میں" as equations.
- **Never call ㅍ ف, ㄷ ڈ, or final ㄴ ں.**

## 12. Review questions and unverified claims

**For an Urdu speaker** (answer "OK" or give the natural version):
1. Are the -یں / -یے split (plain 요 vs -시- to a superior) and "… دیجیے گا؟" for 주시겠어요? natural?
2. Is the unspaced pair (جاتا/جاتی, گیا/گئی) acceptable, and are "دل چاہتا ہے" (want), "مجھے لازمی … ہے" (must) and "میرا آنا نہیں ہو سکے گا" (못) natural in prompts?
3. اللہ حافظ (جانے والے سے / رکنے والے سے) for both goodbyes: fine, or should one side use خدا حافظ or another phrase?
4. Fixed phrases: امید ہے آپ کا ساتھ اچھا رہے گا (잘 부탁드립니다), آپ کا کام اچھا چلے (수고하세요), ڈن! (콜), ہمت کرو! (화이팅), سنیے (저기요), ڈرائیور صاحب (기사님).
5. Terms: موضوع / فاعل / مفعول کا پارٹیکل, صفتی فعل, لاحقہ, سادہ / ہوا والے / کسے ہوئے, ناک والی تبدیلی, ہجا.
6. Labels: جوش اور واہ واہ, پیاری باتیں, عام فجائیہ الفاظ, بنیاد, ذخیرۂ الفاظ, عام ترین الفاظ, اقوال.
7. Reading guide: ㅓ "the زبر of اَب, jaw lower"; ㅜ = "دودھ والا و"; ㅌ = تھ (not ٹھ); ㄹㄹ = بِلّی.
8. Counters عدد / دانے ≈ 개, and صاحب / صاحبہ ≈ 님 with 씨 glossed as the bare name.

**Unverified or inference only:** Roman-Urdu reading habits (§6.2); Pakistani-English retroflex t / d; عدد / دانے as counters; ہنگل as feminine; Pakistani press spellings of Korean places; خوان for Juan; the بسم اللہ remark; every Urdu sentence. The Hindi perception studies in hi-ko are an analogy only. The one Pakistani-learner study found (final nasals) is small (10 students) and only its abstract was read.

**For the lead:** `ui.json` (§10); `_waive` on `hangul` and optionally `meet`; the three NOTES §6 app issues and the add-card alignment; the RTL screenshot pass before release.

## Sources (opened 2026-11-23)

- [ProPakistani, "South Korea increases job quota for skilled Pakistani workers" (2025-10-06)](https://propakistani.pk/2025/10/06/south-korea-increases-job-quota-for-skilled-pakistani-workers/): 2025 EPS quota 5,400 (2,400 in 2024); applicants must pass EPS-TOPIK.
- [Express Tribune, "New institute to impart Korean language at NUML" (2012-07-03)](https://tribune.com.pk/story/402698/professional-skills-new-institute-to-impart-korean-language-at-numl?amp=1): King Sejong Institute at NUML Islamabad with HRD Korea; NUML's existing Korean department.
- [Aman Ullah, "한국어 종성 발음 오류 분석과 시사점: 파키스탄 학습자의 비음 발음 중심으로" (earticle abstract)](https://m.earticle.net/Article/A353433): 10 Pakistani students; final-nasal errors before a consonant.
- [Seoul Start, halal food guide](https://seoulstart.com/guides/halal-food-korea-guide): KMF certification; Seoul Central Mosque (1976) in Itaewon / Hannam-dong; pork broth, jeotgal, cooking wine.
- [Korean phonology (Wikipedia)](https://en.wikipedia.org/wiki/Korean_phonology): ㅓ [ʌ̹]; coda ㄹ (via hi-ko / mr-ko).
- Local files: `docs/HALVES-SPEC.md`, `docs/profiles/hi-ko.md`, `docs/profiles/mr-ko.md`, `docs/profiles/en-ur.md` (§2.3–2.7), `docs/briefs/x-ko-writer.md`, `docs/briefs/x-ko-topup.md`, `tools/halves/native/{tl,zh}/ko/REVIEW.md`, `tools/halves/native/en/ko/` (lessons, decks, groups, labels, practice, bodies), `tools/halves/target/ko/`, `tools/i18n/ur/NOTES.md`, `ui.json`, `roadmap.json`.
