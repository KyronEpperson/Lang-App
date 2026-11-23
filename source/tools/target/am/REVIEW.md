# en-am cold review (2026-11-21)

Same model family as the writers (grok-4.7). Pron stays empty: `respell.js` still exits 1, and no romanisation was written by hand. Spelling authority is the Peace Corps Ethiopia Amharic manual (2015). Addis Ababa: አንተ and አንቺ from greetings, እርስዎ for a stranger or an older person. No Ethiopic word space ፡ and no U+135F gemination mark. HOLD stayed in place. `gen.js` wrote only to a scratch file and to `/tmp/course-en-am.hold.js`. `packs/` was not touched.

`node tools/target/validate.js am` → `PASS: all checks OK`

Categories: WL = wrong language, WT = wrong teaching, PR = practice, PN = pron, WD = wording.

## What was read

Read in full: `docs/briefs/en-am-R.md`, `docs/TARGET-REVIEW.md`, `docs/profiles/en-am.md`, `tools/target/am/profile.json`, `docs/TARGET-BRIEF.md`, `docs/PRACTICE-SPEC.md`, the last section of `docs/PHASE2-BRIEF.md`, and the seven writer files. The Peace Corps PDF was searched, not read cover to cover. `src/app.html` was not opened.

## Batch 1: decks and extras

| File | WL | WT | PR | PN | WD |
|---|---|---|---|---|---|
| decks-a.js | 0 | 2 | 0 | 0 | 0 |
| decks-b.js | 0 | 2 | 0 | 0 | 0 |
| extra-a.js | 4 | 0 | 0 | 0 | 1 |
| extra-b.js | 0 | 1 | 0 | 0 | 1 |

- decks-a WT: morning `ደህና አደሩ` was "for እርስዎ or for more than one person." The manual separates polite `አደሩ` from plural `አደራችሁ`. Night `እደሩ` is still both.
- decks-a WT: `አራት` said "From 31 on, the ten and the unit stay two words." Twenty-one is already two words. Note now uses `አርባ አራት`, forty-four.
- decks-b WT: `ይህች` and `ያች` said pointing at a person "can sound small or rude." The manual says those words can show smallness, endearment, or disrespect. `ይህች ትግስት ናት` is an ordinary introduction in this course. The note now limits the warning to pointing with `ይህች` instead of her name.
- extra-a WL: `ድመት ትንሽ ነው` → `ድመት ትንሽ ናት`. A cat is grammatically feminine. Confirm with a speaker.
- extra-a WL: "The house is new," "The tree is big," and "The market is good" had no definite ending (`ቤት`, `ዛፍ`, `ገበያ`). Now `ቤቱ አዲስ ነው`, `ዛፉ ትልቅ ነው`, `ገበያው ጥሩ ነው`. The market question is `ገበያው ትልቅ ነው?`.
- extra-a WD: `እኔ ኢትዮጵያዊ ነኝ` glossed "I am Ethiopian" → "I am Ethiopian (a man)."
- extra-b WT/WD: `አዲስ አበባ ብዙ ቤቶች አሉ` was "Addis Ababa has many houses." `አሉ` is "there are." A city as possessor would be feminine `አሏት`, which this course does not teach. Gloss is now "There are many houses in Addis Ababa."
- extra-b WD: reply to "I want to sleep" was `እሺ በቃ`, "All right, that's enough." Now `እሺ`, "All right."

## Batch 2: lessons-1.js

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 1 | 4 | 3 | 0 | 1 |

- WL: evening man/woman forms were `አመሽክ` and `አመሽሽ`, built on the morning's `ክ`. The manual and the deck are `አመሸህ` and `አመሸሽ`. Table, examples, and the type item now use those. The body names `አመሽክ` as the form that is not the greeting. Morning plural `አደራችሁ` is named so `አደሩ` stays polite.
- WT: the reading multiple choice marked `መጽሀፍ` wrong. That is the Peace Corps spelling of the same book as `መጽሐፍ`. The body says so. The wrong options are now real misspellings.
- WT: "Hello, Abebech" marked `አበበች ሰላም` wrong. Name first is ordinary. The multiple choice no longer uses it as a wrong option. The type item accepts both orders. The order item is cued "hello first."
- WT: `ልጇ` was only "the girl." The same letters also mean her child, the way `ቤቱ` is the house or his house. `ልጅቱ` is mentioned for the unambiguous girl.
- WT: `ረ` was only "a rolled r." It is a tap when short and a trill when held, matching the deck.
- PR: "She is fine" and "The girl is small" fills now accept `ነች` as well as `ናት`.

## Batch 3: lessons-2.js

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 2 | 3 | 2 | 0 | 0 |

- WL: you-go, to a woman, was `ትሄዳለሽ` everywhere in this lesson (table, examples, check, practice). The deck, the time lesson, the extras, and the Peace Corps dialog use `ትሄጃለሽ`. d becomes j. She stays `ትሄዳለች`. The unpalatalized `ትሄዳለሽ` is now the named mistake and a wrong option.
- WL: you-drink, to a woman, was `ትጠጣለሽ`. The same rule turns the last `ጠ` into `ጨ`: `ትጠጫለሽ`. She stays `ትጠጣለች`. A speaker should confirm the written word. The rule and the Goethe pair `ትጠጣለህ/ጫለሽ` agree. The full word is not printed in the Peace Corps extract used here.
- WT: "this is a book" said never to put the definite ending on `ይህ` or `ያ`. The bare noun is right for a new book (`ይህ መጽሐፍ ነው`, not `ይህ መጽሐፉ`). A known house can still be `ቤቱ`. `ይህ ቤቱ ነው` is a real sentence.
- WT: "The name is the subject" in the who-is-your-name line. It is `ስም`, the word for name, that takes `ነው`. Left as `ስምሽ ማን ነው`.
- WT: after a number, the plural noun was called wrong (`ሁለት ቤቶች`). The line to learn stays `ሁለት ቤት`. A plural also occurs (`ሁለት ድመቶች`). The English s (`ቤትስ`) is the mistake, and it is now the multiple-choice distractor. One thing with have stays `አለ`. Two or more switch: the manual's `ሁለት ድመቶች አሉኝ` is in the have lesson.

## Batch 4: lessons-3.js

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 2 | 3 | 2 | 0 | 0 |

- WL: `እናትህ ማን ነው` and the sister fill `እህትሽ ማን ነው`. The same lesson says mother and sister take `ናት`. Now `እናትህ ማን ናት` and `እህትሽ ማን ናት`. Father and brother stay `ነው`.
- WT: `ክትፎ` was "minced beef." The manual's ingredients are finely chopped lean meat, often served raw. The deck already said that.
- WT: `እንቁላል ጥብስ` was "fried eggs." The manual's ingredients are eggs, green pepper, and onion.
- WT: want was "the same way go does," which now reads as "palatalize d to j." The g stays. The manual prints `ትፈልጊያለሽ`. That spelling was kept.

## Left on purpose

- Every pronunciation field is empty.
- `መጽሀፍ` and `መጽሐፍ` are both kept. Neither is marked wrong.
- `ናት` and `ነች` are both Addis. Fills and type items that already said so still accept both. New she-fills accept both.
- `አገሬ አሜሪካ ነው` and `አገርህ የት ነው` stay `ነው`, as the manual writes them. Towns and countries as subjects stay `ናት` (`አዲስ አበባ ትልቅ ናት`, `ጎንደር ሩቅ ናት`).
- `አትወጅም` and `ትወጃለሽ` stay. The manual's negative uses `ጅ`, not `ጂ`.
- Time pairs and the menu prices stay. They match the manual, including `ቡናው በጣም ቆንጆ ነው`.
- No card was deleted to hit a count. 26 lessons, 17 decks, 301 cards.

## A native speaker should check these first

1. `ትጠጫለሽ` — you drink, to a woman. Rule is solid. Confirm the letters (`ጫ` versus a longer `ጪያ` spelling).
2. `ድመት ትንሽ ናት` — cat treated as feminine.
3. `ሁለት ድመቶች አሉኝ` — plural thing, they-form of have. The manual also has a past `ሁለት ድመት ነበረው`.
4. `ልጇ` — the girl and her child. `ልጅቱ` when someone wants only the girl.
5. `አበበች ሰላም` — name before hello, accepted as ordinary.
6. `ይህ ቤቱ ነው` — this, plus a definite house.
7. `በቤት ናት` — she is at home. Some speakers prefer `ቤት ውስጥ አለች`.
8. `ቡናው በጣም ቆንጆ ነው` — the manual's coffee compliment. Worth a native ear.
9. `ወንድምዎ`, `እህትዎ`, `እናትዎ` — polite `-ዎ` copied from `አባትዎ`. The manual prints it on father.
10. `አደራችሁ` — morning, to more than one friend. Evening plural `አመሻችሁ` was not added.

## Update 2026-11-22: pron added after the lead's review

The "Pron stays empty" line above is out of date. Every card and example row now has a pron from a lexicon-first `respell.js` (`lexicon.txt`, each word with its source; unknown words throw). Key and sources: `docs/profiles/en-am.md` §6. Content changed for it: card `ከቀኑ 6 ሰዓት` → `ከቀኑ ስድስት ሰዓት`; card `ቀጥታ` → `ቀጥ ብለው ይሂዱ` (and the `directions` items that used it); fill `ው__` wrong option `ሀ` → `ሁ`; the `ገና` and `አለ` example rows give one reading each; the `orders` lesson explains the romanisation. This pass was not a cold review; stages 5 and 6 should be rerun on the prons. Speaker check list for the romanisation: profile §6.5.
