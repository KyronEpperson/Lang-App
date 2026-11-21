# Brazilian Portuguese speakers learning English — course profile

Course `pt-en`: English for speakers of **Brazilian Portuguese**. All explanations, `why`, `hint`, meanings and interface text are in Brazilian Portuguese (pt-BR spelling and usage). Answers and examples are in English.

**How this course is built.** It is built from the Spanish-speakers' course, not the Korean one, because Portuguese has articles, plurals and a null-subject grammar like Spanish. `tools/content/pt/` is a copy of `tools/content/es/` (41 lessons, 25 decks). `profile.json` has `"reference": "es"`, so `parity.js` compares pt-en's English side with **es-en**, not with ko-en. Every English-side difference from es-en therefore costs a `deviations.json` entry. This profile says, lesson by lesson (§8) and deck by deck (§9), what stays as es-en has it and what changes.

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset fetched for this profile. The study is named, its sample is given, and "abstract only" is said where only the abstract was read.
- **[curriculum convention]**: what Brazilian textbooks, exam-prep sites, style guides or courses do.
- **[practitioner opinion]**: a teacher's, school's or guide's stated view with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Portuguese**. Such claims are flagged for a native check in §11.

Untagged rules in §6–§10 are design decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (`ttsLang:'en-US'`). Write **Brazilian Portuguese with *você***, informal but not slangy, gender-neutral where possible. No *tu*, no European Portuguese.
- **Standing rule: keep the Spanish course's `verb-core` rule**, with keywords `sujeito|auxiliar|terceira pessoa|concord[âa]ncia`. Every es-en practice item already satisfies it, so the English side carries over unchanged. Prepositions are the largest error class in Brazilian writing (22% of 3,854 errors in COBRA-7, Dantas 2012), but they are lexical and lesson-bound.
- **Pronunciation aid: IPA, written exactly like the zh-en course** (OALD North American values, slashes, ˈ on content words; `pronPattern` copied from zh). A respelling in Portuguese letters would be read with Brazilian spelling rules: *ti* as «tchi», final *-e* as «i», final *l* as «u», *m/n* as nasal vowels, initial *r* as [h]. It would also write in the epenthetic vowel. The IPA can be reused for 349 of 480 cards and 235 of 356 example rows, because zh-en already has IPA for those exact English strings.
- **Curriculum:** keep all 41 es-en lessons in order. Change the English side of only **`pron`** (Brazilian sound traps) and **`false-friends`** (partial rebuild with Portuguese false cognates). Add five technical item deviations for Spanish-text check options that parity misreads as English. Add **one pt-only lesson, `verb-prep`** (verb/adjective + preposition), after `make-do`; it is conditional, see §8.
- **Decks:** keep all 25. Change English targets in 5: «Apresentações», «Sobrevivência 1», «Elogios e carinho», «Armadilhas de pronúncia», «Falsos cognatos».
- **Learners:** Brazil scores 482 in EF EPI 2025 (rank 75, global average 488), with reading 516 well above writing 442 and speaking 464. ENEM tests English reading only (5 questions). Lead with production.

## 2. Variant, register and voice

**English variant: American English** [inference].
- `ttsLang` is `en-US`, so spelling, examples and the `pron` aid must match the audio.
- Rules are the same as es.md §2:
  - US spelling (*color, center, practice*);
  - US vocabulary (*apartment, cell phone, vacation, subway*);
  - dates written *November 15* in English text.
- When a British form is common in Brazilian school materials (*flat, mobile, holiday*), add it to the card `note`: «No inglês britânico: flat».

**Portuguese variety: Brazilian Portuguese (pt-BR)** [curriculum convention].
- Spelling follows the 1990 Orthographic Agreement as applied in Brazil since 2009: *ideia, voo, frequente* (no trema), *tônica, econômico, ônibus* (Brazilian circumflex, not the Portuguese *tónica, económico*).
- Use Brazilian vocabulary everywhere. Never use European Portuguese forms (table below).
- Two tests for any doubtful word: would a reader in São Paulo, Recife and Porto Alegre all say it? Does it read as Portugal? The European-Portuguese column below is a list of words never to use.

| Use (pt-BR) | Never (pt-PT) | English |
|---|---|---|
| celular | telemóvel | cell phone |
| ônibus | autocarro | bus |
| trem | comboio | train |
| café da manhã | pequeno-almoço | breakfast |
| banheiro | casa de banho | bathroom |
| geladeira | frigorífico | fridge |
| suco | sumo | juice |
| tela | ecrã | screen |
| usuário | utilizador | user |
| senha | palavra-passe | password |
| fila | bicha (offensive in Brazil) | line, queue |
| dirigir | conduzir | drive |
| time / equipe | equipa | team |
| baixar | descarregar | download |
| cardápio | ementa | menu |
| garçom / garçonete | empregado de mesa | waiter |
| contato, fato | contacto, facto | contact, fact |

**Form of address: *você*** [curriculum convention].
- The Proton pt-BR localisation guide says: "Use the informal third-person singular ('você') form of address" ([Proton](https://localize.proton.me/t/guidance-for-portuguese-brazilian/116)).
- Plural: *vocês*. Never *tu* (regional) or *vós*.
- *O senhor / a senhora* appears only inside translations of formal English (service sentences, business e-mail).
- In the `polite` lesson: *you* covers *você*, *o senhor* and *a senhora*. Politeness in English lives in *could / would / please*, not in the pronoun.
- Avoid enclitic stiffness in explanations. Write «Ele me disse», «Diga seu nome», not «Diga-me o seu nome».
- In translations of casual English, natural Brazilian proclisis is fine: «Me liga amanhã», «Te vejo lá».
- Proton's preferred pattern is «Será um prazer ajudar você» over «ajudá-lo»: put the pronoun after the verb as *você*, which is also gender-neutral.

**Register:**
- Friendly, direct, informal but not slangy.
- *A gente* is allowed in dialogue translations ("we" in casual speech) but not in explanations or UI, which use *nós* or rephrase.
- No gírias (slang) outside the «Cinema, séries e gírias» deck and the idioms lesson.

**Sample sentences in this voice:**
1. «Em inglês, quase toda frase precisa de sujeito: *It's raining*, e não *Is raining*.»
2. «Você já conhece o *does*? Ele aparece nas perguntas com *he*, *she* e *it*: *Does she work here?*»
3. «Muito bem! Revise estes cartões amanhã para não esquecer.»

**Punctuation and mixing English into Portuguese:**
- In lesson HTML bodies, mark English with `<em>`.
- In plain-text fields (`why`, `hint`, `p`, card notes), put English inside straight double quotes ("the") and Portuguese quotations inside « ».
  - This keeps the es-en convention, so items copied from es keep working.
  - « » is less usual in Brazil than “ ” but is understood. It visibly separates Portuguese from English, which straight vs curly quotes do not.
- In UI strings with no English inside, use normal Brazilian “ ”.
- Never inflect English words with Portuguese morphology. Write «os *phrasal verbs*», not «os phrasal verbes».
- Use Brazilian exonyms in Portuguese text: «Madri», «Nova York», «Cidade do México», «Londres». English strings keep the English names.

## 3. Glossary

[Curriculum convention.] The tense names and structural terms below follow Brazilian exam-prep and school sites. Toda Matéria, for example, writes "O *Simple Present Tense*, também chamado de *Present Simple* (presente simples)", gives the question pattern as "Verbo auxiliar + sujeito + verbo principal + complemento", speaks of "a flexão da terceira pessoa do singular", and labels "forma afirmativa / negativa / interrogativa" ([Toda Matéria, Simple Present](https://www.todamateria.com.br/simple-present/)).

Brazilian materials very often keep the English tense names. This course gives **the Portuguese name first and the English name in parentheses on first mention in each lesson**, then either.

| English term | pt-BR term to use | Note |
|---|---|---|
| article | artigo | |
| definite / indefinite article | artigo definido / indefinido | |
| zero article | sem artigo | «aqui vai sem artigo» |
| noun | substantivo | |
| plural / singular | plural / singular | |
| countable / uncountable noun | substantivo contável / incontável | |
| subject | sujeito | standing-rule keyword |
| object | objeto | |
| subject pronoun | pronome sujeito | first mention «pronome sujeito (do caso reto)», the school term |
| object pronoun | pronome objeto | first mention «(oblíquo)» |
| possessive adjective (my, his) | adjetivo possessivo | |
| possessive 's | genitivo ('s) | «o 's do genitivo» |
| verb | verbo | |
| auxiliary verb | verbo auxiliar / auxiliar | standing-rule keyword |
| main verb | verbo principal | |
| third person singular | terceira pessoa do singular | standing-rule keyword |
| subject–verb agreement | concordância (verbal) | standing-rule keyword; «concordância verbal» is the school term |
| tense | tempo verbal | |
| present simple | presente simples (*simple present*) | Toda Matéria form |
| present continuous | presente contínuo (*present continuous*) | |
| past simple | passado simples (*simple past*) | |
| past continuous | passado contínuo (*past continuous*) | |
| present perfect | *present perfect* | keep the English. **Never** gloss as «pretérito perfeito composto»: Brazilian *tenho feito* means a repeated action up to now, not *I have done* [inference] |
| present perfect continuous | *present perfect continuous* | |
| past perfect | *past perfect* (mais-que-perfeito) | |
| future with will | futuro com *will* | |
| going to | *going to* | |
| irregular verb | verbo irregular | |
| past participle | particípio | |
| infinitive | infinitivo | |
| -ing form / gerund | forma -ing (gerúndio) | first mention «forma -ing (gerúndio)», then «forma -ing» |
| modal verb | verbo modal | |
| passive / active voice | voz passiva / ativa | |
| conditional | condicional (primeiro / segundo / terceiro condicional) | |
| relative clause | oração relativa | not «oração subordinada adjetiva» (too school-grammar) |
| relative pronoun | pronome relativo | |
| phrasal verb | *phrasal verb* (verbo frasal) | keep the English after first gloss |
| reported / direct speech | discurso indireto / direto | school term |
| adjective / adverb | adjetivo / advérbio | |
| comparative / superlative | comparativo / superlativo | |
| preposition | preposição | |
| quantifier | quantificador | |
| question word | palavra interrogativa | |
| negative / interrogative form | forma negativa / interrogativa | |
| word order | ordem das palavras | |
| contraction | contração | |
| false friend | falso cognato | Brazilian term. Toda Matéria uses *falsos cognatos* as the main term and *falsos amigos* as a synonym ([Toda Matéria](https://www.todamateria.com.br/falsos-cognatos-no-ingles-false-friends/)) |
| cognate | cognato | |
| idiom | expressão idiomática | |
| stress (word stress) | sílaba tônica / tonicidade | **not** «acento», which in Portuguese means the written mark |
| vowel / consonant | vogal / consoante | |
| IPA | transcrição fonética (AFI) | first mention «Alfabeto Fonético Internacional (AFI, em inglês IPA)» |
| lesson | lição | |
| practice | prática | |
| review | revisão | verb «revisar» |
| deck | baralho | as in Anki's Brazilian interface; never «deck» in UI [practitioner opinion, not verified] |
| flashcard | cartão | «cartão (flashcard)» on first use |
| streak | sequência | «sequência de 5 dias». Avoid Duolingo's brand word «ofensiva» |
| hint | dica | |
| check (3-question quiz) | teste rápido | button «Verificar» |
| correct / incorrect | correto / incorreto | feedback «Correto!» / «Incorreto» (see §10) |
| try again | tentar de novo | |
| answer / explanation | resposta / explicação | |
| multiple choice | múltipla escolha | |
| word tiles | blocos de palavras | |
| gap-fill | complete a lacuna | |
| typed sentence | escreva a frase | |
| example | exemplo | |
| level / progress | nível / evolução | tab «Evolução» (§10) |
| settings | configurações | |
| feedback (to developers) | opinião | tab «Opinião», page «Envie sua opinião» |
| pronunciation hint | transcrição fonética | toggle «Mostrar pronúncia (AFI)» |

## 4. Persistent error zones

**How the list is ranked.** This profile ranks the items [inference]:
- Items with fetched Brazilian production data come first.
- Within the rest, items come first if typed practice can test them and if they recur across lessons.

**Main fetched evidence:**
- **COBRA-7 corpus, Dantas 2012** ([PUC-SP MA thesis](https://tede2.pucsp.br/bitstream/handle/13575/1/Wendel%20Mendes%20Dantas.pdf)): a learner corpus of about 570,000 words (2,260 essays) by adult learners at a São Paulo-state franchise school.
  - The analysed sample was 300 essays (61,240 words) with **3,854 errors**.
  - Top categories (Shepherd-based scheme): prepositions and particles 771 (22%), vocabulary 476 (13%), time/tense/aspect 410 (11%), determiners 372 (10%), questions/negatives/auxiliaries 256 (7%), pronouns 239 (7%), adjectives and adverbs 232 (6%).
  - Level labels "B1/B2" in the thesis's level tables mean Basic 1/2, not CEFR.
  - The categories are not broken down further: the 22% covers every preposition and particle error.
  - The learner sentences quoted below are Dantas's. **The corrections are this profile's**: the fetch tool's summary supplied them, not the thesis.
- **John & Cardoso 2017** ([Ilha do Desterro](https://scielo.br/j/ides/a/84qPK4M6Cx7fjJvwFsyBsNm/?lang=en)): 53 beginner learners in Belém; epenthesis rates.
- **Silva 1998** ([Speak Out!, via Hancock McDonald](https://www.hancockmcdonald.com/sites/hancockmcdonald.com/files/file-downloads/Ricardo%20Sili%20Intelligibility%20of%20Brazilians.pdf)): intelligibility of 3 intermediate speakers from Rio, judged by 12 listeners. The author calls the results "not at all conclusive".
- **Practitioner sources:**
  - [Pronunciation Studio](https://pronunciationstudio.com/portuguese-speakers-english-pronunciation-errors/);
  - [Toda Matéria pronunciation guide](https://www.todamateria.com.br/pronuncia-em-ingles-guia-dos-sons-mais-dificeis-para-brasileiros/);
  - [London School blog](https://www.londonschool.com/blog/from-brazinglish-to-english-part-2);
  - [Cambridge "Choose in Use" Portuguese list](https://www.cambridge.org/elt/blog/wp-content/uploads/2020/03/Portuguese.pdf), which covers Portuguese generally and does not separate Brazil;
  - the llexi page summarised in `docs/profiles/OTHERS.md` (not reopened for this profile).
- **No morpheme-order data.** Murakami & Alexopoulou 2016, the source behind es.md's ranking, has no Portuguese L1 group. Nothing comparable was found for Portuguese.

1. **Prepositions** (all of *in/on/at* map to *em*; dependent prepositions)
   - Typical errors:
     - *I have the habit to eat rice, beans and beef* → *the habit of eating* (COBRA-7).
     - *depend of* → *depend on*; *married with* → *married to*; *interested on* → *interested in* (llexi, via OTHERS.md).
     - *arrive to* / *arrive in the airport* → *arrive at*.
     - *think in* → *think about*; *wait you* → *wait for you*; *listen music* → *listen to music*. These three are [inference] from *pensar em*, *esperar alguém*, *escutar música*.
   - [research-backed] Prepositions and particles are the largest category in COBRA-7: 22%, 12.59 per 1,000 words. They are also the largest at Basic 1 (85 errors) (Dantas 2012).
   - [research-backed, partly counter] In the BraSEL spoken corpus (A2 and B2), *of* "tended to be well-entrenched", so not every preposition is a problem ([Rocha 2022](https://revistas.ufpr.br/revistax/article/view/85093)). Corpus size and figures were not shown.
2. **The verb core: third-person -s, agreement, do-support, question inversion**
   - Typical errors:
     - *People plays, goes to gym* → *People play…* (COBRA-7): -s overgeneralised to a plural subject.
     - *How I could buy that?* → *How could I buy that?* (COBRA-7, coded as inversion).
     - *You like coffee?* → *Do you like coffee?*; *I no understand* → *I don't understand*.
   - [research-backed] "Questions, negatives, auxiliaries" are 7% of COBRA-7 errors. The rate rises from 2.94‰ (Basic 1) to 5.78‰ (Intermediate), then falls to 2.11‰ (Advanced). The author links this to "o uso de verbos auxiliares diversos" and to *no/not* (Dantas 2012).
   - [inference] Brazilian *você* takes the third-person verb form (*você fala*, like *ele fala*, *a gente fala*). The Portuguese -a form therefore does not line up with English "he/she/it only". Explain -s by the English subject, never by «a forma de *você*».
3. ***Have* for existence, and missing dummy subjects** (*tem* = "has" = "there is")
   - Typical errors:
     - *during the Carnival too has many dances* → *There are many dances during Carnival too* (COBRA-7).
     - *Has a bank near here?* → *Is there a bank near here?*
     - *Is fantastic* → *It's fantastic* ([London School](https://www.londonschool.com/blog/from-brazinglish-to-english-part-2)).
     - *Is raining* → *It's raining*.
   - Why: colloquial Brazilian Portuguese says *Tem um banco aqui perto?* with *ter* ("have"), and uses no pronoun in *Está chovendo* or *É importante*.
   - [research-backed] COBRA-7 has a separate "There is" category: 8, 15, 6, 0 and 3 errors at Basic 2, Pre-intermediate, Intermediate, Upper and Advanced (Dantas 2012). The numbers are small, but the error persists to Advanced.
   - [research-backed, abstract only] A 2022 grammaticality-judgment squib with Rio undergraduates "supports, partially" the prediction that missing English subjects are hardest to notice where Brazilian Portuguese prefers null subjects ([UnB, Caderno de Squibs](https://www.periodicos.unb.br/index.php/cs/article/view/38281)). No figures were shown.
   - [research-backed] Contemporary Brazilian Portuguese is filling the subject position more and more. First person leads (Lamoglia Duarte 1993, quoted in [Buthers & Duarte](https://www.letras.ufmg.br/fbonfim/pdf/pb_lingua_sujeito_nulo_ou_obrigatorio.pdf)), but weather sentences still occur without a subject ("Tá chovendo pra caramba").
   - Read: ordinary pronoun subjects are a weak target, as for Spanish (es.md §4.5). Dummy *it* and existential *there* are a strong one, because the Brazilian sentence literally has *tem*.
4. **Articles and determiners where Portuguese differs**
   - Typical errors:
     - *I live with the my mother* → *with my mother* (COBRA-7): Portuguese allows *a minha mãe*.
     - *My husband is doctor* → *is a doctor* (COBRA-7).
     - *The life is hard* → *Life is hard*; *the Brazil* → *Brazil* (llexi via OTHERS.md).
     - *I broke the arm* → *I broke my arm* [inference, same as Spanish].
   - [research-backed] Determiners are 10% of COBRA-7 errors and in the top four at every level, peaking at Intermediate (86). The author says they "causam confusão" at the first levels (Dantas 2012).
   - [inference] Portuguese articles before possessives (*o meu carro*), before first names (*o Pedro*, very common in São Paulo and the South) and before most country names (*o Brasil, os Estados Unidos*) add three transfer sources Spanish lacks.
5. **Tense and aspect: present perfect, *since/for*, finished time**
   - Typical errors: *I work here since 2022* → *I've worked here since 2022*; *I have called him yesterday* → *I called him yesterday* (both llexi via OTHERS.md).
   - [research-backed] Time/tense/aspect is 11% of COBRA-7 errors and tends to **increase** with level, while wrong lexical choice decreases (Dantas 2012).
   - [inference] Brazilian *tenho feito* means a repeated or continuing action ("I've been doing lately"). Speakers otherwise use the simple past (*fiz*) for experiences and recent events. So expect under-use of the present perfect more than over-use, and *since* + present by calque of *moro aqui desde 2010 / há 10 anos*.
6. **False cognates**
   - Typical errors: *pretend* for «pretender» (→ *intend, plan*); *push* for «puxar» (→ *pull*); *actually* for «atualmente» (→ *currently*); *parents* for «parentes» (→ *relatives*); *college* for «colégio» (→ *school*); *lunch* for «lanche» (→ *snack*); *exquisite* for «esquisito» (→ *weird*); *assist* for «assistir» (→ *watch / attend*).
   - [curriculum convention] Brazilian school and exam-prep sites teach long lists. Descomplica's "false friends no ENEM" list is *pretend, push, library, parents, pasta, actually, attend, college* ([Descomplica](https://descomplica.com.br/blog/false-friends-no-enem-oito-palavras-perigosas-2/)). Toda Matéria lists about 70 pairs ([Toda Matéria](https://www.todamateria.com.br/falsos-cognatos-no-ingles-false-friends/)).
   - [research-backed, indirect] Vocabulary is the second-largest COBRA-7 category (13%). Its example *I like to do new friends* is a make/do error, not a false cognate (Dantas 2012). No count of false-cognate errors was found.
7. **Adjectives: plural agreement and position**
   - Typical errors: *My eating habits are normals* → *normal* (COBRA-7); *I see one gentleman well dress* → *a well-dressed gentleman* (COBRA-7, inversion); *a contract big* → *a big contract* (llexi via OTHERS.md).
   - [research-backed] Adjectives and adverbs are 6% of COBRA-7 errors (Dantas 2012).
8. **Make vs do, say vs tell** (both *fazer*, both *dizer*)
   - Typical errors: *I like to do new friends* → *make friends* (COBRA-7); *make a question* → *ask a question* (llexi via OTHERS.md); *He said me* → *He told me* [inference, as in Spanish].
9. **Gerund vs infinitive and *want* + clause**
   - Typical errors:
     - *Do you mind to help me?* → *helping* ([London School](https://www.londonschool.com/blog/from-brazinglish-to-english-part-2));
     - *She wants that you do it* → *She wants you to do it* (same source);
     - *for going to go to the park* (wrong non-finite form after a preposition; [Cambridge Choose in Use](https://www.cambridge.org/elt/blog/wp-content/uploads/2020/03/Portuguese.pdf)).
   - All [practitioner opinion].
10. **Wrong-word pairs from one Portuguese word**
    - *use* for *wear* (*usar*); *travel* for *trip* (*viagem*); *work* for *job* (*trabalho*); *home* for *house* (*casa*); *forgot* for *left* (*esqueci o passaporte*) ([Cambridge Choose in Use](https://www.cambridge.org/elt/blog/wp-content/uploads/2020/03/Portuguese.pdf)) [practitioner opinion].
11. **Countability** (*advices, informations, furnitures*, and *breads*, since *pão* is countable): [practitioner opinion]; standard list, no Brazilian source fetched.
12. **Be vs have / *estar com***
    - Typical errors: *I have 25 years* → *I'm 25*; *I'm with hunger / I have hungry* → *I'm hungry*; *You have reason* → *You're right*.
    - [inference] Brazilians say *tenho 25 anos* and *você tem razão* (as in Spanish), but *estou com fome / com frio*. That gives *with* calques, not *have*.
13. **Possessives *his/her* vs *seu/sua***
    - Typical error: *Ana loves his brother* → *her brother*.
    - [inference] *Seu/sua* agrees with the thing owned and can mean his, her, your or their. *Dele/dela* (owner's gender) is the useful anchor: «*his* = dele, *her* = dela».
14. **Double negatives** (*I don't know nothing*, from *não sei nada*): [inference]; no Brazilian source fetched.
15. **Embedded questions** (*I know where is the meeting* → *where the meeting is*): llexi via OTHERS.md [practitioner opinion].
16. **Phrasal-verb avoidance** (*enter, continue, return* for *come in, go on, come back*): [inference]; Portuguese has the same Latinate verbs as Spanish (*entrar, continuar, retornar*).
17. **Pronunciation**
    - **Epenthetic vowel after final and medial consonants** (*Facebook* «feicibuqui», *big* «bigui», *map* [mæpi], *picture* [ˈpɪkitʃə]).
      - [research-backed] 53 early beginners epenthesised after /p/ and /k/ in 61–88% of tokens, depending on position: before /n/ 88%, word-final 65%, before /t/ 61%. Pre-reading aloud had the highest rate, 88% ([John & Cardoso 2017](https://scielo.br/j/ides/a/84qPK4M6Cx7fjJvwFsyBsNm/?lang=en)).
      - [research-backed] Instruction had a "highly significant" effect on production of word-final consonants (not on perception). Orthography, phonological environment and word frequency influenced acquisition ([Silveira 2004](https://fonapli.paginas.ufsc.br/files/2012/06/tese-Rosane.pdf); results chapter not read).
      - Second-hand via Silveira: Baptista & Silva Filho (1997) found nasals easiest, then stops, fricatives and affricates; voiced finals were harder than voiceless.
      - [research-backed] Epenthesis "did not seem to affect intelligibility" for listeners in Silva 1998.
      - Design consequence: the `pron` field must show codas with no vowel after them (§6).
    - **-ed endings** (*worked* «uorkid», *played* «pleiid»).
      - [research-backed, abstract only] 26 upper-intermediate learners read 91 *-ed* verbs. Less sonorous consonants before *-ed* triggered more epenthesis: affricates > stops > fricatives, and nasals > liquids ([Delatorre 2008](https://periodicos.ufsc.br/index.php/desterro/article/view/2175-8026.2008n55p83)). No rates were in the abstract.
      - The *-ed* default to /ɪd/ is also llexi's point (via OTHERS.md).
    - **r → [h], and h dropped or reversed** (*red* [ˈhedʒi], *head* vs *red*).
      - [research-backed] /h/ for /r/ in *replied, returned* "seems to be an important cause of unintelligibility" (Silva 1998).
      - [practitioner opinion] Brazilian /r/ is made in the throat with friction and can sound like *h* to English ears, and /h/ is sometimes dropped (paraphrased) ([Pronunciation Studio](https://pronunciationstudio.com/portuguese-speakers-english-pronunciation-errors/)). Initial R and H also head [Toda Matéria](https://www.todamateria.com.br/pronuncia-em-ingles-guia-dos-sons-mais-dificeis-para-brasileiros/)'s list.
    - **Final unstressed vowels weakened or lost; stress on the wrong element** (*office, happy, taxi*; *homework, classroom* stressed on the second part).
      - [research-backed] Final-vowel reduction was "a major problem" for intelligibility (Silva 1998). Listeners missed the last syllables of *gazing, happen, semester* and heard only the first syllable of *telephone*.
    - **th** → /f/, /d/, /s/, /z/, /t/ (*think* [sɪŋk], [fɪŋk], [tɪŋk]).
      - [research-backed] Listeners did not report difficulty with these substitutions (Silva 1998).
      - [practitioner opinion] Pronunciation Studio and Toda Matéria both list th first.
      - Keep it in the `pron` lesson, but it is not the top intelligibility risk.
    - **Final l → [w]/[ʊ]** (*milk* [ˈmɪʊki], *feel* «fiu», *cold* ≈ *code*).
      - [research-backed] The vocalisation is described in Silva 1998, but listeners did not flag it.
      - [practitioner opinion] Pronunciation Studio and Toda Matéria ("Brazil, school, small").
    - **Final m/n nasalised and dropped** (*sun, room*; *team* ≈ *teen*).
      - [research-backed] Described in Silva 1998, but not tested with listeners.
    - **t/d before /i/ → [tʃ]/[dʒ]** (*different* «djifferent», *team* «tchim», *red* [ˈhedʒi]).
      - [practitioner opinion] Pronunciation Studio (/d/ → /dʒ/ in *difficult, divide, different*); Silva 1998's transcription of *red* shows it.
      - [inference] Portuguese *j* is /ʒ/, so *job, Jack* come out with [ʒ].
    - **Vowels**: /iː/–/ɪ/ (*feet/fit, leave/live*), /æ/–/e/ (*bad/bed*), schwa read from spelling.
      - [research-backed, abstract only] Highly proficient learners produced English vowels with formant values like their Portuguese vowels. Pairs they discriminated poorly were produced like one Portuguese vowel ([Rauber, Escudero, Bion & Baptista 2005](https://www.isca-archive.org/interspeech_2005/rauber05_interspeech.html)). Which pairs was not shown.
      - [research-backed] Vowel length did not noticeably hurt intelligibility for *read, speak, sort* (Silva 1998).
      - [practitioner opinion] /iː/–/ɪ/ and spelling-led schwa (Pronunciation Studio).
    - **No aspiration of /p t k/** [practitioner opinion] (Pronunciation Studio).
    - **Prothetic vowel before s-clusters** (*istudent, iSpain*).
      - [research-backed, abstract only] Epenthesis is "a estratégia mais utilizada" with initial clusters for Portuguese and Spanish speakers ([Rauber & Baptista 2004](https://periodicos.ufmg.br/index.php/relin/article/view/28812)). No rates were shown.
    - **Spelling**:
      - [practitioner opinion] Silent letters read aloud: *walk, talk*, the *e* of *washed, looked* (Pronunciation Studio).
      - Typical misspellings by Portuguese students include *confortable, diferent, wich, belive* ([Cambridge Choose in Use](https://www.cambridge.org/elt/blog/wp-content/uploads/2020/03/Portuguese.pdf)).

## 5. Learner starting point

**Proficiency (EF EPI 2025)** [research-backed; self-selected online test-takers]
- From EF's own fact sheet: Brazil scores **482**, rank **75**, against a global average of 488. Skill scores are reading 516, listening 468, writing 442 and speaking 464 ([EF EPI 2025 Brazil](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-brazil-english.pdf)).
- The fact sheet text did not state the band. A news report citing the same index puts Brazil at 75th of 123 in the "low proficiency" band ([Gazeta do Povo 2026](https://gazetadopovo.com.br/vozes/parana-sa/ingles-deixa-de-ser-diferencial-e-se-torna-requisito-de-contratacao-no-brasil-em-2026)).
- The spread between cities is large: Florianópolis 577, Porto Alegre 570, Curitiba 556, Brasília 544, Rio de Janeiro 507 (regional table). Some city values in the fact sheet were truncated in the fetch.
- **Conflict:** `OTHERS.md` gave 466 (rank ≈81) from a secondary table. EF's own figure (482) replaces it.

**Reading above production.** Reading (516) is 48–74 points above the three other skills. This is the same reading-first shape as Argentina in es.md §5, but at a lower level overall: a typical learner is a false beginner who reads better than they write or speak.

**Exam and school culture**
- [curriculum convention] **ENEM** has 10 foreign-language questions, 5 English and 5 Spanish. Candidates choose one language at registration and answer only its 5 questions. The focus is "interpretação de texto, e não… gramática" ([Descomplica](https://descomplica.com.br/blog/ingles-ou-espanhol-no-enem/)).
  - ENEM motivates reading and false-cognate awareness (Descomplica's false-friends list is ENEM-framed), not speaking.
- [research-backed, one source] COBRA-7's essays came from a private franchise school network (Dantas 2012). Brazil's private language-school sector is where many adults learn; how large it is was not researched.
- **Work.**
  - A 2026 news report, citing Robert Half's *Guia Salarial 2025*, says English is a requirement in 92% of managerial openings on LinkedIn, and in over 70% of openings in technology, marketing and finance (Gazeta do Povo 2026).
  - Job interviews in English are therefore a concrete adult motivator. No figure on interviews themselves was found.
- **TOEFL / IELTS** for study abroad and **travel** (Orlando, New York, Lisbon, London) are plausible motivators. No uptake figures were fetched (§11).

**Cognate advantage** [inference]
- Portuguese shares the Latin and French layer of English vocabulary with Spanish (es.md §5: about 75% of AWL headwords have Spanish cognates).
- No Portuguese-specific count was fetched. Expect a similar reading advantage and the same pattern: formal and academic words are easy, while the Germanic everyday core (*get, take, put, though, enough*) is not.

**Implications for the app** [inference]
- A1 must be a true A1 in production, even if learners recognise words.
- Spend lesson weight on typed items and the verb core.
- Spend card slots on the non-cognate core, phrasal verbs, false cognates and uncountables. Keep the five es-only decks (§9).
- Show IPA with codas on every card. Seeing *worked* as /ˈwɜːrkt/ is the cheapest anti-epenthesis cue available.
- Use goals and plan names that match the motivators: ENEM-style reading in Today, job-interview phrases in «Trabalho e e-mail», travel decks.

## 6. Pronunciation aid policy

**Evidence**
- **What Brazilian learners know** [research-backed, small]:
  - In a Fortaleza classroom study, the *Dicionário Oxford Escolar para estudantes brasileiros* prints the transcription after each headword "porque o dicionário é para falantes de português". But **"50% afirmaram desconhecer por completo a utilização da transcrição fonética"** ([Barcelos, UFES](https://periodicos.ufes.br/percursos/article/download/7437/6202/21516); year not given).
  - IPA is therefore printed in the dictionaries Brazilians own, yet half of these students had never used it. This is the main argument **against** IPA, and it is taken seriously below.
- **What Brazilian materials show** [curriculum convention]:
  - Toda Matéria's guide to "os sons mais difíceis para brasileiros" uses IPA symbols (/θ/, /ð/, /æ/, /ɑː/) and capitals for stress (*aBOUT, REcord*), with no Portuguese-letter respellings ([Toda Matéria](https://www.todamateria.com.br/pronuncia-em-ingles-guia-dos-sons-mais-dificeis-para-brasileiros/)).
  - MosaLingua's Portuguese blog presents IPA as optional but helpful ([MosaLingua](https://www.mosalingua.com/pt/transcricao-fonetica/)).
- **Against a Portuguese-letter respelling** [inference from §4.17]. Brazilian spelling-to-sound rules would mislead the reader at exactly the error points:
  - *te/ti, de/di* are read «tchi/dji»: a respelling «TIIM» for *team* invites «tchim».
  - Final *-e* and *-o* are read [i] and [u].
  - Final *l* is read [w]: «FIIL» is read «fiu».
  - Final *m/n* nasalise the vowel.
  - Initial *r* and *rr* are [h]: there is no letter left for English /r/.
  - *x* has four values, and *s* between vowels is [z].
  - The informal Brazilian habit of writing English «aportuguesado» («tchênks», «ai lóvi iú») writes the epenthetic vowel into the word. That is the error measured at 61–88% in John & Cardoso 2017. (These spellings are folk examples, not from a fetched source.)
  - es-en's Spanish respelling works only because Spanish spelling lacks most of these rules. Its letters would also be wrong for Portuguese: *j* = /ʒ/, not /h/.
- **Reuse** [measured locally]: zh-en already carries IPA for **349 of the 480** es-en card targets and **235 of the 356** es-en `{{ex:}}` English strings, identical character for character. Copying them gives consistency and saves most of the work.
- **No study** compares IPA, respelling and no aid for Brazilian learners. The recommendation is [inference]. It also inherits zh.md's caveat that the OALD North American notation is used "as remembered", since OALD was not fetched.

**Recommendation: IPA in every `pron` field (`"pron": "required"`), using exactly the zh-en notation and rules, with the key taught on one screen in the `pron` lesson. The interface toggle is «Mostrar pronúncia (AFI)».**

The binding rules are zh.md §6 plus `tools/content/zh/PRON-RULES.md`. pt writers follow them unchanged, so a pron copied from zh-en is already correct. Summary:

1. **Format.**
   - One pair of slashes around the whole transcription, words separated by single spaces.
   - No capitals, digits or punctuation.
   - ` ‖ ` between two sentences in one row; never `|`.
   - Alternatives are written as two slashed groups (`/ˈhaɪ/ /ˈheɪ/`). Never `//`.
2. **Stress.**
   - A closed list of function words stays unmarked: articles, pronouns, *be*, auxiliary *do/have*, modals, prepositions, conjunctions, existential *there*.
   - **Every other word gets ˈ, monosyllables included**: `/aɪ ˈlaɪk ˈtiː/`.
   - Every pron therefore contains ˈ, which `pronPattern` requires.
   - ˌ is used only inside long words, in -teen numbers and in letter-by-letter abbreviations.
3. **Symbols.**
   - OALD North American values: oʊ, ɑː for LOT, ɔː for THOUGHT, ɜːr, ər, ɪr/er/ʊr, ɑːr/ɔːr.
   - **ASCII `g`, plain `r`.** No ɡ, ɹ, ɚ, ɝ or flap symbol.
   - DRESS is **e** (`/ˈbed/`).
   - Final unstressed -y is **i**. Unstressed long vowels lose ː.
4. **Weak forms** as in zh PRON-RULES §B: *a* /ə/, *the* /ðə/ (/ði/ before a vowel), *to* /tə/, *for* /fər/, *of* /əv/, *and* /ənd/, *can* /kən/, *are* /ər/, *was* /wəz/, *you* /ju/, *do* /də/, *could* /kəd/.
5. **Codas are written in full; never write an inserted vowel.**
   - -s is /s z ɪz/ and -ed is /t d ɪd/ as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/.
   - Syllabic l and n follow zh PRON-RULES §A.4: `people` /ˈpiːpl/, `student` /ˈstuːdnt/.
6. **Names** as the en-US voice says them: `São Paulo` /ˌsaʊ ˈpaʊloʊ/, `Brazil` /brəˈzɪl/, `Lucas` /ˈluːkəs/. Numbers as words. Abbreviations letter by letter.
7. **Practice items carry no pron** (PRACTICE-SPEC).
8. **Copy first.** For any English string identical to a zh-en card target or `{{ex:}}` row, copy zh's pron exactly. Write new IPA only for strings zh lacks:
   - the five es-only decks;
   - the 18 extra phrasal-verb cards;
   - localised targets;
   - rebuilt `pron` and `false-friends` items.
   - Content agents may copy `tools/content/zh/pron_check.js` into `tools/content/pt/` and run it to catch conflicting transcriptions.
9. **Convert every Spanish respelling** quoted in card notes, lesson prose and check options: «KAMF-ter-bel», «WO-rer», «LI-rel», «SKUUL», «JIIT dhi-SAP» and similar. These are in pron, numbers, the «Cognados y acento» notes, «Supervivencia 1» notes and others. Replace each with IPA or with a Portuguese description. A search for the capitalised-syllable pattern `[A-Z]{2,}-` in `tools/content/pt/` finds them.

**The key for the `pron` lesson** (one screen, Portuguese reference sounds, Brazilian traps flagged ⚠):

| IPA | Sound | Like (pt-BR) | Example |
|---|---|---|---|
| iː | long, tense i | «i» de «vi», mais longo | sheep /ˈʃiːp/ |
| ɪ | short, relaxed i | entre «i» e «ê», curto ⚠ | ship /ˈʃɪp/ |
| e | DRESS | «é/ê» médio | bed /ˈbed/ |
| æ | TRAP | «é» bem aberto, boca aberta ⚠ | bad /ˈbæd/ |
| ʌ | STRUT | «a» fechado, como em «cama» | cup /ˈkʌp/ |
| ə | schwa (weak) | o «a» final de «casa» | about /əˈbaʊt/ |
| ɑː | LOT | «á» aberto e longo | hot /ˈhɑːt/ |
| ɔː | THOUGHT | «ó» aberto | talk /ˈtɔːk/ |
| uː / ʊ | long u / short u | «u» longo / curto e relaxado | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | NURSE / weak -er | vogal com a língua para trás, sem vibrar | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ oʊ aʊ | diphthongs | «ei», «ai», «ói», «ou», «au» | day /ˈdeɪ/, go /ˈgoʊ/ |
| p t k | stops | com um sopro no início da sílaba tônica; **t nunca «tch»** ⚠ | team /ˈtiːm/ |
| d | | **nunca «dj»** antes de i ⚠ | different /ˈdɪfrənt/ |
| θ / ð | th | língua entre os dentes: sem voz / com voz ⚠ | think /ˈθɪŋk/, this /ˈðɪs/ |
| ʃ / ʒ | | «ch» de «chá» / «j» de «já» | she /ʃi/, usually /ˈjuːʒuəli/ |
| tʃ / dʒ | | «tch» de «tia» / «dj» de «dia». **O *j* inglês é dʒ, não o «j» de «já»** ⚠ | chair /ˈtʃer/, job /ˈdʒɑːb/ |
| h | | sopro leve; o «h» português é mudo, o inglês soa ⚠ | head /ˈhed/ |
| r | English r | língua curvada para trás, sem tocar; **nunca o «r» de «rato»** ⚠ | red /ˈred/ |
| m / n | final nasals | feche os lábios / encoste a língua: **não nasalize a vogal** ⚠ | team /ˈtiːm/, teen /ˈtiːn/ |
| ŋ | | «ng» de «sangue», sem o «g» | sing /ˈsɪŋ/ |
| l | final l | ponta da língua atrás dos dentes; **nunca «u»** ⚠ | feel /ˈfiːl/, cold /ˈkoʊld/ |
| w / j | semivowels | «u» de «quase» / «i» de «iogurte». **O *j* do AFI é o *y* inglês** ⚠ | we /wi/, yes /ˈjes/ |
| ˈ | stress | vem **antes** da sílaba tônica | hotel /hoʊˈtel/ |

Under the table, the lesson body says three more things:
- «Se não há vogal depois da consoante, não acrescente nenhuma: Facebook /ˈfeɪsbʊk/, não "feicibuqui".»
- In American English a *t* between vowels sounds like the «r» of «caro» (*water*, *city*). The aid does not write this; the audio does.
- Once, a reading of the most common trap: the IPA letter *j* is the English *y*.

**Worked examples** (all pass the proposed `pronPattern` and the differs-from-English test; checked locally):

| Lesson / deck | English | `pron` | Source |
|---|---|---|---|
| Sobrevivência 1 | Excuse me. | /ɪkˈskjuːz mi/ | copied from zh-en |
| Sobrevivência 1 | Thank you. | /ˈθæŋk ju/ | copied from zh-en |
| it-there | It's raining. | /ɪts ˈreɪnɪŋ/ | copied from zh-en |
| questions | Does she live here? | /dəz ʃi ˈlɪv ˈhɪr/ | copied from zh-en |
| Apresentações | I'm a student. | /aɪm ə ˈstuːdnt/ | copied from zh-en |
| Apresentações | I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | copied from zh-en |
| it-there | There are many people here. | /ðer ər ˈmeni ˈpiːpl ˈhɪr/ | new |
| Apresentações (new target) | I'm from Brazil. | /aɪm frəm brəˈzɪl/ | new |
| Apresentações (new target) | I live in São Paulo. | /aɪ ˈlɪv ɪn ˌsaʊ ˈpaʊloʊ/ | new |
| Sobrevivência 1 (new target) | Do you speak Portuguese? | /də ju ˈspiːk ˌpɔːrtʃəˈgiːz/ | new |
| past | worked · played · wanted | /ˈwɜːrkt/ · /ˈpleɪd/ · /ˈwɑːntɪd/ | new |
| Armadilhas (new targets) | head · red | /ˈhed/ · /ˈred/ | new |
| Armadilhas (new targets) | cold · code | /ˈkoʊld/ · /ˈkoʊd/ | new |
| Armadilhas (new targets) | team · teen | /ˈtiːm/ · /ˈtiːn/ | new |
| Armadilhas | milk | /ˈmɪlk/ | copied from zh-en |
| Falsos cognatos | actually · pretend · push · lunch | /ˈæktʃuəli/ · /prɪˈtend/ · /ˈpʊʃ/ · /ˈlʌntʃ/ | new |
| verb-prep (new lesson) | She depends on her parents. | /ʃi dɪˈpendz ɑːn hər ˈperənts/ | new |
| pron (prose) | Facebook | /ˈfeɪsbʊk/ | new |

The four es cards that needed a Spanish tag to differ from the target (`SHIP (i corta)` etc., es PRON-RULES §4) need no tag in IPA: `ship` /ˈʃɪp/, `think` /ˈθɪŋk/, `sink` /ˈsɪŋk/, `milk` /ˈmɪlk/.

## 7. Standing practice rule

**Rule: keep es.md §7 "verb core" unchanged** (núcleo verbal: concordância + auxiliar + sujeito obrigatório). In every lesson's practice set, **at least half of the `order` and `type` items together must hinge on the verb core**. The verb core means:
- subject–verb agreement (-s / *is–are* / *has* / *does*);
- the auxiliary in questions and negatives (*do/does/did*, or inversion with any auxiliary);
- dummy *it* or *there* as subject (typed items).

The definitions of "hinging" for `order` and `type` are es.md §7 word for word. The validator kind `verb-core` implements them heuristically.

**Why keep it rather than a preposition rule:**
- [research-backed] COBRA-7 ranks prepositions first (22%) and "questions, negatives, auxiliaries" fifth (7%) (Dantas 2012). On counts alone a preposition rule would win.
- But prepositions are lexical and lesson-bound. A preposition hinge in `passive` or `conditionals` would be artificial, and OTHERS.md's proposed `prep-tense` kind is not implemented. Prepositions get the `prep` lesson, the new `verb-prep` lesson and their own items instead [inference].
- [research-backed] The verb core is attested for Brazilians in the same corpus: *People plays*, *How I could buy that?*, *too has many dances* (§4.2–4.3).
- **Parity cost decides it** [inference]. Every es-en order/type item was reworked to hinge on the verb core (es deviations.json). Keeping the rule means pt translates the `why` lines and changes no English. A new rule would force English-side changes in about 37 lessons.
- The Brazilian-specific half of the rule is **dummy *there* vs *tem***. es items that use `x:["Has"]` (*Has many people here*) fit Brazilians even better than Spanish speakers, because *tem* literally means "has".

**Validator keywords** (`flags: "i"`):

```
sujeito|auxiliar|terceira pessoa|concord[âa]ncia
```

- Use them like this:
  - «sujeito» for dummy *it/there*;
  - «auxiliar» for *do/does/did* and inversion;
  - «terceira pessoa» for -s, *does*, *has*;
  - «concordância» for *is/are*, *was/were*, *there is/are*.
- The class `[âa]` accepts «concordancia» typed without the accent, but always write «concordância».
- Do not use these words in `why` lines of items that do not hinge.
- Sample `why` lines (plain strings, English in straight double quotes):
  - «Com "she", o verbo ganha -s: terceira pessoa.»
  - «Perguntas no presente precisam do auxiliar "do/does".»
  - «Na pergunta, o auxiliar "can" vem antes do sujeito.»
  - «Em inglês o sujeito é obrigatório: "It's raining".»
  - «"Tem muita gente" não é "Has many people": o sujeito em inglês é "there", com concordância: "There are".»
  - «"People" é plural: sem -s no verbo (concordância).»

**Translating es `why` lines.** Map «sujeto» → «sujeito», «auxiliar» → «auxiliar», «tercera persona» → «terceira pessoa», «concordancia» → «concordância». An item that hinged in es still hinges in pt. Run `validate.js pt` and compare the `[vc N]` counts with es's: they must be identical lesson by lesson, except in `pron`, `false-friends` and `verb-prep`.

**Count:** as es.md §7. A 14-item set has 6–8 order+type items, and at least 3 (for 6) or 4 (for 7–8) must hinge.

## 8. Curriculum deviations from the Spanish-speaker course

**Policy.**
- Keep all 41 es-en lesson ids, their order and their English side.
- Rewrite every explanation, prompt, `why` and hint from the Brazilian point of view (PILOT-SPEC §3). That is not a deviation.
- Change the English side only where a Spanish-specific item would mislead Brazilians.

**Verdicts:**
- **keep**: the contrast is the same in Portuguese; translate and localise the es explanation.
- **adapt**: same English side, but the explanation and Portuguese prompts must say something different for Brazilians.
- **change**: English side changes, which needs a deviation.

All verdicts are [inference] built on §4.

| # | Lesson id | Verdict | Note for Brazilian speakers |
|---|---|---|---|
| 1 | pron | **change** (lesson deviation) | Replace the Spanish traps (b/v, sh/ch, j/y) with Brazilian ones: epenthesis and final consonants, -ed, r/h, final l, final m/n, t/d before i, ee/i, th. Teach the IPA key (§6). Item map below. |
| 2 | be | adapt | *ser/estar* → *be*, and *tenho 25 anos* → *I'm 25* (same as es). The Brazilian twist is *estou com fome/frio* → *I'm hungry/cold*, so warn against *with*. *Você tem razão* → *You're right*. |
| 3 | it-there | adapt (core lesson) | **«Tem» = "has" ≠ "there is"**: *Tem um banco aqui perto?* → *Is there a bank near here?*; *Está chovendo* → *It's raining*; *É importante* → *It's important*. The es items with `x:["Has"]` / `"has"` fit as is. |
| 4 | articles | adapt | Jobs (*Ela é médica* → *She's a doctor*), generic nouns and body parts work as in es. Add the three Portuguese-only sources: article + possessive (*a minha mãe* → *my mother*), article + first name (*o Pedro* → *Pedro*), article + country. Put them in the body and `{{ex:}}` rows; the English items stay. |
| 5 | plurals | keep | Adjectives without -s (*normals*, COBRA-7) and *this/these* (/ɪ/–/iː/) are as in es. |
| 6 | present | adapt | Obligatory subject; *I don't*, not *I no*. Explain that *você fala* uses the -a form but English *you* takes no -s (§4.2). |
| 7 | questions | adapt | Do-support and word order; Brazilian yes/no questions are intonation-only (*Você gosta de café?*). COBRA-7's "questions, negatives, auxiliaries" category goes in the body. |
| 8 | third-s | keep | Add *People play* (plural, no -s) to the body: -s is overgeneralised (*People plays*, COBRA-7). |
| 9 | prep | adapt | *em* = in/on/at, as *en* in es. Add *chegar em* → *arrive at/in*, never *arrive to*. Mention COBRA-7's 22% to motivate. |
| 10 | countable | keep | *conselhos, informações, notícias, móveis* → uncountable; add *pão* (countable in Portuguese) in the body. |
| 11 | object-have | adapt | *seu/sua* agrees with the thing; anchor *his* = *dele*, *her* = *dela*. *estar com fome* again. |
| 12 | can-like | adapt | *gostar de* is **not** reversed like *gustar*, so drop es's "Pizza likes me" emphasis from the body. The Brazilian error is *I like of pizza* (calque of *de*). The mc distractor "Pizza likes me." stays, because it is harmless and keeps parity. |
| 13 | polite | keep + technical deviation | *você / o senhor / a senhora* → *you*. Check 2's option 0 is Spanish text that parity reads as English (see below). |
| 14 | continuous | adapt | Brazilians use the progressive a lot, including with statives («estou querendo», «vou estar enviando»), so stress the stative distractors in check 2 (*I'm knowing him*). |
| 15 | past | keep | **-ed as /t/ /d/ /ɪd/** is a top Brazilian issue (Delatorre 2008). *did* + base form. |
| 16 | irregular-past | keep | |
| 17 | the | adapt | Generic nouns without *the* (*a vida, o café é caro* → *Life…, Coffee…*); body parts; countries (*o Brasil* → *Brazil*, but *the United States*). |
| 18 | adjectives | keep | Position, no -s; *mais … do que* → *more … than* / *-er than*, never *that* or *as*. |
| 19 | going-to | keep | *vou + infinitivo* is a direct parallel. |
| 20 | tense | keep | |
| 21 | joining | keep | |
| 22 | numbers | adapt + technical deviation | Decimal comma in Brazil (*2,5* → *two point five*), as most es countries. **Brazil uses the short scale: *bilhão* = *billion* = 10⁹**, so there is no trap, unlike Spanish *billón* and European Portuguese [inference, flag]. The English items stay. Checks 1 and 2 need technical deviations (Spanish-text options). Read *R$ 50* as *fifty reais* in the body. |
| 23 | smalltalk | keep | Localise (§9). |
| 24 | false-friends | **change** (lesson deviation) | Partial rebuild; item map below. |
| 25 | past-continuous | keep | |
| 26 | will | keep | Present for offers (*Eu te ajudo* → *I'll help you*) matches es's "I help you." distractor. |
| 27 | perfect | adapt | **Never «pretérito perfeito composto»** (*tenho feito* is repeated action). Teach by use; finished-time words force the past simple. Accept US *Did you ever…?* |
| 28 | modals | keep | *não deve* (mustn't) vs *não precisa* (don't have to). |
| 29 | to-ing | keep | *antes de sair* → *before leaving*; *quero que você venha* → *I want you to come*; *Do you mind to help?* → *helping* (London School). |
| 30 | make-do | **keep, carries over fully** | *fazer* = make/do, *dizer* = say/tell, exactly as *hacer/decir*. Add one body line and a deck note for the Brazilian calque *make a question* → *ask a question*. The English items are unchanged. |
| — | **verb-prep** (new, pt-only, after make-do) | **add** | Verb/adjective + preposition (*depend on, wait for, listen to, think about, married to, good at, interested in, different from, arrive at*). Spec below. |
| 31 | articles-2 | adapt | Generic nouns and plurals without *the*; countries and *the United States* (check 1 fits). |
| 32 | first-conditional | adapt | Good news for Brazilians: *se* + **futuro do subjuntivo** (*se chover*) maps to the English present (*if it rains*). Never *if it will rain*. |
| 33 | relative | keep | *que* = who/that/which. |
| 34 | phrasal | keep + technical deviation | Latinate verb vs phrasal (*entrar* → *come in*). Check 1 is Spanish text (deviation). |
| 35 | perfect-2 | adapt | *Moro aqui há 10 anos / desde 2010* → *I've lived here for 10 years / since 2010*. *há / faz* → *for*. |
| 36 | narrative | keep | |
| 37 | conditionals | keep | *Se eu fosse você* → *If I were you*. |
| 38 | passive | keep | *Aqui se fala inglês*, *vende-se* → *English is spoken*. |
| 39 | reported | keep | say/tell recap. |
| 40 | email | keep | Check 1's distractor *I stay waiting your answer* is literally Brazilian «fico aguardando sua resposta»; say so. *Atenciosamente* ≈ *Best regards*. |
| 41 | idioms | keep + technical deviation | Portuguese equivalents in prompts: «moleza», «custa os olhos da cara», «falando no diabo», «matar dois coelhos com uma cajadada só» (warn against *two rabbits*). Check 1 needs a technical deviation (Spanish options). |

**`pron` lesson: English-side item map** (same item count and types as es; under `lessons.pron`). The three order items and three type items still satisfy verb-core: order 5 and 7 have an *is/are* twin in x, order 6 starts with *Is*, type 11 has *There are* (with x "is"), type 12 starts with *It's*, and type 13 has none, which leaves 5 of 6.

| es item | Keep / replace | pt item (English side) |
|---|---|---|
| check 0 sheep/ship | keep | — |
| check 1 school (options Spanish text) | rewrite options in Portuguese with IPA | e.g. «Com "i" na frente: /ɪˈskuːl/», «Sem vogal na frente: /ˈskuːl/» (answer index 3 as es) |
| check 2 comfortable stress | keep the point, rewrite options | «Na última sílaba, como "confortável"», «No começo: /ˈkʌmftərbl/» (index 2) |
| P0 sheep | keep | |
| P1 very/berry | replace | «Qual palavra significa «cabeça»?» o `["head","red","had","hate"]` |
| P2 shoes/choose | replace | «Qual palavra significa «código»?» o `["code","cold","cord","coat"]` |
| P3 fool/full | keep | |
| P4 joke/yolk | replace | «Qual palavra significa «time (equipe)»?» o `["team","teen","tin","ten"]` |
| P5 school / eschool | keep | (Brazilians also add a vowel before s-clusters) |
| P6 x berry | change x only | x `["rot"]` (r/h trap: *rot* said with Brazilian r ≈ *hot*) |
| P7 Spain / Espain | keep | |
| P8 __udent | change o only | o `["ist","is","s"]` (the Brazilian prothetic vowel is [i]) |
| P9 __ink (th) | keep | o s/t/f matches Brazilian substitutions |
| P10 __ery (v/b) | replace | q "Welcome to my __ouse." p «Boas-vindas à minha casa» a `["h"]` o `["r","w","m"]` |
| P11 three trees | keep | |
| P12 x berry | change x only | x `["Is"]` |
| P13 I think so / sink | keep | |

**`false-friends` lesson: rebuild** (under `lessons.false-friends`). Nine of the 14 practice items and two of the three checks work for Portuguese unchanged in English. *actually/atualmente*, *attend/assistir*, *sensible/sensível*, *library/livraria*, *realize/realizar* and *exit* are shared Spanish–Portuguese false friends. Replace only the items built on Spanish-only traps:
- *embarrassed/embarazada*: Portuguese *embaraçado* roughly means "embarrassed", so there is no trap.
- *carpet/carpeta*: Portuguese *carpete* is a true cognate.
- The *success/éxito* item: Brazilians say *sucesso*, so the trap is weak.

| es item | Keep / replace | pt item |
|---|---|---|
| check 0 embarrassed | replace | «O que significa "He's pretending"?» options Portuguese: «Ele pretende ir», «Ele está fingindo», «Ele está tentando», «Ele está fugindo» (index 1) |
| check 1 Actually/Currently … Madrid | keep English, localise | "…, I live in São Paulo." (index 2) |
| check 2 bookstore/library | keep | |
| P0 actually (Portuguese options) | keep, translate options | «na verdade», «atualmente», «ativamente», «às vezes» |
| P1 pregnant | replace | «Como se diz «Empurre a porta»?» o `["Push the door.","Pull the door.","Press the door.","Put the door."]` |
| P2 attend class | keep | «Assisto às aulas às segundas» |
| P3 sensible | keep, translate options | «É muito sensato.», «É muito sensível.», … |
| P4 success/exit | replace | «O que significa "My parents live in Recife"?» o: «Meus pais moram em Recife.», «Meus parentes moram em Recife.», «Meus primos moram em Recife.», «Meus avós moram em Recife.» |
| P5 Where is the exit (x success) | keep | hinge: *Where is* |
| P6 She works at the library | keep | |
| P7 Did you realize | keep | |
| P8 "__, I'm from Mexico." | localise | "__, I'm from Brazil." p «Na verdade, sou do Brasil» |
| P9 bookstore | keep | |
| P10 carpet | replace | q "Don't __ you didn't see me." p «Não finja que não me viu» a `["pretend"]` o `["intend","prepare","present"]` |
| P11 I'm embarrassed | replace | p «Ela está fingindo que dorme» a `["She is pretending to be asleep","She's pretending to be asleep","She pretends to be asleep","She is pretending to sleep","She's pretending to sleep"]` x `["intends"]`. The hinge is *is*, so a[0] must be the full form: validate.js reads "she's" as one token and would not count it. |
| P12 He didn't realize | keep | |
| P13 She attends class (x assists) | keep | stronger for Brazilians: *assistir* = attend / watch |

The lesson body groups the false cognates as in §9 and adds the partial ones: *discuss* («discutir» = argue and discuss), *support* («suportar» = put up with), *introduce* («introduzir» = insert). The lesson keeps its deck link to deck 21, «Falsos cognatos».

**`verb-prep` (pt-only lesson, conditional).**
- **Evidence.** Prepositions and particles are the largest category in the largest Brazilian learner corpus fetched (22% of 3,854 errors, top at Basic 1; Dantas 2012). COBRA-7's own example is a dependent preposition (*habit to eat*). The prepositions *after verbs* are the top item in the practitioner list (llexi via OTHERS.md).
- **Sequencing.** The `lessonOrder.after` entry is harmless before the lesson exists: gen.js skips ORDER ids that have no lesson. The `extraLessons` entry is not: parity fails on an id that is missing from the pack. So add `"verb-prep"` to `extraLessons` in the same change that adds the lesson to `more/a2.js`, and until then ship the deviations block without it. gen.js numbers titles itself, so lessons 31–41 become 32–42 with no manual edits.
- **Placement support** [P-inference]: the project's order report already puts "prepositions as verb and adjective chunks" at A2 in its recommended English order (`reports/Grammar learning order research.md`, "Recommended English order"). es-en has no lesson that owns it.
- **Caveat:** the 22% is not broken down, so the share of dependent-preposition errors, as opposed to *in/on/at* (lesson `prep`), is unknown. If the lead judges this not strong enough, drop the lesson: delete `"verb-prep": "make-do"` from `lessonOrder.after` and `"verb-prep"` from `extraLessons`. Nothing else depends on it.
- **Place:** after `make-do` in A2 (file `more/a2.js`); A2 grows to 11 lessons. **Deck:** link to the existing «Phrasal verbs» deck (index 16; "prepositions and particles"). No new deck.
- **Title:** «Verbos e adjetivos com preposição: depend on, good at, married to».
- **Content:** 12–16 collocations, each contrasted with Portuguese:

  | English | Portuguese | Note |
  |---|---|---|
  | depend on | depender de | |
  | wait for | esperar | no preposition in Portuguese |
  | listen to | escutar | no preposition in Portuguese |
  | look at | olhar para | |
  | think about / of | pensar em | |
  | talk to / about | falar com / de | |
  | ask for | pedir | |
  | pay for | pagar | |
  | arrive at / in | chegar em | |
  | married to | casado com | |
  | interested in | interessado em | |
  | good at | bom em | |
  | afraid of | com medo de | |
  | different from | diferente de | |
  | proud of | orgulhoso de | |
  | responsible for | responsável por | |
- **Practice (14):** 5 mc, 3 order, 3 fill, 3 type, satisfying verb-core:
  - order: "Does she depend on her parents" (inverted), "He listens to music every day" with x `["listen"]`;
  - type: "She is married to a doctor", "Are you good at math", "He doesn't wait for anyone".
  - `why` lines name the preposition and, on hinging items, the verb-core keyword.
- **Checks:** 3, with varied answer index.

**Technical item deviations (no real English change).** `parity.js` decides which reference check options are "native" with the **es** `cueTest`. Five es-en checks have options in Spanish that es `cueTest` does not catch (no accent, no listed word), so parity compares them as English and a Portuguese translation fails. Found by script:

| Key | es options read as English |
|---|---|
| `polite#check2` | «Infinitivo sin to (open)» (option 1, «to + infinitivo (to open)», is identical in Portuguese and needs no change) |
| `numbers#check1` | «En teen (al final)», «En thir (al principio)» |
| `numbers#check2` | «mil millones», «cien millones» |
| `phrasal#check1` | «Salir corriendo», «Quedarse sin algo, acabarse», «Llegar tarde» |
| `idioms#check1` | «Hace mal tiempo.», «Estoy al aire libre.», «No me siento muy bien.» |

- `articles#check0` option «(nada)» is spelled the same in Portuguese, so it needs nothing.
- The same scan over every practice `o`/`a`/`x` in all 41 lessons found Spanish only in `pron` and `false-friends`, which are exempt anyway.
- Pipeline note, not for pt agents: extending es `cueTest` with «|\b(sin|al|en|mil|cien|millones|salir|llegar|quedarse|hace|estoy|siento|muy)\b» would remove these deviations. That is the es owner's call, because it also changes es cue injection.

**Paste-ready `tools/content/pt/deviations.json`.** Deck keys are **0-based pack order** (the order of `DECKS` in the generated pack, as in §9), not DECKNAMES.md numbering. `false-friends` and `make-do` are in es-en already, so they must **not** be in `extraLessons`; parity would fail with "ko-en has it too". They are only in `profile.json` `lessonOrder.after`, which gen.js needs to place them.

```json
{
  "lessons": {
    "pron": "profile pt.md §8 pron: Brazilian sound traps (final consonants and epenthesis, r/h, final l, final m/n, t/d before i, th, ee/i, -ed) replace the Spanish b/v, sh/ch, j/y items (P1, P2, P4, P6 x, P8 o, P10, P12 x; checks 1-2 rewritten with IPA)",
    "false-friends": "profile pt.md §8 false-friends: Spanish-only traps (embarrassed/embarazada, carpet/carpeta, success/éxito) replaced by Portuguese false cognates (pretend, push, parents); Madrid/Mexico localised to São Paulo/Brazil (check 0, check 1, P1, P4, P8, P10, P11)"
  },
  "items": {
    "polite#check2": "technical: es-en option 0 is Spanish text not caught by es cueTest; Portuguese translation (profile pt.md §8)",
    "numbers#check1": "technical: es-en options 2-3 are Spanish text not caught by es cueTest; Portuguese translation (profile pt.md §8)",
    "numbers#check2": "technical: es-en options 0 and 2 are Spanish text not caught by es cueTest; Portuguese translation, short-scale bilhão (profile pt.md §8)",
    "phrasal#check1": "technical: es-en options are Spanish text not caught by es cueTest; Portuguese translation (profile pt.md §8)",
    "idioms#check1": "technical: es-en options are Spanish text not caught by es cueTest; Portuguese translation (profile pt.md §8)"
  },
  "decks": {
    "1": "profile pt.md §9: I'm from Mexico. -> I'm from Brazil.; I live in Lima. -> I live in São Paulo.",
    "2": "profile pt.md §9: Do you speak Spanish? -> Do you speak Portuguese?",
    "11": "profile pt.md §9: Your Spanish is really good! -> Your Portuguese is really good!",
    "17": "profile pt.md §9: Spanish traps shoes/choose, yet/jet, very/berry, vote/boat replaced in place by head/red, bad/bed, team/teen, cold/code",
    "21": "profile pt.md §9: Falsos cognatos rebuilt; embarrassed, pregnant, career, carpet, constipated, bother replaced in place by push, pull, lunch, novel, exquisite, prejudice"
  },
  "extraLessons": ["verb-prep"],
  "droppedLessons": []
}
```

**Total English-side cost:**
- 2 lesson deviations;
- 5 technical item deviations;
- 5 deck deviations;
- 1 extra lesson.

**Three validator and parity traps for pt writers**
1. **Cue words.** `validate.js` requires every mc `q` and type `hint` to match `labels.cueTest`. Shorthand items in `more/` get " O que vai no espaço?" / " — use estas palavras" appended automatically when they contain no Portuguese. A hint written out in full in `practice.js` must contain an accented letter or a listed word. "pretend · fingir" and «fingir · dormindo» fail; «ela · está fingindo» and «palavras: pretend · asleep» pass (checked against the regex).
2. **Identical cognates.** With `nativeScript: null`, a card meaning or gloss spelled like its English target fails ("differs from English", PIPELINE §6). *banana, hotel, pizza, taxi* and *chocolate* are examples. Write «a banana», «o hotel (hospedagem)», «a pizza», as es did with «el hotel».
3. **Accepted answers are compared.** Parity compares each type item's whole `a` list, `x` and mc `o` with es-en. A Portuguese prompt worded differently must still accept exactly the es variants: do not add or drop variants. If a variant is truly wrong for the Portuguese prompt, add an `items["<id>#<i>"]` deviation with the reason.

**Not added (considered):**
- A pronunciation lesson on word endings. Epenthesis and -ed have the strongest phonetic evidence, but typed practice cannot test pronunciation; they belong in `pron` and `past`.
- An embedded-questions lesson: practitioner evidence only, and Spanish speakers share it. Fold it into `reported`.
- A "there is vs tem" lesson: `it-there` already is that lesson.

## 9. Vocabulary and cultural notes

**Localise everything in lesson bodies, `{{ex:}}` rows, card notes, dialogues and examples. In practice items and checks, change English only where §8 says.**

- Hispanic places in the English side stay: *Lima, Bogotá, Madrid, Mexico City, Santiago, Miami*. Brazilians know them, and changing them costs deviations. Portuguese prompts use Brazilian exonyms: «Mora em Lima», «em Madri», «na Cidade do México».
- *Sofía* in `object-have` P10 stays as spelled; the fill `q` is compared.

**Names** (lesson bodies, examples, dialogues, new targets): *Lucas, Ana, Pedro, Julia, Gabriel, Mariana, Rafael, Beatriz, Bruno, Camila*, mixed with English names (*Emma, Jack*).
- In **English strings**, prefer spellings without diacritics (*Julia*, not *Júlia*). The cue regex treats any accented letter as Portuguese, so an English mc `q` with *Júlia* would get no cue injected.
- *São Paulo* keeps its tilde: write the Portuguese part of any mc `q` or type `hint` that contains it explicitly.

**Places:** São Paulo, Rio de Janeiro, Salvador, Belo Horizonte, Recife, Curitiba, Porto Alegre, Florianópolis, Manaus. Abroad: Orlando, New York, Miami, Lisbon, London, Toronto. Do not centre one Brazilian city.

**Food:** *feijoada, pão de queijo (cheese bread), açaí, brigadeiro, coxinha, churrasco (barbecue), guaraná, coffee*. In English strings, use forms the en-US voice can say: *feijoada*, *acai*, *barbecue*, *cheese bread*. Keep *pão de queijo* in Portuguese text.

**Sports and media:**
- *soccer*, with the note «*football* no inglês britânico».
- Genres, not artists (*samba, sertanejo, a series, a soap opera*). *novela* = *soap opera* is itself a false cognate (*novel* = romance).

**Money:**
- Practice keeps US dollars, as es-en (US settings).
- In bodies and notes, *R$ 50* is read *fifty reais*; *real* is singular, *reais* plural.

**Exams and work:**
- Mention *ENEM* (reading), *TOEFL / IELTS* and job interviews by name in `smalltalk`, `email` and «Trabalho e e-mail» notes where natural.
- Goals in meta.js: «Viajar», «Trabalho», «Amigos», «Séries e filmes».

**Brazilian-neutral vocabulary in meanings and notes:**
- Prefer the word understood everywhere, or give both separated by «/»: *biscoito / bolacha*, *mandioca* (not *aipim / macaxeira* alone), *semáforo* (not *sinal / farol* alone), *tangerina*.
- Avoid words that are offensive or mean something else in Brazil: *bicha* (use *fila*), *rapariga*, *puto*. *propina* means "bribe" in Brazil, not "tuition".

**False cognates for the rebuilt deck and lesson** (grouped). "TM" = in the fetched Toda Matéria list; "D" = in the fetched Descomplica list; "inf." = not in either, from the author's knowledge, flagged for a native check.

| Group | English → real meaning | Portuguese look-alike → English | Source |
|---|---|---|---|
| Verbs | pretend → fingir | pretender → intend, plan | TM, D |
| | push → empurrar | puxar → pull | TM, D |
| | attend → comparecer, participar | atender → answer, serve | TM, D |
| | assist → ajudar | assistir → watch, attend | TM |
| | realize → perceber | realizar → carry out, achieve | TM |
| | intend → pretender | entender → understand | TM |
| | resume → retomar | resumir → summarize | TM |
| | notice → notar | notícia → news | TM |
| | argue → discutir | arguir → question formally | TM |
| Adverbs and adjectives | actually → na verdade | atualmente → currently | TM, D |
| | eventually → finalmente, com o tempo | eventualmente → occasionally | TM |
| | sensible → sensato | sensível → sensitive | TM |
| | exquisite → requintado | esquisito → weird | TM |
| | comprehensive → abrangente | compreensivo → understanding | TM |
| | expert → especialista | esperto → smart | TM |
| People and places | parents → pais | parentes → relatives | TM, D |
| | college → faculdade | colégio → school | TM, D |
| | library → biblioteca | livraria → bookstore | TM |
| | office → escritório | oficial → official, officer | TM |
| Everyday nouns | lunch → almoço | lanche → snack | TM |
| | pasta → massa, macarrão | pasta → folder | TM, D |
| | novel → romance | novela → soap opera | TM |
| | costume → fantasia | costume → habit | TM |
| | exit → saída | êxito → success | TM |
| | prejudice → preconceito | prejuízo → loss, damage | TM |
| | data → dados | data → date | TM |
| | fabric → tecido | fábrica → factory | TM |
| | legend → lenda | legenda → subtitle, caption | TM |
| | lecture → palestra | leitura → reading | TM |
| Partial cognates (Ojo-style notes) | discuss → discutir (talk about) | discutir also = argue | inf. (*argument* → discussão is TM) |
| | support → apoiar | suportar → put up with | inf. |
| | introduce → apresentar (a person) | introduzir → insert | inf. |

**Deck-by-deck notes** (pack order, 0-based; this order is also the deviations key):

| # | es name | **Final pt name** | Verdict | Notes for pt writers |
|---|---|---|---|---|
| 0 | Saludos | **Cumprimentos** | keep | |
| 1 | Presentarse | **Apresentações** | **change 2 targets** | *I'm from Mexico.* → *I'm from Brazil.*; *I live in Lima.* → *I live in São Paulo.* *My name is Ana.* stays (Ana is Brazilian too). Note on *I'm a student.*: «sem "i" na frente». Rekey any DIALOG/EXAMPLES entry for the changed targets (es has none today). |
| 2 | Supervivencia 1 | **Sobrevivência 1** | **change 1 target** | *Do you speak Spanish?* → *Do you speak Portuguese?* |
| 3 | Supervivencia 2 | **Sobrevivência 2** | keep | |
| 4 | Direcciones y transporte | **Direções e transporte** | keep | *ônibus, metrô*. |
| 5 | En el restaurante | **No restaurante** | keep | *cardápio, garçom, conta, gorjeta*. |
| 6 | Cafetería y tienda | **Cafeteria e mercado** | keep | |
| 7 | Compras y pagos | **Compras e pagamentos** | keep | |
| 8 | Números, horas y fechas | **Números, horas e datas** | keep | |
| 9 | Charla casual | **Bate-papo** | keep | *Have you been to Latin America?* stays (Brazil is in Latin America). |
| 10 | Emociones y reacciones | **Emoções e reações** | keep | |
| 11 | Cumplidos y afecto | **Elogios e carinho** | **change 1 target** | *Your Spanish is really good!* → *Your Portuguese is really good!* |
| 12 | Trabajo y correo | **Trabalho e e-mail** | keep | Add job-interview notes. |
| 13 | Teléfono y abreviaturas | **Telefone e abreviações** | keep | *Mr. Garcia* stays (common Portuguese surname). |
| 14 | Viajes (aeropuerto y hotel) | **Viagens (aeroporto e hotel)** | keep | *under Garcia* stays. |
| 15 | Salud y emergencias | **Saúde e emergências** | keep | |
| 16 | Phrasal verbs | **Phrasal verbs** | keep | Notes name the Latinate Portuguese verb (*entrar, continuar, tolerar, retornar*). Also the deck of `verb-prep`. |
| 17 | Trampas de pronunciación | **Armadilhas de pronúncia** | **change 8 targets** | In place: *shoes, choose, yet, jet, very, berry, vote, boat* → *head, red, bad, bed, team, teen, cold, code*. Keep *ship, sheep, school, worked, think, sink, three, tree, this, walk, work, beach, leave, live, banana, hotel, milk, McDonald's*. Notes: *milk* «sem "u" e sem "i" no fim»; *hotel* «o h soa». Meanings must stay unique (*cold* «frio (temperatura)»). |
| 18 | Expresiones idiomáticas | **Expressões idiomáticas** | keep | Portuguese equivalents (§8 idioms). |
| 19 | Cine, series y jerga | **Cinema, séries e gírias** | keep | |
| 20 | Palabras esenciales | **Palavras essenciais** | keep | *It takes 20 minutes* = «Leva 20 minutos». Portuguese *levar* matches *take*, which helps. |
| 21 | Falsos amigos | **Falsos cognatos** | **change 6 targets** | Keep *actually, currently, library, bookstore, attend, assist, realize, sensible, college, exit, success, pretend, eventually, parents, discuss, support, introduce*. Replace in place *embarrassed, pregnant, career, carpet, constipated, bother* with *push, pull, lunch, novel, exquisite, prejudice* (23 cards, as es). Why those six fail: *embaraçado*, *carreira* and *carpete* are near true cognates; *constipado* and *molestar* have split regional senses in Brazil [inf.]. |
| 22 | Make y do | **Make e do** | keep | Note on *make a decision*: «tomar uma decisão; e "fazer uma pergunta" é *ask a question*». |
| 23 | Incontables | **Incontáveis** | keep | *hair* is singular in Portuguese too (*cabelo*), so a softer note. *bread* is a real trap (*dois pães*). |
| 24 | Cognados y acento | **Cognatos e sílaba tônica** | keep (all 14 targets work) | Correspondences hold in Portuguese: *-tion/-ção*, *-ty/-dade*, *-ous/-oso*, *-ly/-mente*, *-ent/-ente*, *ph/f*, *ch/qu* (*química*). Rewrite notes for Brazilian traps: *university* «sem "tchi" no fim»; *different* «sem "dj"»; *comfortable* (Portuguese *confortável*: watch the *m*, a misspelling Cambridge lists as *confortable*); *probably* (*provavelmente*: *b*, not *v*). |

**Groups in meta.js:**
- «Primeiros passos»;
- «Viagem e dia a dia»;
- «Conversa e relacionamentos»;
- «Trabalho»;
- «Como um nativo»;
- «Pontos-chave para brasileiros» (replaces «Claves para hispanohablantes»).

## 10. Interface wording notes

[Curriculum convention.] Partly verified against the Proton pt-BR localisation guide ([Proton](https://localize.proton.me/t/guidance-for-portuguese-brazilian/116)). The Microsoft pt-BR style guide was found but could not be read (binary PDF; §11).

**Buttons and actions:** infinitive. Proton's UI examples are «Abrir», «Fechar», «Salvar como».
- Use: «Verificar», «Continuar», «Começar», «Revisar», «Salvar», «Enviar», «Cancelar», «Voltar», «Fechar», «Tentar de novo».
- No final period on buttons, titles, links or checkboxes (Proton).

**Instructions in content and prompts:** imperative addressed to *você*: «Escolha a resposta certa», «Ordene as palavras», «Complete a lacuna», «Escreva a frase em inglês», «Toque para ouvir».
- Keep one verb per item type.
- Omit «por favor» in instructions (Proton guide, paraphrased).
- Use «!» sparingly (Proton guide, paraphrased).

**Gender-neutral wording** [Proton guide, paraphrased: avoid the masculine singular for a reader of unknown gender, and rephrase]:
- «Boas-vindas!» / «Damos boas-vindas a você», not «Bem-vindo(a)».
- «Tudo pronto!», not «Você está pronto!».
- «Você conseguiu!», «Mandou bem!» (casual toast only).
- «Lição concluída» rather than an adjective agreeing with the user.
- No *x*, *@* or *-e* neutral endings.
- Card meanings for gendered words give both: «cansado / cansada».

**Capitalisation:** sentence case. Weekdays, months and language names are lower case («segunda-feira», «novembro», «inglês») (Proton).

**Counters (plural forms)** [checked locally with `Intl.PluralRules('pt-BR')`, ICU 78.3 / CLDR 48]:
- Categories are `one`, `many` and `other`. **CLDR puts 0 and 1 in `one`** (and 1.5 too). `many` is only for millions.
- Natural Brazilian usage writes «0 dias», not «0 dia» [inference]. So:
  - if the engine picks a form with `Intl.PluralRules`, a zero would read «0 cartão»;
  - write count patterns so that 0 never shows a singular noun: either «Cartões: 0», or a separate zero string.
- Every pattern must read correctly at 1 and at 2 (keys.json "count slot").

| English pattern | one (1) | other (2+, and 0) |
|---|---|---|
| `N cards due` | «1 cartão para revisar» | «N cartões para revisar» |
| `N cards` | «1 cartão» | «N cartões» |
| `N lessons` | «1 lição» | «N lições» |
| `N days` | «1 dia» | «N dias» |
| `N-day streak` | «Sequência de 1 dia» | «Sequência de N dias» |
| `N words` | «1 palavra» | «N palavras» |
| `N questions` / items | «1 questão» | «N questões» |
| `N decks` | «1 baralho» | «N baralhos» |
| `N reviews` | «1 revisão» | «N revisões» |
| `N XP` | «1 XP» | «N XP» |
| `Level N` | «Nível 1» | «Nível N» |
| `N% correct` | «N% de acertos» | (no agreement) |
| `N min` | «1 min» | «N min» |

**Dates, numbers, time** [`Intl` with `pt-BR`, checked locally]:
- **Numbers:** «1.234.567,5»; decimal comma, thousands point (Proton: "0,5", "15.000"; no separator in years: «2026»).
- **Currency:** «R$ 25,00» and «US$ 4,99» (Intl output, with a no-break space). Do not hand-format.
- **Percent:** «85%».
- **Dates:** long «17 de novembro de 2026»; short «17/11/2026»; full «terça-feira, 17 de novembro de 2026»; day-month «17 de nov.»; weekday short «ter.»
  - Proton writes short dates «31/01/22». The 4-digit year from Intl is also correct.
- **Time:** 24-hour, «21:05» (Intl). Proton's «21h25» style is fine in prose but not needed in UI.
- Use the device locale when it is `pt-BR`. Fall back to `pt-BR`, never `pt-PT`.

**Bottom navigation at 390px.** Each of the seven tabs gets about 55px, which fits roughly **8 characters** at 10–11px (es.md §10). Unlike Spanish, every label fits without an exception.

| English | pt-BR label | Chars | Note |
|---|---|---|---|
| Today | Hoje | 4 | |
| Practice | Prática | 7 | glossary noun |
| Review | Revisão | 7 | |
| Lessons | Lições | 6 | |
| Drills | Treino | 6 | the canvas heading and `{n}/{n} · Drills` chip may use «Exercícios» (10), where length is not an issue |
| Progress | Evolução | 8 | «Progresso» is 9, over the cap; «Evolução» is common in Brazilian apps [practitioner opinion] |
| Feedback | Opinião | 7 | page title «Envie sua opinião» |
| (Read, if shown) | Ler | 3 | the key exists in keys.json |

**UI glossary** (use exactly; matches §3):

| English | pt-BR | Note |
|---|---|---|
| lesson | lição | «Lição 5» |
| practice (set) | prática | button «Praticar» |
| review (SRS) | revisão | button «Revisar» |
| deck | baralho | «baralho de cartões» on first use |
| card / flashcard | cartão | |
| streak | sequência | «Sequência de 5 dias» |
| hint | dica | |
| check (3-question quiz) | teste rápido | button «Verificar» |
| correct / incorrect | correto / incorreto | feedback «Correto!» / «Incorreto». For `Not quite`, «Ainda não» is a softer option if the review finds «Incorreto» harsh |
| answer / explanation | resposta / explicação | `why` shown under «Explicação» |
| try again | tentar de novo | |
| multiple choice | múltipla escolha | |
| word tiles | blocos de palavras | |
| gap-fill | complete a lacuna | short label «Lacuna» |
| typed sentence | escreva a frase | |
| drills | treino | |
| level / XP | nível / XP | |
| pronunciation toggle | Mostrar pronúncia (AFI) | replaces "romanization"; a settings row, not a button |
| progress | evolução | |
| feedback | opinião | |
| settings / sign in / sync | configurações / entrar / sincronizar | «Entrar e sincronizar» for `Sign in to sync` |
| quiz | teste | |
| level titles | Iniciante · Estudante · Tagarela · Viajante · Da casa · Profissional · Lenda | gender-neutral; «Da casa» (Local) and «Tagarela» (Talker) need a native check |

**Language names:** `Intl.DisplayNames('pt-BR')` returns «inglês», «português» and «português (Brasil)» (checked locally). Set `name.pt` to «inglês». `nativeNameEn` is "Brazilian Portuguese".

## 11. Gaps and unverified claims

**Sources that were blocked or unreadable** (none is listed in Sources):
- **Microsoft pt-BR localisation style guide:** binary PDF, not readable.
- **Google Sites pt-BR style guide (inclusivity page):** redirected to a login.
- **llexi, "Common English errors by Portuguese speakers":** not on this session's allowlist. Every llexi claim here is taken from `docs/profiles/OTHERS.md` and marked "via OTHERS.md". llexi does not say whether it means Brazilian or European Portuguese.
- **Rauber 2002 MA thesis (s-clusters, Portuguese and Spanish speakers):** not allowlisted. Only the 2004 article abstract was read.
- **Gradus 2018** (perception of /h/ by Brazilian learners): robots-blocked.
- **UFSC thesis on word-final /l/:** client error.
- **oasisbr record on pronunciation in dictionaries:** bot check.
- **Swan & Smith, *Learner English*, Portuguese chapter:** never opened.

**Read only in part:**
- Delatorre 2008, Rauber et al. 2005, Rauber & Baptista 2004 and the UnB squib: abstract pages only, with no rates.
- Silveira 2004: results chapter not reached. The Baptista & Silva Filho 1997 hierarchy is second-hand.
- Rocha 2022: no figures shown.
- Barcelos: year not given.

**COBRA-7 (Dantas 2012) caveats:**
- One franchise school network in São Paulo state.
- The 22% preposition figure covers all prepositions and particles with no breakdown, so `verb-prep`'s evidence is indirect.
- Corrections of learner sentences are this profile's (from the fetch summary), not the author's.
- Level tables use Basic 1/2, not CEFR.
- The thesis has an internal inconsistency (inversion given as 724 and as 140; 140 fits the per-mille figure).

**Quotations.** Text in straight quotes from Dantas, John & Cardoso, Silva, Barcelos, Toda Matéria, Descomplica and the Proton "você" rule is verbatim as returned by the fetch tool. Other source statements are paraphrased.

**Small samples:**
- Silva 1998 (3 speakers, 12 listeners; "not at all conclusive").
- John & Cardoso 2017 (nonwords, one session, Belém).
- Barcelos (one Fortaleza class).

**No fetched source** for:
- double negatives, countability, *estar com fome* → *with*, *seu/sua* → his/her;
- embedded questions (practitioner only), phrasal-verb avoidance;
- aspiration and t/d palatalisation beyond Pronunciation Studio and Silva's transcription;
- learner data on the present perfect (*tenho feito*);
- the folk respellings «tchênks», «ai lóvi iú».

**Author's own knowledge of Portuguese, flagged for a native check:**
- Brazil uses the short scale (*bilhão* = 10⁹).
- Which es false friends fail for Brazilians (*embaraçado, carpete, carreira, constipado, molestar*).
- The partial cognates *discuss/support/introduce*.
- The new minimal pairs (*cold/code, team/teen, head/red, bad/bed*) and the r/h distractor *rot*.
- *você* + third-person verb as a source of -s confusion.
- *se chover* = *if it rains*.
- The pt-PT avoidance list, the offensive-word list, «Evolução», «Treino», «Tagarela», «Da casa».
- «baralho» as Anki's Brazilian term.

**Pronunciation aid:**
- No study compares IPA, respelling and no aid for Brazilians.
- Barcelos's "50% desconhecem a transcrição fonética" is evidence that many learners will need the one-screen key.
- The OALD notation is inherited from zh.md "as remembered" (OALD not fetched).
- If first-attempt logs or reviewers show learners ignore the IPA, the fallback is `pron: "optional"`. Do not switch to a respelling, for the reasons in §6.

**EF EPI:**
- Only Brazil's national and skill figures come from EF directly. The band ("low") comes from a news report.
- City values were partly truncated in the fetch.
- OTHERS.md's 466 / ≈81 is superseded.

**Not researched:** the share of adults in private language schools; TOEFL/IELTS uptake; travel destinations by volume; a Portuguese-specific cognate count; app or self-study evidence for Brazilians.

**Engine and pipeline points:**
- CLDR `one` for 0 (§10).
- es `cueTest` gaps that cause the five technical deviations (§8).
- `lessonOrder.after` relies on JSON key order: `verb-prep` follows `make-do`, which is itself inserted first.

## Sources

Web pages fetched and used:
- [Dantas, W. M. (2012). Erros de escrita em inglês por brasileiros: identificação, classificação e variação entre níveis. MA thesis, PUC-SP (COBRA-7)](https://tede2.pucsp.br/bitstream/handle/13575/1/Wendel%20Mendes%20Dantas.pdf)
- [John, P. & Cardoso, W. (2017). Ilha do Desterro 70(3): i-epenthesis by Brazilian learners](https://scielo.br/j/ides/a/84qPK4M6Cx7fjJvwFsyBsNm/?lang=en)
- [Silveira, R. (2004). The Influence of Pronunciation Instruction on the Perception and Production of English Word-Final Consonants. PhD thesis, UFSC](https://fonapli.paginas.ufsc.br/files/2012/06/tese-Rosane.pdf)
- [Delatorre, F. (2008). The influence of sonority on the production of words ending in -ed by Brazilian EFL learners. Ilha do Desterro 55 (abstract page)](https://periodicos.ufsc.br/index.php/desterro/article/view/2175-8026.2008n55p83)
- [Silva, R. S. da (1998). A small-scale investigation into the intelligibility of the pronunciation of Brazilian intermediate students. Speak Out! 23 (via Hancock McDonald)](https://www.hancockmcdonald.com/sites/hancockmcdonald.com/files/file-downloads/Ricardo%20Sili%20Intelligibility%20of%20Brazilians.pdf)
- [Rauber, A. S., Escudero, P., Bion, R. A. H. & Baptista, B. O. (2005). The interrelation between the perception and production of English vowels by native speakers of Brazilian Portuguese. Interspeech 2005 (abstract page)](https://www.isca-archive.org/interspeech_2005/rauber05_interspeech.html)
- [Rauber, A. S. & Baptista, B. O. (2004). The production of English initial /s/ clusters by Portuguese and Spanish EFL speakers. Revista de Estudos da Linguagem 12(2) (abstract page)](https://periodicos.ufmg.br/index.php/relin/article/view/28812)
- [Rocha, J. V. P. (2022). Meanings of the preposition "of" in the oral interlanguage of A2 and B2 Brazilian learners. Revista X 17(3)](https://revistas.ufpr.br/revistax/article/view/85093)
- [Caderno de Squibs (2022). The possible influence of Brazilian Portuguese (L1) on the realization of null definite subjects in English (L2), UnB](https://www.periodicos.unb.br/index.php/cs/article/view/38281)
- [Buthers, C. & Duarte, F. B. PB: língua de sujeito nulo ou obrigatório? (UFMG)](https://www.letras.ufmg.br/fbonfim/pdf/pb_lingua_sujeito_nulo_ou_obrigatorio.pdf)
- [Barcelos, V. R. O uso didático do dicionário escolar bilíngue nas aulas de inglês (Percursos, UFES)](https://periodicos.ufes.br/percursos/article/download/7437/6202/21516)
- [Pronunciation Studio: 10 English Pronunciation Errors by Portuguese Speakers](https://pronunciationstudio.com/portuguese-speakers-english-pronunciation-errors/)
- [Toda Matéria: Pronúncia em inglês, guia dos sons mais difíceis para brasileiros](https://www.todamateria.com.br/pronuncia-em-ingles-guia-dos-sons-mais-dificeis-para-brasileiros/)
- [Toda Matéria: Falsos cognatos em inglês (false friends)](https://www.todamateria.com.br/falsos-cognatos-no-ingles-false-friends/)
- [Toda Matéria: Simple Present](https://www.todamateria.com.br/simple-present/)
- [Descomplica: False friends no ENEM, oito palavras perigosas](https://descomplica.com.br/blog/false-friends-no-enem-oito-palavras-perigosas-2/)
- [Descomplica: Inglês ou espanhol no ENEM](https://descomplica.com.br/blog/ingles-ou-espanhol-no-enem/)
- [London School: From Brazinglish to English, part 2](https://www.londonschool.com/blog/from-brazinglish-to-english-part-2)
- [Cambridge University Press, Choose in Use: Common English errors, Portuguese](https://www.cambridge.org/elt/blog/wp-content/uploads/2020/03/Portuguese.pdf)
- [MosaLingua: Transcrição fonética](https://www.mosalingua.com/pt/transcricao-fonetica/)
- [EF EPI 2025 fact sheet: Brazil](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-brazil-english.pdf)
- [Gazeta do Povo (2026). Inglês deixa de ser diferencial e se torna requisito de contratação no Brasil em 2026](https://gazetadopovo.com.br/vozes/parana-sa/ingles-deixa-de-ser-diferencial-e-se-torna-requisito-de-contratacao-no-brasil-em-2026)
- [Proton localization community: Guidance for Portuguese (Brazilian)](https://localize.proton.me/t/guidance-for-portuguese-brazilian/116)

Local project files read:
- `/home/claude/docs/profiles/es.md` (in full), `id.md` (outline and §10 only), `zh.md` (§6), `OTHERS.md` (Portuguese section);
- `/home/claude/reports/Grammar learning order research.md` (summary, the order-evidence section and the recommended English order, which places verb and adjective + preposition chunks at A2);
- `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`;
- `/home/claude/tools/content/es/` (`profile.json`, `PRON-RULES.md`, `REVIEW.md`, `DECKNAMES.md`, `deviations.json`);
- `/home/claude/tools/content/zh/` (`PRON-RULES.md`, `pron_check.js`, `profile.json`);
- `tools/content/lib.js`, `parity.js`, `validate.js`, `more/_dsl.js`.

Local checks run:
- the es-en English side (the generated `packs/course-es-en.js`) scanned for Spanish text read as English by parity;
- zh-en IPA reuse counts;
- `pronPattern` and `cueTest` tested against 3,045 English strings and 36 worked examples;
- `Intl` pt-BR plural, date and number output (Node, ICU 78.3 / CLDR 48).
