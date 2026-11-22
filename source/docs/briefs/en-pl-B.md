You are EN-PL-B, one of five writers of the Lang App course "Polish for English speakers" (`en-pl`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `pl` and `<LANG>` = Polish — binding), `/home/claude/docs/profiles/en-pl.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/pl/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (decks-a.js and extra-a.js).

YOU OWN: `tools/target/pl/decks-b.js and extra-b.js` — the last 9 decks in profile order: Time and days · Around town · Directions · Going places · Questions and knowing · Shopping and quantities · Past and plans · Traps for English speakers · Compliments. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/pl/respell.js "<Polish text>"` (or `require` it in a small script of your own) and paste the output unchanged. If the tool's result is wrong for a string, do NOT edit the tool (other writers are using it): keep the tool's output in your file and list the string with the pron you believe is right in your report, so the lead can add it to the tool's lexicon and regenerate.

DECKS: 16–18 cards per deck, at the level and tone of the profile's sample cards (include the samples). A card's `target` is one phrase or sentence a learner will actually say or hear; single words only in vocabulary-style decks, and then with their article so gender is learned with the noun. No target appears in two decks (the other deck writer owns the other half: do not duplicate obvious phrases from decks outside your list — check the profile's samples for those decks). EXTRA: at least 3 dialogues and 2 examples per deck for your cards, and 9 patterns in total.

Standard Polish. Produce pan or pani with a third-person verb. Never type a ty answer. Pron comes from respell.js. Run the whole line. accents is false: mark strict when a pair differs only by a folded letter (ą ę ó ć ń ś ź ż). ł does not fold. Do not hand-edit a pron. Do not use Chicago. Do not build a card on jabłko.

Then check and report as TARGET-BRIEF says.
