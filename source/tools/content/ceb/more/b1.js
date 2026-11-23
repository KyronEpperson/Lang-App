/* ceb-en stage B1: lessons for Cebuano (Bisaya) speakers (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2: for ug since, hangtod karon", blurb:"Nagsugod sa nangagi ug nagpadayon pa karon. \"for\" + gidugayon, \"since\" + sinugdanan.", deck:"Pagpaila sa kaugalingon", body:`
<p>Ikaduhang gamit sa present perfect: <b>butang nga nagsugod sa nangagi ug nagpadayon pa hangtod karon</b>. Sa Bisaya, ang <i>na</i> ra ang timailhan: <i>Lima na ka tuig kong nagpuyo dinhi</i>. Sa Iningles, kinahanglan ang <b>have + past participle</b>.</p>
{{ex:I've lived in Cebu for five years.|/aɪv ˈlɪvd ɪn seɪˈbuː fər ˈfaɪv ˈjɪrz/|Lima na ka tuig kong nagpuyo sa Cebu}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Sukad 2020, dinhi na ko nagtrabaho}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Dugay na kong nakaila niya (babaye)}}
<h3>for ug since</h3>
<div class="tbl"><table><tr><th>for + gidugayon (sulod sa)</th><th>since + sinugdanan (sukad)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long ...?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Unsa na ka kadugay dinhi?}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|Unsa na ka kadugay nga nagtuon og Iningles?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Bag-o lang ko nahuman}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Nakita na nako kini}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Nakakaon na ka?}}
<div class="tip">Kasagarang sayop: simple present tense ang gamiton. <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓ <b>She works here since 2022.</b> ✗ → <b>She has worked here since 2022.</b> ✓ Ug ang <i>hangtod karon</i> kasagaran kay <b>still</b>: <b>Until now, I have no reply.</b> ✗ → <b>I still have no reply.</b> ✓</div>`,
check:[["I've lived here ___ three years. Unsay sakto sa blangko?",["since","for","during","from"],1,"Sa atubangan sa gidugayon, \"for\" ang gamiton."],["I've worked here ___ 2020. Unsay sakto sa blangko?",["for","in","since","at"],2,"Sa atubangan sa sinugdanan, \"since\" ang gamiton."],["'Unsa na ka kadugay dinhi?' sa Iningles?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"\"How long have you\" + past participle."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","Sa atubangan sa gidugayon, \"for\" ang gamiton."],
["mc","She's lived here ___ 2019.","since","for","in","at","Sa atubangan sa sinugdanan, \"since\" ang gamiton."],
["mc","'Unsa na ka kadugay dinhi?' sa Iningles?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","\"How long have you\" + past participle."],
["mc","'Bag-o lang ko nahuman' sa Iningles?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","\"have\" + \"just\" + past participle."],
["mc","'Nakakaon na ka?' sa Iningles?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Sa pangutana, ang \"na\" kay \"yet\"."],
["or","Lima na ka tuig kong nagpuyo dinhi","I've lived here for five years","year since","Lima ka tuig, mao nga plural nga \"years\"; sa atubangan sa gidugayon, \"for\"."],
["or","Nakatan-aw na ko sa maong salida","I've already seen the movie","a saw","Article \"the\" kay nahibaloan na kon unsang salida."],
["or","Unsa na ka kadugay nga naghulat?","How long have you waited","did","\"How long have you\" + past participle."],
["fi","I've worked here __ two years.","Duha na ka tuig kong nagtrabaho dinhi","for","since|from|during","Sa atubangan sa gidugayon, \"for\" ang gamiton."],
["fi","I've been here __ Monday.","Sukad Lunes, ania na ko dinhi","since","for|at|during","Sa atubangan sa sinugdanan, \"since\" ang gamiton."],
["fi","Have you finished __?","Nahuman na ka?","yet|already","ever|never|since","Sa pangutana, ang \"na\" kay \"yet\"."],
["ty","Tulo na ka tuig kong nagpuyo dinhi","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — plural kay tulo ka tuig","year","Tulo ka tuig, mao nga plural nga \"years\"."],
["ty","Unsa na ka kadugay dinhi?","How long have you been here","how long · have you · been here","are","\"How long have you\" + past participle."],
["ty","Nabasa na nako ang maong libro (gamita ang \"already\")","I've already read the book|I've read the book already|I already read the book","already · read · book — kinahanglan ang article","a","Article \"the\" kay nahibaloan na kon unsang libro."]]},
{ id:"narrative", title:"Tense sa pag-istorya: simple past, past progressive, past perfect", blurb:"Background: past progressive. Panghitabo: simple past tense. Ang mas nauna pa: \"had\" + past participle.", deck:"Salida, serye ug slang", body:`
<p>Kon mag-istorya ta bahin sa nahitabo, tulo ka tense ang sagolon. Lahi-lahi ang ilang trabaho. Sa Bisaya, <i>nag-</i>, <i>ni-</i> ug <i>na</i> ang motabang; sa Iningles, ang porma sa verb.</p>
<div class="tbl"><table><tr><th>Tense</th><th>Trabaho</th><th>Pananglitan</th></tr><tr><td class="k">past progressive</td><td>background, ang nagpadayon</td><td>I was walking home.</td></tr><tr><td class="k">simple past tense</td><td>ang panghitabo</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect</td><td>ang nahitabo nga mas una pa</td><td>He had moved to Davao.</td></tr></table></div>
<h3>Background + panghitabo</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Naglakaw ko pauli dihang nakita nako ang usa ka karaang higala}}
<h3>Past perfect: had + past participle</h3>
<p>Para kini sa butang nga nahitabo <b>mas una pa</b> kaysa laing panghitabo sa nangagi.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Pag-abot nako, nagsugod na ang salida}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Wala pa gyud ko makakita og niyebe kaniadto}}
<h3>Mga pulong nga nagpakita sa han-ay</h3>
<p><b>first</b> (una), <b>then</b> (unya), <b>after that</b> (human niana), <b>finally</b> (sa kataposan).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Una, nanihapon mi. Unya, nitan-aw mi og salida}}
<div class="tip">Ang <b>then</b> <b>/ðen/</b> (unya) ug ang <b>than</b> <b>/ðæn/</b> (kaysa) hapit pareho og paglitok, pero lahi nga pulong. Sa pag-istorya, <b>then</b> ang gamiton.</div>`,
check:[["When I arrived, the train ___ already left. Unsay sakto sa blangko?",["has","was","had","did"],2,"Ang mas nauna nga panghitabo: \"had\" + past participle."],["I ___ walking home when it started to rain. Unsay sakto sa blangko?",["was","had","did","have"],0,"Ang nagpadayon nga lihok (background) kay past progressive."],["Hain ang sentence nga nagpakita sa mas nauna pa nga panghitabo?",["I was eating.","I ate.","I eat.","I had eaten."],3,"Ang \"had\" + past participle mao ang past perfect."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","Ang mas nauna nga panghitabo: \"had\" + past participle."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Ang nagpadayon nga lihok kay past progressive."],
["mc","'Pag-abot nako, nilarga na ang tren' sa Iningles?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Sa mas nauna nga panghitabo, \"had\" + past participle ang gamiton."],
["mc","Sa pag-istorya, unsay Iningles sa 'unya'?","then","than","that","them","Ang \"then\" kay 'unya'; ang \"than\" kay 'kaysa'."],
["mc","'Wala pa gyud ko makakita og niyebe kaniadto' sa Iningles?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","\"had\" + \"never\" + past participle."],
["or","Nilarga na ang tren niadtong higayona","The train had already left","a has","Ang tren nga sakyan unta, mao nga article \"the\"."],
["or","Nahimamat nako ang usa ka karaang higala","I met an old friend","a friends","Ang \"old\" nagsugod sa tingog nga vowel, mao nga article \"an\"."],
["or","Naglakaw ko pauli niadtong orasa","I was walking home","had","Ang background kay past progressive."],
["fi","I was sleeping __ you called.","Natulog ko dihang nitawag ka","when","than|so|had","Ang \"dihang\" kay \"when\"."],
["fi","The bus had already __.","Nilarga na ang bus niadtong higayona","left|gone","leave|leaving|leaves","Human sa \"had\", past participle ang sunod."],
["fi","First we ate. __ we watched a movie.","Una, nangaon mi. Unya, nitan-aw mi og salida","Then|After that|Next","Than|Because|When","Ang 'unya' kay \"then\"."],
["ty","Nagsugod na ang salida niadtong higayona","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — kinahanglan ang article","a","Ang salida nga tan-awon unta, mao nga article \"the\"."],
["ty","Nahimamat nako ang usa ka karaang higala","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — kinahanglan ang article","a","Ang \"old\" nagsugod sa tingog nga vowel, mao nga article \"an\"."],
["ty","Naglakaw ko pauli niadtong orasa","I was walking home","was · walking · home","had","Ang background isulti sa past progressive."]]},
{ id:"conditionals", title:"Second ug third conditional: handurawan ug pagmahay", blurb:"Kon sukwahi sa tinuod karon, \"would\". Kon pagmahay sa nangagi, \"would have\".", deck:"Pagbati ug reaksyon", body:`
<p>Para kini sa butang nga dili tinuod ug handurawan lang. Sa Bisaya: <i>kon ... pa, ... unta</i>.</p>
<h3>Second conditional: sukwahi sa tinuod karon</h3>
<p><b>If + past form, would + base form</b>. Past form ang gamiton, pero karon ang kahulogan.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Kon naa pa koy panahon, mobiyahe unta ko}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Kon ako pa nimo, dawaton nako kana}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Kon ikaw pa, unsay imong buhaton?}}
<h3>Third conditional: sukwahi sa nahitabo na</h3>
<p><b>If + had + past participle, would have + past participle</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Kon nagtuon pa ko, nakapasar unta ko}}
<h3>Pagmahay: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Nitawag unta ko}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Maayo unta kon mas daghan koy panahon}}
<div class="tbl"><table><tr><th>Klase</th><th>Bahin sa "if"</th><th>Bahin sa resulta</th></tr><tr><td>first (pwede mahitabo)</td><td class="k">simple present tense</td><td class="k">will</td></tr><tr><td>second (sukwahi sa karon)</td><td class="k">past form</td><td class="k">would</td></tr><tr><td>third (sukwahi sa nangagi)</td><td class="k">had + past participle</td><td class="k">would have + past participle</td></tr></table></div>
<div class="tip">Ang <b>If I were you</b> usa ka pirmi nga porma. Bisan "I" ang subject, <b>were</b> ang gamiton, dili "was".</div>`,
check:[["If I ___ rich, I would travel. Unsay sakto sa blangko?",["am","were","will be","would be"],1,"Kon sukwahi sa tinuod karon, past form (\"were\") ang gamiton."],["If I had studied, I ___ passed. Unsay sakto sa blangko?",["would","will have","would have","had"],2,"Kon sukwahi sa nangagi, \"would have\" + past participle."],["'Nitawag unta ko' (pagmahay) sa Iningles?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Ang pagmahay: \"should have\" + past participle."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Kon sukwahi sa tinuod karon, past form ang gamiton sa bahin sa \"if\"."],
["mc","'Kon ako pa nimo, paliton nako kana' sa Iningles?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","Ang \"If I were you, I'd ...\" usa ka pirmi nga porma."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Kon sukwahi sa nangagi, \"would have\" + past participle."],
["mc","'Nitawag unta ko' (pagmahay) sa Iningles?","I should have called.","I should called.","I should had call.","I must called.","Ang pagmahay: \"should have\" + past participle."],
["mc","'Kon ikaw pa, unsay imong buhaton?' sa Iningles?","What would you do?","What will you did?","What would you did?","What you would do?","Ang handurawan: \"would\" + base form."],
["or","Kon naa pa koy panahon, mobiyahe unta ko","If I had time I'd travel","have will","Kon sukwahi sa tinuod karon, past form nga \"had\" ug \"would\" ang gamiton."],
["or","Kon ako pa, mosakay ko og taxi","I'd take a taxi","the taxis","Bisan unsang usa ka taxi, mao nga article \"a\"."],
["or","Nipalit unta ko og tiket","I should have bought a ticket","the buy","Usa ra ka tiket, mao nga article \"a\"."],
["fi","If I __ you, I'd go.","Kon ako pa nimo, moadto ko","were|was","am|be|would be","Ang \"If I were you\" usa ka pirmi nga porma."],
["fi","I would __ helped.","Nitabang unta ko","have","had|has|having","\"would have\" + past participle."],
["fi","I wish I __ more time.","Maayo unta kon mas daghan koy panahon","had","have|would have|will have","Human sa \"I wish\", past form ang gamiton."],
["ty","Kon ako pa nimo, moadto ko","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","Ang porma kay \"If I were you, I'd ...\"."],
["ty","Maayo unta kon naa koy awto (gamita ang \"I wish\")","I wish I had a car","I wish · had · car — kinahanglan ang article","the","Bisan unsang usa ka awto, mao nga article \"a\"."],
["ty","Nisakay unta ko og taxi (pagmahay)","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — kinahanglan ang article","the","Bisan unsang usa ka taxi, mao nga article \"a\"."]]},
{ id:"passive", title:"Passive voice: be verb + past participle", blurb:"Kon mas importante ang nahitabo kaysa kon kinsay nagbuhat.", deck:"Trabaho ug email", body:`
<p>Sa Bisaya, ordinaryo kaayo ang verb nga naay <i>gi-</i>: <i>Gikawat ang akong cellphone</i>. Sa Iningles, ang passive voice nagkinahanglan og duha ka bahin: <b>be verb + past participle</b>, ug ang be verb ang magdala sa tense. Gamiton kini kon wala ta kahibalo o dili importante kon kinsay nagbuhat.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Gikawat ang akong cellphone}}{{ex:This was made in the Philippines.|/ˈðɪs wəz ˈmeɪd ɪn ðə ˈfɪlɪpiːnz/|Gihimo kini sa Pilipinas}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Gikanselar ang miting}}
<h3>Karon: butang nga kanunay mahitabo</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Iningles ang sinultihan dinhi}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Ang pamahaw isilbi sa alas siyete}}
<h3>Kinsay nagbuhat: by</h3>
{{ex:It was written by Jose Rizal.|/ɪt wəz ˈrɪtn baɪ hoʊˈzeɪ rɪˈzɑːl/|Gisulat kini ni Jose Rizal}}
<h3>Active voice ug passive voice</h3>
<div class="tbl"><table><tr><th>active voice</th><th>passive voice</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">Kasagarang sayop: malimtan ang be verb, o "get" + base form ang gamiton. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ <b>They get bully.</b> ✗ → <b>They are bullied.</b> ✓ Sa kaswal nga panag-istorya, mas natural ang active voice kon nahibaloan kon kinsay nagbuhat.</div>`,
check:[["My bag ___ stolen yesterday. Unsay sakto sa blangko?",["is","was","did","has"],1,"Gahapon kini nahitabo, mao nga \"was\" + past participle."],["This phone ___ made in Korea. Unsay sakto sa blangko?",["was","did","has","does"],0,"Ang passive voice: be verb + past participle."],["'Gikanselar ang miting' sa Iningles?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be verb + past participle nga \"canceled\"."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Ang passive voice: be verb + past participle."],
["mc","'Gihimo kini sa Korea' sa Iningles?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be verb + past participle nga \"made\"."],
["mc","'Iningles ang sinultihan dinhi' (passive voice) sa Iningles?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Sa butang nga kanunay mahitabo, \"is\" + past participle."],
["mc","'Gikanselar ang miting' sa Iningles?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be verb + past participle."],
["mc","'Ang pamahaw isilbi sa alas siyete' sa Iningles?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Walay article ang ngalan sa kaon (\"breakfast\"), ug \"is\" + past participle."],
["or","Gikawat ang akong bag","My bag was stolen","stole","Human sa be verb, past participle nga \"stolen\" ang sunod."],
["or","Gikanselar ang miting","The meeting was canceled","A meetings","Article \"the\" kay nahibaloan na kon unsang miting."],
["or","Nabuak ang bintana","The window was broken","a windows","Ang bintana nga ania dinhi, mao nga article \"the\"."],
["fi","This was __ in Korea.","Gihimo kini sa Korea","made","make|making|makes","Human sa be verb, past participle ang sunod."],
["fi","The room __ cleaned every day.","Limpyohan ang kuwarto kada adlaw","is|gets","does|has|did","Sa butang nga kanunay mahitabo, \"is\" + past participle."],
["fi","It was written __ Han Kang.","Gisulat kini ni Han Kang","by","from|of|with","Kon kinsay nagbuhat, \"by\" ang gamiton."],
["ty","Gikawat ang akong cellphone","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be verb + past participle nga \"stolen\"."],
["ty","Gikanselar ang miting","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — kinahanglan ang article","a","Article \"the\" kay nahibaloan na kon unsang miting."],
["ty","Gitrangkahan ang pultahan niadtong orasa","The door was locked","the door · was · locked — kinahanglan ang article","a","Ang pultahan nga ania dinhi, mao nga article \"the\"."]]},
{ id:"reported", title:"Reported speech: pagbalita sa giingon sa uban", blurb:"She said she was tired. Iatras ang tense og usa ka lakang; human sa \"tell\", ang tawo nga gisultihan.", deck:"Tawag, text ug chat", body:`
<p>Para kini sa pagbalita sa giingon sa laing tawo. Sa Bisaya, <i>kuno</i> o <i>niingon siya nga ...</i> ra, ug dili mausab ang verb. Sa Iningles, ang tense sa gibalita <b>iatras og usa ka lakang ngadto sa past</b>.</p>
<div class="tbl"><table><tr><th>direct speech</th><th>reported speech</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Niingon siya (babaye) nga gikapoy siya}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Niingon siya (lalaki) nga moanhi siya}}
<h3>say ug tell</h3>
<p>Human sa <b>tell</b>, kinahanglan naa ang tawo nga gisultihan. Human sa <b>say</b>, wala.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Giingnan ko niya (lalaki) nga puliki siya}}
<h3>Pagbalita sa pangutana</h3>
<p>Sa pangutana nga oo / dili ang tubag, <b>if</b> ang gamiton. Sa pangutana nga naay question word, ipabilin ang question word. Ang sunod mosunod sa <b>han-ay sa statement</b> (subject + verb).</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Nangutana siya (babaye) kon okey ra ba ko}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Nangutana siya (lalaki) kon asa ko nagpuyo}}
<div class="tip">Kasagarang sayop: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓ Ug bantayi ang <i>siya</i>: kon babaye, <b>she</b>; kon lalaki, <b>he</b>.</div>`,
check:[["She said she ___ tired. Unsay sakto sa blangko?",["is being","was","be","will"],1,"Ang gibalita iatras ngadto sa past."],["He ___ me he would come. Unsay sakto sa blangko?",["said","say","told","tell to"],2,"Kon naay tawo nga gisultihan (\"me\"), \"told\" ang gamiton."],["'Nangutana siya (lalaki) kon asa ko nagpuyo' sa Iningles?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Ang gibalita nga pangutana mosunod sa han-ay sa statement."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","Ang gibalita iatras ngadto sa past."],
["mc","He ___ me he was late.","told","said","say","tells to","Kon naay tawo nga gisultihan, \"told\" ang gamiton."],
["mc","'Niingon siya (lalaki) nga moanhi siya' sa Iningles?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","Ang \"will\" mahimong \"would\"."],
["mc","'Nangutana siya (babaye) kon okey ra ba ko' sa Iningles?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Ang pangutana nga oo / dili ang tubag ibalita gamit ang \"if\"."],
["mc","'Nangutana siya (lalaki) kon asa ko nagpuyo' sa Iningles?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Ang gibalita nga pangutana mosunod sa han-ay sa statement."],
["or","Niingon siya (babaye) nga gikapoy siya","She said she was tired","told","Kon walay tawo nga gisultihan, \"said\" ang gamiton."],
["or","Niingon siya (lalaki) nga nipalit siya og usa ka awto","He said he bought a car","the cars","Usa ka awto nga karon pa nahisgotan, mao nga article \"a\"."],
["or","Niingon siya (babaye) nga ganahan siya sa maong libro","She said she liked the book","a books","Article \"the\" kay nahibaloan na kon unsang libro."],
["fi","She __ she was tired.","Niingon siya (babaye) nga gikapoy siya","said","told|asked|say","Kon walay tawo nga gisultihan, \"said\" ang gamiton."],
["fi","He told __ he was busy.","Giingnan ko niya (lalaki) nga puliki siya","me","I|my|to","Human sa \"told\", ang tawo nga gisultihan ang sunod."],
["fi","She asked __ I was okay.","Nangutana siya (babaye) kon okey ra ba ko","if|whether","that|what|did","Ang pangutana nga oo / dili ang tubag ibalita gamit ang \"if\"."],
["ty","Niingon siya (lalaki) nga puliki siya","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","Ang gibalita iatras ngadto sa past."],
["ty","Niingon siya (babaye) nga naa siyay awto","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — kinahanglan ang article","the","Usa ka awto nga karon pa nahisgotan, mao nga article \"a\"."],
["ty","Niingon siya (lalaki) nga nakatan-aw siya sa maong salida","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — kinahanglan ang article","a","Article \"the\" kay nahibaloan na kon unsang salida."]]},
];
