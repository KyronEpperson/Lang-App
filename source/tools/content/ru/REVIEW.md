# ru-en cold review (RU-REVIEWER), 2026-11-17

**Scope.** Everything under tools/content/ru except profile.json and deviations*.json, plus the `t` fields of tools/i18n/ru/ui.json and roadmap.json. No generator, pack, src/app.html or other language was touched; build.sh was not run; nothing was committed. No parity-bound English changed (parity PASS). Section 1 below is the per-batch log written as the review went; sections 2–5 follow it.

**Baseline (before any edit):** gen, validate, parity, lint (0 blocking, 11 meaning variants), i18n gen + validate and `road.py check ru` all pass. Originals are copied to the session scratchpad (`orig/`).

## 1. What changed (log, appended per batch; 69 edits)

### Batch 1 — decks.js and extra.js (read in full: 405 cards with every meaning and note; 86 dialogues, 54 examples, 25 patterns, 80 pause lines, 26 idioms)
No Korean leftovers found in card notes (the What's up?, Konglish, politeness-level and Korean-sound notes were already rewritten). The one K-pop card (*Who's your bias?*) is a parity-bound target; its note explains it honestly (§5).
- decks.js
  - [wrong] Bye!: «Bye-bye между взрослыми звучит по-детски» → «Bye-bye звучит мягче… Взрослые тоже так говорят, особенно по телефону».
  - [wrong] In ten minutes: «Не «в течение десяти минут»» (but *in ten minutes* also = «за десять минут») → «in + время о будущем — «через»: I'll be back in ten minutes. «В течение десяти минут» — within ten minutes».
  - [unnatural] Do you have it in black?: «Есть такой же чёрный?» (reads "an equally black one") → «Есть такой же, но чёрный?».
  - [unnatural] You're so funny: «fun — «с кем весело»» → «fun — «весёлый, с ним не скучно»: You're fun».
  - [format] You're welcome: «Sure., No problem., Anytime.» → «Sure, No problem или Anytime.».
- extra.js
  - [wrong] DIALOG Me neither: «Я не очень люблю острое. / Я тоже.» (the gloss teaches *Me too*) → «Я тоже не очень».
  - [unnatural] DIALOG subway: «Не пропустите» (*You can't miss it*) → «Сразу увидите»; restaurant «Как вам всё понравилось?» → «Всё понравилось?»; «У меня кое-что случилось» (*Something came up*) → «У меня появилось срочное дело»; «Какой срок по предложению?» → «Когда нужно сдать предложение?».
  - [unnatural] EXAMPLES «за помощь сегодня» → «за сегодняшнюю помощь».

### Batch 2 — lessons.js (read in full: 11 bodies, 33 checks)
- [wrong] be body, table row «Значение»: to be = «быть, находиться, состояние» vs смысловой = «действие, привычка» — the copied "action → do" test in table form (*like, want* are states but take do) → to be «быть, находиться; дальше — прилагательное, существительное или место» vs «всё остальное: действие, чувство, привычка (работать, жить, любить, хотеть)». The tip already used the right test («другой глагол, кроме be»).
- [wrong] pron body: «скрыть переключателем «Показывать транскрипцию»» named a label that does not exist; for ru the engine shows the chip 'Aa pronunciation: on/off' and the setting 'Show pronunciation hints in practice' → «её можно скрыть кнопкой «Aa транскрипция» во время практики или галочкой «Показывать транскрипцию в практике» на вкладке «Практика»» (the checkbox sits on the Practice screen, src/app.html #quizRom; the ui.json `t` values were aligned to «транскрипция», see interface batch).
- [wrong] email body: *by Thursday* «до четверга» → «к четвергу» (the deck card teaches by = «к пятнице», until = «до»).
- [unnatural] smalltalk body: *Pretty good!* «Отлично!» → «Неплохо!».
- (Reverted) polite check 3 option «~ing (opening)» → «-ing-форма (opening)»: parity treats the option as English (it has no Hangul in ko-en), so it stays «~ing (opening)» (§5).

### Batch 3 — practice.js (read in full: 11 sets, 154 items, every prompt, why and hint)
- [wrong] be mc «Я устал(а)», fill «__ you tired?», fill «We __ hungry.»: `why` said «состояние требует глагола to be» — the reverse of the copied action test (*like, want* are states and take do) → «Другого глагола нет, дальше прилагательное tired — значит, вопрос с глаголом to be» (and the same for hungry; mc: «перед прилагательным (tired) нужен глагол to be»).
- [wrong] email fill «Не могли бы вы прислать файл до пятницы?» (answer *by*, distractor *until*: «до пятницы» points to *until*) → «к пятнице».
- [wrong] smalltalk fill «Смотрел(а) что-нибудь интересное в последнее время?» (only *shows / movies* accepted) → «…хорошие сериалы или фильмы?» (the de review fixed the same item).
- [unnatural] smalltalk fill *Pretty good!* «Отлично!» → «Неплохо!» (as in the lesson body).
- [unnatural] idioms order why «Вместо my артикль не ставят» (reads "instead of my") → «Перед cup уже стоит my, поэтому артикль не нужен».

### Batch 4 — more/a1.js (read in full: 16 bodies incl. runglish, 48 checks, 226 practice items with every why and hint)
- [wrong] adjectives check 1 why «Короткое слово — -er, последняя согласная удваивается» (a general rule → *cheapper*) → «big — короткое слово, поэтому -er. Оно кончается на одну гласную + одну согласную, поэтому g удваивается: bigger (а в cheap гласных две: cheaper)» (zh, de and pt fixed the same line).
- [wrong] the mc and ty «Где станция?» (bare prompt: *Where's a station?* is not wrong, but is the distractor) → «Где станция? (та, что поблизости)» (zh fixed the same pair).
- [wrong] plurals tip «После чисел … всегда множественное число … my a bag ✗» (one is a number; my a bag is not a plural error) → «После чисел больше одного… А с my артикль не ставят: my a bag ✗ → my bag ✓».
- [unnatural] the body «Русские ошибаются в обе стороны» and runglish body «ошибки русских» (the audience is Russian speakers, not only Russians, profile §1/§9) → «Ошибаются здесь в обе стороны», «ошибки русскоговорящих».
- [format] object-have check 3 «с вспомогательным» → «со вспомогательным».

### Batch 5 — more/a2.js and more/b1.js (read in full: 14 bodies, 42 checks, 196 practice items) and pron
- a2.js and b1.js: no edit needed. Found-but-parity-bound items are listed in §5.
- Pron: zh's checker copied as `pron_check.js`: 774 pairs, 0 phrase conflicts, 0 word conflicts, 0 rule hits. 673 of 767 rows are byte-identical to zh's row for the same English and none differs; the 94 ru-only rows were checked by hand. New `PRON-RULES.md` records the conventions for them. 0 IPA edits.

### Batch 6 — meta.js (read in full)
- [unnatural] DESC «Работа и деловые письма»: «— без «Уважаемый…» и «С уважением» по-русски» → «— и чем заменить привычные «Уважаемый…» и «С уважением»».

### Batch 7 — interface (tools/i18n/ru/ui.json `t` only; read in full: 769 exact strings and 272 patterns)
- [wrong] Pronunciation toggle and fields: for ru the engine shows the *pronunciation* keys ('Aa pronunciation: on/off', 'Show pronunciation hints in practice', 'Blur pronunciation hints in Browse', 'Pronunciation hint (…)', 'English, pronunciation, meaning, note…'), which said «произношение» / «подсказки по произношению» while the course and profile glossary say «транскрипция» (and the romanization keys already did) → 9 values now use «транскрипция»: «Aa транскрипция: вкл.», «Показывать транскрипцию в практике», «Размывать транскрипцию при просмотре», «Транскрипция (необязательно)»… The pron lesson body now names these labels.
- [wrong] 'best' (followed by « 90%» on the practice end screen): «лучший 90 %» → «рекорд: 90 %» (as the pattern 'best {n}' «Рекорд: {1}»).
- [wrong] 'Text size' «Шрифт» (= font) → «Размер текста» (the control is A− / A+).
- [wrong] Accent swatches 'Accent red/green/blue/plum' and 'Accent {x}' «Акцент: красный» (reads as a speech accent in a language app) → «Цвет акцента: красный», matching the setting label «Цвет акцента».
- [format] Counts under a big number: 'cards learned' «карточек выучено» (reads «1 карточек выучено») → «выучено карточек» (label form, as the canvas «ВЫУЧЕНО КАРТОЧЕК»); canvas 'DAY STREAK' «ДНЕЙ ПОДРЯД» → «ДН. ПОДРЯД» (number-neutral, as the screen label «дн. подряд»).
- [unnatural] Level title 'Talker' «Болтун» (pejorative; meta.js TITLES says «Собеседник») → «Собеседник». Session sizes 'Long · 10' / 'long' «Долго» → «Подольше»; 'Steady…' «Идёшь ровно.» → «Стабильно.»; calibration line «самоуверенных карточек: {8}» → «карточек с ложной уверенностью: {8}».
- Checked, unchanged: tab bar «Сегодня · Практика · Повтор · Уроки · Чтение / Тренажёр · Прогресс · Отзыв»; every count pattern uses label + colon or a non-inflecting abbreviation (script check: no noun after a count slot, no agreeing word before one; only ordinals «Уровень 5», «карточка 3 из 10», «через 5 дн.» precede a slot); language slots are all at the start or after a colon; weekdays Пн Вт Ср Чт Пт Сб Вс; feedback «Верно!» / «Не совсем.»; practice instructions «Выбери правильный ответ», «Собери предложение», «Вставь пропущенное», «Напиши по-английски»; level titles now match meta.js TITLES. A structural diff against the original (every field except `t`) is identical.

### Batch 8 — roadmap (tools/i18n/ru/roadmap.json `t` only; read in full: 425 titles)
- [unnatural] «Испанский Испании», «Французский Франции», «Немецкий Германии» → «Испанский (Испания)», «Французский (Франция)», «Немецкий (Германия)» (zh fixed the same three).
- [unnatural] en A1 «be, личные местоимения, в каждом предложении нужно подлежащее» (lower-case start, glossary says «глагол to be») → «Глагол to be, личные местоимения: подлежащее нужно всегда».

### Batch 9 — second pass after an advisor review (cross-file consistency, prompts, verification)
- [wrong] past type «Я посмотрел фильм» accepted only *I watched a movie*, but the next lesson teaches the same Russian as *I saw a movie* → «Я посмотрел фильм (watch)» (zh fixed the same item). A sweep of the other single-answer `ty` items found no other prompt that naturally leads outside its accepted list.
- [wrong] present body: frequency words «прямо перед глаголом» with no exception → «(но после am / is / are: I'm always late)».
- [wrong] prep table: on = «поверхность, улица, транспорт», one row below *in the car* → «общественный транспорт».
- [format] One term per concept: «обычный глагол» (extra.js PATTERNS ×2) and «основной глагол» (a1 third-s) → «смысловой глагол», as in lessons.js and practice.js.
- [format] Same English, same gloss (lint meaning variants 11 → 8, and every remaining one is the same gloss plus a note, bar one): deck *Could you say that again?* «Можете повторить?» and *Could you speak more slowly?* «Можете говорить помедленнее?» → «Не могли бы вы…» (as the polite lesson and practice teach *could*); deck *It was nice talking to you* «Было приятно поговорить» → «Приятно было поговорить» (as the smalltalk body and practice); will body row and order prompt *I'll call you later* «позже» → «потом» (as the tense lesson and deck); idioms body *Let's call it a day* «На сегодня всё» → «На сегодня хватит» (as the deck).
- Remaining lint variants, kept on purpose: seven add a bracketed note to the same gloss («(I am live ✗)», «(постоянно)», «(вообще)», «(можно сказать и на совещании)», idiom glosses with a literal reading); *What do you do?* is «Чем вы занимаетесь?» in the deck (meeting people) and «Чем ты занимаешься?» in the questions lesson, whose examples all use ты (profile §2: ты between friends, вы for first meetings).
- Gender in prompts and glosses, recorded rather than changed: lessons.js and practice.js write «устал(а)»; more/*.js mostly use the masculine alone («Я устал», «Ты был занят?»). Both read naturally; unifying would touch about 40 strings for no teaching gain. A writer adding items should follow the file's own habit.
- Verified: 'best' is used once (practice end screen: «С первой попытки · 80 % · рекорд: 90 %»); count patterns rendered at 0, 1, 2, 5 and 21 (196 patterns with a numeric slot), for example «Карточек: 1» / «Карточек: 21», «Осталось раундов: 2», «Выбрано колод: 5», «Сейчас нечего повторять. Следующие — через 21 дн.», «Лучшая первая попытка 80 % · последняя 60 % · попыток: 21», «· дней: 1 · короткое занятие сохранит серию»; all read correctly.

## 2. Edit counts per file

| file | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js | 2 | 2 | 0 | 4 | 8 |
| extra.js | 1 | 5 | 0 | 2 | 8 |
| lessons.js | 4 | 1 | 0 | 1 | 6 |
| practice.js | 5 | 2 | 0 | 0 | 7 |
| more/a1.js | 6 | 2 | 0 | 2 | 10 |
| more/a2.js | 0 | 0 | 0 | 2 | 2 |
| more/b1.js | 0 | 0 | 0 | 0 | 0 |
| meta.js | 0 | 1 | 0 | 0 | 1 |
| i18n/ru/ui.json (`t`) | 16 | 5 | 0 | 2 | 23 |
| i18n/ru/roadmap.json (`t`) | 0 | 4 | 0 | 0 | 4 |
| **total** | **34** | **22** | **0** | **13** | **69** |

New files: `PRON-RULES.md` (settled IPA conventions for the 94 ru-only rows), `pron_check.js` (zh's checker pointed at ru; not part of the build), this `REVIEW.md`. "Formatting" includes terminology and cross-file consistency. The per-file totals match a line diff against the pre-review copies (`orig/` in the session scratchpad) and a `t`-by-`t` comparison of the two JSON files. One edit was reverted (polite check option, parity-bound) and is not counted.

## 3. What I read in full and what I only scanned
- **Read in full:** decks.js (405 cards: every meaning and every note); extra.js (86 dialogues, 54 examples, 25 patterns, 80 pause lines, 26 idioms); lessons.js (11 bodies, 33 checks); practice.js (11 sets, 154 items with every prompt, why and hint); more/a1.js, a2.js, b1.js (30 bodies, 90 checks, 422 shorthand items with every why and hint); meta.js; DECKNAMES.md; all 272 interface patterns; all 769 exact interface strings; all 425 roadmap titles.
- **Read in a one-line dump:** for the interface I read each English key next to its Russian `t`. Keys longer than 140 characters (about 15 privacy and onboarding paragraphs) were cut at 140 characters in that dump; their Russian values were read in full.
- **Checked by script, not by eye:** ё (a list of common ё-words across content, ui.json and roadmap.json: no misses), count slots in all 272 patterns (no noun after a count slot, no agreeing word before one), Hangul under tools/content/ru (none), word-level IPA consistency (pron_check.js) and the zh comparison of all 767 English → IPA rows.
- **Not read:** profile.json and deviations*.json (out of scope; not edited).

## 4. For a native speaker: top ten
1. **«Цвет акцента: красный»** for the theme-colour swatches (was «Акцент: красный», which reads as a speech accent in a language app).
2. **«ДН. ПОДРЯД»** on the share-card canvas, an upper-case abbreviation chosen so «1» and «21» both read correctly. Alternative: a label that is not a counted noun, such as «СЕРИЯ».
3. **«транскрипция» in every pronunciation-aid label** (chip «Aa транскрипция: вкл.», setting «Показывать транскрипцию в практике», card editor «Транскрипция (необязательно)»). This follows the glossary, but these keys would also serve any future non-IPA course shown in the Russian interface.
4. **«рекорд: 90 %»** on the practice end screen (the key 'best' is followed by the percentage).
5. Session sizes **«Быстро · 2 мин / Обычно · 5 мин / Подольше · 10 мин»**.
6. **«карточек с ложной уверенностью: {8}»** in the calibration line.
7. Dialogue *Me neither* rendered as **«Я тоже не очень»** (keeps the negation the lesson teaches; plain «Я тоже» is what Russians actually say).
8. **«Сразу увидите»** for *You can't miss it*, and **«Есть такой же, но чёрный?»** for *Do you have it in black?*.
9. **«Неплохо!»** for *Pretty good!* (body and fill prompt), and **«Собеседник»** for the level title *Talker* (was «Болтун»).
10. **Petrov /ˈpetrɑːv/** (an en-US voice may say /pəˈtroʊv/), and the roadmap title **«Глагол to be, личные местоимения: подлежащее нужно всегда»**.

## 5. Found but not fixed (outside scope or parity-bound)
- **Parity-bound English that a native would query:**
  - perfect-2 order *How long have you waited* for «Сколько ты уже ждёшь?» (natural English: *How long have you been waiting?*);
  - countable mc distractors *Do you have any question?* and *Can I have a water?* are defensible English;
  - be type «У неё есть кошка?» accepts only *Does she have a cat* (*Has she got a cat?* is rejected; the hint «does · have · cat» steers);
  - polite check 3 option «~ing (opening)» stays as in ko-en, because parity compares it as English; the glossary form would be «-ing-форма (opening)».
- **Card target still K-pop-specific:** *Who's your bias?* (deck «Кино, сериалы и сленг» and its dialogue). The note explains it. Changing the target needs a `decks` deviation.
- **Korean places in shared items** (Seoul, Busan, Jeju, Daegu, kimchi, Korea, won, Han Kang) stay, as profile §9 directs; their Russian prompts translate them literally.
- **Interface keys only an engine change can fix:** 'Type' serves both the quiz chip and the feedback radiogroup; 'You missed {n}' «Ошибок: {1} —» depends on what the engine prints after it; the Hangul-drill strings are loosely adapted for English.
- **Roadmap basis line** «Порядок CEFR A1–B1, адаптированный для носителей корейского» is a faithful translation of the shared English roadmap and reads oddly to a Russian user (the lead's call, as in zh).
- **deviations.json** carries `lessons:runglish` and `lessons:articles-3`, which parity reports as unused (they are covered by `extraLessons`). Not edited (out of scope).

## Checks (final run, scratch outputs)
```
node tools/content/gen.js ru $S/ru-r.js        -> wrote …/ru-r.js
node tools/content/validate.js ru $S/ru-r.js   -> PASS: all checks OK
node tools/content/parity.js ru $S/ru-r.js     -> PASS: shared English side matches ko-en
node tools/content/lint.js ru $S/ru-r.js       -> lint ru: 0 blocking · 8 meaning variants (info) · 0 K-pop leftovers (info)
python3 tools/i18n/gen.py ru $S/i18n-ru-r.js   -> exact 769 patterns 272 road 425
node tools/i18n/validate.js ru $S/i18n-ru-r.js -> exact=769 patterns=272 warnings=1 / PASS
python3 tools/i18n/road.py check ru            -> roadmap strings 425/425 translated
node --check (9 JS files under tools/content/ru) -> all OK
node tools/content/ru/pron_check.js            -> pairs 774 · phrase conflicts 0 · word conflicts 0 · rule hits 0
Hangul under tools/content/ru                  -> none
```
The i18n warning is the pre-existing "50 labels may overflow small buttons" length heuristic; the lead measured the tab bar and main screens at 390px.
