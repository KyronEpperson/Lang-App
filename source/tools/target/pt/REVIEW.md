# en-pt cold review (EN-PT-REVIEWER, 2026-11-18)

Read in full: every deck card (323), every dialogue (60), example (36) and pattern (18), all 25 lesson bodies, checks and practice items, and `respell.js`. Profile read in full: §1, §2, §3 (glossary), §6 (except the key table), §7, §10, §11; §4, §5, §8, §9 searched for the strings touched, not read through.

## Batch 0: open / closed vowels (respell.js)
- Script listed every distinct word in the prons whose stressed vowel is an unaccented e / o (203 words with ay / eh / oh / aw). All were read; nearly all were right.
- LEX fixes: `gôrda` (was open), `ôsso` (was open). Both confirmed closed in Wiktionary's Brazilian transcriptions via Kaikki (/ˈɡoʁ.dɐ/, /ˈo.su/; *ossos* is marked metaphonic, so `óssos` stays open). Neither word is in the course yet.
- LEX additions (closed, confirming the default and silencing the warnings): `conhêço`, `enderêço`, `vêzes`.
- Every pron in every file was regenerated with the tool. 3 changed: *Você conhece a Ana? Conheço!* (conhece now open `koh-NYEH-see`), *…comi pizza…* (`PEET-suh`), *Quando chove…* (`SHAW-vee`). No other row changed; no warning left.
- Spot check of 42 prons for nasal vowels, final -e / -o, de / di, te / ti, r / rr, lh, nh, x: all right.
- Left as is (key convention, for the lead): coda *ol* is always written `ohw`, so open *-ol* words (*futebol, espanhol, volta*) show a closed `oh`, while *-el* shows open `ehw` (*hotel*).

## Batch 1: decks-a.js (2 edits)
- Wrong teaching: *o feijão com arroz*, "Portuguese puts the beans first" → *o arroz com feijão* (the usual order; the note was false). **Departure from the profile:** this card and note are a §9 sample card; the profile should be corrected too.
- Wording: *Chego em casa* note adds that grammar books prefer *chegar a*.

## Batch 2: decks-b.js (5 edits)
- Wrong teaching: *Preciso de um médico* note said "precisar always takes de", contradicting *Preciso tomar uma decisão* → "takes de before a noun (but preciso ir)".
- Teaching: *assistir* note now says everyday speech often drops the *a* (*assistir um filme*).
- Wording: *É perto daqui* "It's close to here" → "It's near here" (**departure:** the profile's §9 sample has "close to here"; changed because it is not idiomatic English); *Eu estudo à noite* gloss aligned with its note ("at night"); *O que é isso?* note "isso = that, near you" → "this or that, for a thing you don't name", to match the `possessives` lesson ("What's this?").
- Reverted on re-reading §3: a change of "pretérito perfeito" to "simple past" in the *Já vi esse filme* note (the glossary requires the Portuguese name).

## Batch 3: extra-a.js (2 edits), extra-b.js (1 edit)
- extra-a pattern: *Eu tomo café às sete* = "I have breakfast" → *Eu tomo café da manhã às sete* (unambiguous).
- extra-a: *Deu trinta e dois reais* "It comes to" → "It's".
- extra-b: "It's close to here" → "It's near here".

## Batch 4: lessons-1.js (3 edits)
- Teaching: sounds table "ch, and usually x = sh" → "often x" (*táxi, próximo, exame*); "qu, gu: the u is silent" → "usually silent" (*cinquenta, linguiça*).
- Practice: greetings type item also accepts *Licença, por favor*.

## Batch 5: lessons-2.js (3 edits)
- Teaching: "*tem* and *têm* sound the same in Brazil" → "usually sound the same in everyday speech (some speakers stretch *têm*)".
- Teaching: `numbers` taught "for 'at', use *às*" right after *É uma hora* and *meio-dia*, which invites *às uma / às meio-dia* → adds *à uma*, *ao meio-dia*, *à meia-noite*.
- Practice: location fill "Ana lives over there, far from here" no longer accepts *aí* (the body teaches *aí* = near you); accepts *lá / ali*.

## Batch 6: lessons-3.js (5 edits + 3 pron)
- Teaching: progressive "there are no irregular -ndo forms" → "almost every verb follows this rule" (*pôr / pondo*).
- Teaching: reflexive "*tomar café* = have breakfast" now names *tomar café da manhã* too, and "*às* goes before clock times" adds "(but *à uma* for one o'clock)".
- Wording: past lesson, the -car / -gar / -çar spelling paragraph moved out from under the heading "falamos: now or before?"; city example "close to here" → "near here".
- Reverted: a removal of the colon after "In Portugal:" (×3); §3 prescribes "In Portugal:" at the start of every such note.
- Pron: 3 rows regenerated (batch 0).

## Writers' doubt list: verdicts
- *Este é / Esse é o meu marido*: both correct; *esse* is commoner in speech, as the possessives lesson says. Kept.
- *Ela está brava* = angry: normal in much of Brazil (SP, South); kept.
- *a lição de casa* / *o dever de casa*: both Brazilian. Kept.
- *assistir à TV*: note now gives the everyday form too.
- *Me dá uma água, por favor?*: friendly at a counter. Kept.
- *Eu acordo* without *me*: right (acordar is not reflexive in Brazil). Kept.
- *Chego em casa* + *chegar a* note: kept, note added on the card too.
- *tomo café* = have breakfast: true, but ambiguous; the pattern now uses *café da manhã*, the lesson names both.
- *A reunião está no escritório* marked wrong: right (events take *ser*). Kept.
- Fill accepting *lá / ali / aí*: *aí* removed.
- *Onde mora você*: grammatical, if less usual; acceptance kept.
- *tem / têm*: softened.
- Cultural notes (lunch as the main meal "for many Brazilians", P / M / G sizes, *meia* for six in phone numbers): all accurate. Kept.

## Edits per file
| File | Wrong language | Wrong teaching | Practice | Pron | Wording |
|---|---|---|---|---|---|
| respell.js | 2 (LEX) | | | 3 (LEX adds) | |
| decks-a.js | | 1 | | | 1 |
| decks-b.js | | 2 | | | 3 |
| extra-a.js | 1 | | | | 1 |
| extra-b.js | | | | | 1 |
| lessons-1.js | | 2 | 1 | | |
| lessons-2.js | | 2 | 1 | | |
| lessons-3.js | | 3 | | 3 | 2 |

## Ten things a native speaker should check first
1. Coda *ol* written `ohw` (closed) in *futebol, espanhol, volta*: open in speech; a key decision for the lead.
2. Vowel quality from recall (§11 lists LEX as unconfirmed): *conhece* (open) vs *conheço* (closed); *endereço*, *vezes*, *cebola*, *esquerda*, *planeta* closed; *chefe*, *pressa*, *febre*, *regra* open.
3. Homograph readings fixed course-wide: *acordo* open (verb), *almoço* closed (noun), *gosto* open (verb), *pelo / pela* closed.
4. *Ela está brava* (angry): is it understood everywhere, or should a note give *zangada / irritada*?
5. *Ficou grande* glossed "It's too big on me", and *Eu vou dormir às onze* glossed as routine "I go to bed at eleven".
6. *Obrigado pelo almoço, está uma delícia!* (would *estava* be more natural after the meal?).
7. *Isso é uma caneta* as the teacher's answer to *Como se diz isso em português?* (vs *Isso se chama caneta*).
8. *Hoje está quente* and *Tá calor, né?* (with "write *Está calor* in typed answers").
9. *Me dá a chave* / *Me dá uma água, por favor?* as polite enough with a stranger at a counter.
10. *Como chama-se você?* used as a wrong option (not Brazilian, but is it plainly "wrong"?), and *Onde mora você* accepted as a typed answer.

## Final run
`node tools/target/gen.js pt && node tools/target/validate.js pt` (from /home/claude) → `PASS: all checks OK` (the scratch-path form passes too); the regen dry run shows 0 pron changes; `node --check` passes on every JS file.
