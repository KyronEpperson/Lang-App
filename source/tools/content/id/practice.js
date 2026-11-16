/* Practice sets for the id-en course (docs/PRACTICE-SPEC.md v1), written for Indonesian speakers (docs/profiles/id.md).
   Prompts, why and hint are Indonesian; answers are English and identical to ko-en.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing rule article-plural (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names "artikel" or "jamak". Every mc q and type hint contains a word from labels.cueTest. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Kata untuk 'nasi'?", o: ["rice", "lice", "rise", "nice"], why: "\"rice\" (nasi) diawali R. Kalau ujung lidah menempel di gusi seperti L, jadinya \"lice\" (kutu)." },
    { t: "mc", q: "Kata untuk 'kipas angin'?", o: ["fan", "pan", "van", "ban"], why: "F: gigi atas menyentuh bibir bawah dan hanya udara yang keluar. Kalau kedua bibir dirapatkan seperti P, jadinya \"pan\" (wajan)." },
    { t: "mc", q: "Kata untuk 'berpikir'?", o: ["think", "sink", "thing", "pink"], why: "TH: ujung lidah sedikit dijulurkan di antara gigi. Kalau diucapkan dengan s, jadinya \"sink\" (wastafel)." },
    { t: "mc", q: "Kata untuk 'memberikan suara' (dalam pemilihan)?", o: ["vote", "boat", "goat", "bought"], why: "V: posisi mulut seperti F, tetapi pita suara bergetar. Kalau kedua bibir dirapatkan seperti B, jadinya \"boat\" (perahu)." },
    { t: "mc", q: "Kata untuk 'kanan'?", o: ["right", "light", "fight", "bright"], why: "\"right\" (kanan) diawali R. \"light\" yang diawali L artinya cahaya." },

    { t: "order", p: "Ini pisang.", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "\"banana\" diawali bunyi konsonan, jadi artikelnya \"a\". \"This\" ditulis dengan TH, bukan D." },
    { t: "order", p: "tiga pohon", a: ["three", "trees"], x: ["tree", "free"], why: "Tiga, jadi bentuk jamak \"trees\". \"three\" diawali TH, \"tree\" diawali TR." },
    { t: "order", p: "Saya suka kopi.", a: ["I", "like", "coffee"], x: ["copy"], why: "\"coffee\" memakai F (gigi atas di bibir bawah). Kalau diucapkan dengan P, jadinya \"copy\" (salinan)." },

    { t: "fill", q: "I eat __ice every day.", p: "Saya makan nasi setiap hari.", a: ["r"], o: ["l", "n", "w"], why: "Nasi = \"rice\", diawali R. Dengan L, jadinya \"lice\" (kutu)." },
    { t: "fill", q: "I __ink so.", p: "Saya rasa begitu.", a: ["th"], o: ["s", "t", "p"], why: "\"think\" diawali TH. Dengan s, jadinya \"sink\" (wastafel); dengan t, terdengar seperti \"tink\"." },
    { t: "fill", q: "This is my __.", p: "Ini tas saya.", a: ["bag"], o: ["back", "bug", "beg"], why: "Tas = \"bag\", diakhiri g yang tetap bersuara. Kalau diakhiri bunyi k, jadinya \"back\" (punggung)." },

    { t: "type", p: "tiga pohon", a: ["three trees"], hint: "three · tree — tiga, jadi jamak", x: ["tree"], why: "\"three\" diawali TH, \"tree\" diawali TR, dan karena jumlahnya tiga, pakai -s jamak." },
    { t: "type", p: "dua perahu", a: ["two boats"], hint: "two · boat — dua, jadi jamak", x: ["boat", "votes"], why: "Perahu = \"boat\" (diawali B), dan karena jumlahnya dua, pakai -s jamak. Dengan V, jadinya \"vote\" (suara dalam pemilihan)." },
    { t: "type", p: "sangat ringan", a: ["very light"], hint: "very · light — kata pertama V, kata kedua L", x: ["berry"], why: "\"very\" diawali V (gigi atas di bibir bawah), \"light\" diawali L (ujung lidah di gusi)." }
  ],

  articles: [
    { t: "mc", q: "'Saya pelajar.' dalam bahasa Inggris?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Di depan pekerjaan atau status, artikel \"a\" wajib ada." },
    { t: "mc", q: "'Saya punya satu ide.' dalam bahasa Inggris?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "\"idea\" diawali bunyi vokal, jadi artikelnya \"an\"." },
    { t: "mc", q: "Bahasa Inggrisnya 'satu jam'?", o: ["an hour", "a hour", "one hours", "hour"], why: "Huruf h pada \"hour\" tidak dibaca. Bunyi awalnya vokal, jadi artikelnya \"an\"." },
    { t: "mc", q: "'Saya suka sekali anjing.' (anjing secara umum) dalam bahasa Inggris?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "Untuk hal yang umum, pakai bentuk jamak tanpa artikel." },
    { t: "mc", q: "'Saya punya seekor anjing. Anjingnya lucu sekali.' dalam bahasa Inggris?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Saat pertama disebut, pakai artikel \"a\"; saat disebut lagi, pakai \"the\"." },

    { t: "order", p: "Saya guru.", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Di depan pekerjaan, pakai artikel \"a\". \"teacher\" diawali bunyi konsonan, jadi bukan \"an\"." },
    { t: "order", p: "Bisa tolong tutup pintunya? (pintu di ruangan ini)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Pintu yang sama-sama diketahui, jadi artikelnya \"the\"." },
    { t: "order", p: "Saya tidak minum kopi.", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Kopi secara umum: tanpa artikel." },

    { t: "fill", q: "I'm __ university student.", p: "Saya mahasiswa.", a: ["a"], o: ["an", "the", "two"], why: "\"university\" diawali bunyi \"yu\", jadi artikelnya \"a\". Yang menentukan adalah bunyi, bukan huruf." },
    { t: "fill", q: "I have __ older sister.", p: "Saya punya seorang kakak perempuan.", a: ["an"], o: ["a", "the", "two"], why: "\"older\" diawali bunyi vokal, jadi artikelnya \"an\"." },
    { t: "fill", q: "I don't like __.", p: "Saya tidak suka kucing. (kucing secara umum)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "Untuk hal yang umum, pakai bentuk jamak \"cats\" tanpa artikel." },

    { t: "type", p: "Saya punya satu ide.", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — artikel sebelum bunyi vokal", x: ["a"], why: "\"idea\" diawali bunyi vokal, jadi artikelnya \"an\"." },
    { t: "type", p: "Saya suka anjing. (anjing secara umum)", a: ["I like dogs", "I love dogs"], hint: "like · dog — hal umum, jadi jamak", x: ["dog", "a"], why: "Untuk hal yang umum, pakai bentuk jamak \"dogs\" tanpa artikel." },
    { t: "type", p: "Ayo makan siang bersama.", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — perlu artikel sebelum nama waktu makan?", x: ["a", "the"], why: "Di depan nama waktu makan tidak ada artikel." }
  ],

  be: [
    { t: "mc", q: "'Saya capek.' dalam bahasa Inggris?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "Untuk menyatakan keadaan, \"to be\" wajib ada, walaupun dalam bahasa Indonesia cukup ‘Saya capek’." },
    { t: "mc", q: "'Apakah dia (laki-laki) bisa berbahasa Inggris?' dalam bahasa Inggris?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Dengan \"he\", pakai \"does\". Setelah \"does\", kata kerjanya V1 tanpa -s." },
    { t: "mc", q: "'Dia (perempuan) sedang di kantor.' dalam bahasa Inggris?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Untuk menyatakan tempat, pakai \"to be\"; dengan \"she\", pakai \"is\"." },
    { t: "mc", q: "Jawab 'ya' untuk \"Do you like coffee?\"", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Pertanyaannya memakai \"do\", jadi jawab juga dengan \"do\"." },
    { t: "mc", q: "'Dia (perempuan) tidak makan daging.' dalam bahasa Inggris?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Kalimat negatif dengan \"she\": \"doesn't\" + V1 tanpa -s." },

    { t: "order", p: "Kakak laki-laki saya bekerja di Seoul.", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "Subjeknya satu orang (\"he\"), jadi \"works\" dengan -s, dan tidak memakai \"to be\"." },
    { t: "order", p: "Saya bukan pelajar.", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "Kalimat negatif dengan \"to be\" memakai \"not\", dan di depan status pakai artikel \"a\"." },
    { t: "order", p: "Dia (perempuan) punya dua ekor anjing.", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "Setelah \"she\", pakai \"has\"; karena dua, pakai -s jamak: \"dogs\"." },

    { t: "fill", q: "My brother __ in Seoul.", p: "Kakak laki-laki saya tinggal di Seoul.", a: ["lives"], o: ["live", "is live", "living"], why: "Subjeknya \"he\", jadi kata kerjanya ditambah -s: \"lives\"." },
    { t: "fill", q: "__ you tired?", p: "Kamu capek?", a: ["Are"], o: ["Do", "Is", "Does"], why: "\"tired\" adalah keadaan, jadi bertanya dengan \"to be\". Dengan \"you\", pakai \"are\"." },
    { t: "fill", q: "We __ hungry.", p: "Kami lapar.", a: ["are"], o: ["is", "am", "do"], why: "\"hungry\" adalah keadaan, jadi pakai \"to be\"; dengan \"we\", pakai \"are\"." },

    { t: "type", p: "Dia (laki-laki) guru.", a: ["He's a teacher", "He is a teacher"], hint: "teacher — to be + artikel sebelum pekerjaan", x: ["the"], why: "Menyebut identitas, jadi pakai \"to be\"; di depan pekerjaan, pakai artikel \"a\"." },
    { t: "type", p: "Saya tidak suka kopi.", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — kalimat negatif kata kerja biasa", x: ["am"], why: "\"like\" adalah kata kerja biasa, jadi negatifnya \"don't\" (I'm not like ✗)." },
    { t: "type", p: "Apakah dia (perempuan) punya seekor kucing?", a: ["Does she have a cat"], hint: "does · have · cat — artikel untuk satu ekor", x: ["has"], why: "Dengan \"does\", kata kerjanya V1 \"have\"; satu ekor, jadi pakai artikel \"a\"." }
  ],

  polite: [
    { t: "mc", q: "Di kafe, kalimat apa yang paling wajar untuk memesan satu latte?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Di toko, \"Can I get ~?\" terdengar wajar. Satu gelas, jadi pakai artikel \"a\" juga." },
    { t: "mc", q: "Kalimat apa yang paling sopan untuk minta tolong kepada orang yang baru dikenal?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you ~?\" adalah permintaan sopan untuk orang yang baru dikenal." },
    { t: "mc", q: "Kamu tidak menangkap ucapan lawan bicara. Kalimat apa yang sopan untuk meminta dia mengulang?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" adalah cara sopan untuk meminta orang mengulang." },
    { t: "mc", q: "Dengan sangat sopan: 'Apakah Anda keberatan memotret kami?' dalam bahasa Inggris?", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Setelah \"mind\", pakai bentuk -ing: \"taking\"." },
    { t: "mc", q: "Di pesawat: 'Saya minta kursi dekat jendela.' dalam bahasa Inggris?", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like ~\" adalah permintaan yang sopan. Satu kursi, jadi pakai artikel \"a\"." },

    { t: "order", p: "Boleh saya pesan satu latte?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Satu gelas yang baru dipesan, jadi artikelnya \"a\"." },
    { t: "order", p: "Apakah Anda keberatan membuka jendelanya? (jendela di ruangan ini)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "Setelah \"mind\", pakai bentuk -ing; jendela yang sama-sama diketahui, jadi artikelnya \"the\"." },
    { t: "order", p: "Bisakah Anda bicara lebih pelan?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Pakai \"Could you ~?\" untuk meminta dengan sopan." },

    { t: "fill", q: "Would you mind __ the door?", p: "Apakah Anda keberatan menutup pintunya?", a: ["closing"], o: ["close", "to close", "closed"], why: "Setelah \"mind\", pakai bentuk -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Boleh saya pesan satu es kopi?", a: ["an"], o: ["a", "two", "many"], why: "\"iced\" diawali bunyi vokal (ai-), jadi artikelnya \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(jawaban untuk Would you mind ~?) Tentu, silakan.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" berarti ‘sama sekali tidak keberatan’, jadi artinya ‘boleh, saya lakukan’." },

    { t: "type", p: "Bisakah Anda membantu saya? (sopan)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — permintaan yang sopan", x: ["can"], why: "Kepada orang yang baru dikenal, minta tolong dengan \"Could you ~?\"." },
    { t: "type", p: "Saya minta kursi dekat jendela.", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — artikel untuk satu kursi", x: ["the"], why: "Satu kursi yang baru disebut, jadi pakai artikel \"a\": \"a window seat\"." },
    { t: "type", p: "Saya pesan dua kopi.", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — dua gelas, jadi jamak", x: ["coffee"], why: "Saat memesan, kopi dihitung per gelas, jadi pakai -s jamak: \"two coffees\"." }
  ],

  tense: [
    { t: "mc", q: "'Saya sedang minum kopi sekarang.' dalam bahasa Inggris?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Yang sedang terjadi sekarang memakai be + -ing. Jangan lupa \"am\"." },
    { t: "mc", q: "'Akhir pekan lalu saya pergi ke pantai.' dalam bahasa Inggris?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Ada \"last weekend\", jadi kata kerjanya V2: \"went\". Pantai disebut dengan artikel \"the\": \"the beach\"." },
    { t: "mc", q: "Membicarakan rencana bulan depan: 'Saya mau ke Jeju.' dalam bahasa Inggris?", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "Rencana yang sudah dibuat memakai be going to + V1." },
    { t: "mc", q: "Bel pintu berbunyi. Kamu langsung bilang: 'Biar aku yang buka!'", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Keputusan yang dibuat saat bicara memakai \"will\"." },
    { t: "mc", q: "Bentuk V2 dari \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "\"see\" adalah kata kerja tidak beraturan: see - saw - seen." },

    { t: "order", p: "Saya bekerja di sebuah bank. (pekerjaan tetap)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Kebiasaan atau fakta memakai Simple Present Tense; bank disebut pertama kali, jadi artikelnya \"a\"." },
    { t: "order", p: "Nanti aku telepon.", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Janji yang diputuskan saat bicara memakai \"will\"." },
    { t: "order", p: "Saya menonton dua film. (sudah lewat)", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "V2 dari \"see\" adalah \"saw\"; dua film, jadi pakai -s jamak: \"movies\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Tadi malam saya makan piza.", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "V2 dari \"eat\" adalah \"ate\" (kalau memakai \"have\", jadi \"had\")." },
    { t: "fill", q: "__ you have fun?", p: "Tadi seru?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Untuk bertanya tentang hal yang sudah lewat, pakai \"Did\" + V1." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Saya mau mengunjungi orang tua saya.", a: ["to"], o: ["for", "at", "on"], why: "Rencana memakai be going to + V1." },

    { t: "type", p: "Hari ini saya sedang kerja dari rumah.", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — yang sedang terjadi", x: ["work"], why: "Yang sedang dilakukan hari ini memakai be + -ing." },
    { t: "type", p: "Akhir pekan lalu saya pergi ke pantai.", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — V2 dan artikel", x: ["a"], why: "V2 dari \"go\" adalah \"went\"; pantai memakai artikel \"the\": \"the beach\"." },
    { t: "type", p: "Saya mau ikut satu kelas memasak. (rencana)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — artikel untuk satu kelas", x: ["the"], why: "Rencana yang sudah dibuat memakai \"going to\"; satu kelas yang baru disebut, jadi artikelnya \"a\"." }
  ],

  prep: [
    { t: "mc", q: "Bahasa Inggrisnya 'pada bulan Mei'?", o: ["in May", "on May", "at May", "to May"], why: "Di depan nama bulan, pakai \"in\"." },
    { t: "mc", q: "Bahasa Inggrisnya 'pada tanggal 3 Mei'?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Di depan tanggal, pakai \"on\"." },
    { t: "mc", q: "'Saya sedang di dalam bus.' dalam bahasa Inggris?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "Untuk kendaraan umum, pakai \"on\"; karena bus yang sedang dinaiki, pakai artikel \"the\"." },
    { t: "mc", q: "Bahasa Inggrisnya 'pada malam hari'?", o: ["at night", "on night", "in night", "at the night"], why: "\"night\" adalah pengecualian: \"at night\", tanpa artikel." },
    { t: "mc", q: "Pilih kalimat yang benar.", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "Di depan nama kota, pakai \"in\"; nama kota tidak memakai artikel \"the\"." },

    { t: "order", p: "Kita ketemu di stasiun, ya. (stasiun yang sama-sama kita tahu)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Satu titik memakai \"at\"; stasiun yang sama-sama diketahui, jadi artikelnya \"the\"." },
    { t: "order", p: "Ponsel saya ada di atas meja itu.", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Di permukaan memakai \"on\"; meja yang ada di depan mata, jadi artikelnya \"the\"." },
    { t: "order", p: "Sampai jumpa minggu depan.", a: ["See", "you", "next", "week"], x: ["on"], why: "Di depan \"next\" tidak ada preposisi." },

    { t: "fill", q: "The meeting is __ three.", p: "Rapatnya pukul tiga.", a: ["at"], o: ["on", "to", "of"], why: "Di depan jam yang tepat, pakai \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Saya lahir tahun 1998.", a: ["in"], o: ["on", "at", "to"], why: "Di depan tahun, pakai \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "Sampai jumpa hari Jumat.", a: ["on"], o: ["in", "at", "to"], why: "Di depan nama hari, pakai \"on\"." },

    { t: "type", p: "Saya minum kopi pada pagi hari.", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + artikel", x: ["at"], why: "Bagian hari memakai \"in\", dan artikel \"the\" wajib ada: \"in the morning\"." },
    { t: "type", p: "Saya sedang di rumah.", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — tanpa artikel", x: ["the"], why: "\"at home\" dipakai tanpa artikel \"the\"." },
    { t: "type", p: "Sampai jumpa akhir pekan depan.", a: ["See you next weekend"], hint: "see · next weekend — perlu preposisi sebelum next?", x: ["on"], why: "Di depan \"next\" tidak ada preposisi." }
  ],

  smalltalk: [
    { t: "mc", q: "Rekan kerja bertanya \"How was your weekend?\". Jawaban mana yang tepat?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Yang ditanyakan sudah lewat, jadi jawab dengan V2 dan tambahkan satu informasi." },
    { t: "mc", q: "Menanggapi \"I don't drink coffee.\": 'Saya juga tidak.'", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Untuk menyetujui kalimat negatif, pakai \"Me neither\"." },
    { t: "mc", q: "Kalimat apa yang wajar untuk mengakhiri obrolan?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" adalah cara halus untuk pamit." },
    { t: "mc", q: "Kalimat pembuka mana yang cocok untuk orang yang baru dikenal?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Di negara berbahasa Inggris, cuaca adalah topik obrolan ringan yang paling aman." },
    { t: "mc", q: "Tanggapan mana yang menunjukkan minat pada \"I went to Busan last weekend.\"?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" dan \"That sounds fun!\" menunjukkan bahwa kamu tertarik." },

    { t: "order", p: "Ada rencana akhir pekan ini?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "Ungkapan ini memakai bentuk jamak \"plans\", dan karena yang dimaksud akhir pekan ini, pakai artikel \"the\"." },
    { t: "order", p: "Senang mengobrol denganmu.", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Salam untuk mengakhiri obrolan. Setelah \"nice\", pakai \"talking\"." },
    { t: "order", p: "Saya tidak suka film horor.", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Film secara umum, jadi bentuk jamak \"movies\" tanpa artikel." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Baik! Kamu sendiri?", a: ["about"], o: ["for", "with", "of"], why: "Jawab singkat, lalu tanya balik dengan \"How about you?\"." },
    { t: "fill", q: "I know, __?", p: "Iya, kan! / Betul sekali!", a: ["right"], o: ["light", "yes", "true"], why: "\"I know, right?\" menunjukkan kamu sangat setuju. Kata ini diawali R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Belakangan ini kamu nonton sesuatu yang seru?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Setelah \"any\" dalam pertanyaan, kata benda yang bisa dihitung memakai bentuk jamak." },

    { t: "type", p: "Bagaimana akhir pekanmu?", a: ["How was your weekend"], hint: "how · weekend — pakai bentuk lampau", x: ["is"], why: "Akhir pekan sudah lewat, jadi bertanya dengan V2 \"was\"." },
    { t: "type", p: "Cuaca hari ini bagus, ya.", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — pakai artikel atau tidak?", x: ["a"], why: "\"weather\" tidak bisa dihitung, jadi tanpa artikel \"a\" (a nice weather ✗)." },
    { t: "type", p: "Saya suka menonton film.", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — hal umum, jadi jamak", x: ["movie"], why: "Film secara umum, jadi bentuk jamak \"movies\"." }
  ],

  phrasal: [
    { t: "mc", q: "'Nyalakan itu.' dalam bahasa Inggris?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Kata ganti \"it\" berada di tengah phrasal verb: \"turn it on\"." },
    { t: "mc", q: "'Susu kami habis.' dalam bahasa Inggris?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"run out of\" = kehabisan. Jangan lupa \"of\"." },
    { t: "mc", q: "'Saya besar di Daegu.' dalam bahasa Inggris?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "\"grow up\" = tumbuh besar; bentuk V2: \"grew up\"." },
    { t: "mc", q: "'Bisa tolong jaga kucing saya?' dalam bahasa Inggris?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"look after\" = menjaga, merawat. Tidak bisa dipisah (\"look for\" artinya mencari)." },
    { t: "mc", q: "'Aku jemput kamu jam tujuh.' dalam bahasa Inggris?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Kata ganti \"you\" berada di antara \"pick\" dan \"up\"." },

    { t: "order", p: "Saya sedang mencari kacamata saya.", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Kacamata selalu bentuk jamak \"glasses\" (\"glass\" = gelas). Mencari = \"look for\"." },
    { t: "order", p: "Ayo kita pikirkan satu rencana.", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "\"come up with\" = menemukan (ide). Rencana yang belum ada, satu buah, jadi artikelnya \"a\"." },
    { t: "order", p: "Aku jemput kamu, ya.", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Kata ganti \"you\" berada di antara \"pick\" dan \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Bisa tolong matikan itu?", a: ["off"], o: ["of", "on", "out"], why: "Mematikan = \"turn off\". Jangan tertukar dengan ejaan \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Saya berolahraga setiap pagi.", a: ["out"], o: ["up", "off", "on"], why: "\"work out\" = berolahraga." },
    { t: "fill", q: "We ran out of __.", p: "Telur kami habis.", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Benda yang bisa dihitung seperti telur memakai bentuk jamak \"eggs\" saat habis." },

    { t: "type", p: "Tolong matikan itu.", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — kata ganti di tengah", x: ["on"], why: "Kata ganti \"it\" berada di antara \"turn\" dan \"off\"." },
    { t: "type", p: "Saya merawat dua ekor kucing.", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — dua, jadi jamak", x: ["cat"], why: "\"look after\" = merawat. Dua ekor, jadi pakai -s jamak: \"cats\"." },
    { t: "type", p: "Susu kami habis.", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — pakai artikel atau tidak?", x: ["a"], why: "\"milk\" tidak bisa dihitung, jadi tanpa artikel \"a\"." }
  ],

  numbers: [
    { t: "mc", q: "10.000 (sepuluh ribu) dalam bahasa Inggris?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Kelompokkan per tiga digit: 10 + thousand. Setelah angka, \"thousand\" tidak diberi -s jamak." },
    { t: "mc", q: "1.000.000 (satu juta) dalam bahasa Inggris?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Juta = \"million\". Setelah angka, \"million\" tidak diberi -s jamak." },
    { t: "mc", q: "Bagaimana cara membaca 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Untuk menit 1–9, tambahkan \"oh\"." },
    { t: "mc", q: "Bagaimana cara membaca $4.99 dengan wajar?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Harga dibaca sebagai dua kelompok angka: \"four ninety-nine\"." },
    { t: "mc", q: "Bagaimana membaca tahun 2026 dalam bahasa Inggris?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Tahun dibaca per dua digit." },

    { t: "order", p: "Jam tujuh lewat lima belas.", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 = \"fifteen\" (tekanan di belakang), 50 = \"fifty\" (tekanan di depan)." },
    { t: "order", p: "Harganya 15 dolar.", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Lebih dari satu dolar, jadi pakai -s jamak: \"dollars\"." },
    { t: "order", p: "dua kali seminggu", a: ["twice", "a", "week"], x: ["the", "one"], why: "‘Sekian kali per minggu’ memakai artikel \"a\": \"twice a week\"." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Jam sepuluh lewat seperempat.", a: ["a"], o: ["the", "one", "an"], why: "Di depan \"quarter\" (seperempat jam), pakai artikel \"a\"." },
    { t: "fill", q: "That's fifty __ won.", p: "Harganya 50.000 won.", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 = \"fifty thousand\". Setelah angka, \"thousand\" tidak diberi -s jamak." },
    { t: "fill", q: "I'll be there in ten __.", p: "Saya sampai dalam sepuluh menit.", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Sepuluh menit, jadi bentuk jamak \"minutes\"." },

    { t: "type", p: "Jam setengah empat.", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — baca jam dan menit apa adanya", x: ["thirteen"], why: "‘Setengah empat’ = 3:30, jadi \"three thirty\", bukan jam empat. Jangan tertukar dengan 13 (\"thirteen\")." },
    { t: "type", p: "Harganya 20 dolar.", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — lebih dari satu, jadi jamak", x: ["dollar"], why: "Lebih dari satu dolar, jadi pakai -s jamak: \"dollars\"." },
    { t: "type", p: "Saya berolahraga dua kali seminggu.", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — artikel apa untuk ‘per minggu’?", x: ["the"], why: "‘Seminggu’ di sini memakai artikel \"a\": \"a week\" (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Kalau email dimulai dengan Dear, salam mana yang paling wajar?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Setelah \"Dear\", tulis nama orangnya, bukan jabatan saja." },
    { t: "mc", q: "Kamu memberi tahu bahwa laporan sudah dilampirkan. Kalimat mana yang tepat?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Laporan yang akan diterima lawan bicara, jadi pakai artikel \"the\"." },
    { t: "mc", q: "'Kapan tenggatnya?' dalam bahasa Inggris?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Tenggat untuk pekerjaan ini, yang sama-sama diketahui, jadi artikelnya \"the\"." },
    { t: "mc", q: "Balasanmu terlambat. Ungkapan positif apa yang bisa dipakai sebagai pengganti minta maaf?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" tetap sopan tanpa minta maaf. Bedakan ejaannya dari \"patients\" (para pasien)." },
    { t: "mc", q: "Salam penutup apa yang cocok untuk email hari Jumat?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Satu akhir pekan, jadi pakai artikel \"a\", dan \"weekend\" tetap tunggal." },

    { t: "order", p: "Laporannya sudah saya lampirkan.", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Laporan yang akan diterima lawan bicara, jadi artikelnya \"the\"." },
    { t: "order", p: "Mari kita jadwalkan rapat.", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Satu rapat yang belum ditentukan, jadi artikelnya \"a\"." },
    { t: "order", p: "Saya cek dulu, nanti saya hubungi Anda lagi.", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"get back to you\" = menghubungi lagi. Pakai \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Bisakah Anda mengirim berkasnya paling lambat hari Jumat?", a: ["by"], o: ["until", "in", "at"], why: "Tenggat (‘paling lambat’) memakai \"by\" + hari atau tanggal." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Saya menulis email ini untuk menanyakan jadwal.", a: ["to"], o: ["for", "about", "at"], why: "Untuk menyatakan tujuan: \"I'm writing to\" + V1." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Terima kasih atas kerja kerasnya!", a: ["work"], o: ["works", "working", "job"], why: "\"work\" (pekerjaan, usaha) di sini tidak bisa dihitung, jadi tanpa -s jamak." },

    { t: "type", p: "Besok saya libur (tidak masuk kerja).", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow"], hint: "off · tomorrow — pakai to be + off", x: ["do"], why: "Untuk hari libur, pakai \"be off\"." },
    { t: "type", p: "Berkasnya sudah saya lampirkan.", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — berkas yang itu", x: ["a"], why: "Berkas yang akan diterima lawan bicara, jadi artikelnya \"the\"." },
    { t: "type", p: "Selamat berakhir pekan!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — artikel untuk satu akhir pekan", x: ["the"], why: "Satu akhir pekan, jadi pakai artikel \"a\": \"a great weekend\"." }
  ],

  idioms: [
    { t: "mc", q: "'Gampang sekali.' dalam bahasa Inggris?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Idiom dihafal utuh: ada artikel \"a\", dan \"cake\" tetap tunggal." },
    { t: "mc", q: "'Mahal sekali.' dalam bahasa Inggris?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"arm\" diawali bunyi vokal, jadi artikelnya \"an\"; \"leg\" diawali bunyi konsonan, jadi \"a\"." },
    { t: "mc", q: "'Cukup sampai di sini hari ini.' (boleh dipakai di rapat) dalam bahasa Inggris?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "\"call it a day\" adalah idiom yang dihafal utuh, termasuk artikel \"a\"." },
    { t: "mc", q: "'Senang sekali, rasanya seperti melayang.' dalam bahasa Inggris?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"on cloud nine\" dipakai tanpa artikel dan tanpa -s jamak." },
    { t: "mc", q: "Mana yang slang, hanya untuk teman?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" adalah slang anak muda yang berarti ‘serius’. Yang lain adalah idiom yang boleh dipakai di kantor." },

    { t: "order", p: "Saya mendengarkan baik-baik.", a: ["I'm", "all", "ears"], x: ["ear"], why: "Ungkapannya ‘seluruh badan jadi telinga’, jadi bentuk jamak \"ears\"." },
    { t: "order", p: "Saya harus belajar keras.", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "\"hit the books\": artikel \"the\" dan bentuk jamak \"books\" dipakai apa adanya." },
    { t: "order", p: "Itu bukan selera saya.", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "Hafalkan utuh \"not my cup of tea\". Di posisi \"my\" tidak ada artikel." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Sekali mendayung, dua tiga pulau terlampaui.", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Dua burung, jadi bentuk jamak \"birds\"." },
    { t: "fill", q: "Speak of the __!", p: "Panjang umur! (orangnya datang saat sedang dibicarakan)", a: ["devil"], o: ["tiger", "angel", "bird"], why: "Dalam bahasa Inggris, yang ‘datang’ adalah \"devil\" (setan)." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Saya agak tidak enak badan.", a: ["the"], o: ["a", "an", "my"], why: "\"under the weather\": artikel \"the\" dipakai apa adanya." },

    { t: "type", p: "Gampang sekali.", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — jangan lupa artikel", x: ["the"], why: "\"a piece of cake\": artikel \"a\" wajib ada." },
    { t: "type", p: "Semoga lancar, saya ikut berharap.", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — berapa jari?", x: ["finger"], why: "Dua jari disilangkan, jadi bentuk jamak \"fingers\"." },
    { t: "type", p: "Cukup sampai di sini hari ini.", a: ["Let's call it a day"], hint: "call it · day — bukan the", x: ["the"], why: "\"call it a day\": artikelnya \"a\", bukan \"the\"." }
  ]
};
