# x-am design: Amharic as the eighth target half

Status: steps 1–5 of `docs/HALVES-BLUEPRINT.md` §3 done (2026-11-27). `tools/halves/target/am/` and the English reference half `tools/halves/native/en/am/` are exported from en-am (`tools/target/am/`, `node tools/target/gen.js am`) and proven. No native half is scaffolded (steps 6–7 not started). Nothing in `packs/` or `tools/target/am/` was changed. Format: `docs/HALVES-SPEC.md`, section "Amharic `am`: script mode".

## 1. What was added

| File | Change |
|---|---|
| `tools/halves/targets/am.js` (new) | All Amharic-specific code: run class, `isValue`, `leadRx`, `isAmharicRoman`, `HOMOGRAPHS`, `slugText`. |
| `tools/halves/lib.js` | One line after `ar`: `am: require('./targets/am.js')`; the `ar` line gained a trailing comma. |
| `tools/halves/export_target.js` | One line: `slug` first passes the text through the target's optional `slugText`. Every other target leaves it unset, so their ids do not change. |
| `tools/halves/selftest.js` | An Amharic block of 12 cases after the Arabic block. |
| `proof.js`, `validate.js`, `assemble.js`, `mk_native.js` | Unchanged. en-am's flags (`accents`, `keys`, `tilesDefault`, `romaAlmost`, `voiceMatch`), `sections` and `{{tiles}}` were already mapped. |

**Why `slugText`:** two en-am deck names differ only in fidel (`Fidel rows: ሀ to ቸ`, `Fidel rows: ኀ to ዠ`). The ASCII slug dropped the fidel and gave both the same id. `slugText` writes each Ethiopic letter as its hex code point, which gives `am.d.fidel-rows-1200-to-1278` and `am.ld.words-with-1280-to-12e0`.

## 2. How Amharic is recognised

Script mode, as for zh, yue, th and ar. Protected runs are Ethiopic letters: U+1200–135F (syllables and combining marks) plus the Ethiopic digits U+1369–137C. en-am uses 167 distinct characters, all in U+1200–135A. It uses no digits, no Supplement (U+1380–139F) and no Extended block (U+2D80–2DDF, U+AB00–AB2F). The extended blocks are left out of the class until a course needs them. A single fidel changed in a quoted word (ሀሙስ → ሐሙስ, which sound the same) is reported.

**Punctuation is free.** ፠ ፡ ። ፣ ፤ ፥ ፦ ፧ ፨ (U+1360–1368) are not part of a run. The data allows this: en-am writes only ። (184 times, always glued to a word: `ነው።`). Every one of them sits in a field the target half holds (examples, sentences, check options). There are 0 in `native/en/am` text, so freeing them loses nothing for English, and it matches ar. The cost: a native writer who drops ። from a quoted sentence is not caught.

**Reading.** en-am's romanisation (`respell.js`, `pronPattern`): `dehna neh`, `t'ewat`, `bunna bét`, `yih mets'haf new.`. A whole string is a target value when it is Ethiopic with no Latin letters, or when it passes `pronPattern` exactly and is not in `HOMOGRAPHS`. The pattern refuses only capitals, q, x and a bare c. Plain lowercase English passes it, which makes the list larger than ar's single word. In en-am, 27 strings are whole prose options that pass the pattern: `g`, `b` (reading.k2), `only still`, `he said, or there is`, `only he said`, `only there is`, `a man only`, `a woman only`, `a stranger only`, `he said`, `there is`, `he went`, `a house`, `not`, `one man`, `one woman`, `more than one person`, `noon`, `midnight`, `four birr in that book`, `one hundred birr`, `what time it is`, `where the shop is`, `how much the bill is`, `tea`, `a dish of torn injera`, `the bill`. `HOMOGRAPHS` lists exactly these. Romanised readings that look like English (`new` for ነው, `walsh`, `dehna walk`) occur only in typed-answer lists, never as options, so they are not listed. There is no bare-initial rule.

## 3. The half in numbers

`target/am/`: 24 decks, 426 cards (426 with notes), 6 groups; 76 dialogues, 98 examples, 18 patterns; 26 lessons with 239 example rows (230 sentences); 78 checks, 364 practice items; 3 in-lesson decks with 50 cards; 9 tile sets, no tile hints. Options: check 212 target / 100 prose; mc 500 target / 20 prose; hints 38 target, 40 split, 0 prose. `native/en/am/`: 14 labels, 9 `uiKeys`, 22,433 words (`validate.js en am`: 0 errors, 0 warnings). Proof: 0 differences, 0 missing rows; a second export is byte-identical.

## 4. Checks run

- `proof.js am / th / ar / ja / es / zh / yue / vi`: 0 differences each. `proof.js` (ko): 10 raw / 11 runtime, the baseline. `selftest.js`: all pass except the known "export refuses moved positional ids". Pack hashes are unchanged.
- **Engine (by script, in scratch):** `mk_native.js fr --target am`, every prose field set to `FR …`, then `--merge`, `validate.js fr am --all` (0 errors, 0 warnings) and `assemble.js`. Compared with a freshly assembled en-am, these are all equal: card fronts and readings, every Ethiopic run in every pack key except `UI`, and the target fields of all 248 `{{ex}}` / `{{tiles}}` tokens. `am-ET`, `accents`, `keys: ""`, `romaAlmost`, `tilesDefault`, `voiceMatch` and 12 UI overrides all arrive.
- `export_target` warns that `packs/course-en-am.js` differs from today's `gen.js am`. The proof reports the same, as it does for ar. The halves follow the sources. The shipped pack was not opened.
- **Not verified:** the app itself (no headless walk; `src/app.html` was not opened), Ethiopic font rendering, audio.

## 5. Engine follow-ups and open items

- **Open: Tigrinya (and other Ethiopic-script natives).** Tigrinya shares the letters and the punctuation, so script runs cannot tell native text from target text. It needs "by marks" (blueprint §5). Whether ። stays free for such a pair is part of that question.
- `accents: true` with `keys: ""`: the romanisation needs é and ' for typed answers. Check what the accent bar shows in a click walk.
- The shared UI key `Search a pattern, e.g. 에서 or 'want'` carries a Korean example into en-am. Every native writer must give an Amharic example.
- The romanisation is written for English readers (j as in jam, ny, zh, é as in café). The lesson `orders` explains it with English look-alikes (`new`, `sew`, `walk`, `gin`), and each native half must rewrite that paragraph.
- `pronAnswers*` (`pronAnswersScript`, `pronAnswersSkipInWord`, …) are gen-time only and absent from the pack. Check that typed romanised answers behave the same in a non-English pack.
- Ethiopic font fallback and an `am-ET` voice are uncommon on desktop. Check `audio/am/` clips and the font in the click walk.
- Romanisation inside native text is not protected, as for th and ar. `mk_native.js` README and `REPEATS.md` still say "Chinese".
