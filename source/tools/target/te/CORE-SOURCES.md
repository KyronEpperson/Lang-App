# Core words, Flirting and Compliments for en-te: sources, slots and skips

Writer EN-TE-CORE, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine core decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments), plus this file and `POS-COVERAGE.md`. Eleven deck entries were appended to `profile.json`.

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 94 | 0 | 0 |
| Top verbs | 71 | 40 | 0 |
| Top adjectives | 41 | 25 | 0 |
| Top adverbs | 45 | 29 | 0 |
| Top pronouns | 60 | 60 | 0 |
| Top case endings and postpositions | 30 | 18 | 0 |
| Top conjunctions | 18 | 11 | 0 |
| Top interjections | 23 | 0 | 23 |
| Top words | 57 | 0 | 0 |
| Flirting | 64 | 2 | 19 |
| Compliments | 27 | 3 | 10 |

Patterns: 2 rows each in `extra-t.js`, `extra-f.js` and `extra-c.js`.

## 1. Frequency source actually opened

**Read this first: only the head of each deck is in source order, and the source is weak.** Each core deck starts with the cards that have a rank below, in rank order. Every card after them is placed by the writer's judgement. **Top verbs is entirely judgement.** Flirting and Compliments follow the brief's layers, not frequency.

| Source | What it is | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, `content/2018/te/te_full.txt`, commit `525f9b5` (7 Feb 2022). Fetched with `git clone --depth 1 --filter=blob:none --sparse https://github.com/hermitdave/FrequencyWords` into a new folder in the writer's scratch space. Only `content/2018/te/`, `LICENSE` and `README.md` were checked out, and only the text lists were read. | Word forms, not lemmas, counted from the Telugu subtitles in OpenSubtitles 2018 (README: "The data used to generate 2018 lists can be found at http://opus.nlpl.eu/OpenSubtitles2018.php"). The list has 12,857 forms and about 118,000 tokens in all; the top form (మీరు) has a count of 5,682. | README: "MIT License for code. CC-by-sa-4.0 for content." Only ranks were used. | **Rank for the head of each deck.** A card has a rank only when its exact target is a form in the list with a count of 5 or more (rank 2,801 or better). Lower counts were treated as noise. |

**What the writer saw in the list, and why the ranks are weak.** The corpus is small, and much of it reads as machine-translated or carelessly translated English. Examples from the top 100: సంఖ్య ("number") at rank 33 and నం at 118 (both "No." mistranslated), కుడి ("right", the direction) at 34, కలిగి ("having") at 35, డౌన్ and అప్ (English "down", "up") at 70 and 72, యొక్క ("of", a written-only word) at 16, plus untranslated English (am, man, well, no) and profanity. Because of this:
- **యొక్క** (rank 16) was moved out of the head of Top case endings and postpositions to the very end of the deck. Its rank comes from word-for-word translation of English "of"; spoken Telugu just uses the oblique form. This is the one deliberate break from source order.
- **కేవలం** (rank 47, "just") and **దూరంగా** (rank 201, "away") keep their ranks, but both are probably inflated the same way.
- **Verb bases** (తిను, చేయు, వెళ్ళు …) are forms the list hardly counts; where they appear, it is as familiar commands (చూడు, చెప్పు). Since the list is not lemmatised, verb ranks would mislead, so Top verbs was ordered entirely by judgement.

**Cards with a source rank** (all the others are ordered by judgement):
- **Top nouns:** అవసరం 59, మనిషి 77, పని 82, సమయం 84, డబ్బు 92, రోజు 95, పేరు 104, విషయం 113, ఇష్టం 123, తప్పు 152, జీవితం 166, కారు 189, సమస్య 193, ఫోన్ 199, స్నేహితుడు 210, ఆలోచన 215, అమ్మాయి 221, భార్య 268, కుటుంబం 381, అబ్బాయి 2645. Judgement from స్నేహితురాలు on: people first, then places, food, the body, everyday things, abstract nouns, weather and animals.
- **Top verbs:** none. All judgement: the irregular everyday verbs and the నాకు-verbs first, then daily actions, then the rest.
- **Top adjectives:** పెద్ద 147, చిన్న 160, గొప్ప 187, నిజమైన 212, అందమైన 216, చెడ్డ 1536. Judgement from పొడుగు on: size, colors, temperature and taste, then the rest.
- **Top adverbs:** ఇక్కడ 17, చాలా 25, ఇప్పుడు 29, కేవలం 47, అక్కడ 52, బాగా 55, నిజంగా 86, ఎప్పుడూ 87, ఖచ్చితంగా 93, కూడా 99, మాత్రమే 127, మళ్ళీ 140, ఎక్కువ 146, బహుశా 176, దూరంగా 201, ఇంకా 238, అలా 257, ఇప్పటికే 285, ఇలా 315. Judgement from తక్కువ on.
- **Top pronouns:** మీరు 1, నేను 2, మేము 6, నా 9, మీ 10, నాకు 11, ఇది 13, అతను 14, అది 20, ఆమె 23, వారు 27, ఏమిటి 41, మా 58, ఏదో 71, మీకు 75, మాకు 79, నన్ను 81, అతనికి 90, ఏం 98, ఏదైనా 124, ఎవరైనా 132, అతని 151, ఏమీ 164, ఎవరూ 243, నువ్వు 292, మనం 362, మిమ్మల్ని 707, నీకు 848, ఆయన 1019, మమ్మల్ని 1935. Judgement from మనకి on.
- **Top case endings and postpositions:** కోసం 24, గురించి 31, ద్వారా 96, కంటే 155, వరకు 168, మీద 218, నుంచి 709, గదిలో 1835. Judgement from బడికి on (with యొక్క last, as above).
- **Top conjunctions:** అని 53, కాబట్టి 116, అంటే 139, అయితే 194, కనుక 378. Judgement from మరి on.
- **Top interjections:** హలో 226, అబ్బా 2553, అమ్మో 2783. Judgement from ఓహో on. (The list's interjections are mostly English: హే, ఓహ్, ఓకే, హుహ్.)
- **Top words:** ఒక 3, లేదు 8, అన్ని 18, కాదు 19, సరే 48, కొన్ని 54, ప్రతి 89, రాత్రి 109, మొదటి 165, అదే 200, ఎంత 228, ఉదయం 302, వద్దు 395, చివరి 396. Judgement from గారు on. The numbers, the human counting forms and the days run in counting and calendar order.

**Tried and not opened** (all on 2026-11-23):
- WebSearch "Telugu word frequency list most common words corpus" returned Wiktionary's frequency-list index, Sketch Engine pages (teTenTen, TeluguWaC, Telugu Trends) and a Scribd "1000 Most Common Telugu Words". None of the Sketch Engine or Scribd pages was fetched. The Sketch Engine lists sit behind its own service and licence, and the Scribd file has no stated source.
- `en.wiktionary.org/wiki/Wiktionary:Frequency_lists`: the fetch tool reported "url_not_found".
- `en.wiktionary.com/wiki/Wiktionary:Frequency_lists`: opened. It lists "Telugu" under its frequency lists, but the fetched text carries no link target and no ranks.
- `en.wiktionary.com/wiki/Wiktionary:Frequency_lists/Telugu`: refused (not on the session's fetch allowlist).

**Suggestion for the lead:** re-rank the judgement tails against a lemmatised Telugu list (for example a teTenTen lemma list from Sketch Engine, or a hand-checked lemma list built from a news corpus) on a machine that can get one. Only the order inside each deck should move.

Every meaning, note, example and dialogue was written by the writer; nothing was copied from a source.

## 2. Class slots fitted to Telugu (brief rule 2)

- **`Top prepositions` is renamed `Top case endings and postpositions`.** Telugu has no prepositions. Relations are shown by case endings attached to the noun's oblique form (-లో, -కి / -కు, -తో, -ని, -లోకి) and by postpositions written as separate words after it (నుంచి, దగ్గర, మీద, కోసం …), which is how the course spells them (profile §2.8). An attached ending cannot be a card on its own: the pron pattern rejects a hyphen-led pron (`-lō`), and the bare forms కి and కు are already cards in Vowel signs. So each ending is taught **on a carrier noun**, the way the existing decks do it (ఇంట్లో, బస్సులో): గదిలో, బడికి, అమ్మతో, రవిని, గదిలోకి. The meaning names the ending ("in the room (-లో: in, inside)"). Every separately written postposition is a bare card.
- **`Top conjunctions` keeps its name, but "if", "when" and "although" are not in it, because Telugu says them with verb endings** (వస్తే "if he comes", వచ్చినప్పుడు "when he came", వచ్చినా "even if he comes"). The deck holds only real connecting words (అని, కాబట్టి, అయితే, అంటే, ఒకవేళ …). ఒకవేళ and అయినా carry a note pointing to the ending they go with. A lesson for the endings is proposed in `POS-COVERAGE.md`. Nothing was invented to pad the deck: 18 honest connectors, above the 12-card minimum.
- **No `Top measure words` deck.** Telugu has no measure-word class. What it has is human counting forms (ఇద్దరు, ముగ్గురు, నలుగురు, ఐదుగురు, and మంది after a number), which are numerals and so go in Top words.
- **Adjectives** are given in the attributive form, which never changes (పెద్ద, చిన్న). The note gives the form a learner needs to say "is …": the -ది / -వాడు noun (పెద్దది) or the -గా ఉంది form (వేడిగా ఉంది). Several Telugu "adjectives" are nouns used as predicates (సులభం, కష్టం, నీలం); the note says so.
- **Verbs** are given as the base the lessons use (తిను, రా, ఇవ్వు, చెప్పు): the -u form, and -కొను for the self-benefactive verbs (తీసుకొను, నేర్చుకొను, కూర్చొను). Where a dictionary cites only a literary form, the spoken base is used (మర్చిపో, చనిపో, అలసిపో). The note gives the I-form of the habitual-future (the course's "shortcut" form), the past, and "Irregular" where the stem changes (రా → వస్తాను, తిను → తింటాను, ఇవ్వు → ఇస్తాను, కొను, విను, అను, తెచ్చు, అవు). తెలుసు, కావాలి, నచ్చు and దొరుకు are marked as నాకు-construction verbs.
- **Pronouns:** the Telugu set is bigger than the English one because the case forms are separate words: subject, oblique / possessive (నా), object (నన్ను), dative (నాకు, the నాకు-construction), and the independent possessive (నాది), across నేను, నువ్వు, మీరు, అతను, ఆమె, మేము, మనం and the rest. Inclusive మనం and exclusive మేము are both in, as are the respect forms ఆయన, ఆవిడ, వారు and the familiar వాడు.
- **Determiners** go in Top words (ఒక, ప్రతి, అన్ని, కొన్ని, ఇంకో, వేరే, అదే, ఒక్క). Telugu has no articles; ఒక is the nearest thing to "a". The demonstratives ఈ ("this"), ఆ ("that") and ఏ ("which") could not be cards (see §3).
- **Particles that fit no class** go in Top words: గారు (respect after a name) and అండి (the polite softener).

## 3. Words skipped because the course already teaches them

Checked against every card target in `decks-a.js` and `decks-b.js`, ignoring punctuation and spaces (so ఈరోజు counts as ఈ రోజు). A word with two homes went in the deck of its most frequent use, and the build script refused any repeat across the new decks.

| Deck | Skipped | Already a card in |
|---|---|---|
| Top nouns | ప్రేమ | Conjuncts and sunna |
| Top nouns | ఇల్లు, గది, తలుపు, కిటికీ, మంచం, కుర్చీ, వంటగది | Home and daily things |
| Top nouns | అన్నం | Food and drink |
| Top nouns | అన్న, తమ్ముడు, అక్క, చెల్లెలు, అమ్మమ్మ, నాన్నమ్మ, తాతయ్య, మామయ్య | Family and people |
| Top nouns | అమ్మ, పిల్లలు, పుస్తకం, డాక్టర్, సంవత్సరం, బస్, పరీక్ష, చెట్టు, పెళ్ళి, పండు | Conjuncts and sunna |
| Top nouns | పాట | Consonants 2 |
| Top adjectives | మంచి, కొత్త | Conjuncts and sunna |
| Top adjectives | పాత | Consonants 2 |
| Top adverbs | నిన్న, రేపు, ఈ రోజు (and ఈరోజు), పొద్దున, సాయంత్రం | Time, days and routine |
| Top adverbs | అంత | Conjuncts and sunna |
| Top adverbs | తర్వాత | Questions and connectors |
| Top pronouns | ఎవరు, ఏది | Questions and connectors |
| Top case endings and postpositions | ఇంట్లో (the obvious carrier for -లో) | Conjuncts and sunna |
| Top case endings and postpositions | కి, కు (bare dative endings) | Vowel signs |
| Top case endings and postpositions | తర్వాత ("after"; counted once, under Top adverbs) | Questions and connectors |
| Top conjunctions | మరియు, కానీ, లేదా, ఎందుకంటే, అందుకే | Questions and connectors |
| Top interjections | అయ్యో | Traps for English speakers |
| Top interjections | ఓ ("oh!") | Vowels (the vowel-letter card) |
| Top words | ఈ, ఆ, ఏ (this, that, which) | Vowels (they are the vowel-letter cards) |
| Top words | ఒకటి, రెండు, మూడు, ఐదు, పది, ఇరవై, వంద, వెయ్యి, యాభై | Numbers and money |
| Top words | ఎక్కడ, ఎప్పుడు, ఎలా, ఎందుకు, ఎన్ని | Questions and connectors |
| Top words | అవును | Greetings and courtesy |
| Top words | సోమవారం, ఆదివారం | Time, days and routine |
| Compliments | శభాష్! (plan Deck 1, #5) | Top interjections (this job), to keep one card per word |
| Flirting | the phrase మీరు చాలా తెలివైనవారు. | Kept in Compliments (plan Deck 1, #11); Flirting has the single word తెలివైన instead |

**Total skipped as already taught: 70** (Top nouns 28, Top adjectives 3, Top adverbs 7, Top pronouns 2, postpositions 3, conjunctions 5, interjections 2, Top words 20; ఈరోజు is counted with ఈ రోజు, తర్వాత once). The two Compliments / Flirting rows above are moves between the new decks, not in this count. Five of them (ప్రేమ, మంచి, పాత, కొత్త, అయ్యో) were in the writer's first draft and were dropped by the build script's duplicate check; the rest were never added.

**Bare words kept although a phrase card already contains them** (the targets differ, so the release check passes): దగ్గర (మెట్రో స్టేషన్ దగ్గర), మీద (బల్ల మీద), పక్కన (బ్యాంకు పక్కన), ఎదురుగా (గుడి ఎదురుగా), వైపు (కుడి వైపు), నుంచి (నేను ఇంటి నుంచి వస్తున్నాను.), లేకుండా (చక్కెర లేకుండా.), చాలు (నాకు చాలు.), సరే (సరే, తీసుకుంటాను.), కాదు, లేదు, వద్దు (in Traps), మీది (మీది ఏ ఊరు?), మాది (మాది విజయవాడ.), నువ్వు, మీరు, నేను, కాఫీ, టీ, నీళ్ళు, పాలు, భోజనం. They are the core words of those phrases, and the phrase cards do not teach them as words. The lead may drop any of them.

**Near-duplicates inside the new decks, kept on purpose:** నవ్వు (Flirting: "smile; laugh", also the verb "laugh", which is therefore not in Top verbs) and చిరునవ్వు (Flirting: "gentle smile"); అందమైన (Top adjectives) and అందంగా / అందం (Flirting); తెలివైన (Flirting) and మీరు చాలా తెలివైనవారు. (Compliments); దాకా and వరకు (both "until": the spoken and the neutral form).

## 4. Pron tool

Every pron was produced by `respell.js` through the build script, never typed. `repron.js te` was run twice, and both runs reported `1068 prons read, 0 rewritten`. No word was left out for a pron problem; the tool threw on nothing.

One warning, checked and kept: **ఫలించింది** (in the Compliments card మీ కష్టం ఫలించింది. and its example). The tool reads ఫ as ph and warns in case the word is an English loan. Here ph is right: ఫలించు comes from Sanskrit phala, "fruit". Adding it to `VER` would remove the warning, but the brief does not allow this writer to edit the tool.

Known reading issues, as the profile describes them (not errors): English loans with ్యా show yā (బ్యాగు `byāgu`, హ్యాండ్సమ్ `hyāṇḍsam`), which the key explains as the a of "bag"; ఛీ shows `chhī` from its spelling, though most speakers say a plain ch (it is also written చీ); మధ్యాహ్నం keeps the written `madhyāhnam`, and its note says it is often said madhyānnam.

## 5. Flirting and Compliments: what came from the plan

- **Flirting** starts from Deck 2 of `docs/plans/compliments-te.md` (20 of its 23 phrases are in, with the course's spelling: ఈ రోజు as two words, ళ్ళ; left out: #4 మీరు ఏది వేసుకున్నా బాగుంటారు. and #11 మీరు వస్తారని అనుకున్నాను., both on the plan's own native-check list and the second unclear as flirting, and #15 నువ్వు నా టైప్., city slang) and extends it: a 21-card word layer, phrases grouped by the word they come from, and moves and replies with **five kind, clear ways to say no** (థాంక్స్, కానీ నాకు ఇంట్రెస్ట్ లేదు. · మనం స్నేహితులుగానే ఉందాం. · సారీ, నాకు పెళ్ళైపోయింది. · సారీ, నాకు ఆల్రెడీ ఒకరు ఉన్నారు. · మీరు మంచివారే, కానీ నాకు ఆ ఉద్దేశం లేదు.). It has 19 dialogues, including one that ends in a gracious no and one that ends in a yes. **Cultural note:** open flirting with a stranger is unusual in Telugu-speaking places and can offend, especially outside the big cities. The deck stays on the polite మీరు, except three cards marked as for someone close (నువ్వు …, నువ్వు నా బంగారం.), and most of it suits people who already know each other or are on a date. The plan's two open questions are still open: whether to keep the నువ్వు cards, and whether to keep English loans (స్మార్ట్, క్యూట్, స్వీట్, హ్యాండ్సమ్, ఇంట్రెస్ట్, ఆల్రెడీ, టైం), which are how people actually talk.
- **Compliments** contains all of Deck 1 of the plan (21 of its 22 cards; శభాష్ went to Top interjections) plus six new cards: effort (మీ కష్టం ఫలించింది.), a neat home, children doing well at school, and how a host answers praise (మీకు నచ్చినందుకు సంతోషం., ఇంకొంచెం వేసుకోండి., థాంక్స్ అండి.).
