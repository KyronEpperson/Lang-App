# French speakers learning English — course profile

Course `fr-en`: English for speakers of **French as written in France** (français de France). All explanations, `why`, `hint`, meanings and interface text are in metropolitan French. Answers and examples are in English.

**How this course is built.** It is built from the Spanish-speakers' course, not the Korean one, because French has articles and plurals like Spanish. `tools/content/fr/` is scaffolded from `tools/content/es/` (41 lessons including `false-friends` and `make-do`, 25 decks). `profile.json` has `"reference": "es"`, so `parity.js` compares fr-en's English side with **es-en**. Every English-side difference from es-en therefore costs a `deviations.json` entry. This profile says, lesson by lesson (§8) and deck by deck (§9), what stays as es-en has it and what changes.

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset fetched for this profile. The study is named, its sample is given, and "abstract only" is said where only the abstract was read. "via OTHERS.md" means the claim comes from `docs/profiles/OTHERS.md` and its source could not be reopened here.
- **[curriculum convention]**: what French official guidance, school sites, exam-prep sites, style guides or courses do.
- **[practitioner opinion]**: a teacher's, school's or guide's stated view with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of French**. Such claims are flagged for a native check in §11.

Untagged rules in §6–§10 are design decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (`ttsLang:'en-US'`). Write **metropolitan French with *tu***, friendly and plain, gender-neutral by rephrasing (no point médian). Infinitive on buttons. No Québec, Belgian or Swiss usage.
- **Standing rule: keep the Spanish course's `verb-core` rule**, keywords `sujet|auxiliaire|troisi[èe]me personne|(?<!d['’])accord`. Every es-en practice item already satisfies it, so the English side carries over with no parity cost; a new `tense-aspect` kind would touch about 37 lessons and is not implemented. Concord errors are attested for French-speaking students (72 of 774 verb errors, Granger 1999); tense, the larger class (248), is served by the tense lessons.
- **Pronunciation aid: IPA, written exactly like the zh-en and pt-en courses** (`pronPattern` copied). A French-letter respelling cannot write /h/ (French *h* is silent), /θ ð/, /tʃ/ (French *ch* = /ʃ/) or stress, and French readers drop final consonants and nasalise vowel + *n*. The IPA can be copied from zh-en for 349 of 480 cards and 235 of 356 example rows.
- **Curriculum:** keep all 41 es-en lessons in order. Change the English side of only **`pron`** (French traps: h, th, stress, vowels) and **`false-friends`** (French–English false friends). Add six technical item deviations for Spanish check options that parity reads as English. **No fr-only lesson**: the strongest French evidence (tense and aspect) is owned by existing lessons.
- **Decks:** keep all 25. Change English targets in 5: «Se présenter», «Survie 1», «Compliments et affection», «Pièges de prononciation», «Faux amis».
- **Learners:** France scores 539 in EF EPI 2025 (rank 38, global average 488), with reading 555 and speaking 456. Speaking is the weak skill. Motivators: bac, TOEIC (B2 for engineering diplomas), work.

## 2. Variant, register and voice

**English variant: American English** [inference].
- `ttsLang` is `en-US`, so spelling, examples and the `pron` aid must match the audio.
- Rules are the same as es.md §2 and pt.md §2:
  - US spelling (*color, center, practice*);
  - US vocabulary (*apartment, cell phone, vacation, subway, soccer*);
  - dates written *November 15* in English text.
- French schools traditionally teach British English, so learners know *flat, mobile, holiday, lorry*. Add the British form to the card `note` where it is common: «En anglais britannique : flat».

**French variety: français de France** [curriculum convention].
- Standard metropolitan spelling with accents on capitals («À réviser», «État»), as the Proton French guide requires ("When the first letter of a sentence bears an accent, accentuate the capital letter") ([Proton](https://localize.proton.me/t/guidance-for-french/75)).
- Traditional spelling is fine; the 1990 *rectifications* are optional in France. Do not mix the two in one word family (*connaître / connaitre*): use the traditional form everywhere [inference].
- Use France vocabulary everywhere. Never use Québec, Belgian or Swiss forms (table below). Two tests for a doubtful word: would a reader in Paris, Lyon and Marseille all say it? Does it read as Montréal, Bruxelles or Genève?

| Use (France) | Never | English |
|---|---|---|
| portable | cellulaire (QC), GSM (BE), natel (CH) | cell phone |
| e-mail, mail | courriel (QC; correct but rare in France) | email |
| week-end | fin de semaine (QC) | weekend |
| petit-déjeuner / déjeuner / dîner | déjeuner / dîner / souper (QC, BE, CH) | breakfast / lunch / dinner |
| faire les courses, faire du shopping | magasiner (QC) | go shopping |
| voiture | char (QC) | car |
| soixante-dix, quatre-vingt-dix | septante, nonante (BE, CH) | seventy, ninety |
| supérette, épicerie | dépanneur (QC) | convenience store |
| pourboire | — | tip |
| addition | facture (for a restaurant bill) | check (US), bill (UK) |

**Form of address: *tu*** [inference, with one convention on each side].
- Apps that teach casually address the learner as *tu* (es.md uses *tú*, pt.md uses *você*). The audience includes *lycéens* preparing the bac and students preparing the TOEIC. [curriculum convention] French revision sites for this audience use *tu*: AuFutur's false-friends page is titled «Tout ce que tu dois retenir» and speaks of «tes professeurs» and «ton bac» ([AuFutur](https://aufutur.fr/revisions/langues-vivantes/anglais/faux-amis/)). French school worksheets give instructions in the *tu* imperative («Écoute et répète») [inference; no worksheet fetched].
- The counter-convention: the Proton French guide prescribes *vous* ("Use the second-person plural ('vous') form of address (formal)") ([Proton](https://localize.proton.me/t/guidance-for-french/75)). That is a privacy product for adults, not a learning app. Duolingo's French interface is widely described as using *tu*, but no page that shows it was fetched (§11).
- Decision: **tu** in explanations, prompts, `why`, hints and feedback; **infinitive** on buttons and menu items (§10); *vous* only inside translations of formal English (service sentences, business e-mail).
- Plural "you" in explanations: *vous* only when the text really addresses several people, which this app never does.
- In the `polite` lesson: *you* covers *tu* and *vous*. Politeness in English lives in *could / would / please*, not in the pronoun.

**Register:**
- Friendly, direct, correct written French. No SMS spelling, no verlan, no slang outside the «Cinéma, séries et argot» deck and the idioms lesson.
- *On* is allowed in dialogue translations ("we" in casual speech: «On y va ?») but explanations use *nous* or rephrase.
- Keep the *ne* of negation in explanations («Tu ne dis pas…»). Dropping it («Tu dis pas») is fine only in translations of casual English dialogue.

**Sample sentences in this voice:**
1. «En anglais, on dit *I'm 25* : l'âge se dit avec *be*, pas avec *have*.»
2. «Tu connais déjà *does* ? Il sert à poser une question avec *he*, *she* et *it* : *Does she work here?*»
3. «Bien joué ! Révise ces cartes demain pour ne pas les oublier.»

**Punctuation and mixing English into French:**
- In lesson HTML bodies, mark English with `<em>`.
- In plain-text fields (`why`, `hint`, `p`, card notes), put English inside straight double quotes ("the") and French quotations inside « » with a no-break space inside each guillemet (Proton: "There is always a non-breaking space after the first guillemets and another one before the second").
  - This keeps the es-en convention, so items copied from es keep working.
- Put a no-break space (U+00A0) before `:` and `;`, and a narrow no-break space (U+202F) or U+00A0 before `?` and `!` (Proton applies the non-breaking space to all double punctuation). Write the character itself in the source, never `&nbsp;`, which would show in plain-text fields [inference].
- Never inflect English words with French morphology. Write «les *phrasal verbs*», not «les phrasals verbs».
- Use French exonyms in French text: «Londres», «New York», «Édimbourg», «Mexico», «Lima». English strings keep the English names.

## 3. Glossary

[Curriculum convention.] French school grammar of English has its own, very stable terms. SchoolMouv's collège/lycée lessons speak of «verbes lexicaux» and «auxiliaires» ("les auxiliaires ne fonctionnent pas seuls"), «base verbale (infinitif sans "to")», «la troisième personne du singulier», «formes négative, interrogative et emphatique», «présent BE + -ING» and «les auxiliaires modaux» ([SchoolMouv, verbes lexicaux et auxiliaires](https://www.schoolmouv.fr/cours/verbes-lexicaux-et-auxiliaires-anglais/fiche-de-cours)). Its present perfect lesson contrasts «le prétérit» with «le present perfect» and warns against equating it with «notre passé composé français» ([SchoolMouv, present perfect](https://www.schoolmouv.fr/cours/present-perfect-anglais/fiche-de-cours)). The official collège guidance uses «présent simple», «be + -ing», «prétérit», «auxiliaires de modalité» and «la troisième personne du singulier» ([Eduscol 2026, anglais 6e–3e](https://eduscol.education.gouv.fr/sites/default/files/document/2026livretaccompagnementanglais6e5e4e3e-127310.pdf)). Sherpas, a tutoring site, uses «auxiliaire», «base verbale», «prétérit» and «present perfect» in its error list ([Sherpas](https://sherpas.com/blog/erreurs-en-anglais/)).

**French learners already know these terms**, so the course uses them as they are, including the English names *present perfect* and *past perfect*, which French schools keep untranslated.

| English term | French term to use | Note |
|---|---|---|
| article | article | |
| definite / indefinite article | article défini / indéfini | |
| zero article | article zéro (Ø) | French school notation; «ici, pas d'article» in plain prose |
| noun | nom | not «substantif» |
| plural / singular | pluriel / singulier | |
| countable / uncountable noun | nom dénombrable / indénombrable | Sherpas: «nom indénombrable» |
| subject | sujet | standing-rule keyword |
| object | complément (d'objet) | «complément» in prose |
| subject pronoun | pronom sujet | |
| object pronoun | pronom complément | |
| possessive adjective (my, his) | adjectif possessif | |
| possessive 's | génitif ('s), cas possessif | «le génitif en 's» |
| verb | verbe | |
| lexical verb | verbe lexical | SchoolMouv term; use when contrasting with the auxiliary |
| auxiliary verb | auxiliaire | standing-rule keyword |
| base form | base verbale (BV) | SchoolMouv, Sherpas. Not «infinitif», which French schools reserve for *to* + BV |
| infinitive (*to* + verb) | infinitif (*to* + base verbale) | |
| third person singular | troisième personne du singulier | standing-rule keyword «troisième personne» |
| subject–verb agreement | accord (sujet-verbe) | standing-rule keyword |
| tense | temps | |
| present simple | présent simple | Eduscol |
| present continuous | présent en *be* + -ing | Eduscol, SchoolMouv: «présent be + -ing». Not «présent progressif» |
| past simple | prétérit | Eduscol, SchoolMouv. **Never** «passé simple» or «passé composé» |
| past continuous | prétérit en *be* + -ing | SchoolMouv: «prétérit en BE + -ING» |
| present perfect | *present perfect* | keep the English. **Never** gloss as «passé composé» (§4.1, §8 `perfect`) |
| present perfect continuous | *present perfect* en *be* + -ing | |
| past perfect | *past perfect* (plus-que-parfait) | |
| future with will | futur avec *will* | |
| going to | *be going to* (futur proche) | the French parallel *je vais + infinitif* is called «futur proche» |
| irregular verb | verbe irrégulier | |
| past participle | participe passé | |
| -ing form / gerund | forme en -ing | «gérondif» confuses (*en mangeant*); use «forme en -ing» |
| modal verb | modal, auxiliaire de modalité | Eduscol: «auxiliaires de modalité» |
| passive / active voice | voix passive / active | |
| conditional | conditionnel; «phrase en *if*» (premier, deuxième, troisième type) | French school: «les propositions en *if*» [inference] |
| relative clause | proposition relative | |
| relative pronoun | pronom relatif | |
| phrasal verb | *phrasal verb* (verbe à particule) | keep the English after first gloss |
| reported / direct speech | discours indirect / direct | «style indirect» is also understood |
| adjective / adverb | adjectif / adverbe | |
| comparative / superlative | comparatif / superlatif | |
| preposition | préposition | |
| quantifier | quantifieur | first mention «quantifieur (*some, much, many*)» |
| question word | mot interrogatif | |
| negative / interrogative form | forme négative / interrogative | SchoolMouv |
| word order | ordre des mots | |
| contraction | contraction, forme contractée | |
| false friend | faux ami | the universal French term |
| cognate | mot transparent | the French school term for words that look and mean the same |
| idiom | expression idiomatique | |
| stress (word stress) | accent tonique, syllabe accentuée | first mention «accent tonique (la syllabe qu'on prononce plus fort)». **Not** plain «accent», which also means a written accent and a foreign accent. Eduscol: «l'accentuation des mots polysyllabiques» |
| vowel / consonant | voyelle / consonne | |
| IPA | API (alphabet phonétique international) | first mention «l'alphabet phonétique international (API), celui des dictionnaires» |
| lesson | leçon | |
| practice | pratique; button «S'entraîner» | |
| review | révision; verb «réviser» | |
| deck | paquet | the term in Anki's French interface [practitioner opinion, not verified]; never «deck» in UI |
| flashcard | carte | «carte (flashcard)» on first use |
| streak | série | «série de 5 jours» |
| hint | indice | |
| check (3-question quiz) | mini-quiz | button «Vérifier» |
| correct / incorrect | juste / faux | feedback «Bonne réponse !» / «Pas tout à fait» (see §10) |
| try again | réessayer | |
| answer / explanation | réponse / explication | |
| multiple choice | QCM (questions à choix multiples) | every French learner knows «QCM» |
| word tiles | étiquettes | instruction «Remets les mots dans l'ordre» |
| gap-fill | texte à trous | instruction «Complète le trou» |
| typed sentence | écris la phrase | |
| example | exemple | |
| level / progress | niveau / progrès | tab «Progrès» (§10) |
| settings | paramètres | |
| feedback (to developers) | avis | tab «Avis», page «Donne ton avis» |
| pronunciation hint | prononciation (API) | toggle «Afficher la prononciation (API)» |

## 4. Persistent error zones

**How the list is ranked.** This profile ranks the items [inference]:
- Items with fetched production data from French-speaking learners come first.
- Within the rest, items come first if typed practice can test them and if they recur across lessons.

**Main fetched evidence:**
- **Granger 1999** ([Use of tenses by advanced EFL learners, UCLouvain](https://dial.uclouvain.be/pr/boreal/object/boreal%3A76322/datastream/PDF_01/view)): two error-tagged corpora of argumentative essays by French-speaking university students, about 75,000 words each (second-year "post-intermediate" and fourth-year "advanced").
  - Verb errors (774): auxiliaries 317 (41%), tense 248 (32%), finite/non-finite 91, concord 72, morphology 29, voice 17.
  - Tense errors had the **lowest progress rate** between the two levels (35%, against 66–69% for auxiliaries, concord and voice). The author calls this "extremely disappointing".
  - The fetched text gives no breakdown or examples of the auxiliary category, so this profile does **not** use it as evidence for do-support specifically.
  - Only the verb tables were read; the corpus is Belgian (Louvain), not France.
- **Littré 2015** ([Corpus Linguistics and Linguistic Theory 11(1)](https://www.degruyterbrill.com/document/doi/10.1515/cllt-2014-0007/html); abstract only): 75 intermediate French-speaking first-year university students; interpretation task plus the LONGDALE learner corpus. They "still made errors with basic functions" of both the present simple and the present progressive. No rates in the abstract.
- **Garnier 2012** ([EUROCALL Review](https://eurocall.webs.upv.es/documentos/newsletter/papers_20(1)/14_garnier.pdf)): French section of ICLE (226,922 words, B2–C1). Determination is the most common noun-phrase error, ahead of noun + noun compounds (5.32% of N+N segments wrong).
- **Murakami & Alexopoulou 2016** (Cambridge Learner Corpus, 11,893 scripts, via OTHERS.md; the PDF was not on this session's allowlist): for French learners, progressive -ing is one of only two morphemes still below 90% accuracy at CPE (C2); possessive 's ranks lower for French and German learners than for Japanese and Korean learners; French learners' article accuracy is in the upper half.
- **Pronunciation:** Dupoux, Sebastián Gallés, Navarrete & Peperkamp 2008 ([Cognition 106](https://www.research.unipd.it/handle/11577/2714082); abstract only); Tremblay 2008 ([Applied Psycholinguistics 29](https://cambridge.org/core/journals/applied-psycholinguistics/article/is-second-language-lexical-access-prosodically-constrained-processing-of-word-stress-by-french-canadian-second-language-learners-of-english/E055E2BF1F22A580F396FD2E64DCEA84); abstract only); Mah, Goad & Steinhauer 2016 ([Frontiers in Psychology 7](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01469/pdf)); [Pronunciation Studio](https://pronunciationstudio.com/french-speakers-english-pronunciation-errors/); an academy teaching document on a 6e class ([ac-versailles](https://anglais.ac-versailles.fr/IMG/pdf/Phonologie_V7_15_octobre.pdf)).
- **Practitioner sources:**
  - [llexi, Common English errors by French speakers](https://llexi.com/l1-errors/common-english-errors-french-speakers/) (no studies cited);
  - [Sherpas, Les 10 plus grosses erreurs](https://sherpas.com/blog/erreurs-en-anglais/);
  - false-friend lists: [AuFutur](https://aufutur.fr/revisions/langues-vivantes/anglais/faux-amis/) (53 pairs, a revision site) and [MosaLingua](https://www.mosalingua.com/blog/2019/07/31/liste-faux-amis-anglais-francais/) (68 pairs).
- **No learner data was fetched** for French speakers' articles, prepositions, adjective order or countability as error counts. Those items are practitioner lore.

1. **Tense and aspect: present perfect vs prétérit, present for *since/for*, simple vs progressive**
   - Typical errors:
     - *I have seen him yesterday* → *I saw him yesterday* (passé composé *je l'ai vu hier* looks like the present perfect) [inference; the classic French error].
     - *I work here since two years* → *I have worked here for two years* (llexi); *J'ai mon permis depuis 2017* → *I have had my driving license since 2017* (Sherpas).
     - *What do you do now?* → *What are you doing now?*; *I read now* → *I'm reading now* (OTHERS.md).
   - [research-backed] Tense is 32% of verb errors and improves least between the two levels (35%) (Granger 1999). The most frequent confused pair is present simple used where the present perfect is needed (13 cases) against the reverse (7). Present continuous and present simple are confused in both directions (30 and 23). The paper's examples include the present perfect where the past simple is needed (*our life, here, has never been affected* → *was never affected*). **The paper has no *since/for* error example**: the *since/for* half rests on llexi and Sherpas.
   - [research-backed, abstract only] Intermediate learners still err with basic functions of both present forms (Littré 2015).
   - [research-backed, via OTHERS.md] Progressive -ing stays below 90% accuracy even at C2 for French learners (Murakami & Alexopoulou 2016).
   - [curriculum convention] SchoolMouv warns: «il faut éviter de faire du passé composé français son équivalent, car cela ne fonctionne pas toujours».
   - Why: French has one present (*je mange* = I eat / I'm eating) and uses it with *depuis* (*j'habite ici depuis 2010*). The passé composé covers both the English past simple and the present perfect. So expect **both** over-use of the present perfect with finished time and the present instead of the perfect with *since/for*.
2. **The verb core: third-person -s, *does/doesn't*, *did* + base form, *be* with a lexical verb**
   - Typical errors:
     - *He don't get it* → *He doesn't get it* (this profile's reconstruction of Sherpas's point that the *s* goes on the auxiliary, *He doesn't get it*);
     - *I didn't understood* → *I didn't understand* (Sherpas's error type; the rule «seul l'auxiliaire prend la marque du temps» is the fetch tool's wording, not a verified quote);
     - *I'm agree* → *I agree*; *I'm not agree* → *I don't agree* (llexi, Sherpas): a calque of *je suis d'accord*.
   - [research-backed] Concord errors: 72 of 774 verb errors; auxiliary errors: 317, the largest class (Granger 1999; auxiliary errors not broken down in the fetched text).
   - [curriculum convention] Eduscol lists «la prononciation du -s à la troisième personne du singulier» as a 4e phonology objective.
   - [inference] French 3rd-person endings are silent (*il parle* sounds like *je parle*), so the written English -s has no spoken French model. Explain -s by the English subject.
3. **False friends**
   - Typical errors: *actually* for «actuellement» (→ *currently*); *eventually* for «éventuellement» (→ *possibly*); *library* for «librairie» (→ *bookstore*); *assist* for «assister à» (→ *attend*); *sympathetic* for «sympathique» (→ *nice*); *pass an exam* for «passer un examen» (→ *take an exam*); *demand* for «demander» (→ *ask*); *rest* for «rester» (→ *stay*).
   - [curriculum convention] Every French revision site carries a list: AuFutur's 53 pairs and MosaLingua's 68 pairs overlap heavily. llexi and Sherpas open with *actually*. The full grouped list is in §9.
   - No count of false-friend errors was found for French learners.
4. **Articles with generic and abstract nouns; possessives with body parts; jobs**
   - Typical errors: *The life is hard* → *Life is hard* (OTHERS.md); *I love the music* → *I love music*; *I like the coffee* → *I like coffee*; *I broke the arm* → *I broke my arm*; *She is doctor* → *She's a doctor* (*elle est médecin*).
   - [research-backed] Determination is the most frequent noun-phrase error category in the French section of ICLE (Garnier 2012; no percentage in the fetched text).
   - [research-backed, via OTHERS.md] Article accuracy is nevertheless in the upper half for French learners (Murakami & Alexopoulou 2016): the problem is **using** *the* where English has none, not missing articles.
   - [inference] French needs *le/la/les* before every generic subject and object (*J'adore la musique, Les chats sont mignons*), before most country names (*la France*) and with body parts (*Je me suis cassé le bras*). It drops *un/une* before an unmodified job after *être*. All four transfer sources match Spanish, so the es items fit.
5. **Prepositions and verb complements**
   - Typical errors: *depend of* → *depend on*; *interested by* → *interested in*; *I will explain him the software problem* → *explain the software problem to him* (llexi); *I'm waiting the client* → *waiting for* (this profile's reconstruction; llexi gives only the corrected *I am waiting for the client to reply*).
   - [inference] *écouter de la musique* → *listen music* (→ *listen to*); *regarder* → *look* without *at*; *à Paris* → *at Paris* (→ *in Paris*); *arriver à* → *arrive to* (→ *arrive at/in*).
6. **Countability**
   - Typical errors: *informations, advices, equipments* (llexi); *furnitures, evidences* (Sherpas); *my hairs are long* → *my hair is long* (French *les cheveux* is plural) [inference].
   - All [practitioner opinion] except the *hair* item.
7. **Have and make for *be*: *avoir* expressions and *il fait***
   - Typical errors: *I have 25 years* → *I'm 25*; *I have hungry / I have cold* → *I'm hungry / I'm cold*; *You have reason* → *You're right*; *It makes hot* → *It's hot* (*il fait chaud*).
   - [inference] French says *j'ai 25 ans, j'ai faim, j'ai froid, tu as raison* exactly like Spanish *tener*, and *il fait chaud / froid / beau* where English uses *be*. No French source with counts was fetched.
8. **Make vs do, say vs tell, win vs earn** (*faire*, *dire*, *gagner*)
   - Typical errors: *do a mistake* → *make a mistake*; *make sport* → *do sport / play sports*; *make a photo* → *take a photo*; *make a party* → *have a party*; *He said me* → *He told me* [inference]; *I win 2000 euros a month* → *I earn* (Sherpas).
   - llexi gives the make/do rule without examples [practitioner opinion].
9. **Adjectives: position and agreement**
   - Typical errors: *a car red* → *a red car*; *differents ideas* → *different ideas* (OTHERS.md, no source fetched).
   - [inference] Most French adjectives follow the noun and agree in number, exactly as in Spanish.
10. **Questions: intonation without *do*, and inversion with the lexical verb**
    - Typical errors: *You like coffee?* → *Do you like coffee?* (*Tu aimes le café ?*); *Speak you English?* → *Do you speak English?* (*Parles-tu anglais ?*); *How do you call this?* → *What do you call this?* (*Comment ça s'appelle ?*) [all inference].
    - [inference] *Est-ce que* is a useful bridge: it is a fixed question marker that sits where English puts *do*.
11. **Possessives: *'s*, and *his/her* by the owner; *it* for things**
    - Typical errors: *the car of my father* → *my father's car* (OTHERS.md); *Ana loves his brother* → *her brother* (*son frère*: *son* agrees with *frère*); *The report? He has all the figures* → *It has* (llexi, Sherpas).
    - [research-backed, via OTHERS.md] Possessive 's accuracy ranks lower for French and German learners than for Japanese and Korean learners (Murakami & Alexopoulou 2016). es.md §4.1 reports the same lower-half position for Spanish learners, so this is not a French-only problem.
    - [inference] *son/sa/ses* agree with the thing owned, like Spanish *su* but with gender. The anchor is: «*his* = à lui, *her* = à elle».
12. **Gerund vs infinitive and *want* + clause**
    - Typical errors: *before to leave* → *before leaving* (*avant de partir*); *I look forward to see you* → *to seeing you*; *I want that you come* → *I want you to come* (*je veux que tu viennes*) [inference; same structures as Spanish].
13. **Frequency adverbs and word order**
    - Typical errors: *I drink always tea* → *I always drink tea* (*je bois toujours du thé*); *I like very much London* → *I like London very much* [inference].
14. **Future after *when***
    - Typical error: *When I'll get home, I'll call you* → *When I get home…* (*Quand je serai à la maison, je t'appellerai*: French uses the future after *quand*) [inference].
15. ***People / persons*, irregular plurals**: *These persons work…* → *These people work…* (Sherpas) [practitioner opinion].
16. **Pronunciation**
    - **h dropped and inserted** (*'ouse, 'otel*; *h-I h-am*, *[h]as* for *as*).
      - [practitioner opinion] French lacks /h/; examples *house, home, holiday, Harry* (Pronunciation Studio).
      - [research-backed, qualitative] Mah, Goad & Steinhauer 2016 (17 French-speaking learners, ERP study of perception) describe both production patterns, deletion ("'elp for 'help'") and insertion ("[h]as for 'as'", "ead[h]ache for 'headache'"), citing earlier work. They give no production rates.
      - [curriculum convention] The 6e class document makes pupils aware of the «H expiré» from September with a hand in front of the mouth (ac-versailles); Eduscol lists «/h/» among 4e phonology objectives.
    - **th → /s/, /z/** (*sink* for *think*, *zis* for *this*).
      - [practitioner opinion] "speakers often substitute /s/ and /z/" (Pronunciation Studio); the 6e document notes «la réalisation toujours difficile des lettres TH sous ses deux formes».
    - **Word stress: final-syllable stress and weak stress contrast** (*com-for-TA-ble*, *ba-na-NA*, *ho-TEL* fine by chance).
      - [practitioner opinion] "French tends to stress the last syllable of a long word" (Pronunciation Studio: *father, corruption, absolutely, computer*).
      - [research-backed, abstract only] 39 native French speakers who started Spanish after age 10 all kept a short-term memory impairment for stress contrasts and had difficulty using stress in lexical decision: stress "deafness" is "a lasting processing problem" (Dupoux et al. 2008). This concerns Spanish as L2, but the cause is French phonology.
      - [research-backed, abstract only] French Canadian learners of English could use primary stress to recognise words only if they already knew where it falls; "knowing where primary stress falls in English words is not sufficient" (Tremblay 2008). Sample size not shown.
      - [research-backed, abstract only] French Canadian learners producing English nonsense nouns marked stress with cues that differ from native speakers' (pitch or length rather than both) (Tremblay & Owens 2010).
      - Design consequence: show stress on **every** content word in the `pron` field and teach the ˈ mark explicitly (§6).
    - **Vowels**: /iː/–/ɪ/ (*ship/sheep, fit/feet*), /æ/–/ɑː/–/ʌ/ (*hat/heart*, *cat/cut*), rounded NURSE and schwa (*the, first, heard*).
      - [practitioner opinion] Pronunciation Studio lists all three.
      - [curriculum convention] The 6e document says vowels are the main difficulty because they are «ceux qui posent des difficultés de réalisation aux francophones»; Eduscol lists «voyelles courtes et voyelles longues, diphtongues» (4e).
    - **Diphthongs flattened** (*go, don't, show* as pure [o]; *day* as [e]). [practitioner opinion] (Pronunciation Studio).
    - **r made at the back of the mouth**, and every written *r* pronounced (the latter is right for American English). [practitioner opinion] (Pronunciation Studio).
    - **/dʒ/ → /ʒ/** (*job, James, general* with French *j*). [practitioner opinion] (Pronunciation Studio). [inference] By spelling, English *ch* is also read /ʃ/ (*chicken* as «shicken»), so *choose* can sound like *shoes*.
    - **-ed and -s endings.** [inference] Learners say *-ed* as /ɪd/ everywhere (*worked* as two syllables) or drop it, because French final consonant letters are often silent. Eduscol lists the 3rd-person -s pronunciation and the 6e document works on plural /s z ɪz/; no source on *-ed* was fetched.
    - **Silent letters and spelling pronunciation.** [curriculum convention] Eduscol lists «lettres muettes» (4e). [inference] French spelling habits: vowel + *n/m* read as a nasal vowel (*pen* ≈ *pain*), *u* read [y], final *-er* read [e], final *-s* and *-t* dropped (*Paris* without its *s*).

## 5. Learner starting point

**Proficiency (EF EPI 2025)** [research-backed; self-selected online test-takers]
- From EF's own fact sheet: France scores **539**, rank **38**, against a global average of 488. Skill scores are reading 555, listening 524, writing 500 and speaking 456 ([EF EPI 2025 France](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-france-english.pdf)).
- The fact sheet text did not state the band.
- Regions range from Île-de-France 558 down to Corse 489 and the overseas departments (La Réunion 487, Martinique 463, Mayotte 458). Cities: Grenoble 600, Rouen 589, Lille 586, Paris 583, Lyon 577, Marseille 532. Some values were truncated in the fetch.
- **Conflict:** `OTHERS.md` gave 524 (rank ≈49) from a secondary table. EF's own figure (539) replaces it.

**Speaking far below reading.** Speaking (456) is 99 points below reading and **below the global average** even though the overall score is well above it. The typical adult is a false beginner or a B1 reader who understands written English, has seven years of school English behind them, and cannot yet produce a correct spoken sentence with ease.

**Exam and school culture**
- [curriculum convention] English is taught from primary school through collège (6e–3e) with an official progression that names phonology objectives (/h/, short and long vowels, diphthongs, word stress, the 3rd-person -s) and grammar points (présent simple, be + -ing, prétérit, modals) (Eduscol 2026). The bac includes modern-language assessment; its current format was not researched (§11).
- [curriculum convention] **TOEIC** is the dominant certificate in higher education and recruitment. Engineering schools require a score that shows B2 at least, commonly **785**, which the page says is the CTI's graduation requirement ([Digischool](https://www.digischool.fr/articles/toeic/score-minimum-toeic-dingenieur/)). The page does not say where the CTI publishes the figure.
- [curriculum convention] A 2020 decree made an external English certification (such as TOEIC or TOEFL) compulsory for BTS, DUT and licence students; the **Conseil d'État annulled it in June 2022** because national diplomas "must only be dependent on the results of the assessment of students' knowledge and skills" ([Conseil d'État](https://conseil-etat.fr/en/news/bts-dut-and-bachelor-s-degree-certification-in-english-from-an-external-body-should-not-be-required-to-obtain-these-diplomas)). Certification culture remains strong in engineering and business schools.
- **Cambridge** (First, Advanced) and **IELTS / TOEFL** for study abroad, and **work** (English in job interviews and meetings), are plausible motivators; no uptake figures were fetched (§11).

**Cognate advantage** [research-backed figures as reported in es.md §5]
- Finkenstaedt & Wolff's survey counts about 28% of English words from French and 28% from Latin; a business-letter survey gives 41% French (tertiary source, as es.md says). French speakers recognise more English vocabulary on the page than any other group in this project.
- The advantage disappears by ear: the same words carry different stress and vowels (*information, comfortable, photograph*), and French speakers have a measured difficulty with stress (§4.16).
- French schools call such words **«mots transparents»** and teach learners to rely on them; false friends are the matching warning.

**Implications for the app** [inference]
- A1 must be a true A1 in production, even if learners read well.
- Spend lesson weight on typed items, the verb core and the tense–aspect lessons (`continuous`, `perfect`, `perfect-2`, `narrative`).
- Spend card slots on the non-cognate everyday core, phrasal verbs, false friends and uncountables. Keep the five es-only decks (§9).
- Show IPA with stress marks on every card: stress is where the cognate advantage is lost.
- Use goals and plan names that match the motivators: «Voyager», «Travail», «Amis», «Séries et films»; TOEIC-style work phrases in «Travail et e-mails».

## 6. Pronunciation aid policy

**Evidence**
- **What French learners know** [curriculum convention, thin]:
  - In the academy document on one 6e class, pupils meet the phonetic alphabet in a spelling-bee activity: «Où le rencontre-t-on ? Dans le dictionnaire.» They learn that the symbols are «un alphabet des sons, d'un alphabet phonétique» (ac-versailles).
  - The 2026 Eduscol collège guidance lists phonology objectives (/h/ written between slashes, vowel length, diphthongs, word stress) but **does not mention the API** as such. So IPA familiarity is likely but not guaranteed by the curriculum.
  - Bilingual dictionaries sold in France print IPA after each headword [inference; Robert & Collins and Harrap's were not fetched].
- **What French materials show** [practitioner opinion]: Pronunciation Studio and the French-language guides fetched discuss sounds with IPA symbols (/θ/, /ð/, /ɪ/, /iː/, /æ/, /ɑː/), never with French-letter respellings.
- **Against a French-letter respelling** [inference from §4.16]. French spelling-to-sound rules would mislead the reader exactly where French speakers go wrong:
  - **h is silent in French.** A respelling «HÈR» for *hair* is read «èr»: the aid itself would teach h-dropping. There is no French letter for /h/.
  - **No letters for /θ ð/.** Any respelling falls back to *s/z* or a made-up digraph.
  - ***ch* is /ʃ/ in French.** A respelling «TCHOUZ» is clumsy, and «CHOUZ» is read as *shoes*. *j* is /ʒ/, so /dʒ/ needs «dj».
  - **Final consonant letters are often silent** (*petit, et, nous*): «OUEURKT» for *worked* invites a silent *t*.
  - **Vowel + n/m is a nasal vowel**: «PEN» is read [pɛ̃], «FAN» [fɑ̃].
  - ***u* is [y], *ou* is [u], final *-er* is [e], final *e* is silent**: there is no unambiguous spelling for /ʌ/, /ɜːr/ or schwa.
  - **French has no word stress**, and its readers have a measured difficulty encoding it (Dupoux et al. 2008). Capitals are not a habit French readers have.
  - es-en's Spanish respelling cannot be reused either: it writes /h/ as **j**, which French readers say [ʒ].
- **Reuse** [measured locally]: zh-en already carries IPA for **349 of the 480** es-en card targets and **235 of the 356** es-en `{{ex:}}` English strings, identical character for character. Copying them gives consistency with zh-en and pt-en and saves most of the work.
- **No study** compares IPA, respelling and no aid for French learners. The recommendation is [inference]. It inherits zh.md's caveat that the OALD North American notation is used "as remembered".

**Recommendation: IPA in every `pron` field (`"pron": "required"`), using exactly the zh-en notation and rules (as pt-en does), with the key taught on one screen in the `pron` lesson. The interface toggle is «Afficher la prononciation (API)».**

The binding rules are zh.md §6 plus `tools/content/zh/PRON-RULES.md`. fr writers follow them unchanged, so a pron copied from zh-en is already correct. Summary:

1. **Format.**
   - One pair of slashes around the whole transcription, words separated by single spaces.
   - No capitals, digits or punctuation.
   - ` ‖ ` between two sentences in one row; never `|`.
   - Alternatives are written as two slashed groups (`/ˈhaɪ/ /ˈheɪ/`). Never `//`.
2. **Stress.**
   - A closed list of function words stays unmarked: articles, pronouns, *be*, auxiliary *do/have*, modals, prepositions, conjunctions, existential *there*.
   - **Every other word gets ˈ, monosyllables included**: `/aɪ ˈlaɪk ˈtiː/`.
   - Every pron therefore contains ˈ, which `pronPattern` requires. (`pronScript` is not needed: with `nativeScript: null` the validator only asks the pron to differ from the English, which the slashes guarantee, and `pronPattern` already demands ˈ.)
   - ˌ is used only inside long words, in -teen numbers and in letter-by-letter abbreviations.
3. **Symbols.**
   - OALD North American values: oʊ, ɑː for LOT, ɔː for THOUGHT, ɜːr, ər, ɪr/er/ʊr, ɑːr/ɔːr; æ before r as in zh-en (`married` /ˈmærid/, so `Paris` /ˈpærɪs/).
   - **ASCII `g`, plain `r`.** No ɡ, ɹ, ɚ, ɝ or flap symbol.
   - DRESS is **e** (`/ˈbed/`).
   - Final unstressed -y is **i**. Unstressed long vowels lose ː.
4. **Weak forms** as in zh PRON-RULES §B: *a* /ə/, *the* /ðə/ (/ði/ before a vowel), *to* /tə/, *for* /fər/, *of* /əv/, *and* /ənd/, *can* /kən/, *are* /ər/, *was* /wəz/, *you* /ju/, *do* /də/, *could* /kəd/.
5. **Codas are written in full.**
   - -s is /s z ɪz/ and -ed is /t d ɪd/ as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/. For French learners this is the cue that *worked* has one syllable.
   - Syllabic l and n follow zh PRON-RULES §A.4: `people` /ˈpiːpl/, `student` /ˈstuːdnt/.
6. **Names** as the en-US voice says them: `Paris` /ˈpærɪs/, `France` /ˈfræns/, `Lucas` /ˈluːkəs/. Numbers as words. Abbreviations letter by letter.
7. **Practice items carry no pron** (PRACTICE-SPEC).
8. **Copy first.** For any English string identical to a zh-en card target or `{{ex:}}` row, copy zh's pron exactly. Write new IPA only for strings zh lacks:
   - the five es-only decks;
   - the 18 extra phrasal-verb cards;
   - localised targets;
   - rebuilt `pron` and `false-friends` items.
   - Where pt-en has already written IPA for an es-only string, copy pt's (the two courses share the es English side). Content agents may copy `tools/content/zh/pron_check.js` into `tools/content/fr/` and run it to catch conflicting transcriptions; `lint.js` blocks two different aids for one English text.
9. **Convert every Spanish respelling** quoted in card notes, lesson prose and check options: «KAMF-ter-bel», «LI-rel», «SKUUL», «ther-TIIN» and similar. They are in `pron`, `numbers`, the «Cognados y acento» notes, «Supervivencia 1» notes and others. Replace each with IPA or with a French description. A search for the capitalised-syllable pattern `[A-Z]{2,}-` in `tools/content/fr/` finds most of them; also search for `[A-Z]{4,}` in notes.

**The key for the `pron` lesson** (one screen, French reference sounds, French traps flagged ⚠):

| IPA | Sound | Comme en français | Example |
|---|---|---|---|
| iː | long, tense i | «i» de «midi», plus long | sheep /ˈʃiːp/ |
| ɪ | short, relaxed i | entre «i» et «é», bref et relâché ⚠ | ship /ˈʃɪp/ |
| e | DRESS | «è» bref de «sept» | bed /ˈbed/ |
| æ | TRAP | «a» très ouvert, presque «è», bouche grande ouverte ⚠ | cat /ˈkæt/ |
| ʌ | STRUT | «a» bref et central; **pas «eu»** ⚠ | cut /ˈkʌt/ |
| ə | schwa (weak) | le «e» de «le», très faible | about /əˈbaʊt/ |
| ɑː | LOT | «a» de «pâte», long | hot /ˈhɑːt/ |
| ɔː | THOUGHT | «o» ouvert de «porte» | talk /ˈtɔːk/ |
| uː / ʊ | long u / short u | «ou» long / «ou» bref et relâché | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | NURSE / weak -er | voyelle centrale, lèvres **non arrondies**, puis r anglais ⚠ | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ oʊ aʊ | diphthongs | deux sons qui glissent: **day n'est pas «dé», go n'est pas «go»** ⚠ | day /ˈdeɪ/, go /ˈgoʊ/ |
| p t k | stops | avec un petit souffle au début d'une syllabe accentuée | tea /ˈtiː/ |
| θ / ð | th | langue entre les dents, sans voix / avec voix; **ni «s» ni «z»** ⚠ | think /ˈθɪŋk/, this /ˈðɪs/ |
| h | | un souffle qu'on entend, comme pour embuer une vitre; **ne l'oublie pas, ne l'ajoute pas** ⚠ | hair /ˈher/, air /ˈer/ |
| r | English r | langue recourbée vers l'arrière, sans toucher le palais; **pas le «r» de gorge** ⚠ | red /ˈred/ |
| ʃ / ʒ | | «ch» de «chat» / «j» de «jour» | she /ʃi/, usually /ˈjuːʒuəli/ |
| tʃ / dʒ | | «tch» de «tchèque» / «dj» de «djembé». **Le *j* anglais est dʒ, pas le «j» de «jour»; *ch* se dit souvent tʃ** ⚠ | chair /ˈtʃer/, job /ˈdʒɑːb/ |
| m / n / ŋ | nasals | lèvres fermées / langue contre les dents / «ng» de «parking». **Ne nasalise jamais la voyelle avant** ⚠ | ten /ˈten/, sing /ˈsɪŋ/ |
| w / j | semivowels | «ou» de «oui» / «y» de «yeux». **Le *j* de l'API est le *y* anglais** ⚠ | we /wi/, yes /ˈjes/ |
| ˈ | stress | se place **avant** la syllabe accentuée, qui n'est pas forcément la dernière ⚠ | hotel /hoʊˈtel/, comfortable /ˈkʌmftərbl/ |

Under the table, the lesson body says three more things:
- «En anglais, chaque mot a une syllabe plus forte que les autres. Le petit trait ˈ te dit laquelle: *banana* /bəˈnænə/, pas «ba-na-NA».»
- In American English a *t* between vowels sounds like a quick «d» (*water*, *city*). The aid does not write this; the audio does.
- Once, the most common reading trap: the IPA letter *j* is the English *y*, and the IPA *ʒ* is the French *j*.

**Worked examples** (all pass the proposed `pronPattern` and the validator's differs-from-English test; 38 strings checked locally):

| Lesson / deck | English | `pron` | Source |
|---|---|---|---|
| Survie 1 | Excuse me. | /ɪkˈskjuːz mi/ | copied from zh-en |
| Survie 1 | Thank you. | /ˈθæŋk ju/ | copied from zh-en |
| it-there | It's raining. | /ɪts ˈreɪnɪŋ/ | copied from zh-en |
| questions | Does she live here? | /dəz ʃi ˈlɪv ˈhɪr/ | copied from zh-en |
| be | I'm hungry. | /aɪm ˈhʌŋgri/ | copied from zh-en |
| Se présenter (new target) | I'm from France. | /aɪm frəm ˈfræns/ | new, frame of zh "I'm from China." |
| Se présenter (new target) | I live in Paris. | /aɪ ˈlɪv ɪn ˈpærɪs/ | new, frame of zh "I live in China." |
| Survie 1 (new target) | Do you speak French? | /də ju ˈspiːk ˈfrentʃ/ | new, frame of zh "Do you speak Chinese?" |
| Compliments (new target) | Your French is really good! | /jʊr ˈfrentʃ ɪz ˈriːəli ˈgʊd/ | new, frame of zh |
| past | worked · played · wanted | /ˈwɜːrkt/ · /ˈpleɪd/ · /ˈwɑːntɪd/ | new |
| Pièges (new targets) | hair · air | /ˈher/ · /ˈer/ | new |
| Pièges (new targets) | eat · heat | /ˈiːt/ · /ˈhiːt/ | new (zh has both inside sentences) |
| Pièges (new targets) | cat · cut | /ˈkæt/ · /ˈkʌt/ | new |
| Pièges | hotel | /hoʊˈtel/ | copied from zh-en |
| Faux amis (new targets) | disappointed · demand · lecture | /ˌdɪsəˈpɔɪntɪd/ · /dɪˈmænd/ · /ˈlektʃər/ | new |
| Faux amis (new targets) | rest · coin · large | /ˈrest/ · /ˈkɔɪn/ · /ˈlɑːrdʒ/ | new |
| Faux amis (new targets) | sympathetic · journey | /ˌsɪmpəˈθetɪk/ · /ˈdʒɜːrni/ | new |
| Faux amis | actually · eventually | /ˈæktʃuəli/ · /ɪˈventʃuəli/ | new |
| perfect-2 (prose) | I've lived here for two years. | /aɪv ˈlɪvd ˈhɪr fər ˈtuː ˈjɪrz/ | new |
| Mots transparents | comfortable · photograph | /ˈkʌmftərbl/ · /ˈfoʊtəgræf/ | new |
| false-friends (prose) | Can I ask you something? | /kən aɪ ˈæsk ju ˈsʌmθɪŋ/ | new |

The four es cards that needed a Spanish tag to differ from the target (`SHIP (i corta)` etc., es PRON-RULES §4) need no tag in IPA: `ship` /ˈʃɪp/, `think` /ˈθɪŋk/, `sink` /ˈsɪŋk/, `milk` /ˈmɪlk/.

## 7. Standing practice rule

**Rule: keep es.md §7 "verb core" unchanged** (noyau verbal : accord + auxiliaire + sujet obligatoire). In every lesson's practice set, **at least half of the `order` and `type` items together must hinge on the verb core**. The verb core means:
- subject–verb agreement (-s / *is–are* / *has* / *does*);
- the auxiliary in questions and negatives (*do/does/did*, or inversion with any auxiliary);
- dummy *it* or *there* as subject (typed items).

The definitions of "hinging" for `order` and `type` are es.md §7 word for word. The validator kind `verb-core` implements them heuristically: an order item hinges when its `why` names the point **and** `x` holds an agreement twin of a tile or `a` starts with an auxiliary or wh-word + auxiliary; a type item hinges when its `why` names the point **and** `a[0]` has a third-person form, *do/does/did*, inversion or a dummy subject.

**Why keep it rather than a tense–aspect rule:**
- OTHERS.md proposed a new kind `tense-aspect` for French (progressive vs simple, present perfect with *since/for*). It is not implemented in `validate.js`, and tense is lesson-bound: a perfect-tense hinge in `plurals` or `polite` would be artificial. The tense–aspect evidence (§4.1) is served by `continuous`, `tense`, `perfect`, `perfect-2`, `past-continuous` and `narrative` instead [inference].
- [research-backed] The verb core is attested for French speakers: concord errors (72) and auxiliary errors (317) are verb-error classes in Granger 1999, and *I'm agree*, *I didn't understood* and *He don't* are the practitioner examples (§4.2). The fetched text does not break auxiliary errors down, so it does not prove do-support errors specifically.
- **Parity cost decides it** [inference]. Every es-en order/type item was reworked to hinge on the verb core (es deviations.json). Keeping the rule means fr translates the `why` lines and changes no English. A new rule would force English-side changes in about 37 lessons.
- **The «sujet» leg is weak for French** [inference]. French, unlike Spanish and Portuguese, always has a subject (*il pleut, c'est important, il y a*), so *Is raining* is not a French error. What French speakers get wrong around dummy subjects is the verb that follows: *il y a* is invariable, so *There is three trees*; *il fait chaud* gives *It makes hot*. The `why` lines of dummy-subject items should explain the French trap (agreement after *there*, *be* after *it*), and the es distractors built on Spanish *hay* (`x:["Has"]`) are harmless but should not be explained as a French error. **Every `why` that hinged in es must still contain one of the four keywords**, or the item stops counting and `[vc N]` falls below es: «sujet» stays true for these items, because English *it* and *there* are subjects exactly as the impersonal «il» of *il pleut* is.

**Validator keywords** (`flags: "i"`):

```
sujet|auxiliaire|troisi[èe]me personne|(?<!d['’])accord
```

- Use them like this:
  - «sujet» for dummy *it/there* and for inversion («l'auxiliaire passe devant le sujet»);
  - «auxiliaire» for *do/does/did* and inversion;
  - «troisième personne» for -s, *does*, *has*;
  - «accord» for *is/are*, *was/were*, *there is/are*.
- The class `[èe]` accepts «troisieme» typed without the accent, but always write «troisième».
- `(?<!d['’])accord` keeps «d'accord» from counting: *I'm agree* items will mention «je suis d'accord», and that must not make an item count as naming agreement (tested locally: «… « je suis d'accord » se traduit sans "be"» does not match; «l'accord sujet-verbe» does). The lookbehind is plain JavaScript (`validate.js` builds `new RegExp(keywords, flags)`).
- Do not use these words in `why` lines of items that do not hinge. Note that «sujet» is also an everyday word («au sujet de»): avoid it outside hinging items.
- Sample `why` lines (plain strings, English in straight double quotes):
  - «Avec "she", le verbe prend un -s : troisième personne.»
  - «Au présent, une question a besoin de l'auxiliaire "do/does".»
  - «Dans la question, l'auxiliaire "can" passe devant le sujet.»
  - «« Il y a » + pluriel : "There are", avec accord.»
  - «« Il fait chaud » ne se traduit pas avec "make" : le sujet "it" + "is".»
  - «Au prétérit, seul l'auxiliaire "did" porte le passé : "didn't understand", pas "didn't understood".»

**Translating es `why` lines.** Map «sujeto» → «sujet», «auxiliar» → «auxiliaire», «tercera persona» → «troisième personne», «concordancia» → «accord». An item that hinged in es still hinges in fr. Run `validate.js fr` and compare the `[vc N]` counts with es's: they must be identical lesson by lesson, except in `pron` and `false-friends`.

**Count:** as es.md §7. A 14-item set has 6–8 order+type items, and at least 3 (for 6) or 4 (for 7–8) must hinge.

## 8. Curriculum deviations from the Spanish-speaker course

**Policy.**
- Keep all 41 es-en lesson ids, their order and their English side.
- Rewrite every explanation, prompt, `why` and hint from the French point of view (PILOT-SPEC §3). That is not a deviation.
- Change the English side only where a Spanish-specific item would mislead French speakers.

**Verdicts:**
- **keep**: the contrast is the same in French; translate and localise the es explanation.
- **adapt**: same English side, but the explanation and French prompts must say something different for French speakers.
- **change**: English side changes, which needs a deviation.

All verdicts are [inference] built on §4.

| # | Lesson id | Verdict | Note for French speakers |
|---|---|---|---|
| 1 | pron | **change** (lesson deviation) | Replace the Spanish traps (b/v, prothetic e, j/y) with French ones: h dropped and added, th → s/z, word stress, /ɪ/–/iː/, /æ/–/ʌ/, diphthongs, *ch*/*j* read the French way. Teach the IPA key (§6). Item map below. |
| 2 | be | adapt | *être* → *be* is easy (one verb, unlike *ser/estar*). The French twist is *avoir*: *j'ai 25 ans / faim / froid / peur*, *tu as raison* → *I'm 25 / hungry / cold / scared*, *You're right*. Add *I agree*, never *I'm agree* (*je suis d'accord*), in the body. |
| 3 | it-there | adapt (not the core lesson it is for Spanish) | French always has a subject (*il pleut* → *It's raining* maps one to one). Teach the two French traps: **«il y a» is invariable, "there is/are" agrees** (*There are three trees*, not *There is*), and **«il fait chaud» → *It's hot***, not *It makes hot*. The es items with `x:["Has"]` stay for parity; their `why` names agreement or the subject, not a French error. |
| 4 | articles | adapt + technical deviation | Same contrasts as Spanish: *Elle est médecin* → *She's a doctor*; *a/an* by sound (*an hour*: French *heure* also has a silent *h*, which helps). Check 0's option 3 «(nada)» is Spanish text read as English by parity: write «(rien)» and record the technical deviation (below). |
| 5 | plurals | adapt | Adjectives never take -s (*des voitures rouges* → *red cars*); *people*, not *persons* (Sherpas); *this/these* /ɪ/–/iː/. |
| 6 | present | adapt | Subject is never a problem. Focus on *I don't*, not *I not*, and on **frequency adverbs before the verb** (*Je bois toujours du thé* → *I always drink tea*; es check 2 and mc 4 fit). Say once that French *je mange* = *I eat* and *I'm eating* (lesson 14). |
| 7 | questions | adapt | French asks by intonation (*Tu aimes le café ?*) or with *est-ce que*. Present *do* as the slot where French puts *est-ce que*. The inversion distractor *Speak you English?* (mc 0) is the French *Parles-tu anglais ?*: say so. |
| 8 | third-s | keep | French 3rd-person endings are silent, so the English -s is invisible to the ear; teach its sounds /s z ɪz/ (Eduscol 4e). |
| 9 | prep | adapt | *à / en / dans* → *in / on / at*. *à Paris* → *in Paris* (never *at Paris*); *en mai* → *in May*; *le 3 mai* → *on May 3rd*; *à 7 heures* → *at 7*. |
| 10 | countable | adapt | *des informations, des conseils, des meubles, des bagages, des devoirs* → uncountable (llexi, Sherpas). Add *les cheveux* → *my hair is* in the body. |
| 11 | object-have | adapt | *son/sa* agrees with the thing: *Ana aime son frère* → *Ana loves **her** brother* (mc 2 fits exactly). Anchor «*his* = à lui, *her* = à elle». French object pronouns go before the verb (*je l'aime*), so the distractor *I her love* is a real French error. Add the génitif to the body: *la voiture de mon père* → *my father's car* (§4.11), with no English-side change. |
| 12 | can-like | adapt | *aimer* is not reversed like *gustar*, so drop es's "Pizza likes me" emphasis from the body (the mc distractor stays; harmless, keeps parity). French twists: *je sais nager* → *I can swim* (*savoir* and *pouvoir* both give *can*); *j'aimerais* → *I'd like*. |
| 13 | polite | keep + technical deviation | *tu / vous* → *you*. Check 2's options 0 and 1 are Spanish text that parity reads as English (below): «Base verbale (open)», «to + base verbale (to open)». |
| 14 | continuous | adapt (core lesson for French) | French has no progressive (*être en train de* is marked): *Qu'est-ce que tu fais ?* → *What are you doing?*, not *What do you do?* Progressive -ing stays below 90% even at C2 for French learners (via OTHERS.md); present simple and continuous are confused both ways (Granger 1999). Keep the stative distractors (*I'm knowing him*). |
| 15 | past | adapt | **-ed is /t/, /d/ or /ɪd/**: *worked* has one syllable. *did* + base form: *I didn't understand*, not *I didn't understood* (Sherpas). Call the tense «prétérit». |
| 16 | irregular-past | keep | |
| 17 | the | adapt | The strongest French article trap: **generic nouns without *the*** (*J'aime le café* → *I like coffee*; *La vie est belle* → *Life is beautiful*). Body parts (*Je me suis lavé les cheveux* → *I washed my hair*). Countries (*la France* → *France*, but *the United States*). |
| 18 | adjectives | adapt | Before the noun and invariable (*une voiture rouge* → *a red car*); *plus grand que* → *bigger than*, never *more big* or *bigger that*. |
| 19 | going-to | keep | *je vais + infinitif* (futur proche) is a direct parallel. |
| 20 | tense | keep | |
| 21 | joining | keep | *parce que* → *because*, *à cause de* → *because of*. |
| 22 | numbers | adapt + technical deviations | Decimal comma in France (*2,5* → *two point five*). **France uses the long scale: *un milliard* = one billion; French *un billion* = one trillion**, exactly the Spanish *billón* trap, so the es point and items fit [inference, flag]. Years: *nineteen ninety*, not «mille neuf cent…». Dates *le 15 novembre* → *November 15th*. Checks 1 and 2 need technical deviations. Read *25 €* as *twenty-five euros* in the body; practice keeps dollars. |
| 23 | smalltalk | keep | Localise (§9). |
| 24 | false-friends | **change** (lesson deviation) | Partial rebuild with French false friends; item map below. |
| 25 | past-continuous | adapt | The French *imparfait* covers both *was doing* and *used to do*; teach *was/were + -ing* for an action in progress and the past simple for a series. |
| 26 | will | keep | Present for offers (*Je t'aide* → *I'll help you*) matches es's "I help you." distractor. |
| 27 | perfect | adapt (core lesson for French) | **Never «passé composé»** (SchoolMouv's warning, §3). The French error goes the other way from pt's: over-use with finished time (*Je l'ai vu hier* → *I saw him yesterday*, not *I have seen him yesterday*). Finished-time words force the prétérit; check 2 and mc 4 fit exactly. Accept US *Did you ever…?* |
| 28 | modals | keep | *tu ne dois pas* (mustn't) vs *tu n'es pas obligé de* (don't have to): the French split matches English, which helps. |
| 29 | to-ing | keep | *avant de partir* → *before leaving*; *je veux que tu viennes* → *I want you to come*; *j'ai hâte de te voir* → *I'm looking forward to seeing you*. The es items fit French exactly. |
| 30 | make-do | **keep, carries over fully** | *faire* = make/do, *dire* = say/tell, exactly as *hacer/decir*. Add body lines for the French calques *faire du sport* (→ *do sport / exercise*), *faire une photo* (→ *take a photo*), *faire la fête* (→ *party / have a party*) and *gagner* (*earn* money, *win* a game). The English items are unchanged. |
| 31 | articles-2 | adapt | Generic nouns and plurals without *the* (*Les chats sont mignons* → *Cats are cute*; *J'adore la musique* → *I love music*): every es item fits. |
| 32 | first-conditional | adapt | *si* + présent maps directly; French never puts the future after *si* either. The French trap is **after *quand***: *Quand je rentrerai, je t'appellerai* → *When I get home, I'll call you* (mc 4 fits exactly). |
| 33 | relative | keep | *qui* = *who/that/which*, *que* = *that/which* (or nothing); *ce que* → *what*. |
| 34 | phrasal | keep + technical deviation | Latinate verb vs phrasal (*entrer* → *come in*, *continuer* → *go on*, *éteindre* → *put out*). Check 1 is Spanish text (deviation). |
| 35 | perfect-2 | adapt (core lesson for French) | ***depuis*** → ***since / for*** with the present perfect: *J'habite ici depuis 2010 / depuis dix ans* → *I've lived here since 2010 / for ten years*; never *I live here since…* or *I am here since two years* (llexi, Sherpas). *How long have you been here?* for *Depuis combien de temps es-tu là ?* |
| 36 | narrative | keep | Granger 1999 notes that the French past perfect has a wider range of uses than the English one: warn against *had* + participle for a simple sequence. |
| 37 | conditionals | keep | *Si j'étais toi* → *If I were you*; never *would* after *if* (French never puts the conditionnel after *si* either). |
| 38 | passive | keep | *On parle anglais ici* → *English is spoken here*. The distractor *Here speaks English* fits French less than Spanish; harmless. |
| 39 | reported | keep | say/tell recap: *Il m'a dit* → *He told me*, not *He said me*. |
| 40 | email | adapt | *Dans l'attente de votre réponse* → *I look forward to hearing from you*; check 1's option *I remain attentive* is a French calque (*je reste à votre écoute*): say so. *Cordialement* ≈ *Best regards*; *Madame, Monsieur* ≈ *Dear Sir or Madam*. |
| 41 | idioms | keep + technical deviation | French equivalents in prompts: «c'est du gâteau» (*a piece of cake*, same image), «coûter les yeux de la tête», «quand on parle du loup», «faire d'une pierre deux coups», «il pleut des cordes», «quand les poules auront des dents», «tu me fais marcher» (*you're pulling my leg*). Check 1 needs a technical deviation (Spanish options). |

**`pron` lesson: English-side item map** (same item count and types as es; under `lessons.pron`). The three order items and three type items still satisfy verb-core: order 5 and 7 have an *is/are* twin in x, order 6 starts with *Is* (x "are"), type 11 has *There are*, type 12 starts with *It's*, and type 13 has none, which leaves 5 of 6.

| es item | Keep / replace | fr item (English side) |
|---|---|---|
| check 0 sheep/ship | keep | — |
| check 1 school (options Spanish text) | replace with an h question | q «Comment se prononce "hotel" ?» options «Sans h, comme « hôtel »», «Avec un « r » de gorge au début», «En deux syllabes égales, sans accent», «Avec un souffle au début : /hoʊˈtel/» (answer index 3 as es) |
| check 2 comfortable stress | keep the point, rewrite options | «Sur la fin, comme « confortable »», «Sur « for »», «Au début : /ˈkʌmftərbl/», «Aucune syllabe n'est accentuée» (index 2) |
| P0 sheep | keep | |
| P1 very/berry | replace | «Quel mot veut dire « cheveux » ?» o `["hair","air","ear","here"]` |
| P2 shoes/choose | keep | French reads *ch* as /ʃ/, so *choose* said the French way is *shoes*; rewrite the `why` |
| P3 fool/full | keep | |
| P4 joke/yolk | replace | «Quel mot veut dire « manger » ?» o `["eat","heat","hit","it"]` |
| P5 My school is in Madrid | replace | p «Mon hôtel est à Paris» a `["My","hotel","is","in","Paris"]` x `["are","at"]` (h in *hotel*, *à* → *in*; hinge: *is/are*) |
| P6 Is the soup very hot (x berry) | change x only | x `["are"]` (h in *hot*; hinge: inversion) |
| P7 We are from Spain (x is, Espain) | localise, change x | a `["We","are","from","France"]` x `["is"]` |
| P8 __udent | replace | q "__is is my sister." p «C'est ma sœur» a `["Th"]` o `["Z","D","S"]` (voiced th, not z) |
| P9 __ink (th) | keep | o s/t/f fits French substitutions |
| P10 __ery (v/b) | replace | q "Welcome to my __ouse." p «Bienvenue chez moi» a `["h"]` o `["r","m","l"]` |
| P11 three trees | keep | `why` names agreement: «il y a» → "There are" |
| P12 x berry | change x only | x `["makes"]` (*il fait chaud* → *It makes hot*) |
| P13 I think so / sink | keep | |

**`false-friends` lesson: rebuild** (under `lessons.false-friends`). Eight of the 14 practice items and one of the three checks work for French unchanged in English, and P8 and check 1 only need Mexico/Madrid localised: *actually/actuellement*, *attend*/*assist* (*assister à*), *sensible*, *library/librairie* and *realize* are shared Spanish–French false friends. Replace the items built on Spanish-only traps:
- *embarrassed/embarazada*: French *embarrassé* means "embarrassed, awkward", so there is no trap.
- *carpet/carpeta*: French *carpette* is a small rug, close to a true cognate.
- *success/éxito* and *exit*: French *succès* is a true cognate, and *exit* has no French look-alike.
- *pregnant*: only a trap through Spanish *embarazada*.

| es item | Keep / replace | fr item |
|---|---|---|
| check 0 embarrassed | replace | «Que veut dire "I'm disappointed" ?» options French: «Je suis trompé», «Je suis déçu / déçue», «Je suis désolé / désolée», «Je suis fatigué / fatiguée» (index 1) |
| check 1 Actually/Currently … Madrid | keep English, localise | "…, I live in Paris." (index 2); q «Comment dit-on « Actuellement, j'habite à Paris » ?» |
| check 2 bookstore/library | keep | «La librairie ouvre à neuf heures» |
| P0 actually (French options) | keep, translate options | «en fait», «actuellement», «activement», «parfois» |
| P1 pregnant | replace | «Comment dit-on « Je peux te demander quelque chose ? » ?» o `["Can I ask you something?","Can I demand you something?","Can I demand something?","Can I ask to you something?"]` |
| P2 attend class | keep | «J'assiste au cours le lundi» |
| P3 sensible | keep, translate options | «Il est très raisonnable.», «Il est très sensible.», «Il est très sentimental.», «Il est très sympathique.» |
| P4 success/exit | replace | «Comment dit-on « Elle est très sympathique » ?» o `["She's very nice.","She's very sympathetic.","She's very sensible.","She's very simple."]` |
| P5 Where is the exit (x success) | replace | p «Où est la librairie ?» a `["Where","is","the","bookstore"]` x `["library"]` (hinge: *Where is* inversion; `why` names «sujet») |
| P6 She works at the library | keep | |
| P7 Did you realize | keep | |
| P8 "__, I'm from Mexico." | localise | "__, I'm from France." p «En fait, je viens de France» |
| P9 bookstore | keep | |
| P10 carpet | replace | q "I found a __ in my pocket." p «J'ai trouvé une pièce dans ma poche» a `["coin"]` o `["corner","piece","room"]` |
| P11 I'm embarrassed | replace | p «Elle est déçue» a `["She is disappointed","She's disappointed","She feels disappointed"]` hint «she · disappointed — pas "deceived"» x `["deceived"]`. The hinge is *is*, so a[0] must be the full form: validate.js reads "she's" as one token and would not count it. |
| P12 He didn't realize | keep | |
| P13 She attends class (x assists) | keep | stronger for French: *assister à* = attend |

The lesson body groups the false friends as in §9 and adds the partial ones: *parents* (French *parents* = parents **and** relatives), *discuss* («discuter» = chat; and never *discuss about*), *realize* (modern French *réaliser* also means "se rendre compte", so it is half true). The lesson keeps its deck link to deck 21, «Faux amis».

**No fr-only lesson.** The brief allows one only if the evidence is strong.
- The strongest French-specific evidence is tense and aspect (Granger 1999; Murakami via OTHERS.md; Littré 2015). It is owned by `continuous`, `perfect`, `perfect-2`, `past-continuous` and `narrative`, which this profile marks as core lessons.
- **Possessive 's** has corpus support (via OTHERS.md) and no es lesson owns it, but the same corpus puts Spanish learners in the lower half too, so it is not French-specific; the source PDF could not be read. It goes into the `object-have` body with no English change.
- **Verb + preposition** (pt's conditional `verb-prep`): for French the evidence is practitioner only (llexi). Fold *depend on, interested in, wait for, listen to* into the `prep` body.
- **Pseudo-anglicisms** (*un parking, un smoking, le footing*) belong in the false-friends body and the «Faux amis» deck notes.
- **Word stress**: research-backed (Dupoux et al. 2008), but typed practice cannot test it; it belongs in `pron`, the `pron` field and «Mots transparents et accent».

**Technical item deviations (no real English change).** `parity.js` decides which reference check options are "native" with the **es** `cueTest` (flags `ui`). Six es-en checks have options in Spanish that es `cueTest` does not catch (no accent, no listed word), so parity compares them as English and a French translation fails. Found by script over all 41 lessons' check options and practice mc options:

| Key | es options read as English | French |
|---|---|---|
| `articles#check0` | «(nada)» (option 3) | «(rien)». pt needed no entry because Portuguese «nada» is the same word |
| `polite#check2` | «Infinitivo sin to (open)», «to + infinitivo (to open)» (options 0–1) | «Base verbale (open)», «to + base verbale (to open)». pt needed only option 0 |
| `numbers#check1` | «En teen (al final)», «En thir (al principio)» | «Sur teen (à la fin)», «Sur thir (au début)» |
| `numbers#check2` | «mil millones», «cien millones» | «un milliard», «cent millions» (and option 1 «un billion (mille milliards)», which parity skips) |
| `phrasal#check1` | «Salir corriendo», «Quedarse sin algo, acabarse», «Llegar tarde» | «Partir en courant», «Ne plus en avoir, manquer de», «Arriver en retard» |
| `idioms#check1` | «Hace mal tiempo.», «Estoy al aire libre.», «No me siento muy bien.» | «Il fait mauvais.», «Je suis dehors.», «Je ne me sens pas très bien.» |

- **Spanish-only English distractors that stay** (English, so compared and kept): `idioms` mc 2 *You're taking my hair* (Spanish *tomar el pelo*; French says *tu me fais marcher*), `present` mc 1 *I no eat meat* (French negates with *ne… pas*, so the French error is *I not eat*), `email` *I stay waiting your answer* (Spanish *quedo a la espera*). Their `why` must explain the right English for French speakers, not translate the Spanish reasoning.
- The same scan over every practice mc `o` in all 41 lessons found Spanish only in `pron` and `false-friends`, which are exempt anyway. Practice `a`, `x` and fill `q` are English throughout.
- Pipeline note, not for fr agents: extending es `cueTest` with `|\b(nada|sin|al|en|mil|cien|millones|salir|llegar|quedarse|hace|estoy|siento|muy|infinitivo)\b` would remove these deviations for every es-based course. That is the es owner's call, because it also changes es cue injection.

**Paste-ready `tools/content/fr/deviations.json`.** Deck keys are **0-based pack order** (the order of `DECKS` in the generated pack, as in §9), not DECKNAMES.md numbering. `false-friends` and `make-do` are in es-en already, so they must **not** be in `extraLessons`; parity would fail with "ko-en has it too". They are only in `profile.json` `lessonOrder.after`, which gen.js needs to place them.

```json
{
  "lessons": {
    "pron": "profile fr.md §8 pron: French sound traps (h dropped and added, th as s/z, word stress, ee/i, a/u, ch and j read the French way, il fait -> makes) replace the Spanish b/v, prothetic e, j/y items (checks 1-2, P1, P4, P5, P6 x, P7, P8, P10, P12 x)",
    "false-friends": "profile fr.md §8 false-friends: Spanish-only traps (embarrassed/embarazada, pregnant, carpet/carpeta, success/exit) replaced by French false friends (disappointed/déçu, demand/demander, sympathetic/sympathique, coin, bookstore/librairie); Madrid/Mexico localised to Paris/France (check 0, check 1, P1, P4, P5, P8, P10, P11)"
  },
  "items": {
    "articles#check0": "technical: es-en option 3 «(nada)» is Spanish text not caught by es cueTest; French «(rien)» (profile fr.md §8)",
    "polite#check2": "technical: es-en options 0-1 are Spanish text not caught by es cueTest; French «base verbale» (profile fr.md §8)",
    "numbers#check1": "technical: es-en options 2-3 are Spanish text not caught by es cueTest; French translation (profile fr.md §8)",
    "numbers#check2": "technical: es-en options 0 and 2 are Spanish text not caught by es cueTest; French «un milliard», long scale (profile fr.md §8)",
    "phrasal#check1": "technical: es-en options 0, 1, 3 are Spanish text not caught by es cueTest; French translation (profile fr.md §8)",
    "idioms#check1": "technical: es-en options 0-2 are Spanish text not caught by es cueTest; French translation (profile fr.md §8)"
  },
  "decks": {
    "1": "profile fr.md §9: I'm from Mexico. -> I'm from France.; I live in Lima. -> I live in Paris.",
    "2": "profile fr.md §9: Do you speak Spanish? -> Do you speak French?",
    "11": "profile fr.md §9: Your Spanish is really good! -> Your French is really good!",
    "17": "profile fr.md §9: Spanish traps yet/jet, very/berry, vote/boat replaced in place by hair/air, cat/cut, eat/heat (h, TRAP/STRUT)",
    "21": "profile fr.md §9: Faux amis rebuilt; embarrassed, pregnant, career, exit, success, carpet, constipated, bother replaced in place by disappointed, demand, lecture, rest, coin, large, sympathetic, journey"
  },
  "extraLessons": [],
  "droppedLessons": []
}
```

**Total English-side cost:**
- 2 lesson deviations;
- 6 technical item deviations;
- 5 deck deviations (2 + 1 + 1 + 6 + 8 = 18 card targets);
- no extra lesson.

**Four validator and parity traps for fr writers**
1. **Cue words.** `validate.js` requires every mc `q` and type `hint` to match `labels.cueTest` (no flags, so the list spells out capitals). Shorthand items in `more/` get « Que mettre dans le trou ? » / « — utilise ces mots » appended automatically when they contain no French. A hint written out in full in `practice.js` must contain an accented letter, « » or a listed word. "pretend · fingir" and "she · disappointed" fail; «elle · déçue», «mots : pretend · asleep» and «attend · class — avec she» pass (checked against the regex).
2. **No diacritics in English strings.** cueTest treats any French accented letter as French. An English mc `q` containing *café*, *Chloé*, *Zoé* or *Léa* would get no cue injected and would then pass as French. Write *cafe*, *Chloe*, *Zoe*, *Lea* in English strings, or use the diacritic-free names in §9.
3. **Identical cognates.** With `nativeScript: null`, a card meaning or gloss spelled like its English target fails ("differs from English", PIPELINE §6). French has more of these than Spanish: *information, conversation, excellent, important, possible, simple, question, message, menu, parents, date, client, train, taxi, pizza, banana* (no: *banane*), *sandwich*. Write «l'information (une info)», «la conversation», «excellent / excellente», «les parents (père et mère)», as es did with «el hotel».
4. **Accepted answers are compared.** Parity compares each type item's whole `a` list, `x` and mc `o` with es-en. A French prompt worded differently must still accept exactly the es variants: do not add or drop variants. If a variant is truly wrong for the French prompt, add an `items["<id>#<i>"]` deviation with the reason.

## 9. Vocabulary and cultural notes

**Localise everything in lesson bodies, `{{ex:}}` rows, card notes, dialogues and examples. In practice items and checks, change English only where §8 says.**

- Hispanic places in the English side stay: *Lima, Bogotá, Madrid, Mexico City, Santiago, Miami, Peru, Chile*. French speakers know them, and changing them costs deviations. French prompts use French exonyms: «Il habite à Lima», «à Madrid», «à Mexico».
- *Sofía* in `object-have` P10 and *Bogotá* in `present` mc 2 stay as spelled; the fill `q` and mc `o` are compared. Their accents are harmless there because practice `o`, `a` and fill `q` are not cue-tested.
- *Ana* (card targets, `object-have` mc 2) and *Mr. Garcia* (decks 13, 14) stay: *Ana* reads naturally to French speakers, and *Garcia* is a common surname in France [inference].

**Names** (lesson bodies, examples, dialogues, new targets): *Lucas, Hugo, Louis, Arthur, Gabriel, Nathan, Emma, Jade, Louise, Alice, Manon, Camille, Sarah*, mixed with English names (*Emma, Jack*).
- **Never use a name with a diacritic in an English string** (*Léa, Chloé, Zoé, Inès, Théo, Noé*): cueTest would read the string as French (§8 trap 2). In French text they are fine.

**Places:** Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Strasbourg, Montpellier, Rennes, Nice, Grenoble. Abroad: London, New York, Dublin, Edinburgh, Montreal (no accent in English), Brussels, Los Angeles. Do not centre Paris.

**Food:** *croissant, baguette, cheese, crepes, quiche, coffee, tea*. In English strings use forms the en-US voice can say and that carry no accent (*crepe*, *cafe*); avoid dishes whose English spelling keeps its accents (*crème brûlée*). Keep accented forms in French text.

**Sports and media:**
- *soccer*, with the note «*football* en anglais britannique». *rugby* and *cycling* are natural French topics.
- Genres, not artists (*a series, a podcast, a comic book*: *une BD* = *a comic book* or *a graphic novel*).

**Money:**
- Practice keeps US dollars, as es-en (US settings).
- In bodies and notes, *25 €* is read *twenty-five euros*; English writes *€25* or *25 euros*, symbol first.

**Exams and work:**
- Mention *le bac*, *le TOEIC*, *Cambridge* and *IELTS*, and job interviews, by name in `smalltalk`, `email` and «Travail et e-mails» notes where natural.
- Goals in meta.js: «Voyager», «Travail», «Amis», «Séries et films».

**Neutral France vocabulary in meanings and notes:** see the table in §2. Prefer the word understood everywhere in France; give a register note when the common word is informal («un mail (familier) / un e-mail»).

**False friends for the rebuilt deck and lesson** (grouped; 60+ pairs). "A" = in the fetched AuFutur list; "M" = in the fetched MosaLingua list; "S" = Sherpas; "L" = llexi; "inf." = not in any fetched list, from the author's knowledge, flagged for a native check.

| Group | English → real meaning | French look-alike → English | Source |
|---|---|---|---|
| Verbs | attend → assister à | attendre → wait | A, M, L |
| | assist → aider | assister à → attend | A, L |
| | pretend → faire semblant | prétendre → claim | A |
| | demand → exiger | demander → ask | A, M |
| | rest → se reposer | rester → stay | M, S |
| | resume → reprendre | résumer → sum up | M, S |
| | achieve → réussir, atteindre | achever → finish | M, S |
| | support → soutenir | supporter → put up with | M |
| | introduce → présenter (une personne) | introduire → insert | A |
| | deceive → tromper | décevoir → disappoint | A |
| | injure → blesser | injurier → insult | A, M |
| | bless → bénir | blesser → hurt, injure | A, S |
| | pass an exam → réussir un examen | passer un examen → take an exam | A, M, L |
| | regard → considérer | regarder → watch, look at | A, M |
| | prevent → empêcher | prévenir → warn | A |
| | retire → prendre sa retraite | (se) retirer → withdraw | M |
| | cry → pleurer | crier → shout | M |
| | realize → se rendre compte (partial) | réaliser → carry out (also "realise" in modern French) | inf. |
| Adverbs and adjectives | actually → en fait | actuellement → currently | A, M, S, L |
| | eventually → finalement | éventuellement → possibly | A, M, S |
| | current → actuel | courant → common | A, S |
| | sensible → raisonnable, sensé | sensible → sensitive | M |
| | sympathetic → compatissant | sympathique → nice | L |
| | comprehensive → complet | compréhensif → understanding | A, M |
| | fortunate → chanceux | fortuné → wealthy | A, M |
| | engaged → fiancé | engagé → committed | A, M |
| | ancient → antique | ancien → old, former | M |
| | proper → correct | propre → clean | M |
| | gentle → doux | gentil → nice, kind | M |
| | miserable → malheureux | misérable → very poor | A, M |
| | large → grand | large → wide | inf. |
| People and places | library → bibliothèque | librairie → bookstore | A, M, S |
| | college → université, fac | collège → middle school | A, M |
| | location → lieu, emplacement | location → rental | A, M |
| | cave → grotte | cave → cellar | A, S |
| | car → voiture | car → coach, bus | A |
| | conductor → chef d'orchestre | conducteur → driver | A |
| Everyday nouns | lecture → cours magistral, conférence | lecture → reading | A, M |
| | journey → voyage, trajet | journée → day | A, M |
| | coin → pièce de monnaie | coin → corner | A |
| | deception → tromperie | déception → disappointment | A, S |
| | chance → hasard, occasion | chance → luck | A, M |
| | character → personnage | caractère → personality | A, M |
| | affair → liaison | affaire → business, case | A, M |
| | agenda → ordre du jour | agenda → planner, diary | M |
| | camera → appareil photo | caméra → video camera | A, M |
| | chips (US) → chips; (UK) → frites | chips → (US) chips, (UK) crisps | A, M |
| | evidence → preuves | évidence → something obvious | A, M |
| | novel → roman | nouvelle → short story; nouvelles → news | M |
| | delay → retard | délai → deadline, period | M |
| | sale → vente, soldes | sale → dirty | M |
| | surname → nom de famille | surnom → nickname | M |
| | petrol (UK) → essence | pétrole → crude oil | M |
| | fabric → tissu | fabrique → factory | M |
| | preservative → conservateur | préservatif → condom | M |
| | money → argent | monnaie → change, currency | A |
| | billion → milliard | billion → trillion | M |
| | memory → souvenir, mémoire | mémoire → memory (also thesis) | A |
| Pseudo-anglicisms | parking lot (US), car park (UK) | un parking | inf. |
| | tuxedo (US), dinner jacket (UK) | un smoking | M |
| | jogging | le footing | inf. |
| | dry cleaner's | un pressing | inf. |
| | sneakers (US), trainers (UK) | des baskets | inf. |
| | makeover | un relooking | inf. |
| | celebrity | un/une people | inf. |
| Partial cognates («Attention :» notes) | parents → parents | parents also = relatives | inf. |
| | discuss → parler de, discuter de | discuter also = chat; never "discuss about" | inf. |

**Deck-by-deck notes** (pack order, 0-based; this order is also the deviations key):

| index | Spanish deck | **Native name** | keep/change | notes |
|---|---|---|---|---|
| 0 | Saludos | **Salutations** | keep | |
| 1 | Presentarse | **Se présenter** | **change 2 targets** | *I'm from Mexico.* → *I'm from France.*; *I live in Lima.* → *I live in Paris.* *My name is Ana.* stays. Notes: *I'm 25 years old.* «l'âge se dit avec *be*, jamais "I have 25 years"»; *I'm married.* «*married to*, pas *married with*»; *I've been learning English for a year.* «jamais "I learn English since one year"». No DIALOG/EXAMPLES key uses the changed targets. |
| 2 | Supervivencia 1 | **Survie 1** | **change 1 target** | *Do you speak Spanish?* → *Do you speak French?* Rewrite the «LI-rel» note on *a little* as a description of the American *t*. |
| 3 | Supervivencia 2 | **Survie 2** | keep | |
| 4 | Direcciones y transporte | **Itinéraires et transports** | keep | *métro, bus, RER* in notes. |
| 5 | En el restaurante | **Au restaurant** | keep | *l'addition* = *the check* (US) / *the bill* (UK); *le pourboire* = *the tip* (service is included in France, not in the US: a useful culture note). |
| 6 | Cafetería y tienda | **Café et supérette** | keep | |
| 7 | Compras y pagos | **Achats et paiements** | keep | *les soldes* = *the sales* («sale» is a false friend). |
| 8 | Números, horas y fechas | **Nombres, heures et dates** | keep | Time is said in 12-hour form in English; French uses 24 hours. |
| 9 | Charla casual | **Conversation informelle** | keep | *Have you been to Latin America?* stays: it is a generic travel question and needs no change. |
| 10 | Emociones y reacciones | **Émotions et réactions** | keep | |
| 11 | Cumplidos y afecto | **Compliments et affection** | **change 1 target** | *Your Spanish is really good!* → *Your French is really good!* |
| 12 | Trabajo y correo | **Travail et e-mails** | keep | Add TOEIC and job-interview notes. |
| 13 | Teléfono y abreviaturas | **Téléphone et abréviations** | keep | *Mr. Garcia* stays. |
| 14 | Viajes (aeropuerto y hotel) | **Voyages (aéroport et hôtel)** | keep | *under Garcia* stays. |
| 15 | Salud y emergencias | **Santé et urgences** | keep | *my embassy* stays (works for France, Belgium, Switzerland). |
| 16 | Phrasal verbs | **Phrasal verbs** | keep | Notes name the Latinate French verb (*entrer, continuer, tolérer, éteindre, retourner*). |
| 17 | Trampas de pronunciación | **Pièges de prononciation** | **change 6 targets** | In place: *yet, jet, very, berry, vote, boat* → *hair, air, cat, cut, eat, heat*. Keep *ship, sheep, shoes, choose, school, worked, think, sink, three, tree, this, walk, work, beach, leave, live, banana, hotel, milk, McDonald's*. Notes: *hotel* «le h se prononce, et l'accent est à la fin»; *shoes/choose* «le *ch* anglais se dit souvent "tch"»; *school* «*ou* long, *sch* = "sk"»; *banana* «accent au milieu, pas "ba-na-NA"». *school* keeps its EXAMPLES entry. Meanings must stay unique (*air* «l'air (qu'on respire)», *heat* «la chaleur», *cut* «couper / une coupure»). |
| 18 | Expresiones idiomáticas | **Expressions idiomatiques** | keep | French equivalents (§8 idioms). |
| 19 | Cine, series y jerga | **Cinéma, séries et argot** | keep | |
| 20 | Palabras esenciales | **Mots essentiels** | keep | *It takes 20 minutes* = «Ça prend 20 minutes»: French *prendre* matches *take*, which helps. |
| 21 | Falsos amigos | **Faux amis** | **change 8 targets** | Keep *actually, currently, library, bookstore, attend, assist, realize, sensible, college, pretend, eventually, parents, discuss, support, introduce*. Replace in place *embarrassed, pregnant, career, exit, success, carpet, constipated, bother* with *disappointed, demand, lecture, rest, coin, large, sympathetic, journey* (23 cards, as es). Why those eight fail: *embarrassé, carrière, succès* and *constipé* are true cognates in French; *exit, pregnant* and *bother* have no French look-alike; *carpette* is a small rug. Notes: *attend* «attention : *attendre* = *wait (for)*»; *college* «*collège* = *middle school*». |
| 22 | Make y do | **Make et do** | keep | Note on *make a decision*: «on *prend* une décision en français, mais on la *make* en anglais (au Royaume-Uni on entend aussi *take*)»; *make money* «*gagner* de l'argent = *earn* ou *make*, jamais *win*». |
| 23 | Incontables | **Indénombrables** | keep | *hair* is a real French trap (*les cheveux* is plural); *homework* (*les devoirs*), *news* (*les nouvelles*), *furniture* (*les meubles*), *luggage* (*les bagages*) all plural in French. |
| 24 | Cognados y acento | **Mots transparents et accent** | keep (all 14 targets work) | Correspondences hold in French: *-tion/-tion*, *-ty/-té*, *-ous/-eux*, *-ly/-ment*, *-ent/-ent*, *ph/ph*, *ch/ch* (*chimie*: but English *ch* here is /k/). Rewrite notes for French traps: the stress is **never** at the end by default (*information* /ˌɪnfərˈmeɪʃn/, *excellent* /ˈeksələnt/); *-tion* is /ʃn/, not «sion»; *comfortable* has an *m* (French *confortable*). Write meanings that differ from the target: «l'information», «la conversation», «excellent / excellente». |

**Groups in meta.js:**
- «Premiers pas»;
- «Voyage et quotidien»;
- «Conversation et relations»;
- «Travail»;
- «Comme un natif»;
- «Points clés pour francophones» (replaces «Claves para hispanohablantes»).

## 10. Interface wording notes

[Curriculum convention.] Verified against the Proton French localisation guide ([Proton](https://localize.proton.me/t/guidance-for-french/75)), except for the form of address (§2: this app uses *tu*, Proton uses *vous*). The Microsoft fr-FR style guide was found but could not be read (binary PDF; §11).

**Buttons and actions:** infinitive. Proton uses the infinitive for neutral actions («Copier le lien», «Télécharger», «Créer un compte gratuit»).
- Use: «Vérifier», «Continuer», «Commencer», «Réviser», «S'entraîner», «Enregistrer», «Envoyer», «Annuler», «Retour», «Fermer», «Réessayer».
- No final period on buttons, titles, links or checkboxes (Proton).

**Instructions in content and prompts:** *tu* imperative: «Choisis la bonne réponse», «Remets les mots dans l'ordre», «Complète le trou», «Écris la phrase en anglais», «Touche pour écouter».
- Keep one verb per item type.
- No «s'il te plaît» in instructions.
- «!» sparingly: "As their use is less common than in English, you should use them sparingly" (Proton).

**Gender-neutral wording** [Proton: "When possible, avoid the use of masculine singular form to refer to someone whose gender is unknown" and "Rephrase when you are unable to find a gender-neutral way"]:
- «Bienvenue !» (invariable), not «Bienvenu(e)».
- «C'est parti !», «Tout est prêt !», not «Tu es prêt ?».
- «Bien joué !», «Bravo !»; «Leçon terminée» rather than an adjective agreeing with the user.
- No point médian («prêt·e»), no «(e)» in UI. Proton does not address écriture inclusive; this profile avoids it because it divides French readers and breaks screen readers [inference].
- Card meanings for gendered words give both forms: «fatigué / fatiguée».

**Capitalisation:** sentence case. Weekdays, months, seasons, nationalities and language names are lower case («lundi», «novembre», «anglais») (Proton). Accents on capitals («À réviser»).

**Typography:** no-break space (U+00A0) before `:` `;` and inside « »; U+00A0 or U+202F before `?` `!` (Proton: "Colons and semicolons are all preceded by a non-breaking space"). Write the character, never an entity. Keys in ui.json are English and unaffected; only values carry these spaces.

**Count patterns: ONE translation each, number-neutral** (PHASE2-BRIEF). [Checked locally with `Intl.PluralRules('fr-FR')`, ICU 78.3 / CLDR 48: categories `one` (0, 1 and 1.5), `many` (1,000,000 and 2,000,000) and `other`.] French writes «0 carte» in the singular, which surprises English readers, and the engine stores one string per pattern anyway. So never put the count before an inflected noun. Put it **after a colon**, or next to an invariable unit or symbol.

| English pattern | French (one string, any number) | Note |
|---|---|---|
| `N cards due` | «À réviser : {1}» | |
| `N cards` | «Cartes : {1}» | |
| `N lessons` | «Leçons : {1}» | |
| `N days` | «Jours : {1}» | |
| `N-day streak` | «Série : {1} j» | «j» (jour) is the standard French abbreviation and does not inflect |
| `N words` | «Mots : {1}» | |
| `N questions` / items | «Questions : {1}» | |
| `N decks` | «Paquets : {1}» | |
| `N reviews` | «Révisions : {1}» | |
| `N XP` | «{1} XP» | invariable |
| `Level N` | «Niveau {1}» | |
| `N% correct` | «Réussite : {1} %» | no-break space before % |
| `N min` | «{1} min» | invariable abbreviation |

**Dates, numbers, time** [`Intl` with `fr-FR`, checked locally]:
- **Numbers:** «1 234 567,5»: decimal comma, thousands separator U+202F (narrow no-break space) from Intl. Proton: no separator in years («2026»).
- **Currency:** «25,00 €» (U+00A0 before €) and «4,99 $US». Symbol after the number (Proton). Do not hand-format.
- **Percent:** «85 %» (U+00A0).
- **Dates:** long «17 novembre 2026»; short «17/11/2026»; full «mardi 17 novembre 2026»; day-month «17 nov.»; weekday short «mar.». Proton writes short dates «31/01/22»; the 4-digit year from Intl is also correct.
- **Time:** 24-hour, «21:05» (Intl; Proton «à 21:25»). The «21 h 05» style is fine in prose but not needed in UI.
- Use the device locale when it is `fr-FR`. Fall back to `fr-FR`, never `fr-CA` (Canadian dates and spacing differ).

**Bottom navigation at 390px.** Each of the seven tabs gets about 55px, which fits roughly **8 characters** at 10–11px (es.md §10). French runs 15–20% longer than English (OTHERS.md). «Aujourd'hui» (11) does not fit, so Today needs another word.

| English | French label | Chars | Note |
|---|---|---|---|
| Today | Accueil | 7 | the daily session is the landing screen; «Aujourd'hui» is 11. The same key is the title of the first tour step (`TOUR` in app.html), where «Accueil» also reads correctly. Alternative «Séance» (6) if the lead prefers the session meaning; the screen heading can say «Aujourd'hui» |
| Practice | Pratique | 8 | glossary noun; on its own it can read as the adjective "handy", so the lead should see it in the real bar (alternative «Entraîn.» is worse) |
| Review | Révision | 8 | noun, as the key's context asks |
| Lessons | Leçons | 6 | |
| Drills | Exos | 4 | the everyday short form of «exercices»; the canvas heading and `{n}/{n} · Drills` chip may use «Exercices» (9), where length is not an issue. Alternative «Réflexes» (8) |
| Progress | Progrès | 7 | |
| Feedback | Avis | 4 | page title «Donne ton avis» |
| (Read, if shown) | Lire | 4 | the key exists in keys.json |

**Language-name slots** (PHASE2-BRIEF: filled with the dictionary form). `Intl.DisplayNames('fr-FR')` returns «anglais», «français», «anglais américain», «français (France)» (checked locally). The French dictionary form is **lower case and takes elision**, so:
- put the slot **after a colon** («Langue : {1}», «Cours : {1}»), where lower case is correct French;
- never at the start of a sentence (it would show «anglais…» in lower case) — reorder the slots so a colon comes first, since slots may be reordered;
- never after *de / le / la* («cours de {1}» would give «cours de anglais»; French needs «d'anglais»);
- «en {1}» is safe («en anglais», «en français») and may be used.
- Set `name.fr` to «anglais». `nativeNameEn` is "French".

**UI glossary** (use exactly; matches §3):

| English | French | Note |
|---|---|---|
| lesson | leçon | «Leçon 5» |
| practice (set) | pratique | button «S'entraîner» |
| review (SRS) | révision | button «Réviser» |
| deck | paquet | «paquet de cartes» on first use |
| card / flashcard | carte | |
| streak | série | «Série : 5 j» |
| hint | indice | |
| check (3-question quiz) | mini-quiz | button «Vérifier» |
| correct / incorrect | juste / faux | feedback «Bonne réponse !» / «Pas tout à fait». Avoid a bare «Faux !», which reads as harsh |
| answer / explanation | réponse / explication | `why` shown under «Explication» |
| try again | réessayer | |
| multiple choice | QCM | |
| word tiles | étiquettes | |
| gap-fill | texte à trous | short label «Trou» is too odd alone: use «Texte à trous» |
| typed sentence | écris la phrase | |
| drills | exos / exercices | |
| level / XP | niveau / XP | |
| pronunciation toggle | Afficher la prononciation (API) | replaces "romanization"; a settings row, not a button |
| progress | progrès | |
| feedback | avis | |
| settings / sign in / sync | paramètres / se connecter / synchroniser | «Se connecter pour synchroniser» for `Sign in to sync` |
| quiz | quiz | |
| level titles | Novice · Élève · Pipelette · Globe-trotter · Du coin · Pro · Légende | all seven are invariable for gender, so no title agrees with the user (es-en `TITLES`: Beginner, Student, Talker, Traveler, Local, Pro, Master). «Pipelette» (chatterbox, playful) and «Du coin» (local) need a native check |

## 11. Gaps and unverified claims

**Sources that were blocked or unreadable** (none is listed in Sources):
- **Murakami & Alexopoulou 2016** (core.ac.uk PDF): not on this session's allowlist. Every claim from it is marked "via OTHERS.md".
- **Microsoft fr-FR localisation style guide:** binary PDF, not readable.
- **Dagneaux, Denness & Granger 1998** (computer-aided error analysis of French learners): the copy found was a binary .doc.
- **Kamiyama, Kühnert & Vaissière 2011** (French learners' English vowels) and **the HAL paper "Do French-speaking learners simply omit the English /h/?"**: bot-protection pages.
- **Cahiers de l'APLIUT article on French speakers' pronunciation:** bot-protection page.
- **Sherpas phonetics article:** server error.
- **Swan & Smith, *Learner English*, French chapter:** never opened.

**Read only in part:**
- Granger 1999: verb-error and tense tables only; the auxiliary category is not broken down, and the corpus is Belgian French-speaking students.
- Littré 2015, Tremblay 2008, Tremblay & Owens 2010, Dupoux et al. 2008: abstract pages only, no rates (and Dupoux et al. tested learners of **Spanish**).
- Mah, Goad & Steinhauer 2016: a perception (ERP) study; its description of h-deletion and h-insertion in production is qualitative and second-hand.
- Garnier 2012: noun-phrase errors only; no percentage for determination.

**Quotations.** Text in straight quotes from Granger, Littré, Dupoux et al., Tremblay, Mah et al., Pronunciation Studio, the ac-versailles document, Eduscol, SchoolMouv, AuFutur, Proton, Digischool and the Conseil d'État is verbatim as returned by the fetch tool. Learner errors marked as this profile's reconstruction (§4.2, §4.5) are not quoted from their sources, and the corrections of learner sentences are this profile's unless the source gave them.

**Practitioner-only or no fetched source** for:
- prepositions and verb complements (llexi only), countability (llexi, Sherpas), *people/persons* (Sherpas);
- *avoir* expressions (*I have 25 years*), *It makes hot*, *There is three trees*, frequency-adverb order, *When I'll get home*, *Speak you English?*, *How do you call this?*: all the author's inference from French grammar;
- adjective order and agreement (OTHERS.md, no source);
- -ed pronunciation and silent final consonants;
- *est-ce que* as a bridge to *do*.

**Curriculum and culture claims not verified:**
- That IPA is taught in collège rests on **one** academy document about one 6e class; the 2026 Eduscol guidance does not mention the API. Bilingual dictionaries printing IPA (Robert & Collins, Harrap's) were not fetched.
- The CTI's TOEIC 785 / B2 requirement comes from Digischool, which does not cite the CTI text.
- The current bac language-assessment format was not researched.
- Duolingo's use of *tu* and of «série» for streaks, and Anki's «paquet» for deck, were not verified on a fetched page.
- No uptake figures for TOEIC, Cambridge, IELTS or TOEFL in France.

**Author's own knowledge of French, flagged for a native check:**
- France uses the long scale (*un milliard* = 10⁹, *un billion* = 10¹²).
- Which es false friends fail for French speakers (*embarrassé, carrière, succès, constipé, carpette*), the partial cognates (*parents, discuss, realize*), *large*, and the pseudo-anglicisms except *smoking*.
- *Garcia* as a common surname in France.
- The Québec/Belgian/Swiss avoidance list.
- The new minimal pairs (*hair/air, eat/heat, cat/cut*) and the distractors *at* (P5) and *makes* (P12).
- The French reference sounds in the IPA key («djembé», «tchèque», «parking»).
- Tab labels «Accueil», «Exos» and «Pratique» (on a tab it can read as "handy"), the level titles «Pipelette» and «Du coin», and «Texte à trous».
- *tu* as the right register for this audience (decision, §2).

**EF EPI:**
- National and skill figures come from EF directly; the band was not stated on the fact sheet.
- Several city values were truncated in the fetch.
- OTHERS.md's 524 / ≈49 is superseded.

**Engine and pipeline points:**
- CLDR `one` covers 0 in French; the number-neutral patterns (§10) sidestep it.
- es `cueTest` gaps cause the six technical deviations (§8); two more than pt needs, because Portuguese «nada» and «infinitivo» happen to equal the Spanish words.
- The standing-rule keyword uses a lookbehind `(?<!d['’])`; Node supports it, and `validate.js` compiles keywords with `new RegExp(keywords, flags)`.
- cueTest has no case flag in `_dsl.js` and `validate.js`, so the word list spells capitals explicitly.
- `labels.mcBlankCue` contains U+00A0 before «?» (written ` ` in the JSON).

**Pronunciation aid:**
- No study compares IPA, respelling and no aid for French learners.
- The OALD notation is inherited from zh.md "as remembered" (OALD not fetched).
- If first-attempt logs or reviewers show learners ignore the IPA, the fallback is `pron: "optional"`. Do not switch to a respelling, for the reasons in §6.

## Sources

Web pages fetched and used:
- [Granger, S. (1999). Use of tenses by advanced EFL learners: evidence from an error-tagged computer corpus. In Hasselgård & Oksefjell (eds.), *Out of Corpora* (UCLouvain repository)](https://dial.uclouvain.be/pr/boreal/object/boreal%3A76322/datastream/PDF_01/view)
- [Littré, D. (2015). Combining experimental data and corpus data: Intermediate French-speaking learners and the English present. *Corpus Linguistics and Linguistic Theory* 11(1) (abstract page)](https://www.degruyterbrill.com/document/doi/10.1515/cllt-2014-0007/html)
- [Garnier, M. (2012). Paper on noun + noun errors by French-speaking learners of English (EUROCALL 2011 proceedings). *The EUROCALL Review* 20(1)](https://eurocall.webs.upv.es/documentos/newsletter/papers_20(1)/14_garnier.pdf)
- [Dupoux, E., Sebastián Gallés, N., Navarrete, E. & Peperkamp, S. (2008). Persistent stress "deafness": The case of French learners of Spanish. *Cognition* 106 (abstract page)](https://www.research.unipd.it/handle/11577/2714082)
- [Tremblay, A. (2008). Is second language lexical access prosodically constrained? Processing of word stress by French Canadian second language learners of English. *Applied Psycholinguistics* 29(4) (abstract page)](https://cambridge.org/core/journals/applied-psycholinguistics/article/is-second-language-lexical-access-prosodically-constrained-processing-of-word-stress-by-french-canadian-second-language-learners-of-english/E055E2BF1F22A580F396FD2E64DCEA84)
- [Tremblay, A. & Owens, N. (2010). The role of acoustic cues in the development of (non-)target-like second-language prosodic representations. *Canadian Journal of Linguistics* 55(1) (abstract page)](https://muse.jhu.edu/journals/canadian_journal_of_linguistics/v055/55.1.tremblay.pdf)
- [Mah, J., Goad, H. & Steinhauer, K. (2016). Using event-related brain potentials to assess perceptibility: the case of French speakers and English [h]. *Frontiers in Psychology* 7:1469](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01469/pdf)
- [Pronunciation Studio: French speakers' English pronunciation errors](https://pronunciationstudio.com/french-speakers-english-pronunciation-errors/)
- [Académie de Versailles: Phonologie, une séquence en 6e](https://anglais.ac-versailles.fr/IMG/pdf/Phonologie_V7_15_octobre.pdf)
- [Eduscol (2026). Livret d'accompagnement, anglais 6e–3e](https://eduscol.education.gouv.fr/sites/default/files/document/2026livretaccompagnementanglais6e5e4e3e-127310.pdf)
- [SchoolMouv: Les verbes lexicaux et les auxiliaires (fiche de cours)](https://www.schoolmouv.fr/cours/verbes-lexicaux-et-auxiliaires-anglais/fiche-de-cours)
- [SchoolMouv: Le present perfect (fiche de cours)](https://www.schoolmouv.fr/cours/present-perfect-anglais/fiche-de-cours)
- [llexi: Common English errors by French speakers](https://llexi.com/l1-errors/common-english-errors-french-speakers/)
- [Sherpas: Les 10 plus grosses erreurs à ne pas commettre en anglais](https://sherpas.com/blog/erreurs-en-anglais/)
- [AuFutur: Faux amis anglais, tout ce que tu dois retenir](https://aufutur.fr/revisions/langues-vivantes/anglais/faux-amis/)
- [MosaLingua: Liste de faux amis anglais à connaître](https://www.mosalingua.com/blog/2019/07/31/liste-faux-amis-anglais-francais/)
- [EF EPI 2025 fact sheet: France](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-france-english.pdf)
- [Digischool: Le score minimum au TOEIC pour intégrer ou valider un diplôme d'ingénieur](https://www.digischool.fr/articles/toeic/score-minimum-toeic-dingenieur/)
- [Conseil d'État (2022): BTS, DUT and bachelor's degree: certification in English from an external body should not be required](https://conseil-etat.fr/en/news/bts-dut-and-bachelor-s-degree-certification-in-english-from-an-external-body-should-not-be-required-to-obtain-these-diplomas)
- [Proton localization community: Guidance for French](https://localize.proton.me/t/guidance-for-french/75)

Local project files read:
- `/home/claude/docs/profiles/pt.md` and `pt.profile.json` (in full, the template), `es.md` (§4–§10), `OTHERS.md` (French section);
- `/home/claude/reports/Grammar learning order research.md` (the recommended English order);
- `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`;
- `/home/claude/tools/content/es/` (`profile.json`, `deviations.json`, `DECKNAMES.md`), `tools/content/pt/` (`profile.json`, `deviations.json`, `DECKNAMES.md`), `tools/content/zh/` (`PRON-RULES.md`, `profile.json`);
- `tools/content/parity.js`, `validate.js` (verb-core, pron checks), `lib.js` (native-text test), `more/_dsl.js` (cue injection);
- `tools/i18n/keys.json` and the es, id, vi, zh `ui.json` tab labels.

Local checks run:
- the generated `packs/course-es-en.js` scanned: lesson order, deck order and sizes, the `false-friends`, `make-do` and `pron` checks and practice items, every check option and practice mc option read as English by es `cueTest` (giving the six technical deviations), Hispanic names on the English side, DIALOG/EXAMPLES keys of the replaced targets (only *school*, which is kept);
- zh-en IPA reuse counts (349/480 cards, 235/356 example rows) and zh word forms (*married* /ˈmærid/);
- `pronPattern` against 38 worked examples, with the validator's own normaliser;
- `cueTest` against 2,633 English strings of es-en (no English hit; the only hits are Spanish strings parity already treats as Spanish) and against sample French prompts and both cue labels;
- the standing-rule keywords against sample `why` lines, including «d'accord»;
- `Intl` fr-FR plural, date, number, currency and language-name output (Node, ICU 78.3 / CLDR 48).

