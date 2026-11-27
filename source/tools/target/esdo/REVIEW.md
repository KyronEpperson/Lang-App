# en-esdo cold review (EN-ESDO-REVIEWER)

What I read in full: profile §1 to §10, `decks-do.js`, `extra-do.js`, `lessons-do1.js`, `lessons-do2.js`, the whole diff of the 15 inherited files against `tools/target/es/`, all of `lessons-1.js`, and the inherited lessons with a diff in `lessons-2.js` (present, questions, numbers, possessives, stem-change, gustar, prepositions) and `lessons-3.js` (directions, preterite, se), plus `decks-f.js` and `extra-f.js`. What I only scanned: the rest of the inherited files, with `scan.js --all` and Grep (for *guapo*, *ahorita*, *alquil/rent*, *Tato*, *pastelito*, *buena onda*).
Sources I opened: Dominican Cooking, famous dishes (no *pastelitos*, no *guachimán*, no *colmadón*); dle.rae.es (*guachimán*) did not load.

Grades: **must-fix** = wrong Spanish or wrong teaching, or a Dominican claim with no source; **should-fix** = misleading, inconsistent or weak wording, or a practice gap; **note** = checked and left as it is, or a question for a Dominican speaker.

## Findings

1. **must-fix** (wrong teaching) `decks-do.js`, «¿Tienen pan?» note. The note said both final n's become ng, but by the profile's own R2 (and `respell.js` natural mode: `TYEH-nehn pahng`) *tienen* keeps its n before a consonant.
   Old: `Both final n's sound like the ng in song: "pahng".`
   New: `pan, before a pause, ends like the ng in song: "pahng". tienen keeps its n, because a consonant follows.`
2. **must-fix** (contradiction: open point 1) `decks-f.js`, Flirting. The deck taught *guapo/guapa* = good-looking, while the traps deck teaches that *estar guapo* = to be angry. *Buenmozo* is not in §10 and I opened no source for it, so I used general words. Prons are from respell.js.
   - Old: `guapo | GWAH-poh | good-looking; handsome | To a man. To a woman: guapa. Mild alone, warmer with muy.`
     New: `atractivo | ah-trahk-TEE-boh | attractive; good-looking | To a man. To a woman: atractiva. In the DR guapo means angry, so don't use it for looks. Mild alone, warmer with muy.`
   - Old: `¡Qué guapa! | keh GWAH-pah | How good-looking you are! | Anyone to a woman; to a man: ¡Qué guapo! Mild to warm.`
     New: `¡Qué linda! | keh LEEN-dah | You look so pretty! | Anyone to a woman; to a man: ¡Qué lindo! Not ¡Qué guapa!: in the DR guapa means angry. Mild to warm.`
   - Old: `Estás muy guapo. | ehs-TAHS mwee GWAH-poh | You look really handsome. | To a man; to a woman: Estás muy guapa. Warm: estar = today.`
     New: `Te ves muy bien. | teh behs mwee byehn | You look really good. | Anyone to anyone; no gender change. Warm. Not Estás muy guapo: in the DR that means you're really angry.`
   - Old: `Te ves guapísima hoy. | teh behs gwah-PEE-see-mah oy | You look gorgeous today. | To a woman; to a man: guapísimo. Warm.`
     New: `Te ves lindísima hoy. | teh behs leen-DEE-see-mah oy | You look gorgeous today. | To a woman; to a man: lindísimo. Warm.`
   - «Te ves hermosa esta noche.» note. Old: `To a woman, on a date; to a man: guapo. Bold.` New: `To a woman, on a date; to a man: Te ves muy bien esta noche. Bold.`
3. **must-fix** (open point 1, re-keyed rows) `extra-f.js` DIALOG.
   - Old: `¡Qué guapa! | ¿Qué tal me veo? | ¡Qué guapa! Me encanta ese vestido. | How do I look? / You look great! I love that dress.`
     New: `¡Qué linda! | ¿Qué tal me veo? | ¡Qué linda! Me encanta ese vestido. | How do I look? / You look so pretty! I love that dress.`
   - Old: `Te ves guapísima hoy. | … No pasa nada. Te ves guapísima hoy. | …` New: `Te ves lindísima hoy. | … No pasa nada. Te ves lindísima hoy. | …`
   - Old: `Estás muy guapo. | Estás muy guapo con esa camisa. | Gracias, la compré ayer. | You look really handsome in that shirt. / …`
     New: `Te ves muy bien. | Te ves muy bien con esa camisa. | Gracias, la compré ayer. | You look really good in that shirt. / …`
   After these edits no inherited row uses *guapo* for looks (Grep).
4. **must-fix** (wrong language: open point 4) `lessons-2.js` `gustar`. *Pastelitos* is not in §10 (it is named only in the §8 table), and the source I opened does not list it. I replaced it with *yaniqueques* (§10 #52, DC). The noun is still masculine plural, so *los*, *gustan* and the distractor *gusta* are unchanged.
   - Old: `{{ex:Me encantan los pastelitos.|meh ehn-KAHN-tahn lohs pahs-teh-LEE-tohs|I love pastelitos.}}`
     New: `{{ex:Me encantan los yaniqueques.|meh ehn-KAHN-tahn lohs yah-nee-KEH-kehs|I love yaniqueques.}}`
   - Old: `["ty","We like pastelitos.","Nos gustan los pastelitos.|A nosotros nos gustan los pastelitos.","gustar · los pastelitos","gusta","Gustan agrees with los pastelitos (plural), not with we."]`
     New: `["ty","We like yaniqueques (fried dough snacks).","Nos gustan los yaniqueques.|A nosotros nos gustan los yaniqueques.","gustar · los yaniqueques","gusta","Gustan agrees with los yaniqueques (plural), not with we."]`
5. **should-fix** (wrong teaching for this course) `lessons-2.js` `questions`, section "The verb comes right after the question word". As written, it stated the general rule without the Dominican exception.
   Old: `…and the subject, if you say it, after the verb.</p>`
   New: `…and the subject, if you say it, after the verb. With a name or a noun that is always the order; only <b>tú</b> and <b>usted</b> can also go before the verb (next section).</p>`
6. **should-fix** (open point 2) `decks-t2.js` «¡Tato!». I aligned the card with lesson `do-greetings`, which glosses *Tato* as "all good" and teaches it as the answer to *¿Qué lo que?* (profile §10 #9: "all good").
   Old: `¡Tato! | TAH-toh | All good! / Cool! | From está todo (bien). Casual, to friends.`
   New: `¡Tato! | TAH-toh | All good! | From está todo bien. The usual answer to ¿Qué lo que? Casual, to friends.`
   The lesson's own deck ("Dominican greetings and slang") has no Tato card, which is fine: the lesson teaches *Tato* in its body, check and practice, and the card is one deck away. *Tranqui.* stays: it is §10 #92 (source B), so it is sourced.
7. **should-fix** (open point 3) `lessons-do1.js` `do-sounds`, section "Short forms and regional sounds". I restored the real written heard forms (in English prose only).
   Old: `<b>para</b> can shrink to "pah", <b>está</b> to "tah" and <b>todo</b> to "toh".`
   New: `<b>para</b> can shrink to "pa'" (¿Pa' dónde va'?), <b>está</b> to "'tá" ('tá bien) and <b>todo</b> to "to'". Dominicans write these short forms themselves in texts, but in this course you always write the full word.`
8. **should-fix** (open point 3) `do-sounds` closing tip: it now has a real heard → written pair.
   Old: `<div class="tip">Not hearing the s doesn't make a sentence singular. Keep the plural verb: <b>Los niños está aquí</b> → <b>Los niños están aquí</b>.</div>`
   New: `<div class="tip">Write the word, not the sound you hear: <b>Estoy cansao</b> → <b>Estoy cansado</b>. And not hearing the s doesn't make a sentence singular: <b>Los niños está aquí</b> → <b>Los niños están aquí</b>.</div>`
9. **should-fix** (open point 3) `do-sounds` practice, last ty item. The prompt used a pron-like respelling.
   Old prompt and why: `A friend asks 'pah DOHN-deh bah', clipping para and vas. …` / `'pah' is para and 'bah' is the tú form vas: always write the full forms.`
   New: `A friend asks '¿Pa' dónde va'?', clipping para and vas. …` / `pa' is para and va' is the tú form vas: always write the full forms.` The answers are unchanged (standard spelling only).
10. **should-fix** (overclaim) `do-sounds`, section "cansado without its d".
    Old: `<b>cansado</b> sounds like "kahn-SAH-oh". Educated speakers say it this way all the time.`
    New: `<b>cansado</b> sounds like "cansao" (kahn-SAH-oh). Educated speakers say it this way too in everyday talk.`
11. **should-fix** (English; open point 7) `lessons-1.js` `sounds`, "How Dominicans sound": the *-ado* rule was tacked onto the n sentence.
    Old: `…so <b>pan</b> sounds like "pahng", and <b>cansado</b> often sounds like "cansao".`
    New: `…so <b>pan</b> sounds like "pahng". And a stressed <b>-ado</b> often loses its d: <b>cansado</b> sounds like "cansao".`
    `sections` has 8 entries for 8 `<h3>` (the new last one is `null`). The section reads well, and the `{{tiles:}}` lines are untouched.
12. **should-fix** (practice; open point 5) `lessons-3.js` `se`, ty "Apartments for rent".
    Old: `"Apartments for rent (use se and rentar)","Se rentan apartamentos|Se rentan departamentos"`
    New: `"Apartments for rent (use se)","Se rentan apartamentos|Se alquilan apartamentos|Se rentan departamentos|Se alquilan departamentos"`
    The body table (*Se renta un cuarto*) is not re-taught. The Home deck has no rent card (Grep), so nothing changed there.
13. **should-fix** (hedge; open point 4) `decks-do.js` «el guachimán». The source for the etymology did not load.
    Old: `From English watchman. Elsewhere: el guardia.` New: `Said to come from English watchman. Elsewhere: el guardia.`
14. **should-fix** (Mexican slang in a dialogue) `extra-f.js` «Me caes muy bien.» B line.
    Old: `Tú también, Diego. Eres muy buena onda.` New: `Tú también, Diego. Eres muy chévere.` (*chévere* is §10 #23.)
15. **should-fix** (consistency of glosses) `decks-do.js` «Fuimos a bailar bachata.» meaning, and the matching `extra-do.js` example. Lesson `do-music` glosses it "We went bachata dancing".
    Old: `We went out dancing bachata.` New: `We went bachata dancing.`
    Old: `On Saturday we went out dancing bachata in the Colonial Zone.` New: `On Saturday we went bachata dancing in the Colonial Zone.`
16. **note** (open point 4) These items, flagged as unsourced by the writers, are in profile §10, so they stay with their notes: «¿Me das una bola?» (#109 dar bola, B), «Estoy en olla.» (#96, B DA), «el coro» (#80, B), «la chercha» (#82, F DA), «dar muela» (#85, L DA), «Tranqui.» (#92, B), «¡Diablo!» (#87, DA), «¡Mi madre!» (#41, L), «¡Te la comiste!» (#86, DA). Three are in §10 with Src "—" (no page opened) and need the owner's check: «un momentico» (#143; the note "Also un momentito" is the §4.7 hedge), «el colmadón» (#75), «¡Dale!» (#88).
17. **note** (open point 6) *Ahorita* = later, in a while, everywhere in the course: Top adverbs card and example, traps deck, `do-daily`, the `Se fue la luz` dialogue, and the en-es *ahorita la cierro* dialogue (already changed to *ahora mismo*). *Los tostones* (`decks-a`, `do-food`) and *jugo de chinola / la chinola* (`decks-a`, `decks-do`) have notes that agree (maracuyá elsewhere). There is no contradiction.
18. **note** `do-greetings` teaches *¡Qué vaina!* = "what a pain!", which profile §4.10 marks unsourced (owner q. 12). I kept it as the profile designs it.
19. **note** `greetings` keeps the en-es line "When in doubt, start with usted" next to the new paragraph on wide Dominican *tú*. The two do not contradict each other (*tú* among peers, *usted* when in doubt), but owner q. 8 applies.
20. **note** `do-questions` teaches «¿Cómo usted se llama?» with *se* between *usted* and the verb. That is the profile's own example (clitic plus verb counts as "the verb").
21. **note** `lessons-3.js` header comment still says en-es / `tools/target/es/respell.js`. This is cosmetic, and I left it as is.
22. **note** No natural-mode pron in any pron field (validate PASS; prons compared with en-es). Natural respellings appear only in quoted English prose (`do-sounds`, `sounds`).

Final checks: `node --check` passes on every JS file. `gen`: 31 of 31 lessons, 34 decks, 1007 cards. `validate` (no `--partial`): **PASS: all checks OK**, with standing-rule hits at 2/2 or above in every lesson. `scan.js`: **0 FORBID, 39 to check**, exit 0. `scan.js --all`: 7 FORBID lines, all in card notes that compare varieties.

## Edits per writer role

- EN-ESDO-A (`decks-do.js`, `extra-do.js`): 4
- EN-ESDO-B (inherited decks and extras: `decks-t2.js`, `decks-f.js`, `extra-f.js`): 10
- EN-ESDO-1 (`lessons-do1.js`): 4
- EN-ESDO-2 (`lessons-1.js`, `lessons-2.js`): 4
- EN-ESDO-3 (`lessons-3.js`): 1
- EN-ESDO-4 (`lessons-do2.js`): 0
