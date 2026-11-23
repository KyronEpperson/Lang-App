# RPA (Romanized Popular Alphabet): spec for a White Hmong checker

This file is for the people and scripts that check Hmong text in the `hmn-en` and `en-hmn` courses. The courses teach **White Hmong (Hmoob Dawb)** in the **RPA**, as the US Hmong community writes it. Sources are listed by id at the end, and their full entries are in `SOURCES.md`.

The author is not a Hmong speaker. Every rule below comes from an opened source, from the glossary built for this research (`GLOSSARY.tsv`), or is marked **[inference]**.

## 1. The syllable

An RPA syllable is written **onset + vowel + tone letter**:

```
syllable = [onset] vowel [tone]
onset    = one of the 56 spellings in §2, or nothing (zero onset)
vowel    = one of the 13 White spellings in §3 (+ aa, Green only)
tone     = b | j | v | s | g | m | d | nothing (mid tone)
```

- **No coda.** "Every Hmong syllable ends in a vowel, so tone letters at syllable end cause no ambiguity" (RPAW). The only letters that can follow the vowel are one tone letter, or the second vowel letter of a nasal vowel (`ee`, `oo`). So `kuv` is *ku* + tone `v`, not *k-u-v*.
- **At most one tone letter.** Two consonant letters after a vowel (`-bs`, `-ng`) are illegal in a Hmong syllable.
- **Four letters do two jobs in White Hmong.** v, s, m and d are onsets at the start of a syllable and tone letters at the end. (g is a tone letter, and only a marginal onset, §2.) The checker therefore parses from the left: onset, then vowel, then an optional final tone letter. `b` and `j` occur only as tone letters. `w` occurs only as a vowel.
- **The glottal stop is not written.** "The few truly vowel-initial words are marked with an apostrophe, which acts as a zero consonant" (RPAW). In practice the sources write vowel-initial words without one (`av`, `ev`, `os`, `as thiv` in W-KK and WV). Whitelock writes `'os` once (WHL). **Rule:** a leading apostrophe is legal but not required. The course writes no apostrophe. The checker strips one leading `'` before parsing.

Checker regex (lower-cased, one syllable; longest alternatives first):

```
^'?(nplh|ntxh|ntsh|ndlh|nph|npl|nth|nrh|nch|nkh|nqh|ntx|nts|plh|txh|tsh|hny|hml|dlh|ndl|hnl|ph|pl|np|th|tx|ts|nt|dh|rh|nr|ch|nc|kh|nk|qh|nq|hm|ml|hn|ny|xy|hl|dl|nl|p|t|d|r|c|k|q|m|n|f|v|x|s|z|y|h|l|g)?(ia|ua|ai|au|aw|ee|oo|aa|a|e|i|o|u|w)([bjvsgmd]?)$
```

After a match, classify the syllable (§2, §3). Then emit **GREEN** if the onset is `dl dlh ndl ndlh` or the vowel is `aa`, **MARGINAL** if the onset is `g nl hnl`, and **OK** otherwise. A reference implementation was used for this file (the author's scratch `rpa_check.py`, not committed. A separate `tools/hmong/rpa_check.js` with `ALLOW.txt`, `coverage.js` and `fixtures/` appeared in this folder during the work, from another agent, and was not written or reviewed by this author). Results are in §7.

## 2. Onsets (56 White + zero; 4 Green-only; 3 marginal)

The IPA follows RPAW, whose stop table the fetch tool reported as "not cleanly aligned". So treat the IPA as a guide and the **spellings** as the spec. RPAW marks `d dh hm hml hn hny` as **White only**.

| Group | Spellings (IPA) | Example from GLOSSARY.tsv |
|---|---|---|
| Plain stops / affricates | p /p/, t /t/, **d /d/ (White only)**, r /ʈ/, c /c/, k /k/, q /q/, tx /ts/, ts /ʈʂ/ | pom, tes, dej, riam, cuaj, kuv, qaib, txiv, tsev |
| Aspirated | ph /pʰ/, th /tʰ/, **dh /dʱ/ (White only)**, rh /ʈʰ/, ch /cʰ/, kh /kʰ/, qh /qʰ/, txh /tsʰ/, tsh /ʈʂʰ/ | phooj ywg, thov, dhia, rho, chaw, khau, qhov, txhua, tshiab |
| Lateral release | pl /pˡ/, plh /pˡʰ/, ml /mˡ/ | plaub, plhu, mloog |
| Pre-nasalised | np /ᵐb/, nt /ⁿd/, nr /ᶯɖ/, nc /ᶮɟ/, nk /ᵑɡ/, nq /ᶰɢ/, ntx /ⁿdz/, nts /ᶯɖʐ/, npl /ᵐbˡ/ | npua, ntawv, nram, nco, nkauj, nqaij, ntxuav, ntses, nplooj |
| Pre-nasalised aspirated | nph, nth, nrh, nch, nkh, **nqh**, ntxh, ntsh, nplh | nphau, nthuav, nrhiav, ncho, nkhaus, nqhuab "dry up" (the only nqh word found, BSQ), ntxhais, ntshai, nplhaib |
| Voiceless nasals (**White only**) | hm /m̥/, hn /n̥/, hny /ɲ̥/, hml /m̥ˡ/ | hmo, hnub, hnyav, hmlos |
| Voiced nasals | m, n, ny /ɲ/ | muaj, niam, nyob |
| Fricatives, approximants | f, v, x /s/, s /ʂ/, z /ʐ/, xy /ç/, y /ʝ/, h, hl /ɬ/, l | fawm, vaj, xav, siab, zoo, xyoo, yog, hais, hlub, lub |
| Zero onset | (nothing, or a leading apostrophe) | av, ev, os |
| **Green (Mong Leeg) only** | **dl, dlh, ndl, ndlh** (RPAW) | dlev "dog" = White dev (JXD); dlub = White dub (JXD, BRU). BRU says Mong Leng *ndlh* is "unattested" |
| **Marginal: flag, do not fail** | **nl**, **hnl**, **g** (all in the KNAB Pahawh–RPA table; none is in RPAW's table) | nl: Whitelock writes `nloog` where the others write `mloog` "listen" (WHL vs W-KK). No opened source has a White word with hnl or g |

**Count.** 18 plain and aspirated stops and affricates (p t d r c k q tx ts, ph th dh rh ch kh qh txh tsh). 3 lateral-release (pl plh ml). 9 pre-nasalised (np nt nr nc nk nq ntx nts npl) and 9 pre-nasalised aspirated (nph nth nrh nch nkh nqh ntxh ntsh nplh). 4 voiceless nasals (hm hn hny hml) and 3 voiced (m n ny). 9 fricatives and approximants (f v x s z xy y h hl), plus `l`. That makes **56 White onsets + zero = 57**, the "57-ish" of the brief.

**Disagreement to show a native reader.** RPAW lists hn, hny and hml as White only, so absent in Green. BRU (one Mong Leng consultant) mentions only `hm` → `m` (hmuv → muv, Hmoob → Moob). JXD gives `hm → m` and `hn → n` (hnub → nub). A White course does not depend on this; the checker treats all four as legal White.

## 3. Vowels (13 White + 1 Green-only)

| Spelling | IPA (RPAW) | Kind | Example |
|---|---|---|---|
| i, e, a, o, u | /i e a ɔ u/ | simple | dib, dej, dab, dos, dub |
| w | /ɨ/ (a vowel, never a consonant) | simple | tw "tail", pw "lie down" |
| ai, au, aw | /ai au aɨ/ | diphthong | hais, hau, sawv |
| ia | /iə/ | diphthong. RPAW: **White only**. JXD and BRU: Green has `a` where White has `ia` (niam → nam, tiab → tab, iav → av) | niam, tiab |
| ua | /uə/ | diphthong | ua, kua |
| ee | /ẽ/ ([eŋ]) | nasal (doubled letter) | neeg, ceev |
| oo | /ɔ̃/ ([ɔŋ]) | nasal | zoo, Hmoob |
| **aa** | /ã/ | **nasal, Green only**. White `a` = Green `aa` (dab → dlaab, av → aav, txav → txaav; JXD) | flag GREEN |

`o` is IPA /ɔ/ in White (RPAW). BRU describes Mong Leng `o` as unrounded [ʌ] and Mong Leng `e` as closer to [ɛ]. The spelling is the same, so this does not concern the checker.

## 4. Tone letters (7 tones + the -d variant)

| Letter | RPAW (White) | Jay Xiong's description (JXT) | BRU, Mong Leng (Chao numbers) | Minimal set (RPAW) |
|---|---|---|---|---|
| **-b** | high | "Cim Siab", the highest pitch | high rising 45 | pob "ball" |
| **-j** | high falling | the "hey!" tone (hej, dej) | high falling, tense 52 | poj "female" |
| **-v** | mid rising | "Cim Kuv", rising | low rising 24 | pov "throw" |
| **(none)** | mid | the "blank" tone, the note *Re* | mid 44 | po "spleen" |
| **-s** | low | the "Doe" pitch, called **middle** by JXT | low 33 | pos "thorn" |
| **-g** | low falling, breathy | "Cim Neeg", falling | low falling, breathy 33 | pog "(paternal) grandmother" |
| **-m** | creaky (low) | "Cim Niam", the lowest | low falling, creaky 31 | pom "see" |
| **-d** | "phrase-final, low-rising variant of the creaky tone" | starts at the M pitch, rises to V (tod "there") | 213, "matches -v" per the consultant | ntawd, nkawd, tod |

- **The sources do not agree on labels.** JXT calls -s the middle tone; RPAW calls it low. Keep each label with its source. The course text should describe contours in plain words (en-hmn §2).
- **Where -d occurs.** In the opened sources, -d occurs only in phrase-final short forms of locatives and demonstratives. BSL pairs them: nram / nrad, nraum / nraud, pem / ped, saum / saud, tim / tid, tom / tod, thaum / thaud. Others are ntawd and nkawd. **Rule:** -d is legal; a writer who uses -d outside this set must list the word in NEW-WORDS.
- **-g is not a dialect flag.** The classifier `tus` is written `tug` after some tones (WHL: "classifier variant after high tone"). BRU reports that some White `-s` words are `-g` in Mong Leng (nws → nwg, ris → rig, tus → tug). A `-g` spelling therefore proves nothing about dialect, and the checker must not flag it.
- **Tone change in writing.** The spelling records a tone change in at least two common words. One is tus / tug. The other is puas / pua "hundred": BSL has `ib/ob/peb/plaub/tsib/cuaj puas` but `rau/xya/yim pua`. **Rule:** writers copy these forms from GLOSSARY.tsv and never "regularise" them.

## 5. What the checker must refuse, and what it must only warn about

**Hard fail (block the item):**
1. A token in Hmong text that does not parse as one syllable or as a sequence of syllables (§1 regex). The exceptions are an allowed English loan or proper noun (§6), digits and punctuation.
2. Any of the letters **b, j** at the start of a syllable. (`g` as an onset is marginal, rule 7. `w` misused as a consonant cannot be caught by parsing alone; see §7.)
3. Two tone letters, or a consonant other than a tone letter after the vowel (`-ng`, `-k`, `-t`).
4. A diacritic or any non-ASCII letter inside Hmong text (RPA uses none). This also catches `ñ` and Vietnamese-style tone marks.
5. A Green-only onset (dl, dlh, ndl, ndlh) or the vowel aa in a **White** card target, unless the card is explicitly a dialect-comparison card with "Green Hmong" in its note.
6. Digits used as a reduplication sign (`7`, `2`) or the Thai sign ๆ. LY reports all three in community writing; the course writes the word twice (`kheej kheej`, W-SW).

**Warn only (report, do not block):**
7. A marginal onset (nl, hnl, g).
8. A syllable or word that is legal RPA but not in GLOSSARY.tsv (compute against the glossary). No opened source lists impossible onset + vowel or vowel + tone combinations, so the checker must not hard-fail a rare but legal combination.
9. A joined spelling of a word the glossary writes spaced, or the reverse (§6).
10. A sentence that mixes the two spellings of the same word.

## 6. Capitalisation, word spacing, loans

- **Syllable spacing is the norm, and joined spellings are real variants.** VW (2016) compared word-spaced and syllable-spaced Hmong Daw text in three reading experiments. Reading connected stories was no slower either way. Syllable spacing helped with isolated words and with unfamiliar polysyllables. The opened sources mix both styles for the same word:
  - menyuam / me nyuam (W-KK, MDH)
  - pojniam / poj niam (W-KK)
  - dabtsi / dab tsi (WHL, W-KK)
  - tagkis / tag kis / taskis (WHL, WV, W-KK)
  - haujlwm / hauj lwm (PGE, MDH)
  - sijhawm / sij hawm (WHL, W-KK)
  - totaub / to taub (OMN, BSL)

  **Course rule:**
  - Card targets and examples use the **spaced** form, one syllable per space, as GLOSSARY.tsv column 1 does.
  - The typed-answer matcher folds spaces (and hyphens: the Swadesh appendix writes `pob-zeb`, `qhov-muag`), so `menyuam` = `me nyuam`.
  - The only exceptions are loans of two or more syllables that have no separate Hmong syllables (`Amelika`, `nalika`, `xalas`). These stay joined as the sources write them.
- **Capitals.** Sentence-initial capital, as in English (all opened sentence sources do this). Capitalise names of peoples, languages and places: Hmoob, Hmoob Dawb, Askiv, Amelika, Nplog teb, Thaib teb (W-KK, OMN, BSX). Capitalise personal and clan names. **Hmong vs HMoob:** HMB (2019) documents a community movement at UW–Madison to write **HMoob**, whose capital H and M stand for the White and Green dialects. **Course rule:** write `Hmoob` (the White RPA spelling in every other source) and mention HMoob once in a lesson note. Never write HMoob in a card target.
- **English words in Hmong text.** US agency texts keep English words where no Hmong term is set:
  - `hnub Monday txog hnub Friday` (PGE, MNC);
  - `mob cancer`, `mob AIDS`, `kas cees syphilis` (MDH).

  The checker accepts such a token in Hmong text only if it is on an **allow-list** of loans kept in English (start: Monday … Sunday, cancer, AIDS, HIV, TB, asthma, Medical Assistance, cheese, pizza, hamburger, sandwich, orange, OK). It reports every other unparseable token.
- **Punctuation.** Western punctuation (. , ? !). All opened sentence sources use it.

## 7. Cross-check against the glossary (run 2026-11-23)

The reference checker was run over the 1,274 headwords of `GLOSSARY.tsv`:
- **1,230** rows parse syllable by syllable as White RPA (OK).
- **34** rows parse only as **joined** spellings, which are legal variants (§6). Among them: Amelika, Melika, Askiv, daulas, dauslas, haujlwm, huablab, huabxeeb, hwvtaus, kovyeej, meejpem, mentsis, menyuam, nalika, pojniam, sawvdaws, sijhawm, taskis, tagkis, taubhau, totaub, twjywm, avpaum, xalas, yoojyim. The English loan `cheese` also lands here (chee + se), which shows again why English must come in through the allow-list.
- **8** rows contain English kept on purpose: Monday / Friday, AIDS, cancer, asthma, orange, pizza, hamburger, sandwich (allow-list, §6).
- **1** row is a Green spelling, kept for contrast: dlev.
- **1** row has a marginal onset: nloog (nl), Whitelock's spelling of mloog.

**Coverage.** Every White onset in §2 occurs in at least one glossary headword. **nqh** occurs in only one (nqhuab "to dry up", from a flashcard deck, BSQ), so a native reader should confirm it and give a commoner example. **l** is missing from RPAW's table as the fetch tool returned it (the tool warned the table was misaligned). It is row 7 of the KNAB Pahawh–RPA table and occurs in many glossary words (lub, lus, lawv, los), so it is certainly a White onset.

**Known blind spot.** Segmentation can legalise a typo. `wa` (w misused as a consonant) parses as the two legal syllables `w` + `a`, so it shows up only as a JOINED warning, not a failure. A JOINED token whose parts are not glossary syllables should be read by a person.

## 8. Self-test: 40 real words (every White onset, every tone, every White vowel)

Every item is a headword in GLOSSARY.tsv. Together they contain all 56 White onsets in §2, the zero onset, all 8 tone spellings (b j v (none) s g m d) and all 13 White vowels. This was verified by script. A checker must return OK for each.

| # | Hmong | English | # | Hmong | English |
|---|---|---|---|---|---|
| 1 | ib tag hmo | midnight | 21 | nplooj ntsws | lungs |
| 2 | nees nkaum cuaj | twenty-nine | 22 | fab | division, section |
| 3 | mus kav khw | go shopping | 23 | rho | pull out |
| 4 | tsev hais plaub | courthouse | 24 | ncho | smoke |
| 5 | siab zoo | kind, good-hearted | 25 | nrho | completely |
| 6 | ntawd | that, there | 26 | plhu | cheek |
| 7 | qaug dab peg | seizure | 27 | txha | bone |
| 8 | hnub dhau los | days ago | 28 | hmlos | dented |
| 9 | hli nra | full moon | 29 | hnyav | heavy |
| 10 | raug nqi | cost, price | 30 | mloog | listen |
| 11 | xas npus | soap | 31 | nphau | tip over |
| 12 | chaw nyob | place to live | 32 | ntxhw | elephant |
| 13 | pheej yig | cheap | 33 | nkhaus | crooked |
| 14 | qhov ntxa | grave | 34 | nplhos | stab |
| 15 | thov txim | sorry | 35 | nthuav | open, unfold |
| 16 | viv ncaus | sisters (female speaker) | 36 | ntshai | afraid |
| 17 | xyoo tshiab | New Year | 37 | nqhuab | dry up |
| 18 | nyob zoo | hello | 38 | pog | grandmother |
| 19 | dej | water | 39 | pov | throw |
| 20 | niam txiv | parents | 40 | kuv nco koj | I miss you |

**Negative tests** (each must fail or be flagged): `dlev` (GREEN), `plaab` (GREEN, aa), `nloog` (MARGINAL), `kuvb` (two tone letters), `bus` (b is not an onset → ILLEGAL), `phô` (diacritic → ILLEGAL), `kheej7` (digit reduplication), `Monday` outside the allow-list.

Note on `bus`: an English word can look like legal RPA. `mus`, `kas` and `pes` are real Hmong syllables. This is why the allow-list in §6 is the only way English gets into Hmong text, and why the pronunciation aid for English must not be written in RPA (hmn §6).

## Sources used here

RPAW (Wikipedia, *Romanized Popular Alphabet*), JXD and JXT (Jay Xiong, hmongdictionary.com), BRU (Bruhn 2006, Mong Leng inventory), KNAB (EKI 2012 Pahawh–RPA table), LY (Chô Ly, HSJ 21, 2020), VW (Vitrano-Wilson 2016, abstract), HMB (Thao 2019), WHL (Whitelock 1982), BSL (Brainscape course decks), W-SW and W-KK (Wiktionary), MDH, PGE, MNC, OMN, WV. Full entries in `SOURCES.md`.
