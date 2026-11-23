# ceb-ko native half: cold review (2026-11-23)

This is a review of the Bisaya half after the four writers' work was merged. I read every jsonl row in Bisaya alongside its Korean (target half) and its English (native/en), joined by id. Readable dumps: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/cebko/R/` (`*.c.txt`, `cards2.txt`, `prac2.txt`, `dlg2.txt`, `gmap.txt` = one Korean phrase → every Bisaya gloss).

I also read all 33 lesson bodies with their example rows expanded, each next to the English body.

How the fixes were applied:
- Every fix is made by id in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/cebko/fix.py`, using `fixlib.py`.
- Each edit asserts the old text, so a fix that misses fails instead of passing silently.
- The script replays from a copy of the merged files taken before the review (`…/cebko/base/`). It is idempotent: two runs give byte-identical output.
- These are session scratch files.

Scope:
- I touched only the files directly under `native/ceb/ko/`.
- I did not touch `work/`, `target/`, the scripts, `src/app.html` or `packs/`.
- I did not run `mk_native.js --merge`.

`node tools/halves/validate.js ceb ko` (run from /home/claude) gives **0 errors** and 3 warnings. None of the warnings is new:
- `hangul.html` has extra ㄲ ㄸ ㄹ ㅃ ㅆ ㅉ, waived for the reading guide.
- `meet.html` has extra 필리핀에서 / 세부에서 왔어요, waived for localisation.
- `trainer.json` is absent, so the trainers stay off.

**Every Bisaya choice below is unverified by a native speaker.** The owner decided that no questions go to the friend. I made each call myself, choosing the form most widely understood in Cebu.

## Changes per file and kind

There are 228 distinct field edits. Each field is counted once, under the kind of its first fix. One sentence-level fix often also made a gloss consistent.

| File | accuracy | consistency | house rule | naturalness | tabs / xref | rows changed |
|---|---|---|---|---|---|---|
| cards.jsonl | 5 | 57 | 1 | 12 | – | 72 |
| practice.jsonl | 4 | 31 | 7 | – | 1 | 40 |
| dialog.jsonl | – | 21 | – | 1 | – | 22 |
| sentences.jsonl | 1 | 16 | 2 | – | – | 19 |
| checks.jsonl | 1 | 7 | – | 1 | – | 9 |
| labels.jsonl | – | 8 | 1 | 1 | – | 10 |
| decks.jsonl | – | 5 | – | 1 | – | 6 (2 labels, 4 desc) |
| patterns.jsonl | – | 4 | 1 | 1 | – | 6 |
| lessons.jsonl | – | 2 | – | 2 | – | 4 |
| examples.jsonl | – | 3 | – | – | – | 3 |
| lessons/*.html | 3 | 12 | 3 | 8 | 4 | 30 bodies |
| course.json | – | 1 | – | – | – | `name` |
| groups.jsonl, ui.json | – | – | – | – | – | 0 |

The biggest single change is the language name. "Korean" became **Koreano** in 110 places across the jsonl files and 29 lesson bodies (120 occurrences in total, counting the 10 that were already there). *Sino-Korean* stays: it is a glossary term.

## Decisions (all unverified by a native speaker)

| Doubt | Decision | Why |
|---|---|---|
| Course name and language name | **Koreano** in `course.json` and in all prose, titles and glosses (*Nagtuon ko og Koreano*, *33 · Koreano sa opisina*, *pinulongang Koreano*). *Sino-Korean* stays. *Koreano* also still means a Korean person, as *Bisaya* does. | The interface dictionary says Koreano everywhere. Keeping "Korean" in lessons would show the learner two names. This overrides profile §3.1, whose question 2 was open. |
| `puliki` vs `busy` | **puliki** (already used everywhere) | Native word, universally understood. The house rule allows no English beyond the glossary. |
| 혹시 | **basin** (table, rows, checks, pattern p040) | It naturally opens *Basin naa moy…?* |
| 선생님 | **titser** (5 rows changed from maestro / maestra) | Gender-neutral like 선생님, and it is the usual Cebu form of address to a teacher. |
| 미국에서 왔어요 | **Taga-Amerika ko** / **Taga-asa ka?** where the English is "I'm from the US" (cards, dialog, meet, checks). **Gikan ko sa Amerika** only in the particles rows (ko.s0127, particles.03), whose English is "(I) came from the US" and which teach 에서 = *gikan sa*. | Taga- is the natural self-introduction. The particles rows need the *gikan sa* link. |
| `kyut` vs `cute` | **kyut** (5 rows changed) | An established loan in Cebuano spelling, per the house rule (*selpon, dyip*). |
| weekend | **sa katapusan sa semana** (already used everywhere) | No English. |
| café / toilet / film | **kapehan**; **CR** (7 rows changed from *kasilyas*; card ko.c0276 keeps "CR / kasilyas"); **sine** for 영화 and **sinehan** for 영화관; *salida* only in the deck label "TV ug salida" (shows in general) | CR is the everyday word in Cebu and was already the majority. *sine* was used 23 times. |
| `nianhi` | **kept** (house ni- rule) | Speech often has *mianhi*. Recorded as a known gap. |
| Deck labels | **Panguyab** (was *Pagpakita og gusto*); **Pag-atiman ug pagdayeg** (was *Matam-is nga pagdayeg*) | *Pagpakita og gusto* was a clumsy description. *Matam-is nga pagdayeg* was too close to *Matam-is nga pulong* (Sweet talk), and the deck holds caring lines ("did you eat / get home safe") as well as compliments. |
| "(future)" / "(past)" tags | **Kept, in English**, the same way as the politeness tags (glossary terms *past / present / future*). future.html now states the rule for the whole course: a prompt tagged "(future)" wants 거예요; an untagged prompt wants the present even when the Bisaya verb is *mo-*. That covers 9 type items after lesson 11 with untagged *mo-* prompts and present-only answers (sov.12, particles.12, particles.13, negation.12, do-man.14, sentences.12, sentences.14, joining.14, cant.14). Added **"(present)"** to 3 type prompts (verbbasics.13, sov.13, particles.14). | Bisaya *mo-* covers future and habit, and *nag-* can read as past, but only the present is accepted there. |
| English loans in glosses | Kept: deadline, email, report, selfie, wifi, take out, password, overtime, points card, comeback, fan meeting | Everyday Bisaya usage. |
| 안녕하세요 | **Maayong adlaw** (card ko.c0061 and label polite.11 lost "/ Kumusta") | Kumusta is a question; profile §7 says it does not match the set greeting. |
| 안녕히 가세요 / 계세요 | **Amping** (to the one leaving) / **Babay, ari na ko** (said by the one leaving). The literal "lakaw og maayo / pabilin og maayo" stays as the explanation in meet.html, meet.k2, g031 and the card notes. | These are the natural Cebu farewells. Literal glosses are kept only where they explain the Korean. |
| 잘 부탁드립니다 | **Palihug giyahi ko** (ko.c0084, g055); the work-email card ko.c0559 is **Salamat daan sa imong tabang (sa trabaho)** | "Palihug ko ninyo og atiman" was a calque. Filipino work email closes with "Salamat daan". |
| 수고 family | 수고하세요 *Padayon lang sa trabaho* · 수고하셨습니다/어요 *Salamat sa imong kakugi karon* · 수고했어(요) *Maayo ang imong trabaho* · 고생했어 *Kapoy kaayo, pero nahuman nimo* | One gloss per form, matching office.html. Deliberate exception: the app's late-night greeting ko.h.night (늦었어요, 수고했어요) keeps *gabii na, salamat sa imong kakugi*, because it speaks to a learner who is studying, not working. |
| Smaller one-gloss fixes | 놀자 *Laag ta!* (was *Tambay ta / Laag ta / Gala ta*; the deck label *Pagtambay* is kept) · 밥 먹었어(요)? *Nakakaon na ka?* · casual 뭐 해? *Nag-unsa ka?* · 몇 살이에요? *Pila na ang imong edad?* · 계산해 주세요 *Ang bayronon, palihug* · 사귀다 *mag-uyab* · 화이팅 *Kaya nimo ni!* / 힘내 *Kaya nimo!* · 좋은 꿈 꿔 *Matam-is nga damgo* · 심쿵 *nilukso akong kasingkasing* · 먼저 퇴근하겠습니다 *Una na ko og uli* · 몰라요 *Dili ko kabalo* · 안 가도 돼요 *Dili na kinahanglan nga moadto ka* · 취미 *kalingawan* · ages in Spanish numbers (*Baynte otso anyos ko*, *otso anyos*) | |
| Deliberate gloss splits | 감사합니다 is *Salamat* on its card (ko.c0062) but *Daghang salamat* in the pause set (ko.z.polite.07), because 고마워요 = *Salamat* is in the same set and the two items must differ. Glosses that differ where the English differs (e.g. 커피 두 잔 주세요 "two coffees" vs "two cups of coffee"; 맵지 않게 해 주세요 card vs food.08) and dialogue lines shortened in context are left as they are. | |
| Tabs | Lesson text names **Leksyon · Praktis · Review** (sound-changes, future). No body sends the learner to a trainer. The hangul line about tapping a letter to replay its strokes stays, as in es-ko. | Profile §3.5 (English tab names) is out of date: there is now a Cebuano interface. |
| ui.json | Left `{}` | The ceb interface dictionary already translates all 14 `uiKeys` literally for Korean. Duplicating them here would shadow later dictionary fixes. The 86 "words remaining" in ui.json are these keys. |

## Glossary and house rules enforced

- **Terms:** only the profile §3.4 English terms.
  - No *adjective*, except the one allowed "sa English, adjective" in verbbasics.
  - None of: classifier, suffix, conjunction, informal, irregular.
  - "tense" never appears alone; it is either in *tense consonant* or in the titles "Present tense" / "Past tense".
  - "lesson" became **leksyon**.
  - "English" as a language name became **Iningles** (4 card notes).
  - **Literal glosses:** "Diretsong hubad" and "Pulong por pulong" became **Sa literal** (14 fields).
- **Spelling:**
  - *og / ug*, *mo- / ni-* and *kon* were scanned with no misuse left.
  - *miaging* became **niaging** (ni- rule; 4 fields).
  - *kahulugan* became **kahulogan** (root vowel, 2 bodies).
  - *pud* became **pod / sab**.
  - *kwarto* became **kuwarto**.
  - No accents. The only apostrophes are *Ma'am* and single quotation marks.
- **No Tagalog:**
  - *baliktad* became **baliskad** (counters).
  - Mindanao *ginabuhat* became Cebu **gibuhat / Nag-unsa ka?** (5 rows).
  - The national words *kilig* (ko.c0195) and *gimik* (goal.social, now *laag sa gabii*) were dropped. *barkada* (Spanish origin, everyday Cebuano) and *tambay* (in the deck label) are kept.
  - *po* appears only in the one labelled comparison in polite.html.
- **Cross-references:**
  - joining → *leksyon 26, "Pagsugilon og istorya sa past"*
  - story → *leksyon 10, "Past tense"*
  - have-to and office.14 → *leksyon 32, "Paghangyo nga matinahuron"*
  - future: *Praktis*
  - The headers "Kasagarang mga sayop" became **Kasagarang sayop** (7 bodies).
- **Reading guide:**
  - The hangul body, sound-changes, the three Hangul deck descriptions and the Pronunciation-tips description all give the same rules:
    - eo, eu, ae are one vowel;
    - o ≠ u and e ≠ i;
    - j = *dy* of *dyip*;
    - k t p ch with a puff;
    - kk tt pp ss jj tight, not long;
    - final l never r;
    - no glottal stop, no stress.
  - The hangul list of single-syllable digraphs now also has *ye, wae, we, ui*.
- **Bridge claims checked and found true in both languages:**
  - *naa / wala* ↔ 있어요 / 없어요, including the trap that *wala* + verb is past.
  - *kini / kana / kadto* ↔ 이 / 그 / 저.
  - *sab* ↔ 도 and *lang* ↔ 만, with the floating-particle trap.
  - *og* ≈ 을/를 only in mo- (actor) sentences. want-like's *Ganahan ko og kape* is also an actor-trigger clause with *og*, so the claim holds.
  - *sa* ↔ 에 / 에서.
  - *mas / kaysa / pinaka-* ↔ 더 / 보다 / 제일, with *kaysa* placed before the noun.
  - *Kuya / Ate* vs 오빠 / 언니 / 형 / 누나, chosen by the speaker's gender.
  - Spanish numbers for hours and age vs native Korean.
  - Fixed: numbers.html had *napulo-usa* / *duha-napulo*, which are not Cebuano numerals. It now reads "napulo + usa", "duha ka napulo", as a structure gloss.

## Final deck labels (43) and group names (5)

These become permanent progress keys at first release.

| Deck id | Label |
|---|---|
| ko.d.hangul-vowels | Mga vowel (Hangul) |
| ko.d.hangul-consonants | Mga consonant (Hangul) |
| ko.d.hangul-advanced | Abante nga Hangul |
| ko.d.pronunciation-tips | Tambag sa paglitok |
| ko.d.survival-phrases | Pulong nga kinahanglanon |
| ko.d.introductions | Pagpaila sa kaugalingon |
| ko.d.survival-phrases-2 | Pulong nga kinahanglanon 2 |
| ko.d.asking-around | Pagpangutana |
| ko.d.cafe-convenience-store | Kapehan ug tindahan |
| ko.d.numbers-in-the-wild | Numero sa tinuod nga kinabuhi |
| ko.d.counters | Mga counter |
| ko.d.weather-feelings | Panahon ug pagbati |
| ko.d.connectors | Mga connector |
| ko.d.doctor-pharmacy | Doktor ug botika |
| ko.d.housing-errands | Puy-anan ug mga buluhaton |
| ko.d.honorifics | Mga honorific |
| ko.d.places-buildings | Mga lugar ug edipisyo |
| ko.d.hobbies | Mga kalingawan |
| ko.d.food-words | Pulong sa pagkaon |
| ko.d.drinks | Mga ilimnon |
| ko.d.activities | Mga kalihokan |
| ko.d.tv-entertainment | TV ug salida |
| ko.d.position-direction-words | Posisyon ug direksyon |
| ko.d.core-verbs | Pangunang mga verb |
| ko.d.particles | Mga particle |
| ko.d.numbers | Mga numero |
| ko.d.sweet-talk | Matam-is nga pulong |
| ko.d.cute-things-to-say | **Pag-atiman ug pagdayeg** (changed) |
| ko.d.flirting | **Panguyab** (changed) |
| ko.d.casual-texting | Text sa barkada |
| ko.d.hype-cool | Pagdayeg ug pagdasig |
| ko.d.hanging-out | Pagtambay |
| ko.d.k-pop-fan-culture | K-pop ug mga fan |
| ko.d.social-media-slang | Social media ug slang |
| ko.d.dating-deeper | Mas lalom nga relasyon |
| ko.d.work-office | Trabaho ug opisina |
| ko.d.small-talk | Istorya-istorya |
| ko.d.food-ordering | Pagkaon ug pag-order |
| ko.d.directions-transport | Direksyon ug sakyanan |
| ko.d.time-days | Oras ug adlaw |
| ko.d.family-people | Pamilya ug mga tawo |
| ko.d.adjectives | Mga pulong nga naghulagway |
| ko.d.k-drama-phrases | Linya sa K-drama |

Groups: ko.grp.foundations **Pundasyon** · ko.grp.everyday **Adlaw-adlaw** · ko.grp.vocabulary **Mga pulong** · ko.grp.grammar **Gramatika** · ko.grp.social **Pakig-uban**.

All labels are unique. None is "My phrases", and none starts with Hangul or Pronunciation. Card meanings are distinct within every deck (checked by script). No two options of a question are identical (validator).

## The 10 most important fixes

1. **Language and course name aligned with the interface.** "Korean" became *Koreano* in 110 places, including `course.json` `name`. The learner no longer sees *Koreano* in the app and *Korean* in the lessons.
2. **Farewells.** 안녕히 가세요 / 계세요 had five different glosses across the card, sentence, dialogue, label and practice rows. Some were literal ("lakaw og maayo") and some idiomatic but inconsistent ("Babay (sa molakaw)"). They are now *Amping* / *Babay, ari na ko*, and the literal sense stays as the explanation.
3. **Tense cues in practice.** Bisaya *mo-* (future or habit) and *nag-* (past or progressive) prompts led to answers that accept only the present.
   - future.html now states the course-wide rule: "(future)" means 거예요; no tag means present. This covers 9 untagged *mo-* type items.
   - "(present)" was added to verbbasics.13, sov.13 and particles.14 (*Nagtuon ko og Koreano*).
4. **Wrong meanings:**
   - 짜증 나요 *Nasilagan ko* ("dazzled") → *Nalagot ko*.
   - 담에 봐 *Kita ta unya* ("later today") → *Kita ta sa sunod*.
   - 덜 매워요 *Menos na ang kahalang* ("has become less spicy") → *Menos ang kahalang*.
   - 몇 개 드릴까요? → *Pila ka buok ang imong gusto?*.
   - 사진 좀 찍어 주실래요? (for us) → *…mi…*.
   - numbers.k1 option "Bisan asa sa duha" ("wherever") → *Bisan hain sa duha* ("either").
5. **One gloss per Korean phrase** across all four writers: 밥 먹었어(요), casual 뭐 해, 몇 살이에요, 계산해 주세요, 사귀다, 수고했어, 먼저 퇴근하겠습니다, 화이팅 / 힘내, 좋은 꿈 꿔, 심쿵, 번호 좀 알려 줄래, 영어 할 수 있어요, 취미, 택배, 알레르기, 안녕하세요.
6. **Calques removed:**
   - 잘 부탁드립니다 *Palihug ko ninyo og atiman* → *Palihug giyahi ko*.
   - Work email → *Salamat daan sa imong tabang*.
   - "comes off as" → *mura kag bastos*.
   - "careful-sounding" → *medyo pormal paminawon*.
   - *Init nga usa* → *Ang init, palihug*.
   - *Nagdala mo sa balay?* → *Mohatod mo sa balay?*.
7. **Decision words applied:** *titser* (not maestro / maestra), *kyut*, *CR* (not kasilyas), Spanish numbers for ages (*Baynte otso anyos ko*, *otso anyos*).
8. **Tagalog and Mindanao forms out:** *baliktad*, *ginabuhat* (5 rows), *kilig*. House spelling: *niaging*, *kahulogan*, *pod*, *kuwarto*.
9. **Cross-references by real Bisaya lesson numbers and titles** (joining, story, have-to, office.14), the *Praktis* tab name (future), and "lesson" → *leksyon*.
10. **Respect wording:**
    - "para sa mga tigulang" ("old people") → *mas magulang* in the 연세 / 성함 / 잘 자 notes and pattern p037.
    - Explanation wording aligned with the requests table: p041 *mahimo ba nga…?*, p042 *dili ba pwede nga…?*, p039 좀 ≈ *lang*.
    - p018 *…kaha ta?*.

Smaller fixes:
- meet blurb *pamilit* → *pagpanamilit*.
- sound-changes blurb *Kat-oni ang pagpaabot niini* → *Hibaloi kini aron dili ka matingala*.
- *Kat-oni* → *Tun-i* in 3 bodies.
- *mabatid ang dalunggan* → *mahanas*.
- verbbasics: "magamit sa pagdayeg" ("praise") → "kon natingala o nalipay ka" (exclamation).
- story: 그런데 "sa laing bahin" → *diay* (topic shift).
- T-money *kard* → *card*.
- *Ayaw undangi* → *Ayaw pag-undang*.
- Rain *nag-uwan* → *nag-ulan*.
- *(honorific past)* → *(honorific nga past)*.

## Claims I could not verify

- **Naturalness of every Bisaya choice**, including all decisions above. I am not a native speaker, and the owner chose no friend check.
- **Uses of *mo-* / *og* after *ganahan*:** I judged *Ganahan ko og kape* an actor-trigger clause, so the profile's "og ≈ 을/를 only in mo- sentences" claim is not contradicted. A grammarian may phrase it differently.
- **Etymologies:**
  - 콘센트 from "concentric plug" via Japanese (ko.c0117). The writer added "via Japanese".
  - 빵 from an Iberian word via Japanese (ko.c0304).
  - 레전드 compared with Spanish *leyenda*.
- **Cultural statements carried from the English:**
  - T-money in "most taxis".
  - Bags cost about 100원.
  - Read receipts ("1") compared with Messenger *seen*. The writer's comparison is unverified as a Cebuano expression.
  - Office titles mapped to Philippine titles (assistant manager, manager, team leader, CEO o presidente).
- **Phonetic advice:**
  - ㅈ = *dy* of *dyip*, ㅊ = *ts* of *otso* with a puff.
  - Cebuano *k t p* have no puff.
  - "ㅓ: open the jaw as for a, say o with unrounded lips".
  - These follow the profile and have no measurement for Cebuano speakers.
- ***nianhi*** (house ni- rule) vs common speech *mianhi*. Also *kapehan* and *katapusan* (root-vowel doubts in profile §3.3).
- **Words of uncertain register:** *Panguyab* as a deck label; *Pag-atiman* (could suggest nursing); *Nalagot*; *Mohatod*; *Salamat daan*; *Kaya nimo ni*; *Nag-unsa ka?* as the casual default; *tugpahanan* vs *airport*; *hunonganan / hulatanan* (bus stop, both used).
- **The roadmap titles** in `tools/i18n/ceb/roadmap.json` use different wording from the lesson titles (for example "Pagpakigkita sa tawo" vs "3 · Pakig-ila sa mga tawo"). They were not aligned. I left roadmap.json alone (out of scope); the lead may unify them.

## Unverified by a native speaker: 40 rows most worth a speaker's eye

Most impactful first.

1. `course.json` name **Koreano**, and the language name *Koreano* throughout (e.g. *Nagtuon ko og Koreano*, *Sa Koreano, …*). Is *Koreano* natural for the language, or do speakers say *Korean*?
2. `ko.d.flirting` label **Panguyab**, and `ko.d.cute-things-to-say` **Pag-atiman ug pagdayeg** (permanent keys).
3. `lessons/hangul.html`, reading-guide paragraphs: o/u, e/i; eo, eu; plain / aspirated / tense; j = *dy*, ch = *ts* of *otso*; "walay glottal stop", "walay stress".
4. `ko.c0569`, `ko.c0570`, `ko.s0017`, `ko.s0018`, `ko.g031`: *Amping* / *Babay, ari na ko* for 안녕히 가세요 / 계세요.
5. `lessons/isseoyo.html` opening and table: *Estudyante ko* / *Naa ko sa eskuwelahan* / *Eskuwelahan ni diri* / *Naay eskuwelahan diri*.
6. `lessons/numbers.html`: the two number systems; *alas tres*, *baynte singko anyos*; "napulo + usa".
7. `lessons/particles.html` first paragraph: one *sa* for 에 and 에서.
8. `lessons/sov.html`: *Ako kan-on mokaon* as an illustration; "sa sentence nga mo-, susama kini sa og".
9. `ko.c0084` *Palihug giyahi ko*, `ko.g055`, and `ko.c0559` *Salamat daan sa imong tabang (sa trabaho)*.
10. `ko.c0550`, `ko.s0287`, `ko.s0286`, `ko.s0288`, `ko.c0473`, `ko.c0472`: the 수고 / 고생 family glosses.
11. `lessons/polite.html`: the *po* comparison; *mura kag bastos*.
12. `lessons/do-man.html`: *sab* / *lang* float to second place (*Dili sab ko*), 도 / 만 stay on the noun.
13. `ko.s0012`, `ko.c0077`, `ko.g021` *Taga-Amerika ko* vs `ko.s0127` *Gikan ko sa Amerika*.
14. `ko.c0615`, `ko.s0063`, `ko.c0255`, `titles.11`, `titles.14`: *titser* for 선생님.
15. `ko.c0448`, `ko.g074`, `ko.c0479`, `texting.12`, `titles.08–12`: *Nag-unsa ka?* for casual 뭐 해.
16. `ko.c0417`, `ko.e002`, `ko.s0114`, `ko.g073`: *Nakakaon na ka?*.
17. `lessons/requests.html` table: 좀 ≈ *lang / sa*, 혹시 ≈ *basin*, *Mahimo ba nga…?*, *Dili ba pwede nga…?*.
18. `lessons/joining.html`: the *kay* trap (*Dili ko moadto kay puliki ko*), and *puliki*.
19. `lessons/titles.html`: *Kuya / Ate* bridge; "kon babaye ka / kon lalaki ka".
20. `lessons/meet.html`: the localised 필리핀에서 / 세부에서 왔어요 lines and the goodbye paragraph.
21. `lessons/texting.html`: *gi-seen ra* sa Messenger; *slmt*; *huhu*.
22. `ko.c0001–ko.c0012` vowel card meanings (*a sa palit*, *o nga lingin kaayo ang ngabil*, *eu: u nga patag ang ngabil*).
23. `ko.c0045–ko.c0048`: plain / tense / aspirated card notes ("kusog nga buga sa hangin", "hugot, walay hangin").
24. `ko.d.hangul-vowels`, `ko.d.hangul-consonants`, `ko.d.hangul-advanced` descriptions: same guide wording.
25. `ko.c0195` *Nagkurog akong kasingkasing* (설레요, *kilig* removed) and `ko.e024` *Naghinamhinam ko*.
26. `ko.c0196` *Nalagot ko* (짜증 나요).
27. `ko.c0096` *Mohatod mo sa balay? (delivery)*.
28. `ko.c0639`, `ko.g092` *Kaya nimo ni!* (화이팅) vs `ko.c0474` *Kaya nimo! / Kusog lang!* (힘내).
29. `ko.c0430`, `ko.g125` *Nilukso akong kasingkasing* (심쿵).
30. `lessons/compare.html`: *kaysa* before the noun, 보다 after; `ko.s0248` *Menos ang kahalang*.
31. `lessons/cant.html`: *Dili ko kamao molangoy*; "pagsulay nga agian sa tanang langyaw".
32. `lessons/counters.html` and `food.html`: *duha ka tasa nga kape*, *pila ka buok?* as counter bridges.
33. `ko.c0581` *Take out, palihug* / `ko.c0134` *Dad-on, take-out*: is the English loan right?
34. `ko.d.cafe-convenience-store` *Kapehan ug tindahan*, and *kapehan* in general.
35. `labels ko.t01–ko.t16` level titles (*Turok, Estudyante, Beterano, Batid, Eksperto, Sensei*).
36. `labels ko.z.saying.*` proverbs (e.g. *Ayaw pag-undang*, *Bisan ang unggoy mahulog sa kahoy*).
37. `ko.c0128` *Ang init, palihug*; `ko.c0131` *Ayaw kaayo patama og tam-is*.
38. `lessons/office.html`: the Philippine title column; "Sa pabrika o bisan asang trabahoan…".
39. `ko.p039–ko.p043` request-pattern meanings.
40. `practice verbbasics.13 / sov.13 / particles.14`: is the "(present)" tag clear, or is it better to rephrase the Bisaya?

## Notes for the lead

- `docs/profiles/ceb-ko.md` §3.1 (prose language name *Korean*) and §3.5 (English tab names) are superseded by the interface dictionary: the language is *Koreano* and the tabs are *Karon · Leksyon · Praktis · Review · Pag-uswag*. I did not edit the profile (out of scope).
- `trainer.json` does not exist for ceb, so the trainers stay off. It is unchanged.
- Nothing was assembled into `packs/`.
