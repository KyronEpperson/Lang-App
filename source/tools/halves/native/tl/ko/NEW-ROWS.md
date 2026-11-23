# Tagalog half: rows written on 2026-11-23 (top-up, for the cold reviewer)

One writer did this top-up, and that writer is not a native speaker. It follows `docs/briefs/x-ko-topup.md`, and nothing here has had a native check yet. `node tools/halves/validate.js tl ko` gives **errors: 0** with 3 warnings, all of them the existing waived extra Hangul in `hangul`, `polite` and `meet`. That run checks format, Hangul and `@@` only, not the Filipino.

The assembled pack (`assemble.js tl ko`) passes `node --check` and has 56 decks and 1413 cards.

**Rules followed:**
- `docs/profiles/tl-ko.md` §3: Manila Taglish teaching register, *ikaw / mo*, and English grammar terms from the closed list.
- `REVIEW.md`:
  - *po / kayo* only in glosses of lines to a superior, a customer or a teacher;
  - **paaralan**, **CR**, **mahilig sa** for 좋아해요;
  - **Pahingi / Pabili / paki-** for requests, and no «pakiusap» in glosses;
  - **Amerika** for 미국;
  - **teacher** for 선생님.
- Existing card conventions: «irregular ang ㅂ», «nawawala ang ㄹ / ㅡ», «bago ang noun», «Binibigkas na [ ]».

**How the files were changed:** every change was made by id from `…/scratchpad/topup-tl/apply.py`, which is idempotent and always starts from the pre-top-up copy in `…/topup-tl/backup/`. The translations are in `data_cards.txt` and `data_ex.txt` in the same folder. `trainer.json`, `ui.json`, `course.json` and `work/` were not touched.

## Counts

| file | added | changed | removed |
|---|---|---|---|
| decks.jsonl | 13 | 0 | 0 |
| groups.jsonl | 1 | 0 | 0 |
| cards.jsonl | 773 (ko.c0643–ko.c1415) | 1 (ko.c0617 note) | 1 (ko.c0077) |
| examples.jsonl | 201 (ko.e075–ko.e275) | 0 | 0 |
| dialog.jsonl | 52 (ko.g150–ko.g201) | 2 (ko.g019, ko.g021) | 0 |
| sentences.jsonl | 5 (ko.s0297–ko.s0301) | 0 | 5 (ko.s0295, ko.s0012, ko.s0127, ko.s0289, ko.s0292) |
| practice.jsonl | 0 | 4 (meet.06, particles.03, office.05, office.08) | 0 |
| lessons.jsonl | 0 | 1 (`meet` `_note`) | 0 |
| lessons/*.html | 0 | 3 (meet, particles, office) | 0 |
| patterns, checks, labels | 0 | 0 | 0 |

**Changed rows:**
- **ko.c0617:** «한국 사람 = Koreano, 미국 사람 = Amerikano, 멕시코 사람 = Mexicano: bansa + 사람».
- **ko.g019:** «Ano ang pangalan mo? / Ako si @@. Ikaw?».
- **ko.g021:** «Taga-saan ka? / Taga-Pilipinas. Sa Cebu.». The Korean line is now 필리핀에서 왔어요. 세부요.
- **meet.06:** «Taga-Mexico ako».
- **particles.03:** «'Galing ako sa Hapon' =», with 일본에 왔어요 in the explanation.
- **office.05 and office.08:** 키이 and Kii are replaced by `@@`.

**New sentences:**
- s0297: «Hello. Ako si @@.»
- s0298: «Taga-Mexico ako»
- s0299: «Galing (ako) sa Canada»
- s0300: «Magandang araw po, si @@ ito ng marketing team»
- s0301: «Salamat po. @@»

These keep the earlier glosses of the rows they replace.

**Lesson bodies:**
- **`meet`:** the «Sa halip na Amerika» paragraph is now the English country tip (`<div class="tip">`), with 미국에서, 필리핀에서, 일본에서. It adds 마닐라에서 왔어요 under the existing waiver, and the `_note` is updated. The div count now matches the English, so the old structure warning is gone.
- **`particles` and `office`:** only the `{{ex:}}` ids changed, renumbered by the export.

## Labels chosen (permanent progress keys)

| deck | label |
|---|---|
| ko.d.top-nouns | Karaniwang noun |
| ko.d.top-verbs | Karaniwang verb |
| ko.d.top-adjectives | Karaniwang describing verb |
| ko.d.top-adverbs | Karaniwang adverb |
| ko.d.top-pronouns | Karaniwang pronoun |
| ko.d.top-particles | Dagdag na particle |
| ko.d.top-connectors | Dagdag na connector |
| ko.d.top-interjections | Mga bulalas |
| ko.d.top-words | Mga kapaki-pakinabang na salita |
| ko.d.top-counters | Dagdag na counter |
| ko.d.flirting-words | Mga salita sa pagpapacute |
| ko.d.compliments | Mga papuri |
| ko.d.countries | Mga bansa |
| group ko.grp.core-words | Mga pangunahing salita |

Why these labels:
- **"Dagdag na"** is used where an older deck already has the base label (Mga particle, Mga connector, Mga counter).
- **"Karaniwang"** is used for the five word-class decks.
- **"adverb"** is English, as *ceb* did. It is not in the profile's closed list, but it is the same kind of term as noun and verb.

## Decisions

- **Countries.** Established Filipino names are used where Manila prose uses them: *Timog Korea, Hilagang Korea, Hapon, Tsina, Rusya, Amerika (Estados Unidos), Pilipinas, Alemanya, Pransiya, Espanya, Italya, Gresya, Ehipto, Inglatera (England), Palestina, Turkiye (Turkey), Netherlands (Olanda), United Kingdom (Britanya), Kapuluang Solomon, Kapuluang Marshall*. Names joined by "and" use *at* (Trinidad at Tobago, Bosnia at Herzegovina, Sao Tome at Principe). Everything else keeps the usual English name without accents: Mexico, Canada, Brazil, Vietnam, Thailand, Cote d'Ivoire. These identical names account for most of the 433 "words remaining" in cards.
- **Formality scale in flirting notes.** Mild / Warm / Bold → **Magaan / Malambing / Matapang**.
- ***po*.**
  - It is added only where the Korean line goes up to a superior or a customer:
    - 발표 잘 들었습니다 and 많이 배웠습니다 (c1201, c1202, g201 line A);
    - 무엇을 도와드릴까요?;
    - 저희 가게에 오신 걸 환영합니다;
    - 몇 분이세요?;
    - the host's 많이 드세요 / 천천히 드세요 (드세요 is one of REVIEW's special honorific words).
  - The context-free -시네요 compliments get no *po*, as REVIEW decides for g009 and the compliment pause set. Nor do 과찬이세요, 별말씀을요 (the boss says it in g201), or 칭찬해 / 좋게 봐 주셔서 감사해요.
  - 수고 많으셨어요 is «Salamat sa lahat ng sipag mo», the not-junior variant, because the note says "among colleagues".
- **Tense and register tags.** The tags *(casual)* and *(pasulat)* (for "written style") are kept wherever the English gloss has a tag.
- **부럽다.** 부러워요! is «sana all!». 별로예요 is «hindi ganoon kaganda / meh».
- **Irregular verbs.** They follow the trainer's own wording: «irregular ang ㄷ / ㅂ / ㅅ / ㅎ / 르», «nawawala ang ㄹ / ㅡ».

## 20 rows most worth a native speaker's check

1. The deck labels and the group name above, especially «Mga bulalas», «Mga kapaki-pakinabang na salita» and «Mga salita sa pagpapacute» (vs «Mga salitang pang-flirt»).
2. The country-name policy (c1212–c1415). Should the course use *Mehiko / Kanada / Brasil / Biyetnam* (KWF), or the English forms used here?
3. c1213 «Hilagang Korea» and c1212 «Timog Korea», vs «North / South Korea» in everyday Manila speech.
4. The Magaan / Malambing / Matapang scale in the flirting notes (c1116–c1178).
5. c1172 «Ay sus, nagbibiro ka lang, ano?» and c1173 «Ang galing mo talagang mambola» for 말도 참 잘하시네요.
6. c1171 «Gusto mo bang umakyat para mag-ramyeon? (biro)» and its note.
7. c1206 별말씀을요 «Naku, wala iyon; masyado kang mabait» and c1207 과찬이세요 «Sobra naman ang papuri mo», both without *po*. Is that right, given the notes say "to elders"?
8. c1203 수고 많으셨어요 «Salamat sa lahat ng sipag mo», checked against REVIEW's 수고 family.
9. c1201 and c1202 with *po* («Nag-enjoy po ako sa presentation ninyo», «Marami po akong natutunan»).
10. c0876 and e158 부러워요 = «sana all!». Too slangy for a card note?
11. The interjections (c1031–c1056): «hay, salamat» (휴), «haay (pagod na)» (에휴), «hala!; yikes» (헉), «oops!; ay, mali!» (앗), «ay, ano ba (nahihiya, pa-cute)» (아이참), «ginulat mo ako!» (깜짝이야).
12. c0712 아저씨 = «manong». c0741 아줌마 «babaeng may edad»: is «ale» the natural pair?
13. c0710 고향 «sariling bayan; probinsya» and «taga-saan ka talaga?».
14. c0893 좀 = «kaunti; paki- (softener)». Is «paki-» acceptable as a card meaning?
15. e167 «Pakiulit nga.», e166 «Pakitulungan mo naman ako rito.», e113 «Magtiwala ka sa akin.»: the request glosses without «pakiusap».
16. e222 저거 주세요 «Iyong nandoon nga.» and e195 «Pahingi na lang ng tubig.».
17. g172 «Bulaga!» for 왁! and g197 «Kuwarenta ka na?» (age with the Spanish number).
18. c1050 «ginulat mo ako!» vs REVIEW's «nagulat talaga ako» for 깜짝 놀랐어요: is the split clear?
19. The `meet` tip «Ganito rin sa kahit anong bansa… Kung taga-Maynila ka: 마닐라에서 왔어요…».
20. c0942 우리: «Ginagamit din bilang "ko" para sa pamilya at bahay», and c0965 저희 «kami (mapagpakumbaba)».
