# es-en: settled respelling (`pron`) rules

Authority: docs/profiles/es.md §6. This file settles what §6 leaves open. It applies to every card `pron`, every `{{ex:English|pron|meaning}}` row and every idiom respelling, and to respellings quoted in notes and lesson prose («…»). The target is the American audio (en-US), written so that a Spanish reader can say it. The scratch script that checks it is described at the end.

## 1. Shape
- Lowercase Spanish letters. Words are separated by spaces, syllables by hyphens (only inside words of 2+ syllables). Keep `?`, `!`, `,`, `.` and ` / ` from the English.
- **Every word of 2+ syllables shows its stressed syllable in CAPITALS**, function words and contractions included: `E-ni` (any), `e-BAUT`, `I-rel` (it'll), `DA-sent` (doesn't).
- **One-syllable content words are always in CAPITALS** (nouns, main verbs, adjectives, adverbs, numbers, negatives `NAAT NOU DOUNT KANT`, particles of phrasal verbs `AP AUT OF DAUN BAK`, wh-words at the start of a question): `GUD MOR-ning`, `PIK AP`, `WAT du iu DUU?`, `JAU MACH is DHIS?`.
- **One-syllable function words are lowercase in their weak form** and switch to a CAPITALISED strong form only when stressed (end of the sentence, short answer, contrast, main-verb *do*). Table in §3.

## 2. Sounds (profile §6 key, plus the settled cases)
| Case | Rule | Examples |
|---|---|---|
| /iː/ /ɪ/ /uː/ /ʊ/ | ii / i / uu / u | SHIIP, SHIP, FUUD, BUK |
| /æ/ and /ʌ/ | a | KAT, KAP |
| LOT /ɑ/ | aa | JAAT, DYAAB, WAANT, SAA-ri, te-MAA-rou |
| THOUGHT /ɔ/ (cot–caught NOT merged in the key) | o | TOK, WOK, KOL, SMOL, DOG, DOGS, KO-fi, LONG, OF, WO-rer |
| schwa | e, unstressed only | e-BAUT, PII-pel |
| /ɜr/, /ɛr/ | er (both) | BERD, WERK, CHER, WER (where / were) |
| other vowel + r | vowel letter + r | KAAR, JIR, FOR, IIRS (years = i + IRS; ears = IRS) |
| /eɪ aɪ oʊ aʊ ɔɪ/ | ei ai ou au oi | |
| /h/ | j | JAUS, je-LOU |
| /dʒ/ /j/ | dy / i before a vowel | DYAAB, IES, iu |
| /ð/ /θ/ | dh / th | DHIS, THINK |
| /z/ | s | is, SHUUS |
| /ɡ/ | g; gu before e, i | GUET, GUIV |
| **/ŋ/** | ng; **but n before a /k/ sound** (Spanish already says *banco* with that n) | SING, GOU-ing, ING-glish, JANG-gri, IANG-guer, FING-guers; **THANK, BANK, DRINK** (never THANGK) |
| **American flap t** | **single r when t/tt sits between two vowel sounds and the next vowel is unstressed** (also before -le) | WO-rer, LEI-rer, MII-ring, PRI-ri, SI-ri, I-re-li, LI-rel, BE-rer, RAI-ring, I-rel (it'll), iu-NAI-rid, VI-si-rid |
| …but keep t | after r (a Spanish reader would trill `r-r`), after n, before a stressed vowel, before syllabic n, at the end of a word | THER-ti, KWOR-ter, PAAR-ti, STAAR-tid, TWEN-ti, WAAN-tid, jou-TEL, II-ten, RI-ten |
| s-clusters | never an *e* before them | SKUUL, STRIIT, SPEIN |
| -ed | t / d / id | WERKT, PLEID, WAAN-tid |
| letters as names | as spoken, stressed on the last letter | ei-tii-EM, el-ou-EL |
| names | as the en-US voice says them, not as in Spanish | AA-ne (Ana), LII-me (Lima), KAAR-lous, MEK-si-kou, gaar-SII-e |

Cross-word linking is not written in the `pron` field (only in prose notes: «JIIT dhi-SAP», «WAA-ne»).

## 3. Function words: weak form (default) → strong form (stressed)
| Word | weak | strong | Word | weak | strong |
|---|---|---|---|---|---|
| a / an | e / en | EI / AN | the | dhe; **dhi before a vowel sound** | DHII |
| and / but / or | en / bet / or | | to / for / from / of | te / fer / frem / ev | TUU / FOR / FRAM / AV |
| at / in / on / with / by | et / in / aan / widh / bai | AT / IN / AAN / … | as / than / if | es / dhen / if | |
| you / your / you're | iu / iur / iur | IUU / IUR | me / he / she / we | mi / ji / shi / wi | MII / JII / SHII / WII |
| him / her / us / them | jim / jer / as / dhem | | it / its | it / its | IT |
| are / was / were | **er** (also at the start: `er iu RE-di?`) / wes / wer | AAR / WAS / WER | is / am / be / been | is / em / bi / bin | BIN (*been to* = visited) |
| do / does / did (auxiliary) | du / das / did | DUU / DAS / DID (main verb, end) | have / has / had | **jav / jas / jad**, also as a main verb (`DYAK jas e DYAAB`); **ev** after a modal (`wud ev`) | JAV / JAS (only *have to*: `JAV te`, `JAS te`, and at the end) |
| can / could / will / would / should | ken / kud / wil / wud / shud | KAN … | that | **dhat** (this-that word) / **dhet** (conjunction, relative) | DHAT |
| this / these / those / there | dhis / dhiis / dhous / dher | DHIS … / DHER | some / one / so | **sem** (some water) / wan (a good one) / sou (conjunction) | SAM / WAN (number) / SOU (*so tired*) |
| who / what / where / how … | ju / wat / wer / jau (relative, conjunction) | JUU / WAT / WER / JAU (start of a question) | contractions | aim, ail, aid, aiv, its, dhats, dhers, jis, shis, wir, iul, lets | |

## 4. Fixed decisions
- **Same English word = same letters everywhere.** Only the capitalisation of a one-syllable function word may change (weak vs strong), plus the listed pairs dhe/dhi, dhat/dhet, jav/ev, sem/SAM.
- **Same English phrase = same `pron` everywhere.**
- The validator requires `pron` ≠ the English word (case-insensitive). Four cards whose correct respelling is spelled like the word keep a short Spanish tag: `SHIP (i corta)`, `THINK (th, no s)`, `SINK (s, no th)`, `MILK (sin vocal final)`. Nothing else carries a tag.
- Practice items never carry respellings (PRACTICE-SPEC).

## 5. Check
`node <scratch>/rev/pairs.js words` lists every English word whose respellings differ in letters (expected output: only the function words in §3). The second check lists English phrases with more than one `pron` (expected: none). Both scripts live in the reviewer's scratchpad. They are not part of the pipeline.
