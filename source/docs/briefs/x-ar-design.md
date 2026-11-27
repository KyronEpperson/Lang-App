# x-ar design: Arabic as the seventh target half

Status: steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 done (2026-11-27). `tools/halves/target/ar/` and the English reference half `tools/halves/native/en/ar/` are exported from en-ar (`tools/target/ar/`, `node tools/target/gen.js ar`) and proven. No native half is scaffolded (steps 6–7 not started). Nothing in `packs/` or `tools/target/ar/` was changed. Format: `docs/HALVES-SPEC.md`, section "Arabic `ar`: script mode".

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/targets/ar.js` (new) | All Arabic-specific code: run class, `isValue`, `leadRx`, `isArabicRoman`, `HOMOGRAPHS`. |
| `tools/halves/lib.js` | One line after `th`: `, ar: require('./targets/ar.js')`. No other line changes. |
| `tools/halves/selftest.js` | An Arabic block of 12 cases after the Thai block. |
| `export_target.js`, `proof.js`, `validate.js`, `assemble.js`, `mk_native.js` | Unchanged. en-ar's flags (`accents`, `keys`, `tilesDefault`, `romaAlmost`), `sections` and `{{tiles}}` were already mapped. |

## 2. How Arabic is recognised

Script mode, as for zh, yue and th. Protected runs are Arabic-script words: letters with every hamza form, harakat, tanwin, shadda, sukun, dagger alif, tatweel (204 in native/en/ar, the joining-shape tiles) and Arabic-Indic digits (the numbers lessons). Dropping one shadda from a quoted word is an error.

**Punctuation is free.** ، ؛ ؟ are not part of a run. Urdu and Persian use the same marks, and a note may follow a quoted word with its own comma. The price is that a dropped ؟ inside a quoted question is not caught.

**Reading.** en-ar's romanisation (`respell.js`, `pronPattern`): `hādhā kitāb`, `al-bayt`, `as·hal`. A whole string is a target value when it is Arabic with no Latin letters, or passes `pronPattern` exactly and is not in `HOMOGRAPHS`. The pattern refuses capitals, `e o c p v x` and vowelless words, so almost all prose fails; but plain English (`this`, `him`, `and`) passes. In en-ar exactly one such word is a whole prose option: `always` (`adverbs.03`). `HOMOGRAPHS` lists only that word. No bare-initial rule: en-ar never offers one.

## 3. The half in numbers

`target/ar/`: 28 decks, 789 cards (783 with notes), 6 groups; 125 dialogues, 252 examples, 22 patterns; 28 lessons with 221 example rows (205 sentences); 84 checks, 392 practice items; 2 in-lesson decks with 26 cards; 2 tile sets, no tile hints. Options: check 174 target / 162 prose; mc 484 target / 76 prose; hints 17 target, 32 split, 35 prose. `native/en/ar/`: 13 labels, 9 `uiKeys`, 27,558 words (`validate.js en ar`: 0 errors, 0 warnings). Proof: 0 differences, 0 missing rows; a second export is byte-identical.

## 4. Checks run

- `proof.js ar / th / es / zh / yue / vi`: 0 differences each; `proof.js` (ko): 10 raw / 11 runtime (baseline). `selftest.js`: all pass except the known "export refuses moved positional ids". Pack hashes unchanged.
- **Engine (by script, in scratch):** `mk_native.js vi --target ar`, every prose field set to `VI …`, `--merge`, `validate.js vi ar --all` (0 errors, 0 warnings), `assemble.js`. Against an assembled en-ar: card fronts and readings, practice answers, dialogue / example / pattern / pause Arabic, every Arabic run in lessons, checks and practice, and all 223 `{{ex}}` / `{{tiles}}` tokens are equal; `ar-SA`, accent keys, `romaAlmost`, `tilesDefault` and 12 UI overrides arrive.
- **Not verified:** the app itself (no headless walk, `src/app.html` not opened), audio.

## 5. Engine follow-ups and open items

- **Open: Arabic-script natives.** Urdu (later Persian) share the script and the punctuation; script runs cannot tell native from target. They need "by marks" (blueprint §5) before their halves can be validated.
- **Open: RTL native + RTL target.** Untested; the interface direction, mixed-line bidi and the accent bar would all need a check.
- Bidi in an LTR native interface: hints and notes that mix `بَيْت · house`, `«…»` quotes and ؟ need `dir`/isolation in the engine; check in a click walk.
- The romanisation is an English-reader system (`th`, `dh`, `kh`, `sh` digraphs; `j` as in jam). A Spanish or Vietnamese reader needs it explained in the first native lesson.
- Romanisation inside native text is not protected (as for th); a config-driven `readingWord` warning in `validate.js` would cover it.
- `mk_native.js` README and `REPEATS.md` still say "Chinese"; reword before the first ar scaffold.
- Typed answers with Arabic-Indic vs Western digits, and `pronAnswers*` profile settings (gen-time only), check in the click walk.
