# ceb-en cold review (CEB-REVIEWER), 2026-11-23

**Who reviewed.** A cold reader who wrote none of the course. **Not a native Cebuano speaker**: the brief asks for a native-level editor, and that was not available. Corrections are therefore limited to things that can be decided without a native ear: teaching errors, items carried over from the Korean course, house-spelling and terminology inconsistencies, Tagalog, prompts that did not lead to the accepted answer. Wherever a Cebuano wording only *felt* doubtful, it was left alone and listed in §4.

**Scope edited.** Files under `tools/content/ceb/` (not profile.json, not the deviations files, not DECKNAMES.md) and one `"t"` in `tools/i18n/ceb/roadmap.json`. `tools/i18n/ceb/ui.json` was **not** edited (it serves the live Cebuano → Korean course); interface findings are in §5. No English that parity compares changed. New files: `PRON-RULES.md`, `pron_check.js` (zh checker, paths changed). Nothing committed.

**Overall.** The course is in good shape. No Korean characters, no Korean-course explanations in the lessons, no `<em>`, no *pwede / kung / jud / mu- / po*, he / she cues on every gendered prompt, time cues on tense prompts, the three teaching errors named in PHASE2-BRIEF are absent (the `be` tip asks "is there another verb?", `countable` has the request / offer exception for *some*, `to-ing` has a neutral -ing heading). All 850 transcriptions agree with each other and with the zh course. Most of the 86 edits are house-spelling and terminology unification between the five writers.

## 1. What changed (86 edits)

### Wrong or misleading teaching: 10
- **Carried over from the Korean course (decks.js 2).**
  - *hang out*: «Sa mga hamtong, "hang out" ang gamiton, dili "play"» is the Korean 놀다 trap; Bisaya speakers do not say *play* for this. → «Sama sa atong "tambay" uban sa mga higala: "Let's hang out this weekend." Ang "play" para sa dula ug sports».
  - *Can I get an iced Americano?*: «Dili "ice Americano"» is the Konglish note. → «Mao sab ang "iced tea": dili "ice tea"» (the form Filipinos actually write).
- **False about English (decks.js 1).** *For here or to go?*: «Iningles sa Pinas: "dine in or take out"» called a normal American phrase Philippine English. → «Sa atoa, "Dine in or take out?" ang kasagarang pangutana. Sa Amerika, "For here or to go?" ang imong madungog».
- **The prompt taught the opposite of the card (lessons.js 1, practice.js 1).** The deck card says *by Friday* = «dili molapas sa Biyernes» and *until Friday* = «padayon hangtod sa Biyernes». The `email` lesson row and the `email` gap-fill translated *by* as «hangtod sa» while offering *until* as a wrong option. → «sa dili pa molapas ang Huwebes / Biyernes»; the `why` now states the difference.
- **A `why` that explained a different item (practice.js 1).** `prep`, *I live in Seoul*: «Ang "ang" sa Bisaya dili "the"» (the prompt has no *ang*). Sentence removed.
- **Natural answers that were not accepted, ceb-only lessons only (a1.js 1, a2.js 3).** The engine does not expand contractions. Added full forms: `pinoy-english` *She does not work here anymore / She is not working here anymore*; `aspect-tense` *I have not read the books yet / I still haven't read the books*, *He is reading a book (now / right now)*, *He is no longer working at the bank / He does not work at the bank anymore*.

### Unnatural wording, Tagalog and terminology across files: 23
- **Tagalog (extra.js 1).** «Sa wakas, naa nay adlaw» → «Sa kataposan, naa nay adlaw».
- **One word per thing.** Five writers, several words:
  - *phone*: cellphone (6) / selpon (2) / telepono (19) → **telepono** everywhere (the decks' word; profile §9).
  - *exam*: exam / eksamin → **eksamin** in Cebuano prose (3 edits; see §5 on the interface's «Exam»).
  - *know / find out*: nahibaw-an, mahibaw-an → **nahibaloan, mahibaloan** (26 existing uses; 5 edits).
  - *a form to fill out*: «porma» → **form**, as on the deck card; «porma» stays for "porma sa verb" (2).
  - *meals*: «kaon» → «pagkaon sa adlaw», as in the `articles` lesson (2).
  - «Sa kaswal nga American» → «Sa kaswal nga Iningles sa Amerika».
  - «Naa kini duha ka T» → «Naa kiniy duha ka T».

### Pron: 0
Nothing conflicted (see `PRON-RULES.md`).

### Formatting and house spelling: 53
- matinahuron / matinahurong → **matinahoron / matinahorong** (19; root *tahod*, profile §2 "keep the root's vowels"; the decks already had it).
- okey → **okay** (11; the decks and the interface use *okay*).
- kwarto → **kuwartoha / kuwarto** (3), sweldo → **suweldo** (2), nuybe → **nuwebe** (2), miaging → **niaging** (1, *ni-* rule), kagabii → **gabii** (1), sangpotanan → **sangpotan** (1), Binisaya → **Bisaya** (1), «Daghan kog» → «Daghan ko og» (1).
- America / American / Britain inside Cebuano sentences → **Amerika / Amerikanong / UK** (9).
- English words under discussion were in `<i>`: `<i>look after my cat</i>` → `<b>` (1).
- roadmap.json: «pagsulti sa spelling» → «pagsulti sa ispeling», as the lesson title has it (1).

## 2. Edit counts per file

| File | wrong / misleading | unnatural wording | pron | formatting / house spelling | total |
|---|---|---|---|---|---|
| decks.js | 3 | 3 | 0 | 0 | 6 |
| extra.js | 0 | 6 | 0 | 0 | 6 |
| lessons.js | 1 | 2 | 0 | 25 | 28 |
| practice.js | 2 | 2 | 0 | 17 | 21 |
| more/a1.js | 1 | 4 | 0 | 2 | 7 |
| more/a2.js | 3 | 2 | 0 | 5 | 10 |
| more/b1.js | 0 | 4 | 0 | 3 | 7 |
| meta.js | 0 | 0 | 0 | 0 | 0 |
| i18n/ceb/roadmap.json | 0 | 0 | 0 | 1 | 1 |
| i18n/ceb/ui.json | not edited | | | | 0 |
| **Total** | **10** | **23** | **0** | **53** | **86** |

Counts are replaced occurrences (a spelling fixed in 8 places counts 8). Edits were applied by a script that asserted the expected number of occurrences of every old string.

## 3. What was read and what was only scanned

**Read in full:** decks.js (every meaning and note of all 22 decks, 433 cards); extra.js (DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS); meta.js; lessons.js (12 bodies, 36 checks); practice.js (12 sets); more/a1.js, a2.js, b1.js (30 bodies, 90 checks and every practice item with its `why`); the 39 English-roadmap titles and the 40 Korean-roadmap titles in roadmap.json; profile ceb.md §1–§4, §6–§11.

**Checked by script, not by eye:** every transcription (pron_check.js, and a string comparison with the zh course); spelling variants (grep lists for about 60 word families).

**Scanned only:** ui.json (784 keys, 275 patterns). Read: tab labels, level titles, feedback strings, weekday headers, pronunciation-setting keys, the Korean-worded keys, and every pattern with a count slot (about 230). The other exact keys were not read. Count patterns were checked by reading, not by rendering at 0 / 1 / 2 / 5 / 21: all use «{n} ka X» with no plural word, so they read the same at every number.

**Not done:** `link_roadmap.py --check` (needs a built pack); `road.py check ceb` (it asserts a 2-letter code and stops); the audio clips for the name transcriptions; a 390px render of the tab bar.

## 4. For a native speaker: check these first

1. **The explanation frames that repeat hundreds of times.** «Unsay sakto sa blangko?», «… sa Iningles?», «Hain ang sakto nga sentence?», «Human sa "X", base form ang sunod», «mao nga article "a"», «Ang "X" kay "Y"». If one sounds off, it sounds off on every screen.
2. **matinahoron vs matinahuron, kataposan vs katapusan.** This review unified to the root-vowel forms the profile prescribes (*matinahoron*, *kataposan*, *kahulogan*). The live Cebuano → Korean course and the interface print *matinahuron* and *katapusan*. Which does a Cebu reader expect?
3. **Verb forms chosen for habits and for "now".** «Motrabaho sila kada Sabado ug Domingo» (*They work on weekends*), «Moinom ko og kape kada buntag», «Wala ko natulog» (*I'm not sleeping*), «Wala na siya nagtrabaho dinhi», «Nitan-aw mi og salida» against «Nakatan-aw ko». The `aspect-tense` lesson is built on these mappings (*nag- / ni- / mo- / na / pa*): check its whole table.
4. **Short forms that vary between files and were left alone:** «Tawgan tika» (7) vs «tawagan» / «Tawagi» in decks and extra, «tawgi» vs «tawagi»; «Puwede nimo balikon» vs «Puwede nimong balikon»; «ni» vs «kini»; «inadlaw-adlaw» vs «adlaw-adlaw».
5. **The Bisaya sound anchors in the `pron` lesson:** «"sy" sa *syudad*» (the house spelling is *siyudad*, so the anchor contradicts it), «"dy" sa *dyip*», «"ts"», «"e" sa *kape*», «"o" sa *oras*, mas taas», «tunga-tunga sa "i" ug "e"», «ngisi ang ngabil», «mokurog ang tutunlan».
6. **Greetings and set phrases on cards:** «Babay!», «Uy!», «Pahalipay kanimo!», «Walay sapayan», «Tabi / Kadiyot lang», «Nagtahod,», «Gipasigarbo tika», «Lagi, no?» / «Bitaw, no?», «Hay, salamat!», «Hala uy!», «Ania o».
7. **Clock and number wording:** «Kinse minutos na lang para alas singko» (*a quarter to five*), «Kinse minutos human sa alas diyes», «Sunod ugma» (*the day after tomorrow*), «mil kinyentos», «dos siyentos singkuwenta», «alas nuwebe» (unified from *nuybe*), «Baynte singko anyos na ko».
8. **The culture claims in `smalltalk` and `polite`:** that «Nakakaon na ka?» and «Asa ka padulong?» are felt as greetings; that «Pila na imong edad?», «Minyo na ka?», «Nanambok man ka!» are signs of closeness; that «Palihug ko og tubig» is fully polite; that "plastic" is what people call a bag and "McDo" McDonald's.
9. **Glosses for words with no everyday Bisaya equivalent:** «sukdanan og sinina» (fitting room), «kuhaanan sa bagahe», «kaha nga lutoanan» (pan), «punoan sa kahoy», «hagong sa buyog» / «hagong sa putyokan» (two words for *buzz*), «buolbuol», «muwebles», «eksamin», «telepono» for a mobile phone (people may say *selpon*), «form» for a paper form.
10. **Deck and lesson names, and the level titles:** all 22 deck names (profile §11 list), «Mga lit-ag para sa Bisaya», «handurawan ug pagmahay», «Pasiuna sa phrasal verb», «Tig-istorya», «Hanas», «Agalon», pause label «Panultihon».

## 5. Found but not fixed (out of scope or for the lead to decide)

**Parity-bound English (shared with ko-en):**
- `idioms` gap-fill *Speak of the __!* has the wrong option **tiger**: the Korean proverb. Harmless as a distractor, but it is a Korean leftover.
- `email` check 2 options *You suffered a lot. / Good suffering.* are literal 수고하셨습니다; the Cebuano question and `why` are neutral, but the options puzzle a Bisaya reader. The lesson section «Unsaon pagpasalamat sa kahago?» exists only because of that item.
- Korean places and names stay in shared items (*Seoul, Busan, Jeju, Daegu, kimchi, won, K-pop, Han Kang, Mr. Kim, "under Kim"*, card *Who's your bias?*), as profile §9 decides. A bulk localisation deviation is the lead's call.
- Shared typed items accept only contracted forms in places (*I'm cooking now* but not *I am cooking now*). The engine does not expand contractions. Same in every course.

**Interface (ui.json not edited):**
- Tab **Progress = «Pag-uswag»** is 9 characters (cap 8; profile §10 proposes «Uswag»). «Drill» is already fixed.
- **katapusan / Katapusang** (8 strings) against *kataposan* in the course (42 uses); **nahibal-an** («Unsa ka daghan ang imong nahibal-an sa {1}?») against *nahibaloan*; **motokar** («motokar sa paglitok») against *motukar* in the course.
- Level title **Pro = «Pro»** in ui.json, **«Hanas»** in meta.js TITLES; the other six agree.
- «Exam» is an interface feature name; the course writes *eksamin* for a school test.
- Language-name slots still receive "English" from `Intl.DisplayNames` («Tun-i ang English»): profile §10 item 5, open.
- «Type the {x}, or tap Check again» → «I-type sa {1}, …» while the exact key says «I-type ang Iningles».
- 23 Korean-worded keys (*Koreano, Hangul, romanization*) remain, correctly for ceb-ko; whether ceb-en can reach any of them is untested (profile §10 item 4).

**Roadmap:** the basis line reads «Han-ay sa CEFR A1-B1, gipahaom para sa mga nagsulti og Koreano», a literal translation, as in de / zh / id; for this course it should say Bisaya speakers, which needs an engine or roadmap change. The title «Mga lit-ag sa paglitok: R/L, F/P, TH» names R/L, which the lesson tells Bisaya speakers is easy; the lesson's own title is «F/P, V/B, TH, S/Z ug stress».

**Lead decisions:**
1. *matinahoron / kataposan* (profile rule, now consistent in ceb-en) or *matinahuron / katapusan* (interface and ceb-ko).
2. *weekend* inside Cebuano prompts (lessons.js, practice.js: «Kumusta ang imong weekend?») against «Sabado ug Domingo» in decks, extra and a1. Left as is: both are consistent within their files, and the profile limits code-switching to glossary terms.
3. `deviations.json` still lists `lessons: pinoy-english, aspect-tense`, which parity reports as unused (WARN, not a failure).
4. `tools/content/lint.js` and `tools/i18n/road.py` reject 3-letter codes; lint was run from a temporary copy with the pattern widened.

## Check output (scratch pack, after the edits)

```
node tools/content/gen.js ceb <scratch>            wrote … 367056 bytes
node tools/content/validate.js ceb <scratch>       PASS: all checks OK
node tools/content/parity.js ceb <scratch>         PASS: shared English side matches ko-en
lint (line 10 widened to {2,3})                    lint ceb: 0 blocking · 25 meaning variants (info) · 0 K-pop leftovers (info)
node tools/content/alphabet_check.js ceb <scratch> PASS alphabet ceb: lesson 1, deck 21 «Alpabeto» with 26 cards, English side matches the spec
node tools/content/ceb/pron_check.js               pairs 850 · words 805 · phrase conflicts 0 · word conflicts 1 · rule hits 0
python3 tools/i18n/gen.py ceb <scratch> + validate exact=784 patterns=275 warnings=2 · PASS
node --check on every edited JS file               ok
grep for Hangul under tools/content/ceb            none
```

## Pre-merge review, 2026-11-23

Second cold reader, also **not a native speaker**. Review read-only on PR #13, then applied here after the merge.

**Changed.**
- Review findings (12):
  - decks: *Can you lend me your pen?* meaning → «Puwede ko nimo pahulamon sa imong bolpen?» (was "borrow"). *I hope this email finds you well.* → «Hinaot nga maayo ra ka». *I'm so happy for you!* note no longer calls "so very happy" wrong.
  - lessons: `polite` «Matinahuron kaayo» → «Matinahoron kaayo», and check option «~ing (opening)» → «-ing form (opening)». `pron` «*syudad*» → «*siyudad*».
  - more: a1 *I'm not sleeping.* → «Wala ko natulog (karon)». a2 `aspect-tense` *did not arrive yet* ✗ is now limited to «Sa eksamin ug pormal nga sulat».
  - practice: `prep` prompt «… (panamilit)», `smalltalk` prompt «… (nahuman na)».
  - i18n: roadmap title «Mga lit-ag sa paglitok: F/P, V/B, TH». NOTES.md §3 and §6 now match ui.json: the Progress tab is still «Pag-uswag», and only *Drills* and *Text size* changed.
- Typed-answer pass. Script over all 127 type items in the pack:
  - 1 prompt cued: `past` «… (gamita ang "watch")».
  - 5 answers added: `it-there` *It's hot now*; `countable` *May I have some water*; `tense` *…working at home today*; `perfect` *I've already read the book / that book*; `relative` *The movie (that) we watched…*.
  - 2 person mismatches fixed: `first-conditional` «Mabiyaan **ka**» drops we / I; `phrasal` «Nahutdan **mi**» drops I.
  - Full forms: none missing in the pack.
- Localisation (profile §9):
  - Places and culture: Seoul→Manila, Busan→Davao, Jeju→Bohol, Daegu→Cebu, Korea→Manila / Bohol / Cebu (and Japan for the country-without-article item), Korean→Cebuano / Japanese (*Hinapon*), kimchi→balut, won→pesos, K-pop→OPM, Han Kang→Jose Rizal.
  - Kim→Santos (deck, DIALOG, PRON-RULES). *Who's your bias?*→*Who's your favorite character?* (as es).
  - Distractors: *tiger*→*dog*; `email` *You suffered a lot. / Good suffering.*→*More power! / Good day to all!*.
  - All declared as `items` / `decks` entries in deviations.json.
- Not changed:
  - The R/L pairs (rice / lice, right / light) in «Bantayi ang paglitok». The lesson already presents R/L as easy for Bisaya speakers, and F/P and coffee / copy are real Bisaya traps. Replacing them would also mean rewriting the `pron` practice items.
  - Variant glosses (fool, bad, nakaistorya ta / tika).
  - `tools/content/ceb/ui.json`: its 27 values follow the house spelling.

**For the native speaker (left unchanged):**
- «Ako sab, dili» (*Me neither*) → «Ako sab dili»?
- «Nalingaw kaayo ko nga nakauban ka»
- «Gipasigarbo tika»
- «Giunsa nimo pag-antos ang kainit?» (a completed form for a habit; «Unsaon nimo pag-agwanta sa kainit?»?)
- «Pila mo kabuok?»
- «Puwede ko makakuha og…» for ordering
- «hagong sa buyog / putyokan»
- *hotel* = «kapuy-an sa mga biyahero»
- «Letra» for *Text size*
- The new localised prompts: «Nakakaon na ka ba og balut?», «Gihimo kini sa Cebu», «Gisulat kini ni Jose Rizal», «Naa koy higala nga makasulti og Hinapon», «Kinsa imong paboritong karakter?».
