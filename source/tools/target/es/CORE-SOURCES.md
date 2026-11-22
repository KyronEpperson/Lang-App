# Core words, part T1 (Top nouns, Top verbs, Top adjectives): sources and skips

Writer EN-ES-T1, 2026-11-22. Files: `decks-t1.js`, `extra-t1.js`. The other six core decks and Flirting are by the other writer.

## 1. Frequency sources actually opened

**Read this first: these decks are only partly in source order.** Within each deck, every word that has a rank below sits in that rank order (the one exception, el grupo, is noted). Words without a rank are placed by judgement between them. No full, lemmatised, part-of-speech list could be read from this session. The order is real frequency where a source below gives a rank, and the writer's judgement everywhere else. Judgement leaned towards spoken, everyday Latin American Spanish, which is what a subtitles list would show.

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| Wikipedia, [Most common words in Spanish](https://en.wikipedia.org/wiki/Most_common_words_in_Spanish), lemma table | Mark Davies, *A Frequency Dictionary of Spanish* (2006), about 20 million words of 20th-century written and spoken Spanish. The table shows the top 100 lemmas only. | Wikipedia text is CC BY-SA 4.0; the underlying data is from a copyrighted book, and only the ranks were used. | **Real order for the head of each deck.** Verbs 1–24 follow Davies exactly: ser, haber, estar, tener, hacer, poder, decir, ir, ver, dar, saber, querer, llegar, pasar, deber, poner, parecer, quedar, creer, hablar, llevar, dejar, seguir, encontrar. Nouns: vez, año, tiempo, cosa, hombre, parte, vida (día, rank 71, is already taught). Adjectives: primero, grande, nuevo (ranks 60, 62, 99), which open the adjective deck in that order. Davies' other "adjectives" in the top 100 (su, todo, este, ese, otro, mucho, mi, alguno, mismo, poco, tanto, nuestro, cada, más, menos) are determiners and quantifiers, so they are left to the other writer's decks. |
| Same Wikipedia page, word-form table | RAE, CREA "1000 formas más frecuentes", 160 million words, 1975–2004 | as above | Cross-check only. |
| Corpus del Español sample, [span_40k_lemmas.txt](https://www.wordfrequency.info/span/samples/span_40k_lemmas.txt), via [wordfrequency.info](https://www.wordfrequency.info/span/files.asp) | Davies' two-billion-word Web/Dialects corpus. Lemmatised and tagged, but the free sample keeps **only every tenth lemma** (IDs 5, 15, 25 …). | No licence or terms are stated on the page. Only the ranks were used, nothing was copied. | **Rank anchors**, where a word appears in the sample. Verbs: tomar 115, sentir 125, empezar 215, estudiar 535. Adjectives: grande 75, mayor 135, diferente 205, pequeño 265, bajo 455, blanco 585, vivo 745, perfecto 865, abierto 1345, tranquilo 1615, cerrado 1845, querido 2055, favorito 4115. Nouns: hora 165 (taught), casa 185, amor 245, razón 275, camino 335, luz 385, cabeza 525, sueño 605, viaje 665, suerte 775, oficina 1185. Web text over-ranks institutional words (sistema, institución, negocio), so most of those were left out. In each deck the anchored words run in rank order, with one deliberate exception: el grupo (sample rank 175) is kept low (position 95), because that rank comes from web text. |

**Could not be read** (all tried on 2026-11-22):
- raw.githubusercontent.com (hermitdave FrequencyWords, OpenSubtitles 2018) and www.uv.es (`subtitle_wiki.txt`, the Buchmeier subtitles list): blocked by this session's network policy (403).
- en.wiktionary.org `Wiktionary:Frequency_lists/Spanish`, `/Spanish1000` and `/Spanish1001-2000`: returned "not found" to the fetch tool.
- fr.wiktionary.org `es_1-1000` and ko.wiktionary.org (Spanish 1000): not found.
- ELELex (CEFR-graded lemma list): opened, but its licence is CC BY-NC-SA and it has no direct download link. Not used.

**Suggestion for the lead:** to make the order fully source-based, re-rank these same cards against a subtitles lemma list (OpenSubtitles or SUBTLEX-ESP) from a machine that can download it. Only the order inside each deck should move. The choice of words should hold.

Meanings, notes and examples are all written by the writer, not copied from any source.

## 2. Variety choices

Mexican-leaning forms, following the course profile: el celular (not móvil), manejar (not conducir), tomar (never coger), mandar for the everyday "send" (enviar was left out because the two meanings would clash), el barrio (note: Mexico also la colonia), el dinero (note: lana).

## 3. Words skipped because the course already teaches them

These are exact card targets in `decks-a.js` or `decks-b.js`, so each one was left out (rule 3).

**Top nouns**
- el día: already taught in Days, dates and weather.
- la gente, la hora, el hijo, la calle, el niño, el perro, la cara, la llave, el café, el papel, el vaso, el zapato, el queso, el jugo: already taught in Sounds and spelling.
- la novia, la amiga: already taught in People and family.
- el desayuno, el arroz: already taught in Food and drink.
- el mercado: already taught in Shopping and clothes.
- la cocina, el baño, la cama: already taught in Home and routine.
- el mapa: already taught in Around town and directions.
- el carro, el boleto, el aeropuerto: already taught in Travel and transport.
- la farmacia: already taught in Health and emergencies.
- la reunión: already taught in Work and school.
- el fin de semana: already taught in Likes and free time.
- el problema, el hospital, el animal, el éxito, la sopa: already taught in Traps for English speakers.

That is 35 nouns.

**Top verbs:** none. No existing card is a bare infinitive. Verbs that appear only inside phrase cards (tengo, me gusta, trabajo, vivo …) were added as infinitives, which the brief allows.

**Top adjectives:** none were exact matches. (embarazada is in Traps for English speakers but would not have made the list.) Adjectives that appear only inside phrases (alto, triste, cansado, enfermo, rojo, negro, blanco, azul, verde) were added as bare words.

**Total skipped as already taught: 35.**

## 4. Words left for the other writer's decks (to avoid "is in two decks")

- **Flirting deck, single-word layer:** guapo, bonito, lindo, hermoso, bello, precioso, encantador, dulce, divertido, chistoso, simpático, inteligente, listo, la voz, el pelo, la sonrisa, la risa, los ojos. These are left out of Top adjectives and Top nouns even though bonito, hermoso and la voz are frequent. If the lead prefers them in Top adjectives, the Flirting deck must drop them.
- **Top words / Top pronouns / Top adverbs:** determiners and quantifiers (mucho, poco, otro, todo, mismo, cada, tanto, alguno), mañana and ayer.
- **At risk of an exact clash, please check:** la semana, el mes, la mañana, la noche, la tarde (Top words, "days and times"); el amor, el ojo, el corazón, el cielo (Flirting); primero and último (ordinals, if Top words carries them); solo, mejor, peor, igual, rápido, seguro, claro (also adverbs); bajo (also a preposition); bueno, claro (also interjections). A clash is more than a validator warning: `lib.js` throws on a duplicate EXAMPLES key, and solo, claro, mejor, rápido, seguro and bueno all have EXAMPLES rows here.

## 5. Pron tool

Every pron was generated by `respell.js` through a script, never typed by hand. All 295 outputs were checked by eye, and none looked wrong. No word had to be dropped for a pron problem. Loanwords the tool would get wrong (pizza, show, wifi, jeans, el internet) were never added.


---

# Core words, part T2: sources and skips

Writer EN-ES-T2, 2026-11-22. Files: `decks-t2.js` and `extra-t2.js` (Top adverbs, Top pronouns, Top prepositions, Top conjunctions, Top interjections, Top words), plus `decks-f.js` and `extra-f.js` (Flirting). The writer EN-ES-T1 did Top nouns, Top verbs and Top adjectives (`decks-t1.js`).

## 1. Frequency sources actually opened

**Read this first: only the top of each deck is in source order.** The only ranks this session could read were two top-100 tables. Cards with a rank come first, in rank order. The rest follow in the writer's judgement, which leaned toward spoken, everyday Mexican and Latin American Spanish.

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| Wikipedia, [Most common words in Spanish](https://en.wikipedia.org/wiki/Most_common_words_in_Spanish), word-form table | RAE, CREA 3.2: more than 160 million word forms from books, press, radio and TV, 1975–2004. The table shows only the top 100 forms. | The Wikipedia text is CC BY-SA 4.0. The ranks come from RAE data; only the ranks were used. | **Main sort key.** Its forms match card targets one to one (su, sus, esta, del). |
| Same page, lemma table | Mark Davies, *A Frequency Dictionary of Spanish* (Routledge 2006): about 20 million words, about a third of them spoken. Top 100 lemmas, with part of speech. | As above. The ranks come from a copyrighted book; only the ranks were used. | **Second key**, for a word not in the CREA top 100 (nada, mucho, poco, nuestro). It was not used for *alguno*: its lemma rank (50) also counts algún, alguna and algunos, which would put a single form above *yo* and *tú*. Its part-of-speech tags also settled which deck a word that has two homes goes in. |

| Corpus del Español sample, [span_40k_lemmas.txt](https://www.wordfrequency.info/span/samples/span_40k_lemmas.txt), from [wordfrequency.info](https://www.wordfrequency.info/span/files.asp) | Davies' web/dialects corpus, lemmatised and tagged. The free sample keeps only every tenth lemma. | No licence or terms are stated. Only ranks were used. | **Anchors for the judgement tails**, where a word is in the sample: contra 145, casi 235, mí 285, cuatro 395, allí 425, seis 825, aquel 1015, alguno (pronoun) 1105, ocho 1415, dentro 1675, cuánto 1915, delante 2875, temprano 4175, catorce 6155, cuidado (interjection) 6605, caray 16865. These moved *contra* to the head of the preposition tail and *alguno* down beside *ninguno*. The others already agreed with the judgement order. |

**Sort rule used by the build script:** CREA rank. If there is none, the Davies rank plus 0.5. If there is neither, the writer's judgement, placed after every ranked card.

**Cards with a source rank** (all the others are ordered by judgement):
- **Top adverbs:** más 23, ya 34, muy 46, así 61, bien 69, ahora 73, después 78, tan 87, siempre 89, menos 100 (all CREA). Judgement from *aquí* on.
- **Top pronouns:** se 9, lo 21, le 27, me 29, qué 53, yo 56, todos 60, nos 62, él 66, te 79, eso 83, ella 92 (CREA); nada 95 (Davies). Judgement from *tú* on, with the sample anchors above.
- **Top prepositions:** de 1, en 5, a 7, del 10, por 13, con 14, para 18, al 20, sin 31, sobre 32, entre 35, hasta 48, desde 49, durante 88, según 99 (CREA). Judgement from *hacia* on.
- **Top conjunctions:** que 3, y 6, como 22, o 24, si 30, cuando 36, porque 52, ni 63, donde 68, e 75, aunque 81 (CREA). Judgement from *u* on.
- **Top interjections:** **all judgement.** No interjection is in either top-100 table.
- **Top words:** la 2, el 4, los 8, las 11, un 12, no 15, una 16, su 17, sus 26, este 33, todo 37, esta 38, dos 41, mi 51, uno 67, ese 72, cada 74, otro 77, esa 82, tres 93, sí 94 (CREA); mucho 45, poco 74, nuestro 82 (Davies). Judgement from *¿Dónde?* on. The numbers and the days run in counting order, and the months in calendar order.

**Could not be read** (all tried on 2026-11-22):
- raw.githubusercontent.com (hermitdave FrequencyWords, OpenSubtitles 2018, CC BY-SA 4.0) and its Hugging Face mirror: refused by this session's network proxy (403).
- www.uv.es `subtitle_wiki.txt` (Buchmeier's subtitles list, CC BY-SA 3.0): host not reachable, and not on the fetch allowlist.
- en.wiktionary.org `Wiktionary:Frequency_lists`, fr.wiktionary.org `es_1-1000` and ko.wiktionary.org (Spanish 1000): "not found" from the fetch tool. The wiktionary.com copy of the Spanish index opened, but it lists sources only and gives no ranks.
- rae.es CREA page: client error.
- SUBTLEX-ESP ([Cuetos et al. 2011](https://www.uv.es/revispsi/articulos2.11/1CUETOS.pdf)): the paper opened, but it has no word table, and its data host was not tried.

**Suggestion for the lead:** re-rank the judgement tails against a subtitles list (OpenSubtitles 2018 or SUBTLEX-ESP) on a machine that can download one. Only the order inside each deck should change.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Where words with two homes went

- **Articles and determiners go in Top words**, as the brief says: el, la, los, las, un, una, este/esta/estos/estas, ese/esa/esos/esas, aquel, mi, mis, tu, su, sus, nuestro, todo, cada, otro, mucho, poco, varios. Davies tags several of these as adjectives, but none of them is in `decks-t1.js`.
- **la, los, las** go in Top words as articles, with their object-pronoun use in the note. **lo** goes in Top pronouns, because the article *lo* is far rarer.
- **yes / no** go in Top words: *no* is there, not in Top adverbs.
- **que, como, donde, cuando** (no accent mark) go in Top conjunctions. **¿Qué?, ¿Quién?, ¿Quiénes?, ¿Cuál?** go in Top pronouns as question pronouns. **¿Dónde?, ¿Cómo?, ¿Cuánto?, ¿Cuántos?, ¿Adónde?** go in Top words as question words.
- **Demonstratives:** the determiner forms are in Top words. Only the neuter pronouns *esto, eso, aquello* are in Top pronouns.
- **Possessives:** *mi, tu, su, nuestro* are in Top words. *mío, tuyo, suyo* are in Top pronouns.

## 3. Words skipped because the course already teaches them

Exact matches against every card target in `decks-a.js`, `decks-b.js`, `decks-c.js.draft` and `decks-t1.js`, ignoring capitals and ¿ ¡ ? ! . , marks. The words marked (judgement) are not exact matches; they were left out because a card already teaches them in a phrase.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top adverbs | también, tampoco, entonces | Questions and connectors |
| Top adverbs | mañana, ayer | Days, dates and weather |
| Top adverbs | solo | Top adjectives (decks-t1, "alone; on its own"; its note gives the adverb meaning "only"). The adverb is the more frequent use (CREA 54, as sólo), so the lead may want the card moved to Top adverbs. |
| Top adverbs | cerca, lejos (judgement) | Around town and directions (*Está cerca.*, *Está lejos de aquí.*); *cerca de* and *lejos de* are in Top prepositions |
| Top adverbs | mucho, poco | Not skipped: they are determiners in Top words |
| Top pronouns | none skipped | (*conmigo* and *contigo* appear only in lesson text, never as cards) |
| Top prepositions | al lado de, enfrente de (judgement) | Around town and directions (*al lado de la iglesia*, *enfrente del banco*) |
| Top conjunctions | pero | Questions and connectors |
| Top conjunctions | entonces | Questions and connectors (counted once, above) |
| Top interjections | ¡Hola!, ¡Adiós!, ¡Perdón! | Greetings and courtesy (*Hola.*, *Adiós.*, *Perdón.*) |
| Top interjections | ¡Ayuda! | Health and emergencies |
| Top interjections | ¡Felicidades!, ¡Bien hecho! | Compliments (draft and plan Deck 1) |
| Top interjections | ¡Claro!, ¡Bueno!, ¡Ya! | Would clash with *claro* and *bueno* (Top adjectives) and *ya* (Top adverbs) |
| Top words | quince, dieciséis | Numbers, time and prices |
| Top words | ¿Cuándo?, ¿Por qué? | Questions and connectors |
| Top words | el lunes, el sábado | Days, dates and weather |
| Top words | el domingo (judgement) | Days, dates and weather (*los domingos*) |
| Flirting | la cita | Top nouns (decks-t1); it was planned as a Flirting word card |

**Total:** 25 words skipped: 20 exact matches (entonces counted once; la cita included) and 5 by judgement (cerca, lejos, al lado de, enfrente de, el domingo). The three interjections left out to avoid a clash (¡Claro!, ¡Bueno!, ¡Ya!) are not in that count.

**Near-duplicates with T1, kept on purpose** (no target is identical, so the release check passes; the lead may want to drop one of each pair):
- *los ojos* (Flirting) and *el ojo* (Top nouns);
- *tarde* (adverb, "late") and *la tarde* (noun, "afternoon");
- *¡Salud!* (interjection) and *la salud* (noun);
- *¡Cuidado!* (interjection) and *cuidar* (verb).

## 4. Words the pron tool could not handle (left out)

- **¡Uy!**: `respell` gives `wee`. It should be close to *ooy*.
- **¡Mmm!**, **¡Shh!**: no vowel, so `respell` throws.

**Correct, but may read wrong to an English speaker:** *aunque* gives `OWN-keh` and *seis* gives `says`. Both follow the key, but they look like the English words *own* and *says*. Cards kept.

Every other card's pron came from `respell.js` through the build script, and two runs of `repron.js` rewrote nothing.

## 5. Ten cards a native speaker should check first

1. `¡Órale!`: is "Okay! / Wow! / Come on!" the right gloss, and is it safe in front of strangers?
2. `¡Aguas!`: is the Mexican "look out" still in everyday use?
3. `¡Sale!`: Mexican "deal / okay", and its register.
4. `ahorita`: the "now" vs "in a while" note.
5. `pues`: the gloss "well; since".
6. `o sea`: the gloss "I mean; in other words".
7. `Me pierdo en tus ojos.` (Flirting): does it read as a cheesy joke, as intended, or as too much?
8. `Me la pasé muy bien contigo.` (Flirting): is it natural across Mexico and Latin America?
9. `¡Qué chula te ves!` (Flirting): is it warm, or too casual or regional?
10. `Eso se lo dices a todas.` (Flirting): does it come across as playful, not rude? (This was already an open question in the plan.)
