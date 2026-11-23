# Writer brief: Core words, Flirting and Compliments decks for one finished course

You add decks to ONE finished Lang App course for English speakers: `en-<t>` in /home/claude/tools/target/<t>/ (the launching message gives `<t>` and the language). The course is LIVE: you may only ADD the files listed below and APPEND deck entries to `profile.json`. You may not change any existing deck, lesson, card, the pronunciation tool or its lexicon (exception below), or any file outside `tools/target/<t>/`. Other agents are editing `src/app.html`, `tools/halves` and other courses: stay in your folder. Scratch scripts go in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/core/<t>/` (never run scripts from another folder there).

Read first: `/home/claude/docs/briefs/core-words.md` (the full brief: what each deck holds, the rules, the three-layer Flirting deck, POS coverage), the course profile `docs/profiles/en-<t>.md` (variety, register, pron policy), the finished Spanish example in `tools/target/es/` (`decks-t1.js`, `decks-t2.js`, `decks-f.js`, `decks-c.js`, their `extra-*.js`, `CORE-SOURCES.md`, `POS-COVERAGE.md`), `tools/target/lib.js` (file loading, row formats), and, if it exists, `docs/plans/compliments-<t>.md`.

Deliver, in `tools/target/<t>/`:
1. `decks-t.js` + `extra-t.js`: the nine Core words decks, fitted to THIS language's grammar (brief rule 2: rename or add a slot where the language differs — particles or postpositions instead of prepositions, a `Top measure words` / `Top counters` deck where the language has them, case-marked languages give the dictionary form; never invent a class). Group name `Core words`. No size limit; stop when the next word would be rare for a beginner.
2. `decks-f.js` + `extra-f.js`: one `Flirting` deck in three layers (the words; phrases built from them; moves and replies including at least two kind, clear ways to say no). Warm, respectful, for adults; nothing sexual or crude. Where open flirting is indirect in the culture, write what people really say and note it.
3. `decks-c.js` + `extra-c.js`: an everyday `Compliments` deck (food, work, skills, someone's home, effort; and how people ANSWER a compliment in this culture), 20–40 cards. If `decks-c.js.draft` / `extra-c.js.draft` exist, start from them (rename to `.js`, then extend and fix); if the course already has a Compliments deck in `profile.json`, skip this item.
4. `CORE-SOURCES.md` and `POS-COVERAGE.md` as the brief describes (coverage table against the course's own lessons; proposed lessons outlined, not written).
5. `profile.json`: APPEND `{"name","group","desc"}` for each new deck at the end of `decks` (Compliments and Flirting in the course's social/conversation group; the core decks in `Core words`). Keep the file's formatting; change nothing else.

Rules that earlier courses got wrong:
- Frequency: try to open a real frequency source (WebSearch then WebFetch: Wiktionary frequency lists, a national-corpus list, a subtitles list, a frequency dictionary's public top list). Earlier writers could only reach partial lists: use what you can open for the top of each deck, order the rest by judgement, and SAY SO precisely in `CORE-SOURCES.md` (which ranks come from a source). Never claim a source you did not open.
- No card whose target already exists as a card anywhere in the course, and no card in two of your decks (the release check fails on duplicates, comparing the target text; also avoid pairs that differ only by punctuation or an article). Collect every existing target first (all `decks*.js`) and list the skipped words per deck in `CORE-SOURCES.md`.
- Each meaning unique within its deck. Meanings and notes in English, notes one short line.
- Pron: never by hand. Generate with the course's own tool (`require('/home/claude/tools/target/<t>/respell.js')` in your script) and paste unchanged. Lexicon-first tools (they throw on unknown words: nan, am, bn, zh/yue-style lexicons): add missing words ONLY to your own new file `tools/target/<t>/lexicon-add-T.txt` in that tool's format with a real source per line or `unverified:model`; if the tool cannot read an add-file, leave the word out and list it. Courses whose `profile.json` has `"pron":"none"` or no `respell.js`: follow what the existing decks do (look at their second column).
- Examples and dialogues as the brief says; every `extra` row's key must equal a card target exactly; sentences use course-level vocabulary plus the card's word; a card's example must contain the card's word.
- Typed-answer safety: these are decks, not practice items, so nothing else to check.

Checks (run from /home/claude; do NOT create a HOLD file — the course is live and must keep building):
```
node tools/target/repron.js <t>        # twice; the second run must report 0 rewritten
node tools/target/gen.js <t>           # writes packs/course-en-<t>.js
node tools/target/validate.js <t>      # must end with PASS and print no "is in two decks" line
```
If `gen.js` or `validate.js` fails because of YOUR files, fix them; if you cannot get a PASS, move your new `decks-*.js` / `extra-*.js` out of the folder (to your scratch folder), restore `profile.json`, re-run gen so the live pack is rebuilt as it was, and report. Never leave the course in a failing state. Do not run `./build.sh` or `tools/curriculum/ship.sh`; do not commit.

Report (short): cards per deck; examples / dialogues counts; frequency source and exactly what is ordered by judgement; skipped-as-already-taught counts; class slots you renamed or added and why; pron tool problems (words left out); the validator's last line; POS gaps found; the 10 cards a native speaker should check first.
