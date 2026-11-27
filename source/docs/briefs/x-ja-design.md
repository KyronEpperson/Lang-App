# x-ja design: Japanese as the sixth target half

Status (2026-11-27): steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 are done. `tools/halves/target/ja/` and the English reference half `tools/halves/native/en/ja/` are exported from en-ja (`tools/target/ja/`, `node tools/target/gen.js ja`) and proven. Nothing in `tools/target/ja/` or `packs/` changed. No native half has been scaffolded (steps 6–7 not started).

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/targets/ja.js` (new) | All the Japanese-specific code. Script mode (`by: 'script'`), field `ja`. **Protected runs** are kana plus kanji: hiragana `ぁ-ゖ`, `゛゜ゝゞ`, katakana `ァ-ヺ`, `ー ヽ ヾ`, small `ㇰ-ㇿ`, Han (the same blocks as zh), `々 〆`. Japanese punctuation (`、。・？！〜`) is not part of a run. **`isValue`**: Japanese script with no Latin letters, or romaji. Romaji is a string the en-ja `pronPattern` accepts (modified Hepburn with macrons) that also has a macron or `n'`, or is a single kana reading (`ji`, `zu`, `kya`), never an English-looking word such as `no`, `to`, `a`. The romaji test keeps `sake` and `kare` from being read as target text. `leadRx` works as in zh. `kanaRuns` serves the open item in §5. The file is self-contained because `lib.js` requires it while `lib.js` is still loading. |
| `tools/halves/lib.js` | One `TARGETS.ja` line after `es`. The `es` line gained a trailing comma. |
| `tools/halves/selftest.js` | A ja block: a classifier unit check, a stand-in es half that validates, 4 mutations (a kana run in a card note, katakana added to a dialogue, a target option slot overwritten, kanji dropped from a body), and proof ja run clean and altered. |

`export_target.js`, `proof.js`, `validate.js`, `assemble.js` and `mk_native.js` are unchanged. en-ja's pack fields (`accents`, `keys`, `tilesDefault`, sections, tiles) were already mapped by the yue work.

## 2. The half in numbers

`target/ja/` contains:
- 30 decks and 974 cards (770 with an English note) in 7 groups;
- 125 dialogues, 265 examples and 18 patterns;
- 28 lessons with 227 example rows (224 distinct sentences);
- 84 checks and 392 practice items;
- 3 in-lesson decks with 51 cards, and 5 tile sets.

The only tile readings are `ぢ=ji` and `づ=zu`. Both are romaji and stay on the target side, so there are no tile hints.

Option and hint split:
- check options: 290 target, 46 prose;
- mc options: 552 target, 8 prose;
- hints: 45 pure Japanese, 34 split as "Japanese · note", 5 prose.

Two check items are mixed: `sounds.k3` and `particles.k2`. A split hint can keep Japanese in its note (`いっしょに` · `ひるごはん (lunch) · たべます`). That is the zh behaviour; `validate.js` protects those runs.

`native/en/ja/` holds 14 labels (11 pack-level and 3 in-lesson deck names), 51 lesson-card rows and 10 `uiKeys`. `validate.js en ja` counts 25,974 words, with 0 errors and 0 warnings. The target half has no Latin text except those two tile readings and the `rom` fields.

## 3. Proof

- `proof.js ja` gives 0 differences and 0 missing rows. 169 differences are key order only and are not counted.
- A second export leaves both directories byte-identical.
- `proof.js` reports that `packs/course-en-ja.js` is "NOT the same as the regenerated pack". This is the same case as yue: the shipped pack has blocks appended after the `gen.js` output. Packs are unchanged; the sha1 check passes.

## 4. Engine check (step 5, by script, scratch only)

A fake Spanish half was built in a temp copy:
- `mk_native.js es --target ja`, then every prose field set to `ES …`;
- `--merge` filled 3,679 fields and 28 bodies;
- `validate.js es ja --all`: 0 errors, 0 warnings;
- `assemble.js` built `course-es-ja.js` (974 cards).

The pack was then run through the app's own `validCourse` and `setCourseTables` in headless Chromium:
- valid, with no page errors; `cleanLessonHTML` changes nothing;
- 227 example rows expand;
- `ttsLang` is ja-JP, `accents` is on, `keys` is empty, `tilesDefault` is on, and 13 UI overrides arrive;
- the trainer gates match en-ja (script, pron and strokes off; type, listen, role and say on; pick off);
- card fronts and readings, dialogue, practice answers, the Japanese inside expanded lessons, and the greeting text all match en-ja.

Not verified: a tab-by-tab click walk (`harness.js` was not run) and recorded audio (`audio/ja/` is not in this build home).

**Engine follow-ups** (`src/app.html` not edited):
- The `mk_native.js` README and `REPEATS.md` still say "Chinese", "pinyin" and "Vietnamese gloss" in fixed sentences; reword them before the first ja scaffold.
- The romaji line is Hepburn for English readers. Learners whose language spells it differently (es `y`/`j`, fr `ch`) need it explained in lesson 1.
- en-ja hides romaji from lesson 4. Check that this holds for every native.
- `sayText` speaks blanks as English (as in es).
- A Han-reading native-only card field (zh: on'yomi, ko: Hanja) belongs in `cardExtras` when such a half is written.

## 5. Open: learners who write Han (zh, yue, nan)

The protected runs include kanji, so the validator cannot tell kanji in a Mandarin, Cantonese or Taiwanese note from Japanese target text. A Chinese gloss of 学生 shares the same characters. The x-yue design §6 problem therefore applies here in full.

Kana runs still separate the sides: no Chinese writing contains hiragana or katakana. `TARGETS.ja.kanaRuns` gives that set. A Han-native check could compare kana runs strictly and treat added kanji as a reviewer warning, or require marks. This is **not solved here**: another team is adding a Han-native helper to `lib.js`. Until it lands, do not scaffold a zh, yue or nan native half on `target/ja/`.

Japanese learners of zh or yue have the mirror problem: their notes carry kana, which helps, and kanji, which does not.
