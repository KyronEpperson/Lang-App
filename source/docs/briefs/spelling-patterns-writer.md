# Brief: the spelling-patterns section of an English course (FND-1, English for X)

You write ONE new last section for lesson 1 (`alphabet`) of the English course for speakers of one language (`<lang>`, course id `<lang>-en`). The lesson already teaches the 26 letter names. Your section teaches the step after that: how English letters combine to spell sounds, chosen for THIS native language. It is the counterpart of "stacking" in Korean lesson 1.

Work only in `/home/claude` (a copy; the real build home is not yours). Do not touch git. Do not edit any file other than the two named below and the patch script you write.

## Read first (only these)
1. `/home/claude/tools/content/<lang>/lessons.js`: the `alphabet` lesson (whole) and the `pron` lesson (whole). Do NOT repeat what `pron` already teaches; point to it in one clause if needed. Match the voice, the respelling key and the HTML of these two lessons exactly.
2. `/home/claude/tools/sections/<lang>-en/sections.json`: keys `_about` and `alphabet`. `alphabet` maps a section's number (0 = the first `<h3>` section, which also owns the intro text before it) to cards added to that section's flashcards. A card is `[front, reading, meaning, ""]`: English front, the course's respelling as reading, the native-language meaning.
3. `/home/claude/docs/briefs/foundations-writer.md`, the line that starts "- Tiles:" (the `{{tiles:…}}` token; `x=reading`, an underscore shows as a space).
4. `/home/claude/tools/content/<lang>/` deck file(s): only to check that a word you want as an example or card is not already a card front elsewhere in the course (grep for it; do not read the files whole).

## What to write
- One `<h3>` section appended at the very END of the `alphabet` lesson body (after the last tip), written in the native language like the rest of the lesson. 120 to 220 words of prose in the lesson's voice, no em-dashes.
- Content: 8 to 12 spelling patterns that a speaker of this language most needs to read English aloud, picked by what differs from their own spelling: usually `sh ch th ph wh ck ng qu`, silent final `e` (a_e, i_e, o_e), `ee ea oo ou ow ai ay igh`, silent letters (`kn wr`). Prefer patterns whose reading surprises this reader. Each pattern gets two everyday example words, beginner level.
- A table in the lesson's own table markup: pattern, how it sounds (the course's respelling), two examples.
- Under the table: `{{tiles:…}}` with every pattern as a tile and a hand-written reading (`sh=…`), using the respelling key. Use `_` for a space inside a reading; a pattern with a gap like a_e cannot use `_` in the tile face, write it as `a-e`.
- Flashcards for the section: 8 to 10 cards, each a real, common English WORD that shows one pattern (not the bare pattern), added to `sections.json` under `alphabet` at the new section's number. No front that is already a card front anywhere in the course. Readings in the same respelling style as the neighbouring cards; meanings in the native language.

## How to deliver
Write `/home/claude/tools/patches/spelling_<lang>.py`: a Python script that makes both edits (lesson body insert with a unique anchor and an assert that it is not applied twice; the `sections.json` entry, written back with the file's existing formatting: read how the file is indented first). Then run:

```
cd /home/claude && python3 tools/patches/spelling_<lang>.py && node tools/content/gen.js <lang> && node tools/content/validate.js <lang> && node tools/content/alphabet_check.js <lang> && node tools/sections/apply.js && ./build.sh && node tools/sections/check.js <lang>-en
```

Fix until all pass. If `build.sh` writes outside `/home/claude`, stop and report instead of working around it.

## Report (short)
The patterns chosen and why for this language, the cards, the command output's last lines, and anything you were unsure of (a respelling, a regional reading). Nothing else.

## Learned from the first batch (read before writing)
- Never state a pattern as a rule without exceptions. Name the everyday words that break it, in the prose or the table: have, give, come, love (silent e); book, good (oo); bread, head (ea); you (ou); snow (ow); school (ch).
- The `pron` lesson comes AFTER this one: write "you will see it in the next lesson", not "as we saw".
- Do not reuse an example word that `pron` already uses in its tables.
- Write gap patterns as `a-e` in both the table and the tiles.
