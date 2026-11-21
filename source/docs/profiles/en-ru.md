# English speakers learning Russian: course profile

Course `en-ru`: Russian for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Russian (Cyrillic). The machine-readable twin is `tools/target/ru/profile.json`, built from the same data as §8 and §9, so the two agree. **The `pron` line is generated** by `tools/target/ru/respell.js` (`node respell.js "<Russian>"` prints `<Russian> -> <pron>`; it exports `respell`, `pattern`, `accent`). Its stress comes from a word list inside it, and it **throws** on any word it does not know (§6.1). Writers never type a pron.

(`docs/profiles/ru.md` belongs to the reverse course, English for Russian speakers. This profile does not use or change it.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(abstract only)** means only the abstract or a record page was read. **(second-hand)** means the study is cited from another source that was opened.
- **[curriculum convention]**: what syllabuses, textbooks and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or app's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Russian**. Every claim of this kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant, voice, register:** Standard Russian (Moscow norm), `ru-RU` voice. **вы** is the default "you" with strangers from lesson 5; ты comes in the same lesson for friends and family. Every English prompt containing "you" carries a cue: "(formal)" or "(informal)". Name + patronymic are taught for recognition only.
- **Biggest traps (§4):** case endings after verbs and prepositions; gender agreement (моя мама, она была); an inserted "is" (*Я есть студент*); soft consonants and ь; stress and vowel reduction; Cyrillic letters that look like English ones (Р, Н, В, С, У, Х, Е); "have" (у меня есть); aspect; going on foot vs by transport; double negation; dative constructions (мне нравится, мне холодно); numbers with nouns; false friends.
- **Standing rule (§7):** every set re-tests **(a) case endings** and **(b) gender agreement**. Keywords such as "prepositional case" and "feminine form" were tested on 40 sample lines. The rule is met in the script lessons through он / она / оно and мой / моя / моё.
- **Pronunciation aid (§6):** an English-letter respelling with the stressed syllable in capitals, generated: `spah-SEE-bah`, `mah-lah-KOH`, `sihm'-YAH`, `f SHKOH-lih`. Reduction, soft consonants, ь and devoicing are shown. It is required on every card and example row and can be hidden once the script is learned. **Card fronts:** plain Cyrillic in the source. A stress-marked front (молоко́) is derived by `accent()` and requested from the engine.
- **Script (§10):** three letter lessons (`alphabet`, `letters`, `sounds`) and three letter decks with one key word per letter: friends and false friends, then new shapes, then soft vowels and hushing sounds. Only printed letters are taught; cursive is not. Tiles are the default answer mode. Typing uses the phone's Russian keyboard; a Latin-transliteration matcher is requested.
- **Lessons (§8):** 28. All 27 roadmap items are kept. `letters` is added, so the alphabet takes two lessons. `intonation` moves after `eto`, `adjectives` moves to stage 2, and `past` moves before `dative`.
- **Decks (§9):** 18 decks in 5 groups, including the 3 letter decks, "Formal and informal" and "Traps for English speakers".
- **Engine (§10.7):** 11 requests. The top three are е accepted for ё in typed answers, a Russian-aware accent fold in the validator, and a pron-visibility toggle. Each request says what the course does if it is not built.

## 2. Variant, register and voice

### 2.1 Variant: Standard Russian (Moscow norm)

- The roadmap names "Standard Russian" with the TORFL Elementary (A1) state standard as its basis [curriculum convention]. The build plan keeps it.
- **Voice:** `ttsLang: "ru-RU"`. The pronunciation taught is the standard (Moscow / literary) norm used in US first-year courses: akanye, ikanye, final devoicing and the -ого said "-ovo" ([Mezhdu nami 1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml); [UT Austin, Russian online, voicing](https://embed.la.utexas.edu/russian-online/1-3-phonetics-voicing-b)) [curriculum convention]. Regional features (okanye, the southern fricative г) are not taught.
- **Roadmap items changed by this variant:** none. The changes in §8 come from the learners and the script.

### 2.2 ты and вы

**Taught default: вы with strangers, ты with friends and family.**
- [practitioner opinion] Use вы with anyone you do not know, with older people and with anyone above you at work, even someone your own age. Use ты with friends, family and peers. Some families use вы with aunts and uncles ([Babbel, *How to address people in Russian*](https://www.babbel.com/en/magazine/how-to-address-people-russian)).
- [inference] A US adult will first speak Russian to teachers, hosts, shop staff and colleagues, so the safe form comes first. вы is also the plural "you", which the learner needs anyway.

| Stage | What the learner sees | In practice answers |
|---|---|---|
| Lessons 1–4 (script) | Words only: no "you" sentences, except fixed phrases in card notes (Спасибо, Здравствуйте). | No "you". |
| `greetings` (5) | Both forms side by side: Здравствуйте / Привет, Как вас зовут? / Как тебя зовут?, Как у вас дела? / Как дела?, До свидания / Пока. When to switch: the older or more senior person offers (Давай на ты?). Deck "Formal and informal". | вы-forms and ты-forms, **always cued** "(formal)" or "(informal)". |
| `present` (12) on | The full verb paradigm, including the ты-form (-ешь / -ишь) and the вы-form (-ете / -ите). | Same cue rule. Dialogues between friends use ты; between strangers, staff and teachers, вы. |
| `imperative` (26) | -те imperatives (Скажите, Помогите) for вы, and bare forms (Скажи, Помоги) for ты. | Cued. |

**Rules for writers**
- An English prompt with "you" (singular) always carries "(formal)" or "(informal)". "(to a friend)" or "(to a stranger)" may replace them. The answer list has only the cued form. A plural "you" is cued "(you all)" and takes вы.
- вы is written lowercase in dialogues and practice. A capital Вы is used only in letters to one person, which the course does not teach. The matcher ignores case anyway.
- Card meanings mark the register: "What's your name? (formal)" / "What's your name? (informal)". This also keeps meanings unique within a deck (TARGET-BRIEF).

### 2.3 Names, patronymics and the speaker's gender

- **Name + patronymic, recognition only.** Russians address teachers, older people and bosses by first name + patronymic: Анна Сергеевна, Иван Петрович. Male patronymics end in -ович / -евич, female ones in -овна / -евна. Patronymics are not surnames, which typically end in -ов / -ова ([Babbel](https://www.babbel.com/en/magazine/how-to-address-people-russian)) [practitioner opinion]. The course shows them in dialogues with teachers and bosses and explains them in `greetings`. Learners never type one.
- **Short names** (Маша for Мария, Саша for Александр or Александра, Дима for Дмитрий) are used among friends. A card note explains them once, in `greetings`.
- **The speaker's gender changes the words.** Past tense (я был / я была), рад / рада, студент / студентка, and later занят / занята. Rule: a prompt that says who speaks ("(a woman)", "(a man)") has one answer. A prompt with "I" and no cue lists **both** forms in `a`, with the masculine first, and the `why` says so ("A woman says была"). Card meanings for gendered first-person phrases carry the cue: "I was at home. (a man)".

### 2.4 Politeness basics an A1 learner needs

| Item | What to teach | Lesson / deck |
|---|---|---|
| Здравствуйте / Привет; До свидания / Пока | Formal and informal hello and goodbye. The first в of здравствуйте is silent. | `greetings`; Greetings and politeness |
| Доброе утро, Добрый день, Добрый вечер, Доброй ночи | Time-of-day greetings. Доброй ночи is said late at night, Спокойной ночи when someone goes to bed (§11). | `greetings` |
| Пожалуйста | "Please", "you're welcome" and "here you are". It goes after the request word or at the end: Дайте, пожалуйста, воду. | `stress`; Greetings and politeness |
| Спасибо, Спасибо большое | Thanks; the answer is Пожалуйста or Не за что. | `stress` |
| Извините / Простите (formal), Извини / Прости (informal) | "Excuse me" and "sorry". | `greetings` |
| Можно…? | "May I…?" / "Can I have…?": Можно меню? Можно картой? The most useful polite frame at A1. | `stress`, `dative` |
| Дайте, пожалуйста… | In shops and cafés an imperative + пожалуйста is the normal polite request [inference]. Будьте добры… appears in recognition only. | `imperative`; Shopping and things |
| Девушка! / Молодой человек! | Attracting a stranger's attention, for example a waiter or a shop assistant. Recognition only, with a note that it is normal in Russia and not flirtatious [inference, §11]. | Formal and informal |
| Как дела? → Хорошо, спасибо. А у вас? / А у тебя? | Not *А вы? / *А ты? ([italki](https://italki.com/article/240/the-4-most-common-mistakes-made-by-english-speakers-learning-russian)) [practitioner opinion]. | `greetings`; Traps |
| No господин / госпожа | These are used only in formal or foreign contexts ([Babbel](https://www.babbel.com/en/magazine/how-to-address-people-russian)). Not taught. | none |

`greet` in `profile.json`: Доброй ночи ("Good night (late at night)"), Доброе утро, Добрый день, Добрый вечер. Доброй ночи as a late-night slot greeting is on the native-check list (§11).

### 2.5 Voice of the English text

- Plain, friendly US English with US spelling, as in en-es, en-ja and en-zh. A `why` is one sentence.
- **Russian inside English text:** put it in `<b>` in lesson bodies, and write it bare in plain-text fields (`why`, `hint`, notes). **Never put Russian in `<i>`.** Cyrillic italics change shape: italic т looks like m, и like u, д like g, so a learner who knows only print cannot read them [inference]. Russian is never written in Latin letters, except in the English prompts of the three letter lessons (§6.6).
- Name grammar with the §3 terms, always the same way: "the prepositional case", "the feminine form".
- Sample voice lines:
  1. "Russian has no word for 'is' here: Это мой брат is simply 'this my brother'."
  2. "After в meaning 'in', the noun takes the prepositional case: Москва → в Москве."
  3. "Nice work! Review these cards tomorrow so they stick."

### 2.6 Russian text conventions (every file)

- **Plain Cyrillic, NFC.** No stress marks (U+0301) anywhere in the source: not in targets, examples, dialogues, practice or lesson bodies. Stress lives in the pron line, and in a derived display if request 4 of §10.7 is built. The reason: targets are also the voice input, the deck-typing answer and the DIALOG / EXAMPLES keys, and nothing on today's exact-match path strips U+0301 (§10.5).
- **ё is always written** (ещё, всё, Пётр, ёлка, идёт). Texts for learners of Russian use ё consistently, with stress marks ([Eskova 2012, on the 2006 Academic Handbook rules](https://orfo.ruslang.ru/docs/articles/eskova-o-bukve-2012.pdf)) [curriculum convention]. The generator relies on it: ё is always stressed, so a word with ё needs no list entry.
- **Numbers in words** in all Russian strings (пять рублей, в два часа), so the voice, the pron and the matcher see the same thing. Digits may appear in English prompts and notes ("₽500"). The generator throws on digits.
- **Punctuation:** Russian rules. A comma goes before что, потому что, но, а and before a name being addressed (Анна, привет!). The quotation marks are « ». The dash (Москва — столица) is avoided in A1 sentences; write Это… sentences without it. **Card targets** may end in . ! ? (the deck matcher strips them); practice answers may carry them (ignored).
- **Capitals:** sentence-initial and proper names (Москва, Анна). Nationality and language adjectives are lowercase (русский, американец), as in Russian [inference].

## 3. Glossary

These are the [curriculum convention] terms of English-language Russian courses. The case names, "spelling rule", "palatalization" and "hard / soft stem" appear in [Mezhdu nami's scope and sequence](https://mezhdunami.org/scope.shtml). Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| Cyrillic; letter; printed letter | alphabet (for one letter), character | Cursive is not taught; mentioned once in `alphabet` |
| stress; stressed syllable | accent (for stress) | "accent mark" only for the written mark ́ |
| vowel reduction | akanye, ikanye | Russian names once, as a gloss, in `stress` |
| **hard consonant / soft consonant** | palatalized, non-palatalized | "palatalized" once, as a gloss, in `sounds` |
| soft sign (ь); hard sign (ъ) | yer | |
| voiced / voiceless consonant; final devoicing | obstruent | "devoicing": "б sounds like п at the end of a word" |
| respelling (the `pron` line) | transliteration, romanization | "transliteration" is the typing scheme of §10.5 only |
| **masculine, feminine, neuter**; gender | genus | **standing-rule keywords** in "masculine form / ending", "feminine form", "neuter form" |
| **agree / agreement** ("моя agrees with мама") | concord | keyword "agrees with" |
| **nominative, accusative, genitive, prepositional, dative, instrumental case** | locative, 1st–6th case | **keywords** with "case", "ending", "singular" or "plural" after them |
| **case ending** | inflection, desinence | keyword |
| plural; singular | | "plural form" is a keyword (agreement) |
| possessive (мой, твой, наш, ваш, его, её, их) | possessive pronoun / determiner (both fine in prose) | |
| personal pronoun (я, ты, он…) | | |
| first conjugation (-ешь verbs: читаешь), second conjugation (-ишь verbs: говоришь) | е-conjugation / и-conjugation | the roadmap's "two conjugations" |
| stem; ending | root (for stem) | |
| infinitive | dictionary form | |
| reflexive verb (-ся verbs: учиться) | middle voice | |
| **imperfective / perfective**; aspect | | Imperfective = process or habit; perfective = one completed result |
| aspect pair (читать / прочитать) | | |
| verbs of motion; going one way (идти, ехать) / going and coming back, or often (ходить, ездить) | unidirectional / multidirectional | the Latin terms once, as a gloss, in `motion` |
| imperative | command form | |
| short form (рад, занят, должен) | short adjective | |
| spelling rule (after г к х ж ш щ ч write и, not ы) | seven-letter rule | Mezhdu nami's "7-letter spelling rule" once, as a gloss |
| animate (people and animals) | | for the accusative of masculine nouns: брата |
| indeclinable (кофе, метро, кафе) | | |
| patronymic; short name | diminutive (fine once, as a gloss) | |
| false friend; calque ("word-for-word copy from English") | false cognate | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with learner data from English speakers come first.
2. Then items that occur in nearly every sentence and can be checked in typed or tiled practice.
3. Then lexical and lesson-local traps.

Opened learner research is thin and mostly abstracts. The two older case studies (Thompson 1980, Rubinstein 1995) are known only through a thesis that cites them (§11).

1. **Case endings after verbs and prepositions**
   - Wrong → right:
     - Я живу в Москва → Я живу в Москве (в meaning "in" takes the prepositional case)
     - Я люблю Анна → Я люблю Анну (the object takes the accusative case)
     - Я иду в школе → Я иду в школу (direction: в + accusative; location: в + prepositional)
     - нет хлеб → нет хлеба (нет takes the genitive case)
     - чай с молоко → чай с молоком (с "with" takes the instrumental case)
     - Я звоню мама → Я звоню маме (звонить takes the dative case)
     - У я есть брат → У меня есть брат
   - [research-backed (second-hand)] Thompson (1980), 12 learners in unstructured interviews: order of accuracy nominative, accusative / prepositional, genitive, then dative / instrumental, with the dative at 55% accuracy against 74–95% for the other cases. Rubinstein (1995), 136 learners in structured interviews: a similar order, with the dative the hardest, and "no evidence of developmental stages". Both are cited in [Sabia 2003, UGA MA thesis](https://openscholar.uga.edu/record/16208/files/sabia_inna_d_200308_ma.pdf). Sabia's own single-learner study names the nominative as the most likely substitute for a required case and counts errors in the possession construction (4) and in the dative of age (2).
   - [research-backed (abstract only)] Kempe & MacWhinney (1998), *SSLA*: adult English speakers learning Russian used case marking to understand sentences much earlier than learners of German. Russian endings are more reliable cues, although the system is more complex ([abstract](https://rke.abertay.ac.uk/en/publications/the-acquisition-of-case-marking-by-adult-learners-of-russian-and-/)). So learners can use endings early if they meet them often, which is the argument for re-testing them in every set.
   - [research-backed (abstract only)] The Russian Learner Corpus, mostly learners whose dominant language is US English, has a tag (Gov) for the wrong case after a verb or preposition. One example given is the dative вам used where the accusative вас is required ([RLC paper, HSE](https://fpp.hse.ru/data/2015/09/24/1074224076/Lancaster_21.07-24.07.docx)).
   - Design consequence: strand (a) of the standing rule (§7). Case forms are separate tiles, and the wrong form of the same noun is the distractor.

2. **Gender agreement: possessives, adjectives, past tense, он / она / оно**
   - Wrong → right:
     - мой мама → моя мама; моя папа → мой папа (папа is masculine although it ends in -а)
     - новый машина → новая машина; красивый окно → красивое окно
     - Она был дома → Она была дома; Анна сказал → Анна сказала
     - Где метро? — Вот он → Вот оно
   - [research-backed] Denhovska & Serratrice (2017), *Journal of Psycholinguistic Research* 46(5): 40 English-speaking adults with no Slavic background learned Russian noun–adjective agreement. Incidental learners judged agreement well (about 94%) but produced correct adjective endings only about 12% of the time, against about 80% for learners given explicit instruction ([article](https://link.springer.com/article/10.1007/s10936-017-9487-x)). The paper calls gender agreement demanding for adult learners whose L1 has no grammatical gender.
   - Design consequence: strand (b) of the standing rule. Every lesson body states the agreement explicitly, the finding being that explicit teaching made production possible.

3. **"Is" and articles copied from English**
   - Wrong → right:
     - Я есть студент → Я студент
     - Это есть мой дом → Это мой дом
     - Это один дом (for "This is a house") → Это дом
     - Это не трудно говорить по-русски → Говорить по-русски нетрудно
   - [practitioner opinion] [elon.io, *Grammar calques*](https://elon.io/grammar/russian/mistakes/false-cognate-grammar) puts the inserted present "to be" first.
   - [research-backed (abstract only)] The RLC paper attributes *это не трудно говорить* to transfer from English ([RLC paper](https://fpp.hse.ru/data/2015/09/24/1074224076/Lancaster_21.07-24.07.docx)).
   - Design consequence: taught in `eto` and kept in the Traps deck. It is not a standing-rule strand: no tile distractor can be both wrong and tempting in every lesson (§7).

4. **Soft consonants and the soft sign**
   - Wrong → right (said or typed):
     - мат (checkmate) for мать (mother); брат (brother) for брать (to take)
     - день said "dyen" with a hard n; учитель typed as учител
     - нет said with a hard н ("net")
   - [research-backed (abstract only)] Nissen, Hacking, Smith & Allen (2016), *Journal of Phonetics* 54: six English-speaking learners with substantial classroom and immersion experience showed "little if any" evidence of contrasting soft and hard word-final consonants. The authors suggest that immersion alone may not be enough ([BYU record](https://scholarsarchive.byu.edu/facpub/7323)).
   - [research-backed (abstract only)] Simonchyk & Darcy (2017): 40 American learners did not keep separate word forms for plain and palatalized consonants, especially word-finally; better perception helped advanced learners only partly ([IU ScholarWorks](https://scholarworks.iu.edu/dspace/items/0468f26b-9034-4df0-be5d-19be91202ba2)).
   - Design consequence: `sounds` and the Letters 3 deck (мать / мат, брат / брать). The respelling marks every soft consonant (`maht'`, `nyeht`). `mc` and `fi` distractors use ь pairs wherever the lesson's words allow.

5. **Stress and vowel reduction**
   - Wrong → right (said): молоко read "mo-lo-ko" → mah-lah-KOH; хорошо → khah-rah-SHOH; ресторан with English stress on the first syllable; сестра with an "eh" → sihs-TRAH.
   - [curriculum convention] Every Russian word has one stressed syllable, it can fall anywhere, and it must be learned with the word. Unstressed о and а are reduced toward "uh", е and я toward "i", while ы, у and ю keep their quality. Misplaced stress "can seriously hinder understanding" ([Mezhdu nami 1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml)).
   - [research-backed (abstract only)] Hacking & Hayes-Harb found that stress marks did not help learners link lexical stress to new words, which raises questions about the standard reliance on them ([AATSEEL abstract](https://aatseel.org/100111/pdf/abstracts/850/HackingHayesAbstract.pdf)). Their teacher survey's results were not in the abstract.
   - Design consequence: the `stress` lesson; the respelling shows stress **and** reduction; audio on every row (§6).

6. **Letters that look like English letters**
   - Wrong → right (read): Р read as p (ресторан → "pectopah"); Н as h; В as b; С as k; У as y; Х as x; Е as "ee" (нет → "neet"); И read as N; Ы confused with "bl".
   - [curriculum convention] Mezhdu nami flags е / ё and Б / В as look-alikes ([1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml)). The "false friends" grouping (В Е Н Р С У Х) is the brief's and common practice [practitioner opinion; no source opened].
   - Design consequence: `alphabet` teaches true friends and false friends together, and Letters 1 gives each false friend its own card with the trap in the note.

7. **"Have": у меня есть**
   - Wrong → right: Я имею брата → У меня есть брат; У меня нет брат → У меня нет брата; У меня есть болит голова → У меня болит голова.
   - [curriculum convention] Mezhdu nami teaches У меня есть / У меня нет together with the genitive ([scope](https://mezhdunami.org/scope.shtml)). Sabia (2003) counts possession-construction errors in one learner. The rest is [inference].

8. **Verb endings: who does it**
   - Wrong → right: я работает → я работаю; ты говорешь → ты говоришь (second conjugation); они читают / они читаят; я хочу, ты хочешь, but мы хотим (хотеть is mixed).
   - [inference] The standard teaching points of the first and second conjugations; no learner data opened.

9. **Aspect**
   - Wrong → right: Вчера я читал книгу (meaning "I finished it") → Вчера я прочитал книгу; Я буду прочитать → Я прочитаю / Я буду читать; Каждый день я прочитал → Каждый день я читал.
   - [research-backed (abstract only)] Lenchuk (2016, York University PhD): 29 English-speaking adult learners did well where a prefix makes the verb perfective and telic, and worse where it makes it perfective but not telic ([abstract](https://yorkspace.library.yorku.ca/items/a13332c2-6210-4091-a64d-a3504dd33f91)).
   - [curriculum convention] Aspect in the past comes before the perfective future (Mezhdu nami Урок 6).

10. **Going: on foot or by transport, where vs where to**
    - Wrong → right: Я иду в Москву (from Boston) → Я еду в Москву; Я путешествовал в Россию → Я ездил в Россию; Где ты идёшь? → Куда ты идёшь?; Я был в Москву → Я был в Москве.
    - [practitioner opinion] [italki](https://italki.com/article/240/the-4-most-common-mistakes-made-by-english-speakers-learning-russian) on путешествовать with a destination. Mezhdu nami teaches где / куда with идти / ехать in one unit ([scope](https://mezhdunami.org/scope.shtml)) [curriculum convention].

11. **Negation: не, нет and double negatives**
    - Wrong → right: Я знаю никого → Я никого не знаю; Я не никогда → Я никогда не; Нет, я знаю (meaning "No, I don't know") → Нет, я не знаю; Здесь нет банк → Здесь нет банка.
    - [curriculum convention] Mezhdu nami teaches ни-words with не ([scope](https://mezhdunami.org/scope.shtml)). The rest is [inference].

12. **Dative constructions where English has a subject**
    - Wrong → right: Я нравлюсь Москва / Я нравлю Москву → Мне нравится Москва; Я холодно → Мне холодно; Я двадцать лет → Мне двадцать лет; Я надо → Мне надо.
    - [research-backed (second-hand)] Sabia (2003) counts the age construction among her learner's errors. The rest is [inference].

13. **Numbers with nouns**
    - Wrong → right: два рубли → два рубля; пять рубля → пять рублей; один рубля → один рубль; два часы → два часа.
    - [curriculum convention] Mezhdu nami teaches час / часа / часов with numbers in Урок 5 ([scope](https://mezhdunami.org/scope.shtml)).
    - Design consequence: in `numbers` these are fixed chunks (рубль / рубля / рублей), explained as "after 2, 3, 4 / after 5 and up". The case names come in `genitive`.

14. **False friends**
    - магазин = store, not magazine (журнал); фамилия = surname, not family (семья); кабинет = office, not cabinet; камера = cell or left-luggage room, not camera (фотоаппарат); шеф = boss, not cook (повар); аккуратно = carefully, not accurately; фабрика = factory; бриллиант = diamond; also симпатичный = nice-looking, not sympathetic [inference].
    - [practitioner opinion] [RBTH, Russian false friends](https://www.rbth.com/education/334444-russian-language-false-friends/amp).
    - Design consequence: the Traps deck.

15. **Register and replies**
    - Wrong → right: Привет to a teacher → Здравствуйте; Как дела? — А ты? → А у тебя?; ты to a stranger → вы; Я тоже люблю теннис (adding a new activity for the same person) → Я также люблю теннис.
    - [practitioner opinion] [italki](https://italki.com/article/240/the-4-most-common-mistakes-made-by-english-speakers-learning-russian); [Babbel](https://www.babbel.com/en/magazine/how-to-address-people-russian).

16. **Yes / no questions by voice only**
    - Wrong → right: Это кофе? said with a falling voice (heard as a statement); adding a "do": Делаешь ты…?; moving the verb first, English style: Есть у вас…? is fine, but Работаешь ты? is not neutral.
    - [curriculum convention] Mezhdu nami teaches intonation in yes / no questions in Урок 1 ([scope](https://mezhdunami.org/scope.shtml)). Design consequence: `intonation`, right after `eto`.

## 5. Learners: who, why, what first

**Who**
- [research-backed] SRAS's fall 2025 survey of US college Russian programs had 226 valid responses from 307 programs contacted, 202 of them with active enrollments. Average enrollment was 34.4 students per program, against 50.5 in 2018. Twelve programs reported permanent closure. SRAS cites an MLA figure of 17,598 Russian enrollments without stating its year, and an MLA decline of 13.1% for Russian from 2016 to 2021, against 16.6% for all languages ([SRAS 2025](https://sras.org/about-us/publications-resources/survey/2025-college-survey-of-enrollments-in-russian-language-classes/)). App and self-study learners are not counted.
- [research-backed] Heritage programs are concentrated where Russian-speaking communities live. SRAS's pre-college survey shows a growing share of heritage speakers, and SRAS expects immigrants since 2022 to raise college heritage enrollment (a projection) ([SRAS 2025](https://sras.org/about-us/publications-resources/survey/2025-college-survey-of-enrollments-in-russian-language-classes/)).
- [curriculum convention] Russian is not in Duolingo's global top ten. It appears only as a second-most-popular language in four countries ([2024 Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)).
- [inference] The groups, probably in this order of size: **college students** in first-year classes who use the app beside a textbook (Golosa, Начало, Mezhdu nami); **heritage learners**, who understand some spoken Russian but cannot read or spell it; **people heading for careers** in government, security and analysis; **readers of Russian literature and culture**; **partners and in-laws of Russian speakers**; and **people who need Russian in other countries** (Central Asia, the Caucasus, the Baltics, Israel) or in US Russian-speaking communities. Few are tourists to Russia at present, so the course does not assume a trip there (§9.1). Almost all are true beginners in the script; heritage learners are beginners in reading only.

**Why they study**
- [practitioner opinion] ACTR (the American Councils for teachers of Russian) lists national security (the State Department designates Russian a critical language), career advantage, Russian as a lingua franca in the Baltics, the Caucasus and Central Asia, reading Russian-language sources, and culture ([ACTR, *Why study Russian*](https://actr.org/Why-Study-Russian)). It cites over 270 million speakers worldwide.
- No survey of individual learners' reasons was found. SRAS's page gives none (§11).

**What they need first** [inference]
1. **The alphabet and stress.** Nothing can be read without the letters, and stress decides how every vowel sounds. Mezhdu nami's first unit teaches letters, stress and reduction together before any grammar ([scope](https://mezhdunami.org/scope.shtml)) [curriculum convention]. So the four lessons of stage 1 come first.
2. **Greetings, вы and ты, names.** Heritage learners know ты from home and need вы; others need both.
3. **"This is…" with no "is", gender, possessives and adjectives**, all in the nominative. Mezhdu nami puts nominative adjectives in its second unit, before any case ([scope](https://mezhdunami.org/scope.shtml)). So `adjectives` moves to stage 2 (§8).
4. **Numbers and prices** (Mezhdu nami Урок 2: 1–39, then to 199).
5. **The concept of case**, then the prepositional ("where"), the accusative ("what"), the genitive with у меня есть / нет, and the past tense: Mezhdu nami Урок 3–4. So `past` moves before `dative` (§8).
6. **Not much grammar vocabulary.** The glossary (§3) is short, and every term is explained in plain English the first time.

**Check of the roadmap against Mezhdu nami** (opened scope and sequence) [curriculum convention]
- Урок 1: letters, stress, reduction, sentences without "is", yes / no intonation, personal pronouns, gender (including soft-sign nouns), palatalization, plurals and the spelling rule, чей and possessives, question words. Урок 2: plurals continued, и / а / но, numbers 1–39 then 199, nationality words, introduction to conjugation, nominative adjectives. Урок 3: present tense (both conjugations), the concept of case, accusative, prepositional, voicing, -ся verbs, в / на. Урок 4: у меня есть / нет, genitive, надо / можно, past tense, animate accusative. Урок 5: days of the week, идти / ехать, хотеть, hours, где / куда, мочь, future of быть, ходить / ездить. Урок 6: aspect, dative, future, imperatives. Урок 7: instrumental, давайте.
- The roadmap follows this order closely within stages. The changes in §8 are: a second letter lesson, `intonation` right after `eto`, `adjectives` in stage 2, and `past` before `dative`. `connectors` stays late. Mezhdu nami teaches и / а / но in Урок 2, so `connectors` reviews them and adds потому что; и and а are used in examples from stage 2 on.
- The TORFL Elementary standard itself was not opened. The roadmap cites a copy hosted by the University of Bergamo, whose page names the standard without linking it ([unibg](https://en.unibg.it/node/7622)) (§11).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] US first-year courses teach stress, reduction and voicing in unit 1 and show them in bracketed Cyrillic: аэропо́рт [аэрапОрт], Петербу́рг [питирбУрк], америка́нка [амирикАнка], меня́ зову́т [минЯ завУт], Домоде́дово [дамадЕдава] ([Mezhdu nami 1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml)). The same unit says the stress of each word must be learned with the word, because native texts carry no marks.
- [curriculum convention] Texts for learners of Russian use stress marks and ё consistently, while ordinary texts use neither ([Eskova 2012](https://orfo.ruslang.ru/docs/articles/eskova-o-bukve-2012.pdf), on the 2006 Academic Handbook).
- [research-backed (abstract only)] Hacking & Hayes-Harb: stress marks did **not** help learners link stress to new words ([AATSEEL abstract](https://aatseel.org/100111/pdf/abstracts/850/HackingHayesAbstract.pdf)). So a mark on the Cyrillic alone is not enough; the course pairs a visible stress cue with audio on every row.
- [research-backed (abstract only)] English speakers barely contrast hard and soft final consonants, even after immersion (Nissen et al. 2016; Simonchyk & Darcy 2017, §4.4). So the aid must show softness explicitly, which standard transliterations do only with an apostrophe for ь and not at all before vowels.
- [curriculum convention] Standard romanizations (BGN/PCGN, Library of Congress, ISO 9, the passport system) follow the **spelling**: they show no stress, no reduction and no devoicing (молоко = *moloko*, хлеб = *khleb*), and they disagree with each other on е, й, ы, ю and я ([Wikipedia, *Romanization of Russian*](https://en.wikipedia.org/wiki/Romanization_of_Russian)).

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling of the **sound**, stressed syllable in capitals (`mah-lah-KOH`) | A day-one learner can read it. It shows stress **and** reduction, softness, ь and devoicing. It matches the house style of en-es (capitals, hyphens, *ah eh ee oh oo*) and US phrasebooks [curriculum convention]. It can be generated. | It invites English vowel habits; it cannot show the hard *l*, the rolled *r* or the exact quality of ы. It is a crutch that must fade. |
| (b) Standard transliteration + an acute for stress (*molokó*, *spasíbo*) | Familiar from maps and passports; letter for letter. | Shows the spelling, not the sound: a learner reads *molokó* with three o's (§4.5). The systems disagree with each other (*ya / ja / ia*). |
| (c) IPA | Exact. | US adult self-learners cannot read it [inference]. |
| (d) No Latin aid: stress-marked Cyrillic only (молоко́) | What textbooks do after unit 1. | Useless before the letters are known. Stress marks alone did not help (Hacking & Hayes-Harb). The deck quiz and lesson rows need a readable line from day one. |

**Decision: (a), generated, required on every card and example row, hideable.** `pron: "required"`. The stress-marked Cyrillic of (d) is added as a **derived display** when the engine supports it (§6.5, §10.7 request 4), so learners keep a stress cue after the respelling is hidden.

### 6.1 Why a generator, and how far it can be trusted

Russian pronunciation is predictable from the spelling **once the stress is known**, with a short list of exceptions. Stress is not written and is not predictable. So the generator has two parts: rules, which are mechanical, and a stress list, which is knowledge.

- **Stress list.** `respell.js` holds about 2,170 word forms and 100 phrases, each with its stressed vowel in capitals (молокО, кнИгу, рабОтаю). Inflected forms are separate entries: кнИга, кнИгу, кнИги, кнИге, кнИгой. Monosyllables need no entry. A word with ё needs none either, because ё is always stressed.
- **It throws on what it does not know:**
  - any word of two or more syllables, without ё, that is not in the list (`«ручка» is not in the word list (stress unknown)`);
  - a **stress homograph** that no listed phrase settles. 25 are listed today: дома (дОма "at home" / домА "houses"), города, страны, моря, воды, вина, цены, окна, письма, слова, места, дела, семьи, среды, зимы, головы, руки, ноги, горы, стены, учителя, цвета, еду (едУ "food" / Еду "I go"), стоит and стоят (стОит "costs" / стоИт "stands"). года is deliberately listed with one reading (гОда, as in два года), because the plural года́ is rare at A1. A phrase entry settles one in context (я_дОма, бутЫлка_водЫ, скОлько_стОит, нОвые_домА). These words fall exactly in `plural` and `genitive` (руки, окна, моря), which is why the generator must not guess;
  - digits ("write numbers in words"), Latin letters, and ь or ъ alone.
- **Rules applied** (standard Moscow pronunciation, as taught in US first-year courses: [Mezhdu nami 1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml); [UT Austin voicing](https://embed.la.utexas.edu/russian-online/1-3-phonetics-voicing-b); [elon.io reading aloud](https://elon.io/grammar/russian/pronunciation/reading-aloud-practice)):
  - akanye: unstressed о and а → *ah*;
  - ikanye: unstressed е and я after a soft consonant → *ih*, except я after the stress → *yah* (неделя `nih-DYEH-lyah`, время `VRYEH-myah`); word-initial unstressed е / я → *yih*;
  - ж, ш, ц always hard: жи, ши, цы → *zhih, shih, tsih*; unstressed е after them → *ih*. ч and щ always soft: unstressed а after them before the stress → *ih* (часы `chih-SIH`);
  - final devoicing (хлеб `khlyehp`, друг `drook`); regressive voicing within a word (водка `VOHT-kah`, вокзал `vahg-ZAHL`), with в never voicing what comes before it (твой);
  - the vowel-less prepositions в, к, с are written as separate words that take their voicing from the next word (`f SHKOH-lih`, `z BAHN-kahm`, `k vrah-CHOO`). Prepositions with a vowel (из, без, от, под) do the same at their end (`bihs SAH-khah-rah`). So `respell` works on the phrase, not word by word;
  - -ого / -его said *-ovo / -ivo* (нового `NOH-vah-vah`, его `yih-VOH`), except много, немного, дорого, недорого, строго;
  - -тся / -ться → *-tsah*; сч, зч, жч → щ (счёт `sh'oht`, мужчина `moo-SH'EE-nah`); тс, дс, тц, дц → ц (двадцать `DVAH-tsaht'`);
  - silent consonants in стн, здн, стл, вств, лнц, рдц (поздно `POHZ-nah`, солнце `SOHN-tsih`, чувство);
  - a doubled consonant is said once at the end of a word or before another consonant (класс, русский), and twice between vowels (Анна `AHN-nah`).
- **Exceptions are list entries** written as "spelling = how it is said" in Cyrillic: что=штО, сегодня=севОдня, конечно=конЕшно, здравствуйте=здрАствуйте, пожалуйста=пожАлста, легко=лехкО, and loanwords with a hard consonant before е: кафе=кафЭ, интернет=интэрнЭт, компьютер=компьЮтэр, отель=отЭль, тест, кофе.
- **What it cannot know** (the silent-error classes):
  - **a wrong stress in the list.** The list is the author's knowledge, checked against nothing but the renderings in the sources above. It is the single most important thing for a native speaker to check, and it is in one place (§11);
  - **a homograph whose second reading is not listed.** If only one stress of a word is in the list, the other reading gets it silently: замок / замок and мука / мука are not listed, and at A1 neither should be used;
  - **an exception not in the list:** an unlisted loanword with a hard consonant before е (*модем*) gets a soft one, and an unlisted чн-word said шн gets ч;
  - **monosyllables:** any one-vowel word is taken as stressed unless it is in the clitic list (в во к ко с со у о об обо на по за из от до без под над при про для не ни и а но ли же бы). A clitic missing from that list gets a full vowel.
- **How reliable** (self-measured; no native check yet, §11):
  - All 18 renderings opened in the sources agree with them in stress, reduction and consonants, written in this key (the sources write a final unstressed -е as e; this key writes `ih`): аэропорт `ah-eh-rah-POHRT`, Петербург `pih-tihr-BOORK`, американка `ah-mih-ree-KAHN-kah`, меня зовут `mih-NYAH zah-VOOT`, Домодедово `dah-mah-DYEH-dah-vah`, молоко `mah-lah-KOH`, сегодня `sih-VOHD-nyah`, неделя `nih-DYEH-lyah`, город `GOH-raht`, нож `nohsh`, друг `drook`, сделать `ZDYEH-laht'`, водка `VOHT-kah`, в парк `f pahrk`, к врачу `k vrah-CHOO`, поздно `POHZ-nah`, солнце `SOHN-tsih`, красного `KRAHS-nah-vah`.
  - Three sets of typical A1 sentences were written before checking the list, and each was run once and then fixed. Set 1 (50 sentences): 3 sentences threw (ручка, мае, тебе). Set 2 (40): 5 threw (открыта, пройти, слова, and the homographs воды and стоит). Set 3 (30, run after two more rounds of additions): 8 threw, 6 on unknown words (килограмм, поедем, опаздывает, телевизор, встретимся, поездка) and 2 on homographs (стоят, дома). **Writers should expect roughly one sentence in four to throw at first**, almost always on a missing inflected form. After the words were added, all 120 sentences, all 90 sample cards, the 20 worked examples and every hinge in §7 run without a throw, and every output matches `pronPattern`. That measures completeness, not correctness: a wrong stress in the list does not throw.
  - A first read-through of the list found about 25 wrong stresses in the author's draft, among them дОмой for домОй, мАшина for машИна, тУда, тОгда, снАчала, кОллега, Овощей, and two surnames (Ива́нов, Сми́рнов for Ивано́в, Смирно́в). Reading the outputs found 4 rule or layout bugs: soft marks on hard final consonants, a doubled y after ь, unstressed monosyllables inside phrases, and syllable breaks such as *lyoob-LYOO*. All were fixed, and the list now rejects an entry with no capital or with two. A second read-through, prompted by a reviewer, found about 30 more, several of them already in sample cards: остАновка for останОвка, лЮбимый for любИмый, лЕкарство for лекАрство, тАкой, втОрой, моЕму, рОдители, бОльница, кОта, рукУ, нОга, феврАле, Отлично, сОвсем, and 9 one-reading homographs (вина, моря, дела, цены, семьи, среды, зимы, головы, горы, стены). That two readers found some 55 errors in a first draft is the strongest reason for the native check of the list (§11).
- **Adding words** (writers never edit a pron or `respell.js`):
  - When the generator throws, the writer reports the word with its stress, in the list's own format (рУчка, поЕдем). The lead adds it to `tools/target/ru/lexicon.txt`, which `respell.js` reads if present, and runs `node tools/target/repron.js ru`.
  - **Corrections go the same way:** an entry in a `lexicon*.txt` file **replaces** the built-in entry of the same spelling (and a phrase, or a clitic), so the lead can fix a wrong stress without editing `respell.js`. The same spelling with two stresses inside the extra files is a homograph and throws.
  - **Proposed** (pipeline request 10, §10.7): each writer may keep their own `tools/target/ru/lexicon-<role>.txt` (for example `lexicon-1.txt`), which `respell.js` already reads (every `lexicon*.txt` in the folder). The same spelling with two different stresses in two fragments becomes a homograph and throws, so conflicts surface. The cold reviewer reads the fragments first.
  - `node tools/target/ru/respell.js --check <file>` lists every Russian string in a file that throws.

### 6.2 The key (exact format)

**Format**
- Lowercase ASCII letters, the apostrophe `'` (soft consonant), the hyphen (between syllables) and single spaces (between words). Nothing else: no punctuation, no digits, no accent marks.
- In every word of two or more syllables, **exactly one syllable, the stressed one, is in CAPITALS** (the apostrophe has no case: `SH'OH`). One-syllable words are lowercase, as in en-es (`nyeht`, `chai`, `dohm`).
- One respelled word per Russian word. A hyphenated Russian word is one respelled word if it has one stress (по-русски `pah-ROOS-kee`, кто-то `KTOH-tah`), and two if it has two (Санкт-Петербург `sahnkt pih-tihr-BOORK`). The prepositions в, к, с become one-letter words (`f`, `v`, `k`, `g`, `s`, `z`).

**Vowels** (always these spellings)

| Russian | Stressed | Unstressed | Examples |
|---|---|---|---|
| а, о (after a hard consonant, at the start, after a vowel) | а `ah`, о `oh` | both `ah` | мама `MAH-mah`; молоко `mah-lah-KOH`; окно `ahk-NOH` |
| у / ю | `oo` / `yoo` | the same | утро `OO-trah`; люблю `lyoo-BLYOO` |
| э | `eh` | `eh` | это `EH-tah` |
| и | `ee` | `ee` (shorter, same quality) | спасибо `spah-SEE-bah`; книги `KNEE-gee` |
| ы | `ih` | `ih` | мы `mih`; новый `NOH-vihy` |
| е, я after a soft consonant | е `yeh`, я `yah` (the y shows the soft consonant: нет `nyeht`) | `ih`; but я after the stress `yah` | неделя `nih-DYEH-lyah`; тебя `tih-BYAH`; время `VRYEH-myah` |
| е, я, ё, ю at the start, after a vowel, after ь or ъ | `yeh`, `yah`, `yoh`, `yoo` | е / я before the stress `yih`; я after the stress `yah` | есть `yehst'`; язык `yih-ZIHK`; моя `mah-YAH`; новая `NOH-vah-yah` |
| ё | `yoh` (`oh` after ж ш ч щ) | ё is always stressed | ещё `yih-SH'OH`; жёлтый `ZHOHL-tihy` |
| after ж ш ц | е `eh`, и `ih` (like ы) | е `ih`, а / о `ah` | жена `zhih-NAH`; цена `tsih-NAH`; жить `zhiht'` |
| after ч щ | а `ah`, е `eh`, и `ee` | а / я before the stress `ih`, after it `ah`; е `ih` | час `chahs`; часы `chih-SIH`; встреча `FSTRYEH-chah` |
| vowel + й | stressed: ай `ai`, ой `oy`, ей / эй `ey`; any other: the vowel + `y` | the vowel + `y` | чай `chai`; мой `moy`; музей `moo-ZYEY` (the y of the soft з, then ey); Здравствуйте `ZDRAHS-tvooy-tih`; Доброй `DOH-brahy`; русский `ROOS-keey` |

**Consonants**

| Russian | Aid | Note and example |
|---|---|---|
| б в г д з к л м н п р с т ф | b v g d z k l m n p r s t f | р is tapped or rolled; г is always "g" (except the -ого words above) |
| ж ш | zh sh | always hard: жена `zhih-NAH`, школа `SHKOH-lah` |
| ч | ch | always soft: чай `chai` |
| щ | sh' | a long, soft sh: борщ `bohrsh'`, ещё `yih-SH'OH` |
| х | kh | as in "Bach": хлеб `khlyehp` |
| ц | ts | центр `tsehntr` |
| й | y | мой `moy` |
| soft consonant before а, е, о, у sounds | consonant + `y` | нет `nyeht`, люблю `lyoo-BLYOO`, тётя `TYOH-tyah` |
| soft consonant before и / unstressed i-sound | consonant alone | книги `KNEE-gee`, тебя `tih-BYAH` |
| soft consonant with nothing vowel-like after it (ь at the end or before a consonant) | consonant + `'` | мать `maht'`, день `dyehn'`, письмо `pees'-MOH` |
| separating ь / ъ before е ё ю я и | consonant (+ `'` for ь) then `y` | семья `sihm'-YAH`, пьёт `p'yoht`, подъезд `pahd-YEHST`, компьютер `kahmp'-YOO-tehr` |
| voiced consonant at the end of a word, or before a voiceless one | its voiceless partner (b→p, v→f, g→k, d→t, z→s, zh→sh) | хлеб `khlyehp`, нож `nohsh`, водка `VOHT-kah`, в парк `f pahrk` |
| voiceless consonant before a voiced one (not в) | its voiced partner | сделать `ZDYEH-laht'`, вокзал `vahg-ZAHL`, с братом `z BRAH-tahm` |

**Syllable breaks** (for reading only; the pattern does not check them):
- One consonant between vowels starts the next syllable (`mah-lah-KOH`).
- Two or more: an obstruent + l or r stays together (`lyoo-BLYOO`, `sihs-TRAH`), and so do s / z / sh / zh + a stop after other consonants (`pah-ZHAHL-stah`). A sonorant followed by two more consonants keeps the next one (`stoo-DYEHNT-kah`). Otherwise the first consonant closes the syllable (`mahs-KVAH`, `OHL'-gah`).

### 6.3 `pronPattern`

Built by `respell.js` itself (`node tools/target/ru/respell.js --pattern`), so the pattern and the generator cannot drift apart. Shape:

```
UNIT  = b' v' g' d' z' k' l' m' n' p' r' s' t' f' | sh' zh kh ts ch sh b v g d z k l m n p r s t f y      (and the same in capitals)
NUC   = ai oy ey ah eh ee oh oo ih                                                                       (and the same in capitals)
SYL   = UNIT* NUC UNIT*
WORD  = lowerSYL | (lowerSYL-)* UPPERSYL (-lowerSYL)+ | (lowerSYL-)+ UPPERSYL | lowerUNIT+
PRON  = ^WORD( WORD)*$
```

The full pattern (2,889 characters) is in `profile.json`. It uses only literal characters and compiles the same **with or without** the `u` flag; both were tested, because `repron.js` compiles it without the flag.

What it enforces:
- the closed set of letter groups of §6.2: no bare a, o, u, e or i (Russian spelling pasted as Latin fails: `kot`, `moloko`); no c, j, q, w, x; no Cyrillic;
- exactly one capitalised syllable in every word of two or more syllables, and none in one-syllable words; no capital letters elsewhere (`Spah-SEE-bah` fails);
- no punctuation, digits or double spaces; consonant-only words allowed (the prepositions `f`, `v`, `k`, `s`, `z`, and letter sounds).

Tested: all 120 test sentences, 90 sample cards and 20 worked examples pass. The pattern rejects `спасибо`, `spah-see-bah` (no capital), `SPAH-SEE-bah` (two), `spasibo`, `Spah-SEE-bah`, `spah-SEE-bah.`, `kot`, `mah-mah`, `tih-BYA` and `x`.

What it cannot catch: a wrong stress or a wrong sound that is still well formed (`MOH-lah-kah` passes). Only the generator (and §10.7 request 2, which compares each row's pron with the generator's output) can.

### 6.4 Twenty worked examples (all generated, all pass `pronPattern`)

| # | Russian | `pron` (generated) | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Спасибо! | `spah-SEE-bah` | Thank you! | stress in capitals; punctuation dropped |
| 2 | молоко | `mah-lah-KOH` | milk | unstressed о = ah (twice) |
| 3 | хорошо | `khah-rah-SHOH` | good; well | unstressed о = ah; х = kh; ш = sh |
| 4 | неделя | `nih-DYEH-lyah` | week | unstressed е = ih; soft д and л before е and я |
| 5 | язык | `yih-ZIHK` | language; tongue | я before the stress = yih; ы = ih |
| 6 | время | `VRYEH-myah` | time | я after the stress = yah |
| 7 | нет | `nyeht` | no | one syllable: lowercase; soft н = ny |
| 8 | мать | `maht'` | mother | ь = ' (soft t at the end) |
| 9 | семья | `sihm'-YAH` | family | separating ь: m' then y |
| 10 | хлеб | `khlyehp` | bread | final б devoiced = p |
| 11 | водка | `VOHT-kah` | vodka | д before к devoiced = t |
| 12 | в школе | `f SHKOH-lih` | at school | в before ш = f, as a separate word |
| 13 | жена | `zhih-NAH` | wife | ж always hard: unstressed е after it = ih |
| 14 | ещё | `yih-SH'OH` | more; still | ё after щ = oh, always stressed; щ = sh' |
| 15 | чай | `chai` | tea | а + й = ai |
| 16 | новый | `NOH-vihy` | new | ы + й = ihy |
| 17 | Здравствуйте! | `ZDRAHS-tvooy-tih` | Hello! (formal) | silent first в (from the word list) |
| 18 | сегодня | `sih-VOHD-nyah` | today | г said v (from the word list) |
| 19 | что | `shtoh` | what | чт said sht (from the word list) |
| 20 | Я живу в Москве. | `yah zhih-VOO v mahs-KVYEH` | I live in Moscow. | one-syllable words lowercase; в before м stays v |

### 6.5 Card front, and hiding the respelling

- **Card front today: the plain Cyrillic target**, as Russians write it, with ё. The pron line under it carries the stress (capitals).
- **Recommended card front once the engine supports it: stress-marked Cyrillic** (молоко́, Я живу́ в Москве́), as textbooks for learners print it ([Eskova 2012](https://orfo.ruslang.ru/docs/articles/eskova-o-bukve-2012.pdf)). It is **derived, never authored**: `respell.js` exports `accent(text)`, which puts U+0301 on the stressed vowel of every listed word of two or more syllables (not on ё, monosyllables or clitics). `gen.js` would store it as a display field beside the plain target. The voice, the matcher, deck typing and the DIALOG / EXAMPLES keys keep using the plain target (§10.7 request 4).
  - **Matching with stress marks ignored:** typed answers are compared without U+0301 (`pracNorm` and the deck matcher should strip it, request 1), so a learner who copies a stressed form is not marked wrong. Nothing in the source carries the mark, so today nothing needs stripping.
- **Hideable: yes.** Recommended engine default (request 3):
  - shown in stage 1 (lessons 1–4) and their decks;
  - blurred (tap to reveal) from `greetings` (lesson 5) on **if** stress-marked fronts exist; otherwise from `prepositional` (lesson 16), because without marks the respelling is the only stress cue;
  - a setting brings it back; it is never shown inside practice items (PRACTICE-SPEC).
- **Not in practice items,** except as an English sound label in the prompts of the three letter lessons ("Which word is 'kot'?"). It is never an answer, an option, a tile or a fill (§6.6).

### 6.6 What the script lessons must teach, so the aid can be read and then dropped

1. **`alphabet`:** the five vowel sounds of the aid: `ah` (father), `eh` (bed), `ee` (see), `oh` (more, without the glide of "go"), `oo` (food); CAPITALS mark the stressed syllable; the false friends (Р = r, Н = n, В = v, С = s, У = oo, Х = kh, Е = ye) and `kh`.
2. **`letters`:** `ih` for ы (say "ih" with the tongue pulled back); `y` for й, and й after a vowel making `ai`, `oy`, `ey`; `ee` for и.
3. **`sounds`:** a y after a consonant, or an apostrophe, means a soft consonant (`nyeht`, `maht'`); я ё ю е make the consonant before them soft; `zh`, `sh`, `ch`, `ts` and `sh'` (long soft sh); ь and ъ have no sound of their own (`sihm'-YAH`, `pahd-YEHST`); final devoicing and в before a voiceless consonant (`khlyehp`, `f pahrk`).
4. **`stress`:** reduction (`mah-lah-KOH`, `nih-DYEH-lyah`), with one rule of thumb: "an o you can't see in capitals sounds like ah; an e or я you can't see in capitals sounds like ih". The respelling will fade, so learn each word with its stress; the voice is the model.
5. From `greetings` on, every lesson's final tip reminds the learner to read the Cyrillic first and use the respelling only to check stress.

**Romanization in practice (ruling on PRACTICE-SPEC's "No romanization in practice items").** In `alphabet`, `letters` and `sounds` only, a respelling may appear on the **English side** of an item (`q`, `p`, `why`, `hint`) as a sound label in quotes. From `stress` on, practice items contain no Latin-letter Russian at all.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things:
- **(a) Case endings:** the right case after a verb or a preposition (в Москве, на работу, нет хлеба, с молоком, мне нравится), and numbers with nouns (два рубля, пять рублей).
- **(b) Gender agreement:** possessives (мой / моя / моё / мои), adjectives (новый / новая / новое / новые), past-tense verbs (был / была / было / были), and он / она / оно for things.

**Why these two.**
- **Case endings** are the error with the most learner data (§4.1): the dative was the least accurate case in both older interview studies (second-hand), the RLC has a tag for case after verbs and prepositions, and Kempe & MacWhinney found that endings are reliable cues that learners can use early. English marks none of this, so the error can occur in almost every sentence from `prepositional` on [inference].
- **Gender agreement** is the error English speakers cannot fix by noticing: in Denhovska & Serratrice (2017), learners judged agreement well but produced the right adjective endings only about 12% of the time without explicit teaching (§4.2). It is also the **only** strand available before the cases: through он / она / оно and мой / моя / моё, it can be met in all 28 sets, including the four script and sound lessons. That matters, because `profile.json` has no exemption field.
- **Not chosen:**
  - **No "is" and no articles:** a real transfer error (§4.3), but it has no reliable tile distractor. An extra есть tile can be right (У меня есть…), and один can mean "one". It is taught in `eto`, tested there in `mc` and `ty` items, and kept in the Traps deck.
  - **Soft consonants and stress:** cannot be produced wrong on tiles. They are tested through `mc` and `fi` distractors (мат / мать, брат / брать) wherever the lesson's words allow.
  - **Verb endings (я работаю / он работает):** local to `present`; used as the preferred mixed neighbour in the last two items of later sets (§8).

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 of the 3 `or` items** and **2 of the 3 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** the noun (or pronoun) in the right case is a tile in `a`, and `x` holds **the same word in a wrong case** (Москва for Москве, книга for книгу, я for мне).
- **`or`, strand (b):** `a` contains a possessive, adjective, past-tense verb or он / она / оно, and `x` holds **the same word in the wrong gender or number** (мой for моя, был for была, он for оно).
- **`ty`, strands (a) and (b):** `a[0]` contains the right form, and `x` holds the wrong form of that same word. The no-keyboard fallback builds tiles from `a[0]` split at spaces plus `x`, so `x` is a single word, and the validator's rebuild check confirms that it cannot rebuild an accepted answer.

**Safe distractors.** TARGET-BRIEF requires a distractor to be **wrong**, not merely less usual.

| Contrast | Safe when | Never use as a distractor |
|---|---|---|
| prepositional vs nominative (в Москве / в Москва) | always after в / на meaning "in / at" | — |
| prepositional vs accusative (в школе / в школу) | the verb settles it: живу, работаю, был → prepositional; иду, еду, ходил → accusative | with a verb that allows both readings |
| accusative vs nominative (книгу / книга) | a feminine object noun in -а / -я after an action verb | masculine inanimate nouns and neuter nouns (стол, окно: accusative = nominative, so the "wrong" tile is right) |
| animate accusative (брата / брат) | a masculine person or animal as object (Я вижу брата) | inanimate masculine nouns |
| genitive (хлеба / хлеб) | after нет, у…нет, без, после, для, из, от, бутылка / стакан / много / сколько | a genitive that is also a plural nominative with another stress (руки, окна, сестры, воды): pick another noun |
| numbers (рубля / рублей / рубль) | 1 → рубль, 2–4 → рубля, 5–20 → рублей | numbers above 20 except 21–24 and 25 (keep to 1–25 and round tens) |
| dative vs nominative (мне / я) | нравится, холодно, надо, нужно, age (мне двадцать лет), звонить, помогать | — |
| instrumental (молоком / молоко) | с "with", работать / быть кем, заниматься | — |
| gender (моя / мой; новая / новый; была / был) | the noun's gender is regular, or taught (папа masculine) | кофе (masculine, but neuter is accepted in speech); nouns in -ь unless the card taught them; a first-person past with no "(a woman)" / "(a man)" cue (both forms are right: list both in `a`) |
| он / она / оно | for a named thing of known gender | — |

**Accepted answers** (beyond TARGET-BRIEF):
- **Word order.** Russian word order is free, but `or` items need exactly one correct order. Use short sentences (2–5 tiles) whose neutral order is the only natural one, or cue the prompt ("(start with Вчера)"). In `ty`, list the neutral order first and add the common alternatives (Вчера я читал / Я вчера читал).
- **The subject pronoun.** List the answer with the pronoun first. Add the pronoun-less form only where it is natural (answers to questions, first-person present: Работаю в банке).
- **The speaker's gender:** list both when the prompt has no cue (§2.3).
- **ё / е:** write ё. Until request 1 or 11 is built, also list the е-spelling in `ty` and `fi` answers that contain ё (идет for идёт), but never все for всё where все is a distractor.
- **й / и and ё / е distractors:** a `fi` item whose distractor differs from an answer only by й / и or ё / е (мои / мой, все / всё) must be marked `!strict`, because the validator's accent fold treats й as и and ё as е (§10.7 request 2).

**Worked hinges for the lessons where the rule is hardest** (shorthand of `tools/target/lib.js`). Every Russian string in the script-lesson hinges was checked by script to use only letters taught by that lesson (§10.2), and every `why` was checked against the keyword pattern:

```
alphabet      ['or', 'There she is. (about Mom)', 'вот она', 'он', 'Мама is feminine, so "she" is the feminine form она.']
              ['or', 'There it is. (about the subway)', 'вот оно', 'он', 'Метро is neuter, so "it" is the neuter form оно.']
              ['ty', 'There he is. (about the cat)', 'вот он', 'вот · он / она / оно', 'она', 'Кот is masculine: the masculine form он.']
              ['ty', 'The window? It is there.', 'оно там', 'оно · там', 'он', 'Окно is neuter: the neuter form оно.']
letters       ['or', 'These are my tickets.', 'это мои билеты', 'мой', 'Билеты is plural, so "my" takes the plural form мои.']
              ['or', 'There it is. (about the photo)', 'вот оно', 'она', 'Фото is neuter: the neuter form оно.']
              ['ty', 'This is my house.', 'это мой дом', 'это · мой · дом', 'мои', 'Дом is masculine: the masculine form мой.']
              ['ty', 'Where is Dad? There he is.', 'где папа вот он', 'где · папа · вот · он', 'она', 'Папа ends in -а but is a man: the masculine form он.']
sounds        ['or', 'This is my mom.', 'это моя мама', 'мой', 'Мама is feminine: the feminine form моя.']
              ['or', 'This is my letter.', 'это моё письмо', 'моя', 'Письмо is neuter: the neuter form моё.']
              ['ty', 'This is my sister.', 'это моя сестра', 'это · моя · сестра', 'мой', 'Сестра is feminine: the feminine form моя.']
              ['ty', 'Where is my tea?', 'где мой чай', 'где · мой · чай', 'моя', 'Чай is masculine: the masculine form мой.']
stress        ['or', 'Where is my bag?', 'где моя сумка', 'мой', 'Сумка is feminine: the feminine form моя.']
              ['or', 'This is my milk.', 'это моё молоко', 'мой', 'Молоко is neuter: the neuter form моё.']
              ['ty', 'This is my car.', 'это моя машина', 'это · моя · машина', 'мой', 'Машина is feminine: the feminine form моя.']
              ['ty', 'Where is my phone?', 'где мой телефон', 'где · мой · телефон', 'моя', 'Телефон is masculine: the masculine form мой.']
prepositional ['or', 'I live in Moscow.', 'я живу в Москве', 'Москва', 'After в for "where", the prepositional case: Москве.']
              ['ty', 'She is at work.', 'она на работе', 'она · работа', 'работа', 'На + prepositional case: на работе.']
accusative    ['or', 'I read a book.', 'я читаю книгу', 'книга', 'The object takes the accusative case: книга → книгу.']
              ['ty', 'I love Moscow.', 'я люблю Москву', 'любить · Москва', 'Москва', 'любить + accusative case: Москву.']
genitive      ['or', 'a bottle of water', 'бутылка воды', 'вода', '"Of water" is the genitive case: воды.']
              ['ty', 'There is no bread.', 'хлеба нет|нет хлеба', 'хлеб · нет', 'хлеб', 'нет + genitive case: хлеба.']
past          ['or', 'She was at home.', 'она была дома', 'был', 'A woman: the feminine form была.']
              ['ty', 'Anna read a book.', 'Анна читала книгу', 'Анна · читать · книга', 'читал', 'Анна is a woman: the feminine form читала.']
dative        ['or', 'I like Moscow.', 'мне нравится Москва', 'я', 'The person who likes is in the dative case: мне.']
              ['ty', 'I am cold.', 'мне холодно', 'я · холодно', 'я', 'Feeling cold uses the dative case: мне.']
instrumental  ['or', 'Tea with milk, please.', 'чай с молоком пожалуйста', 'молоко', 'с ("with") takes the instrumental case: молоком.']
              ['ty', 'He works as a doctor.', 'он работает врачом', 'он · работать · врач', 'врач', 'работать + instrumental case: врачом.']
```

**Validator keywords** (`standingRule.keywords`, flags `i`). All ASCII, so `\b` behaves:

```
\b(?:nominative|accusative|genitive|prepositional|dative|instrumental) (?:case|ending|singular|plural)s?\b|\bcase endings?\b|\b(?:masculine|feminine|neuter|plural) (?:form|ending|agreement)s?\b|\bagrees? with\b
```

How to use them in a `why`:
- strand (a): a case name + "case" (or "ending", "singular", "plural"): "the prepositional case", "the genitive plural", or "case ending";
- strand (b): "masculine / feminine / neuter / plural" + "form" (or "ending", "agreement"), or "agrees with".

Deliberately **not** keywords: a bare case name ("after в, use the accusative": a writer must add "case"), bare "feminine" or "plural" ("Feminine nouns end in -а", "Plural nouns often end in -ы" do not count), "conjugation", "stress", "soft sign", "aspect", "perfective". Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 40 of 40 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| Мама is feminine, so "she" is the feminine form она. | match | match |
| Метро is neuter, so "it" is the neuter form оно. | match | match |
| Билеты is plural, so "my" takes the plural form мои. | match | match |
| After в for "where", the prepositional case: Москве. | match | match |
| The object takes the accusative case: книга → книгу. | match | match |
| нет + genitive case: хлеба. | match | match |
| "Of water" is the genitive case: воды. | match | match |
| Two, three, four take the genitive singular: два рубля. | match | match |
| Five and up take the genitive plural: пять рублей. | match | match |
| A woman: the feminine form была. | match | match |
| The person who likes is in the dative case: мне. | match | match |
| с ("with") takes the instrumental case: молоком. | match | match |
| новая agrees with the feminine noun машина. | match | match |
| The adjective takes the feminine ending -ая: новая. | match | match |
| Москва → в Москве: the case ending changes from -а to -е. | match | match |
| Adjective endings agree with the noun: новые дома. | match | match |
| Use the masculine ending -ый: новый дом. | match | match |
| идти takes в + accusative case for where you go: в школу. | match | match |
| Russian has no word for "is" here: Это мой брат. | no match | no match |
| Use вы with a stranger. | no match | no match |
| Ты is for friends and family. | no match | no match |
| The stress falls on the last syllable: молоко. | no match | no match |
| Unstressed о sounds like ah. | no match | no match |
| ь makes the consonant before it soft. | no match | no match |
| Final б sounds like p. | no match | no match |
| A yes/no question has the same words as the statement; only the voice rises. | no match | no match |
| The я form ends in -ю: я работаю. | no match | no match |
| The ты form ends in -ешь: ты работаешь. | no match | no match |
| Feminine nouns usually end in -а or -я. | no match | no match |
| Use the perfective for a finished result. | no match | no match |
| идти is on foot; ехать is by transport. | no match | no match |
| Пожалуйста also means "you're welcome". | no match | no match |
| не goes right before the verb. | no match | no match |
| Магазин is a store, not a magazine. | no match | no match |
| Use the imperative with -те for вы. | no match | no match |
| Russian has no articles: дом is "a house" or "the house". | no match | no match |
| Это stays the same for every gender. | no match | no match |
| А contrasts two things; и adds. | no match | no match |
| Plural nouns often end in -ы or -и. | no match | no match |
| Five or more: use a plural noun. | no match | no match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4, §5 and §10):
- **Kept: all 27 items.** Ids lose the `ru-` prefix, and each roadmap id appears exactly once in a `roadmap` field, so `link_roadmap.py` links all 27.
- **Added (1): `letters`, "Letters 2: new shapes"**, as lesson 2. Thirty-three letters in one lesson is too many to explain with examples in 450 words, and the brief's grouping (friends, false friends, new shapes) gives a natural split. The letters are spread over three lessons: `alphabet` 12, `letters` 11, and `sounds` the last 8 plus ь and ъ, so that each lesson has its own letter deck (§10.2). Its `roadmap` field is empty.
- **Moved:**
  - `intonation` from stage 1 to **lesson 7, right after `eto`**. Intonation needs sentences, and Mezhdu nami teaches sentences without "is" and then yes / no intonation, in that order, in its first unit ([scope](https://mezhdunami.org/scope.shtml)) [curriculum convention].
  - `adjectives` from the end of stage 3 to **lesson 10, after `pronouns`**: nominative agreement (новый, новая, новое, новые) comes before any case, as in Mezhdu nami Урок 2. Each case lesson then shows that case's adjective ending in its table, mostly for recognition. Gender agreement is half of the standing rule, so it should be practised from early on (§7).
  - `past` from stage 4 to **lesson 20, after `have`**, before `dative`. It is easy (one suffix and four endings), it is pure gender agreement (был / была / было / были), and Mezhdu nami teaches it in Урок 4 with the genitive.
- **Renamed:** `alphabet` "Letters 1: familiar shapes and false friends" (roadmap: "The Cyrillic alphabet"); `adjectives` "Adjectives agree: новый, новая, новое" (it now covers the nominative); `genitive` "Genitive: of, without, how many" (absence moves into `have` and `negation`); `numbers` "Numbers and prices"; `past` "Past tense: был, была, было"; `motion` "Going on foot and by transport: идти, ехать"; `dative` "Dative: to whom, age, likes"; `instrumental` "Instrumental: with, and jobs"; `imperative` "Imperative: please do". The ids stay.
- **Not added:** a separate "can I…? / ordering" lesson (можно, хочу and дайте are spread over `stress`, `accusative` and `imperative`), a case-overview lesson (`prepositional` opens with what a case is), and a ходить / ездить lesson (`motion` introduces them for recognition). All 27 roadmap items are kept, so the 28-lesson cap allows only one addition.
- **Stages:** the roadmap's four, unchanged in name. Stage 1 has 4 lessons, stage 2 has 11, stage 3 has 7, stage 4 has 6.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Script and sounds** | | | |
| 1 | `alphabet` | Letters 1: familiar shapes and false friends | ru-alphabet | How Cyrillic works (33 letters, printed forms only; cursive and italics differ and are not taught); true friends А К М О Т; false friends В Е Н Р С У Х; reading first words made only from these 12 letters (мама, кот, нет, там, вот, кто, метро, ресторан, сахар, Москва); the five vowel sounds and capitals in the respelling; он / она / оно for things (кот, мама, метро). Trap: Р read as p, Н as h, В as b, С as k, У as y, Х as x, Е as "ee" (§4.6). | Letters 1: friends and false friends |
| 2 | `letters` | Letters 2: new shapes | (added) | Б Г Д З И Й Л П Ф Э Ы, each with a key word (банк, где, дом, завтра, такси, мой, лимон, папа, фото, это, мы); look-alikes Б / В, И / Й, Ы vs ь + I, З vs 3, П vs pi; ы vs и; й making diphthongs (мой, чай in a preview); это and the first sentences without "is" (Это мой дом); мой vs мои. Trap: И read as N; ы said "ee"; З written as 3 (§4.6). | Letters 2: new shapes |
| 3 | `sounds` | Soft and hard, voiced and voiceless | ru-sounds | Я Ё Ю (and Е again) as "y + vowel", and as markers of a soft consonant; Ж Ш Щ Ч Ц; ь and ъ; hard / soft pairs (мат / мать, брат / брать); final devoicing (хлеб, друг, город) and voicing in clusters (водка, в парк); моя / моё now readable. Trap: ignoring ь (мат for мать); Щ read "shch" letter by letter; voiced final consonants (§4.4). | Letters 3: soft vowels and hushing sounds |
| 4 | `stress` | Stress and vowel reduction | ru-stress | One stressed syllable per word, anywhere, learned with the word; unstressed о → ah, е / я → ih (молоко, хорошо, сестра, неделя); ё always stressed; reading the capitals; first polite words (спасибо, пожалуйста, извините, можно?). Trap: reading every о as o; English stress on cognates (ресторан, университет) (§4.5). | Greetings and politeness |
| | | **Stage 2: First sentences** | | | |
| 5 | `greetings` | Greetings: ты and вы | ru-greetings | Здравствуйте / Привет; Как вас / тебя зовут? Меня зовут…; Очень приятно; Как дела? — Хорошо, а у вас?; До свидания / Пока; when to use вы and ты, who offers ты (Давай на ты?); name + patronymic (Анна Сергеевна) for recognition; short names. Trap: Привет to a teacher; А ты? after Как дела? (§4.15). | Formal and informal |
| 6 | `eto` | Это: this is, with no 'is' | ru-eto | Это + noun (Это мой брат); X — Y sentences without "is" (Я студент, Анна врач); no articles (Это дом = "this is a house / the house"); Кто это? Что это?; Это for every gender and number. Trap: Я есть студент; Это один дом for "a house"; это changed to эта to agree (Это моя сестра is right) (§4.3). | People and family |
| 7 | `intonation` | Intonation: statements and questions | ru-intonation | A yes / no question has the same words as the statement; the voice rises sharply on the word asked about (Это кофе? / Это кофе.); question-word questions fall (Что это?); да / нет answers; offering and asking at a café (Чай? Кофе?). Trap: a falling voice on a yes / no question, heard as a statement; adding "do" or moving the verb first (§4.16). | Food and drink |
| 8 | `gender` | Gender of nouns | ru-gender | Masculine (consonant, -й), feminine (-а, -я), neuter (-о, -е); nouns in -ь to learn one by one (мать f, день m); men's words in -а (папа, дядя) masculine; indeclinable loanwords (кафе, метро, кофе m); он / она / оно; мой / моя / моё. Trap: gender by meaning only, so папа treated as feminine; моя кофе (§4.2). | Home and city |
| 9 | `pronouns` | Personal and possessive pronouns | ru-pronouns | я, ты, он, она, оно, мы, вы, они; мой, твой, наш, ваш agreeing with the thing owned; его, её, их never changing; чей / чья / чьё / чьи; вы as plural and polite. Trap: possessive agreeing with the owner (моя for a woman speaker's brother → мой брат); его changed to agree (§4.2). | People and family |
| 10 | `adjectives` | Adjectives agree: новый, новая, новое | ru-adjectives | Nominative endings -ый / -ой / -ий, -ая, -ое, -ые (and -ая after the spelling rule: хорошая, русские); какой? какая?; adjective before the noun; colours, size, age, quality. Trap: новый машина; one ending for all genders, as in English (§4.2). | Describing people and things |
| 11 | `plural` | Plurals | ru-plural | -ы / -и (with the spelling rule after г к х ж ш щ ч: книги, ключи), -а / -я for neuter (окна, моря), common irregulars (люди, дети, друзья, братья); мои / новые in the plural; stress shifts (окно → окна) shown by the respelling. Trap: adding -s; ы after к (книгы); **stress homographs** (окна, руки): writers must check the respelling (§6.1). | Shopping and things |
| 12 | `present` | Present tense: two conjugations | ru-present | First conjugation (читать: читаю, читаешь…, работать, знать, делать, понимать) and second (говорить: говорю, говоришь…, любить with л); one present for "I read" and "I am reading"; хотеть (mixed) and жить (живу); the вы-form for strangers. Trap: я работает; говорешь; "I am reading" as Я есть читаю (§4.8, §4.3). | Daily routine |
| 13 | `questions` | Question words: кто, что, где | ru-questions | кто, что, где, куда, откуда, когда, как, почему, сколько, какой; word order with question words; Где метро? Где здесь туалет?; где vs куда previewed. Trap: Где ты идёшь? for "where to"; что for "which" (какой) (§4.10). | Getting around |
| 14 | `negation` | не and нет | ru-negation | не before what it negates (Я не знаю; Не я); нет as "no"; Нет, я не…; double negatives (никто не, ничего не, никогда не); нет + genitive previewed as a chunk (Здесь нет банка). Trap: Я знаю никого; Нет, я знаю for "No, I don't" (§4.11). | Traps for English speakers |
| 15 | `numbers` | Numbers and prices | ru-numbers | 0–1,000 in words; Сколько стоит? Сколько стоят?; рубль / рубля / рублей after 1 / 2–4 / 5–20 as fixed chunks (explained in `genitive`); ages previewed (Мне двадцать лет, as a chunk); phone numbers in pairs. Trap: два рубли, пять рубля (§4.13). | Numbers and money |
| | | **Stage 3: The six cases** | | | |
| 16 | `prepositional` | Prepositional: where, about | ru-prepositional | What a case is (the ending shows the job: Москва → в Москве); в / на + prepositional for "where" (в школе, на работе, на почте); о + prepositional "about" (о маме); endings -е (-и for -ия, -ь feminine); adjective -ом / -ой (в новом доме) for recognition; где? Trap: в Москва; в for every "at" (на работе, на почте) (§4.1). | Home and city |
| 17 | `accusative` | Accusative: objects and direction | ru-accusative | The direct object: feminine -у / -ю (книгу, Москву), masculine and neuter unchanged if not alive, animate masculine -а / -я (брата); в / на + accusative for "where to" (в школу, на работу); хочу, люблю, читаю, вижу + accusative; меня, тебя, его. Trap: Я люблю Анна; Я иду в школе for "to school" (§4.1, §4.10). | Food and drink |
| 18 | `genitive` | Genitive: of, without, how many | ru-genitive | "Of": бутылка воды, чашка чая, центр города; нет / без + genitive; сколько, много, мало + genitive; 2–4 + genitive singular, 5 and up + genitive plural (рубля / рублей, часа / часов) now explained; из, от, у, после, для. Trap: нет хлеб; бутылка вода; using "of" order (воды бутылка) (§4.1, §4.13). | Shopping and things |
| 19 | `have` | У меня есть: to have | ru-have | у + genitive pronoun (у меня, у тебя, у него, у неё, у нас, у вас, у них) + есть + the thing in the nominative; У вас есть…? in shops; У меня нет + genitive; есть dropped when the thing itself is not new (У меня болит голова). Trap: Я имею брата; У меня нет брат; у я (§4.7). | People and family |
| 20 | `past` | Past tense: был, была, было | ru-past | -л / -ла / -ло / -ли by the subject's gender and number (он читал, она читала, они читали); быть: был, была, было, были (Я был дома; Вчера было холодно); a woman says я была; stress moves in some (была, было) shown by the respelling. Trap: Она был; the past chosen by the listener's gender; ты был for a woman (§4.2). | Daily routine |
| 21 | `dative` | Dative: to whom, age, likes | ru-dative | Indirect object (Я звоню маме, Я пишу брату); мне, тебе, ему, ей, нам, вам, им; age (Мне двадцать лет); мне нравится / нравятся (the thing liked is the subject); мне холодно, мне надо, мне нужно; к + dative (к врачу). Trap: Я нравлю Москву; Я холодно; Я звоню маму (§4.12). | Likes and feelings |
| 22 | `instrumental` | Instrumental: with, and jobs | ru-instrumental | с + instrumental "with" (с молоком, с другом, со мной); работать / быть + instrumental for jobs (работаю врачом; Я хочу быть учителем); заниматься спортом; endings -ом / -ем, -ой / -ей; мной, тобой. Trap: с молоко; Я работаю как врач (§4.1). | Work and study |
| | | **Stage 4: Verbs in time** | | | |
| 23 | `future` | Future tense | ru-future | буду, будешь… + imperfective infinitive (Я буду читать); буду as "will be" (Завтра я буду дома); the perfective present as the future (Я позвоню завтра), previewed and explained in `aspect`. Trap: Я буду прочитать; Я буду дома завтра as the only word order (§4.9). | Time and days |
| 24 | `aspect` | Aspect: imperfective and perfective | ru-aspect | Imperfective = process, habit, "was doing"; perfective = one finished result (читать / прочитать, делать / сделать, писать / написать, покупать / купить); каждый день vs вчера + result; past and future forms of both. Trap: Вчера я читал книгу meant as "finished it"; perfective with каждый день (Lenchuk 2016; §4.9). | Work and study |
| 25 | `motion` | Going on foot and by transport: идти, ехать | ru-motion | идти (on foot, one way, now) vs ехать (by vehicle); иду / еду conjugations; куда? в / на + accusative; на автобусе / на метро; ходить / ездить for "go regularly" and "went and came back" (Я ездил в Москву), for recognition. Trap: иду to Moscow from Boston; путешествовать в; был в Москву (§4.10). | Getting around |
| 26 | `imperative` | Imperative: please do | ru-imperative | -и / -й (+ -те for вы): скажи / скажите, помоги / помогите, подождите, повторите, давай / давайте; Дайте, пожалуйста… as a normal polite request; Не + imperfective for "don't" (Не говорите…). Trap: a bare infinitive as a command (Повторить, пожалуйста?); the ты-form to a stranger (§2.4). | Health and help |
| 27 | `connectors` | и, а, но, потому что | ru-connectors | и (and, also), а (and / whereas, contrast: Я студент, а она врач), но (but); потому что (because), поэтому (so); что and где as "that" and "where" in two-part sentences (Я знаю, что…). Trap: и where Russian needs а; no comma before что and потому что (Russian requires it, but the matcher ignores commas) (§4.15). | Likes and feelings |
| 28 | `time` | Time, days and dates | ru-time | Который час? Сколько времени?; час / часа / часов; в + accusative for clock times and days (в два часа, в понедельник); утром, днём, вечером, ночью; months and в + prepositional (в мае); dates with ordinals (первое мая) for recognition. Trap: в понедельнике for "on Monday"; два часы (§4.13). | Time and days |

Per-lesson notes for writers:
- Every set satisfies §7. Before `prepositional`, strand (b) carries the rule: он / она / оно, мой / моя / моё / мои, adjectives, and in `numbers` один / одна / одно and два / две, which agree with the noun (один рубль, одна бутылка; два рубля, две бутылки: "the feminine form две"). The case names are not used in a `why` before the lesson that teaches them; рубль / рубля / рублей stay chunks there.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: a case contrast from the §7 table, an agreement contrast, a verb ending (я работаю / он работает), вы / ты with the cue, and a soft-sign pair in an `mc` item.
- **In the three letter lessons**, practice items test reading: `mc` "Which word is 'kot'?" (options in Cyrillic; the respelling allowed in the English prompt, §6.6); `or` tiles of whole words; `fi` with one missing letter (q: `р__сторан`, a: `е`, o: `и|а|э`; no distractor may spell a real word); and `ty` items with short phrases (the learner is on tiles by default). **Every Russian string in a letter lesson uses only the letters taught by then:** `alphabet` А К М О Т В Е Н Р С У Х; `letters` adds Б Г Д З И Й Л П Ф Э Ы; `sounds` adds Я Ё Ю Ж Ш Щ Ч Ц Ь Ъ. A reviewer checks it with a one-line script (§10.2).
- Vocabulary for the letter lessons is limited to what the learner can read by then; sentences without "is" (Это мой дом, Мама тут) are allowed from `letters` on, before `eto` explains them.
- Stress homographs (§6.1): if `respell.js` throws on a homograph, pick another word or ask the lead to add the phrase. Never change the Russian to dodge a throw in a way that makes it less natural.

## 9. Decks

**18 decks in 5 groups**, about 300 cards: 16–18 per deck (the validator allows 12–30). Card shape: `target | pron | meaning | note`.
- `target`: Russian, plain Cyrillic with ё, no stress marks (§2.6). Phrases may end in . ! ?; the deck matcher strips them.
- `pron`: generated by `respell.js`, pasted unchanged (§6.1).
- `meaning`: short American English, unique within the deck. Register and speaker cues go here: "(formal)", "(informal)", "(a woman)".
- `note`: one English line, or empty for at most a quarter of a deck. Gender, the case used, the trap.

**Groups, in order:**

| Group | Decks |
|---|---|
| Letters and sounds | Letters 1: friends and false friends · Letters 2: new shapes · Letters 3: soft vowels and hushing sounds |
| First steps | Greetings and politeness · Formal and informal · People and family · Numbers and money · Time and days |
| Everyday life | Food and drink · Shopping and things · Home and city · Daily routine · Describing people and things · Work and study |
| Out and about | Getting around · Health and help · Likes and feelings |
| Watch out | Traps for English speakers |

Every deck is linked by at least one lesson (§8), so no deck is reachable only from a lesson body.

**Letter decks (the script stage without the letter-drill machine).** They are ordinary decks, built so that each card can be voiced:
- **One key word per letter, not the bare letter.** A device voice reads a lone consonant letter by its name (Б as "бэ"), which would contradict the respelling `b` [inference; §10.7 request 7]. So each card's target is a short word that features the letter, and its meaning names the letter's sound: `кот | koht | cat (К = k) | …`. The deck quiz ("pick the Russian for 'cat (К = k)'") then trains reading the letter inside a word.
- **ь and ъ** are taught with whole words (мать, подъезд), as en-ja teaches small っ and ー.
- **Every card uses only the letters taught by its deck and the decks before it**, so the decks can be studied in order from day one (checked by script).
- `note`: the shape trap or the sound ("Р is a tapped or rolled r, never p").
- Cards and counts (key word per letter, then extra words):
  - **Letters 1** (18): А мама, К кот, М метро, О он, Т там, В вот, Е нет, Н она, Р ресторан, С сок, У утро, Х сахар; extra: кто, тут, оно, Москва, торт, окно.
  - **Letters 2** (17): Б банк, Г где, Д дом, З завтра, И такси, Й мой, Л лимон, П папа, Ф фото, Э это, Ы мы; extra: да, вы, ты, суп, кафе, билет.
  - **Letters 3** (16): Я я, Ё ещё, Ю меню, Ж жена, Ш школа, Щ борщ, Ч чай, Ц центр, ь мать, ъ подъезд; extra: мат, брат, брать (the hard / soft pairs), хорошо, щи, чашка. These 51 words are reserved for the letter decks: no other deck uses them as a target.
- If the letter-drill machine is generalised (§10.7 request 9), it can take the letter from the meaning's "(К = k)" or from a `letter` field added by the lead.

**Deck rules for writers**
- Nouns appear in the nominative unless the card is a phrase. A note gives the gender only where it is not regular (папа m., мать f., день m., кофе m.).
- Phrases with "you" carry the register in the meaning (§2.2). First-person gendered phrases carry "(a man)" / "(a woman)" in the meaning, or both forms appear as two cards.
- Verbs are cards in the infinitive (читать "to read") in the vocabulary decks, and as short sentences in the others (Я читаю.).
- Prices and numbers are written in words (§2.6).
- **Traps for English speakers** (18 cards): about 8 false friends (магазин, фамилия, симпатичный, аккуратный, кабинет, артист, шеф, фабрика: §4.14; камера is left out, because it also means a phone or video camera today [inference]), about 6 calques (Я имею… → У меня есть…; Я холодно → Мне холодно; Я знаю никого → Я никого не знаю; путешествовать в → ездить в; the "Я есть студент" trap is the note on Я студент. in Work and study), and about 4 replies and register traps (А у тебя?, Привет vs Здравствуйте, Не за что, Девушка!). A card target is always **correct** Russian; the wrong English-style version goes only in the note. Everything in this deck is on the §11 native-check list.

**Five sample cards per deck** (all prons generated and passing `pronPattern`; meanings unique within each deck; no sample target repeats a letter-deck word):

**1. Letters 1: friends and false friends.** One key word per letter for А К М О Т (look and sound as in English) and В Е Н Р С У Х (look English, sound different), plus first words made only from them. Lesson: `alphabet`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| кот | `koht` | cat (К = k) | К looks and sounds like English k. |
| нет | `nyeht` | no (Е = ye) | Е says "ye" as in "yes", not "ee". Н is n, not h. |
| ресторан | `rihs-tah-RAHN` | restaurant (Р = r) | Р is a tapped or rolled r, never p. |
| сахар | `SAH-khahr` | sugar (Х = kh) | Х is the breathy kh in "Bach", never x. |
| утро | `OO-trah` | morning (У = oo) | У is "oo", never y. |

**2. Letters 2: new shapes.** One key word per letter for Б Г Д З И Й Л П Ф Э Ы, plus words that use them. Lesson: `letters`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| банк | `bahnk` | bank (Б = b) | Б has a flag on top; В (v) has two bumps. |
| такси | `tahk-SEE` | taxi (И = ee) | И looks like a backwards N and says "ee". |
| мой | `moy` | my (Й = y) | Й is a short y after a vowel: мой rhymes with "boy". |
| это | `EH-tah` | this; that (Э = eh) | Э is a backwards E and says "eh". |
| мы | `mih` | we (Ы = ih) | Ы: say "ih" with your tongue pulled back. No English sound. |

**3. Letters 3: soft vowels and hushing sounds.** Я Ё Ю, Ж Ш Щ Ч Ц, the soft sign ь and the hard sign ъ, each in a key word, plus hard and soft pairs. Lesson: `sounds`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| я | `yah` | I (Я = ya) | Я is one letter for "ya". It is also the word for "I". |
| чай | `chai` | tea (Ч = ch) | Ч is always soft, like ch in "cheap". |
| борщ | `bohrsh'` | borscht (Щ = soft long sh) | Щ is a long, soft sh, as in "fresh sheets" said fast. |
| мать | `maht'` | mother (ь = soft sign) | ь has no sound: it makes т soft. Without it, мат means "checkmate". |
| подъезд | `pahd-YEHST` | building entrance (ъ = hard sign) | ъ has no sound: it keeps д hard and adds a y before е. |

**4. Greetings and politeness.** Hello, goodbye, please, thank you, sorry, and the phrases that keep a conversation polite. Lesson: `stress`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Здравствуйте! | `ZDRAHS-tvooy-tih` | Hello! (formal) | The first в is silent: ZDRAHS-tvooy-tih. To friends: Привет! |
| Спасибо! | `spah-SEE-bah` | Thank you! | Answer: Пожалуйста! ("You're welcome") |
| Пожалуйста. | `pah-ZHAHL-stah` | Please. / You're welcome. | One word, two jobs. Said pah-ZHAHL-stah. |
| Извините! | `eez-vee-NEE-tih` | Excuse me! / Sorry! (formal) | To get attention or to apologize. To a friend: Извини! |
| Можно? | `MOHZH-nah` | May I? | Point at the seat, the menu or the door: Можно? covers it. |

**5. Formal and informal.** The same idea said to a stranger (вы) and to a friend (ты): greetings, questions, requests. Lesson: `greetings`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Как вас зовут? | `kahk vahs zah-VOOT` | What's your name? (formal) | Word for word: "How do they call you?" |
| Как тебя зовут? | `kahk tih-BYAH zah-VOOT` | What's your name? (informal) | To a child, a classmate, a friend. |
| Привет! | `pree-VYEHT` | Hi! (informal) | Only with people you say ты to. |
| Давай на ты? | `dah-VAI nah tih` | Shall we say ты? (informal) | The usual way to switch; often the older person offers it. |
| Очень приятно. | `OH-chihn' pree-YAHT-nah` | Nice to meet you. | Formal and informal alike. |

**6. People and family.** Family members, friends, and the words for introducing them. Lessons: `eto`, `pronouns`, `have`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Это мой брат. | `EH-tah moy braht` | This is my brother. | No word for "is": Это + noun. |
| Это моя сестра. | `EH-tah mah-YAH sihs-TRAH` | This is my sister. | моя, because сестра is feminine. |
| бабушка | `BAH-boosh-kah` | grandmother | Also how children address an older woman they know. |
| У меня есть сын. | `oo mih-NYAH yehst' sihn` | I have a son. | Word for word: "By me there is a son." |
| друг | `drook` | friend (a man) | A woman friend is подруга. Said drook: final г sounds like k. |

**7. Numbers and money.** Numbers to a thousand, rubles, prices and paying. Lesson: `numbers`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Сколько стоит? | `SKOHL'-kah STOH-eet` | How much is it? | For several things: Сколько стоят? |
| один рубль | `ah-DEEN roobl'` | one ruble | 1, 21, 31…: рубль. |
| два рубля | `dvah roo-BLYAH` | two rubles | 2, 3, 4: рубля. |
| пять рублей | `pyaht' roo-BLYEY` | five rubles | 5 to 20: рублей. |
| Можно картой? | `MOHZH-nah KAHR-tahy` | Can I pay by card? | картой: "with a card" (instrumental). |

**8. Time and days.** Days of the week, today and tomorrow, clock times and months. Lessons: `future`, `time`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| сегодня | `sih-VOHD-nyah` | today | The г is said v: sih-VOHD-nyah. |
| вчера | `fchih-RAH` | yesterday | в before ч sounds like f: fchih-RAH. |
| в понедельник | `f pah-nih-DYEHL'-neek` | on Monday | в + the day: в понедельник, в среду. |
| Который час? | `kah-TOH-rihy chahs` | What time is it? | Also: Сколько времени? |
| в два часа | `v dvah chih-SAH` | at two o'clock | 1 час, 2–4 часа, 5–12 часов. |

**9. Food and drink.** Ordering, Russian dishes, drinks, and what to say at the table. Lessons: `intonation`, `accusative`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Я хочу борщ. | `yah khah-CHOO bohrsh'` | I want borscht. | хочу + the thing (accusative). |
| Можно меню? | `MOHZH-nah mih-NYOO` | Can I have the menu? |  |
| Чай с молоком. | `chai s mah-lah-KOHM` | Tea with milk. | с + instrumental: молоком. |
| Счёт, пожалуйста. | `sh'oht pah-ZHAHL-stah` | The check, please. |  |
| пельмени | `pihl'-MYEH-nee` | pelmeni (dumplings) | Meat dumplings, often with sour cream (сметана). |

**10. Shopping and things.** Things you buy and carry, shops, and asking for them. Lessons: `plural`, `genitive`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| магазин | `mah-gah-ZEEN` | store; shop | Not "magazine" (that is журнал). |
| Дайте, пожалуйста, воду. | `DAI-tih pah-ZHAHL-stah VOH-doo` | Some water, please. | Дайте: "give". вода becomes воду (accusative). |
| У вас есть хлеб? | `oo vahs yehst' khlyehp` | Do you have bread? | The usual way to ask in a shop. |
| бутылка воды | `boo-TIHL-kah vah-DIH` | a bottle of water | воды: genitive, "of water". |
| пакет | `pah-KYEHT` | plastic bag | Cashiers ask: Пакет нужен? ("Do you need a bag?") |

**11. Home and city.** Rooms, buildings and places in town, with where things are. Lessons: `gender`, `prepositional`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| стол | `stohl` | table | Masculine: ends in a consonant. |
| квартира | `kvahr-TEE-rah` | apartment | Feminine: ends in -а. |
| здание | `ZDAH-nee-yih` | building | Neuter: ends in -е. |
| Я живу в Москве. | `yah zhih-VOO v mahs-KVYEH` | I live in Moscow. | в + prepositional: Москва → в Москве. |
| на работе | `nah rah-BOH-tih` | at work | на, not в, for work, the post office, the street. |

**12. Daily routine.** Everyday verbs in the present and past: get up, work, eat, read, sleep. Lessons: `present`, `past`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Я работаю. | `yah rah-BOH-tah-yoo` | I work. | работать: я работаю, ты работаешь. |
| Что ты делаешь? | `shtoh tih DYEH-lah-yihsh` | What are you doing? (informal) | One present tense for "do" and "are doing". |
| Я встаю в семь. | `yah fstah-YOO f syehm'` | I get up at seven. |  |
| Вчера я читал. | `fchih-RAH yah chee-TAHL` | Yesterday I was reading. (a man) | A woman says: Вчера я читала. |
| Она была дома. | `ah-NAH bih-LAH DOH-mah` | She was at home. | была: past of "be" for a woman. |

**13. Describing people and things.** Adjectives for size, age, colour and quality, in all three genders. Lesson: `adjectives`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| новый дом | `NOH-vihy dohm` | a new house | новый: masculine. |
| новая машина | `NOH-vah-yah mah-SHIH-nah` | a new car | новая: feminine. |
| новое окно | `NOH-vah-yih ahk-NOH` | a new window | новое: neuter. |
| красивый | `krah-SEE-vihy` | beautiful; handsome |  |
| Какой? | `kah-KOY` | Which? What kind? | Changes like an adjective: какая, какое, какие. |

**14. Work and study.** Jobs, studying, and saying what you do and where. Lessons: `instrumental`, `aspect`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Я студент. | `yah stoo-DYEHNT` | I'm a student. (a man) | A woman: Я студентка. Never "Я есть студент": no "am" in the present. |
| Я работаю врачом. | `yah rah-BOH-tah-yoo vrah-CHOHM` | I work as a doctor. | работать + instrumental: врачом. |
| Где вы работаете? | `gdyeh vih rah-BOH-tah-yih-tih` | Where do you work? (formal) |  |
| Я учусь в университете. | `yah oo-CHOOS' v oo-nee-vihr-see-TYEH-tih` | I study at a university. | учиться: to be a student somewhere. |
| Я прочитал книгу. | `yah prah-chee-TAHL KNEE-goo` | I finished reading the book. (a man) | прочитал: perfective, done. |

**15. Getting around.** Directions, transport, and asking the way. Lessons: `questions`, `motion`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Где метро? | `gdyeh mih-TROH` | Where's the subway? |  |
| Я иду домой. | `yah ee-DOO dah-MOY` | I'm walking home. | идти: on foot, one direction, now. |
| Я еду на работу. | `yah YEH-doo nah rah-BOH-too` | I'm going to work (by transport). | ехать: by bus, car or train. |
| направо | `nah-PRAH-vah` | to the right | налево: to the left; прямо: straight on. |
| остановка | `ahs-tah-NOHF-kah` | bus stop |  |

**16. Health and help.** Asking for help, at the pharmacy and the doctor, and polite commands. Lesson: `imperative`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Помогите! | `pah-mah-GEE-tih` | Help! | Imperative of помочь, to more than one person or formal. |
| Мне плохо. | `mnyeh PLOH-khah` | I feel sick. | Dative мне: "to me it is bad". |
| У меня болит голова. | `oo mih-NYAH bah-LEET gah-lah-VAH` | I have a headache. | Word for word: "By me hurts head." |
| аптека | `ahp-TYEH-kah` | pharmacy | Not a bar: a drugstore. |
| Повторите, пожалуйста. | `pahf-tah-REE-tih pah-ZHAHL-stah` | Please say that again. (formal) |  |

**17. Likes and feelings.** Likes, wants, feelings and reasons: мне нравится, мне холодно, потому что. Lessons: `dative`, `connectors`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| Мне нравится Москва. | `mnyeh NRAH-vee-tsah mahs-KVAH` | I like Moscow. | Word for word: "Moscow is pleasing to me." |
| Мне холодно. | `mnyeh KHOH-lahd-nah` | I'm cold. | Dative мне, not я. |
| Я люблю музыку. | `yah lyoo-BLYOO MOO-zih-koo` | I love music. | любить + accusative: музыку. |
| Мне двадцать лет. | `mnyeh DVAH-tsaht' lyeht` | I'm twenty years old. | Age uses the dative: мне, тебе, ему. |
| потому что | `pah-tah-MOO shtoh` | because | Said pah-tah-MOO shtah. |

**18. Traps for English speakers.** False friends, calques of English, and replies that sound wrong in Russian. Lesson: `negation`.

| Russian | `pron` | Meaning | Note |
|---|---|---|---|
| фамилия | `fah-MEE-lee-yah` | last name; surname | Not "family" (that is семья). |
| У меня есть машина. | `oo mih-NYAH yehst' mah-SHIH-nah` | I have a car. | Not "Я имею машину": Russian says "by me there is a car". |
| симпатичный | `seem-pah-TEECH-nihy` | nice-looking; likeable | Not "sympathetic". |
| Я никого не знаю. | `yah nee-kah-VOH nih ZNAH-yoo` | I don't know anybody. | Russian needs both никого and не: not "Я знаю никого". |
| А у тебя? | `ah oo tih-BYAH` | And you? (after Как дела?) | Как дела? is answered with А у тебя?, not А ты? |

### 9.1 Localisation

- **People:** Russian first names, with short forms among friends: Анна, Иван, Мария / Маша, Александр / Саша, Ольга, Дмитрий / Дима, Сергей, Наталья / Наташа, Екатерина / Катя, Михаил / Миша, Елена / Лена. Name + patronymic for teachers and bosses, for recognition only: Анна Сергеевна, Иван Петрович. Surnames: Петров / Петрова, Иванов / Иванова, Смирнов / Смирнова. The learner and other Americans: Эмили, Майкл, Сара, Джейк.
- **Places:** Москва, Санкт-Петербург, Казань, Сочи, Новосибирск, Байкал; US cities in Russian spelling: Нью-Йорк, Чикаго, Бостон, Сиэтл. Places in town: метро, остановка, аптека, магазин, банк, почта, вокзал, аэропорт, гостиница, кафе, ресторан, музей, театр, парк.
- **Settings:** neutral everyday life (a café, a shop, a family, a university, an office). [inference] Many learners will use Russian outside Russia (§5), so dialogues may be set in a Russian-speaking neighbourhood in the US or in another country as well as in Russia. **No politics, war, leaders, flags or national-pride statements**, and no Soviet nostalgia, in examples or notes.
- **Food:** борщ, пельмени, блины, щи, каша, пирожки, сырники, салат, суп, хлеб, сыр, чай, кофе, сок, вода, молоко, квас; сметана as the trap-free "sour cream". Vodka appears only as the devoicing example водка in `sounds` and the respelling table, never as a cultural cliché.
- **Money:** rubles (рубль / рубля / рублей) and kopecks for recognition. Prices are **illustrative round numbers** (сто рублей, двести рублей, тысяча рублей), not current market prices, which change quickly [inference, §11]. Dollars only in English notes for comparison.
- **Time and dates:** clock times and dates in words (в два часа, первое мая).

## 10. Typing and script

### 10.1 Script and `targetScript`

Russian uses 33 Cyrillic letters, written left to right with spaces between words, so tiles can follow the words and today's space-based tile fallback works unchanged. The basic letters are U+0410–U+044F; ё and Ё (U+0451, U+0401) lie **outside** that range.

`targetScript`: `[А-Яа-яЁё]`. It names ё and Ё explicitly. Every Russian string must contain one such character; no respelling can match it, so a `pron` pasted into a target fails the validator. Tested with the `u` flag on А, я, Ё, ё, Ы and on all test rows.

`accents: false`. With `accents: true`, today's "almost" fold (`foldAcc`, which removes every combining mark after NFD) would turn й into и and ё into е. A learner typing мои for мой, the very agreement contrast of §7, would then be graded "almost" instead of wrong. With `false`, an answer must match exactly; ё / е is handled by request 1 or 11.

`keys: ""`: no accent bar. A bar cannot hold 33 letters, and a learner who types Russian has a Russian keyboard (§10.4). `tilesDefault: true` (the field en-ja and en-zh use).

### 10.2 The script stage

| Lesson | Letters taught | Linked deck |
|---|---|---|
| 1 `alphabet` | А К М О Т (friends), В Е Н Р С У Х (false friends) | Letters 1: friends and false friends (18) |
| 2 `letters` | Б Г Д З И Й Л П Ф Э Ы (new shapes) | Letters 2: new shapes (17) |
| 3 `sounds` | Я Ё Ю Ж Ш Щ Ч Ц, ь, ъ (soft vowels, hushing sounds, signs) | Letters 3: soft vowels and hushing sounds (16) |
| 4 `stress` | none new: stress, reduction, reading whole words | Greetings and politeness |

- **Three letter lessons, then stress.** Each letter lesson explains a group and its traps, and its deck gives every letter a card in spaced review. Mezhdu nami likewise teaches letters in groups in its first unit, with look-alikes flagged ([1.3](https://mezhdunami.ku.edu/unit01/1_3/language.shtml)) [curriculum convention].
- **Order:** friends and false friends first, so the learner reads real words (мама, кот, метро, ресторан) in lesson 1; then new shapes; then the soft vowels and hushing sounds, which need the hard / soft idea and so sit with `sounds`.
- **Printed forms only.** Cursive and italic forms (т like m, и like u, д like g) are mentioned once in `alphabet` and never used (§2.5).
- **It works with ordinary decks and lessons** (§9): flip cards with audio, the meaning-to-Russian quiz, and practice that tests reading through `mc`, `or` (whole-word tiles), `fi` (one missing letter, tap fallback) and short `ty` phrases on tiles.
- **Letters-so-far check.** Every Russian string in a letter lesson and its deck uses only letters already taught. The hinges in §7 and the deck lists in §9 were checked by script. The reviewer runs the same check on the writers' files: for each letter lesson, the allowed set is its own group plus the earlier groups (§8, per-lesson notes), and any Cyrillic letter outside it, in that lesson's entry or its deck, is flagged. The lead may add it to `validate.js` (request 2).

### 10.3 What a typed answer is

| Stage | Default answer mode | Typing, for learners who choose it |
|---|---|---|
| 1 (letter lessons) | tiles and taps: `fi` becomes a 4-option tap, `ty` becomes word tiles | not expected |
| 2–4 | tiles (`tilesDefault: true`) | **Cyrillic**, from the phone's Russian keyboard (iOS and Android both ship one; ё is a long-press on е, ъ on ь) or a desktop layout. Standard ЙЦУКЕН is recommended; desktop phonetic layouts (Mac "Russian – Phonetic", Windows "Russian Mnemonic") are easier at first but not standardised ([elon.io](https://elon.io/grammar/russian/writing-system/keyboard-and-typing); [PSU](https://sites.psu.edu/symbolcodes/languages/europe/cyrillic/russian)) |
| 2–4, no Russian keyboard | tiles | **Latin transliteration typed on an English keyboard**, if request 5 is built: accepted as "almost", with the Cyrillic model answer shown |

**The transliteration scheme for typed Latin** (request 5; it is not the respelling, which shows sound, not spelling): a learner types the spelling letter by letter in any common form, and the matcher compares loosely.
- Canonical form (BGN/PCGN, simplified as is usual online, [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Russian)): а a, б b, в v, г g, д d, е e, ё yo, ж zh, з z, и i, й y, к k, л l, м m, н n, о o, п p, р r, с s, т t, у u, ф f, х kh, ц ts, ч ch, ш sh, щ shch, ъ (nothing), ы y, ь (nothing or '), э e, ю yu, я ya.
- The matcher's `ruLoose(x)`, applied to the typed text and to the transliterated answer: lowercase; remove ' ’ and spaces at hyphens; map j → y, x → kh, w → v, c → ts unless in ch; collapse (ye|je|e) → e, (yo|jo|io|ё) → yo, (yu|ju|iu) → yu, (ya|ja|ia) → ya, (shch|sch|sh') → shch, h alone (not in kh, zh, ch, sh) → kh; collapse the endings iy / yy / ij → y. Compare whole strings.
- Accepted as "almost: here it is in Cyrillic" (`PRAC_ALMOST`), never as fully correct, so the learner sees the Cyrillic each time.

**ё / е, stress marks, й / и in answers**
- **е typed for ё: correct** (request 1). The 2006 rules allow е for ё in ordinary texts ([Eskova](https://orfo.ruslang.ru/docs/articles/eskova-o-bukve-2012.pdf)), and phone users type е by default. The match is **one-way**: an answer's ё accepts е or ё, and an answer's е accepts only е. So все (everyone) never accepts всё (everything), and a `fi` distractor все cannot be accepted for the answer всё by accident.
- **Stress marks: ignored.** The matcher strips U+0301 from both sides (request 1). The source has none (§2.6).
- **й / и: never folded**, nor ъ / ь: they are different letters (мой / мои). With `accents: false` this already holds in practice; the validator's fold still needs the fix (request 2).

### 10.4 Tiles: segmentation and spacing

- **`or` items:** tiles split on spaces (one word per tile). A preposition is **its own tile** (в | Москве), so the learner must pick the case form, and the wrong case form of the same noun is the distractor (§7). Hyphenated words are one tile (по-русски).
- **`ty` items:** the fallback tiles are `a[0]` split at spaces plus `x`, which works as is for Russian. `x` holds one wrong word form.
- **`fi` items:** the gap is a case ending inside a word only if the word is split by the writer (`в Москв__`, a: `е`, o: `а|у|ой`). Otherwise the gap is a whole word (`Я живу в __`, a: `Москве`, o: `Москва|Москву|Москвой`). Both are allowed; prefer the whole word, which needs no letter-level reading.
- **Model answers** for `or` items are shown with spaces between tiles, which is correct Russian spacing.

### 10.5 Punctuation rules

- Written as in §2.6 in targets, examples and `a[0]`; ignored by the matcher (`pracNorm` strips . , ! ? … and « » " " already; the dash and the hyphen are not stripped).
- **No dash** in A1 sentences (Москва — столица): it would be a stray tile and a matching problem. Write Это… sentences or the noun pair without the dash; a native would accept both [inference, §11].
- **Commas** follow Russian rules in model answers (Я знаю, что…; Я студент, а она врач) and do not matter for matching.
- Questions end with ?; there are no inverted marks; quotes are « ».

### 10.6 Fonts and line height

- Cyrillic is covered by every system font on the target platforms [inference]. **Check the app's own fonts** (headings and the card face): a Latin-only web font falls back per glyph, which can mix two typefaces inside one Russian word (request 8).
- Mark every element that shows Russian with `lang="ru"`: voice selection, hyphenation and the italic rule below depend on it.
- **No italics for Russian.** `:lang(ru)` inside `<i>` or `<em>` should render upright (or the validator should reject `<i>` around Cyrillic), because Cyrillic italic letter shapes differ from print (§2.5).
- Normal line height is enough (no diacritics stacking), but stress marks, if request 4 is built, need a font that places U+0301 on Cyrillic vowels correctly; check it on iOS and Android.
- The respelling line uses the app's monospace font; check that the apostrophe is distinct there.

### 10.7 What the lead needs to build, in priority order

The engine has run Latin-script courses and, since then, Japanese and Chinese. Russian is the first Cyrillic course. Already available and used as is: word tiles from the author's segmentation, a `pron` line under every card and example row, `tilesDefault`, the deck typing quiz, the accent bar (not used: `keys: ""`), and HOLD. For each request: what it is, and **what the course does if it is not built.**

1. **е accepted for ё, and stress marks ignored, in typed answers.** In `pracMatch` and in the deck matcher (`normT`), for `ru`: strip U+0301 from both sides, and treat an answer's ё as matching a typed е or ё (one-way, §10.3), as a full match.
   *If not built:* request 11 makes `gen.js` add the е-variants. If neither is built, writers list the е-spelling in every `ty` and `fi` answer that contains ё (§7), and the deck typing quiz rejects е for ё; every card with ё gets the note "type ё: long-press е".
2. **Validator changes for Russian.**
   (a) A Russian-aware `fold` for the `!strict` check that keeps й / и and ё / е distinct.
   (b) A pron check: every card and example pron equals `respell(target)` (today `repron.js` rewrites, but nothing fails the build).
   (c) Optional: the letters-so-far check of §10.2 for the three letter lessons, and a warning on any `<i>` that contains Cyrillic.
   *If not built:* writers mark `!strict` on every `fi` item whose distractor differs from an answer only by й / и or ё / е (мои / мой, все / всё). The lead runs `node tools/target/repron.js ru` before validating, and the reviewer runs the letters check by hand.
3. **Pron visibility.** Shown in stage 1; blurred (tap to reveal) from `greetings` if request 4 is built, otherwise from `prepositional`; a setting to show it always; never in practice items (§6.5).
   *If not built:* the respelling is always shown. That is acceptable for stress but slows the move to reading Cyrillic. Lesson tips from `greetings` on tell learners to cover it.
4. **Stress-marked display.** `gen.js` stores `accent(target)` (from `respell.js`) as a display field for card fronts and example rows; the engine shows it and keeps the plain target for the voice, matching, deck typing and keys. The validator allows U+0301 only in that field.
   *If not built:* plain Cyrillic fronts; the capitals of the respelling are the only written stress cue, so request 3 blurs the respelling later.
5. **Latin transliteration in typed answers** (`ruLoose`, §10.3), graded "almost" with the Cyrillic shown; also in the deck typing quiz.
   *If not built:* tiles are the default anyway; learners who want to type add the Russian keyboard. The first typed item in `greetings` tells them how.
6. **Deck typing quiz for the three letter decks:** accept Latin transliteration (request 5), or hide the typing quiz for them, because learners have no Russian keyboard yet in stage 1.
   *If not built:* the quiz asks for Cyrillic the learner cannot type yet. The `alphabet` tip says to use flip and multiple-choice review for the letter decks.
7. **Voice check (`ru-RU`).** On the test devices: the 51 letter-deck words (including ещё, подъезд, мать / мат), homographs in context (я дома, новые дома), Доброй ночи, numbers in words, and the "no voice" message when none is installed. Confirm that a lone letter is never a card target (§9).
   *If not built:* a misread is possible on very short words. The reviewer listens to the first cards of every deck.
8. **Fonts, `lang="ru"` and no italics** (§10.6).
   *If not built:* Russian may show in a fallback font, mixed inside words. The course still works; writers never put Russian in `<i>` (§2.5).
9. **Letter-drill machine generalised to Cyrillic** (optional): see a letter in a key word, pick its sound; hear a word, pick the letter. Data: the three letter decks, with the letter in each meaning ("(К = k)") or in a new `letter` field.
   *If not built:* nothing is lost; the letter decks were designed as ordinary decks.
10. **Writer word lists.** Allow each writer a `tools/target/ru/lexicon-<role>.txt` (one line in `mk_briefs.py`'s PRON paragraph); `respell.js` already reads every `lexicon*.txt`. The lead merges them into `lexicon.txt` after review and runs `repron.js ru`.
    *If not built:* writers report every word the generator throws on (expect about one sentence in four at first, §6.1), and the lead adds them before writers can finish their rows. That is slower but safe.
11. **`gen.js`: е-variants of answers with ё** (the fallback for request 1): for `ru`, add to `a` of every `ty` and `fi` item the answer with ё → е, except in items marked `!strict` and where the result equals a distractor or a fallback word.
    *If not built and request 1 not built:* writers list the variants by hand (§7).

**Do not:**
- set `pronAnswers` for `ru`. `gen.js` strips spaces and defaults to a CJK script regex there, and the respelling is not a typing scheme (request 5 is the typing scheme);
- run `repron.js ru` with a `respell.js` changed by anyone but the lead: every stored pron would change.

## 11. Gaps and unverified claims

**No native speaker has checked this profile or the generator.** Check these first, in this order:
1. **The stress list in `respell.js`** (about 2,170 forms and 100 phrases). A wrong stress gives a silent wrong respelling on every row that uses the word. A read-through already found about 25 errors in the author's first draft (§6.1). Then the exception entries (что, сегодня, конечно, пожалуйста, здравствуйте, легко, the hard-е loanwords кафе, интернет, компьютер, отель, тест, кофе) and the clitic list.
2. **The generator's rules**, where the norm allows variation: post-tonic я written `yah` (неделя `nih-DYEH-lyah`, время `VRYEH-myah`); unstressed и written `ee` throughout (книги `KNEE-gee`); final unstressed -е as `ih` (Здравствуйте `ZDRAHS-tvooy-tih`, at school `f SHKOH-lih`); -ий as `eey` (русский `ROOS-keey`); unstressed ей as `ihy` (сейчас `sihy-CHAHS`); the -тся / -ться `tsah`; and the syllable-break rules.
3. **Register** (§2.2–2.4): вы as the default; Давай на ты as the usual switch; Девушка! / Молодой человек! as normal and not rude or flirtatious; Дайте, пожалуйста as a polite enough request in shops; Не за что as the reply to Спасибо.
4. **The `greet` strings:** Доброй ночи in the late-night slot (is it a greeting, a farewell, or both?), and Добрый день for the whole afternoon.
5. **The Traps deck and §4:** the false friends (артист, кабинет, шеф, аккуратный, симпатичный, фабрика), the decision to leave out камера, Я также люблю vs Я тоже люблю, and the replies (А у тебя?).
6. **The safe-distractor table** (§7): especially кофе (masculine, but neuter accepted in speech), and в / на with places.
7. **The sample cards** (§9): Можно картой?, Давай на ты?, Мне плохо as "I feel sick", Пакет нужен?, and the letter-card key words.
8. **The dash rule** (§10.5): whether A1 sentences without the dash (Москва столица России) read naturally.
9. **Prices** (§9.1): the round numbers are illustrative, not current.

**Evidence that could not be opened, or was read only in part**
- **Case and agreement errors of English speakers:** Thompson (1980) and Rubinstein (1995) are known only from Sabia (2003), who cites their accuracy order and the dative result. Kempe & MacWhinney (1998), Nissen et al. (2016), Simonchyk & Darcy (2017) and Lenchuk (2016) were read as abstracts or record pages only. The RLC paper gives tag names and examples but no error counts by type. Denhovska & Serratrice (2017) was read on the publisher's page (the first part of the article). A Cambridge article on gender processing in non-native Russian and a PMC article on stress perception could not be fetched (not on the allowlist, and a browser check). The Iowa State article on palatalization was blocked. The ranking in §4 is therefore partly [inference].
- **Pronunciation rules:** Wikipedia's article on Russian vowel reduction (*Ikanye*) could not be fetched; the rules come from Mezhdu nami, UT Austin, elon.io and the author's knowledge. The treatment of post-tonic я, unstressed и and final -е is a simplification (item 2 above).
- **Hacking & Hayes-Harb:** an abstract with no year; the teacher survey's results are not in it.
- **TORFL:** the Elementary standard named by the roadmap was not opened. The University of Bergamo page names it without a link, and Wikipedia gives no vocabulary size. The lesson list was checked against Mezhdu nami instead.
- **Learners:** the SRAS figures are for colleges in fall 2025. The MLA figure SRAS cites (17,598) has no year on the page, and the per-program average cannot be turned into a total. No survey of individual US learners' reasons, and no app-learner data, was found. Duolingo's report gives no US rank for Russian.
- **Keyboards and voices:** phone keyboard behaviour (ё on long-press) is from a practitioner page; the claims that device voices read lone letters by their names, and that Cyrillic italics are unreadable to beginners, are the author's knowledge, not tested on devices.

**The roadmap and the brief**
- The brief names the `de` roadmap entry; the lead's instruction says to use the `ru` entry, which this profile does.
- `letters` has an empty `roadmap` field, so the roadmap preview will not show it.
- Three roadmap items moved (`intonation`, `adjectives`, `past`) and nine were renamed (§8); all 27 are linked.
- PRACTICE-SPEC says "No romanization in practice items". §6.6 allows a respelling as a sound label in the English prompts of the three letter lessons only; the lead should confirm.
- `profile.json` adds `tilesDefault: true`, a field outside the brief's shape that en-ja and en-zh also use.
- The respelling, unlike en-ja's romaji, depends on a word list that writers will keep extending; request 10 (writer word lists) changes `mk_briefs.py`'s PRON paragraph, which today tells writers only to report.

**Engine and pipeline:** §10.7, requests 1–11. The most important are е accepted for ё with stress marks ignored (1), the Russian-aware validator fold and pron check (2), and pron visibility (3).

**Not verified at all**
- Whether English-letter respelling with capitals helps US learners place Russian stress better than stress-marked Cyrillic alone; the only evidence opened (Hacking & Hayes-Harb) says marks alone did not help.
- Whether learners who see the respelling longer make more English-vowel errors (the en-ja profile found this for romaji; no Russian study was found).
- How often the generator will throw on the writers' real text; the estimate of one sentence in four comes from 30 sentences written by the author.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Mezhdu nami: scope and sequence (University of Kansas open textbook)](https://mezhdunami.org/scope.shtml)
- [Mezhdu nami, Unit 1.3: the alphabet, stress and vowel reduction](https://mezhdunami.ku.edu/unit01/1_3/language.shtml)
- [Kempe, V. & MacWhinney, B. (1998). The acquisition of case marking by adult learners of Russian and German. *SSLA* (abstract, Abertay record)](https://rke.abertay.ac.uk/en/publications/the-acquisition-of-case-marking-by-adult-learners-of-russian-and-/)
- [Nissen, S. L., Hacking, J. F., Smith, B. L. & Allen, H. (2016). Russian palatalized and unpalatalized coda consonants. *Journal of Phonetics* 54 (abstract, BYU record)](https://scholarsarchive.byu.edu/facpub/7323)
- [Simonchyk, A. & Darcy, I. (2017). Lexical encoding and perception of palatalized consonants in L2 Russian (abstract, IU ScholarWorks)](https://scholarworks.iu.edu/dspace/items/0468f26b-9034-4df0-be5d-19be91202ba2)
- [Denhovska, N. & Serratrice, L. (2017). Incidental learning of gender agreement in L2. *Journal of Psycholinguistic Research* 46(5)](https://link.springer.com/article/10.1007/s10936-017-9487-x)
- [Lenchuk, I. V. (2016). Aspect and case in interlanguage grammars: the case of English learners of Russian. York University PhD (abstract)](https://yorkspace.library.yorku.ca/items/a13332c2-6210-4091-a64d-a3504dd33f91)
- [Sabia, I. (2003). Case-marking errors in L2 Russian and production rules. University of Georgia MA thesis (cites Thompson 1980 and Rubinstein 1995)](https://openscholar.uga.edu/record/16208/files/sabia_inna_d_200308_ma.pdf)
- [Russian Learner Corpus paper (HSE / Heritage Language Institute; Lancaster 2015)](https://fpp.hse.ru/data/2015/09/24/1074224076/Lancaster_21.07-24.07.docx)
- [Hacking, J. & Hayes-Harb, R. Stress marks and L2 Russian word learning (AATSEEL abstract)](https://aatseel.org/100111/pdf/abstracts/850/HackingHayesAbstract.pdf)
- [Eskova, N. A. (2012). On the letter ё (Russian Academy of Sciences spelling portal, PDF)](https://orfo.ruslang.ru/docs/articles/eskova-o-bukve-2012.pdf)
- [SRAS: Survey of enrollments in Russian language classes, 2025 (colleges)](https://sras.org/about-us/publications-resources/survey/2025-college-survey-of-enrollments-in-russian-language-classes/)
- [ACTR: Why study Russian](https://actr.org/Why-Study-Russian)
- [Duolingo: 2024 Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)
- [Babbel: How to address people in Russian (commercial blog)](https://www.babbel.com/en/magazine/how-to-address-people-russian)
- [UT Austin, Russian online: pronunciation rules and voicing](https://embed.la.utexas.edu/russian-online/1-3-phonetics-voicing-b)
- [elon.io: Reading aloud (pronunciation rules and exceptions)](https://elon.io/grammar/russian/pronunciation/reading-aloud-practice)
- [elon.io: Grammar calques English speakers transfer](https://elon.io/grammar/russian/mistakes/false-cognate-grammar)
- [elon.io: Typing Russian: keyboard layouts](https://elon.io/grammar/russian/writing-system/keyboard-and-typing)
- [italki: The 4 most common mistakes made by English speakers learning Russian (practitioner article)](https://italki.com/article/240/the-4-most-common-mistakes-made-by-english-speakers-learning-russian)
- [RBTH: Russian false friends](https://www.rbth.com/education/334444-russian-language-false-friends/amp)
- [Penn State, Computing with Russian: keyboards](https://sites.psu.edu/symbolcodes/languages/europe/cyrillic/russian)
- [Wikipedia: Romanization of Russian](https://en.wikipedia.org/wiki/Romanization_of_Russian)
- [University of Bergamo: Russian certification levels (names the TORFL standard; no document)](https://en.unibg.it/node/7622)

Opened but not used: Banzina, Dilley & Hewitt (2016), *Journal of Psycholinguistic Research* (Russian learners of **English**, the reverse direction); Wikipedia, *Test of Russian as a Foreign Language* (no vocabulary size or hours for A1). Could not be fetched: Wikipedia *Ikanye* and a Cambridge Core article (not on the allowlist), a PMC article (browser check), an Iowa State PSLLT article (bot protection).

Local project files read: `docs/briefs/target-profile-ru.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-ja.md` (full) and the §6 of `docs/profiles/en-zh.md` and `docs/profiles/en-es.md` (shape models), `tools/target/ja/profile.json`, `tools/target/zh/profile.json` and `zh/respell.js`, the head of `tools/target/es/respell.js`, `tools/target/lib.js`, `validate.js`, `gen.js`, `repron.js`, `link_roadmap.py`, `mk_briefs.py`, `packs/roadmaps.js` (entries `ru` and `de`), the head of `docs/profiles/ru.md` and `ru.profile.json` (reverse course), and the matchers in `src/app.html` (`pracNorm`, `foldAcc`, `accSame`, `pracMatch`, `accLoose`, `kbT`, `accBar`).
