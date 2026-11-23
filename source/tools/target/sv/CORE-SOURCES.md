# Core words and Flirting for en-sv: sources, order, skips

Writer EN-SV-CORE, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (the nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), this file, `POS-COVERAGE.md`, and ten deck entries appended to `profile.json`. No Compliments deck was written: the course already has one (`Compliments`, group Watch out, in `decks-b.js`), so brief item 3 was skipped. There is no `docs/plans/compliments-sv.md`, so Flirting was built from scratch.

## 1. Frequency source actually opened

| Source | What it is based on | Licence | What was opened |
|---|---|---|---|
| hermitdave **FrequencyWords**, `content/2018/sv/sv_50k.txt` ([github.com/hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords)) | OpenSubtitles 2018 (opus.nlpl.eu), Swedish film and TV subtitles. Word forms with raw counts, lower-cased; **not lemmatised and not tagged for part of speech.** The 50k file is the 50,000 most frequent forms. | Content CC BY-SA 4.0, code MIT (stated in the repository's README.md). Only ranks were used; nothing was copied into the decks. | `git clone --depth 1 --no-checkout` into a new empty scratch folder, sparse checkout of `content/2018/sv` only, commit `525f9b5` (2022-02-07). Opened as plain text: `sv_50k.txt` and `README.md`. `sv_full.txt` and `sv_ignored.txt` were checked out but **not opened or used**. No other file of the repository was read or run. |

No other frequency source was tried in this job (no web search, no Wiktionary, no Språkbanken list).

### How the order was made

- **Rank of a card** = the best (lowest) line number in `sv_50k.txt` among the forms listed for that card in the build script: for a noun its bare, definite and plural forms (`dag, dagen, dagar`); for a verb its infinitive, present and sometimes past (`göra, gör, gjorde`); for an adjective its base, `-t` and `-a` forms; for anything else the word itself, without `!`, `?` or `.`. This is a stand-in for a lemma rank, built by hand from a form list.
- **Homographs inflate some ranks**, because the list cannot tell forms apart: `ett fel` (151) also counts the adjective/adverb *fel*; `en far` (234) may count *far* "travels"; `vara` takes its rank from *är*; `en tur`, `ett sätt` (also the imperative of *sätta*), `rätt` (also a noun), `låg` and `man` are similar. `hända` uses *händer*, which also counts the plural of *hand*; for that reason *händer* was **not** used for `en hand`.
- **Every single-word card in the nine Core decks has a source rank** and sits in rank order inside its deck.
- **Ordered by judgement** (placed after all ranked cards, in the order written), and only these:
  - Top pronouns: `den här, det här, de här, den där, det där, de där` (two-word forms have no rank).
  - Top conjunctions: `för att, därför att, så att, även om, trots att, som om, utan att`.
  - Top interjections: `Kom igen!`, `Lycka till!`.
  - Top words: `hur mycket, hur många, hur dags, hur länge, i morse, nästa vecka, förra veckan`, then the numbers `tre … nitton` in **counting order** (their ranks were deliberately not used).
- **Flirting** is not frequency-ordered: the brief fixes its three layers, and phrases are grouped by the word they start from.
- **Choice of words** is the writer's judgement for an adult beginner, checked against the list (every chosen single word is in the top 50,000; most are in the top 2,000). The lowest-ranked kept cards are `ett äpple` (7608), `mätt` (8423), `Ojdå!` (14535) and `Prosit!` (15683): kept because they are everyday words that subtitles under-count.

Every meaning, note, example and dialogue was written by the writer.

## 2. Class slots: renamed or added

**None renamed, none added.** Swedish has all nine classes in the English sense: real prepositions, coordinating and subordinating conjunctions, and no measure words or counters. Decisions about where a word lives:

- **Articles:** `en` and `ett` are in Top words (also "one"). Swedish has no word for "the": the definite suffix is grammar, not a card. The front article `den / det / de` is not carded separately (`den`, `det`, `de` are already cards as pronouns).
- **Possessives** `min / mitt / mina … deras`, `sin / sitt / sina` are in Top pronouns, as the course's `possessives` lesson treats them; they work as determiner and pronoun alike.
- **Demonstratives** `den här … de där`, `denna / detta / dessa`, and the relative `som` are in Top pronouns.
- **`att`** (that; to before a verb) and **`om`** (if; also the preposition "about") are in Top conjunctions; the notes give the other use.
- **`så`** is in Top adverbs (so, like that), with its "so, therefore" use in the note. **`när`** as a conjunction is already a card (as the question word), so it is not repeated.
- **`sedan`** is in Top adverbs; its spoken form `sen` is in the note only, per the course profile (§2.1: `sen` is recognition only). Likewise `någon` / `något` / `sådan` with `nån` / `nåt` / `sån` in the note.
- **Yes / no** (`ja, nej, jo, japp, nä`) are in Top words; `jo` (yes to a negative question) has no English twin.
- **Particle verbs** are not a class: the motion adverbs `ut, upp, in, ner, hem, bort, hit, dit` that build them are in Top adverbs.

## 3. Words skipped because the course already teaches them

Checked by script against every card target in `decks-a.js` and `decks-b.js`: exact match, match after removing `. , ! ?` and capitals, and match after removing `en` / `ett` / `att` in front. The release check passes with no "is in two decks" line.

| Deck | Skipped (already a card) | Where |
|---|---|---|
| Top nouns | bil, hus, mamma, pappa, barn, syster, bror, familj, flicka | People and family |
| Top nouns | kaffe, kafé, kanelbulle, smörgås, ost, knäckebröd, kaka; mat (Sounds and spelling) | Food and fika |
| Top nouns | lägenhet, rum, kök, badrum, säng | Home and routine |
| Top nouns | biljett, karta, hållplats; buss, tåg, flygplats, resa | Around town; Travel and transport |
| Top nouns | lärare, student, universitet, möte, klasskamrat; film, hobby | Work and study; Likes and free time |
| Top nouns | apotek | Health and emergencies |
| Top nouns | bok, skola, kille, skjorta, kyrka, stjärna, kex | Sounds and spelling |
| Top nouns | present, termin, semester, chef, glass, fart, godis | Traps for English speakers |
| Top verbs | gå, köpa | Sounds and spelling |
| Top verbs | vänta, stanna (as `Vänta!`, `Stanna!`) | Health and emergencies |
| Top verbs | simma (as `att simma`) | Likes and free time |
| Top adjectives | bra, rolig, lugn, gift | Traps for English speakers |
| Top adverbs | här | Sounds and spelling |
| Top adverbs | hemma, ofta, alltid, aldrig | Home and routine |
| Top adverbs | idag, igår, imorgon | Days, dates and weather |
| Top adverbs | ibland | Likes and free time |
| Top pronouns | jag, du, han, hon, vi, ni, de, den, det, mig, dig, sig, hen | Feelings and states |
| Top pronouns | vad, vem | Questions and connectors |
| Top prepositions | none | |
| Top conjunctions | och, men, eller, när | Questions and connectors |
| Top interjections | Hej!, Hej hej!, Hej då!, Tack!, Förlåt!, Ursäkta., Varsågod! | Greetings and courtesy |
| Top interjections | Hjälp!, Kom!, Vänta!, Stanna! | Health and emergencies |
| Top interjections | Grattis!, Snyggt!, Vad fint!, Vad gott! | Compliments; Food and fika |
| Top words | noll, två, fyra, fem, sju, tio, elva, tjugo | Numbers, time and prices; Sounds and spelling |
| Top words | måndag … söndag | Days, dates and weather |
| Top words | var, hur, varför (with vad, vem, när above) | Questions and connectors |
| Flirting | rolig (no word card; used in the phrase `Du är så rolig.`), hår (Sounds and spelling: no hair card) | |

**Count: 121 words skipped as already taught** (nouns 51, verbs 5, adjectives 4, adverbs 9, pronouns 15, prepositions 0, conjunctions 4, interjections 15, top words 18 counting the seven days as seven; `rolig` and `hår` for Flirting not counted again).

**Left out to avoid a near-duplicate pair** (targets differing only by an article, a final -t or punctuation), not counted above:
- `en man` (kept the pronoun `man`), `ett hem` (kept the adverb `hem`), `ett kort` (kept the adjective `kort`), `en fråga` (kept the verb `fråga`; the noun is in its note).
- `riktig` / `riktigt` and `säker` / `säkert`: only `säker` (adjective) kept.
- `härlig` (kept the interjection `Härligt!`), `ett öga` (kept `ögon` in Flirting), `en klocka` (kept `klockan` in Top words).

## 4. Flirting deck: approach

Three layers in order: 19 words, 25 phrases grouped by the word they start from, 19 moves and replies (63 cards). Written for Sweden, where flirting is low-key: the classic first move is an invitation to `fika`, not a compliment on looks, and the notes say so. `Jag tycker om dig` carries more weight than English "I like you"; `Jag älskar dig` is kept out of the deck and mentioned only in a note. Swedish adjectives do not change for the sex of the person, so notes say "same for a man or a woman" and give the `-t` / `-a` forms instead. `sexig` was left out on purpose (ordinary in Swedish, but not needed for a warm, respectful deck). Four kind, clear ways to say no: `Tack, men jag har pojkvän.`, `Tack för att du frågar, men nej.`, `Det är snällt av dig, men nej tack.`, `Jag tycker om dig, men bara som vän.` Dialogues: 20, including one that ends in a yes (`Vill du ta en fika?`) and several that end in a gracious no.

## 5. Examples and dialogues

`extra-t.js`: 264 examples (verbs 68 of 101, adjectives 43 of 70, adverbs 39 of 57, prepositions 23 of 30, conjunctions 17 of 17, pronouns 47 of 47, plus nouns 15 and top words 12), 21 dialogues (every interjection), 4 patterns. `extra-f.js`: 11 examples, 20 dialogues, 3 patterns. Verbs appear in the form a sentence needs (`finns`, `lär mig`), which the course also does.

## 6. Pron tool: words left out

Every pron is the output of `respell.js`, generated by script and pasted unchanged; `repron.js sv` rewrote 0 on both runs. The tool is rule-based, has no add-file, and this job may not edit its `LEX`, so every word it got wrong was **left out**. Each output was checked by eye.

**Wrong stress (left out):** `minut` (MEE-nuht), `mobil`, `affär`, `polis`, `idé`, `historia`, `kollega`, `företag`, `intressant`, `perfekt`, `fantastisk`, `precis`, `tyvärr`, `absolut`, `bredvid`, `förbi` (FUR-bih), `tillbaka`, `tillsammans`, `överallt`, `eftersom`, `ifall`, `igenom`, `varandra`, `ikväll` (IHK-vehl), `inatt`, `okej`/`Okej.`, `Hallå!`, `Herregud!`, `Jaså?`, `Aha!`, `Hurra!`, `intresserad` (Flirting), and the months `januari, februari, april, september, oktober, november, december`. Because 7 of the 12 months fail, **no months were carded** (half a set would mislead); `mars, maj, juni, juli, augusti` come out correctly.

**Wrong vowel length or consonant (left out):** `vilja` (VEE-yah, should be short i with l), `sälja`, `välja` (l dropped, long vowel), `en värld` (short ä; long in speech), `arg` and `en helg` / `i helgen` (final g is j after l/r), `tom` (long o; it is short), `borta` (long o; short), `ihop` (stress and vowel), `enligt` (short e; long), `några` (short å; long), `rodnar` (Flirting), `sötnos` (Flirting), `Puh!` (`puehh`), `wow` (`voohv`).

**Kept although the tool printed "check stress":** `ögonblick, ansikte, använda, orolig, upptagen, verkligen, ingenting, antingen, underbar, ett leende` (all first-syllable stress, which is correct) and `arbeta` (already in the profile's §6.5 list).

**Kept, but simplified (the aid's known limits, profile §6.5):** `säga` (SAE-gah; speech often *säja*), `tredje` (TRAY-yeh), `en kärlek`, `nöjd` (`nuryd`: the r is the short-ö token), `Åh!` (`ohh`).

**For the lead:** adding the words above to `LEX` in `respell.js` (an edit this job may not make) would let a later pass add them; the most useful are `vilja, några, tillbaka, tillsammans, precis, tyvärr, eftersom, minut, polis, idé, okej, hallå, ikväll` and the months.

## 7. Ten cards a native speaker should check first

1. `Jag tycker om dig.` (Flirting): is "I like you (romantically)" the right weight, and the note "stronger than English"?
2. `Vill du ta en fika?` (Flirting): is it really the low-key date opener the note claims, not only a friendly coffee?
3. `snygg` (Flirting): "good-looking; hot", rated warm: too strong or too weak?
4. `Fy!` (Top interjections): is "Yuck! Shame!" right, and is it fine to say to an adult?
5. `Fasen!` (Top interjections): "mild swearword, OK in most company": true today?
6. `ju` and `väl` (Top adverbs): are the glosses "as you know; after all" and "surely; I suppose" fair for a beginner?
7. `fast` (Top conjunctions): "although; but (casual)", and the example `Jag är trött, fast jag sov länge.`
8. `Sluta, nu blir jag röd!` (Flirting): natural for "Stop it, now I'm blushing"?
9. `Det säger du säkert till alla.` (Flirting): playful, not rude?
10. `typ` (Top adverbs): is the spoken filler "like; sort of" worth a core card, and is `ett fel` rightly a top noun or only inflated by the adjective *fel* (§1)?
