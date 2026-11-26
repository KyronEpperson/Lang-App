# x-yue design: Cantonese as the third target half

Status: steps 1–4 of `docs/HALVES-BLUEPRINT.md` §3 done (2026-11-26). `tools/halves/target/yue/` and the English reference half `tools/halves/native/en/yue/` are exported from en-yue (`tools/target/yue/`, `node tools/target/gen.js yue`) and proven. No native half other than English exists yet, and nothing in `packs/` was written.

Related: `docs/HALVES-SPEC.md` (format; §11 second target), `docs/briefs/vi-zh-design.md` (the zh generalisation this builds on), `tools/patches/foundations.py` (FND-1: `sections` and `{{tiles:…}}`).

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/lib.js` | `TARGETS.yue`: field `yue`, protected script Han (`HAN_RX`, the same runs as zh; en-yue has no characters outside the BMP), `isValue` = `isCantoneseValue` (Han with no Latin letters, or `isJyutping`), `leadRx` as zh. `isJyutping`: the whole string passes the en-yue profile's `pronPattern` (syllables with tone digits 1–6, optional punctuation), or it is a bare Jyutping initial (`gw`, `j`, `c` …) or final (`oe`, `aa`, `eo` …), which count as language-neutral quiz material, as pinyin initials do for zh. ko and zh entries are untouched. |
| `tools/halves/export_target.js` | Maps lesson `sections` and `{{tiles:…}}` tokens (§3); `Alloc` also accepts previous rows (for ids that live inside `lessons.jsonl`); writes `native/en/<t>/lessoncards.jsonl` when there are in-lesson cards; prints `lessonDecks`, `lessonCards`, `tileSets`, `tileHints`. |
| `tools/halves/assemble.js` | Reads native `lessoncards.jsonl` (absent = empty); rebuilds `sections` (only for target lesson rows that have them) and expands `{{tiles:<t>.tlNNN}}` (only when the target half defines tile sets). With no sections and no tile sets in the target half, the code path is unchanged. |
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

`native/en/yue/` has 43 labels (11 pack-level, 4 in-lesson deck names, 28 tile hints), 66 lesson-card rows, 9 `uiKeys`, and 26,432 words.

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

## 4. Mandarin: the same code, but the live `target/zh/` is not re-exported

`node tools/halves/proof.js zh` **failed before this change**, with 8 differences: `sections` were missing from 4 lessons, and their bodies lacked the `{{tiles}}` tokens. `target/zh/` predates FND-1, and the old exporter would have refused `sections`.

With the new code, a re-export into a scratch copy (`HALVES_DIR=…`) proves 0 differences. That re-export would also add:
- 2 lesson example sentences (`zh.s0232` 来, `zh.s0233` 请);
- 4 in-lesson decks with 62 cards;
- 4 tile sets (all readings pinyin, so no native tile hints).

I did **not** re-export the live `target/zh/`. `native/vi/zh/` would then miss 2 glosses, 4 deck names and 62 card meanings and notes, and its four lesson bodies would lack the tiles tokens. `course-vi-zh.js` would stop assembling. That is a decision for the lead: re-export zh, then give the vi writers those rows.

## 5. Follow-ups before the first native half on yue (step 6)

- **`validate.js`** does not know the new ids yet. `validate.js en yue` reports 37 errors, all of them the new material:
  - 32 "orphan" labels (`yue.ld.*` and the tile hints), because `expect.labels` does not list them;
  - 5 "unknown token `{{tiles:…}}`" errors: only `ex|strokes` are accepted.

  It also needs a `lessoncards` entry with the usual text checks.
- **`mk_native.js`**: its `FILES` list needs `lessoncards`, and its unit split needs the in-lesson decks and tile hints.
- The selftest case "proof zh … exactly" fails for the reason in §4 (it failed before this change too).

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
