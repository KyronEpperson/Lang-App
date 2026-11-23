/* hmn-en stage A2 lessons (HMN-CONTENT-D), from ko-en's a2.js; English side as ko-en except the deviations in deviations.d.json.
   he-she-it (hmn-only, profile hmn.md §8) is the last lesson here; profile.json lessonOrder places it after object-have. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past Continuous: was / were + -ing (tab tom … thaum ntawd)", blurb:"Thaum ntawd koj tab tom ua dab tsi? Siv was / were + -ing.", deck:"Zoo siab thiab tu siab", body:`
<p>Hauv lus Hmoob, <b>tab tom</b> tsis hloov: Kuv tab tom pw tsaug zog (tam sim no los yog nag hmo). Hauv lus Askiv, <b>be</b> hloov: tam sim no = <b>am / is / are</b> + -ing; thaum ntawd = <b>was / were</b> + -ing.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Thaum ntawd kuv tab tom pw tsaug zog.}}{{ex:We were watching TV.|/wi wɝː ˈwɑːtʃɪŋ tiː ˈviː/|Thaum ntawd peb tab tom saib TV.}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Thaum ntawd tab tom los nag.}}
<h3>was los yog were?</h3>
<p>kuv, nws (<b>I, he, she, it</b>) = <b>was</b>. koj, peb, lawv (<b>you, we, they</b>) = <b>were</b>.</p>
<h3>Lo lus nug</h3>
{{ex:What were you doing?|/wʌt wɝː ju ˈduːɪŋ/|Thaum ntawd koj tab tom ua dab tsi?}}{{ex:Were you working at nine?|/wɝː ju ˈwɝːkɪŋ‿ət naɪn/|Cuaj teev koj puas tab tom ua hauj lwm?}}
<h3>Nrog when</h3>
<p><b>Past Continuous</b> = yam koj tab tom ua. <b>Simple Past</b> = yam tuaj nruab nrab: <b>when you called</b>.</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju kɑːld/|Thaum koj hu, kuv tab tom npaj mov.}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɑːkɪŋ hoʊm wen‿ɪt ˈstɑːrtɪd tə reɪn/|Thaum kuv tab tom taug kev mus tsev, pib los nag.}}
<div class="tip">Nco ntsoov: <b>I cooked when you called.</b> txawv: koj hu tas, kuv mam li pib npaj mov. Yog koj tab tom npaj mov ua ntej, hais <b>I was cooking when you called.</b></div>`,
check:[["'Cuaj teev koj tab tom ua dab tsi?' — lus Askiv twg raug?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"you (koj) siv were, thiab verb + -ing."],["I was cooking ___ you called. Lo lus twg raug?",["when","so","or","than"],0,"when = thaum: Thaum koj hu."],["They ___ watching TV. Lo lus twg raug?",["was","did","were","are being"],2,"they (lawv) siv were."]],
practice:[
["mc","I ___ sleeping at ten. Lo lus twg raug?","was","were","did","am","I (kuv) siv was."],
["mc","'Thaum koj hu, kuv tab tom npaj mov.' — lus Askiv twg raug?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","Yam koj tab tom ua: was + -ing. Yam tuaj nruab nrab: Simple Past."],
["mc","'Thaum ntawd koj tab tom ua dab tsi?' — lus Askiv twg raug?","What were you doing?","What did you doing?","What was you doing?","What were you do?","you (koj) siv were, thiab verb + -ing."],
["mc","They ___ playing soccer. Lo lus twg raug?","were","was","did","are","they (lawv) siv were."],
["mc","'Thaum ntawd tab tom los nag.' — lus Askiv twg raug?","It was raining.","It were raining.","It was rain.","It rained was.","it siv was + -ing (raining)."],
["or","Thaum ntawd kuv tab tom nyeem ib phau ntawv","I was reading a book","read books","Ib phau ntawv = a book: article a thiab singular book."],
["or","Thaum ntawd cov me nyuam tab tom pw tsaug zog","The kids were sleeping","kid was","Cov me nyuam = plural kids, thiab siv were."],
["or","Thaum ntawd peb tab tom saib TV","We were watching TV","was","we (peb) siv were."],
["fi","I was __ dinner.","Thaum ntawd kuv tab tom npaj noj hmo.","cooking|making","cook|cooked|cooks","Tom qab was, siv verb + -ing."],
["fi","What __ you doing?","Thaum ntawd koj tab tom ua dab tsi?","were","was|did|does","you (koj) siv were."],
["fi","I was sleeping __ you called.","Thaum koj hu, kuv tab tom pw tsaug zog.","when","so|than|or","when = thaum: Thaum koj hu."],
["ty","Kuv tab tom ua hauj lwm (Past Continuous)","I was working","was · work — siv -ing","were","I (kuv) siv was + -ing."],
["ty","Kuv tab tom saib ib zaj movie (Past Continuous)","I was watching a movie","was · watching · movie — siv article a","the","Ib zaj movie = a movie: article a."],
["ty","Cov me nyuam tab tom ua si (Past Continuous)","The kids were playing|The children were playing","kids · were · playing — siv plural","kid","Cov me nyuam = plural kids, thiab siv were."]]},
{ id:"will", title:"will: Kuv yuav pab koj (I'll help you)", blurb:"Koj txiav tam sim no: will. Koj npaj ua ntej lawm: going to.", deck:"Sib tham", body:`
<p>Lus Hmoob siv <b>yuav</b> rau ob yam, thiab <b>mam li</b> rau yam ua tom qab. Lus Askiv muaj ob lo lus: <b>will</b> thiab <b>be going to</b>.</p>
<p><b>will</b> + verb tsis hloov. Thaum hais lus, siv <b>I'll, you'll, it'll</b>. Hais tsis: <b>won't</b>.</p>
<h3>Koj txiav tam sim no</h3>
{{ex:I'll have the pasta.|/aɪl hæv ðə ˈpɑːstə/|Kuv yuav noj pasta.}}{{ex:I'll get it.|/aɪl get‿ɪt/|Kuv yuav teb (lub xov tooj).}}
<h3>Koj hais tias koj yuav ua</h3>
{{ex:I'll help you.|/aɪl help ju/|Kuv yuav pab koj.}}{{ex:I'll call you later.|/aɪl kɑːl ju ˈleɪtɚ/|Kuv mam li hu koj.}}{{ex:I won't be late.|/aɪ woʊnt biː leɪt/|Kuv yuav tsis mus lig.}}
<h3>Koj xav tias yuav muaj</h3>
{{ex:It'll be fine.|/ˈɪtəl biː faɪn/|Yuav zoo os.}}{{ex:I think it will rain.|/aɪ θɪŋk‿ɪt wɪl reɪn/|Kuv xav tias yuav los nag.}}
<h3>will thiab be going to</h3>
<div class="tbl"><table><tr><th></th><th>thaum twg?</th><th>piv txwv</th></tr><tr><td class="k">will</td><td>koj txiav tam sim no; koj hais tias koj yuav ua</td><td class="k">I'll get the door.</td></tr><tr><td class="k">be going to</td><td>koj npaj ua ntej lawm</td><td class="k">I'm going to visit Thailand next month.</td></tr></table></div>
<div class="tip">Nco ntsoov: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ Tom qab will, verb tsis hloov.</div>`,
check:[["Lub xov tooj hu: 'Kuv yuav teb.' (koj txiav tam sim no) — lus Askiv twg raug?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Koj txiav tam sim no: will."],["I ___ be late. (Kuv yuav tsis mus lig.) Lo lus twg raug?",["won't","willn't","don't will","not will"],0,"will + tsis = won't."],["Sentence twg yog yam koj npaj ua ntej lawm?",["I'll get the door.","I will to visit Thailand.","I visit Thailand will.","I'm going to visit Thailand next month."],3,"Yam koj npaj ua ntej lawm: be going to."]],
practice:[
["mc","'Kuv yuav pab koj.' — lus Askiv twg raug?","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","Tom qab will, verb tsis hloov."],
["mc","Thaum mus noj mov, koj txiav tam sim no: 'Kuv yuav noj pasta.' — lus Askiv twg raug?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Koj txiav tam sim no: will."],
["mc","'Kuv yuav tsis mus lig.' — lus Askiv twg raug?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will + tsis = won't."],
["mc","'Koj puas yuav tuaj?' — lus Askiv twg raug?","Will you come?","Do you will come?","Will you coming?","Will come you?","Lo lus nug: Will + you + verb tsis hloov."],
["mc","Yam koj npaj ua ntej lawm: sentence twg raug?","I'm going to visit Thailand next month.","I'll get the door.","I visit Thailand next month will.","I will to visit Thailand.","Yam koj npaj ua ntej lawm: be going to."],
["or","Kuv mam li hu koj","I'll call you later","calling","Tom qab will, verb tsis hloov: call."],
["or","Kuv yuav haus ib khob kav fes","I'll have a coffee","the coffees","Ib khob kav fes = a coffee: article a."],
["or","Kuv yuav qhib qhov rooj","I'll open the door","a doors","Peb paub qhov rooj twg: article the."],
["fi","I __ call you tomorrow.","Tag kis kuv yuav hu koj.","will","am|going|do","Koj hais tias koj yuav ua: will."],
["fi","I __ forget.","Kuv yuav nco ntsoov.","won't|will not","don't|not|willn't","will + tsis = won't (I won't forget)."],
["fi","__ you help me?","Koj pab kuv puas tau?","Will|Can|Could|Would","Do|Are|Is","Thov ib tug neeg pab: Will you …? (los yog Can, Could, Would)."],
["ty","Kuv yuav pab koj (use will)","I'll help you|I'll help","I'll · help · you — siv will","helping","Tom qab will, verb tsis hloov."],
["ty","Kuv yuav noj xalas (use will)","I'll have a salad|I'll have the salad","I'll have · salad — siv article","salads","Koj xaiv ib yam: article a (los yog the)."],
["ty","Kuv yuav kaw qhov rooj (use will)","I'll close the door|I'll shut the door","I'll · close · door — siv article the","a","Peb paub qhov rooj twg: article the."]]},
{ id:"perfect", title:"Present Perfect: twb … lawm (have been, have eaten)", blurb:"have + past participle: yam koj twb ua lawm. Muaj nag hmo los yog tsaib no? Siv Simple Past.", deck:"Mus ncig teb chaws", body:`
<p>Lus Hmoob hais <b>twb … lawm</b>: Kuv twb noj mov lawm. Lus Askiv siv <b>have + past participle</b> (been, eaten, seen): <b>I've eaten.</b> Siv nws thaum koj tsis hais thaum twg.</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|Kuv twb mus Japan lawm.}}{{ex:She has visited Laos twice.|/ʃi hæz ˈvɪzɪtɪd laʊs twaɪs/|Nws (poj niam) twb mus xyuas Nplog teb ob zaug lawm.}}
<h3>ever thiab never</h3>
{{ex:Have you ever eaten pho?|/hæv ju ˈevɚ ˈiːtən fʌ/|Koj puas tau noj fawm?}}{{ex:I've never seen it.|/aɪv ˈnevɚ siːn‿ɪt/|Kuv tsis tau pom.}}
<p>Teb: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Past participle</h3>
<p>Ib txhia past participle nkaus li Simple Past (tried). Ib txhia txawv (eaten, seen).</p>
<div class="tbl"><table><tr><th>verb</th><th>Simple Past</th><th>past participle</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Hais thaum twg: Simple Past</h3>
<p>Muaj <b>last year, yesterday, in 2020</b>? Siv Simple Past, tsis txhob siv Present Perfect. Lus Hmoob hais tau "Tsaib no kuv twb mus lawm", tab sis lus Askiv tsis tau.</p>
{{ex:I went to Japan last year.|/aɪ went tə dʒəˈpæn læst jɪr/|Tsaib no kuv mus Japan.}}
<div class="tip">Nco ntsoov: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["'Koj puas tau mus Japan?' — lus Askiv twg raug?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Nug: Have you ever + past participle (been)."],["I ___ never seen that movie. Lo lus twg raug?",["am","did","have","was"],2,"Siv have + never + past participle."],["Sentence twg raug?",["I went to Thailand last year.","I've been to Thailand last year.","I have go to Thailand last year.","I've went to Thailand."],0,"Muaj last year (tsaib no): siv Simple Past."]],
practice:[
["mc","'Kuv twb mus Japan lawm.' — lus Askiv twg raug?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","Siv have + past participle been."],
["mc","see: past participle yog lo lus twg?","seen","saw","seed","seeing","see – saw – seen: past participle yog seen."],
["mc","'Koj puas tau noj fawm?' — lus Askiv twg raug?","Have you ever eaten pho?","Did you ever eaten pho?","Have you ever ate pho?","Do you have eaten pho?","Nug: Have you ever + past participle."],
["mc","'Kuv tsis tau pom.' — lus Askiv twg raug?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","Siv have + never + past participle."],
["mc","Muaj last year (tsaib no): sentence twg raug?","I went to Thailand last year.","I've been to Thailand last year.","I have go to Thailand last year.","I've went to Thailand last year.","Muaj thaum twg: siv Simple Past."],
["or","Kuv twb saib zaj movie ntawd lawm","I've seen the movie","a saw","Peb paub zaj movie twg: article the."],
["or","Kuv twb mus Nplog teb ob zaug lawm","I've been to Laos twice","went","Tom qab have, siv past participle been."],
["or","Kuv tsis tau pom ib tug nab","I've never seen a snake","the snakes","Ib tug nab = a snake: article a."],
["fi","Have you ever __ to Fresno?","Koj puas tau mus Fresno?","been","be|went|go","Tom qab have, siv past participle been."],
["fi","I've __ eaten that.","Kuv tsis tau noj yam ntawd.","never","ever|no|not never","Kuv tsis tau noj = I've never eaten."],
["fi","She __ visited Laos twice.","Nws (poj niam) twb mus xyuas Nplog teb ob zaug lawm.","has","have|is|did","she (nws) siv has."],
["ty","Koj puas tau mus Japan? (Present Perfect)","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan — siv been","went","Nug: Have you ever been to …?"],
["ty","Kuv twb nyeem phau ntawv ntawd lawm (Present Perfect)","I've read the book|I've read that book","I've · read · book — siv article the","a","Peb paub phau ntawv twg: article the."],
["ty","Kuv tsis tau muaj ib tug miv (Present Perfect)","I've never had a cat","never · had · cat — siv article a","the","Ib tug miv = a cat: article a."]]},
{ id:"modals", title:"have to, must, should, might: yuav tsum, tsis txhob, tej zaum", blurb:"Yuav tsum: have to. Tsis txhob: must not. Tej zaum: might.", deck:"Tsev kho mob thiab kev pab", body:`
<p>Lus Hmoob muaj <b>yuav tsum</b> (have to, must) thiab <b>tsis txhob</b> (don't, must not). Lus Askiv muaj plaub lo lus. Tom qab plaub lo lus no, verb tsis hloov.</p>
<h3>have to: yuav tsum</h3>
<p>Lus Askiv siv have to ntau tshaj. he, she: <b>has to</b>.</p>
{{ex:I have to work tomorrow.|/aɪ hæv tə wɝːk təˈmɑːroʊ/|Tag kis kuv yuav tsum ua hauj lwm.}}{{ex:She has to go now.|/ʃi hæz tə goʊ naʊ/|Nws (poj niam) yuav tsum mus tam sim no.}}
<h3>don't have to thiab must not txawv</h3>
<div class="tbl"><table><tr><th>lus Askiv</th><th>lus Hmoob</th></tr><tr><td class="k">You don't have to come.</td><td>Koj tsis tuaj los tsis ua li cas.</td></tr><tr><td class="k">You must not smoke here.</td><td>Tsis txhob ncho qhov no.</td></tr></table></div>
<h3>should: kuv qhia koj</h3>
<p>should = kuv qhia koj xwb, tsis yog yuav tsum. Hauv lus Hmoob, hais os.</p>
{{ex:You should see a doctor.|/ju ʃʊd siː ə ˈdɑːktɚ/|Koj mus ntsib kws kho mob os.}}{{ex:You shouldn't worry.|/ju ˈʃʊdənt ˈwɝːi/|Koj tsis txhob txhawj os.}}
<h3>might: tej zaum</h3>
{{ex:It might rain.|/ɪt maɪt reɪn/|Tej zaum yuav los nag.}}{{ex:I might be late.|/aɪ maɪt biː leɪt/|Tej zaum kuv yuav mus lig.}}
<div class="tip">Nco ntsoov: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓ Tom qab should thiab might: tsis muaj to, tsis muaj -s.</div>`,
check:[["'Koj tsis tuaj los tsis ua li cas.' — lus Askiv twg raug?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"Koj tsis ua los tsis ua li cas: don't have to."],["Kuv qhia koj: You ___ see a doctor. Lo lus twg raug?",["might","have","should","must to"],2,"Kuv qhia koj: should + verb tsis hloov."],["She ___ to work today. Lo lus twg raug?",["have","must","should","has"],3,"she (nws) siv has to."]],
practice:[
["mc","'Tag kis kuv yuav tsum ua hauj lwm.' — lus Askiv twg raug?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + verb tsis hloov."],
["mc","'Koj tsis tuaj los tsis ua li cas.' — lus Askiv twg raug?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","Koj tsis ua los tsis ua li cas: don't have to."],
["mc","'Koj mus ntsib kws kho mob os.' — lus Askiv twg raug?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + verb; ib tug kws kho mob = a doctor: article a."],
["mc","'Tej zaum yuav los nag.' — lus Askiv twg raug?","It might rain.","It might rains.","It might to rain.","It mights rain.","might + verb tsis hloov."],
["mc","'Tsis txhob ncho qhov no.' — lus Askiv twg raug?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Tsis txhob = must not."],
["or","Koj mus ntsib kws kho mob os","You should see a doctor","the doctors","Ib tug kws kho mob = a doctor: article a."],
["or","Kuv yuav tsum mus tam sim no","I have to go now","going","Tom qab have to, verb tsis hloov."],
["or","Koj yuav tsum yuav ib daim ticket","You have to buy a ticket","the tickets","Ib daim ticket = a ticket: article a, singular."],
["fi","She __ to study tonight.","Hmo no nws (poj niam) yuav tsum kawm ntawv.","has","have|must|should","she (nws) siv has to."],
["fi","You __ have to pay.","Koj tsis them nqi los tsis ua li cas.","don't|do not","must not|not|aren't","Tsis ua los tsis ua li cas: don't have to."],
["fi","It __ rain tomorrow.","Tag kis tej zaum yuav los nag.","might|may|could","must to|has to|should to","tej zaum = might (los yog may, could)."],
["ty","Kuv yuav tsum ua hauj lwm (use have to)","I have to work|I must work|I need to work","have to · work — siv verb tsis hloov","should","yuav tsum = have to."],
["ty","Koj mus ntsib kws kho mob os (use should)","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — siv article a","the","Ib tug kws kho mob = a doctor: article a."],
["ty","Koj yuav tsum yuav ib daim ticket (use have to)","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — siv article a","the","Ib daim ticket = a ticket: article a."]]},
{ id:"to-ing", title:"want to, enjoy -ing: verb tom qab verb", blurb:"Tom qab want: to. Tom qab enjoy: -ing. Txhua verb muaj nws txoj cai.", deck:"Sib tham", body:`
<p>Lus Hmoob hais <b>Kuv xav mus tsev</b>: ob lo verb, tsis muaj lo lus nruab nrab. Lus Askiv yuav tsum muaj <b>to</b> los yog <b>-ing</b>: I want <b>to</b> go home. Verb thawj qhia koj siv to los yog -ing. Kawm cov verb siv ntau ua ntej.</p>
<div class="tbl"><table><tr><th>Tom qab: to</th><th>Tom qab: -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + verb: yam koj yuav ua</h3>
{{ex:I want to go home.|/aɪ wɑːnt tə goʊ hoʊm/|Kuv xav mus tsev.}}{{ex:I need to study.|/aɪ niːd tə ˈstʌdi/|Kuv yuav tsum kawm ntawv.}}{{ex:I'd like to order.|/aɪd laɪk tu ˈɔːrdɚ/|Kuv xav hais kuv yuav noj dab tsi.}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə lɝːn‿ˈɪŋglɪʃ/|Kuv txiav tias kuv yuav kawm lus Askiv.}}
<h3>enjoy, finish, mind: -ing</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Kuv nyiam npaj mov.}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɝːkɪŋ/|Kuv ua hauj lwm tas lawm.}}{{ex:I don't mind waiting.|/aɪ doʊnt maɪnd ˈweɪtɪŋ/|Kuv tos los tsis ua li cas.}}
<h3>like, love, start</h3>
<p>Tom qab like, love, start: siv tau to los yog -ing.</p>
<h3>verb + -ing ua ntej noun</h3>
<p>Hauv lus Hmoob, lo lus piav nyob tom qab noun (tus dev …). Hauv lus Askiv, verb + -ing nyob ua ntej noun: <b>bark dog</b> ✗ → <b>a barking dog</b> ✓</p>
<p>Lus Hmoob hais <b>Kuv mus yuav zaub</b>: ob lo verb, tsis muaj lo lus nruab nrab. Lus Askiv yuav tsum muaj to los yog and: <b>I go to buy vegetables.</b> / <b>I go and buy vegetables.</b></p>
<div class="tip">Nco ntsoov: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. Lo lus twg raug?",["go","going","to go","to going"],2,"Tom qab want siv to + verb."],["I enjoy ___ movies. Lo lus twg raug?",["watching","to watch","watch","to watching"],0,"Tom qab enjoy siv verb + -ing."],["'Kuv xav hais kuv yuav noj dab tsi.' (would like) — lus Askiv twg raug?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Tom qab would like siv to + verb."]],
practice:[
["mc","I need ___ now. Lo lus twg raug?","to go","going","go","to going","Tom qab need siv to + verb."],
["mc","I enjoy ___. Lo lus twg raug?","cooking","to cook","cook","to cooking","Tom qab enjoy siv verb + -ing."],
["mc","'Kuv xav hais kuv yuav noj dab tsi.' (would like) — lus Askiv twg raug?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Tom qab would like siv to + verb."],
["mc","'Kuv ua hauj lwm tas lawm.' — lus Askiv twg raug?","I finished working.","I finished to work.","I finished work to.","I finish worked.","Tom qab finish siv verb + -ing."],
["mc","'Kuv tos los tsis ua li cas.' — lus Askiv twg raug?","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","Tom qab mind siv verb + -ing."],
["or","Kuv xav yuav ib lub tsheb","I want to buy a car","the buying","Tom qab want siv to. Ib lub tsheb = a car: article a."],
["or","Kuv nyiam saib movies (use enjoy)","I enjoy watching movies","movie watch","Tom qab enjoy siv -ing. Tsis yog ib zaj xwb: plural movies."],
["or","Kuv yuav tsum so","I need to rest","resting","Tom qab need siv to + verb."],
["fi","I want __ a coffee.","Kuv xav haus ib khob kav fes.","to have|to drink|to get","have|having|drinking","Tom qab want siv to + verb."],
["fi","She enjoys __.","Nws (poj niam) nyiam ua luam dej.","swimming","to swim|swim|swims","Tom qab enjoy siv verb + -ing."],
["fi","I decided __ English.","Kuv txiav tias kuv yuav kawm lus Askiv.","to study|to learn","study|studying|studied","Tom qab decide siv to + verb."],
["ty","Kuv xav mus tsev","I want to go home","want to · go · home — tsis muaj article","the","Tom qab want siv to. home tsis muaj article."],
["ty","Kuv nyiam nyeem ntawv (use enjoy)","I enjoy reading books|I enjoy reading","enjoy · read · book — siv plural","book","Tom qab enjoy siv -ing. Tsis yog ib phau xwb: plural books."],
["ty","Kuv xav hais kuv yuav noj dab tsi (use would like)","I'd like to order|I want to order","I'd like · to · order — siv to","ordering","Tom qab would like siv to + verb."]]},
{ id:"articles-2", title:"the los yog tsis muaj article: the piano, soccer, Laos", blurb:"Siv the: the piano, the United States. Tsis siv article: soccer, Laos, dogs (txhua tus dev).", deck:"Mus ncig teb chaws", body:`
<p>Lus Hmoob tsis muaj article. Nov yog cov cai rau <b>the</b>: thaum twg siv, thaum twg tsis siv.</p>
<h3>Siv the</h3>
<div class="tbl"><table><tr><th>thaum twg?</th><th>piv txwv</th></tr><tr><td>muaj ib yam xwb</td><td class="k">the sun, the internet</td></tr><tr><td>piano, guitar</td><td class="k">play the piano</td></tr><tr><td>tus dej, hiav txwv</td><td class="k">the Mississippi, the Pacific</td></tr><tr><td>teb chaws muaj -s los yog States</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ pleɪ ðə piˈænoʊ/|Kuv ntaus piano.}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd steɪts/|Nws (poj niam) tuaj Amelikas teb chaws tuaj.}}{{ex:I found it on the internet.|/aɪ faʊnd‿ɪt‿ɑːn ði ˈɪntɚnet/|Kuv nrhiav tau hauv internet.}}
<h3>Tsis siv article</h3>
<div class="tbl"><table><tr><th>thaum twg?</th><th>piv txwv</th></tr><tr><td>ntau lub teb chaws, xeev thiab nroog</td><td class="k">Laos, Minnesota, St. Paul</td></tr><tr><td>ua si, lus, pluas mov</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>txhua tus, txhua yam</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Minnesota.|/aɪ lɪv‿ɪn ˌmɪnəˈsoʊtə/|Kuv nyob xeev Minnesota.}}{{ex:I play soccer.|/aɪ pleɪ ˈsɑːkɚ/|Kuv ua si soccer.}}{{ex:Dogs are cute.|/dɑːgz‿ɑːr kjuːt/|Dev zoo nkauj (txhua tus dev).}}
<h3>Txhua tus, los yog cov no xwb?</h3>
{{ex:I like dogs.|/aɪ laɪk dɑːgz/|Kuv nyiam dev (txhua tus dev).}}{{ex:The dogs in this park are cute.|/ðə dɑːgz‿ɪn ðɪs pɑːrk‿ɑːr kjuːt/|Cov dev hauv lub vaj no zoo nkauj (cov dev no xwb).}}
<div class="tip">Txhua tus: plural, tsis muaj the. <b>I like the dogs.</b> = kuv nyiam cov dev no xwb.</div>`,
check:[["I play ___ soccer. Lo lus twg raug?",["a","the","an","(tsis muaj)"],3,"Ua si (soccer): tsis muaj article."],["She's from ___ United States. Lo lus twg raug?",["the","a","an","(tsis muaj)"],0,"United States: siv the."],["'Dev zoo nkauj.' (txhua tus dev) — lus Askiv twg raug?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"Txhua tus: tsis muaj article, thiab siv plural."]],
practice:[
["mc","I play ___ piano. Lo lus twg raug?","the","a","an","some","piano, guitar: siv article the."],
["mc","'Kuv nyob xeev Minnesota.' — lus Askiv twg raug?","I live in Minnesota.","I live in the Minnesota.","I live in a Minnesota.","I live Minnesota in.","Minnesota, Laos: tsis muaj article."],
["mc","'Kuv ua si soccer.' — lus Askiv twg raug?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Ua si (soccer): tsis muaj article."],
["mc","'Miv zoo nkauj.' (txhua tus miv) — lus Askiv twg raug?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","Txhua tus: tsis muaj article, plural cats."],
["mc","She's from ___ United States. Lo lus twg raug?","the","a","an","some","United States: siv article the."],
["or","Kuv ntaus piano","I play the piano","a pianos","piano: siv article the."],
["or","Dev zoo nkauj (txhua tus dev)","Dogs are cute","The dog","Txhua tus dev: tsis muaj article, plural dogs."],
["or","Kuv nrhiav tau hauv internet","I found it on the internet","a","Muaj ib lub internet xwb: article the."],
["fi","I speak __.","Kuv hais lus Askiv.","English","the English|an English|a English","Lub npe lus (English): tsis muaj article."],
["fi","The sun rises in __ east.","Lub hnub tuaj sab hnub tuaj.","the","a|an|some","sab hnub tuaj (east), sab hnub poob (west): siv the."],
["fi","I love __.","Kuv nyiam nkauj heev.","music","the musics|a music|musics","Txhua yam nkauj (music): tsis muaj article, tsis muaj -s."],
["ty","Kuv tuaj Amelikas teb chaws tuaj","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — siv article the","a","United States: siv article the."],
["ty","Kuv ntaus guitar","I play the guitar|I play guitar","play · guitar — siv article the","a","guitar: siv article the."],
["ty","Miv zoo nkauj (txhua tus miv)","Cats are cute","cat · cute — tsis muaj article, siv plural","The cat","Txhua tus miv: tsis muaj article, plural cats."]]},
{ id:"first-conditional", title:"If + Simple Present, will (yog = if)", blurb:"Yog los nag, kuv yuav nyob tsev. Tom qab if, tsis txhob siv will.", deck:"Hauj lwm thiab email", body:`
<p>Hauv lus Hmoob, <b>yog</b> = if (yog kuj = am, is, are). Lus Askiv hais yam uas yuav muaj tau: <b>If + Simple Present, will + verb</b>. Yam ntawd yog tag kis, tab sis tom qab if siv <b>Simple Present</b>.</p>
{{ex:If it rains, I'll stay home.|/ɪf‿ɪt reɪnz aɪl steɪ hoʊm/|Yog los nag, kuv yuav nyob tsev.}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju doʊnt ˈhɝːi juːl mɪs ðə bʌs/|Yog koj tsis mus ceev, koj yuav tsis tau caij tsheb ntiav.}}
<h3>If nyob tom qab</h3>
<p>Yog if nyob tom qab, tsis muaj (,).</p>
{{ex:I'll help you if I have time.|/aɪl help ju ɪf‿aɪ hæv taɪm/|Kuv yuav pab koj yog kuv muaj sij hawm.}}
<h3>Yog …, hu kuv</h3>
{{ex:If you're late, call me.|/ɪf jʊr leɪt kɑːl mi/|Yog koj mus lig, hu kuv.}}{{ex:If you need help, let me know.|/ɪf ju niːd help let mi noʊ/|Yog koj xav tau kev pab, qhia kuv.}}
<h3>when: koj paub tseeb tias yuav muaj</h3>
<p>Yog koj paub tseeb, siv <b>when</b> (thaum). Tom qab when, kuj tsis txhob siv will.</p>
{{ex:When I get home, I'll call you.|/wen‿aɪ get hoʊm aɪl kɑːl ju/|Thaum kuv los txog tsev, kuv yuav hu koj.}}
<div class="tip">Nco ntsoov: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. Lo lus twg raug?",["will rain","rains","rained","raining"],1,"Tom qab if, siv Simple Present."],["If you study, you ___ pass. Lo lus twg raug?",["pass will","passing","will pass","passed"],2,"Lwm sab siv will + verb tsis hloov."],["Sentence twg raug?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Sab if siv Simple Present. Lwm sab siv will."]],
practice:[
["mc","If it ___, I'll stay home. Lo lus twg raug?","rains","will rain","rained","is rain","Tom qab if, siv Simple Present."],
["mc","If you're late, ___ me. Lo lus twg raug?","call","will calling","calls","to call","call me = hu kuv: pib nrog verb tsis hloov."],
["mc","'Kuv yuav pab koj yog kuv muaj sij hawm.' — lus Askiv twg raug?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Tom qab if, tsis txhob siv will."],
["mc","'Yog koj tsis mus ceev, koj yuav tsis tau caij tsheb ntiav.' — lus Askiv twg raug?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Sab if siv Simple Present (don't)."],
["mc","'Thaum kuv los txog tsev, kuv yuav hu koj.' — lus Askiv twg raug?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Tom qab when, kuj siv Simple Present."],
["or","Yog los nag, kuv yuav nyob tsev","If it rains I'll stay home","will the","Tom qab if siv Simple Present. home tsis muaj article."],
["or","Yog koj muaj sij hawm, hu kuv","If you have time call me","will","Tom qab if, tsis txhob siv will."],
["or","Koj yuav tsis tau caij lub tsheb ntiav","You'll miss the bus","a buses","Lub tsheb ntiav uas koj xav caij: article the."],
["fi","If it __ tomorrow, we'll cancel.","Yog tag kis los nag, peb yuav tsis mus lawm.","rains","will rain|rained|raining","Tom qab if, siv Simple Present."],
["fi","If you study, you __ pass.","Yog koj kawm, koj yuav xeem tau.","will|can|might","are|did|passing","Lwm sab: will + verb (los yog can, might)."],
["fi","__ you need help, call me.","Yog koj xav tau kev pab, hu kuv.","If|When","So|But|Because","yog = if (los yog when)."],
["ty","Kuv yuav pab koj yog kuv muaj sij hawm (use will)","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time — siv if","will","Tom qab if, tsis txhob siv will."],
["ty","Yog los nag, kuv yuav caij ib lub tsheb taxi (use will)","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — siv article a","the","Ib lub tsheb taxi = a taxi: article a."],
["ty","Koj yuav tsis tau caij lub tsheb ntiav (use will)","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — siv article the","a","Lub tsheb ntiav uas koj xav caij: article the."]]},
{ id:"relative", title:"who / that: piav ib tug neeg los yog ib yam khoom", blurb:"Lus Hmoob thiab lus Askiv piav tom qab noun: tus txiv neej uas … = the man who …", deck:"Mus kav khw", body:`
<p>Hauv lus Hmoob, lo lus piav nyob tom qab noun: <b>lub tsheb liab</b>, <b>phau ntawv uas kuv yuav</b>. Hauv lus Askiv, who / that kuj nyob tom qab noun: the book <b>that I bought</b>. <b>uas</b> ≈ <b>who</b> / <b>that</b>.</p>
<h3>Neeg: who</h3>
{{ex:I have a friend who speaks Chinese.|/aɪ hæv‿ə frend huː spiːks tʃaɪˈniːz/|Kuv muaj ib tug phooj ywg uas hais lus Suav.}}{{ex:the man who lives next door|/ðə mæn huː lɪvz nekst dɔːr/|tus txiv neej uas nyob ntawm ib sab}}
<h3>Khoom: that</h3>
{{ex:the book that I bought|/ðə bʊk ðæt‿aɪ bɑːt/|phau ntawv uas kuv yuav}}{{ex:This is the phone that I want.|/ðɪs‿ɪz ðə foʊn ðæt‿aɪ wɑːnt/|Nov yog lub xov tooj uas kuv xav tau.}}
<h3>Tsis muaj that los tsis ua li cas</h3>
<p>Yog subject + verb nyob tom qab (we saw), tsis muaj that los tsis ua li cas. Thaum hais lus, ntau tus neeg tsis hais that.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi sɑː wəz greɪt/|Zaj movie uas wb saib zoo heev.}}
<h3>Chaw: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi met/|lub khw kav fes uas wb sib ntsib}}
<div class="tip">Nco ntsoov: noun ua ntej, lo lus piav tom qab, nkaus li lus Hmoob. Tsis txhob siv what: <b>the book what I bought</b> ✗ → <b>the book (that) I bought</b> ✓</div>`,
check:[["I have a friend ___ lives in Fresno. Lo lus twg raug?",["which","who","what","he"],1,"Piav ib tug neeg: who."],["'phau ntawv uas kuv yuav' — lus Askiv twg raug?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"Noun ua ntej, that thiab lo lus piav tom qab."],["Sentence twg raug?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"Lo lus piav nyob tom qab noun."]],
practice:[
["mc","I have a friend ___ speaks English. Lo lus twg raug?","who","which","what","she","Piav ib tug neeg: who."],
["mc","'phau ntawv uas kuv yuav' — lus Askiv twg raug?","the book that I bought","the I bought book","the book what I bought","the bought I book","Noun ua ntej, lo lus piav tom qab."],
["mc","'tus txiv neej uas nyob ntawm ib sab' — lus Askiv twg raug?","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","Piav ib tug neeg: who."],
["mc","This is the phone ___ I want. Lo lus twg raug?","that","who","what","it","Piav ib yam khoom: that."],
["mc","'zaj movie uas wb saib' — lus Askiv twg raug?","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","Tsis muaj that los tsis ua li cas."],
["or","Nov yog phau ntawv uas kuv yuav","This is the book I bought","a what","Peb paub phau ntawv twg: article the."],
["or","Kuv muaj ib tug phooj ywg uas npaj mov","I have a friend who cooks","the which","Ib tug phooj ywg = a friend: article a."],
["or","Zaj movie uas wb saib zoo heev","The movie we saw was great","A movies","Peb paub zaj movie twg: article the."],
["fi","the man __ lives here","tus txiv neej uas nyob ntawm no","who|that","what|he|which","Piav ib tug neeg: who (los yog that)."],
["fi","the book __ I read","phau ntawv uas kuv nyeem","that|which","who|what|it","Piav ib yam khoom: that (los yog which)."],
["fi","the cafe __ we met","lub khw kav fes uas wb sib ntsib","where","who|what|it","Piav ib qhov chaw: where."],
["ty","Nov yog phau ntawv uas kuv yuav (past tense)","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — siv article the","a","Peb paub phau ntawv twg: article the."],
["ty","Kuv muaj ib tug phooj ywg uas hais lus Suav","I have a friend who speaks Chinese|I have a friend that speaks Chinese","a friend · who · speaks Chinese — siv article a","the","Ib tug phooj ywg = a friend: article a."],
["ty","Zaj movie uas wb saib zoo heev (past tense)","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great — siv was","what","Noun ua ntej, lo lus piav tom qab."]]},
{ id:"he-she-it", title:"he, she, it — him, her: nws ib lo lus xwb", blurb:"Lus Hmoob siv nws xwb. Lus Askiv muaj he, she, it, thiab him, her, his, its.", deck:"Kuv thiab kuv tsev neeg", body:`
<p>Lus Hmoob muaj ib lo lus <b>nws</b> rau txhua tus: txiv neej, poj niam, tsiaj thiab khoom. Lus Askiv muaj peb lo lus. Cov lo lus no yog <b>pronoun</b> (tej lus pauv lub npe).</p>
<div class="tbl"><table><tr><th>nws yog leej twg?</th><th>lus Askiv</th></tr><tr><td>ib tug txiv neej</td><td class="k">he</td></tr><tr><td>ib tug poj niam</td><td class="k">she</td></tr><tr><td>ib yam khoom, ib tug tsiaj</td><td class="k">it</td></tr></table></div>
{{ex:He is my brother.|/hi ɪz maɪ ˈbrʌðɚ/|Nws (txiv neej) yog kuv tus nus. (poj niam hais)}}{{ex:She is a nurse.|/ʃi ɪz‿ə nɝːs/|Nws (poj niam) yog ib tug kws saib xyuas neeg mob.}}{{ex:The car is new. It's red.|/ðə kɑːr ɪz nuː/ /ɪts red/|Lub tsheb tshiab. Nws liab.}}
<h3>He hit he ✗ → He hit him ✓</h3>
<p>Hauv lus Hmoob, lo lus tsis hloov: <b>kuv</b> = I, me, my; <b>nws</b> = he, him, his (Kuv hlub koj. Koj hlub kuv.). Hauv lus Askiv, pronoun hloov: ua ntej verb, tom qab verb thiab ua ntej noun.</p>
<div class="tbl"><table><tr><th>ua ntej verb</th><th>tom qab verb</th><th>ua ntej noun</th></tr><tr><td class="k">I</td><td class="k">me</td><td class="k">my</td></tr><tr><td class="k">he</td><td class="k">him</td><td class="k">his</td></tr><tr><td class="k">she</td><td class="k">her</td><td class="k">her</td></tr><tr><td class="k">it</td><td class="k">it</td><td class="k">its</td></tr><tr><td class="k">we</td><td class="k">us</td><td class="k">our</td></tr><tr><td class="k">they</td><td class="k">them</td><td class="k">their</td></tr></table></div>
{{ex:I know him.|/aɪ noʊ hɪm/|Kuv paub nws (txiv neej).}}{{ex:I work with her.|/aɪ wɝːk wɪð hɝː/|Kuv ua hauj lwm nrog nws (poj niam).}}{{ex:His name is Tou.|/hɪz neɪm‿ɪz tuː/|Nws lub npe hu ua Tou.}}
<h3>lawv, nkawd, wb, peb</h3>
<p>Lus Hmoob suav: <b>nkawd</b> (ob tug), <b>lawv</b> (peb tug los yog coob) = <b>they, them, their</b>. <b>wb</b> (ob tug) thiab <b>peb</b> = <b>we, us, our</b>. Lus Askiv tsis suav.</p>
{{ex:They are my parents.|/ðeɪ ɑːr maɪ ˈperənts/|Nkawd yog kuv niam txiv.}}{{ex:I like them.|/aɪ laɪk ðəm/|Kuv nyiam lawv.}}
<h3>Ib tug neeg: he los yog she</h3>
<p>Ib tug neeg uas koj paub = <b>he</b> los yog <b>she</b>, tsis yog they. Rau ib tug neeg laus, kuj yog he los yog she. Koj tus dev los yog koj tus miv: ntau tus neeg hais he los yog she.</p>
<div class="tip">Nco ntsoov: <b>My mother, he is at home.</b> ✗ → <b>My mother is at home.</b> / <b>She's at home.</b> ✓ <b>I see she.</b> ✗ → <b>I see her.</b> ✓</div>`,
check:[["Mai is my sister. ___ lives in Fresno. Lo lus twg raug?",["He","She","It","Her"],1,"Mai yog ib tug poj niam, ua ntej verb: she."],["This is Tou. I know ___. Lo lus twg raug?",["he","his","him","it"],2,"Tou yog txiv neej, tom qab verb know: him."],["'Nkawd yog kuv niam txiv.' — lus Askiv twg raug?",["They are my parents.","Them are my parents.","Their are my parents.","He are my parents."],0,"nkawd ua ntej verb: they."]],
practice:[
["mc","Mai is my sister. ___ lives in Fresno. Lo lus twg raug?","She","He","It","Her","Mai yog ib tug poj niam, ua ntej verb: she."],
["mc","This is Tou. I know ___. Lo lus twg raug?","him","he","his","it","Tou yog txiv neej, tom qab verb: him."],
["mc","My car is new. ___ is red. Lo lus twg raug?","It","She","He","Its","Lub tsheb yog ib yam khoom: it."],
["mc","Tou and Pa are my friends. I like ___. Lo lus twg raug?","them","they","their","him","Ob tug (nkawd), tom qab verb: them."],
["mc","'Nws (poj niam) lub npe hu ua Mai.' — lus Askiv twg raug?","Her name is Mai.","She name is Mai.","His name is Mai.","Hers name is Mai.","Ib tug poj niam, ua ntej noun (name): her."],
["or","Nws (poj niam) yog ib tug kws saib xyuas neeg mob","She is a nurse","He an","Nws (poj niam) = she. Ib tug = a: article a."],
["or","Nws (txiv neej) cov me nyuam nyob hauv tsev kawm ntawv","His children are at school","He the","Nws (txiv neej) cov me nyuam = his children (plural). at school tsis muaj article."],
["or","Kuv pom nws (poj niam) ntawm lub khw","I see her at the store","she a","Tom qab verb siv her. Lub khw uas peb paub: article the."],
["fi","This is Tou. I know __.","Nov yog Tou. Kuv paub nws (txiv neej).","him","he|his|it","Tom qab verb know siv him."],
["fi","Mai is my friend. __ car is red.","Mai yog kuv tus phooj ywg. Nws lub tsheb liab.","Her","She|His|Hers","Ua ntej noun (car), rau Mai: her."],
["fi","The house is old. __ door is red.","Lub tsev qub. Nws lub qhov rooj liab.","Its","It's|His|It","Lub tsev yog khoom, ua ntej noun: its (tsis yog it's)."],
["ty","Nws (poj niam) yog ib tug kws saib xyuas neeg mob","She is a nurse","she · nurse — siv article a","He the","Nws (poj niam) = she. Ib tug = a: article a."],
["ty","Nkawd yog kuv cov nus (poj niam hais)","They are my brothers","they · brother — siv plural","brother","Nkawd = they. Ob tug: plural brothers."],
["ty","Kuv paub nws (txiv neej)","I know him","I · know — tom qab verb siv him los yog he?","he","Tom qab verb siv him."],
["ty","Nws (txiv neej) cov me nyuam nyob hauv tsev kawm ntawv","His children are at school|His children are in school|His kids are at school|His kids are in school","his · children · school — siv plural","the","Cov me nyuam = plural children. at school tsis muaj article."]]},
];
