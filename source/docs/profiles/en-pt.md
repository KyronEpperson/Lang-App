# English speakers learning Brazilian Portuguese: course profile

Course `en-pt`: Brazilian Portuguese for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Brazilian Portuguese. Machine-readable twin: `tools/target/pt/profile.json`, generated from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/pt/respell.js` (§6).

(`docs/profiles/pt.md` and `docs/profiles/pt.profile.json` belong to the reverse course, English for Brazilian Portuguese speakers. This profile does not use or change them.)

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset opened for this profile. The study is named and its sample given. **(abstract only)** and **(second-hand)** say how much of it was read.
- **[curriculum convention]**: what syllabuses, textbooks and university courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[tertiary]**: an encyclopedia article (here, a Wikipedia mirror).
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Portuguese**. Every claim of that kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant and voice:** Brazilian Portuguese (the roadmap's choice), `pt-BR` voice, prices in reais, scenes in Brazil and in US Brazilian communities (Boston, Miami, Orlando). European forms appear only as recognition notes.
- **Register:** *você* is the "you" of every lesson and dialogue. *O senhor / a senhora* comes in lesson 2 for older people and formal service; both take the *ele* form. *Tu* is named for recognition only. *A gente* is taught beside *nós* from `ser` on, and both are accepted for "we".
- **Biggest traps (§4):** gender and number agreement; contractions (*no, na, do, da*); verb endings, including *você* and *a gente* taking the *ele* form; *ser / estar / ficar*; *ter* and *estar com* calques; fixed prepositions (*gostar de*); false friends; nasal vowels and the Brazilian *t, d, l, r, e*; and, for the many learners who know Spanish, Spanish transfer.
- **Standing rule (§7):** every practice set re-tests **agreement**: gender and number on articles, contractions, possessives and adjectives, and the verb ending with its subject. Fixed English keywords, tested against 40 sample `why` lines.
- **Pronunciation aid (§6):** a generated English-letter respelling with stress in CAPITALS: `bohng JEE-uh`, `ah see-DAH-jee`, `brah-ZEEW`, `KAH-hoo`. `tools/target/pt/respell.js` builds it. Stress and the Brazilian sound rules come from the spelling and are reliable; the open or closed quality of an unaccented stressed *e / o* comes from a word list and is flagged when guessed.
- **Lessons (§8):** 25. All 22 roadmap items are kept. `articles` moves before `ser`, `adjectives` moves into stage 1, and `contractions` moves up to follow `estar`. Three lessons are added: `ser-estar`, `prepositions` and `object-pronouns`.
- **Decks (§9):** 18 decks in 5 groups, including "Traps for English speakers" and "Spoken Brazilian Portuguese" (*tô, tá, pra, a gente, né, eu vi ele*).
- **Typing (§10):** a missing accent is "almost". Pairs where the accent changes the word are strict: *e / é, esta / está, avô / avó, por / pôr, pais / país, nos / nós, da / dá, se / sé, mas / más, tem / têm, a / à, pode / pôde*. A missing tilde or cedilla elsewhere is also "almost".

## 2. Variant, register and voice

### 2.1 Variant: Brazilian Portuguese

- The roadmap names Brazilian Portuguese, based on the University of São Paulo A1 programme for foreigners (`packs/roadmaps.js`, entry `pt`), and the build plan keeps it.
- **Voice:** `ttsLang: "pt-BR"`. Spelling (the current agreement spelling: *ideia, voo, cinquenta*, with no diaeresis), vocabulary and the `pron` aid follow Brazilian usage.
- [inference] A US learner's Portuguese contacts are overwhelmingly Brazilian: the Brazilian community in Massachusetts, Florida, New Jersey and New York (§5), Brazilian media and music, and travel to Brazil.

**Vocabulary rule** [inference]: use the everyday Brazilian word, and put the European word in the card `note` only where a learner is likely to meet it.

| Use | Note on the card | Avoid as the taught form |
|---|---|---|
| o ônibus (bus) | Portugal: o autocarro | autocarro |
| o trem (train) | Portugal: o comboio | comboio |
| o celular | Portugal: o telemóvel | telemóvel |
| o banheiro | Portugal: a casa de banho | casa de banho |
| o café da manhã | Portugal: o pequeno-almoço | pequeno-almoço |
| o suco | Portugal: o sumo | sumo |
| o sorvete | Portugal: o gelado | gelado |
| a geladeira | Portugal: o frigorífico | frigorífico |
| o cardápio | also: o menu; Portugal: a ementa | ementa |
| a fila (line, queue) | never use the Portugal word *bicha*, which is an insult in Brazil | bicha |
| pegar (o ônibus) | Portugal: apanhar | apanhar |
| legal (cool, nice) | informal | fixe |
| a passagem (ticket for a trip) | also: o bilhete (Portugal's usual word) | |

**Pronunciation follows the voice** (§6 encodes all of these) [tertiary: [Portuguese phonology, Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Portuguese_phonology)]:
- *t* and *d* before an *i* sound are said "ch" and "j" in most Brazilian dialects (*tia, dia, noite, cidade*).
- Unstressed final *e* and *o* rise to *i* and *u* (*leite* "LAY-chee", *obrigado* "-doo"); final *a* is reduced.
- *l* at the end of a syllable is said as *w* in most dialects (*Brasil* "brah-ZEEW", *mal* sounds like *mau*).
- *r* at the start of a word and *rr* are a breathy *h*-like sound in most dialects. At the end of a syllable *r* varies (a tap in São Paulo city and the South, *h* in Rio, the Northeast and Minas, an English-like *r* in the interior), and a final infinitive *r* is often dropped. The aid writes `r` there (§6).
- *s* at the end of a syllable is "sh" in Rio (*pasta* "PAHSH-tuh"). The aid writes `s`, the more widespread form.

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. The changes in §8 come from the learners (§4, §5). European forms are named once each, for recognition, never drilled:
- *tu* with its own verb form (*tu falas*), in `present`;
- *estar a* + infinitive (*estou a falar*), in `progressive`;
- the pronoun after the verb (*chamo-me, dá-me*), in `reflexive` and `requests`;
- the vocabulary in the table above, in card notes.

### 2.3 Forms of "you": who is addressed, and when

**Taught first: *você*.** It carries every conjugation from `ser` on, every dialogue between friends, classmates, coworkers and family, and what the learner says to a shop assistant or a stranger of their own age.
- Its verb is the *ele / ela* form (*você fala*), so it is an agreement point under the standing rule (§7).
- [research-backed] In Northeastern capitals *você* dominates in most cities: Salvador, Aracaju, João Pessoa, Maceió and Teresina show "very little" *tu*; Natal and Recife about 14–15% *tu* (without *tu* verb agreement); Fortaleza about 51% *você* to 45% *tu* ([Scherre, Andrade & Catão 2021, *Revista de Letras* 40, UFC](https://repositorio.ufc.br/bitstream/riufc/65548/1/2021_art_mmpscherrecqandrade.pdf); a review of earlier studies, with figures quoted from them).

**O senhor / a senhora:**
- Introduced in `greetings` for older people, a friend's parents, officials and formal service (*O senhor precisa de ajuda?*, *A senhora aceita um café?*). The verb is the *ele* form.
- [inference] Service staff in Brazil commonly address customers as *você*, or with no pronoun (*Aceita cartão?*); *o senhor / a senhora* marks age or formality more than the shop counter. So the course does not make *o senhor* the default for every stranger, as the Spanish course does with *usted*.
- Used actively in `requests` and in the Health and Travel decks; prompts that need it say "(to an older man)" or "(to an older woman)".

***Tu*:** recognition only.
- One note in `greetings` and one in `present`: "In Rio, the South and parts of the North and Northeast you will hear *tu*, usually with the *você* verb form (*tu vai*, *tu quer*); in Portugal *tu* has its own form (*tu vais*)."
- [research-backed] São Luís (Maranhão) is the strongest *tu* city in the review above: 71% *tu* without agreement and 12% with agreement (Alves 2015, as quoted by Scherre et al. 2021). Fortaleza's *tu* takes *tu* agreement in about 0.4% of cases in one dataset (same source).
- Never accepted in a typed answer unless a prompt asks for it (none does at A1).

***Vocês*:** the only plural "you", from `ser` on; its verb is the *eles* form.

***A gente* and *nós*:**
- [research-backed, second-hand] *A gente* is the majority subject form for "we" in several spoken samples: about 58% of subject uses in Porto Alegre (Zilles 2005) and about 78% in Borges (2004), but 39% in Muniz (2008), all as quoted in [Pacheco, Carvalho & Scherre 2024, *Languages* 9(3):98](https://mdpi.com/2226-471X/9/3/98). Their own border sample has 59% *a gente* in subject position (317 of 541).
- Decision: `ser` introduces both, and `present` teaches *a gente* + the *ele* form beside *nós* + *-mos*. A typed answer to an English "we" accepts *nós* + *-mos*, the bare *-mos* form, and *a gente* + *ele* form. A prompt that tests one says "(use a gente)" or "(use nós)".
- *A gente falamos* is heard in some vernacular speech, but it is never accepted [inference].

**Subject pronouns.** [inference] Brazilian Portuguese drops subject pronouns less than Spanish does: *eu* and *nós* can be left out, while *você, ele, ela* are usually said, because the shared verb form would otherwise be ambiguous. Accepted answers therefore:
- list the versions with and without *eu* and *nós*;
- for "you" prompts, list *Você fala…* and the bare *Fala…* (the bare form is a normal question or request in speech);
- for "he / she / they" prompts, require the pronoun or a name.

**How examples address people.** Friends, family, coworkers and shop staff: *você*. Older strangers, a friend's grandparents, a doctor or an official in a formal scene: *o senhor / a senhora*. Card notes say which form a phrase uses when it matters ("you to an older man: o senhor"). English prompts never say "(formal)" unless the item tests *o senhor / a senhora*.

### 2.4 Voice of the English text

- Plain, friendly US English with US spelling (*color, favorite*). A `why` is one sentence.
- Portuguese inside English text: in lesson bodies, put Portuguese in `<b>`. In plain-text fields (`why`, `hint`, card notes), write Portuguese bare. Never add English plural or possessive endings to Portuguese words: write "the verb *estar*", not "estar's forms".
- Sample voice lines:
  1. "Portuguese nouns have gender. *Casa* is feminine, so it's *a casa bonita*, not *a casa bonito*."
  2. "*Em* and *o* always join: *no Brasil*, never *em o Brasil*."
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

[curriculum convention] These are the names used in US first-year Portuguese courses built on *Ponto de Encontro*: the MIT OCW calendar uses "contractions of prepositions with articles", "interrogative pronouns", "stem-changing verbs", "reflexive verbs and pronouns" and "direct object pronouns" ([MIT OCW 21G.801](https://ocw.mit.edu/courses/21g-801-portuguese-i-fall-2011/pages/assignments)); the UCSB schedule uses *verbos com mudança na raiz*, "present progressive", "expressions with *ter, estar com* and *ficar com*", *saber* and *conhecer*, and *pretérito* ([UCSB Portuguese 1](https://www.spanport.ucsb.edu/sites/default/files/sitefiles/undergrad/languageprogram/courses/Winter20/Port%202%20W20.pdf)).

Use each term exactly and always the same way. Where a Portuguese name is the usual one, keep it in Portuguese.

| Term to use | Do not use | Note |
|---|---|---|
| noun, verb, adjective, adverb, preposition | | |
| subject | | who does the verb |
| subject pronoun (eu, você, ele, ela, a gente, nós, vocês, eles, elas) | personal pronoun | |
| gender: masculine / feminine | male / female (for words) | **standing-rule keyword** |
| number: singular / plural | | "singular", "plural noun / adjective / article / form / verb" are **keywords** |
| agreement; "X agrees with Y" | concord, matching | **standing-rule keyword** (§7) |
| definite article (o, a, os, as) | | "definite article" at first mention, then "article" |
| indefinite article (um, uma, uns, umas) | | |
| contraction (no, na, do, da, num, pelo, à, dele, nesse, daqui) | combined form | **keyword**; only for a preposition joined to an article, pronoun or adverb. Never call *tô, tá, pra, cê* contractions: they are **short forms** (§7). |
| short form (tô, tá, pra, cê, né) | slang, contraction | spoken forms; recognition |
| infinitive (falar) | base form, dictionary form | |
| stem (fal-) | root | |
| ending (-o, -a, -amos, -am) | suffix | write "verb ending" when the point is person (§7) |
| conjugate / conjugation | | |
| the eu form, the você form, the ele form (= ela, você, a gente), the nós form, the eles form (= elas, vocês) | 1st person singular etc. | person names stay Portuguese; **keywords**. Say "the ele form" when the point is that *você* or *a gente* shares it. |
| regular verb / irregular verb | | |
| -ar verb, -er verb, -ir verb | first conjugation | |
| stem-changing verb (durmo / dorme, prefiro / prefere) | radical-changing | mentioned in `irregular` only |
| reflexive verb; reflexive pronoun (me, se, nos) | pronominal verb | |
| direct object pronoun (me, te, o, a, ele, ela) | accusative | `object-pronouns` |
| indirect object pronoun (me, te, lhe) | dative | `object-pronouns` |
| possessive (meu, minha, seu, dele) | possessive adjective | |
| demonstrative (este, esse, aquele, isso) | | |
| present tense | simple present (for Portuguese) | |
| pretérito perfeito (falei, comi) | preterite, past simple | always the Portuguese name, glossed "the past tense for finished actions" at first use |
| ir + infinitive | periphrastic future | |
| estar + -ndo (the -ndo form) | gerund, present participle | "the -ndo form" in bodies; "gerund" once as a gloss |
| ser, estar, ficar, ter, haver | "to be (permanent)" | never define ser / estar as permanent vs temporary (§4.4) |
| estar com + noun (estar com fome) | | |
| question word (o que, onde…) | interrogative | |
| accent mark: acute (á é í ó ú), circumflex (â ê ô), tilde (ã õ), grave (à) | stress mark | the cedilla (ç) is "the cedilla", not an accent |
| nasal vowel | | |
| stressed syllable | tonic syllable | |
| open / closed vowel (é / ê, ó / ô) | | "open e as in *bet*, closed e as in *bait* without the y" |
| false friend | false cognate | "false cognate" once, as a gloss |
| cognate | | |
| calque ("word-for-word copy from English") | | gloss it at first use |
| European Portuguese | Portugal Portuguese, continental | "In Portugal:" starts every such note |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items that recur in nearly every sentence and can be checked in typed practice come first, then lexical and lesson-local traps, then pronunciation (which typing cannot check).
2. First-hand learner data for English speakers of Portuguese was very thin in what could be opened (§11). One production study with English-L1 learners of Portuguese was read (Tasseva-Kurktchieva & Fahey 2025, item 1); everything else is teaching practice or a description of Brazilian Portuguese.

1. **Gender and number agreement** (articles, adjectives, possessives, *um / uma*, *dois / duas*, *obrigado / obrigada*)
   - Wrong → right: *a casa bonito* → *a casa bonita*; *os sapato preto* → *os sapatos pretos*; *a problema* → *o problema*; *minha pai* → *meu pai*; *dois horas* → *duas horas*; a woman saying *obrigado* → *obrigada*.
   - Why: English marks gender only on *he / she* and number only on the noun. Portuguese marks both on every word in the noun phrase, and English speakers default to the masculine.
   - [research-backed] In [Tasseva-Kurktchieva & Fahey 2025, *Applied Psycholinguistics* 46, e11](https://www.cambridge.org/core/product/CD839F7D60A13EB87B7F656306519985/core-reader), 25 university learners enrolled in Portuguese courses, with English as L1 **and Spanish as L2** (so L3 Portuguese) judged gender agreement at about 81.5% (feminine items) and 65.5% (masculine items), but produced it correctly only about 34% and 25.5% of the time in an elicited production task. Gender predicted accuracy; number did not.
   - [research-backed, indirect] For Spanish as the target, 24 American English learners misassigned feminine nouns to the masculine far more than Brazilian learners did, and made 39 determiner and 18 adjective agreement errors against 7 and 4 for the Brazilians ([*Hispanic Studies Review*, "What can nonce words tell us about the acquisition of nominal gender agreement in SLA"](https://hispanicstudiesreview.cofc.edu/article/91394)). The target is Spanish, not Portuguese; it is cited only for the English-speaker masculine default.
   - [practitioner opinion] "Learn nouns with their article and gender" ([The Brazilian Ways, 15 common mistakes, #7](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)).
   - Design consequence: the standing rule (§7). Cards show nouns with their article (*a chave*, never *chave*). The misleading endings (*o dia, o mapa, o problema, o sistema, a mão, a foto, a tribo*) get explicit cards and items.

2. **Contractions not made, or made with the wrong gender**
   - Wrong → right: *em o Brasil* → *no Brasil*; *de a Ana* → *da Ana*; *Gosto de o Rio* → *Gosto do Rio*; *perto de a praia* → *perto da praia*; *em a casa* → *na casa*; *Eu gosto de isto* → *Eu gosto disto*.
   - Why: English has no obligatory preposition + article fusion. In Portuguese *em, de, a, por* + article always fuse, and the article inside the fused form still agrees with the noun.
   - [practitioner opinion] "Keeping words separate that Portuguese contracts: *de o Brasil, em a casa*" ([The Brazilian Ways, #8](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)); *de + isto* → *disto* ([Elon, calque errors, #12](https://elon.io/grammar/portuguese-brazil/errors/calque-errors)).
   - [curriculum convention] The MIT first-year calendar teaches contractions in the same session as *estar*, before adjectives and possessives ([MIT OCW 21G.801](https://ocw.mit.edu/courses/21g-801-portuguese-i-fall-2011/pages/assignments), session 10).
   - Design consequence: `contractions` moves up to follow `estar` (§8), and contractions join the standing rule, because they are present in almost every sentence about place, origin and possession (§7).

3. **Verb endings that must match the subject; *você* and *a gente* take the *ele* form**
   - Wrong → right: *Ela falar inglês* → *Ela fala inglês*; *Nós mora em Miami* → *Nós moramos em Miami*; *Você falas…* → *Você fala…*; *A gente vamos* → *A gente vai*; *Vocês fala* → *Vocês falam*.
   - Why: English verbs barely change. English speakers leave the infinitive, use one form for everyone, or give *você* a "second person" ending because it means "you".
   - [practitioner opinion] Conjugation across subjects is named as a main difficulty ([Caminhos Language Centers, 9 mistakes, #5](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/)); no learner count was opened.
   - [inference] Ranked third because it occurs in every sentence from `ser` on and is fully testable in typing. It joins agreement in the standing rule (§7).

4. ***Ser*, *estar* and *ficar***
   - Wrong → right: *Sou cansado* → *Estou cansado*; *Onde é o Pedro?* → *Onde está o Pedro?*; and the reverse: *A festa está na minha casa* → *A festa é na minha casa* (events take *ser*).
   - Brazilian twist: for where buildings and fixed places are, Brazilians say *Onde fica o banco?* (*Onde é…?* is also heard); *ficar* also means "become" (*Fiquei nervoso*).
   - [practitioner opinion] "Treating *ser* = permanent and *estar* = temporary as a rule" is itself listed as a mistake, with the event and location counterexamples above ([The Brazilian Ways, #3](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)). Caminhos teaches the permanent / temporary rule ([#4](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/)); this profile follows The Brazilian Ways and never gives that rule.
   - Design consequence: `estar` (location and current state, with *ficar* for places) comes before the contrast; the contrast gets its own added lesson, `ser-estar` (§8).

5. **Calques with *ser*, *ter* and *estar com***
   - Wrong → right: *Eu sou vinte anos* → *Eu tenho vinte anos*; *Eu sou com fome* → *Eu estou com fome*; *Estou bom* (answering "how are you?") → *Estou bem*; *Vou pegar um banho* → *Vou tomar banho*; *Preciso fazer uma decisão* → *Preciso tomar uma decisão*; *Tenha um bom tempo* → *Divirta-se*.
   - [practitioner opinion] All six from [Elon, calque errors](https://elon.io/grammar/portuguese-brazil/errors/calque-errors); the age and hunger pair also in [The Brazilian Ways, #1](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/).
   - *ter fome* and *estar com fome* both exist ([Mango Languages, expressions with *estar com* or *ter*](https://www.mangolanguages.com/resources/learn/grammar/brazilian-portuguese/how-to-use-the-verb-ter-in-brazilian-portuguese/study-resource-expressions-with-estar-com-or-ter)); [inference] *estar com fome* is the everyday Brazilian "I'm hungry", so it is the taught form and *tenho fome* is accepted.

6. **Fixed prepositions translated from English**
   - Wrong → right: *Eu gosto café* → *Eu gosto de café*; *Preciso ajuda* → *Preciso de ajuda*; *Penso sobre você* → *Penso em você*; *em carro* → *de carro*; *Obrigado para tudo* → *Obrigado por tudo*.
   - [practitioner opinion] *Gostar português* → *Gosto de música brasileira* ([The Brazilian Ways, #6](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)); prepositions translated directly ([Caminhos, #6](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/)).
   - Design consequence: `gostar` is about *gostar de* and its contractions; the added `prepositions` lesson covers *precisar de, pensar em, de ônibus, para / por* as a closed set.

7. **False friends**
   - Wrong → right: *meus parentes* meant as "my parents" → *meus pais*; *puxar* read as "push" → *empurrar*; *pretender* for "pretend" → *fingir*; *livraria* for "library" → *biblioteca*; *fábrica* for "fabric" → *tecido*; *colégio* for "college" → *faculdade*; *assistir* for "assist" → *ajudar* (*assistir* = watch); *notícia* for "notice" → *aviso*; *gripe* for "gripe" (it means flu); *Estou excitado* for "I'm excited" → *Estou animado* (*excitado* can be sexual); *costume* for a Halloween costume → *fantasia* (*costume* = habit).
   - [practitioner opinion] From [Living Language](https://www.livinglanguage.com/blog/2014/11/15/english-and-portuguese-false-friends) (21 pairs), [Speaking Brazilian](https://www.speakingbrazilian.com/dont-make-these-mistakes-false-friends-portuguese-english/) (10), [Caminhos, #1](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/) and [The Brazilian Ways, #2](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/). No frequency or error data.
   - Design consequence: the "Traps for English speakers" deck.

8. **The English present perfect copied into Portuguese**
   - Wrong → right: *Tenho visto esse filme* (meant as "I've seen this movie") → *Já vi esse filme*; *Você tem estado no Brasil?* → *Você já foi ao Brasil?*
   - Why: *ter* + participle exists but means a repeated action up to now ("I have been seeing"). Brazilian Portuguese uses the *pretérito perfeito*, often with *já*, for "have done".
   - [practitioner opinion] [The Brazilian Ways, #4](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/).

9. **Nasal vowels**
   - Wrong → right: *pão* said like *pau* (bread → stick); *não* said "now"; *mãe* said "my"; *bom* with an English *m* closing the lips; *sim* said like English "seem".
   - [practitioner opinion] *pão* pronounced as *pau* ([The Brazilian Ways, #11](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)); *ã* and *õ* named as difficult ([Caminhos, #2](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/)).
   - [tertiary] Brazilian Portuguese is "overall more nasal than European Portuguese"; *-ão / -am* [ɐ̃w̃], *-ãe* [ɐ̃j̃], *-õe* [õj̃], final *-em* [ẽj̃] ([Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Portuguese_phonology)).
   - No first-hand study of English speakers' nasal vowels could be opened (§11).

10. **The Brazilian *t, d, e, o, l, r*** (read with English letter values)
    - Wrong → right: *cidade* said "see-DAH-day" → "see-DAH-jee"; *noite* "NOY-tay" → "NOY-chee"; *Brasil* with an English *l* → "brah-ZEEW"; *Rio* with an English *r* → "HEE-oo"; *carro* and *caro* said alike; *gente* with a hard *g*; *homem* with a sounded *h*.
    - [practitioner opinion] The *Tá falado* course notes that English speakers assume "t" and "d" always sound the same; *tinha* and *disse* are always palatalized, *tente* and *desde* only in the final *te / de* ([Kelm, *Tá falado* lesson 11, UT Austin](https://coerll.utexas.edu/brazilpod/tafalado/pdf/tafalado_11.pdf)). Hard *g* in *gente* and sounded *h* in *homem*; *carro* vs *caro* ([The Brazilian Ways, #10](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)).
    - [tertiary] The sound rules themselves: §2.1.
    - Design consequence: `sounds` and the aid (§6).

11. **Open vs closed *e* and *o***
    - Wrong → right: *avó* (grandmother, open) and *avô* (grandfather, closed) said alike; *ela* said with a closed *e*; *pode* (can, open) and *pôde* (could, closed) merged.
    - [tertiary] "Close-mid vowels and open-mid vowels contrast only when they are stressed" ([Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Portuguese_phonology)).
    - Design consequence: the aid writes the difference (`eh / ay`, `aw / oh`), and *avô / avó* is a strict typing pair (§10).

12. **Object pronouns: English order, and the Brazilian spoken system**
    - Wrong → right: *Você ajuda me?* → *Você me ajuda?*; *Eu amo te* → *Eu te amo*; *Eu vi o* (meant "I saw him") → *Eu vi ele* (speech) or *Eu o vi* (writing).
    - [practitioner opinion] *Me ajuda?* is "ordinary spoken Brazilian", and formal writing prefers *eu o vi* over *eu vi ele* ([The Brazilian Ways, #13](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)).
    - Design consequence: added lesson `object-pronouns` (§8). Typed answers accept *Eu vi ele* and *Eu o vi*.

13. **Spanish transfer** (for the large share of learners who know Spanish, §5)
    - Wrong → right: *Vou a viajar* → *Vou viajar*; *Me gusta café* → *Eu gosto de café*; *muy bom* → *muito bom*; *en casa* → *em casa*; *y* → *e*; *Tengo 20 años* → *Tenho 20 anos*; *la casa* → *a casa*; *el carro* → *o carro*; Spanish *-ción* → *-ção*.
    - [research-backed] The L3 learners in Tasseva-Kurktchieva & Fahey 2025 (item 1) transferred some features from Spanish (gender) but not others (number), and facilitative transfer appeared only above a threshold of Spanish proficiency.
    - [research-backed, faculty estimate] Instructors estimated that 45% of their Portuguese students were Spanish speakers (native or second-language) in Milleret's 2010 survey of about 100 institutions ([Milleret, CLASP commissioned paper](https://claspprograms.org/uploads/CLASP_Commissioned_Paper_Milleret_FINALwBio-1399480525.pdf)).
    - Design consequence: Spanish look-alikes become distractors in practice items (*a, muy, en, la, el*) and notes in `future`, `gostar` and the traps deck. The course never assumes Spanish: every note still makes sense to a learner who knows none.

14. **Accent marks that change the word**
    - Wrong → right: *Ele e alto* → *Ele é alto*; *Ela esta aqui* → *Ela está aqui*; *meu avo* (ambiguous) → *meu avô / minha avó*; *Nos somos* → *Nós somos*; *pais* (parents) vs *país* (country).
    - [inference] §10 handles these with strict items rather than a lesson.

15. **Spoken forms treated as errors, or not recognised**
    - Wrong → right (for listening): *tô* = *estou*, *tá* = *está*, *pra* = *para*, *cê* = *você*, *né?* = *não é?*; *Me ajuda?* and *Eu vi ele* are normal speech, not mistakes.
    - [practitioner opinion] [The Brazilian Ways, #13 and #14](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/).
    - Design consequence: the "Spoken Brazilian Portuguese" deck; typed answers use the full written forms, and accept *pra* for *para* wherever *para* is accepted.

## 5. Learners: who, why, what first

**Who**
- [research-backed] Portuguese had 7,684 enrolments in US higher education in fall 2021, 14th of the languages listed and 0.6% of foreign-language enrolments (MLA census, as tabulated on [Wikipedia, *List of most commonly learned second languages in the United States*](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)). Milleret gives 11,371 in 2009 and growth of 21%, 22.4% and 10.8% across 1998–2009 (MLA data, [Milleret](https://claspprograms.org/uploads/CLASP_Commissioned_Paper_Milleret_FINALwBio-1399480525.pdf)), so college numbers have fallen since.
- [research-backed, faculty estimate] In Milleret's 2010 survey, instructors put Spanish speakers at about 45% of their students, heritage Portuguese speakers at 18%, and English-only speakers at 15.9%. She calls Spanish speakers "the largest and strongest potential audience".
- [research-backed] About 450,000 Brazilian immigrants lived in the US in 2017: Florida about 80,000, Massachusetts about 65,000, California about 39,000, New Jersey about 29,000, New York about 25,000; the largest metro populations are Greater Boston, New York and Miami ([Migration Policy Institute 2017](https://www.migrationpolicy.org/article/brazilian-immigrants-united-states-2017)). US speakers of Portuguese at home grew from 351,875 (1980) to 731,282 (2009) (Census figures quoted by Milleret).
- [research-backed, global only] Portuguese was the 9th most studied language on Duolingo in 2024; the report gives no US figure for Portuguese ([Duolingo Language Report 2024](https://blog.duolingo.com/2024-duolingo-language-report/)).
- [inference] So the app's learners are a mix of: adults with Brazilian partners, in-laws, coworkers or neighbours (Boston, Florida, New Jersey); travellers to Brazil; learners who already know Spanish and expect Portuguese to be quick; heritage learners who understand more than they can write; and students. A Spanish-knowing learner will move fast through vocabulary and slow down on sounds and on false Spanish shortcuts (§4.13).

**Why they study**
- [research-backed, faculty ranking] Instructors ranked these as the drivers of enrolment: the presence of Spanish speakers, heritage speakers, media attention to Brazil, study abroad, and regional economic development (Milleret). Spanish speakers choose Portuguese because it looks easy to learn.
- [practitioner opinion] University pages cite 210 million speakers, Portuguese as an official language of eight countries, and federal "preferred language" status ([University of Arizona, Why study Portuguese?](https://spanish.arizona.edu/undergraduate/prospective-students/why-study-portuguese)).
- No US-only motivation survey for Portuguese was found (§11).

**What they need first** [inference]
1. **Social survival with *você*:** greetings, *tudo bem?*, thanks with the right ending (*obrigado / obrigada*), "excuse me", ordering (*Eu queria…*), "where is…?" (*Onde fica…?*), prices in reais. That is why `numbers` stays in stage 2 but prices and *R$* appear in the Food deck from the start.
2. **Talking about themselves and their family:** name, origin with the right contraction (*Sou dos Estados Unidos*), where they live, job, age with *ter*.
3. **Sounds that block understanding:** nasal vowels, *ti / di*, final *-e / -o*, *r / rr*. Without these a learner cannot recognise words they know on paper (*cidade, noite, Rio*). `sounds` is lesson 1, and the aid carries them in every card.
4. **Agreement, contractions and verb endings from day one**, because English speakers fossilise "one form for everything" (§4.1–4.3).
5. **Listening to real speech:** *tô, tá, pra, a gente, né*. The spoken deck exists for this.

**Check of the roadmap's order against US beginner courses** [curriculum convention]
- The roadmap follows the USP A1 programme's five blocks (alphabet; present; routine and numbers; location and future; past).
- The MIT first-year course (*Ponto de Encontro*-based) runs: vowels (open, closed, nasal) → *ser* and pronouns → numbers and time → *-ar* verbs → articles and gender → contractions with *estar* → question words and *-er / -ir* → adjectives → *ser* vs *estar* → possessives → *ter* and *estar com* → *por* and *para* → stem-changing verbs → *pretérito perfeito* → present progressive → reflexives → direct object pronouns ([MIT OCW 21G.801](https://ocw.mit.edu/courses/21g-801-portuguese-i-fall-2011/pages/assignments)).
- UCSB's *Ponto de Encontro* lessons 4–7: stem-changing verbs, irregular present, progressive, *ter / estar com / ficar com*, demonstratives, *saber / conhecer*, then the *pretérito* with direct objects (lesson 6) and indirect objects (lesson 7) ([UCSB](https://www.spanport.ucsb.edu/sites/default/files/sitefiles/undergrad/languageprogram/courses/Winter20/Port%202%20W20.pdf)).
- Changes made for US learners (§8):
  - articles and gender come before *ser*, and adjectives join stage 1, so agreement is practised from the first description (*Ela é americana*);
  - contractions move up to follow *estar*, as at MIT;
  - *ser* vs *estar* gets its own lesson, as in both courses above;
  - prepositions (*por / para*, MIT session 22) and object pronouns (MIT session 39, UCSB lesson 6) get lessons; the roadmap has neither.

## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Portuguese was found. The choice is [inference], as in the Spanish, French and Italian courses.
- What the aid must carry is described, not measured: the Brazilian readings of *t / d* before *i*, final *-e / -o*, final *l*, *r / rr*, nasal vowels and open / closed *e / o* ([tertiary] §2.1; [practitioner opinion] §4.9–4.11). No first-hand learner study of these could be opened (§11).
- Portuguese spelling marks stress far better than Italian: written accents mark the exceptions, and the rest follows from the word ending ("the main pattern puts stress on the penultimate syllable for words ending in -a(s), -e(s), -o(s), -em(ens) or -am; other words are stressed on the final syllable") [tertiary, same source]. So stress can be generated by rule with no word list. Vowel quality cannot: an unaccented stressed *e* or *o* can be open or closed (*ela / ele, nova / novo*), and only a word list knows which.

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling, generated | Readable on day one. Same format family as the Spanish and Italian courses, so the engine, lint and validator need nothing new. Shows exactly the traps of §4.9–4.11: *cidade* → `see-DAH-jee`, *Brasil* → `brah-ZEEW`, *carro* → `KAH-hoo`, *pão* → `powng`. | Cannot show a real nasal vowel (the `ng` is a convention), the tap, or pure (unglided) *ay / oh*. Vowel quality needs a word list. |
| (b) IPA | Exact. | US adult self-learners cannot read it [inference]. |
| (c) No aid after a spelling lesson | Portuguese spelling is regular for stress. | For an English reader the spelling misleads in most words (*de, te, -e, -o, l, r, rr, ão, ãe, lh, nh, x, s*), and it hides open / closed *e / o*. |

**Decision: (a).** `pron: "required"`.
- The aid is **generated by `tools/target/pt/respell.js`**, never hand-written: `node tools/target/pt/respell.js "<text>"` prints `<text> -> <pron>`, and the module exports `respell`. The same Portuguese always gives the same `pron`, which is what the lint checks.
- **Why not French's capital N for nasals:** the Portuguese aid needs CAPITALS for stress, and a capital N inside a stressed syllable (`tahm-BAYN`) could not be told from an oral *n*. So a nasal vowel at the end of a word is written with `ng` after it (`nowng, bayng, seeng, bohng, oong`), a convention of English-language guides to Brazilian Portuguese [inference: no guide was opened for it]. Before a consonant the written *m / n* stays (`kahn-TAHR`, `TAYM-poo`), because English speakers already nasalise a vowel before *n + consonant*.
- **Vowel quality, one meaning per letter pair:** `eh` is always open *e* (*é*), `ay` always closed *e* (*ê*), `aw` always open *o* (*ó*), `oh` always closed *o* (*ô*). Where the generator has to guess, it guesses closed and reports the guess on stderr (below), so a guess never passes silently.
- **Recommended engine default** (decision for the lead, as in es): shown in stage 1, then blurred (tap to reveal) once `sounds` and three more lessons are done; the learner can turn it back on. Never shown in practice items (PRACTICE-SPEC). `features.pron` must be `true` for `en-pt`.

**How reliable it is** [inference: measured on this profile's own test lists; the expected forms are the author's judgment, not a native speaker's]. Two classes behave very differently.
- **Rule-decidable** (stress, *t / d* before *i*, final *-e / -o / -a*, coda *l*, *r / rr*, *s / z*, nasal endings, digraphs, *c / g / qu / gu*, hiatus, glides):
  - List 1, 198 everyday words, written after the word list had been drafted, so partly overlapping it: 1 rule error (*reunião*, a hiatus the spelling does not show; now an exception).
  - List 2, 229 words chosen to fall mostly outside the word list, written before the first run: 2 rule errors (*açúcar*: a final *-ar* wrongly reduced; *inverno*: the "closed before a nasal" rule fired across an *r*). Both fixed. Nine more mismatches were mistakes in the expected forms, not in the generator.
  - List 3, 91 targeted strings (hiatus *sair, caiu, juiz, ruim, rainha, Bahia*; nasal plurals; place and person names; loanwords; 10 sentences): 3 rule errors (*caiu*, *alemães*, *Bahia*), all fixed.
  - List 4 (second session), 40 phrases and sentences written to stress nasal vowels, final *-e / -o*, *de / di* and *te / ti*, *r / rr*, *lh*, *nh* and stress, plus about 80 more strings (numbers, months, weekdays, *-ia* words, stressed one-syllable words, names, places, food, spoken forms): 1 rule error, the contraction *ao / aos* split into two syllables (`AH-oo`) instead of the diphthong `ow`. Fixed with whole-word entries. English names (*Jack, Megan*) and *Massachusetts* came out wrong, as expected for English spelling, and went into `EXC`.
  - **About 99% right on first run (7 errors in about 640 strings), none flagged.** Expect about one rule error in 100 new strings, mostly in hiatus words, contractions, loanwords and names.
- **Lexical** (open or closed quality of an unaccented stressed *e / o*; *x* between vowels; a sounded *u* in *qu / gu* + *e / i*):
  - The word list `LEX` (about 360 forms) and five suffix rules decide quality: closed before a nasal consonant in an open syllable (*pequeno, fome, tenho*); *-oso* closed and *-osa / -osos / -osas* open; *-ola* open; final *-or* and *-er* closed; *-esa / -eza / -ez* closed.
  - Outside `LEX` and the rules, the closed default was right for 11 of 22 flagged words across lists 1 and 2, and for 5 of 9 in list 4 (wrong: *dezessete, dezenove, fizeram, biblioteca*): **a coin flip, which is why every such guess is reported.** All 31 are now in `LEX`, with the strong preterites `past` will use (*fizeram, tiveram, estiveram, puderam, quiseram, disseram, souberam, trouxeram, vieram, deram* open; *teve, esteve, fez* closed) and the regular *-eram* forms checked so far (*comeram, beberam, venderam, escreveram*, closed). [research-backed, dictionary] *teve* /ˈte.vi/ and *fez* /ˈfe(j)s/ are closed in Wiktionary's Brazilian transcriptions ([Kaikki, *teve*](https://kaikki.org/dictionary/All%20languages%20combined/meaning/t/te/teve.html); [Kaikki, *fez*](https://kaikki.org/dictionary/Portuguese/meaning/f/fe/fez.html)); the espeak-ng Portuguese list gives *esteve* closed, *catorze* closed, *treze* and *desde* closed, and *dezessete* / *dezenove* open ([espeak-ng `pt_list`](https://chromium.googlesource.com/chromiumos/third_party/espeak-ng/+/cd20ac3b30963450080f20b0dbd1cc8767fa6a1d/dictsource/pt_list)). The open *-eram* of the strong preterites is not confirmed by any source opened. Three older `LEX` entries were also corrected on review: *escrevo* closed (like *bebo, devo*), *moleque* and *chiclete* open.
  - Silent lexical errors (no warning) came from rule exceptions (*mulher, esposa, dez*) and two mistakes in the list itself (*novo* entered as open, *bicicleta* as closed). All fixed. The quality list is the author's recall and needs a native check (§11).
  - *x* between vowels: the 3 flagged cases (*abacaxi, coxinha, roxo*) took the right default (`sh`) and are now listed. *x* = `ks` (*táxi*) or `s` (*próximo*) works only through `LEX`.
  - A sounded *u* (*cinquenta, tranquilo, linguiça, frequente*) cannot be seen in the current spelling, and the generator does **not** warn: these words must be in `LEX` (they are, for A1).
- After the fixes all 558 test strings with expected forms (lists 1–4), the 23 worked examples below and the 90 sample cards in §9 match the generator and pass `pronPattern`; this was re-run after the last change to `respell.js`.

**Homographs** get one `pron` each, because the validator wants one per string. The fixed reading:

| Spelling | Reading used | Other reading (do not use in the course) |
|---|---|---|
| gosto | verb "I like", open: `GAWS-too` | noun "taste", closed |
| olho | noun "eye", closed: `OH-lyoo` | verb "I look", open |
| jogo | noun "game", closed: `ZHOH-goo` | verb "I play", open |
| começo | verb "I start", open: `koh-MEH-soo` | noun "beginning", closed |
| acordo | verb "I wake up", open: `ah-KAWR-doo` | noun "agreement", closed |
| almoço | noun "lunch", closed: `ow-MOH-soo` | verb "I have lunch", open |
| sede | "thirst", closed: `SAY-jee` | "headquarters", open |
| colher | noun "spoon", open: `koh-LYEHR` | verb "to harvest", closed |
| este | "this", closed: `AYS-chee` | "east", open |
| pelo / pela | contraction "by the", closed | *pelo* "hair", same sound; no clash |

**What lesson 1 (`sounds`) must teach, so the aid can be read:**
1. The vowel spellings, each one sound: `ah ee oo`, the pairs `eh` (open, as in *bet*) / `ay` (closed, as in *bait* without the y glide) and `aw` (open, as in *law*) / `oh` (closed, as in *go* without the w glide), and `uh` (the weak final *a*).
2. CAPITALS mark the stressed syllable. A written accent shows stress (*café, você, avó*); otherwise words ending in *a, e, o* (+ *s*), *am, em, ens* stress the next-to-last syllable, and all others the last.
3. `ng` after a vowel means a nasal vowel: say it through the nose and do not finish with a *g* (`powng` *pão*, `maing` *mãe*, `bayng` *bem*). *pão / pau* and *avó / avô* are the pairs to hear.
4. At the end of a word *e* sounds `ee` and *o* sounds `oo`; *de, te, que* are `jee, chee, kee`.
5. *t* and *d* before an `ee` sound become `ch` and `j` (*tia, dia, noite, cidade*).
6. *l* at the end of a syllable sounds `w` (*Brasil, mal, futebol*).
7. *r* at the start of a word and *rr* sound like English *h* (`HEE-oo`, `KAH-hoo`); a single *r* between vowels is a quick tap, like the *tt* in American *butter*; at the end of a syllable *r* changes by region, and the aid writes `r`.
8. Letters that differ from English: *s* between vowels = `z`; *ch, x* = `sh`; *j*, and *g* before *e / i* = `zh`; *lh* = `ly`; *nh* = `ny`; *h* is silent; *ç* = `s`; *qu, gu* before *e / i* = `k, g`.
9. The aid is a crutch: listen first, and turn it off once the spelling rules are known.

### 6.1 The key (exact format)

**Format**
- Lowercase ASCII letters. Words separated by single spaces, syllables inside a word by hyphens.
- In every word of two or more syllables, exactly one syllable, the stressed one, is in CAPITALS. One-syllable words are all lowercase, stressed or not (*pé* → `peh`, *de* → `jee`).
- A hyphenated word is written as two words, each with its own stress (*segunda-feira* → `seh-GOON-duh FAY-ruh`). An apostrophe is dropped and the words joined (*copo d'água* → `KAW-poo DAH-gwuh`).
- No punctuation, no accent marks, no digits (write numbers as words; the generator stops with an error on a digit or a symbol such as *R$*).

**Vowels, stressed**

| Portuguese | Aid | Example |
|---|---|---|
| a, á, â, à | ah | casa → `KAH-zuh`; lá → `lah` |
| é; unaccented e listed or ruled open | eh | café → `kah-FEH`; ela → `EH-luh` |
| ê; unaccented e listed or ruled closed, or not known (reported) | ay | você → `voh-SAY`; mesa → `MAY-zuh` |
| i, í, y | ee | aqui → `ah-KEE` |
| ó; unaccented o listed or ruled open | aw | avó → `ah-VAW`; porta → `PAWR-tuh` |
| ô; unaccented o listed or ruled closed, or not known (reported) | oh | avô → `ah-VOH`; ovo → `OH-voo` |
| u, ú | oo | tudo → `TOO-doo` |

**Vowels, unstressed**

| Position | a | e | o | Example |
|---|---|---|---|---|
| last syllable, open or ending in *s* | uh | ee | oo | casa → `KAH-zuh`; leite → `LAY-chee`; amigos → `ah-MEE-goos` |
| last syllable closed by another consonant | ah | eh | oh | açúcar → `ah-SOO-kahr` |
| before the stress (and between stress and last syllable) | ah | eh | oh | telefone → `teh-leh-FOH-nee`; sábado → `SAH-bah-doo` |
| first syllable *es- / ex- / des-* before a consonant | | ee | | estar → `ees-TAHR`; desculpa → `jees-KOOW-puh` |
| unstressed one-syllable words (o, os, a, as, à, e, de, do, da, no, na, em, me, te, se, lhe, que, por, com, sem, pra, mas, nem, ou, num) | ah | ee | oo | o → `oo`; de → `jee`; que → `kee`; e → `ee` |

**Diphthongs and final l**

| Portuguese | Aid | Example |
|---|---|---|
| ai | ai | pai → `pai` |
| ei, éi | ay | leite → `LAY-chee` |
| oi, ói | oy | oito → `OY-too` |
| ou | oh | sou → `soh` |
| au; al; the contractions ao, aos (listed) | ow | pau → `pow`; mal → `mow`; ao → `ow` |
| eu | ayw | meu → `mayw` |
| éu; el | ehw | céu → `sehw`; hotel → `oh-TEHW` |
| iu; il | eew | partiu → `pahr-CHEEW`; Brasil → `brah-ZEEW` |
| ol | ohw | futebol → `foo-chee-BOHW` (open and closed alike) |
| ul | oow | azul → `ah-ZOOW` |
| ui | ooy | fui → `fooy` (but *muito* → `MOOYN-too`, listed) |
| i / u after the stress, before another vowel | y / w + vowel | família → `fah-MEE-lyuh`; rádio → `HAH-jyoo`; água → `AH-gwuh` |
| i / u before the stress, before another vowel | separate syllable | piano → `pee-AH-noo`; criança → `kree-AHN-suh` |
| i / u after a vowel, accented, or before *nh* or a closing *l m n r z* | separate syllable | país → `pah-EES`; ainda → `ah-EEN-duh`; sair → `sah-EER`; rainha → `hah-EE-nyuh` |

**Nasal vowels**

| Portuguese | Aid | Example |
|---|---|---|
| ão; final -am (unstressed) | owng | não → `nowng`; falam → `FAH-lowng` |
| ã | ahng | irmã → `eer-MAHNG` |
| ãe | aing | mãe → `maing` |
| õe | oyng | põe → `poyng`; limões → `lee-MOYNGS` |
| final -em, -ens | ayng, ayngs | bem → `bayng`; jovens → `ZHAW-vayngs` |
| final -im, -om, -um (and -n) | eeng, ohng, oong | sim → `seeng`; bom → `bohng`; um → `oong` |
| vowel + m / n + consonant | vowel + the written m / n (e and o closed) | cantar → `kahn-TAHR`; tempo → `TAYM-poo`; onde → `OHN-jee` |

**Consonants** (only those that differ; b d f k l m n p t v as written, except as shown)

| Portuguese | Aid | Example |
|---|---|---|
| t, d before an `ee` sound or a glide `y` | ch, j | tia → `CHEE-uh`; cidade → `see-DAH-jee` |
| r at the start of a word, rr, r after n, l, s | h | Rio → `HEE-oo`; carro → `KAH-hoo`; honra → `OHN-huh` |
| r between vowels or after a consonant in the same syllable | r (a tap) | caro → `KAH-roo`; obrigado → `oh-bree-GAH-doo` |
| r at the end of a syllable | r (varies by region) | porta → `PAWR-tuh`; falar → `fah-LAHR` |
| s between vowels | z | casa → `KAH-zuh` |
| s, z, x at the end of a syllable | z before b d g l m n r v; s otherwise | mesmo → `MAYZ-moo`; feliz → `feh-LEES`; texto → `TAYS-too` |
| s at the start, ss, ç, c before e / i, sc / sç / xc before e / i | s | sapato → `sah-PAH-too`; nascer → `nah-SAYR` |
| c elsewhere; qu before e / i; k | k | casa → `KAH-zuh`; que → `kee` |
| qu, gu before a / o; listed qü-words | kw, gw | quando → `KWAHN-doo`; água → `AH-gwuh`; cinquenta → `seen-KWAYN-tuh` |
| gu before e / i (u silent) | g, written **gh** before `eh` / `ee` | guerra → `GHEH-huh`; português → `pohr-too-GAYS` |
| ch; x at the start, after *n*, after a diphthong, and by default | sh | chave → `SHAH-vee`; caixa → `KAI-shuh` |
| ex + vowel at the start of a word | z | exame → `eh-ZAH-mee` |
| listed x-words | ks or s | táxi → `TAHK-see`; próximo → `PRAW-see-moo` |
| j; g before e / i | zh | hoje → `OH-zhee`; gente → `ZHAYN-chee` |
| lh | ly | filho → `FEE-lyoo` |
| nh | ny | vinho → `VEE-nyoo` |
| h | (nothing) | homem → `OH-mayng` |
| tch | ch | tchau → `chow` |

**Syllable breaks**
- One consonant goes with the next vowel. Two consonants split, except *pr br tr dr cr gr fr vr pl bl cl gl fl tl*, which stay together. With three or more, the last two stay together if they form one of those pairs; otherwise only the last goes right.
- *ch, lh, nh, qu, gu* count as one consonant; *rr, ss, sc, sç, xc* become one sound (`h` or `s`) at the start of the next syllable.
- An *h* between two vowels keeps them in separate syllables (*Bahia* → `bah-EE-uh`).

**Names and English words** inside Portuguese sentences: prefer Brazilian names and places (§9 Localisation). `EXC` in `respell.js` holds the course's US places and common loanwords (*Boston, Miami, Orlando, Nova York* via *York*, *shopping, internet, site, wi-fi, e-mail, Uber*) as Brazilians say them. A name not listed is respelled by the rules, which is how the Brazilian voice will read it.

### 6.2 `pronPattern`

```
^(?:(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*|(?:(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*-)+(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:AH|AI|AW|AY|EH|EE|OH|OO|OW|OY|UH)(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:-(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*)*|(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:AH|AI|AW|AY|EH|EE|OH|OO|OW|OY|UH)(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:-(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*)+)(?: (?:(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*|(?:(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*-)+(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:AH|AI|AW|AY|EH|EE|OH|OO|OW|OY|UH)(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:-(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*)*|(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:AH|AI|AW|AY|EH|EE|OH|OO|OW|OY|UH)(?:CH|SH|ZH|[BDFGHJKLMNPRSTVWYZ])*(?:-(?:ch|sh|zh|[bdfghjklmnprstvwyz])*(?:ah|ai|aw|ay|eh|ee|oh|oo|ow|oy|uh)(?:ch|sh|zh|[bdfghjklmnprstvwyz])*)+))*$
```

A syllable grammar, as in the French course: each syllable is consonant units, exactly one vowel unit, consonant units. What it enforces:
- Vowel units are only `ah ai aw ay eh ee oh oo ow oy uh`. So a bare *a, e, i, o, u* (raw Portuguese such as *casa, bom, sim, de*) is rejected; `ng`, `w` and `y` after a vowel unit are consonant units.
- Consonants are only `b d f g h j k l m n p r s t v w y z` and `ch sh zh`. So *c* (outside *ch*), *q*, *x*, *ç*, accented letters and apostrophes are rejected.
- Every word of two or more syllables has exactly one syllable in CAPITALS; one-syllable words are lowercase; single spaces; no punctuation.

It is compiled with the `u` flag. Tested: it accepts all 558 test strings, all 23 worked examples and all 90 sample cards. It rejects the raw Portuguese of all 90 sample card targets. Four raw test words pass as they stand (*pai, vai, voo, sair*); for *pai* and *vai* the respelling is identical, but *voo* and *sair* show that the pattern alone cannot prove a `pron` was generated. It cannot catch a wrong but well-formed respelling; the generator and the lint do.

### 6.3 Worked examples (all pass `pronPattern` and equal the generator's output)

| # | Portuguese | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Bom dia. | `bohng JEE-uh` | Good morning. | final m = nasal: bohng; d before i = j |
| 2 | Boa noite. | `BOH-uh NOY-chee` | Good evening; good night. | oi = oy; final te = chee; final a = uh |
| 3 | Obrigada. | `oh-bree-GAH-duh` | Thank you (said by a woman). | final o / a unstressed = oo / uh; stress next to last |
| 4 | Tudo bem? | `TOO-doo bayng` | How are you? | final -em = ayng |
| 5 | não | `nowng` | no; not | ão = owng |
| 6 | pão | `powng` | bread | nasal: compare pau |
| 7 | pau | `pow` | stick | oral au = ow |
| 8 | mãe | `maing` | mother | ãe = aing |
| 9 | o trabalho | `oo trah-BAH-lyoo` | the work | lh = ly; clitic o = oo |
| 10 | Brasil | `brah-ZEEW` | Brazil | s between vowels = z; final l = w |
| 11 | a cidade | `ah see-DAH-jee` | the city | c before i = s; final de = jee |
| 12 | Rio de Janeiro | `HEE-oo jee zhah-NAY-roo` | Rio de Janeiro | initial r = h; de = jee; j = zh |
| 13 | caro | `KAH-roo` | expensive | single r = tap r |
| 14 | carro | `KAH-hoo` | car | rr = h |
| 15 | avô | `ah-VOH` | grandfather | ô = closed oh |
| 16 | avó | `ah-VAW` | grandmother | ó = open aw |
| 17 | você | `voh-SAY` | you | ê = closed ay; written accent = stress |
| 18 | também | `tahm-BAYNG` | also | m before b kept; final -ém = ayng |
| 19 | a família | `ah fah-MEE-lyuh` | the family | post-tonic i + vowel = glide y |
| 20 | Estou com fome. | `ees-TOH kohng FOH-mee` | I am hungry. | initial es- = ees; ou = oh; stressed o before m = closed |
| 21 | segunda-feira | `seh-GOON-duh FAY-ruh` | Monday | hyphen: two words, two stresses |
| 22 | a gente | `ah ZHAYN-chee` | we | g before e = zh; en + consonant = ayn |
| 23 | Eu gosto de café. | `ayw GAWS-too jee kah-FEH` | I like coffee. | eu = ayw; gosto (verb) open aw, from LEX |

### 6.4 The generator: `tools/target/pt/respell.js`

- About 370 lines, no dependencies. **Usage:** `node tools/target/pt/respell.js "Onde fica o banheiro?"` prints `Onde fica o banheiro? -> OHN-jee FEE-kuh oo bah-NYAY-roo`. Several arguments give several lines. `require('./respell.js').respell(text)` returns the string.
- **Warnings** go to stderr, so stdout keeps the `<text> -> <pron>` shape: `check vowel` (an unaccented stressed *e / o* outside `LEX` and the rules; the default is closed) and `check x` (an *x* between vowels that no rule covers; the default is `sh`).
- **When the output is wrong or warns** (writers): do not edit `respell.js` and never hand-edit a `pron`. Keep the generator's output so the validator stays consistent, and list the string under "pron to check" in the report. The lead adds the word to `LEX_WORDS` (written with *é / ó* for open, *ê / ô* for closed, *ü* for a sounded *u*, *cs / ss / ch* in place of *x*) or a whole-word entry to `EXC`, and re-runs the rows; the lint shows every row whose `pron` changed. Each inflected form needs its own entry: *novo* (closed) and *nova, novos* (open) are deliberately not linked.

### 6.5 Known limits

- The respelling is a crutch for reading, not a model of the sound: nasal vowels, the tap, and pure *ay / oh* come from audio.
- **Not shown:** the nasal colour of a stressed vowel before *m, n, nh* (*cama, banana*); raising of *e / o* before the stress (*menino* often "mee-NEE-noo", *bonito* "boo-NEE-too"), except initial *es- / des-*; the extra *i* Brazilians insert in clusters (*advogado* "ah-jee-voh-GAH-doo", *pneu*, *ritmo*); *s* linking to a following vowel (*os amigos* "oo-zah-MEE-goos"); the dropped final *r* of infinitives; Rio's "sh" for final *s*.
- **Final *r*:** the aid writes `r`. The `pt-BR` voice may say a soft *h* or nothing there, so the aid can disagree with the audio. Which coda *r* the target devices' voices use was not checked (§11).

## 7. Standing practice rule

**Rule: agreement.** Every lesson's practice set keeps re-testing that words agree. There are three strands:
- **(a) Noun-phrase agreement.** Gender and number on articles (*o / a / os / as, um / uma*), demonstratives, possessives (*meu / minha / meus / minhas*), *muito / muita / muitos / muitas*, numbers that inflect (*um / uma, dois / duas, duzentos / duzentas*), *obrigado / obrigada*, and adjectives, all matching their noun (or, for *obrigado*, the speaker).
- **(b) Contractions.** *em, de, a, por* fuse with the article (*no, na, do, da, à, pelo, pela*), and the article inside the fused form still agrees with the noun (*no Brasil, na praia, do Rio, da Bahia, dos Estados Unidos*). The same holds for *dele / dela*, *nesse / nessa* and *num / numa*.
- **(c) Verb agreement.** The verb ending matches the subject: *você, a gente* = the *ele* form; *vocês* = the *eles* form; *nós* = *-mos*.

**Why these, and not *ser* vs *estar*** [inference, built on §4]:
- Agreement and verb endings are ranked first and third in §4, and gender is the one point with production data for English-L1 learners (§4.1: about 34% and 25.5% correct production).
- Contractions (§4.2) are present in almost every sentence about place, origin and possession, and English has nothing like them, so they belong with agreement rather than in one lesson. A contraction error is also an agreement error whenever the gender is wrong (*no praia*).
- All three strands can be met in every lesson from `greetings` on (*bom dia / boa tarde*, *obrigado / obrigada*), which matters because the JSON has no exemption field.
- *Ser / estar / ficar* (§4.4) cannot be tested before lesson 7 and would be artificial in `numbers` or `connectors`. It has its own lessons and comes back as the "mixed neighbour" items (§8).

**Count** (`minOrder: 2`, `minType: 2`): in every lesson's practice set, at least **2 `order` items** and at least **2 `type` items** hinge on agreement, and their `why` names it with a keyword. A 14-item set has 3–4 `order` and 3–4 `type` items, so about half of each block.

**What the validator checks, and what it does not.** `tools/target/validate.js` only counts `order` and `type` items whose `why` matches the keywords. Whether the item really hinges on agreement is a **writer rule, checked by the reviewer**, defined below. A `why` that names agreement on an item that does not test it breaks the rule even though the validator passes it.

**What counts as hinging** (writer rule):
- **`order`** hinges if the `why` matches the keywords and **either**:
  - `x` contains an agreement twin of a tile in `a`. A twin is the same word in another gender, number or person:
    - articles: *o / a / os / as / um / uma / uns / umas*;
    - contractions: *no / na / nos / nas*, *do / da / dos / das*, *ao / à / aos / às*, *pelo / pela*, *num / numa*, *dele / dela*; also the unfused pair as a distractor (*em* + *o* against *no*);
    - demonstratives: *este / esta / estes / estas*, *esse / essa…*, *aquele / aquela…*;
    - possessives: *meu / minha / meus / minhas*, *seu / sua…*, *nosso / nossa…*;
    - *muito / muita / muitos / muitas*; *um / uma*, *dois / duas*; *obrigado / obrigada*;
    - adjective endings: *-o / -a / -os / -as*, *-e / -es*, *-l / -is* (*azul / azuis*), *-ão / -ã*;
    - verb forms of the same verb in another person: *sou / é / somos / são*, *tenho / tem / temos / têm*, *falo / fala / falamos / falam*, *vou / vai / vamos / vão*;
  - **or** `a` contains a noun phrase of article + noun + adjective, where the distractor is the wrong-gender adjective.

  Example: `['or', 'the white shirt', 'a camisa branca', 'branco', 'camisa is feminine, so the adjective agrees: branca.']`
- **`type`** hinges if the `why` matches the keywords and **either**:
  - `x` holds an agreement twin of a word in `a[0]`;
  - **or** `a[0]` contains an article, contraction, demonstrative, possessive or *muito*-form plus a noun;
  - **or** `a[0]` contains an adjective in *-o / -a / -os / -as* that agrees with its noun or subject;
  - **or** `a[0]` contains a conjugated verb whose subject the English prompt names as anything other than "he / she / it" (*I, you, we, they, you all*, or "(to an older man)").

  Example: `['ty', 'We live in Miami.', 'Nós moramos em Miami|Moramos em Miami|A gente mora em Miami', 'morar · Miami', 'mora moram', 'The nós form: the verb ending matches the subject, -amos. With a gente, use the ele form: mora.']`
- **Fallback words** (`x` of a `type` item) must not rebuild an accepted answer: the validator swaps each fallback word into each position of `a[0]` and fails the item if the result is accepted. When *nós* and *a gente* are both accepted, build `a[0]` with *nós* (as above): *Nós mora em Miami* and *Nós moram em Miami* are not accepted, so *mora* and *moram* are safe. With *A gente mora…* as `a[0]`, the fallback *moramos* would also be safe, but *vai* / *vão*-type twins must be checked one by one.
- **Accepted answers** list the versions with and without *eu* and *nós*, and the *a gente* version for "we" (§2.3). For "you" prompts, list *Você…* and the bare verb. Leaving out *eu* or *nós* is never an error.

**Lessons where the rule is hardest, with a hinge for each:**
- `sounds`: from its own deck, which gives every noun its article: `order` *a cidade* (x: *o*), *o carro* (x: *a*); `type` "the cities" → *as cidades* (x: *os*). The lesson body introduces *o / a* as "the" for this purpose; `articles` then explains it.
- `greetings`: *Boa tarde* (x: *Bom*), *Obrigada* for "Thank you (said by a woman)" (x: *Obrigado*), *Muito prazer* (x: *muita*).
- `numbers`: *São duas horas* (x: *dois*, *é*); *Quanto custam?* (x: *custa*); *duzentas pessoas* (x: *duzentos*).
- `questions`: *Quantas irmãs você tem?* (x: *Quantos*); *Onde vocês moram?* (x: *mora*).
- `connectors`: *Estou cansada mas feliz* (said by a woman; x: *cansado*); *Nós estudamos e trabalhamos* (x: *estuda*).
- `city`: *O ponto fica na esquina* (x: *no*); *Vocês vão de metrô?* (x: *vai*).

**Validator keywords** (`standingRule.keywords`, flags `i`; identical to `profile.json`):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bgender\b|\bsingular\b|\bplural (?:noun|adjective|article|ending|form|verb)|\bcontractions?\b|\bverb ending|\bmatch(?:es)? the subject|(?:\beu|\bvocês?|\bele|\bela|\bnós|\bgente|\beles|\belas)[ -]form
```

Use them like this:
- "masculine", "feminine", "gender", "agrees / agreement", "singular", "plural noun / adjective / article / ending / form / verb" for strand (a);
- "contraction" for strand (b) (§3: only a preposition fused with an article, pronoun or adverb);
- "verb ending", "matches the subject", "the eu / você / ele / ela / nós / a gente / eles / elas / vocês form" for strand (c).

Bare "plural", "ending", "person", "subject" and "short form" are deliberately not keywords, so lines about the plural of *real*, *-mente*, the spoken *tô / tá* or the pronoun position do not count by accident. Never call *tô, tá, pra* "contractions" in a `why` (§3): it would count as a hit for an item that does not test agreement. Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")` read from `profile.json`; 40 lines, all results as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| casa is feminine, so bonita. | match | should match |
| The adjective agrees with sapatos: pretos. | match | should match |
| Gender: o problema is masculine. | match | should match |
| falamos: the verb ending matches the subject (nós). | match | should match |
| Você takes the ele form: fala. | match | should match |
| A gente takes the ele / ela form: a gente vai. | match | should match |
| Vocês takes the eles form: falam. | match | should match |
| Plural noun, plural article: os livros. | match | should match |
| em + a = na: the contraction agrees with praia. | match | should match |
| Contraction: de + o = do (o Brasil). | match | should match |
| duas agrees with horas, which is feminine. | match | should match |
| Agreement: muitas pessoas. | match | should match |
| obrigada agrees with the speaker, a woman. | match | should match |
| boa is feminine, like tarde. | match | should match |
| Eu form: eu falo. | match | should match |
| tenho: the eu form of ter. | match | should match |
| Nós form: temos. | match | should match |
| minha agrees with irmã, not with the owner. | match | should match |
| dela: contraction of de + ela; it agrees with the owner. | match | should match |
| Singular subject, singular verb: custa. | match | should match |
| pra is a short form of para. | no match | should not match |
| Location of a person: estar. | no match | should not match |
| Events take place with ser: a festa é na casa. | no match | should not match |
| gostar always takes de. | no match | should not match |
| The plural of real is reais. | no match | should not match |
| tá is the short form of está; the subject is still você. | no match | should not match |
| Age uses ter, not ser. | no match | should not match |
| Question words: onde, quando, como. | no match | should not match |
| por favor, but para o aeroporto. | no match | should not match |
| de + vehicle: de ônibus. | no match | should not match |
| Spoken tô is estou; write estou. | no match | should not match |
| In Brazil the pronoun goes before the verb: me ajuda. | no match | should not match |
| The preterite of ir is fui. | no match | should not match |
| Nasal ão: pão, not pau. | no match | should not match |
| Use o senhor for an older man. | no match | should not match |
| The ending -mente makes an adverb. | no match | should not match |
| estar com fome: hunger is temporary here. | no match | should not match |
| mas means but; mais means more. | no match | should not match |
| Vou + infinitive, no a in between. | no match | should not match |
| Brazilian Portuguese uses você, not tu, in this course. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §2, §4 and §5; the roadmap is `packs/roadmaps.js`, entry `pt`, three stages, 22 items):
- **Kept: all 22 items.** Their ids lose the `pt-` prefix, and every one is the `roadmap` field of exactly one lesson. No item is replaced.
- **Reordered:**
  - `articles` moves before `ser`, so gender is known before the first description (*Ela é americana*) (§4.1).
  - `adjectives` moves from the end of stage 2 to stage 1, straight after `ser`, so agreement is practised from the first week (§4.1, §5).
  - `contractions` moves up to follow `estar`, as in the MIT course (§4.2, §5): *estar* sentences about place need *no / na* at once.
  - `numbers` stays in stage 2, but prices in reais appear in the Food deck from the start (§5).
- **Renamed** (titles only; the roadmap id is unchanged):
  - `sounds`: "Alphabet and sounds: nasal vowels, ão, lh, nh" → "Sounds, spelling and stress" (the lesson also teaches the stress rule and how to read the aid, §6).
  - `greetings`: "Greetings and introductions: você" → "Greetings: você and o senhor" (§2.3).
  - `ser`: "ser: who you are" → "Subject pronouns and ser" (the pronouns, with *a gente*, are introduced here).
  - `adjectives`: "Adjectives and agreement" → "Adjectives: agreement and position".
  - `estar`: "estar, and ser vs estar" → "estar: where and how". The contrast moves to the added lesson `ser-estar`.
  - `ter`: "ter and tem: have, there is" → "ter: have, there is, and estar com" (§4.5).
  - `numbers`: "Numbers, time and daily routine" → "Numbers, time and prices". **Daily routine belongs to `reflexive`**, where the routine verbs are (*me levanto, tomo banho*); `numbers` keeps clock times.
  - `future`: "ir + infinitive: future" → "ir + infinitive: plans".
  - `reflexive`: "Reflexive verbs" → "Reflexive verbs and daily routine".
  - `past`: "Pretérito perfeito: past" → "Pretérito perfeito: what you did".
- **Added (3)**, each with an empty `roadmap` field:
  - `ser-estar`: the roadmap folds the contrast into `estar`, but both US courses checked give it its own session (§5), and §4.4 ranks it fourth.
  - `prepositions`: fixed prepositions and *por / para* (§4.6); MIT session 22 (§5). The roadmap has no lesson for them.
  - `object-pronouns`: the Brazilian pronoun before the verb and *eu vi ele* (§4.12); MIT session 39 and UCSB lesson 6 (§5).
- **Stages:** the roadmap's three stages, with its English names: "Sounds and first words" (6 lessons), "Everyday sentences" (8), "Doing things" (11).

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `sounds` | Sounds, spelling and stress | pt-sounds | Nasal vowels (*ã, ão, ãe, õe*, final *-m*), *lh* and *nh*, final *-e / -o* said *ee / oo*, *t / d* before an *i* sound (*tia, cidade*), final *l* said *w* (*Brasil*), *r / rr* (*caro / carro*), *s* between vowels = *z*, accent marks and the stress rule; how to read the aid (§6). Deck nouns come with *o / a* ("the"), explained in `articles`. Trap: reading Portuguese with English letter values (*gente* with a hard g, *h* sounded, *pão* said like *pau*). | Sounds and spelling |
| 2 | `greetings` | Greetings: você and o senhor | pt-greetings | *Oi, olá, bom dia / boa tarde / boa noite, tudo bem?, eu me chamo, prazer, tchau, obrigado / obrigada, por favor, com licença, desculpa*. *Você* for everyone you talk to; *o senhor / a senhora* for older people and formal service; *tu* named once as regional. Trap: *obrigado* agrees with the speaker (a woman says *obrigada*); *bom dia* but *boa tarde* (first agreement). | Greetings and courtesy |
| 3 | `articles` | Gender and o / a, um / uma | pt-articles | Masculine and feminine, *o / a / os / as*, *um / uma / uns / umas*; endings that mislead (*o dia, o problema, o mapa, a mão, a foto*); plurals in *-s*, *-ões*, *-ais*; the article with things in general (*O café é bom*; *gosto do café* waits for `contractions` and `gostar`). Trap: learning nouns without their article; defaulting to masculine (§4.1). | Food and drink |
| 4 | `ser` | Subject pronouns and ser | pt-ser | *eu, você, ele, ela, a gente, nós, vocês, eles, elas*; *sou, é, somos, são*; *você* and *a gente* take the *ele* form; origin (*Sou de Chicago*), job without an article (*Sou professora*), nationality agreeing (*americano / americana*). Trap: *Eu sou um professor*; dropping *você* where Brazilians keep it. | About me |
| 5 | `adjectives` | Adjectives: agreement and position | pt-adjectives | Adjective after the noun, four forms (*bonito, bonita, bonitos, bonitas*), *-e* and consonant adjectives (*grande, feliz, azul / azuis*), colors; *muito* before an adjective. Trap: *a casa bonito*, *a bonita casa* as the neutral order (§4.1). | People and family |
| 6 | `present` | Present tense: -ar, -er, -ir | pt-present | Regular endings in *eu / você, ele, ela, a gente / nós / vocês, eles, elas* (four spoken forms); *nós falamos* = *a gente fala*; the present also covers "I'm doing" and "I do"; *tu* forms named once for recognition. Trap: one form for every subject (§4.3); *a gente falamos*. | Work and study |
| | | **Stage 2: Everyday sentences** | | | |
| 7 | `estar` | estar: where and how | pt-estar | *estou, está, estamos, estão*; where people and movable things are (*Ela está em casa*); how someone is right now (*Estou bem / cansado*); *ficar* for where places are (*Onde fica o banco?*); spoken *tô, tá* for recognition. Trap: *Sou cansado*; *Onde é...?* vs *Onde fica...?* (both heard; the lesson teaches *fica*). | Around town and directions |
| 8 | `contractions` | no, na, do, da: contractions | pt-contractions | *em + o / a / os / as = no / na / nos / nas*, *de + o... = do / da / dos / das*, *em / de + um / uma = num / numa, dum* (recognition), *a + a = à*, *de + ele = dele*; countries and cities with and without the article (*no Brasil, em Portugal, em São Paulo, no Rio*). Trap: *em o Brasil*, *de a Ana*; the contracted article must agree (§4.2). | Travel and transport |
| 9 | `ser-estar` | ser vs estar (and ficar) | (added) | Identity, origin, job, time and events with *ser* (*A festa é na casa da Ana*); location and current state with *estar*; *ficar* for fixed places and for "become" (*fiquei nervoso*) at recognition level. Trap: "permanent vs temporary" myths; *está casado* vs *é casado* (both heard). Added: the roadmap folds this into `estar`. | Feelings and states |
| 10 | `ter` | ter: have, there is, and estar com | pt-ter | *tenho, tem, temos, têm*; age (*Tenho vinte e cinco anos*); spoken *tem* = "there is / there are" (*Tem um banco aqui?*), with *há* named for writing; *estar com fome / sede / frio / calor / sono / medo* and *ter* + the same nouns. Trap: *Eu sou vinte e cinco*, *Eu sou com fome*, *Estou fome* (§4.5). The traps deck links here. | Traps for English speakers |
| 11 | `questions` | Question words | pt-questions | *O que? Quem? Onde? Quando? Como? Quanto / quanta / quantos / quantas? Qual / quais? Por quê?*; yes/no questions by intonation; *né?* for agreement; *por que / porque / por quê* spelling. Trap: no *do* in Portuguese (*Você fala inglês?*); *quanto* agrees (*Quantas irmãs?*). | Questions and connectors |
| 12 | `numbers` | Numbers, time and prices | pt-numbers | 0-1,000; *um / uma, dois / duas* agree; *duzentos / duzentas*; *e* between tens and units; *É uma hora / São duas horas*; prices in reais (a price tag *R$ 25* is read *vinte e cinco reais*; targets and examples write numbers as words, because the aid rejects digits); clock times for a timetable (the routine verbs themselves come in `reflexive`). Trap: *dois horas* for *duas horas*; *é duas*; reading *R$* aloud as dollars. | Numbers, time and prices |
| 13 | `location` | Places and location words | pt-location | *perto de / longe de, em cima de, embaixo de, ao lado de, na frente de, atrás de, dentro de*, all contracting with the article (*perto da praia, em cima do sofá*); *aqui, aí, ali, lá*. Trap: *ao lado de o banco*; the contraction must match the noun's gender (*perto do mercado / da farmácia*). | Home and routine |
| 14 | `possessives` | meu / minha, este / esse | pt-possessives | *meu / minha / meus / minhas*, *seu / sua*, *nosso / nossa*; agreement with the thing owned; *dele / dela* for "his / her" (Brazilian *seu* usually means "your"); *este / esse / aquele* and *isto / isso / aquilo*. Trap: *minha pai* (agreeing with the owner); *sua casa* meant as "his house". | People and family |
| | | **Stage 3: Doing things** | | | |
| 15 | `irregular` | ir, fazer, querer, poder | pt-irregular | *vou / vai / vamos / vão*, *faço / faz*, *quero / quer*, *posso / pode*; *ir a / ir para* + place; *fazer* + weather and time; *Pode...?* for requests. Trap: regularising (*eu fazo*, *eu podo*); *ir* in the wrong person. | Shopping and clothes |
| 16 | `future` | ir + infinitive: plans | pt-future | *vou / vai / vamos / vão* + infinitive, with no word between (*Vou viajar*); time words (*amanhã, no sábado, semana que vem*); the simple future (*falarei*) for recognition in writing only. Trap: *Vou a viajar* (the Spanish *a*), *Vou viajo*. | Days, dates and weather |
| 17 | `gostar` | gostar de: likes | pt-gostar | *gostar de* + noun or verb (*Gosto de café, Gosto de dançar*), the contraction with the article (*Gosto do Brasil, da praia*); *adorar* without *de*; *eu também / eu não / nem eu*. Trap: *Eu gosto café*, *Eu gosto o Brasil*; the Spanish *me gusta* order. | Likes and free time |
| 18 | `prepositions` | Prepositions: de, em, para, por, com | (added) | *para* (destination, purpose, recipient), *por* in a closed set (*por favor, obrigado por, pela manhã, pelo Brasil*), *com / comigo*, *de* for vehicles (*de ônibus, de carro*) but *a pé*; verbs with a fixed preposition (*precisar de, pensar em, chegar em*). Trap: *Preciso ajuda*, *Obrigado para tudo*, *em carro*. Added: the roadmap has no lesson for these. | Travel and transport |
| 19 | `progressive` | estar + -ndo: right now | pt-progressive | *estou falando, está chovendo*; contrast with the simple present for habits; European *estou a falar* named once for recognition. Trap: using the present for something happening this second; *estou ir*. | Work and study |
| 20 | `reflexive` | Reflexive verbs and daily routine | pt-reflexive | *me chamo, me levanto, se chama*; this lesson owns the daily routine (*Eu me levanto às sete, tomo café, saio de casa*); the pronoun before the verb in Brazil; many reflexives are dropped in everyday speech (*eu levanto às sete* is normal), so both forms are accepted. Trap: *levanto-me* as the default (European); *Como você chama?* is accepted, *Como chama você?* is not. | Home and routine |
| 21 | `object-pronouns` | Object pronouns: me, te, ele, a gente | (added) | *me, te, nos* before the verb (*Você me ajuda?*, *Te amo*); everyday *Eu vi ele* vs written *Eu o vi*; *lhe* for "you" in formal service; *comigo, contigo*. Trap: *Ajuda me* (English order); hearing *o / a* as articles. Added: the roadmap has no object-pronoun lesson. | Spoken Brazilian Portuguese |
| 22 | `past` | Pretérito perfeito: what you did | pt-past | Regular *-ar / -er / -ir* (*falei, falou, falamos, falaram*), plus *fui, fiz, tive, estive*; *ontem, semana passada*; *Já + pretérito perfeito* for "have you ever / already" (*Você já foi ao Brasil?*). Trap: copying the English present perfect (*Tenho visto* means "I have been seeing"); *falamos* is both present and past. | Likes and free time |
| 23 | `requests` | Polite requests and commands | pt-requests | *Pode...?, Você pode...?, Me dá...?, Eu queria...*, *por favor*; commands heard from strangers (*Vire à direita, Siga em frente*) and spoken ones (*Fala mais devagar, Espera aí*) for recognition. Trap: *Eu quero* sounding blunt to a waiter; *Dá-me* (European order). | Health and emergencies |
| 24 | `connectors` | e, mas, ou, porque | pt-connectors | *e, mas, ou, porque, então, quando, também, também não*; *porque* vs *por quê*; *mas* vs *mais*. Trap: *mas / mais* (they sound alike in much of Brazil); *por que* vs *porque* spelling. | Questions and connectors |
| 25 | `city` | Getting around the city | pt-city | Asking the way (*Com licença, onde fica...?*), *à direita / à esquerda, em frente, na esquina*, the bus and metro (*Qual ônibus vai para...?*), apps and taxis (*pegar um Uber / um táxi*), addresses. Trap: *direito* vs *direita*; *pegar* (catch) for buses is normal in Brazil. | Around town and directions |

Per-lesson notes for writers:
- Every lesson's practice set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: *ser / estar / ficar* contrasts, *gostar de* + contraction, *estar com* + noun.
- Numbers in targets, examples and accepted answers are written as words (*vinte e cinco reais*), because `respell.js` stops on a digit or *R$* (§6.1). Prices in English prompts may use digits ("R$25").
- `contractions`, `location`, `gostar`, `prepositions` and `city` are where contraction items are densest; their `fill` distractors should be the other gender or the unfused form (*no → na, nos, em o*).
- `estar` and `ser-estar`: items where only an accent separates *está / esta* are strict (§10).
- `present` and `past`: *falamos* is both present and past; prompts give a time word ("yesterday", "every day") so that only one reading is natural.
- `reflexive`: accepted answers include the form without the pronoun where Brazilians drop it (*Eu levanto às sete*) and the form with it (*Eu me levanto às sete*); never the European *levanto-me*.
- `object-pronouns`: accepted answers include the spoken *Eu vi ele* and the written *Eu o vi*; prompts that need one say "(spoken)" or "(written)".
- `requests` uses *o senhor / a senhora* in at least two items, with the prompt cue "(to an older man)" or "(to an older woman)" (§2.3).
- `future` and `gostar` carry the Spanish-transfer distractors of §4.13 (*Vou a viajar*, *muy*), never more than one per item.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards in total; the validator wants at least 230). Card shape: `target | pron | meaning | note`.
- `target`: Brazilian Portuguese, nouns with their article (*a chave*, never *chave*; this includes the Sounds deck), numbers in words, no digits or *R$* (§6.1).
- `pron`: generated by `respell.js` (§6), never hand-written.
- `meaning`: short US English, unique within the deck ("(to a woman)", "(formal)" or a different gloss where two cards would clash).
- `note`: one English line, or empty for at most a quarter of a deck. Agreement, the other gender, European words ("In Portugal: …") and false-friend warnings go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| First steps | Sounds and spelling · Greetings and courtesy · About me · People and family |
| Everyday words | Numbers, time and prices · Days, dates and weather · Food and drink · Shopping and clothes · Home and routine |
| Out and about | Around town and directions · Travel and transport · Health and emergencies · Work and study |
| Conversation | Feelings and states · Likes and free time · Questions and connectors |
| Watch out | Traps for English speakers · Spoken Brazilian Portuguese |

Every deck is linked from at least one lesson (§8), and every lesson links to one deck.

**Deck rules for writers**
- Nouns outside "Sounds and spelling" mostly appear in short phrases that force agreement or a contraction (*a camisa branca*, *os sapatos pretos*, *na praia*). This keeps the standing rule visible in review too.
- Adjectives and participles describing people: give the form that fits the sentence, and name the other gender in the note (*Estou cansado.* → "A woman says cansada.").
- The same Portuguese string never appears in two decks (the validator warns), and never with two different `pron` values (the lint fails). Mind the homographs in §6 (*gosto, olho, jogo, começo, acordo, almoço, sede, colher, este*).
- Every `pron` warning from `respell.js` (`check vowel`, `check x`) goes into the writer's report; the lead resolves it in `LEX` (§6.4).
- **Traps for English speakers** (about 18 cards):
  - about 11 false friends from §4.7: *os parentes, puxar, pretender, a livraria, a fábrica, o colégio, assistir, a notícia, a gripe, animado* (for "excited", with the *excitado* warning in the note), *o costume*;
  - about 5 calques from §4.5 and §4.8: *Tenho vinte anos*, *Estou com fome*, *Tomar banho*, *Tomar uma decisão*, *Já vi esse filme*;
  - 2 Spanish-transfer cards from §4.13 (*muito*, not *muy*; *Vou viajar*, with no *a*), with notes that also make sense to a learner who knows no Spanish.
- **Spoken Brazilian Portuguese** (about 16 cards): *tô, tá, tá bom, pra, cê, né?, a gente, cadê?, Me ajuda?, Eu vi ele, Te amo, valeu, beleza, legal, tipo*. Every note gives the written form and says "Write X in typed answers" where the two differ. Typed answers never require a short form; *pra* is accepted wherever *para* is (§10).

**Five sample cards per deck** (all `pron` values generated by `respell.js`, none with a warning, all matching `pronPattern`; none of the 90 raw targets matches it):

**1. Sounds and spelling** (First steps). Words that show each sound rule: nasal vowels, lh and nh, final l, t and d before i, r and rr. Lessons: `sounds`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| o pão | `oo powng` | the bread | Nasal ão. Compare pau (stick), with no nasal. |
| a mãe | `ah maing` | the mother; mom | ãe is nasal: say it through the nose. Mommy is mamãe. |
| o trabalho | `oo trah-BAH-lyoo` | the work; the job | lh sounds like the lli in million. |
| o carro | `oo KAH-hoo` | the car | rr, and r at the start of a word, sound like English h. caro (expensive) has a light tap. |
| a cidade | `ah see-DAH-jee` | the city | t and d before an i sound turn into ch and j: the final de sounds jee. |

**2. Greetings and courtesy** (First steps). Hello, goodbye, please, thank you and polite openers. Lessons: `greetings`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Bom dia. | `bohng JEE-uh` | Good morning. | Until about noon. After that: boa tarde. |
| Tudo bem? | `TOO-doo bayng` | How are you? | Literally: all good? The answer is the same: Tudo bem! |
| Obrigado. | `oh-bree-GAH-doo` | Thank you. | A man says obrigado, a woman says obrigada: it agrees with the speaker. |
| Com licença. | `kohng lee-SAYN-suh` | Excuse me. | To get past someone or to interrupt politely. |
| Prazer. | `prah-ZAYR` | Nice to meet you. | Short for muito prazer. |

**3. About me** (First steps). Name, where you are from, where you live, your job and your languages. Lessons: `ser`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Eu me chamo Ana. | `ayw mee SHAH-moo AH-nuh` | My name is Ana. | Also: Meu nome é Ana. |
| Sou dos Estados Unidos. | `soh doos ees-TAH-doos oo-NEE-doos` | I'm from the United States. | dos = de + os: the country name is plural. |
| Moro em Boston. | `MAW-roo ayng BAWS-tohng` | I live in Boston. | em + a city, with no article. |
| Sou enfermeira. | `soh ayn-fehr-MAY-ruh` | I'm a nurse. | No um / uma before a job. A man says enfermeiro. |
| Falo um pouco de português. | `FAH-loo oong POH-koo jee pohr-too-GAYS` | I speak a little Portuguese. | Language names are lowercase: português, inglês. |

**4. People and family** (First steps). Family members, friends and words to describe people. Lessons: `adjectives`, `possessives`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| a minha irmã | `ah MEE-nyuh eer-MAHNG` | my sister | In Brazil the article before minha is optional: minha irmã is fine too. |
| os meus pais | `oos mayws pais` | my parents | pais = parents. parentes = relatives. |
| o namorado | `oo nah-moh-RAH-doo` | the boyfriend | Girlfriend: a namorada. |
| Ela é muito simpática. | `EH-luh eh MOOYN-too seem-PAH-chee-kuh` | She's very nice. | simpática agrees with ela. About a man: simpático. |
| os avós | `oos ah-VAWS` | the grandparents | avô (grandfather) has a closed o, avó (grandmother) an open o. |

**5. Numbers, time and prices** (Everyday words). Numbers to 1,000, telling the time, prices in reais and dollars. Lessons: `numbers`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| vinte e cinco | `VEEN-chee ee SEEN-koo` | twenty-five | Tens and units are joined by e. |
| Que horas são? | `kee AW-ruhs sowng` | What time is it? |  |
| São três e meia. | `sowng trays ee MAY-uh` | It's half past three. | meia (hora) is feminine. One o'clock: É uma hora. |
| Quanto custa? | `KWAHN-too KOOS-tuh` | How much is it? | For more than one thing: Quanto custam? |
| cinquenta reais | `seen-KWAYN-tuh heh-AIS` | fifty reais | One real, two reais: Brazil's money. R$ 50 is read cinquenta reais. |

**6. Days, dates and weather** (Everyday words). Days, months, dates, yesterday and tomorrow, and the weather. Lessons: `future`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| segunda-feira | `seh-GOON-duh FAY-ruh` | Monday | Days are numbered from Sunday. In speech, often just segunda. |
| Hoje está quente. | `OH-zhee ees-TAH KAYN-chee` | It's hot today. | Also heard: Está fazendo calor. |
| Está chovendo. | `ees-TAH shoh-VAYN-doo` | It's raining. |  |
| o dia quinze de setembro | `oo JEE-uh KEEN-zee jee seh-TAYM-broo` | September 15 | Day before month; months are lowercase. |
| amanhã | `ah-mah-NYAHNG` | tomorrow | A nasal ã at the end. De manhã = in the morning. |

**7. Food and drink** (Everyday words). Ordering at a café, a restaurant or a por-quilo buffet; everyday food and drinks. Lessons: `articles`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| um cafezinho | `oong kah-feh-ZEE-nyoo` | a small coffee | The little black coffee offered everywhere in Brazil. |
| um pão de queijo | `oong powng jee KAY-zhoo` | a cheese bread | A ball of cheese bread, first from Minas Gerais. |
| A conta, por favor. | `ah KOHN-tuh pohr fah-VOHR` | The check, please. |  |
| Eu queria um suco de laranja. | `ayw keh-REE-uh oong SOO-koo jee lah-RAHN-zhuh` | I'd like an orange juice. | queria (literally: I wanted) is the polite way to order. |
| o feijão com arroz | `oo fay-ZHOWNG kohng ah-HOHS` | rice and beans | Portuguese puts the beans first. |

**8. Shopping and clothes** (Everyday words). Clothes, colors, sizes and paying. Lessons: `irregular`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| a camisa branca | `ah kah-MEE-zuh BRAHN-kuh` | the white shirt | Color after the noun, and it agrees: camisa branca, sapatos brancos. |
| os sapatos pretos | `oos sah-PAH-toos PRAY-toos` | the black shoes |  |
| Posso experimentar? | `PAW-soo ees-peh-ree-mayn-TAHR` | Can I try it on? |  |
| Vou levar. | `voh leh-VAHR` | I'll take it. | In speech the "it" is usually left out. |
| Aceita cartão? | `ah-SAY-tuh kahr-TOWNG` | Do you take cards? | To the shop assistant: the você form, with no pronoun. |

**9. Home and routine** (Everyday words). Rooms and things at home, and a daily routine. Lessons: `location`, `reflexive`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Eu acordo às sete. | `ayw ah-KAWR-doo ahs SEH-chee` | I wake up at seven. | às = a + as (horas). |
| Eu tomo banho de manhã. | `ayw TOH-moo BAH-nyoo jee mah-NYAHNG` | I shower in the morning. | tomar banho = take a shower (or a bath). Not pegar banho. |
| a cozinha | `ah koh-ZEE-nyuh` | the kitchen |  |
| Tem dois quartos. | `tayng doys KWAHR-toos` | There are two bedrooms. | tem = there is / there are, in everyday speech. |
| o banheiro | `oo bah-NYAY-roo` | the bathroom |  |

**10. Around town and directions** (Out and about). Places in town, asking where things are, and following directions. Lessons: `estar`, `city`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Onde fica o banheiro? | `OHN-jee FEE-kuh oo bah-NYAY-roo` | Where is the bathroom? | ficar for where places and fixed things are. |
| à direita | `ah jee-RAY-tuh` | on the right | à = a + a. On the left: à esquerda. |
| Siga em frente. | `SEE-guh ayng FRAYN-chee` | Go straight ahead. | What a stranger will tell you. |
| o ponto de ônibus | `oo POHN-too jee OH-nee-boos` | the bus stop |  |
| É perto daqui. | `eh PEHR-too dah-KEE` | It's close to here. | daqui = de + aqui. Far: longe. |

**11. Travel and transport** (Out and about). Tickets, buses, flights, getting around and hotel basics. Lessons: `contractions`, `prepositions`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| a passagem | `ah pah-SAH-zhayng` | the ticket | For buses, planes and long trips. |
| Vou de ônibus. | `voh jee OH-nee-boos` | I'm going by bus. | de + vehicle: de carro, de metrô. But a pé = on foot. |
| o aeroporto | `oo ah-eh-roh-POHR-too` | the airport |  |
| A que horas sai o voo? | `ah kee AW-ruhs sai oo VOH-oo` | What time does the flight leave? |  |
| no Brasil | `noo brah-ZEEW` | in Brazil | no = em + o: Brazil takes the article o. |

**12. Health and emergencies** (Out and about). Saying what hurts, the pharmacy, and asking for help. Lessons: `requests`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Estou com dor de cabeça. | `ees-TOH kohng dohr jee kah-BAY-suh` | I have a headache. | estar com + noun for how you feel now. |
| Estou doente. | `ees-TOH doh-AYN-chee` | I'm sick. |  |
| Socorro! | `soh-KOH-hoo` | Help! | For emergencies. To ask a favor: Pode me ajudar? |
| Pode chamar uma ambulância? | `PAW-jee shah-MAHR OO-muh ahm-boo-LAHN-syuh` | Can you call an ambulance? | pode: the você form of poder. |
| a farmácia | `ah fahr-MAH-syuh` | the pharmacy |  |

**13. Work and study** (Out and about). Jobs, the workplace, classes and everyday work verbs. Lessons: `present`, `progressive`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Eu trabalho num escritório. | `ayw trah-BAH-lyoo noong ees-kree-TAW-ryoo` | I work in an office. | num = em + um. |
| a reunião | `ah heh-oo-nee-OWNG` | the meeting |  |
| Estou estudando português. | `ees-TOH ees-too-DAHN-doo pohr-too-GAYS` | I'm studying Portuguese. | estar + -ndo for right now. |
| A minha chefe é do Rio. | `ah MEE-nyuh SHEH-fee eh doo HEE-oo` | My boss is from Rio. | chefe is the same word for a man or a woman; the article shows which. |
| a faculdade | `ah fah-koow-DAH-jee` | college; university | colégio is a school, not a college. |

**14. Feelings and states** (Conversation). How you feel, with estar and estar com. Lessons: `ser-estar`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Estou cansado. | `ees-TOH kahn-SAH-doo` | I'm tired. | A woman says cansada. |
| Estou com fome. | `ees-TOH kohng FOH-mee` | I'm hungry. | Literally: I am with hunger. |
| Estou feliz. | `ees-TOH feh-LEES` | I'm happy. | feliz is the same for men and women. |
| Estou com saudade. | `ees-TOH kohng sow-DAH-jee` | I miss you; I miss it. | saudade = missing someone or something. |
| Estou preocupada. | `ees-TOH preh-oh-koo-PAH-duh` | I'm worried. | Said by a woman; a man says preocupado. |

**15. Likes and free time** (Conversation). Hobbies, sports, likes and dislikes, and what you did on the weekend. Lessons: `gostar`, `past`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Eu gosto de futebol. | `ayw GAWS-too jee foo-chee-BOHW` | I like soccer. | gostar always takes de: never gosto futebol. |
| Você gosta de dançar? | `voh-SAY GAWS-tuh jee dahn-SAHR` | Do you like to dance? |  |
| o fim de semana | `oo feeng jee seh-MAH-nuh` | the weekend |  |
| Fui à praia. | `fooy ah PRAI-uh` | I went to the beach. | fui = I went. à = a + a. |
| Adoro música brasileira. | `ah-DAW-roo MOO-zee-kuh brah-zee-LAY-ruh` | I love Brazilian music. | adorar takes no de. |

**16. Questions and connectors** (Conversation). Question words and the small words that join sentences. Lessons: `questions`, `connectors`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Por quê? | `pohr kay` | Why? | At the end of a sentence, quê has a circumflex. Because = porque. |
| Quando? | `KWAHN-doo` | When? |  |
| Quantos anos você tem? | `KWAHN-toos AH-noos voh-SAY tayng` | How old are you? | Literally: how many years do you have? |
| mas | `mahs` | but | mais (more) sounds almost the same in much of Brazil. |
| também | `tahm-BAYNG` | also; too | Not either: that is também não. |

**17. Traps for English speakers** (Watch out). False friends and word-for-word copies from English. Lessons: `ter`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| os parentes | `oos pah-RAYN-chees` | the relatives | Not parents. Parents = os pais. |
| puxar | `poo-SHAHR` | to pull | Not push. Push = empurrar. Check the sign on the door. |
| pretender | `preh-tayn-DAYR` | to intend | Not pretend. Pretend = fingir. |
| a livraria | `ah lee-vrah-REE-uh` | the bookstore | Library = a biblioteca. |
| Tenho vinte anos. | `TAY-nyoo VEEN-chee AH-noos` | I'm twenty. | Age uses ter (have): never sou vinte. |

**18. Spoken Brazilian Portuguese** (Watch out). Everyday spoken forms you will hear: tô, tá, pra, a gente, né, and pronouns before the verb. Lessons: `object-pronouns`.

| Portuguese | `pron` | Meaning | Note |
|---|---|---|---|
| Tô cansado. | `toh kahn-SAH-doo` | I'm tired. | Spoken short form of estou. Write estou in typed answers. |
| Tá bom. | `tah bohng` | OK; fine | tá = está. The everyday way to say OK. |
| a gente | `ah ZHAYN-chee` | we | a gente takes the ele / ela form: a gente vai. |
| Eu vi ele ontem. | `ayw vee AY-lee OHN-tayng` | I saw him yesterday. | Everyday Brazilian speech. In formal writing: Eu o vi ontem. |
| Me ajuda? | `mee ah-ZHOO-duh` | Can you help me? | Pronoun first is normal in Brazilian speech. |

**Localisation** (examples, dialogues, practice):
- **Names** (all checked through `respell.js`):
  - Brazilian: Ana, Beatriz, Camila, Fernanda, Juliana, Larissa, Mariana; Bruno, Felipe, Gabriel, Lucas, Mateus, Pedro, Rafael, Thiago.
  - English-speaking learner characters: Emma, Jack, Ryan, Megan. They are in `EXC` with a Brazilian reading (`EH-muh`, `JEH-kee`, `HAI-ahn`, `MEH-gahn`). Any other English name must be added to `EXC` before it appears in a Portuguese string, because the rules mangle English spelling (*Jack* would come out with a `zh`).
  - No celebrities.
- **Places:**
  - Brazil: São Paulo, Rio de Janeiro, Salvador, Recife, Belo Horizonte, Florianópolis, Brasília, Porto Alegre, Manaus, Curitiba, Fortaleza; the regions Bahia and Minas Gerais.
  - US Brazilian communities (§5): Boston, Miami, Orlando, Nova York, Flórida, Massachusetts, Nova Jersey (the non-Portuguese names are in `EXC`). Smaller towns (Framingham, Newark, Danbury) stay out of Portuguese strings.
  - Portugal and Lisboa appear only in "In Portugal:" notes.
- **Food:** pão de queijo, cafezinho, feijoada, feijão com arroz, coxinha, brigadeiro, açaí, tapioca, moqueca, farofa, churrasco, suco de laranja, guaraná; a *restaurante por quilo* (pay by weight) and a *padaria*. *Caipirinha* only in adult scenes.
- **Money:** reais in Brazil scenes (*dez reais*; singular *um real*); dollars in US scenes (*cinco dólares*). Never euros. Written as words in targets.
- **Measures and dates:** day before month (*quinze de setembro*), months and weekdays lowercase; Celsius and kilometres in Brazil scenes. Weekdays by number (*segunda-feira*), shortened in speech (*segunda*).
- **Settings:** a padaria, a por-quilo restaurant, a pharmacy, a bus stop and the metro, an office, a coworker's family churrasco, the beach, a trip to Rio or Salvador; in the US, a Brazilian bakery or church community in Boston or Florida.

## 10. Typing and script

**Script.** Latin letters plus *á â ã à é ê í ó ô õ ú ç*. `targetScript`: `[A-Za-zÁÂÃÀÉÊÍÓÔÕÚÇáâãàéêíóôõúç]` (compiled with the `u` flag). Every Portuguese string must contain at least one character from this class. *ü*, *k, w, y* appear only in names and loanwords and need no key.

**Accent bar** (`keys`): `á â ã à é ê í ó ô õ ú ç`, grouped by vowel so the learner finds the right mark next to its letter. *à* is the rarest and appears at A1 only in *à / às*. Capitals are not on the bar, and the matcher does not check case.

**`accents: true`.** As in the Spanish profile, the flag means three things:
- the target language uses accent marks;
- accent marks are part of the correct answer;
- the engine's accent-insensitive comparison is allowed, but only to grade an answer as **"almost"** (accepted, with the correct form shown).

It does **not** mean that marks may be ignored silently (BUILD-PLAN-EN: "a missing accent is 'almost'").

**Strict items** (marked `!strict`, so an accent-only difference is wrong, not "almost"). The validator already demands `!strict` on any `fill` whose distractor differs from the answer only by an accent. Mark an item strict when the accent is the point being tested or changes the meaning:
- *e / é* ("and" / "is") and *esta / está* ("this" / "is") in `ser`, `estar`, `ser-estar`;
- *avô / avó* (grandfather / grandmother) and *pais / país* (parents / country) in `possessives` and the family deck items;
- *por / pôr* ("by, for" / "to put"), *pode / pôde* ("can" / "could") in `past` and `irregular`;
- *nos / nós* ("us" / "we") in `present` and `object-pronouns`;
- *da / dá* ("of the" / "gives") and *a / à* ("the" / "to the") in `contractions`, `location`, `city`;
- *se / sé* ("if, -self" / "cathedral") and *mas / más* ("but" / "bad", feminine plural) only where an item contrasts them;
- *tem / têm* ("has" / "have", plural): an agreement pair, strict in `ter`;
- any `mc` item whose options differ only by an accent.

Everything else (for example *você* typed as *voce*, *não* as *nao*, *cabeça* as *cabeca*) is "almost". The missing tilde (*ã, õ*) and the missing cedilla (*ç*) are treated like any other missing mark: no A1 pair depends on them [inference], and the engine's `foldAcc` (`src/app.html`) and the validator's `fold` already strip every combining mark except on *ñ*, so *ã → a* and *ç → c* fold with no special case. (This is the opposite of Spanish *ñ*, which had to be protected.)

**Punctuation.**
- The engine strips `. , ! ? ~` and quotes (PRACTICE-SPEC), which covers Portuguese, since Portuguese has no inverted ¿ ¡.
- **Hyphens** are part of the word in *segunda-feira, guarda-chuva* and the European pronoun order (*chamo-me*, never taught). A learner may type *segunda feira*. Writers list both spellings in `a` when a hyphenated word is in a `type` answer. **Engine check:** whether the normaliser should treat a hyphen as a space.
- **Apostrophes** (*copo d'água*, *pingo d'água*) are rare at A1: avoid them in `type` answers. If the engine strips the apostrophe as a quote, *dágua* and *d água* would differ from the model answer; **engine check** (§11).

**Case.** Not checked. Authors capitalise the first word of sentences in `a[0]`. Days, months and language and nationality names are lowercase in Portuguese (*segunda-feira, setembro, português, americano*), and model answers must follow that.

**What a typed answer must include**
- Every word Portuguese requires: articles where Portuguese uses them (*Gosto do café* when "the coffee" is meant; *O Brasil é grande*), *de* after *gostar* and *precisar*, the contraction (*no, na, do, da*), *com* in *estar com*.
- The correct agreement, contraction and verb ending (the standing rule).
- Accent marks on strict items.

**What it need not include**
- *eu* and *nós*: authors list the versions with and without them. For "you" prompts, the bare verb is listed beside *Você…* (§2.3).
- The reflexive pronoun where Brazilians drop it (`reflexive`, §8).
- Final punctuation and capitals.
- Short forms: never required. *pra* is accepted wherever *para* is (authors list it), and *tô, tá, cê* are not accepted in typed answers unless the item is in the Spoken deck's lesson and says "(spoken)".

**`fill` and tile fallbacks.** The three wrong options `o` should be agreement, contraction or person twins wherever possible (*branca → branco, brancas, brancos*; *na → no, nas, em a*; *moramos → mora, moram, moro*), so the tap fallback still tests the standing rule.

## 11. Gaps and unverified claims

**Evidence that could not be opened, or was read second-hand**
- **Learner errors.** Only one production study with English-L1 learners of Portuguese was read (Tasseva-Kurktchieva & Fahey 2025), and its 25 learners all knew Spanish, so it says nothing about English-only learners. No learner corpus of English speakers writing Portuguese was opened. Every other error zone in §4 (contractions, verb endings, *ser / estar / ficar*, calques, prepositions, false friends, the present perfect, object pronouns, accent marks) rests on teaching blogs and schools [practitioner opinion], with no counts.
- **Pronunciation.** No first-hand study of English speakers' nasal vowels, open / closed *e / o*, *t / d* palatalisation or *r / rr* could be opened (§4.9–4.11). The sound rules themselves come from a Wikipedia mirror [tertiary] and one university course (*Tá falado*).
- ***A gente* figures** (Zilles 2005, Borges 2004, Muniz 2008) are quoted from Pacheco, Carvalho & Scherre 2024, not read. The Northeastern *tu / você* figures are a review's quotations of earlier studies (Scherre, Andrade & Catão 2021).
- **The English-speaker masculine default** (§4.1) is supported directly for Spanish only (*Hispanic Studies Review*); for Portuguese it is inferred.
- **False friends** are teaching glossaries with no frequency or error data.

**Learners**
- MLA enrolment figures were read through a Wikipedia table, not the MLA report; Milleret's 2009 figures and her survey shares (45% Spanish speakers, 18% heritage, 15.9% English-only) are instructor estimates from about 2010 and may be dated.
- Duolingo's ranking for Portuguese is global; no US-only figure and no US motivation survey for Portuguese was found (§5).
- The Migration Policy Institute figures are for 2017.

**Curriculum**
- The MIT and UCSB orders come from course calendars, not from the *Ponto de Encontro* contents page, which was not opened. The USP A1 programme is known only through the roadmap's note (five blocks); it was not re-opened for this profile.

**Variant and register** [inference, for a native check]
- §2.1's vocabulary table and the European equivalents.
- §2.3: subject pronouns dropped less than in Spanish (*eu, nós* can go; *você, ele, ela* usually stay); service staff using *você* or no pronoun rather than *o senhor*; *a gente falamos* never accepted.
- §4.5: *estar com fome* as the everyday form over *tenho fome*.
- §8 `reflexive`: *eu levanto às sete* (no pronoun) as normal speech.

**The pronunciation aid** (for a native check, ideally a Brazilian phonetician)
- The open / closed quality in `LEX` (about 360 forms) is the author's recall, including this session's additions. Confirmed in a dictionary source (§6): *teve, esteve, fez, treze, catorze, desde* closed; *dezessete, dezenove* open. Not confirmed: *biblioteca* and the strong preterites *fizeram, tiveram, estiveram, puderam, quiseram, disseram, souberam, trouxeram, vieram, deram* as open; *comeram, beberam, venderam, escreveram, escrevo* as closed; *moleque, chiclete* as open. Two silent mistakes in the list were found in the first session (§6), so more are likely.
- The homograph readings (§6) and the Brazilian readings in `EXC` of English names and US places (*Emma, Jack, Ryan, Megan, Massachusetts, Jersey, Boston, Miami, Orlando, York*).
- `ng` as the nasal convention is not taken from any guide that was opened (§6).
- **Final *r*:** which coda *r* the `pt-BR` voices on the target devices use was not checked, so the aid's `r` can disagree with the audio (§6.5).
- No study compares respelling, IPA and no aid for English-speaking learners of Portuguese; how well learners read the aid is unverified.
- The ~640 test strings and their expected forms are the author's judgment, not a native speaker's.

**Sample cards and notes** (§9): the cultural notes (*cafezinho*, *pão de queijo* from Minas Gerais, *segunda-feira* counted from Sunday, *mas / mais* sounding alike in much of Brazil) are [inference] and need a native read before shipping.

**Engine and pipeline** (for the lead)
- What `accents:true` means in the engine: "almost", not silent acceptance (§10).
- Whether the normaliser treats a hyphen as a space (*segunda feira*), and what it does with apostrophes (§10).
- `features.pron` must be `true` for `en-pt` (§6).
- `respell.js` should become the pipeline's only source of `pron`; writers report warnings and the lead edits `LEX` / `EXC` (§6.4).
- `ser-estar`, `prepositions` and `object-pronouns` have an empty `roadmap` field. The roadmap's `pt-estar` title ("estar, and ser vs estar") no longer matches its lesson, whose contrast half moved to `ser-estar`; the roadmap link for "ser vs estar" should point to `ser-estar`.
- Whether `pt-BR` TTS voices exist on the devices the app targets (a phase-0 engine question).

## Sources

Web pages opened and used for this profile (2026-11-18). The first session's list was reconstructed in the second session from the links cited inline in §1–§6; the last three entries were opened in the second session, to check vowel quality in §6. Other claims added in the second session are tagged [inference].
- [Tasseva-Kurktchieva & Fahey (2025). *Applied Psycholinguistics* 46, e11 (gender and number agreement in L3 Portuguese)](https://www.cambridge.org/core/product/CD839F7D60A13EB87B7F656306519985/core-reader)
- [*Hispanic Studies Review*: What can nonce words tell us about the acquisition of nominal gender agreement in SLA](https://hispanicstudiesreview.cofc.edu/article/91394)
- [Scherre, Andrade & Catão (2021). *Revista de Letras* 40, UFC (tu / você review)](https://repositorio.ufc.br/bitstream/riufc/65548/1/2021_art_mmpscherrecqandrade.pdf)
- [Pacheco, Carvalho & Scherre (2024). *Languages* 9(3):98 (a gente / nós)](https://mdpi.com/2226-471X/9/3/98)
- [Milleret, CLASP commissioned paper on Portuguese in US higher education](https://claspprograms.org/uploads/CLASP_Commissioned_Paper_Milleret_FINALwBio-1399480525.pdf)
- [Migration Policy Institute (2017). Brazilian immigrants in the United States](https://www.migrationpolicy.org/article/brazilian-immigrants-united-states-2017)
- [Wikipedia: List of most commonly learned second languages in the United States (MLA 2021 census figures)](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)
- [Duolingo (2024). Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)
- [University of Arizona: Why study Portuguese?](https://spanish.arizona.edu/undergraduate/prospective-students/why-study-portuguese)
- [MIT OpenCourseWare 21G.801 Portuguese I (Fall 2011): assignments calendar](https://ocw.mit.edu/courses/21g-801-portuguese-i-fall-2011/pages/assignments)
- [UC Santa Barbara: Portuguese 2 schedule (Winter 2020)](https://www.spanport.ucsb.edu/sites/default/files/sitefiles/undergrad/languageprogram/courses/Winter20/Port%202%20W20.pdf)
- [Kelm, *Tá falado*, lesson 11 (UT Austin, COERLL)](https://coerll.utexas.edu/brazilpod/tafalado/pdf/tafalado_11.pdf)
- [Wikipedia: Portuguese phonology (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Portuguese_phonology)
- [The Brazilian Ways: common mistakes English speakers make in Brazilian Portuguese](https://thebrazilianways.com/common-mistakes-english-speakers-brazilian-portuguese/)
- [Caminhos Language Centers: mistakes English speakers make in Brazilian Portuguese](https://caminhoslanguages.com/blog/mistakes-english-speakers-make-in-brazilian-portuguese/)
- [Elon: calque errors in Brazilian Portuguese](https://elon.io/grammar/portuguese-brazil/errors/calque-errors)
- [Mango Languages: expressions with estar com or ter](https://www.mangolanguages.com/resources/learn/grammar/brazilian-portuguese/how-to-use-the-verb-ter-in-brazilian-portuguese/study-resource-expressions-with-estar-com-or-ter)
- [Living Language: English and Portuguese false friends](https://www.livinglanguage.com/blog/2014/11/15/english-and-portuguese-false-friends)
- [Speaking Brazilian: false friends in Portuguese and English](https://www.speakingbrazilian.com/dont-make-these-mistakes-false-friends-portuguese-english/)
- [Kaikki (Wiktionary extract): *teve*](https://kaikki.org/dictionary/All%20languages%20combined/meaning/t/te/teve.html)
- [Kaikki (Wiktionary extract): *fez*](https://kaikki.org/dictionary/Portuguese/meaning/f/fe/fez.html)
- [espeak-ng, `dictsource/pt_list` (Chromium OS mirror)](https://chromium.googlesource.com/chromiumos/third_party/espeak-ng/+/cd20ac3b30963450080f20b0dbd1cc8767fa6a1d/dictsource/pt_list)

Local project files read: `docs/briefs/target-profile-pt.md`, `docs/TARGET-BRIEF.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/PRACTICE-SPEC.md` and `docs/BUILD-PLAN-EN.md` (the parts on matching and the pron line), `docs/profiles/en-es.md` (as the model), `tools/target/es/profile.json`, `packs/roadmaps.js` (entry `pt`), `tools/target/validate.js` and `tools/target/lib.js` (what the validator checks), and the `foldAcc` line of `src/app.html` (accent folding).
