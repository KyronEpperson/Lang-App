# English speakers learning European Portuguese: course profile

Course `en-ptpt`: European Portuguese of Portugal, Lisbon standard, for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in European Portuguese. Machine-readable twin: `tools/target/ptpt/profile.json`. Pronunciation generator: `tools/target/ptpt/respell.js` (§6).

The Brazilian course `en-pt` is a different course. Do not edit it, and do not reuse a Brazilian sound, a Brazilian "you", or a Brazilian brand word here. Where Portugal and Brazil share a rule, this profile says so and points at the same engine behavior.

**Evidence tags.**

- **[research-backed]**: a study or a primary syllabus page opened for this profile. None of the numbered error rates from the Brazilian profile were re-opened, so they are not repeated.
- **[curriculum convention]**: a syllabus or a university sheet opened for this profile. Those sheets are category lists, not week-by-week timetables.
- **[practitioner opinion]**: a teacher's or a guide's page, with no dataset behind it.
- **[tertiary]**: an encyclopedia or a dictionary entry opened for this profile. Wiktionary IPA below is this tag.
- **[inference]**: this profile's own step from those pages. Anything a writer would copy that is only an inference is also listed in §11.

Untagged rules in §6 to §10 are design decisions.

## 1. Summary

- **Variant and voice:** European Portuguese of Portugal, Lisbon standard, `ttsLang` `pt-PT`, `voiceMatch` `^pt-PT` so a Brazilian voice cannot read the course. Prices in euros. Scenes in Portugal, plus family ties in the Portuguese-ancestry cities of southeastern New England (§5).
- **Register:** *tu* with friends, family, peers and children, and the *tu* verb. *O senhor* / *a senhora*, or a bare third-person verb, for strangers, older people and service. *Você* is named and not drilled. *Vocês* is the plural "you". *Vós* is recognition only.
- **Biggest traps (§4):** agreement, including the article with a possessive and *obrigado* / *obrigada*; contractions; the *tu* ending against the *ele* ending; choosing *tu* or *o senhor*; clitic place (*chamo-me*, but *não me chamo*); *ser*, *estar* and *ter*; Portugal words against English or Brazilian words; and the sound of reduced vowels and final *s*.
- **Standing rule (§7):** agreement. Gender and number, the article in *o meu* / *a minha*, contractions, and the verb ending with its subject, including the *tu* form. Not clitics, and not the *sh* of final *s*. The keyword test below was run.
- **Pronunciation aid (§6):** a generated English-letter respelling, Lisbon, not Brazil. *Bom dia* is `bohng DEE-uh`, not the Brazilian *jee*. Stress is in CAPITALS. `tools/target/ptpt/respell.js` is the only source of a `pron`.
- **Lessons (§8):** 28. All 27 roadmap items stay. *articles* moves to just before *ser*. One lesson is added, *compliments*, after food and before the city. That is the cap of three added lessons, and only one was used.
- **Decks (§9):** 17 decks in 5 groups, including "Traps for English speakers" and "Compliments".
- **Typing (§10):** same Latin script and the same accent keys as Brazilian. A missing accent is "almost". No matcher change. `features.pron` is still emitted `false` by `gen.js`, as for every course; the lead sets it `true` when the pack is built.

## 2. Variant and register

### 2.1 Variant

The roadmap variant is European Portuguese of Portugal, Lisbon standard, voice `pt-PT`. Spelling follows the 1990 Orthographic Agreement as used in Portugal [curriculum convention: the roadmap note; the kept contrasts are on the linguagem.pt differences page].

One house rule: write the Portugal spelling from after the Agreement. Teach *ação*, not *acção*. Learners will still see older spellings on signs and in books. Those are recognition only, not typed answers.

The Agreement does not erase every Portugal / Brazil difference, because the pronunciation differs [practitioner: linguagem.pt, diferenças PE/PB, the spelling table opened there]:

| Write | Do not teach as the Portugal form | Why that page gives |
|---|---|---|
| facto | fato | the *c* is pronounced in Portugal |
| receção | recepção | the *p* is silent in Portugal |
| amónia | amônia | the stressed vowel is open in Portugal |
| António | Antônio | open *ó* in Portugal, closed in Brazil |

Do not teach Brazilian closed-vowel spellings of those words. *Húmido* / *úmido* was not on the part of that table read for this profile; it is not a taught pair (§11).

Regional speech is recognition, not a second course. Northern *ou* and *ei* often stay diphthongs; the Lisbon aid uses the monophthong *oh* for *ou* and *uhy* for *ei* (§6). A uvular *r* in the coda is gaining ground in Lisbon; the aid keeps the tap [tertiary: Wikipedia, Portuguese phonology]. The north still has an alveolar trill for the strong *r* [tertiary: same page; Wiktionary gives Northern Portugal `/ˈka.ru/` for *carro* beside the Portugal `/ˈka.ʁu/`]. Do not drill the northern trill.

The gerund in Alentejo, the Algarve, Madeira and the Azores was not on a page opened for that claim (§11). What was opened: modern European Portuguese uses *estar a* + infinitive for an action in progress, and the gerund is rare in that function [practitioner: linguagem.pt differences]. NOVA's A1 grammar sheet lists *estar a* + infinitive [curriculum convention]. The 2012 EPE A1 programme, in the lines searched, lists *ir* + infinitive and does not name *estar a*. Teach *estar a* from NOVA, not from EPE.

### 2.2 Which "you" is first

Two opened pages do not use the same grouping, and the course follows the finer one.

- linguagem.pt, forms of address (European Portuguese) [practitioner]: *tu* is the intimate form, alive in Portugal, for family, friends, close colleagues, children, and among young people almost by default. It takes the second-person singular and *teu* / *tua*. *Você* is an uncomfortable middle: less intimate than *tu*, less respectful than *o senhor*, and often felt as impolite to a superior or an older stranger. Many speakers drop the pronoun and use the bare third person: *Quer um café?* rather than *Você quer um café?*. *O senhor* / *a senhora* is the deferential form for strangers, older people, and service or hierarchy, with the third person. *Vós* is archaic in the standard (religious and solemn language) and still an ordinary plural in some northern dialects (Minho, Trás-os-Montes, the Douro). *Vocês* is the everyday plural of both *tu* and *você*, with the third-person plural.
- linguagem.pt, diferenças PE/PB [practitioner]: a coarser line, "PE uses *tu* (informal) and *você* / *o senhor* (formal or distant)". The course does not teach *você* as the polite default. The forms-of-address page is the one writers follow. The coarser line is why a textbook or a Brazilian habit will keep offering *você*.

Applied in every lesson:

- Friends, family, peers, children, and a prompt with no social cue: *tu* and the *tu* verb. The subject pronoun is often left out. *Tu falas* and *Falas* are both natural; list both when the item is not about the pronoun.
- An older stranger, a shop, a doctor, or any prompt that says "(to an older man)" or "(to an older woman)": *o senhor* / *a senhora*, or the bare third person (*Quer um café?*). The verb is the *ele* / *ela* form, never the *tu* form.
- *Você*: one recognition note in the address lesson. Not a drilled answer. English prompts do not say "(formal)" unless the item is testing the address itself.
- *Vocês* for plural "you", *eles* form. *Vós*: one line, not a paradigm.
- *Nós* is the taught "we". *A gente* is not the default and is not in the standing-rule keywords.

*Seu* / *sua* is the possessive for *o senhor*, *a senhora* and *você*, and it is also "his / her" [practitioner: the same forms-of-address page]. For *tu*, teach *teu* / *tua*. The article before a possessive is drilled (*o meu pai*, *a minha mãe*, *os teus irmãos*) because the roadmap and the EPE A1 list put the article in the sequence *artigo* + *possessivo* + *nome* [curriculum convention]. Ciberdúvidas, on the possessives page opened for this research, says the article can be left out when the possessive modifies a noun, and is required when the possessive stands for the noun. So a bare *meu pai* is not a grammar error. Prompts that test the article say "(with the article)". Accept the bare possessive as well when the item is not about the article. Do not tell the learner the article is obligatory in every sentence.

### 2.3 Greetings and the clock

Ciberdúvidas on *bom dia* and *boa tarde* (the page opened for this research): morning is dawn to noon, afternoon is noon to sunset, night is after sunset until dawn, and many people use lunch as the cut instead. There is no separate *boa madrugada* greeting to teach. Late night and evening are both *Boa noite*, with two English glosses, which is what `greet` in the profile encodes.

*Obrigado* agrees with the speaker in the forms the course drills. Wiktionary's usage note, opened with the Portugal IPA, says some women say *obrigado* as well, and that the agreeing plural is standard but rare. Writers still drill *obrigado* / *obrigada*. A woman who says *obrigado* is a note, not the taught answer (§11).

## 3. Glossary

Each term once. Learner-facing words stay plain. "European Portuguese" is the name, not "Portugal Portuguese". "In Brazil:" is the recognition label.

- **Noun, gender, number, agreement.** *Casa* is feminine. *O* / *a* and the adjective match it. Agreement is the standing rule.
- **Article.** *O, a, os, as, um, uma.* The definite article also sits in front of a possessive in the pattern the course drills.
- **Contraction.** *Em* + *o* is *no*. *De* + *a* is *da*. *A* + *a* is *à*. The fused word is the answer.
- **Subject pronoun and verb form.** *Eu, tu, ele, ela, nós, vocês, eles, elas.* "The *tu* form" means the second-person singular ending (*falas, és*). "The *ele* form" is the third-person singular, and it is also the form for *o senhor*, *a senhora* and *você*. The subject is often dropped.
- **Clitic.** The unstressed pronoun *me, te, se*. **Enclisis** means the pronoun after the verb (*chamo-me*). **Proclisis** means the pronoun before the verb (*não me chamo*). Learners can say "after the verb" and "before the verb". Mesoclisis (*chamar-me-ei*) is not A1.
- **Infinitive, stem, ending.** *Falar* is the infinitive. *Fala-* is the stem in the present. *-s* on *falas* is the *tu* ending.
- **Progressive.** *Estar a* + infinitive (*estou a trabalhar*). The *-ndo* form is the gerund. In Brazil that gerund is the everyday progressive. Here it is a recognition note, not the answer.
- **Pretérito perfeito.** The simple past: *falei, comi, fui*. Portugal writes an accent on the "we" past of *-ar* verbs: *falámos*, against present *falamos*.
- **Nasal vowel, open vowel, closed vowel.** *Pão* and *mãe* are nasal. *Avó* is open *ó*, *avô* is closed *ô*. *Porta* is open, *Porto* is closed.
- **False friend.** A word that looks helpful and is not. Only the pairs in §4.8, which were on an opened page.
- **Calque.** An English pattern translated word for word (*em o Porto*, *Me chamo*).

## 4. Error zones, ranked

Typeable errors that hit every sentence come first. Each line is wrong → right. Ranks are this profile's judgment of what an English-speaking beginner will do, not a counted study. No percentage from the Brazilian profile is repeated.

1. **Agreement** [curriculum convention: EPE names *concordâncias* as a general competence; NOVA lists gender and number of nouns and adjectives before the verb]. *O casa* → *a casa*. *Dois casa* → *duas casas*. *O meu mãe* → *a minha mãe*. *Obrigado* from a woman, when the item is testing agreement → *obrigada*. The article and the adjective are in the standing rule, so this zone is retested in every set.
2. **Contractions** [curriculum convention: EPE lists the articles and the contractions; the roadmap examples are *no Porto* and *à praia*]. English keeps the words separate. *Em o Porto* → *no Porto*. *De a Ana* → *da Ana*. *A a praia* → *à praia*. *De o queijo* → *do queijo*.
3. **Verb endings, especially *tu*** [practitioner: forms of address; the *tu* form is a different ending, and *o senhor* is not]. English has one "you". *Tu fala* → *tu falas*. *Tu é* → *tu és*. *O senhor falas* → *o senhor fala*. *A senhora és* → *a senhora é*.
4. **Choosing *tu*, *o senhor*, or *você*** [practitioner: §2.2]. A textbook or a Brazilian habit supplies *você* for every "you". The right answer is *tu* or *o senhor* / the bare third person, as the prompt cues. *Você fala* as the default polite line → *Fala* or *O senhor fala*.
5. **Clitic place** [practitioner: linguagem.pt differences, *chamo-me* against Brazilian *me chamo*; the roadmap's own pair *levanto-me* / *não me levanto*]. *Me chamo Ana* → *Chamo-me Ana*. *Não levanto-me* → *Não me levanto*. Not the standing rule: a sounds lesson has nothing for it to grip.
6. **Ser, estar, and ter** [curriculum convention: NOVA lists *ser* and *estar* as a pair, and *ter* and *haver*]. *Sou de Lisboa* for origin. *Estou em Lisboa* for location. *Estou cansado* for a current state. *Estou a trabalhar* for right now, not *estou trabalhando*. *Há uma farmácia* for "there is". Do not teach "permanent versus temporary" as the rule (§11). Do not teach *tenho fome* or *estou com fome* as the everyday winner until a Portugal page is opened (§11). Age with *ter* (*tenho vinte anos*) is the same gap.
7. **Portugal words, not the English or the Brazilian word** [practitioner: linguagem.pt differences, the everyday table; tertiary: Wiktionary *autocarro* "(Portugal) bus", *comboio* as the Portugal word for the train, *bica* as Lisbon and southern espresso, *galão* as the milky coffee, *almoço* "lunch" with *pequeno-almoço* as the breakfast term, *cêntimo* as a hundredth of a euro]. *Bus* or *ônibus* → *autocarro*. *Train* or *trem* → *comboio*. *Cell phone* or *celular* → *telemóvel*. *Breakfast* or *café da manhã* → *pequeno-almoço*. *Bathroom* or *banheiro* → *casa de banho*. *Reais* → *euros* and *cêntimos*.
8. **False friends that were on an opened page** [practitioner: linguagem.pt differences]. *Bicha* is a queue in Portugal and a slur in Brazil. Do not teach *bicha* as the word for a line. *Rapariga* is a neutral "young woman" in Portugal and negative in parts of Brazil. A note is enough. The longer Brazilian false-friend list was not re-opened and is not copied (§11).
9. **Hearing the language.** Unstressed vowels reduce, and often drop, and final *s* is *sh*, so words blur [tertiary: Wikipedia; practitioner: the PoisPois pronunciation guide opened for English-speaker errors]. Not typeable. Lesson 1 and the aid.
10. **The sounds English and Brazilian audio both mis-teach.** Nasals (*não, mãe, bem*), *lh* and *nh* as one sound each, no *tch* on *tia* or *dia*, *kh* against the tap in *carro* / *caro*, dark *l* so *Brasil* does not end in *w*, *porta* open and *Porto* closed, *avó* open and *avô* closed [tertiary: Wikipedia and the Wiktionary lines in §6].
11. **Accent pairs the engine must not treat as the same word.** *E / é, esta / está, avô / avó, por / pôr, pais / país, nos / nós, da / dá, a / à, pode / pôde, tem / têm*, and the Portugal pair *falamos / falámos*. In Portugal *tem* and *têm* are not homophones: *têm* is two syllables [tertiary: Wiktionary `/ˈtɐ̃j̃/` and `/ˈtɐ̃j̃.ɐ̃j̃/`]. *Por* `/puɾ/` and *pôr* `/ˈpoɾ/` are not homophones either. Mark these items strict. A missing tilde or cedilla elsewhere is "almost", because the matcher strips those marks (§10).
12. **Spanish, if the learner has it** [inference]. *Muy, la, en, voy a* will leak. The course still has to make sense for someone with no Spanish. No percentage is cited; the figure used in the Brazilian profile was not re-opened.

## 5. Learners

Who this is for: an English-speaking adult in the US, beginner, going to Portugal, living with someone from Portugal, or from a Portuguese family in the northeastern US. It is not the Brazilian-immigrant audience of `en-pt`.

No opened page splits US Portuguese learners into "European" and "Brazilian", and no enrolment number is invented here. College Portuguese in the US is not given a variant split (§11).

What was opened about the US communities:

- Wikipedia, Fall River, Massachusetts [tertiary]. The page says forty-nine percent of residents are Luso-American or have origins in the former Portuguese empire, and thirty-seven percent described themselves as of Portuguese ancestry. It also says the percentage is disputed: a 2005 University of Massachusetts Dartmouth study estimated 49.6 percent Portuguese American, and other sources 43.9 percent. Santo Christo Parish is described as the mother church of the Portuguese parishes in that diocese, established in 1892, with many families from São Miguel in the Azores. Espirito Santo School opened in 1910 and is called the first Portuguese grammar school in the United States; the page says that as of 2011 most of its students were ethnic Portuguese and 70 percent were bilingual. Those figures are left in conflict on purpose. Do not pick one.
- CensusEasy, "Largest Portuguese population, US cities, 2020" [tertiary, and a weak one]. The page ranks Fall River first at 36,053 and New Bedford second at 29,962, and it shows a US total of 1,363,964 (0.4 percent). Its own text mixes the American Community Survey and the decennial census. It is not the Census Bureau table. Use it only as a pointer to which cities are large, not as a count to print in a lesson.

Why they are here: a trip, a partner, a grandparent from the Azores, the mainland or Madeira, or a move. The first lessons have to work for a person who has never heard European Portuguese, including one whose family speaks it and whose school Portuguese, if any, was Brazilian.

What has to be early: the reduced vowels and the *sh*, or the learner cannot hear the words; *tu* against *o senhor*, or every dialogue is socially wrong; *chamo-me* and *o meu pai*, because those are the first real sentences. Food, the bus and the train can wait until the sentences exist, which is where the roadmap already puts them.

## 6. Pronunciation aid

### 6.1 Decision

A generated English-letter respelling, `pron: "required"`. IPA was rejected for a US adult beginner. No aid was rejected because the spelling lies: unstressed vowels, final *s*, the two *r* sounds, nasals, *lh* and *nh*, and open against closed *e* and *o*.

The generator is `tools/target/ptpt/respell.js`. It exports `respell` and `pronPattern`. Brazilian rules are not in it: *t* and *d* before *i* stay *t* and *d*; coda *l* stays *l*; coda *r* stays a tap, including on an infinitive; unstressed *e* is *ih*, not a Brazilian final *ee*; unstressed *a* and *o* reduce; Lisbon *ei* is *uhy*, not *ay*. Run `node tools/target/ptpt/respell.js "Bom dia"`. The proof line is `bohng DEE-uh`.

`pronPattern` below is the string `pronPattern()` prints. Every worked example and every sample-card `pron` was produced by `respell()` and matches `new RegExp(pronPattern(), "u")`.

### 6.2 Key

CAPITALS mark the stressed syllable of a word with two or more syllables. A one-syllable word is lowercase. One capital syllable per word. A hyphen in Portuguese becomes a space (*chamo-me* → `SHUH-moo mih`, *segunda-feira* → two words).

Vowels. Longer names win when two readings are possible.

| Unit | Use | Rough English, with the lie taken out |
|---|---|---|
| ah | stressed *a*, and the crasis *à* | father, the *a* of *casa* |
| uh | unstressed *a*; stressed *a* before *m, n, nh* (*cama, chamo, banho*); also *â* | the *a* of *about*. A capital UH is still stressed (*KUH-muh*) |
| ih | unstressed *e*, the [ɨ] | a short, central vowel. Often almost silent in fast speech. The aid keeps it |
| eh | open *e* (*café, ela*) | bet. Not the English glide |
| ay | closed *e* (*você, três*) | the vowel of *they* with no *y* glide |
| ee | *i*, and the word *e* "and" | see |
| aw | open *o* (*avó, porta, posso*) | law |
| oh | closed *o*, and *ou* in the Lisbon standard (*avô, Porto, sou, pouco*) | the vowel of *go* with no *w* glide |
| oo | *u*, and unstressed *o* that really reduces (*tudo, de* is not this; *o* the article is `oo`) | food |
| ai | *ai* (*pai*) | eye |
| uhy | Lisbon *ei, éi, êi* (*leite, feira*) | uh plus a short y. Not the Brazilian *ay* |
| oy | *oi* (*noite, dois*) | boy |
| awy | open *ói* (*comboio* in Portugal is this, not *oy*) | law plus y |
| ow | stressed *au*, and the contraction *ao* | cow |
| uhw | unstressed *au* (*saudade*) | uh plus w |
| ayw | *eu* (*eu, euro*) | eh plus w, not the English word "ay" |
| ehw | *éu* | eh plus w |
| eew | *iu* | ee plus w |
| ooy | *ui* (*fui* would be this; *Rui* is `khooy`) | oo plus y |

Nasal. *ng* after the vowel means "this vowel is nasal". Do not close it with a consonant *n*.

| Unit | Spelling |
|---|---|
| uhng | *ã* (*irmã*) |
| owng | *ão*, and final unstressed *-am* (*pão, falam*) |
| uhyng | *ãe*, and final *-em / -ém* in Greater Lisbon, the same ending as *mãe* (*bem, tem, sem*) |
| oyng | *õe* |
| eeng, ohng, oong | final *-im, -om, -um* (*vim* would be eeng; *bom* is `bohng`; *um* is `oong`) |

Before a stop, *m* or *n* stays on the page and the vowel is still nasal: *cantar* is `kuhn-TAHR`. *Têm* is the exception the tool stores whole: `TUHYNG-uhyng`, two syllables, not one [tertiary: Wiktionary].

Consonants.

| Unit | Use |
|---|---|
| sh | *ch*, *x* when the tool knows the word is *sh*, and *s* or *z* at the end of a syllable before a pause or a voiceless consonant (*dois* is `doysh`, *gosto* is `GOHSH-too`). *Lisboa* is *zh*, not *sh*, because *b* is voiced |
| zh | *j*, *g* before *e* or *i*, and syllable-final *s* before a voiced consonant (*mesmo, desde*) |
| lh | *lh*, one palatal. Not *l* plus *y*. Nearest English is the *lli* of *million*, tongue tip down |
| nh | *nh*, one palatal nasal, like Spanish *ñ* |
| kh | the Lisbon uvular *r*: word-initial *r*, *rr*, *r* after *l, n, s* (*rato, carro, honra*) |
| r | the tap: between vowels, in a cluster, and in the coda, including infinitives (*caro, falar, porta*) |
| y | a glide, as in *família* `fuh-MEE-lyuh` (that *ly* is *l* plus *y*, not *lh*) |
| gh | a hard *g* before *e* or *i* where the *u* is silent (*Miguel*) |
| kw, gw | *qu* and *gu* before *a* or *o* (*quatro, água*) |

*T* and *d* never become *ch* and *j*. *Dia* is `DEE-uh`. *Noite* is `NOY-tih`.

*L* is dark in every position [tertiary: Wikipedia]. The aid writes *l*. *Mal* is `mahl` and *mau* is `mow`. They are not the same word. In Brazil they often are.

Not marked, on purpose: the fricative *b, d, g* between vowels ([β ð ɣ], as in the Lisbon narrow line of *obrigado*), and the dropping of *ih* in fast speech. Lesson 1 says both.

The aid is word by word. *Os amigos* is `oosh uh-MEE-goosh`. In real speech the *s* of *os* links on as *z* before a vowel. That link is listening, not the spelling of the word *os* [practitioner: PoisPois; tertiary: Wikipedia on coda *s*].

### 6.3 Twenty worked examples

Each line is `respell()` output.

| Text | pron | What it shows |
|---|---|---|
| Bom dia | bohng DEE-uh | *d* stays *d*. Not Brazilian *jee* |
| leite | LUHY-tih | Lisbon *ei* is *uhy*; final *e* is *ih* |
| noite | NOY-tih | *t* stays *t* |
| dois | doysh | final *s* is *sh* |
| carro | KAH-khoo | strong *r* is *kh* |
| caro | KAH-roo | single *r* between vowels is the tap |
| Brasil | bruh-ZEEL | reduced *a*, dark *l*, not *w* |
| falar | fuh-LAHR | the infinitive *r* stays |
| obrigado | aw-bree-GAH-doo | the first *o* is open and does not reduce |
| telefone | tih-lih-FAW-nih | both weak *e*s stay *ih*; the *o* is open |
| estou | ihsh-TOH | weak *e*, *s* before *t* is *sh*, *ou* is *oh* |
| chamo-me | SHUH-moo mih | stressed *a* before *m* is UH; the pronoun is its own word |
| mãe | muhyng | *ãe* |
| bem | buhyng | final *-em* rhymes with *mãe* in this standard |
| porta | PAWR-tuh | open *o*, tap in the coda |
| Porto | POHR-too | closed *o*. Not the same vowel as *porta* |
| você | vaw-SAY | open pretonic *o*, closed *ê*. Named, not drilled |
| falamos | fuh-LUH-moosh | present "we": the *a* before the nasal is UH |
| falámos | fuh-LAH-moosh | past "we": the written *á* stays ah |
| Lisboa | lihzh-BOH-uh | the Lisbon line has [ɨ] in the first syllable, and *s* before *b* is *zh* |

Also checked, and used in the sample cards: *pequeno* `pih-KAY-noo`, *telemóvel* `teh-leh-MAW-vehl`, *têm* `TUHYNG-uhyng`, *casa* `KAH-zuh`, *cama* `KUH-muh`. *Têm* is the twentieth pattern if a writer needs a count of special cases beside the table: it is stored whole because the spelling is one vowel and the sound is two.

### 6.4 How sure this is

Stress from the accent, then from *ã* / *õ*, then from the ending, is the ordinary Portuguese rule and it held on the words checked. The open or closed quality of a stressed *e* or *o* with no accent is not in the spelling. The tool has a short list of words whose quality was read on Wiktionary, and anything else warns on stderr ("check vowel") and uses closed *ay* or *oh*. Do not ship a warned word on a card.

Compared with the Portugal IPA on the Wiktionary pages opened for the worked examples and the sample cards, the symbols match, except the things this key refuses to spell: [β ð ɣ], a deleted *ih*, and a second reading when the page lists two. Those second readings, and the words that are actually wrong or unchecked, are §6.5.

Lesson 1 has to teach the key before any sentence depends on it: CAPITALS mean stress; *uh* against *ih*; *ng* means nasal; final *s* is *sh*; *t* and *d* stay clean; *l* is a dark *l*, not *w*; *kh* against the tap; *lh* and *nh* are one sound each; *ou* is *oh*; *ei* is *uhy*; the aid keeps short vowels that fast speech drops. The audio is `pt-PT`. A Brazilian clip will teach the wrong *t*, the wrong *l*, and the wrong final *s*.

`gen.js` writes `features.pron: false` for every course. Set it `true` for `en-ptpt` when the pack is built, the same instruction as `en-pt`. That is a pack flag, not an app change. The aid is shown beside new words, then blurred once the sounds lessons are behind the learner. It is never the thing the learner types in practice.

### 6.5 Words the tool gets wrong, or will not vouch for

| Word | Tool | What a writer does |
|---|---|---|
| moro | MOH-roo, and a stderr warning | The Wiktionary form page has no Portugal IPA. Do not put *moro* on a card until someone checks it. *Morar* itself is `moo-RAHR` and was checked (`/muˈɾaɾ/`) |
| que | always `kih`, the unstressed `/kɨ/` | Right for *o que* and for *que* as a clitic. Wrong if this *que* is the stressed `/ke/` (*Que bom!*). Do not use a stressed *que* with this pron |
| os amigos | `oosh uh-MEE-goosh` | Pause form. Real speech links the *s* to a *z*. Do not "fix" *os* to `ooz` in the aid |
| Francisco | `fruhn-SEESH-koo` | The Portugal line was not in the extract (Brazil and Rio were). Do not treat it as checked |
| fixe | `FEE-shih` | This is the informal word, Wiktionary `/ˈfi.ʃɨ/`, glossed there as "thumbs up". The verb form of *fixar* on the same page is `/ˈfik.sɨ/`. Do not use the verb |
| para | `PUH-ruh` | The preposition, `/pɐ.ɾɐ/`. Do not use the verb form *para* (from *parar*) with this pron |
| euro, euros | `AYW-raw`, `AYW-rawsh` | Wiktionary lists `/ˈew.ɾɔ/` first and also `/ˈew.ɾu/`. The tool uses the first. Say so if the card is about the coin |
| António | `uhn-TAW-nyoo` | The faster reading `/ɐ̃ˈtɔ.nju/`. The careful form on the same page is four syllables, `/ɐ̃ˈtɔ.ni.u/` |
| Beatriz | `byuh-TREESH` | The phonetic `/bjɐˈtɾiʃ/`. The hyphenation on the page is three syllables |
| João | `zhwowng` | Portugal `/ˈʒwɐ̃w̃/`, one syllable. The hyphenation is two. The Brazilian hiatus is the wrong aid |
| Tiago | `TYAH-goo` | Portugal `/ˈtja.ɡu/`, not a hiatus with stress on *a* |
| Lisboa | `lihzh-BOH-uh` | The Lisbon line `/lɨʒˈbo.ɐ/`. The same page's broader Portugal line has [i], which the rules would have spelled `leezh`. The exception follows Lisbon |
| tenho | `TUH-nhoo` | Portugal `/ˈtɐ(j).ɲu/`, without the optional *j*. The northern, central and southern lines on that page keep `/e/` |
| almoço, almoços | `ahl-MOH-soo`, `ahl-MAW-soosh` | Singular closed *o*, plural open *o*, both with a full *a* and an *l*. Other metaphonic plurals are not listed. If a plural warns, or sounds like the singular, check it |
| a new word with *x* between vowels | *sh*, plus a warning, unless it is in the small exception list | *Fixo* is `FEEK-soo` (`/ˈfik.su/`). *Fixe* the slang word is *sh*. An unlisted *x* can be *s*, *z*, *sh* or *ks* |
| a new word with an unstressed open *e* or *o* | the tool reduces it to *ih* or *oo*, and does not warn | *Telemóvel, você, obrigado, olá, autocarro, euro* are stored whole because they do not reduce. The next word like them will be wrong until it is added |
| pai | `pai` | Same letters as the spelling, so the pattern also accepts the raw word. The validator cannot tell them apart. Rare; do not build a trap on it |
| por | `poor` | It is `/puɾ/`, and it looks like the English word "poor". *Pôr* is `pohr`. Tell the learner once |

Fast speech that drops *ih* (*telefone* toward a two-syllable word, *estar* toward `sh-TAHR`) is a limit of the aid, not a wrong vowel. The lesson says the short vowel is often gone. The aid keeps it so the spelling is still visible.

## 7. Standing practice rule

One rule, no exemptions: **agreement**. The article, the adjective and the possessive agree in gender and number; contractions bring that gender with them; the verb ending matches the subject, and *tu* has its own ending while *o senhor* / *a senhora* take the *ele* form.

Clitic place and vowel reduction are not the rule. A sounds lesson cannot contain them, and the validator has no exemption. The sounds lessons still hinge, on nouns with articles in the deck (*o leite, a casa, dois euros*).

From set 2 on, at least two `order` items and two `type` items have a `why` that matches:

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bgender\b|\bsingular\b|\bplural (?:noun|adjective|article|ending|form|verb)|\bcontractions?\b|\bverb ending|\bmatch(?:es)? the subject|(?:\beu|\btu|\bele|\bela|\bnós|\bvocês|\beles|\belas)[ -]form
```

Flags: `i`. Tested with `new RegExp(keywords, "i")`. 22 lines that must match and 15 that must not: 0 failures.

Must match (a `why` may use any one of these shapes):

| why | matches because |
|---|---|
| The article agrees with the noun. | agree |
| O is the masculine article. | masculine |
| A is the feminine article. | feminine |
| The gender of casa is feminine. | gender |
| Use the singular article. | singular |
| The plural noun takes os. | plural noun |
| A plural adjective ends in s. | plural adjective |
| The plural article is os or as. | plural article |
| The plural ending is s. | plural ending |
| The plural form of o is os. | plural form |
| A plural verb needs the eles form. | plural verb, and eles form |
| No is the contraction of em plus o. | contraction |
| The verb ending has to match. | verb ending |
| The verb matches the subject. | matches the subject |
| This is the tu form. | tu form |
| O senhor takes the ele form. | ele form |
| We use the nós form. | nós form |

Must not match. These are real `why` lines for other lessons, and the rule must leave them alone:

| why | why it stays out |
|---|---|
| Use tu with friends. | bare *tu* is not "the tu form" |
| Say o senhor to an older man. | address, not agreement |
| Você is not the default. | *você* is not in the pattern |
| Final s sounds like sh. | sound, not grammar |
| The pronoun goes after the verb. | clitic place |
| Chamo-me puts me after the verb. | clitic place |
| Estou a trabalhar, not the Brazilian gerund. | progressive |
| The plural of pão is pães. | bare *plural of*, not "plural noun" |
| Listen for the reduced ending. | bare *ending* |
| Put the article before the possessive. | no agreement keyword |
| This is a nasal vowel. | sound |
| Make it plural. | bare *plural* |

A writer who needs the rule to fire says "the tu form" or "agrees", not "use tu".

## 8. Lessons

28 lessons. Roadmap order, with two changes, both marked.

**Reorder.** *articles* moves to immediately before *ser*. The roadmap has *ser* then *articles*. The NOVA FCSH semester A1 grammar list (the Portuguese numbering) puts noun gender and number, adjective gender and number, and the articles (items 4 to 6) before the verbs (item 8, *ser* and *estar*). That sheet is a category list, not a timetable, so this is a judgment a lead can reject. Rejecting it means *ser* stays first and *articles* follows, as the roadmap has them. Nothing else moves. *Estar* already contains the contrast with *ser*, so there is no added *ser-estar* lesson. Clitics stay inside the routine lesson. Extra irregulars (*vir, sair, pedir, trazer, dizer, saber, pôr*) stay inside the irregular lesson as recognition, not a new lesson. *Começar a* and *acabar de* stay a note inside the progressive lesson.

**Added.** *compliments*, after food and before the city. One added lesson, under the cap of three. NOVA's oral A1 sheet lists the speech act *felicitar e agradecer*. The 2012 EPE A1 programme lists *Felicitar alguém / responder a felicitação*. The Compliments deck needs a lesson whose `deck` field is `Compliments`. Cutting the lesson means 27 lessons, and the deck hangs on greetings or on likes.

The NOVA English column for the simple past drops *ser* and *estar* and keeps *ir* and *fazer*. The Portuguese column on the same sheet says regular verbs plus *ser, estar, ir* and *fazer*. The roadmap follows the Portuguese column. Do not "correct" it from the English line.

| # | id | title | roadmap | deck |
|---|---|---|---|---|
| 1 | vowels | Sounds of Portugal: reduced vowels and final s | ptpt-vowels | Sounds and spelling |
| 2 | nasals | Nasal sounds, lh, nh and the written accents | ptpt-nasals | Sounds and spelling |
| 3 | greetings | Greetings and courtesy | ptpt-greetings | Greetings and courtesy |
| 4 | address | Saying you: tu, o senhor, a senhora | ptpt-address | Greetings and courtesy |
| 5 | intro | Introducing yourself | ptpt-intro | About me |
| 6 | articles | Gender, plural and articles | ptpt-articles | Food and drink |
| 7 | ser | ser for who you are | ptpt-ser | About me |
| 8 | present | Present tense, with the tu form | ptpt-present | Work and study |
| 9 | questions | Questions with é que, and não | ptpt-questions | Questions and small words |
| 10 | numbers | Numbers and prices in euros | ptpt-numbers | Numbers, time and prices |
| 11 | estar | estar, and ser or estar | ptpt-estar | Feelings and states |
| 12 | ter-haver | ter and há | ptpt-ter-haver | Traps for English speakers |
| 13 | family | Family and possessives with the article | ptpt-family | People and family |
| 14 | adjectives | Adjectives and demonstratives | ptpt-adjectives | People and family |
| 15 | irregular | Irregular present | ptpt-irregular | Shopping and paying |
| 16 | contractions | Contractions | ptpt-contractions | Travel and transport |
| 17 | time | The time and the days | ptpt-time | Numbers, time and prices |
| 18 | progressive | estar a + infinitive | ptpt-progressive | Work and study |
| 19 | routine | Daily routine and clitic position | ptpt-routine | Home and routine |
| 20 | home | Home and things | ptpt-home | Home and routine |
| 21 | likes | Likes and reasons | ptpt-likes | Likes and free time |
| 22 | food | Ordering food and drink | ptpt-food | Food and drink |
| 23 | compliments | Compliments and thanks | (added) | Compliments |
| 24 | city | Around town | ptpt-city | Around town and directions |
| 25 | transport | Transport | ptpt-transport | Travel and transport |
| 26 | directions | Directions | ptpt-directions | Around town and directions |
| 27 | plans | Plans and obligations | ptpt-plans | Plans and obligations |
| 28 | past | The past: pretérito perfeito | ptpt-past | Likes and free time |

What each one has to teach, in one line: (1) the key in §6, and that Brazilian audio is the wrong model; (2) *ão, ãe, em, lh, nh, ç*, and that the accent marks stress and open or closed; (3) *olá, bom dia, boa tarde, boa noite, obrigado / obrigada, desculpe, se faz favor*; (4) *tu* against *o senhor* / *a senhora*, *você* named once, *vocês* for plural; (5) *Chamo-me…, Sou de…, Moro em…* only once *moro* is checked (§6.5), *Muito prazer*; (6) *o / a, os / as, um / uma*, gender on the noun; (7) *eu sou, tu és, ele é, o senhor é*, for nationality and job; (8) *-ar, -er, -ir* with the *tu* ending; (9) *é que* and *não*; (10) *dezasseis, dezassete, dezanove*, euros and cêntimos, *Quanto custa?*; (11) *estar* for place and state, against *ser*; (12) *tenho* and *há*; (13) *o meu pai, a minha mãe, os teus irmãos*; (14) adjective after the noun, *este / esse / aquele*; (15) *ir, fazer, querer, poder, ver, dar*, and the longer NOVA list as recognition only; (16) *no, na, do, da, ao, à*; (17) *Que horas são?, São duas e meia, à uma, às três, segunda-feira*; (18) *estou a trabalhar*, with the Brazilian gerund as a note; (19) *levanto-me, tomo o pequeno-almoço, não me levanto*; (20) *a casa, a cozinha, a casa de banho, o telemóvel*; (21) *gostar de, preferir, e, mas, ou, porque*; (22) *queria uma bica, um galão, a conta, se faz favor*; (23) *parabéns*, thanks, *fixe* as the informal word only; (24) *onde fica, perto de, ao lado de, em frente de*; (25) *de autocarro, de comboio, de metro, um bilhete para Lisboa*; (26) *vire à esquerda, siga em frente*, and the *tu* forms *vira, segue*; (27) *vou visitar o Porto, ter de, poder, dever*; (28) regular pretérito perfeito and *ser, estar, ir, fazer*, including *falámos* against *falamos*.

## 9. Decks

17 decks, 5 groups. Every `pron` is `respell()` of the target. Notes are for the writer, not the learner.

### First steps

**Sounds and spelling.** The vowel key, stress capitals, final *s* as *sh*, and the two *r* sounds.

| target | pron | meaning | note |
|---|---|---|---|
| pequeno | pih-KAY-noo | small | weak *e* is ih; the stressed *e* is closed |
| dois | doysh | two | final *s* is sh |
| Lisboa | lihzh-BOH-uh | Lisbon | Lisbon [ɨ], not the broader Portugal [i] |
| leite | LUHY-tih | milk | Lisbon *ei* |
| telefone | tih-lih-FAW-nih | telephone | open *o*; the aid keeps both weak *e*s |

**Greetings and courtesy.** *Bom dia, boa tarde, boa noite*, thanks, and excuse me.

| target | pron | meaning | note |
|---|---|---|---|
| Bom dia | bohng DEE-uh | Good morning | *d* is d |
| Boa tarde | BOH-uh TAHR-dih | Good afternoon | open *a* is not the point; *d* stays d |
| Boa noite | BOH-uh NOY-tih | Good evening, or good night | one phrase, two times of day |
| Obrigado | aw-bree-GAH-doo | Thank you (said by a man) | first *o* does not reduce |
| Desculpe | dihsh-KOOL-pih | Excuse me | *s* before *k* is sh |

**About me.** Name, origin, and *ser*.

| target | pron | meaning | note |
|---|---|---|---|
| Chamo-me Ana | SHUH-moo mih UH-nuh | My name is Ana | pronoun after the verb |
| Sou de Lisboa | soh dih lihzh-BOH-uh | I am from Lisbon | *ou* is oh |
| Muito prazer | MOOYNG-too pruh-ZAYR | Pleased to meet you | *muito* is stored whole |
| Eu sou | ayw soh | I am | *eu* is ayw |
| Obrigada | aw-bree-GAH-duh | Thank you (said by a woman) | agrees with the speaker |

**People and family.** Family, the article with the possessive, adjective agreement.

| target | pron | meaning | note |
|---|---|---|---|
| o meu pai | oo mayw pai | my father | *pai* looks like the spelling |
| a minha mãe | uh MEE-nhuh muhyng | my mother | article plus possessive |
| o meu irmão | oo mayw eer-MOWNG | my brother | tap *r*, not the strong *r* |
| a minha filha | uh MEE-nhuh FEE-lhuh | my daughter | *lh* is one sound |
| uma casa pequena | OO-muh KAH-zuh pih-KAY-nuh | a small house | feminine all the way through |

### Everyday words

**Numbers, time and prices.** The teen numbers that differ from Brazilian spelling, euros, and the clock.

| target | pron | meaning | note |
|---|---|---|---|
| dezasseis | dih-zuh-SUHYSH | sixteen | *ei* is uhy; final s is sh |
| dezassete | dih-zuh-SEH-tih | seventeen | open *e* |
| dezanove | dih-zuh-NAW-vih | nineteen | open *o* |
| dois euros | doysh AYW-rawsh | two euros | the tool uses the open-*o* reading of *euro* |
| São duas e meia | sowng DOO-uhsh ee MUHY-uh | It is two thirty | *e* "and" is ee |

**Food and drink.** Articles on food, and ordering. This is also the deck for the articles lesson.

| target | pron | meaning | note |
|---|---|---|---|
| uma bica | OO-muh BEE-kuh | an espresso (Lisbon and the south) | in Porto the same drink is a *cimbalino* |
| um galão | oong guh-LOWNG | a milky coffee in a glass | Wiktionary: espresso and foamed milk |
| o pastel de nata | oo puhsh-TEHL dih NAH-tuh | a custard tart | *s* before *t* is sh; open *e* |
| o queijo | oo KUHY-zhoo | the cheese | Lisbon *ei* |
| o vinho | oo VEE-nhoo | the wine | *nh* is one sound; the *i* is not nasal the way Brazilian *vinho* is |

**Home and routine.** Rooms, the phone, getting up.

| target | pron | meaning | note |
|---|---|---|---|
| a casa de banho | uh KAH-zuh dih BUH-nhoo | the bathroom | not *banheiro* |
| a cozinha | uh koo-ZEE-nhuh | the kitchen | pretonic *o* reduces |
| o frigorífico | oo free-goo-REE-fee-koo | the refrigerator | pretonic *o* is oo on the Wiktionary line |
| o telemóvel | oo teh-leh-MAW-vehl | the mobile phone | the weak *e*s stay open; stored whole |
| levanto-me | lih-VUHN-too mih | I get up | pronoun after the verb |

**Shopping and paying.** *Querer, poder, ir, dar* in a café.

| target | pron | meaning | note |
|---|---|---|---|
| Quero um café | KEH-roo oong kuh-FEH | I want a coffee | *quero* is open *e*; *café* is open *e* |
| Posso | PAW-soo | I can | open *o*; *ss* stays s |
| Vou de comboio | voh dih kohm-BAWY-oo | I go by train | Portugal *oi* is open |
| Dá-me a conta | dah mih uh KOHN-tuh | Give me the bill | *dá* is ah; *conta* is nasal *o* |
| Quero o pastel | KEH-roo oo puhsh-TEHL | I want the tart | article *o* is oo |

### Out and about

**Around town and directions.** Places, *perto*, left and right.

| target | pron | meaning | note |
|---|---|---|---|
| a farmácia | uh fuhr-MAH-syuh | the pharmacy | coda *r* is the tap |
| a praia | uh PRAI-uh | the beach | |
| a estação | uh ihsh-tuh-SOWNG | the station | optional first vowel kept as ih |
| à direita | ah dee-RUHY-tuh | to the right | *à* is ah, not uh; Lisbon *ei* |
| à esquerda | ah ihsh-KAYR-duh | to the left | closed *e*; *s* before *k* is sh |

**Travel and transport.** Contractions, and the bus, the train, the metro.

| target | pron | meaning | note |
|---|---|---|---|
| o autocarro | oo ow-taw-KAH-khoo | the bus | stored whole: *au* and open *o* do not reduce; *rr* is kh |
| o comboio | oo kohm-BAWY-oo | the train | not *trem* |
| o metro | oo MEH-troo | the metro | open *e* |
| no Porto | noo POHR-too | in Porto | *em* + *o*; closed *o*, unlike *porta* |
| à praia | ah PRAI-uh | to the beach | *a* + *a* |

**Work and study.** Present endings, including *tu*, and *estar a*.

| target | pron | meaning | note |
|---|---|---|---|
| tu falas | too FAH-luhsh | you speak (tu) | the *tu* form |
| ele fala | AY-lih FAH-luh | he speaks | *ele* is closed *e* |
| eles falam | AY-lihsh FAH-lowng | they speak | final *-am* is owng |
| Estou a trabalhar | ihsh-TOH uh truh-buh-LHAHR | I am working | *estar a*, not the gerund; the *r* stays |
| Falamos | fuh-LUH-moosh | we speak | present, not *falámos* |

### Conversation

**Feelings and states.** *Estar* for a state or a place.

| target | pron | meaning | note |
|---|---|---|---|
| Estou cansado | ihsh-TOH kuhn-SAH-doo | I am tired (a man) | adjective agrees with the speaker |
| Estou bem | ihsh-TOH buhyng | I am well | *bem* rhymes with *mãe* |
| O café está | oo kuh-FEH ihsh-TAH | The coffee is (right now) | *está* against *esta* |
| Estou em Lisboa | ihsh-TOH uhyng lihzh-BOH-uh | I am in Lisbon | place is *estar*, not *ser* |
| Tudo bem | TOO-doo buhyng | All good | |

**Likes and free time.** *Gostar de* and *porque*. The past lesson reuses this deck.

| target | pron | meaning | note |
|---|---|---|---|
| Gosto de Lisboa | GOHSH-too dih lihzh-BOH-uh | I like Lisbon | *s* before *t* is sh; *gostar de* |
| Gosto do Porto | GOHSH-too doo POHR-too | I like Porto | *de* + *o* |
| Gosto do queijo | GOHSH-too doo KUHY-zhoo | I like cheese | |
| porque | POOR-kih | because | stressed *o* is oo, not oh; stored whole |
| Eu gosto | ayw GOHSH-too | I like | one reading only; see §6 |

**Questions and small words.** *Onde, o que, não, como.*

| target | pron | meaning | note |
|---|---|---|---|
| Onde | OHN-dih | Where | nasal *o*, close |
| Onde está | OHN-dih ihsh-TAH | Where is it | |
| O que | oo kih | What | *que* here is the unstressed reading |
| não | nowng | not | |
| Como está | KOH-moo ihsh-TAH | How are you | *como* the adverb is closed *o*. Do not also use it as "I eat" on a card |

**Plans and obligations.** *Ir* + infinitive, *ter de*, *poder*.

| target | pron | meaning | note |
|---|---|---|---|
| Vou a Lisboa | voh uh lihzh-BOH-uh | I am going to Lisbon | *a*, not *à*: no crasis before a name that takes no article in this pattern. Writers confirm the article before a city name with a native if the item hinges on it (§11) |
| Vou ao Porto | voh ow POHR-too | I am going to Porto | *a* + *o* |
| Posso ir | PAW-soo eer | I can go | infinitive *r* stays |
| Tenho de | TUH-nhoo dih | I have to | Lisbon *tenho*, not *tay* |
| Quero ir | KEH-roo eer | I want to go | |

### Watch out

**Traps for English speakers.** *Ter*, *há*, the clitic, agreement, a contraction.

| target | pron | meaning | note |
|---|---|---|---|
| Tenho dois irmãos | TUH-nhoo doysh eer-MOWNGSH | I have two brothers | *ter*, not *ser*, for possession. The plural *s* is sh |
| Há uma farmácia | ah OO-muh fuhr-MAH-syuh | There is a pharmacy | *há*, not *tem* and not *é* |
| Chamo-me Ana | SHUH-moo mih UH-nuh | My name is Ana | not *Me chamo* |
| Obrigada | aw-bree-GAH-duh | Thank you (said by a woman) | not an invariable *obrigado* |
| no Porto | noo POHR-too | in Porto | not *em o Porto* |

**Compliments.** *Parabéns*, thanks, and the informal word.

| target | pron | meaning | note |
|---|---|---|---|
| Parabéns | puh-ruh-BUHYNGSH | Congratulations | Wiktionary: plural only; *dar os parabéns* |
| Muito bem | MOOYNG-too buhyng | Very good | |
| Muito obrigado | MOOYNG-too aw-bree-GAH-doo | Thank you very much (a man) | |
| Fixe | FEE-shih | Thumbs up (informal) | not the verb form of *fixar* |
| Obrigada | aw-bree-GAH-duh | Thank you (said by a woman) | pair it with *obrigado* |

### Localisation

Places on cards: Lisboa, Porto, Coimbra, Braga, Faro, Sintra, Cascais, Aveiro. Not Rio, not São Paulo. *Coimbra* is `KWEEN-bruh` and *Aveiro* is `ah-VUHY-roo` (§6). Money is euros and cêntimos, never reais. Coffee is a *bica* or a *café* in Lisbon, a *cimbalino* in Porto, a *galão* when it is mostly milk. The tart is a *pastel de nata*. Transport is *autocarro, comboio, metro*. Names already checked: Ana, Maria, João, Pedro, Inês, Miguel, Sofia, Rui, Beatriz, Tiago, Gonçalo, Mariana. *Francisco* is unchecked (§6.5). Do not use Brazilian character names or US city names from the Brazilian tool.

## 10. Typing and script

Same Latin script as Brazilian Portuguese. `targetScript` is `[A-Za-zÁÂÃÀÉÊÍÓÔÕÚÇáâãàéêíóôõúç]`. `accents` is true. `keys` is `á â ã à é ê í ó ô õ ú ç`. The accent bar already takes its keys from the course. `hLang` already maps `ptpt` to `pt-PT`.

`foldAcc` strips the combining tilde and the cedilla, so a missing *ã* or *ç* is "almost", not a different word, unless the item is strict. That is the same matcher as Brazilian. No new letter, no new fold, no font.

Strict when the mark is the difference: *e / é, esta / está, avô / avó, por / pôr, pais / país, nos / nós, da / dá, a / à, pode / pôde, tem / têm, falamos / falámos*. In this variety *tem* / *têm* and *por* / *pôr* also differ in sound (§4.11), but the engine cares that the spelling differs by a mark.

Hyphens: practice comparison keeps them, so *chamo-me*, *chamo me* and *chamome* are three strings. Deck comparison deletes hyphens, so *chamo-me* matches *chamome* and does not match *chamo me*. Writers list *Chamo-me* and *Chamo me* on practice items that test the clitic. This is existing behavior. It is not an app change.

Apostrophes are rare at A1. Do not put *d'água* in a typed answer. Case is not checked. Days, months and languages are lowercase in the answer key (*segunda-feira, português*). Numbers in targets are words. Digits and *€* make the pronunciation tool throw.

`voiceMatch` is `^pt-PT`. Without it, the voice picker accepts any `pt-` voice, including `pt-BR`. The field already exists and `gen.js` already copies it. No engine patch.

A typed answer includes the article where the pattern is taught, *de* after *gostar*, the contraction rather than the two words, the *tu* or *ele* ending the prompt cues, and the clitic on the side the item is testing. It need not include the subject pronoun when both are natural, and it need not include a final period or a capital.

## 11. Gaps

Unchecked or not on a page opened for this profile. Do not teach these as facts.

- The vowel of *moro*. The tool guesses `MOH-roo` and warns. *Morar* was checked; the *eu* form was not.
- *Francisco*: the Portugal IPA line was not in the extract.
- *Tenho fome* against *estou com fome*, and *tenho vinte anos* for age. Not on a page opened here. The roadmap's *ter* examples are *Tenho dois irmãos* and *Há uma farmácia*.
- "Permanent versus temporary" as the *ser* / *estar* rule. Not taught.
- Whether *Vou a Lisboa* or *Vou para Lisboa* is the ordinary sentence, and whether a city name takes the article. The sample card uses *a* because that is the preposition of movement NOVA lists (*de, para, a*). A native should confirm the article.
- The gerund surviving in the south and the islands. Not on a page opened for that claim. What is sourced is that the gerund is rare in this function in modern European Portuguese.
- *Húmido* / *úmido*, and any orthographic pair past the four in §2.1.
- A longer false-friend list than *bicha* and *rapariga*.
- Unaspirated *p, t, k*. PoisPois cites a paper that was not opened. Not a drilled point.
- US college enrolment, and any split of learners by European against Brazilian. Not opened.
- The Census Bureau table behind the CensusEasy ranking. Not opened.
- The Camões school in New Bedford, and any current pupil count. Not opened for this profile.
- The Referencial Camões PLE itself, and the tables of contents of *Passaporte para Português*, *Português XXI* and the other textbooks named on the NOVA sheet. The roadmap already says those could not be opened. The NOVA and EPE sheets are category lists. The lesson order that is not the articles move or the compliments lesson is the roadmap's judgment, kept.
- Ciberdúvidas pages on the individual sounds (*ou, ei, -em, lh*) that PoisPois cites. The phonology claims in §6 are from Wikipedia and from the Wiktionary lines, not from those Ciberdúvidas articles. The Ciberdúvidas pages that were opened are the ones in the source list (greetings, possessives, clitic place, *chamo-me*).
- Metaphonic plurals other than *almoço* / *almoços*.
- *Como* as "I eat". The opened page is the adverb `/ˈko.mu/`. One string, one pron: the adverb.

## Sources

Pages opened for this profile. A syllabus PDF saved from the NOVA or Camões site counts as opened. A Wiktionary "Portugal" IPA line counts as opened for that word. Books named inside those pages were not opened.

Syllabuses.

- NOVA FCSH, *Programas A1* (written, oral, and the grammar sheet headed A2 but framed at A1): `https://www.fcsh.unl.pt/static/documentos/laboratorio_lp/lingua_cultura/Programas%20A1_EN.pdf`
- NOVA FCSH, semester course programme (the Portuguese grammar numbering used for the articles move): `https://www.fcsh.unl.pt/static/documentos/laboratorio_lp/curso_semestral/Programas.pdf`
- Camões, *Ensino Português no Estrangeiro, Programa Nível A1*, DSLC, November 2012: `https://www.instituto-camoes.pt/images/ProgramasEPE/Professores/Programa_EPE_A1.pdf`

Sounds and grammar.

- Wikipedia, Portuguese phonology: `https://en.wikipedia.org/wiki/Portuguese_phonology`
- linguagem.pt, forms of address: `https://linguagem.pt/en/gramatica/formas-de-tratamento/`
- linguagem.pt, diferenças PE/PB: `https://linguagem.pt/variantes/diferencas-pe-pb/`
- PoisPois, Portuguese pronunciation mistakes (English-speaker list for the Lisbon–Coimbra standard): `https://poispois.com/guides/portuguese-pronunciation-mistakes`
- Ciberdúvidas, *bom dia* / *boa tarde*: `https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-uso-de-bom-dia-e-de-boa-tarde/24060`
- Ciberdúvidas, articles and possessives: `https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/artigos-definidos-e-pronomes-possessivos/37816`
- Ciberdúvidas, clitic placement: `https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-colocacao-dos-pronomes-atonos/11366`
- Ciberdúvidas, *chamo-me*: `https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/chamo-me-e-chamam-me/38275`

Wiktionary, Portuguese section, Portugal IPA or gloss, for the words in §6 and §9. One page per word, including *obrigado, telefone, comboio, autocarro, telemóvel, você, homem, sol, perto, logo, euro, pequeno, pequena, Lisboa, trabalho, chamo, gosto, posso, quero, fome, hora, hoje, como, onde, boa, senhor, senhora, agora, mesmo, desde, fixe, banho, amigo, pai, meu, tu, falas, levanto, tem, têm, vêm, seis, lei, muito, ao, Maria, João, Sofia, Rui, Beatriz, Tiago, Francisco (Brazil and Rio lines only), Gonçalo, Mariana, Coimbra, Braga, Faro, Sintra, Cascais, Aveiro, metro, tarde, olá, desculpe, favor, conta, até, vou, por, com, em, ela, ele, eles, elas, fazer, ser, ter, abrir, ir, vinte, cinco, António, dezasseis, dezassete, dezanove, catorze, pastel, queijo, vinho, meia, duas, parabéns, estação, esquerda, direita, amanhã, livro, prazer, comer, Pedro, Inês, café, água, família, eu, de, que, um, uma, não, sou, pouco, outro, dia, noite, leite, cidade, carro, caro, Brasil, falar, dois, mais, pão, mãe, bem, também, casa, cama, porta, Porto, estar, estou, feira, filho, rato, rua, mal, mau, gente, bica, galão, nata, praia, farmácia, cozinha, frigorífico, facto, cêntimo, segunda, saudade, ouro, rei, fixo, porque, são, está, esta, pode, pôde, jogo, mas, para, do, da, no, na, os, as, à, e (letter and conjunction), falaram, veem, pôr, sem, além, canto, falamos, falámos, Ana, Catarina, três, quarto, dez, oito, sete, quatro, mil, euros, almoço, almoços, morar, olho, bom, trabalhar, sempre, cansado, irmão, irmã, filha, minha, giro, licença, nunca, ontem, tudo*.

Learners and the café, as practitioner or tertiary pages, not as a census.

- Wikipedia, Fall River, Massachusetts: `https://en.wikipedia.org/wiki/Fall_River,_Massachusetts`
- CensusEasy, largest Portuguese-ancestry city ranking (secondary compilation; see §5): `https://censuseasy.com/rankings/largest-portuguese-population-cities?year=2020`
- Portugalist, ordering coffee in Portugal (bica, cimbalino, galão, pastel de nata): `https://www.portugalist.com/portugal-ordering-coffee/`

The in-app files this profile was checked against, not language sources: `docs/MULTILANG-SPEC.md`, `docs/profiles/en-pt.md` §10, `src/app.html` (`foldAcc`, `pracNorm`, `normT`, `hLang`, `pickVoice`), and `tools/target/gen.js` (it copies `voiceMatch` and hardcodes `features.pron` false).
