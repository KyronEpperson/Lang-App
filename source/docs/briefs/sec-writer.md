# Brief: section cards writer (SEC-1) [opus]

One agent per course. You give every lesson section the flashcards that test what that section teaches.

## Read only these

1. This brief.
2. `tools/sections/<course>/worksheet.md` (the whole course: every lesson, every section's text, the cards the app already puts under it, and the lesson-deck cards that are in no section).

Do not open `src/app.html`, a pack file, or other courses. If you needed another file, name it at the end of your report.

## What the app already does

After each section of a lesson the learner gets that section's flashcards (five shown, then quizzed). The app builds them by itself from the section's `EX:` lines and from cards whose words appear in the section. `CARDS NOW` shows the result. You only write what the app cannot work out.

## Your job, per section

1. **Sections marked `NEEDS CARDS`** (fewer than 3): add cards until the section has 3 to 6. In this order of preference:
   - a card from `DECK CARDS IN NO SECTION` that this section really teaches or exercises (give its front as a string, copied exactly);
   - a new card made from what the section itself shows: a form in its table, a word it explains in the prose, or the section's rule applied to a word the course has already taught (an earlier lesson or this one).
2. **Wrong cards.** If `CARDS NOW` holds a card the section does not teach (a look-alike word with another meaning, a word only mentioned in passing), list its front under `drop`.
3. **Sections with 3 or more good cards:** leave them alone. Do not pad. Do not add deck cards that merely share the lesson's topic.
4. A section that teaches nothing testable (pure culture note, a pointer to another screen) may stay under 3: say which ones in your report.

## Rules for a new card

- `[front, reading, meaning, note]`. Front in the language being learned, exactly as the course writes it (script, spelling, punctuation style of the `EX:` lines). Meaning in the learner's language (the language the lesson prose is written in), in the style of the existing meanings. Note is optional and usually empty.
- Reading: the same system the `EX:` lines of this course use in their second field (romanization, respelling, or the learner's script). Copy the system exactly, including stress marks or tone marks. If the `EX:` lines leave the second field empty, leave it empty.
- Never test something the section has not shown. Never use a word the course has not introduced by that point, unless the section itself introduces it.
- No card twice in a lesson. A card already under an earlier section of the same lesson cannot be added again.
- A wrong form shown as a mistake (marked ✗) is never a card.
- Keep the variety and register the course uses (for example Latin American Spanish, written Cantonese, White Hmong in RPA).
- Do not invent facts about the language. If you are not sure a form is right, leave it out.

## Output

Write `tools/sections/<course>/sections.json`:

```json
{
 "_about": "SEC-1 writer file for <course>.",
 "<lesson id>": {
  "<section number>": {"add": ["exact front of an existing card", ["front", "reading", "meaning", ""]], "drop": ["front"]}
 }
}
```

Lesson ids and section numbers are the ones in the worksheet (`## LESSON <id>`, `### SECTION <n>`). Leave out lessons and sections you do not change. Leave out any lesson the worksheet calls hand-set.

## Done when

`node tools/sections/check.js <course>` cannot be run by you (it needs a build); the dispatcher runs it. Before you finish, re-read your file once against the worksheet for: exact fronts, section numbers, no repeats inside a lesson, readings present where the course uses them.

## Report (short)

- Sections filled, cards added (existing / new), cards dropped.
- Sections left under 3 and why.
- Anything in the course text that looked wrong to you (do not fix it).
- Any file you had to read that is not on the list above.
