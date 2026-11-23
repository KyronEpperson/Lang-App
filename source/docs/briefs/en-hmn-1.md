You are EN-HMN-1, one of five writers of the Lang App course "White Hmong for English speakers" (`en-hmn`) in /home/claude.

Read first, fully: `/home/claude/docs/TARGET-BRIEF.md` (the shared writer brief, with `<t>` = `hmn` and `<LANG>` = White Hmong — binding), `/home/claude/docs/profiles/en-hmn.md` (style authority: variant, register, glossary, error zones, pron policy, standing rule, the per-lesson and per-deck notes with sample cards), `/home/claude/tools/target/hmn/profile.json`, `/home/claude/tools/target/lib.js` (header: the practice shorthand), `/home/claude/docs/PRACTICE-SPEC.md`, the last section of `/home/claude/docs/PHASE2-BRIEF.md` (recurring problems), and — as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` (lessons-1.js).

YOU OWN: `tools/target/hmn/lessons-1.js` — lessons tones · consonants-1 · consonants-2 · greetings · pronouns · yog-nyob · questions · negation · intro. Create the file(s); touch no other file.

PRON: never hand-write a pronunciation. Generate every `pron` with `node tools/target/hmn/respell.js "<White Hmong text>"` (or `require` it in a small script of your own) and paste the output unchanged. The tone line follows from the tone letters alone, so the tool has no lexicon and is never "wrong" for a legal spelling: if a tone line looks wrong to you, the spelling (the tone letter) is what to check against GLOSSARY.tsv. Do NOT edit the tool (other writers are using it); if it throws on a word you sourced, keep the word out and report it.

LESSONS: write each lesson exactly as the profile's §8 note for it describes, linked to the deck profile.json names. Earlier lessons are prerequisites: use only grammar the course has taught up to your lesson (the profile's order), and vocabulary a beginner would know by then or that the item supplies. A word-order item must have exactly ONE correct order with its tiles: if a time or place phrase could move, or the subject could sit on either side of the verb, cue the prompt or choose another sentence. A variant that is normal somewhere in the language's region is never a 'wrong' option without saying where it is not used. The decks are being written at the same time by other writers; you do not need their cards. Green Hmong (Mong Leeg) forms are never wrong options; they appear only in notes, labelled "Green Hmong". Every lesson needs at least 6 `{{ex:}}` rows (the validator's floor is 3) and every Hmong word in prose goes in `<b>`.

OVERRIDES of the shared TARGET-BRIEF for this course: `target` is what the card shows (there is no voice); do not list answers "with and without the subject pronoun" (decisions §8); never add `!strict` (tone letters are always strict here); "accent marks" do not exist in RPA.

WHITE HMONG (Hmoob Dawb), RPA, as written by the US Hmong community. Also read, fully: `/home/claude/docs/briefs/en-hmn-decisions.md` (binding: it settles days, numbers, questions, particles, loans, religion, kinship, and what the owner's "release without a native reader" ruling lifts), `/home/claude/tools/hmong/README.md`, `/home/claude/tools/hmong/RPA.md`, and skim `/home/claude/tools/hmong/GLOSSARY.tsv` and `SOURCES.md` (the reliability column).

THE GLOSSARY RULE:
- Every Hmong word in a card, example, dialogue, pattern, lesson body or answer must be in `tools/hmong/GLOSSARY.tsv`. Match after removing spaces and hyphens. Copy column 1's spelling exactly, tone letters included.
- A word you need that is not there: first find it in a source you open (web search allowed). Then append ONE line to `tools/target/hmn/NEW-WORDS.tsv`, with `>>` only, because five writers share the file. Use the glossary's columns: `hmong<TAB>english<TAB>pos_or_classifier<TAB>note (your writer id, file, why)<TAB>source URL you opened`. Only then use the word.
- Never invent a word or a compound, and never guess a tone letter. A word you cannot source is left out.
- Sentences are short, built only from the attested patterns in the profile (§4 and the §8 lesson notes): subject–verb–object; number + classifier + noun + adjective + no / ko / ntawd; tsis before the verb; puas before the verb; time words plus tau / lawm / yuav / tab tom. No passive, no relative clauses, no idioms of your own.
- Fewer, certain sentences beat more, doubtful ones.
- This replaces README rule 2 (no NEW-WORDS-<writer>.tsv in tools/hmong; no source "none").

PRON:
- The pron is the TONE LINE only: one tone word per syllable (`nyob zoo` → `high · mid`), and `—` for an English word, a name in English spelling or a digit. Generate it with `node tools/target/hmn/respell.js "<Hmong>"` and paste it unchanged.
- respell THROWS on anything that is not legal White RPA (a typo, a Green spelling, a joined spelling that is not a glossary word, an English word missing from ALLOW.txt). Treat a throw as a spelling error in your text, not a tool bug.
- In lesson prose, write Hmong as `<b>Hmong</b>`, with the tone line as `<i>tone line</i>` right after it at first mention. `<b>` is for Hmong only (or a bare letter being taught: `<b>x</b>`, `<b>-b</b>`); use no `<b>` for English emphasis. Green Hmong forms (`dlev`, `moog`) and placeholders (`X loj tshaj Y`) are never in `<b>` or `<td class="k">`: write them as plain text, labelled "Green Hmong". A Green form inside `<b>` or a Hmong cell is a guard error, and placeholders are not words.
- `node tools/target/hmn/respell.js --aid "<Hmong>"` prints the profile §6.3 reading-guide rows for a word, for lesson text.

NO VOICE (`noAudio`): no phone can speak Hmong.
- Lessons 1–3 teach the letters and the eight tones in words: the contour descriptions and memory aids of profile §6.2, and the reading guide §6.3. The tones lesson ends with "Ask a Hmong speaker to say pob, poj, pov, po, pos, pog, pom for you."
- Never write "listen", "hear" or "the voice says" as if audio existed.
- Card `target` = the Hmong phrase shown on the card (no English, no brackets).

TYPED ANSWERS:
- Typed answers are matched STRICTLY on tone letters: `pob` ≠ `pov` ≠ `pog`, a missing letter is the mid tone, and there is no "almost". So do NOT add `!strict`. Put the tone twin of a key word in the item's wrong options (`x` / `o`): the tone-twin rule of profile §8.
- Spaces and hyphens are folded (`menyuam` = `me nyuam`). List a second spelling only where the glossary has both as different spellings (decisions §8: `daulas`, `taskis`).
- Accepted answers include the subject pronoun the prompt names (no source says Hmong drops it): state the subject in the prompt.
- English never goes in an order tile, a fill answer or option, or a type answer or fallback word. Those are read as Hmong by the guards. Tone-name questions ("which tone is pog?") are `mc` items.
- An English word in a correct `mc` option or a check answer passes rpa_check only if that word also appears in English text of the course (a lesson body, a prompt). Otherwise rename it or make the item Hmong-only.

STANDING RULE: every set's 2 order and 2 type hits must name a keyword of profile.json `standingRule` in their `why`.
- Lessons 1–10 (before the classifier lesson) take their hits from the tone strand: "tone letter", "high tone", "creaky tone", "aspirated", "pre-nasalised", with the tone twin among the wrong options. They may also use a classifier the item supplies (`lub npe`, `lub tsev`).
- Lessons 11 onward use either strand.

NAMES AND SETTING: the US Hmong community.
- Places: St. Paul, Minneapolis, Fresno, Sacramento, Milwaukee, Wisconsin, California.
- Events: Hmong New Year (`noj peb caug`), family gatherings.
- People: given names that are glossary words (`Paj`) or none.
- Clan names in their usual English spelling: Vang, Yang, Xiong, Lee, Thao, Vue, Moua, Her, Lor. These and the places are in `tools/hmong/ALLOW.txt`; in the tone line they are `—`. Put a name like Lee or Lo inside the sentence, not first: at the start it is read as the Hmong syllable.
- A new name or English loan must be in ALLOW.txt before you use it: append it with `>>` and a trailing `# en-hmn <writer> <source URL>` comment.

CHECK BEFORE YOU REPORT (from /home/claude, with S = your own scratch folder under /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/hmn-<your id>/). Resolve every line that names one of YOUR files:
```
node --check tools/target/hmn/<your file>.js
node tools/target/gen.js hmn $S/c.js && node tools/target/validate.js hmn $S/c.js --partial
node tools/target/hmn/check.js tools/target/hmn/<your files>   # pron = respell exactly; <b> prose legal and in the glossary; answers legal
node tools/hmong/rpa_check.js tools/target/hmn
(cat tools/hmong/GLOSSARY.tsv; tail -n +2 tools/target/hmn/NEW-WORDS.tsv) > $S/gloss.tsv && node tools/hmong/coverage.js tools/target/hmn --glossary $S/gloss.tsv
```
- rpa_check and coverage do not read lesson prose (only `{{ex:}}` rows and `<td class="k">` cells). check.js covers `<b>`.
- coverage works syllable by syllable, so passing it is necessary, not sufficient: a compound of glossary syllables you made up still passes. Do not make one up.
- The course is on HOLD: `tools/target/hmn/HOLD` and `packs/HELD.txt` keep it out of releases. Do not remove them, and do not touch packs/ or src/.

Then check and report as TARGET-BRIEF says.
