# Polish (pl) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 39 titles of the English roadmap (the one Polish speakers see) are filled. The other 1,783 strings are empty, so they fall back to English.
- The generated pack is `packs/i18n-pl.js` (not written by the translator; checks were run against a scratch copy).

Build: `python3 tools/i18n/gen.py pl && node tools/i18n/validate.js pl`. It passes with 2 warning classes:
- 27 labels that may overflow small buttons (list in §5);
- 10 strings identical to English: `A−`, `A+`, `admin`, `🔗 link`, `Quiz` / `quiz` / `QUIZ`, `Sensei`, `#media`, `Idiom`. All are normal Polish words or symbols.

The only course this interface serves is **pl-en** (English for Polish speakers). Legacy keys that say Korean, Hangul or romanization are worded for English: *angielski*, *transkrypcja*, 🇺🇸.

Author: not a native speaker. Everything here needs a Polish speaker's check (§6). Style authority: `docs/profiles/pl.md` §2, §3, §10.

## 1. Register and typography (one decision each)

- **Address:** informal *ty* through the verb ending, pronoun dropped (*Wybierz*, *możesz*, *zaczniesz*). Where a pronoun is unavoidable it is capitalised: *Ty, Ciebie, Ci, Tobą, Twój* (profile §2; flagged there as the least certain choice).
- **Buttons and instructions:** imperative, second person singular: *Sprawdź, Dalej, Zapisz, Anuluj, Wstecz, Pomiń, Zamknij, Kontynuuj, Odśwież, Tasuj, Scal, Odmień*. Never the infinitive.
- **Gender-neutral:** no second-person past tense, conditional, or adjective about the learner. Devices used: impersonal *-no / -to* forms (*Zalogowano, Wylogowano, Zapisano, Dodano, Cofnięto, Scalono, Opublikowano*), nouns (*Nowy rekord, Pauza*), first-person verbs on answer buttons (*Umiem*), present tense (*Co było w nagraniu?* for "Which one did you hear?", *Co mówi B?* for "What did B say?"). "Not sure" is *Nie mam pewności* (not *Nie jestem pewien / pewna*). "Are you signed in as admin?" became *czy to konto administratora?*.
- **Quotes** „ ” (U+201E, U+201D). **Dash:** em dash with spaces between clauses, en dash only in ranges. **NFC** throughout.
- **No-break space (U+00A0)** after every one-letter word (*a, i, o, u, w, z*) and between a number and the following unit or noun (*5 minut*, `{1} min`, `{1} pkt`). Applied by script to every string, then checked by a scan.
- **Percent** without a space: *80%*.
- **Sentence case** everywhere; canvas keys (share card, certificate) are upper case as in English.

## 2. Counts: one wording for every number

Every count pattern is a nominative-plural label, a colon, then the number, so it reads correctly at 1, 2, 5 and 22. The singular and plural English templates share one text. No noun follows a slot and no verb agrees with one.

| English | Polish |
|---|---|
| {n} cards / {n} card | Fiszki: {1} |
| {n} due / {n} cards due | Do powtórki: {1} |
| {n} days / {n} day | Dni: {1} |
| {n} weeks | Liczba tygodni: {1} |
| {n} left | Pozostało: {1} |
| {n}/{n} learned | Poznane: {1}/{2} |
| {n}/{n} lessons done | Ukończone lekcje: {1}/{2} |
| {n} rounds left | Rundy do końca: {1} |
| {n} decks selected | Wybrane talie: {1} |
| You missed {n} | Błędy: {1} |
| {n}× missed | {1}× źle |
| Next ones come due in {n} days | Dni do następnej powtórki: {1} |
| · {n} cards from mastery | · do opanowania brakuje: {1} |
| {n} tried / {n} q | próby: {1} / pytania: {1} |
| {n} runs | podejścia: {1} |
| Card {n} of {n}, week {n} of {n}, Round {n} of {n} | Fiszka {1} z {2}, tydzień {1} z {2}, Runda {1} z {2} (ordinal use, noun first, singular) |
| {n} points / pts, {n} XP, {n} min, {n}s, {n} KB | {1} pkt, {1} XP, {1} min, {1} s, {1} KB (abbreviations do not inflect) |
| +{n} d: {n} | +{1} d: {2} |

Captions that sit under a separately drawn number were made number-proof too: "day streak" = *seria (dni)*, canvas "DAY STREAK" = *SERIA (DNI)* (not *dni z rzędu*, which is wrong under a 1). "cards learned" = *poznane fiszki*.

Fixed digits in fixed strings take the right form by hand: *5 nowych fiszek*, *3 pytania*, *4 fiszki*, *7 dni*, *8 tygodni*, *90 dni*.

Rendering check: every pattern with a numeric slot (189 distinct outputs) was rendered through the generated pack at 1, 2, 5 and 22 and read; none needs a different noun form.

## 3. Language-name slots

The slot arrives as „Angielski” (nominative, capitalised), so it stands only at the start of a string or after a colon or „·”:

| English | Polish |
|---|---|
| Change language · {x} | Zmień język · {1} |
| {x} progress | {1}: postępy |
| Now learning {x} · progress saved per course | Kurs: {1} · postępy zapisują się osobno dla każdego kursu |
| How much {x} do you know? | {1}: jaki masz poziom? |
| What do you want {x} for? | {1}: jaki masz cel? |
| type it in {x} / Type in {x}… | język odpowiedzi: {1} / Język odpowiedzi: {1}… |
| Type the {x}, or tap Check again to give up. | Wpisz odpowiedź (język: {1}) albo dotknij Sprawdź jeszcze raz, żeby się poddać. |
| No {x} keyboard? Use tiles | {1}: brak klawiatury? Użyj kafelków |
| Learning {x} 5 minutes a day with Lang App {x} | {1} — 5 minut dziennie z Lang App {2} |
| Learn {x}, 5 minutes a day | {1} — 5 minut dziennie |
| Merged into {x}. … | Scalono z kursem: {1}. … |

Fixed strings without a slot use the proper case: *Napisz po angielsku*, *Ucz się angielskiego 5 minut dziennie*, *Postępy w angielskim*.

## 4. Glossary (one term per concept)

| English | Polish | note |
|---|---|---|
| Today / Practice / Review / Lessons / Read / Drills / Progress / Feedback (tabs) | Dziś / Trening / Powtórki / Lekcje / Czytanie / Wprawki / Postępy / Opinie | profile §10; longest are 8 characters |
| deck / card | talia / fiszka | |
| share card, recap card, streak card (an image) | karta (*Karta serii*, *Utwórz kartę*) | kept apart from *fiszka* |
| session | sesja | |
| due | do powtórki | „Zrób zaległe powtórki” for "Review due cards" |
| learned / mastered | poznane / opanowane | |
| streak | seria; *dni z rzędu* in running text | streak shield = *tarcza serii* |
| level / XP / points | poziom / XP / pkt | "Lv" = *poz.* |
| box (Leitner) | przegródka | |
| interval / retention | odstęp / zapamiętywanie | |
| quiz / exam / quick check / test | quiz / egzamin / szybki test / test | "Test everything" = *Test ze wszystkiego* |
| passed / 80% to pass | zaliczone / zaliczenie od 80% | |
| pass n/3 (a run through the cards) | przejście n/3 | |
| run (of a practice set) | podejście | |
| Mix (pool) / Mixed (mode) | Miks / Mieszany | |
| quiz modes: read, recall, listen, type | czytanie, przypominanie, słuchanie, pisanie | |
| key `Type` | Pisanie | verbal noun, so the chip reads „⌨️ Pisanie EN” in line with the other mode names; the brief asked for "the verb", the imperative would be *Wpisz* |
| drill (one activity) | ćwiczenie | the tab is *Wprawki* |
| weak spots / blitz | słabe punkty / szybka runda | |
| leech / suspend / bury | oporna fiszka / zawieś / odłóż (do jutra) | |
| Again / Got it | Jeszcze raz / Umiem | |
| flip / browse / shuffle | odwróć / przeglądaj / tasuj | |
| hint / rule / answer / note | podpowiedź / zasada / odpowiedź / notatka | |
| Correct! / Not quite | Dobrze! / Niezupełnie | |
| romanization, pronunciation hint | transkrypcja | profile §10 „Pokaż transkrypcję” |
| My phrases / phrase | Moje zwroty / zwrot | |
| role-play | scenki | |
| polite ↔ casual | uprzejmie ↔ swobodnie | |
| sentence builder / tiles | układanie zdań / kafelki | |
| say it / shadow | powiedz na głos / powtarzaj | |
| certificate / badge | certyfikat / odznaka | |
| backup / export / import / merge | kopia zapasowa / eksport / import / scal | |
| sign in / sign out / sync | zaloguj się / wyloguj się / synchronizacja | |
| nickname, "my name" | pseudonim | "Show my name" = *Pokaż mój pseudonim* |
| feedback / feedback board / post | opinia / tablica opinii / wpis | |
| Developer (label on posts) | Twórcy | plural, to avoid a gendered singular |
| study plan / track / tour | plan nauki / ścieżka / przewodnik | |
| Accent (colour setting) | Kolor | *Kolor: czerwony*; avoids confusion with a spoken accent |
| Text size | Tekst | |
| grammar pattern / conjugate | konstrukcja / odmień | |
| weekday headers Su–Sa | Nd Pn Wt Śr Cz Pt So | two letters each |
| level titles (glosses beside the English title) | Kiełek, Szkolna ławka, Starsza klasa, Wyższa liga, Klasa mistrzowska, Sensei; Pierwsze kroki, Luźna rozmowa, W podróży, Jak u siebie | names of a stage, not of a person |
| DELETE | DELETE | the engine compares the typed word |

Fragments that the engine joins at run time were written to read as one sentence: „👆 Dotknij” + „fiszki, aby ją odwrócić”; „👉 Przesuń w prawo” + „= Umiem ·” + „👈 w lewo” + „= Jeszcze raz”; „… Wpisz” + DELETE + „dla potwierdzenia.”; „Potem 5 fiszek z talii” + deck name; „: wszystko, co publikujesz, jest” + „publiczne” + „dla wszystkich użytkowników. …”.

## 5. Labels the validator flags as long

Recall en→한 (*Przypominanie pl→en*), Say it (*Powiedz na głos*), Cards by box, Hardest cards, Sign in to sync, Try again (*Spróbuj ponownie*), Resend email, Sync across devices, Save across devices, Not sure (*Nie mam pewności*), ⏰ All due (*⏰ Wszystkie do powtórki*), Daily reminder time, all done, Share recap card, Skip tour, polite present, polite past, noun / word, verb stem + 지, Tap again to confirm, Master, all seen, tap to skip, tap anywhere to continue, Unlock all (*Odblokuj wszystko*), Write it (*Napisz po angielsku*). Shorter fallbacks if a button overflows: *Ponów* (Try again), *Nie wiem* (Not sure), *⏰ Do powtórki* (All due), *Mów* (Say it), *Odblokuj* (Unlock all).

## 6. Open doubts for a native speaker

1. Capitalised *Ty / Twój / Ci / Ciebie* in interface text (many Polish apps use lower case).
2. *talia* for a deck (alternative: *zestaw*) and *Wprawki* for the Drills tab.
3. *przegródka* for a Leitner box (alternative: *pudełko*).
4. *oporna fiszka* for a leech (Anki's Polish uses *pijawka*).
5. *szybka runda* for blitz; *Miks* for the Mix pool; *przejście 1/3* for "pass 1/3"; *podejścia* for runs.
6. *scenki* for role-play; *uprzejmie ↔ swobodnie* for polite ↔ casual; *Rejestr · 3/10* for "Register".
7. *Umiem* for "Got it"; *Jasne — przepytaj mnie* for "Got it — quiz me".
8. *zaliczenie od 80%* for "80% to pass".
9. *seria (dni)* / *SERIA (DNI)* as the caption under the streak number.
10. *Pisanie* for the key `Type` (see §4).
11. *Twórcy* / *❤️ twórcom się podoba* for "Developer" / "loved by the dev".
12. The level-title glosses, especially *Kiełek*, *Starsza klasa*, *Wyższa liga*, *Luźna rozmowa*.
13. *Nd Pn Wt Śr Cz Pt So* as weekday headers (capitalised, as on printed calendars).
14. *Równo do przodu.* for "Steady."; *Znów w obiegu.* for "Back in rotation."; *Wszystko na bieżąco* for "All caught up"; *wszystko już było* for "all seen".
15. *Nauka do późna — brawo* / *późno już, dobra robota* for the late-night greeting.
16. *udostępniane w obecnej postaci, bez gwarancji* for "provided as-is".
17. *bursztynowy* for amber in the calendar legend (alternative: *pomarańczowy*).
18. *Kolor: śliwkowy* for "Accent plum".
19. Legacy keys that the pl-en course probably never shows, worded loosely after the German file: the reading-drill blurb, *klasyfikator ·* (counter), *temat czasownika + końcówka*, *propozycja (shall we?)*, *czas teraźniejszy (uprzejmie)*.
20. Roadmap: *Kolejność według poziomów CEFR A1–B1, dostosowana do osób mówiących po koreańsku* is a faithful translation of the English basis line, which names Korean speakers.
