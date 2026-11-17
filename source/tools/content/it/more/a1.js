/* it-en stage A1: lessons for Italian speakers. Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/it.md §4 and §8; practice sets follow the verb-core standing rule (§7). English side as es-en except false-friends (§8). */
module.exports = [
{ id:"it-there", title:"it e there: il soggetto che l'italiano non dice", blurb:"«Piove», «È tardi», «C'è un bar qui vicino»: in inglese serve sempre un soggetto, e quel soggetto è it o there.", deck:"Due chiacchiere", body:`
<p>In italiano dici «Piove», «È importante» o «Fa freddo» senza nessun soggetto. In inglese non funziona: <b>ogni frase ha bisogno di un soggetto</b>. Quando nessuno compie l'azione, si usano due parole che occupano solo quel posto: <b>it</b> e <b>there</b>.</p>
<h3>Tempo, ore e opinioni: It</h3>
<p>Qui <i>it</i> non significa «esso»: tiene solo il posto del soggetto. Attenzione anche a «fa freddo»: in inglese il tempo non si «fa», si «è». Si dice <i>It's cold</i>, mai <i>It makes cold</i>. E una frase non comincia mai con <i>Is…</i>, a meno che non sia una domanda.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Oggi fa freddo}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Sono le tre}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Piove / Sta piovendo}}{{ex:It's important to sleep.|/ɪts ɪmˈpɔːrtnt tə ˈsliːp/|È importante dormire}}
<h3>«C'è / ci sono» = There is / There are</h3>
<p>Qui l'italiano ti aiuta: <i>ci</i> corrisponde più o meno a <i>there</i>, e come in «c'è / ci sono» il verbo si accorda con quello che viene dopo: <b>There is</b> + singolare, <b>There are</b> + plurale. Nel parlato <i>There is</i> diventa <i>There's</i>.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|C'è un bar qui vicino}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Ci sono due stanze}}
<h3>Domande e frasi negative</h3>
<p>Nella domanda <i>is</i> o <i>are</i> passa davanti a <i>there</i>: «C'è un bagno?» è <i>Is there a bathroom?</i></p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|C'è un bagno qui?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Ci sono posti liberi?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Oggi non c'è l'autobus}}
<h3>Non confondere have con there is</h3>
<p>«Avere» è <i>have</i>; «esserci» (qualcosa si trova in un posto) è <i>there is</i>. «C'è molta gente» non è <i>Has many people</i> e nemmeno <i>Is many people</i>: è <i>There are many people</i>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Ho la macchina}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|C'è una macchina fuori}}
<div class="tip">Errori più comuni: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ · <b>It makes cold.</b> ✗ → <b>It's cold.</b> ✓ · <b>Is important.</b> ✗ → <b>It's important.</b> ✓ · <b>There are a cafe.</b> ✗ → <b>There's a cafe.</b> ✓</div>`,
check:[["Come si dice «Oggi fa caldo»?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Per il tempo l'inglese ha bisogno di un soggetto: \"it\"."],["There ___ three people. Che cosa va nello spazio?",["is","are","have","be"],1,"\"Three people\" è plurale, quindi \"there are\"."],["Come si dice «C'è un bagno qui?»?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Per chiedere se c'è qualcosa: \"Is there a…?\"."]],
practice:[
["mc","Come si dice «Sta piovendo»?","It's raining.","Is raining.","There is raining.","Rain is.","Per il tempo il soggetto è \"it\": in inglese il soggetto è obbligatorio."],
["mc","Come si dice «C'è un bar qui vicino»?","There's a cafe near here.","It's a cafe near here.","Has a cafe near here.","There are a cafe near here.","«C'è» + singolare è \"there is\": accordo con \"a cafe\"."],
["mc","There ___ two rooms. Che cosa va nello spazio?","are","is","have","has","\"Two rooms\" è plurale, quindi \"are\" (accordo)."],
["mc","Qual è la frase giusta per «È importante dormire»?","It's important to sleep.","Is important to sleep.","Important is to sleep.","There is important to sleep.","«È importante» in italiano non ha soggetto; in inglese lo mette \"it\"."],
["mc","Come si dice «Sono le tre»?","It's three o'clock.","They're three o'clock.","Is three o'clock.","Are three o'clock.","L'ora va al singolare, con \"it\" come soggetto, anche se in italiano dici «sono»."],
["or","Ci sono due posti liberi","There are two seats","is","\"Two seats\" è plurale: \"there are\" (accordo)."],
["or","C'è un bagno qui?","Is there a bathroom here","are","Nella domanda \"is\" va prima di \"there\"; con un solo bagno, \"is\" (accordo)."],
["or","Oggi fa freddo","It's cold today","Is","Per il tempo la frase comincia con \"It's\", mai con \"Is\" e mai con \"It makes\"."],
["fi","__ cold today.","Oggi fa freddo","It's|It is","Is|There's|This","Il soggetto è obbligatorio: \"it\" occupa quel posto."],
["fi","There __ a bank near here.","C'è una banca qui vicino","is","are|have|has","Una banca è singolare: \"there is\" (accordo)."],
["fi","__ there any seats?","Ci sono posti liberi?","Are","Is|Do|Have","\"Seats\" è plurale, quindi \"Are\" va davanti a \"there\" (accordo)."],
["ty","Fa caldo oggi","It's hot today","it · hot · today — il soggetto è obbligatorio","Is","«Fa caldo» in italiano non ha soggetto, in inglese sì: \"it\". Mai \"It makes hot\"."],
["ty","C'è un bagno qui?","Is there a bathroom here|Is there a restroom here","is there · bathroom — per fare la domanda","Are","Nella domanda \"is\" va davanti a \"there\", che fa da soggetto: un solo bagno, \"is\" (accordo)."],
["ty","Ci sono due stanze","There are two rooms","there · two · room — usa il plurale","is","Con un plurale, \"there are\": il soggetto è la parola \"there\" (accordo)."],
["ty","C'è molta gente qui","There are many people here|There are a lot of people here","there · many · people — «c'è» non è has","Has","«C'è / ci sono» è \"there is/are\", non \"has\"; \"people\" è plurale: \"there are\" (accordo)."]]},

{ id:"plurals", title:"Plurali: irregolari, aggettivi senza -s e this / these", blurb:"La -s è facile, ma va messa anche su film e sport. Attenzione a people e children, a these e agli aggettivi, che non prendono mai la -s.", deck:"Acquisti e pagamenti", body:`
<p>In inglese il plurale si fa quasi sempre con <b>-s</b>: <i>book → books</i>, <i>box → boxes</i>. La regola è semplice, ma per chi parla italiano ci sono alcune trappole precise.</p>
<h3>Plurali irregolari</h3>
<div class="tbl"><table><tr><th>Regola</th><th>Esempio</th></tr><tr><td>quasi sempre -s</td><td class="k">book → books</td></tr><tr><td>dopo s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>consonante + y → -ies</td><td class="k">city → cities</td></tr><tr><td>irregolari</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|due libri}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Ho due figli}}{{ex:These people are nice.|/ˈðiːz ˈpiːpl ər ˈnaɪs/|Queste persone sono gentili}}
<p><i>People</i> è già plurale: <i>people are</i>, mai <i>peoples</i>. Per una persona sola si dice <i>person</i>.</p>
<h3>Le parole che in italiano non cambiano</h3>
<p>In italiano le parole straniere restano uguali al plurale: <i>i film, gli sport, due computer, tre weekend</i>. In inglese prendono la -s come tutte le altre: <i>two films</i>, <i>three weekends</i>, <i>I like sports</i>. Proprio le parole che già «conosci» sono quelle a cui è più facile dimenticarla.</p>
<h3>Gli aggettivi non prendono la -s</h3>
<p>In italiano l'aggettivo si accorda e di solito va dopo il nome: «macchine rosse». In inglese non cambia mai e va prima: <i>red cars</i>, non <i>reds cars</i> né <i>cars red</i>.</p>
{{ex:red cars|/ˈred ˈkɑːrz/|macchine rosse}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Quelle scarpe sono belle}}
<h3>this / that (uno), these / those (più di uno)</h3>
<p>Tra <i>this</i> /ˈðɪs/ e <i>these</i> /ˈðiːz/ cambia la qualità della vocale, non solo la lunghezza: /ɪ/ è una «i» rilassata, quasi una «e»; /iː/ è la «i» tesa di «vino». Se dici <i>this</i> con la «i» italiana, sembra un plurale. E il verbo si accorda: <i>this is</i>, <i>these are</i>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Questa è la mia borsa}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Queste sono le mie chiavi}}
<h3>my, your, his, her, our, their</h3>
<p>Non cambiano al plurale e non vogliono l'articolo: <i>my keys</i> (le mie chiavi). E <i>his / her</i> dipendono da chi possiede, non dalla cosa: «i suoi fratelli» (di lei) è <i>her brothers</i>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Questo è il tuo cellulare?}}{{ex:Her brothers live in Milan.|/hər ˈbrʌðərz ˈlɪv ɪn mɪˈlɑːn/|I suoi fratelli (di lei) abitano a Milano}}
<div class="tip">Errori comuni: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>two film</b> ✗ → <b>two films</b> ✓ · <b>the peoples</b> ✗ → <b>the people</b> ✓ · <b>This are my keys.</b> ✗ → <b>These are my keys.</b> ✓</div>`,
check:[["I have two ___. Che cosa va nello spazio?",["child","children","childs","a child"],1,"Il plurale di \"child\" è irregolare: \"children\"."],["___ are my keys. Che cosa va nello spazio?",["This","That","These","It"],2,"\"Keys\" è plurale e il verbo è \"are\": \"these\"."],["Come si dice «le macchine rosse»?",["the cars reds","the reds cars","the cars red","the red cars"],3,"L'aggettivo va prima del nome e non prende mai la -s."]],
practice:[
["mc","Come si dice «tre persone»?","three people","three peoples","three person","three people's","\"People\" è già plurale: non prende mai la -s."],
["mc","Qual è il plurale di \"child\"?","children","childs","childes","child","È un plurale irregolare: \"child\" → \"children\"."],
["mc","Come si dice «Quelle scarpe sono belle»?","Those shoes are nice.","That shoes are nice.","Those shoes are nices.","Those shoes nice are.","\"Shoes\" è plurale: \"those\". L'aggettivo \"nice\" non prende la -s."],
["mc","Come si dice «macchine rosse»?","red cars","reds cars","cars reds","cars red","L'aggettivo va prima del nome e non prende la -s."],
["mc","Qual è il plurale di \"box\"?","boxes","boxs","boxies","box","Dopo s, x, ch, sh si aggiunge -es."],
["or","Queste sono le mie chiavi","These are my keys","is","Con \"these\" il verbo va al plurale: \"are\" (accordo)."],
["or","Queste persone sono gentili","These people are nice","is","\"People\" è plurale, quindi il verbo è \"are\" (accordo)."],
["or","Ho due macchine rosse","I have two red cars","reds","L'aggettivo va prima e non prende la -s: \"red cars\"."],
["fi","I have three __.","Ho tre figli","children","childs|child|childrens","Plurale irregolare: \"child\" → \"children\"."],
["fi","__ is my friend.","Questo è il mio amico","This","These|Those|They","Una persona sola: \"this\", con la vocale breve e rilassata /ɪ/."],
["fi","The __ are very nice.","Le persone sono molto gentili","people","peoples|person|people's","\"People\" è già plurale."],
["ty","Questa è la mia borsa","This is my bag","this · my · bag — è una sola","are","Un solo oggetto: \"this is\" (accordo)."],
["ty","Questo è il tuo cellulare?","Is this your phone|Is this your cell phone","is · this · your · phone — è una domanda","are","Nella domanda \"is\" va prima di \"this\": un solo oggetto, \"is\" (accordo)."],
["ty","Ho due macchine rosse","I have two red cars","two · red · car — la -s non va sull'aggettivo","reds","L'aggettivo va prima del nome e non prende la -s."]]},

{ id:"present", title:"Present simple: sempre il soggetto, don't e always", blurb:"In inglese «lavoro» non basta: si dice I work. Per negare si usa don't, non «no».", deck:"Presentarsi", body:`
<p>L'ordine di base è uguale all'italiano: <b>soggetto + verbo + complemento</b> (<i>I drink coffee</i>). Cambiano tre dettagli che tradiscono subito chi parla italiano.</p>
<h3>1. Il soggetto non si omette mai</h3>
<p>In italiano la desinenza del verbo dice già chi fa l'azione: «lavoro», «abitiamo». In inglese il verbo quasi non cambia, quindi il pronome è obbligatorio.</p>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Bevo il caffè}}{{ex:We live in Naples.|/wi ˈlɪv ɪn ˈneɪplz/|Abitiamo a Napoli}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Lavorano nel fine settimana}}
<h3>2. Si nega con don't, non con «no»</h3>
<p>«Non mangio carne» non è <i>I no eat meat</i> e nemmeno <i>I not eat meat</i>. Prima del verbo va l'ausiliare <b>don't</b> (do not).</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Non mangio carne}}{{ex:We don't live here.|/wi ˈdoʊnt ˈlɪv ˈhɪr/|Non abitiamo qui}}
<p>E in inglese basta una negazione sola: «Non lavora mai» è <i>She never works</i>, non <i>She doesn't work never</i>.</p>
<p>Con <i>he</i>, <i>she</i> e <i>it</i> il verbo cambia (<i>she works</i>, <i>he doesn't</i>): lo vedrai fra due lezioni. Con <i>I, you, we, they</i> il verbo resta sempre uguale.</p>
<h3>3. always, usually, never: prima del verbo</h3>
<p>In italiano dici «Bevo sempre il tè», con l'avverbio dopo il verbo. In inglese l'avverbio di frequenza va <b>subito prima</b> del verbo principale: <i>I always drink tea</i>. È un errore che resiste anche in chi parla già bene.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Di solito mi alzo alle sette}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Non bevo mai caffè la sera}}
<h3>Un'anticipazione: l'aggettivo prima del nome</h3>
<p>«Una casa grande» è <i>a big house</i>. Lo vedrai meglio più avanti.</p>
{{ex:I have a big house.|/aɪ ˈhæv ə ˈbɪg ˈhaʊs/|Ho una casa grande}}
<div class="tip">Errori comuni: <b>Work in a bank.</b> ✗ → <b>I work in a bank.</b> ✓ · <b>I no eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ · <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓</div>`,
check:[["Come si dice «Lavoro in banca»?",["Work in a bank.","Am work in a bank.","I work in a bank.","I working in a bank."],2,"In inglese il soggetto è obbligatorio: \"I work\"."],["I ___ eat meat. («non mangio»)",["not","am not","no","don't"],3,"Per negare un verbo normale si usa l'ausiliare \"don't\"."],["In quale frase \"always\" è al posto giusto?",["I always drink tea.","Always drink tea.","I drink always tea.","I drink tea the always."],0,"Gli avverbi di frequenza vanno subito prima del verbo."]],
practice:[
["mc","Come si dice «Studio inglese»?","I study English.","Study English.","I am study English.","I studying English.","In inglese bisogna dire chi: \"I study\"."],
["mc","Come si dice «Non mangio carne»?","I don't eat meat.","I no eat meat.","I'm not eat meat.","I eat not meat.","La negazione vuole l'ausiliare \"don't\" prima del verbo: \"I no eat\" ricalca «io non mangio»."],
["mc","Come si dice «Abitiamo a Bogotá»?","We live in Bogotá.","Live in Bogotá.","We are live in Bogotá.","We living in Bogotá.","Senza \"we\" la frase non sta in piedi: \"We live\"."],
["mc","Come si dice «Di solito mi alzo alle sette»?","I usually get up at seven.","Usually I get up seven.","I get up usually at seven.","I am usually get up at seven.","\"Usually\" va subito prima del verbo."],
["mc","Qual è la frase giusta per «Bevo sempre il tè»?","I always drink tea.","I drink always tea.","Always drink tea.","I am always drink tea.","\"Always\" va prima del verbo, e \"I\" non si omette."],
["or","Lavoro nel fine settimana","I work on weekends","works","Con \"I\" il verbo non prende la -s: la -s è solo per la terza persona."],
["or","Non mangiamo carne","We don't eat meat","doesn't","Con \"we\" l'ausiliare è \"don't\"; \"doesn't\" è solo per la terza persona."],
["or","Non bevo mai caffè la sera","I never drink coffee at night","always","\"Never\" va subito prima del verbo."],
["fi","I __ like fish.","Il pesce non mi piace","don't|do not","not|am not|no","La negazione usa l'ausiliare \"don't\"."],
["fi","I __ English every day.","Studio inglese tutti i giorni","study","am study|studying|studies","Con \"I\" il verbo resta nella forma base."],
["fi","We usually __ at home.","Di solito mangiamo a casa","eat","eating|are eat|eats","Dopo \"usually\" il verbo va nella forma base."],
["ty","Bevo tè","I drink tea","drink · tea — non omettere il pronome","am","In inglese si dice sempre chi: \"I drink tea\"."],
["ty","Non mangio carne","I don't eat meat","don't · eat · meat — la negazione","no","La negazione vuole l'ausiliare \"don't\", non «no»."],
["ty","Non abitiamo qui","We don't live here","we · don't · live — usa l'ausiliare","no","Per negare si usa l'ausiliare \"don't\" prima del verbo."]]},

{ id:"questions", title:"Domande: do e l'ordine delle parole", blurb:"In italiano basta l'intonazione. In inglese serve do, e la parola interrogativa va all'inizio.", deck:"Sopravvivenza 2", body:`
<p>In italiano una domanda può essere identica a un'affermazione: cambia solo l'intonazione («Ti piace il caffè?»). In inglese non basta: bisogna <b>cambiare l'ordine</b> o aggiungere un <b>ausiliare</b>. L'italiano non ha niente di simile, quindi <i>do</i> è una casella in più da ricordare ogni volta.</p>
<h3>Con be: inverti</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Stai bene?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Questa è la tua borsa?}}
<h3>Con tutti gli altri verbi: Do all'inizio</h3>
<p>Metti <b>Do</b> davanti al soggetto. Il verbo principale non cambia.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Ti piace il caffè?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Parli inglese?}}
<p>Risposte brevi: <i>Yes, I do.</i> / <i>No, I don't.</i> (non <i>Yes, I like</i>).</p>
<h3>Parola interrogativa + do + soggetto + verbo</h3>
<p><i>what, where, when, who, why</i> e <i>how</i> sono facili; il difficile è quello che viene dopo. «Dove abiti?» non è <i>Where you live?</i>, e «Come si chiama questo?» non è <i>How is called this?</i> ma <i>What is this called?</i></p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Dove abiti?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Che lavoro fai?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Dov'è il bagno?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Quanto costa questo?}}
<h3>Negative: una negazione sola</h3>
<p>Per negare si usa <i>don't</i>, mai «no» davanti al verbo. E in inglese c'è una sola negazione per frase: «Non so niente» è <i>I don't know anything</i>, non <i>I don't know nothing</i>.</p>
{{ex:I don't understand.|/aɪ ˈdoʊnt ˌʌndərˈstænd/|Non capisco}}{{ex:I don't know anything.|/aɪ ˈdoʊnt ˈnoʊ ˈeniθɪŋ/|Non so niente}}
<div class="tip">Errori comuni: <b>You like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓ · <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ · <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["Come si dice «Ti piace il caffè?»?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Con un verbo come \"like\" la domanda comincia con l'ausiliare \"Do\"."],["Come si dice «Dove abiti?»?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Parola interrogativa + \"do\" + soggetto + verbo."],["Do you speak English? Qual è la risposta giusta?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Se la domanda è con \"do\", rispondi con \"do\"."]],
practice:[
["mc","Come si dice «Parli inglese?»?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Con un verbo come \"speak\" la domanda ha bisogno dell'ausiliare \"Do\"."],
["mc","Come si dice «Dove abiti?»?","Where do you live?","Where you live?","Where are you live?","Where live you?","Parola interrogativa + ausiliare \"do\" + soggetto + verbo."],
["mc","Come si dice «Quanto costa questo?»?","How much is this?","How much this is?","How much does this?","What much is this?","Il prezzo si chiede con \"How much is…?\"."],
["mc","Do you like tea? Qual è la risposta giusta?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Se la domanda è con \"do\", rispondi con \"do\": \"Yes, I do\"."],
["mc","Come si dice «Che lavoro fai?»?","What do you do?","What are you do?","What you do?","What do you?","Si dice \"What do you do?\": il primo \"do\" è l'ausiliare, il secondo è il verbo «fare»."],
["or","Ti piace il caffè?","Do you like coffee","Are the","\"Like\" non è \"be\": la domanda comincia con l'ausiliare \"Do\"; il caffè in generale va senza \"the\"."],
["or","Dov'è il bagno?","Where is the bathroom","a do","Con \"be\" si inverte: \"Where is\" + soggetto, senza l'ausiliare \"do\"."],
["or","Dove abiti?","Where do you live","are","\"Live\" ha bisogno dell'ausiliare \"do\": \"Where do you live\"."],
["fi","__ you like music?","Ti piace la musica?","Do","Are|Is|Does","\"Like\" non è \"be\", quindi l'ausiliare è \"Do\"."],
["fi","__ do you live?","Dove abiti?","Where","What|Who|When","Per chiedere un luogo, \"where\"."],
["fi","What time __ it?","Che ore sono?","is","do|does|are","L'ora si chiede con \"be\": \"What time is it?\"."],
["ty","Parli inglese?","Do you speak English|Can you speak English","do · speak · English — domanda con ausiliare","Are","La domanda ha bisogno dell'ausiliare \"Do\" prima di \"you\"."],
["ty","Dov'è il bagno?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — usa il verbo be","a","Con \"be\", \"is\" va prima del soggetto: \"Where is the bathroom?\"."],
["ty","Ti piacciono i cani?","Do you like dogs","do · like · dog — usa il plurale","dog","\"Like\" vuole l'ausiliare \"Do\"; i cani in generale vanno al plurale e senza \"the\"."]]},

{ id:"third-s", title:"he, she, it: la -s e does / doesn't", blurb:"Con una sola persona o cosa il verbo prende la -s. Nelle domande e nelle negative, does.", deck:"Presentarsi", body:`
<p>In italiano ogni persona ha la sua desinenza (lavoro, lavori, lavora…), quindi l'idea di accordare il verbo con il soggetto ti è familiare. In inglese il presente quasi non cambia: resta <b>solo la terza persona singolare</b> (<i>he, she, it</i>, o una persona o cosa) con la <b>-s</b>. Proprio perché è l'unica desinenza rimasta, è facilissimo dimenticarla.</p>
<div class="tbl"><table><tr><th>Soggetto</th><th>Verbo</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Lavora in banca}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Gli piace il calcio}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Mia mamma cucina bene}}
<h3>Verbi che cambiano un po'</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Lei ha la macchina (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Lui va al lavoro alle otto (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Lei studia inglese (study → studies)}}
<h3>Negative e domande: does</h3>
<p>Con <b>doesn't</b> o <b>Does</b> la -s passa all'ausiliare e il verbo principale torna alla forma base.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Lui non beve caffè}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Lei abita qui?}}
<div class="tip">Errori comuni: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ · <b>My brother don't like it.</b> ✗ → <b>My brother doesn't like it.</b> ✓ · <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Lima. Che cosa va nello spazio?",["live","lives","living","is live"],1,"Con \"she\" il verbo prende la -s: terza persona."],["He ___ like coffee. Che cosa va nello spazio?",["don't","isn't","doesn't","not"],2,"Con \"he\" la negativa è \"doesn't\"."],["Come si dice «Lei ha la macchina»?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Con \"she\", \"have\" diventa \"has\"."]],
practice:[
["mc","My brother ___ in Bogotá. Che cosa va nello spazio?","works","work","working","is work","\"My brother\" è una persona sola: \"works\" (terza persona)."],
["mc","Come si dice «Lui non beve caffè»?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Con \"he\": \"doesn't\" + verbo nella forma base."],
["mc","Come si dice «Lei abita qui?»?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Dopo \"Does\" il verbo va senza -s."],
["mc","\"have\" con \"she\": quale forma prende?","has","haves","have","is have","Con \"she\", \"have\" diventa \"has\"."],
["mc","\"study\" con \"he\": quale forma prende?","studies","studys","study","studyes","Consonante + y → -ies: \"studies\"."],
["or","Lei lavora in banca","She works at a bank","work the","Con \"she\" il verbo prende la -s: terza persona."],
["or","Lui ha due cani","He has two dogs","have dog","Con \"he\", \"have\" diventa \"has\": terza persona."],
["or","Lei non mangia carne","She doesn't eat meat","eats","Dopo l'ausiliare \"doesn't\" il verbo va senza -s."],
["fi","He __ soccer.","A lui piace il calcio","likes","like|liking|is like","Con \"he\", \"likes\" (terza persona)."],
["fi","__ she speak English?","Lei parla inglese?","Does","Do|Is|Are","Con \"she\" la domanda vuole l'ausiliare \"Does\"."],
["fi","She __ to work at eight.","Lei va al lavoro alle otto","goes","go|going|gos","\"Go\" diventa \"goes\"."],
["ty","Lui ha una macchina","He has a car","has · car — usa he","have","Con \"he\", \"have\" diventa \"has\": terza persona."],
["ty","A lei piacciono i gatti","She likes cats","likes · cat — usa she e il plurale","cat","Con \"she\", \"likes\" prende la -s (terza persona); i gatti in generale, al plurale."],
["ty","Lui non abita qui","He doesn't live here","doesn't · live · here — forma base","lives","Dopo l'ausiliare \"doesn't\" il verbo va nella forma base."]]},

{ id:"countable", title:"Numerabili e non numerabili: advice, information, some, much", blurb:"«Consigli» e «informazioni» in italiano si contano, ma advice e information in inglese non prendono la -s.", deck:"Al ristorante", body:`
<p>I nomi inglesi si dividono in <b>numerabili</b> e <b>non numerabili</b>. L'idea esiste anche in italiano («molta acqua», «pochi soldi»), ma alcune parole che in italiano si contano in inglese sono non numerabili.</p>
<div class="tbl"><table><tr><th>Numerabili</th><th>Non numerabili</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, numeri, -s</td><td>senza a / an, senza numeri, senza -s</td></tr></table></div>
<h3>Attenzione: in italiano si contano</h3>
<p><i>advice</i> (consigli), <i>information</i> (informazioni), <i>news</i> (notizie), <i>furniture</i> (mobili), <i>homework</i> (compiti), <i>luggage</i> (bagagli), <i>hair</i> (capelli). Non prendono mai la -s né <i>a</i>, e il verbo va al singolare.</p>
{{ex:Can I give you some advice?|/kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/|Posso darti un consiglio?}}{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|Le notizie sono buone}}{{ex:a piece of furniture|/ə ˈpiːs əv ˈfɜːrnɪtʃər/|un mobile}}
<h3>some e any</h3>
<p><b>some</b> nelle frasi affermative; <b>any</b> nelle negative e nelle domande (ma quando chiedi o offri qualcosa si usa <b>some</b>: <i>Can I have some water?</i>). E una negazione sola: «Non ho soldi» è <i>I don't have any money</i>; «Non ho niente» è <i>I don't have anything</i> (o <i>I have nothing</i>), mai <i>I don't have nothing</i>.</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Ho un po' di soldi}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Non ho soldi}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Hai domande?}}
<h3>many e much</h3>
<p>Numerabili: <b>many</b> + plurale. Non numerabili: <b>much</b>. <b>a lot of</b> va bene per tutti e due.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Quante persone?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Non ho molto tempo}}
<h3>Per contare quello che non si conta</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|un bicchiere d'acqua}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|una tazza di caffè}}
<div class="tip">Errori comuni: <b>some advices</b> ✗ → <b>some advice</b> ✓ · <b>an information</b> ✗ → <b>some information</b> ✓ · <b>The news are good.</b> ✗ → <b>The news is good.</b> ✓ · <b>I don't have nothing.</b> ✗ → <b>I don't have anything.</b> ✓</div>`,
check:[["How ___ people are there? Che cosa va nello spazio?",["much","many","any","a"],1,"\"People\" si può contare: \"many\"."],["Quale di questi nomi è non numerabile in inglese?",["apple","chair","advice","friend"],2,"\"Advice\" non prende a né -s, anche se in italiano dici «consigli»."],["I don't have ___ money. Che cosa va nello spazio?",["some","a","many","any"],3,"Nelle frasi negative si usa \"any\"."]],
practice:[
["mc","Can I have ___ water? Che cosa va nello spazio?","some","a","many","an","\"Water\" è non numerabile: niente a né many. E quando chiedi qualcosa, \"some\"."],
["mc","Come si dice «Ho bisogno di consigli»?","I need some advice.","I need some advices.","I need an advice.","I need many advices.","«Consigli» in italiano è plurale, ma \"advice\" è non numerabile: \"some advice\"."],
["mc","Come si dice «Hai domande?»?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Dopo \"any\" un nome numerabile va al plurale."],
["mc","Qual è la frase giusta?","I need some information.","I need some informations.","I need an information.","I need many informations.","\"Information\" è non numerabile: mai -s né an."],
["mc","How ___ time do we have? Che cosa va nello spazio?","much","many","any","a","\"Time\" è non numerabile: \"much\"."],
["or","Questo consiglio è molto utile","This advice is very useful","are","\"Advice\" è non numerabile: va al singolare, con \"is\" (accordo)."],
["or","Le notizie sono buone","The news is good","are","\"News\" è non numerabile: il verbo va al singolare, \"is\" (accordo)."],
["or","Non ho molto tempo","I don't have much time","many","\"Time\" è non numerabile: \"much\", non \"many\"."],
["fi","How __ is this?","Quanto costa questo?","much","many|any|some","Il prezzo si chiede con \"how much\"."],
["fi","I don't have __ questions.","Non ho domande","any","some|much|a","Nelle frasi negative si usa \"any\"."],
["fi","The furniture __ new.","I mobili sono nuovi","is","are|have|has","\"Furniture\" è non numerabile: singolare, con \"is\" (accordo)."],
["ty","Mi dai un po' d'acqua?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|Can you give me some water|Could you give me some water","can I have · water — usa some","a","Nella domanda l'ausiliare \"can\" va prima di \"I\"; \"water\" è non numerabile: \"some\"."],
["ty","Hai domande?","Do you have any questions","do · have · any · question — usa il plurale","much","\"Have\" vuole l'ausiliare \"Do\" nella domanda; \"questions\" va al plurale."],
["ty","Questa informazione è utile","This information is useful","this · information · useful — è non numerabile","are","\"Information\" è non numerabile: singolare, con \"is\" (accordo)."]]},

{ id:"object-have", title:"me, him, her, suo / sua… e quando «avere» è be", blurb:"Il pronome complemento va dopo il verbo, «suo» è his o her a seconda di chi possiede, e «ho 20 anni» si dice con be.", deck:"Presentarsi", body:`
<p>I pronomi complemento non sono difficili: anche l'italiano ha <i>mi, lo, la</i>. La differenza è la posizione: in italiano vanno prima del verbo («la amo»), in inglese vanno <b>dopo</b>. «La amo» è <i>I love her</i>, mai <i>I her love</i>.</p>
<div class="tbl"><table><tr><th>Soggetto</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Complemento</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Lei mi conosce}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Mi sta simpatico (lui)}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Ci puoi aiutare?}}{{ex:I love her.|/aɪ ˈlʌv hər/|La amo}}
<h3>suo / sua: his o her</h3>
<p>In italiano <i>suo / sua</i> si accorda con la cosa posseduta («sua moglie», «suo marito»). In inglese conta solo <b>chi possiede</b>: <i>his</i> = di lui, <i>her</i> = di lei, <i>their</i> = di loro. «Pietro e sua moglie» è <i>Peter and his wife</i>, non <i>Peter and her wife</i>.</p>
{{ex:Ana loves her brother.|/ˈænə ˈlʌvz hər ˈbrʌðər/|Ana vuole bene a suo fratello}}{{ex:Marco and his sister|/ˈmɑːrkoʊ ənd hɪz ˈsɪstər/|Marco e sua sorella}}
<p>E per dire di chi è una cosa si usa il genitivo sassone: «la penna di mio fratello» è <i>my brother's pen</i>, non <i>the pen of my brother</i>.</p>
<h3>have = avere (cose, famiglia, tempo)</h3>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Ho due fratelli}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Hai una penna?}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Pranziamo}}
<h3>Ma «avere» non è sempre have</h3>
<p>L'età, la fame, la sete, il freddo, la paura e la ragione si dicono con <b>be</b>. E «sono d'accordo» è <i>I agree</i>, senza <i>be</i>: mai <i>I'm agree</i>.</p>
{{ex:I'm 20 years old.|/aɪm ˈtwenti ˈjɪrz ˈoʊld/|Ho 20 anni}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Ho fame}}{{ex:Are you cold?|/ər ju ˈkoʊld/|Hai freddo?}}{{ex:You're right.|/jʊr ˈraɪt/|Hai ragione}}
<div class="tip">Errori comuni: <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓ · <b>I have hungry.</b> ✗ → <b>I'm hungry.</b> ✓ · <b>Peter and her wife</b> ✗ → <b>Peter and his wife</b> ✓</div>`,
check:[["I like ___. («lui»)",["he","his","him","he's"],2,"Dopo il verbo va il pronome complemento \"him\"."],["Come si dice «Ho fame»?",["I'm hungry.","I have hungry.","I have hunger.","I'm hunger."],0,"«Avere fame» si dice con \"be\": \"I'm hungry\"."],["Come si dice «Hai una penna?»?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" è un verbo normale: la domanda vuole \"Do\"."]],
practice:[
["mc","She knows ___. («me») Che cosa va nello spazio?","me","I","my","mine","Dopo il verbo va il pronome complemento \"me\"."],
["mc","Come si dice «Ho 25 anni»?","I'm 25.","I have 25 years.","I have 25.","I'm 25 years.","L'età si dice con \"be\", non con \"have\"."],
["mc","Come si dice «Ana vuole bene a suo fratello»?","Ana loves her brother.","Ana loves his brother.","Ana loves their brother.","Ana her brother loves.","«Suo» = di lei (Ana): \"her\"."],
["mc","Come si dice «Hai ragione»?","You're right.","You have reason.","You have right.","You're reason.","«Avere ragione» è \"be right\"."],
["mc","Come si dice «La amo»?","I love her.","I her love.","I love she.","Her I love.","Il pronome complemento va dopo il verbo, non prima come in italiano."],
["or","Hai una penna?","Do you have a pen","Are","\"Have\" vuole l'ausiliare \"Do\"; \"Are you have\" non esiste."],
["or","Hai freddo?","Are you cold","have","«Avere freddo» è \"be cold\": nella domanda \"are\" va prima del soggetto \"you\"."],
["or","Carlos vuole bene a sua sorella","Carlos loves his sister","her","«Sua» = di lui (Carlos): \"his\". Non conta che «sorella» sia femminile."],
["fi","Call __ tonight.","Chiamami stasera","me","I|my|mine","Dopo il verbo va \"me\"."],
["fi","I __ hungry.","Ho fame","am","have|has|is","«Avere fame» si dice con \"be\": \"I am hungry\"."],
["fi","Sofía and __ husband live in Madrid.","Sofía e suo marito abitano a Madrid","her","his|their|she","«Suo» = di lei (Sofía): \"her\", anche se «marito» è maschile."],
["ty","Mi puoi aiutare?","Can you help me|Could you help me","can you · help · me — usa l'ausiliare","I","Nella domanda l'ausiliare \"can\" va prima di \"you\"; dopo il verbo, \"me\"."],
["ty","Hai fame?","Are you hungry","are · hungry — usa be, non have","have","«Avere fame» è \"be hungry\": nella domanda \"are\" va prima del soggetto \"you\"."],
["ty","Lui ha 30 anni","He is 30|He is 30 years old|He is thirty|He is thirty years old","he · 30 — usa be, non have","has","L'età si dice con \"be\": con \"he\", \"is\" (terza persona)."]]},

{ id:"can-like", title:"can, like + -ing, I'd like: quello che sai fare e quello che vuoi", blurb:"«Mi piace» è I like: chi prova il piacere è il soggetto. E per chiedere qualcosa, I'd like.", deck:"Due chiacchiere", body:`
<p>Tre strutture che userai per presentarti e per chiedere qualcosa.</p>
<h3>can: potere, saper fare</h3>
<p><b>can + forma base</b>. Copre sia «potere» sia «sapere» (fare qualcosa): «So nuotare» è <i>I can swim</i>. Non prende mai la -s, nemmeno con <i>he</i> o <i>she</i>, e non usa <i>do</i>: la domanda è <i>Can you…?</i></p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|So nuotare}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Non so guidare}}{{ex:Can you speak English?|/kən ju ˈspiːk ˈɪŋglɪʃ/|Sai parlare inglese?}}
<h3>piacere al contrario: I like</h3>
<p>In italiano la cosa è il soggetto: «mi piace la pizza», «mi piacciono i cani». In inglese il soggetto è <b>la persona</b>: <i>I like pizza</i>, <i>I like dogs</i>. Il verbo si accorda con <i>I</i>, non con i cani. <i>Pizza likes me</i> vorrebbe dire che sei tu a piacere alla pizza.</p>
{{ex:I like pizza.|/aɪ ˈlaɪk ˈpiːtsə/|Mi piace la pizza}}{{ex:She likes dogs.|/ʃi ˈlaɪks ˈdɔːgz/|Le piacciono i cani (a lei)}}
<h3>like + -ing: gusti e passatempi</h3>
<p>Dopo <i>like</i> o <i>love</i> il verbo va nella forma in -ing: «mi piace cucinare» è <i>I like cooking</i>. Si sente anche <i>like</i> + <i>to</i>: <i>I like to cook</i>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Mi piace cucinare}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Adoro guardare film}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Non mi piace correre}}
<h3>I'd like: vorrei</h3>
<p><i>I like</i> è un gusto generale; <i>I'd like</i> è «vorrei», quello che vuoi adesso, detto con gentilezza. Per ordinare usa <i>I'd like</i>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Vorrei un caffè, per favore}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Vuoi un tè?}}
<div class="tip">Errori comuni: <b>Pizza likes me.</b> ✗ → <b>I like pizza.</b> ✓ · <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ · al bar, <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Che cosa va nello spazio?",["sings","sing","singing","to sing"],1,"Dopo \"can\" il verbo va nella forma base."],["Come si dice «Mi piace cucinare»?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Dopo \"like\", la forma in -ing."],["Al bar, qual è il modo più naturale per ordinare?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Quello che vuoi adesso si chiede con \"I'd like\"."]],
practice:[
["mc","He can ___ English. Che cosa va nello spazio?","speak","speaks","speaking","to speak","Dopo \"can\" il verbo va nella forma base, senza -s."],
["mc","Come si dice «Mi piace la pizza»?","I like pizza.","Pizza likes me.","Me like pizza.","I'm like pizza.","In inglese chi prova il piacere è il soggetto: \"I like\"."],
["mc","Come si dice «Mi piacciono i cani»?","I like dogs.","I likes dogs.","Like me dogs.","Me like dogs.","«Mi piacciono» è \"I like\": il verbo va con \"I\", non con i cani."],
["mc","Per ordinare al bar, «Un caffè, per favore» è:","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Quello che vuoi adesso si chiede con \"I'd like\"."],
["mc","Come si dice «Non so guidare»?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can\" non usa \"do\": la negativa è \"can't\"."],
["or","Sai nuotare?","Can you swim","swimming","Nella domanda l'ausiliare \"can\" va prima del soggetto."],
["or","A lei piace ballare","She likes dancing","like","Con \"she\", \"likes\" prende la -s (terza persona): chi prova il piacere è lei."],
["or","Mi piace leggere libri","I like reading books","read","Dopo \"like\", la forma in -ing: \"reading\"."],
["fi","I can't __.","Non so nuotare","swim","swimming|swims|to swim","Dopo \"can't\" va la forma base."],
["fi","I like __ music.","Mi piace ascoltare musica","listening to","listen to|listen|to listening","Dopo \"like\", la forma in -ing."],
["fi","__ like a sandwich, please.","Un panino, per favore","I'd|I would","I|I'm|I can","Per ordinare si usa \"I'd like\"."],
["ty","Mi piace cucinare","I like cooking|I love cooking|I like to cook","like · cook — forma in -ing","cook","Dopo \"like\" va la forma in -ing (o \"to\" + verbo)."],
["ty","Puoi venire domani?","Can you come tomorrow","can · come · tomorrow — domanda con can","coming","Nella domanda l'ausiliare \"can\" va prima di \"you\"."],
["ty","A lui piacciono i gatti?","Does he like cats","does · like · cat — usa il plurale","likes","La domanda vuole l'ausiliare \"Does\", e \"like\" resta nella forma base."]]},

{ id:"continuous", title:"Quello che succede adesso: be + -ing", blurb:"«Che fai?» in italiano va bene per tutto. In inglese, quello che succede adesso si dice con be + -ing.", deck:"Due chiacchiere", body:`
<p>In italiano usi spesso il presente semplice per quello che succede proprio ora: «Che fai?», «Lavoro». In inglese no: quello che succede <b>in questo momento</b> si dice con <b>be + verbo in -ing</b>. Somiglia a «sto + gerundio» («sto lavorando»), ma in inglese è obbligatorio ogni volta che un'azione è in corso.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Adesso sto lavorando}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Sta preparando la cena}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Sta piovendo}}
<h3>Domande e negative</h3>
<p>Come sempre con <i>be</i>: nella domanda <i>am / is / are</i> va prima del soggetto; nella negativa, <i>not</i> va dopo.</p>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Che fai? (adesso)}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Mi stai ascoltando?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Non sto dormendo}}
<h3>A confronto con il present simple</h3>
<div class="tbl"><table><tr><th>Sempre (present simple)</th><th>Adesso (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Attenzione: <i>What do you do?</i> chiede che lavoro fai; <i>What are you doing?</i>, che cosa stai facendo adesso.</p>
<h3>Verbi che non vogliono -ing</h3>
<p><i>like, know, want, need, have</i> (nel senso di possedere) esprimono uno <b>stato</b>: vanno al present simple anche se parli di adesso.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Lo conosco}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Voglio un po' d'acqua}}
<div class="tip">Errori comuni: <b>What do you do now?</b> ✗ → <b>What are you doing?</b> ✓ · <b>I working.</b> ✗ → <b>I'm working.</b> ✓ · <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["Come si dice «Che cosa stai facendo?»?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Quello che succede adesso si chiede con \"be\" + -ing."],["I ___ coffee every morning. Che cosa va nello spazio?",["am drinking","drinking","drink","am drink"],2,"Un'abitudine quotidiana va al present simple."],["Quale di queste frasi è giusta?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" e \"have\" (possedere) non vogliono -ing."]],
practice:[
["mc","Come si dice «Adesso sto lavorando»?","I'm working now.","I work now am.","I'm work now.","I working now.","Per quello che succede adesso: \"be\" + forma in -ing; non dimenticare \"am\"."],
["mc","Come si dice «Lei sta preparando la cena»?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","\"Be\" + -ing, e i pasti vanno senza articolo."],
["mc","Quale frase descrive una cosa che fai tutti i giorni?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Le abitudini vanno al present simple."],
["mc","Telefoni a qualcuno e chiedi «Che fai?» (in questo momento). Che cosa dici?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Per quello che succede adesso: parola interrogativa + \"are\" + \"you\" + -ing."],
["mc","Come si dice «Lo conosco»?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" è un verbo di stato: non vuole -ing."],
["or","Che fai? (adesso)","What are you doing","do","Per quello che succede adesso: parola interrogativa + ausiliare \"are\" + soggetto + -ing."],
["or","I bambini stanno giocando","The kids are playing","is","\"Kids\" è plurale: \"are\" (accordo)."],
["or","Sto leggendo un libro","I'm reading a book","read","Per quello che succede adesso: \"be\" + forma in -ing."],
["fi","I'm __ TV.","Sto guardando la TV","watching","watch|watches|to watch","Dopo \"be\" va la forma in -ing."],
["fi","What __ you doing?","Che cosa stai facendo?","are","do|is|does","Con \"you\" l'ausiliare è \"are\"."],
["fi","She __ working today.","Oggi lei non lavora","isn't|is not","doesn't|don't|not","La negativa di \"be\" + -ing è \"isn't\"."],
["ty","Sto cucinando adesso","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — forma in -ing","cook","Per quello che succede adesso: \"be\" + forma in -ing."],
["ty","Sta piovendo?","Is it raining","is · it · rain — forma in -ing","rains","Nella domanda l'ausiliare \"is\" va prima di \"it\"."],
["ty","Lei sta lavorando oggi","She is working today","she · work · today — forma in -ing","works","Con \"she\" l'ausiliare è \"is\" (accordo), più la forma in -ing."]]},

{ id:"past", title:"Past simple: was / were, -ed e did", blurb:"Il past simple non cambia con la persona. Le difficoltà: come suona -ed e l'ausiliare did.", deck:"Due chiacchiere", body:`
<p>Il <i>past simple</i> racconta azioni finite, come «ieri ho lavorato». La buona notizia: <b>non cambia con la persona</b> (<i>I worked, she worked, they worked</i>). Le difficoltà sono due: come suona <b>-ed</b> e l'ausiliare <b>did</b>.</p>
<h3>was / were</h3>
<p><b>was</b> con <i>I, he, she, it</i>; <b>were</b> con <i>you, we, they</i>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Ero stanca}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|È stato divertente}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Eravamo a casa}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Avevi da fare?}}
<h3>-ed: tre suoni</h3>
<p>In italiano si pronunciano tutte le lettere, ma <i>-ed</i> quasi mai si legge «ed». Dopo un suono sordo (p, k, f, s, sh, ch) suona <b>/t/</b>; dopo un suono sonoro o una vocale, <b>/d/</b>; solo dopo t o d si aggiunge una sillaba: <b>/ɪd/</b>. Quindi <i>worked</i> /ˈwɜːrkt/ ha una sola sillaba e finisce in /t/.</p>
<div class="tbl"><table><tr><th>suona /t/</th><th>suona /d/</th><th>suona /ɪd/</th></tr><tr><td class="k">worked, watched, helped</td><td class="k">played, called, lived</td><td class="k">wanted, needed</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Ieri ho lavorato}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Abbiamo guardato un film}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Mi ha chiamato (lei)}}{{ex:I wanted coffee.|/aɪ ˈwɑːntɪd ˈkɔːfi/|Volevo un caffè}}
<h3>Negative e domande: did</h3>
<p>Come <i>do</i> al presente, il past simple usa l'ausiliare <b>did</b>, e il verbo torna alla forma base: <i>Did you call?</i>, mai <i>Did you called?</i>. Il passato lo porta solo l'ausiliare.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Ieri non ho lavorato}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Mi hai chiamato?}}
<div class="tip">Errori comuni: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ · <b>You called me?</b> ✗ → <b>Did you call me?</b> ✓ · <b>work-ed</b> in due sillabe ✗ → <b>worked</b> /ˈwɜːrkt/, una sillaba sola ✓</div>`,
check:[["They ___ at home yesterday. Che cosa va nello spazio?",["was","were","did","are"],1,"Con \"they\" il passato di \"be\" è \"were\"."],["Come si dice «Ieri non ho lavorato»?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Dopo \"didn't\" il verbo va nella forma base."],["Did you ___ the movie? Che cosa va nello spazio?",["watch","watched","watching","watches"],0,"Dopo \"Did\" il verbo va nella forma base."]],
practice:[
["mc","I ___ tired yesterday. Che cosa va nello spazio?","was","were","did","am","Con \"I\" il passato di \"be\" è \"was\"."],
["mc","Come si dice «Hai chiamato ieri?»?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Con \"did\" il verbo torna alla forma base."],
["mc","In quale di questi verbi la -ed si pronuncia come una sillaba in più?","wanted","worked","played","watched","La -ed è una sillaba a sé solo dopo t o d: \"wanted\"."],
["mc","Come si dice «È stato divertente»?","It was fun.","Was fun.","It were fun.","It did fun.","Con \"it\" il passato di \"be\" è \"was\", e \"it\" non si omette."],
["mc","Come si dice «Avevi da fare?»?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" è uno stato: la domanda si fa con \"be\" (were)."],
["or","Mi hai chiamato?","Did you call me","called","La domanda al passato vuole l'ausiliare \"Did\" e il verbo nella forma base."],
["or","Eravamo a casa","We were at home","was","Con \"we\" il passato di \"be\" è \"were\" (accordo)."],
["or","Ieri non ho lavorato","I didn't work yesterday","worked","Dopo l'ausiliare \"didn't\" il verbo va nella forma base."],
["fi","We __ at home last night.","Ieri sera eravamo a casa","were","was|did|are","Con \"we\" il passato di \"be\" è \"were\"."],
["fi","I __ soccer yesterday.","Ieri ho giocato a calcio","played","play|playing|was play","Passato regolare: \"play\" + -ed."],
["fi","__ you work yesterday?","Hai lavorato ieri?","Did","Were|Do|Was","Domanda al passato con un verbo normale: \"Did\"."],
["ty","È stato divertente","It was fun","it · fun — il soggetto è obbligatorio","were","«È stato divertente» in italiano non ha soggetto, in inglese sì: \"it was\"."],
["ty","Hai lavorato ieri?","Did you work yesterday","did · work · yesterday — forma base","worked","La domanda al passato vuole l'ausiliare \"Did\"; il verbo resta nella forma base."],
["ty","Ho visto un film (usa il past simple)","I watched a movie|I saw a movie","watched · movie — passato con -ed","watch","Passato regolare: \"watch\" + -ed, e qui la -ed suona /t/."]]},

{ id:"irregular-past", title:"Past simple irregolare: went, ate, saw", blurb:"I verbi più comuni non prendono -ed. Comincia da questi dodici.", deck:"Due chiacchiere", body:`
<p>Come in italiano (fare → fatto, vedere → visto, prendere → preso), i verbi più comuni sono <b>irregolari</b>. Non c'è una regola: imparali a coppie.</p>
<div class="tbl"><table><tr><th>Presente</th><th>Passato</th><th>Presente</th><th>Passato</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to London.|/aɪ ˈwent tə ˈlʌndən/|Sono andato a Londra}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Abbiamo mangiato la pizza}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Ho visto un film}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Ho visto i miei amici}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Ho comprato un libro}}
<h3>Nelle domande e nelle negative, forma base</h3>
<p>L'ausiliare <b>did</b> porta già il passato, quindi il verbo torna alla forma base. È l'errore più comune: <i>Did you went?</i>.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Che cosa hai fatto?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Dove sei andato?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Non ci sono andato}}
<div class="tip">Errori comuni: <b>I goed.</b> ✗ → <b>I went.</b> ✓ · <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ · <b>Where you went?</b> ✗ → <b>Where did you go?</b> ✓</div>`,
check:[["Qual è il passato di \"go\"?",["goed","gone","went","going"],2,"Il passato di \"go\" è \"went\"."],["Come si dice «Che cosa hai fatto?»?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Dopo \"did\" va la forma base \"do\"."],["I didn't ___ breakfast. Che cosa va nello spazio?",["ate","eaten","eats","eat"],3,"Dopo \"didn't\" il verbo va nella forma base."]],
practice:[
["mc","Qual è il passato di \"eat\"?","ate","eated","eat","eaten","Il passato di \"eat\" è \"ate\"."],
["mc","Come si dice «Dove sei andato?»?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Dopo \"did\" il verbo va nella forma base."],
["mc","Come si dice «Ho comprato un libro»?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Il passato di \"buy\" è \"bought\"."],
["mc","Qual è il passato di \"see\"?","saw","seed","seen","sawed","Il passato di \"see\" è \"saw\"."],
["mc","Come si dice «Non ci sono andato»?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Dopo \"didn't\" il verbo va nella forma base."],
["or","Dove sei andato?","Where did you go","went","Domanda al passato: \"Where\" + ausiliare \"did\" + forma base \"go\"."],
["or","Che cosa hai mangiato?","What did you eat","ate","Con l'ausiliare \"did\" il verbo va nella forma base: \"eat\", non \"ate\"."],
["or","Ho visto un film","I saw a movie","see","Il passato di \"see\" è \"saw\"."],
["fi","I __ to Mexico last year.","L'anno scorso sono andato in Messico","went","go|goed|gone","Il passato di \"go\" è \"went\"."],
["fi","What did you __?","Che cosa hai mangiato?","eat","ate|eaten|eating","Dopo \"did\" il verbo va nella forma base."],
["fi","She __ a new phone.","Lei si è comprata un cellulare nuovo","bought","buyed|buy|buys","Il passato di \"buy\" è \"bought\"."],
["ty","Sono andato a Buenos Aires (usa il past simple)","I went to Buenos Aires","went · to · Buenos Aires — passato","go","Il passato di \"go\" è \"went\"."],
["ty","Che cosa hai fatto? (usa \"did\")","What did you do","what · did · do — forma base","done","Con l'ausiliare \"did\" il verbo torna alla forma base: \"do\"."],
["ty","Non sono andato (usa il past simple)","I didn't go","didn't · go — forma base","went","Dopo l'ausiliare \"didn't\" va \"go\", non \"went\"."]]},

{ id:"the", title:"the: dove l'italiano mette l'articolo e l'inglese no", blurb:"La vita, i cani, la mia famiglia: in inglese life, dogs e my family. Ripasso veloce di a e the.", deck:"Indicazioni e trasporti", body:`
<p>Sulle basi italiano e inglese coincidono: la prima volta <i>a</i> (un), la seconda <i>the</i> (il). Questo lo fai già bene. I problemi nascono dove l'italiano mette <i>il / la / i</i> e l'inglese no, e l'italiano l'articolo lo mette molto spesso.</p>
<h3>Ripasso: prima a, poi the</h3>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Ho comprato una camicia. La camicia è blu}}{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Puoi aprire la finestra?}}
<h3>In generale, senza the</h3>
<p>«La vita è dura», «Adoro i cani», «Qui il caffè è caro», «La salute è importante»: quando parli di qualcosa <b>in generale</b>, in inglese non c'è nessun articolo.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vita è dura}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Adoro i cani}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Qui il caffè è caro}}
<h3>Niente articolo davanti al possessivo</h3>
<p>In italiano si dice «la mia famiglia», «il tuo libro». In inglese il possessivo prende il posto dell'articolo: <i>my family</i>, <i>your book</i>, mai <i>the my family</i>.</p>
<h3>Il corpo: possessivo, non the</h3>
<p>Dove l'italiano dice «mi sono lavato <b>i</b> capelli», l'inglese usa l'aggettivo possessivo: <i>my hair</i>.</p>
{{ex:I washed my hair.|/aɪ ˈwɑːʃt maɪ ˈher/|Mi sono lavato i capelli}}{{ex:She broke her leg.|/ʃi ˈbroʊk hər ˈleg/|Si è rotta la gamba}}{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|Mi fa male la testa}}
<h3>Senza articolo: casa, lavoro, autobus</h3>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Vado al lavoro in autobus}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Sono a casa}}
<p>Anche i nomi dei paesi di solito non vogliono l'articolo: «l'Italia» è <i>Italy</i> (ma <i>the United States</i>).</p>
<div class="tip">Errori comuni: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ · <b>the my family</b> ✗ → <b>my family</b> ✓ · <b>I washed the hair.</b> ✗ → <b>I washed my hair.</b> ✓ · <b>I go to the work.</b> ✗ → <b>I go to work.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. Che cosa va nello spazio?",["A","An","The","(nessun articolo)"],2,"Hai già nominato il gatto: \"the\"."],["I go to ___ work by bus. Che cosa va nello spazio?",["a","the","an","(nessun articolo)"],3,"\"Go to work\" va senza articolo."],["Come si dice «Mi sono lavato i capelli»?",["I washed the hair.","I washed my hair.","I washed hair.","I washed a hair."],1,"Con le parti del corpo l'inglese usa il possessivo: \"my hair\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Che cosa va nello spazio?","The","A","An","Some","Hai già nominato la camicia: \"the\"."],
["mc","Come si dice «La vita è bella»?","Life is beautiful.","The life is beautiful.","A life is beautiful.","The life are beautiful.","Quando parli di qualcosa in generale, niente articolo."],
["mc","Come si dice «Lei si è rotta la gamba»?","She broke her leg.","She broke the leg.","She broke a leg.","She broke leg.","Con le parti del corpo l'inglese usa il possessivo: \"her leg\"."],
["mc","Qual è la frase giusta?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" e \"by bus\" vanno senza articolo."],
["mc","Come si dice «Adoro i cani»?","I love dogs.","I love the dogs.","I love a dogs.","The dogs I love.","In generale: plurale senza \"the\", \"I love dogs\"."],
["or","Puoi aprire la finestra?","Can you open the window","a","Nella domanda l'ausiliare \"can\" va prima di \"you\"; \"the\" perché tutti e due sapete di quale finestra si parla."],
["or","Mi fa male la testa","My head hurts","The hurt","In inglese si dice \"my head\", non \"the head\"; e \"hurts\" prende la -s della terza persona."],
["or","La vita è dura","Life is hard","The","Con i nomi astratti in senso generale non c'è \"the\": \"Life is hard\"."],
["fi","I saw a movie. __ movie was great.","Ho visto un film. Il film era fantastico","The","A|An|Some","Hai già nominato il film: \"the\"."],
["fi","I brushed __ teeth.","Mi sono lavato i denti","my","the|a|some","Con le parti del corpo si usa il possessivo: \"my teeth\"."],
["fi","I'm at __.","Sono a casa","home","the home|a home|house","\"At home\" va senza articolo."],
["ty","Mi sono lavato i capelli (usa il past simple)","I washed my hair","washed · hair — usa il possessivo","the","Con le parti del corpo l'inglese usa il possessivo: \"my hair\"."],
["ty","Dov'è la stazione?","Where is the station|Where's the station","where · station — usa the","a","Con \"be\", \"is\" va prima del soggetto; \"the\" perché è la stazione di qui."],
["ty","Il latte ti fa bene","Milk is good for you","milk · good — il latte in generale","The","In generale \"milk\" va senza articolo; non numerabile e singolare: \"is\" (accordo)."]]},

{ id:"adjectives", title:"Aggettivi e paragoni: big houses, cheaper, the best", blurb:"L'aggettivo va prima del nome e non cambia mai. Per fare un paragone, -er o more, e than.", deck:"Acquisti e pagamenti", body:`
<p>In italiano l'aggettivo di solito va <b>dopo</b> il nome e si accorda: «delle case grandi». In inglese va <b>prima</b> e <b>non cambia mai</b>: <i>big houses</i>.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|una borsa grande}}{{ex:red cars|/ˈred ˈkɑːrz/|macchine rosse}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Questa borsa è grande}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|È troppo piccolo}}
<h3>Paragoni: -er o more, e than</h3>
<p>Parole brevi: <b>-er</b>. Parole lunghe: <b>more</b>. Mai tutte e due insieme (<i>more cheaper</i>), e niente <i>more big</i>. Il «di» e il «che» del paragone si dicono <b>than</b>: «più grande di» è <i>bigger than</i>, non <i>bigger of</i> né <i>bigger that</i>.</p>
<div class="tbl"><table><tr><th>Normale</th><th>Più…</th><th>Il più…</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Questo è più economico}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|È più caro di quello}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Avete una taglia più grande?}}
<h3>Superlativo: con the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Questo è il miglior ristorante della zona}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Qual è il più economico?}}
<div class="tip">Errori comuni: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>more cheaper</b> ✗ → <b>cheaper</b> ✓ · <b>bigger of / bigger that</b> ✗ → <b>bigger than</b> ✓</div>`,
check:[["Qual è il comparativo di \"big\"?",["more big","biger","bigger","most big"],2,"Parola breve: -er. In \"big\" (consonante + vocale + consonante) la g raddoppia: \"bigger\". Invece \"cheap\" → \"cheaper\"."],["This is ___ expensive than that. Che cosa va nello spazio?",["more","most","much","very"],0,"Parola lunga: il comparativo vuole \"more\"."],["Qual è il superlativo di \"good\"?",["the goodest","the most good","the better","the best"],3,"\"Good\" → \"better\" → \"the best\"."]],
practice:[
["mc","Qual è il comparativo di \"cheap\"?","cheaper","more cheap","more cheaper","most cheap","Parole brevi: -er. Mai \"more\" + -er."],
["mc","Come si dice «Questo è più caro»?","This is more expensive.","This is expensiver.","This is most expensive.","This is more expensiver.","Parole lunghe: \"more\" + aggettivo."],
["mc","Come si dice «delle case grandi»?","big houses","bigs houses","houses big","houses bigs","L'aggettivo va prima del nome e non prende mai la -s."],
["mc","Come si dice «È più economico dell'altro»?","It's cheaper than the other one.","It's cheaper that the other one.","It's more cheap that the other one.","It's cheaper as the other one.","Il «di» del paragone è \"than\", non \"that\"."],
["mc","Come si dice «È il miglior ristorante»?","It's the best restaurant.","It's the most good restaurant.","It's the restaurant best.","It's best restaurant the.","\"Good\" → \"better\" → \"the best\", e l'aggettivo va prima del nome."],
["or","Avete una taglia più grande?","Do you have a bigger size","Are","La domanda con \"have\" vuole l'ausiliare \"Do\"."],
["or","Queste scarpe sono più economiche","These shoes are cheaper","is","\"Shoes\" è plurale: \"are\" (accordo); l'aggettivo non cambia."],
["or","Questo è più economico di quello","This is cheaper than that","more","\"-er\" e \"more\" non vanno insieme."],
["fi","It's __ small.","È troppo piccolo","too","much|more|most","«Troppo» è \"too\"."],
["fi","This is cheaper __ that one.","Questo è più economico di quello","than","then|that|more","Il «di» del paragone è \"than\"."],
["fi","It's the __ expensive one.","È il più caro","most","more|much|very","Parola lunga: il superlativo è \"the most\"."],
["ty","Avete una taglia più piccola?","Do you have a smaller size","do · smaller · size — usa l'ausiliare","Are","La domanda con \"have\" vuole l'ausiliare \"Do\"."],
["ty","Questo è il migliore","This is the best|This one is the best","this · the best — usa the","a","Superlativo: \"the best\"; con \"this\" il verbo è \"is\" (accordo)."],
["ty","Ho una macchina rossa","I have a red car","red · car — prima l'aggettivo, poi il nome","reds","L'aggettivo va prima del nome: \"a red car\"."]]},

{ id:"going-to", title:"Progetti: be going to", blurb:"In italiano per i progetti basta il presente: «domani vado a Roma». In inglese, per un piano già deciso, be going to.", deck:"Due chiacchiere", body:`
<p>In italiano per i progetti usi spesso il presente: «Domani vado a Roma», «Stasera studio». In inglese il present simple non funziona così (<i>I go to Rome tomorrow</i> ✗). Per un piano già deciso si usa <b>be going to</b> + forma base: «Ho intenzione di viaggiare», «Viaggerò» = <i>I'm going to travel</i>. E <b>be non si può omettere</b>: cambia con il soggetto (am / is / are).</p>
{{ex:I'm going to visit New York.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌnuː ˈjɔːrk/|Visiterò New York}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Ha deciso di comprarsi una macchina}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Adesso ceniamo}}
<p>Per un viaggio già organizzato si sente anche <i>I'm going to Rome tomorrow</i>: qui <i>going</i> è proprio «andare», nella forma <i>be</i> + -ing.</p>
<h3>Negative e domande</h3>
<p>Come con ogni <i>be</i>: <i>not</i> va dopo, e nella domanda <i>be</i> va prima del soggetto. Niente <i>do</i>.</p>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Non ci vado}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Vieni?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Che cosa fai questo fine settimana?}}
<h3>Previsioni da quello che vedi</h3>
<p>Nota: «Sta per piovere» in italiano non ha soggetto, in inglese sì: <i>it</i>.</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Sta per piovere}}
<h3>Espressioni di tempo</h3>
<p><i>tomorrow</i> (domani), <i>tonight</i> (stasera), <i>this weekend</i> (questo fine settimana), <i>next week</i> (la settimana prossima) vanno alla fine della frase.</p>
<div class="tip">Nel parlato veloce <i>going to</i> diventa <b>gonna</b>. E non dimenticare <i>be</i>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓ · <b>I go to Rome tomorrow.</b> ✗ → <b>I'm going to Rome tomorrow.</b> ✓</div>`,
check:[["Come si dice «Domani vedo il mio amico» (è già deciso)?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"\"Be\" + \"going to\" + forma base: il presente italiano dei progetti qui diventa \"going to\"."],["She ___ going to study. Che cosa va nello spazio?",["am","are","is","be"],2,"Con \"she\", \"is\"."],["Come si dice «Che cosa fai questo fine settimana?»?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Parola interrogativa + \"be\" + soggetto + \"going to\"."]],
practice:[
["mc","Come si dice «Vado a Lima» (ho già deciso)?","I'm going to go to Lima.","I going to go to Lima.","I'm going go to Lima.","I'm go to Lima going.","Non dimenticare \"am\": \"be\" + \"going to\" + verbo."],
["mc","They ___ going to come. Che cosa va nello spazio?","are","is","am","be","Con \"they\", \"are\"."],
["mc","Come si dice «Sta per piovere»?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Dopo \"going to\" va la forma base, e la frase ha bisogno di \"it\"."],
["mc","Come si dice «Non ci andrò»?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","La negativa mette \"not\" dopo \"be\", senza \"don't\"."],
["mc","Come si dice «Hai intenzione di venire?»?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Nella domanda \"be\" va prima di \"you\"."],
["or","Hai intenzione di venire?","Are you going to come","Do","La domanda comincia con l'ausiliare \"Are\": \"Are you going to…?\"."],
["or","Loro hanno intenzione di viaggiare","They are going to travel","is","Con \"they\" l'ausiliare è \"are\" (accordo)."],
["or","Adesso ceniamo","We're going to have dinner","a","I pasti vanno senza articolo: \"have dinner\"."],
["fi","I'm going __ study tonight.","Stasera ho intenzione di studiare","to","for|at|will","\"Going to\" + forma base."],
["fi","__ you going to come?","Hai intenzione di venire?","Are","Do|Is|Will","Con \"you\", \"Are\"."],
["fi","It's going to __ tomorrow.","Domani pioverà","rain","rains|raining|rained","Dopo \"going to\" va la forma base."],
["ty","Sta per piovere (usa \"going to\")","It's going to rain","it · going to · rain — con soggetto","rains","«Sta per piovere» in italiano non ha soggetto; in inglese serve \"it\"."],
["ty","Che cosa hai intenzione di fare?","What are you going to do","what · going to · do — usa are","will","Parola interrogativa + ausiliare \"are\" + \"you\" + \"going to\"."],
["ty","Ho intenzione di vedere un film","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — forma base","watching","\"Going to\" + forma base."]]},

{ id:"joining", title:"Unire le frasi: and, but, or, so, because", blurb:"Due frasi brevi in una sola. E attenzione a «perché»: nella risposta è because, mai why.", deck:"Emozioni e reazioni", body:`
<p>Se dici solo frasi brevi, il discorso suona spezzettato. Con queste parole unisci le idee e parli in modo più naturale.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Mi piacciono il caffè e il tè}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Sono stanco ma felice}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Caffè o tè?}}
<h3>so: quindi</h3>
<p>causa + <b>so</b> + risultato, come «quindi» o «perciò».</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Ero stanca, quindi sono andata a casa}}
<h3>because e because of</h3>
<p>In italiano «perché» serve sia per la domanda sia per la risposta. In inglese no: <i>why</i> chiede, <b>because</b> spiega. «Sono in ritardo perché…» è <i>I'm late because…</i>, mai <i>why</i>.</p>
<p><b>because</b> va prima di una frase con soggetto e verbo; <b>because of</b> («per», «a causa di») va prima di un nome. E dopo <i>because</i> il soggetto non si omette: <i>because it was raining</i>, non <i>because was raining</i>.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Sono andato a casa perché ero stanco}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Sono rimasto a casa perché pioveva}}{{ex:I stayed home because of the rain.|/aɪ ˈsteɪd ˈhoʊm bɪkəz əv ðə ˈreɪn/|Sono rimasto a casa per la pioggia}}
<h3>too: anche</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Piace anche a me}}
<div class="tip">Non usare <i>because</i> e <i>so</i> nella stessa frase: <b>Because I was tired, so I went home.</b> ✗. Scegline uno. E nella risposta: <b>I'm late why…</b> ✗ → <b>I'm late because…</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. Che cosa va nello spazio?",["because","but","so","or"],2,"Prima la causa, poi il risultato: \"so\"."],["I stayed home ___ I was sick. Che cosa va nello spazio?",["because","so","but","and"],0,"Prima il risultato, poi la causa: \"because\"."],["Come dici «Vuoi un caffè o un tè?»?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Per scegliere tra due cose, \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. Che cosa va nello spazio?","but","so","or","because","Le idee opposte si uniscono con \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. Che cosa va nello spazio?","so","because","but","or","Prima la causa, poi il risultato: \"so\"."],
["mc","I ate a sandwich ___ I was hungry. Che cosa va nello spazio?","because","so","but","or","Prima il risultato, poi la causa: \"because\". Qui «perché» non è mai \"why\"."],
["mc","I stayed home ___ the rain. Che cosa va nello spazio?","because of","because","so","but","Prima di un nome (\"the rain\") va \"because of\"; prima di una frase, \"because\"."],
["mc","Come si dice «Sono stanca ma felice»?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","«Ma» è \"but\"."],
["or","Mi piace il tè, ma a lei no","I like tea but she doesn't","don't","Con \"she\" la negativa è \"doesn't\" (terza persona)."],
["or","Lui lavora e lei studia","He works and she studies","work","Con \"he\" e \"she\" tutti e due i verbi prendono la -s: terza persona."],
["or","Avevo fame, quindi ho mangiato","I was hungry so I ate","because","Prima la causa, poi \"so\" e il risultato."],
["fi","I'm tired __ happy.","Sono stanco ma felice","but","so|because|or","«Ma» è \"but\"."],
["fi","I stayed home __ it was raining.","Sono rimasto a casa perché pioveva","because","so|but|or","Prima il risultato, poi la causa: \"because\"."],
["fi","Coffee __ tea?","Caffè o tè?","or","so|but|because","Per scegliere tra due cose, \"or\"."],
["ty","Sono stanco ma felice","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — usa but","so","«Ma» è \"but\"."],
["ty","Sono rimasto a casa perché pioveva","I stayed home because it was raining|I stayed at home because it was raining|I stayed home because it rained|I stayed at home because it rained","stayed home · because · rain — con soggetto","so","Dopo \"because\" serve un soggetto: \"it was raining\", mai \"because was raining\"."],
["ty","Lui non è venuto per la pioggia (usa il past simple)","He didn't come because of the rain","didn't · come · because of — la pioggia","came","Negativa al passato con l'ausiliare \"didn't\"; \"because of\" va prima di un nome."]]},

{ id:"false-friends", title:"Falsi amici: actually non vuol dire «attualmente»", blurb:"Parole che sembrano italiane ma significano un'altra cosa, e come sfruttare le parole trasparenti di cui puoi fidarti.", deck:"Falsi amici", body:`
<p>Migliaia di parole inglesi somigliano all'italiano e significano la stessa cosa: <i>hotel, important, family, possible</i>. Sono le «parole trasparenti», e quasi tutte quelle di origine latina sono affidabili. Alcune, però, molto frequenti, sono <b>falsi amici</b>: sembrano uguali e significano un'altra cosa. Ecco quelle che creano più problemi.</p>
<h3>Persone e luoghi</h3>
<p><i>factory</i> è la «fabbrica»; la «fattoria» è <i>farm</i>. <i>library</i> è la «biblioteca»; la «libreria» è <i>bookstore</i> (e la libreria come mobile è <i>bookcase</i>). <i>parents</i> sono i «genitori»; i «parenti» sono <i>relatives</i>. <i>college</i> è l'«università», non il «collegio».</p>
{{ex:She works in a factory.|/ʃi ˈwɜːrks ɪn ə ˈfæktəri/|Lavora in una fabbrica}}{{ex:The library is free.|/ðə ˈlaɪbreri ɪz ˈfriː/|La biblioteca è gratuita}}{{ex:Is there a bookstore near here?|/ɪz ðer ə ˈbʊkstɔːr nɪr ˈhɪr/|C'è una libreria qui vicino?}}{{ex:My parents live here.|/maɪ ˈperənts ˈlɪv ˈhɪr/|I miei genitori abitano qui}}
<h3>Avverbi e aggettivi</h3>
<p><i>actually</i> è «in realtà»; «attualmente» è <i>currently</i>. <i>eventually</i> è «alla fine», non «eventualmente». <i>sensible</i> è «assennato»; «sensibile» è <i>sensitive</i>. <i>educated</i> è «istruito»; «educato» è <i>polite</i>.</p>
{{ex:Actually, I'm from Italy.|/ˈæktʃuəli aɪm frəm ˈɪtəli/|In realtà, vengo dall'Italia}}{{ex:Currently, I work at home.|/ˈkɜːrəntli aɪ ˈwɜːrk ət ˈhoʊm/|Attualmente lavoro da casa}}{{ex:Eventually, she found a job.|/ɪˈventʃuəli ʃi ˈfaʊnd ə ˈdʒɑːb/|Alla fine ha trovato lavoro}}{{ex:He's very sensible.|/hiz ˈveri ˈsensəbl/|È molto assennato}}{{ex:She's very sensitive.|/ʃiz ˈveri ˈsensətɪv/|È molto sensibile}}{{ex:He's very polite.|/hiz ˈveri pəˈlaɪt/|È molto educato}}
<h3>Verbi</h3>
<p>«Assistere a» una lezione è <i>attend</i>; <i>assist</i> vuol dire «aiutare». E <i>attend</i> non è «attendere», che si dice <i>wait</i>. <i>pretend</i> è «fingere», non «pretendere» (<i>demand</i>). <i>realize</i> è «rendersi conto»: oggi anche in italiano si dice «realizzare» in questo senso, ma <i>realize</i> non vuol dire realizzare un progetto (<i>carry out</i>).</p>
{{ex:I attend class every day.|/aɪ əˈtend ˈklæs ˈevri ˈdeɪ/|Vado a lezione tutti i giorni}}{{ex:He's pretending to sleep.|/hiz prɪˈtendɪŋ tə ˈsliːp/|Fa finta di dormire}}{{ex:I didn't realize.|/aɪ ˈdɪdnt ˈriːəlaɪz/|Non me ne sono reso conto}}
<h3>Cose di tutti i giorni</h3>
<p><i>camera</i> è la «macchina fotografica»; la «camera» è <i>room</i>. <i>magazine</i> è una «rivista»; il «magazzino» è <i>warehouse</i>. <i>argument</i> è un «litigio»; l'«argomento» è <i>topic</i>. <i>rumor</i> è una «voce», un pettegolezzo; il «rumore» è <i>noise</i>. <i>lecture</i> è una lezione all'università o una conferenza; la «lettura» è <i>reading</i>.</p>
{{ex:I bought a new camera.|/aɪ ˈbɔːt ə ˈnuː ˈkæmərə/|Ho comprato una macchina fotografica nuova}}{{ex:We had an argument.|/wi ˈhæd ən ˈɑːrgjumənt/|Abbiamo litigato}}
<h3>Falsi a metà</h3>
<p>Alcuni funzionano solo in parte. <i>discuss</i> è «discutere» nel senso di parlare di un argomento, mai di litigare (quello è <i>argue</i>). <i>constipated</i> non vuol dire «costipato» (raffreddato), ma «stitico». <i>support</i> è «sostenere», non «sopportare» (<i>put up with</i>). <i>introduce</i> è «presentare» una persona.</p>
<h3>Le parole trasparenti che ti aiutano</h3>
<p>Queste terminazioni funzionano quasi sempre. Fai solo attenzione all'accento tonico (la sillaba pronunciata più forte): in inglese cade spesso in un altro punto. <i>comfortable</i> /ˈkʌmftərbl/ è forte all'inizio, non sul «te» di «confortevole».</p>
<div class="tbl"><table><tr><th>Inglese</th><th>Italiano</th><th>Esempio</th></tr><tr><td class="k">-tion</td><td>-zione</td><td class="k">information</td></tr><tr><td class="k">-ty</td><td>-tà</td><td class="k">city</td></tr><tr><td class="k">-ous</td><td>-oso</td><td class="k">famous</td></tr><tr><td class="k">-ly</td><td>-mente</td><td class="k">really</td></tr></table></div>
<div class="tip">Da ricordare: <b>actually</b> = in realtà · <b>factory</b> = fabbrica (fattoria = <b>farm</b>) · <b>library</b> = biblioteca (libreria = <b>bookstore</b>) · <b>camera</b> = macchina fotografica (camera = <b>room</b>) · <b>assist</b> = aiutare (assistere a = <b>attend</b>)</div>`,
check:[["Che cosa significa \"He works in a factory\"?",["Lavora in una fattoria","Lavora in una fabbrica","Lavora in un magazzino","Lavora in un negozio"],1,"\"Factory\" = fabbrica; «fattoria» è \"farm\"."],["Come si dice «Attualmente abito a Milano»?",["Actually, I live in Milan.","Actual, I live in Milan.","Currently, I live in Milan.","In actual, I live in Milan."],2,"«Attualmente» è \"currently\"; \"actually\" significa «in realtà»."],["«La libreria apre alle nove» in inglese è:",["The bookstore opens at nine.","The library opens at nine.","The bookcase opens at nine.","The librarian opens at nine."],0,"«Libreria» (il negozio) è \"bookstore\"; \"library\" è la «biblioteca» e \"bookcase\" è la libreria di casa, il mobile."]],
practice:[
["mc","Che cosa significa \"actually\"?","in realtà","attualmente","attivamente","a volte","\"Actually\" = in realtà; «attualmente» è \"currently\"."],
["mc","Come si dice «È un ragazzo molto educato»?","He's a very polite boy.","He's a very educated boy.","He's a very educational boy.","He's a very political boy.","«Educato» è \"polite\"; \"educated\" vuol dire «istruito»."],
["mc","Come si dice «Il lunedì assisto alla lezione»?","I attend class on Mondays.","I assist class on Mondays.","I assist to class on Mondays.","I attend to class on Mondays.","«Assistere a» è \"attend\"; \"assist\" vuol dire «aiutare»."],
["mc","Che cosa significa \"He's very sensible\"?","È molto assennato.","È molto sensibile.","È molto sentimentale.","È molto simpatico.","\"Sensible\" = assennato; «sensibile» è \"sensitive\"."],
["mc","Come si dice «Mio nonno ha una fattoria»?","My grandfather has a farm.","My grandfather has a factory.","My grandfather has a farmer.","My grandfather has a fair.","«Fattoria» è \"farm\"; \"factory\" è la «fabbrica»."],
["or","Dov'è la libreria?","Where is the bookstore","library","Nella domanda \"is\" va prima del soggetto (\"the bookstore\"). «Libreria» è \"bookstore\"; \"library\" è la biblioteca."],
["or","Lei lavora in biblioteca","She works at the library","work","Con \"she\", \"works\" prende la -s (terza persona). Biblioteca = \"library\"."],
["or","Ci hai fatto caso?","Did you realize","realized","Domanda al passato: ausiliare \"Did\" + forma base \"realize\" (rendersi conto)."],
["fi","__, I'm from Italy.","In realtà, vengo dall'Italia","Actually","Currently|Actual|Now","«In realtà» è \"actually\"."],
["fi","I bought it at the __.","L'ho comprato in libreria","bookstore","library|bookcase|book","«Libreria» è \"bookstore\"; \"library\" è «biblioteca»."],
["fi","I took this photo with my new __.","Ho fatto questa foto con la mia macchina fotografica nuova","camera","room|machine|chamber","«Macchina fotografica» è \"camera\"; la «camera» (stanza) è \"room\"."],
["ty","Lei lavora in una fabbrica","She works in a factory|She works at a factory","she · factory — è la fabbrica, non \"farm\"","farm","Con \"she\" il verbo prende la -s: terza persona. «Fabbrica» è \"factory\"; «fattoria» è \"farm\"."],
["ty","Lui non se n'è reso conto (usa il past simple)","He didn't realize|He didn't notice","didn't · realize — forma base","realized","Negativa al passato con l'ausiliare \"didn't\"; \"realize\" = rendersi conto."],
["ty","Lei assiste alle lezioni (usa \"class\")","She attends class|She attends classes|She attends her classes|She goes to class|She goes to classes","attend · class — usa she","assists","Con \"she\", \"attends\" prende la -s (terza persona); «assistere a» è \"attend\" (e «attendere» vuol dire \"wait\")."]]}
];
