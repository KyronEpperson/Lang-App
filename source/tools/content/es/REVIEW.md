# es-en review (ES-REVIEWER, cold read)

Scope: tools/content/es/* (except profile.json and deviations.json) and the `"t"` fields of tools/i18n/es/ui.json. Generators, packs and app.html were not touched. All five commands pass on scratch outputs (see the end of this file).

## 1. What changed

### 1.1 Respelling (`pron`): 153 of 748 rows changed, in 6 files
The rules are now in **PRON-RULES.md**. A scratch script lists every English word → respelling pair. After the changes, the only words with more than one respelling are function words with a weak and a strong form (are er/AAR, do du/DUU, from frem/FRAM, have jav/ev, me mi/MII, that dhat/dhet, the dhe/dhi, you iu/IUU). No English phrase now has two different respellings. The eight worked examples in profile §6 still come out unchanged.
- **Flap t → r** (between vowels, next vowel unstressed): water WAA-ter/WAA-rer → **WO-rer**; LEI-ter → **LEI-rer**; MII-ting → **MII-ring**; PRI-ti → **PRI-ri**; SI-ti → **SI-ri**; iu-NAI-tid → **iu-NAI-rid**; I-tel → **I-rel**. **t is kept after r** (THER-ri → **THER-ti**, KWOR-rer → **KWOR-ter**), because a Spanish reader would trill "r-r".
- **/ŋk/ → nk** (BANGK, DRINGK → **BANK, DRINK**). **/ŋɡ/ keeps ng + g**, following profile §6 (ING-lish/ING-glish → **ING-glish**; JANG-gri, IANG-guer, FING-guers).
- **THOUGHT vowel → o**, as in profile §6 *talk → TOK*: DAAGS/DAAG → **DOGS/DOG**, KAA-fi → **KO-fi**, WO-rer. The LOT vowel stays aa.
- **Weak forms**: unstressed *are* is **er** everywhere, sentence-initial too (ar/aar → er). *your / you're* → **iur** (ior removed). *for* → fer, *from* → frem, *some* (determiner) → **sem**, *her/him* → jer/jim.
- **Capitals**: one-syllable content words are always in capitals (gud MOR-ning → GUD MOR-ning; phrasal verbs pik AP → PIK AP). So are wh-words that open a question (wat du iu DUU → WAT…) and negatives (naat → NAAT, dount → DOUNT). Every word of two or more syllables shows its stressed syllable (e-ni → E-ni). *have/has/had* stay lowercase, as in the profile's *DYAK jas e DYAAB*, except in *have to* and at the end of a sentence.
- **Names**: A-na → **AA-ne**, LII-ma → **LII-me**, gar-SII-e → **gaar-SII-e**, PIIT-sa → **PIIT-se**.
- **Respellings in prose** were fixed to match: the water note «WAA-rer» → «WO-rer»; the heat-it-up note «JII-ri-SAP» (wrong phrase) → «JIIT dhi-SAP»; the Wi-Fi note «uai-fai» → «WAI-fai», not «güifi». The pron lesson's key table gained the rows **aa / o** and **r entre vocales**. The numbers lesson no longer says the *t* of *thirty* is an r; it now says the *t* sounds soft, close to a d.
- The four tagged cards (`SHIP (i corta)`, `THINK (th, no s)`, `SINK (s, no th)`, `MILK (sin vocal final)`) **keep their tags**: validate.js `pronOk` requires `pron` ≠ target, case- and punctuation-insensitive.

### 1.2 Practice and checks: about 45 items across 22 lessons
- **Standing rule: items that counted without a real hinge were made genuine.**
  - `polite`: the order distractors were articles. They are now base-form competitors after the auxiliary: *gets*, *minds*, *speaks*. Type #13 «Dos cafés, por favor» accepted "Two coffees please", so it did not depend on inversion; it was replaced by «¿Puedo pagar con tarjeta?» → *Can I pay by card*.
  - `articles-2`: type #13 «Los gatos son adorables» did not hinge on anything. It became «A mi hermano le encanta la música» → *My brother loves music*.
  - `perfect-2`: order #6 *How long have you waited* was unnatural and pointed toward the not-yet-taught continuous. It became «¿Cuánto tiempo hace que vives aquí?» → *How long have you lived here* (x: has, live).
  - `narrative`: type #12 duplicated order #6. It became *They were watching TV*.
- **`why` lines no longer call a main-verb *is/are* an "auxiliar"** (6 items in it-there, plurals, object-have and false-friends). They now name «sujeto» or «concordancia». The *is/are* of continuous, going-to and the passive stays «auxiliar», which is correct there.
- **Wrong `why` text**: in `articles`, type #12 (*My brother is an engineer*) carried the back-pain explanation, and type #13's explanation talked about "my head". Both now explain their own item.
- **Missing accepted answers added**:
  - «Ella asiste a clase» now also accepts *She goes to class(es)* and *She attends her classes*.
  - «Él me dijo que estaba ocupado» now also accepts *He said (that) he was busy*.
  - «Hace mucho calor» now also accepts *really hot* and *so hot*.
- **Distractors that were correct sentences or not real errors**:
  - *Dogs like me.* → *Like me dogs.*
  - *What does she make?* → *What does she does?*
  - *She's embarazada.* → *She's constipated.*
  - *The party was an exito.* → *a succession.*
  - false-friends check and fill: the misspelling *librery* → the real false friends *bookcase* («librero») and *librarian*.
- **`will` no longer glosses *will* with «ir a»**:
  - «No voy a llegar tarde» → «No llegaré tarde» (check, mc and example row).
  - «¿Vas a venir?» → «¿Vendrás?»
  - «No me voy a olvidar» → «No me olvidaré».
  - In the examples: «Todo saldrá bien», «Creo que lloverá».
  - The body gained one sentence saying that Spanish uses «voy a…» for most of the future, while English splits that into *will* and *going to*.
- **Prompts with no subject but a gendered or ambiguous English answer** now carry the subject: «Ella está preparando la cena», «Ella me dijo su nombre», «¿Él te está tomando el pelo?».
- **`perfect-2`**: model answers are the taught present perfect; continuous variants stay as accepted extras only.

### 1.3 Spanish wording, regional usage and gender: about 25 edits
- **Regional choices**:
  - «conducir» → **«manejar»** (2).
  - «jugué fútbol» → **«jugué al fútbol»**, so the whole course uses one form; the RAE accepts both, but «jugar al fútbol» is understood everywhere and articles-2 already used it.
  - «calendario» (schedule) → «horario».
  - «¡Vamos allá!» → «¡Vamos con todo!».
  - Kept on purpose: «bolígrafo» (the pan-regional standard) and «talla».
- **Gender**:
  - Card notes that addressed the learner with gendered adjectives were rephrased: «Si estás agotado» → «Para decir «agotado/agotada»»; «Si estás ocupado» → «Si no puedes hablar en ese momento».
  - Masculine first-person prompts were balanced with feminine ones in joining and past («Estaba cansada», «Estoy cansada pero feliz»).
  - «Soy estudiante universitario» → «Soy estudiante de universidad».
  - In every gendered prompt, the accepted English answers do not depend on gender.
- **Wrong or doubtful claims about Spanish, fixed**:
  - «no dices "dos aguas"» was false, since «dos aguas» is common when ordering. It now reads «mucha agua», «poco dinero».
  - «information (informes)» → «(información, datos)».
  - «en español no decimos "en la próxima semana"» → «solemos decir "la semana que viene", sin preposición».
  - «el inglés no tiene ese pronombre» → «no usa ese pronombre en estos casos».
  - «en México ya se escribe como en inglés» → «en México y algunos otros países, en cambio, se escribe igual».
  - «constipated no es "resfriado"» → «no es "constipado" (resfriado), sino "estreñido"».
- **Wrong claim about English, fixed**: modals said «después de todas va el verbo sin to», which is false for *have to*. It now says «después de *must, should* y *might*».
- **Teaching additions**:
  - `can-like` notes that *like + to* is also correct, since a typed item accepts it.
  - `false-friends` gained *college* and *career/major*, from the profile §8 list.
  - articles-2: «have lunch (tomar el almuerzo)» → «have breakfast (tomar el desayuno)».
- **Punctuation**: «Qué buen clima hace hoy» → «¡Qué buen clima hace hoy!».

### 1.4 Interface (ui.json): 5 `t` values changed; nothing outside `t` changed (checked by diff)
- `Drills` «Ejercicios» (10 characters) → **«Entrenar»** (8), following the profile §10 cap of 8 for the seven-tab bar. The canvas heading `DRILLS` and the chip `{n}/{n} · Drills` keep «EJERCICIOS»/«Ejercicios», where length is not an issue and «Entrenar» would read oddly after a count.
- `Not quite` / `Not quite.` «Casi» → **«Incorrecto»** (glossary). «Casi» suggested a near miss even when the answer was completely wrong.
- `Sign in to sync` «Iniciar sesión» → **«Entrar y sincronizar»**; the old text dropped the purpose. 20 characters, under the overflow threshold.
- `Coming soon · {n} lessons planned` → «Próximamente · lecciones planeadas: {1}» (now correct at n = 1).

### 1.5 New deviation
**tools/content/es/deviations.review.json** has one entry, `lessons.polite`, which replaces the old reason ("English otherwise unchanged") because that reason is no longer true. Merge it over deviations.json. Parity passes without it too, because `polite` is already exempted at lesson level in deviations.json, so only the reason text changes.

## 2. Checked and found fine
- Every lesson body, check, practice prompt, `why` and hint in lessons.js, practice.js and more/a1, a2, b1, read in full.
- The verb-core audit: after the changes, at least half of the order items and at least half of the type items in every lesson hinge on agreement, auxiliary or inversion, or dummy it/there. Each was checked by hand, not just with the validator's `[vc]` count.
- *tú* and *ustedes* throughout. No *vosotros*, *ordenador*, *coger*, *coche* or *zumo*. ¿ ¡ are present. Glossary terms are used: sujeto, auxiliar, tercera persona, concordancia, prueba rápida, mazo, pista, forma -ing.
- *usted* appears only inside the translations of business-email and service sentences, which is correct register.
- Cards, notes and idioms: false-friend warnings (excited, report, embarrassed), British/US notes and the Latin American/Spain contrasts (perfect-tense regions, the decimal point) are accurate.
- ui.json: all count patterns either use the «Etiqueta: {n}» form, which avoids plural agreement, or have separate singular and plural keys. Weekday abbreviations, the gender-neutral welcome («Te damos la bienvenida») and *tú* are used throughout. No Hangul in any `t`.
- Language-name slots in patterns: the engine passes a **capitalised** name (`langName()` upper-cases Intl.DisplayNames output, so «Inglés»). The writer's bracket workaround («escríbelo (Inglés)») avoids a capital letter mid-sentence and is kept.

## 3. Still needs a native speaker's eye (most important first)
1. **The respelling system as a whole.** Read about 30 cards aloud against the en-US audio. In particular, check whether the flap r (WO-rer, MII-ring, I-rel) helps or confuses, and whether *o* for THOUGHT words (DOG, KO-fi, WO-rer) matches the voice: many US voices merge these into *aa*.
2. **«Incorrecto» vs a softer «No exactamente» for `Not quite`**: tone in the practice runner.
3. **Gender balancing.** Alternating masculine and feminine in first-person prompts («cansado» / «cansada») may look inconsistent. A product decision is needed on whether to use «cansado/a» instead.
4. **«jugar al fútbol» vs «jugar fútbol»**: Mexican and Colombian readers may find «al» slightly Peninsular.
5. **Level titles** «Guía» (Senior) and «As» (Master): gender-neutral but unusual; «Veterano» and «Maestro» would read more naturally but are gendered.
6. **New distractors**: *The party was a succession*, *The bookcase / librarian opens at nine*, *Like me dogs.* Check that they are plausible but clearly wrong.
7. **will lesson**: synthetic futures («¿Vendrás?», «No llegaré tarde») are natural in writing but less common in speech in Mexico. Check that they do not sound stiff.
8. **Bracketed language names** in UI patterns («Escribe aquí (Inglés)…», «{1}: ¿cuánto sabes?»). They are grammatical, but an engine change that passes a lowercase name would allow «en inglés».
9. **The 16 overflow warnings** from the i18n validator (e.g. «Expresión idiomática» on a chip, «Te damos la bienvenida a Lang App»). Check them at 390 px.
10. **«Entrenar» on the tab bar**: confirm the e2e 390 px run shows no overflow and that the word reads well next to «Práctica».

## 4. Results
- `node tools/content/gen.js es <scratch>`: written.
- `node tools/content/validate.js es <scratch>`: **PASS**.
- `node tools/content/parity.js es <scratch>`: **PASS** (deviations.json as is; `polite` is already exempted at lesson level).
- `python3 tools/i18n/gen.py es <scratch>`: written, exact 766, patterns 272.
- `node tools/i18n/validate.js es <scratch>`: **PASS**, with 2 warning groups: 16 overflow risks and 16 strings identical to English, all already present before the review.
- `node --check` passes on every touched JS file. ui.json is valid JSON and only `t` fields differ. There is no Hangul in the es folders outside DECKNAMES.md and the ui.json reference fields (`ko`), which are not `t`.

## Added 2026-11-16: extra decks and roadmap titles

Scope: additions only. No existing deck, card, card text or card order changed (checked by script: the 20 shared decks of the live pack are an exact prefix of the new pack). The one edit to existing content is the `deck:` link of lesson `false-friends` (more/a1.js), which now points to «Falsos amigos» instead of «Charla casual», as profile §9 asks. The profile's "shrink transparent-cognate decks" instruction was not applied.

### Decks (114 new cards)
| Deck | Cards | Content |
|---|---|---|
| Phrasal verbs (extended) | +18 (24 → 42) | come in, go on, put up with, put out, get up, go out, come back, get on, take off, put on, look up, give back, throw away, sit down, end up, run into, take care of, hurry up; notes name the Latinate verb they replace (enter, continue, tolerate, extinguish, return) |
| Palabras esenciales (new) | 24 | get (×4 senses), take, put, keep, enough (×3, incl. word order), though, even though, already, still, yet (×2), would, let, bring, almost, anyway, in short phrases |
| Falsos amigos (new) | 23 | actually/currently, embarrassed/pregnant, library/bookstore, attend/assist, realize, sensible, career, college, exit/success, carpet, constipated, pretend, eventually, bother (vs molest), parents, discuss, support, introduce; partial cognates (realize, discuss, support) carry «Ojo:» notes |
| Make y do (new) | 20 | 11 make + 9 do collocations (do the grocery shopping, not the British "do the shopping") |
| Incontables (new) | 15 | advice (×2, incl. a piece of), information, news, furniture, homework, luggage, hair, traffic, money, progress, fun, bread, weather, work, in sentences that show singular agreement, much, a piece of, no a/an |
| Cognados y acento (new) | 14 | -tion, -ty, -ous, -ly, -ent, ph/f, ch/qu, plus comfortable; every note gives the correspondence and an «Ojo:» on stress where English differs from Spanish |

Registered in meta.js (new group «Claves para hispanohablantes», tag `skills`, DESC for each deck), DECKNAMES.md, and deviations.json (`decks` "16", "20"–"24", "count"). Respellings follow PRON-RULES.md; the scratch word → respelling check found no new conflicts, and phrases that already exist as lesson examples ("Can I give you some advice?", "The news is good.") reuse their exact `pron`.

### Roadmap titles
tools/i18n/es/roadmap.json: all 425 `t` filled (stage names, planned-lesson titles, variant and basis lines for the 15 roadmaps). Only `t` changed (checked by script). Sentence case; target-language words kept as written (감사합니다, は, Passé composé, Iḍāfa…); CEFR → MCER; "X vs Y" → «X frente a Y»; "Impersonal se" → «El se impersonal»; glossary terms (presente perfecto, pasado continuo, estilo indirecto, voz pasiva, palabras interrogativas, orden de las palabras).

### For a native speaker to check
1. **New respellings** to read against the audio: i-NAF (enough), DHOU (though), OL-moust, E-ni-wei, ME-sidy, GROU-se-ri, iu-ni-VER-si-ri, aa-per-TUU-ni-ri, FOU-re-graf, KAMF-ter-bel, LON-dri, ke-RIR, PER-ents, BAA-dher.
2. **Regional wording**: «tender la cama / hacer la cama», «pedir una cita», «hacer las compras del supermercado», «¿Me trae pan, por favor?», «Terminamos en un lugar de tacos» (end up note).
3. **The bother/molest note** names sexual abuse explicitly. It is the standard warning, but check the tone.
4. **Glosses that could be argued**: «assist = ayudar (formal)» (it also means «asistir» to a person), «career = trayectoria profesional», «It takes 20 minutes = Se tarda 20 minutos».
5. **Roadmap terms**: «clasificadores» for Korean/Chinese/Japanese counters, «plurales sanos y fractos» (Arabic), «paréntesis verbal» (German Satzklammer), «Prepositivo» (Russian case), «Hindi universitario para principiantes, etapas 1-2».
6. **Lesson make-do still links to «Trabajo y correo»**: consider pointing it to «Make y do» (left unchanged on purpose).
7. **Sixth deck group** «Claves para hispanohablantes»: the engine renders any number of groups, but it appends «My phrases» to the last group, so that deck now shows under the new group instead of «Como un nativo». The `conv` plan (`@path`) now spans 25 decks instead of 20, which lengthens the schedule for anyone mid-plan; the new group earns its own certificate, and «Como un nativo» is unchanged.

### Results (scratch output, live pack untouched)
- `node tools/content/gen.js es <scratch>`: written (25 decks, 480 cards).
- `node tools/content/validate.js es <scratch>`: **PASS: all checks OK**.
- `node tools/content/parity.js es <scratch>`: **PASS: shared English side matches ko-en**.
- `python3 tools/i18n/road.py check es`: roadmap strings 425/425 translated, exit 0.
- `node --check` passes on decks.js, meta.js and more/a1.js.
