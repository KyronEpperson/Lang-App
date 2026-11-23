# Czech (cs) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 39 titles of the English roadmap (the one Czech speakers get) are filled. The other 1,783 strings are empty and fall back to English.

Check (scratch output, live packs untouched): `python3 tools/i18n/gen.py cs <tmp>/i18n-cs.js && node tools/i18n/validate.js cs <tmp>/i18n-cs.js` ends with PASS and two warning classes: labels that may overflow, and 6 strings identical to English (`A−`, `A+`, `admin`, `Mix`, `Sensei`, `Idiom`), all intended.

Author: not a native speaker. Style authority is `docs/profiles/cs.md` §2, §3 and §10. Everything in §4 below needs a Czech speaker's check.

## 1. Register and typography (one decision each)

- **Address:** lower-case ty. No «vy», «váš» or «prosím» anywhere.
- **Buttons, chips, menu items:** infinitive («Začít», «Zkontrolovat», «Odhlásit se»). **Instructions and prompts:** ty imperative («Vyber správnou odpověď», «Seřaď slova», «Klepni na odkaz»). **States:** verbal nouns or neuter participles («Načítání…», «Uloženo.», «Odesláno – díky!»).
- **Gender-neutral only.** No past tense, conditional or adjective that agrees with the learner. Devices used: present tense («Co říká B?», «Kde to můžeš slyšet?»), thing as subject («Lekce je hotová», «Účet je smazán»), neuter impersonals («Přihlášeno ✓», «Splněno ✓»), first person present on answer buttons («Umím», «Domluvím se», «Znám základy»).
- **Counts:** every count string is label + colon + number («Kartičky: {1}», «K opakování: {1}», «Zbývá: {1}», «Týdny: {1}»), a non-inflecting unit («{1} min», «{1} s», «{1} XP», «{1} kB», «{2}×») or a position («Kartička {1} z {2}», «{1}. den 🔥»). Singular and plural English templates share one wording. All 199 templates with a number slot were rendered at 1, 2, 5 and 22.
- **Language-name slots:** at the start or after a colon, nominative («{1}: jak jsi na tom?», «Kurz: {1} · …», «Jazyk odpovědi: {1}»), as in profile §10.
- **Typography:** „ “ quotes; en dash with spaces; «80 %»; a no-break space (U+00A0) after k, s, v, z, o, u, a, i and between a number or slot and %, min, s, XP, kB. English words quoted inside Czech text are in „ “ («např. „go“»).
- **Legacy keys** that say Korean / Hangul / romanization are written for English and its pronunciation aid, following de and ru. The 🇰🇷 share text carries 🇺🇸, as in de.
- **Tab is «záložka»** («v záložce „Pokrok“»), never «karta», which would collide with «kartička».

## 2. Glossary (one term per concept)

| English | Czech |
|---|---|
| Tab bar: Today / Practice / Review / Lessons / Read / Progress / Feedback | Dnes / Cvičení / Opakovat / Lekce / Čtení / Pokrok / Názor (4, 7, 8, 5, 5, 6, 5 characters) |
| deck / card | balíček / kartička |
| review (noun) / due / review queue | opakování / k opakování / fronta k opakování |
| session | trénink («Začít trénink», «TRÉNINK DOKONČEN») |
| drill (noun) / to drill | dril («Drily», «Dril čtení», «Minidril») / procvičit, procvičovat |
| practice (lesson set) / practise again | cvičení / «Cvičit znovu» |
| quiz / quick check (lesson) / exam / blitz | kvíz / kvíz k lekci / zkouška / bleskový kvíz (chip «⚡ Blesk») |
| passed / 80% to pass | splněno / ke splnění 80 % |
| pass n/3 (inside a test) / round n of m | průchod / kolo |
| Got it / Again (card answer) | Umím / Znovu |
| learned / mastered / learning / new | naučeno / zvládnuto / v učení / nové |
| streak / streak shield / personal best | série, «Dny v řadě» / štít série / (osobní) rekord |
| box (SRS) / interval | přihrádka / interval |
| leech / suspend / bury / restore | problémová kartička / pozastavit / odložit (na zítřek) / obnovit |
| weak spots / hardest cards / missed | Slabá místa / Nejtěžší kartičky / Chyby |
| quiz modes: read / recall / listen / type / mixed | čtení / vybavování / poslech / psaní / kombinace |
| Mix (the 5-at-a-time pool) / Shuffle / Merge | Mix / Zamíchat / Sloučit |
| `Type` (chip verb) / Type it (drill name) | Psát / Psaní |
| flip / tap / swipe / long-press | otočit / klepnout / přejet / podržet prst |
| Browse | Procházet |
| My phrases | Moje fráze |
| hint / note / rule / answer | nápověda / poznámka / pravidlo / odpověď |
| Correct! / Not quite | Správně! / Tentokrát ne |
| pronunciation (aid) / Pronunciation hint | výslovnost / Přepis výslovnosti |
| level / XP / daily goal / daily cap | úroveň / XP / denní cíl / denní limit |
| certificate / badge / study plan / track | certifikát / odznak / studijní plán / «Tvoje cesta» |
| share card, streak card, recap card (images) | obrázek, «Obrázek série», «Sdílet shrnutí» (not «kartička») |
| Accent (colour) / Text size | Barva / Písmo |
| sign in / sign out / sync / backup | přihlásit se / odhlásit se / synchronizace / záloha |
| feedback / feedback board | názor / nástěnka |
| pattern (grammar index) / conjugate | vazba / časovat |
| polite ↔ casual / Register | zdvořile ↔ neformálně / Zdvořilost |
| coming soon / planned | připravujeme / v plánu |
| Weekday headers Su…Sa | Ne Po Út St Čt Pá So |

## 3. Decisions that differ from, or go beyond, the profile

- **Session and drill.** Profile §10 gives «trénink» for both "drills" and "session". To keep one term per concept, session is «trénink» and drill is the profile's fallback «dril»; verbs use «procvičit». If the lead prefers «Trénink» for drills, session needs another word (candidates: «učení», «denní dávka»).
- **«Opakovat» (8 characters)** is the Review tab label; the profile's fallback is «Opakuj» (6) if it does not fit at 390px.
- **Level titles** (only shown if the pack uses these English names) are gender-neutral nouns, not literal: Sprout «Klíček», Senior «Stálice», Sensei «Sensei»; the seven names the course pack shows agree with `TITLES` in `tools/content/cs/meta.js` (review, lead decision 4): Beginner «Začátky», Student «Učení», Talker «Povídání», Traveler «Na cestách», Local «Jako doma», Pro «Profi», Master «Mistrovství».
- **Plan presets and tags:** «Příprava na cestu», «Přátelé a seznamování», «Konverzace za 90 dní», «Filmy, seriály a hudba» (localised from the Korean-specific wording, as de did); «Zkus český význam» for "Try the English meaning" (the meaning side is Czech in this course).
- **"Review due cards"** is «Opakovat kartičky» and "⏰ All due" is «⏰ Vše k opakování»: Czech has no short adjective for "due".
- **«naučeno kartiček» / «NAUČENO KARTIČEK»** (stat caption under a number and on the share image) uses the genitive plural as a label so that it does not read as an agreeing phrase.
- **Roadmap:** English words being taught stay bare in titles (`a / an a the: základy`) because titles carry no quotation marks in the other languages either; no no-break space is typed in titles that contain English ` / ` lists. The basis line is translated literally («… upravené pro korejsky mluvící»), as in de.

## 4. For a native speaker to check

1. «dril», «Drily», «Dril čtení», «Minidril» for drills (tone: may sound harsh).
2. «trénink» for the daily session («Začít trénink», «Nejdřív si dej trénink», «krátký trénink ji udrží»).
3. Tab labels «Opakovat» and «Názor»; «Čtení» for the tab that holds the drills.
4. Card answers «Umím» / «Znovu»; «Jasné – vyzkoušej mě».
5. «vybavování» for the recall quiz mode and «kombinace» for mixed.
6. «průchod» (pass n/3) against «kolo» (round).
7. «přihrádka» for an SRS box; «problémová kartička» for a leech; «odložit» / «pozastavit».
8. «splněno» / «ke splnění 80 %» for passed / to pass.
9. Level titles in §3 («Klíček», «Stálice» for the fallback series; «Učení», «Povídání», «Profi», «Mistrovství» shared with the course pack).
10. «klepnout» for tap and «přejet» for swipe («klepnutím otočíš · přejetím odpovíš»).
11. «🗣 říkat nahlas ×3» and «🗣 poslouchej… řekni nahlas» for shadowing.
12. «Co zaznělo?» for "Which one did you hear?"; «Povedlo se» for "I nailed it"; «Zpátky ve hře.» for "Back in rotation."
13. «Stabilní výkon. Kartičky s chybou se vrátí k opakování.»
14. «{1}: k čemu ji potřebuješ?», «{1}: jak jsi na tom?», «{1}: chybí ti klávesnice? Použij dlaždice» (language-name slot sentences from the profile).
15. «· zásoba nových kartiček (dny): ~{1}» for "~N days of new cards".
16. «Rekord na první pokus: {1} % · naposledy: {2} % · absolvováno: {3}×».
17. «Odhady: {1} · když zvolíš „Ano“, máš pravdu v {2} % případů …» (calibration line).
18. «Vyladěno pro mluvčí tvého jazyka» (course-list legend).
19. «Přidáno tebou», «❤️ líbí se vývojáři», «Vývojář» (badge for the developer, a third person).
20. Legacy Korean-grammar tool labels, unlikely to show in this course: «počítací slovo», «co kdybychom…?», «nedělej (prosba)», «nedělej (zákaz)», «smím…?», «nesmím…?», «slovesný kmen + koncovka».
21. Greeting glosses «Dobré odpoledne» and «Učíš se dlouho do noci – dobrá práce».
22. Roadmap: «Předmětové tvary zájmen a have», «A2 · Širší vyjadřování», «B1 · Vyprávíme víc», «A1 · Co děláme», «Časy ve vyprávění», «Nástrahy výslovnosti».
