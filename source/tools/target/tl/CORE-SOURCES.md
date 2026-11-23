# en-tl Core words, Flirting and Compliments: sources, order and skips

Writer EN-TL-CORE, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments). There was no `decks-c.js.draft`. Compliments is built from Deck 1 of `docs/plans/compliments-tl.md`, and Flirting from that plan's Deck 2, then extended.

## 1. Frequency source (opened)

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, `content/2018/tl/tl_full.txt` ([GitHub](https://github.com/hermitdave/FrequencyWords), cloned at commit `525f9b5`, 2022-02-07) | OpenSubtitles 2018 Tagalog subtitles, tokenised: **10,665 word forms, 95,408 tokens in all**. This is a small corpus. It counts word forms, not lemmas, and it mixes in names and English words. | Content CC BY-SA 4.0; code MIT. | **Order and choice of words only.** No meaning, note or example comes from it. |

**How the order was made.** Each card has a list of forms whose counts are added together. For example, `gusto` adds gusto + gustong, `kain` adds kain + kumain + kumakain + kakain, and `ko` adds ko + kong. Any card whose summed count is **10 or more** is placed in count order, highest first, at the top of its deck. Cards **below 10** follow in the writer's order, which is by judgement, with spoken Manila use in mind. Counts below about 30 tie heavily in a corpus this small, so the lower ranked places are rough. Two caveats about the counting:
- Homograph forms are counted together. *ay* (marker) and *Ay!* (interjection) share one count; *para* (conjunction) and *para sa* (marker) both count the form *para*; - The months, the teen numbers, and multi-word cards with no form list (*kahit ano*, *pa rin*, *walang tao* …) have no count, so they are all ordered by judgement.

| Deck | Cards | Ranked from the list (count ≥ 10) | Ordered by judgement |
|---|---|---|---|
| Top nouns | 92 | 33 (tao 285 … bisita 10) | 59 |
| Top verbs | 40 | 30 (sabi 574 … gumising 10) | 10 |
| Top adjectives | 45 | 21 (malaki 70 … importante 10) | 24 |
| Top adverbs | 24 | 11 (mas 94 … marahil 10) | 13 |
| Top pronouns | 33 | 25 (mo 2419 … pareho 47) | 8 |
| Top markers and particles | 39 | 33 (ang 4035 … raw 10) | 6 |
| Top conjunctions | 17 | 16 (at 1260 … kaysa 28) | 1 |
| Top interjections | 19 | 8 (Hoy! 109 … Mabuhay! 15) | 11 |
| Top words | 46 | 19 (hindi 1845 … magkano 10) | 27 |
| Flirting, Compliments | 50, 28 | not ranked: built in the layers and groups the brief sets | |

## 2. Slots fitted to Tagalog (brief rule 2)

- **`Top prepositions` is renamed `Top markers and particles`.** Tagalog has no prepositions. Its case markers (*ang, ng, sa, si, ni, kay, sina, nina, kina*), the plural *mga*, the inversion marker *ay*, and the enclitic particles (*na, pa, rin / din, naman, nga, po, ho, ba, daw / raw, pala, yata, muna, sana, man, lamang*) do that work. So do *sa* phrases: *para sa, galing sa, nasa, kasama, ayon sa, dahil sa, papunta sa*, and the location nouns *sa ilalim ng, sa ibabaw ng, sa tabi ng*.
- **The linker.** *na / -ng* has one card only, under *na*, because only one *na* card can exist. `-ng` cannot be a card: `respell.js` reads it as the marker *ng* (nahng). The linker is shown in the *na* note, in examples such as *malaking bahay* and *mahabang buhok*, and in notes on the adjectives, *isang* and *marami*.
- **`Top verbs` holds roots** (31 cards). Each note gives the forms a beginner meets, for example `kain`: *kumain · kumakain · kakain*. The note also says whether the verb is -um-, mag-, ma-, -in or i-, and gives the object-focus form where it matters. The pseudo-verbs *gusto, ayaw, kailangan, puwede, dapat, alam* and *kilala* are in this deck, with the note "takes the ng form". Each verb example uses a form that contains the root unbroken, such as the future *kakain* or progressive *kumakain*, so the card's word is in the sentence. **Nine verbs are infinitives instead** (*dumating, umuwi, umupo, manood, magpahinga, magtanong, magsalita, sumama, gumising*): the tool reads their roots wrongly (*datíng, uwî, upô, noód, pahingá, tanóng, salitâ*) or the root is already a card (*gising*), but the infinitive forms are in LEX and dictionary-checked. Their notes name the root.
- **`Top adjectives`.** Most entries are *ma-* words. Tagalog adjectives have no gender, so the note gives the linked form or the root instead.
- **No `Top measure words` deck.** Tagalog has no classifiers: numbers join nouns with the linker.
- **Politeness.** The *po / kayo* forms follow the profile (§2.3). Notes give the other form, and Compliments carries paired polite and friend cards where both are common.
- **Taglish.** Notes name the everyday loan wherever Manila speakers use it (*boss, busy, picture, birthday, boyfriend*). English-spelled loans are cards only where `respell.js` lists them (*cellphone, mall, aircon*) or where WikiPron confirms the tool's reading (*bag*); see §4.

## 3. Words skipped because the course already teaches them

These are compared on the validator's normalisation, so punctuation and capitals don't count. "already taught in" names the existing deck.

- **Top nouns:** bata, aso, suka, araw, baboy, tsinelas, tsaa (Sounds and spelling); nanay, tatay, kuya, ate, lola, lolo, tita, tito, kapatid, anak, asawa, pinsan, bunso (Family and people); pera, sukli (Numbers and money); kanin, ulam, tubig, adobo, sinigang, pandesal, manok, isda (Food and drink); palengke, tindahan (Shopping and the market); bahay, kusina, kuwarto, banyo, sala (Home and daily routine); simbahan (Around town); jeep, sakayan, tricycle, taxi (Getting around); botika, gamot (Health and help); trabaho, opisina, guro, estudyante, eskuwelahan (Work and school); pare, mare (Everyday Manila Taglish). *linggo* "week" clashes with the card *Linggo* "Sunday" (Time, days and dates). That is **52 nouns**.
- **Top verbs:** tulong (Health and help: *Tulong!*), mahal (Shopping: *mahal*), gising (Home; the infinitive *gumising* is in instead). The roots of the existing verb cards *matulog, maligo, sumayaw, kumanta* (Home; Feelings and free time) were not added. That is **7**.
- **Top adjectives:** maganda, mabait, matangkad, maliit, pangit, bago, luma, matanda, mabilis, mabagal (Describing people and things); masarap (Food and drink); mahal, mura (Shopping); malapit, malayo (Around town). That is **15**.
- **Top adverbs:** ngayon, kaunti (Sounds and spelling); kanina, kahapon, bukas (Time, days and dates); mamaya, siguro (Traps); dito, diyan, doon (Around town); talaga (Taglish: *Talaga?*); lang (Questions and little words). That is **12**.
- **Top pronouns:** siya (Traps); ito, iyan, iyon (Shopping); ano, sino, saan, kailan, bakit, paano, alin, ilan (Questions and little words: *Ano?* …); wala (Traps: *Wala.*). That is **13**.
- **Top markers and particles:** lang (Questions and little words). That is **1**.
- **Top conjunctions:** bago "before" (same spelling as *bago* "new", in Describing). That is **1**.
- **Top interjections:** Grabe!, Tara!, Sige., Ewan ko., 'Di ba?, Talaga?, Ayoko., Ano ba 'yan! (Taglish); Huwag!, Wala., Siguro. (Traps); Tulong! (Health); Ingat!, Paalam., Opo. (Greetings). That is **15**.
- **Top words:** oo (Sounds); isa, dalawa, tatlo, lima, sampu (Numbers); Lunes to Linggo (Time); huwag, wala (Traps). That is **15**.
- **Flirting:** maganda and mabait (single words, in Describing); *Mahal kita.* (Traps); *May asawa na ako.* (About me).
- **Compliments:** *Salamat po.* (Greetings), so the plan's *Naku, salamat po!* had no plain fallback.

**Total skipped as already taught: 131** (52 + 7 + 15 + 12 + 13 + 1 + 1 + 15 + 15), plus the Flirting and Compliments items above.

## 4. Pron: how it was checked, and the words left out

Every pron is the unchanged output of `require('tools/target/tl/respell.js')`. `repron.js tl` reports 0 rewritten on both runs. The tool reads no add-file, and LEX may not be edited in this job. For a word not in LEX, the tool guesses stress on the next-to-last syllable and no final catch. So each unlisted word was checked before it was kept:

1. **WikiPron** ([CUNY-CL/wikipron](https://github.com/CUNY-CL/wikipron), `data/scrape/tsv/tgl_latn_narrow.tsv`, commit `d282e84`, 2026-07-23). It is scraped from English Wiktionary, but the licence file was not fetched by the sparse checkout and was not read. The script reads stress from vowel length and reduction in the narrow IPA, and the final catch from a final ʔ. It was calibrated on the course's dictionary-checked LEX entries (`LEX_CHECKED`) that WikiPron also has: 378 of 397 agreed, about 95 %; the misses are final-stress words with a secondary stress.
2. A word was kept automatically when **every** WikiPron reading matched the tool's guess (108 words). The weak case (no vowel length marked) was reviewed by hand.
3. Where WikiPron lists two readings, or none, the entry was **opened in Wiktionary** through kaikki.org or a Wiktionary mirror (kaweah.freedombox.rocks, wiki.neonvagabond.xyz, wiktionary.com) or in tagalog.com, and the card's own sense was matched to its headword. **Kept, sense confirmed as next-to-last stress with no catch:** buhay (life; *buháy* = alive), bayan (town, nation), upuan (chair), gubat (forest), hapunan (dinner), amo (boss), baso (glass), tawa (laughter), tapon, subok, tuto, tigil, minsan, habang (conjunction), kasama, galing (preposition "from"; *galíng* = skill), ayon (as in *ayon sa*), ligaw (courtship; *ligáw* = lost), kausap, Ayos! (interjection), husay (noun "skill"), Sayang! (both readings listed). **Kept on a derived form:** linis, bihis and gamit (WikiPron agrees on maglinis, magbihis and gumamit). **Kept with doubt:** Halika! and libre (Wiktionary gives both stresses and lists the next-to-last first), and ligawan / pormang (inside phrases, regular from the checked roots).
4. **Dropped after the source check**, because the card's sense has final stress or a catch: kaya "so" (*kayâ*; the tool's KAH-yah is *kaya* "ability"), saka ('tsaká), Hala! (*halá*), mula sa (*mulâ*), abala (*abalá*), paa (*paá*), bulag (*bulág*), espesyal (*espesyál*), mundo (*mundó*), panahon (*panahón*), ulit (*ulít*), kuha (*kuhà*), nakakatawa (*nakákatawá*), ideya (*ideyá* is listed first). *restawran* and *normal* were dropped too: Wiktionary's first readings are *restawrán* and *normál*. Also dropped: lagi, turo and hanap, because the derived forms disagree (*palagì, magturò, maghanáp*); samantala, because the catch is uncertain; and bus, because the tool gives boos.
5. **LEX words on new cards were also checked against WikiPron.** One real conflict: **sulat**. LEX has *sulát*, but WikiPron gives *súlat* for both readings, and *sumulat* (soo-MOO-laht) agrees with WikiPron. The verb card *sulat* and the compliment *Ang ganda ng sulat mo.* were therefore dropped. The lead should check the LEX entry. *buwan* and *umuwi* looked like the same kind of conflict, so they were checked in Wiktionary (kaikki.org): its standard readings are *buwán* and *umuwî*, which agree with LEX. The other LEX disagreements are the parser's known misses: syllable counts in *mayroon, huwag, tiyan* and final stress with secondary stress in *ospital, doktor, kaysa, paaralan*, the teen numbers and *inaantok*.

**Left out** (the guess is wrong, the reading is uncertain, or the word is an English-spelled loan the tool cannot read). Each word is listed with the LEX entry it needs, in LEX notation. The forms come from WikiPron, the sources above, or the writer, so check each one before adding it to LEX; after that, each word can join its deck.

| Deck | Left out (LEX entry needed) |
|---|---|
| Top nouns | lugár, pusò, kamáy, pulís, pintô, telépono, bansâ, katawán, pagkakátaon, libró, salitâ, balità, kuwento=kwénto, bundók, ulán, apóy, punò (tree), pusà, bintanà, susì, karné, kaarawán, Paskó, kasál, pelíkula, kantá, dugô, tiwalà, paraán, papél, pantalón, asín, tinidór, pagmamahál, mundó, panahón, paá, bus=bas, restawrán |
| Top verbs | gawâ, datíng, balík, uwî, labás, sakáy, babâ, lakád, takbó, upô, hintáy, bigáy, dalá, tingín, noód, kiníg, intindí, simulâ, sará, tirá (homograph), iyák, hirám, sundô, hatíd, hingî, pahingá, ligò, akyát, lagáy, dasál, tanóng, kuhà, turò, hanáp, súlat (LEX conflict, see 5); *kita* "see" (LEX has only *kitá*, the pronoun); *tayo* "stand" (clashes with the pronoun) |
| Top adjectives | tamà, malî, totoó, ibá, mahinà, mataás, mababà, magalíng, marumí, madumí, handâ, ligtás, sikát, mahalagá, patáy, sirà, putî, itím, pulá, asúl, diláw, matamís, maangháng, mapaít, mabigát, magaán, tamád, mabahò, madilím, basâ (wet), tuyô, punô (full), payát (uncertain), bukás (open; the card *bukas* = tomorrow already exists), abalá, bulág, espesyál, normál |
| Top adverbs | lagì, palagì, madalás, agád, kaagád, ulít, mulî, noón, kagabí, lalò, siyempre=syémpre, biglâ, matagál, hulí, wakás (*sa wakas*), roón, ganitó, ganyán, ganoón, kailanmán, bihirà, tuwíng=twíng, susunód (*sa susunod*) |
| Top pronouns | nitó, niyan=nyán, noón (of that), ibá, sinumán |
| Top markers and particles | mulâ (*mula sa*), tungkól, loób (*sa loob ng*), labás (*sa labas ng*), haráp, likód, gitnâ |
| Top conjunctions | kayâ (so), saká, patì, kundî, samantala (catch uncertain); *tapos* "then" (LEX has only *tapós* "finished") |
| Top interjections | nakú (*Naku!*), aráy, halá, abá, bahalà (*Bahala na!*), Diyos=Dyós (*Diyos ko!*, *Salamat sa Diyos!*), ayán, bilís, dalî, 'yo (*Ewan ko sa 'yo!*); *Ay!* (same text as the marker *ay*); *Wow!* (the tool gives wohw); *Psst!* (no vowel: the tool throws) |
| Top words | kontî, buô / buóng, hulíng, ikalawá, ikatló; *labing-isa, labing-apat, labing-anim* (the tool reads the hyphen as two words and gives two stresses; the one-word forms labindalawa … labinsiyam are in) |
| Flirting | pogì, matá, ngitî, buhók, kilíg, malambíng, lambíng, landî, malandî, mahinhín, simpátiko, maamò, astíg, syotà, sintá, jowa (catch uncertain), mayumi (catch uncertain), maalagà, nakákatawá; *galíng*, *saráp*, *sayá*, *lakí*, *bangó* (so *Ang galing mo*, *Ang saya mong kasama*, *Ang bango mo* are out); *ulít* (*Gusto kitang makita ulit.*); *pinapatawa, naiisip, nanliligaw, pag-iisipan* (stress on the doubled syllable is uncertain: tagalog.com marks *líligawan, pag-íisipan*); English-spelled loans not in LEX: cute, crush, sweet, charming, type, date, number, boyfriend, girlfriend, miss (*Na-miss kita*) |
| Compliments | *Ang galing mo!*, *Ang galing mong mag-Tagalog!*, *Magaling po kayong magluto.* (galíng, magalíng); *Ang sarap po ng luto ninyo!*, *Ang sarap nito!* (saráp); *Ang laki na ng anak mo!* (lakí); *Ang saya mong kasama.* (sayá); *Naku, salamat po!* (nakú); *Magandang ideya iyan!* (ideyá); *Ang ganda ng sulat mo.* (súlat, see 5); *Blooming ka ngayon!*, *Ang cute po ng anak ninyo!* (English loans); *Ang ganda ng suot mo!* (suot uncertain) |

Where a planned card was dropped, a card the tool reads correctly takes its place. *Ang husay mo!* stands in for *Ang galing mo!* (the note names *galing* as the everyday word). *Masarap po ang luto ninyo.* and *Masarap ito!* replace the *Ang sarap* rows. *Malaki na ang anak mo!* replaces *Ang laki na …*, *Masaya kang kasama.* replaces *Ang saya mong kasama.*, and *Salamat, pero may kasintahan na ako.* gives the Taglish *boyfriend / girlfriend* in its note. **Once LEX gets galíng, saráp, nakú, aráy, matá, ngitî, kayâ and ulít, the first cards to add are *Ang galing mo!*, *Ang sarap!*, *Naku!*, *Aray!*, *mata*, *ngiti*, *kaya* (so) and *ulit*.**

## 5. Words in two possible decks (where they went)

- *matalino* went to Flirting (the "clever" word), not Top adjectives.
- *kasintahan* and *pag-ibig* went to Flirting, not Top nouns.
- *tawa* (laugh) went to Top verbs as a root.
- *laro* and *sagot* are verb roots and nouns. Each is in Top verbs, with the noun sense in its note. *tanong* (question) is covered by the infinitive *magtanong*.
- *hanggang* went to markers ("until"). *kahit* is the conjunction ("even if"), and *kahit ano / sino / saan / kailan* are pronouns.
- *mayroon* and *meron* are two cards: the full form and the casual form.

## 6. For a native speaker

All meanings, notes, examples and dialogues are the writer's own, and none of them has been checked by a native speaker. The order in which to check things is in the hand-off report.
