# en-ar cold review (EN-AR-REVIEWER, 2026-11-19)

Scratch: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/arR/` (backup of the files before review in `arR/bak/`).

## Batch 0: the vowelling (first job)

**Method.** `arR/words.js` lists every distinct Arabic token in decks-*, extra-*, lessons-* with its respell.js romanisation, count and first locations (`arR/words.tsv`, 772 distinct tokens), plus every consonant skeleton written with more than one vowelling (`arR/multi.tsv`, 45 skeletons). The whole list was read word by word for short vowels, shadda, sukun, hamza seats, ة, ى, tanwin, sun/moon article and the pausal rule.

**Result of the read.** Reading the list found no wrong short vowel, missing shadda / sukun, wrong hamza seat or wrong ة / ى in a real (taught) word. The dictionary check below then changed two vowellings: the initial sukun of نْيُويُورْك and fu → fa in الْفُطُور. All 45 skeleton variants are legitimate pairs (اِسْمُكَ / اِسْمُكِ, دَرَسَ / دَرَّسَ / دَرْس, مَدْرَسَة / مُدَرِّسَة, عُمَر / عُمْر, مَن / مِن, the ة / ةْ pairs, letter-shape table cells). Every non-word in the list is a deliberate wrong option (الْبَيْتِي, الْمَدِينَتِي, السَّارَة, الشِّيكَاغُو, طَالِبَه, مُدَرِّسَه, سَيَّارُون, كِتَابُون, كُتُبُون, جَدِيدُون, كَبِيرُون, رَخِيصُون, مَدِينِي, قَاهِرَة) and was checked in context: each is offered as wrong and is wrong. Unvowelled tokens in the list (أين, عند, ليس, ما, من, هل, ال, مِائَة) are in titles, notes or headings, not in pron-bearing strings.

**Pausal rule.** Applied consistently: no -un / -in anywhere; -an only with its ا; possessive -ka / -ki / -hu / -hā nouns appear only as subject or predicate (اِسْمُكَ, حَالُكِ, زَوْجُكِ in أَيْنَ زَوْجُكِ, قَهْوَتُكَ as predicate, اِسْمُهَا in a nominal clause); after prepositions only ـي and the fixed forms.

**لَم (lead's question).** The course rule leaves every final letter bare: مِن, عَن, هَل, كَم, إِن, أَن, لَوْ (diphthong) are all written without sukun. لَم is therefore right under the course rule; the tool's rejection of لَمْ is consistent and needs no change.

**The ةْ convention: every place it is used** (all checked: each is the first word of an iḍāfa)
- مَحَطَّةْ الْقِطَار: decks-b (Travel), extra-b (2 rows), lessons-2 idafa (body, 2 ex, check, mc, or), lessons-3 directions (body, ex, tip, check, mc, fi, ty)
- جَامِعَةْ تُولْسَا: extra-a EXAMPLES, lessons-2 idafa (body, ex, check, ty)
- مَدِينَةْ نْيُويُورْك: lessons-2 idafa body
- سَيَّارَةْ الْمُدَرِّس (الْجَدِيدَة): lessons-2 idafa (ex, or)
- سَيَّارَةْ أُجْرَة: decks-b, extra-b (indefinite iḍāfa)
- تَذْكِرَةْ الْقِطَار: decks-b
- غُرْفَةْ النَّوْم: decks-b, extra-b
- لُغَةْ الضَّاد: extra-a DIALOG
- مُدَرِّسَةْ الْعَرَبِيَّة: lessons-3 roots ex
- ثَلَاثَةْ كُتُب: lessons-2 numbers body (number + counted noun is an iḍāfa)
- No iḍāfa with a ة first word was found written with plain ة in a correct string. One wrong option (directions check, مَحَطَّة قِطَار) was aligned to ةْ.

**Dictionary checks** (Wiktionary, read through mirrors from WebSearch results; Almaany and Hans Wehr were not reachable):
- نِيُويُورْك: Wiktionary MSA gives نِيُويُورْك (niyūyork). The course's نْيُويُورْك (from profile §2.7) begins with a sukun, which Arabic spelling does not allow. **Changed** to نِيُويُورْك *niyūyūrk* in all 6 places (extra-a 1; lessons-2 5: nisba body, nisba ty answer, hint and why, idafa body) and the 2 inline italics. `docs/profiles/en-ar.md` lines 101, 549 and 777 still show the old form (outside this folder): the lead should update them or overrule this change.
- فُطُور: Wiktionary MSA gives فَطُور *faṭūr* = breakfast, فُطُور *fuṭūr* = the act of breaking the fast. **Changed** the card آكُل الْفُطُور → آكُل الْفَطُور *ākul al-faṭūr* (decks-b). Both are heard; native check.
- حُمُّص: Wiktionary gives حُمُّص as the (colloquial) name of the dish and حِمِّص / حِمَّص for chickpeas in MSA. The card (meaning "hummus") is kept; its note "Also the word for chickpeas" was narrowed to the Levant.
- شَقَّة (also شِقَّة, شُقَّة), مَتْحَف (also مُتْحَف), الْأَرْبِعَاء, هَال (= هَيْل, cardamom), غَالِي (the pausal / informal form of غَالٍ): confirmed as written.
- Digits: Wikipedia says Eastern and Western digits are both used in Arabic-speaking Asia, Egypt and Sudan, with Western digits gaining ground in Saudi Arabia; the Maghreb uses only Western digits. The card note and the numbers body overstated it; both corrected.
- Weekend: The National (2021) lists Fri–Sat for Algeria, Bahrain, Egypt, Iraq, Jordan, Kuwait, Libya, Oman, Qatar, Saudi Arabia; Sat–Sun for Lebanon, Morocco, Tunisia and (since 2022) the UAE. "Most Arab countries" is true; kept.
- Every other word was checked by reading only.

**Inline romanisation.** repron only rewrites {{ex}} and deck rows, so `arR/inline.js` pairs each Arabic run in a lesson body with the `<i>…</i>` after it (including the "Said" table columns) and compares with respell: 260 pairs, 0 mismatches after the edits.

## Writers' doubts: verdicts
- أَنَا جَيِّد as a wrong answer for "I'm fine": it is a calque, not a grammar error, so it may not be a scored-wrong option. **Replaced** in the greetings mc with صَبَاح النُّور; the tip keeps it as a wrong → right pair with the claim "sounds like 'I'm a good person'" removed (also in the Traps card note).
- صَبَاح النُّور / مَسَاء النُّور: correct standard replies. Kept.
- عَفْوًا: correct for "you're welcome" and for "pardon?". Kept.
- مُسْتَشْفَى masculine: correct (مُسْتَشْفَى كَبِير). Kept.
- 11–19 bare (أَحَد عَشَر, ثَلَاثَة عَشَر, اِثْنَا عَشَر): consistent with the word-by-word pausal rule; full forms are aḥada ʿashara, thalāthata ʿashara. Native check.
- Number polarity (ثَلَاثَةْ كُتُب / ثَلَاث سَيَّارَات): correct.
- أُرْدُنِّيّ, بَيْتُهُ: correct.
- Broken plurals فَنَاجِين, مَطَاعِم, طُلَّاب: correct.
- يَعْمَل الطُّلَّاب (right) vs يَعْمَلُون الطُّلَّاب (wrong): correct standard MSA teaching.
- هُنَاكَ: correct (final fatha is part of the word; also said hunāk). Kept.
- لَم without sukun: right under the course rule (see above). No tool change.
- Spoken Arabic deck forms (ēh/shū, ʿāyiz/biddī, kwayyis/mnīḥ, lēh/lēsh, aywa/ē, mīn, fēn/wēn, izzāy/kīf, imta/aymta, kām/kam, bikām/addēsh, dilwaʾti/halla, fī, mish, hina/hōn, māshī): match common Cairene and Levantine usage as far as I know. Native check.
- هَال: a real word (Wiktionary: = هَيْل, cardamom; usual in the Gulf). Kept.
- Sound descriptions (ay ≈ "bite", aw ≈ "how", غ ≈ gargled / French r, ح fogging a glass, ق further back): acceptable.
- Cultural notes (Arabic coffee with cardamom in small cups, dates with coffee, ṭaʿmiyya in Egypt, riyal / dirham / pound / dinar by country): fine.

## Batch 1: decks-a.js (3 edits: wrong teaching 1, wording 2)
- ٣ note: "Used in Saudi Arabia, Egypt and the Gulf" → Eastern digits are common in Egypt, the Levant and the Gulf next to Western ones; the Maghreb writes Western digits.
- حُمُّص note narrowed (see dictionary checks).
- خَمْسُون note: "خَمْسَة + -ūn" (not literally true) → "From خَمْسَة (five): the tens end in -ūn."

## Batch 2: decks-b.js (4 edits: wrong language 1, wrong teaching 3)
- آكُل الْفُطُور → آكُل الْفَطُور (dictionary form for breakfast; pron regenerated).
- فِي الْمَسَاء note said the evening "is said with فِي" as a rule; a one-word form exists. Now: "The everyday way".
- عَلَى طُول note "Heard everywhere in this sense" → "The everyday spoken phrase, understood across the region" (it is not formal MSA).
- بِخَيْر note: removed "I'm a good person".

## Batch 3: extra-a.js (1 edit: wrong language 1)
- نْيُويُورْك → نِيُويُورْك (dialogue).
- إِمِيلِي (Emily) kept: both إميلي and إيميلي are in use; إيميلي is the commoner spelling (native check).

## Batch 4: extra-b.js (0 edits). Read in full; nothing found.

## Batch 5: lessons-1.js (3 edits: practice 1, wrong teaching 1, wording 1)
- greetings mc: أَنَا جَيِّد (a calque, not wrong) replaced as a distractor by صَبَاح النُّور; why rewritten.
- greetings tip: wrong → right pair kept, the false "I'm a good person" claim removed.
- sukun-shadda body: "both are short words in English grammar books too" → "English-language textbooks call them by their Arabic names too".

## Batch 6: lessons-2.js (6 edits on 5 lines: wrong language 3, wrong teaching 3)
- nisba body, nisba ty (answer, hint, why) and idafa body: نْيُويُورْك → نِيُويُورْك, italics niyūyūrk.
- numbers body: digit claim corrected; ٧ / ٨ are "the same shape upside down", not mirror images.
- adjectives body: two adjectives "usually joined by وَ" → "often" (plain juxtaposition is common).

## Batch 7: lessons-3.js (4 edits: wrong teaching 3, practice 1)
- plurals body: "Most everyday nouns" → "Many"; "the consonants stay in place and the vowels move" → "the root consonants keep their order, and the vowels around them change" (أَوْلَاد adds a letter).
- negation body: "as in the example below" pointed at لَا أَتَكَلَّم الْعَرَبِيَّة جَيِّدًا, which has no لَيْسَ; the example is now أَنَا لَسْتُ طَالِبًا *anā lastu ṭāliban* (pron from the tool; still 8 examples).
- adverbs body: removed the false reason "because مَسَاء ends in a hamza and has no extra ا for the ending" (مَسَاءً exists; it simply has no extra ا).
- directions check: the wrong option مَحَطَّة قِطَار aligned to the course's ةْ (مَحَطَّةْ قِطَار).

## Batch 8: respell.js (1 tool fix)
- A string with no letters (a lone tatweel ـ, as in the shapes tables) crashed with a TypeError; it now throws the tool's normal «word» error. No pron changed (repron: 510 read, 0 rewritten).

## Practice checks
- Every order item (all 84, two-tile ones included) was read for a second valid order. The ones that could be reordered already carry a cue ("start with the name", "verb, then the name", "time at the end", "start with 'tomorrow'"). Remaining sentences with a definite subject + place (الْمُدَرِّسَات فِي الْمَدْرَسَة) could in theory front the place, which is marked and not a normal answer; left as is.
- No fi / ty item depends on a contrast shown only by a vowel mark (script check: no answer and wrong option share a skeleton).
- No two cards share a target across decks; no two cards in one deck share a meaning.
- Type items show as word tiles by default, so they behave like order items: those with a movable subject, pronoun or time word already list their other orders (أَبِي فِي الْمَكْتَب الْآن | الْآن أَبِي فِي الْمَكْتَب | …); none blocks.
- Profile .md lines that now disagree with the course: 101, 549, 777 (نْيُويُورْك); 264 and 768 (أَنَا جَيِّد "sounds like 'I'm a good person'", a claim this review removed from the course). الْفُطُور does not appear in the profile.
- Standing rule: validator counts ≥ 2/2 in every set (greetings 2/3, numbers 2/2, have 2/2 are the tightest).

## Final runs
- `node --check` on every JS file: OK.
- `node tools/target/repron.js ar`: 510 prons read, 0 rewritten.
- `node tools/target/gen.js ar`: 28/28 lessons, 17 decks, 291 cards (pack in the HOLD temp path).
- `node tools/target/validate.js ar`: PASS: all checks OK.

## Ten things a native speaker should check first
1. **The ةْ convention** (sukun on ة for the first word of an iḍāfa, said -at: مَحَطَّةْ الْقِطَار, جَامِعَةْ تُولْسَا, غُرْفَةْ النَّوْم, سَيَّارَةْ أُجْرَة, ثَلَاثَةْ كُتُب …). Not standard spelling; full list above. Also how the ar-SA voice reads it.
2. **The word-by-word pausal rule** as a whole: كِتَاب الطَّالِب *kitāb aṭ-ṭālib*, مَعَ السَّلَامَة *maʿa as-salāma*, case vowel kept only before a suffix (اِسْمُكَ), -an kept wherever ًا is written (أُرِيد شَايًا, لَسْتُ طَالِبًا).
3. **11–19 written bare**: أَحَد عَشَر, اِثْنَا عَشَر, ثَلَاثَة عَشَر *thalātha ʿashar* (full form thalāthata ʿashara).
4. **نِيُويُورْك** (changed from the profile's نْيُويُورْك) and **إِمِيلِي** (or إِيمِيلِي?): the spellings of foreign names.
5. **الْفَطُور vs الْفُطُور** for "breakfast" (changed to the dictionary's faṭūr).
6. **The Spoken Arabic deck notes** (Egyptian and Levantine forms, deck "Spoken Arabic").
7. **بِخَيْر vs أَنَا جَيِّد**: is أَنَا جَيِّد really avoided for "I'm fine", as the tip says?
8. **عَلَى طُول** for "straight ahead" in a course of MSA, and **لَيْلَة سَعِيدَة / مَرْحَبًا** as the late-night and afternoon greetings.
9. **The courtesy notes**: إِن شَاءَ اللّٰه as a polite "maybe", عَفْوًا as "pardon?", دُكْتُور / طَبِيب, أُسْتَاذ as "sir", صَدِيقَتِي (does "my friend (a woman)" suggest "girlfriend"?).
10. **Naturalness of a few model sentences**: أَيّ يَوْم الْيَوْم؟ (What day is it today?), عُمْرِي خَمْسَة وَعِشْرُون without سَنَة, مِن فَضْلِكَ أَعِد (Please repeat), هَال (cardamom) in a beginner deck, غَالِي as the form of "expensive".

## What was read
- In full: decks-a, decks-b, extra-a, extra-b, lessons-1, lessons-2, lessons-3, respell.js, repron.js, docs/TARGET-REVIEW.md, docs/TARGET-BRIEF.md, docs/PRACTICE-SPEC.md, the last section of docs/PHASE2-BRIEF.md.
- In part: profile .md §2, §3, §6, §7, §11 (and the lines that mention changed strings); profile.json top keys and lesson list.
- Not opened: profile .md §4–5, §8–10.
- Checked against a source: نِيُويُورْك, فَطُور, حُمُّص, شَقَّة, مَتْحَف, الْأَرْبِعَاء, هَال, غَالِي, إميلي / إيميلي (Wiktionary or web), plus the digit and weekend claims. Everything else by reading only. Almaany and Hans Wehr were not reachable.
