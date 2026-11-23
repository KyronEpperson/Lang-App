# Core words, Flirting and Compliments (en-pt): sources and skips

Writer EN-PT-CORE, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments). Brazilian Portuguese only. *você* is the default "you"; *o senhor / a senhora* appear as pronoun cards and in notes. European forms appear only as "Portugal: …" notes, and none is taught.

## 1. Frequency source actually opened

**Read this first.** The only ranked list this session could read is a **European Portuguese** subtitles list of **word forms**. Not lemmas, and not Brazilian. Each deck uses it for the order of the cards that have a count. Every other card is placed by judgement, and section 1.2 names each one.

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| hermitdave *FrequencyWords*, 2018 list `pt/pt_50k.txt`, read from the Hugging Face mirror [StephanAkkerman/frequency-words-2018, `pt/pt_50k.txt` (raw)](https://huggingface.co/datasets/StephanAkkerman/frequency-words-2018/raw/main/pt/pt_50k.txt). Origin: [github.com/hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords). | OpenSubtitles 2018, Portuguese (the `pt` list, which is mainly European Portuguese subtitles). One line per word form, with its count. | The README gives CC BY-SA 4.0 for the content. The mirror's dataset card says CC BY 4.0. Only counts were used, and no text was copied. | **Sort key** for every card marked as source-ranked below. A card's key is the count of its exact form: the infinitive for verbs, the masculine singular for adjectives, the bare noun for nouns. Two exceptions sum singular and plural: *ano + anos* and *pessoa + pessoas*. For a multi-word card the key is one word's count: *de repente* uses *repente*, *perto de* uses *perto*, *longe de* uses *longe*. |

**How the counts were read, and how far to trust them.** This session's network policy blocks raw downloads, so the file could not be downloaded (raw.githubusercontent.com and huggingface.co both returned 403 to curl). It was read through the web-fetch tool, which answers questions about a page. That tool reported the exact counts of the candidate words, but only from the first 100,000 characters of the file, roughly the top 6,000–7,000 forms. Words it reported as absent fall below that window. The counts came back identical when the same words were asked for again in different batches (for example *ser* 609411, *falar* 305482, *fazer* 686159, *mundo* 117778). They were not checked line by line against the file, because the file could not be opened directly. The European bias is visible in the data: *ônibus*, *celular* and *cadê* are absent, *trem* is at 1824, *moça* at 2347 and *cachorro* at 3619, while *contigo*, *lhe*, *olá* and *depressa* rank high.

**Could not be read** (all tried on 2026-11-23):
- The Brazilian list `pt_br/pt_br_50k.txt`, on GitHub raw and on the Hugging Face mirror: 403 from curl, and the web-fetch tool refused it as not on the allowlist.
- en.wiktionary.org frequency pages: 403. The en.wiktionary.com copy of `Wiktionary:Frequency_lists/Portuguese` opened, but it lists sources only and gives no ranks.
- wordfreq (PyPI) and npm packages: the package registries could not be reached from this session.
- UFRGS CorPop list: robots.txt could not be read. Lexical Computing sample: no words in the page text. SUBTLEX-PT-BR (Tang 2012): the paper opened, but it has no word table.
- Davies and Preto-Bay, *A Frequency Dictionary of Portuguese* (2008): no lawful open copy was found, so no rank is taken from it.

**Suggestion for the lead:** re-rank these same cards against `pt_br_50k.txt`, or a lemmatised Brazilian list, from a machine that can download one. Only the order inside each deck should move.

### 1.1 Order rule used by the build script
Cards are sorted by key, highest first. A judgement card gets a stand-in count, so it sits where the writer thinks it belongs among the source-ranked cards. In Top words, the numbers then follow in counting order, then the days, then the months. Top interjections are in judgement order only.

### 1.2 Cards placed by judgement (every other card is in source order)
- **Top nouns** (12 of 98). Brazilian words the European list misses or under-ranks: o ônibus, o celular, o cachorro, o trem, a moça, o bebê, a praia, o jeito, o cara. Words whose European form means something else: o tipo (Portugal: "guy"), o fato (Portugal: "suit"), o rapaz.
- **Top verbs** (21 of 109). Verbs whose infinitive is rare next to their finite forms, so an infinitive count misplaces them: ser, estar, ter, ir, poder, querer, saber, dar, vir. Verbs whose everyday Brazilian forms (*acho, gosto, preciso, entendo, conheço, pego, lembro, coloco, moro, demora, prefiro, adoro*) are far more common than the European infinitive count shows: achar, gostar, precisar, entender, conhecer, pegar, lembrar, colocar, morar, demorar, preferir, adorar. All the other verbs follow their infinitive count. Expect some distortion from that (*falar* and *fazer* sit high because their infinitives are common after *vou*, *quero* and *pode*).
- **Top adjectives** (3 of 65): ruim (Portugal says *mau*), tranquilo, brasileiro.
- **Top adverbs** (5 of 41): de novo, às vezes, geralmente, em cima, embaixo.
- **Top pronouns** (8 of 38): você (moved to the top: the European count under-ranks it), o senhor, a senhora, isto (Brazilian speech prefers *isso*), todo mundo, alguma coisa, lhe and contigo (both moved down: European-heavy).
- **Top prepositions** (11 of 25): a (its count is mostly the article *a*), pra (Brazilian speech), and the multi-word prepositions antes de, depois de, dentro de, por causa de, fora de, atrás de, em vez de, através de, a partir de.
- **Top conjunctions** (14 of 22): por isso, do que, só que, pois, já que, ou seja, caso, para que, assim que, depois que, mesmo que, até que, desde que, antes que. *que* and *se* are source-ranked, but their counts include the pronouns *que* and *se*.
- **Top interjections** (all 30). The forms are shared with other words (*nossa* = our, *viva* = alive, *claro* = clear, *sério* = serious, *vamos* = let's go), so their counts say nothing about the interjections.
- **Top words** (3 placed by judgement): cadê, né, meia. Numbers, days and months are in calendar order. The 16 function words at the top are source-ranked.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Class slots: renamed or added

None renamed and none added. Portuguese has all eight classes as English does. Fitted to Portuguese:
- **Contractions** (*no, na, do, da, pelo, pela, ao, à, num, pro*) are not separate cards. They are in the notes of the preposition cards *em, de, por, a, para, pra*, and of *o* in Top words.
- **Articles**: *o* (with a, os, as in its note) and *um* (meaning "a; one") are in Top words. The preposition *a* ("to; at") is its own card in Top prepositions, so the string *a* appears only once.
- **Possessives and demonstratives** are one card each in Top pronouns (meu, seu, nosso, dele, dela, deles, este, esse, aquele), with the feminine form in the note. Portuguese uses the same word as determiner and as pronoun.
- **o senhor / a senhora** are pronoun cards: they are the formal "you".
- **se** is in Top conjunctions (if), and its note gives the reflexive pronoun. **que** is in Top conjunctions, and its note gives *o que* (what). *o que* is not a card, because it would pair with *que*.

## 3. Words skipped because the course already teaches them

Checked against every card in `decks-a.js` and `decks-b.js`, ignoring capitals, punctuation and a leading article. Words marked "(judgement)" are not exact matches: they were left out because a phrase card already teaches them.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | o dia, a noite, a casa, o trabalho, o homem, a mãe, a mão, a cidade, o carro, a rua, o café, o coração, o pão, a chave, o leite | Sounds and spelling |
| Top nouns | a criança, o namorado | People and family |
| Top nouns | o almoço, o cardápio | Food and drink |
| Top nouns | o banheiro, a cozinha, a sala | Home and routine |
| Top nouns | o centro, a praça | Around town and directions |
| Top nouns | o aeroporto, a passagem | Travel and transport |
| Top nouns | o hospital, a farmácia | Health and emergencies |
| Top nouns | a reunião, a prova, o salário | Work and study |
| Top nouns | o verão | Days, dates and weather |
| Top nouns | o fim de semana | Likes and free time |
| Top nouns | a notícia, os parentes | Traps for English speakers |
| Top nouns | o pai, o filho, o irmão, a irmã, a avó, o tio, a amiga (judgement) | People and family (*o meu pai, o filho dela, a minha melhor amiga* …) |
| Top nouns | a tarde (judgement) | Greetings (*Boa tarde.*). Also, *tarde* (late) is in Top adverbs and would pair with it |
| Top verbs | assistir, puxar, pretender | Traps for English speakers |
| Top adjectives | legal | Spoken Brazilian Portuguese (*Legal!*) |
| Top adjectives | obrigado | Greetings and courtesy (*Obrigado.*): differs only by punctuation |
| Top adverbs | mais, também, então | Questions and connectors |
| Top adverbs | ontem, amanhã | Days, dates and weather |
| Top adverbs | perto, longe (judgement) | Around town and directions (*É perto daqui.*, *É longe daqui?*); *perto de* and *longe de* are in Top prepositions |
| Top pronouns | a gente | Spoken Brazilian Portuguese |
| Top prepositions | ao lado de, na frente de (judgement) | Around town and directions, Home and routine |
| Top prepositions | em cima de, embaixo de (judgement) | Home and routine (*em cima da mesa*, *embaixo da cama*); the adverbs *em cima* and *embaixo* are in Top adverbs |
| Top conjunctions | e, ou, mas, porque, então | Questions and connectors |
| Top conjunctions | como, quando | Questions and connectors (*Como?*, *Quando?*): they would differ from those cards only by punctuation |
| Top interjections | Oi!, Tchau! | Greetings and courtesy |
| Top interjections | Socorro! | Health and emergencies |
| Top interjections | Legal!, Valeu!, Beleza?, Espera aí! | Spoken Brazilian Portuguese |
| Top interjections | Que bom!, Que pena. | Feelings and states |
| Top interjections | Divirta-se! | Traps for English speakers |
| Top words | dezesseis, cem, mil | Numbers, time and prices |
| Top words | segunda-feira | Days, dates and weather |
| Top words | por que | Questions and connectors (*Por quê?*): they differ only by accent and punctuation |
| Top words | tipo | Spoken Brazilian Portuguese (*Tipo, eu não sei.*) |
| Flirting | Te amo., o namorado | Spoken Brazilian Portuguese; People and family |

**Totals, counted per deck: 87 words skipped.** By deck: nouns 45, verbs 3, adjectives 2, adverbs 7, pronouns 1, prepositions 4, conjunctions 7, interjections 10, words 6, Flirting 2. Of these, 72 match an existing card once capitals, punctuation and a leading article are ignored. The other 15 are by judgement: nouns 8, adverbs 2, prepositions 4, words 1. Two words count in two decks: *então* (adverb and conjunction) and *legal / Legal!* (adjective and interjection).

### Kept apart between my own decks (to avoid a duplicate or a pair)
- *Claro!*, *Sério?*, *Saúde!*, *Viva!* are interjection cards. So *claro* and *sério* are not adjective cards, *a saúde* is not a noun card, and *vivo* was not added.
- *Parabéns!*, *Que gracinha!* and *Você é muito engraçado.* are in Compliments, not in Flirting. *Imagina!* and *Que isso!* (both common replies to praise) are in Top interjections, not in Compliments.
- The Flirting word layer keeps *lindo, bonito, maravilhoso, charmoso, inteligente, simpático, querido, elegante, atraente*, so they are not in Top adjectives. *os olhos* is in Flirting, so *o olho* is not in Top nouns.
- **Pairs kept on purpose, as the Spanish course did** (the strings differ; the lead may drop one of each): *antes / antes de*, *depois / depois de*, *dentro / dentro de*, *atrás / atrás de*, *fora / fora de* (adverb and preposition); *fofo / Que fofo!*; *bonito / Que nome bonito!*; *meu / Meu Deus!*.

## 4. Pron tool: words left out

Every pron comes from `respell.js` through the build script; none was typed. `respell.js` was not changed. The validator fails a pron that differs between cards, so a wrong one cannot be patched in a single row. The tool warned on these, and they were **left out** because the guess was wrong (open *e / o* read as closed):
- *a forma* (shape) gave `FOHR-muh`; it should be open (FAWR). *fôrma* (baking tin) is the closed one.
- *aberto* gave `ah-BAYR-too`; it should be open.
- *a voz* gave `vohs` (and so did the phrase *Você tem uma voz linda.*); it should be open.
- *a paquera* gave `pah-KAY-ruh`; it should be open.
- Interjections: *Opa!* (`OH-puh`), *Olha!* (`OH-lyuh`), *Poxa!* (`POH-shuh`), *Eba!* (`AY-buh`), *Credo!* (`KRAY-doo`), *Droga!* (`DROH-guh`), *Bora!* (`BOH-ruh`) all need open vowels. *Hein?* gave `eh-EENG` for what is one nasal syllable.
- *Você tem bom gosto.* (Compliments): *gosto* is fixed to the verb reading (open), but the noun "taste" is closed. It was replaced by *Adorei a sua roupa.*

These warned, but the tool's guess is right, so they were kept: *sobre* (closed), *fofo* (closed), *Oba!* (closed), *Vixe!* (x = sh), *parece* (closed). Kept but worth an ear: *Uau!* `oo-OW` (one syllable in speech) and *Hum…* `oong`.

**For the lead:** adding *fórma, abérto, vóz, paquéra, ópa, ólha, póxa, éba, crédo, dróga, bóra* to `LEX_WORDS`, and *hein* to `EXC`, would let these words come back.

## 5. Compliments and Flirting plans

- **Compliments** has all 23 cards of Deck 1 in `docs/plans/compliments-pt.md`, plus eight more: *Que gostoso!* (food only), *Está de parabéns!*, *Você arrasou!*, *Ficou lindo!*, *Que capricho!*, *Adorei a sua roupa.*, *Adorei!*, *Obrigada pelo elogio.* That makes 31 cards.
- **Flirting** starts from Deck 2 of the plan, all 23 cards, and adds a 22-word layer and more phrases: 61 cards. It follows the plan's exclusions: no *gato / gata*, no *gostosa*, no *cantadas*, no *Te amo*. *Estou a fim de você* is kept and marked bold. Reply cards that change with the speaker's gender show the woman's form first, as the plan does, and give the man's form in the note.
