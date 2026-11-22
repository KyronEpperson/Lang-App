# en-da cold review

Reviewed on `cursor/en-da`. No native speaker has signed off. Pronunciations were not hand-edited. Nothing was added to `LEX`. The stød is still unmarked. These sourced forms were left as they are: fordi `foh-DEE`, aldrig `AL-dree`, hvordan `vaw-DAN`, station `sta-SHOHN`, stationen `sta-SHOH-nuhn`, gik `gehk`.

`decks-a.js` and `extra-a.js` were read and left unchanged. `profile.json` was not edited.

## What changed

### Wrong language

- `extra-b.js` dialogue for `mine børn`: a where-question was answered with `Ja`. It is now `De er hos min søster.`
- `lessons-2.js` numbers: "From two upward the number does not change" is false for 21, 31, and the rest. A compound that ends in one still agrees: `enogtyve kroner`, `etogtyve år`. The bare count, with no noun, stays `enogtyve`. No pron was stored for `etogtyve`. The tool currently prints `EH-toh-tew-wuh` because it only splits `en` + `og`, not `et` + `og`.
- `lessons-2.js` days: `på mandag` was glossed as a weekly "On Monday I work." It is this coming Monday. Every Monday is `hver mandag`. Practice and check prompts now say "this Monday" and "this Friday."
- `lessons-3.js` adjectives: `lille` has no plural ending. The plural is `små` (`små biler`, pron from the tool: `smaw BEE-luh`).

### Wrong teaching

- `lessons-1.js` greetings: `selv tak` was glossed as "you're welcome" and taught as the answer to any `tak`. It returns thanks (`Tak for i dag` → `Selv tak`). A plain you're welcome is `det var så lidt`. The deck already said this. The check, the practice item, and the example now match the deck.
- `lessons-1.js` negation: the lines that said the aid is rough on `aldrig` and `fordi` were removed. Those two prons are the Wiktionary forms and should be trusted like the other corrected lines. The stød is still not marked, which the sound lessons already say.
- `lessons-3.js` directions: the lesson still said `stationen` has a t sound and stress at the start. The stored line is `sta-SHOH-nuhn`. The note on the `stationen` card in `decks-b.js` said the same stale thing and now says the stress is on the shohn syllable. The toilettet warning stays. That pron is still unsourced.
- `lessons-3.js` past: the lesson said `gik` is a long vowel on the line. The stored line is `gehk`, the short vowel from Wiktionary. The `havde` note stays: careful form keeps soft d, fast speech may drop it.

### Practice

- `lessons-1.js` negation, order item: the model is now `Anna siger, at hun ikke kommer`, with the comma before `at`. The other `at` hits in the course are the infinitive marker and do not take that comma.
- Greetings practice that used to ask for "you're welcome" now asks for "thanks, you too," so `selv tak` is the answer that the prompt actually means.
- Day prompts that used a habitual English simple present now say "this Monday" and "this Friday," so they match `på mandag` and `på fredag`.

### Pron

No stored pron was rewritten. A fresh compare of every deck card and every `{{ex}}` row against `respell.js` found no mismatch, including the new `Det var så lidt.` and `små biler` rows.

### Wording

- The `værsgo` example now carries "(to one person)," like the card. The lesson says the same words are used to several people, for `selv tak`, `det var så lidt`, and `værsgo`.

## Left on purpose

- `du` to one person, including staff. `De` / `Dem` / `Deres` only as recognition, capital in the model answers. Plural `I` only when the prompt says several people.
- The comma before `at`, `fordi`, `hvis`, and `når`. Typed answers still do not need it. The matcher strips it.
- `halv tre` = 2:30. `Goddag` as the afternoon greeting. `må` taught as permission. A man says `amerikaner` / `dansker` / `englænder`; anyone can use the adjective. The spoken perfect (`jeg har arbejdet`, `i går har vi drukket`) is real Danish and is kept out of the past lesson, as the profile requires.
- `accents: false`. Every right/wrong pair that differs only by å/a or é/e is already `!strict` (`år`/`ar`, `får`/`far`, `én`/`en`, `to år`/`to ar`). æ and ø do not fold. Those pairs are marked strict anyway.
- Pairs the aid cannot separate, and does not try to: hun/hund, mor/mord, det/der. They are not a typed contrast.

## What a native speaker should still check

Pronunciations below are the tool's current output. They were not "corrected" here. Fix one in `LEX` only from a source, then run `node tools/target/repron.js da` from `source/`.

Check these first:

1. `hvornår` `VOH-naw` — stress and the vowel. The questions lesson presents this line with no warning.
2. `for` `foh` — in `tak for mad`, `glad for`, `fordi` is already `foh-DEE` and should stay.
3. `koster` `KOHS-tuh` — the vowel.
4. `havde` `HA-dhuh` — careful form. Fast speech may drop the soft d too.
5. The day names: `mandag` `MA-naw`, `tirsdag` `TEE-sdaw`, `onsdag` `OHN-sdaw`, `torsdag` `TOH-sdaw`, `fredag` `FREH-dhaw`, `lørdag` `LOE-raw`, `søndag` `SOE-naw`. The lessons already say the g of `dag` is silent and that `onsdag`'s o comes out long.
6. `København` `koe-buhn-HAWN` — stress on the last syllable. The profile is least sure of this listing.
7. `forældre` / `forældrene` `FOH-rael-uh` / `FOH-rael-uh-nuh`. The family lesson says the stress belongs on the æ. Confirm that syllable.
8. `fabrik` `FAB-rehk` and `eventuelt` `EH-wuhn-too-uhlt`. The traps lesson says the real stress is late. Confirm.
9. `toilettet` `TOH-ee-luh-duhdh`, `ligeud` `LEE-yuh-oodh`, `minut` `MEE-noot`, `fjorten` `FYOH-tuhn`, `halv` `halv`, `kvart` `kvat`.
10. `boede` `BOH-uh-dhuh`, `arbejdede` `A-bai-dhuh-dhuh` — the aid adds a beat. `toget` `TOH-wuhdh` against `tog` `taw`. `tager` `TA-wuh`.

Also still unsourced, and not changed: `Amerika`, `amerikaner`, `amerikansk` (first-syllable stress, the tool warns), `englænder`, `dygtig` `DEW-teey`, `dejlig` `DAI-leey`, `endelig` `EH-nuh-leey`, `rødt` `roet`, `café`, `idé` (not used as examples; the alphabet lesson says the line is unreliable), `undskyld` `OON-skewl`, `jer` `yeh`, `selv` `sehlv`.

Confirm these calls, which this review kept or made:

- `selv tak` returns thanks. `det var så lidt` is you're welcome. Same words to one person or to several.
- `etogtyve år` beside `enogtyve kroner`, and bare `enogtyve` when there is no noun.
- `på mandag` is the coming Monday. `hver mandag` is every Monday. `om mandagen` is not taught.
- `små biler`, and that a singular predicative stays `lille` (`bilen er lille`, `huset er lille`) while a plural predicative is `små`.
- `Jeg er faret vild`. `tak for mad` at the table, not to a waiter. `sikke flot`. `kan ikke lide` with `godt` dropped.
- Women saying `jeg er amerikaner` as well as `jeg er amerikansk`. `en ven` for a woman, beside `veninde`.
- `må` is taught only as permission. It also means "must." That second sense is out of scope on purpose.
- `halv tre` = 2:30, and `Goddag` as the afternoon string. Both are house decisions. The clock page and the afternoon slot were not re-opened.
