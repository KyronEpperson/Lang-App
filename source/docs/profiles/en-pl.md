# English speakers learning Polish: course profile

Course `en-pl`: Polish for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Polish. Machine-readable twin: `tools/target/pl/profile.json`. The pronunciation field is produced by `tools/target/pl/respell.js`. Writers do not hand-write a pron.

**Evidence tags.**

- **[research-backed]**: an empirical study that was opened for this profile, with the study named. None of the learner-error claims below reach this tag. The books named at the bottom of the lingology page were not opened.
- **[curriculum convention]**: what a textbook, an official description, or a course does.
- **[practitioner opinion]**: a teacher's or a site's stated view, with no study behind it.
- **[inference]**: this profile's own reasoning from tagged items.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant:** Standard Polish as used in Poland, with a `pl-PL` voice. The aid shows the northern and Warsaw habit of devoicing a final consonant before a vowel or a sonorant. Kraków voicing in that position is named and not shown.
- **Register:** Learners produce *pan* / *pani* with a third-person verb for every "you". They only recognize *ty*, the plural formal forms, and the offer to switch. See §2.
- **Cases that are drilled:** four, besides the nominative base: accusative, instrumental, genitive, locative. Dative and vocative are named once and not drilled. See §4 and §8.
- **Biggest English-speaker traps (§4):** the noun left in its base form; *ś* versus *sz* and the clusters; *pan* with a *ty* verb; gender on adjectives and on the past; the złoty number rule; false friends; then aspect, which is named and not drilled.
- **Standing practice rule:** gender agreement, and the four drilled cases once they exist. A `why` line names the point with fixed keywords (§7). Dative and vocative are not in the regex.
- **Pronunciation aid:** a generated English-letter respelling. Stress is in CAPITALS. *ś* and *sz* are different letters in the aid (`sh'` and `sh`). It is required on every card and example row. Lesson 1 teaches the key.
- **Lessons:** 27. All 26 roadmap items stay, in roadmap order. One lesson is added: `traps`, last. The Compliments deck is pointed at from `adjectives`.
- **Decks:** 18, in 5 groups.
- **Typing:** `accents` is false. The app folds *ą ę ó ć ń ś ź ż* onto the plain letter. A missing mark has to be wrong, because the mark is often the case. *ł* does not fold.

## 2. Variant and register

### 2.1 Variant

The roadmap sets this: Standard Polish (Poland), voice `pl-PL`, Latin script with *ą ć ę ł ń ó ś ź ż*.

[curriculum convention] The Council for the Polish Language booklet (Pisarek, English translation, Warsaw 2007) describes one standard: seven cases under the English names used in §3, penultimate stress with regular exceptions, and final devoicing, with the north (Mazovia, including Warsaw) devoicing before a vowel or a sonorant and Małopolska, including Kraków, voicing there. The aid follows the Warsaw side. A card about Kraków does not switch the rule.

[curriculum convention] The same booklet says the greatest difficulty for foreigners, and for speakers of other Slavic languages, is the set *s / ś / sz* and *c / ć / cz*, not the *szcz* cluster by itself. The aid keeps those apart (§6). Russian sounds and Russian endings are not reused. A Russian speaker's Polish mistakes, as listed by PolskiCert, are a different list from the English list.

Kashubian, the western Kraków form *Jameryka*, and other dialect spellings stay out. Wiktionary records those *Ameryka* variants; they are not taught.

### 2.2 The you-form house rule

**Learners produce** *pan* or *pani* plus the third-person singular verb, for every "you", including a shop, a stranger, a teacher, and a new acquaintance.

- *Czy pani mówi po angielsku?*
- *Pan jest z Krakowa.* The line *Pan jesteś* is the mistake the lesson shows.
- The learner's own age line is *Mam dwadzieścia lat.* The question they ask is *Ile pan ma lat?*

**Learners only recognize** these, and never type them as the answer:

- *ty* and its endings *-sz* and *-isz* (*masz, jesteś, robisz*). *Masz czas?* and *Ile masz lat?* are shown as what a friend says.
- Plural formal *państwo*, *panowie*, *panie*.
- The switch offer *Możemy mówić sobie na ty?*

The cost is that a learner never types a *ty* answer in this course. That is stricter than the Russian course, which produces both *вы* and *ты* and always cues which one. Polish *pan* / *pani* are nouns. The verb that goes with them is third person, not a second-person ending copied from Russian.

[practitioner opinion] PolskiCert's English-speaker section is about case endings, not about this mix-up. The *Pan jesteś* ban is this course's rule, so that the formal verb and the *ty* verb are not both things the learner has to produce. [inference] Producing both in the same week is where an English speaker, who has one "you", will cross them.

### 2.3 Spelling house rule for pan / pani

[practitioner opinion] Małgorzata Marcjanik (PWN Poradnia, 1 April 2008): in a protocol and in ordinary reference, *pan* is lowercase. A capital is for courtesy when you address the person or when you want to mark prestige, above all in a letter (*Szanowny Panie Kierowniku*).

**House rule:** the course writes *pan* and *pani* in lowercase, except at the start of a sentence. Learners will see the capital in letters. Letters are not drilled. The matcher ignores case, so a capital answer is still right.

One spelling, Standard Polish. No second orthography is taught.

### 2.4 Greetings and the banner

[practitioner opinion] Marcjanik (PWN Poradnia, 31 January 2006): Polish has no fixed hour for *Dobry wieczór* or *Dobranoc*. *Dzień dobry* and *Do widzenia* are the forms people increasingly use with strangers, including in a shop, because they save the speaker from deciding whether evening has started. *Dobry wieczór* is more at home in private contact, and when it is dark. *Dobranoc* is for when you have reason to think the person will soon go to sleep. Using it in a shop, hours before closing, can sound like mockery.

The four home-screen slots are therefore:

| Slot | Polish | Gloss |
|---|---|---|
| Late night (22:00–05:00) | Dobry wieczór | Good evening. There is no separate late-night hello. |
| Morning | Dzień dobry | Good morning. |
| Afternoon | Dzień dobry | Good afternoon. The same words as the morning. |
| Evening | Dobry wieczór | Good evening. |

*Dobranoc* is taught in the greetings lesson, as a private good-night, and it is not the banner. *Cześć* is the friend's hello and goodbye, for recognition, and the learner answers a stranger with *Dzień dobry*. There is no *Dobrego popołudnia*.

A compliment is answered with *Dziękuję* or *Dziękuję bardzo*. *Smacznego* is answered with *Dziękuję*. No modest deflecting reply is invented.

### 2.5 What is colloquial and what is careful

The aid marks careful stress on a closed list (§6). Wiktionary labels the penultimate stress of *Ameryka* as colloquial, and the antepenultimate as prescriptive. Wikipedia says the past endings *-śmy* and *-ście* are often stressed as ordinary penultimate syllables in colloquial speech. The `pl-PL` voice may follow the colloquial stress. The capitals will then disagree with the audio. That disagreement is the decision this profile is least sure of (§11).

## 3. Glossary

English names, each used the same way throughout. Learners do not memorize the Polish or Latin label as the main name. The Polish name can appear once, in parentheses, when the lesson introduces the case.

| English term | Use it for | Do not also call it |
|---|---|---|
| nominative | the base form, the subject | "dictionary form" as a second system |
| accusative | the direct object; *w* plus a day | objective |
| genitive | *do*, *z* of origin, negation, quantity | possessive case as a second name |
| dative | named once: the recipient. Not drilled | — |
| instrumental | a role after *być*; *z* meaning "with" | ablative |
| locative | *w*, *na*, *o*, *przy*, *po* | prepositional, which is the Russian name |
| vocative | named once: *Panie!*, *Mamo!* Not drilled | — |
| masculine, feminine, neuter | *on*, *ona*, *ono*, and the agreeing form | "he-noun" |
| masculine personal plural | a plural that includes a man (*oni*, *byli*) | a phrase the standing-rule regex cannot see; say "plural form" or "agrees with" as well |
| imperfective | the past and the future this course drills | a Latin conjugation number |
| perfective | named once in the past lesson, not drilled | a second tense |
| ending class | *-am/-asz*, *-ę/-esz*, *-ę/-isz* | "first conjugation" |

[curriculum convention] The seven English case names are the ones in the 2007 Council booklet. PolskiCert uses the same English names beside the Polish ones. The roadmap's Wrocław card was not re-opened for this profile, so this course does not adopt any other English name that card may use.

Gender of the speaker shows in the past: *byłem* / *byłam*. A prompt "I" with no gender cue lists both, masculine first. Past and future in this course are imperfective only.

Three verbs for "know", as three meanings, not three synonyms: *wiedzieć* (a fact), *umieć* (a skill), *znać* (a person or a place).

Motion: *iść* / *chodzić* on foot, *jechać* / *jeździć* by transport. One direction versus a habit is the difference inside each pair.

## 4. Error zones

Ranked for this course. The first four are what the standing rule and the early lessons keep returning to.

1. **The noun stays in the base form.** [practitioner opinion] PolskiCert's English-speaker examples, which that page attributes to English having no case ending on the noun: *Idę do praca* → *Idę do pracy*; *Jestem lekarz* → *Jestem lekarzem*; *Rozmawiamy o egzamin* → *Rozmawiamy o egzaminie*; *Widzę mój brat* → *Widzę mojego brata*. The same page's Russian list includes *Dziękuję panią* → *Dziękuję pani*, because Polish *dziękować* takes the dative. That pair is shown once. The dative noun ending is not drilled. *Lubię cię*, not *Lubię ty*. There is no article to carry "a doctor".

2. **ś versus sz, and the clusters.** [curriculum convention] The Council booklet calls the *s / ś / sz* and *c / ć / cz* distinction the greatest difficulty for foreigners. The roadmap lists clusters and *sz, cz, rz, ż* versus *ś, ć, ź* as the hardest pronunciation point. [inference] An English speaker who hears one "sh" will spell both *proszę* and *prosię* the same way. The aid makes them different (§6). No classroom study of this was opened.

3. **pan plus a ty verb, and ty produced too early.** The house rule in §2. The wrong line is *Pan jesteś*. The right line is *Pan jest*. [inference] One English "you" plus two Polish verb sets.

4. **Gender agreement, including the past.** *Mój brat jest wysoki* (masculine form). *Dobra kawa* (feminine form). *Wczoraj byłem* and *Wczoraj byłam* are both right, for different speakers. [inference] English adjectives do not change, and English past verbs do not show the speaker's gender. PolskiCert states the agreement rule as part of case teaching; it does not give a frequency count.

5. **Numbers and złoty.** [curriculum convention] The roadmap's hardest list: *2 złote* but *5 złotych*. This course teaches *1 złoty* (nominative singular), *2–4 złote* (the form looks like a nominative plural), *5+ złotych* (genitive plural). This is not the Russian 2–4 genitive-singular pattern, and the lesson says so in one line so a learner who has met Russian does not import it. *Dwóch studentów* is recognition only. [inference] The English number does not change the noun's ending.

6. **False friends.** [practitioner opinion] lingology.pl, 10 August 2026, is written for Polish speakers learning English. The pairs are usable in reverse. The article is one teacher's selection, not a study. The books it names (Nation, Jarvis and Pavlenko, Odlin, Laufer) were not opened. Taught pairs, Polish word first: *aktualny* is current; *ewentualnie* is possibly or if necessary; *aktualnie* is currently; *sympatyczny* is nice; *ordynarny* is vulgar or rude; *patetyczny* is pompous; *pensja* is salary; *recepta* is a prescription; *dres* is a tracksuit; *magazyn* as a building is a warehouse. *Brat* means brother. *Prezerwatywa* is left out of the deck.

7. **Calques of "to be" and of age.** *To jest Marek* and *Jestem z Polski* are ordinary Polish. This course does not teach a Russian-style ban on "is". Age is *Mam dwadzieścia lat*, not a dative of the person. Liking is *Lubię kawę*, accusative, not a dative experiencer.

8. **Aspect.** [curriculum convention] The Council booklet treats aspect as part of the verb system and gives perfective examples such as *zaśpiewać*. Hurra!!! Po polsku 1 teaches the past of the imperfective (*niedokonany*) before a later perfective past, and the future of the imperfective (*będę* plus infinitive). This course names the perfective once in the past lesson and does not drill it, and it does not add an aspect lesson. [inference] English has nothing that maps cleanly onto the pair, which is why it is named, and why a beginner course that also has four cases does not drill it yet.

9. **The two kinds of "go".** *Idę do sklepu* is on foot, once. *Jadę do Krakowa* is by transport. *Chodzę do pracy* is the habit on foot. *Jeżdżę* is the habit by transport. [inference] English "go" covers all four.

10. **Day names after w.** *W poniedziałek* looks like the base form. *W środę* is the accusative, with *-ę*. The locative *w środzie* is a different phrase and is not the name of the day. [inference] English "on Wednesday" does not show which Polish case *w* takes.

## 5. Learners

US adults, including people in Polish families who want the language back.

[curriculum convention] WBEZ (Amy Qin, updated story dated from the 2022 page; the census figures are the 2021 American Community Survey): after English and Spanish, the five most common languages spoken at home in Chicago include Polish. Chicago tops the largest US cities for the share of residents who speak Polish at home. More than 7 percent of the country's Polish-speaking population lives in Chicago, mainly on the Northwest Side, while less than 1 percent of the US population lives in Chicago. The same article's heritage example is Peter Alex Dorman, in Jefferson Park: parents immigrated in the 1980s, Polish at home, Polish school on weekends, the language faded, and he started classes again as an adult.

The national head count is not taken from a Bureau table downloaded for this profile. The Census API group schema for the 2021 ACS 5-year table B16001 was opened: variable `B16001_030E` is labelled Polish, and the schema page has no count. A January 2023 compilation at millennialcities.com, which cites ACS table B16001, lists Polish at 529,324 speakers age 5 and over, rank 19, 0.17 percent. That page does not name the survey year in the table note. Treat 529,324 as a secondary figure.

[curriculum convention] The Council booklet (Warsaw 2007) says about 38 million speakers in Poland and 2 million elsewhere in Europe. That is a 2007 figure.

What they need first: letters that English will collapse (*ł*, *ó*, *ś*), a greeting they can say to a stranger, *pan* / *pani*, *być*, a name and a city, then gender before the cases that depend on it. The roadmap order already does this. It is kept.

Cities in examples: Warszawa, Kraków, Wrocław, Gdańsk, Poznań. Names: Anna, Kasia, Piotr, Tomek, Ewa, Marek. Food: pierogi, żurek, barszcz, kawa, herbata, woda, chleb, ser, piwo, mleko. Money is *złoty* / *złote* / *złotych*. No dollar sign. Prices in the course are round classroom numbers (*piętnaście złotych*, *dwadzieścia złotych*), not a quoted café price. A current price was not checked.

Do not use English spellings of place names in a Polish sentence. The aid reads *Chicago* as Polish spelling (`khee-TSAH-goh` was generated and then rejected as a card). Origin is *Jestem z Polski* or *Jestem z Krakowa*.

## 6. Pronunciation aid

### 6.1 Decision

A generated English-letter respelling, `pron` required. IPA is not used. "None" is not used: the spelling is misleading exactly where English speakers need the help (*ł* is not an *l*, *ó* is not an *o*, *ś* is not *sz*, final *ę* is not nasal, clusters have no extra vowel).

The generator is `tools/target/pl/respell.js`. From `source/`:

```
node tools/target/pl/respell.js "proszę"
node tools/target/pl/respell.js --pattern
```

It prints `proszę -> PROH-sheh`. It exports `respell` and `pronPattern`. `respell` throws if its own output fails `pronPattern()`, so a broken reading does not come out quietly. It also throws on an empty string, a digit, an apostrophe, *q*, *v*, *x*, or a word with no vowel other than the prepositions *w* and *z*.

Reliability: good enough to ship for Standard Polish spelling inside this course's vocabulary. It is a rule system, not a recording. §6.5 lists the words and the habits it gets wrong or refuses to guess. The *ś* / *sz* contrast is audible in the aid: *proszę* is `PROH-sheh`, *prosię* is `PROH-shyeh`.

Run the tool on the **whole** target string. Voicing crosses word boundaries, so the same spelling can have two readings in two sentences. The validator only objects when the identical full string has two prons.

### 6.2 Key

Stress is the syllable in CAPITALS. A one-syllable word stays lowercase unless a phrase rule stresses it. A hyphen in the pron is a syllable break. The capital **N** in `ohN` and `ehN` is the nasal tail, not stress and not a separate syllable. An unstressed syllable may contain it: *lekarką* is `leh-KAHR-kohN`.

| Spelling | Aid | Read it as |
|---|---|---|
| a | ah | father |
| e | eh | bed |
| i | ee | meet, when *i* is its own vowel |
| o | oh | the vowel of "more", held flat, not the diphthong of "go" |
| ó, u | oo | food. *ó* is not *oh* |
| y | ih | a short "i", not "ee" |
| ł | w | English *w*. Not *l* |
| l | l | a clear *l* |
| w | v | English *v*. At the end of a word, or before a voiceless consonant, *f* |
| j | y | yes |
| c | ts | cats |
| ch, h | kh | Scottish "loch". The same sound. Eastern voiced *h* is not taught |
| r | r | The lesson says it is a tap. The aid cannot show the tap |
| sz | sh | show. Hard |
| cz | ch | chop. Hard |
| ż, rz | zh | measure. Hard. *rz* and *ż* are the same in this course |
| dż | j | jam. Hard |
| ś, or si before a vowel | shy before a vowel; sh' before a consonant or at the end | softer than *sz*. The apostrophe adds no vowel |
| ć, or ci before a vowel | chy before a vowel; ch' otherwise | softer than *cz* |
| ź, or zi before a vowel | zhy before a vowel; zh' otherwise | softer than *ż* |
| dź, or dzi before a vowel | jy before a vowel; j' otherwise | softer than *dż* |
| ń, or ni before a vowel | ny | canyon. *ń* is *ny* even at the end of a syllable |
| i before a vowel, after s, c, z, n, dz | the *i* is not a vowel | *Kasia* `KAH-shyah`, *prosię* `PROH-shyeh` |
| i before a consonant, or final | ee, and the consonant before it is the soft one | *pani* `PAH-nyee`, *mi* `myee`, *my* `mih` |
| final ę | eh | oral. A fully nasal final *ę* is the hypercorrect reading |
| final ą | ohN | nasal *o*, not nasal *a* |
| ą, ę before s z ś ź sz ż rz ch h f w | ohN, ehN | the letter *w* (the sound *v*) keeps the nasal. *ł* does not |
| ą, ę before p b | ohm, ehm | plus the stop |
| ą, ę before t d c dz cz dż | ohn, ehn | plus the consonant |
| ą, ę before k g | ohng, ehng | *ręka* `REHNG-kah` |
| ą, ę before ć dź | ohny, ehny | *pięć* `pyehnych'` |
| ą, ę before l or ł | oh, eh | oral. *wziął* `vzhyohw` |

[curriculum convention] Nasal behaviour follows the Council booklet: *ą* is a nasal *o*; final *ę* is oral *e*; before a fricative, including the letter *w*, the nasal stays; before *l* or *ł* it drops; before a stop or an affricate there is an oral vowel plus a nasal consonant. Wikipedia's phonology page describes the same split, and adds that the "nasal vowel" is phonetically an oral vowel plus a nasal tail. The capital N stands for that tail. It is not a French nasal and not an extra syllable.

The apostrophe is the same softness with no extra vowel. Lesson 1 trains it. Until that lesson, `sh'` and `sh` are the contrast the learner is learning to hear.

### 6.3 Stress

Default: the second-to-last syllable. [curriculum convention] Council booklet; Wikipedia; Bielec, *Polish: An Essential Grammar*, 2nd ed., Routledge 2012, the preview that was opened.

The aid breaks the default only for a closed list:

- Bielec's Greek and Latin examples, singular cases only: *fizyka, matematyka, gramatyka, turystyka, ceramika, botanika*. Instrumental plural *-ami* is not on the list, so *muzykami* is the regular penultimate. Wikipedia's point that an extra syllable makes *uniwersytetu* regular is the same idea.
- Wikipedia's pair: *muzyka* "music" is antepenultimate. The genitive of *muzyk* "musician" is the same letters with penultimate stress. The tool always uses the music-noun stress. Do not use the musician's genitive, or the aid is wrong.
- Wikipedia: *uniwersytet* in the nominative only. *uniwersytetu* is regular.
- Wiktionary, the *Ameryka* entry: prescriptive stress on the second syllable, colloquial on the third. The aid uses the prescriptive one, and the same singular-case pattern. *Amerykami* is not on the list.
- *polityka* and *republika*, by the same Latin pattern. A dictionary entry for those two words was not opened (§6.5).
- Bielec's four numbers: *czterysta, siedemset, osiemset, dziewięćset*. The stress stays on the first number.
- Verb clitics, on a past participle only (the host ends in vowel + *ł* / *li* / *ły*, or is *szedł, szła, szło, szli, szły*). Ignore *-byśmy* / *-byście* (two syllables) or *-bym* / *-byś* / *-by* / *-śmy* / *-ście* (one). *robiliśmy* is `roh-BYEE-lee-sh'mih`. *zrobiłbym* is stressed on the first syllable. *jesteśmy* is present tense, not a participle, and stays `yeh-STEH-sh'mih`. Bielec's examples (*mieliśmy*, *czytaliście*) match ignoring the person ending. His phrase "the ending has two syllables" does not match the one syllable of *-śmy*; the tool follows the examples and Wikipedia, not that phrase.
- *nie* plus a listed one-syllable verb: *nie mam* is `NYEH mahm`. *nie mamy* is ordinary penultimate. An unlisted one-syllable verb is left unstressed rather than given a wrong vowel.
- A one-syllable preposition plus a one-syllable pronoun: *dla mnie* is `DLAH mnyeh`. A mobile *e* is stressed: *beze mnie* is `beh-ZEH mnyeh`. Bielec's examples.

*Afryka*, *pedagogika*, *języka*, and any other *-ika* / *-yka* word not in the list get ordinary penultimate stress. That is the casual reading Wiktionary allows for *Ameryka*, and it may be wrong for careful speech on a word that simply was not listed.

### 6.4 Voicing

[curriculum convention] Wikipedia and the Council booklet. In a cluster, the last obstruent decides, except that *w* and *rz* do not decide (the letter *ż* does). Sonorants do not decide and are not written as devoiced. Word-final obstruents devoice, including before a vowel or a sonorant. That is the Warsaw and northern habit. Kraków voicing in that position is not shown.

Prepositions *w, z, bez, przez, nad, pod, od, przed* and their mobile-*e* forms stay voiced before a vowel or a sonorant.

The last decider can sit several words later. *Pan jest z Krakowa* stays voiceless, because *k* decides for the whole cluster and *z* comes out as *s*. *Ona jest z Warszawy* is voiced, because *w* does not decide, so *z* stays voiced and voices the *t* of *jest*. *jest* alone is `yehst`. *To jest dom.* is `toh yehzd dohm`. *pięć* alone is `pyehnych'`. *Pięć złotych.* is `pyehnyj' ZWOH-tihkh`.

| Whole line | Pron | Why the line, not the word |
|---|---|---|
| Pan jest z Krakowa. | `pahn yehst s krah-KOH-vah` | *k* keeps the cluster voiceless, so *z* is *s* |
| Ona jest z Warszawy. | `OH-nah yehzd z vahr-SHAH-vih` | *w* does not decide, so *z* stays voiced and voices *jest* |
| To jest dom. | `toh yehzd dohm` | *d* voices the *t*. *jest* alone is `yehst` |
| Pięć złotych. | `pyehnyj' ZWOH-tihkh` | *ć* voices before *z*. *pięć* alone is `pyehnych'` |
| Sześć bułek. | `shehzh'j' BOO-wehk` | final *ś* and *ć* both voice before *b* |
| w Polsce | `f POHL-stseh` | *w* has no vowel of its own and is voiceless before *p* |
| od mamy | `ohd MAH-mih` | the preposition stays voiced before a sonorant |

### 6.5 Where the aid is wrong, or refuses

- *jabłko* keeps the *b* (`YAHBW-koh`). Many speakers say *p*. The aid does not.
- A devoiced sonorant is not shown. *wiatr* is `vyahtr`. Wikipedia gives a devoiced *r*.
- *r* is a tap, written *r*.
- The *y* before a vowel can be over-pronounced. *kilo* is `KYEE-loh`.
- The apostrophe in `sh'` is silent until lesson 1 has taught it.
- Careful antepenultimate stress, and the ignored *-śmy*, may disagree with colloquial speech and with the `pl-PL` voice. This is the weak point of the aid.
- *polityka* and *republika* are on the careful list by pattern. Their own dictionary entries were not opened.
- *Afryka* and *pedagogika* are not on the list and come out penultimate. Careful speech may use the third syllable from the end. *języka* is correctly penultimate; the aid must not treat every *-yka* as an exception.
- *muzyka* is always the music noun. The musician's genitive is the same spelling and a different stress.
- Kraków sandhi (voicing before a sonorant) is not shown.
- Foreign names are read as Polish spelling. Do not put them in a card.
- A hyphen in the input is a word break, so each part has its own stress. *e-mail* is a bad target. Use *list*.
- *nie* plus an unlisted one-syllable verb is not stressed on *nie*.
- Doubled consonants stay double. *Anna* is `AHN-nah`.
- Prefix boundaries are not special. 
- Syllable hyphens are a reading split. *Poznań* is `POH-znahny`. The stressed vowel is what matters, not the hyphen.
- *q*, *v*, *x*, digits and apostrophes throw. Write the Polish spelling (*wideo*, *okej*).
- Word-final *ą* stays `ohN`. Dropping it is dialectal and is not shown.
- *ch* before a voiced obstruent is `gh`. *dach domu* is `dahgh DOH-moo`. That one is intentional.

### 6.6 The pattern, and lesson 1

`pronPattern()` prints the regex. The block below is that string, and it is the `pronPattern` field of `profile.json`. It was copied from the function, not retyped.

```
^(?:(?:(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*-)*(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)*(?:OHN(?!G)|EHN(?!G)|AH|EH|EE|OH|OO|IH)(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)*(?:-(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*)*|(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*|(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)+|(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)+)(?: (?:(?:(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*-)*(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)*(?:OHN(?!G)|EHN(?!G)|AH|EH|EE|OH|OO|IH)(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)*(?:-(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*)*|(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*(?:ohN(?!g)|ehN(?!g)|ah|eh|ee|oh|oo|ih)(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)*|(?:CH'|CHY|SH'|SHY|ZH'|ZHY|BY|CH|DY|DZ|FY|GH|GY|J'|JY|KH|KY|MY|NG|NY|PY|SH|TS|TY|VY|ZH|B|D|F|G|J|K|L|M|N|P|R|S|T|V|W|Y|Z)+|(?:ch'|chy|sh'|shy|zh'|zhy|by|ch|dy|dz|fy|gh|gy|j'|jy|kh|ky|my|ng|ny|py|sh|ts|ty|vy|zh|b|d|f|g|j|k|l|m|n|p|r|s|t|v|w|y|z)+))*$
```

The pattern rejects two stressed syllables, a bare Polish word, a one-letter vowel, and a double hyphen. It accepts any well-formed aid string, including a wrong one that is still well-formed. That is the same limit as the Spanish aid. The generator's self-check is what keeps the tool's own output inside the pattern.

Lesson 1 teaches the key before any card hides behind it: *ah eh ee oh oo ih*; CAPITALS mean stress; capital N is nasal, not stress; *ó* and *u* are *oo*; *ł* is *w* and *w* is *v*; *sh* versus *shy* versus *sh'*; *ch* versus *chy* versus *ch'*; *zh* versus *zhy* versus *zh'*; final *ę* is *eh*; a cluster has no extra vowel; *w* and *z* can be a bare consonant.

### 6.7 Twenty worked examples

Each line was generated by `node tools/target/pl/respell.js` and matches `pronPattern()`.

| Polish | Pron | What it shows |
|---|---|---|
| proszę | `PROH-sheh` | *sz* is hard *sh*. *o* is *oh* |
| prosię | `PROH-shyeh` | *si* before a vowel is *shy*, and final *ę* is *eh* |
| kasza | `KAH-shah` | hard *sz* |
| Kasia | `KAH-shyah` | *si* before a vowel |
| cześć | `chehsh'ch'` | *cz* hard, *ś* and *ć* soft, apostrophe adds no vowel |
| dziękuję | `jyehng-KOO-yeh` | *ę* before *k* is *eh* plus *ng*; final *ę* is *eh* |
| zęby | `ZEHM-bih` | *ę* before *b* is *eh* plus *m* |
| ręka | `REHNG-kah` | *ę* before *k* is *ehng*, not a nasal plus a separate *g* |
| są | `sohN` | final *ą* is nasal *o* |
| idę | `EE-deh` | final *ę* is oral |
| pięć | `pyehnych'` | *pi* is *py*, *ę* before *ć* is *eh* plus *ny*, *ć* is *ch'* |
| Kraków | `KRAH-koof` | *ó* is *oo*, final *w* is *f* |
| łódka | `WOOT-kah` | *ł* is *w*, and *d* before *k* is *t* |
| dzień dobry | `jyehny DOH-brih` | *ń* is *ny*; stress on each word |
| nie mam | `NYEH mahm` | phrase stress on *nie* |
| muzyka | `MOO-zih-kah` | careful stress on the third syllable from the end |
| Warszawa | `vahr-SHAH-vah` | ordinary penultimate stress; *w* is *v* |
| w domu | `v DOH-moo` | *w* is a bare consonant, voiced before a vowel |
| jesteśmy | `yeh-STEH-sh'mih` | present tense, ordinary stress, not a past clitic |
| robiliśmy | `roh-BYEE-lee-sh'mih` | the past clitic *-śmy* is ignored for stress |

## 7. Standing practice rule

Every practice set re-tests **gender agreement**. From the accusative lesson on, it also re-tests **the case ending** of whichever of the four drilled cases the lesson is about. Seven cases are not the rule. Dative and vocative are outside it.

The sound lessons have no case yet. They still need two order items and two type items whose `why` matches, and they get there with *on* / *ona* / *ono*: "masculine form", "feminine form", "agrees with". The validator has no exemption for a sound lesson.

Keywords, flags `i`, at least 2 order items and 2 type items:

```
\b(?:nominative|accusative|genitive|instrumental|locative) (?:case|ending|singular|plural)s?\b|\bcase endings?\b|\b(?:masculine|feminine|neuter|plural) (?:form|ending|agreement)s?\b|\bagrees? with\b
```

The words have to be adjacent. "Masculine personal form" does not match. Say "plural form" or "agrees with" as well. "Dative case", "vocative ending", "verb ending", "the ending", a bare "nominative", and "soft consonant" do not match.

From the accusative lesson on, at least two of those four `why` lines should be about a case ending. Gender-only lines still count, and they are the right tool before a case exists.

| why line | Match? |
|---|---|
| The noun is in the accusative case. | yes |
| This is the accusative ending. | yes |
| Use the accusative singular. | yes |
| The genitive plural comes after five. | yes |
| Case endings change with gender. | yes |
| The adjective is the masculine form. | yes |
| The feminine ending matches the noun. | yes |
| The verb agrees with the subject. | yes |
| Neuter agreement on the adjective. | yes |
| The instrumental case marks the job. | yes |
| The locative singular follows w. | yes |
| Plural form of the adjective. | yes |
| This is a plural ending. | yes |
| The dative case is only named. | no |
| The vocative ending is Panie. | no |
| The verb ending is -sz. | no |
| Use the masculine personal form. | no |
| The ending is soft. | no |
| Soft consonant before i. | no |
| It is nominative. | no |
| The ty form is for friends. | no |
| Pan is formal. | no |

## 8. Lessons

27 lessons. The 26 roadmap ids stay, in roadmap order, without the `pl-` prefix. One lesson is added. Nothing is merged and nothing is reordered. The three sound lessons stay three: the alphabet, the pairs, and stress are different jobs, and the roadmap already split them.

Place phrases in the early lessons (*w Warszawie*, *z Polski*) are chunks. The locative lesson and the genitive lesson are where those endings are drilled. *Mam dwadzieścia lat* is a chunk in the family lesson; the genitive lesson later explains *lat*.

The roadmap note says the locative was not named in the sources the roadmap author used. [curriculum convention] The contents of Hurra!!! Po polsku 1 (Małolepsza and Szymkiewicz, new edition; the student book was opened and only the contents headings were used) do include *miejscownik* with *w*, *na*, *przy*, *po*, *o*, and month names in the locative. The locative lesson stays. The Wrocław A1 card and the GVSU syllabus named in the roadmap were not opened for this profile (§11).

Dative in Hurra is the pronoun in *podoba mi się*, beside a shopping lesson, not a full noun-case drill. That is why this course names the dative and does not drill it. Vocative is *Panie!*, *Mamo!*, *Kasiu!*, recognition only.

| # | id | Title | Roadmap | Deck |
|---|---|---|---|---|
| 1 | alphabet | The Polish letters | alphabet | Sounds and spelling |
| 2 | spelling | sz, cz, ś and the pairs | spelling | Sounds and spelling |
| 3 | stress | Stress and the hard clusters | stress | Sounds and spelling |
| 4 | greetings | Hello, please and thank you | greetings | Greetings and courtesy |
| 5 | pan-pani | pan and pani | pan-pani | Formal and informal |
| 6 | byc | być | byc | About me |
| 7 | intro | My name and where I'm from | intro | About me |
| 8 | gender | on, ona, ono | gender | People and family |
| 9 | adjectives | Adjectives that agree | adjectives | Compliments |
| 10 | questions | Questions | questions | Questions and knowing |
| 11 | numbers | Numbers and złoty | numbers | Numbers and złoty |
| 12 | am-asz | Verbs in -am and -asz | am-asz | Home and routine |
| 13 | accusative | The accusative | accusative | Food and drink |
| 14 | ordering | Ordering food and drink | ordering | Food and drink |
| 15 | e-isz | Verbs in -ę | e-isz | Home and routine |
| 16 | instrumental | Jobs and the instrumental | instrumental | Work and study |
| 17 | family | Family and age | family | People and family |
| 18 | routine | The daily routine | routine | Home and routine |
| 19 | motion | Going on foot and by transport | motion | Going places |
| 20 | know | wiedzieć, umieć, znać | know | Questions and knowing |
| 21 | time | Time and the days | time | Time and days |
| 22 | locative | Where things are | locative | Around town |
| 23 | directions | Directions | directions | Directions |
| 24 | genitive | The genitive | genitive | Shopping and quantities |
| 25 | past | The past | past | Past and plans |
| 26 | future | The future | future | Past and plans |
| 27 | traps | Traps for English speakers | | Traps for English speakers |

Content, and the English-speaker trap each one targets:

1. **alphabet.** The nine extra letters, and the idea that *ł* is not *l* and *ó* is not *o*. Trap: reading *łódka* with an *l*, and *Kraków* with an *o*. The lesson also teaches the aid key in §6.6. Gender words *on*, *ona*, *ono* appear here so the standing rule has something to hold.
2. **spelling.** *sz, cz, rz, ż, ch, dz, dż* against *si, ci, zi, ni* and *ś, ć, ź, ń*. Trap: one English "sh" for *proszę* and *prosię*. *rz* and *ż* are the same sound in this course. *ch* and *h* are the same sound.
3. **stress.** Penultimate as the rule, said out loud on a long word (*Warszawa*), plus one careful exception (*muzyka*) labelled as careful. Trap: stressing the first syllable as in English, and inserting a vowel into *Kraków*. Clusters are read with no extra vowel.
4. **greetings.** *Dzień dobry*, *Dobry wieczór*, *Cześć*, *Do widzenia*, *Dobranoc*, *Dziękuję*, *Proszę*, *Przepraszam*. Trap: *Dobranoc* as a shop goodbye, and *Dobrego popołudnia*. *Proszę* is please and you're welcome.
5. **pan-pani.** Produce *pan* / *pani* plus third person. Recognize *Cześć*, *Masz czas?*, and *Możemy mówić sobie na ty?* Trap: *Pan jesteś*. *Dziękuję pani* is the thanks line. *Dziękuję panią* is shown as the wrong case, once. The dative ending is not drilled. *Dziękuję panu* may be seen; it is not a paradigm to learn.
6. **byc.** *jestem, jesteś, jest, jesteśmy, jesteście, są*, and *To jest*. *Jesteś* is recognition. Trap: dropping *jest*, on the model of a language that omits it. Polish keeps it.
7. **intro.** *Mam na imię Anna. Jestem z Polski. To jest Marek.* *z Polski* and *z Krakowa* are chunks until the genitive lesson. Trap: an English place name inside the Polish sentence.
8. **gender.** *on, ona, ono*, and *oni* for a group that includes a man, *one* otherwise. *mój, moja*. Trap: one form of "my" for every noun. *brat* is brother.
9. **adjectives.** *dobry, dobra, dobre*, agreeing with the noun. This is the lesson that points at the Compliments deck: a compliment in this course is an agreeing adjective (*Dobra kawa*, *Ładny dzień*). Trap: an adjective that does not change. A second new lesson for compliments is not added.
10. **questions.** *kto, co, gdzie, jak, czy*, with *pan* / *pani*. *Czy* is the yes-no particle, not a verb. Trap: English statement order with only a rising tone, and a *ty* verb in the question.
11. **numbers.** 1 *złoty*, 2–4 *złote*, 5+ *złotych*. *Ile to kosztuje?* Classroom prices only. *Dwóch studentów* is recognition. Trap: the Russian 2–4 pattern, and a dollar sign. *grosz* can appear once, with the same 1 / 2–4 / 5 split.
12. **am-asz.** *mieć, mieszkać, czytać*. *mieć* is *mam, masz*. *Masz* is recognition. *Mieszkam w Krakowie* may appear as a chunk. Trap: a single present ending for every subject.
13. **accusative.** *Mam brata. Poproszę kawę. Piszę list.* Masculine animate takes *-a*. A feminine often takes *-ę*. An inanimate masculine looks like the base form, and the lesson says that this look-alike is still the accusative. Trap: *Widzę mój brat*.
14. **ordering.** *Poproszę kawę. Dla mnie herbatę. Rachunek, proszę.* *Lubię pierogi.* Before a meal, *Smacznego*, answered with *Dziękuję*. Trap: ordering with the base form *kawa*.
15. **e-isz.** *robić* and *lubić* (*-ę / -isz*), *pisać* (*-ę / -esz*). No fourth pattern is drilled. *pracuję* is recognition if it appears. Trap: giving every verb *-am*.
16. **instrumental.** *Jestem studentem. Jestem lekarką. Marek jest nauczycielem.* *z mlekiem* is "with", instrumental, and *z Polski* is origin, genitive. The lesson says both, and only the role after *być* is drilled here. Trap: *Jestem lekarz*.
17. **family.** *mama, tata, brat, siostra*, possessives, and age. *Ile masz lat?* is what a friend asks. The learner says *Mam dwadzieścia lat* and asks *Ile pan ma lat?* Trap: a dative of the person for age, and producing the *ty* question.
18. **routine.** *rano, zawsze, często, nigdy*, with the verbs already taught. *Rano piję kawę.* Trap: a new verb ending for "I usually".
19. **motion.** *iść / chodzić*, *jechać / jeździć*, with *do* plus a genitive chunk (*do sklepu*, *do pracy*). Trap: one English "go".
20. **know.** *Nie wiem* (a fact), *Umiem* is named for a skill, *Znam Kasię* (a person). Trap: one verb for all three English "know"s.
21. **time.** *Która godzina? Jest ósma.* The roadmap title has *Która jest godzina?*; the taught question is *Która godzina?* *W poniedziałek* looks like the base form. *W środę* is accusative. *W środzie* is not the day. *Jest ósma* agrees with *godzina*, feminine. Trap: "on Wednesday" as the locative.
22. **locative.** *w domu, w Warszawie, na poczcie, w sklepie, na dworcu, w biurze.* The preposition is required. Trap: *mieszkam Warszawie*, and *o egzamin* with no ending.
23. **directions.** *prosto, w lewo, w prawo, blisko, Gdzie jest dworzec?* Trap: a case ending on *prosto*.
24. **genitive.** *Nie mam czasu. Nie ma mleka. Butelka wody. Kilo chleba. Idę do sklepu* now explained. Trap: the accusative after *nie*, and the base form after *do*.
25. **past.** Imperfective only. *byłem / byłam*, *czytałem / czytałam*. The prompt lists both when "I" has no gender. Perfective is named in one sentence and not drilled. Trap: one past form for every speaker.
26. **future.** *będę* plus the imperfective infinitive. *Jutro będę czytać. Będę w Warszawie.* Trap: a perfective future, which this course does not teach.
27. **traps.** False friends from §4 and the four PolskiCert calques, plus *Dziękuję panią*. This lesson is last so the right forms have already been taught. It is the one lesson beyond the roadmap. It points at the Traps deck.

## 9. Decks

18 decks, about 16–18 cards each when the writers build them. Five sample cards here set the level. Every pron was generated. The same target string is not used in two decks.

Writers run `node tools/target/pl/respell.js` on the full card and paste that output. They do not edit the capitals.

### Sounds and first words

**Sounds and spelling.** The nine letters, the pairs, and stress. Lessons: alphabet, spelling, stress.

| Polish | Pron | English | Note |
|---|---|---|---|
| proszę | `PROH-sheh` | Please. You're welcome. | *sz* is hard *sh* |
| prosię | `PROH-shyeh` | a piglet | *si* before a vowel is *shy* |
| cześć | `chehsh'ch'` | Hi. Bye. To a friend. | *ś* and *ć* are soft. The apostrophe adds no vowel |
| łódka | `WOOT-kah` | a boat | *ł* is *w*. *d* before *k* is *t* |
| Kraków | `KRAH-koof` | Kraków | *ó* is *oo*. Final *w* is *f* |

**Greetings and courtesy.** What you say to a stranger and to a friend. Lesson: greetings.

| Polish | Pron | English | Note |
|---|---|---|---|
| Dzień dobry. | `jyehny DOH-brih` | Good morning. Good afternoon. | The same words for both |
| Dobry wieczór. | `DOH-brih VYEH-choor` | Good evening. | When it is dark. With a stranger, *Dzień dobry* is also fine |
| Dobranoc. | `doh-BRAH-nohts` | Good night. | Only when someone is about to sleep. Not a shop goodbye |
| Dziękuję. | `jyehng-KOO-yeh` | Thank you. | Also the safe reply to a compliment |
| Do widzenia. | `doh vyee-DZEH-nyah` | Goodbye. | To a stranger. A friend hears *Cześć* |

**Formal and informal.** What the learner says, and what they only recognize. Lesson: pan-pani.

| Polish | Pron | English | Note |
|---|---|---|---|
| Czy pani mówi po angielsku? | `chih PAH-nyee MOO-vyee poh ahny-GYEHL-skoo` | Do you speak English? | Produce this. *pani* plus third person |
| Pan jest z Krakowa. | `pahn yehst s krah-KOH-vah` | You are from Kraków. | *Pan jest*, never *Pan jesteś*. *z* is voiceless because of *k* |
| Dziękuję pani. | `jyehng-KOO-yeh PAH-nyee` | Thank you. | The safe thanks. *Dziękuję panią* is the wrong case |
| Cześć. | `chehsh'ch'` | Hi. | Recognize. Answer a stranger with *Dzień dobry* |
| Masz czas? | `mahsh chahs` | Do you have time? | A friend says this. The learner asks *Czy pan ma czas?* |

**About me.** Name, origin, *to jest*. Lessons: byc, intro.

| Polish | Pron | English | Note |
|---|---|---|---|
| Mam na imię Anna. | `mahm nah EE-myeh AHN-nah` | My name is Anna. | |
| Jestem z Polski. | `YEH-stehm s POHL-skyee` | I'm from Poland. | *z* plus the genitive chunk *Polski* |
| To jest Marek. | `toh yehst MAH-rehk` | This is Marek. | *jest* stays. Do not drop it |
| On jest z Krakowa. | `ohn yehst s krah-KOH-vah` | He is from Kraków. | |
| Ona jest z Warszawy. | `OH-nah yehzd z vahr-SHAH-vih` | She is from Warsaw. | *jest* is voiced here because *w* does not devoice the cluster |

### People and home

**People and family.** Gender, family, age chunks. Lessons: gender, family.

| Polish | Pron | English | Note |
|---|---|---|---|
| To jest mój brat. | `toh yehst mooy braht` | This is my brother. | *brat* is brother. *mój* is the masculine form |
| Moja siostra ma na imię Ewa. | `MOH-yah SHYOH-strah mah nah EE-myeh EH-vah` | My sister's name is Ewa. | *moja* is the feminine form |
| Oni są z Warszawy. | `OH-nyee sohN z vahr-SHAH-vih` | They are from Warsaw. | *oni* includes a man |
| Mój brat jest wysoki. | `mooy braht yehst fih-SOH-kyee` | My brother is tall. | Masculine form. The *w* of *wysoki* is *f* after *jest* |
| Mam brata. | `mahm BRAH-tah` | I have a brother. | A masculine person as an object takes *-a* |

**Numbers and złoty.** Lessons: numbers.

| Polish | Pron | English | Note |
|---|---|---|---|
| Ile to kosztuje? | `EE-leh toh koh-SHTOO-yeh` | How much is it? | |
| Jeden złoty. | `YEH-dehn ZWOH-tih` | One złoty. | Nominative singular |
| Dwa złote. | `dvah ZWOH-teh` | Two złote. | 2–4 take *złote*. This is not a genitive singular |
| Pięć złotych. | `pyehnyj' ZWOH-tihkh` | Five złoty. | 5 and above take the genitive plural. *ć* is voiced before *z* |
| Dwadzieścia złotych. | `dvah-JYEH-sh'chyah ZWOH-tihkh` | Twenty złoty. | A round classroom price |

**Food and drink.** Accusative in a café. Lessons: accusative, ordering.

| Polish | Pron | English | Note |
|---|---|---|---|
| Poproszę kawę. | `poh-PROH-sheh KAH-veh` | Coffee, please. | Accusative *-ę*. Final *ę* is *eh* |
| Dla mnie herbatę. | `DLAH mnyeh khehr-BAH-teh` | Tea for me. | Stress on *dla* |
| Lubię pierogi. | `LOO-byeh pyeh-ROH-gyee` | I like pierogi. | Accusative, not a dative of the liker |
| Kawa z mlekiem. | `KAH-vah z MLEH-kyehm` | Coffee with milk. | *z* here is "with", instrumental. *z* stays voiced before *m* |
| Rachunek, proszę. | `rah-KHOO-nehk PROH-sheh` | The bill, please. | Before a meal the wish is *Smacznego*. The answer is *Dziękuję* |

**Home and routine.** The two present-tense classes and the day. Lessons: am-asz, e-isz, routine.

| Polish | Pron | English | Note |
|---|---|---|---|
| Mieszkam w Krakowie. | `MYEH-shkahm f krah-KOH-vyeh` | I live in Kraków. | *w* is *f* before *k*. The place form is a chunk until the locative lesson |
| Czytam książkę. | `CHIH-tahm KSHYOHN-shkeh` | I'm reading a book. | *ą* before *ż* is *ohN*. *ż* is *sh* before *k* |
| Rano piję kawę. | `RAH-noh PYEE-yeh KAH-veh` | I drink coffee in the morning. | |
| Co pani robi? | `tsoh PAH-nyee ROH-byee` | What do you do? | *pani* plus third person |
| Piszę list. | `PYEE-sheh leest` | I'm writing a letter. | An inanimate object looks like the base form. It is still the accusative |

### Out and about

**Work and study.** The instrumental for a role. Lesson: instrumental.

| Polish | Pron | English | Note |
|---|---|---|---|
| Jestem studentem. | `YEH-stehm stoo-DEHN-tehm` | I'm a student. | A man says this. Not *Jestem student* |
| Jestem lekarką. | `YEH-stehm leh-KAHR-kohN` | I'm a doctor. | A woman says this. A man says *Jestem lekarzem* |
| Marek jest nauczycielem. | `MAH-rehk yehst nah-oo-chih-CHYEH-lehm` | Marek is a teacher. | |
| Ona jest studentką. | `OH-nah yehst stoo-DEHNT-kohN` | She is a student. | |
| To jest moja praca. | `toh yehst MOH-yah PRAH-tsah` | This is my job. | *moja* agrees. Feminine form |

**Time and days.** Lesson: time.

| Polish | Pron | English | Note |
|---|---|---|---|
| Która godzina? | `KTOO-rah goh-JYEE-nah` | What time is it? | This is the taught question |
| Jest ósma. | `yehst OO-smah` | It's eight o'clock. | *ósma* agrees with *godzina*. Feminine form |
| W poniedziałek jestem w biurze. | `f poh-nyeh-JYAH-wehk YEH-stehm v BYOO-zheh` | On Monday I'm at the office. | The day looks like the base form. *biurze* is locative |
| W środę czytam. | `f SH'ROH-deh CHIH-tahm` | On Wednesday I read. | *środę* is accusative. Not *w środzie* |
| Dziś jest sobota. | `jyeesh' yehst soh-BOH-tah` | Today is Saturday. | |

**Around town.** Locative with *w* and *na*. Lesson: locative.

| Polish | Pron | English | Note |
|---|---|---|---|
| Jestem w domu. | `YEH-stehm v DOH-moo` | I'm at home. | *w domu* is locative. *do domu* is genitive. This noun looks the same |
| Mieszkam w Warszawie. | `MYEH-shkahm v vahr-SHAH-vyeh` | I live in Warsaw. | |
| Na poczcie. | `nah POHCH-chyeh` | At the post office. | |
| W sklepie. | `f SKLEH-pyeh` | In the shop. | *w* is *f* before *s* |
| Jestem na dworcu. | `YEH-stehm nah DVOHR-tsoo` | I'm at the station. | |

**Directions.** Lesson: directions.

| Polish | Pron | English | Note |
|---|---|---|---|
| Prosto. | `PROH-stoh` | Straight ahead. | |
| W lewo. | `v LEH-voh` | To the left. | *w* stays voiced before *l* |
| W prawo. | `f PRAH-voh` | To the right. | *w* is *f* before *p* |
| Gdzie jest dworzec? | `gjyeh yehzd DVOH-zhehts` | Where is the station? | *jest* is voiced before *d* |
| Blisko. | `BLEE-skoh` | Near. | |

**Going places.** The four motion verbs. Lesson: motion.

| Polish | Pron | English | Note |
|---|---|---|---|
| Idę do sklepu. | `EE-deh doh SKLEH-poo` | I'm going to the shop. | On foot, this time. *do* plus genitive |
| Jadę do Krakowa. | `YAH-deh doh krah-KOH-vah` | I'm going to Kraków. | By transport |
| Chodzę do pracy. | `KHOH-dzeh doh PRAH-tsih` | I go to work. | The habit, on foot |
| Często jeżdżę do Warszawy. | `CHEHN-stoh YEH-zhjeh doh vahr-SHAH-vih` | I often go to Warsaw. | The habit, by transport. *ę* before *s* is *ehN* |
| Idę do domu. | `EE-deh doh DOH-moo` | I'm going home. | |

### Plans and errands

**Questions and knowing.** Lessons: questions, know.

| Polish | Pron | English | Note |
|---|---|---|---|
| Gdzie pani mieszka? | `gjyeh PAH-nyee MYEH-shkah` | Where do you live? | |
| Kto to jest? | `ktoh toh yehst` | Who is that? | |
| Czy pan mówi po polsku? | `chih pahn MOO-vyee poh POHL-skoo` | Do you speak Polish? | |
| Nie wiem. | `NYEH vyehm` | I don't know. | A fact. Stress on *nie* |
| Znam Kasię. | `znahm KAH-shyeh` | I know Kasia. | A person. *Kasię* is accusative |

**Shopping and quantities.** Genitive. Lesson: genitive.

| Polish | Pron | English | Note |
|---|---|---|---|
| Nie mam czasu. | `NYEH mahm CHAH-soo` | I don't have time. | Negation takes the genitive |
| Nie ma mleka. | `NYEH mah MLEH-kah` | There is no milk. | |
| Butelka wody. | `boo-TEHL-kah VOH-dih` | A bottle of water. | Quantity takes the genitive |
| Kilo chleba. | `KYEE-loh KHLEH-bah` | A kilo of bread. | A whole loaf as an object is *chleb* |
| Poproszę wody. | `poh-PROH-sheh VOH-dih` | Some water, please. | "Some" is genitive. *Poproszę kawę* was "a coffee" |

**Past and plans.** Lessons: past, future.

| Polish | Pron | English | Note |
|---|---|---|---|
| Wczoraj byłem w Krakowie. | `FCHOH-rahy BIH-wehm f krah-KOH-vyeh` | Yesterday I was in Kraków. | A man says *byłem* |
| Wczoraj byłam w domu. | `FCHOH-rahy BIH-wahm v DOH-moo` | Yesterday I was at home. | A woman says *byłam* |
| Czytałem książkę. | `chih-TAH-wehm KSHYOHN-shkeh` | I was reading a book. | Imperfective. A woman says *czytałam* |
| Jutro będę czytać. | `YOO-troh BEHN-deh CHIH-tahch'` | Tomorrow I'll read. | *będę* plus the infinitive. Imperfective |
| Będę w Warszawie. | `BEHN-deh v vahr-SHAH-vyeh` | I'll be in Warsaw. | |

### Watch out

**Traps for English speakers.** False friends and calques. Lesson: traps. The lingology pairs are reversed: the article teaches them to Polish speakers of English.

| Polish | Pron | English | Note |
|---|---|---|---|
| aktualny | `ahk-too-AHL-nih` | current | Not "actual" |
| sympatyczny | `sihm-pah-TIHCH-nih` | nice | Not "sympathetic" |
| ewentualnie | `eh-vehn-too-AHL-nyeh` | possibly | Not "eventually" |
| ordynarny | `ohr-dih-NAHR-nih` | rude | Not "ordinary" |
| Jestem lekarzem. | `YEH-stehm leh-KAH-zhehm` | I'm a doctor. | Not *Jestem lekarz*. A man says this |

**Compliments.** An agreeing adjective, and the reply. Lesson: adjectives. No second lesson is added.

| Polish | Pron | English | Note |
|---|---|---|---|
| Dobra kawa. | `DOH-brah KAH-vah` | Good coffee. | Feminine form |
| Pyszne pierogi. | `PIH-shneh pyeh-ROH-gyee` | Delicious pierogi. | The plural form for a thing, not for a group of men |
| Dobrze pani mówi po polsku. | `DOHB-zheh PAH-nyee MOO-vyee poh POHL-skoo` | You speak Polish well. | *Dobrze* is the adverb |
| Ładny dzień. | `WAHD-nih jyehny` | A beautiful day. | Masculine form. *ł* is *w* |
| Dziękuję bardzo. | `jyehng-KOO-yeh BAHR-dzoh` | Thank you very much. | The safe reply. Different target from the greetings card *Dziękuję* |

## 10. Typing and script

Script: Latin, left to right. Letters beyond a–z: *ą ć ę ł ń ó ś ź ż*, and the capitals.

`keys` for the accent bar, space-separated: `ą ć ę ł ń ó ś ź ż`.

`targetScript`: `[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]`. A plain sentence such as *To jest dom* still matches.

`accents`: **false.**

The app's `foldAcc` (in `src/app.html`) strips combining marks after NFD. It protects *ñ* and not the Polish letters. Checked by decomposing in Node: *ą ę ó ć ń ś ź ż* fold onto *a e o c n s z z*. The ogonek, the acute and the dot are combining marks. *ł* and *Ł* do not decompose and do not fold. The validator's `fold` does the same strip, and it also protects Russian *й* and *ё*, not Polish letters.

So these pairs are the same letter to the folder, and a different word to the language:

| Marked | Folded | Why it matters |
|---|---|---|
| wodą | woda | instrumental against nominative |
| kawę | kawe | accusative against a misspelling of the base |
| chcę | chce | the verb ending |
| są | sa | the verb against a non-word |
| mój | moj | the pronoun |
| proszę | prosze | the courtesy word |
| koń | kon | *ń* |
| oś | os | *ś* |
| źle | zle | *ź* |
| może | moze | *ż* |

*ł* / *l* (*żółw* / *zolw*, *łódka* / *lodka*) is a different letter on both sides. A fill item does not need `!strict` for *ł*.

`accLoose()` is true only when `COURSE.accents` is on. With `accents` false, a missing diacritic is **wrong**, not "almost". That is the point. If accents were on, *wodą* typed as *woda* would score almost, and the case ending would disappear.

The validator does not look at the accents flag. A fill item whose distractor matches an answer after folding still needs `!strict`, or `validate.js` fails. Writers mark `!strict` on those items anyway. The flag also keeps the item exact if someone later turns accents on.

A hyphen check in `pracMatch` runs before the accents check. A missing hyphen, or a hyphen typed as a space, is still "almost" when accents are false. Polish answers in this course do not depend on a hyphen. Do not use *e-mail* or a hyphenated compound as the thing the item tests.

The matcher lowercases, strips `. , ! ?` and quotes, and collapses spaces. A typed answer need not repeat the period. It does need every diacritic. Capital *Pan* is accepted for *pan*.

No app change. The course lives with `accents` false, the nine keys on the bar, and `!strict` on folded pairs.

## 11. Gaps and sources

### Gaps

- The Wrocław University of Science and Technology A1 course card named in the roadmap was not opened. A different Wrocław language-department booklet was opened by mistake and is not a source for the lesson order. The GVSU "Polish for Beginners" PDF named in the roadmap was not found. Lesson order follows the roadmap itself, checked against the Hurra contents headings.
- No study of English speakers' errors in Polish was opened. The ranked list uses PolskiCert's examples, the Council booklet's pronunciation warning, the roadmap, and inference. Frequencies are not claimed.
- The lingology false-friend list is aimed at Poles learning English. Reversing it is this profile's step. The four books named on that page were not opened.
- The national speaker count 529,324 is from a secondary compilation. The Bureau schema was opened and contains no count. The estimate URL was not retrieved.
- The `pl-PL` voice was not listened to. Careful stress on the closed list may disagree with it, and with colloquial speech. This is the decision this profile is least sure of.
- *polityka* and *republika* are on the careful-stress list by pattern. *Afryka* is not on the list. Neither was given its own dictionary entry.
- Bielec was a publisher preview, not the whole book. Hurra was used for contents headings only.
- A current złoty price was not checked. Classroom round numbers are used instead.
- Final *ą* as `ohN` follows the standard description. How often casual speech drops it was not measured.
- *jabłko* and devoiced sonorants are known limits of the aid (§6.5), not open research questions.

### Sources

Opened on the web for this profile:

- Council for the Polish Language, Walery Pisarek, English translation by Marta Usiekniewicz, *The Polish Language*, Warsaw 2007, ISBN 978-83-916268-2-5. Opened as the booklet PDF.
- Wikipedia, "Polish phonology". https://en.wikipedia.org/wiki/Polish_phonology
- Wiktionary, "Ameryka". https://en.wiktionary.org/wiki/Ameryka
- Dana Bielec, *Polish: An Essential Grammar*, 2nd ed., Routledge, 2012. The preview that was opened, stress sections 2.11–2.14.
- Małgorzata Małolepsza and Aneta Szymkiewicz, *Hurra!!! Po polsku 1*, student book, new edition. Opened as a text extract. Contents headings only. No lesson text is copied here.
- Małgorzata Marcjanik, "Dzień dobry czy Dobry wieczór?", PWN Poradnia Językowa, 31 January 2006. https://sjp.pwn.pl/poradnia/haslo/Dzien-dobry-czy-Dobry-wieczor;6906.html
- Małgorzata Marcjanik, "pan czy Pan?", PWN Poradnia Językowa, 1 April 2008. https://sjp.pwn.pl/poradnia/haslo/pan-czy-Pan;9094.html
- Amy Qin, "Dozens of languages spoken in Chicago homes reflect the city’s wide-ranging diversity", WBEZ, 2022, using the 2021 American Community Survey. https://www.wbez.org/race-class-communities/2022/12/01/dozens-of-languages-are-spoken-in-homes-across-chicago
- PolskiCert, "Noun Cases and Declension". https://polskicert.pl/en/poradnik/przypadki-rzeczownika/
- lingology.pl, "20 fałszywych przyjaciół polsko-angielskich", 10 August 2026. https://www.lingology.pl/blog/falszywi-przyjaciele-polsko-angielscy
- millennialcities.com, "Most Spoken Languages in the US", 10 January 2023, citing ACS table B16001. https://millennialcities.com/most-spoken-languages-in-the-us/
- US Census Bureau API schema, 2021 ACS 5-year, group B16001. Variable labels only. No estimate was returned.

Read in this repo, not as web sources: `docs/roadmaps/pl.json`, `docs/profiles/en-es.md`, `docs/profiles/en-ru.md`, `src/app.html` (`foldAcc`, `accLoose`, `pracMatch`), `tools/target/validate.js`.
