# Hand-off: en-pl ready for merge

## Checks

`node tools/target/gen.js pl` wrote `/tmp/course-en-pl.hold.js`: 27 of 27 lessons, 18 decks, 317 cards, 378 practice items, 54 dialogues, 36 examples, 18 patterns.

Last line of `node tools/target/validate.js pl`: `PASS: all checks OK`.

`node tools/target/repron.js pl` after the review: 580 prons read, 0 rewritten. Run again: 0 rewritten.

`python3 tools/target/link_roadmap.py pl`: 26 items linked, not covered: none. `traps` has no roadmap id. The roadmap field in `profile.json` is `pl-alphabet` and so on. `packs/roadmaps.js` was reverted and is not in this pull request.

`HOLD` is still in `tools/target/pl/`. The pack is not in `packs/`.

## What the reviewer changed

The cold review used grok-4.7-xhigh. The writers used grok-4.7-high. Gemini had no allowance, so the reviewer is the same family. Notes are in `tools/target/pl/REVIEW.md`. No pronunciation was hand-edited, and `respell.js` was not changed.

Files touched: `decks-a.js`, `decks-b.js`, `extra-a.js`, `extra-b.js`, `lessons-1.js`, `lessons-2.js`, `lessons-3.js`.

The five fixes to read first:

1. `magazyn` is a warehouse and a periodical. The card and the traps table had said it was not a magazine.
2. `To Marek`, `To Anna`, `To Kasia`, `Gdzie dworzec?`, and `Poczta jest bliska` are ordinary Polish and are no longer scored as the wrong option. The course still produces `To jest` and `Gdzie jest dworzec?`. `Jutro przeczytam` is a real future this course does not teach, and the tip no longer crosses it out.
3. All 27 fill blanks in lessons 19-27 were `___`, which leaves a stray underscore. They are now `__`.
4. Thirteen multiple-choice items that turned only on `ą`, `ę`, or `ó` are now marked strict. Checks have no strict slot. Those tap options still differ only by a folded letter, and the letters are on the screen.
5. `dwa` now covers a masculine noun that is not a person, and a neuter noun. `Możemy mówić sobie na ty?` means "Can we say ty to each other?" `Kim pan jest?` means "Who are you?" The pani past prompt no longer requires "yesterday" when the accepted line is `Pani była w domu`.

## Native check first

From `REVIEW.md`. File paths are under `source/tools/target/pl/`.

1. `To jest Wrocław.` is `toh yehst FROHTS-wahf`. Wrocław alone is `VROHTS-wahf`.
2. `Ewa jest we Wrocławiu` comes out with `feh`. `Mieszkam we Wrocławiu` and `We wtorek` stay `veh`.
3. `Nie znam Anny` is `nyeh znahm`. `znam` is not on the list that pulls stress onto `nie`. `Nie wiem` does.
4. `trzy` is `tshih` and `czy` is `chih`. `trzecia` is `TSHEH-chyah`.
5. `kilo` is `KYEE-loh`. The profile already calls the y before a vowel an over-pronunciation.
6. `Sześć złotych`, `Dziesięć złotych`, `państwu`, `mąż`, `żółw`, `barszcz`.
7. Careful stress: `muzyka` MOO-zih-kah, `uniwersytet` oo-nyee-VEHR-sih-teht. The profile marks this as the least sure stress decision.
8. `Piszę mój list`. `swój` is more idiomatic and is not taught. `mój` is grammatical.
9. `dwadzieścia jeden złoty`. That is the prescriptive line. Many people say `złotych`.
10. `To Marek` and `Gdzie dworzec?` are natural, and this course does not accept them. A waiter is answered with `Dziękuję`. People at the same table may say `Smacznego` back.

## Pron tool

Reliable enough to use, and dense on clusters. Every stored pronunciation is the tool's output, run on the whole line. `ś` and `sz` stay different. Stress is penultimate, except the closed careful list. Past `-śmy` is ignored.

No lexicon change in the review. An unlisted one-syllable verb after `nie`, including `znam`, stays unmarked. The tool's own comment calls that unmarked, not wrong.

## Needs from the lead

No app change. `accents` stays false. The app folds `ą`, `ę`, `ó`, `ć`, `ń`, `ś`, `ź`, and `ż`. `ł` does not fold. Practice items that turn on a folded letter are marked strict. A check has no strict slot, so six checks still show a folded pair as tap options: `proszę`/`prosze`, `kawę`/`kawe`, `herbatę`/`herbate`, `Pan pisze`/`Pan piszę`, `studentką`/`studentka`, `ósma`/`ósmą`.

## Unsure

Whether the `pl-PL` voice uses the careful antepenultimate stress on `muzyka` and `uniwersytet`, or ordinary penultimate. Whether `dwadzieścia jeden złoty` should also accept `złotych`. Whether the course should ever accept `To Marek` and `Gdzie dworzec?`. It does not.
