/* id-en stage B1: lessons for Indonesian speakers (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect Tense 2: for, since, dan sampai sekarang", blurb:"Dimulai di masa lalu dan masih berlangsung sampai sekarang. for + lamanya, since + titik awal.", deck:"Perkenalan diri", body:`
<p>Ini pemakaian kedua <b>Present Perfect Tense</b>: kegiatan yang <b>dimulai di masa lalu dan masih berlangsung sampai sekarang</b>. Dalam bahasa Indonesia cukup bilang <i>saya sudah 20 tahun tinggal di Jakarta</i>, tanpa mengubah kata kerja. Dalam bahasa Inggris, Simple Present atau Present Continuous di sini salah.</p>
<p><b>I am living in Jakarta for 20 years.</b> ✗ → <b>I have lived in Jakarta for 20 years.</b> ✓</p>
{{ex:I've lived in Jakarta for five years.|aiv livd in je-KAAR-te fer faiv yirz|Saya sudah lima tahun tinggal di Jakarta}}{{ex:I've worked here since 2020.|aiv werkt hir sins TWÉN-ti TWÉN-ti|Saya bekerja di sini sejak 2020}}{{ex:I've known her for a long time.|aiv noun her fer e loong taim|Saya sudah lama kenal dia}}
<h3>for dan since</h3>
<p><i>selama</i> atau <i>sudah ...</i> (lamanya) → <b>for</b>; <i>sejak</i> → <b>since</b>.</p>
<div class="tbl"><table><tr><th>for + lamanya</th><th>since + titik awal</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long ...?</h3>
{{ex:How long have you been here?|hau loong hev yu bin hir?|Sudah berapa lama kamu di sini?}}{{ex:How long have you studied English?|hau loong hev yu STA-did ING-glisy?|Sudah berapa lama kamu belajar bahasa Inggris?}}
<h3>just, already, yet</h3>
<p><i>baru saja</i> → <b>just</b>; <i>sudah</i> → <b>already</b>; <i>sudah ... belum?</i> → <b>yet</b>.</p>
{{ex:I've just finished.|aiv jast FI-nisyt|Saya baru saja selesai}}{{ex:I've already seen it.|aiv ool-RÉ-di siin it|Saya sudah menontonnya}}{{ex:Have you eaten yet?|hev yu II-ten yét?|Kamu sudah makan belum?}}
<div class="tip">Kesalahan paling umum: memakai Simple Present. <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Apa isi bagian yang kosong?",["since","for","during","from"],1,"Sebelum lamanya waktu (selama), pakai \"for\"."],["I've worked here ___ 2020. Apa isi bagian yang kosong?",["for","in","since","at"],2,"Sebelum titik awal (sejak), pakai \"since\"."],["'Sudah berapa lama kamu di sini?' dalam bahasa Inggris?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"Polanya How long have you + V3."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","Sebelum lamanya waktu, pakai \"for\"."],
["mc","She's lived here ___ 2019.","since","for","in","at","Sebelum titik awal, pakai \"since\"."],
["mc","'Sudah berapa lama kamu di sini?' dalam bahasa Inggris?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Polanya How long have you + V3."],
["mc","'Saya baru saja selesai.' dalam bahasa Inggris?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","Polanya have + just + V3."],
["mc","'Kamu sudah makan belum?' dalam bahasa Inggris?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Dalam kalimat tanya, 'sudah ... belum?' adalah \"yet\"."],
["or","Saya sudah lima tahun tinggal di sini","I've lived here for five years","year since","Lima tahun: bentuk jamak \"years\"; sebelum lamanya waktu pakai \"for\"."],
["or","Saya sudah menonton film itu","I've already seen the movie","a saw","Film yang sudah sama-sama diketahui: artikel \"the\"."],
["or","Sudah berapa lama kamu menunggu?","How long have you waited","did","Polanya How long have you + V3."],
["fi","I've worked here __ two years.","Saya sudah dua tahun bekerja di sini","for","since|from|during","Sebelum lamanya waktu, pakai \"for\"."],
["fi","I've been here __ Monday.","Saya di sini sejak hari Senin","since","for|at|during","Sebelum titik awal, pakai \"since\"."],
["fi","Have you finished __?","Kamu sudah selesai belum?","yet|already","ever|never|since","Dalam kalimat tanya, 'sudah ... belum?' adalah \"yet\"."],
["ty","Saya sudah tiga tahun tinggal di sini","I've lived here for three years","I've lived · here · for · three · year — bentuk jamak","year","Tiga tahun: bentuk jamak \"years\"."],
["ty","Sudah berapa lama kamu di sini?","How long have you been here","how long · have you · been here","are","Polanya How long have you + V3."],
["ty","Saya sudah membaca buku itu","I've already read the book|I've read the book already|I already read the book","already · read · book — artikel the","a","Buku yang sudah sama-sama diketahui: artikel \"the\"."]]},
{ id:"narrative", title:"Tense untuk bercerita: Simple Past, Past Continuous, Past Perfect", blurb:"Latar pakai Past Continuous, kejadian pakai V2, yang terjadi lebih dulu pakai had + V3.", deck:"Film, serial & slang", body:`
<p>Saat menceritakan kejadian, kita mencampur tiga tense, dan masing-masing punya tugas sendiri. Dalam bahasa Indonesia, urutan kejadian ditunjukkan dengan kata seperti <i>sedang</i>, <i>sudah</i>, atau <i>sebelumnya</i>. Dalam bahasa Inggris, bentuk kata kerjanya yang menunjukkan.</p>
<div class="tbl"><table><tr><th>Tense</th><th>Tugas</th><th>Contoh</th></tr><tr><td class="k">Past Continuous</td><td>latar, kegiatan yang sedang berjalan</td><td>I was walking home.</td></tr><tr><td class="k">Simple Past</td><td>kejadian utama</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>kejadian yang lebih dulu terjadi</td><td>He had moved to Surabaya.</td></tr></table></div>
<h3>Latar + kejadian</h3>
{{ex:I was walking home when I saw an old friend.|ai wez WOO-king houm wén ai soo en ould frénd|Waktu sedang jalan pulang, saya bertemu teman lama}}
<h3>Past Perfect: had + V3</h3>
<p>Untuk kejadian yang terjadi <b>lebih dulu</b> daripada titik lain di masa lalu. Dalam cerita, sering sepadan dengan <i>sudah</i>: <i>waktu saya sampai, filmnya sudah mulai</i>.</p>
{{ex:When I arrived, the movie had already started.|wén ai e-RAIVD, dhe MUU-vi hed ool-RÉ-di STAAR-tid|Waktu saya sampai, filmnya sudah mulai}}{{ex:I had never seen snow before.|ai hed NÉ-ver siin snou bi-FOOR|Sebelumnya saya belum pernah melihat salju}}
<h3>Kata penanda urutan</h3>
<p><b>first</b> (pertama), <b>then</b> (lalu), <b>after that</b> (setelah itu), <b>finally</b> (akhirnya).</p>
{{ex:First we ate dinner. Then we watched a movie.|ferst wi eit DI-ner. dhén wi waact e MUU-vi|Pertama kami makan malam. Lalu kami menonton film}}
<div class="tip"><b>then</b> (lalu) dan <b>than</b> (daripada) bunyinya mirip, tetapi katanya berbeda. Untuk bercerita, pakai <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Apa isi bagian yang kosong?",["has","was","had","did"],2,"Kejadian yang lebih dulu terjadi: had + V3."],["I ___ walking home when it started to rain. Apa isi bagian yang kosong?",["was","had","did","have"],0,"Kegiatan yang sedang berjalan (latar) memakai Past Continuous."],["Kalimat mana yang menunjukkan kejadian yang lebih dulu terjadi?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + V3 adalah Past Perfect."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","Kejadian yang lebih dulu terjadi: had + V3."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Kegiatan yang sedang berjalan memakai Past Continuous."],
["mc","'Waktu saya sampai, keretanya sudah berangkat.' dalam bahasa Inggris?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Kejadian yang lebih dulu terjadi memakai had + V3."],
["mc","Kata untuk 'lalu' saat bercerita?","then","than","that","them","\"Then\" artinya lalu, \"than\" artinya daripada."],
["mc","'Sebelumnya saya belum pernah melihat salju.' dalam bahasa Inggris?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","Polanya had + never + V3."],
["or","Keretanya sudah berangkat (waktu itu)","The train had already left","a has","Kereta yang mau dinaiki itu: artikel \"the\"."],
["or","Saya bertemu seorang teman lama","I met an old friend","a friends","\"Old\" diawali bunyi vokal, jadi artikelnya \"an\"."],
["or","Waktu itu saya sedang jalan pulang","I was walking home","had","Latar cerita memakai Past Continuous."],
["fi","I was sleeping __ you called.","Saya sedang tidur waktu kamu menelepon","when","than|so|had","'Waktu' di sini adalah \"when\"."],
["fi","The bus had already __.","Busnya sudah berangkat","left|gone","leave|leaving|leaves","Setelah \"had\", pakai V3."],
["fi","First we ate. __ we watched a movie.","Pertama kami makan. Lalu kami menonton film","Then|After that|Next","Than|Because|When","'Lalu' adalah \"then\"."],
["ty","Filmnya sudah mulai (waktu itu)","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — artikel the","a","Film yang mau ditonton itu: artikel \"the\"."],
["ty","Saya bertemu seorang teman lama","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — artikel an","a","\"Old\" diawali bunyi vokal, jadi artikelnya \"an\"."],
["ty","Waktu itu saya sedang jalan pulang","I was walking home","was · walking · home","had","Latar cerita memakai Past Continuous."]]},
{ id:"conditionals", title:"Pengandaian tipe 2 dan 3: andai dan penyesalan", blurb:"Berlawanan dengan kenyataan sekarang → would; menyesali masa lalu → would have.", deck:"Perasaan & reaksi", body:`
<p>Dipakai untuk hal yang tidak nyata. Dalam bahasa Indonesia: <i>seandainya ..., saya akan ...</i> dan <i>seandainya dulu ..., saya pasti sudah ...</i>. Bahasa Indonesia tidak mengubah kata kerja; bahasa Inggris memakai bentuk lampau untuk menunjukkan bahwa sesuatu tidak nyata.</p>
<h3>Tipe 2: berlawanan dengan kenyataan sekarang</h3>
<p><b>If + V2, would + V1</b>. Bentuknya lampau, tetapi artinya sekarang.</p>
{{ex:If I had time, I would travel.|if ai hèd taim, ai wud TRÈ-vel|Seandainya saya punya waktu, saya akan jalan-jalan}}{{ex:If I were you, I'd take it.|if ai wer yu, aid teik it|Kalau aku jadi kamu, aku ambil}}{{ex:What would you do?|wat wud yu duu?|Kalau kamu, apa yang akan kamu lakukan?}}
<h3>Tipe 3: berlawanan dengan masa lalu</h3>
<p><b>If + had + V3, would have + V3</b>.</p>
{{ex:If I had studied, I would have passed.|if ai hed STA-did, ai wud ev pèst|Seandainya dulu saya belajar, saya pasti lulus}}
<h3>Penyesalan: should have, I wish</h3>
{{ex:I should have called.|ai syud ev koold|Seharusnya saya menelepon}}{{ex:I wish I had more time.|ai wisy ai hèd moor taim|Andai saya punya lebih banyak waktu}}
<div class="tbl"><table><tr><th>Tipe</th><th>Bagian if</th><th>Bagian hasil</th></tr><tr><td>1 (bisa terjadi)</td><td class="k">Simple Present</td><td class="k">will</td></tr><tr><td>2 (berlawanan dengan sekarang)</td><td class="k">V2</td><td class="k">would</td></tr><tr><td>3 (berlawanan dengan masa lalu)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip"><b>If I were you</b> adalah ungkapan tetap. Setelah I pun, pakai <b>were</b>, bukan was.</div>`,
check:[["If I ___ rich, I would travel. Apa isi bagian yang kosong?",["am","were","will be","would be"],1,"Berlawanan dengan kenyataan sekarang: bentuk lampau (\"were\")."],["If I had studied, I ___ passed. Apa isi bagian yang kosong?",["would","will have","would have","had"],2,"Berlawanan dengan masa lalu: would have + V3."],["'Seharusnya saya menelepon' dalam bahasa Inggris?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Penyesalan memakai should have + V3."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Berlawanan dengan kenyataan sekarang: bagian if memakai V2."],
["mc","'Kalau aku jadi kamu, aku beli itu.' dalam bahasa Inggris?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd ...\" adalah ungkapan tetap."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Berlawanan dengan masa lalu: would have + V3."],
["mc","'Seharusnya saya menelepon.' dalam bahasa Inggris?","I should have called.","I should called.","I should had call.","I must called.","Penyesalan memakai should have + V3."],
["mc","'Kalau kamu, apa yang akan kamu lakukan?' dalam bahasa Inggris?","What would you do?","What will you did?","What would you did?","What you would do?","Pengandaian memakai would + V1."],
["or","Seandainya saya punya waktu, saya akan jalan-jalan","If I had time I'd travel","have will","Berlawanan dengan kenyataan sekarang: V2 \"had\" dan \"would\"."],
["or","Kalau saya, saya akan naik taksi","I'd take a taxi","the taxis","Taksi mana saja, satu: artikel \"a\"."],
["or","Seharusnya saya membeli satu tiket","I should have bought a ticket","the buy","Satu tiket: artikel \"a\"."],
["fi","If I __ you, I'd go.","Kalau aku jadi kamu, aku pergi","were|was","am|be|would be","\"If I were you\" adalah ungkapan tetap."],
["fi","I would __ helped.","Saya pasti sudah membantu","have","had|has|having","Polanya would have + V3."],
["fi","I wish I __ more time.","Andai saya punya lebih banyak waktu","had","have|would have|will have","Setelah \"I wish\", pakai V2."],
["ty","Kalau aku jadi kamu, aku pergi","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","Polanya \"If I were you, I'd ...\"."],
["ty","Andai saya punya mobil","I wish I had a car","I wish · had · car — artikel a","the","Mobil apa saja, satu: artikel \"a\"."],
["ty","Seharusnya saya naik taksi","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — artikel a","the","Taksi mana saja, satu: artikel \"a\"."]]},
{ id:"passive", title:"Kalimat pasif: be + V3", blurb:"Saat yang penting adalah kejadiannya, bukan siapa pelakunya.", deck:"Kerja & email", body:`
<p>Bahasa Indonesia sangat sering memakai pasif <i>di-</i>: <i>rumah itu dibangun tahun 1990</i>, <i>HP saya dicuri</i>. Bentuk <i>di-</i> tidak butuh kata bantu apa pun. Bahasa Inggris butuh <b>to be + V3</b>, dan <b>to be</b> itulah yang membawa tense.</p>
<p><b>The house built in 1990.</b> ✗ → <b>The house was built in 1990.</b> ✓</p>
{{ex:The house was built in 1990.|dhe haus wez bilt in NAIN-tiin NAIN-ti|Rumah itu dibangun tahun 1990}}{{ex:My phone was stolen.|mai foun wez STOU-len|HP saya dicuri}}{{ex:This was made in Indonesia.|dhis wez meid in in-de-NII-zye|Ini dibuat di Indonesia}}{{ex:The meeting was canceled.|dhe MII-ding wez KÈN-seld|Rapatnya dibatalkan}}
<h3>Simple Present: hal yang selalu terjadi</h3>
{{ex:English is spoken here.|ING-glisy iz SPOU-ken hir|Bahasa Inggris dipakai di sini}}{{ex:Breakfast is served at seven.|BRÉK-fest iz servd et SÉ-ven|Sarapan disajikan jam tujuh}}
<h3>Pelakunya: by</h3>
{{ex:It was written by Andrea Hirata.|it wez RI-ten bai ÈN-dri-e hi-RAA-te|Itu ditulis oleh Andrea Hirata}}
<h3>Kalimat aktif dan kalimat pasif</h3>
<div class="tbl"><table><tr><th>Aktif</th><th>Pasif</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>Dalam percakapan santai, penutur bahasa Inggris lebih sering memakai kalimat aktif. Pakai kalimat pasif kalau pelakunya tidak diketahui atau tidak penting.</p>
<div class="tip">Kesalahan paling umum: lupa <b>to be</b>. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Apa isi bagian yang kosong?",["is","was","did","has"],1,"Kejadiannya kemarin, jadi \"was\" + V3."],["This phone ___ made in Korea. Apa isi bagian yang kosong?",["was","did","has","does"],0,"Kalimat pasif memakai to be + V3."],["'Rapatnya dibatalkan' dalam bahasa Inggris?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"to be + V3 \"canceled\"."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Kalimat pasif memakai to be + V3."],
["mc","'Ini dibuat di Korea.' dalam bahasa Inggris?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","to be + V3 \"made\"."],
["mc","'Bahasa Inggris dipakai di sini.' dalam bahasa Inggris?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Hal yang selalu terjadi: \"is\" + V3."],
["mc","'Rapatnya dibatalkan.' dalam bahasa Inggris?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Kalimat pasif memakai to be + V3."],
["mc","'Sarapan disajikan jam tujuh.' dalam bahasa Inggris?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Nama waktu makan dipakai tanpa artikel, lalu \"is\" + V3."],
["or","Tas saya dicuri","My bag was stolen","stole","Setelah to be, pakai V3 \"stolen\"."],
["or","Rapatnya dibatalkan","The meeting was canceled","A meetings","Rapat yang sudah sama-sama diketahui: artikel \"the\"."],
["or","Jendelanya pecah","The window was broken","a windows","Jendela yang ada di sini: artikel \"the\"."],
["fi","This was __ in Korea.","Ini dibuat di Korea","made","make|making|makes","Setelah to be, pakai V3."],
["fi","The room __ cleaned every day.","Kamarnya dibersihkan setiap hari","is|gets","does|has|did","Hal yang selalu terjadi: \"is\" + V3."],
["fi","It was written __ Han Kang.","Itu ditulis oleh Han Kang","by","from|of|with","Pelakunya disebut dengan \"by\"."],
["ty","HP saya dicuri","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","to be + V3 \"stolen\"."],
["ty","Rapat itu dibatalkan","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — artikel the","a","Rapat yang sudah sama-sama diketahui: artikel \"the\"."],
["ty","Tadi pintunya terkunci","The door was locked","the door · was · locked — artikel the","a","Pintu yang ada di sini: artikel \"the\"."]]},
{ id:"reported", title:"Kalimat tidak langsung: menyampaikan perkataan orang", blurb:"She said she was tired. Tense mundur satu langkah, dan setelah tell ada orangnya.", deck:"Telepon & singkatan chat", body:`
<p>Dipakai untuk menyampaikan perkataan orang lain: <i>dia bilang dia capek</i>. Di sekolah, ini disebut kalimat langsung dan <b>kalimat tidak langsung</b>. Dalam bahasa Indonesia kata kerjanya tetap; dalam bahasa Inggris, tense dalam kalimat yang disampaikan <b>mundur satu langkah ke lampau</b>.</p>
<div class="tbl"><table><tr><th>Kalimat langsung</th><th>Kalimat tidak langsung</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|syi séd syi wez TAI-erd|Dia (perempuan) bilang dia capek}}{{ex:He said he would come.|hi séd hi wud kam|Dia (laki-laki) bilang dia akan datang}}
<h3>say dan tell</h3>
<p>Setelah <b>tell</b> harus ada pendengarnya (<b>me, him, her</b>...). Setelah <b>say</b> tidak.</p>
{{ex:He told me he was busy.|hi tould mi hi wez BI-zi|Dia (laki-laki) bilang ke saya bahwa dia sibuk}}
<h3>Menyampaikan pertanyaan</h3>
<p>Pertanyaan ya/tidak memakai <b>if</b> (<i>apakah</i>). Pertanyaan dengan kata tanya tetap memakai kata tanyanya. Setelah itu, urutannya seperti kalimat biasa (subjek + kata kerja), tanpa did.</p>
{{ex:She asked if I was okay.|syi èskt if ai wez ou-KEI|Dia (perempuan) bertanya apakah saya baik-baik saja}}{{ex:He asked where I lived.|hi èskt wér ai livd|Dia (laki-laki) bertanya saya tinggal di mana}}
<div class="tip">Kesalahan paling umum: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ dan <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Apa isi bagian yang kosong?",["is being","was","be","will"],1,"Dalam kalimat tidak langsung, tense mundur ke lampau."],["He ___ me he would come. Apa isi bagian yang kosong?",["said","say","told","tell to"],2,"Ada pendengarnya (\"me\"), jadi \"told\"."],["'Dia (laki-laki) bertanya saya tinggal di mana' dalam bahasa Inggris?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Pertanyaan yang disampaikan memakai urutan kalimat biasa."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","Dalam kalimat tidak langsung, tense mundur ke lampau."],
["mc","He ___ me he was late.","told","said","say","tells to","Ada pendengarnya, jadi \"told\"."],
["mc","'Dia (laki-laki) bilang dia akan datang.' dalam bahasa Inggris?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" berubah menjadi \"would\"."],
["mc","'Dia (perempuan) bertanya apakah saya baik-baik saja.' dalam bahasa Inggris?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Pertanyaan ya/tidak disampaikan dengan \"if\"."],
["mc","'Dia (laki-laki) bertanya saya tinggal di mana.' dalam bahasa Inggris?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Pertanyaan yang disampaikan memakai urutan kalimat biasa."],
["or","Dia (perempuan) bilang dia capek","She said she was tired","told","Tanpa pendengar, pakai \"said\"."],
["or","Dia (laki-laki) bilang dia membeli sebuah mobil","He said he bought a car","the cars","Satu mobil yang baru disebut: artikel \"a\"."],
["or","Dia (perempuan) bilang dia suka buku itu","She said she liked the book","a books","Buku yang sudah sama-sama diketahui: artikel \"the\"."],
["fi","She __ she was tired.","Dia (perempuan) bilang dia capek","said","told|asked|say","Tanpa pendengar, pakai \"said\"."],
["fi","He told __ he was busy.","Dia (laki-laki) bilang ke saya bahwa dia sibuk","me","I|my|to","Setelah \"told\", sebutkan pendengarnya."],
["fi","She asked __ I was okay.","Dia (perempuan) bertanya apakah saya baik-baik saja","if|whether","that|what|did","Pertanyaan ya/tidak disampaikan dengan \"if\"."],
["ty","Dia (laki-laki) bilang dia sibuk","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","Dalam kalimat tidak langsung, tense mundur ke lampau."],
["ty","Dia (perempuan) bilang dia punya mobil","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — artikel a","the","Satu mobil yang baru disebut: artikel \"a\"."],
["ty","Dia (laki-laki) bilang dia sudah menonton film itu","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — artikel the","a","Film yang sudah sama-sama diketahui: artikel \"the\"."]]},
];
