# Core words, Flirting and Compliments (en-it): sources and skips

Writer: core-words writer for `it`, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), and `decks-c.js` and `extra-c.js` (Compliments, started from the `.draft` files: the 14 draft cards and their extras are kept unchanged, with 16 cards added).

## 1. Frequency: what was opened, and what is judgement

**Read this first: apart from one deck, the order is the writer's judgement.** No ranked Italian frequency list (lemma or word form) could be opened from this session. Each deck is sorted by the writer's judgement of everyday spoken frequency for a US beginner in Italy: the most useful and most heard words first. The choice of words is also judgement. Every meaning, note, example and dialogue was written by the writer; none was copied.

**The one source that sets an order:**

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| M. Prada, "LIPSI. Il lessico di frequenza dell'italiano parlato in Svizzera", *Italiano LinguaDue* 1 (2010), [PDF at air.unimi.it](https://air.unimi.it/retrieve/dfa8b98f-b09e-748b-e053-3a05fe0a3a96/lessico%20frequenza%20ital2.pdf). A review of E. M. Pandolfi, *LIPSI* (OLSI, 2009). | LIPSI: about 400,000 words of **Swiss Italian speech** (Ticino and the Grisons, 2004–2006, about 60 hours; one sixth broadcast, the rest conversation). | Journal article; no licence stated. Only the order was used. | Read **through the fetch tool's summary**, not as the raw PDF. The review gives the conjunctions in frequency order, with no ranks: coordinating *e, ma, poi, però, o, cioè, quindi, comunque, così, allora, oppure, né*; subordinating *che, perché, quando, se, dove, anche se, visto che, mentre, perciò, per quanto*. |

**Where that order is used:** in **Top conjunctions**, the cards *che, e, se, però, o, cioè, quindi, comunque, anche se, oppure, visto che, mentre, né, perciò, per quanto* keep LIPSI's order within each of its two lists. The two lists are merged by judgement, since the review ranks each list separately. *ma, allora, perché, quando* are already taught (section 3). *poi* and *così* are in Top adverbs, and *dove* is in Top words. The tail *siccome, infatti, dunque, finché, anzi, eppure* is judgement. Caveat: the corpus is Swiss-Italian speech, not speech from Italy.

**Every other deck is entirely in judgement order:** Top nouns, Top verbs, Top adjectives, Top adverbs, Top pronouns, Top prepositions, Top interjections, Top words, Flirting and Compliments. In Top words, the articles come first, then yes / no, determiners and question words. The numbers run in counting order, the days in week order and the months in calendar order.

**Opened, but not used to rank anything:**
- Tullio De Mauro, "Il Nuovo vocabolario di base della lingua italiana", [Internazionale, 2016](https://internazionale.it/opinione/tullio-de-mauro/2016/12/23/il-nuovo-vocabolario-di-base-della-lingua-italiana). It describes the NVdB: a corpus of 18.8 million words in six genres, and a "fondamentale" band of about 2,000 words that covers 86% of text. The word list itself (a PDF where the bands are shown only in bold or italic type) was not read, so no word here is claimed to be "fondamentale".
- Pandolfi's LIPSI flyer ([ti.ch PDF](https://m4.ti.ch/fileadmin/DECS/DCSU/OLSI/documenti/Pandolfi_LIPSI_lessico_di_frequenza_italiano_parlato.pdf)): the index only, with no list.
- CoLFIS description page ([linguistica.sns.it](https://linguistica.sns.it/CoLFIS/Description.htm)): describes the corpus but shows no words. The download page was not reachable.
- A Clozemaster "100 most common words" page: no corpus is named, so it was **not** used.

**Could not be read** (all tried on 2026-11-23):
- Sketch Engine's free Italian lists (total, nouns, verbs and adjectives, as CSV): www.sketchengine.eu was refused by the session proxy (403), and the fetch tool would not open the CSV links.
- OpenSubtitles 2018 lists (hermitdave FrequencyWords, CC BY-SA 4.0): raw.githubusercontent.com, cdn.jsdelivr.net (GitHub mirror) and huggingface.co (StephanAkkerman mirror) were all refused (403). The `it` folder page would not open.
- Kelly project Italian list (`ssharoff.github.io/kelly/it_m3.xls`): refused by the proxy (403); the fetch tool read it only as binary data.
- Leipzig Corpora (api.wortschatz-leipzig.de: 403; cls.corpora.uni-leipzig.de: robots.txt unreachable).
- en.wiktionary.org (Frequency lists index, Italian subpages) and ja.wiktionary.org (Italian 1000): "not found" from the fetch tool. The en.wiktionary.com copy of the Italian index opened, but it lists sources only and gives no words. it.wikipedia.org "Lessico dell'italiano" and en.wikipedia.org's Italian word list: not found.
- PyPI (`wordfreq`) and the npm registry: no network route from this session.

**Suggestion for the lead:** re-rank each deck against a lemmatised Italian list (Sketch Engine's POS lists, OpenSubtitles 2018 run through a lemmatiser, or the Kelly list) on a machine that can download it. Only the order inside each deck should move. The choice of words should hold.

## 2. Grammar fit (rule 2)

- **No slot renamed or added.** Italian has all eight classes as English does, so the nine fixed deck names are kept.
- **Articles and the object pronouns *lo, la, gli, le*:** the same words. They are carded once each, in **Top words**, as articles (the more frequent use), and the note gives the pronoun use. Top pronouns has *li, mi, ti, ci, vi, si, ne*, which are not articles. `lessons` `lo-la` and `piacere` teach the object pronouns.
- **Contracted prepositions** (*del, al, nel, dal, sul*) are in Top prepositions as cards, with the other forms in the note. *un'* and *l'* are not cards; they are in the notes of *una*, *il* and *la*.
- **Possessives** (*mio, tuo, suo, nostro, vostro*) are one set of words in Italian, used as both "my" and "mine". They are in Top pronouns; the note gives the agreeing forms. *questo / quello* are there too.
- **Question words:** *chi, che cosa, quale* are in Top pronouns; *dove, come, quanto* are in Top words; *perché* and *quando* are already taught.
- **Register:** *tu* first, as the profile says. Notes give the *Lei* form where a phrase changes (Compliments: *Ha fatto…, Canta benissimo!*; interjections: *Si figuri!*, *Scusi!*). *Lei* is shown only in the note of *lei* (she), so there is no pair of cards that differ only by a capital letter.
- **Verbs** give the *io* form and say "Regular", "Regular -isc- verb" or "Irregular". Where it matters, the note also gives the irregular past participle or "Past with essere". **Adjectives** give the feminine form, or "Same for both".

## 3. Skipped because the course already teaches them

Checked against every card target in `decks-a.js`, `decks-b.js` and the Compliments draft, with case, punctuation and a leading article ignored. No new card matches an existing one. The words below are ones the deck would otherwise contain; "(judgement)" means the match is not exact but the word is already a card in a phrase, or differs only by article or number.

| Deck | Left out | Already taught in |
|---|---|---|
| Top nouns | il giorno, l'anno, la notte, il cuore, il telefono, la chiave, il pesce | Sounds and spelling |
| Top nouns | il fratello, la sorella, la figlia, il marito, la moglie, i genitori, la nonna | People and family |
| Top nouns | il pane, la colazione, il pranzo, la cena, la carne | Food and drink |
| Top nouns | il bagno, la cucina, il letto | Home and routine |
| Top nouns | la piazza, la chiesa, la banca | Around town and directions |
| Top nouns | il biglietto, il passaporto | Travel and transport |
| Top nouns | la riunione | Work and study |
| Top nouns | la camera | Traps for English speakers |
| Top nouns | il fine settimana | Likes and free time |
| Top nouns | l'amico (judgement: *un amico*, *un'amica*), il figlio (judgement: *i figli*) | People and family |
| Top nouns | il caffè, il latte (judgement: *un caffè*, *un latte*) | Food and drink; Café and menu Italian |
| Top nouns | il conto (judgement: *Il conto, per favore.*) | Food and drink |
| Top verbs | piacere | Greetings and courtesy (*Piacere.*) |
| Top adverbs | ieri | Days, dates and weather |
| Top adverbs | anche, allora | Questions and connectors |
| Top adverbs | vicino, lontano (judgement: *È qui vicino.*, *È lontano?*); they are carded as *vicino a* and *lontano da* in Top prepositions | Around town and directions |
| Top conjunctions | ma, allora (exact); perché, quando (differ only by "?" from *Perché?*, *Quando?*) | Questions and connectors |
| Top interjections | Ciao!, Prego., Scusa., Piacere. | Greetings and courtesy |
| Top interjections | Aiuto! | Health and emergencies |
| Top interjections | Che bello!, Che noia! | Feelings and states |
| Top interjections | Buon appetito! | Food and drink |
| Top interjections | Complimenti! | Compliments (draft) |
| Top words | lunedì | Days, dates and weather |
| Top words | sabato (differs only by article from *il sabato*) | Days, dates and weather |

**Total:** 55 words left out as already taught: 48 exact matches (counting *perché*, *quando* and *sabato*, which differ only by punctuation or article, and *allora* once) and 7 by judgement. Numbers above twenty (*ventuno, ventotto, cento, mille*) are already cards, and outside the "numbers to twenty" scope anyway.

**Left out to avoid a clash between the new decks** (one owner per word):
- *ora* (now): it would differ only by its article from *l'ora* (hour) in Top nouns. The note on *adesso* gives it.
- *qua*, *là*: their meanings would repeat *qui*, *lì*, so they are in those cards' notes.
- *Bravo!*, *Pronto?*, *Su!* as interjections: *bravo* and *pronto* are cards in Top adjectives, and *su* is in Top prepositions. Each note gives the exclamation.
- *certo* is carded once, as the interjection *Certo!*.
- *poi*, *così* (LIPSI conjunctions) are in Top adverbs; *dove*, *come* are in Top words.
- **Flirting vs Top adjectives:** *bello* and *gentile* are in Top adjectives. The Flirting word layer uses *bellissimo, carino, stupendo, simpatico, dolce* and the other flirting adjectives, none of which is in Top adjectives.
- **Flirting vs Compliments:** the plan's *Sei proprio simpatico!* stays in Compliments. Flirting uses *Mi stai simpatico.* instead, so the two decks have no pair that differs only by its gender ending.

## 4. Pron tool

Every pron came from `tools/target/it/respell.js` through the build script, unedited. `repron.js` was run twice, and both runs rewrote 0. The tool's word list was not changed, because the brief does not allow it. **Six items were left out because the generator's stress is wrong or doubtful:**
- **scegliere**: the tool gives `sheh-LYEH-reh`; it should be SHEH-lyeh-reh.
- **sia** (sia… sia): the tool gives `syah`; it should be two syllables, SEE-ah.
- **riuscire**: the tool gives `ryoo-SHEE-reh`. This is doubtful: dictionaries give ri-u-scì-re, with a hiatus.
- **tenero** (Flirting): the tool gives `teh-NEH-roh`; it should be TEH-neh-roh.
- **il fascino** (Flirting): the tool gives `fah-SHEE-noh`; it should be FAH-shee-noh.
- **Ma smettila!** (Flirting): the tool gives `zmeht-TEE-lah`; it should be ZMEHT-tee-lah. It was replaced by *Esagerato!*

If the lead adds *scègliere, sìa* (with hiatus), *rïuscire, tènero, fàscino, smèttila* to `LEX`, these cards can come back.

**Flagged "check stress" by the tool, but correct, so kept:** *notizia* (noh-TEE-tsyah), *leggero* (lehd-JEH-roh), *davvero* (dahv-VEH-roh).

**Not attempted:** interjections with no vowel (*mmm, shh*), on which the tool throws, and loanwords (*wow, okay, sexy*).

**Checked by eye, and right:**
- *-ére* infinitives: avere, potere, sapere, dovere, volere, vedere, tenere, rimanere, cadere.
- antepenultimate *-ere* verbs: prendere, chiedere, nascere, succedere, spegnere, crescere.
- hiatus words: io, mio, tuo, suo, due, cui, paura.
- voiced z: zero, mezzo, azzurro.
- other antepenultimate stress: numero, macchina, tavolo, giovane, facile, utile, ultimo, subito, medico, musica, domenica, undici to sedici.

*Ahi!* comes out as `ai`, one syllable. This is acceptable, but a native may prefer AH-ee.

## 5. Counts

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 102 | 10 | 0 |
| Top verbs | 110 | 70 | 0 |
| Top adjectives | 72 | 48 | 0 |
| Top adverbs | 50 | 38 | 0 |
| Top pronouns | 36 | 36 (all) | 0 |
| Top prepositions | 35 | 27 | 0 |
| Top conjunctions | 21 | 17 | 0 |
| Top interjections | 32 | 0 | 32 (all) |
| Top words | 57 | 0 | 0 |
| Flirting | 63 (20 words, 23 phrases, 20 moves and replies) | 10 | 21 (four end in a yes, three in a gracious no) |
| Compliments | 30 (14 draft + 16 new) | 4 draft + 7 new | 8 draft + 9 new |

Patterns: 3 in `extra-t.js` and 2 in `extra-f.js`, plus the draft's 2 in `extra-c.js`.

## 6. Ten cards a native speaker should check first

1. `Mi lasci il tuo numero?` (Flirting): is it natural, or is *Mi dai il tuo numero?* more usual? (This was already open in the plan.)
2. `Che galante!` (Flirting): does it sound dated or ironic? (Also open in the plan.)
3. `Mi stai simpatico.` (Flirting): is it read as friendly liking, not romance, as the note says?
4. `Ho una cotta per te.` (Flirting): is it natural for adults, or teenage?
5. `Sei una persona solare.`: is it a warm, ordinary compliment?
6. `Esagerato!` (Flirting): is it playful as a reply to a compliment?
7. `Vabbè`: are the register and the gloss "Oh well / Fine, whatever" right?
8. `Mah!` and `Boh!`: are the glosses "Hmm, I'm not so sure…" and "Dunno!" right, and are they too casual for strangers?
9. `È una ricetta di mia nonna.` (Compliments): is crediting the family a typical reply to praise of food?
10. `fra`: is the note (the same as *tra*; pick the one that sounds better) right? Also check `per quanto`, glossed only as "as far as" (*per quanto ne so*).
