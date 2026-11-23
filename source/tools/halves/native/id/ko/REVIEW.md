# id-ko native half: cold review (2026-11-23)

**The reviewer is not a native speaker of Indonesian.** Every Indonesian choice below is a non-native editor's judgement. The list at the end says what a native speaker should still check.

## What I checked

- **Every jsonl row**, joined by id with its Korean (`target/ko/`) and its English (`native/en/ko/`):
  - 1413 cards, 201 dialogues, 275 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items;
  - 56 decks, 6 groups, 140 labels (including all pause sets and idioms), 33 lesson rows.
- **All 33 lesson bodies**, read as HTML with their `{{ex:…}}` ids.
- **The `trainer.json` strings**, including the 9 that the top-up writer reworded (see Decisions).
- **Every type-in and order prompt** against its accepted answers (`a`) and rejected forms (`x`) in `target/ko/practice.jsonl`.
- **Scripts:**
  - "same Korean, same gloss": whole lines across cards, examples, sentences, dialogue halves and pause labels, plus a hand pass over embedded phrases (뭐 해, 잘 자, 내일 봐, 콜, 고생했어, 나 지금 가) in practice prompts and notes;
  - register: the Korean line's ending against casual or formal Indonesian words;
  - an audit of every *Anda* and every *Pak/Bu*;
  - duplicate meanings within a deck, duplicate options within a question, and duplicates within a pause set;
  - the strings identical to English.
- **Two factual claims checked against sources:**
  - Soderberg & Olson (2008, *JIPA* 38(2)) list the glottal stop between vowels "in some words of Arabic origin, e.g. *maaf*". They do not mention *saat* or *taat*. ([PDF](https://core-prod.cambridgecore.org/core/services/aop-cambridge-core/content/view/AE405481B94A4E0B7234A8BBE9C6F5FD/S0025100308003320a.pdf/indonesian.pdf))
  - The TUFS Javanese textbook (2017) tags *dhahar* (eat) and *saré* (sleep) as krama inggil, against ngoko *mangan* and *turu*. ([PDF](https://www.aa.tufs.ac.jp/wp-content/uploads/2024/02/2017Javanese1.pdf))

Every fix is applied by id from `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-idko/fix.py`. The pre-review copy is in `…/review-idko/base/`, and both are session scratch files. The script:
- accepts a field only if it holds the expected old or new text;
- checks, for every edited field, that the Hangul runs, `@@`, ` / ` and blanks are unchanged;
- applies 0 edits on a second run.

I touched only the merged jsonl files, 8 lesson bodies, 5 `trainer.json` strings and this file. I left `work/`, `ui.json` (another agent is filling it), `course.json` and `target/` alone. **Do not run `mk_native.js id --merge` again:** it rebuilds from `work/` and would undo this review.

**Validator:** `node tools/halves/validate.js id ko` ends with:

```
words remaining: 189 of 25577  (cards 171, checks 5, practice 7, labels 1, trainer.json 5)
errors: 0
warnings: 1
  warn  lessons/hangul.html: Hangul differs from the English · missing  · extra ㄲ ㄸ ㄹ ㅃ ㅆ ㅉ ㅚ ㅢ 감사합니다 커피 한글 (waived on lessons:hangul)
```

The remaining "words" are all legitimate:
- country names and loanwords that Indonesian spells as English does (*Indonesia, Pakistan, bus, hotel* …);
- formula-only `why` lines (가요 → 갔어요);
- the options *ng / h / g / formal*;
- label ko.t05 *Senior*;
- the 5 restored `trainer.json` strings below.

## Decisions

| Point | Decision | Applied to |
|---|---|---|
| **학생** | **pelajar** (any student) wherever the Korean is a bare 학생. No 학생 row has a university context, so *mahasiswa* was a narrowing. *siswa* is not used. The c0682 dictionary meaning reads "pelajar (siswa atau mahasiswa)". This deviates from the example *Saya mahasiswa* in profile §4.4. The half already used *pelajar* in `trainer.json`, c0081 and the `nouns` tip. | c0682; s0038 s0040 s0042 s0059 s0062 s0093 s0128 s0140 s0143; past.k2 nouns.k1 negation.k2; 11 practice prompts; `meet`, `nouns` (3×), `isseoyo` (3×), `sentences` |
| **Tense cues** | **No change: the existing convention is consistent and correct.**<br>• Past with no time word in the answer: *sudah* + verb ("(Saya) sudah makan").<br>• Where *sudah* reads oddly (negatives, nouns, adjectives, stories): the tag **(lampau)**.<br>• Future: *akan*.<br>• A time word appears only if the answer has it. *belum* appears nowhere without 아직.<br>`past.html` explains the (lampau) tag. | checked: all `past`, `future`, `story`, `counters`, `joining` prompts |
| **계산해 주세요** | Keeps **"Tolong dihitung"**. *Tolong* is the profile's cue for -아/어 주세요 (§3.2, §8.4). "Minta …" would point at 주세요, which is a distractor in food.05. The phrase is said at the counter, where "dihitung" (ring it up) fits. The card note now adds: «Di restoran Indonesia, kita biasanya bilang "Minta bonnya".» | c0580 note |
| **Meal phrases** | 잘 먹겠습니다 = **"Terima kasih atas makanannya" (sebelum makan)**. 잘 먹었습니다 = **"Terima kasih, makanannya enak" (sesudah makan)**. The literal meanings stay in the card notes and sentence glosses ("saya akan / sudah makan dengan baik"). *Selamat makan* stays reserved for 맛있게 드세요. "Terima kasih, saya makan, ya" is gone. food.10 keeps its literal prompt, because it tests the tense. | c0068, s0187, label expression.22, g093 (c0583 / s0188 / expression.23 were already right) |
| **혹시** | **kebetulan** in questions of fact ("Kebetulan ada menu bahasa Inggris?"). requests.k2 asks `"Kebetulan" =`, so the fixed gloss stays. Where 혹시 opens a *request* (g098), Indonesian says **"Maaf, …"**. The row carries a `_note`. | g098 |
| **넵 / 콜** | 넵 = **Siap** (s0209, texting.03/.14, `texting` prose). 콜 was also "Siap!" in two dialogues, so it now reads **"Oke, setuju!"** everywhere. | g032, g063, s0202 |
| **Casual words (one rule)** | **Casual Korean reads as casual Indonesian.** The rule is keyed on the Korean ending (반말), not on *aku* in the gloss.<br>• 반말 glosses may use *nggak, udah, aja, gimana, makasih, yuk* plus **kangen, capek, ketemu, lagi (apa), banget**. Standard words stay acceptable there.<br>• 요 and -습니다 glosses use none of them: *rindu, lelah, bertemu, sedang, tidak*.<br>• No *sih / dong / gue / lo*.<br>Same Korean, same gloss: 뭐 해 = "Lagi apa?", 잘 자 = "Tidur nyenyak, ya", 내일 봐 = "sampai besok" vs 내일 봐요 = "sampai jumpa besok", 나 지금 가 = "Aku jalan sekarang". | c0413 c0450 c0541 c0637 c0443 c0489 c0490 c0491 c0495 c1006 e262 c0889; g036 g037 g061 g072 g074 g080 g112 g113 g120 g122 g131; s0197; titles.08/.09/.12, texting.08/.11/.12/.13, plans.14; c0206 c0388 notes |
| **Anda** | **No change needed.** After the edits, all 23 *Anda* occur on honorific or humble lines to the listener (성함, 연세, -시- to a customer or senior, 별말씀을요, 연락드립니다, 주셔서), in notes about those words, or where the text says 당신 ≠ *Anda*. None occur in instructions. The "letter-register" questions *Bisakah Anda…? / Sudahkah Anda…?* were rewritten as "Bisa tolong bantu saya soal ini?" and "Sudah baca email saya?". | c0548, c0556, e166 |
| **Pak/Bu + title** | **Kept.** Vocative 선생님 → *Pak/Bu Guru*, 과장님 → *Pak/Bu Manajer*, 팀장님 → *Pak/Bu Ketua Tim*, 사장님 → *Pak/Bu* (kepada pemilik). There is no *Bapak/Ibu/Kak* where the Korean has no title. | checked: c0255, g097, g107, g149, e032, e072, s0195, titles.06/.11/.14, office.11/.12/.14 |
| **Final k** | **Consistent, no change.** Final ㄱ is never the glottal stop of *tidak*: hangul body, `sound-changes` (review paragraph and nasalisation section), c0013, c0040. Only *t* and *p* bridge (*sakit, tutup*). | checked |
| **saat / taat** | **Replaced with *maaf* (ma-af)**, the example the cited source gives. *saat* and *taat* are Arabic loans of the same class, but no source names them. | `sound-changes` |
| **Javanese krama inggil** | **Kept.** *dhahar / saré* are krama inggil (TUFS textbook). The line is optional and marked "Kalau kamu bisa bahasa Jawa". | `honorific` (unchanged) |
| **잉글랜드 / 영국** | 영국 = **"Britania Raya (Inggris)"**, 잉글랜드 = **"Inggris (England)"**. Both are Indonesian, they stay distinct in the Negara deck, and the bare English "England" is gone. This deviates from profile §3.1, which lists plain *Inggris* for the country: once 잉글랜드 is in the same deck, plain *Inggris* would be ambiguous. The c1307 note adds that Indonesians call both "Inggris". 영국 사람 = *orang Inggris* and 영어 = *bahasa Inggris* stay. | c1231, c1307 |
| **trainer.json rewordings** | **Restored to natural wording (5):** 서울 *Seoul*, 김치 *kimchi* (= card c0293), 원 *won* (`hangul.mean` and `gloss.COUNT`), `conj.labels.formal` *formal* (parallel to *santai*).<br>**Kept (4)**, because they are not worse: 한국 *Korea Selatan* (= card c1212), 한글 *aksara Hangul*, `gloss.ENDS.습니다` / `ㅂ니다` *bentuk formal* (the §3.4 term).<br>"Words remaining" now counts these 5 again; that is expected. | `trainer.json` |
| **Same Korean, same gloss** | The unified forms:<br>• 어디에서 왔어요? "Dari mana?"; 무슨 일 해요? "Kerja apa?"<br>• 화장실이 어디에 있어요? "Toiletnya di mana?"; 성함이 어떻게 되세요? "Boleh tahu nama Anda?"<br>• 카드 돼요? "Bisa bayar pakai kartu?"; 아이스 아메리카노 … "Minta satu es Americano"<br>• 드시고 가세요? "Makan di sini?"; 적립 되세요? "Punya kartu poin?"; 봉투 필요하세요? "Perlu kantong plastik?"; 카드로 할게요 "Saya bayar pakai kartu, ya"<br>• 김치찌개 "kimchi jjigae"; 회식 "makan malam tim"; 대박 "Luar biasa! / Masa?"; 아니에요, 아직 멀었어요 "…saya masih harus banyak belajar"; 고생했어 "Kamu udah berusaha keras"<br>Kept on purpose: the courier's "Paket!" in g052 (it has a `_note`), and the teaching variants of 저는 학생이에요 and 가요 in lesson sentences. | c0076 c0080 c0095 c0101 c0247 c1205; g016 g040 g041 g043 g045 g046 g052 g080 g110 g162 g195; honorific.06; label expression.12 |
| **Same gloss inside dialogue lines** | A second pass split dialogue lines into sentences. 어디야? is "Kamu di mana?" (g038, g075); 다 왔어? is "Udah hampir sampai?"; 지금 갈게 is "Aku ke sana sekarang, ya"; 잘했어 is "Bagus sekali!" (g079); 힘내 is "Semangat, ya!" (g082); 진짜요? is "Serius?" (g176). "Mau ikut?" for 같이 갈래(요)? stays where the speaker is already going (g029, g034, with a `_note`). The remaining differences only add a tag or a softening *ya*. | g038 g075 g079 g082 g176 |
| **English left in** | **Rule:** keep a loan that Indonesian media and fandom actually use (comeback, lightstick, fancam, bias, main vocal, follow, charger, wifi, gaya effortless). Replace an English interjection or phrase that has an everyday Indonesian equivalent: 아싸 in g162 is now "Asyik!", not "Yes!". No English sound comparisons, table headers or options are left. | g162 |
| **`@@` and blanks** | **No change needed.** g019, s0297, s0300, s0301, office.05 and office.08 read with any name (*Saya @@*, *Hormat saya, @@*). Every `__` / `___` is intact (the script asserts it). | checked |
| **Naturalness** | 아이참 is "aduh, ih (malu atau pura-pura kesal)", not "ih, apa-apaan", which reads as offended (c1051, g159, g182). 당연하죠 is "Sudah pasti", not "Sudah jelas" (expression.15). 또 늦었어요? is "terlambat lagi?", not the casual *telat* on a 요 line. | as listed |
| **Claims softened** | The `sov` *di-* test ("nasi dimakan" → 을/를) now says "biasanya", because it overgenerates (*ditelepon* takes 한테). 콘센트 etymology: "konon". 레전드: "mirip *legenda*", not "sama seperti", because the profile allows no shared-origin claims. The hangul guide said romanisation "dibuat untuk pembaca bahasa Inggris", which nothing supports; it now reads "Ejaan ini bukan ejaan Indonesia". Sundanese *eu / beureum* is kept as a hedged aid ("dekat dengan"); Sundanese *eu* is /ɨ/. | `sov`, c0117, c0467, `hangul` |
| **Cross-references** | They all match `lessons.jsonl`: 4, 26, 31 and 32 (×2). `story` pointed to lesson 10 "tentang bentuk lampau" and now reads «pelajaran 10, "Bentuk lampau"». The Hangul half of the title cannot be added, because the body is unwaived. | `story` |

## Rows changed

104 jsonl rows, 8 lesson bodies and 5 `trainer.json` strings. Each row is counted once, however many of its fields changed.

| File | Rows changed |
|---|---|
| cards.jsonl | 29 |
| dialog.jsonl | 35 (three are a `_note` only: g029, g034, g052) |
| practice.jsonl | 20 |
| sentences.jsonl | 12 |
| checks.jsonl | 3 |
| labels.jsonl | 3 |
| examples.jsonl | 2 |
| decks, groups, patterns, lessons.jsonl | 0 |
| lessons/*.html | 8: hangul, sound-changes, meet, nouns, isseoyo, sentences, story, sov |
| trainer.json | 5 strings |

## Deck labels and group names (final; none changed)

All 56 labels are unique, short and natural, and none starts with "Hangul" or "Pronunciation". None was clearly wrong, so all progress keys are intact.

**Decks (56):** Vokal (Hangul) · Konsonan (Hangul) · Lanjutan (Hangul) · Tips pelafalan · Frasa penting · Perkenalan · Frasa penting 2 · Tanya tempat · Kafe & minimarket · Angka sehari-hari · Kata penggolong · Cuaca & perasaan · Kata sambung · Dokter & apotek · Tempat tinggal & urusan · Bentuk hormat · Tempat & gedung · Hobi · Makanan · Minuman · Kegiatan · TV & hiburan · Posisi & arah · Kata kerja inti · Partikel · Bilangan · Kata-kata manis · Ucapan imut · Pendekatan · Chat santai · Keren & semangat · Nongkrong · K-pop & fandom · Medsos & bahasa gaul · Hubungan lebih serius · Kerja & kantor · Basa-basi · Memesan makanan · Arah & transportasi · Waktu & hari · Keluarga & orang · Kata sifat · Frasa drakor · Kata benda utama · Kata kerja utama · Kata sifat utama · Kata keterangan utama · Kata ganti utama · Partikel tambahan · Kata sambung tambahan · Kata seru utama · Kata-kata berguna · Kata penggolong tambahan · Kosakata pendekatan · Pujian · Negara

**Groups (6):** Dasar · Sehari-hari · Kosakata · Tata bahasa · Sosial · Kosakata inti

## For a native speaker to check (max 20)

1. *pelajar* for every bare 학생 ("Saya pelajar", "Kamu pelajar?"). Would an adult learner expect *mahasiswa*?
2. Meal phrases: is "Terima kasih atas makanannya" natural *before* eating, with "Terima kasih, makanannya enak" after (c0068, c0583, g093)?
3. "Tolong dihitung" for 계산해 주세요 at the counter, with "Minta bonnya" given only in the note (c0580, s0184, s0195).
4. The casual rule in practice: "Aku kangen kamu", "Aku capek", "Lagi apa?", "Kita ketemu di mana?", "Hari ini aku capek banget" (g112). Is *banget* acceptable in a course?
5. "Oke, setuju!" for 콜 (g032, g063, s0202), so that "Siap" stays reserved for 넵.
6. "Maaf, bisa tolong fotokan saya?" for a 혹시 request (g098), and "Kebetulan …?" for questions of fact.
7. *Pak/Bu Manajer*, *Pak/Bu Ketua Tim*, *Pak/Bu Guru* as vocatives with no name. Natural, or would *Pak / Bu* alone be expected?
8. 영국 = "Britania Raya (Inggris)" vs 잉글랜드 = "Inggris (England)" in the Negara deck.
9. The `sound-changes` aid: «jeda kecil yang kita ucapkan pada *maaf* (ma-af)».
10. "Sudah pasti" for 당연하죠 (expression.15), next to "Ya, tentu" (.04) and "Tentu saja" (.18).
11. 아이참 = "aduh, ih (malu atau pura-pura kesal)"; g159 "Aduh, jangan dilihat terus"; g182 "Aduh, saya jadi malu".
12. "Ah, tidak, saya masih harus banyak belajar" for 아니에요, 아직 멀었어요 (c1205, g195).
13. "Bisa tolong bantu saya soal ini?" (c0548, e166) and "Sudah baca email saya?" (c0556).
14. "Terima kasih atas kerja kerasnya" for 수고하셨습니다 / -셨어요, and "Selamat bekerja" for 수고하세요 (profile marks it unverified).
15. "Mohon bantuannya" (first meeting) vs "Mohon kerja samanya" (work email, c0559).
16. Carried over unchanged and not re-judged: the `hangul` reading-guide anchors (*enam, sate, toko, cari, beureum*) and «*k, t, p* Indonesia ≈ konsonan tegang».
17. Carried over unchanged: *Pelajar* (level 3) and *Senior* (level 5) as level titles; *Suhu* for 사범.
18. The flirting scale *Ringan / Hangat / Berani* and the compliment-deck register (NEW-ROWS items 6–13).
19. *ceban / goban* as the 만 memory aid in `numbers`: is it known outside Jakarta?
20. "Dari mana?" (card, sentence, dialogue, prompts) for 어디에서 왔어요?: is it clear enough without *asalmu*?
