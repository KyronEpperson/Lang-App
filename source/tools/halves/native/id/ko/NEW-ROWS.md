# Indonesian half: rows written on 2026-11-23 (for the cold reviewer)

Top-up for the Korean change "Countries, Core words, learner name" (`docs/briefs/x-ko-topup.md`), written by one writer who is not a native speaker. Nothing has had a native check. `node tools/halves/validate.js id ko` gives errors 0. The one warning is the existing `hangul` waiver. That run checks format, Hangul and `@@` only, not the Indonesian. Every change was applied by id from scripts (backup and scripts are in the session scratch folder `topup-id/`). Rules: `docs/profiles/id-ko.md` (kamu / saya / aku, (formal) (sopan) (santai) (hormat), Minta / Tolong / Silakan, §3.4 glossary, §3.7 fixed phrases, the closed list of casual words) and the existing rows of this half.

## Counts

| file | added | changed | removed |
|---|---|---|---|
| `decks.jsonl` | 13 | 0 | 0 |
| `groups.jsonl` | 1 (ko.grp.core-words) | 0 | 0 |
| `cards.jsonl` | 773 (ko.c0643 … ko.c1415) | 0 | 0 in this pass (ko.c0077 had already gone at the merge) |
| `examples.jsonl` | 201 (ko.e075 … ko.e275) | 0 | 0 |
| `dialog.jsonl` | 52 (ko.g150 … ko.g201) | 0 (ko.g019, ko.g021 checked: already updated by w2) | 0 |
| `sentences.jsonl` | 3 (ko.s0299 … ko.s0301) | 0 (ko.s0297, ko.s0298 checked: already added by w2) | 0 in this pass (ko.s0012, s0127, s0289, s0292, s0295 had already gone at the merge) |
| `practice.jsonl` | 0 | 3: particles.03 (q, why: Jepang / 일본), office.05 (q: @@), office.08 (p: @@) | 0 |
| `lessons/*.html` | 0 | 3: `particles` ko.s0127→ko.s0299; `office` ko.s0289→ko.s0300 and ko.s0292→ko.s0301; `meet` "dek negara" → "dek Negara" (tip and tokens already redone by w2) | 0 |
| `trainer.json` | 0 | 9 strings (see below) | 0 |

Checked, already right from the merge: ko.c0617 note (orang Meksiko), meet.06 (Saya dari Meksiko), the `meet` body and its tokens, all check options (none stale).

## Labels chosen (permanent progress keys)

| deck | label |
|---|---|
| ko.d.top-nouns | Kata benda utama |
| ko.d.top-verbs | Kata kerja utama |
| ko.d.top-adjectives | Kata sifat utama |
| ko.d.top-adverbs | Kata keterangan utama |
| ko.d.top-pronouns | Kata ganti utama |
| ko.d.top-particles | Partikel tambahan |
| ko.d.top-connectors | Kata sambung tambahan |
| ko.d.top-interjections | Kata seru utama |
| ko.d.top-words | Kata-kata berguna |
| ko.d.top-counters | Kata penggolong tambahan |
| ko.d.flirting-words | Kosakata pendekatan |
| ko.d.compliments | Pujian |
| ko.d.countries | Negara |
| group ko.grp.core-words | Kosakata inti |

## Decisions

- **Label pattern.** "… utama" for the new word-class decks. "… tambahan" for the three decks that extend an existing deck (Partikel, Kata sambung, Kata penggolong), because their descriptions say "beyond / missing from". "Kosakata pendekatan" pairs with the existing deck *Pendekatan*. All 56 labels are unique. Cross-references use exact labels: dek Negara, dek Partikel, dek Kata sambung, dek Kata penggolong.
- **Terms**, matching the rows already in this half: *tak beraturan ㄷ / ㅂ / 르 / ㅅ / ㅎ* (as in ko.c0337), *ㄹ hilang / ㅡ hilang* (as in practice and the conj trainer), *dengan kalimat negatif*, *bentuk 해요*, *sebelum kata benda*, *kata keterangan* (adverb, a school term not in §3.4), *kata seru* (interjection).
- **Flirting scale.** The English "Mild / Warm / Bold" became *Ringan / Hangat / Berani*.
- **Register.** Sentence cards follow §3.2: kamu on 요 lines, Anda only on honorific lines that address the listener (ko.c1206 별말씀을요). Elsewhere "you" is dropped (*Tampan sekali, ya*, *Teliti sekali, ya*). Santai glosses use only the closed list of casual words, so *banget, bareng, ketemu, sih, bikin* were removed from polite lines. Interjection meanings describe casual words, so they keep everyday forms (*waduh, ups, hoek*).
- **Requests.** 주세요 → *Minta*; -아/어 주세요 → *Tolong*; -(으)세요 offers → *Silakan*; -지 마세요 → *Jangan*. Encouragements and wishes in -(으)세요 use the natural form instead: ko.e124 *Semoga cepat sembuh*, ko.e238 *Percayalah pada dirimu sendiri*, ko.e185 *Lain kali jangan lupa datang, ya* (same as the ko.c0914 note).
- **Countries.** Standard Indonesian names (Kemenlu / Wikipedia forms): *Tiongkok* (profile), *Korea Selatan / Utara, Britania Raya, Belanda, Pantai Gading, Tanjung Verde, Guinea Khatulistiwa, Papua Nugini, Selandia Baru, Turki (Türkiye)*. 영국 = *Inggris (Britania Raya)* and 잉글랜드 = *England*, so the two stay distinct in one deck. Numbers use the thousands point (*1.000 won*).
- **Words remaining (271).** These are all identical-to-English strings that are correct as they stand: 112 country names (*Indonesia, Pakistan, Iran, Peru* …), ko.c0716 *bus*, interjections *oh!; ooh*, *hmm*, *aaah!*, the existing letter and loanword cards, check/practice options such as "ng", label ko.t05 "Senior", and `ui.json` (86). `ui.json` is not part of this job.
- **trainer.json (was 9 words).** `hangul.mean`: 서울 *kota Seoul*, 한국 *Korea Selatan* (same as card ko.c1212), 김치 *kimchi (sayur fermentasi)*, 한글 *aksara Hangul*, 원 *won (mata uang Korea)*, and the same string for `gloss.COUNT.원`. `gloss.ENDS.습니다` and `ㅂ니다`, and `conj.labels.formal`, *bentuk formal* (the §3.4 term for -습니다). These nine were correct while identical to English. They were reworded only to clear the counter, so the lead can revert them. 김치 now differs from card ko.c0293 (*kimchi*). `hangul.alt` is not set. The profile proposes ㅊ `c`, ㅉ `cc`, `sh` += `sy` but leaves the decision to the lead.
- **Same Korean, same gloss.** A script compared every new card, example and dialogue line, and every `한글 = gloss` pair in the new notes, against the Korean already glossed in this half. The rows that differed were aligned: 죄송하지만 → *Mohon maaf, tapi*, 이거 얼마예요? → *Ini berapa?*, 꼭 오세요, 천 원밖에 없어요, 머리가 아파요, 어떻게 가요?, 돈이 없어요. "Stranger" is *orang yang belum dikenal* (as in ko.c0945), never *orang asing*.
- **Untouched rows.** Compared with the backup, the old rows changed in exactly three places: the three practice rows, the three lesson edits and the nine trainer strings. No *Amerika / Oklahoma / Kii* is left outside ko.c1221 and ko.c0617.
- **Assembly check.** `assemble.js id ko` passes `node --check` and has 56 decks and 1413 cards. The features on are script, pron, conj, register, numbers, sound and strokes.

## 20 rows most worth a native speaker's check

1. ko.c1231 / ko.c1307: *Inggris (Britania Raya)* vs *England*. Would *Inggris* for 잉글랜드 be expected instead?
2. ko.c1215: *Tiongkok*; 중국 사람 = *orang Tiongkok* (nationality, not *Tionghoa*); 중국어 = *bahasa Mandarin*.
3. ko.c1256 *Turki (Türkiye)*, ko.c1385 *Tanjung Verde*, ko.c1253 *Kirgizstan*: are these the current standard forms?
4. ko.c0943 씨: *sapaan sopan (setelah nama)*, with no Pak/Bu (§3.2).
5. ko.c0956 당신: *kau; engkau*, with the note "Bukan padanan Anda".
6. The flirting scale *Ringan / Hangat / Berani* across ko.c1116 … ko.c1178.
7. ko.c1138 훈남: *pria tampan berkesan hangat*.
8. ko.c1206 별말씀을요: *Ah, Anda terlalu baik* (also in ko.g201).
9. ko.c1205 아니에요, 아직 멀었어요: *Ah, tidak, saya masih jauh dari bisa* (also in ko.g195).
10. ko.c1201 발표 잘 들었습니다: *Presentasinya sangat bermanfaat*.
11. ko.c1166 언제 밥 한번 먹어요: *Kapan-kapan kita makan bersama, ya*.
12. ko.c1171 / ko.g188, the ramyeon line: *Mau mampir makan ramyeon?*
13. ko.c1051 아이참 *ih, apa-apaan (malu-malu)* and ko.c1050 깜짝이야 *aduh, kaget aku!*
14. ko.c0712 아저씨 *bapak-bapak; Pak (kepada orang asing)* and ko.c0741 아줌마 *ibu-ibu (santai)*.
15. The terms in the Kata kerja utama / Kata sifat utama notes: *tak beraturan ㄷ*, *ㄹ hilang*, *sebelum kata benda*.
16. ko.e208 당신을 사랑해요: *Saya mencintaimu.* (saya, because the Korean is polite).
17. ko.e238 *Percayalah pada dirimu sendiri* and ko.e185 *Lain kali jangan lupa datang, ya*: both use natural forms, not *Silakan*.
18. ko.g172: *Dor! / Aduh, kaget aku! Jantungku sampai mau copot.*
19. ko.s0301 감사합니다. @@ 드림: *Terima kasih. Hormat saya, @@*.
20. `trainer.json` 김치 *kimchi (sayur fermentasi)* and 한글 *aksara Hangul*.
