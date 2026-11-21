# English speakers learning Punjabi: course profile

Course `en-pa`: Punjabi for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Punjabi, written in Gurmukhi. Machine-readable twin: `tools/target/pa/profile.json`, written from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/pa/respell.js` (§6). The course folder has a `HOLD` file until the lead releases it.

Models used: the finished Hindi and Urdu profiles (`docs/profiles/en-hi.md`, `en-ur.md`), whose romanisation key this course shares letter for letter. Planned lesson list: `docs/roadmaps/pa.json` (the `pa` block in `packs/roadmaps.js`); its 27 ids are kept.

**Evidence tags.**
- **[research-backed]**: an empirical study or a data source opened for this profile, named where it is used. **(abstract only)** says only an abstract or a record was read.
- **[curriculum convention]**: what syllabuses, textbooks, dictionaries, transliteration standards and style guides do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Punjabi**. Every claim of that kind that writers will copy into the course is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Which Punjabi?** Standard Eastern Punjabi of Indian Punjab (the Majhi-based standard of textbooks, newspapers and TV), in the **Gurmukhi** script, with a `pa-IN` voice. Pakistani Punjabi is the same spoken language written in **Shahmukhi** (a Perso-Arabic script, right to left); this course does not teach Shahmukhi (§2.1).
- **Register:** ਤੁਸੀਂ is the default "you" (with its plural verb ਹੋ); ਤੂੰ is taught for friends, children and younger family, and as a trap with strangers; ਜੀ everywhere it is polite. Default greeting **ਸਤ ਸ੍ਰੀ ਅਕਾਲ**, with ਨਮਸਤੇ and ਸਲਾਮ explained as who-uses-which (§2.3–2.4).
- **Tone (§6.1):** Punjabi has a low, a level and a high tone that the spelling shows only through ਘ ਝ ਢ ਧ ਭ and ਹ. The pron line marks tone with **one accent on the vowel** (grave = low, acute = high), placed **by rule from the spelling**: ਘਰ *ghàr*, ਚਾਹ *chā́h*, ਤੁਹਾਡਾ *tuhā̀ḍā*. Letters stay as written, so the pron is still a key to the script; the accent tells the reader that *gh* at the start is said k with a falling pitch, and that *h* after an acute vowel is silent. Agreement with the sources: 68 of 78 toned words (§6.1); the contested cases warn or are listed as decisions.
- **Pronunciation aid (§6):** the en-hi learner romanisation (ā ī ū, ṭ ḍ ṇ ṛ, kh gh ch chh, a tilde for nasal vowels), plus addak doubling (*pakkā*), tippi and bindi rules, and the tone accent. **Generated** by `respell.js`; it throws on anything that is not Gurmukhi and warns at the known weak spots.
- **Biggest traps (§4):** gender and number agreement; postpositions after the noun and the oblique before them (ਮੁੰਡੇ ਨੂੰ); Hindi words and endings carried into Punjabi (ਹੂੰ, ਕੋ, ਸੇ, ਜਾਤਾ); ਹਾਂ / ਹੈ / ਹੋ / ਹਨ; ਮੈਨੂੰ-constructions; ਨੇ in the past; tone, retroflex / dental, aspiration and doubled consonants.
- **Standing rule (§7):** two strands, as in en-hi: **(a) agreement** and **(b) postpositions and the oblique**; in the five script lessons a sound strand (retroflex / dental, aspirated, long / short vowel, vowel sign, low / high tone, tippi / bindi / addak). Keywords tested on 47 sample lines.
- **Lessons and decks (§8, §9):** 27 lessons, the roadmap's 27 items in its order; 18 decks in 5 groups, including five script decks that are ordinary decks and "Traps for English speakers".
- **Typing (§10):** word tiles by default; typing optional, in Gurmukhi or in the romanisation (accents and length marks missing = "almost", which today's engine already does for romanised input). Gurmukhi input has **no** "almost" path yet; that and three other engine items must be built before writers start (§10.8).

## 2. Variant, register and voice

### 2.1 Variant: Standard Eastern Punjabi in Gurmukhi

- The roadmap names "Standard Eastern Punjabi of Indian Punjab (Majhi-based standard), written in Gurmukhi; Shahmukhi (Pakistan) is not taught", on the basis of the Wisconsin SASLI 2025 elementary syllabus and Michigan State University's open textbook *Basic Punjabi*, both of which teach only Gurmukhi [curriculum convention, as stated in the roadmap note; neither was reopened for this profile]. This profile keeps it.
- **Say it plainly to users** (course blurb and lesson 1): "This course teaches standard Punjabi as it is spoken and written in Indian Punjab, in the Gurmukhi script. In Pakistan, Punjabi is the same spoken language, but it is written in another script, Shahmukhi, which is close to Urdu's. Speakers from both sides understand each other; this course teaches only Gurmukhi." [inference: the mutual intelligibility of spoken Eastern and Western Punjabi at this level is the author's knowledge.]
- **Regional forms** (Doabi, Malwai, Puadhi; Pakistani Punjabi words) appear only in card notes, never as accepted answers [inference]. Doabi in particular differs in its treatment of the tonal letters ([Wikipedia, *Doabi dialect*] appeared in search and was not opened).
- **Voice: `ttsLang: "pa-IN"`.** Azure has two Punjabi (India) neural voices, **pa-IN-VaaniNeural** (female) and **pa-IN-OjasNeural** (male), listed on a third-party voice catalogue ([json2video, Punjabi voices](https://json2video.com/ai-voices/languages/punjabi/); the Vaani page says "#1 of 2 Punjabi Azure voices") [curriculum convention; Microsoft's own voice table was not opened, §11]. **Android:** Google's accessibility help lists "Punjabi (India)" among the Google Text-to-Speech languages, with the caveat "Some devices may not support all languages in all regions" ([Google, *Languages supported by TalkBack*](https://support.google.com/accessibility/android/answer/11101402?hl=en)). **iOS:** no Punjabi system voice could be confirmed; an Apple Community thread on iOS 16 asks Apple "to add Punjabi voice to Siri" ([Apple Community](https://discussions-cn-prz.apple.com/thread/254750738)), and Apple's VoiceOver language page redirected and was not read (§11).
- **What happens with no device voice:** the app already shows "No voice for this language on this device" once when `voiceMatch` finds no voice (`src/app.html`, `speak`), and plays a recorded clip instead whenever one exists (`audio/<target>/index.json`). Decision: **record Azure clips (Vaani; Ojas for male lines) for every card target and example row** (request 3, §10.8), as for Urdu, because iPhones are a large share of US learners and probably have no Punjabi voice. `profile.json` sets `voiceMatch: "^pa(?:[-_]|$)"`.

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. Two roadmap details change for other reasons: the roadmap note says tone is "never marked"; the lead's brief asks for tone marks in the romanisation, which this profile adds (§6.1). The roadmap spells the greeting ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ; the course stores ਸਤ ਸ੍ਰੀ ਅਕਾਲ and accepts both (§2.4).

### 2.3 ਤੁਸੀਂ, ਤੂੰ and ਆਪ

| Form | Verb with it | Used for | In the course |
|---|---|---|---|
| ਤੁਸੀਂ tusī̃ | plural forms: ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? / ਰਹਿੰਦੀਆਂ ਹੋ? (to a woman: ਰਹਿੰਦੇ ਹੋ is also common, §11). Command -ਓ: ਬੈਠੋ | strangers, elders, shopkeepers, teachers, colleagues, and also several people | **default** in every prompt, example and dialogue from lesson 6 |
| ਤੂੰ tū̃ | singular: ਤੂੰ ਕਿੱਥੇ ਰਹਿੰਦਾ ਹੈਂ? Command = the stem: ਬੈਠ | close friends of your age, children, younger siblings and cousins, God in prayer; rude to a stranger or an elder | taught in `greetings` and `imperative`; used in friend and family dialogues only when the prompt says so |
| ਆਪ āp | plural | very formal address, speeches, writing; also "oneself" | recognition only: one note in `greetings` |

- [inference] Punjabi has **no middle level** like Hindi's तुम: ਤੁਸੀਂ covers both "polite you" and "you all", and ਤੂੰ is the familiar form. Among friends and in families ਤੂੰ is used much more freely than Hindi तू, so it is taught actively, not only as a trap.
- **Rules for writers.** A prompt whose answer contains "you" says who is addressed when it matters: "(to a friend)" → ਤੂੰ; "(politely)", "(to a shopkeeper)" or no cue → ਤੁਸੀਂ. A bare "you" accepts only ਤੁਸੀਂ forms.
- **Speaker and addressee gender.** Verbs agree with the speaker (ਮੈਂ ਜਾਂਦਾ ਹਾਂ, a man; ਮੈਂ ਜਾਂਦੀ ਹਾਂ, a woman). Every first-person prompt whose answer changes with gender carries a cue: "(a man speaking)", "(a woman speaking)", or a named persona (§9.1). Second-person prompts use the masculine plural ਤੁਸੀਂ … ਹੋ unless the prompt says "(to a woman)"; with that cue both ਰਹਿੰਦੇ ਹੋ and ਰਹਿੰਦੀਆਂ ਹੋ are accepted (usage varies, §11).
- **The respect plural:** respected third persons take plural verbs and ਦੇ: ਮੇਰੇ ਪਿਤਾ ਜੀ ਡਾਕਟਰ ਹਨ, not ਮੇਰਾ ਪਿਤਾ ਜੀ … ਹੈ [inference; same system as Hindi].

### 2.4 Greetings, ਜੀ and thanks in real use

All prons below are generated (§6).

| Punjabi | `pron` | Use | Lesson |
|---|---|---|---|
| ਸਤ ਸ੍ਰੀ ਅਕਾਲ | sat srī akāl | **the default greeting**: hello and goodbye, any time of day; with hands joined optional | `greetings` |
| ਨਮਸਤੇ | namaste | hello; the usual greeting of many Punjabi Hindus, and to non-Punjabi Indians | `greetings` (taught, accepted where "hello" is asked with the cue "(to a Hindu friend)") |
| ਸਲਾਮ / ਅਸਲਾਮ ਅਲੈਕੁਮ | salām / aslām alaikum | the greeting of Muslim speakers (most Pakistani Punjabis) | `greetings` (note) |
| ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ | vā́higurū jī kā ḵhālsā, vā́higurū jī kī fatíh | the formal Sikh greeting, preferred by baptised (Amritdhari) Sikhs | `greetings` (note) |
| ਜੀ | jī | after a name or title (ਸਿੰਘ ਜੀ, ਭੈਣ ਜੀ); ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ = polite yes / no; alone = "yes?" or "pardon?". Never after your own name | `greetings` |
| ਜੀ ਆਇਆਂ ਨੂੰ | jī āiā̃ nū̃ | welcome (to a guest, a sign) | `greetings` |
| ਧੰਨਵਾਦ | dhànnvād | thank you: the standard word | `greetings` |
| ਸ਼ੁਕਰੀਆ / ਥੈਂਕ ਯੂ | shukrīā / thaink yū | thank you: everyday; ਥੈਂਕ ਯੂ is very common in speech | `greetings` (both accepted) |
| ਕੋਈ ਗੱਲ ਨਹੀਂ | koī gall náhī̃ | no problem; it's OK; you're welcome | `greetings` |
| ਮਾਫ਼ ਕਰਨਾ | māf karnā | sorry; excuse me | `greetings` |
| ਫਿਰ ਮਿਲਾਂਗੇ | phir milā̃ge | see you again | `greetings` |
| ਕੀ ਹਾਲ ਹੈ? | kī hāl hai? | how are you? (everyday); ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? is the textbook form | `greetings` |

- [curriculum convention] Wikipedia's article on the phrase gives the Gurmukhi as **ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ**, says it is "now used, often, as a greeting by Sikhs", that Amritdhari Sikhs regard greeting with it as "incorrect usage" because it is the second half of a war cry, and names "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh" as the greeting of Amritdhari Sikhs ([Wikipedia, *Sat Sri Akaal*](https://en.wikipedia.org/wiki/Sat_Sri_Akaal)). It does not discuss ਨਮਸਤੇ, ਸਲਾਮ or Punjabi Hindus.
- **Decision.** ਸਤ ਸ੍ਰੀ ਅਕਾਲ is the default because it is the greeting a learner hears most in Indian Punjab and in the North American and British diaspora, which is mostly Sikh [inference, §11]. The lesson says in one line who uses which: "Sikhs and most Punjabis in India say ਸਤ ਸ੍ਰੀ ਅਕਾਲ; many Punjabi Hindus say ਨਮਸਤੇ; Muslim Punjabis say ਸਲਾਮ. If someone greets you first, answer with the same words."
- **Spelling.** The course stores **ਸਤ ਸ੍ਰੀ ਅਕਾਲ** (the lead's choice, and the everyday spelling; the generator reads it by rule). The religious spelling ਸਤਿ (whose ਿ is not said) is accepted as an answer wherever the greeting is typed, and named in a card note. The roadmap item `pa-greetings` uses ਸਤਿ in its title; the lead may align it (§11).
- **Thanks.** ਧੰਨਵਾਦ and ਸ਼ੁਕਰੀਆ are both taught and both accepted wherever "thank you" is the answer; ਥੈਂਕ ਯੂ is named in a note [inference]. One note: thanking family for small things can sound distant [inference, §11].

### 2.5 Everyday Punjabi, not Hindi and not bookish

**Rule:** use the word a speaker in Indian Punjab uses in neutral, polite speech.
- **Punjabi forms, never the Hindi ones** [inference]: ਹਾਂ (not ਹੂੰ), ਹੈ / ਹਨ / ਹੋ, ਨੂੰ (not ਕੋ), ਤੋਂ (not ਸੇ), ਵਿੱਚ (not ਮੇਂ), ਦਾ / ਦੇ / ਦੀ (not ਕਾ / ਕੇ / ਕੀ), ਕਿੱਥੇ (not ਕਹਾਂ), ਸੀ (not ਥਾ), the habitual in -ਦਾ (ਜਾਂਦਾ, not ਜਾਤਾ). Heritage learners raised on Bollywood make exactly these swaps (§4.3).
- **English loans in Gurmukhi when they are the normal word:** ਸਟੇਸ਼ਨ, ਬੱਸ, ਡਾਕਟਰ, ਫ਼ੋਨ, ਟਿਕਟ, ਹੋਟਲ, ਕਾਰ, ਟਾਈਮ (note), ਸਕੂਲ.
- **Persian and Arabic words that are everyday Punjabi stay:** ਸ਼ੁਕਰੀਆ, ਜ਼ਰੂਰ, ਦੁਕਾਨ, ਖ਼ੁਸ਼, ਸ਼ਹਿਰ, ਦਰਦ, ਮਦਦ.
- **Never Latin letters in Punjabi strings.**

### 2.6 Politeness basics an A1 learner needs

1. ਤੁਸੀਂ + plural verb with anyone you do not know (§2.3).
2. ਜੀ after names and titles and at the end of requests (ਦੱਸੋ ਜੀ, ਬੈਠੋ ਜੀ); ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ.
3. Requests with the -ਓ command + ਜੀ (ਦਿਓ ਜੀ, ਦੱਸੋ ਜੀ), and ਕਿਰਪਾ ਕਰਕੇ ("please") only on signs and in formal requests [inference].
4. Respected people take plural verbs: ਮੇਰੇ ਦਾਦਾ ਜੀ ਆਏ ਹਨ.
5. Address terms: ਭੈਣ ਜੀ ("sister": a woman of your age or a bit older, shopkeepers), ਵੀਰ ਜੀ / ਭਾਜੀ ("brother"), ਅੰਕਲ ਜੀ / ਆਂਟੀ ਜੀ (a friend's parents, older neighbours), ਬੀਬੀ ਜੀ (an older woman), a surname or ਸਿੰਘ / ਕੌਰ + ਜੀ in formal settings [inference].

### 2.7 Voice of the English text

- Plain, friendly US English, US spelling. A `why` is one sentence.
- Punjabi inside English text: in lesson bodies `<b>` around the Gurmukhi, then the romanisation in `<i>` once at first mention in that lesson: `<b>ਘਰ</b> <i>ghàr</i>`. In plain-text fields (`why`, `hint`, notes) write the Gurmukhi bare; add the romanisation in brackets only when the point is the sound ("ਘ (gh, said k with a falling pitch at the start of a word)").
- Never add English endings to Punjabi words ("two postpositions", not "two ਨੂੰs").
- Sample voice lines: "ਕਿਤਾਬ is feminine, so it's ਮੇਰੀ ਕਿਤਾਬ, not ਮੇਰਾ ਕਿਤਾਬ." · "In Punjabi the postposition comes after the noun: ਘਰ ਵਿੱਚ, 'in the house'." · "Nice work! Review these cards tomorrow so they stick."

### 2.8 Punjabi text conventions (every file)

- **Gurmukhi only**, Unicode NFC, spaces between words. Postpositions are written **separately** (ਘਰ ਵਿੱਚ, ਉਸ ਨੇ, ਮੁੰਡੇ ਨੂੰ, ਮੇਰੇ ਕੋਲ), except the fused pronoun forms ਮੈਨੂੰ, ਤੈਨੂੰ, ਸਾਨੂੰ, ਤੁਹਾਨੂੰ [inference].
- **One spelling per word** (the lint compares whole strings): ਨਾਂ (not ਨਾਮ, which a note names), ਵਿੱਚ (not ਵਿਚ), ਇੱਕ (not ਇਕ), ਉੱਤੇ, ਕਿੱਥੇ, ਕਿੱਥੋਂ, ਤੁਹਾਡਾ, ਉਹਨਾਂ and ਇਹਨਾਂ (not ਉਨ੍ਹਾਂ, ਇਨ੍ਹਾਂ), ਕੱਲ੍ਹ, ਥੋੜ੍ਹਾ, ਠੰਢਾ, ਸ਼ੁਕਰੀਆ, ਧੰਨਵਾਦ, ਅਮਰੀਕਾ, ਸਤ ਸ੍ਰੀ ਅਕਾਲ. Choices between common spellings are in §11.
- **Vowel letters** are the single code points ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ, never a carrier + vowel sign (ਅ + ਾ, ੲ + ਿ, ੳ + ੁ), which look the same but are different text; the generator repairs them, the matcher does not yet (§10.3).
- **Tippi and bindi:** ੰ with ਅ-sounds, ਿ, ੁ and ੂ (ਮੁੰਡਾ, ਹਿੰਦੀ, ਤੂੰ, ਮੈਨੂੰ); ਂ with ਾ ੀ ੇ ੈ ੋ ੌ and the vowel letters (ਹਾਂ, ਨਹੀਂ, ਮੈਂ, ਕਿਉਂ) [curriculum convention, as Gurmukhi primers teach it; inference for the exact list, §11].
- **Dotted letters** ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ wherever standard spelling has them (ਸ਼ਹਿਰ, ਖ਼ੁਸ਼, ਜ਼ਰੂਰ, ਫ਼ੋਨ); **ਲ਼ is not written** in course text (ਸੋਲਾਂ, ਕਾਲਾ), and is shown once for recognition in `nasal` [inference: many printed texts and keyboards omit it, §11].
- **Punctuation:** । (the danda, U+0964, shared with Devanagari) ends a statement in card targets, examples, dialogues and `fill` sentences; ? and ! as in English. **No । in accepted answers or tiles** (the engine strips it in typed input, but the validator's own comparison does not, §10.5).
- **Numbers as words** in Punjabi strings (ਪੰਜਾਹ ਰੁਪਏ, ਸਾਢੇ ਤਿੰਨ ਵਜੇ); the generator throws on digits.
- **No Latin letters, no ZWJ / ZWNJ, no Gurmukhi digits, no ੴ, no visarga.**

## 3. Glossary

These are the terms of English-language Punjabi materials [curriculum convention]: MSU's *Basic Punjabi* names the tonal letters and the low, level and high tones ([MSU 1.4](https://openbooks.lib.msu.edu/basicpunjabi/chapter/chapter-1-4-tones/)); Wiktionary's Punjabi transliteration page names ṭippi, bindi, addak, halant and the nuqta letters ([Wiktionary, *Punjabi transliteration*](https://en.wiktionary.com/wiki/Wiktionary:PA_TR)); the grammar terms are those of en-hi, which Punjabi shares. Use each term exactly and always the same way; terms marked **keyword** are standing-rule keywords (§7).

| Term to use | Do not use | Note |
|---|---|---|
| Gurmukhi | Punjabi alphabet (except once as a gloss) | The script. |
| letter; vowel letter; consonant | character, akhar | |
| vowel sign | laga matra (except once, as a gloss), diacritic | "the vowel sign ਾ"; **keyword** |
| inherent a | mukta (except once), schwa | "every consonant carries an a unless a sign changes it" |
| silent a | schwa deletion | "the a that is written but not said: ਕਰਨਾ = karnā" |
| headline | | the line along the top of the letters |
| tippi (ੰ) and bindi (ਂ) | nasal dot, anusvara | **keyword** both. "Before ਡ, tippi is said ṇ" |
| addak (ੱ) | adhak, addhak, gemination mark | "the addak doubles the next letter"; **keyword** |
| doubled consonant | geminate (except once, as a gloss) | ਪੱਕਾ *pakkā* |
| subscript letter (੍ਹ, ੍ਰ, ੍ਵ) | pairin (except once, as a gloss), half letter | "ਹ written under ੜ in ਪੜ੍ਹਨਾ" |
| dotted letter (ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼) | nukta letter (except once), pair bindi | |
| nasal vowel | nasalised vowel | "said through the nose: ਹਾਂ hā̃" |
| tone; low tone, level tone, high tone | tonal accent, pitch accent | **keyword** "low tone", "high tone" |
| tonal letter (ਘ ਝ ਢ ਧ ਭ, and ਹ) | voiced aspirate (except once, as a gloss) | |
| long vowel; short vowel | | **keyword** |
| aspirated; unaspirated ("with a puff of air", "without") | | **keyword** |
| dental; retroflex ("tongue on the back of the teeth"; "tongue curled back") | cerebral | **keyword** both |
| flap (ੜ) | | |
| romanisation | transliteration, "Punglish" | the pron line |
| masculine; feminine | male / female (for words) | **keyword** |
| singular; plural | | **keyword** "plural" |
| agree; agreement | concord | **keyword** |
| -ā ending, -e ending, -ī ending | inflection | ਚੰਗਾ / ਚੰਗੇ / ਚੰਗੀ |
| changing adjective / unchanging adjective | marked / unmarked | ਚੰਗਾ changes; ਲਾਲ does not |
| postposition | preposition, case marker | **keyword** |
| compound postposition | | ਦੇ ਕੋਲ, ਦੇ ਨਾਲ, ਦੇ ਲਈ, ਤੋਂ ਬਾਅਦ |
| oblique form | oblique case (except once), indirect case | "the form a noun takes before a postposition: ਮੁੰਡਾ → ਮੁੰਡੇ ਨੂੰ"; **keyword** "oblique" |
| subject; object | agent, patient | |
| verb at the end | SOV | |
| question word | interrogative | ਕੀ, ਕੌਣ, ਕਿੱਥੇ, ਕਦੋਂ, ਕਿਉਂ, ਕਿਵੇਂ, ਕਿੰਨਾ, ਕਿਹੜਾ |
| yes-no question with ਕੀ | | |
| negative (ਨਹੀਂ, ਨਾ) | | |
| infinitive (the -ਣਾ / -ਨਾ form) | dictionary form (except as a gloss) | ਕਰਨਾ, ਜਾਣਾ |
| stem | root | the infinitive minus -ਣਾ / -ਨਾ: ਕਰ, ਜਾ |
| command form (-ਓ polite, the stem with ਤੂੰ) | imperative (except in the lesson title) | |
| present habitual (-ਦਾ ਹੈ) | simple present | |
| continuous (ਰਿਹਾ ਹੈ) | progressive (except once) | |
| past habitual (-ਦਾ ਸੀ) | | "used to" |
| completed past | simple past, preterite | "perfective" once, as a gloss |
| ਨੇ construction | ergative (except once, as a gloss) | "with a verb that takes an object, in the completed past the doer takes ਨੇ and the verb agrees with the object" |
| ਮੈਨੂੰ-construction | dative subject | ਮੈਨੂੰ ਪਸੰਦ ਹੈ, ਮੈਨੂੰ ਚਾਹੀਦਾ ਹੈ, ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ |
| honorific plural | respect plural | |
| false friend; calque ("word-for-word copy") | | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]: (1) points that occur in nearly every sentence and can be checked in tiled or typed practice; (2) the Punjabi-specific trap of Hindi interference, because the largest learner group meets it daily (§5); (3) lesson-local, sound and vocabulary traps.

**Evidence is thin.** No study of errors by English-speaking learners of Punjabi was found. An ERP study of how Punjabi speakers process subject-verb and object-verb gender agreement appeared in search results and was not opened. The Hindi studies cited in en-hi (Montrul et al. 2019 on case marking by adult L2 and heritage learners of Hindi; Ranjan 2016 on L2 ergativity) are about a very close system and are the best indirect evidence; they were not reopened here. Most of this section is therefore [inference] and in the native-check list (§11).

1. **Gender and number agreement (verbs, adjectives, ਦਾ / ਦੇ / ਦੀ, and the speaker's own gender)**
   - Wrong → right: ਮੇਰਾ ਕਿਤਾਬ → ਮੇਰੀ ਕਿਤਾਬ · ਉਹ ਕੁੜੀ ਬਹੁਤ ਚੰਗਾ ਹੈ → ਉਹ ਕੁੜੀ ਬਹੁਤ ਚੰਗੀ ਹੈ · ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖਦਾ ਹਾਂ said by a woman → ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖਦੀ ਹਾਂ · ਵੱਡਾ ਕਮਰੇ → ਵੱਡੇ ਕਮਰੇ · ਕੁੜੀਆਂ ਆ ਰਹੇ ਹਨ → ਕੁੜੀਆਂ ਆ ਰਹੀਆਂ ਹਨ · ਪਾਣੀ ਠੰਢੀ ਹੈ → ਪਾਣੀ ਠੰਢਾ ਹੈ (ਪਾਣੀ is masculine).
   - [curriculum convention] The roadmap lists agreement among its four hardest points ("Gender on every noun, with adjectives and verbs that agree (ਚੰਗਾ ਮੁੰਡਾ, ਚੰਗੀ ਕੁੜੀ)").
   - Design consequence: strand (a) of the standing rule (§7); every noun card gives its gender in the note; every first-person prompt cues the speaker (§2.3).

2. **Postpositions after the noun, and the oblique before them**
   - Wrong → right: ਵਿੱਚ ਘਰ → ਘਰ ਵਿੱਚ · ਮੁੰਡਾ ਨੂੰ → ਮੁੰਡੇ ਨੂੰ · ਮੇਰਾ ਘਰ ਵਿੱਚ → ਮੇਰੇ ਘਰ ਵਿੱਚ · ਕਮਰਾ ਵਿੱਚ → ਕਮਰੇ ਵਿੱਚ · ਮੈਂ ਨੂੰ → ਮੈਨੂੰ; ਉਹ ਨੇ → ਉਸ ਨੇ · ਮੁੰਡੇ ਲਈ for "for the boys" → ਮੁੰਡਿਆਂ ਲਈ (oblique plural, recognition only).
   - [curriculum convention] The roadmap's hardest point 4 ("Postpositions and the oblique (ਮੁੰਡਾ → ਮੁੰਡੇ ਨੂੰ)") and the SASLI order (postpositions and oblique early) as stated in the roadmap.
   - Design consequence: strand (b) of the standing rule; the `postpositions` and `possessive` lessons; deck cards show nouns inside phrases (ਘਰ ਵਿੱਚ, ਮੇਜ਼ ਉੱਤੇ).

3. **Hindi carried into Punjabi** (heritage learners, and anyone who knows some Hindi from films)
   - Wrong → right: ਮੈਂ ਠੀਕ ਹੂੰ → ਮੈਂ ਠੀਕ ਹਾਂ · ਮੁਝੇ / ਮੈਂ ਕੋ → ਮੈਨੂੰ · ਘਰ ਮੇਂ → ਘਰ ਵਿੱਚ · ਦਿੱਲੀ ਸੇ → ਦਿੱਲੀ ਤੋਂ · ਮੈਂ ਜਾਤਾ ਹਾਂ → ਮੈਂ ਜਾਂਦਾ ਹਾਂ · ਕਹਾਂ → ਕਿੱਥੇ · ਥਾ → ਸੀ · ਤੁਮ → ਤੁਸੀਂ · ਰਾਮ ਕਾ ਘਰ → ਰਾਮ ਦਾ ਘਰ.
   - [inference] The two languages share most grammar and much vocabulary but differ in exactly the small, frequent words. A learner who knows Hindi will produce these without noticing, and a tile set can catch them cheaply.
   - Design consequence: the Hindi form is the **preferred distractor** in `mc`, `or` and `ty` items of stage 2 (ਹੂੰ for ਹਾਂ, ਕੋ for ਨੂੰ, ਸੇ for ਤੋਂ, ਮੇਂ for ਵਿੱਚ); one note per lesson where it applies ("Hindi says ਸੇ; Punjabi says ਤੋਂ"). These items do not count for the standing rule unless they also hinge on agreement or the oblique.

4. **The verb at the end, and question words where the answer goes**
   - Wrong → right: ਮੈਂ ਖਾਂਦਾ ਹਾਂ ਰੋਟੀ → ਮੈਂ ਰੋਟੀ ਖਾਂਦਾ ਹਾਂ · ਤੁਸੀਂ ਰਹਿੰਦੇ ਹੋ ਕਿੱਥੇ? → ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? · ਕੀ at the end for a yes-no question → at the start: ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋ?
   - [inference] Easy in short sentences; errors come back with time and place words.
   - Design consequence: tiles in `or` items; order alone does not count for the standing rule.

5. **ਹਾਂ / ਹੈ / ਹੋ / ਹਨ, and the plural with ਤੁਸੀਂ and respected people**
   - Wrong → right: ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦਾ ਹੈ? → ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? · ਮੈਂ ਹੈ → ਮੈਂ ਹਾਂ · ਅਸੀਂ ਹੈ → ਅਸੀਂ ਹਾਂ · ਮੇਰੇ ਪਿਤਾ ਜੀ ਡਾਕਟਰ ਹੈ → … ਹਨ.
   - Design consequence: the `hona` lesson; strand (a).

6. **ਮੈਨੂੰ-constructions: like, need, know a language, feel, illnesses**
   - Wrong → right: ਮੈਂ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ → ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ · ਮੈਂ ਚਾਹ ਪਸੰਦ ਹਾਂ → ਮੈਨੂੰ ਚਾਹ ਪਸੰਦ ਹੈ · ਮੈਂ ਭੁੱਖਾ ਹਾਂ is possible, but the A1 form is ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ · ਮੈਂ ਠੰਢਾ ਹਾਂ for "I'm cold" → ਮੈਨੂੰ ਠੰਢ ਲੱਗ ਰਹੀ ਹੈ · ਮੇਰੇ ਕੋਲ ਇੱਕ ਭਰਾ ਹੈ → ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ (ਕੋਲ is for things).
   - [curriculum convention] The roadmap lists "want and need" and "compulsion" from the SASLI syllabus.
   - Design consequence: `like-need`, `have`, `must-can`; strand (b) counts these items when the hinge is ਮੈਨੂੰ / ਤੁਹਾਨੂੰ.

7. **ਨੇ in the completed past**
   - Wrong → right: ਮੈਂ ਰੋਟੀ ਖਾਧਾ → ਮੈਂ ਰੋਟੀ ਖਾਧੀ (Punjabi drops ਨੇ with ਮੈਂ and ਤੁਸੀਂ, but the verb still agrees with the object) · ਉਹ ਨੇ → ਉਸ ਨੇ · ਉਸ ਨੇ ਚਾਹ ਪੀਤਾ → ਉਸ ਨੇ ਚਾਹ ਪੀਤੀ · ਮੈਂ ਨੇ ਦਿੱਲੀ ਗਿਆ → ਮੈਂ ਦਿੱਲੀ ਗਿਆ (no object, no ਨੇ).
   - [inference] In standard Punjabi ਮੈਂ, ਅਸੀਂ, ਤੂੰ and ਤੁਸੀਂ take no ਨੇ in the completed past while third persons do (ਉਸ ਨੇ, ਉਹਨਾਂ ਨੇ); this differs from Hindi (मैंने) and must be in the native check (§11).
   - Design consequence: `past` comes late (lesson 24); strand (a) ("agrees with the object").

8. **Tone**
   - Wrong (said) → right: ਘਰ said "ghar" with a breathy g → *ghàr*: k with a falling pitch · ਚਾਹ with a pronounced h → *chā́h*: a high ā, no h · ਘੋੜਾ (horse) and ਕੋੜਾ (whip) said the same → the low tone tells them apart · ਸਿੰਘ said with an aspirated gh → *síngh*: plain g, high i.
   - [curriculum convention] MSU *Basic Punjabi* 1.4 and Wikibooks teach tone as the property of ਘ ਝ ਢ ਧ ਭ and ਹ: low at the start of a word, high after the vowel ([MSU 1.4](https://openbooks.lib.msu.edu/basicpunjabi/chapter/chapter-1-4-tones/); [Wikibooks, *Punjabi/Gurmukhi/Tone*](https://en.wikibooks.org/wiki/Punjabi/Gurmukhi/Tone)). The Wikibooks phonetics page gives the triple ਕੋੜਾ (whip), ਘੋੜਾ (horse, low), ਕੋਹੜਾ (leper, high) ([Wikibooks, *Punjabi/Phonetics*, mirror](https://kwx.liehendr.com/content/wikibooks_en_all_maxi_2021-03/A/Punjabi/Phonetics)).
   - [research-backed, record only] Bowden (2012, BYU thesis) argues that tone is clearly present in speech and that the Gurmukhi spelling predicts it "in certain phonemic environments", not everywhere ([record](https://openaccess.library.uitm.edu.my/Record/ndltd-BGMYU2-oai-scholarsarchive.byu.edu-etd-3982/Description)).
   - Design consequence: the `tones` lesson and deck; the accent in the pron (§6.1); low / high tone as a sound-strand keyword (§7).

9. **Other sounds English does not separate**
   - Wrong → right (said): ਤ (dental) and ਟ (retroflex) merged · ਪਲ (pal) said with an English puff, so it sounds like ਫਲ (phal) · ਫ read as f: ਫਲ is *phal*; the f of ਫ਼ੋਨ has the dot · ਪਤਾ *patā* (address; "I know") and ਪੱਤਾ *pattā* (leaf): the addak is a different word · ਦਿਨ / ਦੀਨ-type short and long vowels · ਹੈ (hai) and ਹਨ, ਹਾਂ (hā̃, nasal) · ੜ (a flap) said as d or r.
   - [inference] The same contrasts as Hindi (en-hi §4.7 cites Werker & Tees on English speakers and the retroflex / dental contrast), plus doubled consonants, which Punjabi spells with the addak and uses far more than Hindi.
   - Design consequence: the script lessons and decks; the sound strand of the standing rule (§7).

10. **Reading Gurmukhi**
    - Wrong → right (read): ਿ written before the consonant read before it (ਕਿ is *ki*) · tippi read as a full n everywhere (ਤੂੰ is *tū̃*, a nasal vowel; but ਮੁੰਡਾ is *muṇḍā*) · the addak skipped (ਪੱਕਾ read *pakā*) · ਹ read aloud in ਚਾਹ, ਸ਼ਹਿਰ · ੳ ਅ ੲ taken for letters that make a sound of their own (they carry vowels).
    - Design consequence: `vowels`, `nasal`, `tones`; the romanisation stays on until the learner turns it off.

11. **Negation**
    - Wrong → right: ਮੈਂ ਜਾਣਦਾ ਨਹੀਂ (marked) → ਮੈਂ ਨਹੀਂ ਜਾਣਦਾ · ਨਹੀਂ ਕਰੋ → ਨਾ ਕਰੋ (don't) · ਮੈਂ ਨਹੀਂ ਹਾਂ ਜਾਂਦਾ → ਮੈਂ ਨਹੀਂ ਜਾਂਦਾ.
    - Design consequence: `questions` (ਨਹੀਂ), `imperative` (ਨਾ).

12. **Politeness slips**
    - Wrong → right: ਤੂੰ to a shopkeeper or an elder → ਤੁਸੀਂ · ਮੇਰਾ ਨਾਂ ਸਾਰਾ ਜੀ ਹੈ → ਮੇਰਾ ਨਾਂ ਸਾਰਾ ਹੈ · ਦਿਓ! with no ਜੀ to an elder → ਦਿਓ ਜੀ · ਬੈਠ! to a guest → ਬੈਠੋ ਜੀ.
    - Design consequence: §2.3–2.6; `greetings`, `imperative`.

13. **False friends and calques**
    - Wrong → right: ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ for "you're welcome" (after thanks) → ਕੋਈ ਗੱਲ ਨਹੀਂ · ਮੈਂ ਪੱਚੀ ਸਾਲ ਹਾਂ → ਮੈਂ ਪੱਚੀ ਸਾਲਾਂ ਦਾ ਹਾਂ / ਦੀ ਹਾਂ · ਮੈਂ ਠੰਢਾ ਹਾਂ → ਮੈਨੂੰ ਠੰਢ ਲੱਗ ਰਹੀ ਹੈ · ਕੱਲ੍ਹ is both "yesterday" and "tomorrow" (the tense decides) · one English "uncle" is ਚਾਚਾ, ਤਾਇਆ, ਮਾਮਾ, ਮਾਸੜ or ਫੁੱਫੜ by which side and whose husband · ਮੇਜ਼ is masculine in Punjabi (feminine in Hindi: ਮੇਜ਼ ਵੱਡਾ ਹੈ).
    - [inference] Teaching lore and the author's knowledge; native check needed (§11).
    - Design consequence: the Traps deck.

14. **Numbers and time**
    - Wrong → right: ਵੀਹ ਪੰਜ for 25 → ਪੱਚੀ (every number from 1 to 100 is its own word) · ਤਿੰਨ ਅਤੇ ਅੱਧਾ ਵਜੇ for 3:30 → ਸਾਢੇ ਤਿੰਨ ਵਜੇ; 1:30 → ਡੇਢ ਵਜੇ; 2:30 → ਢਾਈ ਵਜੇ · ਲੱਖ and ਕਰੋੜ for big sums (recognition).
    - Design consequence: `numbers` and `time`; the Numbers and money deck.

## 5. Learners: who, why, what first

**Who**
- [research-backed] The US Census Bureau's language table (B16001, 2021), as cited on the Wikipedia page *Punjabi Americans*, counts **318,588** people who speak Punjabi at home, up from 243,773 in 2010; about half live in California (142,450 in the 2017–21 table), then New York, Washington, New Jersey and Texas ([Wikipedia mirror, *Punjabi Americans*](https://wiki.riteme.site/wiki/Punjabi_Americans)). The Census Bureau's own map of Punjabi speakers by metro area (ACS 2012–16) was opened but gives no totals ([Census, Punjabi map](https://www.census.gov/content/dam/Census/library/visualizations/2017/comm/punjabi.pdf)).
- [inference] Canada and the UK have larger Punjabi communities than the US relative to population; the course's English is American, but the content (gurdwara, family, food) serves all three. No Canadian or UK figure was opened (§11).
- [inference] The groups, probably in this order of size:
  - **heritage learners** (mostly Sikh families, also Punjabi Hindu families) who understand some spoken Punjabi, often mixed with Hindi from films, but cannot read Gurmukhi or speak with confidence to grandparents;
  - **partners and in-laws** of Punjabi speakers;
  - **music and culture fans** (Punjabi pop and bhangra, food, weddings);
  - **travellers** (Amritsar and the Golden Temple, family visits), and a few **career learners** (health care and social work in Punjabi-speaking areas of California and British Columbia; interpreting).

**Why they study**
- No survey of adult Punjabi learners' motives was found (§11). [inference] Family and identity, a partner's family, faith (reading Gurmukhi is also the door to the Guru Granth Sahib, though the course teaches modern Punjabi), music and travel.

**What they need first** [inference]
1. **Gurmukhi, well enough to use the course**: five short script lessons, as the roadmap plans and as MSU's chapter 1 does (script and tone first).
2. **Survival politeness:** ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਤੁਸੀਂ, ਜੀ, ਧੰਨਵਾਦ, ਮਾਫ਼ ਕਰਨਾ, ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ, introducing yourself.
3. **Family words for both sides** (ਦਾਦਾ / ਨਾਨਾ, ਚਾਚਾ / ਮਾਮਾ, ਭੂਆ / ਮਾਸੀ), with ਜੀ and the respect plural: what heritage learners and partners use first (`possessive`).
4. **Numbers, prices, the time;** ordering food; getting around.
5. **Keeping Hindi out** (§4.3): heritage learners need the Punjabi forms of the small words early, so stage 2 contrasts them.

**Check of the roadmap's order** [curriculum convention, from the roadmap's own basis]
- The roadmap follows the SASLI order (Gurmukhi; to be; questions; agreement; postpositions and oblique; negation; want and need; past; future; comparison; time; compulsion; can), and moves clock time, having and directions before the past and future as survival topics, adding the continuous. This profile keeps that order unchanged: it already puts the survival topics a US adult needs (greetings, introductions, numbers, food, directions) before the past tense, and the cap of 28 lessons leaves room for one addition at most, which nothing here needs badly enough (§8).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] Wiktionary's Punjabi transliteration writes ā ī ū, ṭ ḍ ṇ ṛ, aspirates with h (kh, gh, ch, jh), the nuqta letters, and treats ਘ ਝ ਢ ਧ ਭ and ਹ as tonal; it does not mark tone in the romanisation ([Wiktionary, *Punjabi transliteration*](https://en.wiktionary.com/wiki/Wiktionary:PA_TR)). Wikipedia's Punjabi IPA key marks **high tone with an acute and low tone with a grave** (ਕੋੜ੍ਹਾ *koṛhā*, high; ਘੋੜਾ *ghoṛā*, low) and notes that in Gurmukhi "ih and uh are usually read as /éː/ … and /óː/" ([Wikipedia mirror, *Help:IPA/Punjabi*](https://wiki.riteme.site/wiki/Help:IPA/Punjabi)). The accent convention here is that one.
- [curriculum convention] MSU *Basic Punjabi* 1.4 teaches tone as a property of the letters ([MSU 1.4](https://openbooks.lib.msu.edu/basicpunjabi/chapter/chapter-1-4-tones/)); a Wikibooks lesson says plainly that tone "is not written using any symbol or letter" in Gurmukhi ([Wikibooks](https://en.wikibooks.org/wiki/Punjabi/Gurmukhi/Tone)).
- [research-backed] Bhatia (1975), *The Evolution of Tones in Punjabi*: the vowel after an initial voiced aspirate takes low tone, a medial or final aspirate gives high tone to the vowel before; medially there are "two competing tendencies" (tone on the preceding syllable only if it is accented, or always on the preceding vowel, the second being stronger), ਨਹੀਂ varies between speakers, and some causatives move the tone to the suffix; he concludes tones are no longer fully predictable from aspiration ([Bhatia 1975, *Studies in the Linguistic Sciences* 5:2](https://www.ideals.illinois.edu/items/26704/bitstreams/91307/data.pdf)).
- [research-backed, record only] Bowden (2012): the spelling predicts tone "in certain phonemic environments" (§4.8).

**Decision.** `pron: "required"`. The pron is **en-hi's learner romanisation, letter for letter**, plus three Punjabi additions (addak doubling, tippi and bindi, and a **tone accent**), **generated by `tools/target/pa/respell.js`**, never typed by hand. `node tools/target/pa/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `warnings`, `EXC`, `VER`, `DEC`); `respell(text, {notone: true})` drops the accents.

**Letters as written, tone as an accent.** Two designs were built and compared:
1. *Sound letters*: ਘਰ *kàr*, ਭਾਈ *pā̀ī*, ਸ਼ਹਿਰ *shaír*, ਚਾਹ *chā́* (what a speaker says).
2. *Written letters + accent* (**chosen**): ਘਰ *ghàr*, ਭਾਈ *bhā̀ī*, ਸ਼ਹਿਰ *sháhir*, ਚਾਹ *chā́h*.

Design 2 wins on four counts. (a) **The matcher.** Romanised typing compares the learner's Latin text with the respelled answer through `romaLoose`, which drops accents and macrons. Measured with a copy of it (§10.5): with design 1, a learner who types *ghar*, *dhanvad*, *shahir* or *bahut* is marked wrong, and *kar* is "almost" for both ਘਰ (house) and ਕਰ (do!); with design 2, *ghar*, *shahir*, *bahut*, *tuhada*, *singh*, *chah* are "almost" and *kar* is wrong for ਘਰ. (b) **The pron stays a key to the script**, as en-hi's does ("Not shown by design" in en-hi §6.1: the e-like a beside ह). (c) **Robustness:** where the tone rule is wrong, design 1 also gets the letters wrong; design 2 only misplaces an accent. (d) **The brief** asks for the en-hi system with aspirates. The cost: the reader must learn what the accent does to the letters, which the `tones` lesson teaches in one table (§6.6).

### 6.1 The tone rule, and how far it can be trusted

**Tonal events** are ਘ ਝ ਢ ਧ ਭ, any ਹ that is not the first letter of the word, and the subscript ੍ਹ. Each puts one accent on one vowel (grave = low, acute = high). Five rule classes:

| Class | Context | Accent | Examples (generated) | Said | Source |
|---|---|---|---|---|---|
| I | ਘ ਝ ਢ ਧ ਭ, or consonant + ੍ਹ, at the start of a word | low, on the vowel right after it | ਘਰ *ghàr*, ਘੋੜਾ *ghòṛā*, ਭਾਈ *bhā̀ī*, ਝੰਡਾ *jhàṇḍā*, ਧੰਨਵਾਦ *dhànnvād*, ਨ੍ਹਾਤਾ *nhā̀tā* | k ch ṭ t p + falling pitch (ਨ੍ਹ: n) | MSU 1.4; Wikibooks; Bhatia |
| — | ਹ at the start of a word | none | ਹੱਥ *hatth*, ਹੈ *hai*, ਹਾਂ *hā̃* | h | MSU 1.4; Wikibooks |
| C | after a vowel, when the letter closes the syllable or the vowel before is long or closed | high, on the vowel before | ਸਿੰਘ *síngh*, ਕੰਧ *kándh*, ਬੋਝਾ *bójhā*, ਅੱਧਾ *áddhā*, ਪੜ੍ਹਨਾ *páṛhnā*, ਚਾਹ *chā́h*, ਵੀਹ *vī́h*, ਚਾਲ੍ਹੀ *chā́lhī*, ਸੋਹਣਾ *sóhṇā* | g j ḍ d b; ਹ silent | MSU (final); Wikibooks (final and medial) |
| H | ਹ after a short vowel: ਿ + ਹ; ੁ + ਹ closing the syllable; a + ਹਿ / ਹੁ | high, on that vowel | ਇਹ *íh*, ਉਹ *úh*, ਕਿਹੜਾ *kíhṛā*, ਸਿਹਤ *síhat*, ਸ਼ਹਿਰ *sháhir*, ਬਹੁਤ *báhut*, ਪਹਿਲਾ *páhilā* | é, ó, kéṛā, sét, shɛ́r, bɔ́t, pɛ́lā | MSU; Wikibooks; Wikipedia IPA note |
| A | a short open vowel, the letter, then ā | low, on the ā | ਤੁਹਾਡਾ *tuhā̀ḍā*, ਕਹਾਣੀ *kahā̀ṇī*, ਪੜ੍ਹਾਈ *paṛhā̀ī*, ਜਗ੍ਹਾ *jaghā̀* | h kept (colloquially dropped) | Wiktionary (ਤੁਹਾਡਾ, ਕਹਾਣੀ); Wikibooks low list (ਪੜ੍ਹਾਈ) |
| S | a short open vowel, the letter, then any other vowel | high, on the short vowel | ਸਹੀ *sáhī*, ਕਹੀ *káhī*, ਨਹੀਂ *náhī̃*, ਮਹੀਨਾ *máhīnā*, ਵਧੀਆ *vádhīā* | | MSU (ਸਹੀ, ਕਹੀ); Bhatia ("stronger tendency"; ਨਹੀਂ varies) |

- Classes **A** and **S** **warn** unless the word is in `VER` (agrees with a named source) or `DEC` (a frequent word whose accent is this profile's decision, pending the native check: ਨਹੀਂ, ਰਹੀ, ਰਹੇ, ਰਿਹਾ, ਕਿਹਾ, ਰਹੀਆਂ).
- **Class decision, no warning:** a tonal letter inside a word after a closed syllable (ਅੱਧਾ *áddhā*, ਸਿੱਧਾ, ਠੰਢਾ, ਬੁੱਢਾ, ਸੰਘਣਾ) gets a **high** tone. MSU calls these medial letters "level" (and the roadmap note says "level otherwise"); Wikibooks gives high for medial ਬੋਝਾ, and MSU's own transliterations put its tone apostrophe after the vowel in these words exactly as in its high-tone finals. Warning on the whole class would flag dozens of common words with no way to resolve them before the native check, so it is one decision, first in §11.
- **Two tonal letters in one word** (ਘੰਟਾਘਰ, ਘਬਰਾਹਟ): only the first gets an accent (the pattern allows one per word), with a warning. The brief's fallback (no accent plus a note) was weighed for A and S and rejected for frequent words, because a pron without an accent on ਨਹੀਂ or ਤੁਹਾਡਾ would tell the learner "level tone", which every source contradicts; their entries are listed first in the native check (§11).
- **What the pron does not show** (taught in `tones`): the devoicing (*gh* = k at the start), the silent ਹ after an acute vowel, and the vowel colouring of class H (*ah-i* ≈ ɛ, *ah-u* ≈ ɔ, *ih* ≈ é, *uh* ≈ ó).

**How reliable** (self-measured; no native check yet, §11):
- **Test set 3, tone, from the sources only** (78 words: the tone examples on the MSU page and the two Wikibooks pages as the fetches listed them, the Wiktionary entries with IPA, the Wikipedia IPA-key pair, and two of Bhatia's examples; each with the tone and, where stated, the vowel its source gives; the classes H, S and A were written after reading these same sources, so this is agreement with the sources, not a held-out test). A first version of 70 words agreed on 65; the advisor review added eight words the pages also give (and dropped two whose tone the source did not state), and the full set agrees on **68 of 78**.

| Class | Words | Agree | Disagreements |
|---|---|---|---|
| I (initial) | 25 | 23 | ਭਰਾ: Wiktionary /pɾɑ̀ː/ has the low tone on ā (it drops the first vowel); ਧੜਕ "throb": Bhatia puts the low tone on the accented second syllable. The pron puts it on the first vowel in both (*bhàrā*, *dhàṛak*) |
| initial ਹ | 4 | 4 | |
| C | 24 | 16 | ਸੰਘਣਾ, ਕੱਢਣਾ, ਚੰਭਲਣਾ, ਮਝਲਾ, ਆਧੁਨਿਕ: MSU calls the medial letters "level" (the class decision above); ਚੜ੍ਹ, ਕਿੰਨ੍ਹਾ, ਜਿੰਨ੍ਹਾ: one Wikibooks list calls them low (for ਚੜ੍ਹ against that page's own final-position rule); the rule gives high |
| H | 19 | 19 | |
| S | 3 | 3 | (ਪ੍ਰਭੂ from Bhatia) |
| A | 3 | 3 | |

- An earlier version moved a word-initial low tone to the next syllable when the first was light. It matched Wiktionary's ਭਰਾ and would have matched Bhatia's ਧੜਕ, but disagreed with MSU's ਘੜੀ (tone written on the first syllable), so it was dropped: the accent now always sits on the vowel right after the tonal letter. Two sources against one: a native speaker should decide (§11).
- **Test set 1, schwa, nasals and addak** (109 words and sentences of course vocabulary, expected outputs written before the first run): **3 misses on the first run**, all fixed by rules: ਰਹਿੰਦਾ (tippi after a silent ਹ), ਦੋਸਤ (Punjabi writes no virama: the a between ਸ / ਸ਼ and a final stop goes, *dost*, while ਵਕਤ keeps *vakat*), ਲੱਭਣਾ (the a after a doubled consonant goes, *labbhṇā*).
- **Test set 2** (129 items: verb forms, family, colours, numbers, food, places; written after set 1 was fixed, by the same author, so not independent): **6 mismatches** on the first run: 4 were errors in the expected values (ਠੰਢਾ and ਜਲੰਧਰ have a high tone the expectation forgot; ਅੰਮ੍ਰਿਤਸਰ has a doubled m, *ammritsar*, which the tippi spells; a typo), 1 led to a rule change (ਲੁਧਿਆਣਾ: low on the ā after ਿ, warned), 1 is warned and left (ਪਰੌਂਠਾ: bindi on au before ṭh, nasal vowel or n?).
- **Number words** (34: 1–20, the tens, ਸੌ, ਡੇਢ, ਢਾਈ, ਸਵਾ, ਪੌਣੇ, ਸਾਢੇ): no throws, no warnings; ਵੀਹ *vī́h*, ਤੀਹ *tī́h*, ਚਾਲ੍ਹੀ *chā́lhī*, ਪੰਜਾਹ *panjā́h*, ਡੇਢ *ḍéḍh*, ਢਾਈ *ḍhā̀ī*, ਸਾਢੇ *sā́ḍhe*. 21–99 were not run (§11).
- **Silent-error classes that remain** (no warning): (1) causatives and other derived verbs where the tone moves to the suffix (Bhatia: ਪੜ੍ਹ high, its causative low on the suffix); the rule gives ਪੜ੍ਹਾਉਣਾ class A (low on ā), which is right by Bhatia, but other derivatives are untested; (2) compounds where a tonal letter starts the second part (ਬੇਘਰ: the rule treats the ਘ as medial), and compound names where the a before a cluster goes (ਹਰਪ੍ਰੀਤ came out *haraprīt* with no warning in the final sweep; the ਪ੍ਰੀਤ names are now in `EXC` as *harprīt*, *gurprīt*, *jasprīt*, *manprīt*; other compound names need a check); (3) English loans spelled with ਹ (ਹੋਟਲ is initial and fine); (4) bindi on a long vowel before a stop in an English loan other than those in `EXC` (ਆਂਟੀ *āṇṭī*, ਥੈਂਕ *thaink*); others warn.
- **Adding words:** writers never edit a pron. When the generator throws or warns, the writer reports the word; the lead adds it to `EXC` (wrong output), `VER` (right, with a source) or `DEC` (decided) and runs `node tools/target/repron.js pa`.

### 6.2 The key (exact format)

| Gurmukhi | pron | Note for learners |
|---|---|---|
| ਅ / inherent a | a | like the u in "but"; often silent (§6.1, en-hi rules) |
| ਆ ਾ | ā | as in "father", held long |
| ਇ ਿ / ਈ ੀ | i / ī | "sit" / "seat" |
| ਉ ੁ / ਊ ੂ | u / ū | "put" / "boot" |
| ਏ ੇ | e | "ay" in "say", without the glide |
| ਐ ੈ | ai | the e of "bet", held long (not "eye") |
| ਓ ੋ | o | "oh", without the glide |
| ਔ ੌ | au | "awe" |
| ਕ ਖ ਗ ਘ ਙ | k kh g gh ṅ | kh: with a puff. gh: see tone |
| ਚ ਛ ਜ ਝ ਞ | ch chh j jh ñ | after ੱ: cch, cchh (ਅੱਛਾ *acchhā*) |
| ਟ ਠ ਡ ਢ ਣ | ṭ ṭh ḍ ḍh ṇ | dot below = tongue curled back (retroflex) |
| ਤ ਥ ਦ ਧ ਨ | t th d dh n | tongue on the teeth (dental); th is t + a puff |
| ਪ ਫ ਬ ਭ ਮ | p ph b bh m | ph is p + a puff, never f |
| ਯ ਰ ਲ ਵ ੜ | y r l v ṛ | ਰ tapped; ਵ between v and w; ੜ a flap |
| ਸ ਹ | s h | ਹ: see tone |
| ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ ਲ਼ | sh ḵh ġ z f ḷ | dotted letters (ਲ਼ not written in the course, §2.8) |
| subscript ੍ਹ, ੍ਰ, ੍ਵ | h, r, v after the consonant | ਪੜ੍ਹਨਾ *páṛhnā*, ਸ੍ਰੀ *srī* |
| ੱ (addak) | the next consonant doubled; first half unaspirated | ਪੱਕਾ *pakkā*, ਅੱਖ *akkh*, ਅੱਧਾ *áddhā* |
| ੰ / ਂ before a stop | n / ṇ (before ṭ ṭh ḍ ḍh) / m (before p ph b bh) | ਪੰਜਾਬੀ *panjābī*, ਮੁੰਡਾ *muṇḍā*, ਅੰਬ *amb* |
| ੰ before ਨ ਮ ਣ | the same nasal again | ਕੰਮ *kamm*, ਧੰਨਵਾਦ *dhànnvād* |
| ੰ / ਂ elsewhere; ਂ on a long vowel before -ਦਾ / -ਗਾ | a tilde on the vowel: ã ā̃ ĩ ī̃ ũ ū̃ ẽ õ, aĩ, aũ | ਹਾਂ *hā̃*, ਮੈਂ *maĩ*, ਤੂੰ *tū̃*, ਜਾਂਦਾ *jā̃dā*, ਕਰਾਂਗਾ *karā̃gā* |
| tone | grave (low) or acute (high) on the last letter of the vowel, after any tilde | *ghàr*, *chā́h*, *bhaìṇ*, *mū̃́h* |
| । ॥ | . | |

**Format rules:** one pron word per Punjabi word, single spaces; a hyphen stays a hyphen; **all lowercase**; punctuation attached to the word before; quotes and brackets dropped; **NFC** (à á è é ì í ò ó ù ú ã ĩ ũ ẽ õ precomposed; ā̀ ā́ ā̃ and the like are the macron letter + U+0300 / U+0301 / U+0303, tilde before tone); **at most one tone accent per word**.

### 6.3 `pronPattern`

Built by `respell.js`'s `pattern()`:

```
^(?!.*(?:aa|ii|uu|ee|c(?!c?h)|[^āīū]̃|[^āīūãĩũẽõ̃][̀́]|^[̀́̃]|[àáèéìíòóùú̀́][^ .,?!:;-]*[àáèéìíòóùú̀́]))[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵḷãĩũẽõàáèéìíòóùú̀́̃]+(?:-[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵḷãĩũẽõàáèéìíòóùú̀́̃]+)*[.,?!:;]?(?: [abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵḷãĩũẽõàáèéìíòóùú̀́̃]+(?:-[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵḷãĩũẽõàáèéìíòóùú̀́̃]+)*[.,?!:;]?)*$
```

It is en-hi's pattern with ḷ and the ten accented vowels added, combining grave and acute allowed only after ā ī ū or a tilde, and a ban on two tone accents in one word. It rejects *aap kaise ho*, capitals, double spaces, a space before ?, a danda, digits, a decomposed *a* + tilde, and *ghàrà*. It cannot see a misplaced accent or a wrong silent a: the generator is the guarantee. Tested with and without the `u` flag (`validate.js` uses `u`, `repron.js` does not); every pron in this profile passes both.

### 6.4 Twenty worked examples (all generated, all pass `pronPattern` both ways)

| # | Punjabi | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | ਸਤ ਸ੍ਰੀ ਅਕਾਲ | `sat srī akāl` | hello | final a silent; subscript ੍ਰ |
| 2 | ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? | `tusī̃ kivẽ ho?` | How are you? | bindi at the end = nasal vowel |
| 3 | ਮੈਂ ਠੀਕ ਹਾਂ। | `maĩ ṭhīk hā̃.` | I'm fine. | retroflex ṭh; । → . |
| 4 | ਕਰਨਾ | `karnā` | to do | medial a silent |
| 5 | ਪੰਜਾਬੀ | `panjābī` | Punjabi | tippi before ਜ = n |
| 6 | ਮੁੰਡਾ | `muṇḍā` | boy | tippi before ਡ = ṇ |
| 7 | ਕੰਮ | `kamm` | work | tippi before ਮ doubles it |
| 8 | ਪੱਕਾ | `pakkā` | sure | addak doubles k |
| 9 | ਅੱਛਾ | `acchhā` | good; OK | addak before ਛ = cchh |
| 10 | ਘਰ | `ghàr` | house | class I: low tone, said k |
| 11 | ਕਰ | `kar` | do! | level tone (the pair of 10) |
| 12 | ਘੋੜਾ / ਕੋੜਾ / ਕੋਹੜਾ | `ghòṛā` / `koṛā` / `kóhṛā` | horse / whip / leper | low / level / high |
| 13 | ਭਾਈ | `bhā̀ī` | brother | class I on a long vowel: ā + macron + grave |
| 14 | ਚਾਹ | `chā́h` | tea | class C: high tone, ਹ silent |
| 15 | ਸਿੰਘ | `síngh` | Singh | class C: high tone, ਘ = plain g |
| 16 | ਪੜ੍ਹਨਾ | `páṛhnā` | to read; to study | subscript ੍ਹ: high tone |
| 17 | ਸ਼ਹਿਰ | `sháhir` | city | class H: said shɛ́r |
| 18 | ਤੁਹਾਡਾ | `tuhā̀ḍā` | your | class A: low tone on ā |
| 19 | ਨਹੀਂ | `náhī̃` | no; not | class S (decided, §11) |
| 20 | ਖ਼ੁਸ਼ | `ḵhush` | happy | dotted letters ḵh, sh |

### 6.5 Card front, and hiding the romanisation

- **Card front:** the Gurmukhi, large. Under it the pron line, **shown by default**: the script lessons teach every letter, but tone and the silent a are not visible in the script.
- **Hideable:** the per-course setting "Romanisation: always / tap to reveal / off" requested for en-hi (request 6 there; §10.8 here). Suggested prompt after lesson 14 (`postpositions`). Heritage learners who read Gurmukhi may switch it off from day one, and should keep the `Tones` deck on "tap to reveal" rather than off.
- **Practice items carry no pron** (PRACTICE-SPEC). Exception, as in en-hi: in the five script lessons, English prompts may name a sound with its romanisation ("Build ghàr (house)"); answers are always Gurmukhi.

### 6.6 What the script lessons must teach, so the aid can be read and later dropped

1. `vowels`: ā ī ū (long), e ai o au as single sounds (ai is not "eye"), the inherent a, the silent final a (ਕਰ *kar*).
2. `letters-1`: h after a letter = a puff (kh, chh); **gh and jh are tonal letters**: a preview line, "the mark over the vowel tells you how to say them" (full rule in `tones`).
3. `letters-2`: the dot below = retroflex; t d n plain = dental; ph is never f; ṛ is a flap; v.
4. `nasal`: doubled letters (*pakkā*); the tilde = nasal vowel; tippi or bindi before a stop = n / ṇ / m; the dotted letters.
5. `tones`: one table that the course points back to:

| You see | Say | Example |
|---|---|---|
| gh jh ḍh dh bh at the start, vowel with ` | k ch ṭ t p, and let the pitch fall on that vowel | ਘਰ *ghàr* ≈ "kàr" |
| a vowel with ´, then h | rise on the vowel; the h is silent | ਚਾਹ *chā́h* ≈ "chā́" |
| a vowel with ´, then gh jh ḍh dh bh | rise on the vowel; then plain g j ḍ d b | ਸਿੰਘ *síngh* ≈ "síng" |
| *áhi*, *áhu*, *íh*, *úh* | ɛ́ (as in "bet", high), ɔ́ ("awe", high), é, ó | ਸ਼ਹਿਰ *sháhir* ≈ "shɛ́r", ਉਹ *úh* ≈ "ó" |
| ` on a vowel after h | the pitch falls on that vowel | ਤੁਹਾਡਾ *tuhā̀ḍā* |

6. Every lesson body: "The romanisation is a crutch: read the Gurmukhi first and glance down only to check."

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things, as in en-hi.
- **(a) Agreement.** The verb, the adjective and ਦਾ / ਦੇ / ਦੀ agree in gender and number with their noun: -ā (masculine singular), -e (masculine plural, oblique, and ਤੁਸੀਂ), -ī (feminine), -īā̃ (feminine plural: ਰਹੀਆਂ, ਚੰਗੀਆਂ); ਹਾਂ / ਹੈ / ਹੋ / ਹਨ with the subject; the speaker's own gender in the first person (ਮੈਂ ਜਾਂਦਾ / ਜਾਂਦੀ ਹਾਂ); in the completed past of a verb with an object, agreement with the object (ਮੈਂ ਰੋਟੀ ਖਾਧੀ).
- **(b) Postpositions and the oblique.** The postposition comes **after** the noun (ਘਰ ਵਿੱਚ, ਸਟੇਸ਼ਨ ਦੇ ਨੇੜੇ), and the noun, adjective or possessive before it takes the **oblique** form (ਮੁੰਡੇ ਨੂੰ, ਮੇਰੇ ਘਰ ਵਿੱਚ, ਵੱਡੇ ਸ਼ਹਿਰ ਵਿੱਚ); pronouns have their own forms (ਮੈਨੂੰ, ਤੁਹਾਨੂੰ, ਉਸ ਨੇ, ਉਸ ਨੂੰ).

**Why these two.** They occur in almost every sentence from `hona` on, have no English counterpart, and can be checked mechanically with a twin form as the distractor (§4.1, §4.2, §4.5–4.7); the roadmap lists both among its four hardest points. They are linked, as in Hindi: an oblique noun (ਮੁੰਡੇ) looks like a masculine plural, and possessives agree and go oblique at once.
- **Not chosen:** verb-final order (every `or` item practises it anyway); ਨੇ (one lesson's point; its agreement half is strand (a), and Punjabi's ਮੈਂ / ਤੁਸੀਂ forms have no ਨੇ to test); Hindi interference (§4.3: the preferred distractor everywhere, but not a keyword, because "Hindi says ਸੇ" is a vocabulary point that can be right or wrong independently of grammar).

**The script stage.** The five script lessons have no grammar to agree or decline. In those sets only, the hinges are **sound strand** items: dental / retroflex (ਤ / ਟ), aspirated / unaspirated (ਕ / ਖ, ਪ / ਫ), long / short vowel (ਿ / ੀ), the vowel sign itself, **tippi / bindi / addak** (ਪਤਾ / ਪੱਤਾ), and **low / high tone** (ਘ / ਕ, ਚਾਹ). One sound `mc` item per later set is recommended, not counted.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 `or` items** and **2 `ty` items** hinge on the rule, and their `why` names it with a keyword.

**What counts as hinging** (mechanical): as en-hi §7. `or`, strand (a): `a` contains an agreeing form and `x` its gender or number twin (ਮੇਰੀ / ਮੇਰਾ; ਹਨ / ਹੈ; ਜਾਂਦੀ / ਜਾਂਦਾ; ਖਾਧੀ / ਖਾਧਾ). `or`, strand (b): `a` contains noun or pronoun + postposition with the oblique, and `x` the direct form (ਮੁੰਡਾ for ਮੁੰਡੇ; ਮੇਰਾ for ਮੇਰੇ; ਮੈਂ for ਮੈਨੂੰ; ਉਹ for ਉਸ). `ty`: `a[0]` contains the same, `x` the twin, and **the twin must not be accepted** (the prompt cues speaker or addressee, §2.3). Script stage: `or` tiles are the syllables of one word and `x` holds the sound twin; a one-word `ty` is written syllable-spaced with the unspaced word as the second answer (`ਘ ਰ|ਘਰ`) and two or more distractors; the `why` spells the word unspaced.

**Hinges in the script stage** (letters taught by that lesson only; distractor in brackets, keyword in the why):
- `vowels` (vowel letters and ਕ with its signs): or "Build āo (come!)" ਆ ਓ (x ਅ, "long vowel"); or "Build kaī (several)" ਕ ਈ (x ਇ, "long vowel"). ty "Type āī (came, said of a woman)" `ਆ ਈ|ਆਈ` (x ਅ ਇ, "long vowel"); ty "Type kākā (little boy)" `ਕਾ ਕਾ|ਕਾਕਾ` (x ਕ ਕੀ, "vowel sign").
- `letters-1` (+ ਸ ਹ, the k and ch rows): or "Build chāchā (uncle)" ਚਾ ਚਾ (x ਛਾ, "unaspirated"); or "Build sāg (greens)" ਸਾ ਗ (x ਘ, "unaspirated"). ty "Type chāchā (uncle)" `ਚਾ ਚਾ|ਚਾਚਾ` (x ਛਾ ਜਾ, "unaspirated"); ty "Type sāg (greens)" `ਸਾ ਗ|ਸਾਗ` (x ਘ ਕ, "unaspirated"). No made-up words: with only these letters, real two-syllable words are few, so `mc` items carry the rest.
- `letters-2`: or "Build ṭamāṭar (tomato)" ਟ ਮਾ ਟ ਰ (x ਤ, "retroflex"); or "Build tārā (star)" ਤਾ ਰਾ (x ਟਾ, "dental"). ty "Type phal (fruit)" `ਫ ਲ|ਫਲ` (x ਪ ਬ, "aspirated"); ty "Type kuṛī (girl)" `ਕੁ ੜੀ|ਕੁੜੀ` (x ਡੀ ਰੀ, "retroflex").
- `nasal`: or "Build pakkā (sure)" ਪੱ ਕਾ (x ਪ, "addak"); or "Build muṇḍā (boy)" ਮੁੰ ਡਾ (x ਮੂੰ, "short vowel"). ty "Type kamm (work)" `ਕੰ ਮ|ਕੰਮ` (x ਕ ਕਾ, "tippi"); ty "Type pattā (leaf)" `ਪੱ ਤਾ|ਪੱਤਾ` (x ਪ ਟਾ, "addak"). The addak stays on the first tile (ਪੱ), where it is written; `respell` throws on that lone tile, so `gen.js` gives the spaced answer no romanised twin (it warns) and only the unspaced second answer gets one, which is what a learner types.
- `tones`: or "Build ghòṛā (horse)" ਘੋ ੜਾ (x ਕੋ, "low tone"); or "Build síngh (Singh)" ਸਿੰ ਘ (x ਗ, "high tone"). ty "Type ghàr (house)" `ਘ ਰ|ਘਰ` (x ਕ ਗ, "low tone"); ty "Type bhā̀ī (brother)" `ਭਾ ਈ|ਭਾਈ` (x ਪਾ ਬਾ, "low tone").

**Later lessons** (two hinges each at least): `greetings` (a) ਤੁਸੀਂ … ਹੋ (x ਹੈ), ਮੈਂ ਠੀਕ ਹਾਂ (x ਹੈ); `hona`, `gender`, `adjectives` (a) throughout; `intro`, `questions` (a) with ਕਿਹੋ ਜਿਹਾ / ਜਿਹੀ and speaker-cued verbs, (b) with ਕਿੱਥੋਂ, ਅਮਰੀਕਾ ਤੋਂ; `possessive`, `postpositions` (b) mostly (ਕਮਰੇ ਵਿੱਚ, ਮੇਰੇ ਭਰਾ ਨਾਲ), (a) through ਦਾ / ਦੇ / ਦੀ; `like-need`, `have`, `food`, `must-can` (b) through ਮੈਨੂੰ / ਤੁਹਾਨੂੰ (x ਮੈਂ / ਤੁਸੀਂ) and ਮੇਰੇ ਕੋਲ (x ਮੇਰਾ), (a) through ਚਾਹੀਦਾ / ਚਾਹੀਦੀ agreeing with the thing needed; tense lessons (a) through -ਦਾ / -ਦੀ / -ਦੇ, ਰਿਹਾ / ਰਹੀ / ਰਹੇ, ਸੀ / ਸਨ, -ਗਾ / -ਗੀ / -ਗੇ; `past` (a) object agreement (ਰੋਟੀ ਖਾਧੀ, x ਖਾਧਾ), (b) ਉਸ ਨੇ (x ਉਹ).

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bplural\b|\bpostpositions?\b|\boblique\b|\bafter the noun\b|\bretroflex\b|\bdental\b|\b(?:un)?aspirated\b|\b(?:long|short) vowels?\b|\bvowel signs?\b|\b(?:low|high) tone\b|\btippi\b|\bbindi\b|\baddak\b
```

en-hi's keywords plus "low tone", "high tone", "tippi", "bindi", "addak". Not keywords: "tone" alone, "gender", "nasal", "Hindi", "verb at the end", "comes after". **Tested** (node, `new RegExp(keywords, "i")`): 47 of 47 sample `why` lines as expected (27 that should match, such as "ਘ at the start of a word gives a low tone: ਘਰ.", "The addak doubles the next letter: ਪੱਕਾ.", "ਤੁਹਾਡਾ changes to ਤੁਹਾਡੇ before a postposition.", "With ਨੇ the verb agrees with the object: ਰੋਟੀ ਖਾਧੀ."; 20 that should not, such as "ਵਿੱਚ goes after the place: ਘਰ ਵਿੱਚ.", "The gender is wrong here.", "Listen: the pitch falls here.", "Toned words are tricky.", "ਕੱਲ੍ਹ means both yesterday and tomorrow; the tense decides."). The harness is `kw.js` in the author's scratch folder; the lines are those of en-hi §7 adapted, plus seven for tone and the Gurmukhi signs.

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4–§6):
- **Kept: all 27 items.** Ids lose the `pa-` prefix; each appears exactly once in a `roadmap` field. **No lessons added**: the cap is 28 and every addition considered (a separate family lesson, a Hindi-versus-Punjabi lesson) fits inside an existing one (`possessive` carries family; every stage-2 lesson carries its Hindi contrast, §4.3).
- **Reordered (one move):** `vowels` goes **first**, before `letters-1`. With the roadmap's order, `letters-1` and `letters-2` would have only the inherent a to build words with, so their practice sets would be letter-naming drills; with the vowel signs known, `letters-1` can already build ਚਾਚਾ, ਸਾਗ, ਚਾਹ, ਖਾ, ਘੀ, and `letters-2` ਟਮਾਟਰ, ਫਲ, ਕੁੜੀ, ਭਾਈ. en-hi's script stage does the same. ੳ ਅ ੲ (the vowel carriers) move from `letters-1` into `vowels`, where they belong. Traditional Gurmukhi primers start with ੳ ਅ ੲ ਸ ਹ and the letter rows [curriculum convention, inference for the primer order], so the chart order of the consonants is kept inside the letter lessons.
- **Renamed:** titles name the English-speaker point or give a gloss (table). `nasal` keeps its id and becomes "Tippi, bindi, addak and dotted letters"; `si` "ਸੀ, ਸਨ: was, were, and used to"; `must-can` "Must and can: ਪੈਂਦਾ, ਸਕਦਾ".
- **Widened:** `greetings` also teaches who uses ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ and ਸਲਾਮ, and ਤੂੰ for friends; `possessive` carries the family words for both sides; `have` also teaches ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ for relatives and ਮੈਨੂੰ ਬੁਖ਼ਾਰ ਹੈ for illnesses; `imperative` also teaches ਨਾ for "don't" and ਜੀ in requests.
- **Stages** (unchanged sizes): "Gurmukhi, sounds and greetings" 6, "First sentences" 8, "Daily life" 8, "Past and future" 5.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Gurmukhi, sounds and greetings** | | | |
| 1 | `vowels` | Vowel letters and vowel signs | pa-vowels | ੳ ਅ ੲ as carriers; the ten vowel letters; the vowel signs on ਕ (ਕਾ ਕਿ ਕੀ ਕੁ ਕੂ ਕੇ ਕੈ ਕੋ ਕੌ); the headline; the inherent a and the silent final a; ਿ written before, said after; how the romanisation marks long vowels. Trap: short and long vowels heard as one; ai read as "eye". | Vowel signs |
| 2 | `letters-1` | Letters 1: the k and ch rows | pa-letters-1 | ਸ ਹ, ਕ ਖ ਗ ਘ ਙ, ਚ ਛ ਜ ਝ ਞ in chart order, with their names (ਕੱਕਾ, ਖੱਖਾ…) in a table; aspirated against unaspirated; ਘ ਝ flagged as tonal letters (preview). Trap: an English puff on every k; ਘ read as a breathy g. | Letters 1: k and ch rows |
| 3 | `letters-2` | Letters 2: retroflex and dental, the p row and the rest | pa-letters-2 | ਟ ਠ ਡ ਢ ਣ against ਤ ਥ ਦ ਧ ਨ; ਪ ਫ ਬ ਭ ਮ; ਯ ਰ ਲ ਵ ੜ. Trap: ਤ / ਟ merged; ਫ read as f; ਥ as "th" in "think"; ੜ as d. | Letters 2: ṭ, t and p rows, and the rest |
| 4 | `nasal` | Tippi, bindi, addak and dotted letters | pa-nasal | Tippi and bindi (which goes with which vowel; n / ṇ / m before a stop; doubling before ਨ ਮ; nasal vowel elsewhere); the addak (ਪਤਾ / ਪੱਤਾ); the subscript letters ੍ਹ ੍ਰ ੍ਵ; ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼, and ਲ਼ for recognition. Trap: the addak skipped; tippi read as a full n in ਤੂੰ. | Tippi, bindi and addak |
| 5 | `tones` | Tones: low, level and high | pa-tones | The three tones; the spelling rule (§6.1) and the table of §6.6; minimal pairs ਘੋੜਾ / ਕੋੜਾ / ਕੋਹੜਾ, ਘਰ / ਕਰ, ਘੜੀ / ਕੜੀ; ਚਾਹ, ਸਿੰਘ, ਸ਼ਹਿਰ, ਤੁਹਾਡਾ; after this, tone is practised by listening and by the accent, never by numbers. Trap: saying the gh and the h; flat pitch everywhere. | Tones |
| 6 | `greetings` | Greetings: ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਜੀ and ਤੁਸੀਂ | pa-greetings | ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ, ਸਲਾਮ and who uses which; ਜੀ; ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ; ਮਾਫ਼ ਕਰਨਾ; ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ; ਕੋਈ ਗੱਲ ਨਹੀਂ; ਫਿਰ ਮਿਲਾਂਗੇ; ਤੁਸੀਂ (default) vs ਤੂੰ (§2.3–2.4). Trap: ਤੂੰ to an elder; ਜੀ after your own name; ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ for "you're welcome". | Greetings and courtesy |
| | | **Stage 2: First sentences** | | | |
| 7 | `hona` | Pronouns and ਹੋਣਾ: am, is, are | pa-hona | ਮੈਂ ਹਾਂ, ਤੂੰ ਹੈਂ, ਤੁਸੀਂ ਹੋ, ਉਹ / ਇਹ ਹੈ, ਅਸੀਂ ਹਾਂ, ਉਹ ਹਨ; ਇਹ and ਉਹ as this / that / he / she / it; verb last. Trap: ਮੈਂ ਹੈ; ਤੁਸੀਂ ਹੈ; Hindi ਹੂੰ for ਹਾਂ. | About me |
| 8 | `intro` | Introducing yourself: ਮੇਰਾ ਨਾਂ … ਹੈ | pa-intro | ਮੇਰਾ ਨਾਂ … ਹੈ; ਤੁਹਾਡਾ ਨਾਂ ਕੀ ਹੈ?; ਤੁਸੀਂ ਕਿੱਥੋਂ ਹੋ? ਮੈਂ ਅਮਰੀਕਾ ਤੋਂ ਹਾਂ; ਮੈਂ ਥੋੜ੍ਹੀ ਪੰਜਾਬੀ ਬੋਲਦਾ / ਬੋਲਦੀ ਹਾਂ (fixed phrase). Trap: Hindi ਸੇ for ਤੋਂ; ਜੀ after your own name. | About me |
| 9 | `questions` | ਨਹੀਂ and question words | pa-questions | ਕੀ at the start for yes-no questions; ਕੀ, ਕੌਣ, ਕਿੱਥੇ, ਕਿਹੜਾ / ਕਿਹੜੀ, ਕਿਵੇਂ, ਕਦੋਂ, ਕਿਉਂ where the answer goes; ਨਹੀਂ before the verb. Trap: English question order; Hindi ਕਹਾਂ; ਕਿਹੜਾ not agreeing. | Questions and connectors |
| 10 | `gender` | Gender and plurals | pa-gender | Every noun is masculine or feminine; -ā nouns (ਮੁੰਡਾ, ਕਮਰਾ) and -ī nouns (ਕੁੜੀ) as hints, with exceptions (ਪਾਣੀ, ਆਦਮੀ masculine; ਕਿਤਾਬ, ਗੱਲ feminine; ਮੇਜ਼ masculine); plurals ਮੁੰਡਾ → ਮੁੰਡੇ, ਕੁੜੀ → ਕੁੜੀਆਂ, ਕਿਤਾਬ → ਕਿਤਾਬਾਂ, ਘਰ unchanged. Trap: guessing gender from meaning; ਪਾਣੀ ਠੰਢੀ. | Home and daily things |
| 11 | `adjectives` | Adjectives that agree: ਚੰਗਾ, ਚੰਗੇ, ਚੰਗੀ | pa-adjectives | Changing adjectives (-ā / -e / -ī / -īā̃) and unchanging ones (ਲਾਲ, ਸੋਹਣਾ changes, ਖ਼ੁਸ਼ does not); colours; ਬਹੁਤ. Trap: ਚੰਗਾ with a feminine noun; agreement forgotten after ਹੈ. | Describing things |
| 12 | `possessive` | ਦਾ / ਦੇ / ਦੀ: my, your, and family | pa-possessive | X ਦਾ / ਦੇ / ਦੀ Y agrees with Y; ਮੇਰਾ, ਤੇਰਾ, ਤੁਹਾਡਾ, ਉਸ ਦਾ, ਸਾਡਾ; family on both sides (ਦਾਦਾ / ਨਾਨਾ, ਚਾਚਾ / ਮਾਮਾ, ਭੂਆ / ਮਾਸੀ), ਜੀ and the respect plural (ਮੇਰੇ ਪਿਤਾ ਜੀ ਡਾਕਟਰ ਹਨ). Trap: agreeing with the owner; Hindi ਕਾ / ਕੀ. | Family and people |
| 13 | `numbers` | Numbers 1 to 100, and prices | pa-numbers | ਇੱਕ to ਦਸ, ਗਿਆਰਾਂ to ਵੀਹ, the tens, and the numbers between as words to recognise; ਸੌ, ਹਜ਼ਾਰ, ਲੱਖ (recognition); ਰੁਪਏ, ਡਾਲਰ; ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ? Trap: building 25 from 20 + 5. | Numbers and money |
| 14 | `postpositions` | Postpositions and the oblique: ਘਰ ਵਿੱਚ, ਮੁੰਡੇ ਨੂੰ | pa-postpositions | ਵਿੱਚ, ਉੱਤੇ, ਤੋਂ, ਨੂੰ, ਨਾਲ, ਤੱਕ after the noun; masculine -ā nouns change to -e before them (ਕਮਰੇ ਵਿੱਚ), possessives and adjectives too (ਮੇਰੇ ਘਰ ਵਿੱਚ); pronoun forms ਮੈਨੂੰ, ਤੁਹਾਨੂੰ, ਉਸ ਨੂੰ. Trap: ਵਿੱਚ ਘਰ; ਕਮਰਾ ਵਿੱਚ; Hindi ਮੇਂ, ਕੋ, ਸੇ. | Getting around |
| | | **Stage 3: Daily life** | | | |
| 15 | `habitual` | Present habitual: ਕਰਦਾ ਹਾਂ | pa-habitual | Stem + ਦਾ / ਦੇ / ਦੀ / ਦੀਆਂ + ਹੋਣਾ (ਮੈਂ ਕੰਮ ਕਰਦਾ / ਕਰਦੀ ਹਾਂ; after a vowel -ਂਦਾ: ਜਾਂਦਾ, ਖਾਂਦਾ); habits and facts; ਰੋਜ਼, ਕਦੇ ਕਦੇ, ਹਮੇਸ਼ਾ. Trap: the speaker's gender; Hindi ਜਾਤਾ. | Time, days and routine |
| 16 | `imperative` | Requests and commands: ਬੈਠੋ, ਦੱਸੋ ਜੀ | pa-imperative | -ਓ with ਤੁਸੀਂ (ਬੈਠੋ, ਦੱਸੋ, ਆਓ; irregular ਦਿਓ, ਲਓ), the stem with ਤੂੰ (ਆ, ਬੈਠ), ਜੀ to soften; ਨਾ for "don't"; ਕਿਰਪਾ ਕਰਕੇ on signs. Trap: the bare stem to an elder; ਨਹੀਂ ਕਰੋ. | Health and help |
| 17 | `like-need` | ਪਸੰਦ, ਚਾਹੀਦਾ: like and need | pa-like-need | ਮੈਨੂੰ ਚਾਹ ਪਸੰਦ ਹੈ; ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ / ਇੱਕ ਕਮੀਜ਼ ਚਾਹੀਦੀ ਹੈ (agrees with the thing); ਮੈਨੂੰ ਪੰਜਾਬੀ ਆਉਂਦੀ ਹੈ; ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ. Trap: ਮੈਂ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ (§4.6). | Shopping and the market |
| 18 | `food` | Ordering food and the market | pa-food | ਇੱਕ ਚਾਹ ਦਿਓ ਜੀ, ਦੋ ਪਰੌਂਠੇ, ਬਿੱਲ ਲਿਆਓ; ਕਿੰਨੇ ਪੈਸੇ?, ਬਹੁਤ ਮਹਿੰਗਾ ਹੈ, ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ; spice (ਤਿੱਖਾ, ਮਿਰਚ ਘੱਟ); ਭੈਣ ਜੀ / ਵੀਰ ਜੀ to the seller. Trap: counted food not agreeing (ਦੋ ਪਰੌਂਠੇ); bare commands. | Food and drink |
| 19 | `continuous` | Continuous: ਕਰ ਰਿਹਾ ਹਾਂ | pa-continuous | Stem + ਰਿਹਾ / ਰਹੇ / ਰਹੀ / ਰਹੀਆਂ + ਹੋਣਾ; ਤੁਸੀਂ ਕੀ ਕਰ ਰਹੇ ਹੋ?; not with knowing and liking. Trap: ਕਰਦਾ for "doing right now"; ਰਿਹਾ not agreeing. | Home and daily things |
| 20 | `time` | Clock time and days | pa-time | ਕਿੰਨੇ ਵਜੇ ਹਨ?; ਤਿੰਨ ਵਜੇ, ਸਵਾ, ਸਾਢੇ, ਪੌਣੇ, ਡੇਢ, ਢਾਈ; days (ਸੋਮਵਾਰ ਨੂੰ); ਸਵੇਰੇ, ਦੁਪਹਿਰੇ, ਸ਼ਾਮ ਨੂੰ, ਰਾਤ ਨੂੰ. Trap: ਤਿੰਨ ਅਤੇ ਅੱਧਾ; days without ਨੂੰ. | Time, days and routine |
| 21 | `have` | Having: ਮੇਰੇ ਕੋਲ … ਹੈ | pa-have | Things: ਮੇਰੇ ਕੋਲ ਕਾਰ ਹੈ; relatives: ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ, ਉਸ ਦੀਆਂ ਦੋ ਧੀਆਂ ਹਨ; illnesses: ਮੈਨੂੰ ਬੁਖ਼ਾਰ ਹੈ; no verb "to have". Trap: ਮੈਂ ਇੱਕ ਕਾਰ ਹੈ; ਮੇਰੇ ਕੋਲ ਇੱਕ ਭਰਾ ਹੈ. | Shopping and the market |
| 22 | `directions` | Directions and transport | pa-directions | ਸਿੱਧੇ ਜਾਓ, ਸੱਜੇ / ਖੱਬੇ ਮੁੜੋ, X ਦੇ ਕੋਲ / ਸਾਹਮਣੇ / ਪਿੱਛੇ / ਨੇੜੇ, ਕਿੰਨੀ ਦੂਰ ਹੈ?; bus, auto, train phrases; ਇੱਥੇ ਰੋਕੋ. Trap: postposition before the noun. | Getting around |
| | | **Stage 4: Past and future** | | | |
| 23 | `si` | ਸੀ, ਸਨ: was, were, and used to | pa-si | ਸੀ for ਮੈਂ, ਤੂੰ, ਉਹ (one person), and in everyday speech for ਅਸੀਂ and ਤੁਸੀਂ; ਸਨ for ਉਹ (several, or one respected person); the written ਸਾਂ / ਸੋ for recognition (§11); the past habitual (ਮੈਂ ਦਿੱਲੀ ਰਹਿੰਦਾ ਸੀ), the past continuous (ਕਰ ਰਿਹਾ ਸੀ). Trap: Hindi ਥਾ; ਸੀ with a plural subject. | About me |
| 24 | `past` | Past: completed actions and ਨੇ | pa-past | Completed past: ਗਿਆ / ਗਏ / ਗਈ, ਆਇਆ, ਕੀਤਾ, ਖਾਧਾ, ਪੀਤਾ, ਦਿੱਤਾ, ਲਿਆ; with a verb that takes an object, ਉਸ ਨੇ / ਉਹਨਾਂ ਨੇ and agreement with the object (ਉਸ ਨੇ ਚਾਹ ਪੀਤੀ); ਮੈਂ and ਤੁਸੀਂ without ਨੇ but still agreeing with the object (ਮੈਂ ਰੋਟੀ ਖਾਧੀ). Trap: agreeing with the doer; ਨੇ with ਜਾਣਾ. | Traps for English speakers |
| 25 | `future` | Future: ਕਰਾਂਗਾ, ਕਰਾਂਗੀ | pa-future | ਮੈਂ ਕਰਾਂਗਾ, ਤੂੰ ਕਰੇਂਗਾ, ਉਹ ਕਰੇਗਾ, ਅਸੀਂ ਕਰਾਂਗੇ, ਤੁਸੀਂ ਕਰੋਗੇ, ਉਹ ਕਰਨਗੇ, and the -ਗੀ forms (ਮੈਂ ਕੱਲ੍ਹ ਜਾਵਾਂਗਾ / ਜਾਵਾਂਗੀ); ਕੱਲ੍ਹ + future = tomorrow. Trap: ਕੱਲ੍ਹ read as yesterday; -ਗਾ / -ਗੀ not matching the speaker. | Time, days and routine |
| 26 | `compare` | Comparing: ਨਾਲੋਂ, ਸਭ ਤੋਂ | pa-compare | X Y ਨਾਲੋਂ / ਤੋਂ ਵੱਡਾ ਹੈ; ਸਭ ਤੋਂ ਵੱਡਾ; ਜ਼ਿਆਦਾ, ਘੱਟ; the adjective still agrees. Trap: English "more … than" word by word (ਜ਼ਿਆਦਾ ਵੱਡਾ ਨਾਲੋਂ). | Describing things |
| 27 | `must-can` | Must and can: ਪੈਂਦਾ, ਸਕਦਾ | pa-must-can | ਮੈਨੂੰ ਜਾਣਾ ਪੈਂਦਾ ਹੈ / ਪਵੇਗਾ (have to), ਮੈਨੂੰ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ (should), ਮੈਂ ਜਾ ਸਕਦਾ / ਸਕਦੀ ਹਾਂ (can); ਕੀ ਮੈਂ … ਸਕਦਾ ਹਾਂ? to ask. Trap: ਮੈਂ ਜਾਣਾ ਪੈਂਦਾ ਹੈ; ਸਕਦਾ with an infinitive. | Health and help |

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges (sound strand in lessons 1–5).
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: agreement of ਦਾ / ਦੇ / ਦੀ, the oblique before a postposition, ਹੈ / ਹੋ with ਤੁਸੀਂ, ਮੈਨੂੰ-constructions, a Hindi-form distractor (§4.3), and after lesson 24 object agreement in the past.
- Accepted answers list the natural variants: with and without the subject pronoun where Punjabi drops it (only in replies), ਧੰਨਵਾਦ and ਸ਼ੁਕਰੀਆ, ਸਤ and ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, both word orders where both are neutral.
- Lesson bodies are in English with the Punjabi in `<b>` and the romanisation in `<i>` at first mention (§2.7). Example rows `{{ex:Punjabi|pron|English}}` take the generated pron.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Punjabi in Gurmukhi (§2.8): a letter, a word, or a short sentence ending in । ? or !.
- `pron`: generated (§6). Never typed.
- `meaning`: short American English. Nouns give their gender in the note, not in the meaning.
- `note`: one English line, or empty: gender, the trap, the other word (formal / everyday), a literal gloss, the Hindi form to avoid.

**Groups, in order:**

| Group | Decks |
|---|---|
| Script and sounds | Vowel signs · Letters 1: k and ch rows · Letters 2: ṭ, t and p rows, and the rest · Tippi, bindi and addak · Tones |
| First steps | Greetings and courtesy · Family and people · About me · Numbers and money |
| Everyday life | Food and drink · Time, days and routine · Home and daily things · Describing things |
| Out and about | Getting around · Shopping and the market · Health and help |
| Conversation | Questions and connectors · Traps for English speakers |

**The script decks are ordinary decks** (no letter-drill machine needed, §10.1). Rules:
- **Every target is something the voice can read:** a vowel letter, a consonant letter, a consonant with a vowel sign, or a word; never a bare vowel sign, tippi, bindi, addak or a subscript letter alone (the generator throws on a bare sign).
- **Lone consonant letters:** Gurmukhi letters have names (ਕੱਕਾ *kakkā*, ਖੱਖਾ *khakkhā*, ਘੱਗਾ *ghàggā* …) and a voice may read a lone ਕ as its name or as the syllable *ka* [inference; untested, request 11]. The pron of a lone letter is the syllable (*ka*); the lesson table gives the names; the meaning names the sound ("the letter ka (k, no puff of air)"). If the device check shows the voice reading names, record the syllables as clips (request 3) and keep the targets.
- **Meanings must differ** within a deck (the validator checks).
- Letter-card notes give a word built only from letters taught by then (Letters 1: ਕਾਕਾ, ਖਾ, ਚਾਹ, ਘੀ, ਸਾਗ; Letters 2 may use any basic letter).
- `Vowel signs` (18): the ten vowel letters (ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ) and eight signs on ਕ (ਕਾ ਕਿ ਕੀ ਕੁ ਕੂ ਕੇ ਕੈ ਕੌ). ੳ and ੲ are never card targets (they carry vowels and cannot be said alone; the generator throws on them); they are taught in the lesson, as is ਕੋ.
- `Letters 1` (17): ਸ ਹ ਕ ਖ ਗ ਘ ਚ ਛ ਜ ਝ, plus words that contrast them (ਚਾਚਾ, ਸਾਗ, ਚਾਹ, ਖਾ, ਘੀ, ਛੇ, ਜੀ); ਙ ਞ in the lesson only.
- `Letters 2` (18): ਟ ਠ ਡ ਢ ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਵ ੜ as letters or short words.
- `Tippi, bindi and addak` (18): words: ਮੁੰਡਾ, ਪੰਜ, ਕੰਮ, ਤੂੰ, ਹਾਂ, ਮੈਂ, ਨਹੀਂ, ਪੱਕਾ, ਪੱਤਾ, ਇੱਕ, ਅੱਛਾ, ਪੜ੍ਹਨਾ, ਸ੍ਰੀ, ਸ਼ਹਿਰ, ਖ਼ੁਸ਼, ਜ਼ਰੂਰ, ਫ਼ੋਨ, ਸ਼ੁਕਰੀਆ.
- `Tones` (16): ਘੋੜਾ, ਕੋੜਾ, ਘਰ, ਕਰ, ਘੜੀ, ਕੜੀ, ਭਾਈ, ਧੀ, ਝੰਡਾ, ਚਾਹ, ਸਿੰਘ, ਵੀਹ, ਉਹ, ਬਹੁਤ, ਤੁਹਾਡਾ, ਕੱਲ੍ਹ (avoid ਕੋਹੜਾ, "leper", on a card; it may appear in the lesson's triple).
- **Traps for English speakers** (about 18): about 6 calques (ਕੋਈ ਗੱਲ ਨਹੀਂ vs ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਮੈਨੂੰ ਠੰਢ ਲੱਗ ਰਹੀ ਹੈ, ਮੈਂ ਪੱਚੀ ਸਾਲਾਂ ਦਾ ਹਾਂ, ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ, ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ, ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ); about 6 grammar traps (ਮੈਂ ਰੋਟੀ ਖਾਧੀ, ਉਸ ਨੇ ਚਾਹ ਪੀਤੀ, ਨਾ ਕਰੋ, ਮੇਰੇ ਪਿਤਾ ਜੀ ਹਨ, ਮੁੰਡੇ ਨੂੰ, ਮੇਜ਼ masculine); about 6 words and Hindi forms (ਕੱਲ੍ਹ, ਤੂੰ, the uncles, ਹਾਂ not ਹੂੰ, ਤੋਂ not ਸੇ, ਵਿੱਚ not ਮੇਂ).

**Five sample cards per deck** (every `pron` generated by `respell.js` and checked against `pronPattern`; the scratch file is `cards.tsv`):

**1. Vowel signs** (Script and sounds). Each vowel letter, and the vowel signs on ਕ. Lessons: `vowels`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਆ | ā | the vowel ā (long) | As in "father", held long. As a vowel sign: ਾ (ਕਾ). |
| ਕਿ | ki | ki (short i) | The sign ਿ is written before ਕ but said after it. |
| ਕੀ | kī | kī (long ī) | Long ī. ਕੀ is also the word "what?" |
| ਕੈ | kai | kai (ai as in "bet") | Not "kye": ai is a long e, as in "bet". |
| ਕੌ | kau | kau (au as in "awe") | Not "cow": au is the vowel of "awe". |

**2. Letters 1: k and ch rows** (Script and sounds). ਸ ਹ and the k and ch rows, one letter per card; tonal ਘ ਝ flagged. Lessons: `letters-1`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਕ | ka | the letter ka (k, no puff of air) | As in "skin", not "kin". Word: ਕਾਕਾ, little boy. Its name is ਕੱਕਾ. |
| ਖ | kha | the letter kha (k with a puff of air) | Word: ਖਾ, eat! Not "k" + "h" said apart. |
| ਘ | ghà | the letter gha (low tone) | A tonal letter: at the start of a word, said k with a falling pitch. Word: ਘੀ, ghee. |
| ਚ | cha | the letter cha (ch, no puff of air) | Word: ਚਾਹ, tea. ਛ (chh) has the puff. |
| ਝ | jhà | the letter jha (low tone) | A tonal letter: at the start of a word, said ch with a falling pitch (lesson Tones). |

**3. Letters 2: ṭ, t and p rows, and the rest** (Script and sounds). Retroflex against dental, the p row, ਯ ਰ ਲ ਵ ੜ. Lessons: `letters-2`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਟ | ṭa | the letter ṭa (tongue curled back) | Retroflex: curl the tongue tip back. Word: ਟਮਾਟਰ, tomato. |
| ਤ | ta | the letter ta (tongue on the teeth) | Dental: the tongue touches the back of the teeth. Word: ਤਾਰਾ, star. |
| ਫ | pha | the letter pha (p with a puff) | Not f: ਫਲ is phal, fruit. The f sound is ਫ਼, with a dot. |
| ਭ | bhà | the letter bha (low tone) | At the start of a word, said p with a falling pitch: ਭਾਈ (bhā̀ī), brother. |
| ੜ | ṛa | the letter ṛa (a flap) | Flick the tongue forward from the roof of the mouth. Word: ਕੁੜੀ, girl. |

**4. Tippi, bindi and addak** (Script and sounds). Words that show each sign, the subscript letters and the dotted letters. Lessons: `nasal`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮੁੰਡਾ | muṇḍā | boy | Tippi before ਡ is said ṇ: muṇḍā. Masculine. |
| ਹਾਂ | hā̃ | yes | Bindi on ਾ makes a nasal vowel: no real n at the end. |
| ਪੱਕਾ | pakkā | sure; ripe | The addak ੱ doubles the next letter: pakkā, not pakā. |
| ਕੰਮ | kamm | work | Tippi before ਮ doubles it: kamm. Masculine. |
| ਸ਼ੁਕਰੀਆ | shukrīā | thank you (everyday) | ਸ਼ is ਸ with a dot: sh. Also ਧੰਨਵਾਦ (more formal). |

**5. Tones** (Script and sounds). Low, level and high tone in minimal pairs and frequent words. Lessons: `tones`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਘੋੜਾ | ghòṛā | horse | Low tone: start low and let the pitch fall. ਘ is said k here. |
| ਕੋੜਾ | koṛā | whip | Level tone. Only the pitch tells it from ਘੋੜਾ. |
| ਘਰ | ghàr | house; home | Low tone: say k and let the pitch fall. ਕਰ (level tone) means "do!" |
| ਚਾਹ | chā́h | tea | High tone on ā; the ਹ is not said. |
| ਸਿੰਘ | síngh | Singh (a Sikh name) | High tone on i; ਘ is a plain g here. |

**6. Greetings and courtesy** (First steps). Greetings by community, ਜੀ, thanks, sorry, goodbye, ਤੁਸੀਂ and ਤੂੰ. Lessons: `greetings`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਸਤ ਸ੍ਰੀ ਅਕਾਲ | sat srī akāl | hello (the Punjabi greeting) | To anyone, any time of day; also goodbye. Often written ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ. |
| ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? | tusī̃ kivẽ ho? | How are you? (polite) | ਤੁਸੀਂ always takes ਹੋ. Also common: ਕੀ ਹਾਲ ਹੈ? |
| ਮੈਂ ਠੀਕ ਹਾਂ। | maĩ ṭhīk hā̃. | I'm fine. | The usual answer. Add ਜੀ to be extra polite: ਮੈਂ ਠੀਕ ਹਾਂ ਜੀ. |
| ਧੰਨਵਾਦ | dhànnvād | thank you (polite) | The standard word. ਸ਼ੁਕਰੀਆ and ਥੈਂਕ ਯੂ are common too. |
| ਕੋਈ ਗੱਲ ਨਹੀਂ। | koī gall náhī̃. | No problem. / You're welcome. | The answer to thanks or to sorry. |

**7. Family and people** (First steps). Both sides of the family, ਜੀ and the respect plural, address terms. Lessons: `possessive`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮਾਂ | mā̃ | mother | Feminine. Also ਮੰਮੀ in many families. With respect: ਮਾਤਾ ਜੀ. |
| ਪਿਤਾ ਜੀ | pitā jī | father (respectful) | Takes plural verbs: ਮੇਰੇ ਪਿਤਾ ਜੀ ਡਾਕਟਰ ਹਨ. Also ਡੈਡੀ. |
| ਭਰਾ | bhàrā | brother | Masculine. Low tone at the start. Also ਵੀਰ (affectionate). |
| ਭੈਣ | bhaìṇ | sister | Feminine. Low tone: ਭ is said p. |
| ਦਾਦੀ ਜੀ | dādī jī | grandmother (father's mother) | Mother's mother: ਨਾਨੀ ਜੀ. Punjabi names each side. |

**8. About me** (First steps). Name, origin, home, languages, work, and was / were. Lessons: `hona`, `intro`, `si`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮੇਰਾ ਨਾਂ ਸਾਰਾ ਹੈ। | merā nā̃ sārā hai. | My name is Sarah. | ਨਾਂ is masculine, so ਮੇਰਾ. Also spelled ਨਾਮ. |
| ਮੈਂ ਅਮਰੀਕਾ ਤੋਂ ਹਾਂ। | maĩ amrīkā tõ hā̃. | I'm from America. | ਤੋਂ = from, after the place. |
| ਤੁਸੀਂ ਕਿੱਥੋਂ ਹੋ? | tusī̃ kitthõ ho? | Where are you from? | ਕਿੱਥੋਂ = from where. Polite ਤੁਸੀਂ with ਹੋ. |
| ਮੈਂ ਥੋੜ੍ਹੀ ਪੰਜਾਬੀ ਬੋਲਦੀ ਹਾਂ। | maĩ thóṛhī panjābī boldī hā̃. | I speak a little Punjabi. (a woman speaking) | A man says ਥੋੜ੍ਹੀ ਪੰਜਾਬੀ ਬੋਲਦਾ ਹਾਂ. ਪੰਜਾਬੀ is feminine. |
| ਮੈਂ ਵਿਦਿਆਰਥੀ ਸੀ। | maĩ vidiārthī sī. | I was a student. (a man speaking) | ਸੀ is "was" for ਮੈਂ, ਉਹ and ਤੂੰ. |

**9. Numbers and money** (First steps). 1–100 as words, ਸੌ, ਹਜ਼ਾਰ, ਲੱਖ (recognition), rupees and dollars, prices. Lessons: `numbers`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਇੱਕ | ikk | one | ਇੱਕ ikk: the addak doubles k. |
| ਪੰਜ | panj | five | Tippi before ਜ is said n: panj. |
| ਵੀਹ | vī́h | twenty | High tone on ī; the ਹ is silent. |
| ਪੰਜਾਹ | panjā́h | fifty | High tone on the last ā. |
| ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ? | íh kinne dā hai? | How much is this? | Literally "this is of how much?" |

**10. Food and drink** (Everyday life). Punjabi food and drink, ordering politely, spice, paying. Lessons: `food`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਪਾਣੀ | pāṇī | water | Masculine, though it ends in -ī: ਠੰਢਾ ਪਾਣੀ. |
| ਲੱਸੀ | lassī | lassi (a yogurt drink) | Feminine. Sweet or salty: ਮਿੱਠੀ ਜਾਂ ਨਮਕੀਨ. |
| ਰੋਟੀ | roṭī | roti; a meal | Feminine. ਰੋਟੀ ਖਾਓ also means "come and eat". |
| ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ | sárhõ dā sāg | mustard greens | Eaten with ਮੱਕੀ ਦੀ ਰੋਟੀ, cornmeal flatbread. |
| ਇੱਕ ਚਾਹ ਦਿਓ ਜੀ। | ikk chā́h dio jī. | One tea, please. | ਦਿਓ ਜੀ is the polite "give". |

**11. Time, days and routine** (Everyday life). Clock time, days, parts of the day, a routine, plans. Lessons: `habitual`, `time`, `future`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਕਿੰਨੇ ਵਜੇ ਹਨ? | kinne vaje han? | What time is it? | The answer: ਤਿੰਨ ਵਜੇ ਹਨ, it's three o'clock. |
| ਸਾਢੇ ਤਿੰਨ | sā́ḍhe tinn | half past three | ਸਾਢੇ = plus a half. 1:30 is ਡੇਢ, 2:30 is ਢਾਈ. |
| ਸੋਮਵਾਰ | somvār | Monday | Masculine. On Monday: ਸੋਮਵਾਰ ਨੂੰ. |
| ਸਵੇਰੇ | savere | in the morning | ਸਵੇਰ is morning; ਸਵੇਰੇ is "in the morning". |
| ਮੈਂ ਸੱਤ ਵਜੇ ਉੱਠਦਾ ਹਾਂ। | maĩ satt vaje uṭṭhdā hā̃. | I get up at seven. (a man speaking) | The habitual: ਉੱਠਦਾ / ਉੱਠਦੀ ਹਾਂ. |

**12. Home and daily things** (Everyday life). Rooms and objects with gender and plural; what you are doing now. Lessons: `gender`, `continuous`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਕਮਰਾ | kamrā | room | Masculine; plural ਕਮਰੇ; ਕਮਰੇ ਵਿੱਚ, in the room. |
| ਕਿਤਾਬ | kitāb | book | Feminine, though it ends in a consonant: ਮੇਰੀ ਕਿਤਾਬ. |
| ਮੇਜ਼ | mez | table | Masculine in Punjabi: ਮੇਜ਼ ਉੱਤੇ, on the table. |
| ਕੁਰਸੀ | kursī | chair | Feminine; plural ਕੁਰਸੀਆਂ. |
| ਤੁਸੀਂ ਕੀ ਕਰ ਰਹੇ ਹੋ? | tusī̃ kī kar ráhe ho? | What are you doing? (polite) | Right now: the continuous with ਰਹੇ. |

**13. Describing things** (Everyday life). Changing and unchanging adjectives, colours, comparing. Lessons: `adjectives`, `compare`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਚੰਗਾ | changā | good | Changes: ਚੰਗਾ / ਚੰਗੇ / ਚੰਗੀ. Also "OK" on its own. |
| ਵੱਡਾ | vaḍḍā | big | ਵੱਡਾ ਘਰ, ਵੱਡੀ ਕਾਰ. |
| ਸੋਹਣਾ | sóhṇā | beautiful; good-looking | High tone on o, and the ਹ is silent. |
| ਲਾਲ | lāl | red | Does not change: ਲਾਲ ਕਾਰ, ਲਾਲ ਫੁੱਲ. |
| ਉਹ ਮੇਰੇ ਨਾਲੋਂ ਲੰਮਾ ਹੈ। | úh mere nālõ lammā hai. | He is taller than me. | ਨਾਲੋਂ = than, after the noun or pronoun. |

**14. Getting around** (Out and about). Places with postpositions, directions, buses, autos, trains. Lessons: `postpositions`, `directions`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਸਿੱਧੇ ਜਾਓ। | síddhe jāo. | Go straight. | ਸਿੱਧਾ changes: ਸਿੱਧੇ here. |
| ਸੱਜੇ ਮੁੜੋ। | sajje muṛo. | Turn right. | Left: ਖੱਬੇ. |
| ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ? | saṭeshan kitthe hai? | Where is the station? | Punjabi says ਸਟੇਸ਼ਨ for a train or bus station. |
| ਗੁਰਦੁਆਰੇ ਦੇ ਨੇੜੇ | gurduāre de neṛe | near the gurdwara | ਦੇ ਨੇੜੇ after the noun, which goes oblique. |
| ਬੱਸ ਅੱਡਾ | bass aḍḍā | bus stand | ਅੱਡਾ = stand, terminal. |

**15. Shopping and the market** (Out and about). Like, need, have, prices, bargaining, clothes. Lessons: `like-need`, `have`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮੈਨੂੰ ਇਹ ਪਸੰਦ ਹੈ। | mainū̃ íh pasand hai. | I like this. | The person who likes takes ਨੂੰ: ਮੈਨੂੰ. |
| ਮੈਨੂੰ ਇੱਕ ਕਮੀਜ਼ ਚਾਹੀਦੀ ਹੈ। | mainū̃ ikk kamīz chā́hīdī hai. | I need a shirt. | ਚਾਹੀਦੀ agrees with ਕਮੀਜ਼, which is feminine. |
| ਮੇਰੇ ਕੋਲ ਪੈਸੇ ਨਹੀਂ ਹਨ। | mere kol paise náhī̃ han. | I don't have money. | Things you have: ਮੇਰੇ ਕੋਲ. |
| ਬਹੁਤ ਮਹਿੰਗਾ ਹੈ। | báhut máhingā hai. | It's very expensive. | A gentle start to bargaining. |
| ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ ਜੀ। | thóṛhā ghàṭṭ karo jī. | Make it a little less, please. | Polite bargaining. |

**16. Health and help** (Out and about). Illness, doctor, chemist, polite requests, must and can. Lessons: `imperative`, `must-can`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮੈਨੂੰ ਬੁਖ਼ਾਰ ਹੈ। | mainū̃ buḵhār hai. | I have a fever. | Illnesses take ਮੈਨੂੰ: no verb "have". |
| ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ। | mere sir vicch darad hai. | I have a headache. | Literally "there is pain in my head". |
| ਡਾਕਟਰ | ḍākṭar | doctor | Masculine word, used for women too. |
| ਮਦਦ ਕਰੋ! | madad karo! | Help! | Polite: ਮੇਰੀ ਮਦਦ ਕਰੋ ਜੀ. |
| ਮੈਨੂੰ ਜਾਣਾ ਪੈਂਦਾ ਹੈ। | mainū̃ jāṇā paĩdā hai. | I have to go. | Must: ਮੈਨੂੰ + infinitive + ਪੈਂਦਾ ਹੈ. |

**17. Questions and connectors** (Conversation). Question words, ਕੀ questions, and, but, because, so. Lessons: `questions`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਕੀ | kī | what? (also starts a yes-no question) | ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋ? Do you speak Punjabi? |
| ਕਿੱਥੇ | kitthe | where? | It stays where the answer goes: ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? |
| ਕੌਣ | kauṇ | who? | ਉਹ ਕੌਣ ਹੈ? Who is that? |
| ਕਿਉਂਕਿ | kiunki | because | Comes after the main idea. |
| ਪਰ | par | but | Also ਲੇਕਿਨ. |

**18. Traps for English speakers** (Conversation). ਨੇ and object agreement, calques, ਕੱਲ੍ਹ, ਤੂੰ, uncles, Hindi forms. Lessons: `past`.

| Punjabi | `pron` | Meaning | Note |
|---|---|---|---|
| ਮੈਂ ਰੋਟੀ ਖਾਧੀ। | maĩ roṭī khā́dhī. | I ate. (a meal) | Not ਮੈਂ ਰੋਟੀ ਖਾਧਾ: ਖਾਧੀ agrees with ਰੋਟੀ, not with me. |
| ਉਸ ਨੇ ਚਾਹ ਪੀਤੀ। | us ne chā́h pītī. | She drank tea. / He drank tea. | ਨੇ after the doer, and the verb agrees with ਚਾਹ. |
| ਕੱਲ੍ਹ | kállh | yesterday; tomorrow | The tense decides which. High tone. |
| ਤੂੰ | tū̃ | you (very close, or rude) | For close friends, small children and God. With adults, ਤੁਸੀਂ. |
| ਮੈਨੂੰ ਠੰਢ ਲੱਗ ਰਹੀ ਹੈ। | mainū̃ ṭháṇḍh lagg ráhī hai. | I'm cold. | Not ਮੈਂ ਠੰਢਾ ਹਾਂ ("I am a cold thing"). |

### 9.1 Localisation

- **Names** (Gurmukhi in Punjabi strings, English in prompts): learner personas **ਸਾਰਾ** (Sarah, an American woman) and **ਡੇਵਿਡ** (David, an American man); heritage personas **ਸਿਮਰਨ** (Simran, a woman) and **ਅਰਜੁਨ** (Arjun, a man), Punjabi American. Punjabi characters: ਹਰਪ੍ਰੀਤ, ਗੁਰਪ੍ਰੀਤ, ਮਨਦੀਪ (unisex: give a cue), ਜਸਪ੍ਰੀਤ, ਰਾਜ, ਨੀਤੂ, ਅਮਨ, ਪ੍ਰੀਤੀ; Sikh full names with ਸਿੰਘ (men) and ਕੌਰ (women); elders ਦਾਦੀ ਜੀ, ਨਾਨਾ ਜੀ, ਬੀਬੀ ਜੀ. No celebrities. Many Punjabi given names are unisex: every prompt with one carries a gender cue.
- **Places:** Punjab: ਅੰਮ੍ਰਿਤਸਰ (ਦਰਬਾਰ ਸਾਹਿਬ / the Golden Temple), ਲੁਧਿਆਣਾ, ਜਲੰਧਰ, ਪਟਿਆਲਾ, ਚੰਡੀਗੜ੍ਹ, ਦਿੱਲੀ; a village (ਪਿੰਡ). Diaspora: ਅਮਰੀਕਾ, ਕੈਨੇਡਾ, ਕੈਲੀਫ਼ੋਰਨੀਆ, ਨਿਊਯਾਰਕ, ਯੂਬਾ ਸਿਟੀ, ਸਰੀ, ਟੋਰਾਂਟੋ, ਲੰਡਨ (run each through the generator; loans warn and go to `VER` or `EXC`).
- **Food:** ਚਾਹ, ਲੱਸੀ, ਪਾਣੀ, ਦੁੱਧ, ਰੋਟੀ, ਪਰੌਂਠਾ, ਮੱਖਣ, ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ, ਮੱਕੀ ਦੀ ਰੋਟੀ, ਦਾਲ, ਛੋਲੇ ਭਟੂਰੇ, ਪਨੀਰ, ਆਲੂ, ਖੀਰ, ਜਲੇਬੀ, ਲੰਗਰ (the free community meal at a gurdwara).
- **Money:** ਰੁਪਏ in India, ਡਾਲਰ in the US (₹ and $ never in Punjabi strings: write the number in words), ਪੈਸੇ (money in general). Plausible prices [inference]: a cup of chai ਵੀਹ ਰੁਪਏ, a lassi ਪੰਜਾਹ ਰੁਪਏ, an auto ride ਸੌ ਰੁਪਏ, a dhaba meal ਦੋ ਸੌ ਰੁਪਏ.
- **Settings:** a family dinner with ਦਾਦੀ ਜੀ, a wedding, a gurdwara and its langar, a dhaba on the highway, a market in Amritsar, a bus stand, a video call with relatives in Punjab, a Punjabi grocery in California.
- **Measures and dates:** kilometres and kilograms in India, miles and pounds in US scenes; day–month order; festivals in notes (ਵਿਸਾਖੀ, ਦੀਵਾਲੀ, ਲੋਹੜੀ, ਗੁਰਪੁਰਬ).

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is five script lessons and five script decks, all ordinary: nothing depends on the Korean letter-drill machine.

| Lesson | Deck | Letters and signs | What the learner can do after it |
|---|---|---|---|
| `vowels` | Vowel signs | ੳ ਅ ੲ, ten vowel letters, nine vowel signs (on ਕ), the inherent a | read any consonant + vowel sign; hear long vs short vowels; knows the final a is silent |
| `letters-1` | Letters 1: k and ch rows | ਸ ਹ, ਕ–ਙ, ਚ–ਞ | read the first rows; hear aspirated vs unaspirated; knows ਘ ਝ are tonal |
| `letters-2` | Letters 2: ṭ, t and p rows, and the rest | ਟ–ਣ, ਤ–ਨ, ਪ–ਮ, ਯ ਰ ਲ ਵ ੜ | read every basic letter; tell dental from retroflex; ph ≠ f |
| `nasal` | Tippi, bindi and addak | ੰ ਂ ੱ, ੍ਹ ੍ਰ ੍ਵ, ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ (ਲ਼ recognition) | read whole words, doubled consonants and nasal vowels |
| `tones` | Tones | the tonal letters and ਹ in words | read the accent in the pron; hear low and high tone |

- The consonants follow the chart order (ੳ ਅ ੲ ਸ ਹ, then the rows), which the roadmap's letter lessons follow; the rows make the aspiration and retroflex / dental contrasts visible as a grid [curriculum convention: the roadmap's grouping; MSU chapter 1 as described there].
- ਙ and ਞ are shown in the chart and never carded (they occur almost only before their own row).
- **If the letter-drill machine is generalised** (request 10), the five decks gain "hear a syllable, tap its letter" drills (ਤ / ਟ, ਕ / ਖ, ਘ / ਕ by tone) and "build the word from letters". Nothing in the lessons changes.

### 10.2 What a typed answer is

**Default: word tiles** (`tilesDefault: true`). Punjabi writes spaces between words, so tiles are words as written: postpositions separate (ਘਰ / ਵਿੱਚ), fused pronoun forms whole (ਮੈਨੂੰ), compound postpositions as two tiles (ਦੇ / ਕੋਲ), verb groups separate (ਜਾ / ਰਿਹਾ / ਹਾਂ).

**Typing is optional**, through the existing switch:
- **Gurmukhi from a phone keyboard.** Gboard and iOS both offer a Punjabi (Gurmukhi) keyboard [inference: neither was opened, §11]. The answer arrives as Gurmukhi, which the matcher compares after NFC.
- **Romanisation on an English keyboard:** `pronAnswers: true`, `pronAnswersKeepSpaces: true`, `pronAnswersScript: "[਀-੿]"`, `romaAlmost: true`, `pronAnswersWarn: true` (the en-ur settings). `gen.js` respells every Gurmukhi `fi` / `ty` answer with its spaces kept and adds the romanisation to the accepted answers (it passes the validator through `pronPattern`); typed Latin text that equals it is **exact**, and text that equals it after `romaLoose` (accents, macrons, dots, the tilde → n, doubled vowels) is **"almost"**. So **missing tone accents and length marks are "almost"** with no engine work, as the brief asks.

### 10.3 Unicode normalisation

- **Stored text:** NFC. The six dotted letters ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ ਲ਼ (U+0A36, 0A59, 0A5A, 0A5B, 0A5E, 0A33) are Unicode composition exclusions: NFC turns each into the base letter + nukta U+0A3C (checked in node: ਸ਼ → U+0A38 U+0A3C). So composed and decomposed input already match, in the app (`pracNorm` normalises to NFC) and in the generator.
- **Carrier + vowel sign** (ਅ + ਾ for ਆ, ੲ + ਿ for ਇ, ੳ + ੁ for ਉ, and the six others) is **not** canonically equal to the vowel letter, so NFC does not fix it; some keyboards and older fonts produce it. The generator repairs it; the matcher marks it wrong today (measured, §10.5). Request 1 folds it as **exact**.
- **Bindi vs tippi** typed for each other: "almost" (request 1). **Addak missing:** "almost" (request 1), but writers must not build an item whose point is the addak (ਪਤਾ / ਪੱਤਾ) as a typed item without `'!strict'`. **Nukta missing** (ਜਰੂਰ for ਜ਼ਰੂਰ): "almost". **ZWJ / ZWNJ:** already removed by `pracNorm`, and rejected in stored text by the validator. **Danda:** already stripped by `pracNorm`.
- **Never "almost":** vowel length (ਿ / ੀ), ਤ / ਟ, ਕ / ਘ, ਹਾਂ / ਹੈ, gender endings: those are the point.

### 10.4 The accent bar

`keys`: `ੰ ਂ ੱ ਼ ੍` (tippi, bindi, addak, nukta, and the virama for subscript letters). Phone keyboards have them on long-press or a second page; the bar inserts them after the letter at the caret, and NFC composes the result. `accents: true` turns a missing accent or macron in romanised answers into "almost".

### 10.5 What the matcher does today, and what it must fold

Measured with copies of `pracNorm`, `accSame` (for `pa` it is plain `a === b`) and `romaLoose`, and the `romaAlmost` branch of `pracMatch` (node harness `match.js` in the author's scratch folder); each answer list is the Gurmukhi plus its generated romanisation, as `gen.js` builds it.

| Typed | Expected answer | Today | Should be |
|---|---|---|---|
| ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ (no ?), ਮੈਂ ਠੀਕ ਹਾਂ। (with ।) | ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?, ਮੈਂ ਠੀਕ ਹਾਂ | ✓ exact | exact |
| ਜ਼ਰੂਰ decomposed (ਜ + ਼) | ਜ਼ਰੂਰ | ✓ exact | exact |
| ਕ‍ਰ with a ZWJ | ਕਰ | ✓ exact | exact |
| ਅਾਪ, ੲਿਹ (carrier + sign) | ਆਪ, ਇਹ | ✗ wrong | exact |
| ਮੈੰ (tippi for bindi) | ਮੈਂ | ✗ wrong | almost |
| ਜਰੂਰ (no nukta) | ਜ਼ਰੂਰ | ✗ wrong | almost |
| ਪਕਾ (no addak) | ਪੱਕਾ | ✗ wrong | almost |
| ਮੁੰਡੇ | ਮੁੰਡਾ | ✗ wrong | **wrong** (agreement) |
| *ghar*, *ghàr* | ਘਰ / ghàr | ✓ almost, exact | almost, exact |
| *kar* | ਘਰ / ghàr | ✓ wrong | **wrong** (a different word, ਕਰ) |
| *tusin kiven ho*, *main theek haan*, *main thik han* | … / tusī̃ kivẽ ho?, maĩ ṭhīk hā̃. | ✓ almost | almost |
| *chah*, *cha*, *bahut*, *shahir*, *tuhada*, *singh*, *munda*, *pakka*, *nahin*, *sat sri akal*, *dhannvaad*, *uh* | the generated prons | ✓ almost | almost |
| *dhanvad*, *paka* | dhànnvād, pakkā | ✗ wrong | almost (doubled consonant typed single) |
| *shehar*, *bohat*, *twada*, *oh*, *sat shri akaal* | sháhir, báhut, tuhā̀ḍā, úh, sat srī akāl | ✗ wrong | wrong today; a reviewer may want common spellings as "almost" (§11) |
| *tusi kive ho*, *nahi* | tusī̃ kivẽ ho?, náhī̃ | ✗ wrong | wrong (nasal dropped; en-hi and en-ur keep it wrong too) |

**Gurmukhi input has no "almost" path at all today:** in `pracMatch` the `romaAlmost` branch tests Devanagari (`[ऀ-ॿ]`) for the Hindi slip, and for anything else compares `romaLoose` only against answers outside `[ऀ-෿…]`, a range that contains Gurmukhi (U+0A00–0A7F). The deck quiz (`normT` path) behaves the same. Request 1.

### 10.6 Fonts and line height

- The app has a Devanagari stack for `html[lang=hi]` and line heights for `[lang=hi]`, `[lang=th]` and `[lang=ur]` target text, and **nothing for Gurmukhi** (searched `src/app.html` for "Gurmukhi" and `lang=pa`: no hit). Request 4: `body [lang=pa]` gets `'Raavi', 'Gurmukhi Sangam MN', 'Gurmukhi MN', 'Noto Sans Gurmukhi', 'Mukta Mahee', system-ui, sans-serif` and **line height 1.7**, and target elements (cards, tiles, examples, answer inputs, the accent bar) carry `lang="pa"`, as for `hi` [inference for the font names on each platform, §11].
- Gurmukhi signs rise above the headline (ਿ ੀ ੇ ੈ ੋ ੌ ਂ ੰ ੱ) and hang below it (ੁ ੂ ੍ਹ ੍ਰ ੍ਵ); tiles at least 48 px tall.
- **The pron line** can stack three marks on one letter (ī̃́ in *mū̃́h*: macron, tilde, acute): line height at least 1.7 there, and the body font must contain ṭ ḍ ṇ ṛ ṅ ñ ḵ ġ ḷ and render combining U+0300 / 0301 / 0303 over ā ī ū and over ã ĩ ũ ẽ õ cleanly (DM Sans was not checked, §11).

### 10.7 `targetScript` and punctuation

- `targetScript`: `[ਁ-੥ੰ-ੵ]`: Gurmukhi letters and signs, **excluding** the Gurmukhi digits (U+0A66–0A6F). The danda । (U+0964) is in the Devanagari block and does not count, so an English line with a danda does not pass; romanised answers pass through `pronPattern` instead.
- । ends statements in card targets, examples, dialogues and `fill` sentences; ? and ! as in English; **no । in `a`, tiles or `x`** until request 2. The pron converts । and ॥ to `.`.

### 10.8 What the lead needs to build, in priority order (before writers start: 1–4)

| # | Request | Why | What the course does if it is NOT built |
|---|---|---|---|
| 1 | **Gurmukhi matcher fold** (`paSame` / `paSlip`, used by `accSame`, the `romaAlmost` branch of `pracMatch` and the deck quiz when `target === 'pa'`): exact after NFC and carrier + sign → vowel letter (the nine pairs in `respell.js`'s `CARRIER`); "almost" for ਂ ↔ ੰ, a missing ੱ, a missing ਼, ਲ for ਲ਼. Never fold the pairs in §10.3. | Gurmukhi input has no "almost" path; keyboards produce carrier sequences (§10.5). | Exact match only; tiles by default keep this rare; learners who type Gurmukhi are marked wrong for a bindi slip. |
| 2 | **Strip । and ॥ in the validator's `pn`**, as `pracNorm` already does. | The validator compares answers and distractors without the danda only in the app, not in its own checks. | No । in accepted answers, tiles or distractors (writer rule, §2.8). |
| 3 | **Audio:** add `"pa": {"voice": "pa-IN-VaaniNeural", "locale": "pa-IN"}` to `tools/audio/voices.json` (Ojas for male lines if the generator supports a second voice), confirm both names in Microsoft's own voice list, and record clips for every card target and example row (`gen_azure.js pa`); `voiceMatch` is set in `profile.json` and passed by `gen.js`. | iOS probably has no Punjabi voice; Android only where Google TTS has it (§2.1). | Device voice where present; elsewhere the "No voice" toast, and the pron line carries pronunciation and tone. |
| 4 | **Fonts:** `[lang=pa]` stack and line height (§10.6), `lang="pa"` on target elements. | Clipped signs, mismatched fonts. | System fallback fonts; possible clipping. |
| 5 | **Romanisation folds for `pa` in `romaLoose`** (or a `pa` wrapper): a doubled consonant typed single is "almost" (*dhanvad*, *paka*, *ik*). Optional, after a native reviewer agrees: common Punjabi romanisations as "almost" (*bohat*, *shehar*, *oh*, *twada*). Keep *hai* ≠ *han* and the nasal. | Learners type doubled consonants single. | Romanised typing works for learners who copy the course's spelling. |
| 6 | **Validator: run `respell` on every card target and example row** and fail on a stored pron that differs; print `warnings()`; report `respell` throws on `fi` / `ty` answers (`pronAnswersWarn: true` already prints them in `gen.js`). | The generator is the source of truth. | `node tools/target/repron.js pa` after every generator change. |
| 7 | **Romanisation display setting** (always / tap to reveal / off), as requested for en-hi. | Readers want to hide it; the Tones deck should stay "tap to reveal". | Always shown. |
| 8 | **Keyboard note** on the first typed item: "To type Punjabi, add the Punjabi (Gurmukhi) keyboard, or type in English letters." | Most learners have no Gurmukhi keyboard. | Tiles by default; no note. |
| 9 | **Voice check on test devices and on the Azure clips:** lone letters (ਕ as *ka* or *kakkā*?), tonal pairs (do ਘਰ and ਕਰ sound different?), dotted letters, English loans in Gurmukhi, numbers as words. | The voice is the model for tone. | Writers keep lone dotted letters out of card targets; the lead listens to the Tones deck. |
| 10 | **Generalise the letter-drill machine** (§10.1). | More listening practice on tone and on ਤ / ਟ. | Script decks stay ordinary decks. |
| 11 | **PRACTICE-SPEC note:** romanisation may appear in English prompts of the five script lessons; answers stay Gurmukhi. | | — |

Checked and **not** needed: danda in typed input, ZWJ / ZWNJ, composed vs decomposed dotted letters (built, §10.5); romanised answers with spaces kept and accents as "almost" (`pronAnswersKeepSpaces`, `romaAlmost`, built for en-ur); `repron.js` with this `pronPattern` (tested without `u`); the `HOLD` file keeps the course out of releases.

Side finding (not this course): `tools/target/hi/profile.json` stores `greet` as four plain strings, but the app's `greet()` reads `x[0]` and `x[1]` of each slot, so en-hi would show the first and second characters of नमस्ते. `pa` stores pairs, as `ur`, `zh` and `ja` do.

## 11. Gaps and unverified claims

**No native speaker has checked this profile or the generator.** Check these first, in this order:
1. **The tone decisions on frequent words** (`DEC` in `respell.js`): ਨਹੀਂ *náhī̃* (Bhatia says it varies), ਰਹੀ *ráhī*, ਰਹੇ *ráhe*, ਰਿਹਾ *ríhā*, ਕਿਹਾ *kíhā* (the continuous and "said"); the **class decision** that a medial tonal letter after a closed syllable is high (ਅੱਧਾ, ਸਿੱਧਾ, ਠੰਢਾ, ਬੁੱਢਾ; MSU and the roadmap note say level); then the classes: **A** (low on the ā after a short open vowel: ਤੁਹਾਡਾ, ਕਹਾਣੀ, ਜਗ੍ਹਾ, ਪੜ੍ਹਾਉਣਾ, ਲੁਧਿਆਣਾ), **S** (high on the short vowel: ਸਹੀ, ਮਹੀਨਾ, ਵਧੀਆ, ਸਰ੍ਹੋਂ), the low tone always on the vowel right after an initial tonal letter (ਭਰਾ *bhàrā*, ਘੜੀ *ghàṛī*), and ਹ between a long vowel and a vowel (ਚਾਹੀਦਾ *chā́hīdā*, ਵਾਹਿਗੁਰੂ *vā́higurū*).
2. **The design** (§6): letters as written plus a tone accent, rather than letters as said; whether a teacher finds *ghàr* / *sháhir* / *síngh* teachable with the §6.6 table.
3. **Schwa and nasals:** the ਦੋਸਤ rule (*dost* but *vakat*), the a after a doubled consonant (*rakkhṇā*), bindi on a long vowel before a stop (*jā̃dā*, *paraũṭhā*), tippi before ਮ ਨ as doubling (*ammritsar*), *āundī* for ਆਉਂਦੀ.
4. **Grammar claims writers will copy:** no ਨੇ with ਮੈਂ, ਅਸੀਂ, ਤੂੰ, ਤੁਸੀਂ in the completed past (§4.7); ਸੀ for ਅਸੀਂ and ਤੁਸੀਂ in speech, ਸਾਂ / ਸੋ as written forms; ਤੁਸੀਂ addressed to one woman (ਰਹਿੰਦੇ ਹੋ or ਰਹਿੰਦੀਆਂ ਹੋ); ਤੂੰ … ਹੈਂ; the future paradigm; ਮੇਜ਼ masculine.
5. **Register and greetings:** who uses ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ and ਸਲਾਮ, and whether the one-line rule in §2.4 is fair; ਸ਼ੁਭ ਰਾਤ in the late-night `greet` slot (everyday Punjabi may not greet by time of day at all; ਸਤ ਸ੍ਰੀ ਅਕਾਲ is in the other three slots); ਧੰਨਵਾਦ vs ਸ਼ੁਕਰੀਆ; ਕਿਰਪਾ ਕਰਕੇ only on signs; ਤੂੰ used freely among friends; address terms (ਭੈਣ ਜੀ, ਵੀਰ ਜੀ, ਭਾਜੀ, ਬੀਬੀ ਜੀ).
6. **Spelling choices** (§2.8): ਸਤ vs ਸਤਿ, ਨਾਂ vs ਨਾਮ, ਉਹਨਾਂ vs ਉਨ੍ਹਾਂ, ਵਿੱਚ vs ਵਿਚ, ਇੱਕ vs ਇਕ, ਠੰਢਾ vs ਠੰਡਾ, ਲ਼ left out, ਅਮਰੀਕਾ; the tippi / bindi distribution list.
7. **The Traps list and calques** (§4.13), the Hindi-interference pairs (§4.3), the sample cards in §9 and the prices in §9.1.

**Evidence that could not be opened, or was read only in part**
- **Learner errors:** no study of English-speaking learners of Punjabi was found; §4 is [inference] and practitioner material. The Punjabi ERP study on gender agreement appeared in search results only.
- **Tone:** the sources disagree (MSU "level" medial vs Wikibooks "high"; one Wikibooks list contradicts its own rule; Bhatia's two medial tendencies). Wiktionary entries were read through a Kiwix mirror (2023), and only for five words (ਤੁਹਾਡਾ, ਭਰਾ, ਕਹਾਣੀ, ਭਾਈ, ਪੜ੍ਹਾਈ, the last with no IPA). Bhatia (1975) is old, and describes tone shifting in causatives that the rule does not model. Bowden (2012) was read as an abstract paraphrase only.
- **Voices:** both Azure names come from a third-party catalogue; Microsoft's voice table was not opened. The Android claim is Google's TalkBack language list, not a test. The iOS claim (no Punjabi voice) rests on a user's feature request and an unread Apple page.
- **Keyboards and fonts:** the Gboard and iOS Punjabi keyboards and the platform font names in §10.6 are the author's knowledge.
- **Syllabus:** the SASLI syllabus and MSU's chapter list were not reopened; their content is as the roadmap note reports it.
- **Learners:** the US figure is a Census table as cited on a Wikipedia mirror; no Canadian or UK figure and no survey of motives were opened.
- **Numbers 21–99** were not run through the generator.

**The roadmap and the brief**
- `vowels` moves from position 3 to 1, and ੳ ਅ ੲ move into it (§8).
- The roadmap note says tone is "never marked"; the lead's brief asks for tone in the romanisation, which this profile does. The roadmap writes "addhak"; this profile writes "addak", as the brief and Wiktionary do.
- The roadmap title of `pa-greetings` spells ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ; the course stores ਸਤ ਸ੍ਰੀ ਅਕਾਲ and accepts both (§2.4).
- `profile.json` carries fields beyond the brief's shape, as en-ur does: `tilesDefault`, `pronAnswers`, `pronAnswersKeepSpaces`, `pronAnswersScript`, `romaAlmost`, `voiceMatch`, `pronAnswersWarn`.
- The brief asked to check whether iOS and Android ship a device voice: Android yes (Google's list), iOS not confirmed.

**Not verified at all**
- How any voice renders tone (whether Azure's ਘਰ and ਕਰ differ audibly).
- That learners can read a romanisation with stacked accents, macrons and tildes; no study compares Punjabi romanisations for learners.
- That the app's fonts render ā̀ ī̃́ ū̃́ cleanly.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Michigan State University Libraries: *Basic Punjabi*, 1.4 Tonal Letters in Punjabi (Kathuria & Ranjan)](https://openbooks.lib.msu.edu/basicpunjabi/chapter/chapter-1-4-tones/)
- [Wikibooks: Punjabi/Gurmukhi/Tone](https://en.wikibooks.org/wiki/Punjabi/Gurmukhi/Tone)
- [Wikibooks: Punjabi/Phonetics (Kiwix mirror, 2021)](https://kwx.liehendr.com/content/wikibooks_en_all_maxi_2021-03/A/Punjabi/Phonetics)
- [Bhatia, T. K. (1975). The evolution of tones in Punjabi. *Studies in the Linguistic Sciences* 5(2)](https://www.ideals.illinois.edu/items/26704/bitstreams/91307/data.pdf)
- [Bowden, A. L. (2012). *Punjabi Tonemics and the Gurmukhi Script: A Preliminary Study*. BYU thesis (record and abstract)](https://openaccess.library.uitm.edu.my/Record/ndltd-BGMYU2-oai-scholarsarchive.byu.edu-etd-3982/Description)
- [Wiktionary (Kiwix mirror, 2023): ਤੁਹਾਡਾ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%A8%A4%E0%A9%81%E0%A8%B9%E0%A8%BE%E0%A8%A1%E0%A8%BE), [ਭਰਾ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%A8%AD%E0%A8%B0%E0%A8%BE), [ਕਹਾਣੀ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%A8%95%E0%A8%B9%E0%A8%BE%E0%A8%A3%E0%A9%80), [ਭਾਈ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%A8%AD%E0%A8%BE%E0%A8%88), [ਪੜ੍ਹਾਈ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%A8%AA%E0%A9%9C%E0%A9%8D%E0%A8%B9%E0%A8%BE%E0%A8%88)
- [Wiktionary: Punjabi transliteration](https://en.wiktionary.com/wiki/Wiktionary:PA_TR)
- [Wikipedia: Help:IPA/Punjabi (mirror)](https://wiki.riteme.site/wiki/Help:IPA/Punjabi)
- [Wikipedia: Sat Sri Akaal](https://en.wikipedia.org/wiki/Sat_Sri_Akaal)
- [Wikipedia: Punjabi Americans (mirror; Census table B16001 figures)](https://wiki.riteme.site/wiki/Punjabi_Americans)
- [US Census Bureau: Punjabi speakers map, ACS 2012–2016](https://www.census.gov/content/dam/Census/library/visualizations/2017/comm/punjabi.pdf) (no totals)
- [json2video: Punjabi text-to-speech voices (Azure pa-IN Vaani and Ojas)](https://json2video.com/ai-voices/languages/punjabi/) and [the Vaani page](https://json2video.com/ai-voices/azure/voices/pa-in-vaanineural/)
- [Google Accessibility Help: Languages supported by TalkBack (Punjabi (India) in Google Text-to-Speech)](https://support.google.com/accessibility/android/answer/11101402?hl=en)
- [Apple Community: request to add a Punjabi voice to Siri (iOS 16)](https://discussions-cn-prz.apple.com/thread/254750738)

Opened but not usable: Apple Support, *Languages supported by VoiceOver* (redirected to a feature-availability page that was not fetched); Wikipedia, *Punjabi language* (not on the fetch allowlist); Wiktionary pages fetched directly (not on the allowlist; the Kiwix mirror was used).

Local project files read: `docs/briefs/target-profile-pa.md`, `docs/briefs/target-profile-hi.md`, `docs/roadmaps/pa.json` and the `pa` entry in `packs/roadmaps.js`, `docs/profiles/en-hi.md` (whole), `docs/profiles/en-ur.md` (§10–§11 and Sources), `tools/target/hi/respell.js` and `profile.json`, `tools/target/ur/profile.json`, `docs/PRACTICE-SPEC.md`, `docs/TARGET-BRIEF.md`, the head of `docs/BUILD-PLAN-EN.md`, `tools/target/lib.js` (head), `gen.js`, `validate.js`, `repron.js`, `tools/audio/voices.json` and the head of `gen_azure.js`, and in `src/app.html` the functions `pracNorm`, `romaLoose`, `accSame`, `accLoose`, `foldAcc`, `hiSlip`, `pracMatch`, `greet`, `speak` (voice toast), the clip note and the font rules.
