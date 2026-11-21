You are EN-ES-1, one of five writers of the Lang App course "Spanish for English speakers" (`en-es`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `es` and `<LANG>` = Spanish — binding), `/home/claude/docs/profiles/en-es.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/es/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, and the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems).

YOU OWN: `tools/target/es/lessons-1.js` — lessons sounds · greetings · gender · articles · ser · adjectives · estar · ser-estar · hay. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/es/respell.js "<Spanish text>"` (or `require` it in a small script of your own) and paste the output unchanged; if the tool gives a result you believe is wrong for a word, keep the tool's output and list the word in your report.

LESSONS: write each lesson exactly as the profile's §8 note for it describes, linked to the deck profile.json names. Earlier lessons are prerequisites: use only grammar the course has taught up to your lesson (the profile's order), and vocabulary a beginner would know by then or that the item supplies. The decks are being written at the same time by other writers; you do not need their cards.

Then check and report as TARGET-BRIEF says.
