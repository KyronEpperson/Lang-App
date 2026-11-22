You are EN-CS-2, one of five writers of the Lang App course "Czech for English speakers" (`en-cs`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `cs` and `<LANG>` = Czech — binding), `/home/claude/docs/profiles/en-cs.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/cs/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (lessons-1.js).

YOU OWN: `tools/target/cs/lessons-2.js` — lessons negation · numbers · adjectives · accusative · restaurant · family · likes · modals. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/cs/respell.js "<Czech text>"` (or `require` it in a small script of your own) and paste the output unchanged. If the tool's result is wrong for a string, do NOT edit the tool (other writers are using it): keep the tool's output in your file and list the string with the pron you believe is right in your report, so the lead can add it to the tool's lexicon and regenerate.

LESSONS: write each lesson exactly as the profile's §8 note for it describes, linked to the deck profile.json names. Earlier lessons are prerequisites: use only grammar the course has taught up to your lesson (the profile's order), and vocabulary a beginner would know by then or that the item supplies. A word-order item must have exactly ONE correct order with its tiles: if a time or place phrase could move, or the subject could sit on either side of the verb, cue the prompt or choose another sentence. A variant that is normal somewhere in the language's region is never a 'wrong' option without saying where it is not used. The decks are being written at the same time by other writers; you do not need their cards.

Standard Czech. Produce vy. Never type a ty answer. Pron comes from respell.js. If the tool throws, do not invent a pron. accents is false: mark strict when a pair differs only by á é í ó ú ů ý or by č ď ě ň ř š ť ž. Long and short vowels must stay different. ř is rzh or rsh. Do not hand-edit a pron.

Then check and report as TARGET-BRIEF says.
