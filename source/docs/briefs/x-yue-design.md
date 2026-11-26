# x-yue design: Cantonese as the third target half

Status: steps 1–4 of `docs/HALVES-BLUEPRINT.md` §3 done (2026-11-26). `tools/halves/target/yue/` and the English reference half `tools/halves/native/en/yue/` are exported from en-yue (`tools/target/yue/`, `node tools/target/gen.js yue`) and proven. Part 2 (same day): `validate.js` and `mk_native.js` know the new pieces (`validate.js en yue`: 0 errors), and `target/zh/` was re-exported with en-zh's foundation lessons (§4). No native half other than English exists yet on yue, and nothing in `packs/` was written.

Related: `docs/HALVES-SPEC.md` (format; §11 second target), `docs/briefs/vi-zh-design.md` (the zh generalisation this builds on), `tools/patches/foundations.py` (FND-1: `sections` and `{{tiles:…}}`).

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/lib.js` | `TARGETS.yue`: field `yue`, protected script Han (`HAN_RX`, the same runs as zh; en-yue has no characters outside the BMP), `isValue` = `isCantoneseValue` (Han with no Latin letters, or `isJyutping`), `leadRx` as zh. `isJyutping`: the whole string passes the en-yue profile's `pronPattern` (syllables with tone digits 1–6, optional punctuation), or it is a bare Jyutping initial (`gw`, `j`, `c` …) or final (`oe`, `aa`, `eo` …), which count as language-neutral quiz material, as pinyin initials do for zh. ko and zh entries are untouched. |
| `tools/halves/export_target.js` | Maps lesson `sections` and `{{tiles:…}}` tokens (§3); `Alloc` also accepts previous rows (for ids that live inside `lessons.jsonl`); writes `native/en/<t>/lessoncards.jsonl` when there are in-lesson cards; prints `lessonDecks`, `lessonCards`, `tileSets`, `tileHints`. |
| `tools/halves/assemble.js` | Reads native `lessoncards.jsonl` (absent = empty); rebuilds `sections` (only for target lesson rows that have them) and expands `{{tiles:<t>.tlNNN}}` (only when the target half defines tile sets). With no sections and no tile sets in the target half, the code path is unchanged. |
| `tools/halves/validate.js` (part 2) | Collects the in-lesson decks, their cards and the tile sets from the target lesson rows. Expects a label for every `<t>.ld.<slug>` and every tile hint `<t>.tlNNN.NN`, and a `lessoncards.jsonl` row for every in-lesson card. That file is checked only when the target has in-lesson cards or either native half has rows, so ko output is unchanged. Lesson-card fields get the usual text checks; a note may add only the card's own characters (as `cards.note`). A meaning is always required. A tile hint may not contain `_`, braces, tabs or line breaks. `{{tiles:<id>}}` is accepted only when it names a tile set of the same lesson. A repeated in-lesson deck name is a warning. |
| `tools/halves/mk_native.js` (part 2) | `FILES` has `lessoncards` (written at `--merge` only when the English half has rows). In-lesson deck names, tile hints and lesson-card rows go into the unit of the lesson that holds them, not the meta unit. In-lesson card fronts go into `REPEATS.md`. The non-Korean README explains the rows when the target has any. A ko scaffold, and a vi scaffold on the old zh half, are byte-identical to the old tool's output. |
| `tools/halves/assemble.js` (part 2) | Refuses (strict mode) a native body that lacks one of its lesson's `{{tiles:<id>}}` tokens; otherwise those tiles would vanish without notice. The check runs only for lessons with tile sets. |
| `tools/halves/proof.js` | Unchanged. It already compares against the pack as `gen.js` writes it into a temp file, before `tools/lessonread/apply.js` and `tools/sections/apply.js` append `READS` and `SECS`. `packs/course-en-yue.js` starts with exactly the regenerated pack, and those blocks follow it. That is why proof prints "NOT the same as the regenerated pack". |

en-yue's pack flags (`accents`, `keys`, `tilesDefault`, `romaAlmost`, `voiceMatch`) were already in the exporter's `FLAGS`. Nothing new was needed. `gen.js` can also write `voiceAlso` and `audioFrom`; en-yue has neither, and the exporter still refuses them, deliberately.

## 2. The half in numbers

`target/yue/`:
- 31 decks, 904 cards (all 904 with notes), 6 groups;
- 134 dialogues, 250 examples, 18 patterns;
- 27 lessons with 243 example rows (236 distinct sentences);
- 81 checks, 378 practice items;
- 4 in-lesson decks with 66 cards, 5 tile sets.

Option split:
- check options: 204 target, 120 prose;
- mc options: 480 target, 60 prose;
- hints: 56 pure target, 16 split "Han · note", 9 prose.

`native/en/yue/` has 43 labels (11 pack-level, 4 in-lesson deck names, 28 tile hints), 66 lesson-card rows and 9 `uiKeys`. It holds 26,432 words without the lesson cards; `validate.js` counts 27,280 with them.

The proof gives 0 differences and 0 missing rows. A second export leaves both directories byte-identical.

## 3. How `sections` and tiles are split

**`sections`** is kept on the target lesson row, `{id, deck, sections, tiles}`. Each entry is mapped by shape:

| Pack form | Target half | Native half |
|---|---|---|
| `null` | `null` | – |
| `"Deck name"` | `"yue.d.<slug>"` (the deck id string) | the deck's label, as for every deck |
| `{deck, n:[a,b]}` | `{deck:"yue.d.<slug>", n:[a,b]}`, with the slice checked against the deck's length | – |
| `{name, cards:[[front, reading, meaning, note]]}` | `{ld:"yue.ld.<slug of name>", cards:[{id:"yue.lc0001", yue:front, rom:reading}]}` | label `yue.ld.<slug>` = the deck name; `lessoncards.jsonl` `{id, meaning, note}` |
| a list of the above | a list (nesting deeper than one level is refused) | |

- In-lesson card ids are keyed by front + reading and reused on re-export.
- An in-lesson card front must be target text.
- In-lesson deck ids must not clash with each other or with deck ids.

**`{{tiles:…}}`**: the token's content moves to the target lesson row as a tile set `{id:"yue.tl001", items:[…]}`, keyed by the sequence of fronts. The body keeps `{{tiles:yue.tl001}}`. Each item is handled as follows:
- **`{f}`**: a front alone. `_` alone is a gap.
- **`{f, r}`**: a hand-set reading the target classifier accepts (`心=sam1`; for zh `b=bō`). It stays target-side, raw.
- **`{f, n:"yue.tl001.15"}`**: a hint in the learner's language (`gw=gu_of_Guam`). Label `yue.tl001.15` holds `gu of Guam`: `_` is written as a space for the writer, and assembly writes it back as `_`. Spaces cannot occur inside an item, so this mapping can always be reversed.

Fronts are target material by position (the engine looks up the card with that front), so they are not classified.

**Refused:**
- any lesson field other than `id title blurb deck body sections`;
- any other section shape or slice;
- a tiles token with irregular spacing or an empty `x=` / `=y`;
- any other `{{…:…}}` token.

Nothing in en-yue or en-zh was refused. The checks were tested by mutating a temp copy of the pack.

## 4. Mandarin: `target/zh/` re-exported (part 2)

`proof.js zh` failed with 8 differences: 4 lessons lacked `sections`, and their bodies lacked the `{{tiles}}` tokens. `target/zh/` predated FND-1. `node tools/halves/export_target.js zh` has now been run on the live half:
- `proof.js zh`: 0 differences, 0 missing rows. A second export into a scratch copy is byte-identical.
- Every id that existed before is still there, with the same content: 2,094 target rows and 2,111 English rows.
- Added to `target/zh/`: 2 lesson sentences (`zh.s0232` 来, `zh.s0233` 请), and `sections` plus 4 tile sets on lessons `pinyin`, `tones`, `tone-change` and `characters`. All tile readings are pinyin, so there are no tile hints.
- Added to `native/en/zh/`: 4 in-lesson deck labels, 62 `lessoncards.jsonl` rows and 2 sentence glosses. The four English bodies also gained new passages and the tiles tokens.

**`course-vi-zh.js` no longer assembles** until the Vietnamese rows exist. `assemble.js vi zh` stops with `assemble: 70 native row(s) missing, first: lesson body:pinyin (no {{tiles:zh.tl001}} token), …, labels:zh.ld.pinyin-syllables — run validate.js` and writes nothing. The 70 are 4 bodies without their tiles tokens, 4 deck names and 62 lesson cards. `validate.js vi zh` lists all 75 errors: those rows, the 2 sentence glosses, and the 4 stale bodies (token order and Han runs, including `tone-change`, which has no tiles).

`tools/halves/native/vi/zh/TODO-foundations.jsonl` lists the work for a Vietnamese writer, 72 rows: 4 `lesson-deck-name`, 62 `lesson-card` (characters, pinyin, English meaning and note), 2 `sentence-gloss` and 4 `lesson-body-update` (the English passages added or changed, block by block). Each row gets a `vi` field. The tools do not read this file. After the rows are folded into `labels.jsonl`, `lessoncards.jsonl`, `sentences.jsonl` and the four bodies, run `validate.js vi zh`, then `assemble.js`.

## 5. Follow-ups

- Done in part 2: `validate.js` (§1), `mk_native.js` (§1), and the zh re-export (§4).
- Selftest: every case passes except the known "export refuses moved positional ids" (ko). "proof zh … exactly" passes again. The zh round trip (fake vi half through `mk_native --target zh`, `--merge`, `validate`, `assemble`) now includes the lesson cards.
- Open: the Vietnamese rows for vi-zh (§4), and the "by marks" mode (§6) before any Han-writing native half on yue.
- `mk_native.js`'s non-Korean README still says "Chinese" and "pinyin" in a few fixed sentences. That needs rewording before the first yue scaffold.

## 6. Open problem (not solved here): learners who write Han characters

Script mode tells the two sides apart because the learner's language is not written in the target's script. For Cantonese that fails for learners who write Han themselves:
- **Mandarin** speakers write Simplified or Traditional Han;
- **Taiwanese** (Hokkien) speakers write Han, or Han mixed with Tâi-lô;
- **Japanese** speakers write kanji mixed with kana.

Their notes, prompts and glosses are full of Han runs that are not Cantonese target text. A Mandarin gloss of 唔該 (謝謝 / 勞駕) shares or adds characters, and no script test can say whether a writer altered taught Cantonese or simply wrote Chinese. The current rule "every Han run of the English string must stay, added Han is an error or a warning" would flag almost every row, or, if waived, protect nothing.

These native halves need the **"by marks" mode** of blueprint §5 (`by: 'marks'` in `TARGETS`). The protected material must be identified by position, not script:
- whole target fields (card front and reading, example and sentence text, target option slots, the `{yue}` part of split hints);
- the `{{ex:id}}` and `{{tiles:id}}` tokens, which are already id references;
- marked spans in bodies and notes (`<b>` and example cells, and the row's own card text in its note).

Inside those spans, characters must be identical. Outside them, Han is free learner text.

Functions that would need the mode:
- `lib.js`:
  - `TARGETS.yue` (`by`, a marks definition next to `runs` / `has`);
  - `splitLead` (a Han note after ` · ` cannot be told from a Han lead by `leadRx`, so this is used only at export from English; native halves keep `hint.sep` positions).
- `validate.js`:
  - `checkText` (the `RUNS` comparison and the `ADD_OK` policies `trad` / `warn`);
  - the lesson-body run comparison (the `RUNS(h.replace(L.TOKEN_RX…))` block);
  - the zh-specific card-note rule (own characters plus `trad`);
  - option and hint slot checks wherever they compare runs rather than positions.
- `mk_native.js`: the `REPEATS.md` finder (uses `L.target(TGT).has` to pick target strings out of native text) and the `--merge` text checks.
- `dryrun.js`: no code of its own; it inherits `validate.js`.

The export, the assembly and the proof need no change: they work from the English half, where script still decides, and the native halves are joined by id and slot.

Mandarin-for-Cantonese-speakers (a `yue` native half on `target/zh/`) has the mirror problem and needs the same mode.
