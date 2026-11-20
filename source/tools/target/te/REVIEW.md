# en-te cold review (EN-TE-REVIEWER, 2026-11-19)

Brief: docs/briefs/en-te-R.md + docs/TARGET-REVIEW.md. Saved batch by batch. Scratch: /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/teR/ (original copy of the folder in `orig/`, checker `romcheck.js`, fold checker `foldcheck.js`).

## Batch 0: the pron tool (respell.js)

Changes:
- `FSTEM` + `టిఫిన` (English "tiffin": ఫ = f). టిఫిన్ now *ṭifin*; repron rewrote 2 stored prons (decks-b, lessons-3).
- `VER` + `సీతాఫలం సీతాఫలాలు` (Sanskrit compound, ఫ = ph: right as generated).
- Header comment records the æ decision and మధ్యాహ్నం.

Decisions:
- **æ of English loans: by rule, not shown.** `pronPattern` (profile.json, not mine to edit) has no æ letter, and no letter of the key is closer (ē would be wrong: Bhaskararao & Ray keep /eː/ and /æː/ apart in loans: /bæːɳɖu/ 'band' vs /beɳɖu/ 'cork'). So the pron keeps the spelling (బ్యాంకు *byānku*), and the reading rule "yā in an English loan = the a of *bank*" is stated in the card note (బ్యాంకు పక్కన) and in the lesson where బ్యాంకు is first used. The only ్యా loan in the course is బ్యాంకు (and its case forms); విద్యార్థి, బిర్యానీ, మధ్యాహ్నం have a real y.
- **మధ్యాహ్నం** keeps *madhyāhnam* (the spelling; the voice reads the letters). Everyday speech often says *madhyānnam*: one note in the `time` lesson, not in the pron.
- **ts / dz of చ / జ: still not shown.** The consonants-1 table (చాలా, చదువు, జరుగు said ts / dz; చీకటి, చెప్పు, చిన్న said ch) agrees with the rule in the sources: front vowel → ch / j, non-front vowel → ts / dz in native words. The six words themselves are not listed in any source I could open; they follow the rule (all native words).
- Loans to listen to (output kept, all follow the spelling, no change): థాంక్స్ *thānks* (card note added: th = t with a puff, not English th), దోశ *dōsha*, టీచర్ *ṭīchar*, ఇంజనీర్ని *injanīrni*, అంబులెన్స్ *ambulens*, ఇంగ్లీష్ *inglīsh*, డల్లాస్ *ḍallās* (English d said retroflex, the usual Telugu reading).

Verified against a source I opened:
- Bhaskararao & Ray 2016 (JIPA, Cambridge Core reader): "[ʧ] and [ʤ] occur before front vowels, [ʦ] and [ʣ] occur before non-front vowels" (native words; Sanskrit words bring ʧ back: /ʦɐːpɐ/ 'mat' vs /ʧɐːpɐm/ 'bow'); /æː/ "acquire[s] phonemic status when words borrowed from English are included" (/bæːɳɖu/ 'band', /mæːʈu/ 'mat'); aspiration "essentially a feature found in borrowed vocabulary".
- r12a, Telugu orthography notes: చ = t͡s, జ = d͡z "in native Dravidian words when followed by a, o or u sounds"; the headstroke (tick) "is replaced when marks appear above the consonant" (examples కి, క్); sunna = homorganic nasal before a plosive, m elsewhere and finally.
- Wiktionary via kaikki.org: సీతాఫలము IPA /siːt̪aːpʰalamu/, from Sanskrit सीता + फल (so ph is right); థ IPA /t̪ʰa/; బ్యాంకు "borrowed from English bank" (romanised *byāṅku*, no IPA); టిఫిన్ = alternative spelling of టిఫిను (romanised *ṭiphin*, no IPA, no etymology: the f is my call, as an English loan).
- Not reachable: en.wiktionary.org (not on the fetch allowlist); direct downloads (proxy 403). Not tried: Andhra Bharati, Brown's dictionary, LearnTelugu / TeluguPod101. Not verified: madhyānnam as the everyday form; the f of టిఫిన్ in speech.

Lesson inline romanisation: `romcheck.js` compares every `<b>Telugu</b> <i>roman</i>` pair, every romanised table cell, every "Build / Type roman (gloss)" prompt and every script-lesson fill meaning "(roman)" with respell: 0 mismatches after the tool change.

## Batch 1: decks-a.js, decks-b.js, extra-a.js, extra-b.js (read in full)

decks-a.js
- wrong teaching: కా note said "the tick on top stays"; sources only say the tick is replaced by signs above the letter, and ా is joined at the top right: note now says only that (no claim about the tick).
- wrong teaching: కోడి note "a tapped d between vowels" (unsourced) removed; meaning "hen; chicken" (the example row says the rooster crows: కోడి కూస్తుంది), note names కోడిపుంజు for rooster.
- gap (writers' point): Consonants 2 had no cards for థ and భ: added థ (*tha*, కథ) and భ (*bha*, భోజనం, భాష); ధ and బ notes adjusted (deck now 20 cards).
- wording: థాంక్స్ note: th is t with a puff, not English th.
decks-b.js
- wrong teaching: పుస్తకాలు / మంచం notes "drops -ం" → "swaps -ం for -ాలు".
- pron: టిఫిన్ *ṭifin* (tool).
- teaching: బ్యాంకు పక్కన note gives the æ reading rule; గుడి ఎదురుగా note: గుడికి ఎదురుగా is just as common (writers' point; both accepted wherever typed); అన్నిటి కంటే note: also spelled అన్నింటి.
extra-a.js, extra-b.js: no change needed. Checked every dialogue and example: natural, register consistent (మీరు to strangers, respect plural for elders: మా అమ్మమ్మ … ఉంటారు / వచ్చారు).

## Batch 2: lessons-1.js (read in full)
- wrong teaching: `questions` showed కాఫీనా but taught only -ం → -మా: added "and కాఫీ becomes కాఫీనా, as in the table" (writers' point on -ఆ; no general rule stated, since none is sourced).
- wrong teaching (writers' point): the `questions` tip called a rising voice alone simply wrong; now: heard in casual speech, but the normal question has -ఆ (pair kept).
- practice (writers' point): నేను డాక్టర్ని కాదు vs నేను డాక్టర్ కాను: unsourced either way, so `requests` ty #14 gets the cue "(use కాదు)" and accepts only the -ని కాదు forms (an interim version accepted కాను; removed); the కాను form is in the native-check list.
- wording: `conjuncts` అంబ glossed "mother: a poetic word".
- Kept, listed for the native check: bare నేను డాక్టర్ (without -ని) stays a wrong option (profile §7 builds strand (a) on it); it is heard in casual speech with English job words.
- Kept: the `vowel-signs` description of the tick (ి ీ replace it: matches r12a; ు ూ keep it: unsourced, see the correction below); the script-lesson glosses శ్రీ, గాజు (glass; bangle), ఊక (bran; husk), కేక (shout), ఏకాకి (a loner) are right.

### Batch 2 follow-up (after the advisor check)
- `no-is`: dropped my own unsourced sentence on నేను డాక్టర్ కాను.
- Bare నేను డాక్టర్ (writers' point): since it is heard in casual speech, it is no longer offered as a plain wrong answer without a cue: `no-is` fill #9 and type #12 and order #6 now say "(with the person ending)"; the fill distractor డాక్టర్ became డాక్టర్ గారు (never after yourself). The bare plural with మేము gets the same cue (`no-is` or #7, ty #13; `intro` or #7). Standing-rule counts unchanged.
- æ rule written into `have` (first బ్యాంకు in a lesson body); madhyānnam note written into `time`.
- Correction to batch 0: r12a supports only "signs above the letter replace the tick" (కి, క్); it says nothing about ు ూ keeping it (that part of `vowel-signs` is the writers', unsourced, in the native-check list). The బ్యాంకు etymology came from the Kiwix Wiktionary mirror (kaweah.freedombox.rocks), not kaikki.

### Fold check (ENGINE FACTS: what typed romanisation folds to "almost")
`foldcheck.js` folds every romanised answer word (no macrons / dots, th → t, sh → s, ch → c, doubled letters once) and compares it with every Telugu word in the course and with the item's own distractors, skipping the engine's doubled-stem person-ending guard; `twin.js` builds the length twin of every answer word ending in a person ending. No `'!strict'` exists in the course; none added.
Pairs where an answer and a real, different-meaning form fold together (romanised typing of the wrong one is "almost", not wrong). Listed, not marked strict:
- script lessons (by design, the contrast is the point): ఈ / ఇ, ఊ / ఉ, ఏ / ఎ (vowels fi #9–11, ty #12–14); కే / కె, కి / కీ, ఆ / అ (vowel-signs fi, ty); డ / ఢ / ద, కో / కొ (consonants-1 fi, ty); ల / ళ, త / ట, పా / ప (consonants-2 fi #9–11, ty #12–14); ది / ద్ది, మ్మ / మ, డు / దు, క్క / క (conjuncts fi #9–11, ty #12–14).
- later lessons: `future` fi #10 రాడు (he won't come) / రాదు (she / it won't come), retroflex vs dental, the masculine / non-masculine hinge; `have` fi #9 లేదు / లేడు, same hinge; `like` fi #11 రాదు ~ రాడు; `future` ty #14 తినను (won't eat) ~ తిన్నాను (ate): double + length together; `plurals` ty #13 ఇళ్ళు / ఇల్లు (houses / house); `case` fi #11 అతన్ని (him) ~ అతని (his); `must-can` ty #14 దీన్ని ~ దీని; `questions` fi #10 ఎవరు ~ ఎవరూ.
- No single-consonant stem in a fi / ty answer has a past / negative length twin that is a real word (twin.js: 0; తాగాను / తాగను does not occur in an answer).
- Hygiene: no duplicate answers after normalising, no Latin-letter answers.

## Batch 3: lessons-2.js (read in full: numbers, intro, family, plurals, case, have, like, future, continuous)
Policy for "wrong options that may be right" (writers' list): where I cannot show the option is wrong, it is replaced by an option that is wrong on a point the lesson teaches (a wrong person ending or case), or the prompt gets a cue.
- practice (writers' point): `future` mc #2 distractor మీరు రేపు రారా? ("won't you come tomorrow?", a normal polite invitation) → మీరు రేపు వస్తుందా? (wrong person).
- practice (writers' point): `like` mc #2 distractor నాకు ఇష్టం కాదు (heard in speech) → నాకు ఇష్టం లేను; mc #5 మీకు రవి తెలుసు? (rising voice, possible in speech) → మీకు రవి తెలుసు ఉందా?; check #3 మీకు క్రికెట్ ఇష్టం? → మీకు క్రికెట్ ఇష్టమా ఉంది?
- practice (writers' point): `case` mc #4 distractor రవికి అడగండి → రవిలో అడగండి (writers doubted it; dative with అడుగు is heard regionally).
- practice: `continuous` mc #4 distractor వర్షం పడుతుంది (could be heard for ongoing rain) → వర్షం పడుతున్నారు; why rewritten.
- practice: `case` ty #14 "Mom is in the house" also accepts the respect plural (అమ్మ ఇంట్లో ఉన్నారు), as `family` teaches.
- practice: `intro` or #6, fi #10, ty #12 get the cue "(with the person ending)"; fi distractor టీచర్ → టీచర్ గారు (same policy as `no-is`).
- teaching: `have` gets the æ reading rule for బ్యాంకు.
- Settled, no change: మా అమ్మ vs నా అమ్మ (`family` says మా is usual, నా is heard: right); నలుగురం / మేము నలుగురం (right); human numbers (ఇద్దరు, ముగ్గురు, నలుగురు, ఐదుగురు, పది మంది: right); -కి / -కు (`case` says one ending, always -కు after నా / మీ / మా: right); continuous forms (చేస్తోంది taught, చేస్తున్నది accepted in fi #11, చేయట్లేదు accepted in ty #14 and named for recognition: right); ఇరవై రూపాయి (numbers ty #14 accepts only the plural; రూపాయి is a fallback tile only: fine); forms used before their lesson (వచ్చారు in `family` / `plurals`, ఉన్నారు from `greetings`): each is introduced in the body as a form to learn whole, so it is supplied, not assumed.

## Batch 4: lessons-3.js (read in full: past, past-neg, and-then, must-can, time, shopping, directions, compare)
- practice (writers' point): bare place after "go" (హైదరాబాదు వెళ్ళాను) is normal speech: `past` ty #14 and `time` ty #14 now also accept the bare place (హైదరాబాదు / హైదరాబాద్ వెళ్ళాను, … వెళ్తాను).
- practice: `and-then` mc #5 distractor రవి షాపు వెళ్ళి … (bare place, same reason) → రవి షాపులో వెళ్ళి …
- wrong teaching (writers' point): `must-can` taught నాకు వెళ్ళాలి as plainly wrong. It is heard in casual speech, so: the body now says only that నేను is the subject and -ఆలి takes no person ending (no claim either way about నాకు); the tip's wrong → right pair is now వెళ్ళాలిను → వెళ్ళాలి (a person ending on -ఆలి, unambiguous); check #1 distractor నాకు వెళ్ళాలి → నన్ను వెళ్ళాలి; mc #1 మీకు రేపు రావాలి → మిమ్మల్ని రేపు రావాలి; or #6 and ty #12 tile distractor నాకు → నన్ను (whys updated, keyword kept).
- practice (writers' point): `time` check #2 distractor అర ఏడు → ఏడున్నరకు ('at 7:30'; why says so); mc #2 అర ఆరుకు → ఆరుకు అర. ఒంటి గంట / ఒంటి గంటకు kept (right).
- wrong teaching (writers' point): `compare` taught -ది for a thing and -వాడు for a man only: added that a woman takes the non-masculine -ది (మా అక్క నా కంటే పెద్దది); అన్నిటి noted as also written అన్నింటి.
- wording (writers' point, bodies near the floor): `time` (246 English words) gets one line on the day names (ఆదివారం sun, సోమవారం moon); `directions` (246) one line on ఎలా వెళ్ళాలి? All 26 bodies are now 250+ English words (italic romanisation and Telugu not counted).
- Settled, no change: గుడి ఎదురుగా vs గుడికి ఎదురుగా (directions mc #2 offers neither as a wrong option; ty #15 accepts both); past-neg (one form, ఇంకా … లేదు): right; and-then (-ఇ forms తిని, వెళ్ళి, వచ్చి, చేసి, చూసి, కొని, తాగి, ఇచ్చి): right.

## Open points not tied to one file
- Near-duplicate cards between the deck halves (writers' point): no exact duplicates (validator: no WARN). Pairs such as నేను టీచర్ని కాదు (About me) / నేను డాక్టర్ని కాదు (Traps), నాకు కాఫీ వద్దు (Food) / ఇది వద్దు (Shopping), ఎవరు? / అతను ఎవరు? (Questions) teach the same point in another setting; kept, since each deck is studied on its own.
- Forms used before their lesson (వచ్చారు, ఉన్నారు): each first use is introduced in the body as a whole form to learn (greetings: ఉన్నారు; family / plurals: వచ్చారు "a past form you can learn whole for now"); kept.
- For the lead: the new cards థ and భ need audio clips; showing æ in the pron would need a `pronPattern` change in profile.json (not made).

## Edits per file and kind (running tally)
- respell.js: FSTEM + టిఫిన; VER + సీతాఫలం, సీతాఫలాలు; header notes (æ rule, మధ్యాహ్నం, సీతాఫలం).
- decks-a.js: wrong teaching 2 (కా tick, కోడి tap), gap 2 (cards థ, భ; ధ / బ notes), wording 1 (థాంక్స్), meaning 1 (కోడి hen; chicken).
- decks-b.js: wrong teaching 2 (పుస్తకాలు, మంచం), pron 1 (టిఫిన్), teaching notes 3 (బ్యాంకు æ, గుడికి ఎదురుగా, అన్నింటి).
- extra-a.js, extra-b.js: none.
- lessons-1.js: wrong teaching 2 (-నా question, rising-voice tip), practice 6 (requests #14 cue; no-is fi / ty / or cues and distractor, no-is or #7 / ty #13 cues), wording 1 (అంబ).
- lessons-2.js: practice 10 (future mc #2; like mc #2, mc #5, check #3; case mc #4, ty #14; continuous mc #4; intro or #6, or #7, fi, ty cues), teaching 1 (have: æ rule).
- lessons-3.js: wrong teaching 2 (must-can నాకు; compare woman -ది), practice 9 (past ty #14; time ty #14 answers and why, check #2, mc #2; directions ty #14 bare చార్మినార్; and-then mc #5; must-can check #1, mc #1, or #6, ty #12), wording 4 (madhyānnam, అన్నింటి, two padding lines), pron 1 (టిఫిన్, by repron).

## Native-check list (strings to check first)
1. నేను డాక్టర్ని vs bare నేను డాక్టర్ (no-is, intro): is the bare form acceptable in neutral speech? The course marks it wrong only behind a "(with the person ending)" cue.
2. నేను డాక్టర్ కాను / డాక్టర్ కాను vs నేను డాక్టర్ని కాదు (requests #14 now accepts only the latter, behind a cue); also bare మేము విద్యార్థులు vs విద్యార్థులం.
3. నాకు వెళ్ళాలి (must-can): how wrong is it? The course no longer offers it as a wrong option; it teaches నేను వెళ్ళాలి only.
4. -నా after a long vowel for the yes-no question (కాఫీనా; is టీనా? right?); and a rising voice alone (మీరు బాగున్నారు?) in casual speech, as the questions tip now says.
5. మా అక్క నా కంటే పెద్దది: -ది for a woman in neutral speech (or పెద్దవాళ్ళు / పెద్దామె?).
6. రాడు / రాదు, లేడు / లేదు (future fi #10, have fi #9): romanised typing folds them; should these be '!strict'?
7. బ్యాంకు said bænku, and the pron byānku with a note (æ not in the key).
8. హైదరాబాదు వెళ్ళాను, సోమవారం హైదరాబాదు వెళ్తాను, ఈ బస్సు చార్మినార్ వెళ్తుందా? (bare place now accepted); అమ్మ ఇంట్లో ఉన్నారు (respect plural for one's own mother, now accepted in case ty #14).
9. టిఫిన్ *ṭifin* (f), మధ్యాహ్నం heard as madhyānnam, దోశ *dōsha*.
10. The talakaṭṭu: ా joined at the top right (card note), ు ూ keeping the tick (vowel-signs body); and కోడిపుంజు, కథ, గుడికి ఎదురుగా, అన్నింటి as written in the notes.
