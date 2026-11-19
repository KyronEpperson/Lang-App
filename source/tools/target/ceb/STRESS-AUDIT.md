# Cebuano stress audit (core beginner vocabulary)

Written by the stress-audit pass of 2026-11-19 for `tools/target/ceb/respell.js`. The counts are as of that pass (the scripts that produced them were scratch files and are not kept); after a `LEX` change, recount by running the words through `respell.js` (a word with CAPITALS is verified).

**Rule used.** A word counts as verified only if a source that could actually be opened shows IPA with stress (and ʔ where there is a final catch) or a stress-marked form (acute / grave / circumflex, Wiktionary–KWF convention). An unmarked headword or an unmarked form in a list is not evidence. Where two sources (or two IPA lines in one source) disagree, the word stays out of `LEX`. Nothing was added from memory.

## Counts

- Core list: **400 words** (groups below).
- Two or more syllables: **364**. Verified (in `LEX`, so printed with CAPITALS): **157**. Not verified (printed all lowercase, warns): **207**: 14 with sources that disagree, 63 whose entry was opened but shows no IPA or mark, 130 not attempted in this pass (the lookups stopped there; they are not "could not verify").
- One syllable: **36** (no stress to check; only a possible final catch). Catch checked in a source: 3. One-syllable words are always printed lowercase, so they are not counted as "verified" above.
- `LEX` now holds **172** forms (it held 48; *dinhî* was removed, see Conflicts).

## Sources, and which words each backed

- **Original 48 (Wiktionary IPA / marked headwords, Wikipedia "Cebuano numerals", Wiktionary appendices; profile §6.4)** (33): *maayo*, *gabii*, *wala*, *ako*, *kami*, *usa*, *duha*, *tulo*, *upat*, *lima*, *unom*, *pito*, *walo*, *siyam*, *napulo*, *karon*, *ugma*, *bata*, *tubig*, *bugas*, *itlog*, *balay*, *lungsod*, *siyudad*, *likod*, *dako*, *puti*, *pula*, *matanda*, *palit*, *pili*, *ulan*, *iro*
- **Wiktionary through kaikki.org extracts** (66): *udto*, *hapon*, *kumusta*, *salamat*, *palihug*, *amping*, *nako*, *niya*, *imo*, *ila*, *diri*, *adto*, *libo*, *kuwatro*, *kinse*, *bulan*, *igsoon*, *magulang*, *apo*, *asawa*, *tiya*, *lalaki*, *babaye*, *manok*, *baboy*, *gatas*, *asin*, *sabaw*, *pamahaw*, *busog*, *tam-is*, *dalan*, *dagat*, *layo*, *taas*, *init*, *mahal*, *kusog*, *hugaw*, *tigulang*, *diyutay*, *inom*, *anhi*, *naog*, *kuha*, *tan-aw*, *dungog*, *tuon*, *trabaho*, *tulog*, *hugas*, *luto*, *tindog*, *abli*, *buhat*, *sugod*, *kaayo*, *tungod*, *mao*, *basin*, *butang*, *tiil*, *ngipon*, *buhok*, *iring*, *ngalan*
- **Wiktionary through Kiwix mirrors (2023-04 / 2024-01 / 2024-05 dumps)** (24): *sige*, *kinsa*, *ngano*, *baynte*, *inahan*, *manghod*, *uyab*, *higala*, *panihapon*, *kusina*, *gamay*, *gwapo*, *bugnaw*, *kapoy*, *lisod*, *daghan*, *tanan*, *hatag*, *hulat*, *himo*, *kahibalo*, *ganahan*, *kinahanglan*, *bitaw*
- **Wiktionary live (en.wiktionary.com / .org)** (19): *ayaw*, *ikaw*, *ninyo*, *nila*, *iya*, *kawhaan*, *gatos*, *unya*, *amahan*, *tawo*, *utan*, *uhaw*, *gawas*, *daan*, *gwapa*, *dali*, *limpyo*, *kaon*, *lingkod*
- **Wikipedia, "Cebuano grammar" tables (marked forms)** (15): *siya*, *kita*, *kamo*, *sila*, *namo*, *nato*, *amo*, *kanako*, *kanamo*, *kanato*, *kini*, *kana*, *kadto*, *diha*, *kato*

Counts in this section are core-list words; a word confirmed by two sources is listed under the first. `LEX` also holds forms outside the core list (e.g. *palihog*, *daghang*, *butáng*, *kató*, *taás*); profile §6.4 lists every `LEX` form by source. Per-word evidence (IPA quoted from the page) is in the tables below.

## Words still unverified (for a native speaker)

For each word: say which syllable is stressed and whether it ends in a catch. A form marked in Wolff's dictionary is equally good.

- **greetings and courtesy** (10): buntag, pasaylo, pasayloa, oo, dili, tabang, manong, manang, lugar, pahangyo
- **pronouns (ang / ng / possessive / sa sets)** (7): nimo, ato, inyo, kanimo, kaniya, kaninyo, kanila
- **markers and demonstratives** (6): dinhi, didto, ania, anaa, naa, aduna
- **question words** (9): unsa, asa, kanus-a, pila, giunsa, tagpila, hain, diin, unsaon
- **numbers (Spanish clock / price)** (21): uno, singko, sais, siyete, otso, nuwebe, diyes, onse, dose, trese, katorse, traynta, kuwarenta, singkuwenta, siyen, alas, medya, pesos, sentimos, kuwarta, presyo
- **time and days** (15): lunes, martes, miyerkoles, huwebes, biyernes, sabado, domingo, adlaw, semana, tuig, gahapon, sunod, sayo, ulahi, oras
- **family and people** (11): papa, mama, anak, kuya, ate, lolo, lola, bana, pamilya, tiyo, silingan
- **food and drink** (16): kan-on, isda, karne, prutas, saging, mangga, tinapay, kape, asukar, sud-an, paniudto, lami, gutom, aslom, parat, pait
- **places, travel, directions** (24): eskwelahan, simbahan, merkado, tindahan, ospital, botika, kasilyas, kuwarto, sala, baryo, opisina, sakyanan, barko, eroplano, bukid, tuo, atubangan, ibabaw, ilalom, tupad, sulod, duol, diretso, liko
- **adjectives** (13): mubo, bag-o, nindot, dautan, barato, lipay, hinay, sayon, itom, batan-on, sakit, masakit, tugnaw
- **verb roots** (37): uli, lakaw, dagan, sakay, baligya, bayad, dala, paminaw, sulti, istorya, ingon, pangutana, tubag, basa, sulat, tudlo, mata, bangon, ligo, sira, gamit, tawag, kaila, hinumdom, kalimot, gusto, puyo, biya, abot, human, dula, kanta, hilak, katawa, hunahuna, ampo, pahulay
- **little words** (13): diay, usab, unta, pero, apan, kuno, gani, lagi, siguro, tingali, ambot, para, pinaka
- **home, things, body, weather, animals** (25): libro, lamesa, bangko, bintana, pultahan, higdaanan, sapatos, sinina, bayo, selpon, ulo, kamot, tiyan, dughan, nawong, hangin, langit, pangalan, kuryente, plato, baso, kutsara, tinidor, kahoy, bulak

## Conflicts (left out of LEX on purpose)

- *nimo*: conflict: /ˈnimo/ and /niˈmo/ both given (kaikki:nimo); also no IPA on wiktionary.com:nimo
- *unsa*: conflict: /ˈʔunsa/ and /ʔunˈsa/ both given; pronoun headword únsa, interjection unsá (kaikki:unsa)
- *dinhi*: conflict with LEX dinhî (Wiktionary appendices): Wiktionary entry IPA /ˈdinhi/ (kaikki:dinhi) -> removed from LEX; also unmarked "dinhi" in Wikipedia demonstrative table (dinhà = medial)
- *maayong gabii*: phrase page has no IPA
- *buntag*: conflict: kaikki /ˈbuntaɡ/ only; live Wiktionary headword buntág with /bunˈtaɡ/ and /ˈbuntaɡ/ (common)
- *mura*: conflict: murá /muˈɾa/ and /ˈmuɾa/ (kaikki:mura)
- *dili*: no IPA, unmarked headword (en.wiktionary.com:dili)
- *asa*: no IPA, unmarked headword (en.wiktionary.com:asa)
- *pila*: no IPA, unmarked headword (en.wiktionary.com:pila)
- *naa*: no IPA, unmarked headword (en.wiktionary.com:naa)
- *anaa*: no IPA, unmarked headword (en.wiktionary.com:anaa)
- *didto*: no IPA, unmarked headword (en.wiktionary.com:didto); unmarked in Wikipedia table
- *adlaw*: conflict: live Wiktionary headword ádlaw (no IPA) vs adláw in Wiktionary appendix (profile §6.4)
- *oo*: no IPA, unmarked headword (wiktionary.com:oo)
- *tabang*: no IPA, unmarked headword (en.wiktionary.com:tabang)
- *pasaylo*: no IPA, unmarked headword (en.wiktionary.com:pasaylo)
- *aduna*: no IPA, unmarked headword (wiktionary.com:aduna)
- *diin*: no IPA, unmarked headword (en.wiktionary.com:diin)
- *hangin*: no IPA, unmarked headword (en.wiktionary.com:hangin)
- *lami*: no IPA, unmarked headword (en.wiktionary.com:lami)
- *gutom*: stress pair on live Wiktionary: gútom (noun, hunger) vs gutóm (adjective, hungry); one spelling, two stresses: left out
- *bana*: no IPA, unmarked headword (en.wiktionary.com:bana)
- *saging*: no IPA, unmarked headword (wiktionary.com:saging)
- *dagan*: no IPA, unmarked headword (en.wiktionary.com:dagan)
- *pangutana*: no IPA, unmarked headword (kiwix 2023-04:pangutana)
- *lakaw*: no IPA, unmarked headword (wiktionary.com:lakaw)
- *uli*: conflict: ulì /ˈʔuliʔ/ and ulî /ˈʔuliʔ/, /ʔuˈliʔ/ (kaikki:uli)
- *baligya*: no IPA, unmarked headword (kaikki:baligya)
- *sakay*: no IPA, unmarked headword (en.wiktionary.com:sakay)
- *ulo*: no IPA, unmarked headword (wiktionary.com:ulo)
- *barato*: no IPA, unmarked headword (wiktionary.com:barato)
- *kahoy*: no IPA, unmarked headword (wiktionary.com:kahoy)
- *mubo*: no IPA, unmarked headword (kiwix 2023-04:mubo)
- *itom*: no IPA, unmarked headword (en.wiktionary.com:itom)
- *sayon*: no IPA, unmarked headword (en.wiktionary.com:sayon)
- *simbahan*: conflict: simbáhan /simˈbahan/ and simbahán /simbaˈhan/ (kaikki:simbahan)
- *sulod*: stress pair: sulód /suˈlod/ (etymology 1) and sulod /ˈsulod/ (etymology 2) on live Wiktionary; which sense the course means needs a native check
- *tindahan*: no IPA, unmarked headword (kiwix 2023-04:tindahan)
- *miyerkoles*: two acute marks (Miyérkolés) on live Wiktionary: primary stress not identifiable
- *sabado*: two acute marks (Sábadó) on live Wiktionary: primary stress not identifiable
- *kamot*: kaikki gives kamót /kaˈmot/ for every sense, but profile §6.4 lists kamot / kamót as disagreeing sources: kept out pending the lead (likely kamót)
- *lunes*: no IPA, unmarked headword (en.wiktionary.com:Lunes)
- *martes*: no IPA, unmarked headword (en.wiktionary.com:Martes)
- *huwebes*: no IPA, unmarked headword (en.wiktionary.com:Huwebes)
- *semana*: no IPA, unmarked headword (en.wiktionary.com:semana)
- *tuig*: no IPA, unmarked headword (wiktionary.com:tuig)
- *gahapon*: no IPA, unmarked headword (kiwix 2023-04:gahapon)
- *kape*: no IPA, unmarked headword (wiktionary.com:kape)
- *pangalan*: no IPA, unmarked headword (en.wiktionary.com:pangalan)
- *nuwebe*: no IPA, unmarked headword (en.wiktionary.com:nuwebe)
- *kuwarta*: no IPA, unmarked headword (en.wiktionary.com:kuwarta)
- *inyo*: no IPA, unmarked headword (en.wiktionary.com:inyo)
- *singko*: no IPA, unmarked headword (kiwix 2023-04:singko)
- *dala*: no Cebuano entry on en.wiktionary.com:dala
- *tudlo*: no IPA, unmarked headword (en.wiktionary.com:tudlo)
- *hilak*: no IPA, unmarked headword (en.wiktionary.com:hilak)
- *nawong*: conflict: headword náwong but IPA /ˌnaˈwoŋ/ (neonvagabond 2024-05)
- *batan-on*: no IPA, unmarked headword (kaikki:batan-on)
- *hinay*: no IPA, unmarked headword (en.wiktionary.com:hinay)
- *barko*: no IPA, unmarked headword (kaikki:barko)
- *kuwarto*: no Cebuano entry on en.wiktionary.com:kuwarto
- *siguro*: no Cebuano entry on en.wiktionary.com:siguro
- *sapatos*: no IPA, unmarked headword (en.wiktionary.com:sapatos)
- *pait*: stress pair on live Wiktionary: paít (adjective "bitter") vs pait (noun); left out
- *asukar*: no IPA, unmarked headword (en.wiktionary.com:asukar)
- *parat*: no IPA, unmarked headword (en.wiktionary.com:parat)
- *bukid*: no IPA, unmarked headword (en.wiktionary.com:bukid)
- *ibabaw*: no IPA, unmarked headword (en.wiktionary.com:ibabaw)
- *atubangan*: no Cebuano entry on en.wiktionary.com:atubangan
- *daghang*: conflict: phrase dághang salamat /ˌdaɡhaŋ saˈlamat/ (secondary stress) vs daghán /daɡˈhan/ in the word's own entry: left out (prints lowercase as derived from daghan)
- *kanila*: no Cebuano entry on kiwix 2023-04:kanila
- *ato*: no IPA, unmarked headword (wiktionary.com:ato)
- *lolo*: no IPA, unmarked headword (kaikki:lolo)
- *lola*: no IPA, unmarked headword (kaikki:lola)
- *mangga*: no IPA, unmarked headword (en.wiktionary.com:mangga)
- *bag-o*: no IPA, unmarked headword (en.wiktionary.com:bag-o)
- *sulat*: no IPA, unmarked headword (wiktionary.com:sulat)
- *gamit*: no IPA, unmarked headword (wiktionary.com:gamit)
- *tubag*: no IPA, unmarked headword (kiwix 2023-04:tubag)
- *tawag*: no IPA, unmarked headword (en.wiktionary.com:tawag)

## One-syllable core words

No stress to check; the aid prints them lowercase whatever happens. A final catch on one would need a LEX entry. Checked: *sa* (/sa/ preposition, no catch); *ang* (/ʔaŋ/ no catch); *na* (demonstrative nà has a final catch (Wikipedia grammar table); the particle na "already" not checked). Not checked: dong, day, nong, nang, ka, ko, mo, mi, ta, si, ni, kang, ug, og, nga, mga, dos, tres, pan, dyip, pa, man, ra, gyud, lang, ba, sab, pod, kay, kung, o, daw, mas.

## Sources asked for but not usable

- **Wolff, *A Dictionary of Cebuano Visayan***: the Project Gutenberg book page opened, but every text or file link was refused by the session allowlist; the bohol.ph search page cannot be queried by URL. Not used for any word.
- **Bunye and Yap**: prints no stress marks (profile §6). Not used.
- **Binisaya.com**: not checked in this pass.
- **en.wiktionary.org** fetches mostly failed (url_not_found) during this pass; en.wiktionary.com (same wiki), Kiwix mirrors and kaikki.org worked. Pages were found through web search; a page URL that no search returned could not be opened.
- Most live Wiktionary entries for everyday words have an empty Pronunciation section: an entry opened but showing no IPA and no mark is listed as "source has no IPA or mark", not as verified.

## Caveats

- Nearly every verified word rests on **one** copy of Wiktionary. Copies can differ (*buntag*: kaikki /ˈbuntaɡ/ only; live page /bunˈtaɡ/ and /ˈbuntaɡ/), so a native check of the verified list is still worth doing, starting with the surprising ones: *kinsâ*, *dirí*, *inahan* (penult) against *amahán* (final), *nakò* (final catch), *daghán* against *dághang*.
- **Derived forms are never shown with capitals** (prefix + root, or root + -ng / -y / -g), even when the root is verified: the rule is [inference]. List an attested form itself to get capitals (e.g. *akong*, *imong*, *maayong*, *walay* still print lowercase).
- Homographs with two stresses get a HOMO warning; the aid shows the reading named in respell.js.
- The 18 Wikipedia forms come from the live *Cebuano grammar* article, read twice with the same result; the 2023-10 Kiwix copy of that article prints no marks at all (not counter-evidence: unmarked is not evidence).
- Accepted although the page shows a second reading for another sense or etymology: *taas, lisod, busog, luto, uyab, bulan*. Accepted through an "alternative form" link: *palihug, igsoon, diyutay, kawhaan*.

## Full table by group

### greetings and courtesy

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| maayo | verified | `mah-AH-yoh` | original LEX (profile §6.4) |
| buntag | not verified (sources disagree) | `boon-tahg` | conflict: kaikki /ˈbuntaɡ/ only; live Wiktionary headword buntág with /bunˈtaɡ/ and /ˈbuntaɡ/ (common) |
| udto | verified | `OOD-toh` | kaikki:udto — /ˈʔudto/ |
| hapon | verified | `HAH-pohn` | kaikki:hapon — /ˈhapon/ |
| gabii | verified | `gah-BEE-ee` | original LEX (profile §6.4) |
| kumusta | verified | `koo-MOOS-tah` | kaikki:kumusta — /kuˈmusta/; headword kumústa (live Wiktionary entry has no IPA, no conflict) |
| salamat | verified | `sah-LAH-maht` | kaikki:daghang salamat — /ˌdaɡhaŋ saˈlamat/ (phrase daghang salamat) |
| palihug | verified | `pah-LEE-hoog` | kaikki:palihog — /paˈlihoɡ/ (palihug listed as alternative form of palihog) |
| pasaylo | not verified (source has no IPA or mark) | `pah-sai-loh` | no IPA, unmarked headword (en.wiktionary.com:pasaylo) |
| pasayloa | not verified (no page found) | `pah-sai-loh-ah` |  |
| sige | verified | `SEE-gheh` | wiktionary(neonvagabond 2024-05):sige — /ˈsiɡe/ |
| amping | verified | `AHM-peeng` | kaikki:amping — /ˈʔampiŋ/ |
| oo | not verified (source has no IPA or mark) | `oh-oh` | no IPA, unmarked headword (wiktionary.com:oo) |
| dili | not verified (source has no IPA or mark) | `dee-lee` | no IPA, unmarked headword (en.wiktionary.com:dili) |
| wala | verified | `wah-LAHQ` | original LEX (profile §6.4) |
| ayaw | verified | `ah-YOW` | wiktionary.com:ayaw — /ʔaˈjaw/; headword ayáw |
| tabang | not verified (source has no IPA or mark) | `tah-bahng` | no IPA, unmarked headword (en.wiktionary.com:tabang) |
| manong | not verified (no page found) | `mah-nohng` |  |
| manang | not verified (no page found) | `mah-nahng` |  |
| dong | one syllable | `dohng` |  |
| day | one syllable | `dai` |  |
| nong | one syllable | `nohng` |  |
| nang | one syllable | `nahng` |  |
| lugar | not verified (no page found) | `loo-gahr` |  |
| pahangyo | not verified (no page found) | `pah-hahng-yoh` |  |

### pronouns (ang / ng / possessive / sa sets)

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| ako | verified | `ah-KOH` | original LEX (profile §6.4) |
| ikaw | verified | `ee-KOW` | wiktionary:ikaw; wikipedia:grammar — headword ikáw (no IPA); Wikipedia table ikáw (confirms) |
| ka | one syllable | `kah` |  |
| siya | verified | `see-YAH` | wiktionary.com:siya + wikipedia:grammar — /siˈa/; headword siyá; Wikipedia table siyá |
| kami | verified | `kah-MEE` | original LEX (profile §6.4) |
| kita | verified | `kee-TAH` | wikipedia:grammar — marked form in pronoun table |
| kamo | verified | `kah-MOH` | wikipedia:grammar — marked form in pronoun table |
| sila | verified | `see-LAH` | wikipedia:grammar — marked form in pronoun table |
| ko | one syllable | `koh` |  |
| mo | one syllable | `moh` |  |
| mi | one syllable | `mee` |  |
| ta | one syllable | `tah` |  |
| nako | verified | `NAH-kohq` | kaikki:nako; wikipedia:grammar — /ˈnakoʔ/; headword nakò; Wikipedia table nakò (confirms) |
| nimo | not verified (sources disagree) | `nee-moh` | conflict: /ˈnimo/ and /niˈmo/ both given (kaikki:nimo); also no IPA on wiktionary.com:nimo |
| niya | verified | `NEE-yah` | kaikki(all languages):niya — /ˈnija/; headword níya |
| namo | verified | `NAH-mohq` | wikipedia:grammar — marked form in pronoun table |
| nato | verified | `NAH-tohq` | wikipedia:grammar — marked form in pronoun table |
| ninyo | verified | `neen-YOH` | wiktionary.com:ninyo — /ninˈjo/; headword ninyó |
| nila | verified | `nee-LAH` | wiktionary.com:nila — headword nilá (no IPA) |
| imo | verified | `EE-moh` | kaikki:imo — /ˈʔimo/ |
| iya | verified | `ee-YAH` | wiktionary.com:iya — /ʔiˈa/; headword iyá |
| amo | verified | `AH-mohq` | wikipedia:grammar — marked form in pronoun table |
| ato | not verified (source has no IPA or mark) | `ah-toh` | no IPA, unmarked headword (wiktionary.com:ato) |
| inyo | not verified (source has no IPA or mark) | `een-yoh` | no IPA, unmarked headword (en.wiktionary.com:inyo) |
| ila | verified | `EE-lah` | kaikki:ila — /ˈʔila/ |
| kanako | verified | `kah-NAH-kohq` | wikipedia:grammar — marked form in pronoun table |
| kanimo | not verified (no page found) | `kah-nee-moh` |  |
| kaniya | not verified (no page found) | `kah-nee-yah` |  |
| kanamo | verified | `kah-NAH-mohq` | wikipedia:grammar — marked form in pronoun table |
| kanato | verified | `kah-NAH-tohq` | wikipedia:grammar — marked form in pronoun table |
| kaninyo | not verified (no page found) | `kah-neen-yoh` |  |
| kanila | not verified (source has no IPA or mark) | `kah-nee-lah` | no Cebuano entry on kiwix 2023-04:kanila |

### markers and demonstratives

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| ang | one syllable, catch checked | `ahng` | kaikki:ang (/ʔaŋ/ no catch) |
| sa | one syllable, catch checked | `sah` | kaikki:sa (/sa/ preposition, no catch) |
| si | one syllable | `see` |  |
| ni | one syllable | `nee` |  |
| kang | one syllable | `kahng` |  |
| ug | one syllable | `oog` |  |
| og | one syllable | `ohg` |  |
| nga | one syllable | `ngah` |  |
| mga | one syllable | `mah-ngah` |  |
| kini | verified | `kee-NEE` | wikipedia:grammar — marked form in demonstrative table |
| kana | verified | `kah-NAHQ` | wikipedia:grammar — marked form in demonstrative table |
| kadto | verified | `kahd-TOH` | wikipedia:grammar — marked form in demonstrative table |
| dinhi | not verified (sources disagree) | `deen-hee` | conflict with LEX dinhî (Wiktionary appendices): Wiktionary entry IPA /ˈdinhi/ (kaikki:dinhi) -> removed from LEX; also unmarked "dinhi" in Wikipedia demonstrative table (dinhà = medial) |
| diri | verified | `dee-REE` | kaikki(all languages):diri; wikipedia:grammar — /diˈɾi/; Wikipedia table dirí (confirms kaikki) |
| diha | verified | `dee-HAHQ` | wikipedia:grammar — marked form in demonstrative table |
| didto | not verified (source has no IPA or mark) | `deed-toh` | no IPA, unmarked headword (en.wiktionary.com:didto); unmarked in Wikipedia table |
| ania | not verified (no page found) | `ah-nee-ah` |  |
| anaa | not verified (source has no IPA or mark) | `ah-nah-ah` | no IPA, unmarked headword (en.wiktionary.com:anaa) |
| naa | not verified (source has no IPA or mark) | `nah-ah` | no IPA, unmarked headword (en.wiktionary.com:naa) |
| aduna | not verified (source has no IPA or mark) | `ah-doo-nah` | no IPA, unmarked headword (wiktionary.com:aduna) |
| adto | verified | `AHD-toh` | kaikki:adto — /ˈʔadto/ (verb "go"); Wikipedia demonstrative table ádto (locative) |
| kato | verified | `kah-TOH` | wikipedia:grammar — marked form in demonstrative table |

### question words

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| unsa | not verified (sources disagree) | `oon-sah` | conflict: /ˈʔunsa/ and /ʔunˈsa/ both given; pronoun headword únsa, interjection unsá (kaikki:unsa) |
| kinsa | verified | `keen-SAHQ` | wiktionary(neonvagabond 2024-05):kinsa — /kinˈsaʔ/; headword kinsâ |
| asa | not verified (source has no IPA or mark) | `ah-sah` | no IPA, unmarked headword (en.wiktionary.com:asa) |
| kanus-a | not verified (no page found) | `kah-noos-ah` |  |
| ngano | verified | `NGAH-noh` | wiktionary(kiwix 2023-04):ngano — /ˈŋano/ |
| pila | not verified (source has no IPA or mark) | `pee-lah` | no IPA, unmarked headword (en.wiktionary.com:pila) |
| giunsa | not verified (no page found) | `ghee-oon-sah` |  |
| tagpila | not verified (no page found) | `tahg-pee-lah` |  |
| hain | not verified (no page found) | `hah-een` |  |
| diin | not verified (source has no IPA or mark) | `dee-een` | no IPA, unmarked headword (en.wiktionary.com:diin) |
| unsaon | not verified (no page found) | `oon-sah-ohn` |  |

### numbers (Cebuano)

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| usa | verified | `oo-SAH` | original LEX (profile §6.4) |
| duha | verified | `doo-HAH` | original LEX (profile §6.4) |
| tulo | verified | `too-LOH` | original LEX (profile §6.4) |
| upat | verified | `oo-PAHT` | original LEX (profile §6.4) |
| lima | verified | `lee-MAH` | original LEX (profile §6.4) |
| unom | verified | `oo-NOHM` | original LEX (profile §6.4) |
| pito | verified | `pee-TOH` | original LEX (profile §6.4) |
| walo | verified | `wah-LOH` | original LEX (profile §6.4) |
| siyam | verified | `see-YAHM` | original LEX (profile §6.4) |
| napulo | verified | `nah-POO-lohq` | original LEX (profile §6.4) |
| kawhaan | verified | `kow-HAH-ahn` | wiktionary.com:kaluhaan — /kawˈhaʔan/ (Metro Cebu form of kaluhâan; kawhaan listed as alternative form) |
| gatos | verified | `gah-TOHS` | wiktionary.com:gatos — marked form gatós in the entry's cardinal-number line ("usá ka gatós") |
| libo | verified | `LEE-boh` | kaikki:libo — /ˈlibo/ |

### numbers (Spanish clock / price)

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| uno | not verified (no page found) | `oo-noh` |  |
| dos | one syllable | `dohs` |  |
| tres | one syllable | `trehs` |  |
| kuwatro | verified | `koo-WAH-troh` | kaikki(all languages):kuwatro — /kuˈatɾo/; headword kuwátro |
| singko | not verified (source has no IPA or mark) | `seeng-koh` | no IPA, unmarked headword (kiwix 2023-04:singko) |
| sais | not verified (no page found) | `sah-ees` |  |
| siyete | not verified (no page found) | `see-yeh-teh` |  |
| otso | not verified (no page found) | `oh-choh` |  |
| nuwebe | not verified (source has no IPA or mark) | `noo-weh-beh` | no IPA, unmarked headword (en.wiktionary.com:nuwebe) |
| diyes | not verified (no page found) | `dee-yehs` |  |
| onse | not verified (no page found) | `ohn-seh` |  |
| dose | not verified (no page found) | `doh-seh` |  |
| trese | not verified (no page found) | `treh-seh` |  |
| katorse | not verified (no page found) | `kah-tohr-seh` |  |
| kinse | verified | `KEEN-seh` | kaikki(all languages):kinse — /ˈkinse/; headword kínse |
| baynte | verified | `BAIN-teh` | wiktionary(kiwix 2024-01):baynte — /ˈbajnte/ |
| traynta | not verified (no page found) | `train-tah` |  |
| kuwarenta | not verified (no page found) | `koo-wah-rehn-tah` |  |
| singkuwenta | not verified (no page found) | `seeng-koo-wehn-tah` |  |
| siyen | not verified (no page found) | `see-yehn` |  |
| alas | not verified (no page found) | `ah-lahs` |  |
| medya | not verified (no page found) | `meh-jah` |  |
| pesos | not verified (no page found) | `peh-sohs` |  |
| sentimos | not verified (no page found) | `sehn-tee-mohs` |  |
| kuwarta | not verified (source has no IPA or mark) | `koo-wahr-tah` | no IPA, unmarked headword (en.wiktionary.com:kuwarta) |
| presyo | not verified (no page found) | `prehs-yoh` |  |

### time and days

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| lunes | not verified (source has no IPA or mark) | `loo-nehs` | no IPA, unmarked headword (en.wiktionary.com:Lunes) |
| martes | not verified (source has no IPA or mark) | `mahr-tehs` | no IPA, unmarked headword (en.wiktionary.com:Martes) |
| miyerkoles | not verified (sources disagree) | `mee-yehr-koh-lehs` | two acute marks (Miyérkolés) on live Wiktionary: primary stress not identifiable |
| huwebes | not verified (source has no IPA or mark) | `hoo-weh-behs` | no IPA, unmarked headword (en.wiktionary.com:Huwebes) |
| biyernes | not verified (no page found) | `bee-yehr-nehs` |  |
| sabado | not verified (sources disagree) | `sah-bah-doh` | two acute marks (Sábadó) on live Wiktionary: primary stress not identifiable |
| domingo | not verified (no page found) | `doh-mee-ngoh` |  |
| adlaw | not verified (sources disagree) | `ahd-low` | conflict: live Wiktionary headword ádlaw (no IPA) vs adláw in Wiktionary appendix (profile §6.4) |
| semana | not verified (source has no IPA or mark) | `seh-mah-nah` | no IPA, unmarked headword (en.wiktionary.com:semana) |
| bulan | verified | `BOO-lahn` | kaikki:bulan — /ˈbulan/ (noun "moon, month"; the verb bulán "hire a servant" differs) |
| tuig | not verified (source has no IPA or mark) | `too-eeg` | no IPA, unmarked headword (wiktionary.com:tuig) |
| karon | verified | `kah-ROHN` | original LEX (profile §6.4) |
| ugma | verified | `oog-MAHQ` | original LEX (profile §6.4) |
| gahapon | not verified (source has no IPA or mark) | `gah-hah-pohn` | no IPA, unmarked headword (kiwix 2023-04:gahapon) |
| unya | verified | `oon-YAHQ` | wiktionary.com:unya — headword unyâ (no IPA) |
| sunod | not verified (no page found) | `soo-nohd` |  |
| sayo | not verified (no page found) | `sah-yoh` |  |
| ulahi | not verified (no page found) | `oo-lah-hee` |  |
| oras | not verified (no page found) | `oh-rahs` |  |

### family and people

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| amahan | verified | `ah-mah-HAHN` | wiktionary.com:amahan — /ʔamaˈhan/; headword amahán |
| inahan | verified | `ee-NAH-hahn` | wiktionary(neonvagabond 2024-05):inahan — /ʔiˈnahan/ |
| papa | not verified (no page found) | `pah-pah` |  |
| mama | not verified (no page found) | `mah-mah` |  |
| anak | not verified (no page found) | `ah-nahk` |  |
| igsoon | verified | `eeg-SOH-ohn` | kaikki:igsuon — /ʔiɡˈsuʔon/ (entry igsuon; igsoon listed as alternative form) |
| kuya | not verified (no page found) | `koo-yah` |  |
| ate | not verified (no page found) | `ah-teh` |  |
| magulang | verified | `mah-GOO-lahng` | kaikki:magulang — /maˈɡulaŋ/ |
| manghod | verified | `mahng-HOHD` | wiktionary(kiwix 2023-04):manghod — /maŋˈhod/; headword manghód |
| lolo | not verified (source has no IPA or mark) | `loh-loh` | no IPA, unmarked headword (kaikki:lolo) |
| lola | not verified (source has no IPA or mark) | `loh-lah` | no IPA, unmarked headword (kaikki:lola) |
| apo | verified | `ah-POH` | kaikki:apo — /ʔaˈpo/; headword apó |
| bana | not verified (source has no IPA or mark) | `bah-nah` | no IPA, unmarked headword (en.wiktionary.com:bana) |
| asawa | verified | `ah-SAH-wah` | kaikki:asawa — /ʔaˈsawa/; headword asáwa |
| uyab | verified | `oo-YAHB` | wiktionary(kiwix 2023-04):uyab — /ʔuˈjab/ (noun "boyfriend, girlfriend"; uyab /ˈʔujab/ "wash fish" is a different word) |
| pamilya | not verified (no page found) | `pah-meel-yah` |  |
| tiyo | not verified (no page found) | `tee-yoh` |  |
| tiya | verified | `TEE-yah` | kaikki:tiya — /ˈtija/ |
| bata | verified | `BAH-tahq` | original LEX (profile §6.4) |
| tawo | verified | `TAH-woh` | wiktionary.com:tawo; kaikki:tawo — /ˈtawo/ (live Wiktionary and kaikki) |
| lalaki | verified | `lah-LAH-kee` | kaikki:lalaki — /laˈlaki/; headword laláki |
| babaye | verified | `bah-BAH-yeh` | kaikki:babaye — /baˈbaje/; headword babáye |
| higala | verified | `hee-GAH-lah` | wiktionary(neonvagabond 2024-05):higala — /hiˈɡala/; headword higála |
| silingan | not verified (no page found) | `see-lee-ngahn` |  |

### food and drink

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| tubig | verified | `TOO-beeg` | original LEX (profile §6.4) |
| kan-on | not verified (no page found) | `kahn-ohn` |  |
| bugas | verified | `boo-GAHS` | original LEX (profile §6.4) |
| isda | not verified (no page found) | `ees-dah` |  |
| manok | verified | `mah-NOHK` | kaikki:manok — /maˈnok/; headword manók |
| baboy | verified | `BAH-boy` | kaikki:baboy — /ˈbaboj/ |
| karne | not verified (no page found) | `kahr-neh` |  |
| utan | verified | `OO-tahn` | wiktionary.com:utan — headword útan (no IPA) |
| prutas | not verified (no page found) | `proo-tahs` |  |
| saging | not verified (source has no IPA or mark) | `sah-gheeng` | no IPA, unmarked headword (wiktionary.com:saging) |
| mangga | not verified (source has no IPA or mark) | `mahng-gah` | no IPA, unmarked headword (en.wiktionary.com:mangga) |
| tinapay | not verified (no page found) | `tee-nah-pai` |  |
| pan | one syllable | `pahn` |  |
| itlog | verified | `eet-LOHG` | original LEX (profile §6.4) |
| kape | not verified (source has no IPA or mark) | `kah-peh` | no IPA, unmarked headword (wiktionary.com:kape) |
| gatas | verified | `GAH-tahs` | kaikki:gatas — /ˈɡatas/ |
| asukar | not verified (source has no IPA or mark) | `ah-soo-kahr` | no IPA, unmarked headword (en.wiktionary.com:asukar) |
| asin | verified | `ah-SEEN` | kaikki:asin — /ʔaˈsin/; headword asín |
| sabaw | verified | `sah-BOW` | kaikki:sabaw — /saˈbaw/; headword sabáw |
| sud-an | not verified (no page found) | `sood-ahn` |  |
| pamahaw | verified | `pah-MAH-how` | kaikki:pamahaw — /paˈmahaw/ |
| paniudto | not verified (no page found) | `pah-nee-ood-toh` |  |
| panihapon | verified | `pah-nee-HAH-pohn` | wiktionary(neonvagabond 2024-05):panihapon — /paniˈhapon/; headword panihápon |
| lami | not verified (source has no IPA or mark) | `lah-mee` | no IPA, unmarked headword (en.wiktionary.com:lami) |
| gutom | not verified (sources disagree) | `goo-tohm` | stress pair on live Wiktionary: gútom (noun, hunger) vs gutóm (adjective, hungry); one spelling, two stresses: left out |
| busog | verified | `boo-SOHG` | kaikki:busog — /buˈsoɡ/ (adjective "full"; a different word, etymology 2, is /ˈbusoɡ/) |
| uhaw | verified | `oo-HOW` | wiktionary.com:uhaw — headword uháw (no IPA) |
| tam-is | verified | `TAHM-ees` | kaikki:tam-is — /ˈtamʔis/; headword tám-is |
| aslom | not verified (no page found) | `ahs-lohm` |  |
| parat | not verified (source has no IPA or mark) | `pah-raht` | no IPA, unmarked headword (en.wiktionary.com:parat) |
| pait | not verified (sources disagree) | `pah-eet` | stress pair on live Wiktionary: paít (adjective "bitter") vs pait (noun); left out |

### places, travel, directions

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| balay | verified | `bah-LAI` | original LEX (profile §6.4) |
| eskwelahan | not verified (no page found) | `ehs-kweh-lah-hahn` |  |
| simbahan | not verified (sources disagree) | `seem-bah-hahn` | conflict: simbáhan /simˈbahan/ and simbahán /simbaˈhan/ (kaikki:simbahan) |
| merkado | not verified (no page found) | `mehr-kah-doh` |  |
| tindahan | not verified (source has no IPA or mark) | `teen-dah-hahn` | no IPA, unmarked headword (kiwix 2023-04:tindahan) |
| ospital | not verified (no page found) | `ohs-pee-tahl` |  |
| botika | not verified (no page found) | `boh-tee-kah` |  |
| kasilyas | not verified (no page found) | `kah-seel-yahs` |  |
| kuwarto | not verified (source has no IPA or mark) | `koo-wahr-toh` | no Cebuano entry on en.wiktionary.com:kuwarto |
| kusina | verified | `koo-SEE-nah` | wiktionary(neonvagabond 2024-05):kusina — /kuˈsina/ |
| sala | not verified (no page found) | `sah-lah` |  |
| dalan | verified | `DAH-lahn` | kaikki:dalan — /ˈdalan/; headword dálan |
| lungsod | verified | `loong-SOHD` | original LEX (profile §6.4) |
| siyudad | verified | `see-yoo-DAHD` | original LEX (profile §6.4) |
| baryo | not verified (no page found) | `bahr-yoh` |  |
| opisina | not verified (no page found) | `oh-pee-see-nah` |  |
| dyip | one syllable | `jeep` |  |
| sakyanan | not verified (no page found) | `sah-kyah-nahn` |  |
| barko | not verified (source has no IPA or mark) | `bahr-koh` | no IPA, unmarked headword (kaikki:barko) |
| eroplano | not verified (no page found) | `eh-roh-plah-noh` |  |
| dagat | verified | `DAH-gaht` | kaikki:dagat — /ˈdaɡat/ |
| bukid | not verified (source has no IPA or mark) | `boo-keed` | no IPA, unmarked headword (en.wiktionary.com:bukid) |
| tuo | not verified (no page found) | `too-oh` |  |
| atubangan | not verified (source has no IPA or mark) | `ah-too-bah-ngahn` | no Cebuano entry on en.wiktionary.com:atubangan |
| likod | verified | `lee-KOHD` | original LEX (profile §6.4) |
| ibabaw | not verified (source has no IPA or mark) | `ee-bah-bow` | no IPA, unmarked headword (en.wiktionary.com:ibabaw) |
| ilalom | not verified (no page found) | `ee-lah-lohm` |  |
| tupad | not verified (no page found) | `too-pahd` |  |
| sulod | not verified (sources disagree) | `soo-lohd` | stress pair: sulód /suˈlod/ (etymology 1) and sulod /ˈsulod/ (etymology 2) on live Wiktionary; which sense the course means needs a native check |
| gawas | verified | `gah-WAHS` | wiktionary.com:gawas — headword gawás (no IPA) |
| layo | verified | `lah-YOHQ` | kaikki:layo — /laˈjoʔ/; headword layô |
| duol | not verified (no page found) | `doo-ohl` |  |
| diretso | not verified (no page found) | `dee-reh-choh` |  |
| liko | not verified (no page found) | `lee-koh` |  |

### adjectives

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| dako | verified | `dah-KOHQ` | original LEX (profile §6.4) |
| gamay | verified | `gah-MAI` | wiktionary(neonvagabond 2024-05):gamay — /ɡaˈmaj/; headword gamáy |
| taas | verified | `tah-AHS` | kaikki:taas — /taˈʔas/ (adjective and verb; the noun also lists /ˈtaʔas/) |
| mubo | not verified (source has no IPA or mark) | `moo-boh` | no IPA, unmarked headword (kiwix 2023-04:mubo) |
| bag-o | not verified (source has no IPA or mark) | `bahg-oh` | no IPA, unmarked headword (en.wiktionary.com:bag-o) |
| daan | verified | `DAH-ahn` | wiktionary.com:daan — headword dáan "old" (no IPA) |
| nindot | not verified (no page found) | `neen-doht` |  |
| gwapa | verified | `GWAH-pah` | wiktionary.com:gwapa — /ˈɡwapa/ |
| gwapo | verified | `GWAH-poh` | wiktionary(kiwix 2023-04):gwapo — /ˈɡwapo/ |
| dautan | not verified (no page found) | `dah-oo-tahn` |  |
| init | verified | `EE-neet` | kaikki:init — /ˈʔinit/ |
| bugnaw | verified | `boog-NOW` | wiktionary(kiwix 2024-01):bugnaw — /buɡˈnaw/; headword bugnáw |
| mahal | verified | `mah-HAHL` | kaikki:mahal — /maˈhal/; headword mahál |
| barato | not verified (source has no IPA or mark) | `bah-rah-toh` | no IPA, unmarked headword (wiktionary.com:barato) |
| kapoy | verified | `KAH-poy` | wiktionary(neonvagabond 2024-05):kapoy — /ˈkapoj/; headword kápoy |
| lipay | not verified (no page found) | `lee-pai` |  |
| kusog | verified | `koo-SOHG` | kaikki:kusog — /kuˈsoɡ/; headword kusóg |
| hinay | not verified (source has no IPA or mark) | `hee-nai` | no IPA, unmarked headword (en.wiktionary.com:hinay) |
| dali | verified | `dah-LEEQ` | wiktionary.com:dali — headword dalî "hurry" (no IPA) |
| lisod | verified | `lee-SOHD` | wiktionary(neonvagabond 2024-05):lisod — /liˈsod/; headword lisód (/ˈlisod/ only for the sense "have a hard time") |
| sayon | not verified (source has no IPA or mark) | `sah-yohn` | no IPA, unmarked headword (en.wiktionary.com:sayon) |
| limpyo | verified | `LEEM-pyoh` | wiktionary.com:limpyo — /ˈlimpjo/ |
| hugaw | verified | `HOO-gow` | kaikki:hugaw — /ˈhuɡaw/ |
| puti | verified | `poo-TEEQ` | original LEX (profile §6.4) |
| itom | not verified (source has no IPA or mark) | `ee-tohm` | no IPA, unmarked headword (en.wiktionary.com:itom) |
| pula | verified | `poo-LAH` | original LEX (profile §6.4) |
| tigulang | verified | `tee-GOO-lahng` | kaikki:tigulang — /tiˈɡulaŋ/; headword tigúlang |
| batan-on | not verified (source has no IPA or mark) | `bah-tahn-ohn` | no IPA, unmarked headword (kaikki:batan-on) |
| daghan | verified | `dahg-HAHN` | wiktionary(neonvagabond 2024-05):daghan — /daɡˈhan/ (the phrase dághang salamat has /ˌdaɡhaŋ/, so daghang itself is left out) |
| diyutay | verified | `dee-YOO-tai` | kaikki:diyotay — /diˈjotaj/ (entry diyotay; diyutay listed as alternative form) |
| tanan | verified | `tah-NAHN` | wiktionary(kiwix 2023-04):tanan — /taˈnan/ |
| sakit | not verified (no page found) | `sah-keet` |  |
| masakit | not verified (no page found) | `mah-sah-keet` |  |
| tugnaw | not verified (no page found) | `toog-now` |  |
| matanda | verified | `mah-tahn-DAHQ` | original LEX (profile §6.4) |

### verb roots

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| kaon | verified | `KAH-ohn` | wiktionary.com:kaon — headword káon (no IPA) |
| inom | verified | `ee-NOHM` | kaikki:inom — /ʔiˈnom/ |
| anhi | verified | `AHN-hee` | kaikki:anhi — /ˈʔanhi/ |
| uli | not verified (sources disagree) | `oo-lee` | conflict: ulì /ˈʔuliʔ/ and ulî /ˈʔuliʔ/, /ʔuˈliʔ/ (kaikki:uli) |
| lakaw | not verified (source has no IPA or mark) | `lah-kow` | no IPA, unmarked headword (wiktionary.com:lakaw) |
| dagan | not verified (source has no IPA or mark) | `dah-gahn` | no IPA, unmarked headword (en.wiktionary.com:dagan) |
| sakay | not verified (source has no IPA or mark) | `sah-kai` | no IPA, unmarked headword (en.wiktionary.com:sakay) |
| naog | verified | `NAH-ohg` | kaikki:naog — /ˈnaʔoɡ/ |
| palit | verified | `pah-LEET` | original LEX (profile §6.4) |
| baligya | not verified (source has no IPA or mark) | `bah-leeg-yah` | no IPA, unmarked headword (kaikki:baligya) |
| bayad | not verified (no page found) | `bah-yahd` |  |
| hatag | verified | `HAH-tahg` | wiktionary(neonvagabond 2024-05):hatag — /ˈhataɡ/ |
| kuha | verified | `KOO-hahq` | kaikki:kuha — /ˈkuhaʔ/; headword kuhà |
| dala | not verified (source has no IPA or mark) | `dah-lah` | no Cebuano entry on en.wiktionary.com:dala |
| hulat | verified | `hoo-LAHT` | wiktionary(neonvagabond 2024-05):hulat — headword hulát (no IPA) |
| tan-aw | verified | `TAHN-ow` | kaikki:tan-aw — /ˈtanʔaw/; headword tán-aw |
| dungog | verified | `DOO-ngohg` | kaikki:dungog — /ˈduŋoɡ/ |
| paminaw | not verified (no page found) | `pah-mee-now` |  |
| sulti | not verified (no page found) | `sool-tee` |  |
| istorya | not verified (no page found) | `ees-tohr-yah` |  |
| ingon | not verified (no page found) | `ee-ngohn` |  |
| pangutana | not verified (source has no IPA or mark) | `pah-ngoo-tah-nah` | no IPA, unmarked headword (kiwix 2023-04:pangutana) |
| tubag | not verified (source has no IPA or mark) | `too-bahg` | no IPA, unmarked headword (kiwix 2023-04:tubag) |
| basa | not verified (no page found) | `bah-sah` |  |
| sulat | not verified (source has no IPA or mark) | `soo-laht` | no IPA, unmarked headword (wiktionary.com:sulat) |
| tuon | verified | `too-OHN` | kaikki:tuon — /tuˈʔon/; headword tuón |
| tudlo | not verified (source has no IPA or mark) | `tood-loh` | no IPA, unmarked headword (en.wiktionary.com:tudlo) |
| trabaho | verified | `trah-BAH-hoh` | kaikki:trabaho — /tɾaˈbaho/ |
| tulog | verified | `TOO-lohg` | kaikki:tulog — /ˈtuloɡ/; headword túlog |
| mata | not verified (no page found) | `mah-tah` |  |
| bangon | not verified (no page found) | `bah-ngohn` |  |
| ligo | not verified (no page found) | `lee-goh` |  |
| hugas | verified | `HOO-gahs` | kaikki:hugas — /ˈhuɡas/ |
| luto | verified | `LOO-tohq` | kaikki:luto — /ˈlutoʔ/ (verb "cook" and noun "cooked rice"; lutó "blister" is a different word) |
| lingkod | verified | `LEENG-kohd` | wiktionary.com:lingkod — headword língkod (no IPA) |
| tindog | verified | `TEEN-dohg` | kaikki:tindog — /ˈtindoɡ/ |
| abli | verified | `ah-BLEE` | kaikki:abli — /ʔabˈli/; headword ablí |
| sira | not verified (no page found) | `see-rah` |  |
| gamit | not verified (source has no IPA or mark) | `gah-meet` | no IPA, unmarked headword (wiktionary.com:gamit) |
| buhat | verified | `BOO-haht` | kaikki:buhat — /ˈbuhat/; headword búhat |
| himo | verified | `HEE-mohq` | wiktionary(kiwix 2024-01):himo — headword hímò (no IPA) |
| tawag | not verified (source has no IPA or mark) | `tah-wahg` | no IPA, unmarked headword (en.wiktionary.com:tawag) |
| kahibalo | verified | `kah-hee-bah-LOH` | wiktionary(neonvagabond 2024-05):kahibalo — /kahibaˈlo/; headword kahibaló |
| kaila | not verified (no page found) | `kah-ee-lah` |  |
| hinumdom | not verified (no page found) | `hee-noom-dohm` |  |
| kalimot | not verified (no page found) | `kah-lee-moht` |  |
| gusto | not verified (no page found) | `goos-toh` |  |
| ganahan | verified | `gah-NAH-hahn` | wiktionary(neonvagabond 2024-05):ganahan — /ɡaˈnahan/ |
| kinahanglan | verified | `kee-nah-HAHNG-lahn` | wiktionary(neonvagabond 2024-05):kinahanglan — /kinaˈhaŋlan/; headword kinahánglan |
| puyo | not verified (no page found) | `poo-yoh` |  |
| biya | not verified (no page found) | `bee-yah` |  |
| abot | not verified (no page found) | `ah-boht` |  |
| sugod | verified | `SOO-gohd` | kaikki:sugod — /ˈsuɡod/ |
| human | not verified (no page found) | `hoo-mahn` |  |
| dula | not verified (no page found) | `doo-lah` |  |
| kanta | not verified (no page found) | `kahn-tah` |  |
| hilak | not verified (source has no IPA or mark) | `hee-lahk` | no IPA, unmarked headword (en.wiktionary.com:hilak) |
| katawa | not verified (no page found) | `kah-tah-wah` |  |
| pili | verified | `PEE-leeq` | original LEX (profile §6.4) |
| hunahuna | not verified (no page found) | `hoo-nah-hoo-nah` |  |
| ampo | not verified (no page found) | `ahm-poh` |  |
| pahulay | not verified (no page found) | `pah-hoo-lai` |  |

### little words

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| na | one syllable, catch checked | `nah` | wikipedia:grammar (demonstrative nà has a final catch (Wikipedia grammar table); the particle na "already" not checked) |
| pa | one syllable | `pah` |  |
| man | one syllable | `mahn` |  |
| ra | one syllable | `rah` |  |
| gyud | one syllable | `gyood` |  |
| kaayo | verified | `kah-AH-yoh` | kaikki:kaayo — /kaˈʔajo/ |
| lang | one syllable | `lahng` |  |
| ba | one syllable | `bah` |  |
| diay | not verified (no page found) | `dee-ai` |  |
| sab | one syllable | `sahb` |  |
| pod | one syllable | `pohd` |  |
| usab | not verified (no page found) | `oo-sahb` |  |
| unta | not verified (no page found) | `oon-tah` |  |
| kay | one syllable | `kai` |  |
| kung | one syllable | `koong` |  |
| pero | not verified (no page found) | `peh-roh` |  |
| o | one syllable | `oh` |  |
| apan | not verified (no page found) | `ah-pahn` |  |
| tungod | verified | `too-NGOHD` | kaikki:tungod — /tuˈŋod/; headword tungód |
| mao | verified | `mah-OH` | kaikki(all languages):mao — /maˈʔo/; headword maó (particle) |
| kuno | not verified (no page found) | `koo-noh` |  |
| daw | one syllable | `dow` |  |
| bitaw | verified | `BEE-tow` | wiktionary(neonvagabond 2024-05):bitaw — /ˈbitaw/; headword bítaw |
| gani | not verified (no page found) | `gah-nee` |  |
| lagi | not verified (no page found) | `lah-ghee` |  |
| siguro | not verified (source has no IPA or mark) | `see-goo-roh` | no Cebuano entry on en.wiktionary.com:siguro |
| basin | verified | `BAH-seen` | kaikki:basin — /ˈbasin/; headword básin |
| tingali | not verified (no page found) | `tee-ngah-lee` |  |
| ambot | not verified (no page found) | `ahm-boht` |  |
| para | not verified (no page found) | `pah-rah` |  |
| mas | one syllable | `mahs` |  |
| pinaka | not verified (no page found) | `pee-nah-kah` |  |

### home, things, body, weather, animals

| Word | Status | `pron` now | Source / evidence |
|---|---|---|---|
| libro | not verified (no page found) | `lee-broh` |  |
| lamesa | not verified (no page found) | `lah-meh-sah` |  |
| bangko | not verified (no page found) | `bahng-koh` |  |
| bintana | not verified (no page found) | `been-tah-nah` |  |
| pultahan | not verified (no page found) | `pool-tah-hahn` |  |
| higdaanan | not verified (no page found) | `heeg-dah-ah-nahn` |  |
| sapatos | not verified (source has no IPA or mark) | `sah-pah-tohs` | no IPA, unmarked headword (en.wiktionary.com:sapatos) |
| sinina | not verified (no page found) | `see-nee-nah` |  |
| bayo | not verified (no page found) | `bah-yoh` |  |
| selpon | not verified (no page found) | `sehl-pohn` |  |
| butang | verified | `boo-TAHNG` | kaikki:butang — /buˈtaŋ/ |
| ulo | not verified (source has no IPA or mark) | `oo-loh` | no IPA, unmarked headword (wiktionary.com:ulo) |
| kamot | not verified (sources disagree) | `kah-moht` | kaikki gives kamót /kaˈmot/ for every sense, but profile §6.4 lists kamot / kamót as disagreeing sources: kept out pending the lead (likely kamót) |
| tiil | verified | `tee-EEL` | kaikki:tiil — headword tiíl (no IPA) |
| tiyan | not verified (no page found) | `tee-yahn` |  |
| ngipon | verified | `NGHEE-pohn` | kaikki:ngipon — /ˈŋipon/ |
| dughan | not verified (no page found) | `doog-hahn` |  |
| buhok | verified | `boo-HOHK` | kaikki:buhok — /buˈhok/; headword buhók |
| nawong | not verified (sources disagree) | `nah-wohng` | conflict: headword náwong but IPA /ˌnaˈwoŋ/ (neonvagabond 2024-05) |
| ulan | verified | `oo-LAHN` | original LEX (profile §6.4) |
| hangin | not verified (source has no IPA or mark) | `hah-ngheen` | no IPA, unmarked headword (en.wiktionary.com:hangin) |
| langit | not verified (no page found) | `lah-ngheet` |  |
| iro | verified | `ee-ROHQ` | original LEX (profile §6.4) |
| iring | verified | `ee-REENG` | kaikki:iring — /ʔiˈɾiŋ/; headword iríng |
| ngalan | verified | `NGAH-lahn` | kaikki:ngalan — /ˈŋalan/; headword ngálan |
| pangalan | not verified (source has no IPA or mark) | `pah-ngah-lahn` | no IPA, unmarked headword (en.wiktionary.com:pangalan) |
| kuryente | not verified (no page found) | `koor-yehn-teh` |  |
| plato | not verified (no page found) | `plah-toh` |  |
| baso | not verified (no page found) | `bah-soh` |  |
| kutsara | not verified (no page found) | `koo-chah-rah` |  |
| tinidor | not verified (no page found) | `tee-nee-dohr` |  |
| kahoy | not verified (source has no IPA or mark) | `kah-hoy` | no IPA, unmarked headword (wiktionary.com:kahoy) |
| bulak | not verified (no page found) | `boo-lahk` |  |

