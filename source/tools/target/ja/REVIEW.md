# en-ja cold review (EN-JA-REVIEWER, 2026-11-19)

Baseline before any edit: gen + validate PASS (18 decks / 370 cards / 28 lessons / 392 items / 64 dialogues / 45 examples / 18 patterns).

## Batch 0: romaji-to-kana check (profile §6.5) over every card and example row
- Script: the §6.5 prototype from docs/profiles/en-ja.md (fold + toRe) plus pronPattern, run over all 370 deck cards and all 221 `{{ex:}}` rows = 591 rows (scratchpad p3/check.js; full kana→romaji list in p3/list.txt, 579 distinct strings).
- Result: 0 pattern failures, 0 kana/romaji mismatches. One false alarm only: the fold did not strip … in すみません、どようびは ちょっと…。 (not a romaji error).
- Every distinct string read by eye for what the check cannot see: wa / e / o only on particles (ha / he only on the two letter cards; konnichiwa, konbanwa); ō for おう / おお (tōkyō, ōkii, tōi, otōsan, imōto, kōen); ū; ei kept (sensei, eiga, kirei, keisatsu); n' (sen'en, hon'ya, kin'yōbi, niman'en); small っ (kitte, gakkō, juppun, happyakuen, roppyaku, massugu); katakana ー (kōhī, pātī, sūpā not used, reshīto, menyū, kurēmu, sābisu). Same string → same romaji everywhere (validator agrees).
- Writers' spacing doubts, decided as written (all consistent with §6.1 word rules): `ja arimasen` (じゃ + the verb arimasen, parallel to `janai desu` with desu separate); `kore kara` (particle kara separate, rule 1); `ken-san mo`; `na n desu`; `na node`; `hō ga`; `dō itashimashite`; `kekkon shite imasu` (like benkyō shimasu + te imasu).
- No romaji edits were needed. Kanji: only in the First kanji deck, the kanji-first lesson, and two First kanji EXAMPLES rows; every kanji is inside the 30-word list (the deck notes mention single kanji such as 月 = moon, which is explanation, not a course word).
- Kanji policy decided: EXAMPLES rows for First kanji cards show the card's word (and other list words) in kanji, because the card is about the kanji; DIALOG lines stay in kana, as profile §10.3 requires for dialogue lines. Header comment of extra-a.js already says this; no change.

## Findings list (before edits)
- numbers body: "use よん and なな when you count" + "older words" — false (people count いち…し…しち… aloud; し/しち are the Sino-Japanese words, not older). Rewrite.
- no-mo body: "an owner, a subject or a place" — "subject" reads as the grammar subject. → "a subject of study".
- adjectives body: "Cards and dictionaries usually show a な-adjective with its な" — Japanese dictionaries do not. → learner word lists.
- te body: "Japanese has one 'and' for nouns, と" — や also exists. Narrow.
- counters check q1 + tip: ふたつの りんごを ください is grammatical ("the two apples"), only unnatural when ordering → replace check option with a real error; soften tip.
- teiru check q2: しって ないです is heard colloquially → replace with an unambiguous error.
- must tip: やすむ ほうが いいです is not wrong (dictionary form + ほうが いい is common) → move the "mistake" to いきなければ and state the past form as the usual one.
- compare: "A question word always takes が, never は" (body + whys) — false for なにを, どこに; narrow to "as the subject".
- extra-b DIALOG すみません ちょっと: the dialogue line itself should have 、 (only card targets drop it).
- deck notes: こうえん "three beats plus ん" (ん is a beat: four beats); どういたしまして "A little formal" vague; じゃあ また register note.

## Batch 1: decks-a.js, decks-b.js (all 370 cards read: target, pron, meaning, note)
- decks-a.js: 3 edits. Teaching 1: じゃあ また note now says it is casual (friends, coworkers) and that to a boss you say しつれいします. Wording 2: どういたしまして note ("correct but a little stiff; people often answer thanks with いいえ"); ヨ shape note ("three flat strokes joined by one stroke down the right side").
- decks-b.js: 1 edit. Teaching: こうえん note said "three beats plus ん"; ん is a beat → "four beats".
- Checked and kept: katakana shape notes ホ / ク・タ / ナ・メ (accurate); じゃあ また ("See you later.", Greetings) and じゃあ またね ("See you!", Casual) are different strings in different decks, both natural; すみません ちょっと card has no 、 because card targets may not carry 、 (profile §9); facts 119 (ambulance), 110 (police), bag fee "a few yen", transit-card note: kept (true to my knowledge; on the native list). Onigiri ≈ ¥150 appears in 4 places (Food deck note, Numbers deck note, numbers body, extra-a dialogue): kept consistent, not changed from memory, on the native list (rice prices rose in 2025).

## Batch 2: extra-a.js, extra-b.js (64 dialogues, 45 examples, 18 patterns read)
- extra-a.js: 0 edits.
- extra-b.js: 1 edit (consistency): the dialogue reply すみません ちょっと…。 → すみません、ちょっと…。 (only card targets drop 、; the key stays the card target).

## Batch 3: lessons-1.js (hiragana … arimasu: bodies, example rows, checks, 140 practice items)
- 4 edits. Teaching 1: numbers body said し / しち are "older words" and "use よん and なな when you count" (false: people count off いち…し…しち…; し / しち are the Sino-Japanese words) → "a second word each, heard when people count off one to ten and in fixed words such as しちじ; in prices and bigger numbers use よん and なな". Wording 1: no-mo "an owner, a subject or a place" → "a subject of study". Practice 2 (order uniqueness): no-mo "This is my umbrella." + cue (start with "this") because わたしの かさは これです also builds; "My mother is a teacher." + cue (to a coworker) so the distractor おかあさん is clearly wrong.

## Batch 4: lessons-2.js (past … teiru)
- 6 edits. Teaching 3: adjectives "Cards and dictionaries usually show a な-adjective with its な" (Japanese dictionaries do not) → learner word lists; te "Japanese has one 'and' for nouns, と" (や exists) → "uses と for 'and' between nouns"; counters tip: ふたつの りんごを ください is grammatical ("the two apples"), only wrong for ordering → tip says so. Practice 3: counters check q1 wrong option ふたつの りんごを ください → りんごが ふたつ ください, and りんご ふたつを → りんごを ふたつを (both real errors, neither acceptable); teiru check q2 wrong option いいえ、しって ないです (heard colloquially) → いいえ、しりないです (a learner over-regularisation); suki order "Sakura is bad at singing." + cue (start with Sakura), because うたは さくらさんが へたです also builds.
- Checked and kept: がくせいじゃないでした (wrong, kept as distractor); invite yes/no to negative questions (はい、たべません is right); ましょう vs ませんか, だいじょうぶです as a refusal, ては いけません as strict, すきです about a person, じょうず about yourself: claims are hedged and standard, kept, on the native list; ここで すわっても いいですか no longer occurs (the fill item uses に with distractors を / が / と).

## Batch 5: lessons-3.js (short … must)
- 5 edits, all teaching. compare body "A question word always takes が, never は" (false for なにを, どこに taught earlier) → "When a question word is the subject, as どちら is here, it takes が, never は"; the three `why` lines narrowed the same way (keywords kept). must tip called やすむ ほうが いいです a mistake (dictionary form + ほうが いい is common and correct) → tip's wrong → right pair is now いきなければ → いかなければ, with a note that the past form is the usual choice for advice.
- Checked and kept: たいですか / つもりですか / んです overuse / なければ いけません to a senior claims (hedged, plausible); きょねん きょうとに いきました is the correct answer in koto-aru; casual items list both with- and without-の forms.

## Order items (all 84 listed and checked by eye for a second buildable order; a judgment call, not a proof)
- Rule applied: where the tiles allow a second grammatical Japanese order, the prompt gets a "(start with …)" or listener cue. Cued: every これ | は | X | です item (hiragana "This is sushi.", sounds "This is a photo.", katakana "This is ramen.", numbers "This is 600 yen.", no-mo "This is my umbrella.") because X は これです also builds; no-mo "My mother is a teacher." (to a coworker); suki "Sakura is bad at singing." (start with Sakura). Items that already had cues: kanji-first Monday, to-omou Ken, compare Tokyo.
- The rest were judged to have one order (verb-last items with a single noun phrase, or a swap that is not Japanese). Kept but listed: counters りんご | を | ふたつ | ください could also be tiled ふたつ りんご を ください (marginal colloquial Japanese).

## Kana spelling
- Every distinct Japanese token in the seven files (1,791) dumped and read once. No misspelled correct form found (おおきい, とおい, おねえさん, おとうさん, むずかしい, コーヒー, パーティー, コンビニ, スマートフォン, ハンバーガー all right); the odd tokens are all deliberate distractors.

## Totals
| File | Wrong Japanese | Wrong teaching | Practice | Pron | Wording |
|---|---|---|---|---|---|
| decks-a.js | 0 | 1 | 0 | 0 | 2 |
| decks-b.js | 0 | 1 | 0 | 0 | 0 |
| extra-a.js | 0 | 0 | 0 | 0 | 0 |
| extra-b.js | 0 | 0 | 0 | 0 | 1 |
| lessons-1.js | 0 | 1 | 6 | 0 | 1 |
| lessons-2.js | 0 | 3 | 3 | 0 | 0 |
| lessons-3.js | 0 | 5 | 1 | 0 | 0 |
| **all** | **0** | **11** | **10** | **0** | **4** |

Later fixes (after the advisor pass): numbers body wording narrowed to "in bigger numbers use よん and なな" (4 yen is よえん, so "prices" was dropped); must typed item "You'd better go to the hospital." now also accepts いく ほうが いいです(よ) with に / へ, since the tip says the dictionary form is heard; four more これ order items cued (counted in lessons-1 practice).

## Writers' doubt list: decisions not covered above
- あなたは せんせいですか (desu check, wrong option): kept; grammatical but the course teaches it as the register error (profile §2.3), and the why says so.
- がくせいさんです (desu mc, wrong option): kept; さん on a noun about yourself is wrong.
- は / が rule of thumb in arimasu: kept; it is labelled "a rough guide" and is the standard first approximation.
- kosoado これ / それ claim (the clerk's これ becomes your それ): correct, kept.
- ませんか / ましょう, だいじょうぶです, ては いけません, たいですか, つもりですか, んです overuse, なければ いけません to a senior, すきです about a person, じょうず about yourself: hedged and standard, kept, native list.
- おやすみなさい ("said when someone goes to bed" in the profile): no card uses it as a general greeting; Casual deck おやすみ points to it. Kept.
- Glossary: no banned term (copula, conjugation, demonstrative, classifier, relative clause, gerund, ichidan / godan, syllabary) in any file; dakuten / handakuten appear once as the allowed gloss. No romaji inside practice items from desu on (English words such as "o'clock" and "sushi" only).

Final: `node tools/target/gen.js ja $S/c.js && node tools/target/validate.js ja $S/c.js` → PASS: all checks OK (18 decks / 370 cards / 28 lessons / 392 items / 64 dialogues / 45 examples / 18 patterns); `node --check` passes on all seven files; romaji check 591 rows, 0 mismatches after edits. HOLD file kept.

## Ten things a native speaker should check first
1. invite: にくは たべませんか / テレビは みませんか used as plain negative questions ("Don't you eat meat?") in the same lesson that teaches ませんか as an invitation. Is the reading natural, or should it be にくは たべないんですか?
2. invite / Traps deck: はい、たべません as the answer to that question, and すみません、ちょっと… / だいじょうぶです / けっこうです as refusals.
3. must: やすんだ ほうが いいです as the usual advice form, and the claim that ほうが いいです and なければ いけません sound pushy to a senior.
4. suki and Likes deck: すきです about a person "can sound like a confession", じょうず about yourself "sounds like bragging".
5. tsumori / tai: つもりですか and たいですか "can sound blunt / like checking up" when asked of others.
6. Pitch pairs in sounds: はし (chopsticks / bridge), あめ (rain / candy), かみ (paper / god), and how the ja-JP voice says them.
7. counters: whether ふたつ りんごを ください (number before the noun, no の) should also be accepted in the order item, and the tip's ふたつの りんごを ください = "the two apples".
8. Facts in notes: onigiri about ¥150 at a convenience store (4 places), ramen about ¥1,000, bag fee "a few yen", 119 / 110, transit cards.
9. Spacing of the romaji word rules chosen by the writers: `ja arimasen`, `kore kara`, `na n desu`, `na node`, `kekkon shite imasu`, and the kana phrase spacing after て forms and before ことが / つもり / ほうが.
10. Greetings: どういたしまして vs いいえ for "you're welcome", おやすみなさい in the greet slot, じゃあ また vs しつれいします at work.

## Read in full vs scanned
- Read in full: all seven content files (every card, dialogue, example, pattern, lesson body, example row, check and practice item), docs/profiles/en-ja.md, TARGET-BRIEF, PRACTICE-SPEC, the PHASE2 addendum, gen.js, validate.js, the lib.js header.
- Used through scripts only, not read line by line: profile.json (pronPattern, standing-rule keywords, lesson and deck lists, via gen / validate / check.js).
