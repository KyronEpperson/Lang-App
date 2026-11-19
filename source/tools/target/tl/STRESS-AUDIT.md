# Tagalog stress / catch audit (respell.js LEX)

Status as of 2026-11-19 17:28 UTC. Generated from the audit log; tools/target/tl/respell.js is the source of truth.

Notation as in respell.js: no mark = next-to-last stress; acute = stressed vowel; grave on last vowel = final catch, next-to-last stress; circumflex = stressed last syllable + catch.

Sources: "WT/kaikki" = the Wiktionary entry as mirrored on kaikki.org (kaikki.org/dictionary/Tagalog/meaning/...); "WT" = a Wiktionary page or a Wiktionary mirror (wiktionary.com, kiwix mirrors); "WP Tagalog grammar" = en.wikipedia.org/wiki/Tagalog_grammar (pronoun, marker and particle tables, with diacritics). The IPA quoted is the Standard-Tagalog phonemic line of the entry.

## Counts

- Unchecked author entries at the start: 229
- Checked against a source: 200
- Of those, wrong and fixed: 18 (ano'ng was a notation fix with no change in output; dos -> dós changes only alas-dos)
- Could not check against any source (still author forms, listed below): 29
- New words added and checked against a source: 81 (four teen numbers rest on Wikibooks only, see 'Source ambiguous'); plus 3 added unverified (Nobyembre, labimpito, bumili)

Every checked or added entry now sits in SRC_CHECKED (the file's way of marking a checked entry); unchecked ones stay in SRC.

## Entries changed (old -> new)

| word | old | new | source |
|---|---|---|---|
| kita | kita | kitá | WP Tagalog grammar (kitá) |
| talaga | talaga | talagá | WT/kaikki talaga /talaˈɡa/ (adverb 'really'); talagà = well (water) |
| edad | edad | edád | WT/kaikki edad /ʔeˈdad/ |
| martes | martes | martés | WT/kaikki Martes /maɾˈtes/ |
| sabado | sabado | sábado | WT/kaikki Sabado /ˈsabado/ |
| linggo | linggo | linggó | WT/kaikki Linggo /liŋˈɡo/ |
| anak | anak | anák | WT/kaikki anak /ʔaˈnak/ (first listed); WP Philippine kinship: anák |
| kapatid | kapatid | kapatíd | WT/kaikki kapatid /kapaˈtid/; WP Philippine kinship: kapatíd |
| lutuin | lutuìn | lutúin | WT/kaikki lutuin /luˈtuʔin/ (no final catch) |
| dos | dos | dós | WT/kaikki a-dos /ʔa ˈdos/ (one syllable; the acute makes alas-dos stress the number, like the checked trés and WT alas-kuwatro /ʔaˌlas kuˈwatɾo/) |
| ano'ng | anong | anóng | WT/kaikki ano /ʔaˈno/ + linker -ng (entry was 'anong', already overridden in code by LEX['anong']='anóng'; output unchanged) |
| tara | tara | tará | WT tara (interjection 'let's go') /taˈɾa/; tara /ˈtaɾa/ = tare |
| daan | dáan | daán | WT daan 'hundred' /daˈʔan/ first listed (also /ˈdaʔan/) |
| lumpia | lumpyá | lumpyâ | WT lumpia: headword lumpiâ /lumpiˈaʔ/ [lʊmˈpjaʔ] (final catch) |
| halo | hálo | halò | WT halo-halo: halò-halò /ˌhaloʔ ˈhaloʔ/ (the course uses halo-halo, profile §9); WT halò /ˈhaloʔ/ mixture (hálo without catch = pestle) |
| sinigang | sinígang | sinigáng | WT (kiwix mirror) sinigang: sinigáng /siniˈɡaŋ/ |
| eskuwelahan | eskwelahán | eskwélahan | WT eskuwelahan /ʔeskuˈelahan/ [ʔɛsˈkwɛ.lɐ.hɐn] |
| guro | guro | gurò | WT/kaikki guro: gurò /ˈɡuɾoʔ/ first listed (also gurô /ɡuˈɾoʔ/) |

## Entries that could NOT be verified (native speaker: please check exactly these)

| word | current form (author) | note |
|---|---|---|
| kanina | kanina | no dictionary entry with stress found (tagalog.com gives audio only) |
| pesos | pésos | no Tagalog entry with IPA found (WT peso = alt. of piso, no IPA) |
| pupunta | pupuntá | derived: WT lists pupunta as contemplative of pumuntá (no IPA); root stress puntá kept, so pupuntá is very likely right |
| nagluto | naglutò | derived: WT lists nagluto as complete of maglutò (no IPA); naglutò by analogy with the checked maglutò |
| nagluluto | naglulutò | derived: WT lists nagluluto as progressive of maglutò (no IPA) |
| magluluto | maglulutò | derived: WT lists magluluto as contemplative of maglutò (no IPA) |
| niluto | nilutò | derived: WT lists niluto as complete of lutuin (no IPA); root lutò has the catch |
| naglaro | naglarô | derived: WT lists naglaro as complete of maglarô (no IPA) |
| nagtatrabaho | nagtatrabáho | derived from checked magtrabáho; no entry with IPA found |
| nag-aaral | nag-aáral | derived from checked mag-áral; WT mag-aaral (contemplative) has no IPA |
| natulog | natulog | derived: WT lists natulog as complete of matulog (no IPA) |
| naligo | naligò | derived: WT lists naligo as completive of maligò, no IPA |
| pabili | pabilí | no entry with IPA found (WT lists pabili under bilí without IPA) |
| pambili | pambili | no entry with IPA found (WT lists pambili under bilí without IPA) |
| pakitulungan | pakitulúngan | derived from checked tulúngan with paki-; no entry with IPA found |
| kumanta | kumantá | root kantá /kanˈta/ confirmed (WT); kumanta itself not found; -um- keeps root stress (cf. sayáw/sumayáw, puntá/pumuntá), so kumantá is very likely right |
| ana | ána | personal name (Spanish Ana); no Tagalog dictionary entry |
| juan | hwán | personal name (Spanish Juan); no Tagalog dictionary entry |
| jun | jun | one-syllable name: no stress to decide (no catch) |
| maria | marí-ya | personal name (Spanish María); no Tagalog dictionary entry |
| jose | hosé | personal name (Spanish José); no Tagalog dictionary entry |
| liza | lísa | personal name; no Tagalog dictionary entry |
| mark | mark | one-syllable name: no stress to decide (no catch) |
| joy | joy | one-syllable name: no stress to decide (no catch) |
| rey | rey | one-syllable name: no stress to decide (no catch) |
| carlo | kárlo | personal name; no Tagalog dictionary entry |
| bea | béya | personal name; no Tagalog dictionary entry |
| ben | ben | one-syllable name: no stress to decide (no catch) |
| pilipinas | pilipínas | WT Tagalog entry gives no IPA |

Also added, NOT verified (in SRC, so TL_CHECK still flags them): **Nobyembre** = nobyémbre (the Tagalog Wiktionary entry has no IPA; stress as the checked Setyembre / Disyembre), **labimpito** = labimpitó (only source, Wikibooks, writes "labing pitô" with a catch that the checked pitó does not have), **bumili** = bumilí (no entry with IPA; the checked bilí, bibilí, binilí all keep final stress).

## Source ambiguous (checked, but the source gives two readings: native speaker please confirm)

Rule used: where Wiktionary lists two Standard Tagalog pronunciations, the first-listed one was taken; for describing words whose headword carries an accent (tulóg, gutóm, uháw, galít, takót), the headword was followed, as the profile already does for pagód / gisíng.

| word | form used | the other reading in the source |
|---|---|---|
| anak | anák | WT/kaikki anak /ʔaˈnak/ (first listed); WP Philippine kinship: anák |
| alam | alám | WT/kaikki alam /ʔaˈlam/ (first listed; /ˈʔalam/ also listed) |
| ayaw | áyaw | WT/kaikki ayaw /ˈʔajaw/ first listed (headword ayáw, /ʔaˈjaw/ also listed) |
| tiyo | tíyo | WT/kaikki tiyo /ˈtio/ first listed (also /tiˈo/ [ˈt͡ʃo]) |
| pinsan | pinsan | WT/kaikki pinsan /ˈpinsan/ (first listed; /pinˈsan/ also) |
| sige | síge | WT (neonvagabond mirror) sige /ˈsiɡe/ first listed (also /siˈɡe/) |
| ingat | íngat | WT/kaikki ingat /ˈʔiŋat/ first listed (also /ʔiˈŋat/) |
| daan | daán | WT daan 'hundred' /daˈʔan/ first listed (also /ˈdaʔan/) |
| tiya | tíya | WT/kaikki tiya /ˈtija/ first listed |
| tulog | tulóg | WT/kaikki tulog: adjective headword tulóg (/tuˈloɡ/; /ˈtuloɡ/ also listed) |
| lumpia | lumpyâ | WT lumpia: headword lumpiâ /lumpiˈaʔ/ [lʊmˈpjaʔ] (final catch) |
| uhaw | uháw | WT/kaikki uhaw: adjective headword uháw |
| gutom | gutóm | WT/kaikki gutom: adjective headword gutóm |
| bayad | bayad | WT/kaikki bayad noun /ˈbajad/ first listed |
| sakayan | sakáyan | WT/kaikki sakayan /ˌsaˈkajan/ first listed |
| simbahan | simbáhan | WT simbahan: noun headword unaccented (= next-to-last stress, WT convention) |
| malapit | malápit | WT malapit: headword unaccented (= next-to-last stress, WT convention); malapít = intimate |
| tulungan | tulúngan | WT tulungan: verb headword unaccented (= next-to-last stress, WT convention); tulungán = noun |
| galit | galít | WT galit: adjective headword galít |
| takot | takót | WT/kaikki takot: adjective headword takót /taˈkot/ |
| guro | gurò | WT/kaikki guro: gurò /ˈɡuɾoʔ/ first listed (also gurô /ɡuˈɾoʔ/) |
| kutsara | kutsára | WT/kaikki kutsara /kuˈt͡ʃaɾa/ first listed |
| kusina | kusína | WT (neonvagabond mirror) kusina /kuˈsina/ first listed |
| apo | apó | WT/kaikki apo 'grandchild': apó /ʔaˈpo/ first listed; WP Philippine kinship: apó |
| bunso | bunsô | WT/kaikki bunso: bunsô /bunˈsoʔ/ first listed (also bunsó) |
| gatas | gatas | WT/kaikki gatas 'milk' /ˈɡatas/ first listed (also /ɡaˈtas/) |
| bumibili | bumíbili | WT (neonvagabond mirror) bumibili /buˈmibili/ [bʊˈmi.bɪ.lɪ] (headword bumíbilí; the tool marks one stress, the IPA's) |
| gaano | gaáno | WT (kiwix mirror) gaano /ɡaˈʔano/ first listed (also gaanó) |
| tao | táo | WT/kaikki tao /ˈtaʔo/ first listed |
| okey | ókey | WT/kaikki okey /ˈʔokej/ first listed (headword okéy, /ʔoˈkej/ also listed) |
| eskuwelahan | eskwélahan | headword eskuwélahán (accent on both "we" and "han"); the IPA marks only "we" as stressed; the author had eskwelahán. Compare páaralán, iníinóm, pándesál, where the final accent is the main one. |
| bumibili | bumíbili | headword bumíbilí; IPA /buˈmibili/ marks only "mi". |
| labintatlo, labinlima, labinsiyam, labingwalo | final stress | source is Wikibooks (Tagalog/Lesson 4), not a dictionary; stress matches the checked tatló, limá, siyám, waló and WT labindalawá. |

Notes for the reviewer:
- Many unverified entries are inflected verb forms whose roots are now checked. They were left as the author wrote them: the attested forms mostly keep the root's stress and catch (kumáin/kakáin/kumakáin, inóm/uminóm/iinóm, puntá/pumuntá/papuntá, bilí/bibilí/binilí). The single page found for a progressive with a different pattern is bumibili (/buˈmibili/), so the progressive forms (nagluluto, nagtatrabaho, nag-aaral) are worth a look.
- ala-una is respelled as two words (ah-LAH OO-nah) because ala is not one of the tool's prefixes; Wiktionary has /ʔaˌla ˈʔuna/. Code not changed.
- "Alas-dos y medya." throws: the bare word y has no vowel, so the generator refuses it. Code not changed; writers need a workaround or a code change.
- Personal names cannot be looked up in a Tagalog dictionary; the one-syllable ones need no stress decision.

## Words added

| word | form | source |
|---|---|---|
| ama | amá | WT/kaikki ama 'father': amá /ʔaˈma/; WP Philippine kinship: amá |
| ina | iná | WT/kaikki mag-ina /maɡʔiˈna/; WP Philippine kinship: iná |
| apo | apó | WT/kaikki apo 'grandchild': apó /ʔaˈpo/ first listed; WP Philippine kinship: apó |
| bunso | bunsô | WT/kaikki bunso: bunsô /bunˈsoʔ/ first listed (also bunsó) |
| pamangkin | pamangkín | WT/kaikki pamangkin /pamaŋˈkin/ |
| enero | enéro | WT Enero /ʔeˈneɾo/ |
| pebrero | pebréro | WT Pebrero /pebˈɾeɾo/ |
| hunyo | húnyo | WT Hunyo /ˈhunjo/ |
| labing | labíng | WT labing- /laˈbiŋ/ (used in labing-isa, labing-apat, labing-anim, labing-siyam, which the tool reads as two words); WT labing-isa /laˌbiŋ ʔiˈsa/ |
| labindalawa | labindalawá | WT (kiwix mirror) labindalawa /la.bin.da.la.ˈwa/ |
| dalawampu | dalawampû | WT (neonvagabond mirror) dalawampu: dalawampû /dalawamˈpuʔ/ |
| buwan | buwán | WT/kaikki buwan /buˈwan/ |
| labintatlo | labintatló | Wikibooks Tagalog/Lesson 4 'labintatló' (same final stress as tatló and the WT-checked labindalawá) |
| labinlima | labinlimá | Wikibooks Tagalog/Lesson 4 'labinlimá' (as limá) |
| labinsiyam | labinsyám | Wikibooks Tagalog/Lesson 4 'labinsiyám' (as siyám) |
| marso | márso | WT Marso /ˈmaɾso/ |
| abril | abríl | WT Abril: Abríl /ʔaˈbɾil/ |
| mayo | máyo | WT Mayo /ˈmajo/ |
| hulyo | húlyo | WT Hulyo /ˈhuljo/ |
| agosto | agósto | WT Agosto /ʔaˈɡosto/ |
| setyembre | setyémbre | WT Setyembre /setˈjembɾe/ [sɛˈt͡ʃɛm.bɾɛ] |
| oktubre | oktúbre | WT Oktubre /ʔokˈtubɾe/ |
| disyembre | disyémbre | WT Disyembre /disˈjembɾe/ [dɪˈʃɛm.bɾɛ] |
| ala | alá | WT/kaikki ala una /ʔaˌla ˈʔuna/ (the tool reads ala-una as two words) |
| una | una | WT/kaikki ala una /ʔaˌla ˈʔuna/; WT/kaikki una 'first' /ˈʔuna/ |
| itlog | itlóg | WT/kaikki itlog /ʔitˈloɡ/ |
| pandesal | pandesál | WT/kaikki pandesal /ˌpandeˈsal/ |
| isda | isdâ | WT/kaikki isda /ʔisˈdaʔ/ |
| baboy | baboy | WT/kaikki baboy /ˈbaboj/ |
| malamig | malamíg | WT/kaikki malamig /malaˈmiɡ/ |
| mainit | mainit | WT/kaikki mainit /maˈʔinit/ |
| mabilis | mabilís | WT/kaikki mabilis sa alas-kuwatro /mabiˌlis …/ |
| marami | marami | WT/kaikki marami /maˈɾami/ |
| matanda | matandâ | WT/kaikki matanda: matandâ /matanˈdaʔ/ |
| banyo | bányo | WT banyo /ˈbanjo/ |
| at | at | WT/kaikki at /ʔat/ |
| manok | manók | WT/kaikki manok /maˈnok/ |
| saging | saging | WT/kaikki saging /ˈsaɡiŋ/ |
| gulay | gulay | WT/kaikki gulay /ˈɡulaj/ |
| gatas | gatas | WT/kaikki gatas 'milk' /ˈɡatas/ first listed (also /ɡaˈtas/) |
| mabagal | mabagal | WT (neonvagabond mirror) mabagal /maˈbaɡal/ |
| mahirap | mahirap | WT (neonvagabond mirror) mahirap /maˈhiɾap/ |
| madali | madalî | WT/kaikki madali: madalî /madaˈliʔ/ |
| malinis | malinis | WT/kaikki malinis /maˈlinis/ |
| bibili | bibilí | WT (neonvagabond mirror) bibili: bibilí /bibiˈli/ |
| bumibili | bumíbili | WT (neonvagabond mirror) bumibili /buˈmibili/ [bʊˈmi.bɪ.lɪ] (headword bumíbilí; the tool marks one stress, the IPA's) |
| binili | binilí | WT/kaikki binili /biniˈli/ |
| umalis | umalís | WT/kaikki umalis /ʔumaˈlis/ |
| umuwi | umuwî | WT/kaikki umuwi: umuwî /ʔumuˈiʔ/ [ʔʊˈmwɪʔ] |
| dumating | dumatíng | WT dumating /dumaˈtiŋ/ |
| magsalita | magsalitâ | WT (kiwix mirror) magsalita: magsalitâ /maɡsaliˈtaʔ/ |
| gaano | gaáno | WT (kiwix mirror) gaano /ɡaˈʔano/ first listed (also gaanó) |
| mayroon | mayroón | WT/kaikki mayroon: mayroón /majɾoˈʔon/ |
| dahil | dahil | WT/kaikki dahil /ˈdahil/ |
| eskuwela | eskwéla | WT/kaikki eskuwela /ʔeskuˈwela/ [ʔɛsˈk̠wɛː.lɐ] |
| lahat | lahát | WT lahat: lahát /laˈhat/ |
| bigas | bigás | WT/kaikki bigas: bigás /biˈɡas/ |
| prutas | prútas | WT/kaikki prutas /ˈpɾutas/ |
| kalye | kálye | WT/kaikki kalye /ˈkalje/ |
| kuwarto | kwárto | WT kuwarto /kuˈaɾto/ [ˈkwaɾ.to] |
| pasensiya | pasénsya | WT/kaikki pasensiya: pasénsiyá /paˈsensija/ [pɐˈsɛn̪.ʃɐ] |
| pasensya | pasénsya | WT/kaikki pasensiya (alt. pasensya) [pɐˈsɛn̪.ʃɐ] |
| mabuhay | mabúhay | WT mabuhay /maˈbuhaj/ |
| maikli | maiklî | WT/kaikki maikli: maiklî /maʔikˈliʔ/ |
| mahaba | mahabà | WT/kaikki mahaba: mahabà /maˈhabaʔ/ |
| kapag | kapág | WT/kaikki kapag: kapág /kaˈpaɡ/ |
| papunta | papuntá | WT/kaikki papunta: papuntá /papunˈta/ |
| iniinom | iniinóm | WT/kaikki iniinom: iníinóm /ʔiˌniʔiˈnom/ |
| makakain | makakáin | WT/kaikki makakain /makaˈkaʔin/ |
| magpunta | magpuntá | WT/kaikki magpunta: magpuntá /maɡpunˈta/ |
| kabayan | kabáyan | WT/kaikki kabayan /kaˈbajan/ |
| maski | maskí | WT/kaikki maski: maskí /masˈki/ |
| pera | péra | WT/kaikki pera /ˈpeɾa/ |
| tren | tren | WT/kaikki tren /ˈtɾen/ |
| tao | táo | WT/kaikki tao /ˈtaʔo/ first listed |
| o | o | WT/kaikki o (conjunction 'or') /ʔo/ |
| okey | ókey | WT/kaikki okey /ˈʔokej/ first listed (headword okéy, /ʔoˈkej/ also listed) |
| sana | sana | WP Tagalog grammar (enclitic sana, unmarked) |
| man | man | WP Tagalog grammar (enclitic man) |
| tuloy | tulóy | WP Tagalog grammar (enclitic tulóy) |
| labingwalo | labingwaló | Wikibooks Tagalog/Lesson 4 'labing waló' (as waló); WT labing- lists labingwalo (no stress shown) |

## Entries checked and confirmed unchanged

mabuti, mabait, atin, namin, natin, tayo, ko, mo, ka, akin, amin, niyo, ho, din, rin, daw, raw, yata, lamang, lang, na, pa, ang, sa, si, ni, kay, ng, yung, grabe, gabi, walang, anuman, hapon, tanghali, lunes, alas, miyerkoles, huwebes, lima, siyam, anim, walo, sampu, libo, kuwatro, otso, dose, beynte, bente, nuwebe, apat, piso, sukli, kuya, tito, tita, lola, lolo, uminom, kinain, alam, ayaw, babae, lalaki, ate, tiyo, kakain, tatay, singkuwenta, singkwenta, dalawa, pinsan, pumunta, magluto, paalam, mamaya, biyernes, singko, sais, taon, minuto, onse, diyes, uno, barya, sige, ewan, ingat, pangalan, kahapon, oras, trenta, asawa, magulang, tiya, ayoko, puwede, pwede, marunong, ingles, kaibigan, kailangan, kumakain, pagkain, kainin, maglaro, laro, trabaho, magtrabaho, matulog, tulog, gumising, uhaw, tsaa, masakit, mahal, tubig, tinapay, adobo, pansit, pancit, gutom, busog, palengke, tindahan, mura, sakit, ulo, tulong, botika, bayad, sakayan, kaliwa, kanan, kanto, simbahan, malapit, malayo, paano, tulungan, doktor, ospital, opisina, paaralan, matangkad, malaki, pangit, galit, takot, sumayaw, bago, luma, kutsara, estudyante, sayaw, diretso, alin, tiyan, kusina, dyip, jeep, siyete, pamilya, maynila, makati, tagalog, pilipino, amerikano, cebu, nanay, di, wag, yan, medya, yun, to, taga, nang, iinom, para, amerika
