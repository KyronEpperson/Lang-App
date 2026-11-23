# Punjabi speakers learning English — course profile

Course `pa-en`. Audience: adult Punjabi speakers who read Gurmukhi — in Indian Punjab, Chandigarh, Haryana and Delhi, and in the diaspora (Canada, the UK, the US, Australia). All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Punjabi of Indian Punjab in the Gurmukhi script**, with the English loanwords speakers actually use (ਕਾਰਡ, ਲੈਵਲ, ਈਮੇਲ, ਸਕੂਲ, ਟਾਈਮ); answers and examples are in English. The app code is **`pa`** (profile.json `native: "pa"`, pack `course-pa-en`, interface pack `i18n-pa`).

**`pa` = Gurmukhi in this app (checked).** The reverse course `en-pa` already treats `pa` as Eastern Punjabi in Gurmukhi: `tools/target/pa/profile.json` has `ttsLang: "pa-IN"` and `targetScript: "[ਁ-੥ੰ-ੵ]"`, `src/app.html` has a Gurmukhi font rule for `body [lang=pa]`, and `docs/profiles/en-pa.md` §2.1 says Shahmukhi is not taught. This profile follows that. Readers of Shahmukhi (most Punjabi speakers in Pakistan) cannot use this course; that would be a separate course with its own code (§11).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 39 grammar lessons plus the shared `alphabet` lesson, 20 decks plus the shared alphabet deck, standing rule `article-plural`), like zh, vi, id, ru and hi, because Punjabi has no articles. `parity.js` compares pa-en's English side with ko-en's. The closest finished course is **hi-en**: Hindi and Punjabi share most of the grammar contrasts with English, and this profile reuses hi-en's decisions wherever the two languages agree, and says where they do not (script, tone, vowel spelling, clusters, count wording).

Evidence labels:
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what textbooks, exam boards, dictionaries, style guides or large products do.
- **[practitioner opinion]**: a teacher's, school's or blog's position.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Punjabi**. Every Punjabi sentence, term and example in this file is the author's and has not been read by a native speaker; the ones writers will copy are listed for a native check in §11.

A study read only as an abstract, a first page or a search-result summary is marked as such. Web pages were read through the fetch tool's summary; two PDFs (Akbar et al. 2023; Fatima et al. 2023) were text-extracted locally and their abstracts and result paragraphs read directly (§11). The brief's `reports/Grammar learning order research.md` does not exist in this worktree and was skipped (§11).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, the same English strings as `ko-en`). Explanations address the learner as **ਤੁਸੀਂ** with the plain polite imperative in -ੋ (ਚੁਣੋ, ਲਿਖੋ); buttons use the same form. Punjabi school grammar terms (ਨਾਂਵ, ਕਿਰਿਆ, ਇੱਕਵਚਨ / ਬਹੁਵਚਨ), with **tense names kept in English** (*Simple Present*, *Present Perfect*).
- **Error evidence is thin and mostly not Punjab-(India)-specific.** The usable studies sample Pakistani Punjab (Akbar et al. 2023, 20 learners: articles the most common written error; Habib & Khan 2019: vowel insertion in onset clusters; Fatima et al. 2023: aspiration) or Indian English in general. Ranking is this profile's inference.
- **Top zones:** articles (omitted and added), **continuous with states and durations** (*I am living here since 2010*), third-person -s, plurals and countability, word order and question formation (verb-final Punjabi, no inversion), **he / she / it** (ਉਹ is one word) and *his / her*, prepositions (Punjabi has postpositions), dropped subjects, and Indian English usages that puzzle listeners abroad.
- **Pronunciation zones:** v / w (one letter ਵ), th as a dental stop, z → j and f → ph in rural speech, no /ʒ/, **a vowel slipped into or before consonant clusters** (*sakool*, *iskool*), short / long vowels, even stress, and Punjabi pitch (tone) carried into English.
- **Pronunciation aid: a Gurmukhi respelling, required** (`"pron": "required"`), not IPA. The key is a table from the zh course's IPA, so shared rows are **derived, not re-transcribed**. The dot (ਪੈਰ-ਬਿੰਦੀ) marks sounds Punjabi lacks (**ਵ਼** = /v/ vs **ਵ** = /w/, **ਥ਼ ਦ਼** = /θ ð/, with ਜ਼ ਫ਼ ਸ਼ as usual), a **visible halant ੍** marks "no vowel here" in clusters (ਸ੍ਕੂਲ), **ˈ** marks stress, and the tone letters ਘ ਝ ਢ ਧ ਭ and the addak are banned from the aid.
- **Standing rule: `article-plural`**, keywords `ਆਰਟ[ੀਿ]ਕਲ|ਬਹੁ-?ਵਚਨ|ਗਿਣਨ-?ਯੋਗ` (no flags); zero parity cost.
- **Curriculum:** all 40 shared ids kept in order (6 keep, 34 reweight, no English-side changes). Add 2, both with the English side reusable from hi-en: `indian-english` (end of A1; deck 22) and `stative-since` (B1, after `perfect-2`).
- **Interface:** Western digits only. Counts use **an invariant noun right after the number with no verb** («{1} ਕਾਰਡ», «{1} ਦਿਨ») or **label + colon** («ਬਾਕੀ: {1}»); never a postposition after the slot, because Punjabi then needs the oblique plural (1 ਦਿਨ ਵਿੱਚ / 3 ਦਿਨਾਂ ਵਿੱਚ). Language-name slots at the start or after a colon. The app has no `html[lang=pa]` font and line-height rule yet (§10).

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC freezes the shared English strings. The pron aid must describe what learners hear.
2. Schools and newspapers in Punjab write British spelling (*colour*, *programme*), and spoken Indian English is its own norm. The course teaches American forms without calling Indian or British forms wrong: a card `note` may say «ਭਾਰਤ ਤੇ ਬ੍ਰਿਟੇਨ ਵਿੱਚ: lift / flat / colour» [inference, same policy as hi.md §2].
3. Many learners are heading for **Canada, the UK or Australia** (§5), where spelling and some words are British-leaning. One line in `alphabet` and `email` says so: Canada writes *colour, centre* and says *zed*; the grammar and almost all the vocabulary of this course are the same there [inference].

**Register: ਤੁਸੀਂ with the plain polite imperative in -ੋ (ਚੁਣੋ, ਲਿਖੋ, ਸੁਣੋ); never ਤੂੰ** [decision].
- **What was found:**
  - [curriculum convention] Punjabi has two levels only: ਤੂੰ (familiar) and ਤੁਸੀਂ (polite, and grammatically plural). Wikipedia's grammar article: Punjabi has "a T-V distinction in tū̃ and tusī̃", and the polite form "is also grammatically plural" ([Wikipedia, *Punjabi grammar*](https://en.wikipedia.org/wiki/Punjabi_grammar)). There is no middle form like Hindi तुम (`docs/profiles/en-pa.md` §2.3).
  - [curriculum convention] The one piece of Punjabi product text that could be opened, Google's Help banner, addresses the user with ਤੁਸੀਂ forms and ends the sentence with a danda: «ਤੁਹਾਡੇ ਵੱਲੋਂ ਬੇਨਤੀ ਕੀਤਾ ਪੰਨਾ ਫ਼ਿਲਹਾਲ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।» ([Google Account Help, `hl=pa`](https://support.google.com/accounts/answer/27441?hl=pa)). The rest of that page was English.
  - No Punjabi localisation style guide could be read. Mozilla's Punjabi team page points to a FUEL project style guide PDF on a retired host ([Mozilla wiki, L10n:Teams:pa](https://wiki.mozilla.org/L10n:Teams:pa)); a Microsoft Punjabi style guide was not found by search (§11).
- **Decision: ਤੁਸੀਂ.** Reasons:
  1. ਤੂੰ from an app reads as talking down to an adult stranger (en-pa.md §2.3: "rude to a stranger or an elder"); the app is a teacher, and teachers are addressed as ਤੁਸੀਂ.
  2. The cost is nil: the ਤੁਸੀਂ imperative is as short as the ਤੂੰ one (ਲਿਖੋ / ਲਿਖ, ਚੁਣੋ / ਚੁਣ), so buttons and the tab bar are unaffected.
  3. Verbs with ਤੁਸੀਂ are plural and usually masculine-form (ਤੁਸੀਂ ਕੀ ਸਿੱਖਣਾ ਚਾਹੁੰਦੇ ਹੋ?). That is the normal gender-neutral polite form; no slash forms (ਚਾਹੁੰਦੇ / ਚਾਹੁੰਦੀਆਂ) in the interface [inference; en-pa.md §2.3 notes the usage varies].
- **Imperative level:** the plain -ੋ form (ਕਰੋ), not the extra-deferential forms (ਕਰਿਓ, ਕਰੋ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਕਰੋ). «ਕਿਰਪਾ ਕਰਕੇ» only in a full-sentence request in an error message, never on a button. No ਜੀ in interface text [inference].
- **Voice:** friendly teacher, plain everyday Punjabi. English loans that are the normal word stay (ਕਾਰਡ, ਲੈਵਲ, ਐਪ, ਈਮੇਲ, ਦਫ਼ਤਰ *and* ਆਫ਼ਿਸ in scenes, ਮੀਟਿੰਗ, ਸੈਟਿੰਗਾਂ); plain Punjabi where it is everyday (ਪਾਠ, ਅਭਿਆਸ, ਸਵਾਲ, ਜਵਾਬ, ਗ਼ਲਤੀ, ਤਰੱਕੀ). **Punjabi forms, never Hindi ones**: ਹਾਂ / ਹੈ / ਹਨ / ਹੋ, ਨੂੰ, ਤੋਂ, ਵਿੱਚ, ਦਾ / ਦੇ / ਦੀ, ਕਿੱਥੇ, ਸੀ, -ਦਾ habitual (en-pa.md §2.5). A writer who drafts from the Hindi course must rewrite, not transliterate: «ਲਿਖੇਂ», «ਕਰੇਂ», «ਔਰ», «ਲੇਕਿਨ», «ਸਵਾਲ ਕਾ ਜਵਾਬ» are Hindi in Gurmukhi letters and are errors here.
- **Never:** ਤੂੰ addressed to the learner; mixed ਤੂੰ / ਤੁਸੀਂ on a screen; Sanskritised officialese (ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ…, ਉਪਯੋਗਕਰਤਾ, ਸੰਗਣਕ); romanised Punjabi (*tusi kiven ho*); slang to the learner (ਯਾਰ, ਭਾਜੀ, ਪਾਜੀ); more than one exclamation mark per screen.
- **Translations of example sentences:** *you* = **ਤੂੰ** between close friends and to children, **ਤੁਸੀਂ** everywhere else (service, office, email, doctor, strangers, older family). That ਤੂੰ sits inside a translation, not addressed to the learner.
- **Gender in translations:** Punjabi verbs show the speaker's gender (ਮੈਂ ਜਾਂਦਾ ਹਾਂ / ਜਾਂਦੀ ਹਾਂ). Translations of *I* sentences use the gender of the character in the scene; for a generic *I*, alternate. Never write the slash form in a practice `p`.
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice [inference; native check §11]:
- «ਪੰਜਾਬੀ ਵਿੱਚ ਆਰਟੀਕਲ ਨਹੀਂ ਹੁੰਦੇ, ਇਸ ਲਈ a ਤੇ the ਰਹਿ ਜਾਂਦੇ ਹਨ — ਜਾਂ ਗ਼ਲਤ ਥਾਂ ਲੱਗ ਜਾਂਦੇ ਹਨ। ਤਿੰਨ ਨਿਯਮ ਯਾਦ ਰੱਖੋ, ਬੱਸ।»
- «"ਮੈਂ ਇੱਥੇ 2015 ਤੋਂ ਰਹਿ ਰਿਹਾ ਹਾਂ" ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ Present Continuous ਨਹੀਂ ਹੈ। ਇਹ Present Perfect ਹੈ: I've lived here since 2015।»
- «ਪੰਜਾਬੀ ਦੇ "ਉਹ" ਤੋਂ ਪਤਾ ਨਹੀਂ ਲੱਗਦਾ ਕਿ ਗੱਲ ਆਦਮੀ ਦੀ ਹੈ ਜਾਂ ਔਰਤ ਦੀ। ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਚੁਣਨਾ ਪੈਂਦਾ ਹੈ: he ਜਾਂ she।»

**Typography and mixing English into Punjabi text (one rule, applied everywhere):**
- **Script.** Punjabi in Gurmukhi only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Gurmukhi outside the `pron` field and the respellings quoted from it.
- **Quotes.** Punjabi phrases in straight double quotes "…", nested in single '…'. In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `"ਮੈਂ ਚਾਹ ਪੀਂਦਾ ਹਾਂ" ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ?`, «two ਤੋਂ ਬਾਅਦ ਬਹੁਵਚਨ: books।».
- **Full stop: the danda «।»** (U+0964, shared with Devanagari) at the end of every Punjabi sentence, including one that ends in an English word. Wikipedia says the danda marks the end of a sentence in Gurmukhi and that Western punctuation is also freely used in modern text ([Wikipedia, *Gurmukhi*](https://en.wikipedia.org/wiki/Gurmukhi)); Google's banner above uses the danda; en-pa.md §2.8 uses it. `?` and `!` as in English. No terminal punctuation on buttons, labels, tabs or deck names. A full stop «.» appears only inside English.
- **Dotted letters, always, and always in NFC.** Write ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ wherever standard spelling has them (ਜ਼ਰੂਰੀ, ਫ਼ੋਨ, ਗ਼ਲਤ, ਖ਼ਾਲੀ, ਸ਼ਬਦ); ਲ਼ is not written (en-pa.md §2.8). The six precomposed dotted letters (U+0A33, 0A36, 0A59, 0A5A, 0A5B, 0A5E) are Unicode composition exclusions: NFC turns each into base letter + nukta U+0A3C (checked in Node: `'ਸ਼'.normalize('NFC') === 'ਸ਼'`). Store every string in NFC; `Intl.DisplayNames('pa')` already returns «ਅੰਗਰੇਜ਼ੀ» decomposed. The `pronPattern` rejects the precomposed letters (§6).
- **Vowel letters** are the single code points ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ, never carrier + sign (ਅ + ਾ, ੲ + ਿ, ੳ + ੁ), which look the same and are different text (en-pa.md §2.8).
- **One spelling per word**, the en-pa list: ਵਿੱਚ, ਇੱਕ, ਉੱਤੇ, ਕਿੱਥੇ, ਤੁਹਾਡਾ, ਇਹਨਾਂ / ਉਹਨਾਂ, ਨਾਂ. Add for this course: **ਅੰਗਰੇਜ਼ੀ** (not ਅੰਗ੍ਰੇਜ਼ੀ), **ਆਰਟੀਕਲ**, **ਬਹੁਵਚਨ** / **ਇੱਕਵਚਨ** (closed up), **ਉਚਾਰਨ** (not ਉਚਾਰਣ), **ਗ਼ਲਤ**, **ਖ਼ਾਲੀ**, **ਸੰਬੰਧਕ**.
- **Digits:** Western digits 0–9 everywhere, never Gurmukhi ੦–੯ (§10).
- **Dash.** Spaced em dash ( — ) between clauses; hyphen inside compounds (ਹਲਕੀ-ਫੁਲਕੀ, -ing ਰੂਪ); en dash in ranges (2–4).
- **Do not inflect English words with Punjabi endings** in explanations: no «ਵਰਬਾਂ», «ਆਰਟੀਕਲਾਂ», «ਟੈਂਸਾਂ» — and so no oblique plural after an English term: write «ਦੋ ਆਰਟੀਕਲ ਹਨ», «ਇਸ ਟੈਂਸ ਵਿੱਚ», and rephrase rather than write «ਇਹਨਾਂ ਟੈਂਸਾਂ ਵਿੱਚ» [inference; the standing-rule regex relies on the bare form, §7].
- **Alternatives:** ` / ` with spaces, as in ko-en.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]:
  - Punjabi grammar terms, as written on Punjabi Wikipedia's grammar page: **ਨਾਂਵ**, **ਪੜਨਾਂਵ**, **ਕਿਰਿਆ**, **ਵਿਸ਼ੇਸ਼ਣ**, **ਸਬੰਧਕ** (postposition: «ਸਬੰਧਕ ਨਾਂਵ ਤੋਂ ਮਗਰੋਂ ਆਉਂਦੇ ਹਨ»), **ਵਚਨ**, **ਲਿੰਗ**, **ਕਾਰਕ**, **ਵਾਕ**, **ਸਵਰ**, **ਵਿਅੰਜਨ**, ਵਰਤਮਾਨ / ਭੂਤ / ਭਵਿੱਖ, and the word order «ਕਰਤਾ-ਕਰਮ-ਕਿਰਿਆ» with the term **ਸ਼ਬਦ-ਤਰਤੀਬ** ([pa.wikipedia, ਪੰਜਾਬੀ ਵਿਆਕਰਨ](https://pa.wikipedia.org/wiki/ਪੰਜਾਬੀ_ਵਿਆਕਰਨ)). The page abbreviates number as «ਇੱਕ.» / «ਬਹੁ.» in tables.
  - Wikibooks gives **ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ** for personal pronouns ([Wikibooks, *Punjabi/Grammar/Pronoun*](https://en.wikibooks.org/wiki/Punjabi/Grammar/Pronoun)).
  - The PSEB class 10 English syllabus names its grammar topics in English: determiners, prepositions, modals, voice, reported speech, tenses ([Careers360, PSEB 10th syllabus](https://school.careers360.com/boards/pseb/pseb-10th-syllabus)). So learners met the English topic names at school.
  - **No Punjabi-medium explainer of English grammar could be opened** (two searches returned only English and Hindi pages). The Punjabi names for *article*, *countable*, *helping verb* and the tense names below are therefore [inference], modelled on the Hindi-medium convention in hi.md §3 (terms kept in English, general words in the native language) and listed for a native check (§11).
- **Tense names stay in English**: *Simple Present* is primary, glossed once as «Simple Present (ਜਿਸ ਨੂੰ Present Indefinite ਵੀ ਕਹਿੰਦੇ ਹਨ)», because Indian school grammar says *Present Indefinite* and every other course in this app says *Simple Present*. The same for *Past Indefinite* and *Future Indefinite* at first use.
- **One term per concept.** The standing-rule regex depends on **ਆਰਟੀਕਲ**, **ਬਹੁਵਚਨ** and **ਗਿਣਨਯੋਗ / ਨਾ-ਗਿਣਨਯੋਗ** (§7). Do not write «ਬਹੁ.», «ਪਲੂਰਲ» or «ਗਿਣੀ ਜਾ ਸਕਣ ਵਾਲੀ» in a `why` that is meant to count.

| English term | Punjabi term (use this) | Note |
|---|---|---|
| article | **ਆਰਟੀਕਲ** | Standing-rule keyword. The regex also accepts ਆਰਟਿਕਲ, but write ਆਰਟੀਕਲ [inference] |
| indefinite / definite article | ਅਨਿਸ਼ਚਿਤ ਆਰਟੀਕਲ (a / an) / ਨਿਸ਼ਚਿਤ ਆਰਟੀਕਲ (the) | In `why` prefer «ਆਰਟੀਕਲ a», «ਆਰਟੀਕਲ the» |
| zero article | ਆਰਟੀਕਲ ਨਹੀਂ | «ਇੱਥੇ ਕੋਈ ਆਰਟੀਕਲ ਨਹੀਂ ਲੱਗਦਾ» |
| noun | ਨਾਂਵ | |
| countable / uncountable noun | **ਗਿਣਨਯੋਗ / ਨਾ-ਗਿਣਨਯੋਗ** ਨਾਂਵ | Standing-rule keyword (ਗਿਣਨਯੋਗ also matches inside ਨਾ-ਗਿਣਨਯੋਗ). Gloss once: «ਗਿਣਨਯੋਗ (ਜਿਸ ਨੂੰ ਗਿਣ ਸਕੀਏ)» [inference; native check] |
| singular / plural | ਇੱਕਵਚਨ / **ਬਹੁਵਚਨ** | Standing-rule keyword; the hyphenated ਬਹੁ-ਵਚਨ also matches. Punjabi has ਵਚਨ too, so the idea is familiar |
| gender (Punjabi) | ਲਿੰਗ (ਪੁਲਿੰਗ / ਇਸਤਰੀ ਲਿੰਗ) | Contrast only: «ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਚੀਜ਼ਾਂ ਦਾ ਲਿੰਗ ਨਹੀਂ ਹੁੰਦਾ: it» |
| Punjabi postposition (ਨੂੰ, ਤੋਂ, ਵਿੱਚ, ਤੇ, ਨਾਲ) | ਸੰਬੰਧਕ | Contrast only: «ਪੰਜਾਬੀ ਵਿੱਚ ਸੰਬੰਧਕ ਪਿੱਛੋਂ ਆਉਂਦਾ ਹੈ (ਘਰ ਵਿੱਚ), ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ preposition ਪਹਿਲਾਂ (in the house)» |
| preposition | preposition (ਪ੍ਰੈਪੋਜ਼ੀਸ਼ਨ once) | Explain once with the ਸੰਬੰਧਕ contrast |
| pronoun / personal pronoun | ਪੜਨਾਂਵ / ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ | |
| subject / object | ਕਰਤਾ (subject) / ਕਰਮ (object) | Give both once; school English uses Subject / Object |
| possessive (my, his) | ਮਾਲਕੀ ਦੱਸਣ ਵਾਲੇ ਸ਼ਬਦ (my, his, her) | Key for §4.6: *his / her* follow the owner, not the thing owned |
| possessive 's | 's (ਸੰਬੰਧ: ਦਾ / ਦੇ / ਦੀ) | «Simran's phone = ਸਿਮਰਨ ਦਾ ਫ਼ੋਨ» |
| verb | ਕਿਰਿਆ | Also «verb» in English inside sentences («ਇਸ verb ਨਾਲ») |
| be | **be (am, is, are)**; «ਹਾਂ / ਹੈ / ਹਨ ਵਾਲੀ ਕਿਰਿਆ» | Lesson `be` |
| auxiliary verb | ਸਹਾਇਕ ਕਿਰਿਆ (helping verb) | Gloss once with the English name |
| modal verb | ਮੋਡਲ (can, should, must) | «ਮੋਡਲ ਤੋਂ ਬਾਅਦ V1» |
| third-person singular -s | he / she / it ਵਾਲਾ -s | Full form once: «ਅਨਯ ਪੁਰਖ ਇੱਕਵਚਨ (he, she, it) ਨਾਲ verb ਵਿੱਚ -s» |
| base form / past / past participle | V1 / V2 / V3 | Indian school convention (hi.md §3); also «ਪਹਿਲੀ / ਦੂਜੀ / ਤੀਜੀ ਫ਼ਾਰਮ» once |
| regular / irregular verb | ਨਿਯਮਿਤ / ਅਨਿਯਮਿਤ ਕਿਰਿਆ | |
| -ing form | -ing ਰੂਪ | |
| tense | ਟੈਂਸ (ਕਾਲ) | Gloss once; write «ਟੈਂਸ» afterwards |
| present simple | **Simple Present** (Present Indefinite) | |
| present continuous | Present Continuous | Punjabi «ਰਿਹਾ ਹੈ / ਰਹੀ ਹੈ» maps onto it — and too far (§4.2) |
| past simple / past continuous | Simple Past (Past Indefinite) / Past Continuous | |
| future | will / be going to | |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | Key lessons `perfect`, `perfect-2`, `stative-since` |
| stative verb | ਹਾਲਤ ਦੱਸਣ ਵਾਲੀ ਕਿਰਿਆ (stative verb) | know, want, have (owning), understand, like, need |
| passive / active | Passive Voice / Active Voice | School English says Voice |
| conditional | If ਵਾਲੇ ਵਾਕ (conditional) | |
| relative clause | who / which / that ਵਾਲਾ ਉਪਵਾਕ | |
| reported speech | Indirect Speech (Narration) | |
| infinitive / gerund | to + V1 (infinitive) / -ing (gerund) | |
| conjunction | ਯੋਜਕ (and, but, because) | |
| adjective / adverb | ਵਿਸ਼ੇਸ਼ਣ / ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ | |
| comparative / superlative | comparative / superlative (ਤੁਲਨਾ) | |
| question word | wh-ਸ਼ਬਦ (what, where, why) | |
| yes/no question / wh-question | ਹਾਂ-ਨਾਂਹ ਵਾਲਾ ਸਵਾਲ / wh-ਸਵਾਲ | |
| question tag | question tag (…, isn't it?) | |
| negative sentence | ਨਾਂਹ-ਵਾਚਕ ਵਾਕ | |
| word order | ਸ਼ਬਦ-ਤਰਤੀਬ | «ਪੰਜਾਬੀ: ਕਰਤਾ-ਕਰਮ-ਕਿਰਿਆ; ਅੰਗਰੇਜ਼ੀ: ਕਰਤਾ-ਕਿਰਿਆ-ਕਰਮ» |
| phrasal verb | ਫ਼ਰੇਜ਼ਲ ਵਰਬ | |
| idiom | ਮੁਹਾਵਰਾ | |
| Indian English | ਇੰਡੀਅਨ ਇੰਗਲਿਸ਼ | Lesson `indian-english` |
| pronunciation | ਉਚਾਰਨ | |
| pronunciation aid (respelling) | ਉਚਾਰਨ (ਗੁਰਮੁਖੀ ਵਿੱਚ) | Toggle «ਉਚਾਰਨ ਦਿਖਾਓ» |
| stress / stress mark | ਜ਼ੋਰ / ਜ਼ੋਰ ਦਾ ਨਿਸ਼ਾਨ (ˈ) | |
| vowel / consonant | ਸਵਰ / ਵਿਅੰਜਨ | |
| vowel sign | ਲਗ (ਲਗਾਂ) | ਸਿਹਾਰੀ ਿ, ਬਿਹਾਰੀ ੀ, ਔਂਕੜ ੁ, ਦੁਲੈਂਕੜ ੂ, ਲਾਂ ੇ, ਦੁਲਾਵਾਂ ੈ, ਹੋੜਾ ੋ, ਕਨੌੜਾ ੌ, ਕੰਨਾ ਾ |
| dot below (nukta) | ਪੈਰ-ਬਿੰਦੀ | «ਪੈਰ-ਬਿੰਦੀ ਵਾਲਾ ਅੱਖਰ = ਉਹ ਆਵਾਜ਼ ਜੋ ਪੰਜਾਬੀ ਵਿੱਚ ਨਹੀਂ» (§6) |
| halant | ਹਲੰਤ (੍) | «ਹਲੰਤ = ਇੱਥੇ ਕੋਈ ਸਵਰ ਨਹੀਂ; ਅਗਲੇ ਅੱਖਰ ਨਾਲ ਜੋੜ ਕੇ ਬੋਲੋ» (§6) |
| tippi / bindi | ਟਿੱਪੀ / ਬਿੰਦੀ | In the aid = n, m or ng before its own stop |
| tone | ਸੁਰ | «ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਸ਼ਬਦ ਦੀ ਸੁਰ ਅਰਥ ਨਹੀਂ ਬਦਲਦੀ» (§4.13) |
| aspirated (puff of air) | ਹਵਾ ਵਾਲੀ ਆਵਾਜ਼ (ਖ, ਠ, ਫ ਵਾਂਗ) | Used in `pron` for English p, t, k |
| schwa / weak form | ਹਲਕਾ "ਅ" (schwa) / ਕਮਜ਼ੋਰ ਰੂਪ | |
| linking | ਜੋੜ ਕੇ ਬੋਲਣਾ | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; **the ranking is this profile's inference**, because no fetched source counts errors by type for Punjabi speakers in India. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Punjabi) and every example with no named source is [inference] from the author's knowledge of Punjabi.**

**Main fetched evidence:**
- [Akbar, Atta & Awan 2023](https://humapub.com/admin/alljournals/gssr/papers/ujMSH2ak4E.pdf), *Global Social Sciences Review* VIII(II), 443–454: written paragraphs ("My School", "My Aim in Life") by **20 secondary-school girls in Sambrial, Sialkot (Pakistani Punjab)** after about 11 years of school English; the paper describes the learners' languages as Urdu and Punjabi, "both of which lack articles". Per-learner counts by category; articles are "the most common error" (10 to 37 article errors per learner), prepositions 5 to 24, subject omission 7 to 25. **Pakistani, Shahmukhi-literate, Urdu-schooled learners**: the L1 contrast carries over to Indian Punjab, the schooling does not.
- [Habib & Khan 2019](https://ccsenet.org/journal/index.php/ijel/article/view/0/40094), *International Journal of English Linguistics* 9(4): English loanwords in Punjabi (recordings of focus groups, interviews and video clips; **abstract only**, no sample size on the page). Punjabi allows no true consonant clusters at the start of a syllable, so speakers "add another vowel node and resyllabify"; schwa is "the default epenthetic vowel", and /e/ is sometimes put before the cluster.
- [Fatima, Saleem & Bashir 2023](https://ojs.sjesr.org.pk/index.php/ojs/article/download/1016/433), *Sir Syed Journal of Education & Social Research* 6(4), 36–46: read-aloud recordings of Pashto- and Punjabi-background postgraduates in Lahore (abstract and conclusion read; sample size not found in the extracted text). Punjabi speakers "struggle more with aspirated sounds, notably the /t/".
- [Wikipedia, *Help:IPA/Punjabi*](https://en.wikipedia.org/wiki/Help:IPA/Punjabi), [*Punjabi language*](https://en.wikipedia.org/wiki/Punjabi_language), [*Punjabi grammar*](https://en.wikipedia.org/wiki/Punjabi_grammar), [*Gurmukhi*](https://en.wikipedia.org/wiki/Gurmukhi) and [*Indian English*](https://en.wikipedia.org/wiki/Indian_English) [curriculum convention: reference descriptions, not studies].
- [TalkDrill, mistakes of Punjabi, Hindi and Gujarati speakers in CELPIP](https://www.talkdrill.com/blog/exams/celpip/mistakes-punjabi-hindi-gujarati-speakers/) [practitioner opinion]: twelve habits, each tagged by language; no data.
- Indian English research already used in `docs/profiles/hi.md` §4 (Khan 2021, 10 Hindi-L1 professionals; Demszky et al., 22 features annotated in ICE-India; Van Rooy 2014 and Schubert 2002 on progressives with stative verbs, abstracts only; Sharma 2005 on articles, via a summary). **Not reopened here** except the Demszky abstract page; cited as "via hi.md". They describe Indian English across many L1s, not Punjabi speakers.
- [Sethi 1980](https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/vowel-system-in-educated-panjabispeakers-english/49957EA43F5DE08C3CA412BB287FB7C8), *JIPA* 10, "The vowel system in educated Panjabi-speakers' English": the one study aimed exactly at this population; **only its opening lines could be read** (paywall), so it supports nothing below.

1. **Articles: omission and overuse.**
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `I went to bank. ✗ → I went to the bank. ✓` (TalkDrill) / `the Canada ✗ → Canada ✓` (TalkDrill) / `She has a business experience. ✗ → She has business experience. ✓` (Demszky et al., via hi.md)
   - *Why:* Punjabi has no articles. ਇੱਕ ("one") sometimes does the work of *a* (ਇੱਕ ਮੁੰਡਾ ਆਇਆ), and ਇਹ / ਉਹ ("this / that") the work of *the*, but both are optional; definiteness is left to context and word order.
   - *Evidence:* [research-backed, Pakistani Punjab] Akbar et al. 2023: articles the most common error category, 10–37 per learner in two short paragraphs. [practitioner opinion] TalkDrill: "missing or extra articles", all three languages. [research-backed, Indian English, via hi.md] ARTICLE OMISSION and EXTRANEOUS ARTICLE are annotated ICE-India features; zero articles persist in near-native speakers (Sharma 2005a, via a summary).
   - **Content consequence:** both directions: *a* for one countable thing, *the* for a known thing, **and** no article for general uncountables, abstract nouns and most country names. Treat *one* for *a* (`I have one question`) as a third trap. Never gate on articles.
2. **Continuous with states and durations; *since / for / from*.**
   - *Examples:* `I am living in Ludhiana from two years. ✗ → I've lived in Ludhiana for two years. ✓` / `I am having two kids. ✗ → I have two kids. ✓` (TalkDrill) / `I am not understanding. ✗ → I don't understand. ✓` (TalkDrill) / `It is raining from two days. ✗ → It's been raining for two days. ✓`
   - *Why:* Punjabi says «ਮੈਂ ਦੋ ਸਾਲਾਂ ਤੋਂ ਲੁਧਿਆਣੇ ਰਹਿ ਰਿਹਾ ਹਾਂ» with the continuous (ਰਿਹਾ ਹਾਂ) and **ਤੋਂ**, which is one word for *from*, *since* and *for* (duration). Many states that English keeps simple are continuous or dative in Punjabi (ਮੈਨੂੰ ਸਮਝ ਆ ਰਹੀ ਹੈ).
   - *Evidence:* [practitioner opinion] TalkDrill habit 10, all three languages. [research-backed, Indian English, abstracts only, via hi.md] Van Rooy 2014; Schubert 2002; ICE-India feature STATIVE PROGRESSIVE. Nothing Punjabi-specific was found.
   - **Content consequence:** the `stative-since` lesson (§8), reweights of `continuous`, `perfect`, `perfect-2`, `tense`.
3. **Third-person -s and the auxiliary.**
   - *Examples:* `She work in a bank. ✗ → She works in a bank. ✓` / `He don't know. ✗ → He doesn't know. ✓` / `Does she works? ✗ → Does she work? ✓`
   - *Why:* Punjabi verbs agree with gender and number (ਕਰਦਾ ਹੈ / ਕਰਦੀ ਹੈ / ਕਰਦੇ ਹਨ), so agreement itself is familiar; the English mark is one small sound on one person only.
   - *Evidence:* [research-backed, Pakistan, mixed L1s; search summary only] a grade-9 study of 100 students (five L1 groups including Punjabi) found tense, spelling and subject-verb agreement the weakest areas (*3L* journal, UKM; the page did not load, §11). Khan 2021 calls third-person -s the most common error of Hindi speakers (via hi.md).
4. **Plurals and countability.**
   - *Examples:* `two friend ✗ → two friends ✓` / `one of my friend ✗ → one of my friends ✓` / `many advices ✗ → a lot of advice ✓` / `furnitures, equipments ✗`
   - *Why:* many Punjabi masculine nouns keep the same form after a number (ਦੋ ਦੋਸਤ, ਦੋ ਘਰ, ਤਿੰਨ ਦਿਨ): Wikipedia's noun table shows ਘਰ identical in the direct singular and plural. Others do change (ਮੁੰਡਾ → ਮੁੰਡੇ, ਕੁੜੀ → ਕੁੜੀਆਂ), so the idea of a plural is familiar; the English habit of marking *every* count noun is not. ਸਲਾਹ, ਸਮਾਨ, ਜਾਣਕਾਰੀ are countable in Punjabi usage (ਸਲਾਹਾਂ).
   - *Evidence:* [curriculum convention] Wikipedia, *Indian English*: *evidence, equipment, training* are often count nouns. [research-backed, via hi.md] Khan 2021 (*peoples, childrens*), Demszky et al. (*all the musics*).
5. **Word order and questions.**
   - *Examples:* `I tea drink. ✗ → I drink tea. ✓` (beginners) / `You are going where? ✗`, `Where you are going? ✗ → Where are you going? ✓` / `You like tea? ✗ → Do you like tea? ✓` / `I don't know where is he. ✗ → I don't know where he is. ✓` / `You are coming, isn't it? ✗ → You're coming, aren't you? ✓`
   - *Why:* Punjabi is verb-final: "Punjabi is an SOV language" (Wikipedia, *Punjabi grammar*). Yes/no questions add **ਕੀ** at the front or only change the intonation (ਕੀ ਤੁਸੀਂ ਚਾਹ ਪੀਂਦੇ ਹੋ?); the question word stays where the answer would be (ਤੁਸੀਂ ਕਿੱਥੇ ਜਾ ਰਹੇ ਹੋ?); nothing inverts and there is no *do*. The tag is one fixed word, «ਹੈ ਨਾ?» / «ਨਾ?».
   - *Evidence:* [research-backed, Indian English, via hi.md] ICE-India features LACK OF INVERSION IN WH-QUESTIONS, INVERSION IN EMBEDDED CLAUSES, INVARIANT TAG. [curriculum convention] Wikipedia, *Indian English*, lists *na* "(North India): 'isn't it?'".
6. **he / she / it, and his / her.**
   - *Examples:* `My mother is a teacher. He works in a school. ✗ → She works… ✓` / `Amandeep called. He is coming. — (Amandeep is a woman) ✗` / `My brother and her wife ✗ → my brother and his wife ✓` / `I bought a phone. He is very good. ✗ → It is very good. ✓`
   - *Why:* "Pronouns do not distinguish gender" (Wikipedia); Punjabi "does not have a specific pronoun for the third person" and uses the demonstrative **ਉਹ** for "he, she, they, both singular and plural" (Wikibooks). Gender shows on the verb instead (ਉਹ ਆਇਆ / ਉਹ ਆਈ). The possessive agrees with the **thing owned**, not the owner: ਉਸਦੀ ਪਤਨੀ is "his wife" with a feminine ending because ਪਤਨੀ is feminine, which pulls learners to *her wife*. Many Punjabi given names are used for both men and women (Amandeep, Harpreet, Gurpreet), so the name gives no cue [inference].
   - *Evidence:* [curriculum convention] the two reference descriptions above; no learner study was found. Akbar et al. count "noun / pronoun" errors (up to 59 for one learner) without separating he / she.
   - **Content consequence:** not a lesson of its own (see §8, "Considered"); a block in `be`, a block in `object-have` (*his / her* by owner), a secondary `why` wording (§7), and deck 2 cards with *he* and *she* in pairs.
7. **Prepositions (Punjabi has postpositions).**
   - *Examples:* `I am going to home. ✗ → I'm going home. ✓` / `at evening ✗ → in the evening ✓` / `on next Monday ✗ → next Monday ✓` / `married with ✗ → married to ✓` / `discuss about ✗ → discuss ✓` / `I reached to Delhi. ✗ → I reached Delhi. ✓`
   - *Why:* Punjabi "has postpositions, rather than prepositions" (Wikipedia): ਘਰ ਵਿੱਚ, ਮੇਜ਼ ਤੇ, ਸੋਮਵਾਰ ਨੂੰ, ਸ਼ਾਮ ਨੂੰ, ਪੰਜ ਵਜੇ. ਨੂੰ covers *to*, *on* (a day), *in* (the evening) and the object marker; ਤੋਂ covers *from*, *since*, *than* and *by*; ਨਾਲ is *with* (ਉਸ ਨਾਲ ਵਿਆਹ → *married with*).
   - *Evidence:* [research-backed, Pakistani Punjab] Akbar et al.: 5–24 preposition errors per learner.
8. **Dropped subjects and dummy *it / there*.**
   - *Examples:* `Is raining. ✗ → It's raining. ✓` / `Went to market yesterday. ✗ → I went to the market yesterday. ✓` / `Near my house is a park. ✗ → There's a park near my house. ✓`
   - *Why:* Punjabi leaves out a subject the verb ending already shows (ਕੱਲ੍ਹ ਬਜ਼ਾਰ ਗਿਆ ਸੀ) and has no dummy subject (ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ, ਠੰਢ ਹੈ).
   - *Evidence:* [research-backed, Pakistani Punjab] Akbar et al.: subject omission 7–25 per learner — a category hi.md does not rank at all. [research-backed, via hi.md] ICE-India NON-INITIAL EXISTENTIAL (`every year inflation is there`).
9. **Experiencer sentences (ਮੈਨੂੰ…) and *have*.**
   - *Examples:* `To me hunger is. / I am feeling hungry. → I'm hungry. ✓` / `Me cold is feeling. ✗ → I'm cold. ✓` / `Near me is a car. ✗ → I have a car. ✓` / `He is having a car. ✗ → He has a car. ✓`
   - *Why:* Punjabi puts the experiencer in ਮੈਨੂੰ (ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ, ਮੈਨੂੰ ਚਾਹ ਪਸੰਦ ਹੈ, ਮੈਨੂੰ ਪਤਾ ਹੈ) and owning in ਮੇਰੇ ਕੋਲ … ਹੈ; English makes the person the subject (en-pa.md §3 "ਮੈਨੂੰ-construction") [inference for the learner errors].
10. **Past and perfect.** `I didn't went. ✗ → I didn't go. ✓` / `I have seen him yesterday. ✗ → I saw him yesterday. ✓` / `I was worked there. ✗ → I worked there. ✓`. *Why:* ਕੀਤਾ ਹੈ looks like the Present Perfect but is used with finished times; ਸੀ is not *was* in every past sentence (ਮੈਂ ਕੰਮ ਕੀਤਾ ਸੀ → I worked / I had worked) [inference; Khan 2021 via hi.md for the Hindi parallel].
11. **Indian English usages** that are fine in India and unclear abroad (*prepone*, *out of station*, *good name*, *do the needful*, *passed out*, *cousin brother*), plus calques from Punjabi (§8 `indian-english`). [practitioner opinion] TalkDrill habit 11: *prepone the meeting → move the meeting up*; *do the needful → could you please…*. This matters more for this audience than for most: many are preparing for life in Canada, the UK or Australia (§5).
12. **Pronunciation: consonants.**
    - **v / w.** One letter ਵ; "[w] is an allophone of [ʋ]" after a consonant, elsewhere [ʋ], which "may be realized as [v]" (Help:IPA/Punjabi). *wery* for *very*, *vest* for *west* (TalkDrill, all three languages) [curriculum convention + practitioner opinion].
    - **th.** Dental stops "stand in for English θ and ð" (Help:IPA/Punjabi): *tree* for *three*, *dey* for *they*. In northern Indian English /θ/ is an aspirated dental stop, i.e. ਥ (Wikipedia, *Indian English*).
    - **z → j, f → ph, and /ʒ/.** "Rural dialects" replace /z/ and /ʒ/ with [dʒ] and /f/ with [pʰ]; "urban speech keeps the original sounds" (Help:IPA/Punjabi); /f/ and /z/ are "systematically distinguished in educated speech" (*Punjabi language*). /ʒ/ is "very rare", Gurmukhi "lacks a standard symbol for it", and speakers substitute [dʒ], [z] or [s]; Wikipedia's *Indian English* names Hindi and Punjabi speakers for /z/ in *treasure*. TalkDrill tags *jero* for *zero* as Punjabi and Gujarati.
    - **Clusters.** A schwa inside an onset cluster (ਸਕੂਲ read as *sakool*; *palate* for *plate*; *filam* for *film*) or a vowel before an s-cluster (*iskool*, *isteshan*). [research-backed, abstract] Habib & Khan 2019: schwa is the default inserted vowel, /e/ sometimes before the cluster. [practitioner opinion] TalkDrill: *iskool*, *isteshan*, Punjabi and Hindi, "Punjabi more often". The form *sakool* itself was not found in a source; it follows from Habib & Khan's rule and from the Punjabi spelling ਸਕੂਲ [inference].
    - **Aspiration.** English p, t, k at the start of a stressed syllable have a puff of air; Punjabi ਪ ਟ ਕ do not, and the aspirated set ਫ ਠ ਖ is a different phoneme. [research-backed, Lahore] Fatima et al. 2023: Punjabi speakers had more trouble than Pashto speakers, most with /t/.
    - **Doubling.** Punjabi doubles consonants after a short stressed vowel (ਪੱਕਾ, and in loans ਬੱਸ, ਬੈੱਡ, ਹੈੱਪੀ): "all consonants except six … are regularly geminated" (*Punjabi language*). Carried into English it gives *hap-py*, *sit-ty*, *up-per* with a held consonant [inference for the English effect].
13. **Pronunciation: vowels, stress and tone.**
    - **Short / long.** Punjabi has ten vowels: short, centralised /ɪ ə ʊ/ and long, peripheral /iː eː ɛː aː ɔː oː uː/ (*Punjabi language*). *ship / sheep* and *full / fool* therefore have a home (ਿ / ੀ, ੁ / ੂ) and are **easier than for Korean or Chinese speakers**. The real gaps: /æ/ vs /e/ (*bad / bed*: Punjabi loans write both with ੈ — ਬੈਗ, ਬੈੱਡ [inference]); the diphthong in *name, go* said as a long pure vowel (harmless); short vowels never end a Punjabi word, and "long vowels shorten in closed syllables" (Help:IPA/Punjabi).
    - **Stress and rhythm.** Indian English speakers "usually speak with a syllabic rhythm"; full vowels where English reduces them (Wikipedia, *Indian English*). *HO-tel, DE-velop* (TalkDrill, all three). A 2024 study of lexical stress in Pakistani English with Punjabi-L1 speakers exists (20 per L1) but only its search summary was seen (§11).
    - **Tone carry-over.** Punjabi is tonal: about three quarters of words are level, the rest carry a falling or rising pitch on the stressed syllable, induced by ਘ ਝ ਢ ਧ ਭ, ਹ and consonant + ਹ (*Punjabi language*). Three effects in English [inference unless marked]: (a) pitch jumps that make statements sound like questions or emphasis — TalkDrill tags "statements that rise at the end" as "Punjabi especially" [practitioner opinion]; (b) English *h* inside a word turned into pitch and dropped (*be-ind* for *behind*, *per-aps*), as Punjabi does with medial ਹ; (c) Indian names and Hindi-origin words with bh, dh, gh said as p, t, k + falling pitch (ਭ → *p*). Effect (c) hardly touches English words. No study of tone transfer into English was found (§11).
    - **Spelling pronunciation:** silent letters said, *-ed* as a full syllable (Wikipedia, *Indian English*: "Silent letters may be pronounced").

**What is acceptable and what is an error (policy for writers)** [decision]:
- **Acceptable, never marked ✗, never "corrected" in notes:** retroflex ਟ ਡ for English t d; pure long vowels in *name* and *go*; r said after vowels (American English says it too); *zed*; British spelling; Indian English words in group 1 of `indian-english` (taught as "abroad they say…").
- **Worth the learner's effort (the pron lesson and deck 18 spend their words here):** v / w, th, z and f (for those who merge them), no extra vowel in clusters, one stressed syllable with the rest weak, falling pitch at the end of statements, *he / she*.
- **Errors in every variety (✗):** article and plural errors, *I am knowing*, *didn't went*, *does she works*, *her wife* for a man's wife, *discuss about*, *Myself Aman*.

## 5. Learner starting point

- **Numbers** [curriculum convention]: 31.14 million people reported Punjabi in India's 2011 census; about 670,000 native speakers in Canada (2021), about 291,000 in the UK and 280,867 in the US ([Wikipedia, *Punjabi language*](https://en.wikipedia.org/wiki/Punjabi_language)). Pakistan has far more speakers (88.9 million in the 2023 census), who read Shahmukhi, not Gurmukhi.
- **Why they learn** [curriculum convention, press]: migration and study abroad dominate. About 450,000 people from Punjab and Chandigarh sat IELTS between July 2017 and June 2018 and about 600,000 were expected the next year; 5,000–6,000 coaching centres operated there, about 95% of them unorganised; a typical course lasted two months; demand was spreading to rural Punjab; the top destinations were Canada, Australia and New Zealand ([The Tribune, 23 Feb 2019](https://www.tribuneindia.com/news/archive/business/foreign-dreams-make-ielts-coaching-rs-1-100-cr-industry-733521)). Later press reports of a sharp fall after Canada's 2024 student-visa caps were seen only as search summaries (§11).
- **School English** [curriculum convention]: the PSEB class 10 English syllabus has reading, a main course book, poems, a supplementary reader, vocabulary, grammar (determiners, prepositions, modals, non-finites, sentence types, voice, reported speech, tenses, punctuation), writing and **translation**; no phonetics, pronunciation or speaking section is listed ([Careers360](https://school.careers360.com/boards/pseb/pseb-10th-syllabus)). So the typical learner has ten or more years of grammar-translation English, can read the Latin alphabet, knows rule names (Tense, Voice, Narration) and has had little listening or speaking practice.
- **Profile of the typical user** [inference]: 17–30, finished class 12 in a Punjabi-medium government or low-fee English-medium school, preparing for IELTS / PTE / CELPIP or already abroad on a study or work permit; a second group is parents and grandparents joining family abroad, with little school English. Both groups read Gurmukhi comfortably and have Hindi from film and television.
- **What they already have:** a large stock of English loanwords in daily Punjabi (ਸਕੂਲ, ਟਾਈਮ, ਫ਼ੋਨ, ਟਿਕਟ, ਡਾਕਟਰ, ਬੱਸ; en-pa.md §2.5) — a vocabulary head start and a pronunciation trap, because the Punjabi form (ਸਕੂਲ with a slipped-in vowel, ਟੈਮ for *time*) is the habit to undo [inference].
- **Consequences:** start at true A1 for speaking but do not teach the alphabet's shapes (the `alphabet` lesson is about letter *names*); keep rule names in English; make listening and typed production do the work school did not; put study-abroad scenes (airport, immigration desk, college, landlord, part-time job) into the localised decks (§9).
- **Not found:** EF EPI or IELTS band data by first language (the IELTS statistics page offers a spreadsheet the tool could not open; a search summary quoted a mean Academic band of 5.8 for Punjabi-L1 test takers, unverified, §11).

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.**
  - [curriculum convention] School English in Punjab has no phonetics: the PSEB class 10 syllabus lists reading, grammar, writing and translation and no pronunciation or transcription component ([Careers360](https://school.careers360.com/boards/pseb/pseb-10th-syllabus)). CBSE does not teach it either (The Week 2016, via hi.md §6). Class 11–12 and college syllabuses were not checked (§11).
  - [curriculum convention, weak] Punjabi University's English–Punjabi Dictionary is the standard bilingual dictionary; its 2018 app has "more than 37,000 English words", each "with its pronunciation" ([The Tribune, 1 Nov 2018](https://www.tribuneindia.com/news/archive/chandigarh/patiala-varsity-releases-app-on-english-punjabi-dictionary-677031)); the article does not say in which notation. A bookseller's description (seen only as a search summary; the page returned HTTP 429 twice) speaks of Gurmukhi and a phonetic transcription based on Received Pronunciation. **Unresolved** (§11).
  - [inference] Punjabi speakers read English respelled in Gurmukhi every day: shop signs, film titles, newspaper loanwords (ਸਕੂਲ, ਸਟੇਸ਼ਨ, ਕੰਪਿਊਟਰ, ਟਾਈਮ). The script already has a convention for foreign sounds, the foot dot: "ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼ … used most often for loanwords" ([Wikipedia, *Gurmukhi*](https://en.wikipedia.org/wiki/Gurmukhi)); ਜ਼, ਸ਼ and ਫ਼ are used in English borrowings (*Punjabi language*).
  - So, like Hindi and Indonesian learners and unlike Chinese and Russian ones, **Punjabi speakers know native-script respelling and not IPA**.
- **What everyday Punjabi respelling gets wrong** (ਵੈਰੀ, ਥਿੰਕ, ਦਿਸ, ਜੀਰੋ, ਫੋਨ, ਸਕੂਲ):
  - one letter ਵ for /v/ and /w/ — the merger itself (§4.12);
  - ਥ / ਦ for /θ ð/ — the dental-stop substitution itself;
  - ਜ, ਫ without the dot for /z f/ in careless spelling — the rural z → j and f → ph;
  - **no way to show a cluster**: ordinary Gurmukhi "does not use" the halant (Wikipedia, *Gurmukhi*), so ਸਕੂਲ, ਫ਼ਿਲਮ, ਪਲੇਟ are written exactly as the mispronunciations *sakool, filam, palate* would be;
  - the addak (ਬੱਸ, ਬੈੱਡ) writes in a doubling English does not have;
  - no stress, and full vowels where English reduces them.
  An aid built on those spellings would write the errors into the course.
- **No study compares respelling, IPA and no aid** for Punjabi learners. The recommendation is [inference].

**Recommendation: a Gurmukhi respelling in every `pron` field (profile.json `"pron": "required"`), with the foot dot extended to the English sounds Punjabi lacks, a visible halant in clusters, and ˈ for stress.** Shown by default and hidden with the toggle «ਉਚਾਰਨ ਦਿਖਾਓ».
- **IPA rejected:** learners cannot read it; it would need an IPA-teaching lesson the course does not have; the audience includes older learners with little schooling in English (§5).
- **`none` / `optional` rejected:** every ko-based course carries an aid; an empty field needs untested engine rendering (PIPELINE §3); and the short words where the aid matters most (*think, very, zoo, school*) would be the ones left empty.
- **The cost of not copying zh, and how it is cut.** With IPA, zh's rows (456 deck cards read locally, plus the `{{ex}}` rows) would be copied byte for byte. With a respelling they cannot be — **but the key below is a table from zh's IPA symbols, with deterministic rules**, so every pa row is **derived mechanically from the zh row for the same English string**, exactly as hi-en does (`tools/content/hi/pron_hi.js`, `pron_lookup.json`).
  - Recommended to the lead (not written by this profile): `tools/content/pa/pron_pa.js`, a copy of `pron_hi.js` with the two tables below and three extra rules (N, J and the tippi / bindi choice). A scratch prototype was written to produce and check every respelling in this section (§11); it is about 45 lines.
  - Then `pron_lookup.json` for pa is produced from hi's list of English strings, and writers paste, never transcribe.

**Why the Hindi key cannot simply be transliterated** (five Gurmukhi-specific decisions; all [inference], all in the native-check list):
1. **Clusters need a visible halant.** Devanagari writes a cluster as a conjunct that every reader knows (स्कूल). Modern Gurmukhi has conjuncts only for subjoined ਹ, ਰ, ਵ (and rare ਯ), and the halant is otherwise "not used when writing Punjabi", though it "may appear in Sanskritised text or dictionaries" (Wikipedia, *Gurmukhi*). The aid uses it as a dictionary does: **੍ under a consonant = no vowel after it**. It is unfamiliar in running text, so the `pron` lesson teaches it in its first lines, and it is exactly the place where Punjabi speakers add a vowel.
2. **The tone letters are banned.** ਘ ਝ ਢ ਧ ਭ change the pitch of a Punjabi word and are read as k, ch, ṭ, t, p at the start of a word. /ð/ is therefore **ਦ਼**, never ਧ; /ʒ/ is not ਝ਼ (the Hindi course's झ़). The `pronPattern` rejects all five.
3. **Final -y is ੀ and weak *you* is ਯੂ.** A short ਿ or ੁ at the end of a word is not part of modern Punjabi spelling or speech (Help:IPA/Punjabi: /iː/ and /uː/ are simply shorter at the end of a word); the Hindi course's final ि (ˈव़ेरि) would be read as nothing. Punjabi already writes ਵੈਰੀ, ਕੌਫ਼ੀ, ਸਿਟੀ.
4. **ਔ / ੌ for THOUGHT, ਆਈ and ਆਊ for the diphthongs.** Gurmukhi has no chandra-o; its ਔ **is** /ɔː/ ("o in off", Wikipedia, *Gurmukhi*), and ਐ is /ɛː/, close to /æ/. Punjabi loans already write ਟਾਈਮ, ਲਾਈਟ, ਹਾਊਸ, ਡਾਊਨ.
5. **n, m and ng before their own stop are tippi or bindi** (ਬੈਂਕ, ਇੰਡੀਆ, ਕੰਪਿਊਟਰ), as every Punjabi loanword is written, instead of a half letter. This removes a third of the halants.
The addak is never used (rule 12).

**The key.**

*Vowels.* The vowel letter is used at the start of a word, after another vowel and after ˈ; the sign (ਲਗ) after a consonant.

| Sound (zh IPA) | Letter / sign | Examples (pa `pron`) | Note |
|---|---|---|---|
| FLEECE iː; final and weak i | ਈ / ੀ | see ਸੀ, leave ਲੀਵ਼, very ˈਵ਼ੇਰੀ, me (weak) ਮੀ | **collapse**: stressed = long, unstressed = the short *happy* vowel |
| KIT ɪ | ਇ / ਿ | live ਲਿਵ਼, ship ਸ਼ਿਪ | *ship / sheep* = ਸ਼ਿਪ / ਸ਼ੀਪ |
| DRESS e and FACE eɪ | ਏ / ੇ | bed ਬੇਡ, name ਨੇਮ, today ਟˈਡੇ | **collapse**, see below. Not the usual loan spelling ਬੈੱਡ |
| TRAP æ | ਐ / ੈ | bad ਬੈਡ, apple ˈਐਪਲ | as in ਬੈਂਕ, ਬੈਗ; *bad / bed* = ਬੈਡ / ਬੇਡ |
| STRUT ʌ and schwa ə | ਅ / (no sign) | cup ਕਪ, about ਅˈਬਾਊਟ | **collapse**; stressed = ʌ |
| schwa at the end of a word of 2+ syllables | ਆ / ਾ | banana ਬˈਨੈਨਾ, sofa ˈਸੋਫ਼ਾ, India ˈਇੰਡੀਆ | Punjabi spells English final -a this way (ਕੈਮਰਾ) |
| LOT and PALM ɑː | ਆ / ਾ | hot ਹਾਟ, copy ˈਕਾਪੀ, father ˈਫ਼ਾਦ਼ਰ | American value; matches ਡਾਕਟਰ, ਕਾਲਜ |
| THOUGHT ɔː | ਔ / ੌ | talk ਟੌਕ, dog ਡੌਗ, coffee ˈਕੌਫ਼ੀ | Punjabi ਔ is this sound |
| GOAT oʊ | ਓ / ੋ | go ਗੋ, hotel ਹੋˈਟੇਲ | |
| GOOSE uː; weak u | ਊ / ੂ | food ਫ਼ੂਡ, two ਟੂ, you (weak) ਯੂ | **collapse** of weak u with uː |
| FOOT ʊ | ਉ / ੁ | book ਬੁਕ, good ਗੁਡ | *full / fool* = ਫ਼ੁਲ / ਫ਼ੂਲ |
| PRICE aɪ | ਆਈ / ਾਈ | I ਆਈ, time ਟਾਈਮ | as ਟਾਈਮ |
| MOUTH aʊ | ਆਊ / ਾਊ | house ਹਾਊਸ, now ਨਾਊ | as ਹਾਊਸ |
| CHOICE ɔɪ | ਔਈ / ੌਈ | boy ਬੌਈ, noise ਨੌਈਜ਼ | |
| NURSE ɜːr and lettER ər | ਅਰ / ਰ after a consonant | work ਵਰ੍ਕ, bird ਬਰ੍ਡ, water ˈਵੌਟਰ | **collapse**; stress tells them apart |
| NEAR ɪr, SQUARE er, CURE ʊr | ਇਰ, ਏਰ, ਉਰ / ਿਰ, ੇਰ, ੁਰ | here ਹਿਰ, there ਦ਼ੇਰ, sure ਸ਼ੁਰ | |
| START ɑːr, NORTH ɔːr | ਆਰ, ਔਰ / ਾਰ, ੌਰ | car ਕਾਰ, door ਡੌਰ, four ਫ਼ੌਰ | |

*Consonants.* A dot at the foot (ਪੈਰ-ਬਿੰਦੀ) on ਵ, ਥ, ਦ always means "a sound Punjabi does not have — do not say the plain letter".

| Sound | Write | Examples | Note for the `pron` lesson |
|---|---|---|---|
| p b k g | ਪ ਬ ਕ ਗ | pen ਪੇਨ, bag ਬੈਗ | p, t, k at the start of a stressed syllable have a light puff of air — said in the lesson, **never written as ਫ ਠ ਖ** |
| t d | ਟ ਡ | time ਟਾਈਮ, day ਡੇ | the usual Punjabi spelling of English t, d; tongue tip on the ridge behind the teeth, not curled back |
| f | **ਫ਼** | fan ਫ਼ੈਨ, coffee ˈਕੌਫ਼ੀ | never plain ਫ: «ਉੱਪਰਲੇ ਦੰਦ ਹੇਠਲੇ ਬੁੱਲ੍ਹ ਤੇ, ਬੁੱਲ੍ਹ ਬੰਦ ਨਹੀਂ» |
| v | **ਵ਼** | very ˈਵ਼ੇਰੀ, vine ਵ਼ਾਈਨ, have ਹੈਵ਼ | **extension:** dotted ਵ = teeth on lip, a buzz you can hold |
| w | **ਵ** (no dot) | wine ਵਾਈਨ, work ਵਰ੍ਕ, twenty ˈਟ੍ਵੇਂਟੀ | «ਬੁੱਲ੍ਹ ਗੋਲ, ਦੰਦ ਨਹੀਂ ਛੂੰਹਦੇ». After a consonant it is the subjoined ੍ਵ, which Punjabi already reads as w (ਸ੍ਵੈ) |
| θ | **ਥ਼** | think ਥ਼ਿੰਕ, three ਥ਼੍ਰੀ | **extension:** «ਜੀਭ ਦੀ ਨੋਕ ਦੰਦਾਂ ਵਿਚਕਾਰ, ਹਵਾ ਨਿਕਲਦੀ ਰਹੇ — ਥ ਨਹੀਂ» |
| ð | **ਦ਼** | this ਦ਼ਿਸ, the ਦ਼ | **extension:** the voiced partner of ਥ਼. Never ਧ |
| s z | ਸ **ਜ਼** | bus ਬਸ, is ਇਜ਼, zoo ਜ਼ੂ | never plain ਜ for z: *zoo / Jew* = ਜ਼ੂ / ਜੂ |
| ʃ | **ਸ਼** | she ਸ਼ੀ, station ˈਸ੍ਟੇਸ਼ਨ | |
| ʒ | **ਜ਼** (same as z) | measure ˈਮੇਜ਼ਰ, usually ˈਯੂਜ਼ੂਅਲੀ | **collapse**, see below: Gurmukhi has no letter, and ਝ is a tone letter |
| tʃ dʒ | ਚ ਜ | check ਚੇਕ, job ਜਾਬ | |
| h | ਹ | house ਹਾਊਸ, behind ਬਿˈਹਾਈਂਡ | always a breathy h at the start of a syllable; never a tone (§4.13) |
| m n | ਮ ਨ; **ੰ / ਂ** before their own stop | number ˈਨੰਬਰ, want ਵਾਂਟ, friend ਫ਼੍ਰੇਂਡ; but since ਸਿਨ੍ਸ | rule N |
| ŋ | **ੰ / ਂ** before k, g; **ਙ** elsewhere | think ਥ਼ਿੰਕ, English ˈਇੰਗ੍ਲਿਸ਼, sing ਸਿਙ, singing ˈਸਿਙਿਙ | ਙ = the nose sound of ਕਿੰਗ with no ਗ after it |
| l r | ਲ ਰ | rice ਰਾਈਸ, light ਲਾਈਟ | r before a consonant is ਰ੍: bird ਬਰ੍ਡ |
| j | ਯ; **ਿਊ** for consonant + j + uː | yes ਯੇਸ, cute ਕਿਊਟ, music ˈਮਿਊਜ਼ਿਕ | rule J |

*Derivation rules (apply in this order to the zh IPA of the same English string).*
1. **Words and sentences.** Drop the slashes. Words are separated by one space. zh's ` ‖ ` between two sentences becomes the danda: `। ` (danda, then a space). zh's two slashed groups for alternatives become ` / `. No other punctuation, no digits of either script, no Latin letters, no IPA symbols except ˈ.
2. **Stress: ˈ only in words of two or more syllables**, at the position zh puts it. Drop ˈ from one-syllable words and drop every ˌ (`/ˌfɪfˈtiːn/` → ਫ਼ਿਫ਼੍ˈਟੀਨ). A syllable is a vowel symbol or a syllabic l / n (rule 6). The `pron` lesson says: «ˈ ਤੋਂ ਬਾਅਦ ਵਾਲੇ ਹਿੱਸੇ ਤੇ ਜ਼ੋਰ ਦਿਓ; ਬਾਕੀ ਹਿੱਸੇ ਹਲਕੇ ਤੇ ਛੋਟੇ».
3. **Vowels and consonants** by the tables. A vowel that follows a consonant is written as its sign; a vowel at the start of a word, after another vowel or after ˈ is the vowel letter (idea /aɪˈdiːə/ → ਆਈˈਡੀਆ). Vowel letters are single code points (§2).
4. **Clusters: the halant.** Inside a word, a consonant with no vowel after it takes ੍ (U+0A4D), written after the dot if there is one: school ਸ੍ਕੂਲ, street ਸ੍ਟ੍ਰੀਟ, lived ਲਿਵ਼੍ਡ, asked ਐਸ੍ਕ੍ਟ, film ਫ਼ਿਲ੍ਮ, Excuse ਇਕ੍ˈਸ੍ਕਿਊਜ਼ (the halant stays where ˈ splits the cluster; lead's ruling for hi, 2026-11-17, applied here too). **No halant on a word's last consonant**: Punjabi readers drop the final inherent vowel by habit (dog ਡੌਗ, months ਮਨ੍ਥ਼੍ਸ). Before ਰ and ਵ the halant produces the familiar subjoined forms (tree ਟ੍ਰੀ, twenty ˈਟ੍ਵੇਂਟੀ). **Hand case:** a consonant directly followed by h with no ˈ between (*childhood*, *uphill*) would form the subjoined ੍ਹ, which Punjabi reads as a tone mark; no row has this yet, and the converter must warn.
5. **Schwa.** ə inside a word is the bare consonant (inherent ਅ): about ਅˈਬਾਊਟ, hundred ˈਹੰਡ੍ਰਡ, photography ਫ਼ˈਟਾਗ੍ਰਫ਼ੀ. ə at the end of a word of two or more syllables is ਾ (banana ਬˈਨੈਨਾ, Canada ˈਕੈਨਡਾ); one-syllable weak forms keep the bare letter (the ਦ਼, to ਟ, a ਅ).
6. **Syllabic l and n** (zh PRON-RULES A4) count as a syllable for rule 2. The consonant before them is bare (it carries the inherent vowel). **At the very end of a word** they are the bare ਲ / ਨ: people ˈਪੀਪਲ, seven ˈਸੇਵ਼ਨ, station ˈਸ੍ਟੇਸ਼ਨ, eaten ˈਈਟਨ, table ˈਟੇਬਲ. **Syllabic n before t or d** is a tippi (rule N): isn't ˈਇਜ਼ੰਟ, didn't ˈਡਿਡੰਟ, thousand ˈਥ਼ਾਊਜ਼ੰਡ, important ਇੰˈਪੌਰ੍ਟੰਟ, student ˈਸ੍ਟੂਡੰਟ. Before any other final consonant they take the halant (McDonald's ਮਕ੍ˈਡਾਨਲ੍ਡ੍ਜ਼).
7. **Rule N, nasal + its own stop.** When m, n or ŋ comes straight after a vowel (or is a syllabic n) and is followed by its own stop — **m + p / b, n + t / d / tʃ / dʒ, ŋ + k / g** — write the nasal sign and no letter, even if ˈ stands between them: lamp ਲੈਂਪ, number ˈਨੰਬਰ, want ਵਾਂਟ, friend ਫ਼੍ਰੇਂਡ, change ਚੇਂਜ, lunch ਲੰਚ, think ਥ਼ਿੰਕ, computer ਕੰˈਪਿਊਟਰ, Punjab ਪੰˈਜਾਬ. **Tippi ੰ** after the inherent vowel, ਅ, ਇ / ਿ, ੁ and ੂ; **bindi ਂ** after every other vowel letter or sign (ਾ ੀ ੇ ੈ ੋ ੌ, ਆ ਈ ਉ ਊ ਏ ਐ ਓ ਔ): find ਫ਼ਾਈਂਡ, don't ਡੋਂਟ, bank ਬੈਂਕ. Any other nasal + consonant keeps the letter and the halant: since ਸਿਨ੍ਸ, months ਮਨ੍ਥ਼੍ਸ, learned ਲਰ੍ਨ੍ਡ.
8. **Rule J.** Consonant + j + uː (or weak u) is **ਿਊ**, and consonant + j + ʊ is **ਿਉ**, as Punjabi writes ਮਿਊਜ਼ਿਕ, ਕੰਪਿਊਟਰ, ਨਿਊਜ਼: cute ਕਿਊਟ, few ਫ਼ਿਊ, music ˈਮਿਊਜ਼ਿਕ, W ˈਡਬ੍ਲਿਊ. Before any other vowel, j after a consonant is ੍ਯ (million ˈਮਿਲ੍ਯਨ; rare — check the rendering, §10).
9. **Weak and strong forms** follow zh (PRON-RULES B), mapped by the table:

   | word | weak (default) | strong (alone, contrast, stranded) |
   |---|---|---|
   | a / an / the | ਅ / ਅਨ / ਦ਼ (ਦ਼ੀ before a vowel sound) | — |
   | to | ਟ; ਟੂ before a vowel | ਟੂ |
   | for / from / at / of | ਫ਼ਰ / ਫ਼੍ਰਮ / ਅਟ / ਅਵ਼ | ਫ਼ੌਰ / ਫ਼੍ਰਮ / ਐਟ |
   | and / or / but | ਅੰਡ / ਅਰ / ਬਟ | — |
   | can / could / should / would | ਕਨ / ਕਡ / ਸ਼ਡ / ਵਡ | — |
   | do / does / did / have / has / had (auxiliary) | ਡ / ਡਜ਼ / ਡਿਡ / ਹਵ਼ / ਹਜ਼ / ਹਡ | ਡੂ, ਹੈਵ਼ … as main verbs |
   | have to / has to | ਹੈਫ਼ ਟ / ਹੈਸ ਟ | |
   | you / your / you're | ਯੂ / ਯੁਰ / ਯੁਰ | ਯੂ |
   | me / he / she / we | ਮੀ / ਹੀ / ਸ਼ੀ / ਵੀ | the same letters |
   | that (relative) / that (demonstrative) | ਦ਼ਟ | ਦ਼ੈਟ |
   | there | ਦ਼ੇਰ | ਦ਼ੇਰ |

   Because of collapses 1 and 2 below, *you*, *me / he / she / we* and *to* before a vowel look the same weak and strong, and *from* is the same both ways (as in hi). The audio carries the difference.
10. **Contractions** as zh: I'm ਆਈਮ, it's ਇਟ੍ਸ, I've ਆਈਵ਼, I'll ਆਈਲ, don't ਡੋਂਟ, can't ਕੈਂਟ, that's ਦ਼ੈਟ੍ਸ, there's ਦ਼ੇਰ੍ਜ਼, what's ਵਟ੍ਸ, isn't ˈਇਜ਼ੰਟ.
11. **Numbers as words; abbreviations letter by letter**, each letter a separate word: A ਏ, B ਬੀ, C ਸੀ, D ਡੀ, E ਈ, F ਏਫ਼, G ਜੀ, H ਏਚ, I ਆਈ, J ਜੇ, K ਕੇ, L ਏਲ, M ਏਮ, N ਏਨ, O ਓ, P ਪੀ, Q ਕਿਊ, R ਆਰ, S ਏਸ, T ਟੀ, U ਯੂ, V ਵ਼ੀ, W ˈਡਬ੍ਲਿਊ, X ਏਕ੍ਸ, Y ਵਾਈ, Z ਜ਼ੀ.
12. **Never in the aid:** the addak ੱ (English has no doubled consonants: happy ˈਹੈਪੀ, not ਹੈੱਪੀ); the tone letters ਘ ਝ ਢ ਧ ਭ; ਖ ਛ ਠ ਤ ਣ ੜ ਞ and every letter not in the two tables; plain ਥ, ਦ, ਫ without the dot; a dot on any letter other than ਥ ਦ ਫ ਵ ਜ ਸ; the adak bindi ਁ and visarga; inserted vowels (never ਇਸਕੂਲ, never ਸਕੂਲ without the halant).
13. **Names** as the en-US voice says them (zh PRON-RULES D): listen once and transcribe what it says (Simran /ˈsɪmrən/ → ˈਸਿਮ੍ਰਨ, Punjab /pʌnˈdʒɑːb/ → ਪੰˈਜਾਬ). The `pron` lesson tells learners that an American says their names this way.
14. **Codas in full**, voiced finals voiced: -s as ਸ / ਜ਼ / ਇਜ਼ (cats ਕੈਟ੍ਸ, dogs ਡੌਗ੍ਜ਼, buses ˈਬਸਿਜ਼), -ed as ਟ / ਡ / ਇਡ (watched ਵਾਚ੍ਟ, played ਪ੍ਲੇਡ, wanted ˈਵਾਂਟਿਡ).
15. **Unicode.** NFC only; dotted letters are base + U+0A3C; order is consonant, dot, then halant or vowel sign, then tippi / bindi. Never the precomposed U+0A33 / 0A36 / 0A59–0A5E, never ZWJ / ZWNJ, never carrier + sign. The `pronPattern` rejects all of these.

*Known collapses (one spelling for two sounds), and why they are acceptable.*
1. **FLEECE iː / unstressed i → ੀ**, **GOOSE uː / weak u → ੂ**: forced by Punjabi spelling (decision 3). ˈ separates them inside longer words; one-syllable weak forms (*me, you*) rely on the audio.
2. **DRESS e / FACE eɪ → ੇ** (bed ਬੇਡ, name ਨੇਮ; *get* and *gate* both ਗੇਟ), as in hi. Punjabi ੇ is a long [eː], close to FACE. **Punjabi-specific cost:** everyday loans write DRESS with ੈ (ਬੈੱਡ, ਪੈੱਨ, ਚੈੱਕ), so ਬੇਡ and ਪੇਨ look unfamiliar. The alternative (DRESS and TRAP both ੈ) would merge *bad / bed*, a shared deck-18 pair, so it was rejected. The `pron` lesson says: «ਇਸ ਕੋਰਸ ਵਿੱਚ ੈ = bad ਵਾਲੀ ਖੁੱਲ੍ਹੀ ਆਵਾਜ਼; ੇ = bed ਤੇ name — bed ਵਿੱਚ ਛੋਟੀ, name ਵਿੱਚ ਲੰਮੀ। ਆਡੀਓ ਸੁਣੋ।» [native check: is this acceptable to readers?]
3. **STRUT ʌ / schwa ə → ਅ**, **NURSE ɜːr / lettER ər → ਅਰ**: the stress mark separates them.
4. **z / ʒ → ਜ਼.** Gurmukhi "lacks a standard symbol" for /ʒ/ and Punjabi speakers already say /z/ for it (§4.12); ਝ਼ would put a tone letter in the aid and ਯ਼ would be an invented letter with no anchor. /ʒ/ occurs in one zh row (*usually*) and a handful of course words (*television, measure, decision, Asia*). The `pron` lesson gives one line: «usually, television ਵਿੱਚ ਜ਼ ਨੂੰ ਸ਼ ਵਾਂਗ ਨਰਮ ਬੋਲੋ, ਪਰ ਗੂੰਜ ਨਾਲ». If a native reviewer wants a separate mark, the converter change is one table cell.
5. **Final ə / ɑː → ਾ**, and **medial schwa in open syllables** (family ˈਫ਼ੈਮਲੀ, Canada ˈਕੈਨਡਾ): readers may drop it (*fam'ly*); English speakers reduce it too. As hi.
- **Checked by script:** the 13 shared deck-18 pairs (rice / lice, right / light, fan / pan, coffee / copy, think / sink, three / tree, very / berry, very / wary, vest / west, vote / boat, walk / work, leave / live, bad / bed) derive to **distinct** respellings.

**`pron` lesson additions** (prose, not in `pron`; they change no English string):
1. How to read the aid, first: **ਪੈਰ-ਬਿੰਦੀ** on ਵ ਥ ਦ = a sound Punjabi lacks; **ਹਲੰਤ ੍** = no vowel, glide straight into the next letter; **ˈ** = ਜ਼ੋਰ; ਾ in *hot, job, stop* is the American vowel; ੈ / ੇ as above.
2. **ਵ਼ vs ਵ** (very, vine, vest vs wine, west, work).
3. **ਥ਼ / ਦ਼** (think, three, this, the): tongue between the teeth, air keeps flowing; not ਥ, ਦ.
4. **ਫ਼, ਜ਼** (coffee, fan, zero, zoo, easy): not ਫ, ਜ.
5. **No extra vowel in clusters** — the Punjabi-specific item: «ਸ੍ਕੂਲ — ਸਕੂਲ ਨਹੀਂ, ਇਸਕੂਲ ਵੀ ਨਹੀਂ», with *school, station, street, sport, plate, class, film, world, asked*. Punjabi loan spelling hides the problem, so the lesson shows the two side by side.
6. **Stress and weak vowels:** *about, banana, photography, hotel, develop*; one strong syllable per word; no doubled consonant after a short vowel (*happy, city*).
7. **Pitch:** English words have no ਸੁਰ of their own; a statement falls at the end; *h* is always breathed (*behind, perhaps*).
8. **A light puff on p, t, k** at the start of stressed syllables (pen, time, coffee) — said, not written.
9. Note: Indian English ਟ / ਡ and long ੇ / ੋ are understood everywhere; spend the effort on items 2–7.

**Validator settings (profile.json):**
- `"nativeScript": "[\\u0A01-\\u0A65\\u0A70-\\u0A75]"` — the same class the app already uses as `targetScript` for `pa` (`tools/target/pa/profile.json`): Gurmukhi letters and signs, **excluding** Gurmukhi digits ੦–੯ (U+0A66–0A6F). The danda । (U+0964) is in the Devanagari block and does not count, so a `why` that is English plus a danda **fails**, which is what we want. The class finds 0 characters in `packs/course-ko-en.js`, `course-zh-en.js` and `course-hi-en.js` (checked), so "English must not contain native script" is safe.
- **No `pronScript`.** The aid is in the native script, so the default check applies, as in ko-en and hi-en.
- `"pronPattern"` (in profile.json with `\\u` escapes; validate.js compiles it with flag `u`). Readable form, with L = the 10 vowel letters and the 20 consonants of the tables (ਕ ਗ ਙ ਚ ਜ ਟ ਡ ਥ ਦ ਨ ਪ ਫ ਬ ਮ ਯ ਰ ਲ ਵ ਸ ਹ) and S = bindi, dot, the nine vowel signs, halant, tippi:
  `^(?!.*[ਥਦਫ](?!਼))(?!.*[^ਜਥਦਫਵਸ]਼)ˈ?L[LS]*(?:ˈL[LS]*)*(?:(?: |। | / )ˈ?L[LS]*(?:ˈL[LS]*)*)*$`
  In words: every word and every syllable after ˈ begins with a letter; then only letters and the listed signs; words are joined by one space, `। ` or ` / `; ਥ, ਦ and ਫ must carry the dot; the dot may sit only on ਜ ਥ ਦ ਫ ਵ ਸ. It **rejects** Latin letters, IPA other than ˈ, `?` `!` `,` `.`, digits of both scripts, double spaces, a word that starts with a sign, a dangling ˈ, the precomposed dotted letters, ZWJ / ZWNJ, the addak, carrier letters ੳ ੲ, and every consonant outside the key (so ਧ, ਭ, ਤ, ਖ … cannot slip in). It does **not** require ˈ, because one-syllable rows have none. Lookahead and negated classes only; no lookbehind.
- **Keyboard traps:** Punjabi keyboards may produce precomposed ਜ਼ / ਫ਼ / ਸ਼ (U+0A5B / 0A5E / 0A36), an apostrophe for ˈ, or ਅ + ਾ for ਆ. All fail the pattern; normalise with NFC and copy ˈ (U+02C8) from this file.
- No `labels.cueTest` is needed: `nativeScript` is a real script. In the `more/` shorthand an mc `q` or type `hint` with no Gurmukhi letter gets `labels.mcBlankCue` (« ਖ਼ਾਲੀ ਥਾਂ ਵਿੱਚ ਕੀ ਆਵੇਗਾ?») or `typeHintCue` (« — ਇਹਨਾਂ ਸ਼ਬਦਾਂ ਨਾਲ») appended. That is right for a gap question and wrong for a translation question, so writers put the Punjabi frame in themselves: `"ਮੈਂ ਇੱਥੇ ਪੰਜ ਸਾਲਾਂ ਤੋਂ ਰਹਿ ਰਿਹਾ ਹਾਂ" ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ?`, «ਸਹੀ ਵਾਕ ਚੁਣੋ।».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote the respelling in prose and tables.

**Worked examples.** "zh deck row" / "zh ex row" = the English string exists in `tools/content/zh/` with the IPA shown, and the pa `pron` is derived from it by the rules above; "new" = no zh row, IPA written in zh conventions and converted. **Every row below was produced by the scratch converter and tested against `pronPattern`, NFC and `nativeScript` by script** (output under the table).

| English | IPA (source) | pa pron | pronPattern |
|---|---|---|---|
| Hello. | /həˈloʊ/ (zh deck row) | ਹˈਲੋ | pass |
| Thank you. | /ˈθæŋk ju/ (zh deck row) | ਥ਼ੈਂਕ ਯੂ | pass |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ (zh deck row) | ਨਾਈਸ ਟ ਮੀਟ ਯੂ | pass |
| See you later. | /ˈsiː ju ˈleɪtər/ (zh deck row) | ਸੀ ਯੂ ˈਲੇਟਰ | pass |
| Excuse me. | /ɪkˈskjuːz mi/ (zh deck row) | ਇਕ੍ˈਸ੍ਕਿਊਜ਼ ਮੀ | pass |
| I'm a student. | /aɪm ə ˈstuːdnt/ (zh deck row) | ਆਈਮ ਅ ˈਸ੍ਟੂਡੰਟ | pass |
| What do you do? | /ˈwʌt də ju ˈduː/ (zh deck row) | ਵਟ ਡ ਯੂ ਡੂ | pass |
| I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ (zh deck row) | ਆਈ ਵਰ੍ਕ ਅਟ ਅ ਬੈਂਕ | pass |
| How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ (zh deck row) | ਹਾਊ ਮਚ ਇਜ਼ ਦ਼ਿਸ | pass |
| I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ (zh deck row) | ਆਈ ਡੋਂਟ ਅੰਡਰ੍ˈਸ੍ਟੈਂਡ | pass |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ (zh ex row) | ਆਈ ਹੈਵ਼ ਅ ਡੌਗ। ਦ਼ ਡੌਗ ਇਜ਼ ਸੋ ਕਿਊਟ | pass |
| I learned a lot at school. | /aɪ ˈlɜːrnd ə ˈlɑːt ət ˈskuːl/ (zh ex row) | ਆਈ ਲਰ੍ਨ੍ਡ ਅ ਲਾਟ ਅਟ ਸ੍ਕੂਲ | pass |
| I've worked here since 2020. | /aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/ (zh ex row) | ਆਈਵ਼ ਵਰ੍ਕ੍ਟ ਹਿਰ ਸਿਨ੍ਸ ˈਟ੍ਵੇਂਟੀ ˈਟ੍ਵੇਂਟੀ | pass |
| think | /ˈθɪŋk/ (zh deck row) | ਥ਼ਿੰਕ | pass |
| sink | /ˈsɪŋk/ (zh deck row) | ਸਿੰਕ | pass |
| three | /ˈθriː/ (zh deck row) | ਥ਼੍ਰੀ | pass |
| tree | /ˈtriː/ (zh deck row) | ਟ੍ਰੀ | pass |
| this | /ˈðɪs/ (zh deck row) | ਦ਼ਿਸ | pass |
| very | /ˈveri/ (zh deck row) | ˈਵ਼ੇਰੀ | pass |
| wary | /ˈweri/ (zh deck row) | ˈਵੇਰੀ | pass |
| berry | /ˈberi/ (zh deck row) | ˈਬੇਰੀ | pass |
| vest | /ˈvest/ (zh deck row) | ਵ਼ੇਸ੍ਟ | pass |
| west | /ˈwest/ (zh deck row) | ਵੇਸ੍ਟ | pass |
| vote | /ˈvoʊt/ (zh deck row) | ਵ਼ੋਟ | pass |
| boat | /ˈboʊt/ (zh deck row) | ਬੋਟ | pass |
| bad | /ˈbæd/ (zh deck row) | ਬੈਡ | pass |
| bed | /ˈbed/ (zh deck row) | ਬੇਡ | pass |
| coffee | /ˈkɔːfi/ (zh deck row) | ˈਕੌਫ਼ੀ | pass |
| copy | /ˈkɑːpi/ (zh deck row) | ˈਕਾਪੀ | pass |
| walk | /ˈwɔːk/ (zh deck row) | ਵੌਕ | pass |
| work | /ˈwɜːrk/ (zh deck row) | ਵਰ੍ਕ | pass |
| leave | /ˈliːv/ (zh deck row) | ਲੀਵ਼ | pass |
| live | /ˈlɪv/ (zh deck row) | ਲਿਵ਼ | pass |
| rice | /ˈraɪs/ (zh deck row) | ਰਾਈਸ | pass |
| lice | /ˈlaɪs/ (zh deck row) | ਲਾਈਸ | pass |
| right | /ˈraɪt/ (zh deck row) | ਰਾਈਟ | pass |
| light | /ˈlaɪt/ (zh deck row) | ਲਾਈਟ | pass |
| fan | /ˈfæn/ (zh deck row) | ਫ਼ੈਨ | pass |
| pan | /ˈpæn/ (zh deck row) | ਪੈਨ | pass |
| beach | /ˈbiːtʃ/ (zh deck row) | ਬੀਚ | pass |
| banana | /bəˈnænə/ (zh deck row) | ਬˈਨੈਨਾ | pass |
| hotel | /hoʊˈtel/ (zh deck row) | ਹੋˈਟੇਲ | pass |
| milk | /ˈmɪlk/ (zh deck row) | ਮਿਲ੍ਕ | pass |
| McDonald's | /məkˈdɑːnldz/ (zh deck row) | ਮਕ੍ˈਡਾਨਲ੍ਡ੍ਜ਼ | pass |
| friends | /ˈfrendz/ (zh deck row) | ਫ਼੍ਰੇਂਡ੍ਜ਼ | pass |
| asked | /ˈæskt/ (zh deck row) | ਐਸ੍ਕ੍ਟ | pass |
| months | /ˈmʌnθs/ (zh deck row) | ਮਨ੍ਥ਼੍ਸ | pass |
| vine | /ˈvaɪn/ (new) | ਵ਼ਾਈਨ | pass |
| wine | /ˈwaɪn/ (new) | ਵਾਈਨ | pass |
| zoo | /ˈzuː/ (new) | ਜ਼ੂ | pass |
| Jew | /ˈdʒuː/ (new) | ਜੂ | pass |
| zero | /ˈzɪroʊ/ (new) | ˈਜ਼ਿਰੋ | pass |
| school | /ˈskuːl/ (new) | ਸ੍ਕੂਲ | pass |
| station | /ˈsteɪʃn/ (new) | ˈਸ੍ਟੇਸ਼ਨ | pass |
| street | /ˈstriːt/ (new) | ਸ੍ਟ੍ਰੀਟ | pass |
| film | /ˈfɪlm/ (new) | ਫ਼ਿਲ੍ਮ | pass |
| sport | /ˈspɔːrt/ (new) | ਸ੍ਪੌਰ੍ਟ | pass |
| pleasure | /ˈpleʒər/ (new) | ˈਪ੍ਲੇਜ਼ਰ | pass |
| about | /əˈbaʊt/ (new) | ਅˈਬਾਊਟ | pass |
| photography | /fəˈtɑːgrəfi/ (new) | ਫ਼ˈਟਾਗ੍ਰਫ਼ੀ | pass |
| computer | /kəmˈpjuːtər/ (new) | ਕੰˈਪਿਊਟਰ | pass |
| ship / sheep | /ˈʃɪp/ /ˈʃiːp/ (new) | ਸ਼ਿਪ / ਸ਼ੀਪ | pass |
| full / fool | /ˈfʊl/ /ˈfuːl/ (new) | ਫ਼ੁਲ / ਫ਼ੂਲ | pass |
| My name is Simran. | /maɪ ˈneɪm ɪz ˈsɪmrən/ (new) | ਮਾਈ ਨੇਮ ਇਜ਼ ˈਸਿਮ੍ਰਨ | pass |
| I live in Ludhiana. | /aɪ ˈlɪv ɪn ˌluːdiˈɑːnə/ (new) | ਆਈ ਲਿਵ਼ ਇਨ ਲੂਡੀˈਆਨਾ | pass |
| Five hundred rupees. | /ˈfaɪv ˈhʌndrəd ruːˈpiːz/ (new) | ਫ਼ਾਈਵ਼ ˈਹੰਡ੍ਰਡ ਰੂˈਪੀਜ਼ | pass |
| I've lived here since 2015. | /aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/ (new) | ਆਈਵ਼ ਲਿਵ਼੍ਡ ਹਿਰ ਸਿਨ੍ਸ ਟੂ ˈਥ਼ਾਊਜ਼ੰਡ ਫ਼ਿਫ਼੍ˈਟੀਨ | pass |
| How long have you been waiting? | /ˈhaʊ ˈlɔːŋ həv ju bɪn ˈweɪtɪŋ/ (new) | ਹਾਊ ਲੌਙ ਹਵ਼ ਯੂ ਬਿਨ ˈਵੇਟਿਙ | pass |
| She is my sister. | /ʃi ɪz maɪ ˈsɪstər/ (new) | ਸ਼ੀ ਇਜ਼ ਮਾਈ ˈਸਿਸ੍ਟਰ | pass |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ (zh format) | ਫ਼ਿਫ਼੍ˈਟੀਨ / ˈਫ਼ਿਫ਼੍ਟੀ | pass |

Script output (Node, run on the delivered `pa.profile.json`):

```
JSON ok; keys: native, nativeNameEn, name, ttsLang, nativeScript, pron, pronPattern, standingRule, labels, lessonOrder
regex compile ok: pronPattern (u), nativeScript (u), standingRule.keywords
label mcBlankCue has native script: true NFC: true
label typeHintCue has native script: true NFC: true
name.pa NFC: true === Intl: true
packs/course-ko-en.js Gurmukhi chars: 0
packs/course-zh-en.js Gurmukhi chars: 0
packs/course-hi-en.js Gurmukhi chars: 0
worked examples: 70/70 pass pronPattern, NFC and nativeScript
minimal pairs distinct: true
bad strings rejected: 22/22
hit    (as intended) ਪੇਸ਼ੇ ਤੋਂ ਪਹਿਲਾਂ ਆਰਟੀਕਲ a ਲੱਗਦਾ ਹੈ: a teacher।
hit    (as intended) two ਤੋਂ ਬਾਅਦ ਬਹੁਵਚਨ: brothers। ਪੰਜਾਬੀ ਵਿੱਚ "ਦੋ ਭਰਾ" ਵਿੱਚ ਸ਼ਬਦ ਨਹੀਂ ਬਦਲਦਾ, ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ -s ਲੱਗੇਗਾ।
hit    (as intended) information ਨਾ-ਗਿਣਨਯੋਗ ਹੈ: ਨਾ ਆਰਟੀਕਲ, ਨਾ -s।
hit    (as intended) ਦੂਜੀ ਵਾਰ ਜ਼ਿਕਰ ਹੋਵੇ ਤਾਂ ਆਰਟੀਕਲ the।
hit    (as intended) these ਬਹੁ-ਵਚਨ ਲਈ, this ਇੱਕ ਚੀਜ਼ ਲਈ।
hit    (as intended) ਗਿਣਨਯੋਗ ਨਾਂਵ ਇੱਕਵਚਨ ਵਿੱਚ ਹੋਵੇ ਤਾਂ a ਚਾਹੀਦਾ ਹੈ।
hit    (as intended) ਆਰਟਿਕਲ the: ਗੱਲ ਉਸੇ ਚੀਜ਼ ਦੀ ਹੈ ਜਿਸ ਨੂੰ ਦੋਵੇਂ ਜਾਣਦੇ ਹਨ।
hit    (as intended) ਦਸ ਸਾਲ — ਬਹੁਵਚਨ years; know ਨਾਲ -ing ਨਹੀਂ ਲੱਗਦਾ।
no hit (as intended) Simple Present ਵਿੱਚ he ਨਾਲ -s ਲੱਗਦਾ ਹੈ।
no hit (as intended) advice ਗਿਣੀ ਨਹੀਂ ਜਾਂਦੀ, ਇਸ ਲਈ advices ਗ਼ਲਤ ਹੈ।
no hit (as intended) "ਉਹ" = he ਜਾਂ she; ਚੀਜ਼ ਲਈ it।
no hit (as intended) ਇੱਕਵਚਨ ਵਿੱਚ is, ਕਈਆਂ ਲਈ are।
why lines behaving as intended: 12/12; every line has native script: true
nativeScript rejects danda-only English: true | rejects Gurmukhi digits only: true
```

- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, derive from that IPA instead.
- Rows that show the Punjabi-specific rules: *school, station, street, film, sport* (halant where Punjabi adds a vowel); *I'm a student, I don't understand, since 2015* (tippi / bindi vs halant); *cute, computer, Excuse me* (rule J); *very / wary, vine / wine, vest / west* (the dot on ਵ); *zoo / Jew*; *bad / bed*; *ship / sheep, full / fool* (length Punjabi already has).

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "ਆਰਟ[ੀਿ]ਕਲ|ਬਹੁ-?ਵਚਨ|ਗਿਣਨ-?ਯੋਗ" }` (no `flags`: Gurmukhi has no case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **ਆਰਟੀਕਲ**, **ਬਹੁਵਚਨ** or **ਗਿਣਨਯੋਗ / ਨਾ-ਗਿਣਨਯੋਗ**.
- **Why these strings:** they are the glossary terms (§3). Plain substrings work and no `\b` is needed (JavaScript's `\b` is ASCII-only). `ਗਿਣਨ-?ਯੋਗ` matches inside ਨਾ-ਗਿਣਨਯੋਗ and accepts ਗਿਣਨ-ਯੋਗ; `ਬਹੁ-?ਵਚਨ` accepts the hyphenated school spelling ਬਹੁ-ਵਚਨ; `ਆਰਟ[ੀਿ]ਕਲ` accepts ਆਰਟਿਕਲ. `ਬਹੁਵਚਨ` does not match ਇੱਕਵਚਨ, which is right: «ਇੱਕਵਚਨ» alone does not name the point.
- **The oblique trap, specific to Punjabi:** a writer who inflects the term breaks the match in one case only — the oblique plural **ਆਰਟੀਕਲਾਂ** still matches, **ਬਹੁਵਚਨਾਂ** still matches, but an abbreviation (ਬਹੁ.) or a paraphrase (ਕਈਆਂ ਲਈ, ਗਿਣੀ ਨਹੀਂ ਜਾਂਦੀ) does not. §2 already forbids Punjabi endings on English loans, so the term stays bare.
- **What the validator counts** (validate.js `article-plural`, read locally): `order` — the `why` matches the keywords **and** `x` holds an article tile (`a`, `an`, `the`) or a singular / plural twin of a tile in `a`; `type` — the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin of a word in `a[0]`. Put the competitor tile in `x`.
- Text must be NFC (§2). None of the keywords contains a dotted letter, so a `why` typed with precomposed ਜ਼ elsewhere still matches; keep NFC anyway.

**Sample `why` lines** (all tested with `new RegExp(keywords)` exactly as validate.js builds it; the output is in the script block in §6; Punjabi wording is [inference], native check §11):
- «ਪੇਸ਼ੇ ਤੋਂ ਪਹਿਲਾਂ ਆਰਟੀਕਲ a ਲੱਗਦਾ ਹੈ: a teacher।» → hit
- «two ਤੋਂ ਬਾਅਦ ਬਹੁਵਚਨ: brothers। ਪੰਜਾਬੀ ਵਿੱਚ "ਦੋ ਭਰਾ" ਵਿੱਚ ਸ਼ਬਦ ਨਹੀਂ ਬਦਲਦਾ, ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ -s ਲੱਗੇਗਾ।» → hit
- «information ਨਾ-ਗਿਣਨਯੋਗ ਹੈ: ਨਾ ਆਰਟੀਕਲ, ਨਾ -s।» → hit
- «ਦੂਜੀ ਵਾਰ ਜ਼ਿਕਰ ਹੋਵੇ ਤਾਂ ਆਰਟੀਕਲ the।» → hit
- «these ਬਹੁ-ਵਚਨ ਲਈ, this ਇੱਕ ਚੀਜ਼ ਲਈ।» → hit (hyphenated spelling accepted)
- «ਗਿਣਨਯੋਗ ਨਾਂਵ ਇੱਕਵਚਨ ਵਿੱਚ ਹੋਵੇ ਤਾਂ a ਚਾਹੀਦਾ ਹੈ।» → hit
- «ਆਰਟਿਕਲ the: ਗੱਲ ਉਸੇ ਚੀਜ਼ ਦੀ ਹੈ ਜਿਸ ਨੂੰ ਦੋਵੇਂ ਜਾਣਦੇ ਹਨ।» → hit (variant spelling accepted)
- «ਦਸ ਸਾਲ — ਬਹੁਵਚਨ years; know ਨਾਲ -ing ਨਹੀਂ ਲੱਗਦਾ।» → hit
- «Simple Present ਵਿੱਚ he ਨਾਲ -s ਲੱਗਦਾ ਹੈ।» → **no hit** (correct: not an article / plural point)
- «advice ਗਿਣੀ ਨਹੀਂ ਜਾਂਦੀ, ਇਸ ਲਈ advices ਗ਼ਲਤ ਹੈ।» → **no hit**: the point is countability, so the writer must say «ਨਾ-ਗਿਣਨਯੋਗ».
- «"ਉਹ" = he ਜਾਂ she; ਚੀਜ਼ ਲਈ it।» → **no hit** (correct)
- «ਇੱਕਵਚਨ ਵਿੱਚ is, ਕਈਆਂ ਲਈ are।» → **no hit**: write «ਬਹੁਵਚਨ ਵਿੱਚ are».

**Writer rules (keep the count meaningful):**
- Write «ਬਹੁਵਚਨ» in full; never «ਬਹੁ.», «ਪਲੂਰਲ» or «ਬਹੁਤੇ» for the grammar point.
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs at least one Gurmukhi letter (§6).
- The multiple-choice UI term is «ਵਿਕਲਪ» (§10); it contains no keyword.

**Justification:**
- **Articles:** Punjabi has no articles; articles were the most common written error in the one Punjabi-background sample found (Akbar et al. 2023, 20 learners, Pakistani Punjab) [research-backed, small]; both directions are annotated Indian English features (Demszky et al., via hi.md).
- **Plurals and countability are a real Punjabi problem** (§4.4): ਦੋ ਦੋਸਤ, ਦੋ ਘਰ do not change; *advices, equipments, furnitures* are Indian English count uses. The plural half earns its place on the language contrast, not only on parity [inference + curriculum convention].
- **Parity cost is zero:** the shared `order` / `type` items were written to the Korean rule; only the Punjabi `why` must name the keyword.
- **Why not a tense or pronoun rule?** A he / she or since / for hinge is not implemented in validate.js, would need a new rule kind and changes to English items in up to 40 sets (each a deviation), and would be artificial inside `articles` or `countable`. Those zones get lessons, reweights and the secondary wording below.

**Secondary emphasis (not validated; do not add these to the regex):**
- *he / she / it:* «"ਉਹ" = he (ਆਦਮੀ), she (ਔਰਤ), it (ਚੀਜ਼)।»; *his / her:* «his / her ਮਾਲਕ ਦੇ ਹਿਸਾਬ ਨਾਲ: ਉਸ (ਆਦਮੀ) ਦੀ ਪਤਨੀ = his wife।»
- Duration: «"ਤੋਂ" + ਸਮੇਂ ਦੀ ਲੰਬਾਈ = for: for two years। from ਨਹੀਂ।», «2015 ਤੋਂ = since 2015 — Present Perfect।»
- Stative verbs: «know ਹਾਲਤ ਦੱਸਦੀ ਹੈ: I know, I'm knowing ਨਹੀਂ।»
- *do:* «ਸਵਾਲ ਵਿੱਚ ਸਹਾਇਕ ਕਿਰਿਆ do ਚਾਹੀਦੀ ਹੈ: Do you like tea?»
- Word order: «ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕਿਰਿਆ ਕਰਤਾ ਤੋਂ ਠੀਕ ਬਾਅਦ: I drink tea।»
- Subject: «ਅੰਗਰੇਜ਼ੀ ਵਾਕ ਵਿੱਚ ਕਰਤਾ ਜ਼ਰੂਰੀ ਹੈ: It's raining।»

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md and hi.md):**
- **keep** = a fresh Punjabi explanation from the Punjabi point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Punjabi explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

The brief speaks of 39 Korean-course lesson ids; `tools/content/lib.js` `ORDER` now has **40** (the shared `alphabet` lesson was added in front). All 40 are listed. Ids and order are unchanged; nothing is replaced or dropped. Every note is [inference] grounded in §4.

| lesson id | keep / reweight / add | note for Punjabi speakers |
|---|---|---|
| alphabet | reweight | Learners know the letter shapes; teach the **names**, with the aid: Z = ਜ਼ੀ in the US (*zed* in India, Britain and Canada — both right), H = ਏਚ (not *hech*), V ਵ਼ੀ vs W ˈਡਬ੍ਲਿਊ, G / J, E / I. Spelling a Punjabi name aloud (S-I-M-R-A-N), *double E*, *at* not *at the rate*. *a / an* before letter names (an H, a U) |
| pron | reweight | Teach the aid first (§6: ਪੈਰ-ਬਿੰਦੀ, ਹਲੰਤ, ˈ). Then the Punjabi traps in this order: clusters with no extra vowel (school, station, plate, film), ਵ਼ / ਵ, ਥ਼ / ਦ਼, ਫ਼ / ਜ਼, stress and weak vowels, falling pitch, puff on p t k. **Shared checks and practice stay** (rice / lice, fan / pan, think / sink, vote / boat, right / light, coffee / copy…). Their `why` lines say plainly when a pair is easy («ਰ ਤੇ ਲ ਪੰਜਾਬੀ ਵਿੱਚ ਵੀ ਵੱਖਰੇ ਹਨ — ਇਹ ਸੌਖਾ ਹੈ»; *leave / live* too: Punjabi has ੀ / ਿ) and spend the words on think, three, coffee (ਫ਼) and vote (ਵ਼) |
| be | reweight | Punjabi always has ਹੈ, so omission is rare. Spend the lesson on (a) **he / she / it for ਉਹ**, with *is* for all three; (b) *be* + verb confusions (`I am agree ✗ → I agree`, `She is knowing ✗`); (c) the subject is never dropped. Short answers *Yes, I am* |
| it-there | reweight | «ਠੰਢ ਹੈ», «ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ», «ਦੇਰ ਹੋ ਗਈ» have no subject → It's cold, It's raining, It's late (`Is raining ✗`; Akbar et al.: subject omission). «ਨੇੜੇ ਇੱਕ ਕੈਫ਼ੇ ਹੈ» → There's a cafe near here (`Near here is a cafe ✗`) |
| articles | reweight | No ਆਰਟੀਕਲ in Punjabi. *a* for jobs and "one of many"; ਇੱਕ ≈ *a* only sometimes (`I have one question` only when the number matters); ਇਹ / ਉਹ ≠ always *the*. Both directions (§4.1) |
| plurals | reweight | -s after a number even though «ਦੋ ਦੋਸਤ», «ਦੋ ਘਰ» do not change (`two friend ✗`); *one of my friends*; irregulars (people, children — `peoples, childrens ✗`); this / these; possessive 's (ਸਿਮਰਨ ਦਾ ਫ਼ੋਨ → Simran's phone); -s said as ਸ / ਜ਼ / ਇਜ਼ |
| present | reweight | Word order: ਕਰਤਾ-ਕਰਮ-ਕਿਰਿਆ vs subject-verb-object («ਮੈਂ ਚਾਹ ਪੀਂਦਾ ਹਾਂ» → I drink tea). *don't* for negation (`I not like ✗`). The verb does not change for a woman speaker (ਪੀਂਦਾ / ਪੀਂਦੀ → drink) |
| questions | reweight | ਕੀ-questions and intonation questions → Do you like tea?; the wh-word moves to the front and the auxiliary follows it (`Where you are going? ✗`, `You are going where? ✗`). Body: embedded questions keep statement order; tags *aren't you, don't you*, and «ਹੈ ਨਾ? = isn't it? ਹਰ ਵਾਕ ਨਾਲ ਸਿਰਫ਼ ਭਾਰਤ ਵਿੱਚ ਚੱਲਦਾ ਹੈ» |
| third-s | reweight | Punjabi agreement is by gender and number (ਕਰਦਾ ਹੈ / ਕਰਦੀ ਹੈ); English has one mark, -s, for he / she / it only — make it audible and spelled; *does / doesn't* (`Does she works? ✗`) |
| prep | reweight | ਸੰਬੰਧਕ come after the noun, prepositions before it. ਨੂੰ = on Monday / in the evening / to; ਤੋਂ = from / since / than; ਵਿੱਚ = in; ਤੇ = on / at; «ਪੰਜ ਵਜੇ» → at five. No preposition with *home, next week, discuss, reach*; *married to* |
| countable | reweight | ਸਲਾਹ, ਕੰਮ, ਸਮਾਨ, ਜਾਣਕਾਰੀ, ਫ਼ਰਨੀਚਰ: advice, work, luggage, information, furniture are ਨਾ-ਗਿਣਨਯੋਗ (`many advices ✗`). *a piece of* |
| object-have | reweight | «ਮੇਰੇ ਕੋਲ ਕਾਰ ਹੈ» → I have a car; *have* for owning is never -ing. **him / her / it** for ਉਸ ਨੂੰ, and **his / her by the owner** (`my brother and her wife ✗`) |
| can-like | reweight | «ਮੈਨੂੰ ਚਾਹ ਪਸੰਦ ਹੈ» → I like tea, the person first; «ਮੈਨੂੰ ਤੈਰਨਾ ਆਉਂਦਾ ਹੈ» → I can swim. like + -ing |
| polite | reweight | Punjabi politeness lives in ਤੁਸੀਂ, ਜੀ and the verb form; English puts it in could / would: `Give me one coffee ✗ → Could I have a coffee?`. *Please* is not a reply to *thank you*. *Kindly* + order sounds stiff abroad |
| continuous | reweight | ਰਿਹਾ ਹੈ overlaps the Present Continuous for actions now, not for states: no -ing on know, want, understand, have (owning), need (`I am understanding ✗`). Preview `stative-since` |
| past | reweight | ਸੀ is not *was* in every past sentence («ਮੈਂ ਕੰਮ ਕੀਤਾ ਸੀ» → I worked; `I was worked ✗`); *did* + V1 (`didn't went ✗`); -ed said ਟ / ਡ / ਇਡ, never a full extra syllable in *worked, played* |
| irregular-past | keep | School drills V1 / V2 / V3 tables; use the habit and spend the time on typed recall |
| the | reweight | Both directions: second mention and shared knowledge take *the*; general uncountable or abstract nouns and most countries take none (`The life is hard ✗`, `the Canada ✗`, but *the US, the UK*) |
| adjectives | reweight | «ਜ਼ਿਆਦਾ ਚੰਗਾ», «ਸਭ ਤੋਂ ਸਸਤਾ» → -er / -est *or* more / most, never both (`more better ✗`); ਤੋਂ → than. English adjectives do not change (ਚੰਗਾ / ਚੰਗੀ / ਚੰਗੇ → good) |
| going-to | keep | |
| tense | reweight | Recap table: ਕਰਦਾ ਹੈ / ਕਰ ਰਿਹਾ ਹੈ / ਕੀਤਾ / ਕੀਤਾ ਹੈ / ਕਰੇਗਾ and their English matches; mark the one false match: «ਤੋਂ + ਰਿਹਾ ਹੈ» → Present Perfect (Continuous). ਕੱਲ੍ਹ = *yesterday* and *tomorrow*: the verb, not the word, shows which |
| joining | reweight | «ਭਾਵੇਂ … ਪਰ» → although *or* but, never both; «ਕਿ» = *that*; «ਕਿਉਂਕਿ … ਇਸ ਲਈ» → because *or* so, never both |
| numbers | reweight | ਲੱਖ and ਕਰੋੜ: 1,00,000 = a hundred thousand; 10 lakh = a million. ਡੇਢ, ਢਾਈ, ਸਾਢੇ → one and a half, two and a half, half past. Dates DD/MM/YYYY vs US month / day. Prices in rupees (*five hundred rupees*) and, for scenes abroad, dollars |
| smalltalk | reweight | *How are you?* is a greeting. Opening questions common at home — salary, marriage, children, age, «ਰੋਟੀ ਖਾਧੀ?» — are personal abroad. *What's your name?* (not *good name*), *I'm from Punjab* (not *I belong to Punjab*). Deck localised (§9) |
| **indian-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | ਕਰੇਗਾ maps well onto *will* |
| perfect | reweight | Key lesson. «ਕੀਤਾ ਹੈ» looks like the Present Perfect but is used with finished times: `I have seen him yesterday ✗ → I saw him yesterday`. been to vs gone to |
| modals | reweight | ਚਾਹੀਦਾ = should / need; «ਮੈਨੂੰ ਜਾਣਾ ਪੈਣਾ ਹੈ» = have to; ਸਕਦਾ = can / may / might; «ਲੋੜ ਨਹੀਂ» = don't have to (not *mustn't*) |
| to-ing | reweight | `I am looking forward to meet you ✗ → to meeting you`, `avoid to go ✗`, `stopped me to enter ✗ → from entering` |
| articles-2 | reweight | Generic plurals and uncountables without *the* (Dogs are loyal; Cricket is popular); the unique *the*; country names (India, Canada, *the* US, *the* UK) |
| first-conditional | reweight | Punjabi uses the future after ਜੇ / ਜਦੋਂ («ਜੇ ਮੀਂਹ ਪਵੇਗਾ», «ਜਦੋਂ ਮੈਂ ਪਹੁੰਚਾਂਗਾ») → If it rains / When I arrive (`If it will rain ✗`) |
| relative | reweight | Correlatives «ਜਿਹੜਾ ਬੰਦਾ ਕੱਲ੍ਹ ਆਇਆ ਸੀ, ਉਹ ਮੇਰਾ ਚਾਚਾ ਹੈ» give a doubled subject: `The man who came yesterday, he is my uncle ✗`; no repeated object (`the book which I read it ✗`) |
| phrasal | keep | |
| perfect-2 | reweight | for / since vs one word ਤੋਂ: «ਦੋ ਸਾਲਾਂ ਤੋਂ» → for two years (`from two years ✗`, `since two years ✗`), «2015 ਤੋਂ» → since 2015. Hands over to `stative-since` |
| **stative-since** | **add** (after `perfect-2`, B1) | See below |
| narrative | keep | |
| conditionals | reweight | «ਜੇ ਮੈਨੂੰ ਪਤਾ ਹੁੰਦਾ ਤਾਂ…» covers both present and past unreal (If I knew / If I had known); teach the split by time |
| passive | reweight | Indian office English overuses the passive (`It is informed that…`). Teach when English prefers the active; keep the shared items |
| reported | reweight | Punjabi keeps the speaker's own words after ਕਿ: «ਉਸਨੇ ਕਿਹਾ ਕਿ ਮੈਂ ਥੱਕਿਆ ਹਾਂ» means *he* is tired → He said (that) he was tired (`He said that I am tired ✗`). *told me*, not *said me* |
| email | reweight | Indian office and application habits that read oddly abroad: «Respected Sir», *Kindly do the needful*, *PFA*, *revert*. → Dear Mr. Singh / Hi Aman, *Could you please…*, *I've attached…*. Add one line on emails to a college, landlord or employer abroad |
| idioms | reweight | Punjabi idiom calques that do not exist in English (`eating my head ✗` from ਸਿਰ ਖਾਣਾ → *bugging me*); *It's like that only* is Indian English |

**Totals:** 40 shared lessons: **6 keep** (irregular-past, going-to, past-continuous, will, phrasal, narrative) and **34 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions.

**Additions.** Both ids already exist in hi-en (`tools/content/hi/deviations.json` `extraLessons: ["indian-english","stative-since"]`). **Recommendation: start from hi-en's English side for both** (lesson rows, checks, practice `a` / `o` / `x`, and the 23 cards of hi-en's deck «इंडियन इंग्लिश: भारत बनाम विदेश»), localise the names and places (§9), and write the Punjabi side fresh. That costs no new English writing, keeps the two Indian courses comparable, and the lead has already reviewed that English.

- **`indian-english`** — title «ਇੰਡੀਅਨ ਇੰਗਲਿਸ਼: ਭਾਰਤ ਵਿੱਚ ਠੀਕ, ਵਿਦੇਸ਼ ਵਿੱਚ ਅਜੀਬ», after `smalltalk` (end of A1), deck 22 «ਇੰਡੀਅਨ ਇੰਗਲਿਸ਼: ਭਾਰਤ ਬਨਾਮ ਵਿਦੇਸ਼» (§9).
  - *Framing:* Indian English is a real variety; these forms are understood in India. The lesson shows what listeners in Canada, the US or the UK expect, without ✗ for group 1.
  - *Content:*
    1. **Fine in India, unusual abroad** (→ international form): prepone (→ move up), out of station (→ out of town), What is your good name? (→ What's your name?), cousin brother / sister (→ cousin), do the needful (→ please take care of it), revert (→ reply / get back to you), passed out (→ graduated), years back (→ years ago), native place (→ hometown), kindly + order (→ please / could you), shifting (→ moving), today itself / now only (→ today / right now).
    2. **Wrong in any variety** (✗ → ✓): Myself Aman (→ I'm Aman), discuss about (→ discuss), return back (→ return), I have a doubt (→ I have a question), …, isn't it? after every sentence (→ aren't you / don't you).
    3. **Punjabi calques** [inference; each needs a native check, §11]: ਦਵਾਈ ਖਾਣੀ → `eat medicine ✗ → take medicine`; ਪੇਪਰ ਦੇਣਾ → `give an exam ✗ → take an exam`; ਬੱਤੀ ਬੰਦ ਕਰਨੀ → `close the light ✗ → turn off the light`; ਸਿਰ ਖਾਣਾ → `eat my head ✗ → bug me`; ਫ਼ੋਟੋ ਖਿੱਚਣੀ → `pull a photo ✗ → take a photo`; ਮੈਂ ਲੁਧਿਆਣੇ ਤੋਂ ਹਾਂ → `I belong to Ludhiana → I'm from Ludhiana`; ਟਾਈਮ ਕੀ ਹੋਇਆ ਹੈ? → `What is the time? → What time is it?` (the first is fine, the second more usual in the US).
  - *Practice that meets §7:* hi-en's set, with the Punjabi `why` naming ਆਰਟੀਕਲ / ਬਹੁਵਚਨ / ਨਾ-ਗਿਣਨਯੋਗ. Sketch of two items with a Punjabi side: order `p:"ਕੀ ਮੈਂ ਇੱਕ ਸਵਾਲ ਪੁੱਛ ਸਕਦਾ ਹਾਂ?"`, `a:["Can","I","ask","a","question"]`, `x:["doubt","the"]`, why «doubt ਦਾ ਮਤਲਬ ਸ਼ੱਕ ਹੈ; ਸਵਾਲ ਲਈ question, ਤੇ ਇੱਕ ਸਵਾਲ — ਆਰਟੀਕਲ a।»; type `p:"ਮੈਨੂੰ ਕੁਝ ਸਲਾਹ ਚਾਹੀਦੀ ਹੈ"`, `a:["I need some advice","I need advice"]`, `x:["advices"]`, why «advice ਨਾ-ਗਿਣਨਯੋਗ ਹੈ: advices ਨਹੀਂ ਹੁੰਦਾ।»
  - *Parity:* new lesson id (`extraLessons`) and a new deck (deck count deviation).
  - *Reason:* §4.11 and §5: this audience is the one most likely to use its English abroad within a year, and ko-en has no equivalent. It mirrors zh `chinglish`, id `indo-english`, hi `indian-english`.
- **`stative-since`** — title «ਤੋਂ = since? ਹਾਲਤ ਵਾਲੀਆਂ ਕਿਰਿਆਵਾਂ ਤੇ "ਕਦੋਂ ਤੋਂ"», blurb idea «"ਮੈਂ 2015 ਤੋਂ ਇੱਥੇ ਰਹਿ ਰਿਹਾ ਹਾਂ" = I've lived here since 2015 — I am living ਨਹੀਂ।», after `perfect-2` (B1), deck 2 «ਆਪਣੀ ਜਾਣ-ਪਛਾਣ» (no new deck).
  - *New in this lesson* (the same five points as hi.md §8): (1) stative verbs never take -ing (know, understand, believe, want, need, like, have for owning); (2) **ਤੋਂ → since, for or from** (point in time → *since*; length → *for*; *from … to* only with an end point); (3) «ਤੋਂ + ਰਿਹਾ ਹੈ» → Present Perfect Continuous for actions, Present Perfect for states; (4) «ਕਦੋਂ ਤੋਂ?» → *How long…?* (`Since when you are waiting? ✗`); (5) *have* = eat / take part can take -ing (*having lunch*).
  - *Practice that meets §7:* hi-en's set (durations give natural plural twins: *years / year*, *hours / hour*, *weeks / week*). Punjabi prompts: «ਮੈਂ ਉਸ ਨੂੰ ਦਸ ਸਾਲਾਂ ਤੋਂ ਜਾਣਦਾ ਹਾਂ», «ਸਾਡੇ ਕੋਲ 2020 ਤੋਂ ਇੱਕ ਕਾਰ ਹੈ», «ਉਹ ਦੋ ਘੰਟਿਆਂ ਤੋਂ ਉਡੀਕ ਕਰ ਰਹੇ ਹਨ», «ਮੇਰੇ ਕੋਲ ਇਹ ਫ਼ੋਨ ਤਿੰਨ ਸਾਲਾਂ ਤੋਂ ਹੈ», «ਤੁਸੀਂ ਕਦੋਂ ਤੋਂ ਉਡੀਕ ਕਰ ਰਹੇ ਹੋ?». A prompt with ਉਹ needs a cue for he / she in the final text («ਉਹ (ਕੁੜੀ) ਦੋ ਹਫ਼ਤਿਆਂ ਤੋਂ ਬਿਮਾਰ ਹੈ»), or a name.
  - *Parity:* new lesson id only.
  - *Reason:* §4.2: a three-error package (-ing on a state, Present Continuous for Present Perfect, *from* for *for*) that `continuous` and `perfect-2` each touch from one side. The Punjabi-specific evidence is thin (TalkDrill; Indian English research); the Punjabi grammar behind it (ਤੋਂ, ਰਿਹਾ ਹੈ) is not in doubt.

**Considered, not added:**
- **A he / she / it lesson** (`he-she`). ਉਹ is the most Punjabi-specific grammar trap in the brief's list, but it is one small rule, it has no learner study behind it, the cap is two lessons, and it fits inside `be` and `object-have` plus the secondary `why` wording (§7) and paired deck cards. If first-attempt logs show *he / she* slips persisting, this is the first candidate to add.
- **A cluster / final-sounds pronunciation lesson** (like vi's `final-sounds`). The `pron` reweight and deck 18 cover it; a separate lesson would need a third slot.
- `articles-3` (B1 article review; English side exists in ja, zh and ko). Zero writing cost if logs show articles lagging.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [inference; native check for the name and place choices, §11]:

| ko-en | pa-en |
|---|---|
| Minji (and other Korean names) | **Simran** (woman, main), **Aman** (man); alternates Kiran, Arjun, Harleen, Raj, Preet, Jas. English-speaking characters keep English names |
| Seoul | **Amritsar** (known abroad; the en-US voice says it clearly) |
| Busan | **Chandigarh**; alternates Ludhiana, Jalandhar, Patiala; Delhi for the airport |
| Jeju / beach trips | **Shimla, Manali** (hills); Goa for a beach |
| Seoul National University | "a college in Chandigarh", generic; no real institution |
| kimchi, bibimbap | **paratha, dal, chole, paneer, samosa, saag, roti; lassi, chai** (default vegetarian; no beef, no pork) |
| soju, beer scenes | non-alcoholic by default (chai, lassi, juice, coffee); see the note on Sikh practice below |
| K-pop, K-drama | **Punjabi music, bhangra, Punjabi and Hindi movies, cricket, kabaddi, hockey**; genres, not artists |
| Gangnam | the market, the mall, downtown |
| Chuseok, Korean holidays | **Vaisakhi, Lohri, Diwali**, Gurpurab (as a holiday, not as doctrine), weddings, birthdays |
| 존댓말 / 반말 comparisons | ਤੁਸੀਂ / ਤੂੰ comparisons (`polite` only) |
| won (₩) | **rupees** at home (`500 rupees`; never `₹`, `Rs.` in English strings); **dollars** in the scenes abroad that the shared English already has. lakh / crore only in `numbers` |
| Korea / Korean (*I'm from Korea*, *Do you speak Korean?*) | **India / Punjabi** (*I'm from India*, *I'm from Punjab, in India*, *Do you speak Punjabi?*) |

**Name and TTS rules:**
- **Personal names: only names the en-US voice says close to the Punjabi.** Simran, Aman, Kiran, Arjun, Harleen, Raj, Preet, Jas have no aspirate, retroflex, tone letter or nasal vowel. Avoid names with ਧ ਭ ਘ ਢ ਝ or ੜ / ਣ, and long compounds the voice stresses oddly (Bhupinder, Sukhdeep, Dhillon, Gurpreet, Navjot, Harbhajan) [not tested on the engine, §11].
- **Many Punjabi names are unisex** (Aman, Kiran, Harleen, Jas…). That is useful: the lesson `be` can show that English needs *he* or *she* where the name does not tell. Fix each character's gender in the first card where it appears and keep it.
- **Surnames** only in `email` and work dialogues: **Singh, Kaur, Gill** (Mr. Singh, Ms. Kaur). Explain once: English uses *Mr. / Ms.* + surname or the first name, not *Sir / Madam* + first name (`Aman Sir ✗`); and that forms abroad ask for a "last name", where many Sikhs give Singh or Kaur.
- **Places** in their English spellings; listen to each once on the engine's voice (Amritsar, Chandigarh, Ludhiana, Jalandhar, Patiala, Punjab, Shimla).
- **Diaspora scenes.** The shared English is set in the US. Lesson bodies and appended cards may add what this audience meets first: an immigration desk (*What's the purpose of your visit? — I'm here to study.*), a college office, a landlord, a part-time job, a bank. Keep them neutral facts of travel; no advice on visas, agents or immigration routes.
- **Religion and diet** [inference; native check]: learners are mostly Sikh and Hindu. Default food is vegetarian; never beef or pork. Observant Sikhs do not drink alcohol, smoke or cut their hair: do not give the **named Punjabi characters** a beer, a cigarette or a haircut (shared English items such as *No smoking* stay; give a bar or barber line to an unnamed or English-named speaker). No turban, kirpan or caste references as plot; no politics (1984, Khalistan, Partition, farm protests, India–Canada relations), no regional rivalry.
- **Greetings in Punjabi glosses:** *Hello* → «ਸਤ ਸ੍ਰੀ ਅਕਾਲ / ਹੈਲੋ»; note once that English has one greeting for everyone, where Punjabi chooses between ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ and ਸਲਾਮ (en-pa.md §2.4). *Thank you* → ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ.

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and translate the Punjabi side literally (ਸਿਓਲ, ਬੁਸਾਨ, ਕਿਮਚੀ, ਕੇ-ਪੌਪ). Do not file per-item deviations (same rule as zh.md, id.md, hi.md).

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Simran.*, *I live in Seoul.* → *I live in Amritsar.*, *Korea* → *India*, *Korean* → *Punjabi*) needs a `decks` entry in `deviations.json`. **Reuse hi-en's positions**: its entries list exactly which cards change (deck 2 cards 0, 4, 5; deck 3 card 12; deck 10 card 6; deck 12 card 8; deck 14 cards 0, 1; deck 15 card 8; deck 16 card 15), with Priya → Simran, Delhi → Amritsar, Hindi → Punjabi, Sharma → Singh, *the Indian embassy* unchanged.

**Deck names (FINAL proposal).** Plain everyday Punjabi with established English loans; «ਤੇ» ("and") and commas as separators; parentheses for the travel deck; digits after a space; no terminal punctuation; NFC. Rows 1–20 replace the Korean course's 20 decks in the same order; row 21 is the shared alphabet deck (ko «알파벳», the 21st key in `tools/content/ko/decks.js`, 26 cards); row 22 is the pa-only deck, appended last. The scaffold therefore has 21 decks and the finished course 22.

| # | Punjabi name | linked lesson or notes |
|---|---|---|
| 1 | **ਮਿਲਣ-ਵਿਛੜਨ ਵੇਲੇ** | greetings and goodbyes; no lesson links in ko-en |
| 2 | **ਆਪਣੀ ਜਾਣ-ਪਛਾਣ** | articles, be, present, third-s, object-have, perfect-2; also `stative-since`; he / she pairs |
| 3 | **ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ 1** | polite |
| 4 | **ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ 2** | questions |
| 5 | **ਰਾਹ ਤੇ ਆਵਾਜਾਈ** | the; bus, auto, train, airport scenes |
| 6 | **ਰੈਸਟੋਰੈਂਟ ਵਿੱਚ** | countable; vegetarian default |
| 7 | **ਕੈਫ਼ੇ ਤੇ ਦੁਕਾਨ** | no lesson links |
| 8 | **ਖ਼ਰੀਦਦਾਰੀ ਤੇ ਭੁਗਤਾਨ** | plurals, adjectives, relative; rupees at home, dollars abroad |
| 9 | **ਗਿਣਤੀ, ਸਮਾਂ ਤੇ ਤਾਰੀਖ਼** | prep, numbers; lakh / crore, ਡੇਢ / ਢਾਈ, DD/MM vs US dates |
| 10 | **ਹਲਕੀ-ਫੁਲਕੀ ਗੱਲਬਾਤ** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing |
| 11 | **ਜਜ਼ਬਾਤ ਤੇ ਹੁੰਗਾਰੇ** | joining, past-continuous, conditionals |
| 12 | **ਤਾਰੀਫ਼ ਤੇ ਪਸੰਦ** | no lesson links |
| 13 | **ਦਫ਼ਤਰ ਤੇ ਈਮੇਲ** | first-conditional, passive, email; interview, shift, part-time job vocabulary |
| 14 | **ਕਾਲ ਤੇ ਚੈਟ ਦੇ ਛੋਟੇ ਰੂਪ** | reported |
| 15 | **ਸਫ਼ਰ (ਏਅਰਪੋਰਟ ਤੇ ਹੋਟਲ)** | perfect, articles-2; immigration-desk lines |
| 16 | **ਡਾਕਟਰ ਤੇ ਐਮਰਜੈਂਸੀ** | modals |
| 17 | **ਫ਼ਰੇਜ਼ਲ ਵਰਬ** | phrasal |
| 18 | **ਉਚਾਰਨ ਦੇ ਜਾਲ** | pron; append pa pairs (below) |
| 19 | **ਅੰਗਰੇਜ਼ੀ ਮੁਹਾਵਰੇ** | idioms |
| 20 | **ਫ਼ਿਲਮਾਂ, ਵੈੱਬ ਸੀਰੀਜ਼ ਤੇ ਸਲੈਂਗ** | narrative |
| 21 | **ਅੰਗਰੇਜ਼ੀ ਵਰਣਮਾਲਾ** | alphabet (shared deck, 26 letter cards; `pron` = the letter names of §6 rule 11) |
| 22 | **ਇੰਡੀਅਨ ਇੰਗਲਿਸ਼: ਭਾਰਤ ਬਨਾਮ ਵਿਦੇਸ਼** | indian-english (pa-only relative to ko; at least 20 cards; needs a `decks["count"]` deviation) |

- Longest names: deck 20 (29 code points) and deck 22 (32). The deck list wraps; check both at 390px with the Gurmukhi line height (§10).
- Names to confirm with a native reader (§11): deck 1 (alternative «ਦੁਆ-ਸਲਾਮ», an everyday idiom some readers hear as Muslim usage), deck 11 «ਹੁੰਗਾਰੇ» for "reactions" (alternative «ਜਜ਼ਬਾਤ ਤੇ ਜਵਾਬ»), deck 14 «ਛੋਟੇ ਰੂਪ» for "short forms".

**Deck content changes** [inference]:
- **Deck 22:** hi-en's 23 targets, localised (*My hometown is Jaipur* → *Amritsar*; *I'm from Jaipur* → *I'm from Punjab*; *Hi, I'm Rahul* → *Hi, I'm Aman*; *We're moving to Mumbai next month* → *to Chandigarh*), plus the Punjabi calques of §8 as new cards (*take medicine, take an exam, turn off the light, take a photo*). Each `note` names the Indian or Punjabi form and says «ਭਾਰਤ ਵਿੱਚ ਚੱਲਦਾ ਹੈ» or «ਹਰ ਥਾਂ ਗ਼ਲਤ».
- **«ਉਚਾਰਨ ਦੇ ਜਾਲ»:** keep the shared 26; append the 14 cards hi-en appended (vine / wine, vest / west, wary, zoo / Jew, zero, easy, van, school, station, about, photography), and add the Punjabi cluster and length set as new cards: **street, sport, plate, class, film, world, asked** (halant), **happy, city** (no doubling), **behind** (h, no pitch), **pleasure** (ਜ਼, soft). All derive by §6.
- **«ਆਪਣੀ ਜਾਣ-ਪਛਾਣ»:** append two pairs that contrast *he* and *she* with the same Punjabi ਉਹ (*This is my brother. He's a driver.* / *This is my sister. She's a nurse.*).
- **«ਸਫ਼ਰ»** and **«ਦਫ਼ਤਰ ਤੇ ਈਮੇਲ»:** append immigration-desk, college and part-time-job lines (above).
- **Meanings:** `nativeScript` is Gurmukhi, so a meaning needs one Gurmukhi letter. Give real Punjabi glosses, and a Gurmukhi loan only where it *is* the Punjabi word («ਈਮੇਲ», «ਫ਼ੋਨ», «ਟਿਕਟ»). The validator's "no duplicate meanings" check compares exact strings, so two cards glossed «ਠੀਕ ਹੈ» need distinct meanings.

## 10. Interface wording notes

These rules are [inference] unless marked. No Punjabi localisation style guide could be read (§2), so they rest on the one Google banner, local `Intl` checks (Node 22, ICU 78.2) and the engine CSS in `src/app.html` (read-only).

**Register:** ਤੁਸੀਂ with the -ੋ imperative (§2). Impersonal statements for states and results; warm, short praise.
- Toasts and empty states: «ਸੇਵ ਹੋ ਗਿਆ», «ਅੱਜ ਦੀ ਦੁਹਰਾਈ ਪੂਰੀ!», «ਲਗਾਤਾਰ ਦਿਨ: {1}। ਸ਼ਾਬਾਸ਼!».
- Errors: plain and blame-free: «ਸਿੰਕ ਨਹੀਂ ਹੋ ਸਕਿਆ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।»

**Buttons, menu items, chips:** the -ੋ imperative or a short noun, no terminal punctuation, no «ਕਿਰਪਾ ਕਰਕੇ», no ਜੀ: «ਸ਼ੁਰੂ ਕਰੋ», «ਜਾਰੀ ਰੱਖੋ», «ਜਾਂਚੋ», «ਭੇਜੋ», «ਸੇਵ ਕਰੋ», «ਰੱਦ ਕਰੋ», «ਪਿੱਛੇ», «ਛੱਡੋ», «ਦੁਬਾਰਾ», «ਅੱਗੇ», «ਬੰਦ ਕਰੋ». Ongoing states: «ਸਿੰਕ ਹੋ ਰਿਹਾ ਹੈ…», «ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…». CTAs ≤ 16 code points where possible.

**Practice instructions** (one verb per item type): «ਸਹੀ ਵਿਕਲਪ ਚੁਣੋ», «ਵਾਕ ਬਣਾਓ», «ਖ਼ਾਲੀ ਥਾਂ ਭਰੋ», «ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਲਿਖੋ».

**Punjabi vs English words in the UI.** Plain Punjabi where it is everyday (ਅੱਜ, ਪਾਠ, ਅਭਿਆਸ, ਤਰੱਕੀ, ਸਵਾਲ, ਜਵਾਬ, ਸਹੀ, ਗ਼ਲਤ, ਸੁਣੋ, ਬਾਕੀ); the established English loan in Gurmukhi when the Punjabi word would be bookish or is not used on phones (ਕਾਰਡ, ਡੈੱਕ, ਲੈਵਲ, ਐਪ, ਸੈਟਿੰਗਾਂ, ਸਾਈਨ ਇਨ, ਸਿੰਕ, ਈਮੇਲ, ਸੈਸ਼ਨ, ਡਰਿੱਲ). Never Latin letters for a Punjabi word, never two forms of one concept. Ordinary loanword spelling applies in the UI (ਡੈੱਕ, ਡਰਿੱਲ with the addak and without halants); the strict aid spelling of §6 is for `pron` only.

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json uses **Read** where the brief says Drills (hi.md §10). Both are given. Counts are **code points** and grapheme clusters (`Intl.Segmenter('pa')`, checked).

| English | Punjabi label | Code points | Graphemes |
|---|---|---|---|
| Today | ਅੱਜ | 3 | 2 |
| Practice | ਅਭਿਆਸ | 5 | 4 |
| Review | ਦੁਹਰਾਈ | 6 | 4 |
| Lessons | ਪਾਠ | 3 | 2 |
| Read (nav) | ਪੜ੍ਹੋ | 5 | 3 |
| Drills (label) | ਡਰਿੱਲ | 5 | 3 |
| Progress | ਤਰੱਕੀ | 5 | 3 |
| Feedback | ਸੁਝਾਅ | 5 | 3 |

- All labels are well under the cap; **width is not the risk, height is.** The mobile nav draws labels at `.62rem` (`.57rem` in `nav.tight`) inside `nav a{overflow:hidden; white-space:nowrap}`. Gurmukhi hangs its letters from a headline and stacks signs **above** it (ਿ ੀ ੇ ੈ ੋ ੌ, bindi ਂ, tippi ੰ, addak ੱ) and **below** the letter (ੁ ੂ, subjoined ੍ਹ ੍ਰ ੍ਵ, the foot dot). At about 10 px these clip or blur. The app already has the fix for Hindi — `html[lang=hi] nav a{overflow:visible;line-height:1.5}` — and **nothing for `html[lang=pa]`**. The lead should add the same rule and check, in the 390px harness: «ਦੁਹਰਾਈ» (sign below + sign above), «ਤਰੱਕੀ» and «ਅੱਜ» (addak above), «ਪੜ੍ਹੋ» (subjoined ਹ below + ੋ above), «ਸੁਝਾਅ».
- «ਦੁਹਰਾਈ» (tab, noun) and «ਦੁਹਰਾਓ» (button) are the same concept.
- «ਸੁਝਾਅ» ("suggestion") for Feedback; the page title is «ਸੁਝਾਅ ਭੇਜੋ». Fallbacks if it tests as too narrow: «ਰਾਏ» (3 code points), «ਫ਼ੀਡਬੈਕ» (7). «ਤਰੱਕੀ» for Progress; fallback «ਪ੍ਰਗਤੀ» (6, more formal).

**Digits: Western 0–9 everywhere; never Gurmukhi ੦–੯** [curriculum convention + local check]. `Intl.NumberFormat('pa-IN')` resolves to the `latn` numbering system and prints «12,34,567.5»; only the explicit `-u-nu-guru` extension prints «੧,੨੩੪», and it must not be used. Wikipedia notes that in modern contexts Gurmukhi digits "are sometimes replaced by standard Western Arabic numerals" ([*Gurmukhi*](https://en.wikipedia.org/wiki/Gurmukhi)); the Google Help page seen used Western digits. Deck names, lesson titles («1 · …») and prose use Western digits; the `pronPattern` and `nativeScript` exclude both digit sets, so a Gurmukhi digit cannot pass as "Punjabi text".

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section). Punjabi CLDR plural rules: **`one` = 0 and 1**, `other` = the rest (`Intl.PluralRules('pa')` checked: 0 one, 1 one, 1.5 other, 2 other, 21 other). What changes with the number in Punjabi:
- **the noun**, for feminine nouns and masculine nouns in -ਆ (ਗ਼ਲਤੀ → ਗ਼ਲਤੀਆਂ, ਹਫ਼ਤਾ → ਹਫ਼ਤੇ, ਘੰਟਾ → ਘੰਟੇ);
- **the verb and participle** (1 ਕਾਰਡ ਬਾਕੀ ਹੈ / 3 ਕਾਰਡ ਬਾਕੀ ਹਨ; ਸਿੱਖਿਆ / ਸਿੱਖੇ);
- **the noun before a postposition, even an invariant one**: the oblique plural adds -ਾਂ. `Intl.RelativeTimeFormat('pa')` prints «1 ਦਿਨ ਵਿੱਚ» but «3 ਦਿਨਾਂ ਵਿੱਚ» (checked). **This is where Punjabi differs from Hindi** (hi: «{1} दिन में» works for every number), so the Hindi templates cannot be transliterated.

How a pattern reads with a number slot — two number-neutral devices only:
1. **An invariant noun right after the number, with no verb, participle or postposition after it:** «{1} ਕਾਰਡ», «{1} ਦਿਨ», «{1} ਪਾਠ», «{1} ਮਿੰਟ», «{1} ਸਕਿੰਟ», «{1} ਡੈੱਕ», «{1} ਸਵਾਲ», «{1} ਅੰਕ», «{1} ਰਾਊਂਡ», «{1} ਵਾਰ». These masculine nouns ending in a consonant (and ਵਾਰ "times") have the same direct form in the singular and plural, so «1 ਕਾਰਡ», «2 ਕਾਰਡ», «21 ਕਾਰਡ» and «0 ਕਾਰਡ» are all correct.
2. **Label + colon + number** for everything else: «ਬਾਕੀ: {1}», «ਨਵੇਂ: {1}», «ਗ਼ਲਤ: {1}», «ਸਿੱਖੇ: {1}», «ਦੁਹਰਾਉਣੇ ਹਨ: {1}», «ਹਫ਼ਤੇ: {1}». The label is a fixed heading, so «ਬਾਕੀ: 1» and «ਬਾਕੀ: 21» both read correctly.
- **Never** a verb or participle that agrees with the count («{1} ਕਾਰਡ ਬਾਕੀ ਹਨ»), a variable noun after the slot («{1} ਹਫ਼ਤੇ», «{1} ਘੰਟੇ», «{1} ਗ਼ਲਤੀਆਂ»), or **any postposition after the counted noun** («{1} ਦਿਨ ਵਿੱਚ», «{1} ਦਿਨ ਬਾਅਦ», «{1} ਕਾਰਡ ਦੀ…», «{1} ਡੈੱਕ ਵਿੱਚ»).
- **"in N days":** label form «ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: {1}», or let `Intl.RelativeTimeFormat('pa')` build the whole phrase.
- "N of M": «ਕਾਰਡ {1}/{2}», «ਰਾਊਂਡ {1}/{2}», «ਲੈਵਲ {1}», «ਪਾਠ {1}». Avoid ordinal words (ਪਹਿਲਾ / ਪਹਿਲੀ / ਪਹਿਲੇ agree).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`). **Give both the identical neutral wording.**
- Writers render each count string at **0, 1, 2 and 21** before submitting.

Counted nouns and their forms (use exactly; native check §11):

| English in keys.json | Punjabi form | Sample render |
|---|---|---|
| card(s) | {1} ਕਾਰਡ | «21 ਕਾਰਡ» |
| cards due / due | ਦੁਹਰਾਉਣੇ ਹਨ: {1} | «ਦੁਹਰਾਉਣੇ ਹਨ: 3» |
| deck(s) | {1} ਡੈੱਕ | «4 ਡੈੱਕ · 260 ਕਾਰਡ» |
| day(s) / streak | {1} ਦਿਨ / ਲਗਾਤਾਰ ਦਿਨ: {1} | «ਲਗਾਤਾਰ ਦਿਨ: 1» |
| week(s) | ਹਫ਼ਤੇ: {1} | «ਪਲਾਨ ਤਿਆਰ · ਹਫ਼ਤੇ: 6» (not «6 ਹਫ਼ਤੇ» as a template: 1 ਹਫ਼ਤਾ) |
| lesson(s) | {1} ਪਾਠ / ਪੂਰੇ ਪਾਠ: {1}/{2} | «ਪੂਰੇ ਪਾਠ: 5/42» |
| review(s) | ਦੁਹਰਾਈ: {1} | «ਪਿਛਲੀ ਦੁਹਰਾਈ: 50 · ਸਹੀ: 85%» |
| point(s) / XP | {1} ਅੰਕ / {1} XP | «120 ਅੰਕ» |
| round(s) | {1} ਰਾਊਂਡ / ਬਾਕੀ ਰਾਊਂਡ: {1} | |
| item(s) / question(s) | {1} ਸਵਾਲ | «14 ਸਵਾਲ» |
| run(s) / tried | ਕੋਸ਼ਿਸ਼ਾਂ: {1} | |
| quiz(zes) | ਮਿੰਨੀ-ਟੈਸਟ: {1} | |
| answered | ਜਵਾਬ: {1} | |
| ×missed | ਗ਼ਲਤ: {1} | «ਗ਼ਲਤ: 3» |
| seen ×N | {1} ਵਾਰ ਦੇਖਿਆ | «4 ਵਾਰ ਦੇਖਿਆ» (ਦੇਖਿਆ refers to the card) |
| pattern(s) | {1} ਪੈਟਰਨ | |
| dialogue(s) | ਗੱਲਬਾਤ: {1} | (ਗੱਲਬਾਤ is feminine; label form) |
| badge(s) | {1} ਬੈਜ | |
| new / new cards per day | ਨਵੇਂ: {1} / ਰੋਜ਼ ਨਵੇਂ ਕਾਰਡ: {1} | |
| left | ਬਾਕੀ: {1} | «ਬਾਕੀ: 7 · ਡੈੱਕ: 3» (not «3 ਡੈੱਕ ਵਿੱਚ») |
| learned | ਸਿੱਖੇ: {1}/{2} | «ਸਿੱਖੇ: 40/260» |
| locked / selected | ਬੰਦ: {1} / ਚੁਣੇ ਡੈੱਕ: {1} | |
| minutes / seconds / KB | {1} ਮਿੰਟ / {1} ਸਕਿੰਟ / {1} KB | «ਦੁਬਾਰਾ ਭੇਜੋ ({1} ਸਕਿੰਟ)» |
| "next due in N days" | ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: {1} | «ਹੁਣ ਦੁਹਰਾਉਣ ਲਈ ਕੁਝ ਨਹੀਂ। ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: 3» |

**Language-name slots.** The engine fills `{x}` with `Intl.DisplayNames('pa')` («ਅੰਗਰੇਜ਼ੀ», «ਕੋਰੀਆਈ», «ਹਿੰਦੀ», «ਚੀਨੀ», «ਸਪੇਨੀ», «ਜਪਾਨੀ»; checked, decomposed dot). Language names are feminine and do not change before a postposition, but verbs, adjectives and ਦਾ / ਦੀ would agree with them. Rules, as hi.md:
- Put the slot **at the start of the line** («ਅੰਗਰੇਜ਼ੀ: …») or **as the value after a colon** («ਕੋਰਸ: ਅੰਗਰੇਜ਼ੀ»).
- A slot followed directly by ਵਿੱਚ is grammatical («{1} ਵਿੱਚ ਲਿਖੋ») and allowed only where nothing agrees with the slot; still prefer the colon form.
- Never an agreeing word next to the slot («ਤੁਹਾਡੀ {1} ਕਿਹੋ ਜਿਹੀ ਹੈ?», «{1} ਸਿੱਖੀ ਜਾ ਰਹੀ ਹੈ»).

| keys.json template | Punjabi (renders as) |
|---|---|
| Change language · {x} | `ਭਾਸ਼ਾ ਬਦਲੋ · {1}` |
| Now learning {x} · progress saved per course | `ਕੋਰਸ: {1} · ਹਰ ਕੋਰਸ ਦੀ ਤਰੱਕੀ ਵੱਖਰੀ ਸੇਵ ਹੁੰਦੀ ਹੈ` |
| How much {x} do you know? | `{1}: ਤੁਹਾਡਾ ਲੈਵਲ ਕੀ ਹੈ?` |
| What do you want {x} for? | `{1}: ਤੁਸੀਂ ਕਿਸ ਲਈ ਸਿੱਖਣਾ ਚਾਹੁੰਦੇ ਹੋ?` |
| type it in {x} / Type in {x}… | `ਜਵਾਬ ਦੀ ਭਾਸ਼ਾ: {1}` |
| No {x} keyboard? Use tiles | `{1}: ਕੀਬੋਰਡ ਨਹੀਂ ਹੈ? ਟਾਈਲਾਂ ਨਾਲ ਚੁਣੋ` |
| Learn {x}, 5 minutes a day | `{1} — ਰੋਜ਼ 5 ਮਿੰਟ` |

`profile.json` `name.pa` = **«ਅੰਗਰੇਜ਼ੀ»** (NFC; identical to the `Intl` string, checked).

**UI glossary (use exactly; native check §11):**

| English UI term | Punjabi |
|---|---|
| lesson / lessons tab | ਪਾਠ |
| practice (set) | ਅਭਿਆਸ |
| review (SRS) | ਦੁਹਰਾਈ; button «ਦੁਹਰਾਓ» |
| deck / card | ਡੈੱਕ / ਕਾਰਡ |
| streak | in counts «ਲਗਾਤਾਰ ਦਿਨ: {1}»; as a noun «ਲੜੀ» |
| hint | ਇਸ਼ਾਰਾ |
| check (3-question lesson quiz) | ਮਿੰਨੀ-ਟੈਸਟ; button «ਜਾਂਚੋ» |
| correct / incorrect | «ਸਹੀ!» / «ਗ਼ਲਤ» |
| answer / explanation (`why`) | ਜਵਾਬ / ਕਾਰਨ («ਕਾਰਨ:» label) |
| try again | ਦੁਬਾਰਾ |
| multiple choice | ਵਿਕਲਪ («ਸਹੀ ਵਿਕਲਪ ਚੁਣੋ») |
| word tiles (order) | ਵਾਕ ਬਣਾਓ; tiles = ਟਾਈਲਾਂ |
| gap-fill | ਖ਼ਾਲੀ ਥਾਂ ਭਰੋ |
| typed sentence | ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਲਿਖੋ |
| drills | ਡਰਿੱਲ |
| session | ਸੈਸ਼ਨ |
| level / XP | ਲੈਵਲ / XP |
| pronunciation toggle | «ਉਚਾਰਨ ਦਿਖਾਓ» |
| listen / play | «ਸੁਣੋ» |
| due today | ਅੱਜ ਦੁਹਰਾਉਣੇ ਹਨ |
| progress | ਤਰੱਕੀ |
| feedback | ਸੁਝਾਅ; page «ਸੁਝਾਅ ਭੇਜੋ» |
| settings / sign in / sign out / sync | ਸੈਟਿੰਗਾਂ / ਸਾਈਨ ਇਨ ਕਰੋ / ਸਾਈਨ ਆਊਟ ਕਰੋ / ਸਿੰਕ |

**Numbers, dates and time** (`Intl` with `pa-IN`, checked locally; never hand-format):
- Numbers: **«12,34,567.5»** — Indian lakh / crore grouping, decimal point, Western digits. Percent «85%». Currency «₹500.00» in UI only, never in English course strings (§9).
- Dates: long «23 ਨਵੰਬਰ 2026», medium «23 ਨਵੰ 2026», short «23/11/26», full «ਸੋਮਵਾਰ, 23 ਨਵੰਬਰ 2026»; weekday short «ਸੋਮ». **Use `dateStyle`**: the bare skeleton `{day, month:'long'}` printed «ਨਵੰਬਰ 23» in this ICU, which is not the usual Punjabi order (§11).
- Time: `Intl` short time gives 12-hour «9:05 PM» (Latin AM / PM). Use `Intl`; never hand-write «ਵਜੇ» templates around a number.

**Fonts, line height and rendering (engine, not content):**
- The app has a Gurmukhi rule only for **target text** in the reverse course: `body [lang=pa]{font-family:'Gurmukhi MN','Gurmukhi Sangam MN','Noto Sans Gurmukhi','Raavi','Nirmala UI',system-ui,sans-serif;line-height:1.7}`. For a Punjabi **interface** it needs the equivalent of the Hindi block:
  `html[lang=pa]{--body:'DM Sans','Gurmukhi MN','Gurmukhi Sangam MN','Noto Sans Gurmukhi','Raavi','Nirmala UI',system-ui,sans-serif;--display:var(--body);--mono:'Gurmukhi MN','Noto Sans Gurmukhi','Raavi','Nirmala UI',ui-monospace,'SF Mono',Menlo,Consolas,monospace}` and `html[lang=pa] body{line-height:1.65} html[lang=pa] p{line-height:1.7} html[lang=pa] nav a{overflow:visible;line-height:1.5}` [font availability per platform is general knowledge, not checked on devices].
- `--mono` matters because the `pron` field renders in `.rom` (`font-family:var(--mono)`); ˈ (U+02C8) falls back to a Latin face.
- **The aid uses three things ordinary Punjabi text does not, and each must be looked at on iOS, Android and Windows before writers start** (§11): (a) the **foot dot on ਵ, ਥ, ਦ** (ਵ਼ ਥ਼ ਦ਼ are not precomposed letters; fonts place U+0A3C by generic mark positioning, which may sit off-centre or collide with ੁ / ੂ); (b) the **visible halant** under ਸ ਕ ਟ ਲ ਰ ਨ … (some fonts may instead form an archaic subjoined letter for a few pairs); (c) **੍ਯ** after a consonant (rule J's rare case). If (a) fails on a platform, the fallback is a bundled Gurmukhi web font for `.rom`; if (b) or (c) fail, they still read, only less tidily.
- **Labels likely to be clipped** (390px harness): the bottom nav (above); `.rom` / `.pron` respellings with a dot plus ੂ or a halant below (ˈਟ੍ਵੇਂਟੀ, ਫ਼ੂਡ, ਥ਼੍ਰੀ); button labels with `overflow:hidden`.
- The i18n validator's length warning counts code points, so Gurmukhi strings look longer than they render; check «ਉਚਾਰਨ ਦਿਖਾਓ» (12 code points) and «ਸੁਝਾਅ ਭੇਜੋ».

**Feedback marks:** ✓ «ਸਹੀ!» / ✗ «ਗ਼ਲਤ». Always pair a mark with text.

## 11. Gaps and unverified claims

**No native review.** Every Punjabi string in this file (voice samples, glossary, `why` lines, deck names, UI labels, calques, count templates) is the author's and must be read by a native speaker of Indian Punjabi before writers copy it. Priority list for that check:
1. **The aid's conventions (§6):** does a reader accept ਵ਼ as v and plain ਵ as w (Punjabi ਵ is often nearer v)? Is the visible halant readable after a two-line explanation? Is ੇ for *bed* tolerable against the familiar ਬੈੱਡ? ਙ for final ng? ਜ਼ for /ʒ/? ਿਊ for /juː/?
2. **Glossary terms with no fetched source:** ਆਰਟੀਕਲ (vs ਆਰਟਿਕਲ), **ਗਿਣਨਯੋਗ / ਨਾ-ਗਿਣਨਯੋਗ** (alternatives: ਗਿਣਤੀਯੋਗ, ਅਣਗਿਣਤ), ਸਹਾਇਕ ਕਿਰਿਆ, ਹਾਲਤ ਦੱਸਣ ਵਾਲੀ ਕਿਰਿਆ, ਅਨਯ ਪੁਰਖ, ਨਾਂਹ-ਵਾਚਕ, ਲਗ, ਪੈਰ-ਬਿੰਦੀ, ਸੰਬੰਧਕ vs ਸਬੰਧਕ (Punjabi Wikipedia writes ਸਬੰਧਕ). If ਗਿਣਨਯੋਗ changes, change the standing-rule regex with it.
3. **Deck names** 1, 11, 14 (§9) and the tab labels ਸੁਝਾਅ, ਤਰੱਕੀ, ਦੁਹਰਾਈ, ਪੜ੍ਹੋ.
4. **Punjabi calques** in `indian-english` (eat medicine, give an exam, close the light, pull a photo) and the claims that ਕੱਲ੍ਹ covers yesterday and tomorrow, that DRESS is spelled ੈ in loans, that final ਿ / ੁ are not read, and that Punjabi speakers turn medial English h into pitch.
5. **Count templates** (§10), especially «ਦੁਹਰਾਉਣੇ ਹਨ: {1}», «ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: {1}», «{1} ਵਾਰ ਦੇਖਿਆ», and the claim that «3 ਦਿਨ ਵਿੱਚ» is wrong (it rests on `Intl.RelativeTimeFormat` output and the author's judgement; colloquial speech may accept it).
6. **Cultural notes** (§9): the Sikh-practice cautions and the name list.

**Evidence gaps.**
- **No learner corpus or error study of Punjabi speakers in India was found.** The grammar ranking rests on one 20-learner Pakistani study (Akbar et al. 2023), reference grammars, one practitioner blog and Indian English research on other L1s. The *he / she* zone, tone transfer, doubling and the *sakool* form have **no study behind them** here.
- **Skipped:** `reports/Grammar learning order research.md` does not exist in this worktree; `docs/profiles/OTHERS.md` has no Punjabi section (eleven other languages only).
- **Read only in part:** Habib & Khan 2019 (abstract); Fatima et al. 2023 (abstract and conclusion; sample size not located); Sethi 1980 (opening lines; paywalled) — the single most relevant phonetics paper; Wikipedia pages were read through summaries of their first 100,000–200,000 characters; the grammar section of *Indian English* was not reached.
- **Seen only as search summaries, not opened (not in Sources):** the bookseller description of the Punjabi University dictionary (Gurmukhi + RP transcription); the grade-9 Pakistani error study in *3L* (UKM); the 2024 lexical-stress study of Pakistani English; a mean IELTS Academic band of 5.8 for Punjabi-L1 test takers; press reports on Punjabi students in Canada (2023) and the fall in IELTS centres.
- **Could not be opened:** Sirsa & Redford 2013 (PMC verification page); the UMT thesis "English pronunciation problems as perceived by Punjabi speaking students" (empty repository page); the Bielefeld record on spontaneous Punjabi English vowels (access denied); the coda-cluster paper in *Jahan-e-Tahqeeq* (connection refused twice); ThePrint on IELTS (403); MSU *Basic Punjabi* 6.5 (403); two Springer pages (login redirect); Khan 2021 (PDF text not extractable; its findings are quoted via hi.md); a llexi page for Punjabi speakers (404, it does not exist); the FUEL Punjabi style guide (retired host, not tried); a Microsoft Punjabi style guide (not found). The IELTS statistics page opened but its figures are in a spreadsheet.
- **PSEB:** only a third-party summary of the class 10 syllabus was read; class 11–12 and university English (which may include phonetic transcription) were not.
- **The dictionary question is open:** whether Punjabi learners' dictionaries print pronunciation in Gurmukhi, IPA or both. If the Punjabi University dictionary uses a Gurmukhi respelling with its own conventions, the key in §6 should be compared with it before writers start.
- **Pakistani / Shahmukhi readers** are out of scope; most of the research found is about them.

**Engineering items not verified.**
- The scratch converter (a port of `pron_hi.js`, ~45 lines) lives only in a temp folder; the lead must build `tools/content/pa/pron_pa.js`, run it over hi's 733-string lookup list and review the output. The rules are complete for every zh symbol; three hand cases remain: consonant + h without ˈ, consonant + j + a vowel other than u, and names.
- **Rendering** of ਵ਼ ਥ਼ ਦ਼, the visible halant and ੍ਯ was not seen on any device or in the harness; nor was the nav at .62rem.
- The en-US voice was not listened to for any name or place in §9; their IPA in the examples (Simran, Ludhiana) is the author's guess at what it says.
- `pronPattern` uses two lookaheads over the whole string; cost is linear per row, tested on 70 rows only.
- The `{day, month}` skeleton order «ਨਵੰਬਰ 23» may be an ICU quirk; not checked against CLDR charts.

## Sources

Web pages opened and used (2026-11-23):
- [Akbar, Atta & Awan (2023), Unveiling Language Hurdles: Exploring Errors in Written English Paragraphs by Secondary School English Learners, *Global Social Sciences Review* VIII(II), 443–454](https://humapub.com/admin/alljournals/gssr/papers/ujMSH2ak4E.pdf) (PDF; text extracted locally; abstract, method and results paragraphs read)
- [Habib & Khan (2019), Vowel Epenthesis in Loanword Integration: A Study of English Consonant Cluster at Onset, *International Journal of English Linguistics* 9(4)](https://ccsenet.org/journal/index.php/ijel/article/view/0/40094) (abstract)
- [Fatima, Saleem & Bashir (2023), A Comparative Analysis of Aspiration Errors among Postgraduate Students from Pashto and Punjabi Language Backgrounds, *Sir Syed Journal of Education & Social Research* 6(4), 36–46](https://ojs.sjesr.org.pk/index.php/ojs/article/download/1016/433) (PDF; text extracted locally; abstract and conclusion read)
- [Sethi (1980), The vowel system in educated Panjabi-speakers' English, *Journal of the International Phonetic Association* 10(1–2), 64–73](https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/vowel-system-in-educated-panjabispeakers-english/49957EA43F5DE08C3CA412BB287FB7C8) (opening extract only)
- [Wikipedia, Help:IPA/Punjabi](https://en.wikipedia.org/wiki/Help:IPA/Punjabi)
- [Wikipedia, Punjabi language](https://en.wikipedia.org/wiki/Punjabi_language) (first 200,000 characters)
- [Wikipedia, Punjabi grammar](https://en.wikipedia.org/wiki/Punjabi_grammar) (first 100,000 characters)
- [Wikipedia, Gurmukhi](https://en.wikipedia.org/wiki/Gurmukhi) (first 200,000 characters)
- [Wikipedia, Indian English](https://en.wikipedia.org/wiki/Indian_English) (phonology and vocabulary; references)
- [Wikibooks, Punjabi/Grammar/Pronoun](https://en.wikibooks.org/wiki/Punjabi/Grammar/Pronoun)
- [Punjabi Wikipedia, ਪੰਜਾਬੀ ਵਿਆਕਰਨ](https://pa.wikipedia.org/wiki/ਪੰਜਾਬੀ_ਵਿਆਕਰਨ) (grammar terms in Gurmukhi)
- [TalkDrill, mistakes Punjabi, Hindi and Gujarati speakers make (CELPIP)](https://www.talkdrill.com/blog/exams/celpip/mistakes-punjabi-hindi-gujarati-speakers/)
- [Careers360, PSEB 10th syllabus](https://school.careers360.com/boards/pseb/pseb-10th-syllabus)
- [The Tribune (23 Feb 2019), Foreign dreams make IELTS coaching a Rs 1,100-crore industry](https://www.tribuneindia.com/news/archive/business/foreign-dreams-make-ielts-coaching-rs-1-100-cr-industry-733521)
- [The Tribune (1 Nov 2018), Patiala varsity releases app on English-Punjabi dictionary](https://www.tribuneindia.com/news/archive/chandigarh/patiala-varsity-releases-app-on-english-punjabi-dictionary-677031)
- [Mozilla wiki, L10n:Teams:pa](https://wiki.mozilla.org/L10n:Teams:pa) (points to the FUEL style guide; no rules on the page)
- [Google Account Help with `hl=pa`](https://support.google.com/accounts/answer/27441?hl=pa) (one Punjabi banner sentence; the rest English)
- [Demszky, Sharma, Clark, Prabhakaran & Eisenstein, Learning to Recognize Dialect Features (arXiv 2010.12707)](https://arxiv.org/abs/2010.12707) (abstract page; the feature list is quoted via hi.md)
- Opened, nothing used: [Jain et al. (2022), An Investigation of Indian Native Language Phonemic Influences on L2 English Pronunciations (arXiv 2212.09284)](https://arxiv.org/abs/2212.09284) (abstract: 18 Indian languages, 80 speakers; languages not named); [IELTS, test statistics](https://ielts.org/researchers/our-research/test-statistics) (data in a spreadsheet).

Local project files read: `docs/briefs/profile-ko-based.md`; `docs/profiles/hi.md` (whole; the model for structure and the source of the Indian English research cited "via hi.md") and `hi.profile.json`; `docs/profiles/en-pa.md` (§1–§3, §10.3, §10.6–10.7, Sources); headings of `zh.md` and `id.md`; `docs/profiles/OTHERS.md` (headings: no Punjabi section); `docs/PIPELINE.md` §3; `docs/PHASE2-BRIEF.md` (last section); `docs/PRACTICE-SPEC.md` (head); `tools/content/lib.js` (`ORDER`); `tools/content/validate.js` (profile regexes, `article-plural`); `tools/content/ko/decks.js` and lesson deck links; `tools/content/zh/PRON-RULES.md`, `zh/profile.json`, `zh/decks.js` (IPA rows); `tools/content/hi/PRON-TOOL.md`, `PRON-RULES.md`, `pron_hi.js`, `profile.json`, `DECKNAMES.md`, `deviations.json`, `decks.js`; `tools/content/id/profile.json`; `tools/target/pa/profile.json`; `src/app.html` (font, nav and line-height rules).
