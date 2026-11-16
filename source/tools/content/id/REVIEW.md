# id-en cold review (ID-REVIEWER), 2026-11-16

**Scope.** Everything under tools/content/id except profile.json and the deviations files, plus the `t` fields of tools/i18n/id/ui.json and tools/i18n/id/roadmap.json. No generator, pack, src/app.html or other language was touched. build.sh was not run and nothing was committed.

**Status.** Every check passes on scratch outputs:
- content: `gen.js id`, `validate.js id` (PASS: all checks OK) and `parity.js id` (PASS: shared English side matches ko-en);
- interface: i18n `gen.py id` and `validate.js id` (PASS);
- roadmap: `road.py check id` (425/425).

Also checked:
- `node --check` passes on every JS file in the folder, including the new pron_check.js.
- There is no Hangul anywhere under tools/content/id.
- Only `t` values changed in ui.json and roadmap.json; both files keep their original JSON layout.

**Read in full:** all 41 lessons (bodies, checks, practice prompts, `why`, `hint`), 404 cards, DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS and meta.js. In the interface: all 768 exact strings, 271 patterns and 425 roadmap titles.

## 1. What changed (56 content edits, 56 interface strings, 11 roadmap titles)

### Teaching accuracy: 15
- **pron, vowel key.** «é: e seperti pada *enak*» → «seperti pada *meja*», in the table and in the vowel section. KBBI gives *enak* with é, but many speakers say it with a schwa (pepet), so I chose a less ambiguous example (top ten).
- **be, tip.** Before: «Apakah kalimat ini punya **tindakan**? Kalau ya, pakai do/does». That test fails for *like, live, want*, which have no action. After: «Selain to be, apakah kalimat ini punya kata kerja lain (like, live, work, want…)? Kalau ada, … pakai do/does. Kalau tidak ada (subjek langsung diikuti kata sifat, kata benda, atau tempat), pakai to be.» Changed to match:
  - the opening paragraph («Kalau tidak ada tindakan» → «Kalau tidak ada kata kerja lain»);
  - the table cell «tindakan, kebiasaan (makan, tinggal, suka)» → «semua kata kerja lain (makan, tinggal, suka, mau)»;
  - three be practice `why` lines, where «keadaan» → «kata sifat». The continuous lesson calls *like, know, want* «kata kerja yang menyatakan keadaan», so «keadaan → to be» would still give *I am like*.
- **countable, some / any.** The rule «kalimat tanya pakai any» contradicted the lesson's own *Can I have some water?* and *Would you like some tea?*. Added the request and offer exception.
- **to-ing, heading.** «-ing: kegiatan yang dinikmati atau diselesaikan» sat over *mind* and *keep*. It is now «-ing: setelah enjoy, finish, mind, keep, stop».
- **adjectives, check `why`.** «Kata pendek ditambah -er; konsonan terakhirnya ditulis dua kali» read as a general rule (*cheap* → *cheapper*). It now explains the doubling for *big* only and contrasts it with *cheaper*.
- **email, check `why`.** «Kata "suffer" … jangan dipakai» assumed the learner would reach for *suffer*, a trap from the Korean course's "thanks for your hard work" formula. It now just says why those options sound odd.
- **time-markers, mc `why`.** «walaupun kalimat Indonesianya tanpa penanda» was wrong (*kemarin* is a time word in the prompt) → «Ada "yesterday", jadi pakai V2. Kalau waktunya disebut, jangan pakai have + V3.»
- **phrasal, fill `why`.** «memakai bentuk jamak "eggs" saat habis» → «Telur bisa dihitung, dan yang habis bukan satu butir, jadi pakai bentuk jamak».
- **phrasal, blurb.** «Separuh percakapan penutur asli isinya ini» is an invented statistic → «Penutur asli memakainya di hampir setiap percakapan.»

### Card notes: 8
- *What's up?*: «Bukan bertanya soal "atas" (up)» was a Korean-course note → «Sapaan santai antarteman, bukan pertanyaan serius».
- *Where's gate 12?*: «Dalam bahasa Inggris nomornya di belakang» is also true of Indonesian (*Gerbang 12*) → how gate and seat numbers are read.
- *Bye!*: «"Bye-bye" antarorang dewasa terdengar kekanak-kanakan» was too strong → it now says *Bye-bye* sounds sweeter and is used with children or on the phone.
- *It's three thirty.*: added that *half four* is 4:30 in British English, which is why *setengah empat* must not be translated word for word.
- *Call 911!*: «Di Indonesia 112» → «112 (layanan darurat terpadu), 110 (polisi), 119 (ambulans)».
- *I'm 25 years old.*: «pakai "be", bukan "have"» (a Romance-language trap) → «bukan "My age is 25"», the Indonesian calque of *Umur saya 25 tahun*.
- *Can I get a name for the order?*: «Siapkan satu nama panggilan yang mudah» (Korean learners' English names) → «Kalau namamu panjang, sebut nama panggilan yang pendek dan mudah dieja».
- *Who's your bias?*: see the next section.

### K-pop references (profile §9): 3
- *Who's your bias?* note: «Istilah fandom K-pop yang juga akrab di Indonesia» → «Istilah fandom untuk anggota grup musik favorit. Di luar fandom, katakan: "Who's your favorite member?"». The card target is parity-bound (see §3).
- The DIALOG row for *Who's your bias?* («Definitely the main vocalist») was removed. DIALOG still has 85 rows, against the minimum of 60.
- meta.js DESC «Film, serial & slang»: «serial, fandom K-pop, dan media sosial» → «film, serial, dan media sosial».

### Prompts and accepted answers: 11
- **Shared lessons, prompt made more specific** (accepted answers are parity-bound):
  - articles, type «Ayo makan siang bersama.» → «Ayo makan siang.» *Let's have lunch together* was rejected.
  - email, type «Besok saya libur (tidak masuk kerja).» → «… pakai "off").» *I have a day off tomorrow* was rejected.
  - idioms, type «Semoga lancar, saya ikut berharap.» → «… (ungkapan menyilangkan jari)». *I hope it goes well* was rejected.
  - past, order «Tadi saya main dengan teman-teman saya» → «(Anak kecil bercerita) Tadi aku main dengan teman-temanku». Adults *hang out*. The deck note on *hang out* says «"play" untuk anak-anak», and *main* = *play* is a classic Indonesian calque.
  - past, type «Saya menonton film (lampau)» → «… pakai "watch")». irregular-past teaches *I saw a movie* for the same prompt, which was rejected here.
  - to-ing, type «Saya senang membaca buku» → «… (pakai "enjoy")». *I like reading books* was rejected.
  - relative, order «teman yang hobi memasak» → «teman yang bisa memasak», which matches *a friend who cooks*.
- **id-only lessons, answers added:**
  - indo-english «Saya perlu resep dokter»: also *I need a doctor's prescription* / *… a prescription from a doctor*.
  - indo-english «HP saya di mana?»: also *Where's my cell phone?*, which the deck teaches.
  - time-markers «Saya belum makan»: also *I haven't eaten*.
  - time-markers «Kamu pernah melihat salju?»: also *Have you seen snow*.

### Indonesian wording: 12
- **Register.** more/a1.js used informal *tapi* in its explanations while every other file uses *tetapi*. Changed 10 instances in lesson prose. *tapi* stays where it translates *but* in the joining lesson («Saya capek tapi senang»).
- **pron.** «cara membaca panduan cara baca» (blurb and heading) → «cara memakai panduan cara baca».
- **Checked and already uniform:**
  - the §3 terms (artikel, jamak, kata benda yang bisa dihitung, *to be*, V1/V2/V3, kata kerja bantu, preposisi (kata depan), kalimat tidak langsung, pengandaian);
  - no *kata sandang* or *plural* in Indonesian text;
  - *kamu* in the app's voice, and *Anda* only inside translations of service or office lines;
  - no slang in instructions;
  - every mc prompt keeps a cue frame (`… dalam bahasa Inggris?`, `Bahasa Inggrisnya …?`, `Mana …`, or the DSL's gap-fill frame).

### Respelling: 8 rows (rules in PRON-RULES.md, checker pron_check.js)
- **The writers' files were consistent word by word:** 0 phrase conflicts and 0 word conflicts. Main-verb *have* (hèv) vs auxiliary *have* (hev, ev after a modal) and main-verb *do* (duu) vs auxiliary *do* (de) were already right in every row.
- **Settled and applied:**
  - *or* → **er** everywhere. 5 cards changed: *Cash or card?* kèsy oor → kèsy er; *For here or to go?*; *Round trip or one way?*; *Window or aisle?*; *Thirteen or thirty?*.
  - *have to / has to* → **hèf te / hès te**, as heard and as the en-US audio says it. 2 rows changed, in modals.
  - sentence-final *me* → **mi** unless contrastive. *You mean a lot to me* changed; *It's on me* and *Me neither* keep **mii**.
- **Confirmed as written:**
  - *thirty* THER-ti (profile rule: keep t after r);
  - *be* bi, *been* bin, *her* her, *just* jast, *you'll* yul, *It'll* I-del;
  - weak *you / your / at / to / of* with strong forms only when stranded or stressed;
  - the names Indonesia in-de-NII-zye, Indonesian in-de-NII-zyen, Jakarta je-KAAR-te, Bandung BAAN-dung, Surabaya suu-re-BAI-e, Wijaya wi-JAA-ye.

### Interface: 56 `t` values in ui.json
- **Tab bar.**
  - "Progress" «Kemajuan» (8, does not fit) → **«Progres»** (7). KBBI has *progres*, and profile §2 already writes «progresmu».
  - To keep one word for one concept, every other «kemajuan / Kemajuan» in the interface became «progres / Progres» (36 strings). That covers the navigation references («Progres → Cadangan», «Pulihkan dari Progres») as well as «progresmu» and «Hapus semua progres».
  - "Drill" is kept: it is the glossary term (§10), it is common in Indonesian test-prep language («drill soal»), it fits, and it is distinct from «Latihan».
  - The bar now reads «Hari ini · Latihan · Ulang · Pelajaran · Drill · Progres · Masukan».
- **"Type" «Jenis» → «Ketik».** app.html also uses this key for the quiz-mode chip, which read «⌨️ Jenis EN». The feedback radiogroup's aria-label now reads «Ketik» (see §3).
- **Language-name slots.** `tgtName()` returns `Intl.DisplayNames('id')`, which is «Inggris», not «bahasa Inggris». So «ketik dalam {1}» rendered as «ketik dalam Inggris». Added «bahasa» before the slot in 11 patterns:
  - «Belajar bahasa {1}, 5 menit sehari»;
  - «Untuk apa kamu belajar bahasa {1}?»;
  - «Seberapa jauh kamu menguasai bahasa {1}?»;
  - «Ketik dalam bahasa {1}…»;
  - «Tidak ada keyboard bahasa {1}?»;
  - «Progres bahasa {1}»;
  - «Digabung ke kursus bahasa {1}…»;
  - «Sekarang belajar bahasa {1}…»;
  - and the share text.
- **Level titles aligned with meta.js TITLES.** Talker «Pembicara» → «Jago ngobrol», Pro «Jago» → «Profesional», Master «Ahli» → «Pakar». Before, the pack and the interface named the same level differently.
- **Plan and goal labels aligned with meta.js:**
  - «Perjalanan ke luar negeri» → «Persiapan ke luar negeri»;
  - «Cari teman & kencan» → «Berteman dengan orang asing»;
  - «Lancar bercakap dalam 90 hari» → «Lancar bicara dalam 90 hari»;
  - «Kencan, teman & hiburan malam» → «Kencan, teman & nongkrong». *Hiburan malam* suggests nightclubs.
- **Wording:**
  - «Cari di semua tempat» → «Cari semuanya»;
  - «Bagaimana bilangnya…» → «Cara mengatakan…»;
  - «muncul di Ulang hari ini» → «muncul di tab Ulang hari ini».
- **Left in English on purpose:**
  - «🐞 Bug»: *bug* is the everyday Indonesian word in apps («lapor bug»), and *galat* is unknown to most users;
  - «Mode», «Audio», «Level», «normal», «admin», «Email», «Idiom»: KBBI words or the §10 glossary;
  - «#media»: the Indonesian word is the same.

### Roadmap: 11 titles
- «Kata benda dan benda» → «Kata benda dan barang».
- Country variants follow the existing «Bahasa Korea standar (Seoul)» pattern. «Bahasa Spanyol di Spanyol» → «Bahasa Spanyol standar (Spanyol)», and likewise Prancis and Jerman.
- «Mandarin, aksara sederhana» → «Bahasa Mandarin, aksara sederhana».
- «Kata benda bisa dihitung dan tidak bisa dihitung» → «Kata benda yang bisa dan tidak bisa dihitung».
- «Bunyi dan ungkapan bertahan hidup» (a calque of "survival") → «Bunyi dan ungkapan dasar».
- Indonesian roadmap:
  - «A adalah B, tanpa 'to be'» was self-contradictory → «Kalimat A = B, tanpa 'to be'»;
  - «ini, itu: ini dan itu» → «ini, itu: kata penunjuk»;
  - «ada: ada, punya» → «ada: keberadaan dan kepemilikan».
- Hindi «था / थी: dulu, biasanya dulu» → «bentuk lampau dan kebiasaan dulu».

### Files
- New:
  - PRON-RULES.md;
  - pron_check.js (a checker, not part of the build; gen.js ignores it);
  - REVIEW.md.
- Edited:
  - content: lessons.js, practice.js, decks.js, extra.js, meta.js, more/a1.js, more/a2.js;
  - interface: `t` only in ui.json and roadmap.json.

## 2. For a native speaker: the ten things I am least sure of
1. **«Progres» instead of «Kemajuan»**, applied to the whole interface rather than only the tab. The alternative is «Progres» on the tab with «kemajuan» in running text, at the cost of two words for one thing.
2. **«hèf te / hès te» for *have to / has to*.** It matches the audio, but it is the one place a written final consonant is voiceless where the spelling has *v*. A learner might generalise it to *have* alone. The careful alternative is hèv te / hèz te.
3. **«Drill» kept as a tab and glossary word.** Alternatives: «Latih», «Asah».
4. **The emergency-number note** «112 (layanan darurat terpadu), 110 (polisi), 119 (ambulans)». Please confirm that this is what Indonesians know and use; 118 is also common for ambulances.
5. **The rewritten be tip** «Selain to be, apakah kalimat ini punya kata kerja lain…?». It is correct, but longer than the original.
6. **«(Anak kecil bercerita) Tadi aku main dengan teman-temanku»** as the prompt for *I played with my friends*. Is the hint clear enough, and is *main dengan teman* → *play* really the calque adults make?
7. **«Kencan, teman & nongkrong»** as an onboarding goal, and «Jago ngobrol» / «Profesional» / «Pakar» as level titles.
8. **Weak *or* (er) in choice questions** (*Cash or card?*). Some teachers would keep oor in an A-or-B question.
9. **The *tapi* → *tetapi* normalisation** in A1 lesson prose. Writers in edtech often use *tapi*; the profile asks for baku-but-not-stiff.
10. **Small calls:**
    - *meja* instead of *enak* as the é example;
    - the weak *car / mobile* card in «Jebakan Inggris ala Indonesia»;
    - «Cara mengatakan… (cari di semua dek)» as the search placeholder.

## 3. Found but not fixed (out of scope or parity-bound)
- **Shared English that keeps K-pop or Korea in view:**
  - the card target *Who's your bias?* (Film, serial & slang);
  - the be check option *I am like K-pop. / I like K-pop.*;
  - Seoul, Busan, Jeju, Daegu, kimchi and Han Kang in checks and practice.
  - Profile §9 says to leave the shared English as it is. Replacing the card needs a `decks` entry in deviations.json (lead's call).
- **Shared items that reject natural answers or accept wrong ones** (fixing them needs an `items` deviation):
  - will, type «Biar saya yang tutup pintunya» accepts *I'll get the door*, which means "answer / open the door";
  - can-like, type «Saya pesan satu sandwich» rejects *Could I have / get a sandwich*;
  - perfect-2, type «Saya sudah tiga tahun tinggal di sini» rejects *I've been living here for three years*.
  - In each case the hint steers the learner.
- **Defensible distractors (parity-bound):** countable mc *Can I have ___ water?* (*a water* is normal restaurant English).
- **Check option «~ing (opening)»** (polite, check 3) is English-only in ko-en, so parity fixes it; the glossary term would be «bentuk -ing».
- **Email check 2 options** *You suffered a lot.* / *Good suffering.* are distractors from the Korean course (its "thanks for your hard work" formula) and mean nothing to an Indonesian learner. The `why` was neutralised, but the options are parity-bound.
- **UI keys shared by several engine strings:**
  - "Type" serves the quiz chip and the feedback radiogroup's aria-label (now «Ketik» for both);
  - legacy Korean keys (Hangul reading drill, Korean polite-form ↔ casual chips) are translated loosely.
- **Roadmap basis line** «… disesuaikan untuk penutur bahasa Korea» is a faithful translation of the shared English roadmap, but it reads oddly to an Indonesian user. That is the lead's call.
- **Profile §10** still lists `progress | kemajuan` in its UI glossary and «Kemajuan» in the nav table. The interface now says «Progres» everywhere, so the profile owner should sign off.
- **deviations.json:**
  - parity reports `lessons:indo-english` and `lessons:time-markers` as unused, because `extraLessons` covers them. This was already the case before the review.
  - The «Jebakan Inggris ala Indonesia» reason is still accurate after this review; no card was added or removed.
- **«Jebakan Inggris ala Indonesia» deck:** each of the 27 cards was checked against profile §4.11 and §9. All of them are real, documented traps, or the contrast half of one (*economic*, *recipe*, *map*). The weakest is *car* (*mobil* vs *mobile*): it is in the profile's source, but learners rarely say *mobile* for a car. It was kept because the deck's deviation reason names it (top ten).
- **Profile §6** does not list *or* in choice questions, sentence-final *me*, *have to*, or the full forms of *be / been / her / just*. PRON-RULES.md settles them, and the profile owner should sign off.
- **pron_check.js** does not scan respellings inside notes and prose. Those were checked by eye.
