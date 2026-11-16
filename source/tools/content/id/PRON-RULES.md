# id-en respelling ("cara baca") rules (settled)

These rules apply to every `pron` field: card `pron` in decks.js, IDIOMS in extra.js (third field), and `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js. They also apply to respellings quoted in card notes and lesson prose. The base is docs/profiles/id.md §6: Indonesian letters, CAPITALS for the stressed syllable, ii/uu/aa/oo, é = /ɛ/, è = /æ/, plain e = schwa, sy/c/j/ng/ngk/ngg, th/dh/v/z kept distinct, flap t = d, voiced finals written, and the profile.json `pronPattern`. This file settles what §6 left open.

**Checker:** `node tools/content/id/pron_check.js [summary|phrases|words|func|rules|all]`. It reads the three `pron` sources, aligns English words with respelled words, and reports phrase conflicts, word conflicts and rule hits (pattern, a 2+ syllable word with no capital syllable, a capital on a 1-syllable word, dhe before a vowel, dhi before a consonant).
- Current result: 741 pairs, 0 phrase conflicts, 0 word conflicts. The 16 rule hits are all `align` notes on spelled abbreviations (LOL, ATM, ASAP…) and on numbers written as digits (911, 1998, 2020, 100), which are expected.
- The writers' files were already consistent word by word. This review changed 8 rows; see B and C.
- **Limit:** respellings quoted in notes and prose («LI-del», «GÉ-de», «GA-ne», «ei sii») are not scanned. They were checked by eye.

## A. Shape
- Syllables of a 2+ syllable word are joined by hyphens, and exactly one syllable is in CAPITALS. One-syllable words are always lower-case, including stressed ones (*mii*, *yuu*, *duu*).
- Keep `?`, `!`, `,`, a `.` between sentences, and ` / ` between pair members. Drop the final period.
- Numbers and letter names are written as heard: *911* nain wan wan, *ATM* ei tii ém, *TV* tii-VII, *LOL* él ou él, *ASAP* ei és ei pii / EI-sèp.
- One-word collisions use the closed tag set only: *milk* `milk (i pendek)`, *sip* `sip (i pendek)`.

## B. Function words: weak by default, strong when stressed

| Word | Weak (default) | Strong | Where the strong form is used |
|---|---|---|---|
| a / an | e / en | — | |
| the | dhe; **dhi before a vowel sound** | — | *dhi ÉR-poort*, *dhi IN-ter-nét*; *dhe yu-NAI-did* (y is a consonant) |
| to | te | tuu | stranded or cited: *look forward to* |
| for | fer | foor | cited: *look for* |
| from | frem | fram | stranded: *Where are you from?* |
| of | ev | av | cited: *run out of* |
| at | et | èt | stranded: *get off at* |
| and / but | en / bet | — | also at the start of a fragment: *And you?* = en yuu |
| **or** | **er** | — | **settled: weak everywhere**, also in choice questions (*Cash or card?* kèsy er kaard). Changed in 5 cards from oor |
| can | ken | kèn / kènt | *can't* = kènt |
| do / does (auxiliary) | de / dez | duu (main verb) | *What do you do?* wat de yu duu |
| have / has / had (auxiliary) | hev / hez / hed; **ev after a modal** | — | *Have you been…* hev; *would have* wud ev |
| have / has / had (main verb) | — | hèv / hèz / hèd | always strong: *I have a car* hèv, *If I had time* hèd |
| **have to / has to** (= harus) | — | **hèf te / hès te** | **settled: as heard** (/hæf tə/, /hæs tə/). Changed in 2 rows from hèv te / hèz te. Only in this set phrase; *have* alone stays hèv |
| are / was / were | er / wez / wer | — | |
| you / your / you're | yu / yer / yer | yuu | stressed only: *And you?*, *After you* |
| **me** | **mi**, also at the end of a sentence | mii | **only under contrast or emphasis**: *It's on me*, *Me neither*. *You mean a lot to me* changed from mii to mi |
| he / she / we | hi / syi / wi | — | |
| that | dhet (relative: *the book that I bought*) | dhèt (pointing word, pronoun) | |
| some / than | sem / dhen | — | |

**Full forms kept, not weakened:** *be* bi, *been* bin, *her* her (also as object: *I work with her*), *just* jast, *him* him, *them* dhem, *us* as, *it* it. Each was already uniform. §6 rule 9 does not list them, and the full form keeps the word recognisable.

**Contractions:** aim, ail, aiv, aid, its, dhèts, dhérz, wats, léts, wir, yer (*you're*), yul (*you'll*), dount, kènt, wount, DA-zent, DI-dent, I-zent, HÈ-vent, SYU-dent. *It'll* is I-del (flap, see C).

## C. Consonants and vowels that were open
- **Flap t/tt → d** between vowels before an unstressed vowel, also across a contraction: *water* WAA-der, *better* BÉ-der, *pretty* PRI-di, *meeting* MII-ding, *writing* RAI-ding, *latte* LAA-dei, *eating* II-ding, *it'll* I-del.
- **Keep t** after n or r, before a stressed vowel, before syllabic n and at the end of a word, as §6 rule 5 says: *thirty* **THER-ti** (not THER-di), *twenty* TWÉN-ti, *started* STAAR-tid, *eaten* II-ten, *written* RI-ten, *hotel* hou-TÉL. American speech often flaps *thirty* too; the respelling keeps the t so that the contrast with *thirteen* (ther-TIIN) is written on the stress, not on the consonant.
- **-ed and -s endings** as heard (§6 rule 7): waact, koold, WAAN-tid; kèts, doogz, BA-siz. *iced* = aist.
- **r-coloured vowels:** er (werk, THER-ti), ir (hir), ér (dhér), aar (kaar), oor (foor), ur (syur).

## D. Names (§6 rule 11, as the en-US voice says them)

| English | pron |
|---|---|
| Indonesia | in-de-NII-zye |
| Indonesian | in-de-NII-zyen |
| Jakarta | je-KAAR-te |
| Bandung | BAAN-dung |
| Surabaya | suu-re-BAI-e |
| Bali | BAA-li |
| Budi | BUU-di |
| Wijaya | wi-JAA-ye |
| Andrea Hirata | ÈN-dri-e hi-RAA-te |
| Japan | je-PÈN |
| McDonald's | mek-DAA-nelz |
| Boston | BOO-sten |

## E. Format notes
- Same English word = same letters everywhere, except the weak/strong pairs in B. Same English phrase = same `pron` everywhere.
- Practice items never carry respellings (PRACTICE-SPEC).
