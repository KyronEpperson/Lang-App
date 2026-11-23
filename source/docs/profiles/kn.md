# Kannada speakers learning English — course profile

Course `kn-en`. Audience: adult Kannada speakers in Karnataka (Bengaluru, Mysuru, the districts) and abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard modern written Kannada in Kannada script** (the Kannada of Bengaluru and Mysuru newspapers and apps), with the English loanwords speakers actually use (ಕಾರ್ಡ್, ಆಫೀಸ್, ಇಮೇಲ್, ಬಸ್); answers and examples are in English. The HTML language tag and the app code are both **`kn`** (profile.json `native: "kn"`, pack `course-kn-en`, interface pack `i18n-kn`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`; today `lib.js` `ORDER` holds 40 lesson ids: the shared `alphabet` lesson plus the 39 the brief names, and `tools/content/ko/decks.js` holds 21 decks: the 20 the brief names plus the shared alphabet deck; standing rule `article-plural`), like zh, vi, id, ru and hi, because Kannada has no articles. `parity.js` compares kn-en's English side with ko-en's. The closest finished course is Hindi (`docs/profiles/hi.md`); this profile follows its structure and reuses its decisions where the facts are the same, and says where Kannada differs.

Evidence labels:
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what textbooks, dictionaries, style guides, Unicode / CLDR data or apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (said so where it is mine).
- **[native check]**: a statement about Kannada that comes from this profile's author's knowledge of the language and from no opened source. Every Kannada string in this file that writers will copy is in that class unless a source is named (§11).

How sources were read: web pages through the fetch tool's summary. Three PDFs (Wiltshire 2015, the SJSU guide, the Microsoft Kannada style guide) were saved by the tool and their text layer was extracted locally with a small script; Kannada-script examples in the Microsoft PDF did not survive extraction (§11).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, the same English strings as `ko-en`). Explanations address the learner as **ನೀವು** with the polite imperative in **-ಇ / -ಇರಿ** (ಆರಿಸಿ, ಬರೆಯಿರಿ); buttons use the same form. Kannada school grammar terms (ನಾಮಪದ, ಕ್ರಿಯಾಪದ, ಏಕವಚನ / ಬಹುವಚನ), tense names kept in English (*Simple Present*, *Present Perfect*).
- **Error evidence is thin and mostly not Kannada-specific.** The one Kannada-L1 error study found (Nanjaiah 1994, CIIL) could not be read. The usable sources are an acoustic study with 5 Kannada speakers (Wiltshire 2015), the 22 Indian English features annotated in ICE-India (Demszky et al.), a university guide to Indian English (SJSU) and contrastive descriptions. The ranking is this profile's inference.
- **Top zones:** articles (omitted, added, *one* for *a*); **an extra vowel after a final consonant** (*bus-u*, *car-u*) and doubled consonants; continuous with states and durations (*I am working here from two years*, *I am having a car*); plurals and countability (*two book*, *informations*); question order and the tags *isn't it? / no?* (ಅಲ್ವಾ?); prepositions from case endings (*angry on me*, *today morning*); *only / itself* for the Kannada -ಏ; *caught* said like *coat*; missing *be* at beginner level (ನಾನು ಶಿಕ್ಷಕ).
- **Pronunciation aid: a Kannada-script respelling, required** (`"pron": "required"`), not IPA. Kannada spelling is read exactly as written, so the aid can show the two things Kannada speakers most need: **a final consonant with the ್ sign and nothing after it** (ಬಸ್, never ಬಸ್ಸು) and **a dot (nukta, U+0CBC) on every sound Kannada lacks**: ಫ಼ = /f/, ಜ಼ = /z/, ವ಼ = /v/ (plain ವ = /w/), ಥ಼ ದ಼ = /θ ð/, ಶ಼ = /ʒ/; ್ಯಾ = /æ/; **ˈ** before the stressed syllable. It is a one-to-one table from the zh IPA: a scratch converter turned all **776** IPA strings of `packs/course-zh-en.js` into strings that pass `pronPattern`.
- **Standing rule: `article-plural`**, keywords `ಆರ್ಟ[ಿೀ]ಕಲ್|ಬಹುವಚನ|ಎಣಿಸ` (no flags); zero parity cost.
- **Curriculum:** all 40 shared ids kept in order (7 keep, 33 reweight, no English-side change). Add 2, both with an English side that can start from hi-en's: `indian-english` (end of A1; deck 22 «ಇಂಡಿಯನ್ ಇಂಗ್ಲಿಷ್: ಇಲ್ಲಿ ಮತ್ತು ವಿದೇಶದಲ್ಲಿ») and `stative-since` (B1, after `perfect-2`).
- **Interface:** counts use **number + bare noun with no verb and no case ending** («{1} ಕಾರ್ಡ್», «{1} ದಿನ») or **label + colon** («ಬಾಕಿ: {1}»). Language-name slots only at the start of a line or after a colon, **never with a case ending attached**. Western digits. ZWNJ (U+200C) only between a ್-final loanword and a Kannada ending (ಕಾರ್ಡ್‌ಗಳು). Tab labels are short (ಇಂದು, ಅಭ್ಯಾಸ, ಪುನರ್ಮನನ, ಪಾಠಗಳು, ಓದು, ಪ್ರಗತಿ, ಅನಿಸಿಕೆ); the risk is height and clipped subscripts, not width.

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear.
2. Karnataka schools, newspapers and offices write British spelling, and educated Indian English is its own norm (the General Indian English model in Wiltshire 2015; §4.14). The course teaches American forms without calling Indian or British forms wrong: a card `note` may say «ಭಾರತ ಮತ್ತು ಬ್ರಿಟನ್‌ನಲ್ಲಿ: lift / flat / colour» [practitioner opinion].
3. US spelling and vocabulary (color, apartment, elevator, cell phone, check for the restaurant bill).

**Register: ನೀವು with the polite imperative (-ಇ / -ಇರಿ); never ನೀನು** [practitioner opinion, decision].
- **What was found** [curriculum convention]:
  - The reverse-course profile (`docs/profiles/en-kn.md` §2.3) describes the system: ನೀವು (with -ಈರಿ verbs and commands in -ಇ: ಬನ್ನಿ, ಕೊಡಿ) is for strangers, elders, teachers and colleagues; ನೀನು (command = the bare stem: ಬಾ, ಕೊಡು) is for close friends and children and is "rude to a stranger or an elder".
  - Kannada app text that could be opened uses ನೀವು / ನಿಮ್ಮ and the -ಇ imperative: WhatsApp's Kannada help centre has «ಪ್ರಾರಂಭಿಸಿ», «ಲಿಂಕ್ ನಕಲಿಸಿ», «ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ», «ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ», «ಇದು ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆಯೇ?» ([WhatsApp](https://faq.whatsapp.com/1278661612895630/?lang=kn)); Google's notice reads «ನೀವು ವಿನಂತಿಸಿದ ಪುಟವು ಸದ್ಯಕ್ಕೆ ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ.» ([Google support](https://support.google.com/accounts/answer/27441?hl=kn)).
  - Microsoft's Kannada style guide (December 2017) asks for a "warm and relaxed", conversational voice and to "address the user directly using the second person pronoun"; its Kannada examples could not be read (§11) ([Microsoft Kannada Style Guide](https://download.microsoft.com/download/9/6/7/9673794D-A6F0-46F9-B8E0-BFEB6F8B410E/kan-ind-StyleGuide.pdf)).
  - KDE's Kannada guidelines say nothing about address; they ask for Kannada words where possible, one term per concept, and keeping established community terms («ಸೀಡೀ», not an invented compound) ([KDE kn](https://kn.l10n.kde.org/guidelines.html)). Mozilla's style-guide repository has no Kannada guide (folder list checked).
  - No Kannada in-app text of a language-learning app could be opened (§11).
- **Decision: ನೀವು**, as hi chose आप and unlike ko, zh, id and ru. Reasons:
  1. Kannada has no neutral peer form for a stranger: ನೀನು from an app reads as talking down to an adult [native check]. The app is a teacher, and teachers are addressed as ನೀವು.
  2. The cost is nil: the polite imperative is one sign longer than the ನೀನು form at most (ಬರೆಯಿರಿ / ಬರೆ, ಆರಿಸಿ / ಆರಿಸು, ಮಾಡಿ / ಮಾಡು), so buttons and the tab bar are unaffected.
  3. ನೀವು can still be warm: praise with «ಚೆನ್ನಾಗಿದೆ!», «ಶಾಭಾಷ್!», «ಸೂಪರ್!», not officialese.
- **One imperative form:** the plain polite **-ಇ** on buttons and short instructions (ಆರಿಸಿ, ಕೇಳಿ, ಕಳುಹಿಸಿ, ಟೈಪ್ ಮಾಡಿ); **-ಇರಿ** only where the verb stem requires it (ಬರೆಯಿರಿ, ಕಲಿಯಿರಿ, ತಿಳಿಯಿರಿ) [native check]. Never the bare stem (ಆರಿಸು, ಬರೆ), never the very formal -ಇರಿ on every verb (ಮಾಡಿರಿ), never ದಯವಿಟ್ಟು on a button.
- **Voice:** friendly teacher, plain written Kannada of the kind a Bengaluru newspaper's lifestyle page uses: written verb forms (ಮಾಡುತ್ತದೆ, ಬರುವುದಿಲ್ಲ), not the spoken ones (ಮಾಡುತ್ತೆ, ಬರಲ್ಲ) and not the reverse course's spoken standard. Use the English loan where it is the normal word (ಕಾರ್ಡ್, ಆಫೀಸ್, ಇಮೇಲ್, ಫೋನ್, ಬಸ್, ಟಿಕೆಟ್, ಮೀಟಿಂಗ್); use the plain Kannada word when it is everyday Kannada (ಪಾಠ, ಅಭ್ಯಾಸ, ಪ್ರಶ್ನೆ, ಉತ್ತರ, ತಪ್ಪು, ಸರಿ, ಪದ, ವಾಕ್ಯ). KDE's "maximise Kannada" rule is not followed where it would produce coinages nobody says.
- **Never:** ನೀನು addressed to the learner; mixed ನೀವು / ನೀನು on one screen; Sanskritised officialese (ದಯವಿಟ್ಟು ಗಮನಿಸತಕ್ಕದ್ದು…); Kannada in Latin letters (*neevu sari*); Hindi words (ठीक, अच्छा in any script); slang (ಗುರು, ಮಗಾ, ಬಾಸ್) addressed to the learner; more than one exclamation mark per screen.
- **Translations of example sentences:** *you* = **ನೀನು** between friends, family and in texting, **ನೀವು** in service, office, email, doctor and stranger scenes; that ನೀನು sits inside a translation, not addressed to the learner. *he / she* about an adult stranger, a teacher, a parent or a boss = **ಅವರು** (respect plural); ಅವನು / ಅವಳು for friends, children and where the lesson needs the gender to show (§4.9).
- **Speaker gender in translations:** Kannada first- and second-person verbs do not show gender (ನಾನು ಹೋಗುತ್ತೇನೆ for a man or a woman) [native check], so the slash forms hi needs (जाता / जाती) do not arise with verbs. Nouns of origin and some predicates do show it (ನಾನು ಅಮೆರಿಕದವನು / ಅಮೆರಿಕದವಳು, en-kn §7): translate *I'm from India* with a form that avoids it («ನಾನು ಭಾರತದಿಂದ ಬಂದಿದ್ದೇನೆ», or «ನನ್ನ ದೇಶ ಭಾರತ») [native check]. Third-person verbs show gender (ಬರುತ್ತಾನೆ / ಬರುತ್ತಾಳೆ / ಬರುತ್ತದೆ / ಬರುತ್ತಾರೆ), which makes a Kannada prompt for *he / she / it* unambiguous without a cue.
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice [native check]:
- «ಕನ್ನಡದಲ್ಲಿ ಆರ್ಟಿಕಲ್ ಇಲ್ಲ. ಹಾಗಾಗಿ a ಮತ್ತು the ಬಿಟ್ಟುಹೋಗುತ್ತವೆ, ಇಲ್ಲವೇ ಬೇಡದ ಕಡೆ ಬರುತ್ತವೆ. ಮೂರು ನಿಯಮ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಿ, ಸಾಕು.»
- «"ನಾನು 2015 ರಿಂದ ಇಲ್ಲಿ ಇದ್ದೇನೆ" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ Present Continuous ಅಲ್ಲ, Present Perfect: I've lived here since 2015.»
- «ಕನ್ನಡದಲ್ಲಿ ಬಸ್ಸು, ಕಾರು ಎನ್ನುತ್ತೇವೆ. ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಕೊನೆಗೆ ಸ್ವರ ಇಲ್ಲ: bus, car.»

**Typography and mixing English into Kannada text (one rule, applied everywhere):**
- **Script.** Kannada in Kannada script only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Kannada script outside the `pron` field.
- **Loanwords in Kannada text use ordinary Kannada spelling, with no nukta:** ಫೋನ್, ಕಾಫಿ, ಆಫೀಸ್, ಜೂ (as en-kn §10.3: "the course does not use it"). **The nukta appears only in the `pron` field** (§6). This keeps prose normal and makes the dot in the aid mean something.
- **ZWNJ (U+200C): one use only.** A loanword that ends in ್ takes a Kannada ending or the next half of a compound with a ZWNJ in between, as Kannada apps do («ಡೌನ್‌ಲೋಡ್», «ಚಾನಲ್‌ಗಳು» on WhatsApp; «ಅಪ್ಲಿಕೇಶನ್‌ಗಳು», «ಗೇಮ್‌ಗಳು» on Google Play; the Microsoft guide: "ZWNJ should be used wherever applicable in the transliteration words"). Without it the two consonants fuse into a conjunct (ಕಾರ್ಡ್ಗಳು). So: ಕಾರ್ಡ್‌ಗಳು, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಆರ್ಟಿಕಲ್‌ಗಳು. Nowhere else; never ZWJ (U+200D); never in `pron`; never in deck names (§9). en-kn bans ZWNJ in *target* text; that rule is about Kannada as the language being learned and does not apply to interface prose.
  - The reverse course avoids ZWNJ by using the older linking spellings (ಬಸ್ಸಿನಲ್ಲಿ, ಆಫೀಸಿಗೆ; en-kn §2.2) and notes that ಬಸ್ + ZWNJ + ನಲ್ಲಿ is "the common web spelling". This course uses the web spelling, because its prose attaches endings to many new loans (ಕಾರ್ಡ್, ಡೆಕ್, ಆರ್ಟಿಕಲ್) [native check for each loan + ending the interface writer uses].
- **A Latin-script English word takes its Kannada ending as a separate word after a space**, as Google does («Google Play ನಲ್ಲಿ», «Google Chrome ನ»): «Simple Present ನಲ್ಲಿ», «he ಜೊತೆ», «two ನಂತರ», «the ಬೇಕು». Prefer a free postposition (ಜೊತೆ, ನಂತರ, ಮೊದಲು, ಬದಲು) to a bound ending.
- **Quotes.** Kannada phrases in straight double quotes "…", nested in single '…'. In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `"ನಾನು ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?`, «two ನಂತರ ಬಹುವಚನ: books.».
- **Punctuation: Western.** Full stop «.», `?`, `!`, comma, as modern Kannada print and apps do (the opened Google and WhatsApp strings and Kannada Wikipedia end sentences with «.»; en-kn §2.8). **No danda** (।). No terminal punctuation on buttons, labels, tabs or deck names.
- **Unicode NFC.** Two-part vowel signs must be the single code points (ೀ U+0CC0, ೇ U+0CC7, ೈ U+0CC8, ೊ U+0CCA, ೋ U+0CCB), never ೆ/ಿ + the length marks U+0CD5 / U+0CD6 (en-kn §10.3, checked there in Node).
- **Anusvara** (ಂ) for a nasal before a consonant in Kannada words and loans (ಇಂಗ್ಲಿಷ್, ಬ್ಯಾಂಕ್, ಮೀಟಿಂಗ್), as the *Kannada script* article describes ("usually written as an anusvara"); not ಙ್ಗ, ಣ್ಟ.
- **Digits:** Western digits 0–9 everywhere, not Kannada ೦–೯ (§10).
- **Dash.** Spaced em dash ( — ) between clauses; hyphen inside compounds (-ing ರೂಪ); en dash in ranges (2–4).
- **Spelling of the language names:** «ಇಂಗ್ಲಿಷ್» (what `Intl.DisplayNames('kn')` returns, checked locally; not ಇಂಗ್ಲೀಷ್, not ಆಂಗ್ಲ) and «ಕನ್ನಡ».
- **Alternatives:** ` / ` with spaces, as in ko-en.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]:
  - Kannada school grammar terms are attested on Kannada Wikipedia's grammar page: «ನಾಮಪದ» (noun), «ಸರ್ವನಾಮ» (pronoun), «ಕ್ರಿಯಾಪದ» (verb), «ಗುಣವಾಚಕ» (adjective), «ಲಿಂಗ», «ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು» (case endings), «ವಾಕ್ಯ», «ಸ್ವರಗಳು», «ವ್ಯಂಜನಗಳು», «ಸಂಧಿ» ([kn.wikipedia, ಕನ್ನಡ ವ್ಯಾಕರಣ](https://kn.wikipedia.org/wiki/ಕನ್ನಡ_ವ್ಯಾಕರಣ)); «ಒತ್ತಕ್ಷರ» for a conjunct letter is in the English *Kannada script* article.
  - **No Kannada-language explainer of English grammar could be read** (the one found is a scanned image; §11). So the choice between a Kannada term and the English term in Kannada letters is this profile's, following hi.md: Kannada school terms for the general words, **tense names in English** (*Simple Present*, *Present Perfect*), because Indian school English names tenses in English and exam material does too [practitioner opinion; not verified for Kannada-medium books].
- **Tense names:** *Simple Present* is primary, glossed once as «Simple Present (ವರ್ತಮಾನ ಕಾಲ)»; the same once for *Simple Past* (ಭೂತಕಾಲ) and *will* (ಭವಿಷ್ಯತ್ ಕಾಲ) [native check for the three Kannada names].
- **One term per concept.** The standing-rule regex depends on **ಆರ್ಟಿಕಲ್**, **ಬಹುವಚನ** and **ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ** (§7). Do not write «ಉಪಪದ», «ಪ್ಲೂರಲ್», «ಬಹು.» or «ಲೆಕ್ಕ ಮಾಡಬಹುದಾದ» in a `why` that is meant to count.

Every Kannada term below is [native check] unless the list above attests it.

| English term | Kannada term (use this) | Note |
|---|---|---|
| article | **ಆರ್ಟಿಕಲ್** | Standing-rule keyword. Follow it with a space and the article where possible («ಆರ್ಟಿಕಲ್ a ಬೇಕು»); the plural is ಆರ್ಟಿಕಲ್‌ಗಳು (ZWNJ) |
| indefinite / definite article | a / an (ಅನಿರ್ದಿಷ್ಟ) / the (ನಿರ್ದಿಷ್ಟ) | In `why` prefer «ಆರ್ಟಿಕಲ್ a», «ಆರ್ಟಿಕಲ್ the» |
| zero article | ಆರ್ಟಿಕಲ್ ಇಲ್ಲ | «ಇಲ್ಲಿ ಆರ್ಟಿಕಲ್ ಬೇಡ» |
| noun | ನಾಮಪದ | |
| countable / uncountable noun | **ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ** ನಾಮಪದ | Standing-rule keyword (stem ಎಣಿಸ). Gloss once with the English word in brackets |
| singular / plural | ಏಕವಚನ / **ಬಹುವಚನ** | Standing-rule keyword; Kannada grammar has ವಚನ too, so the idea is familiar |
| gender | ಲಿಂಗ (ಪುಲ್ಲಿಂಗ, ಸ್ತ್ರೀಲಿಂಗ, ನಪುಂಸಕಲಿಂಗ) | Contrast only (§4.9) |
| Kannada case ending (-ಅಲ್ಲಿ, -ಗೆ, -ಇಂದ) | ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ | Contrast only: «ಕನ್ನಡದಲ್ಲಿ ಪ್ರತ್ಯಯ ಪದದ ಕೊನೆಗೆ (ಮನೆಯಲ್ಲಿ); ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ preposition ಪದದ ಮೊದಲು (in the house)» |
| preposition | preposition (ಪ್ರಿಪೊಸಿಷನ್) | Explain once with the ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ contrast; afterwards the English word in Latin letters |
| pronoun | ಸರ್ವನಾಮ | |
| subject / object | ಕರ್ತೃ (subject) / ಕರ್ಮ (object) | Give both once |
| possessive (my, his) | ಸಂಬಂಧ ತೋರಿಸುವ ಪದ (my, his) | |
| possessive 's | 's (ಯಾರದ್ದು ಎಂದು ತೋರಿಸಲು) | «Divya's phone = ದಿವ್ಯಾಳ ಫೋನ್» |
| verb | ಕ್ರಿಯಾಪದ | |
| be | **be (am, is, are)** | Lesson `be`: Kannada has no such word in «ನಾನು ಶಿಕ್ಷಕ» (§4.10) |
| auxiliary verb | ಸಹಾಯಕ ಕ್ರಿಯಾಪದ (helping verb) | |
| modal verb | modal (can, should, must) | «modal ನಂತರ V1» |
| third-person singular -s | he / she / it ಜೊತೆ ಬರುವ -s | |
| base form / past / past participle | V1 / V2 / V3 | Indian school convention, as hi.md; not verified for Kannada-medium books |
| regular / irregular verb | ನಿಯಮಿತ / ಅನಿಯಮಿತ ಕ್ರಿಯಾಪದ | |
| -ing form | -ing ರೂಪ | |
| tense | ಕಾಲ (tense) | |
| present simple / continuous | Simple Present / Present Continuous | Kannada «ಮಾಡುತ್ತಿದ್ದೇನೆ» maps onto the continuous, and too far (§4.3) |
| past simple / past continuous | Simple Past / Past Continuous | |
| future | will / be going to | |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | Lessons `perfect`, `perfect-2`, `stative-since` |
| stative verb | ಸ್ಥಿತಿ ತಿಳಿಸುವ ಕ್ರಿಯಾಪದ (stative verb) | know, want, have (owning), understand, like, need |
| passive / active | Passive Voice (ಕರ್ಮಣಿ ಪ್ರಯೋಗ) / Active Voice (ಕರ್ತರಿ ಪ್ರಯೋಗ) | |
| conditional | if ವಾಕ್ಯ (conditional) | |
| relative clause | who / which / that ಇರುವ ಉಪವಾಕ್ಯ | |
| reported speech | Indirect Speech (ಪರೋಕ್ಷ ಕಥನ) | |
| infinitive / gerund | to + V1 / -ing | |
| conjunction | ಜೋಡಿಸುವ ಪದ (and, but, because) | |
| adjective / adverb | ಗುಣವಾಚಕ / ಕ್ರಿಯಾವಿಶೇಷಣ | |
| comparative / superlative | comparative / superlative (ಹೋಲಿಕೆ) | |
| question word | wh-ಪದ (what, where, why) | |
| yes/no question / wh-question | ಹೌದು-ಇಲ್ಲ ಪ್ರಶ್ನೆ / wh-ಪ್ರಶ್ನೆ | |
| question tag | question tag (…, isn't it?) | «ಅಲ್ವಾ?» is the Kannada counterpart (§4.6) |
| negative sentence | ನಿಷೇಧ ವಾಕ್ಯ | |
| word order | ಪದಗಳ ಕ್ರಮ | «ಕನ್ನಡ: ಕರ್ತೃ-ಕರ್ಮ-ಕ್ರಿಯಾಪದ; ಇಂಗ್ಲಿಷ್: ಕರ್ತೃ-ಕ್ರಿಯಾಪದ-ಕರ್ಮ» |
| phrasal verb | ಫ್ರೇಸಲ್ ವರ್ಬ್ | |
| idiom | ನುಡಿಗಟ್ಟು | |
| Indian English | ಇಂಡಿಯನ್ ಇಂಗ್ಲಿಷ್ | Lesson `indian-english` |
| Kanglish | ಕಂಗ್ಲಿಷ್ | Mixed Kannada-English speech; lesson body only |
| pronunciation | ಉಚ್ಚಾರಣೆ | Toggle «ಉಚ್ಚಾರಣೆ ತೋರಿಸಿ» |
| stress / stress mark | ಒತ್ತು / ಒತ್ತಿನ ಗುರುತು (ˈ) | |
| vowel / consonant | ಸ್ವರ / ವ್ಯಂಜನ | |
| nukta (dot below) | ಚುಕ್ಕೆ | «ಚುಕ್ಕೆ ಇರುವ ಅಕ್ಷರ = ಕನ್ನಡದಲ್ಲಿ ಇಲ್ಲದ ಧ್ವನಿ» (§6) |
| virama (್) | ್ ಗುರುತು (ಅರ್ಧಾಕ್ಷರ) | «ಕೊನೆಯ ಅಕ್ಷರಕ್ಕೆ ್ ಇದ್ದರೆ ಅದರ ನಂತರ ಸ್ವರ ಇಲ್ಲ» (§6). The school name of the sign needs a native check |
| conjunct letter | ಒತ್ತಕ್ಷರ | «ಇಂಗ್ಲಿಷ್‌ನ ಎರಡು ಒಂದೇ ಅಕ್ಷರ ಒತ್ತಕ್ಷರ ಅಲ್ಲ: happy = ಹ್ಯಾಪಿ» (§4.2) |
| aspirated / unaspirated | ಮಹಾಪ್ರಾಣ / ಅಲ್ಪಪ್ರಾಣ | School terms; used in `pron` for English p, t, k |
| schwa / weak form | ಹಗುರವಾದ "ಅ" / ದುರ್ಬಲ ರೂಪ | |
| linking | ಸೇರಿಸಿ ಹೇಳುವುದು | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; **the ranking is this profile's inference**, because no opened source counts errors by type for Kannada speakers. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Kannada) and every example with no named source is [practitioner opinion] and [native check].**

**Main opened evidence:**
- [Wiltshire 2015](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2015-Wiltshire-IJDL-Dravid-Eng.pdf), "Dravidian Varieties of Indian English" (V.I. Subramoniam commemoration volume, IJDL): **5 proficient speakers each of Kannada, Malayalam, Tamil and Telugu**, aged 20–27, graduates, recorded in Hyderabad reading word lists, sentences and a paragraph. Vowel formants and durations, VOT, rhotics, and [w] / [ʋ] / [v] in 6 *w*-words and 6 *v*-words. The only opened study with Kannada-L1 English data; the speakers are highly proficient, so it shows what survives, not what beginners do.
- [Jain, Pal, Vuppala, Ghosh & Yarra, *An Investigation of Indian Native Language Phonemic Influences on L2 English Pronunciations*](https://ar5iv.labs.arxiv.org/html/2212.09284) (arXiv 2212.09284): pronunciation rules for Indian English from 15,974 annotated Indic TIMIT recordings of 80 speakers of 18 L1s (Kannada in the "Upper South" group with Telugu; about 4–5 speakers per L1). Rules are pooled; **none is given for Kannada alone**.
- [Demszky, Sharma, Clark, Prabhakaran & Eisenstein, *Learning to Recognize Dialect Features*](https://ar5iv.labs.arxiv.org/html/2010.12707) (arXiv 2010.12707): 22 Indian English features annotated in **ICE-India** spoken dialogues (S1A-001–090), each with an example. Speakers of many L1s; no frequencies in the part read.
- [SJSU, *Guide: Indian-English Variations*](https://gcp-web.sjsu.edu/wac/docs/Guide%20Indian-English%20Variations.pdf) (San José State University, Writing Across the Curriculum): ten groups of differences with examples "drawn from former students as well as published sources" (Lange 2012, Mesthrie & Bhatt 2008, Sailaja 2009). A teaching guide: [curriculum convention], not a study.
- [Bilinguistics, Kannada speech and language development](https://bilinguistics.com/languages/kannada-speech-and-language-development/): a contrast table (no articles, postpositions, SOV, no general copula, "inversion not used" in questions, phoneme inventories) compiled for speech therapists from Schiffman 1983, Sridhar-era grammars and web sources: [practitioner opinion].
- Kannada facts: the English Wikipedia articles *Kannada*, *Kannada grammar*, *Kannada script* and *Kanglish*; Penn's spoken Kannada lesson 2; `docs/profiles/en-kn.md`.
- **Not readable:** [Nanjaiah 1994, *A linguistic study of errors in the written English of PUC students*](https://sanchika.ciil.org/items/ba486f18-3f81-458f-92de-668e66fc944d) (CIIL, 223 pages, written for "the Kannada-speaking population learning English"): the repository file is a 114 KB scanned image. It is the study this section most needs (§11).

1. **Articles: omission, overuse, and *one* for *a*.**
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `I did internship at Ascent. ✗ → I did an internship at Ascent. ✓` (SJSU) / `She gave me one book. ✗ → She gave me a book. ✓` (SJSU) / `I have a good news. ✗ → I have some good news. ✓` (SJSU) / `What is wrong with paper? ✗ → What is wrong with the paper? ✓` (SJSU).
   - *Why:* Kannada has no articles. ಒಂದು ("one") sometimes does the work of *a* (ಒಂದು ಪುಸ್ತಕ ಕೊಡಿ), and ಆ / ಈ ("that / this") the work of *the*, but both are optional; definiteness is left to context.
   - *Evidence:*
     - [curriculum convention] "There is no article in Kannada. Only demonstrative and possessive pronouns" (Microsoft Kannada Style Guide); "numbers and the demonstratives ī and ā can indicate definiteness" (*Kannada grammar*); the Bilinguistics table: indefinite article "None; 'one' (ಒಂದು) sometimes used".
     - [research-backed, features only] Demszky et al.: ARTICLE OMISSION (`(the) chair is black`) and EXTRANEOUS ARTICLE (`she has a business experience`) are both annotated ICE-India features.
     - [curriculum convention] SJSU §6.1: articles "are frequently omitted. Also, the word *one* often replaces the indefinite article."
   - **Content consequence:** both directions, as in hi: *a* for one countable thing and *the* for a known thing, **and** no article for general uncountables (*news, advice, information*). *One* for *a* is the Kannada-specific third trap (`I have one doubt`). No Kannada error rate exists; never gate on articles.
2. **A vowel after the last consonant; doubled consonants; final clusters.**
   - *What goes wrong:* a short *u* (sometimes *i*) is added after a final consonant (`bus-u`, `car-u`, `book-u`, `film-u`); a consonant doubled in Kannada loan spelling is said double (ಬಸ್ಸು *bas-su*, ಬುಕ್ಕು, ಪೆನ್ನು), and English double letters are read as double sounds (*hap-py*, *din-ner*); final clusters and the -s / -ed endings lose a consonant or gain a vowel (*asked* → *ask-u-d*, *months* → *mon-ths-u*).
   - *Why:* native Kannada words end in a vowel, and Kannada spelling writes every vowel that is said. English loans in Kannada get a final -ಉ: the reverse course teaches ಬಸ್ಸಿನಲ್ಲಿ and accepts ಬಸ್ಸು for ಬಸ್ (en-kn §2.2), and Kannada contrasts single and doubled consonants in meaning (ಕತೆ / ಕತ್ತೆ; Kochetov 2015, 9 Mysore speakers, as reported in en-kn §4: geminate laterals 2.2–2.8 times as long as singletons).
   - *Evidence:*
     - [curriculum convention] *Kanglish* (Wikipedia; one citation, flagged as needing more): "the addition of the suffix '-u' at the end of the word", with *heart-u, life-u, car-u*.
     - [curriculum convention] The Bilinguistics page says Kannada words "end with a vowel, meaning that there are no final consonants" (its own syllable formula, (C)(C)V(C), disagrees; §11).
     - [practitioner opinion] That the habit carries into English speech, and the doubled-consonant and cluster points, are this profile's inference; **no opened study measures final-vowel epenthesis in Kannada speakers' English** (§11). A grammar that states the rule for loans (Zydenbos, *A Manual of Modern Kannada*) appeared in search results but its site refused the fetch.
   - **Content consequence:** the aid itself teaches it (§6: every final consonant carries ್), the `alphabet` and `pron` reweights say it in the first two lessons, deck 18 gets kn cards (*bus, car, book, film, asked, happy*), and -s / -ed lessons spell the endings as sounds.
3. **Continuous with states and durations; *since / for / from*.**
   - *Examples:* `I am working here from two years. ✗ → I've worked here for two years. ✓` / `I am knowing him since 2019. ✗ → I've known him since 2019. ✓` / `I am not having a copy. ✗ → I don't have a copy. ✓` (SJSU) / `I was not knowing this. ✗ → I didn't know this. ✓` (SJSU) / `I am believing you. ✗ → I believe you. ✓` (SJSU).
   - *Why:* Kannada says an ongoing state or action that began in the past with the continuous plus **-ಇಂದ**: «ನಾನು ಎರಡು ವರ್ಷದಿಂದ ಇಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ». -ಇಂದ is also *from* and *by* (the article lists it as the instrumental ending), so *from two years* follows. States that English keeps simple are often not verbs at all in Kannada (ನನಗೆ ಗೊತ್ತು "to-me known", ನನ್ನ ಹತ್ತಿರ ಕಾರು ಇದೆ "near-me car is"), so the learner has no model for *know* and *have* and reaches for be + -ing.
   - *Evidence:* [research-backed, features only] Demszky et al.: STATIVE PROGRESSIVE (`he is having a television`), HABITUAL PROGRESSIVE (`always we are giving receipt`). [curriculum convention] SJSU §1.1 (above) and the *Kannada grammar* article ("-utta marks the present and future tenses as well as the continuous"; continuous = -utta participle + *iru*). No Kannada-L1 count.
   - **Content consequence:** `continuous`, `tense`, `perfect`, `perfect-2` reweights and the added lesson `stative-since` (§8). Teach *since* + point in time, *for* + length of time, never *from* + length.
4. **Plurals and countability.**
   - *Examples:* `two book ✗ → two books ✓` / `one of my friend ✗ → one of my friends ✓` / `informations, equipments, furnitures, feedbacks ✗ → information, equipment, furniture, feedback ✓` (SJSU §4) / `Let's go through the alphabets. ✗ → …the letters of the alphabet. ✓` (SJSU).
   - *Why:* in Kannada a thing-noun after a number usually stays as it is (ಎರಡು ಪುಸ್ತಕ; -ಗಳು is optional for non-human nouns) [native check]; "mass nouns and semantic plurals are often grammatically singular" (*Kannada grammar*). Countability is not marked, and Kannada counts ಸಲಹೆ, ಮಾಹಿತಿ, ಸಾಮಾನು freely.
   - *Evidence:* [research-backed, features only] Demszky et al.: MASS NOUNS AS COUNT NOUNS (`all the musics are very good`). [curriculum convention] SJSU §4. No Kannada-L1 count.
   - **Content consequence:** the plural half of the standing rule is earned (§7). `plurals` and `countable` reweights.
5. **Third-person -s and agreement.**
   - *Examples:* `She know JavaScript. ✗ → She knows JavaScript. ✓` (SJSU) / `He do a lot of things. ✗ → He does… ✓` (Demszky et al.) / `She don't like tea. ✗ → She doesn't like tea. ✓`.
   - *Why:* Kannada verbs agree with the subject in every person (ಬರುತ್ತೇನೆ, ಬರುತ್ತೀರಿ, ಬರುತ್ತಾನೆ, ಬರುತ್ತಾಳೆ; native check), so the idea is familiar; what is missing is the habit of one lone -s, and the final /s z/ is fragile for the reason in zone 2.
   - *Evidence:* [research-backed, features only] Demszky et al.: LACK OF AGREEMENT. [curriculum convention] SJSU §1.5.
6. **Questions: no inversion, no *do*, and the tags *isn't it? / no?***
   - *Examples:* `Where you are going? ✗ → Where are you going? ✓` / `You will come? ✗ → Will you come? ✓` (SJSU) / `What you want? ✗ → What do you want? ✓` / `I don't know what are they doing. ✗ → …what they are doing. ✓` (Demszky et al.) / `You were in San José, isn't it? ✗ → …weren't you? ✓` (SJSU) / `She was helping you, no? → …wasn't she?`.
   - *Why:* a Kannada yes/no question is the statement plus **-ಆ** (Penn lesson 2: *idu pustakav-aa?* "Is this a book?", *niivu amerikkan-aa?*), a wh-word stays where the answer would be, and nothing moves; the Bilinguistics table: "inversion not used". The one Kannada tag is **ಅಲ್ವಾ?** for every subject and tense [native check], which becomes *isn't it?* or *no?*.
   - *Evidence:* [research-backed, features only] Demszky et al.: LACK OF INVERSION IN WH-QUESTIONS (`what you are doing?`), INVERSION IN EMBEDDED CLAUSE, INVARIANT TAG (`the children are outside, isn't it?`). [curriculum convention] SJSU §2: the invariant *isn't it* "in all situations regardless of the anchor clause", and *no* as a tag; it quotes Mesthrie & Bhatt that Indian English speakers find the invariant tag "non-impositional and mitigating".
   - **Treatment:** inversion and *do* are errors everywhere. The invariant tag is acceptable Indian English and is presented as such (`indian-english`, group 1), with the matching tag as what listeners abroad expect.
7. **Prepositions from case endings and postpositions.**
   - *Examples:* `He is angry on me. ✗ → …angry with me. ✓` (ನನ್ನ ಮೇಲೆ ಕೋಪ) / `today morning, yesterday night ✗ → this morning, last night ✓` (ಇವತ್ತು ಬೆಳಿಗ್ಗೆ, ನಿನ್ನೆ ರಾತ್ರಿ) / `discuss about the plan ✗ → discuss the plan ✓` (SJSU; ಅದರ ಬಗ್ಗೆ ಚರ್ಚಿಸು) / `pay attention on ✗ → pay attention to ✓` (SJSU) / `I told to him. ✗ → I told him. ✓` (ಅವನಿಗೆ ಹೇಳಿದೆ) / `I went another school. ✗ → I went to another school. ✓` (Demszky et al.) / `in Monday, in night ✗ → on Monday, at night ✓`.
   - *Why:* Kannada puts the relation **after** the noun, as an ending or a separate word (ಮನೆಯಲ್ಲಿ, ಮನೆಗೆ, ಮನೆಯಿಂದ; the Bilinguistics table: "uses postpositions after nouns"). One ending covers several English prepositions: **-ಅಲ್ಲಿ** = in / on / at, **-ಗೆ** = to / for, **-ಇಂದ** = from / since / by. Days and parts of the day take no marker at all.
   - *Evidence:* [research-backed, features only] Demszky et al.: PREPOSITION OMISSION. [curriculum convention] SJSU §6.2. The Kannada mappings are [native check].
8. **Word order, focus and dropped words.**
   - *Examples:* `I am here only. → I'm right here. ✓` / `The report will come today itself. → …today. ✓` (SJSU) / `I also am coming. ✗ → I'm coming too. ✓` / `This book I will return tomorrow. → I'll return this book tomorrow.` (SJSU) / `Every year inflation is there. → There is inflation every year.` (Demszky et al.) / `I didn't expect. ✗ → I didn't expect it. ✓` (SJSU) / `Is raining. ✗ → It's raining. ✓` / `My brother, he lives in California. → My brother lives in California.` (Demszky et al.).
   - *Why:* Kannada is verb-final (SOV; "other combinations are permitted", *Kannada grammar*), moves the topic to the front freely, drops a subject or object that is clear ("subject may be omitted when inferable", Bilinguistics), says existence with ಇದೆ at the end, and marks emphasis with the endings **-ಏ** (ಇವತ್ತೇ "today itself", ಇಲ್ಲಿಯೇ "here only") and **-ಊ** ("also") on the word they belong to [native check].
   - *Evidence:* [research-backed, features only] Demszky et al.: FOCUS *itself*, FOCUS *only*, OBJECT FRONTING, NON-INITIAL EXISTENTIAL, DIRECT OBJECT PRO-DROP, LEFT DISLOCATION, RESUMPTIVE PRONOUNS. [curriculum convention] SJSU §§1.4, 3, 7.
   - **Treatment:** *only / itself* and fronting are Indian English (group 1 of `indian-english`); a missing subject or object and *I also am* are errors.
9. **he / she / it: a different gender system, but a small zone.**
   - *Examples:* `The baby is crying. It is hungry. → He's / She's hungry.` / `I have a dog. It is three years old. → He's / She's three.` (pets) / `My father, they are coming tomorrow. ✗ → My father is coming tomorrow. ✓`.
   - *Why:* unlike Hindi (one वह for all three), Kannada has **ಅವನು / ಅವಳು / ಅದು**, and third-person verbs agree with them, so the he / she split itself is familiar. The differences: (a) only humans and gods are masculine or feminine; "animals with biological sex" and "infants and young children" are neuter (*Kannada grammar*), so a baby or a pet is ಅದು; (b) a respected single person is **ಅವರು** with a plural verb (en-kn §2.3); (c) ಇವನು / ಅವನು mark near and far ("this he / that he"), which English does not.
   - *Evidence:* [curriculum convention] the grammar description only. **No opened source reports he / she / it errors by Kannada speakers**; this zone is ranked low on purpose.
10. ***be* left out or doubled at beginner level.**
   - *Examples:* `I teacher. ✗ → I'm a teacher. ✓` / `My parents from Mysuru. ✗ → My parents are from Mysuru. ✓` / `She is knowing. ✗` (zone 3).
   - *Why:* Kannada says "X is Y" with no verb: «ನಾನು ಶಿಕ್ಷಕ», «ಇದು ಪುಸ್ತಕ» (en-kn §4; Penn lesson 2; the Bilinguistics table: "No general copula"); ಇದೆ is only for place, existence and having.
   - *Evidence:* [research-backed, features only] Demszky et al.: COPULA OMISSION (`my parents (are) from Gujarat`).
   - **Content consequence:** the `be` lesson matters more here than for Hindi speakers (hi.md: "Hindi always has है, so omission is rare").
11. **Tense choice and marking.**
   - *Examples:* `I have bought the book yesterday. ✗ → I bought the book yesterday. ✓` (SJSU) / `She like the photograph yesterday. ✗ → She liked… ✓` (SJSU) / `I didn't went. ✗ → I didn't go. ✓` / `He said that he will come. → He said he would come.` / `The next step would be to identify the features.` for a plain future (SJSU §1.6).
   - *Why:* Kannada has past and non-past ("tenses are primarily past and non-past", *Kannada grammar*); the perfect-like «ಮಾಡಿದ್ದೇನೆ» is used with finished times too; reported speech keeps the speaker's own words before ಅಂತ / ಎಂದು [native check]; and the -ed ending is one more fragile final consonant (zone 2).
   - *Evidence:* [curriculum convention] SJSU §§1.2, 1.3, 1.6.
12. **Indian English and Kannada-shaped usages that puzzle listeners abroad.**
   - *Fine in India, unusual abroad* (SJSU §8 unless marked): prepone (→ move up), out of station (→ out of town), I have a doubt (→ a question), passed out (→ graduated), shift (→ move), hotel (= restaurant), revert back (→ reply), do the needful, giving / writing an exam (→ taking), taking lunch (→ having), mugging (→ cramming), too good (→ very good), What's your good name? (→ What's your name?).
   - *Kannada calques* [native check, every one]: *I'll go and come* (ಹೋಗಿ ಬರುತ್ತೇನೆ; en-kn §2.4 gives the Kannada formula) → *See you later*; *Had your lunch?* as a greeting (ಊಟ ಆಯ್ತಾ?; en-kn §2.4) → *How's it going?*; *Tell me* at the start of a call (ಹೇಳಿ) → *What's up? / How can I help?*; *I simply asked* (ಸುಮ್ಮನೆ) → *I was just asking*; *one minute, I'll come* (ಒಂದು ನಿಮಿಷ, ಬರ್ತೀನಿ) → *I'll be right back*; *please adjust* (ಸ್ವಲ್ಪ adjust ಮಾಡಿ: the English word + ಮಾಡಿ pattern of the *Kanglish* article's «ಸ್ವಲ್ಪ ಮೂವ್ ಮಾಡಿ») → *Could you make some room? / Please bear with us*; *small small things* (ಸಣ್ಣ ಸಣ್ಣ; SJSU §5 reduplication) → *little things*.
   - **Content consequence:** the added lesson `indian-english` and deck 22 (§8, §9), framed as "what listeners abroad expect".
13. **Consonants Kannada lacks or says differently.**
   - **/f/ → ಫ (p or ph), /z/ → ಜ (j) or ಸ (s):** `fan` → *pan / phan*, `zoo` → *joo / soo*, `is` → *iss*. [curriculum convention] *Kannada*: /f/ and /z/ occur in English and Perso-Arabic loans "but may be replaced by /pʰ/ and /dʒ/". [research-backed, pooled] Jain et al.: **z → s** is in their data and tied to Dravidian L1s; *f → pʰ* is in their "literature only" class, not confirmed by their data. [practitioner opinion] TalkDrill names /z/, /f/ and v–w as priorities for Telugu and Kannada speakers (no sources).
   - **/θ ð/ → dental stops:** `three` = `tree`-like, `this` → *dis*. [research-backed, pooled] Jain et al.: θ → t̪ (unaspirated for Dravidian speakers), ð → d̪, in both literature and data.
   - **/v/ and /w/: less of a problem than for Hindi speakers.** [research-backed] Wiltshire 2015: the 5 Kannada speakers said the 30 *w*-word tokens as [w] 27 times and [ʋ] 3 times, and the 30 *v*-word tokens as [ʋ] 15, [v] 10 and [w] 5 times: "a fairly strong distinction", unlike the free variation reported for Gujarati and Delhi speakers. So Kannada speakers mostly keep *w* apart from *v*; what is missing is the friction of a real /v/ (only 10 of 30).
   - **/ʒ/** (measure, usually) → ಶ / ಜ: listed among sounds Kannada lacks (Bilinguistics); no data.
   - **t, d retroflex; p, t, k unaspirated; r tapped.** [research-backed] Wiltshire 2015: mean VOT for the Kannada group 32 ms (p), 22 ms (t), 44 ms (k), "stop aspiration rare"; prevocalic r mostly a tap; post-vocalic r said in 12% of 210 tokens. Jain et al.: t, d → ʈ, ɖ in data and literature. All three are understood everywhere; the course mentions aspiration once and does not chase the r.
   - **A glide before an initial vowel:** *yem, yen, yes, yell* for the letters M, N, S, L; *vonly* for *only*. [research-backed, noted not tested] Jain et al. describe Kannada "semivowel insertion before word-initial vowels (/j/ before front vowels, /ʋ/ before back vowels)". It matters most in the `alphabet` lesson.
14. **Vowels, stress and rhythm.**
   - **/ɔː/ said as /oː/:** `caught` = `coat`, `law` = `low`, `saw` = `so`. [research-backed] Wiltshire 2015: "the vowels of *caught* and *coat* overlap for all groups", and the Kannada group's *coat* also overlaps *hook*.
   - **/ɪ/ close to /eɪ/ in quality:** Kannada (and Malayalam) speakers produced "*hit* and *hate* very similarly to each other", kept apart by length (82 ms vs 205 ms for the Kannada group). **Length is used well:** *heat* 190 ms vs *hit* 82, *hoot* 168 vs *hook* 89, as in Kannada itself. So *ship / sheep* is not a Kannada problem; the quality of short *i* and the diphthongs in *name* and *go* (said as long ಏ, ಓ) are.
   - **/æ/ is available:** Kannada "has an additional front low vowel" (Wiltshire's Table 3; *Kannada*: /æː/ in English loans), written ್ಯಾ (ಬ್ಯಾಂಕ್). *bad / bed* is easier than for Hindi speakers.
   - **Stress and weak vowels:** every Kannada vowel is said in full, so English unstressed vowels are not reduced (*ba-na-na* with three equal ಅ), and stress may sit on the wrong syllable. [practitioner opinion] TalkDrill ("over-pronouncing weak English vowels", *pho-TO-graphy* as the pattern to learn). **No opened study measures stress placement for Kannada speakers**; a 2023 ICPhS paper saying most Indian languages lack contrastive lexical stress appeared in search results but was not opened.
   - **s-clusters:** TalkDrill claims *is-kool* for South Indian speakers generally. For Kannada speakers this profile expects the cluster to be fine at the start (ಸ್ಕೂಲ್, ಸ್ಟೇಷನ್ are ordinary spellings) and the vowel to appear at the **end** (*school-u*) [practitioner opinion; native check].

## 5. Learner starting point

- **Who speaks Kannada.** Census 2011: **43.7 million native speakers in India**, 40.6 million of them in Karnataka (about two-thirds of the state); 1.14 million in Tamil Nadu, 0.99 million in Maharashtra; about 48,600 in the US (2015) ([Wikipedia, *Kannada*](https://en.wikipedia.org/wiki/Kannada), citing the census) [curriculum convention: census via Wikipedia]. Wiltshire's Table 1 (1991 census): 32.75 million Kannada L1 speakers, of whom 3.09 million reported English as a second language and 0.83 million as a third: about 12%.
- **School exposure.**
  - Karnataka's 1994 language policy made Kannada (or the mother tongue) the medium of instruction in state primary schools; in 2006 the government acted against about 2,100 primary schools teaching in English; the share of children in government schools fell from 76% to 58% ([The News Minute, 15 June 2018](https://www.thenewsminute.com/amp/story/karnataka/banned-english-schools-2006-now-wants-language-lkg-hdk-s-u-turn-83139)).
  - English-medium sections opened in **1,000 government schools** from May 2019; in about 75% of them the English section had more than 20 children and it "outpaced" the Kannada section. The 1,600 teachers got a 12-day training, which experts called too short ([The News Minute, 29 February 2020](https://www.thenewsminute.com/karnataka/karnataka-s-english-medium-schools-demand-training-teachers-challenge-119183)).
  - **English as a compulsory subject from class 1 in Kannada-medium schools since 2007**: seen only in search-result snippets (Business Standard 2006; the Karnataka class 3 English reader's preface); neither page could be opened [unverified, §11].
  - Phonetic symbols are not part of Indian school English according to hi.md §6 (The Week 2016, about CBSE; **not re-opened**, and nothing was found for the Karnataka state board).
  - So adults aged 20–40 from Kannada-medium schools had 10–12 years of English as a subject taught through Kannada, with reading and writing ahead of listening and speaking; Bengaluru professionals use English at work every day and want polish, not basics [practitioner opinion].
- **Exams and goals** [practitioner opinion; no source opened]: SSLC and PUC English papers; Karnataka government recruitment exams with an English paper; campus and IT / BPO interviews in Bengaluru; IELTS / PTE for study and work abroad. Familiar task formats (fill in the blanks, error spotting, sentence transformation, translation) map onto `mc`, `fill` and `type`.
- **Profile figures** [research-backed, test-taker data]: EF EPI's India page: India **479**, rank **69** (global average 485); skills **reading 531, writing 494, speaking 454, listening 408**; **Karnataka 479**, **Bengaluru 553** (among the top listed cities with Kochi 558 and Mumbai 557) ([EF EPI, India](https://www.ef.com/wwen/epi/regions/asia/india/)). Self-selected online test-takers of many L1s; not a Kannada-speaker figure. A search snippet gave the 2025 sheet as India 484, Karnataka 503, Bengaluru 569; that sheet was not opened.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners who know the forms. The value is in typed production and audio.
  2. **Listening first.** Listening is the lowest EF skill by a wide margin. Weight listen-then-type review, the final-consonant pairs and the stress mark.
  3. **The city / district gap is large** (Bengaluru 553 vs Karnataka 479): explanations must work for a Kannada-medium learner without assuming office English, while examples can use office scenes.
  4. **Never gate on articles or the since-continuous error**; both are features of fluent Indian English (Demszky et al.).
  5. **Respect Indian English.** Present international forms as "what listeners abroad expect". Learners who work with Indian colleagues will keep using Indian English with them.
  6. **Use what Kannada gives for free:** vowel length (ship / sheep), /æ/ (ಬ್ಯಾಂಕ್), a he / she / it split, a mostly intact v / w contrast. Say so in the lessons; it is true and it is encouraging.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.**
  - [curriculum convention] Kannada learners' dictionaries print pronunciation in Kannada script: Oxford's *English-English-Kannada Dictionary* (launched November 2018, over 52,000 entries) "provides a pronunciation guide in both IPA and Kannada" ([Careers360](https://news.careers360.com/oup-launches-english-english-kannada-dictionary-over-52000-date-entries/amp)). How its Kannada guide spells each sound could not be seen (§11).
  - [curriculum convention] Kannada already has a spelling tradition for English sounds: ್ಯಾ for the vowel of *bank* (ಬ್ಯಾಂಕ್; en-kn reads ಥ್ಯಾಂಕ್ಸ್ as *thyānks*), ಆ for the vowel of *office* and *coffee* (ಆಫೀಸ್, ಕಾಫಿ; both in en-kn §2.5), ಟ ಡ for English t d (ಟಿಕೆಟ್, ಡಾಕ್ಟರ್), and ್ on a final consonant (ಬಸ್, ಫೋನ್). The nukta ಼ (U+0CBC) exists in Unicode for exactly this purpose, and "some writers" use ಜ಼ and ಫ಼ for z and f in English and Urdu loans (en-kn §10.3) [the "some writers" claim is en-kn's inference].
  - [curriculum convention, via hi.md] Indian school English does not teach phonetic symbols (hi.md §6; not re-opened, CBSE only).
  - **Kannada spelling is read exactly as written**: no silent inherent vowel (unlike Hindi, where डॉग is read *dɔg*), every written vowel said, vowel length always marked (en-kn §1: "Kannada writes every vowel it says"). A respelling in Kannada script is therefore *more* precise than one in Devanagari: ಬಸ್ and ಬಸ್ಸು are two different readings, and so are ಗೆಟ್ (get) and ಗೇಟ್ (gate).
- **What plain Kannada loan spelling gets wrong** (ಬಸ್ಸು, ವೆರಿ, ಥಿಂಕ್, ದಿಸ್, ಜೀರೋ, ಫೋನ್ read *pʰōn*):
  - a final -ಉ and doubled consonants (zone 2), the errors themselves;
  - ಥ / ದ for /θ ð/, ಜ and ಫ without a dot for /z f/, one ವ for /v/ and /w/;
  - ಓ for the vowel of *law, caught* in some spellings (ಲೋ), the *caught = coat* merger itself (§4.14);
  - no stress, and full vowels where English reduces them.
- **No study compares respelling, IPA and no aid** for Kannada learners. The recommendation is inference [practitioner opinion].

**Recommendation: a Kannada-script respelling in every `pron` field (profile.json `"pron": "required"`), with a nukta on every sound Kannada lacks, ್ on every consonant that has no vowel after it, and ˈ for stress.** Shown by default and hidden with the toggle «ಉಚ್ಚಾರಣೆ ತೋರಿಸಿ».
- **IPA rejected.** It would let the zh rows be copied byte for byte, and the Oxford dictionary shows IPA is not unknown. But most learners cannot read it; the course has no lesson to teach it; and the two most Kannada-specific errors (the final vowel and the doubled consonant) are *spelling-reading* habits that only a Kannada-script aid can contradict in the learner's own terms. The copying advantage is kept anyway (next point).
- **`none` / `optional` rejected** for hi.md's reasons: every ko-based course carries an aid, an empty field needs untested engine rendering (PIPELINE §3), and the short words where the aid matters most would be the ones left empty.
- **The cost of not copying zh, and how it is cut.** The key below is a **one-to-one table from zh's IPA symbols**, so every kn row is derived mechanically from the zh row for the same English string. This was tested, not assumed: a scratch converter (hi's `pron_hi.js` with the tables and three rules below swapped in) converted **all 776 distinct IPA strings found in `packs/course-zh-en.js`** with 0 unknown symbols and 0 `pronPattern` failures; the only two IPA strings that gave the same output are zh's two spellings of *McDonald's* (/məkˈdɑːnldz/, /məkˈdɑːnəldz/), which is a zh inconsistency.
  - Recommended to the lead (not written by this profile): `tools/content/kn/pron_kn.js`, copied from `tools/content/hi/pron_hi.js`, plus a `pron_lookup.json` built from the zh pack as hi did. Writers then write only localised cards, kn-only cards and the two kn-only lessons from IPA through the tool.
  - `lint.js` already blocks the same English text with two different aids inside one pack.

**The key.**

*Vowels.* The independent letter is used at the start of a word or after another vowel; the sign after a consonant.

| Sound (zh IPA) | Independent / sign | Examples (kn `pron`) | Note |
|---|---|---|---|
| FLEECE iː | ಈ / ೀ | see ಸೀ, leave ಲೀವ಼್ | long |
| KIT ɪ; final unstressed -y i | ಇ / ಿ | live ಲಿವ಼್, very ˈವ಼ೆರಿ | short; *ship / sheep* = ಶಿಪ್ / ಶೀಪ್ |
| DRESS e | ಎ / ೆ | bed ಬೆಡ್, get ಗೆಟ್ | short ಎ |
| FACE eɪ | ಏ / ೇ | name ನೇಮ್, gate ಗೇಟ್, today ಟˈಡೇ | long ಏ; **no collapse with DRESS** (hi has one) |
| TRAP æ | ಆ್ಯ / ್ಯಾ | bad ಬ್ಯಾಡ್, apple ˈಆ್ಯಪಲ್, thank ಥ಼್ಯಾಂಕ್ | the Kannada loan spelling (ಬ್ಯಾಂಕ್). Word-initial ಆ್ಯ = ಆ + ್ + ಯ (U+0C86 U+0CCD U+0CAF) |
| STRUT ʌ and schwa ə (anywhere, also word-final) | ಅ / (no sign) | cup ಕಪ್, about ಅˈಬೌಟ್, banana ಬˈನ್ಯಾನ, sofa ˈಸೋಫ಼ | **collapse**; stressed = ʌ. Final ə is the bare consonant, which a Kannada reader says as a short *a* |
| LOT and PALM ɑː | ಆ / ಾ | hot ಹಾಟ್, copy ˈಕಾಪಿ, father ˈಫ಼ಾದ಼ರ್ | American value |
| THOUGHT ɔː (not before r) | ಆ / ಾ | talk ಟಾಕ್, dog ಡಾಗ್, coffee ˈಕಾಫ಼ಿ | **collapse with ɑː**, see below. Never ಓ |
| GOAT oʊ | ಓ / ೋ | go ಗೋ, hotel ಹೋˈಟೆಲ್ | |
| GOOSE uː | ಊ / ೂ | food ಫ಼ೂಡ್, two ಟೂ | |
| FOOT ʊ; weak u | ಉ / ು | book ಬುಕ್, good ಗುಡ್ | |
| PRICE aɪ | ಐ / ೈ | I ಐ, time ಟೈಮ್ | Kannada has the letter |
| MOUTH aʊ | ಔ / ೌ | house ಹೌಸ್, now ನೌ | Kannada has the letter |
| CHOICE ɔɪ | ಆಯ್ / ಾಯ್ (ಆಯ / ಾಯ before a vowel) | boy ಬಾಯ್, noise ನಾಯ್ಜ಼್ | as Kannada writes ಬಾಯ್ |
| NURSE ɜːr and lettER ər | ಅರ್ / ರ್ after a consonant | work ವರ್ಕ್, bird ಬರ್ಡ್, water ˈವಾಟರ್ | **collapse**; stress tells them apart |
| NEAR ɪr, SQUARE er, CURE ʊr | ಇರ್, ಎರ್, ಉರ್ / ಿರ್, ೆರ್, ುರ್ | here ಹಿರ್, there ದ಼ೆರ್, sure ಶುರ್ | |
| START ɑːr | ಆರ್ / ಾರ್ | car ಕಾರ್ | |
| NORTH ɔːr | **ಓರ್ / ೋರ್** | door ಡೋರ್, four ಫ಼ೋರ್, important ಇಮ್ˈಪೋರ್ಟನ್ಟ್ | the American vowel before r is close to ಓ, and it keeps *car* and *core* apart |

*Consonants.* A dot below (ಚುಕ್ಕೆ, U+0CBC) always means "a sound Kannada does not have: do not say the plain letter". **ಫ, ಥ and ದ never appear without the dot in a `pron`** (f, θ and ð are their only uses), and `pronPattern` enforces that.

| Sound | Write | Examples | Note for the `pron` lesson |
|---|---|---|---|
| p b k g | ಪ ಬ ಕ ಗ | pen ಪೆನ್, bag ಬ್ಯಾಗ್ | p, t, k at the start of a stressed syllable have a light puff (ಮಹಾಪ್ರಾಣದ ಹಾಗೆ): said in the lesson, not written |
| t d | ಟ ಡ | time ಟೈಮ್, day ಡೇ | the usual Kannada spelling of English t, d; never ತ ದ |
| f | **ಫ಼** | fan ಫ಼್ಯಾನ್, coffee ˈಕಾಫ಼ಿ | «ಮೇಲಿನ ಹಲ್ಲು ಕೆಳತುಟಿಗೆ; ತುಟಿ ಮುಚ್ಚಬೇಡಿ». Not ಪ, not ಫ |
| v | **ವ಼** | very ˈವ಼ೆರಿ, vine ವ಼ೈನ್, have ಹ್ಯಾವ಼್ | **extension:** dotted ವ = the voiced partner of ಫ಼ (teeth on lip, a buzz you can hold) |
| w | **ವ** (no dot) | wine ವೈನ್, work ವರ್ಕ್, twenty ˈಟ್ವೆನ್ಟಿ | «ತುಟಿ ದುಂಡಗೆ ಮಾಡಿ, ಹಲ್ಲು ತಾಗಬಾರದು». Kannada speakers mostly have this sound already (Wiltshire 2015) |
| θ | **ಥ಼** | think ಥ಼ಿಂಕ್, three ಥ಼್ರೀ, mouth ಮೌಥ಼್ | **extension:** «ನಾಲಿಗೆಯ ತುದಿ ಹಲ್ಲುಗಳ ನಡುವೆ, ಗಾಳಿ ಹೊರಗೆ: ಥ ಅಲ್ಲ, ತ ಅಲ್ಲ» |
| ð | **ದ಼** | this ದ಼ಿಸ್, the ದ಼, brother ˈಬ್ರದ಼ರ್ | **extension:** the voiced partner of ಥ಼ |
| s z | ಸ **ಜ಼** | bus ಬಸ್, is ಇಜ಼್, zoo ಜ಼ೂ | never plain ಜ or ಸ for z: *zoo / Jew / Sue* = ಜ಼ೂ / ಜೂ / ಸೂ |
| ʃ ʒ | ಶ **ಶ಼** | she ಶೀ, measure ˈಮೆಶ಼ರ್ | **extension:** dotted ಶ = ಶ with voice. Rare (measure, usually, television) |
| tʃ dʒ | ಚ ಜ | check ಚೆಕ್, job ಜಾಬ್ | |
| h | ಹ | house ಹೌಸ್ | |
| m n | ಮ ನ | since ಸಿನ್ಸ್, lamp ಲ್ಯಾಮ್ಪ್, friends ಫ಼್ರೆನ್ಡ್ಜ಼್ | always the letter, as a conjunct before a consonant; **not** the anusvara, so that m and n cannot be confused |
| ŋ | ಂ before ಕ / ಗ; ಙ elsewhere | think ಥ಼ಿಂಕ್, English ˈಇಂಗ್ಲಿಶ್, long ಲಾಙ್, singing ˈಸಿಙಿಙ್ | no ಗ after ಙ: *singing* has no g sound |
| l r | ಲ ರ | rice ರೈಸ್, light ಲೈಟ್ | r before a consonant is ರ್ and shows as the arkavattu after the next letter (ವರ್ಕ್), as in ಪಾರ್ಕ್ |
| j | ಯ | yes ಯೆಸ್, cute ಕ್ಯೂಟ್ | |

*Derivation rules (apply in this order to the zh IPA of the same English string).*
1. **Words and sentences.** Drop the slashes. Words are separated by one space. zh's ` ‖ ` between two sentences becomes `. ` (full stop, space). zh's two slashed groups for alternatives become ` / `. No other punctuation, no digits, no Latin letters, no IPA symbols except ˈ.
2. **Stress: ˈ only in words of two or more syllables**, at the position zh puts it. Drop ˈ from one-syllable words and drop every ˌ (`/ˌfɪfˈtiːn/` → ಫ಼ಿಫ಼್ˈಟೀನ್). A syllable is a vowel symbol or a syllabic l / n (rule 6). The `pron` lesson says: «ˈ ನಂತರದ ಭಾಗವನ್ನು ಒತ್ತಿ ಹೇಳಿ; ಉಳಿದ ಭಾಗ ಹಗುರ, ಚಿಕ್ಕದು».
3. **Vowels and consonants** by the tables. A vowel that follows a consonant is written as its sign; at the start of a word, after another vowel or after ˈ that follows a ್, as the independent letter (idea /aɪˈdiːə/ → ಐˈಡೀಅ; within /wɪðˈɪn/ → ವಿದ಼್ˈಇನ್).
4. **Every consonant with no vowel after it takes ್ (U+0CCD), including the last consonant of the word.** This is the answer to "how is a final consonant shown without an added vowel": ಬಸ್, ಡಾಗ್, ಆ್ಯಸ್ಕ್ಟ್ (asked), ಮನ್ಥ಼್ಸ್ (months). A Kannada reader says exactly the consonant and stops. Inside a word the ್ makes the usual conjunct (ಸ್ಕೂಲ್, ಸ್ಟ್ರೀಟ್); where ˈ splits a cluster the ್ stays visible (ಇಕ್ˈಸ್ಕ್ಯೂಜ಼್). This is the opposite of hi rule 4 (no virama on the last consonant), because Kannada readers do not drop an unwritten vowel.
5. **Schwa is the bare consonant everywhere**, also at the end of a word: about ಅˈಬೌಟ್, hundred ˈಹನ್ಡ್ರಡ್, banana ಬˈನ್ಯಾನ, Canada ˈಕ್ಯಾನಡ. (hi writes final ə as ा; Kannada does not need to, because the bare final consonant is read with a short *a*.) So **a bare consonant at the end of a `pron` word always means a schwa, never a slip**: *the* ದ಼, *a* ಅ, *to* ಟ.
6. **Syllabic l and n** (zh PRON-RULES A4: a consonant, then l or n, then only consonants to the end of the word) are written as the consonant **without** ್, then ಲ್ / ನ್: people ˈಪೀಪಲ್, seven ˈಸೆವ಼ನ್, station ˈಸ್ಟೇಶನ್, isn't ˈಇಜ಼ನ್ಟ್, didn't ˈಡಿಡನ್ಟ್, important ಇಮ್ˈಪೋರ್ಟನ್ಟ್. They count as a syllable for rule 2.
7. **ɔː before r → ಓ; ɔː elsewhere → ಆ; ɔɪ → ಆಯ್** (the three converter rules that differ from hi, with rules 4 and 5).
8. **Weak and strong forms** follow zh (PRON-RULES B), mapped by the table:

   | word | weak (default) | strong (alone, contrast, stranded) |
   |---|---|---|
   | a / an / the | ಅ / ಅನ್ / ದ಼ (ದ಼ಿ before a vowel sound) | — |
   | to | ಟ; ಟು before a vowel | ಟೂ |
   | for / from / at / of | ಫ಼ರ್ / ಫ಼್ರಮ್ / ಅಟ್ / ಅವ಼್ | ಫ಼ೋರ್ / ಫ಼್ರಮ್ / ಆ್ಯಟ್ |
   | and / or / but | ಅನ್ಡ್ / ಅರ್ / ಬಟ್ | — |
   | can / could / should / would | ಕನ್ / ಕಡ್ / ಶಡ್ / ವಡ್ | — |
   | do / does / did / have / has / had (auxiliary) | ಡ / ಡಜ಼್ / ಡಿಡ್ / ಹವ಼್ / ಹಜ಼್ / ಹಡ್ | ಡೂ, ಹ್ಯಾವ಼್ … as main verbs |
   | have to / has to | ಹ್ಯಾಫ಼್ ಟ / ಹ್ಯಾಸ್ ಟ | |
   | you / your / you're | ಯು / ಯುರ್ / ಯುರ್ | ಯೂ |
   | me / he / she / we | ಮಿ / ಹಿ / ಶಿ / ವಿ | ಮೀ / ಹೀ / ಶೀ / ವೀ |
   | that (relative) / that (demonstrative) | ದ಼ಟ್ | ದ಼್ಯಾಟ್ |
   | there | ದ಼ೆರ್ | ದ಼ೆರ್ |

   Only *from* merges weak and strong (ʌ and ə collapse), as in hi.
9. **Contractions** as zh: I'm ಐಮ್, it's ಇಟ್ಸ್, I've ಐವ಼್, I'll ಐಲ್, don't ಡೋನ್ಟ್, can't ಕ್ಯಾನ್ಟ್, that's ದ಼್ಯಾಟ್ಸ್, isn't ˈಇಜ಼ನ್ಟ್.
10. **Numbers as words; abbreviations letter by letter**, each letter a separate word: A ಏ, B ಬೀ, C ಸೀ, D ಡೀ, E ಈ, F ಎಫ಼್, G ಜೀ, H ಏಚ್, I ಐ, J ಜೇ, K ಕೇ, L ಎಲ್, M ಎಮ್, N ಎನ್, O ಓ, P ಪೀ, Q ಕ್ಯೂ, R ಆರ್, S ಎಸ್, T ಟೀ, U ಯೂ, V ವ಼ೀ, W ˈಡಬಲ್ಯೂ, X ಎಕ್ಸ್, Y ವೈ, Z ಜ಼ೀ. (These follow from the table; the `alphabet` lesson's 26 rows come from the tool.)
11. **Names** as the en-US voice says them: listen to the TTS once and transcribe what it says (Divya /ˈdɪvjə/ → ˈಡಿವ಼್ಯ, not the Kannada spelling ದಿವ್ಯಾ). The `pron` lesson tells learners that an American says their names this way.
12. **Codas in full**, voiced finals voiced: -s as ಸ್ / ಜ಼್ / ಇಜ಼್ (cats ಕ್ಯಾಟ್ಸ್, dogs ಡಾಗ್ಜ಼್, buses ˈಬಸಿಜ಼್), -ed as ಟ್ / ಡ್ / ಇಡ್ (watched ವಾಚ್ಟ್, played ಪ್ಲೇಡ್, wanted ˈವಾನ್ಟಿಡ್). No inserted vowels, no doubled consonants.
13. **Unicode.** NFC only. Order inside a syllable: consonant, nukta, then ್ or the vowel sign, then anusvara (ಥ಼್ಯಾಂಕ್ = ಥ ಼ ್ ಯ ಾ ಂ ಕ ್). Never ZWJ / ZWNJ, never Kannada digits, never the length marks U+0CD5 / U+0CD6, never ಒ / ೊ (no sound in the key uses short *o*), never ತ ದ-without-dot ಣ ಳ ಷ or an aspirate other than ಥ಼ ಫ಼. The `pronPattern` rejects all of these.

*Known collapses (one spelling for two sounds), and why they are acceptable.*
- **LOT / PALM ɑː and THOUGHT ɔː → ಆ** (*cot* and *caught* both ಕಾಟ್). Kannada script has no letter for ɔː, Kannada loan spelling already writes both as ಆ (ಡಾಕ್ಟರ್, ಕಾಫಿ), General Indian English has no cot / caught contrast and neither did any of Wiltshire's four groups, and many Americans merge the two. The spelling that had to be avoided is **ಓ**, because *caught = coat* is the real Kannada error (§4.14); ಆ vs ಓ keeps *law / low*, *saw / so*, *walk / woke* apart. No zh row pair collides because of it (checked on all 776 strings).
- **STRUT ʌ / schwa ə → ಅ**, and **NURSE ɜːr / lettER ər → ಅರ್**: the stress mark separates them.
- **KIT ɪ / final i → ಿ**, **FOOT ʊ / weak u → ು**: as in zh's own practice for weak forms.
- **æ after a consonant looks like consonant + y + ɑː** (ಕ್ಯಾ = /kæ/; a real /kjɑː/ would be written the same). No zh string has consonant + /jɑː/ (checked); if one appears, write it in two words or move the example.
- **Not collapsed, unlike hi:** DRESS / FACE (ಎ / ಏ), final ə / ɑː (bare consonant / ಾ).

**`pron` lesson additions** (prose, not in `pron`; they change no English string):
1. How to read the aid: «ಕೊನೆಯ ಅಕ್ಷರಕ್ಕೆ ್ ಇದ್ದರೆ ಅಲ್ಲಿಗೆ ನಿಲ್ಲಿಸಿ: ಬಸ್, ಬಸ್ಸು ಅಲ್ಲ», «ಚುಕ್ಕೆ ಇರುವ ಅಕ್ಷರ = ಕನ್ನಡದಲ್ಲಿ ಇಲ್ಲದ ಧ್ವನಿ», ˈ = ಒತ್ತು.
2. **No vowel after the last consonant, and no doubling:** bus, car, book, film, asked; happy = ˈಹ್ಯಾಪಿ, not ಹ್ಯಾಪ್ಪಿ.
3. **ಫ಼, ಜ಼** (coffee, fan, zero, zoo, is, easy): not ಫ / ಪ, not ಜ / ಸ.
4. **ಥ಼ / ದ಼** (think, three, this, the): tongue between the teeth, air keeps flowing.
5. **ವ಼ vs ವ** (very, vine, vest vs wine, west, work): teeth on lip and a buzz vs round lips. Short: Kannada speakers usually have *w* right.
6. **ಆ, not ಓ** in *law, saw, talk, caught, bought*; and *name, go* glide (ನೇಮ್, ಗೋ are close enough; the audio shows the glide).
7. **Stress and weak vowels:** *about, banana, photography, hotel*; one strong syllable per word, the others short and light.
8. **A puff on p, t, k** at the start of stressed syllables (pen, time, coffee): said, not written.
9. Optional note: Indian English ಟ ಡ and a tapped r are understood everywhere; spend effort on items 1–7.

**Validator settings (profile.json):**
- `"nativeScript": "[\\u0c80-\\u0ce3]"`: Kannada letters and signs, **excluding** Kannada digits ೦–೯ (U+0CE6–0CEF). So "Kannada" means at least one Kannada letter or sign; a `why` that is English plus digits fails. The class finds 0 characters in `packs/course-ko-en.js`, `packs/course-zh-en.js` and `packs/course-hi-en.js` (checked locally), so "English must not contain native script" is safe.
- **No `pronScript`.** The aid is in the native script, so the default check applies, as in ko-en and hi-en.
- `"pronPattern"` (written in profile.json with `\u` escapes; validate.js compiles it with flag `u`):
  `^ˈ?(?:(?:\u0c86\u0CCD\u0caf|[\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8e\u0c8f\u0c90\u0c93\u0c94])\u0C82?|(?:[\u0c95\u0c97\u0c99\u0c9a\u0c9f\u0ca1\u0ca8\u0caa\u0cac\u0cae\u0caf\u0cb0\u0cb2\u0cb8\u0cb9]|[\u0c9c\u0cb5\u0cb6]\u0CBC?|[\u0cab\u0ca5\u0ca6]\u0CBC)(?:\u0CCD|[\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc6\u0cc7\u0cc8\u0ccb\u0ccc]?\u0C82?))+(?:ˈ(?:(?:\u0c86\u0CCD\u0caf|[\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8e\u0c8f\u0c90\u0c93\u0c94])\u0C82?|(?:[\u0c95\u0c97\u0c99\u0c9a\u0c9f\u0ca1\u0ca8\u0caa\u0cac\u0cae\u0caf\u0cb0\u0cb2\u0cb8\u0cb9]|[\u0c9c\u0cb5\u0cb6]\u0CBC?|[\u0cab\u0ca5\u0ca6]\u0CBC)(?:\u0CCD|[\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc6\u0cc7\u0cc8\u0ccb\u0ccc]?\u0C82?))+)*(?:(?: |\. | / )ˈ?(?:(?:\u0c86\u0CCD\u0caf|[\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8e\u0c8f\u0c90\u0c93\u0c94])\u0C82?|(?:[\u0c95\u0c97\u0c99\u0c9a\u0c9f\u0ca1\u0ca8\u0caa\u0cac\u0cae\u0caf\u0cb0\u0cb2\u0cb8\u0cb9]|[\u0c9c\u0cb5\u0cb6]\u0CBC?|[\u0cab\u0ca5\u0ca6]\u0CBC)(?:\u0CCD|[\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc6\u0cc7\u0cc8\u0ccb\u0ccc]?\u0C82?))+(?:ˈ(?:(?:\u0c86\u0CCD\u0caf|[\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8e\u0c8f\u0c90\u0c93\u0c94])\u0C82?|(?:[\u0c95\u0c97\u0c99\u0c9a\u0c9f\u0ca1\u0ca8\u0caa\u0cac\u0cae\u0caf\u0cb0\u0cb2\u0cb8\u0cb9]|[\u0c9c\u0cb5\u0cb6]\u0CBC?|[\u0cab\u0ca5\u0ca6]\u0CBC)(?:\u0CCD|[\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc6\u0cc7\u0cc8\u0ccb\u0ccc]?\u0C82?))+)*)*$`
  In words: a word is one or more units, with ˈ allowed before the first unit and between units. A unit is an independent vowel from the key (ಅ ಆ ಇ ಈ ಉ ಊ ಎ ಏ ಐ ಓ ಔ, or ಆ್ಯ) with an optional anusvara, or a consonant from the key with **either** ್ **or** an optional vowel sign and an optional anusvara. The consonant is one of ಕ ಗ ಙ ಚ ಟ ಡ ನ ಪ ಬ ಮ ಯ ರ ಲ ಸ ಹ, or ಜ ವ ಶ with or without the dot, or ಫ ಥ ದ **with** the dot. Words are joined by one space, `. ` or ` / `.
  It **rejects** Latin letters, IPA symbols other than ˈ, `?` `!` `,`, digits of both scripts, double spaces, a word that starts with a sign, a dangling ˈ, ZWJ / ZWNJ, visarga, ಫ ಥ ದ without the dot, a dot on any other letter, a dot placed after the vowel sign, ಒ / ೊ, ತ ಣ ಳ ಷ and the other letters outside the key, and the length marks U+0CD5 / U+0CD6. It does **not** require ˈ (one-syllable rows have none), and it **cannot** see an added final vowel or a doubled consonant (ಬಸ್ಸು passes its shape test); the converter and review guard those.
- **Keyboard traps:** Kannada keyboards have no nukta key on most layouts, so writers must not type `pron` by hand: use the tool, and copy ˈ (U+02C8) and ಼ (U+0CBC) from this file when quoting the aid in prose.
- No `labels.cueTest` is needed: `nativeScript` is a real script. In the `more/` shorthand an mc `q` or type `hint` with no Kannada letter gets `labels.mcBlankCue` (« ಖಾಲಿ ಜಾಗದಲ್ಲಿ ಏನು ಬರಬೇಕು?») or `typeHintCue` (« — ಈ ಪದಗಳನ್ನು ಬಳಸಿ») appended. That is right for a gap question and wrong for a translation question, so writers put the Kannada frame in themselves: `"ನಾನು ಐದು ವರ್ಷದಿಂದ ಇಲ್ಲಿ ಇದ್ದೇನೆ" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?`, «ಸರಿಯಾದ ವಾಕ್ಯ ಆರಿಸಿ.».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote the respelling in prose and tables (`<b>ವ಼ೈನ್</b>`).

**Worked examples.** "zh row" = the IPA string exists in `packs/course-zh-en.js` (each one grepped) and the kn `pron` was produced from it by the scratch converter; "new" = no zh row, IPA written here in zh conventions and converted the same way. All rows pass `pronPattern` (Node output in §11).

| English | zh-convention IPA | kn `pron` | origin |
|---|---|---|---|
| Hello. | /həˈloʊ/ | ಹˈಲೋ | zh row |
| Thank you. | /ˈθæŋk ju/ | ಥ಼್ಯಾಂಕ್ ಯು | zh row |
| Excuse me. | /ɪkˈskjuːz mi/ | ಇಕ್ˈಸ್ಕ್ಯೂಜ಼್ ಮಿ | zh row |
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ | ಇಟ್ಸ್ ಕೋಲ್ಡ್ ಟˈಡೇ | zh row |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | ನೈಸ್ ಟ ಮೀಟ್ ಯು | zh row |
| See you later. | /ˈsiː ju ˈleɪtər/ | ಸೀ ಯು ˈಲೇಟರ್ | zh row |
| Where do you live? | /ˈwer də ju ˈlɪv/ | ವೆರ್ ಡ ಯು ಲಿವ಼್ | zh row |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ | ಕನ್ ಯು ಕ್ಲೋಜ಼್ ದ಼ ಡೋರ್ | zh row |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ | ಐ ಹ್ಯಾವ಼್ ಟೂ ˈಬ್ರದ಼ರ್ಜ಼್ | zh row |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ | ವಿ ವಾಚ್ಟ್ ಅ ˈಮೂವ಼ಿ | zh row |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ | ದ಼ೆರ್ಜ಼್ ಅ ಕ್ಯಾˈಫ಼ೇ ನಿರ್ ಹಿರ್ | zh row |
| Have you eaten yet? | /həv ju ˈiːtn ˈjet/ | ಹವ಼್ ಯು ˈಈಟನ್ ಯೆಟ್ | zh row |
| How long have you been here? | /ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/ | ಹೌ ಲಾಙ್ ಹವ಼್ ಯು ಬಿನ್ ಹಿರ್ | zh row |
| I'm a student. | /aɪm ə ˈstuːdnt/ | ಐಮ್ ಅ ˈಸ್ಟೂಡನ್ಟ್ | zh row |
| How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | ಹೌ ಮಚ್ ಇಜ಼್ ದ಼ಿಸ್ | zh row |
| think | /ˈθɪŋk/ | ಥ಼ಿಂಕ್ | zh row |
| sink | /ˈsɪŋk/ | ಸಿಂಕ್ | zh row |
| three | /ˈθriː/ | ಥ಼್ರೀ | zh row |
| tree | /ˈtriː/ | ಟ್ರೀ | zh row |
| very | /ˈveri/ | ˈವ಼ೆರಿ | zh row |
| wary | /ˈweri/ | ˈವೆರಿ | zh row |
| vest | /ˈvest/ | ವ಼ೆಸ್ಟ್ | zh row |
| west | /ˈwest/ | ವೆಸ್ಟ್ | zh row |
| bad | /ˈbæd/ | ಬ್ಯಾಡ್ | zh row |
| bed | /ˈbed/ | ಬೆಡ್ | zh row |
| coffee | /ˈkɔːfi/ | ˈಕಾಫ಼ಿ | zh row |
| copy | /ˈkɑːpi/ | ˈಕಾಪಿ | zh row |
| banana | /bəˈnænə/ | ಬˈನ್ಯಾನ | zh row |
| rice | /ˈraɪs/ | ರೈಸ್ | zh row |
| lice | /ˈlaɪs/ | ಲೈಸ್ | zh row |
| walk | /ˈwɔːk/ | ವಾಕ್ | zh row |
| work | /ˈwɜːrk/ | ವರ್ಕ್ | zh row |
| leave | /ˈliːv/ | ಲೀವ಼್ | zh row |
| live | /ˈlɪv/ | ಲಿವ಼್ | zh row |
| fan | /ˈfæn/ | ಫ಼್ಯಾನ್ | zh row |
| pan | /ˈpæn/ | ಪ್ಯಾನ್ | zh row |
| vote | /ˈvoʊt/ | ವ಼ೋಟ್ | zh row |
| boat | /ˈboʊt/ | ಬೋಟ್ | zh row |
| mouth | /ˈmaʊθ/ | ಮೌಥ಼್ | zh row |
| mouse | /ˈmaʊs/ | ಮೌಸ್ | zh row |
| asked | /ˈæskt/ | ಆ್ಯಸ್ಕ್ಟ್ | zh row |
| months | /ˈmʌnθs/ | ಮನ್ಥ಼್ಸ್ | zh row |
| friends | /ˈfrendz/ | ಫ಼್ರೆನ್ಡ್ಜ಼್ | zh row |
| hotel | /hoʊˈtel/ | ಹೋˈಟೆಲ್ | zh row |
| bus | /ˈbʌs/ | ಬಸ್ | new |
| bus stop | /ˈbʌs ˈstɑːp/ | ಬಸ್ ಸ್ಟಾಪ್ | new |
| car | /ˈkɑːr/ | ಕಾರ್ | zh row |
| school | /ˈskuːl/ | ಸ್ಕೂಲ್ | new |
| film | /ˈfɪlm/ | ಫ಼ಿಲ್ಮ್ | new |
| zoo | /ˈzuː/ | ಜ಼ೂ | new |
| Jew | /ˈdʒuː/ | ಜೂ | new |
| vine | /ˈvaɪn/ | ವ಼ೈನ್ | new |
| wine | /ˈwaɪn/ | ವೈನ್ | new |
| zero | /ˈzɪroʊ/ | ˈಜ಼ಿರೋ | new |
| photography | /fəˈtɑːgrəfi/ | ಫ಼ˈಟಾಗ್ರಫ಼ಿ | new |
| about | /əˈbaʊt/ | ಅˈಬೌಟ್ | new |
| measure | /ˈmeʒər/ | ˈಮೆಶ಼ರ್ | new |
| apple | /ˈæpl/ | ˈಆ್ಯಪಲ್ | new |
| English | /ˈɪŋglɪʃ/ | ˈಇಂಗ್ಲಿಶ್ | new |
| singing | /ˈsɪŋɪŋ/ | ˈಸಿಙಿಙ್ | new |
| sheep | /ˈʃiːp/ | ಶೀಪ್ | new |
| ship | /ˈʃɪp/ | ಶಿಪ್ | new |
| get | /ˈget/ | ಗೆಟ್ | new |
| gate | /ˈgeɪt/ | ಗೇಟ್ | new |
| door | /ˈdɔːr/ | ಡೋರ್ | new |
| talk | /ˈtɔːk/ | ಟಾಕ್ | new |
| boy | /ˈbɔɪ/ | ಬಾಯ್ | new |
| people | /ˈpiːpl/ | ˈಪೀಪಲ್ | new |
| isn't | /ˈɪznt/ | ˈಇಜ಼ನ್ಟ್ | new |
| important | /ɪmˈpɔːrtnt/ | ಇಮ್ˈಪೋರ್ಟನ್ಟ್ | new |
| My name is Divya. | /maɪ ˈneɪm ɪz ˈdɪvjə/ | ಮೈ ನೇಮ್ ಇಜ಼್ ˈಡಿವ಼್ಯ | new |
| I live in Bengaluru. | /aɪ ˈlɪv ɪn ˌbeŋgəˈlʊruː/ | ಐ ಲಿವ಼್ ಇನ್ ಬೆಂಗˈಲುರೂ | new |
| I've lived here since 2015. | /aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd fɪfˈtiːn/ | ಐವ಼್ ಲಿವ಼್ಡ್ ಹಿರ್ ಸಿನ್ಸ್ ಟೂ ˈಥ಼ೌಜ಼ನ್ಡ್ ಫ಼ಿಫ಼್ˈಟೀನ್ | new |
| Five hundred rupees. | /ˈfaɪv ˈhʌndrəd ruːˈpiːz/ | ಫ಼ೈವ಼್ ˈಹನ್ಡ್ರಡ್ ರೂˈಪೀಜ಼್ | new |
| She's a doctor, isn't she? | /ʃiz ə ˈdɑːktər ˈɪznt ʃi/ | ಶಿಜ಼್ ಅ ˈಡಾಕ್ಟರ್ ˈಇಜ಼ನ್ಟ್ ಶಿ | new |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ | ಫ಼ಿಫ಼್ˈಟೀನ್ / ˈಫ಼ಿಫ಼್ಟಿ | zh row |
| the (weak) | /ðə/ | ದ಼ | new |
| a (weak) | /ə/ | ಅ | new |
| to (weak) | /tə/ | ಟ | new |
| of (weak) | /əv/ | ಅವ಼್ | new |
| have to | /ˈhæf tə/ | ಹ್ಯಾಫ಼್ ಟ | new |
| W | /ˈdʌbəljuː/ | ˈಡಬಲ್ಯೂ | zh row |
| Z | /ˈziː/ | ಜ಼ೀ | zh row |
| idea | /aɪˈdiːə/ | ಐˈಡೀಅ | new |
| Canada | /ˈkænədə/ | ˈಕ್ಯಾನಡ | new |
| within | /wɪðˈɪn/ | ವಿದ಼್ˈಇನ್ | new |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | ಐ ಹ್ಯಾವ಼್ ಅ ಡಾಗ್. ದ಼ ಡಾಗ್ ಇಜ಼್ ಸೋ ಕ್ಯೂಟ್ | zh row |

- Rejected by `pronPattern` (checked): `/ˈjes/`, `ಇಟ್ಸ್?`, `yes`, `ಇಟ್ಸ್  ಕೋಲ್ಡ್` (two spaces), `ಕೋಲ್ಡ್ ˈ`, `ಇಟ್ಸ್,ಕೋಲ್ಡ್`, `೨೦೧೦`, `್ಕ`, `ಫೋನ್` (no dot), `ಜೂ಼` (dot after the vowel sign), `ಹಾಟೊ`, `ತ್ರೀ`, `ಒನ್`, a string with ZWNJ, and ಕೇ typed as ಕೆ + U+0CD5.
- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, derive from that IPA instead.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "ಆರ್ಟ[ಿೀ]ಕಲ್|ಬಹುವಚನ|ಎಣಿಸ" }` (no `flags`: Kannada script has no case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **ಆರ್ಟಿಕಲ್**, **ಬಹುವಚನ** or **ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ**.
- **Why these strings:** Kannada is agglutinative, but every ending attaches *after* the stem, so plain substrings survive inflection: ಬಹುವಚನ, ಬಹುವಚನದಲ್ಲಿ, ಬಹುವಚನಕ್ಕೆ; ಆರ್ಟಿಕಲ್, ಆರ್ಟಿಕಲ್‌ಗಳು (the ZWNJ comes after the keyword). `ಎಣಿಸ` is the stem shared by ಎಣಿಸಬಹುದಾದ (countable) and ಎಣಿಸಲಾಗದ (uncountable). `ಆರ್ಟ[ಿೀ]ಕಲ್` accepts the spelling ಆರ್ಟೀಕಲ್; writers still write ಆರ್ಟಿಕಲ್ (§3). `ಬಹುವಚನ` does not match `ಏಕವಚನ`, which is right: «ಏಕವಚನ» alone does not name the point. No `\b` is used (JavaScript's `\b` is ASCII-only).
- **What the validator counts** (validate.js `article-plural`, as read for hi.md and re-read here): `order`: the `why` matches the keywords **and** `x` holds an article tile (`a`, `an`, `the`) or a singular / plural twin of a tile in `a`; `type`: the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin of a word in `a[0]`. Put the competitor tile in `x`.
- Text must be NFC (§2). A keyword typed with ೀ as ಿ + U+0CD5 would not match; NFC text cannot contain that sequence.

**Sample `why` lines** (all tested locally with `new RegExp(keywords)` exactly as validate.js builds it; Node output in §11; all [native check] as Kannada):
- «ವೃತ್ತಿಯ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ a ಬೇಕು: a teacher.» → hit
- «two ನಂತರ ಬಹುವಚನ: brothers. ಕನ್ನಡದಲ್ಲಿ "ಎರಡು ಪುಸ್ತಕ" ಎನ್ನಬಹುದು, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ -s ಬೇಕೇ ಬೇಕು.» → hit
- «information ಎಣಿಸಲಾಗದ ನಾಮಪದ: a ಇಲ್ಲ, -s ಇಲ್ಲ.» → hit
- «ಎರಡನೇ ಸಲ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ the.» → hit
- «these ಬಹುವಚನಕ್ಕೆ, this ಒಂದೇ ವಸ್ತುವಿಗೆ.» → hit (keyword + case ending)
- «ಎಣಿಸಬಹುದಾದ ನಾಮಪದ ಒಂದೇ ಇದ್ದರೆ a ಬೇಕು.» → hit
- «ಆರ್ಟಿಕಲ್‌ಗಳಲ್ಲಿ the: ಇಬ್ಬರಿಗೂ ಗೊತ್ತಿರುವ ವಸ್ತು.» → hit (ZWNJ after the keyword)
- «ಹತ್ತು ವರ್ಷ — ಬಹುವಚನ years; know ಜೊತೆ -ing ಬರುವುದಿಲ್ಲ.» → hit
- «ಆರ್ಟೀಕಲ್ the ಬೇಕು.» → hit (spelling variant accepted)
- «Simple Present ನಲ್ಲಿ he ಜೊತೆ -s ಬರುತ್ತದೆ.» → **no hit** (correct: not an article / plural point)
- «advice ಲೆಕ್ಕ ಮಾಡಲು ಆಗುವುದಿಲ್ಲ, ಹಾಗಾಗಿ advices ತಪ್ಪು.» → **no hit**: the point is countability, so the writer must say «ಎಣಿಸಲಾಗದ».
- «ಏಕವಚನ: one book.» → **no hit**

**Writer rules (keep the count meaningful):**
- Write «ಬಹುವಚನ» in full; never «ಬಹು.», «ಪ್ಲೂರಲ್» or «ತುಂಬಾ» for the grammar point. Write «ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ», never «ಲೆಕ್ಕ ಮಾಡಬಹುದಾದ».
- **Do not use the verb ಎಣಿಸು ("to count") in a `why` that is not about countability** («ಅಕ್ಷರಗಳನ್ನು ಎಣಿಸಿ» would be a false hit). Say «ಲೆಕ್ಕ ಹಾಕಿ» there.
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs at least one Kannada letter (§6).
- The multiple-choice UI term is «ಆಯ್ಕೆ» (§10); it contains no keyword.

**Justification:**
- **Articles:** Kannada has no articles (Microsoft Kannada Style Guide; *Kannada grammar*; Bilinguistics); article omission and extraneous articles are both annotated ICE-India features (Demszky et al.); the SJSU guide lists omission and *one* for *a* [research-backed for the features, curriculum convention for the contrast]. No Kannada error rate was found (§11).
- **Plurals and countability are a real Kannada problem:** the plural ending is optional on thing-nouns after a number [native check], mass nouns are grammatically singular (*Kannada grammar*), and count-noun use of mass nouns is an ICE-India feature (`all the musics`) and an SJSU group (*informations, furnitures, feedbacks*). The plural half earns its place on evidence as well as on parity.
- **Parity cost is zero:** the shared `order` / `type` items were written to the Korean rule; only the Kannada `why` must name the keyword [practitioner opinion; consequence of PILOT-SPEC §1.6].
- **Why not a rule on the final vowel or on tense?** The validator has no such kind; a pronunciation hinge cannot be tested by `order` / `type` items; and a tense hinge inside `articles` or `countable` would be artificial. The since-continuous zone (§4.3) gets `stative-since`, four reweights and the secondary wording below.

**Secondary emphasis (not validated; do not add these to the regex):**
- Duration: «"ಎರಡು ವರ್ಷದಿಂದ" = for two years; from ಅಲ್ಲ.», «2015 ರಿಂದ = since 2015 — Present Perfect, Present Continuous ಅಲ್ಲ.»
- States: «know ಸ್ಥಿತಿ ತಿಳಿಸುವ ಕ್ರಿಯಾಪದ: I know; I'm knowing ತಪ್ಪು.»
- Questions: «ಪ್ರಶ್ನೆಯಲ್ಲಿ ಸಹಾಯಕ ಕ್ರಿಯಾಪದ do ಬೇಕು: Do you like tea?», «ಪ್ರಶ್ನೆಯಲ್ಲಿ are ಮೊದಲು: Where are you going?»
- *be*: «ಕನ್ನಡದಲ್ಲಿ "ನಾನು ಶಿಕ್ಷಕ"; ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ am ಬೇಕು.»
- Prepositions: «ದಿನದ ಮೊದಲು on: on Monday.», «angry ಜೊತೆ with; on ಅಲ್ಲ.»

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md, ru.md and hi.md):**
- **keep** = a fresh Kannada explanation from the Kannada point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Kannada explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the 40 shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged (`lib.js` `ORDER`, 40 ids, read locally); nothing is replaced or dropped. Every Kannada example in the notes is [native check].

| lesson id | keep / reweight / add | note for Kannada speakers |
|---|---|---|
| alphabet | keep | Kannada readers know the Latin letters from school. Use the lesson for **letter names said the American way and without a glide**: F, L, M, N, S, X start with ಎ, not ಯೆ (*yem, yen, yes, yel* ✗; Jain et al. note the Kannada glide before initial vowels); H = ಏಚ್ (not *hech*); Z = ಜ಼ೀ (India says *zed*: fine, but the audio says *zee*); V ವ಼ೀ vs W ˈಡಬಲ್ಯೂ; R = ಆರ್. First sight of the aid: ್ at the end, the dot |
| pron | reweight | Teach the aid first (§6: ್ at the end = stop there; ಚುಕ್ಕೆ = a sound Kannada lacks; ˈ = ಒತ್ತು). Then the kn traps in §6's list: no final vowel and no doubling (bus, car, happy), ಫ಼ / ಜ಼, ಥ಼ / ದ಼, ವ಼ / ವ, ಆ not ಓ (law, caught), stress and weak vowels, the puff on p t k. **Shared checks and practice stay as they are**; lesson-body rows add the kn pairs (bus / *bassu*, zoo / Jew, law / low, vine / wine) |
| be | reweight | **Core for Kannada: "X is Y" has no verb in Kannada** («ನಾನು ಶಿಕ್ಷಕ», «ಇದು ಪುಸ್ತಕ») → `I teacher ✗ → I'm a teacher`. ಇದೆ / ಇದ್ದಾರೆ is only for place and existence (She's at home). Negatives: ಅಲ್ಲ (isn't a…) vs ಇಲ್ಲ (isn't here) both = *isn't*. Short answers *Yes, I am*. More weight than in hi |
| it-there | reweight | «ಚಳಿ ಇದೆ», «ಮಳೆ ಬರುತ್ತಿದೆ», «ತಡವಾಯಿತು» have no *it* → It's cold, It's raining (`Is raining ✗`). «ಹತ್ತಿರ ಒಂದು ಕೆಫೆ ಇದೆ» → There's a cafe near here (`Near here one cafe is there ✗`; ICE-India NON-INITIAL EXISTENTIAL, Demszky et al.) |
| articles | reweight | No ಆರ್ಟಿಕಲ್ in Kannada. a for jobs and "one of many"; ಒಂದು ≈ a only sometimes, and *one* for *a* is the trap (`I have one doubt`); ಆ / ಈ ≠ always the. Both directions, as §4.1 |
| plurals | reweight | Core: -s after a number even though «ಎರಡು ಪುಸ್ತಕ» is fine in Kannada (`two book ✗`), *one of my friends*, irregular plurals (people, children; `peoples, childrens ✗`), this / these (ಈ covers both), possessive 's (ದಿವ್ಯಾಳ ಫೋನ್ → Divya's phone). -s / -es said as ಸ್ / ಜ಼್ / ಇಜ಼್ **with no vowel after it** |
| present | reweight | SOV → SVO: «ನಾನು ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ» → I drink coffee (`I coffee drink ✗`). Kannada has one negative word (ಇಲ್ಲ after the verb) → *don't / doesn't* before the verb. Habit = simple, not continuous (`I am going to office daily ✗`; ICE-India HABITUAL PROGRESSIVE) |
| questions | reweight | Core: Kannada adds **-ಆ** and moves nothing («ನೀವು ಬರುತ್ತೀರಾ?») → *Do you…? / Are you…?* (`You are coming? ✗`), wh-word first with inversion (`Where you are going? ✗`), *do* support (`What you want? ✗`). Mention that the tag ಅಲ್ವಾ? is not always *isn't it?* (full treatment in `indian-english`) |
| third-s | reweight | Kannada verbs agree in every person, so agreement is familiar; English keeps only -s (`She know ✗`, `He don't ✗`). Say the -s with no vowel after it: works ವರ್ಕ್ಸ್, goes ಗೋಜ಼್, watches ˈವಾಚಿಜ಼್ |
| prep | reweight | Core: Kannada puts the relation after the noun as an ending. **-ಅಲ್ಲಿ = in / on / at** (ಮನೆಯಲ್ಲಿ at home, ಬಸ್‌ನಲ್ಲಿ on the bus, ಬೆಂಗಳೂರಿನಲ್ಲಿ in Bengaluru), **-ಗೆ = to / for**, **-ಇಂದ = from / since / by**. Time: at 5, on Monday, in June (`in Monday ✗`); `today morning ✗ → this morning`, `yesterday night ✗ → last night`; no preposition with *home, here, there* |
| countable | reweight | `advices, informations, furnitures, luggages, equipments, feedbacks ✗` (SJSU §4); *much / many*, *a piece of*, *some*. Kannada does not mark the difference; teach «ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ» as the two labels |
| object-have | reweight | «ನನ್ನ ಹತ್ತಿರ ಕಾರು ಇದೆ», «ನನಗೆ ಇಬ್ಬರು ಅಣ್ಣಂದಿರು ಇದ್ದಾರೆ» ("near me / to me … is") → *I have* (never `I am having a car ✗`, `To me two brothers are there ✗`). Object pronouns after the verb (I know him). The small he / she / it note: a baby or a pet is ಅದು in Kannada, *he / she* in English; ಅವರು for one respected person = *he / she*, not *they* |
| can-like | reweight | «ನನಗೆ ಕಾಫಿ ಇಷ್ಟ», «ನನಗೆ ಈಜು ಬರುತ್ತದೆ» (dative "to me") → *I like coffee*, *I can swim* (`To me coffee likes ✗`, `I am liking ✗`). -ಬಹುದು = can / may |
| polite | reweight | Kannada politeness is in ನೀವು and -ಇ; English puts it in *Could you…? / please / I'd like*. `Give me water ✗` sounds like an order; «ಸ್ವಲ್ಪ» → *a little / could you*. *Kindly* is office Indian English; abroad *please* |
| continuous | reweight | «ಮಾಡುತ್ತಿದ್ದೇನೆ» = *am doing*, a good match for actions now. **Not for states:** `I am knowing / having / wanting / understanding ✗` (ICE-India STATIVE PROGRESSIVE; SJSU §1.1). Not for habits (`I am going to gym daily ✗`) |
| past | reweight | -ed said as ಟ್ / ಡ್ / ಇಡ್ with no added vowel (*worked* ವರ್ಕ್ಟ್, not *work-ed-u*). `I didn't went ✗ → I didn't go`, `Did you went? ✗`. Past time word → Simple Past, not perfect (`I have seen him yesterday ✗`; SJSU §1.2) |
| irregular-past | keep | Memory work; Kannada offers no help and no interference. V1 / V2 / V3 table as in Indian school books |
| the | reweight | Second mention, "the only one", *the* + superlative; **no** *the* for general plurals and uncountables (`The life is hard ✗`) or with most names (`the Bengaluru ✗`). ಆ / ಈ translate *that / this*, not *the* |
| adjectives | reweight | Kannada compares with -ಗಿಂತ and no change to the adjective → *bigger than*, never double marking (`more better ✗`). `too good` (India: very good) vs *too* = more than wanted. Adjective order rarely a problem (both before the noun) |
| going-to | keep | Kannada non-past covers the future; the form is new but causes no special interference |
| tense | reweight | Recap built on the two false matches: (1) Kannada non-past «ಹೋಗುತ್ತೇನೆ» = *I go* and *I will go*; (2) continuous + -ಇಂದ («ಎರಡು ವರ್ಷದಿಂದ ಇದ್ದೇನೆ») ≠ English continuous. Preview of `stative-since` |
| joining | reweight | `Although it rained, but we went ✗` (Kannada pairs -ಆದರೂ with nothing; Indian English doubles); *because … so* doubling; Kannada joins clauses with verb participles («ಊಟ ಮಾಡಿ ಬಂದೆ») → *and / then / after* |
| numbers | reweight | lakh / crore → hundred thousand / million (1,00,000 vs 100,000); dates month-first in the US (11/23 vs 23/11); *fifteen / fifty* stress; rupees; phone numbers digit by digit; `double two` (India) vs *two two* |
| smalltalk | reweight | «ಊಟ ಆಯ್ತಾ?» is a greeting in Kannada, a real question in English → *How's it going?*; avoid salary, age, marriage questions with strangers abroad; *What's your good name? → What's your name?*; weather and weekend talk |
| past-continuous | keep | Kannada «ಮಾಡುತ್ತಿದ್ದೆ» matches *was doing* well |
| will | keep | One Kannada non-past for present and future; *will* is new but simple. Note only: `I will come and go ✗` |
| perfect | reweight | Experience (*Have you ever…?*) vs a finished time (`I have visited Hampi last year ✗`; SJSU §1.2). «ಮಾಡಿದ್ದೇನೆ» looks like *have done* but takes past times in Kannada |
| modals | reweight | **ಬೇಕು** = want / need / must / should in one word → pick by meaning; `would` for a plain future is Indian English (SJSU §1.6) → *will*; `must + to ✗`; ಬಹುದು = can / may / might |
| to-ing | reweight | Kannada uses one verbal noun (-ಉವುದು) and -ಅಲು for both → *want to go*, *enjoy going*; `I am looking forward to meet you ✗ → to meeting you`; `suggest me to ✗` |
| articles-2 | reweight | Geography and institutions (the US, India, the Himalayas; at school / in the hospital, US usage); *a* vs *one*; no article with *most people, next week, by car*; `the same` always with *the* |
| first-conditional | reweight | Kannada «ಮಳೆ ಬಂದರೆ» has no tense in the *if* part → English wants the present there, not *will* (`If it will rain ✗`). Light reweight |
| relative | reweight | Kannada puts the whole clause before the noun as a participle with no *who / which* («ನಾನು ನೋಡಿದ ಹುಡುಗ» "I-seen boy") → *the boy (who) I saw*: noun first, then the clause. No extra pronoun (`the boy who I saw him ✗`; ICE-India RESUMPTIVE PRONOUNS) |
| phrasal | keep | No Kannada counterpart to interfere; memory work. Kannada verb pairs (ತೆಗೆದುಕೊ, ಬಿಟ್ಟುಬಿಡು) can be offered as a loose parallel |
| perfect-2 | reweight | *for* + length, *since* + point; both are **-ಇಂದ** in Kannada, and so is *from* (`from two years ✗`, `since two years ✗`). Leads straight into `stative-since` |
| narrative | keep | Past simple + past continuous + past perfect; no specific interference found |
| conditionals | reweight | Kannada -ಇದ್ದರೆ / -ಇದ್ದಿದ್ದರೆ; English needs past for unreal present (*If I had time, I would…*), `If I would have ✗` |
| passive | reweight | The Kannada passive (-ಅಲ್ಪಡು) is rare and bookish (Bilinguistics lists passive as hard for Kannada learners), so learners under-use it in speech and over-use the office formula (`It is informed that… ✗ → Please note that…`). *by* = -ಇಂದ |
| reported | reweight | Kannada keeps the speaker's own words before **ಅಂತ / ಎಂದು**: «ಅವನು "ನಾನು ಬರುತ್ತೇನೆ" ಅಂತ ಹೇಳಿದ» → He said (that) he would come (`He said that I will come ✗`: wrong person *and* tense). *told me*, not *told to me* / *said me*. Embedded questions without inversion (`I don't know where is he ✗`) |
| email | reweight | Indian office email habits that read oddly abroad: «Respected Sir», *Kindly do the needful*, *PFA*, *revert*, *the same* as a pronoun. → Dear Mr. Rao / Hi Kiran, *Could you please…*, *I've attached…*, *I'll get back to you*. First names are normal in US work email |
| idioms | reweight | Kannada idiom calques that do not exist in English (`eating my head ✗ → bugging me`, SJSU; «ತಲೆ ತಿನ್ನು»); note that *like that only* is Indian English |
| **indian-english** | **add** | after `smalltalk`; see below |
| **stative-since** | **add** | after `perfect-2`; see below |

**Totals:** 40 existing lessons: **7 keep** (alphabet, irregular-past, going-to, past-continuous, will, phrasal, narrative) and **33 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions. Every verdict is [practitioner opinion] grounded in §4; no study ranks these lessons for Kannada speakers.

**Additions (two, the maximum):**
- **`indian-english`**: title «ಇಂಡಿಯನ್ ಇಂಗ್ಲಿಷ್: ಇಲ್ಲಿ ಸರಿ, ವಿದೇಶದಲ್ಲಿ ವಿಚಿತ್ರ», after `smalltalk` (end of A1), deck 22 «ಇಂಡಿಯನ್ ಇಂಗ್ಲಿಷ್: ಇಲ್ಲಿ ಮತ್ತು ವಿದೇಶದಲ್ಲಿ» (§9).
  - *Framing:* Indian English is a real variety; these forms are understood in India. The lesson shows what listeners abroad expect, without ✗ for group 1.
  - *English side:* start from hi-en's `indian-english` lesson and deck (same id, same position); keep every item that is pan-Indian, **replace the Hindi-calque group with the Kannada one**. Any hi item kept must have its English string identical to hi-en's.
  - *Content:*
    1. **Fine in India, unusual abroad** (→ international form): prepone (→ move up), out of station (→ out of town), What is your good name? (→ What's your name?), cousin brother / sister (→ cousin), do the needful (→ please take care of it), revert (→ reply), passed out (→ graduated), native place (→ hometown), hotel (→ restaurant), today itself (→ today), I'm here only (→ I'm right here), …, isn't it? / …, no? as an all-purpose tag (→ aren't you? / don't you? / right?), shift (→ move), tiffin (→ a light meal / lunch box).
    2. **Wrong in any variety** (✗ → ✓): Myself Kiran (→ I'm Kiran), discuss about (→ discuss), revert back / return back (→ get back / return), I have a doubt (→ I have a question), angry on me (→ angry with me), today morning (→ this morning).
    3. **Kannada calques** [native check]: I'll go and come (→ See you later), Had your lunch? as a greeting (→ How's it going?), Tell me at the start of a call (→ What's up? / How can I help you?), I simply asked (→ I was just asking), Please adjust (→ Could you make some room? / Please bear with us), One minute, I'll come (→ I'll be right back).
  - *Practice sketch (must satisfy §7):* `order` and `type` items choose the international sentence and still hinge on an article or plural for at least half: *I have a question.* (a; x: doubt), *Please take care of it.*, *We moved the meeting up to Monday.* (the; x: preponed), *She's my cousin.* (x: brother), *I'm from a small town near Mysuru.* (a), *They're friends from my hometown.* (plural). `mc`: pick what a listener in the US would say. `fill`: *I'm ___ of town this week.* (out).
- **`stative-since`**: title «since / for ಮತ್ತು know, have: -ing ಬೇಡ», after `perfect-2` (B1), linked deck 2.
  - *English side:* reuse hi-en's `stative-since` unchanged where possible (the errors are the same in English; only the explanation differs).
  - *Kannada explanation:* (1) -ಇಂದ after a length of time = *for*; after a point in time = *since*; never *from*. (2) Kannada says a state that still continues with «…ಇಂದ … ಇದ್ದೇನೆ / ಮಾಡುತ್ತಿದ್ದೇನೆ»; English uses the Present Perfect for states (*I've known, I've had, I've lived*) and the Present Perfect Continuous for actions (*I've been working*). (3) «ನನಗೆ ಗೊತ್ತು», «ನನ್ನ ಹತ್ತಿರ ಇದೆ», «ನನಗೆ ಬೇಕು», «ನನಗೆ ಅರ್ಥವಾಗುತ್ತದೆ» are not -ing verbs in English: *know, have, want, understand*.
  - *Practice sketch (must satisfy §7):* *I've known him for ten years.* (plural years; x: year, knowing), *She has had a car since 2019.* (a), *We've lived in the same house for two years.* (the, plural), *I have a question.*; `mc`: *I ___ here since 2015.*; `fill`: for / since.

**Considered, not added:**
- **A `final-sounds` pronunciation lesson** (vi has one): the final vowel and doubled consonants are the most Kannada-specific zone, but the budget is two lessons and this one is covered by the aid itself (every row shows ್ at the end), the `alphabet` and `pron` reweights, the -s / -ed notes in `plurals`, `third-s`, `past`, and kn cards in deck 18. Revisit with first-attempt logs.
- **`articles-3`**: no evidence that Kannada speakers need more article practice than the standing rule already forces into every set.
- **A questions-and-tags lesson**: covered by the `questions` reweight and group 1 of `indian-english`.
- **he / she / it lesson**: not needed (§4.9).

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion; every item needs a native check for naturalness]:

| ko-en has | kn-en uses | Note |
|---|---|---|
| Minji (main), Jisoo, Minho | **Divya** (main), **Kiran**; alternates Kavya, Meera, Anu, Nisha, Arjun, Ravi, Vinay, Naveen | Common Karnataka given names that the en-US voice reads acceptably (to be checked by ear) |
| Mr. Kim, Ms. Park | **Mr. Rao**, Ms. Shetty; alternates Hegde, Gowda, Bhat | Work and email scenes; "under Rao" for the reservation card |
| Korea / Korean | India / Kannada | *I'm from India.*, *I speak Kannada.*; Karnataka only where a state is needed |
| Seoul, Busan | **Bengaluru**, Mysuru; alternates Mangaluru, Hubballi | *Bengaluru* is the current official English name and *Bangalore* is still common abroad [unverified here; native check]. If the TTS reads Bengaluru badly, use Bangalore and say so in a note |
| Jeju, weekend trips | Coorg, Hampi, Gokarna, Goa | |
| kimchi, bibimbap, soju | dosa, idli, filter coffee, bisi bele bath, Mysore pak | Vegetarian by default; **no beef or pork** in any example; alcohol only where the ko-en string cannot change |
| won | rupees (the word; never ₹ inside an English string that is read aloud) | lakh / crore only in the `numbers` lesson |
| Chuseok, Seollal | Ugadi, Dasara, Diwali (ದೀಪಾವಳಿ), Sankranti | |
| K-pop, K-drama | Kannada movies, cricket, web series | |
| subway | metro, bus, auto | *auto* (auto-rickshaw) needs a gloss abroad: `indian-english` |
| Korean embassy | Indian embassy | deck 16 |

**Name and TTS rules:**
- Avoid names spelled with *th* (Shwetha, Preethi, Keerthi, Karthik, Harshitha): Karnataka spelling uses *th* for ತ, and the en-US voice will say /θ/. Avoid names the voice is likely to mangle (Lakshmi, Raghavendra, Chaitra) until heard.
- Listen to every localised name in the en-US voice once; write its `pron` from what the voice says (§6 rule 11).
- Kannada side: names in Kannada script (ದಿವ್ಯಾ, ಕಿರಣ್, ರಾವ್, ಬೆಂಗಳೂರು, ಮೈಸೂರು).

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and some PRACTICE items (*Seoul, Busan, kimchi, K-pop*; count per hi.md: about 15). **Leave the English as it is** (parity) and translate the Kannada side literally (ಸಿಯೋಲ್, ಕಿಮ್ಚಿ); do not localise inside parity-bound items.

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Divya.*, *I live in Seoul.* → *I live in Bengaluru.*, *Korea* → *India*, *Korean* → *Kannada*, *Mr. Kim* → *Mr. Rao*, *under Kim* → *under Rao*, *Korean embassy* → *Indian embassy*) is a deviation at the same card position as zh and hi made theirs; list them in `tools/content/kn/deviations.json` the way `tools/content/hi/deviations.json` does.

**Deck names (FINAL proposal).** 22 decks: the 21 in `tools/content/ko/decks.js` (20 topic decks plus the shared alphabet deck, counted locally) and one kn-only deck. Plain written Kannada with established English loans; «ಮತ್ತು» and commas as separators; parentheses for the travel deck; Western digits; **no ZWNJ in any deck name**; all NFC. All names are [native check], most of all 1, 10 and 18.

| # | Deck name (kn) | Linked lessons / notes |
|---|---|---|
| 1 | **ನಮಸ್ಕಾರ ಮತ್ತು ವಿದಾಯ** | greetings and goodbyes (ko 인사) |
| 2 | **ಸ್ವಪರಿಚಯ** | articles, be, present, third-s, object-have, perfect-2, **stative-since** |
| 3 | **ಅತ್ಯಗತ್ಯ ಇಂಗ್ಲಿಷ್ 1** | polite |
| 4 | **ಅತ್ಯಗತ್ಯ ಇಂಗ್ಲಿಷ್ 2** | questions |
| 5 | **ದಾರಿ ಮತ್ತು ಸಾರಿಗೆ** | the |
| 6 | **ಊಟದ ಆರ್ಡರ್** | countable |
| 7 | **ಕೆಫೆ ಮತ್ತು ಅಂಗಡಿ** | cafe and convenience store |
| 8 | **ಶಾಪಿಂಗ್ ಮತ್ತು ಪಾವತಿ** | plurals, adjectives, relative |
| 9 | **ಸಂಖ್ಯೆ, ಸಮಯ ಮತ್ತು ದಿನಾಂಕ** | prep, numbers |
| 10 | **ಲೋಕಾಭಿರಾಮ ಮಾತುಕತೆ** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing. Fallback if testers find it bookish: «ಸ್ಮಾಲ್ ಟಾಕ್» |
| 11 | **ಭಾವನೆ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ** | joining, past-continuous, conditionals |
| 12 | **ಮೆಚ್ಚುಗೆ ಮತ್ತು ಇಷ್ಟ** | compliments and liking |
| 13 | **ಆಫೀಸ್ ಮತ್ತು ಇಮೇಲ್** | first-conditional, passive, email |
| 14 | **ಕಾಲ್ ಮತ್ತು ಚಾಟ್ ಸಂಕ್ಷಿಪ್ತ ರೂಪ** | reported |
| 15 | **ಪ್ರಯಾಣ (ವಿಮಾನ ನಿಲ್ದಾಣ ಮತ್ತು ಹೋಟೆಲ್)** | perfect, articles-2 |
| 16 | **ಆಸ್ಪತ್ರೆ ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿ** | modals |
| 17 | **ಫ್ರೇಸಲ್ ವರ್ಬ್** | phrasal |
| 18 | **ಉಚ್ಚಾರಣೆ: ಎಚ್ಚರ** | pron; kn cards appended (below) |
| 19 | **ಇಂಗ್ಲಿಷ್ ನುಡಿಗಟ್ಟುಗಳು** | idioms |
| 20 | **ಸಿನಿಮಾ, ವೆಬ್ ಸೀರೀಸ್ ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್** | narrative |
| 21 | **ಇಂಗ್ಲಿಷ್ ವರ್ಣಮಾಲೆ** | alphabet (the shared alphabet deck, 26 cards) |
| 22 | **ಇಂಡಿಯನ್ ಇಂಗ್ಲಿಷ್: ಇಲ್ಲಿ ಮತ್ತು ವಿದೇಶದಲ್ಲಿ** | **kn-only**; indian-english |

**Deck content changes** [practitioner opinion unless noted]:
- **Deck 18 (pronunciation): append kn cards** after the shared ones (appended cards do not disturb parity positions; list them as extras as hi does): *bus*, *car*, *book*, *film*, *school* (no final vowel); *happy*, *dinner*, *coffee* (one consonant, not two); *zoo / Jew*, *zero*, *easy* (ಜ಼); *vine / wine*, *vest / west* (ವ಼ / ವ); *law / low*, *caught / coat*, *saw / so* (ಆ / ಓ); *asked*, *months* (final clusters); *about*, *photography* (stress); the letter names *F, L, M, N, S, X, H, Z*.
- **Deck 22 (kn-only):** about 20–24 cards, Indian or Kannada-shaped form on the Kannada side as the cue («"prepone" ಬದಲು»), international form as the answer; groups as in the `indian-english` lesson. Start from hi-en's deck and swap the calque group.
- **Decks 1–17, 19–20:** only the localised cards above; card `note`s may add «ಭಾರತದಲ್ಲಿ: …» where Indian usage differs (lift, flat, hotel, tiffin).
- **Deck 21 (alphabet):** English side shared; Kannada side gives the letter name in the aid and one example word.

## 10. Interface wording notes

**Register:** ನೀವು with the polite imperative (§2). Impersonal statements for states and results («ಸೇವ್ ಆಗಿದೆ», «ಉತ್ತರ ಸರಿ»); the polite imperative for instructions; warm, short praise. All Kannada strings in this section are [native check].

**Buttons, menu items, chips: the same polite form as prose, or a short noun**, no terminal punctuation, no «ದಯವಿಟ್ಟು» on buttons: «ಪ್ರಾರಂಭಿಸಿ», «ಮುಂದುವರಿಸಿ», «ಪರಿಶೀಲಿಸಿ», «ಕಳುಹಿಸಿ», «ಉಳಿಸಿ», «ರದ್ದುಮಾಡಿ», «ಮುಚ್ಚಿ», «ಹಿಂದೆ», «ಮುಂದೆ». This is what WhatsApp's Kannada interface does («ಪ್ರಾರಂಭಿಸಿ», «ಲಿಂಕ್ ನಕಲಿಸಿ»). Kannada has no infinitive-style button form the way Hindi (करना) or Russian do; the polite imperative is the button form.

**Practice instructions** (one verb per item type): «ಸರಿಯಾದ ಆಯ್ಕೆ ಆರಿಸಿ», «ವಾಕ್ಯ ಜೋಡಿಸಿ», «ಖಾಲಿ ಜಾಗ ತುಂಬಿ», «ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಬರೆಯಿರಿ».

**Kannada vs English words in the UI.** Use the plain Kannada word when it is everyday Kannada (ಇಂದು, ಪಾಠ, ಅಭ್ಯಾಸ, ಪ್ರಗತಿ, ಪ್ರಶ್ನೆ, ಉತ್ತರ, ಸರಿ, ತಪ್ಪು, ಸುಳಿವು, ಪದ); use the loan where the Kannada coinage is officialese (ಕಾರ್ಡ್, ಡೆಕ್, ಲೆವೆಲ್, ಸೆಟ್ಟಿಂಗ್ಸ್, ಸಿಂಕ್, ಸೈನ್ ಇನ್, ಇಮೇಲ್, ಪಾಸ್‌ವರ್ಡ್). KDE's guideline (prefer Kannada, keep established community terms) and Google's practice (ಅಪ್ಲಿಕೇಶನ್‌ಗಳು, ಗೇಮ್‌ಗಳು) both support a mixed vocabulary; one term per concept, from the glossary below.

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json uses **Read** where the brief says Drills ("Drills" is a separate label key). Both are given. Counts are **code points** (the cap) and grapheme clusters (`Intl.Segmenter('kn')`, computed locally), which are closer to the visible width.

| English | Kannada label | Code points | Graphemes | Fallback |
|---|---|---|---|---|
| Today | ಇಂದು | 4 | 2 | |
| Practice | ಅಭ್ಯಾಸ | 6 | 4 | |
| Review | ಪುನರ್ಮನನ | 8 | 6 | ಮನನ (3 / 3) or ರಿವ್ಯೂ (6 / 3) |
| Lessons | ಪಾಠಗಳು | 6 | 4 | ಪಾಠ (3 / 2) |
| Read (nav) | ಓದು | 3 | 2 | |
| Drills (label) | ಡ್ರಿಲ್ | 6 | 3 | |
| Progress | ಪ್ರಗತಿ | 6 | 4 | |
| Feedback | ಅನಿಸಿಕೆ | 7 | 4 | ಅಭಿಪ್ರಾಯ (8 / 5) |

- All labels are within the cap. «ಪುನರ್ಮನನ» is exactly 8 code points and the widest (6 clusters, with a subscript); **if it truncates in the 390px test, use «ಮನನ»** and keep «ಪುನರ್ಮನನ» in prose. «ಪುನರಾವರ್ತನೆ» (11) and «ಪ್ರತಿಕ್ರಿಯೆ» (11) are over the cap and must not be used in the tab bar.
- **Kannada letters are wide and tall.** Each Kannada cluster is roughly 1.5–2 Latin letters wide at the same size, and subscript consonants (ಒತ್ತಕ್ಷರ: the ್ಯ in ಅಭ್ಯಾಸ, ್ರ in ಪ್ರಗತಿ and ಡ್ರಿಲ್, ರ್ಮ in ಪುನರ್ಮನನ) and vowel signs above (ಿ, ೆ) and below (ು, ೂ) need more vertical room than Latin. The mobile nav draws labels at `.62rem` (`.57rem` in `nav.tight`) inside `nav a{overflow:hidden; white-space:nowrap}` (src/app.html). At about 10 px subscripts may be **clipped or illegible**. The lead should check the seven labels on a 390px Android and iPhone screen and, if needed, add engine rules like the `html[lang=hi]` ones (below).
- «ಪುನರ್ಮನನ» (tab, noun) and «ಮತ್ತೆ ನೋಡಿ» / «ಮನನ ಮಾಡಿ» (button) are one concept; do not also use «ರಿವಿಷನ್».
- «ಅನಿಸಿಕೆ» (opinion) for Feedback; the page title is «ಅನಿಸಿಕೆ ಕಳುಹಿಸಿ».

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section). Kannada CLDR plural rules: **`one` = 0 and 1**, `other` = everything else (`Intl.PluralRules('kn')` checked locally: 0 one, 1 one, 1.5 other, 2 other, 5 other, 21 other). What changes with number in Kannada:
- **the noun** takes -ಗಳು (ಕಾರ್ಡ್ → ಕಾರ್ಡ್‌ಗಳು, ದಿನ → ದಿನಗಳು), **optionally for things after a numeral** [native check; this profile's reading of usage. CLDR's own data pluralises: `Intl.RelativeTimeFormat('kn')` prints «1 ದಿನದಲ್ಲಿ» but «3 ದಿನಗಳಲ್ಲಿ»];
- **the verb** agrees in number (ಇದೆ / ಇವೆ; ಉಳಿದಿದೆ / ಉಳಿದಿವೆ);
- **case endings** attach to the noun and differ after the plural (ದಿನದಲ್ಲಿ / ದಿನಗಳಲ್ಲಿ);
- **people are counted with special numeral forms** (ಒಬ್ಬ, ಇಬ್ಬರು, ಮೂವರು), which a digit slot cannot produce.

Two number-neutral devices only:
1. **A bare thing-noun right after the number, with no verb and no case ending:** «{1} ಕಾರ್ಡ್», «{1} ದಿನ», «{1} ಪಾಠ», «{1} ನಿಮಿಷ», «{1} ಸೆಕೆಂಡ್», «{1} ಡೆಕ್», «{1} ಪ್ರಶ್ನೆ», «{1} ಅಂಕ», «{1} ವಾರ», «{1} ಸುತ್ತು», «{1} ಸಲ». The unmarked noun after a numeral is normal spoken and written Kannada for things (ಎರಡು ದಿನ, ಹತ್ತು ರೂಪಾಯಿ) [native check], so «1 ಕಾರ್ಡ್», «2 ಕಾರ್ಡ್», «21 ಕಾರ್ಡ್» and «0 ಕಾರ್ಡ್» all read correctly. A native reviewer may prefer the plural for large numbers in running text («21 ಕಾರ್ಡ್‌ಗಳು»); in labels and chips the bare form is the safer single wording.
2. **Label + colon + number** for everything else (a state that would need a verb, or anything that sounds wrong bare): «ಬಾಕಿ: {1}», «ಹೊಸದು: {1}», «ತಪ್ಪು: {1}», «ಕಲಿತದ್ದು: {1}», «ಸತತ ದಿನ: {1}». The label is a fixed heading, so «ಬಾಕಿ: 1» and «ಬಾಕಿ: 21» both read correctly.
- **Never** a verb that agrees with the count («{1} ಕಾರ್ಡ್ ಉಳಿದಿವೆ», «{1} ಪಾಠ ಮುಗಿದಿದೆ»), a case ending after the counted noun («{1} ದಿನದಲ್ಲಿ», «{1} ದಿನಗಳಲ್ಲಿ»), a plural ending («{1} ಕಾರ್ಡ್‌ಗಳು»: wrong at 1), or a count of people as numeral + noun («{1} ಬಳಕೆದಾರ»: use «ಬಳಕೆದಾರರು: {1}»).
- **"in N days":** not «{1} ದಿನದಲ್ಲಿ» (CLDR changes the noun at 3). Use the label form: «ಮುಂದಿನ ಕಾರ್ಡ್‌ಗಳಿಗೆ ಬಾಕಿ ದಿನ: {1}», or a postposition word after the bare noun: «{1} ದಿನ ನಂತರ» [native check; «ದಿನದ ನಂತರ» may be preferred].
- Ordinal and "N of M" patterns: «ಕಾರ್ಡ್ {1}/{2}», «ಸುತ್ತು {1}/{2}», «ಲೆವೆಲ್ {1}», «ಪಾಠ {1}». Avoid Kannada ordinal words (ಮೊದಲನೆಯ, ಎರಡನೆಯ) and «{2} ರಲ್ಲಿ {1}» (a case ending on a digit).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`, `{n} card` / `{n} cards`). **Give both the identical neutral wording**, because the "singular" one also fires at 0 in Kannada CLDR terms and the "plural" one at 21.
- Writers must render each count string at **0, 1, 2 and 21** before submitting.

Counted nouns and their forms (use exactly):

| English in keys.json | Kannada form | Sample render |
|---|---|---|
| card(s) | {1} ಕಾರ್ಡ್ | «21 ಕಾರ್ಡ್» |
| cards due / due | ಬಾಕಿ: {1} | «ಬಾಕಿ: 3» |
| deck(s) | {1} ಡೆಕ್ | «4 ಡೆಕ್ · 260 ಕಾರ್ಡ್» |
| day(s) / streak | {1} ದಿನ / ಸತತ ದಿನ: {1} | «ಸತತ ದಿನ: 1» |
| week(s) | {1} ವಾರ | «6 ವಾರ» |
| lesson(s) | {1} ಪಾಠ / ಮುಗಿದ ಪಾಠ: {1}/{2} | «ಮುಗಿದ ಪಾಠ: 5/42» |
| review(s) | ಮನನ: {1} | «ಮನನ: 50 · ಸರಿ: 85%» |
| point(s) / pts | {1} ಅಂಕ | «120 ಅಂಕ» |
| XP | {1} XP | «120 XP» |
| round(s) | {1} ಸುತ್ತು / ಬಾಕಿ ಸುತ್ತು: {1} | «ಬಾಕಿ ಸುತ್ತು: 2» |
| item(s) / question(s) | {1} ಪ್ರಶ್ನೆ | «14 ಪ್ರಶ್ನೆ» |
| run(s) / tried | ಪ್ರಯತ್ನ: {1} | «ಪ್ರಯತ್ನ: 3» |
| quiz(zes) | ಕಿರು ಪರೀಕ್ಷೆ: {1} | «ಕಿರು ಪರೀಕ್ಷೆ: 1» |
| answered | ಉತ್ತರ: {1} | «ಉತ್ತರ: 20» |
| ×missed | ತಪ್ಪು: {1} | «ತಪ್ಪು: 3» |
| seen ×N | ನೋಡಿದ್ದು: {1} ಸಲ | «ನೋಡಿದ್ದು: 4 ಸಲ» |
| pattern(s) / dialogue(s) / badge(s) | {1} ಪ್ಯಾಟರ್ನ್ / {1} ಸಂಭಾಷಣೆ / {1} ಬ್ಯಾಡ್ಜ್ | |
| new / new cards per day | ಹೊಸದು: {1} / ದಿನಕ್ಕೆ ಹೊಸ ಕಾರ್ಡ್: {1} | «ದಿನಕ್ಕೆ ಹೊಸ ಕಾರ್ಡ್: 10» |
| left | ಬಾಕಿ: {1} | «ಬಾಕಿ: 7» |
| learned | ಕಲಿತದ್ದು: {1}/{2} | «ಕಲಿತದ್ದು: 40/260» |
| locked / selected | ಲಾಕ್: {1} / ಆರಿಸಿದ ಡೆಕ್: {1} | |
| minutes / seconds / KB | {1} ನಿಮಿಷ / {1} ಸೆಕೆಂಡ್ / {1} KB | «5 ನಿಮಿಷ» |
| "next due in N days" | ಮುಂದಿನ ಕಾರ್ಡ್‌ಗಳಿಗೆ ಬಾಕಿ ದಿನ: {1} | «ಮುಂದಿನ ಕಾರ್ಡ್‌ಗಳಿಗೆ ಬಾಕಿ ದಿನ: 3» |

**Language-name slots.** The engine fills `{x}` with the dictionary form from `Intl.DisplayNames('kn')` (checked locally: ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ, ಕೊರಿಯನ್, ಹಿಂದಿ, ಜಾಪನೀಸ್, ಸ್ಪ್ಯಾನಿಷ್, ಫ್ರೆಂಚ್, ಜರ್ಮನ್, ಚೈನೀಸ್, ತೆಲುಗು, ತಮಿಳು) and "capitalises" the first letter, a no-op for Kannada. **A Kannada case ending fuses with the name and its linking sound depends on the name's last letter**: ಕನ್ನಡ**ದಲ್ಲಿ**, ಹಿಂದಿ**ಯಲ್ಲಿ**, ಇಂಗ್ಲಿಷ್‌**ನಲ್ಲಿ**, ತೆಲುಗ**ಿನಲ್ಲಿ** [native check]. A template cannot do that, so:
- Put the slot **at the start of the line** («{1}: …») or **as the value after a colon** («ಕೋರ್ಸ್: {1}»).
- **Never attach a case ending to the slot, and never put a detached one after it** («{1}ನಲ್ಲಿ», «{1} ನಲ್ಲಿ», «{1}ಗೆ», «{1}ನ»).
- A bare object before a verb is fine: «{1} ಕಲಿಯಿರಿ» (the accusative ending is optional for things) [native check]. A free postposition word after the bare name is not safe (ಜೊತೆ and ನಂತರ want the genitive: ಕನ್ನಡದ ಜೊತೆ).

| keys.json template | Kannada (renders as) |
|---|---|
| Change language · {x} | `ಭಾಷೆ ಬದಲಿಸಿ · {1}` (→ ಭಾಷೆ ಬದಲಿಸಿ · ಇಂಗ್ಲಿಷ್) |
| Now learning {x} · progress saved per course | `ಕೋರ್ಸ್: {1} · ಪ್ರತಿ ಕೋರ್ಸ್‌ನ ಪ್ರಗತಿ ಬೇರೆಯಾಗಿ ಸೇವ್ ಆಗುತ್ತದೆ` |
| How much {x} do you know? | `{1}: ನಿಮ್ಮ ಲೆವೆಲ್ ಯಾವುದು?` |
| What do you want {x} for? | `{1}: ಯಾವ ಉದ್ದೇಶಕ್ಕೆ ಕಲಿಯುತ್ತೀರಿ?` |
| type it in {x} | `ಉತ್ತರದ ಭಾಷೆ: {1}` |
| Type in {x}… | `ಉತ್ತರದ ಭಾಷೆ: {1}…` |
| Type the {x}, or tap Check again to give up. | `ಉತ್ತರದ ಭಾಷೆ: {1}. ಉತ್ತರ ಬರೆಯಿರಿ, ಅಥವಾ ಬಿಟ್ಟುಬಿಡಲು ಮತ್ತೆ «ಪರಿಶೀಲಿಸಿ» ಒತ್ತಿ.` |
| No {x} keyboard? Use tiles | `{1}: ಕೀಬೋರ್ಡ್ ಇಲ್ಲವೇ? ಟೈಲ್ ಬಳಸಿ` |
| Learning {x} 5 minutes a day with Lang App {x} | `{1} — ದಿನಕ್ಕೆ 5 ನಿಮಿಷ, Lang App {2}` |
| Learn {x}, 5 minutes a day | `{1} ಕಲಿಯಿರಿ — ದಿನಕ್ಕೆ 5 ನಿಮಿಷ` |

- The template wording above is copied from hi.md's reading of keys.json; the interface writer must match each key as it stands in keys.json and keep the slot at the start, after a colon, or as a bare object.

`profile.json` `name.kn` = **«ಇಂಗ್ಲಿಷ್»** (NFC): the course list shows `name[uiLang]` standalone as a row label.

**UI glossary (use exactly; all [native check]):**

| English | Kannada | Note |
|---|---|---|
| lesson | ಪಾಠ | |
| practice | ಅಭ್ಯಾಸ | |
| review | ಪುನರ್ಮನನ (tab, prose) / ಮನನ (count label) | |
| deck | ಡೆಕ್ | plural ಡೆಕ್‌ಗಳು |
| card | ಕಾರ್ಡ್ | plural ಕಾರ್ಡ್‌ಗಳು |
| streak | ಸತತ ದಿನ: {1} | |
| hint | ಸುಳಿವು | |
| check (mini-test) | ಕಿರು ಪರೀಕ್ಷೆ | |
| Check (button) | ಪರಿಶೀಲಿಸಿ | |
| correct / wrong | ಸರಿ! / ತಪ್ಪು | always with ✓ / ✗ |
| answer | ಉತ್ತರ | |
| why / reason | ಕಾರಣ: | |
| try again | ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ | |
| option (multiple choice) | ಆಯ್ಕೆ | |
| drill | ಡ್ರಿಲ್ | |
| session | ಸೆಷನ್ | |
| level | ಲೆವೆಲ್ | |
| XP | XP | Latin |
| show pronunciation | ಉಚ್ಚಾರಣೆ ತೋರಿಸಿ | |
| listen | ಕೇಳಿ | |
| progress | ಪ್ರಗತಿ | |
| feedback / send feedback | ಅನಿಸಿಕೆ / ಅನಿಸಿಕೆ ಕಳುಹಿಸಿ | |
| settings | ಸೆಟ್ಟಿಂಗ್ಸ್ | KDE uses ಸಿದ್ಧತೆಗಳು / ಸಂಯೋಜನೆಗಳು; the loan is what phones show [native check] |
| sign in / sign out | ಸೈನ್ ಇನ್ ಮಾಡಿ / ಸೈನ್ ಔಟ್ ಮಾಡಿ | |
| sync | ಸಿಂಕ್ | |
| save / cancel / close | ಉಳಿಸಿ / ರದ್ದುಮಾಡಿ / ಮುಚ್ಚಿ | |
| back / next | ಹಿಂದೆ / ಮುಂದೆ | |
| start / continue / send | ಪ್ರಾರಂಭಿಸಿ / ಮುಂದುವರಿಸಿ / ಕಳುಹಿಸಿ | |

**Numbers, dates and time** (`Intl` with `kn-IN`, checked locally in Node, ICU 78.2; never hand-format):
- **Western digits.** `Intl.NumberFormat('kn-IN')` itself prints Latin digits: «1,234,567.5», «85%», «₹500.00». Kannada digits ೦–೯ exist and appear in some print (Kannada Wikipedia mixes both on one page); apps use Western digits, and the Microsoft guide writes numerals with a period decimal and comma thousands "as in English". Never set `-u-nu-knda`.
- **Grouping is 1,234,567 in `kn-IN`**, not the lakh grouping 12,34,567 that `en-IN` and `hi-IN` print. Keep the Intl output; teach lakh / crore only in the `numbers` lesson.
- Dates: «ಸೋಮವಾರ, ನವೆಂಬರ್ 23, 2026» (full), «ನವೆಂಬರ್ 23, 2026» (long), «ನವೆಂ 23, 2026» (medium), «23/11/26» (short: day first), day + month «23 ನವೆಂಬರ್»; weekdays ಸೋಮ / ಸೋಮವಾರ. Time «09:05 PM» (12-hour, Latin AM / PM).
- Relative time changes the noun with number («1 ದಿನದಲ್ಲಿ», «3 ದಿನಗಳಲ್ಲಿ»); `Intl.RelativeTimeFormat` handles it, hand-written templates must not try (counts, above).
- Percent after the number, no space: 85%.

**Fonts and line height (engine, not content; a request to the lead):**
- `src/app.html` has `html[lang=hi]` rules and a `body [lang=kn]` rule for Kannada *target* text in en-kn (font stack 'Kannada Sangam MN', 'Kannada MN', 'Noto Sans Kannada', 'Tunga', 'Nirmala UI'; line-height 1.8), but **no `html[lang=kn]` interface rule**. Requested, modelled on the hi block: `html[lang=kn] body{font-family:'DM Sans','Noto Sans Kannada','Kannada Sangam MN','Kannada MN','Tunga','Nirmala UI',system-ui,sans-serif; line-height:1.7}`, `html[lang=kn] nav a{overflow:visible; line-height:1.5}`, and the Kannada faces added to `--mono` for `.rom` / `.pron`, because the aid is Kannada script in a monospace slot.
- **Render test for the aid** (not done; no device here): ಫ಼ ಜ಼ ವ಼ ಥ಼ ದ಼ ಶ಼ with every vowel sign and with ್ + a following consonant; word-initial ಆ್ಯ; ˈ between two aksharas; a final ್ after a conjunct (ಆ್ಯಸ್ಕ್ಟ್). On Noto Sans Kannada, Tunga / Nirmala UI (Windows) and Kannada Sangam MN (Apple). If a font drops or misplaces the dot on ವ ಥ ದ ಶ, the fallback is the lead's call (§11).
- Kannada has no capitals and no italics tradition: no `text-transform`, emphasis by bold only.
- Truncation: never cut a Kannada string by code units; an ellipsis after a cluster only (`Intl.Segmenter`).

**Language name** in prose: «ಇಂಗ್ಲಿಷ್», «ಕನ್ನಡ». **Feedback marks:** ✓ «ಸರಿ!» / ✗ «ತಪ್ಪು». Always pair a mark with text.

## 11. Gaps and unverified claims

**Process gaps**
- `reports/Grammar learning order research.md` **does not exist** in this worktree; it was skipped as instructed. Lesson order is taken from `lib.js` `ORDER` as it stands.
- `docs/profiles/OTHERS.md` has **no Kannada section**, so there was no prior sketch to confirm or correct.
- The brief speaks of 39 lessons and 20 decks; the scaffold today has **40 lesson ids** (with `alphabet`) and **21 decks** (with the alphabet deck). This profile follows the scaffold.
- No device, browser or TTS was available: nothing was rendered or heard.

**Sources that could not be opened (nothing from them is asserted as read)**
- **Nanjaiah 1994** (CIIL), the one Kannada-L1 error analysis found: scanned image, findings unread. Top priority to obtain.
- **Zydenbos, *A Manual of Modern Kannada*** (Heidelberg): fetch refused. Search snippets suggested it states the loanword rules (final consonant + short u, f → p / ph, z → j, æ → yā); **not used as a source**.
- The **Oxford English-English-Kannada Dictionary**'s actual Kannada pronunciation key: only a news item about the dictionary was read. If its key differs from §6 (for example in how it writes æ, ɔː or z), prefer consistency with what learners already own, and revise the table.
- Karnataka's policy of **English from class 1 since 2007** (Business Standard, the KSEEB reader preface): snippets only.
- **The Week 2016** on phonetics in Indian schools: cited by hi.md, not re-opened; nothing found for the Karnataka board.
- EF EPI fact-sheet PDFs (unreadable); the 2025 figures are from a snippet. Deccan Herald, educationworld and OUP India pages (403 / 404). ICPhS papers on Indian English stress, and a paper on Indian English tag questions (snippets or 404).
- The **Kannada examples in the Microsoft style guide** were lost in text extraction; only its English prose was read.
- No Kannada-language English-grammar textbook, no Kannada interface of a language-learning app, and no Kannada style guide from Mozilla (none exists in the repository listing) was read.

**Evidence gaps**
- **No error-frequency data for Kannada speakers** in any zone. The ranking in §4 is inference from contrast and from pan-Indian feature lists (ICE-India, SJSU).
- **No study of final-vowel epenthesis or gemination in Kannada speakers' English** was found, though this profile ranks it second and builds the aid around it. The Kanglish article is thin (one citation). Bilinguistics contradicts itself on final consonants.
- Wiltshire 2015 has 5 Kannada speakers, all proficient graduates; Jain et al. pool L1s.
- No stress-placement, tag-question or he / she / it data for Kannada speakers.
- Whether Kannada-medium learners know tense names in English and V1 / V2 / V3 is assumed from hi.md, not checked.

**Design risks (need the lead's decision or a device test)**
- **The nukta on ವ ಥ ದ ಶ is this profile's own extension.** U+0CBC is a Kannada code point and ಜ಼ ಫ಼ have some real use, but dotted ವ ಥ ದ ಶ are not an existing convention, and font support for the dot on those bases (and its position with vowel signs and in conjuncts) is untested. Fallback if rendering fails: keep ಜ಼ ಫ಼ and write v, θ, ð with another device; that would need a new pattern.
- Word-initial **ಆ್ಯ** (vowel + ್ + ಯ) is, as far as this profile's author knows, how Kannada print writes words like *app* (ಆ್ಯಪ್) [native check], but some shaping engines may show a visible ್ or a dotted circle.
- **ˈ inside Kannada text** may be drawn from a fallback font at a different height.
- Plain **ವ for /w/** may be read as [ʋ] before front vowels (we, west) by speakers who do so in Kannada; the `pron` lesson has to say it.
- Bare final consonant = schwa (rule 5) makes *the* ದ಼ and *a* ಅ look odd at first; the `pron` lesson must explain it.
- The collapse ɑː / ɔː → ಆ is a judgement call (§6).
- `nativeScript` excludes Kannada digits on purpose.

**Native check list (a Kannada-speaking reviewer should confirm or correct)**
1. Register: -ಇ vs -ಇರಿ on each button verb; whether ಬರೆಯಿರಿ / ಕಲಿಯಿರಿ / ತುಂಬಿ / ಜೋಡಿಸಿ are the natural forms; tone of «ಶಾಭಾಷ್!», «ಸೂಪರ್!».
2. Every glossary term in §3 (especially ಎಣಿಸಬಹುದಾದ / ಎಣಿಸಲಾಗದ ನಾಮಪದ, ಸ್ಥಿತಿ ತಿಳಿಸುವ ಕ್ರಿಯಾಪದ, ಪರೋಕ್ಷ ಕಥನ, the name of the ್ sign, ಒತ್ತು for stress).
3. Every "Why" contrast in §4 and §8: ಅಲ್ವಾ as the only tag; -ಇಂದ = from / since / by; -ಏ → *only / itself*; optional plural after numerals; participial relatives; ಅಂತ / ಎಂದು keeping the speaker's words; ಬೇಕು = want / need / must; doubled consonants in loans (ಬಸ್ಸು, ಬುಕ್ಕು); glide before initial vowels.
4. The Kannada calques in §4.12 and `indian-english`.
5. All 22 deck names; the three sample sentences in §2; the sample `why` lines in §7.
6. Tab labels: is «ಪುನರ್ಮನನ» understood as "review", or is «ಮನನ» / «ರಿವ್ಯೂ» better? Is «ಅನಿಸಿಕೆ» right for Feedback?
7. Count forms: is the bare noun acceptable at 2 and 21 for each counted noun? «{1} ದಿನ ನಂತರ» vs «ದಿನದ ನಂತರ».
8. Loan + ending spellings with ZWNJ (ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಕಾರ್ಡ್‌ಗಳು, ಡೆಕ್‌ಗೆ) and the choice of ಇಂಗ್ಲಿಷ್ over ಇಂಗ್ಲೀಷ್.
9. Names: Divya, Kiran, Rao, Shetty as neutral choices across regions and communities of Karnataka.
10. Whether a Kannada reader reads ಬˈನ್ಯಾನ, ದ಼, ಅವ಼್ as intended with no instruction beyond the `pron` lesson.

**Validation run** (Node, flag `u`, on the two deliverables as written; script kept in the scratch folder, not in the repo):

```
kn.profile.json: valid JSON, keys = native, nativeNameEn, name, ttsLang, nativeScript, pron, pronPattern, standingRule, labels, lessonOrder
regex compile (flag u): nativeScript ok, pronPattern ok (1380 chars), standingRule.keywords ok
worked examples: 87 rows, 87 match pronPattern, 0 fail; 0 missing from kn.md
must-reject strings: 15 tested, 0 wrongly accepted
keywords: 9/9 intended hits, 0/3 false hits; all sample lines present in kn.md: true
nativeScript: "ಸರಿ" true, "I have 2 books." false, "೨೦೧೦" false; mcBlankCue true, typeHintCue true
NFC: kn.md true, kn.profile.json true
deck table rows: 22; ZWNJ in deck names: false
numbered sections: 11; lessonOrder.after = {"indian-english":"smalltalk","stative-since":"perfect-2"}
hand-written key, weak-form and letter-name examples in §6: 177 re-derived with the converter, 0 mismatch
```

## Sources

Opened and read (web pages through the fetch tool's summary; PDFs marked "text extracted locally"):

**Research**
- Wiltshire, C. (2015). "Dravidian Varieties of Indian English." In *V.I. Subramoniam Commemoration Volume* (IJDL). PDF, text extracted locally: https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2015-Wiltshire-IJDL-Dravid-Eng.pdf
- Jain, S., Pal, P., Vuppala, A., Ghosh, P., Yarra, C. "An Investigation of Indian Native Language Phonemic Influences on L2 English Pronunciations." arXiv 2212.09284: https://ar5iv.labs.arxiv.org/html/2212.09284
- Demszky, D., Sharma, D., Clark, J., Prabhakaran, V., Eisenstein, J. "Learning to Recognize Dialect Features." arXiv 2010.12707: https://ar5iv.labs.arxiv.org/html/2010.12707
- EF English Proficiency Index, India page: https://www.ef.com/wwen/epi/regions/asia/india/
- Nanjaiah, R. (1994). *A linguistic study of errors in the written English of PUC students*. CIIL repository record (metadata and abstract only; full text unreadable): https://sanchika.ciil.org/items/ba486f18-3f81-458f-92de-668e66fc944d/full

**Teaching guides and practitioner pages**
- San José State University, Writing Across the Curriculum. *Guide: Indian-English Variations*. PDF, text extracted locally: https://gcp-web.sjsu.edu/wac/docs/Guide%20Indian-English%20Variations.pdf
- Bilinguistics, "Kannada Speech and Language Development": https://bilinguistics.com/languages/kannada-speech-and-language-development/
- TalkDrill, "South Indian speakers: English pronunciation": https://www.talkdrill.com/blog/pronunciation/indian-english/south-indian-speakers-english-pronunciation/
- University of Pennsylvania, spoken Kannada course, lesson 2: https://ccat.sas.upenn.edu/plc/kannada/lesson2.html
- Wikivoyage, Kannada phrasebook: https://en.wikivoyage.org/wiki/Kannada

**Reference articles**
- Wikipedia, *Kannada*: https://en.wikipedia.org/wiki/Kannada
- Wikipedia, *Kannada grammar*: https://en.wikipedia.org/wiki/Kannada_grammar
- Wikipedia, *Kannada script*: https://en.wikipedia.org/wiki/Kannada_script
- Wikipedia, *Kanglish*: https://en.wikipedia.org/wiki/Kanglish
- Wikipedia, *Nukta* (read; says nothing about Kannada): https://en.wikipedia.org/wiki/Nukta
- Kannada Wikipedia, ಕನ್ನಡ ವ್ಯಾಕರಣ: https://kn.wikipedia.org/wiki/ಕನ್ನಡ_ವ್ಯಾಕರಣ

**Style guides and interface text**
- Microsoft Kannada Style Guide (December 2017). PDF, English text extracted locally: https://download.microsoft.com/download/9/6/7/9673794D-A6F0-46F9-B8E0-BFEB6F8B410E/kan-ind-StyleGuide.pdf (index: https://learn.microsoft.com/en-us/globalization/reference/microsoft-style-guides)
- KDE Kannada localisation guidelines: https://kn.l10n.kde.org/guidelines.html
- Mozilla l10n style guides, folder listing (no Kannada guide): https://github.com/mozilla-l10n/styleguides/tree/main/docs
- WhatsApp Help Centre in Kannada: https://faq.whatsapp.com/1278661612895630/?lang=kn
- Google Account help, Kannada notice: https://support.google.com/accounts/answer/27441?hl=kn
- Google Play, Kannada page header: https://play.google.com/store/apps/details?id=com.duolingo&hl=kn

**News**
- Careers360 (15 November 2018), OUP launches English-English-Kannada dictionary: https://news.careers360.com/oup-launches-english-english-kannada-dictionary-over-52000-date-entries/amp
- The News Minute (29 February 2020), Karnataka's English-medium government schools: https://www.thenewsminute.com/karnataka/karnataka-s-english-medium-schools-demand-training-teachers-challenge-119183
- The News Minute (15 June 2018), Karnataka and English-medium schools since 1994: https://www.thenewsminute.com/amp/story/karnataka/banned-english-schools-2006-now-wants-language-lkg-hdk-s-u-turn-83139

**Repository files read**
- `docs/briefs/profile-ko-based.md`, `docs/profiles/hi.md`, `docs/profiles/en-kn.md`, `docs/PIPELINE.md`, `docs/PHASE2-BRIEF.md`, `docs/PRACTICE-SPEC.md`
- `tools/content/lib.js`, `tools/content/validate.js`, `tools/content/ko/decks.js`, `tools/content/zh/PRON-RULES.md`, `tools/content/zh/profile.json`, `tools/content/id/profile.json`, `tools/content/hi/profile.json`, `tools/content/hi/PRON-TOOL.md`, `tools/content/hi/pron_hi.js`, `tools/content/hi/DECKNAMES.md`, `tools/content/hi/deviations.json`
- `packs/course-zh-en.js` (776 IPA strings), `src/app.html`
- Local Node `Intl` data (ICU 78.2): DisplayNames, PluralRules, NumberFormat, DateTimeFormat, RelativeTimeFormat, Segmenter for `kn` / `kn-IN`.
