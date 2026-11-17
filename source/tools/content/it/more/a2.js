/* it-en stage A2: lessons for Italian speakers. English side shared with es-en (parity.js); contrasts follow docs/profiles/it.md §4 and §8;
   practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past continuous: was / were + -ing", blurb:"Quello che stava succedendo in un momento del passato. Serve a descrivere lo sfondo di una storia.", deck:"Emozioni e reazioni", body:`
<p>Il <i>past continuous</i> racconta quello che <b>stava succedendo</b> in un momento del passato. Funziona quasi come «stavo + gerundio»: al posto di <i>am/is/are</i> metti <i>was/were</i> e aggiungi la forma in -ing.</p>
<p>Attenzione all'accordo: <i>I, he, she, it</i> → <b>was</b>; <i>you, we, they</i> → <b>were</b>.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Stavo dormendo}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|Stavamo guardando la TV}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Stava piovendo}}
<h3>Domande</h3>
<p>L'ausiliare <i>was/were</i> va prima del soggetto. Qui non si usa <i>did</i>.</p>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|Che cosa stavi facendo?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Stavi lavorando alle nove?}}
<h3>Con when: qualcosa interrompe l'azione</h3>
<p>L'azione lunga va al <b>past continuous</b>; quella breve che la interrompe va al <b>past simple</b>. È la stessa logica di «stavo cucinando quando hai chiamato».</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Stavo cucinando quando hai chiamato}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Stavo tornando a casa a piedi quando ha cominciato a piovere}}
<h3>L'imperfetto italiano fa due lavori</h3>
<p>«Cucinavo» può descrivere un'azione in corso («cucinavo quando hai chiamato» → <i>I was cooking</i>) oppure un'abitudine del passato («da bambino cucinavo con la nonna»). Il <i>past continuous</i> serve solo per il primo caso. Per le abitudini e per una serie di fatti conclusi si usa il <i>past simple</i>: «Ogni estate andavamo al mare» → <i>Every summer we went to the beach</i>.</p>
<div class="tip">Attenzione: <b>I cooked when you called</b> significa «quando hai chiamato, ho cominciato a cucinare». Per un'azione che era già in corso in quel momento, usa <i>was/were + -ing</i>.</div>`,
check:[["«Che cosa stavi facendo alle nove?» in inglese:",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Con \"you\" si usa \"were\", poi la forma in -ing."],["I was cooking ___ you called. Che cosa va nello spazio?",["when","so","or","than"],0,"«Quando» si dice \"when\"."],["They ___ watching TV. Che cosa va nello spazio?",["was","did","were","are being"],2,"Con \"they\" si usa \"were\": accordo."]],
practice:[
["mc","I ___ sleeping at ten. Che cosa va nello spazio?","was","were","did","am","Con \"I\" il passato di \"be\" è \"was\": accordo."],
["mc","Come si dice «Stavo cucinando quando hai chiamato»?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","L'azione lunga va al past continuous; quella che la interrompe, al past simple."],
["mc","«Che cosa stavi facendo?» in inglese:","What were you doing?","What did you doing?","What was you doing?","What were you do?","Nella domanda l'ausiliare \"were\" va prima del soggetto, poi viene la forma in -ing."],
["mc","They ___ playing soccer. Che cosa va nello spazio?","were","was","did","are","Con \"they\" si usa \"were\": accordo."],
["mc","Come si dice «Stava piovendo»?","It was raining.","Was raining.","It were raining.","It was rain.","In inglese il soggetto è obbligatorio: \"it\" + \"was\" + -ing."],
["or","Mia sorella stava leggendo un libro","My sister was reading a book","were","Con \"my sister\" (terza persona singolare) si usa \"was\": accordo."],
["or","I bambini stavano dormendo","The kids were sleeping","was","Con un soggetto plurale si usa \"were\": accordo."],
["or","Che cosa stavi facendo?","What were you doing","did","Nella domanda l'ausiliare \"were\" va prima del soggetto; non si usa \"did\"."],
["fi","I was __ dinner.","Stavo preparando la cena","cooking|making","cook|cooked|cooks","Dopo \"was\" viene la forma in -ing."],
["fi","What __ you doing?","Che cosa stavi facendo?","were","was|did|does","Con \"you\" si usa \"were\": accordo."],
["fi","I was sleeping __ you called.","Stavo dormendo quando hai chiamato","when","so|than|or","«Quando» si dice \"when\"."],
["ty","Stava piovendo","It was raining","rain — serve il soggetto \"it\"","were","In inglese il soggetto è obbligatorio: \"it\" + \"was\" + -ing."],
["ty","Lui stava lavorando","He was working","work — usa \"he\" e il passato di \"be\"","were","Con \"he\" si usa \"was\", non \"were\": accordo."],
["ty","I bambini stavano giocando?","Were the kids playing|Were the children playing","kids · play — domanda con l'ausiliare davanti","was","Nella domanda l'ausiliare \"were\" va prima del soggetto."]]},
{ id:"will", title:"Will: decisioni sul momento, promesse e previsioni", blurb:"Se decidi sul momento, will; se l'avevi già programmato, going to.", deck:"Due chiacchiere", body:`
<p>La forma è <b>will + verbo</b>, senza <i>to</i> e senza -s. Nel parlato si usa quasi sempre la forma contratta: <b>I'll, you'll, it'll</b>. La negazione è <b>won't</b>.</p>
<p>Il futuro italiano («ti aiuterò») somiglia a <i>will</i>, ma per le offerte e le decisioni prese sul momento l'italiano usa quasi sempre il presente: «Ti aiuto io», «Apro io». In inglese lì serve <i>will</i>: <b>I help you</b> è un calco dall'italiano. Per i progetti già decisi, invece, l'inglese usa <i>be going to</i>. Quindi: <i>will</i> per quello che decidi, offri o prometti sul momento; <i>going to</i> per i progetti che avevi già.</p>
<h3>Decisioni sul momento e offerte</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Per me, la pasta}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Rispondo io / Apro io}}{{ex:I'll help you.|/aɪl ˈhelp ju/|Ti aiuto io}}
<h3>Promesse</h3>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Ti chiamo più tardi}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Non farò tardi}}
<h3>Previsioni e domande</h3>
<p>Nelle domande <i>will</i> va prima del soggetto. E, come sempre, il soggetto è obbligatorio: «Pioverà» → <i>It will rain</i>.</p>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|Andrà tutto bene}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Secondo me pioverà}}{{ex:Will you come?|/wəl ju ˈkʌm/|Verrai?}}
<h3>will o going to</h3>
<div class="tbl"><table><tr><th></th><th>Quando</th><th>Esempio</th></tr><tr><td class="k">will</td><td>decisione sul momento, offerta, promessa</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>progetto già deciso</td><td>I'm going to visit London next month.</td></tr></table></div>
<div class="tip">Errori tipici: <b>I will to go</b>, <b>I'll going</b> e, per offrire aiuto, <b>I help you</b> ✗ → <b>I'll go</b>, <b>I'll help you</b> ✓. Dopo <i>will</i> il verbo non prende mai la -s: <b>She will come</b>, non <i>She will comes</i>.</div>`,
check:[["Squilla il telefono. Come si dice «Rispondo io»?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Una decisione presa sul momento va con \"will\"."],["I ___ be late. («Non farò tardi», come promessa)",["won't","willn't","don't will","not will"],0,"La negazione di \"will\" è \"won't\"."],["Quale frase parla di un progetto già deciso?",["I'll get the door.","I will to visit Lima.","I visit Lima will.","I'm going to visit Lima next month."],3,"Per i progetti già decisi si usa \"be going to\"."]],
practice:[
["mc","Come si dice «Ti aiuto io» (come offerta)?","I'll help you.","I help you.","I'll helping you.","I'll to help you.","Per offrire aiuto l'inglese usa \"will\": «Ti aiuto io» → \"I'll help you\"."],
["mc","Al ristorante decidi sul momento. Come si dice «Per me, la pasta»?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Una decisione presa sul momento va con \"will\"."],
["mc","Come si dice «Non farò tardi» (promessa)?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","\"Will not\" si contrae in \"won't\"."],
["mc","«Verrai?» in inglese:","Will you come?","Do you will come?","Will you coming?","Will come you?","Nella domanda l'ausiliare \"will\" va prima del soggetto."],
["mc","Come si dice «Lei verrà domani»?","She will come tomorrow.","She will comes tomorrow.","She wills come tomorrow.","She will coming tomorrow.","Dopo \"will\" il verbo non prende la -s, nemmeno alla terza persona."],
["or","Mi aiuti? (per chiedere un favore)","Will you help me","Do","Nella domanda l'ausiliare \"will\" va prima del soggetto."],
["or","Domani pioverà?","Will it rain tomorrow","rains","L'ausiliare \"will\" va prima del soggetto, e il verbo non prende la -s della terza persona."],
["or","Ti chiamo più tardi","I'll call you later","calling","Dopo \"will\" il verbo va senza -ing."],
["fi","I __ call you tomorrow.","Ti chiamo domani","will","am|going|do","Una promessa va con \"will\"."],
["fi","I __ forget.","Non lo dimenticherò","won't|will not","don't|not|willn't","La negazione di \"will\" è \"won't\"."],
["fi","__ you help me?","Mi aiuti?","Will|Can|Could|Would","Do|Are|Is","Per chiedere un favore: \"Will you…?\" o \"Can you…?\"."],
["ty","Pioverà domani","It will rain tomorrow|It's going to rain tomorrow","rain · tomorrow — serve il soggetto \"it\"","rains","In inglese il soggetto è obbligatorio: \"It will rain\", non \"Will rain\"."],
["ty","Verrai alla festa?","Will you come to the party|Are you coming to the party|Are you going to come to the party","come · party — domanda con l'ausiliare davanti","Do","Nella domanda l'ausiliare \"will\" va prima del soggetto."],
["ty","Ti aiuto io","I'll help you|I'll help","help · you — un'offerta con \"will\"","helping","Per offrire aiuto l'inglese usa \"will\", non il presente."]]},
{ id:"perfect", title:"Present perfect: le esperienze", blurb:"have + participio passato per quello che hai fatto nella vita. Se dici quando, serve il past simple.", deck:"Viaggi (aeroporto e hotel)", body:`
<p>Il <i>present perfect</i> (<b>have/has + participio passato</b>) parla di esperienze: quello che hai fatto (o non hai mai fatto) <b>nella vita</b>, senza dire quando.</p>
<p>Attenzione: ha la stessa struttura di «ho mangiato», ma non si usa allo stesso modo. In italiano «sono andato» o «l'ho visto» vanno benissimo anche con «ieri» o «l'anno scorso»; in inglese no. Il <i>present perfect</i> serve per le esperienze senza data: appena dici quando, passi al <i>past simple</i>.</p>
<p>E l'ausiliare è sempre <b>have</b>, anche dove l'italiano usa «essere»: «sono stato» → <i>I've been</i>, mai <i>I'm been</i> o <i>I was been</i>.</p>
{{ex:I've been to New York.|/aɪv bɪn tə ˌnuː ˈjɔːrk/|Sono stato a New York}}{{ex:She has visited Canada twice.|/ʃi həz ˈvɪzɪtɪd ˈkænədə ˈtwaɪs/|Ha visitato il Canada due volte}}
<p>Con <i>he, she, it</i> l'ausiliare è <b>has</b> (terza persona); con gli altri soggetti, <b>have</b>.</p>
<h3>ever e never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|Hai mai mangiato il sushi?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Non l'ho mai visto}}
<p>Per rispondere, ripeti l'ausiliare: <b>Yes, I have.</b> / <b>No, I haven't.</b> E nota che «non… mai» in inglese è solo <i>never</i>: una negazione basta.</p>
<h3>Participi passati frequenti</h3>
<div class="tbl"><table><tr><th>Forma base</th><th>Past simple</th><th>Participio passato</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Se dici quando, past simple</h3>
<p>Con <i>yesterday, last year, in 2020</i> o <i>ago</i> (un momento già concluso) si usa il <i>past simple</i>, anche se in italiano dici «sono andato».</p>
{{ex:I went to New York last year.|/aɪ ˈwent tə ˌnuː ˈjɔːrk ˈlæst ˈjɪr/|Sono andato a New York l'anno scorso}}
<div class="tip">Errore tipico: <b>I've been to New York last year.</b> ✗ → <b>I went to New York last year.</b> ✓. Nell'inglese americano si sente anche <i>Did you ever go to New York?</i>, ed è corretto.</div>`,
check:[["«Sei mai stato in Giappone?» in inglese:",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Per le esperienze: \"Have you ever\" + participio passato, e \"been to\" + luogo."],["I ___ never seen that movie. Che cosa va nello spazio?",["am","did","have","was"],2,"La forma è \"have\" + \"never\" + participio passato."],["Quale frase è corretta?",["I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima."],0,"Con \"last year\" (un tempo concluso) si usa il past simple."]],
practice:[
["mc","Come si dice «Sono stato in Giappone»?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","La forma è \"have\" + il participio \"been\", anche se in italiano si dice «sono stato»."],
["mc","Qual è il participio passato di \"see\"?","seen","saw","seed","seeing","see – saw – seen."],
["mc","«Hai mai mangiato il sushi?» in inglese:","Have you ever eaten sushi?","Did you ever eaten sushi?","Have you ever ate sushi?","Do you have eaten sushi?","Per le esperienze: \"Have you ever\" + participio passato (\"eaten\")."],
["mc","Come si dice «Non l'ho mai visto»?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","La forma è \"have\" + \"never\" + participio passato."],
["mc","Con «l'anno scorso», quale frase è corretta?","I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima last year.","Se dici quando, serve il past simple."],
["or","Sei mai stato a Cuba?","Have you ever been to Cuba","Did","Nella domanda l'ausiliare \"have\" va prima del soggetto."],
["or","Lei ha visitato il Perù due volte","She has visited Peru twice","have","Con \"she\" l'ausiliare è \"has\": terza persona."],
["or","Non ho mai visto la neve","I've never seen snow","the","Quando parli di qualcosa in generale, l'inglese non mette l'articolo: \"snow\"."],
["fi","Have you ever __ to Miami?","Sei mai stato a Miami?","been","be|went|go","Dopo \"have\" viene il participio \"been\"."],
["fi","I've __ eaten that.","Non l'ho mai mangiato","never","ever|no|not never","«Non… mai» è solo \"never\": in inglese basta una negazione."],
["fi","My brother __ been to Chile.","Mio fratello è stato in Cile","has","have|is|did","Con \"my brother\" l'ausiliare è \"has\" (terza persona)."],
["ty","Sei mai stato in Giappone?","Have you ever been to Japan|Have you been to Japan|Did you ever go to Japan","ever · been · Japan — domanda con l'ausiliare davanti","went","Nella domanda l'ausiliare \"have\" va prima del soggetto."],
["ty","Mia sorella non ha mai provato il sushi","My sister has never tried sushi|My sister has never eaten sushi","never · tried · sushi — il soggetto è alla terza persona","have","Con \"my sister\" (terza persona) l'ausiliare è \"has\"."],
["ty","Sono andato in Messico l'anno scorso","I went to Mexico last year","went · Mexico · last year — un tempo concluso","have been","Con \"last year\" (un tempo concluso) si usa il past simple, non il present perfect."]]},
{ id:"modals", title:"have to, must, should, might: obbligo, consiglio e possibilità", blurb:"Dovere, dovresti, può darsi che. E la grande trappola: mustn't non è don't have to.", deck:"Salute ed emergenze", body:`
<p>Quattro forme per parlare di obbligo, consiglio e possibilità. Dopo <i>must, should</i> e <i>might</i> viene il <b>verbo senza to</b>: <i>You should go</i>, non <i>You should to go</i>. I verbi modali (<i>must, should, might</i>) non prendono mai la -s: <i>She should rest</i>.</p>
<h3>have to: dovere</h3>
<p>È la forma più comune nella conversazione. Con <i>he, she, it</i> diventa <b>has to</b> (terza persona). Le domande e le negazioni usano l'ausiliare <i>do/does</i>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Domani devo lavorare}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Lei deve andare via adesso}}{{ex:Do I have to pay?|/də aɪ ˈhæf tə ˈpeɪ/|Devo pagare?}}
<h3>mustn't e don't have to non sono la stessa cosa</h3>
<p>In italiano <i>must</i> e <i>have to</i> si traducono tutti e due con «dovere», ma alla forma negativa cambiano del tutto. Attenzione a «non devi»: nel parlato a volte vuol dire «non c'è bisogno», ma <i>you mustn't</i> è sempre un divieto. Per «non c'è bisogno» si usa <i>don't have to</i>.</p>
<div class="tbl"><table><tr><th>Inglese</th><th>Significato</th></tr><tr><td class="k">You don't have to come.</td><td>Non c'è bisogno che tu venga (non è necessario)</td></tr><tr><td class="k">You mustn't smoke here.</td><td>Non devi fumare qui (è vietato)</td></tr></table></div>
<h3>should: dovresti</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Dovresti andare dal medico}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Non dovresti preoccuparti}}{{ex:Should I call him?|/ʃəd aɪ ˈkɔːl hɪm/|Dovrei chiamarlo?}}
<h3>might: può darsi che</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Potrebbe piovere}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Può darsi che io arrivi tardi}}
<div class="tip">Errori tipici: <b>You should to go</b>, <b>It might rains</b>, <b>She have to work</b> ✗ → <b>You should go</b>, <b>It might rain</b>, <b>She has to work</b> ✓.</div>`,
check:[["«Non c'è bisogno che tu venga» in inglese:",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"«Non c'è bisogno» è \"don't have to\"."],["Per dare un consiglio: You ___ see a doctor.",["might","have","should","must to"],2,"Un consiglio va con \"should\" + verbo."],["She ___ to work today. Che cosa va nello spazio?",["have","must","should","has"],3,"Con \"she\" si usa \"has to\": terza persona."]],
practice:[
["mc","Come si dice «Domani devo lavorare»?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","La forma è \"have to\" + verbo."],
["mc","Come si dice «Non c'è bisogno che tu venga»?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","«Non c'è bisogno» è \"don't have to\"."],
["mc","Come si dice «Dovresti andare dal medico»?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","Dopo \"should\" il verbo va senza \"to\"."],
["mc","Come si dice «Potrebbe piovere»?","It might rain.","It might rains.","It might to rain.","It mights rain.","Dopo \"might\" il verbo va senza -s e senza \"to\"."],
["mc","Come si dice «Non devi fumare qui» (è vietato)?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Il divieto è \"must not\" (\"mustn't\")."],
["or","Lei deve lavorare oggi","She has to work today","have","Con \"she\" si usa \"has to\": terza persona."],
["or","Devo pagare?","Do I have to pay","Am","La domanda con \"have to\" ha bisogno dell'ausiliare \"do\"."],
["or","Dovresti andare da un medico","You should see a doctor","to","Dopo \"should\" il verbo va senza \"to\"."],
["fi","She __ to study tonight.","Lei deve studiare stasera","has","have|must|should","Con \"she\" si usa \"has to\": terza persona."],
["fi","You __ have to pay.","Non c'è bisogno che tu paghi","don't|do not","must not|not|aren't","«Non c'è bisogno» è \"don't have to\", con l'ausiliare \"do\"."],
["fi","It __ rain tomorrow.","Domani potrebbe piovere","might|may|could","must to|has to|should to","Per una possibilità si usa \"might\"."],
["ty","Lui deve lavorare domani? (usa \"have to\")","Does he have to work tomorrow","have to · work · tomorrow — domanda con l'ausiliare","Has","Con \"he\" la domanda usa l'ausiliare \"does\" e poi \"have to\", senza -s."],
["ty","Non c'è bisogno che tu venga (usa \"have to\")","You don't have to come","have to · come — nel senso di «non è necessario»","mustn't","«Non c'è bisogno» è \"don't have to\", con l'ausiliare \"do\"; \"mustn't\" è un divieto."],
["ty","Dovresti andare dal medico","You should see a doctor|You should go to a doctor|You should go to the doctor","should · see · doctor — il verbo va senza \"to\"","to","Dopo \"should\" il verbo va senza \"to\"."]]},
{ id:"to-ing", title:"to o -ing dopo un verbo: want to, enjoy -ing", blurb:"Want vuole to; enjoy vuole -ing. Dipende dal verbo, e dopo una preposizione c'è sempre -ing.", deck:"Due chiacchiere", body:`
<p>In italiano dopo un verbo viene l'infinito: «voglio andare», «mi piace cucinare». In inglese dipende dal primo verbo: alcuni vogliono <b>to + verbo</b>, altri la <b>forma in -ing</b>. Per questo <i>I enjoy to cook</i> è uno degli errori più comuni.</p>
<div class="tbl"><table><tr><th>Con to</th><th>Con -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + verbo</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Voglio andare a casa}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Devo studiare}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Vorrei ordinare}}{{ex:She decided to learn English.|/ʃi dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Ha deciso di imparare l'inglese}}
<h3>Forma in -ing</h3>
<p>Questi verbi vogliono -ing per regola, non per il significato: <i>enjoy</i> (amare fare qualcosa), <i>finish</i> (finire di), <i>mind</i> (dare fastidio, di solito in domande e negazioni).</p>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Mi piace molto cucinare}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|Ho finito di lavorare}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Non mi dà fastidio aspettare}}
<h3>Dopo una preposizione, sempre -ing</h3>
<p>Dove l'italiano mette l'infinito dopo una preposizione («prima di partire», «interessato a imparare»), l'inglese usa la forma in -ing.</p>
{{ex:before leaving|/bɪfɔːr ˈliːvɪŋ/|prima di partire}}{{ex:I'm interested in learning English.|/aɪm ˈɪntrəstɪd ɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ/|Mi interessa imparare l'inglese}}{{ex:I'm looking forward to seeing you.|/aɪm ˈlʊkɪŋ ˈfɔːrwərd tə ˈsiːɪŋ ju/|Non vedo l'ora di vederti}}
<h3>want + persona + to</h3>
<p>«Voglio che tu venga» non è <i>I want that you come</i>, ma <b>I want you to come</b>.</p>
{{ex:I want you to come.|/aɪ ˈwɑːnt ju tə ˈkʌm/|Voglio che tu venga}}
<p><i>like, love</i> e <i>start</i> accettano tutte e due le forme.</p>
<div class="tip">Errori tipici: <b>I want go</b>, <b>I enjoy to cook</b>, <b>before to leave</b> ✗ → <b>I want to go</b>, <b>I enjoy cooking</b>, <b>before leaving</b> ✓. E non dimenticare la -s: <b>She enjoys cooking</b>.</div>`,
check:[["I want ___ home. Che cosa va nello spazio?",["go","going","to go","to going"],2,"Dopo \"want\" viene \"to\" + verbo."],["I enjoy ___ movies. Che cosa va nello spazio?",["watching","to watch","watch","to watching"],0,"Dopo \"enjoy\" viene la forma in -ing."],["«Vorrei ordinare» in inglese:",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Dopo \"would like\" viene \"to\" + verbo."]],
practice:[
["mc","I need ___ now. Che cosa va nello spazio?","to go","going","go","to going","Dopo \"need\" viene \"to\" + verbo."],
["mc","I enjoy ___. Che cosa va nello spazio?","cooking","to cook","cook","to cooking","Dopo \"enjoy\" viene la forma in -ing: \"I enjoy to cook\" è sbagliato."],
["mc","Come si dice «Vorrei ordinare»?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Dopo \"would like\" viene \"to\" + verbo."],
["mc","Come si dice «Non vedo l'ora di vederti»?","I'm looking forward to seeing you.","I'm looking forward to see you.","I'm looking forward seeing you.","I'm looking forward for see you.","Qui \"to\" è una preposizione, quindi segue la forma in -ing."],
["mc","Come si dice «Voglio che tu venga»?","I want you to come.","I want that you come.","I want you come.","I want that you to come.","«Volere che qualcuno faccia qualcosa» è \"want\" + persona + \"to\"."],
["or","A lei piace molto cucinare","She enjoys cooking","enjoy","Con \"she\", \"enjoys\" prende la -s (terza persona); poi viene la forma in -ing."],
["or","Vuoi venire?","Do you want to come","Are","Al presente la domanda ha bisogno dell'ausiliare \"do\"."],
["or","Mi interessa imparare l'inglese","I'm interested in learning English","learn","Dopo una preposizione (\"in\") viene la forma in -ing."],
["fi","I want __ a coffee.","Voglio prendere un caffè","to have|to drink|to get","have|having|drinking","Dopo \"want\" viene \"to\" + verbo."],
["fi","She enjoys __.","A lei piace molto nuotare","swimming","to swim|swim|swims","\"Enjoy\" vuole la forma in -ing."],
["fi","I decided __ English.","Ho deciso di studiare l'inglese","to study|to learn","study|studying|studied","Dopo \"decide\" viene \"to\" + verbo."],
["ty","Ti piace cucinare?","Do you like cooking|Do you like to cook","like · cook — domanda con l'ausiliare","Are","Al presente la domanda ha bisogno dell'ausiliare \"do\"; \"like\" accetta -ing o \"to\"."],
["ty","A lei piace molto leggere (usa \"enjoy\")","She enjoys reading","enjoy · read — con la -s e con -ing","enjoy","Con \"she\", \"enjoys\" prende la -s (terza persona), e poi viene la forma in -ing."],
["ty","Voglio che tu venga","I want you to come","want · you · come — la frase va senza \"that\"","that","«Voglio che tu venga» si dice \"I want you to come\", senza \"that\"."]]},
{ id:"articles-2", title:"Articoli 2: in generale, niente the", blurb:"Life is hard, I love dogs: in inglese, quando parli in generale, l'articolo non c'è. E un ripasso di quando the serve.", deck:"Viaggi (aeroporto e hotel)", body:`
<p>Questa è la grande lezione sugli articoli per chi parla italiano. In italiano, quando si parla in generale, l'articolo c'è: «<b>La</b> vita è dura», «Adoro <b>i</b> cani», «<b>Il</b> caffè è caro». In inglese, quando parli in generale, <b>l'articolo non c'è</b>.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vita è dura}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Adoro i cani}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|Il caffè è caro}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|I cani sono carini}}
<p>Lo stesso vale per i nomi astratti (<i>love, music, time</i>) e per i plurali in generale (<i>people, cars</i>). E ricorda l'accordo: un nome non numerabile o singolare va con <i>is</i> (<i>Coffee is…</i>); un plurale con <i>are</i> (<i>Dogs are…</i>).</p>
<h3>In generale o in particolare</h3>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|Mi piacciono i cani (in generale)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|I cani di questo parco sono carini (proprio quei cani)}}
<div class="tip"><b>I like the dogs</b> significa «mi piacciono quei cani». Se parli in generale, di' <b>I like dogs</b>.</div>
<h3>Quando the serve (quasi come in italiano)</h3>
<div class="tbl"><table><tr><th>Caso</th><th>Esempio</th></tr><tr><td>Cose uniche</td><td class="k">the sun, the internet</td></tr><tr><td>Strumenti musicali</td><td class="k">play the piano</td></tr><tr><td>Fiumi e oceani</td><td class="k">the Amazon, the Pacific</td></tr><tr><td>Paesi con nome plurale o di unione</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Suono il pianoforte}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Lei viene dagli Stati Uniti}}
<h3>Senza articolo</h3>
<p>Con gli sport e i pasti l'inglese fa come l'italiano: niente articolo («giocare a calcio», «fare colazione»). Con i paesi, invece, l'italiano mette l'articolo e l'inglese no: «<b>l'</b>Italia è bellissima» → <i>Italy is beautiful</i>.</p>
<div class="tbl"><table><tr><th>Caso</th><th>Esempio</th></tr><tr><td>Sport</td><td class="k">play soccer («giocare a calcio»; in inglese britannico football)</td></tr><tr><td>Pasti</td><td class="k">have breakfast («fare colazione»)</td></tr><tr><td>Quasi tutti i paesi</td><td class="k">Italy («l'Italia»), France («la Francia»)</td></tr></table></div>
{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Gioco a calcio}}{{ex:Italy is beautiful.|/ˈɪtəli ɪz ˈbjuːtɪfl/|L'Italia è bellissima}}`,
check:[["I play ___ soccer. Che cosa va nello spazio?",["a","the","an","(nessun articolo)"],3,"Gli sport non hanno articolo, come in italiano: «giocare a calcio» è \"play soccer\"."],["She's from ___ United States. Che cosa va nello spazio?",["the","a","an","(nessun articolo)"],0,"\"United States\" vuole \"the\"."],["«I cani sono carini» (in generale) in inglese:",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"In generale non c'è articolo, e il nome va al plurale."]],
practice:[
["mc","Come si dice «La vita è dura»?","Life is hard.","The life is hard.","A life is hard.","Life are hard.","In inglese, quando parli in generale, non c'è articolo."],
["mc","Come si dice «Adoro la musica»?","I love music.","I love the music.","I love a music.","I love musics.","«La musica» in generale va senza articolo e senza -s."],
["mc","Come si dice «Gioco a calcio»?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Gli sport non hanno articolo, come in italiano."],
["mc","Come si dice «I gatti sono carini» (in generale)?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","In generale non c'è articolo, e il nome va al plurale."],
["mc","She's from ___ United States. Che cosa va nello spazio?","the","a","an","some","\"United States\" vuole \"the\"."],
["or","I cani sono carini","Dogs are cute","is The","In generale non c'è articolo, e con il plurale \"dogs\" si usa \"are\": accordo."],
["or","Il caffè è caro","Coffee is expensive","are The","In generale non c'è articolo, e \"coffee\" (non numerabile) va con \"is\": accordo."],
["or","Suono il pianoforte","I play the piano","a","Con gli strumenti musicali si usa \"the\", come in italiano."],
["fi","I speak __.","Parlo inglese","English","the English|an English|a English","Le lingue non hanno articolo."],
["fi","The sun rises in __ east.","Il sole sorge a est","the","a|an|some","Con i punti cardinali si usa \"the\": \"in the east\", anche se in italiano si dice «a est»."],
["fi","I love __.","Adoro la musica","music","the musics|a music|musics","«La musica» in generale va senza articolo, e senza -s perché è non numerabile."],
["ty","La vita è dura","Life is hard|Life is difficult","life · hard — la frase va senza articolo","The","In generale non c'è articolo, e \"life\" va con \"is\": accordo."],
["ty","Lei suona la chitarra","She plays the guitar|She plays guitar","play · guitar — il soggetto è \"she\"","play","Con \"she\", \"plays\" prende la -s (terza persona); con gli strumenti si usa \"the\"."],
["ty","Mio fratello adora la musica","My brother loves music","brother · love · music — la frase va senza articolo","the","Con \"my brother\" (terza persona) il verbo prende la -s: \"loves\". La musica in generale va senza articolo."]]},
{ id:"first-conditional", title:"Periodo ipotetico di primo tipo: if + presente, will", blurb:"«Se piove, resto a casa.» Dopo if va il presente, mai will, anche se in italiano puoi dire «se pioverà».", deck:"Lavoro ed e-mail", body:`
<p>Parla di cose che possono succedere davvero. La forma è <b>if + presente, will + verbo</b>. Qui l'italiano inganna: si dice benissimo «Se pioverà, resterò a casa», con il futuro dopo «se». In inglese no: dopo <i>if</i> non va mai <i>will</i>, e <b>If it will rain</b> è un calco dall'italiano.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|Se piove (se pioverà), resto a casa}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Se non ti sbrighi, perdi l'autobus}}
<p>Attenzione alla terza persona: anche dopo <i>if</i> il presente prende la -s (<i>If it rains</i>, <i>If she calls</i>), e la negazione usa l'ausiliare <i>don't/doesn't</i>.</p>
<h3>Puoi invertire l'ordine</h3>
<p>Se <i>if</i> sta nella seconda parte, la virgola non serve.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Ti aiuto se ho tempo}}
<h3>Con l'imperativo</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Se fai tardi, chiamami}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Se hai bisogno di aiuto, fammi sapere}}
<h3>when: quando è sicuro</h3>
<p>Se sai che succederà, usa <i>when</i> al posto di <i>if</i>. Anche dopo <i>when</i> niente <i>will</i>, sebbene in italiano si dica «quando arriverò».</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Quando arrivo (arriverò) a casa, ti chiamo}}
<div class="tip">Errori tipici: <b>If it will rain, …</b> e <b>When I'll get home, …</b> ✗ → <b>If it rains, …</b> e <b>When I get home, …</b> ✓. E non dimenticare la -s: <b>If she calls</b>, non <i>If she call</i>.</div>`,
check:[["If it ___ tomorrow, I'll stay home. Che cosa va nello spazio?",["will rain","rains","rained","raining"],1,"Dopo \"if\" va il presente, anche se in italiano si può dire «se pioverà»."],["If you study, you ___ pass. Che cosa va nello spazio?",["pass will","passing","will pass","passed"],2,"La conseguenza va con \"will\" + verbo."],["Quale frase è corretta?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Dopo \"if\" il presente; nella conseguenza, \"will\"."]],
practice:[
["mc","If it ___, I'll stay home. Che cosa va nello spazio?","rains","will rain","rained","is rain","Dopo \"if\" va il presente con la -s: \"it rains\"."],
["mc","If you're late, ___ me. Che cosa va nello spazio?","call","will calling","calls","to call","L'imperativo comincia con il verbo nella forma base."],
["mc","Come si dice «Ti aiuto se avrò tempo»?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Dopo \"if\" non va \"will\", anche se in italiano dici «se avrò»."],
["mc","Come si dice «Se non ti sbrighi, perdi l'autobus»?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Dopo \"if\" va il presente alla forma negativa: \"don't\"."],
["mc","Come si dice «Quando arriverò a casa, ti chiamo»?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Anche dopo \"when\" va il presente, non \"will\"."],
["or","Se piove, resto a casa","If it rains I'll stay home","rain will","Dopo \"if\" va il presente, e con \"it\" il verbo prende la -s: terza persona."],
["or","Se lei chiama, fammelo sapere","If she calls let me know","call","Con \"she\", \"calls\" prende la -s (terza persona), anche dopo \"if\"."],
["or","Se hai tempo, chiamami","If you have time call me","will","Dopo \"if\" non va \"will\"."],
["fi","If it __ tomorrow, we'll cancel.","Se domani piove, annulliamo","rains","will rain|rained|raining","Dopo \"if\" va il presente; con \"it\", \"rains\" (terza persona)."],
["fi","If you study, you __ pass.","Se studi, passerai l'esame","will|can|might","are|did|passing","La conseguenza va con \"will\" + verbo."],
["fi","__ you need help, call me.","Se hai bisogno di aiuto, chiamami","If|When","So|But|Because","«Se» si dice \"if\"."],
["ty","Se piove, prendo un taxi","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","rain · take · taxi — serve il soggetto \"it\"","will rain","Dopo \"if\" va il presente, e \"it rains\" prende la -s della terza persona."],
["ty","Se lei non viene, ti chiamo","If she doesn't come I'll call you|I'll call you if she doesn't come","come · call — negazione con l'ausiliare","don't","Con \"she\" la negazione usa l'ausiliare \"doesn't\"."],
["ty","Ti aiuto se ho tempo","I'll help you if I have time|I'll help if I have time|If I have time I'll help you|If I have time I'll help","help · if · time — dopo \"if\" non si usa \"will\"","will","Dopo \"if\" non va \"will\"."]]},
{ id:"relative", title:"who, that, which: le proposizioni relative", blurb:"In italiano è sempre «che»; in inglese who per le persone, which o that per le cose.", deck:"Acquisti e pagamenti", body:`
<p>L'italiano usa <b>che</b> per tutto: «l'amico <b>che</b> abita qui», «il libro <b>che</b> ho comprato». In inglese il pronome relativo dipende da che cosa descrivi:</p>
<div class="tbl"><table><tr><th>Per</th><th>Pronome</th><th>Esempio</th></tr><tr><td>persone</td><td class="k">who (o that)</td><td>the man who lives next door</td></tr><tr><td>cose</td><td class="k">which (o that)</td><td>the phone that I want</td></tr><tr><td>luoghi</td><td class="k">where</td><td>the cafe where we met</td></tr></table></div>
<h3>Persone: who</h3>
{{ex:I have a friend who speaks Japanese.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˌdʒæpəˈniːz/|Ho un'amica che parla giapponese}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|l'uomo che abita qui accanto}}
<p>Guarda l'accordo: <i>the man who <b>lives</b></i>. Il verbo si accorda con la persona di cui parli: qui è terza persona, quindi prende la -s.</p>
<h3>Cose: which o that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|il libro che ho comprato}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|Questo è il cellulare che voglio}}{{ex:the bus which goes downtown|/ðə ˈbʌs wɪtʃ ˈgoʊz ˌdaʊnˈtaʊn/|l'autobus che va in centro}}
<h3>In inglese puoi togliere il relativo</h3>
<p>In italiano il «che» non si toglie mai. In inglese, se dopo viene un soggetto + verbo (<i>we saw</i>), puoi togliere <i>that</i>, e nella conversazione quasi sempre si toglie.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|Il film che abbiamo visto era bellissimo}}
<p>Ma se il relativo è il soggetto (<i>who lives</i>), non si può togliere: <i>the man lives next door</i> non vuol dire «l'uomo che abita qui accanto».</p>
<h3>Luoghi: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|il bar dove ci siamo conosciuti}}
<div class="tip">Non usare <i>what</i> per «che»: <b>the book what I bought</b> ✗ → <b>the book (that) I bought</b> ✓. <i>What</i> corrisponde a «quello che, ciò che»: <i>I know what you want</i> («so quello che vuoi»).</div>`,
check:[["I have a friend ___ lives in Bogota. Che cosa va nello spazio?",["which","who","what","he"],1,"Per le persone si usa \"who\"."],["«il libro che ho comprato» in inglese:",["the book who I bought","the book what I bought","the book that I bought","the book that I bought it"],2,"Per le cose: \"that\" o \"which\"; mai \"what\"."],["Quale frase è corretta?",["The man which lives next door is kind.","The man what lives next door is kind.","The man lives next door is kind.","The man who lives next door is kind."],3,"Per le persone si usa \"who\"; e qui il relativo è il soggetto, quindi non si può togliere."]],
practice:[
["mc","I have a friend ___ speaks English. Che cosa va nello spazio?","who","which","what","she","Per le persone si usa \"who\"."],
["mc","Come si dice «il libro che ho comprato»?","the book that I bought","the book who I bought","the book what I bought","the book that I bought it","Per le cose: \"that\" o \"which\"; mai \"what\"."],
["mc","Come si dice «l'uomo che abita qui accanto»?","the man who lives next door","the man who live next door","the man which lives next door","the man what lives next door","Persona → \"who\", e \"lives\" si accorda con \"the man\" (terza persona)."],
["mc","This is the phone ___ I want. Che cosa va nello spazio?","that","who","what","it","Per le cose si usa \"that\"."],
["mc","Come si dice «il film che abbiamo visto» (senza relativo)?","the movie we saw","the movie what we saw","the movie who we saw","the movie we saw it","Se dopo vengono soggetto + verbo, puoi togliere \"that\"."],
["or","Ho un'amica che cucina","I have a friend who cooks","cook","Con \"a friend\" (terza persona), \"cooks\" prende la -s."],
["or","È l'uomo che abita qui","He's the man who lives here","live","Il verbo si accorda con \"the man\": terza persona, \"lives\"."],
["or","Questo è il libro che ho comprato","This is the book I bought","what","Non usare \"what\" per «che»; qui puoi togliere il relativo."],
["fi","the man __ lives here","l'uomo che abita qui","who|that","what|he|which","Per le persone: \"who\" (o \"that\")."],
["fi","the book __ I read","il libro che ho letto","that|which","who|what|it","Per le cose: \"that\" o \"which\"."],
["fi","the cafe __ we met","il bar dove ci siamo conosciuti","where","who|what|it","Per i luoghi si usa \"where\"."],
["ty","Lei ha un'amica che parla giapponese","She has a friend who speaks Japanese|She has a friend that speaks Japanese","friend · who · speak Japanese — con la terza persona","have","Con \"she\" si usa \"has\", e \"speaks\" si accorda con \"a friend\": terza persona."],
["ty","Il film che abbiamo visto era bellissimo (usa \"great\")","The movie we saw was great|The movie that we saw was great|The movie we saw was amazing|The movie that we saw was amazing","movie · we saw · great — il relativo è facoltativo","were","Puoi togliere \"that\", e con \"the movie\" (singolare) si usa \"was\": accordo."],
["ty","Questo è il telefono che voglio","This is the phone I want|This is the phone that I want|This is the phone which I want","phone · I want — il relativo è facoltativo","what","Puoi togliere \"that\": \"the phone I want\"."]]},
{ id:"make-do", title:"make o do, say o tell", blurb:"«Fare» può essere make o do, e «dire» può essere say o tell. Impara le combinazioni più comuni.", deck:"Make e do", body:`
<p>In italiano «fare» va bene quasi per tutto. In inglese ci sono due verbi: <b>make</b> (creare, produrre qualcosa) e <b>do</b> (svolgere un compito o un'attività). La regola aiuta, ma la cosa più utile è imparare le combinazioni fisse.</p>
<div class="tbl"><table><tr><th>make</th><th>do</th></tr><tr><td class="k">a mistake, a decision, friends, dinner, money, a plan</td><td class="k">homework, the dishes, business, exercise, a favor, your best</td></tr></table></div>
<h3>make: creare o produrre</h3>
{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|Ho fatto un errore}}{{ex:We need to make a decision.|/wi ˈniːd tə ˈmeɪk ə dɪˈsɪʒn/|Dobbiamo prendere una decisione}}{{ex:She makes friends easily.|/ʃi ˈmeɪks ˈfrendz ˈiːzəli/|Fa amicizia facilmente}}{{ex:I'll make dinner.|/aɪl ˈmeɪk ˈdɪnər/|Preparo io la cena}}
<h3>do: compiti e attività</h3>
{{ex:I do my homework after school.|/aɪ ˈduː maɪ ˈhoʊmwɜːrk æftər ˈskuːl/|Faccio i compiti dopo la scuola}}{{ex:He does the dishes every day.|/hi ˈdʌz ðə ˈdɪʃɪz ˈevri ˈdeɪ/|Lui lava i piatti tutti i giorni}}{{ex:We do business in Italy.|/wi ˈduː ˈbɪznəs ɪn ˈɪtəli/|Facciamo affari in Italia}}{{ex:Can you do me a favor?|/kən ju ˈduː mi ə ˈfeɪvər/|Mi fai un favore?}}
<p>Attenzione: <i>do</i> è anche l'ausiliare delle domande, quindi a volte compare due volte. Con <i>he, she, it</i> l'ausiliare è <b>does</b> (terza persona) e il verbo principale resta <i>do</i>.</p>
{{ex:What does she do?|/ˈwʌt dəz ʃi ˈduː/|Lei che lavoro fa?}}
<h3>Quando «fare» non è né make né do</h3>
<p>Molte espressioni con «fare» in inglese usano un altro verbo. Tradurle parola per parola è un errore tipico:</p>
<div class="tbl"><table><tr><th>Italiano</th><th>Inglese</th></tr><tr><td>fare una foto</td><td class="k">take a photo</td></tr><tr><td>fare colazione</td><td class="k">have breakfast</td></tr><tr><td>fare la doccia</td><td class="k">take a shower</td></tr><tr><td>fare una domanda</td><td class="k">ask a question</td></tr><tr><td>fare una passeggiata</td><td class="k">take a walk</td></tr></table></div>
{{ex:Can I ask a question?|/kən aɪ ˈæsk ə ˈkwestʃən/|Posso fare una domanda?}}
<h3>say o tell</h3>
<p>Anche «dire» si divide in due. <b>tell</b> vuole la persona subito dopo (<i>tell me</i>); <b>say</b> no, oppure la vuole con <i>to</i> (<i>say to me</i>).</p>
{{ex:She said hello.|/ʃi ˈsed həˈloʊ/|Ha detto ciao}}{{ex:He told me the truth.|/hi ˈtoʊld mi ðə ˈtruːθ/|Mi ha detto la verità}}{{ex:Tell me your name.|/ˈtel mi jʊr ˈneɪm/|Dimmi come ti chiami}}{{ex:What did he say?|/ˈwʌt dɪd hi ˈseɪ/|Che cosa ha detto?}}
<div class="tip">Errori tipici: <b>do a mistake</b>, <b>make homework</b>, <b>make a photo</b>, <b>He said me</b> ✗ → <b>make a mistake</b>, <b>do homework</b>, <b>take a photo</b>, <b>He told me</b> ✓.</div>`,
check:[["«Ho fatto un errore» in inglese:",["I did a mistake.","I made a mistake.","I had a mistake.","I committed a mistake."],1,"«Fare un errore» è \"make a mistake\"."],["«Mi ha detto la verità» in inglese:",["He told me the truth.","He said me the truth.","He told to me the truth.","He say me the truth."],0,"Con la persona subito dopo (\"me\") si usa \"tell\": \"told me\"."],["He ___ the dishes every night. Che cosa va nello spazio?",["makes","make","does","do"],2,"Le faccende di casa vanno con \"do\", e con \"he\" diventa \"does\" (terza persona)."]],
practice:[
["mc","Come si dice «prendere una decisione»?","make a decision","do a decision","get a decision","say a decision","In italiano una decisione si prende; in inglese si dice \"make a decision\"."],
["mc","Come si dice «fare i compiti»?","do homework","make homework","do homeworks","make a homework","I compiti vanno con \"do\", e \"homework\" è non numerabile."],
["mc","Come si dice «fare amicizia»?","make friends","do friends","make a friends","do the friends","Creare un rapporto è \"make friends\"."],
["mc","Come si dice «Lei mi ha detto il suo nome»?","She told me her name.","She said me her name.","She told to me her name.","She say me her name.","Con la persona subito dopo (\"me\") si usa \"told\"."],
["mc","«Lei che lavoro fa?» in inglese:","What does she do?","What does she does?","What she does?","What do she do?","La domanda usa l'ausiliare \"does\" (terza persona) e il verbo principale \"do\"."],
["or","Lei lava i piatti","She does the dishes","do makes","Le faccende di casa vanno con \"do\"; con \"she\" diventa \"does\" (terza persona)."],
["or","Che cosa ha detto lui?","What did he say","said","Nella domanda al passato c'è l'ausiliare \"did\", e il verbo torna a \"say\"."],
["or","Lui mi ha detto la verità","He told me the truth","said","Con la persona subito dopo (\"me\") si usa \"tell\"."],
["fi","I __ a mistake.","Ho fatto un errore","made","did|do|said","«Fare un errore» è \"make a mistake\"."],
["fi","Can you __ me a favor?","Mi fai un favore?","do","make|tell|say","Un favore va con \"do\"."],
["fi","Please __ me your name.","Per favore, dimmi come ti chiami","tell","say|make|do","Con la persona subito dopo (\"me\") si usa \"tell\"."],
["ty","Lui fa i compiti tutte le sere","He does his homework every night|He does homework every night|He does his homework every evening","homework · every night — soggetto alla terza persona","makes","I compiti vanno con \"do\", e con \"he\" diventa \"does\" (terza persona)."],
["ty","Hai preso una decisione?","Did you make a decision|Have you made a decision","make · decision — domanda con l'ausiliare","do","Nella domanda al passato l'ausiliare \"did\" va prima del soggetto, e «decisione» va con \"make\"."],
["ty","Lei mi ha detto il suo nome","She told me her name|She said her name","told · name — \"tell\" vuole la persona dopo","said","Con la persona subito dopo (\"me\") si usa \"tell\"."]]},
];
