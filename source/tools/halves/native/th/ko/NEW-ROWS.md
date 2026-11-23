# Thai half: top-up rows written on 2026-11-23 (for the cold reviewer)

Written by one writer, not a native speaker, on top of the four-writer merge (no `REVIEW.md` yet), following `docs/briefs/x-ko-topup.md` and `docs/profiles/th-ko.md`. Nothing here has had a native check. `node tools/halves/validate.js th ko` → **errors: 0**, words remaining 92 (ui.json 86, plus 6 pre-existing RR/digit rows that are correctly identical to English). The validator checks format and Hangul, not the Thai. Assembled pack: 56 decks, 1413 cards, `node --check` OK. `trainer.json` untouched (no validator error).

Conventions kept from the profile and the merged rows: ครับ/ค่ะ (questions and นะ: ครับ/คะ) on glosses of 요-form / -습니다 / -시- lines only, one per line, never in labels, descs or explanations; no particle on 반말 lines (tag `(กันเอง)` only where the English has "(casual)"); dropped pronouns, ฉัน only where 저/나 must stay; 너 → เธอ, 당신 → คุณ; no commas or full stops in Thai; one space around every Hangul run, Latin word and digit; Korean example sentences in notes glossed in Thai with the particle, as the merged notes do.

## Counts

| file | added | changed | removed |
|---|---|---|---|
| `cards.jsonl` | 773 (ko.c0643 … ko.c1415) | 1 (ko.c0617 note: + 멕시코 사람) | ko.c0077 (already absent after the merge) |
| `examples.jsonl` | 201 (ko.e075 … ko.e275) | 0 | 0 |
| `dialog.jsonl` | 52 (ko.g150 … ko.g201) | 2 (ko.g019 `@@`; ko.g021 now ฟิลิปปินส์ / เซบู) | 0 |
| `decks.jsonl` | 13 | 0 | 0 |
| `groups.jsonl` | 1 (ko.grp.core-words) | 0 | 0 |
| `sentences.jsonl` | 5 (ko.s0297 … ko.s0301) | 0 | ko.s0012, s0127, s0289, s0292, s0295 (already absent after the merge; glosses reused from the writers' rows with `@@`) |
| `practice.jsonl` | 0 | 4 rows: meet.06 p (เม็กซิโก), particles.03 q + why (ญี่ปุ่น / 일본에 왔어요), office.05 q and office.08 p (คีอี / 키이 → `@@`) | 0 |
| `lessons/*.html` | 0 | 3: `meet` (tokens s0297/s0298 + new country tip), `particles` (s0127 → s0299), `office` (s0289/s0292 → s0300/s0301) | 0 |

## Labels chosen (permanent progress keys)

| deck | label |
|---|---|
| ko.d.top-nouns | คำนามที่ใช้บ่อย |
| ko.d.top-verbs | คำกริยาที่ใช้บ่อย |
| ko.d.top-adjectives | คำคุณศัพท์ที่ใช้บ่อย |
| ko.d.top-adverbs | คำวิเศษณ์ที่ใช้บ่อย |
| ko.d.top-pronouns | คำสรรพนามที่ใช้บ่อย |
| ko.d.top-particles | คำช่วยเพิ่มเติม |
| ko.d.top-connectors | คำเชื่อมเพิ่มเติม |
| ko.d.top-interjections | คำอุทานที่ใช้บ่อย |
| ko.d.top-words | คำทั่วไปที่ใช้บ่อย |
| ko.d.top-counters | ลักษณนามเพิ่มเติม |
| ko.d.flirting-words | คำศัพท์สำหรับจีบ |
| ko.d.compliments | คำชม |
| ko.d.countries | ประเทศ |
| group ko.grp.core-words | คำศัพท์หลัก |

## Decisions

- **"Top …" = …ที่ใช้บ่อย**, except the three decks that extend an existing deck (คำช่วย, คำเชื่อม, ลักษณนาม), which take …เพิ่มเติม, as their descs say ("beyond the nine in the Particles deck"). คำกริยาหลัก was taken (core-verbs), hence คำกริยาที่ใช้บ่อย. คำคุณศัพท์ / คำวิเศษณ์ are used because the English label says adjective / adverb (glossary §3.4); the adjective desc still says กริยาบอกลักษณะ.
- **คำชม** (compliments deck) is also the pause-set label `ko.z.compliment` in `labels.jsonl`; deck labels are unique, so it validates, but a reviewer may prefer a longer deck label.
- **Irregular verbs:** กริยาผันไม่ปกติแบบ ㄷ / ㅂ / ㅅ / ㅎ / 르 (as the merged ko.c0337), "ผันปกติ" for regular, "ㄹ หายไป" / "ㅡ หายไป" for the drops.
- **Flirting register scale** (Mild / Warm / Bold): นุ่มนวล / อบอุ่น / กล้า, "Mild to warm" = นุ่มนวลถึงอบอุ่น.
- **Countries:** standard Thai names; profile §9 fixes 미국 อเมริกา, 영국 อังกฤษ, 태국 ไทย, so ko.c1221 = อเมริกา (สหรัฐอเมริกา), ko.c1231 = อังกฤษ (สหราชอาณาจักร), ko.c1307 잉글랜드 = อิงแลนด์. Others as commonly written: ตุรกี (ทูร์เคีย), เช็กเกีย, เมียนมา, ติมอร์-เลสเต, กาบูเวร์ดี, เอสวาตินี.
- **Blank rows:** ko.c0643 มาจาก ___ ครับ/ค่ะ as profile §9 prescribes; ko.c0644 พูดภาษา ___ ได้ไหมครับ/คะ takes the particle too, to match it (and the merged ko.c0091 wording), although the plain frame ko.c0073 has none.
- **Aligned with the merged rows by Korean text:** -(으)ㄹ래요? = อยาก…ไหม (as ko.c0436, ko.g029, ko.s0199); -(으)ㄹ까요? = …กันไหม; 김치찌개 = ซุปกิมจิ (ko.g110); 회식 = กินเลี้ยงทีม; 야근 = ทำโอที; 치킨 = ไก่ทอด; 라면 = รามยอน; 별말씀을요 = ไม่เป็นไรเลยครับ/ค่ะ (ko.g002); 그냥 그래요 = ก็เรื่อย ๆ (ko.c0563); 또 봐요 = แล้วเจอกันใหม่ (ko.c0568); 수고 많으셨어요 = ขอบคุณสำหรับงานวันนี้มากเลยครับ/ค่ะ (the §3.3 수고하셨습니다 gloss).
- **meet tip:** the English Korean only (미국에서, 필리핀에서, 일본에서 왔어요); Thailand is mentioned in Thai ("รวมถึงไทย"), so no 태국 and no waiver (profile §9).
- **`@@`:** ko.s0297 "สวัสดี ฉันชื่อ @@ ครับ/ค่ะ", ko.s0300 / office.08 "สวัสดี @@ จากทีมการตลาดครับ/ค่ะ", ko.s0301 "ขอบคุณครับ/ค่ะ @@", ko.g019 "ฉันชื่อ @@ คุณล่ะชื่ออะไรครับ/คะ", office.05 "ลงชื่อท้ายอีเมลในนาม @@". Thai has no case endings, so any name fits.
- **Names in glosses:** มินซู, มินจุน, จีซู, มินจี, ฮานึล, เมียงดง, หอคอยนัมซาน (profile §9 spelling rules).
- Tags (ทางการ) / (ยกย่อง) are not added to new card meanings: the profile's tag rule allows them only when the English has one or two meanings collide.

## 20 rows most worth a native check

1. ko.c1055 짜잔 → แท่นแทน (ta-da): natural spelling?
2. ko.g172 왁! → แฮ่ (boo!): right sound for a startle?
3. ko.c1047 헉 → เฮือก แย่แล้ว; ko.c1049 아차 → ตายละ ลืม; ko.c1046 어머 → ตายแล้ว แม่เจ้า (register of these exclamations).
4. ko.c1043 / ko.c1045 휴 / 에휴: both เฮ้อ, told apart by (โล่งอก) / (เหนื่อยใจ). Better pair?
5. Flirting scale นุ่มนวล / อบอุ่น / กล้า in ko.c1116 … ko.c1160: does กล้า read as "bold" (not "brave")?
6. ko.c1136 이상형 and ko.c1133 스타일 both rendered with สเปก; ko.c1160 ตรงสเปกเป๊ะเลย: natural?
7. ko.c1138 훈남 → หนุ่มหล่อออร่าอบอุ่น: is there a better slang equivalent?
8. ko.c1171 라면 먹고 갈래요? → แวะกินรามยอนก่อนไหม (มุกตลก): does the joke land without the film's Thai title?
9. ko.c1165 / ko.c1166 / ko.c1167 meal lines: กินข้าวหรือยัง (เป็นห่วงนะ), ไว้ไปกินข้าวกันสักวันนะ, อยากไปกินข้าวด้วยกันไหม: natural as flirting lines?
10. ko.c1206 별말씀을요 → ไม่เป็นไรเลย (as ko.g002) in reply to praise; ko.c1207 과찬이세요 → ชมเกินไปแล้ว: right replies to a compliment?
11. ko.c0973 그쪽 note "กวน ๆ นิดหนึ่ง" for "a little cheeky".
12. ko.c0712 아저씨 → คุณลุง; ko.c0741 아줌마 → ผู้หญิงวัยกลางคน (no ป้า, to avoid implying politeness the Korean lacks).
13. ko.c1110 한 시 → หนึ่งนาฬิกา (บ่ายโมง ตีหนึ่ง) and ko.c0720 한 시 반 → บ่ายโมงครึ่ง (หรือตีหนึ่งครึ่ง): Thai clock words.
14. ko.c0865 시원하다 note on soup: ซดแล้วชื่นใจ.
15. ko.c0885 귀찮다 → น่ารำคาญ ขี้เกียจทำ; ko.e157 วันนี้ขี้เกียจทำอาหาร.
16. ko.c1008 바쁜데 meaning "ยุ่งอยู่ แต่ / ก็เลย" and other connector meanings ko.c1004 … ko.c1020 (fragments, no particle).
17. ko.c0948 너 → เธอ and ko.e201 "วันนี้เธอทำอะไร (กันเอง)" (profile §11 item 1).
18. ko.c1256 튀르키예 → ตุรกี (ทูร์เคีย); ko.c1323 체코 → เช็กเกีย (or เช็ก?); ko.c1231 อังกฤษ (สหราชอาณาจักร) next to ko.c1307 อิงแลนด์.
19. ko.c0756 들다 "ถือ ยก มีค่าใช้จ่าย" and ko.c0781 다니다 "ไปเป็นประจำ เข้าเรียน ทำงานที่": meanings for multi-sense verbs.
20. Deck labels and group (table above), especially คำทั่วไปที่ใช้บ่อย (Top words) and คำศัพท์หลัก next to the existing group คำศัพท์.
