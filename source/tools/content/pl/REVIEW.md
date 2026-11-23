# pl-en cold review (PL-REVIEWER), 2026-11-23

**Scope.** I edited only files under tools/content/pl (not profile.json, not the deviations files, not DECKNAMES.md) and the `t` fields of tools/i18n/pl/ui.json. roadmap.json is unchanged. I did not touch any generator, pack, src/app.html, other course or doc. I did not run build.sh, link_roadmap.py or road.py, and did not commit. Packs were generated into a scratch folder only.

No English that parity compares changed. English changed in two pl-only practice items (added accepted answers in `ponglish` and `articles-3`); both lessons stay at their original item counts.

**Overall.** The course arrived in good shape: 15 corrections in total, none to a transcription. Most of this file is therefore sections 4 and 5.

## 1. What changed

### Wrong or misleading (9)
- **lessons.js, idioms table.** *A blessing in disguise* was glossed with the proverb that extra.js gives to *Every cloud has a silver lining*, so one Polish proverb stood for two different idioms.
  „Nie ma tego złego, co by na dobre nie wyszło” → „Szczęście w nieszczęściu” (the gloss the IDIOMS list already uses).
- **lessons.js, `be` check 2.** The explanation named a subject that is not in the sentence.
  „Podmiot to she (trzecia osoba liczby pojedynczej)…” → „Podmiot my sister to trzecia osoba liczby pojedynczej (tak jak she)…”
- **lessons.js, phrasal-verb table header.** *exercise*, *discover* and *postpone* were headed „Słowo książkowe”; *exercise* is an everyday word.
  „Słowo książkowe” → „Jedno słowo (bardziej oficjalne)”
- **decks.js, card *a piece of advice*.** The note said „bez a i bez -s”, but the article learners wrongly add is *an*.
  „bez a i bez -s” → „bez przedimka a / an i bez -s”
- **practice.js, phrasal type item.** „Opiekuję się dwoma kotami” accepts only the present simple, while the Polish also fits *I'm looking after two cats*. The English is shared, so the prompt now carries the cue.
  „Opiekuję się dwoma kotami” → „Na co dzień opiekuję się dwoma kotami”
- **more/a1.js, `ponglish` type item (pl-only).** „Zrobiłam błąd” rejected a correct answer. Added *I've made a mistake* (the DSL also adds *I have made a mistake*).
- **more/b1.js, `articles-3` type item (pl-only).** „Jeżdżę do pracy pociągiem” rejected correct answers. Added *I get to work by train* and *I travel to work by train*.
- **ui.json, two strings.** „dotknij Sprawdź jeszcze raz, żeby się poddać” reads as a button named „Sprawdź jeszcze raz”; the button is „Sprawdź” and the learner taps it a second time.
  → „…albo jeszcze raz dotknij „Sprawdź”, żeby się poddać.” (counted as 2 in the table: the exact string and the `{x}` pattern)

### Unnatural wording (4)
- **meta.js, level title for *Pro*.** The app shows „Poziom 16 · Poziom ekspercki”, with „Poziom” twice. → „Wyższa liga”, the gloss ui.json already had for the same title.
- **ui.json, level title *Talker*.** „Rozmówki” means a phrasebook; meta.js, which is what the learner actually sees, had „Luźna rozmowa”. → „Luźna rozmowa”. After these two changes meta.js and ui.json give the same seven titles.
- **lessons.js, in / on / at table.** „punkt, miejsce jako cel” for *at the station, at work, at home* suggested direction (cel = destination). → „punkt, miejsce jako punkt na mapie”

### Formatting (2)
- **ui.json** „dotknij Umiem.” → „dotknij „Umiem”.” (button names in quotes, as elsewhere in the dictionary).
- **ui.json** fragment `= Got it  ·`: the source has space + U+00A0 before the dot, the Polish had two plain spaces, which collapse in HTML. Restored the U+00A0.

### Harmonised (the fourth item under unnatural wording)
- **decks.js, card *I'm all ears*.** The literal gloss was „cały jestem uszami” on the card and „jestem samymi uszami” in the idioms lesson. → „jestem samymi uszami” in both.

### Pron (0)
No transcription was changed. Krakow is /ˈkrɑːkaʊ/ in all four rows. A scratch copy of the zh checker found no real conflict (details in PRON-RULES.md, new in this pass).

## 2. Edit counts

| File | Wrong / misleading | Unnatural wording | Pron | Formatting | Total |
|---|---|---|---|---|---|
| decks.js | 1 | 1 | 0 | 0 | 2 |
| extra.js | 0 | 0 | 0 | 0 | 0 |
| lessons.js | 3 | 1 | 0 | 0 | 4 |
| practice.js | 1 | 0 | 0 | 0 | 1 |
| meta.js | 0 | 1 | 0 | 0 | 1 |
| more/a1.js | 1 | 0 | 0 | 0 | 1 |
| more/a2.js | 0 | 0 | 0 | 0 | 0 |
| more/b1.js | 1 | 0 | 0 | 0 | 1 |
| i18n ui.json | 2 | 1 | 0 | 2 | 5 |
| i18n roadmap.json | 0 | 0 | 0 | 0 | 0 |
| **Total** | **9** | **4** | **0** | **2** | **15** |

Counts are changed lines, checked with `diff` against a copy taken before the first edit. New file: PRON-RULES.md.

## 3. What was read

**Read in full:**
- decks.js: all 22 decks, every meaning and note;
- extra.js: DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS;
- lessons.js: 11 bodies and their checks; practice.js: every item with its `why`;
- more/a1.js, a2.js, b1.js: every body, check and practice item;
- meta.js, DECKNAMES.md, tools/i18n/pl/NOTES.md;
- ui.json: all 784 exact strings and all 274 patterns, Polish beside the English key;
- roadmap.json: the 39 filled titles and the basis line.

**Checked by script, not by eye:**
- U+00A0 after one-letter words and before units in lesson titles, blurbs and deck descriptions (no gap found);
- Korean characters under tools/content/pl (none);
- word-level transcription consistency (scratch copy of zh/pron_check.js);
- the 199 patterns with a count slot, rendered at 1, 2, 5 and 22. Every one uses the „etykieta: liczba” form or an invariable unit (XP, pkt, min, s, KB), so no number stands before an inflected Polish noun.

**Not checked:**
- the audio. Every transcription note about names and places is against the written rules only;
- how strings look in the running app (line breaks, truncation);
- the `ko` reference fields and the roughly 1,780 roadmap entries with an empty `t`, which fall back to English by design;
- link_roadmap.py and road.py, which cannot run on this machine.

## 4. For a native speaker (most important first)

1. **Capitalised Ty / Twój / Ciebie** throughout the interface („Twoje postępy”, „Jak mamy się do Ciebie zwracać?”). Correct in letters; many Polish apps use lower case. Decide once.
2. **Core interface nouns:** „talia” (deck), „fiszka” (card), „przegródka” (box), „oporna fiszka” (leech), „Wprawki” (Drills), „Miks”, „Umiem” (Got it). „Wprawki” appears beside „ćwiczenie” for the same thing („wybierz ćwiczenie”, „Ćwiczenie czytania”); a native should pick one.
3. **Level titles:** Pierwsze kroki, Szkolna ławka, Luźna rozmowa, W podróży, Jak u siebie, Wyższa liga, Klasa mistrzowska (and in ui.json also Kiełek, Starsza klasa, Sensei). They name a stage, not a person, to avoid gender. Check that they read as a ladder.
4. **The /ɪ/ ≈ Polish „y” tip** in the pron lesson and the *Wymowa: pułapki* deck (*ship*, *live*, *milk*). Useful, but an approximation; confirm it helps rather than misleads.
5. **False friends and calques without a cited source** in the *Fałszywi przyjaciele i kalki* deck and `ponglish`: *take a photo* (not *make*), *What does it look like?* (not *How*), *date / data*, *boss / chef*, *billion / miliard*, *receipt / recepta*, *current*, *possibly*, *nice*, *rude*, *consistent*, *comprehensive*. The English is right; check each is a mistake Poles really make.
6. **„Proszę” and its four English equivalents** in the `polite` lesson (please / here you are / you're welcome / go ahead). Check the four Polish situations are the ones a Pole would name.
7. **First-person gender.** Meanings alternate between feminine and masculine forms by design („Zrobiłam błąd”, „Usiadłem na łóżku”). Check that no second-person form toward the learner is gendered; I found none.
8. **Chat abbreviations** in *Telefon i skróty z czatu*: the Polish counterparts „zw”, „nwm” and similar. Check they are current.
9. **Travel and phone phrasing:** „wyjście numer 12” against „bramka” for *gate*; „Przepraszam, przerywa” for a bad line; „Czy nie będzie kłopotem…?” for *Would you mind…?*; the note on *Mrs.* with a first name.
10. **Korean place names in Polish:** Seul / w Seulu, Czedżu, Pusan / w Pusanie, Daegu. The first three are polonised and the fourth is not. Also the weekday headers Nd Pn Wt Śr Cz Pt So („So” or „Sb”).

## 5. Found but not fixable within my scope

For the lead:
- **Roadmap basis line.** The English source says "CEFR A1-B1 order, adjusted for Korean speakers", so the Polish says „dostosowana do osób mówiących po koreańsku”. Translated as written; a Polish learner will read it as an error. The source key needs a per-course variant.
- **parity.js warning.** `WARN unused deviations (stale?): lessons:ponglish, lessons:articles-3`. Present before my edits; the deviations files are outside my scope.
- **Interface toggle „Interfejs po koreańsku (menu w języku koreańskim)”** (key `한국어 UI (menu labels in Korean)`, checkbox `uiKo`). de translates it the same way; ru and zh render it as "interface in Russian / Chinese". If the toggle switches the native-language interface in a pl-en course, the Polish should be „Interfejs po polsku”. I left it, because I could not confirm what the toggle does here.
- **NOTES.md is now one gloss out of date.** tools/i18n/pl/NOTES.md lines 122 and 144 still list „Rozmówki” for *Talker*; ui.json now has „Luźna rozmowa”. NOTES.md is outside my scope.
- **Legacy Korean keys answered with English-course text** (for example `Type the romanization. Hangul blocks stack…`, `type the sound, e.g. ga`, `Words + finals` → „Słowa + końcówki”, `counter ·` → „klasyfikator ·”). The Polish is sensible, but several of these features are switched off for pl-en (`features` are all false), so nobody can check them in the app.
- **No pl copy of pron_check.js.** de and zh keep one in their course folder. I was not asked to add tools; the scratch method is described in PRON-RULES.md.

Shared English I may not change:
- **Korean setting in shared rows:** Seoul, Jeju, Busan, Daegu, K-pop, kimchi, Han Kang, won. The Polish side handles them correctly, but a Polish learner gets no Polish setting in those lessons.
- **Card *Who's your bias?*** K-pop fan slang, shared with ko-en. The Polish note is neutral („Slang fanów muzyki pop”), but the card is of little use to this audience.
- **Type items that accept fewer answers than the Polish allows.** In each the hint steers to the accepted form, so I left the prompts alone:
  - practice.js „Poproszę miejsce przy oknie” and a1 „Poproszę kanapkę”: *A window seat, please* / *A sandwich, please* are rejected;
  - practice.js „W załączeniu przesyłam plik”: *I'm attaching the file* is rejected;
  - practice.js „Czy ona ma kota?”: *Has she got a cat?* is rejected (American course, acceptable);
  - a2 „Czytałam tę książkę (doświadczenie)” and b1 „Już przeczytałem tę książkę”: *this book* is rejected, only *the / that book*;
  - a2 „Musisz kupić bilet”: *You need to buy a ticket* and *You must buy a ticket* are rejected.
- **Reported-speech lesson table:** English direct speech is in straight quotes (" "), which is right for English but sits beside Polish „ ” in the same table.

## Check outputs (scratch packs, after the last edit)

```
node tools/content/gen.js pl <scratch>/pl.js          wrote <scratch>/pl.js 348900 bytes
node tools/content/validate.js pl <scratch>/pl.js     PASS: all checks OK
node tools/content/parity.js pl <scratch>/pl.js       WARN unused deviations (stale?): lessons:ponglish, lessons:articles-3
                                                      PASS: shared English side matches ko-en
node tools/content/lint.js pl <scratch>/pl.js         lint pl: 0 blocking · 12 meaning variants (info) · 0 K-pop leftovers (info)
node tools/content/alphabet_check.js pl <scratch>/pl.js   PASS alphabet pl: lesson 1, deck 21 «Alfabet» with 26 cards, English side matches the spec
python3 tools/i18n/gen.py pl <scratch>/i18n.js        wrote <scratch>/i18n.js · exact 784 patterns 275 road 39
node tools/i18n/validate.js pl <scratch>/i18n.js      exact=784 patterns=275 warnings=2
                                                      PASS
node --check on decks.js, lessons.js, practice.js, meta.js, more/a1.js, more/b1.js: all OK
Korean characters under tools/content/pl: none
```

The two i18n warnings were there before the review (same count in the baseline run); none comes from an edited string.

## Pre-merge review, 2026-11-23

Second reviewer (not a native speaker), after the cold review above. All shared-English changes are declared in `deviations.json` (`items`, plus the reasons for the decks „Wymowa: pułapki”, „Fałszywi przyjaciele i kalki” and „Filmy, seriale i slang”).

**Review findings applied**
- Type items that rejected correct answers or accepted a wrong person: modals „Musisz kupić bilet” (I/We have to removed; You need to / You must added), perfect „Czytałam tę książkę” and perfect-2 „Już przeczytałem tę książkę” (this book added), polite „Poproszę miejsce przy oknie” and can-like „Poproszę kanapkę” (A window seat / A sandwich, please added), email „W załączeniu przesyłam plik” (I'm attaching the file added), reported „Powiedział, że widział ten film” (that movie added).
- False friends: aktualnie / actually row added to the ponglish table, new card *currently* in „Fałszywi przyjaciele i kalki” (31 cards), the email lesson's list now names aktualnie / currently; the *possibly* note now also gives „ewentualnie” = or alternatively.
- Card *rude*: meaning reordered to „niegrzeczny / ordynarny”. Card *Everything was great.*: „Wszystko było świetne”.
- lessons.js prep: „rzeczowniki nie odmieniają się przez przypadki” (pronouns do). b1 passive: „Po angielsku zwykle zastępuje je strona bierna” (was „takich konstrukcji nie ma”).
- email check 0: Jenny Park → Jenny Miller (Polish side only).

**Typed-answer pass** (all 127 type items listed from the generated pack and read)
- Prompts cued (6): „To moje książki (te tutaj)”, „To moja torba (ta tutaj)”, „Piję herbatę (na co dzień)”, „Oglądam (teraz) film”, „Dzieci (teraz) śpią”, „On ma samochód (użyj has)”.
- Answers added (12 items): Has she got a cat, Today it's hot, Have you got any questions, Have you got a pen, He has got a car, and the seven review items above.
- Wrong-person answers removed (3 items): modals „Musisz…”, first-conditional „Spóźnisz się na autobus” (We'll / I'll), phrasal „Skończyło nam się mleko” (I ran out / I'm out).
- Full forms: none missing in the pack (the DSL expands more/ items; practice.js items already list both). He's got a car was deliberately not added: the DSL would also generate the wrong full form *He is got a car*.

**Localisation** (Korean setting → Poland; 36 practice items and checks, 28 of them on the shared English side): Seoul / Busan / Daegu → Warsaw, Krakow, Gdansk; Jeju → the Tatras (plans) or the Baltic (last year); Korea → Poland (made in, live in, visited) or England (been to … twice); Korean → Polish; kimchi and K-pop → pierogi; won → zloty; Han Kang → Olga Tokarczuk; idioms distractor tiger → wolf; email distractors You suffered a lot / Good suffering → Thanks for your engagement / Thank you from the mountain (Polish calques). Card *Who's your bias?* → *Who's your favorite character?* (deck, DIALOG). Pronunciation deck: the Korean pairs rice / lice and fan / pan → pull / pool (ʊ vs uː) and eyes / ice (final voicing), with the pron lesson body, two mc items, one fill and the EXAMPLES row. right / light, coffee / copy, very / berry, vote / boat kept (their notes already treat them as useful for Poles).

**Interface** (tools/i18n/pl): pronouns of address in lower case throughout (26 strings); „Dyktando liczb”; „Tasuj talie na starcie”; „ty@example.com”; NOTES.md brought up to date (address rule, the „Sprawdź” string, the roadmap basis line is not shown to pl learners).

**Left for a native speaker**
- Weekday header „So” vs „Sb” (unchanged; „Sob.” would break the two-letter set).
- Ponglish table row ordynarny → rude: „ordynarny” leans to vulgar / coarse; the row may want „rude, vulgar”.
- „Wprawki” (tab) beside „ćwiczenie” elsewhere; „Ćwiczenia” would be more consistent (measure at 320 px).
- Whether the replacement pron pairs (pull / pool, eyes / ice) and the Polish calque distractors read naturally.
