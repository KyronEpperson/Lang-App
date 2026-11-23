# Core words, Flirting and Compliments (en-ru): sources and skips

Writer EN-RU-T, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (the nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments), `lexicon-add-T.txt` (stress entries for words the generator did not know), this file and `POS-COVERAGE.md`. Eleven entries were appended to `profile.json`: the nine core decks in a new group `Core words`, then Compliments and Flirting in a new group `Conversation` (the course had no social group; `Conversation` is the name the Spanish course uses).

## 1. Frequency source actually opened

**Read this first: the head of each deck follows a real rank list; the tail is the writer's judgement.** In every core deck, the cards with a rank come first, in rank order. The cards without one follow, in the order the writer judged most useful. Section 2 lists, deck by deck, exactly which cards carry a rank.

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| MasterRussian.com, "1000 Most Common Russian Words": twelve pages, [ranks 1–50](https://masterrussian.com/vocabulary/most_common_words.htm), [51–100](https://masterrussian.com/vocabulary/most_common_words_2.htm), then `most_common_words_3.htm` … `most_common_words_12.htm` (ranks 101–1000) | The page says the list is adapted, with permission, from a frequency dictionary of Russian by Serge Sharoff, built from contemporary Russian texts. It gives lemmas with a part of speech. | © 2009 MasterRussian.com, all rights reserved. Only the rank numbers were used: no meaning, note or example was copied. | **Sort key and word choice for the top of each deck.** All twelve pages (ranks 1–1000) were read on 2026-11-23 through the session's fetch tool, which returns a transcription of the page, and retyped by the writer into a rank list kept in the writer's scratch folder (not in the course). |

What to know about this list:
- It looks literary. товарищ (210), солдат (353), генерал (410), капитан (386), рота (490), лейтенант (667), полковник (871) sit in the top 1,000, while everyday words such as спасибо (733) and пожалуйста (764) rank low and many words a visitor needs (кофе, привет, the days of the week) are missing. So the ranks were used to order words, and the writer chose which ranked words a beginner needs. Military, political and bookish words were left out: товарищ, солдат, генерал, капитан, рота, лейтенант, полковник, командир, офицер, армия, война, фронт, власть, партия, государство, правительство, народ, бог, господин, впрочем, ибо, сей, кой, таки, мол.
- One rank covers a spelling, not a meaning. есть (71) is either "to eat" or "there is"; both cards (`есть, съесть` in Top verbs and `есть` in Top words) are sorted at 71. что is sorted at its first rank (7).
- The source writes е for ё (далекий, вперед, черный). Ranks were matched with ё folded to е; the cards keep ё.
- A verb pair is sorted at the better rank of its two members (говорить 49 / сказать 29 → 29).

**Tried and not readable** (2026-11-23):
- ruscorpora.ru, "frequency dictionary" page of the Russian National Corpus main corpus: opened, but the list loads by script and the fetch tool saw only "Loading…". Not used, and not claimed as a source.
- dict.ruslang.ru (Lyashevskaya and Sharov, *New frequency dictionary of Russian vocabulary*, 2009): refused by the session's network allowlist.
- en.wiktionary.org, the Russian frequency appendix pages: refused by the network allowlist. `Wiktionary:Frequency_lists/Russian` opened, but it only links to other lists.

**Suggestion for the lead:** re-rank these same cards against a corpus lemma list (the RNC list above, or OpenSubtitles) from a machine that can download one. Only the order inside each deck should move.

Meanings, notes and examples are all written by the writer.

## 2. Which cards carry a rank, deck by deck

Numbers are the source ranks.

**Top nouns** (143 cards: 134 ranked, 9 by judgement)
- Ranked, in source order: человек 33, год 50, время 56, рука 57, раз 73, жизнь 79, день 81, голова 91, слово 104, место 107, лицо 110, сторона 122, нога 124, дверь 135, работа 140, земля 144, конец 145, час 147, город 149, ребёнок 162, сила 164, женщина 166, машина 167, случай 168, ночь 169, мир 171, вопрос 186, минута 199, правда 202, страна 204, свет 205, дорога 211, часть 221, вечер 236, история 257, мысль 259, сын 272, имя 284, стена 289, путь 299, месяц 304, язык 313, сердце 317, мальчик 320, небо 322, письмо 331, воздух 336, любовь 352, парень 369, солнце 372, неделя 373, мужчина 381, внимание 385, чувство 401, семья 408, момент 411, группа 418, муж 423, порядок 426, ответ 427, газета 430, помощь 431, собака 434, дерево 435, снег 436, сон 437, двор 442, угол 452, зуб 471, очередь 472, гость 476, ветер 478, море 493, гора 496, врач 497, река 501, вещь 515, боль 518, причина 520, девочка 524, номер 528, проблема 541, бумага 546, деревня 550, класс 569, счастье 580, план 583, картина 607, число 619, рубль 621, телефон 627, встреча 638, самолёт 641, игра 644, счёт 672, решение 678, компания 683, половина 702, идея 710, природа 756, звезда 759, опыт 777, правило 781, цветок 793, дождь 796, этаж 805, сосед 812, сестра 813, ситуация 817, совет 824, лето 828, цвет 833, поезд 841, музыка 842, площадь 856, радость 862, возраст 864, карта 866, цена 874, удовольствие 877, сад 888, пример 897, вино 912, учитель 914, птица 927, мнение 929, зима 932, лестница 939, детство 943, станция 953, команда 961, район 971, художник 991, стакан 996.
- By judgement, after the ranked ones: весна, осень, погода, праздник, отпуск, завтрак, обед, ужин, день рождения.

**Top verbs** (109 cards: 99 ranked, 10 by judgement)
- Ranked, in source order: быть 9, говорить, сказать 29, мочь 32, знать 51, стать 61, есть, съесть 71, хотеть 88, видеть, увидеть 94, идти, пойти 95, стоять 98, думать, подумать 106, спрашивать, спросить 108, жить 117, смотреть, посмотреть 119, сидеть 125, понимать, понять 126, делать, сделать 129, взять 132, казаться 139, давать, дать 153, оставаться, остаться 173, выходить, выйти 176, работать 178, любить 179, отвечать, ответить 190, значить 196, ждать, подождать 206, лежать 213, находить, найти 217, писать, написать 218, решать, решить 226, возвращаться, вернуться 230, считать 233, помнить 235, получать, получить 239, ходить 247, приходить, прийти 253, узнавать, узнать 260, уходить, уйти 266, слышать, услышать 269, слушать, послушать 270, бояться 271, садиться, сесть 283, читать, прочитать 291, начинать, начать 309, чувствовать, почувствовать 316, успевать, успеть 321, продолжать 325, забывать, забыть 329, просить, попросить 339, показывать, показать 345, вспоминать, вспомнить 346, держать 350, подходить, подойти 361, находиться 375, вставать, встать 378, играть 390, рассказывать, рассказать 392, спать 397, оставлять, оставить 398, входить, войти 399, искать 409, верить 417, бежать 441, приезжать, приехать 445, открывать, открыть 453, ехать, поехать 459, собираться 479, принимать, принять 481, уметь 486, случиться 487, стараться 499, звать 506, заниматься 512, покупать, купить 527, пить, выпить 537, объяснять, объяснить 560, нравиться, понравиться 564, улыбаться, улыбнуться 599, смеяться 615, приносить, принести 623, соглашаться, согласиться 629, терять, потерять 687, помогать, помочь 736, петь 760, называться 786, надеяться 787, выглядеть 847, учиться 848, разговаривать 850, встречать, встретить 861, повторять, повторить 894, плакать 904, лететь 923, носить 924, звонить, позвонить 946, мешать 948, желать 954, попробовать 955.
- By judgement, after the ranked ones: готовить, приготовить, учить, выучить, гулять, отдыхать, отдохнуть, платить, заплатить, закрывать, закрыть, ездить, болеть, опаздывать, опоздать, знакомиться, познакомиться.

**Top adjectives** (79 cards: 71 ranked, 8 by judgement)
- Ranked, in source order: самый 59, новый 116, последний 150, белый 194, главный 203, далёкий 227, русский 250, полный 252, общий 262, прошлый 265, известный 267, похожий 278, высокий 298, целый 307, огромный 308, настоящий 311, живой 323, разный 337, тяжёлый 396, длинный 400, следующий 414, знакомый 429, сильный 432, простой 444, зелёный 450, странный 488, короткий 492, добрый 494, тёмный 495, лучший 500, страшный 504, лёгкий 525, широкий 530, серый 536, пустой 561, чистый 575, худой 581, чужой 584, бывший 589, близкий 591, больной 594, старший 609, правый 633, холодный 635, родной 649, открытый 650, жёлтый 653, местный 675, российский 685, тёплый 691, обычный 698, важный 714, поздний 722, готовый 749, тихий 778, голубой 808, слабый 819, уверенный 822, любимый 826, серьёзный 834, быстрый 843, левый 849, детский 851, горячий 855, счастливый 858, современный 883, весёлый 886, американский 901, здоровый 931, свободный 938, дорогой 978.
- By judgement, after the ranked ones: умный, вкусный, дешёвый, трудный, смешной, грустный, удобный, рад.

**Top adverbs** (70 cards: 60 ranked, 10 by judgement)
- Ranked, in source order: так 26, только 39, уже 44, потом 85, очень 86, теперь 96, тоже 97, здесь 105, тогда 112, просто 123, вдруг 130, всегда 157, сразу 170, совсем 172, почти 181, много 187, снова 189, опять 193, никогда 209, вообще 222, вместе 245, наконец 258, назад 261, давно 268, долго 275, быстро 276, точно 314, иногда 319, также 351, особенно 363, мало 384, туда 388, сюда 389, действительно 394, слишком 395, немного 419, тихо 428, наверное 461, часто 465, домой 466, сначала 482, вперёд 508, медленно 509, довольно 514, далеко 532, плохо 533, обычно 539, скоро 556, однажды 565, кстати 596, трудно 601, легко 610, возможно 613, вниз 642, достаточно 712, интересно 836, правильно 919, недавно 920, обязательно 941, понятно 967.
- By judgement, after the ranked ones: конечно, рано, поздно, близко, везде, нигде, редко, громко, чуть-чуть, по-русски.

**Top pronouns** (41 cards: 20 ranked, 21 by judgement)
- Ranked, in source order: что 7, тот 8, весь 12, они 18, этот 30, который 31, такой 38, себя 40, другой 64, наш 65, свой 66, сам 72, каждый 115, никто 133, ваш 142, твой 185, никакой 216, любой 256, многие 637, чей 815.
- By judgement, after the ranked ones: ничего, всё, меня, тебя, его, её, нас, вас, их, мне, тебе, ему, ей, нам, вам, им, кто-то, что-то, кто-нибудь, что-нибудь, какой-то.

**Top prepositions** (30 cards: 26 ranked, 4 by judgement)
- Ranked, in source order: в 2, на 5, с 10, по 16, к 19, у 20, из 22, за 24, от 28, о 34, для 45, до 53, под 68, без 93, после 103, через 109, над 131, перед 136, между 191, про 197, кроме 302, вокруг 330, против 440, мимо 566, вместо 608, около 614.
- By judgement, after the ranked ones: напротив, рядом с, из-за, благодаря.

**Top conjunctions** (20 cards: 14 ranked, 6 by judgement)
- Ranked, in source order: и 1, а 11, но 17, когда 43, или 54, если 55, ни 60, чтобы 74, чем 77, ли 89, хотя 156, однако 212, либо 483, зато 838.
- By judgement, after the ranked ones: как будто, так что, то есть, так как, как только, а то.

**Top interjections** (23 cards: 3 ranked, 20 by judgement)
- Ranked, in source order: ну 67, ладно 455, ах 794.
- By judgement, after the ranked ones: ой, ого, ух ты, ура, ай, ох, эх, фу, ага, угу, эй, увы, блин, ничего себе, боже мой, слава богу, давай, вот это да, да ну, тише.

**Top words** (50 cards: 28 ranked, 22 by judgement)
- Ranked, in source order: не 3, как 14, же 27, один 35, бы 37, даже 63, есть 71, два 75, первый 80, надо 92, ведь 113, несколько 146, второй 158, куда 159, сколько 234, зачем 248, нельзя 273, пора 279, пять 280, тысяча 303, пусть 312, откуда 354, третий 357, разве 424, сто 616, шесть 704, семь 885, неужели 940.
- By judgement, after the ranked ones: должен, нужно, жаль, ноль, восемь, девять, одиннадцать, двенадцать, тринадцать, четырнадцать, пятнадцать, шестнадцать, семнадцать, восемнадцать, девятнадцать, понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.

## 3. Fitting the decks to Russian

- **No slot renamed or added.** Russian has all eight classes, including real prepositions, so the nine fixed decks stay. Russian has no articles and no measure words.
- **Particles and predicatives go in Top words**, each explained in plain English in its note (the profile's glossary has no term for either): the particles не, же, бы, ведь, разве, неужели, пусть (Russian grammar treats частицы as their own class, but there are too few at this level for a deck), and the "state words" надо, нужно, нельзя, пора, жаль, plus должен (a short adjective used like "must"). ли went to Top conjunctions as "whether". Question words (как, куда, откуда, зачем, сколько) are in Top words; когда is in Top conjunctions because it joins clauses as often as it asks; что is in Top pronouns. Ordinals (первый, второй, третий) are in Top words with the numbers.
- **Nouns** are in the nominative singular, and every note starts with the gender ("Masculine.", "Feminine (soft sign).") and gives an irregular plural where there is one (люди, дети, города). день рождения and рядом с are two-word cards because they work as one word.
- **Verbs are aspect pairs** where a beginner needs both: one card, target `imperfective, perfective` (`делать, сделать`), the я-form of the imperfective in the note, then the perfective's я-form marked "(future)". The pron tool cannot read "/", so the comma joins the pair. A verb a beginner needs in one aspect only is a single card, marked "(perfective)" when it is one (стать, взять, случиться, попробовать). взять is carded alone because its partner брать is already a card in Letters 3. идти / ходить and ехать / ездить are separate cards, with a note that they are not aspect partners. Irregular verbs are flagged "Irregular".
- **Adjectives** are in the masculine; the note gives the feminine, neuter and plural (or the short form where that is what people use: готов, уверен, свободен, похож).
- **Prepositions**: every note names the case it takes, with an example (в + prepositional for where, + accusative for where to). Variants во, со, ко, об are mentioned in notes, not carded.
- **ты / вы**: every meaning with a singular "you" carries "(formal)" or "(informal)" (or "(to a man)" / "(to a woman)"); the other form is in the note. Flirting uses ты, as two adults do once they are friendly, except the openers to a stranger (Можно с вами познакомиться?, Можно ваш номер телефона?), which use вы. Compliments use вы with hosts and older people and ты with friends, as the plan says.
- **Speaker's gender**: first-person lines that change with the speaker carry "(a man)" or "(a woman)" in the meaning and the other form in the note (Я хотел бы увидеть тебя снова: a woman says хотела). This settles the plan's open question the course's usual way.

## 4. Words skipped because the course already teaches them

The release check compares targets, so these words from the rank list were not carded again (comparison ignores capitals and . , ! ?). "Already taught in" names the existing deck.

- **Top nouns**: девушка (Traps for English speakers: Девушка!); друг (People and family); дом, банк (Letters 2); вода, хлеб, рыба (Food and drink); стол, комната, улица, квартира, кухня, стул, кровать (Home and city); отец, дядя, дочь, бабушка (People and family); деньги (Numbers and money); жена, мать, брат, школа, центр, чай (Letters 3); окно, утро, Москва, мама (Letters 1); папа (Letters 2); начальник (Work and study); кабинет, фамилия (Traps); магазин (Shopping and things). Also left out as near-duplicates of existing cards: книга (книги is a card in Shopping and things), ключ (ключи).
- **Top verbs**: брать (Letters 3), so its partner взять is carded alone.
- **Top adjectives**: большой, хороший (Describing people and things, found by the build script); старый, маленький, молодой, красный, чёрный, синий, красивый, интересный (Describing people and things).
- **Top adverbs**: ещё, хорошо (Letters 3); там, тут (Letters 1); сейчас, сегодня, вчера, утром, днём, вечером, ночью (Time and days); завтра (Letters 2); прямо, направо, налево (Getting around); осторожно (Health and help: Осторожно!); почему (Likes and feelings: Почему?).
- **Top pronouns**: я (Letters 3); он, она, оно, кто (Letters 1); ты, мы, вы, мой, это (Letters 2); какой (Describing people and things: Какой?).
- **Top conjunctions**: потому что (Likes and feelings, found by the build script); поэтому (Likes and feelings).
- **Top words**: где (Letters 2); вот (Letters 1); да (Letters 2), нет (Letters 1); можно (Greetings and politeness: Можно?); пока (Formal and informal: Пока!); три, четыре, десять, двадцать (Numbers and money); спасибо, пожалуйста (Greetings and politeness).
- **Top prepositions, Top interjections**: none.

Total: 80 words of the rank list skipped as already taught (plus потому что and the unranked утром, днём, вечером, ночью, направо, налево), and 2 near-duplicates (книга, ключ).

## 5. Words placed in one deck only

- **Left for Flirting** (so not in Top nouns / Top adjectives, though frequent): голос (148), глаза (глаз 78), взгляд (246), улыбка (801), милый (890), прекрасный (741), волосы (волос 526). умный stays in Top adjectives; Flirting uses умница instead. красивый and симпатичный are already cards, so Flirting uses красавица / красавец and the phrases.
- давай is in Top interjections, so Flirting and Compliments use it only inside phrases.
- Compliments and Flirting share no target. The plan's "Ты такой умный!" is in Compliments; Flirting has "Ты умница!".

## 6. Pron tool

Every pron was generated by `respell.js` from a build script and pasted unchanged; `repron.js` reports 0 rewritten.

- **Stress entries added:** 250 words the generator did not know, in `lexicon-add-T.txt`, one per line, each tagged `unverified:model` (the writer's knowledge, not looked up). Two of the writer's own entries were caught as wrong on review and fixed before release (приготОвить, ширОкий). The script refused any spelling the generator already knew, so no built-in entry, clitic or homograph was replaced, and the prons of every existing card and lesson example row are byte-identical before and after (checked by script). This list is the main thing for a native speaker to read.
- **Left out because the tool gets it wrong or cannot settle it:**
  - дело: the built-in list has делО; the word is дЕло. Correcting it would mean replacing a built-in entry, which this job may not do. **Suggestion for the lead:** add `дЕло` to `lexicon.txt`, then card дело in Top nouns.
  - дома ("at home"): a listed homograph (дОма / домА), so a bare card throws. домой is carded, and its note points to дома.
  - хм, тсс: no vowel, so the tool throws. Not carded.
- **Pasted unchanged, worth knowing:** short prepositions and particles are clitics, so a bare card shows them unstressed, as they sound before a word: в → `f`, о → `ah`, для → `dlih`, не → `nih`. Their notes say they are said with the next word. приезжать keeps the built-in `pree-yihz-ZHAHT'` (the зж is really a long ж). -шься endings come out as `-sh-syah` (смеёшься, нравишься). съесть and сесть both come out as `syehst'`: the key does not show the separating ъ.

## 7. Counts

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 143 | 8 | 0 |
| Top verbs | 109 | 67 | 0 |
| Top adjectives | 79 | 47 | 0 |
| Top adverbs | 70 | 41 | 0 |
| Top pronouns | 41 | 41 | 0 |
| Top prepositions | 30 | 21 | 0 |
| Top conjunctions | 20 | 14 | 0 |
| Top interjections | 23 | 0 | 23 |
| Top words | 50 | 0 | 0 |
| Flirting | 61 (23 words, 21 phrases, 17 moves and replies) | 6 | 24 |
| Compliments | 32 | 3 | 10 |

Plus 4 PATTERNS in `extra-t.js`.

## 8. Flirting and Compliments

- **Flirting** starts from Deck 2 of `docs/plans/compliments-ru.md` and extends it in three layers: 23 single words (adjectives and nouns, each note with the other gender and mild / warm / bold), 21 phrases grouped by the word they come from, then 17 moves and replies: openers, asking out, a warm yes (С удовольствием!), a playful yes (Почему бы и нет?), two playful deflections, and four kind, clear no's (Спасибо, но у меня есть парень; Мне приятно, но нет; Давай останемся друзьями; Извини, но я не хочу). Nothing about bodies beyond eyes, smile, hair and voice; no Я тебя люблю. Changed from the plan: "Ты меня всё время смешишь" became "Мне нравится, как ты смеёшься" (more natural as a line), "Извини, но мне это неинтересно" became "Извини, но я не хочу" (less cold), "Я надеялся, что ты придёшь" was dropped (speaker-gendered and close to Я хотел бы…). Russian dating still expects the man to make the first move; the lines are written so either can say them unless the meaning says otherwise.
- **Compliments** is the plan's Deck 1 (22 cards) plus 10: Какой вкусный борщ!, Пальчики оближешь!, Отличная работа!, Я тобой горжусь., Ты здорово поёшь!, Как красиво ты рисуешь!, Какое красивое платье!, Какая красивая квартира!, Вы слишком добры., Мне очень приятно это слышать. Its notes repeat the plan's cultural point: Russians praise less casually, so a compliment means more.
