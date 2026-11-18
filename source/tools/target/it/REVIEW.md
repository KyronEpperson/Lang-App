# en-it cold review (EN-IT-REVIEWER, 2026-11-18)

Scope: every file in tools/target/it/ except profile.json, read in full (decks-a, decks-b, extra-a, extra-b, lessons-1, lessons-2, lessons-3), plus respell.js.

## Batch 0: pronunciation (respell.js and every pron)
- I wrote a scratch regenerator (kept in the scratchpad, not in it/). It parses the files and rewrites only deck field 2 and the middle field of `{{ex:…}}`. A dry run over all 517 pronned strings found 1 stale pron:
  - `Non c'è un bancomat qui vicino.` (lessons-2, ce) still had `bahn-KOH-maht`. Regenerated to `BAHN-koh-maht`, which matches LEX.
- Stress list: there are 264 distinct words of 3+ syllables, sorted by reversed spelling so that endings cluster. I read the whole list, including -ano/-ono verbs, -ere infinitives, -ico/-ile/-olo/-ola, imperatives and infinitives with pronouns (aiutarmi, alzarmi, provarla), place names and numbers.
  - All 264 have the right stress (examples: abitano, costano, lavano, piacciono, correre, ripetere, centesimi, quindici, napoli, tavolo, all'angolo, numero, libero, zucchero, sabato, cinema, macchina, camera, lettera, nevica, telefono, compiti, bancomat, autobus).
  - I also read every word of 1–2 syllables (about 300); all are right (mio, mia, miei, zio, tuo, suo, uova, cos'è, com'è…).
  - **No LEX or LOAN additions were needed.**
- z (all 28 z words checked): `dz` in zucchero, pranzo, mezza, mezzogiorno and mezzanotte; `ts` in pizza, piazza, ragazzo/-i/-e, grazie, stazione, lezione, colazione, prenotazione, polizia, vacanza, ambulanza, Firenze, Venezia, marzo, alzo/alzare/alzarmi/alzata/alzate, zio and frizzante. All are right.
  - frizzante: Wiktionary gives /fritˈtsante/ for the related *frizzo* as the standard form and /ddz/ as the traditional one. The `ts` output follows the modern standard, so it was kept. Only a native speaker can say which one the voice should match (see item 4 below).
- s (22 words): every s between vowels is written `s` (casa, chiesa, cosa, inglese, museo, esame, sposato…). Profile §6 makes that choice on purpose. s before v is written `z` (sveglia, svegli, sveglio), as it should be.
  - That makes 50 s and z words checked in all.
- Hand-typed respellings in notes (PEET-tsah, teh-LEH-foh-noh, AH-bee-tee, AH-bee-toh, NOO-meh-roh, TAH-voh-loh) all equal the tool's output.
- After all edits, the regenerator reports 0 differences: every pron equals the output of `respell.js`.

## Batch 1: decks-a.js (9 decks): 0 edits
Read in full. I found no wrong Italian, wrong notes or duplicate meanings. Agreement notes, article notes (lo zio, lo scontrino, l'aglio) and time and date notes are correct.

## Batch 2: decks-b.js (9 decks): 1 edit
- Wording / teaching (minor): the note on `Studio l'italiano.` said "With studiare the language takes l'", which is too absolute, since *studio italiano* is also common. It now reads "A language usually takes the article: l'italiano."

## Batch 3: extra-a.js and extra-b.js: 0 edits
Read in full: 74 dialogues, 55 examples, 18 patterns. tu and Lei are consistent in every exchange: staff, strangers and hotel and pharmacy staff get Lei, and friends get tu. I found no grammar errors.

## Batch 4: lessons-1.js (sounds … present): 2 edits
- Practice (sounds, last `ty` item, "the city" → `la città`): the item is about the accent mark, but it was not marked `!strict`, so *la citta* would have passed as "almost". I added `'!strict'`.
- Wording (gender, `fi` "i padr__"): the `why` said nouns in -e "add -i". It now matches the body: the -e becomes -i.
- Checked and left as they are:
  - article tables (7 forms of "the", 4 of "a");
  - essere/avere forms;
  - adjective agreement;
  - present-tense endings, with the stress note on lavorano and scrivono;
  - the -isc- verbs.

## Batch 5: lessons-2.js (questions … piacere): 3 edits (one of them the pron in Batch 0)
- Practice (irregular, last `ty` item, "It's going to be cold tomorrow"): the future, *Domani farà freddo*, is natural but not accepted, and it has not been taught. I added "(use the present)" to the prompt.
- Consistency (ce body): bar is glossed "café" in the decks but "bar" in the ce examples. I added one line: an Italian bar is a café.
I found no wrong Italian or wrong teaching. These are all correct:
- qual è with no apostrophe, and quanto agreeing with its noun;
- c'è vs è;
- times with sono le / è l'una, and dates with il primo;
- possessives with no article for singular family words;
- a / in / da and the contracted prepositions;
- the forms of andare, venire, fare and stare;
- the modals, and vorrei vs voglio;
- piace vs piacciono, gli for "they", and anche a me.

## Batch 6: lessons-3.js (reflexive … sapere-conoscere): 4 edits
- Practice (imperative, first `or` item): the tiles could also build "dov'è la stazione Mi scusi". I added "start with Mi scusi" to the prompt so that only one order fits.
- Consistency (lo-la): "L'aspetto al bar" was glossed "at the bar". It now says "at the café", to match the decks.
- Wrong teaching (adverbs): "Most of these time words come after the verb, much as in English" was false. English puts *always* and *never* before the verb, and the very next example starts with *Adesso*. It now says that Italian puts sempre and mai right after the verb (bevo sempre), unlike English, and that ora and adesso can also start the sentence.
- Wrong teaching (passato-essere): the test "direct object → avere" invited the reverse inference "no object → essere". I added that the test works only one way: many verbs with no object still take avere (ho dormito).
- Checked and left as they are:
  - reflexive forms and pronoun placement (devo alzarmi / mi devo alzare);
  - lo / la / li / le, including l'aspetto;
  - the tu and Lei imperative and non + infinitive;
  - participle agreement with essere and none with avere;
  - molto agreeing only before a noun;
  - sì / si / se and perché;
  - sapere vs conoscere.

## Edit counts per file
| File | Wrong Italian | Wrong teaching | Practice | Pron | Wording |
|---|---|---|---|---|---|
| decks-a.js | 0 | 0 | 0 | 0 | 0 |
| decks-b.js | 0 | 1 (minor) | 0 | 0 | 0 |
| extra-a.js / extra-b.js | 0 | 0 | 0 | 0 | 0 |
| lessons-1.js | 0 | 0 | 1 | 0 | 1 |
| lessons-2.js | 0 | 0 | 1 | 1 | 1 |
| lessons-3.js | 0 | 2 | 1 | 0 | 1 |
| respell.js | — | — | — | 0 LEX changes | — |

Note: the sounds body is about 456 words by my count, table text included, which is just over the 450 guideline. I did not change it.

## Ten things a native speaker should check first
1. `Eventualmente ti chiamo domani.` = "If need be, I'll call you tomorrow." Is it natural, and is the gloss right?
2. `Il volo è cancellato.` Natural, or should it be *è stato cancellato*?
3. lo-la body: "*Lo aspetto* is also correct" next to *l'aspetto*. Is the unelided form acceptable in today's usage?
4. `l'acqua frizzante` → `freet-TSAHN-teh`: the z is voiceless (ts), following the modern standard; the traditional form is dz. Which should the voice match?
5. `attualmente` / `eventualmente` are respelled with a glide (`aht-twahl-MEHN-teh`): is *tu + a* acceptable as one syllable?
6. `Ha senso.` with the note "Not fa senso" (*fa senso* = it grosses me out). Is that the right warning?
7. `Mi porta il conto?` as the standard polite way to ask for the check (vs *Il conto, per favore*).
8. `la cioccolata` glossed as "hot chocolate", and `il cornetto` as "Also called una brioche, especially in the north".
9. `Che taglia porta?` / `Porto la quarantadue.` (shop dialogue) and `Il menù del giorno costa dieci euro, con l'acqua.`
10. The greeting-time claims: *buongiorno* "from morning to early afternoon", *buonasera* "from mid-afternoon on", and *Buonanotte* only late at night or going to bed.

Also checked: no card target appears in two decks (scripted check).

## Final checks
- `node tools/target/gen.js it <scratch>/c.js && node tools/target/validate.js it <scratch>/c.js` → PASS (24/24 lessons, 18 decks, 321 cards, 336 practice items, standing rule ≥ 2/2 in every set).
- Final run: `node tools/target/gen.js it` (wrote packs/course-en-it.js, 24/24 lessons, 18 decks, 321 cards) followed by `node tools/target/validate.js it` → PASS. The regenerator diff is 0.
- `node --check` passes on every JS file in it/.
