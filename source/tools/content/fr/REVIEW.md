# fr-en cold review (FR-REVIEWER), 2026-11-17

**Scope.** I edited:
- everything under tools/content/fr except profile.json, the deviations files and DECKNAMES.md;
- the `t` fields of tools/i18n/fr/ui.json and tools/i18n/fr/roadmap.json (a diff against the pre-review copy shows only `"t"` lines).

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit anything. No parity-bound English changed: the only English edits are two IPA rows (§1, pron) and two accepted answers in the fr-specific `false-friends` lesson.

**Read in full:** all 41 lessons (bodies, checks, practice prompts, `why`, hints); 480 cards; DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS; meta.js; 769 exact strings, 271 patterns and 425 roadmap titles.

**Status.** Every check passes on scratch outputs (final lines at the end of this file).
- Verb-core `[vc N]` counts are unchanged in every lesson.
- Lint meaning variants fell from 25 to 23.
- New files:
  - `PRON-RULES.md`: settled IPA conventions;
  - `pron_check.js`: the pt checker copied for fr, with `REF=pt` and a `new` mode.
- pron_check: 0 phrase conflicts, 0 rule hits. fr now equals pt-en at phrase and word level.
- The edits were applied by script, which asserted that each old string occurred exactly once. The edit lists are in the session scratchpad.

## 1. What changed (113 edits: 90 content, 20 interface strings, 3 roadmap titles)

### Wrong or misleading teaching: 29
**Card notes carried over from the source courses (12, decks.js).** Each note gives a warning that holds for Spanish or Korean speakers, or one that is just as true of French:
- *What's up?* «Ce n'est pas « qu'est-ce qu'il y a là-haut ? »…» → «Salut décontracté entre amis ou collègues, comme « Quoi de neuf ? » ou « Ça va ? »…».
- *Can I get a name for the order?* «Prépare un prénom facile» → «Si ton prénom est difficile pour un anglophone (Guillaume, Aurélien), épelle-le ou donne un prénom court».
- *Where's gate 12?* «En anglais, le numéro vient après le mot» (French says «porte 12» too) → how gate and seat numbers are read, and the signs *Departures* and *Gate*.
- *I have a younger brother.* «"brother" désigne seulement un frère…» (the Spanish *hermanos* problem) → *younger / older brother* = petit / grand frère, *siblings*.
- *Is it spicy?* «Aux États-Unis, c'est souvent moins fort qu'on ne l'imagine» (a Korean-course remark; for a French diner it is the reverse) → «Pour un plat doux, demande "mild"».
- *hang out* «on n'emploie pas "play"» (Korean 놀다) → meaning plus the past *hung out*.
- *come up with* «Le sujet est la personne qui trouve l'idée»: deleted.
- *I'm not sure* «Le verbe reste "be"»: replaced by the /ʃʊr/ note.
- *I'm so tired* «jamais "I have tired"»: not a French error, deleted.
- *I lost my wallet* «"my wallet", pas "the wallet"»: French says «mon portefeuille» too, deleted.
- *No onions* «"onions" se met au pluriel»: as in French, replaced by /ˈʌnjən/.
- *milk* «N'ajoute pas de voyelle à la fin (« milke »)» → the real trap: /ɪ/ and the dark *l*.

**Stress claims true for Spanish only (2, decks.js):**
- *pharmacy* «jamais sur « ma »» (Spanish *farMAcia*) → «pas sur la fin comme dans « pharmacie »»;
- *delicious* «pas sur « ci »» (Spanish *deliCIOso*) → «pas sur la fin comme dans « délicieux »».

**Wrong equivalents and translations (2, extra.js):**
- *The best of both worlds*: «Le français a une version plus piquante : « le beurre et l'argent du beurre »». That idiom is a reproach and matches *have your cake and eat it*. → «gagner sur les deux tableaux», with the note.
- EXAMPLES *I think it's on the second floor* «au deuxième étage» → «au premier étage»: the US *second floor* is the French *premier étage*.

**Teaching slips in lessons (5):**
- adjectives, check 0 `why` (more/a1.js): «Mot court : -er, et on double la consonne finale» read as a general rule (*cheap* → *cheapper*). → «Dans "big" (consonne + voyelle + consonne), le g double : "bigger". Compare : "cheap" → "cheaper".»
- false-friends type 1: added "He did not realize", "He did not notice" (fr-specific lesson with a lesson deviation; the shared lessons accept full forms too).
- smalltalk fill 3 «Tu as vu quelque chose de bien récemment ?» did not lead to *shows / movies* → «Tu as vu de bonnes séries ou de bons films récemment ?».
- be type 1 «Il est professeur» invited "professor", which is not accepted → «Il est enseignant».
- email order 3 «Je vérifie et je reviens vers vous»: no tile says «je vérifie» → «Je reviens vers vous».

**Interface (8):**
- `Good afternoon` / `good afternoon` «Bon après-midi» → «Bonjour». It is the Today greeting, and «bon après-midi» is said when leaving.
- Count patterns that failed at 0 and 1: «5 nouvelles + {3} apprises» → «5 nouvelles + apprises : {3}» (×5, one per quiz mode). Calibration «{8} cartes surestimées passent en premier…» → «cartes surestimées, placées en tête de Points faibles : {8}».

### Unnatural wording: 41 (examples)
- Deck meanings:
  - *Nice to meet you* «C'est un plaisir de te rencontrer» → «Enchanté / Enchantée»;
  - *Have a good one!* «Bonne continuation !» → «Bonne journée ! / Bonne soirée !»;
  - *See you later* «À tout à l'heure» → «À plus tard», which matches the note («même sans projet de se revoir»);
  - *No worries* «Ne t'en fais pas» → «Pas de souci»;
  - *Everything was great* «Tout était délicieux» → «Tout était parfait»;
  - *You made my day!* «Tu m'as fait ma journée !» (calque) → «Tu as illuminé ma journée !»;
  - *I'm sorry to hear that* «Ça me peine…» → «Ça me fait de la peine…»;
  - *Let's do this!* «Allons-y à fond !» → «C'est parti !»;
  - *I don't get it* «Je n'y comprends rien» → «Je ne pige pas» (familiar, as the note says; «Je ne comprends pas» is already *I don't understand*);
  - *I'd love to* «J'adorerais» → «Avec plaisir !»;
  - *I like it, though* «Il me plaît…» → «Ça me plaît quand même»;
  - *Low-key* «en cachette» → «discrètement».
- Dialogues, matched to the deck glosses:
  - «Ravie de te rencontrer» → «Enchantée»;
  - «La queue est là-bas» (*The end is over there*) → «Le bout de la file est là-bas»;
  - «Tu as bonne mine ! Tu fais du sport ?» (*You look great! Do you work out?*) → «Tu as l'air en forme !»;
  - «Je les ai prises à Paris» → «trouvées»;
  - «Avec plaisir, j'adorerais !» → «Oui, avec plaisir !».
- EXAMPLES:
  - «je ne parle qu'un peu l'anglais» → «qu'un petit peu anglais»;
  - «Je le pense aussi» → «C'est aussi ce que je pense».
- PAUSE glosses:
  - «Tu as un don naturel» → «Tu es doué / douée»;
  - «C'est brillant» → «C'est génial»;
  - «C'est très apprécié» → «Merci, c'est gentil».
  - Kept as idiomatic: «Ça se défend», «Ça se comprend», «Bien vu», «Ma faute».
- Practice: polite mc 4 «Dans l'avion : … côté fenêtre» → «côté hublot». The type item and the lesson example keep «côté fenêtre»: they give no plane context, and a *window seat* can be on a train.
- Interface:
  - speed `native` «native» → «naturelle»;
  - «Qu'as-tu en tête ?» → «À quoi penses-tu ?»;
  - «Régulier.» → «Bon rythme.»;
  - «Sans faute en» + deck name → «Sans faute :»;
  - «Rends-le poli / familier» → «Rends la phrase plus polie / plus familière»;
  - «1 pratique» / «pratiques : {3}» → «1 tentative» / «tentatives : {3}».
- Roadmap:
  - «있어요/없어요, 이/가, 에 de lieu» → «…, 이/가 et 에 (lieu)»;
  - «Dures et molles, sonores et sourdes» → «Consonnes dures et molles, sonores et sourdes».

### Pron: 2
- *New York* /ˈnuː ˈjɔːrk/ → /ˌnuː ˈjɔːrk/ in 2 rows of more/a2.js. This now agrees with more/a1.js, zh-en and pt-en.
- Everything else already agreed. Hand-written IPA with no zh/pt counterpart was checked and recorded in PRON-RULES §2–§3: France, French, Paris, London, Bordeaux, Toulouse, Lucas, Victor Hugo, Canada, and the 15 new Faux amis / Pièges words.

### Formatting and consistency: 41
- **«Mots transparents et accent» notes**: 4 capitalised pseudo-syllables («MA», «VER», «TU», «EK») → lowercase English letters (`"ma"`, `"ver"`, `"tu"`, `"ex"`), plus one stray period. *delicious* «LI» is counted under wrong/misleading.
- **«accent» → «accent tonique»** in 17 more deck notes (glossary §3: plain «accent» also means a written or a foreign accent).
- **«verbe ordinaire» → «verbe lexical»** (glossary §3): 6 in more/a1.js, 2 in extra.js PATTERNS. «verbe principal» (3× in more/a1.js bodies, "the main verb" as opposed to the auxiliary) was left on purpose.
- **One respelling of the *worked* error**: «wor-ked» everywhere. The card said «wor-kid» and the past tip said «work-ed».
- **Same English, same meaning**:
  - *I'm working from home today* «Aujourd'hui, je travaille de chez moi»;
  - *Would you like some tea?* «Tu veux du thé ?»;
  - *Could you say that again?* «Pourrais-tu répéter ?».
- **pron lesson**: «Tu peux masquer la transcription avec « Afficher la prononciation (API) »» named a label that is not on screen (the setting reads «Afficher la prononciation (API) pendant la pratique») → «avec le bouton « Aa » des exercices, ou dans les paramètres de Progrès», the two controls in src/app.html (`.qromT` and the `quizRom` / `hideRom` settings).
- **Interface = course**:
  - plan names now match meta.js PLAN_PRESETS: «Préparer un voyage», «Se faire des amis en anglais», «Conversation en 90 jours»;
  - the media goal is «Séries et films», as in meta.js GOALS;
- **Roadmap**: «He/she/it: -s» → no-break space before the colon.

### Interface decisions (checked, no change)
- **Tab bar** `Accueil · Pratique · Révision · Leçons · Exos · Progrès · Avis`: kept, as measured by the lead. Settings «Couleur / Texte»: kept short.
- **Left identical to English, all kept**:
  - `Standard · 5` (French word, mirrors «Rapide · 2 min» / «Longue · 10»);
  - `#social`, `Social`, `Mode`, `Audio`, `public`, `Contact`, `🐞 Bug`, `Quiz`, `Pro`, `XP`: ordinary French words or loans;
  - `⚡ Blitz` and `Mix`: understood in France, and `Mix` recurs in 20 patterns;
  - `Go`: a short, common loan on a cramped button;
  - `Sensei`: a level title;
  - `Sa`: the weekday header «Di Lu Ma Me Je Ve Sa».
- **Weekday headers** «Di Lu Ma Me Je Ve Sa»: two letters, standard in French calendars. Kept.
- **Count patterns**: a mechanical scan (slot followed by a word ending in -s/-x) found the 6 fixed above. Every other count follows a colon, sits in a fraction, or sits next to an invariable unit («{1} j», «{1} min», «{1} XP», «{1} %»).
- **Level titles** «Novice · Élève · Pipelette · Globe-trotter · Du coin · Pro · Légende»: identical in meta.js and ui.json, all gender-invariable. Kept.
- **Gender**: «Bienvenue», «C'est parti !», «Leçon terminée» are neutral; card meanings give both forms («Enchanté / Enchantée», «Tu es doué / douée»).
- **Typography**: no ordinary space remains before `: ; ? !` or inside « » in any French string of the content files, ui.json or roadmap.json (the only hits are code comments).

## 2. Edit counts per file

| file | lines / strings | wrong/misleading | unnatural wording | pron | formatting | total |
|---|---:|---:|---:|---:|---:|---:|
| decks.js | 535 | 14 | 13 | 0 | 25 | 52 |
| extra.js | 296 | 2 | 16 | 0 | 2 | 20 |
| meta.js | 69 | 0 | 1 | 0 | 0 | 1 |
| lessons.js | 257 | 0 | 0 | 0 | 2 | 2 |
| practice.js | 232 | 3 | 1 | 0 | 0 | 4 |
| more/a1.js | 501 | 2 | 0 | 0 | 7 | 9 |
| more/a2.js | 273 | 0 | 0 | 2 | 0 | 2 |
| more/b1.js | 155 | 0 | 0 | 0 | 0 | 0 |
| ui.json | 1040 strings | 8 | 8 | 0 | 4 | 20 |
| roadmap.json | 425 titles | 0 | 2 | 0 | 1 | 3 |

**Verdict: the decks and dialogues (decks.js, extra.js) are noticeably weaker; the interface (ui.json, roadmap.json) and meta.js are not.**
- decks.js and extra.js need about 8.7 edits per 100 lines, against 1.2 in the lesson files (17 edits in 1,418 lines).
- Leaving out the mechanical «accent tonique» and «verbe lexical» replacements, the rates are 6.4 against 0.8.
- Wrong/misleading edits: 1.9 per 100 lines in decks/extra against 0.35 in the lesson files, about five times more, as in the Portuguese course.
- Most deck and dialogue errors are card notes carried over from the Spanish or Korean course, plus glosses translated word for word (*Bonne continuation*, *Tu m'as fait ma journée*, *C'est brillant*).
- Their French is otherwise grammatical, correctly spaced and consistently *tu*.
- The lesson files had five teaching slips in about 1,400 lines, and their French reads as native throughout.
- ui.json was solid: 20 changes in 1,040 strings, 6 of them count patterns. Two consistency changes («Masquer la prononciation (API)», «⌨️ Écrire fr→en») were reverted because they newly crossed the overflow warning; the lead asked for short labels.

## 3. For a native speaker: top ten
1. **Level titles «Pipelette» and «Du coin»** (*Talker*, *Local*). Do they read right on a badge? «Pipelette» can sound mocking.
2. **«Enchanté / Enchantée»** for *Nice to meet you*, and *Have a good one!* as «Bonne journée ! / Bonne soirée !». Too formal for a cashier's line?
3. **«Tu as illuminé ma journée !»** (*You made my day!*). Natural, or would «Ça m'a fait ma journée» (common in speech, a calque in origin) be better?
4. **PAUSE glosses** kept as found: «Ça se défend» (*Fair enough*), «Ça se comprend» (*Makes sense*), «Ma faute» (*My bad*), «Tu illumines la pièce» (*You light up the room*), «Reste affamé, reste fou».
5. **Slang deck**: «Balance les potins» (*Spill the tea*), «Ce morceau déchire» (*That song slaps*), «Sans mentir» (*No cap*), «discrètement» (*Low-key*). Current enough for French teenagers?
6. **Tab labels «Accueil», «Exos», «Pratique»** (profile §11 flag; «Pratique» alone can read as "handy").
7. **«Rends la phrase plus polie / plus familière»** for the polite ↔ casual drill. The drill was written for Korean speech levels; check how it reads with English pairs.
8. **«gagner sur les deux tableaux»** for *the best of both worlds*, and the new note on «le beurre et l'argent du beurre».
9. **«wor-ked»** as the written French-style mispronunciation of *worked*, and «ba-na-NA» / «com-for-TA-ble» as stress-error illustrations.
10. **IPA of names the en-US voice must say**: Paris /ˈpærɪs/, Bordeaux /bɔːrˈdoʊ/, Toulouse /tuˈluːz/, Victor Hugo /ˈvɪktər ˈhjuːgoʊ/, Lucas /ˈluːkəs/. Check against the audio.

## 4. Found but not fixed (outside my scope)
- **DECKNAMES.md** keeps the source-course deck names in its "Spanish deck" column: the only Spanish text under tools/content/fr. The file is marked "FINAL — set by the lead; do not change".
- **Labels next to a big number** (`day streak` «jours de série», `cards learned` «cartes apprises») read «1 jours…» at 1, as in pt. These are exact labels, not patterns, so the English key or the engine has to change.
- **Roadmap «Ordre du CECRL A1–B1, adapté aux coréanophones»** and the en-roadmap lesson «Pièges de prononciation : R/L, F/P, TH»: correct translations of the shared English roadmap, which describes the Korean-speaker course. Wrong message for a French learner; the English source needs a change (same note as pt).
- **ui.json `(han). …`** reading-drill text and the Hangul syllable drill («p. ex. ga»): Korean-only features still reachable in the interface. Same as pt; the engine should hide them for non-Korean courses.
- **Parity-bound English that reads oddly to French learners** but must stay:
  - Hispanic places in practice items (Lima, Bogotá, Cartagena, Santiago, Buenos Aires, Isabel Allende), as allowed by profile §9;
  - the distractors "Pizza likes me." / "Me like pizza." (can-like), "I no eat meat" (present) and "You're taking my hair" (idioms). Their `why` lines already explain the French case.
- **Lint meaning variants (23)**: almost all differ only in a final period (lessons.js meanings end with «.», more/*.js ones do not). Three differ in wording but are both natural and tied to different contexts: «Que fais-tu / Qu'est-ce que tu fais dans la vie ?», «Le petit-déjeuner est-il compris / est compris ?», «Ça va ? / Tu vas bien ?».
- **validate.js identical-to-English warnings (27 in i18n)**: all reviewed above; no change needed.

## Checks (final run)
```
PASS: all checks OK                                   (validate.js fr)
PASS: shared English side matches ko-en               (parity.js fr)
lint fr: 0 blocking · 23 meaning variants (info) · 0 K-pop leftovers (info)
exact=769 patterns=272 warnings=2 / PASS              (i18n validate.js fr)
roadmap strings 425/425 translated                    (road.py check fr)
node --check: all 9 JS files OK (incl. pron_check.js)
pron_check: phrase conflicts 0 · word conflicts 1 (new / New York, intended) · rule hits 0 · differs from zh: phrases 0, words 4 (intended) · differs from pt: 0, 0
Spanish / Hangul grep over tools/content/fr: no hit outside DECKNAMES.md
```
