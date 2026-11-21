# English speakers learning Hindi: course profile

Course `en-hi`: Hindi for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Hindi, written in Devanagari. Machine-readable twin: `tools/target/hi/profile.json`, written from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/hi/respell.js` (§6).

(`docs/profiles/hi.md` and `docs/profiles/hi.profile.json` belong to the reverse course, English for Hindi speakers. This profile does not use or change them. The course folder keeps its `HOLD` file until the lead releases it.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named where it is used. **(abstract only)** says only the abstract or a record was read. **(other learners)** says the learners were not adult English speakers learning Hindi.
- **[curriculum convention]**: what syllabuses, textbooks, style guides, spelling standards and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Hindi**. Every claim of that kind that writers will copy into the course is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Which Hindi?** Modern Standard Hindi as spoken in Delhi and used in Indian textbooks and news, in Devanagari, with a `hi-IN` voice. Everyday words win over Sanskritised textbook words: स्टेशन, टिकट, फ़ोन, not their coined Hindi equivalents (§2.5).
- **Register:** आप is the default "you" from lesson 5 (`greetings`, the first lesson with sentences), with its plural verb (आप कैसे हैं?). तुम is taught in `greetings` for friends, children and people younger than you; तू is recognition only, in the Traps deck. नमस्ते, जी, शुक्रिया and धन्यवाद are taught with when to use each (§2.3–2.4).
- **Biggest traps (§4):** gender and number agreement on verbs, adjectives and का / की / के; postpositions after the noun, which goes into the oblique form (लड़के को); verb-final order; ने in the past; मुझे-constructions (मुझे पसंद है, मुझे चाहिए); dental and retroflex t / d; aspiration; long and short vowels; is / are with आप.
- **Standing rule (§7):** two strands. **(a) Agreement**: the verb, adjective and का / की / के agree in gender and number (-ā / -e / -ī; है / हैं). **(b) Postpositions and the oblique**: postposition after the noun, and the noun before it in the oblique form. In the four script lessons a sound strand takes their place (dental / retroflex, aspirated, long vowel, vowel sign). Keywords tested on 53 sample lines.
- **Pronunciation aid (§6):** a learner romanisation with long vowels (ā ī ū), dotted retroflexes (ṭ ḍ ṇ ṛ), ch / chh, sh, nuqta letters (z f q ḵh ġ), a tilde for nasal vowels (hā̃, haĩ) and the unwritten a deleted where Hindi drops it (kamal, karnā, samajhnā). **Generated** by `respell.js` (rules plus a list of exceptions); it throws on non-Hindi text and warns on the known weak spots of schwa deletion. Measured: 3 misses of 159 test items on the first run (fixed by two rule changes), 1 miss of 96 on a held-out set, 5 misses (all warned) of the 100 number words; all now in the rules or the exception list.
- **Lessons and decks (§8, §9):** 28 lessons: all 25 roadmap items, plus a second consonant lesson, `numbers` and `family`. 18 decks in 5 groups, including four letter decks that are ordinary decks, and "Traps for English speakers".
- **Typing (§10):** word tiles by default; typing optional, in Devanagari from the phone's Hindi keyboard. Romanised typing waits for a matcher change. Engine requests, in priority order, are in §10.8.

## 2. Variant, register and voice

### 2.1 Variant: Modern Standard Hindi, Delhi norm

- The roadmap names "Modern Standard Hindi (Devanagari)" on a university beginner basis [curriculum convention]. The build plan keeps it. Voice: `ttsLang: "hi-IN"`.
- **Say it plainly to users** (course blurb and lesson 1): "This course teaches everyday standard Hindi, as spoken in Delhi and used on Indian TV and in schools, written in the Devanagari script. Spoken Hindi and Urdu are very close; Urdu is written in another script and uses more Persian and Arabic words."
- **Why this norm:** US university courses teach this standard: Wisconsin's intensive course uses Pien & Farooqui, *Beginning Hindi* and Jain, *Introduction to Hindi Grammar*, and teaches the script in week 1 ([WISLI syllabus 2025](https://wisli.wisc.edu/wp-content/uploads/sites/239/2025/11/2025-Elem-Hindi-Syllabus.pdf)); UT Austin's *First-Year Hindi Course* writes Hindi in Devanagari with "no transcriptions" ([Van Olphen 1995](https://repositories.lib.utexas.edu/bitstream/handle/2152/46086/First_Year_Hindi_Course-Part_1.pdf)) [curriculum convention].
- **Regional forms** (Mumbai's बम्बइया, eastern हम for "I", Punjabi-influenced Delhi slang) appear only in card notes, never as accepted answers [inference].

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. The changes in §8 come from the learners (§4, §5) and from the script stage.

### 2.3 आप, तुम and तू

| Form | Verb with it | Used for | In the course |
|---|---|---|---|
| आप āp | plural forms: आप कहाँ रहते हैं? / रहती हैं? Imperative -इए: बैठिए | strangers, older people, shopkeepers and customers, teachers, colleagues; the safe default | **default** in every prompt, example and dialogue from lesson 5 |
| तुम tum | -ते हो: तुम कहाँ रहते हो? Imperative -ओ: बैठो | friends, children, younger siblings and cousins, people clearly younger than you | taught in `greetings`, used in friend and family dialogues, practised in `imperative` |
| तू tū | singular: तू कहाँ रहता है? Imperative = stem: बैठ | very close friends, small children, God in prayer; rude to anyone else | **recognition only**: one Traps card and one note in `imperative` |

- [curriculum convention] Van Olphen's *First-Year Hindi Course* (§12.2) presents three levels: आप polite, तुम familiar, तू intimate, each with its own imperative; polite forms are used in the first dialogue before the rule is explained. HindiPod101's tips: "When in doubt, speak formally" ([HindiPod101, *Top 5 tips*](https://www.hindipod101.com/lesson/all-about-14-top-5-tips-for-avoiding-common-mistakes-in-hindi)) [practitioner opinion].
- **आप is grammatically plural** even for one person: the verb, adjective and का / की / के take the plural (masculine) form: आप कैसे हैं? (to a man), आप कैसी हैं? (to a woman: feminine -ī, but still हैं). The same honorific plural is used for respected third persons: मेरे पिताजी डॉक्टर हैं ("my father is a doctor"), not मेरा पिताजी… है [curriculum convention: Unbabel's Hindi guide, "An honorific pronoun should always get an honorific verb agreement" ([Unbabel](https://help.unbabel.com/hc/en-us/articles/360008922813-Language-Guidelines-Hindi))].
- **Plural "you":** आप and तुम have no separate plural; आप लोग / तुम लोग make it clear (recognition) [curriculum convention, Van Olphen §12.2].

**Rules for writers**
- A prompt whose answer contains "you" says who is addressed when it matters: "(to a friend)" → तुम; "(politely)" / "(to a shopkeeper)" or no cue → आप. A prompt with no cue accepts only आप forms: the course teaches आप as the default, so a bare "you" means आप.
- **Speaker and addressee gender.** Hindi verbs agree with the speaker (मैं जाता हूँ, a man; मैं जाती हूँ, a woman) and with the person addressed (आप कैसे हैं? / आप कैसी हैं?). Every first-person and second-person prompt whose answer changes with gender carries a cue: "(a man speaking)", "(a woman speaking)", "(to a woman)", or a named persona (§9.1: Sarah, David, Priya, Rahul). Only the cued form is accepted; the other-gender form is the distractor. Without a cue, the item is about something else and must avoid gendered verbs (use a third person or a noun subject).
- Dialogue roles: customer and shopkeeper both use आप; student and teacher: आप + जी; two new acquaintances of the same age: आप, switching to तुम only when the dialogue says they are friends.

### 2.4 Greetings, जी and thanks in real use

| Hindi | `pron` (generated) | Use | Lesson |
|---|---|---|---|
| नमस्ते | namaste | hello and goodbye, any time of day, to anyone; hands pressed together optional | `greetings` |
| नमस्कार | namaskār | the same, a little more formal (news, speeches, older people) | `greetings` (recognition) |
| जी | jī | after a name or title for respect (शर्मा जी, माताजी); alone = "yes" (polite) or "pardon?"; जी हाँ / जी नहीं = polite yes / no. Never after your own name | `greetings` |
| हाँ / नहीं | hā̃ / nahī̃ | yes / no | `greetings`, `negation` |
| शुक्रिया | shukriyā | thank you: the everyday spoken word | `greetings` |
| धन्यवाद | dhanyavād | thank you: more formal; signs, announcements, speeches, written thanks | `greetings` |
| थैंक यू / थैंक्स | thaink yū / thainks | very common in urban speech; recognition in a card note | `greetings` (note) |
| माफ़ कीजिए | māf kījie | excuse me; sorry. सॉरी is common too (note) | `greetings` |
| कोई बात नहीं | koī bāt nahī̃ | no problem; that's OK; you're welcome (to thanks) | `greetings` |
| फिर मिलेंगे | phir milẽge | see you again; with नमस्ते the usual goodbye. अलविदा is a dramatic "farewell" (Traps note); बाय is common among the young (note) | `greetings` |
| कृपया | kripayā | "please" on signs and in formal requests; in speech, politeness comes from आप + -इए (बैठिए) and ज़रा; प्लीज़ is common in casual urban speech (note) | `imperative` |

- [practitioner opinion] HindiPod101: शुक्रिया and धन्यवाद are "by far" the most common ways to say thank you; धन्यवाद is Sanskrit-derived and formal, शुक्रिया more colloquial; Hindi speakers thank less often than English speakers, because "politeness is already expressed by the polite form of pronouns and verbs" ([HindiPod101, *How to say thank you*](https://www.hindipod101.com/blog/2017/11/27/how-to-say-thank-you-in-hindi/)). Unbabel lists शुक्रिया and प्लीज़ as informal-register examples and धन्यवाद and कृपया as formal ones ([Unbabel](https://help.unbabel.com/hc/en-us/articles/360008922813-Language-Guidelines-Hindi)) [curriculum convention].
- **Decision:** teach शुक्रिया as the spoken thank-you and धन्यवाद as the formal one, both actively; accept either wherever "thank you" is the answer. One card note: thanking family members for small things can sound distant [inference, §11].
- Other greetings appear only in notes: आदाब and अस्सलाम अलैकुम (Muslim speakers), सत श्री अकाल (Sikh speakers), राम राम (rural north) [inference].

### 2.5 Everyday words over Sanskritised ones

[curriculum convention] Unbabel's guide: the informal register "is open to English words and code-mixing, and focuses on the daily spoken language"; the formal register "leans towards written and traditional form". Google says it is "very common to communicate and type in 'Hinglish'" ([Google, 2016](https://blog.google/topics/google-asia/an-easier-way-to-type-in-hindi-and-10/)).

**Rule:** use the word a Delhi speaker uses in neutral, polite speech.
- **The English loan, in Devanagari, when it is the normal word:** स्टेशन, टिकट, बस, ट्रेन, होटल, डॉक्टर, फ़ोन, मोबाइल, कंप्यूटर, ऑफ़िस, टैक्सी, बिल, कॉफ़ी. Never दूरभाष (telephone), संगणक (computer), चिकित्सक (doctor) [inference].
- **The native word when it is just as everyday:** समय (time; note: टाइम is common too), पानी, घर, दुकान, कमरा, खाना, बाज़ार, दोस्त, काम, छुट्टी [inference].
- **Persian and Arabic words that are everyday Hindi stay** (ज़रूर, शुक्रिया, दुकान, हफ़्ता, किताब, ख़ुश, मुश्किल): they are standard Hindi, not Urdu [inference].
- **Never Latin letters in Hindi strings** (no "OK", "WiFi"): write ओके, वाई-फ़ाई if needed, or avoid.
- Card notes may name the other word: "Also टाइम in casual speech", "Formal: धन्यवाद".

### 2.6 Politeness basics an A1 learner needs

1. आप + plural verb with anyone you do not know (§2.3).
2. जी after names and titles, जी हाँ / जी नहीं for a polite yes / no.
3. Requests with the -इए form (बैठिए, दीजिए, बताइए) and ज़रा ("just"): ज़रा पानी दीजिए ("could I have some water?"). Bare commands (दो!) only to friends and children.
4. Older relatives and respected people take plural verbs and का → के: मेरे दादाजी (my grandfather).
5. Address terms: भैया ("brother": shopkeepers, drivers, a man your age or a bit older), दीदी ("sister"), अंकल / आंटी (a friend's parents, older neighbours), सर / मैडम (offices, shops), जी after a surname (वर्मा जी). In the course: भैया and दीदी in shopping and taxi dialogues; अंकल / आंटी in family dialogues [inference].

### 2.7 Voice of the English text

- Plain, friendly US English, US spelling. A `why` is one sentence.
- Hindi inside English text: in lesson bodies `<b>` around the Devanagari, then the romanisation in `<i>` once at first mention in that lesson: `<b>नमस्ते</b> <i>namaste</i>`. In plain-text fields (`why`, `hint`, notes) write the Devanagari bare; add the romanisation in brackets only when the point is the sound ("ट (ṭ, tongue curled back)").
- Never add English endings to Hindi words: "two postpositions", not "two कोs".
- Sample voice lines:
  1. "किताब is feminine, so it's मेरी किताब, not मेरा किताब."
  2. "In Hindi the postposition comes after the noun: घर में, 'in the house'."
  3. "Nice work! Review these cards tomorrow so they stick."

### 2.8 Hindi text conventions (every file)

- **Devanagari only**, Unicode NFC, spaces between words. Postpositions are written **separately after nouns** (राम ने, घर में) and **joined to pronouns** (उसने, आपको, मुझसे, इसमें) [curriculum convention: Unbabel 3.1: "The case markers in Hindi should always be written as separate words… except in case of pronouns where they should be tagged on to the stems"].
- **One spelling per word** (the lint compares whole strings): हिंदी (not हिन्दी), गए (not गये), गई, चाहिए (not चाहिये), लिए, ज़रूर (with nuqta), हाँ (not हां), नहीं, मैं, में, हैं, क्यों, यहाँ, वहाँ, कहाँ, पाँच, अंग्रेज़ी, दफ़्तर, ठीक, कृपया, शुक्रिया.
- **Nasals:** ँ (chandrabindu) for a nasal vowel where no vowel sign rises above the line (हाँ, हूँ, पाँच, आँख, माँ, गाँव); ं over a vowel sign above the line (मैं, में, नहीं, हैं, क्यों, उन्हें). ं for a nasal consonant before a stop of its own row (हिंदी, ठंडा, पसंद, मुंबई); a written conjunct elsewhere (उन्हें, तुम्हारा, अन्य). The generator reads both forms correctly, and warns on हां-type spellings.
- **Nuqta** on क़ ख़ ग़ ज़ फ़ wherever standard spelling has it (ज़रूर, फ़ोन, ख़ुश, बाज़ार), never where it does not (फिर, not फ़िर) [curriculum convention: Unbabel 3.4 and 8, with तेज़ / तेज and फ़न / फन as pairs]. ड़ and ढ़ (लड़का, पढ़ना) are separate letters and always written.
- **Punctuation:** । (danda) ends a statement in card targets, examples, dialogues and `fill` sentences; ? and ! as in English; commas sparingly [curriculum convention: Unbabel 4: "The Hindi full stop… should be represented by (।) and not by (.)"]. **No । in accepted answers or tiles** until engine request 1 is built (§10.8).
- **Numbers as words** in Hindi strings (पचास रुपये, साढ़े तीन बजे), never digits: the generator throws on digits, and the voice and the romanisation must agree. Unbabel's advice to use Arabic numerals is for documents, not for a course that teaches the number words.
- **No Latin letters, no ZWJ / ZWNJ, no Devanagari digits, no visarga** (दुख, not दुःख; छह, not छः). The validator already rejects invisible characters (U+200B–200F).

## 3. Glossary

These are the terms of English-language Hindi grammars and courses [curriculum convention]: Van Olphen's *First-Year Hindi Course* (oblique case, habitual present, progressive present, KO verbs, compulsion constructions), the Wisconsin syllabus (postpositions, obliques, compound postpositions, present habitual, perfective), the Kirk & SV script guide (anusvār, candrabindu, aspirated, bilabial) and Wiktionary's transliteration page (retroflex, nuqta). Use each term exactly and always the same way; terms marked **keyword** are standing-rule keywords (§7).

| Term to use | Do not use | Note |
|---|---|---|
| Devanagari | Sanskrit script, Hindi alphabet (except once as a gloss) | The script. |
| letter; vowel letter; consonant | character, akshar | |
| vowel sign | matra (except once, as a gloss), diacritic | "the vowel sign ा"; **keyword** "vowel sign" |
| inherent a | schwa (except once, as a gloss) | "every consonant carries an a unless a sign changes it" |
| silent a | schwa deletion | "the a that is written but not said: कमल = kamal" |
| headline | shirorekha | the line along the top of the letters |
| conjunct | ligature, cluster (except as a gloss) | two consonants joined with no a between: स्त, क्य |
| half letter | | the shape a consonant takes inside a conjunct (स् in स्त) |
| virama | halant (except once, as a gloss) | the little stroke ् that removes the a |
| nasal dot (ं) | anusvara (except once, as a gloss) | |
| moon dot (ँ) | chandrabindu (except once, as a gloss) | |
| nasal vowel | nasalised vowel | "said through the nose: हाँ hā̃" |
| nuqta (the dot under ज़ फ़ क़ ख़ ग़) | dot below, nukta | |
| long vowel; short vowel | | ā ī ū against a i u; **keyword** |
| aspirated; unaspirated ("with a puff of air", "without") | breathy (except for the voiced ones, once) | **keyword** "aspirated" (also matches "unaspirated") |
| dental; retroflex ("tongue on the back of the teeth"; "tongue curled back") | cerebral, alveolar | **keyword** both |
| flap (ड़, ढ़) | | |
| romanisation | transliteration, Hinglish | the pron line; "Hinglish" means mixed Hindi-English speech |
| noun; pronoun; verb; adjective; adverb | | |
| masculine; feminine | male / female (for words) | **keyword** both |
| singular; plural | | **keyword** "plural" |
| agree; agreement | concord | "the verb agrees with the subject"; **keyword** |
| -ā ending, -e ending, -ī ending | inflection | the three forms of adjectives like अच्छा / अच्छे / अच्छी |
| changing adjective / unchanging adjective | marked / unmarked, variable / invariable | अच्छा changes; लाल does not |
| postposition | preposition, case marker, particle | "Hindi puts it after the noun"; **keyword** |
| compound postposition | complex postposition | के पास, के लिए, के बाद, के साथ |
| oblique form | oblique case (except once, as a gloss), indirect case | "the form a noun takes before a postposition: लड़का → लड़के को"; **keyword** "oblique" |
| subject; object | agent, patient | |
| verb at the end; Hindi order (subject · object · verb) | SOV | |
| question word | interrogative, k-word | क्या, कौन, कहाँ, कब, क्यों, कैसे, कितना |
| yes-no question with क्या | | |
| negative (नहीं, न, मत) | negation marker | |
| infinitive (the -ना form) | dictionary form (except as a gloss), gerund | करना, जाना |
| stem | root | the infinitive minus -ना: कर, जा |
| command form (-इए polite, -ओ familiar) | imperative (except in the lesson title and once as a gloss) | |
| present habitual (-ता है) | simple present | "what you do usually" |
| continuous (रहा है) | progressive (except once, as a gloss) | |
| past habitual (-ता था) | used to | |
| completed past (perfective) | simple past, preterite | "perfective" once, as a gloss |
| ने construction | ergative (except once, as a gloss) | "with a transitive verb in the completed past, the subject takes ने and the verb agrees with the object" |
| transitive / intransitive verb ("a verb that takes an object") | | |
| future (-एगा) | | |
| मुझे-construction ("to me it is pleasing") | dative subject, experiencer | मुझे पसंद है, मुझे चाहिए, मुझे भूख लगी है |
| honorific plural | respect plural | आप and respected people take plural verbs |
| false friend; calque ("word-for-word copy") | false cognate | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items that occur in nearly every sentence and can be checked in tiled or typed practice come first.
2. Items with learner data opened for this profile are ranked up within that group.
3. Then lesson-local, sound and vocabulary traps.

Learner data on English speakers learning Hindi is thin. The studies found were read as abstracts or records only, and most "common mistake" lists online are written for Indian school students, not for English speakers (§11). Much of this section is therefore [inference] and in the native-check list.

1. **Gender and number agreement (verbs, adjectives, का / की / के, and the speaker's own gender)**
   - Wrong → right:
     - मेरा किताब → मेरी किताब ("my book": किताब is feminine)
     - वह लड़की बहुत अच्छा है। → वह लड़की बहुत अच्छी है।
     - मैं हिंदी सीखता हूँ। said by a woman → मैं हिंदी सीखती हूँ।
     - बड़ा कमरे → बड़े कमरे ("big rooms")
     - लड़कियाँ आ रहे हैं। → लड़कियाँ आ रही हैं।
     - पानी ठंडी है। → पानी ठंडा है। (पानी is masculine; the -ī ending does not make a noun feminine)
   - [practitioner opinion] HindiPod101's tip 3, "Watch your gender": verbs and adjectives change with a noun's gender, so learn each noun's gender as you go; male learners who copy a female teacher sound feminine ([HindiPod101, *Top 5 tips*](https://www.hindipod101.com/lesson/all-about-14-top-5-tips-for-avoiding-common-mistakes-in-hindi)).
   - [inference] English has no grammatical gender and marks number on the noun only, so every -ā / -e / -ī choice is new. It recurs in almost every sentence from `hona` on.
   - Design consequence: strand (a) of the standing rule (§7); nouns on cards carry their gender in the note ("feminine"); every first-person prompt cues the speaker (§2.3).

2. **Postpositions after the noun, and the oblique form before them**
   - Wrong → right:
     - में घर → घर में ("in the house")
     - लड़का को → लड़के को ("to the boy")
     - मेरा घर में → मेरे घर में ("in my house": the possessive goes oblique too)
     - कमरा में → कमरे में
     - यह में → इसमें; मैं को → मुझे / मुझको
     - लड़कियाँ के लिए → लड़कियों के लिए (oblique plural -ओं)
   - [research-backed, abstract only] Montrul, Bhatia, Bhatt & Puri (2019), *Frontiers in Psychology* 10:461: adult L2 learners of Hindi (24) and heritage speakers (26) showed "similarly lower command" of the Hindi case system than balanced bilinguals, on oral production and acceptability judgments; the exception was -को with direct objects, which depended on specificity ([Montrul et al. 2019](https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00461/text)). No error rates were read.
   - [curriculum convention] Van Olphen teaches word order and postpositions in lesson 2 and the oblique singular in lesson 3, before any tense; Wisconsin teaches "simple postpositions and obliques" in week 2.
   - Design consequence: strand (b) of the standing rule; the `postpositions`, `oblique` and `possessive` lessons; deck cards show nouns inside phrases (घर में, दुकान पर).

3. **The verb at the end, and question words where the answer goes**
   - Wrong → right:
     - मैं खाता हूँ खाना। → मैं खाना खाता हूँ।
     - आप रहते हैं कहाँ? → आप कहाँ रहते हैं?
     - कहाँ आप रहते हैं? is possible but marked → आप कहाँ रहते हैं?
     - मैं जाता हूँ दिल्ली कल। → मैं कल दिल्ली जाता हूँ। / मैं कल दिल्ली जाऊँगा।
     - क्या at the end for a yes-no question → at the start: क्या आप हिंदी बोलते हैं?
   - [curriculum convention] Van Olphen §14 ("word order and postpositions") and Wisconsin week 1 ("word order") teach this first.
   - [inference] Learners pick up verb-final order quickly in short sentences; errors come back in longer ones with time and place words and with questions.
   - Design consequence: tiles in `or` items; strand (b) counts an item only when the postposition or oblique is the hinge, not order alone (§7).

4. **है / हैं / हूँ, and the plural with आप and respected people**
   - Wrong → right:
     - आप कहाँ रहता है? → आप कहाँ रहते हैं?
     - मैं है → मैं हूँ; हम है → हम हैं
     - मेरे पिताजी डॉक्टर है। → मेरे पिताजी डॉक्टर हैं।
     - आप कैसा हैं? (to a man) → आप कैसे हैं?
   - [curriculum convention] Unbabel 2.1.3: "An honorific pronoun should always get an honorific verb agreement" (आप क्या कर रहे हैं?).
   - Design consequence: the `hona` lesson; strand (a), because it is agreement.

5. **मुझे-constructions: like, need, know a language, feel, have**
   - Wrong → right:
     - मैं पानी चाहिए। → मुझे पानी चाहिए।
     - मैं चाय पसंद हूँ। → मुझे चाय पसंद है।
     - मैं भूख हूँ। → मुझे भूख लगी है।
     - मैं ठंडा हूँ। for "I'm cold" → मुझे ठंड लग रही है। (मैं ठंडा हूँ = "I am a cold thing")
     - मैं एक गाड़ी है। / मेरे पास एक गाड़ी है। → for things: मेरे पास एक गाड़ी है; for relatives: मेरा एक भाई है (not मेरे पास एक भाई है)
   - [curriculum convention] Van Olphen teaches "KO verbs" (§20) in lesson 3 and के पास, need and compulsion constructions in lesson 5.
   - [inference] English has one subject pattern ("I need", "I like", "I have"); Hindi moves the person into the oblique with को. It is a core A1 need (food, shopping, health).
   - Design consequence: `like-need`, `have` and the Health deck; strand (b) counts these items, because मुझे / आपको is a pronoun with को.

6. **ने in the completed past**
   - Wrong → right:
     - मैं खाना खाया। → मैंने खाना खाया।
     - उसने किताब पढ़ा। → उसने किताब पढ़ी। (the verb agrees with the object, किताब, feminine)
     - वह ने → उसने; मैं ने → मैंने
     - मैंने दिल्ली गया। → मैं दिल्ली गया। (जाना has no object: no ने)
   - [research-backed, record only] Ranjan (2016), PhD dissertation, University of Iowa, *Acquisition of ergative case in L2 Hindi-Urdu*, tested L1 English classroom learners against native speakers with judgment, self-paced reading and production tasks ([record](https://iro.uiowa.edu/esploro/outputs/doctoral/Acquisition-of-ergative-case-in-L2/9983776954302771)); the record gives no findings.
   - [inference] The hardest A1 point: it reverses which noun the verb agrees with. The roadmap puts it near the end; so does this profile.
   - Design consequence: `past` comes after the habitual, continuous and था lessons; strand (a) ("agrees with the object").

7. **Sounds that English does not separate**
   - Wrong → right (said):
     - त (dental t, tongue on the teeth) and ट (retroflex ṭ, tongue curled back) said the same: तोता (parrot) and टोटा (shortage) merge; English t sits between the two.
     - पल (pal, a moment) said with an English puff of air, so it sounds like फल (phal, fruit); initial p, t, k in English are aspirated, so unaspirated Hindi प त क sound wrong.
     - फ read as f: फल is *phal* ("p" + a puff), not "fal". The f of फ़ोन has the nuqta.
     - भ घ ध झ (voiced with a puff) said as plain b g d j: भाई (brother) as "bai".
     - दिन (din, day) and दीन (dīn, poor): short and long vowels are different words.
     - है (hai, is) and हैं (haĩ, are): the nasal vowel carries the plural.
     - है read as English "high": Hindi ai is closer to the vowel of "bet", held long; औ is close to "awe".
     - Final silent a said aloud: नमस्ते is fine, but कमल is *kamal*, not "kamala", and करना is *karnā*, not "karanā".
     - ड़ (a flap: the tongue flicks forward) said as d or r: लड़का.
   - [research-backed] Werker & Tees (1984), *Infant Behavior & Development* 7, reprinted 2002: 6–8-month-old English-learning infants discriminated Hindi retroflex /ṭa/ from dental /ta/ (11 of 12 reached criterion), 10–12-month-olds mostly did not (2 of 10); the earlier study they report (Werker et al. 1981) found that **English-speaking adults** did not discriminate the Hindi contrasts well, especially the place contrast, and English children of 4, 8 and 12 did as poorly as adults ([Werker & Tees 2002 reprint](https://sites.socsci.uci.edu/~lpearl/courses/readings/WerkerTees2002_FunctionalReorganization.pdf)). The adult result is the 1981 study as reported there, not read directly.
   - [practitioner opinion] UT Austin's Hindi pronunciation page: "most American English pronunciations of the consonants t and d are actually somewhere between the Hindi त / ट and द / ड"; aspirated sounds "require more projected air" than English ([UT Austin Hindi site, *Hindi pronunciation*](https://hindi.la.utexas.edu/?p=1093)).
   - Design consequence: the script lessons, the four letter decks, the sound strand of the standing rule in the script stage (§7), and the romanisation's dots and macrons (§6).

8. **Reading the script**
   - Wrong → right (read):
     - ि written before the consonant read before it: कि is *ki*, not "ik"
     - में (mẽ, in) and मैं (maĩ, I) confused: one stroke apart (HindiPod101 tip 4)
     - conjuncts read with an a in the middle: नमस्ते *namaste*, not "namasate"
     - the nasal dot read as a full n everywhere: हैं is *haĩ*, a nasal vowel
   - Design consequence: `vowels` and `conjuncts`; the romanisation stays on until the learner turns it off.

9. **Negation**
   - Wrong → right:
     - मैं जानता नहीं। (marked) → मैं नहीं जानता।
     - नहीं करो! → मत करो! (don't, to a friend) / मत कीजिए / न कीजिए (polite)
     - मैं नहीं हूँ जाता। → मैं नहीं जाता। (with नहीं, the habitual usually drops हूँ / है)
   - [inference] standard teaching points.
   - Design consequence: the `negation` lesson; मत in `imperative`.

10. **Politeness slips**
    - Wrong → right:
      - तुम to a shopkeeper or an older stranger → आप
      - मेरा नाम सारा जी है। → मेरा नाम सारा है। (जी only after other people's names: HindiPod101 tip 1)
      - दो! ("give!") to a stranger → दीजिए / ज़रा दीजिए
      - धन्यवाद after every small thing with friends → fewer thanks, or शुक्रिया / थैंक्स
    - [practitioner opinion] HindiPod101 tips 1–2; HindiPod101 on thanking.
    - Design consequence: §2.3–2.6; the `greetings` and `imperative` lessons.

11. **False friends and calques**
    - Wrong → right:
      - आपका स्वागत है for "you're welcome" (after thanks) → कोई बात नहीं (आपका स्वागत है = "welcome to our place")
      - मैं अच्छा हूँ for "I'm fine" → मैं ठीक हूँ (अच्छा is possible; ठीक is the usual answer)
      - मैं पच्चीस साल हूँ for "I'm 25" → मैं पच्चीस साल का हूँ / की हूँ (a woman)
      - मैं ठंडा हूँ for "I'm cold" → मुझे ठंड लग रही है
      - कल is both "yesterday" and "tomorrow": the verb's tense decides (कल आया / कल आऊँगा)
      - आम = mango, and also "common"; हिंदू (a Hindu) is not हिंदी (the language)
      - अलविदा as an everyday "bye" → नमस्ते / फिर मिलेंगे (अलविदा sounds like a final farewell)
      - माफ़ कीजिए to call someone over → सुनिए / भैया (माफ़ कीजिए is "excuse me, sorry")
    - [inference] teaching lore and the author's knowledge; native check needed (§11). HindiPod101 gives आम / आम as a pair.
    - Design consequence: the Traps deck.

12. **Numbers and time**
    - Wrong → right:
      - बीस पाँच for 25 → पच्चीस (every number from 1 to 100 is its own word)
      - तीन और आधा बजे for 3:30 → साढ़े तीन बजे; 1:30 → डेढ़ बजे; 2:30 → ढाई बजे
      - एक सौ पचास is fine, but लाख (100,000) and करोड़ (10 million), not "hundred thousand", for big sums (recognition)
    - [inference] standard teaching points.
    - Design consequence: the added `numbers` lesson and the Numbers and money deck.

## 5. Learners: who, why, what first

**Who**
- [research-backed] About 4.9 million people in the US identify as Indian (Pew, ACS 2021–23; 5.2 million in the Census Bureau's 2023 estimate). About 34% were born in the US. Of those aged 5 and older, **28% speak only English at home and 18% speak Hindi**; Telugu (11%), Gujarati (10%) and Tamil (7%) follow ([Pew Research Center, *Indians in the U.S.*](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-indians-in-the-u-s/markdown)). So there is a large pool of heritage learners, including families whose home language is not Hindi but who want Hindi as India's lingua franca or for Bollywood and in-laws.
- [research-backed, abstract only] Montrul et al. (2019) studied heritage speakers and adult L2 learners of Hindi side by side and found both with "similarly lower command" of case (§4.2): heritage learners understand speech but need the same grammar as beginners.
- [research-backed] College enrolments are small: the 2013 MLA survey counted 3,090 enrolments in all Indian languages together, down from 3,924 in 2009 (reported by [CFR, *Few takers for Hindi*](https://www.cfr.org/articles/few-takers-hindi)). Self-study and apps are therefore the main route for most adults [inference].
- [inference] The groups, probably in this order of size:
  - **heritage learners** (Hindi, Punjabi, Gujarati, Bengali or other South Asian homes) who understand some spoken Hindi but cannot read Devanagari or speak with confidence;
  - **partners and in-laws** of Hindi speakers;
  - **travellers, yoga and culture fans** (Bollywood, food, music, spiritual travel to Rishikesh and Varanasi);
  - **career learners** (tech teams with colleagues in India, government and NGO work, students before a semester in India).

**Why they study**
- No survey of US adult Hindi self-learners' motives was opened (§11). [inference] Family and identity, a partner's family, travel and culture, work with Indian colleagues.

**What they need first** [inference]
1. **Reading Devanagari well enough to use the course.** Without it the learner is stuck on the romanisation. Four short script lessons first, each with a letter deck, as in Wisconsin's week 1 and every beginner book looked at.
2. **Survival politeness:** नमस्ते, आप, जी, शुक्रिया / धन्यवाद, माफ़ कीजिए, हाँ / नहीं, introducing yourself (मेरा नाम… है, मैं अमरीका से हूँ). The roadmap's `greetings` does this as lesson 5.
3. **Talking about family**, with the honorific plural (मेरे पिताजी, मेरी दादी जी): what heritage learners and partners use first. Added as `family`.
4. **Numbers, prices and the time:** Hindi numbers 1–100 are all separate words, which no other lesson can absorb in passing. Added as `numbers`, before `food`.
5. **Ordering food, shopping, getting around:** the roadmap's `food` and `directions`.
6. **The मुझे-constructions** (I like, I need, I know Hindi, I'm hungry) early, because they are what a beginner reaches for: the roadmap's `like-need` stays in step 1.

**Check of the roadmap's order** [curriculum convention]
- Wisconsin's intensive course, week 1: script; word order, pronouns and होना; yes-no questions and negation; कौन, क्या, कहाँ; greetings and introductions; numbers 1–20; gender and number; adjectives; imperatives and infinitives; possessives. Week 2: postpositions and obliques with का / के / की; compound postpositions and के पास; time and the present habitual; past of होना and past habitual ([WISLI 2025](https://wisli.wisc.edu/wp-content/uploads/sites/239/2025/11/2025-Elem-Hindi-Syllabus.pdf)). Continuous, perfective and future come later; the schedule read does not reach ने.
- Van Olphen (UT Austin): nouns, यह / वह, adjectives → pronouns and होना, imperatives, word order and postpositions → oblique singular, KO verbs, के लिये → habitual present → progressive present, oblique plural, के पास, compulsion and need → अपना, past tense.
- The roadmap follows the same core: script, greetings, होना, gender, adjectives, questions, negation, postpositions, oblique, possessive, imperative, like / need, then habitual, continuous, था, के पास, infinitive, past with ने, future. This profile keeps that order, splits the consonants into two lessons, and adds `numbers` and `family` (§8).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] English-language Hindi materials use diacritic romanisations of the IAST family: UT Austin's pronunciation page writes ā, ṭ, ḍ, ṇ, ś, ṣ (*pañjāb*, *raṅg*); the Kirk & SV script guide writes macrons and underdots ([*A Practical Guide to Hindi Script*](https://iu.pressbooks.pub/hindiscript/?p=279)); Wiktionary writes ā ī ū, ṭ ḍ ṇ, c / ch, ś / ṣ, q x ġ z f for the nuqta letters, ṛ for ड़, and **a tilde for nasal vowels** for both ँ and ं ([Wiktionary, *Hindi transliteration*](https://en.wiktionary.com/wiki/Wiktionary:HI_TR)). Garret Wilson's lessons follow ISO 15919 and Snell's *Beginner's Hindi Script* in writing हाँ as *hā̃* ([Candrabindu](https://www.garretwilson.com/education/languages/hindi/devanagari/lesson5/candrabindu)).
- [practitioner opinion] HindiPod101 lists IAST, Hunterian, ISO 15919 and ASCII schemes, and notes that people who type Hindi in Roman letters "don't follow any specific transliteration", so one word gets many spellings ([HindiPod101](https://www.hindipod101.com/lesson/hindi-teachers-answer-your-questions-5-what-types-of-hindi-romanization-are-there)).
- [research-backed] Schwa deletion is predictable by rule for most words but not all: rule systems score about 89% (Narasimhan et al. 2004) and 86–94% (Tyson & Nagar 2009) per word, Wiktionary's module 94.9%, a trained model 97.8%; errors cluster in compounds, multi-morpheme words and loans ([Arora, Gessler & Schneider 2020](https://arxiv.org/pdf/2004.10353.pdf)).
- [research-backed] English speakers do not hear the dental / retroflex contrast well (Werker & Tees, §4.7), so the aid must mark it.

**Decision.** `pron: "required"`. The `pron` is a learner romanisation of the IAST family (macrons, underdots, tilde), **generated by `tools/target/hi/respell.js`**, never typed by hand. `node tools/target/hi/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `warnings`, `EXC`, `VER`).

**Why not the simplified "namaste, aap kaise hain" style:** it hides exactly what English speakers get wrong (dental vs retroflex, long vs short vowels, nasal vowels: *hai* / *hain* is है / हैं, but *main* is मैं, a nasal vowel, not a final n), it has no fixed spelling (aap / ap, hain / hai, mein / me), and it reads as English letters ("hai" as "high"). **Why not full IAST:** c for च (English readers say k), ś / ṣ for two letters Hindi says the same, ṛ for ऋ (clashes with ड़), and no schwa deletion. The chosen key keeps IAST's marks for the contrasts that matter and uses English-friendly letters for the rest.

### 6.1 Why a generator, and how far it can be trusted

Devanagari maps to sounds letter by letter, with three exceptions the generator must handle:
1. **The silent a** (schwa deletion): कमल *kamal*, करना *karnā*, समझना *samajhnā*, but समझा *samjhā*.
2. **The nasal dot ं**: a nasal consonant before a stop (हिंदी *hindī*, ठंडा *ṭhaṇḍā*, मुंबई *mumbaī*), a nasal vowel elsewhere (हैं *haĩ*, में *mẽ*), and over vowel signs above the line it stands for ँ (मैंने *maĩne*, क्योंकि *kyõki*, पैंतीस *paĩtīs*).
3. **A few letter pairs:** च्च / च्छ (*cch*, *cchh*), ज्ञ said *gy*.

Hand-typed romanisation was weighed and rejected: a regex cannot see a wrong silent a or a missing dot, and four writers would type four versions (*samajhnā* / *samajhanā*, *hindī* / *hindi*). So the generator is the source of truth, built like the zh one:
- **Rules** for every letter, the nasal dot, and schwa deletion: the final a goes, except in a one-vowel word (न *na*, क *ka*) and after a conjunct ending in र or य (मित्र *mitra*, सत्य *satya*); a medial a goes in the context vowel + one consonant _ one consonant + vowel, scanning from the right [inference: this profile's formulation; Arora et al. describe Narasimhan et al.'s rule as a schwa with a vowel and two consonants to its left and a consonant and a vowel to its right], never when it is nasalised (पसंद *pasand*) and never before य or ह (रुपये *rupaye*, दोपहर *dopahar*).
- **`EXC`**, whole-word overrides where the rule is wrong (जनवरी *janvarī*, फ़रवरी *farvarī*, कृपया *kripayā*, नमस्कार *namaskār*, वाराणसी *vārāṇasī*, the months, जगह *jagah*, the numbers 69, 71, 75, 77, 78 (इकहत्तर *ikhattar*), English loans with a real n after ै (बैंक *baink*, थैंक्स *thainks*, पैंट *paiṇṭ*)…). An optional `tools/target/hi/lexicon.txt` adds more (one `हिंदी roman` per line); the lead owns it.
- **It throws** («…», exit 1) on anything that is not Hindi text: Latin letters, digits (write numbers as words), Devanagari digits, visarga ः, avagraha ऽ, a vowel sign with no consonant, an unknown nuqta letter.
- **It warns** (stderr, «…», not fatal) on the known weak spots, unless the word is in **`VER`** (words checked by hand): two deletable a in a row (CaCaCaV: जनवरी goes wrong, समझना goes right), an a beside ह, an a kept before य or ह, a final a after a conjunct, the nasal dot over ā or ū before a stop (शांति or पाँच?), the nasal dot over ी े ै ो ौ before a stop other than the future ending -ंगा / -ंगे / -ंगी (टेंट: a loan with a real n?), and ं where ँ fits (हां).
- **Adding words:** writers never edit a pron. When the generator throws or warns, the writer reports the word; the lead adds it to `EXC` (wrong output) or `VER` (right output) and runs `node tools/target/repron.js hi`.

**How reliable** (self-measured; no native check yet, §11):
- **Test set 1** (159 words and sentences of course vocabulary, written with expected outputs before the generator was run): **3 misses on the first run** (दोपहर came out *dophar*; मैंने and क्योंकि came out *mainne*, *kyonki*). Two rule changes fixed all three (no deletion before ह; ं over upper vowel signs = nasal vowel). Then 0 misses, 0 warnings.
- **Test set 2** (96 items, held out: verb forms, plurals, family, food, colours, health, time, names and cities, written after set 1 was fixed): **1 miss** (वाराणसी came out *vārāṇsī*; added to `EXC`) and 3 warnings, all right (फ़िल्म, दर्द, न्यूयॉर्क: final a after a conjunct, deleted).
- **Test set 3, all number words 1–100** (run after sets 1 and 2): 5 wrong outputs, all **warned** (69, 71, 75, 77, 78: the a before ह is dropped in these compounds, and the h joins the consonant as a puff: इकहत्तर *ikhattar*, पचहत्तर *pachhattar*); added to `EXC`. A short-lived rule that read ai + ं before a stop as a consonant (to get बैंक *baink*) made 33, 35, 37, 43, 45 and 47 silently wrong (*paintīs* for पैंतीस *paĩtīs*); it was reverted, and the loans went into `EXC` instead. Now 100 of 100.
- **Silent-error classes that remain** (no warning): (1) a compound or Sanskrit word with one deletable a where Hindi keeps it (like वाराणसी before it was listed); (2) an English loan whose Hindi spelling hides an a the speaker drops or keeps (*sṭeshan* is right; some loans may not be); (3) English loans where ं over a raised vowel sign is a real n and the next letter is not a stop (पेंसिल comes out *pẽsil*, with no warning); before a stop they warn (टेंट). Writers should run every new noun; the lead skims the output of each file once.
- **Not shown by design:** the e-like colouring of a beside ह (कहना is *kahnā*, said close to "kehnā"; बहन *bahan* ≈ "behen"; शहर *shahar* ≈ "shehar"), and the spoken forms of यह / वह (*yah*, *vah*, said "yeh", "voh"). These are taught as rules in `vowels` and in card notes; the pron shows the spelling's sounds, so it stays a key to the script.

### 6.2 The key (exact format)

| Devanagari | pron | Note for learners |
|---|---|---|
| अ / inherent a | a | like the u in "but"; often silent (§6.1) |
| आ ा | ā | as in "father", held long |
| इ ि / ई ी | i / ī | "sit" / "seat" (long) |
| उ ु / ऊ ू | u / ū | "put" / "boot" (long) |
| ए े | e | like "ay" in "say", without the glide |
| ऐ ै | ai | like the e in "bet", held long (not "eye") |
| ओ ो | o | like "oh", without the glide |
| औ ौ | au | like "awe" |
| ऑ ॉ | ŏ | the o of "doctor" in English loans |
| ऋ ृ | ri | कृपया *kripayā* |
| क ख ग घ | k kh g gh | kh, gh: with a puff of air |
| च छ ज झ | ch chh j jh | च्च *cch*, च्छ *cchh* (अच्छा *acchhā*) |
| ट ठ ड ढ ण | ṭ ṭh ḍ ḍh ṇ | dot below = tongue curled back (retroflex) |
| त थ द ध न | t th d dh n | tongue on the back of the teeth (dental). th is t + a puff, never the "th" of "think" |
| प फ ब भ म | p ph b bh m | ph is p + a puff, never f |
| य र ल व | y r l v | र is a tapped r; व is between English v and w |
| श ष स ह | sh sh s h | श and ष sound the same |
| ड़ ढ़ | ṛ ṛh | a flap: the tongue flicks forward |
| क़ ख़ ग़ ज़ फ़ | q ḵh ġ z f | nuqta letters; many speakers say k kh g for the first three |
| ज्ञ | gy | ज्ञान *gyān* |
| ँ, and ं at the end of a word or before y r l v sh s h | tilde on the vowel: ã ā̃ ĩ ī̃ ũ ū̃ ẽ õ, ai → aĩ, au → aũ | a nasal vowel: हाँ *hā̃*, हैं *haĩ*, में *mẽ* |
| ं before a stop | n / ṇ (before ṭ ṭh ḍ ḍh) / m (before p ph b bh) | a real nasal consonant: हिंदी *hindī*, ठंडा *ṭhaṇḍā* |
| ं over ी े ै ो ौ, also before a stop | tilde | stands for ँ: मैंने *maĩne*, क्योंकि *kyõki*, पैंतीस *paĩtīs* (loans with a real n, like बैंक *baink*, are in `EXC`) |

**Format rules**
- One pron word per Hindi word, single spaces; a hyphen stays a hyphen (धीरे-धीरे → *dhīre-dhīre*).
- **All lowercase**, names included (Devanagari has no capitals; *dillī*, *priyā*).
- Punctuation attached to the word before: । → `.`; ? ! , : ; kept; quotes and brackets dropped.
- **NFC**: ã ĩ ũ ẽ õ precomposed; ā̃ ī̃ ū̃ are the macron letter + U+0303.

### 6.3 `pronPattern`

Built by `respell.js`'s `pattern()`:

```
^(?!.*(?:aa|ii|uu|ee|c(?!c?h)|[^āīū]̃|^̃))[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ̃]+(?:-[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ̃]+)*[.,?!:;]?(?: [abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ̃]+(?:-[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ̃]+)*[.,?!:;]?)*$
```

What it enforces: only the key's letters, lowercase; no w, x, digits or Devanagari; c only in ch / cch; the combining tilde only after ā ī ū (so a decomposed *a* + tilde fails: output must be NFC); no Hinglish doubled vowels (aa, ii, uu, ee); single spaces; punctuation only right after a word; hyphens only inside a word. It rejects *aap kaise hain*, *Āp*, double spaces, a space before ?, a danda, digits. It cannot see a wrong silent a or a wrong dot: the generator, not the pattern, is the guarantee. It works with and without the `u` flag (tested), because `validate.js` compiles it with `u` and `repron.js` without.

### 6.4 Twenty worked examples (all generated, all pass `pronPattern` both ways)

| # | Hindi | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | नमस्ते | `namaste` | hello | the a before a conjunct stays |
| 2 | आप कैसे हैं? | `āp kaise haĩ?` | How are you? | long ā; ai; ं at the end = nasal vowel |
| 3 | मैं ठीक हूँ। | `maĩ ṭhīk hū̃.` | I'm fine. | retroflex ṭh; ū + tilde; । → . |
| 4 | कमल | `kamal` | lotus | final a silent, medial a kept |
| 5 | करना | `karnā` | to do | medial a silent (vowel C _ C vowel) |
| 6 | समझना | `samajhnā` | to understand | right-to-left scan keeps the stem *samajh* |
| 7 | समझा | `samjhā` | understood | same stem, other a dropped |
| 8 | लड़का | `laṛkā` | boy | flap ṛ; medial a silent |
| 9 | ठंडा | `ṭhaṇḍā` | cold | ं before ड = ṇ |
| 10 | हिंदी | `hindī` | Hindi | ं before द = n |
| 11 | पाँच | `pā̃ch` | five | ँ = tilde on ā |
| 12 | मैंने खाना खाया। | `maĩne khānā khāyā.` | I ate. | ं over ै before न = nasal vowel |
| 13 | अच्छा | `acchhā` | good, OK | च्छ = cchh |
| 14 | ज़रूर | `zarūr` | of course | nuqta z |
| 15 | ख़ुश | `ḵhush` | happy | nuqta ḵh; श = sh |
| 16 | डॉक्टर | `ḍŏkṭar` | doctor | ॉ = ŏ; English loan |
| 17 | ज्ञान | `gyān` | knowledge | ज्ञ = gy |
| 18 | मित्र | `mitra` | friend (formal) | final a kept after a conjunct ending in र |
| 19 | फल / पल | `phal` / `pal` | fruit / moment | ph is aspirated p, not f |
| 20 | धीरे-धीरे | `dhīre-dhīre` | slowly | hyphen kept; dh aspirated |

### 6.5 Card front, and hiding the romanisation

- **Card front:** the Devanagari, large. Under it the pron line, **shown by default**. The four script lessons teach the whole script, but reading fluency comes slowly; the pron also shows the silent a, which the script does not.
- **Hideable:** a per-course setting "Romanisation: always / tap to reveal / off" (engine request 6, §10.8). Suggested prompt after lesson 13 (`oblique`): "Reading Devanagari well? Try 'tap to reveal'." Heritage learners who read Devanagari may switch it off from day one.
- **Lesson example rows** show the pron under the Hindi, with the same setting.
- **Practice items carry no pron** (PRACTICE-SPEC). Exception: in the four script lessons, English prompts may name a sound with its romanisation ("Which letter is ṭa?"), and in later sets one sound `mc` item may do the same (§7). Answers are always Devanagari.

### 6.6 What the script lessons must teach, so the aid can be read and later dropped

1. `vowels`: the vowel letters and vowel signs with their romanisation; long vowels with the macron (ā ī ū); e, ai, o, au as single sounds (ai is not "eye"); the inherent a; **the silent a**: the final a is not said (कमल *kamal*), and how the pron shows it.
2. `consonants`: the dot below = retroflex (ṭ ḍ ṇ), plain t d n = dental; h after a letter = a puff of air (kh, ph: never f, th never as in "think"); ch / chh.
3. `consonants-2`: sh for श and ष; v; the flap ṛ; the nuqta letters (z f q ḵh ġ).
4. `conjuncts`: no a inside a conjunct (*namaste*); the tilde = nasal vowel; ं before a stop = n / ṇ / m; ज्ञ = gy; the e-like a beside ह, and यह / वह said "yeh" / "voh".
5. Every lesson body: "The romanisation is a crutch: read the Devanagari first and glance down only to check."

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) Agreement.** The verb, the adjective and का / की / के agree in gender and number with their noun: -ā (masculine singular), -e (masculine plural, oblique, and आप), -ī (feminine); है / हैं / हूँ with the subject; the speaker's own gender in the first person (मैं जाता / जाती हूँ); with ने, agreement with the object.
- **(b) Postpositions and the oblique.** The postposition comes **after** the noun (घर में, स्टेशन के पास), and the noun, adjective or possessive before it takes the **oblique** form (लड़के को, मेरे घर में, बड़े शहरों में); pronouns with को / ने / से have their own forms (मुझे, आपको, उसने, इससे), which is the same point.

**Why these two.**
- They occur in almost every Hindi sentence from lesson 6 (`hona`) on, they have no English counterpart, and they can be checked mechanically with a twin form as the distractor (§4.1, §4.2, §4.4–4.6). The only learner study with results on this (Montrul et al. 2019, abstract) found adult L2 learners weak on exactly the case system.
- They are linked: an oblique noun (लड़के) looks like a masculine plural, and possessives agree and go oblique at once (मेरे घर में). Practising them together trains the -ā / -e / -ī system as one thing.
- **Not chosen:**
  - **Verb-final order:** easy in short sentences (§4.3); every `or` item practises it anyway, so it needs no keyword. A why that only says "the verb goes last" does not count.
  - **ने:** one lesson's point (`past`), and its agreement half is covered by strand (a). It is the preferred mixed-in neighbour in the last two items of later sets.
  - **मुझे-constructions:** counted under (b) when the hinge is the oblique pronoun (मुझे, not मैं); otherwise lesson-local.

**The script stage.** The four script lessons (`vowels`, `consonants`, `consonants-2`, `conjuncts`) have no grammar to agree or decline, and the validator has no exemption. In those four sets only, the hinges are **sound strand** items: dental / retroflex (त / ट, द / ड), aspirated / unaspirated (क / ख, प / फ, ब / भ), long / short vowel (ि / ी, ु / ू) and the vowel sign itself. The same strand may appear later as one sound `mc` item per set (recommended, not counted).

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 `or` items** and **2 `ty` items** hinge on the rule, and their `why` names it with a keyword. A 14-item set has 3 `or` and 3 `ty`, so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** `a` contains an agreeing form, and `x` holds its gender or number twin: मेरी → `x` मेरा; अच्छी → अच्छा; हैं → है; जाती → जाता; पढ़ी (with ने) → पढ़ा.
- **`or`, strand (b):** `a` contains noun or pronoun + postposition, with the noun in the oblique (or the pronoun's को / ने form), and `x` holds the direct form (लड़का for लड़के; मेरा for मेरे before a postposition; मैं for मुझे; वह for उसने).
- **`ty`:** `a[0]` contains the same, and `x` holds the twin. The validator rejects an `x` word that can rebuild an accepted answer, so **the other-gender form must not be accepted**: the prompt cues the speaker or the addressee (§2.3).
- **Script stage:** `or` tiles are the syllables of one word (क / ई), and `x` holds the sound twin (इ for ई; छा for चा; टो for तो). Use **only letters taught by that lesson** (`vowels`: vowel letters and क with its signs; `consonants`: the k, ch and ṭ rows; dental / retroflex twins first in `consonants-2`). A one-word `ty` becomes a coin flip in tiles mode (one tile plus one distractor), so write `a[0]` **syllable-spaced** with the unspaced word as the second answer (`चा चा|चाचा`) and give **two or more distractors** (`छा जा`). The spaced form is never shown as Hindi spelling: the model answer the learner sees after a miss is `a[0]`, so the `why` must spell the word unspaced.
- `fill` items whose distractors are twins are fine and count for nothing; mark them `'!strict'` only if the twin differs by a mark the engine folds (none in Devanagari today).

**Examples in the shorthand** (`tools/target/lib.js`):

```
['or', 'my book', 'मेरी किताब', 'मेरा', 'किताब is feminine, so my is मेरी.']
['or', 'in my house', 'मेरे घर में', 'मेरा', 'Before the postposition में, मेरा takes its oblique form मेरे.']
['ty', 'I drink tea (a woman speaking)', 'मैं चाय पीती हूँ', 'मैं · चाय · पीना', 'पीता', 'The verb agrees with a woman speaker: पीती.']
['ty', 'The boys are in the room', 'लड़के कमरे में हैं', 'लड़का · कमरा · में', 'कमरा', 'The postposition में follows कमरा, which goes oblique: कमरे में.']
['ty', 'I need water', 'मुझे पानी चाहिए', 'मैं → ? · पानी · चाहिए', 'मैं', 'With चाहिए the person takes the oblique form with को: मुझे.']
['or', 'Build kaī (several)', 'क ई', 'इ', 'ई is the long vowel ī; इ is the short vowel i: कई.']
['ty', 'Type chāchā (uncle)', 'चा चा|चाचा', 'च with the vowel sign ा, twice', 'छा जा', 'च is unaspirated ch; छ would be aspirated: चाचा.']
['ty', 'Type pal (a moment)', 'प ल|पल', 'प · ल', 'फ ब', 'प is unaspirated: पल is a moment, फल is fruit.']
```

**Lessons where the rule is hardest, with two hinges each** (`or` / `ty`, distractor in brackets, keyword in the why):
- `vowels` (vowel letters, क and its signs only): or "Build kaī (several)" क ई (x इ, "long vowel"); or "Build kauā (crow)" कौ आ (x को, "vowel sign"). ty "Type āie (please come)" `आ इ ए|आइए` (x अ ई, "long vowel"); ty "Type āo (come!)" `आ ओ|आओ` (x अ औ, "long vowel"). A bare vowel sign is never a tile (it cannot stand alone), so कि / की contrasts go in `mc` items.
- `consonants` (k, ch, ṭ rows): or "Build ṭhīk (fine, OK)" ठी क (x टी, "aspirated"); or "Build chāchā (uncle)" चा चा (x छा, "unaspirated"). ty "Type ḍāk (mail)" `डा क|डाक` (x ढा ख, "unaspirated"); ty "Type jhūṭh (a lie)" `झू ठ|झूठ` (x जू ट, "aspirated").
- `consonants-2` (dental / retroflex now possible): or "Build totā (parrot)" तो ता (x टो, "dental"); or "Build phal (fruit)" फ ल (x प, "aspirated"). ty "Type ṭamāṭar (tomato)" `ट मा ट र|टमाटर` (x त ता, "retroflex"); ty "Type bhāī (brother)" `भा ई|भाई` (x बा इ, "aspirated").
- `conjuncts`: or "Build mumbaī (Mumbai)" मुं ब ई (x मूं, "short vowel"); or "Build ṭhaṇḍā (cold)" ठं डा (x दा, "retroflex"). ty "Type hindī (Hindi)" `हिं दी|हिंदी` (x दि हि, "long vowel"); ty "Type pā̃ch (five)" `पाँ च|पाँच` (x पं छ, "long vowel").
- `greetings`: or "How are you? (to a woman)" आप कैसी हैं (x कैसे, "feminine"); or "I'm fine" मैं ठीक हूँ (x है, "agrees"). ty "Where are you from?" आप कहाँ से हैं (x है, "plural"); ty "I'm from America" मैं अमरीका से हूँ (x है, "agrees").
- `hona`, `gender`, `adjectives`: strand (a) in every hinge (है / हैं / हूँ; अच्छा / अच्छे / अच्छी; लड़का / लड़के).
- `questions`, `negation`: (a) with कैसा / कैसी and जाता / जाती (speaker cued); (b) with किसके लिए, कहाँ से + a noun (दिल्ली से).
- `postpositions`, `oblique`, `possessive`, `family`: (b) in most hinges (कमरे में, मेरे भाई के साथ); (a) through का / की / के.
- `like-need`, `have`, `food`: (b) through मुझे / आपको (x मैं / आप) and के पास (मेरे पास, x मेरा); (a) through food adjectives (ठंडा पानी, गरम चाय). पसंद है is a fixed phrase: do not build an agreement hinge on it.
- `past`: (a) object agreement with ने (किताब पढ़ी, x पढ़ा); (b) उसने / मैंने (x वह / मैं).
- Tense lessons (`habitual`, `continuous`, `was`, `future`): (a) through -ता / -ती / -ते, रहा / रही / रहे, था / थी / थे, -गा / -गी / -गे, with the speaker or subject cued.

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bplural\b|\bpostpositions?\b|\boblique\b|\bafter the noun\b|\bretroflex\b|\bdental\b|\b(?:un)?aspirated\b|\b(?:long|short) vowels?\b|\bvowel signs?\b
```

Use them like this:
- strand (a): "agrees", "agreement", "masculine", "feminine", "plural";
- strand (b): "postposition", "oblique", "after the noun";
- script stage: "retroflex", "dental", "aspirated" / "unaspirated", "long vowel" / "short vowel", "vowel sign".

These are deliberately **not** keywords: "verb at the end" (order alone does not count), "comes after" (so "से goes after the place" does not count until it says "postposition"), "gender" (too vague: say masculine or feminine), "singular". All keywords are ASCII. Do not use them in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 53 of 53 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| किताब is feminine, so my is मेरी: मेरी किताब. | match | should match |
| The verb agrees with a woman speaker: मैं जाती हूँ. | match | should match |
| आप takes the plural verb हैं, even for one person. | match | should match |
| Adjectives agree with the noun: बड़े कमरे, big rooms. | match | should match |
| पानी is masculine, so it is ठंडा, not ठंडी. | match | should match |
| In the completed past with ने, the verb agrees with the object: किताब पढ़ी. | match | should match |
| Plural: लड़के आ रहे हैं. | match | should match |
| का becomes की before a feminine noun. | match | should match |
| Agreement: the -ī ending goes with a feminine subject. | match | should match |
| मेरे पिताजी takes the plural for respect. | match | should match |
| The postposition comes after the noun: घर में. | match | should match |
| Before a postposition लड़का changes to its oblique form, लड़के. | match | should match |
| मुझे is the oblique form of मैं with को. | match | should match |
| Oblique plural before a postposition: लड़कियों के लिए. | match | should match |
| के पास is a compound postposition: it follows the noun. | match | should match |
| मेरा changes to मेरे before a postposition: मेरे घर में. | match | should match |
| में goes after the noun, never before it. | match | should match |
| उसने: with ने the pronoun takes its oblique form. | match | should match |
| ट is retroflex: curl the tongue back. | match | should match |
| त is dental: the tongue touches the teeth. | match | should match |
| ख is aspirated: k with a puff of air. | match | should match |
| प is unaspirated, so पल is not फल. | match | should match |
| ई is the long vowel ī; इ is the short vowel i. | match | should match |
| The vowel sign ा makes the long ā. | match | should match |
| दिन has a short vowel, दीन a long vowel. | match | should match |
| ि is a vowel sign written before the consonant but said after it. | match | should match |
| Masculine nouns in -ā change to -e in the plural. | match | should match |
| Feminine nouns in -ī add -ाँ in the plural. | match | should match |
| With आप the adjective agrees as plural: आप कैसे हैं? | match | should match |
| आपको is आप + को; postpositions join pronouns in writing. | match | should match |
| The postposition से goes after the place: अमरीका से. | match | should match |
| से goes after the place: अमरीका से. | no match | should not match |
| हैं, not है: the subject is plural. | match | should match |
| Use आप with strangers. | no match | should not match |
| क्या at the start makes a yes-no question. | no match | should not match |
| The verb goes at the end in Hindi. | no match | should not match |
| नहीं goes before the verb. | no match | should not match |
| मत is for don't with तुम. | no match | should not match |
| कल means both yesterday and tomorrow; the tense decides. | no match | should not match |
| शुक्रिया is the everyday thank you. | no match | should not match |
| Question words stay where the answer goes. | no match | should not match |
| The future ends in -गा. | no match | should not match |
| Use -इए for polite requests. | no match | should not match |
| Numbers from 1 to 100 are separate words. | no match | should not match |
| साढ़े means "plus a half". | no match | should not match |
| जी goes after other people's names, not your own. | no match | should not match |
| Use the infinitive with चाहना. | no match | should not match |
| रहा shows the action is going on now. | no match | should not match |
| था is the past of है. | no match | should not match |
| Say पच्चीस for 25. | no match | should not match |
| Hindi has no word for "the". | no match | should not match |
| Put the time word before the place. | no match | should not match |
| The tongue goes behind the teeth for this one? Listen again. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 25 items, in roadmap order.** Ids lose the `hi-` prefix; each appears exactly once in a `roadmap` field.
- **Added (3)**, each with an empty `roadmap` field:
  - `consonants-2` (lesson 3): the roadmap's single consonant lesson would carry 33 consonants, the flaps and the nuqta letters at once. Split by rows: `consonants` takes the k, ch and ṭ rows (where the retroflex point is), `consonants-2` the t and p rows (where the dental point and ph ≠ f are), y r l v, sh s h, ड़ ढ़ and the nuqta letters. Each lesson gets its own letter deck.
  - `numbers` (lesson 11, after `negation`): Hindi numbers 1–100 are each a separate word (§4.12) and prices are needed in `food`; no roadmap lesson can absorb them in passing.
  - `family` (lesson 15, after `possessive`): family words and the honorific plural (मेरे पिताजी हैं), which heritage learners and partners need first (§5), and which practises का / की / के at once.
- **Renamed** (titles name the English-speaker point or give a gloss): `hona` "Pronouns and होना: am, is, are"; `adjectives` "Adjectives that agree: अच्छा, अच्छे, अच्छी"; `questions` adds कैसा; `negation` "नहीं, न and मत: saying no"; `oblique` "The oblique form: लड़के को, कमरे में"; `possessive` "का / की / के: my, your, whose"; `imperative` "Requests and commands: बैठिए, बैठो"; `have` "Having: मेरे पास, मेरा एक भाई"; `infinitive` "The -ना form: want to, have to, should"; `was` "था, थी, थे: was, and used to". Script lessons keep plain English titles.
- **Widened:**
  - `food` also covers bargaining a little and paying (the roadmap title says "and shopping").
  - `have` also teaches मेरा एक भाई है for relatives (not के पास) and मुझे … है for illnesses (मुझे बुख़ार है), because English uses "have" for all three (§4.5).
  - `imperative` also teaches ज़रा, कृपया on signs, and मत / न for "don't" (§2.6, §4.9).
- **Stages:** "Script and sounds" grows from 4 to 5 lessons; "Step 1 · First sentences" from 11 to 13; "Step 2 · Tenses" keeps 10.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Script and sounds** | | | |
| 1 | `vowels` | Vowels and vowel signs | hi-vowels | The 11 vowel letters and their vowel signs on क (का कि की कु कू के कै को कौ, plus कॉ); the headline; the inherent a and the silent final a (कमल *kamal*); ि written before but said after; how the romanisation shows long vowels. Trap: short and long vowels heard as one (दिन / दीन); ai read as "eye", e and o with an English glide. | Vowels and vowel signs |
| 2 | `consonants` | Consonants 1: k, ch and ṭ rows | hi-consonants | क ख ग घ, च छ ज झ, ट ठ ड ढ ण, each with a word; aspirated vs unaspirated; the retroflex row (tongue curled back). Trap: English puff of air on every k / t / p; ट said as English t; ख read as "k-h". | Consonants 1: k, ch and ṭ rows |
| 3 | `consonants-2` | Consonants 2: t and p rows, and the rest | (added) | त थ द ध न (dental), प फ ब भ म, य र ल व, श ष स ह, the flaps ड़ ढ़, the nuqta letters ज़ फ़ (and क़ ख़ ग़ for recognition). Trap: फ read as f (फल *phal*); थ as "th" in "think"; त / ट merged (तोता / टोटा, §4.7). | Consonants 2: t and p rows, and the rest |
| 4 | `conjuncts` | Conjuncts, nasal dots and reading words | hi-conjuncts | Half letters and conjuncts (स्त, क्य, प्र, त्र, क्ष, ज्ञ, श्र, द्ध); र above and below; the nasal dot ं and the moon dot ँ; reading whole words with the silent a (करना, समझना). Trap: an a read inside a conjunct (नमस्ते "namasate"); ं read as a full n in हैं, में. | Conjuncts and nasals |
| 5 | `greetings` | Greetings, आप and तुम | hi-greetings | नमस्ते, जी, शुक्रिया / धन्यवाद, माफ़ कीजिए, हाँ / जी नहीं, कोई बात नहीं, फिर मिलेंगे; मेरा नाम … है, आप कहाँ से हैं? मैं अमरीका से हूँ; आप (default) vs तुम vs तू (recognition), §2.3–2.4. Trap: तुम to a stranger; जी after your own name; आपका स्वागत है for "you're welcome". | Greetings and courtesy |
| | | **Stage 2: Step 1 · First sentences** | | | |
| 6 | `hona` | Pronouns and होना: am, is, are | hi-hona | मैं हूँ, तुम हो, आप हैं, यह / वह है, हम / ये / वे हैं; यह and वह as "this / he / she / it" (no gender in the pronoun); the verb last. Trap: मैं है; आप है; मेरे पिताजी … है without the respect plural (§4.4). | About me |
| 7 | `gender` | Gender and plurals | hi-gender | Every noun is masculine or feminine; -ā nouns (लड़का, कमरा) and -ī nouns (लड़की) as hints, with exceptions (पानी, आदमी masculine; किताब, बात feminine); plurals: लड़का → लड़के, लड़की → लड़कियाँ, किताब → किताबें, unchanged घर. Trap: guessing gender from meaning or from English; पानी ठंडी. | Home and daily things |
| 8 | `adjectives` | Adjectives that agree: अच्छा, अच्छे, अच्छी | hi-adjectives | Changing adjectives (-ā / -e / -ī: अच्छा लड़का, अच्छे लड़के, अच्छी लड़की) and unchanging ones (लाल, सुंदर, ख़ुश); adjective before the noun; बहुत. Trap: अच्छा with a feminine noun; agreement forgotten after है (वह लड़की लंबा है). | Describing things |
| 9 | `questions` | Question words: क्या, कौन, कहाँ, कैसा | hi-questions | क्या at the start for yes-no questions; क्या, कौन, कहाँ, कब, क्यों, कैसा / कैसे / कैसी, कितना where the answer goes (आप कहाँ रहते हैं?). Trap: English question order; कैसा not agreeing (आप कैसी हैं? to a woman). | Questions and connectors |
| 10 | `negation` | नहीं, न and मत: saying no | hi-negation | नहीं before the verb (मैं नहीं जानता); है / हूँ often dropped in the negative habitual; जी नहीं; न in polite requests; मत with तुम commands (preview of `imperative`). Trap: नहीं at the end; नहीं करो for "don't". | Traps for English speakers |
| 11 | `numbers` | Numbers 1 to 100, and money | (added) | एक to दस, ग्यारह to बीस, the tens, and the irregular numbers in between (पच्चीस, पचास, निन्यानवे) as words to recognise, not rules; सौ, हज़ार; लाख and करोड़ for recognition; रुपये, पैसे; कितने का है? / कितने का? Trap: building 25 from 20 + 5; reading ₹ prices in English. | Numbers and money |
| 12 | `postpositions` | Postpositions: में, पर, से, को | hi-postpositions | Postposition after the noun (घर में, मेज़ पर, दिल्ली से, राम को); में in, पर on / at, से from / with / by, को to; तक up to; with pronouns written together (मुझे, आपको, उससे). Trap: में घर; मैं को for मुझे (§4.2). | Getting around |
| 13 | `oblique` | The oblique form: लड़के को, कमरे में | hi-oblique | Before a postposition, masculine -ā nouns change to -e (कमरा → कमरे में), plurals take -ओं (लड़कों को, किताबों में); adjectives and यह / वह change too (इस कमरे में, उस दुकान पर). Trap: कमरा में; यह कमरे में; लड़कियाँ के लिए. | Home and daily things |
| 14 | `possessive` | का / की / के: my, your, whose | hi-possessive | X का / की / के Y agrees with Y (राम की किताब, राम का घर, राम के दोस्त); मेरा / मेरी / मेरे, आपका, तुम्हारा, उसका, हमारा; किसका; के before a postposition (मेरे घर में). Trap: agreeing with the owner (Sarah → मेरी always), "the book of Ram" order. | Family and people |
| 15 | `family` | Family and respect: मेरे पिताजी | (added) | माँ / माताजी, पिताजी, भाई, बहन, बेटा, बेटी, पति, पत्नी, दादा / दादी, नाना / नानी, चाचा, मौसी; the respect plural (मेरे पिताजी डॉक्टर हैं, मेरी दादी जी आई हैं); जी after relatives; मेरा एक भाई है (preview of `have`). Trap: मेरा पिताजी … है; English "uncle / aunt" for many Hindi words (one note). | Family and people |
| 16 | `imperative` | Requests and commands: बैठिए, बैठो | hi-imperative | -इए with आप (बैठिए, दीजिए, बताइए; irregular कीजिए, लीजिए, दीजिए, पीजिए), -ओ with तुम (बैठो, आओ), the bare stem with तू (recognition); ज़रा; मत / न for "don't"; कृपया on signs. Trap: bare commands to strangers (दो!); कृपया in every spoken request. | Health and help |
| 17 | `like-need` | पसंद, चाहिए: like and need | hi-like-need | मुझे चाय पसंद है, आपको क्या पसंद है?; मुझे पानी चाहिए; मुझे हिंदी आती है; मुझे भूख / प्यास लगी है; the person in the को form. Trap: मैं पानी चाहिए; मैं भूख हूँ; मैं ठंडा हूँ for "I'm cold" (§4.5). | Shopping |
| 18 | `food` | Ordering food and shopping | hi-food | एक चाय दीजिए, दो समोसे, बिल लाइए; कितने का है?, बहुत महँगा है, थोड़ा कम कीजिए; spicy: तीखा, कम मिर्च; भैया / दीदी to the shopkeeper. Trap: plural agreement with counted food (दो समोसे, not दो समोसा); bare commands to the waiter. | Food and drink |
| | | **Stage 3: Step 2 · Tenses** | | | |
| 19 | `habitual` | Present habitual: -ता है | hi-habitual | Stem + ता / ते / ती + होना: मैं काम करता हूँ / करती हूँ, वे हिंदी बोलते हैं; habits and facts; frequency words (रोज़, कभी-कभी, हमेशा). Trap: the speaker's gender (§2.3); English "I am working" vs "I work" mapped wrongly (preview of `continuous`). | Time, days and routine |
| 20 | `continuous` | Continuous: रहा है | hi-continuous | Stem + रहा / रही / रहे + होना for right now: मैं खाना बना रहा हूँ; आप क्या कर रहे हैं?; not with knowing and liking verbs. Trap: करता for "doing right now"; रहा not agreeing (वह जा रहा है for a woman). | Home and daily things |
| 21 | `was` | था, थी, थे: was, and used to | hi-was | था / थे / थी / थीं (agrees like an adjective); मैं थका हुआ था; past habitual -ता था (मैं बोस्टन में रहता था); continuous past रहा था. Trap: था with a feminine subject; English "was" mapped to the completed past. | About me |
| 22 | `have` | Having: मेरे पास, मेरा एक भाई | hi-have | Things: मेरे पास (एक गाड़ी) है, आपके पास टिकट है?; relatives and body: मेरा एक भाई है, उसकी दो बेटियाँ हैं; illnesses and feelings: मुझे बुख़ार है; no verb "to have". Trap: मैं एक गाड़ी है; मेरे पास एक भाई है (§4.5). | Travel and hotels |
| 23 | `infinitive` | The -ना form: want to, have to, should | hi-infinitive | Infinitive as a noun (हिंदी सीखना मुश्किल है); चाहना (मैं हिंदी सीखना चाहती हूँ); मुझे जाना है (I have to go); आपको आराम करना चाहिए (you should rest). Trap: मैं जाना है; the English "to" translated with को. | Health and help |
| 24 | `past` | Past: completed actions and ने | hi-past | Completed past: stem + -ā / -e / -ī / -ī̃ (वह आया, वह आई); irregular गया, किया, लिया, दिया, पिया; transitive verbs take ने and agree with the object (मैंने चाय पी, उसने खाना खाया); no ने with जाना, आना. Trap: मैं खाना खाया; agreeing with the subject after ने (§4.6). | Travel and hotels |
| 25 | `future` | Future: -एगा, -एगी | hi-future | Stem + ऊँगा / एगा / एँगे / ओगे and -गी forms (मैं कल जाऊँगा / जाऊँगी); कल + future = tomorrow; plans with the habitual or with इरादा (recognition). Trap: कल read as yesterday; the -गा / -गी form not matching the speaker. | Time, days and routine |
| 26 | `conjunctions` | और, लेकिन, क्योंकि: joining ideas | hi-conjunctions | और, लेकिन / पर, या, क्योंकि, इसलिए, तो; joining two sentences; क्योंकि clause after the main one. Trap: क्योंकि (because) and इसलिए (so) swapped; और used for "and then", where Hindi says फिर. | Questions and connectors |
| 27 | `directions` | Directions and travel | hi-directions | सीधे जाइए, बाएँ / दाएँ मुड़िए, X के पास / सामने / पीछे, कितनी दूर है?; auto-rickshaw, metro and train phrases; यहाँ रुकिए. Trap: postpositions before the noun (पास स्टेशन); English "near" order. | Getting around |
| 28 | `routine` | Daily routine and time phrases | hi-routine | Telling the time (कितने बजे हैं? तीन बजे, साढ़े तीन, सवा, पौने, डेढ़, ढाई); days of the week; सुबह, दोपहर, शाम, रात; a day described in the habitual (मैं सात बजे उठती हूँ). Trap: तीन और आधा for 3:30; the days' names with को (सोमवार को). | Time, days and routine |

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges (sound strand in lessons 1–4).
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: agreement of का / की / के, oblique before a postposition, है / हैं with आप, मुझे-constructions, and (after lesson 24) ने.
- `ty` prompts that say "I" or "you" follow §2.3: cue the speaker's or the addressee's gender, and the register.
- Accepted answers list the natural variants: with and without the subject pronoun where Hindi drops it (only in replies), मुझे and मुझको (both standard), शुक्रिया and धन्यवाद, both word orders where both are neutral (कल मैं जाऊँगा / मैं कल जाऊँगा).
- Lesson bodies are in English with the Hindi in `<b>` and the romanisation in `<i>` at first mention (§2.7). Example rows `{{ex:Hindi|pron|English}}` take the generated pron.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Hindi in Devanagari (§2.8): a letter, a word, or a short sentence ending in । ? or !.
- `pron`: generated (§6). Never typed.
- `meaning`: short American English. Nouns say their gender in the note, not in the meaning.
- `note`: one English line, or empty: gender, the trap, the other word (formal / casual), a literal gloss.

**Groups, in order:**

| Group | Decks |
|---|---|
| Script and sounds | Vowels and vowel signs · Consonants 1: k, ch and ṭ rows · Consonants 2: t and p rows, and the rest · Conjuncts and nasals |
| First steps | Greetings and courtesy · Family and people · About me · Numbers and money |
| Everyday life | Food and drink · Shopping · Time, days and routine · Home and daily things · Describing things |
| Out and about | Getting around · Travel and hotels · Health and help |
| Conversation | Questions and connectors · Traps for English speakers |

**The letter decks are ordinary decks** (no letter-drill machine needed, §10.1). Rules:
- **Every target is something the voice can read:** a whole vowel letter (आ), a consonant letter (क, read *ka*), a consonant with a vowel sign (की), or a word. Never a bare vowel sign (ा), a half letter (स्) or the virama alone: the voice cannot say them, and the generator throws on a bare vowel sign.
- **Meanings must differ** (the validator checks): "the letter ka (k, no puff of air)", "the letter kha (k with a puff of air)". For consonants with a vowel sign: "ki (short i)", "kī (long ī)".
- Consonant cards: the note gives a word that uses the letter, **built only from letters taught by then** (Consonants 1: एक, खाओ, छाछ, टीका, डाक; Consonants 2 may use any basic letter).
- `Vowels and vowel signs` (18): the 11 vowel letters (अ आ इ ई उ ऊ ऋ ए ऐ ओ औ) and 7 consonant + sign cards that teach the signs' shapes (का कि की कु कू के कै); notes for the rest (को कौ कॉ) inside the lesson.
- `Consonants 1` (17): क ख ग घ च छ ज झ ट ठ ड ढ ण, plus 4 words from these rows that contrast them (ठीक, घी, चाचा, झूठ).
- `Consonants 2` (18): त थ द ध न प फ ब भ म य र ल व श स ह ड़, with notes on ष, ढ़ and the nuqta letters inside the lesson (ज़ and फ़ get cards only as words in `Conjuncts and nasals`, because the voice reads a lone ज़ unreliably [inference]).
- `Conjuncts and nasals` (18): words: नमस्ते, अच्छा, दोस्त, प्यार, ट्रेन, क्या, ज्ञान, कृपया, हिंदी, ठंडा, पाँच, हाँ, मैं, में, हैं, ज़रूर, फ़ोन, ख़ुश.
- **Traps for English speakers** (about 18): about 6 calques (कोई बात नहीं vs आपका स्वागत है, मैं ठीक हूँ, मुझे ठंड लग रही है, मैं पच्चीस साल का हूँ, मुझे भूख लगी है, मुझे पानी चाहिए); about 6 grammar traps (मेरी किताब, मैंने खाना खाया, मत करो, मेरे पिताजी हैं, मेरे पास गाड़ी है, लड़के को); about 6 words and politeness (कल, आम, तू, अलविदा, सुनिए, जी).
- Phrases with "you" say who is addressed in the meaning when it matters ("(polite)", "(to a friend)", "(to a woman)").

**Five sample cards per deck** (every `pron` generated by `respell.js` and checked against `pronPattern`):

**1. Vowels and vowel signs** (Script and sounds). Each vowel letter, and each vowel sign on क. Lessons: `vowels`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| आ | ā | the vowel ā (long) | As in "father", held long. As a vowel sign: ा (का). |
| ई | ī | the vowel ī (long) | As in "seat". Short इ is the i of "sit". |
| कि | ki | ki (short i) | The sign ि is written before क but said after it. |
| की | kī | kī (long ī) | Long ī: the sign ी comes after the letter. की also means "of" (feminine). |
| कै | kai | kai (ai as in "bet") | Not "kye": Hindi ai is a long e as in "bet". |

**2. Consonants 1: k, ch and ṭ rows** (Script and sounds). Lessons: `consonants`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| क | ka | the letter ka (k, no puff of air) | As in "skin", not "kin". Word: एक, one. |
| ख | kha | the letter kha (k with a puff of air) | Word: खाओ, eat! Not "k" + "h" said apart. |
| छ | chha | the letter chha (ch with a puff of air) | Word: छाछ, buttermilk. च (ch) has no puff. |
| ट | ṭa | the letter ṭa (tongue curled back) | Retroflex: curl the tongue tip back. Word: टीका, a vaccine. |
| ड | ḍa | the letter ḍa (d, tongue curled back) | Word: डाक, mail. Dental द comes in the next lesson. |

**3. Consonants 2: t and p rows, and the rest** (Script and sounds). Lessons: `consonants-2`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| त | ta | the letter ta (tongue on the teeth) | Dental: the tongue touches the back of the teeth. Word: तोता, parrot. |
| थ | tha | the letter tha (dental t with a puff) | Never the "th" of "think". Word: थोड़ा, a little. |
| फ | pha | the letter pha (p with a puff) | Not f: फल is *phal*, fruit. The f sound is फ़, with a dot. |
| भ | bha | the letter bha (b with a breathy puff) | Word: भाई, brother. Not "bai". |
| ड़ | ṛa | the letter ṛa (a flap) | Flick the tongue forward from the roof of the mouth. Word: लड़का, boy. |

**4. Conjuncts and nasals** (Script and sounds). Lessons: `conjuncts`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| नमस्ते | namaste | hello (in the script lesson) | स्ते is a conjunct: s + te, with no a between. |
| अच्छा | acchhā | good; OK | च्छ = c + chh. Also "I see" or "really?" in conversation. |
| हिंदी | hindī | Hindi (the language) | The nasal dot before द is said n. |
| हाँ | hā̃ | yes | The moon dot makes a nasal vowel: no real n at the end. |
| ज्ञान | gyān | knowledge | ज्ञ is said gy in Hindi. |

**5. Greetings and courtesy** (First steps). Lessons: `greetings`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| नमस्ते। | namaste. | Hello. / Goodbye. | Any time of day, to anyone. Pressing your palms together is optional. |
| आप कैसे हैं? | āp kaise haĩ? | How are you? (to a man, polite) | To a woman: आप कैसी हैं? आप always takes हैं. |
| शुक्रिया। | shukriyā. | Thank you. | The everyday word. Formal: धन्यवाद. Many people also say थैंक यू. |
| कोई बात नहीं। | koī bāt nahī̃. | No problem. / You're welcome. | The answer to thanks or to sorry. Not आपका स्वागत है. |
| फिर मिलेंगे। | phir milẽge. | See you again. | With नमस्ते, the usual goodbye. |

**6. Family and people** (First steps). Lessons: `possessive`, `family`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मेरी माँ | merī mā̃ | my mother | माँ is feminine, so मेरी. Respectful: माताजी. |
| मेरे पिताजी | mere pitājī | my father | मेरे, and plural verbs, for respect: मेरे पिताजी डॉक्टर हैं। |
| बहन | bahan | sister | Feminine. Said close to "behen". दीदी is an older sister. |
| भाई | bhāī | brother | Masculine. भैया is an older brother, and a friendly way to address a man. |
| दादी | dādī | grandmother (father's mother) | Mother's mother: नानी. Hindi has a word for each side. |

**7. About me** (First steps). Lessons: `hona`, `was`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मेरा नाम सारा है। | merā nām sārā hai. | My name is Sarah. | नाम is masculine, so मेरा, whoever speaks. No जी after your own name. |
| मैं अमरीका से हूँ। | maĩ amrīkā se hū̃. | I'm from America. | The postposition से (from) comes after the place. |
| मैं न्यूयॉर्क में रहती हूँ। | maĩ nyūyŏrk mẽ rahtī hū̃. | I live in New York. (a woman speaking) | A man says रहता हूँ. |
| मैं थोड़ी हिंदी बोलता हूँ। | maĩ thoṛī hindī boltā hū̃. | I speak a little Hindi. (a man speaking) | हिंदी is feminine, so थोड़ी. A woman says बोलती हूँ. |
| मैं पहले बोस्टन में रहता था। | maĩ pahle bosṭan mẽ rahtā thā. | I used to live in Boston. (a man speaking) | -ता था = used to. A woman: रहती थी. |

**8. Numbers and money** (First steps). Lessons: `numbers`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| पच्चीस | pacchīs | twenty-five | Every number up to 100 is its own word: learn them as words. |
| पचास | pachās | fifty | |
| सौ रुपये | sau rupaye | a hundred rupees | रुपया, plural रुपये. |
| कितने का है? | kitne kā hai? | How much is it? | Literally "of how much is it?". Also: कितने का? |
| एक लाख | ek lākh | one hundred thousand | Indian numbers group by lakh (1,00,000) and crore (1,00,00,000). |

**9. Food and drink** (Everyday life). Lessons: `food`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| एक चाय दीजिए। | ek chāy dījie. | One tea, please. | दीजिए (please give) is polite: no need for कृपया. |
| दो समोसे | do samose | two samosas | समोसा → समोसे in the plural. |
| दाल और रोटी | dāl aur roṭī | dal and roti | Both feminine. |
| कम मिर्च, प्लीज़। | kam mirch, plīz. | Not too spicy, please. | Literally "less chilli". प्लीज़ is casual; you can also say ज़रा कम मिर्च डालिए. |
| बिल लाइए। | bil lāie. | Could we have the check? | Literally "bring the bill". |

**10. Shopping** (Everyday life). Lessons: `like-need`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मुझे यह पसंद है। | mujhe yah pasand hai. | I like this. | Literally "to me this is pleasing": मुझे, not मैं. |
| मुझे यह चाहिए। | mujhe yah chāhie. | I need this. / I'd like this. | Same pattern: मुझे + thing + चाहिए. |
| बहुत महँगा है। | bahut mahãgā hai. | It's very expensive. | For a feminine thing: बहुत महँगी है. |
| थोड़ा कम कीजिए। | thoṛā kam kījie. | Could you lower it a little? | Bargaining is normal in markets, not in shops with fixed prices. |
| भैया, यह कितने का है? | bhaiyā, yah kitne kā hai? | How much is this? (to a shopkeeper) | भैया ("brother") is a friendly way to address a male shopkeeper. |

**11. Time, days and routine** (Everyday life). Lessons: `habitual`, `future`, `routine`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| कितने बजे हैं? | kitne baje haĩ? | What time is it? | Also: क्या टाइम है? |
| साढ़े तीन बजे | sāṛhe tīn baje | at half past three | साढ़े = plus a half. But 1:30 is डेढ़, 2:30 is ढाई. |
| सोमवार को | somvār ko | on Monday | Days take को: सोमवार को. |
| मैं रोज़ सात बजे उठती हूँ। | maĩ roz sāt baje uṭhtī hū̃. | I get up at seven every day. (a woman speaking) | A man: उठता हूँ. |
| कल | kal | yesterday; tomorrow | The verb tells you which: कल आया (came), कल आएगा (will come). |

**12. Home and daily things** (Everyday life). Lessons: `gender`, `oblique`, `continuous`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| कमरा | kamrā | room | Masculine. Plural and before a postposition: कमरे (कमरे में). |
| किताब | kitāb | book | Feminine, though it does not end in -ī. Plural: किताबें. |
| पानी | pānī | water | Masculine, though it ends in -ī: ठंडा पानी. |
| मेज़ पर | mez par | on the table | The postposition पर follows the noun. मेज़ is feminine. |
| मैं खाना बना रहा हूँ। | maĩ khānā banā rahā hū̃. | I'm cooking. (a man speaking) | Right now: रहा हूँ. A woman: बना रही हूँ. |

**13. Describing things** (Everyday life). Lessons: `adjectives`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| अच्छा लड़का | acchhā laṛkā | a good boy | -ā with a masculine noun. |
| अच्छी लड़की | acchhī laṛkī | a good girl | -ī with a feminine noun. |
| बड़े कमरे | baṛe kamre | big rooms | -e with a masculine plural. |
| लाल साड़ी | lāl sāṛī | a red sari | लाल never changes: लाल साड़ी, लाल कमरा. |
| बहुत गरम है। | bahut garam hai. | It's very hot. | For food and things. For the weather: बहुत गर्मी है. |

**14. Getting around** (Out and about). Lessons: `postpositions`, `directions`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| स्टेशन कहाँ है? | sṭeshan kahā̃ hai? | Where is the station? | स्टेशन is the everyday word. |
| सीधे जाइए। | sīdhe jāie. | Go straight. | |
| बाएँ मुड़िए। | bāẽ muṛie. | Turn left. | Right: दाएँ. |
| मेट्रो स्टेशन के पास | meṭro sṭeshan ke pās | near the metro station | के पास (near) comes after the noun. |
| भैया, यहाँ रुकिए। | bhaiyā, yahā̃ rukie. | Stop here, please. (to a driver) | To an auto-rickshaw or taxi driver. |

**15. Travel and hotels** (Out and about). Lessons: `have`, `past`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मेरे पास टिकट है। | mere pās ṭikaṭ hai. | I have a ticket. | "Near me is a ticket": things you have take मेरे पास. |
| क्या आपके पास कमरा है? | kyā āpke pās kamrā hai? | Do you have a room? | At a hotel desk. |
| ट्रेन कितने बजे जाएगी? | ṭren kitne baje jāegī? | What time does the train leave? | ट्रेन is feminine: जाएगी. |
| हम कल जयपुर गए। | ham kal jaypur gae. | We went to Jaipur yesterday. | जाना has no object: no ने. |
| मैंने ताज महल देखा। | maĩne tāj mahal dekhā. | I saw the Taj Mahal. | With ने the verb agrees with what you saw, not with you. |

**16. Health and help** (Out and about). Lessons: `imperative`, `infinitive`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मुझे बुख़ार है। | mujhe buḵhār hai. | I have a fever. | Illnesses take मुझे … है, not मेरे पास. |
| मेरे सिर में दर्द है। | mere sir mẽ dard hai. | I have a headache. | "There is pain in my head." |
| डॉक्टर को बुलाइए! | ḍŏkṭar ko bulāie! | Call a doctor! | |
| ज़रा मदद कीजिए। | zarā madad kījie. | Could you help me, please? | ज़रा ("just a little") softens a request. |
| आपको आराम करना चाहिए। | āpko ārām karnā chāhie. | You should rest. | -ना + चाहिए = should. |

**17. Questions and connectors** (Conversation). Lessons: `questions`, `conjunctions`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| क्या आप हिंदी बोलते हैं? | kyā āp hindī bolte haĩ? | Do you speak Hindi? (to a man) | क्या at the start makes a yes-no question. To a woman: बोलती हैं? |
| आप कहाँ रहते हैं? | āp kahā̃ rahte haĩ? | Where do you live? (to a man) | The question word goes where the answer goes. |
| क्यों? | kyõ? | Why? | Answer with क्योंकि (because). |
| लेकिन | lekin | but | Also पर in speech. |
| इसलिए | islie | so; that's why | Result. Cause is क्योंकि. |

**18. Traps for English speakers** (Conversation). Lessons: `negation`.

| Hindi | `pron` | Meaning | Note |
|---|---|---|---|
| मैं ठीक हूँ। | maĩ ṭhīk hū̃. | I'm fine. | The usual answer to आप कैसे हैं? |
| मुझे ठंड लग रही है। | mujhe ṭhaṇḍ lag rahī hai. | I'm cold. | Not मैं ठंडा हूँ ("I am a cold thing"). |
| मत करो! | mat karo! | Don't do it! (to a friend) | "Don't" is मत, not नहीं. Polite: मत कीजिए. |
| तू | tū | you (very close, or rude) | For close friends, small children and God. Don't use it with anyone else. |
| अलविदा | alvidā | farewell | Sounds final, as in a film. For "bye", say नमस्ते or फिर मिलेंगे. |

### 9.1 Localisation

- **Names** (Devanagari in Hindi strings, English in prompts):
  - Learner personas, one of each gender so speaker cues are natural: **सारा** (Sarah, an American woman) and **डेविड** (David, an American man); heritage personas **प्रिया** (Priya) and **राहुल** (Rahul), Indian American.
  - Indian characters: अनीता, सुनीता, विकास, अर्जुन, नेहा, अमित, पूजा, रवि; with जी and titles: शर्मा जी, वर्मा जी, गुप्ता जी, मिश्रा जी; family: दादी जी, नानी, चाचा जी, मौसी. No celebrities.
- **Places:** India: दिल्ली, मुंबई, जयपुर, आगरा (ताज महल), वाराणसी, कोलकाता, गोवा, ऋषिकेश; sights and places: लाल क़िला, चाँदनी चौक, मेट्रो, बाज़ार. US places where a learner says where they live: अमरीका, न्यूयॉर्क, बोस्टन, शिकागो, कैलिफ़ोर्निया, टेक्सस (run each through the generator; English names give warnings the lead clears into `VER`).
- **Food:** चाय, कॉफ़ी, पानी, लस्सी, समोसा, पकौड़ा, दाल, रोटी, चावल, सब्ज़ी, पनीर, आलू, छोले भटूरे, बिरयानी, डोसा, मिठाई, गुलाब जामुन, आम.
- **Money:** रुपये (₹ never in Hindi strings: write the number in words), पैसे; plausible prices [inference]: a cup of street chai दस to बीस रुपये, a samosa बीस रुपये, a metro ride तीस to साठ रुपये, an auto-rickshaw ride सौ to दो सौ रुपये, a restaurant meal पाँच सौ रुपये. Big sums in लाख and करोड़ for recognition.
- **Getting around:** the metro, auto-rickshaws (ऑटो), taxis and ride apps (no brand names), trains (ट्रेन, टिकट, प्लेटफ़ॉर्म), buses.
- **Settings:** a chai stall, a sweet shop, a family dinner with दादी जी, a Delhi metro station, a market in चाँदनी चौक, a hotel desk in जयपुर, a train to आगरा, a pharmacy, a yoga class in ऋषिकेश, a video call with relatives in India, an office with Indian colleagues.
- **Measures and dates:** kilometres, kilograms, degrees Celsius; day–month order (पंद्रह अगस्त); festivals in notes (दिवाली, होली).

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is four script lessons and four letter decks, all ordinary: nothing depends on the Korean letter-drill machine.

| Lesson | Deck | Letters | What the learner can do after it |
|---|---|---|---|
| `vowels` | Vowels and vowel signs | 11 vowel letters, 11 vowel signs (on क), the inherent a | read any consonant + vowel sign; hear long vs short vowels; knows the final a is silent |
| `consonants` | Consonants 1: k, ch and ṭ rows | क–ङ, च–ञ, ट–ण | read the first three rows; hear aspirated vs unaspirated and the retroflex row |
| `consonants-2` | Consonants 2: t and p rows, and the rest | त–न, प–म, य र ल व, श ष स ह, ड़ ढ़, ज़ फ़ (क़ ख़ ग़ recognition) | read every basic letter; tell dental from retroflex; ph ≠ f |
| `conjuncts` | Conjuncts and nasals | half letters, र above and below, क्ष त्र ज्ञ श्र, ं and ँ | read whole words, including the silent a and nasal vowels |

- The letters are taught **by rows** (the order of the Devanagari chart), as Wisconsin's week 1 does ("velar, palatal, retroflex, dental, and labial series, semivowels, conjuncts, nasals, and halant") and as the Kirk & SV guide does by place of articulation [curriculum convention]. Rows make the dental / retroflex and aspiration contrasts visible as a grid.
- ङ and ञ are shown in the chart and never carded (they occur almost only in conjuncts); ऋ gets a letter card in Vowels and vowel signs, and कृपया shows it as a sign in Conjuncts and nasals; ष gets a note ("said like श").
- Letter cards are drilled as normal cards: the front shows the letter and its pron, the voice says it, the meaning on the back names the sound ("the letter ṭa (tongue curled back)"). The deck typing quiz asks for the meaning in English, which already forces the sound to be read.
- **If the letter-drill machine is generalised** (request 10, §10.8), the same four decks gain drills: "hear a syllable, tap its letter" with dental / retroflex and aspirated pairs as the choices, and "build the word from letters". Nothing in the lessons changes.

### 10.2 What a typed answer is

**Default: word tiles.** en-hi sets `tilesDefault: true`. In tiles mode `mc` and `order` are unchanged, `fill` becomes a 4-option tap, `type` becomes tiles from `a[0]` split on spaces plus `x`. Hindi has spaces between words, so no special segmentation is needed: **tiles are words as written**, postposition separate after a noun (घर / में), joined to a pronoun (मुझे, उसने), compound postpositions as two tiles (के / पास), verb groups as separate tiles (जा / रहा / है).

**Typing is optional**, through the existing switch:
- **Devanagari from the phone's Hindi keyboard.** Android's Gboard has a Devanagari keyboard "using transliteration or handwriting input modes" ([Google, 2016](https://blog.google/topics/google-asia/an-easier-way-to-type-in-hindi-and-10/)); iOS has a Hindi keyboard, including a transliteration layout that turns typed Latin letters into Devanagari [inference: not opened]. Either way the answer arrives as Devanagari, which is what the matcher compares. This is how most learners will type, and it needs no engine work.
- **Romanisation on an English keyboard** (typing *mujhe pani chahiye* for मुझे पानी चाहिए) is **not possible yet**: `pronAnswers` exists, but as built it glues words together before respelling (`gen.js` calls `respell(a.replace(/\s+/g, ''))`, which breaks schwa deletion and nasal rules across word boundaries), its default script test is CJK, the added answers fail the validator's `targetScript` check, and the matcher's accent fold would accept *hai* for *haĩ* (है for हैं) as "almost". So `profile.json` sets **`pronAnswers: false`** until requests 4 and 5 are built.

**What the matcher must fold** (✓ = already done by today's engine, checked in `src/app.html`):
- ✓ NFC (`pracNorm`), which also turns the precomposed nuqta letters U+0958–095F into letter + ़ (checked in node: क़ → U+0915 U+093C), so both input forms match.
- ✓ trims, collapses spaces, strips . , ! ? ~ and quotes.
- ✗ **strip । and ॥** like a full stop: today neither `pracNorm` nor the validator's `pn` strips them, so an answer with । does not match typed input without it. Request 1; until then **no । in accepted answers or tiles**.
- ✗ **"almost" folds for Devanagari** (request 2): ँ typed as ं (हां for हाँ) and a missing nuqta (जरूर for ज़रूर) → accepted with the correct spelling shown; ZWJ / ZWNJ (U+200D, U+200C) removed from input (some keyboards insert them). Never "almost": a wrong vowel length (दिन / दीन), a wrong consonant (त / ट), है / हैं, gender endings (-ā / -e / -ī): those are the point.
- ✗ **romanisation folds** (request 4), for when `pronAnswers` is on: lower-case; ā → a, ī → i, ū → u and the doubled spellings aa → a, ee / ii → i, oo / uu → u; dots dropped (ṭ → t, ḍ → d, ṇ → n, ṛ → r, ḵh → kh, ġ → g); the tilde → n (so *main*, *hain*, *nahin*, *mein* match *maĩ*, *haĩ*, *nahī̃*, *mẽ*; ei → e); w → v; chh → ch; q → k; z → j and f → ph only as "almost". Missing marks and doubled-vowel spellings are "almost", not exact. A missing nasal (*hai* for *haĩ*) is wrong.

### 10.3 Unicode normalisation

- **Stored text:** NFC; nuqta letters as letter + U+093C (what NFC produces anyway); never the precomposed U+0958–095F, never ZWJ / ZWNJ (the validator's `invisible` range U+200B–200F already rejects them in cards, bodies and practice items), never Devanagari digits.
- **Chandrabindu vs nasal dot:** the stored spelling follows §2.8; in typed input the two are "almost" (request 2).
- **The generator** normalises its input to NFC and drops ZWJ / ZWNJ, so a stray joiner in a draft does not change the pron.

### 10.4 The accent bar

- `keys`: `ँ ं ़ ्` (moon dot, nasal dot, nuqta, virama). Hindi phone keyboards have them, but on long-press or a second page; the bar inserts them after the letter at the caret, and NFC composes the result (ज + ़ → ज़). `accents: true` only matters once romanised answers exist (it turns a missing macron or dot into "almost").
- When request 4 is built, a second key set for romanised typing: `ā ī ū ṭ ḍ ṇ ṛ ̃` (the last one the combining tilde).

### 10.5 Punctuation

- । ends statements in card targets, examples, dialogues and `fill` sentences; ? and ! as in English; no space before them [curriculum convention: Unbabel 4; W3C: "The danda… is used for sentence final punctuation", and line breaking must not move a danda to the start of a line ([W3C, *Devanagari layout*](https://w3c.github.io/iip/devanagari/))].
- No । in `a` lists, `or` tiles or `x` (request 1).
- English text keeps English punctuation, including in notes that quote Hindi.
- The pron converts । to `.` (§6.2).

### 10.6 Fonts and line height

- The app already sets a Devanagari stack for the Hindi **interface** (`html[lang=hi]`: 'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari'), with a comment that the web fonts have none. In en-hi the page is English, so target text inside it needs the same stack on `[lang=hi]` elements (cards, tiles, examples, answer inputs, the accent bar), and those elements need `lang="hi"` (request 7). Without it, the system falls back to some Devanagari font anyway, but vowel signs and conjuncts may render with a mismatched font and clip.
- **Line height 1.7–1.9** for Devanagari lines: ि ी े ै ो ौ ँ rise above the headline and ु ू ृ ् and र-below hang beneath it; tiles at least 48 px tall.
- **The pron line** stacks two marks on ā̃ ī̃ ū̃ (macron + tilde): line height at least 1.6 there too, and the body font must contain ṭ ḍ ṇ ṛ ṅ ñ ḵ ġ ŏ (U+1E6D, U+1E0D, U+1E47, U+1E5B, U+1E45, U+00F1, U+1E35, U+0121, U+014F).

### 10.7 `targetScript`

`[ऀ-ॣॱ-ॿ]`: Devanagari letters and signs, **excluding** the danda । (U+0964), double danda ॥ (U+0965) and Devanagari digits (U+0966–096F), as in the reverse course's `nativeScript`. So a Hindi string must contain at least one Devanagari letter or sign; an English line with a danda does not count, and romanised text does not match (practice answers are always Devanagari).

### 10.8 What the lead needs to build, in priority order

| # | Request | Why | What the course does if it is NOT built |
|---|---|---|---|
| 1 | **Strip । and ॥ in `pracNorm` and in the validator's `pn`**, like `.` | Learners type a danda (or not); authors want it in sentences. | No । in accepted answers, tiles or distractors (writer rule, §2.8); card targets and examples keep it. |
| 2 | **Devanagari "almost" folds in `pracMatch`:** ँ ↔ ं, missing nuqta (़), ZWJ / ZWNJ removed from input (§10.2) | Common keyboard slips that are not the point of the item. | Exact match only: a learner who types जरूर for ज़रूर is marked wrong. Tiles by default keep this rare. |
| 3 | **"Tiles by default" on for en-hi** (`tilesDefault: true` is set), switch text "Use tiles (no Hindi keyboard)", and a one-time note on the first typed item: "To type Hindi, add the Hindi keyboard (Gboard: Hindi; iPhone: Hindi – Transliteration lets you type in English letters)." | Most learners have no Hindi keyboard at the start. | The setting exists; without the note learners stay in tiles, which is fine. |
| 4 | **Romanised answers:** `gen.js` respells each accepted Devanagari answer **with its spaces kept**, with `pronAnswersScript: "[\\u0900-\\u097F]"`, stores the results in a separate field (or the validator skips them in the `targetScript` check), and the matcher compares typed Latin text with the §10.2 romanisation folds (tilde → n, doubled vowels, dots and macrons as "almost"); then set `pronAnswers: true`. | Lets learners without a Hindi keyboard type, the way Indians type Hindi in Latin letters. | `pronAnswers: false`; typing means Devanagari through a keyboard; the romanisation is for reading only. |
| 5 | **Deck typing quiz accepts the card's pron** through the same folds. | Same reason, in decks. | The quiz asks for the English meaning, or needs a Hindi keyboard. |
| 6 | **Romanisation display setting:** "Romanisation: always / tap to reveal / off" for cards and example rows (§6.5); default "always". | Learners who read Devanagari want to hide it; heritage learners may from day one. | Always shown. |
| 7 | **Devanagari font stack and line height on `[lang=hi]` target text** inside the English page, and `lang="hi"` on card, tile, example and input elements (§10.6). | Clipped vowel signs, mixed fonts. | System fallback fonts; possible clipping on some devices. |
| 8 | **Validator: run `respell` on every card target and example row and compare with the stored pron** (fail on difference); print `warnings()` as WARN lines. | The generator is the source of truth; catches hand edits and stale rows. | `node tools/target/repron.js hi` after every generator change; the existing same-string check catches cross-file drift only. |
| 9 | **Generator in the review loop:** writers report «…» warnings; the lead adds words to `EXC` / `VER` in `respell.js` (or `lexicon.txt`) and reruns `repron.js hi`. No code change: `repron.js` already compiles the course's `pronPattern` (which works without the `u` flag) and swallows throws. | Keeps the silent a right as vocabulary grows. | — |
| 10 | **Generalise the letter-drill machine** to Devanagari: hear a syllable, tap the letter (dental / retroflex, aspirated pairs); build a word from letters (§10.1). | More listening practice on the contrasts English speakers miss (Werker & Tees). | The four letter decks stay ordinary decks; the script lessons' practice sets carry the contrasts. |
| 11 | **Voice check on test devices:** lone consonant letters (क read *ka*?), the nuqta letters, English loans in Devanagari (स्टेशन, न्यूयॉर्क), numbers as words. | The voice is the model; some `hi-IN` voices spell out lone letters or read loans oddly [inference]. | Writers keep lone nuqta letters out of card targets (§9); the lead listens to the four letter decks. |
| 12 | **PRACTICE-SPEC note:** romanisation may appear in English prompts of the four script lessons ("Build kamal", "Which letter is ṭa?") and in one optional sound `mc` per later set; answers stay Devanagari. No code change. | — | — |

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The generator's schwa decisions** in `tools/target/hi/respell.js`: the rule (§6.1), the `EXC` list (जनवरी, फ़रवरी, कृपया, नमस्कार, वाराणसी, the months, जगह, सुबह, तरह, वजह, अमरीका, उन्होंने, हिंदुस्तान) and the two choices made after test set 1: **no deletion before ह** (दोपहर *dopahar*) and **no deletion before य** (रुपये *rupaye*; many speakers say *rupye*). Also the anusvara rule over ी े ै ो ौ (always a nasal vowel, so पैंतीस *paĩtīs*; the loans बैंक, थैंक्स, पैंट are exceptions in `EXC`), and the spoken forms chosen for 69, 71, 75, 77, 78 (*unhattar*, *ikhattar*, *pachhattar*, *sathattar*, *aṭhattar*).
2. **The key itself** (§6.2): tilde for nasal vowels (not ṁ), ḵh for ख़, ŏ for ऑ, sh for both श and ष, ri for ऋ, all lowercase, and the decision **not** to show the e-like a beside ह or the spoken यह / वह ("yeh", "voh").
3. **Politeness and register** (§2.3–2.6): तुम with whom, भैया / दीदी / अंकल / आंटी, thanking family members, शुक्रिया as the everyday word vs धन्यवाद, प्लीज़ and थैंक यू in urban speech, अलविदा as "too final".
4. **The `greet` strings:** शुभ रात्रि (late night), सुप्रभात (morning), नमस्ते (afternoon and evening). Everyday Hindi has no time-of-day greeting in speech: नमस्ते is used all day, and शुभ रात्रि / सुप्रभात are mostly written (messages, cards) or formal [inference]. शुभ संध्या ("good evening") was rejected as bookish. A native speaker may prefer नमस्ते in all four slots.
5. **The Traps list and calques** (§4.11): आपका स्वागत है as a calque of "you're welcome", मैं ठंडा हूँ, मैं अच्छा हूँ vs मैं ठीक हूँ, सुनिए vs माफ़ कीजिए for getting attention.
6. **The gender examples** used as rules of thumb (पानी, आदमी masculine; किताब, बात feminine; मेज़ feminine; ट्रेन feminine) and the plural forms in §9.
7. **The sample cards** in §9, especially कम मिर्च, प्लीज़, थोड़ा कम कीजिए, कितने का है?, भैया, यहाँ रुकिए, मुझे ठंड लग रही है, and the plausible prices in §9.1.
8. **Spelling choices** in §2.8 (हिंदी, गए, चाहिए, हाँ, न्यूयॉर्क, अमरीका vs अमेरिका: the course uses अमरीका; both are common).

**Evidence that could not be opened, or was read only in part**
- **Learner errors:** no study with error rates for English-speaking learners of Hindi was read. Montrul et al. (2019) was read as an abstract (no figures); Ranjan (2016) as a record with no findings; Montrul, Bhatt & Bhatia (2012) on heritage speakers' case and agreement appeared only in search results and was not opened. The Transparent Language list of common mistakes is about native writers, not English speakers, and is not used. Most of §4 is [inference] and practitioner opinion.
- **Sounds:** Werker & Tees (1984) is infant data; the English-adult finding is Werker et al. (1981) as reported in that paper, not read directly.
- **Schwa deletion figures** (89%, 86–94%, 94.9%, 97.8%) are as reported by Arora, Gessler & Schneider (2020); Narasimhan et al. (2004) appeared only in search results.
- **Learners:** no survey of US adult Hindi learners' motives was found; MLA figures for Hindi alone (2016, 2021) were not reached (Wikipedia was not on the fetch allowlist; the CFR article gives only a 2013 total for all Indian languages).
- **Textbook romanisations:** Snell's *Teach Yourself* key was seen only as cited by Garret Wilson (tilde for nasal vowels); McGregor's was not seen. The Tibetan & Himalayan Library page on Hindi transliteration failed to load.
- **Syllabuses:** the Wisconsin schedule stops after week 2 and does not reach ने; Van Olphen's book was read to lesson 6 of part 1.
- **Keyboards:** the iOS Hindi transliteration keyboard is the author's knowledge, not checked.

**The roadmap and the brief**
- The brief's base text says to read "the `de` entry"; the lead's instruction says to use the `hi` entry, which this profile does.
- `consonants-2`, `numbers` and `family` have an empty `roadmap` field; the roadmap preview will not show them unless the lead adds items.
- `profile.json` carries two fields beyond the brief's shape, as zh does: `tilesDefault: true` and `pronAnswers: false` (§10.2).

**Engine and pipeline** (for the lead): §10.8, requests 1–12. The most important: 1 (danda in answers), 2 (Devanagari "almost" folds), 3 (tiles by default and the keyboard note), 4 (romanised answers with spaces kept and a Hindi fold) and 8 (validator runs the generator).

**Not verified at all**
- How `hi-IN` device voices read lone letters, nuqta letters and English loans (request 11).
- That the app's body font contains the dotted romanisation letters and renders ā̃ cleanly (request 7).
- That learners can use a romanisation with dots and macrons; no study compares Hindi romanisations for learners.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Montrul, S., Bhatia, A., Bhatt, R. & Puri, V. (2019). Case marking in Hindi as the weaker language. *Frontiers in Psychology* 10:461 (abstract)](https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00461/text)
- [Ranjan, R. (2016). Acquisition of ergative case in L2 Hindi-Urdu. PhD dissertation, University of Iowa (record)](https://iro.uiowa.edu/esploro/outputs/doctoral/Acquisition-of-ergative-case-in-L2/9983776954302771)
- [Werker, J. F. & Tees, R. C. (1984/2002). Cross-language speech perception: evidence for perceptual reorganization during the first year of life. *Infant Behavior & Development* (2002 reprint)](https://sites.socsci.uci.edu/~lpearl/courses/readings/WerkerTees2002_FunctionalReorganization.pdf)
- [Arora, A., Gessler, L. & Schneider, N. (2020). Supervised grapheme-to-phoneme conversion of orthographic schwas in Hindi and Punjabi (arXiv abstract page)](https://arxiv.org/abs/2004.10353) and [full text](https://arxiv.org/pdf/2004.10353.pdf)
- [Pew Research Center: Indians in the U.S. fact sheet (ACS 2021–23)](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-indians-in-the-u-s/markdown)
- [Council on Foreign Relations: Few takers for Hindi (MLA 2009 and 2013 totals for Indian languages)](https://www.cfr.org/articles/few-takers-hindi)
- [University of Wisconsin, WISLI: Intensive Beginning Hindi syllabus, 2025](https://wisli.wisc.edu/wp-content/uploads/sites/239/2025/11/2025-Elem-Hindi-Syllabus.pdf)
- [Van Olphen, H. H. (1995). *First-Year Hindi Course*, Part 1. University of Texas at Austin](https://repositories.lib.utexas.edu/bitstream/handle/2152/46086/First_Year_Hindi_Course-Part_1.pdf)
- [UT Austin Hindi site (hindi.la.utexas.edu): Hindi pronunciation](https://hindi.la.utexas.edu/?p=1093)
- [Kirk, G. S. & SV, S. (2025). *A Practical Guide to Hindi Script*, section 6 (bilabials, anusvār, candrabindu)](https://iu.pressbooks.pub/hindiscript/?p=279)
- [Wiktionary: Hindi transliteration](https://en.wiktionary.com/wiki/Wiktionary:HI_TR)
- [Garret Wilson: Devanagari lesson 5, Candrabindu](https://www.garretwilson.com/education/languages/hindi/devanagari/lesson5/candrabindu)
- [Unbabel: Language guidelines, Hindi](https://help.unbabel.com/hc/en-us/articles/360008922813-Language-Guidelines-Hindi)
- [W3C: Devanagari layout requirements (iip)](https://w3c.github.io/iip/devanagari/)
- [HindiPod101: Top 5 tips for avoiding common mistakes in Hindi (commercial)](https://www.hindipod101.com/lesson/all-about-14-top-5-tips-for-avoiding-common-mistakes-in-hindi)
- [HindiPod101: How to say thank you in Hindi (commercial blog)](https://www.hindipod101.com/blog/2017/11/27/how-to-say-thank-you-in-hindi/)
- [HindiPod101: What types of Hindi romanization are there? (commercial)](https://www.hindipod101.com/lesson/hindi-teachers-answer-your-questions-5-what-types-of-hindi-romanization-are-there)
- [Google (2016): An easier way to type in Hindi and 10 other Indian languages](https://blog.google/topics/google-asia/an-easier-way-to-type-in-hindi-and-10/)

Opened but not usable: Transparent Language, *Common mistakes in Hindi usage* (about native writers, not English speakers); Tibetan & Himalayan Library, *Hindi transliteration & transcription* (failed to load); Wikipedia, *Most commonly learned foreign languages in the United States* (not on the allowlist).

Local project files read: `docs/briefs/target-profile-hi.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-zh.md` and `tools/target/zh/profile.json`, `tools/target/ja/profile.json`, `tools/target/es/profile.json` (shape models), the section list of `docs/profiles/en-ja.md` and `en-es.md`, the head of `tools/target/es/respell.js` and of `tools/target/zh/respell.js` (command-line shape), `packs/roadmaps.js` (entry `hi`), `tools/target/lib.js`, `gen.js`, `validate.js` and `repron.js`, the matchers in `src/app.html` (`normT`, `pracNorm`, `foldAcc`, `accSame`, `accMissingOnly`, `pracMatch`, `kbT`) and its `html[lang=hi]` font rule, and parts of `docs/profiles/hi.md` (reverse course; its Unicode and `nativeScript` choices are reused).
