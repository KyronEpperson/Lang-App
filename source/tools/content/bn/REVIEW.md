# bn-en cold review (BN-REVIEWER), 2026-11-23

**Scope.** Everything under tools/content/bn except profile.json, the deviations files and the pron tool (pron_bn.js, pron_check.js, pron_lookup.json, PRON-TOOL.md), plus the `t` fields of tools/i18n/bn/ui.json and tools/i18n/bn/roadmap.json. No generator, pack, app file or other course was touched, and nothing was committed.

**How it was read.** The reviewer read decks.js, extra.js and meta.js; four parallel readers (same brief, same decisions) read lessons.js + practice.js, more/a1.js, more/a2.js + more/b1.js, and the interface + roadmap. Cross-file terms were then compared by search and aligned by the reviewer.

**Status.** Every check passes on scratch outputs (section 6). All 8 JS sources pass `node --check`, all are NFC, there is no Hangul under tools/content/bn, and the only Bengali digits are the two in the `numbers` lesson body that show ০–৯ on purpose. In ui.json only `t` values changed (12); roadmap.json is byte-identical to the original.

**Overall.** The course is in good shape: 77 edits in about 1 MB of text. No Korean-course leftovers were found in card notes (the *What's up?* note, the R / L note, the K-pop card and the politeness notes were all rewritten for Bengali speakers), no তুমি addressed to the learner, and no pron row disagrees with the lookup.

## 1. What changed (77 edits)

### Wrong or misleading teaching: 31
- **decks.js, *Medium rare, please.* note.** «ভালো করে সেদ্ধ চাইলে: Well done» → «পুরোপুরি রান্না করা চাইলে: Well done» (a steak is not boiled).
- **lessons.js `pron` body.** «<b>S</b> সব সময় "বাস", "সিট"-এর স» → «<b>S</b> ধ্বনিটা সব সময় …» (as a claim about the letter it is false for *sure*, *sugar*).
- **a1 `third-s` blurb and body.** «কর্তা একজন বা একটা হলে ক্রিয়ায় -s» would include *I* and *you* → «কর্তা he, she, it (বা my mom-এর মতো একজন) হলে ক্রিয়ায় -s»; body: «… (I আর you বাদে) …».
- **a1 `can-like` type item, `why`.** «like-এর পরে -ing রূপ বসে।» although the item accepts *I like to cook* → «শখের কথায় like-এর পরে সাধারণত -ing রূপ বসে; like to cook-ও ঠিক।»
- **b1 `passive` body.** It named «করা হয়» and then said Bengali has no such pattern → «be + V3-এর সঙ্গে হুবহু মেলে এমন একটিমাত্র ছক বাংলায় নেই।»
- **practice `be` fill, `why`.** «কর্তা he, তাই…» for a sentence with *my brother* → «কর্তা my brother, মানে he; তাই…».
- **practice `numbers` type item.** hint and `why` said "two or more → plural" while the order item in the same set says "more than one" → «একের বেশি হলে বহুবচন», «এক ডলারের বেশি হলে…».
- **a1 `banglish` (bn-only).** Table row «এসএসসি / এইচএসসি পাস করেছি → I finished high school» → «এইচএসসি পাস করেছি → …» (SSC is grade 10). Fill *Tomorrow is my day __*: distractor `out` → `up` (*my day out* is English). Accepted answers added: *She has given me (some) good advice*, *I've got a cousin in Sylhet*.
- **Prompts that led to an unaccepted answer (12, shared items: the Bengali prompt was made more specific, the English side is unchanged).**
  - practice `tense`: «আমি দুইটা সিনেমা দেখেছি» → «… দেখলাম» (answer *I saw two movies*).
  - practice `smalltalk`: «ইদানীং ভালো কিছু দেখেছেন?» → «ইদানীং ভালো কোনো শো বা সিনেমা দেখেছেন?»; «আজ আবহাওয়াটা চমৎকার, তাই না?» → «আজ আবহাওয়াটা চমৎকার (nice দিয়ে)».
  - a1: «আমি একটা সিনেমা দেখেছিলাম» + «(watch দিয়ে)»; «আরও ছোট সাইজ আছে?» + «(দোকানিকে: Do you have …?)»; two *Can you …?* items + «(Can you …?)».
  - a2: «আমি বইটা পড়েছি» + «(have দিয়ে)»; «আমি দরজাটা বন্ধ করে দিচ্ছি» + «(will দিয়ে)»; «আমি যুক্তরাষ্ট্র থেকে এসেছি» + «(I'm from দিয়ে)»; «…যে কোরিয়ান বলতে পারে» → «…যে কোরিয়ান ভাষায় কথা বলে» (only *speaks Korean* is accepted).
  - b1: «আমার একটা গাড়ি থাকলে ভালো হতো» + «(I wish দিয়ে)».
- **ui.json (6).** Level titles now equal meta.js TITLES: *Talker* আড্ডাবাজ → **আলাপি**, *Pro* প্রো → **দক্ষ**. The ladder in both places is নবীন, শিক্ষার্থী, আলাপি, পর্যটক, স্থানীয়, দক্ষ, ওস্তাদ. Four typing-drill patterns said «টানা {1}» for "streak {n}", which reads as the day streak → «টানা সঠিক {1}».

### Unnatural wording and terminology across files: 42
- **One word for "weekend": উইকেন্ড (28 occurrences changed in 6 files).** Before: উইকএন্ড (lessons.js, practice.js), সাপ্তাহিক ছুটি / সাপ্তাহিক ছুটির দিন (a1.js), ছুটির দিন / ছুটির দিনগুলো (decks.js, extra.js, lessons.js, meta.js). «ছুটির দিন» now means only *day off*. The first deck card that uses the word keeps its gloss: «আগামী উইকেন্ডে (সপ্তাহ শেষের ছুটিতে)», with the note that in English-speaking countries the weekend is Saturday and Sunday.
- **One phrase for the non-be verb: «অন্য ক্রিয়া» («be ছাড়া অন্য ক্রিয়া»).** Already the only wording in lessons.js, extra.js and a1.js; the other files do not name the concept. No edit was needed.
- **decks.js.** *sink* «সিংক / ডুবে যাওয়া» → «বেসিন (সিংক) / ডুবে যাওয়া» (the lesson says বেসিন); «বংশনাম» → «পদবি» twice (lessons.js and practice.js say পদবি); «উচ্চারণ-সহায়কে» → «উচ্চারণের লেখায়» (the `pron` lesson's name for the aid).
- **meta.js.** Plan labels aligned with the interface keys for the same presets: «বিদেশ ভ্রমণ», «বিদেশি বন্ধু বানানো», «90 দিনে কথা বলতে পারা» (before: «বিদেশ ভ্রমণের প্রস্তুতি», «বিদেশি বন্ধুদের সঙ্গে আলাপ», «90 দিনে কথা বলার অভ্যাস»).
- **b1 `passive`.** «দরজাটা তালা দেওয়া ছিল» → «দরজাটায় তালা দেওয়া ছিল».
- **ui.json (6).** «একটি বানান» / «কার্ড বানান» → «তৈরি করুন» / «কার্ড তৈরি করুন» (বানান also means "spelling"); «আপনি কি এখনই ইংরেজি পড়তে পারেন?» → «… আগে থেকেই …» (এখনই = right now); «অনেক রাত হয়েছে, ভালো কাজ করেছেন» → «এত রাতেও পড়ছেন, দারুণ»; «যে অংশটি নেই…» → «শূন্যস্থানে যা বসবে…»; «সম্পন্ন চিহ্ন দিন» → «সম্পন্ন হিসেবে চিহ্নিত করুন».

### Pron: 0 edits
- `pron_check.js`: 804 pairs, 0 DIFF, 0 CONFLICT, 0 PROSE, 0 ENCODING, and the one accepted WORD line (*she* ˈশী on the see / she card).
- All 107 rows that have no zh counterpart (names, places, the Banglish deck, the minimal pairs) were read against the key; the forms in PRON-RULES.md §B were re-run through `pron_bn.js` and match. None was respelled.
- New file **PRON-RULES.md**: where an aid comes from, the name table, citation / weak forms, shapes checked by eye.

### Formatting: 4
- a2.js: «কোন বাক্যটি সঠিক?» / «কোনটি সঠিক?» → «… ঠিক?» (the other files use ঠিক in this frame).

### Checked, no change
- Deck names: 22 decks, «ইংরেজি বর্ণমালা» is deck 21 and «বাংলিশ ফাঁদ» deck 22, all as DECKNAMES.md.
- Names: Rafi, Nadia, Mr. Khan, Dhaka ˈডাːকা, Bangladesh, Bangla as written.
- Interface: tab labels (2–7 code points), weekday headers র সো ম বু বৃ শু শ, buttons (polite imperative or bare noun, no দয়া করে), no case ending after any slot, Western digits only. All 274 pattern templates were rendered at 0, 1, 2, 5, 21 and 22: none changes with the number, and গুলো never follows a number.
- The three known copied teaching errors (PHASE2-BRIEF) are absent: the `be` tip asks «be ছাড়া অন্য কোনো ক্রিয়া আছে?», `countable` has the request / offer exception for *some*, and `to-ing` has no "things you enjoy" heading over *finish*.

## 2. Edit counts per file

| File | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js | 1 | 6 | 0 | 0 | 7 |
| extra.js | 0 | 6 | 0 | 0 | 6 |
| meta.js | 0 | 4 | 0 | 0 | 4 |
| lessons.js | 1 | 3 | 0 | 0 | 4 |
| practice.js | 6 | 11 | 0 | 0 | 17 |
| more/a1.js | 11 | 5 | 0 | 0 | 16 |
| more/a2.js | 4 | 0 | 0 | 4 | 8 |
| more/b1.js | 2 | 1 | 0 | 0 | 3 |
| i18n ui.json | 6 | 6 | 0 | 0 | 12 |
| i18n roadmap.json | 0 | 0 | 0 | 0 | 0 |
| **Total** | **31** | **42** | **0** | **4** | **77** |

New files: PRON-RULES.md, REVIEW.md.

## 3. Read in full, and only scanned

- **Read in full:** all 42 lessons (bodies, checks, practice prompts, `why`, `hint`); all 22 decks (meaning and note of every card); 86 dialogues, 54 examples, patterns, pause sets and idioms; meta.js; 784 exact interface strings and 274 patterns; the 39 filled roadmap titles.
- **Scanned only:** the `pron` column. The 107 rows with no lookup counterpart were read one by one; the other 697 rest on `pron_check.js` (byte-equal to the lookup). tools/i18n/bn/NOTES.md (glossary and doubts table). The 1,783 empty roadmap entries (other courses' roadmaps, not shown to this course).
- **Not done:** no audio was heard, no device render was seen, `road.py` and `link_roadmap.py --check` could not run here.

## 4. For a native speaker: the ten things to check first

1. **The pron key on a real phone.** Is a bare medial consonant read with অ (ˈকফি, ˈটক), also after ওয় (ˈওয়ক, ˈওয়টার)? Is ˈস read as *saw*? Do ˈমিল্ক and ˈডেস্ক get an added vowel? Is ৌ accepted for *go, no, phone*? Do the dotted letters ভ় থ় দ় ঝ় and ˈ inside a conjunct render? Are the two reading instructions in the `pron` lesson table understood?
2. **উইকেন্ড** as the one word for "weekend" (29 places), against সাপ্তাহিক ছুটি; and whether the Saturday–Sunday note is enough for a country whose weekend is Friday–Saturday.
3. **Grammar terms that are this course's coinages:** «অন্য ক্রিয়া» for non-be verbs, «তুলনার রূপ», «সবচেয়ে-র রূপ», «মালিকানা বোঝানো শব্দ», «অবস্থা বোঝানো ক্রিয়া», V3, «সিলেবল», and the roadmap's «কর্তা সর্বনাম», «কর্ম সর্বনাম».
4. **Interface core words:** «রিভিশন» (or ঝালাই); «5টি কার্ড রিভিশনের জন্য» reads unfinished (candidate «5টি কার্ডের রিভিশন বাকি»); Western digit + টি («22টি»); «টানা সঠিক 5»; «কুইজ দিন».
5. **Level titles** নবীন, শিক্ষার্থী, আলাপি, পর্যটক, স্থানীয়, দক্ষ, ওস্তাদ (আলাপি and দক্ষ were chosen over আড্ডাবাজ and প্রো).
6. **The Banglish lesson and deck claims** that rest on the writer's judgment: give an exam, good name, Myself Rafi, coaching, bachelor, mess, «কারেন্ট চলে গেছে», «এইচএসসি পাস করেছি» = *I finished high school*, *off day*.
7. **Mixed-language cues in prompts:** «(have দিয়ে)», «(will দিয়ে)», «(nice দিয়ে)», «(Can you …?)», «(দোকানিকে: Do you have …?)». Do they read naturally?
8. **Tense in translations:** «করেছি» with a past time for Past Simple («আমি গতকাল কাজ করেছি»), «এর মধ্যে» for *yet*, the reported-speech description «সে বলল যে "আমি যাব"», and «আদুরে» for *cute*.
9. **Idiom and proverb equivalents:** «পানির মতো সহজ», «শাপে বর», «পেটে আসছে, মুখে আসছে না», «গাইতে গাইতে গায়েন», «যস্মিন দেশে যদাচার», «দোয়া করি যেন ভালো হয়» for *fingers crossed*, «কস্মিনকালেও না» for *when pigs fly*.
10. **Single word choices:** «পদবি» for surname, «বেসিন» for sink, «মিস লি» for *Ms. Lee* (মিজ?), «লাতে», «হাতাকাটা জামা» for *vest*, «ভূতের সিনেমা» for *horror movies*, the letter names in the `alphabet` lesson (হেইচ, জেড, ডাব্লু) and «ফোঁটা» against «ডট» for the dot in an email address, «শুভ বিকেল», «Lang App-এ স্বাগতম».

## 5. Found but not fixed (out of scope, parity-bound, or for the lead)

**For the lead to decide**
- **Roadmap basis line.** The English source says "adjusted for Korean speakers"; the Bengali is a faithful translation («কোরিয়ানভাষীদের জন্য মানানসই করা») and was left. It is wrong for this course.
- **Roadmap `pron` title.** The shared English key "Pronunciation traps: R/L, F/P, TH" gives «উচ্চারণের ফাঁদ: R/L, F/P, TH», but the bn lesson is «উচ্চারণের ফাঁদ: Z/J, V/B/W, TH ও জোর». It needs a per-course source title, or approval to depart from the key.
- **Roadmap has no entry for `banglish` and `articles-3`** (the shared English roadmap has 39 keys).
- **parity.js prints `WARN unused deviations (stale?): lessons:banglish, lessons:articles-3`** (present before the review).
- **CHECKS `polite` 3, option «~ing (opening)».** The tilde is the Korean course's notation; the course writes «-ing রূপ». parity compares this option, so it needs a deviation entry.
- **Korean places in shared items** (Seoul, Busan, Daegu, Jeju, won, kimchi, Han Kang) are translated literally as profile §9 says, while lesson bodies use Dhaka and Cox's Bazar. A bulk "localisation" deviation would remove the mix.
- **Name readings were not checked against the en-US voice** (profile §6 rule 10): Rafi, Khan, Dhaka, Bangladesh, Bangla, taka, Cox's Bazar, Sylhet, Tagore, biryani. The table is in PRON-RULES.md §B.
- **Engine:** `dLoc()` must map `bn` to `bn-BD-u-nu-latn`, otherwise dates print Bengali digits (profile §10). Not verified here.
- **The one validator warning** («বাক্যটি ইংরেজিতে লিখুন», 22 vs 8 characters) is the profile's wording; check it in a real layout.

**Shared English side (listed, not changed)**
- `adjectives` type items accept only *This is / This one is cheaper*, not *It's cheaper* / *It's the best*.
- `smalltalk` type 2 does not accept *The weather is great / lovely today*; `email` type 1 does not accept *I'm on leave tomorrow*. The cues steer the learner.
- `articles-2` mc *I play ___ piano*: the distractor *a* is grammatical, though not the taught idiom.
- `countable`: a shared `why` says a plural follows *any* (*any question* is marked wrong); `continuous` treats *I'm walking to work every day* as wrong.
- `to-ing` lists *stop* under "-ing only"; `modals` names *must* in the title but the body shows only *must not*.
- *Who's your bias?* stays in the slang deck (shared English); its note now speaks of music-group fans in general.

**Left for the native check instead of changed**
- দুটো (as "both") beside দুইটা / দুইটি (counting) across files.
- lint reports 22 meaning variants (info), mostly a short deck meaning beside a longer lesson gloss, for example *It's a piece of cake*: «এটা পানির মতো সহজ» / «… (এক টুকরো কেক খাওয়ার মতো)».

## 6. Checks (final run, scratch outputs)

```
node tools/content/gen.js bn <scratch>/bn-r.js          wrote <scratch>/bn-r.js 328233 bytes
node tools/content/validate.js bn <scratch>/bn-r.js     PASS: all checks OK
node tools/content/parity.js bn <scratch>/bn-r.js       WARN unused deviations (stale?): lessons:banglish, lessons:articles-3
                                                        PASS: shared English side matches ko-en
node tools/content/lint.js bn <scratch>/bn-r.js         lint bn: 0 blocking · 22 meaning variants (info) · 0 K-pop leftovers (info)
node tools/content/alphabet_check.js bn <scratch>/bn-r.js   PASS alphabet bn: lesson 1, deck 21 «ইংরেজি বর্ণমালা» with 26 cards, English side matches the spec
node tools/content/bn/pron_check.js                     pairs 804 · not in lookup 107 · diff 0 · conflicts 0 · word mismatches 1 · prose mismatches 0 · encoding 0
python3 tools/i18n/gen.py bn <scratch>/i18n-bn-r.js     wrote <scratch>/i18n-bn-r.js · exact 784 patterns 275 road 39
node tools/i18n/validate.js bn <scratch>/i18n-bn-r.js   exact=784 patterns=275 warnings=1
                                                        PASS
```
Not run here: `tools/i18n/road.py check bn`, `tools/content/link_roadmap.py --check`.

Count patterns after the edits, at 1 | 2 | 5 | 22:
- `{n} cards due`: 1টি কার্ড রিভিশনের জন্য | 2টি কার্ড রিভিশনের জন্য | 5টি কার্ড রিভিশনের জন্য | 22টি কার্ড রিভিশনের জন্য
- `{n} due`: রিভিশন বাকি 1টি | রিভিশন বাকি 2টি | রিভিশন বাকি 5টি | রিভিশন বাকি 22টি
- `{n} cards`: 1টি কার্ড | 2টি কার্ড | 5টি কার্ড | 22টি কার্ড
- `{n} decks · {n} cards`: 1টি ডেক · 1টি কার্ড | 2টি ডেক · 2টি কার্ড | 5টি ডেক · 5টি কার্ড | 22টি ডেক · 22টি কার্ড
- `{n} days`: 1 দিন | 2 দিন | 5 দিন | 22 দিন
- `{n} min`: 1 মিনিট | 2 মিনিট | 5 মিনিট | 22 মিনিট
- `Level {n}`: লেভেল 1 | লেভেল 2 | লেভেল 5 | লেভেল 22
- `{n} XP total`: মোট 1 XP | মোট 2 XP | মোট 5 XP | মোট 22 XP
- `{n} left`: বাকি 1টি | বাকি 2টি | বাকি 5টি | বাকি 22টি
- `{n}× missed`: 1 বার ভুল | 2 বার ভুল | 5 বার ভুল | 22 বার ভুল
- `Imported {n} cards.`: 1টি কার্ড ইমপোর্ট হয়েছে। | 2টি কার্ড ইমপোর্ট হয়েছে। | 5টি কার্ড ইমপোর্ট হয়েছে। | 22টি কার্ড ইমপোর্ট হয়েছে।
- `Start typing · streak {n} · best {n}`: লেখা শুরু করুন · টানা সঠিক 1 · সেরা 1 | … 2 · সেরা 2 | … 5 · সেরা 5 | … 22 · সেরা 22
