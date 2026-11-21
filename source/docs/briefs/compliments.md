# Compliments deck — one extra deck for every live course

Kii's request: "make sure compliments are in every language since people love to compliment."
You add ONE deck named exactly `Compliments` to each course in your list. Work in /home/claude. Do not touch git.

## Read first, per course `<t>`
1. `docs/TARGET-BRIEF.md` (shared writer brief; file formats, pron rules, tone) — binding.
2. `docs/profiles/en-<t>.md` (style authority: variant, register, politeness, glossary, pron policy).
3. `docs/briefs/en-<t>-A.md` (the deck writer brief for that course) and the "MEASURED" / "ENGINE FACTS" sections at the end of `docs/briefs/en-<t>-R.md`.
4. The existing `tools/target/<t>/decks-a.js`, `decks-b.js`, `extra-a.js`, `extra-b.js`: match their level, card style and note style, and DO NOT REUSE any card text that already exists there.

## You own, per course (create both; touch nothing else in the course folder except a lexicon add-file where that course uses one)
- `tools/target/<t>/decks-c.js` — `module.exports = { "Compliments": \`…\` };` one card per line: `target | pron | meaning | note` (same format as decks-a.js).
- `tools/target/<t>/extra-c.js` — `exports.DIALOG`, `exports.EXAMPLES`, `exports.PATTERNS` in the same formats as extra-a.js (PATTERNS may be an empty template string).
- If the course keeps a pron lexicon (a `lexicon*.txt` in its folder), put new entries in `tools/target/<t>/lexicon-add-C.txt` in that file's format. Never edit the main lexicon.
Do NOT edit profile.json, the packs, lessons, or the other writers' files. The lead adds the deck to the profile and regenerates.

## The deck: 14 cards (never fewer than 12, never more than 16)
Things a visitor or new friend really says, in the course's standard everyday polite register, friendly and never flirtatious:
- food and cooking (2): "This is delicious", "You cook really well" (skip any that already exists as a card; pick a different real phrase)
- skill and effort (3): "Well done / good job", "You're really good at this", "That's a great idea"
- the person (3): kind, funny, smart/hard-working — the natural local way, not a literal translation
- things and places (2): "I love your home", "That looks great on you" / "Nice photo"
- the learner's own situation (1–2): "Your <language> … " is what people SAY TO the learner — include the compliment they will hear ("Your Spanish is very good")
- answering a compliment (2–3): the culturally normal reply ("Thank you, that's kind", "Not at all, I'm still learning", a modest deflection where that is the custom). Say in the note which reply is expected in that culture.
Rules:
- Every card is a whole phrase or sentence, natural and common in that variety. If you are not sure a phrase is idiomatic, do not use it.
- Each meaning must be different from every other meaning in the deck (quizzes show the meaning).
- Notes (one short line): who you can say it to, formality, and any form that changes with the speaker's or listener's gender or number (Spanish -o/-a, Arabic/Hindi/Urdu/Punjabi verb and adjective agreement, Russian ты/вы, Japanese/Thai politeness particles, and so on). Where a form changes, show the other form in the note.
- No card text may duplicate an existing card anywhere in the course (check all four existing deck/extra files with grep). DIALOG and EXAMPLES keys must be exact card targets from YOUR deck and must not already be keys in extra-a.js / extra-b.js.
- PRON: never hand-write it where the course has a tool. Generate with the course's `tools/target/<t>/respell.js` exactly as `en-<t>-A.md` says, and follow that brief's rule for words the tool does not know (lexicon add-file). Courses with `pron: none` leave pron empty.
- Use only characters/letters the course already teaches or uses. For `nan` (Taiwanese): use only Han characters that already appear in the existing pack files or that are ordinary Traditional Chinese characters in common fonts; avoid rare Taigi-only characters.
- extra-c.js: DIALOG for at least 8 of your cards (a two-line exchange where the card is said by A or B, with the reply being realistic — often a response to the compliment); EXAMPLES for at least 4 other cards; 2 PATTERNS if the language has a clear compliment frame ("How ___!", "Your ___ is very ___"), otherwise leave PATTERNS empty.

## Check before you report (per course)
Run, from /home/claude:
```
node -e "const t='<t>';const L=require('./tools/target/lib.js');const C=L.load(t);const d=C.DECKS['Compliments'];console.log(t,'cards',d.length,'dialogs',Object.keys(C.DIALOG).length,'examples',Object.keys(C.EXAMPLES).length);"
```
It must load without throwing (it throws on a duplicate deck, dialog or example key and on wrong column counts). If `lib.js` exports differ, read lib.js and use what it exports; do not edit it. Do not run gen.js or validate.js — the lead does that.

## Report (per course, short)
Card count, dialog/example counts, any phrase you were unsure of, any pron the tool got wrong or lexicon lines added, gender/politeness decisions, and anything a native speaker should check first. Then append a section `## Compliments deck (added later)` to `tools/target/<t>/REVIEW.md` listing those same native-check points.
