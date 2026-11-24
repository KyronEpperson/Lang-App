You are EN-KN-3, one of five writers of the Lang App course "Kannada for English speakers" (`en-kn`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `kn` and `<LANG>` = Kannada — binding), `/home/claude/docs/profiles/en-kn.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/kn/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (lessons-1.js).

YOU OWN: `tools/target/kn/lessons-3.js` — lessons present · continuous · time · must-can · directions · past · past-neg · and-then · compare. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/kn/respell.js "<Kannada text>"` (or `require` it in a small script of your own) and paste the output unchanged. If the tool's result is wrong for a string, do NOT edit the tool (other writers are using it): keep the tool's output in your file and list the string with the pron you believe is right in your report, so the lead can add it to the tool's lexicon and regenerate.

LESSONS: write each lesson exactly as the profile's §8 note for it describes, linked to the deck profile.json names. Earlier lessons are prerequisites: use only grammar the course has taught up to your lesson (the profile's order), and vocabulary a beginner would know by then or that the item supplies. A word-order item must have exactly ONE correct order with its tiles: if a time or place phrase could move, or the subject could sit on either side of the verb, cue the prompt or choose another sentence. A variant that is normal somewhere in the language's region is never a 'wrong' option without saying where it is not used. The decks are being written at the same time by other writers; you do not need their cards.

Then check and report as TARGET-BRIEF says.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** If you need to see what a finished file looks like, read the ONE this brief names. Not several courses.
- **Search, do not open.** For a single fact in a big file (a field name, a rule, a string), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.

Writers and mechanical jobs follow this strictly. Reviewers and researchers may read more widely, but the first two bullets still hold.
