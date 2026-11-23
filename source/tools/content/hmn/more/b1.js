/* hmn-en stage B1 lessons (HMN-CONTENT-D), from ko-en's b1.js; English side as ko-en except the deviations in deviations.d.json.
   The Korean-only lesson articles-3 is not in hmn-en. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for thiab since (pib ntev lawm, tseem ua)", blurb:"Yam pib ua ntej thiab tseem ua tam sim no. for + ntev npaum li cas, since + thaum pib.", deck:"Kuv tus kheej", body:`
<p>Siv Present Perfect rau yam uas <b>pib ua ntej thiab tseem ua tam sim no</b>. Lus Hmoob hais <b>tau … lawm</b>: Kuv nyob St. Paul tau tsib xyoo lawm. Lus Askiv siv <b>have + past participle</b> thiab <b>for</b> los yog <b>since</b>.</p>
{{ex:I've lived in St. Paul for five years.|/aɪv lɪvd‿ɪn seɪnt pɑːl fɚ faɪv jɪrz/|Kuv nyob St. Paul tau tsib xyoo lawm.}}{{ex:I've worked here since 2020.|/aɪv wɝːkt hɪr sɪns ˈtwenti ˈtwenti/|Kuv pib ua hauj lwm ntawm no xyoo 2020, thiab tseem ua.}}{{ex:I've known her for a long time.|/aɪv noʊn hɝː fɚ ə lɑːŋ taɪm/|Kuv paub nws (poj niam) ntev lawm.}}
<h3>for thiab since</h3>
<div class="tbl"><table><tr><th>for + ntev npaum li cas</th><th>since + thaum pib</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|/haʊ lɑːŋ hæv ju bɪn hɪr/|Koj nyob ntawm no ntev npaum li cas lawm?}}{{ex:How long have you studied English?|/haʊ lɑːŋ hæv ju ˈstʌdid‿ˈɪŋglɪʃ/|Koj kawm lus Askiv ntev npaum li cas lawm?}}
<h3>just, already, yet</h3>
<p>just = nyuam qhuav. already = twb … lawm. yet: hauv lo lus nug (… lawm los tsis yog?).</p>
{{ex:I've just finished.|/aɪv dʒʌst ˈfɪnɪʃt/|Kuv nyuam qhuav ua tas.}}{{ex:I've already seen it.|/aɪv‿ɑːlˈredi siːn‿ɪt/|Kuv twb pom lawm.}}{{ex:Have you eaten yet?|/hæv ju ˈiːtən jet/|Koj noj mov lawm los tsis yog?}}
<p>Hauv lus Hmoob, <b>Koj noj mov lawm los tsis yog?</b> yog ib lo lus nyob zoo. Hauv lus Askiv, <b>Have you eaten yet?</b> yog ib lo lus nug tseeb: tus neeg xav paub.</p>
<div class="tip">Nco ntsoov: tsis txhob siv Simple Present. <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Lo lus twg raug?",["since","for","during","from"],1,"Ntev npaum li cas (three years): siv for."],["I've worked here ___ 2020. Lo lus twg raug?",["for","in","since","at"],2,"Thaum pib (2020): siv since."],["'Koj nyob ntawm no ntev npaum li cas lawm?' — lus Askiv twg raug?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"Siv How long have you + past participle."]],
practice:[
["mc","I've known him ___ ten years. Lo lus twg raug?","for","since","from","during","Ntev npaum li cas: siv for."],
["mc","She's lived here ___ 2019. Lo lus twg raug?","since","for","in","at","Thaum pib (2019): siv since."],
["mc","'Koj nyob ntawm no ntev npaum li cas lawm?' — lus Askiv twg raug?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Siv How long have you + past participle."],
["mc","'Kuv nyuam qhuav ua tas.' — lus Askiv twg raug?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","nyuam qhuav = just: siv have + just + past participle."],
["mc","'Koj noj mov lawm los tsis yog?' — lus Askiv twg raug?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Hauv lo lus nug, siv yet."],
["or","Kuv nyob ntawm no tau tsib xyoo lawm","I've lived here for five years","year since","Tsib xyoo = plural years; ntev npaum li cas: for."],
["or","Kuv twb saib zaj movie ntawd lawm","I've already seen the movie","a saw","Peb paub zaj movie twg: article the."],
["or","Koj tos ntev npaum li cas lawm?","How long have you waited","did","Siv How long have you + past participle."],
["fi","I've worked here __ two years.","Kuv ua hauj lwm ntawm no tau ob xyoo lawm.","for","since|from|during","Ntev npaum li cas: siv for."],
["fi","I've been here __ Monday.","Kuv tuaj txog hnub Monday, thiab tseem nyob ntawm no.","since","for|at|during","Thaum pib (Monday): siv since."],
["fi","Have you finished __?","Koj ua tas lawm los tsis yog?","yet|already","ever|never|since","Hauv lo lus nug, siv yet (los yog already)."],
["ty","Kuv nyob ntawm no tau peb xyoo lawm (Present Perfect)","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — siv plural","year","Peb xyoo = plural years."],
["ty","Koj nyob ntawm no ntev npaum li cas lawm? (use been)","How long have you been here","how long · have you · been here — siv been","are","Siv How long have you + past participle."],
["ty","Kuv twb nyeem phau ntawv lawm (the)","I've already read the book|I've read the book already|I already read the book","already · read · book — siv article the","a","Peb paub phau ntawv twg: article the."]]},
{ id:"narrative", title:"Piav ib zaj dab neeg: Simple Past, Past Continuous, Past Perfect", blurb:"Yam tab tom ua: Past Continuous. Yam koj ua: Simple Past. Yam ua ntej ntawd: had + past participle.", deck:"Movies, TV thiab slang", body:`
<p>Thaum piav ib zaj dab neeg, lus Hmoob siv cov lo lus <b>tab tom</b>, <b>twb … lawm</b> thiab cov lo lus qhia lub sij hawm. Lus Askiv siv peb tense. Txhua tense muaj nws txoj hauj lwm.</p>
<div class="tbl"><table><tr><th>tense</th><th>ua dab tsi?</th><th>piv txwv</th></tr><tr><td class="k">Past Continuous</td><td>yam tab tom ua thaum ntawd</td><td class="k">I was walking home.</td></tr><tr><td class="k">Simple Past</td><td>yam koj ua, yam muaj</td><td class="k">I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>yam ua ntej ntawd</td><td class="k">He had moved to Fresno.</td></tr></table></div>
<h3>Yam tab tom ua + yam muaj</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɑːkɪŋ hoʊm wen‿aɪ sɑː ən‿oʊld frend/|Kuv tab tom taug kev mus tsev, thiab kuv pom ib tug phooj ywg qub.}}
<h3>Past Perfect: had + past participle</h3>
<p>Yam ua <b>ua ntej</b> lwm yam hauv zaj dab neeg. Lus Hmoob hais <b>twb … lawm</b>.</p>
{{ex:When I arrived, the movie had already started.|/wen‿aɪ əˈraɪvd ðə ˈmuːvi hæd‿ɑːlˈredi ˈstɑːrtɪd/|Thaum kuv tuaj txog, zaj movie twb pib lawm.}}{{ex:I had never seen snow before.|/aɪ hæd ˈnevɚ siːn snoʊ bɪˈfɔːr/|Ua ntej ntawd kuv tsis tau pom daus.}}
<h3>first, then, after that, finally</h3>
<p>first (ua ntej), then (tom qab ntawd), after that (tom qab ntawd), finally (thaum kawg).</p>
{{ex:First we ate dinner. Then we watched a movie.|/fɝːst wi eɪt ˈdɪnɚ/ /ðen wi wɑːtʃt‿ə ˈmuːvi/|Ua ntej peb noj hmo. Tom qab ntawd peb saib ib zaj movie.}}
<div class="tip">then (tom qab ntawd) thiab than (tshaj) yog ob lo lus txawv. Hauv zaj dab neeg, siv <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Lo lus twg raug?",["has","was","had","did"],2,"Yam ua ntej: siv had + past participle."],["I ___ walking home when it started to rain. Lo lus twg raug?",["was","had","did","have"],0,"Yam tab tom ua: siv Past Continuous."],["Sentence twg yog yam ua ntej lwm yam?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + past participle = Past Perfect: yam ua ntej."]],
practice:[
["mc","When I got there, the movie ___ already started. Lo lus twg raug?","had","has","was","did","Yam ua ntej: siv had + past participle."],
["mc","I ___ cooking when the phone rang. Lo lus twg raug?","was","had","did","have","Yam tab tom ua: siv Past Continuous."],
["mc","'Thaum kuv tuaj txog, lub tsheb nqaj twb mus lawm.' — lus Askiv twg raug?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Yam ua ntej: siv had + past participle."],
["mc","Hauv zaj dab neeg, 'tom qab ntawd' — lo lus twg raug?","then","than","that","them","then = tom qab ntawd; than = tshaj."],
["mc","'Ua ntej ntawd kuv tsis tau pom daus.' — lus Askiv twg raug?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","Siv had + never + past participle."],
["or","Lub tsheb nqaj twb mus lawm (Past Perfect)","The train had already left","a has","Lub tsheb nqaj uas peb xav caij: article the."],
["or","Kuv ntsib ib tug phooj ywg qub","I met an old friend","a friends","old pib nrog vowel: siv article an."],
["or","Kuv tab tom taug kev mus tsev","I was walking home","had","Yam tab tom ua: siv Past Continuous."],
["fi","I was sleeping __ you called.","Thaum koj hu, kuv tab tom pw tsaug zog.","when","than|so|had","when = thaum: Thaum koj hu."],
["fi","The bus had already __.","Lub tsheb ntiav twb mus lawm.","left|gone","leave|leaving|leaves","Tom qab had, siv past participle."],
["fi","First we ate. __ we watched a movie.","Ua ntej peb noj mov. Tom qab ntawd peb saib ib zaj movie.","Then|After that|Next","Than|Because|When","Lus Hmoob tom qab ntawd = then."],
["ty","Zaj movie twb pib lawm (Past Perfect)","The movie had already started|The movie had started already|The movie already started|The film had already started|The film had started already","the movie · had · already · started — siv article the","a","Zaj movie uas peb xav saib: article the."],
["ty","Kuv ntsib ib tug phooj ywg qub (past tense)","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — siv article an","a","old pib nrog vowel: siv article an."],
["ty","Kuv tab tom taug kev mus tsev (Past Continuous)","I was walking home","was · walking · home — siv was","had","Yam tab tom ua: siv Past Continuous."]]},
{ id:"conditionals", title:"Conditional 2 thiab 3: yam tsis tseeb (would, would have)", blurb:"Tam sim no tsis tseeb: would. Yam dhau lawm tsis tseeb: would have.", deck:"Zoo siab thiab tu siab", body:`
<p>Siv thaum koj xav txog yam tsis tseeb. Lus Hmoob siv <b>yog</b> thiab <b>yuav</b>, thiab verb tsis hloov: Yog kuv muaj sij hawm, kuv yuav mus ncig. Lus Askiv hloov verb: <b>If I had time, I would travel.</b></p>
<h3>Conditional 2: tam sim no tsis tseeb</h3>
<p><b>If + Simple Past, would + verb</b>. Verb yog Simple Past, tab sis lub sij hawm yog tam sim no.</p>
{{ex:If I had time, I would travel.|/ɪf‿aɪ hæd taɪm aɪ wʊd ˈtrævəl/|Yog kuv muaj sij hawm, kuv yuav mus ncig.}}{{ex:If I were you, I'd take it.|/ɪf‿aɪ wɝː ju aɪd teɪk‿ɪt/|Yog kuv yog koj, kuv yuav coj.}}{{ex:What would you do?|/wʌt wʊd ju duː/|Koj yuav ua li cas?}}
<h3>Conditional 3: yam dhau lawm tsis tseeb</h3>
<p><b>If + had + past participle, would have + past participle</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf‿aɪ hæd ˈstʌdid aɪ wʊd hæv pæst/|Yog kuv tau kawm, kuv yuav xeem tau lawm.}}
<h3>should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃʊd hæv kɑːld/|Kuv yuav tsum tau hu.}}{{ex:I wish I had more time.|/aɪ wɪʃ‿aɪ hæd mɔːr taɪm/|Kuv xav muaj sij hawm ntau dua.}}
<div class="tbl"><table><tr><th></th><th>sab if</th><th>lwm sab</th></tr><tr><td>1 (yuav muaj tau)</td><td class="k">Simple Present</td><td class="k">will</td></tr><tr><td>2 (tam sim no tsis tseeb)</td><td class="k">Simple Past</td><td class="k">would</td></tr><tr><td>3 (yam dhau lawm tsis tseeb)</td><td class="k">had + past participle</td><td class="k">would have + past participle</td></tr></table></div>
<div class="tip">If I were you: tom qab I, siv <b>were</b>, tsis yog was.</div>`,
check:[["If I ___ rich, I would travel. Lo lus twg raug?",["am","were","will be","would be"],1,"Tam sim no tsis tseeb: siv Simple Past (were)."],["If I had studied, I ___ passed. Lo lus twg raug?",["would","will have","would have","had"],2,"Yam dhau lawm tsis tseeb: siv would have + past participle."],["'Kuv yuav tsum tau hu.' (tab sis kuv tsis hu) — lus Askiv twg raug?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Siv should have + past participle."]],
practice:[
["mc","If I ___ time, I would help. Lo lus twg raug?","had","have","will have","would have","Tam sim no tsis tseeb: sab if siv Simple Past."],
["mc","'Yog kuv yog koj, kuv yuav yuav.' — lus Askiv twg raug?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","Siv If I were you, I'd + verb."],
["mc","If I had known, I ___ come. Lo lus twg raug?","would have","would","will have","had","Yam dhau lawm tsis tseeb: siv would have + past participle."],
["mc","'Kuv yuav tsum tau hu.' — lus Askiv twg raug?","I should have called.","I should called.","I should had call.","I must called.","Siv should have + past participle."],
["mc","'Koj yuav ua li cas?' (yog koj yog kuv) — lus Askiv twg raug?","What would you do?","What will you did?","What would you did?","What you would do?","Siv would + verb tsis hloov."],
["or","Yog kuv muaj sij hawm, kuv yuav mus ncig","If I had time I'd travel","have will","Tam sim no tsis tseeb: siv had thiab would."],
["or","Yog kuv yog koj, kuv yuav caij ib lub tsheb taxi","I'd take a taxi","the taxis","Ib lub tsheb taxi = a taxi: article a."],
["or","Kuv yuav tsum tau yuav ib daim ticket (use should have)","I should have bought a ticket","the buy","Ib daim ticket = a ticket: article a."],
["fi","If I __ you, I'd go.","Yog kuv yog koj, kuv yuav mus.","were|was","am|be|would be","Siv If I were you (los yog was)."],
["fi","I would __ helped.","Kuv yuav tau pab (yam dhau lawm).","have","had|has|having","Siv would have + past participle."],
["fi","I wish I __ more time.","Kuv xav muaj sij hawm ntau dua.","had","have|would have|will have","Tom qab I wish, siv Simple Past."],
["ty","Yog kuv yog koj, kuv yuav mus","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go — siv were","am","Siv If I were you, I'd + verb."],
["ty","Kuv xav muaj ib lub tsheb (use I wish + past tense)","I wish I had a car","I wish · had · car — siv article a","the","Ib lub tsheb = a car: article a."],
["ty","Kuv yuav tsum tau caij ib lub tsheb taxi (use should have)","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — siv article a","the","Ib lub tsheb taxi = a taxi: article a."]]},
{ id:"passive", title:"Passive: be + past participle (raug thiab lus Askiv)", blurb:"Siv passive thaum koj tsis paub, los yog tsis xav hais, leej twg ua.", deck:"Hauj lwm thiab email", body:`
<p>Lus Hmoob siv <b>raug</b> rau yam phem: <b>raug ntes</b>, <b>raug nyiag</b>. Lus Askiv passive siv tau rau yam zoo los yog yam phem: <b>be + past participle</b>. Siv nws thaum koj tsis paub leej twg ua, los yog koj tsis xav hais.</p>
{{ex:My phone was stolen.|/maɪ foʊn wəz ˈstoʊlən/|Kuv lub xov tooj raug nyiag lawm.}}{{ex:This was made in Thailand.|/ðɪs wəz meɪd‿ɪn ˈtaɪlænd/|Qhov no lawv ua hauv Thaib teb.}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsəld/|Lawv tsis muaj meeting ntawd lawm.}}
<p>Hauv lus Hmoob, ob kab kawg tsis siv raug. Hauv lus Askiv, siv passive tau.</p>
<h3>is / are + past participle: txhua hnub</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ‿ɪz ˈspoʊkən hɪr/|Ntawm no lawv hais lus Askiv.}}{{ex:Breakfast is served at seven.|/ˈbrekfəst‿ɪz sɝːvd‿ət ˈsevən/|Noj tshais thaum 7 sawv ntxov.}}
<h3>Leej twg ua: by</h3>
{{ex:It was written by my teacher.|/ɪt wəz ˈrɪtən baɪ maɪ ˈtiːtʃɚ/|Kuv tus xib fwb sau.}}
<div class="tbl"><table><tr><th>leej twg ua</th><th>passive</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">Nco ntsoov: yuav tsum muaj be. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Lo lus twg raug?",["is","was","did","has"],1,"Nag hmo: siv was + past participle."],["This phone ___ made in Thailand. Lo lus twg raug?",["was","did","has","does"],0,"Passive = be + past participle: siv was."],["'Lawv tsis muaj meeting ntawd lawm.' (canceled) — lus Askiv twg raug?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Siv be + past participle canceled."]],
practice:[
["mc","My phone ___ stolen. Lo lus twg raug?","was","did","has","is steal","Passive = be + past participle: siv was."],
["mc","'Qhov no lawv ua hauv Thaib teb.' — lus Askiv twg raug?","This was made in Thailand.","This made in Thailand.","This was make in Thailand.","This did made in Thailand.","Siv be + past participle made."],
["mc","'Ntawm no lawv hais lus Askiv.' (passive) — lus Askiv twg raug?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Txhua hnub: siv is + past participle."],
["mc","'Lawv tsis muaj meeting ntawd lawm.' (canceled) — lus Askiv twg raug?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Siv be + past participle."],
["mc","'Noj tshais thaum 7 sawv ntxov.' (passive) — lus Askiv twg raug?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Breakfast tsis muaj article; siv is + past participle."],
["or","Kuv lub hnab raug nyiag lawm","My bag was stolen","stole","Tom qab be, siv past participle stolen."],
["or","Lawv tsis muaj meeting ntawd lawm (passive)","The meeting was canceled","A meetings","Peb paub meeting twg: article the."],
["or","Qhov rais dam lawm (passive)","The window was broken","a windows","Qhov rais nyob ntawm no: article the."],
["fi","This was __ in Thailand.","Qhov no lawv ua hauv Thaib teb.","made","make|making|makes","Tom qab be, siv past participle."],
["fi","The room __ cleaned every day.","Lawv tu chav pw txhua hnub.","is|gets","does|has|did","Txhua hnub: siv is + past participle (los yog gets)."],
["fi","It was written __ Kao Kalia Yang.","Kao Kalia Yang sau.","by","from|of|with","Leej twg ua: siv by."],
["ty","Kuv lub xov tooj raug nyiag lawm (past tense)","My phone was stolen|My phone got stolen","my phone · was · stolen — siv be","stole","Siv be + past participle stolen."],
["ty","Lawv tsis muaj meeting lawm (the; canceled; passive, past tense)","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — siv article the","a","Peb paub meeting twg: article the."],
["ty","Lawv xauv qhov rooj lawm (the; passive, past tense)","The door was locked","the door · was · locked — siv article the","a","Peb paub qhov rooj twg: article the."]]},
{ id:"reported", title:"said, told: hais tias … (tense hloov)", blurb:"She said she was tired. Tense hloov mus rau past; tom qab tell muaj tus neeg mloog.", deck:"Xov tooj thiab lus luv", body:`
<p>Lus Hmoob siv <b>hais tias</b>, thiab verb tsis hloov: Nws hais tias nws nkees. Lus Askiv hloov tense mus rau past: "I'm tired." → <b>She said she was tired.</b></p>
<div class="tbl"><table><tr><th>nws hais</th><th>koj qhia dua</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi sed ʃi wəz ˈtaɪɚd/|Nws (poj niam) hais tias nws nkees.}}{{ex:He said he would come.|/hi sed hi wʊd kʌm/|Nws (txiv neej) hais tias nws yuav tuaj.}}
<h3>say thiab tell</h3>
<p>Tom qab <b>tell</b>, yuav tsum muaj tus neeg mloog (me, him, her). Tom qab <b>say</b>, tsis muaj.</p>
{{ex:He told me he was busy.|/hi toʊld mi hi wəz ˈbɪzi/|Nws (txiv neej) qhia kuv tias nws tsis khoom.}}
<h3>Lo lus nug</h3>
<p>Lo lus nug yes / no: siv <b>if</b>. Lo lus nug nrog where, what: siv where, what. Tom qab ntawd, subject nyob ua ntej verb.</p>
{{ex:She asked if I was okay.|/ʃi æskt‿ɪf‿aɪ wəz‿oʊˈkeɪ/|Nws (poj niam) nug tias kuv puas nyob zoo.}}{{ex:He asked where I lived.|/hi æskt wer aɪ lɪvd/|Nws (txiv neej) nug tias kuv nyob qhov twg.}}
<div class="tip">Nco ntsoov: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ / <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Lo lus twg raug?",["is being","was","be","will"],1,"Thaum koj qhia dua, tense hloov mus rau past."],["He ___ me he would come. Lo lus twg raug?",["said","say","told","tell to"],2,"Muaj tus neeg mloog (me): siv told."],["'Nws (txiv neej) nug tias kuv nyob qhov twg.' — lus Askiv twg raug?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Subject nyob ua ntej verb: where I lived."]],
practice:[
["mc","She said she ___ busy. Lo lus twg raug?","was","is being","be","were being","Thaum koj qhia dua, tense hloov mus rau past."],
["mc","He ___ me he was late. Lo lus twg raug?","told","said","say","tells to","Muaj tus neeg mloog (me): siv told."],
["mc","'Nws (txiv neej) hais tias nws yuav tuaj.' — lus Askiv twg raug?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will hloov ua would."],
["mc","'Nws (poj niam) nug tias kuv puas nyob zoo.' — lus Askiv twg raug?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Lo lus nug yes / no: siv if."],
["mc","'Nws (txiv neej) nug tias kuv nyob qhov twg.' — lus Askiv twg raug?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Subject nyob ua ntej verb: where I lived."],
["or","Nws (poj niam) hais tias nws nkees","She said she was tired","told","Tsis muaj tus neeg mloog: siv said."],
["or","Nws (txiv neej) hais tias nws yuav ib lub tsheb lawm","He said he bought a car","the cars","Ib lub tsheb = a car: article a."],
["or","Nws (poj niam) hais tias nws nyiam phau ntawv ntawd","She said she liked the book","a books","Peb paub phau ntawv twg: article the."],
["fi","She __ she was tired.","Nws (poj niam) hais tias nws nkees.","said","told|asked|say","Tsis muaj tus neeg mloog: siv said."],
["fi","He told __ he was busy.","Nws (txiv neej) qhia kuv tias nws tsis khoom.","me","I|my|to","Tom qab told, muaj tus neeg mloog (me)."],
["fi","She asked __ I was okay.","Nws (poj niam) nug tias kuv puas nyob zoo.","if|whether","that|what|did","Lo lus nug yes / no: siv if (los yog whether)."],
["ty","Nws (txiv neej) hais tias nws tsis khoom (busy; past tense)","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy — siv was","is","Thaum koj qhia dua, tense hloov mus rau past."],
["ty","Nws (poj niam) hais tias nws muaj ib lub tsheb (past tense)","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — siv article a","the","Ib lub tsheb = a car: article a."],
["ty","Nws (txiv neej) hais tias nws saib zaj movie lawm (the; past tense)","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie|He said that he saw the movie|He said that he had seen the movie|He said he'd seen the movie|He told me he had seen the movie|He said he saw the film|He said he had seen the film","he said · saw · movie — siv article the","a","Peb paub zaj movie twg: article the."]]},
];
