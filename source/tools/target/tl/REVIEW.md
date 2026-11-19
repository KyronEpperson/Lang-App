# en-tl cold review (EN-TL-REVIEWER, 2026-11-19)

Brief: docs/briefs/en-tl-R.md + docs/TARGET-REVIEW.md. Saved batch by batch.

## Batch 0: stress audit of the author LEX block (respell.js)

Sources: kaikki.org mirror of English Wiktionary (WT/kaikki), Wiktionary mirrors (wiktionary.com, neonvagabond, freedombox kiwix: WT), tagalog.com (TC: accent mark in the definition line). Same rules as STRESS-AUDIT.md (first-listed IPA; headword for describing words).

### Checked against a source (moved from SRC to SRC_CHECKED)

| word | form | source | result |
|---|---|---|---|
| kaysa | kaysá | WT/kaikki kaysá /kajˈsa/ (also /ˈkesa/ as "kesa") | author right; the writers' KAI-sah is wrong |
| tapos | tapós | WT/kaikki adj. tapós /taˈpos/ 'finished' | right for the only pron row (Tapos na ang klase.). NOTE: the adverb 'then' is headword tapos (next-to-last); it occurs only in extra-b dialogue lines, which have no pron |
| tabi | tabí | WT tabí /taˈbi/ | right |
| kilala | kilalá | WT/kaikki adj. headword kilalá; IPA lists /kiˈlala/ first and /kilaˈla/ second (headword rule, as for tulóg / gutóm) | right; source gives two readings |
| masama | masamâ | WT/kaikki masamâ /masaˈmaʔ/ | right |
| sandali | sandalî | WT/kaikki sandalî /sandaˈliʔ/ | right |
| umupo | umupô | WT/kaikki umupô /ʔumuˈpoʔ/ | right |
| luto | lutò | WT/kaikki lutò /ˈlutoʔ/ | right |
| hanggang | hanggáng | WT hanggáng /haŋˈɡaŋ/ | right |
| mahilig | mahilig | WT/kaikki /maˈhiliɡ/ | right (next-to-last) |
| kumanan | kumanan | WT/kaikki /kuˈmanan/ | right (next-to-last) |
| mano | mano | WT/kaikki /ˈmano/ | right |
| ulam | ulam | WT/kaikki /ˈʔulam/ | right |
| kina | kiná | WT/kaikki kiná /kiˈna/ | right |
| nina | niná | WT/kaikki niná /niˈna/ | right |
| meron | meron (NEW) | WT/kaikki meron /ˈmeɾon/ | was unlisted; added |
| nasa | nasa | WT/kaikki nasa /ˈnasa/ | right |
| sumama | sumama | WT sumama /suˈmama/ | right |
| manood | manoód | WT manoód /manoˈʔod/ | right |
| siguro | siguro | WT/kaikki /siˈɡuɾo/ | right |
| magtanong | magtanóng | WT Magtanóng /maɡtaˈnoŋ/ | right |
| alala | alalá | WT/kaikki adj. alalá /ʔalaˈla/ | right |
| lagnat | lagnát | WT/kaikki lagnát /laɡˈnat/ | right |
| pakiramdam | pakiramdám | WT/kaikki /pakiɾamˈdam/ | right |
| pamasahe | pamasáhe | WT/kaikki /pamaˈsahe/ | right |
| inaantok | inaantók | WT/kaikki ináantók /ʔiˌnaʔanˈtok/ | right (main stress last) |
| ganda | gandá | WT/kaikki gandá /ɡanˈda/ | right |
| klase | klase | WT/kaikki /ˈklase/ | right |
| kurso | kurso | WT/kaikki kurso /ˈkuɾso/ (kursó = diarrhea) | right |
| pasok | pasok | WT noun headword pasok (no IPA; unaccented = next-to-last); pasók = adj. | right for the noun |
| pare / mare | pare / mare | WT /ˈpaɾe/, WT/kaikki /ˈmaɾe/ | right |
| taxi | táksi | WT/kaikki taksi /ˈtaksi/ | right |
| cellphone | sélfon | WT selpon /ˈselpon/ (stress); the f of the English spelling kept | right |
| basketball | básketbol | WT/kaikki básketból /ˈbasketbol/ | right |
| traffic | tráfik | WT/kaikki trapik /ˈtɾapik/ (stress); f kept | right |
| aircon | érkon | WT erkon /ˈʔeɾkon/ | right |
| tricycle | tráysikel -> **traysikél** | WT/kaikki tráysikél /ˌtɾajsiˈkel/ (main stress last, secondary on tray); TC tráysikél | WRONG, fixed: TRAI-see-kehl -> trai-see-KEHL |
| kumanta | kumantá | TC kumantá | right |
| pabili | pabilí | TC pabilí | right |
| kumaliwa | kumaliwâ | TC kumaliwâ | right (brief's doubt settled) |
| nakatira | nakatirá | TC nakatirá | right |
| magpahinga | magpahingá | TC magpahingá | right |

### Ongoing and future forms (writers' doubt)
WT umiinóm /ʔumiʔiˈnom/ and WT mag-aaral (verb, contemplative) /maɡʔaˈʔaɾal/ keep the root's stress, like the checked iniinóm, kakáin, bibilí. So nagluluto = naglulutò, nagtatrabaho = nagtatrabáho, nag-aaral = nag-aáral (all as in LEX) follow the root; bumíbili (WT /buˈmibili/) is the odd one and is sourced. No change. WT magluto / magtrabaho list nagluluto, nagtatrabaho without IPA, so these stay in SRC (derived, not seen with IPA).

### respell.js code changes
- PREFIX gains `ala` and `paki`: *ala-una* is now one word (ah-lah-OO-nah, matching WT /ʔaˌla ˈʔuna/; before: ah-LAH OO-nah); *Paki-on* is one word.
- `on=ón` (author entry, unverified): *Paki-on ang aircon.* -> pah-kee-OHN ahng EHR-kohn (before: PAH-kee ohn …).
- repron.js tl: 541 prons read, 2 rewritten (tricycle, Paki-on ang aircon.).

### NOT verified (still author entries in SRC; native speaker please check)
kanina (TC audio only), pesos, siná (WT si lists plural 'sina' with no mark; kept final stress by analogy with the checked niná / kiná), kanyá, dadaán (root daán), pakiabót (root abót; TC no marks), sasakáy (root sakáy), magtatrabáho, aáral, pinakamagandá / pinakamura / pinakamalapit (pinaka- assumed to keep the root's stress; WT pinaka- gives none, but WT pinakamaguló /pinakamaɡuˈlo/ keeps a final stress, which supports the rule), sine (no Tagalog entry found; TC no marks), shopping=syáping, mall=mol, wait=weyt, on=ón, pakitawag, pakitulúngan (TC no marks), and the derived verb forms already listed in STRESS-AUDIT.md (pupuntá, naglutò, naglulutò, maglulutò, nilutò, naglarô, nagtatrabáho, nag-aáral, natulog, naligò, bumilí). One-syllable words (may, ay, mas) need no stress.
- kilala: WT headword kilalá but the summarized IPA /kiˈlala/ marks the next-to-last syllable; LEX keeps kilalá (headword rule). Native check.
- Sentence-final *po* is shown as `pohq` (the profile's worked example 1). Whether the catch is really heard there is a native-speaker question; not changed.

## Batch 1: decks-a.js (read in full)
- wrong teaching / consistency: `alas-una ng hapon` -> `ala-una ng hapon` (lesson time says one o'clock is ala-una, with no s; WT ala una /ʔaˌla ˈʔuna/). Pron regenerated: ah-lah-OO-nah nahng HAH-pohn. Note now says so.
- wording: Umuwi na si Tatay note "umuwi = to go or come home" -> "umuwi = went or came home (uwi = home)" (umuwi is the completed form).
- Checked and left: the other 154 cards in decks 1-9; notes on linker, catch and markers are accurate. No cross-deck duplicates (validator WARN empty).

## Batch 2: extra-a.js (read in full)
- wording / doubt (word order): "Nasa bahay ni Lola sila." (pronoun at the end, marked in standard Tagalog) -> "Nandoon sila sa bahay ni Lola." A first try, *Nasa bahay sila ni Lola*, was dropped because *sila ni Lola* can read "Lola and the others". The original was not wrong, only marked; native check.
- English: PATTERN "Ito ang kapatid ko." = "This is my brother." -> "This is my brother (or sister)." (kapatid has no sex; the deck note says so).

## Batch 3: decks-b.js (read in full)
- No wrong Tagalog found. Checked in particular: *Mas malaki ito kaysa diyan* (diyan is the sa form of iyan, so correct after kaysa); *Mas matangkad si Juan kay Mark* (kay without kaysa is normal before a name); *Huwag kang mag-alala*; *Kumain na po ba kayo?* (order na, po, ba, kayo); *Hindi ka umalis* note ("You didn't leave") is right.
- pron: tricycle and Paki-on rows regenerated by repron (batch 0). Prose respelling in the Siguro note (bah-KAH / BAH-kah) equals `respell.js --lex "baká" / "báka"`.
- Near-duplicates (writers' open point): no identical targets across the two deck files. *Kumain ka na?* (Food) / *Kumain ka na ba?* (Questions) and *Kumain na po kayo?* / *Kumain na po ba kayo?* are near-duplicates on purpose (the second pair teaches ba); meanings differ ("Have you eaten?" / "Have you eaten yet?"). *mag-aral* (Sounds) vs *Nag-aral ako kahapon.* / *Nag-aaral pa ako.* (Work) are different forms. *Gutom na ako.* and *Ano ang trabaho mo?* occur once each as cards. Left as they are.

## Batch 4: extra-b.js (read in full)
- consistency: dialogue "Kuya, saan po ang ospital?" -> "Kuya, nasaan po ang ospital?" (the course teaches nasaan for where a thing is; saan + ang is common speech but not what lesson questions models). *Saan po ang sakayan papuntang Makati?* kept (asks where to go to get a ride).
- Checked and left: *tapos kumanan po kayo* ('then', TAH-pohs; no pron row), *Labinlimang piso po* fare, all examples and patterns.

## Batch 5: lessons-1.js (sounds, greetings, pronouns, intro, this-that, markers, linker, ng-pronouns, questions; read in full)
- wrong teaching: intro body said "ano ang often shrinks to anong, with the linker -ng" (mixes the contraction ano'ng = ano ang with ano + linker). Now: "you will usually hear Anong pangalan mo?, with ano joined to the noun by the linker -ng (some people write ano'ng, short for ano ang)". Agrees with questions ("What + noun: anong") and the or/fi items.
- Checked and left: all 126 practice items and 27 checks. Distractors are wrong forms; accepted lists cover the natural answers (predicate-first plus ay form where taught; both orders of describing word + noun). No answer lists a hyphen-less, spaced or apostrophe-less twin (engine facts).

## Batch 6: lessons-2.js (yes-no, numbers, may, family, sa-pronouns, word-order, um, mag, aspect; read in full)
- practice (po rule, profile §2.3): yes-no ty "We don't have any coffee (we, not you)" listed *Wala po kaming kape* for a prompt with no polite cue -> removed. may ty "There's no coffee." listed *Wala pong kape* -> removed. The cue decides; never both.
- practice (writers' open point): family or "My mom is a teacher" -> "My mom is a teacher (start with guro)". The same tiles also build *Nanay ko ang guro* ("The teacher is my mom", an identifying sentence that does not answer "a teacher"); the cue removes the doubt.
- English: family example *May dalawang kapatid ako.* "I have two brothers and sisters." -> "I have two siblings." (two in total, sex unknown).
- Writers' open point, um/mag order items (*Uminom ako ng tubig* vs *Uminom ng tubig ako*): left as is. The short pronoun goes right after the verb (the course's own little-word rule); *Uminom ng tubig ako* is heard but marked, so one tile order is right for an order item.
- Checked and left: ongoing forms in aspect (*kumakain, umiinom, nagluluto, nag-aaral*) and the habit use of the ongoing form; numbers table; *mayroon / meron* pairs listed both ways as profile §10 asks.

## Batch 7: lessons-3.js (gusto, in, food, time, directions, requests, particles, compare, taglish; read in full)
- wrong teaching (overgeneralisation): gusto body "puwede and marunong ... Both take the ang form" -> "With the -um- and mag- verbs you know, both take the ang form ..., joined to the verb with the linker." (*Puwede ko bang hiramin?* with an object-focus verb takes ko, so the blanket rule was too wide.)
- practice: food ty "Two adobo, please (polite)" accepted only *Dalawang adobo po*; the lesson teaches *nga po* for orders (*Isang adobo nga po*) -> added *Dalawang adobo nga po*.
- English: directions fi "Pupunta ako __ Juan." meaning "I'm going to Juan." -> "I'm going to see Juan."
- Checked and left: *-in* forms (kinain, binili, niluto, ininom, kakainin, bibilhin), *isa pang kanin*, *Gusto ko pang kumain*, *kaysa diyan*, *kaysa kay Ana*, Taglish table.

## Batch 8: prose respellings (notes, bodies, why lines; repron and the validator do not see these)
- Hand-typed "ma-NGA" (not the aid's format) in the mga bata card note, the sounds body (twice, plus "BA-ta") and a sounds why line -> tool output mah-NGAH / mah-NGAH BAH-tahq.
- Checked equal to `respell.js` / `--lex`: BAH-tah (báta), ah-SOH (asó), boo-KAHS (bukás), bah-KAH / BAH-kah (baká / báka), mahng-GAH, chah-AH, mahg-AH-rahl, AH-teh. No KAI-sah or TRAI-see-kehl left in prose.
- Script scan of all fill/type answers: no pair differs only by hyphen, space or inner apostrophe (engine facts); no po answer under a prompt without a polite cue (after batch 6); every polite-cue type item has po answers.

## Writers' open points: decisions
1. **puwede / marunong with the ang form (lesson gusto) vs profile §8** ("+ ng form"): the lesson is right for actor-focus verbs (*Puwede ba akong kumain?*, *Marunong akong magluto*), and profile §4.12 itself uses *Pwede akong… / Marunong akong…*. §8's row is the outlier; lesson kept, its rule narrowed (batch 7). Profile §8 should be corrected by the lead.
2. **ala-una**: the standard form for one o'clock (WT ala una). The time card said *alas-una*; changed to *ala-una ng hapon*, and respell.js now treats ala- as a prefix.
3. **"mas … sa" without kaysa**: no item, check, tip or note offers it as a wrong answer. compare or "Juan is taller than Ana" has the tile sa as a distractor, but *kaysa sa Ana* is wrong for a name anyway. The deck note on *Mas matangkad si Juan kay Mark* presents kay without kaysa as normal. OK.
4. **"My mom is a teacher" second order**: *Nanay ko ang guro* means "The teacher is my mom"; cue "(start with guro)" added (batch 6). Type items accept the ay form where taught.
5. **um / mag order items** (*Uminom ng tubig ako*): one tile order is right (pronoun right after the verb); kept.
6. **Near-duplicate cards**: none identical; the Kumain ka na? / Kumain ka na ba? pairs are deliberate (batch 3).
7. **Taglish spellings**: card targets use the English spelling (cellphone, taxi, tricycle, aircon, traffic) with the respelled form in the note, as profile §2.2 says; typed answers with jeep also accept dyip; kumusta / kamusta, mayroon / meron, ninyo / niyo are listed in pairs. *'yung*, *'di*, *'yan* are taken only in "(casual)" items, with the full form listed too.

## Follow-up after second look
- respell.js: kumaliwa, nakatira, magpahinga moved to SRC_CHECKED (tagalog.com accents); tricycle cross-checked in two sources.
- practice: aspect ty "I'll go to the market tomorrow" now also accepts *Bukas ako pupunta sa palengke* (the order the course models in *Alas-sais ako gumising* and *Bukas ako kakain*).
- practice (profile §7, ay form accepted as second answer): added the ay twin to in ("I ate the mango" *Ang mangga ay kinain ko*; "He bought the bread" *Ang tinapay ay binili niya*; "I ate a mango" *Ako ay kumain ng mangga*), time ("I'll eat tomorrow" *Ako ay kakain bukas*) and compare ("Ana is taller than Juan" *Si Ana ay mas matangkad kaysa kay Juan*). Lessons 1-2 already did this.
- STRESS-AUDIT.md is now behind respell.js (it predates the moves above and the tricycle fix); REVIEW.md batch 0 is the newer record. Not edited.

## Final run
- `node tools/target/repron.js tl`: 541 prons read, 0 rewritten (no generator warnings).
- `node tools/target/gen.js tl`: wrote /tmp/course-en-tl.hold.js (HOLD kept) · 27 lessons · 18 decks · 311 cards.
- `node tools/target/validate.js tl`: PASS: all checks OK. `node --check` passes on every JS file. packs/ and src/ not touched.
