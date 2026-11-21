# The `alphabet` lesson and deck: fixed English side (identical in every English course)

Every string under "ENGLISH (fixed)" is copied byte for byte. Everything marked NATIVE is written by you in the course's language, in the course's established register and conventions.

## A. Lesson order and deck position
- Lesson id `alphabet`. `tools/content/lib.js` ORDER now starts with `alphabet`, so it is lesson 1 of every course; you only add the lesson object to `tools/content/<lang>/lessons.js` (put it first in the array) and its practice set to `tools/content/<lang>/practice.js` (first key).
- Deck: a new deck of 26 cards, inserted in `decks.js` as the **21st deck** — directly after the 20th deck (the movies / series / slang deck) and BEFORE any deck that only your course has. NATIVE deck name meaning "The alphabet" (short, like the other deck names).
- `meta.js`: add the deck to the END of the first group in GROUPS, to TAGS.basics (end of the list) and to DESC (one NATIVE line: letter names, spelling aloud). Do not add it to PLAN_PRESETS deck lists that name decks explicitly; "@path" picks it up by itself.
- Lesson object: `deck:` = your alphabet deck name.

## B. The 26 cards — ENGLISH (fixed) target = the capital letter alone
Card line: `<LETTER> | <pron of the letter NAME in your course's pron convention> | <NATIVE meaning> | <NATIVE note>`
Targets, in order: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z (one card each, the target is exactly the one capital letter).
Letter names (American), as IPA for reference — convert to your course's convention (your PRON-RULES / pron tool; in IPA courses every stressed syllable carries ˈ exactly as the rest of your course writes monosyllables):
A eɪ · B biː · C siː · D diː · E iː · F ef · G dʒiː · H eɪtʃ · I aɪ · J dʒeɪ · K keɪ · L el · M em · N en · O oʊ · P piː · Q kjuː · R ɑːr · S es · T tiː · U juː · V viː · W ˈdʌbəljuː · X eks · Y waɪ · Z ziː (American "zee", never "zed").
If your course already has a pron for the same English string (for example the word *I*), the letter card must use the identical pron (lint compares them).
NATIVE meaning: must contain your script (validator): say it is the letter and show both cases, e.g. the equivalent of «letter A a». NATIVE note: one short line each — an example word that starts with the letter and is already taught in the course where possible (apple, book, coffee…), plus, where it matters for YOUR learners, the trap: the letter NAME differs from how your language names or reads it (E vs I, G vs J, A vs E vs I, W "double-u", Z "zee", H "aitch", R, V vs B, C vs S, K vs Q…). Do not repeat the same sentence 26 times.

## C. Lesson body — NATIVE prose around ENGLISH (fixed) rows
Title and blurb: NATIVE (title meaning "The alphabet: letter names and spelling aloud", numbered like your other titles if your course numbers them — it is lesson 1, so renumber nothing else unless your titles carry numbers; if they do, tell the lead in your report instead of renumbering 40 titles).
Body sections (NATIVE headings and explanations, written for YOUR learners — what is different from their own alphabet or script, which letter names they confuse):
1. Why letter names matter: spelling a name, an email address, a booking code aloud. One short paragraph.
2. A table of the 26 letters with their names in your pron convention (4 or 5 columns of letter + name so it is compact; mark the five vowels A E I O U).
3. The names your learners confuse (a small table or list, chosen for your language).
4. Spelling aloud, with these ENGLISH (fixed) example rows, in this order, each as `{{ex:English|pron|NATIVE meaning}}`:
   - `How do you spell that?`
   - `How do you spell your last name?`
   - `Can you spell that, please?`
   - `It starts with a capital T.`
   - `B as in boy.`
   - `Is that M as in Mary?`
   - `There are two Ls in hello.`
5. `a` or `an` before a letter name: it follows the SOUND of the name — `an F, an H, an L, an M, an N, an R, an S, an X` (names start with a vowel sound) but `a U` (name starts with /j/) — two or three lines, NATIVE.
6. A closing tip (NATIVE): capital = "capital T", doubled letter = "double L", @ = "at", . = "dot".

## D. Lesson check — 3 questions. NATIVE question text and `why`; ENGLISH (fixed) options, correct one FIRST in this list (place it at any position, as your other checks do)
1. Which letter's name is /dʒiː/ (write the name in your pron convention in the question)? options: `G` (correct), `J`, `Z`, `C`
2. Which is right? options: `an F` (correct), `a F`, `an U`, `a M`
3. How do you ask someone to spell a word? options: `How do you spell that?` (correct), `How do you spelling that?`, `How spell you that?`, `How does it spell?`

## E. Practice set — exactly 14 items: 5 mc, 3 order, 3 fill, 3 type. NATIVE prompts, `why`, hints; ENGLISH (fixed) answers and distractors
mc (correct option first here):
1. Which letter's name sounds like the word *see*? — `C`, `S`, `Z`, `K`
2. Which letter comes right after Q? — `R`, `P`, `S`, `O`
3. Which is right? — `an M`, `a M`, `an B`, `an U`
4. Which one is a vowel? — `U`, `R`, `S`, `W`
5. What is the letter W called? — `double u`, `double v`, `u u`, `v v`
order (tiles in order; distractor tiles after "x:"):
6. `How do you spell that` x: `spelling does`
7. `My name starts with an S` x: `a start`
8. `There are two Ls in hello` x: `is L`
fill (sentence with __, answer, distractors):
9. `How do you __ your name?` — `spell` — `spelling|spells|spelled`
10. `It starts __ a B.` — `with` — `by|for|in`
11. `That's M __ in Mary.` — `as` — `so|than|of`
type (accepted answers; hint = the key words in English plus a NATIVE note in your course's hint format; "x:" = wrong words for the tile fallback):
12. NATIVE prompt meaning «It starts with an A» — `It starts with an A|It begins with an A` x: `the start`  (NOT `a`: a tile `a` in the last position would equal the answer)
13. NATIVE prompt meaning «How do you spell your name?» — `How do you spell your name` x: `spelling does`
14. NATIVE prompt meaning «It has two Ts» (cue it so that this is the natural answer) — `It has two Ts|There are two Ts|It has two T's|There are two T's` x: `T have`

STANDING RULE (your course's own): items 7, 8, 12 and 14 hinge on an article or a plural (7 and 12: *an* before a letter name that starts with a vowel sound; 8 and 14: the plural *Ls / Ts*); items 6, 7, 8, 12, 13 and 14 hinge on the verb core (6 and 13: the auxiliary *do*; 7 and 12: third-person *-s* in *starts*; 8: *are* agreeing with *two Ls*; 14: *has*). Write each `why` so that it uses YOUR course's standing-rule keyword for the point it tests (run the validator: it tells you if a set falls short).

## F. Roadmap title
`tools/i18n/<lang>/roadmap.json` has a new entry with the key `The alphabet and spelling aloud`: fill its `t` (NATIVE). Korean and English courses have no such file entry to fill for their own language.

## G. Notes from the Korean pilot (binding)
- Every one of the 14 practice items has a `why`, including the three type items (the standing rule is read from the `why`).
- Check question 1 must have ONE right answer in YOUR pron convention: if your respelling writes the names of G and Z (or G and J) the same way, describe the sound in the question (G = the first sound of *job*, plus "ee") instead of only writing the name.
- If your pron convention writes two letter names identically (for example B and V), tag them the way your course already tags such pairs.
- The reference pack in packs/ does not have the lesson yet, so `parity.js` will print differences about `alphabet`, the deck count and deck #21: expected. Any OTHER parity line is yours to report.

## H. EXACT ORDER (binding — the parity check compares positions)
- Lesson check options, in exactly this order, with the answer at this index (0-based): Q1 `J`, `G`, `Z`, `C` → answer index 1 · Q2 `a F`, `an U`, `a M`, `an F` → answer index 3 · Q3 `How do you spell that?`, `How do you spelling that?`, `How spell you that?`, `How does it spell?` → answer index 0. (This replaces "place it at any position" in section D.)
- Practice: mc options in exactly the order section E lists them (correct first); order distractor tiles, fill distractors, type accepted answers and type fallback words in exactly the order section E lists them.
