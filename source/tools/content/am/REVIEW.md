# am-en review (AM-REVIEWER)

Cold review of the merged course "English for Amharic speakers" (`am-en`) and its Amharic interface. No native speaker has read any of it. Every check passes after the edits (final lines at the end).

## 1. What changed, grouped

### 1.1 Clock time: one policy for the whole course
**Policy.** It follows the `numbers` lesson's Ethiopian-time section, and that lesson now states it for the learner.
1. Amharic text always says which clock it means. Ethiopian time always carries a time-of-day word plus ሰዓት (ጠዋት 1 ሰዓት, ቀን 6 ሰዓት, ከሰዓት በኋላ 9 ሰዓት, ማታ 2 ሰዓት, ከምሽቱ 5 ሰዓት). International time is written in digits with a.m./p.m. (7 a.m., 3:30 p.m.) or as a clock reading (7:15).
2. When a gloss of an English sentence contains a time, the Ethiopian time comes first and the international time follows in brackets: «ጠዋት 1 ሰዓት (7 a.m.)». Exception: rows that teach how to read a clock face («ሰዓቱ 7:15 ነው።») use the digits only.
3. A bare «3 ሰዓት» with no time-of-day word, and "3 pm" without dots, are never used. A bare «3 ሰዓት» reads as 9 a.m. to an Ethiopian reader.
4. When the English leaves a.m./p.m. open, the gloss picks the part of the day the scene implies (meeting at three → ከሰዓት በኋላ 9 ሰዓት (3 p.m.)).

Type answers stay safe because the app's answer normaliser strips dots and spaces, so "11 p.m." matches the stored "11 pm".

Examples:
- `The meeting is at three.` «ስብሰባው 3 ሰዓት ላይ ነው።» → «ስብሰባው ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ላይ ነው።» (lessons.js prep, practice.js prep fill)
- `It's three o'clock.` «9 ሰዓት ነው» → «ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ነው» (a1 it-there: the row, the body sentence and the mc prompt)
- `It's a quarter to five.` «ለአምስት ሰዓት ሩብ ጉዳይ ነው» (that is Ethiopian 4:45, i.e. 10:45) → «ሰዓቱ 4:45 ነው» (deck 9)
- `It's three thirty.` «3 ሰዓት ተኩል ነው (በፈረንጅ ሰዓት)» → «ሰዓቱ 3:30 ነው», note «3:30 p.m. በሀበሻ ሰዓት ከሰዓት በኋላ 9 ሰዓት ተኩል ነው።» (deck 9); in the extra.js example «3 ሰዓት ተኩል ነው» → «ከሰዓት በኋላ 9 ሰዓት ተኩል (3:30 p.m.) ነው።»
- "3 pm" in deck 13, deck 15 and the extra.js dialogue → «ከሰዓት በኋላ 9 ሰዓት (3 p.m.)»
- `It's almost three.` «3 ሰዓት ሊሆን ነው» → «ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ሊሆን ነው»
- «በፈረንጅ ሰዓት 7 ላይ …» (lessons.js check, practice.js mc) and «ማታ 1 ሰዓት ላይ መጥቼ እወስድሃለሁ» → «ማታ 1 ሰዓት (7 p.m.) ላይ …»
- The brackets added or normalised to a.m./p.m.: a1 (7 a.m. ×2, 8 a.m. ×2, 11 p.m.), a2 (9:00 → 9 a.m. ×2), b1 (7:00 → 7 a.m. ×2, 11:00 → 11 p.m. ×2, 12:00 → 12 p.m.), deck 22 «ጠዋት 2 ሰዓት (8 a.m.) እንገናኝ».
- The `numbers` lesson gets one new paragraph that states the convention for the learner.

### 1.2 Notes that end in a quoted English example
**Decision: ። follows the closing quote**, whatever the quote itself ends with (. ? !). Profile §2 says ። ends every Amharic sentence, including one that ends in English. The quote's own punctuation belongs to the English. Applied to the 51 deck notes that lacked it, to the new arm-and-a-leg note (52 in all) and to the 6 idiom notes in extra.js. Example: `… መልሱ፦ "Nice to meet you, too."` → `… መልሱ፦ "Nice to meet you, too."።`. No `why`, hint or check explanation ends in a quote.

### 1.3 The same English, one gloss (lint 27 → 0 meaning variants)
- Pairs that differed only by a final ።: the lesson row now matches the card (I'm a student, I hope this email finds you well, Let's have lunch, I know him).
- I work at a bank «… እሠራለሁ። (ሁልጊዜ)» → «ባንክ ውስጥ እሠራለሁ». I'm working from home today: deck «ዛሬ ከቤት ነው የምሠራው» → «ዛሬ ከቤት እየሠራሁ ነው» (it shows -ing ↔ እየ-).
- Where's the restroom: articles-3 «ሽንት ቤት የት ነው?» → «መጸዳጃ ቤቱ የት ነው?» (the -ው = the contrast the lesson teaches). How much is this: «ይሄ» → «ይህ».
- It was nice talking to you: «ማውራት» → «ማውራቴ» (deck, lesson and the extra.js dialogue).
- I'll call you later: «እደውልልሃለሁ» → «እደውልልዎታለሁ» (generic *you* is polite). I go to bed at eleven: both rows «ከምሽቱ 5 ሰዓት (11 p.m.) ላይ እተኛለሁ». She has a car: both «መኪና አላት (have → has)».
- Pron lesson against deck 18: one gloss per word, alternatives with ` / ` (fan «አድናቂ / ማራገቢያ», fun «ደስታ / መዝናኛ», right, light, berry «እንደ እንጆሪ ያለ ትንሽ ፍሬ», full «የሞላ / የጠገበ» (was «ጠግቤያለሁ», a whole sentence), bought / asked «(buy / ask 2ኛ ቅርጽ)», using the profile's term instead of «ኃላፊ»).
- Ethiopian English: two-bedroom «ባለ ሁለት መኝታ ክፍል አፓርትመንት …»; He is the best student «እሱ ምርጡ ተማሪ ነው» everywhere (lesson row, order and type prompts, deck), because «ምርጡ» carries the -ው that matches *the*; Where are you going «ወዴት እየሄዱ ነው?».

### 1.4 Idioms and proverbs
- Rule: a card's meaning is the Amharic equivalent. The literal image goes in brackets after «ቃል በቃል፦», identical in the deck and the lesson: «በጣም ቀላል ነው (ቃል በቃል፦ አንድ ቁራጭ ኬክ ነው)», «ዋጋው እሳት ነው (ቃል በቃል፦ ክንድና እግር ያስከፍላል)» (the lesson had «በጣም ውድ ነው»), «በጥሞና እየሰማሁ ነው (ቃል በቃል፦ ሁለመናዬ ጆሮ ነው)» (deck had the calque «በሙሉ ጆሮዬ»), «ለዛሬ ይበቃናል» (lesson had «ለዛሬ በቃን»).
- Idioms lesson table now matches the cards and the idiom list: «በአንድ ድንጋይ ሁለት ወፍ መምታት», «ፈጽሞ አይሆንም (አሳማ ሲበር)».
- «ስሙን ስናነሳ መጣ!» is already identical in deck 19, the extra.js dialogue, the lesson table and the practice prompt. It was kept as the one rendering.
- Under the weather «ትንሽ ሰውነቴን አልተመቸኝም» (translated-sounding) → «ትንሽ አሞኛል» (deck and dialogue).
- Proverbs: the Amharic equivalents were checked and kept (ድር ቢያብር አንበሳ ያስር, ቀስ በቀስ እንቁላል በእግሩ ይሄዳል, ከዓይን የራቀ ከልብ ይርቃል, ወዳጅ በችግር ቀን ይታወቃል, አገሩን ሲሄዱ እንደ አገሩ). *Stay hungry, stay foolish* «ተርባችሁ ኑሩ … ሁኑ» (plural) → polite «ተርበው ይኑሩ … ይሁኑ».

### 1.5 English that exists only in this course
- `ethiopian-english`: every English line was read. All are correct and natural American English. One type item now also accepts *We got (some) new furniture*.
- Deck 22: *I'll be right back* / heard *I'm coming*, and *Turn on the light* / heard *Open the light*. No source confirms either form. Both are already worded «በኢትዮጵያ የሚሰማ፦» and both follow directly from Amharic, so they were **kept**, and each note now names the Amharic it comes from («እመጣለሁ», «መብራቱን ክፈት»). This keeps *Open the light* although profile §11 says it is not used: the lead should update §11.
- Deck 22 glosses changed to the polite generic *you*: «ብዕር ሊያውሱኝ ይችላሉ?», «ልንገርዎ».
- `stative-since`: the English side was compared item by item with hi-en (`hi/more/b1.js`). All 28 rows, checks and practice items are identical.

### 1.6 Politeness
- A word-level scan of every lesson body, title, blurb, check, practice q / why / hint / p, all of ui.json and all of roadmap.json found no learner-facing አንተ / አንቺ and no bare masculine imperative. The ones that remain are teaching mentions («ነኝ / ነህ / ነው») and friend dialogue lines.
- The phrasal lesson glossed *Turn on the light* / *Turn it on* with the masculine «አብራው» → polite «ያብሩት».

### 1.7 Interface
- `Accent` is the theme accent colour: in keys.json it sits beside `Text size`, the variants are *Accent red / green / blue / plum*, and ko has 강조 색상. «ቀለም» → «ማድመቂያ ቀለም». The swatch labels «ቀለም፦ ቀይ» were kept.
- `Text size` «ፊደል» (which reads as "letter / alphabet", the word the course uses for the Latin letters) → «የፊደል መጠን».
- `Type` «ይጻፉ»: kept. The keys.json context says it is the verb, and a polite verb on a chip is allowed (profile §2). The mode names in the Quiz patterns use the verbal noun «መጻፍ», which is consistent.
- Quiz «ኩዊዝ», Exam «ፈተና», Quick check / lesson check «አጭር ፈተና», Test everything «ሁሉንም መፈተን», blitz «ፈጣን ጥያቄ»: distinct enough, kept.
- Timers and counts: every count pattern is label + ፦ + number («ሰከንድ፦ {1}», «ደቂቃ፦ {1}», «ኩዊዞች፦ {1}»). They read the same at 0, 1, 2, 5 and 21. «የተሻለ ሰዓት፦ {4}:00» is an international clock reading, which fits §1.1.

### 1.8 Characters
- Every Ethiopic character in the pack, the interface and the roadmap is inside U+1200–U+137F. Nothing comes from outside: no Supplement (U+1380–139F), Extended (U+2D80–2DDF, U+AB00–AB2F), combining mark or Ethiopic numeral.
- The ð series (U+12F8–12FE) is used 195 times, all in pron fields: ዸ 108, ዺ 42, ዻ 20, ዼ 14, ዽ 10, ዾ 1. The interface uses none.
- No Hangul anywhere in the editable files.

## 2. Edit counts per file

| file (role) | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js (A) | 1 | 14 | 0 | 57 | 72 |
| extra.js (A) | 2 | 3 | 0 | 7 | 12 |
| meta.js (A) | 0 | 0 | 0 | 0 | 0 |
| lessons.js (B) | 2 | 22 | 0 | 2 | 26 |
| practice.js (B) | 1 | 0 | 0 | 1 | 2 |
| more/a1.js (C) | 4 | 3 | 0 | 5 | 12 |
| more/a2.js (D) | 0 | 0 | 0 | 2 | 2 |
| more/b1.js (D) | 0 | 2 | 0 | 5 | 7 |
| i18n/am/ui.json (I) | 2 | 0 | 0 | 0 | 2 |
| i18n/am/roadmap.json (I) | 0 | 0 | 0 | 0 | 0 |
| PRON-RULES.md (lead) | 0 | 0 | 0 | 1 (§7 reviewer's check) | 1 |

No pron value was changed or typed.

## 3. Read in full vs scanned
- **Read in full:** decks.js (all 22 decks, every note), extra.js, meta.js, the lesson bodies of lessons.js (alphabet to phrasal, numbers, email opening, idioms), the whole `ethiopian-english` lesson, deck 22, the profile §2, §8–§11 and the digest.
- **Compared by script:** `stative-since` against hi-en.
- **Scanned only:** practice.js and the bodies, checks and practice of more/a1.js, a2.js and b1.js. These were covered by script (politeness, clock-time, quote endings, meaning variants, Korean leftovers) and read only around each hit. ui.json was covered by script plus a read of the Accent / Type / Quiz / Exam / count / timer strings. roadmap.json was scanned by script only.
- **Outside the brief's list:** two Grep lines of `src/app.html` (`normT`, `normKo`), read to confirm that "p.m." in a prompt cannot break a type answer.

## 4. For a native speaker (test these first)
1. Clock glosses: «ከሰዓት በኋላ 9 ሰዓት (3 p.m.)», «ከምሽቱ 5 ሰዓት (11 p.m.)», «ማታ 1 ሰዓት (7 p.m.)», «ሰዓቱ 4:45 ነው». Are the time-of-day words natural, and is the bracket convention clear?
2. «ስሙን ስናነሳ መጣ!» for *Speak of the devil*: is there an established Amharic saying to use instead?
3. Deck 22 heard forms and their sources: *I'm coming* «እመጣለሁ», *Open the light* «መብራቱን ክፈት», *Happy night* «መልካም አዳር», *father / mother* to elders.
4. Interface «ማድመቂያ ቀለም» (Accent) and «የፊደል መጠን» (Text size).
5. «ኩዊዝ» / «ፈተና» / «አጭር ፈተና»: clearly different things to a learner?
6. Idiom equivalents: «ዋጋው እሳት ነው», «ትንሽ አሞኛል», «በጥሞና እየሰማሁ ነው», and the «ቃል በቃል፦» bracket style.
7. The ዸ series in the aid (195 uses, including ዾ once) on stock Android, iOS and Windows fonts, and whether readers take it as "a kind of d".
8. The 6th-order rule sentence «በዚህ መርጃ ሳድስ ሁልጊዜ ያለ አናባቢ ይነበባል» against long runs (ስትሪይት, ቴክስትስ).
9. «እሱ ምርጡ ተማሪ ነው» as the gloss that carries *the* (-ው).
10. Proverb pairs: «ድር ቢያብር አንበሳ ያስር» (*Two heads are better than one*), «ቀስ በቀስ እንቁላል በእግሩ ይሄዳል» (*Slow and steady…*), «እውነት ታሸንፋለች» (*Honesty is the best policy*).

## 5. Found but not fixed (outside scope)
- `deviations.p.json` and `deviations.json` contain 2 Hangul characters each. The brief says no Korean characters under tools/content/am, but deviation files are not editable by the reviewer.
- `python3 tools/i18n/road.py check am` crashes in this environment with `OSError: [Errno 7] Argument list too long: 'node'` (it passes a large script through `node -e`). The crash was already there before this review and is not caused by content. The i18n validate run covers the 39 roadmap strings (PASS).
- parity warns about unused deviations (lessons:ethiopian-english, lessons:stative-since, lessons:articles-3, items:third-s#check0, relative#check0, passive#check1, third-s#0, countable#4, can-like#0, smalltalk#4). These are stale entries for the lead.
- A final ። on glosses is not uniform across writers: card meanings and the a1 ex rows have none, while the B and D ex rows have it. Only the duplicated strings were aligned; a course-wide rule is for the lead.
- Friend-register cards use masculine አንተ for a generic friend (*Hey!*, *You're so funny*, *I'm proud of you*, *Hang in there*). Profile §2 allows this. A native may prefer gender-free glosses where no scene is given.
- Profile §11 still says *open the light* "is not used". It is now a «የሚሰማ» card in deck 22 (see 1.5).

## 6. Final check output
- validate: `PASS: all checks OK`
- parity: `PASS: shared English side matches ko-en`
- lint: `lint am: 0 blocking · 0 meaning variants (info) · 0 K-pop leftovers (info)`
- alphabet_check: `PASS alphabet am: lesson 1, deck 21 «የእንግሊዝኛ ፊደላት» with 26 cards, English side matches the spec`
- pron_check all --strict (exit 0): `pairs 814 · scaffold (no fidel yet) 0 (0 in lookup, 0 need new IPA) · new (not in lookup) 65 · pattern 0 · banned 0 · diff 0 · conflicts 0 · word mismatches 0 · prose mismatches 0`
- pron_am --selftest: `selftest: 36 pairs, 13 bad inputs, 40 sample rows · all OK`
- i18n validate: `PASS`

## Edits per role
- A: 84
- B: 28
- C: 12
- D: 9
- I: 2
- lead: 1
