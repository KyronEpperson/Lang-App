You are EN-CS-A, one of five writers of the Lang App course "Czech for English speakers" (`en-cs`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `cs` and `<LANG>` = Czech — binding), `/home/claude/docs/profiles/en-cs.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/cs/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (decks-a.js and extra-a.js).

YOU OWN: `tools/target/cs/decks-a.js and extra-a.js` — the first 9 decks in profile order: Háček letters · Long and short vowels · ř and ch · Greetings and courtesy · About me · People and family · Describing people and things · Everyday verbs · Food and drink. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/cs/respell.js "<Czech text>"` (or `require` it in a small script of your own) and paste the output unchanged. If the tool's result is wrong for a string, do NOT edit the tool (other writers are using it): keep the tool's output in your file and list the string with the pron you believe is right in your report, so the lead can add it to the tool's lexicon and regenerate.

DECKS: 16–18 cards per deck, at the level and tone of the profile's sample cards (include the samples). A card's `target` is one phrase or sentence a learner will actually say or hear; single words only in vocabulary-style decks, and then with their article so gender is learned with the noun. No target appears in two decks (the other deck writer owns the other half: do not duplicate obvious phrases from decks outside your list — check the profile's samples for those decks). EXTRA: at least 3 dialogues and 2 examples per deck for your cards, and 9 patterns in total.

Standard Czech. Produce vy. Never type a ty answer. Pron comes from respell.js. If the tool throws, do not invent a pron. accents is false: mark strict when a pair differs only by á é í ó ú ů ý or by č ď ě ň ř š ť ž. Long and short vowels must stay different. ř is rzh or rsh. Do not hand-edit a pron.

Then check and report as TARGET-BRIEF says.
