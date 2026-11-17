# de-en cold review (DE-REVIEWER), 2026-11-17

**Scope.** I edited:
- everything under tools/content/de except profile.json, the deviations files and DECKNAMES.md;
- the `t` fields of tools/i18n/de/ui.json and tools/i18n/de/roadmap.json. A structural diff against the pre-review copy (every field except `t`) is identical.

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit anything. No English that parity compares changed. English changed in two places only: the `be` lesson body table (*I'm sleepy* → *I'm scared. / I'm bored.*; bodies are not compared) and two added accepted answers in `false-friends` (a de-specific lesson, covered by its lesson deviation).

**Read in full:**
- decks.js (480 cards: every meaning and every note) and extra.js (DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS);
- meta.js, lessons.js (11 bodies, 33 checks) and practice.js (154 items);
- more/a1.js, a2.js, b1.js: all 30 bodies, all 90 checks and **every** practice item (mc, or, fi and ty), with every `why`;
- all 425 roadmap titles.

**Scanned, not read line by line:** ui.json (1,041 strings). I read the tab, greeting, feedback/tab-rename, plan, goal, tag, level-title, weekday, glossary-feedback and pronunciation-setting strings. Every pattern with a count slot was checked by script for an inflected word after the number. Regex scans covered all strings for: a language slot after an article or in the genitive; a space before `: ; ? !`; em dashes; straight quotes; formal *Sie*; English leftovers (Board, Deck, Streak, Review…); and strings identical to English. The rest of ui.json was **not** read one by one.

**Status.** Every check passes on scratch outputs (final lines at the end of this file).
- Verb-core `[vc N]` counts are unchanged in every lesson: no keyword was removed from an order or type `why`.
- Lint meaning variants fell from 23 to 22. The rest differ only by a final period or a parenthesis.
- New files:
  - `PRON-RULES.md`: settled IPA and respelling conventions;
  - `pron_check.js`: it's checker copied for de. It reports 0 phrase conflicts and 0 rule hits; the 2 word conflicts and 5 zh differences are intended (PRON-RULES).
- Edits were applied by script, which asserted that each old string occurred exactly once. The edit lists are in the session scratchpad.

## 1. What changed (91 edits: 59 content, 26 interface strings, 6 roadmap titles)

### Wrong or misleading teaching: 26 (examples)
**Card notes carried over from the Spanish course, or false for German speakers (decks.js 9, extra.js 2):**
- *Make money* «Achtung: nicht "win money"»: that is the Spanish *ganar* trap. German «Geld verdienen» never suggests *win*. → «Auch: "earn money". „Verdienen“ im Sinn von „Das hast du verdient“ ist dagegen "deserve"».
- *What do you recommend?* «Geschrieben mit einem "c" und zwei "m"»: a spelling note reasoned from Spanish *recomendar*. → the stress, /ˌrekəˈmend/.
- *Is it far from here?* «Wie im Deutschen steht ein Subjekt: "Is it far?"»: the Spanish course's obligatory-subject note, which teaches a German speaker nothing. → «„Wie weit ist es?“ heißt "How far is it?"».
- *Can we get the check, please?* «In den USA zahlt man meist am Tisch»: Germans pay at the table too. → «In den USA bringt das Personal die Rechnung oft, ohne dass du fragst».
- *It's May 3rd.* «Monate schreibt man groß», and two cards with «Sprachen schreibt man groß»: German capitalises these nouns too. The note on *Do you speak German?* was dropped; *Your German is really good!* now says «"German" schreibt man immer groß, auch als Adjektiv: "German food" (deutsches Essen)», which is the real contrast.
- *Can I pay by card?* «"by card", nicht "with card"»: *pay with a card* is correct English. → «Üblich ist "by card" (oder "with a card"), nie "with card" ohne Artikel».
- *Let's get the ball rolling.* «Wie „den Stein ins Rollen bringen“, aber positiv»: the German idiom is not negative. → «Ähnlich wie …».
- IDIOMS *Miss the boat* «Den Anschluss verpassen»: that mainly means "fall behind". → «Die Chance verpassen», note «wie bei „Der Zug ist abgefahren“».
- IDIOMS *Let the cat out of the bag* «im Deutschen meist absichtlich, im Englischen oft aus Versehen»: unsupported. → «Gleiches Bild wie im Deutschen».

**Lessons (lessons.js 5, practice.js 3, more/a1.js 6):**
- pron body and pron check 1 `why`: «Halte die Stimme beim letzten Laut an» means "stop your voice", the opposite of the point. → «Lass die Stimme beim letzten Laut weiterlaufen».
- pron body: «unter „Lautschrift anzeigen (IPA)“ ausschalten» named a label that does not exist. → the «Aa» button in practice, or the setting «Lautschrift beim Üben anzeigen» (the `qromT` button and `quizRom` checkbox in src/app.html, with the de `t` values).
- be body: the «haben / mir ist» table had «Ich bin müde → I'm sleepy», which is *sein* in German and *tired* in English. → «Ich habe Angst. / Mir ist langweilig. → I'm scared. / I'm bored.»
- polite body: «I want… und Give me… klingen noch schroffer. Im Laden oder im Café sagt man so.» said the opposite of what was meant. → «… sagt man deshalb *Can I get…?* oder *I'd like…*».
- practice.js polite fill «Kann ich einen Eiskaffee bekommen?» for *iced coffee*: a German «Eiskaffee» comes with ice cream. → «einen Iced Coffee».
- practice.js smalltalk fill «Hast du in letzter Zeit was Gutes gesehen?» did not lead to *shows / movies* (the it and pt reviews fixed the same item). → «gute Serien oder Filme».
- practice.js email order «Ich schaue es mir an und melde mich»: no tile says the first half. → «Ich melde mich wieder bei Ihnen».
- questions body: «Vorsicht bei den Fragewörtern, sie sind falsche Freunde: wo, wer, wie, was»: only *wo/wer* are false friends. → reworded.
- third-s: *He goes to work at eight* glossed «Er fängt um acht an zu arbeiten» (body and fill prompt). → «Er / Sie geht um acht zur Arbeit».
- adjectives check `why` «Kurzes Wort: -er, und der Endkonsonant wird verdoppelt» read as a general rule (*cheapper*). → *big → bigger* (consonant + vowel + consonant), but *cheap → cheaper* (the pt review fixed the same line).
- going-to order prompt «Sie werden verreisen» can be read as formal *Sie* («Sie werden…» = *You will…*). → «Die beiden werden verreisen».
- false-friends type «Er hat es nicht gemerkt»: *He didn't realize it* / *He didn't notice it* were not accepted. Both added (de-specific lesson, 12–16 items kept).

**Interface (1):** «Bestwert im ersten Versuch … · {3} Durchläufe» read «1 Durchläufe». → «Durchläufe: {3}».

### Unnatural wording: 29 (examples)
- **Deck meanings and notes:**
  - *go on* «weitermachen / los sein» → «weitermachen / passieren»;
  - *Low-key* «Irgendwie heimlich / Ein bisschen» → «Insgeheim / Irgendwie schon» (deck and EXAMPLES);
  - *I'm obsessed with this song* «Ich bin total besessen von diesem Song» → «Ich bin total süchtig nach dem Song»;
  - *Good afternoon* «Ein allgemeines „Guten Tag“ gibt es nicht» → «Für das allgemeine „Guten Tag“ gibt es keine feste Entsprechung»;
  - *Have a good one!* «Sagen Kassierer oft» → «Hörst du oft an der Kasse» (gender-neutral);
  - «Mit anderem Ziel passt der Satz überall» → «Das Ziel kannst du beliebig austauschen»;
  - «Zeig im Taxi den Bildschirm» → «die Adresse auf dem Handy»;
  - *breakfast* «nicht „Breakfast“ wie geschrieben» (unclear) → «"ea" wie das „e“ in „Bett“, und "fast" wird zum schwachen /fəst/»;
  - *delicious* «nicht hinten wie bei „deliziös“» (a rare word) → «und "ci" klingt wie „sch“».
- **PAUSE, DIALOG, EXAMPLES:**
  - «Mit dir wird es überall heller» (*You light up the room*) → «Du bist ein echter Sonnenschein»;
  - «Guter Punkt» (*Good point*, calque) → «Da ist was dran»;
  - «Schön, dich zu sehen (jemanden, den du kennst)» (wrong case) → «(zu jemandem, den du kennst)»;
  - «Lass uns teilen.» → «Lass uns die Rechnung teilen.»;
  - «einen großen Eis-Latte» → «Iced Latte», as with *Iced Americano*.
- **Lessons:** a1 `the` type «Wo ist die Station?»: its `why` said «weil es der Bahnhof hier ist» → «die Station hier» (the prompt stays, because «Bahnhof» would lead to *train station*, which the parity-bound list rejects); a2 articles-2 «Beim Plural geht es dir wie im Englischen» → «Beim Plural ist es im Deutschen wie im Englischen»; meta.js «Begrüßen und verabschieden, und natürlich darauf antworten» → «Begrüßen, sich verabschieden und natürlich antworten».
- **Interface:**
  - «Board» (3 strings) → «Pinnwand» («Regeln», «auf der öffentlichen Pinnwand», «Die Pinnwand der Community…»; «Feedback board» is counted under formatting);
  - `#social` «#soziales» → «#kontakte»; `#skills` «#skills» → «#knackpunkte»;
  - «kein Feedback bis zum Ende» (quiz mode) → «Auflösung erst am Ende»;
  - «Hinzugefügt. Sie erscheint heute unter Abfrage.» («Sie» reads as formal *you*) → «Die Karte erscheint heute unter „Abfrage“.».
- **Roadmap:** «Pinyin: Initialen und Finalen» → «Anlaute und Auslaute» (as in the Vietnamese row); «Laute und Survival-Phrasen» → «Laute und das Nötigste»; «Verben der Bewegung» → «Bewegungsverben».

### Pron: 0 IPA edits
- pron_check: every transcription that zh-en or pt-en also has is identical. The 34 new words (false friends, *wine/vine*, names) follow zh §A–§D and are recorded in PRON-RULES §1–§3, with the hand-written rows for names and function words (*will* strong in citation, stranded *at*).
- Respelling and stress-notation fixes are counted under formatting (PRON-RULES §4).

### Formatting and consistency: 36
- **Respelling convention (PRON-RULES §4):** an error written with English letter values goes in straight quotes or `<i>`, because a German reader reads „wery“ with German *w*. Changed: *Thank you* «„sank you“ oder „tank you“» → straight quotes; *worked* «Nie „wor-ked“» → «Nie zweisilbig wie "work-ed"»; pron body «„wery“» → *wery*; articles table «a one-way ticket (klingt „wan“)» → «(beginnt mit /w/)»; *comfortable* «Nicht wie „komfortabel“ auf "ta"» → «Nicht auf „ta“ wie bei „komfortabel“»; numbers body «sagt man „oh“» → *oh*.
- **One error, one citation:** «„Gibt es“ … nicht "Gives it"» → «nie "Does it give"», as on the ATM card.
- **Sentence-initial tense names:** «simple past: "hung out"» → «Im simple past: …» (×2); «present perfect, nicht …» → «Im present perfect, nicht …»; PATTERNS «simple past: abgeschlossene Handlungen…» rewritten so the sentence starts with a German word.
- **Same English, same meaning:** *Could you say that again?* «Könntest du das wiederholen?» in lessons.js (was «Kannst du das noch mal sagen?»); *Life is hard* «Das Leben ist hart» in more/a1.js (body, example row, order prompt).
- **Interface: «Meinung» follow-through (15 strings).** The tab now reads «Meinung», but the page and messages still said «Feedback». Now:
  - «Nutze den Tab „Meinung“», «Deine Meinung» (text field), «Meinung senden», «Meinungen der Community», «Meinungen aktualisieren»;
  - «Die Meinungen konnten gerade nicht geladen werden.», «Noch keine Meinungen – mach den Anfang.», «Meinungen senden kannst du in der Website-Version.»;
  - «Pinnwand» for *Feedback board*;
  - account deletion (3 strings) «deine Beiträge unter „Meinung“»; «schreib uns unter „Meinung“»; «Meinung · Schnellaktionen»; «{1}/{2} · Meinung».
  - The page heading «Sag uns deine Meinung» already matched. «Vibrationsfeedback» is haptic feedback and stays.
- **Interface = course:** plan names now match meta.js PLAN_PRESETS («Auslandsreise» → «Eine Reise vorbereiten», «Freundschaften & Dating» → «Freunde auf Englisch finden»); «Reisen & Unterwegs sein» → «Reisen & unterwegs sein».
- **Roadmap:** «CEFR» → «GER», the German name of the framework (3 titles; profile §5 «B2 des GeR»).

### Interface decisions (checked, no change)
- **Tab bar** `Heute · Üben · Abfrage · Lernen · Training · Profil · Meinung`: kept.
  - «Meinung» (7) stays. «Forum» (5) suggests open discussion, «Kontakt» (7) suggests a private channel (the board is public), «Ideen» leaves out bug reports, and «Meinungen» (9) is too long. «Meinung» also matches the page heading «Sag uns deine Meinung».
- **Left identical to English:**
  - `Good afternoon`: this is the English greeting line (`GREET_T` in src/app.html), and greet() puts the German line under it from the key `Good afternoon` → «Guten Tag». Kept;
  - `Standard · 5`: «Standard» is German; it mirrors «Kurz · 2 Min.» / «Lang · 10». Kept;
  - `Audio`, `Quiz`, `Mix`, `XP`, `Enter`, `⚡ Blitz`, `normal`, `standard`: normal German words or key names. Kept;
  - `#skills`: changed (above);
  - `Mo`, `Fr`, `Sa`: German weekday abbreviations, part of «So Mo Di Mi Do Fr Sa». Kept;
  - `Sensei`, `Lang App`, `DELETE`, `QUIZ`: Korean-course title, product name and typed or drawn tokens. Kept.
- **Count patterns:** after the fix, every count follows a colon, sits in «{1} von {2}», or stands next to an invariable unit («{1} XP», «{1} Min.», «{1} Pkt.»).
- **Language-name slots:** none follows an article or a genitive: «auf {1} schreiben», «{1} lernen», «Wie viel {1} kannst du schon?».
- **Feedback wording:** «Richtig!» / «Nicht ganz», buttons «Prüfen», «Weiter», «Erneut versuchen», as in profile §10. Kept.
- **Level titles** «Neuling · Lernfuchs · Plaudertasche · Reiseprofi · Insider · Ass · Legende»: identical in meta.js and ui.json; none marks the user's gender. Kept, flagged below.

## 2. Edit counts per file

| file | lines / strings | wrong/misleading | unnatural wording | pron | formatting | total |
|---|---:|---:|---:|---:|---:|---:|
| decks.js | 535 | 9 | 10 | 0 | 7 | 26 |
| extra.js | 297 | 2 | 6 | 0 | 1 | 9 |
| meta.js | 69 | 0 | 1 | 0 | 0 | 1 |
| lessons.js | 252 | 5 | 0 | 0 | 4 | 9 |
| practice.js | 232 | 3 | 0 | 0 | 0 | 3 |
| more/a1.js | 494 | 6 | 1 | 0 | 3 | 10 |
| more/a2.js | 275 | 0 | 1 | 0 | 0 | 1 |
| more/b1.js | 159 | 0 | 0 | 0 | 0 | 0 |
| ui.json | 1041 strings | 1 | 7 | 0 | 18 | 26 |
| roadmap.json | 425 titles | 0 | 3 | 0 | 3 | 6 |

(The pron column counts IPA edits; respellings and stress notation are under formatting.)

**Verdict: the decks and dialogues (stronger model this time) are better than in pt/it but still not quite on a par with the lesson files. The interface files (cheaper model) are not noticeably weaker.**
- Rates use fully read files only.
  - decks.js + extra.js: 35 edits in 832 lines (4.2 per 100);
  - lessons.js + practice.js: 12 in 484 lines (2.5 per 100);
  - more/*.js: 11 in 928 lines (1.2 per 100); all lesson files together 1.6 per 100.
- Decks/dialogues are about 2.6 times the lesson-file rate, against 5 times in pt and 14 times in it.
- Wrong or misleading edits are close: 11 in decks/extra (1.3 per 100) against 14 in the lesson files (1.0 per 100).
- The deck errors are the predicted kind, but fewer: Spanish-course leftovers (*win money*, the *recommend* spelling, the subject note, capitalisation notes that hold for German too), a false claim about English (*with card*) and a few literal glosses (*besessen*, *Guter Punkt*, *Mit dir wird es überall heller*).
- The deck German is otherwise idiomatic, consistently *du*, and correctly punctuated. The German-specific notes (*bekommen/become*, *Hier ist Ana*, *Homeoffice*, «halb vier», *billion*) are accurate.
- The lesson files explain from German grammar throughout and avoid all three recurring teaching errors (no "action" rule for *do*, the *some* exception for requests and offers, the -ing heading). Their slips are single wrong words (*anhalten*, *müde*, *Eiskaffee*, *anfangen*).
- ui.json: 26 of 1,041 strings changed. 15 are follow-through from the lead's tab rename, and 3 more are «Board» → «Pinnwand». Only one string was wrong (a count pattern). roadmap.json needed 6 small fixes in 425 titles. Neither file is weaker than the interfaces reviewed for pt and it. ui.json was only scanned, so its rate is not fully comparable.

## 3. For a native speaker: top ten
1. **Tab «Meinung»** and its follow-through («Meinung senden», «Meinungen der Community», «Pinnwand», «Beiträge unter „Meinung“»). Natural, or is «Forum» better?
2. **Level titles** «Lernfuchs», «Plaudertasche», «Insider», «Ass» (*Student, Talker, Local, Pro*). Do they work as badges?
3. **Tags** «#knackpunkte» (`#skills`: pronunciation traps, false friends, phrasal verbs…) and «#kontakte» (`#social`).
4. **Tab labels «Abfrage» (Review) and «Lernen» (Lessons)**, where the pages say «Wiederholung» and «Lektionen».
5. **PAUSE glosses:** «Du bist ein echter Sonnenschein» (*You light up the room*), «Da ist was dran» (*Good point*), «Bleib hungrig, bleib verrückt» (*Stay hungry, stay foolish*), «Langsam, aber sicher kommt man ans Ziel» (*Slow and steady wins the race*).
6. **Slang deck:** «Ich bin total süchtig nach dem Song», «Insgeheim / Irgendwie schon» (*low-key*), «Der Song ist der Hammer» (*slaps*), «Ich lach mich tot» (*I'm dead*), «Erzähl schon, was ist passiert!» (*Spill the tea*). Current enough?
7. **Calques kept:** «Das tut mir leid zu hören» (*I'm sorry to hear that*) and «Schön, mit dir geredet zu haben» (*It was nice talking to you*, in 3 places).
8. **IDIOMS:** «Die Chance verpassen» + «Der Zug ist abgefahren» (*miss the boat*), «Ohne Fleiß kein Preis» (*no pain, no gain*), «Hals- und Beinbruch» (*break a leg*), «Alle Jubeljahre» (*once in a blue moon*).
9. **pron lesson wording:** the reference sounds («ö» in «Löffel» without rounded lips for /ɜː/, «Mann» for /ʌ/) and the new «Lass die Stimme beim letzten Laut weiterlaufen».
10. **IPA of names the en-US voice must say:** Berlin /bərˈlɪn/, Hamburg /ˈhæmbɜːrg/, Lukas /ˈluːkəs/, Kafka /ˈkɑːfkə/, Ana /ˈænə/. Check against the audio.

## 4. Found but not fixed (outside my scope)
- **DECKNAMES.md** keeps the Spanish deck names in its "Spanish deck" column. It is the only Spanish text under tools/content/de, and the file is marked "FINAL — set by the lead; do not change".
- **Profile §10** still lists the tab as «Feedback» (page «Sag uns deine Meinung»). The lead's rename to «Meinung» should be recorded there.
- **Labels next to a big number** (`day streak` «Tage in Folge», `cards learned` «Karten gelernt») read «1 Tage in Folge» at 1, as in pt, fr and it. They are exact labels, so the English key or the engine has to change.
- **Shared English roadmap:** «GER-Reihenfolge A1–B1, angepasst für Koreanischsprachige» and «Aussprachefallen: R/L, F/P, TH» are correct translations, but they describe the Korean-speaker course. That is the wrong message for a German learner; the English source needs a change.
- **Korean-only interface text** (the reading drill «Schreib die Lautschrift auf. Englische Wörter bestehen aus Silben…», `Senior` «Urgestein», `Sensei`) is still reachable in ui.json. The engine should hide it for non-Korean courses.
- **Parity-bound English that reads oddly to German learners** but must stay:
  - Hispanic places and names in practice items (Lima, Bogotá, Cartagena, Santiago, Buenos Aires, Carlos, Sofía, Isabel Allende), as profile §9 allows;
  - the Spanish-origin distractors *I no eat meat*, *Pizza likes me*, *You're taking my hair*, *I stay waiting your answer*. Their `why` lines explain the right English.
- **Shared typed item that rejects a natural answer:** it-there «Heute ist es heiß» accepts only *It's hot today*, not *Today it's hot*. The prompt cannot be made more specific without sounding odd; the accepted list is parity-bound.
- **Register mix in one deck:** «Können Sie das aufschreiben?» (*Can you write it down?*) uses *Sie* among *du* cards. It is a service sentence, so profile §2 allows it; left as is.
- **Lint meaning variants (22):** almost all differ only in a final period (lessons.js meanings end with «.», more/*.js ones do not) or a parenthesis («Es regnet (gerade)»). Two differ in wording but fit their contexts: «Geht's dir gut? / Alles in Ordnung?» (*Are you okay?*) and «Ich bin Student / Studentin» vs «Ich bin Student.» (the articles lesson shows the German form without article).
- **i18n validate:** 2 warnings. (1) 14 strings identical to English, all reviewed above (15 before: `#skills` was changed). (2) 35 possible-overflow labels (34 before). New: «Eine Reise vorbereiten» (plan name, now identical to the meta.js label the course shows anyway). Gone: none. The main screens were measured by the lead; **`#knackpunkte` (12 characters) is new on a main-screen chip and should be re-measured at 390px.** road.py notes `Futur simple` and `Passato prossimo` as identical to English: correct names of French and Italian tenses.

## Checks (final run)
```
PASS: all checks OK                                   (validate.js de)
PASS: shared English side matches ko-en               (parity.js de)
lint de: 0 blocking · 22 meaning variants (info) · 0 K-pop leftovers (info)
exact=769 patterns=272 warnings=2 / PASS              (i18n validate.js de)
roadmap strings 425/425 translated                    (road.py check de)
node --check: all 9 JS files OK (incl. pron_check.js)
pron_check: phrase conflicts 0 · word conflicts 2 (will, new / New York, intended) · rule hits 0 · differs from zh: phrases 0, words 5 (intended) · differs from pt: 0, 1
Spanish / Hangul scan over tools/content/de: no hit outside DECKNAMES.md
```
