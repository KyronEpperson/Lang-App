# x-nan design: Taiwanese Hokkien (Taigi) as a target half

Status (2026-11-27): steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 are done. `tools/halves/target/nan/` and the English reference half `tools/halves/native/en/nan/` are exported from en-nan (`tools/target/nan/`, `node tools/target/gen.js nan`) and proven. Nothing in `tools/target/nan/` or `packs/` changed. Steps 6–7 (scaffold, hold) are not started. Format: `docs/HALVES-SPEC.md`, section "Taiwanese `nan`".

## 1. What the course teaches, and the mode

- The card front is **Han**, using the MOE recommended characters (`profile.targetScript`, `pronAnswersScript`). **Tâi-lô** is the reading (`rom`, `pron: "required"`, `pronPattern`).
- Tâi-lô is also taught **on its own in answer slots**: mc options (`tshù` / `tsá` / `pá` / `bah`), typed, built and filled answers, and three tile readings (`虎=hóo`). English sits next to it in the same kind of slot (`spin` / `pin` / `bin` / `fin`).
- **Mode: script mode, like yue.** Han runs are protected. A whole-string Tâi-lô test (`isTailo`) plays the part of `isJyutping`.
- Marks mode is not needed. Tâi-lô never appears as an unmarked span inside English prose that a native writer must keep: card readings, example readings and answers are whole target fields, and mc / check options are classified one at a time. The one exception is filled prompts (§2).

## 2. What was added

| File | Change |
|---|---|
| `tools/halves/targets/nan.js` (new) | All Taiwanese-specific code. `by: 'script'`, field `nan`. **Runs:** Han, including U+20000–U+2FFFF (𠢕 and 𪜶 occur in the data; `lib.js` `HAN_RX` misses them). **`isTailo`:** passes `pronPattern`, every syllable has Tâi-lô shape (initial, or POJ `ch` / `chh`; vowels; `nn`; coda; syllabic `m` / `ng`), and is not a toneless `EN_HOMOGRAPHS` word. **`fillSplit`:** described in the next row. |
| `tools/halves/lib.js` | One `nan` line in `TARGETS` after `ar`; the `ar` line gained a trailing comma. |
| `tools/halves/export_target.js` | Optional `TC.fillSplit`. When it returns a list, the fill prompt goes to the native row (`q`), and its Tâi-lô blank tokens go to the target row as `qk`. |
| `tools/halves/assemble.js` | Fill `q` comes from the target row if present, else from the native row. |
| `tools/halves/validate.js` | Every `qk` span must appear in the native `q` (`L.missingSpans`), else error. |
| `tools/halves/selftest.js` | A nan block (classifier, no English in the target half, a fake vi half through mk_native → merge → validate → assemble, 4 mutations, proof altered and clean). |

**Why `fillSplit`:**
- 15 of the 81 fill prompts are English frames: `Tâi-lô for 厝: __` (9), `火車 (train), as spelled: __-tshia` (4), `厝裡 (at home): tshù--__` and `食飽矣。(I have eaten.) Tsia̍h-pá--__.`.
- Kept on the target side, they would put English into `target/nan/`. yue and zh have the same pattern (`__au5 (有, to have)`) and still keep it target-side.
- With `fillSplit`, the Han in these prompts is protected by script, the blank by the `__` rule, and the Tâi-lô next to the blank by `qk`.

**Homographs:** the list holds only what the data shows.
- `pin` and `bin` come from `initials.02` (the p of spin / pin / bin / fin).
- `too` and `not` come from `describing.k3`.
- `to` (多) in `sandhi-2.05` is Taigi and stays target.

## 3. The half in numbers

- `target/nan/`:
  - 31 decks, 553 cards (491 with notes), 6 groups;
  - 107 dialogues, 130 examples, 18 patterns;
  - 27 lessons with 218 example rows (187 sentences);
  - 81 checks, 378 practice items (15 with a native fill prompt, 6 of them with `qk`);
  - 6 in-lesson decks with 51 cards; 10 tile sets.
- Classification:
  - check options: 188 target, 136 prose;
  - mc options: 394 target, 146 prose;
  - hints: 59 target, 5 split, 17 native;
  - tiles: 42 hints, 3 Tâi-lô readings.
- `native/en/nan/`: 59 labels, 51 lesson cards, 9 `uiKeys`. `validate.js en nan`: 25,039 words, 0 errors, 0 warnings.
- `proof.js nan`: 0 differences, 0 missing rows. A second export is byte-identical.
- Mixed items:
  - `sandhi-2.05` is mixed on purpose (`none of them`).
  - In `initials.05`, the POJ distractor `shù` is neither Tâi-lô nor POJ, so it is classified as prose. A writer copies it; nothing protects it.

## 4. Engine check (step 5, scratch only)

A fake Vietnamese half went through `mk_native.js vi --target nan`, then `--merge` (3,025 fields, 27 bodies), then `validate.js vi nan --all` (0 errors), then `assemble.js` (553 cards).

Headless Chromium (`L.openApp`; `src/app.html` not read or edited):
- `validCourse(id, c)` is true for en-nan and vi-nan.
- `setCourseTables` runs, `cleanLessonHTML` changes nothing, and there are no page errors.
- 218 example rows; `nan-TW`; `accents`, `romaAlmost`, `tilesDefault` and `noAudio` on; 12 UI overrides.

Not done: a tab-by-tab click walk (`harness.js` not run).

## 5. Follow-ups and open items

- **Open, not solved:** learners whose own language is written in Han (zh, yue, ja) cannot be told from Taigi by Han runs. The intended mechanism is the other team's `hanNative` helper in `lib.js` (next release). Do not scaffold those halves before it lands.
- `mk_native.js` README / `REPEATS.md` still say "Chinese" and "pinyin". The README should also tell writers to keep the Tâi-lô around a blank (`qk`) in the 6 fill prompts.
- Engine assumptions to check per native:
  - `noAudio` arrives in the assembled pack. There is no recorded audio, so the Tâi-lô line is the only sound guide; confirm in a click walk that no speak buttons appear for a non-English native;
  - the English-based sound comparisons in the 42 tile hints (`p of spin`) and the lesson-1 tile hints need native equivalents (writer brief).
