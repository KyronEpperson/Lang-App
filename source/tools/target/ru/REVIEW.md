# en-ru cold review (EN-RU-R, 2026-11-19)

## Batch 0: stress list and respelling tool

Method: a script (scratch `ruR/forms.js`) listed every distinct Russian word form in every pron-bearing string (464 distinct strings: deck targets + `{{ex:}}` rows), with its stressed vowel as the generator sees it (393 forms of two or more syllables, plus phrase-settled monosyllables). The whole list was read. The whole built-in LEX (respell.js lines 18-184) and all seven lexicon files were also read.

Wrong stresses found and fixed (lexicon.txt):
- `бИлет_стОит` (built-in phrase) gave BEE-liht for билет: fixed to `билЕт_стОит` (bee-LYEHT). No pron used it yet; the tool now gives the right output. Checked: билет is end-stressed in every form (билета, билеты), a form already in the list.
- No wrong stress was found in the 393 forms used in prons. Moving-stress forms used in prons were each checked against their context: водЫ only in бутылка воды (genitive), вОду, Окна in большие окна (plural), гОрода in центр города (genitive singular), дОма in был/была дома, стОит / стОят in сколько стоит / стоят, часА in два/три часа, рублЯ after два, делА in как дела, нОчи in спокойной ночи; feminine pasts used: былА, рабОтала, сдЕлала, дЕлала, написАла (all certain).

Respelling rules (80 forms run, e.g. молоко, неделя, мать, семья, хлеб, в школе, сделать, ещё, борщ, что, конечно, скучно, нового, его, сегодня, учится / учиться, занимается, касса, Анна, коллега, одиннадцать, суббота, русский, класс, чья, подъезд, пьёт, компьютер, здравствуйте, солнце, поздно, чувствуете, счёт, мужчина, двадцать, без сахара, с братом, к врачу, жена, часы, цена, жить, лёгкий, всего, Приятного аппетита): all as the key says, except
- doubled consonants before the stress: суббота was single (lead) but субботу / в субботу kept бб (`soob-BOH-too`, used in a lessons-3 example). Added `суббОту=субОту`, `суббОты=субОты`, `в_суббОту=в_субОту`, and the same for Россия / России / Россию / Россией (rahs-SEE-yah → rah-SEE-yah). Doubled consonants after the stress (Анна, касса, медленнее, особенно) stay long, as the key says (`AHN-nah`).
- чья / чьё / чьи → `chyah / chyoh / chyee`. Decision: keep. The key's "+ ' for ь" cannot apply after ч: the pronPattern has no `ch'` unit (only sh'), and ч is always soft, so the y alone shows the separating ь. Changing it would need a profile.json change, which is outside this review.
Tool code: no change needed.

## Batch 1: decks-a.js, extra-a.js, decks-b.js, extra-b.js (read in full)
- decks-a.js (2 edits): "Можно медленнее?" → "Можно помедленнее?" (the natural request; card + its dialogue line in extra-a; помЕдленнее added to lexicon.txt, pron regenerated) [wrong language: unnatural]; Простите note "For a real apology" → like Извините, apology or attention [wrong teaching].
- extra-a.js (1 edit): the dialogue line for the card above.
- decks-b.js (5 edits + 1 pron): потому что note says "shtah" but the pron said shtoh: added `потому_что=потомУ_~што` (что is unstressed in this conjunction), 2 prons regenerated (decks-b, lessons-3) [pron]; аэропорт note "every letter is said" was false (о is reduced) [wrong teaching]; аптека note "Not a bar" meaningless [wording]; шеф note "Not a cook" too absolute (шеф-повар is a head chef, шеф alone is used for chefs too) [wrong teaching]; Девушка! "of any age" overstated [wrong teaching]; гостиница note "отель, a newer word" [wording].
- extra-b.js: no change needed.
- Writers' doubts settled here: Сдачи не надо (natural, kept); Молодой человек! (normal, kept); Мне всё равно (gloss + note fine, kept); Я скучаю по тебе (correct, kept); артист, кабинет (correct as glossed); Она умная (natural; умна is the bookish short form, not taught here).

## Batch 2: lessons-1.js (alphabet … adjectives; read in full: bodies, checks, practice)
5 edits:
- sounds body: "four vowels with a y in them" → three (Я Ё Ю are new; Е was lesson 1) [wrong teaching].
- stress body: loanword stress "rarely sits where English puts it" → "often does not" (музей, фото, банк keep it) [wrong teaching: overgeneralised].
- greetings practice or #3: prompt "(formal, after Как дела?)" asked for the formal reply to the informal question → "(formal, after Как у вас дела?)", why to match [practice].
- gender body: "loanwords end in -о or -е … кафе, метро, такси" (такси ends in -и) → "end in a vowel" [wrong teaching].
- adjectives body: "colour" → "color" (US spelling) [English].
Checked and kept: all 12 order items have one natural order (вот кот: *кот вот is not neutral; кто там; нет это чай; а у вас; Анна врач — "Врач Анна" would be a different sentence); letters-so-far check on the alphabet / letters / sounds lessons and their decks (no letter used before it is taught); й / и distractors (мой / мои) need no !strict: validate.js's fold keeps й and ё.
Writers' doubts settled: "Я есть студент" is a valid wrong option; "Анна врач" is correct; the intonation claims (IK-3 rise-fall on the focus word for yes/no, fall for question words) are standard; "вот кот", "кто там" are the only neutral orders; Она умная / умна both accepted (fine).

## Batch 3: lessons-2.js (plural … have; read in full)
4 edits:
- negation body: "не is never stressed" contradicted the course's own prons (не был `NYEH bihl`, Не за что) → "almost never stressed", with those two set phrases named [wrong teaching].
- genitive body table: "masculine, neuter: add -а … молоко → молока" (neuter replaces -о, it does not add -а) → separate rows: masculine add -а / -я; neuter -о → -а [wrong teaching].
- numbers body: "Phone numbers are read in pairs" → "in groups, usually ending in pairs" (Russian numbers are read 3-2-2) [wrong teaching].
- accusative body: "the case you will use most after the prepositional" → "one of the cases you will use most" (unsupported ranking) [wording].
Checked and kept: every model answer's case ending (в Москве / в Казани / в России / на почте; книгу, Москву, брата, Ивана, рыбу, кашу, парк; воды, чая, сахара, молока, хлеба, банка, мамы, Бостона, рубля / рублей; меня, тебя, него, неё, нас, вас); all 18 order items (one neutral order each; "Какая книга новая?" is natural Russian, and "какая новая книга" would mean something else, so it is correctly rejected); есть dropping in "У него большая семья" is correctly explained.

## Batch 4: lessons-3.js (past … time; read in full)
6 edits:
- imperative mc "Please wait. (formal)": distractor "Подождёте, пожалуйста." is a normal colloquial polite request (future as a soft request), so not wrong → "Подожду, пожалуйста." [practice: correct distractor].
- imperative or "Call Mom! (informal)": "Маме позвони!" is an equally natural order → cue "(informal; start with the verb)" [practice: two orders].
- imperative ty "Call me! (informal)": added "Мне позвони!" [practice: accepted answers].
- instrumental or "He works as a doctor.": "Он врачом работает" is a common colloquial order → cue "(end with the job)"; the matching ty item now also accepts "Он врачом работает" [practice].
- connectors body: "Questions words" → "Question words" [English].
Checked and kept: past feminine forms (была, работала, читала, написала, сделала, делала, устала, ездила); dative endings (маме, брату, сестре, Ивану, врачу, мне / тебе / ему / ей); instrumental (молоком, сахаром, сестрой, мамой, другом, врачом, учителем, спортом, со мной); aspect choices (habit → покупаю / читаю; result → прочитал, написала, сделаю, куплю; no буду + perfective); motion (еду / иду, в Москву / в школу / на работу, на автобусе, ездил / ходил as round trips); time (в два часа, в пять часов, в среду / в пятницу / в субботу, в понедельник, во вторник, в мае / в марте / в июне, первое мая).
Writers' doubts settled: "Я ездила в Москву" is right for a round trip and "ехала" is a correct distractor (it means "was on the way"); а vs но explanation is right; "Он врачом работает" handled above.

## Batch 5: second pass after an outside check
- Stress, dictionary pass. Wiktionary and gramota.ru were not fetchable from here (allowlist / site errors); openrussian.org, an en.wiktionary mirror and mel.fm were reachable through search results. Checked against them: быстрый (comparative), свободный (short forms), голодный (short forms), понять (past), занятый (short forms). Two built-in entries were WRONG and are now overridden in lexicon.txt: `бЫстрее` → `быстрЕе` (openrussian: быстре́е), `свободнА` → `свобОдна` (openrussian: свобо́дна, stem stress in all short forms). Confirmed right: голодна́ / го́лоден, поняла́ / по́нял / по́няли, занята́ / за́нят / за́няты. Neither wrong form is in a pron today. Everything else in the stress list (including all 393 forms used in prons) was checked from my own knowledge only.
- Respelling: the conjunction но came out as `nah` (the clitic rule reduced it, and it then reads like на): added `нО` → `noh` (one pron in lessons-3). The conjunction что after думаю was `shtoh` while потому что is now `shtah`: added `думаю_что=дУмаю_~што` (one pron in lessons-3). Not added for знаю что, because "знаю, что это" can be the pronoun что (stressed).
- Order items: one rule now applied to all 84 order items: when the object, place or complement can move before the verb in everyday speech (Я в Москве живу, Я маме звоню, Она книгу прочитала), the prompt gets a cue that fixes the order: "(end with …)", "(start with the verb)" or "(start with не)". 23 more prompts got a cue (lessons-2: 5; lessons-3: 18), 25 with the two from batch 4. Items with one natural order (это / вот / где sentences, noun phrases, у меня есть) have none.
- Distractors that were grammatical: have mc "Он имеет машину" (grammatical, if bookish) → "Он имеет машина"; have check "Я имею сестру" → "Я имею сестра" (both now wrong in two ways, like the other options). "Сколько часов?" kept as a wrong option for "What time is it?" (it means "How many hours?").
- Profile §8-§9 read (lesson table, per-lesson notes, deck rules and sample cards). The аптека note "Not a bar" was copied from a profile sample card; replaced anyway (it means nothing to an English speaker). "Можно медленнее?" is not a profile sample.
- Writers' doubts not covered above: "Не, я работаю" is a valid wrong option (colloquial "Не" = "nah", but the verb has no не, so it says the opposite); greeting times (Доброе утро until about noon, Добрый вечер from about six) are fine; the late-night greeting Доброй ночи sits in profile.json `greet` (outside this review): it is mostly said as a goodnight wish when parting, and as a greeting on arrival many natives find it odd, so it is on the native list; the Traps deck (шеф fixed, Девушка! fixed, артист, кабинет, Я скучаю по тебе correct).

## Edit counts per file
| File | Wrong Russian | Wrong teaching | Practice | Pron (tool output) | Wording / English |
|---|---|---|---|---|---|
| lexicon.txt | 14 entries: 3 wrong stresses (билет in a phrase, быстрее, свободна), 6 doubled-consonant forms, 1 new word (помедленнее), 4 clitic / phrase rules (но, потому что, думаю что, …) | | | | |
| decks-a.js | 1 (Можно помедленнее?) | 1 (Простите) | | 1 | |
| extra-a.js | 1 (same line) | | | | |
| decks-b.js | | 3 (аэропорт, шеф, Девушка!) | | 1 (потому что) | 2 (аптека, гостиница) |
| extra-b.js | | | | | |
| lessons-1.js | | 3 (sounds, stress, gender) | 1 | | 1 |
| lessons-2.js | | 3 (negation, genitive, numbers) | 7 (2 distractors, 5 order cues) | | 1 |
| lessons-3.js | | | 23 (1 distractor, 2 accepted answers, 20 order cues) | 4 (субботу, потому что, но, что) | 1 |
No pron was edited by hand: every change came from `node tools/target/repron.js ru` after a lexicon.txt entry (and one new card's pron pasted from respell.js output).

## Final state
`node tools/target/repron.js ru` → 542 prons read, 0 rewritten. `node tools/target/gen.js ru` → 28 of 28 lessons · 18 decks · 316 cards. `node tools/target/validate.js ru` → PASS: all checks OK. `node --check` passes on every JS file. HOLD left in place.

## Ten things a native speaker should check first
1. The built-in stress list in respell.js (~2,170 forms): this review found 3 more wrong entries (бИлет_стОит, бЫстрее, свободнА) after the profile author's 55, and only 5 lemmas could be checked against a dictionary.
2. Доброй ночи as the late-night `greet` slot (profile.json): a greeting, or only a goodnight wish?
3. Conjunctions respelled without stress or reduction: но → `noh`, потому что / думаю, что → `shtah`.
4. Doubled consonants said once before the stress (суббота / в субботу `soo-BOH-too`, Россия `rah-SEE-yah`, коллега, аккуратный) and long after it (касса `KAHS-sah`, Анна `AHN-nah`, одиннадцать is single).
5. "Можно помедленнее?" (card, Greetings and politeness) replacing "Можно медленнее?".
6. Девушка! / Молодой человек! notes: "normal and polite, not flirtatious", for a young woman / man.
7. The 25 cued order items, e.g. "мои друзья говорят по-русски (end with по-русски)", "я звоню маме (end with Mom)": is the cued order really the only one the cue allows?
8. "Подождёте, пожалуйста" judged an acceptable request (so removed as a distractor), and "Он врачом работает" accepted as a natural variant.
9. Stressed не in не был / не было / не были (`NYEH bihl`) and Не за что, against the negation lesson's new "almost never stressed".
10. Traps deck glosses: шеф "boss, said casually" (with шеф-повар), артист "performer; actor", кабинет "office (a room); doctor's office", аккуратный "neat; careful".
