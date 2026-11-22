# en-pl cold review

The writers' Polish model lines (pan / pani plus a third-person verb, the four drilled cases, the złoty and age lines, the city endings, the motion pairs) were left as they stood. No pronunciation string was edited by hand, and `respell.js` was not changed. `profile.json` was not edited. The `pl-` roadmap prefix and the empty `traps` roadmap field stay. HOLD stays, so `gen.js` wrote `/tmp/course-en-pl.hold.js` and did not touch `packs/`.

## Batch 1: decks and extras

- decks-a.js: `kasza` was glossed only as buckwheat groats. It is groats in general (the lesson example already said "kasha, groats"). `Możemy mówić sobie na ty?` was glossed "Can we use first names?" The line is the offer to say ty. `Dzień dobry państwu` was glossed as morning only. Dzień dobry is morning and afternoon.
- decks-b.js: the `magazyn` note said "Not a magazine." The traps lesson already says the same word is a periodical. The `pyszne pierogi` note said the plural is not for a group of men. A mixed group is the same plural as a group of men. The note now says a thing, or a group with no man.
- extra-a.js: the kasza example English now matches the card ("kasha, groats").
- extra-b.js: `Kim pan jest?` / `Jestem lekarzem` was glossed "What do you do?" `Kim` is who. `Co pani robi?` / `Jestem lekarką` in extra-a.js was already the job question and was left. The pattern frame `Widzę mojego ___` is now marked masculine, so it is not read as the frame for a sister.

## Batch 2: lessons-1.js (alphabet through adjectives)

- "To jest" body, tip, check, and the "This is Anna" and "This is Kasia" items treated `To Marek` / `To Anna` / `To Kasia` as the error for dropping jest. Those short lines are ordinary Polish. The course still requires `To jest`. The wrong options are now `Jest Marek`, `Jest Anna`, and `Jest Kasia`, which are not the introduction. The body says a short line with no jest is heard, and this course keeps jest.
- Adjectives: "a group of men" is too narrow. `oni`, `dobrzy`, and `wysocy` are for a group that includes a man. The body, the `Oni są dobrzy` gloss, and the order why now say that. The Marek and Piotr example is still a group of men.
- Practice: `proszę` / `prosze` and `prosię` / `prosie` are now `!strict`. ę is the only difference, and ł is not involved.

## Batch 3: lessons-2.js (questions through routine)

- Numbers: "Dwa is the masculine form of two" left out neuter (`dwa piwa`) and could be read as the form for men. It now says a masculine noun that is not a person, such as złoty, and a neuter noun. `Dwóch studentów` stays recognition only. `dwie` stays the feminine form.
- Ordering: the body said you do not answer by repeating Smacznego. People at the same table do. When a waiter says it, the answer this course produces is still Dziękuję. The check and the multiple-choice item now say a waiter, so `Smacznego` is not also a right reply. Dobranoc stays out of the table line.
- e-isz: "lubiam and pijam are not Polish" is too broad. `lubiam` is not a word. `pijam` is not the present of `pić`. `Pijesz kawę` was glossed as a question. The line has no question mark. It is a statement a friend says.
- Practice `!strict` on every multiple-choice item whose right and wrong options differ only by ą, ę, or ó: `kawę`/`kawe` (twice), `książkę`/`książke`, `herbatę`/`herbate`, `Piszę`/`Pisze`, `Piję`/`Pije`, `lekarką`/`lekarka`, `studentką`/`studentka`, `moja praca`/`moją pracą` and `moja pracą`, `moja mama`/`moją mama`, `Często piszę`/`Często pisze`. Time items that already had `!strict` were left.

## Batch 4: lessons-3.js (motion through traps)

- `Pan idzie do sklepu` is now glossed "to a man." `Wczoraj byliśmy w domu` is now glossed as a group that includes a man. `byłyśmy` stays recognition, as the body already said.
- Directions: `Gdzie dworzec?` was the wrong option for "Where is the station?" It is a normal short question. The course still requires `Gdzie jest dworzec?` The wrong option is now `Gdzie są dworzec?` The body says a short question with no jest is heard. `Poczta jest bliska` and `Bliska jest poczta` were wrong options for "the post office is near." `Bliska` is a real adjective, a different word from `blisko`. The wrong options are now `Poczta jest bliską`, `Poczta jest bliskiem`, and `Poczta jest bliskość`.
- Past: the type prompt said "yesterday" and the only accepted answer was `Pani była w domu`. The word "yesterday" came out of the prompt. Other items still drill `Wczoraj byłam`.
- Future: the tip drew `Jutro przeczytam` → `Jutro będę czytać`, as if the one-word future were not Polish. The body already says `przeczytam` is real and not the line this course teaches. The tip now says that. The multiple-choice items that ask which line the course uses still offer `przeczytam` as the other future.
- Traps table: the `magazyn` "Not" cell said "a magazine." It now says the word is a warehouse and also a periodical, and the mistake is treating it as only a periodical. The next paragraph was already right and was not rewritten.
- All 27 fill blanks in this file used `___`. A three-underscore gap leaves a stray underscore when the blank is split on `__`. They are now `__`. Pattern frames in extra-a.js and extra-b.js still use `___`, which is the pattern convention, not a practice blank.

## Checks that fold, and cannot be marked strict

A check is `[question, 4 options, index, why]`. There is no `!strict` slot. These tap options differ only by a folded letter, and the letters are on the screen: spelling `proszę`/`prosze`, accusative `kawę`/`kawe`, ordering `herbatę`/`herbate`, e-isz `Pan pisze`/`Pan piszę`, instrumental `studentką`/`studentka`, time `ósma`/`ósmą`.

## What was checked and kept

No produced answer is a ty form. `Masz czas?`, `Jak się masz?`, and the check that asks which line a friend says are recognition items. `Jesteśmy` is "we are," and it is produced. `państwo`, `panowie`, `panie`, and the vocative `Panie` stay recognition, named once. Dative is named on the thanks line and on the age calque, and it is not drilled. `Dzień dobry` is morning and afternoon. `Dobry wieczór` is evening and late night. `Dobranoc` is a lesson item, not the banner. `Dobrego popołudnia` stays the hello this course does not use.

Order items already cue the starting word where another order of the same words would also be ordinary. No order or type item had a right and wrong string that differed only by a folded letter without `!strict`. No fill item was missing `!strict` where a distractor folded onto an answer. `ł` does not fold, and no item was marked strict for `ł` alone.

## Edit counts

| File | Wrong Polish in a model line | Wrong teaching | Practice | Pron | Wording |
|---|---|---|---|---|---|
| decks-a.js | | 3 (kasza, na ty, państwu) | | | |
| decks-b.js | | 2 (magazyn, pyszne) | | | |
| extra-a.js | | | | | 1 (kasza example) |
| extra-b.js | | 1 (Kim pan jest) | | | 1 (masculine frame) |
| lessons-1.js | | 2 (jest ellipse, group with a man) | 2 (`!strict`) | | |
| lessons-2.js | | 4 (dwa, Smacznego, pijam, Pijesz) | 12 (waiter multiple-choice cue, 11 `!strict`) | | |
| lessons-3.js | | 4 (Gdzie, bliska, przeczytam, magazyn) | 28 (1 prompt, 27 blanks) | | 2 (Pan idzie, byliśmy) |

No model sentence was replaced for being ungrammatical. The Polish that was wrong was the decision to score acceptable lines as errors, and the rules that were too absolute.

## Final state

`node tools/target/gen.js pl` wrote `/tmp/course-en-pl.hold.js` (27 of 27 lessons, 18 decks, 317 cards). `node tools/target/validate.js pl` → `PASS: all checks OK`. `node --check` passes on the seven JS files above. `packs/roadmaps.js` and `packs/course-en-pl.js` were not modified. No pron was regenerated. An unlisted verb, including `znam`, stays unmarked on `nie`, which the tool's own comment calls unmarked rather than wrong.

## Ten strings a native speaker should check first

1. `To jest Wrocław.` is stored as `toh yehst FROHTS-wahf`. Wrocław alone is `VROHTS-wahf`. The tool devoices `w` after `jest` and does not let `w` decide the cluster. Left as the tool prints it.
2. `Ewa jest we Wrocławiu` comes out `yehst feh vrohts-WAH-vyoo`. `Mieszkam we Wrocławiu` and `We wtorek` stay `veh`. `feh` is `w` after the voiceless `t` of `jest`.
3. `Nie znam Anny` is `nyeh znahm`. `znam` is not on the one-syllable list that pulls stress onto `nie`. `Nie wiem` does pull it, because `wiem` is on that list. Not added.
4. `trzy` is `tshih` and `czy` is `chih`. `trzecia` is `TSHEH-chyah` (`trz` as t plus sh, not the affricate).
5. `kilo` is `KYEE-loh`. The profile already calls the `y` before a vowel an over-pronunciation.
6. `Sześć złotych` (`shehzh'j'`), `Dziesięć złotych` (`JYEH-shyehnyj'`), `państwu` (`PAHNY-stfoo`), `mąż` (`mohNsh`), `żółw` (`zhoowf`), `barszcz` (`bahrshch`).
7. Careful stress: `muzyka` `MOO-zih-kah`, `uniwersytet` `oo-nyee-VEHR-sih-teht`. The profile marks this as the least sure stress decision, against a possible pl-PL voice.
8. `Piszę mój list`. `swój` is the more idiomatic word for one's own letter. `mój` is grammatical, and `swój` is not taught.
9. `dwadzieścia jeden złoty`. That is the prescriptive line. Many people say `złotych`.
10. `To Marek` and `Gdzie dworzec?` are natural, and this course does not accept them. Companions at one table often answer `Smacznego` with `Smacznego`. A waiter is answered with `Dziękuję`. `magazyn` is a warehouse and a magazine. `Dobrego popołudnia` exists as an occasional wish and is not the hello. `Jak się pan ma?` is bookish and correct. `Proszę iść prosto` is the polite infinitive. `pierwsza w prawo` agrees with an implied `ulica`.
