# Spanish speakers learning English — course profile

Course `es-en`: English for Spanish speakers. All explanations, `why`, `hint`, meanings and interface text are in Spanish. Answers and examples are in English.

**Evidence tags.** **[research-backed]** means an empirical study or dataset that was fetched for this profile; the source is named, and its sample is given where it is small. **[curriculum convention]** means what textbooks, style guides or courses do. **[practitioner opinion]** means a teacher's, author's or guide's stated view with no data behind it. **[inference]** means this profile's own reasoning from the tagged items. Untagged design rules in §6–§8 are decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (the pack already uses `ttsLang:'en-US'`). Write **neutral Latin American Spanish with *tú***, *ustedes* for plural address, and no *vos* or *vosotros*.
- Spanish has articles, plural -s and past tense, so the Korean course's standing article/plural rule does not carry over. In the fetched corpus data, Spanish speakers' articles and plurals rank in the upper accuracy half and **third-person -s** in the lower half (Murakami & Alexopoulou 2016).
- **Standing rule:** at least half of each set's tile and typed items must hinge on the **verb core**: subject–verb agreement (-s / is–are / has / does), the auxiliary in questions and negatives (*do* support or inversion), and (typed items only) dummy *it/there*. Validator keywords: `sujeto|auxiliar|tercera persona|concordancia`.
- **Articles stay, but refocus** on where English and Spanish differ: generic nouns take no article, *a* goes before jobs, and English uses possessives where Spanish uses *el* for body parts. Determiner errors led one Spanish corpus (Pérez Sánchez 2013).
- **Pronunciation aid:** a fixed, minimal Spanish-letter respelling with the stressed syllable in CAPITALS and *ii/i* and *uu/u* for vowel length. It never adds an *e* before s-clusters. It is a crutch shown under the audio, not a replacement for it.
- **Curriculum:** keep all 39 ids in order. Change the emphasis in 22 of them, and add 2 lessons: `false-friends` (end of A1) and `make-do` (A2, which also covers say/tell).
- Spanish speakers start with a large cognate advantage in reading (about 75% of Academic Word List headwords have Spanish cognates) and a speaking gap (Argentina: reading 592 vs speaking 489). So lead with production and typing, and spend little time on Latinate vocabulary.

## 2. Variant, register and voice

**English variant: American English.** This is a decision, tagged [inference].
- The engine already sets `ttsLang:'en-US'` for English packs, so the spelling, examples and the `pron` aid must match the audio learners hear.
- Most Spanish speakers live in the Americas. Mexico alone has about 125 million speakers, and the US has 48 million people with Spanish as a first language ([Instituto Cervantes 2025, via Acento](https://acento.com.do/cultura/el-espanol-tiene-635-millones-de-hablantes-en-2025-solo-superado-por-el-mandarin-y-el-hindi-9585556.html)). No figure for Spain was fetched.
- Rules: use US spelling (*color, center, practice* as noun and verb). Use US vocabulary (*apartment, cell phone, vacation, subway*). Dates are written *November 15* in English text. Use *have/has got* only for recognition. Present perfect follows US use (see §4.15).
- When a British word is common in Spain-market textbooks (*flat, mobile, holiday*), add it to the card `note` as «En inglés británico: flat».

**Spanish variety: neutral Latin American Spanish** [curriculum convention].
- This is the register of pan-regional software, subtitling and textbooks. Microsoft publishes a separate "neutral Spanish" style guide, but it could not be fetched (§11).
- Avoid words that are marked in one region when a shared word exists (see §9).
- Use **computadora** (not *ordenador*), **celular**, **auto** (not *coche* or *carro* alone), **jugo**, **apartamento** (not *piso* or *departamento*). Full list in §9.
- Where no neutral word exists, use the Latin American form and accept that Spain readers recognise it.

**Form of address: *tú*** [curriculum convention; the style guides that would confirm it were not fetchable].
- *Tú* is the default of consumer apps aimed at all Spanish speakers, and it is understood everywhere, including in *voseo* regions (Argentina, Uruguay, Central America).
- *Usted* reads as distant in a self-study app. *Vos* would alienate Mexico and Spain. *Vosotros* would mark the app as Peninsular.
- Address groups with **ustedes**. Never use *vosotros*, including in grammar explanations: when translating English *you* (plural), write «ustedes».
- The polite-requests lesson explains *you* as covering both *tú* and *usted*. It uses *usted* only inside the example translations.

**Sample sentences in this voice:**
1. «En inglés, casi todas las oraciones necesitan un sujeto: *It's raining*, no *Is raining*.»
2. «¿Ya conoces *does*? Lo usas para preguntar con *he*, *she* o *it*: *Does she work here?*»
3. «¡Bien hecho! Repasa estas tarjetas mañana para no olvidarlas.»

**Punctuation:** always use opening **¿** and **¡** in Spanish text, including in buttons and toasts («¿Listo?», «¡Racha de 5 días!») [curriculum convention].
- Never put ¿ ¡ inside English strings.
- When a Spanish question contains an English fragment, the Spanish marks wrap the whole sentence: «¿Cómo se dice *I'm hungry*?»

**Mixing English into Spanish text:**
- In lesson HTML bodies, mark English words and sentences with italics (`<em>`).
- Plain-text fields (`why`, `hint`, `p`, card notes) cannot carry italics. There, put English inside straight double quotes: «el artículo "the"». Put Spanish quotations inside « ». Do not translate English grammar names that the glossary keeps in English (*phrasal verb*, *going to*).
- Never inflect English words with Spanish morphology (no «los phrasal verbs-es»). Write «los *phrasal verbs*», with the English plural.

## 3. Glossary

These are interface and terminology rules [curriculum convention]. No Spanish-language ELT publisher glossary or Cervantes terminology page was fetched (§11). The terms below are the ones in common use in Spanish-medium English grammar books, chosen for being understood in both Spain and Latin America. Use them **exactly and consistently**; the English column is what the content agents will see in the specs.

| English term | Spanish term to use | Note |
|---|---|---|
| article | artículo | |
| definite article (the) | artículo definido | prefer over *determinado* (both exist; pick one) |
| indefinite article (a/an) | artículo indefinido | |
| zero article | sin artículo | e.g. «aquí va sin artículo» |
| noun | sustantivo | not *nombre* |
| plural | plural | |
| singular | singular | |
| countable noun | sustantivo contable | |
| uncountable noun | sustantivo incontable | |
| subject | sujeto | standing-rule keyword |
| object | objeto | *objeto directo* when needed |
| subject pronoun | pronombre sujeto | |
| object pronoun | pronombre objeto | |
| possessive adjective (my, his) | adjetivo posesivo | |
| possessive 's | genitivo sajón ('s) | |
| verb | verbo | |
| auxiliary verb | verbo auxiliar / auxiliar | standing-rule keyword |
| main verb | verbo principal | |
| third person singular | tercera persona del singular | standing-rule keyword |
| subject–verb agreement | concordancia sujeto-verbo | standing-rule keyword |
| tense | tiempo verbal | |
| present simple | presente simple | |
| present continuous | presente continuo | |
| past simple | pasado simple | not *pretérito* (avoids clash with Spanish tense names) |
| past continuous | pasado continuo | |
| present perfect | presente perfecto | explain that it is NOT always *he comido* |
| present perfect continuous | presente perfecto continuo | |
| past perfect | pasado perfecto | |
| future with will | futuro con *will* | |
| going to | *going to* (futuro con *going to*) | keep the English |
| irregular verb | verbo irregular | |
| past participle | participio | |
| infinitive | infinitivo | |
| -ing form / gerund | forma -ing / gerundio | first mention «la forma -ing (gerundio)», then «forma -ing» |
| modal verb | verbo modal | |
| passive voice | voz pasiva | |
| active voice | voz activa | |
| conditional | condicional | *primer / segundo / tercer condicional* |
| relative clause | oración de relativo | |
| relative pronoun | pronombre relativo | |
| phrasal verb | *phrasal verb* (verbo compuesto) | keep the English after first gloss |
| reported speech | estilo indirecto | |
| direct speech | estilo directo | |
| adjective | adjetivo | |
| adverb | adverbio | |
| comparative | comparativo | |
| superlative | superlativo | |
| preposition | preposición | |
| quantifier (some, any, much) | cuantificador | |
| question word | palabra interrogativa | |
| negative (form) | negativo / forma negativa | |
| question (form) | pregunta / forma interrogativa | |
| word order | orden de las palabras | |
| contraction (don't) | contracción | |
| false friend | falso amigo | |
| cognate | cognado | |
| idiom | expresión idiomática | |
| stress (word stress) | sílaba tónica / acento | «la sílaba tónica va en mayúsculas» |
| vowel / consonant | vocal / consonante | |
| lesson | lección | |
| practice | práctica | |
| review | repaso | |
| deck | mazo | as in flashcard apps; not *baraja* |
| flashcard | tarjeta | |
| streak | racha | |
| hint | pista | |
| check (3-question quiz) | prueba rápida | button: «Comprobar» |
| correct / incorrect | correcto / incorrecto | feedback: «¡Correcto!» / «Incorrecto» |
| try again | inténtalo de nuevo | |
| answer | respuesta | |
| multiple choice | opción múltiple | |
| word tiles | fichas de palabras | |
| gap-fill | completa el espacio | |
| typed sentence | escribe la oración | |
| example | ejemplo | |
| explanation | explicación | |
| level | nivel | |
| progress | progreso | |
| settings | ajustes | not *configuración* (too long) |
| feedback (to developers) | opinión | tab «Opinión»; page «Danos tu opinión» |
| pronunciation hint | ayuda de pronunciación | replaces "romanization" toggle |

## 4. Persistent error zones

**How the list is ranked.** The ranking is this profile's [inference]. Items with fetched production data come first; within the rest, items come first if they can be tested in typed practice and recur across many lessons. Most items here are documented only in practitioner guides. Learner-corpus evidence for Spanish speakers was thin in what could be fetched (§11).

**Main fetched evidence:**
- [Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf), an exam-script corpus covering 7 L1 groups.
- [Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html): 18 intermediate adults in Madrid, 730 errors.
- [Betancourt González & Alvarado Martínez 2020](https://mail.mextesol.net/static/public/files/f7959d9d37da95756cf9e2ddd6e5f5f9.pdf): 14 intermediate students in Mexico, 76 errors, qualitative.
- [Orfitelli & Grüter 2013](https://eprints.whiterose.ac.uk/97341/1/paper2991.pdf): 17 Spanish-L1 adults living in Los Angeles.
- [de la Calle 2018, SJSU guide](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf): a teacher's guide that cites no sources, so it counts as [practitioner opinion].

1. **Third-person -s and subject–verb agreement**
   - Typical error: *She work in a bank* → *She works in a bank*; *My brother don't like it* → *doesn't*.
   - Why: Spanish marks person on every verb ending, so the cue is not missing. But English has one isolated -s with no counterpart in the rest of the paradigm, and it carries no meaning the subject has not already given [inference].
   - [research-backed] For Spanish learners, third-person -s sits in the lower half of morpheme accuracy (alongside possessive 's), while their articles and plural -s rank in the upper half ([Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf)).
   - [research-backed] The Mexican sample shows "lack of -s 3rd person" and subject-verb inflection errors, as single examples rather than counts ([Betancourt González & Alvarado Martínez 2020](https://mail.mextesol.net/static/public/files/f7959d9d37da95756cf9e2ddd6e5f5f9.pdf)).
2. **Articles where English and Spanish differ: generic nouns, jobs, body parts**
   - Typical errors and fixes:
     - *The life is hard* → *Life is hard*.
     - *The patience is a virtue* → *Patience is a virtue*.
     - *She is doctor* → *She is a doctor*.
     - *I broke the arm* → *I broke my arm*.
   - Why: Spanish puts *el/la* before abstract and generic nouns, omits *un/una* before an unmodified profession after *ser*, and uses the article where English uses a possessive.
   - [research-backed] Determiner errors were the most frequent noun-phrase error (21.6%) in a Madrid corpus, and 13.6% of grammar errors were an added or missing determiner ([Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)). The study does not break these down by type.
   - [practitioner opinion] The generic-*the* and possessive-for-*the* explanations come from [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §7.1–7.2. The job-article contrast is standard teaching lore and was not fetched.
3. **Prepositions** (in/on/at all map to *en*; *depend of*; *good in*; *married with*)
   - Typical errors: *on Monday* written as *in Monday*; *It depends of you* → *depends on*; *good in tennis* → *good at tennis*.
   - Why: Spanish *en* covers in, on and at, and *de* covers of, from and by.
   - [research-backed] Wrong preposition choice was 17.8% of grammar errors, plus 4.9% missing prepositions ([Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)). Wrong *in* and *of* also appear in the Mexican sample ([Betancourt González & Alvarado Martínez 2020](https://mail.mextesol.net/static/public/files/f7959d9d37da95756cf9e2ddd6e5f5f9.pdf)).
   - [practitioner opinion] The *en/de* mapping is from [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §3.
4. **Do-support in questions and negatives, and question word order**
   - Typical errors: *You like coffee?* → *Do you like coffee?*; *When he came?* → *When did he come?*; *I no understand* → *I don't understand*; *Where you live?* → *Where do you live?*
   - Why: Spanish forms questions by intonation or inversion with no auxiliary, and negates with *no* before the verb.
   - [practitioner opinion] The question-order example comes from [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §10.1. *No* + verb negation is classic contrastive-analysis lore, not fetched.
   - [inference] No fetched study counts do-support errors for Spanish speakers. It is ranked this high because it is obligatory in every question and negative from lesson 7 onward, and because tiles and typing can test it.
5. **Subject pronoun omission, including dummy *it* and *there***
   - Typical errors: *Is raining* → *It's raining*; *Is important to study* → *It's important to study*; *Has many people* → *There are many people*.
   - Why: Spanish is a null-subject language (*Llueve*, *Es importante*, *Hay*).
   - [research-backed] In grammaticality judgments, Spanish-L1 learners accepted subjectless English sentences 41.5% of the time on average, and acceptance fell as proficiency rose (r = −.80). In picture-description production, however, omissions were very rare ([Orfitelli & Grüter 2013](https://eprints.whiterose.ac.uk/97341/1/paper2991.pdf); 17 US-resident learners, which limits generalisation).
   - Read this as a recognition and noticing weakness more than a production one. The standing rule (§7) therefore counts only dummy *it/there*, not ordinary pronoun subjects; that choice is [practitioner opinion]. Checks and `mc` items are the right place for the judgment side («¿Cuál es correcta: *Is raining* o *It's raining*?»).
6. **Adjective position and agreement**
   - Typical errors: *the cars reds* → *the red cars*; *the stranges cars* → *the strange cars*.
   - Why: Spanish adjectives usually follow the noun and agree in number.
   - [practitioner opinion] Plural adjectives come from [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §8.1, which does not discuss position. Pérez Sánchez coded premodifier errors at only 2.8% at intermediate level ([Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)) [research-backed], so treat this as a beginner error that fades [inference].
7. **Possessives his/her/their vs *su***
   - Typical error: *Mary said that his car has problems* → *her car*.
   - Why: *su* does not mark the owner's gender or number. English his/her agrees with the owner, not with the thing owned.
   - [practitioner opinion] [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §5.2. The same guide (§5.1) reports he/she mix-ups in subject pronouns.
8. **False friends**
   - Typical errors: *actually* used for «actualmente» (→ *currently*); *I'm embarrassed* for «embarazada» (→ *pregnant*); *library* for «librería» (→ *bookstore*); *assist* for «asistir» (→ *attend*); *dormant* for «dormida»; *lantern* for «linterna».
   - [research-backed] Most Spanish–English cognates are true cognates. Lubiner & Hiebert report studies finding over 90% of Latin-based Spanish–English cognates are true, and they distinguish false cognates (rope/ropa) from partial cognates (molest/molestar) ([Lubiner & Hiebert 2011](https://textproject.org/wp-content/uploads/papers/Lubiner-Hiebert-2014-An-Analysis-of-English-Spanish-cognates.pdf)).
   - [practitioner opinion] The *dormant* and *lantern* examples are from [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §2.2. *Actually*, *embarrassed* and *library* are the standard classroom list, not fetched.
   - Design consequence: teach a small, high-frequency set of false friends explicitly and trust cognates otherwise.
9. **Gerund vs infinitive, especially after prepositions**
   - Typical errors: *I'm looking forward to see you* → *to seeing you*; *before to leave* → *before leaving*; *I want that you come* → *I want you to come*.
   - Why: Spanish uses the infinitive after every preposition and *que* + subjunctive after verbs of wanting.
   - [practitioner opinion] [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §9.1–9.4.
10. **Countability** (*advices, informations, furnitures, a news*)
    - Typical errors: *She gave me some advices* → *some advice*; *an information* → *some information / a piece of information*.
    - Why: *consejos* and *informaciones* are countable in Spanish.
    - [practitioner opinion] Standard teaching list, no source fetched. [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §8.2 covers a related number mismatch (*There is no figs*).
11. **Have vs be** (*tener años / hambre / frío / razón*)
    - Typical errors: *I have 25 years* → *I'm 25*; *I have hungry* → *I'm hungry*; *You have reason* → *You're right*.
    - [practitioner opinion] Standard teaching list, no source fetched.
12. **Make vs do; say vs tell** (both map to *hacer* and *decir*)
    - Typical errors: *do a mistake* → *make a mistake*; *make homework* → *do homework*; *He said me* → *He told me / He said to me*.
    - [practitioner opinion] No source fetched.
13. **Double negatives**
    - Typical errors: *I don't know nothing* → *I don't know anything*; *Nobody didn't come* → *Nobody came*.
    - Why: Spanish negative concord (*No sé nada*).
    - [practitioner opinion] No source fetched.
14. **Phrasal verbs** (avoidance more than error)
    - Typical pattern: learners choose the Latinate verb (*enter, continue, tolerate, extinguish*) where speech uses *come in, go on, put up with, put out*.
    - Why: cognates are available, so the phrasal verb is avoided. This leaves comprehension gaps in listening.
    - [practitioner opinion] The avoidance pattern itself has no fetched source.
    - [research-backed] The cognate frequency asymmetry behind it: 77% of AWL cognate pairs are more frequent in Spanish than in English, e.g. *terminate* ranks 16,697 in English against *terminar* at 219 ([Lubiner & Hiebert 2011](https://textproject.org/wp-content/uploads/papers/Lubiner-Hiebert-2014-An-Analysis-of-English-Spanish-cognates.pdf)). Learners' cognate choices therefore sound formal.
15. **Present perfect vs past simple**
    - Typical errors: *I have seen him yesterday* → *I saw him yesterday* (present perfect with finished time); and the reverse, *I live here since 2010* → *I've lived here since 2010*. Note that *Did you ever go to Mexico?* is acceptable American English, not an error.
    - Why: Spanish use of *he comido* vs *comí* differs by region.
      - Madrid, Lima and La Paz use the compound for recent events.
      - Montevideo and Santiago prefer the simple form ("La vi hace un momento").
      - Northern Latin America (Mexico, Central America, Caribbean) uses the compound mainly for situations that are still continuing.
    - [research-backed for Spanish usage] Literature review in [Valls Figuera 2017](https://diposit.ub.edu/dspace/bitstream/2445/115950/1/TFG_Valls_Figuera_Claudia.pdf), quoting the RAE *Nueva gramática* (2009); student thesis.
    - [inference] *Prediction:* Peninsular speakers, who say «Hoy he ido al cine» for today's events, will carry the present perfect over to other finished times (*I have gone to the cinema yesterday*). Rioplatense and Chilean speakers will under-use it. No learner study was fetched.
    - Rule for content: never explain the English present perfect as "= *he comido*". Explain it by use: experience, unfinished time, result now. Mark finished-time words (*yesterday, last week, ago, in 2019*) as triggers for the past simple. American English accepts *Did you eat yet?*, so do not mark it wrong in `a` lists.
16. **Pronunciation**
    - **Vowels.** Spanish has 5 vowels. English *ship/sheep*, *full/fool* and *cat/cut/cot* collapse.
      - [research-backed] /iː/–/ɪ/ stays hard for Spanish/Catalan learners even though it looks "easy", and difficulty is not predicted by perceived similarity. The authors point to cue reliance, orthography and instruction ([Cebrian, Gorba & Gavaldà 2021](https://www.frontiersin.org/articles/10.3389/fcomm.2021.660917/text); abstract only, sample size not read).
      - [practitioner opinion] Vowel length: Spanish has no length contrast, and English short vowels are shorter than Spanish ones ([Vela Tafalla 2016](https://zaguan.unizar.es/record/56576/files/TAZ-TFG-2016-2352.pdf)).
    - **Initial s-clusters** (*eschool, espeak, Espain*).
      - [research-backed] Spanish speakers insert a prothetic [e] before /s/ + consonant. Epenthesis is more frequent after a consonant and in longer clusters (*street* > *stop*), consistent with Carlisle's studies ([Rauber 2002](https://core.ac.uk/download/30363722.pdf); 9 Argentine speakers; results chapter not read, rates not extracted).
    - **/b/–/v/** (*berry/very*, *gobernment*). [practitioner opinion] Spanish *b* and *v* are one sound; [de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §1.1 shows the spelling knock-on (*gobernment*).
    - **/ʃ/–/tʃ/** (*shoes/choose*, *wash* → *wach*). [practitioner opinion]; no source fetched.
    - **/dʒ/–/j/** (*jail/Yale*, *joke/yolk*). Rioplatense *y* = [ʃ]/[ʒ] adds a further variant. [practitioner opinion]; no source fetched.
    - **Final consonant clusters and -ed endings.** *worked* as /wor-ked/, *asked* as *as*; *-ed* pronounced as an extra syllable everywhere. [practitioner opinion]; no source fetched. [Vela Tafalla 2016](https://zaguan.unizar.es/record/56576/files/TAZ-TFG-2016-2352.pdf) notes that coda positions are "marked" against the tendency to open syllables.
    - **h.** Silent (*'ouse*) or a harsh [x]. **th.** As /t/, /d/, /s/ or /f/. **Plosive aspiration.** *pin* heard as *bin*, because Spanish relies on voicing where English uses aspiration ([Vela Tafalla 2016](https://zaguan.unizar.es/record/56576/files/TAZ-TFG-2016-2352.pdf), citing Jenkins). All [practitioner opinion].
    - **Stress and rhythm.** Syllable-timed Spanish gives every vowel full value, with no schwa and no weak forms (*to* /tuː/ instead of /tə/). Cognates carry Spanish stress (*comfortable* as *com-for-TA-ble*, *hotel* is fine, *chocolate* as *cho-co-LA-te*). [practitioner opinion]; no source fetched.
    - **Spelling pronunciation.** Reading English letters with Spanish values: *Wednesday* with three syllables, *island* with an s, *-tion* as *-sion*. [practitioner opinion]; no source on spelling pronunciation itself was fetched. Two related findings: spelling was 57% of lexical errors in the Madrid writing corpus ([Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)) [research-backed], and orthography is named as one possible cause of the /iː/–/ɪ/ problem ([Cebrian et al. 2021](https://www.frontiersin.org/articles/10.3389/fcomm.2021.660917/text)) [research-backed, abstract only].

## 5. Learner starting point

**Proficiency by country (EF EPI)**
- [research-backed, self-selected online test-takers] In the EF EPI the Spanish-speaking world spans the whole scale, so learners arrive at very different points.
- From EF's own 2025 fact sheet: Argentina 575, rank 26, against a global average of 488 ([EF EPI 2025 Argentina](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-argentina-english.pdf)).
- Other figures come from a news report of the most recent index (year not stated; presumably 2025, since its Argentina figure matches EF's 2025 sheet) ([Revista Mercado, 2026](https://revistamercado.do/money-invest/internacional-economia/ingles-en-latinoamerica-los-paises-con-mejor-nivel-y-quien-queda-atras/)). It gives the same Argentina figure as EF's sheet; the region's average sits between "bajo" and "moderado".

| Country | Score | Rank |
|---|---|---|
| Honduras | 553 | 32 |
| Uruguay | 542 | 34 |
| Paraguay | 531 | 43 |
| El Salvador | 523 | 47 |
| Colombia | 480 | 76 |
| Ecuador | 466 | 83 |
| Mexico | 440 | 103 |
| Dominican Republic | ~503 | rank not given |

- Spain is not in that report. A secondary aggregator gives Spain 538, but the same table gives Argentina 562 and rank 28, which conflicts with EF's sheet, so its year is doubtful ([World Population Review](https://worldpopulationreview.com/country-rankings/ef-english-proficiency-index-by-country)). Treat Spain's figure as unverified.
- Implication: the largest single market, Mexico, scores 440, well below the global average of 488, at rank 103 (no band was fetched for it). Do not assume intermediate learners; A1 must be a true A1.

**Reading vs speaking**
- [research-backed, one country only] Argentina's skill scores are reading 592, listening 565, writing 526 and speaking 489 ([EF EPI 2025 Argentina](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-argentina-english.pdf)). The same reading-above-speaking shape appears in the Korean data in the prior report. Skill scores for Mexico and Spain could not be fetched (§11).

**Cognate advantage**
- [research-backed] Finkenstaedt & Wolff's survey of the *Shorter Oxford Dictionary* counts about 28% of English words from Latin and 28% from French, against 25% Germanic. A business-letter survey (Williams) gives 41% French and 15% Latin. Both figures are as reported on [Wikiwand, "Foreign-language influences in English"](https://www.wikiwand.com/en/articles/Foreign-language_influences_in_English), a tertiary source; the page warns that the figures vary.
- [research-backed] 34% of the General Service List and about 75% of the Academic Word List have Spanish cognates ([Lubiner & Hiebert 2011](https://textproject.org/wp-content/uploads/papers/Lubiner-Hiebert-2014-An-Analysis-of-English-Spanish-cognates.pdf)).
- The everyday core is mostly Germanic and not cognate; academic and formal English is mostly cognate. Cognates are also more transparent in spelling than in sound (mean LCSR .73 vs CPR .49), so learners recognise them on the page and miss them by ear.
- The authors note that a cognate advantage has not yet been directly documented in research.

**Exam and school culture**
- [research-backed, one source] Spain's public Escuelas Oficiales de Idiomas run certificate exams, and the Madrid corpus was drawn from one ([Pérez Sánchez 2013](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)).
- Pérez Sánchez also found that lower-level and failing learners make more transfer errors, and that grammar and lexis remain the main difficulty as learners progress.
- No source on Cambridge or TOEFL uptake by country was fetched (§11).

**Implications for the app** [inference]
- Most adult learners are false beginners: they had school English, recognise words and can read, but cannot produce simple sentences accurately and are weakest at speaking.
- Keep the A1 explanations short, and spend the lesson weight on **production**: typed items and the verb core.
- Do not spend card slots teaching transparent cognates (*hotel, important, family, possible*). Spend them on the non-cognate everyday core (*get, take, put, would, though, enough*), on phrasal verbs, and on false friends.
- Every cognate shown should carry its **stress** in the `pron` field, because the spoken form is where the advantage disappears.
- Place a placement check early. A Mexican beginner and an Argentine intermediate need different entry points; the order stays the same, only the starting lesson changes.

## 6. Pronunciation aid policy

**Evidence**
- No controlled study comparing respelling, IPA or no aid for Spanish-speaking learners was found or fetched. Everything below is [practitioner opinion] or [curriculum convention].
- [practitioner opinion] A critique of the Spanish-market textbook *Domina la pronunciación del inglés* (Vaughan) makes three points against its Spanish-based transcription ([Vela Tafalla 2016](https://zaguan.unizar.es/record/56576/files/TAZ-TFG-2016-2352.pdf)):
  - It assigns different values to the same symbols, so it is inconsistent.
  - Learners may read the transcription with English spelling rules.
  - Reading it "in Spanish" may increase L1 transfer and suggest English sounds differ less than they do.
- The same author grants that such systems follow "pedagogic criteria" and can be useful within a lesson. He describes IPA as the most widespread system and says any good system relies on one symbol per sound.
- [curriculum convention] Spanish-market phrasebooks and some course books use *pronunciación figurada*; dictionaries and Cambridge/Oxford materials use IPA. Neither convention was verified on a fetched page.
- [inference] Most self-study adults cannot read IPA, and teaching it costs lessons. An unconstrained Spanish respelling would encode the exact errors in §4.16 (five vowels, *eschool*, no schwa).
- The Korean course already shows a learner-script respelling (Hangul), and the card schema expects one. A **constrained** respelling keeps parity while blocking the worst transfers.

**Recommendation: a minimal, fixed-key Spanish-letter respelling with stress in capitals, always paired with audio.**
- The `pron` field is never empty on cards and example rows.
- If the engine treats `""` as "no aid", only names and numbers may use `""`. The spec does not say whether `""` is allowed (§11).
- The interface toggle «Ayuda de pronunciación» can hide it. The first lesson (`pron`) teaches the key explicitly, in one screen.

**Rules for writing `pron`:**
1. Write in lowercase Spanish letters. Put the **stressed syllable in CAPITALS** in every word of two or more syllables, and in stressed one-syllable content words in a sentence. Function words stay lowercase.
2. Separate syllables with hyphens inside a word only when the word has two or more syllables. Separate words with spaces, and keep sentence punctuation (`?`).
3. **Vowel key** (General American):

   | Sound | Write | Example |
   |---|---|---|
   | /iː/ | **ii** | sheep → SHIIP |
   | /ɪ/ | **i** | ship → SHIP |
   | /uː/ | **uu** | food → FUUD |
   | /ʊ/ | **u** | book → BUK |
   | /æ/ and /ʌ/ | **a** | cat → KAT, cup → KAP (the audio carries the difference; do not invent symbols) |
   | /ɑː/ | **aa** | hot → JAAT |
   | /e/ | **e** | bed → BED |
   | /ɔː/ (*talk, four*) | **o** | talk → TOK, four → FOR |
   | /ɜːr/ | **er** | bird → BERD |
   | vowel + r | vowel letter + **r** | car → KAAR, here → JIR, chair → CHER |
   | schwa /ə/ | **e** in unstressed syllables only | about → e-BAUT |
   | /eɪ/ | **ei** | |
   | /aɪ/ | **ai** | |
   | /oʊ/ | **ou** | |
   | /aʊ/ | **au** | |
   | /ɔɪ/ | **oi** | |

4. **Consonant key:**

   | Sound | Write | Note |
   |---|---|---|
   | /h/ | **j** | the closest Spanish letter. Trade-off: Spanish *j* is harsher ([x]), which is itself an error in §4.16. The `pron` lesson and card notes say «la *h* inglesa es un soplo suave, más suave que la *j*». |
   | /ʒ/ (*usually, vision*) | **sh** + note | rare; add a `note` «suena como *sh* pero vibrando» |
   | /ʃ/ | **sh** | |
   | /tʃ/ | **ch** | |
   | /dʒ/ | **dy** | never *y* |
   | /j/ | **i** before a vowel | yes → IES |
   | /w/ | **w** | |
   | /v/ | **v** | /b/ stays **b**; never merge them |
   | /θ/ | **th** | never *z* or *s* |
   | /ð/ | **dh** | |
   | /z/ | **s** | |
   | /k/ | **k** | |
   | /ɡ/ | **g** before a, o, u, consonants; **gu** before e, i | |
   | r | single **r** | never *rr* |
   | /ŋ/ | **ng** | |

5. **Never** put an *e* before an initial s-cluster: *school* → SKUUL, not eskuul. Keep every final consonant: *worked* → WERKT. Write past *-ed* as it sounds: **t** after voiceless sounds, **d** after voiced, **id** only after t/d.
6. Write weak forms as spoken: *to* → **te**, *a* → **e**, *and* → **en**, *can* (unstressed) → **ken**, *at* (unstressed) → **et**. Unstressed function words with a long vowel are written with a single vowel: *me* → **mi**, *he* → **ji**, *she* → **shi**, *you* → **iu**, *do* → **du**. Silent letters disappear (*island* → AI-lend, *Wednesday* → WENS-dei).
7. One respelling per card. Use American pronunciation to match `en-US` TTS. Card `note` may add «Ojo: la *v* no suena como *b*» for minimal pairs.
8. Practice items (`PRACTICE`) carry **no** pronunciation aid, as PRACTICE-SPEC requires («No romanization in practice items»). The aid appears only on cards and lesson example rows.

**Eight worked examples:**

The first six sentences appear in the existing ko-en pack (`packs/course-ko-en.js`). The last two are illustrative sentences for the `pron` lesson.

| Lesson | English | `pron` |
|---|---|---|
| polite | Excuse me. | ik-SKIUUS mi |
| it-there | It's raining. | its REI-ning |
| questions | Does she live here? | das shi LIV JIR? |
| past | I watched a movie | ai WAACHT e MUU-vi |
| can-like | I want to go home | ai WAANT te GOU JOUM |
| perfect | Have you ever been to Japan? | jav iu E-ver BIN te dye-PAN? |
| pron (illustrative) | The sheep is on the ship. | dhe SHIIP is aan dhe SHIP |
| pron (illustrative) | Jack has a job in a village. | DYAK jas e DYAAB in e VI-lidy |

(*on, job, want, watched* use **aa** for American /ɑ/.)

## 7. Standing practice rule

**Rule: "Verb core" (núcleo verbal: concordancia + auxiliar + sujeto obligatorio).** In every lesson's practice set (except `pron`, `numbers` and `email`, which may comply where natural), **at least half of the `order` and `type` items must hinge on the verb core**. The verb core means:
- subject–verb agreement;
- the auxiliary in questions and negatives (*do/does/did* support, or subject–auxiliary inversion with any auxiliary: *Can you…? Will she…? Have you…? Is it…?*);
- in typed items only, the dummy subject *it* or *there*.

Including inversion with any auxiliary makes the rule reachable in lessons with no -s and no *do*: `will`, `can-like`, `modals`, `conditionals`, `perfect`, `passive`. In `irregular-past`, use *did* + base form (*Did you go?*, not *Did you went?*).

**Why this pair rather than articles/plurals:**
- [research-backed] Spanish speakers' articles and plural -s fall in the upper accuracy half, and third-person -s in the lower half ([Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf)). Repeating the Korean rule would drill strengths.
- [research-backed] Spanish-L1 learners accepted subjectless English sentences 41.5% of the time in judgment, but omissions were very rare in their picture-description speech ([Orfitelli & Grüter 2013](https://eprints.whiterose.ac.uk/97341/1/paper2991.pdf)). So omission of ordinary pronoun subjects is a weak production target, and the rule does not count it.
- [practitioner opinion] The rule keeps only dummy *it/there* (*It's raining*, *There are…*), where Spanish has no pronoun at all to transfer (*Llueve*, *Hay*). No fetched study measures this.
- [practitioner opinion] Do-support and question order ([de la Calle 2018](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf) §10.1).
- [inference] The verb core is present in essentially every sentence from lesson 2 (`be`) onward, so the rule is satisfiable in every lesson.
- Prepositions and determiners have stronger corpus counts (§4.2–4.3). But they are lexical and lesson-specific; a preposition hinge in, for example, the `passive` lesson would be artificial. They are handled by the `prep`, `articles`, `articles-2` and `the` lessons and by their own items, not by the standing rule. Revisit this if the app's first-attempt logs show otherwise.

**What counts as "hinging"**

An item hinges on the verb core if a learner who gets the verb core wrong cannot get the item right. Concretely:

*`order` (tiles).* Every `a` tile must be used, so the hinge has to sit in the order itself or in the `x` distractors. An `order` item hinges if **either**:
- `x` contains a verb-core competitor of a tile in `a`:
  - the agreement twin: *work*/*works*, *is*/*are*, *was*/*were*, *has*/*have*, *do*/*does*, *don't*/*doesn't*;
  - a wrong auxiliary: *did* vs *does*;
  - a bare verb after *does/did* that would wrongly keep -s: `x:["works"]` when the answer is *Does she work…*.
- **or** `a` begins with an auxiliary, or with a question word + auxiliary (*Do / Does / Did / Can / Will / Have / Is…*, *Where do…*), so that the Spanish order (*When he came?*, *She can swim?*) is a possible wrong arrangement. In that case `x` should contain the competitor that fits the uninverted order (e.g. `x:["came"]` with `a:["When","did","he","come?"]`).

A subject pronoun alone in `a` does **not** make a tile item hinge, because tiles cannot test omission.

*`type` (typed sentence).* A `type` item hinges if `a[0]` contains at least one of:
- a third-person singular verb form (-s/-es, *has*, *does*, *doesn't*, *is*, *was*) with a third-person singular subject;
- an auxiliary *do/does/did* (positive or negative) in a question or negative;
- subject–auxiliary inversion with any other auxiliary in a question (*Can you…?*, *Will it…?*, *Have you…?*, *Is she…?*);
- dummy *it* or *there* as subject, where the Spanish prompt `p` has none (*Llueve*, *Es tarde*, *Hay…*).

A plain pronoun subject (*I*, *she*) does **not** make a typed item hinge. **Every** variant in `a` must still keep the subject; a subjectless version is never listed as acceptable. Example: `p:"Llueve mucho aquí"`, `a:["It rains a lot here"]`.

**Validator keywords**
- The `why` of every hinging item must name the hinge with at least one of these Spanish keywords, matched case-insensitively:

```
sujeto|auxiliar|tercera persona|concordancia
```

- Use them like this:
  - «sujeto» for dummy *it/there*;
  - «auxiliar» for *do/does/did* and for inversion with any auxiliary;
  - «tercera persona» for -s and *does/has*;
  - «concordancia» for *is/are*, *was/were* and *there is/are*.
- Do not use these words in `why` lines of items that do not hinge, so that the validator count stays meaningful.
- Sample `why` lines (plain strings, so English goes in straight double quotes):
  - «Con "she", el verbo lleva -s: tercera persona.»
  - «Las preguntas en presente necesitan el auxiliar "do/does".»
  - «En la pregunta, el auxiliar "can" va antes del sujeto.»
  - «En inglés el sujeto es obligatorio: "It's raining".»

**Count:** a 14-item set has 3–4 `order` + 3–4 `type` = 6–8 items, so **at least 3** (for 6), or 4 (for 7–8), must hinge. The last two "mixed" items may reuse a verb-core contrast from an earlier lesson. That is the preferred way to recycle third-person -s and *do* across A2–B1.

## 8. Curriculum deviations from the Korean-speaker course

Policy:
- Keep every id and its position. Reweight content inside a lesson where Spanish contrasts differ; that keeps parity, because the same id, title slot and deck structure carry different explanations and items.
- Add two lessons.
- Drop or merge none: each candidate for dropping, such as plurals, is cheaper to reweight than to remove.

All verdicts are [inference] built on §4.

| Lesson id | Verdict | Note for Spanish speakers |
|---|---|---|
| pron | reweight | Replace Korean traps with Spanish ones: 5 vs ~11 vowels (*ship/sheep*), no *e* before s-clusters, final clusters, *b/v*, *sh/ch*, *j/y*, *h*. Teach the `pron` key (§6). |
| be | reweight | *ser* and *estar* both → *be*. Add *be* where Spanish uses *tener* (*I'm 25, I'm hungry, I'm cold*, §4.11). Subject always present. |
| it-there | reweight | Core lesson for Spanish speakers: *Llueve* → *It's raining*, *Es importante* → *It's important*, *Hay* → *There is/are* with agreement. Double the typed items. |
| articles | reweight | Shrink a/an basics (Spanish has them). Focus on *a* with jobs (*She's a nurse*) and *a/an* by sound (*an hour, a university*). |
| plurals | reweight | Plural -s is easy; cover it in two items. Spend the lesson on **adjectives never take -s** (*red cars*), *this/these* vowel length, and *his/her/their* vs *su* (§4.7). |
| present | reweight | Keep S-V-O. Stress the obligatory subject and *I don't* (not *I no*). Adjective position before the noun gets its first pass here (*a big house*). |
| questions | reweight | Make do-support and question word order the whole focus (*Where do you live?*, not *Where you live?*). Fewer wh-vocabulary items: the words are easy. |
| third-s | keep | Central lesson; explanation: «el inglés solo marca la persona con -s en *he/she/it*». |
| prep | reweight | Frame in/on/at as three English choices for one Spanish *en*. Add *at home, on the bus, in the morning / at night*. |
| countable | reweight | Add Spanish-countable/English-uncountable nouns: *advice, information, news, furniture, homework, luggage*. |
| object-have | reweight | Object pronouns are easy (Spanish has *me/lo/la*). Emphasise word order (*I love her*, not *I her love*) and *have* vs *be*. |
| can-like | reweight | Add *gustar* reversal (*I like pizza*, not *Pizza likes me*; *I like them* for «me gustan»). *like + -ing*. |
| polite | keep | Explain that *you* covers *tú* and *usted*; politeness lives in *could/would/please*, not in the pronoun. |
| continuous | reweight | Spanish uses simple present for "now" more freely (*¿Qué haces?* → *What are you doing?*). Contrast *I work* vs *I'm working*. |
| past | reweight | Spanish past is easy in concept. Spend the time on **-ed pronunciation** (t / d / id) and *did* in questions and negatives (*Did you go?*, not *Did you went?*). |
| irregular-past | keep | Same as Korean course. |
| the | reweight | First vs second mention matches Spanish, so make it a short recap. Main focus: possessive where Spanish has *el* (*I washed my hair*, *She broke her leg*). |
| adjectives | reweight | Position and invariability (*the red cars*), *more/most* vs *-er/-est*, *than* not *that*. |
| going-to | keep | *ir a* + infinitive is a direct parallel; say so and move on fast. |
| tense | keep | Recap; mixed items should include third-person -s and *did*. |
| joining | keep | Add *because* vs *because of* if space permits. |
| numbers | reweight | English always uses a decimal point (*3.5*), while many Spanish-speaking countries write «3,5»; *billion* = «mil millones»; years read in pairs (*nineteen ninety*); dates *November 15th*. |
| smalltalk | keep | Localise names and topics (§9). |
| false-friends (new, after smalltalk) | add | 12–16 high-frequency false friends: *actually, embarrassed, library, assist, attend, realize, sensible, career, exit, carpet, constipated, college*. Deck-backed; practice items use them in sentences. |
| past-continuous | keep | |
| will | keep | Spanish future tense ≈ *will*, but *going to* is preferred for plans. Keep the Korean contrast. |
| perfect | reweight | Do not equate with *he comido*. Teach by use (experience, *ever/never*). Explain regional differences in one line: Spain uses *he comido* more; Mexico and Argentina use *comí* more. Accept US *Did you ever…?* (§4.15). |
| modals | keep | Add *mustn't* («no debes») ≠ *don't have to* («no tienes que»); learners mix them because *must* and *have to* both translate as «tener que / deber». |
| to-ing | reweight | Add preposition + -ing (*before leaving, interested in learning, looking forward to seeing*) and *want someone to* (not *want that*). |
| make-do (new, after to-ing) | add | *make* vs *do* (both «hacer») and *say* vs *tell* (both «decir»), collocation-led. |
| articles-2 | reweight | The main Spanish article lesson: **no article with general and abstract nouns and general plurals** (*Life is hard, I love dogs, Coffee is expensive*). Unique *the* is a short recap. |
| first-conditional | keep | Spanish *si* + present matches; warn against *will* after *if*. |
| relative | keep | *que* = *who/that/which*. Add "who for people, which for things". |
| phrasal | reweight | Frame as the informal alternative to the Latinate cognate (*enter* → *come in*, *continue* → *go on*, *tolerate* → *put up with*); comprehension-led. |
| perfect-2 | reweight | Key Spanish error: *I live here since 2010* («vivo aquí desde 2010») → *I've lived here since 2010*; *desde hace* → *for*. |
| narrative | keep | |
| conditionals | keep | Spanish *si hubiera…* maps well to the third conditional; warn against *would* in the *if* clause. |
| passive | keep | Spanish *se* passive (*se habla inglés*) → *English is spoken*. |
| reported | reweight | Add *say* vs *tell* recap (*He told me*, not *He said me*). |
| email | keep | Localise sign-offs; note that *Dear Sir/Madam* is rarer than Spanish *Estimado/a*. |
| idioms | keep | Prefer idioms with no Spanish calque trap; flag false-friend idioms. |

**Additions**
- **`false-friends`** goes after `smalltalk`, at the end of A1.
- **`make-do`** goes after `to-ing`, in A2.

Both are high-frequency lexical traps that no existing lesson owns (§4.8, §4.12). A1 grows to 24 lessons and A2 to 10. Two parity exceptions are needed: one per new id.

**Not added (considered):**
- A separate "subjects" lesson: `it-there` and `present` cover it.
- A separate "double negatives" lesson: fold it into `questions` (negatives) and `countable` (*any/no*).

## 9. Vocabulary and cultural notes

**Decks to reweight**
- Shrink transparent-cognate decks: generic nouns like *hotel, restaurant, important, family, music*. Keep them as quick-recognition items, not learning cards.
- Spend the freed slots on:
  1. the high-frequency Germanic core (*get, take, put, keep, enough, though, already, still, yet*);
  2. phrasal verbs;
  3. false friends (new deck «Falsos amigos», linked to `false-friends`);
  4. *make/do* collocations;
  5. uncountable nouns.
- Cognate strategy [research-backed basis: [Lubiner & Hiebert 2011](https://textproject.org/wp-content/uploads/papers/Lubiner-Hiebert-2014-An-Analysis-of-English-Spanish-cognates.pdf)]:
  - Teach the regular correspondences once, in a short card set: *-tion/-ción, -ty/-dad, -ous/-oso, -ly/-mente, -ent/-ente, ph/f, ch/qu*.
  - Give every cognate card a stress-marked `pron` and a `note` when the stress differs from Spanish («Ojo: *COM-for-te-bel*, no *com-for-TA-ble*»).
  - Flag partial cognates (*molest, sensible, realize*) with «Ojo:» notes instead of marking them false.

**Localise everything Korea-specific in the ko-en course.** A text search of `packs/course-ko-en.js` finds *Seoul* (25), *Busan* (18), *won* (11), *kimchi* (7), *K-pop* (7), *Minji* (6) and *K-drama* (1). This is a sample search, not a full audit, so content agents should search for other Korean names and places too.
- **Names:** Spanish-speaking names that read naturally in English and come from several regions: *Ana, Carlos, Lucía, Diego, Sofía, Mateo, Valeria, Javier*. Mix in English names (*Emma, Jack*) for the English-speaking characters.
- **Places:** Mexico City, Bogotá, Buenos Aires, Lima, Madrid, Santiago, Miami, Los Angeles, New York. Do not centre one country.
- **Food:** *tacos, arepas, empanadas, paella, coffee, tea*. Replace *kimchi, bibimbap, soju*.
- **Music and TV:** replace K-pop and K-drama references with neutral ones (*a song, a series, a soccer game*). Name genres, not artists. Use *soccer*, with a `note` «*football* en inglés británico».
- **Honorifics:** remove 존댓말 comparisons. Replace them with the *tú/usted* note in `polite` (§8).
- **Currency:** dollars in examples (US setting). Avoid peso and euro amounts, which differ by country.
- **Exam references:** none by default. If needed, mention *TOEFL* and *Cambridge* generically.

**Neutral Spanish in meanings and notes:** when two regional words exist, prefer the one understood everywhere, or give both separated by «/»:
- *celular / móvil*
- *computadora* (Spain: *ordenador*)
- *auto* (avoid *coche/carro* as sole word)
- *jugo / zumo*
- *autobús* (not *camión, guagua, colectivo*)
- *apartamento* (not *piso*)
- *lentes / gafas*
- *boleto / billete*

Never use *coger*. Use *tomar* (bus) or *agarrar* (an object).

## 10. Interface wording notes

These are [curriculum convention]. The Microsoft Spanish style guides were found but could not be read (binary PDFs), and the Zulip guide returned navigation only (§11), so these rules are not verified against a fetched style guide.

**Buttons and actions**
- Use the **infinitive** for buttons, menu items and tabs that name an action: «Comprobar», «Continuar», «Empezar», «Repasar», «Guardar», «Enviar».
- Use **tú imperative** for instructions inside content and prompts: «Escribe la oración», «Elige la respuesta correcta», «Ordena las palabras», «Completa el espacio».
- Never mix the two in one control.

**Tú forms everywhere**
- «¿Todo listo para practicar?» (not «¿Listo…?», which is gendered; see below).
- «Has completado la lección», «Tu racha».

**Gender-neutral wording**
- Avoid adjectives that agree with the user («¡Estás listo!»). Rephrase with nouns or verbs: «¡Todo listo!», «¡Lo lograste!», «Bienvenida/o» → **«Te damos la bienvenida»**.
- Do not use *-e*, *-x* or *@*.
- Avoid the Peninsular perfect in UI («Has acertado») and prefer neutral simple past for completed actions: «¡Lo lograste!», «Completaste 3 lecciones». This also avoids the §4.15 regional split.

**Plurals at 1 and 2**
- Spanish distinguishes only 1 vs other: «1 día», «2 días», «0 días». The `t()` patterns need a singular branch for n = 1, and **0 takes the plural**.
- Examples: «1 tarjeta para repasar» / «5 tarjetas para repasar»; «Racha: 1 día» / «Racha: 12 días».

**Dates and numbers.** Use the device locale for `Intl` when it is a Spanish locale (`es-MX`, `es-AR`, `es-ES`…). Fall back to `es-419` when the device locale is not Spanish.
- Dates: «15 de noviembre de 2026», short form «15/11/2026». Day-month order.
- Month and weekday names are lowercase («lunes», «noviembre»).
- Number separators differ by country: Mexico uses a decimal point, most of South America and Spain a decimal comma. Let `Intl.NumberFormat` with the device locale decide. Avoid decimals in UI copy. Show percentages as whole numbers and let the locale formatter decide the spacing («85 %» or «85%»).
- Time: let `Intl` decide between 24-hour and a.m./p.m.

**Bottom navigation at 390px**
- Spanish runs roughly 20–25% longer than English [practitioner opinion; no source fetched]. With seven tabs, each slot is about 55px. At typical 10–11px tab-label size that fits roughly **8 characters**, so cap every label at 8 characters and prefer one word.

| English | Spanish label | Chars |
|---|---|---|
| Today | Hoy | 3 |
| Practice | Práctica | 8 |
| Review | Repaso | 6 |
| Lessons | Lecciones | 9 (sole exception to the cap) |
| Read | Leer | 4 |
| Progress | Progreso | 8 |
| Feedback | Opinión | 7 |

- **Cap:** 8 characters, with one exception: «Lecciones» (9), because it is the glossary term and has no shorter synonym that keeps the meaning. The harness's zero-overflow check at 390px must pass with it. If it fails, reduce the tab-label font for all seven tabs; do not change the word.
- **Feedback:** use «Opinión» on the tab, and «Danos tu opinión» on the page title. Replace the glossary entry «comentarios» with **«opinión»** for this feature, so the tab and the page use one term.
- Avoid long headings in cards: «Repaso de hoy» rather than «Tarjetas para repasar hoy». Test every new string at 390px with the longest numeric value (e.g. «999 tarjetas»).

## 11. Gaps and unverified claims

**Sources that were blocked or unreadable** (none is listed in Sources):
- **Microsoft Spanish localisation style guides** (neutral, Mexico, Spain, US): binary PDF, not readable.
- **Zulip Spanish translation guide:** navigation only.
- **Valladolid MA thesis on null subjects** (uvadoc TFM_F_2022_068): bot-blocked.
- **EF EPI 2025 Mexico fact sheet:** URL not allowed.
- **Swan & Smith, *Learner English*, chapter on Spanish and Catalan speakers:** never opened.

**What this leaves unsourced:**
- **§3 glossary and §10 UI conventions** rest on convention only; the Cervantes/CEFR Spanish terminology and publisher glossaries were not fetched.
- **Do-support** has no fetched learner data for Spanish speakers. It sits in the standing rule on practitioner and structural grounds plus the third-person -s corpus finding.
- **No fetched source** for:
  - make/do, say/tell, double negatives, *tener* → *be*, countability, phrasal-verb avoidance;
  - /ʃ/–/tʃ/, /dʒ/–/j/, -ed endings, h, th, stress and rhythm;
  - the job-article contrast, and the classic false friends *actually / embarrassed / library*.
  These are tagged [practitioner opinion] and should be checked against Swan & Smith.

**Weak or small samples:**
- **Pérez Sánchez** (18 learners, one class in Madrid).
- **Betancourt González & Alvarado Martínez** (14 learners, 76 errors, examples only, no counts by error type).
- **Orfitelli & Grüter** (17 US residents; immersed learners may omit subjects less than learners in Spanish-speaking countries). The fetch summary's production figures ("4 of ~100", "0.86%") were internally inconsistent, so only "very rare" is reported.
- **Rauber** (9 Argentine speakers; the results chapter was not read).
- **Cebrian et al.** (abstract only).
- **Valls Figuera** (undergraduate thesis; the RAE *Nueva gramática* was quoted second-hand).
- **Murakami & Alexopoulou:** Spanish accuracy values were not legible. Only the relative rankings (articles and plural upper half, third-person -s lower half) are used, and the paper's description of past -ed for Spanish learners is internally inconsistent.

**EF EPI figures:**
- Only Argentina's figures come from EF directly. The other countries come from a 2026 news report of the latest index, which matches EF on Argentina.
- The World Population Review table conflicts with EF (Argentina 562 / rank 28 against 575 / rank 26), so its Spain figure (538) is unverified.
- No reading-vs-speaking breakdown for any country except Argentina.

**Other gaps:**
- **Cognate percentages** of English vocabulary come via a tertiary page (Wikiwand), not the primary surveys.
- **Pronunciation aid:** no controlled study comparing respelling, IPA or no aid for Spanish speakers was found. The §6 recommendation is inference.
- **Empty `pron`:** the spec does not say whether `pron:""` is allowed or how the engine renders it.
- **Not researched:** exam culture (Cambridge and TOEFL uptake by country), the share of learners in Spain vs the Americas, and Spanish speaker counts for Spain, Colombia and Argentina.
- **No app or self-study evidence for Spanish speakers.** As in the prior report, the app's first-attempt logs per lesson would be the best way to test the standing-rule choice (verb core vs prepositions/determiners).

## Sources

Web pages fetched and used:
- [Murakami, A. & Alexopoulou, T. (2016). L1 influence on the acquisition order of English grammatical morphemes (CORE PDF)](https://core.ac.uk/download/42340394.pdf)
- [Pérez Sánchez, A. M. (2013). A corpus-based analysis of errors in adult EFL writings. Revista Lingüística, Universidad Nebrija](https://www.nebrija.com/revista-linguistica/a-corpus-based-analysis-of-errors-in-adult-efl-writings.html)
- [Betancourt González, R. C. & Alvarado Martínez, E. (2020). The interlanguage in learners of English as a foreign language: An error analysis approach. MEXTESOL Journal 44(1)](https://mail.mextesol.net/static/public/files/f7959d9d37da95756cf9e2ddd6e5f5f9.pdf)
- [Orfitelli, R. & Grüter, T. (2013). Do null subjects really transfer? GASLA 2013 Proceedings](https://eprints.whiterose.ac.uk/97341/1/paper2991.pdf)
- [de la Calle, F. (2018). Guide for Multilingual Student Writing: Common English-Spanish Errors (SJSU)](https://gcp-web.sjsu.edu/wac/docs/SpanishEnglishGuide.pdf)
- [Rauber, A. S. (2002). The Production of English Initial /s/ Clusters by Portuguese and Spanish EFL Speakers. MA thesis, UFSC](https://core.ac.uk/download/30363722.pdf)
- [Cebrian, J., Gorba, C. & Gavaldà, N. (2021). When the Easy Becomes Difficult: Factors Affecting the Acquisition of the English /iː/-/ɪ/ Contrast. Frontiers in Communication](https://www.frontiersin.org/articles/10.3389/fcomm.2021.660917/text)
- [Vela Tafalla, M. Á. (2016). A critical discussion of present-day English pronunciation teaching methodology through Vaughan's Domina la Pronunciación del Inglés. TFG, Universidad de Zaragoza](https://zaguan.unizar.es/record/56576/files/TAZ-TFG-2016-2352.pdf)
- [Valls Figuera, C. (2017). Usos del pretérito perfecto simple y compuesto en la lengua española. TFG, Universitat de Barcelona](https://diposit.ub.edu/dspace/bitstream/2445/115950/1/TFG_Valls_Figuera_Claudia.pdf)
- [Lubiner, S. & Hiebert, E. H. (2011). An analysis of English-Spanish cognates as a source of general academic language (TextProject PDF)](https://textproject.org/wp-content/uploads/papers/Lubiner-Hiebert-2014-An-Analysis-of-English-Spanish-cognates.pdf)
- [Wikiwand: Foreign-language influences in English (Finkenstaedt & Wolff 1973; Williams)](https://www.wikiwand.com/en/articles/Foreign-language_influences_in_English)
- [EF EPI 2025 fact sheet: Argentina](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-argentina-english.pdf)
- [Revista Mercado (2026). Inglés en Latinoamérica: los países con mejor nivel y quién queda atrás](https://revistamercado.do/money-invest/internacional-economia/ingles-en-latinoamerica-los-paises-con-mejor-nivel-y-quien-queda-atras/)
- [World Population Review: EF English Proficiency Index by country (secondary; conflicts with EF, see §11)](https://worldpopulationreview.com/country-rankings/ef-english-proficiency-index-by-country)
- [Acento (2025). El español tiene 635 millones de hablantes en 2025 (Instituto Cervantes anuario)](https://acento.com.do/cultura/el-espanol-tiene-635-millones-de-hablantes-en-2025-solo-superado-por-el-mandarin-y-el-hindi-9585556.html)

Local project files read: `/home/claude/reports/Grammar learning order research.md`, `/home/claude/docs/PRACTICE-SPEC.md`, `/home/claude/docs/MULTILANG-SPEC.md`.
