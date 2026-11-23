# Vietnamese half: rows written on 2026-11-23 (for the cold reviewer)

One writer wrote these rows for the Korean top-up brief (`docs/briefs/x-ko-topup.md`). The writer is not a native speaker, and nothing here has had a native check. `node tools/halves/validate.js vi ko` reports **0 errors**, but it checks only format and Hangul, not the Vietnamese. The rules followed are those of `docs/profiles/vi-ko.md`:
- *tôi / bạn*, or no pronoun;
- *ạ* only per §3.2;
- *đã / sẽ / chưa* cues;
- the fixed-phrase table;
- the glossary terms (*trợ từ, đuôi nối, đơn vị đếm, tính từ, dạng định ngữ, số thuần Hàn / Hán Hàn, kính ngữ*);
- NFC.

Every row was applied by id from a script. The backup and the scripts are outside the repo.

## Counts

| file | added | changed | removed |
|---|---|---|---|
| `cards.jsonl` | 773 (ko.c0643–ko.c1415) | 1 (ko.c0617 note) | 0 |
| `examples.jsonl` | 201 (ko.e075–ko.e275) | 0 | 0 |
| `dialog.jsonl` | 52 (ko.g150–ko.g201) | 2 (ko.g019, ko.g021) | 0 |
| `decks.jsonl` | 13 | 0 | 0 |
| `groups.jsonl` | 1 (ko.grp.core-words) | 0 | 0 |
| `sentences.jsonl` | 5 (ko.s0297–ko.s0301) | 0 | 0 (ko.s0012/0127/0289/0292/0295 had already been dropped at the merge) |
| `practice.jsonl` | 0 | 4 (meet.06 p; particles.03 q + why; office.05 q; office.08 p) | 0 |
| `lessons/meet.html` | — | tokens s0295 → s0297 and s0012 → s0298; new country tip after the script (same Hangul as English) | — |
| `lessons/particles.html` | — | token s0127 → s0299 | — |
| `lessons/office.html` | — | tokens s0289 → s0300 and s0292 → s0301 | — |

ko.c0077 had already been removed at the merge. No orphan ids remain in any file.

## Deck labels and group (permanent progress keys)

| deck id | label |
|---|---|
| ko.d.top-nouns | Danh từ thông dụng |
| ko.d.top-verbs | Động từ thông dụng |
| ko.d.top-adjectives | Tính từ thông dụng |
| ko.d.top-adverbs | Trạng từ thông dụng |
| ko.d.top-pronouns | Đại từ thông dụng |
| ko.d.top-particles | Trợ từ mở rộng |
| ko.d.top-connectors | Từ nối mở rộng |
| ko.d.top-interjections | Từ cảm thán thông dụng (the existing rows say *từ cảm thán*) |
| ko.d.top-words | Từ hữu ích |
| ko.d.top-counters | Đơn vị đếm mở rộng |
| ko.d.flirting-words | Từ ngữ tán tỉnh (beside the existing *Tán tỉnh*) |
| ko.d.compliments | Lời khen hằng ngày (beside the existing *Khen & cổ vũ*) |
| ko.d.countries | Các quốc gia |
| group ko.grp.core-words | Từ vựng cốt lõi |

The labels follow one pattern:
- "Top …" becomes *… thông dụng*.
- "beyond the existing deck" becomes *… mở rộng*, built on the existing labels *Trợ từ*, *Từ nối*, *Đơn vị đếm*.

Cross-references in descriptions and notes use these exact labels.

## Decisions

1. **Country names = the CLDR Vietnamese names** (the house Vietnamese material writes *Canada*, *Indonesia* in Latin), with the profile's forms and settled exonyms on top: *Mỹ, Hàn Quốc, Triều Tiên, Ý, Hồng Kông, Ma Cao, Đông Timor, Ả Rập Xê Út, Gruzia, Bờ Biển Ngà, Cộng hòa (Dân chủ) Congo, Dominica (đảo quốc)*. England / Wales are *xứ Anh (England)* / *xứ Wales*, beside *Vương quốc Anh*.
   - About 150 of these names are spelled the same as in English (*Mexico, Canada, Peru, Kenya …*), so the validator counts them under cards "words remaining". They are intentional.
   - Running sentences use the same forms: *Mexico* (meet.06, ko.s0298, ko.e200, ko.c0617), *Philippines* (ko.g021), *Canada* (ko.s0299), *Nhật Bản* (particles.03).
2. **No Hán-Việt readings in the new rows.** The §5.1 whitelist ties each reading to specific cards, and none of them are in the new decks. 제일 = *đệ nhất* stays on ko.c0107 only.
3. **Irregular verbs:** *bất quy tắc ㅂ / ㄷ / ㅅ / ㅎ / 르*, *ㄹ bị lược*, *ㅡ bị lược*. These match the existing rows (ko.c0337 *bất quy tắc ㄷ*; *lược* for dropping), as do *văn nói / văn viết* for spoken / written.
4. **Flirting scale** Mild / Warm / Bold = *Nhẹ nhàng / Ấm áp / Táo bạo*. No *anh / em* in flirting or compliment glosses. ko.e208 당신을 사랑해요 = «Tôi yêu người.» (song register).
5. **Adverb = *trạng từ*** (not *phó từ*; no earlier use in the half). **Interjection = *từ cảm thán***, as in the existing rows.
6. **ko.c0943 씨** = «danh xưng sau tên (≈ anh, chị)». The *anh, chị* appear only as an equivalence, not as address.
7. **ko.c1203 수고 많으셨어요** = «Đã vất vả nhiều rồi ạ», following the fixed 수고하셨습니다 gloss (which shows *ạ*).
8. **Film title** (ko.c1171): «một bộ phim Hàn năm 2001», without the title (no reliable Vietnamese release title known, and no English left in).
   - Other style choices:
     - *quý khách* lines end in *ạ* (ko.c0952, ko.e203, ko.e215, as ko.c1097);
     - ko.c0715 (to elders) ends in *ạ*;
     - 요-form -(으)ㄹ까요 / 같이 lines use *mình … nhé* (as the existing ko.g089, ko.e005);
     - North/South pairs use the half's form (*hoa quả*);
     - 죄송하지만 = *Tôi xin lỗi, nhưng* (fixed table).
9. **The meet tip** copies the English Hangul exactly. No 베트남에서 왔어요 example was added, because that would need a `_waive`, and the profile plans a waiver only for `hangul`. The lead may want to add one.
10. **Words remaining** (cards 180, checks 3, practice 7), so the brief's "none remaining" is not met, deliberately.
   - Cards: 28 words are pre-existing romanization or brand rows (가 = ga, "n", soju, taxi, CGV); the rest are the country names of decision 1.
   - Checks and practice: pre-existing hangul romanization ("Seoul (seoul)", hangul.k2 options).
   - trainer.json (5) and ui.json are untouched, as instructed.

## 20 rows most worth a native speaker's check

1. The country list as a whole (decision 1): Latin forms vs the older transliterations (*Mê-hi-cô*), and *Ý* vs *Italia*.
2. ko.c1307–c1310 *xứ Anh (England), Scotland, xứ Wales, Ireland*, beside ko.c1231 *Vương quốc Anh*.
3. ko.c1272 *Gruzia* (CLDR says *Georgia*), ko.c1290 *Dominica (đảo quốc)* vs ko.c1285 *Cộng hòa Dominica*.
4. ko.c0943 씨 «danh xưng sau tên (≈ anh, chị)».
5. ko.c0956 당신 «bạn, mình (vợ chồng, bài hát, quảng cáo)» and ko.e208 «Tôi yêu người.».
6. ko.c0951 자기 «tự mình; cưng (giữa các cặp đôi)».
7. ko.c0973 그쪽 «bạn (với người lạ, nghĩa đen: phía đó)».
8. ko.c1047 헉 «hự!; chết thật» and ko.c1052 아싸 «hay quá!; tuyệt!»: are these the natural interjections?
9. ko.c1055 짜잔 «tèn ten!» and ko.c1045 에휴 «haiz; thôi đành vậy».
10. ko.c1138 훈남 «chàng trai ưa nhìn, ấm áp» and ko.c1139 심쿵 «tim lỡ một nhịp».
11. ko.c1132 분위기 «khí chất; bầu không khí» / ko.c1157 «Bạn có một nét cuốn hút riêng».
12. ko.c1171 the 라면 joke line and its note (film named only by year).
13. ko.c1203 «Đã vất vả nhiều rồi ạ» (*ạ* or not?).
14. ko.c1206 별말씀을요 «Bạn quá khen rồi» vs ko.c1207 과찬이세요 «Bạn khen tôi quá lời rồi»: is the distinction natural?
15. ko.c0749 and others: «ㄹ bị lược», «bất quy tắc ㄷ» as grammar terms.
16. ko.c0893 좀 «một chút; giúp (từ làm mềm câu)» and ko.c0935 혹시 «không biết…, liệu…» (fixed-phrase table).
17. ko.c0995 아 / 야 «ơi, này (sau tên, thân mật)».
18. ko.c1109 한 판 «một ván; một hiệp; một khay».
19. ko.g172 «Hù! / Á, giật cả mình! Làm mình hết hồn.» and ko.g161 «Thôi đi, nói dối!».
20. The meet tip «Nước nào cũng nói theo cùng một cách: … Bộ thẻ Các quốc gia có đủ mọi quốc gia.»
