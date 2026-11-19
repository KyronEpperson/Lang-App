# en-hi cold review (EN-HI-REVIEWER, 2026-11-19)

## Batch 0: the Hindi word list and its romanisation
- Script (scratch hiR/words.js) listed every distinct Devanagari token in decks, extras and lessons: 931 tokens, each run through respell.js. Read in full.
- No wrong romanisation found by the generator: schwa deletion, nasals, retroflex, nuqta letters, loans (ŏ), numbers all right in the list.
- 12 warnings: केमिस्ट, स्वादिष्ट, लास्ट are right (final a after a cluster deleted) → added to VER. The other nine (ठं, पं, मुं, मूं, नमसते, नमस्त, मैंको, यहमें, वहने) are tiles or wrong-option distractors, not prons.
- Non-words in the list (कमरें, कमराएँ, कमरियाँ, किताबा, किताबियाँ, घरा, लड़काएँ, समोसी, देइए, मुझने, ठोड़ा, दुकाने, ज्ञाण, क्षान …) are checked below to be wrong options only.
- respell.js: 1 edit (VER +3).

## Batch 1: decks-a, decks-b, extra-a, extra-b (read in full)
- Hindi in the decks and extras is sound: genders checked in agreement, from my own knowledge (no dictionary lookup was needed; none of these is in doubt) (मेज़ f, बुकिंग f, तबीयत f, मंज़िल f, सामान m, दाम m, बैग m, साइज़ m, चाय f, किताब f, ट्रेन f, रसीद f, रसोई f, खाँसी f, मिठाई f, जगह f, ठंड f, बारिश f, घी m, नाश्ता m). टिकट never shows agreement anywhere in the course (no gendered word depends on it), so the m/f wavering in speech does not matter; keep it that way.
- decks-b «फिर» note said "and then" is फिर, not और: wrong (और फिर is normal, and the conjunctions lesson teaches it). Rewritten.
- decks-b «आम» note: unrelated हिंदू/हिंदी aside replaced by a real usage (आम लोग).
- Spelling: kin + जी settled as पिताजी, माताजी joined (profile), all others with a separate जी (दादा जी, दादी जी, नाना जी, चाचा जी), as the family lesson body writes them. Changed decks-a (2 notes), extra-a (1 pattern), lessons-3 (1 fill item). दादीजी stays only as an extra accepted answer.
- चाबी is the taught spelling (चाभी only in a note and as an accepted answer); अमरीका is taught (अमेरिका only as an accepted answer); मेन्यू, दवाई are the only spellings used. No change needed.
- Calques the writers doubted: कार्ड चलेगा?, आख़िरी दाम क्या है?, मेरी बुकिंग है।, पैदल दस मिनट लगते हैं। are all normal spoken Hindi; kept. दो चाय, दो समोसे, हर रविवार (no को) are correct.
- Edits: decks-a 3 (2 spelling, 1 note wording), decks-b 2 (1 wrong teaching, 1 wording), extra-a 1 (spelling), extra-b 1 (see batch 3).

## Batch 2: lessons-1, lessons-2, lessons-3 (read in full: bodies, checks, practice)
- Inline <b>Hindi</b> <i>roman</i> pairs and the romanisation in practice prompts compared with respell() by script: all match.
- Crutch sentence policy: kept in the four script lessons (vowels, consonants, consonants-2, conjuncts) only; removed from the 9 lessons-3 bodies that had it. lessons-2 already had none.
- The 14 `!strict` items (vowels 4, consonants 1, consonants-2 5, conjuncts 4) each test vowel length, retroflex vs dental, aspiration or the nasal marks; all kept.
- Wrong teaching fixed:
  - adjectives: "ends in -ā → it will change" had no exception; now "almost always", naming ज़्यादा and शादीशुदा (both in the course, both unchanging).
  - negation: table said मत is only for friends and न for आप, contradicting the decks (चिंता मत कीजिए, "Polite: मत कीजिए"). Now मत = don't in any command, न = softer, common with आप.
  - past: "can you add 'something'?" test given as absolute; added that a few verbs break it, naming the two in the course: लाना and भूलना (never ने).
  - infinitive: "को is a postposition for people and places" → "a postposition that follows a noun".
  - routine: "हर सोमवार needs no को" → works with or without को (both are standard).
- Wording: routine example and fill prompt "I go to the office on Monday" (habitual) → "on Mondays".
- Practice: habitual ty "Where do you live? (to a man)" now also accepts कहाँ रहते हैं (आप), as the questions lesson does; routine ty "My father gets up at six" also accepts पिता जी / पिता.
- Checked and right: साढ़े दो marked wrong for 2:30 (ढाई); एक बजा है / दो बजे हैं; सुबह without को; पिता, चाचा, दादा unchanged before a postposition; थीं for feminine plural and आप to a woman; पियो as the तुम form of पीना; चिंता न करो accepted; मैंने चाय पी ली accepted; मैं जानता नहीं accepted (emphatic word order, fine); यह / वह said yeh / voh; परसों both ways; future lesson's plans paragraph (हम कल आगरा जा रहे हैं) correct; बेटा to a daughter note true; uncle/aunt terms right (चाचा father's younger brother, मामा mother's brother, मौसा / फूफा aunts' husbands, बुआ father's sister, मौसी mother's sister).
- -ना है with feminine objects: the writers avoided feminine objects in have-to and should items (मुझे जाना है, आराम करना चाहिए, पानी पीना चाहिए); no claim that the form never changes in those patterns. Kept so.

## Batch 3: systematic checks on the whole course
- Order items (all 84 dumped): Hindi order before the verb is free, so items where another constituent could naturally come first got a cue: hona "This is my house" (start with यह); numbers sari price (start with यह); postpositions "We are in Delhi" (start with हम), "What's in this?" (verb last); habitual "Sarah lives in Delhi"; continuous "What is he doing?" (क्या वह कर रहा है is a different valid sentence); was "Where were you?", "I used to live in Boston"; infinitive "I have to work", "You should drink water" (start with the person); past "Sarah read the book", "He drank tea" (OSV is valid Hindi); future "We will eat samosas", "I'll call you"; object fronting ("I'm cooking", "I speak Hindi", "I want to learn Hindi": start with मैं); के पास ("My brother has a car", "I have two tickets": start with the owner); reversible pairs ("two samosas and one lassi", "Tea or coffee?": in this order); commands, where verb-first is normal in speech ("Please tell me", "Come here, please", "Please sit in this room", "Turn right at the next intersection": verb last). 25 cues in all.
- Type items (all 84 dumped, 72 outside the script lessons): every gendered first/second-person answer is cued; accepted lists cover with/without subject and the taught synonyms.
- Non-words (कमरें, लड़काएँ, समोसी, देइए, मुझने, ठोड़ा, दुकाने, ज्ञाण …): script confirms none appears in a card, example, dialogue, pattern, correct option, correct tile, fill answer or accepted answer (1200 strings checked).
- Gender concordance (script: every noun after का/की, मेरा/मेरी, a changing adjective): no noun used with two genders except दोस्त (male and female friend, intended).
- conjunctions: example row and check 3 used मुझे चाय और कॉफ़ी पसंद है, where like-need's rule (verb agrees with the thing) would want a plural for two things; replaced with sentences that raise no agreement question (मुझे चाय पसंद है, और कॉफ़ी भी। / …लेकिन कॉफ़ी नहीं).
- Hand-typed romanisation in fill prompts, deck meanings and extra-a's alphabet-chart English column (anār, ḵhargosh …) compared with respell(): all match.
- extra-b: dialogue for महँगी घड़ी ("सुंदर है, लेकिन बहुत महँगी घड़ी है") was stilted; replaced with यह महँगी घड़ी किसकी है? / मेरी है। मेरे पिताजी ने दी।
- decks-a हैं note "the nasal dot makes it plural" reworded.
- Not editable here (profile.json): the greet strings शुभ रात्रि and सुप्रभात are Sanskritised and rare in everyday speech, against profile §2.5; suggest नमस्ते for all four, or शुभ रात्रि only as "Good night" when leaving. Lead to decide.

## Totals (edits per file)
| File | Wrong Hindi | Wrong teaching | Practice | Pron/romanisation | Wording/spelling/policy |
|---|---|---|---|---|---|
| decks-a.js | 0 | 0 | 0 | 0 | 3 (2 spelling दादा जी / नाना जी, 1 note) |
| decks-b.js | 0 | 1 (और फिर) | 0 | 0 | 1 (आम note) |
| extra-a.js | 0 | 0 | 0 | 0 | 1 (spelling) |
| extra-b.js | 1 (stilted dialogue) | 0 | 0 | 0 | 0 |
| lessons-1.js | 0 | 2 (ज़्यादा / शादीशुदा exception; मत / न table + paragraph) | 1 (order cue) | 0 | 0 |
| lessons-2.js | 0 | 0 | 10 (1 accepted answers, 9 order cues) | 0 | 0 |
| lessons-3.js | 0 | 4 (लाना / भूलना and ने, को, हर सोमवार, चाय और कॉफ़ी पसंद है in example + check) | 16 (15 order cues, 1 accepted answers) | 0 | 12 (9 crutch lines removed, 1 spelling, 2 "on Mondays") |
| respell.js | 0 | 0 | 0 | 1 (VER +3, outputs unchanged) | 0 |
- Crutch sentence: keeping it in the 4 script lessons only departs from profile §6.6 item 5 ("every lesson body"), as the lead suggested.
- Wrong genders found: none. Wrong romanisation found: none (generator output right for all 931 tokens; inline and prompt romanisation all match).
- repron: 565 prons read, 0 rewritten. gen: 28/28 lessons, 18 decks, 322 cards. validate: PASS. node --check: all files pass. HOLD kept.

## Ten things a native speaker should check first
1. profile.json greet: शुभ रात्रि / सुप्रभात (bookish for an app greeting?).
2. आख़िरी दाम क्या है? (decks-b, extra-b) as the everyday bargaining question.
3. ट्रेन कितने बजे जाएगी? for "when does the train leave?" (vs चलेगी / छूटेगी; the future fill accepts all three).
4. मेरे पति with the respect plural ("मेरे for respect, as with पिताजी", decks-a note).
5. अगले चौराहे से दाएँ मुड़िए (से for "at the next intersection").
6. मैं जानता नहीं described as "stronger" than मैं नहीं जानता (negation body).
7. सुबह "usually without को", शाम को / रात को, हर सोमवार with or without को (decks-b, routine).
8. मेरी माँ हिंदी बोलती है accepted beside बोलती हैं (habitual ty): is the singular normal enough for one's mother?
9. दो चाय, तीन लस्सी unchanged in orders (food body) and कम मिर्च, प्लीज़।
10. The new extra-b dialogue: यह महँगी घड़ी किसकी है? / मेरी है। मेरे पिताजी ने दी।
