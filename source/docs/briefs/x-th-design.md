# x-th design: Thai as the sixth target half

Status: steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 done (2026-11-27). `tools/halves/target/th/` and the English reference half `tools/halves/native/en/th/` are exported from en-th (`tools/target/th/`, `node tools/target/gen.js th`) and proven. No native half is scaffolded (steps 6–7 not started). Nothing in `packs/` or `tools/target/th/` was changed. Format: `docs/HALVES-SPEC.md` §13.

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/targets/th.js` (new) | All Thai-specific code: Thai-script runs, `isValue`, `leadRx`, the romanization test `isThaiRoman`, `HOMOGRAPHS`. |
| `tools/halves/lib.js` | One line after `es`: `, th: require('./targets/th.js')`. The line starts with a comma, so the `es` line is not touched. |
| `tools/halves/selftest.js` | A Thai block of 10 cases (§4). |
| `export_target.js`, `proof.js`, `validate.js`, `assemble.js`, `mk_native.js` | Unchanged. en-th's flags (`accents`, `keys`, `tilesDefault`, `romaAlmost`), `sections` and `{{tiles}}` were already mapped. |

## 2. How Thai is recognised

Script mode, as for zh and yue. The protected runs are Thai script (U+0E00–U+0E7F). A Latin-script learner language can never be mistaken for Thai. A Lao or Khmer speaker writes a different block, so they are safe too.

The reading aid is en-th's own romanization (`respell.js`, checked by `profile.json` `pronPattern`): `maa`, `glâi mâak`, `sà-wàt-dii`. A whole string counts as a target value in three cases:

1. It is Thai with no Latin letters.
2. It passes `pronPattern` exactly, and it is not in `HOMOGRAPHS`.
3. It is a bare initial of the pattern (`t`, `th`, `bp`, `khr`). These are language-neutral quiz material, as pinyin and Jyutping initials are.

**Why not the pinyin rule** ("every word carries a tone mark")? Thai mid tone has no mark: `glai`, `maa` and `saawng` are real readings, and that rule would push them into the native half. The pattern alone already refuses the prose options (`mid`, `low`, `Rising`, `with a b`, `7 p.m.`). Uppercase, punctuation, `d`/`r` finals and most English spellings fail it.

The pattern does accept some unmarked English words. In en-th exactly one of them is used as a prose option: `noon` (`time.02`). `HOMOGRAPHS` lists only that word, on purpose. Words like `man`, `no` and `see` are also syllables of en-th readings, so a longer list could push real readings out of the target half. If a future option slips through, the selftest case "no English in target/th" fails and names it.

**Hints.** A Thai-only lead before ` · ` is split off (13 hints). A hint that prints romanization in brackets (`กิน (gin) · ข้าว (khâao)`) stays a native field as a whole, as zh does with pinyin.

## 3. The half in numbers

`target/th/`:
- 30 decks, 802 cards (801 with notes), 6 groups;
- 110 dialogues, 283 examples, 18 patterns;
- 26 lessons with 301 example rows (286 distinct sentences);
- 78 checks, 364 practice items (130 mc, 78 each of order / fill / type);
- 5 in-lesson decks with 58 cards; 9 tile sets with 80 readings, all romanization, so there are no tile hints.

Option split:
- check options: 157 target, 155 prose;
- mc options: 400 target, 120 prose;
- hints: 20 pure target, 13 split, 45 prose.

`native/en/th/` has 16 labels, 58 lesson-card rows and 9 `uiKeys`: 27,662 words (`validate.js en th`: 0 errors, 0 warnings).

The proof gives 0 differences and 0 missing rows. A second export leaves both directories byte-identical. `packs/course-en-th.js` is the regenerated pack followed by the `READS` / `SECS` blocks, the same as for yue; its prefix matches byte for byte.

## 4. Checks run

- **Proofs and selftest.** `proof.js th / es / zh / yue / vi` each give 0 differences. `proof.js` (ko) gives 10 raw and 11 runtime differences, which is the existing baseline. `selftest.js` passes every case except the known "export refuses moved positional ids". The new th cases:
  - classifier unit checks;
  - no English in any classifier-decided slot;
  - a fake vi half validates clean;
  - a Thai run dropped from a note, Thai added to a translation, an option slot overwritten and Thai dropped from a body are each reported;
  - the pack assembles;
  - the proof detects an altered romanization;
  - a clean proof.
- **Engine (step 5, by script, in scratch).** Steps:
  - `mk_native.js vi --target th`;
  - every prose field set to `VI …`;
  - `--merge`;
  - `validate.js vi th --all`: 0 errors;
  - `assemble.js`.

  The vi-th pack then went through the app's own `validCourse` / `setCourseTables` in headless Chromium. Results:
  - the pack is valid, with no page errors;
  - `cleanLessonHTML` changes nothing;
  - 301 example rows expand;
  - trainer gates are identical to en-th (features off; type, listen, role and say on; pick off);
  - `th-TH`, the accent keys, `romaAlmost`, `tilesDefault` and 12 UI overrides arrive.

  These are byte-equal to en-th: card fronts and readings, practice answers, dialogue, `{{ex}}` text and readings, tiles, and greetings.
- **Not verified:** a tab-by-tab click walk (`harness.js` not run), and recorded audio (there is no `audio/` folder in this build home).

## 5. Engine follow-ups and open items

- The romanization is an English-reader system (`bp`, `dt`, `ph`, `aa`, `ue`). Vietnamese, Spanish and German readers will misread `ph`, `th`, `d` and `u`. The first native lesson must explain it, or a per-native reading is needed (a native-only card field, like Hán Việt).
- Romanization inside native text (notes, hints, bodies: `ใกล้ (glâi)`) is not protected in script mode. zh has a pinyin-word warning in `validate.js` (`tgt === 'zh'`). The same for th would need a small, config-driven change there, for example an optional `readingWord` regex on the target. It was not made, to keep the merge trivial.
- `mk_native.js` README and `REPEATS.md` still say "Chinese", "pinyin" and "Han" (`REPEATS.md: The same Chinese …`). This must be reworded before the first th scaffold.
- Check in the click walk: "almost" credit (`romaAlmost`) and the tone-mark accent bar (`keys`) with a non-English interface.
