/* id-en: the original 11 lessons and their checks, written for Indonesian speakers (docs/profiles/id.md §8).
   English check options and answer positions follow ko-en; lesson-body example rows are localised (profile §9). */
exports.LESSONS = [
{ id:"pron", title:"1 · Jebakan pelafalan: TH, V/F, bunyi akhir, tekanan", blurb:"Bunyi bahasa Inggris yang paling sering kita baca ala Indonesia, plus cara memakai panduan cara baca di kartu.", deck:"Awas pelafalan", body:`
<p>Bahasa Indonesia ditulis hampir persis seperti diucapkan, jadi wajar kalau kita membaca kata Inggris dengan bunyi huruf Indonesia. Masalahnya, bahasa Inggris membedakan beberapa bunyi yang bagi telinga kita terdengar sama. Kuncinya ada di <b>posisi lidah, gigi, dan bibir</b>. Berlatihlah di depan cermin.</p>
<h3>Cara memakai panduan cara baca</h3>
<div class="tbl"><table><tr><th>Kamu lihat</th><th>Artinya</th><th>Contoh</th></tr><tr><td class="k">HURUF KAPITAL</td><td>suku kata yang ditekan</td><td>hotel → hou-TÉL</td></tr><tr><td class="k">ii / i</td><td>i panjang / i pendek dan santai</td><td>sheep → syiip, ship → syip</td></tr><tr><td class="k">uu / u</td><td>u panjang / u pendek</td><td>food → fuud, book → buk</td></tr><tr><td class="k">é / è</td><td>e seperti pada <i>meja</i> / mulut dibuka lebih lebar, hampir a</td><td>bed → béd, bad → bèd</td></tr><tr><td class="k">e</td><td>e lemah dan pendek seperti pada <i>emas</i></td><td>about → e-BAUT</td></tr><tr><td class="k">aa / oo</td><td>a panjang dan terbuka / o terbuka</td><td>hot → haat, talk → took</td></tr><tr><td class="k">th / dh</td><td>lidah di antara gigi, tanpa suara / bersuara</td><td>think → thingk, this → dhis</td></tr><tr><td class="k">sy, c, j, ng</td><td>dibaca seperti pada <i>syarat</i>, <i>cari</i>, <i>jalan</i>, <i>bangku</i></td><td>she → syi, check → cék</td></tr></table></div>
<h3>TH: lidah di antara gigi</h3>
<p>Bahasa Indonesia tidak punya bunyi TH, jadi kita sering menggantinya dengan t atau d: <b>think</b> jadi "tink", <b>they</b> jadi "dei". Julurkan ujung lidah sedikit di antara gigi atas dan bawah, lalu embuskan udara. Tanpa getaran pita suara, itu <b>th</b> (<b>think</b>); dengan getaran, itu <b>dh</b> (<b>this</b>). Kalau diganti t atau s, yang terdengar kata lain: <b>three</b> jadi <b>tree</b>, <b>think</b> jadi <b>sink</b>. Catatan: dalam ejaan Latin bahasa Jawa, th dan dh dibaca seperti t dan d. Di sini th dan dh <b>bukan</b> t dan d, lidahnya harus terlihat di antara gigi.</p>
{{ex:think|thingk|berpikir}}{{ex:three / tree|thrii / trii|tiga / pohon}}{{ex:this|dhis|ini}}
<h3>F dan V, P dan B, S dan Z, SH</h3>
<p>Huruf v dan z ada dalam bahasa Indonesia, tetapi biasanya kita baca f dan s (<i>vitamin</i> jadi "fitamin"). Dalam bahasa Inggris, perbedaan ini mengubah arti. <b>Z</b> seperti S, tetapi berdengung seperti lebah. <b>SH</b> dibaca seperti <i>sy</i> pada <i>syarat</i>, bukan s biasa.</p>
<div class="tbl"><table><tr><th>Bunyi</th><th>Posisi mulut</th><th>Contoh</th></tr><tr><td class="k">F</td><td>gigi atas di bibir bawah, hanya udara</td><td>fan, coffee</td></tr><tr><td class="k">P</td><td>kedua bibir dirapatkan lalu dilepas</td><td>pan, copy</td></tr><tr><td class="k">V</td><td>posisi F + pita suara bergetar</td><td>very, vote</td></tr><tr><td class="k">B</td><td>posisi P + pita suara bergetar</td><td>berry, boat</td></tr></table></div>
{{ex:fan / van|fèn / vèn|kipas angin / mobil van}}{{ex:very / berry|VÉ-ri / BÉ-ri|sangat / buah beri}}{{ex:She sells shoes.|syi sélz syuuz|Dia (perempuan) menjual sepatu.}}
<p>Sebagian penutur bahasa Sunda tertukar F dan P (<i>pitamin</i>). Kalau kamu salah satunya, latih pasangan <b>fan / pan</b> dan <b>coffee / copy</b>.</p>
<h3>R dan L</h3>
<p>Kabar baik: bahasa Indonesia punya r dan l, jadi <b>rice</b> dan <b>lice</b> jarang tertukar. Bedanya hanya pada R Amerika: ujung lidah <b>tidak menyentuh apa pun</b> dan tidak bergetar seperti r kita. Tarik lidah sedikit ke belakang dan bulatkan bibir. Untuk <b>L</b>, ujung lidah menempel di gusi belakang gigi atas.</p>
{{ex:rice / lice|rais / lais|nasi / kutu}}{{ex:right / light|rait / lait|kanan, benar / cahaya, ringan}}
<h3>Bunyi akhir: ucapkan sampai habis</h3>
<p>Dalam bahasa Indonesia, <i>sebab</i> dibaca "sebap" dan k di akhir <i>anak</i> hampir tidak terdengar. Dalam bahasa Inggris, konsonan akhir bisa mengubah arti: <b>b, d, g, v, z tetap bersuara</b>, dan k diucapkan penuh. Gugus konsonan di akhir kata juga jangan dipotong: <b>task</b> bukan "tas", <b>English</b> bukan "Inggris".</p>
{{ex:bag / back|bèg / bèk|tas / punggung}}{{ex:dogs / docks|doogz / daaks|anjing (lebih dari satu) / dermaga}}{{ex:task|tèsk|tugas}}{{ex:English|ING-glisy|bahasa Inggris}}
<h3>Vokal panjang dan pendek, é dan è</h3>
<p>Bahasa Indonesia hanya punya satu i dan satu u. Bahasa Inggris punya dua: <b>ii</b> yang panjang dan tegang (<b>sheep</b>) dan <b>i</b> yang pendek dan santai (<b>ship</b>). Begitu juga é dan è: <b>bed</b> (é, seperti <i>meja</i>) dan <b>bad</b> (è, buka mulut lebih lebar daripada é).</p>
{{ex:ship / sheep|syip / syiip|kapal / domba}}{{ex:bed / bad|béd / bèd|tempat tidur / buruk}}
<h3>Tekanan kata</h3>
<p>Bahasa Indonesia menekan suku kata dengan cukup rata. Bahasa Inggris mengucapkan satu suku kata <b>lebih keras, lebih panjang, dan lebih tinggi</b>, sementara suku kata lain melemah menjadi e pendek. Pelafalan yang benar dengan tekanan yang salah sering tidak dimengerti.</p>
<div class="tbl"><table><tr><th>Kata</th><th>Tekanan</th><th>Cara baca</th></tr><tr><td class="k">banana</td><td>ba-<b>NA</b>-na</td><td>be-NÈ-ne</td></tr><tr><td class="k">hotel</td><td>ho-<b>TEL</b></td><td>hou-TÉL</td></tr><tr><td class="k">McDonald's</td><td>mc-<b>DON</b>-ald's</td><td>mek-DAA-nelz</td></tr><tr><td class="k">thirteen / thirty</td><td>thir-<b>TEEN</b> / <b>THIR</b>-ty</td><td>ther-TIIN / THER-ti</td></tr></table></div>
<div class="tip">Cara mengecek: untuk F dan V, gigi atas harus menyentuh bibir bawah; untuk TH, ujung lidah harus <b>terlihat</b> di antara gigi. Kalau di cermin terlihat, berarti kamu sudah benar!</div>`},

{ id:"articles", title:"2 · a, an, the: memahami artikel", blurb:"Bahasa Indonesia tidak punya artikel. Tenang, cukup ingat tiga aturan.", deck:"Perkenalan diri", body:`
<p>Bahasa Indonesia tidak punya artikel (<b>a</b>, <b>an</b>, <b>the</b>), jadi bagian inilah yang paling sering terlupa. <i>Seorang</i> dan <i>sebuah</i> mirip dengan <b>a</b>, dan <i>-nya</i> atau <i>itu</i> kadang mirip dengan <b>the</b>, tetapi dalam bahasa Indonesia semuanya boleh dihilangkan. Dalam bahasa Inggris, ada atau tidaknya artikel selalu punya aturan. Untungnya, tiga aturan dasar sudah cukup untuk sebagian besar kalimat.</p>
<h3>a / an: satu benda yang baru disebut</h3>
<p>Pakai <b>a</b> atau <b>an</b> untuk satu kata benda (<i>noun</i>) yang bisa dihitung saat <b>pertama kali</b> disebut. Di depan pekerjaan pun wajib: <i>Saya guru</i> menjadi <b>I'm a teacher.</b></p>
{{ex:I'm a student.|aim e STUU-dent|Saya pelajar.}}{{ex:I have a dog.|ai hèv e doog|Saya punya seekor anjing.}}
<p>Pilihan <b>a</b> atau <b>an</b> ditentukan oleh <b>bunyi</b>, bukan huruf. Kalau kata berikutnya diawali bunyi vokal, pakai an.</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (bunyi yu-)</td><td class="k">an hour (h tidak dibaca)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (bunyi wan-)</td><td class="k">an MBA (bunyi ém-)</td></tr></table></div>
<h3>the: yang itu, sama-sama tahu</h3>
<p>Pakai <b>the</b> untuk sesuatu yang sudah disebut, atau yang sama-sama diketahui dari situasinya. Juga untuk sesuatu yang hanya ada satu (<b>the sun</b>, <b>the internet</b>). Kira-kira seperti <i>-nya</i> atau <i>itu</i> dalam <i>anjingnya</i> dan <i>pintu itu</i>.</p>
{{ex:I have a dog. The dog is so cute.|ai hèv e doog. dhe doog iz sou kyuut|Saya punya anjing. Anjingnya lucu sekali.}}{{ex:Can you close the door?|ken yu klouz dhe door?|Bisa tolong tutup pintunya? (pintu di ruangan ini)}}
<h3>Tanpa artikel: membicarakan hal secara umum</h3>
<p>Untuk membicarakan sesuatu secara umum, pakai bentuk jamak atau kata benda yang tidak bisa dihitung, tanpa artikel. Nama waktu makan, bahasa, dan olahraga juga tanpa artikel.</p>
{{ex:I love dogs.|ai lav doogz|Saya suka sekali anjing. (anjing secara umum)}}{{ex:I don't drink coffee.|ai dount dringk KOO-fi|Saya tidak minum kopi.}}{{ex:Let's have lunch.|léts hèv lanc|Ayo makan siang.}}
<div class="tip">Kesalahan nomor satu: <b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ Jangan pernah lupa a di depan pekerjaan!</div>`},

{ id:"be", title:"3 · To be dan kata kerja biasa", blurb:"am/is/are dan do/does: jangan dihilangkan, jangan dicampur.", deck:"Perkenalan diri", body:`
<p>Dalam bahasa Indonesia, kalimat seperti <i>Saya lapar</i> atau <i>Dia guru</i> tidak butuh kata kerja. Dalam bahasa Inggris, setiap kalimat <b>wajib punya kata kerja</b>. Kalau tidak ada kata kerja lain, yang mengisinya adalah <b>to be</b> (am, is, are). Jenis kata kerja ini juga menentukan cara membuat kalimat negatif dan kalimat tanya.</p>
<h3>Dua jenis kata kerja</h3>
<div class="tbl"><table><tr><th></th><th>to be</th><th>kata kerja biasa</th></tr><tr><td>Arti</td><td>adalah, berada di, dalam keadaan</td><td>semua kata kerja lain (makan, tinggal, suka, mau)</td></tr><tr><td>Contoh</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>Negatif</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Tanya</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<p>Bentuk <b>to be</b> mengikuti subjek: <b>I am</b> / <b>you, we, they are</b> / <b>he, she, it is</b>. Dalam percakapan hampir selalu disingkat: I'm, you're, she's.</p>
{{ex:I'm hungry.|aim HANG-gri|Saya lapar.}}{{ex:She's at work.|syiz et werk|Dia (perempuan) sedang di kantor.}}{{ex:Are you okay?|er yu ou-KEI?|Kamu baik-baik saja?}}
<h3>Jangan dihilangkan, jangan ditambahkan</h3>
<p>Dua kesalahan yang paling umum: <b>to be</b> hilang sebelum kata sifat (<b>She beautiful.</b> ✗ → <b>She is beautiful.</b> ✓), atau sebaliknya ditambahkan di depan kata kerja biasa karena dikira <b>am</b> berarti <i>saya</i>.</p>
{{ex:I like spicy food.|ai laik SPAI-si fuud|Saya suka makanan pedas. (I am like ✗)}}{{ex:I live in Bandung.|ai liv in BAAN-dung|Saya tinggal di Bandung. (I am live ✗)}}{{ex:I agree.|ai e-GRII|Saya setuju. (I am agree ✗)}}
<h3>he, she, it: tambahkan -s</h3>
<p>Kata <i>dia</i> bisa berarti <b>he</b> (laki-laki) atau <b>she</b> (perempuan), jadi pilih sesuai orangnya. Kalau subjeknya <b>he</b>, <b>she</b> atau <b>it</b>, kata kerja biasa dalam <i>Simple Present Tense</i> ditambah <b>-s</b>, sedangkan kalimat negatif dan kalimat tanya memakai <b>does</b>. Setelah does, -s pada kata kerja hilang.</p>
{{ex:My brother works in Jakarta.|mai BRA-dher werks in je-KAAR-te|Kakak laki-laki saya bekerja di Jakarta.}}{{ex:Does he speak English?|dez hi spiik ING-glisy?|Apakah dia (laki-laki) bisa berbahasa Inggris?}}{{ex:She doesn't eat meat.|syi DA-zent iit miit|Dia (perempuan) tidak makan daging.}}
<div class="tip">Kalau bingung, tanyakan: "Selain to be, apakah kalimat ini punya kata kerja lain (<b>like</b>, <b>live</b>, <b>work</b>, <b>want</b>…)?" Kalau ada, kalimat negatif dan kalimat tanyanya pakai do/does. Kalau tidak ada (subjek langsung diikuti kata sifat, kata benda, atau tempat), pakai <b>to be</b>.</div>`},

{ id:"polite", title:"4 · Meminta dengan sopan", blurb:"Can you → Could you → Would you mind. Kata please saja belum cukup!", deck:"Ungkapan penting 1", body:`
<p>Bahasa Indonesia punya <i>Anda</i>, <i>Bapak</i>, <i>Ibu</i>, dan kata <i>tolong</i>. Bahasa Inggris hanya punya satu <b>you</b>, jadi kesopanan ditunjukkan lewat <b>bentuk kalimat permintaan</b>. Menerjemahkan <i>Tolong ambilkan…</i> menjadi <b>Please give me…</b> masih terdengar seperti perintah. Ubah permintaanmu menjadi pertanyaan.</p>
<h3>Tangga kesopanan</h3>
<div class="tbl"><table><tr><th>Ungkapan</th><th>Kesannya</th><th>Dipakai untuk</th></tr><tr><td class="k">Give me ~.</td><td>perintah, terdengar kasar</td><td>jangan dipakai</td></tr><tr><td class="k">Can you ~?</td><td>permintaan santai</td><td>teman, toko</td></tr><tr><td class="k">Could you ~?</td><td>permintaan sopan</td><td>orang yang baru dikenal, kantor</td></tr><tr><td class="k">Would you mind ~ing?</td><td>sangat sopan</td><td>permintaan besar, atasan</td></tr></table></div>
{{ex:Could you help me?|kud yu hélp mi?|Bisakah Anda membantu saya?}}{{ex:Could you say that again?|kud yu sei dhèt e-GÉN?|Bisakah Anda mengulanginya?}}{{ex:Would you mind taking a picture of us?|wud yu maind TEI-king e PIK-cer ev as?|Apakah Anda keberatan memotret kami?}}
<h3>Saat memesan: Can I get ~? / I'd like ~</h3>
<p><b>I want ~</b> bisa terdengar seperti anak kecil yang merengek. Di toko atau restoran, katakan:</p>
{{ex:Can I get a latte, please?|ken ai gét e LAA-dei, pliiz?|Boleh saya pesan satu latte?}}{{ex:I'd like a window seat.|aid laik e WIN-dou siit|Saya minta kursi dekat jendela.}}
<h3>Jebakan Would you mind…?</h3>
<p><b>mind</b> artinya "keberatan". Jadi jawaban <b>No</b> justru berarti <b>boleh</b>!</p>
{{ex:Would you mind opening the window?|wud yu maind OU-pe-ning dhe WIN-dou?|Apakah Anda keberatan membuka jendela?}}{{ex:No, not at all.|nou, naat et ool|Tentu, sama sekali tidak keberatan.}}
<h3>Pak, Bu, dan sapaan</h3>
<p><i>Pak Budi</i> atau <i>Bu Sari</i> tidak punya padanan langsung. Pakai <b>Mr.</b> atau <b>Ms.</b> + nama keluarga, atau nama depan saja kalau sudah akrab. <b>Sir</b> dan <b>Ma'am</b> biasanya hanya dipakai oleh pelayan atau petugas.</p>
<div class="tip">Kata ajaib <b>please</b> dan <b>thank you</b> tidak pernah berlebihan. Menambahkan please di akhir kalimat saja sudah membuatnya jauh lebih halus. Intonasi juga penting: nada naik di akhir terdengar seperti permintaan, nada turun terdengar seperti perintah.</div>`},

{ id:"tense", title:"5 · Ringkasan tense: sekarang, lampau, akan datang", blurb:"Kebiasaan pakai Simple Present, yang sedang terjadi pakai be + -ing, rencana pakai going to.", deck:"Obrolan ringan", body:`
<p>Dalam bahasa Indonesia, kata kerjanya tetap: kemarin, hari ini, besok, semuanya "makan". Waktu ditunjukkan oleh kata seperti <i>kemarin</i> atau <i>sedang</i>, atau cukup dari konteks. Dalam bahasa Inggris, <b>kata kerjanya yang berubah</b>, dan kamu harus memilih bentuknya walaupun tidak ada keterangan waktu. Untuk obrolan ringan, lima bentuk ini sudah cukup.</p>
<h3>Simple Present vs Present Continuous</h3>
<div class="tbl"><table><tr><th>Bentuk</th><th>Arti</th><th>Contoh</th></tr><tr><td class="k">Simple Present Tense</td><td>kebiasaan, fakta</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing</td><td>sedang terjadi / jadwal dekat yang sudah pasti</td><td>I'm drinking coffee right now.</td></tr></table></div>
{{ex:I work at a bank.|ai werk et e bèngk|Saya kerja di bank. (pekerjaan tetap)}}{{ex:I'm working from home today.|aim WER-king frem houm te-DEI|Hari ini saya kerja dari rumah.}}
<p>Perhatikan: dua kalimat Indonesia di atas memakai kata kerja yang sama, <i>kerja</i>. Dalam bahasa Inggris, yang satu <b>work</b>, yang lain <b>am working</b>.</p>
<h3>Simple Past Tense</h3>
<p>Kata kerja beraturan ditambah <b>-ed</b>. Banyak kata kerja yang sering dipakai tidak beraturan (V1 → V2): go → went, eat → ate, see → saw, have → had, get → got.</p>
{{ex:I went to the beach last weekend.|ai wént te dhe biic lèst WIIK-énd|Akhir pekan lalu saya ke pantai.}}{{ex:Did you have fun?|did yu hèv fan?|Seru?}}
<h3>Akan datang: will vs be going to</h3>
<p>Kata <i>akan</i> dipakai untuk keduanya, tetapi bahasa Inggris membedakannya:</p>
<div class="tbl"><table><tr><th></th><th>Kapan</th><th>Contoh</th></tr><tr><td class="k">will</td><td>diputuskan saat bicara, janji</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>rencana yang sudah dibuat</td><td>I'm going to visit Bali next month.</td></tr></table></div>
{{ex:I'll call you later.|ail kool yu LEI-der|Nanti aku telepon.}}{{ex:I'm going to take a cooking class.|aim GOU-ing te teik e KU-king klès|Saya mau ikut kelas memasak.}}
<p>Dalam percakapan, going to sering terdengar seperti <b>gonna</b>. Dalam tulisan, tetap tulis going to. Nanti ada pelajaran khusus tentang <i>sudah</i>, <i>sedang</i>, dan <i>akan</i>.</p>
<div class="tip">Jawab "How was your weekend?" dengan V2, dan "Any plans for the weekend?" dengan going to. Cara paling mudah: ikuti saja bentuk waktu pertanyaannya.</div>`},

{ id:"prep", title:"6 · Preposisi in / on / at", blurb:"Satu kata di untuk tiga preposisi: yang luas in, satu hari on, satu titik at.", deck:"Angka, jam & tanggal", body:`
<p>Bahasa Indonesia cukup memakai <i>di</i> untuk tempat dan <i>pada</i> untuk waktu. Bahasa Inggris membaginya menjadi tiga preposisi (kata depan): <b>in</b>, <b>on</b>, <b>at</b>. Ingat saja: <b>makin luas, makin in; makin sempit, makin at</b>.</p>
<h3>Waktu</h3>
<div class="tbl"><table><tr><th>Preposisi</th><th>Cakupan</th><th>Contoh</th></tr><tr><td class="k">in</td><td>bulan, tahun, musim, bagian hari</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>hari, tanggal, hari tertentu</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>jam yang tepat, saat yang singkat</td><td>at 7, at noon, at night</td></tr></table></div>
<p>Jadi <i>pada hari Senin</i> menjadi <b>on Monday</b>, dan <i>pada pukul 7</i> menjadi <b>at 7</b>.</p>
{{ex:See you on Friday.|sii yu aan FRAI-dei|Sampai jumpa hari Jumat.}}{{ex:The meeting is at three.|dhe MII-ding iz et thrii|Rapatnya pukul tiga.}}{{ex:I was born in 1998.|ai wez boorn in NAIN-tiin NAIN-ti-eit|Saya lahir tahun 1998.}}
<h3>Tempat</h3>
<div class="tbl"><table><tr><th>Preposisi</th><th>Kesannya</th><th>Contoh</th></tr><tr><td class="k">in</td><td>di dalam ruang, kota, negara</td><td>in the car, in Jakarta, in Indonesia</td></tr><tr><td class="k">on</td><td>di permukaan, jalan, kendaraan umum</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>satu titik, tempat untuk suatu kegiatan</td><td>at the station, at work, at home</td></tr></table></div>
{{ex:I'm on the bus.|aim aan dhe bas|Saya sedang di dalam bus.}}{{ex:Let's meet at the station.|léts miit et dhe STEI-syen|Kita ketemu di stasiun, ya.}}
<h3>ke = to, tetapi tidak selalu</h3>
<p><i>ke</i> biasanya menjadi <b>to</b>: <b>go to school</b>, <b>go to Bali</b>. Tetapi <b>home</b> tidak memakai to: <b>go home</b>, bukan <b>go to home</b> ✗.</p>
{{ex:I'm going home.|aim GOU-ing houm|Saya mau pulang.}}
<h3>Tanpa preposisi</h3>
<p>Di depan <b>next, last, this, every, tomorrow, yesterday</b> tidak ada preposisi, walaupun dalam bahasa Indonesia kita bisa bilang <i>pada minggu depan</i>.</p>
{{ex:See you next week.|sii yu nékst wiik|Sampai jumpa minggu depan. (on next week ✗)}}
<div class="tip">Hafalkan juga pengecualiannya: <b>at night</b> (malam hari), <b>in the morning / afternoon / evening</b>. Untuk akhir pekan, Amerika memakai <b>on the weekend</b>, Inggris <b>at the weekend</b>.</div>`},

{ id:"smalltalk", title:"7 · Budaya obrolan ringan", blurb:"How are you? itu salam, bukan pertanyaan. Topik yang aman dan yang sebaiknya dihindari.", deck:"Obrolan ringan", body:`
<p>Di negara berbahasa Inggris, orang biasa mengobrol singkat dengan orang yang baru ditemui: di lift, di kasir, sebelum rapat dimulai. Tujuannya bukan obrolan yang dalam, melainkan <b>mencairkan suasana</b>.</p>
<h3>How are you? adalah salam</h3>
<p>Sama seperti <i>Apa kabar?</i>, orang tidak benar-benar ingin tahu keadaanmu. Jawab singkat lalu <b>tanya balik</b>. Sebaliknya, jangan terjemahkan salam Indonesia seperti <i>Sudah makan?</i> atau <i>Mau ke mana?</i>: dalam bahasa Inggris, itu pertanyaan sungguhan dan bisa terdengar terlalu ingin tahu.</p>
{{ex:Hey, how's it going?|hei, hauz it GOU-ing?|Hai, apa kabar?}}{{ex:Pretty good! How about you?|PRI-di gud! hau e-BAUT yu?|Baik! Kamu sendiri?}}
<h3>Topik aman vs topik yang dihindari</h3>
<div class="tbl"><table><tr><th>Aman</th><th>Hindari saat baru kenal</th></tr><tr><td>cuaca, rencana akhir pekan atau liburan</td><td>umur, status pernikahan ("Sudah menikah?")</td></tr><tr><td>makanan, tempat makan, perjalanan</td><td>berat badan, penampilan ("Kok gemukan?")</td></tr><tr><td>film, serial, olahraga</td><td>gaji, harga rumah</td></tr><tr><td>pekerjaan (secara ringan), lingkungan tempat tinggal</td><td>politik, agama</td></tr></table></div>
<p>Di Indonesia, menanyakan umur, agama, atau status pernikahan kepada orang baru itu biasa. Di negara berbahasa Inggris, pertanyaan seperti ini bisa dianggap tidak sopan. Cuaca justru topik pembuka yang paling aman di sana, walaupun di negeri tropis seperti kita jarang dibahas.</p>
<h3>Teknik menyambung obrolan</h3>
<p>Jawaban + <b>satu informasi tambahan</b> + <b>tanya balik</b>. Dengan tiga langkah ini, obrolan tidak terputus.</p>
{{ex:It was great! I went hiking. What about you?|it wez greit! ai wént HAI-king. wat e-BAUT yu?|Seru! Saya naik gunung. Kamu sendiri?}}
<p>Tanggapan juga penting: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Mengakhiri dengan wajar</h3>
{{ex:Well, I should get going.|wél, ai syud gét GOU-ing|Ya sudah, saya pamit dulu.}}{{ex:It was nice talking to you.|it wez nais TOO-king te yu|Senang mengobrol denganmu.}}
<div class="tip">Untuk menyetujui kalimat negatif, pakai <b>Me neither</b>. "I don't like horror movies." → "Me neither." (Me too ✗). Dalam bahasa Inggris Amerika lisan kadang terdengar Me either, tetapi Me neither yang baku.</div>`},

{ id:"phrasal", title:"8 · Pengantar phrasal verb", blurb:"Kata kerja + kata kecil = arti baru. Penutur asli memakainya di hampir setiap percakapan.", deck:"Phrasal verb", body:`
<p><i>Phrasal verb</i> adalah <b>kata kerja + kata kecil seperti up, out, off, on</b> yang bersama-sama membentuk arti baru. Dalam percakapan sehari-hari, bentuk ini jauh lebih sering terdengar daripada kata buku pelajaran seperti postpone atau discover.</p>
<div class="tbl"><table><tr><th>Kata formal</th><th>Phrasal verb (sehari-hari)</th><th>Arti</th></tr><tr><td>postpone</td><td class="k">put off</td><td>menunda</td></tr><tr><td>discover</td><td class="k">find out</td><td>mengetahui</td></tr><tr><td>exercise</td><td class="k">work out</td><td>berolahraga</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>tahan menghadapi</td></tr></table></div>
<h3>Kata kecilnya memberi petunjuk</h3>
<p><b>up</b> berarti "sampai tuntas, ke atas", <b>out</b> "keluar, sampai habis", <b>off</b> "lepas, berhenti", dan <b>on</b> "menempel, terus berlanjut".</p>
{{ex:I grew up in Surabaya.|ai gruu ap in suu-re-BAI-e|Saya besar di Surabaya.}}{{ex:We ran out of milk.|wi rèn aut ev milk|Susu kami habis.}}{{ex:Turn off your phone, please.|tern oof yer foun, pliiz|Tolong matikan ponselmu.}}
<h3>Kata ganti di tengah!</h3>
<p>Banyak phrasal verb yang punya objek bisa dipisah. Kata benda boleh diletakkan di depan atau di belakang kata kecilnya, tetapi <b>kata ganti seperti it, them, me wajib di tengah</b>.</p>
{{ex:Turn on the light. / Turn the light on.|tern aan dhe lait / tern dhe lait aan|Nyalakan lampunya. (keduanya ✓)}}{{ex:Turn it on.|tern it aan|Nyalakan itu. (turn on it ✗)}}{{ex:I'll pick you up at seven.|ail pik yu ap et SÉ-ven|Aku jemput jam tujuh.}}
<h3>Phrasal verb yang tidak bisa dipisah</h3>
<p>Phrasal verb yang memakai preposisi, seperti look after, look for, get along with, tidak dipisah: <b>look after my cat</b>, <b>look after her</b>.</p>
<div class="tip">Hafalkan phrasal verb <b>sebagai satu kesatuan</b>, seperti satu kata. Kalau dihafal bersama contoh kalimatnya, posisi kata ganti akan terbiasa dengan sendirinya. Coba pakai tiga phrasal verb setiap hari!</div>`},

{ id:"numbers", title:"9 · Angka, jam, dan harga", blurb:"Titik dan koma yang terbalik, miliar = billion, 13 dan 30, cara membaca harga.", deck:"Angka, jam & tanggal", body:`
<p>Angka langsung terpakai saat bepergian dan bekerja. Kabar baiknya, bahasa Inggris juga mengelompokkan angka per tiga digit, sama seperti kita: <i>ribu</i> = <b>thousand</b>, <i>juta</i> = <b>million</b>. Jebakannya ada di tanda baca dan di kata <i>miliar</i>.</p>
<h3>Titik dan koma terbalik</h3>
<p>Bahasa Indonesia menulis <i>13.000</i> dan <i>3,5</i>. Bahasa Inggris kebalikannya: <b>13,000</b> dan <b>3.5</b> (dibaca <b>three point five</b>).</p>
<div class="tbl"><table><tr><th>Angka</th><th>Bahasa Indonesia</th><th>Bahasa Inggris</th></tr><tr><td class="k">10.000</td><td>sepuluh ribu</td><td>10,000 = ten thousand</td></tr><tr><td class="k">50.000</td><td>lima puluh ribu</td><td>50,000 = fifty thousand</td></tr><tr><td class="k">100.000</td><td>seratus ribu</td><td>100,000 = one hundred thousand</td></tr><tr><td class="k">1.000.000</td><td>satu juta</td><td>1,000,000 = one million</td></tr><tr><td class="k">1.000.000.000</td><td>satu miliar</td><td>1,000,000,000 = one billion</td></tr></table></div>
<p>Ingat: <i>miliar</i> = <b>billion</b>. Untuk rupiah: Rp25.000 = <b>twenty-five thousand rupiah</b>. Setelah angka, <b>thousand</b> dan <b>million</b> tidak pernah diberi -s.</p>
<h3>-teen dan -ty</h3>
<p>Angka 13–19 ditekan di <b>belakang</b>, sedangkan 30, 40, 50, dan seterusnya di <b>depan</b>. Kalau tekanannya salah, orang bisa mendengar angka yang lain.</p>
{{ex:thirteen|ther-TIIN|angka 13}}{{ex:thirty|THER-ti|angka 30}}{{ex:fifteen / fifty|fif-TIIN / FIF-ti|angka 15 / 50}}
<h3>Jam</h3>
<p>Cara paling mudah: baca jam dan menitnya apa adanya. Untuk menit 1–9, tambahkan "oh". Bahasa Inggris Amerika biasanya memakai format 12 jam: <i>pukul 21.05</i> = <b>9:05 p.m.</b></p>
{{ex:It's seven fifteen.|its SÉ-ven fif-TIIN|Jam tujuh lewat lima belas.}}{{ex:It's nine oh five.|its nain ou faiv|Jam sembilan lewat lima.}}{{ex:It's a quarter past ten.|its e KWOOR-ter pèst tén|Jam sepuluh lewat seperempat.}}
<h3>Harga dan tahun</h3>
<p>Harga dalam dolar bisa dibaca dolar dan sennya terpisah, atau cukup sebagai dua kelompok angka. Tahun dibaca per dua digit.</p>
{{ex:It's four ninety-nine.|its foor NAIN-ti-nain|Harganya 4,99 dolar.}}{{ex:That's twelve fifty.|dhèts twélv FIF-ti|Totalnya 12,50 dolar.}}{{ex:twenty twenty-six|TWÉN-ti TWÉN-ti-siks|tahun 2026}}
<div class="tip">Hati-hati dengan tanggal! Amerika menulis <b>bulan/hari</b> (5/3 = 3 Mei), sedangkan Inggris dan Indonesia menulis <b>hari/bulan</b> (5/3 = 5 Maret). Kalau ragu, tulis nama bulannya dengan huruf, seperti May 3rd.</div>`},

{ id:"email", title:"10 · Bahasa Inggris untuk email", blurb:"Salam → tujuan → permintaan → penutup. Singkat dan jelas.", deck:"Kerja & email", body:`
<p>Email kerja dalam bahasa Inggris prinsipnya <b>singkat, jelas tujuannya, dan ramah</b>. Kalau format surat resmi Indonesia diterjemahkan kata per kata, hasilnya terdengar kaku dan bertele-tele.</p>
<h3>Struktur dasar</h3>
<div class="tbl"><table><tr><th>Bagian</th><th>Contoh</th></tr><tr><td>Salam pembuka</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Kalimat pertama (sapaan, tujuan)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Isi (permintaan)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Penutup</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Salam penutup</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>Ganti formula surat Indonesia</h3>
<div class="tbl"><table><tr><th>Surat Indonesia</th><th>Email bahasa Inggris</th></tr><tr><td>Dengan hormat,</td><td class="k">Dear Ms. Wijaya, / Hi Sari,</td></tr><tr><td>Terima kasih atas perhatiannya.</td><td class="k">Thanks for your time.</td></tr><tr><td>Hormat saya,</td><td class="k">Best regards,</td></tr></table></div>
<p>Di kantor Amerika, <b>Hi + nama</b> sudah cukup, bahkan untuk orang yang baru pertama kali dihubungi. Dear hanya untuk situasi yang sangat formal. Menulis jabatan saja tanpa nama (Dear Manager) terdengar janggal. Banyak orang Indonesia hanya punya satu nama; kalau ragu, tulis nama itu saja tanpa Mr. atau Ms.</p>
{{ex:I hope this email finds you well.|ai houp dhis II-meil faindz yu wél|Semoga Anda dalam keadaan baik.}}{{ex:I'm writing to follow up on our meeting.|aim RAI-ding te FAA-lou ap aan aur MII-ding|Saya menghubungi Anda untuk menindaklanjuti rapat kita.}}
<h3>Permintaan halus, tenggat jelas</h3>
{{ex:Could you send me the report by Thursday?|kud yu sénd mi dhe ri-POORT bai THERZ-dei?|Bisakah Anda mengirim laporannya paling lambat hari Kamis?}}{{ex:Thanks for your patience.|thèngks fer yer PEI-syens|Terima kasih atas kesabaran Anda.}}
<p>ASAP terdengar mendesak. Kalau bisa, beri tenggat dengan <b>by + tanggal</b>.</p>
<h3>Terima kasih atas kerja kerasnya</h3>
<p>Ucapan ini punya padanan dalam bahasa Inggris, tetapi sesuaikan dengan situasinya:</p>
<ul><li>Setelah proyek selesai: <b>Thanks for all your hard work!</b></li><li>Di akhir email hari Jumat: <b>Have a great weekend!</b></li><li>Setelah dibantu: <b>I really appreciate your help.</b></li></ul>
<div class="tip">Tidak perlu menulis "Sorry for the late reply" setiap kali. Tulis saja <b>Thanks for your patience</b>: tetap sopan, tanpa minta maaf, dan terdengar positif.</div>`},

{ id:"idioms", title:"11 · Cara memakai idiom dan slang", blurb:"Ungkapan yang aneh kalau diterjemahkan kata per kata. Kapan dan kepada siapa memakainya?", deck:"Idiom bahasa Inggris", body:`
<p>Idiom adalah ungkapan yang artinya tidak bisa ditebak dari arti tiap katanya. "a piece of cake" bukan soal kue, melainkan "gampang sekali". Untuk menonton film dan serial tanpa subtitle, kamu perlu mengenal idiom.</p>
<h3>Ingat lewat gambaran</h3>
<p>Kebanyakan idiom mudah dihafal kalau kamu membayangkan gambarannya.</p>
{{ex:It's a piece of cake.|its e piis ev keik|Gampang sekali. (semudah makan sepotong kue)}}{{ex:It costs an arm and a leg.|it koosts en aarm en e lég|Mahal sekali. (harganya sebelah tangan dan sebelah kaki)}}{{ex:I'm all ears.|aim ool irz|Saya mendengarkan baik-baik. (seluruh badan jadi telinga)}}
<h3>Mirip ungkapan Indonesia</h3>
<div class="tbl"><table><tr><th>Bahasa Inggris</th><th>Bahasa Indonesia</th></tr><tr><td class="k">Speak of the devil!</td><td>Panjang umur! (orangnya datang saat sedang dibicarakan)</td></tr><tr><td class="k">Kill two birds with one stone</td><td>Sekali mendayung, dua tiga pulau terlampaui</td></tr><tr><td class="k">When pigs fly</td><td>Menunggu kucing bertanduk</td></tr><tr><td class="k">A blessing in disguise</td><td>Ada hikmah di balik musibah</td></tr></table></div>
<h3>Idiom vs slang</h3>
<p><b>Idiom</b> sudah lama dipakai, jadi aman untuk segala usia, bahkan di kantor (Let's call it a day). <b>Slang</b> adalah bahasa gaul anak muda, hanya untuk teman (No cap, That song slaps). Seperti bahasa gaul kita, slang cepat berubah dan bisa terdengar janggal kalau dipakai orang yang lebih tua.</p>
{{ex:Let's call it a day.|léts kool it e dei|Cukup sampai di sini hari ini. (boleh dipakai di rapat)}}{{ex:No cap, this is the best pizza ever.|nou kèp, dhis iz dhe bést PIIT-se É-ver|Serius, ini piza terenak yang pernah ada. (hanya ke teman)}}
<div class="tip">Terlalu banyak idiom justru terdengar tidak alami. Satu idiom per percakapan, saat situasinya pas, sudah cukup memberi kesan "bahasa Inggrisnya bagus!".</div>`}
];

exports.CHECKS = {
  pron: [
    ["Saat mengucapkan R, di mana ujung lidah berada?", ["menempel di gusi belakang gigi atas","dijulurkan di antara gigi","tidak menyentuh apa pun","menyentuh bibir bawah"], 2, "Untuk R Amerika, ujung lidah tidak menyentuh apa pun dan tidak bergetar. Kalau menempel, bunyinya jadi L."],
    ["Bagaimana cara mengucapkan th pada \"think\" dengan benar?", ["julurkan ujung lidah sedikit di antara gigi dan embuskan udara","rapatkan kedua bibir lalu lepaskan","tempelkan gigi atas di bibir bawah","gulung lidah ke belakang"], 0, "Untuk TH, ujung lidah harus terlihat di antara gigi. Kalau diganti s, yang terdengar \"sink\"."],
    ["Di mana tekanan pada kata \"hotel\"?", ["ho (depan)","tidak ada tekanan","sama kuat","tel (belakang)"], 3, "hou-TÉL: suku kata belakang diucapkan lebih keras dan lebih panjang."]
  ],
  articles: [
    ["I'm ___ engineer. Apa isi bagian yang kosong?", ["a","an","the","(tanpa artikel)"], 1, "\"engineer\" diawali bunyi vokal (én-), jadi \"an\". Di depan pekerjaan wajib ada artikel."],
    ["Di restoran, kamu bilang kepada pelayan: Can I see ___ menu?", ["the","a","an","(tanpa artikel)"], 0, "Yang dimaksud adalah menu restoran ini, yang sama-sama diketahui, jadi \"the\"."],
    ["'Saya suka kucing' (kucing secara umum) dalam bahasa Inggris?", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "Untuk hal umum, pakai bentuk jamak tanpa artikel. \"a cat\" berarti ‘seekor kucing’, \"the cat\" berarti ‘kucing itu’."]
  ],
  be: [
    ["Mana kalimat yang benar?", ["I am like K-pop.","I like K-pop.","I liking K-pop.","I am likes K-pop."], 1, "\"like\" adalah kata kerja biasa, jadi tidak dipakai bersama to be (\"am\")."],
    ["'Kakak perempuan saya tinggal di Seoul' dalam bahasa Inggris?", ["My sister live in Seoul.","My sister is live in Seoul.","My sister living in Seoul.","My sister lives in Seoul."], 3, "Subjeknya \"she\" (orang ketiga tunggal), jadi kata kerjanya ditambah -s: \"lives\"."],
    ["Bagaimana menjawab ‘tidak’ untuk \"Are you hungry?\"", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "Pertanyaannya memakai to be, jadi jawab juga dengan to be: \"No, I'm not.\""]
  ],
  polite: [
    ["Permintaan mana yang paling sopan kepada orang yang baru dikenal?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "\"Could you ~?\" adalah bentuk dasar permintaan yang sopan. \"Give me\" terdengar seperti perintah."],
    ["Jawaban untuk \"Would you mind opening the window?\" yang berarti ‘Tentu, saya bukakan’?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "\"mind\" = keberatan. Jawaban \"No\" (tidak keberatan) berarti ‘boleh, saya lakukan’."],
    ["Bentuk kata kerja apa yang dipakai setelah \"Would you mind\"?", ["V1 (open)","to + V1 (to open)","V2 (opened)","~ing (opening)"], 3, "Setelah \"mind\", pakai bentuk -ing: \"Would you mind waiting?\""]
  ],
  tense: [
    ["'Saya minum kopi setiap pagi' (kebiasaan) dalam bahasa Inggris?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Kebiasaan memakai Simple Present Tense. Bentuk be + -ing berarti ‘sedang minum sekarang’."],
    ["Kamu melihat temanmu lupa membawa dompet, lalu langsung bilang: ‘Aku yang bayar!’", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Keputusan yang dibuat saat bicara memakai \"will\". \"going to\" untuk rencana yang sudah dibuat sebelumnya."],
    ["Apa bentuk V2 dari \"go\"?", ["goed","gone","going","went"], 3, "\"go\" adalah kata kerja tidak beraturan: go - went - gone (V1 - V2 - V3)."]
  ],
  prep: [
    ["'Kita ketemu pukul 7' → Let's meet ___ 7.", ["in","at","on","to"], 1, "Di depan jam yang tepat, pakai \"at\": pada pukul 7 → \"at 7\"."],
    ["'pada hari Senin' → ___ Monday", ["on","in","at","by"], 0, "Di depan nama hari dan tanggal, pakai \"on\"."],
    ["Mana kalimat yang benar?", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Di depan \"next\", \"last\", \"this\", \"every\" tidak ada preposisi."]
  ],
  smalltalk: [
    ["Pegawai kafe bertanya \"How are you today?\" Jawaban apa yang paling wajar?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "\"How are you?\" adalah salam. Jawab singkat lalu tanya balik, sempurna."],
    ["Pertanyaan mana yang sebaiknya dihindari saat baru kenal?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "Di negara berbahasa Inggris, menanyakan umur kepada orang yang baru dikenal bisa dianggap tidak sopan."],
    ["Bagaimana menyetujui \"I don't like horror movies.\"?", ["Me too.","So do I.","Me neither.","Me also."], 2, "Untuk menyetujui kalimat negatif, pakai \"Me neither\" (atau \"Neither do I\")."]
  ],
  phrasal: [
    ["‘Bisa tolong matikan itu?’ Mana kalimat yang benar?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "Kata ganti (\"it\") berada di tengah phrasal verb: \"turn it off\"."],
    ["Apa arti \"run out of\"?", ["berlari ke luar","kehabisan sesuatu","kabur dari suatu tempat","datang terlambat"], 1, "\"We ran out of milk.\" = Susu kami habis."],
    ["'Ayo kita tunda rapatnya sampai minggu depan' dalam bahasa Inggris?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "\"put off\" = menunda. \"put on\" = memakai atau menyalakan, \"put out\" = memadamkan (api)."]
  ],
  numbers: [
    ["50.000 (lima puluh ribu) dalam bahasa Inggris?", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "Kelompokkan per tiga digit: 50 + thousand = \"fifty thousand\". Dalam bahasa Inggris ditulis 50,000."],
    ["Di mana tekanan pada kata \"thirteen\"?", ["thir (depan)","teen (belakang)","sama kuat","tidak ada tekanan"], 1, "Angka -teen ditekan di belakang: ther-TIIN. \"thirty\" ditekan di depan: THER-ti."],
    ["Bagaimana cara paling wajar membaca $12.50?", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "Harga dibaca sebagai dua kelompok angka: \"twelve fifty\"."]
  ],
  email: [
    ["Kamu baru pertama kali menghubungi Jenny Park di perusahaan klien. Salam pembuka mana yang paling aman?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "Dalam email kerja Amerika, Hi + nama paling aman. Untuk situasi yang sangat formal: \"Dear Ms. Park,\""],
    ["Proyek selesai dan kamu ingin berterima kasih atas kerja keras tim. Kalimat mana yang tepat?", ["You suffered a lot.","Thanks for all your hard work!","Good suffering.","Please work harder."], 1, "‘Terima kasih atas kerja kerasnya’ → \"Thanks for all your hard work!\" \"suffer\" berarti ‘menderita’, jadi dua pilihan itu terdengar aneh."],
    ["Kalimat mana yang meminta tenggat dengan sopan?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "\"Could you ~?\" + \"by\" + hari atau tanggal: halus, tetapi jelas."]
  ],
  idioms: [
    ["Apa arti \"The test was a piece of cake.\"?", ["Ujiannya gampang sekali","Saya makan kue saat ujian","Ujiannya sangat sulit","Ujian saya gagal total"], 0, "\"a piece of cake\" = gampang sekali."],
    ["Apa arti \"I'm feeling under the weather.\"?", ["Cuacanya buruk","Saya sedang di luar","Saya agak tidak enak badan","Saya kehujanan"], 2, "Tidak ada hubungannya dengan cuaca: artinya badan sedang kurang sehat."],
    ["Mana yang paling janggal dipakai saat melapor kepada atasan?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "\"No cap\" dan \"slaps\" adalah slang antarteman. Idiom boleh dipakai di kantor."]
  ]
};
