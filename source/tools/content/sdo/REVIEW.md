# sdo-en review (SDO-REVIEWER, cold read)

Scope: every row that differs from es-en (decks, extra, lessons, practice, meta, more/a1, more/a2, more/b1), the new `dominicanismos` lesson, the 14 new deck-22 cards, `ui.json` (`{}`: confirmed, no override needed), the writers' deviation fragments, the 130 type items (`list_type.js`, read in full), and the scan.js rows. Base review of the untouched es-en text: `tools/content/es/REVIEW.md`.

## 1. What I changed

### 1.1 Deviation fragments (lead's request)
- `deviations.c.json`: removed `lessons.dominicanismos` (the lesson is covered by `extraLessons`).
- `deviations.d.json`: removed `items["perfect-2#ex0"]` (lesson example rows are not parity items).
- Re-ran `merge_deviations.py sdo`. **The parity WARN stays**: the merge script adds to the existing `deviations.json` and never removes keys, so the two stale keys are still in `deviations.json`, which this role may not edit. The lead must delete `lessons.dominicanismos` and `items["perfect-2#ex0"]` from `tools/content/sdo/deviations.json` by hand. This is a WARN only; parity PASSes.

### 1.2 Respelling consistency (open point 1)
Each new English string now has one respelling across the course. I checked every one against PRON-RULES.md.
- `more/b1.js` perfect-2 example: `nuu IORK` → **`NUU IORK`** (it now matches plurals in a1. Under PRON-RULES §1 one-syllable content words are written in capitals).
- I checked these and made no change. Each appears in one form only:
  - New York `NUU IORK`; Santo Domingo `SAN-tou de-MING-gou` (/ŋɡ/ → ng-g, as ING-glish); Santiago `san-ti-AA-gou` (= es-en's existing *grow up* card); Puerto Plata `PWER-tou PLAA-re` (flap t); the Dominican Republic `dhe de-MI-ni-ken ri-PA-blik`.
  - SUV `es-iu-VII` (letters stressed on the last); security guard `se-KIU-re-ri GAARD`; cereal `SI-ri-el`; jump-start `DYAMP-staart`; diaper `DAI-per`; razor `REI-ser`; pitcher `PI-cher`.
  - home run `JOUM RAN`; T-shirt `TII-shert`; polo shirt `POU-lou SHERT` (*shirt* = SHERT, as es-en); tape `TEIP`; trash can `TRASH KAN`; chest rub `CHEST RAB`.
- No respelling is written for Punta Cana, Providence or Lawrence: they appear only in practice items and in extra.js example rows, and neither carries a respelling.

### 1.3 "la República Dominicana" (open point 2)
I used **«la República Dominicana»** everywhere: glossary §3, the deck-1 card, the extra.js dialogue, the false-friends fill and the decimals note below. The articles-2 note was the only place with the form without the article.
- `more/a2.js` articles-2: «…lleva *the*: aunque en español digas «soy de República Dominicana», en inglés es *I'm from the Dominican Republic*.» → «…lleva *the*, como «la República Dominicana»: *I'm from the Dominican Republic*, no *I'm from Dominican Republic*.» The note now builds on the Spanish article instead of describing what the learner "says".

### 1.4 `pron`: final s and n (open point 3)
`lessons.js`. Before: «En el habla dominicana la *s* final muchas veces se suaviza o no se pronuncia… Y si la *n* final te sale como *ng*, …» → After: «En el español dominicano es normal que la *s* final suene suave o no se pronuncie, y que la *n* final suene como *ng*. En inglés, en cambio, esos sonidos cambian el sentido. La *s* final marca el plural y la tercera persona, así que pronuncia los finales *-s*, *-st* y *-sts*: … Y *thin* (delgado) y *thing* (cosa) son palabras distintas: para la *n* de *thin*, termina con la punta de la lengua…». The new text states a fact about Dominican Spanish ("es normal"), with no "te sale", and gives the reason for the English rule.

### 1.5 `dominicanismos` lesson (open point 4, gender)
`more/a1.js`:
- Brand words now teach the general word with the same pattern each time: «el *vaporú* es *VapoRub* o, en general, *chest rub*» → «el *vaporú* es un **chest rub** (*VapoRub* es la marca)». «(*Corn Flakes* es un cereal)» → «(*Corn Flakes* es una marca)», which matches the card. yilé → razor, pamper → diaper and teipi → tape were already right in the body, the cards and the practice.
- **Gender of *yilé***: the body and practice mc #1 had it masculine («el yilé», «un yilé nuevo»), while extra.js had «la yilé». I made it feminine throughout, as in usual Dominican use and like *afeitadora*: «la *yilé* es un razor»; «¿Cómo se dice «Necesito un yilé nuevo» (una afeitadora)?» → «…«Necesito una yilé nueva»?».
- *zafacón*: the hedge is kept in the lesson («Se dice que… nadie lo sabe con seguridad») and on the card («pero no se sabe con seguridad»). No change.

### 1.6 Setting fact (Spanish only)
- `lessons.js` numbers: «(en México y algunos otros países, en cambio, se escribe igual que en inglés)» → «(en la República Dominicana, en México y algunos otros países, …)». The DR writes decimals with a point and thousands with a comma, like the US (RD$1,500.00). A Dominican reader would otherwise think the note describes them.

### 1.7 English side
I made no English-side change, so there is no `deviations.review.json`. The b1 change is to a respelling only, and parity still PASSes.

## 2. Edit count

| File | Edits |
|---|---|
| deviations.c.json | 1 |
| deviations.d.json | 1 |
| lessons.js | 2 (pron paragraph, numbers decimals) |
| more/a1.js | 4 (yilé ×2, vaporú, Corn Flakes) |
| more/a2.js | 1 (articles-2 note) |
| more/b1.js | 1 (NUU IORK) |
| decks.js, extra.js, practice.js, meta.js, more/a1 other rows, ui.json | 0 |
| **Total** | **10** |

`alphabet`: all `{{tiles:}}` lines are byte-identical to es-en, the spelling-patterns section is untouched, and alphabet_check passes.

## 3. Checked and left as they are
- **Type items, 130 read**:
  - Every contraction has its full form in the generated pack. The only answers not expanded are the possessive-like *T's*, which are correct.
  - The writers' fixes are right: «Tomo té (en general)», «Ella toca la guitarra (en general)», the "es algo habitual" hint, and *Let us call it a day*.
  - dominicanismos #11 to #13 accept the natural answers.
- **scan.js**:
  - The 19 English rows are all travel or trade (Mexico, Lima, Peru, Buenos Aires, Mexico City), kept under §8.2. The *Spain/Espain* item stays.
  - The 32 Spanish rows are comparisons (Argentina, México, España) or already swapped. FORBID is 0.
- **The 14 cards and 6 extra dialogues and examples**: meanings, notes and DR/US scenes are right. *strike* also gives «huelga». *security guard* notes that *watchman* is less used today. jump-start is glossed as «pasarle corriente a la batería».
- **`questions` line** «¿Qué tú quieres?» → *What do you want?*: neutral.
- **ui.json `{}`**: correct (es already uses *celular* and *computadora*).

## 4. For a Dominican speaker: top ten
1. *I'm from **the** Dominican Republic*: the deck-1 card and the articles-2 note both teach it, and both link it to «la República Dominicana».
2. Brand words teach the general English word: *SUV* (not *Jeep*), *cereal*, *razor*, *diaper*, *chest rub*, *tape*.
3. *an SUV*, because *S* is said «es»: taught in the lesson tip, check 3 and order #5.
4. *home run* is two words with the stress on *home*, and the past of *hit* is *hit*.
5. *yompear* → *jump-start* (*I need a jump*); *guachimán* → *security guard*.
6. The `pron` note treats final *s* and *n* as normal Dominican features and explains why English needs them (plural, third person, *thin/thing*).
7. «¿Qué tú quieres?» is presented as Dominican usage, and *What do you want?* gives the needed *do*.
8. *carro, guagua, guineo, maní* replace *auto, autobús, plátano, cacahuate* in all edited Spanish.
9. Setting: Santo Domingo, Santiago, Puerto Plata, Punta Cana, New York, Providence, Lawrence; Yokasta; dollars in US scenes.
10. Decimals: the DR already writes 1,500.00 like English (numbers note).

## 5. Not fixed within scope
- **`deviations.json` still holds the stale keys** `lessons.dominicanismos` and `items["perfect-2#ex0"]` (see 1.1). Lead action: remove them by hand, or change `merge_deviations.py` so it rebuilds from the fragments.
- **Owner checks (sdo.md §11)**:
  - Is *yilé* feminine for the owner too?
  - Does *tíchel* mean a sports jersey or a plain T-shirt?
  - Are the names typical?
- **es-en issues, also live in es-en**:
  - relative check 0 writes *Bogota* without the accent in the English stem. This is acceptable in English, but es-en elsewhere uses *Bogotá*.
  - The prep lesson table uses *in Lima, in Mexico* as generic examples. It is kept, because it is not "where you live".
  - The dominicanismos fill #8 distractor *cereals*: the profile prescribes it, and it is marginal (not standard US) rather than plainly wrong.

## 6. Checks (scratch pack `$S/sdo-r.js`)
- gen: wrote 375513 bytes.
- validate: `PASS: all checks OK`.
- parity: `PASS: shared English side matches ko-en`. WARN, unused deviations: lessons:dominicanismos, items:perfect-2#ex0 (see 1.1).
- lint: `0 blocking`.
- alphabet: `PASS alphabet sdo`.
- scan --strict: `0 FORBID`, with 19 English-side rows and 32 Spanish rows, all checked.
- `node --check`: OK on lessons.js, more/a1.js, more/a2.js and more/b1.js.
