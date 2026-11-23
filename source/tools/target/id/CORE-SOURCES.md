# Core words, Flirting and Compliments: sources, order and skips (en-id)

The core-words writer, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (nine core decks plus `Top classifiers`), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments; these started as `decks-c.js.draft` and `extra-c.js.draft`, which were renamed and extended).

## 1. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| Hermit Dave, *FrequencyWords*, `content/2018/id/id_50k.txt` ([repository](https://github.com/hermitdave/FrequencyWords), commit `525f9b560de45753a5ea01069454e72e9aa541c6`, read in full from a git clone on 2026-11-23) | The 50,000 most frequent **word forms** in the Indonesian part of OPUS [OpenSubtitles2018](http://opus.nlpl.eu/OpenSubtitles2018.php): film and TV subtitles, most of them translated from English. Not lemmatised and not tagged for part of speech. | CC BY-SA 4.0 for the lists (MIT for the code), as the repository README states. | **The sort key for every core deck.** Only ranks were used. The choice of words, every meaning, note, example and dialogue is the writer's own. |

**Could not be read:** `en.wiktionary.org` *Wiktionary:Frequency lists/Indonesian* opened but has no list (an empty heading; it names only the Quasthoff et al. *Kamus Frekuensi Bahasa Indonesia*, 2015, which is a printed book). The metacpan *WordList::ID::Common::Wikipedia1000* page opened but does not print the words, and its source file was blocked by the network proxy (403); it is Wikipedia text anyway. Raw downloads from raw.githubusercontent.com and jsDelivr were blocked (403); the file was read through an anonymous git clone instead.

### Sort rule (applied by a script, so it is exact)

1. A card's rank is the subtitle rank of its own form, lower-cased with punctuation removed (`Wah!` → `wah`).
2. **Verbs** take the **better** rank of the card form and its root or other common form, because the list counts *membaca* and *baca* separately. Example: *melihat* is ranked by *melihat* (78), *menunggu* by *tunggu* (122), *memberi* by *berikan* (275). The form used is shown in brackets in §5.
3. A few other cards use one extra form, also shown in brackets in §5: the possessive endings *-ku, -mu, -nya* use the subtitle tokens *ku* (172), *mu* (259), *nya* (368); *di mana / ke mana* and the *di + position* prepositions use the joined spelling the subtitles write (*dimana* 159, *kemana* 393, *diluar* 1006 …; that spelling is a common error, the cards use the standard one); *Ya ampun!* uses *ampun*, *Insya Allah* uses *insya*, *seporsi* uses *porsi*.
4. Each deck is sorted by that rank, most frequent first. Cards with no rank go after the ranked ones, in the writer's order.
5. **Placed by judgement, not by rank:**
   - **Demoted on purpose:** *kau* (rank 2) and *tak* (rank 16). They are inflated by translated subtitles and song-like dialogue; everyday speech uses *kamu* and *tidak / nggak*. Both are kept as recognition cards at the end of their decks.
   - **No rank in the list:** *ulang tahun* (Top nouns), *luar biasa* (Top adjectives), *Idih!* (Top interjections).
   - **Top words, fixed block:** the numbers (0–9, 13–19, 20) in counting order, then the four days, then *pagi, siang, sore, malam, lusa*, after the 20 ranked words. Their subtitle ranks were not used.
   - **Flirting and Compliments** are in layer and topic order, as the brief asks, not in frequency order.
6. **Which words were chosen** is judgement throughout: the list is not tagged, so the writer chose the words of each class and its cut-off. Words the list ranks high because of film genres or English leakage were left out: *the, you, i, a, s, yeah, ok* (as a separate token), *tuhan, sial, sialan, membunuh, senjata*, and clitic or contracted forms (*padaku, padamu, kurasa, kupikir, maksudku, denganmu, takkan, yg, tn, nak*). *Gadis, pria, wanita* and *polisi* are ranked higher than in daily speech for the same reason; they were kept, in rank order, with notes giving the everyday word.

**Suggestion for the lead:** the subtitle list is translated film dialogue, so it favours the formal *meN-* forms and drama words. A lemmatised corpus list (the Leipzig *Kamus Frekuensi*, or a tagged Indonesian web corpus) would refine the order; the choice of words should hold.

## 2. Fitting the decks to Indonesian

- **`Top classifiers` added** (18 cards). The course does not teach counting words: no lesson or card has *seorang, sebuah, ekor* (only *seorang* appears once as an accepted answer and once as a distractor in practice). Cards are the *se-* forms a beginner meets (*seorang, sebuah, segelas …*), because *orang* and *buah* are already cards in Top nouns with their noun meaning, and a target may sit in one deck only. The one exception is ***ekor***, used as the bare counting word because the generator mis-reads *seekor* (§4). The deck also holds the container measure words (*segelas, secangkir, sepiring, semangkuk, sebotol, sebungkus, seporsi, sekilo*), which work the same way and are what a traveller orders with.
- **Top verbs:** the card is the form standard speech uses: the *meN-* or *ber-* verb where there is one (*membaca, bekerja*), the bare word where the verb has no prefix (*makan, pergi, tidur*). The note gives the root and the casual form (*Root baca … Casual: baca*). The helping verbs *bisa, harus, mau, ingin, perlu, boleh, butuh* are in this deck, as Indonesian grammars class them as verbs. *ada* and *adalah* are here with the course's warning about *adalah*.
- **Top adjectives:** notes say where English needs "is" and Indonesian does not, and where the word follows the noun. No gender or number forms exist, so the note gives the casual twin or a usage warning instead.
- **Top pronouns:** *Pak, Bu, Kak* are included as the "you" of direct address, following the profile (§2.4): a title first, *kamu* for friends, *Anda* for forms and formal talk. *Bapak, Ibu, Mas, Mbak, kamu, dia, kami, kita, aku, gue, lo* are already cards. *ini / itu* and the question pronouns *apa, siapa, mana* and *yang* are here; *-ku, -mu, -nya* are here as the possessive endings.
- **Top prepositions** kept its name: Indonesian has true prepositions (*di, ke, dari, dengan …*). The place phrases *di atas, di bawah, di depan …* are cards because the course teaches them that way (`prepositions`).
- **Top words** holds what fits no class: *ya, bukan, jangan, tak*; question words (*bagaimana, berapa, mengapa, apakah, di mana, ke mana*; *apa / siapa / mana* are pronouns); quantity words (*banyak, sedikit, beberapa, setiap, para, seluruh*); ordinals; numbers; days; times of day. Indonesian has no articles; *-nya* as "the" is in Top pronouns.
- **Register:** standard forms are the card targets (*tidak, sudah, saja, bagaimana*); casual twins are in notes (*nggak, udah, aja, gimana*), as the profile's §2.2 rule says. Exceptions, each marked "casual" in its meaning: *banget* (Top adverbs), *soalnya, makanya* (Top conjunctions), *Yuk!, Sip!, Cie!, Idih!* (Top interjections), and the casual Flirting words.

## 3. Flirting and Compliments

- **Flirting** started from Deck 2 of `docs/plans/compliments-id.md` and keeps its register: ***aku / kamu*** between two adults getting to know each other, with the relaxed Jakarta words the plan uses (*ngobrol, sama, bikin, ketawa, banget, makasih, ketemu, bareng, ngopi*). The plan's open question (keep those casual words or use standard ones) was not answered; this deck keeps them because standard forms sound stiff when flirting, and **every casual word's note gives its standard form**. Kii should confirm.
  - Layer 1, words (23); layer 2, phrases grouped by the word they come from (26); layer 3, moves and replies (16), including three kind ways to say no (*Makasih, tapi aku sudah punya pacar.*; *Makasih, tapi kita teman saja, ya.*; *Maaf, aku tidak tertarik.*) and a soft one (*Lihat nanti, ya.*).
  - *cantik* is already a card (Sounds and spelling), so it appears only in phrases. *seksi* and body comments are left out (the plan: crude in Indonesia). *Aku sayang kamu* is in, marked bold and "for a partner".
  - The plan's *Boleh minta nomor WA kamu?* became *Boleh minta nomor kamu?* (the generator would read *WA* as a word); the note says it usually means the WhatsApp number.
  - Indonesian flirting is fairly indirect: interest is shown through *ngobrol*, coffee and *malam Minggu* plans more than open praise. The notes say so where it matters.
- **Compliments:** the 14 draft cards are kept in their order with their text unchanged; 14 cards were added from plan Deck 1 (*Boleh minta resepnya?, Wah, mantap!, Kamu rajin sekali., Bapak ramah sekali., Anaknya lucu sekali!, Bajunya bagus!, Fotonya bagus!, Wah, sudah bisa bahasa Indonesia!, Ah, tidak juga.*) and the writer (*Kerja bagus!, Hasilnya bagus sekali., Kamu sudah bekerja keras., Rumahnya rapi sekali., Ah, Ibu bisa saja.*). Addressing follows the profile: *Ibu / Bapak* to hosts and older people, *kamu* to friends, each note giving the other form. Four reply cards show the modest answer Indonesians give.

## 4. Pron

Every pron was generated by `respell.js` from a script and pasted unchanged; `repron.js id` reports 0 rewritten. `LEX` was not changed (the brief forbids it), so words the generator gets wrong were left out:

| Left out | Why |
|---|---|
| *hebat* (Top adjectives) | KBBI (kbbi.web.id, opened) has /hébat/, strong e; the generator gives the weak e. |
| *seekor* (Top classifiers) | *ekor* has the strong e (LEX: *ékor*), but *seekor* is not in LEX and comes out `suh-uh-KOHR`. Replaced by the card *ekor*. |
| *gebetan* (Flirting) | Probably strong e in *gebet*; generator gives weak. Not checked. |
| *Lho!* (Top interjections) | Generator gives `lhoh`; it is said "loh". |
| *Wow!* | Generator gives `wohw`; it is an English loan anyway. |
| *Hmm*, *Sst* | No vowel: the generator throws. |
| *menyanyi* | Left out by choice: *nyanyi* is already a card. |

**Flagged by the generator ("check e / ai / au") and kept**, because the output matches the writer's reading: *kesempatan, memberi, mendengarkan, menjemput, menemukan, lemah, sempurna, penuh, tentu, segera, tetap, memang, sebenarnya, seseorang, tentang, sejak, seperti, setelah, walaupun, meskipun, serta, seandainya, selembar, sehelai, segelas, cakep, seru, kangen, kencan*, and inside phrases *tersenyum, didengar, bareng, ketemu*. Checked on kbbi.web.id (KBBI III mirror): *segera* (se·ge·ra, no é) and *kangen* (ka·ngen, no é) agree; *cakep* has no pronunciation field there. The rest are **unverified** (writer's judgement). The lead may add them to `LEX` to silence the warnings.

Loans with an *e* that are silent in the generator were checked by eye: *hotel, telepon, menelepon, dokter, film, kereta, jendela, serius* all come from LEX entries and look right.

## 5. Ranks used (card: subtitle rank; the form used in brackets when it is not the card's own)

## Top nouns
orang 31, hal 65, hari 68, waktu 94, tempat 96, tahun 106, anak 109, ayah 113, masalah 139, pria 154, wanita 176, cara 184, jalan 186, dunia 190, uang 205, teman 211, gadis 214, jam 217, polisi 222, nama 248, kota 253, mobil 254, cinta 258, rasa 264, manusia 268, keluarga 279, tangan 287, pekerjaan 295, sekolah 323, bulan 333, pintu 355, hati 359, kesempatan 360, dokter 390, kerja 400, kata 411, kabar 413, kamar 416, makanan 430, buku 442, telepon 450, pertanyaan 453, cerita 465, kaki 478, negara 481, anjing 486, nomor 531, pesawat 534, guru 535, film 538, pesan 555, bayi 557, bahasa 558, kantor 559, laki-laki 586, laut 617, perempuan 625, barang 636, berita 637, mimpi 640, pikiran 650, lagu 668, tugas 691, obat 695, hadiah 696, kunci 707, istri 710, kakak 724, lantai 742, musik 769, kereta 771, foto 780, kartu 783, perasaan 785, acara 788, matahari 790, toko 793, nenek 892, kopi 898, daging 915, minuman 958, meja 961, pacar 962, ikan 966, hotel 985, pohon 989, jawaban 1024, hewan 1030, baju 1037, tamu 1042, sepatu 1094, suami 1095, harga 1122, sungai 1127, hujan 1143, kucing 1145, tas 1173, desa 1191, kursi 1192, jendela 1201, gunung 1209, kakek 1229, adik 1277, ayam 1278, teh 1308, stasiun 1385, buah 1406, tiket 1524, bus 1666, telur 1733, badan 1762, liburan 1872, pasar 1882, alamat 1905, murid 2020, cuaca 2218, motor 2268, tetangga 2327, mahasiswa 2681, gula 2705, nasi 4302, sayur 10561, ulang tahun [none]

## Top verbs
bisa 14, ada 15, tahu 19, harus 27, adalah 30, ingin 34, pergi 36, punya 48, melakukan 54 (lakukan), mau 60, kembali 69, datang 71, menjadi 77, melihat 78, terjadi 79, bilang 89, keluar 98, membuat 102, mati 103, mendapat 111 (dapat), mengatakan 115 (katakan), hidup 116, perlu 119, menunggu 122 (tunggu), masuk 129, mendengar 131 (dengar), berpikir 135 (pikir), berbicara 143 (bicara), suka 150, mengerti 156, menemukan 163, bertemu 165, percaya 167, makan 169, tinggal 173, bekerja 174, berhenti 185, mulai 189, mengambil 200, boleh 201, merasa 203, mencari 204, butuh 208, mencoba 213, membawa 223, ingat 228, tidur 238, pulang 239, meminta 252 (minta), membantu 255, memberi 275 (berikan), kehilangan 282, ikut 291, selesai 306, duduk 324, minum 329, menggunakan 343, berjalan 347, bermain 362, jatuh 373, bertanya 396, bangun 406, berlari 417 (lari), menikah 445, belajar 455, lupa 458, naik 467, turun 475, berdiri 487, membuka 500 (buka), memilih 533, tiba 539, memakai 544, menjawab 553 (jawab), memesan 555 (pesan), mengenal 565 (kenal), membayar 581, menutup 602 (tutup), membeli 631, menangis 644, menulis 646, menelepon 647, membaca 661, mengirim 676, mendengarkan 685, pindah 726, mandi 791, tertawa 817, menonton 840, menjual 875, istirahat 920, berangkat 993, lahir 1008, menari 1029, berenang 1777, memasak 1950, jalan-jalan 2172, mengantar 2239 (antar), mengajar 2355, menyewa 2379, mencuci 2880, menjemput 3050, menginap 3255, mengobrol 3719 (ngobrol), belanja 3887

## Top adjectives
benar 75, bagus 88, lain 92, baru 110, sama 121, salah 123, cepat 130, lama 170, kecil 195, senang 207, buruk 220, siap 230, gila 234, sakit 237, takut 244, biasa 257, bodoh 266, jauh 294, aneh 301, penting 303, tua 314, tenang 316, aman 346, sulit 349, dekat 364, mudah 371, keras 388, serius 394, kuat 395, indah 407, kosong 422, marah 438, muda 460, tinggi 473, penuh 479, panas 542, sempurna 572, jahat 608, dingin 611, berani 655, hitam 664, berat 727, merah 730, putih 752, sibuk 754, panjang 766, gelap 893, nyaman 914, lapar 942, kaya 952, lemah 1091, sedih 1171, bersih 1217, biru 1224, kotor 1231, sehat 1256, jelek 1363, mahal 1529, hijau 1551, hangat 1608, sopan 1658, sabar 1660, terang 1848, segar 1868, miskin 1926, pendek 1980, susah 2010, basah 2122, murah 2129, kering 2423, kuning 2582, ringan 2600, pelan 2914, ramah 2981, haus 3219, ramai 4257, sepi 4860, capek 5366, pedas 5381, malas 5610, asin 7840, rajin 10261, luar biasa [none]

## Top adverbs
akan 10, sudah 28, saja 32, hanya 37, sekarang 39, sini 40, lagi 47, lebih 49, mungkin 52, sangat 56, juga 58, pernah 61, masih 90, sana 93, sedang 104, sekali 107, sendiri 114, pasti 136, benar-benar 140, tentu 145, cukup 147, selalu 148, bahkan 160, terlalu 175, tetap 181, bersama 199, sebenarnya 212, dulu 215, kemudian 229, terus 233, segera 240, memang 243, sebentar 262, nanti 285, paling 299, tadi 304, cuma 310, hampir 336, akhirnya 372, langsung 468, sering 601, kurang 629, agak 657, biasanya 760, tiba-tiba 932, situ 1155, kadang-kadang 1327, pelan-pelan 2086, jarang 2447, banget 2673

## Top pronouns
yang 3, ini 5, itu 6, apa 11, mereka 17, Anda 18, saya 21, semua 38, kalian 53, siapa 62, sesuatu 73, mana 97, semuanya 124, ia 127, Pak 142, seseorang 152, apa-apa 161, -ku 172 (ku), diri 198, -mu 259 (mu), -nya 368 (nya), Bu 511, milik 715, masing-masing 1675, Kak 2095, beliau 2182, siapa-siapa 2731, kau [none]

## Top prepositions
di 9, untuk 13, dengan 20, dari 22, ke 26, seperti 33, dalam 42, pada 51, tentang 82, sampai 108, oleh 168, atas 171, selama 193, tanpa 216, kepada 242, bagi 286, sejak 335, sekitar 354, daripada 441, menuju 464, antara 471, lewat 528, menurut 811, di luar 1006 (diluar), di dalam 1307 (didalam), di bawah 1432 (dibawah), di atas 1630 (diatas), di belakang 3071 (dibelakang), di depan 3499 (didepan), di sebelah 4957 (disebelah)

## Top conjunctions
dan 7, tapi 24, jika 35, saat 66, atau 70, bahwa 85, ketika 128, setelah 155, sebelum 197, maka 327, agar 376, meskipun 620, sehingga 621, supaya 1301, walaupun 1405, sambil 1936, asal 2137, serta 2203, padahal 2532, apalagi 2762, seandainya 3077, makanya 3188, sedangkan 3605, sesudah 7467, soalnya 9542

## Top interjections
Oh. 50, Ayo! 64, Hei! 87, Oke. 91, Selamat! 146, Halo? 246, Masa? 293, Ah, 296, Astaga! 339, Nah, 361, Eh, 424, Hah? 851, Ya ampun! 974 (ampun), Wah! 1291, Kasihan! 1854, Syukurlah. 2039, Aduh! 2063, Amin. 3320, Hore! 5733, Ups! 7295, Duh! 8638, Yuk! 9308, Sip! 13313, Waduh! 16170, Insya Allah. 18247 (insya), Alhamdulillah. 26238, Cie! 32782, Idih! [none]

## Top classifiers
seorang 84, sebuah 118, sepotong 2841, sepasang 3005, ekor 3172, segelas 3459, secangkir 3993, sebotol 5301, selembar 11115, sebatang 11223, seporsi 11933 (porsi), semangkuk 11994, sehelai 15018, sepiring 16453, sebungkus 18765, sebutir 19335, sebiji 47152, sekilo 47187

## Top words
ya 23, bukan 43, bagaimana 45, jangan 46, apakah 59, banyak 74, beberapa 112, mengapa 117, di mana 159 (dimana), sedikit 164, setiap 187, pertama 196, para 221, berapa 225, terakhir 256, seluruh 307, ke mana 393 (kemana), kedua 436, ketiga 1134, tak [none], nol [fixed], satu [fixed], dua [fixed], tiga [fixed], empat [fixed], lima [fixed], enam [fixed], tujuh [fixed], delapan [fixed], sembilan [fixed], tiga belas [fixed], empat belas [fixed], lima belas [fixed], enam belas [fixed], tujuh belas [fixed], delapan belas [fixed], sembilan belas [fixed], dua puluh [fixed], Selasa [fixed], Rabu [fixed], Kamis [fixed], Sabtu [fixed], pagi [fixed], siang [fixed], sore [fixed], malam [fixed], lusa [fixed]



## 6. Words skipped because the course already teaches them

Exact matches (ignoring capitals and . , ! ? marks) against every card in `decks-a.js`, `decks-b.js` and the Compliments draft. "(judgement)" marks words that are not exact matches but were left out because a card already teaches them in a near-identical form.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | rumah, sepeda, pantai, pulau, bunga, mangga, jeruk, sate, masyarakat | Sounds and spelling |
| Top nouns | air, kepala, kelas, gang, kos, kelapa, semangka, semangat | Traps for English speakers |
| Top nouns | Ibu, Bapak, anak-anak | People and family (Ibu and Bapak are also the polite "you") |
| Top nouns | dapur, kamar tidur, kamar mandi | Home and routine |
| Top nouns | apotek, rumah sakit | Health and help |
| Top nouns | bandara | Transport and travel |
| Top nouns | rapat | Work and study |
| Top nouns | perempatan, pertigaan | Around town and directions |
| Top verbs | menyanyi (judgement: *nyanyi* is a card) | Sounds and spelling |
| Top adjectives | baik, besar, cantik, enak, khusus, ngantuk | Sounds and spelling |
| Top adverbs | kemarin, besok | Time, days and dates |
| Top adverbs | belum (*Belum.*) | Traps for English speakers |
| Top adverbs | udah, aja (the standard *sudah, saja* were added) | Everyday spoken Indonesian |
| Top pronouns | kamu, dia, kami, kita, Bapak, Ibu, Mas, Mbak | People and family |
| Top pronouns | aku, gue, lo | Everyday spoken Indonesian |
| Top prepositions | none | |
| Top conjunctions | karena, tetapi, kalau, lalu, jadi | Questions and connectors |
| Top interjections | Tolong!, Hati-hati! | Health and help |
| Top interjections | Maaf., Permisi., Sama-sama. | Greetings and courtesy |
| Top words | tidak | Sounds and spelling |
| Top words | nggak | Everyday spoken Indonesian |
| Top words | Kapan?, Kenapa?, dari mana (*Dari mana?*) | Questions and connectors |
| Top words | sepuluh, sebelas, dua belas | Numbers and money |
| Top words | Senin, Jumat, Minggu (judgement: taught as *hari Senin, hari Jumat, hari Minggu*) | Time, days and dates |
| Flirting | cantik (kept inside phrases only) | Sounds and spelling |

**Total skipped: 72 distinct words** (68 exact matches, 4 by judgement: menyanyi, Senin, Jumat, Minggu). Ibu and Bapak are listed under two decks but counted once.

**Near-pairs kept on purpose** (different targets, so the release check passes; the lead may drop one of a pair):
- *mau* (Top verbs) and *Saya mau pergi.* (Traps); *ada* and *Tidak ada.*; *juga* and *Saya juga.*; *apa-apa* and *Tidak apa-apa.*; *semuanya* and *Semuanya berapa?*; *mana* and *Yang mana?*; *sebentar* and *Tunggu sebentar.*; *saja* and *lurus saja*.
- *ganteng* (Flirting) and *Dia ganteng.* (Describing people and things).
- *Kamu lucu sekali!* (Compliments) and *Kamu lucu kalau malu.* (Flirting).
- *Pak* (Top pronouns) and *Pak Budi* (People and family).

## 7. Counts

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 123 | 12 | 0 |
| Top verbs | 105 | 63 | 0 |
| Top adjectives | 83 | 44 | 0 |
| Top adverbs | 50 | 32 | 0 |
| Top pronouns | 28 | 28 | 0 |
| Top prepositions | 30 | 24 | 0 |
| Top conjunctions | 25 | 15 | 0 |
| Top interjections | 28 | 0 | 28 |
| Top words | 47 | 5 | 0 |
| Top classifiers | 18 | 11 | 0 |
| Flirting | 65 | 9 | 18 (plus 3 patterns) |
| Compliments | 28 | 9 | 15 (plus 2 patterns) |
