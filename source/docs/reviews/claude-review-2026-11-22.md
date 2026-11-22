# Claude's review of Cursor's first batch (2026-11-22)

Checked for each course: files stay in lane; `repron` twice; `gen`; `validate`; `link_roadmap`; full app build and harness; the end-to-end run on every lesson; the pron tool on common words; a read of sample cards and practice answers. Not a native check.

| Course | PR | Result |
|---|---|---|
| en-nl Dutch | #1 | MERGED and SHIPPED in 2.56.0 (with lead fixes, below). Close the PR; its files are on `main`. |
| en-no Norwegian | #7 | MERGED and SHIPPED in 2.56.0. Close the PR. |
| en-da Danish | #8 | MERGED and SHIPPED in 2.56.0. Close the PR. |
| en-pl Polish | #9 | MERGED and SHIPPED in 2.56.0. Close the PR. |
| en-sv Swedish | #6 | CHANGES NEEDED (list below). |
| en-ptpt Portuguese (Portugal) | #4 | Not given up any more: the tools and the app now accept four-letter codes. FINISH IT (below). |
| en-am Amharic | #5 | HOLD: CHANGES NEEDED (below). |
| en-bn Bengali | #3 | RESUME with the lexicon approach (below). |
| en-cs Czech | #10 | Carry on. |

Do not re-open the four shipped courses. They are finished courses now: read-only.

## Lead fixes made to Dutch (learn from these)

1. The pron tool wrote the article `de` as `uh`. It is `duh`. 147 prons were wrong, on the most common word in the language, and the cold review did not catch it.
2. Three cards were in two decks (`Ik ben student.`, `Het gaat goed.`, `een groot huis`). The validator only warns about this, but the app's release harness fails on it.

## en-sv: changes needed

1. The pron aid writes `j` for the y-sound (`jag` → `jah`, `ja` → `jah`, `jobb` → `jawb`, `Sverige` → `SVAYR-jeh`). An English reader says the j of "jam". Change the aid so the y-sound is written with `y` (`yah`, `yawb`, `SVAYR-yeh`), as the Norwegian and Danish aids do (`yai`). Keep `sj` and `tj` as the two special tokens. This means choosing another token for the vowel currently written with `y`; update `pronPattern`, the key in the profile (§6), the first lessons' explanation, then run `repron`.
2. Lesson `possessives`, item `__ bil` (answer `Annas`): the wrong options `Anna's` and `Annas'` are ACCEPTED as correct, because the app ignores apostrophes. Replace them (for example `Anna|Annan|Annes`) and keep the apostrophe point in the `why`.
3. Stress on loanwords: `choklad` comes out `SJUH-klahd` (stress belongs on the second syllable). Check every loanword in the course against a dictionary and add the wrong ones to the tool's word list.
4. Re-run stage 5, then update the hand-off.

## en-ptpt: finish it

Merge the latest `main` into the branch (it has the four-letter fix in `tools/target/lib.js`). Then run stage 5 and stage 6 (the cold review has not been done), and write the hand-off. On my copy `gen`, `validate` and all 28 lessons end to end already pass, so expect content fixes only.

## en-am: hold, changes needed

The course has no pronunciation help on any card (`pron: none`). A beginner cannot read a card until the script lessons are finished, and many devices have no Amharic voice. Turning the unreliable tool off was the honest choice, but the course is not usable enough to release.

Make the aid lexicon-first instead of rule-first:
1. Add `tools/target/am/lexicon.txt`: every word used in a card, example, dialogue or practice answer, with its romanisation checked against a dictionary or a named source (gemination and the sixth-order vowel marked as the source gives them). One word per line, `fidel<TAB>romanisation<TAB>source`.
2. `respell.js` looks each word up in the lexicon and THROWS on a word that is not there (no silent rule fallback). `tools/target/nan/` works this way: read its `respell.js` and `lexicon.txt` as the model.
3. Set `pron: required`, add `pronAnswers` and the other new-script options from the queue row, run `repron`, and re-run stages 5 and 6.
4. Words you cannot source: replace the card rather than guess.

## en-bn: resume with the same approach

Your stop reason (inherent vowel, ô versus o, conjuncts cannot be predicted from spelling) is right for a rule-based tool. Use the lexicon-first design above: the tool looks words up and throws on unknown ones. Then continue from stage 1.

## Rules added to `CURSOR.md` because of this review

See the section "Checks the validator does not make".
