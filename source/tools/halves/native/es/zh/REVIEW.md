# es-zh native half: cold review (2026-11-28)

The reviewer is not a native speaker of Spanish. No native speaker was consulted, and no web source was used: every judgement below rests on the profile (`docs/profiles/es-zh.md`), the es-ko review and the reviewer's own knowledge.

## What I checked and how

- I read every jsonl row of the half in Spanish next to its Chinese (`target/zh/`) and its English (`native/en/zh/`), joined by id: 886 cards, 233 sentences, 287 examples, 127 dialogues, 28 patterns, 62 lesson cards, 84 checks, 392 practice items (with `a`, `o`, `x`, `strict` of each), 31 decks, 15 labels, 6 groups, 28 titles and blurbs, and `ui.json`.
- I read all 28 lesson bodies in full.
- Dumps and scripts (session scratch, temporary): `/tmp/claude-0/-home-user/fe96eb25-68b1-5e51-a6a1-83e027d74c16/scratchpad/review-eszh/`. `dump.py` and `dump2.py` write the readable dumps to `R/`; `base/` is the pre-review copy of the half; `fix.py` applies every edit by id (file, id, field, old → new, each `old` asserted to occur exactly once) from `base/` and reproduces the current files. The brief's scratch path belongs to another session, so I used this session's scratchpad.
- Scripted checks: the same Chinese glossed two ways (cards, sentences, examples, both dialogue lines); duplicate meanings per deck (none); duplicate options per question (none); Peninsular words, *vos* / *vosotros*, *contador*, *ideograma*, «América», English leftovers, « on…=» in bodies (none left).
- I touched only the merged files of `native/es/zh/`. `work/`, `course.json`, `target/` and `mk_native.js` were not touched. `ui.json` needed no change.

## Changes per file and kind

52 field edits in 46 jsonl rows and 4 lesson bodies.

| File | accuracy | consistency | variety / register | Spanish quality | English left | prompt | rows |
|---|---|---|---|---|---|---|---|
| cards.jsonl | 2 | 8 | 6 | 3 | 1 | – | 19 |
| sentences.jsonl | 1 | 2 | – | 1 | – | – | 4 |
| examples.jsonl | 1 | 4 | 4 | 1 | – | – | 10 |
| dialog.jsonl | – | 2 | 6 | 1 | – | – | 9 |
| practice.jsonl | – | – | 1 | 1 | – | 1 | 3 |
| decks.jsonl (desc) | – | – | 1 | – | – | – | 1 |
| lessons/*.html | – | 4 | 1 | – | – | – | 4 files |
| patterns, lessoncards, checks, labels, groups, lessons.jsonl, ui.json | – | – | – | – | – | – | 0 |

## Conflicts from the writers' reports: settled

1. **我饿了 = «Ya tengo hambre.»** everywhere: c0312 (it said «Tengo hambre.»), the c0538 note, s0176, e050, le.11 (its answer needs 了) and the `le` body. Profile §5.2 sets it, and lesson 22 teaches final 了 = «ya». 我渴了 / 我困了 keep «Tengo sed / sueño»: no item depends on them and «ya» is allowed, not required.
2. **请: no real conflict.** Each row follows its own English: c0450 "to invite; to treat" → «invitar (pagar la cuenta)»; s0233 "please" → «por favor»; lc0057 "please; to invite" → «por favor; invitar». All three kept.
3. **间: no real conflict.** c0781 is the measure word ("rooms"), glossed by category like its deck neighbors («máquinas», «películas») → «habitaciones»; lc0048 is the character "room; between", whose note explains "between" → «habitación; entre». Both kept.
4. **Tip label:** «Error más frecuente:» in all 28 bodies (pinyin, tones, tone-change changed).
5. **Glosses w4 copied from w1 against its own judgement:**
   - 两点十分 → «las dos y diez» (c0190, s0143), as the `time` body already says;
   - 你有没有时间 → «¿Tienes tiempo o no?» (c0298, s0201), as every other verb-not-verb gloss and the `a-not-a` body;
   - 我今年二十五岁 kept «Este año cumplo 25 años» (natural for 今年; family.11 and g090 «Este año cumple tres» agree);
   - 这个很好吃 kept «Esto está muy rico» (c0271, g066, s0130 agree).
6. **我要一杯咖啡 (w2 «Quiero un café» vs w4 «Quiero una taza de café»):** «Quiero una taza de café.» in s0164, e061, g011, so the 杯 stays visible in a course about measure words (food.12 already asks for it).
7. **w2's six repeats that w4 set first:** 你吃饭了吗, 我们都是学生, 他还在睡觉, 我们走吧, 请进 all agree; 我要一杯咖啡 is fixed above; the c0593 note now says «todavía está durmiendo» too.
8. **饺子 «empanadillas» → «empanaditas chinas (jiaozi)» on the card and «empanaditas» in lines** (12 places: c0144, c0772, c0779, e175, e266, e273, g002, g032, g080, food.05, the food deck description and the `food` body). Profile §3.1: where no neutral word exists, use the Latin American form; *empanadilla* is the Peninsular word, *empanadita* is understood everywhere. 火锅 lost its English: «olla caliente china (huoguo)» on the card; lines keep «olla caliente».

## Glossary and decisions enforced

- Terms of profile §3.3 (all present already): *clasificador*, *marca de tono*, *palabra de ubicación*, *primer / segundo / tercer / cuarto tono*, *tono neutro*, *cambio de tono (sandhi tonal)*, *pregunta verbo-no-verbo*, *verbo separable*, *dos verbos seguidos (verbos en serie)*. No *contador*, *ideograma*, *tilde* for a tone mark, or *América* for 美国.
- One gloss per Chinese: after the fixes, the script finds the same Chinese glossed two ways only where a dialogue answer is naturally shorter (去 → «¡Voy!», 好 → «¡Bien!»).
- Register: tú everywhere; usted only with 您 / 贵. Shop staff with no pronoun now use no person where natural (g042 «Sí, el probador está allá»).
- Neutral Latin American words: «sigue derecho» (not «recto»), «¡Apúrate!» (not «¡Date prisa!»), «a menudo» (not «seguido»), «crepes» (not «crepas»), «baño» (not «retrete»), «bolso; bolsa» for 包 (as w2's lines).
- 很 is weak: «Ella es guapa» (c0275, not «muy guapa»), «Tus tonos están muy bien» (e055 = c0818).
- Kept: «¡Qué caro!» for 太贵了 as the prompt of adj.04 / 08 / 11 (fixed gloss; the tiles and options exclude other answers).

## The ten most important fixes

1. 我饿了 now has one gloss, «Ya tengo hambre.», on the trap card, the sentence, the example and the 了 practice item.
2. 你有没有时间 is «¿Tienes tiempo o no?» on the card and the sentence, matching the verb-not-verb lesson.
3. 我要一杯咖啡 is «Quiero una taza de café.» in all three places.
4. s0052 我朋友叫安娜: «Mi amigo se llama Ana» → «Mi amiga se llama Ana».
5. e044 常常帮助别人: «siempre ayuda» (wrong adverb) → «a menudo ayuda».
6. food.08: the prompt «¡La cuenta, por favor!» left out the 服务员 tile; it is now the fixed «¡Mesero, la cuenta!».
7. 饺子 «empanadillas» (Peninsular) → «empanaditas» across 12 places; 火锅 no longer shows the English «hot pot».
8. 两点十分 «2:10» → «las dos y diez» on the card and the sentence.
9. c0636 它 «ello» → «él, ella (animal o cosa)»; c0192 晚上七点 «de la tarde» → «de la noche», like 晚上 = noche elsewhere.
10. The tip label is the same in all 28 lessons; g037 太贵了 is «¡Qué caro!» like every other row.

## Validator warnings and "words remaining"

`node tools/halves/validate.js es zh --all` ends with `errors: 0`, `warnings: 3`. All three are legitimate:
- `greetings.html` adds 晚上好 晚安: profile §7.5 asks the lesson to say that Spanish has one «buenas noches» for the evening greeting and for parting; both forms are right and match card c0060.
- `pronouns.html` adds 他们的: it shows that Chinese has no «su» and names the owner instead; the form is right and lesson 12 teaches it.
- `shi.html` adds 在 很: the ser / estar paragraph that profile §5.1 and §7.7 require (adjectives → 很, lesson 8; location → 在, lesson 19). Both are right.

"words remaining: 9" are strings identical to the English, none missing: cards c0215 «taxi», c0323 «China», c0345 «hospital», c0386 «animal», c0423 «WeChat», c0426 «color», c0430 «hotel»; checks pronouns.k1 option «我s» (a deliberate wrong option, pronoun + plural -s, valid for Spanish too); lesson card lc0022 «China».

## Claims I could not fully verify

- Every sound anchor of profile §4.1 used in the pinyin bodies and cards (j ≈ «¡yo!», x ≈ «¡shh!», z ≈ «pitsa», r ≈ Rioplatense «calle», e = «o» with spread lips) and the tone anchors of §4.2.
- That á / à / ü typed on a Spanish keyboard are accepted (tones.12, tones.13 hints, the `pinyin` body).
- The echo-question bridge in `question-words` («¿Vives dónde?»).
- 慢慢吃 = «¡Buen provecho!» (e187, c0626), 老板 as «Jefe» (e026), 师傅 = «maestro».
- «olla caliente», «bollos al vapor» and «empanaditas» as the names a Latin American reader knows best.

## Final deck labels and group names (unchanged)

Decks (31): Sonidos del pinyin · Pares de tonos · Primeros caracteres · Saludos y cortesía · Personas y familia · Sobre mí · Números y dinero · Clasificadores · Comida y bebida · De compras · Horas, días y fechas · Por la ciudad · Viajes y transporte · Trabajo y estudios · Salud y ayuda · Describir cosas · Preguntas y conectores · Trampas frecuentes · Sustantivos clave · Verbos clave · Adjetivos clave · Adverbios clave · Pronombres clave · Preposiciones clave · Conjunciones clave · Interjecciones clave · Palabras básicas · Clasificadores clave · Partículas clave · Cumplidos · Coqueteo.

Groups (6): Sonidos y escritura · Primeros pasos · Palabras de cada día · Fuera de casa · Conversación · Palabras clave.

## Edits per writer

**w1 (20 edits; cards c0001–c0821, decks):**
- regional words: crepas, retrete, Date prisa, empanadillas, «hot pot»;
- glosses out of line with the lessons or other rows: 我饿了 without «ya», «2:10», «¿Tienes tiempo?» for verb-not-verb, 包 «bolsa; mochila», notes for 他还在睡觉 and 真的吗 that differed from the sentence glosses;
- «muy» added for a plain 很 (c0275); 它 as «ello»; 晚上 as «tarde»; one terse note (c0277).

**w2 (23 edits; cards c0822–c0886, dialogues, examples, lessons 1–3):**
- the tip label «Error más común:» in the three bodies;
- regional words: «recto», «seguido», «salón de clase», empanadillas;
- repeated Chinese glossed differently from its other rows: 我要一杯咖啡, 太贵了, 你的声调很好, 跟你在一起很开心, 我饿了;
- meaning: 常常 as «siempre»;
- calques: «se tarda una hora al aeropuerto», «Ese restaurante tiene demasiada gente»;
- tú from shop staff where a form with no person is natural (g042).

**w3 (1 edit; lessons 4–15):** generic masculine kept where a name marks the gender (s0052 «Mi amigo se llama Ana»). Rows, prompts and bodies were otherwise clean.

**w4 (8 edits; lessons 16–28):**
- a prompt that did not lead to every tile of the answer (food.08);
- glosses copied from w1 now changed to w4's own choice: «las dos y diez», «¿Tienes tiempo o no?»;
- a stiff sentence (s0206) and a prompt (ye-dou.13);
- the food body: empanadillas, and a table row that glossed 我要 without «quiero».

## Top ten for a native Spanish-speaking Chinese teacher

1. `lessons/pinyin.html`, the sound table, and cards c0007–c0018: j «¡yo!», x «¡shh!», z «pitsa», r «calle», e «o» with spread lips.
2. `lessons/tones.html`, the tone table: «¿eh?», «mmm…», «¡no!» / «¡ya!», and «MA-ma» for the neutral tone.
3. 我饿了 «Ya tengo hambre.» (c0312, s0176, e050, le.11): natural, or forced «ya»?
4. 饺子 «empanaditas chinas», 包子 «bollos al vapor», 火锅 «olla caliente» (c0144, c0145, c0147, e023, g073): the best names for a Latin American reader?
5. `lessons/shi.html` and `lessons/adj.html`, the ser / estar paragraphs.
6. `lessons/question-words.html`: the echo-question bridge «¿Vives dónde?».
7. `lessons/greetings.html`: the 您 / usted paragraph and the 小姐 / «¡señorita!» tip; c0319.
8. g075 «Señora Wang, ¿ya comiste?» and g049 / g051: tú to an elder and to a stranger under the strict usted rule.
9. e026 / g037 haggling with «Jefe» and «Un poco más barato, ¿no?»; c0163.
10. e187 / c0626 慢慢吃 = «¡Buen provecho!»; c0090 阿姨 = «señora».
