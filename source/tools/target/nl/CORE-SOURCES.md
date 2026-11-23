# Core words, Flirting and Compliments: sources, order and skips (en-nl)

Writer EN-NL-T, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments). There was no `docs/plans/compliments-nl.md` and no draft, so both social decks were written from scratch. Every meaning, note, example and dialogue was written by the writer. Nothing was copied from a source.

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 83 | 7 | 0 |
| Top verbs | 81 | 53 | 0 |
| Top adjectives | 69 | 40 | 0 |
| Top adverbs | 51 | 33 | 0 |
| Top pronouns | 34 | 34 (all) | 0 |
| Top prepositions | 28 | 21 | 0 |
| Top conjunctions | 12 | 12 (all) | 0 |
| Top interjections | 27 | 0 | 27 (all) |
| Top words | 42 | 3 | 0 |
| Flirting | 52 | 7 | 22 |
| Compliments | 25 | 4 | 12 |

## 1. Frequency source actually opened

**hermitdave/FrequencyWords**, Dutch 2018 list. Fetched with `git clone --depth 1 --filter=blob:none --sparse https://github.com/hermitdave/FrequencyWords`, followed by a sparse checkout of `content/2018/nl`, `README.md` and `LICENSE`. Commit `525f9b560de45753a5ea01069454e72e9aa541c6` (7 Feb 2022).

- **Opened and read:** `README.md` (the lists come from the OpenSubtitles 2018 corpus, opus.nlpl.eu, in the format `word count`), the top of `LICENSE` (MIT for the code; the README says content is CC BY-SA 4.0), and `content/2018/nl/nl_50k.txt` (the top 50,000 word forms with counts). The only use was to look up ranks with a small script in the scratch folder.
- **Checked out but never opened:** `nl_full.txt` and `nl_ignored.txt`. No code from the repository was run.
- **What the list is:** lowercased word forms from film and TV subtitles. It has no lemmas and no part of speech, and it contains clitic debris (`n`, `m`, `t`, `s`, `z`). Subtitles push up crime and drama words (*dood* is rank 144) and push down household words.

No other source was opened. Wiktionary and corpus lists were not tried, because the git route worked.

## 2. How each deck is ordered

The sort key is the rank of a word form in `nl_50k.txt` (1 = most frequent). Each deck uses one rule. Cards with no rank follow the ranked ones, in the writer's order.

| Deck | Rank rule | Not in list order (writer's judgement) |
|---|---|---|
| Top nouns | the bare noun, without *de* / *het* (*mensen* is looked up in the plural, the form on the card) | *de weg* goes last: the form *weg* (rank 98) is mostly the adverb "away" |
| Top verbs | the infinitive; *zijn* by its ik-form *ben* (rank 28), because the infinitive *zijn* is also the possessive "his" | none |
| Top adjectives | the better rank of the base form and the -e form (*groot* / *grote*) | none |
| Top adverbs, Top pronouns, Top prepositions | the exact form | none |
| Top conjunctions | the exact form: *als* 26, *dus* 86, *toen* 112, *sinds* 436 | the 8 multi-word cards (*ook al*, *zelfs als*, *net als*, *als … dan*, *hoe … hoe*, *of … of*, *en … en*, *noch … noch*) |
| Top interjections | the exact form, without punctuation: 23 cards | *Kom op!*, *Pfoe!*, *Nou ja.*, *Ja hoor.* (multi-word, or not in the 50k list) |
| Top words | exact form, for the first 17 cards (*de* … *beide*) | *zo'n* (not looked up), then numbers 9–19 and the tens in counting order, ordinals, *half* / *kwart*, and the seasons in calendar order |
| Flirting, Compliments | none | the whole deck is in layer order, as the brief asks: words, then phrases grouped by the word they come from, then moves and replies |

**Ranks that are shared by a homograph,** so the position is higher than the class alone would earn: *te* (16, also the infinitive marker), *er* (20), *dan* (34, also "than"), *al* (68), *laat* (84, also a form of *laten*), *even* (114, also "even, equal"), *vroeg* (331, also the past of *vragen*), *zeker*, *waar* (where / true), *dat* and *die* (pronoun, conjunction, relative), *het* (pronoun and article), *haar* (her / hair), *je*, *ons*, *hun*, *arm* (poor / the arm), *druk*, *open*, *dood*, *Zeg!* (also the imperative of *zeggen*), *eten* (also "food"), *reizen* (also the plural of *reis*).

**Where a word with two homes went:** *dat* and *die* → Top pronouns, with the conjunction and the relative in the note. *het* → Top pronouns ("it"), with the article in the note; *de* and *een* → Top words. *haar*, *je*, *ons* and *hun* each have one card that covers both object and possessive. *het leven* → nouns; *eten* and *werken* → verbs. *weer* → adverbs (again), with *het weer* "weather" in the note. *de weg* → nouns, with *weg* "away" in the note. *zijn* → verbs, with nothing for the possessive. *waar* → Top words as the question word "where", with "true" in the note. *beter* → adjectives. *binnen* and *buiten* → adverbs. *boven* → prepositions. *sinds* → conjunctions. *vroeg* and *laat* → adverbs.

## 3. Class slots

- **All nine names are kept, with no rename.** Dutch has prepositions, articles and conjunctions much as English does, and it has no measure words or particle class that would need a slot.
- **Separable verbs** (*opbellen*, *meenemen*, *aankomen*, *uitgaan*) are in Top verbs, and their notes show the split. The particles *op*, *uit* and *aan* are not made into a separate class, because Dutch grammar counts them as prepositions or adverbs.
- **Pronominal adverbs** (*erop*, *daarmee*, *waarmee*) are a real Dutch class. Grammar treats them as adverbs, so they get no deck, and none is a card: most are stressed on the second part, which the pron tool gets wrong (*daarom*, *daarna*). This is listed as a gap in POS-COVERAGE.md.
- **Conjunctions:** most Dutch subordinators are stressed on the second syllable, and the pron tool puts the stress on the first (section 5). That leaves 4 single-word conjunctions. The deck reaches the validator's minimum of 12 with the correlative pairs and fixed two-word conjunctions that people really use. None of these is invented.

## 4. Decisions for the lead

- **Particles.** The profile (§2.1, §5) keeps *toch*, *wel*, *nou*, *hoor* and *even* out of A1. They are frequency ranks 47 to 114, so a frequency deck has to deal with them. *wel* ("do", the opposite of *niet*), *toch* ("anyway, still") and *even* ("for a moment") are in Top adverbs, each glossed by its plain meaning. Their notes say that the softener use comes later. *Nou…* ("Well…") is an interjection card. *hoor* appears only inside *Ja hoor.* If the lead prefers to hold the line, drop these cards. Nothing else depends on them except their own example or dialogue rows.
- **Flirting words not in Top adjectives.** *mooi*, *leuk*, *knap*, *lief*, *schattig*, *grappig*, *aardig*, *gezellig* and *prachtig* are in Flirting only. *mooi* and *leuk* are frequent (both under rank 300) and would otherwise head Top adjectives.
- **Flirting culture.** Dutch flirting is direct but low-key. *leuk* and *gezellig* do most of the work. *Ik vind je leuk* is the real declaration. Many couples split the bill, so *Ik betaal.* is noted as a signal. *sexy* is ordinary Dutch, but it was left out, because the pron alphabet has no *x*.
- **Answering a compliment.** The Dutch answer is a plain *Dank je!* or a light play-down (*Ach, het valt wel mee.*). The note warns against overdoing the modesty.

## 5. Pron tool: words left out

Every pron was generated by `tools/target/nl/respell.js` through the build script and pasted unchanged. Two runs of `repron.js` rewrote 0 prons. `respell.js` is a rule set with a whole-word exception list (`EXC`). It cannot read an add-file, and this job may not edit it. Every distinct word on a new card was read once against its output. A wrong stressed syllable, a wrong vowel, a wrong consonant or a throw meant the card was **left out**. The correct form is given so the lead can add `EXC` entries and restore the cards:

- **Stress on the wrong syllable** (stress belongs on the CAPITALISED part): ma-NIER, mi-NUUT, pro-BLEEM, i-DEE, fa-MI-lie, me-NEER, me-VROUW, ho-TEL, se-CON-de, kwar-TIER, per-SOON, re-CEPT; ver-AN-de-ren, te-RUG, te-RUG-ko-men; goed-KOOP, per-FECT, BE-zig; na-TUUR-lijk, al-LEEN, HE-le-maal, AL-le-maal, AL-les, in-der-DAAD, op-EENS, van-A-vond, van-NACHT, van-MOR-gen, van-OCH-tend, daar-OM, daar-NA, me-TEEN, op-NIEUW, te-ge-LIJK, ten-MIN-ste, ER-gens, o-ver-AL, on-ge-VEER, ie-der-EEN, el-KAAR, zich-ZELF; van-AF, te-gen-O-ver, van-UIT; ter-WIJL, zo-DAT, hoe-WEL, voor-DAT, na-DAT, tot-DAT, zo-DRA, door-DAT, als-OF, zo-ALS, zo-LANG, aan-ge-ZIEN, zo-WEL; hoe-RA, ge-fe-li-ci-TEERD, hoe-LANG, hoe-ZO, trak-TEER, in-te-RES-se, al-le-MACH-tig; months: ja-nu-A-ri, fe-bru-A-ri, a-PRIL, au-GUS-tus, sep-TEM-ber, ok-TO-ber, no-VEM-ber, de-CEM-ber.
- **Wrong vowel or consonant:** *zeggen*, *liggen*, *leggen* (the tool writes `ZEHK-khuh`: a doubled *gg* comes out as *k* + *kh*); *rustig* and *zestien* (short vowel shown as long); *nogal* (short *o* shown as long); *via* (`VIH`, should be *ee*); *uw* (`uew`, should be long *uu* + w); *speciaal* (`spuh-sih-AAHL`, should be *spay-SHAAHL*); *charmant* (*ch* is *sh*, the tool gives `kh`); *Petje af!* (short *e* shown as `PAY`); *baby* and *computer* (English loans); *tenzij* (the first syllable becomes a schwa and loses its *n*).
- **Interjections:** *hè* (the tool gives `hay`, the same as *hé*); *hoi* (`HOH-ih`); *goh*, *joh*, *bah* (the tool writes a final `h`); *hm*, *sst* and *pff* throw, because they have no vowel.
- **Months:** only *maart*, *mei*, *juni* and *juli* come out right, so all twelve months were left out of Top words rather than teach a third of them.

**Kept as approximate,** in the same class as the `-nds` the course review tolerated: *wereld* and *duizend* (unstressed `eh` where speech has a schwa), *steeds* and *sinds* (written `ds`, said `ts`), *gezondheid* (`ZAWND-hight`), *hebt* in the four *Je hebt…* Flirting phrases (`hehbt`, said `hehpt`), and *trouwen* (`TROW-wuh`).

## 6. Words skipped because the course already teaches them

The check matched exact targets after removing capitals, punctuation and a leading *de* / *het* / *een* / *mijn* / *ons* / *onze*, against all 300 existing cards in `decks-a.js` and `decks-b.js`, and it found 0 clashes. The words below were left out for that reason: every existing single-word card that one of the core decks would otherwise hold.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | man, maan, rug, muur, naam, zon, zee, paard, mes, boom, vis, pen, fiets | Sounds and spelling |
| Top nouns | huis, school, deur, hond, prijs, licht, neus, tuin, hoed | Hard sounds |
| Top nouns | dag (as *Dag.*) | Greetings and courtesy |
| Top nouns | vrouw, vader, moeder, vriend, vriendin, jongen, zoon, meisje, kind, broer, dochter, ouders, zus, gezin, opa, oma | People and family |
| Top nouns | afspraak | Days, dates and weather |
| Top nouns | water, koffie, thee, melk, brood, bier, kaas, soep, ei, broodje | Food and drink |
| Top nouns | winkel, broek, tas, jas, shirt, euro | Shopping and clothes |
| Top nouns | kamer, bed, bank, tafel, keuken, stoel, raam, slaapkamer, badkamer | Home and routine |
| Top nouns | straat, hoek, brug, museum | Around town and directions |
| Top nouns | trein, bus, station, vliegtuig, metro, kaartje | Travel and transport |
| Top nouns | baan, kantoor, les, collega, universiteit, huiswerk, docent | Work and school |
| Top nouns | film, boek, muziek, hobby; weekend (by judgement: *in het weekend*) | Likes and free time |
| Top nouns | chef, kok, agenda, map, file | Traps for English speakers |
| Top verbs | nemen, wonen | Sounds and spelling |
| Top verbs | lachen | Hard sounds |
| Top verbs | opstaan | Home and routine |
| Top adjectives | goed, klein, koud, blauw | Hard sounds |
| Top adjectives | slim, slank, brutaal, actueel | Traps for English speakers |
| Top adverbs | vandaag, morgen, gisteren, 's ochtends, 's avonds | Days, dates and weather |
| Top adverbs | links, rechts, rechtdoor; dichtbij (by judgement: *Het is dichtbij.*) | Around town and directions |
| Top adverbs | eigenlijk, uiteindelijk, eventueel | Traps for English speakers |
| Top pronouns | wat, wie (as *Wat?*, *Wie?*) | Questions and connectors |
| Top prepositions | none | |
| Top conjunctions | en, maar, of, want, omdat | Questions and connectors |
| Top interjections | Hallo, Dag, Doei, Pardon | Greetings and courtesy |
| Top words | één, twee, drie, vier, vijf, zes, zeven, tien, twintig, eenentwintig, honderd | Numbers, time and prices |
| Top words | acht | Hard sounds |
| Top words | hoe, wanneer, waarom (as *Hoe?*, *Wanneer?*, *Waarom?*) | Questions and connectors |
| Top words | maandag … zondag | Days, dates and weather |
| Flirting | slim (clever) | Traps for English speakers |

**Totals:** 91 nouns (plus *weekend* by judgement), 4 verbs, 8 adjectives, 11 adverbs (plus *dichtbij* by judgement), 2 pronouns, 5 conjunctions, 4 interjections, 22 Top words and 1 Flirting word.

**Inside the new decks:** no target is repeated across the eleven new decks, under the same normalisation. *het haar* was dropped from Flirting because it differs from the pronoun *haar* only by its article; *het kapsel* replaces it. Exclamation forms that would clash with an adjective were kept as phrases (*Wat lekker!*, *Het is heerlijk.*, not *Lekker!* or *Heerlijk!*).
