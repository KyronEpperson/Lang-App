/* fr-en stage B1: lessons for French speakers (France). English side shared with es-en (parity.js). Contrasts follow
   docs/profiles/fr.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2 : for, since et « depuis »", blurb:"Une situation qui a commencé dans le passé et qui dure encore. For + durée, since + point de départ.", deck:"Se présenter", body:`
<p>Deuxième emploi du <i>present perfect</i> : une situation qui <b>a commencé dans le passé et qui dure encore</b>. Le français met le présent avec « depuis » (« J'habite ici depuis 2020 », « Je travaille ici depuis trois ans »), mais l'anglais exige <b>have/has + participe passé</b>.</p>
{{ex:I've lived in London for five years.|/aɪv ˈlɪvd ɪn ˈlʌndən fər ˈfaɪv ˈjɪrz/|J'habite à Londres depuis cinq ans}}{{ex:She has worked here since 2020.|/ʃi həz ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Elle travaille ici depuis 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Je la connais depuis longtemps}}
<h3>for et since : deux mots pour « depuis »</h3>
<p>« Depuis » a deux traductions. Pose-toi la question : est-ce une <b>durée</b> (cinq ans, deux heures) ou un <b>point de départ</b> (2020, lundi) ?</p>
<div class="tbl"><table><tr><th>for + durée (« depuis cinq ans », « ça fait cinq ans que »)</th><th>since + point de départ (« depuis 2020 »)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long…?</h3>
<p>« Depuis combien de temps… ? » se dit <i>How long have you…?</i>, avec l'auxiliaire devant le sujet. Avec <i>he, she, it</i>, l'auxiliaire est <i>has</i>.</p>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Depuis combien de temps es-tu là ?}}{{ex:How long has she studied English?|/ˈhaʊ ˈlɔːŋ həz ʃi ˈstʌdid ˈɪŋglɪʃ/|Depuis combien de temps apprend-elle l'anglais ?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Je viens de finir}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Je l'ai déjà vu}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Tu as déjà mangé ?}}
<p>En anglais américain, on dit aussi <i>Did you eat yet?</i> et <i>I already saw it</i> ; les deux formes sont correctes.</p>
<div class="tip">L'erreur typique des francophones : <b>I live here since 2020.</b> ✗ → <b>I've lived here since 2020.</b> ✓. Et « depuis cinq ans » se dit <i>for</i>, pas <i>since</i> : <b>I am here since two years</b> ✗ → <b>I've been here for two years</b> ✓.</div>`,
check:[["I've lived here ___ three years. Que mettre dans le trou ?",["since","for","during","from"],1,"« Depuis » + durée se dit \"for\"."],["I've worked here ___ 2020. Que mettre dans le trou ?",["for","in","since","at"],2,"« Depuis » + point de départ se dit \"since\"."],["« Depuis combien de temps es-tu là ? » en anglais :",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"C'est \"How long have you\" + participe passé."]],
practice:[
["mc","I've known him ___ ten years. Que mettre dans le trou ?","for","since","from","during","« Depuis » + durée se dit \"for\"."],
["mc","She's lived here ___ 2019. Que mettre dans le trou ?","since","for","in","at","« Depuis » + point de départ se dit \"since\"."],
["mc","« Depuis combien de temps es-tu là ? » en anglais :","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Dans la question, l'auxiliaire \"have\" passe devant le sujet."],
["mc","Comment dit-on « Je viens de finir » ?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","C'est \"have\" + \"just\" + participe passé."],
["mc","« Tu as déjà mangé ? » en anglais :","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Dans une question, « déjà » se dit souvent \"yet\", en fin de phrase."],
["or","Elle habite ici depuis 2020","She has lived here since 2020","have","Avec \"she\", l'auxiliaire est \"has\" : troisième personne."],
["or","Depuis combien de temps habites-tu ici ?","How long have you lived here","has live","Avec \"you\", l'auxiliaire est \"have\" (accord) et il passe devant le sujet ; ensuite vient le participe passé \"lived\", pas le présent."],
["or","J'habite ici depuis cinq ans","I've lived here for five years","since","« Depuis » + durée se dit \"for\", pas \"since\"."],
["fi","I've worked here __ two years.","Je travaille ici depuis deux ans","for","since|from|during","« Depuis » + durée se dit \"for\"."],
["fi","I've been here __ Monday.","Je suis là depuis lundi","since","for|at|during","« Depuis » + point de départ se dit \"since\"."],
["fi","Have you finished __?","Tu as déjà fini ?","yet|already","ever|never|since","Dans une question, « déjà » se dit souvent \"yet\"."],
["ty","Depuis combien de temps est-elle ici ?","How long has she been here","how long · been · here — question avec l'auxiliaire","is","Avec \"she\", l'auxiliaire est \"has\" (troisième personne), et il passe devant le sujet."],
["ty","Mon frère travaille ici depuis 2021","My brother has worked here since 2021|My brother has been working here since 2021","work · here · since — avec un sujet à la troisième personne","works","Avec \"my brother\" (troisième personne), c'est \"has\" + participe passé, pas le présent."],
["ty","J'habite ici depuis trois ans","I've lived here for three years|I've been living here for three years","live · here · three years — avec \"for\"","since","« Depuis » + durée se dit \"for\", avec le present perfect."]]},
{ id:"narrative", title:"Les temps du récit : prétérit, be + -ing et past perfect", blurb:"Le décor au prétérit en be + -ing, les événements au prétérit, et ce qui s'est passé avant avec had + participe passé.", deck:"Cinéma, séries et argot", body:`
<p>Pour raconter une histoire, on mélange trois temps. Chacun a son rôle, assez proche des temps du récit en français :</p>
<div class="tbl"><table><tr><th>Temps</th><th>Rôle</th><th>Exemple</th></tr><tr><td class="k">prétérit en be + -ing (« je marchais »)</td><td>le décor, ce qui était en train de se passer</td><td>I was walking home.</td></tr><tr><td class="k">prétérit (« j'ai vu »)</td><td>les événements</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect (« il avait déménagé »)</td><td>ce qui s'est passé avant</td><td>He had moved to Miami.</td></tr></table></div>
<h3>Décor + événement</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Je rentrais à pied quand j'ai vu un vieil ami}}
<h3>Past perfect : had + participe passé</h3>
<p>C'est l'équivalent du plus-que-parfait : une action <b>antérieure</b> à un autre moment du passé. <i>had</i> est le même à toutes les personnes.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|À mon arrivée, le film avait déjà commencé}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Je n'avais jamais vu la neige}}
<p>Attention : le français emploie le plus-que-parfait plus souvent que l'anglais. Pour une simple suite d'événements racontés dans l'ordre, l'anglais reste au prétérit.</p>
<h3>Les mots pour enchaîner</h3>
<p><i>first</i> (d'abord), <i>then</i> (ensuite, puis), <i>after that</i> (après ça), <i>finally</i> (enfin).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|D'abord, on a dîné. Ensuite, on a regardé un film}}
<h3>Questions et négations</h3>
<p>Au prétérit, les questions et les négations prennent l'auxiliaire <i>did</i> + base verbale : <b>Did you see him?</b>, <b>I didn't see him</b>, pas <i>Did you saw</i>. Au prétérit en be + -ing, l'auxiliaire est <i>was/were</i>, qui s'accorde avec le sujet.</p>
{{ex:What were you doing when I called?|/ˈwʌt wər ju ˈduːɪŋ wen aɪ ˈkɔːld/|Qu'est-ce que tu faisais quand j'ai appelé ?}}{{ex:Did you see the movie?|/dɪd ju ˈsiː ðə ˈmuːvi/|Tu as vu le film ?}}
<div class="tip"><i>then</i> (ensuite) et <i>than</i> (« que », dans les comparaisons) se ressemblent, mais ce sont deux mots différents. Pour raconter, c'est <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Que mettre dans le trou ?",["has","was","had","did"],2,"Ce qui s'est passé avant se dit avec \"had\" + participe passé."],["I ___ walking home when it started to rain. Que mettre dans le trou ?",["was","had","did","have"],0,"Le décor de l'histoire est au prétérit en be + -ing."],["Quelle phrase parle d'une action antérieure à un autre moment du passé ?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"Had\" + participe passé, c'est le past perfect."]],
practice:[
["mc","When I got there, the movie ___ already started. Que mettre dans le trou ?","had","has","was","did","Ce qui s'est passé avant se dit avec \"had\" + participe passé."],
["mc","I ___ cooking when the phone rang. Que mettre dans le trou ?","was","had","did","have","Le décor de l'histoire est au prétérit en be + -ing."],
["mc","Comment dit-on « À mon arrivée, le train était déjà parti » ?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Ce qui s'est passé avant se dit avec \"had\" + participe passé."],
["mc","Pour continuer l'histoire, comment dit-on « ensuite » ?","then","than","that","them","\"Then\" veut dire « ensuite » ; \"than\" sert dans les comparaisons."],
["mc","Comment dit-on « Je n'avais jamais vu la neige » ?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","C'est \"had\" + \"never\" + participe passé."],
["or","Tu as vu ton ami ?","Did you see your friend","saw","Dans une question au prétérit, on met l'auxiliaire \"did\" et la base verbale \"see\"."],
["or","Elle rentrait à pied","She was walking home","were","Avec \"she\", c'est \"was\" : accord."],
["or","Le train était déjà parti","The train had already left","has","Ce qui s'est passé avant se dit avec \"had\" + participe passé."],
["fi","I was sleeping __ you called.","Je dormais quand tu as appelé","when","than|so|had","« Quand » se dit \"when\"."],
["fi","The bus had already __.","Le bus était déjà parti","left|gone","leave|leaving|leaves","Après \"had\" vient le participe passé."],
["fi","First we ate. __ we watched a movie.","D'abord, on a mangé. Ensuite, on a regardé un film","Then|After that|Next","Than|Because|When","« Ensuite » se dit \"then\"."],
["ty","Je n'ai pas vu le film (au prétérit)","I didn't see the movie|I didn't watch the movie","see · movie — négation avec l'auxiliaire","saw","Au prétérit, seul l'auxiliaire \"didn't\" porte le passé : \"didn't see\", pas \"didn't saw\"."],
["ty","Ils étaient en train de regarder la télé","They were watching TV|They were watching television","watch · TV — au prétérit en be + -ing","was","Avec \"they\", c'est \"were\" + -ing : accord."],
["ty","Le film avait déjà commencé","The movie had already started|The movie had started already","movie · already · start — avec \"had\" + participe passé","has","Ce qui s'est passé avant se dit avec \"had\" + participe passé."]]},
{ id:"conditionals", title:"Phrases en if (2 et 3) : l'imaginaire", blurb:"Si j'avais… → if + prétérit, would. Si j'avais eu… → if + had + participe passé, would have.", deck:"Émotions et réactions", body:`
<p>Ces phrases servent à imaginer ce qui n'est pas réel, et elles suivent presque exactement le français : « si j'avais…, je ferais… » et « si j'avais eu…, j'aurais… ». Après « si », le français met l'imparfait, un temps du passé ; l'anglais met aussi un passé après <i>if</i>. Et comme le conditionnel ne va jamais après « si », <b>would ne va jamais après if</b>.</p>
<h3>Deuxième type : un présent imaginaire</h3>
<p><b>If + prétérit, would + base verbale</b>. « Si j'avais le temps » → <i>If I had time</i>.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Si j'avais le temps, je voyagerais}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|À ta place, j'accepterais}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Qu'est-ce que tu ferais ?}}
<h3>Troisième type : un passé imaginaire</h3>
<p><b>If + had + participe passé, would have + participe passé</b>. C'est le même schéma que « si j'avais révisé, j'aurais réussi ».</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Si j'avais révisé, j'aurais réussi}}
<h3>Les regrets : should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|J'aurais dû appeler}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Si seulement j'avais plus de temps}}
<div class="tbl"><table><tr><th>Type</th><th>Partie avec if</th><th>Conséquence</th></tr><tr><td>1 (possible)</td><td class="k">présent</td><td class="k">will</td></tr><tr><td>2 (imaginaire, maintenant)</td><td class="k">prétérit</td><td class="k">would</td></tr><tr><td>3 (imaginaire, dans le passé)</td><td class="k">had + participe passé</td><td class="k">would have + participe passé</td></tr></table></div>
<h3>Les questions</h3>
<p>Dans les questions, l'auxiliaire <i>would</i> passe devant le sujet. Et « ce serait » se dit avec le sujet <i>it</i> ou <i>that</i> : <i>It would be great</i>.</p>
{{ex:Would you move to another country?|/wəd ju ˈmuːv tu əˈnʌðər ˈkʌntri/|Tu partirais vivre dans un autre pays ?}}{{ex:It would be great.|/ɪt wəd bi ˈgreɪt/|Ce serait génial}}
<div class="tip"><i>If I were you</i> (« si j'étais toi », « à ta place ») est une expression figée : avec <i>I</i>, on met aussi <b>were</b>, pas <i>was</i>. Et jamais de <i>would</i> après <i>if</i> : <b>If I would have time</b> ✗ → <b>If I had time</b> ✓.</div>`,
check:[["If I ___ rich, I would travel. Que mettre dans le trou ?",["am","were","will be","would be"],1,"Pour un présent imaginaire, après \"if\", on met le prétérit (\"were\")."],["If I had studied, I ___ passed. Que mettre dans le trou ?",["would","will have","would have","had"],2,"Pour un passé imaginaire : \"would have\" + participe passé."],["« J'aurais dû appeler » en anglais :",["I should have called.","I should called.","I should had call.","I would call should."],0,"Pour un regret : \"should have\" + participe passé."]],
practice:[
["mc","If I ___ time, I would help. Que mettre dans le trou ?","had","have","will have","would have","Pour un présent imaginaire, après \"if\", on met le prétérit."],
["mc","Comment dit-on « À ta place, je l'achèterais » ?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" est une expression figée."],
["mc","If I had known, I ___ come. Que mettre dans le trou ?","would have","would","will have","had","Pour un passé imaginaire : \"would have\" + participe passé."],
["mc","Comment dit-on « J'aurais dû appeler » ?","I should have called.","I should called.","I should had call.","I must called.","Pour un regret : \"should have\" + participe passé."],
["mc","« Qu'est-ce que tu ferais ? » en anglais :","What would you do?","What will you did?","What would you did?","What you would do?","Dans la question, l'auxiliaire \"would\" passe devant le sujet."],
["or","Tu m'aiderais ?","Would you help me","Do","Dans la question, l'auxiliaire \"would\" passe devant le sujet."],
["or","Où est-ce que tu habiterais ?","Where would you live","will","Après le mot interrogatif, l'auxiliaire \"would\" passe devant le sujet."],
["or","Si j'avais le temps, je voyagerais","If I had time I'd travel","have will","Après \"if\", le prétérit (\"had\"), ni \"will\" ni \"would\"."],
["fi","If I __ you, I'd go.","À ta place, j'irais","were|was","am|be|would be","\"If I were you\" est une expression figée."],
["fi","I would __ helped.","J'aurais aidé","have","had|has|having","C'est \"would have\" + participe passé."],
["fi","I wish I __ more time.","Si seulement j'avais plus de temps","had","have|would have|will have","Après \"I wish\", on met le prétérit, comme l'imparfait après « si seulement »."],
["ty","Qu'est-ce que tu ferais ?","What would you do","would · do — question avec l'auxiliaire","will","Dans la question, l'auxiliaire \"would\" passe devant le sujet."],
["ty","Ce serait génial","It would be great|It'd be great|That would be great","great — avec le sujet \"it\"","is","« Ce serait » : le sujet \"it\" (ou \"that\") + \"would be\"."],
["ty","Si j'étais toi, j'irais","If I were you I'd go|I'd go if I were you|If I was you I'd go","if · were · go — une expression figée","am","« Si j'étais toi » se dit \"If I were you\", avec \"were\"."]]},
{ id:"passive", title:"La voix passive : be + participe passé", blurb:"Quand ce qui compte, c'est l'action, pas son auteur. Là où le français dit « on parle anglais », l'anglais met souvent le passif.", deck:"Travail et e-mails", body:`
<p>La voix passive, c'est <b>be + participe passé</b>. On l'utilise quand on ne sait pas qui a fait l'action, ou quand ça n'a pas d'importance.</p>
<p>Le français a lui aussi un passif (« La réunion a été annulée »), donc la forme ne te surprendra pas. Le piège, c'est <b>« on »</b> et les tournures en « se » : « On parle anglais ici », « On m'a volé mon portable », « Ça se vend bien ». En anglais, tout ça passe très souvent à la <b>voix passive</b>.</p>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Ici, on parle anglais}}{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|On m'a volé mon portable}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|La réunion a été annulée}}
<h3>L'accord avec be</h3>
<p>Le verbe <i>be</i> s'accorde avec le sujet : singulier → <b>is/was</b> ; pluriel → <b>are/were</b>.</p>
{{ex:This was made in France.|/ˈðɪs wəz ˈmeɪd ɪn ˈfræns/|Ça a été fabriqué en France}}{{ex:These shoes were made in Italy.|/ˈðiːz ˈʃuːz wər ˈmeɪd ɪn ˈɪtəli/|Ces chaussures ont été fabriquées en Italie}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Le petit-déjeuner est servi à sept heures}}
<h3>L'auteur de l'action : by</h3>
{{ex:It was written by Victor Hugo.|/ɪt wəz ˈrɪtn baɪ ˈvɪktər ˈhjuːgoʊ/|Il a été écrit par Victor Hugo}}
<h3>Actif et passif</h3>
<div class="tbl"><table><tr><th>Actif</th><th>Passif</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Les questions</h3>
<p>Dans la question, l'auxiliaire <i>is/was</i> passe devant le sujet.</p>
{{ex:Is breakfast included?|/ɪz ˈbrekfəst ɪnˈkluːdɪd/|Le petit-déjeuner est compris ?}}
<div class="tip">Erreurs fréquentes : oublier <i>be</i> (<b>My phone stolen</b> ✗) ou traduire « on » mot à mot (<b>One speaks English here</b>, <b>Here speaks English</b> ✗). La bonne forme : <b>My phone was stolen</b>, <b>English is spoken here</b> ✓.</div>`,
check:[["My bag ___ stolen yesterday. Que mettre dans le trou ?",["is","was","did","has"],1,"C'était hier : \"was\" + participe passé."],["This phone ___ made in Mexico. Que mettre dans le trou ?",["was","did","has","does"],0,"La voix passive, c'est \"be\" + participe passé."],["« La réunion a été annulée » en anglais :",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"C'est \"be\" + le participe passé \"canceled\"."]],
practice:[
["mc","My phone ___ stolen. Que mettre dans le trou ?","was","did","has","is steal","La voix passive, c'est \"be\" + participe passé."],
["mc","Comment dit-on « Ça a été fabriqué au Mexique » ?","This was made in Mexico.","This made in Mexico.","This was make in Mexico.","This did made in Mexico.","C'est \"be\" + le participe passé \"made\"."],
["mc","Comment dit-on « Ici, on parle anglais » ?","English is spoken here.","Here speaks English.","English is speak here.","English speaks here.","La tournure avec « on » passe à la voix passive : \"is\" + participe passé."],
["mc","Comment dit-on « La réunion a été annulée » ?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","C'est \"be\" + participe passé."],
["mc","Comment dit-on « Ces chaussures ont été fabriquées en Italie » ?","These shoes were made in Italy.","These shoes was made in Italy.","These shoes made in Italy.","These shoes were make in Italy.","Avec un sujet au pluriel, c'est \"were\" : accord."],
["or","On m'a volé mes valises","My bags were stolen","was","Avec le pluriel \"bags\", c'est \"were\" : accord."],
["or","Ici, on parle anglais","English is spoken here","are speaks","Avec \"English\" (singulier), c'est \"is\" + participe passé : accord."],
["or","La réunion a été annulée","The meeting was canceled","did","La voix passive se forme avec \"be\" + participe passé, pas avec \"did\"."],
["fi","This was __ in Mexico.","Ça a été fabriqué au Mexique","made","make|making|makes","Après \"be\" vient le participe passé."],
["fi","The room __ cleaned every day.","La chambre est nettoyée tous les jours","is|gets","does|has|did","Pour une habitude : \"is\" + participe passé."],
["fi","It was written __ Isabel Allende.","Il a été écrit par Isabel Allende","by","from|of|with","L'auteur de l'action est introduit par \"by\"."],
["ty","On m'a volé mon portable (à la voix passive, au prétérit)","My phone was stolen|My phone got stolen|My cell phone was stolen","phone · steal — utilise la voix passive","stole","Avec \"my phone\" (singulier), c'est \"was\" + participe passé : accord."],
["ty","Le petit-déjeuner est compris ?","Is breakfast included|Is the breakfast included","breakfast · include — question avec l'auxiliaire","Does","Dans la question, l'auxiliaire \"is\" passe devant le sujet."],
["ty","La porte était fermée à clé","The door was locked","door · lock — à la voix passive","were","Avec \"the door\" (singulier), c'est \"was\" : accord."]]},
{ id:"reported", title:"Le discours indirect : rapporter ce que quelqu'un a dit", blurb:"She said she was tired. Le temps recule d'un cran, et tell est toujours suivi de la personne.", deck:"Téléphone et abréviations", body:`
<p>Le discours indirect sert à rapporter ce que quelqu'un a dit : « il a dit que… ». Comme en français (« Je suis fatiguée » → « Elle a dit qu'elle était fatiguée »), le temps <b>recule d'un cran vers le passé</b>.</p>
<div class="tbl"><table><tr><th>Discours direct</th><th>Discours indirect</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Elle a dit qu'elle était fatiguée}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Il a dit qu'il viendrait}}
<h3>say ou tell</h3>
<p>Les deux veulent dire « dire », mais <b>tell</b> est suivi directement de la personne (<i>told me</i>), et <b>say</b> non (<i>said</i>, ou <i>said to me</i>). « Il m'a dit » donne donc <i>He told me</i> ; <i>He said me</i> ✗ est une des erreurs les plus fréquentes.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Il m'a dit qu'il était occupé}}{{ex:She said there was a problem.|/ʃi ˈsed ðer wəz ə ˈprɑːbləm/|Elle a dit qu'il y avait un problème}}
<p>Regarde le deuxième exemple : « il y avait » ne change jamais en français, mais <i>there was / there were</i> s'accorde avec ce qui suit.</p>
<h3>Les questions au discours indirect</h3>
<p>Pour une question fermée (oui ou non), utilise <b>if</b> (« si »). Avec un mot interrogatif, tu le reprends. Dans les deux cas, l'ordre est celui d'une phrase affirmative (sujet + verbe), et <b>pas de do/did</b>, exactement comme on dit « il m'a demandé où j'habitais » et pas « où est-ce que j'habitais ».</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Elle m'a demandé si j'allais bien}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Il m'a demandé où j'habitais}}
<div class="tip">Erreurs fréquentes : <b>He said me…</b> ✗ → <b>He told me…</b> ✓ ; <b>He asked where did I live</b> ✗ → <b>He asked where I lived</b> ✓.</div>`,
check:[["She said she ___ tired. Que mettre dans le trou ?",["is being","was","be","will"],1,"Au discours indirect, le temps recule vers le passé."],["He ___ me he would come. Que mettre dans le trou ?",["said","say","told","tell to"],2,"Quand la personne suit directement (\"me\"), c'est \"told\"."],["« Il m'a demandé où j'habitais » en anglais :",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Dans une question indirecte, l'ordre est celui d'une phrase affirmative."]],
practice:[
["mc","She said she ___ busy. Que mettre dans le trou ?","was","is being","be","were being","Au discours indirect, le temps recule vers le passé."],
["mc","He ___ me he was late. Que mettre dans le trou ?","told","said","say","tells to","Quand la personne suit directement, on utilise \"told\"."],
["mc","Comment dit-on « Il a dit qu'il viendrait » ?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" devient \"would\", comme « viendra » devient « viendrait »."],
["mc","Comment dit-on « Elle m'a demandé si j'allais bien » ?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Une question fermée se rapporte avec \"if\"."],
["mc","Comment dit-on « Il m'a demandé où j'habitais » ?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Dans une question indirecte, l'ordre est celui d'une phrase affirmative."],
["or","Elle a dit qu'elle était fatiguée","She said she was tired","told were","Avec \"she\", c'est \"was\" : accord. Sans personne après, \"said\"."],
["or","Il m'a dit qu'il était occupé","He told me he was busy","said","Quand la personne suit directement (\"me\"), on utilise \"told\"."],
["or","Il a dit qu'il y avait un problème","He said there was a problem","were","« Il y avait » + \"a problem\" (singulier) : \"there was\", avec accord."],
["fi","She __ she was tired.","Elle a dit qu'elle était fatiguée","said","told|asked|say","Sans personne après, on utilise \"said\"."],
["fi","He told __ he was busy.","Il m'a dit qu'il était occupé","me","I|my|to","Après \"told\" vient la personne."],
["fi","She asked __ I was okay.","Elle m'a demandé si j'allais bien","if|whether","that|what|did","Une question fermée se rapporte avec \"if\"."],
["ty","Il a dit qu'il faisait froid","He said it was cold|He said that it was cold","said · cold — avec le sujet \"it\"","is","« Il faisait froid » : le sujet \"it\" + \"was\", jamais \"made\"."],
["ty","Il m'a dit qu'il était occupé","He told me he was busy|He told me that he was busy|He said to me he was busy|He said to me that he was busy|He said he was busy|He said that he was busy","told · me · busy — \"tell\" suivi de la personne","said","Avec \"he\", c'est \"was\" (troisième personne), et avec la personne après, \"told\"."],
["ty","Elle m'a demandé où j'habitais","She asked me where I lived|She asked where I lived","asked · where · lived — avec l'ordre d'une phrase affirmative","did","Dans une question indirecte, l'ordre est celui d'une phrase affirmative, sans l'auxiliaire \"did\"."]]},
];
