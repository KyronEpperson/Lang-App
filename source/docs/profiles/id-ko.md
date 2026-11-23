# Indonesian speakers learning Korean: pair profile

Course `id-ko` is Korean for Indonesian speakers. It is a standard course with two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards; `docs/HALVES-SPEC.md`);
- the native half `tools/halves/native/id/ko/`, written in Indonesian by writers w1–w4 from this profile.

This profile is the writers' style and content authority. It settles in advance what the es-ko review had to fix afterwards (`native/es/ko/REVIEW.md`):
- one term per idea;
- one gloss per Korean phrase;
- one policy for "you";
- tab names;
- cross-references by real lesson titles.

Its structure follows `docs/profiles/tl-ko.md`. Its Indonesian house style follows `docs/profiles/id.md`, `tools/i18n/id/ui.json` and `tools/i18n/id/roadmap.json`.

**Evidence tags**
- **[research]**: a study opened for this profile; **(ID L1)** = its learners are Indonesian.
- **[convention]**: grammars, spelling rules, the app's shipped Indonesian files.
- **[practitioner]**: guides and press.
- **[inference]**: this profile's reasoning.
- **[carried]**: taken from `id.md` / `en-id.md` without re-opening the source.

**Every Indonesian sentence here is [inference]**: the author is not a native speaker and no native check was made (§11). Untagged rules in §3, §8 and §10 are decisions, not findings.

## 1. Summary

1. **Register:** standard, friendly app Indonesian. The learner is ***kamu*** (lower case, *-mu*), never *Anda*. No slang in instructions.
2. **Terms** are Indonesian, aligned with the shipped roadmap:
   - *partikel, kata dasar, bentuk hormat, bahasa santai, kata penggolong, bilangan asli / Sino-Korea*;
   - the Latin line is always ***romanisasi***, and the course `ui.json` relabels the interface to match (§3.4, §3.5).
3. **Politeness in glosses** comes from the English tags, translated as **(formal) (sopan) (santai) (hormat)**, plus closed Indonesian means:
   - *saya / aku*;
   - *Anda* only for honorific "you";
   - *Minta* N = N 주세요, *Tolong* V = -아/어 주세요, *Silakan* V = -(으)세요;
   - no *Bapak / Ibu / Kak* unless the Korean has a title (§3.2).
4. **Strongest bridges** (§4):
   - *saya / aku* = 저 / 나;
   - *bukan / tidak / tidak ada* = 아니에요 / 안 / 없어요;
   - *ada* = 있어요;
   - question words stay in place (*Ini apa?*);
   - titles instead of "you";
   - *sini / situ / sana* = 여기 / 거기 / 저기;
   - *selamat jalan / tinggal* = 안녕히 가세요 / 계세요;
   - *tolong* vs *silakan*;
   - *jam tiga / tiga jam* ≈ 세 시 / 세 시간;
   - *beliau* ≈ -시-;
   - unreleased final *t / p*.
5. **Strongest traps, ranked** (§5):
   1. three-way stops (Indonesian has two series);
   2. final ㄱ said as the glottal stop of *tidak*;
   3. ㅓ / ㅡ pulled toward *e pepet*, ㅗ / ㅜ under-rounded;
   4. romanisation misread (*hangeul* → ha-ngeul; *eo / eu / ae* as two vowels);
   5. 이/가 vs 을/를;
   6. one *di* for 에 and 에서;
   7. mirror-image noun phrases;
   8. tense left to time words;
   9. 당신 for *Anda*, and 오빠 said by men.
6. **Deviation from the brief:** final ***k*** is **not** part of the unreleased-final bridge. In native words Indonesian final *k* is a glottal stop [convention: Soderberg & Olson 2008]. Only *t* and *p* bridge (*sakit, tutup*); final ㄱ is taught as a trap (§5.2, §6).

## 2. Learners

- An Aju News column reports about 38,000 Korean test takers in Indonesia in 2023 (about 23,000 passed), about 100 Korean academies in Jakarta, and "tens of thousands" of EPS work-permit aspirants a year ([Aju News 2024](https://www.ajunews.com/view/20241014083042023)) [practitioner]. The test is not named (§11).
- Korean degree programmes exist at UGM, UI, UPI and Universitas Nasional, the authors' institutions in §5.
- Many learners are drama (*drakor*) and K-pop fans. They know *oppa, unnie, daebak* by ear, often with the wrong usage [inference].
- **What they need first:** reading Hangul and the romanisation (§6), the 요 default, 있어요 / 없어요 / 주세요, numbers, counters, and verb-last order.

## 3. Register, terms, glosses

### 3.1 Register and spelling

- **Variety:** the everyday standard of Jakarta offices and media (`id.md` §2 [carried]). Avoid both the letter register (*adalah* everywhere) and Jakarta slang (*gue, lo*).
- **Address and voice:**
  - The learner is ***kamu / -mu***. Use plain imperatives, softened with *coba* or *ya*: *Coba ucapkan…*, *Ingat, ya:*.
  - No *yuk, ayo, banget* or *nih* in instructions.
  - Use *kita* for "we speakers of Indonesian" (*Dalam bahasa Indonesia, kita bilang…*). Short sentences, active voice.
- **Spelling (EYD / PUEBI):**
  - *silakan* (never *silahkan*), *praktik, apotek, Jumat, kafe*, *di mana / ke mana*;
  - *Anda* capitalised, *kamu* never.
- **Numbers:** thousands point in Indonesian text (*50.000 won*). Digits inside Korean strings stay as given.
- **Names:**
  - *bahasa Korea, orang Korea, Seoul, Hangul*;
  - countries *Amerika Serikat, Inggris, Kanada, Meksiko, Jepang, Tiongkok, Indonesia*.
- **`course.json`:** `{"native":"id","name":"Bahasa Korea","brand":"한글"}`.
- **Markup:**
  - Lesson bodies: Korean in `<b>` as in the English; an Indonesian word discussed as a word in `<i>`.
  - Plain-text fields cannot carry markup, so quote with straight double quotes ("di").
  - Errors ✗, corrections ✓.

### 3.2 Glosses: one policy

1. **Meaning in context**, short and natural. A gloss has a tag **exactly where the English gloss has one**: (formal) = -습니다; (sopan) = 요-form; (santai) = 반말; (hormat) = -(으)시- and the special verbs. Recipient cues are translated: (kepada orang yang lebih tua), and so on.
2. **"I":** *saya* in formal and polite glosses, *aku* in santai glosses. This mirrors 저 / 나.
3. **"You":**
   1. drop it when Indonesian allows, which is usually: *Mau ke mana? Silakan duduk. Sudah makan?*;
   2. otherwise, honorific or -습니다 lines to the listener use ***Anda***, and polite or casual lines use ***kamu***;
   3. **never add *Bapak / Ibu / Kak / Mas / Mbak*** if the Korean has no title: that adds a gender and a relationship. This is es-ko's *usted* policy, transposed.
4. **Korean titles** become gender-neutral address forms:
   - vocative 선생님 → *Pak/Bu Guru*;
   - 사장님 to a shop owner → *Pak/Bu*;
   - 기사님 → *Pak Sopir*;
   - 팀장님 / 과장님 / 부장님 → *Pak/Bu* + role (*Pak/Bu Manajer*);
   - vocative 오빠 / 형 / 누나 / 언니 → ***Kak*** (the card meaning says who uses which).
5. **Santai glosses** use *aku / kamu* and only these casual words: *nggak, udah, aja, gimana, makasih, yuk, ya*. Polite and formal glosses use none of them.
6. **Requests and commands, one rendering each:**

| Korean | Indonesian | Example |
|---|---|---|
| N 주세요 | ***Minta*** N | 물 주세요 = *Minta air.* |
| N 좀 주세요 | *Minta* N, *ya.* | *Minta air, ya.* |
| V-아/어 주세요 (for me) | ***Tolong*** V | 여기서 세워 주세요 = *Tolong berhenti di sini.* |
| V-(으)세요 (offer, polite command) | ***Silakan*** V | 여기 앉으세요 = *Silakan duduk di sini.* |
| V-(으)세요 giving directions | imperative + *saja* | 쭉 가세요 = *Jalan lurus saja.* |
| V-아/어 주시겠어요? | ***Bisa tolong*** V? | |
| -지 마세요 | ***Jangan*** V | |

7. **Same Korean, same gloss** everywhere: cards, dialogues, examples, sentences, practice and lessons. A writer who needs a different gloss leaves a `_note`.

### 3.3 Sample explanation sentences ([inference])

1. Dalam bahasa Korea, kata kerja selalu ada di akhir kalimat.
2. Kata depan Indonesia ada di depan kata benda (*di rumah*); partikel Korea menempel di belakangnya (집에).
3. 저 dan 나 itu seperti *saya* dan *aku*: pilihannya tergantung lawan bicaramu.
4. Orang Indonesia bilang *rumah besar*; orang Korea bilang 큰 집. Yang menjelaskan selalu di depan.
5. Bagus! Ulangi kartu-kartu ini besok supaya tidak lupa.

The Hangul in these samples is illustrative only. A real row keeps the English row's Hangul (§3.6).

### 3.4 Glossary (closed list)

| Idea | Use exactly | Not |
|---|---|---|
| 은/는, 이/가, 을/를, 에, 도… | **partikel** (gloss once per lesson: "kata kecil yang menempel di belakang kata benda") | postposisi, penanda (alone) |
| 은/는 / 이/가 / 을/를 | **penanda topik / penanda subjek / penanda objek** | marka |
| *di, ke, dari, pada* | **kata depan** (comparisons only) | preposisi |
| subject / object | **subjek / objek** | pelaku |
| noun / verb | **kata benda / kata kerja** | nomina, verba |
| 크다, 좋다 | **kata sifat** (once: "kata sifat Korea berubah seperti kata kerja") | kata kerja sifat |
| 가 in 가다 | **kata dasar** (roadmap) | batang, stem |
| 가다 | **bentuk kamus** | infinitif |
| -아요, -았어요, -고 | **akhiran** | sufiks |
| 가요 | **bentuk 요** | |
| speech levels | **tingkat tutur**: **bentuk formal** (-습니다), **bentuk sopan** (bentuk 요), **bahasa santai** (반말, named once as "반말 (banmal)") | informal, kasar |
| -(으)시-, 드시다 | **bentuk hormat** (roadmap) | honorifik |
| 개, 명, 잔 | **kata penggolong** (roadmap; school term for *seorang, seekor*) | classifier, satuan |
| 하나 / 일 | **bilangan asli Korea / bilangan Sino-Korea** | angka Cina; *angka* = digits only |
| ㅏ / ㄱ / 받침 | **vokal / konsonan / konsonan akhir (받침, batchim)** | huruf hidup / mati |
| Hangul block / syllable | **blok** (once: "satu blok = satu suku kata") / **suku kata** | |
| ㅋㅌㅍㅊ / ㄲㄸㅃㅆㅉ / ㄱㄷㅂㅈ | **konsonan berembus / tegang / dasar** | konsonan ganda |
| *e* of *enam* / of *sate* | ***e* pepet / *e* taling**, always with the anchor word | schwa |
| final glottal stop | **hentian** (once: "seperti bunyi akhir *tidak*") | glottal stop |
| 연음 / 비음화 / both | **penyambungan bunyi / nasalisasi / perubahan bunyi** | liaison, asimilasi |
| the Latin line | **romanisasi** | cara baca |
| 뭐, 어디 / 안, 못 | **kata tanya / bentuk negatif** | |
| 씨, 님, 오빠; *Pak, Kak* | **sapaan** | gelar (for family words) |
| 그리고, 그래서 / 좀, 혹시 | **kata sambung / pelunak** | konjungsi |
| 들; *buku-buku* / time words | **jamak / keterangan waktu** | plural |
| *sudah, sedang, akan, belum* | **penanda waktu** (`id.md`) | aspek |
| past / present / future | **bentuk lampau / bentuk sekarang / bentuk masa depan** (roadmap) | tense, kala |
| loanword | **kata serapan**; for look-alikes say "mirip *kopi*", never "berasal dari" | |

### 3.5 Interface names and the course `ui.json`

**Names as in `tools/i18n/id/ui.json`:**
- tabs **Hari ini, Pelajaran, Latihan, Ulang, Progres**;
- buttons ***Sudah tahu, Lagi, Periksa, Jelajahi, Frasaku***;
- nouns *kartu, dek, sesi*.

**App features:**
- Stroke replay works (spec v1.1 §8; es REVIEW), so keep "Tap a letter to replay" (*Ketuk huruf untuk memutar ulang goresannya*).
- **Drop** the `sound-changes` line "open Read and try the 🔀 Sound changes drill", and point to *Pelajaran / Ulang*.
- Never name the *Baca* tab and never promise a drill.

**Course `ui.json` (w1 or the lead).** The Indonesian pack was written for id-en, so it says *bahasa Inggris* where this course needs *bahasa Korea*, and *Cara baca* where this course says *romanisasi*. Override the 14 `uiKeys` of `target/ko/trainer.json` and every key whose id text says *bahasa Inggris* or *Cara baca* [inference: wording]. In each:
- *bahasa Inggris* → *bahasa Korea* (Korean starter → *Bahasa Korea dari nol*; Korean progress → *Progres bahasa Korea*; What do you want Korean for? → *Untuk apa kamu belajar bahasa Korea?*; the share line keeps 🇰🇷);
- "type it in Hangul" / "Can you already read Hangul?" → *ketik dalam Hangul* / *Apakah kamu sudah bisa membaca Hangul?*;
- Read 한→en / Recall en→한 → *Baca 한→id / Ingat id→한*;
- Hangul drill → *Latihan membaca Hangul*; How a block is built → *Cara blok dibentuk*; the block line → *(han). Vokal tegak (ㅏㅓㅣ) ada di kanan konsonan; vokal mendatar (ㅗㅜㅡ) di bawahnya. Konsonan akhir selalu di bawah.*;
- Search a pattern… → *Cari pola, mis. 에서 atau "ingin"*;
- every *Cara baca* → *Romanisasi / romanisasi*.

**`trainer.json`** is written by the lead (spec §9), not the writers. Proposed `hangul.alt` [inference; check against spec §10.3]:
- ㅊ `c`, ㅉ `cc`;
- `sh` += `sy`;
- `input.fold`.
- Never add ㅓ `o` or `e`: they collide with ㅗ and ㅔ.

### 3.6 Format constraints

- **Hangul set-equality** (spec §6): no Korean added, none dropped.
  - The only planned waiver is `"_waive":["hangul"]` + `_note` on the `hangul` row of `lessons.jsonl`, for the reading guide's jamo.
- **Deck labels are progress keys:**
  - unique; never *Frasaku* / "My phrases";
  - never starting with "Hangul" or "Pronunciation": **Vokal (Hangul), Konsonan (Hangul), Lanjutan (Hangul)**.
  - Proposed list (w1 may polish before the merge, never after): Tips pelafalan · Frasa penting · Perkenalan · Frasa penting 2 · Tanya tempat · Kafe & minimarket · Angka sehari-hari · Kata penggolong · Cuaca & perasaan · Kata sambung · Dokter & apotek · Tempat tinggal & urusan · Bentuk hormat · Tempat & gedung · Hobi · Makanan · Minuman · Kegiatan · TV & hiburan · Posisi & arah · Kata kerja inti · Partikel · Bilangan · Kata-kata manis · Ucapan imut · Pendekatan · Chat santai · Keren & semangat · Nongkrong · K-pop & fandom · Medsos & bahasa gaul · Hubungan lebih serius · Kerja & kantor · Basa-basi · Memesan makanan · Arah & transportasi · Waktu & hari · Keluarga & orang · Kata sifat · Frasa drakor.
  - Groups: **Dasar, Sehari-hari, Kosakata, Tata bahasa, Sosial**.
- **Other limits:**
  - keep the single ` / ` in dialogue glosses;
  - blanks `__` stay;
  - no braces;
  - `q p why hint` ≤ 400 characters, options ≤ 200;
  - no two options identical after translation (watch *kamu / Anda*, *tidak / bukan*);
  - never a space + `on` + letters + `=` in a lesson body.

### 3.7 Fixed phrases (one gloss everywhere)

| Korean | Gloss | Note |
|---|---|---|
| 안녕하세요 | *Halo* | any hour, unlike *selamat pagi / malam* |
| 안녕히 가세요 / 안녕히 계세요 | ***Selamat jalan*** / ***Selamat tinggal*** | exact split: to the one leaving / said by the one leaving [practitioner: [Babbel](https://babbel.com/en/magazine/goodbye-in-indonesian)] |
| 처음 뵙겠습니다 / 반가워요 | *Salam kenal* (formal) / *Senang bertemu* | |
| 감사합니다 / 고마워요 / 고마워 | *Terima kasih* (formal / sopan) / *Makasih* (santai) | |
| 죄송합니다 / 미안해요 / 미안해 | *Mohon maaf* / *Maaf* / *Maaf, ya* | |
| 괜찮아요 / 괜찮아 | *Tidak apa-apa* / *Nggak apa-apa* | |
| 잘 부탁드립니다 | *Mohon bantuannya* | work-email card may say *Mohon kerja samanya* (with a note) |
| 수고하세요 | *Selamat bekerja* | to people staying at work [unverified] |
| 수고하셨습니다 / -셨어요 | *Terima kasih atas kerja kerasnya* | to superiors; never *Kerja bagus* to a boss (es-ko fix 1) |
| 수고했어(요) | *Kerja bagus* | peers and juniors |
| 잘 먹겠습니다 / 잘 먹었습니다 | *Terima kasih, saya makan, ya* / *Terima kasih, makanannya enak* | no equivalent; the lesson says so [unverified] |
| 맛있게 드세요 | ***Selamat makan*** | the real match: said to the eater |
| 화이팅 / 저기요 | *Semangat!* / *Permisi* | |
| -자 / -(으)ㄹ까요? / -(으)ㄹ래요? | *Yuk, …!* / *Bagaimana kalau kita …?* / *Mau …?* | |
| -(으)ㄹ게(요) | *…, ya* as a promise (*Nanti saya telepon, ya.*) | |
| 혹시 | *kebetulan* (*Kebetulan ada menu bahasa Inggris?*) | [unverified] |
| 선생님 / 사장님 | *guru* / *bos, pemilik*; vocatives §3.2 | |
| 사원, 대리, 과장, 차장, 부장, 팀장, 사장/대표 | *staf, asisten manajer, manajer, wakil kepala bagian, kepala bagian, ketua tim, direktur* | ranks vary [unverified] |
| 네 / 응 | *Ya* / *Iya* (santai) | |
| 미국에서 왔어요 | *Saya dari Amerika Serikat* | §9 |

## 4. Bridges and where they break

All [inference] unless tagged. Use each bridge in the lesson named in §7.

- **4.1 Word order.** Indonesian S–V–O vs Korean S–O–V. Both drop an obvious subject (*Sudah makan? — Sudah.*).
- **4.2 Before vs after.**
  - *di / ke / dari* precede the noun; particles follow it (에 집 ✗ → 집에 ✓).
  - **Half-bridge:** the school *partikel* *-lah, -kah, -pun* already glue on **after** a word; *Saya pun* ≈ 저도.
  - Neither language has articles, and both make the plural optional (*buku-buku* / 들).
- **4.3 *di / ke / dari / pada* ↔ 에 / 에서.**
  - *ke rumah* → 집에 (가요); *di rumah* (ada) → 집에 (있어요).
  - *di kafe* (belajar) → 카페에서; *dari Amerika* → 미국에서.
  - (*pada*) *akhir pekan* → 주말에.
  - *ke* and *dari* are clean. **The trap is that *di* splits:** 에 with *ada / tidak ada*, 에서 with an activity.
  - Rule for `particles`: "Lihat kata kerjanya: *ada, tidak ada, pergi, datang* → 에; kegiatan → 에서."
- **4.4 *ada / tidak ada / bukan*, no copula.** A very strong bridge:

| Indonesian | Korean | Job |
|---|---|---|
| *Saya mahasiswa* (*adalah* optional) | 학생이에요 | A = B |
| *Saya ada di rumah* | 집에 있어요 | being somewhere |
| *Ada kucing* | 고양이가 있어요 | existing |
| *Tidak ada waktu* | 시간이 없어요 | not existing |
| *Saya bukan mahasiswa* | 학생이 아니에요 | A ≠ B |
| *Saya tidak pergi* | 안 가요 | not doing |

  - The **break**: standard "have" is *punya*, but Korean uses 있어요, as in colloquial *Saya ada mobil*.
- **4.5 Topic and subject.**
  - 은/는 ≈ topic ***kalau***: *Kalau saya, suka kopi*. Contrast: *Kalau kopi suka, kalau teh nggak*.
  - 이/가 for "who / which" ≈ the ***yang*** cleft: *Minsu yang datang* ≈ 민수가 왔어요.
  - Offer this as a feel, not a rule.
- **4.6 Time words, not tense.**
  - Indonesian verbs never change; Korean must mark tense even with a time word: *Kemarin saya pergi* → 어제 가요 ✗ → 갔어요.
  - ***belum*** = 아직 안 + **past** (*Saya belum makan* = 아직 안 먹었어요).
  - *sudah* is not a word to translate.
  - The Korean present can mean the near future (내일 가요).
  - Prompts therefore need cues (§8).
- **4.7 Pronouns.**
  - ***saya / aku* = 저 / 나**, chosen by relationship.
  - Titles instead of "you" (*Bapak mau ke mana?*) ≈ 선생님 / name + 씨.
  - **Trap: *Anda* ≠ 당신.** Korean drops "you" or uses a title.
  - *dia* is gender-neutral.
  - *kami / kita* both → 우리; 우리 엄마 ≈ *ibu kami*.
- **4.8 Demonstratives.**
  - *ini / itu* is two-way; 이 / 그 / 저 is three-way (a trap).
  - *sini / situ / sana* **is** three-way and maps onto 여기 / 거기 / 저기: use it to teach 그.
  - Order trap: *rumah ini* vs 이 집.
- **4.9 Mirror-image noun phrases.**
  - *rumah besar, rumah saya, tas yang besar* → 큰 집, 제 집, 큰 가방.
  - Rule: "yang menjelaskan selalu di depan". *yang* ≈ -(으)ㄴ / -는, on the other side of the noun.
- **4.10 Numbers, counters, time.**
  - **One system vs two.** Hook: Jakarta money slang is Hokkien (*cepek* 100, *goceng* 5.000, ***ceban* 10.000, *goban* 50.000**) [practitioner: [detikFinance](https://finance.detik.com/moneter/d-6990321/cepek-berapa-ini-arti-dan-sebutan-angka-lainnya-dalam-bahasa-hokkien)]. Sino-Korean is also Chinese-origin and used for money, and *ban* = 10.000 = 만. Use it once, for recognition; never claim the words are the same.
  - ***ribu*** groups by 3 digits, 만 by 4. Rupiah prices are large too: drill 오만 원 = *lima puluh ribu*.
  - *jam tiga* / *tiga jam* ≈ 세 시 / 세 시간. Hours take native numbers (삼 시 ✗); minutes take Sino-Korean.
  - Age is native: *dua puluh lima tahun* → 스물다섯 살.
  - **Counters:**
    - Indonesian has *kata penggolong* too (*seorang, seekor, dua gelas kopi*): the idea is a bridge, **the order is the trap** (number–counter–noun vs 커피 두 잔).
    - *se-* ≈ 한, and native numbers shorten before counters.
    - Indonesian often drops the counter (*dua kopi*); Korean does not.
- **4.11 Kinship address.**
  - *Kak, Mas, Mbak, Bang, Dek, Pak, Bu* already work outside the family. *Adik* = 동생 (both gender-neutral).
  - **Trap 1:** 형 / 누나 (men) vs 오빠 / 언니 (women); *Kak* never changes. Fans hear 오빠 everywhere: tell men to say 형.
  - **Trap 2:** *Mas / Mbak* for waiters ≠ Korean 저기요 / 사장님 / 기사님.
  - 씨 has no Indonesian match; it never goes on your own name.
- **4.12 Politeness devices.**
  - Indonesian marks respect with words (*saya / aku, Anda / kamu, Bapak / Ibu, tolong / silakan / mohon*); Korean marks it on **every verb**.
  - ***tolong* vs *silakan*** = -아/어 주세요 ("for me") vs -(으)세요 ("for you"): exact.
  - ***beliau*** honours the person talked about, not the listener, as -시- does (할머니가 가세요). Neither is used for oneself (저는 가세요 ✗).
  - Optional one line for Javanese speakers: krama inggil *dhahar / sare* vs *mangan / turu* ≈ 드시다 / 주무시다 vs 먹다 / 자다 [inference; not opened].
- **4.13 Other bridges.**
  - Verbs don't change for the person.
  - Adjectives are predicates (*Kopinya panas* / 커피가 뜨거워요).
  - Question words stay in place in speech (*Kamu tinggal di mana?*), and yes/no questions rise. There is no *apakah* in Korean.
  - *tidak* sits before the verb, like 안; *tidak bisa* = 못; *tidak tahu* = 몰라요; *jangan* = -지 마세요.
  - *mau / ingin* come before the verb, -고 싶어요 after.
  - *suka* takes a bare object, but Korean splits it into 을/를 좋아해요 and 이/가 좋아요 (§5.5).
  - *harus* ≈ -아/어야 해요; *boleh* ≈ -아/어도 돼요; *tidak usah* ≈ 안 -아/어도 돼요.
  - *lebih … daripada* ≈ 보다 더 (보다 follows the noun); *paling* ≈ 제일.
  - *dan / lalu, tapi, jadi / karena* ≈ -고, -지만, -아/어서. **Trap:** *karena* gives the reason second; Korean gives it first (바빠서 안 갔어요).
  - Look-alike loans: 커피 *keopi* ≈ *kopi*, 버스, 택시.

## 5. Error zones, ranked

Ranking [inference]: measured first, then items in every sentence, then local items.

1. **Three-way stops.**
   - Errors: 탈 said as 달 or 딸; 커피 without a puff.
   - [research (ID L1), abstract only] Meutia et al. (2025): 40 Universitas Nasional students and 20 Koreans took a perception test on ㅋ ㅌ ㅍ. Koreans scored 98, second-years 43, third-years 38.5, with no difference between the two years (p = 0.612) ([JLA 8(2)](https://journal.ugm.ac.id/jla/article/view/105272)).
   - [convention] Indonesian *p t k* are unaspirated (Soderberg & Olson 2008).
   - Teaching scheme: Indonesian *b d g j* → plain; *p t k c* made tight → tense; add a puff → aspirated.
   - "Indonesian *p t k* ≈ tense" is [inference], with no production study found.
2. **Final ㄱ as a glottal stop.**
   - Errors: 한국어 said "hanguʔ-eo" (should be han-gu-geo); 한국말 not nasalised.
   - [research (ID L1), thesis record] Fonastia & Dessiar (2014), UGM vocational students: of the three nasalisation rules, the velar one caused the most errors ([record](https://ios.perpusnas.go.id/Record/IOS2744.131473/TOC)).
   - [convention] Indonesian syllable-final /k/ → [ʔ] (*becak*), except in some loans and regions (Soderberg & Olson).
   - The link between the two is [inference]: a glottal stop has no velar place to carry over or to nasalise.
3. **Vowels.**
   - [research (ID L1)] Shin (2016), 24 Indonesian beginners vs 20 Koreans, acoustic (abstract) ([KCI](https://scholar.kyobobook.co.kr/article/detail/4010026132856)):
     - **ㅗ / ㅜ less rounded**;
     - ㅓ higher (women) or further forward (men);
     - ㅏ higher and further forward;
     - ㅡ lower (the Korean abstract says learners, the English says female learners).
   - [inference] Both shifts move toward the *e pepet* of *enam*. The guide uses *enam* as a point to move **away** from.
   - Sundanese spells /ɨ/ *eu* (about 32 million speakers) [convention: [Wikiwand](https://www.wikiwand.com/en/Sundanese_language)]: close to ㅡ, also written *eu* in RR.
   - ㅐ = ㅔ = *e taling* (*sate, meja*): no trap.
4. **Romanisation misread** [inference]:
   - Indonesian *ng* is always one sound, so *hangeul* (한글) becomes ha-ngeul;
   - *ae / eo / eu / oe* are read as two vowels (cf. *daerah*), and *oe* as old-spelling *u*;
   - *kk / tt / pp* are read long;
   - *r* is trilled (Indonesian /r/ is normally a trill [convention]), but ㄹ between vowels is one tap.
   - RR *g, j, h, l, s* read correctly: say so, to save attention.
5. **이/가 vs 을/를.**
   - Errors: 커피가 좋아해요; particles dropped.
   - [research (ID L1)] Airulsari & Hanani (2024), 93 UGM second-semester essays ([EAR 2(1)](https://jurnal.ugm.ac.id/v3/ear/article/view/12204)):
     - 이/가: 36 errors (61% substitution, 36% omission);
     - 을/를: about 30 (67% / 33%); the paper's totals are inconsistent;
     - the authors' cause: misjudging the predicate's word class.
   - [research (ID L1), abstract] Cuajaya & Usmi (2022), UI, n not given ([Kata 6(2)](https://publikasi.lldikti10.id/index.php/kata/article/view/1552)): substitution 48.47%, omission 33.05%, addition 18.48%; nominative errors the largest share (39.47%).
   - [inference] *suka* is one word for 좋아해요 + 을/를 and 좋아요 + 이/가: teach them as a pair.
6. **에 vs 에서 from one *di*:** 카페에 공부해요, 집에서 있어요 [inference; no Indonesian study found].
7. **Mirror-image order:** 집 큰, 집 제, 집 이, 두 커피 [inference].
8. **Tense:** 어제 가요; 아직 안 먹어요 from *belum* [inference].
9. **Address** [inference]:
   - 당신 for *Anda*;
   - 반말 too early (*aku / kamu* comes fast among peers);
   - 오빠 / 언니 said by men, or to staff;
   - 저는 가세요.
10. **Numbers:** 삼 시, 오십천 원, 이십오 살 [inference].

## 6. Reading guide

**Placement** (as in tl-ko):
- the full guide goes in the `hangul` body (waiver for the jamo in brackets);
- `sound-changes` repeats linking, finals, *ng* and nasalisation;
- the three Hangul deck descriptions use §6.2 verbatim;
- cards ko.c0001–ko.c0060 use the same anchors: *sate, meja, enam, toko, cari, jalan, sakit, tutup, tidak, datang, lihat*.

Never compare with English.

### 6.1 The guide, in Indonesian (ready to paste; [inference], native check §11)

> **Cara membaca romanisasi**
>
> Huruf Latin di bawah setiap baris Korea adalah romanisasi. Ejaan ini dibuat untuk pembaca bahasa Inggris, tetapi sebagian besar bisa kamu baca seperti bahasa Indonesia: **g, d, b, j, h, s, l, n, m** dibaca seperti biasa. Perhatikan yang berikut.
>
> **Vokal**
> - **a, i**: seperti bahasa Indonesia.
> - **e** (ㅔ) dan **ae** (ㅐ): bunyinya sama, seperti *e* taling pada *sate* atau *meja*. **ae** bukan a-e.
> - **o** (ㅗ): seperti *o* pada *toko*, tetapi bibir lebih bulat dan lebih maju.
> - **u** (ㅜ): bibir dibulatkan penuh. *so* dan *su* adalah kata yang berbeda.
> - **eo** (ㅓ): **satu vokal**, bukan e-o. Mulailah dari *e* pepet pada *enam*, lalu buka mulut lebih lebar dan tarik suaranya ke belakang. Bibir tidak bulat. Ini bukan *o*: *seo* (ㅓ) dan *so* (ㅗ) berbeda. *Seoul* dibaca seo-ul, dua suku kata.
> - **eu** (ㅡ): **satu vokal**, bukan e-u. Ucapkan *u* sambil tersenyum, bibir datar; lidah lebih tinggi daripada *e* pada *enam*. (Kalau kamu bisa bahasa Sunda: dekat dengan *eu* pada *beureum*.)
> - **ui** (ㅢ): *eu* dan *i* dengan cepat, satu suku kata. **oe** (ㅚ): dibaca "we", bukan *u* seperti ejaan lama.
> - **ya, yeo, yo, yu, ye, wa, wo, wi, wae, we**: masing-masing satu suku kata. Pasangan vokal lain dibaca terpisah: *kapeeseo* = ka-pe-e-seo.
>
> **Konsonan**
> - **g, d, b, j** (ㄱ ㄷ ㅂ ㅈ): seperti *g, d, b, j* Indonesia, ringan di awal kata. **j** seperti pada *jalan*.
> - **k, t, p, ch** (ㅋ ㅌ ㅍ ㅊ): **dengan embusan napas**. Taruh telapak tangan di depan mulut: harus terasa angin. *k, t, p, c* Indonesia tidak berembus, jadi embusannya harus kamu tambahkan. **ch** = *c* pada *cari* ditambah embusan.
> - **kk, tt, pp, jj** (ㄲ ㄸ ㅃ ㅉ): **bukan bunyi panjang**. Mirip *k, t, p, c* Indonesia, tanpa embusan, tetapi lebih tegang: kencangkan tenggorokan.
> - **s** (ㅅ): sebelum *i* menjadi *sy*: *si* = "syi". **ss** (ㅆ): *s* yang tegang.
> - **h**: selalu diucapkan, tetapi di antara vokal sering melemah, seperti *lihat* menjadi *liat*.
> - **r** (ㄹ di antara vokal): *r* satu ketukan, **jangan digetarkan**. Di akhir suku kata dibaca **l**: *mul* (air). **ll** = *l* yang ditahan.
> - **ng** (ㅇ di akhir suku kata): seperti pada *datang*. Di awal suku kata, ㅇ tidak berbunyi.
> - **Awas *ng* di tengah kata:** kalau Hangul-nya ㄴ lalu ㄱ, bacanya *n* + *g*: *hangeul* (한글) = han-geul, bukan ha-ngeul.
> - **f, v, z** tidak ada: *kopi* menjadi *keopi* (커피).
>
> **Konsonan akhir**
> - **t, p**: lidah atau bibir menutup lalu **berhenti, tanpa dilepas**, seperti akhir *sakit* dan *tutup*. *bap* (nasi): bibir menutup, selesai.
> - **k**: **bukan** hentian seperti akhir *tidak*. Pangkal lidah benar-benar menempel ke langit-langit belakang, tetapi tidak dilepas: *bak* (luar).
> - Hanya tujuh bunyi yang bisa ada di akhir: k, n, t, l, m, p, ng.
>
> **Tiga aturan**
> 1. **Konsonan akhir pindah ke vokal berikutnya**: *hangugeo* = han-gu-geo. Jangan berhenti dengan hentian sebelum vokal.
> 2. **Tidak ada tekanan kata**: semua suku kata sama kuat. Untuk bertanya, naikkan nada di akhir, seperti dalam bahasa Indonesia lisan.
> 3. **Romanisasi menulis bunyi, bukan ejaan**: 감사합니다 ditulis *gamsahamnida*. Untuk berbicara, ikuti romanisasi; untuk menulis, ikuti Hangul.

### 6.2 Deck descriptions (same words)

- **Vokal (Hangul):** "eo, eu dan ae masing-masing satu vokal. eo bukan o; eu = u sambil tersenyum; ae dan e = e pada *sate*."
- **Konsonan (Hangul):** "g, d, b, j seperti bahasa Indonesia; k, t, p, ch dengan embusan; r tidak digetarkan; di akhir suku kata dibaca l."
- **Lanjutan (Hangul):** "kk, tt, pp, ss, jj: tegang, bukan panjang; seperti k, t, p Indonesia tetapi lebih kencang."

These lines contain no Hangul, because the English deck descriptions have none. Each line should keep the English description's own content as well: add these lines to it, never use them in its place.

## 7. Lessons: fixed titles and Indonesian angle

The titles below are fixed. They keep the English titles' Hangul and use the roadmap's vocabulary. Cross-references give number and title: *lihat pelajaran 32, "Meminta dengan sopan"*.

| # | id | Title | Indonesian angle (bridge / trap) | Rewrite, don't translate |
|---|---|---|---|---|
| 1 | `hangul` | 1 · Hangul dalam sekali duduk | §6.1; ㅓ / ㅡ vs *enam*; rounder ㅗ / ㅜ; *ng* across syllables | vowel table "eo (uh), u (oo)…" → Indonesian anchors; keep the replay line; waiver |
| 2 | `polite` | 2 · Tingkat kesopanan | 요 ≈ speaking with *saya*, 반말 ≈ *aku*, -습니다 ≈ announcement Indonesian (*Mohon perhatian*); break: on every verb, and 요 stays with same-age strangers | headers *Formal / Sopan / Santai* |
| 3 | `meet` | 3 · Berkenalan | *Salam kenal*; age asked to choose the speech level, as Indonesians ask to choose *Kak / Dek*; *selamat jalan / tinggal* = 가세요 / 계세요 | goodbye logic; US line per §9 |
| 4 | `sound-changes` | 4 · Perubahan bunyi: mengapa 감사합니다 terdengar berbeda | linking without a stop; ㄱ nasalisation hardest (§5.2); ㅎ ≈ *liat* | respellings → RR + Indonesian syllable breaks; **drop** the drill line |
| 5 | `nouns` | 5 · Kata benda dan 은/는 | no articles, optional plural (same as Indonesian); 이 / 그 / 저 vs *ini / itu* + *sini / situ / sana*; 은/는 ≈ *kalau* | "no a / the, no -s" → "sama seperti bahasa Indonesia" |
| 6 | `isseoyo` | 6 · 있어요 dan 없어요 | §4.4 table; *punya* → 있어요 | the English "is" table |
| 7 | `pronouns-questions` | 7 · Kata ganti dan kata tanya | 저 / 나 = *saya / aku*; titles for "you"; *Anda* ≠ 당신; *Ini apa?* | English pronoun contrast |
| 8 | `verbbasics` | 8 · Kata kerja | no person endings; *Kopinya panas*; bentuk kamus, kata dasar | "to + verb" framing |
| 9 | `verbs` | 9 · Bentuk sekarang: bentuk 요 | 아요 / 어요 harmony is new; present = now, habit, near future | |
| 10 | `past` | 10 · Bentuk lampau: 았어요 / 었어요 | past needed even with *kemarin*; *belum* = 아직 안 + past (prose only, no new Hangul) | "I ate / have eaten" → *Saya makan kemarin / Saya sudah makan* = 먹었어요 |
| 11 | `future` | 11 · Masa depan dan rencana: -(으)ㄹ 거예요 | *akan*; also "probably" (*mungkin*) | "kkeoyeyo" → "kk tegang" |
| 12 | `sov` | 12 · Urutan kata dan 을/를 | S–V–O vs S–O–V; subject dropping in both | every "English is SVO" |
| 13 | `particles` | 13 · 에 dan 에서, plus peta partikel | §4.3: *ke* → 에, *dari* → 에서, ***di* splits**; *pada* ≈ time 에 | "English translates both as 'at'" → *di* |
| 14 | `negation` | 14 · Menyangkal: 안 dan -지 않아요 | *tidak* = 안 (same slot), *bukan* = 아니에요, *tidak ada* = 없어요: say it's a gift | |
| 15 | `do-man` | 15 · 도 dan 만: juga dan hanya | 도 ≈ *juga / -pun*, 만 ≈ *saja / hanya*; trap: *juga* floats, 도 replaces 은/는 / 이/가 / 을/를 | "either" → *Saya juga tidak pergi* |
| 16 | `sentences` | 16 · Menyusun kata benda dan kata kerja | the four shapes mirrored (*Saya mahasiswa*, *Kopinya enak*) | "English order" mistakes |
| 17 | `want-like` | 17 · Ingin dan suka: -고 싶어요, 좋아해요 | *mau / ingin* before vs -고 싶어요 after; ***suka* → 을/를 좋아해요 / 이/가 좋아요** (§5.5) | rebuild from *suka / mau / ingin* |
| 18 | `numbers` | 18 · Dua sistem bilangan | Hokkien money hook; *jam tiga / tiga jam*; native age; 만 vs *ribu* | "English counting"; "build like English digits" → "seperti *dua puluh lima*" |
| 19 | `food` | 19 · Makan di luar | *dua gelas kopi* → 커피 두 잔; 맛있게 드세요 = *Selamat makan*; 잘 먹겠습니다 has no match | |
| 20 | `getting-around` | 20 · Bepergian | *Tolong ke …* = -(으)로 가 주세요; the habit *Kiri, Pak!* ≠ 여기서 세워 주세요 | |
| 21 | `titles` | 21 · Sapaan gelar dan bentuk hormat | *Kak / Mas / Mbak* vs 형 / 오빠 / 누나 / 언니 by the speaker's gender; *Pak / Bu* + name ≈ 씨 / 님 | "(you female / you male)" → *kalau kamu perempuan / laki-laki* |
| 22 | `plans` | 22 · Membuat rencana | *Yuk!* = -자; *Bagaimana kalau kita…?* = -(으)ㄹ까요?; *Mau…?* = -(으)ㄹ래요? | the "Formal" column (-시- + 요) → *Sangat sopan* (es-ko fix) |
| 23 | `texting` | 23 · Berkirim pesan ala orang Korea | ㅋㅋ ≈ *wkwk*, ㅠㅠ ≈ *huhu*, KakaoTalk ≈ WhatsApp, unread "1" ≈ blue ticks | explain via WhatsApp |
| 24 | `counters` | 24 · Kata penggolong | Indonesian has them too: the idea bridges, the order flips; 한 ≈ *se-* | "two cups of coffee in English" → *dua gelas kopi* |
| 25 | `joining` | 25 · Menggabungkan kalimat: -고, -지만, -아/어서 | *dan / lalu, tapi, jadi*; reason first (trap from *karena*) | "and, but, so" |
| 26 | `story` | 26 · Bercerita tentang masa lalu | 먼저 *pertama*, 그리고 *dan*, 그다음에 *setelah itu*, 그래서 *jadi*, 그런데 *tapi*, 마지막으로 *terakhir*; past on every verb | connector glosses |
| 27 | `noun-modifiers` | 27 · Menjelaskan kata benda: 좋은 날씨, 큰 가방 | *rumah besar / tas yang besar* → all before the noun | "no that / which / who" → "tidak ada *yang* di belakang kata benda" |
| 28 | `compare` | 28 · Membandingkan: 보다, 더, 제일 | *lebih … daripada* ≈ 보다 더; *paling* ≈ 제일 | |
| 29 | `cant` | 29 · Tidak bisa, bisa, dan tidak tahu | *bisa / tidak bisa* ≈ 수 있어요 / 못; *tidak mau* ≈ 안; *tidak tahu* = 몰라요 | |
| 30 | `have-to` | 30 · Harus: -아/어야 해요 | *harus* before vs ending after; *tidak usah*; *boleh* | cross-ref → "pelajaran 32, 'Meminta dengan sopan'" |
| 31 | `honorific` | 31 · Kata kerja bentuk hormat | -시- honours the doer like ***beliau***; never on yourself; optional krama inggil line | "partner's parents" → *orang tua pacarmu* |
| 32 | `requests` | 32 · Meminta dengan sopan | ***tolong*** = -아/어 주세요; *Bisa tolong…?*; 혹시 ≈ *kebetulan*; 좀 ≈ *ya* | softener glosses per §3.7 |
| 33 | `office` | 33 · Bahasa Korea di kantor | *Pak / Bu* + name vs title alone (부장님); 잘 부탁드립니다 ≈ *Mohon bantuannya*; 수고 family per §3.7 | "Roughly" column → Indonesian job titles |

## 8. Prompt conventions

Every type-in or order prompt must lead to the accepted answers (`target/ko/practice.jsonl`, `a`) and to nothing else. Read the target row before writing `p`.

1. **Subject.** Copy the English brackets: "(I) went home" → "(Saya) sudah pulang".
2. **Tense.**
   - Use a time word **only if the Korean answer contains it**: *kemarin* 어제, *besok* 내일, *tadi* 아까, *sekarang* 지금, *hari ini* 오늘, *akhir pekan* 주말에.
   - Past with no time word in the answer: *sudah* + verb, or the tag **(lampau)** where *sudah* reads oddly, as in negatives: "(Saya) tidak makan (lampau)".
   - Future: *akan*. Present: a bare verb, or *sedang* for "right now".
   - **Never *belum*** unless the answer has 아직.
3. **Politeness.**
   - Translate the English tags.
   - An untagged prompt with 요 answers uses *saya* and no casual words.
   - A prompt with 반말 answers carries **(santai)** and may use *aku / kamu* and the §3.2 casual words.
   - Recipient cues: (kepada sopir taksi), (kepada orang yang lebih tua), (kepada teman dekat), (kepada rekan kerja senior), "Tentang dirimu sendiri:".
4. **Requests:** the §3.2 table without exception. *Minta / Tolong / Silakan* **is** the cue. "(soften it with 좀)" → "(lunakkan dengan 좀)".
5. **"You":** §3.2 rule 3. Check:
   - `honorific.13` → *Kepada orang yang lebih tua: "Mau ke mana?"* (no *Bapak*);
   - `titles.13` → *Kepada rekan kerja 지은: "Jieun, ada waktu?" (sopan)*.
6. **Pattern cues** keep their Korean: "(pakai -(으)ㄹ까요)", "(pakai 못)", "(tulis angkanya dengan Hangul)".
7. **Names and places** (Kii, Minsu, 지은, Seoul, Myeongdong) are written exactly as in the English prompt, in Latin or Hangul. No Indonesian substitutes. Prose may say Jakarta or Surabaya where the English says "your city".
8. **Numbers** use digits with the thousands point ("Ini 50.000 won"). Indonesian word order in the prompt (*dua gelas kopi*), Korean order in the answer.
9. **Multiple choice:** no two options may become identical, and a prose option stays prose.

## 9. Localisation and "I'm from the US"

- **Follow the row as given.** The Korean half is moving to a blank "I'm from ___" plus a Countries deck. Gloss whatever the current row says:
  - 미국에서 왔어요 → *Saya dari Amerika Serikat*;
  - a blank row → *Saya dari ___* (blank kept);
  - country cards → standard Indonesian names (§3.1).
- **Rows tied to the US today:** ko.c0077, ko.c0617 (미국 사람 = *orang Amerika*), ko.g021 (*Dari mana? / Dari Amerika Serikat. Oklahoma.*), ko.s0012, ko.s0127, ko.p005, meet.06, particles.03.
- **Prose** may suggest *Indonesia* or the learner's city in Latin letters, with no 인도네시아 (no waiver planned).
- **Local references:** rupiah for money comparisons; WhatsApp, Instagram, TikTok; KRL, MRT Jakarta, TransJakarta, ojek online.
- **No added halal, pork or alcohol remarks.** Keep the English facts (소주, 회식).

## 10. What NOT to do

1. **No Korean beyond the source row.** The Hangul set must equal the English row's. The only planned waiver is `hangul`; any other needs a `_note` saying why prose could not do it.
2. **No English left in:** none in glosses, notes, tables or headers, and no English sound comparisons ("as in father").
3. **No invented etymologies.** Keep the English half's claims as written and add none. Indonesian look-alikes are "mirip", never "berasal dari".
4. **Nothing added the Korean lacks:** no *Bapak / Ibu / Kak* or *Anda* where the Korean has no title or honorific, and no *aku / kamu* or casual words in polite glosses.
5. **No drill, trainer or *Baca* promises.** Stroke replay is fine.
6. **No second gloss** for a §3.7 phrase, **no second term** for a §3.4 idea, **no deck relabelled** after the merge.
7. **No slang or regional words as the taught gloss.** Javanese and Sundanese appear only as the optional notes in §4.12 and §6.1.
8. **No time word absent from the answer**, and **no *belum*** without 아직.
9. **No romanisation "fixes":** romanisation is target-side.

## 11. Gaps and review

**Unverified or inferred:**
- **Not found:** studies of Indonesian learners' 에 / 에서 errors, speech levels or honorifics, or tense-stop production. "Indonesian *p t k* ≈ tense" is inference.
- **Weak sources:**
  - Meutia 2025: abstract only, perception, ㅋ ㅌ ㅍ only;
  - Shin 2016: abstracts disagree on ㅡ;
  - Fonastia & Dessiar 2014: record only; the glottal-*k* link is inference;
  - Aju 2024: the test is not named.
- **Not opened:** *kata penggolong* as the school term (the shipped roadmap uses it), *Tiongkok* as the official form, Javanese *dhahar / sare*, Sundanese *beureum*.
- **Practitioner knowledge, unverified:** *Selamat bekerja*, *kebetulan*, the 잘 먹겠습니다 gloss, *wkwk / huhu*, and the job titles.
- **Excluded** as Korean learners of Indonesian: Cho 2025, Muliastuti et al. 2019, Naufalia et al. 2021. Adinda et al. 2022 (11 learners, acoustic values only) was not used for ranking.
- **Every Indonesian sentence** in §3, §6 and §7 is unchecked.

**Questions for an Indonesian reviewer** (answer "OK", or give the natural form):
1. Does the §3.3 voice with *kamu* sound right for an app tutor?
2. Are the §3.4 terms clear (*kata dasar, bentuk kamus, bentuk hormat, kata penggolong, berembus / tegang / dasar*)?
3. Tags (formal) (sopan) (santai) (hormat): would *(informal)* be better than *(santai)*?
4. Does *Anda* only on honorific lines read naturally (*Siapa nama Anda?* (hormat))?
5. *Minta* / *Tolong* / *Silakan*: natural and distinct?
6. §3.7: *Salam kenal, Mohon bantuannya, Selamat bekerja, Terima kasih atas kerja kerasnya, Kerja bagus*: right for each situation?
7. §6.1 anchors: *sate / meja, enam, toko, cari*. Is *beureum* the best Sundanese *eu* word?
8. Is the final-*k* line true for your speech? Did you read *hangeul* as ha-ngeul before the warning?
9. Does "은/는 ≈ *kalau…*, 이/가 ≈ *…yang*" help or confuse? Is *ceban / goban* known outside Jakarta?
10. *wkwk* for ㅋㅋ, *huhu* for ㅠㅠ: current and national?

## Sources

Opened 2026-11-23:
- [Shin, W. (2016), *학습자중심교과교육연구* 16(6)](https://scholar.kyobobook.co.kr/article/detail/4010026132856)
- [Meutia, F. et al. (2025), *JLA* 8(2)](https://journal.ugm.ac.id/jla/article/view/105272)
- [Fonastia, M. & Dessiar, A. R. (2014), UGM](https://ios.perpusnas.go.id/Record/IOS2744.131473/TOC)
- [Airulsari, A. & Hanani, I. (2024), *East Asian Review* 2(1)](https://jurnal.ugm.ac.id/v3/ear/article/view/12204)
- [Cuajaya, D. R. & Usmi (2022), *Jurnal Kata* 6(2)](https://publikasi.lldikti10.id/index.php/kata/article/view/1552)
- [Adinda, R. et al. (2022), *Sasindo* 10(2)](https://openjournal.unpam.ac.id/index.php/Sasindo/article/view/26923)
- [Soderberg, C. D. & Olson, K. S. (2008), Indonesian, *JIPA* 38(2)](https://core-prod.cambridgecore.org/core/services/aop-cambridge-core/content/view/AE405481B94A4E0B7234A8BBE9C6F5FD/S0025100308003320a.pdf/indonesian.pdf)
- [Wikiwand: Sundanese language](https://www.wikiwand.com/en/Sundanese_language)
- [Babbel: Goodbye in Indonesian](https://babbel.com/en/magazine/goodbye-in-indonesian)
- [detikFinance: angka Hokkien](https://finance.detik.com/moneter/d-6990321/cepek-berapa-ini-arti-dan-sebutan-angka-lainnya-dalam-bahasa-hokkien)
- [Aju News (2024)](https://www.ajunews.com/view/20241014083042023)

Local files: the spec, `docs/profiles/{tl-ko,id,en-id}.md`, the tl-ko brief and README, the es REVIEW, `native/en/ko/` (tables and three bodies), `native/{es,tl,ceb}/ko/lessons.jsonl`, `target/ko/practice.jsonl` and `trainer.json`, `tools/i18n/id/{ui,roadmap}.json`.
