# ur-en cold review (UR-REVIEWER), 2026-11-23

Reviewer: a non-native, working from `docs/profiles/ur.md`. The whole course was read line by line: `decks.js`, `extra.js`, `meta.js`, the interface dictionary and the roadmap titles by the lead reviewer; `lessons.js` + `practice.js`, `more/a1.js`, and `more/a2.js` + `more/b1.js` by three parallel reading passes under one brief (same rulings, same treatment rules), whose edits the lead reviewer then spot-checked and scanned across files. Nothing here replaces the native check.

All checks pass after the review (last lines at the end of this file).

## 1. What changed

### Lead rulings
1. **"I am elder to you" is group 1 (fine in Pakistan, say this abroad), never ✗.**
   - `adjectives` body: «عمر کے موازنے میں بھی than آتا ہے، to نہیں: I am elder to you. ✗» → «عمر کے موازنے میں پاکستان میں I am elder to you. عام ہے۔ باہر موازنے میں older than کہتے ہیں؛ elder صرف اسم سے پہلے آتا ہے: my elder brother۔»
   - `pakistani-english`: the row moved from the ✗ / ✓ table to the «پاکستان میں / باہر» table, with an example row and one sentence in the group-1 paragraph.
   - Deck 22 card `I'm older than you.`: note «غلط: I am elder to you۔ …» → «پاکستان میں: I am elder to you۔ باہر موازنے میں older than کہتے ہیں؛ elder صرف اسم سے پہلے آتا ہے: my elder brother۔»; the card moved up into the group-1 block (after *passed away*).
   - No parity-bound check or practice item had to change; none marks *elder to* as a wrong option. `deviations.json` reason texts updated to match.
2. **Card `Jew` dropped** from deck 18 (now 42 cards). `zoo` note: «… وہاں یہ لفظ Jew جیسا سنائی دیتا ہے» → «… وہاں خاص دھیان دیں: شروع میں ز کی آواز ہے، ج کی نہیں۔» `deviations.json` and `deviations.a.json` entry updated (cards 26–41). `wine` / `vine` kept.
3. **One term each.** «ویک اینڈ» was already the only word for weekend (course and interface: the interface has no string with it). Main verb = «عام فعل»: the `be` lesson title «… اور باقی فعل» → «… اور عام فعل», its table header, a heading and «اصل فعل»; `present` adverb rule and two `why` lines. Zero-article option = «(کچھ نہیں)»: two «(آرٹیکل نہیں)» options in `the` changed.
4. **Level titles:** `meta.js` TITLES[6] «استاد» → «ماسٹر», so the ladder is مبتدی · طالب علم · باتونی · مسافر · مقامی · ماہر · ماسٹر in both places. (The interface already uses «استاد» for Sensei in the older ladder; see `tools/i18n/ur/NOTES.md`.)
5. **IPA:** `I'm older than you.` is /aɪm ˈoʊldər ðən ˈjuː/ in all three places. 874 pairs checked: 0 phrase conflicts; every string shared with zh-en or ar-en is identical (1,311 matches); the six fixed names do not vary. Details in `PRON-RULES.md`.
6. **"Abroad" claims checked:** pass out = faint ✓; shopper = a person who shops ✓; give an exam = what the teacher does, students take it ✓; *expired* was overstated («صرف چیزوں کے لیے») → «عام طور پر چیزوں کے لیے …؛ انسان کے لیے یہ روکھا لگتا ہے» (deck 22 and the lesson); «isn't it صرف پاکستان اور بھارت میں چلتا ہے» (`questions`) → «… پاکستان اور بھارت میں عام ہے، مگر باہر غلط سمجھا جاتا ہے».
7. **Facts verified against an opened source:** police 15 and rescue / ambulance 1122 in Pakistan, 911 (US), 999 (UK): Wikipedia, *List of emergency telephone numbers* (Pakistan row: police 15, ambulance 115 and 1122, fire 16). 1 lakh = 100,000, 10 lakh = 1 million, 1 crore = 10 million, 1 arab = 1 billion: Wikipedia, *Indian numbering system*. Notes left as written; the `numbers` table gained the 1 arab row.
8. Roadmap basis line left as translated (section 5).
9. No deck was renamed.

### Wrong or misleading teaching (examples)
- `be`: «be کی شکلیں صرف تب آتی ہیں جب جملے میں کوئی اور فعل نہ ہو» (false for *I am working*) → «اکیلی تب آتی ہیں …» with a pointer to the continuous lesson; main-verb gloss «کام یا عادت» → «کام، عادت، پسند یا خواہش».
- `be` practice: «tired حالت ہے» → «tired صفت ہے، فعل نہیں۔ جملے میں کوئی عام فعل نہیں …»; same in `past` (busy).
- `articles` practice: a `why` implied *one hour* is wrong English; reworded.
- `numbers`: a.m. / p.m. definition corrected (midnight to noon / noon to midnight).
- `email`: «Dear صرف بہت رسمی موقع پر … Dear Manager عجیب لگتا ہے» softened (*Dear Hiring Manager* is standard).
- `idioms`: *A drop in the ocean* (British) → *A drop in the bucket* in a body table.
- `conditionals`: the *If I were you* tip did not cover the lesson's own check (*If I ___ rich*); now states the rule and that *was* is heard in speech.
- `relative`: *which* was an accepted answer and a distractor but never explained; one paragraph added.
- `first-conditional`: «"تو" کے لیے انگریزی میں کوئی لفظ نہیں آتا» → «عام طور پر …».
- `perfect`, `perfect-2`, `to-ing`: forms that live on in Pakistani English (*I am working here since 2020*, *looking forward to meet*) are now worded as "what standard English and listeners abroad expect", per profile §5.
- `countable`: «any کے بعد … جمع» qualified («سوال میں … عام طور پر»); `irregular-past`: «روز کام آنے والے فعل بے قاعدہ ہیں» → «… بہت سے فعل …»; `the`: a heading promised meals that its examples did not have.
- Deck 16 `I have a fever.`: «بیماری کے نام سے پہلے a آتا ہے» → «کچھ عام تکلیفوں کے نام سے پہلے a آتا ہے: a fever، a cold، a headache».
- `pakistani-english` calque table headers now mark ✗ / ✓, so calques are not read as group 1.

### Prompts and accepted answers
- Two mc items with two right options fixed through the Urdu question (`past-continuous`: *They ___ playing soccer* now carries «(وہ فٹ بال کھیل رہے تھے)»; *I ___ sleeping at ten* likewise); `modals`: a distractor that is correct English (*I have work tomorrow.*) is ruled out by «(have to کے ساتھ)».
- Cues added to type prompts whose natural answer was not accepted: `articles` «(Let's سے شروع کریں)», `be` «(Does سے شروع کریں)», `prep`, `smalltalk`, `numbers`, `perfect` «(been to کے ساتھ)», `it-there` «(there are استعمال کریں)», `relative` (adjective changed to match *great / good*).
- `pakistani-english` (ur-only): accepted answers added (*My head hurts / aches / is hurting*; *I want / I'd like a notebook*).
- Korean leftovers in free Urdu-side text localised: «I went to Busan last weekend» → Murree (`smalltalk`), and four gap sentences in `more/a1.js` (Seoul / Busan / Korean → Lahore / Karachi / Urdu). The ones inside frozen English stay (section 5).

### Wording
- `polite`: «کھڑکی کھول دیں تو آپ کو برا تو نہیں لگے گا؟» (reads as "if I open it") → «اگر برا نہ مانیں تو کھڑکی کھول دیں گے؟»; *Pretty good* «بہت اچھا» → «کافی اچھا»; «دو الٹ باتیں» → «دو متضاد باتیں»; «بہت کتابیں» → «بہت سی کتابیں»; loan word no longer inflected («تیسری فارمیں» → «تینوں فارم»).
- Interface: "Last {n} reviews" «پچھلی دہرائی: {1}» → «حالیہ دہرائی: {1} کارڈ» (6 patterns).
- Roadmap: the pron title said «R/L، F/P، TH» (the Korean course's traps) → «تلفظ کی عام غلطیاں: V / W، TH اور زور»; modals, narrative and passive titles aligned with the course lesson titles («Passive Voice» keeps its English name, profile §3).

### IPA inside Urdu text (right to left)
- Rule recorded in `PRON-RULES.md` §C. A slashed group that begins with ˈ or ˌ is misdrawn inside Urdu text; groups that begin with a letter are not.
- Lesson bodies: such groups stand in `<b>` or in English-first table cells; 12 cells of the `pron` sound key had an Urdu comma inside English-only content and now use an ASCII comma.
- Card notes (plain text): 22 notes reworded, e.g. «menu میں زور پہلے حصے پر ہے: /ˈmenjuː/۔» → «… پہلے حصے پر ہے، دوسرے پر نہیں۔»; «wrap کا w نہیں بولا جاتا: /ˈræp/۔» → «… /ræp/۔»; letter names «نام /ˈdʒiː/ ہے» → «نام /dʒiː/ ہے».
- Scan of the generated pack after the review: 0 stress-initial groups inside Urdu text in any field.

### Formatting
- 14 inline «✗ درست: ✓» pairs in `more/a2.js` and `more/b1.js` bodies became two-column tables (profile §2); four bare English error examples in `more/a1.js` bodies put in `<b>`.
- Wrong-code-point grep (profile §6, plus bidi controls and Hangul) over every file and every interface `t`: 0 before and after. All files NFC. Vowel marks present are tanween in ordinary spellings, the izafat zer and the pesh of «پُر».

## 2. Edit counts per file

| file | wrong / misleading | unnatural wording, terms | pron / IPA display | formatting | total |
|---|---|---|---|---|---|
| decks.js | 5 | 0 | 22 | 0 | 27 |
| extra.js | 0 | 0 | 0 | 0 | 0 |
| meta.js | 0 | 1 | 0 | 0 | 1 |
| lessons.js | 12 | 8 | 12 | 1 | 33 |
| practice.js | 11 | 4 | 0 | 0 | 15 |
| more/a1.js | 25 | 4 | 0 | 6 | 35 |
| more/a2.js | 12 | 4 | 0 | 11 | 27 |
| more/b1.js | 3 | 1 | 0 | 6 | 10 |
| i18n ui.json (`t`) | 0 | 6 | 0 | 0 | 6 |
| i18n roadmap.json (`t`) | 1 | 3 | 0 | 0 | 4 |
| **total** | **69** | **31** | **34** | **24** | **158** |

Also: `deviations.json` and `deviations.a.json` reason texts (2 entries each), new `PRON-RULES.md`, new `tools/i18n/ur/NOTES.md`.

## 3. Read in full / only scanned

- **Read in full:** every card (target, IPA, meaning, note) in decks.js; DIALOG, EXAMPLES, PATTERNS, PAUSE and IDIOMS in extra.js; meta.js; all 42 lesson bodies, 126 checks and 592 practice items; all 784 exact interface strings and 274 patterns; the 39 roadmap titles.
- **Only scanned by script:** IPA (consistency, cross-course comparison, rule checker: not re-derived row by row, and not heard); code points; bidi patterns.
- **Not done:** no screen was rendered; `link_roadmap.py --check` and `road.py check` could not run on this machine.

## 4. For a native speaker: check these first

1. **The §6 sound anchors in the `pron` lesson key** (which Urdu word stands for /æ/, /e/, /ɔː/, /ʌ/, /ɜːr/, /ŋ/). Untouched in the review; they decide how every learner reads the aid.
2. **Grammar terms used hundreds of times:** «عام فعل» (main verb), «قابلِ شمار / ناقابلِ شمار اسم», «حالت بتانے والا فعل», «امدادی فعل», «ملے ہوئے کانسوننٹ», «پہلی / دوسری / تیسری فارم».
3. **The Pakistani English lesson and deck 22:** is the group split right for Pakistani readers (group 1 «پاکستان میں ٹھیک، باہر یہ کہیں» against ✗), is ✗ too strong for *my real brother* and *give an exam*, and is «روکھا» the word for how *expired* sounds of a person?
4. **Sentences written new in this review:** «اگر برا نہ مانیں تو کھڑکی کھول دیں گے؟», «مجھے انتظار کرنے میں کوئی مسئلہ نہیں», «میں ہمہ تن گوش ہوں», «چند فعل، تینوں فارم», «پہلے خانے والی شکلیں …», «ماضی کا پتا did سے چل جاتا ہے».
5. **Deck names and tab labels** (cannot change after release): «سلام دعا», «ہلکی پھلکی گپ شپ», «کال اور چیٹ کی شارٹ فارم», «فریزل ورب», «انگریزی حروف تہجی»; tabs «مطالعہ», «مہارتیں», «پیش رفت», «دہرائی».
6. **Level titles:** «ماسٹر» against «استاد» for the top level; «باتونی» (it can sound like "chatterbox").
7. **Idiom equivalents:** «آنکھ اوجھل، پہاڑ اوجھل», «ایک ہی کشتی کے سوار», «اونٹ کے منہ میں زیرہ» for *a drop in the bucket*, «ہمہ تن گوش», «جب سورج مغرب سے نکلے گا», and the claim that Urdu «ٹانگ کھینچنا» means putting someone down.
8. **Card meanings that may be off-register:** *You're so funny* «تم بہت ہنس مکھ ہو، خوب ہنساتے ہو», *It's too big* «یہ بہت بڑا ہے», *Good afternoon* «سلام (دوپہر کے وقت)» against the interface greeting «سہ پہر بخیر», *Who's your bias?* «تمہارا پسندیدہ ممبر کون ہے؟».
9. **Cultural claims about abroad that no source backs:** *Have you eaten?* may be heard as an invitation; salary / age / marriage questions are personal; *Since when …?* sounds surprised or sarcastic; the office-email habits section adapted from the Korean course.
10. **Interface count wording:** «{1} دن بعد» at every number, «آتا ہے» for "Got it", «پکا / پکے» for "mastered", and the weekday letters ا پ م ب ج ج ہ (Thursday and Friday are both «ج»).

## 5. Found, not fixed (out of scope or parity-bound)

**For the lead to decide**
- **Roadmap basis line** says "adjusted for Korean speakers" in the English source; the Urdu is a faithful translation («کوریائی بولنے والوں کے مطابق ڈھالی گئی»). Left as translated.
- **Level-title choice** («ماسٹر» kept, `meta.js` changed). If «استاد» is preferred for Master, Sensei needs another word in the interface.
- **Inline ✗ / ✓ pairs:** `more/a2.js` and `more/b1.js` now use tables; the tip boxes of `more/a1.js` and `lessons.js` still use the inline form «✗ درست: ✓», which profile §2 allows for Urdu lines. One convention should be chosen.
- **`will` weak form /wəl/** in one row (also in hi-en and ar-en); zh rules do not list it.
- **Deck 22 card order changed** (one card moved up) and deck 18 lost a card: harmless before release, but saved progress is keyed by deck.

**Parity-bound English (Korean leftovers and weak items); the Urdu follows them**
- Korean names in frozen options, answers and gap sentences: `be` checks 0–1 (K-pop, Seoul) and practice 5, 8; `prep` mc 4; `tense` mc 2 (Jeju); `phrasal` mc 2 (Daegu); `numbers` fill 9 (won); `email` check 0 (Jenny); `present` mc 3 and one fill (Seoul, Busan); `irregular-past` fill and type (Jeju, Busan); `going-to` mc 1 (Busan); `will` check 3 and mc 5 (Jeju); `perfect` check 3, mc 3, mc 5, order 2, fills 1 and 3 (Jeju, kimchi, Korea, Busan); `articles-2` mc 2 (Korea); `relative` check 1 and type 2 (Busan, Korean); `passive` check 2, mc 2, fills 1 and 3 (made in Korea, Han Kang). Glosses were added in the Urdu prompts where a learner would not know the word (Jeju, won).
- `polite` check 2 option 3 writes "~ing" with the Korean tilde.
- `email` practice 0: "Dear Manager," is a wrong option although *Dear Hiring Manager* is accepted US usage.
- `modals` mc 1: the distractor "I have work tomorrow." is correct English (worked around in the Urdu question).
- `perfect-2` order 3: "How long have you waited" is stiff for «آپ کب سے انتظار کر رہے ہیں؟»; `stative-since` teaches *been waiting*.
- `continuous` type item accepts only "I'm cooking (now / right now)" for «میں ابھی کھانا پکا رہا ہوں».

**For the main build (engine)**
- **English punctuation inside Urdu notes:** 60 card notes and 2 pause glosses quote an English question or exclamation and then continue in Urdu («مثال: Can you look after my cat? امریکہ میں …»). The mark is drawn at the left of the English phrase. No line *ends* in an English mark (0 found). Rewording 62 notes would remove useful model sentences; isolating Latin runs with their closing punctuation at render time (`<bdi dir="ltr">`) fixes all of them, and would also let the stress-initial IPA return to card notes.
- No Urdu interface font rule exists yet (profile §10); Nastaliq line height and tab-bar clipping are untested.
- `validate.js` (i18n) warns that «انگریزی میں لکھیں» for "Write it" is long (17 against 8 characters): check the button at 390px.
- The en-US voice has not been heard on Sara, Ali, Khan, Karachi, Lahore, Urdu, rupees.

## Check outputs (scratch packs, after the review)

```
gen.js ur            wrote …/ur-r.js 357429 bytes
validate.js ur       PASS: all checks OK
parity.js ur         WARN unused deviations (stale?): lessons:pakistani-english, lessons:stative-since
                     PASS: shared English side matches ko-en
lint.js ur           lint ur: 0 blocking · 27 meaning variants (info) · 0 K-pop leftovers (info)
alphabet_check.js ur PASS alphabet ur: lesson 1, deck 21 «انگریزی حروف تہجی» with 26 cards, English side matches the spec
i18n gen.py ur       wrote …/i18n-ur-r.js · exact 784 patterns 275 road 39
i18n validate.js ur  exact=784 patterns=275 warnings=1
                     PASS
```
