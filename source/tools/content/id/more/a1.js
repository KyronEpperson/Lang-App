/* id-en stage A1: lessons for Indonesian speakers (source of truth for id). Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/id.md §4 and §8; pron follows §6; practice sets follow the article-plural standing rule (§7). */
module.exports = [
{ id:"it-there", title:"it dan there: subjek yang tidak boleh kosong", blurb:"Cuaca dan jam pakai it; ‘ada …’ pakai there is / there are.", deck:"Obrolan ringan", body:`
<p>Dalam bahasa Indonesia, kalimat seperti <i>Hujan</i>, <i>Dingin, ya</i> atau <i>Ada kafe di dekat sini</i> sudah lengkap tanpa subjek. Dalam bahasa Inggris, posisi subjek tidak boleh kosong. Karena itu kita pakai dua kata pengisi yang tidak punya arti sendiri: <b>it</b> dan <b>there</b>.</p>
<h3>Cuaca dan jam: It</h3>
<p>Di sini <b>it</b> tidak berarti ‘itu’. Kata ini hanya mengisi posisi subjek. <i>Sudah jam tiga</i> menjadi <b>It's three o'clock</b>, tanpa terjemahan untuk <i>sudah</i>.</p>
{{ex:It's cold today.|its kould te-DEI|Hari ini dingin}}{{ex:It's three o'clock.|its thrii e-KLAAK|Sudah jam tiga}}{{ex:It's raining.|its REI-ning|Sedang hujan}}
<h3>‘Ada …’: There is / There are</h3>
<p><i>Ada</i> tidak pernah berubah, entah bendanya satu atau banyak. Dalam bahasa Inggris, kata kerjanya mengikuti kata bendanya: untuk satu benda <b>There is a …</b>, untuk lebih dari satu <b>There are …</b> dengan -s jamak. Dalam percakapan, <b>There is</b> disingkat menjadi <b>There's</b>.</p>
{{ex:There's a cafe near here.|dhérz e kè-FEI nir hir|Ada kafe di dekat sini}}{{ex:There are two rooms.|dhér er tuu ruumz|Ada dua kamar}}
<h3>Kalimat tanya dan kalimat negatif</h3>
<p>Untuk bertanya, <b>is</b> atau <b>are</b> pindah ke depan <b>there</b>.</p>
{{ex:Is there a bathroom here?|iz dhér e BÈTH-ruum hir?|Di sini ada kamar mandi?}}{{ex:Are there any seats?|er dhér É-ni siits?|Masih ada kursi kosong?}}{{ex:There isn't a bus today.|dhér I-zent e bas te-DEI|Hari ini tidak ada bus}}
<h3>Jangan tertukar dengan have</h3>
<p>Dalam bahasa sehari-hari, <i>Saya ada mobil</i> dan <i>Di luar ada mobil</i> sama-sama memakai <i>ada</i>. Bahasa Inggris memisahkannya: yang dimiliki seseorang pakai <b>have</b>, yang berada di suatu tempat pakai <b>there is</b>.</p>
{{ex:I have a car.|ai hèv e kaar|Saya punya mobil}}{{ex:There's a car outside.|dhérz e kaar aut-SAID|Di luar ada mobil}}
<div class="tip">Kesalahan paling umum: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓ / <b>There is two rooms.</b> ✗ → <b>There are two rooms.</b> ✓</div>`,
check:[["Bahasa Inggrisnya 'Hari ini panas'?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Untuk cuaca, posisi subjek diisi \"it\"."],["There ___ three people. Apa isi bagian yang kosong?",["is","are","have","be"],1,"\"Three people\" lebih dari satu, jadi \"there are\"."],["Bahasa Inggrisnya 'Di sini ada kamar mandi?'",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Untuk bertanya apakah sesuatu ada, pakai \"Is there a …?\"."]],
practice:[
["mc","'Sedang hujan' dalam bahasa Inggris?","It's raining.","Is raining.","There is raining.","Rain is.","Untuk cuaca, subjeknya \"it\"."],
["mc","'Ada kafe di dekat sini' dalam bahasa Inggris?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","‘Ada’ di suatu tempat = \"there is\"; satu kafe, jadi pakai artikel \"a\"."],
["mc","There ___ two rooms. Apa isi bagian yang kosong?","are","is","have","has","\"Rooms\" bentuk jamak, jadi \"are\"."],
["mc","'Sudah jam tiga' dalam bahasa Inggris?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Jam juga diawali \"it\"; ‘sudah’ tidak perlu diterjemahkan."],
["mc","'Saya punya mobil' dalam bahasa Inggris?","I have a car.","There is a car me.","I am a car.","It's a car me.","Yang dimiliki seseorang pakai \"have\"."],
["or","Hari ini dingin","It's cold today","There's","Untuk cuaca, subjeknya \"it\", bukan \"there\"."],
["or","Di luar ada mobil","There's a car outside","cars","Satu mobil, jadi artikel \"a\" dan bentuk tunggal \"car\", bukan jamak."],
["or","Ada dua kursi kosong","There are two seats","seat is","Lebih dari satu, jadi \"are\" dan bentuk jamak \"seats\"."],
["fi","__ cold today.","Hari ini dingin","It's|It is","Is|There's|This","Posisi subjek diisi \"it\"."],
["fi","There __ a bank near here.","Ada bank di dekat sini","is","are|have|be","Satu bank, jadi \"is\"."],
["fi","__ there any seats?","Masih ada kursi kosong?","Are","Is|Do|Have","\"Seats\" bentuk jamak, jadi \"Are\"."],
["ty","Hari ini panas","It's hot today","it · hot · today — cuaca pakai it","There's","Untuk cuaca, kalimatnya diawali \"it\"."],
["ty","Di sini ada kamar mandi?","Is there a bathroom here|Is there a restroom here","is there · bathroom — ingat artikel","the","Satu kamar mandi yang baru ditanyakan, jadi artikel \"a\"."],
["ty","Ada dua kamar","There are two rooms","there are · two · room — bentuk jamak","room","Ada \"two\", jadi kata benda wajib bentuk jamak: \"rooms\"."]]},

{ id:"plurals", title:"Jamak -s, this / these, my / your", blurb:"Lebih dari satu, wajib -s, juga setelah angka. This untuk satu, these untuk banyak.", deck:"Belanja & bayar", body:`
<p>Dalam bahasa Indonesia, jamak tidak wajib ditandai. Kita bisa bilang <i>buku-buku</i>, tapi setelah angka atau <i>banyak</i> kata ulang justru tidak dipakai: <i>dua buku</i>, <i>banyak buku</i>. Bahasa Inggris kebalikannya: begitu bendanya lebih dari satu, kata benda (<b>noun</b>) wajib diberi <b>-s</b>, termasuk setelah angka.</p>
<h3>Cara membuat bentuk jamak</h3>
<div class="tbl"><table><tr><th>Aturan</th><th>Contoh</th></tr><tr><td>Kebanyakan kata: tambah -s</td><td class="k">book → books</td></tr><tr><td>Setelah s, x, ch, sh: tambah -es</td><td class="k">box → boxes</td></tr><tr><td>Konsonan + y: ganti jadi -ies</td><td class="k">city → cities</td></tr><tr><td>Tidak beraturan</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|tuu buks|dua buku}}{{ex:three boxes|thrii BAAK-siz|tiga kotak}}{{ex:I have two children.|ai hèv tuu CIL-dren|Saya punya dua anak}}
<p>Cukup satu tanda: <b>two books</b>, sama seperti kita bilang <i>dua buku</i>, bukan <i>dua buku-buku</i>. Kata ulang tidak diterjemahkan dua kali.</p>
<h3>this / that untuk satu, these / those untuk banyak</h3>
<p>Urutannya terbalik dari bahasa Indonesia: <i>buku ini</i> → <b>this book</b>, <i>tas saya</i> → <b>my bag</b>. Kata penunjuk dan pemilik selalu di depan kata benda.</p>
{{ex:this book|dhis buk|buku ini}}{{ex:This is my bag.|dhis iz mai bèg|Ini tas saya}}{{ex:These are my keys.|dhiiz er mai kiiz|Ini kunci-kunci saya}}{{ex:Those shoes are nice.|dhouz syuuz er nais|Sepatu itu bagus}}
<h3>my, your, his, her, our, their</h3>
<p>Kata ganti kepemilikan ini menggantikan <i>-ku</i>, <i>-mu</i>, <i>-nya</i>, <i>kami</i> dan <i>mereka</i> di belakang kata benda. Kalau sudah ada <b>my</b> atau <b>your</b>, jangan tambahkan artikel <b>a</b> atau <b>the</b>.</p>
{{ex:Is this your phone?|iz dhis yer foun?|Ini ponsel kamu?}}{{ex:Her brothers live in Surabaya.|her BRA-dherz liv in suu-re-BAI-e|Saudara laki-lakinya tinggal di Surabaya}}
<div class="tip">Setelah angka, <b>many</b>, <b>these</b> dan <b>those</b>, kata benda selalu jamak: <b>two friend</b> ✗ → <b>two friends</b> ✓ / <b>book this</b> ✗ → <b>this book</b> ✓ / <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Apa isi bagian yang kosong?",["sister","sisters","a sister","sister's"],1,"Ada \"two\", jadi bentuk jamak \"sisters\"."],["___ are my keys. Apa isi bagian yang kosong?",["This","That","These","It"],2,"\"Keys\" jamak, jadi \"These\"."],["Bahasa Inggrisnya 'Ini tas saya'?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Kalau sudah ada \"my\", tidak pakai artikel, dan \"my\" di depan kata benda."]],
practice:[
["mc","'dua buku' dalam bahasa Inggris?","two books","two book","two a book","twos book","Setelah angka, kata benda wajib bentuk jamak -s."],
["mc","Bentuk jamak dari \"child\"?","children","childs","childes","child","Jamak tidak beraturan: \"children\"."],
["mc","Isi bagian yang kosong: ___ shoes are nice. (sepatu itu)","Those","That","This","It","\"Shoes\" jamak dan letaknya agak jauh, jadi \"those\"."],
["mc","'Ini tas saya' dalam bahasa Inggris?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","\"My\" tidak dipakai bersama artikel."],
["mc","Bentuk jamak dari \"box\"?","boxes","boxs","boxies","box","Setelah s, x, ch, sh, tambahkan -es."],
["or","Ini kunci-kunci saya","These are my keys","key This","Lebih dari satu, jadi \"these\" dan bentuk jamak \"keys\"."],
["or","Saya punya dua anak","I have two children","child a","Ada \"two\", jadi jamak \"children\"; artikel \"a\" tidak dipakai."],
["or","Sepatu itu bagus","Those shoes are nice","That","\"Shoes\" jamak, jadi \"those\", bukan \"that\"."],
["fi","I have three __.","Saya punya tiga kucing","cats","cat|a cat|cat's","Ada \"three\", jadi bentuk jamak \"cats\"."],
["fi","__ is my friend.","Ini teman saya","This","These|Those|They","Satu orang, jadi \"this\"."],
["fi","Two __, please.","Kopinya dua, ya","coffees","coffee|a coffee|coffee's","Saat memesan per gelas, kopi dihitung: \"two coffees\" (jamak)."],
["ty","Ini buku-buku saya","These are my books","these · my · book — bentuk jamak","book","Lebih dari satu, jadi \"these\" dan jamak \"books\"."],
["ty","Saya punya dua saudara perempuan","I have two sisters","have · two · sister — bentuk jamak","sister","Ada \"two\", jadi jamak \"sisters\"."],
["ty","Ini tas saya","This is my bag","this · my · bag — tanpa artikel","a","Kalau ada \"my\", artikel \"a\" tidak dipakai."]]},
{ id:"present", title:"Simple Present Tense: kata kerja tetap, negatifnya pakai don't", blurb:"Urutan katanya sama dengan bahasa Indonesia. Bedanya: ‘tidak’ bukan not, tapi don't.", deck:"Perkenalan diri", body:`
<p>Kabar baik: urutan kata dasar bahasa Inggris sama dengan bahasa Indonesia, yaitu <b>subjek → kata kerja → objek</b>. <i>Saya minum kopi</i> → <b>I drink coffee</b>. Dalam Simple Present Tense, kata kerjanya juga tetap V1 (bentuk dasar), seperti <i>minum</i> yang tidak pernah berubah.</p>
{{ex:I drink coffee.|ai dringk KOO-fi|Saya minum kopi}}{{ex:I study English.|ai STA-di ING-glisy|Saya belajar bahasa Inggris}}
<h3>Tempat dulu, baru waktu</h3>
<p>Keterangan tempat dan waktu biasanya di akhir kalimat, dengan urutan <b>tempat → waktu</b>. Dalam bahasa Indonesia kita sering mulai dengan <i>Setiap hari …</i>; dalam bahasa Inggris keterangan waktu lebih sering di belakang.</p>
{{ex:We live in Jakarta.|wi liv in je-KAAR-te|Kami tinggal di Jakarta}}{{ex:I study English every day.|ai STA-di ING-glisy ÉV-ri dei|Saya belajar bahasa Inggris setiap hari}}{{ex:They work on weekends.|dhei werk aan WIIK-éndz|Mereka bekerja setiap akhir pekan}}
<h3>Kebiasaan dan fakta, plus don't</h3>
<p>Simple Present Tense dipakai untuk kebiasaan dan fakta. Bagian yang paling sering salah adalah kalimat negatif. Dalam bahasa Indonesia, <i>tidak</i> langsung di depan kata kerja. Dalam bahasa Inggris, <b>not</b> tidak bisa berdiri sendiri di depan kata kerja biasa; kita perlu kata kerja bantu <b>don't</b>.</p>
{{ex:I don't eat meat.|ai dount iit miit|Saya tidak makan daging}}{{ex:I don't like spicy food.|ai dount laik SPAI-si fuud|Saya tidak suka makanan pedas}}
<p>Jangan juga menambahkan <b>to be</b> di depan kata kerja: <b>I am work</b> ✗ → <b>I work</b> ✓.</p>
<h3>Seberapa sering: always, usually, sometimes, never</h3>
<p>Kata-kata ini diletakkan <b>tepat sebelum</b> kata kerja, sama seperti <i>biasanya</i> dalam <i>Saya biasanya bangun jam tujuh</i>.</p>
{{ex:I usually get up at seven.|ai YUU-zyu-e-li gét ap et SÉ-ven|Saya biasanya bangun jam tujuh}}{{ex:I never drink coffee at night.|ai NÉ-ver dringk KOO-fi et nait|Saya tidak pernah minum kopi malam-malam}}
<div class="tip">Kesalahan paling umum: <b>I not like spicy food.</b> ✗ → <b>I don't like spicy food.</b> ✓ / <b>I am work in Jakarta.</b> ✗ → <b>I work in Jakarta.</b> ✓</div>`,
check:[["Mana urutan yang benar untuk 'Saya minum kopi'?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Subjek + kata kerja + objek, sama seperti bahasa Indonesia."],["I ___ eat meat. (tidak makan) Apa isi bagian yang kosong?",["not","am not","no","don't"],3,"Kalimat negatif dengan kata kerja biasa pakai \"don't\"."],["Pilih kalimat dengan posisi \"always\" yang benar.",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Kata seperti \"always\" diletakkan tepat sebelum kata kerja."]],
practice:[
["mc","'Saya belajar bahasa Inggris' dalam bahasa Inggris?","I study English.","I English study.","I am study English.","Study I English.","Subjek + kata kerja + objek; tidak perlu \"am\"."],
["mc","'Saya tidak makan daging' dalam bahasa Inggris?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","‘Tidak’ + kata kerja biasa = \"don't\" + V1."],
["mc","'Kami tinggal di Seoul' dalam bahasa Inggris?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Tempat diletakkan setelah kata kerja."],
["mc","'Saya biasanya bangun jam tujuh' dalam bahasa Inggris?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","\"Usually\" tepat sebelum kata kerja."],
["mc","Mana kalimat untuk kebiasaan setiap hari?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Kebiasaan pakai Simple Present Tense."],
["or","Saya minum kopi setiap hari","I drink coffee every day","the am","Kebiasaan pakai V1; kopi secara umum tanpa artikel."],
["or","Saya banyak membaca buku","I read many books","book","Setelah \"many\", kata benda bentuk jamak: \"books\"."],
["or","Kami bekerja setiap akhir pekan","We work on weekends","are","Kata kerja biasa tidak didahului \"are\"."],
["fi","I __ like fish.","Saya tidak suka ikan","don't|do not","not|am not|no","Kalimat negatif dengan kata kerja biasa pakai \"don't\"."],
["fi","I __ English every day.","Saya belajar bahasa Inggris setiap hari","study","am study|studying|to study","Simple Present Tense: kata kerja V1 saja."],
["fi","They live __ Busan.","Mereka tinggal di Busan","in","at|on|to","Di depan nama kota pakai \"in\"."],
["ty","Saya minum teh","I drink tea","drink · tea — tanpa artikel","a","Teh secara umum tanpa artikel."],
["ty","Saya suka kucing","I like cats","like · cat — bentuk jamak","cat","Untuk hewan secara umum, pakai bentuk jamak: \"cats\"."],
["ty","Saya tidak makan daging","I don't eat meat","don't · eat · meat — bukan not","am","‘Tidak’ + kata kerja biasa = \"don't\"."]]},
{ id:"questions", title:"Kalimat tanya: Do you …? dan kata tanya", blurb:"Menaikkan nada saja tidak cukup. Do di depan, kata tanya paling depan.", deck:"Ungkapan penting 2", body:`
<p>Dalam bahasa Indonesia, <i>Kamu suka kopi?</i> sudah menjadi pertanyaan hanya dengan nada naik. Dalam tulisan kita bisa menambahkan <i>apakah</i> di depan. Bahasa Inggris juga menaruh sesuatu di depan, tapi kata itu berubah sesuai kalimatnya: <b>Is</b>, <b>Are</b>, <b>Do</b> atau <b>Does</b>.</p>
<h3>Dengan to be: tukar posisi</h3>
{{ex:Are you okay?|er yu ou-KEI?|Kamu baik-baik saja?}}{{ex:Is this your bag?|iz dhis yer bèg?|Ini tas kamu?}}
<h3>Dengan kata kerja biasa: Do di depan</h3>
<p>Kalau kalimatnya memakai kata kerja biasa, taruh <b>Do</b> di depan; urutan lainnya tetap. <b>Do</b> di sini bekerja seperti <i>apakah</i>, tapi tidak boleh dihilangkan.</p>
{{ex:Do you like coffee?|de yu laik KOO-fi?|Kamu suka kopi?}}{{ex:Do you speak English?|de yu spiik ING-glisy?|Kamu berbahasa Inggris?}}
<p>Jawaban pendeknya mengulang kata kerja bantu: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>Kata tanya paling depan</h3>
<p>Kata tanya seperti <b>what</b> (apa), <b>where</b> (di mana), <b>when</b> (kapan), <b>who</b> (siapa), <b>why</b> (kenapa) dan <b>how</b> (bagaimana) selalu di awal kalimat, lalu diikuti urutan pertanyaan biasa. Dalam bahasa Indonesia kita sering menaruhnya di akhir (<i>Kamu tinggal di mana?</i>); dalam bahasa Inggris tidak bisa.</p>
{{ex:Where do you live?|wér de yu liv?|Kamu tinggal di mana?}}{{ex:What do you do?|wat de yu duu?|Kamu kerja apa?}}{{ex:Where is the bathroom?|wér iz dhe BÈTH-ruum?|Kamar mandinya di mana?}}{{ex:How much is this?|hau mac iz dhis?|Ini berapa harganya?}}
<div class="tip">Kesalahan paling umum: <b>You like coffee?</b> ✗ (dalam tulisan) → <b>Do you like coffee?</b> ✓ / <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["Bahasa Inggrisnya 'Kamu suka kopi?'",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Pertanyaan dengan kata kerja biasa diawali \"Do\"."],["Bahasa Inggrisnya 'Kamu tinggal di mana?'",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Urutannya: kata tanya + do + subjek + kata kerja."],["Jawaban yang tepat untuk \"Do you speak English?\"",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Ditanya dengan \"Do\", dijawab dengan \"do\"."]],
practice:[
["mc","'Kamu berbahasa Inggris?' dalam bahasa Inggris?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Pertanyaan dengan kata kerja biasa diawali \"Do\"."],
["mc","'Kamu tinggal di mana?' dalam bahasa Inggris?","Where do you live?","Where you live?","Where are you live?","Where live you?","Kata tanya + do + subjek + kata kerja."],
["mc","'Ini berapa?' dalam bahasa Inggris?","How much is this?","How much this is?","How much does this?","What much is this?","Harga ditanyakan dengan \"How much is …?\"."],
["mc","Jawab 'ya' untuk \"Do you like tea?\"","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Ditanya dengan \"Do\", dijawab dengan \"do\"."],
["mc","'Kamu kerja apa?' (pekerjaan) dalam bahasa Inggris?","What do you do?","What are you do?","What you do?","What do you?","Pekerjaan ditanyakan dengan \"What do you do?\"."],
["or","Kamu suka kopi?","Do you like coffee","Are the","Diawali \"Do\"; kopi secara umum tanpa artikel."],
["or","Kamar mandinya di mana?","Where is the bathroom","a do","Kamar mandi di gedung ini sudah sama-sama diketahui, jadi artikel \"the\"."],
["or","Kamu tinggal di mana?","Where do you live","are","Pertanyaan dengan kata kerja biasa butuh \"do\"."],
["fi","__ you like music?","Kamu suka musik?","Do","Are|Is|Does","\"Like\" kata kerja biasa, jadi \"Do\"."],
["fi","__ do you live?","Kamu tinggal di mana?","Where","What|Who|When","Untuk menanyakan tempat, pakai \"where\"."],
["fi","What time __ it?","Jam berapa sekarang?","is","do|does|are","Jam ditanyakan dengan to be: \"is\"."],
["ty","Kamu berbahasa Inggris?","Do you speak English","do · speak · English — pakai Do","Are","Pertanyaan dengan kata kerja biasa diawali \"Do\"."],
["ty","Kamar mandinya di mana?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — artikel the","a","Kamar mandi yang sama-sama diketahui, jadi artikel \"the\"."],
["ty","Kamu suka anjing?","Do you like dogs","do · like · dog — bentuk jamak","dog","Untuk hewan secara umum, pakai bentuk jamak: \"dogs\"."]]},
{ id:"third-s", title:"he, she, it + -s: does / doesn't", blurb:"Subjeknya satu orang atau satu benda? Kata kerjanya ditambah -s. Kalimat tanya dan negatif pakai does.", deck:"Perkenalan diri", body:`
<p>Dalam bahasa Indonesia, kata kerja tidak pernah berubah karena subjeknya: <i>saya kerja</i>, <i>dia kerja</i>. Dalam Simple Present Tense bahasa Inggris, kalau subjeknya <b>he</b>, <b>she</b>, <b>it</b>, atau satu orang atau satu benda, kata kerjanya ditambah <b>-s</b>. Aturannya kecil, tapi mudah terlupa: kesalahan ini bahkan masih sering muncul di skripsi mahasiswa.</p>
<div class="tbl"><table><tr><th>Subjek</th><th>Kata kerja</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|syi werks et e bèngk|Dia (perempuan) bekerja di bank}}{{ex:He likes soccer.|hi laiks SAA-ker|Dia (laki-laki) suka sepak bola}}{{ex:My mom cooks well.|mai maam kuks wél|Ibu saya pintar memasak}}
<p>Ingat juga: <i>dia</i> bisa berarti <b>he</b> atau <b>she</b>. Pilih sesuai orangnya.</p>
<h3>Kata kerja yang bentuknya sedikit berubah</h3>
{{ex:She has a car.|syi hèz e kaar|Dia punya mobil (have → has)}}{{ex:He goes to work at eight.|hi gouz te werk et eit|Dia berangkat kerja jam delapan (go → goes)}}{{ex:She studies English.|syi STA-diz ING-glisy|Dia belajar bahasa Inggris (study → studies)}}
<h3>Kalimat negatif dan tanya: does</h3>
<p>Kalau ada <b>doesn't</b> atau <b>Does</b>, -s pindah ke kata kerja bantu itu. Kata kerja sesudahnya kembali ke V1 tanpa -s.</p>
{{ex:He doesn't drink coffee.|hi DA-zent dringk KOO-fi|Dia tidak minum kopi}}{{ex:Does she live here?|dez syi liv hir?|Dia tinggal di sini?}}
<div class="tip">Kesalahan paling umum: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓ / <b>They works.</b> ✗ → <b>They work.</b> ✓</div>`,
check:[["She ___ in Seoul. Apa isi bagian yang kosong?",["live","lives","living","is live"],1,"Subjeknya \"she\", jadi kata kerja ditambah -s."],["He ___ like coffee. Apa isi bagian yang kosong?",["don't","isn't","doesn't","not"],2,"Kalimat negatif untuk \"he\" pakai \"doesn't\"."],["Bahasa Inggrisnya 'Dia (perempuan) punya mobil'?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Setelah \"she\", \"have\" menjadi \"has\"."]],
practice:[
["mc","My brother ___ in Busan. Apa isi bagian yang kosong?","works","work","working","is work","Satu orang, jadi \"works\"."],
["mc","'Dia (laki-laki) tidak minum kopi' dalam bahasa Inggris?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Untuk \"he\": \"doesn't\" + V1."],
["mc","'Dia (perempuan) tinggal di sini?' dalam bahasa Inggris?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Setelah \"Does\", kata kerja tanpa -s."],
["mc","Bentuk \"have\" untuk \"she\"?","has","haves","have","is have","\"Have\" berubah menjadi \"has\"."],
["mc","Bentuk \"study\" untuk \"he\"?","studies","studys","study","studyes","Konsonan + y menjadi -ies."],
["or","Dia (perempuan) bekerja di bank","She works at a bank","work the","\"She\" + \"works\"; tempat kerja yang baru disebut pakai artikel \"a\"."],
["or","Dia (laki-laki) punya dua anjing","He has two dogs","have dog","\"He\" + \"has\"; ada \"two\", jadi jamak \"dogs\"."],
["or","Dia (perempuan) tidak makan daging","She doesn't eat meat","eats","Setelah \"doesn't\", kata kerja tanpa -s."],
["fi","He __ soccer.","Dia (laki-laki) suka sepak bola","likes","like|liking|is like","Subjeknya \"he\", jadi \"likes\"."],
["fi","__ she speak English?","Dia (perempuan) berbahasa Inggris?","Does","Do|Is|Are","Pertanyaan untuk \"she\" pakai \"Does\"."],
["fi","She __ to work at eight.","Dia (perempuan) berangkat kerja jam delapan","goes","go|going|gos","\"Go\" menjadi \"goes\"."],
["ty","Dia (laki-laki) punya mobil","He has a car","has · car — artikel a","have","\"He\" + \"has\"; satu mobil, jadi artikel \"a\"."],
["ty","Dia (perempuan) suka kucing","She likes cats","likes · cat — bentuk jamak","cat","\"She\" + \"likes\"; kucing secara umum pakai jamak \"cats\"."],
["ty","Dia (laki-laki) tidak tinggal di sini","He doesn't live here","doesn't · live · here — kata kerja V1","lives","Setelah \"doesn't\", kata kerja kembali ke V1."]]},
{ id:"countable", title:"Bisa dihitung atau tidak: some, any, much, many", blurb:"‘Banyak’ dalam bahasa Inggris ada dua: many untuk yang bisa dihitung, much untuk yang tidak.", deck:"Pesan di restoran", body:`
<p>Kata benda bahasa Inggris dibagi dua: <b>yang bisa dihitung</b> (<b>countable</b>) dan <b>yang tidak bisa dihitung</b> (<b>uncountable</b>). Bahasa Indonesia tidak membedakannya; <i>banyak</i> dipakai untuk apa saja: <i>banyak teman</i>, <i>banyak uang</i>. Dalam bahasa Inggris, pilihan katanya tergantung jenis kata bendanya.</p>
<div class="tbl"><table><tr><th>Bisa dihitung</th><th>Tidak bisa dihitung</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>bisa pakai a / an, angka, -s jamak</td><td>tidak bisa pakai a / an, angka, -s jamak</td></tr></table></div>
<p>Hati-hati dengan kata yang dalam bahasa Indonesia terasa bisa dihitung: <b>information</b> (informasi), <b>advice</b> (saran), <b>baggage</b> (bagasi), <b>furniture</b> (perabot). Semuanya tidak bisa dihitung, jadi tanpa -s dan tanpa <b>a</b>.</p>
<h3>some dan any</h3>
<p>‘Sedikit, beberapa’ dalam kalimat positif pakai <b>some</b>, dalam kalimat negatif dan kalimat tanya pakai <b>any</b>.</p>
{{ex:I have some money.|ai hèv sem MA-ni|Saya punya sedikit uang}}{{ex:I don't have any money.|ai dount hèv É-ni MA-ni|Saya tidak punya uang sama sekali}}{{ex:Do you have any questions?|de yu hèv É-ni KWÉS-cenz?|Ada pertanyaan?}}
<h3>many dan much</h3>
<p>Yang bisa dihitung: <b>many</b> + bentuk jamak. Yang tidak bisa dihitung: <b>much</b>. <b>A lot of</b> bisa untuk keduanya.</p>
{{ex:How many people?|hau MÉ-ni PII-pel?|Berapa orang?}}{{ex:How much is it?|hau mac iz it?|Berapa harganya?}}{{ex:I don't have much time.|ai dount hèv mac taim|Saya tidak punya banyak waktu}}
<h3>Cara menghitung yang tidak bisa dihitung</h3>
<p>Mirip <i>segelas</i> dan <i>secangkir</i> dalam bahasa Indonesia, kita sebut wadahnya.</p>
{{ex:a glass of water|e glès ev WAA-der|segelas air}}{{ex:a cup of coffee|e kap ev KOO-fi|secangkir kopi}}
<div class="tip">Kesalahan paling umum: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>advices</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b>, <b>advice</b> ✓</div>`,
check:[["How ___ people are there? Apa isi bagian yang kosong?",["much","many","any","a"],1,"\"People\" bisa dihitung, jadi \"many\"."],["Mana kata benda yang tidak bisa dihitung?",["apple","chair","water","friend"],2,"\"Water\" tidak bisa diberi \"a\" atau -s."],["I don't have ___ money. Apa isi bagian yang kosong?",["some","a","many","any"],3,"Dalam kalimat negatif, pakai \"any\"."]],
practice:[
["mc","Can I have ___ water? Apa isi bagian yang kosong?","some","a","many","an","\"Water\" tidak bisa dihitung, jadi tidak bisa pakai \"a\" atau \"many\"."],
["mc","How ___ time do we have? Apa isi bagian yang kosong?","much","many","any","a","\"Time\" tidak bisa dihitung, jadi \"much\"."],
["mc","'Ada pertanyaan?' dalam bahasa Inggris?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Setelah \"any\", kata benda yang bisa dihitung berbentuk jamak."],
["mc","'segelas air' dalam bahasa Inggris?","a glass of water","a water glass of","one waters","a glass water","Yang tidak bisa dihitung dihitung dengan wadahnya: \"a glass of\"."],
["mc","I have ___ friends in Seoul. Apa isi bagian yang kosong?","many","much","a","an","\"Friends\" bisa dihitung dan jamak, jadi \"many\"."],
["or","Saya punya sedikit uang","I have some money","a moneys","\"Money\" tidak bisa dihitung: tanpa artikel \"a\" dan tanpa -s jamak."],
["or","Apelnya dua, ya","Two apples please","apple","Ada \"two\", jadi bentuk jamak \"apples\"."],
["or","Saya tidak punya banyak waktu","I don't have much time","many","\"Time\" tidak bisa dihitung, jadi \"much\"."],
["fi","How __ is this?","Ini berapa harganya?","much","many|any|some","Harga ditanyakan dengan \"how much\"."],
["fi","I don't have __ questions.","Saya tidak punya pertanyaan","any","some|much|a","Dalam kalimat negatif, pakai \"any\"."],
["fi","a cup __ coffee","secangkir kopi","of","for|in|a","Polanya \"a cup of …\"."],
["ty","Boleh minta air?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — tanpa artikel","a","\"Water\" tidak bisa dihitung, jadi \"some\", bukan artikel \"a\"."],
["ty","Kamu punya pertanyaan?","Do you have any questions","any · question — bentuk jamak","question","Setelah \"any\", kata benda yang bisa dihitung menjadi jamak: \"questions\"."],
["ty","Berapa orang?","How many people","how many · people — bukan much","much","Orang bisa dihitung, jadi \"many\"."]]},
{ id:"object-have", title:"me, him, her dan have", blurb:"Setelah kata kerja, bukan I tapi me. Dia bisa him atau her, dan ‘punya’ = have.", deck:"Perkenalan diri", body:`
<p>Dalam bahasa Indonesia, kata ganti tidak berubah bentuk: <i>Dia kenal saya</i>, <i>Saya kenal dia</i>. Dalam bahasa Inggris, kata ganti punya bentuk khusus untuk objek, yang dipakai <b>setelah</b> kata kerja atau preposisi (kata depan).</p>
<div class="tbl"><table><tr><th>Subjek</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Objek</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
<p><i>Dia</i> harus dipilih: laki-laki <b>he / him</b>, perempuan <b>she / her</b>. Begitu juga akhiran <i>-nya</i>: <b>his</b>, <b>her</b>, atau <b>its</b> untuk benda dan hewan.</p>
{{ex:She knows me.|syi nouz mi|Dia kenal saya}}{{ex:I like him.|ai laik him|Saya suka dia (laki-laki)}}{{ex:Can you help us?|ken yu hélp as?|Bisa bantu kami?}}{{ex:I work with her.|ai werk widh her|Saya bekerja dengan dia (perempuan)}}{{ex:Budi loves his mother.|BUU-di lavz hiz MA-dher|Budi sayang ibunya}}
<h3>have: punya</h3>
<p>Dalam bahasa sehari-hari kita sering bilang <i>Saya ada mobil</i>. Dalam bahasa Inggris, apa pun yang dimiliki seseorang pakai <b>have</b>: keluarga, barang, juga waktu.</p>
{{ex:I have two brothers.|ai hèv tuu BRA-dherz|Saya punya dua saudara laki-laki}}{{ex:Do you have a pen?|de yu hèv e pén?|Kamu punya pulpen?}}{{ex:I don't have time.|ai dount hèv taim|Saya tidak punya waktu}}
<h3>have: makan, minum</h3>
<p>Di depan nama waktu makan (<b>breakfast</b>, <b>lunch</b>, <b>dinner</b>) tidak pakai artikel.</p>
{{ex:Let's have lunch.|léts hèv lanc|Ayo makan siang}}{{ex:I have coffee every morning.|ai hèv KOO-fi ÉV-ri MOOR-ning|Saya minum kopi setiap pagi}}
<div class="tip">Kesalahan paling umum: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>Budi loves her mother.</b> ✗ (kalau maksudnya ibu Budi) → <b>Budi loves his mother.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (dia, laki-laki) Apa isi bagian yang kosong?",["he","his","him","he's"],2,"Setelah kata kerja, pakai bentuk objek \"him\"."],["Can you help ___? (kami) Apa isi bagian yang kosong?",["us","we","our","ours"],0,"Setelah kata kerja, pakai bentuk objek \"us\"."],["Bahasa Inggrisnya 'Kamu punya pulpen?'",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" kata kerja biasa, jadi ditanyakan dengan \"Do\"."]],
practice:[
["mc","She knows ___. (saya) Apa isi bagian yang kosong?","me","I","my","mine","Setelah kata kerja, pakai bentuk objek \"me\"."],
["mc","I like ___. (mereka) Apa isi bagian yang kosong?","them","they","their","theirs","Setelah kata kerja, pakai bentuk objek \"them\"."],
["mc","'Bisa bantu kami?' dalam bahasa Inggris?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Setelah kata kerja, pakai \"us\"."],
["mc","'Ayo makan siang' dalam bahasa Inggris?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Nama waktu makan tidak pakai artikel."],
["mc","'Saya punya dua saudara laki-laki' dalam bahasa Inggris?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","Keluarga pakai \"have\", dan setelah \"two\" pakai jamak."],
["or","Kamu punya pulpen?","Do you have a pen","the pens","Pulpen apa saja, satu, jadi artikel \"a\" dan bentuk tunggal \"pen\"."],
["or","Saya suka dia (perempuan)","I like her","she","Setelah kata kerja, pakai bentuk objek \"her\"."],
["or","Saya punya dua adik perempuan","I have two sisters","sister a","Ada \"two\", jadi jamak \"sisters\"; artikel \"a\" tidak bisa dipakai."],
["fi","Call __ tonight.","Telepon saya nanti malam","me","I|my|mine","Setelah kata kerja, pakai \"me\"."],
["fi","I work with __.","Saya bekerja dengan dia (laki-laki)","him","he|his|he's","Setelah preposisi juga pakai bentuk objek."],
["fi","She __ a dog.","Dia (perempuan) memelihara anjing","has","have|is|haves","Subjeknya \"she\", jadi \"has\"."],
["ty","Bisa bantu saya?","Can you help me|Could you help me","can you · help · me — bentuk objek","I","Setelah kata kerja, pakai bentuk objek \"me\"."],
["ty","Kamu punya pulpen?","Do you have a pen","do you have · pen — artikel a","the","Mencari pulpen apa saja, jadi artikel \"a\"."],
["ty","Saya punya banyak teman","I have many friends|I have a lot of friends","have · many · friend — bentuk jamak","friend","Setelah \"many\", kata benda berbentuk jamak: \"friends\"."]]},
{ id:"can-like", title:"can, like + -ing, I'd like: yang bisa dan yang diinginkan", blurb:"Bisa = can, suka melakukan = like + -ing, dan untuk memesan: I'd like.", deck:"Obrolan ringan", body:`
<p>Tiga pola ini langsung terpakai untuk memperkenalkan diri dan memesan. Ketiganya punya padanan yang jelas dalam bahasa Indonesia: <i>bisa</i>, <i>suka</i>, dan <i>mau</i> atau <i>pengin</i>.</p>
<h3>can: bisa</h3>
<p>Polanya <b>can + V1</b>. Meskipun subjeknya he atau she, tidak ada -s: <b>She can swim</b>.</p>
{{ex:I can swim.|ai ken swim|Saya bisa berenang}}{{ex:I can't drive.|ai kènt draiv|Saya tidak bisa menyetir}}{{ex:Can you speak Indonesian?|ken yu spiik in-de-NII-zyen?|Kamu bisa bahasa Indonesia?}}
<h3>like + -ing: suka melakukan sesuatu</h3>
<p>Untuk hobi, setelah <b>like</b> atau <b>love</b> pakai kata kerja bentuk -ing. Dalam bahasa Indonesia cukup <i>suka masak</i>, tapi <b>I like cook</b> salah.</p>
{{ex:I like cooking.|ai laik KU-king|Saya suka memasak}}{{ex:I love watching movies.|ai lav WAA-cing MUU-viz|Saya senang sekali menonton film}}{{ex:I don't like running.|ai dount laik RA-ning|Saya tidak suka lari}}
<h3>I'd like: saya mau (dengan sopan)</h3>
<p><b>I like</b> berarti suka secara umum, sedangkan <b>I'd like</b> berarti ‘saya mau’ sekarang, dengan sopan, mirip <i>Saya pesan …</i>. Untuk memesan, pakai <b>I'd like</b>.</p>
{{ex:I'd like a coffee, please.|aid laik e KOO-fi, pliiz|Saya pesan kopi satu}}{{ex:Would you like some tea?|wud yu laik sem tii?|Mau teh?}}
<div class="tip">Kesalahan paling umum: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ / di kafe, <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Apa isi bagian yang kosong?",["sings","sing","singing","to sing"],1,"Setelah \"can\", kata kerja V1."],["Bahasa Inggrisnya 'Saya suka memasak'?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Setelah \"like\", pakai bentuk -ing."],["Kalimat yang paling wajar untuk memesan di kafe?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Yang kamu mau sekarang diucapkan dengan \"I'd like\"."]],
practice:[
["mc","He can ___ Korean. Apa isi bagian yang kosong?","speak","speaks","speaking","to speak","Setelah \"can\", kata kerja V1."],
["mc","'Saya tidak bisa menyetir' dalam bahasa Inggris?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Bentuk negatif \"can\" adalah \"can't\"."],
["mc","'Saya suka menonton film' dalam bahasa Inggris?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Setelah \"like\" pakai -ing; film secara umum pakai jamak \"movies\"."],
["mc","Untuk memesan, 'Saya pesan kopi satu' dalam bahasa Inggris?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Yang kamu mau sekarang pakai \"I'd like\"."],
["mc","'Mau teh?' (menawarkan) dalam bahasa Inggris?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Untuk menawarkan, pakai \"Would you like …?\"."],
["or","Saya pesan kopi satu","I'd like a coffee please","the coffees","Satu gelas yang dipesan, jadi artikel \"a\" dan bentuk tunggal \"coffee\"."],
["or","Saya suka membaca buku","I like reading books","book read","Setelah \"like\" pakai -ing; buku secara umum pakai jamak \"books\"."],
["or","Kamu bisa berenang?","Can you swim","swimming","Setelah \"can\", kata kerja V1."],
["fi","I can't __.","Saya tidak bisa berenang","swim","swimming|swims|to swim","Setelah \"can't\", kata kerja V1."],
["fi","I like __ music.","Saya suka mendengarkan musik","listening to","listen to|listen|to listening","Setelah \"like\", pakai bentuk -ing."],
["fi","__ like a sandwich, please.","Saya pesan satu sandwich","I'd|I would","I|I'm|I can","Untuk memesan, pakai \"I'd like\"."],
["ty","Saya suka memasak","I like cooking|I love cooking|I like to cook","like · cook — bentuk -ing","cook","Setelah \"like\", pakai bentuk -ing."],
["ty","Saya pesan satu sandwich","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich","I'd like · sandwich — artikel a","the","Sandwich apa saja, satu, jadi artikel \"a\"."],
["ty","Saya suka anjing","I like dogs|I love dogs","like · dog — bentuk jamak","dog","Untuk anjing secara umum, pakai jamak \"dogs\"."]]},
{ id:"continuous", title:"Sedang terjadi: be + -ing", blurb:"Kebiasaan pakai Simple Present Tense, yang sedang terjadi sekarang pakai be + -ing.", deck:"Obrolan ringan", body:`
<p>Dalam bahasa Indonesia, <i>sedang</i> menandai kegiatan yang berlangsung sekarang: <i>Saya sedang bekerja</i>. Tapi <i>sedang</i> sering dihilangkan, sehingga <i>Saya kerja</i> bisa berarti kebiasaan atau sekarang. Dalam bahasa Inggris, yang terjadi <b>saat ini</b> wajib pakai <b>be + kata kerja-ing</b> (Present Continuous Tense). Bagian <b>be</b> tidak boleh hilang.</p>
{{ex:I'm working now.|aim WER-king nau|Saya sedang bekerja}}{{ex:She's cooking dinner.|syiz KU-king DI-ner|Dia sedang memasak makan malam}}{{ex:It's raining.|its REI-ning|Sedang hujan}}
<h3>Kalimat tanya dan kalimat negatif</h3>
{{ex:What are you doing?|wat er yu DUU-ing?|Kamu sedang apa?}}{{ex:Are you listening?|er yu LI-se-ning?|Kamu sedang mendengarkan?}}{{ex:I'm not sleeping.|aim naat SLII-ping|Saya tidak sedang tidur}}
<h3>Bandingkan dengan Simple Present Tense</h3>
<div class="tbl"><table><tr><th>Kebiasaan (Simple Present)</th><th>Sekarang (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Kata kerja yang tidak pakai -ing</h3>
<p>Kata kerja yang menyatakan <b>keadaan</b>, seperti like, know, want, need dan have (punya), tetap memakai Simple Present Tense meskipun maksudnya sekarang.</p>
{{ex:I know him.|ai nou him|Saya kenal dia}}{{ex:I want some water.|ai waant sem WAA-der|Saya mau minum air}}
<div class="tip">Kesalahan paling umum: lupa <b>to be</b>. <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["Bahasa Inggrisnya 'Kamu sedang apa?'",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Yang sedang terjadi ditanyakan dengan be + -ing."],["I ___ coffee every morning. Apa isi bagian yang kosong?",["am drinking","drinking","drink","am drink"],2,"Kebiasaan setiap hari pakai Simple Present Tense."],["Pilih kalimat yang benar.",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" dan \"have\" (punya) tidak pakai -ing."]],
practice:[
["mc","'Saya sedang bekerja' dalam bahasa Inggris?","I'm working now.","I work now am.","I'm work now.","I working now.","Yang sedang terjadi: be + -ing."],
["mc","'Dia sedang memasak makan malam' dalam bahasa Inggris?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","Be + -ing, dan nama waktu makan tanpa artikel."],
["mc","Mana kalimat untuk kebiasaan setiap hari?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Kebiasaan pakai Simple Present Tense."],
["mc","'Kamu sedang apa?' dalam bahasa Inggris?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Kata tanya + be + subjek + -ing."],
["mc","'Saya kenal dia' dalam bahasa Inggris?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" tidak pakai -ing."],
["or","Saya sedang membaca buku","I'm reading a book","read books","Satu buku yang sedang dibaca, jadi artikel \"a\" dan bentuk tunggal \"book\"."],
["or","Anak-anak sedang bermain","The kids are playing","kid is","Lebih dari satu, jadi jamak \"kids\" dan \"are\"."],
["or","Sekarang sedang hujan","It's raining now","rains","Yang sedang terjadi: be + -ing."],
["fi","I'm __ TV.","Saya sedang menonton TV","watching","watch|watches|to watch","Setelah be, pakai -ing."],
["fi","What __ you doing?","Kamu sedang apa?","are","do|is|does","Untuk \"you\", pakai \"are\"."],
["fi","She __ working today.","Hari ini dia tidak bekerja","isn't|is not","doesn't|don't|not","Negatif dari be + -ing: \"isn't\"."],
["ty","Saya sedang memasak","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — pakai bentuk -ing","cook","Yang sedang terjadi: be + -ing."],
["ty","Saya sedang menonton film","I'm watching a movie","I'm · watching · movie — artikel a","the","Film apa saja, satu, jadi artikel \"a\"."],
["ty","Anak-anak sedang tidur","The kids are sleeping|The children are sleeping","kids · are · sleeping — bentuk jamak","kid","Lebih dari satu, jadi jamak \"kids\" dan \"are\"."]]},
{ id:"past", title:"Simple Past Tense: was / were dan -ed", blurb:"Meskipun sudah ada ‘kemarin’, kata kerjanya tetap harus berubah: was / were, V2 -ed, dan did.", deck:"Obrolan ringan", body:`
<p>Ini pelajaran kunci. Dalam bahasa Indonesia, waktu ditunjukkan oleh kata seperti <i>kemarin</i> atau <i>tadi</i>, sementara kata kerjanya tetap: <i>Kemarin saya kerja</i>. Dalam bahasa Inggris, <b>kata kerjanya sendiri harus berubah</b>, meskipun sudah ada <b>yesterday</b>.</p>
<h3>To be bentuk lampau: was / were</h3>
<p>I, he, she, it pakai <b>was</b>; you, we, they pakai <b>were</b>. Di depan kata sifat, <b>to be</b> tetap perlu: <i>Tadi saya capek</i> → <b>I was tired</b>.</p>
{{ex:I was tired.|ai wez TAI-erd|Tadi saya capek}}{{ex:It was fun.|it wez fan|Tadi seru}}{{ex:We were at home.|wi wer et houm|Kami tadi di rumah}}{{ex:Were you busy?|wer yu BI-zi?|Kamu tadi sibuk?}}
<h3>Kata kerja biasa: V2 dengan -ed</h3>
<p>Tambahkan <b>-ed</b> di akhir kata kerja; bentuknya sama untuk semua subjek. Ucapannya ada tiga: t (<b>watched</b> → waact), d (<b>called</b> → koold), dan id setelah t atau d (<b>wanted</b> → WAAN-tid).</p>
{{ex:I worked yesterday.|ai werkt YÉS-ter-dei|Kemarin saya bekerja}}{{ex:We watched a movie.|wi waact e MUU-vi|Kami menonton film}}{{ex:She called me.|syi koold mi|Dia menelepon saya}}
<h3>Kalimat negatif dan tanya: did</h3>
<p>Kalau ada <b>didn't</b> atau <b>Did</b>, kata kerjanya kembali ke V1, karena tanda lampaunya sudah ada pada did.</p>
{{ex:I didn't work yesterday.|ai DI-dent werk YÉS-ter-dei|Kemarin saya tidak bekerja}}{{ex:Did you call me?|did yu kool mi?|Kamu tadi menelepon saya?}}
<div class="tip">Kesalahan paling umum: <b>Yesterday I work.</b> ✗ → <b>Yesterday I worked.</b> ✓ / <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Apa isi bagian yang kosong?",["was","were","did","are"],1,"Untuk \"they\", pakai \"were\"."],["Bahasa Inggrisnya 'Kemarin saya tidak bekerja'?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Setelah \"didn't\", kata kerja V1."],["Did you ___ the movie? Apa isi bagian yang kosong?",["watch","watched","watching","watches"],0,"Setelah \"Did\", kata kerja V1."]],
practice:[
["mc","I ___ tired yesterday. Apa isi bagian yang kosong?","was","were","did","am","Untuk \"I\", pakai \"was\"."],
["mc","'Kami tadi menonton film' dalam bahasa Inggris?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Kata kerja biasa dalam bentuk lampau: V2 dengan -ed."],
["mc","'Kemarin kamu menelepon?' dalam bahasa Inggris?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Setelah \"Did\", kata kerja V1."],
["mc","'Tadi seru' dalam bahasa Inggris?","It was fun.","It were fun.","It did fun.","It funned.","Untuk \"it\", pakai \"was\"."],
["mc","'Kamu tadi sibuk?' dalam bahasa Inggris?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" kata sifat, jadi tanyakan dengan to be: \"Were\"."],
["or","Kami tadi menonton film","We watched a movie","watch movies","Satu film, jadi artikel \"a\" dan bentuk tunggal \"movie\"."],
["or","Tadi saya main dengan teman-teman saya","I played with my friends","friend play","Lebih dari satu teman, jadi jamak \"friends\"."],
["or","Kemarin saya tidak bekerja","I didn't work yesterday","worked","Setelah \"didn't\", kata kerja V1."],
["fi","We __ at home last night.","Tadi malam kami di rumah","were","was|did|are","Untuk \"we\", pakai \"were\"."],
["fi","I __ soccer yesterday.","Kemarin saya main sepak bola","played","play|playing|was play","Ada \"yesterday\", jadi kata kerja V2: \"played\"."],
["fi","__ you work yesterday?","Kemarin kamu bekerja?","Did","Were|Do|Was","Pertanyaan lampau dengan kata kerja biasa pakai \"Did\"."],
["ty","Saya capek (lampau)","I was tired","was · tired — bentuk lampau","were","Untuk \"I\", pakai \"was\"; kata sifat butuh to be."],
["ty","Saya menonton film (lampau)","I watched a movie","watched · movie — artikel a","the","Satu film, jadi artikel \"a\"."],
["ty","Saya menelepon teman-teman saya (lampau)","I called my friends","called · my · friend — bentuk jamak","friend","Lebih dari satu teman, jadi jamak \"friends\"."]]},
{ id:"irregular-past", title:"V2 tidak beraturan: went, ate, saw", blurb:"Kata kerja yang paling sering dipakai justru tidak memakai -ed. Hafalkan 12 ini dulu.", deck:"Obrolan ringan", body:`
<p>Kata kerja sehari-hari kebanyakan <b>tidak beraturan</b>: bentuk V2 kata kerja ini tidak diberi -ed. Di sekolah kamu mungkin pernah menghafal daftar V1–V2–V3. Untuk sekarang, cukup pasangan V1 dan V2 berikut.</p>
<div class="tbl"><table><tr><th>V1</th><th>V2</th><th>V1</th><th>V2</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Surabaya.|ai wént te suu-re-BAI-e|Saya pergi ke Surabaya}}{{ex:We ate pizza.|wi eit PIIT-se|Kami makan piza}}{{ex:I saw a movie.|ai soo e MUU-vi|Saya menonton film}}{{ex:I met my friends.|ai mét mai fréndz|Saya bertemu teman-teman saya}}{{ex:I bought a book.|ai boot e buk|Saya membeli sebuah buku}}
<p>Ingat: keterangan waktu tidak menggantikan bentuk kata kerja. <i>Kemarin saya pergi ke pasar</i> tetap butuh V2.</p>
{{ex:Yesterday I went to the market.|YÉS-ter-dei ai wént te dhe MAAR-kit|Kemarin saya pergi ke pasar}}
<h3>Dalam kalimat tanya dan negatif: kembali ke V1</h3>
<p><b>Did</b> sudah menandai lampau, jadi kata kerjanya kembali ke V1.</p>
{{ex:What did you do?|wat did yu duu?|Apa yang kamu lakukan?}}{{ex:Where did you go?|wér did yu gou?|Kamu pergi ke mana?}}{{ex:I didn't go.|ai DI-dent gou|Saya tidak pergi}}
<div class="tip">Kesalahan paling umum: <b>I goed.</b> ✗ → <b>I went.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ / <b>Yesterday I go to the market.</b> ✗ → <b>Yesterday I went to the market.</b> ✓</div>`,
check:[["Bentuk V2 dari \"go\"?",["goed","gone","went","going"],2,"V2 dari \"go\" adalah \"went\"."],["Bahasa Inggrisnya 'Apa yang kamu lakukan?' (lampau)",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Setelah \"did\", kata kerja V1 \"do\"."],["I didn't ___ breakfast. Apa isi bagian yang kosong?",["ate","eaten","eats","eat"],3,"Setelah \"didn't\", kata kerja V1."]],
practice:[
["mc","Bentuk V2 dari \"eat\"?","ate","eated","eat","eaten","V2 dari \"eat\" adalah \"ate\"."],
["mc","'Kamu pergi ke mana?' (lampau) dalam bahasa Inggris?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Setelah \"did\", kata kerja V1."],
["mc","'Tadi saya membeli sebuah buku' dalam bahasa Inggris?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","V2 dari \"buy\" adalah \"bought\"; satu buku pakai artikel \"a\"."],
["mc","Bentuk V2 dari \"see\"?","saw","seed","seen","sawed","V2 dari \"see\" adalah \"saw\"."],
["mc","'Saya tidak pergi' (lampau) dalam bahasa Inggris?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Setelah \"didn't\", kata kerja V1."],
["or","Saya tadi menonton film","I saw a movie","see movies","V2 dari \"see\" adalah \"saw\"; satu film, jadi artikel \"a\" dan bentuk tunggal \"movie\"."],
["or","Kami tadi makan piza","We ate pizza","eated","V2 dari \"eat\" adalah \"ate\"."],
["or","Saya tadi bertemu teman-teman saya","I met my friends","friend meet","Lebih dari satu teman, jadi jamak \"friends\"."],
["fi","I __ to Jeju last year.","Tahun lalu saya pergi ke Jeju","went","go|goed|gone","V2 dari \"go\" adalah \"went\"."],
["fi","What did you __?","Tadi kamu makan apa?","eat","ate|eaten|eating","Setelah \"did\", kata kerja V1."],
["fi","She __ a new phone.","Dia membeli ponsel baru","bought","buyed|buy|buys","V2 dari \"buy\" adalah \"bought\"."],
["ty","Saya pergi ke Busan (lampau)","I went to Busan","went · to · Busan — bentuk V2","go","V2 dari \"go\" adalah \"went\"."],
["ty","Saya membeli sebuah buku (lampau)","I bought a book","bought · book — artikel a","the","Satu buku, jadi artikel \"a\"."],
["ty","Saya bertemu teman-teman saya (lampau)","I met my friends|I saw my friends","met · my · friend — bentuk jamak","friend","Lebih dari satu teman, jadi jamak \"friends\"."]]},
{ id:"the", title:"Melihat lagi the: pertama a, berikutnya the", blurb:"Saat pertama disebut pakai a; begitu sudah sama-sama tahu, pakai the.", deck:"Arah & transportasi", body:`
<p>Artikel tidak bisa dikuasai sekali jalan, apalagi karena bahasa Indonesia tidak punya artikel. Kadang <i>-nya</i> atau <i>itu</i> terasa mirip <b>the</b> (<i>bukunya</i>, <i>buku itu</i>), tapi keduanya tidak wajib, sedangkan <b>the</b> wajib. Di sini kita latih kapan pakai <b>the</b> dan kapan <b>tanpa artikel</b>.</p>
<h3>Pertama a, disebut lagi the</h3>
<p>Kalau pendengar baru pertama kali mendengar bendanya, pakai a. Kalau barusan sudah disebut, pakai the.</p>
{{ex:I bought a shirt. The shirt is blue.|ai boot e syert. dhe syert iz bluu|Saya membeli kemeja. Kemejanya biru}}
<h3>Sudah jelas dari situasi: the</h3>
<p>Jendela di ruangan ini, stasiun di dekat sini, matahari: kalau semua orang tahu yang mana, langsung pakai the sejak awal.</p>
{{ex:Can you open the window?|ken yu OU-pen dhe WIN-dou?|Bisa tolong buka jendelanya?}}{{ex:Where's the subway station?|wérz dhe SAB-wei STEI-syen?|Stasiun MRT di mana?}}{{ex:The sun is hot today.|dhe san iz haat te-DEI|Hari ini mataharinya terik}}
<h3>Ungkapan tanpa artikel</h3>
<p>Beberapa ungkapan tempat, transportasi dan waktu makan sebaiknya dihafal utuh.</p>
{{ex:I go to work by bus.|ai gou te werk bai bas|Saya berangkat kerja naik bus}}{{ex:I'm at home.|aim et houm|Saya di rumah}}{{ex:I go to bed at eleven.|ai gou te béd et i-LÉ-ven|Saya tidur jam sebelas}}
<div class="tip">Tanyakan pada dirimu: "Apakah pendengar tahu <b>yang mana</b>?" Kalau tahu, the. Kalau tidak, a. Petunjuk praktis: kalau dalam bahasa Indonesia kamu bisa menambahkan <i>-nya</i> atau <i>itu</i>, biasanya bahasa Inggrisnya pakai the.</div>`,
check:[["I have a cat. ___ cat is white. Apa isi bagian yang kosong?",["A","An","The","(tanpa artikel)"],2,"Kucing yang barusan disebut, jadi \"the\"."],["I go to ___ work by bus. Apa isi bagian yang kosong?",["a","the","an","(tanpa artikel)"],3,"\"Go to work\" tidak pakai artikel."],["Kalimat yang tepat untuk minta dibukakan jendela di ruangan ini?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Jendela yang sama-sama diketahui, jadi \"the\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Apa isi bagian yang kosong?","The","A","An","Some","Kemeja yang barusan disebut, jadi \"the\"."],
["mc","'Stasiunnya di mana?' dalam bahasa Inggris?","Where's the station?","Where's a station?","Where's station?","Where the station?","Stasiun di dekat sini yang sama-sama diketahui, jadi \"the\"."],
["mc","Pilih kalimat yang benar.","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" dan \"by bus\" tidak pakai artikel."],
["mc","'Mataharinya terik' dalam bahasa Inggris?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Benda yang hanya ada satu pakai \"the\"."],
["mc","'Saya di rumah' dalam bahasa Inggris?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","\"At home\" tidak pakai artikel."],
["or","Bisa tolong buka jendelanya?","Can you open the window","a windows","Jendela yang sama-sama diketahui, jadi artikel \"the\"."],
["or","Saya berangkat kerja naik bus","I go to work by bus","the a","\"Go to work\" dan \"by bus\" tanpa artikel."],
["or","Anjingnya besar","The dog is big","A dogs","Anjing yang sudah disebut, jadi artikel \"the\"."],
["fi","I saw a movie. __ movie was great.","Saya menonton film. Filmnya bagus sekali","The","A|An|Some","Film yang barusan disebut, jadi \"the\"."],
["fi","Where's __ bathroom?","Kamar mandinya di mana?","the","a|an|some","Kamar mandi di gedung ini, jadi \"the\"."],
["fi","I have __ idea.","Saya punya ide","an","a|the|some","Baru pertama disebut dan diawali bunyi vokal, jadi \"an\"."],
["ty","Bisa tolong tutup pintunya?","Can you close the door|Could you close the door","can you · close · door — artikel the","a","Pintu yang sama-sama diketahui, jadi artikel \"the\"."],
["ty","Stasiunnya di mana?","Where is the station|Where's the station","where · station — artikel the","a","Stasiun di dekat sini, jadi artikel \"the\"."],
["ty","Saya di rumah","I'm at home|I'm home","I'm · at · home — tanpa artikel","the","Di depan \"home\" tidak pakai artikel."]]},
{ id:"adjectives", title:"Kata sifat dan perbandingan: bigger, more expensive, the best", blurb:"Kata sifat di depan kata benda. Lebih = -er / more, paling = the -est / the most.", deck:"Belanja & bayar", body:`
<p>Dalam bahasa Indonesia, kata sifat (<b>adjective</b>) ada di belakang kata benda: <i>tas besar</i>, <i>rumah besar</i>. Dalam bahasa Inggris urutannya terbalik: kata sifat di <b>depan</b> kata benda, atau setelah <b>to be</b>.</p>
{{ex:a big bag|e big bèg|tas besar}}{{ex:a big house|e big haus|rumah besar}}{{ex:This bag is big.|dhis bèg iz big|Tas ini besar}}{{ex:It's too small.|its tuu smool|Terlalu kecil}}
<p>Jangan lupa artikelnya: <i>rumah besar</i> → <b>a big house</b>, bukan <b>house big</b>.</p>
<h3>Lebih: -er atau more</h3>
<p><i>Lebih</i> tidak selalu <b>more</b>. Kata pendek ditambah <b>-er</b>, kata panjang diberi <b>more</b> di depannya. <i>Daripada</i> = <b>than</b>.</p>
<div class="tbl"><table><tr><th>Biasa</th><th>Lebih …</th><th>Paling …</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|dhis wan iz CII-per|Yang ini lebih murah}}{{ex:It's more expensive than that one.|its moor ik-SPÉN-siv dhen dhèt wan|Yang ini lebih mahal daripada yang itu}}{{ex:Do you have a bigger size?|de yu hèv e BI-ger saiz?|Ada ukuran yang lebih besar?}}
<h3>Paling: pakai the</h3>
{{ex:This is the best restaurant here.|dhis iz dhe bést RÉS-te-raant hir|Ini restoran paling enak di sini}}{{ex:Which is the cheapest?|wic iz dhe CII-pist?|Yang mana yang paling murah?}}
<div class="tip">Kesalahan paling umum: <b>more cheaper</b>, <b>more bigger</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>bigger</b>, <b>better</b> ✓. -er dan more tidak dipakai bersamaan. Juga <b>bag big</b> ✗ → <b>big bag</b> ✓.</div>`,
check:[["Bentuk perbandingan dari \"big\"?",["more big","biger","bigger","most big"],2,"Kata pendek ditambah -er; konsonan terakhirnya ditulis dua kali."],["This is ___ expensive than that. Apa isi bagian yang kosong?",["more","most","much","very"],0,"Kata panjang memakai \"more\"."],["Bentuk paling dari \"good\"?",["the goodest","the most good","the better","the best"],3,"good – better – the best."]],
practice:[
["mc","Bentuk perbandingan dari \"cheap\"?","cheaper","more cheap","cheapper","most cheap","Kata pendek ditambah -er."],
["mc","'Yang ini lebih mahal' dalam bahasa Inggris?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Kata panjang memakai \"more\"."],
["mc","'Ada ukuran yang lebih besar?' dalam bahasa Inggris?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Urutannya: artikel + kata sifat + kata benda."],
["mc","Bentuk perbandingan dari \"good\"?","better","gooder","more good","best","good – better – best."],
["mc","'Ini restoran paling enak' dalam bahasa Inggris?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Di depan bentuk paling pakai \"the\"."],
["or","Ada ukuran yang lebih besar?","Do you have a bigger size","the sizes","Mencari ukuran apa saja, satu, jadi artikel \"a\"."],
["or","Yang ini paling murah","This is the cheapest","a cheaper","Di depan bentuk paling pakai artikel \"the\"."],
["or","Yang ini lebih murah daripada yang itu","This is cheaper than that","more","Kata sifat dengan -er tidak diberi \"more\"."],
["fi","It's __ small.","Terlalu kecil","too","much|more|most","‘Terlalu’ = \"too\"."],
["fi","This is cheaper __ that one.","Yang ini lebih murah daripada yang itu","than","then|that|more","‘Daripada’ = \"than\"."],
["fi","It's the __ expensive one.","Ini yang paling mahal","most","more|much|very","Bentuk paling untuk kata panjang: \"the most\"."],
["ty","Punya ukuran yang lebih kecil?","Do you have a smaller size","smaller · size — artikel a","the","Mencari ukuran apa saja, jadi artikel \"a\"."],
["ty","Yang ini paling bagus","This is the best|This one is the best","the · best — artikel the","a","Di depan bentuk paling pakai artikel \"the\"."],
["ty","Yang ini lebih murah","This is cheaper|This one is cheaper","cheap — bentuk perbandingan","more","Kata pendek ditambah -er, tanpa \"more\"."]]},
{ id:"going-to", title:"Membicarakan rencana: be going to", blurb:"Untuk rencana yang sudah diputuskan: be going to + V1.", deck:"Obrolan ringan", body:`
<p>Bahasa Indonesia memakai satu kata, <i>akan</i>, untuk semua hal di masa depan. Bahasa Inggris punya dua pilihan utama, <b>will</b> dan <b>be going to</b>. Kita mulai dengan <b>be going to</b>, untuk <b>rencana yang sudah diputuskan</b>. Polanya <b>be + going to + V1</b>.</p>
{{ex:I'm going to visit Bali.|aim GOU-ing te VI-zit BAA-li|Saya akan ke Bali}}{{ex:She's going to buy a car.|syiz GOU-ing te bai e kaar|Dia akan membeli mobil}}{{ex:We're going to have dinner.|wir GOU-ing te hèv DI-ner|Kami akan makan malam}}
<h3>Kalimat negatif dan tanya</h3>
{{ex:I'm not going to go.|aim naat GOU-ing te gou|Saya tidak akan pergi}}{{ex:Are you going to come?|er yu GOU-ing te kam?|Kamu akan datang?}}{{ex:What are you going to do this weekend?|wat er yu GOU-ing te duu dhis WIIK-énd?|Akhir pekan ini kamu akan melakukan apa?}}
<h3>Perkiraan dari apa yang terlihat</h3>
{{ex:It's going to rain.|its GOU-ing te rein|Sepertinya mau hujan}}
<h3>Keterangan waktu yang sering dipakai</h3>
<p><b>tomorrow</b> (besok), <b>tonight</b> (nanti malam), <b>this weekend</b> (akhir pekan ini) dan <b>next week</b> (minggu depan) biasanya di akhir kalimat. Keterangan waktu tidak menggantikan bentuk kata kerja: <i>Besok saya pergi</i> tetap <b>I'm going to go tomorrow</b>.</p>
<div class="tip">Dalam percakapan, going to sering terdengar seperti <b>gonna</b> (GA-ne). Dan jangan lupa <b>to be</b>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Bahasa Inggrisnya 'Besok saya akan bertemu teman saya'?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + V1."],["She ___ going to study. Apa isi bagian yang kosong?",["am","are","is","be"],2,"Untuk \"she\", pakai \"is\"."],["Bahasa Inggrisnya 'Akhir pekan ini kamu akan melakukan apa?'",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Kata tanya + be + subjek + going to."]],
practice:[
["mc","'Saya akan pergi ke Busan' dalam bahasa Inggris?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + V1."],
["mc","They ___ going to come. Apa isi bagian yang kosong?","are","is","am","be","Untuk \"they\", pakai \"are\"."],
["mc","'Sepertinya mau hujan' dalam bahasa Inggris?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Setelah \"going to\", kata kerja V1."],
["mc","'Saya tidak akan pergi' dalam bahasa Inggris?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","\"Not\" diletakkan setelah to be."],
["mc","'Kamu akan datang?' dalam bahasa Inggris?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","To be pindah ke depan."],
["or","Dia akan membeli mobil","She's going to buy a car","the cars","Satu mobil, jadi artikel \"a\" dan bentuk tunggal \"car\"."],
["or","Saya akan bertemu teman-teman saya","I'm going to meet my friends","friend","Lebih dari satu teman, jadi jamak \"friends\"."],
["or","Kami akan makan malam","We're going to have dinner","a","Nama waktu makan \"dinner\" tidak pakai artikel."],
["fi","I'm going __ study tonight.","Nanti malam saya akan belajar","to","for|at|will","Polanya going to + V1."],
["fi","__ you going to come?","Kamu akan datang?","Are","Do|Is|Will","Untuk \"you\", pakai \"Are\"."],
["fi","It's going to __ tomorrow.","Besok sepertinya hujan","rain","rains|raining|rained","Setelah \"going to\", kata kerja V1."],
["ty","Saya akan menonton film (sudah direncanakan)","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — artikel a","the","Film apa saja, satu, jadi artikel \"a\"."],
["ty","Kamu akan melakukan apa? (rencana)","What are you going to do","what · going to · do — bukan will","will","Untuk menanyakan rencana, pakai be going to."],
["ty","Saya akan bertemu teman-teman saya (sudah direncanakan)","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — bentuk jamak","friend","Lebih dari satu teman, jadi jamak \"friends\"."]]},
{ id:"joining", title:"Menyambung kalimat: and, but, or, so, because", blurb:"Dua kalimat pendek jadi satu. Pakai because atau so, jangan dua-duanya.", deck:"Perasaan & reaksi", body:`
<p>Kalau hanya memakai kalimat pendek, bicaramu terdengar terputus-putus. Lima kata sambung ini membuat kalimatmu jauh lebih lancar.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|ai laik KOO-fi en tii|Saya suka kopi dan teh}}{{ex:I'm tired but happy.|aim TAI-erd bet HÈ-pi|Saya capek tapi senang}}{{ex:Coffee or tea?|KOO-fi er tii?|Kopi atau teh?}}
<h3>so: jadi</h3>
<p>Urutannya <b>sebab + so + akibat</b>, sama seperti <i>…, jadi …</i>.</p>
{{ex:I was tired, so I went home.|ai wez TAI-erd, sou ai wént houm|Saya capek, jadi saya pulang}}
<h3>because: karena</h3>
<p>Urutannya <b>akibat + because + sebab</b>, seperti <i>… karena …</i>. Kalau <b>because</b> ada di awal kalimat, jangan tambahkan <b>so</b> di tengah, walaupun bahasa Indonesia punya pola <i>karena …, maka …</i>.</p>
{{ex:I went home because I was tired.|ai wént houm bi-KAZ ai wez TAI-erd|Saya pulang karena capek}}{{ex:I stayed home because it was raining.|ai steid houm bi-KAZ it wez REI-ning|Saya di rumah saja karena hujan}}
<h3>Satu kata sambung saja</h3>
<p>Hal yang sama berlaku untuk <i>meskipun …, tetapi …</i>: bahasa Inggris memakai <b>although</b> atau <b>but</b>, tidak keduanya.</p>
{{ex:Although it was late, we went out.|ool-DHOU it wez leit, wi wént aut|Meskipun sudah malam, kami tetap keluar}}
<h3>too: juga</h3>
{{ex:I like it too.|ai laik it tuu|Saya juga suka}}
<div class="tip">Jangan pakai kata sambung berpasangan: <b>Because I was tired, so I went home.</b> ✗ / <b>Although it was late, but we went out.</b> ✗. Pilih salah satu saja.</div>`,
check:[["I was sick, ___ I stayed home. Apa isi bagian yang kosong?",["because","but","so","or"],2,"Sebab dulu, lalu akibat: \"so\"."],["I stayed home ___ I was sick. Apa isi bagian yang kosong?",["because","so","but","and"],0,"Akibat dulu, lalu sebab: \"because\"."],["Ungkapan yang tepat untuk 'Mau kopi atau teh?'",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Untuk memilih salah satu, pakai \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. Apa isi bagian yang kosong?","but","so","or","because","Isi yang berlawanan disambung dengan \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. Apa isi bagian yang kosong?","so","because","but","or","Sebab dulu, lalu akibat: \"so\"."],
["mc","I ate a sandwich ___ I was hungry. Apa isi bagian yang kosong?","because","so","but","or","Akibat dulu, lalu sebab: \"because\"."],
["mc","'Kopi atau teh?' dalam bahasa Inggris?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Untuk memilih salah satu, pakai \"or\"."],
["mc","'Saya capek tapi senang' dalam bahasa Inggris?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","‘Tapi’ = \"but\"."],
["or","Saya suka kucing dan anjing","I like cats and dogs","cat dog","Hewan secara umum pakai jamak: \"cats\", \"dogs\"."],
["or","Kopi satu dan sandwich satu, ya","A coffee and a sandwich please","the or","Dipesan satu-satu, jadi masing-masing pakai artikel \"a\"."],
["or","Tadi saya lapar, jadi saya makan","I was hungry so I ate","because","Sebab dulu, lalu akibat: \"so\"."],
["fi","I'm tired __ happy.","Saya capek tapi senang","but","so|because|or","‘Tapi’ = \"but\"."],
["fi","I stayed home __ it was raining.","Saya di rumah saja karena hujan","because","so|but|or","Akibat dulu, lalu sebab: \"because\"."],
["fi","Coffee __ tea?","Kopi atau teh?","or","so|but|because","Untuk memilih salah satu, pakai \"or\"."],
["ty","Saya suka kopi dan teh","I like coffee and tea","like · coffee · and · tea — tanpa artikel","a","Kopi dan teh secara umum tanpa artikel."],
["ty","Saya capek tapi senang","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — pakai I'm","so","‘Tapi’ = \"but\"; kata sifat butuh to be."],
["ty","Saya suka anjing dan kucing","I like dogs and cats|I like cats and dogs","dog · and · cat — bentuk jamak","dog","Hewan secara umum pakai jamak: \"dogs\", \"cats\"."]]},
{ id:"indo-english", title:"Inggris ala Indonesia: kata yang menjebak", blurb:"I'm boring, refreshing, handphone, resep: terdengar seperti bahasa Inggris, tapi artinya lain.", deck:"Jebakan Inggris ala Indonesia", body:`
<p>Banyak kata Inggris sudah masuk ke bahasa Indonesia, tapi artinya bergeser di perjalanan. Akibatnya, kalimat yang terasa benar di telinga kita bisa membingungkan penutur asli. Ini bukan soal tata bahasa, melainkan soal kata yang menjebak.</p>
<h3>bored atau boring?</h3>
<p>Akhiran <b>-ed</b> untuk perasaanmu, <b>-ing</b> untuk hal yang menimbulkan perasaan itu. <b>I'm boring</b> berarti ‘saya orang yang membosankan’, bukan ‘saya bosan’.</p>
{{ex:I'm bored.|aim boord|Saya bosan}}{{ex:This movie is boring.|dhis MUU-vi iz BOO-ring|Film ini membosankan}}{{ex:I'm interested in music.|aim IN-tre-stid in MYUU-zik|Saya tertarik pada musik}}
<h3>Kata yang artinya bergeser</h3>
<div class="tbl"><table><tr><th>Dalam bahasa Indonesia</th><th>Jangan ✗</th><th>Bahasa Inggrisnya ✓</th></tr><tr><td><i>refreshing</i> (jalan-jalan, rehat)</td><td>go refreshing</td><td class="k">take a break / get away</td></tr><tr><td><i>handphone</i>, <i>HP</i></td><td>handphone</td><td class="k">phone / cell phone</td></tr><tr><td><i>map</i> (tempat dokumen)</td><td>map</td><td class="k">folder</td></tr><tr><td><i>resep</i> dokter</td><td>recipe</td><td class="k">prescription</td></tr><tr><td><i>titel</i> (gelar)</td><td>title</td><td class="k">degree</td></tr><tr><td><i>kompleks</i> (perumahan)</td><td>complex</td><td class="k">housing complex / housing estate</td></tr><tr><td><i>ekonomis</i> (hemat)</td><td>economic</td><td class="k">economical</td></tr><tr><td><i>hand body</i></td><td>hand body</td><td class="k">lotion / body lotion</td></tr><tr><td><i>buka puasa</i></td><td>breakfasting</td><td class="k">break the fast</td></tr></table></div>
{{ex:I need a break.|ai niid e breik|Saya perlu rehat sebentar}}{{ex:I need a prescription.|ai niid e pri-SKRIP-syen|Saya perlu resep dokter}}{{ex:This is a folder.|dhis iz e FOUL-der|Ini map}}{{ex:Where's my phone?|wérz mai foun?|HP saya di mana?}}
<p>Perhatikan juga artikel dan jamaknya: <b>a folder</b>, <b>two folders</b>, <b>a prescription</b>.</p>
<h3>Pinjam: borrow atau lend?</h3>
<p><i>Pinjam</i> dipakai untuk dua arah. Bahasa Inggris memisahkannya: <b>borrow</b> = meminjam (kamu yang menerima), <b>lend</b> = meminjamkan (kamu yang memberi).</p>
{{ex:Can I borrow your pen?|ken ai BAA-rou yer pén?|Boleh saya pinjam pulpenmu?}}{{ex:Can you lend me a pen?|ken yu lénd mi e pén?|Bisa pinjamkan saya pulpen?}}
<h3>Good night dan jawaban ‘ya’</h3>
<p><b>Good night</b> bukan sapaan <i>Selamat malam</i> saat bertemu; artinya pamit atau mau tidur. Saat bertemu pada malam hari, ucapkan <b>Good evening</b>. Lalu, kalau ditanya dengan kalimat negatif, jawaban bahasa Inggris mengikuti faktanya, bukan pertanyaannya: <i>Dia tidak datang? — Ya, dia tidak datang</i> → <b>No, he didn't.</b></p>
{{ex:Good evening.|gud IIV-ning|Selamat malam (saat bertemu)}}{{ex:Didn't he come? / No, he didn't.|DI-dent hi kam? / nou, hi DI-dent|Dia tidak datang? / Ya, dia tidak datang}}
<div class="tip">Kesalahan paling umum: <b>I'm boring.</b> ✗ → <b>I'm bored.</b> ✓ / <b>Let's go refreshing.</b> ✗ → <b>Let's take a break.</b> ✓ / <b>Can you borrow me a pen?</b> ✗ → <b>Can you lend me a pen?</b> ✓ / <b>… or whatsoever</b> ✗ → <b>… or whatever</b> ✓</div>`,
check:[["Kamu merasa bosan. Kalimat mana yang benar?",["I'm boring.","I'm bored.","I'm bore.","I boring."],1,"Perasaanmu pakai -ed: \"bored\". \"I'm boring\" berarti kamu orang yang membosankan."],["Kamu mau meminjam pulpen teman. Kalimat mana yang benar?",["Can you borrow me your pen?","Can I lend your pen?","Can you borrow your pen?","Can I borrow your pen?"],3,"Meminjam (kamu yang menerima) = \"borrow\"; meminjamkan (kamu yang memberi) = \"lend\"."],["Bahasa Inggrisnya 'resep dokter'?",["prescription","recipe","receipt","description"],0,"Resep dokter = \"prescription\"; \"recipe\" hanya untuk masakan."]],
practice:[
["mc","Kamu merasa bosan. Mana yang benar?","I'm bored.","I'm boring.","I'm bore.","I'm boredom.","Perasaanmu pakai -ed; \"boring\" berarti membosankan."],
["mc","'Saya perlu resep dokter' dalam bahasa Inggris?","I need a prescription.","I need a recipe.","I need a receipt.","I need a prescript.","Resep dokter = \"prescription\"; \"recipe\" untuk masakan."],
["mc","Kamu minta teman meminjamkan pulpennya. Mana yang benar?","Can you lend me a pen?","Can you borrow me a pen?","Can I lend a pen?","Can you lend a pen me?","Memberi pinjaman = \"lend\"; menerima pinjaman = \"borrow\"."],
["mc","Sapaan yang tepat saat bertemu orang pada malam hari?","Good evening.","Good night.","Good noon.","Good late.","\"Good night\" untuk pamit atau mau tidur, bukan untuk menyapa."],
["mc","Jawab 'Ya, dia tidak datang' untuk \"Didn't he come?\"","No, he didn't.","Yes, he didn't.","Yes, he did.","No, he did.","Jawaban bahasa Inggris mengikuti fakta: dia tidak datang, jadi \"No\"."],
["or","Saya meminjam dua buku dari Sari","I borrowed two books from Sari","lent book","Meminjam = \"borrowed\"; ada \"two\", jadi bentuk jamak \"books\"."],
["or","Ini map","This is a folder","map the","Map dokumen = \"folder\"; satu benda yang bisa dihitung perlu artikel \"a\"."],
["or","Kami bosan","We're bored","boring","Perasaan pakai -ed: \"bored\"."],
["fi","I'm __ in music.","Saya tertarik pada musik","interested","interesting|interest|interests","Perasaanmu pakai -ed: \"interested\"."],
["fi","Can I __ your pen?","Boleh saya pinjam pulpenmu?","borrow","lend|loan|rent","Meminjam (kamu yang menerima) = \"borrow\"."],
["fi","Bring snacks, drinks or __.","Bawa camilan, minuman atau apa saja","whatever","whatsoever|whichever|however","Yang benar \"or whatever\", bukan \"or whatsoever\"."],
["ty","Saya perlu resep dokter","I need a prescription","need · prescription — artikel a","recipe","Resep dokter = \"prescription\"; satu benda yang bisa dihitung perlu artikel \"a\"."],
["ty","Saya punya dua map","I have two folders","have · two · folder — bentuk jamak","folder","Map dokumen = \"folder\"; ada \"two\", jadi jamak \"folders\"."],
["ty","Saya bosan","I'm bored","I'm · bored — bukan boring","boring","Perasaanmu pakai -ed: \"bored\"."],
["ty","HP saya di mana?","Where's my phone|Where is my phone","where · my · phone — bukan handphone","handphone","Dalam bahasa Inggris cukup \"phone\"; \"handphone\" tidak dipakai."]]},
];
