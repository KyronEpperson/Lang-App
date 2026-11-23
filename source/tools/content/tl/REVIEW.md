# tl-en cold review (2026-11-23)

Reviewer: TL-REVIEWER, who wrote none of the course. The reviewer is not a native speaker of Filipino, so section 4 matters more than the edit counts. All validators pass after the edits (last lines at the end).

Overall: the five writers produced a consistent course. No Korean-course notes, no Konglish or politeness-level leftovers, no untranslated English `why` line and no `<em>` were found. The faults were between files: three words for "meeting", two spellings of several loans, one transcription, and he / she prompts that showed gender with a bracket instead of a name.

## 1. What changed

**A. Wrong or misleading (25 edits)**
- *by* + day was glossed with *hanggang*, the word for *until*, in five places, one of them a gap-fill whose wrong options include `until`. «…ang file hanggang Biyernes?» → «…ang file nang hindi lalampas sa Biyernes?» (decks, extra, lessons, practice).
- He / she prompts in `reported` showed gender with a bracket or not at all. «Sabi niya (lalaki), abala raw siya» → «Tungkol kay Paolo: Sabi niya, abala raw siya» (12 practice prompts and 1 check question). Three gap-fills in `perfect`, `modals` and `to-ing` with a bare *siya* / *niya* got «Tungkol kay Ana: ».
- `continuous` typed item: the prompt «Nanonood ako ng pelikula ngayon» invites *…now*, which the shared accepted list does not hold. → «(sa sandaling ito) Nanonood ako ng pelikula».
- Deck note on *subway*: «parang MRT o LRT natin» (those lines run above ground) → «ang pinakamalapit dito sa atin ay ang MRT at LRT».
- Deck note on *to go*: said Americans do not say "take out" at all → limited to what is said at the counter.
- *work out*: «maayos» reads as the adjective → «maging maayos (ang kinalabasan)».
- `idioms` table headed «Tagalog» held two explanations, not equivalents → «Katumbas o paliwanag sa Tagalog».

**B. Unnatural wording and terminology across files (86 edits)**
- **meeting:** *miting* (decks, extra, meta), *meeting* (lessons, practice) and *pulong* (b1) → *miting* everywhere in Filipino text (16).
- **Sound of the first letter:** *tunog-vowel* (decks, extra, a1) and «Patinig ang unang tunog» (a2, b1) → *tunog na vowel*, as lessons and practice write it (13).
- **Tip label:** «Madalas na mali:» (a2, b1) → «Madalas makalusot:», as a1 and the profile's frame (8).
- **Formula-only `why` lines** that were English but for one word, e.g. «"Have to" + base form.» → «Base form ang kasunod ng "have to".»; «see – saw – seen.» → «Ganito ang tatlong anyo: see, saw, seen. "Seen" ang past participle.» (18, a2 and b1).
- **Loans in Filipino spelling, one form each:** *schedule* → *iskedyul* (3), *taxi* → *taksi* (4), *telepono* → *cellphone* where the English says *phone* for a mobile (3), *desisyon* → *pasya* (3).
- **Deck card and lesson row now agree** where one gloss was better: *rice* «kanin / bigas», *lice* «mga kuto» (plural), *very* «talaga / napaka-», *berry*, «Dito na lang ako bababa», «Matindi ang traffic», «Mananghalian tayo», «ngayong araw» for *today* in two cards, «kung saan kami nagkita».
- «ang nag-type nito» → «ang sumulat nito» (an English verb with a Filipino affix inside an explanation).
- «Nawala ni Ana ang cellphone niya» → «Naiwala ni Ana ang cellphone niya» (the transitive form; see 4.6).
- Roadmap: *simple present* → *present tense* in two titles, the term the lessons use.

**C. Pron (1 edit, 2 new files)**
- McDonald's was /məkˈdɑːnəldz/ in the pron lesson table and /məkˈdɑːnldz/ on the card → /məkˈdɑːnldz/ in both.
- New `PRON-RULES.md` (names, new words, five decisions) and `pron_check.js` (the zh checker pointed at this folder): 845 pairs, 0 conflicts. All pairs shared with zh-en and th-en are identical to them. Santos is /ˈsæntoʊs/ on both cards.

## 2. Edit counts

| file | wrong / misleading | unnatural wording | pron | formatting |
|---|---|---|---|---|
| decks.js | 4 | 16 | 0 | 0 |
| extra.js | 1 | 2 | 0 | 0 |
| lessons.js | 2 | 10 | 1 | 0 |
| practice.js | 1 | 5 | 0 | 0 |
| more/a1.js | 1 | 7 | 0 | 0 |
| more/a2.js | 3 | 17 | 0 | 0 |
| more/b1.js | 13 | 25 | 0 | 0 |
| meta.js | 0 | 2 | 0 | 0 |
| tools/i18n/tl/roadmap.json | 0 | 2 | 0 | 0 |
| **total (112)** | **25** | **86** | **1** | **0** |

A replacement made in several places counts once per place. No English side was changed, and no practice set changed size (40 sets of 14, two of 16).

## 3. What was read

- **Read in full:** decks.js (every card and note), extra.js, lessons.js with CHECKS, practice.js, more/a1.js, more/a2.js, more/b1.js, meta.js, the 39 English-roadmap titles, profile.json, deviations.json.
- **Checked by script:** every `pron` against zh and th; every practice answer with he / she against its prompt; every `why` for missing Filipino; the same English with two Filipino glosses; English verbs with Filipino affixes.
- **Only scanned:** `tools/i18n/tl/ui.json` (tab labels, level titles, weekday headers, the count patterns, feedback words). It was not edited, because it serves the live Tagalog → Korean course. `tools/i18n/tl/NOTES.md` §6 only. DECKNAMES.md not opened.
- **Not run:** `link_roadmap.py --check`, `road.py`, the i18n generator and validator, the app itself. Nothing was seen on screen or heard.

## 4. For a native speaker (most important first)

1. **«nang hindi lalampas sa Biyernes» for *by Friday*.** It replaced «hanggang Biyernes», which is what people say but is also the word for *until*, the wrong option in that item. Is there a shorter natural wording that is not *hanggang*?
2. **«Tungkol kay Ana: Sabi niya, pagod daw siya»** as the frame for he / she prompts (35 lines in a1, a2 and b1). Does it read naturally, and does it clearly ask for *she* and not *Ana said*?
3. **«Madalas makalusot»** as the label for common slips (17 tips), and the opening frame «Mahusay ka nang mag-Ingles; … detalyeng madalas makalusot».
4. **«hulmahan»** for a sentence pattern (5 times in a1; the other files say *anyo* or *ayos*). Left unchanged. Is it understood, or should it be *anyo* / *padron* / *pattern*?
5. **Loan spellings chosen:** *miting* (not *meeting* or *pulong*), *iskedyul*, *taksi*, *tiket*, but *cellphone*, *traffic*, *weekend*, *report*, *file* and *deadline* stay English. Is that the mix a Manila reader expects?
6. **«Naiwala ni Ana ang cellphone niya»** against the colloquial «Nawala ni Ana…».
7. **Polite translations with *po* and *ninyo*** («Excuse me po, puwede po ba ninyo akong tulungan?», «Sino po sila?», «Isang latte nga po»): right amount of *po*, and is «Excuse me po» acceptable in writing?
8. **«tunog na vowel»** («Tunog na vowel ang simula ng "hour"») and the other half-English grammar phrases: *anyong -ing*, *article na "a"*, *plural na -s*, *noun na nabibilang*, *salitang pampanahon*, *pinaikling anyo*, *pang-ugnay*.
9. **Idiom equivalents:** *piece of cake* «Sisiw lang iyan», *hit the books* «magsunog ng kilay», *when pigs fly* «Kapag pumuti na ang uwak», *no pain, no gain* «Kapag may tiyaga, may nilaga», *the early bird* «Daig ng maagap ang masipag», *hang in there* «Kapit lang», *spill the tea* «Ikuwento mo na ang tsismis» (note: parang «Ano ang chika?»), *You're a lifesaver* «Hulog ka ng langit», *split the bill* «KKB».
10. **Claims about Philippine usage** in the Ingles-Pinoy deck and lesson: that *for a while*, *I'll go ahead*, *open the light*, *It's traffic*, *viand*, *batchmate*, *advanced* (clock), *double-deck* are current; that 911 is the emergency number; that dates are written month first; and the slang comparison «parang *charot* o *lodi*» (is *lodi* dated?).

Smaller doubts: «polo» for *shirt*; «Ako rin, hindi» for *Me neither*; «Biglang baligtad ang kuwento!» for *Plot twist!*; «Madaldal» as a level title; «Usapang Ingles sa loob ng 90 araw».

## 5. Found but not fixed

**Interface (`ui.json`, not editable here)**
- Three tab labels are over 8 characters: *Pagsasanay* (10), *Pag-unlad* (9), *Mga drill* (9). The profile proposes *Praktis*, *Progreso*, *Drill*.
- *sentence* in «Pagbuo ng sentence» and the drills blurb, against *pangungusap* in all tl-en prose; the same blurb leaves «polite ↔ casual» in English.
- 24 exact keys are worded for Korean (*Koreano*, *Hangul*, *romanization*). Any that an English course shows need a per-course override.
- Count patterns read correctly at 0, 1, 2, 5 and 21 (bare slot, no linker, no *mga*). Level titles and feedback words match meta.js and the course.

**Roadmap**
- «CEFR A1-B1 order, adjusted for Korean speakers» is translated literally, so tl-en learners read «…para sa mga nagsasalita ng Koreano». It needs a per-course string.

**Shared English that could not be touched**
- ~~Checks and about 15 practice items keep Seoul, Busan, Jeju, Daegu, kimchi, K-pop, won and Han Kang…~~ Localised in the pre-merge review (see below).
- Alphabet card G gives the example word *go*, whose first sound is not the letter's name.

**Tooling**
- `parity.js` prints «WARN unused deviations (stale?): lessons:pinoy-english, lessons:aspect-tense» above its PASS line. deviations.json was not edited.
- `lint.js` still lists 10 meaning variants (info only): rows where the lesson adds a bracketed literal reading, such as «(puro tainga ako)».

## Check output (last lines)

```
node tools/content/gen.js tl <scratch>            wrote …/tl-r.js 378677 bytes
node tools/content/validate.js tl <scratch>       PASS: all checks OK
node tools/content/parity.js tl <scratch>         PASS: shared English side matches ko-en
node tools/content/lint.js tl <scratch>           lint tl: 0 blocking · 10 meaning variants (info) · 0 K-pop leftovers (info)
node tools/content/alphabet_check.js tl <scratch> PASS alphabet tl: lesson 1, deck 21 «Alpabeto» with 26 cards, English side matches the spec
node tools/content/tl/pron_check.js               pairs 845 · words 814 · phrase conflicts 0 · word conflicts 0 · rule hits 0
```
`node --check` passes on all eight edited JS files. No Korean characters under `tools/content/tl`.

## Pre-merge review, 2026-11-23

Second reviewer (not a native speaker of Filipino). Findings applied after merge; all checks pass (validate, parity, alphabet, lint 0 blocking, pron_check 0 conflicts, i18n validate).

**Changed**
- Practice prompts whose subject did not match the answers: modals ty → «Kailangang bumili ng tiket…» (subjectless), phrasal#13 → «Naubusan na ng gatas»; first-conditional ty «Maiiwan ka ng bus» keeps only You'll (deviation).
- Wrong meaning: «dating kaibigan» (= former friend) for *old friend* → «isang matagal ko nang kaibigan» (narrative ex, order, type).
- Typed-answer pass over all 128 type items (script; full forms all present in the pack): 8 prompts cued (ugali, plano na ×2, tungkol sa plano mo, sa sandaling ito, gamitin ang there / any, ngayong araw), 19 items got equally correct answers (I saw a movie, love for mahilig ×4, lots of friends, love to cook, Let's meet next weekend, go home now, we watched, I've waited, then / at that time for «noon» ×6, earlier for «kanina», already for «na»), 1 wrong-person set removed. Shared-side changes are item deviations: 28 localisation + 19 typed-answer.
- Decks: Hello «Kumusta (pagbati)», Hi «Uy! (magaang bati)», Hey «Hoy! (sa kaibigan)», Just a second «Teka lang / Saglit lang», Me neither «Hindi rin ako» (also extra.js and practice), heading out note (go ahead also means leave first), Korean-course notes removed from *hang out* (play) and *hard work* (수고하셨습니다), Best regards «Gumagalang,», quarter to five «Menos kinse para alas-singko», fitting room, full «puno (sa laman)», two talking-down sentences (My name is, Do you speak Tagalog).
- New card in Ingles-Pinoy: *That went over my head.* for Pinoy «Nosebleed!» (tl-only deck, 35 cards).
- Lessons: «hulmahan» → «pattern» (5); shirt «polo» → «damit»; pinoy-english "commit a mistake" class now «hindi ang karaniwang anyo», not «mali».
- Localisation (reverses profile §9 keep-Korean rule): Seoul / Busan / Daegu / Jeju / Korea / kimchi / won / K-pop / Han Kang / Jenny Park / "Who's your bias?" → Manila, Cebu, Baguio, Boracay, Palawan, the Philippines, Canada (country without *the*), sinigang, pesos, OPM, José Rizal, Jenny Cruz, "I'm a huge fan!" (Ben&Ben); Korean-calque distractors (You suffered a lot, Good suffering, tiger) replaced. 28 item / check deviations + 1 deck deviation, each with a reason.
- Terms: roadmap titles and the a1 lesson title / lesson 5 heading say *simple present*, matching tools/i18n/tl/NOTES.md §6.
- tools/content/tl/ui.json (26 overrides found, not 27): 5 values reworded (auto kung walang laman, isa sa bawat linya, share text with *nang*, «Komportable ka na bang magbasa sa Ingles?», «Para saan mo gagamitin ang Ingles?»); 4 keys added for Korean-mixed onboarding / goal / unlock / language strings (안녕하세요 → Kumusta). The remaining Korean-worded keys belong to Korean-only tools (conjugator, 요-form, 사자성어).
- Roadmap basis line: no change needed; src/app.html shows `basisAny` («CEFR A1–B1») to natives other than ko / en.

**Left for a native speaker**
- aspect-tense table: should «gagawin pa (sa kuwentong nakaraan) → was going to» say «+ sana» (tatawagan sana kita)? The *would* half has no sana («darating daw siya»).
- «nang hindi lalampas sa Biyernes» (length); *miting* / *taksi* vs *meeting* / *taxi* in a Taglish register; *lodi* as a slang example (dated).
- New wording: «Uy! (magaang bati)», «Idol na idol ko! / Solid fan ako!», «Nosebleed! / Hindi ko na-gets», the Ben&Ben example, «Komportable ka na bang magbasa sa Ingles?».
- Pron deck pairs: rice / lice and right / light (an easy contrast for Tagalog speakers) were kept: replacing them would also change the shared pron lesson and its practice; F/P, V/B and coffee / copy are real Filipino traps and stay.
