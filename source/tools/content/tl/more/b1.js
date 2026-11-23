/* tl-en stage B1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2: for at since, hanggang ngayon", blurb:"Nagsimula noon at tuloy pa ngayon. \"For\" + tagal, \"since\" + simula.", deck:"Pagpapakilala", body:`
<p>Ikalawang gamit ito ng present perfect: <b>nagsimula sa nakaraan at tuloy pa hanggang ngayon</b>. Sa Tagalog, anyong ginagawa na may <i>na</i> ang gamit dito: <i>Limang taon na akong nakatira sa Maynila</i>. Dahil "ginagawa" ang anyo, nakakatuksong gumamit ng present tense sa Ingles. Present perfect ang kailangan.</p>
{{ex:I've lived in Manila for five years.|/aɪv ˈlɪvd ɪn məˈnɪlə fər ˈfaɪv ˈjɪrz/|Limang taon na akong nakatira sa Maynila}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Dito na ako nagtatrabaho mula pa noong 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Matagal ko na siyang kilala (babae)}}
<h3>for at since</h3>
<div class="tbl"><table><tr><th>for + tagal</th><th>since + simula (mula noong)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long ...?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Gaano ka na katagal dito?}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|Gaano ka na katagal nag-aaral ng Ingles?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Katatapos ko lang}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Napanood ko na iyon}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Kumain ka na ba?}}
<p>May anyo rin itong may -ing: <b>I've been working here for five years.</b> (<i>Limang taon na akong nagtatrabaho rito.</i>) Halos pareho ang kahulugan nito sa <b>I've worked here for five years.</b></p>
<div class="tip">Madalas makalusot: present tense o present continuous ang ginagamit. <b>I live here for five years.</b> ✗ <b>I am living here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Ano ang dapat ilagay sa patlang?",["since","for","during","from"],1,"\"For\" ang kasama ng tagal."],["I've worked here ___ 2020. Ano ang dapat ilagay sa patlang?",["for","in","since","at"],2,"\"Since\" ang kasama ng simula."],["'Gaano ka na katagal dito?' sa Ingles?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"Sa tanong tungkol sa tagal hanggang ngayon, \"How long have you\" + past participle ang gamit."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","\"For\" ang kasama ng tagal."],
["mc","She's lived here ___ 2019.","since","for","in","at","\"Since\" ang kasama ng simula (\"mula noong\")."],
["mc","'Gaano ka na katagal dito?' sa Ingles?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Sa tanong tungkol sa tagal hanggang ngayon, \"How long have you\" + past participle ang gamit."],
["mc","'Katatapos ko lang' sa Ingles?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","Ang \"katatapos lang\" ay \"have\" + \"just\" + past participle."],
["mc","'Kumain ka na ba?' sa Ingles?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Sa tanong, \"yet\" ang katumbas ng \"na\"."],
["or","Limang taon na akong nakatira dito","I've lived here for five years","year since","Lima, kaya plural na \"years\". \"For\" ang kasama ng tagal."],
["or","Napanood ko na ang pelikula","I've already seen the movie","a saw","Alam ninyong dalawa kung aling pelikula, kaya article na \"the\"."],
["or","Gaano ka na katagal naghihintay?","How long have you waited","did","Sa tanong tungkol sa tagal hanggang ngayon, \"How long have you\" + past participle ang gamit."],
["fi","I've worked here __ two years.","Dalawang taon na akong nagtatrabaho rito","for","since|from|during","\"For\" ang kasama ng tagal."],
["fi","I've been here __ Monday.","Nandito na ako mula pa noong Lunes","since","for|at|during","\"Since\" ang kasama ng simula."],
["fi","Have you finished __?","Tapos ka na ba?","yet|already","ever|never|since","Sa tanong, \"yet\" ang katumbas ng \"na\"."],
["ty","Tatlong taon na akong nakatira dito","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — plural ang kailangan","year","Tatlo, kaya plural na \"years\". Sa Tagalog, walang \"mga\" pagkatapos ng bilang; sa Ingles, kailangan pa rin ng -s."],
["ty","Gaano ka na katagal dito?","How long have you been here","how long · have you · been here","are","Sa tanong tungkol sa tagal hanggang ngayon, \"How long have you\" + past participle ang gamit."],
["ty","Nabasa ko na ang libro","I've already read the book|I've read the book already|I already read the book","already · read · book — kailangan ng article","a","Alam ninyong dalawa kung aling libro, kaya article na \"the\"."]]},
{ id:"narrative", title:"Mga tense sa pagkukuwento: past, past continuous, past perfect", blurb:"Past continuous ang likuran, past tense ang pangyayari, \"had\" + past participle ang mas nauna pa.", deck:"Pelikula, serye at slang", body:`
<p>Kapag ikinukuwento mo ang nangyari, tatlong tense ang pinaghahalo, at may sariling papel ang bawat isa. Sa Tagalog, ang <i>na</i> at ang takbo ng kuwento ang nagsasabi kung alin ang nauna. Sa Ingles, ang verb ang nagsasabi.</p>
<div class="tbl"><table><tr><th>Tense</th><th>Papel</th><th>Halimbawa</th></tr><tr><td class="k">past continuous</td><td>likuran, ginagawa noon</td><td>I was walking home.</td></tr><tr><td class="k">past tense</td><td>pangyayari</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect</td><td>nangyari bago pa iyon</td><td>He had moved to Cebu.</td></tr></table></div>
<h3>Likuran + pangyayari</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Naglalakad ako pauwi nang makasalubong ko ang isang matagal ko nang kaibigan}}
<h3>Past perfect: had + past participle</h3>
<p>Para ito sa nangyari <b>bago pa</b> ang isang sandali sa nakaraan.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Pagdating ko, nagsimula na ang pelikula}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Hindi pa ako nakakakita ng niyebe noon}}
<h3>Mga salitang nagpapakita ng pagkakasunod</h3>
<p>Gamitin ang first (una), then (pagkatapos), after that (pagkatapos niyon) at finally (sa wakas).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Kumain muna kami ng hapunan. Pagkatapos, nanood kami ng pelikula}}
<div class="tip">Magkahawig ang bigkas ng then (pagkatapos) at than (kaysa), pero magkaibang salita ang dalawa. Sa kuwento, <b>then</b>. At kapag nakaraan ang kuwento, nakaraan ang bawat verb hanggang dulo: <b>I was walking home and I see a friend.</b> ✗ → <b>… and I saw a friend.</b> ✓</div>`,
check:[["When I arrived, the train ___ already left. Ano ang dapat ilagay sa patlang?",["has","was","had","did"],2,"\"Had\" + past participle ang gamit sa mas naunang pangyayari."],["I ___ walking home when it started to rain. Ano ang dapat ilagay sa patlang?",["was","had","did","have"],0,"Past continuous ang likuran (ang ginagawa noon)."],["Aling pangungusap ang nagsasabi ng nangyari bago pa ang isang sandali sa nakaraan?",["I was eating.","I ate.","I eat.","I had eaten."],3,"Past perfect ang \"had\" + past participle."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","\"Had\" + past participle ang gamit sa mas naunang pangyayari."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Past continuous ang ginagawa noon."],
["mc","'Pagdating ko, nakaalis na ang tren' sa Ingles?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","\"Had\" + past participle ang gamit sa mas naunang pangyayari."],
["mc","Sa pagkukuwento, ano ang Ingles ng 'pagkatapos'?","then","than","that","them","Ang \"then\" ay \"pagkatapos\"; ang \"than\" ay \"kaysa\"."],
["mc","'Hindi pa ako nakakakita ng niyebe noon' sa Ingles?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","Bago pa ang sandaling iyon sa nakaraan, kaya \"had\" + \"never\" + past participle."],
["or","Nakaalis na ang tren noon","The train had already left","a has","Ang tren na sasakyan mo sana ang tinutukoy, kaya article na \"the\"."],
["or","Nakasalubong ko ang isang matagal ko nang kaibigan","I met an old friend","a friends","Tunog na vowel ang simula ng \"old\", kaya article na \"an\"."],
["or","Naglalakad ako pauwi noon","I was walking home","had","Past continuous ang likuran ng kuwento."],
["fi","I was sleeping __ you called.","Natutulog ako nang tumawag ka","when","than|so|had","\"When\" ang katumbas ng \"nang\" dito."],
["fi","The bus had already __.","Nakaalis na ang bus noon","left|gone","leave|leaving|leaves","Past participle ang kasunod ng \"had\"."],
["fi","First we ate. __ we watched a movie.","Kumain muna kami. Pagkatapos, nanood kami ng pelikula","Then|After that|Next","Than|Because|When","\"Then\" ang katumbas ng \"pagkatapos\"."],
["ty","Nagsimula na ang pelikula noon","The movie had already started|The movie had started already|The movie already started|The movie had already started by then|The movie had already started then","the movie · had · already · started — kailangan ng article","a","Ang pelikulang panonoorin sana ang tinutukoy, kaya article na \"the\"."],
["ty","Nakasalubong ko ang isang matagal ko nang kaibigan","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — ingat sa article","a","Tunog na vowel ang simula ng \"old\", kaya article na \"an\"."],
["ty","Naglalakad ako pauwi noon","I was walking home|I was walking home then|I was walking home at that time","was · walking · home","had","Past continuous ang gamit sa likuran ng kuwento."]]},
{ id:"conditionals", title:"Second at third conditional: kung sana", blurb:"\"Would\" kapag kabaligtaran ng totoo ngayon. \"Would have\" kapag panghihinayang sa nakaraan.", deck:"Damdamin at reaksyon", body:`
<p>Para ito sa mga bagay na hindi totoo at iniisip lang. Sa Tagalog, <i>kung</i> at <i>sana</i> ang gamit: <i>Kung may oras ako, magbibiyahe sana ako</i>. Walang salitang katumbas ng <i>sana</i> dito sa Ingles. Ang <b>anyo ng verb</b> ang nagsasabing hindi ito totoo.</p>
<h3>Second conditional: kabaligtaran ng totoo ngayon</h3>
<p><b>If + past tense, would + base form.</b> Past tense ang anyo, pero ngayon ang kahulugan.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Kung may oras ako, magbibiyahe sana ako}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Kung ako sa iyo, tatanggapin ko iyon}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Ano ang gagawin mo kung ikaw?}}
<h3>Third conditional: kabaligtaran ng nangyari</h3>
<p><b>If + had + past participle, would have + past participle.</b></p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Kung nag-aral sana ako, pumasa sana ako}}
<h3>Panghihinayang: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Dapat sana tumawag ako}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Sana mas marami akong oras}}
<div class="tbl"><table><tr><th>Uri</th><th>Bahaging may if</th><th>Resulta</th></tr><tr><td>first (puwedeng mangyari)</td><td class="k">present tense</td><td class="k">will</td></tr><tr><td>second (kabaligtaran ng ngayon)</td><td class="k">past tense</td><td class="k">would</td></tr><tr><td>third (kabaligtaran ng nakaraan)</td><td class="k">had + past participle</td><td class="k">would have + past participle</td></tr></table></div>
<div class="tip">Nakapirming anyo ang <b>If I were you</b>. <b>Were</b> ang karaniwang gamit kahit "I" ang subject; maririnig din ang "was" sa usapan.</div>`,
check:[["If I ___ rich, I would travel. Ano ang dapat ilagay sa patlang?",["am","were","will be","would be"],1,"Kabaligtaran ng totoo ngayon, kaya past tense (\"were\")."],["If I had studied, I ___ passed. Ano ang dapat ilagay sa patlang?",["would","will have","would have","had"],2,"Kabaligtaran ng nangyari, kaya \"would have\" + past participle."],["'Dapat sana tumawag ako' sa Ingles?",["I should have called.","I should called.","I should had call.","I would call should."],0,"\"Should have\" + past participle ang gamit sa panghihinayang."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Kabaligtaran ng totoo ngayon, kaya past tense ang bahaging may \"if\"."],
["mc","'Kung ako sa iyo, bibilhin ko iyon' sa Ingles?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","Nakapirming anyo ang \"If I were you, I'd ...\"."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Kabaligtaran ng nangyari, kaya \"would have\" + past participle."],
["mc","'Dapat sana tumawag ako' sa Ingles?","I should have called.","I should called.","I should had call.","I must called.","\"Should have\" + past participle ang gamit sa panghihinayang."],
["mc","'Ano ang gagawin mo kung ikaw?' sa Ingles?","What would you do?","What will you did?","What would you did?","What you would do?","\"Would\" + base form ang gamit sa iniisip lang."],
["or","Kung may oras ako, magbibiyahe sana ako","If I had time I'd travel","have will","Kabaligtaran ng totoo ngayon, kaya past tense na \"had\" at \"would\"."],
["or","Kung ako, sasakay ako ng taksi","I'd take a taxi","the taxis","Kahit anong taksi, isa lang, kaya article na \"a\"."],
["or","Dapat sana bumili ako ng tiket","I should have bought a ticket","the buy","Isang tiket lang, kaya article na \"a\"."],
["fi","If I __ you, I'd go.","Kung ako sa iyo, pupunta ako","were|was","am|be|would be","Nakapirming anyo ang \"If I were you\"."],
["fi","I would __ helped.","Tumulong sana ako","have","had|has|having","Past participle ang kasunod ng \"would have\"."],
["fi","I wish I __ more time.","Sana mas marami akong oras","had","have|would have|will have","Past tense ang kasunod ng \"I wish\"."],
["ty","Kung ako sa iyo, pupunta ako","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","Nakapirming anyo: \"If I were you, I'd ...\"."],
["ty","Sana may kotse ako","I wish I had a car","I wish · had · car — kailangan ng article","the","Kahit anong kotse, isa lang, kaya article na \"a\"."],
["ty","Dapat sana sumakay ako ng taksi","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — kailangan ng article","the","Kahit anong taksi, isa lang, kaya article na \"a\"."]]},
{ id:"passive", title:"Passive: be + past participle", blurb:"Kapag mas mahalaga ang nangyari kaysa kung sino ang gumawa. Hindi ito kapareho ng \"kinain ko\".", deck:"Trabaho at email", body:`
<p>Ginagamit ang passive kapag hindi alam o hindi mahalaga kung sino ang gumawa. Ang anyo ay <b>be + past participle</b>, at ang "be" ang nagdadala ng tense.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Ninakaw ang cellphone ko}}{{ex:This was made in the Philippines.|/ˈðɪs wəz ˈmeɪd ɪn ðə ˈfɪlɪpiːnz/|Gawa ito sa Pilipinas}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Kinansela ang miting}}
<h3>Present: mga bagay na laging ganoon</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Ingles ang ginagamit dito}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Inihahain ang almusal tuwing alas-siyete}}
<h3>by: kung sino ang gumawa</h3>
{{ex:It was written by a Filipino author.|/ɪt wəz ˈrɪtn baɪ ə ˌfɪlɪˈpiːnoʊ ˈɔːθər/|Isang Pilipinong manunulat ang sumulat nito}}
<h3>Hindi passive ang kinain ko</h3>
<p>Sa Tagalog, karaniwan ang pangungusap na nakatuon sa bagay: <i>Kinain ko ang mangga</i>. Hindi ito ang passive ng Ingles. Kapag alam kung sino ang gumawa, active ang natural: <b>I ate the mango.</b> Tama sa grammar ang <b>The mango was eaten by me.</b>, pero kakaiba ito sa pandinig.</p>
{{ex:I ate the mango.|/aɪ ˈeɪt ðə ˈmæŋgoʊ/|Kinain ko ang mangga}}
<h3>Active at passive</h3>
<div class="tbl"><table><tr><th>Active</th><th>Passive</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">Madalas makalusot: nawawala ang "be". <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ <b>The house built in 1990.</b> ✗ → <b>The house was built in 1990.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Ano ang dapat ilagay sa patlang?",["is","was","did","has"],1,"Kahapon nangyari, kaya \"was\" + past participle."],["This shirt ___ made in the Philippines. Ano ang dapat ilagay sa patlang?",["was","did","has","does"],0,"Sa passive, \"be\" + past participle ang anyo."],["'Kinansela ang miting' sa Ingles?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"\"Be\" + past participle na \"canceled\"."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Sa passive, \"be\" + past participle ang anyo."],
["mc","'Gawa ito sa Pilipinas' sa Ingles?","This was made in the Philippines.","This made in the Philippines.","This was make in the Philippines.","This did made in the Philippines.","\"Be\" + past participle na \"made\"."],
["mc","'Ingles ang ginagamit dito' (passive) sa Ingles?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Laging ganoon, kaya \"is\" + past participle."],
["mc","'Kinansela ang miting' sa Ingles?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Sa passive, past participle ang kasunod ng \"be\"."],
["mc","'Inihahain ang almusal tuwing alas-siyete' sa Ingles?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Walang article ang \"breakfast\", \"lunch\" at \"dinner\"; \"is\" + past participle."],
["or","Ninakaw ang bag ko","My bag was stolen","stole","Past participle na \"stolen\" ang kasunod ng \"be\"."],
["or","Kinansela ang miting","The meeting was canceled","A meetings","Alam ninyong dalawa kung aling miting, kaya article na \"the\"."],
["or","Nabasag ang bintana","The window was broken","a windows","Ang bintanang nakikita ninyo ang tinutukoy, kaya article na \"the\"."],
["fi","This was __ in the Philippines.","Gawa ito sa Pilipinas","made","make|making|makes","Past participle ang kasunod ng \"be\"."],
["fi","The room __ cleaned every day.","Nililinis ang kuwarto araw-araw","is|gets","does|has|did","Laging ganoon, kaya \"is\" + past participle."],
["fi","It was written __ José Rizal.","Si José Rizal ang sumulat nito","by","from|of|with","\"By\" ang nagsasabi kung sino ang gumawa."],
["ty","Ninakaw ang cellphone ko (passive)","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","\"Be\" + past participle na \"stolen\"."],
["ty","Kinansela ang miting (passive)","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — kailangan ng article","a","Alam ninyong dalawa kung aling miting, kaya article na \"the\"."],
["ty","Nakakandado ang pinto noon","The door was locked|The door was locked then|The door was locked at that time","the door · was · locked — kailangan ng article","a","Ang pintong nasa harap mo ang tinutukoy, kaya article na \"the\"."]]},
{ id:"reported", title:"Reported speech: pagsasabi ng sinabi ng iba", blurb:"She said she was tired. Iatras ang tense, at tao ang kasunod ng \"tell\".", deck:"Tawag, text at mga daglat", body:`
<p>Ginagamit ito kapag ipinapasa mo ang sinabi ng iba. Sa Tagalog, sapat na ang <i>daw</i> o <i>raw</i>, o ang <i>sabi niya</i>, at hindi nagbabago ang verb: <i>Pagod daw siya</i>. Sa Ingles, kapag past tense ang "said", <b>iniaatras din ang tense</b> ng sinabi.</p>
<div class="tbl"><table><tr><th>Orihinal na sinabi</th><th>Kapag ipinasa</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Sabi ni Ana, pagod daw siya}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Sabi ni Paolo, darating daw siya}}
<h3>say at tell</h3>
<p>Laging may kausap pagkatapos ng <b>tell</b> (me, him, her). Wala namang kausap pagkatapos ng <b>say</b>.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Sinabi sa akin ni Paolo na abala siya}}
<h3>Kapag tanong ang ipinapasa</h3>
<p>Kapag oo o hindi ang sagot sa tanong, <b>if</b> ang gamit (parang <i>kung</i>). Kapag may question word, iyon din ang gamit. Sa dalawa, <b>ayos ng karaniwang pangungusap</b> ang kasunod (subject + verb), at walang "do" o "did".</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Tinanong ni Ana kung ayos lang ako}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Tinanong ni Paolo kung saan ako nakatira}}
<div class="tip">Madalas makalusot: <b>He said me …</b> ✗ → <b>He told me …</b> ✓, <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Ano ang dapat ilagay sa patlang?",["is being","was","be","will"],1,"Iniaatras sa past ang tense ng ipinapasang sinabi."],["He ___ me he would come. Ano ang dapat ilagay sa patlang?",["said","say","told","tell to"],2,"May kausap (\"me\"), kaya \"told\"."],["Tungkol kay Paolo: 'Tinanong niya kung saan ako nakatira' sa Ingles?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Ayos ng karaniwang pangungusap ang ipinapasang tanong."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","Iniaatras sa past ang tense ng ipinapasang sinabi."],
["mc","He ___ me he was late.","told","said","say","tells to","May kausap (\"me\"), kaya \"told\"."],
["mc","Tungkol kay Paolo: 'Sabi niya, darating daw siya' sa Ingles?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","Nagiging \"would\" ang \"will\"."],
["mc","Tungkol kay Ana: 'Tinanong niya kung ayos lang ako' sa Ingles?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","\"If\" ang gamit kapag oo o hindi ang sagot sa tanong."],
["mc","Tungkol kay Paolo: 'Tinanong niya kung saan ako nakatira' sa Ingles?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Ayos ng karaniwang pangungusap: \"where I lived\", walang \"did\"."],
["or","Tungkol kay Ana: Sabi niya, pagod daw siya","She said she was tired","told","Walang binanggit na kausap, kaya \"said\"."],
["or","Tungkol kay Paolo: Sabi niya, bumili raw siya ng kotse","He said he bought a car","the cars","Unang banggit sa isang kotse, kaya article na \"a\"."],
["or","Tungkol kay Ana: Sabi niya, nagustuhan daw niya ang libro","She said she liked the book","a books","Alam ninyong dalawa kung aling libro, kaya article na \"the\"."],
["fi","She __ she was tired.","Tungkol kay Ana: Sabi niya, pagod daw siya","said","told|asked|say","Walang binanggit na kausap, kaya \"said\"."],
["fi","He told __ he was busy.","Tungkol kay Paolo: Sinabi niya sa akin na abala siya","me","I|my|to","Laging may kausap pagkatapos ng \"told\"."],
["fi","She asked __ I was okay.","Tungkol kay Ana: Tinanong niya kung ayos lang ako","if|whether","that|what|did","\"If\" ang gamit kapag oo o hindi ang sagot sa tanong."],
["ty","Tungkol kay Paolo: Sabi niya, abala raw siya","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","Iniaatras sa past ang tense: \"was\". Lalaki si Paolo, kaya \"he\"."],
["ty","Tungkol kay Ana: Sabi niya, may kotse raw siya","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — kailangan ng article","the","Unang banggit sa isang kotse, kaya article na \"a\"."],
["ty","Tungkol kay Paolo: Sabi niya, napanood na raw niya ang pelikula","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — kailangan ng article","a","Alam ninyong dalawa kung aling pelikula, kaya article na \"the\"."]]},
];
