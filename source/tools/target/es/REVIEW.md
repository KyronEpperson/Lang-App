# Cold review of en-es (EN-ES-REVIEWER, 2026-11-18)

Read in full: TARGET-REVIEW.md, the role file, TARGET-BRIEF.md, PRACTICE-SPEC.md, PHASE2-BRIEF.md (last section), profile en-es.md, profile.json, lib.js header.
Baseline: validate.js es PASS. A scratch script compared every card `pron` and every lesson `{{ex:}}` pron with `respell.js` output: all equal; no card target duplicated across decks.

## Batch 1: decks-a.js (read in full, 9 decks, 160 cards)
Wording / teaching:
- «mañana»: note said «mañana en la mañana» = tomorrow morning with no label; now "(Mexico) or mañana por la mañana".
- «las papas fritas»: glossed "French fries; potato chips"; now "French fries", note says bagged chips are often «papitas».
- «la cama»: note gave only «tender la cama» (Mexican); now «hacer la cama» first, «tender la cama» as Mexican.
- «dieciséis»: "diez y seis became dieciséis" softened to "an older spelling was diez y seis".
- «¿A qué hora abren?»: "abren is the ustedes form" → "the ellos / ustedes form" (you ask about the store, i.e. they).
Checked and kept: «Mi nombre es Ana» (correct, slightly more formal), «Estoy casado» with «soy casado» also heard (true), «Soy de Estados Unidos» (fine), «mis papás», «Él es mi esposo / mi mujer», «Hoy es martes» with no article.

## Batch 2: decks-b.js (read in full, 9 decks, 154 cards → 156)
Wrong teaching / wording:
- «Estoy constipado»: glossed "I'm all stuffed up" with "in many countries it means a stuffy nose" (overgeneralised for Latin America). Now "I have a cold; I'm stuffed up", note: false friend; in Spain and some other countries it means a cold or blocked nose; constipated = estreñido.
- «Tengo gripa»: "Mexico: gripa" → "Mexico and Colombia: gripa, also used for a bad cold"; elsewhere gripe.
- «Un boleto de ida y vuelta»: note now gives Mexican «sencillo» (one way) and «redondo» (round trip) together.
- «esa vaina»: "Regional (Dominican)" → "Regional (Caribbean)" (used across the Caribbean coast, Venezuela, Colombia).
- «las habichuelas»: "final s dropped: la habichuela" read as a singular; now "In fast speech the s sounds are often dropped" (no invented spelling).
- «el aposento»: "a bit old-fashioned" (doubtful for the DR) → "Elsewhere aposento sounds formal or old-fashioned".
Added (lead request, gender hidden by the ending): «el mapa» in "Around town and directions" (18 cards), «el problema» in "Traps for English speakers" (19 cards). prons from respell.js.
Caribbean deck, kept after checking (all labelled Regional): ¿Cómo tú estás? / 'tá, guagua, chin, colmado / colmao, ¿Qué tú quieres?, zafacón (DR and Puerto Rico), yipeta, motoconcho, chinola, lechosa (DR, Venezuela), pana, nítido / 'tá nítido, mangú. These are well attested; a Dominican speaker should still confirm nítido and aposento.

## Batch 3: extra-a.js, extra-b.js (read in full: 56 dialogues, 36 examples, 18 patterns)
Wrong language / wording:
- «¿Sabes la hora?» (calque-like) → «¿Me dices la hora?» "Can you tell me the time?".
- «don Javier» glossed "Mr. Javier" → "Don Javier" (don goes with a first name; "Mr." + first name is wrong in English).
- «¿Comemos juntos a las diez y media?» (lunch at 10:30, odd next to a 10:00 meeting) → «¿Tomamos un café a las diez y media?».
Kept: «ahorita la cierro» (Mexican, fine in a friends' exchange), Dominican lines in the colmado / guagua / nítido dialogues (regional names, regional deck keys).

## Batch 4: lessons-1.js (read in full: sounds … hay, bodies, checks, 126 practice items)
A script found no non-strict fi or mc item where a wrong option differs from an accepted answer only by accent marks (all files). ty items have no wrong list, so they were checked by hand against profile §10 (see Batch 7).
Wrong teaching / practice:
- ser-estar fi «Lucía __ triste.» "Lucía is sad.": the distractor «es» is also correct («Lucía es triste» = she is a sad person). Now «Lucía __ triste hoy.» "Lucía is sad today."; «es» stays as a real distractor.
- greetings mc «Disculpe / Disculpa» why: now says disculpa is the informal tú form, not that it is wrong in general.
- estar body: «¿Usted está bien?» → «¿Está usted bien?» (the standard order for a model line; SV order is heard but not the one to teach).
Checked and kept: sounds claims (soft d between vowels close to the th in this; o "like go, with no w at the end": both fine), «Mi nombre es Ana» accepted in greetings ty (correct), «Javier es aburrido» (correct: Javier is boring), "permanent vs temporary" explicitly rejected, no forward references found in the first sets (me gusta in articles is introduced as a set phrase).

## Batch 5: lessons-2.js (read in full: present … prepositions, 126 practice items)
Wrong teaching / practice:
- questions tip called «¿Dónde usted vive?» simply wrong; now "In most of Latin America it is question word, then verb, then subject", with a pointer to Caribbean pronoun-first order.
- questions mc "Where do you live? (to a stranger)": distractor «¿Dónde usted vive?» is normal Caribbean speech; replaced by «¿Dónde viven usted?» (wrong everywhere); why says "in most of Latin America".
- questions check "Where does Ana live?": distractor «¿Dónde Ana vive?» replaced by «¿Dónde viven Ana?» for the same reason.
- reflexive mc "I wash the car": distractor «Me lavo el carro» (heard colloquially, not clearly wrong) and «Me lava el carro» (grammatical: "he washes my car") replaced by «Lava el carro.» and «Me lavar el carro.».
Checked and kept: vosotros footnote only in present; por / para kept to the profile's closed set (gracias por, por favor, por la mañana, por aquí; para purpose and recipient); "boot verbs" named once; usted = él form drilled; standing-rule counts unchanged (validator).

## Batch 6: lessons-3.js (read in full: muy-mucho … caribbean, 112 practice items) + cross-file practice sweep
Wrong teaching:
- se: «Se vende carros / Se vende casas» were called plainly wrong (common on signs). mc why, check why and tip now say "standard (written) Spanish makes the verb plural: se venden"; the singular is named as common on signs.
Practice (order items are exact-match, so a second natural word order was marked wrong):
- ir-a or «Mis padres van a llegar el sábado» (also «El sábado mis padres van a llegar») → «Mis padres van a comprar los boletos».
- lo-la or «La llamo todos los días» (also «Todos los días la llamo») → «Sí la llamo» "Ana? Yes, I call her".
- preterite or «Trabajaste el sábado» (also «El sábado trabajaste») → «Trabajaste mucho».
- (lessons-2) reflexive or «Me levanto a las siete» (also «A las siete me levanto») → «Me levanto temprano»; present or «¿Usted habla español?» (also «¿Habla usted español?», same tiles) → «¿Habla español?».
Practice (accepted answers):
- possessives ty "My parents are from Puebla" now also accepts «Mis papás son de Puebla.» (deck card mis papás).
- connectors ty "Why do you live in Miami?" now also accepts «¿Por qué tú vives en Miami?» (por qué allows the pronoun first; the questions lesson already accepted the same order).
Checked and kept: caribbean claims (s aspiration, -ado → -ao, r → l in Santo Domingo and r → i in the Cibao, tú before the verb; regional order accepted only in "(Dominican style)" items, standard always accepted), preterite (hablaste, fui / hice / tuve without accents, habló / hablo items strict, he comido recognition only), «últimamente» pron left as the tool gives it (lead's note).
Cross-file: Spain notes only in greetings, present, preterite; no "tilde"; ser / estar never taught as permanent vs temporary; no forward references found in the first items of each set (cuesta / cuestan and me gusta appear before their lessons as set phrases, as the profile intends).

## Batch 7: second pass across files
- hay or «Hay una mesa en la cocina» (the lesson itself models «En la sala hay un sofá», so the other order is natural) → «Hay una mesa».
- estar ty "Where are the bathrooms?" marked !strict (están / estan, profile §10); caribbean ty «¿Cómo tú estás?» and «¿Qué tú quieres?» marked !strict (tú / tu is the point).
- greetings body "Spanish has two [you]" vs present "three": now "two for one person".
- connectors body said por qué and porque "sound alike, so only the spelling tells them apart" (contradicts questions and the prons pohr keh / POHR-keh): now gives the stress, qué vs por.
- present or «¿Habla español?»: distractor «hablas» next to «¿Habla» gave the answer away; now «¿Hablas».
- se mc why cut to one sentence.

## Final check
`node tools/target/gen.js es $S/c.js && node tools/target/validate.js es $S/c.js` → PASS (26 lessons, 18 decks, 316 cards, 364 practice items). `node --check` passes on every JS file. pron re-checked against respell.js for all cards and example rows: all equal.

## Strings a native speaker should check first
1. «Estoy constipado» = "I have a cold; I'm stuffed up" (how general in Latin America?)
2. «Está nítido» / 'tá nítido (Dominican "great")
3. «el aposento» as everyday Dominican "bedroom"
4. «¿Qué tú quieres?» / «¿Qué tú quiere?» as Dominican
5. «el zafacón», with "also heard in Puerto Rico"
6. «la lechosa», with "also heard in Venezuela"
7. «mi pana» labelled Regional (Caribbean)
8. «la yipeta» and «el motoconcho» (Dominican)
9. «Se vende carros» described as common on signs but not standard
10. Cibao «poique» and Santo Domingo «polque» in the caribbean body

## Compliments deck (added later)
Files: decks-c.js (deck "Compliments", 14 cards), extra-c.js (8 dialogues, 5 examples, 2 patterns). Every pron is the unchanged output of respell.js; the tool printed no warnings and no output looked wrong. Cards use tú; every note gives the usted form where the verb changes, and the -a form where the adjective changes for a woman.
Native speaker, check first:
1. «¡Qué bien lo haces!» glossed "You're really good at this!" (chosen over «Eres muy bueno para esto»).
2. «Eres muy chistoso / chistosa» as the everyday Mexican "You're really funny" (note says gracioso is understood everywhere).
3. «Eres muy trabajador / trabajadora» described as a warm, common compliment in Mexico.
4. «Gracias, pero todavía me falta mucho» as the usual modest reply to praise of your Spanish.
5. «Gracias, qué amable» described as the normal reply to a compliment in Latin America (accept and thank).
6. «Me da mucho gusto» in the «Todo estuvo delicioso» dialogue, and «la chamarra» (Mexican "jacket") in the «Te queda muy bien» dialogue.
