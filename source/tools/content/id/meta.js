/* id-en course metadata in the learner's language (Indonesian). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Langkah pertama", ["Salam", "Perkenalan diri", "Ungkapan penting 1", "Ungkapan penting 2", "Alfabet"]],
  ["Perjalanan & sehari-hari", ["Arah & transportasi", "Pesan di restoran", "Kafe & minimarket", "Belanja & bayar", "Angka, jam & tanggal", "Perjalanan (bandara & hotel)", "Rumah sakit & darurat"]],
  ["Obrolan & pertemanan", ["Obrolan ringan", "Perasaan & reaksi", "Pujian & rasa suka", "Telepon & singkatan chat"]],
  ["Kerja", ["Kerja & email"]],
  ["Seperti penutur asli", ["Awas pelafalan", "Phrasal verb", "Idiom bahasa Inggris", "Film, serial & slang"]],
  ["Khusus penutur bahasa Indonesia", ["Jebakan Inggris ala Indonesia"]]
];

exports.TAGS = {
  basics: ["Salam", "Perkenalan diri", "Ungkapan penting 1", "Ungkapan penting 2", "Angka, jam & tanggal", "Alfabet"],
  travel: ["Ungkapan penting 1", "Ungkapan penting 2", "Arah & transportasi", "Pesan di restoran", "Kafe & minimarket", "Belanja & bayar", "Angka, jam & tanggal", "Perjalanan (bandara & hotel)", "Rumah sakit & darurat"],
  social: ["Salam", "Perkenalan diri", "Obrolan ringan", "Perasaan & reaksi", "Pujian & rasa suka", "Telepon & singkatan chat"],
  work: ["Kerja & email", "Telepon & singkatan chat", "Angka, jam & tanggal", "Obrolan ringan"],
  media: ["Film, serial & slang", "Idiom bahasa Inggris", "Perasaan & reaksi"],
  skills: ["Awas pelafalan", "Phrasal verb", "Idiom bahasa Inggris", "Jebakan Inggris ala Indonesia"]
};

exports.DESC = {
  "Salam": "Salam dasar saat bertemu dan berpisah, beserta jawaban yang wajar",
  "Perkenalan diri": "Menyebut nama, asal, pekerjaan, dan hobi, serta menanyakannya balik",
  "Ungkapan penting 1": "Berterima kasih, minta maaf, dan minta diulang: wajib di hari pertama perjalanan",
  "Ungkapan penting 2": "Toilet, harga, Wi-Fi, minta difotokan: kalimat yang langsung terpakai di tempat tujuan",
  "Arah & transportasi": "Bertanya arah, memahami petunjuk jalan, naik kereta, bus, dan taksi",
  "Pesan di restoran": "Dari minta meja sampai memesan, alergi, membayar, dan tip",
  "Kafe & minimarket": "Memesan minuman, mengganti ukuran atau pilihan, struk dan kantong",
  "Belanja & bayar": "Melihat-lihat, mencoba pakaian, menanyakan ukuran, membayar, minta uang kembali, dan tukar barang",
  "Angka, jam & tanggal": "Jam, tanggal, harga, dan angka besar ala bahasa Inggris (koma untuk ribuan, titik untuk desimal)",
  "Obrolan ringan": "Membuka dan melanjutkan obrolan santai: akhir pekan, hobi, pekerjaan",
  "Perasaan & reaksi": "Mengucapkan selamat, kaget, bersimpati, dan menyatakan perasaan",
  "Pujian & rasa suka": "Memuji, berterima kasih, dan mendekatkan diri dengan orang baru",
  "Kerja & email": "Kalimat email kantor, rapat, dan mengatur jadwal",
  "Telepon & singkatan chat": "Bahasa Inggris di telepon dan singkatan chat seperti LOL, BRB, TBH",
  "Perjalanan (bandara & hotel)": "Imigrasi, check-in, kursi pesawat, bagasi, dan permintaan di hotel",
  "Rumah sakit & darurat": "Saat sakit, terluka, kehilangan barang, atau kecurian",
  "Phrasal verb": "Phrasal verb wajib penutur asli seperti pick up dan figure out",
  "Awas pelafalan": "TH/T, V/F, SH/S, i/ii, é/è, konsonan akhir bersuara (bag/back, dogs/docks), dan tekanan kata: pasangan bunyi yang paling sering tertukar",
  "Idiom bahasa Inggris": "Ungkapan yang aneh kalau diterjemahkan kata per kata, dengan padanannya dalam bahasa Indonesia",
  "Film, serial & slang": "Ungkapan masa kini dari film, serial, dan media sosial",
  "Alfabet": "Nama 26 huruf dalam bahasa Inggris untuk mengeja nama, email, dan kode pemesanan dengan lantang",
  "Jebakan Inggris ala Indonesia": "Boring/bored, refreshing, borrow/lend, map, resep, titel, ons: kata yang sering salah dipakai penutur bahasa Indonesia"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Jalan-jalan", decks: ["Ungkapan penting 1", "Ungkapan penting 2", "Arah & transportasi", "Pesan di restoran", "Kafe & minimarket", "Belanja & bayar", "Perjalanan (bandara & hotel)", "Rumah sakit & darurat"] },
  work: { label: "Kerja & kuliah", decks: ["Perkenalan diri", "Kerja & email", "Telepon & singkatan chat", "Angka, jam & tanggal", "Obrolan ringan"] },
  social: { label: "Teman & kencan", decks: ["Salam", "Perkenalan diri", "Obrolan ringan", "Perasaan & reaksi", "Pujian & rasa suka", "Telepon & singkatan chat"] },
  media: { label: "Film, serial & musik", decks: ["Film, serial & slang", "Idiom bahasa Inggris", "Perasaan & reaksi", "Phrasal verb", "Awas pelafalan"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Persiapan ke luar negeri", weeks: 3, decks: ["Salam", "Ungkapan penting 1", "Ungkapan penting 2", "Arah & transportasi", "Pesan di restoran", "Kafe & minimarket", "Belanja & bayar", "Angka, jam & tanggal", "Perjalanan (bandara & hotel)", "Rumah sakit & darurat"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Berteman dengan orang asing", weeks: 6, decks: ["Salam", "Perkenalan diri", "Ungkapan penting 1", "Obrolan ringan", "Perasaan & reaksi", "Pujian & rasa suka", "Telepon & singkatan chat", "Phrasal verb", "Film, serial & slang", "Idiom bahasa Inggris"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Lancar bicara dalam 90 hari", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["Pemula", "Pelajar", "Jago ngobrol", "Pelancong", "Warga lokal", "Profesional", "Pakar"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Pujian", expression: "Ungkapan sehari-hari", polite: "Sopan santun", saying: "Pepatah" };
