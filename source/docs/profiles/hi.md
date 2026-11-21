# Hindi speakers learning English — course profile

Course `hi-en`. Audience: adult Hindi speakers in India (the Hindi belt, Delhi, Mumbai and Hindi speakers in other states) and abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Hindi in Devanagari**, with the English loanwords that educated urban speakers actually use (कार्ड, लेवल, ईमेल, ऑफ़िस); answers and examples are in English. The HTML language tag and the app code are both **`hi`** (profile.json `native: "hi"`, pack `course-hi-en`, interface pack `i18n-hi`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 39 lessons, 20 decks, standing rule `article-plural`), like zh, vi, id and ru, because Hindi has no articles. `parity.js` compares hi-en's English side with ko-en's.

Evidence labels follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what Indian textbooks, exam boards, dictionaries, style guides or apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (said so where it is mine).

A study read only as an abstract, a summary, a landing page or someone else's summary of it is marked as such. Every web figure was read through the fetch tool's summary of the page, not by reading a PDF directly (§11).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations address the learner as **आप** with the polite imperative (चुनें, लिखें); buttons use the same form. Hindi school grammar terms (संज्ञा, क्रिया, एकवचन / बहुवचन, गणनीय), with **tense names kept in English** (*Simple Present*, *Present Perfect*), as Hindi-medium grammar books do.
- **Error evidence is mostly qualitative.** No Hindi-L1 learner corpus with error rates was found. The best sources are a 10-person case study of Hindi-speaking professionals (Khan 2021), the 22 Indian English features annotated in ICE-India (Demszky et al.), Sharma's work on article use (via a summary) and corpus work on progressive with stative verbs (abstracts only). Ranking is this profile's inference.
- **Top zones:** articles (omitted and added), **continuous with states and durations** (*I am living here since 2010*, *he is having a car*), third-person -s, tense and auxiliaries, plurals and countability (*advices*, *two friend*), question order and the invariant tag *isn't it*, prepositions (*discuss about*), and Indian English usages that are fine in India but puzzle listeners abroad.
- **Pronunciation aid: a Devanagari respelling, required** (`"pron": "required"`), not IPA. CBSE does not teach phonetics and Hindi dictionaries print pronunciation in Devanagari. The key marks the trap sounds with a dot (nukta): **व़** = /v/ vs **व** = /w/, **थ़ द़** = /θ ð/, **ज़ फ़** = /z f/, **ऐ** = /æ/, and **ˈ** before the stressed syllable. It is a one-to-one table from the zh IPA, so the 356 shared card targets and 325 `{{ex}}` rows are **derived, not re-transcribed**.
- **Standing rule: `article-plural`**, keywords `आर्ट[िी]कल|बहुवचन|गणनीय` (no flags; Devanagari has no case); zero parity cost.
- **Curriculum:** all 39 ids kept in order (6 keep, 33 reweight, no English-side changes). Add 2: `indian-english` (end of A1; deck 21 «इंडियन इंग्लिश: भारत बनाम विदेश») and `stative-since` (B1, after `perfect-2`: states, *since / for / from* and *have been -ing*).
- **Interface:** counts use an **invariant masculine noun after the number with no verb** («{1} कार्ड», «{1} दिन») or **label + colon** («बाकी: {1}»). Language-name slots at the start or after a colon. Taller line height and a Devanagari system font stack; the bottom nav at .62rem needs checking.

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear.
2. Indian schools, newspapers and offices write British spelling (*colour*, *programme*), and spoken Indian English is its own norm (§4.14, Sirsa & Redford 2013). The course teaches American forms without calling Indian or British forms wrong: a card `note` may say «भारत और ब्रिटेन में: lift / flat / colour» [practitioner opinion].
3. US spelling and vocabulary (color, apartment, elevator, cell phone, check for the restaurant bill).

**Register: आप with the polite imperative (-एँ / -ें); never तुम or तू** [practitioner opinion, decision].
- **What was found** [curriculum convention]:
  - Mozilla's Hindi localisation guide: it is "better to use words like आप, यह, वह instead of तुम, ये, वे", and imperatives take the polite form («फिर ढूँढें», not «फिर ढूँढो», which it calls rude) ([Mozilla hi-IN style guide](https://www.github.com/mozilla-l10n/styleguides/blob/main/docs/hi-IN/README.md)).
  - Gengo's Hindi guide: «‘तुम’ for “you” is not preferred. Use “आप” instead», because तुम "may offend users typically addressed as आप in public" ([Gengo](https://gengo.com/hi/translators/resources/style-guide/)).
  - Zulip's Hindi guide is the exception: it asks for informal तुम ([Zulip hindi.md](https://github.com/zulip/zulip/blob/5.0/docs/translating/hindi.md)). It is a chat tool for teams of peers.
  - The Microsoft Hindi style guide PDF could not be read (binary, §11). No Hindi in-app text of Duolingo or Hello English could be opened (store pages blocked or English-only, §11).
- **Decision: आप**, unlike ko (the polite -yo style to a peer), zh (你), id (*kamu*) and ru (ты). Reasons:
  1. Hindi has no neutral peer form for a stranger. तुम from an app reads as talking down to older or rural users, and तू is rude; Hindi speakers address teachers as आप, and the app is a teacher.
  2. The cost is small: the polite imperative is as short as the तुम form (लिखें / लिखो, चुनें / चुनो), so the 8-character tab bar and buttons are unaffected.
  3. आप can still be warm: praise with «बहुत बढ़िया!», «शाबाश!», not formal Sanskritised Hindi.
- **Voice:** friendly teacher, plain everyday Hindi. Use common English loans that urban learners use daily (कार्ड, लेवल, ऐप, ईमेल, ऑफ़िस, मीटिंग, सेटिंग्स) when the Hindi word would sound bookish (प्रौद्योगिकी, अभ्यर्थी, संगणक). Use the plain Hindi word when it is everyday Hindi (पाठ, अभ्यास, प्रगति, सवाल, जवाब, ग़लती).
- **Never:** तुम or तू; mixed आप / तुम on one screen; Sanskritised officialese (कृपया ध्यान दीजिए कि…); romanised Hindi (Hinglish in Latin letters: *aap sahi ho*); slang (बॉस, यार, भाई) addressed to the learner; more than one exclamation mark per screen.
- **Translations of example sentences:** *you* = **तुम** between friends, family and in texting, **आप** in service, office, email, doctor and stranger scenes; that तुम sits inside a translation, not addressed to the learner. *I'm a teacher* → «मैं टीचर हूँ» or «मैं शिक्षक हूँ» (whichever is natural for the scene).
- **Gender in translations:** Hindi verbs show the speaker's gender (मैं जाता हूँ / जाती हूँ). Translations of *I* sentences use the gender of the character in the scene; for a generic *I*, alternate, or write both once in a lesson body («मैं जानता / जानती हूँ»). Never write the slash form in a practice `p` (the learner would wonder which to translate).
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice:
- «हिंदी में आर्टिकल नहीं होते, इसलिए a और the छूट जाते हैं — या ग़लत जगह लग जाते हैं। तीन नियम याद रखें, काफ़ी है।»
- «"मैं यहाँ 2015 से रह रहा हूँ" अंग्रेज़ी में Present Continuous नहीं है। यह Present Perfect है: I've lived here since 2015।»
- «हिंदी में "वह" से पता नहीं चलता कि बात आदमी की है या औरत की। अंग्रेज़ी में चुनना पड़ता है: he या she।»

**Typography and mixing English into Hindi text (one rule, applied everywhere):**
- **Script.** Hindi in Devanagari only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Devanagari outside the `pron` field.
- **Quotes.** Hindi phrases in straight double quotes "…" (Hindi print uses “ ” or " "; one style is easier to check), nested in single '…'. In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `"मैं चाय पीता हूँ" अंग्रेज़ी में?`, «two के बाद बहुवचन: books।».
- **Full stop: the danda «।»** at the end of every Hindi sentence, including one that ends in an English word («… यह Present Perfect है: I've lived here।»). Mozilla's guide asks for the danda; Gengo asks for a full stop ([Mozilla](https://www.github.com/mozilla-l10n/styleguides/blob/main/docs/hi-IN/README.md), [Gengo](https://gengo.com/hi/translators/resources/style-guide/)); the danda is standard in Hindi books and newspapers, so it wins. `?` and `!` as in English. No terminal punctuation on buttons, labels, tabs or deck names. A full stop «.» appears only inside English.
- **Nukta, always and always in NFC.** Write ज़ फ़ क़ ख़ ग़ ड़ ढ़ with the nukta wherever standard Hindi has it (ज़रूरी, फ़ोन, ग़लत, ज़्यादा); Gengo asks for it to "avoid confusion". Store every string in **Unicode NFC**: ज़ = U+091C + U+093C. The precomposed letters U+0958–U+095F (क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़) are not NFC; a string with them looks identical but compares different, which breaks duplicate checks, lint and search. `Intl.DisplayNames('hi')` already returns «अंग्रेज़ी» decomposed (checked locally). The `pronPattern` rejects precomposed nukta letters (§6).
- **Chandra:** ऑ / ॉ for the English *o* in *doctor, coffee, office* (ऑफ़िस, कॉफ़ी), as Gengo recommends («ऑपरेटिंग», not «आपरेटिंग»). Anusvara (ं) for nasals before consonants in Hindi words (हिंदी, अंग्रेज़ी); chandrabindu (ँ) where standard Hindi has it (हाँ, यहाँ, मैं).
- **Spelling of the language:** prose «हिंदी» (anusvara, the common modern spelling); the engine's `LANGS` table and `Intl.DisplayNames('hi')` print «हिन्दी». Both are correct; do not "fix" the engine string.
- **Digits:** international digits 0–9 everywhere, not Devanagari ०–९ (Mozilla: "International form of Indian Numerals"). Indian grouping in UI numbers (12,34,567) via `Intl` (§10).
- **Dash.** Spaced em dash ( — ) between clauses and in «A — B»; hyphen inside compounds (हल्की-फुल्की, -ing रूप); en dash in ranges (2–4).
- **Do not inflect English words with Hindi endings:** no «वर्बों», «आर्टिकल्स», «टेंसेस». Write «वर्ब», «आर्टिकल», «टेंस» and let the Hindi postposition carry the case («दो आर्टिकल हैं», «इन टेंस में»).
- **Alternatives:** ` / ` with spaces, as in ko-en.
- **Headings and deck names:** no capitals exist in Devanagari; English words inside them keep their normal capitalisation (*Present Perfect*).

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]:
  - Hindi-language explainers of English grammar keep most terms in English: «Present Indefinite Tense», «Present Continuous Tense», «Helping verb», «Subject», «V1, V2, V3», «Verb की 2nd form», with Hindi for the general words: «12 Tense (काल)», «क्रिया» ([spokenenglish.guru](https://spokenenglish.guru/?p=1907)). They give «Simple Present Tense» as the alias: «इस Tense को Simple Present Tense भी कहते हैं».
  - An articles explainer uses «आर्टिकल», «निश्चित आर्टिकल» (the), «अनिश्चित आर्टिकल» (a / an), «संज्ञा» and «व्यंजन ध्वनि»; it has no Hindi word for plural and no «उपपद» ([grammarpustak](https://grammarpustak.blogspot.com/2020/10/articles-a-an-the-in-hindi.html)).
  - A Hindi-interface grammar course uses «गणनीय संज्ञाएँ», «अगणनीय संज्ञाएँ», «एकवचन», «बहुवचन» ([LanGeek](https://langeek.co/en-HI/grammar/course/44/countable-uncountable-nouns/beginner)).
  - Hindi school grammar (the subject हिंदी व्याकरण) names the parts of speech संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण, and uses वचन (एकवचन / बहुवचन), लिंग, कारक, काल, वाच्य, पुरुष, अल्पप्राण / महाप्राण, दंत्य / मूर्धन्य. This is general knowledge of NCERT-style Hindi grammar, **not checked against a fetched textbook** (§11).
- **Tense names: *Simple Present* is primary, glossed once as «Simple Present (जिसे Present Indefinite भी कहते हैं)».** The fetched Hindi-medium explainer makes *Present Indefinite* primary; English-medium schools, IELTS material and every other course in this app use *Simple Present*. Gloss *Past Indefinite* and *Future Indefinite* the same way at their first use in `past` and `will`.
- **One term per concept.** The standing-rule regex depends on **आर्टिकल**, **बहुवचन** and **गणनीय / अगणनीय** (§7). Do not write «उपपद», «बहु.», «प्लूरल» or «गिनने योग्य» in a `why` that is meant to count.

| English term | Hindi term (use this) | Note |
|---|---|---|
| article | **आर्टिकल** | Standing-rule keyword. The regex also accepts the misspelling आर्टीकल, but write आर्टिकल |
| indefinite / definite article | अनिश्चित आर्टिकल (a / an) / निश्चित आर्टिकल (the) | In `why` prefer «आर्टिकल a», «आर्टिकल the» |
| zero article | आर्टिकल नहीं | «यहाँ कोई आर्टिकल नहीं लगता» |
| noun | संज्ञा | |
| countable / uncountable noun | **गणनीय / अगणनीय** संज्ञा | Standing-rule keyword (गणनीय also matches inside अगणनीय). Gloss once: «गणनीय (जिसे गिन सकें)» |
| singular / plural | एकवचन / **बहुवचन** | Standing-rule keyword. Hindi has वचन too, so the idea is familiar |
| gender (Hindi) | लिंग | Contrast only: «अंग्रेज़ी में चीज़ों का लिंग नहीं होता: it» |
| Hindi postposition (ने, को, से, में, पर) | परसर्ग | Contrast only: «हिंदी में परसर्ग बाद में आता है (घर में), अंग्रेज़ी में preposition पहले (in the house)» |
| preposition | प्रीपोज़िशन | Explain once with the परसर्ग contrast |
| pronoun / personal pronoun | सर्वनाम / पुरुषवाचक सर्वनाम | |
| subject / object | कर्ता (subject) / कर्म (object) | Hindi-medium books often write Subject / Object in English; give both once |
| subject / object pronoun (I / me) | I, he (कर्ता) / me, him (कर्म) | Short: «I — काम करने वाला, me — जिस पर काम हो» |
| possessive (my, his) | संबंध बताने वाले शब्द (my, his) | |
| possessive 's | 's (संबंध: का / की / के) | «Priya's phone = प्रिया का फ़ोन» |
| verb | क्रिया | Also «verb» in English inside sentences («इस verb के साथ») |
| be | **be (am, is, are)**; «है / हैं वाली क्रिया» | Lesson `be` |
| auxiliary verb | सहायक क्रिया (helping verb) | Gloss once with the English name Hindi-medium learners know |
| modal verb | मोडल (can, should, must) | «मोडल के बाद V1» |
| person (grammar) | पुरुष (उत्तम / मध्यम / अन्य) | Use sparingly; prefer «he / she / it के साथ» |
| third-person singular -s | he / she / it वाला -s | Full form once: «अन्य पुरुष एकवचन (he, she, it) के साथ verb में -s»; afterwards «he / she / it वाला -s» |
| base form / past / past participle | V1 / V2 / V3 | Hindi-medium convention, as in the fetched explainer |
| regular / irregular verb | नियमित / अनियमित क्रिया | |
| -ing form | -ing रूप | |
| tense | टेंस (काल) | Gloss once; write «टेंस» afterwards, never «टेंसेस» |
| present simple | **Simple Present** (Present Indefinite) | See the rule above |
| present continuous | Present Continuous | Hindi «रहा है / रही है» maps onto it — and too far (§4.2) |
| past simple / past continuous | Simple Past (Past Indefinite) / Past Continuous | |
| future (will / going to) | will / be going to | «Future Indefinite» only as a gloss |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | Key lessons `perfect`, `perfect-2`, `stative-since` |
| past perfect | Past Perfect | |
| stative verb | स्थिति बताने वाली क्रिया (stative verb) | Lesson `stative-since`: know, want, have (मालिकाना), understand, like, need |
| passive / active | Passive Voice (कर्मवाच्य) / Active Voice (कर्तृवाच्य) | Hindi school term वाच्य; Indian English books say Active / Passive Voice |
| conditional | If वाले वाक्य (conditional) | Lesson titles may say «If + Simple Present, will» |
| relative clause | who / which / that वाला उपवाक्य | |
| reported speech | Indirect Speech (अप्रत्यक्ष कथन) | Indian books also say «Narration» |
| infinitive / gerund | to + V1 (infinitive) / -ing (gerund) | |
| conjunction | योजक (and, but, because) | |
| adjective / adverb | विशेषण / क्रियाविशेषण | |
| comparative / superlative | comparative / superlative (तुलना) | |
| question word | wh-शब्द (what, where, why) | |
| yes/no question / wh-question | हाँ-ना वाला सवाल / wh-सवाल | |
| question tag | question tag (…, isn't it?) | Lesson `questions` body |
| negative sentence | नकारात्मक वाक्य | |
| word order | शब्द-क्रम | «हिंदी: कर्ता-कर्म-क्रिया; अंग्रेज़ी: कर्ता-क्रिया-कर्म» |
| there is / are | there is / there are | |
| phrasal verb | फ़्रेज़ल वर्ब | |
| idiom / collocation | मुहावरा / शब्दों की जोड़ी | |
| Indian English | इंडियन इंग्लिश | Lesson `indian-english` |
| Hinglish | हिंग्लिश | Mixed Hindi-English speech; lesson body only |
| pronunciation | उच्चारण | |
| pronunciation aid (respelling) | उच्चारण (देवनागरी में) | Toggle «उच्चारण दिखाएँ» |
| stress / stress mark | ज़ोर / ज़ोर का निशान (ˈ) | |
| vowel / consonant | स्वर / व्यंजन | |
| nukta (dot below) | नुक़्ता | «नुक़्ता वाला अक्षर = वह आवाज़ जो हिंदी में नहीं है» (§6) |
| aspirated / unaspirated | महाप्राण / अल्पप्राण | School term; used in `pron` for English p, t, k |
| dental / retroflex | दंत्य (त, द) / मूर्धन्य (ट, ड) | School term; used in `pron` |
| schwa / weak form | हल्का "अ" (schwa) / कमज़ोर रूप | |
| linking | जोड़कर बोलना | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; **the ranking is this profile's inference**, because no fetched source counts errors by type for Hindi speakers. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Hindi) and every example with no named source is [practitioner opinion].**

**Main fetched evidence:**
- [Khan 2021](https://journals.eltai.in/index.php/jelt/article/download/JELT630302/493/491), *Journal of English Language Teaching* 63(3): a case study of **10 Hindi-L1 working professionals** (8 intermediate, 2 upper-intermediate), errors noted in speaking tasks. Rankings are qualitative ("the most common", "all intermediate participants struggled"); **no counts**.
- [Demszky, Sharma, Clark, Prabhakaran & Eisenstein, *Learning to Recognize Dialect Features*](https://arxiv.org/pdf/2010.12707.pdf) (arXiv 2010.12707; the page gives no year): 22 Indian English features annotated in **ICE-India** spoken dialogues (S1A-001–090) and in Sharma's (2009) interviews, each with a corpus example. It shows which features occur in educated Indian English; **it gives no frequencies in the part read** and covers speakers of many Indian L1s, not Hindi only.
- Sharma 2005a/b on article use, **read only through a summary in a later paper's introduction** ([Benjamins page](https://benjamins.com/catalog/veaw.g50.07hun)): substrate influence explains Indian English *one* as an indefinite marker; givenness and modification explain zero articles; zero articles persist among first-generation Indian immigrants in the US who are otherwise close to native-like.
- Progressive with stative verbs in Indian English: [Van Rooy 2014](https://repository.nwu.ac.za/items/903a75a1-657a-4e85-94df-14cdd73bccfc/full) (*World Englishes* 33(2); Indian, Kenyan and Black South African English corpora; **abstract only**) and [Schubert 2002](https://kops.uni-konstanz.de/entities/publication/04b6bd76-5d17-4e6a-a0b9-1e1d98d19930/full) (Konstanz MA thesis "Are you wanting a cup of coffee?"; **abstract only**, no data on the page).
- [llexi, Common English errors by Hindi speakers](https://llexi.com/l1-errors/common-english-errors-hindi-speakers.html): a practitioner list with examples (no sources, no counts).

1. **Articles: omission and overuse.**
   - *What goes wrong:* *a* is missing before singular count nouns (`We went to coffee shop.`, `He is engineer.`); *the* is missing with known or unique things (`I used to go there in past.`, `Chair is black.`); an article is added to uncountable or abstract nouns (`She has a business experience.`, `The life is hard.`); एक is read as *one* (`I have one doubt.`), यह / वह as *the* or *this*.
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `We went to coffee shop. ✗ → We went to a coffee shop. ✓` / `She has a business experience. ✗ → She has business experience. ✓`
   - *Why:* Hindi has no articles. एक ("one") sometimes does the work of *a* (एक लड़का आया), and यह / वह ("this / that") the work of *the*, but both are optional; definiteness is left to context.
   - *Evidence:*
     - [research-backed, via a summary] Sharma 2005b: substrate influence (Hindi and other Indian languages) explains Indian English *one* as an indefinite marker, and givenness and modification explain where zero articles appear. Sharma 2005a: zero articles persist even among Indian immigrants in the US with otherwise near-native English (Benjamins page summary; the Cambridge page for 2005b could not be opened, §11).
     - [research-backed, features only] Demszky et al.: ARTICLE OMISSION (`(the) chair is black`) and EXTRANEOUS ARTICLE (`she has a business experience`) are both annotated Indian English features in ICE-India.
     - [research-backed, qualitative] Khan 2021: articles "omitted or overused" (`I used to go there in past`, `We went to coffee shop`).
   - **Content consequence:** both directions, as in ru: *a* for one countable thing and *the* for a known thing, **and** no article for general uncountables and abstract nouns (*experience, advice, life*). Treat *one* for *a* as a third, Hindi-specific trap (`I have one question` is fine only when the number matters). Articles stay error-prone at near-native level (Sharma 2005a), so never gate on them.
2. **Continuous with states and durations; *since / for / from*.**
   - *Examples:* `I am living in Delhi from two years. ✗ → I've lived in Delhi for two years. ✓` / `I am working in this company since 2022. ✗ → I've worked at this company since 2022. ✓` / `He is having a television. ✗ → He has a television. ✓` / `I am understanding the requirements now. ✗ → I understand the requirements now. ✓` / `It is raining from two days. ✗ → It's been raining for two days. ✓`
   - *Why:* Hindi expresses an ongoing state that started in the past with the progressive plus से: «मैं दो साल से दिल्ली में रह रहा हूँ», «2022 से काम कर रहा हूँ». The word-for-word result is Present Continuous + *from / since*. से also means *from*, so *from two years* follows naturally. Hindi also uses रहा है with some state verbs that English keeps simple.
   - *Evidence:*
     - [research-backed, qualitative] Khan 2021: `I am working as an engineer since 10 years`, `I am living in Delhi from two years`, `It is raining from two days`.
     - [research-backed, features only] Demszky et al.: STATIVE PROGRESSIVE (`he is having a television`) and HABITUAL PROGRESSIVE (`always we are giving receipt`) in ICE-India.
     - [research-backed, abstract only] Van Rooy 2014: Indian English uses the progressive with stative verbs proportionally more often than British English, mainly for extended, ongoing states. Schubert 2002 studies the same overuse (no data on the page).
     - [practitioner opinion] llexi (`I am living in Bangalore for ten years`, `He is having three meetings today` — which is in fact fine in English: *have* = take part in).
   - **Content consequence:** the most Hindi-specific grammar zone. It touches `continuous`, `tense`, `perfect`, `perfect-2` (reweights) and gets its own lesson `stative-since` (§8). Teach *since* + point in time, *for* + length of time, never *from* + length of time, and **Present Perfect (Continuous)** for "से + रहा है".
3. **Third-person -s and agreement.**
   - *Examples:* `He work in a bank. ✗ → He works in a bank. ✓` / `She don't like tea. ✗ → She doesn't like tea. ✓` / `He do a lot of things. ✗ → He does a lot of things. ✓`
   - *Why:* Hindi verbs agree in gender and number (करता है / करती है / करते हैं), but the agreement sits on the auxiliary and participle, not on a lone -s; learners know agreement exists but drop the English marker in speech.
   - *Evidence:* [research-backed, qualitative] Khan 2021 calls missing -s "the most common error" for intermediate and upper-intermediate participants alike. [research-backed, features only] Demszky et al.: LACK OF AGREEMENT (`he do a lot of things`).
4. **Tense and auxiliaries.**
   - *Examples:* `I was worked hard. ✗ → I worked hard. ✓` / `My boss was gave me projects. ✗ → My boss gave me projects. ✓` / `I have visited Bangalore yesterday. ✗ → I visited Bangalore yesterday. ✓` / `I do running. ✗ → I run. / I go running. ✓`
   - *Why:* Hindi past forms often keep an auxiliary (मैंने काम किया था, वह गया था), and था is read as *was*, giving *was worked*, *was gone*. Hindi «किया है» looks like the Present Perfect, so it is used even with a finished time (*have visited … yesterday*).
   - *Evidence:* [research-backed, qualitative] Khan 2021: all intermediate participants struggled with auxiliaries (`I was worked hard`, `My boss was gave me projects`; translation calques `I do running`, `I was seeing a movie`). [practitioner opinion] llexi (`I have visited Bangalore yesterday`).
5. **Questions: statement order, embedded inversion, the invariant tag.**
   - *Examples:* `Where you are going? ✗ → Where are you going? ✓` / `What you are doing? ✗ → What are you doing? ✓` / `I don't know what are they doing. ✗ → I don't know what they're doing. ✓` / `You are coming tomorrow, isn't it? ✗ → You're coming tomorrow, aren't you? ✓` / `You like tea? (as a neutral question) → Do you like tea? ✓`
   - *Why:* Hindi asks by intonation or with क्या at the start («क्या आप चाय पीते हैं?»), and wh-words do not move the verb («आप कहाँ जा रहे हैं?»). Hindi has one invariant tag, «है ना?» / «ना?», which maps onto *isn't it?* for every sentence.
   - *Evidence:* [research-backed, features only] Demszky et al.: LACK OF INVERSION IN WH-QUESTIONS (`what you are doing?`), INVERSION IN EMBEDDED CLAUSE (`I don't know what are they doing`), INVARIANT TAG (`the children are outside, isn't it?`, also *no*, *na*). [practitioner opinion] llexi (`Where you are going?`).
   - **Content consequence:** `questions` reweights onto order after wh-words and *do* for yes/no questions; its body adds tags (*aren't you, don't you*) and says that *isn't it?* is fine in India but marks Indian English abroad (§8, `indian-english`).
6. **Plurals and countability.**
   - *Examples:* `I have two friend. ✗ → two friends ✓` / `One of my friend called me. ✗ → One of my friends ✓` / `He gave me many advices. ✗ → a lot of advice ✓` / `I have three works to do. ✗ → three things / some work ✓` / `many equipments ✗ → a lot of equipment ✓` / `peoples, childrens, datas ✗ → people, children, data ✓` / `all the musics ✗ → all the music ✓`
   - *Why:* Hindi marks plural (दोस्त → दोस्तों, लड़का → लड़के), but many masculine nouns do not change in the direct case (दो दोस्त, दो काम), so *two friend* sounds right; सलाह, काम, सामान are countable in Hindi usage (कई सलाहें, तीन काम).
   - *Evidence:* [research-backed, qualitative] Khan 2021 (`I have two friend`, `One of my friend called me`, `peoples`, `Childrens`, `datas`). [research-backed, features only] Demszky et al.: MASS NOUNS AS COUNT NOUNS (`all the musics are very good`). [practitioner opinion] llexi (`many advices`, `three works`, `many equipments`).
   - **Content consequence:** unlike ru (where plural -s is a strength), the plural half of the standing rule tests a real Hindi problem: *-s after a number* (because Hindi often leaves the noun unchanged) and countability.
7. **Prepositions and postposition calques.**
   - *Examples:* `discuss about the proposal ✗ → discuss the proposal ✓` / `married with a doctor ✗ → married to ✓` / `prevented me to enter ✗ → prevented me from entering ✓` / `available in Netflix ✗ → on Netflix ✓` / `at evening ✗ → in the evening ✓` / `I went another school ✗ → I went to another school ✓` / `reply back, return back, revert back ✗ → reply, return, get back to you ✓`
   - *Why:* Hindi uses postpositions (में, पर, से, को) after the noun, and one postposition covers several English prepositions: से = *from, since, by, with*; में = *in, on* (Netflix में). «के बारे में चर्चा» gives *discuss about*; «से शादी» gives *married with*.
   - *Evidence:* [research-backed, qualitative] Khan 2021 (`surfing in the social media`, `available in Netflix`, *for / from / since*). [research-backed, features only] Demszky et al.: PREPOSITION OMISSION (`I went (to) another school`). [practitioner opinion] llexi (`discuss about`, `reply back`, `prevented me to enter`, `married with`, `at evening`).
8. **Pronouns: *he / she* from वह; dropped objects.**
   - *Examples:* `My sister is a doctor. He works in Delhi. ✗ → She works… ✓` / `I bought a phone but he is not working. ✗ → it isn't working ✓` / `She doesn't like. ✗ → She doesn't like it. ✓`
   - *Why:* वह (and colloquial वो) means *he, she, it* and *that*; gender shows on the verb (वह जाता है / जाती है), not the pronoun. Hindi also drops a known object («मुझे पसंद नहीं»).
   - *Evidence:* [research-backed, features only] Demszky et al.: DIRECT OBJECT PRO-DROP (`she doesn't like (it)`). The *he / she* confusion has **no fetched source** for Hindi [practitioner opinion].
9. **Emphasis with *only* and *itself*; topic-first order.**
   - *Examples:* `I will do it myself only. ✗ → I'll do it myself. ✓` / `I was there yesterday only. → I was there just yesterday. ✓` / `He is doing engineering in Delhi itself. → right here in Delhi ✓` / `Minimum one month you have to wait. ✗ → You have to wait at least a month. ✓`
   - *Why:* Hindi ही marks focus («आज ही», «मैं ही करूँगा»), and learners render it as *only* or *itself*. Hindi word order is subject-object-verb with the topic first; full SOV in English is rare, but fronted objects and time phrases carry over.
   - *Evidence:* [research-backed, features only] Demszky et al.: FOCUS *only*, FOCUS *itself*, OBJECT FRONTING, LEFT DISLOCATION (`my father, he works for a solar company`). [practitioner opinion] llexi (`myself only`, `The report itself is not yet ready`).
   - **Content consequence:** a register point more than an error: *today itself* and *now only* are normal Indian English and understood in India. Mark them «भारत में चलता है, विदेश में अजीब लगता है» in `indian-english`; do not mark them ✗ in grammar lessons.
10. **Double comparatives and superlatives.**
    - *Examples:* `more better ✗ → better ✓` / `the most cheapest car ✗ → the cheapest car ✓` / `more rarer ✗ → rarer ✓`
    - *Why:* Hindi compares with और ("more") or से ज़्यादा before the adjective, which learners keep alongside -er.
    - *Evidence:* [research-backed, qualitative] Khan 2021 (`more better`, `more rarer`, `the most cheapest car`).
11. **Indian English usages and Hindi calques (vocabulary and pragmatics).** Split into two groups; the split is this profile's decision [practitioner opinion]:
    - **Fine in India, unusual or misunderstood abroad** (teach the international equivalent; never mark them as "wrong English"): *prepone* (→ move up / bring forward), *out of station* (→ out of town), *What is your good name?* (→ What's your name? — from आपका शुभ नाम), *cousin brother / cousin sister* (→ cousin), *real brother* (→ brother), *co-brother* (→ my wife's sister's husband), *do the needful* (→ please take care of it), *revert* = reply (→ get back to you), *passed out* = graduated (→ graduated), *timepass*, *cent per cent* (→ a hundred percent), *native place* (→ hometown), *years back* (→ years ago), *mention not* (→ you're welcome), *intimate me* (→ let me know), *kindly* + order (→ please / could you), *take lunch* (→ have lunch), *shifting* (→ moving), *I belong to Delhi* (→ I'm from Delhi).
    - **Errors in any variety:** *Myself Rahul* as a self-introduction (→ I'm Rahul / My name is Rahul), *discuss about*, *revert back / return back*, *I have a doubt* meaning a question (→ I have a question), *Do one thing* as an opener (→ Here's an idea / Why don't you…), *the children are outside, isn't it?*.
    - *Evidence:*
      - [practitioner opinion] Shashi Tharoor (2022), *out of station, co-brother, do the needful, cent per cent, mention not, timepass, take lunch, years back, native place*; he calls *years back* "awkward and arguably wrong" and *Myself Salman, yourself?* a solecism ([Khaleej Times](https://www.khaleejtimes.com/shashi-tharoors-world-of-words/from-co-brother-to-out-of-station-here-are-some-indian-english-expressions-you-must-know?amp=1)).
      - [practitioner opinion] Goethe-Institut feature (Faizal Khan, 2020): *putting up, I belong to Delhi, Myself Hemant, good name, real brother, shifting, out of station, do the needful, passed out, do one thing* ([Goethe-Institut](https://www.goethe.de/prj/mis/en/mit/21902303.html)).
      - [practitioner opinion] Rashmee Roshan Lall (2015): *good name* = आपका शुभ नाम, *prepone*, *not on his seat*, sentence-final *only* ([rashmee.com](https://www.rashmee.com/the-peculiar-joys-of-indian-english-hes-not-on-his-seat-your-good-name/)).
      - [practitioner opinion] llexi: *do the needful, revert back, kindly, intimate me, out of station, good name*; [research-backed, qualitative] Khan 2021: *Myself XYZ* (3 participants), *read* for *study* (`My daughter reads in class seventh`).
      - *cousin brother* and *I have a doubt* = question appear on **no page opened** (Goethe only contrasts *real brother*); they are standard Indian English lore [practitioner opinion].
12. **Copula and short answers (light).**
    - *Examples:* `My parents from Gujarat. ✗ → My parents are from Gujarat. ✓` / `She very tired. ✗ → She's very tired. ✓`
    - *Why:* Hindi always has है / हैं, so copula omission is not a transfer error; it appears in fast speech.
    - *Evidence:* [research-backed, features only] Demszky et al.: COPULA OMISSION. Light: reweight `be` towards *be* + verb confusions (`I am agree`, `I was worked`) instead.
13. **Pronunciation.** Each item is tagged separately. Background: **Indian English has its own stable pronunciation norm**; in [Sirsa & Redford 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC4028080) (*J. Phonetics* 41(6); **7 Hindi-L1 and 7 Telugu-L1 speakers** educated in English from age 6, reading a 13-sentence story in English and their L1), Hindi and Telugu differed on nearly every acoustic measure, but the speakers' English differed on only three; the authors argue for a distinct Indian English target phonology. So the course aims at **intelligibility to international listeners**, not at removing an Indian accent.
    - **/v/–/w/ merged into one sound (व [ʋ]).** `very` → *wery*, `village` → *willage*, `wine` = `vine`, `what` → *vhat*, `west` = `vest`.
      - [research-backed, not Hindi-L1] Wiltshire & Harnsberger 2006 (*World Englishes*; **5 Gujarati-L1 and 5 Tamil-L1** Indian English speakers, all Gujarati speakers also spoke Hindi): both groups used a labiodental glide for written *v* and *w*, in **70%** of analysed tokens, varying freely with [w] ([PDF](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2006-Wiltshire-and-Harnsberger-WE.pdf)).
      - [practitioner opinion] TalkDrill: Hindi has one sound, /ʋ/ (व), between English /v/ and /w/; examples *wery, wideo, willage, vhat, ven, vine/wine* ([TalkDrill](https://www.talkdrill.com/blog/pronunciation/sounds/v-vs-w-pronunciation/)); llexi (*vine/wine, vest/west, very/wary*).
    - **TH → थ / द (aspirated or plain dental stops):** `think` → *thhink* with a dental t, `this` → *dis*, `three` ≈ `tree`.
      - [research-backed, secondary] Wiltshire & Harnsberger cite earlier work that dental stops generally replace /θ ð/ in Indian English (they measured none). [practitioner opinion] llexi (Hindi aspirated t for *think*), SpeakShark (`this` → *dis*) ([SpeakShark](https://speakshark.com/blog/hard-english-words-for-hindi-speakers)).
    - **Retroflex t / d (ट, ड) for English alveolar t / d:** `time`, `day`, `tea` sound "heavy".
      - [research-backed] Wiltshire & Harnsberger: both groups used retroflex stops (the General Indian English model). Sirsa & Redford: retroflexion did not differ between Hindi and Telugu speakers' English, i.e. it is part of the shared Indian English norm. **Light:** intelligible; mention it, do not drill it.
    - **Unaspirated initial p, t, k:** `pin` sounds like *bin* to some listeners.
      - [research-backed, not Hindi-L1] Wiltshire & Harnsberger: Gujarati speakers' mean VOT for /p t k/ was 20, 16 and 36 ms (rarely aspirated); Tamil speakers 49, 38 and 74 ms. Sirsa & Redford found no VOT difference between Hindi and Telugu speakers' English (values not in the summary). [practitioner opinion] llexi ("pin with a strong puff of air"). Hindi learners know the अल्पप्राण / महाप्राण contrast (प / फ), which the `pron` lesson uses.
    - **f → फ (aspirated p), z → ज:** `phone` with a bilabial फ, `easy` → *eeji*, `zero` → *jero*.
      - [practitioner opinion] Ashish Bhatia's notes on the Indian accent: Hindi speakers often use bilabial फ in फ़ोन, फ़िल्म; spellings that drop the nukta (एक्सेसरीज, ईजी) reflect z → j ([ashishb.net](https://ashishb.net/linguistics/indian-accent/)).
    - **s + consonant clusters with an added vowel:** `school` → *iskool*, `station` → *istation*, `special` → *ispecial*.
      - [practitioner opinion] SpeakShark. No study opened.
    - **Stress, schwa and rhythm:** full vowels in unstressed syllables (`about` → *ay-bout*, `photography` → *PHO-to-gra-phy*), equal stress on every syllable, syllable-timed rhythm.
      - [research-backed] Sirsa & Redford: vowel proportion (%V) was 46.8% in the speakers' Indian English against 41.1% for British English (52.3% Hindi, 51.2% Telugu), i.e. fewer reduced vowels than British English. [practitioner opinion] SpeakShark (*ay-bout*, *PHO-to-gra-phy*), llexi ("equal stress per syllable"), ashishb ("Hindi is spoken without stress").
      - Consequence: the respelling marks stress on every word of 2+ syllables and writes reduced vowels as a short अ (§6).
    - **Vowels:** FACE and GOAT as long monophthongs ([eː], [oː]); /ʊ/–/uː/ and /ɔː/–/oʊ/ close together.
      - [research-backed, not Hindi-L1] Wiltshire & Harnsberger: front vowels near the General Indian English model, [æ] present; back vowels closer together (Gujarati /u ʊ o/ grouped closely). Light.
    - **Question intonation:** rising intonation on every yes/no question. [practitioner opinion] llexi.
14. **Things that are *not* zones** (do not over-teach):
    - r / l, p / b, k / g: Hindi has these contrasts (र / ल, प / ब), so the ko-en pairs *rice / lice*, *right / light* are easy. Keep them as warm-ups in `pron` (§8).
    - Copula *be* in the present: Hindi always has है (item 12).
    - Fixed SVO in simple statements: adults with school English rarely produce full SOV; the trouble is questions (item 5) and fronting (item 9).
    - Indian accent features that do not block understanding (retroflex t / d, monophthong FACE / GOAT): mention, do not drill.

## 5. Learner starting point

- **Who speaks Hindi.** Census 2011: **528.3 million first-language speakers (43.6% of India)**, 692 million in all with second- and third-language speakers. English: 0.26 million first-language, about 83 million second-language and 46 million third-language speakers ([Wikipedia, Multilingualism in India](https://en.wikipedia.org/wiki/Multilingualism_in_India), citing the census) [curriculum convention: census, read via Wikipedia].
- **School exposure.**
  - English is taught as a subject in practically every school system in India, usually from class 1 [curriculum convention, general knowledge; no board syllabus was fetched, §11].
  - **Most Hindi speakers study in Hindi medium:** the NSO education survey (2017–18, 1.52 lakh students) found **18.2%** of Hindi-speaking primary students in English-medium schools; about 21–29% of all students are in English medium from class 6 up ([The Quint, 2020](https://www.thequint.com/news/education/percentage-of-english-medium-students-rises-between-kg-to-class-10)).
  - **Phonetics is not taught:** "Phonetics is still not a part of the CBSE curriculum"; it appears only for students who take English at undergraduate level ([The Week, 2016](https://www.theweek.in/webworld/features/society/phonetics-training-for-school-students.html)). This drives the §6 decision.
  - Adults aged 20–40 had 10–12 years of school English, mostly grammar-translation with rules learned by Hindi-medium formulas (*Sub. + V1 + s/es + Obj.*), and read and write better than they speak and listen [practitioner opinion].
- **Exams and goals** [curriculum convention unless tagged]:
  - **Board exams:** English is a compulsory paper in the class 10 and 12 board exams of CBSE and the state boards [general knowledge, not fetched].
  - **Government and banking exams** (SSC, IBPS, SBI, railways) have an English section (grammar, error spotting, fill-in-the-blank); preparation sites in Hindi teach articles and tenses for them ([PW](https://www.pw.live/exams/bank-jobs/articles-in-english-grammar/) appeared in searches, not opened).
  - **IELTS / PTE / TOEFL** for study and migration: IDP reported a **10–15% rise** in Indian IELTS candidates in 2022 over the pre-pandemic year; IELTS in India is owned by IDP ([ThePrint / PTI, 2022](https://theprint.in/india/up-to-15-pc-rise-in-number-of-indian-candidates-taking-ielts-exam-since-pre-covid-years/802424)).
  - **Jobs:** interviews, IT and BPO / call-centre work, client email and calls; "spoken English" courses and apps are a large market (Hello English claims over 15 million learners and teaches through Hindi among 20+ languages ([App Store](https://apps.apple.com/ca/app/hello-english/id1148009516))).
  - Familiar task formats: error spotting, fill in the blanks, sentence transformation (active / passive, direct / indirect), translation from Hindi. They map onto `mc` (find-the-error and choose-the-correct-sentence frames), `fill` and `type`.
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI, India.** Two fact sheets were read, and they disagree; report both, use neither as a Hindi-speaker figure:
    - Sheet in EF's 2025 folder: overall **484**, rank **74** (global average 488); **reading 494, listening 457, writing 504, speaking 500**. Hindi-belt states: Rajasthan 534, Haryana 502, Madhya Pradesh 482, Bihar 453, Uttar Pradesh garbled ("48"); Delhi (city) 407 ([fact sheet 2025](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-india-english.pdf)).
    - Sheet in EF's 2026 folder: overall **479**, rank **69** (global average 485); **reading 531, writing 494, speaking 454, listening 408**. Rajasthan 510, Haryana 482, Madhya Pradesh 467, Bihar 433, Uttar Pradesh 416; Delhi 421 ([fact sheet 2026](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-india-english.pdf)).
    - **Common shape: listening is the lowest skill in both** (457 and 408); speaking is mid-range in one and second-lowest in the other. Self-selected online test-takers of many L1s; OTHERS.md's 490 / rank ≈70 is a third, secondary figure.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners who know the forms and their Hindi-medium names (V1 / V2 / V3, Helping verb). The value is in typed production and audio.
  2. **Listening first, then speaking.** Both EF sheets put listening lowest. Weight listen-then-type review, minimal pairs (*vine / wine*, *west / vest*, *three / tree*, *zoo / Jew*, *fan / pan*) and the stress mark.
  3. **Never gate on articles or the since-continuous error.** Both persist into fluent Indian English (Sharma 2005a; Van Rooy 2014).
  4. **Make the article and the tense carry the answer** in typed items (§7).
  5. **Interview, office and exam flavour:** name the real use in lesson blurbs («इंटरव्यू में काम आएगा», «बैंक / SSC परीक्षा में अक्सर पूछा जाता है», «IELTS Speaking में») where true. Never promise score gains.
  6. **Respect Indian English.** Present international forms as "what listeners abroad expect", not as correcting a wrong Indian habit. Learners who work with Indian colleagues will keep using Indian English with them.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.**
  - [curriculum convention] Indian school English does not teach phonetic symbols: "Phonetics is still not a part of the CBSE curriculum", even in elite city schools; learners meet it only if they take English at undergraduate level ([The Week, 2016](https://www.theweek.in/webworld/features/society/phonetics-training-for-school-students.html)). Hindi-medium state boards were not checked (§11).
  - [curriculum convention] Hindi learners' dictionaries print pronunciation in Devanagari: Oxford's Mini English-Hindi Dictionary says "All the entries have been provided with their pronunciation in the Devanagari script" ([OUP India](https://india.oup.com/product/mini-eng-hindi-dictionary-9780199474301/)); the larger English-English-Hindi dictionary gives "Pronunciation in both English and Hindi" without saying which notation ([OUP India](https://india.oup.com/product/english-english-hindi-dictionary-revised-edition_new-9780190135089/)).
  - [practitioner opinion] Hindi writers already use Devanagari conventions for English sounds: the nukta for sounds Hindi lacks (ज़, फ़), ऑ for the English *o*, and ऐ for the vowel of *bank, cat* (बैंक, कैट). Gengo asks localisers to keep nukta and chandra «to avoid confusion» ([Gengo](https://gengo.com/hi/translators/resources/style-guide/)). One practitioner proposes extending the nukta to further English sounds, a special mark for English r, and the avagraha ऽ for stress ([ashishb.net](https://ashishb.net/linguistics/indian-accent/)).
  - So, unlike Chinese and Russian learners (who meet IPA in school and dictionaries), **Hindi speakers know Devanagari respelling and not IPA**. That is the same situation as Indonesian learners, for whom id.md chose a native-letter respelling.
- **What plain Hindi respelling gets wrong** (the usual Hindi loan spellings: वेरी, थिंक, दिस, जीरो, फोन):
  - one letter व for both /v/ and /w/ — the merger itself (§4.13);
  - थ / द for /θ ð/ — the dental-stop substitution itself;
  - ज, फ without nukta for /z f/ — the z → j and f → ph errors;
  - no stress, and full vowels where English reduces them (*ay-bout*).
  An aid built on those spellings would write the errors into the course.
- **No study compares respelling, IPA and no aid** for Hindi learners. The recommendation is inference [practitioner opinion].

**Recommendation: a Devanagari respelling in every `pron` field (profile.json `"pron": "required"`), with the nukta extended to mark the English sounds Hindi lacks, and ˈ for stress.** Shown by default and hidden with the toggle «उच्चारण दिखाएँ».
- **IPA rejected:** learners cannot read it (above); it would need an IPA-teaching lesson the course does not have; and the toggle-off rate would likely be high.
- **`none` / `optional` rejected:** the same reasons as id.md §6 — every ko-based course carries an aid; an empty field needs untested engine rendering (PIPELINE §3); and the short words where the aid matters most (*think, very, zoo*) would be the ones left empty.
- **The cost of not copying zh, and how it is cut.** zh's IPA covers 356 of ko-en's 366 card targets and 325 `{{ex}}` rows (counted locally); with IPA they would be copied byte for byte. With a respelling they cannot be — **but the key below is a one-to-one table from zh's IPA symbols**, so every hi row is **derived mechanically from the zh row for the same English string**, not transcribed from scratch. That keeps hi consistent with zh (same stress positions, same weak forms, same American values) and makes a converter possible:
  - Recommended to the lead (not written by this profile): a small `ipa2deva` script that applies the derivation rules below to zh's `pron` for every unchanged English string. Writers then review its output and write only the localised cards (§9), hi-only cards and the two hi-only lessons by hand, with the same table.
  - `lint.js` already blocks the same English text with two different aids inside one pack, so derived and hand-written rows must agree.

**The key.**

*Vowels.* The independent letter is used at the start of a word or after another vowel; the sign (matra) after a consonant.

| Sound (zh IPA) | Independent / sign | Examples (hi `pron`) | Note |
|---|---|---|---|
| FLEECE iː | ई / ी | see सी, leave लीव़ | long |
| KIT ɪ; final unstressed -y i | इ / ि | live लिव़, very ˈव़ेरि | short; *ship / sheep* = शिप / शीप |
| DRESS e and FACE eɪ | ए / े | bed बेड, name नेम, today टˈडे | **collapse**, see below |
| TRAP æ | ऐ / ै | bad बैड, apple ˈऐपल | as in Hindi बैंक, कैट; *bad / bed* = बैड / बेड |
| STRUT ʌ and schwa ə | अ / (no sign) | cup कप, about अˈबाउट | **collapse**; stressed = ʌ |
| schwa at the end of a word | आ / ा | banana बˈनैना, sofa ˈसोफ़ा | Hindi spells English final -a this way (कैमरा) |
| LOT and PALM ɑː | आ / ा | hot हाट, copy ˈकापि, father ˈफ़ाद़र | American value; not हॉट |
| THOUGHT ɔː | ऑ / ॉ | talk टॉक, dog डॉग, coffee ˈकॉफ़ि | chandra o, as in ऑफ़िस |
| GOAT oʊ | ओ / ो | go गो, hotel होˈटेल | |
| GOOSE uː | ऊ / ू | food फ़ूड, two टू | |
| FOOT ʊ; weak u | उ / ु | book बुक, good गुड | |
| PRICE aɪ | आइ / ाइ | I आइ, time टाइम | |
| MOUTH aʊ | आउ / ाउ | house हाउस, now नाउ | |
| CHOICE ɔɪ | ऑइ / ॉइ | boy बॉइ, noise नॉइज़ | |
| NURSE ɜːr and lettER ər | अर / र after a consonant | work वर्क, bird बर्ड, water ˈवॉटर | **collapse**; stress tells them apart |
| NEAR ɪr, SQUARE er, CURE ʊr | इर, एर, उर / िर, ेर, ुर | here हिर, there द़ेर, sure शुर | |
| START ɑːr, NORTH ɔːr | आर, ऑर / ार, ॉर | car कार, door डॉर, four फ़ॉर | |

*Consonants.* A dot below (नुक़्ता) always means "a sound Hindi does not have — do not say the plain letter".

| Sound | Write | Examples | Note for the `pron` lesson |
|---|---|---|---|
| p b k g | प ब क ग | pen पेन, bag बैग | p, t, k at the start of a stressed syllable are महाप्राण-like (a puff of air) — said in the lesson, not written |
| t d | ट ड | time टाइम, day डे | the usual Hindi spelling of English t, d; the lesson says the tongue tip touches the ridge behind the teeth, «त और ट के बीच» |
| f | **फ़** | fan फ़ैन, coffee ˈकॉफ़ि | never plain फ: «ऊपर के दाँत निचले होंठ पर, होंठ बंद नहीं» |
| v | **व़** | very ˈव़ेरि, vine व़ाइन, have हैव़ | **extension:** dotted व = the voiced partner of फ़ (teeth on lip, a buzz you can hold) |
| w | **व** (no dot) | wine वाइन, work वर्क, twenty ˈट्वेन्टि | «होंठ गोल करके, दाँत नहीं छूते» |
| θ | **थ़** | think थ़िंक, three थ़्री | **extension:** «जीभ की नोक दाँतों के बीच, हवा निकले — थ नहीं» |
| ð | **द़** | this द़िस, the द़ | **extension:** the voiced partner of थ़ |
| s z | स **ज़** | bus बस, is इज़, zoo ज़ू | never plain ज for z: *zoo / Jew* = ज़ू / जू |
| ʃ ʒ | श **झ़** | she शी, measure ˈमेझ़र | झ़ is rare (measure, usually) |
| tʃ dʒ | च ज | check चेक, job जाब | |
| h | ह | house हाउस | |
| m n | म न | | before a consonant: म्, न् (since सिन्स, lamp लैम्प) |
| ŋ | ं before क / ग; ङ elsewhere | think थ़िंक, English ˈइंग्लिश, sing सिङ, singing ˈसिङिङ | no ग after ङ |
| l r | ल र | rice राइस, light लाइट | r before a consonant is written र् (reph): bird बर्ड |
| j | य | yes येस, cute क्यूट | |

*Derivation rules (apply in this order to the zh IPA of the same English string).*
1. **Words and sentences.** Drop the slashes. Words are separated by one space. zh's ` ‖ ` between two sentences becomes the danda: `। ` (danda, then a space). zh's two slashed groups for alternatives become ` / `. No other punctuation, no digits, no Latin letters, no IPA symbols except ˈ.
2. **Stress: ˈ only in words of two or more syllables**, at the position zh puts it (before the stressed syllable). Drop ˈ from one-syllable words and drop every ˌ (`/ˌfɪfˈtiːn/` → फ़िफ़ˈटीन). A syllable is a vowel symbol, or a final syllabic l / n (rule 6). The `pron` lesson says: «ˈ के बाद वाले हिस्से पर ज़ोर दें; बाकी हिस्से हल्के और छोटे».
3. **Vowels and consonants** by the tables. A vowel that follows a consonant is written as its sign; a vowel at the start of a word or after another vowel is written as the independent letter (idea /aɪˈdiːə/ → आइˈडीआ).
4. **Clusters.** Inside a word, a consonant with no vowel after it takes the virama (्): school स्कूल, street स्ट्रीट, lived लिव़्ड, asked ऐस्क्ट, Excuse इक्ˈस्क्यूज़ (the virama stays visible where ˈ splits the cluster). **No virama on a word's last consonant**: Hindi readers drop the final inherent vowel by habit (dog डॉग, months मन्थ़्स).
5. **Schwa.** ə inside a word is the bare consonant (inherent अ): about अˈबाउट, hundred ˈहन्ड्रड, photography फ़ˈटाग्रफ़ि. ə at the end of a word is ा (banana बˈनैना, Canada ˈकैनडा).
6. **Syllabic l and n** (zh PRON-RULES A4) count as a syllable for rule 2. **At the very end of a word** they are the bare consonant with its inherent vowel, which is also the usual Hindi spelling: people ˈपीपल, seven ˈसेव़न, station ˈस्टेशन, eaten ˈईटन, table ˈटेबल. **Before a final consonant** they take the virama like any cluster (rule 4): isn't ˈइज़न्ट, didn't ˈडिडन्ट, thousand ˈथ़ाउज़न्ड, important इम्ˈपॉर्टन्ट.
7. **Weak and strong forms** follow zh (PRON-RULES B), mapped by the table:

   | word | weak (default) | strong (alone, contrast, stranded) |
   |---|---|---|
   | a / an / the | अ / अन / द़ (द़ि before a vowel sound) | — |
   | to | ट; टु before a vowel | टू |
   | for / from / at / of | फ़र / फ़्रम / अट / अव़ | फ़ॉर / फ़्रम / ऐट (stranded: no ˈ, as zh) |
   | and / or / but | अन्ड / अर / बट | — |
   | can / could / should / would | कन / कड / शड / वड | — |
   | do / does / did / have / has / had (auxiliary) | ड / डज़ / डिड / हव़ / हज़ / हड | डू, हैव़ … as main verbs |
   | have to / has to | हैफ़ ट / हैस ट (zh ˈhæf tə; no ˈ on one-syllable words) | |
   | you / your / you're | यु / युर / युर | यू |
   | me / he / she / we | मि / हि / शि / वि | मी / ही / शी / वी |
   | that (relative) / that (demonstrative) | द़ट | द़ैट |
   | there (existential and adverb) | द़ेर | द़ेर |

   The weak/strong distinction survives except for *from* (फ़्रम both ways, because ʌ and ə collapse) and *there* (identical in zh too).
8. **Contractions** as zh: I'm आइम, it's इट्स, I've आइव़, I'll आइल, don't डोन्ट, can't कैन्ट, that's द़ैट्स, there's द़ेर्ज़, what's वट्स, isn't ˈइज़न्ट.
9. **Numbers as words; abbreviations letter by letter**, each letter a separate word: A ए, B बी, C सी, D डी, E ई, F एफ़, G जी, H एच, I आइ, J जे, K के, L एल, M एम, N एन, O ओ, P पी, Q क्यू, R आर, S एस, T टी, U यू, V व़ी, W ˈडबल्यू, X एक्स, Y वाइ, Z ज़ी (TV टी व़ी, BTW बी टी ˈडबल्यू).
10. **Names** as the en-US voice says them (zh PRON-RULES D), which for Indian names may differ from the Hindi spelling: listen to the TTS once and transcribe what it says (Priya /ˈpriːjə/ → ˈप्रीया). The `pron` lesson tells learners that an American says their names this way.
11. **Codas in full**, voiced finals voiced: -s as स / ज़ / इज़ (cats कैट्स, dogs डॉग्ज़, buses ˈबसिज़), -ed as ट / ड / इड (watched वाच्ट, played प्लेड, wanted ˈवान्टिड). No inserted vowels: never इस्कूल.
12. **Unicode.** NFC only; nukta letters are base + U+093C (ज़ = U+091C U+093C). Never the precomposed U+0958–U+095F, never ZWJ / ZWNJ, never Devanagari digits. The `pronPattern` rejects all of these.

*Known collapses (one spelling for two sounds), and why they are acceptable.*
- **DRESS e / FACE eɪ → ए** (bed बेड, name नेम; *get* and *gate* both गेट). Hindi loan spelling does the same, Hindi ए is a long [eː] close to American FACE, and Indian English already keeps the two vowels apart; no ko-en or zh minimal pair contrasts them. The `pron` lesson notes: «bed का ए छोटा, name का ए लंबा — ऑडियो सुनें».
- **STRUT ʌ / schwa ə → अ**, and **NURSE ɜːr / lettER ər → अर**: the stress mark separates them (a stressed अ is ʌ / ɜː, an unstressed one is ə). Stranded *from* is the only weak/strong pair that merges.
- **Final ə / ɑː → ा**: in a word of 2+ syllables, a final ा after an unmarked syllable is a schwa (banana बˈनैना); a stressed final ɑː is rare (spa स्पा is one syllable).
- **KIT ɪ / final i → ि**, **FOOT ʊ / weak u → ु**: the same in zh's school-symbol practice for the weak forms.
- **Medial schwa in open syllables** (Canada ˈकैनडा, family ˈफ़ैमलि, holiday ˈहालडे): Hindi readers delete it by habit, giving *Can'da, fam'ly*. Accepted: English speakers reduce or drop these schwas too, and the audio carries the full form.
- **Checked:** all 26 targets of ko-en deck 18 and the 18 pron cards zh appended (rice / lice, right / light, fan / pan, coffee / copy, think / sink, three / tree, very / berry, vote / boat, walk / work, leave / live, bed / bet, card / car, cap / cab, mouth / mouse, wary / vest / west, know / low, bad, friends, asked, months) derive to **distinct** respellings within every pair (hand derivation by this profile).

**`pron` lesson additions** (prose, not in `pron`; they change no English string):
1. How to read the aid: «नुक़्ता वाला अक्षर = वह आवाज़ जो हिंदी में नहीं है», ˈ = ज़ोर, the American ा in *hot, job, stop*.
2. **व़ vs व** (very, vine, vest vs wine, west, work): teeth on lip and a buzz vs round lips; the mirror test from TalkDrill.
3. **थ़ / द़** (think, three, this, the): tongue between the teeth, air keeps flowing; not थ, द.
4. **फ़, ज़** (coffee, fan, zero, zoo, easy): not फ, ज.
5. **No vowel before s-clusters** (school, station, special, street): «स्कूल, इस्कूल नहीं».
6. **Stress and weak vowels:** *about, banana, photography, hotel*; one strong syllable per word.
7. **महाप्राण p, t, k** at the start of stressed syllables (pen, time, coffee): a light puff, like a soft फ, ठ, ख — said, not written.
8. Optional note: Indian English t / d (ट, ड) and long ए / ओ are understood everywhere; spend effort on items 2–6.

**Validator settings (profile.json):**
- `"nativeScript": "[\\u0900-\\u0963\\u0971-\\u097f]"` — Devanagari letters and signs, **excluding** the danda । (U+0964), double danda ॥ (U+0965) and Devanagari digits ०–९ (U+0966–096F). So "Hindi" means **at least one Devanagari letter or sign**; a `why` that is English plus a danda («Present Perfect + since।») **fails**, which is what we want. The class finds 0 characters in `packs/course-ko-en.js` and `packs/course-zh-en.js` (checked locally), so "English must not contain native script" is safe.
- **No `pronScript`.** The aid is in the native script, so the default check (`pron` must contain native script, PIPELINE §3) applies, as in ko-en.
- `"pronPattern"`:
  `^ˈ?[अ-ह][ँंअ-ह़ा-्]*(?:ˈ[अ-ह][ँंअ-ह़ा-्]*)*(?:(?: |। | / )ˈ?[अ-ह][ँंअ-ह़ा-्]*(?:ˈ[अ-ह][ँंअ-ह़ा-्]*)*)*$`
  (written in profile.json with `\\u` escapes; validate.js compiles it with flag `u`). In words: every word and every syllable after ˈ begins with a vowel or consonant letter (U+0905–0939, which includes ऑ); then only candrabindu, anusvara, letters, nukta, vowel signs and virama; words are joined by one space, `। ` or ` / `. It **rejects** Latin letters, IPA symbols other than ˈ, `?` `!` `,` `.`, digits of both scripts, double spaces, a word that starts with a sign, a dangling ˈ, the precomposed nukta letters U+0958–U+095F, ZWJ / ZWNJ and visarga. It does **not** require ˈ, because one-syllable rows (*Hi!* → हाइ) have none.
- **Homoglyph and keyboard traps:** writers on a Hindi phonetic keyboard may get precomposed ज़ / फ़ (U+095B / U+095E) or type an apostrophe for ˈ. Both fail the pattern; normalise with NFC and copy ˈ (U+02C8) from this file.
- No `labels.cueTest` is needed: `nativeScript` is a real script. In the `more/` shorthand an mc `q` or type `hint` with no Devanagari letter gets `labels.mcBlankCue` (« ख़ाली जगह में क्या आएगा?») or `typeHintCue` (« — इन शब्दों से») appended. That is right for a gap question and wrong for a translation question, so writers put the Hindi frame in themselves: `"मैं यहाँ पाँच साल से रह रहा हूँ" अंग्रेज़ी में?`, «सही वाक्य चुनें।».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote the respelling in prose and tables (`<b>व़ाइन</b>`).

**Worked examples.** "zh row" = the English string exists in `tools/content/zh/` with the IPA shown, and the hi `pron` is derived from it by the rules above; "new" = no zh row, written by the key. All hi rows pass `pronPattern` (checked locally on the strings as extracted from this file; §11).

| English | zh IPA (source) | hi `pron` | Rules / Hindi trap shown |
|---|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ (zh row) | इट्स कोल्ड टˈडे | 2 no ˈ on monosyllables; weak *to* inside *today* |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ (zh row) | द़ेर्ज़ अ कैˈफ़े निर हिर | द़ not द; ज़ not ज; ऐ for æ |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ (zh row) | कन यु क्लोज़ द़ डॉर | weak *can, you, the*; final ज़ voiced; no `?` |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ (zh row) | आइ हैव़ टू ˈब्रद़र्ज़ | व़ for v; plural ज़ |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ (zh row) | वि वाच्ट अ ˈमूव़ि | व (w) vs व़ (v) in one row; -ed = ट |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ (zh row) | आइ हैव़ अ डॉग। द़ डॉग इज़ सो क्यूट | ‖ → `। `; ऑ for ɔː |
| Where do you live? | /ˈwer də ju ˈlɪv/ (zh row) | वेर ड यु लिव़ | weak auxiliary *do* |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ (zh row) | नाइस ट मीट यु | weak *to*, *you* |
| Thank you. | /ˈθæŋk ju/ (zh row) | थ़ैंक यु | थ़ not थ; ं for ŋ before k |
| Hello. | /həˈloʊ/ (zh row) | हˈलो | ˈ; reduced first vowel |
| See you later. | /ˈsiː ju ˈleɪtər/ (zh row) | सी यु ˈलेटर | ए for FACE; lettER = र |
| Excuse me. | /ɪkˈskjuːz mi/ (zh row) | इक्ˈस्क्यूज़ मि | virama where ˈ splits a cluster; no इ before s |
| Have you eaten yet? | /həv ju ˈiːtn ˈjet/ (zh row) | हव़ यु ˈईटन येट | syllabic n → न |
| How long have you been here? | /ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/ (zh row) | हाउ लॉङ हव़ यु बिन हिर | ङ word-finally |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ (zh rows) | थ़िंक / सिंक | θ vs s |
| three / tree | /ˈθriː/ · /ˈtriː/ (zh rows) | थ़्री / ट्री | θ vs t, the Hindi merger |
| very / wary | /ˈveri/ · /ˈweri/ (zh rows) | ˈव़ेरि / ˈवेरि | the v / w dot |
| vest / west | /ˈvest/ · /ˈwest/ (zh rows) | व़ेस्ट / वेस्ट | v / w; virama in the final cluster |
| bad / bed | /ˈbæd/ · /ˈbed/ (zh rows) | बैड / बेड | ऐ vs ए |
| coffee / copy | /ˈkɔːfi/ · /ˈkɑːpi/ (zh rows) | ˈकॉफ़ि / ˈकापि | फ़ vs प; ऑ vs American ा |
| banana | /bəˈnænə/ (zh row) | बˈनैना | final schwa ा; stress on the middle |
| vine / wine | new | व़ाइन / वाइन | v / w |
| zoo / Jew | new | ज़ू / जू | z vs j |
| school | new (/ˈskuːl/) | स्कूल | no इ before the cluster |
| photography | new (/fəˈtɑːgrəfi/) | फ़ˈटाग्रफ़ि | stress on the second syllable, not PHO-to-gra-phy |
| My name is Priya. | new (/maɪ ˈneɪm ɪz ˈpriːjə/) | माइ नेम इज़ ˈप्रीया | localised name (§9) |
| I've lived here since 2015. | new (/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd fɪfˈtiːn/) | आइव़ लिव़्ड हिर सिन्स टू ˈथ़ाउज़न्ड फ़िफ़ˈटीन | the since trap (§4.2); ˌ dropped; number as words |
| Five hundred rupees. | new (/ˈfaɪv ˈhʌndrəd ruːˈpiːz/) | फ़ाइव़ ˈहन्ड्रड रूˈपीज़ | currency as a word (§9) |

- Rejected by `pronPattern` (checked): `/ˈjes/`, `इट्स?`, `yes`, `इट्स  कोल्ड` (two spaces), `कोल्ड ˈ`, `इट्स,कोल्ड`, `२०१०`, `्क`, and ज़ू written with precomposed U+095B.
- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, derive from that IPA instead.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "आर्ट[िी]कल|बहुवचन|गणनीय" }` (no `flags`: Devanagari has no case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **आर्टिकल**, **बहुवचन** or **गणनीय / अगणनीय**.
- **Why these strings:** Hindi does not inflect these nouns for case in a `why` sentence (आर्टिकल लगता है, बहुवचन होगा, अगणनीय है), so plain substrings work and no `\b` is needed (JavaScript's `\b` is ASCII-only and would not anchor Devanagari anyway). `गणनीय` also matches inside `अगणनीय`. `आर्ट[िी]कल` accepts the common misspelling आर्टीकल; writers still write आर्टिकल (§3). `बहुवचन` will not match `एकवचन`, which is right: «एकवचन» alone does not name the point.
- **What the validator counts** (validate.js `article-plural`, read locally): `order` — the `why` matches the keywords **and** `x` holds an article tile (`a`, `an`, `the`) or a singular / plural twin of a tile in `a` (*year / years*, *advice / advices*, *-es*, *-y / -ies*); `type` — the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin of a word in `a[0]`. Put the competitor tile in `x`.
- Text must be NFC (§2): a `why` typed with a precomposed nukta letter still matches these keywords (none of them has a nukta), but keep NFC everywhere.

**Sample `why` lines** (all tested locally with `new RegExp(keywords)` exactly as validate.js builds it; English bare, danda at the end):
- «प्रोफ़ेशन से पहले आर्टिकल a लगता है: a teacher।» → hit
- «two के बाद बहुवचन: brothers। हिंदी में "दो भाई" में शब्द नहीं बदलता, अंग्रेज़ी में -s लगेगा।» → hit
- «information अगणनीय है: न आर्टिकल, न -s।» → hit
- «दूसरी बार ज़िक्र हो तो आर्टिकल the।» → hit
- «these बहुवचन के लिए, this एक चीज़ के लिए।» → hit
- «गणनीय संज्ञा एकवचन में हो तो a चाहिए।» → hit
- «आर्टीकल the: बात उसी चीज़ की है जिसे दोनों जानते हैं।» → hit (misspelling accepted)
- «दस साल — बहुवचन years; और know स्टेटिव है, इसलिए -ing नहीं।» → hit
- «Simple Present में he के साथ -s लगता है।» → **no hit** (correct: not an article / plural point)
- «advice गिनी नहीं जाती, इसलिए advices ग़लत है।» → **no hit**: the point is countability, so the writer must say «अगणनीय».

**Writer rules (keep the count meaningful):**
- Write «बहुवचन» in full; never «बहु.», «प्लूरल» or «बहुत सारे» for the grammar point.
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs at least one Devanagari letter (§6).
- The multiple-choice UI term is «विकल्प» (§10); it contains no keyword, so there is no collision like ru's «множественный выбор».

**Justification:**
- **Articles:** Hindi has no articles; zero articles persist even in near-native Indian English (Sharma 2005a, via a summary); article omission and extraneous articles are both annotated ICE-India features (Demszky et al.); Khan 2021 lists both directions [research-backed, qualitative or via summary]. No Hindi error rate was found (§11).
- **Plurals and countability are a real Hindi problem**, unlike for ru: *two friend*, *one of my friend*, *peoples, childrens, datas* (Khan 2021), *all the musics* (Demszky et al.), *advices, equipments* (llexi). Many Hindi masculine nouns do not change after a number (दो दोस्त), so the plural half earns its place on evidence, not only on parity.
- **Parity cost is zero:** the shared `order` / `type` items were written to the Korean rule; only the Hindi `why` must name the keyword [practitioner opinion; consequence of PILOT-SPEC §1.6].
- **Why not a tense rule** (OTHERS.md proposed `article-tense`: articles plus continuous vs perfect with *since / for*)? It is not implemented in validate.js, would need a new rule kind and changes to English items in up to 39 sets (each a deviation), and a tense hinge inside `articles` or `countable` would be artificial. The since-continuous zone (§4.2) gets the `stative-since` lesson, four reweights and the secondary wording below; revisit with first-attempt logs.

**Secondary emphasis (not validated; do not add these to the regex):**
- An item that turns on duration names the tense and the cue: «"से" + समय की लंबाई = for: for two years। from नहीं।», «2015 से = since 2015 — Present Perfect, Present Continuous नहीं।»
- An item with a stative verb says so: «know स्थिति बताने वाली क्रिया है: I know, I'm knowing नहीं।»
- An item that turns on *do* names **सहायक क्रिया do**: «सवाल में सहायक क्रिया do चाहिए: Do you like tea?»
- An item with *he / she / it* for वह says «वह = he या she; चीज़ के लिए it।»
- An item on -s says «he / she / it वाला -s».

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md and ru.md):**
- **keep** = a fresh Hindi explanation from the Hindi point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Hindi explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the 39 shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged; nothing is replaced or dropped.

| lesson id | keep / reweight / add | note for Hindi speakers |
|---|---|---|
| pron | reweight | Teach the aid first (§6: नुक़्ता = a sound Hindi lacks, ˈ = ज़ोर, American ा in *hot*). Then the hi traps: व़ / व (very / wary, vest / west, vine / wine), थ़ / द़ (think, three, this — not थ, द), फ़ / ज़ (coffee, fan, zero, zoo), no इ before s-clusters (school), stress and weak vowels (about, banana, photography), महाप्राण p t k. **Shared checks and practice stay as they are** (rice / lice, fan / pan, think / sink, vote / boat, right / light, this banana, three trees, coffee / copy, bag / back, two boats). Their `why` lines say plainly when a pair is easy («र और ल हिंदी में भी अलग हैं — यह आसान है»), and spend the words on think, three, coffee (फ़ not फ) and vote (व़). *Considered, not proposed:* swapping the r / l checks for vine / wine and zoo / Jew would cost two `items` deviations; deck 18 and the body rows cover those pairs |
| be | reweight | Hindi always has है, so omission is rare. Spend the lesson on *be* + verb confusions from Hindi auxiliaries: `I am agree ✗ → I agree`, `I was worked hard ✗ → I worked hard` (Khan 2021), `She is knowing ✗` (preview of `continuous`). Short answers *Yes, I am* |
| it-there | reweight | «ठंड है», «देर हो गई» have no subject in Hindi → It's cold, It's late. «पास में एक कैफ़े है» → There's a cafe near here (`Near here is a cafe ✗`; ICE-India NON-INITIAL EXISTENTIAL `every year inflation is there`, Demszky et al.) |
| articles | reweight | No आर्टिकल in Hindi. a for jobs and "one of many" (I'm a teacher); एक ≈ a only sometimes, and *one* for *a* is a Hindi trap (`I have one question` only when the number matters); यह / वह ≠ always the. Both directions, as §4.1 |
| plurals | reweight | Core for Hindi: -s after a number even though Hindi «दो दोस्त» does not change (`two friend ✗`), *one of my friends*, irregular plurals (people, children — `peoples, childrens ✗`), this / these, possessive 's (प्रिया का फ़ोन → Priya's phone), -s / -es said as स / ज़ / इज़ |
| present | reweight | Word order: Hindi कर्ता-कर्म-क्रिया vs English subject-verb-object («मैं चाय पीता हूँ» → I drink tea). *don't* for negation (`I not like ✗`). Preview he / she / it वाला -s |
| questions | reweight | क्या-questions and intonation questions → Do you like tea?; question order after wh-words (`Where you are going? ✗ → Where are you going?`; Demszky et al.). Body: embedded questions keep statement order (`I don't know what are they doing ✗`); tags — *aren't you, don't you*, and «है ना? = isn't it? सिर्फ़ भारत में हर वाक्य के साथ चलता है» |
| third-s | reweight | Khan 2021's "most common error". Hindi agreement is on the auxiliary (करता है / करती है), so learners know agreement but drop the English -s: make it audible and spelled; *does / doesn't* |
| prep | reweight | Postposition calques: से = from / since / by / with, में = in / on (`in Netflix ✗ → on Netflix`), «शाम को» → in the evening (`at evening ✗`), «सोमवार को» → on Monday, «5 बजे» → at five. *married to*, *discuss* (no *about*) |
| countable | reweight | सलाह, काम, सामान, जानकारी are countable in Hindi usage (कई सलाहें, तीन काम): advice, work, equipment, information, luggage are uncountable (`many advices ✗`, `three works ✗`; llexi). *a piece of* |
| object-have | reweight | «मेरे पास कार है» → I have a car; *have* for owning is never -ing (`He is having a car ✗`; Demszky et al.). Objects are *it*, not *he / she* (वह covers all three) |
| can-like | reweight | «मुझे चाय पसंद है» (dative experiencer) → I like tea, subject first; *like* is not -ing for a general liking (`I am liking it ✗` in this sense). like + -ing |
| polite | reweight | Hindi politeness lives in आप and the verb form (दीजिए); English puts it in could / would: `Give me one coffee ✗ → Could I have a coffee?`. *Kindly* + order sounds stiff abroad; *please / could you* (preview of `indian-english`). *Please* is not a reply to *thank you* — *You're welcome* |
| continuous | reweight | Hindi रहा है overlaps English Present Continuous for actions now, but not for states: no -ing on know, want, understand, have (owning), need, believe (`I am understanding ✗`). Preview `stative-since` (§4.2) |
| past | reweight | था is not *was* in every past sentence: «मैंने काम किया था» → I worked (`I was worked ✗`); *did* + V1 in questions and negatives; -ed said ट / ड / इड |
| irregular-past | keep | Hindi-medium learners drill V1 / V2 / V3 tables; use that habit and spend the time on typed recall |
| the | reweight | Both directions: second mention and shared knowledge take *the* (Close the door), the unique *the* (the sun, the internet), and general uncountable or abstract nouns take none (`The life is hard ✗`, `a business experience ✗`) |
| adjectives | reweight | `more better ✗`, `the most cheapest ✗` (Khan 2021): Hindi «और अच्छा», «सबसे सस्ता» put the comparison word before the adjective; English uses -er / -est *or* more / most. से → than |
| going-to | keep | |
| tense | reweight | Recap table: Hindi करता है / कर रहा है / किया / किया है / करेगा and their English matches; mark the one false match: «से + रहा है» → Present Perfect (Continuous), not Present Continuous (§4.2). Time words do not choose the tense on their own |
| joining | reweight | «हालाँकि … लेकिन» → although *or* but, never both (`Although it was late, but I went ✗`); «कि» = *that* (He said that…), *because* not *because of* before a clause |
| numbers | reweight | lakh and crore: 1,00,000 = a hundred thousand; 10 lakh = a million; 1 crore = ten million (Indian grouping vs English 100,000). Dates DD/MM/YYYY vs US month/day; 12-hour time with a.m. / p.m. is shared. Prices in rupees («five hundred rupees», no ₹ or Rs. in English strings) |
| smalltalk | reweight | How are you? is a greeting. Opening questions common in India — salary, marriage, children, age, «खाना खाया?» — are personal abroad. *What's your name?* (not *good name*), *I'm from Jaipur* (not *I belong to Jaipur*). Deck localised (§9) |
| **indian-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | Hindi करेगा maps well onto *will*; keep ko's contrast with *going to* and the present continuous for plans |
| perfect | reweight | Key lesson. Hindi «किया है» looks like Present Perfect but is used with finished times too: `I have visited Bangalore yesterday ✗ → I visited…` (llexi). been to vs gone to («गया है» = has gone: he is not here) |
| modals | reweight | चाहिए = should / need / have to (`You should come` as an invitation is fine); «सकता है» = can / may / might; «नहीं चाहिए» = shouldn't, «ज़रूरत नहीं» = don't have to (not mustn't) |
| to-ing | reweight | Verb patterns from Hindi infinitives: `prevented me to enter ✗ → from entering` (llexi), `avoid to go ✗ → avoid going`, `I am looking forward to meet you ✗ → to meeting you` (common in Indian email) |
| articles-2 | reweight | Generic plurals and uncountables without *the* (Dogs are loyal; Cricket is popular — `The cricket ✗`); the unique *the* (the sun, the internet); country names (India, *the* US) |
| first-conditional | reweight | Hindi uses the future after अगर / जब («अगर बारिश होगी», «जब मैं पहुँचूँगा») → If it rains / When I arrive (`If it will rain ✗`) |
| relative | reweight | Hindi correlatives «जो आदमी कल आया था, वह मेरे चाचा हैं» give a doubled subject: `The man who came yesterday, he is my uncle ✗ → The man who came yesterday is my uncle` (ICE-India RESUMPTIVE SUBJECT PRONOUN, Demszky et al.); no repeated object (`the book which I read it ✗`) |
| phrasal | keep | |
| perfect-2 | reweight | for / since vs Hindi से (one word for both): «दो साल से» → for two years (`from two years ✗`, `since two years ✗`), «2015 से» → since 2015. Hands over to `stative-since` for states and *have been -ing* |
| **stative-since** | **add** (after `perfect-2`, B1) | See below |
| narrative | keep | |
| conditionals | reweight | Hindi «अगर मुझे पता होता तो…» covers both present and past unreal (If I knew / If I had known); teach the split by time |
| passive | reweight | Hindi «किया गया» passive is common in formal Hindi; Indian office English overuses it (`It is informed that…`, `Your request has been received and will be done`). Teach when English prefers the active; keep the shared items |
| reported | reweight | Hindi keeps the speaker's own words after कि: «उसने कहा कि मैं थका हूँ» means *he* is tired → He said (that) he was tired (`He said that I am tired ✗` — wrong person *and* tense). *told me*, not *told that* / *said me* |
| email | reweight | Indian office email habits that read oddly abroad: «Respected Sir», *Kindly do the needful*, *PFA* (please find attached), *revert*, *Thanks and regards* is fine. → Dear Mr. Sharma / Hi Rahul, *Could you please…*, *I've attached…*, *I'll get back to you*. First names are normal in US work email |
| idioms | reweight | Hindi idiom calques that do not exist in English (`eating my head ✗ → bugging me`, «नाक कटना» → lose face); note that *It's like that only* is Indian English |

**Totals:** 39 existing lessons (23 A1, 9 A2, 7 B1): **6 keep** (irregular-past, going-to, past-continuous, will, phrasal, narrative) and **33 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 24 and B1 to 8. Every verdict is [practitioner opinion] grounded in §4; Khan 2021 (qualitative), Demszky et al. (feature list), Sharma 2005 (via a summary) and Van Rooy 2014 (abstract) are the research behind them; none gives Hindi-specific frequencies.

**Additions:**
- **`indian-english`** — title «इंडियन इंग्लिश: भारत में ठीक, विदेश में अजीब», after `smalltalk` (end of A1), deck 21 «इंडियन इंग्लिश: भारत बनाम विदेश» (§9).
  - *Framing:* Indian English is a real variety; these forms are understood in India. The lesson shows what listeners abroad expect, without ✗ for group 1.
  - *Content:*
    1. **Fine in India, unusual abroad** (→ international form): prepone (→ move up), out of station (→ out of town), What is your good name? (→ What's your name?), cousin brother / sister (→ cousin), do the needful (→ please take care of it), revert (→ reply / get back to you), passed out (→ graduated), years back (→ years ago), native place (→ hometown), mention not (→ you're welcome), kindly + order (→ please / could you), take lunch (→ have lunch), shifting (→ moving), today itself / now only (→ today / right now).
    2. **Wrong in any variety** (✗ → ✓): Myself Rahul (→ I'm Rahul), discuss about (→ discuss), revert back / return back (→ get back / return), I have a doubt (= a question → I have a question), …, isn't it? after every sentence (→ aren't you / don't you), Do one thing (→ Here's an idea).
    3. **Hindi calques:** see a picture (→ see a movie), eat my head (→ bug me), I belong to Delhi (→ I'm from Delhi).
  - *Practice that meets §7* (sketch for the writer; every order and type `why` that hinges names आर्टिकल / बहुवचन / अगणनीय):
    - order `p:"क्या मैं एक सवाल पूछ सकता हूँ?"`, `a:["Can","I","ask","a","question"]`, `x:["doubt","the"]`, why «doubt का मतलब शक है; सवाल के लिए question, और एक सवाल — आर्टिकल a।»
    - order `p:"मैं इस हफ़्ते शहर से बाहर हूँ"`, `a:["I'm","out","of","town","this","week"]`, `x:["station","the"]`, why «out of station भारत में चलता है; बाहर out of town कहें — town से पहले आर्टिकल नहीं।»
    - order `p:"चलिए मीटिंग पहले कर लेते हैं"`, `a:["Let's","move","the","meeting","up"]`, `x:["prepone","a"]`, why «prepone विदेश में कम समझा जाता है: move up। कौन-सी मीटिंग, दोनों जानते हैं — आर्टिकल the।»
    - type `p:"मुझे कुछ सलाह चाहिए"`, `a:["I need some advice","I need advice"]`, `x:["advices"]`, why «advice अगणनीय है: advices नहीं होता।»
    - type `p:"कृपया मुझे रिपोर्ट भेज दीजिए"`, `a:["Please send me the report","Could you send me the report"]`, `x:["a"]`, why «कौन-सी रिपोर्ट, दोनों जानते हैं — आर्टिकल the। Kindly भी चलता है, पर please / could you ज़्यादा आम है।»
    - type `p:"आपका नाम क्या है?"`, `a:["What's your name","What is your name"]`, `x:["good"]`, why «"good name" आपका शुभ नाम से आया है; विदेश में बस What's your name?» (not a hit; fine, 2 of 4 type items are enough)
  - *Parity:* new lesson id (`extraLessons`) and a new deck (deck count deviation).
  - *Reason:* §4.11. Indian English lexis is the one zone where Hindi speakers' English is fluent *and* misunderstood abroad, and ko-en has no equivalent. It mirrors zh `chinglish`, id `indo-english`, ja `katakana-english`, es `false-friends` and ru's proposed `runglish`.
- **`stative-since`** — title «से = since? स्थिति वाली क्रियाएँ और "कब से"», blurb idea «"मैं 2015 से यहाँ रह रहा हूँ" = I've lived here since 2015 — I am living नहीं।», after `perfect-2` (B1), deck «अपना परिचय» (deck 2, the deck of `perfect-2`; no new deck).
  - *What `perfect-2` already teaches* (read in `tools/content/ko/more/b1.js`): *for* + period, *since* + starting point, *How long have you…?*, *just / already / yet*; Present Perfect Continuous appears only as an accepted variant (`I've been living here for three years`), never taught. *Recycled:* for / since, How long.
  - *New in this lesson:*
    1. **Stative verbs never take -ing**, even for "right now" or "for years": know, understand, believe, want, need, like, love, have (owning), belong, mean, seem, remember (`I am knowing her ✗`, `He is having a car ✗`, `I've been knowing her ✗` → I've known her).
    2. **से → since, for or from**: point in time → *since*; length of time → *for*; *from … to / until* only with an end point (`from two years ✗`, `since two years ✗`).
    3. **«से + रहा है» → Present Perfect Continuous** for actions (I've been waiting for an hour; It's been raining for two days) and **Present Perfect** for states (I've known him for ten years; She's been sick for two weeks).
    4. **कब से? → How long…?** (`Since when you are waiting? ✗ → How long have you been waiting?`).
    5. Body note: *have* = take part in, eat, or experience can take -ing (*having lunch, having a meeting*), which is why `He is having three meetings today` is fine.
  - *Practice that meets §7* (sketch: 4 order items, all hits; 4 type items, 2 hits; durations give natural plural twins):
    - mc: «सही वाक्य चुनें।» → `I've known him for years.` / `I'm knowing him for years.` / `I know him since years.` / `I've been knowing him for years.`; «"दो साल से" अंग्रेज़ी में?» → `for two years` / `from two years` / `since two years` / `before two years`.
    - order `p:"मैं उसे दस साल से जानता हूँ"`, `a:["I've","known","her","for","ten","years"]`, `x:["year","since"]`, why «दस साल — बहुवचन years; समय की लंबाई के साथ for, और know के साथ -ing नहीं।»
    - order `p:"हमारे पास 2020 से एक कार है"`, `a:["We've","had","a","car","since","2020"]`, `x:["the","for"]`, why «एक कार, पहली बार ज़िक्र — आर्टिकल a; शुरुआत का साल → since।»
    - order `p:"वे दो घंटे से इंतज़ार कर रहे हैं"`, `a:["They've","been","waiting","for","two","hours"]`, `x:["hour"]`, why «दो घंटे — बहुवचन hours; चलता हुआ काम + अवधि = have been + -ing।»
    - order `p:"मुझे एक सवाल पूछना है"`, `a:["I","have","a","question"]`, `x:["the","doubt"]`, why «एक सवाल — आर्टिकल a; यहाँ have का मतलब "है", इसलिए -ing नहीं।»
    - fill `q:"I've worked here __ ten years."`, `a:["for"]`, `o:["since","from","during"]`; `q:"She __ my friend since school."`, `a:["has been"]`, `o:["is","was","is being"]`; `q:"We've been __ for an hour."`, `a:["waiting"]`, `o:["wait","waited","waits"]`.
    - type `p:"मेरे पास यह फ़ोन तीन साल से है"`, `a:["I've had this phone for three years","I have had this phone for three years"]`, `x:["year"]`, why «तीन साल — बहुवचन years; मालिकाना have स्टेटिव है: I've had।»
    - type `p:"वह दो हफ़्ते से बीमार है"`, `a:["She's been sick for two weeks","She has been sick for two weeks","She's been ill for two weeks","She has been ill for two weeks"]`, `x:["week"]`, why «दो हफ़्ते — बहुवचन weeks; बीमार होना एक स्थिति है: has been।»
    - type `p:"मैं यहाँ 2015 से रह रहा हूँ"`, `a:["I've lived here since 2015","I have lived here since 2015","I've been living here since 2015","I have been living here since 2015"]`, `x:["am"]` (not a hit)
    - type `p:"आप कब से इंतज़ार कर रहे हैं?"`, `a:["How long have you been waiting"]`, `x:["since"]` (not a hit)
    - The prompt `वह दो हफ़्ते से बीमार है` needs a gender cue in the final text (वह = he / she): write «वह (लड़की) …» or use a name.
  - *Parity:* new lesson id only. The English side is new, so the writer must check every accepted list (PHASE2-BRIEF: prompts must lead to an accepted answer).
  - *Reason:* §4.2 is the most Hindi-specific grammar zone (Khan 2021; Demszky et al.; Van Rooy 2014; Schubert 2002), and it is a three-error package (-ing on a state, Present Continuous for Present Perfect, *from* for *for*) that `continuous` (one check, one mc on stative verbs) and `perfect-2` (for / since only) each touch from one side. Articles, the other big zone, already have three lessons to reweight.

**Considered, not added:**
- `articles-3` (B1 article review, English side copied from ja as zh and ru did). Articles are as persistent as the since-continuous error, but ko-en already has three article lessons and the standing rule re-tests articles in every set. If first-attempt logs show articles lagging, the lead can add it with ja's English side at no writing cost.
- A question-tag lesson: covered in `questions` (body) and `indian-english`.
- A separate pronunciation lesson (like vi's `final-sounds`): the `pron` reweight and deck 18 cover v / w, th, z, f and stress.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | hi-en |
|---|---|
| Minji (and other Korean names) | **Priya** (main), **Rahul**; alternates Neha, Amit, Maya, Rohan, Anita, Raj. English-speaking characters keep English names |
| Seoul | **Delhi** (New Delhi in addresses only) |
| Busan | **Mumbai**; alternates Jaipur, Bangalore (the en-US voice and most international listeners know this form; Bengaluru only in a note), Kolkata |
| Jeju / beach trips | **Goa**; hills: Shimla, Manali |
| Seoul National University | "a university in Delhi", generic; no real university name |
| kimchi, bibimbap | **chai, samosa, dal, biryani, paneer, dosa** (default vegetarian; no beef, no pork) |
| soju | non-alcoholic by default (chai, coffee, lassi, juice) |
| K-pop, K-drama | **Bollywood movies, cricket, web series**, genres not artists |
| Gangnam | downtown, the market, the mall |
| Chuseok, Korean holidays | **Diwali, Holi**, New Year, birthdays, weddings; Eid and Christmas where a scene needs another festival. No political or religious argument |
| 존댓말 / 반말 comparisons | आप / तुम comparisons (`polite` only) |
| won (₩) | **rupees**: write `500 rupees` in English strings; never `₹`, `Rs.` or `INR` in English (TTS). lakh / crore only in the `numbers` lesson |
| Korea / Korean (learner's own country and language: *I'm from Korea*, *Do you speak Korean?*) | **India / Hindi** |

**Name and TTS rules:**
- **Personal names: only names the en-US voice says close to the Hindi.** Priya, Rahul, Neha, Amit, Maya, Rohan, Anita and Raj have no aspirated, retroflex or nasal-vowel sounds the voice cannot make. Avoid Bhavna, Khushi, Shraddha, Dhruv, Jyoti, Aditya (stress shifts), Ganesh and anything with bh, dh, kh, gh, ṭ / ḍ contrasts or ñ [not tested on the engine, §11].
- **Surnames** only in `email` and work dialogues: Sharma, Gupta (Mr. Sharma, Ms. Gupta). Explain once that English uses *Mr. / Ms.* + surname or the first name, not *Sir / Madam* + first name (`Rahul Sir ✗`).
- **Places:** Delhi, Mumbai, Jaipur, Bangalore, Kolkata, Goa, Shimla in their English spellings. Listen to each once on the engine's voice.
- **Audience note:** learners live across India and abroad. Keep India-specific references to everyday life (food, festivals, cricket, trains, rupees), never to politics, caste, religion as belief, or regional rivalry. Scenes abroad (airport, hotel, office) use the US setting of the shared English strings.
- **Food and diet:** many learners are vegetarian. Default food items in hi-written strings are vegetarian; a non-vegetarian dish may appear in a restaurant menu scene, never beef or pork.

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and translate the Hindi side literally (सोल, बुसान, किमची, के-पॉप); it reads as a learner talking about Korea, which Hindi speakers know from K-drama fandom. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation" (same rule as zh.md, id.md, ru.md).

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Priya.*, *I live in Seoul.* → *I live in Delhi.*, *Korea* → *India*, *Korean* → *Hindi*) needs a `decks` entry in `deviations.json`: one entry per deck, naming the cards and the reason «localisation per profile hi.md §9». Appended hi-only cards go in the same entry. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely. **Reuse zh's positions:** zh localised the same card positions (Li Wei, Beijing, yuan), so its deviation entries show exactly which cards change; for those cards there is no zh IPA to derive from, so they are "new" rows under §6.

**Deck names (FINAL proposal).** Plain everyday Hindi with established English loans; «और» and commas as separators; parentheses for the travel deck; digits after a space («सबसे ज़रूरी 1»); no terminal punctuation; NFC (nukta as base + U+093C). Rows 1–20 replace the Korean course's 20 decks in the same order. Row 21 is the hi-only deck, appended last in decks.js.

| # | Hindi name | linked lesson or notes |
|---|---|---|
| 1 | **अभिवादन** | greetings; no lesson links in ko-en |
| 2 | **अपना परिचय** | articles, be, present, third-s, object-have, perfect-2; also `stative-since` |
| 3 | **सबसे ज़रूरी 1** | polite |
| 4 | **सबसे ज़रूरी 2** | questions |
| 5 | **रास्ता और यातायात** | the; auto, metro, train scenes |
| 6 | **रेस्टोरेंट में** | countable; vegetarian default |
| 7 | **कैफ़े और दुकान** | no lesson links |
| 8 | **ख़रीदारी और भुगतान** | plurals, adjectives, relative; prices in rupees for home scenes |
| 9 | **संख्या, समय और तारीख़** | prep, numbers; lakh / crore vs hundred thousand / million, DD/MM vs US dates |
| 10 | **हल्की-फुल्की बातचीत** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing |
| 11 | **भावनाएँ और प्रतिक्रियाएँ** | joining, past-continuous, conditionals |
| 12 | **तारीफ़ और पसंद** | no lesson links |
| 13 | **ऑफ़िस और ईमेल** | first-conditional, passive, email; interview and IT / BPO vocabulary (below) |
| 14 | **कॉल और चैट की शॉर्ट फ़ॉर्म** | reported |
| 15 | **यात्रा (एयरपोर्ट और होटल)** | perfect, articles-2 |
| 16 | **डॉक्टर और इमरजेंसी** | modals |
| 17 | **फ़्रेज़ल वर्ब** | phrasal |
| 18 | **उच्चारण के जाल** | pron; append hi pairs (below) |
| 19 | **अंग्रेज़ी मुहावरे** | idioms |
| 20 | **फ़िल्में, वेब सीरीज़ और स्लैंग** | narrative |
| 21 | **इंडियन इंग्लिश: भारत बनाम विदेश** | indian-english (hi-only, at least 20 cards; needs a `decks["count"]` deviation) |

- Longest names: deck 20 (30 code points) and deck 21 (31). The deck list wraps; check both in a real layout at 390px with the larger Devanagari line height (§10).

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 21 «इंडियन इंग्लिश: भारत बनाम विदेश»** (at least 20 cards, linked to `indian-english`). The target is the international form; each `note` names the Indian form and says «भारत में चलता है» or «हर जगह ग़लत»:
  - move the meeting up (prepone), out of town (out of station), What's your name? (good name), my cousin (cousin brother), I graduated in 2019 (passed out), I'll get back to you (revert), years ago (years back), my hometown (native place), You're welcome (mention not), Could you please… (kindly), Let me know (intimate me), We're moving (shifting), I'm from Jaipur (I belong to Jaipur);
  - I'm Rahul (Myself Rahul), I have a question (I have a doubt), discuss the plan (discuss about), Here's an idea (Do one thing), aren't you? (isn't it?), see a movie (see a picture), have lunch (take lunch).
- **«उच्चारण के जाल»:** keep the shared pairs; append hi pairs as new cards (not by changing shared targets): vine / wine, vest / west and very / wary (zh already has vest, west, wary — derive), zoo / Jew, zero, easy, fan / van, school, station, three / tree is already there, about, photography (stress), hotel (stress) is already there.
- **«ऑफ़िस और ईमेल»:** interview (Tell me about yourself, strengths), shift, client call, deadline, invoice, team lead, appraisal; general office English, no programming jargon. Note the Indian email forms (§8 `email`).
- **«यात्रा»:** departures from Delhi or Mumbai or a generic "airport"; visas as a neutral travel fact; tipping (customary in the US, optional in India).
- **«कॉल और चैट की शॉर्ट फ़ॉर्म»:** keep the English (LOL, BTW); explain with Hindi-chat equivalents where they exist (हाहा, वैसे); note that Indian chat *pls, k, gm* exist too.
- **Meanings:** `nativeScript` is Devanagari, so a meaning needs only one Devanagari letter. Still give real Hindi glosses, and a Devanagari loan only where it *is* the Hindi word («ईमेल», «मोबाइल», «ऑफ़िस»; but «बिल» for *check*, «पैसे वापस» for *refund*). The validator's "no duplicate meanings" check compares exact strings, so two cards glossed «ठीक है» need distinct meanings («ठीक है (सहमति)», «ठीक-ठाक»).

## 10. Interface wording notes

These rules are [curriculum convention / practitioner opinion]. The Microsoft Hindi style guide PDF could not be read (binary), so they rest on the Mozilla and Gengo Hindi guides (§2), local `Intl` checks (Node, ICU 78.3) and the engine CSS in `src/app.html` (read-only).

**Register:** आप with the polite imperative (§2). Impersonal statements for states and results; the polite imperative for instructions; warm, short praise.
- Toasts and empty states: «सेव हो गया», «आज का दोहराव पूरा!», «लगातार दिन: {1}। शाबाश!» (count wording below).
- Errors: plain and blame-free: «सिंक नहीं हो पाया। फिर से कोशिश करें।»

**Buttons, menu items, chips:** polite imperative or a short noun, no terminal punctuation, no «कृपया» on buttons: «शुरू करें», «जारी रखें», «जाँचें», «भेजें», «सेव करें», «रद्द करें», «वापस», «छोड़ें», «फिर से», «आगे», «बंद करें». Gengo prefers the loan verb in UI where it is the everyday word («फ़ॉलो करें» over «अनुगमन करें»); for *save* both «सेव करें» and «सहेजें» are in use — use **«सेव करें»** everywhere. Ongoing states: «सिंक हो रहा है…», «लोड हो रहा है…». CTAs ≤ 16 code points where possible.

**Practice instructions** (polite imperative, one verb per item type): «सही विकल्प चुनें», «वाक्य बनाएँ», «ख़ाली जगह भरें», «अंग्रेज़ी में लिखें».

**Hindi vs English words in the UI (Hinglish policy).** Use the plain Hindi word when it is everyday spoken Hindi (आज, पाठ, अभ्यास, प्रगति, सवाल, जवाब, सही, ग़लत, सुनें, बाकी); use the established English loan, in Devanagari with nukta and chandra, when the Hindi word would sound bookish or is not used on phones (कार्ड, डेक, लेवल, ऐप, सेटिंग्स, साइन इन, सिंक, ईमेल, सेशन, ड्रिल, स्ट्रीक). Never Latin letters for a Hindi word, never both forms of one concept in the app. «क्विज़» is avoided: the 3-question check is «मिनी-टेस्ट» (टेस्ट is the familiar school word).

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json uses **Read** where the brief says Drills ("Drills" is a separate label key). Both are given. Character counts are **code points**; Devanagari conjuncts make the visible width (grapheme clusters, counted with `Intl.Segmenter('hi')`) smaller.

| English | Hindi label | Code points | Graphemes |
|---|---|---|---|
| Today | आज | 2 | 2 |
| Practice | अभ्यास | 6 | 3 |
| Review | दोहराव | 6 | 4 |
| Lessons | पाठ | 3 | 2 |
| Read (nav) | पढ़ना | 5 | 3 |
| Drills (label) | ड्रिल | 5 | 2 |
| Progress | प्रगति | 6 | 3 |
| Feedback | राय | 3 | 2 |

- All labels are well under the cap; width is not the risk. **Height is:** the mobile nav draws labels at `.62rem` (`.57rem` in `nav.tight`) inside `nav a{overflow:hidden; white-space:nowrap}` (src/app.html lines 42, 320–322). Devanagari matras above (ि ी ॉ ै, reph र्) and below (ु ू ्र, nukta) need more vertical room than Latin at the same size; at 10 px they may be **clipped or illegible**. The lead should check «प्रगति» (conjunct + ि), «पढ़ना» (nukta) and «दोहराव» in the 390px harness; an engine fix would be `html[lang=hi] nav a{font-size:.72rem;line-height:1.5}`.
- «दोहराव» (tab, noun) and «दोहराएँ» (button) are the same concept; prose «दोहराना».
- «राय» (opinion) for Feedback; the page title is «राय भेजें». «फ़ीडबैक» (7 code points) is the fallback if «राय» reads as too vague in testing.

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section). Hindi CLDR plural rules: **`one` = 0 and 1**, `other` = everything else including 1.5 (`Intl.PluralRules('hi')` checked locally: 0 one, 1 one, 1.5 other, 2 other, 5 other, 21 other). What actually changes in Hindi is not the number word but:
- **the noun**, for feminine nouns and for masculine nouns in -आ (ग़लती → ग़लतियाँ, बात → बातें, हफ़्ता → हफ़्ते, घंटा → घंटे);
- **the verb and participle**, which agree in number and gender (1 कार्ड बचा है / 3 कार्ड बचे हैं; सीखा / सीखे / सीखी);
- **the oblique case** before a postposition (दिन में / दिनों में).

Two number-neutral devices only:
1. **An invariant masculine noun right after the number, with no verb or participle:** «{1} कार्ड», «{1} दिन», «{1} पाठ», «{1} मिनट», «{1} सेकंड», «{1} डेक», «{1} सवाल», «{1} अंक», «{1} सप्ताह», «{1} राउंड», «{1} बार» (feminine but invariant). These nouns have the same direct form in the singular and plural, so «1 कार्ड», «2 कार्ड», «21 कार्ड» and «0 कार्ड» are all correct.
2. **Label + colon + number** for everything else (a variable noun, or a state that would need a verb): «बाकी: {1}», «नए: {1}», «ग़लत: {1}», «सीखे गए: {1}», «दोहराने हैं: {1}». The label is a fixed heading, so «बाकी: 1» and «बाकी: 21» both read correctly. A noun after an invariant adjective is fine too: «{1} कार्ड बाकी» (no verb).
- **Never** a verb or participle that agrees with the count («{1} कार्ड बचे हैं», «{1} पाठ पूरे हुए»), a variable noun after the slot («{1} हफ़्ते», «{1} घंटे», «{1} ग़लतियाँ»), or an oblique plural after it («{1} दिनों में»).
- **"in N days":** «{1} दिन में» (direct form before में), which is what `Intl.RelativeTimeFormat('hi')` itself prints («3 दिन में», «1 दिन में», checked locally).
- Ordinal and "N of M" patterns: «कार्ड {1}/{2}», «{2} में से {1}», «राउंड {1}/{2}», «लेवल {1}», «पाठ {1}». Avoid Hindi ordinal words (पहला / पहली / पहले agree in gender and number).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`, `{n} card` / `{n} cards`, `… in {n} day.` / `… in {n} days.`). **Give both the identical neutral wording**, because the "singular" one also fires at 0 in Hindi CLDR terms and the "plural" one at 21.
- Writers must render each count string at **0, 1, 2 and 21** before submitting.

Counted nouns and their forms (use exactly):

| English in keys.json | Hindi form | Sample render |
|---|---|---|
| card(s) | {1} कार्ड | «21 कार्ड» |
| cards due / due | दोहराने हैं: {1} | «दोहराने हैं: 3» |
| deck(s) | {1} डेक | «4 डेक · 260 कार्ड» |
| day(s) / streak | {1} दिन / लगातार दिन: {1} | «लगातार दिन: 1» |
| week(s) | {1} सप्ताह | «प्लान तैयार: 6 सप्ताह।» (not हफ़्ते) |
| lesson(s) | {1} पाठ / पूरे पाठ: {1}/{2} | «पूरे पाठ: 5/41» |
| review(s) | दोहराव: {1} | «पिछले दोहराव: 50 · सही: 85%» |
| point(s) / pts | {1} अंक | «120 अंक» |
| XP | {1} XP | «120 XP», «आज का XP: 30» |
| round(s) | {1} राउंड / बाकी राउंड: {1} | «बाकी राउंड: 2» |
| row(s) | पंक्तियाँ: {1} | «पंक्तियाँ: 12 · नई: 3» |
| item(s) | {1} सवाल | «14 सवाल» |
| run(s) / tried | कोशिशें: {1} | «सबसे अच्छा पहला प्रयास 80% · कोशिशें: 3» |
| question(s) (`q`) | {1} सवाल | «85% · 12 सवाल» |
| quiz(zes) | मिनी-टेस्ट: {1} | «मिनी-टेस्ट: 1 · पिछला 80%» |
| answered | जवाब: {1} | «जवाब: 20 · सबसे लंबी सीरीज़ ×5» |
| ×missed | ग़लत: {1} | «ग़लत: 3» |
| seen ×N | {1} बार देखा | «4 बार देखा» (देखा refers to the card, not the count) |
| pattern(s) | {1} पैटर्न | «📚 ग्रामर इंडेक्स · 24 पैटर्न» |
| dialogue(s) | {1} संवाद | |
| badge(s) | {1} बैज | «2 साप्ताहिक बैज» |
| new / new cards/day | नए: {1} / रोज़ नए कार्ड: {1} | «रोज़ नए कार्ड: 10» |
| left | बाकी: {1} | «बाकी: 7 · 3 डेक में» |
| learned | सीखे गए: {1}/{2} | «सीखे गए: 40/260» |
| locked | बंद: {1} | «🔒 बंद: 5» |
| selected | चुने गए डेक: {1} | «चुने गए डेक: 2» |
| imported / added | इंपोर्ट किए गए कार्ड: {1} / जोड़ा गया, «मेरे वाक्य» में: {1} | |
| minutes / seconds / KB | {1} मिनट / {1} सेकंड / {1} KB | «5 मिनट», «फिर से भेजें ({1} सेकंड)» |
| "next due in N days" | अगले कार्ड {1} दिन में | «अभी कुछ दोहराना नहीं है। अगले कार्ड 3 दिन में।» |

**Language-name slots.** The engine fills `{x}` with the dictionary form from `Intl.DisplayNames('hi')` («अंग्रेज़ी», checked locally; decomposed nukta) and "capitalises" the first letter (`langName` in `src/app.html`), which is a no-op for Devanagari. Hindi language names (अंग्रेज़ी, कोरियाई, जापानी, स्पेनिश, फ़्रेंच, जर्मन, हिन्दी) do not change before a postposition, but verbs and adjectives would agree with them (feminine). Rules:
- Put the slot **at the start of the line** («अंग्रेज़ी: …») or **as the value after a colon** («कोर्स: अंग्रेज़ी»).
- A slot followed directly by a postposition is grammatical («{1} में लिखें») and allowed **only where no verb, adjective or participle agrees with the slot**; still prefer the colon form.
- Never an agreeing word next to the slot («{1} सीखी जा रही है», «आपकी {1} कैसी है?»).

| keys.json template | Hindi (renders as) |
|---|---|
| Change language · {x} | `भाषा बदलें · {1}` (→ भाषा बदलें · अंग्रेज़ी) |
| Now learning {x} · progress saved per course | `कोर्स: {1} · हर कोर्स की प्रगति अलग सेव होती है` |
| How much {x} do you know? | `{1}: आपका लेवल क्या है?` |
| What do you want {x} for? | `{1}: आप किसलिए सीखना चाहते हैं?` |
| type it in {x} | `जवाब की भाषा: {1}` |
| Type in {x}… | `जवाब की भाषा: {1}…` |
| Type the {x}, or tap Check again to give up. | `जवाब की भाषा: {1}। जवाब लिखें या हार मानने के लिए फिर से «जाँचें» दबाएँ।` |
| No {x} keyboard? Use tiles | `{1}: कीबोर्ड नहीं है? टाइल से चुनें` |
| Learning {x} 5 minutes a day with Lang App {x} | `{1} — रोज़ 5 मिनट, Lang App {2} के साथ` |
| Learn {x}, 5 minutes a day | `{1} — रोज़ 5 मिनट` |

- «आप किसलिए सीखना चाहते हैं?» uses चाहते (masculine plural, the polite आप form), which agrees with आप, not with the slot; that is the standard gender-neutral polite form.
- The interface writer may shorten these, but must keep the slot at the start or after a colon.

`profile.json` `name.hi` = **«अंग्रेज़ी»** (NFC): the course list shows `name[uiLang]` standalone as a row label. (The slot value comes from `Intl`, not from this field.)

**UI glossary (use exactly):**

| English UI term | Hindi |
|---|---|
| lesson / lessons tab | पाठ / tab «पाठ» |
| practice (set) | अभ्यास («पाठ का अभ्यास») |
| review (SRS) | दोहराव; button «दोहराएँ»; verb दोहराना |
| deck | डेक |
| card | कार्ड |
| streak | स्ट्रीक; in counts «लगातार दिन: {1}» |
| hint | संकेत |
| check (3-question lesson quiz) | मिनी-टेस्ट; button «जाँचें» |
| correct / incorrect (feedback) | «सही!» / «ग़लत» |
| answer / explanation (`why`) | जवाब / वजह («वजह:» label) |
| try again | फिर से |
| multiple choice | विकल्प («सही विकल्प चुनें») |
| word tiles (order) | वाक्य बनाएँ; tiles = टाइल |
| gap-fill | ख़ाली जगह भरें (label «ख़ाली जगह») |
| typed sentence | अंग्रेज़ी में लिखें (label «लिखें») |
| drills | ड्रिल |
| session | सेशन («सेशन शुरू करें») |
| level / XP | लेवल / XP |
| pronunciation toggle | «उच्चारण दिखाएँ» (replaces "romanization") |
| listen / play | «सुनें» |
| due today | आज दोहराने हैं |
| progress | प्रगति |
| feedback | राय; page «राय भेजें» |
| settings / sign in / sign out / sync | सेटिंग्स / साइन इन करें / साइन आउट करें / सिंक |

**Numbers, dates and time** (`Intl` with `hi-IN`, checked locally in Node, ICU 78.3; never hand-format):
- Numbers: **«12,34,567.5»** — Indian lakh / crore grouping, decimal point, international digits (`hi-IN` default numbering system is Latin; `numberingSystem:'deva'` would give «१,२३४» and must not be used, per Mozilla).
- Percent: «85%» (no space).
- Currency: «₹500.00» from `Intl` in UI; never in English course strings (§9).
- Dates: long «17 नवंबर 2026», medium «17 नव॰ 2026», short «17/11/26», full «मंगलवार, 17 नवंबर 2026»; day + month «17 नवंबर»; weekday «मंगल» / «मंगलवार». Mozilla's example «25 सितम्बर 2016» uses the same day-month-year order.
- Time: `Intl` short time gives the 12-hour «9:05 pm» (Latin am / pm, CLDR's choice); 12-hour time is normal in India. Use `Intl`; never hand-write «बजे» templates around a number.

**Fonts and line height (engine, not content):**
- The app's web fonts have **no Devanagari**: DM Sans supports Latin Extended only ([Fontsource](https://fontsource.org/fonts/dm-sans/about), the source ru.md used; not re-opened), DM Mono is the same family, and Noto Sans KR has no Devanagari [general knowledge, not checked]. Without a rule, browsers fall back per glyph to whatever Devanagari font the system has.
- Recommended rule, following the ja / zh precedent of keeping DM Sans first for Latin and listing native system faces after it (src/app.html lines 22, 27):
  `html[lang=hi]{--body:'DM Sans','Nirmala UI','Kohinoor Devanagari','Devanagari Sangam MN','Noto Sans Devanagari',system-ui,sans-serif;--display:var(--body);--mono:'Nirmala UI','Kohinoor Devanagari','Noto Sans Devanagari',ui-monospace,'SF Mono',Menlo,Consolas,monospace}`
  - Nirmala UI ships with Windows 8 and later; Kohinoor Devanagari and Devanagari Sangam MN with iOS and macOS; Noto Sans Devanagari with Android [general knowledge, not checked on devices].
  - `--mono` matters because the `pron` field renders in `.rom` (`font-family:var(--mono)`, line 92) and `.pron` (line 131). There is no monospace Devanagari system font, so the stack puts Devanagari faces first; ˈ (U+02C8) falls back to a Latin face.
  - Unlike Cyrillic (ru), Latin and Devanagari are different scripts, so DM Sans for English words and a Devanagari face for Hindi words in one line is acceptable; the baselines and x-heights differ slightly.
- **Line height:** body text is `line-height:1.45` and `p` 1.5 (lines 28, 39), notes `.note` 1.45, the hint overlay 1.4, `.dintro` 1.4. Devanagari with stacked conjuncts, reph and lower matras needs about **1.6–1.7**: `html[lang=hi] body{line-height:1.65} html[lang=hi] p{line-height:1.7}`.
- **Labels likely to be clipped** (check in the 390px harness): the bottom nav (above); `.dintro` and `.hintov` text at 1.4; the `.rom` / `.pron` respelling at .82–.95rem (nukta and lower matras, e.g. ˈट्वेन्टि, क्यूट); button labels with `overflow:hidden`. The big card face `.ko` (line-height 1.15) shows the **English** target in X-en courses, so it is not at risk.
- The i18n validator's 1.6× / 14-character warning counts code points, so Devanagari strings look longer than they render; check «उच्चारण दिखाएँ» (14 code points, a settings row) and «राय भेजें».

**Language name** in prose: «अंग्रेज़ी» / «अंग्रेज़ी भाषा», «हिंदी»; `Intl.DisplayNames('hi')` gives «अंग्रेज़ी», «हिन्दी».

**Feedback marks:** ✓ «सही!» / ✗ «ग़लत». Always pair a mark with text.

## 11. Gaps and unverified claims

- **No Hindi-L1 error frequencies.** No learner corpus with per-category error rates for Hindi speakers was found (Rozovskaya & Roth and Murakami & Alexopoulou, used by ru and zh, include no Hindi). The §4 ranking is inference from:
  - Khan 2021: 10 speakers, speaking tasks, qualitative rankings, no counts;
  - Demszky et al.: a feature inventory of educated Indian English (many L1s, not Hindi only), no frequencies in the part read;
  - Sharma 2005a/b: **read only through a later paper's introduction on the Benjamins page**; the Cambridge (SSLA) page redirected and could not be fetched, and the Scribd copy showed only an abstract without article findings;
  - Van Rooy 2014 and Schubert 2002: **abstracts only**; no Indian English figures were readable;
  - llexi, TalkDrill, SpeakShark, ashishb.net: practitioner pages without sources.
  A TOEFL11-based study (the corpus includes Hindi and Telugu L1 essays) would give real rates; none was opened.
- **Pronunciation evidence is not Hindi-L1 except Sirsa & Redford.** Wiltshire & Harnsberger 2006 sampled Gujarati and Tamil speakers (the Gujarati speakers also spoke Hindi); their 70% labiodental-glide figure and VOT values are used as Indian English evidence, not Hindi evidence. Sirsa & Redford 2013 (7 Hindi, 7 Telugu speakers) measured retroflexion, VOT, /s/ and rhythm, not /v w/ or /θ ð/. **No fetched source measures /θ ð/, z → j, f → ph or s-cluster epenthesis for Hindi speakers**; those rest on practitioner pages.
- **How sources were read:** every web figure was read through the fetch tool's summary, not the original PDF. Check key numbers (Wiltshire & Harnsberger 70% and VOTs; Sirsa & Redford %V; the EF skill scores; the NSO 18.2%; census figures via Wikipedia) before quoting them in app copy.
- **EF EPI:** two India sheets with different editions and different numbers (484 / rank 74 vs 479 / rank 69; speaking 500 vs 454); some state cells garbled (Uttar Pradesh "48"). Which edition each folder holds was not confirmed. Self-selected online test, many L1s; not a Hindi-speaker figure.
- **Pron aid — the whole §6 policy is an inference:**
  - That Hindi speakers read Devanagari respelling easily and do not read IPA rests on one 2016 article (CBSE has no phonetics) and one dictionary blurb (Oxford Mini English-Hindi). Hindi-medium state boards, NCERT English textbooks and the Oxford English-English-Hindi notation were **not checked**.
  - The **extended nukta** (व़ for /v/, थ़ द़ for /θ ð/, झ़ for /ʒ/) is this profile's convention, not an established standard; ashishb.net proposes nukta extensions in general, but not these letters. Learners may ignore the dot and read व़ as व; the `pron` lesson must teach it, and first-attempt logs on *very / wary*, *vest / west* should show whether it helps.
  - **Rendering is untested:** whether Nirmala UI, Kohinoor Devanagari and Noto Sans Devanagari place the nukta correctly under थ, द, व and झ (no precomposed forms exist), and how ˈ looks between aksharas and where it splits a conjunct (इक्ˈस्क्यूज़), were not checked on any device. A dotted circle (◌) would mean the font refused the combination; then the convention must change.
  - The derivation from zh IPA was checked by hand on 26 + 18 deck-18 targets and the worked examples, not by a script over all rows; the collapses listed in §6 are known, others may surface.
  - No study compares Devanagari respelling, IPA and no aid for Hindi learners. Test with the toggle-off rate.
- **Register:** आप is supported by two localisation guides (Mozilla, Gengo); Zulip prefers तुम. The in-app Hindi copy of Duolingo, Hello English or any other learning app could not be opened (store pages blocked or English-only), so "what learning apps do" is **not known**. The Microsoft Hindi style guide was binary and unread.
- **Danda vs full stop:** Mozilla asks for the danda, Gengo for a full stop; the danda choice (§2) is a decision.
- **School facts not verified from primary sources:** English as a subject from class 1 in all boards; English compulsory in class 10 / 12 board exams; the English section in SSC / bank exams (a PW page appeared in search results, not opened); Hindi school grammar terms (संज्ञा, वाच्य, अल्पप्राण / महाप्राण, दंत्य / मूर्धन्य) — general knowledge.
- **Indian English lexis:** *cousin brother* and *I have a doubt* (= question) appear on no page opened; *prepone* and *good name* come from one 2015 blog post (rashmee.com) and the Goethe-Institut feature; Tharoor's 2022 column did not include *prepone* or *good name*. The "fine in India vs wrong everywhere" split is this profile's judgement.
- **Hindi grammar claims** (से = since / for / from; रहा है with states; वह = he / she / it; correlative जो … वह; future after अगर; कि keeping the speaker's words) are standard descriptions of Hindi, **not taken from a fetched grammar**.
- **Interface:** tab labels are unmeasured at 390px; the nav font size (.62rem) is the risk, not the width. «दोहराव», «राय», «मिनी-टेस्ट», «स्ट्रीक» and «सेव करें» are proposals, not checked against major Hindi apps. The font stacks are general knowledge, not tested on Windows, Android or iOS. The line-height values (1.65 / 1.7) are a typographic rule of thumb.
- **TTS names and places** (Priya, Rahul, Neha, Amit, Delhi, Mumbai, Jaipur, Bangalore, Goa, Sharma, Gupta) were not tested on the engine's voice.
- **Not researched:** Urdu speakers (the same spoken language, Perso-Arabic script) who might take this course; speakers of Bhojpuri, Rajasthani, Haryanvi and other languages counted as Hindi in the census, whose transfer may differ; Hindi speakers in Nepal, Fiji, Mauritius and the Gulf; adult self-study app usage data in India.

## Sources

- [Khan 2021, Common errors of Hindi-speaking working professionals (Journal of English Language Teaching 63(3), ELTAI)](https://journals.eltai.in/index.php/jelt/article/download/JELT630302/493/491)
- [Demszky, Sharma, Clark, Prabhakaran & Eisenstein, Learning to Recognize Dialect Features (arXiv 2010.12707; ICE-India feature list)](https://arxiv.org/pdf/2010.12707.pdf)
- [Benjamins catalogue page, chapter on article use in Indian-diaspora English (introduction summarises Sharma 2005a and 2005b)](https://benjamins.com/catalog/veaw.g50.07hun)
- [Scribd, "Dialect Stabilization and Speaker Awareness in Non-Native Varieties of English" (abstract only; no article findings)](https://www.scribd.com/document/541464681/sharma2005)
- [Van Rooy 2014, Progressive aspect and stative verbs in Outer Circle varieties (World Englishes 33(2); abstract)](https://repository.nwu.ac.za/items/903a75a1-657a-4e85-94df-14cdd73bccfc/full)
- [Schubert 2002, "Are you wanting a cup of coffee?": overuse of the progressive aspect in Indian English (Konstanz; abstract)](https://kops.uni-konstanz.de/entities/publication/04b6bd76-5d17-4e6a-a0b9-1e1d98d19930/full)
- [Wiltshire & Harnsberger 2006, The influence of Gujarati and Tamil L1s on Indian English: a preliminary study (World Englishes)](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2006-Wiltshire-and-Harnsberger-WE.pdf)
- [Sirsa & Redford 2013, The effects of native language on Indian English sounds and timing patterns (J. Phonetics 41(6))](https://pmc.ncbi.nlm.nih.gov/articles/PMC4028080)
- [eWAVE, Indian English: indefinite for definite article (value C)](https://ewave-atlas.org/valuesets/52-61) — opened; not used beyond this note
- [llexi, Common English errors by Hindi speakers](https://llexi.com/l1-errors/common-english-errors-hindi-speakers.html)
- [TalkDrill, V vs W pronunciation: why Indians swap them](https://www.talkdrill.com/blog/pronunciation/sounds/v-vs-w-pronunciation/)
- [SpeakShark, Hard English words for Hindi speakers](https://speakshark.com/blog/hard-english-words-for-hindi-speakers)
- [Ashish Bhatia, Indian accent (Devanagari conventions for English sounds)](https://ashishb.net/linguistics/indian-accent/)
- [Shashi Tharoor (Khaleej Times, 2022), From co-brother to out of station: Indian English expressions](https://www.khaleejtimes.com/shashi-tharoors-world-of-words/from-co-brother-to-out-of-station-here-are-some-indian-english-expressions-you-must-know?amp=1)
- [Goethe-Institut (Faizal Khan, 2020), Indian English](https://www.goethe.de/prj/mis/en/mit/21902303.html)
- [Rashmee Roshan Lall (2015), The peculiar joys of Indian English: He's not on his seat, your good name?](https://www.rashmee.com/the-peculiar-joys-of-indian-english-hes-not-on-his-seat-your-good-name/)
- [The Week (2016), Phonetics training for school students (CBSE has no phonetics)](https://www.theweek.in/webworld/features/society/phonetics-training-for-school-students.html)
- [OUP India, Mini English-Hindi Dictionary (pronunciation in Devanagari)](https://india.oup.com/product/mini-eng-hindi-dictionary-9780199474301/)
- [OUP India, Oxford English-English-Hindi Dictionary (pronunciation "in both English and Hindi")](https://india.oup.com/product/english-english-hindi-dictionary-revised-edition_new-9780190135089/)
- [spokenenglish.guru, Tense in English grammar in Hindi (Present Indefinite, Helping verb, V1/V2/V3)](https://spokenenglish.guru/?p=1907)
- [grammarpustak, Articles a, an, the in Hindi (आर्टिकल, निश्चित / अनिश्चित आर्टिकल)](https://grammarpustak.blogspot.com/2020/10/articles-a-an-the-in-hindi.html)
- [LanGeek, गणनीय और अगणनीय संज्ञाएँ (Hindi-interface grammar course)](https://langeek.co/en-HI/grammar/course/44/countable-uncountable-nouns/beginner)
- [Mozilla l10n, Hindi (hi-IN) style guide](https://www.github.com/mozilla-l10n/styleguides/blob/main/docs/hi-IN/README.md)
- [Gengo, Hindi style guide](https://gengo.com/hi/translators/resources/style-guide/)
- [Zulip, Hindi translation guide (informal तुम)](https://github.com/zulip/zulip/blob/5.0/docs/translating/hindi.md)
- [EF EPI fact sheet, India (2025 folder)](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-india-english.pdf)
- [EF EPI fact sheet, India (2026 folder)](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-india-english.pdf)
- [Wikipedia, Multilingualism in India (Census 2011 language figures)](https://en.wikipedia.org/wiki/Multilingualism_in_India)
- [The Quint (2020), Percentage of English-medium students rises between KG and class 10 (NSO 2017–18)](https://www.thequint.com/news/education/percentage-of-english-medium-students-rises-between-kg-to-class-10)
- [ThePrint / PTI (2022), Up to 15% rise in Indian candidates taking IELTS](https://theprint.in/india/up-to-15-pc-rise-in-number-of-indian-candidates-taking-ielts-exam-since-pre-covid-years/802424)
- [Hello English, App Store listing (15 million learners; teaches through Hindi)](https://apps.apple.com/ca/app/hello-english/id1148009516)
- [FluentU, Hello English review](https://www.fluentu.com/blog/english/hello-english-app-review/) — opened; says nothing about the Hindi course
- Opened but empty for this purpose: [eWAVE Indian English language page](https://ewave-atlas.org/languages/52) (no feature table in the fetch), [Zulip Hindi guide on readthedocs](https://zulip.readthedocs.io/en/9.2/translating/hindi.html) (navigation only), [educationforallinindia FAQ on mediums of instruction](https://educationforallinindia.com/faq/what-are-the-mediums-of-instruction-in-indian-schools/) (no figures).
- Could not be opened: Microsoft Hindi style guide PDF (binary); Cambridge SSLA page for Sharma 2005b (redirect not on the allowlist); Duolingo store pages in Hindi; Semantic Scholar API.
- Local: `/home/claude/docs/briefs/hi-profile.md`; `/home/claude/docs/profiles/ru.md` (read in full; the model for structure and depth); `id.md` (§6 in full, §7, §10, headings); `zh.md` and `vi.md` (headings; vi §8 additions); `OTHERS.md` (Hindi section); `/home/claude/reports/Grammar learning order research.md` (headings and article / plural findings); `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`; `/home/claude/tools/content/lib.js` (ORDER, `orderFor`, `nativeTester`), `validate.js` (`article-plural`, `plPair`, pron checks, lesson-id format), `mk_briefs_ko.py` (deck-table regex); `ko/` (decks, lesson → deck map, `pron` practice, `continuous`, `perfect-2`), `zh/profile.json`, `zh/PRON-RULES.md`, `zh/decks.js`, `zh/lessons.js`, `zh/more/` (IPA for the worked examples; 356 of 366 ko card targets present, 325 `{{ex}}` rows), `id/profile.json`, `id/more/a2.js` (`time-markers`), `ru.profile.json`; `/home/claude/tools/i18n/keys.json` (count and language-name patterns, nav keys); `/home/claude/src/app.html` (fonts, `.rom` / `.pron`, nav CSS, `langName`, `LANGS`; read-only); `/home/claude/packs/course-ko-en.js` and `course-zh-en.js` (0 Devanagari characters, 0 ˈ in ko). Local Node checks (ICU 78.3): `Intl.PluralRules('hi')` cardinal and ordinal, `hi-IN` number / date / time / percent / currency / unit formats, `Intl.RelativeTimeFormat('hi')`, `Intl.DisplayNames('hi')` (and code points of «अंग्रेज़ी»), `Intl.Segmenter('hi')` grapheme counts, the standing-rule regex on the sample lines, `pronPattern` on the worked examples, `orderFor` with this profile.

> Lead's ruling (2026-11-17): where §6 contradicts itself on the virama before ˈ, rule 4 wins everywhere (फ़िफ़्ˈटीन, थ़र्ˈटीन). The shared converter `tools/content/hi/pron_hi.js` and `pron_lookup.json` implement this; the two «fifteen» rows printed in §6 without the virama are superseded.
