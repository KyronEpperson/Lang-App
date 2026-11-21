You are EN-PT-B, one of five writers of the Lang App course "Portuguese for English speakers" (`en-pt`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `pt` and `<LANG>` = Portuguese — binding), `/home/claude/docs/profiles/en-pt.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/pt/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (decks-a.js and extra-a.js).

YOU OWN: `tools/target/pt/decks-b.js and extra-b.js` — the last 9 decks in profile order: Around town and directions · Travel and transport · Health and emergencies · Work and study · Feelings and states · Likes and free time · Questions and connectors · Traps for English speakers · Spoken Brazilian Portuguese. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/pt/respell.js "<Portuguese text>"` (or `require` it in a small script of your own) and paste the output unchanged. If the tool's result is wrong for a string, do NOT edit the tool (other writers are using it): keep the tool's output in your file and list the string with the pron you believe is right in your report, so the lead can add it to the tool's lexicon and regenerate.

DECKS: 16–18 cards per deck, at the level and tone of the profile's sample cards (include the samples). A card's `target` is one phrase or sentence a learner will actually say or hear; single words only in vocabulary-style decks, and then with their article so gender is learned with the noun. No target appears in two decks (the other deck writer owns the other half: do not duplicate obvious phrases from decks outside your list — check the profile's samples for those decks). EXTRA: at least 3 dialogues and 2 examples per deck for your cards, and 9 patterns in total.

Brazilian Portuguese (pt-BR); você as the everyday 'you'

Then check and report as TARGET-BRIEF says.
