# cs-en · cold review

Reviewer role: native-level Czech editor and English teacher, reading the finished course and the interface dictionary cold. Corrections were made in place. 119 edits in 8 files; the English side of every parity-bound item is untouched, and no pron was changed (the pron check came back clean).

## 1. What changed

### Wrong or misleading (9)

- Carry-overs from the Korean source that say nothing true to a Czech learner:
  - `turn on` note: «Světlo se anglicky „neotvírá“.» → «Platí pro světlo i přístroje: české „rozsvítit“ i „zapnout“ je anglicky „turn on“.» (Czech never "opens" a light.)
  - `hang out` note: «Dospělí si s kamarády „nehrají“…» → «Neformální výraz pro společně strávený volný čas: „We hung out at my place.“ Minulý tvar je „hung“. Sloveso „play“ se hodí jen pro děti, hry a sport.»
  - `milk` note: «Za „k“ nepřidávej žádnou samohlásku.» removed (Czech speakers do not add one).
- `specific` card and the czenglish table said «concrete» is "mainly beton". "A concrete example" is normal English, so the note now reads «„concrete“ je hlavně beton, případně „hmatatelný“. České „konkrétní“ je většinou „specific“…», and the table cell is «beton, betonový; hmatatelný».
- `The party was fun.` was labelled «Falešný přítel» although «zábavný» and «funny» are not look-alikes → «Pozor: …».
- `It's three thirty.`: «Britsky také „half past three“» → «Říká se i „half past three“» (Americans say it too).
- Adjectives quick check: «Krátké slovo přidává -er a koncová souhláska se zdvojuje.» → «…-er; po krátké samohlásce se koncová souhláska zdvojuje.» (the old wording also predicted "cheapper").
- Small-talk fill item «Have you seen any good __ lately?» had the prompt «…něco dobrého?», which does not lead to the accepted answers «shows / movies» → «…nějaké dobré filmy nebo seriály?».

### Unnatural wording (11)

- «latté» → «latte» (Czech spelling; 4 places plus 2 capitalised in practice explanations).
- «České „učit“ jsou dvě slovesa» → «Českému „učit“ odpovídají dvě slovesa».
- «S hlasem nahoru na konci» → «Se stoupavou intonací»; «ukazovák» → «ukazováček».
- perfect-3 heading «Stejné slovo, dva časy» → «Stejné sloveso, dva časy».
- Interface: «Dokonči balíček týdne a jeden získáš.» → «Dokonči balíček týdne a získáš odznak.»

### Lead decisions applied (formatting / consistency, 99)

1. **Verb register** (26): everyday first-person forms everywhere outside formal writing. «Pracuji v bance» → «Pracuju v bance», «Potřebuji lékaře» → «Potřebuju lékaře», «Děkuji» → «Děkuju», «Ó, děkuji!» → «Jé, děkuju!». Kept on purpose: «Děkuji za odpověď», «Děkuji vám za všechnu odvedenou práci» (deck «Práce a e-maily») and the email lesson («Děkuji za trpělivost», «Předem děkuji.», the quoted «dovoluji si požádat»). The interface dictionary had no -uji form.
2. **Gendered first person** (10): single gendered word stays «X / Y», masculine first (already consistent, about 150 places). Sentences with two gendered words now show one gender, alternating from sentence to sentence, as the B1 writer already did: «Byl jsem unavený / byla jsem unavená» → «Byl jsem unavený»; «Jsem unavený, ale šťastný / unavená, ale šťastná» → «Jsem unavená, ale šťastná»; «Měl / měla jsem hlad, a tak jsem jedl / jedla» → «Měl jsem hlad, a tak jsem jedl»; «Jen jsem si četl / četla a spal / spala» → «Jen jsem si četla a spala».
3. **Czech quotes around English in titles and blurbs** (12): «Předložky in / on / at» → «Předložky „in“ / „on“ / „at“»; «Vztažné věty: who a that» → «Vztažné věty: „who“ a „that“»; blurb «She said she was tired. Čas se…» → «„She said she was tired.“ Čas se…».
4. **Level titles** (4, interface): the pack shows `TITLES` from `meta.js`, so the interface was aligned to it: Student «Hlavička» → «Učení», Talker «Konverzace» → «Povídání», Pro «Eso» → «Profi», Master «Legenda» → «Mistrovství». `tools/i18n/cs/NOTES.md` was updated to match.
- Non-breaking space after a one-letter preposition where it was missing (44, e.g. «s „will“», «K „you“», «tvar s -ing», interface «Kartička {1} z {2}»).
- Same sentence, same Czech (3): «Dnes pracuju z domova» → «z domu» (as on the card); idiom table «Všechno zlé je k něčemu dobré» → «Štěstí v neštěstí» (as in the idiom set).

### Checked and left alone

- Preposition table «on – na povrchu, v ulici»: correct («bydlím v Dlouhé ulici» = "on Dlouhá Street").
- Email lesson «Poděkování za odvedenou práci se nepřekládá doslova»: true for Czech as well.
- perfect-3 (new English side): every example, quick-check option, practice answer, distractor and pron was read; the English is natural American English and the IPA is correct. Three remarks are in section 5.

## 2. Edits per file

| File | wrong / misleading | unnatural wording | pron | formatting |
|---|---|---|---|---|
| `tools/content/cs/decks.js` | 6 | 3 | 0 | 14 |
| `tools/content/cs/extra.js` | 0 | 1 | 0 | 18 |
| `tools/content/cs/lessons.js` | 0 | 1 | 0 | 9 |
| `tools/content/cs/practice.js` | 1 | 4 | 0 | 1 |
| `tools/content/cs/more/a1.js` | 2 | 0 | 0 | 18 |
| `tools/content/cs/more/a2.js` | 0 | 0 | 0 | 21 |
| `tools/content/cs/more/b1.js` | 0 | 1 | 0 | 6 |
| `tools/i18n/cs/ui.json` (`t` fields only) | 0 | 1 | 0 | 12 |
| **Total (119)** | **9** | **11** | **0** | **99** |

"Formatting" includes the three consistency decisions (register 26, gender 10, quotes 12, level titles 4), the non-breaking spaces (44) and 3 same-sentence alignments. `meta.js` and `roadmap.json` were not changed. New file: `PRON-RULES.md`. `tools/i18n/cs/NOTES.md` got two lines updated for the level titles.

## 3. What was read

- **Read in full, line by line:** `decks.js` (22 decks), `extra.js` (dialogues, examples, patterns, pause sets, idioms), `meta.js`, `lessons.js` (11 lessons and quick checks), `practice.js`, `more/a1.js`, `more/a2.js`, `more/b1.js`; every interface string in `ui.json` (784 exact, 274 patterns) as an English ⇒ Czech list; the 39 filled roadmap titles.
- **Checked by script, not by eye:** pron consistency (865 English–IPA pairs), -uji forms, gender pairs, quote marks, dashes, percent spacing, non-breaking spaces, Korean characters (none), count patterns rendered at 1, 2, 5 and 22 (199 patterns; all use the label + colon + number form, so no agreement problem arises).
- **Only scanned:** `ui.json` metadata fields other than `t`; the unfilled part of `roadmap.json`.
- **Not run:** `link_roadmap.py --check` and `road.py` (unavailable here), `build.sh`.

## 4. For a native speaker: check these first

1. **Everyday verb forms** «pracuju, potřebuju, děkuju» across the course, against «Děkuji» kept in the email deck and lesson. Is the border in the right place (for example «Děkuju, že jste si na mě udělali čas» in a vy-context)?
2. **One-gender sentences**: «Jsem unavená, ale šťastná», «Byl jsem unavený, tak jsem šel domů», «Jen jsem si četla a spala». Does alternating read well, or should both forms be shown in full?
3. **Level titles** «Začátky, Učení, Povídání, Na cestách, Jako doma, Profi, Mistrovství» (and the fallback «Klíček, Stálice, Sensei»).
4. **Rewritten notes** on `turn on`, `hang out`, `specific` and «The party was fun».
5. **Group title «Jako rodilý mluvčí»** in `meta.js` and the interface terms «trénink» (session), «dril», «přihrádka» (box), «problémová kartička» (leech).
6. **Czech equivalents of idioms**: «Stojí to majlant», «Je to hračka / Je to brnkačka», «Štěstí v neštěstí», «Až naprší a uschne», «My o vlku a vlk za dveřmi».
7. **Czenglish lesson and deck** (cs-only): are these the mistakes Czech learners really make («How is it called?», «Can I have a question?», «count with me», «everything what»), and is every "wrong" form marked clearly enough?
8. **Clock times**: «Je půl čtvrté» for 3:30 with the note that Czech points to the next hour; «půl páté» in lesson 9.
9. **Language-name slots** in the interface: «Angličtina: jak jsi na tom?», «Angličtina: k čemu ji potřebuješ?», «Jazyk odpovědi: Angličtina».
10. **Tab labels** «Dnes, Cvičení, Opakovat, Lekce, Čtení, Pokrok, Názor» (mixed noun / verb; «Názor» for Feedback).

## 5. Found, not fixable in this scope

- **Roadmap basis line**: the English source says "adjusted for Korean speakers"; the Czech is a faithful «…upravené pro korejsky mluvící». Left as translated; the source line needs the lead's decision.
- **Korean setting in shared (parity-bound) items**: K-pop, Seoul, Busan, Jeju, kimchi and won appear in shared checks and practice items; card «Who's your bias?» is K-pop fan slang (its Czech note says so honestly). Email quick check has the distractors «You suffered a lot.» / «Good suffering.», which only make sense from Korean.
- **perfect-3**: (a) the wrong option «I'm living here for five years.» is wrong only in the intended meaning; (b) the American note covers only just / already / yet, while American English also accepts «I lost my keys» for a present result, which the lesson teaches as present perfect only; (c) the typed item «Jsem učitel / učitelka od roku 2020» accepts only «I've been a teacher since 2020». Typed answers across the course list contracted forms only («I've…»); whether the engine also accepts «I have…» was not verified.
- **Deck names** contain «a» / «v» without a non-breaking space («Kavárna a obchod»); they are identifiers shared by several files and were left alone.
- **Legacy interface keys** (Korean-UI toggle, conjugator labels such as «zdvořilý přítomný čas») are translated sensibly but describe features an English course does not show.
- **`deviations.json`** produces the warning «unused deviations (stale?): lessons:czenglish, lessons:perfect-3»; that file is outside the review scope.
- Level-title fallback series (Sprout / Senior / Sensei) now mixes two naming styles with the aligned titles; it is shown only if a pack has no `TITLES`.
