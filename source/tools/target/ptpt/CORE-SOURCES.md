# Core words and Flirting (en-ptpt): sources, order and skips

Writer EN-PTPT-CORE, 2026-11-23. New files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting). This document and `POS-COVERAGE.md`. Ten deck entries were appended to `profile.json`.

Everything is European Portuguese of Portugal, Lisbon standard:
- *tu* forms, with *o senhor / a senhora* in notes;
- *estar a* + infinitive, and the pronoun after the verb (*chamo-me*, *Fazes-me rir*);
- Portugal words (*autocarro, comboio, telemóvel, pequeno-almoço, casa de banho, giro, miúdo, chávena, ementa, gelado, morada, apanhar*).

*Você* is not a card (profile §2.2: named, not drilled). The Brazilian course's finished decks (`tools/target/pt/`) were the starting point for the word lists. Every Brazilian word, form and sound was replaced or dropped.

**Compliments was not built.** `profile.json` already has a `Compliments` deck, `decks-b.js` already fills it, and there are no `decks-c.js.draft` or `extra-c.js.draft` files. There is no `docs/plans/compliments-ptpt.md` either.

## 1. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| hermitdave *FrequencyWords*. Cloned with `git clone --depth 1 https://github.com/hermitdave/FrequencyWords` into a new empty scratch folder, commit `525f9b560de45753a5ea01069454e72e9aa541c6` (7 Feb 2022). File: `content/2018/pt/pt_50k.txt`. | OpenSubtitles 2018, Portuguese. One line per **word form** (not lemma), with its count, top 50,000 forms. | The repository `README.md` (opened) says MIT for code and **CC-BY-SA-4.0 for content**. Only counts were used. No text was copied. | Sort key for every card marked source-ranked below. A card's key is the count of its exact form: the infinitive for verbs, the masculine singular for adjectives, the bare noun without its article. One exception sums two forms: *ano + anos*. For a multi-word card the key is one word: *de repente* uses *repente*, *por causa de* uses *causa*, *longe de* uses *longe*. |

Exactly what was opened in the clone:
- `README.md` (format and licence).
- `content/2018/pt/pt_50k.txt`, read whole by the build script.
- `content/2018/pt_br/pt_br_50k.txt`, only to look up the 14 comparison words in the table below.

No other file of the clone was opened, and no script in it was run. No web frequency page (Wiktionary, a corpus site, a frequency dictionary) was opened in this job.

**Why `pt_50k` is a fair list for this course.** It is European-leaning, as the counts show (line number, then count):

| word | `pt/pt_50k.txt` | `pt_br/pt_br_50k.txt` |
|---|---|---|
| autocarro | #1521, 11,869 | #20141, 734 |
| telemóvel | #873, 22,142 | #19832, 752 |
| comboio | #1307, 14,127 | #7044, 3,488 |
| estás | #58, 522,891 | #1408, 25,236 |
| miúdo | #655, 31,086 | #12315, 1,569 |
| rapariga | #426, 51,106 | #7500, 3,185 |
| fixe | #765, 25,822 | #12749, 1,493 |
| giro | #2078, 8,362 | #10587, 1,946 |
| você | #59, 495,201 | #7, 7,817,147 |
| ônibus | #11732, 923 | #1284, 28,182 |
| celular | #8162, 1,536 | #995, 37,657 |
| trem | #7140, 1,824 | #1123, 33,018 |

Brazilian subtitles are still in the mix: *você* ranks #59. That is one reason it is not a card here.

### 1.1 Order rule
Cards are sorted by key, highest first. A card placed by judgement gets a stand-in count (written `J<count>` in the build data), so it sits where the writer thinks it belongs. Two decks keep their written order: **Top interjections** and **Flirting** (layer order, as the brief asks).

### 1.2 Cards placed by judgement (every other card is in source order)
- **Top nouns (2 of 99):**
  - *o favor*: its count is inflated by *por favor* and *se faz favor*.
  - *a cara*: its count includes the adjective *cara* ("expensive", feminine).
- **Top verbs (8 of 99):**
  - *ser, estar, ter, ir* are put at the top. Their finite forms are far more common than the infinitive.
  - *vir, gostar, achar, precisar* are moved up, because *acho* (#98), *preciso* (#152), *gosto* (#265) and *vem* (#245) are much more common than their infinitives.
- **Top adverbs (2 of 32):** *em baixo* and *lá dentro* (multi-word, no single count), at the end.
- **Top pronouns (0 of 27).**
- **Top prepositions (12 of 25):**
  - *a*: its count is mostly the article.
  - The multi-word prepositions *antes de, depois de, dentro de, atrás de, em cima de, em frente de, ao pé de, a partir de, através de, debaixo de, apesar de*.
- **Top conjunctions (14 of 22):**
  - *como*: its count is mostly the question word and the adverb.
  - *pois*: its count is mostly the spoken "yes, right".
  - Every multi-word conjunction: *por isso, do que, só que, já que, caso, para que, assim que, mesmo que, até que, desde que, antes que, no entanto*. *caso* is placed by judgement because its count is mostly the noun.
  - Source-ranked: *se, nem, então, enquanto, portanto, senão, porém, contudo*.
- **Top interjections (all 35), in judgement order.** The forms are shared with other words (*pronto* = ready, *boa* = good, *claro* = clear, *anda* = walks), so a count says nothing about the interjection.
- **Top words (29 of 40):**
  - *o* is placed at the top.
  - Numbers follow in counting order, then the days, then the months.
  - Source-ranked: *um, cada, quanto, mesmo, outro, nenhum, tanto, aonde, vários, meio, ambos*.
- **Flirting (all 62):** layer order.

Every meaning, note, example and dialogue was written by the writer. None was copied from a source.

## 2. Class slots: renamed or added

None renamed and none added. European Portuguese has all eight classes as English does. Where Portuguese works differently, the deck was fitted to it:
- **Contractions** (*no, na, do, da, ao, à, pelo*) are not cards. They are in the notes of *de, em, a, por*, and the course already teaches them (lesson `contractions`).
- **Articles**: *o* (with *a, os, as* in the note) and *um* (meaning "a; one") are in Top words. The preposition *a* is its own card in Top prepositions, so the string *a* appears once.
- **Possessives and demonstratives** are pronoun cards (*meu, teu, seu, esta, isto, isso, aquilo*), with the other forms in the note. Portuguese uses the same word as determiner and pronoun. *este, esse, aquele, nosso, dele, dela* could not be cards (section 4).
- **se** is in Top conjunctions (if), and its note gives the pronoun *se*. **que** is not a card (section 3).
- Portugal-only words are the point where a word is shared with Brazil but means something else there. *o rapaz* and *o miúdo* are the ordinary words for a boy. *o cão*, not *cachorro*. *apanhar o autocarro*, not *pegar*. *Pronto*, *Pois é*, *Ah pois*, *Boa*, *Vá*, *Anda*, *A sério* and *Estás a brincar* are interjections people in Portugal use every day.

## 3. Words skipped because the course already teaches them

Checked against all 300 cards in `decks-a.js` and `decks-b.js`, ignoring capitals, punctuation, hyphens and a leading article. "(judgement)" marks a skip that is not an exact match: an existing phrase card already teaches the word, or the new card would differ from an existing one only by an article or a capital.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | o dia, a noite, a casa, o trabalho, o carro, a porta, o pão, a mãe, o leite, o banho, o telefone | Sounds and spelling |
| Top nouns | a água, o café, o jantar, a carne, o almoço, o vinho, o peixe, o queijo, o pequeno-almoço | Food and drink |
| Top nouns | o quarto, a sala, a cama, o telemóvel, a chave, a cozinha, a cadeira, o frigorífico | Home and routine |
| Top nouns | a cidade, o hospital, a rua, a estação, a ponte, a praia, o mercado, a farmácia | Around town and directions |
| Top nouns | o comboio, o autocarro, o metro, a paragem | Travel and transport |
| Top nouns | a rapariga, a mão, o facto, o mapa | Traps for English speakers |
| Top nouns (judgement) | o pai, o filho, a filha, o irmão, a irmã, o amigo, a amiga, o marido, a família, a avó, o avô | People and family (*o meu pai*, *a minha amiga* …) |
| Top nouns (judgement) | a tarde, a conta | Greetings (*Boa tarde*); Food and drink, Shopping (*A conta, se faz favor*, *Dá-me a conta*) |
| Top nouns (judgement) | a saúde | Kept as the interjection *Saúde* instead |
| Top verbs | falar | Sounds and spelling |
| Top verbs (judgement) | jantar | Food and drink (*o jantar*: would differ only by the article) |
| Top adjectives | pequeno, caro | Sounds and spelling |
| Top adjectives | obrigado | Greetings and courtesy |
| Top adjectives (judgement) | cansado, ocupado, triste, contente, doente | Feelings and states (*Estou cansado* …) |
| Top adjectives (judgement) | português, americano | About me (*Sou português*, *Sou americana*) |
| Top adverbs | bem | Sounds and spelling |
| Top adverbs | aqui, já, também | Questions and small words |
| Top adverbs (judgement) | perto | Around town (*perto de*) |
| Top pronouns | tu, vocês, o senhor, a senhora | Greetings and courtesy |
| Top pronouns | Quem, O que (would differ only by a capital) | Questions and small words |
| Top prepositions | perto de, ao lado de | Around town and directions |
| Top conjunctions | e, ou, mas, porque | Likes and free time |
| Top conjunctions | Quando (differs only by a capital) | Questions and small words |
| Top conjunctions (judgement) | que | Would pair with *O que* (Questions and small words), differing only by the article-like *o* |
| Top interjections | Olá, Adeus, Desculpa, Desculpe, Com licença, Até logo, Até já | Greetings and courtesy |
| Top interjections | Fixe, Parabéns | Compliments |
| Top words | não, sim, Onde, Porquê | Questions and small words |
| Top words | dois; catorze, dezasseis, dezassete, dezanove, vinte, cem | Sounds and spelling (*dois*); Numbers, time and prices |
| Top words | segunda-feira, sábado | Numbers, time and prices |

**Totals: 111 words skipped as already taught.** By deck:
- nouns 58 (judgement 14)
- verbs 2 (judgement 1)
- adjectives 10 (judgement 7)
- adverbs 5 (judgement 1)
- pronouns 6
- prepositions 2
- conjunctions 6 (judgement 1)
- interjections 9
- words 13

Flirting skipped nothing for this reason.

### Kept apart between my own decks
These are kept apart so that no card appears twice and no pair differs only by punctuation or an article:
- *Pronto, Claro, Boa, A sério, Saúde* are interjection cards. So *pronto, claro, sério* are not adjective cards, and *a saúde* is not a noun card.
- *lindo, giro, bonito, querido, simpático, engraçado, inteligente, divertido, elegante* are in the Flirting word layer, not in Top adjectives. *o encontro* is in Flirting, not in Top nouns.
- **Pairs kept on purpose**, as in the Spanish and Brazilian courses (the strings differ, and the lead may drop one of each): *antes / antes de*, *depois / depois de* (adverb and preposition); *lindo / Estás linda*; *giro / Estás muito giro / És tão gira*. Existing Compliments cards (*Muito bonito, Está giro*) and the Flirting words *bonito, giro* also differ only by more than an article.

## 4. Pron tool: words left out

Every pron comes from `tools/target/ptpt/respell.js` through the build script, unchanged. `respell.js` was not changed, and it cannot read an add-file.

The profile (§6.4) says no warned word goes on a card. The live course ships none: `repron.js` reports no "generator unsure" words before or after these files. So **every word the tool warned on was left out**, including inside multi-word cards. The vowels in the LEX lines below are the writer's own reading (`unverified:model`). No IPA page was opened for them in this job.

**Left out because the tool warns** (stressed *e / o* with no accent, or an *x* it cannot place):

| Deck | Words left out | Paste-ready `LEX_WORDS` line (unverified:model) |
|---|---|---|
| Top nouns (48) | a pessoa, a vez, a mulher, o nome, o problema, o amor, a cabeça, a sorte, o corpo, a escola, a festa, a mesa, o emprego, a resposta, o hotel, a loja, o professor, a empresa, a igreja, a janela, o preço, o ovo, o bilhete, a cor, a cerveja, o computador, o doutor, a guerra, a sede, o calor, a dor, o cinema, o futebol, a flor, a parede, o copo, a sopa, o arroz, o bolo, a sobremesa, a terra, a voz, os olhos, o erro, o segredo, o colega, o chefe, o dono | `pessôa vêz mulhér nôme problêma amôr cabêça sórte côrpo escóla fésta mêsa emprêgo respósta hotél lója professôr emprêsa janéla prêço ôvo bilhête côr computadôr doutôr guérra sêde calôr dôr cinêma futeból flôr parêde cópo sôpa arrôz bôlo sobremêsa térra vóz ólhos êrro segrêdo coléga chéfe dôno` |
| Top verbs (30) | poder, querer, saber, dizer, ver, morrer, perceber, acontecer, conhecer, viver, perder, correr, beber, ler, trazer, escrever, receber, aprender, parecer, vender, esquecer, responder, descer, nascer, chover, escolher, mexer, agradecer, haver, dever | Every *-er* infinitive has a closed stressed *e* [e]: `podêr querêr sabêr dizêr vêr morrêr percebêr acontecêr conhecêr vivêr perdêr corrêr bebêr lêr trazêr escrevêr recebêr aprendêr parecêr vendêr esquecêr respondêr descêr nascêr chovêr escolhêr mexêr agradecêr havêr devêr`. **This is the biggest gap in the course's core vocabulary:** almost every *-er* verb is missing. |
| Top adjectives (23) | melhor, pior, certo, novo, velho, forte, jovem, próximo, pobre, vermelho, preto, verde, famoso, aberto, amarelo, gordo, nervoso, leve, fresco, delicioso, maravilhoso, anterior, moderno | `melhór piór cérto nôvo fórte jóvem póbre prêto vêrde famôso abérto amarélo gôrdo nervôso léve frêsco deliciôso maravilhôso anteriôr modérno`. *próximo* needs the annotated form `próssimo` (already in `XREAL`). |
| Top adverbs (9) | talvez, apenas, fora, menos, às vezes, de novo, outra vez, cedo, depressa | `talvêz apênas fóra mênos vêzes cêdo depréssa` (plus *nôvo*, *vêz* above) |
| Top pronouns (13) | este, esse, essa, aquele, nosso, nossa, dele, dela, deles, delas, connosco, todos, vos | `êste êsse éssa aquêle nósso nóssa dêle déla dêles délas connôsco tôdos`. *vos* is a clitic: add it to `CLITIC`, not to LEX. |
| Top prepositions (5) | sobre, fora de, em vez de, à volta de, conforme | `sôbre vólta confórme` |
| Top conjunctions (4) | embora, ou seja, ora, quer | `embóra óra quér` (*seja*: see below) |
| Top interjections (13) | Olha, Olhe, Oh, Eh pá, Fogo, Bolas, Ena, Socorro, Força, Credo, Boa sorte, Por amor de Deus, Oxalá | `ólha ólhe óh éh fôgo bólas socôrro fôrça crédo`. *Que pena*, *Que bom*, *Que giro* and every exclamative *Que …!* are also left out, because the tool always gives `kih` (profile §6.5). |
| Top words (9) | todo, toda, qualquer, zero, doze, treze, terça-feira, sexta-feira, agosto | `tôdo tôda qualquér zéro dôze trêze têrça agôsto` |
| Flirting (14) | os olhos, o cabelo, a voz, charmoso, jeitoso, carinhoso, fofo, doce, encantador; and the phrases *Queres sair comigo*, *Adoro estar contigo*, *Gostas de mim*, *Com todo o gosto*, *… obrigada pelo convite* | `cabêlo charmôso jeitôso carinhôso fôfo dôce encantadôr quéres adóro góstas pêlo` |

**Left out because the Lisbon vowel needs an `EXC` entry, not LEX.** Lisbon has [ɐ] before a palatal (*j, lh*), so the stressed vowel is neither *ay* nor *eh*: *a igreja, a cerveja, velho, vermelho, seja (ou seja), sexta-feira* (also [ɐjʃ]). *Ena* and *Oxalá* (open initial *o*) also need an ear check.

**Left out although the tool does not warn: the pron would be silently wrong.**
- **Unstressed *a* or *o* before coda *l*, which stays full [a] / [ɔ].** These are the same cases as *almoço* and *igualmente*, which the tool stores whole: *voltar* (`vool-`), *almoçar* (`uhl-`), *alguém, algum, alguma, alguma coisa* (`uhl-`), *a aldeia* (`uhl-`). The *-almente* adverbs (`uhl-`) are *realmente, finalmente, normalmente, geralmente, especialmente, principalmente*.
- **Final *-vel* [vɛl], which the tool gives as `-vihl`:** *possível, incrível, horrível, provavelmente*.
- **Adverbs in *-mente* keep the base word's vowel, but the tool reduces it:** *claramente, exatamente, certamente, imediatamente*. *felizmente* and *infelizmente* are fine and were kept.
- **Open pretonic *o*:**
  - *sozinho* (Portugal [sɔ-]);
  - *olhar*, *normal* and *preocupado* (not verified, so left out).
- **Other wrong sounds:**
  - *o supermercado* (`-pihr-`: *super-* keeps an open [ɛ]);
  - *dezoito* (`ZOY`: Portugal [ɔj], the key's `awy`);
  - *corado* in *Estás a ficar corado* (pretonic *o*, not verified);
  - *o trânsito* (`s` for [z]);
  - *excelente* (`ih-s` for [(ɐj)ʃs]);
  - *especial, o feriado, planear, demasiado, aliás* (a hiatus where Portugal has a glide).

**Finding for the lead (existing course): *gosto*** (`unverified:model`). `LEX_WORDS` has `gôsto` (closed). That is right for the noun *o gosto* (taste), but the writer believes the verb form *eu gosto* has an open [ɔ] in Portugal. The Brazilian course's CORE-SOURCES says the verb is open, but only for Brazil. No Portugal IPA page was opened to confirm it. One string has one pron, so the existing cards *Gosto de Lisboa, Gosto do Porto, Gosto do queijo, Eu gosto, Gosto da praia, Gosto de café, Não gosto de café, Gosto do pequeno-almoço* all show `GOHSH-too`. Please have a native check this. No new card uses *gosto*: the Flirting phrases use *Estou a gostar de …* (`goosh-TAHR`) instead.

Kept, but worth an ear:
- *Hum* `oong`;
- *Ei* `uhy`;
- *o restaurante* `khihsh-tuhw-RUHN-tih` (the key's unstressed *au* is `uhw`; speakers keep [aw]);
- *o rio* `KHEE-oo`;
- *o avião, criar, continuar, enviar, viajar* (hiatus shown where Portugal may have a glide);
- word-initial unstressed *e-* as `ih` (*errado, o exemplo, a ementa, elegante, Estás elegante*): this follows the course key (profile §9: *estação* keeps the short first vowel as *ih*), but speakers often say [i].

## 5. Flirting

There is no `docs/plans/compliments-ptpt.md`. The Brazilian finished Flirting deck was the model. It was rebuilt for Portugal:
- *tu* forms (*Estás linda, És tão gira, Fazes-me rir*);
- *giro / gira* and *bonitão* as the local favourites;
- *Tens namorado?*;
- *Posso pagar-te um café?*;
- *Adorava!* (the Portugal "I'd love to");
- *Estás a gozar comigo?*;
- no *você*, no *pra*, no *a fim de*, no *cantadas*, no *gato / gata*.

The layers:
- **Words:** 25 cards, gender forms in each note.
- **Phrases:** 20 cards, grouped by the word they come from.
- **Moves and replies:** 17 cards:
  - seven moves (invitations, asking for a number, *Tens namorado?*);
  - three yeses (*Adorava, Combinado, Sim, vamos*);
  - two playful deflections (*Estás a gozar comigo?, És sempre assim?*);
  - five ways to say no, of which three are clear and kind: *Obrigada, mas tenho namorado*, *Obrigada, mas não estou interessada*, *Somos só amigos*.

19 dialogues: one ends in a yes (*Vamos jantar juntos* → *Adorava!*), and three end in a gracious no.

Notes give who says it to whom, the other gender form, and how forward it is (mild / warm / bold). Open flirting is ordinary in Portugal, so no indirect-culture note was needed. Compliments on looks stay with the smile, style and "you look …". *Piropo* (a catcall) is deliberately not taught.
