/* it-en stage B1: lessons for Italian speakers. English side shared with es-en (parity.js); contrasts follow docs/profiles/it.md §4 and §8;
   practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2: for, since e «da»", blurb:"Qualcosa che è cominciato nel passato e continua oggi. «Da» + durata → for; «da» + momento d'inizio → since.", deck:"Presentarsi", body:`
<p>Il secondo uso del <i>present perfect</i>: qualcosa che <b>è cominciato nel passato e continua adesso</b>. Qui l'italiano usa il presente con «da» («Abito qui dal 2020», «Lavoro qui da tre anni»), ma l'inglese vuole <b>have/has + participio passato</b>.</p>
{{ex:I've lived here for two years.|/aɪv ˈlɪvd ˈhɪr fər ˈtuː ˈjɪrz/|Abito qui da due anni}}{{ex:She has worked here since 2020.|/ʃi həz ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Lei lavora qui dal 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|La conosco da molto tempo}}
<h3>for e since: due traduzioni di «da»</h3>
<p>L'italiano ha una parola sola, «da»; l'inglese ne ha due. Chiediti se «da» indica <b>quanto tempo</b> o <b>da quando</b>.</p>
<div class="tbl"><table><tr><th>for + quanto tempo («da tre anni»)</th><th>since + momento d'inizio («dal 2020»)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long…?</h3>
<p>«Da quanto tempo…?» si chiede con <i>How long have you…?</i>, con l'ausiliare prima del soggetto. Con <i>he, she, it</i> l'ausiliare è <i>has</i>.</p>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Da quanto tempo sei qui?}}{{ex:How long has she studied English?|/ˈhaʊ ˈlɔːŋ həz ʃi ˈstʌdid ˈɪŋglɪʃ/|Da quanto tempo lei studia l'inglese?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Ho appena finito}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|L'ho già visto}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Hai già mangiato?}}
<p>Nell'inglese americano si dice anche <i>Did you eat yet?</i> e <i>I already saw it</i>: tutte e due le forme sono corrette.</p>
<div class="tip">L'errore tipico di chi parla italiano: <b>I live here since 2020.</b> ✗ → <b>I've lived here since 2020.</b> ✓. E con una durata ci vuole <i>for</i>, non <i>since</i>: <b>for five years</b>, non <i>since five years</i>.</div>`,
check:[["I've lived here ___ three years. Che cosa va nello spazio?",["since","for","during","from"],1,"«Da» + durata («da tre anni») è \"for\"."],["I've worked here ___ 2020. Che cosa va nello spazio?",["for","in","since","at"],2,"«Da» + momento d'inizio («dal 2020») è \"since\"."],["«Da quanto tempo sei qui?» in inglese:",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"La forma è \"How long have you\" + participio passato."]],
practice:[
["mc","I've known him ___ ten years. Che cosa va nello spazio?","for","since","from","during","«Da» + durata è \"for\"."],
["mc","She's lived here ___ 2019. Che cosa va nello spazio?","since","for","in","at","«Da» + momento d'inizio è \"since\"."],
["mc","«Da quanto tempo sei qui?» in inglese:","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Nella domanda l'ausiliare \"have\" va prima del soggetto."],
["mc","Come si dice «Ho appena finito»?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","La forma è \"have\" + \"just\" + participio passato."],
["mc","«Hai già mangiato?» in inglese:","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Nelle domande «già» di solito è \"yet\", alla fine della frase."],
["or","Lei abita qui dal 2020","She has lived here since 2020","have","Con \"she\" l'ausiliare è \"has\": terza persona."],
["or","Da quanto tempo abiti qui?","How long have you lived here","has live","Con \"you\" l'ausiliare è \"have\" (accordo) e va prima del soggetto; poi viene il participio \"lived\", non il presente."],
["or","Abito qui da cinque anni","I've lived here for five years","since","«Da» + durata è \"for\", non \"since\"."],
["fi","I've worked here __ two years.","Lavoro qui da due anni","for","since|from|during","«Da» + durata è \"for\"."],
["fi","I've been here __ Monday.","Sono qui da lunedì","since","for|at|during","«Da» + momento d'inizio è \"since\"."],
["fi","Have you finished __?","Hai già finito?","yet|already","ever|never|since","Nelle domande «già» di solito è \"yet\"."],
["ty","Da quanto tempo lei è qui?","How long has she been here","how long · been · here — domanda con l'ausiliare","is","Con \"she\" l'ausiliare è \"has\" (terza persona), e va prima del soggetto."],
["ty","Mio fratello lavora qui dal 2021","My brother has worked here since 2021|My brother has been working here since 2021","work · here · since — il soggetto è alla terza persona","works","Con \"my brother\" (terza persona) si usa \"has\" + participio passato, non il presente."],
["ty","Abito qui da tre anni","I've lived here for three years|I've been living here for three years","live · here · three years — usa \"for\"","since","«Da» + durata è \"for\", con il present perfect."]]},
{ id:"narrative", title:"I tempi del racconto: past simple, past continuous e past perfect", blurb:"Lo sfondo va al past continuous, i fatti al past simple, e quello che era successo prima va con had + participio.", deck:"Cinema, serie e slang", body:`
<p>Per raccontare una storia si mescolano tre tempi verbali. Ognuno ha il suo ruolo:</p>
<div class="tbl"><table><tr><th>Tempo</th><th>Ruolo</th><th>Esempio</th></tr><tr><td class="k">past continuous («stavo camminando»)</td><td>lo sfondo, quello che stava succedendo</td><td>I was walking home.</td></tr><tr><td class="k">past simple</td><td>i fatti, quello che è successo</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect («avevo visto»)</td><td>quello che era successo prima</td><td>He had moved to Miami.</td></tr></table></div>
<h3>Sfondo + fatto</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Stavo tornando a casa a piedi quando ho visto un vecchio amico}}
<h3>Past perfect: had + participio passato</h3>
<p>Corrisponde al trapassato prossimo («avevo + participio»): qualcosa che è successo <b>prima</b> di un altro momento del passato. <i>had</i> è uguale per tutte le persone.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Quando sono arrivato, il film era già cominciato}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Non avevo mai visto la neve prima}}
<p>Non serve per una semplice sequenza di fatti: se racconti le cose nell'ordine in cui sono successe, basta il <i>past simple</i>.</p>
<h3>Parole per mettere in ordine</h3>
<p><i>first</i> (prima), <i>then</i> (poi), <i>after that</i> (dopo), <i>finally</i> (alla fine).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Prima abbiamo cenato. Poi abbiamo guardato un film}}
<h3>Domande e negazioni</h3>
<p>Al <i>past simple</i> le domande e le negazioni usano l'ausiliare <i>did</i> + forma base: <b>Did you see him?</b>, <b>I didn't see him</b>, non <i>Did you saw</i>. Al <i>past continuous</i> l'ausiliare è <i>was/were</i>, che si accorda con il soggetto.</p>
{{ex:What were you doing when I called?|/ˈwʌt wər ju ˈduːɪŋ wen aɪ ˈkɔːld/|Che cosa stavi facendo quando ti ho chiamato?}}{{ex:Did you see the movie?|/dɪd ju ˈsiː ðə ˈmuːvi/|Hai visto il film?}}
<div class="tip"><i>then</i> (poi) e <i>than</i> («di», «che» nei paragoni) si somigliano, ma sono parole diverse. Per raccontare si usa <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Che cosa va nello spazio?",["has","was","had","did"],2,"Quello che era successo prima va con \"had\" + participio passato."],["I ___ walking home when it started to rain. Che cosa va nello spazio?",["was","had","did","have"],0,"Lo sfondo della storia va al past continuous."],["Quale frase parla di qualcosa successo prima di un altro momento del passato?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"Had\" + participio passato è il past perfect."]],
practice:[
["mc","When I got there, the movie ___ already started. Che cosa va nello spazio?","had","has","was","did","Quello che era successo prima va con \"had\" + participio passato."],
["mc","I ___ cooking when the phone rang. Che cosa va nello spazio?","was","had","did","have","Lo sfondo della storia va al past continuous."],
["mc","Come si dice «Quando sono arrivato, il treno era già partito»?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Quello che era successo prima va con \"had\" + participio passato."],
["mc","Per andare avanti con la storia, come si dice «poi»?","then","than","that","them","\"Then\" è «poi»; \"than\" si usa nei paragoni."],
["mc","Come si dice «Non avevo mai visto la neve prima»?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","La forma è \"had\" + \"never\" + participio passato."],
["or","Hai visto il tuo amico?","Did you see your friend","saw","Nella domanda al passato c'è l'ausiliare \"did\" e il verbo nella forma base \"see\"."],
["or","Lei stava tornando a casa a piedi","She was walking home","were","Con \"she\" si usa \"was\": accordo."],
["or","Il treno era già partito","The train had already left","has","Quello che era successo prima va con \"had\" + participio passato."],
["fi","I was sleeping __ you called.","Stavo dormendo quando hai chiamato","when","than|so|had","«Quando» si dice \"when\"."],
["fi","The bus had already __.","L'autobus era già partito","left|gone","leave|leaving|leaves","Dopo \"had\" viene il participio passato."],
["fi","First we ate. __ we watched a movie.","Prima abbiamo mangiato. Poi abbiamo guardato un film","Then|After that|Next","Than|Because|When","«Poi» è \"then\"."],
["ty","Non ho visto il film (usa il past simple)","I didn't see the movie|I didn't watch the movie","see · movie — negazione con l'ausiliare","saw","La negazione al passato usa l'ausiliare \"didn't\" + forma base: \"see\", non \"saw\"."],
["ty","Loro stavano guardando la TV","They were watching TV|They were watching television","watch · TV — usa il past continuous","was","Con \"they\" si usa \"were\" + -ing: accordo."],
["ty","Il film era già cominciato","The movie had already started|The movie had started already","movie · already · start — usa \"had\" + participio","has","Quello che era successo prima va con \"had\" + participio passato."]]},
{ id:"conditionals", title:"Periodo ipotetico di secondo e terzo tipo: situazioni immaginarie", blurb:"Se avessi… → if + past simple, would. Se avessi avuto… → if + had + participio, would have.", deck:"Emozioni e reazioni", body:`
<p>Servono a immaginare quello che non è reale, e corrispondono abbastanza bene all'italiano: «se avessi…, farei…» e «se avessi fatto…, avrei…». La differenza: dove l'italiano mette il congiuntivo dopo «se», l'inglese usa un tempo passato, e <b>mai would</b> dopo <i>if</i>. <i>If I would have time</i> è lo stesso errore di «se avrei tempo» in italiano.</p>
<h3>Secondo tipo: un presente immaginario</h3>
<p><b>If + past simple, would + verbo</b>. «Se avessi tempo» → <i>If I had time</i>.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Se avessi tempo, viaggerei}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Se fossi in te, lo accetterei}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Tu che cosa faresti?}}
<h3>Terzo tipo: un passato immaginario</h3>
<p><b>If + had + participio passato, would have + participio passato</b>. È lo stesso schema di «se avessi studiato, avrei passato l'esame».</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Se avessi studiato, avrei passato l'esame}}
<h3>Rimpianti: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Avrei dovuto chiamare}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Magari avessi più tempo}}
<div class="tbl"><table><tr><th>Tipo</th><th>Parte con if</th><th>Conseguenza</th></tr><tr><td>1 (possibile)</td><td class="k">presente</td><td class="k">will</td></tr><tr><td>2 (immaginario, adesso)</td><td class="k">past simple</td><td class="k">would</td></tr><tr><td>3 (immaginario, nel passato)</td><td class="k">had + participio passato</td><td class="k">would have + participio passato</td></tr></table></div>
<h3>Domande e soggetto</h3>
<p>Nelle domande l'ausiliare <i>would</i> va prima del soggetto. E anche se in italiano dici «Sarebbe fantastico», in inglese serve un soggetto: <i>It would be great</i>.</p>
{{ex:Would you move to another country?|/wəd ju ˈmuːv tu əˈnʌðər ˈkʌntri/|Ti trasferiresti in un altro paese?}}{{ex:It would be great.|/ɪt wəd bi ˈgreɪt/|Sarebbe fantastico}}
<div class="tip"><i>If I were you</i> è un'espressione fissa: anche con <i>I</i> si usa <b>were</b>, non <i>was</i>. E non mettere mai <i>would</i> dopo <i>if</i>: <b>If I would have time</b> ✗ → <b>If I had time</b> ✓.</div>`,
check:[["If I ___ rich, I would travel. Che cosa va nello spazio?",["am","were","will be","would be"],1,"Per qualcosa di immaginario nel presente, dopo \"if\" va il passato (\"were\")."],["If I had studied, I ___ passed. Che cosa va nello spazio?",["would","will have","would have","had"],2,"Per un passato immaginario: \"would have\" + participio passato."],["«Avrei dovuto chiamare» in inglese:",["I should have called.","I should called.","I should had call.","I would call should."],0,"Per un rimpianto: \"should have\" + participio passato."]],
practice:[
["mc","If I ___ time, I would help. Che cosa va nello spazio?","had","have","will have","would have","Per qualcosa di immaginario nel presente, dopo \"if\" va il passato."],
["mc","Come si dice «Se fossi in te, lo comprerei»?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" è un'espressione fissa."],
["mc","If I had known, I ___ come. Che cosa va nello spazio?","would have","would","will have","had","Per un passato immaginario: \"would have\" + participio passato."],
["mc","Come si dice «Avrei dovuto chiamare»?","I should have called.","I should called.","I should had call.","I must called.","Per un rimpianto: \"should have\" + participio passato."],
["mc","«Tu che cosa faresti?» in inglese:","What would you do?","What will you did?","What would you did?","What you would do?","Nella domanda l'ausiliare \"would\" va prima del soggetto."],
["or","Mi aiuteresti?","Would you help me","Do","Nella domanda l'ausiliare \"would\" va prima del soggetto."],
["or","Dove vivresti?","Where would you live","will","Dopo la parola interrogativa, l'ausiliare \"would\" va prima del soggetto."],
["or","Se avessi tempo, viaggerei","If I had time I'd travel","have will","Dopo \"if\" va il passato (\"had\"), non \"will\" né \"would\"."],
["fi","If I __ you, I'd go.","Se fossi in te, andrei","were|was","am|be|would be","\"If I were you\" è un'espressione fissa."],
["fi","I would __ helped.","Ti avrei aiutato","have","had|has|having","La forma è \"would have\" + participio passato."],
["fi","I wish I __ more time.","Magari avessi più tempo","had","have|would have|will have","Dopo \"I wish\" va il passato."],
["ty","Tu che cosa faresti?","What would you do","would · do — domanda con l'ausiliare","will","Nella domanda l'ausiliare \"would\" va prima del soggetto."],
["ty","Sarebbe fantastico (usa \"great\")","It would be great|It'd be great|That would be great","great — serve il soggetto \"it\"","is","In inglese il soggetto è obbligatorio: \"It would be great\"."],
["ty","Se fossi in te, andrei","If I were you I'd go|I'd go if I were you|If I was you I'd go","if · were · go — un'espressione fissa","am","«Se fossi in te» è \"If I were you\", con \"were\"."]]},
{ id:"passive", title:"Forma passiva: be + participio passato", blurb:"Quando conta quello che è successo e non chi l'ha fatto. Dove l'italiano dice «si parla inglese», l'inglese usa la passiva.", deck:"Lavoro ed e-mail", body:`
<p>La forma passiva è <b>be + participio passato</b>. Si usa quando non sai chi ha fatto qualcosa o quando non è importante.</p>
<p>L'italiano ha la passiva («La riunione è stata annullata»), ma spesso preferisce altre strade: il «si» («Qui si parla inglese») o la terza persona plurale senza soggetto («Mi hanno rubato il cellulare»). In inglese tutto questo va alla <b>forma passiva</b>.</p>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Qui si parla inglese}}{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Mi hanno rubato il cellulare}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|La riunione è stata annullata}}
<h3>L'accordo con be</h3>
<p>Il verbo <i>be</i> si accorda con il soggetto: singolare → <b>is/was</b>; plurale → <b>are/were</b>.</p>
{{ex:This was made in China.|/ˈðɪs wəz ˈmeɪd ɪn ˈtʃaɪnə/|Questo è stato fatto in Cina}}{{ex:These shoes were made in Italy.|/ˈðiːz ˈʃuːz wər ˈmeɪd ɪn ˈɪtəli/|Queste scarpe sono state fatte in Italia}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|La colazione si serve alle sette}}
<h3>Chi l'ha fatto: by</h3>
{{ex:It was written by Umberto Eco.|/ɪt wəz ˈrɪtn baɪ ʊmˈbertoʊ ˈekoʊ/|L'ha scritto Umberto Eco}}
<h3>Attiva e passiva</h3>
<div class="tbl"><table><tr><th>Attiva</th><th>Passiva</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Domande</h3>
<p>Nella domanda l'ausiliare <i>is/was</i> va prima del soggetto.</p>
{{ex:Is breakfast included?|/ɪz ˈbrekfəst ɪnˈkluːdɪd/|La colazione è compresa?}}
<div class="tip">Errori tipici: dimenticare <i>be</i> (<b>My phone stolen</b> ✗) o tradurre il «si» parola per parola (<b>Here speaks English</b> ✗). Si dice: <b>My phone was stolen</b>, <b>English is spoken here</b> ✓.</div>`,
check:[["My bag ___ stolen yesterday. Che cosa va nello spazio?",["is","was","did","has"],1,"È successo ieri: \"was\" + participio passato."],["This phone ___ made in Mexico. Che cosa va nello spazio?",["was","did","has","does"],0,"La forma passiva è \"be\" + participio passato."],["«La riunione è stata annullata» in inglese:",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"La forma è \"be\" + il participio \"canceled\"."]],
practice:[
["mc","My phone ___ stolen. Che cosa va nello spazio?","was","did","has","is steal","La forma passiva è \"be\" + participio passato."],
["mc","Come si dice «Questo è stato fatto in Messico»?","This was made in Mexico.","This made in Mexico.","This was make in Mexico.","This did made in Mexico.","La forma è \"be\" + il participio \"made\"."],
["mc","Come si dice «Qui si parla inglese»?","English is spoken here.","Here speaks English.","English is speak here.","English speaks here.","La costruzione con il «si» diventa forma passiva: \"is\" + participio passato."],
["mc","Come si dice «La riunione è stata annullata»?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","La forma è \"be\" + participio passato."],
["mc","Come si dice «Queste scarpe sono state fatte in Italia»?","These shoes were made in Italy.","These shoes was made in Italy.","These shoes made in Italy.","These shoes were make in Italy.","Con un soggetto plurale si usa \"were\": accordo."],
["or","Mi hanno rubato le valigie","My bags were stolen","was","Con il plurale \"bags\" si usa \"were\": accordo."],
["or","Qui si parla inglese","English is spoken here","are speaks","Con \"English\" (singolare) si usa \"is\" + participio passato: accordo."],
["or","La riunione è stata annullata","The meeting was canceled","did","La forma passiva si costruisce con \"be\" + participio passato, non con \"did\"."],
["fi","This was __ in Mexico.","Questo è stato fatto in Messico","made","make|making|makes","Dopo \"be\" viene il participio passato."],
["fi","The room __ cleaned every day.","La camera viene pulita ogni giorno","is|gets","does|has|did","Per qualcosa di abituale: \"is\" + participio passato."],
["fi","It was written __ Isabel Allende.","L'ha scritto Isabel Allende","by","from|of|with","Chi ha fatto l'azione si indica con \"by\"."],
["ty","Mi hanno rubato il cellulare (forma passiva, past simple)","My phone was stolen|My phone got stolen|My cell phone was stolen","phone · steal — usa la forma passiva","stole","Con \"my phone\" (singolare) si usa \"was\" + participio passato: accordo."],
["ty","La colazione è compresa?","Is breakfast included|Is the breakfast included","breakfast · include — domanda con l'ausiliare","Does","Nella domanda l'ausiliare \"is\" va prima del soggetto."],
["ty","La porta era chiusa a chiave","The door was locked","door · lock — usa la forma passiva","were","Con \"the door\" (singolare) si usa \"was\": accordo."]]},
{ id:"reported", title:"Discorso indiretto: riferire quello che ha detto qualcuno", blurb:"She said she was tired. Il tempo verbale fa un passo indietro, e tell vuole sempre la persona.", deck:"Telefono e abbreviazioni", body:`
<p>Serve a riferire quello che ha detto un'altra persona: «ha detto che…». Come in italiano («Sono stanca» → «Ha detto che era stanca»), il tempo verbale <b>fa un passo indietro verso il passato</b>.</p>
<div class="tbl"><table><tr><th>Discorso diretto</th><th>Discorso indiretto</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Ha detto che era stanca}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Ha detto che sarebbe venuto}}
<h3>say o tell</h3>
<p>Tutti e due significano «dire», ma <b>tell</b> vuole la persona subito dopo (<i>told me</i>), <b>say</b> no (<i>said</i>, oppure <i>said to me</i>). «Mi ha detto» è <i>He told me</i>: <i>He said me</i> ✗ è uno degli errori più comuni.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Mi ha detto che era impegnato}}{{ex:She said there was a problem.|/ʃi ˈsed ðer wəz ə ˈprɑːbləm/|Ha detto che c'era un problema}}
<p>Guarda il secondo esempio: «c'era» in inglese ha bisogno di un soggetto (<i>there was</i>), che si accorda con quello che viene dopo.</p>
<h3>Domande nel discorso indiretto</h3>
<p>Per le domande sì/no usa <b>if</b> («se»). Con una parola interrogativa, la ripeti. In tutti e due i casi l'ordine è quello di una frase affermativa (soggetto + verbo), e <b>non si usa do/did</b>.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Mi ha chiesto se stavo bene}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Mi ha chiesto dove abitavo}}
<div class="tip">Errori tipici: <b>He said me…</b> ✗ → <b>He told me…</b> ✓; <b>He asked where did I live</b> ✗ → <b>He asked where I lived</b> ✓.</div>`,
check:[["She said she ___ tired. Che cosa va nello spazio?",["is being","was","be","will"],1,"Nel discorso indiretto il tempo verbale torna indietro al passato."],["He ___ me he would come. Che cosa va nello spazio?",["said","say","told","tell to"],2,"Con la persona subito dopo (\"me\") si usa \"told\"."],["«Mi ha chiesto dove abitavo» in inglese:",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"In una domanda indiretta l'ordine è quello di una frase affermativa."]],
practice:[
["mc","She said she ___ busy. Che cosa va nello spazio?","was","is being","be","were being","Nel discorso indiretto il tempo verbale torna indietro al passato."],
["mc","He ___ me he was late. Che cosa va nello spazio?","told","said","say","tells to","Con la persona subito dopo si usa \"told\"."],
["mc","Come si dice «Ha detto che sarebbe venuto»?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" diventa \"would\"."],
["mc","Come si dice «Lei mi ha chiesto se stavo bene»?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Le domande sì/no si riferiscono con \"if\"."],
["mc","Come si dice «Lui mi ha chiesto dove abitavo»?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","In una domanda indiretta l'ordine è quello di una frase affermativa."],
["or","Ha detto che era stanca","She said she was tired","told were","Con \"she\" si usa \"was\": accordo. Senza la persona dopo, \"said\"."],
["or","Mi ha detto che era impegnato","He told me he was busy","said","Con la persona subito dopo (\"me\") si usa \"told\"."],
["or","Lui ha detto che c'era un problema","He said there was a problem","were","Con \"a problem\" (singolare) si usa \"there was\": accordo."],
["fi","She __ she was tired.","Ha detto che era stanca","said","told|asked|say","Senza la persona dopo si usa \"said\"."],
["fi","He told __ he was busy.","Mi ha detto che era impegnato","me","I|my|to","Dopo \"told\" viene la persona."],
["fi","She asked __ I was okay.","Mi ha chiesto se stavo bene","if|whether","that|what|did","Le domande sì/no si riferiscono con \"if\"."],
["ty","Lui ha detto che faceva freddo","He said it was cold|He said that it was cold","said · cold — serve il soggetto \"it\"","is","In inglese il soggetto è obbligatorio: \"it was cold\"."],
["ty","Lui mi ha detto che era impegnato","He told me he was busy|He told me that he was busy|He said to me he was busy|He said to me that he was busy|He said he was busy|He said that he was busy","told · me · busy — \"tell\" vuole la persona dopo","said","Con \"he\" si usa \"was\" (terza persona), e con la persona dopo, \"told\"."],
["ty","Lei mi ha chiesto dove abitavo","She asked me where I lived|She asked where I lived","asked · where · lived — l'ordine di una frase affermativa","did","In una domanda indiretta l'ordine è quello di una frase affermativa, senza \"did\"."]]},
];
