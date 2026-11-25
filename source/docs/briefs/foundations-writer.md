# Brief: character foundation for one course (FND-1 roll-out) [opus]

You give ONE course (`en-<t>`, a target language for English speakers) the character foundation that Japanese got in 2.113.0. You write language content; a script and a cold reviewer check it afterwards.

## Read exactly these (reading rule: nothing else, no exploring `src/app.html` or pack files)
1. `/home/claude/tools/patches/foundations.py`, lines 1-16 only: the forms a lesson's `sections` can take and the `{{tiles:…}}` token.
2. `/home/claude/tools/patches/foundations_ja.py`: the ONE finished example. Your output is a script of the same shape.
3. In `/home/claude/tools/target/<t>/`: `lessons-1.js` (and `lessons-2.js` only if a script lesson sits there), but only the lessons that teach the writing system or sound system, i.e. the lessons before the first phrase/grammar lesson, plus any later lesson whose deck is a script deck.
4. The script decks of the course. Print them with:
   `node -e "global.LANGAPP_PACKS={course:{},i18n:{}};(0,eval)(require('fs').readFileSync('/home/claude/packs/course-en-<t>.js','utf8'));const c=LANGAPP_PACKS.course['en-<t>'];c.LESSONS.forEach((l,i)=>console.log(i+1,l.id,'|',l.deck,'|',(l.body.match(/<h3[^>]*>(.*?)<\/h3>/g)||[]).map(h=>h.replace(/<[^>]+>/g,'')).join(' / ')));Object.keys(c.DECKS).slice(0,8).forEach(d=>console.log(d+' ('+c.DECKS[d].length+'): '+c.DECKS[d].map((x,i)=>i+':'+x[0]+'='+x[1]).join('  ')))"`
5. `/home/claude/tools/target/<t>/profile.json`, only the romanization / pronunciation rules section, so new readings follow the course's own system exactly.

## The pattern every course follows
1. How the script works (a short section; no flashcards).
2. The pieces, one kind per section. Each such section has a chart (an HTML table, as the lesson already uses) or flip tiles (`{{tiles:…}}`), and is followed by ITS OWN flashcards: the deck or slice of a deck that holds exactly the pieces that section teaches.
3. Putting pieces together (what Korean calls stacking): a section on how the pieces combine, followed by a deck that lives inside the lesson (`{name, cards}`) of 12 to 20 REAL, common, beginner-useful syllables or words that use only what has been taught so far. Card = `[front, reading, meaning, note]`; the note breaks the word into its pieces.
4. The engine adds the final review itself.

Fit the script; do not copy Japanese. Decide what "pieces" and "putting together" mean for this script and say so in your report.

## What you write
One file: `/home/claude/tools/patches/foundations_<t>.py`, same shape as `foundations_ja.py` (assertion-guarded replacements on `tools/target/<t>/lessons-*.js`, `sections:` added to each lesson you touch, refuses to run twice). Then run, in this order, and fix until all pass:
```
cd /home/claude && python3 tools/patches/foundations_<t>.py && node tools/target/gen.js <t> && node tools/target/validate.js <t> && node tools/lessonread/apply.js en-<t>
```
(The dispatcher runs `node tools/sections/apply.js` after your pack is regenerated in the build home; a pack with a section table loses it otherwise.)
(To re-run the script after a fix: `cp /home/user/lang-app/source/tools/target/<t>/lessons-*.js /home/claude/tools/target/<t>/` first.)
Do NOT run `build.sh`, `harness.js`, `ship.sh` or any test under `tools/tests/`: the dispatcher runs those, and two builds at once break each other. Do NOT touch any file outside `tools/target/<t>/lessons-*.js` and your patch script. Do NOT run git.

## Rules
- `sections` has exactly one entry per section. Sections are the lesson body cut at each `<h3>`; text before the first `<h3>` belongs to the first section. If you add an `<h3>`, count again.
- Every card of the lesson's own `deck` must appear in exactly one section of that lesson, and no card may appear twice in a lesson. A deck may be cut with `{deck, n:[a,b]}` (cards a to b-1, in deck order). A deck that no lesson uses today should be given to the section that teaches it.
- Do not change, add, remove or reorder cards of existing decks, and do not reorder lessons or change lesson ids: saved progress depends on them. If a letter of the standard set has no card anywhere, put it in an in-lesson deck in the section that teaches it (e.g. `{name:"More letters", cards:[…]}`) and list it in your report.
- Every section that has flashcards has at least 3 cards. Merge small slices into one block placed after the last section it covers (a list of slices), and give the earlier sections `null`. A deck shared by several lessons may be cut across them (each card in exactly one lesson of the course) instead of repeating whole in each.
- An in-lesson deck's `name` must differ from every real deck name. At least 5 cards, no front twice, every card with front, reading and meaning.
- Tiles: `{{tiles:a b c}}` makes a five-column grid; in a right-to-left script the grid runs right to left by itself. A tile's reading is the reading of the card with the same front; write `x=reading` when there is no such card (an underscore inside that reading shows as a space: `ں=nūn_ġunna`); `_` is an empty cell. Every letter of the standard set must be on a tile in a foundation lesson. Keep tile fronts to one letter or one short syllable.
- Every new target-language word must be common, correct and spelled as this course spells (same vowel marks or none, as the course's cards do). Every reading follows the course's own romanization. Never invent a word. If unsure of a word, choose another.
- Keep existing prose unless it must change to fit the new section; write new prose in the lesson's voice: short, concrete, for an English speaker who cannot read the script. No em dashes.
- Keep each lesson's `check` and `practice` as they are.

## Report (end of your final message)
- Foundation lessons (ids, in order) and, per lesson, its sections with the flashcards of each (deck/slice/in-lesson deck and card counts).
- The standard letter set you used, as one string of characters, and any letter that had no card before (and where it is now).
- Every new word with reading and meaning, as a list, for the reviewer.
- What you were unsure about.
- The four commands' last lines of output.
- Any file you had to read that was not on the list.
