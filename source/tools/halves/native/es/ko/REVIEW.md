# es-ko native half: cold review (2026-11-22)

I read every jsonl row in Spanish next to its Korean and its English, joined by id. I read all 33 lesson bodies in Spanish with their example rows expanded. I checked the bodies against the English only where a claim, a cross-reference or a tab name was in question, not line by line. The readable dumps are in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/esko/R/`. Every fix is applied by script, by id, in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/esko/fix.py`. The script is idempotent: replaying it on the pre-review copy (`/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/esko/base/`) reproduces the current files byte for byte. Both are session-temporary scratch files. I touched only `native/es/ko/` and left `work/` and `target/` alone.

`node tools/halves/validate.js es ko` gives **0 errors**. The single warning is the pre-existing waived extra ㄹ in `hangul.html`. The 50 "words remaining" are all legitimate: identical strings such as «kimchi», «hotel», «taxi», «Social», «Pro», «Sensei», «formal», «no» and romanisation notes. `node tools/halves/assemble.js es ko /tmp/course-es-ko.review.js` succeeds and passes `node --check`.

## Changes per file and kind

There are 157 distinct field edits across 131 jsonl rows, 13 lesson bodies and 2 ui.json keys. Each edit is counted once, under its final kind.

| File | accuracy | glossary / consistency | Spanish quality | explanation (truth) | tabs / cross-refs | rows changed |
|---|---|---|---|---|---|---|
| cards.jsonl | 5 | 22 | 13 | 2 | – | 38 |
| dialog.jsonl | 12 | 13 | 1 | – | – | 26 |
| examples.jsonl | 1 | 4 | – | – | – | 5 |
| patterns.jsonl | – | 4 | 1 | 1 | – | 6 |
| sentences.jsonl | 2 | 7 | 2 | – | – | 11 |
| checks.jsonl | – | 7 | – | – | – | 6 |
| practice.jsonl | 2 | 18 | 2 | – | 1 | 21 |
| lessons.jsonl (titles/blurbs) | – | 2 | – | – | – | 1 |
| lessons/*.html | – | 7 | 2 | – | 6 | 13 files |
| decks.jsonl (desc only) | – | 2 | 3 | – | 3 | 8 |
| labels.jsonl | 5 | 4 | 1 | – | – | 10 |
| ui.json | – | – | 2 | – | – | 2 keys |
| groups.jsonl, course.json | – | – | – | – | – | 0 |

The 13 lesson bodies are counters, food, sound-changes, have-to, story, joining, verbs, particles, office, honorific, requests, sentences and plans. A lesson-body edit can replace several occurrences: «clasificador» appears eight times in counters.

**Deck labels:** none changed. All 43 progress keys are intact; I edited descriptions only.

## Glossary enforced

* **Particles:** *partícula*, *marcador de tema / de sujeto / de objeto* («marca de …» → «marcador de …»).
* **Verb terms:** *raíz*, *forma de diccionario*, *verbo descriptivo*, *verbo de acción*, *verbo con 하다*.
* **Counters:** *contador* everywhere. The counters lesson, food lesson, checks and practice had used «clasificador»; lesson 24 is now «24 · Contadores», to match the «Contadores» deck.
* **Numbers:** *sinocoreano* (one word) and *nativo*, never «sino-coreano» or a bare «sino».
* **Politeness levels:** «formal» (-습니다), «cortés» (-요), «informal» (반말). Tags in parentheses are (formal) / (cortés) / (informal) / (honorífico).
* **Fixed phrases:**

| Korean | Spanish gloss |
|---|---|
| 안녕히 가세요 | «Adiós (a quien se va)» / «Adiós, vaya en paz» |
| 안녕히 계세요 | «Adiós (a quien se queda)» / «Adiós, quédese en paz» |
| 잘 부탁드립니다 | «Cuento con ustedes» (the work-email card keeps «Será un gusto trabajar con usted») |
| 수고하세요 | «Ánimo con el trabajo» (to those who stay) |
| 수고하셨습니다 / 수고하셨어요 | «Gracias por su trabajo de hoy» (to superiors) |
| 수고했어(요) | «Buen trabajo» (peers or juniors) |
| 고생했어 | «Te esforzaste mucho» |
| ㄹ게(요) | «voy a… (como promesa)» |
| -자 | «¡vamos a…!», as in «¡comamos!» |
| 혹시 | «por casualidad» (rows and the requests lesson table) |
| 귀여워(요) | «Eres tierno/a» |
| 선생님 | «profesor/a» |
| 과장(님) | «gerente» |
| 사장님 | «jefe/dueño» |

* **Address (policy):** tú to the learner in every instruction.
  * In Korean glosses, use **usted** when the line addresses the listener with an honorific (-시-, -(으)세요, 주세요) or a humble or formal form (드리다, -습니다 to a superior or stranger). Use **tú** otherwise.
  * I applied this in both directions:
    * usted removed from plain -요 lines: c0217, g049, g054, s0247 → impersonal «¿Tienen…?» / «¿se puede…?».
    * tú → usted on honorific lines: g009, g018, g059, g066, g087, g096, g135, c0505, e050, pause compliment.16, compliment.21, expression.24, expression.25, s0242, noun-modifiers.14.
  * 안녕히 가세요 / 계세요 are now «vaya / quédese en paz» everywhere they are glossed literally: c0569, c0570, s0017, s0018, g031, meet.k2, meet.03, meet.11. This matches lesson 31.
  * Exception: impersonal or fixed glosses («Para llevar, por favor», «Ánimo con el trabajo») carry no person.
* **Neutral vocabulary:**
  * piscina (not alberca)
  * maní (not cacahuate)
  * mascarilla (not cubrebocas)
  * papel higiénico
  * conversación (not plática)
  * reunión (not junta)
  * informe (not reporte)
  * pequeño (not chico, for size)
  * platos (not platillos)
  * tienda por departamentos
  * «cuanto más, mejor»
  * snacks / papas fritas (not botanas / papitas)
  * Kept as widely understood: celular, boleto, manejar, renta, departamento, mesero, jugo.
* **App tabs:** Hoy, Práctica, Repaso, Lecciones, Entrenar, Progreso. Only `sound-changes` names tabs, and it now uses Lecciones / Práctica / Repaso correctly. No body sends the learner to a trainer or drill. The `hangul` line «Toca una letra para volver a ver sus trazos» stays because the stroke diagrams exist.
* **Romanisation reading guide:** the same rules (j / g / h / r / eo / eu / ae–e / ch / ng / ll / tense doubles) appear in the `hangul` and `sound-changes` bodies. The three Hangul deck descriptions repeat their part in the same wording: vowels give eo, eu and ae/e; consonants give j as «y» enfática «¡yo!», g as in «gato», ch, h never silent, r as in «pero»; the advanced deck gives tense doubles. Card ㅈ (ko.c0021) now uses the same «y enfática» wording.

## 10 most important fixes

1. **수고하셨습니다** (c0550, g108, s0287, pause expression.21): the card and dialogue said «Buen trabajo hoy (formal)». In Spanish that sounds like grading your boss. All four now say «Gracias por su trabajo de hoy», and the 수고 family is consistent across cards, dialogues, the office lesson and practice.
2. **Counters terminology:** 27 places used «clasificador» (lesson 24 title, food and counters bodies, checks, practice) while the deck said «Contadores». All are now «contador».
3. **영어 할 수 있어요?** (c0091 vs g014): the card used usted, the dialogue tú, and the Korean is not honorific. Both are now «¿Puedes hablar inglés?».
4. **Wrong meaning or tense in examples and dialogues:**
   * e011 바빠요 had become «son pesados»; it is now «estoy ocupado».
   * g115 said «Les aparté lugares», but the speaker addresses one friend; it is now «Ya aparté lugares».
   * g077 진짜 웃겨 had become «Está buenísimo»; it is now «¡Qué risa!».
   * g003 천천히 오세요 had become «tranquilo»; it is now «sin prisa».
   * g029 등산 is now «excursión a la montaña».
5. **Level title 선배** (ko.t05): «Guía» → «Veterano». A 선배 is a senior or veteran, not a guide.
6. **Sinocoreano:** 13 card and deck rows used «sino-coreano» or a bare «sino», which is ambiguous next to the Spanish conjunction. All now use «sinocoreano».
7. **Same Korean, same gloss:**
   * 선생님: maestro/maestra became profesor/a in 8 rows across cards, dialogues, examples, sentences and practice.
   * 과장님: «Jefe» became «Gerente», to match the office lesson and checks.
   * 귀여워(요): «adorable» → «tierno/a».
   * 번호 좀 알려 줄래?, 아이스 아메리카노, 좋은 꿈 꿔, 잘 자 내일 봐, 다시 말해 주세요, 혹시, 미국에서 왔어요: each now has one gloss across rows.
8. **Patterns:**
   * p028 있어요 now gives «estar (en un lugar)», as the isseoyo lesson and card c0382 explain.
   * p020 -자 now shows «¡comamos!».
   * p001–p003 now say «marcador».
9. **Regionalisms replaced:** alberca, cacahuate ×2, cubrebocas ×2, botanas/papitas, papel de baño, plática ×3, juntas, reporte, tienda departamental, «el chico» for small, platillos, «entre más».
10. **Cross-references by real Spanish lesson numbers and titles:**
    * have-to → «lección 32, «Pedir cosas con cortesía»»
    * office.14 → «lección 32»
    * story → «lección 10, «Pasado»»
    * joining → «26, «Contar una historia en pasado»»
    * verbs → «10 y 11»
    * particles → «lección 15»
    * The sound-changes tab sentence was also fixed: Práctica is for exercises, Repaso is for cards.

Smaller fixes:
* c0444 / c0571: the ㄹ게 gloss now matches c0492.
* c0609: 형/오빠 is used for *male* older friends.
* c0304: 빵 came from Portuguese «pão» *via Japanese*.
* meet.08 now carries «yo», because the order answer contains 저는.
* ui.json now reads «Leer 한→es» / «Recordar es→한» instead of the invented «co».
* Other edits:
  * requests.html: 혹시 is now «por casualidad», matching the rows.
  * sentences.html: «¿Te atoraste?» → «¿Te trabaste?».
  * c0219: «la surten» → «te la preparan».
  * g055 still says «trabajar juntos» + «Cuento con ustedes».
  * The sound-changes tab line no longer promises audio («vuelve a estos ejemplos en Lecciones»).
* c0019: ㅅ before ㅣ is now described as close to «sh» («Shakira»).

## Claims I could not fully verify (left as written, worth a check)

* ㅈ is described as the emphatic Spanish «y» of «¡yo!» / «cónyuge», «casi una ch suave». This is a good approximation for most dialects, but Rioplatense and Caribbean speakers realise «y» differently.
* ㅓ is described as «cerca de la o de «por» dicha con la boca floja».
* ㄲ/ㄸ/ㅃ are compared to the Spanish k/t/p (c0045 and the `hangul` body). Unaspirated Spanish stops are close to Korean tense stops, but not identical.
* 빵 ← Portuguese «pão» via Japanese «pan». This is the standard etymology, but I did not check it against a source.
* 콘센트 from «concentric plug» (c0117). This is a common but disputed etymology, carried over from the English.
* Office title equivalences: 대리 subgerente, 과장 gerente, 차장 gerente sénior, 부장 jefe de departamento, 사장/대표 director general. Real ranks vary by company.
* T-money works in «la mayoría de los taxis» (getting-around), and the 1+1 sticker is translated as «2x1» (c0142).
* Checked against the English and settled:
  * The cant.html sentence on 잘 못해요 spacing and the office.html «Si dudas, 선생님 o 팀장님…» both match the English and standard usage.
  * In the plans.html «Dilo de 3 maneras» table, the English column header «Formal» covers -시-+요 forms (같이 가시겠어요?). Its header is now «Muy cortés», so that «formal» stays reserved for -습니다.

## 15 rows a native Spanish-speaking Korean teacher should check first

1. `lessons/hangul.html`: the reading-guide and consonant paragraphs (ㅈ «y enfática», ㅎ «jota muy suave», ㄱㄷㅂ «entre k y g», ㅓ «o de por»)
2. `ko.c0021` ㅈ (meaning and note) and `ko.d.hangul-consonants` desc: does the same wording hold up?
3. `ko.c0019` ㅅ before ㅣ ≈ «sh» («Shakira»)
4. `ko.c0045` «tensa … más parecida a nuestra k»
5. `lessons/isseoyo.html` first paragraph: 이에요 = ser; 있어요 = hay / estar en / tener; the warning that «estar» for states is not 있어요
6. `lessons/sov.html` first paragraph: 을/를 compared with the personal «a»
7. `lessons/particles.html` first paragraph: 에 / 에서 vs «a / en / de / desde»
8. `ko.c0550`, `ko.g108`, `ko.s0287`, `ko.e073`: the 수고 family glosses
9. `ko.c0084`, `ko.g055`, `ko.c0559`: 잘 부탁드립니다 («Cuento con ustedes» vs «Será un gusto trabajar con usted»)
10. `ko.c0569`, `ko.c0570`, `ko.s0017`, `ko.s0018`, `ko.g031`, `ko.g135`: the usted policy on -세요 forms («vaya / quédese en paz», «¿Me firma esto?» to an idol). Does usted read naturally there?
11. `lessons/office.html` titles table and the `ko.g107` «Gerente, …» vocative: is «Gerente» natural as a form of address?
12. `ko.c0389` 좋아해요 note: «al revés que «gustar», aquí quien siente el gusto es el sujeto»
13. `ko.t05` 선배 = «Veterano», and the other level titles (Brote, Estudiante, Pro, As, Sensei)
14. `ko.c0304` 빵 ← «pão»; `ko.c0117` 콘센트 etymology
15. `lessons/plans.html` tables: -(으)ㄹ까요 «¿Tomamos…?», -자 «¡Comamos!», and the renamed «Muy cortés» column
