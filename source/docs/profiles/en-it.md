# English speakers learning Italian: course profile

Course `en-it`: Italian for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Italian. Machine-readable twin: `tools/target/it/profile.json`, generated from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/it/respell.js` (§6).

(`docs/profiles/it.md` and `docs/profiles/it.profile.json` belong to the reverse course, English for Italian speakers. This profile does not use or change them.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile. The study is named and its sample given. **(abstract only)** and **(second-hand)** say how much of it was read.
- **[curriculum convention]**: what syllabuses, textbooks and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Italian**. Every claim of that kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant and voice:** standard Italian (the roadmap's choice), `it-IT` voice, no regional forms. Prices are in euros, and scenes are set in Italy.
- **Register:** *tu* first, for friends, family and peers. *Lei* (formal "you", capital L) comes in lesson 2 and is drilled from `present` on as "the *lui / lei* form". *Voi* is the only plural "you"; formal *Loro* is for recognition only.
- **Biggest traps (§4):** gender and number agreement, including the article forms *il / lo / l' / la, i / gli / le*; verb endings matching the subject (*Lei parla*); object pronouns; *essere* or *avere* in the passato prossimo; *avere* and *fare* calques (*ho freddo, fa freddo*); *piacere*; double consonants; false friends.
- **Standing rule (§7):** every practice set re-tests **agreement**, on two strands: articles, adjectives and nouns (gender and number), and the verb ending with its subject. Fixed English keywords in `why` lines, tested.
- **Pronunciation aid (§6):** a generated English-letter respelling, as in the Spanish pilot: `CHAH-oh`, `PEET-tsah`, `teh-LEH-foh-noh`. It is required on every card and example row. `respell.js` covers c / g before e and i, ch, gh, gn, gli, sc, z, double consonants, elision (*l'acqua, dov'è*) and stress. Stress comes from a rule set plus a word list, and risky guesses are reported on stderr.
- **Lessons (§8):** 24. All 21 roadmap items are kept. `gender` now comes before `articles`, `pronouns` before `essere-avere`, and `adjectives` moves to straight after `essere-avere`. Three lessons are added: `lo-la` (object pronouns, split from the roadmap's `it-pronouns`), `passato-essere` (the passato prossimo with *essere*) and `sapere-conoscere`.
- **Decks (§9):** 18 decks in 5 groups, including "Traps for English speakers" and "Café and menu Italian" (menu words Americans already say differently, such as *latte, peperoni, panini, bruschetta*).
- **Typing (§10):** a missing accent counts as "almost". Accent pairs are strict items: *è / e, sì / si, là / la, lì / li, dà / da, né / ne, tè / te*. The apostrophe is part of the spelling: *l'amico*, *un'amica*, *un po'*.

## 2. Variant, register and voice

### 2.1 Variant: standard Italian

- The roadmap names "Standard Italian", and the build plan keeps it. Its basis is the CILS A1 syllabus (Università per Stranieri di Siena), via the Istituto Italiano di Cultura in Buenos Aires ([Contenuti Livello A1](https://iicbuenosaires.esteri.it/wp-content/uploads/2025/05/Contenuti-Livello-A1.pdf)) [curriculum convention].
- **Voice:** `ttsLang: "it-IT"`. Spelling, vocabulary and the `pron` aid follow standard written Italian.
- **Pronunciation varies by region, even in "standard" speech.** [research-backed] Bertinetto & Loporcaro (2005; year and volume from memory, not shown in the fetched text) compare standard Italian with Florence, Milan and Rome ([*JIPA* 35](https://ricerca.sns.it/retrieve/e3aacdfd-8f28-4c98-e053-3705fe0acb7e/Bertinetto_%26_Loporcaro.pdf)). Their findings:
  - The *s / z* contrast between vowels is lost in Rome, where *s* stays voiceless, and in Milan, where it is voiced in most words.
  - The open / closed *e* and *o* contrast is largely lost in Milan.
  - Syntactic doubling (*a casa* said "akkasa") is absent in the North.
  - Consequence: the aid does not mark open vs closed *e / o*, voicing of *s* between vowels, or syntactic doubling (§6). These are not errors whichever way a learner says them.
- **Vocabulary rule** [inference]: use the everyday word of Italy, and put alternatives in the card `note`.

| Use | Note on the card | Avoid as the taught form |
|---|---|---|
| la macchina (car) | also: l'auto | la vettura |
| il cellulare | also: il telefonino | |
| l'autobus | | il bus (fine, but less neutral) |
| il bagno (restroom) | in signs: toilette, WC | |
| la colazione, il pranzo, la cena | breakfast, lunch, dinner | |
| un caffè | = an espresso | un espresso (understood, but tourist-marked) |
| il fine settimana | also: il weekend | |
| Pronto? | only on the phone | |

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. The changes in §8 come from the learners (§4, §5), not the variant.

### 2.3 Forms of "you": who is addressed, and when

**Taught first: *tu*.** It is the form of every dialogue between friends, classmates, family and young people, and it carries the first conjugations.

***Lei* (formal "you"):**
- It appears in `greetings` as the form for strangers, older people, shop and hotel staff and officials: *Come sta?*, *Mi scusi*, *ArrivederLa*.
- [practitioner opinion] With an unknown adult, *tu* can sound rude, while *Lei* at worst sounds a little stiff. So "if unsure, use *Lei*" ([FluentU, *The Formal "You" in Italian*](https://www.fluentu.com/blog/italian/italian-formal-you/)).
- From `present` on it is drilled as "takes the *lui / lei* form" (*Lei parla inglese?*). That makes it an agreement point under the standing rule (§7).
- `modals` (*Può aiutarmi?*), `imperative` (*Giri a destra*, *Prenda…*) and the shopping and café decks use it actively. That is what a traveller hears from strangers and says to them.
- **Spelling:** *Lei* is written with a capital L in model answers, card targets and examples, as is *ArrivederLa*. This keeps it apart from *lei* "she" [practitioner opinion, FluentU]. The matcher ignores case (§10).
- [inference] A US traveller's first real exchanges (bar, hotel, train, shop) call for *Lei*, so it cannot wait until A2. But *tu* still carries the first conjugations, because the *Lei* form is the *lui / lei* form, which is taught anyway.

***Voi*:** the only plural "you", for friends and strangers alike, from `present` on (*Voi siete americani?*). Formal plural *Loro* gets one recognition note, in `pronouns`: "In very formal service you may hear *Loro*".

**How examples address people.**
- Dialogues follow the relationship: friends and family use *tu*, while customer and staff, passenger and conductor, or a stranger asked for directions use *Lei*.
- Card notes say which form a phrase uses when it matters ("Lei form, to a shop assistant").
- English prompts never say "you (formal)" unless the item tests *Lei*. When it does, the prompt says "(to a stranger)" or "(formal)".
- [inference] *Lei*'s verb is the *lei* "she" verb, so one prompt can map onto two subjects. Prompts that test *Lei* must make the stranger explicit, so that "Do you speak English? (to a stranger)" has *Parla inglese?* and *Lei parla inglese?* as its only answers.

### 2.4 Voice of the English text

- Write plain, friendly US English with US spelling (*color, favorite*). Keep it short: a `why` is one sentence.
- Italian inside English text: in lesson bodies, put Italian in `<b>`. In plain-text fields (`why`, `hint`, card notes), write Italian bare. Never add English plural or possessive endings to Italian words: write "the verb *essere*", not "essere's forms".
- Sample voice lines:
  1. "Italian nouns have gender. *Casa* is feminine, so it's *la casa piccola*, not *la casa piccolo*."
  2. "Use *Lei* with someone you don't know. The verb takes the same form as *lei* (she): *Lei parla inglese?*"
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

These are [curriculum convention]: the names in common use in US first-year Italian courses and English-language grammar guides. The Palomar College course book *Welcome to Italian 101* uses "subject pronouns", "articulated prepositions", "disjunctive pronouns" and the Italian name *passato prossimo* ([Nelson & Scaduto](https://www.palomar.edu/worldlanguages/wp-content/uploads/sites/185/2020/06/Welcome-to-Italian-101.pdf)).

Use each term exactly and always the same way. Where an Italian name is the usual one, keep it in Italian and do not translate it.

| Term to use | Do not use | Note |
|---|---|---|
| noun, verb, adjective, adverb, preposition | | |
| subject | | who does the verb |
| subject pronoun (io, tu, lui, lei, Lei, noi, voi, loro) | personal pronoun | |
| gender: masculine / feminine | male / female (for words) | **standing-rule keyword** |
| number: singular / plural | | |
| agreement; "X agrees with Y" | concord, matching | **standing-rule keyword** (§7) |
| definite article (il, lo, la, l', i, gli, le) | | Use "definite article" at first mention, then "article". Say "**lo** comes before z, gn, ps and s + consonant", never "lo is irregular". |
| indefinite article (un, uno, una, un') | | |
| elision; "the vowel drops and an apostrophe takes its place" (l'amico, un'amica) | contraction (for l') | first used in `articles` |
| infinitive (parlare) | base form, dictionary form | |
| stem (parl-) | root | |
| ending (-o, -i, -a, -iamo) | suffix | write "verb ending" when the point is person (§7) |
| conjugate / conjugation | | |
| the io form, the tu form, the lui / lei form, the Lei form, the noi form, the voi form, the loro form | 1st person singular etc. | person names stay Italian; **standing-rule keywords** |
| regular verb / irregular verb | | |
| -are verb, -ere verb, -ire verb | first conjugation | |
| -isc- verb (capisco, finisco, preferisco) | | used in `present` |
| modal verb (potere, dovere, volere) | helping verb | |
| reflexive verb; reflexive pronoun (mi, ti, si, ci, vi) | pronominal verb | |
| direct object pronoun (lo, la, li, le) | accusative | `lo-la` |
| indirect object pronoun (mi, ti, gli, le, Le) | dative | first used in `piacere` |
| possessive (il mio, la mia) | possessive adjective | the article comes with it, except before a singular family noun |
| demonstrative (questo, quello) | | |
| contracted preposition (al, del, nel, sul, dal) | articulated preposition | Say "articulated preposition (preposizione articolata)" once in `prepositions`, as a gloss. |
| present tense | simple present (for Italian) | |
| passato prossimo | present perfect, past tense | Always the Italian name: it is used where English uses the simple past (§4.4). |
| auxiliary (essere or avere as the helper verb) | helping verb | |
| past participle (parlato, andato) | | |
| imperative; the Lei imperative (giri, prenda) | command form | |
| conditional | | Only *vorrei* at A1, glossed "I would like" (the polite way to order). |
| c'è / ci sono | | "there is / there are" |
| question word (che, chi, dove…) | interrogative | |
| accent mark: grave (à è ì ò ù) and acute (é) | tilde, stress mark | |
| stressed syllable | tonic syllable | |
| double consonant (anno, notte) | geminate, long consonant | "geminate" may appear once, as a gloss |
| false friend | false cognate | "false cognate" once, as a gloss |
| cognate | | |
| calque ("word-for-word copy from English") | | gloss it at first use |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with fetched learner data come first.
2. Then items that recur in nearly every sentence and can be checked in typed practice.
3. Then lexical and lesson-local traps.

First-hand learner data for English-L1 learners of Italian was thinner than for Spanish (§11). Most of the later items rest on teaching lists.

1. **Gender and number agreement, including the article forms**
   - Wrong → right:
     - *la casa piccolo* → *la casa piccola*
     - *il studente* → *lo studente*
     - *i amici* → *gli amici*
     - *la problema* → *il problema*
     - *il mano* → *la mano*
     - *le ragazze italiani* → *le ragazze italiane*
   - Why: English marks gender only on *he / she* and number only on the noun. Italian marks both on the article, the noun and every adjective. The masculine article also has a sound-based choice (*il / lo / l'*, *i / gli*) that English has no model for.
   - [research-backed] Santoro (2012), [*Canadian Journal of Applied Linguistics* 15(1)](https://journals.lib.unb.ca/index.php/CJAL/article/download/19952/21844/26555), studied 35 English-speaking adult learners at CUNY (18 high-beginners, 17 high-intermediates) and 12 native controls. Its findings:
     - Oral agreement accuracy rose from 75.2% to 86.5%, and written from 83.8% to 90.2%. Errors did not disappear after two years.
     - Feminine and plural forms were less accurate than masculine and singular. For example, high-beginners scored 69.8% on plurals and 80.5% on singulars in the oral task. The author reads this as overgeneralising the masculine singular.
     - Some of the paper's figures disagree between its text and tables, so cite the direction, not the decimals.
   - [research-backed, abstract only] Ayoun & Maranzana (2022), [ch. 5 in *The Acquisition of Gender*](https://experts.arizona.edu/en/publications/the-second-language-acquisition-of-grammatical-gender-and-number-/), tested 87 anglophone learners and 109 native speakers on gender assignment. They found significant effects of gender, of number, and of ambiguous vs transparent nouns. The abstract does not list the ambiguous nouns. They are presumably nouns whose ending does not show gender, such as those in *-e* (*il fiore, la chiave*) [inference].
   - Design consequence: this is the standing rule (§7). Cards always show nouns with their article (*la chiave*, never *chiave*). Nouns in *-e*, *il problema*, *la mano*, *la foto*, *il caffè* and *la città* get explicit cards and items.

2. **Verb endings that must match the subject; overusing subject pronouns; *Lei* takes the *lei* form**
   - Wrong → right:
     - *Noi parla italiano* → *Parliamo italiano*
     - *Lei parli inglese?* → *Lei parla inglese?*
     - *Loro è americani* → *Sono americani*
     - *Io sono Emma. Io abito… Io lavoro…* → *Sono Emma. Abito… Lavoro…* (not wrong, but heavy and repetitive)
   - [practitioner opinion] Standard first-year teaching lore. No learner count was opened.
   - [inference] It is ranked second because it occurs in every sentence from `essere-avere` on and is fully testable in typing. It joins agreement in the standing rule.

3. **Object pronouns: form and placement**
   - Wrong → right:
     - *Vedo lo* → *Lo vedo*
     - *La compro* said of *il libro* → *Lo compro*
     - *Li prendo* said of *le scarpe* → *Le prendo*
     - *Io piace te* → *Tu mi piaci* (see 6)
   - [research-backed] In Santoro (2012), direct object pronouns were the most error-prone domain. Oral accuracy was 63.3% for high-beginners and 81.1% for high-intermediates, below articles and adjectives. The errors were mostly in gender and number of the pronoun.
   - [research-backed] Bennati (2007), [*Nanzan Linguistics* SI 3](https://www.ic.nanzan-u.ac.jp/LINGUISTICS/publication/pdf/NLSI3_1-1-bennati.pdf), tested 8 English and 8 Spanish near-natives and 8 controls. Near-natives placed clitics natively where placement is obligatory. That says nothing about beginners: placement errors (*vedo lo*) at A1 are [practitioner opinion].
   - Design consequence: add `lo-la`. The pronoun agrees with the thing it replaces, so the lesson falls under the standing rule.

4. **The passato prossimo: *essere* or *avere*, and participle agreement**
   - Wrong → right:
     - *Ho andato* → *Sono andato*
     - *Giulia è andato* → *Giulia è andata*
     - *Ho arrivato ieri* → *Sono arrivato ieri*
     - *Sono mangiato* → *Ho mangiato*
     - Also *Ho visitato Roma due anni fa* is right, and English speakers should not avoid it: the passato prossimo covers English "I visited".
   - [practitioner opinion] *Ho andato → Sono andato* is on the [Daily Italian Words list of 15 mistakes English speakers make](https://dailyitalianwords.com/mistakes-english-speakers-make-in-italian/).
   - [research-backed, abstract only] An Edinburgh thesis on auxiliary selection by English-speaking learners at four levels (author and date not shown on the [repository page](https://era.ed.ac.uk/items/f60c4c8b-c6e2-4d46-a072-290e80fb8654)) found two things:
     - Learners' judgments on core verb classes moved toward native values as level rose.
     - English learners never became determinate on peripheral cases, even at near-native level.
   - [curriculum convention] The CILS A1 productive syllabus requires the right choice and conjugation of the auxiliary. It does "not require" participle agreement with the subject (*non è richiesto l'accordo del participio passato con il soggetto*).
   - Design consequence: two lessons. `passato` (with *avere*) and `passato-essere` (with *essere*, a closed list of motion and change verbs: *andare, venire, arrivare, partire, tornare, uscire, entrare, stare, essere, nascere*). In `passato-essere` participle agreement is taught and typed, because it is the same agreement as adjectives (*sono stanca / sono andata*). §7 says why this goes beyond the CILS productive minimum.

5. ***Avere* and *fare* expressions, and other calques**
   - Wrong → right:
     - *Sono freddo* → *Ho freddo*
     - *Sono 25 anni* → *Ho 25 anni*
     - *Sono fame* → *Ho fame*
     - *È freddo oggi* → *Fa freddo oggi*
     - *Fa senso* → *Ha senso*
     - *Mi chiamo è Emma* → *Mi chiamo Emma*
   - [practitioner opinion] *Ho freddo*, *ha senso* and *qualcosa di bello* are on the Daily Italian Words list.

6. ***Piacere***
   - Wrong → right:
     - *Io piace la pizza* → *Mi piace la pizza*
     - *Mi piace i libri* → *Mi piacciono i libri*
     - *Io piace te* → *Tu mi piaci*
   - [practitioner opinion] Daily Italian Words. This is the same reversal as Spanish *gustar*.
   - Design consequence: `piacere` is taught as "the thing liked is the subject, so the verb agrees with it" (*piace / piacciono*), which links it to the standing rule.

7. **Double consonants (sound and spelling)**
   - Wrong → right:
     - *capelli* (hair) for "hats" → *cappelli*
     - *pala* (shovel) for "ball" → *palla*
     - *pene* for "pens" → *penne*
     - *ano* for "year" → *anno*
     - *note* for "night" → *notte*
   - [research-backed] Mirisis (2017), [PhD dissertation, University of Minnesota](https://conservancy.umn.edu/bitstream/handle/11299/206210/Mirisis_umn_0130E_18154.pdf?sequence=1), tested 20 English-speaking learners of Italian in years 1, 3 and 4 against 5 native controls. Learners struggled to produce the duration cues for geminate vs single stops, and to perceive the difference for voiced stops. Production and perception were only weakly related. The Italian results chapter was not read in detail.
   - [practitioner opinion] The minimal pairs are from Daily Italian Words.
   - Design consequence: the aid shows every double consonant on both sides of the hyphen (`AHN-noh` vs `AH-noh`, §6). `sounds` drills the pairs. A wrong double consonant in a typed answer is wrong, never "almost" (§10).

8. **False friends**
   - Wrong → right:
     - *i parenti* meant as "parents" → *i genitori*
     - *la camera* for "camera" → *la macchina fotografica*
     - *la libreria* for "library" → *la biblioteca*
     - *morbido* for "morbid" → *morboso* (*morbido* = soft)
     - *educato* for "educated" → *istruito* (*educato* = polite)
     - *attualmente* for "actually" → *in realtà*
     - *eventualmente* for "eventually" → *alla fine*
     - *sensibile* for "sensible" → *ragionevole*
     - *la fattoria* for "factory" → *la fabbrica*
     - *annoiare* for "annoy" → *dare fastidio* (*annoiare* = to bore)
     - *preservativo* for "preservative" → *conservante*
   - [practitioner opinion] The pairs are from [Think in Italian](https://www.thinkinitalian.com/italian-false-friends/) (16 pairs), the [Vista Higher Learning blog](https://vhlblog.vistahigherlearning.com/?p=3802) and Daily Italian Words. No frequency or error data.
   - The replacements *morboso, istruito, in realtà, alla fine, ragionevole, dare fastidio* and *conservante* are [inference] and need a native check.
   - Design consequence: they go in the "Traps for English speakers" deck.

9. **Prepositions and contracted prepositions**
   - Wrong → right:
     - *Vado alla banca* → *Vado in banca*
     - *Vado al dentista* → *Vado dal dentista*
     - *Sono di America* → *Sono americano* / *Vengo dagli Stati Uniti*
     - *Sono qui per una settimana* (still here) → *Sono qui da una settimana*
     - *in il centro* → *nel centro* (*in centro* is the usual phrase)
   - [practitioner opinion] The first four are from Daily Italian Words. The contraction is the roadmap's own lesson focus.

10. **Articles where English has none, and possessives without them**
    - Wrong → right:
      - *Mi piace pizza* → *Mi piace la pizza*
      - *Italia è bella* → *L'Italia è bella*
      - *mia macchina* → *la mia macchina*
      - *la mia madre* → *mia madre* (no article before a singular family noun)
    - [practitioner opinion] Standard teaching rule. No source opened.

11. ***Sapere* vs *conoscere***
    - Wrong → right:
      - *Sai Giovanni?* → *Conosci Giovanni?*
      - *Non conosco come accendere la TV* → *Non so come accendere la TV*
      - *Luisa può suonare il piano* (meaning she knows how) → *Luisa sa suonare il piano*
    - [practitioner opinion] Daily Italian Words gives four *sapere / conoscere* errors and one *potere / sapere* error. *Sapere* and *conoscere* are a unit topic in US first-year books (*Welcome to Italian 101*, Unità 5) [curriculum convention].

12. ***Molto*: adverb or adjective**
    - Wrong → right:
      - *Ho molto amici* → *Ho molti amici*
      - *È molta bella* → *È molto bella*
      - *Molto grazie* → *Grazie mille* / *Molte grazie*
    - [practitioner opinion] No source opened. *Molto* agrees before a noun and never changes before an adjective, which is a hinge for the standing rule in `adverbs`.

13. **Pronunciation**
    [practitioner opinion] The [Daily Italian Words list of 8 sounds](https://dailyitalianwords.com/8-italian-sounds-english-speakers-struggle-to-pronounce-correctly) names: the English approximant r for the tapped or trilled *r*; *s* not voiced before *b d g l m n r v*; *z* said as English z instead of *ts / dz*; glided *e* and *o*; double consonants; aspirated *p t k*; *gn*; and *gli*. Add:
    - c and g before e and i read as in *cat* and *go* (*bruschetta* said "broo-SHEH-tah", *gnocchi* said "guh-NOH-kee") [practitioner opinion; common menu errors, no source opened];
    - English stress on cognates (*telefono* is stressed on the second syllable, *numero* and *simpatico* on the first and second) [inference].
    Design consequence: the aid shows c / g softening, *sk* for *sch*, `ts / dz` for *z*, `z` for *s* before a voiced consonant, double consonants and stress (§6). What it cannot show (tap and trill, no puff on *p t k*, pure vowels) goes in `sounds` and card notes.

14. **Accent marks and apostrophes**
    - Wrong → right:
      - *Lui e americano* → *Lui è americano*
      - *si* for "yes" → *sì*
      - *un pò* → *un po'*
      - *un'amico* → *un amico* (but *un'amica*)
      - *perchè* → *perché*
    - [practitioner opinion] No source opened. §10 handles these in the matcher (strict items) rather than in a lesson. *Perché* written with a grave accent is "almost", because the matcher folds both accents (§10).

## 5. Learners: who, why, what first

**Who**
- [research-backed] Italian had 45,182 enrolments in US higher education in fall 2021, 7th of all languages and 3.8% of foreign-language enrolments. It was in the top five from 1960 to 2013 (MLA census as tabulated on [Wikipedia, *List of most commonly learned second languages in the United States*](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)).
- [research-backed] Italian was the 6th most studied language on Duolingo worldwide in 2024, back above Korean ([Duolingo Language Report 2024](https://blog.duolingo.com/2024-duolingo-language-report/)). No US rank or motive breakdown for Italian was given.
- [research-backed] About 16 million people in the US (4.8%) reported Italian ancestry in the 2022 American Community Survey ([US Census Bureau, *Italian American Heritage and Culture Month*](https://census.gov/newsroom/stories/italian-american-heritage-culture-month.html)). The page links to, but does not state, the number who speak Italian at home.
- [inference] Three groups follow from this:
  - **heritage learners**, who know family and food words (*nonna, mangia, gabagool*), often in a southern dialect form, and want to talk to relatives or read family records;
  - **travellers** to Italy;
  - **culture learners**: food, art, opera, design, the Catholic Church, film.
  Few need Italian for work at A1. True beginners are the norm, and false beginners are fewer than in Spanish.

**Why they study**
- [practitioner opinion, anecdotal] Six students at a Cleveland Little Italy class named heritage, travel and the sound of the language ([La Gazzetta Italiana, 2017](https://lagazzettaitaliana.com/history-culture/8529-why-do-you-study-italiano)). No survey of US Italian learners' motives was found (§11).
- [inference] The order of motives is probably travel, then heritage and family, then culture and food, then school credit.

**What they need first** [inference]
1. **Travel exchanges with strangers, in *Lei*:** greetings by time of day, *mi scusi*, *vorrei*, *quanto costa?*, *dov'è…?*, numbers and euros, the café and the menu. So *Lei* appears in lesson 2, `numbers` sits in the first sentences stage, and the café deck exists.
2. **Menu and food words said correctly.** They "know" *bruschetta, gnocchi, prosciutto* and *latte* already, often wrongly (§4.13, §9 deck 18). This is a quick win that also teaches the c / g / sch rules.
3. **Talking about themselves and their family, in *tu*:** name, origin (*Sono americano*, *Vengo dagli Stati Uniti*), age with *avere*, family with possessives. Heritage learners need this most.
4. **Telling what they did, in the passato prossimo**, early. A trip story is the first long thing a traveller says, and it uses *sono andato / ho visto*.
5. **Agreement and verb endings from day one**, because English speakers overuse the masculine singular (§4.1).
6. **Little grammar terminology:** short rules with the glossary terms, and lots of typed production.

**Check of the roadmap's order against a US first-year course** [curriculum convention]
- The roadmap follows the CILS A1 receptive syllabus. That syllabus lists, in order: articles, gender and number, subject and object pronouns, adjectives, possessives, demonstratives, question words, numbers, simple prepositions (with contracted ones for recognition), the verbs (present, passato prossimo, imperative), *vorrei* for recognition, adverbs, then connectors. Reflexives and *piacere* are not listed.
- *Welcome to Italian 101* (Palomar College, Nelson & Scaduto) orders it this way:
  1. Unità 1: subject pronouns, *essere*, *c'è*, adjective agreement, nouns and articles
  2. Unità 2: *avere*, numbers, time
  3. Unità 3: question words, present tense
  4. Unità 4: *piacere*, *andare / fare / dare / stare*, modals
  5. Unità 5: possessives, prepositions, *sapere / conoscere*
  6. Unità 6: passato prossimo with *avere* and *essere*
- The roadmap matches this in outline. Changes made for US learners:
  - Gender comes before articles. The article form depends on the noun's gender and first sound, so the learner needs gender first.
  - Subject pronouns come before *essere* and *avere*. Conjugating them needs the pronouns.
  - Adjectives move to straight after *essere* and *avere*, as in Unità 1 (*Giulia è alta*).
  - Object pronouns move out of the early `pronouns` lesson into `lo-la`, after `reflexive`. Placement before the verb is easier once the learner has met *mi alzo* (`reflexive`) and *mi piace* (`piacere`) [inference]. Santoro's data shows the forms are the hard part (§4.3).
  - The passato prossimo is split into an *avere* lesson and an *essere* lesson (§4.4), and *sapere / conoscere* gets its own lesson (§4.11).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Italian was found. The choice is [inference], as in the Spanish pilot.
- [research-backed] Double consonants are a documented problem in both production and perception (Mirisis 2017, §4.7), so the aid must show them.
- [research-backed, second-hand] Stress is not marked in Italian spelling except on final vowels. About 80% of words are stressed on the next-to-last syllable and 18% on the one before (Thornton et al. 1997). In word forms from the phonItalia lexicon the next-to-last share is 84.9% for nouns, 76.2% for adjectives and only 70.3% for verbs. Both figures are as cited in [Spinelli et al. 2016, *Frontiers in Psychology* 7:942](https://www.frontiersin.org/articles/10.3389/fpsyg.2016.00942/full), which also notes the final-accent spelling rule covers about 2% of words. So a "next to last" default is wrong for about one word in five, and more often for verbs. The aid must carry stress, and the generator needs a word list.

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling, generated | Readable on day one. Same format as the Spanish pilot, so the engine, lint and validator need nothing new. Shows stress, double consonants, c / g softening and *gn / gli / sc*, which are exactly the menu-word errors of §4.13. | Cannot show the tap / trill, unaspirated *p t k*, open vs closed *e / o*, or pure vowels. Stress needs a word list. |
| (b) IPA | Exact. | US adult self-learners cannot read it [inference]. |
| (c) No aid after a spelling lesson | Italian letters are regular [inference]. | Stress is not in the spelling (see above), and day-one learners misread *c, g, ch, gh, sch, z*. |

**Decision: (a).** `pron: "required"`.
- The aid is **generated by `tools/target/it/respell.js`**, never hand-written: `node tools/target/it/respell.js "<text>"` prints `<text> -> <pron>`, and the module exports `respell`. The same Italian always gives the same `pron`, which is what the lint checks.
- **Stress** comes from five sources, in this order:
  1. a written accent (*città, perché, lunedì*);
  2. the word list `LEX` inside `respell.js` (308 forms). It marks the stressed vowel in dictionary style (*telèfono, farmacìa, pàrlano*), and also marks hiatus (*mìo, sciare* with ï) and voiced *z* (*ʣero*). A word not in the list inherits from a listed form that differs only in its final vowel: *piccole* from *pìccolo*, *mezza* from *meʣʣo*, *farmacie* from *farmacìa*;
  3. suffix rules, which put stress on the syllable before the next-to-last:
     - *-iscono*, imperfect *-avano / -evano / -ivano*, *-arono / -erono / -irono*, *-ebbero*;
     - *-issimo*, *-abile / -ibile*, *-esimo*, *-evole*;
     - *-ico / -ica / -iche*, and *-ici* except *-trici* (with exceptions such as *amico, antico, Federica, felici*);
     - *-ido / -ida / -idi / -ide* (*rapido, timido, morbido*; exceptions *decido, decide, sorrido*…);
     - infinitives in *-ere* (*prendere, essere*), except a list of *-ére* verbs (*avere, vedere, potere, piacere, rimanere*…) and nouns in *-iere*;
     - a final falling diphthong takes the stress (*vorrei, farai, ormai*);
  4. rules that put stress on an *i* in hiatus:
     - *-eria* shops (*pizzeria, biglietteria*), except *materia, serie*…;
     - *-logia, -grafia, -sofia, -nomia, -fonia, -patia, -crazia*;
     - number compounds ending in *-due* (*ventidue*, `vehn-tee-DOO-eh`) and *duecento*;
  5. otherwise, the next-to-last syllable.
- **Risky guesses are reported.** When a word of 3+ syllables gets the default and ends in *-ano, -ono, -olo, -ola, -ile, -ero, -era* (and some others), or in a consonant + *-ia / -ie* that no rule covers (*Calabria* or *Lombardia*?), the generator writes a "check stress" line on stderr. Stdout keeps the `<text> -> <pron>` shape. Typical cases are 3rd-person plurals and *piccolo*-type words. The writer reports the word, and the lead adds it to `LEX`. A writer never edits a `pron` by hand.
- **How reliable it is.** Two lists of everyday A1 words were run. The expected stress is the author's own judgment [inference], so a native should spot-check (§11).
  - List 1: 150 words, written before any tuning. 145 came out right. 4 were wrong without a warning: *rapido, stupido, timido, comodo*, one family, now fixed by the *-ido* rule and `LEX`. 1 was wrong but flagged (*cavolo*).
  - List 2: 152 more words, after that fix. 148 came out right. 3 were wrong without a warning (*uomini, cinema*, and *divano*, which the *-ivano* rule wrongly caught). 1 was wrong but flagged (*frigorifero*). One correct word was flagged needlessly (*tovagliolo*). All of these are now fixed.
  - A review then ran every Italian word in this profile (about 400). It found more errors, now fixed: *capito* and *capitano* (wrongly listed as forms of *capitare*), *mezza* (voiced z not inherited from *mezzo*), *zone, timide, rapide, felici, attrici, ventidue, trentadue, duecento, centouno, si accomodi, fattoria, sui*, and hiatus words in *-eria / -ia* (*biglietteria, scrivania, Lombardia*). A list of 163 inflected and conjugated forms (plurals, feminines, all six persons of 12 verbs, participles, *Lei* imperatives) then came out all right.
  - **What this means.** On dictionary forms, about 97% came out right first time. Silent errors outnumbered flagged ones (7 to 2 across the two lists), so the warning catches only part of the risk.
    - The risk is concentrated in three places: words outside A1 everyday vocabulary, 3rd-person plurals of verbs not in `LEX`, and *-ia / -io* words.
    - The figures cover the author's own lists, judged by the author. They are not an independent measure.
    - The lint cannot catch a wrong but consistent stress; only a native read can (§11).
- **Homographs** with different stress get one `pron`, because the validator wants one per string:
  - *leggere* is taken as the verb (LEHD-jeh-reh), not the adjective *leggère* "light" (feminine plural);
  - *perdono* as the verb "they lose" (PEHR-doh-noh), not the noun "forgiveness";
  - *ancora* "again / still" (ahn-KOH-rah), not *àncora* "anchor".
  Do not use the other reading in the course.
- **Recommended engine default** (as in es): shown in the first stage, then blurred (tap to reveal) after `sounds` plus three lessons; the learner can turn it back on. In practice items there is no aid, as PRACTICE-SPEC requires.

**What the respelling does not show, on purpose** (each goes in `sounds` and card notes instead):
- open vs closed *e* and *o* (`eh`, `oh` for both): the distinction varies by region and is lost in Milan (Bertinetto & Loporcaro 2005);
- voicing of *s* between vowels (`s` always, as in Rome; many speakers and the voice may say a soft z, as in Milan). Only *s* before *b d g l m n r v* is written `z`, because that voicing is general [practitioner opinion, Daily Italian Words];
- syntactic doubling (*a casa*): absent in the North, so an aid that showed it would contradict half the speakers;
- the extra length of *gn, gli, sc, z* between vowels (Bertinetto & Loporcaro call them "intrinsic geminates"): it is automatic, so `BAH-nyoh`, not `BAHN-nyoh`;
- the tap / trill *r* (`r` for one tap, `r-r` across a hyphen for the trill in *terra*), unaspirated *p t k*, and short pure vowels.

**What lesson 1 (`sounds`) must teach, so the aid can be read:**
1. The five vowels are short and pure: *ah eh ee oh oo* in the aid are one sound each, with no glide (the *oh* is not the *o* in *go*).
2. CAPITALS mark the stressed syllable. Italian writes an accent only on a stressed final vowel (*città, perché*), so most stress must be learned with the word, and the aid shows it.
3. *c* and *g* before *e / i* are soft (`ch`, `j`); add *h* to keep them hard (*ch, gh* = `k`, `g`). An *i* after *c, g, sc* and before another vowel only softens the consonant and is not said (*ciao, giorno, lasciare*).
4. *gn* = `ny`, *gli* = `ly`, *sc* before *e / i* = `sh`, *sch* = `sk`, *qu* = `kw`, *z* = `ts` or `dz`, *h* is silent (*ho, hanno*).
5. Double consonants are held longer and change meaning (*palla / pala, anno / ano, penne / pene*). The aid writes the consonant on both sides of the hyphen (`PAHL-lah`).
6. *r* is tapped, and *rr* is trilled; *p t k* have no puff of air. Listen first; the aid is a crutch to turn off once the spelling rules are known.

### 6.1 The key (exact format)

**Format**
- Lowercase ASCII letters. Words are separated by single spaces; syllables inside a word by hyphens.
- In every word of two or more syllables, exactly one syllable, the stressed one, is in CAPITALS. One-syllable words are all lowercase (*è* → `eh`, *tre* → `treh`).
- No punctuation, no accent marks, no apostrophes, no digits. Write numbers as words.
- **Elision joins words:** *l'acqua* → `LAHK-kwah`, *dov'è* → `doh-VEH`, *un'amica* → `oo-nah-MEE-kah`, *anch'io* → `ahn-KEE-oh`. *po'* → `poh`.

**Vowels**

| Italian | Aid | Example |
|---|---|---|
| a | ah | casa → `KAH-sah` |
| e, è, é | eh (open and closed alike) | bene → `BEH-neh`; caffè → `kahf-FEH` |
| i | ee | vino → `VEE-noh` |
| o, ò | oh | nonno → `NOHN-noh` |
| u | oo | uva → `OO-vah` |
| i + vowel after a consonant | y + vowel | piano → `PYAH-noh`; Italia → `ee-TAH-lyah` |
| i between vowels, or starting a word before a vowel | y | gennaio → `jehn-NAH-yoh`; ieri → `YEH-ree` |
| u + vowel (after any consonant, and qu / gu) | w + vowel | buono → `BWOH-noh`; uomo → `WOH-moh`; guerra → `GWEHR-rah` |
| ai, ei, oi, au, eu (falling) | ai, ay, oy, ow, ehw | mai → `mai`; sei → `say`; poi → `poy`; auto → `OW-toh`; euro → `EHW-roh` |
| ui after a consonant other than q / g | oo-ee (two syllables) | lui → `LOO-ee` |
| two of a, e, o; or a stressed i / u next to a vowel | separate syllables | Matteo → `maht-TEH-oh`; mio → `MEE-oh`; farmacia → `fahr-mah-CHEE-ah` |

**Consonants** (only those that differ; all others as written: b d f l m n p r t v)

| Italian | Aid | Example |
|---|---|---|
| c before e, i | ch | cena → `CHEH-nah` |
| ci before a, o, u (i silent) | ch | ciao → `CHAH-oh` |
| c elsewhere; ch; k | k | casa → `KAH-sah`; chiave → `KYAH-veh` |
| g before e, i; gi before a, o, u | j | gelato → `jeh-LAH-toh`; giorno → `JOHR-noh` |
| g elsewhere; gh | g, written gh before an e or ee in the aid | gatto → `GAHT-toh`; spaghetti → `spah-GHEHT-tee`; funghi → `FOON-ghee` |
| gn | ny | bagno → `BAH-nyoh` |
| gli + vowel; gli at the end or before a consonant | ly; lyee | figlio → `FEE-lyoh`; gli → `lyee` |
| sc before e, i; sci before a, o, u | sh | pesce → `PEH-sheh`; lasciare → `lah-SHAH-reh` |
| sch | sk | bruschetta → `broos-KEHT-tah` |
| qu; cqu | kw; k-kw | questo → `KWEHS-toh`; acqua → `AHK-kwah` |
| gu + vowel | gw | lingua → `LEEN-gwah` |
| z | ts (default) or dz (words listed with ʣ in LEX: zero, pranzo, mezzo, zucchero…) | grazie → `GRAH-tsyeh`; zero → `DZEH-roh` |
| s before b, d, g, l, m, n, r, v | z | sbagliato → `zbah-LYAH-toh` |
| s elsewhere | s | casa → `KAH-sah`; rosso → `ROHS-soh` |
| h | (nothing) | ho → `oh`; hanno → `AHN-noh` |
| double consonant | split across the hyphen | notte → `NOHT-teh`; pizza → `PEET-tsah` |
| cc / gg before e, i | t-ch / d-j | faccia → `FAHT-chah`; oggi → `OHD-jee` |
| j (rare) | y | |

**Syllable breaks**
- One consonant goes with the next vowel.
- Two consonants split, except *pr br tr dr cr gr fr vr pl bl cl gl fl*, which stay together. *s* + consonant also splits (`PAHS-tah`, for English readers).
- With three or more consonants, the last two stay together if they form one of those pairs; otherwise only the last goes right.
- *ch, gh, gn, gli, sc(i), qu, gu* count as one consonant.

**Names and English words** inside Italian sentences: avoid them where possible (*Boston* only in English prompts). If one is needed, the generator output is used as is.

### 6.2 `pronPattern`

```
^(?!.*[cC](?![hH]))(?!.*(?<![aA])[iI])(?!.*[aA](?![hHiIyY]))(?!.*(?<![eE])[eE](?![hHeE]))(?!.*(?<![oO])[oO](?![hHoOyYwW]))(?:[abcdefghijklmnoprstvwyz]+|(?:[abcdefghijklmnoprstvwyz]+-)+[ABCDEFGHIJKLMNOPRSTVWYZ]+(?:-[abcdefghijklmnoprstvwyz]+)*|[ABCDEFGHIJKLMNOPRSTVWYZ]+(?:-[abcdefghijklmnoprstvwyz]+)+)(?: (?:[abcdefghijklmnoprstvwyz]+|(?:[abcdefghijklmnoprstvwyz]+-)+[ABCDEFGHIJKLMNOPRSTVWYZ]+(?:-[abcdefghijklmnoprstvwyz]+)*|[ABCDEFGHIJKLMNOPRSTVWYZ]+(?:-[abcdefghijklmnoprstvwyz]+)+))*$
```

It is the Spanish pilot's pattern with the letter set changed: *j, v, z* are added, and *q, u, x* stay out. What it enforces:
- Only the letters the key uses: no *q, u, x*, no accented letters, no apostrophes.
- *c* only inside *ch*; *i* only after *a* (in *ai*).
- *a* only as *ah / ai / ay*; *e* only as *eh / ee / ehw*; *o* only as *oh / oo / oy / ow*.
- Every multi-syllable word has exactly one CAPITAL syllable; one-syllable words are lowercase.
- No punctuation, and single spaces only.

It is compiled with the `u` flag. Tested: it accepts all 23 worked examples below and all 90 sample cards in §9. It rejects the raw Italian of every one of those 90 card targets. Raw Italian nearly always has a bare *a, i, o, u* or an apostrophe, but a few short words pass as they stand (*mai, hai, sai*: their respelling is identical), so the pattern alone cannot prove a `pron` was generated. It cannot catch a wrong but well-formed respelling; the generator and the lint do.

### 6.3 Worked examples (all pass `pronPattern` and equal the generator's output)

| # | Italian | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Ciao! | `CHAH-oh` | Hi! / Bye! | c before i = ch; the i is silent; a-o are two syllables |
| 2 | Buongiorno. | `bwohn-JOHR-noh` | Good morning. | uo = woh; gi before o = j |
| 3 | Grazie mille. | `GRAH-tsyeh MEEL-leh` | Thanks a lot. | z = ts; ie = yeh; double ll split |
| 4 | Arrivederci. | `ahr-ree-veh-DEHR-chee` | Goodbye. | double rr; c before i = ch |
| 5 | Mi chiamo Giulia. | `mee KYAH-moh JOO-lyah` | My name is Giulia. | ch = k; gi = j; li + vowel = ly |
| 6 | la pizza | `lah PEET-tsah` | the pizza | zz = t + ts |
| 7 | gli spaghetti | `lyee spah-GHEHT-tee` | the spaghetti | gli = lyee; gh before e written gh |
| 8 | gli gnocchi | `lyee NYOHK-kee` | the gnocchi | gn = ny; cch = k + k |
| 9 | il figlio | `eel FEE-lyoh` | the son | gli + vowel = ly |
| 10 | il pesce | `eel PEH-sheh` | the fish | sc before e = sh |
| 11 | la palla | `lah PAHL-lah` | the ball | double ll: hold the l |
| 12 | la pala | `lah PAH-lah` | the shovel | single l: compare la palla |
| 13 | il telefono | `eel teh-LEH-foh-noh` | the phone | stress from LEX (antepenultimate) |
| 14 | la farmacia | `lah fahr-mah-CHEE-ah` | the pharmacy | stressed i in hiatus, from LEX |
| 15 | la città | `lah cheet-TAH` | the city | written accent: last syllable |
| 16 | Dov'è il bagno? | `doh-VEH eel BAH-nyoh` | Where is the bathroom? | elision across the apostrophe; gn |
| 17 | C'è un bar? | `cheh oon bahr` | Is there a bar? | one-syllable words are lowercase |
| 18 | Vorrei un caffè. | `vohr-RAY oon kahf-FEH` | I'd like an espresso. | final ei: last syllable stressed |
| 19 | Parlano italiano. | `PAHR-lah-noh ee-tah-LYAH-noh` | They speak Italian. | 3rd person plural from LEX |
| 20 | lo zero | `loh DZEH-roh` | the zero | voiced z (dz), from LEX |
| 21 | sbagliato | `zbah-LYAH-toh` | wrong | s before b = z |
| 22 | Mi piacciono i film. | `mee PYAHT-choh-noh ee feelm` | I like movies. | cci before o = t + ch, i silent |
| 23 | prendere | `PREHN-deh-reh` | to take | -ere verb rule: antepenultimate |

### 6.4 The generator

`tools/target/it/respell.js` (about 220 lines, no dependencies).
- **Usage:** `node tools/target/it/respell.js "Dov'è il bagno?"` → `Dov'è il bagno? -> doh-VEH eel BAH-nyoh`. Several arguments give several lines. `require('./respell.js').respell(text)` returns the string.
- **Words with no vowel or with digits** throw an error. Write numbers as words.
- **Fixing a wrong stress or a voiced z:** add the word to `LEX_SRC` at the top of the file, with the stressed vowel accented (*càvolo*), ï / ü for a full unstressed vowel, and ʣ for a voiced *z*. Every form needs its own entry (*pàrlano* and *parlano* are not linked). Then re-run the writers' rows: the lint will show any row whose `pron` changed.

## 7. Standing practice rule

**Rule: agreement.** Every lesson's practice set keeps re-testing that words agree. There are two strands:
- **(a) Noun-phrase agreement.** Gender and number on articles (including the sound-based choice *il / lo / l'*, *i / gli*, *un / uno / un'*, which is always stated as "X is masculine and starts with …"), possessives, demonstratives, *quanto / molto*, adjectives, and object pronouns matching their noun. It also covers *piace / piacciono* agreeing with the thing liked, and the past participle with *essere* (*è andata*).
- **(b) Verb agreement.** The verb ending matches the subject's person and number, including *Lei* = the *lui / lei* form, *voi* forms, and *c'è / ci sono*.

**Why these two.**
- [research-backed] Agreement errors persist after two years of instruction, with feminine and plural forms the weakest, and object pronouns weakest of all (Santoro 2012, §4.1, §4.3).
- [inference] Agreement is in essentially every Italian sentence from lesson 1 (*buonanotte, buona sera, la pizza, gli spaghetti*). So the rule can be met in every lesson, which matters because the JSON has no exemption field.
- [practitioner opinion] Verb endings join because English speakers default to one form (§4.2), and typed items show that at once.
- **Against: the CILS A1 productive syllabus does not require it** [curriculum convention]. It says "*non è richiesto l'accordo nome-aggettivo*" and does not require participle agreement (§4.4). This profile still makes agreement the standing rule, for three reasons:
  1. CILS sets a pass level for an exam. This course aims at what English speakers fossilise, and Santoro's learners still overused the masculine singular after two years.
  2. Article and verb agreement (*la casa, gli amici, Lei parla*) is not exempted by CILS and carries most of the rule.
  3. An A1 learner who is graded on agreement in practice but not penalised elsewhere loses nothing: practice never gates progress (PRACTICE-SPEC).
  So participle agreement is taught and typed only in `passato-essere`, where it is the lesson's point, and in later mixed items. *Essere* or *avere*, which CILS does require, is that lesson's other half.
- ***Essere* vs *avere*** (§4.4) and the calques (§4.5) are not the standing rule. They cannot be tested before lesson 6 (`essere-avere`) and are artificial in `numbers` or `prepositions`. They are recycled as "mixed neighbour" items instead.

**Count** (`minOrder: 2`, `minType: 2`): in every lesson's practice set, at least **2 `order` items** and at least **2 `type` items** must hinge on agreement, and their `why` must name it with a keyword. A 14-item set has 3 `order` and 3 `type` items (TARGET-BRIEF), so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`order`** hinges if the `why` matches the keywords and **either**:
  - `x` contains an agreement twin of a tile in `a`. A twin is the same word in another gender, number or person:
    - articles: *il / lo / l' / la / i / gli / le*, *un / uno / una / un'*;
    - contracted prepositions: *al / allo / alla / ai / agli / alle*, and the same for *del, nel, sul, dal*;
    - possessives and demonstratives: *mio / mia / miei / mie*, *questo / questa / questi / queste*;
    - *molto / molta / molti / molte*, *quanto / quanta / quanti / quante*;
    - adjective endings: *-o / -a / -i / -e*, *-e / -i*;
    - verb forms of the same verb in another person: *sono / sei / è / siamo / siete*, *ho / hai / ha / hanno*, *parlo / parli / parla / parlano*, *piace / piacciono*, *c'è / ci sono*;
    - object pronouns *lo / la / li / le*;
  - **or** `a` contains article + noun + adjective, where the distractor is the wrong-gender or wrong-number adjective.

  Example: `['or', 'the white shirts', 'le camicie bianche', 'bianchi', 'camicie is feminine plural, so the adjective agrees: bianche.']`
- **`type`** hinges if the `why` matches the keywords and **either**:
  - the fallback words hold an agreement twin of a word in the first accepted answer;
  - **or** the first answer contains an article, possessive, demonstrative or *molto / quanto* form plus a noun;
  - **or** it contains an adjective or participle in *-o / -a / -i / -e* that agrees with its noun or subject;
  - **or** it contains a conjugated verb whose subject the English prompt names as anything other than "he / she / it" (*I, you, we, they, you all*, or "(to a stranger)").

  Example: `['ty', 'We live in Rome', 'Abitiamo a Roma|Noi abitiamo a Roma', 'abitare · Roma', 'abita|abitano', 'The noi form: the verb ending matches the subject, -iamo.']`
- **Accepted answers** always include the version without the subject pronoun and the version with it (*Abitiamo… / Noi abitiamo…*). Leaving out *io* or *tu* is never an error. For *Lei* prompts, list both *Parla…?* and *Lei parla…?*.

**Lessons where the rule is hardest, with two hinges each** (order / type):
- `sounds`: its own deck gives every noun its article.
  - order: *la notte* (x: *il*), *gli gnocchi* (x: *i*)
  - type: "the keys" → *le chiavi* (x: *la*); "the nights" → *le notti*
  - why: "chiave is feminine; the plural article is le."
  - The body introduces *il / la* as "the"; `articles` explains the rest.
- `greetings`:
  - order: *buona notte* or *buona serata* (x: *buono*); *Come sta?* (x: *stai*, prompt "to a stranger")
  - type: "Good evening, ma'am" → *Buonasera, signora*; "How are you? (to a friend)" → *Come stai?* (x: *sta*)
  - why: "the tu form ends in -i."
- `numbers`:
  - order: *Sono le tre* (x: *È*, *la*); *Quanto costano?* (x: *costa*)
  - type: "It's one o'clock" → *È l'una* (x: *Sono*); "two pizzas" → *due pizze* (x: *pizza*)
  - why: "Plural subject: costano." / "Sono le tre: plural, feminine le." / "Plural noun: pizze."
- `questions`:
  - order: *Quante sorelle hai?* (x: *Quanti*); *Di dove sei?* (x: *è*)
  - type: "How many brothers do you have?" → *Quanti fratelli hai?* (x: *Quante*)
  - why: "quanti agrees with fratelli (masculine plural)."
- `prepositions`:
  - order: *Vado al mercato* (x: *alla*); *gli zaini degli studenti* (x: *dei*)
  - type: "the keys of the car" → *le chiavi della macchina* (x: *del*)
  - why: "macchina is feminine, so di + la = della."
- `adverbs`:
  - order: *Ho molti amici* (x: *molto*); *È molto bella* (x: *molta*)
  - type: "I have a lot of friends" → *Ho molti amici* (x: *molto*); "She is very tall" → *È molto alta* (x: *alto*)
  - why: "molti agrees with amici; molto never changes before an adjective."
- `connectors`:
  - order: *Sono stanca ma contenta* (x: *contento*, prompt says a woman speaks)
  - type: "We're tired because we work a lot" → *Siamo stanchi perché lavoriamo molto* (x: *lavorano*)
  - why: "the noi form: lavoriamo."
- `sapere-conoscere`:
  - order: *Conosci Marco?* (x: *Conosce*, prompt "to a friend"); *Lei sa nuotare?* (x: *sai*)
  - type: "Do you know where the station is? (to a stranger)" → *Sa dov'è la stazione?* (x: *sai*)
  - why: "Lei takes the lui/lei form: sa."

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bgender\b|\bsingular\b|\bplural (?:noun|adjective|article|ending|form|verb|subject)|\bverb ending|\bmatch(?:es)? the subject|\b(?:io|tu|lui|lei|noi|voi|loro)(?: ?\/ ?lei)?[ -]form
```

Use them like this:
- For strand (a): "masculine", "feminine", "gender", "agrees / agreement", "singular", "plural noun / adjective / article / ending / form / verb / subject".
- For strand (b): "verb ending", "matches the subject", "the io / tu / lui / lei / Lei / noi / voi / loro form", and "the lui/lei form".

These are deliberately **not** keywords:
- Bare "plural", "ending", "person" and "subject", so that lines about numbers, *-mente* or word order do not count by accident.
- Bare "Lei", so that lines about register ("Use Lei with strangers") do not count.

Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; all results as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| casa is feminine, so piccola. | match | should match |
| The adjective agrees with ragazze: italiane. | match | should match |
| Gender: il problema is masculine. | match | should match |
| parliamo: the verb ending matches the subject (noi). | match | should match |
| Use the Lei form: parla, same as lei. | match | should match |
| With Lei, use the lui/lei form: ha. | match | should match |
| Voi takes the voi form: siete. | match | should match |
| hai: the tu form ends in -i. | match | should match |
| Plural noun, plural article: gli amici. | match | should match |
| piacciono agrees with i film. | match | should match |
| Sono le tre: plural, feminine le. | match | should match |
| studente is masculine and starts with s + consonant: lo studente. | match | should match |
| amici is masculine plural: gli before a vowel. | match | should match |
| zaino is masculine and starts with z: lo, not il. | match | should match |
| Giulia è andata: with essere the participle agrees with the subject. | match | should match |
| la giacca is feminine, so the pronoun is la. | match | should match |
| ci sono: plural subject (due bar). | match | should match |
| molti agrees with amici; molto never changes before an adjective. | match | should match |
| Loro form: hanno. | match | should match |
| Agreement: buona sera, buona notte. | match | should match |
| The io form ends in -o: parlo. | match | should match |
| quante agrees with sorelle (feminine plural). | match | should match |
| With a singular family word, no article: mia madre (but le mie sorelle). | match | should match |
| Lei is polite: use it with strangers. | no match | should not match |
| Use Lei with someone older. | no match | should not match |
| Lei with a capital L means you; lei means she. | no match | should not match |
| Double consonants change the meaning: anno, ano. | no match | should not match |
| c before i sounds like ch. | no match | should not match |
| Numbers 21 and 28 drop the i of venti. | no match | should not match |
| Depending on the time of day, say buongiorno or buonasera. | no match | should not match |
| c'è for one thing, ci sono for more. | no match | should not match |
| Location of a city: a Roma. | no match | should not match |
| Countries take in: in Italia. | no match | should not match |
| Weather uses fare: fa freddo. | no match | should not match |
| Age uses avere, not essere. | no match | should not match |
| perché means both why and because. | no match | should not match |
| Question words come first. | no match | should not match |
| The accent on è makes it the verb. | no match | should not match |
| sapere for facts, conoscere for people. | no match | should not match |
| vorrei is the polite way to order. | no match | should not match |
| dal = da + il. | no match | should not match |
| No article before a family word: mia madre. | no match | should not match |
| non goes before the verb. | no match | should not match |
| The apostrophe replaces the dropped vowel: l'amico. | no match | should not match |
| An ending in -are means an -are verb. | no match | should not match |
| mai needs non before the verb. | no match | should not match |
| The subject comes after the verb in this question. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 21 items.** Their ids lose the `it-` prefix, and each appears exactly once in a `roadmap` field.
- **Reordered:**
  - `gender` goes before `articles`. The article form depends on the noun's gender (and its first sound), so gender must come first. The Spanish pilot uses the same order.
  - `pronouns` goes before `essere-avere`, because conjugating *essere* and *avere* needs the subject pronouns. Both stay in stage 1.
  - `adjectives` moves from mid-stage 2 to straight after `essere-avere`, so agreement is practised from the first description (*Giulia è alta*). *Welcome to Italian 101* teaches adjective agreement with *essere* in Unità 1 (§5).
- **Narrowed and renamed:**
  - `pronouns` ("Subject and object pronouns") becomes "Subject pronouns: io, tu, Lei, voi". Object pronouns move to the new `lo-la` (below), because at lesson 5 the learner has no verbs to put them in front of.
  - `greetings` keeps its title. `articles` becomes "Articles: il, lo, la, l', i, gli, le", to name the forms English speakers miss. `essere-avere`, `ce`, `piacere`, `imperative`, `passato`, `adverbs` and `prepositions` get English glosses in their titles.
- **Added (3):**
  - `lo-la`: object pronouns, the most error-prone agreement domain in Santoro 2012 (§4.3). It completes the roadmap's `it-pronouns`, but its `roadmap` field is empty so that coverage counts `it-pronouns` once.
  - `passato-essere`: the passato prossimo with *essere* and participle agreement (§4.4). *Ho andato* is the best-known English-speaker error, and one lesson cannot cover both auxiliaries and agreement at A1 pace. *Welcome to Italian 101* also gives *avere* and *essere* separate sections. `passato` keeps `roadmap: it-passato` and teaches *avere*.
  - `sapere-conoscere`: one English verb, two Italian ones (§4.11). It is a unit topic in US first-year books, and it carries the "Traps for English speakers" deck, so the false friends of §4.8 get a lesson home.
- **Stages:** the roadmap's three, unchanged in name. Stage 1 now ends with `pronouns` and `essere-avere`; stage 3 grows from 8 to 11 lessons.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `sounds` | Sounds, spelling and stress | it-sounds | The five pure vowels; c and g before e and i (ch, j sounds), ch and gh, gn, gli, sc, z; double consonants (anno / ano, penne / pene); stress, and the written accent on final vowels (città); how to read the aid (§6). Deck nouns are shown with il / la ("the"), explained in `articles`. Trap: reading c, g and sch as in English (bruschetta), single for double consonants, English stress on cognates. | Sounds and spelling |
| 2 | `greetings` | Greetings: tu and Lei | it-greetings | Ciao, buongiorno, buonasera, buonanotte, arrivederci / ArrivederLa; come stai? / come sta?; mi chiamo, piacere, grazie, prego, per favore, scusa / mi scusi. Trap: one English "you"; ciao to a stranger; buongiorno vs buonasera by time of day. First agreement in buono / buona (buonanotte). | Greetings and courtesy |
| 3 | `gender` | Gender and number of nouns | it-gender | Masculine -o / -i, feminine -a / -e, nouns in -e (il padre, la chiave: learn them with the article), il problema, la mano, la foto, invariable plurals (la città / le città, il caffè / i caffè). Trap: defaulting to the masculine singular (Santoro 2012); guessing the gender of -e nouns (§4.1). | People and family |
| 4 | `articles` | Articles: il, lo, la, l', i, gli, le | it-articles | Definite and indefinite articles chosen by gender, number AND first sound: il / lo / l' / la, i / gli / le, un / uno / una / un'. Articles with things in general (Mi piace il caffè). Trap: il studente, i amici, un'amico; dropping the article where English has none (§4.1, §4.10). | Food and drink |
| 5 | `pronouns` | Subject pronouns: io, tu, Lei, voi | it-pronouns | io, tu, lui, lei, Lei, noi, voi, loro; Lei = formal you, written with a capital L, same verb as lei; voi as the only plural you; Loro as a recognition note. Pronouns are usually dropped. Object pronouns move to `lo-la`. Trap: keeping io in every sentence; Lei confused with lei. | About me |
| 6 | `essere-avere` | essere and avere: I am, I have | it-essere-avere | sono, sei, è, siamo, siete, sono; ho, hai, ha, abbiamo, avete, hanno (silent h); origin and nationality (Sono americana), age (Ho trent'anni), avere + fame / sete / freddo / caldo / paura / ragione. Trap: Sono 25 anni, Sono freddo (§4.5); è vs e. | Feelings and states |
| | | **Stage 2: First sentences** | | | |
| 7 | `adjectives` | Adjectives: agreement and position | it-adjectives | Four-form adjectives (alto, alta, alti, alte), two-form adjectives in -e (grande, grandi), colors after the noun, a few before (bello, buono, piccolo), bello / buono shortening for recognition. Trap: la camicia bianco, le ragazze italiani (§4.1). | Shopping and clothes |
| 8 | `present` | Present tense: -are, -ere, -ire | it-present | Regular endings in the six persons; Lei takes the lui / lei form, voi the -ate / -ete / -ite form; -isc- verbs (capisco, finisco); the present also means "I am doing" and near future. Trap: one form for every subject (§4.2); spelling of c / g verbs (cerchi, paghi). | Work and study |
| 9 | `questions` | Questions and question words | it-questions | che / cosa / che cosa, chi, dove, quando, come, perché, quanto / quanta / quanti / quante, quale / qual è; yes / no questions by intonation only. Trap: no do in Italian; quanto agrees (Quante sorelle hai?); qual è has no apostrophe. | Questions and connectors |
| 10 | `ce` | c'è and ci sono: there is, there are | it-ce | c'è + singular, ci sono + plural; c'è vs è (C'è una farmacia / La farmacia è lì); questions (C'è un bagno?). Trap: c'è with a plural (c'è due bar); dropping ci. | Around town and directions |
| 11 | `numbers` | Numbers, time and dates | it-numbers | 0 to 1,000; ventuno, ventotto (venti drops its i); cento, mille / duemila; È l'una / Sono le tre; dates (il quindici settembre, il primo maggio); prices in euros and cents; Quanto costa / costano? Trap: È le tre; un euro / dieci euro (invariable). | Numbers, time and prices |
| 12 | `possessives` | Possessives and demonstratives | it-possessives | il mio / la mia / i miei / le mie with the article; no article before a singular family noun (mia madre, but le mie sorelle); il Suo (Lei); questo and quello in all forms. Trap: the possessive agrees with the thing owned, not the owner (la sua casa = his or her house); la mia madre (§4.10). | People and family |
| 13 | `prepositions` | Prepositions: a, di, da, in, and al, del, nel | it-prepositions | a (cities, a casa), in (countries, regions, in banca, in treno), di (origin of a city, possession: la macchina di Marco), da (from, at someone's place: dal dottore; since: da una settimana), su, con, per; contracted forms al, del, nel, sul, dal. Trap: Vado alla banca, al dentista, Sono di America (§4.9); the Marco's car calque. | Travel and transport |
| | | **Stage 3: Doing things** | | | |
| 14 | `irregular` | andare, fare, venire, stare | it-irregular | vado, faccio, vengo, sto in all persons; andare a / in, venire da; fare + weather (fa caldo, fa freddo), fare colazione; stare bene / male, stare per. Trap: È freddo oggi (§4.5); andare used for venire when coming toward the speaker. | Days, dates and weather |
| 15 | `modals` | potere, dovere, volere | it-modals | posso, devo, voglio + infinitive; Può aiutarmi? (Lei); voglio vs vorrei (politeness); posso vs so (ability: so nuotare). Trap: Luisa può suonare il piano for a skill (§4.11); voglio to a waiter. | Health and emergencies |
| 16 | `piacere` | piacere: mi piace, mi piacciono | it-piacere | mi / ti / gli / le / Le / ci / vi piace(-ciono); the thing liked is the subject; mi piace + infinitive; anche a me / neanche a me; non mi piace. Trap: Io piace la pizza, Mi piace i libri (§4.6). | Likes and free time |
| 17 | `reflexive` | Reflexive verbs and daily routine | it-reflexive | mi alzo, ti svegli, si chiama, ci vediamo; daily routine with times (alle sette); the pronoun goes before the conjugated verb and attaches to an infinitive (devo alzarmi). Trap: Chiamo Emma for "My name is Emma"; leaving out the pronoun (Alzo alle sette). | Home and routine |
| 18 | `lo-la` | Object pronouns: lo, la, li, le | (added) | Direct object pronouns agree with the thing they replace (il libro → lo, la borsa → la, i biglietti → li, le scarpe → le); placed before the conjugated verb (Lo prendo) or attached to an infinitive (Posso provarla?); l' before a vowel. Trap: Vedo lo; la for a masculine noun (§4.3, Santoro 2012). | Shopping and clothes |
| 19 | `imperative` | Imperative and vorrei: ordering and asking | it-imperative | vorrei to order (Vorrei un caffè); tu imperative (Senti! Scusa! Guarda!), noi (Andiamo!), negative non + infinitive (Non toccare!); the Lei imperative heard from staff and strangers (Prego, si accomodi; prenda; giri) for recognition. Trap: voglio to a waiter; Non tocca for a negative tu command. | Café and menu Italian |
| 20 | `passato` | Passato prossimo with avere | it-passato | avere + past participle (-ato, -uto, -ito); irregular participles fatto, visto, preso, letto, scritto, detto; ieri, la settimana scorsa, due anni fa. Trap: using the present for finished events; translating "I visited" with anything but the passato prossimo (§4.4). | Likes and free time |
| 21 | `passato-essere` | Passato prossimo with essere: sono andato, sono andata | (added) | essere with a closed list of motion and change verbs (andare, venire, arrivare, partire, tornare, uscire, entrare, stare, essere, nascere) and with reflexives (mi sono alzata); the participle agrees like an adjective (Giulia è andata, siamo arrivati). Trap: Ho andato; Giulia è andato (§4.4). | Travel and transport |
| 22 | `adverbs` | Adverbs: time, place and quantity | it-adverbs | sempre, mai (non… mai), già, ancora, ora / adesso, presto, tardi; qui, lì / là, vicino, lontano; molto, poco, troppo: invariable before an adjective (molto bella), agreeing before a noun (molti amici). Trap: Ho molto amici, È molta bella (§4.12); a missing non with mai. | Days, dates and weather |
| 23 | `connectors` | e, ma, perché, quando, se | it-connectors | e / ed, o, ma, perché (why and because), quando, se, allora, anche / anch'io, neanche. Trap: perché answered with perché; ed only before e- (ed Elena); si vs se vs sì spelling. | Questions and connectors |
| 24 | `sapere-conoscere` | sapere and conoscere: two ways to know | (added) | sapere = know a fact or know how (So dov'è, So nuotare); conoscere = know a person or place (Conosci Marco?, Conosco Roma); the lesson ends with the false friends of §4.8 (parenti, camera, libreria). Trap: Sai Giovanni?, Non conosco come… (§4.11). | Traps for English speakers |

Per-lesson notes for writers:
- Every lesson's practice set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: *essere / avere* (*sono stanco / ho fame*), *piace / piacciono*, *c'è / è*, and *molto* agreement.
- Items that differ only by an accent (*è / e*, *sì / si*, *là / la*) are strict (§10). They belong mainly in `essere-avere`, `greetings` (*sì*), `adverbs` (*là, lì*) and `connectors` (*se / sì*).
- `passato-essere` items accept only the participle that agrees with the subject the prompt gives. When the prompt's "I" or "you" has no gender, add "(a woman speaking)" or "(to a man)", so that only one form is natural (TARGET-BRIEF: prompts must lead to an accepted answer).
- `imperative`: the *Lei* imperative (*giri, prenda, si accomodi*) is for recognition (mc and order items only). Typed production is *vorrei*, the *tu* and *noi* imperatives, and *non* + infinitive.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards in total). Card shape: `target | pron | meaning | note`.
- `target`: Italian, with its article for nouns (*la chiave*, never *chiave*; this includes the Sounds deck).
- `pron`: generated (§6).
- `meaning`: short American English.
- `note`: one English line, or empty. Agreement, the *tu / Lei* choice and false-friend warnings go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| First steps | Sounds and spelling · Greetings and courtesy · About me · People and family |
| Everyday words | Numbers, time and prices · Days, dates and weather · Food and drink · Shopping and clothes · Home and routine |
| Out and about | Around town and directions · Travel and transport · Health and emergencies · Work and study |
| Conversation | Feelings and states · Likes and free time · Questions and connectors |
| Watch out | Traps for English speakers · Café and menu Italian |

**Deck rules for writers**
- Nouns in decks other than "Sounds and spelling" mostly appear in short phrases that force agreement (*la camicia bianca*, *le scarpe nere*). This keeps the standing rule visible in review too.
- Adjectives and participles describing people: give the form that fits the sentence, and name the other gender in the note (*Sono stanco* — "A woman says stanca").
- Use *Lei* phrases where a traveller meets staff or strangers (shop, café, directions, health), and say so in the note ("Lei form").
- **Traps for English speakers** (about 18 cards):
  - about 11 false friends (§4.8: *parenti, camera, libreria, morbido, educato, attualmente, eventualmente, sensibile, fattoria, annoiare*; leave *preservativo* to a note, not a card);
  - about 5 calques (*ho freddo / caldo / fame / X anni*, *fa freddo*);
  - 2 *sapere / conoscere* cards.
- **Café and menu Italian** (about 16 cards): menu words Americans already say, with the Italian meaning or sound.
  - Meaning traps: *latte* = milk; *peperoni* = bell peppers; *panino / panini* singular and plural; *salame / salami*; *biscotti* = any cookies.
  - Sound traps: *bruschetta* with `sk`, *gnocchi*, *prosciutto*, *focaccia*.
  - Ordering: *vorrei, un caffè, un cappuccino, il conto*.
  - All [inference] from general knowledge, so they are in the §11 native-check list. Do not claim time-of-day coffee rules, or say that a dish "does not exist in Italy".

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Sounds and spelling** (First steps). Words that show each spelling rule: c and g before e and i, ch, gn, gli, sc, z and double consonants. Lessons: `sounds`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| il cielo | `eel CHEH-loh` | sky | c before e or i sounds like English ch. The i in cie is silent. |
| la chiave | `lah KYAH-veh` | key | ch before i or e is a hard k sound. |
| il gelato | `eel jeh-LAH-toh` | ice cream | g before e or i sounds like English j. |
| gli gnocchi | `lyee NYOHK-kee` | gnocchi (potato dumplings) | gn sounds like ny in canyon. gli is the article before gn. |
| la notte | `lah NOHT-teh` | night | Hold the double t. note (notes) has a single t. |

**2. Greetings and courtesy** (First steps). Hello, goodbye, please, thanks and polite openers for strangers. Lessons: `greetings`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Buongiorno. | `bwohn-JOHR-noh` | Good morning. / Hello. | To anyone, from morning to early afternoon. |
| Buonasera. | `bwoh-nah-SEH-rah` | Good evening. / Hello. | From mid-afternoon on. Also a polite hello as you walk into a shop. |
| Ciao! | `CHAH-oh` | Hi! / Bye! | Informal (tu): friends, family, kids. To a stranger: Buongiorno. |
| Come sta? | `KOH-meh stah` | How are you? (formal) | Lei form, to a stranger or someone older. To a friend: Come stai? |
| Mi scusi. | `mee SKOO-see` | Excuse me. | Lei form, to get a stranger's attention. To a friend: Scusa. |

**3. About me** (First steps). Name, where you are from, age, languages and what you do. Lessons: `pronouns`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Mi chiamo Emma. | `mee KYAH-moh EHM-mah` | My name is Emma. | Literally: I call myself Emma. |
| Sono americano. | `SOH-noh ah-meh-ree-KAH-noh` | I'm American. | A woman says americana. Nationalities are lowercase. |
| Vengo dagli Stati Uniti. | `VEHN-goh DAH-lyee STAH-tee oo-NEE-tee` | I'm from the United States. | dagli = da + gli. For a city: Sono di Boston. |
| Ho trent'anni. | `oh trehn-TAHN-nee` | I'm thirty. | Age uses avere: literally, I have thirty years. |
| Parlo un po' di italiano. | `PAHR-loh oon poh dee ee-tah-LYAH-noh` | I speak a little Italian. | No io needed: the -o ending already says I. Write po' with an apostrophe. |

**4. People and family** (First steps). Family members, friends and words to describe people. Lessons: `gender`, `possessives`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| mia madre | `MEE-ah MAH-dreh` | my mother | No article before mia with a singular family word. Plural: le mie sorelle. |
| i genitori | `ee jeh-nee-TOH-ree` | parents | i parenti means relatives, not parents. |
| il fratello | `eel frah-TEHL-loh` | brother | i fratelli can mean brothers, or brothers and sisters. |
| la nonna | `lah NOHN-nah` | grandmother | Grandfather: il nonno. Grandparents: i nonni. |
| Mio padre è simpatico. | `MEE-oh PAH-dreh eh seem-PAH-tee-koh` | My father is nice. | simpatico agrees with padre (masculine). For mia madre: simpatica. |

**5. Numbers, time and prices** (Everyday words). Numbers to 1,000, telling the time, prices in euros. Lessons: `numbers`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| ventuno | `vehn-TOO-noh` | twenty-one | venti drops its i before uno and otto: ventuno, ventotto. |
| Che ore sono? | `keh OH-reh SOH-noh` | What time is it? | Also: Che ora è? |
| Sono le tre e mezza. | `SOH-noh leh treh eh MEHD-dzah` | It's half past three. | le (ore) is feminine plural. One o'clock: È l'una. |
| Quanto costa? | `KWAHN-toh KOHS-tah` | How much is it? | For more than one thing: Quanto costano? |
| dieci euro | `DYEH-chee EHW-roh` | ten euros | euro does not change in the plural: un euro, dieci euro. |

**6. Days, dates and weather** (Everyday words). Days, months, dates, yesterday and tomorrow, and the weather. Lessons: `irregular`, `adverbs`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| lunedì | `loo-neh-DEE` | Monday; on Monday | No word for on. Every Monday: il lunedì. Days are lowercase. |
| Fa caldo. | `fah KAHL-doh` | It's hot. | Weather uses fare: fa freddo, fa bel tempo. |
| Piove. | `PYOH-veh` | It's raining. | Also: Sta piovendo. |
| il quindici settembre | `eel KWEEN-dee-chee seht-TEHM-breh` | September 15 | Day before month; months are lowercase. |
| ieri | `YEH-ree` | yesterday | oggi = today; domani = tomorrow. |

**7. Food and drink** (Everyday words). Ordering at a bar, trattoria or restaurant, and everyday food. Lessons: `articles`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| un caffè | `oon kahf-FEH` | an espresso | In Italy un caffè is an espresso. The accent marks the stressed final syllable. |
| un bicchiere d'acqua | `oon beek-KYEH-reh DAHK-kwah` | a glass of water | d' = di before a vowel. |
| Il conto, per favore. | `eel KOHN-toh pehr fah-VOH-reh` | The check, please. |  |
| la colazione | `lah koh-lah-TSYOH-neh` | breakfast | Lunch: il pranzo. Dinner: la cena. |
| il pane | `eel PAH-neh` | bread |  |

**8. Shopping and clothes** (Everyday words). Clothes, colors, sizes and paying. Lessons: `adjectives`, `lo-la`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| la camicia bianca | `lah kah-MEE-chah BYAHN-kah` | the white shirt | Color after the noun, and it agrees: camicia bianca, pantaloni bianchi. |
| le scarpe nere | `leh SKAHR-peh NEH-reh` | the black shoes |  |
| Che taglia porta? | `keh TAH-lyah POHR-tah` | What size do you wear? | Lei form, from a shop assistant. |
| Posso provarla? | `POHS-soh proh-VAHR-lah` | Can I try it on? | la = it, for a feminine thing (la giacca). For il maglione: Posso provarlo? |
| Lo prendo. | `loh PREHN-doh` | I'll take it. | lo for a masculine thing (il maglione). For la borsa: La prendo. |

**9. Home and routine** (Everyday words). Rooms and things at home, and a daily routine with reflexive verbs. Lessons: `reflexive`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Mi alzo alle sette. | `mee AHL-tsoh AHL-leh SEHT-teh` | I get up at seven. | alzarsi is reflexive: mi with io. alle = a + le. |
| Mi faccio la doccia. | `mee FAHT-choh lah DOHT-chah` | I take a shower. |  |
| la cucina | `lah koo-CHEE-nah` | the kitchen | Also: cooking, cuisine. |
| la camera da letto | `lah KAH-meh-rah dah LEHT-toh` | the bedroom | camera = room, not camera. |
| il bagno | `eel BAH-nyoh` | the bathroom |  |

**10. Around town and directions** (Out and about). Places in town, asking where things are, and following directions. Lessons: `ce`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Dov'è la stazione? | `doh-VEH lah stah-TSYOH-neh` | Where is the station? | dov'è = dove è. |
| C'è una farmacia qui vicino? | `cheh OO-nah fahr-mah-CHEE-ah kwee vee-CHEE-noh` | Is there a pharmacy near here? | c'è for one thing; for more: ci sono. |
| a destra | `ah DEHS-trah` | on the right; to the right | a sinistra = left; dritto = straight ahead. |
| Giri a sinistra. | `JEE-ree ah see-NEES-trah` | Turn left. | Lei form: what a stranger will say to you. |
| la piazza | `lah PYAHT-tsah` | the square |  |

**11. Travel and transport** (Out and about). Tickets, stations, airports, getting around and hotel basics. Lessons: `prepositions`, `passato-essere`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| il biglietto | `eel bee-LYEHT-toh` | the ticket |  |
| Vado in treno. | `VAH-doh een TREH-noh` | I'm going by train. | in + vehicle: in macchina, in autobus. But a piedi = on foot. |
| l'aeroporto | `lah-eh-roh-POHR-toh` | the airport | l' before a vowel. |
| A che ora parte il treno? | `ah keh OH-rah PAHR-teh eel TREH-noh` | What time does the train leave? |  |
| Sono arrivata ieri. | `SOH-noh ahr-ree-VAH-tah YEH-ree` | I arrived yesterday. | Said by a woman; a man says arrivato. arrivare takes essere. |

**12. Health and emergencies** (Out and about). Saying what hurts, the pharmacy, and asking for help. Lessons: `modals`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Mi fa male la testa. | `mee fah MAH-leh lah TEHS-tah` | My head hurts. | Literally: the head hurts me. la testa, not mia testa. |
| Sto male. | `stoh MAH-leh` | I feel sick. | stare for how you feel: sto bene, sto male. |
| Aiuto! | `ah-YOO-toh` | Help! |  |
| Può chiamare un'ambulanza? | `pwoh kyah-MAH-reh oo-nahm-boo-LAHN-tsah` | Can you call an ambulance? | può: potere, Lei form. |
| Devo andare in farmacia. | `DEH-voh ahn-DAH-reh een fahr-mah-CHEE-ah` | I have to go to the pharmacy. | dovere + infinitive. in farmacia, with no article. |

**13. Work and study** (Out and about). Jobs, the workplace, classes and everyday work verbs. Lessons: `present`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Lavoro in un ufficio. | `lah-VOH-roh een oon oof-FEE-choh` | I work in an office. |  |
| Studio l'italiano. | `STOO-dyoh lee-tah-LYAH-noh` | I'm studying Italian. | The simple present also means I am studying. With studiare the language takes l'. |
| la riunione | `lah ree-oo-NYOH-neh` | the meeting |  |
| Faccio l'insegnante. | `FAHT-choh leen-seh-NYAHN-teh` | I'm a teacher. | fare + article + job is very common. Also: Sono insegnante. |
| il collega | `eel kohl-LEH-gah` | colleague (male) | A woman: la collega. Plural: i colleghi, le colleghe. |

**14. Feelings and states** (Conversation). How you feel, with essere, avere and stare. Lessons: `essere-avere`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Sono stanco. | `SOH-noh STAHN-koh` | I'm tired. | A woman says stanca. |
| Ho fame. | `oh FAH-meh` | I'm hungry. | avere + noun: ho sete, ho freddo, ho paura. |
| Sono contenta. | `SOH-noh kohn-TEHN-tah` | I'm happy. | Said by a woman; a man says contento. |
| Ho freddo. | `oh FREHD-doh` | I'm cold. | Not Sono freddo: that means I am a cold person. |
| Che noia! | `keh NOH-yah` | How boring! | annoiare means to bore, not to annoy. |

**15. Likes and free time** (Conversation). Hobbies, sports, likes and dislikes, and what you did at the weekend. Lessons: `piacere`, `passato`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Mi piace il calcio. | `mee PYAH-cheh eel KAHL-choh` | I like soccer. | Literally: soccer pleases me. The article is required. |
| Mi piacciono i film italiani. | `mee PYAHT-choh-noh ee feelm ee-tah-LYAH-nee` | I like Italian movies. | A plural thing takes piacciono. film does not change in the plural. |
| Ti piace ballare? | `tee PYAH-cheh bahl-LAH-reh` | Do you like to dance? |  |
| il fine settimana | `eel FEE-neh seht-tee-MAH-nah` | the weekend | Also: il weekend. |
| Ho visto un film. | `oh VEES-toh oon feelm` | I saw a movie. | Passato prossimo: avere + visto. |

**16. Questions and connectors** (Conversation). Question words and the small words that join sentences. Lessons: `questions`, `connectors`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| Perché? | `pehr-KEH` | Why? | perché also means because. |
| Quando? | `KWAHN-doh` | When? |  |
| Quanti anni hai? | `KWAHN-tee AHN-nee ai` | How old are you? | Literally: how many years do you have? quanti agrees with anni. |
| ma | `mah` | but |  |
| anche | `AHN-keh` | also; too | Me too: anch'io. |

**17. Traps for English speakers** (Watch out). False friends, calques and know vs know. Lessons: `sapere-conoscere`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| la libreria | `lah lee-breh-REE-ah` | bookstore | Library = la biblioteca. |
| i parenti | `ee pah-REHN-tee` | relatives | Parents = i genitori. |
| la camera | `lah KAH-meh-rah` | room | A camera is la macchina fotografica. |
| Ho caldo. | `oh KAHL-doh` | I'm hot. | Feeling hot uses avere, not essere. |
| Conosci Marco? | `koh-NOH-shee MAHR-koh` | Do you know Marco? | People and places: conoscere. Facts and skills: sapere. |

**18. Café and menu Italian** (Watch out). Menu words Americans already say differently, and ordering politely. Lessons: `imperative`.

| Italian | `pron` | Meaning | Note |
|---|---|---|---|
| un latte | `oon LAHT-teh` | a glass of milk | latte = milk. The coffee drink is a latte macchiato. |
| i peperoni | `ee peh-peh-ROH-nee` | bell peppers | Not pepperoni. Spicy salami: salame piccante. |
| un panino | `oon pah-NEE-noh` | a sandwich | One panino, two panini. |
| la bruschetta | `lah broos-KEHT-tah` | bruschetta | sch is a hard sk sound. |
| Vorrei un cappuccino. | `vohr-RAY oon kahp-poot-CHEE-noh` | I'd like a cappuccino. | vorrei = I would like: the polite way to order. |

**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js`, and the output was checked.
- **Names:**
  - Italian: Giulia, Marco, Luca, Chiara, Francesca, Matteo, Sofia, Alessandro, Giorgia, Federica, Martina, Simone, Giorgio, Elena, Paolo, Davide.
    - *Andrea* is a man's name in Italy; use it only for a man, with a note the first time.
    - *Sofia, Elena, Paolo, Davide* depend on `LEX` entries (hiatus or stress). Other names need a check with the generator first.
  - English-speaking learner characters: Emma, Jack, Ryan, Megan. They appear in English prompts and in *Mi chiamo Emma*.
  - No celebrities.
- **Places:**
  - Italy: Roma, Milano, Firenze, Venezia, Napoli, Bologna, Torino, Palermo, Verona, Siena; regions Toscana, Sicilia, Puglia, Lazio.
  - US cities appear only in English prompts, or as *Sono di Boston* in notes. They are never in a `pron`.
- **Food:** caffè, cappuccino, cornetto, gelato, pizza, pasta, spaghetti, gnocchi, risotto, lasagne, bruschetta, prosciutto, mozzarella, formaggio, pane, olio, basilico, pomodoro, insalata, tiramisù, vino, acqua.
- **Money:** euros and cents (*dieci euro*, *cinquanta centesimi*), written in words in Italian strings. Prices are realistic for Italy (*un caffè* about one euro) [inference].
- **Measures and dates:** day–month order (*il quindici settembre*); kilometres, kilograms and degrees Celsius; the 24-hour clock in timetables (*alle diciotto*), with a note.
- **Settings:** a café (*il bar*), a trattoria, a market, a train station, a hotel reception, a pharmacy, a family Sunday lunch with *la nonna*, a weekend in Florence; for heritage learners, calling relatives in Italy.

## 10. Typing and script

**Script.** Latin letters plus *à è é ì ò ù*; *í ó ú* also occur in some spellings and are accepted. `targetScript`: `[A-Za-zÀÈÉÌÍÒÓÙÚàèéìíòóùú]`. Every Italian string must contain at least one character from this class.

**Accent bar** (`keys`): `à è é ì ò ù`, in that order.
- *é* is there for *perché, né, sé* and the *-tré* numbers (*ventitré*).
- Capitals are not on the bar, and the matcher does not check case. A learner typing *È* at the start of a sentence can type *è*.

**`accents: true`.** As in the Spanish pilot, the flag means three things:
- the language uses accent marks;
- they are part of the correct answer;
- an answer that differs only in accents is graded **"almost"** (accepted, with the correct form shown), never silently accepted.

The validator's `fold` (NFD, strip combining marks) folds *è* and *é* to *e*. So *perchè* for *perché* is "almost", which is the right result: native writers often confuse the two too [inference].

**Strict items** (marked `'!strict'`, so an accent-only difference is wrong, not "almost"). Mark an item strict when the accent separates two words:
- *è / e* ("is" / "and"): every item in `essere-avere` and `adjectives` where the answer has *è*;
- *sì / si* ("yes" / reflexive *si*, "oneself"), *là / la*, *lì / li*, *dà / da*, *né / ne*, *tè / te*;
- *se / sé* only if taught (not at A1);
- any `mc` item whose options differ only by an accent (the validator already demands `!strict` when a fill distractor differs only by an accent).

Everything else is "almost": *perché* typed *perche*, *città* typed *citta*, *caffè* typed *caffe*, *lunedì* typed *lunedi*. The double letters are not accents: *palla / pala*, *anno / ano* differ in a letter, so a wrong double consonant is always **wrong**. The `fold` does not touch them.

**The apostrophe is spelling.** Italian is the first course in this pipeline where the apostrophe is part of a word:
- elision: *l'amico, un'amica, dell'acqua, all'una, c'è, dov'è, com'è, quest'anno, anch'io*;
- truncation: *un po'*;
- the imperatives *va', fa', da', di', sta'* (not taught at A1).

Rules for authors:
- write the apostrophe in every `a` entry, card target and example;
- never list *lo amico* or *la amica* as accepted;
- *qual è* has **no** apostrophe (a common native error too); *un po'* never has an accent (*un pò* is wrong).

**Engine checks for the lead** (the validator's `pn` keeps `'` and folds ’ ‘ ʼ to `'`; the app's matcher may differ):
1. ’ must equal `'` in the app's matcher, as it does in `validate.js`.
2. A space after the apostrophe (*l' amico*), which phone keyboards often insert, should be normalised to *l'amico* before comparing. Otherwise a correct answer fails. Suggested rule: delete spaces after `'`.
3. *e'* typed for *è* (old typewriter style, still seen in texting): grade it "almost", not right. Suggested rule: fold *e'* at word end to *è* before the accent comparison.
4. The apostrophe must not be stripped as punctuation. If it were, *l'amico* and *lamico* would match. PRACTICE-SPEC strips only `. , ! ? ~` and quotes; check that "quotes" does not include `'`.

**Punctuation.** Italian has no ¿ ¡. The engine strips `. , ! ? ~` and quotes. Authors still write the final punctuation in `a[0]`, card targets and examples.

**Case.** Not checked. Authors capitalise the first word of sentences, *Lei* (formal you) and *ArrivederLa*. Language names, nationalities, days and months are lowercase in Italian (*italiano, americano, lunedì, settembre*), and model answers must follow that.

**What a typed answer must include**
- Every word Italian requires: articles (*Mi piace il caffè*, *L'Italia*), reflexive pronouns (*Mi chiamo*), *ci* in *c'è / ci sono*, *non* with *mai*.
- The right article form (*lo studente, gli amici, un'amica*), the right agreement and verb ending (the standing rule), and the right auxiliary in the passato prossimo.
- Double consonants and apostrophes as spelled; accent marks on strict items.

**What it need not include**
- Subject pronouns. Authors list the variants with and without *io / tu / lui…* in `a`. For *Lei* prompts, list both *Parla…* and *Lei parla…*.
- Final punctuation, capital letters.
- Regional forms, which the course never asks for.

**`fill` and tile fallbacks.** The three wrong options `o` should be agreement or person twins wherever possible (*bianca → bianco, bianchi, bianche*; *abitiamo → abita, abitano, abito*; *lo → il, la, l'*), so that the tap fallback still tests the standing rule.

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **Stress and hiatus in `respell.js`**: the 308 `LEX` forms and the suffix rules (§6). They come from the author's knowledge, not a dictionary. A native, or a dictionary with stress marks (DiPI, DOP), should check `LEX` and a sample of the writers' rows. The two test lists in §6 were judged by the author, so their 97% is not an independent measure.
2. **Voiced z (`ʣ` list)**: *zero, zona, zucchero, zucchina, pranzo, mezzo, romanzo, azzurro, dozzina, benzina, zaino, zebra*. Voicing of *z* varies by region and word; the list follows the author's sense of the standard.
3. **The Café and menu deck's claims** (*latte* = milk when ordered, *peperoni* = bell peppers, *biscotti* = cookies in general), and **heritage words** in §5 (*gabagool*). They are [inference] or general knowledge, not from opened sources.
4. **False-friend replacements** in §4.8 (*morboso, istruito, in realtà, alla fine, ragionevole, dare fastidio, conservante*).
5. **Greeting times**: *buongiorno* until early afternoon, *buonasera* from mid-afternoon, *buonanotte* only late or on leaving at night, and *Buon pomeriggio* as the app's afternoon greeting. No source on greetings by time of day was opened; *buon pomeriggio* is less common in speech than *buonasera* [inference].
6. **Sample cards**: *Faccio l'insegnante*, *Mi faccio la doccia*, *Che taglia porta?*, *Mi fa male la testa*, *Sto male* = "I feel sick", *Studio l'italiano*. The author believes they are natural, but they are unverified.
7. **The homograph choices** (*leggere, perdono, ancora*) and the decision to show *s* between vowels as `s` (§6).

**Evidence that could not be opened, or was read only in part**
- **Gender and agreement:**
  - Santoro 2012 was read in full through a summary. Its tables and text disagree on some figures (for example, written pronoun accuracy), so §4 cites the direction, not the decimals.
  - Ayoun & Maranzana 2022 was read as an abstract only, with no accuracy rates.
- **Auxiliary selection:** the Edinburgh thesis was read as an abstract, and its author and date were not shown on the page. Rastelli 2007 (Bergamo) appeared in search results but was not opened.
- **Clitics:** Bennati 2007 covers near-natives only. No beginner data on placement (*vedo lo*) was opened.
- **Double consonants:** Mirisis 2017's Italian results chapter was not read in detail, so no accuracy figures are given.
- **Stress statistics:** Thornton et al. 1997 is known only through Spinelli et al. 2016. Whether the figures are by type or by token is not stated there.
- **No fetched source** for these, all tagged [practitioner opinion] or [inference]:
  - verb-ending errors and pronoun overuse;
  - article omission and *la mia madre*;
  - *molto* agreement;
  - accent and apostrophe errors;
  - aspirated *p t k* and English *r* (named on a blog only);
  - cognate stress.
  An English-L1 learner corpus of Italian (for example VALICO, or a US university corpus) should be checked.
- **False friends:** teaching lists only, with no frequency or error data.
- **Wikipedia's *Italian phonology*** was blocked. Regional facts come from Bertinetto & Loporcaro 2005 alone.

**Learners**
- No survey of why people in the US study Italian was found. Duolingo gave no Italian motive data or US rank for Italian. The La Gazzetta piece is six testimonials.
- MLA figures were read through a Wikipedia table, not the MLA report. No pre-2021 Italian enrolment counts were shown.
- The number of US residents who speak Italian at home (ACS table B16001) was not opened.
- *Tu* first, *Lei* in lesson 2 is [inference] plus one practitioner guide (FluentU). No textbook statement on the order was opened.

**Curriculum**
- One US first-year course book was checked (*Welcome to Italian 101*, Palomar College), through its contents only. *Prego!* and *Avanti!* contents were not readable.
- The CILS A1 lines quoted in §4.4 and §7 come from the Istituto Italiano di Cultura Buenos Aires page, read twice; the Siena original was not opened.

**Engine and pipeline** (for the lead)
- Apostrophe handling: ’ vs ', a space after `'`, *e'* for *è*, and `'` not stripped (§10).
- What `accents:true` means in the engine ("almost", not silent acceptance), and that *è* and *é* fold together (§10).
- `respell.js` writes warnings to stderr. A writer piping output must not mistake them for rows, and the lead should collect them to grow `LEX`.
- `lo-la`, `passato-essere` and `sapere-conoscere` have an empty `roadmap` field. The roadmap's own lesson links should point `it-pronouns` → `pronouns` and `it-passato` → `passato`.
- `greet` uses *Buonanotte* for late night, glossed "Good night (you're up late)", as the Spanish pilot does.

**Not verified at all**
- How well a learner reads the respelling. No study compares aid types for this pair.
- Whether `it-IT` TTS voices on the target devices voice intervocalic *s* or *z* the way the aid assumes (§6). The aid does not depend on it, except for the `ʣ` list.

## Sources

Web pages opened and used for this profile (2026-11-18):
- [Santoro, M. (2012). Morphological Variability in Interlanguage Grammars: New Evidence from the Acquisition of Gender and Number in Italian Determiner Phrases and Direct Object Pronouns. *Canadian Journal of Applied Linguistics* 15(1), 167–189](https://journals.lib.unb.ca/index.php/CJAL/article/download/19952/21844/26555)
- [Ayoun, D. & Maranzana, S. (2022). The second language acquisition of grammatical gender and number in Italian. In Ayoun (ed.), *The Acquisition of Gender* (abstract, University of Arizona record)](https://experts.arizona.edu/en/publications/the-second-language-acquisition-of-grammatical-gender-and-number-/)
- [Lexical conditions on syntactic knowledge: auxiliary selection in native and non-native grammars of Italian (thesis, University of Edinburgh repository; abstract; author and date not shown)](https://era.ed.ac.uk/items/f60c4c8b-c6e2-4d46-a072-290e80fb8654)
- [Bennati, E. (2007). Object Clitic Climbing in Adult L2 Italian: Some Experimental Evidence from L1 English and L1 Spanish Near-Natives. *Nanzan Linguistics* Special Issue 3](https://www.ic.nanzan-u.ac.jp/LINGUISTICS/publication/pdf/NLSI3_1-1-bennati.pdf)
- [Mirisis, C. (2017). L2 acquisition of Spanish allophonic and Italian phonemic contrasts. PhD dissertation, University of Minnesota (partly read)](https://conservancy.umn.edu/bitstream/handle/11299/206210/Mirisis_umn_0130E_18154.pdf?sequence=1)
- [Spinelli et al. (2016). *Frontiers in Psychology* 7:942, article on stress assignment in reading Italian (full title and author list not recorded; source of the Thornton et al. 1997 and phonItalia figures)](https://www.frontiersin.org/articles/10.3389/fpsyg.2016.00942/full)
- [Bertinetto, P. M. & Loporcaro, M. (2005). The sound pattern of Standard Italian, as compared with the varieties spoken in Florence, Milan and Rome. *Journal of the International Phonetic Association* (2005, 35(2): from memory)](https://ricerca.sns.it/retrieve/e3aacdfd-8f28-4c98-e053-3705fe0acb7e/Bertinetto_%26_Loporcaro.pdf)
- [Istituto Italiano di Cultura di Buenos Aires: Contenuti Livello A1 (CILS)](https://iicbuenosaires.esteri.it/wp-content/uploads/2025/05/Contenuti-Livello-A1.pdf)
- [Nelson, S. & Scaduto, P. *Welcome to Italian 101!* (Palomar College course book; contents)](https://www.palomar.edu/worldlanguages/wp-content/uploads/sites/185/2020/06/Welcome-to-Italian-101.pdf)
- [Wikipedia: List of most commonly learned second languages in the United States (MLA 2021 census figures)](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)
- [Duolingo (2024). Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)
- [US Census Bureau: Italian American Heritage and Culture Month (2022 ACS ancestry figure)](https://census.gov/newsroom/stories/italian-american-heritage-culture-month.html)
- [La Gazzetta Italiana (2017). Why do you Study Italiano? (testimonials)](https://lagazzettaitaliana.com/history-culture/8529-why-do-you-study-italiano)
- [Daily Italian Words: 15 Mistakes English Speakers Make All the Time in Italian](https://dailyitalianwords.com/mistakes-english-speakers-make-in-italian/)
- [Daily Italian Words: 8 Italian Sounds English Speakers Struggle to Pronounce Correctly](https://dailyitalianwords.com/8-italian-sounds-english-speakers-struggle-to-pronounce-correctly)
- [Think in Italian: Italian False Friends](https://www.thinkinitalian.com/italian-false-friends/)
- [Quesito, C. (2019). Learning Italian: Cognates and False Friends. Vista Higher Learning blog](https://vhlblog.vistahigherlearning.com/?p=3802)
- [FluentU: The Formal "You" in Italian (commercial blog)](https://www.fluentu.com/blog/italian/italian-formal-you/)

Local project files read: `docs/briefs/target-profile-it.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-es.md` and `tools/target/es/profile.json` (the model), `tools/target/es/respell.js` (command-line shape), `packs/roadmaps.js` (entry `it`), `tools/target/validate.js`, `tools/target/gen.js` and `tools/target/lib.js` (how the profile is read). `docs/profiles/it.md` was skimmed only to confirm it is the reverse course.
