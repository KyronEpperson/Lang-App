# pt-en cold review (PT-REVIEWER), 2026-11-17

**Scope.** I edited:
- everything under tools/content/pt except profile.json, the deviations files and DECKNAMES.md;
- the `t` fields of tools/i18n/pt/ui.json and tools/i18n/pt/roadmap.json.

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit anything. I changed no English that parity compares.

**Read in full:**
- all 42 lessons: bodies, checks, practice prompts, `why`, hints;
- 480 cards, DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS and meta.js;
- 769 exact strings, 271 patterns and 425 roadmap titles.

**Status.** Every check passes on scratch outputs (final lines at the end of this file).
- Verb-core `[vc N]` counts are unchanged in every lesson.
- The lint meaning-variant count fell from 24 to 19.
- pron_check reports 0 phrase conflicts and 0 rule hits. Its only differences from zh-en are 4 deliberate strong/weak pairs (*into*, *which*, *before*, main-verb *does*), recorded in PRON-RULES §3.

New files:
- `PRON-RULES.md`: settled IPA conventions;
- `pron_check.js`: the zh checker adapted for pt, with a `zh` mode that lists every pt transcription that differs from zh-en.

## 1. What changed (89 edits: 62 content, 22 interface strings, 5 roadmap titles)

### Wrong or misleading teaching: 13
- **adjectives, check `why`.** «Palavra curta: -er, e a consoante final dobra» read as a general rule (*cheap* → *cheapper*). → «Palavra curta: -er. Em "big" (consoante + vogal + consoante) o g dobra: "bigger". Compare: "cheap" → "cheaper".»
- **can-like, mc `why`.** «quem gosta é "I", não "me"» was the source course's reversed-*like* argument, which does not apply to *gostar*. → «E "me" nunca é sujeito.»
- **verb-prep, body.** «Só «pagar a conta» fica sem preposição: *pay the bill*, porque *pay for* vem antes do que você compra» implied the bill is the only exception. → *pay for* + what you buy; the bill, the amount and the person take no preposition (*pay the bill*, *pay $20*, *pay the waiter*).
- **prep, typed prompt** «Ela toma café de manhã». In Brazil «tomar café» also means "have breakfast", which is not accepted. → «Ela toma café (a bebida) de manhã».
- **smalltalk, fill `p`** «Você viu alguma coisa boa ultimamente?» did not lead to *shows / movies*. → «Você viu alguma série ou filme bom ultimamente?»
- **Card «What's up?»** «Não pergunta o que está «em cima»» was a leftover from the source course. → «Cumprimento informal entre conhecidos, como o nosso «E aí?»…»
- **Card «I live in São Paulo.»** «a sílaba tônica é «Pau»» implied the stress moves, but it is on «Pau» in Portuguese too. → «o «ão» perde o som nasal e vira /aʊ/».
- **Card «Can I get a name for the order?»** «Tenha um nome fácil à mão» was the source course's advice to have an English nickname ready. → «Se o seu nome for difícil para quem fala inglês (João, Conceição), soletre ou diga um apelido curto».
- **Card «Where's gate 12?»** «Em inglês o número vem depois» is true of Portuguese too («portão 12»). → how gate and seat numbers are read.
- **Card «McDonald's».** «Se você puxar a tônica para o começo, como em português» was false: Brazilians also stress *Don*. → the real traps: «méqui» and a vowel after /ldz/.
- **Card «delicious».** «e não em «ci» como em «delicioso»» was false: «delicioso» stresses the «o». → «em «delicioso» ela cai no «o»».
- **IDIOMS «Bite the bullet | Engolir o sapo».** «Engolir sapo» means taking an affront in silence. → «Encarar de frente», with a note that contrasts the two.
- **Interface, calibration line.** It named the button «Não tenho certeza», but the button reads «Não sei bem». «{8} cartões … vão» also failed at 1. → «em “Não sei bem”…» and «cartões com excesso de confiança (vão primeiro em Pontos fracos): {8}».

### Unnatural wording: 48 (examples)
- Idioms: «Quando as galinhas tiverem dentes» → «criarem dentes» (lesson and deck). «Estou no sétimo céu» → «Estou nas nuvens», which matches the practice item. «Essa música é um estouro» → «é demais».
- PAUSE glosses: «Parece bom» → «Beleza / Pode ser»; «Bom argumento» → «Bem lembrado»; «Totalmente» → «Com certeza / Total»; «Dedos cruzados» → «Tomara! / Vamos torcer»; «O seu esforço aparece» → «Dá para ver o seu esforço».
- Deck glosses and notes:
  - «No worries | Relaxa» → «Tranquilo / Sem problema»;
  - «Same here | Comigo também» → «Eu também / Idem»;
  - «Fiz muitos progressos» → «Progredi muito»;
  - «apoiar / respaldar» → «apoiar»;
  - «a foto se "take"» → «foto se tira com "take"»;
  - «a luz não se "put out"» → «luz não se apaga com "put out"»;
  - «A decisão se "make"» → rewritten;
  - «vendas de segunda mão» → «vendas de garagem».
- Dialogue: «Espere, eu abro a porta para você» → «Deixa que eu abro…»; «Eu fecho a compra aqui» → «Pode pagar aqui comigo».
- Register: «Primeiro a gente jantou. Depois vimos um filme» mixed *a gente* with a *nós* verb. → «Primeiro jantamos. Depois vimos um filme» (example row and fill prompt).
- Practice: «Boas-vindas à minha casa» → «Bem-vindos à minha casa». «Não, imagina. Claro que sim.» → «Não, imagina. Pode deixar.» The second gloss had answered «não» and «sim» in the same breath. idioms check: «Qual frase fica pior…» → «Qual frase não combina com…».
- Level titles: meta.js said «Falante / Da terra» and ui.json said «Tagarela / Da casa». Both now read «Tagarela / De casa». This overrides the «Da casa» that profile §10 suggested (it flagged it for a native check). «Ser de casa» is the idiom for someone who belongs; «da casa» means "the house's" (*prato da casa*).
- Interface:
  - «Not quite» / «Not quite.»: «Ainda não» → «Incorreto» (×2), the profile's glossary term, paired with «Correto!». «Ainda não» also showed after the last attempt, next to the answer, when no retry follows. The profile allowed it as an option, so this counts as a wording choice, not a writer error;
  - count patterns that failed at 1: «Faltam: {1} · em {2} baralhos» → «… · baralhos: {2}»; «5 novos + {3} já aprendidos» → «5 novos + aprendidos: {3}» (×5, one per quiz mode);
  - «Torne formal / informal» → «Deixe mais formal / informal»;
  - «Frase de hoje à noite» → «Frase da noite»;
  - «Firme no ritmo.» → «Bom ritmo.»;
  - «O que você tem em mente?» → «No que você está pensando?»;
  - «quando ele estiver fixado» → «quando tiver memorizado»;
  - «automática se ficar vazio» → «automática se deixada em branco» (×2).
- Roadmap:
  - «있어요/없어요, 이/가, 에 de lugar» → «있어요/없어요, 이/가 e 에 (lugar)»;
  - «gostar de: preferências», «piacere: preferências» → «gostos», which matches «好き / きらい: gostos»;
  - «Duras e suaves, sonoras e surdas» → «Consoantes duras e brandas, sonoras e surdas».

### IPA: 2
- *New York* /ˈnuː ˈjɔːrk/ → /ˌnuː ˈjɔːrk/ in 2 rows of more/a2.js. This agrees with the a1 row and with *São Paulo* /ˌsaʊ ˈpaʊloʊ/.
- Everything else already agreed with zh-en: 0 phrase and 0 word differences. Settled conventions are in `PRON-RULES.md`:
  - names: Rio, Pedro, Ana, Paulo Coelho, Salvador;
  - relative *which*, preposition *into* and *before*;
  - `exit` /ˈeksɪt/.

### Formatting and consistency: 26
- **Respelling** of the *worked* error unified to «uórquid». It was «uórkid» in lessons.js and «uor-kid» in decks.js.
- **«Cognatos e sílaba tônica» notes.** 10 notes named the stressed syllable with capitalised pseudo-syllables («MA», «SEI», «VER», «FO»), which read as a Portuguese respelling. They now use lowercase English letters plus IPA: `a tônica é "sa" (/ˈseɪ/)`. The eleventh note, *delicious*, is counted under wrong/misleading.
- **Same English, same meaning:**
  - *I worked yesterday* «Trabalhei ontem»;
  - *Would you like some tea?* «Você aceita um chá?»;
  - *Can I give you some advice?* «Posso te dar um conselho?»;
  - *different* «diferente»;
  - *Could you say that again?* «Você poderia repetir?»;
  - *What do you do?* «O que você faz da vida?»;
  - *I hope this email finds you well* «Espero que esteja tudo bem com você»;
  - *schedule* «cronograma»;
  - *Pull someone's leg* «Tirar com a cara de alguém», as in the idioms lesson.
- **Interface:**
  - «⚡ Desafio de 2 min» → «⚡ Relâmpago de 2 min», which matches «⚡ Relâmpago»;
  - plan names now match meta.js PLAN_PRESETS: «Preparar uma viagem», «Fazer amigos em inglês», «Conversação em 90 dias»;
  - roadmap «在: em, e palavras de lugar» → stray comma removed.

### Interface decisions (checked, no change)
- **Tab bar** `Hoje · Prática · Revisão · Lições · Treino · Evolução · Opinião`: the longest label has 8 characters. Kept.
- **`#social`**: kept. «social» is an ordinary Portuguese word (*rede social*).
- **`~5 min`**: kept. «min» is the Portuguese abbreviation too.
- **`Backup`**: kept. *Backup* is the normal Brazilian term («fazer backup»).
- **`Mix`**: kept. It is a common loanword, and 20 pattern strings already use it.
- **`Type` → «Digitar»**: kept. It reads as the verb on the quiz chip, as the lead requires.
- **Weekday headers** «Dom Seg Ter Qua Qui Sex Sáb»: three letters, capitalised as column heads. Kept.
- **Count patterns**: after a mechanical scan (every slot followed by a plural word, minus templates with a singular sibling), 6 failed at 1 and were fixed (above). Every remaining count follows a colon («Para revisar: {1}»), sits in a fraction («{1}/{2} aprendidos»), or has a separate singular key (*day / days*, *weekly badge / badges*, *card from mastery*). The exception is «{1} itens», which is always 12 to 16.
- **Gender**:
  - «Boas-vindas», «Você conseguiu» and «Lição concluída» are already neutral;
  - «Anônimo» stays as the conventional label for an unnamed poster;
  - the «aprovado» chips agree with *teste* (masculine).
- **Register in content**:
  - «Eu a amo» stays in the object-pronoun lesson: it is correct written pt-BR, and the lesson is about pronoun position;
  - colloquial «Amo ela» would teach nothing there;
  - «a gente» stays only in dialogue and example translations (profile §2).

## 2. Edit counts per file

| file | lines | wrong/misleading | unnatural wording | IPA | formatting | total |
|---|---:|---:|---:|---:|---:|---:|
| decks.js | 535 | 6 | 11 | 0 | 15 | 32 |
| extra.js | 297 | 1 | 9 | 0 | 1 | 11 |
| meta.js | 69 | 0 | 1 | 0 | 0 | 1 |
| lessons.js | 259 | 0 | 2 | 0 | 2 | 4 |
| practice.js | 231 | 2 | 2 | 0 | 0 | 4 |
| more/a1.js | 497 | 2 | 0 | 0 | 3 | 5 |
| more/a2.js | 309 | 1 | 0 | 2 | 0 | 3 |
| more/b1.js | 154 | 0 | 2 | 0 | 0 | 2 |
| ui.json | 1040 strings | 1 | 17 | 0 | 4 | 22 |
| roadmap.json | 425 titles | 0 | 4 | 0 | 1 | 5 |

**Verdict.**
- **Decks and dialogues are noticeably weaker; the interface is not.**
- decks.js and extra.js need about 5 edits per 100 lines, against about 1 per 100 in the lesson files. Most of the difference is wrong or unnatural Portuguese glosses and card notes left over from the source course (*What's up?*, the order name, gate numbers, *McDonald's*). The 15 formatting edits in decks.js are almost all the «Cognatos» stress notes.
- The lesson files had five teaching slips in about 1,450 lines, and their Portuguese is natural throughout.
- ui.json was solid: 22 changes in 1,040 strings, 6 of them count patterns.

## 3. For a native speaker: top ten
1. **«Incorreto»** vs «Ainda não» for wrong answers (`Not quite`). I followed the profile's glossary; «Ainda não» is softer but wrong after the last attempt.
2. **Level titles «Tagarela» and «De casa»** (for *Talker*, *Local*). Is «De casa» the right register for a level badge, or is «Local» (as in «os locais») better?
3. **«Eu a amo»** as the gloss of *I love her* in the object-pronoun lesson (more/a1.js). It is correct written pt-BR; is it too stiff for this audience?
4. **IDIOMS glosses**: «Encarar de frente» (*bite the bullet*), «Fazer de qualquer jeito» (*cut corners*; «fazer nas coxas» moved to the note), «Aguardar quietinho» (*sit tight*), «Sem sacrifício, não há conquista» (*no pain, no gain*).
5. **PAUSE glosses**: «Beleza / Pode ser» (*Sounds good*), «Bem lembrado» (*Good point*), «Tomara! / Vamos torcer» (*Fingers crossed*), «Que elegância!» (*Looking sharp!*).
6. **«Bem-vindos à minha casa»** as the meaning line for *Welcome to my house* (pron fill). It is masculine plural; «Seja bem-vindo» is just as gendered.
7. **«Ela toma café (a bebida) de manhã»**: does the parenthesis read naturally, or is «Ela bebe café de manhã» better?
8. **«Essa música é demais»** (*That song slaps*) and «Solta a fofoca» (*Spill the tea*): current enough?
9. **«Deixe mais formal / informal»** for the polite ↔ casual drill buttons. The drill was written for Korean speech levels; check how it reads with English pairs.
10. **IPA of names the en-US voice must say**: Ana /ˈænə/, Paulo Coelho /ˈpaʊloʊ kuˈeɪljoʊ/, Salvador /ˈsælvədɔːr/, Pedro /ˈpeɪdroʊ/. Check against the audio.

## 4. Found but not fixed (outside my scope)
- **ui.json `Type` entry**: its reference fields (`context`, `where`) changed during my session (now "quiz mode chip (verb: type the answer)"). That was not my edit: my scripts only rewrite `t` values. I left it as found.
- **`WARN unused deviations: lessons:verb-prep`** (parity). `verb-prep` is listed both in `extraLessons` and in `lessons` in deviations.json. The `lessons` entry is stale; it is the lead's file.
- **DECKNAMES.md** lists the source-course deck names in its "Spanish deck" column. That is Spanish text under tools/content/pt, but the file is marked "FINAL — set by the lead; do not change".
- **ui.json `(han). …`**: the reading-drill text still starts with "(han).", left from the Korean course. The id, zh and es interfaces keep it the same way, so it was not changed. The engine should drop it, or hide the block for non-Korean courses.
- **roadmap «Ordem do QECR A1–B1, adaptada para falantes de coreano»** (the shared English roadmap basis). This is a correct translation, but it is the wrong message for a Brazilian learner. id, zh and es have the same row, so the English source needs a change.
- **Labels next to a big number** (`day streak` «dias de sequência», `cards learned` «cartões aprendidos») read «1 dias…» at 1. These are exact labels, not patterns, so they cannot vary with the count. An engine change or a reworded English key is needed.
- **Parity-bound English** that reads oddly to Brazilians but must stay:
  - Hispanic places in practice items (Lima, Bogotá, Cartagena, Santiago, Buenos Aires, Isabel Allende), as allowed by profile §9;
  - the can-like distractors "Pizza likes me." / "Me like pizza.", which no Brazilian would produce.
- **Lint meaning variants (19)**: most differ only in a final period (lessons.js meanings end with «.», more/*.js ones do not). Two pairs differ in wording but are both natural: «A vida é dura / difícil», «Estou com fome(.)». They are listed, not unified, because «A vida é dura» is also the wording of a check prompt.
- **validate.js overflow warnings** (22 labels longer than 1.6 × English, such as «Cartões mais difíceis», «Virar automaticamente»). On the eight main screens the lead measured no overflow. These labels sit on secondary screens and were not changed.

## Checks (final run)
```
PASS: all checks OK                                   (validate.js pt)
PASS: shared English side matches ko-en               (parity.js pt)
lint pt: 0 blocking · 19 meaning variants (info) · 0 K-pop leftovers (info)
exact=769 patterns=272 warnings=2 / PASS              (i18n validate.js pt)
roadmap strings 425/425 translated                    (road.py check pt)
node --check: all 9 JS files OK (incl. pron_check.js)
pron_check: phrase conflicts 0 · word conflicts 1 (new / New York, intended) · rule hits 0 · differs from zh: phrases 0, words 4 (intended, PRON-RULES §3)
```
