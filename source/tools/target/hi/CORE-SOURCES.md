# Core words, Flirting and Compliments for en-hi: sources, order and skips

Written 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments). The deck entries were appended to `profile.json`. No existing file was changed.

## 1. Frequency source actually opened

**Read this first: only part of each deck is in source order.** The only ranked Hindi list this session could read is a list of 311 frequent function and core lemmas (a "stop lemma" list), not a full frequency list. Words that are on it run first in each deck, in its rank order. Words not on it follow, ordered by the writer's judgement of everyday spoken Delhi Hindi.

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| *Novel Language Resources for Hindi: An Aesthetics Text Corpus and a Comprehensive Stop Lemma List*, [arXiv:2002.00171](https://arxiv.org/pdf/2002.00171), Table V (the author names were not recorded in this session; the paper's data repository is github.com/gayatrivenugopal/hindi-corpus-stoplemmas) | 311 stop lemmas "arranged in decreasing order of frequency". They are the overlap between 11 public Hindi stop-word lists and the top 100 lemmas (raw frequency) of 8 corpora: the authors' aesthetics corpus of about 1,000 novels and stories, OPUS (subtitles and other parallel text), CFILT, the IIT Bombay parallel corpus and four ILCI/EILMT domain corpora. Lemmas, so होना covers है, था, हुआ. | arXiv preprint. The paper says the corpus is under the GNU GPL; it gives no licence for the list. Only the ranks were used; nothing was copied. | **Rank order for the head of each deck.** Ranks 1 to 180 were read (the fetch tool would not give the rest). The list's own order is used as is. It has two quirks: it is written-heavy (formal words such as रूप, प्रकार, अधिक, द्वारा rank high), and it has extraction noise (बडा at 91 and बड़ा at 140 are one word; भीतर appears twice; one entry at 99 is unreadable). |


**Cards that have a source rank** (everything else is ordered by judgement):
- **Top nouns:** बात 35, लोग 45, दिन 55, बार 70, कारण 74, हाथ 76, देश 86, रात 115, माँ 118, जगह 128, शब्द 130, भाषा 133, पिता 141, शहर 142, दुनिया 143, खेल 148, रास्ता 154, कोशिश 159, औरत 161, डर 168, सच 173, मतलब 174. Judgement from काम (card 23) on.
- **Top verbs:** करना 5, होना 6, जाना 8, रहना 16, लेना 20, देना 22, आना 27, कहना 28, सकना 31, देखना 34, लगना 41, चलना 42, बनना 44, मिलना 46, रखना 56, चाहना 61, समझना 65, बोलना 73, सुनना 84, बताना 87, निकलना 93, लिखना 94, पूछना 102, डालना 111, बनाना 113 (the list's बना; it may stand for बनना), पीना 122, बदलना 134, मरना 137, खेलना 148, खाना 163 (the list's खाना may be the noun "food"), पढ़ना 169. Judgement from सोचना (card 32) on.
- **Top adjectives:** पूरा 80, बड़ा 91, नया 92, छोटा 104, अलग 123. Judgement from गरम (card 6) on.
- **Top adverbs:** अब 53, बहुत 54, यहाँ 62, पहले 69, कभी 71, आज 78, वहाँ 81, बाहर 101, केवल 110, सबसे 116, आगे 120, ऊपर 129, बस 131, ज़्यादा 132, नीचे 135, काफ़ी 138, अंदर 147, लगभग 149, वहीं 165, उधर 178. Judgement from अभी (card 21) on.
- **Top pronouns:** वह 3, यह 7, अपना 25, जो 26, कोई 29, हम 30, आप 32, कुछ 33, सब 43, कौन 77, ख़ुद 139, तुम्हारा 171. Judgement from तुम (card 13) on.
- **Top postpositions:** से 10, को 12, पर 15, ने 24, तक 39, वाला 49, भर 83. Compound postpositions are ranked by the word that carries them in the list: के साथ (साथ 36), के लिए (लिए 50), की तरह (तरह 52), के बाद (बाद 60), से पहले (पहले 69), के कारण (कारण 74), की ओर (ओर 75), के पास (पास 79), के द्वारा (द्वारा 85), के सामने (सामने 105), के बारे में (बारे 119), के दौरान (दौरान 164). That is an approximation: साथ, पहले and पास are also adverbs. Judgement from की वजह से (card 20) on.
- **Top conjunctions:** तो 19, जब 57, तथा 59, अगर 100, जहाँ 109, जैसे 155. Judgement from यदि (card 7) on.
- **Top interjections:** **all judgement.** None is on the list.
- **Top words:** नहीं 14, भी 17, ही 23, ऐसा 40, चाहिए 66, जैसा 68, सारा 89, कई 98, हर 107, कितना 112, कैसे 117, कहाँ 124, मत 152, कब 179. Judgement from कैसा (card 15) on. दूसरा (63) and सुबह (166) are ranked but kept inside the ordinals and the times of day, which run in natural order; numbers run in counting order, days Monday to Sunday, months January to December.
- **Flirting, Compliments:** not frequency decks; ordered by the three layers and by topic.

**Could not be read** (all tried on 2026-11-23):
- raw.githubusercontent.com and cdn.jsdelivr.net (hermitdave FrequencyWords, OpenSubtitles 2016/2018 Hindi, CC BY-SA 4.0): refused by this session's network proxy (403), also from the fetch tool (not on the allowlist).
- huggingface.co (a mirror of the same lists): proxy 403.
- downloads.wortschatz-leipzig.de (Leipzig Corpora Collection, Hindi news, CC BY 4.0): proxy 403.
- pypi.org (the `wordfreq` package, which ships Hindi frequencies): not reachable from this session.
- en.wiktionary.com `Wiktionary:Frequency_lists/Hindi`: opened, but it only links to the Leipzig and OpenSubtitles lists and to Verma & Patil (2021), *Spoken Word Frequency in the Hindi Language*; it has no ranks. `Wiktionary_talk:Frequency_lists/Hindi_1900`: not found.
- github.com/gayatrivenugopal/hindi-corpus-stoplemmas (the full list behind Table V, with ranks 181–311): not on the fetch allowlist.

**Suggestion for the lead:** re-rank the judgement tails against the OpenSubtitles 2018 Hindi list or the Leipzig Hindi list on a machine that can download them. Only the order inside each deck should move; the choice of words should hold.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Class slots renamed or added, and where words with two homes went

- **`Top postpositions` replaces `Top prepositions`.** Hindi has no prepositions: से, को, पर, में and the compound के साथ, के लिए, के बारे में come after the noun (घर में, "in the house") and put it in the oblique form. The deck holds the simple postpositions, the compound ones as one card each (के साथ), and वाला, which grammars treat as a postposition-like suffix.
- **No extra deck added.** Hindi has no measure words or counters; numbers go straight before the noun.
- **Articles:** Hindi has none. `Top words` carries what does the work of determiners: इस, उस, इन, उन (this / that before a postposition), हर, कई, सारा, दोनों, and एक in the course's Numbers deck.
- **Particles** (भी, ही, ना, सा, मत, नहीं) go in `Top words`. तो goes in `Top conjunctions` (अगर … तो), with its particle use in the note.
- **Possessives** (मेरा, आपका, उसका …) and object forms (मुझे, उसे, उन्हें …) go in `Top pronouns`, because Hindi grammars teach them as forms of the pronoun. मैंने and आपने (the ने forms) are there too.
- **Place words:** the bare adverbs (बाहर, अंदर, ऊपर, नीचे, आगे, पहले) are in `Top adverbs`; the postpositions built on the same words are in `Top postpositions` only where the postposition is the main use (के सामने, के पीछे, के पास, के बाद, से पहले), plus के ऊपर and के नीचे. के अंदर and के बाहर are left out so the two decks do not hold near-twins; the adverb notes show them.
- **Ordinals** (पहला, दूसरा, तीसरा, चौथा) and आधा are in `Top words`, with the numbers.
- **Days, months and times of day** are in `Top words`; दिन, रात, साल and समय are in `Top nouns`.
- **Verbs** are in the -ना form; each note gives the मैं form for a man and a woman (मैं करता हूँ / करती हूँ) and flags the irregular ones (होना, करना, जाना, लेना, देना, पीना). Five common noun + करना verbs are cards (बात करना, शुरू करना, ख़त्म करना, इंतज़ार करना, पसंद करना).
- **खाना** (to eat; food) and **गाना** (to sing; song) are verb cards, with the noun in the note: one target can only be in one deck.
- **Flirting words kept out of the core decks:** सुंदर, ख़ूबसूरत, प्यारा, होशियार, दिलचस्प, मुस्कान, आँखें, हँसी, आवाज़, बाल, दिल. सुंदर and दिल are frequent enough for the core decks; if the lead prefers them there, the Flirting deck must drop them.
- **शाबाश** is a card in `Top interjections`, so the Compliments deck (plan Deck 1, #5) does not repeat it.

## 3. Words skipped because the course already teaches them

Exact card targets in `decks-a.js` or `decks-b.js` (compared without । ? ! , marks). Each was left out; where a form differs only slightly (पैसा / पैसे) it was also left out.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | दोस्त, प्यार, ट्रेन, ज्ञान, हिंदी, फ़ोन | Conjuncts and nasals |
| Top nouns | बहन, भाई, दादी, दादा, नानी, नाना, बेटा, बेटी, मौसी, परिवार, बच्चे (बच्चा, the singular, was added) | Family and people |
| Top nouns | पैसा (as पैसे) | Numbers and money |
| Top nouns | चावल, सब्ज़ी, लस्सी, मिठाई | Food and drink |
| Top nouns | घर (rank 64), पानी (rank 95), कमरा, किताब, दरवाज़ा, खिड़की, कुर्सी, रसोई, चाबी | Home and daily things |
| Top nouns | घी, झूठ, चाचा | Consonants 1 |
| Top nouns | आम | Traps for English speakers |
| Top verbs | none: no existing card is a bare -ना form | |
| Top adjectives | अच्छा (rank 72), ठंडा, ख़ुश | Conjuncts and nasals |
| Top adverbs | फिर (rank 48) | Questions and connectors |
| Top adverbs | ठीक | Consonants 1 |
| Top adverbs | ज़रूर | Conjuncts and nasals |
| Top adverbs | कल (rank 157) | Time, days and routine |
| Top adverbs | परसों | Traps for English speakers |
| Top pronouns | मैं (rank 13), क्या (rank 37) | Conjuncts and nasals |
| Top pronouns | तू | Traps for English speakers |
| Top postpositions | का, की, के (rank 1) | Vowels and vowel signs (letter cards का, की, के) |
| Top postpositions | में (rank 4) | Conjuncts and nasals |
| Top conjunctions | और (9), या (47), लेकिन (51), क्योंकि, इसलिए (96) | Questions and connectors |
| Top conjunctions | कि (rank 18) | Vowels and vowel signs (letter card कि) |
| Top conjunctions | न … न (न) | Consonants 2 (letter card न) |
| Top conjunctions | पर ("but") | the same text is the postposition पर in Top postpositions |
| Top interjections | अच्छा ("I see!") | Conjuncts and nasals |
| Top words | हाँ, पाँच | Conjuncts and nasals |
| Top words | जी | Traps for English speakers |
| Top words | एक (21), दो (38), तीन (106), चार, दस (162), बीस | Numbers and money |
| Top words | क्यों (rank 88, as क्यों?) | Questions and connectors |
| Top words | न ("not") | Consonants 2 (letter card न) |

**Total skipped as already taught: 69 entries, 68 distinct words** (Top nouns 35, adjectives 3, adverbs 5, pronouns 3, postpositions 4, conjunctions 7, interjections 1, words 11; न is listed under two decks). पर ("but") is not counted: it is a card in this job's own Top postpositions. The four letter-card clashes (का, की, के, कि) are among the most frequent words in Hindi: they are taught in the lessons and appear in the notes, but they cannot be cards in a second deck.

## 4. Left out on purpose

- **Formal or written-only words high on the source list:** रूप 67, प्रकार 90, अधिक 82, वर्ष 114 (साल is in), भाग 121, विकास, प्राप्त, कार्य, विशेष (ख़ास is in), उपयोग, स्वयं (ख़ुद is in), अथवा, पुरुष (आदमी is in), आवश्यकता (ज़रूरत is in), प्रत्येक (हर is in), माध्यम, वर्ग, अंत. भारत (103) is a name. लगा (58) and बना (113) are verb forms. भीतर (108) is a formal अंदर. जितना, मानो, कुल: rare for a beginner. तथा, यदि, के द्वारा, के अनुसार are in, each with a "formal" note, because learners meet them on signs and in the news.
- **Words the pron tool gets wrong** (rule 6; the tool reads only `lexicon.txt`, which this job may not create): see §5.

## 5. Pron tool

Every pron came from `tools/target/hi/respell.js` through the build script, never typed. `repron.js` reports 0 rewritten. All outputs were read by eye. The tool's warnings were checked one by one; these were right and kept: शब्द, नींद, मेहमान, पहनना, पकड़ना, फेंकना, ख़त्म, व्यस्त, गहरा, हम्म, शून्य, मार्च, स्मार्ट, दिलचस्प, रोमांटिक, वक़्त, मेहनत, समझदार.

**Left out because the generated pron is wrong** (the course's tool has no add-file it reads, so they could not be fixed):

| Word | Tool gives | Should be | Where it would have gone |
|---|---|---|---|
| इंसान | ĩsān | insān | Top nouns; Flirting (plan Deck 2 #8, rewritten as आप बहुत प्यारी हैं।) |
| हैंडसम | haĩḍsam | hainḍsam | Flirting (plan Deck 2 #2; स्मार्ट used instead) |
| मशहूर | mashahūr | mashhūr | Top adjectives |
| एवं | evã | evam | Top conjunctions |
| शुक्र है | shukra hai | shukr hai | Top interjections |
| मेहनती | mehantī | mehnatī | Compliments (plan Deck 1 #12, rewritten as आप बहुत मेहनत करते हैं।) |

If the lead adds these to the tool's EXC list, they can come back.

## 6. Flirting and Compliments

- **Flirting** follows `docs/plans/compliments-hi.md` Deck 2 (all 22 plan cards are used: #2 and #8 rewritten for the pron tool, #4 "that color suits you" moved to Compliments, as it is fine between friends) and extends it to 56 cards: 21 single words, 18 phrases grouped by the word they come from, 17 moves and replies (three kind ways to say no, two playful deflections, two yeses). Polite आप throughout, switching to तुम only for the bold cards meant for someone you already see (the plan's own choice). Every gendered card names who is addressed or who speaks and gives the other form in the note. Open flirting with strangers in public reads as harassment ("eve-teasing") in India; the deck keeps to dates, friends and people you already know, and the most-used first moves are indirect (coffee, "can we meet again?").
- **Compliments** follows Deck 1 of the plan (minus शाबाश, now an interjection) and extends it to 30 cards, with the modest answers Hindi speakers give (बस थोड़ी-बहुत आती है, यह तो आपका बड़प्पन है, अरे, ऐसी कोई बात नहीं) and नज़र न लगे from the plan's "Left out" list.
- **Native check first:** यह तो आपका बड़प्पन है (still everyday?), आपका अंदाज़ ही अलग है, तुम्हारे बिना मन नहीं लगता, आपकी मेहनत रंग लाई, स्मार्ट for a good-looking man.
