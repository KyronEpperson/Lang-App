# Thai speakers learning English — course profile

Course `th-en`. Audience: Thai-speaking adults and older teenagers in Thailand. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Central Thai, in Thai script**. Answers and examples are in English. The HTML language tag is `th`. profile.json has `native: "th"`, the pack is `course-th-en` and the interface pack is `i18n-th`. The course is built from the Korean-speakers' course (`ko-en`), like zh, vi and id.

**Evidence labels** follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or dataset opened for this profile, named, with its sample. "Abstract only" or "page summary only" is stated when the full paper was not read.
- **[curriculum convention]**: what Thai textbooks, prep sites, exam bodies, the Royal Society (ราชบัณฑิตยสภา) or style guides do.
- **[practitioner opinion]**: a teacher's, guide's or author's stated view with no data behind it, or this profile's own inference (marked "inference").

Untagged rules in §6–§10 are design decisions, not findings. Every web figure was read through the fetch tool's summary of the page, not by reading PDFs directly; check key numbers against the originals before quoting them in app copy.

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations use neutral written Thai with **no ครับ/ค่ะ** and no gendered pronoun for the learner. **คุณ** is used only where a subject is needed. Grammar terms are the school ones (คำนำหน้านาม, พหูพจน์, ประธานเอกพจน์บุรุษที่ 3), and tense names stay in English (Present Simple Tense).
- **Top measured errors are in the verb:** in Thai first-years' speech, agreement is 25.3% of errors, verb form 17.7% and tense 12.7% (Pawabutra & Sutakote 2024). In paragraphs, tense ranks 1st, articles 4th and singular/plural 7th (Watcharapunyawong & Usaha 2013). Thai has no articles, no plural inflection, no agreement and no tense inflection; time words and แล้ว / กำลัง / จะ do the work.
- **Pronunciation:** Thai allows only /p t k ʔ m n ŋ w j/ at the end of a syllable. English finals, voiced fricatives and clusters are the core problem, and they carry the grammar (-s, -ed). The one measured study found final /l/ → [w] (59%) and near-zero accuracy for final /v z dʒ/; "final s dropped" and "l → n" are practitioner claims (§4.14).
- **Pronunciation aid: IPA, required, written exactly as the Chinese course writes it** (slashes, ˈ on every content word, weak forms, OALD North American values). Most transcriptions can be copied from `tools/content/zh/` and are bound by `tools/content/zh/PRON-RULES.md`. Thai-script respelling (คำอ่าน) is what learners know, but it cannot write final /s l v z/ or clusters, and it imposes Thai tones.
- **Standing rule: `article-plural`**, keywords `คำนำหน้านาม|นามพหูพจน์|รูปพหูพจน์|นับได้|นับไม่ได้`. It costs no parity deviations. Third-person -s and tense are secondary emphases, named in `why` but not validated.
- **Curriculum:** all 39 ids are kept in order with no English-side changes. Two are added: `tinglish` (after `smalltalk`, with a new deck «กับดักภาษาอังกฤษแบบไทย») and `time-markers` (after `perfect`, same id and structure as id-en's).
- **Learners:** EF EPI 2025 puts Thailand at 402, rank 116 of 123 ("Very low"). Reading is 416 and writing lowest at 363. So start slower than zh, with fuller Thai explanations, audio on every row, and typed production.
- **Interface:** Thai has no plural forms, so count patterns use noun + number + classifier («การ์ด {1} ใบ»). It writes no spaces between words, so line breaks come from the browser's dictionary segmentation, with no zero-width spaces in labels. Line height is taller (≥ 1.6) so stacked marks are not clipped.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision].
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear, and it does: the IPA key in §6 is the zh key, which uses American values.
2. Thai learners meet both varieties. Prep sites print British-style IPA (/ˈɒnɪst/ on [Prep Edu Thai](https://prepedu.com/th/blog/english-pronunciation-exercises)), while media and tourism English is mostly American [practitioner opinion].
3. Mention a British form only in a card `note` («อังกฤษแบบบริติชใช้ flat»), never as an accepted answer.

**Register: neutral written Thai (ภาษาเขียนที่เป็นกันเอง), friendly and explanatory, never gendered** [practitioner opinion, decision; partly curriculum convention].
- **No ครับ / ค่ะ / คะ / นะคะ / จ้ะ in app text** (lesson bodies, `why`, `hint`, toasts, buttons, empty states).
  - Thai polite particles mark the *speaker's* gender. ครับ is "used by male speakers" and ค่ะ "by female speakers" ([1StopAsia](https://www.1stopasia.com/blog/wp-content/uploads/articles-download/How-Formality-Systems-in-Japanese-Korean-and-Thai-Influence-Compliance-UX-and-Public-Communication.pdf)). Any choice gives the app a gender, and the learner's gender is unknown.
  - **Counter-view, recorded:** the same source recommends that Thai copy "Include polite particles; avoid abruptly marker-free copy", and warns that dropping them "may appear abrupt or disrespectful" [practitioner opinion].
  - **How this profile stays polite without particles:** write complete, soft sentences instead of bare commands (`ลองอีกครั้งได้เลย`, `บันทึกแล้ว`, `วันนี้ทบทวนครบแล้ว`). Use the gender-neutral softener **นะ** at most once per screen, and only in encouragement (`เกือบถูกแล้วนะ`). Use **กรุณา** only in instructions that ask the learner to do something outside the lesson (for example «กรุณาเข้าสู่ระบบอีกครั้ง»). Textbook-style explanation is normally particle-free in written Thai, so lesson bodies read naturally [practitioner opinion].
- **Second person: no pronoun where Thai can drop it; คุณ where a subject is needed.** Proton's Thai guidance says to "Omit subject pronouns such as 'we' and 'you'", and its own example uses คุณ when one is kept ([Proton](https://localize.proton.me/t/guidance-for-thai/3343)). Never use ท่าน (too formal), เธอ / แก / นาย (intimate or gendered) or หนู for the learner.
- **The app refers to itself** only on the feedback page («ส่งความคิดเห็นถึงเรา»), with เรา, which is gender-neutral.
- **Inside translations** (card meanings, `{{ex}}` meanings, dialogue translations, `p`) the Thai follows the English situation, with gender-neutral defaults:
  - *I* → **ฉัน** (used by any gender in written Thai and in learning materials) and *you* → **คุณ**. Never use ผม / ดิฉัน / หนู as the default. Thai drops pronouns freely, so leave them out where natural (`Nice to meet you.` → «ยินดีที่ได้รู้จัก»).
  - *he* → **เขา**, *she* → **เธอ**. Where the English gender matters and Thai would hide it, add it: «เขา (ผู้ชาย)». The `object-have` and `be` lessons point out that เขา covers both (§4.9).
  - **Polite particles in translations:** none by default (`Thank you.` → «ขอบคุณ»). A card `note` may say that Thai adds ครับ/ค่ะ and English adds *please* or *could* instead. Never write a single gendered particle in a meaning; if one is unavoidable in a service dialogue, write «ครับ/ค่ะ» with the slash.

Three sample sentences in the voice:
- «ภาษาไทยไม่มีคำนำหน้านาม a และ the จึงลืมใส่ได้ง่ายที่สุด จำแค่สามกรณีก็พอ»
- «ภาษาไทยบอกเวลาด้วยคำอย่าง เมื่อวาน หรือ แล้ว แต่ภาษาอังกฤษต้องเปลี่ยนรูปกริยา: I went to Chiang Mai yesterday.»
- «ถ้าประธานเป็น he she หรือ it กริยาต้องเติม -s และต้องออกเสียง s ท้ายคำให้ได้ยินด้วย»

**Mixing English and digits into Thai text: one rule, applied everywhere.**
- **Spacing.** Put one space between Thai and any English word or digit, on both sides: `กริยาช่อง 2`, `บทที่ 3`, `เติม -s ที่ท้ายคำ`, `ใช้ a เมื่อ...`. This follows the Royal Society's spacing rules: «เว้นวรรคเล็กระหว่างตัวหนังสือไทยกับตัวหนังสือภาษาอื่น» and «เว้นวรรคเล็กระหว่างตัวหนังสือกับตัวเลข» [curriculum convention: [Royal Society rules via TruePlookpanya](https://www.trueplookpanya.com/knowledge/content/50093-lantha-lan-)]. Use one normal space (U+0020) for it; the engine must not also add CSS autospace.
- **Spaces between Thai phrases and sentences.** Thai separates phrases and sentences with a space, not with commas or full stops. W3C: "Spaces separate phrases, rather than words" ([W3C Thai Layout Requirements](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240705/)). Proton says not to use commas in Thai sentences as in English, and to use a space instead ([Proton](https://localize.proton.me/t/guidance-for-thai/3343)). So:
  - no full stop at the end of a Thai sentence, and no comma inside one;
  - one space between Thai sentences (the Royal Society's "long space" is not reproducible in plain text);
  - a colon is allowed as in English (Proton) and is the preferred way to introduce an English example: `ภาษาอังกฤษพูดว่า: I'm a teacher.`;
  - no question mark after a Thai question that already ends in a question word (ไหม, อะไร, หรือเปล่า); in practice prompts it is optional, and one form is used throughout (none);
  - exclamation marks only in praise (Proton: "Use them sparingly").
- **English inside Thai keeps its own punctuation:** `I'm a student.` keeps its full stop.
- **Quoting.** In lesson HTML, English is bold `<b>`. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare between spaces, because the scripts differ and it cannot be confused with Thai (the zh rule). Quote Thai phrases with curly quotes “…”.
- **Error marks:** ✗ for wrong, ✓ for right, with the arrow: `I'm teacher. ✗ → I'm a teacher. ✓`.
- **Alternatives** are separated by ` / ` (spaced), as in ko-en.
- **ๆ (ไม้ยมก)** takes a space before and after: «ต่าง ๆ», «วันหนึ่ง ๆ» (Royal Society rule above). Avoid ฯลฯ; write «เป็นต้น».
- **Digits:** Arabic digits (0–9) everywhere. Thai digits are "commonly used" in Thai (W3C), but `Intl` and Thai apps default to Arabic digits, and mixing both confuses counts [practitioner opinion].
- **Encoding.** All strings in NFC. Write สระอำ as the single code point U+0E33 (ำ), never U+0E4D + U+0E32. Never insert U+200B (zero-width space) or U+2060 in content: it breaks the standing-rule keyword match, deck-name lookups and the "same English" checks.

## 3. Glossary

Use these terms **exactly and consistently** in lesson bodies, `why`, `hint`, deck names and the UI. "Fetched" means the term was seen on a fetched Thai grammar page: [TruePlookpanya on articles](https://www.trueplookpanya.com/knowledge/content/60696), [TruePlookpanya on Present Simple](https://trueplookpanya.com/knowledge/content/69010-laneng-lan-) and [Prep Edu Thai on countable nouns](https://prepedu.com/th/blog/english-countable-and-uncountable-nouns). Those are education portals and prep sites, not Ministry textbooks. Unmarked terms are [curriculum convention] from common Thai ELT usage and were not verified on a fetched page (§11).

**Rule:** name word classes and sentence parts in Thai; keep **tense names, Verb to be and a few technical labels in English**, as Thai explainers do. On first mention in a lesson body, gloss once: «คำนำหน้านาม (article)»; afterwards use the Thai term alone.

| English term | Thai term (use this) | Note |
|---|---|---|
| article | **คำนำหน้านาม** | Fetched: «คำนำหน้านาม (Articles)». **Standing-rule keyword.** Prep sites also write "article" in English inside Thai; do not, so the keyword stays reliable |
| indefinite / definite article | a / an และ the | Fetched long forms («คำนำหน้าคำนามที่ไม่ชี้เฉพาะเจาะจง») are too long for `why`; name the word itself |
| zero article | ไม่ใช้คำนำหน้านาม | «ตรงนี้ไม่ใช้คำนำหน้านาม» (fetched: «บางครั้งเราจะไม่ใช้ Article…») |
| noun | คำนาม | Fetched |
| countable / uncountable noun | **คำนามนับได้ / คำนามนับไม่ได้** | Fetched. **Keywords «นับได้» and «นับไม่ได้»** |
| singular / plural | เอกพจน์ / พหูพจน์ | Fetched |
| plural noun / plural form | **คำนามพหูพจน์ / รูปพหูพจน์** | Fetched («คำนามพหูพจน์»). **Keywords «นามพหูพจน์» and «รูปพหูพจน์».** Never write bare «พหูพจน์» when the point is the noun's -s (see §7) |
| plural -s | การเติม -s / -es | «เติม -s ให้เป็นรูปพหูพจน์» |
| classifier (Thai) | ลักษณนาม | Thai grammar term; use only to contrast: «ภาษาอังกฤษนับคำนามโดยไม่มีลักษณนาม» |
| pronoun | คำสรรพนาม | |
| subject / object | ประธาน / กรรม | ประธาน fetched |
| possessive (my, his; 's) | คำแสดงความเป็นเจ้าของ / 's | |
| verb | คำกริยา | Fetched (กริยา) |
| be (am / is / are) | **Verb to be** | Kept in English, as in Thai explainers: «Verb to be (is, am, are)» |
| auxiliary (do / does / did) | กริยาช่วย | |
| modal verb | Modal verb (กริยาช่วย can, must, should) | Gloss once |
| third-person singular | **ประธานเอกพจน์บุรุษที่ 3** | Fetched. Short form in `why`: «ประธานเอกพจน์ (he she it)» |
| base / past / past participle | **กริยาช่อง 1 / ช่อง 2 / ช่อง 3** (V1 / V2 / V3) | School shorthand (not verified on a fetched page) |
| regular / irregular verb | กริยาปกติ / กริยาไม่ปกติ | กริยาปกติ fetched («กริยาปกติทั่วไป»); the irregular term is unverified |
| -ing form | รูป -ing | |
| gerund / infinitive | Gerund (กริยาเติม -ing ที่ใช้เป็นคำนาม) / to + กริยาช่อง 1 | Gloss once |
| tense | **Tense** | Kept in English. Write «Tense นี้», not «เทนส์» |
| present simple | **Present Simple Tense** | Fetched («Present simple tense»); capitalise as shown |
| present continuous | Present Continuous Tense | |
| past simple / past continuous | Past Simple Tense / Past Continuous Tense | |
| future | will / be going to | Name the form, not a tense label |
| present perfect (+ continuous) | Present Perfect Tense (Continuous) | |
| past perfect | Past Perfect Tense | |
| time expression | คำบอกเวลา | yesterday, now, already |
| Thai aspect words | คำบอกเวลาภาษาไทย (แล้ว กำลัง จะ เคย ยัง) | Lesson `time-markers` |
| passive / active | ประโยค Passive / ประโยค Active | Gloss once: «ประโยค Passive (ประธานเป็นผู้ถูกกระทำ)» |
| conditional | ประโยคเงื่อนไข (If) แบบที่ 1 / 2 / 3 | |
| relative clause | ประโยคขยายคำนาม (who / that) | Contrast with ที่ / ซึ่ง |
| reported speech | คำพูดทางอ้อม (Reported speech) | |
| preposition / conjunction | คำบุพบท / คำสันธาน | |
| adjective / adverb | คำคุณศัพท์ / คำกริยาวิเศษณ์ | |
| comparative / superlative | ขั้นกว่า / ขั้นสูงสุด | |
| question word | คำแสดงคำถาม (Wh-) | |
| yes/no question / negative | คำถาม Yes/No / ประโยคปฏิเสธ | |
| word order | ลำดับคำ | |
| contraction | รูปย่อ (I'm, don't) | |
| phrasal verb | กริยาวลี (phrasal verb) | Deck 17 name |
| idiom | สำนวน | |
| Tinglish | ภาษาอังกฤษแบบไทย (Tinglish) | Lesson `tinglish` |
| pronunciation | การออกเสียง | |
| IPA transcription | สัทอักษร (IPA); UI: คำอ่าน | Prep Edu Thai says "IPA (International Phonetic Alphabet)". In the UI, «คำอ่าน» is the familiar word (§10) |
| stress | การเน้นเสียง | ˈ = «เครื่องหมายเน้นเสียง» |
| vowel / consonant sound | เสียงสระ / เสียงพยัญชนะ | Fetched |
| long / short vowel | สระเสียงยาว / สระเสียงสั้น | |
| final sound | เสียงท้ายคำ (ตัวสะกด) | ตัวสะกด is the Thai school term for a final consonant |
| consonant cluster | เสียงควบกล้ำ | From the Thai term คำควบกล้ำ |
| tone | วรรณยุกต์ / เสียงวรรณยุกต์ | Only to say English has none: «ภาษาอังกฤษไม่มีวรรณยุกต์ มีแต่การเน้นเสียง» |
| linking | การออกเสียงต่อเนื่อง | |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking.** Items with fetched production data come first, ordered by how many independent studies agree and how often the form occurs. The ranking is [practitioner opinion, inference]. Example format: error ✗ → correction ✓. **Every "Why" line (the contrast with Thai) and every example without a named source is [practitioner opinion].** "Theirs" marks an example quoted from the named study.

**Main fetched evidence** (all small, single-institution Thai samples; treat percentages as indicative):
- [Pawabutra & Sutakote 2024](https://so17.tci-thaijo.org/index.php/JEL/article/download/625/470), *JEL* 5(3): 43 first-year Business English students at Sakon Nakhon Rajabhat University, 5-minute impromptu speeches, **158 errors** classified with the surface strategy taxonomy. This is the source OTHERS.md cites.
- [Watcharapunyawong & Usaha 2013](https://ir.swu.ac.th/entities/publication/dcca8d3f-34ec-4dff-8eaa-7bba68117c20/full), *English Language Teaching* 6(1): 40 second-year English majors, 120 paragraphs (narration, description, comparison/contrast), L1-interference errors only. **Ranks only; the counts were not on the page read.**
- [Bennui 2008](https://www.melta.org.my/journals/MAJER/downloads/majer04_01_06.pdf), *Malaysian Journal of ELT Research* 4: 28 third-year English minors at Thaksin University, exam paragraphs. Qualitative.
- [Suraprajit 2021](https://tpls.academypublication.com/index.php/tpls/article/download/803/572/3278), *TPLS* 11(1): 30 non-English majors at Kasetsart Sriracha, 60 essays.

1. **Subject–verb agreement and third-person -s**
   - *Examples:* `She go to work. ✗ → She goes to work. ✓` / `My father work in an offit. ✗ → My father works in an office. ✓` (Roeland, below) / `Everybody have different things. ✗ → Everybody has… ✓` (theirs, Bennui)
   - *Why:* Thai verbs never change for the subject. The -s is also a word-final /s z/, which Thai cannot end a syllable with (item 14), so it disappears in speech twice over.
   - *Evidence:*
     - [research-backed] Agreement was the largest single category: **40 of 158 spoken errors (25.3%)**. Omitted third-person -s was coded separately (2, 1.3%) ([Pawabutra & Sutakote 2024](https://so17.tci-thaijo.org/index.php/JEL/article/download/625/470)).
     - [research-backed] In writing, agreement ranked only 14th of 16 overall, but in the top five for description and comparison/contrast ([Watcharapunyawong & Usaha 2013](https://ir.swu.ac.th/entities/publication/dcca8d3f-34ec-4dff-8eaa-7bba68117c20/full)).
     - [practitioner opinion] [Roeland 2007](https://ajarn.com/blogs/phil-roeland/i-go-to-shopping) links "My father work in an offit" to dropped final -s and *t* for *s*.
   - **Reading:** the error is mainly spoken. Make the -s carry the answer in typed items, and make it audible (§6 rule 7 writes it in the IPA).
2. **Tense: bare verbs with time words, and *already***
   - *Examples:* `Yesterday I eat rice. ✗ → Yesterday I ate rice. ✓` / `I go to Phuket already. ✗ → I went to Phuket. / I've been to Phuket. ✓` / `She goed to the store yesterday. ✗ → went ✓` (theirs, Pawabutra & Sutakote)
   - *Why:* Thai verbs do not inflect. Time is carried by time words (เมื่อวาน) and by optional markers: แล้ว (completed, "already"), กำลัง (in progress), จะ (future), เคย (ever). Learners keep the time word and drop the verb change, or translate แล้ว as *already* on a present verb.
   - *Evidence:*
     - [research-backed] Tense ranked **1st** of 16 L1-interference categories overall and 1st in narration (Watcharapunyawong & Usaha 2013).
     - [research-backed] Tense misformation was **20 of 158 (12.7%)** spoken errors (Pawabutra & Sutakote 2024). Bennui 2008 shows tenses mixed inside one sentence.
     - [practitioner opinion] "present tense + already instead of past tense" is listed as a Tinglish feature ([Wikipedia "Tinglish", IPFS mirror](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Thailish.html)). [llexi](https://llexi.com/l1-errors/common-english-errors-thai-speakers/) gives "Yesterday we sign the Acme contract".
3. **Verb form: double marking, *be* + verb, modal + past**
   - *Examples:* `I am go to school. ✗ → I go to school. ✓` / `He didn't went to the party. ✗ → He didn't go… ✓` (both theirs, Pawabutra & Sutakote) / `I'm study at university. ✗ → I study… ✓` (Roeland) / `I can went. ✗ → I can go. ✓`
   - *Why:* Thai has no inflection to keep track of, so learners mark the same information twice (did + went) or use *am/is* as a general "statement" marker. เป็น / คือ only link nouns, so *be* is reanalysed.
   - *Evidence:* [research-backed] Verb-form misformation was **28 of 158 (17.7%)** and additions **25 (15.8%)**, of which double marking was 15 (9.5%) (Pawabutra & Sutakote 2024). [research-backed] Modal/auxiliary errors ranked 6th and verb form 9th in writing (Watcharapunyawong & Usaha 2013).
4. **Articles: omission first**
   - *Examples:* `I am student. ✗ → I'm a student. ✓` / `I liked to read book. ✗ → read books / a book ✓` (theirs, Bennui) / `Please send me copy of presentation. ✗ → a copy of the presentation ✓` (llexi)
   - *Why:* Thai has no articles. Definiteness comes from context, classifiers and demonstratives (นี้ / นั้น). หนึ่ง is the numeral "one", not *a*.
   - *Evidence:*
     - [research-backed] Articles ranked **4th** overall and **1st** in description and comparison/contrast (Watcharapunyawong & Usaha 2013).
     - [research-backed] Article errors were 14 of 158 spoken errors (8.9%): **9 omissions**, 3 misformations and 2 unnecessary additions (Pawabutra & Sutakote 2024).
     - [research-backed] Article omission was the most frequent surface-strategy error, with 13 occurrences in 60 essays ([Suraprajit 2021](https://tpls.academypublication.com/index.php/tpls/article/download/803/572/3278)). No rates were given.
   - **Content consequence:** unlike zh (where extra *the* dominates), the Thai evidence points to **omission**. Teach "add *a*" first, then "when not to use *the*" (§8 `articles`, `the`, `articles-2`).
5. **Plural -s and countability**
   - *Examples:* `three report ✗ → three reports ✓` (llexi) / `There are many knowledge. ✗ → There is a lot of knowledge. ✓` / `I have a little friends. ✗ → I have a few friends. ✓` (both theirs, Bennui)
   - *Why:* Thai never marks number on the noun. Counting uses number + classifier (หนังสือ 3 เล่ม), and the same pattern serves nouns English treats as uncountable (ข้อมูล 2 อย่าง), so nothing signals countability.
   - *Evidence:* [research-backed] Singular/plural form ranked **7th** overall and in the top five for description and comparison/contrast (Watcharapunyawong & Usaha 2013). [research-backed] Plural errors were 6 of 158 in speech (3.8%) (Pawabutra & Sutakote 2024). That low spoken count probably reflects how little the speeches tested plurals, not mastery [practitioner opinion].
6. ***be* left out before adjectives and *-ing*; *be* added before verbs**
   - *Examples:* `She very beautiful. ✗ → She's very beautiful. ✓` / `She studying English. ✗ → She's studying English. ✓` (theirs, Pawabutra & Sutakote, auxiliary omission) / `It makes me not bored. ✗` (theirs, Bennui, linking verb omitted)
   - *Why:* Thai adjectives are predicates on their own (เธอสวยมาก), and กำลัง needs no *be*. เป็น appears only before nouns (ฉันเป็นนักเรียน), so learners supply *be* before nouns and drop it before adjectives. Item 3 is the mirror image.
   - *Evidence:* [research-backed] Auxiliary omission was 5 of 158 (3.2%) (Pawabutra & Sutakote 2024). [research-backed, qualitative] Bennui 2008 lists be-omission among seven sentence-level interference types. [practitioner opinion] "Omitted pronouns and verb 'to be' are also common" (Wikipedia "Tinglish").
7. **Literal translation and word choice (Tinglish)**
   - *Examples:*
     - ปิดไฟ / เปิดไฟ `close the light ✗ → turn off the light ✓`; `open the light ✗ → turn on the light ✓`
     - เหมือนกัน `same same ✗ → the same / similar ✓`
     - เช็กบิล `Check bill! ✗ → Check, please! / Can I get the check? ✓`
     - ไปช้อปปิ้ง `I go to shopping. ✗ → I go shopping. ✓`
     - เบื่อ `I'm boring. ✗ → I'm bored. ✓`; `I am interesting in this topic. ✗ → interested ✓` (theirs, Pawabutra & Sutakote)
     - ฟิตเนส `go to fitness ✗ → go to the gym ✓`
     - ได้ความรู้ `I get the knowledge. ✗ → I learn a lot. ✓` (theirs, Bennui)
     - เล่นเฟซบุ๊ก `play Facebook ✗ → be on Facebook ✓`
     - อเมริกันแชร์ `American share ✗ → split the bill ✓` (Roeland)
   - *Evidence:*
     - [research-backed] Word choice ranked **2nd** of 16 L1-interference categories (Watcharapunyawong & Usaha 2013). Bennui 2008 found 11 literally translated words (*get/receive*, *serious* for "stressed", *close*…).
     - [practitioner opinion] *close the light*, *check bill*, *fitness*, *same same but different* ([The Nation, 2025](https://www.nationthailand.com/life/art-culture/40051240)); *go to shopping*, *American share* ([Roeland 2007](https://ajarn.com/blogs/phil-roeland/i-go-to-shopping)); *same same*, *open/close the light* (Wikipedia "Tinglish").
     - *I'm boring* for *I'm bored* has no fetched Thai source; the closest is Pawabutra & Sutakote's *I am interesting in this topic*. *play Facebook* is this profile's example (§11).
8. ***have* for *there is*; questions without inversion**
   - *Examples:* `Have many restaurants. ✗ → There are many restaurants. ✓` (Roeland) / `In books have many things. ✗` (theirs, Bennui) / `You like coffee? ✗ → Do you like coffee? ✓` / `What time you will come? ✗ → What time will you come? ✓` (theirs, Pawabutra & Sutakote) / `Where are you come from? ✗ → Where are you from? ✓` (Roeland)
   - *Why:* มี means both *have* and *there is*, and needs no subject. Thai questions keep statement order and add ไหม / หรือเปล่า at the end, or leave the question word in place (คุณไปไหน).
   - *Evidence:* [research-backed] Bennui 2008 lists the *have* pattern among sentence-level interference. [research-backed] Misordering was only 2 of 158 errors, one of them the *what time* question (Pawabutra & Sutakote 2024). The rest is [practitioner opinion] (Roeland).
9. **Pronouns: he/she, dropped subjects and objects**
   - *Examples:* `My sister is a nurse. He works at night. ✗ → She works at night. ✓` / `Is very good. ✗ → It's very good. ✓` / `I like. ✗ → I like it. ✓`
   - *Why:* เขา covers *he* and *she* in speech, and Thai drops subjects and objects that context supplies.
   - *Evidence:* [practitioner opinion] "Omitted pronouns" (Wikipedia "Tinglish"). Pronoun errors ranked 10th in Watcharapunyawong & Usaha 2013 [research-backed, rank only, no subtype]. No he/she count was found (§11).
10. **Prepositions**
    - *Examples:* `in Monday ✗ → on Monday ✓`, `at the taxi ✗ → in the taxi ✓` (llexi) / `I stay with home. ✗ → I stay home. ✓` (theirs, Bennui; Thai กับ)
    - *Why:* ที่ and ใน cover in / on / at, and กับ covers *with* and *to*.
    - *Evidence:* [research-backed] Preposition errors ranked 5th (Watcharapunyawong & Usaha 2013). Teach the core set; no standing rule.
11. **Word order inside the noun phrase and around adverbs**
    - *Examples:* `knowledge better ✗ → better knowledge ✓` (theirs, Bennui) / `I like very. ✗ → I like it very much. / I really like it. ✓` / `You go only you? ✗ → Are you going alone? ✓` (Roeland)
    - *Why:* Thai modifiers follow the noun (บ้านใหญ่), and มาก follows the verb with no object (ชอบมาก), which learners map word for word onto *like very*.
    - *Evidence:* [research-backed, qualitative] Bennui 2008 notes "head noun + modifier" reversal. Sentence structure ranked 3rd (Watcharapunyawong & Usaha 2013). *I like very* is [practitioner opinion].
12. **Serial verbs and infinitives**
    - *Examples:* `My parents want me read books every day. ✗ → want me to read ✓` (theirs, Bennui) / `I go buy food. ✗ → I'm going to buy food. / I'll go and buy food. ✓`
    - *Why:* Thai chains verbs with no linking word (ไปซื้อข้าว).
    - *Evidence:* [research-backed] Bennui 2008 (infinitive errors); infinitive/gerund ranked 12th (Watcharapunyawong & Usaha 2013). *go buy* is [practitioner opinion].
13. **Answering negative questions; final particles in English**
    - *Examples:* `You didn't go? — Yes. (meaning "I didn't") ✗ → No, I didn't. ✓` / `Call to me na. ✗ → Call me, OK? ✓` (Roeland)
    - *Why:* ใช่ agrees with the speaker's statement, not with the fact. นะ, ครับ and ค่ะ carry tone and politeness that English carries with *please*, *OK?* or intonation.
    - *Evidence:* [practitioner opinion] (Roeland; Wikipedia "Tinglish" on *na*, *ka*, *krub*).
14. **Pronunciation.** Each item is tagged separately.
    - **Final consonants (the core problem).** Thai allows only "/p, t, k, ʔ, m, n, ŋ, w, j/" in final position, and final stops are unreleased ([Naruemon 2012](https://research.ncl.ac.uk/media/sites/researchwebsites/arecls/naruemon_vol10.pdf); [Kanokpermpoon](https://so05.tci-thaijo.org/index.php/reflections/article/download/114263/88647)). Every other English final has to be replaced or dropped.
      - [research-backed] In a word list read by 27 Southern Thai undergraduates (A2), final-consonant accuracy was: /s/ **92.6%**, /tʃ/ 85.2%, /l/ **40.7%** (59.3% said as [w]), /f/ 22.2%, /ʃ/ 14.8% (66.7% → [tʃ]), /v/ **3.7%** (63% → [f], 33% → [p]), /z/ **3.7%** (81.5% → [s]), /dʒ/ **3.7%** (63% → [tʃ]). Final /d/ was deleted 70.4% of the time and /t/ 25.9%. Voiced finals were devoiced ([Pathanasin, Mansbridge & Pongprairat, *AJAC* 26(2)](https://ajaclibrary.wu.ac.th/index.php/ajac/article/download/77/34/145)). The authors attribute the stop deletion to Southern Thai, so it may not generalise.
      - [research-backed, abstract only] 142 Loei Rajabhat students: laterals had the highest difficulty rate (98.58%), then affricates (97.39%) and fricatives (77.30%). Common errors were substitution, devoicing, unaspiration, unreleased final stops and vowel epenthesis ([Thomma 2026](https://so17.tci-thaijo.org/index.php/JEL/article/view/2385)).
      - **Correction to the brief's list and OTHERS.md:** "final *l* → *n*" and "final *s* dropped / → *t*" are predictions and practitioner claims, not measurements. Kanokpermpoon predicts dark *l* → /n/ or omission and voiceless fricatives → Thai finals or omission. Globish says "/l/ often becomes /n/" ([Panyaroj 2022](https://medium.com/globish-education/thai-learners-problems-in-english-pronunciation-a34539e8eee3)). The Wikipedia Tinglish article says final *s* becomes "an occlusive 't'". The one measured study found **[w] for final /l/**, and **final /s/ mostly correct in careful word-list reading**. The `pron` lesson should teach both final *l* outcomes (*ball* ≠ *bow*, *bon*) and treat final -s as a fast-speech and grammar problem (`works`, `books`), not a sound learners cannot make.
      - [curriculum convention] Thai spelling itself teaches the mapping: Royal Society romanisation renders final ส as *t* and final ล as *n* (รส = *rot*, ศาล = *san*) ([TruePlookpanya, Royal Society transcription rules](https://www.trueplookpanya.com/knowledge/content/64904-laneng-lan-)). That is why Thai-script respellings of English inherit the error (§6).
    - **Clusters.** [research-backed, abstract only] 20 Thai adults reading 73 words (1,460 tokens) modified clusters mostly by **deletion**, then substitution, then epenthesis; sonority did not predict difficulty ([Iadkert & Chantarangkul 2023](https://so04.tci-thaijo.org/index.php/joling/article/view/257445)). Final clusters (*asked*, *months*, *works*) are where -s and -ed live.
    - **/v/ → /w/ (initial), /f/ (final).** *van* → /wɛn/ [practitioner opinion: Kanokpermpoon]. Final /v/ → [f]/[p] [research-backed: Pathanasin et al.]. Thai writes English *v* with ว (/w/), e.g. วีดีโอ for *video* ([TruePlookpanya loanwords](https://www.trueplookpanya.com/knowledge/content/81086)).
    - **/θ ð/ → /t d/ (or /s/).** *thin* → /tʰin/ [practitioner opinion: Kanokpermpoon]; *three* with [t] [practitioner opinion: Panyaroj 2022]; *noting* for *nothing* in spelling [research-backed, small: Naruemon 2012].
    - **/ʃ/ ↔ /tʃ/.** *shoe*, *shop* with Thai ช [practitioner opinion: Kanokpermpoon]; final /ʃ/ → [tʃ] in 66.7% [research-backed: Pathanasin et al.]. OTHERS.md's *church* → *shurch* (TEFL Academy) is the opposite direction; both occur.
    - **/z/ → /s/, /dʒ/ → /tʃ/, /g/ → /k/.** Thai has no /z ʒ dʒ g/. Final /z/ → [s] 81.5% and /dʒ/ → [tʃ] 63% [research-backed: Pathanasin et al.]. *good* → /kʊt/ [practitioner opinion: Kanokpermpoon]. Devoiced -s (/z/ → /s/) is harmless for meaning; teach it as secondary.
    - **/r/ and /l/.** Thai has a tap ร, but everyday Thai often merges ร into ล, and this transfers: *rain* → *lain* [practitioner opinion: Panyaroj 2022; Kanokpermpoon; Wikipedia "Tinglish"]. Roeland reports *rolly* for *lorry* and *lestaulant*.
    - **Stress, tones and rhythm.** Thai speakers "often give every syllable equal weight", hiding English stress (*RE-cord* vs *re-CORD*) [practitioner opinion: llexi]. Thai loanword habit puts prominence on the last syllable, and Thai-script respellings carry tone marks that learners then pronounce [practitioner opinion, inference; see the respellings in §6]. A CA-transcription intervention improved stress and intonation scores in 43 undergraduates [research-backed: [Dankanjanakpan & Sinwongsuwat 2025](https://so04.tci-thaijo.org/index.php/LEARN/article/view/282341)], which supports marking stress visibly.

## 5. Learner starting point

**Proficiency**
- [research-backed, self-selected online test-takers] **EF EPI 2025, Thailand: 402**, band "Very low", **rank 116 of 123**, global average 488.
  - Score and skills are from EF's fact sheet ([EF fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-thailand-english.pdf)). The rank printed in the fetched text was garbled, so the rank and band come from [The Thaiger](https://thethaiger.com/news/national/thailand-english-proficiency-2025), which reports a 13-point drop and "second to last in Asia".
  - **Correction to OTHERS.md**, which gives 415 (rank ≈106) as the 2025 figure. A 13-point drop to 402 means the previous score was 415, so 415 is the 2024 figure.
- **Skills (EF 2025): reading 416, listening 385, speaking 377, writing 363.** Reading leads, as for every Asian L1 so far, but **writing is the weakest skill**, unlike zh (listening) and vi/id (speaking).
- **Regions and cities:** Central 438, North 393, Northeast 389, South 370. Pattaya 474, Bangkok 467, Chiang Mai 453, Khon Kaen 429; Udon Thani 368. The tourism cities score highest [research-backed, EF sheet]. That tourism drives this is [practitioner opinion].
- [curriculum convention, news report] **O-NET** (the national test at Prathom 6, Mathayom 3 and Mathayom 6) shows the same floor: the Mathayom 6 English average was **27.76 / 100** for the 2016 academic year ([The Nation](https://www.nationthailand.com/news/30309764)). No newer national average was found in a fetched page (§11).

**School and policy** [curriculum convention unless tagged]
- English is a school subject from primary school; Grades 1–6 are primary (ประถม), 7–9 lower secondary and 10–12 upper secondary ([TIMSS 2015 encyclopedia](https://timssandpirls.bc.edu/timss2015/encyclopedia/countries/thailand/)). OBEC once raised English for Prathom 1–3 from 1 to 5 hours a week, with "listening, speaking, reading and writing" in balance ([Bangkok Post](https://www.bangkokpost.com/thailand/general/1002685/obec-orders-english-class-hours-boost); the article's year is not shown).
- Policy sets CEFR targets "from A1 at Grade 6 to C1 or higher at the graduate level", and universities must assess English before graduation through OHEC (2016) and MHESRI (2024) announcements. Wudthayagorn calls the result "fragmented responsibilities, unrealistic expectations, and contradictory outcomes" ([Wudthayagorn 2025, *LEARN*](https://so04.tci-thaijo.org/index.php/LEARN/article/view/282280)) [research-backed: policy review].
- Learners report that classes "focused on grammar rather than pronunciation", and some had "never studied" English pronunciation ([Pathanasin et al.](https://ajaclibrary.wu.ac.th/index.php/ajac/article/download/77/34/145), interviews) [research-backed, small]. Spelling is not taught systematically either: "there is no systematic spelling instruction in English language teaching in Thailand" ([Naruemon 2012](https://research.ncl.ac.uk/media/sites/researchwebsites/arecls/naruemon_vol10.pdf)) [practitioner opinion].
- **Exams and motivators** [practitioner opinion unless tagged; none of these was verified on a fetched exam-board page, §11]:
  - O-NET (above), and the university-admission tests (TCAS track) for school leavers;
  - university English exit tests (CEFR-mapped; TOEIC or in-house tests) and **TOEIC** for jobs;
  - **IELTS** for study abroad;
  - **tourism and service work**: hotels, restaurants, massage and retail in Bangkok, Phuket, Pattaya and Chiang Mai, where English is spoken with customers every day.
  - Familiar formats: 4-option multiple choice and gap-fill dominate Thai tests [practitioner opinion]. They map onto mc / fill; tiles and typed English will be newer.

**Implications for the app** [practitioner opinion, inference]
1. **True beginners as often as false beginners.** At "Very low", many adults know the school terms but cannot produce a correct A1 sentence. Keep the A1 pace of ko-en; do not compress as zh does. Lesson bodies can be slightly longer, with one more worked example per point.
2. **Writing is the weakest skill:** weight typed items (fill, type) and keep `why` lines concrete.
3. **Audio first for endings.** Every row has audio and IPA with every final written. The `pron` lesson and the reweighted `third-s` and `past` lessons tie endings to grammar.
4. **Service English sells.** Use real service situations in examples (hotel front desk, restaurant, shop, taxi) and say where a phrase is "ใช้กับลูกค้าได้" (fine with customers). TOEIC-style office vocabulary goes in the work deck. Never promise score gains.
5. **Do not gate on articles, -s or tense.** All three persist in university writing (Watcharapunyawong & Usaha 2013; Suraprajit 2021).

## 6. Pronunciation aid policy

**Evidence and practice**
- **What Thai learners already use: Thai-script respelling (คำอ่าน).** Thai education portals give English words with Thai-script readings and no IPA: *effect* «อิ-เฟ็คท์», *island* «ไอ-เลินด์», *sword* «ซอร์ด», *value* «แฟล-ยิ่ว», *jewelry* «จูวล์-รี่» ([TruePlookpanya, 10 commonly mispronounced words](https://www.trueplookpanya.com/learning/detail/29971)). Loanwords are spelled the same way, with karan (์) on final letters: เกมส์, อีเมล์, กอล์ฟ, ฟิสิกส์ ([TruePlookpanya loanwords](https://www.trueplookpanya.com/knowledge/content/81086)) [curriculum convention].
- **Why respelling fails for exactly the Thai problems** [practitioner opinion, inference from the sources cited]:
  1. **It cannot write the finals.** Thai reading rules turn final ส / ซ into /t/ and final ล into /n/ (Royal Society romanisation: รส = *rot*, ศาล = *san*, [TruePlookpanya](https://www.trueplookpanya.com/knowledge/content/64904-laneng-lan-)). Karan (์) means "do not pronounce this letter", so «ไอ-เลินด์» and «อิ-เฟ็คท์» literally tell the reader to *drop* the /d/ and /t/. The respelling encodes the error that §4.14 measured.
  2. **It has no letters for /v z θ ð ʃ ʒ dʒ g/.** The portal's own *value* → «แฟล-ยิ่ว» writes /v/ as ฟ (/f/), and Thai spells English *v* with ว (/w/), as in วีดีโอ. Learners would read /v/ → /f/ or /w/, the documented substitutions.
  3. **It carries Thai tones.** «ยิ่ว», «รี่» have tone marks, and every Thai syllable has a tone, so a Thai reading imposes Thai pitch on English, where stress, not tone, matters (§4.14).
  4. **Clusters** need ad-hoc conventions (ควบกล้ำ covers only a few onsets, and nothing covers final *-sks* or *-nθs*).
- **IPA is known, partly.** Thai prep sites teach English sounds with IPA between slashes, labelled in Thai: «/iː/ | see, meet | สระยาว อี», «/æ/ | cat, bad | สระแบน แอ» ([Prep Edu Thai](https://prepedu.com/th/blog/english-pronunciation-exercises)) [curriculum convention]. How many adults read IPA is **not measured**. Interviewees say school taught grammar, not pronunciation (§5), so assume familiarity with the common symbols only.
- **No study compares IPA, Thai respelling and no aid for Thai learners.** The decision below is inference [practitioner opinion].

**Decision: IPA in every `pron` field (`"pron": "required"`), written exactly as the Chinese course writes it.** It is shown by default and hidden with the toggle «แสดงคำอ่าน (IPA)». The `pron` lesson teaches the key on one screen with the Thai approximations below.
- **Why IPA:** it writes every final, cluster and voiced sound that Thai lacks, and it carries no tone marks. Stress (ˈ) replaces the pitch habit with the English cue.
- **Why exactly zh's notation:** the shared English strings are identical, so most transcriptions can be **copied from `tools/content/zh/`** (decks.js, extra.js, lessons.js, more/*.js). The rules are already settled and checked by `tools/content/zh/pron_check.js`. Copy `tools/content/zh/PRON-RULES.md` and `pron_check.js` into `tools/content/th/` (the lead's step); they are binding for th-en as written. Where zh.md §6 and PRON-RULES.md differ, **PRON-RULES.md wins** (e.g. syllabic *student* /ˈstuːdnt/).
- **Why not `optional` or `none`:** finals are the core problem and the aid is how learners see them. An empty pron also needs untested engine rendering (PIPELINE §3).
- **Why not a hybrid** (IPA plus a Thai hint in the same field): the pattern forbids it, the lint requires one aid per English text, and the Thai hint would reintroduce the tone and final-consonant problem. Thai approximations belong in the `pron` lesson body and card `note`s only.

**Rules for the `pron` field** (summary; the full text is zh.md §6 rules 1–10 plus PRON-RULES.md):
1. **Format.** One pair of slashes per row, words separated by one space, no punctuation, capitals or digits. Two sentences in one row are separated by ` ‖ ` (U+2016), never `|`. Alternatives are two slashed groups separated by one space: `/ˌfɪfˈtiːn/ /ˈfɪfti/`. Never `//`.
2. **Stress.** The closed function-word list (articles, personal and possessive pronouns, *be*, auxiliary *do/have*, modals, prepositions, conjunctions, existential *there*) stays unmarked. **Every other word gets ˈ, monosyllables included**: `/ˈjes/`, `/aɪ ˈlaɪk ˈtiː/`. A stressed function word takes its strong form and ˈ (`Me too.` /ˈmiː ˈtuː/). Phrasal-verb particles take ˈ (`Turn off` /ˈtɜːrn ˈɔːf/). ˌ appears only in long words, -teen numbers and letter-by-letter abbreviations.
   - For Thai learners, ˈ on monosyllables also shows which words carry the beat, against the equal-syllable, final-prominence habit (§4.14).
3. **Notation: OALD North American values in the school symbol set** (zh.md §6 rule 4): iː ɪ e æ ʌ ə ɑː ɔː uː ʊ ɜːr ər, eɪ aɪ ɔɪ aʊ oʊ, ɪr er ʊr ɑːr ɔːr, unstressed final i / u. ASCII `g`, plain `r`, no flap symbol, no ɚ ɝ ɡ ɹ.
4. **Weak forms** as in PRON-RULES.md §B (a /ə/, the /ðə/ or /ði/, to /tə/, can /kən/, you /ju/, your /jʊr/…).
5. **Codas always in full** — the rule that matters most for Thai. Write every final consonant and cluster, -s as /s z ɪz/, -ed as /t d ɪd/, with no inserted vowel: `works` /ˈwɜːrks/, `watched` /ˈwɑːtʃt/, `asked` /ˈæskt/, `months` /ˈmʌnθs/.
6. **Numbers, names, abbreviations:** numbers as words; abbreviations letter by letter; Thai names and places **as the en-US voice says them** (approximations; the content agent listens to each once, §11): Ploy /ˈplɔɪ/, Mint /ˈmɪnt/, Bank /ˈbæŋk/, Nok /ˈnɑːk/, Bangkok /ˈbæŋkɑːk/, Chiang Mai /ˌtʃɑːŋ ˈmaɪ/, Phuket /ˌpuːˈket/, Pattaya /pəˈtaɪə/, baht /ˈbɑːt/, pad thai /ˌpɑːd ˈtaɪ/, tom yum /ˌtɑːm ˈjʌm/.
7. **No aid in practice items** (PRACTICE-SPEC). IPA appears in cards, idioms and `{{ex:}}` rows. Lesson bodies, `why` and notes may name a sound («เสียง /z/ ท้ายคำ»), but never two adjacent slashes: write «/s/ /z/ หรือ /ɪz/» with spaces, never «/s//z/».

**The key for the `pron` lesson** (IPA symbol → Thai approximation → example). The Thai column is a teaching aid for the lesson body only; it never goes into a `pron` field. "ไม่มีในภาษาไทย" marks sounds Thai lacks, where the Thai letter learners reach for is the error.

| IPA | Thai approximation (lesson prose only) | Example |
|---|---|---|
| iː / ɪ | สระอี ยาว / สระอิ สั้น | leave /ˈliːv/, live /ˈlɪv/ |
| e / æ | สระเอะ / สระแอ อ้าปากกว้างกว่า | bed /ˈbed/, bad /ˈbæd/ |
| ʌ / ə | สระอะ / เสียงเออะ เบา ๆ ในพยางค์ที่ไม่เน้น | cup /ˈkʌp/, about /əˈbaʊt/ |
| ɑː / ɔː | สระอา / สระออ | hot /ˈhɑːt/, talk /ˈtɔːk/ |
| uː / ʊ | สระอู / สระอุ | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | เออ แล้วม้วนลิ้น r / เออร์ เบา ๆ | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ aʊ oʊ | เอ(อิ) ไอ ออย เอา โอ(อุ) | day, my, boy, now, go /ˈgoʊ/ |
| i / u (unstressed) | อิ / อุ สั้น ไม่เน้น | very /ˈveri/, movie /ˈmuːvi/; weak *you* in *Thank you* /ˈθæŋk ju/ |
| p t k / b d | พ ท ค / บ ด — ท้ายคำต้องปล่อยเสียงให้ได้ยิน ไม่กักไว้แบบไทย | stop /ˈstɑːp/, bed /ˈbed/ |
| g | ไม่มีในภาษาไทย: ก ที่สั่นเส้นเสียง ไม่ใช่ ค | good /ˈgʊd/ |
| f / v | ฟ / ไม่มีในภาษาไทย: ฟ ที่สั่นเส้นเสียง ฟันบนแตะริมฝีปากล่าง ไม่ใช่ ว | fan /ˈfæn/, very /ˈveri/ |
| θ / ð | ไม่มีในภาษาไทย: ปลายลิ้นแตะฟันบน ลมผ่าน (θ ไม่ก้อง ð ก้อง) ไม่ใช่ ท ซ ด | think /ˈθɪŋk/, this /ˈðɪs/ |
| s / z | ซ / ไม่มีในภาษาไทย: ซ ที่สั่นเส้นเสียง | bus /ˈbʌs/, zoo /ˈzuː/ |
| ʃ / ʒ | ไม่มีในภาษาไทย: ชู่ว ลมเสียดยาว ไม่มีจังหวะกัก / แบบเดียวกันแต่ก้อง | shop /ˈʃɑːp/, usually /ˈjuːʒuəli/ |
| tʃ / dʒ | ช / ไม่มีในภาษาไทย: จ ที่สั่นเส้นเสียง | check /ˈtʃek/, job /ˈdʒɑːb/ |
| m n ŋ | ม น ง | sing /ˈsɪŋ/ |
| l | ล — ท้ายคำต้องยกปลายลิ้นแตะปุ่มเหงือก ไม่ใช่ น หรือ ว | fill /ˈfɪl/, ball /ˈbɔːl/ |
| r | ร แบบอเมริกัน: ม้วนลิ้น ไม่แตะ ไม่รัว และไม่ใช่ ล | rice /ˈraɪs/ |
| w j h | ว ย ฮ | wet /ˈwet/, yes /ˈjes/ |
| ˈ | เครื่องหมายเน้นเสียง: พยางค์ถัดไปดังและยาวกว่า ภาษาอังกฤษไม่มีวรรณยุกต์ | about /əˈbaʊt/ |

**Validator** (profile.json, all tested in `node` on the rows below):
- `nativeScript`: `[ก-ฺเ-๎]`. That is Thai consonants, vowels and marks; it **excludes ฿ (U+0E3F) and Thai digits**, so «฿250» does not count as Thai and an English string never contains them. The ko-en pack has 0 characters in the Thai block.
- `pronScript`: `ˈ`, so the pron test does not ask for Thai script. Every pron contains ˈ (rule 2), and it must also differ from the English.
- `pronPattern`: copied **byte for byte** from `tools/content/zh/profile.json`: `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. Tested to reject `/pen/` (no stress), `/ˈyes/`, `/ˈjes?/`, `//`, `/ˈɡet/` (U+0261), a missing slash, and a double space between groups.
- `labels.cueTest` is the same Thai class, so cue injection and the "mc `q` / type `hint` has Thai" check mean real Thai.

**Worked examples.** Rows marked "zh" are copied verbatim from `tools/content/zh/` and use shared ko-en English. Rows marked "new" are th-only additions for the `pron` lesson or decks. All 25 pass `pronPattern`, `pronScript`, "differs from English" and contain no Thai.

| English | `pron` | Rules shown |
|---|---|---|
| Hello. | /həˈloʊ/ | zh; 3 GOAT oʊ, stress inside the word |
| Thank you. | /ˈθæŋk ju/ | zh; θ (not ท / ซ), weak *you* |
| I'm a student. | /aɪm ə ˈstuːdnt/ | zh; PRON-RULES A4 syllabic n, coda /nt/ written |
| Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | zh; 4 weak *can*, ð, no `?` |
| Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | zh; final /rd/ in full |
| How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | zh; /z/ in *is*, final /s/ in *this* |
| Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | zh; the polite form of Tinglish *check bill*; final /z/ |
| I'm bored. | /aɪm ˈbɔːrd/ | zh; the *bored / boring* card (`tinglish`) |
| Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | zh; v, θ inside a word, weak *was* |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | zh; ‖ between sentences, final /v/ and /g/ |
| Where are you from? | /ˈwer ər ju frʌm/ | zh; PRON-RULES C3 stranded preposition, strong form, no ˈ |
| Same here. | /ˈseɪm ˈhɪr/ | zh; replaces Tinglish *same same* |
| Me too. | /ˈmiː ˈtuː/ | zh.md §6; stressed function word |
| three / tree | /ˈθriː/ · /ˈtriː/ | zh; θ vs t |
| very / wary | /ˈveri/ · /ˈweri/ | zh; v vs w (Thai ว) |
| bus / but | /ˈbʌs/ · /ˈbʌt/ | new; final /s/ vs Thai final ส = /t/ |
| fill / fin | /ˈfɪl/ · /ˈfɪn/ | new; final /l/ vs Thai final ล = /n/ |
| ball | /ˈbɔːl/ | new; final /l/, not [w] (Pathanasin et al.) |
| shoe / chew | /ˈʃuː/ · /ˈtʃuː/ | new; ʃ vs tʃ |
| He works at a hotel. | /hi ˈwɜːrks ət ə hoʊˈtel/ | new; third-person -s in the cluster /rks/ |
| I watched a movie. | /aɪ ˈwɑːtʃt ə ˈmuːvi/ | new (zh.md has *We watched a movie*); -ed = /t/ |
| Turn off the light. | /ˈtɜːrn ˈɔːf ðə ˈlaɪt/ | new; replaces Tinglish *close the light*; PRON-RULES C4 particle stressed |
| My name is Ploy. | /maɪ ˈneɪm ɪz ˈplɔɪ/ | new; Thai nickname as the voice says it |
| I live in Chiang Mai. | /aɪ ˈlɪv ɪn ˌtʃɑːŋ ˈmaɪ/ | new; place name, ˌ inside a name |
| Three hundred baht. | /ˈθriː ˈhʌndrəd ˈbɑːt/ | new; currency word, number as words |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "คำนำหน้านาม|นามพหูพจน์|รูปพหูพจน์|นับได้|นับไม่ได้" }`. No `flags` are needed, because Thai has no letter case.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain one keyword. Put the competing tile in `x` (`a`, `the`, `book` / `books`), as the validator counts items by `x` (id.md §7 describes the heuristic).

**Why these five keywords, and not bare พหูพจน์:**
- **คำนำหน้านาม** is the article term (§3).
- **นามพหูพจน์** matches «คำนามพหูพจน์», and **รูปพหูพจน์** matches «เป็นรูปพหูพจน์».
- **Bare «พหูพจน์» is excluded on purpose.** The school phrase for agreement is «ประธานพหูพจน์» (plural subject), and the third-person -s phrase «ประธานเอกพจน์บุรุษที่ 3» is the secondary emphasis. A bare keyword would let agreement `why` lines count toward the article/plural rule. Tested: «ประธานพหูพจน์ they ใช้กริยาไม่เติม -s» does not match.
- **นับได้ / นับไม่ได้** match «คำนามนับได้ / คำนามนับไม่ได้». Both are listed because «นับไม่ได้» does not contain «นับได้».
- The keywords contain no spaces or invisible characters. Text must be NFC with ำ as U+0E33 (§2), or the match fails.

**Sample `why` lines** (plain text, English bare between spaces; all tested in `node` against the regex):
- «teacher เป็นคำนามนับได้เอกพจน์ ต้องมีคำนำหน้านาม a»
- «หลัง two คำนามต้องเป็นรูปพหูพจน์: books»
- «information เป็นคำนามนับไม่ได้ จึงไม่เติม -s และไม่ใช้ a»
- «พูดถึงครั้งที่สอง ทั้งสองฝ่ายรู้แล้วว่าหมาตัวไหน จึงใช้คำนำหน้านาม the»
- «these ใช้กับคำนามพหูพจน์ this ใช้กับของชิ้นเดียว»
- «พูดถึงสัตว์ทั้งประเภท ใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม: Dogs are loyal.»

Lines that correctly do **not** match (tested): «ประธานพหูพจน์ they ใช้กริยาไม่เติม -s», «มี yesterday ก็ต้องใช้กริยาช่อง 2: went», «คำคุณศัพท์ต้องมี Verb to be นำหน้า: She is tired.», «ลักษณนามภาษาไทยไม่มีในภาษาอังกฤษ».

**Justification:**
- **Both systems are absent from Thai, and both show up in every fetched error study.** Articles ranked 4th and singular/plural 7th of 16 categories in paragraph writing, and articles were 1st in two of three genres (Watcharapunyawong & Usaha 2013). Article omission was the most frequent surface error in Suraprajit 2021. Articles were 8.9% of spoken errors, mostly omissions (Pawabutra & Sutakote 2024) [research-backed].
- **Zero parity cost.** The shared `order` and `type` items were written to the Korean rule, so only the Thai `why` must name the point [practitioner opinion; consequence of PILOT-SPEC §1.6]. zh, vi and id reached the same conclusion.
- **Why not `verb-core`, given that agreement (25.3%), verb form (17.7%) and tense lead the spoken data?**
  - That ranking comes from one 43-student speech sample; in writing, agreement ranked 14th of 16 (Watcharapunyawong & Usaha). The two studies disagree, and the article/plural evidence is the one that recurs across all four.
  - `verb-core` is built around Spanish do-support and inversion. Switching would need item changes and deviations in up to 39 sets (the es problem in PIPELINE §6).
  - Tense is lesson-specific. A tense hinge in `countable` or `articles` would be artificial.
  - OTHERS.md proposed third-person -s "as a secondary check because it is the top measured error". This profile agrees, as a `why` emphasis below. A combined kind (article/plural + agreement) would fit Thai best, as it would vi; it is not implemented (§11).

**Secondary emphasis (not validated; do not add these words to `keywords`):**
- If an item also turns on third-person -s, its `why` names **ประธานเอกพจน์บุรุษที่ 3**: «ประธานเอกพจน์บุรุษที่ 3 (she) กริยาต้องเติม -s: works».
- If it turns on tense, the `why` names the tense or the verb column and says the time word does not replace it: «มี yesterday ก็ต้องใช้กริยาช่อง 2: went».
- If it turns on *be*, it names **Verb to be**: «คำคุณศัพท์ต้องมี Verb to be นำหน้า: She is tired.»
- If a distractor is *he* against *she*, the `why` says «ผู้หญิงใช้ she» (§4.9).
- Use the five keywords only in `why` lines of items that really hinge on articles or plurals, so the count stays meaningful.

**Prompt frames (`labels.cueTest`).** cueTest is the Thai-letter class, so any Thai text satisfies it, and the DSL appends « ช่องว่างควรเติมคำใด» only to a bare-English mc question. ko-en has 32 bare-English mc questions and 23 bare-English type hints that rely on injection (PIPELINE §3). For translation questions, writers should write a Thai frame instead of relying on the appended cue, which suits only gap questions:
- meaning: «“ฉันเป็นครู” ภาษาอังกฤษพูดว่าอย่างไร» / «คำว่า “พัดลม” ภาษาอังกฤษคือ»
- forms: «กริยาช่อง 2 ของ go» / «รูปพหูพจน์ของ box»
- find the error: «ประโยคไหนผิด»
- choose: «เลือกประโยคที่ถูกต้อง»
- type hints end with « — » plus a short Thai note («two · books — มี two จึงเป็นรูปพหูพจน์»), or the DSL appends « — ใช้คำเหล่านี้», which is acceptable.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions** (as in zh, vi and id):
- **keep** = a fresh Thai explanation from the Thai point of view, with English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice. The Thai explanation and the **lesson-body** example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed. **No change to a check or practice string is proposed for any of the 39 lessons**, so the English side stays identical to ko-en.
- **add** = a new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy the standing rule (§7).

Ids and order are unchanged; nothing is replaced or dropped. The two additions slot in after `smalltalk` and after `perfect`.

| lesson id | keep / reweight / add | note for Thai speakers |
|---|---|---|
| pron | reweight | Teach the IPA key (§6) on one screen, with ˈ = เน้นเสียง and "English has no tones". Thai set, finals first: final /s/ ≠ Thai ส-final /t/ (*bus / but*), final /l/ ≠ ล-final /n/ and ≠ [w] (*fill / fin*, *ball*), voiced finals (*bag / back*, *dog / dock*), clusters (*asked*, *months*), θ (*three / tree*), v ≠ ว (*very / wary*), ʃ ≠ ช (*shoe / chew*), z ≠ ซ. The shared rice / lice and right / light are central for Thai (ร → ล); think / sink fits (θ → s/t); vote / boat and fan / pan target no Thai contrast, so the `why` lines say so briefly and the extra pairs go in body rows |
| be | reweight | Core lesson. เป็น links only nouns; adjectives need *be*: «เธอสวยมาก» → She's very beautiful (`She very beautiful ✗`). Mirror trap, measured: no *be* before a main verb (`I am go ✗`, 9.5% double marking in Pawabutra & Sutakote). Ask "is there another verb besides *be*?" (PHASE2-BRIEF) |
| it-there | reweight | มี = *have* and *there is*: «มีร้านอาหารเยอะ» → There are many restaurants (`Have many restaurants ✗`). «ฝนตก» → It's raining; «ร้อน» → It's hot: English needs the dummy subject Thai drops |
| articles | reweight | Thai has no คำนำหน้านาม, and the evidence says Thai learners **omit** (§4.4). หนึ่ง ≠ *a*; jobs take *a* (`I am student ✗`). Classifiers (คน, ตัว, อัน) are not articles |
| plurals | reweight | Number + ลักษณนาม vs -s: «หนังสือ 3 เล่ม» → three books (no classifier, but -s). Reduplication (เด็ก ๆ) is optional; -s is not. The -s must be heard: /s z ɪz/ preview |
| present | reweight | SVO matches Thai; say so and move on. Spend the time on *be* + verb (`I'm study ✗`, Roeland) and frequency adverbs (always, usually before the main verb) |
| questions | reweight | ไหม / หรือเปล่า at the end → *Do / Does* at the start (`You like coffee? ✗`). Wh-word first, not where the answer goes: «คุณไปไหน» → Where are you going? (`What time you will come? ✗`, Pawabutra & Sutakote) |
| third-s | reweight | The largest measured spoken error (25.3%). Name it ประธานเอกพจน์บุรุษที่ 3; say outright that knowing the rule ≠ saying the s; tie it to the final /s z/ of `pron` |
| prep | reweight | ที่ / ใน cover in / on / at; on Monday, at 7, in the taxi (`at the taxi ✗`); กับ ≠ always *with* (`stay with home ✗`, Bennui) |
| countable | reweight | Thai counts every noun with a ลักษณนาม, so nothing signals "uncountable": information, advice, homework, furniture, money, knowledge (`many knowledge ✗`, Bennui). *a piece of* works like a classifier, but only for uncountables. *a few / a little* (`a little friends ✗`) |
| object-have | reweight | เขา = *he* and *she*: "My sister… He ✗ → She". Thai drops objects: `I like. ✗ → I like it.` มี recap (have vs there is) |
| can-like | reweight | can + V1 (`I can went ✗`). «ชอบมาก» → I like it very much / I really like it (`I like very ✗`). like + -ing |
| polite | reweight | ครับ / ค่ะ have no English equivalent; English politeness lives in *could / would / please*. «ขอ…หน่อย» → Could I have…? Bare imperatives sound bossy in English even when Thai softens them with นะ. Preview *Check, please* (not *Check bill*) |
| continuous | reweight | กำลัง ≈ be + -ing, but *be* is obligatory (`She studying ✗`, Pawabutra & Sutakote). No -ing on state verbs (`I'm knowing ✗`) |
| past | reweight | Key lesson. เมื่อวาน and แล้ว do not replace -ed (`Yesterday I eat ✗`). *did* + V1, never *did* + V2 (`didn't went ✗`). Say the -ed: /t d ɪd/, shown in the IPA |
| irregular-past | keep | Drill typed recall; warn against `goed ✗` (Pawabutra & Sutakote) |
| the | keep | นี้ / นั้น ≠ *the*; first mention *a*, then *the*. Matches the `articles` reweight |
| adjectives | reweight | Adjective before the noun: «บ้านใหญ่» → a big house (`knowledge better ✗`, Bennui). กว่า → -er than / more … than; `more bigger ✗` |
| going-to | keep | จะ covers both *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap built on «คำบอกเวลาไม่ได้แทน Tense»: time words go *with* a tense, never instead of it. Preview `time-markers` |
| joining | reweight | Paired Thai connectors: «เพราะ… จึง…» → *because* **or** *so*; «ถึงแม้… แต่…» → *although* **or** *but* (`Although it rained, but… ✗`) [practitioner opinion]. Body examples only |
| numbers | reweight | Thai has words for 10,000 (หมื่น) and 100,000 (แสน), English does not: conversion table. Baht prices («300 บาท» → three hundred baht). **Buddhist Era:** พ.ศ. 2569 = 2026, and Thai apps show พ.ศ. (§10). Dates: day/month in Thai vs month/day in US English. 13 vs 30 by stress |
| smalltalk | reweight | «ไปไหนมา», «กินข้าวหรือยัง» are greetings in Thai but real questions in English. Avoid weight, age, salary and marital status as openers (comments on weight are casual in Thai, rude in English). Safe topics: weather, food, travel, weekend, work. Deck localised (§9) |
| **tinglish** | **add** (after `smalltalk`, end of A1) | See "Additions" below |
| past-continuous | keep | |
| will | keep | จะ ≈ *will* for decisions, offers and promises |
| perfect | reweight | เคย → *Have you ever…? / I've been to…*; Tinglish `I used to go Phuket` means *I've been to Phuket* (Wikipedia "Tinglish"). แล้ว is not always *have done*: «ฉันกินแล้วเมื่อวาน» → I ate yesterday (finished time = Past Simple) |
| **time-markers** | **add** (after `perfect`, A2) | See "Additions" below |
| modals | reweight | ต้อง = must / have to; ควร = should; อาจจะ = might (and maybe); ไม่ต้อง = *don't have to*, not *mustn't* |
| to-ing | reweight | Thai chains verbs with no link (ไปซื้อ, อยากให้…อ่าน): `want me read ✗ → want me to read` (Bennui); `go to shopping ✗ → go shopping` (Roeland). Keep the PHASE2 -ing heading fix (*finish*, *mind*) |
| articles-2 | reweight | Generic plurals take no article: «หมาซื่อสัตย์» → Dogs are loyal (not `Dog is loyal` or `The dog is loyal`). Instruments, sports, countries as ko |
| first-conditional | keep | «ถ้า… ก็…»: English drops the *then* word and uses no *will* after *if* |
| relative | reweight | Good news: ที่ / ซึ่ง follow the noun, as *who / that* do. Trap: ที่ also means *at*, so learners write `the place at I live ✗`; teach *where* / *that* for places. who vs which vs that |
| phrasal | keep | |
| perfect-2 | reweight | «ฉันอยู่ที่นี่มา 5 ปีแล้ว» → I've lived here for five years (`I live here 5 years already ✗`). มาตั้งแต่ = since, มา … แล้ว = for |
| narrative | keep | |
| conditionals | keep | Label as ประโยคเงื่อนไขแบบที่ 2 / 3 |
| passive | reweight | ถูก is mostly adverse (ถูกขโมย), and Thai prefers active sentences. English passive needs *be* + V3 with the tense: `The house built in 1990 ✗ → was built` |
| reported | keep | |
| email | reweight | Thai letter formulas «เรียน…», «ขอแสดงความนับถือ» → Dear / Hi + name, Best regards. Names: Thais are addressed by first name (คุณสุดา), so in English write *Dear Suda* or *Hi Suda*; *Mr./Ms.* + surname for foreigners. Sign with first name and surname; a nickname only with colleagues |
| idioms | keep | |

**Totals:** 39 existing lessons (23 A1, 9 A2, 7 B1): **11 keep** (irregular-past, the, going-to, past-continuous, will, first-conditional, phrasal, narrative, conditionals, reported, idioms) and **28 reweight**. None dropped. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 24 and A2 to 10. Every verdict is [practitioner opinion] grounded in the §4 contrasts; only `third-s`, `past` / `tense`, `be` (double marking), `articles` (omission) and `countable` / `plurals` have fetched Thai data behind the emphasis.

**Additions**

1. **`tinglish`: «ภาษาอังกฤษแบบไทย: คำที่คนไทยพลาดบ่อย»** (after `smalltalk`; deck «กับดักภาษาอังกฤษแบบไทย», §9).
   - *Reason:* word choice is the **2nd** largest L1-interference category in Thai writing (Watcharapunyawong & Usaha 2013), and Bennui 2008 found literal translation at word level. Tinglish expressions are widely recognised (The Nation 2025; Roeland 2007). No ko-en lesson covers them. It mirrors zh `chinglish`, id `indo-english`, ja `katakana-english` and es `false-friends`.
   - *Content outline:*
     1. Verbs translated word for word: เปิด / ปิดไฟ → *turn on / off the light*; ไปช้อปปิ้ง → *go shopping* (no *to*); เล่นเฟซบุ๊ก / เล่นมือถือ → *be on Facebook / my phone*; เช็กบิล → *Check, please*.
     2. Thai-English words that English speakers do not use: *same same* → *the same / similar / Same here*; *fitness* → *the gym*; *hi-so* → *posh*; *American share* → *split the bill*.
     3. -ed vs -ing feelings: *I'm bored / interested* vs *boring / interesting* (`I am interesting in this topic ✗`, Pawabutra & Sutakote).
     4. Answering negative questions: «ใช่ ไม่ได้ไป» → *No, I didn't.*
     5. Particles: นะ / ครับ / ค่ะ do not go into English; use *please*, *OK?* or a question tag.
   - *Practice that meets §7* (order and type items built on noun phrases, with an article or plural twin in `x`):
     - order `p:"ปิดไฟหน่อย"`, `a:["Turn","off","the","light"]`, `x:["a"]`, why «ไฟดวงที่ทั้งสองคนรู้ ใช้คำนำหน้านาม the และใช้ turn off ไม่ใช่ close»
     - order `p:"เราหารค่าอาหารกัน"`, `a:["We","split","the","bill"]`, `x:["a"]`, why «บิลของมื้อนี้ที่รู้กันอยู่ ใช้คำนำหน้านาม the»
     - type `p:"ฉันไปช้อปปิ้งทุกสุดสัปดาห์ (ใช้ on)"`, `a:["I go shopping on weekends"]`, `x:["weekend"]`, why «on weekends ต้องเป็นรูปพหูพจน์ และไม่มี to หน้า shopping»
     - type `p:"ขอเช็กบิลหน่อย"`, `a:["Can I get the check","Check, please"]`, `x:["a"]`, why «the check คือบิลของโต๊ะนี้ ใช้คำนำหน้านาม the»
   - *Parity:* new lesson id plus a new deck (`extraLessons` and a `decks["count"]` deviation).
2. **`time-markers`: «เวลาอยู่ที่กริยา: แล้ว กำลัง จะ เคย ยัง»** (after `perfect`, A2; deck «คุยเล่น»). Same id and structure as id-en's `time-markers`, so outline and practice shapes can be shared.
   - *Reason:* tense is the **1st** L1-interference category in Thai writing (Watcharapunyawong & Usaha 2013) and 12.7% of spoken errors, with verb form (17.7%) and double marking (9.5%) beside it (Pawabutra & Sutakote 2024). The Tinglish *present + already* pattern maps แล้ว onto *already*. ko-en has no lesson that starts from aspect markers. It goes after `perfect` so every form it maps onto has been taught. This is the grammar gap that most needs its own lesson.
   - *Content outline:* a table mapping each Thai word to its English form, then the two rules Thai lacks.
     - กำลัง → *be* + -ing (and *be* cannot be dropped);
     - จะ → *will* / *be going to*;
     - แล้ว → Past Simple with a finished time (*I ate*), or *have* + V3 when it matters now (*I've already eaten*); never *already* + V1;
     - เคย → *have ever* + V3 (experience); also *used to* for past habits, never for "been there once";
     - ยัง … ไม่ / ยังไม่ได้ → *haven't … yet*; เพิ่ง → *just*;
     - Rule 1: **a time word does not replace the verb form** («เมื่อวานฉันไป» → Yesterday I went).
     - Rule 2: **with no time word, English still has to choose a Tense**, so read the context.
   - *Practice that meets §7:* `I've already bought the tickets` (x `ticket`), `She's baking a cake` (x `the`), `I haven't read the books yet` (x `book`), `Have you ever been to a night market?` (x `the`).
   - *Parity:* new lesson id only.

**Considered and not added:**
- A `final-sounds` lesson like vi-en's: endings are the core Thai pronunciation problem, but the limit is two additions, and the `pron`, `plurals`, `third-s` and `past` reweights plus the IPA codas cover it. It is the first candidate if the lead allows a third.
- A he/she lesson: `object-have` and a secondary `why` cover it; the evidence is practitioner-only.
- A *be* lesson: `be` is reweighted to centre on it.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | th-en (English side) | Thai side |
|---|---|---|
| Minji (and other Korean names) | **Ploy** (main); alternates Mint, Bank, Nok, Fern, Beam | พลอย, มิ้นท์, แบงก์, นก, เฟิร์น, บีม |
| Mr. Kim / formal names | Ms. Suda, Mr. Somchai in work scenes (first name, the Thai custom; §8 `email`) | คุณสุดา, คุณสมชาย |
| Seoul | **Bangkok** | กรุงเทพฯ |
| Busan | **Chiang Mai** (alternates Phuket, Pattaya, Khon Kaen, Hat Yai) | เชียงใหม่, ภูเก็ต, พัทยา, ขอนแก่น, หาดใหญ่ |
| Jeju / beach trips | Phuket, Krabi, Koh Samui | ภูเก็ต, กระบี่, เกาะสมุย |
| Seoul National University | "a university in Bangkok" (generic; no real university name) | |
| kimchi, bibimbap | pad thai, papaya salad (som tam), tom yum, mango sticky rice, Thai iced tea | ผัดไทย, ส้มตำ, ต้มยำ, ข้าวเหนียวมะม่วง, ชาเย็น |
| K-pop, K-drama | Thai dramas, Thai pop, Thai boxing, football (genres, never artists) | ละครไทย, เพลงไทย, มวยไทย |
| Gangnam | Siam, Sukhumvit (Bangkok), Nimman (Chiang Mai) | สยาม, สุขุมวิท, นิมมาน |
| Chuseok, Korean holidays | **Songkran** (Thai New Year), Loy Krathong, New Year | สงกรานต์, ลอยกระทง, ปีใหม่ |
| 존댓말 / 반말 | ครับ / ค่ะ and คุณ / เธอ / แก comparisons (`polite` only) | |
| won (₩) | **baht**: write `300 baht` in English strings, never `฿` | 300 บาท |
| Korea / Korean (the learner's own country and language) | Thailand / Thai | ไทย, ภาษาไทย |

**Name and TTS rules:**
- **Personal names: Thai nicknames (ชื่อเล่น), which is how Thais introduce themselves socially.** Many are English words or short syllables the en-US voice reads well (Ploy, Mint, Bank, Nok, Fern, Beam) [practitioner opinion]. Avoid long formal names in casual scenes (Thanakorn, Wiphawadee); the voice will garble them. Use formal first names (Suda, Somchai) only in work and email scenes.
- **Places:** only the cities in the table, whose English spellings are established. Listen to each once on the engine's voice (*Phuket* is easily misread as an English word) [practitioner opinion; not tested, §11].
- **Food words** stay in their common English spelling (*pad thai*, *tom yum*); give an English gloss once (*som tam* = papaya salad).

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (Seoul, Busan, kimchi, K-pop, Minji). **Leave those English strings unchanged** (parity) and translate the Thai side literally (โซล, ปูซาน, กิมจิ, เคป๊อป). It reads as a Thai learner talking about Korea, which is natural: Korean pop culture is popular in Thailand [practitioner opinion]. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation".

**Deck localisation vs parity:** parity compares English deck targets per position. Every card whose English changes (*My name is Minji.* → *My name is Ploy.*, *I live in Seoul.* → *I live in Bangkok.*, *I'm from Korea.* → *I'm from Thailand.*, *Do you speak Korean?* → *Do you speak Thai?*, *Your Korean is really good!*) needs a `decks["<deck name>"]` entry listing the card indexes, with the reason «localisation per profile th.md §9», as ja and id did. DIALOG and EXAMPLES keyed by those targets must be re-keyed. Appended th-only cards go in the same entry.

**Meanings with `nativeScript` set:** a meaning, note or gloss must contain a Thai letter. Loanwords are written in Thai script («แท็กซี่», «โรงแรม», «เมนู», «พิซซ่า»), never left in Latin letters («taxi» fails). Write prices as «300 บาท», since ฿ does not count as Thai (§6). Brand terms (XP, OK) need a Thai word beside them («โอเค», «ได้เลย»).

**Deck names (FINAL).** Rows 1–20 replace the Korean course's 20 decks in the same order (the third column glosses each position in English); row 21 is the th-only deck, appended last. Names use spaces and «และ» between items, the Thai way of listing, instead of ko's «·». They contain no zero-width spaces or other invisible characters (deck names are lookup keys).

| # | Thai name | linked lesson or notes |
|---|---|---|
| 1 | **คำทักทาย** | Greetings |
| 2 | **แนะนำตัว** | Self-introduction; linked from `articles`, `be`, `present`, `third-s`, `object-have`, `perfect-2` |
| 3 | **ภาษาอังกฤษเอาตัวรอด 1** | Survival English 1; linked from `polite` |
| 4 | **ภาษาอังกฤษเอาตัวรอด 2** | Survival English 2; linked from `questions` |
| 5 | **ถามทางและการเดินทาง** | Directions and transport; linked from `the`. Localise to BTS / MRT, tuk-tuk, Grab (as "a ride-hailing app" in English strings) |
| 6 | **สั่งอาหารในร้าน** | Ordering at a restaurant; linked from `countable`. Add *Not spicy, please* and *Can I get the check?* |
| 7 | **คาเฟ่และร้านสะดวกซื้อ** | Café and convenience store |
| 8 | **ช้อปปิ้งและจ่ายเงิน** | Shopping and paying; linked from `plurals`, `adjectives`, `relative`. Prices in baht |
| 9 | **ตัวเลข เวลา และวันที่** | Numbers, time and dates; linked from `prep`, `numbers` |
| 10 | **คุยเล่น** | Small talk; linked from `it-there`, `can-like`, `continuous`, `past`, `irregular-past`, `going-to`, `tense`, `smalltalk`, `will`, `to-ing`, and the th-only `time-markers` |
| 11 | **ความรู้สึกและปฏิกิริยา** | Feelings and reactions; linked from `joining`, `past-continuous`, `conditionals`. Notes flag *bored / boring* |
| 12 | **คำชมและความประทับใจ** | Compliments and liking |
| 13 | **ที่ทำงานและอีเมล** | Work and email; linked from `first-conditional`, `passive`, `email`. TOEIC-style office words |
| 14 | **โทรศัพท์และคำย่อในแชต** | Phone and text abbreviations; linked from `reported` |
| 15 | **ท่องเที่ยว (สนามบินและโรงแรม)** | Travel (airport and hotel); linked from `perfect`, `articles-2`. Service English for hotel staff too |
| 16 | **โรงพยาบาลและเหตุฉุกเฉิน** | Hospital and emergencies; linked from `modals` |
| 17 | **กริยาวลี** | Phrasal verbs; linked from `phrasal` |
| 18 | **ระวังการออกเสียง** | Pronunciation traps; linked from `pron`. Keep the shared pairs; append the Thai pairs below |
| 19 | **สำนวนภาษาอังกฤษ** | English idioms; linked from `idioms` |
| 20 | **ภาพยนตร์ ซีรีส์ และสแลง** | Movies, series and slang; linked from `narrative` |
| 21 | **กับดักภาษาอังกฤษแบบไทย** | th-only, linked from `tinglish`; ≥ 20 cards; needs a `decks["count"]` deviation |

**Deck content changes** [practitioner opinion unless noted]:
- **Deck 21 «กับดักภาษาอังกฤษแบบไทย»** (≥ 20 cards; each `note` starts «ภาษาอังกฤษแบบไทย:» and names the Thai source): *Turn on the light.* / *Turn off the light.* (เปิด / ปิดไฟ), *Same here.* / *It's the same.* / *They're similar.* (เหมือนกัน, *same same*), *Check, please.* (เช็กบิล), *I go shopping on weekends.* (ไปช้อปปิ้ง), *I'm going to the gym.* (ฟิตเนส), *I'm bored.* / *This movie is boring.*, *I'm interested in music.*, *Let's split the bill.* (อเมริกันแชร์), *I'm on my phone.* (เล่นมือถือ), *It's up to you.* (แล้วแต่), *No, I didn't.* (answering «ไม่ได้ไปเหรอ»), *Never mind.* (ไม่เป็นไร), *I'm full.* (อิ่ม), *Take care.* (ดูแลตัวเองนะ), *See you later.* (แล้วเจอกัน), *Not spicy, please.* (ไม่เผ็ด), *Can you make it less sweet?* (หวานน้อย), *Can I get this to go?* (ใส่ถุง / กลับบ้าน), *I've been to Phuket.* (เคยไปภูเก็ต, not *I used to go*).
- **Deck 18 «ระวังการออกเสียง»:** keep the ko cards (their IPA changes, not the English). Append Thai pairs: *bus / but*, *nice / night*, *fill / fin*, *ball* (with a note on [w]), *bag / back*, *dog / dock*, *rice / lice* (kept), *right / light* (kept), *three / tree*, *very / wary*, *shoe / chew*, *zoo / Sue*, *months*, *asked*. Each appended card needs the deck's `decks` entry (ja precedent).
- **Small talk:** weather is always "hot"; use *It's so hot today!* and rainy-season talk. Notes warn against weight and age comments, and explain «กินข้าวหรือยัง» vs *Have you eaten?*.
- **Travel:** departures from Suvarnabhumi or Don Mueang; immigration and hotel check-in from **both sides of the desk** (many learners work in hotels): *How many nights?*, *Here's your key card.* Tipping: small change in Thailand, expected in the US.
- **Work and email:** TOEIC-style office words (meeting, deadline, schedule, invoice, shift). Replace «เรียน» / «ขอแสดงความนับถือ» with natural openings and closings (§8 `email`).
- **Phone and text abbreviations:** keep the English (LOL, BTW). Explain with Thai chat equivalents in notes (LOL ≈ 555), and note that Thai chat particles (นะ, จ้า) have no English equivalent.
- **Food and shopping:** prices in baht for scenes in Thailand, dollars for scenes abroad (the US setting of the shared English stays).

## 10. Interface wording notes

[Curriculum convention from Proton's Thai guidance and the Royal Society spacing rules; otherwise practitioner opinion. The Microsoft Thai style guide could not be read (§11).]

**Register** (§2): no ครับ / ค่ะ, no gendered pronoun; คุณ only where a subject is needed; เรา only for the app on the feedback page.
- **Sentences** (toasts, empty states, dialogs) are complete and soft, with no final full stop: «บันทึกแล้ว», «วันนี้ทบทวนครบแล้ว», «ยังไม่มีการ์ดที่ต้องทบทวน», «เรียนต่อเนื่อง 7 วันแล้ว!». The exclamation mark is for praise and milestones only.
- **Buttons, tabs and menu items:** a bare verb or verb + object, no particle, no กรุณา, no punctuation. Proton: "For neutral instructions… use infinitive" ([Proton](https://localize.proton.me/t/guidance-for-thai/3343)). Examples: «เริ่ม», «ต่อไป», «ตรวจคำตอบ», «ส่ง», «บันทึก», «ยกเลิก», «กลับ», «ข้าม», «ลองอีกครั้ง», «ดูคำตอบ». Primary CTA: «เริ่มเรียน», «ดูบทเรียน». Keep CTAs ≤ 10 characters.
- **Errors** say what to do, not who failed: «เชื่อมต่อไม่ได้ ลองอีกครั้ง», not «คุณทำผิดพลาด».

**Counts: one translation per pattern, no plural forms, classifiers required.** `Intl.PluralRules('th')` has the single category `other` (checked locally, ICU 78.3). Thai never marks plural on the noun, so a pattern reads correctly at 1 and at 2 with no extra work. The English `{n} day` / `{n} days` and `{n} card` / `{n} cards` pairs get **identical** Thai («{1} วัน», «การ์ด {1} ใบ»). Two shapes exist:
1. **noun + number + classifier** for countable things: «การ์ด {1} ใบ», «บทเรียน {1} บท». When English leaves the noun implied (`{n} due`, `{n} left`), Thai keeps the classifier alone: «ถึงกำหนด {1} ใบ», «เหลือ {1} ใบ».
2. **number + unit noun** for units that are their own classifier: «{1} วัน», «{1} นาที», «{1} ครั้ง», «{1} คะแนน».
- Put one space on each side of every number slot (Royal Society: «เว้นวรรคเล็กระหว่างตัวหนังสือกับตัวเลข»). Use a normal space; switch to U+00A0 only where a 390px render shows a number wrapping away from its classifier.
- **Ordinals** use ที่: `Lesson {n}` → «บทที่ {1}», `Card {n} of {n}` → «ใบที่ {1} จาก {2}», `week {n} of {n}` → «สัปดาห์ที่ {1} จาก {2}».

| Counted thing (English template word) | Thai pattern | Classifier / unit |
|---|---|---|
| card(s); new, learned, due, left, locked, mastered (cards implied) | «การ์ด {1} ใบ»; «ถึงกำหนด {1} ใบ», «เหลือ {1} ใบ», «ล็อกอยู่ {1} ใบ» | ใบ |
| deck(s) | «{1} ชุด» / «ชุดการ์ด {1} ชุด» | ชุด |
| lesson(s); lessons done / planned | «บทเรียน {1} บท»; «เรียนจบ {1}/{2} บท» | บท |
| dialogue(s) | «บทสนทนา {1} บท» | บท |
| day(s), active days; `{n}-day streak` | «{1} วัน»; «เรียนต่อเนื่อง {1} วัน» | วัน (unit) |
| week(s) | «{1} สัปดาห์» | สัปดาห์ (unit) |
| min / s | «{1} นาที» / «{1} วินาที» | unit |
| review(s), run(s), tried, prediction(s), `seen {n}×`, `{n}× missed` | «{1} ครั้ง»; «เห็นแล้ว {1} ครั้ง», «พลาด {1} ครั้ง» | ครั้ง (unit) |
| quiz / quizzes | «แบบทดสอบ {1} ครั้ง» | ครั้ง |
| question(s), item(s), answered, `q` | «{1} ข้อ»; «ตอบแล้ว {1} ข้อ» | ข้อ |
| word(s) | «{1} คำ» | คำ |
| pattern(s) (grammar index) | «{1} รูปแบบ» | รูปแบบ |
| round(s) | «เหลืออีก {1} รอบ» | รอบ |
| row(s) (import) | «{1} แถว» | แถว |
| point(s), pts | «{1} คะแนน» | คะแนน (unit) |
| XP | «{1} XP» | none (brand term) |
| Level | «เลเวล {1}» | ordinal-like, no classifier |
| weekly badge(s) | «เหรียญประจำสัปดาห์ {1} เหรียญ» | เหรียญ |
| streak shield (left) | «เหลือ {1} อัน» | อัน |
| KB | «{1} KB» | none |
| `{n}% correct` | «ถูก {1}%» | none; no space before % |
| `{n} new cards/day` | «การ์ดใหม่วันละ {1} ใบ» | ใบ |

**Numbers, dates and time** (`Intl` with `th-TH`, checked locally):
- Numbers: «1,234,567.5», the same separators as English. Arabic digits; never force `-u-nu-thai` (Thai digits «๑๒๓»).
- **Calendar: keep the Intl default, the Buddhist Era.** `Intl.DateTimeFormat('th-TH')` prints «17 พฤศจิกายน 2569», short «17/11/69», weekday «อังคาร 17 พ.ย.», time «14:05». Thai users expect พ.ศ. in a Thai interface [practitioner opinion]. Do not force `-u-ca-gregory` (which prints «ค.ศ. 2026»), and never hand-format dates. The BE/CE difference is taught in the `numbers` lesson (§8), because English always uses 2026.
- Currency: Intl gives «฿250.00»; in copy write «250 บาท». Percent «85%».

**Script, line breaking and fonts (engine notes; the interface writer's rules are in bold).**
- **Thai writes no spaces between words.** Spaces mark phrase and sentence boundaries ([W3C](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240705/)), and line-breaking needs "a dictionary-based approach to identify safe line-break positions" (ICU, via [unicodefyi](https://unicodefyi.com/guide/thai-script-guide/)). Browsers do this when the element's language is Thai: the root must carry `lang="th"`. Local `Intl.Segmenter('th')` splits «ยังไม่มีการ์ดที่ต้องทบทวน» into ยัง|ไม่มี|การ์ด|ที่|ต้อง|ทบทวน, which is correct.
- **Where line breaks may fall:** at spaces (phrase boundaries) and at word boundaries the browser finds. They must not fall inside a word. They also must not fall between a consonant and its vowel or tone marks, or between a number and its classifier.
  - Engine CSS: `word-break: normal` and `overflow-wrap: anywhere` only as a last resort. Never `word-break: break-all` on Thai text, because it splits words mid-syllable.
- **No zero-width spaces (U+200B) in labels or content.** Browsers already segment Thai, and U+200B breaks copy and search, the standing-rule keywords and deck-name lookups. If a label wraps badly at 390px, reword it shorter; do not insert invisible characters.
- **Line height must be taller than for Latin text.** Thai stacks marks on "up to three vertical levels above a consonant" (unicodefyi), e.g. a tone mark above an upper vowel (ที่, กี้, น้ำ) and lower vowels below (ครู, ภูมิ).
  - Body text needs line-height **≥ 1.6** (unicodefyi's sample uses 1.8). One-line labels and chips need **≥ 1.5** with vertical padding.
  - Never use a fixed-height box with `overflow: hidden` on Thai text, because tone marks are clipped first.
  - Check the bottom nav, chips, toasts and buttons on a device.
- **Fonts:** the engine's DM Sans has no Thai, so the browser falls back per glyph. Declare the fallback explicitly so it is predictable. **Font stack after DM Sans:** `"Noto Sans Thai", "Noto Sans Thai UI", "Sukhumvit Set", "Thonburi", "Leelawadee UI", "Tahoma", sans-serif`.
  - Android uses Noto Sans Thai, Apple Thonburi / Sukhumvit Set, and Windows Leelawadee UI / Tahoma [practitioner opinion; platform defaults not verified on a fetched page].
  - These are loopless (modern) Thai designs. A looped design such as Noto Sans Looped Thai is "the most common genre for general purposes in books, newspapers and documents" ([Fontpad](https://www.fontpad.co.uk/customfonts/noto-sans-looped/)). It is easier for long lesson bodies but needs a web font; that is the lead's call.
  - IPA in the mono `.pron` font will also fall back; check ˈ, ‖, ʃ, ŋ and θ on device.
- **Mixed Thai–English lines:** one normal space around English (§2). Thai has no italics tradition, so use bold (`<b>`) for English examples, as the lesson renderer does.

**Bottom nav (7 tabs; each ≤ 8 characters, counted as Unicode code points, the stricter reading: combining vowels and tone marks count).** Measured with `Intl.Segmenter` and `[...s].length`.

| English | Thai label | Code points / graphemes | Note |
|---|---|---|---|
| Today | วันนี้ | 6 / 3 | |
| Practice | ฝึกหัด | 6 / 4 | Lesson practice sets (แบบฝึกหัด, the school word) |
| Review | ทบทวน | 5 / 5 | SRS review |
| Lessons | บทเรียน | 7 / 6 | |
| Drills | ทักษะ | 5 / 4 | "Skills": the reading, listening, building and role-play drills. Chosen so it does not start with ฝึก like Practice (vi chose *Kỹ năng* for the same reason) |
| Progress | พัฒนาการ | 8 / 7 | Longest label; the lead checks it in the real layout. Fallback «สถิติ» (5) |
| Feedback | ติชม | 4 / 3 | Page title «ส่งความคิดเห็นถึงเรา» |

If the bar still shows **Read** instead of Drills, use «อ่าน» (4 / 3).

**UI glossary** (use exactly; must match §3):

| English | Thai |
|---|---|
| lesson / lessons tab | บทเรียน |
| practice (set) / tab | แบบฝึกหัด / ฝึกหัด |
| review (SRS) | ทบทวน |
| due (cards) | ถึงกำหนดทบทวน |
| deck | ชุดการ์ด |
| card | การ์ด (classifier ใบ) |
| streak | เรียนต่อเนื่อง («เรียนต่อเนื่อง 5 วัน») |
| hint | คำใบ้ |
| check (3-question lesson check) | แบบทดสอบท้ายบท; button «ตรวจคำตอบ» |
| correct / incorrect | ถูกต้อง / ยังไม่ถูก (feedback «ถูกต้อง!» / «ยังไม่ถูก ลองอีกครั้ง»; avoid a bare «ผิด») |
| answer / explanation (`why`) | คำตอบ / คำอธิบาย |
| try again | ลองอีกครั้ง |
| skip | ข้าม |
| multiple choice / word tiles / gap-fill / typed sentence | เลือกคำตอบ / เรียงคำ / เติมคำ / พิมพ์ประโยค |
| drills | ฝึกทักษะ (tab «ทักษะ») |
| level / XP | เลเวล / XP |
| show pronunciation (toggle) | แสดงคำอ่าน (IPA) (a settings row, 16 code points; it is not a button) |
| listen / play audio | ฟังเสียง |
| progress | พัฒนาการ |
| feedback | ติชม |
| settings | ตั้งค่า |
| sign in / sign out | เข้าสู่ระบบ / ออกจากระบบ |
| sync | ซิงค์ข้อมูล |
| backup | สำรองข้อมูล |

**Language-name slots.** profile.json `name.th` is «ภาษาอังกฤษ». The engine fills target-language slots from `Intl.DisplayNames('th')`, which returns «อังกฤษ» without ภาษา (checked locally); LANGS fallbacks and the brief assume «ภาษาอังกฤษ».
- Thai has no case endings, articles or gender, so the only risk is a doubled or missing «ภาษา». **Write every template so it reads correctly with either value:**
  - Put the slot at the start of a label or after a colon: «{1}: พิมพ์คำตอบ», «คอร์สปัจจุบัน: {1}».
  - **Never write «ภาษา{1}»** (it would give «ภาษาภาษาอังกฤษ»), and never write a template that only works with ภาษา missing.
  - Give the slot one space on each side when Thai text follows it.
- Ask the engine owner to map Thai through `name.th` (or prefix ภาษา) so the slot always holds «ภาษาอังกฤษ» (§11). Mid-sentence in content, always write «ภาษาอังกฤษ» and «ภาษาไทย».
- **i18n validator:** Thai labels are short, so the "> 1.6 × English and > 14 characters" warning should appear only for sentences. With `nativeScript` set, the validator does not warn about translations identical to English; XP and KB stay in Latin letters by design.

## 11. Gaps and unverified claims

- **Blocked, empty or unusable sources** (not in Sources):
  - **Microsoft Thai style guide** (download.microsoft.com PDF): returned as binary. So the register, button and date rules rest on Proton, the Royal Society spacing rules and convention.
  - Watcharapunyawong & Usaha 2013 full text: SlideShare needed JavaScript, so **only the category ranks were read, not the counts**.
  - British Council Thailand report on English exit exams: the landing page had only objectives.
  - Thairath on 2025 O-NET results: no figures.
  - The NIETS journal paper on O-NET: no English means.
  - The italki and r/learnthai threads: nothing usable.
- **Abstract-only or page-summary evidence:**
  - Thomma 2026 (abstract; no per-consonant figures);
  - Iadkert & Chantarangkul 2023 (abstract; no percentages);
  - Kanokpermpoon (year and journal not stated on the page; predictions, not measurements);
  - Dankanjanakpan & Sinwongsuwat 2025 (CA-transcription study, read for stress only);
  - Wudthayagorn 2025 (policy review; the 2016 and 2024 announcements were seen only as references);
  - the Bangkok Post OBEC article (year not shown);
  - the TIMSS encyclopedia (school levels only).
- **Small or skewed samples:**
  - Pawabutra & Sutakote: 43 students, 158 errors, one university, speech only. Its 25.3% agreement figure drives OTHERS.md's ranking.
  - Pathanasin et al.: 27 **Southern** Thai speakers reading a word list. Their final-stop deletion is attributed to Southern Thai, and their /s/ accuracy (92.6%) may not hold in connected speech.
  - Suraprajit 2021: 13 article omissions, no rates.
  - Bennui 2008: qualitative, 28 students.
  - Naruemon 2012: 20 papers, spelling errors.
- **The two main grammar studies disagree** on agreement (1st in speech, 14th in writing). The standing rule follows the evidence that recurs (articles and plurals), with agreement as a secondary emphasis.
- **No fetched source for:**
  - *I'm boring* for *I'm bored* (the nearest is *I am interesting in this topic*);
  - *play Facebook*, *I like very*, the *ที่* = *at* relative-clause trap, *go buy*, paired connectors (เพราะ…จึง);
  - the rudeness of weight comments and «กินข้าวหรือยัง» as a greeting;
  - Thai nicknames read well by en-US TTS;
  - answering negative questions (Roeland only).
  - All are [practitioner opinion].
- **Pronunciation:**
  - Final /l/ → [n] and final /s/ → [t] are predicted (Kanokpermpoon) and asserted (Panyaroj, Wikipedia), but the only measured study found /l/ → [w] and /s/ mostly correct. This needs a Central Thai production study.
  - No fetched measurement exists for r/l merger rates, stress placement or tone transfer.
- **Pronunciation aid:**
  - No study compares IPA, Thai respelling and no aid for Thai learners.
  - **How many adult learners read IPA is unmeasured.** Prep sites teach it, and the school evidence says pronunciation gets little time. Test it with the first users (toggle-off rate, a one-question survey).
  - The Thai approximation column in §6 is this profile's design.
  - The English pronunciations of Thai names and places (/ˌpuːˈket/, /ˌtʃɑːŋ ˈmaɪ/) are approximations and must be checked against the engine's voice.
- **Learner context:**
  - EF EPI is a self-selected online test; the fact sheet's rank was garbled, so the rank and band come from The Thaiger. The 2026 fact sheet exists and was not fetched.
  - The O-NET average (27.76) is from 2016; no newer national figure was found.
  - The following were not verified on an exam-board or employer page: TCAS / A-Level / TGAT details, TOEIC as a job or exit requirement, IELTS volumes, and tourism-sector English demand.
  - The start grade and weekly hours of compulsory English under the current core curriculum were not verified.
- **Glossary:** «กริยาช่อง 1 / 2 / 3», «กริยาไม่ปกติ», «Modal verb», «ประโยคขยายคำนาม», «คำแสดงคำถาม», «ขั้นกว่า / ขั้นสูงสุด», «เสียงควบกล้ำ» and the UI terms (ชุดการ์ด, เรียนต่อเนื่อง, พัฒนาการ, ติชม, ทักษะ, ซิงค์ข้อมูล) are from general usage and were not checked against Thai textbooks or major Thai apps.
- **Interface:**
  - **Language-name slot mismatch:** `Intl.DisplayNames('th').of('en')` = «อังกฤษ», while `name.th` and the brief use «ภาษาอังกฤษ». The templates are written to survive both (§10). The engine owner should decide which one fills the slot.
  - The default system Thai fonts per platform and the 390px nav fit were not rendered; «พัฒนาการ» (8 code points) is the one to check.
  - Whether the i18n validator accepts U+00A0 inside a translation was not checked.
  - Keeping the Buddhist Era (Intl default) is a judgement; the lead may prefer Gregorian dates for a study app.
- **Standing rule:** a combined article/plural + agreement kind would fit Thai (and vi) better than `article-plural`; it is not implemented.
- **Not researched:** Isan, Northern and Southern Thai dialect effects beyond Pathanasin et al.; Thai learners' use of self-study apps; Thai-speaking learners outside Thailand.

## Sources

Web pages opened and used:
- [Pawabutra & Sutakote 2024, An analysis of grammatical errors in English speaking of Thai EFL learners (JEL 5(3))](https://so17.tci-thaijo.org/index.php/JEL/article/download/625/470)
- [Watcharapunyawong & Usaha 2013, Thai EFL students' writing errors in different text types: the interference of the first language (ELT 6(1); SWU repository record)](https://ir.swu.ac.th/entities/publication/dcca8d3f-34ec-4dff-8eaa-7bba68117c20/full)
- [Bennui 2008, A study of L1 interference in the writing of Thai EFL students (Malaysian Journal of ELT Research 4)](https://www.melta.org.my/journals/MAJER/downloads/majer04_01_06.pdf)
- [Suraprajit 2021, An analysis of errors in English essays written by Thai non-English major students (TPLS 11(1))](https://tpls.academypublication.com/index.php/tpls/article/download/803/572/3278)
- [Pathanasin, Mansbridge & Pongprairat, Exploring patterns and challenges in English word-final consonant pronunciation among Southern Thai EFL learners (AJAC 26(2))](https://ajaclibrary.wu.ac.th/index.php/ajac/article/download/77/34/145)
- [Thomma 2026, A phonological errors analysis of English consonants produced by Thai EFL undergraduate non-English majors (JEL 7(2), abstract page)](https://so17.tci-thaijo.org/index.php/JEL/article/view/2385)
- [Iadkert & Chantarangkul 2023, The relative degree of sonority and English consonant clusters produced by Thai speakers (Language and Linguistics 41(2), abstract page)](https://so04.tci-thaijo.org/index.php/joling/article/view/257445)
- [Kanokpermpoon, A preliminary investigation of English and Thai consonants (Reflections)](https://so05.tci-thaijo.org/index.php/reflections/article/download/114263/88647)
- [Naruemon 2012, Causes of English spelling errors made by Thai foreign language learners (ARECLS 10)](https://research.ncl.ac.uk/media/sites/researchwebsites/arecls/naruemon_vol10.pdf)
- [Dankanjanakpan & Sinwongsuwat 2025, CA-informed transcription symbols and Thai EFL learners' stress and intonation (LEARN 18(2))](https://so04.tci-thaijo.org/index.php/LEARN/article/view/282341)
- [Panyaroj 2022, Thai learners' problems in English pronunciation (Globish Education, Medium)](https://medium.com/globish-education/thai-learners-problems-in-english-pronunciation-a34539e8eee3)
- [Roeland 2007, Frequent Thai student mistakes, part one (Ajarn.com)](https://ajarn.com/blogs/phil-roeland/i-go-to-shopping)
- [Somhar 2025, Common Thai-English mistakes you've probably heard (The Nation)](https://www.nationthailand.com/life/art-culture/40051240)
- [Wikipedia, "Tinglish" / "Thailish" (IPFS mirror)](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Thailish.html)
- [llexi, Common English errors by Thai speakers](https://llexi.com/l1-errors/common-english-errors-thai-speakers/)
- [TruePlookpanya, คำนำหน้านาม (Articles)](https://www.trueplookpanya.com/knowledge/content/60696)
- [TruePlookpanya, Present simple tense](https://trueplookpanya.com/knowledge/content/69010-laneng-lan-)
- [Prep Edu Thai, คำนามนับได้และนับไม่ได้](https://prepedu.com/th/blog/english-countable-and-uncountable-nouns)
- [Prep Edu Thai, แบบฝึกการอ่านออกเสียงภาษาอังกฤษ (IPA with Thai labels)](https://prepedu.com/th/blog/english-pronunciation-exercises)
- [TruePlookpanya, 10 English words Thais often mispronounce (Thai-script respellings)](https://www.trueplookpanya.com/learning/detail/29971)
- [TruePlookpanya, English loanwords in Thai (karan spellings)](https://www.trueplookpanya.com/knowledge/content/81086)
- [TruePlookpanya, Royal Society Thai-to-Latin transcription rules (final consonants)](https://www.trueplookpanya.com/knowledge/content/64904-laneng-lan-)
- [TruePlookpanya, Royal Society spacing rules (หลักเกณฑ์การเว้นวรรค)](https://www.trueplookpanya.com/knowledge/content/50093-lantha-lan-)
- [EF EPI 2025 fact sheet, Thailand](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-thailand-english.pdf)
- [The Thaiger 2025, Thailand's English proficiency ranks second lowest in Asia](https://thethaiger.com/news/national/thailand-english-proficiency-2025)
- [The Nation, Mathayom 6 students struggle in O-Net test (2016 academic year)](https://www.nationthailand.com/news/30309764)
- [Wudthayagorn 2025, Revisiting English-in-education policies in Thailand (LEARN 18(2))](https://so04.tci-thaijo.org/index.php/LEARN/article/view/282280)
- [Bangkok Post, OBEC orders English class hours boost](https://www.bangkokpost.com/thailand/general/1002685/obec-orders-english-class-hours-boost)
- [TIMSS 2015 Encyclopedia, Thailand](https://timssandpirls.bc.edu/timss2015/encyclopedia/countries/thailand/)
- [Proton localisation, Guidance for Thai](https://localize.proton.me/t/guidance-for-thai/3343)
- [1StopAsia, How formality systems in Japanese, Korean and Thai influence compliance UX](https://www.1stopasia.com/blog/wp-content/uploads/articles-download/How-Formality-Systems-in-Japanese-Korean-and-Thai-Influence-Compliance-UX-and-Public-Communication.pdf)
- [W3C, Thai Layout Requirements (2024 draft note)](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240705/)
- [unicodefyi, Thai script guide (segmentation, stacking, line height)](https://unicodefyi.com/guide/thai-script-guide/)
- [Fontpad, Noto Sans Looped Thai & Lao](https://www.fontpad.co.uk/customfonts/noto-sans-looped/)

Local files read: `/home/claude/docs/profiles/zh.md`, `vi.md`, `id.md` (§1–§3 and §5–§11 in full; §4 only to line 120), `OTHERS.md` (Thai section); `/home/claude/reports/Grammar learning order research.md` (evidence labels; the English-course recycling section); `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`; `/home/claude/tools/content/lib.js` (ORDER, `orderFor`, `nativeTester`), `validate.js` (pron and cue checks), `mk_briefs_ko.py` (deck-table parser), `ko/lessons.js`, `ko/more/*.js`, `ko/decks.js` (deck names and links), `zh/profile.json`, `zh/PRON-RULES.md`, `zh/decks.js` and `zh/lessons.js` (IPA rows), `id/profile.json`; `/home/claude/tools/i18n/keys.json` (count templates, Drills key, language-name slots) and `zh|id|vi/ui.json` (Drills translations); `/home/claude/packs/course-ko-en.js` (0 Thai characters, 0 ˈ). Local checks: `Intl` with ICU 78.3 for `th` plural rules, dates, numbers, `DisplayNames` and `Segmenter`.
