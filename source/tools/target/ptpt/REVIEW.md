# en-ptpt cold review (EN-PTPT-REVIEWER)

Reviewer did not write this course (written by Cursor; no earlier review). Style authority: `docs/profiles/en-ptpt.md` and `profile.json` (not edited). HOLD left in place. Backups of the files as received: scratchpad `p3/ptptR/orig/`.

## Batch 1: respell.js, decks-a.js, decks-b.js, extra-a.js, extra-b.js, lessons-1.js

### respell.js (pron tool)
Smoke test on ~60 common words (articles, pronouns, ser / estar / ter, sim, não, olá, obrigado/a, greetings, 1 to 10, por favor, se faz favor, desculpe, o senhor, adeus, até logo). Right as Lisbon respellings: o `oo`, a `uh`, os `oosh`, um `oong`, uma `OO-muh`, eu `ayw`, nós `nawsh`, ele `AY-lih`, ela `EH-luh`, sou `soh`, és `ehsh`, é `eh`, são `sowng`, estou `ihsh-TOH`, está `ihsh-TAH`, tenho `TUH-nhoo`, tem `tuhyng`, têm `TUHYNG-uhyng`, sim `seeng`, não `nowng`, olá `aw-LAH`, obrigado `aw-bree-GAH-doo`, bom dia `bohng DEE-uh`, três `traysh`, seis `suhysh`, sete `SEH-tih`, dez `dehsh`, desculpe `dihsh-KOOL-pih`, se faz favor `sih fahsh fuh-VOHR`.

Fixed:
- `vocês` came out `voo-SAYSH` while `você` was `vaw-SAY`: added to EXC as `vaw-SAYSH`.
- `nove` came out `NOH-vih` (closed). The tool's own `dezanóve` has the open vowel: added `nóve` to LEX (`NAW-vih`).
- `somos`, `temos` warned; the closed default is right: added `sômos`, `têmos` to LEX (silences the warning).
- Rule bug: a stressed *a* was raised to `uh` when the NEXT syllable began with m/n even across a non-nasal coda, so *carne* was `KUHR-nih` (also *alma*, *arma*). `raisedA` now stops at a non-nasal coda: `KAHR-nih`.
- `cinquenta` was `seen-KAYN-tuh`; European Portuguese sounds the u: EXC `seen-KWAYN-tuh`.
- `açúcar` reduced the unstressed final *-ar* to `kuhr`; EXC `uh-SOO-kahr`.
- The diphthong *ai* was written `ai`, which an English reader says as in *rain* (`pai` read as "pay", `PRAI-uh` as "pray-uh"). Now `ahy` (`pahy`, `PRAHY-uh`, `kuhsh-KAHYSH`), the same build as `uhy`, `awy`, `ooy`. Still matches pronPattern; it also removes the profile's §6.5 problem that `pai` equalled its spelling.
- `repron.js ptpt`: 31 prons rewritten, second run 0 rewritten, no "generator unsure" words.

Second pass (after batch 3):
- *lh* and *nh* were written `lh` / `nh`, which an English reader says as l + h and n + h. Now `ly` / `ny` (the *lli* of *million*, the *ny* of *canyon*): `FEE-lyuh`, `BUH-nyoo`, `sih-NYOHR`, `TUH-nyoo`, `ah-muh-NYUHNG`. Both already match pronPattern, so profile.json is untouched. Lessons 1 and 2 now say the line writes `ly` / `ny` and that each is one sound. Trade-off: *filha* `FEE-lyuh` and *família* `fuh-MEE-lyuh` now share `ly`, which is also what an English ear hears.
- Checked on Wiktionary's Portugal lines (via kaikki.org) and added to EXC: *cinquenta* /sĩˈkwẽ.tɐ/, *açúcar* /ɐˈsu.kaɾ/, *hospital* /ɔʃ.piˈtal/ → `awsh-pee-TAHL`, *igualmente* /iˌɡwalˈmẽ.tɨ/ → `ee-gwahl-MAYN-tih`. Added `combóios` to LEX for the plural.
- `repron.js ptpt`: 91 rewritten, second run 615 read, 0 rewritten.

### decks-a.js (12 edits)
- WRONG LANGUAGE: *Imagina* "You're welcome" is Brazilian. Replaced by *Não tem de quê* "Don't mention it" (*De nada* already sits in Compliments, so it could not be used without a cross-deck duplicate).
- WRONG TEACHING: *Desculpe / Desculpa, Vire / Vira, Siga, Dá-me* were labelled "the ele form" / "the tu form". They are command forms (*vira* is not *viras*); reworded as the polite command (o senhor / a senhora) and the friendly command (tu).
- WRONG TEACHING: *cem* "the form used in front of a noun" → exactly one hundred; 101 is *cento e um*.
- WRONG TEACHING: *Onde fica* "fica, not está" overstated (*Onde está a farmácia?* is fine) → fica is the usual verb.
- Register: *Dá-me a conta* / *Dá-me um café* now glossed "(to a friend)", with a note that it is too blunt for a waiter.
- Wording: *Adeus* "Cooler than até logo" → "can sound more final".
- PRON (repron): vocês, pai, praia, carne.

### decks-b.js (0 hand edits)
Read in full; European vocabulary and *estar a* throughout. PRON only (repron): praia, Vais, Cascais, Vocês.

### extra-a.js (6 edits)
- WRONG LANGUAGE: vocative with an article, *Bom dia, o senhor*, *Desculpe, a senhora*, *Boa noite, a senhora*: not said. → *Bom dia.* / *Desculpe, minha senhora.* / *Boa noite, minha senhora.*
- WRONG LANGUAGE: *Imagina* (Brazilian) in the *Obrigado* dialogue → *De nada*.
- Register: *Dá-me a conta, se faz favor* to a waiter (tu command) → between friends: *Dá-me a conta, eu pago. / Não, hoje pago eu.*
- Unnatural: *Eu levanto-me às oito. / Eu não me levanto às oito.* → *Eu não. Levanto-me às nove.*

### extra-b.js (2 edits)
- Unnatural: *Gosto de Lisboa, mas gosto do Porto* → *Gosto de Lisboa. E tu? / Eu também, mas prefiro o Porto.*
- Unnatural use of *fixe* for food (*O pastel está fixe*) → *Vamos à praia amanhã? / Fixe!*

### lessons-1.js (13 edits)
- WRONG LANGUAGE: questions lesson taught *Como o senhor está?* as normal and accepted *Como tu estás?* / *Como o senhor está?*: Brazilian order without inversion. Body now teaches *Como está o senhor?* and *Como é que o senhor está?*; the two answers removed from #12 and #13.
- WRONG TEACHING: articles lesson listed *o queijo* among nouns ending in *-e* → *o leite, o peixe, a tarde, a noite*.
- WRONG TEACHING: "from three upward the number word does not change for gender" (articles and numbers lessons): false for *duzentos / duzentas*, *vinte e um / uma* → "from three to twenty".
- WRONG TEACHING: address lesson said *Desculpe* "is this same ending" (the ele form) → the polite command; *Vós* "an old singular-looking plural" → an old plural you.
- PRACTICE: greetings mc#5 had *Se faz favor* as a wrong way to get a stranger's attention; in Portugal it is a normal way to call a waiter → *Até logo*.
- PRACTICE (check 3): numbers mc#1 option *dezasséte* (accent-only non-word) → *dezasete*; present mc#2 option *falámos* (accent-only) → *falo*.
- Wording: "The square como" → "In the table, como".
- PRON (repron): açúcar, Vocês, cinquenta.

## Batch 2: lessons-2.js (12 edits)
Read in full (estar, ter-haver, family, adjectives, irregular, contractions, time, progressive, routine). *Estar a* + infinitive throughout, *chamo-me / não me chamo*, *levanto-me / levantamo-nos / não nos levantamos*, *há* against Brazilian *tem*: all correct.
- WRONG TEACHING: time lesson said *ao sábado* and *no sábado* are both ordinary for "on Saturday". *Ao sábado* is the habit (on Saturdays); reworded. Consistent with the extra-a example *Ao domingo não me levanto às oito*.
- WRONG TEACHING: ter-haver gave *o senhor* as an example of a first name taking the article → *o Pedro*.
- PRACTICE (check 3, mc options that differed from the answer only by an accent or a hyphen): estar mc#4 *esta* → *estás*; ter-haver mc#4 *tem* → *tens*; family mc#3 *avó* → *a meu avô*; adjectives mc#2 *Está casa* → *Estas casa*; contractions mc#2 *a praia* → *em a praia*; time mc#3 *as três* → *a três*; time mc#4 *segunda feira* → *segundas-feiras*; time mc#5 *meio dia* → *meia-noite*; routine mc#3 *pequeno almoço* → *os pequeno-almoço*; routine mc#5 *as dez* → *em dez*. The strict fill / type items with the same contrasts are kept (see final section).
- PRON (repron): pai, praia, vais, vai, saio.

## Batch 3: lessons-3.js (8 edits + 4 strict flags)
Read in full (home, likes, food, compliments, city, transport, directions, plans, past). European vocabulary throughout (*autocarro, comboio, paragem, bilhete, chávena, sandes, sumo, frigorífico, telemóvel*), *estar a*, *porque / porquê / porque é que*, *falámos / falamos*, *ter de*. No wrong-language error found that needed a rewrite.
- PRACTICE (check 3, mc options differing from the answer only by an accent): directions mc#1, mc#2, mc#4 (*a direita / a esquerda* → *ao direita / ao esquerda*); plans mc#2, mc#4, mc#5 (*à Lisboa* → *ao Lisboa*); past mc#1 (*Gostamos do queijo* → *Gostámos o queijo*); past mc#2 (*Fui à Lisboa* → *Fui ao Lisboa*).
- PRACTICE: the order items whose distractor tile differs from an answer tile only by the accent (contractions or#2 in lessons-2; directions or#1–3; past or#1) now carry `!strict` as well. The app already grades tiles exactly, so this only records the intent.

## Final state
- Cross-deck duplicates: none (checked before and after; the Imagina replacement was chosen to avoid one).
- Wrong options that differ from the answer only by capitals, punctuation, hyphen or accent: none left where the app would accept them. Remaining accent-only pairs are deliberate and graded exactly by the app: strict fills / types (nasals #9 #12, present #11, questions #10, estar #11, ter-haver #11 #14, family #11, adjectives #10, contractions #10, transport #11, directions #9 #11 #12, past #9 #12) and the strict order items above. Multiple-choice options are tapped, not typed, but the accent-only ones were replaced anyway.
- `repron.js ptpt`: 616 prons read, 0 rewritten (second run). `gen.js ptpt` (HOLD: temp file) and `validate.js ptpt`: **PASS: all checks OK**, no WARN lines. `node --check` passes on every JS file.

## Pron tool: what it still gets wrong or cannot vouch for
- `kh` for the uvular *r* is not an English letter value (only the Scottish *loch* gives it), and English has no spelling for the sound. Left as is; lesson 1 explains it.
- The tool now departs from the profile text: §6.2 key (`lh`, `nh`, `ai` → `ly`, `ny`, `ahy`), §6.3 / §6.5 / §9 sample prons that contain them (*tenho*, *pai*, *praia*, *senhor*, *minha*, *filha*, *banho*, *trabalhar*), and the §6.5 note that `pai` equals its spelling. profile.json has no stored prons and its pattern accepts the new forms.
- `ayw` for *eu* reads as "eye-oo" to some readers; `ow` / `owng` for *ão* is an approximation (the vowel is [ɐ̃w̃], nearer *uh-w*). Acceptable, not exact.
- Any new word with an unstressed open vowel (like *hospital*) or a full *a* before coda *l* (like *igualmente*) will still be reduced by the rules until it is added to EXC.
- `ng` closes nasal vowels for an English reader (*bohng*, *seeng*): the vowel is nasal with no velar. Lesson 1 says so; the letters still invite a hard *g*.
- `que` is always `kih` (unstressed); `quê` correctly gives `kay`.

## Ten strings a native speaker should check first
1. *Não tem de quê* (Greetings deck, replaces Brazilian *Imagina*): natural as "don't mention it" in Lisbon?
2. *Desculpe, minha senhora* / *Boa noite, minha senhora* (extra-a): the vocative chosen to replace *a senhora*.
3. *O telemóvel* → `teh-leh-MAW-vehl` (stored whole with open pretonic *e*): or `tih-lih-`?
4. *a estação de comboios* (Around town deck; changed from *de comboio*): the usual Lisbon phrase?
5. *Vou a Lisboa* / *Fui a Lisboa* / *Vamos a Coimbra* against *para*: which one a Lisbon speaker says for a trip (profile §11 gap).
6. *Gosto do café ou do chá* "I like coffee or tea" (likes lesson): natural, or does it need *Gosto de café e de chá*? (The *O pastel está fixe* lines were removed from the lesson as doubtful.)
7. *Ao sábado* = on Saturdays (habit) vs *no sábado* = this Saturday, as now taught in the time lesson.
8. *Onde é que o café está?* taught as normal (questions lesson).
9. *Não há um café* "There is not a café" (ter-haver): or *Não há nenhum café* / *Não há café aqui*?
10. *euro* → `AYW-raw` (open final *o*) and *Aveiro* → `ah-VUHY-roo` (full first *a*), both stored whole in respell.js.

## Second pass, after the last batch
- lessons-1.js: 3 more edits (the lh / ny wording in the vowels and nasals lessons, and the nasals tip).
- lessons-3.js: 3 edits. *O pastel está fixe* (lesson text and example row) removed as doubtful; the closing line now uses a friend's new phone.
- decks-a.js / extra-a.js: *a estação de comboio* → *a estação de comboios* (card and example key).
- lessons-2.js: routine check q3 option *pequeno almoço* (hyphen only) → *os pequeno-almoço*. The other check questions (tapped, not typed, and outside the "practice item" rule) keep their accent contrasts.
- Final: `repron` 0 rewritten, `gen.js ptpt` → temp file (HOLD), `validate.js ptpt` → PASS: all checks OK, no WARN.
