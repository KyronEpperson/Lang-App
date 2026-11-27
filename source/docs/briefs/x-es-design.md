# x-es design: Spanish as the fifth target half, recognised by the course's own inventory

**Status (2026-11-27):** steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 are done. `tools/halves/target/es/` and the English reference half `native/en/es/` are exported from en-es (`tools/target/es/`, `node tools/target/gen.js es`).
- `proof.js es`: 0 differences, 0 missing rows. A second export is byte-identical.
- `validate.js en es`: 0 errors, 0 warnings.
- Every pack in `packs/` is byte-identical to before; `proof.js zh|yue|vi` still give 0 differences; `proof.js` (ko) is unchanged at its baseline (10 raw / 11 runtime).
- `selftest.js`: 7 new es cases pass. The only failure is the known "export refuses moved positional ids".

No native half is scaffolded (steps 6–7 not run). Nothing in `packs/` or `tools/target/es/` was written. `packs/course-en-es.js` is the regenerated pack plus the SECS / READS blocks that `tools/sections/apply.js` and `tools/lessonread/apply.js` append; the proof's "NOT the same as the regenerated pack" line refers to that tail only.

## 1. How Spanish text is recognised

Spanish is "by marks" like Vietnamese (`x-vi-design.md` §1): whole target fields live in `target/es/` by position, and spans inside mixed native fields are recorded in `target/es/marks.jsonl` and required by `validate.js`. What differs is the classifier. Spanish has no syllable grammar that tells `no`, `me`, `come` from English, so **the test is the course's own inventory**.

**The inventory** (`tools/halves/targets/_inventory.js`) is every string the course puts in a target-only position:
- card fronts, dialogue lines, examples, pattern text and examples, greetings;
- lesson sentences (`{{ex:…}}`), in-lesson card fronts, tile fronts;
- answers, options, wrong typed answers and the fill sentence of `fill`, `order` and `type` items.

mc and check options are *not* in it, because they are what it classifies. From it come a **phrase set** (2,056 punctuation-free strings) and a **lexicon** (1,237 words). `export_target.js` fills it from the pack (`TC.useCourse(c)`). Other tools load it lazily from `target/es/` using the same fields, so both give the same answer; the selftest checks this.

**Whole-string test** (`isValue`: an mc / check key, a tile reading, an in-lesson card front, a title). A string is Spanish when it is any of:
- a letter or letter group of `targets/es.js` (`ñ`, `ll`, `gue` …);
- a pronunciation piece or line: the profile's `pronPattern` with a hyphen or a CAPITAL chunk, or a listed bare piece (`ah`, `seh`, `gw`);
- a phrase of the inventory;
- a string where enough words are in the lexicon: both of two words but one, two thirds of a longer string, and at least one that is not an English homograph.

Digits are never Spanish.

**Per item, once:** an mc / check item is target when its key passes, or when more than half its options pass. This catches «comes» among come / como / comen. Its options are then all target or all prose. Result: 61 of 78 checks and 127 of 130 mc items are target.

The exporter lists 9 items whose distractors would classify differently, all deliberate misspellings (`puedemos`, `haco`, `cientoveinte`) or one prose explanation that quotes «los niñas». None needs action.

**Spans in mixed native fields** (`marks(kind, text, own, extra)`, the same contract as `viMarks`):
- **in bodies:**
  - `<b>…</b>` whose words are all in the lexicon or that passes the whole-string test, recorded with its tags;
  - `<td class="k">` text outside `(…)`;
  - `<i>` holding a pronunciation line.
- **in every field:**
  - `X (LINE)` and `X, LINE` where LINE is exactly `tools/target/es/respell.js`(X). This is self-certifying, and both parts are marked (`pingüino, peen-GWEE-noh`).
  - Every word of the row's own target text, except:
    - single letters without a diacritic;
    - pieces next to a blank;
    - English homographs.
  - `extra.spans` from the hand-kept `tools/target/es/marks.extra.jsonl`. That file is to be read by `export_target.js` (the other team's mechanism, not yet in the exporter); `extra.not` drops words from own-text marking.

**English homographs** (in `targets/es.js`) are not taken as own text and not reported:
- everyday English words that are also course words: `no`, `me`, `come`, `son`, `once`, `hotel`, `doctor`, `final` …;
- interjections;
- borrowed food words (`tacos`, `tortillas`);
- names (`Chicago`, `Diego`).

**Unmarked** means a word outside every span that is in the lexicon (two letters or more, not a homograph) or that carries `ñ á é í ó ú ü`. Words right after an apostrophe (the `ll` of `you'll`) are skipped. These words are reported, never guessed into spans.

## 2. Numbers

`target/es/`:
- 29 decks, 925 cards (876 with notes), 6 groups;
- 111 dialogues, 253 examples, 27 patterns;
- 26 lessons with 208 example rows (208 sentences);
- 2 in-lesson decks with 23 cards; 5 tile sets (3 tile hints stay native: `silent`, `opens ?`, `opens !`);
- 78 checks: options 244 target, 68 prose;
- 364 practice items (130 mc, 78 each of fill, order and type): mc options 508 target, 12 prose; all 78 hints native.

`marks.jsonl`: 968 fields, 2,659 spans.

| Field | Fields | Spans |
|---|---|---|
| card notes | 454 | 728 |
| bodies | 26 | 946 |
| practice why | 329 | 688 |
| practice hint | 65 | 133 |
| check why | 53 | 113 |
| other (p, q, lesson-card notes, meanings) | 41 | 51 |

`native/en/es/`: 16 labels, 23 lesson-card rows, 9 `uiKeys`, 29,556 words (validator count).

The target half holds no English: every string outside the inventory is a deliberate wrong form (`Hayn`, `Fuí`, `problemo`). The only English is `course.json` `uiKeys`, which lists the English interface strings a native half overrides (the same as vi).

## 3. Reported, not fixed: `native/en/es/unmarked.tsv`

1,022 fields hold 1,775 words (counted once per field). By field:
- card notes 643;
- practice why 142;
- practice hint 67;
- check why 41;
- body 26;
- check q 24;
- check o 17;
- lesson titles 15;
- practice q 14;
- the rest under 10 each.

Most are grammar words quoted in prose (`the yo form`, `estar`, `el / la`) and a note's other example words. The en-es source is unchanged. The en-es team should mark these spans (bold or `word (line)`), or list them in `marks.extra.jsonl`, and then run `export_target.js es` again.

## 4. Engine check (step 5, by script)

A fake French half was built in scratch:
- `mk_native.js fr --target es`;
- every prose field set to `FR …`;
- `--merge`;
- `validate.js fr es --all`: 0 errors;
- `assemble.js`.

That fr-es pack was pushed through the app's own `validCourse` / `setCourseTables` in headless Chromium:
- valid, with no page errors;
- `cleanLessonHTML` changes nothing;
- 208 example rows expand;
- trainer gates are identical to en-es (all features off; type, listen, role and say on; pick off);
- `ttsLang` is es-MX, and the accent keys and 12 UI overrides arrive.

The Spanish side is byte-equal to en-es in all of these:
- card fronts and readings;
- practice answers;
- dialogue;
- `{{ex}}` text and pronunciation;
- greetings.

Only the three native tile hints differ.

**Not verified here:**
- a tab-by-tab click walk (`harness.js`, not run);
- recorded audio (there is no `audio/` folder in this build home).

**Engine follow-ups:**
- The pronunciation line is an English-reader respelling (`KAH-sah`, `ehl`). French and Portuguese readers misread it; the native half's first lesson must explain it, or a per-native respelling is needed.
- `mk_native.js` README and `REPEATS.md` still say "Chinese / Han / pinyin" (`REPEATS.md: 90 Chinese sentences`).
- The "almost" credit for missing accents and the optional `¿ ¡` must hold for non-English UIs.
- The `keys` accent bar may duplicate a learner's own keyboard (fr, pt).
- `sayText` speaks blanks as English.

## 5. Open

- **Source marking** of the 1,022 fields above (en-es team).
- **Homograph list** is hand-kept. A native half whose language shares more words with Spanish (pt, it) adds no risk: marks are computed from the English half, and the own-text rule keeps quoted Spanish verbatim. The list only stops English words from being protected or reported.
- **Inventory drift:** a new Spanish word that appears only in an mc option is not in the lexicon. The per-item majority rule covers this for now.

## 6. The next Latin-script target (id, tl, pt, fr, it, de): step by step

1. Write `tools/halves/targets/<t>.js`, about 30 lines copied from `es.js`: `letters`, `pronParts`, `diacritic`, `homographs` (start from the course's names and the lexicon words that appear in English card meanings), `respell` and `profile` paths.
2. Add one line to `TARGETS` in `lib.js`: `<t>: require('./targets/<t>.js')`.
3. `sha1sum packs/course-*.js > /tmp/packs-before.sha1`.
4. `node tools/halves/export_target.js <t>`, then read the option review line and `native/en/<t>/unmarked.tsv`. Tune `homographs` / `pronParts` and repeat until the review list holds only deliberate wrong forms.
5. `node tools/halves/proof.js <t>` (0 differences), then export again and `diff -r` (byte-identical).
6. `node tools/halves/validate.js en <t>`, `node tools/halves/selftest.js`, `sha1sum -c /tmp/packs-before.sha1`, and `proof.js ko|zh|yue|vi|es`.
7. Step 5 as in §4: scratch copy, `mk_native.js xx --target <t>`, fake fill, `--merge`, `validate`, `assemble`, then push the pack through `validCourse` / `setCourseTables`.

No change to `export_target.js`, `validate.js` or `assemble.js` is needed: the hooks (`useCourse`, `itemIsValue`, `unmarkedNote`) are read from the target's own config.
