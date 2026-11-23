# Core words and Flirting (en-bn): sources, order, skips

Writer EN-BN-T, 2026-11-23. Files: `decks-t.js`, `extra-t.js` (ten Core words decks), `decks-f.js`, `extra-f.js` (Flirting), `lexicon-add-T.txt` (302 pron lines), this file and `POS-COVERAGE.md`. `profile.json`: 11 deck entries appended. **Compliments was not built:** the course already has a `Compliments` deck in `profile.json` (writer brief item 3), and there is no `docs/plans/compliments-bn.md`.

## 1. Frequency source actually opened

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, `content/2018/bn/bn_50k.txt` (https://github.com/hermitdave/FrequencyWords), cloned with `git clone --depth 1` (sparse, only `content/2018/bn/`) into a new empty scratch folder on 2026-11-23 and read as plain text. Only the text list was read; nothing in the repository was run. | OpenSubtitles 2018 Bengali subtitles: word forms (not lemmas) with counts, top 50,000. Spoken-style, film and TV language. | Repository README: MIT for code, CC BY-SA 4.0 for content. Only ranks and counts were used for ordering; nothing was copied into the course. | **Main sort key for every deck except the classifier deck.** |

**Tried and not opened:** WebSearch for a Bengali frequency list found only Sketch Engine's bnTenTen corpus pages (a paid corpus; not opened) and Lexical Computing's commercial lists (not opened). `en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Bengali` was refused by the fetch tool (not on the allowlist), and `Wiktionary:Frequency_lists` came back "not found". So the subtitles list is the only source.

**What the list is, and its limits.** It counts spelled word forms, so:
- Spelling variants are separate rows. Only one merge was made: ভালো (#69) + ভাল (#72) for the card ভালো. The course's own spellings are kept (আরও, not the list's আরো #214; এখনও, not এখনো #195; হ্যাঁ, not হ্যা #100).
- Subtitles over-rank film words (পুলিশ #310, মারা #185, আগুন). They were kept where they are also everyday words; the order is the list's.
- Some frequent subtitle words were left out as non-Dhaka or not beginner words: জলদি #256 (Dhaka says তাড়াতাড়ি), গুলি #285 (bullet; the formal classifier -গুলি is a card), the loan ওকে "OK" (only the pronoun ওকে is a card).

**Sort rule (in the build script):** a card's score is the summed count of the forms listed below; cards with a score come first, highest first; cards with no row in the list follow in the writer's order.
- One-word cards: the count of that exact form.
- Verbs (dictionary form = verbal noun): verbal noun + the -তে infinitive (করা #50 + করতে #18; যাওয়া #370 + যেতে #74 …).
- Noun + verb cards (সাহায্য করা, কথা বলা …): the count of the noun alone. **This overstates them**, because the noun is counted in all its uses (কথা #34, মনে #35, শেষ #82), so কথা বলা and মনে করা sit second and third. A lemmatised list would move them down.
- Multi-word cards without a listed form, bound classifiers (-টা, -জন …), numbers 0 and 11–20, ordinals and days: no score, so judgement.
- **Top classifiers and measure words is ordered entirely by judgement** (grammar first: একটা, একজন, -টা, -জন …, then measure words). Bound endings have no row in a word list, so a frequency sort would push the core classifiers to the bottom. The list ranks of the free forms are shown below for reference.

**Exactly what is in source order and what is judgement:**
- **Top nouns**: 88 in source order: কথা #34, কাজ #59, স্যার #66, নাম #115, মানুষ #127, সমস্যা #190, ভয় #211, লোক #218, বন্ধু #221, হাত #222, জীবন #228, ছেলে #232, জিনিস #236, ব্যাপার #246, মেয়ে #259, মজা #301, পুলিশ #310, জায়গা #320, মাথা #328, বাড়ি #330, গাড়ি #345, অবস্থা #352, বাচ্চা #364, খবর #400, বিয়ে #421, দরজা #423, পথ #427, প্রশ্ন #436, খাবার #450, শব্দ #470, রাস্তা #479, বস #493, মন #508, মুখ #511, ছবি #553, ইচ্ছা #584, পরিবার #589, পা #590, গল্প #623, উপায় #633, স্ত্রী #641, গান #655, পরীক্ষা #714, পৃথিবী #771, চিনি #818, শহর #846, বাস #860, বই #880, আগুন #929, শান্তি #944, ঘুম #963, দাম #1010, শরীর #1014, মালিক #1060, চাবি #1126, কাপড় #1141, স্বামী #1155, চিঠি #1211, ব্যাগ #1246, ভাষা #1387, আনন্দ #1388, দুঃখ #1433, দেশ #1516, বৃষ্টি #1597, ভাড়া #1629, বাতাস #1649, জুতা #1755, অফিস #1760, ছুটি #1791, দোকান #1820, ঠিকানা #1950, ক্লাস #1979, টিভি #2002, পয়সা #2007, বউ #2026, নম্বর #2033, কাগজ #2046, দুধ #2356, আকাশ #2456, জামা #2561, ফল #2556, মোবাইল #2621, হাসপাতাল #2771, টেবিল #2876, কলম #4224, বাজার #4674, সবজি #6399, লবণ #8451. By judgement (1): রিকশা.
- **Top verbs**: 73 in source order: করা #50+#18, কথা বলা #34, মনে করা #35, দেখা #106+#103, যাওয়া #370+#74, বলা #286+#86, হওয়া #571+#96, শেষ করা #82, দেওয়া #468+#114, চলে যাওয়া #97, বের হওয়া #109, সাহায্য করা #125, শুরু করা #136, বিশ্বাস করা #147, মারা #185+#662, বন্ধ করা #148, থাকা #526+#205, বোঝা #1323+#175, চেষ্টা করা #161, জানা #566+#258, নেওয়া #1487+#215, পাওয়া #390+#363, আসা #564+#284, চিন্তা করা #230, অপেক্ষা করা #242, রাখা #529+#437, শোনা #1859+#317, ভুলে যাওয়া #348, ধরা #744+#636, খেলা #541+#1373, খাওয়া #1408+#548, আনা #1189+#698, জিজ্ঞেস করা #537, বানানো #1097+#1062, লেখা #769+#2134, খোলা #925+#1912, দেখানো #2098+#889, পড়া #1870+#969, বিক্রি করা #766, ভালোবাসা #864+#5048, পাঠানো #1288+#1744, চেনা #2870+#1304, খোঁজা #4558+#1177, ভাবা #3574+#1332, চলা #3836+#1344, ওঠা #3642+#1554, হারানো #2785+#1756, ঢোকা #5803+#1476, পারা #4211+#1723, চাওয়া #3303+#1943, ঘুমানো #8259+#1489, শেখা #7328+#1546, ডাকা #2310+#2891, বাঁচা #5177+#1794, কেনা #5089+#1845, বসা #3528+#2166, কাটা #2264+#3286, পরা #2809+#2857, লাগা #7560+#1932, ফেরা #5742+#2144, হাঁটা #6218+#2940, ঘোরা #10307+#2565, জেতা #8565+#2958, ভাঙা #4179+#4474, থামা #6006+#3676, পৌঁছানো #10008+#3264, নাচা #19528+#3662, হাসা #12144+#4067, কাঁদা #20531+#3839, গাওয়া #9390+#4583, দাঁড়ানো #8653+#5082, বেড়ানো #14648+#4856, ধোয়া #7216+#10874. By judgement (4): মনে রাখা, ঠিক করা, বিয়ে করা, ভয় পাওয়া.
- **Top adjectives**: 56 in source order: ঠিক #21, ভালো #69+#72, বড় #154, খারাপ #182, সুন্দর #196, ভুল #198, সত্যি #227, নিশ্চিত #250, তৈরি #268, পুরো #290, ছোট #293, একা #369, শান্ত #395, সম্ভব #416, চমৎকার #448, সহজ #477, কঠিন #491, পরিষ্কার #544, বিশেষ #606, দারুণ #630, খালি #642, আলাদা #659, প্রিয় #725, অসাধারণ #741, বোকা #747, কালো #746, সাধারণ #785, পুরনো #826, গরম #892, লম্বা #1035, লাল #1050, অসুস্থ #1083, নীল #1244, সাদা #1259, বুড়ো #1321, ক্লান্ত #1375, সুস্থ #1457, নোংরা #1497, সবুজ #1759, মোটা #1798, ভদ্র #2088, ধনী #2085, জরুরি #2327, হালকা #2439, সুখী #2470, ভারী #2523, তাজা #2959, নরম #3368, সস্তা #3508, হলুদ #3730, দামি #4765, পাতলা #6377, খাটো #7169, গরিব #7379, টক #11201, ঝাল #13109. None by judgement.
- **Top adverbs**: 36 in source order: শুধু #64, খুব #76, একটু #101, আগে #105, আবার #113, অবশ্যই #151, বেশি #156, কখনো #181, সেখানে #187, তখন #197, ওখানে #200, পরে #204, এত #233, খুবই #237, হয়তো #274, একদম #276, বেশ #283, বাইরে #282, সবসময় #296, আরও #308, তাড়াতাড়ি #321, এখনও #354, এভাবে #375, দূরে #386, কোথাও #435, একসাথে #474, প্রায় #483, এখনই #512, কম #525, কাল #611, ধীরে #677, আগামীকাল #1013, প্রতিদিন #1119, হঠাৎ #1281, গতকাল #1356, ভালোভাবে #1928. By judgement (1): মাঝে মাঝে.
- **Top pronouns**: 42 in source order: আমি #2, তুমি #4, আমার #5, তোমার #9, সে #11, আমরা #13, আমাদের #17, আমাকে #20, আপনি #22, তার #25, তোমাকে #31, আপনার #40, তাকে #43, তারা #44, তাদের #68, যা #70, কেউ #87, তুই #90, ওকে #93, সবাই #104, তিনি #108, ওর #117, তোমরা #122, আপনাকে #126, তোমাদের #144, নিজের #152, এসব #166, কিছুই #168, ওরা #206, সবকিছু #244, আপনাদের #343, উনি #371, তাঁর #373, আপনারা #385, নিজে #601, এরা #692, সেগুলো #1004, কারা #1113, কোনটা #1135, কাকে #1202, ওনার #1824, ইনি #1884. None by judgement.
- **Top postpositions**: 23 in source order: জন্য #16, থেকে #26, নিয়ে #41, কাছে #63, দিয়ে #75, মধ্যে #121, দিকে #132, উপর #158, মতো #179, পর্যন্ত #201, ব্যাপারে #212, সম্পর্কে #231, সামনে #235, নিচে #247, ছাড়া #271, সঙ্গে #336, চেয়ে #372, ভিতরে #381, পিছনে #506, কারণে #578, পাশে #667, বিরুদ্ধে #703, বদলে #724. By judgement (1): কাছ থেকে.
- **Top conjunctions**: 20 in source order: যে #24, যদি #37, এবং #38, তাহলে #47, তাই #53, যখন #85, নাকি #119, কারণ #153, তারপর #162, যেন #226, বা #253, অথবা #338, তবে #360, এমনকি #426, যাতে #434, যেমন #516, যদিও #663, বরং #1000, তবুও #1111, নইলে #2049. None by judgement.
- **Top interjections**: 21 in source order: ওহ #98, আচ্ছা #124, হেই #165, আরে #219, হ্যালো #240, হুম #456, আহ #459, হায় #844, ধুর #991, বাহ #1229, উহ #2288, আহা #3180, ছি #4930, উহু #5437, উফ #6054, ইশ #7312, সাবাশ #7710, মাশাআল্লাহ #8308, আলহামদুলিল্লাহ #12656, ওমা #15495, ইনশাআল্লাহ #19044. By judgement (1): হায় আল্লাহ.
- **Top words**: 36 in source order: না #3, এই #12, তো #23, কোন #33, কেন #49, হ্যাঁ #51, সব #54, সময় #89, কিভাবে #120, দরকার #133, সেই #134, দিন #139, মানে #141, বছর #157, কোনো #169, কেমন #183, প্লিজ #184, অন্য #208, ওই #225, উচিত #245, কত #257, মিনিট #299, প্রতি #380, একই #398, কখন #613, সকাল #639, রাত #704, মাস #729, কয়েক #765, সপ্তাহ #820, জি #851, কবে #996, ঘণ্টা #1076, প্রত্যেক #1102, বিকাল #6015, দুপুর #6178. By judgement (25): শূন্য, এগারো, বারো, তেরো, চৌদ্দ, পনেরো, ষোলো, সতেরো, আঠারো, উনিশ, বিশ, একশো, হাজার, লাখ, কোটি, দ্বিতীয়, তৃতীয়, শনিবার, রবিবার, সোমবার, মঙ্গলবার, বুধবার, বৃহস্পতিবার, শুক্রবার, দয়া করে.
- **Top classifiers and measure words**: By judgement (25): একটা #19, একজন #71, -টা, -জন, -টি, -গুলো, -রা, দুইটা #1206, কয়টা #2220, কয়জন #6307, কয়েকটা #1698, কয়েকজন #3124, অনেকগুলো #3387, -গুলি, -টুকু, -খানা, কাপ #2469, গ্লাস #2522, কেজি #6509, হালি, ডজন #4379, জোড়া #3071, প্যাকেট #5143, বোতল #2700, টুকরা #1991.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Class slots fitted to Bengali

- **`Top prepositions` → `Top postpositions`.** Bengali has no prepositions: জন্য, থেকে, মধ্যে, সামনে … follow the noun, usually in its -র form (profile glossary "postposition"; lesson `postpositions`). Same rename as the Hindi course. Two-word কাছ থেকে "from (a person)" is one card because it works as one unit. Case endings (-কে, -র, -এ) were **not** made cards: they are not words, and `-কে` / `-এ` would clash with the existing letter cards কে and এ once the hyphen and punctuation are stripped.
- **Added: `Top classifiers and measure words`** (brief rule 2, like `Top counters` in Japanese). Bengali counts with classifiers on the number (একটা, দুইজন) and marks "the" and plurals with them (বইটা, বইগুলো, ছেলেরা): the profile glossary lists -টা, -টি, -জন, -গুলো, -রা as classifiers. There are only about ten real classifiers, so the deck also holds the measure words that sit in the same slot (এক কাপ, এক হালি, এক জোড়া). Bound forms are written with a hyphen (-টা); the tool reads a hyphen-initial ending as `-ṭa`.
- **`Top adjectives`** keeps its name. Bengali adjectives never agree, so instead of "the other gender" each note gives a usage frame or a warning.
- **`Top verbs`** uses the verbal noun as the dictionary form (করা, যাওয়া, খাওয়া), the form dictionaries list, and gives the আমি present in the note, flagging irregular stems (যাওয়া → গেলাম, দেওয়া → দাও) and vowel changes (লেখা → লিখি). Noun + করা / হওয়া verbs (সাহায্য করা, বের হওয়া) are included as two-word cards because the profile and lesson `conjunct-verbs` treat them as one verb.
- **Particles** (তো, মানে, নাকি) have no slot of their own: তো and মানে went to `Top words`, নাকি to `Top conjunctions` (its "or" use in questions).
- No class was invented.

## 3. Words skipped because the course already has them as cards

Compared against every target in `decks-a.js` and `decks-b.js` (315 cards), exactly and after stripping punctuation and a leading hyphen.

| Deck | Skipped | Already a card in |
|---|---|---|
| Top nouns | ঘর, খাতা | Consonants |
| Top nouns | চাঁদ, বাংলা | Vowel signs |
| Top nouns | ইংরেজি | Vowels |
| Top nouns | গ্রাম, শিক্ষা, ক্ষমা, স্থান, স্কুল, ট্রেন, ডাক্তার, শিক্ষক, উত্তর, ব্যথা, রাত্রি, সন্ধ্যা | Conjuncts |
| Top nouns | ভাত, মাছ, চা, পানি, ডাল, মাংস, মুরগি, ডিম, রুটি | Food and drink |
| Top nouns | মা, বাবা, ভাই, বোন, আম্মু, আব্বু, আপা, ভাইয়া, দাদা, নানি | Family and people |
| Top nouns | টাকা | Shopping |
| Top nouns | ফোন, পছন্দ | Work and actions |
| Top verbs | কাজ করা, ফোন করা | Work and actions |
| Top verbs | পছন্দ করা (judgement: not an exact match, but পছন্দ is a card and the lesson `conjunct-verbs` teaches পছন্দ করা) | Work and actions |
| Top adjectives | নতুন, খুশি, দুঃখিত | Vowel signs |
| Top adjectives | ঠান্ডা | Consonants |
| Top adjectives | মিষ্টি, শক্ত, ব্যস্ত | Conjuncts |
| Top adverbs | অনেক, আজ, এখন, এখানে, উপরে | Vowels |
| Top adverbs | আস্তে | Conjuncts |
| Top adverbs | সোজা | Getting around |
| Top pronouns | এটা, ওটা, সেটা, এগুলো, ওগুলো | This and that |
| Top pronouns | কে, কী, কি (same spelling as the syllable cards) | Vowel signs |
| Top pronouns | কার (differs from কার? only by the question mark) | Questions |
| Top pronouns | ও, এ (same spelling as the vowel letters; also the conjunction ও) | Vowels |
| Top postpositions | সাথে | Getting around |
| Top postpositions | উপরে (so the card is উপর) | Vowels |
| Top conjunctions | আর | Family and people |
| Top conjunctions | কিন্তু | Conjuncts |
| Top conjunctions | ও | Vowels |
| Top words | এক, দুই, তিন, চার, পাঁচ, ছয়, সাত, আট, নয়, দশ | Numbers and money |
| Top words | কোথায় (differs from কোথায়? only by ?) | Questions |
| Top words | কিছু | Vowel signs |
| Top words | প্রথম | Conjuncts |
| Top words | আছে, নেই | Home and having |
| Top classifiers | দশটা | Shopping |
| Top classifiers | বইটা | This and that |
| Flirting | মিষ্টি (sweet) | Conjuncts |
| Flirting | খুব সুন্দর, তোমার হাসিটা খুব সুন্দর।, দারুণ লাগছে! (other phrasings used instead) | Compliments |

**Total skipped: 89** (nouns 39, verbs 3, adjectives 7, adverbs 7, pronouns 11, postpositions 2, conjunctions 3, words 15, classifiers 2; Flirting 4 counted separately). Also not carded, for the pron tool: see section 5.

## 4. Words with two homes

- এই, ওই, সেই (before a noun) are in `Top words` as determiners; the pointing pronouns এটা / ওটা / সেটা are already cards. এই as the call "hey!" was not made an interjection.
- সুন্দর is in `Top adjectives` (its most frequent use); Flirting uses সুন্দরী and phrases built on সুন্দর.
- আগে, পরে are in `Top adverbs` (most subtitle uses are "earlier / later"); the note gives the postposition use (-র আগে). সামনে, পিছনে, পাশে, নিচে, ভিতরে are in `Top postpositions`; বাইরে in `Top adverbs`.
- যে is in `Top conjunctions` ("that"); its relative use is in the note. The relative pronoun card is যা.
- কারণ is in `Top conjunctions`; its noun use "reason" is in the note.
- খেলা is one card in `Top verbs` ("to play; game").
- দিন "day" is in `Top words`; the note says the polite "give" দিন sounds the same.
- কয়টা, কয়জন are in the classifier deck, not with the question words.
- One card per word: nothing in these decks is a target anywhere else in the course, and no target is in two of the new decks.

## 5. Pron

Every pron was printed by `require('tools/target/bn/respell.js')` inside the build script and pasted unchanged; the script fails if the tool throws on any target, example or dialogue line. `respell.js` reads every `lexicon-add-*.txt` (checked in its source, and confirmed: `respell.js --check` lists `lexicon-add-T.txt` and passes). So no word had to be left out for a missing reading.

- **`lexicon-add-T.txt`: 302 lines, all `unverified:model`.** No page was opened for these readings; they are the writer's, following the profile §6.3 key and the conventions of `lexicon.txt` (লেখা lekha, শেখা shekha, কেনা kena for e-stem verbal nouns; doubled sh written ssh as in সমস্যা; কখন kôkhôn → তখন / যখন with ô ô). Every added key was checked to be absent from `lexicon.txt`, so no existing reading changed (`repron.js bn` rewrote 0 of 1038 prons). Three multi-word lines fix the homograph করে: দয়া করে (dôya kore), দেরি করে (deri kôre), পরিষ্কার করে (porishkar kôre).
- **Riskiest readings (check first):** নিশ্চিত nishchito (final o said?), কঠিন kôṭhin, মন mon, জীবন jibon, খবর khôbor, তখন / যখন tôkhôn / jôkhôn, যেন / যেমন / এমনকি with æ, একা æka, একই æki, এখনই ækhoni, একসাথে ækshathe, খেলা / খেলি khæla / khæli, গেছে gæchhe, অবশ্যই ôbosshoi, বিশ্বাস bisshash, পৌঁছানো põũchhano, the loans স্যার sær, বস bôs, ক্লাস klas, স্মার্ট smarṭ, স্টাইল sṭail (loan স read s), and ইনশাআল্লাহ / মাশাআল্লাহ written inshallah / mashallah (the key forbids "aa").
- **Not carded because of the tool:** সত্যিই "really" (its reading shottii breaks the pattern's ban on "ii"); আসলে "actually" and আসল "real" (seeded homographs; a card target is one word, so no multi-word line can fix them).

## 6. Flirting notes

- Layer 1: 20 single words; layer 2: 22 phrases grouped by the word they start from; layer 3: 15 moves and replies (asking for a number, the indirect "এক কাপ চা খাবে?", asking out; a warm yes, a relaxed yes, two playful deflections, a soft no, and three kind, clear no's).
- Open flirting is reserved in Bangladesh. The notes mark the indirect forms people really use: তোমাকে আমার ভালো লাগে ("I like you", genitive + ভালো লাগা) rather than ভালোবাসি, and tea or ঘুরতে যাওয়া rather than a "date". The phrases use তুমি, which already implies some closeness; the note on the number request gives the আপনি form for someone new.
- Endearments জান and সোনা are flagged as for partners only. English loans (কিউট, হ্যান্ডসাম, স্মার্ট, ক্রাশ, ডেট) are everyday among young Dhaka speakers; the notes say so.
- 19 dialogues, one ending in a gracious no (তুমি কি আমার সাথে ঘুরতে যাবে? → ধন্যবাদ, কিন্তু আমার একজন আছে।), others in a yes (এক কাপ চা খাবে? → হ্যাঁ, অবশ্যই!).
- Group: the course has no "Conversation" group; its one social deck, Compliments, is in `Watch out`, so Flirting was put next to it.
