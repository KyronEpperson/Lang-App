/* fr-en stage A2: lessons for French speakers (France). English side shared with es-en (parity.js). Contrasts follow
   docs/profiles/fr.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Prétérit en be + -ing : was / were + -ing", blurb:"Ce qui était en train de se passer à un moment du passé. Parfait pour planter le décor d'une histoire.", deck:"Émotions et réactions", body:`
<p>Le prétérit en <i>be</i> + -ing (<i>past continuous</i>) raconte ce qui <b>était en train de se passer</b> à un moment du passé. C'est l'équivalent de « j'étais en train de… » : tu remplaces <i>am/is/are</i> par <i>was/were</i> et tu ajoutes la forme en -ing.</p>
<p>Attention à l'accord : <i>I, he, she, it</i> → <b>was</b> ; <i>you, we, they</i> → <b>were</b>.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Je dormais}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|On regardait la télé}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Il pleuvait}}
<h3>Les questions</h3>
<p>L'auxiliaire <i>was/were</i> passe devant le sujet. Ici, pas de <i>did</i>.</p>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|Qu'est-ce que tu faisais ?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Tu travaillais à neuf heures ?}}
<h3>Avec when : une action en interrompt une autre</h3>
<p>L'action longue est au <b>prétérit en be + -ing</b> ; l'action courte qui l'interrompt est au <b>prétérit</b> simple. C'est la même logique que « je faisais la cuisine quand tu as appelé ».</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Je faisais la cuisine quand tu as appelé}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Je rentrais à pied quand il s'est mis à pleuvoir}}
<div class="tip">L'imparfait français fait deux métiers que l'anglais sépare. Pour une action <b>en cours</b> à ce moment-là (« je cuisinais quand… »), utilise <i>was/were + -ing</i>. Pour une habitude ou une série d'actions (« le samedi, je cuisinais »), l'anglais prend le prétérit simple ou <i>used to</i>. Et <b>I cooked when you called</b> veut dire « quand tu as appelé, j'ai commencé à cuisiner » : ce n'est pas la même histoire.</div>`,
check:[["« Qu'est-ce que tu faisais à neuf heures ? » en anglais :",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Avec \"you\", c'est \"were\", puis la forme en -ing."],["I was cooking ___ you called. Que mettre dans le trou ?",["when","so","or","than"],0,"« Quand » se dit \"when\"."],["They ___ watching TV. Que mettre dans le trou ?",["was","did","were","are being"],2,"Avec \"they\", c'est \"were\" : accord."]],
practice:[
["mc","I ___ sleeping at ten. Que mettre dans le trou ?","was","were","did","am","Avec \"I\", le passé de \"be\" est \"was\" : accord."],
["mc","Comment dit-on « Je faisais la cuisine quand tu as appelé » ?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","L'action longue est au prétérit en be + -ing ; celle qui l'interrompt, au prétérit simple."],
["mc","« Qu'est-ce que tu faisais ? » en anglais :","What were you doing?","What did you doing?","What was you doing?","What were you do?","Dans la question, l'auxiliaire \"were\" passe devant le sujet, puis vient la forme en -ing."],
["mc","They ___ playing soccer. Que mettre dans le trou ?","were","was","did","are","Avec \"they\", c'est \"were\" : accord."],
["mc","Comment dit-on « Il pleuvait » (à ce moment-là) ?","It was raining.","Was raining.","It were raining.","It was rain.","Comme « il » dans « il pleuvait », le sujet \"it\" est obligatoire : \"it\" + \"was\" + -ing."],
["or","Ma sœur était en train de lire un livre","My sister was reading a book","were","Avec \"my sister\" (troisième personne du singulier), c'est \"was\" : accord."],
["or","Les enfants étaient en train de dormir","The kids were sleeping","was","Avec un sujet au pluriel, c'est \"were\" : accord."],
["or","Qu'est-ce que tu faisais ?","What were you doing","did","Dans la question, l'auxiliaire \"were\" passe devant le sujet ; pas de \"did\"."],
["fi","I was __ dinner.","J'étais en train de faire le dîner","cooking|making","cook|cooked|cooks","Après \"was\" vient la forme en -ing."],
["fi","What __ you doing?","Qu'est-ce que tu faisais ?","were","was|did|does","Avec \"you\", c'est \"were\" : accord."],
["fi","I was sleeping __ you called.","Je dormais quand tu as appelé","when","so|than|or","« Quand » se dit \"when\"."],
["ty","Il était en train de pleuvoir","It was raining","rain — avec le sujet \"it\"","were","Le sujet \"it\" (le « il » de « il pleuvait ») + \"was\" + -ing."],
["ty","Il était en train de travailler","He was working","work — avec \"he\" et le passé de \"be\"","were","Avec \"he\", c'est \"was\", pas \"were\" : accord."],
["ty","Les enfants étaient en train de jouer ?","Were the kids playing|Were the children playing","kids · play — question avec l'auxiliaire devant","was","Dans la question, l'auxiliaire \"were\" passe devant le sujet."]]},
{ id:"will", title:"Will : décisions sur le moment, promesses et prévisions", blurb:"Si tu le décides sur le moment, will ; si c'était déjà prévu, going to.", deck:"Conversation informelle", body:`
<p>La forme est <b>will + base verbale</b>, sans <i>to</i> et sans -s. À l'oral, on la contracte presque toujours : <b>I'll, you'll, it'll</b>. La forme négative est <b>won't</b>.</p>
<p>Le futur simple français (« j'aiderai ») ressemble à <i>will</i>, mais pour proposer ou décider sur le moment, le français prend souvent le présent : « Je t'aide », « J'y vais ». En anglais, il faut <i>will</i>. Et si tu dis souvent « je vais… » en français, l'anglais fait la différence : <i>will</i> pour ce que tu décides, proposes ou promets sur le moment ; <i>be going to</i> (le futur proche) pour un projet déjà décidé.</p>
<h3>Décisions sur le moment et propositions</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Pour moi, les pâtes}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Je décroche / J'y vais}}{{ex:I'll help you.|/aɪl ˈhelp ju/|Je t'aide}}
<h3>Promesses</h3>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Je t'appelle plus tard}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Je ne serai pas en retard}}
<h3>Prévisions et questions</h3>
<p>Dans les questions, <i>will</i> passe devant le sujet, comme dans « Viendras-tu ? ».</p>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|Ça va aller}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Je pense qu'il va pleuvoir}}{{ex:Will you come?|/wəl ju ˈkʌm/|Tu viendras ?}}
<h3>will ou going to</h3>
<div class="tbl"><table><tr><th></th><th>Quand</th><th>Exemple</th></tr><tr><td class="k">will</td><td>décision sur le moment, proposition, promesse</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>projet déjà décidé</td><td>I'm going to visit London next month.</td></tr></table></div>
<div class="tip">Erreurs fréquentes : <b>I will to go</b>, <b>I'll going</b> et, pour proposer ton aide, <b>I help you</b> ✗ → <b>I'll go</b>, <b>I'll help you</b> ✓. Après <i>will</i>, le verbe ne prend jamais de -s : <b>She will come</b>, pas <i>She will comes</i>.</div>`,
check:[["Le téléphone sonne. Comment dit-on « Je décroche » ?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Une décision prise sur le moment se dit avec \"will\"."],["I ___ be late. (« Je ne serai pas en retard », c'est une promesse)",["won't","willn't","don't will","not will"],0,"La forme négative de \"will\" est \"won't\"."],["Quelle phrase parle d'un projet déjà décidé ?",["I'll get the door.","I will to visit Lima.","I visit Lima will.","I'm going to visit Lima next month."],3,"Pour un projet déjà décidé, on utilise \"be going to\"."]],
practice:[
["mc","Comment dit-on « Je t'aide » (pour proposer ton aide) ?","I'll help you.","I help you.","I'll helping you.","I'll to help you.","Pour proposer ton aide, l'anglais utilise \"will\" : « Je t'aide » → \"I'll help you\"."],
["mc","Au restaurant, tu choisis sur le moment. Comment dit-on « Pour moi, les pâtes » ?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Une décision prise sur le moment se dit avec \"will\"."],
["mc","Comment dit-on « Je ne serai pas en retard » (une promesse) ?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","\"Will not\" se contracte en \"won't\"."],
["mc","« Tu viendras ? » en anglais :","Will you come?","Do you will come?","Will you coming?","Will come you?","Dans la question, l'auxiliaire \"will\" passe devant le sujet."],
["mc","Comment dit-on « Elle viendra demain » ?","She will come tomorrow.","She will comes tomorrow.","She wills come tomorrow.","She will coming tomorrow.","Après \"will\", le verbe ne prend pas de -s, même à la troisième personne."],
["or","Tu peux m'aider ? (pour demander un service)","Will you help me","Do","Dans la question, l'auxiliaire \"will\" passe devant le sujet."],
["or","Est-ce qu'il pleuvra demain ?","Will it rain tomorrow","rains","L'auxiliaire \"will\" passe devant le sujet, et le verbe ne prend pas le -s de la troisième personne."],
["or","Je t'appelle plus tard","I'll call you later","calling","Après \"will\" vient la base verbale, sans -ing."],
["fi","I __ call you tomorrow.","Je t'appelle demain, promis","will","am|going|do","Une promesse se dit avec \"will\"."],
["fi","I __ forget.","Je n'oublierai pas","won't|will not","don't|not|willn't","La forme négative de \"will\" est \"won't\"."],
["fi","__ you help me?","Tu peux m'aider ?","Will|Can|Could|Would","Do|Are|Is","Pour demander un service : \"Will you…?\" ou \"Can you…?\"."],
["ty","Il pleuvra demain","It will rain tomorrow|It's going to rain tomorrow","rain · tomorrow — avec le sujet \"it\"","rains","Comme « il » dans « il pleuvra », le sujet \"it\" est obligatoire : \"It will rain\"."],
["ty","Tu viendras à la fête ?","Will you come to the party|Are you coming to the party|Are you going to come to the party","come · party — question avec l'auxiliaire devant","Do","Dans la question, l'auxiliaire \"will\" passe devant le sujet."],
["ty","Je t'aide (c'est une proposition)","I'll help you|I'll help","help · you — une proposition avec \"will\"","helping","Pour proposer ton aide, l'anglais utilise \"will\", pas le présent."]]},
{ id:"perfect", title:"Present perfect : les expériences", blurb:"have + participe passé pour ce que tu as déjà fait dans ta vie. Si tu dis quand, c'est le prétérit.", deck:"Voyages (aéroport et hôtel)", body:`
<p>Le <i>present perfect</i> (<b>have/has + participe passé</b>) parle d'expériences : ce que tu as <b>déjà</b> fait (ou <b>jamais</b> fait) dans ta vie, sans dire quand.</p>
<p>Ne le confonds pas avec le passé composé. « J'ai visité » peut se traduire de deux façons : <i>I've visited</i> (une expérience, sans date) ou <i>I visited</i> (un moment précis et terminé). Le bon réflexe : « déjà » ou « jamais » sans date → <i>present perfect</i> ; une date ou un moment terminé → prétérit.</p>
{{ex:I've been to New York.|/aɪv bɪn tə ˈnuː ˈjɔːrk/|J'ai déjà visité New York}}{{ex:She has visited Canada twice.|/ʃi həz ˈvɪzɪtɪd ˈkænədə ˈtwaɪs/|Elle est allée deux fois au Canada}}
<p>Avec <i>he, she, it</i>, l'auxiliaire est <b>has</b> (troisième personne) ; avec les autres, <b>have</b>.</p>
<h3>ever et never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|Tu as déjà mangé des sushis ?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Je ne l'ai jamais vu}}
<p>Pour répondre, reprends l'auxiliaire : <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Participes passés fréquents</h3>
<div class="tbl"><table><tr><th>Base verbale</th><th>Prétérit</th><th>Participe passé</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Si tu dis quand, c'est le prétérit</h3>
<p>Avec <i>yesterday, last year, in 2020</i> ou <i>ago</i> (un moment terminé), on utilise le prétérit, même si le français dit « je suis allé » ou « je l'ai vu ».</p>
{{ex:I went to New York last year.|/aɪ ˈwent tə ˈnuː ˈjɔːrk ˈlæst ˈjɪr/|J'ai visité New York l'année dernière}}
<div class="tip">L'erreur typique des francophones : <b>I've been to New York last year.</b> ✗ → <b>I went to New York last year.</b> ✓. De même, <b>I have seen him yesterday</b> ✗ → <b>I saw him yesterday</b> ✓. En anglais américain, on entend aussi <i>Did you ever go to New York?</i>, et c'est correct.</div>`,
check:[["« Tu as déjà visité le Japon ? » en anglais :",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Pour une expérience : \"Have you ever\" + participe passé, et \"been to\" + lieu."],["I ___ never seen that movie. Que mettre dans le trou ?",["am","did","have","was"],2,"C'est \"have\" + \"never\" + participe passé."],["Quelle phrase est correcte ?",["I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima."],0,"Avec \"last year\" (un moment terminé), c'est le prétérit."]],
practice:[
["mc","Comment dit-on « J'ai déjà visité le Japon » ?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","C'est \"have\" + le participe passé \"been\"."],
["mc","Quel est le participe passé de \"see\" ?","seen","saw","seed","seeing","see – saw – seen."],
["mc","« Tu as déjà mangé des sushis ? » en anglais :","Have you ever eaten sushi?","Did you ever eaten sushi?","Have you ever ate sushi?","Do you have eaten sushi?","Pour une expérience : \"Have you ever\" + participe passé (\"eaten\")."],
["mc","Comment dit-on « Je ne l'ai jamais vu » ?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","C'est \"have\" + \"never\" + participe passé."],
["mc","Avec « l'année dernière », quelle phrase est correcte ?","I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima last year.","Si tu dis quand, c'est le prétérit, même si le français dit « je suis allé »."],
["or","Tu as déjà visité Cuba ?","Have you ever been to Cuba","Did","Dans la question, l'auxiliaire \"have\" passe devant le sujet."],
["or","Elle est allée deux fois au Pérou","She has visited Peru twice","have","Avec \"she\", l'auxiliaire est \"has\" : troisième personne."],
["or","Je n'ai jamais vu la neige","I've never seen snow","the","Quand on parle d'une chose en général, l'anglais ne met pas d'article : \"snow\"."],
["fi","Have you ever __ to Miami?","Tu as déjà visité Miami ?","been","be|went|go","Après \"have\" vient le participe passé \"been\"."],
["fi","I've __ eaten that.","Je n'ai jamais mangé ça","never","ever|no|not never","« Jamais » se dit \"never\"."],
["fi","My brother __ been to Chile.","Mon frère est déjà allé au Chili","has","have|is|did","Avec \"my brother\", l'auxiliaire est \"has\" (troisième personne)."],
["ty","Tu es déjà allé / allée au Japon ? (utilise \"ever\")","Have you ever been to Japan|Have you been to Japan|Did you ever go to Japan","ever · been · Japan — question avec l'auxiliaire devant","went","Dans la question, l'auxiliaire \"have\" passe devant le sujet."],
["ty","Ma sœur n'a jamais goûté les sushis","My sister has never tried sushi|My sister has never eaten sushi","never · tried · sushi — avec un sujet à la troisième personne","have","Avec \"my sister\" (troisième personne), l'auxiliaire est \"has\"."],
["ty","Je suis allé / allée au Mexique l'année dernière","I went to Mexico last year","went · Mexico · last year — avec un moment terminé","have been","Avec \"last year\" (un moment terminé), c'est le prétérit, pas le present perfect."]]},
{ id:"modals", title:"have to, must, should, might : obligation, conseil et possibilité", blurb:"Devoir, tu devrais, peut-être. Et le grand piège : mustn't n'est pas don't have to.", deck:"Santé et urgences", body:`
<p>Quatre formes pour parler d'obligation, de conseil et de possibilité. Après <i>must, should</i> et <i>might</i> vient la <b>base verbale, sans to</b> : <i>You should go</i>, pas <i>You should to go</i>. Les modaux (<i>must, should, might</i>) ne prennent jamais de -s : <i>She should rest</i>.</p>
<h3>have to : devoir, être obligé de</h3>
<p>C'est la forme la plus courante à l'oral. Avec <i>he, she, it</i>, c'est <b>has to</b> (troisième personne). Les questions et les négations prennent l'auxiliaire <i>do/does</i>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Je dois travailler demain}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Elle doit partir maintenant}}{{ex:Do I have to pay?|/də aɪ ˈhæf tə ˈpeɪ/|Est-ce que je dois payer ?}}
<h3>mustn't et don't have to, ce n'est pas pareil</h3>
<p>À la forme affirmative, <i>must</i> et <i>have to</i> se traduisent tous les deux par « devoir ». À la forme négative, ils changent complètement de sens, exactement comme « tu ne dois pas » et « tu n'as pas besoin de » en français :</p>
<div class="tbl"><table><tr><th>Anglais</th><th>Sens</th></tr><tr><td class="k">You don't have to come.</td><td>Tu n'as pas besoin de venir (ce n'est pas nécessaire)</td></tr><tr><td class="k">You mustn't smoke here.</td><td>Tu ne dois pas fumer ici (c'est interdit)</td></tr></table></div>
<h3>should : tu devrais</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Tu devrais aller voir un médecin}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Tu ne devrais pas t'inquiéter}}{{ex:Should I call him?|/ʃəd aɪ ˈkɔːl hɪm/|Je devrais l'appeler ?}}
<h3>might : peut-être, il se peut que</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Il va peut-être pleuvoir}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Je serai peut-être en retard}}
<div class="tip">Erreurs fréquentes : <b>You should to go</b>, <b>It might rains</b>, <b>She have to work</b> ✗ → <b>You should go</b>, <b>It might rain</b>, <b>She has to work</b> ✓.</div>`,
check:[["« Tu n'as pas besoin de venir » (ce n'est pas nécessaire) en anglais :",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"« Pas besoin de » se dit \"don't have to\"."],["Pour donner un conseil : You ___ see a doctor.",["might","have","should","must to"],2,"Un conseil se donne avec \"should\" + base verbale."],["She ___ to work today. Que mettre dans le trou ?",["have","must","should","has"],3,"Avec \"she\", c'est \"has to\" : troisième personne."]],
practice:[
["mc","Comment dit-on « Je dois travailler demain » ?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","C'est \"have to\" + base verbale."],
["mc","Comment dit-on « Tu n'as pas besoin de venir » (ce n'est pas nécessaire) ?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","« Pas besoin de » se dit \"don't have to\"."],
["mc","Comment dit-on « Tu devrais aller voir un médecin » ?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","Après \"should\" vient la base verbale, sans \"to\"."],
["mc","Comment dit-on « Il va peut-être pleuvoir » ?","It might rain.","It might rains.","It might to rain.","It mights rain.","Après \"might\" vient la base verbale, sans -s et sans \"to\"."],
["mc","Comment dit-on « Tu ne dois pas fumer ici » (c'est interdit) ?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","L'interdiction se dit \"must not\" (\"mustn't\")."],
["or","Elle doit travailler aujourd'hui","She has to work today","have","Avec \"she\", c'est \"has to\" : troisième personne."],
["or","Est-ce que je dois payer ?","Do I have to pay","Am","La question avec \"have to\" a besoin de l'auxiliaire \"do\"."],
["or","Tu devrais voir un médecin","You should see a doctor","to","Après \"should\" vient la base verbale, sans \"to\"."],
["fi","She __ to study tonight.","Elle doit réviser ce soir","has","have|must|should","Avec \"she\", c'est \"has to\" : troisième personne."],
["fi","You __ have to pay.","Tu n'as pas besoin de payer","don't|do not","must not|not|aren't","« Pas besoin de » se dit \"don't have to\", avec l'auxiliaire \"do\"."],
["fi","It __ rain tomorrow.","Il va peut-être pleuvoir demain","might|may|could","must to|has to|should to","Pour une possibilité, on utilise \"might\"."],
["ty","Est-ce qu'il doit travailler demain ? (utilise \"have to\")","Does he have to work tomorrow","have to · work · tomorrow — question avec l'auxiliaire","Has","Avec \"he\", la question prend l'auxiliaire \"does\", puis \"have to\" sans -s."],
["ty","Tu n'as pas besoin de venir (utilise \"have to\")","You don't have to come","have to · come — au sens de « ce n'est pas nécessaire »","mustn't","« Pas besoin de » se dit \"don't have to\", avec l'auxiliaire \"do\" ; \"mustn't\" est une interdiction."],
["ty","Tu devrais aller chez le médecin","You should see a doctor|You should go to a doctor|You should go to the doctor","should · see · doctor — le verbe vient sans \"to\"","to","Après \"should\" vient la base verbale, sans \"to\"."]]},
{ id:"to-ing", title:"to ou -ing après un verbe : want to, enjoy -ing", blurb:"Want se construit avec to ; enjoy, avec -ing. Ça dépend du verbe, et après une préposition, c'est toujours -ing.", deck:"Conversation informelle", body:`
<p>En français, après un verbe, on met l'infinitif : « je veux partir », « j'aime cuisiner ». En anglais, tout dépend du premier verbe : certains veulent <b>to + base verbale</b>, d'autres la <b>forme en -ing</b>. C'est pour ça que <i>I enjoy to cook</i> est une erreur si fréquente.</p>
<div class="tbl"><table><tr><th>Avec to</th><th>Avec -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + base verbale</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Je veux rentrer}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Il faut que je révise}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Je voudrais commander}}{{ex:She decided to learn English.|/ʃi dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Elle a décidé d'apprendre l'anglais}}
<h3>Forme en -ing</h3>
<p>Ces verbes veulent -ing par règle, pas à cause de leur sens : <i>enjoy</i> (aimer beaucoup), <i>finish</i> (finir de), <i>mind</i> (que ça dérange), <i>keep</i> (continuer à), <i>stop</i> (arrêter de). Il faut les apprendre par cœur.</p>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|J'aime beaucoup cuisiner}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|J'ai fini de travailler}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Ça ne me dérange pas d'attendre}}
<h3>Après une préposition, toujours -ing</h3>
<p>Là où le français met un infinitif après une préposition (« avant de partir », « sans dire au revoir »), l'anglais utilise la forme en -ing.</p>
{{ex:before leaving|/bɪfɔːr ˈliːvɪŋ/|avant de partir}}{{ex:I'm interested in learning English.|/aɪm ˈɪntrəstɪd ɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ/|Apprendre l'anglais m'intéresse}}{{ex:I'm looking forward to seeing you.|/aɪm ˈlʊkɪŋ ˈfɔːrwərd tə ˈsiːɪŋ ju/|J'ai hâte de te voir}}
<h3>want + personne + to</h3>
<p>« Je veux que tu viennes » ne se dit pas <i>I want that you come</i>, mais <b>I want you to come</b>.</p>
{{ex:I want you to come.|/aɪ ˈwɑːnt ju tə ˈkʌm/|Je veux que tu viennes}}
<p><i>like, love</i> et <i>start</i> acceptent les deux formes.</p>
<div class="tip">Erreurs fréquentes : <b>I want go</b>, <b>I enjoy to cook</b>, <b>before to leave</b>, <b>I look forward to see you</b> ✗ → <b>I want to go</b>, <b>I enjoy cooking</b>, <b>before leaving</b>, <b>I look forward to seeing you</b> ✓. Et n'oublie pas le -s : <b>She enjoys cooking</b>.</div>`,
check:[["I want ___ home. Que mettre dans le trou ?",["go","going","to go","to going"],2,"Après \"want\" vient \"to\" + base verbale."],["I enjoy ___ movies. Que mettre dans le trou ?",["watching","to watch","watch","to watching"],0,"Après \"enjoy\" vient la forme en -ing."],["« Je voudrais commander » en anglais :",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Après \"would like\" vient \"to\" + base verbale."]],
practice:[
["mc","I need ___ now. Que mettre dans le trou ?","to go","going","go","to going","Après \"need\" vient \"to\" + base verbale."],
["mc","I enjoy ___. Que mettre dans le trou ?","cooking","to cook","cook","to cooking","Après \"enjoy\" vient la forme en -ing : \"I enjoy to cook\" est faux."],
["mc","Comment dit-on « Je voudrais commander » ?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Après \"would like\" vient \"to\" + base verbale."],
["mc","Comment dit-on « J'ai hâte de te voir » ?","I'm looking forward to seeing you.","I'm looking forward to see you.","I'm looking forward seeing you.","I'm looking forward for see you.","Ici, \"to\" est une préposition, donc on met la forme en -ing."],
["mc","Comment dit-on « Je veux que tu viennes » ?","I want you to come.","I want that you come.","I want you come.","I want that you to come.","« Vouloir que quelqu'un fasse quelque chose » se dit \"want\" + personne + \"to\"."],
["or","Elle aime beaucoup cuisiner","She enjoys cooking","enjoy","Avec \"she\", \"enjoys\" prend un -s (troisième personne) ; ensuite vient la forme en -ing."],
["or","Tu veux venir ?","Do you want to come","Are","Au présent, la question a besoin de l'auxiliaire \"do\"."],
["or","Apprendre l'anglais m'intéresse","I'm interested in learning English","learn","Après une préposition (\"in\"), on met la forme en -ing."],
["fi","I want __ a coffee.","Je veux boire un café","to have|to drink|to get","have|having|drinking","Après \"want\" vient \"to\" + base verbale."],
["fi","She enjoys __.","Elle aime beaucoup nager","swimming","to swim|swim|swims","\"Enjoy\" se construit avec la forme en -ing."],
["fi","I decided __ English.","J'ai décidé d'apprendre l'anglais","to study|to learn","study|studying|studied","Après \"decide\" vient \"to\" + base verbale."],
["ty","Tu aimes cuisiner ?","Do you like cooking|Do you like to cook","like · cook — question avec l'auxiliaire","Are","Au présent, la question a besoin de l'auxiliaire \"do\" ; \"like\" accepte -ing ou \"to\"."],
["ty","Elle adore lire (utilise \"enjoy\")","She enjoys reading","enjoy · read — avec un -s et la forme en -ing","enjoy","Avec \"she\", \"enjoys\" prend un -s (troisième personne), puis vient la forme en -ing."],
["ty","Je veux que tu viennes","I want you to come","want · you · come — la phrase se construit sans \"that\"","that","« Je veux que tu viennes » se dit \"I want you to come\", sans \"that\"."]]},
{ id:"articles-2", title:"Articles 2 : pas de the pour parler en général", blurb:"Life is hard, I love dogs : en anglais, ce qui est général se dit sans article. Et un rappel des cas où il faut the.", deck:"Voyages (aéroport et hôtel)", body:`
<p>C'est LA leçon d'articles pour les francophones. En français, on met un article pour parler en général : « <b>La</b> vie est dure », « J'adore <b>les</b> chiens », « <b>Le</b> café coûte cher ». En anglais, ce qui est général se dit <b>sans article</b> (article zéro).</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vie est dure}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|J'adore les chiens}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|Le café coûte cher}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|Les chiens sont mignons}}
<p>C'est pareil pour les noms abstraits (<i>love, music, time</i>) et pour les pluriels pris en général (<i>people, cars</i>). Et n'oublie pas l'accord : un indénombrable ou un singulier va avec <i>is</i> (<i>Coffee is…</i>) ; un pluriel, avec <i>are</i> (<i>Dogs are…</i>).</p>
<h3>En général ou précis</h3>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|J'aime les chiens (en général)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|Les chiens de ce parc sont mignons (ces chiens-là)}}
<div class="tip"><b>I like the dogs</b> veut dire « j'aime ces chiens-là ». Pour parler en général, dis <b>I like dogs</b>.</div>
<h3>Quand il faut the</h3>
<div class="tbl"><table><tr><th>Cas</th><th>Exemple</th></tr><tr><td>Une chose unique</td><td class="k">the sun, the internet</td></tr><tr><td>Les instruments de musique</td><td class="k">play the piano</td></tr><tr><td>Les fleuves et les océans</td><td class="k">the Seine, the Pacific</td></tr><tr><td>Les pays au nom pluriel ou d'union</td><td class="k">the United States, the Philippines</td></tr></table></div>
<p>Pour les instruments, c'est comme « jouer <b>du</b> piano » : il y a un article des deux côtés.</p>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Je joue du piano}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Elle vient des États-Unis}}
<h3>Pas d'article, alors que le français en met un</h3>
<div class="tbl"><table><tr><th>Cas</th><th>Exemple</th></tr><tr><td>Les sports</td><td class="k">play soccer (jouer au foot)</td></tr><tr><td>Les repas</td><td class="k">have breakfast (prendre le petit-déjeuner)</td></tr><tr><td>Presque tous les pays</td><td class="k">France (la France), Japan (le Japon)</td></tr></table></div>
{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Je joue au foot}}{{ex:I live in France.|/aɪ ˈlɪv ɪn ˈfræns/|J'habite en France}}`,
check:[["I play ___ soccer. Que mettre dans le trou ?",["a","the","an","(pas d'article)"],3,"Les sports se disent sans article : « jouer au foot » → \"play soccer\"."],["She's from ___ United States. Que mettre dans le trou ?",["the","a","an","(pas d'article)"],0,"\"United States\" prend \"the\", comme « les États-Unis »."],["« Les chiens sont mignons » (en général) en anglais :",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"Ce qui est général se dit sans article et au pluriel."]],
practice:[
["mc","Comment dit-on « La vie est dure » ?","Life is hard.","The life is hard.","A life is hard.","Life are hard.","En anglais, ce qui est général se dit sans article."],
["mc","Comment dit-on « J'adore la musique » ?","I love music.","I love the music.","I love a music.","I love musics.","« La musique » en général : pas d'article et pas de -s."],
["mc","Comment dit-on « Je joue au foot » ?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Les sports se disent sans article."],
["mc","Comment dit-on « Les chats sont mignons » (en général) ?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","Ce qui est général se dit sans article et au pluriel."],
["mc","She's from ___ United States. Que mettre dans le trou ?","the","a","an","some","\"United States\" prend \"the\"."],
["or","Les chiens sont mignons","Dogs are cute","is The","Pas d'article pour parler en général, et avec le pluriel \"dogs\", c'est \"are\" : accord."],
["or","Le café coûte cher","Coffee is expensive","are The","Pas d'article pour parler en général, et \"coffee\" (indénombrable) va avec \"is\" : accord."],
["or","Je joue du piano","I play the piano","a","Avec les instruments, on met \"the\", comme « du » dans « jouer du piano »."],
["fi","I speak __.","Je parle anglais","English","the English|an English|a English","Les langues se disent sans article."],
["fi","The sun rises in __ east.","Le soleil se lève à l'est","the","a|an|some","Les points cardinaux prennent \"the\"."],
["fi","I love __.","J'adore la musique","music","the musics|a music|musics","« La musique » en général : pas d'article, et pas de -s car c'est un indénombrable."],
["ty","La vie est dure","Life is hard|Life is difficult","life · hard — sans article","The","Pas d'article pour parler en général, et \"life\" va avec \"is\" : accord."],
["ty","Elle joue de la guitare","She plays the guitar|She plays guitar","play · guitar — avec le sujet \"she\"","play","Avec \"she\", \"plays\" prend un -s (troisième personne) ; avec un instrument, on met \"the\"."],
["ty","Mon frère adore la musique","My brother loves music","brother · love · music — sans article","the","Avec \"my brother\" (troisième personne), le verbe prend un -s : \"loves\". La musique en général se dit sans article."]]},
{ id:"first-conditional", title:"Phrases en if (1) : if + présent, will", blurb:"« S'il pleut, je reste à la maison. » Comme en français : après if, le présent, jamais will.", deck:"Travail et e-mails", body:`
<p>Cette phrase en <i>if</i> parle de choses qui peuvent vraiment arriver. La forme est <b>if + présent, will + base verbale</b>. C'est comme en français : « S'il pleut, je resterai à la maison », jamais « S'il pleuvra ». Après <i>if</i>, pas de <i>will</i>.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|S'il pleut, je reste à la maison}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Si tu ne te dépêches pas, tu vas rater le bus}}
<p>Attention à la troisième personne : après <i>if</i>, le présent garde son -s (<i>If it rains</i>, <i>If she calls</i>), et la forme négative prend l'auxiliaire <i>don't/doesn't</i>.</p>
<h3>L'ordre peut changer</h3>
<p>Si <i>if</i> est dans la deuxième partie, pas besoin de virgule.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Je t'aiderai si j'ai le temps}}
<h3>Avec l'impératif</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Si tu es en retard, appelle-moi}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Si tu as besoin d'aide, dis-le-moi}}
<h3>when : le vrai piège pour les francophones</h3>
<p>Si tu sais que ça va arriver, utilise <i>when</i> au lieu de <i>if</i>. Et là, attention : le français met le futur après « quand » (« Quand je rentrerai, je t'appellerai »), mais l'anglais garde le <b>présent</b> après <i>when</i>, exactement comme après <i>if</i>.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Quand je rentrerai, je t'appellerai}}
<div class="tip">Erreurs fréquentes : <b>If it will rain, …</b> et <b>When I'll get home, …</b> ✗ → <b>If it rains, …</b>, <b>When I get home, …</b> ✓. Et n'oublie pas le -s : <b>If she calls</b>, pas <i>If she call</i>.</div>`,
check:[["If it ___ tomorrow, I'll stay home. Que mettre dans le trou ?",["will rain","rains","rained","raining"],1,"Après \"if\", on met le présent, comme dans « s'il pleut »."],["If you study, you ___ pass. Que mettre dans le trou ?",["pass will","passing","will pass","passed"],2,"La conséquence se dit avec \"will\" + base verbale."],["Quelle phrase est correcte ?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Après \"if\", le présent ; dans la conséquence, \"will\"."]],
practice:[
["mc","If it ___, I'll stay home. Que mettre dans le trou ?","rains","will rain","rained","is rain","Après \"if\", le présent avec un -s : \"it rains\"."],
["mc","If you're late, ___ me. Que mettre dans le trou ?","call","will calling","calls","to call","L'impératif commence par la base verbale seule."],
["mc","Comment dit-on « Je t'aiderai si j'ai le temps » ?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Après \"if\", pas de \"will\"."],
["mc","Comment dit-on « Si tu ne te dépêches pas, tu vas rater le bus » ?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Après \"if\", le présent à la forme négative : \"don't\"."],
["mc","Comment dit-on « Quand je rentrerai, je t'appellerai » ?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Après \"when\", c'est aussi le présent, même si le français met le futur après « quand »."],
["or","S'il pleut, je reste à la maison","If it rains I'll stay home","rain will","Après \"if\" vient le présent, et avec \"it\" le verbe prend un -s : troisième personne."],
["or","Si elle appelle, préviens-moi","If she calls let me know","call","Avec \"she\", \"calls\" prend un -s (troisième personne), même après \"if\"."],
["or","Si tu as le temps, appelle-moi","If you have time call me","will","Après \"if\", pas de \"will\"."],
["fi","If it __ tomorrow, we'll cancel.","S'il pleut demain, on annule","rains","will rain|rained|raining","Après \"if\", le présent ; avec \"it\", \"rains\" (troisième personne)."],
["fi","If you study, you __ pass.","Si tu révises, tu vas réussir","will|can|might","are|did|passing","La conséquence se dit avec \"will\" + base verbale."],
["fi","__ you need help, call me.","Si tu as besoin d'aide, appelle-moi","If|When","So|But|Because","« Si » se dit \"if\"."],
["ty","S'il pleut, je prendrai un taxi","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","rain · take · taxi — avec le sujet \"it\"","will rain","Après \"if\", le présent, et \"it rains\" prend le -s de la troisième personne."],
["ty","Si elle ne vient pas, je t'appellerai","If she doesn't come I'll call you|I'll call you if she doesn't come","come · call — négation avec l'auxiliaire","don't","Avec \"she\", la négation prend l'auxiliaire \"doesn't\"."],
["ty","Je t'aiderai si j'ai le temps","I'll help you if I have time|I'll help if I have time|If I have time I'll help you|If I have time I'll help","help · if · time — après \"if\", pas de \"will\"","will","Après \"if\", pas de \"will\"."]]},
{ id:"relative", title:"who, that, which : les propositions relatives", blurb:"En français, qui ou que selon la fonction ; en anglais, who pour les personnes, which ou that pour les choses.", deck:"Achats et paiements", body:`
<p>En français, on choisit entre <b>qui</b> et <b>que</b> selon la fonction : sujet ou complément. En anglais, le pronom relatif dépend de ce que tu décris, une personne ou une chose :</p>
<div class="tbl"><table><tr><th>Pour</th><th>Pronom</th><th>Exemple</th></tr><tr><td>les personnes</td><td class="k">who (ou that)</td><td>the man who lives next door</td></tr><tr><td>les choses</td><td class="k">which (ou that)</td><td>the phone that I want</td></tr><tr><td>les lieux</td><td class="k">where</td><td>the cafe where we met</td></tr></table></div>
<h3>Les personnes : who</h3>
{{ex:I have a friend who speaks Japanese.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˌdʒæpəˈniːz/|J'ai une amie qui parle japonais}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|l'homme qui habite à côté}}
<p>Regarde l'accord : <i>the man who <b>lives</b></i>. Le verbe s'accorde avec la personne dont tu parles ; ici, troisième personne avec un -s.</p>
<h3>Les choses : which ou that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|le livre que j'ai acheté}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|C'est ce portable que je veux}}{{ex:the bus which goes downtown|/ðə ˈbʌs wɪtʃ ˈgoʊz ˌdaʊnˈtaʊn/|le bus qui va au centre-ville}}
<h3>En anglais, on peut supprimer le relatif</h3>
<p>En français, « que » ne disparaît jamais. En anglais, s'il est suivi d'un sujet + verbe (<i>we saw</i>), tu peux enlever <i>that</i>, et à l'oral on l'enlève presque toujours.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|Le film qu'on a vu était génial}}
<p>Mais quand le relatif est le sujet (« qui » : <i>who lives</i>), impossible de le supprimer : <i>the man lives next door</i> ne veut pas dire « l'homme qui habite à côté ».</p>
<h3>Les lieux : where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|le café où on s'est rencontrés}}
<div class="tip">« Ce que » se dit <i>what</i> (<i>I know what you want</i>), mais n'utilise jamais <i>what</i> pour traduire « que » après un nom : <b>the book what I bought</b> ✗ → <b>the book (that) I bought</b> ✓.</div>`,
check:[["I have a friend ___ lives in Bogota. Que mettre dans le trou ?",["which","who","what","he"],1,"Pour une personne, on utilise \"who\"."],["« le livre que j'ai acheté » en anglais :",["the book who I bought","the book what I bought","the book that I bought","the book that I bought it"],2,"Pour une chose : \"that\" ou \"which\", jamais \"what\"."],["Quelle phrase est correcte ?",["The man which lives next door is kind.","The man what lives next door is kind.","The man lives next door is kind.","The man who lives next door is kind."],3,"Pour une personne, \"who\" ; et comme il est sujet du verbe, on ne peut pas le supprimer."]],
practice:[
["mc","I have a friend ___ speaks English. Que mettre dans le trou ?","who","which","what","she","Pour une personne, on utilise \"who\"."],
["mc","Comment dit-on « le livre que j'ai acheté » ?","the book that I bought","the book who I bought","the book what I bought","the book that I bought it","Pour une chose : \"that\" ou \"which\", jamais \"what\"."],
["mc","Comment dit-on « l'homme qui habite à côté » ?","the man who lives next door","the man who live next door","the man which lives next door","the man what lives next door","Une personne → \"who\", et \"lives\" s'accorde avec \"the man\" (troisième personne)."],
["mc","This is the phone ___ I want. Que mettre dans le trou ?","that","who","what","it","Pour une chose, on utilise \"that\"."],
["mc","Comment dit-on « le film qu'on a vu » (sans relatif) ?","the movie we saw","the movie what we saw","the movie who we saw","the movie we saw it","S'il est suivi d'un sujet + verbe, tu peux supprimer \"that\"."],
["or","J'ai une amie qui cuisine","I have a friend who cooks","cook","Avec \"a friend\" (troisième personne), \"cooks\" prend un -s."],
["or","C'est l'homme qui habite ici","He's the man who lives here","live","Le verbe s'accorde avec \"the man\" : troisième personne, \"lives\"."],
["or","C'est le livre que j'ai acheté","This is the book I bought","what","N'utilise pas \"what\" pour « que » ; ici, tu peux supprimer le relatif."],
["fi","the man __ lives here","l'homme qui habite ici","who|that","what|he|which","Pour une personne : \"who\" (ou \"that\")."],
["fi","the book __ I read","le livre que j'ai lu","that|which","who|what|it","Pour une chose : \"that\" ou \"which\"."],
["fi","the cafe __ we met","le café où on s'est rencontrés","where","who|what|it","Pour un lieu, on utilise \"where\"."],
["ty","Elle a une amie qui parle japonais","She has a friend who speaks Japanese|She has a friend that speaks Japanese","friend · who · speak Japanese — avec la troisième personne","have","Avec \"she\", c'est \"has\", et \"speaks\" s'accorde avec \"a friend\" : troisième personne."],
["ty","Le film qu'on a vu était génial","The movie we saw was great|The movie that we saw was great|The movie we saw was amazing|The movie that we saw was amazing","movie · we saw · great — le relatif est facultatif","were","Tu peux supprimer \"that\", et avec \"the movie\" (singulier), c'est \"was\" : accord."],
["ty","C'est ce portable que je veux (commence par \"This is\")","This is the phone I want|This is the phone that I want|This is the phone which I want","phone · I want — le relatif est facultatif","what","Tu peux supprimer \"that\" : \"the phone I want\"."]]},
{ id:"make-do", title:"make ou do, say ou tell", blurb:"« Faire » peut être make ou do, et « dire », say ou tell. Apprends les combinaisons les plus courantes.", deck:"Make et do", body:`
<p>En français, « faire » sert à presque tout. En anglais, il y a deux verbes : <b>make</b> (créer, fabriquer, produire quelque chose) et <b>do</b> (effectuer une tâche ou une activité). La règle aide, mais le plus utile est d'apprendre les combinaisons toutes faites.</p>
<div class="tbl"><table><tr><th>make</th><th>do</th></tr><tr><td class="k">a mistake, a decision, friends, dinner, money, a plan</td><td class="k">homework, the dishes, business, exercise, a favor, your best</td></tr></table></div>
<h3>make : créer ou produire</h3>
{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|J'ai fait une erreur}}{{ex:We need to make a decision.|/wi ˈniːd tə ˈmeɪk ə dɪˈsɪʒn/|Il faut qu'on prenne une décision}}{{ex:She makes friends easily.|/ʃi ˈmeɪks ˈfrendz ˈiːzəli/|Elle se fait facilement des amis}}{{ex:I'll make dinner.|/aɪl ˈmeɪk ˈdɪnər/|Je m'occupe du dîner}}
<h3>do : tâches et activités</h3>
{{ex:I do my homework after school.|/aɪ ˈduː maɪ ˈhoʊmwɜːrk æftər ˈskuːl/|Je fais mes devoirs après les cours}}{{ex:He does the dishes every day.|/hi ˈdʌz ðə ˈdɪʃɪz ˈevri ˈdeɪ/|Il fait la vaisselle tous les jours}}{{ex:We do business in France.|/wi ˈduː ˈbɪznəs ɪn ˈfræns/|Nous faisons des affaires en France}}{{ex:Can you do me a favor?|/kən ju ˈduː mi ə ˈfeɪvər/|Tu peux me rendre un service ?}}
<p>Attention : <i>do</i> est aussi l'auxiliaire des questions, donc il apparaît parfois deux fois. Avec <i>he, she, it</i>, l'auxiliaire est <b>does</b> (troisième personne) et le verbe lexical reste <i>do</i>.</p>
{{ex:What does she do?|/ˈwʌt dəz ʃi ˈduː/|Qu'est-ce qu'elle fait dans la vie ?}}
<h3>Autres pièges : faire, poser, gagner</h3>
<p>Quelques calques fréquents : certains « faire » ne se traduisent ni par <i>make</i> ni par <i>do</i>, et « gagner » a deux traductions.</p>
<div class="tbl"><table><tr><th>Français</th><th>Anglais</th></tr><tr><td>faire du sport</td><td class="k">exercise, play sports</td></tr><tr><td>faire une photo</td><td class="k">take a photo</td></tr><tr><td>faire la fête</td><td class="k">party, have a party</td></tr><tr><td>poser une question</td><td class="k">ask a question</td></tr><tr><td>gagner de l'argent</td><td class="k">earn money, make money (jamais win)</td></tr><tr><td>gagner un match</td><td class="k">win a game</td></tr></table></div>
<h3>say ou tell</h3>
<p>« Dire » se divise aussi en deux. <b>tell</b> est suivi directement de la personne (<i>tell me</i>) ; <b>say</b> ne l'est pas, ou alors avec <i>to</i> (<i>say to me</i>). « Il m'a dit » se traduit donc <i>He told me</i>, jamais <i>He said me</i>.</p>
{{ex:She said hello.|/ʃi ˈsed həˈloʊ/|Elle a dit bonjour}}{{ex:He told me the truth.|/hi ˈtoʊld mi ðə ˈtruːθ/|Il m'a dit la vérité}}{{ex:Tell me your name.|/ˈtel mi jʊr ˈneɪm/|Dis-moi comment tu t'appelles}}{{ex:What did he say?|/ˈwʌt dɪd hi ˈseɪ/|Qu'est-ce qu'il a dit ?}}
<div class="tip">Erreurs fréquentes : <b>do a mistake</b>, <b>make homework</b>, <b>make a photo</b>, <b>He said me</b> ✗ → <b>make a mistake</b>, <b>do homework</b>, <b>take a photo</b>, <b>He told me</b> ✓.</div>`,
check:[["« J'ai fait une erreur » en anglais :",["I did a mistake.","I made a mistake.","I had a mistake.","I committed a mistake."],1,"« Faire une erreur » se dit \"make a mistake\"."],["« Il m'a dit la vérité » en anglais :",["He told me the truth.","He said me the truth.","He told to me the truth.","He say me the truth."],0,"Quand la personne suit directement (\"me\"), on utilise \"tell\" : \"told me\"."],["He ___ the dishes every night. Que mettre dans le trou ?",["makes","make","does","do"],2,"Les tâches ménagères se disent avec \"do\", et avec \"he\", c'est \"does\" (troisième personne)."]],
practice:[
["mc","Comment dit-on « prendre une décision » ?","make a decision","do a decision","get a decision","say a decision","« Prendre une décision » se dit \"make a decision\"."],
["mc","Comment dit-on « faire ses devoirs » ?","do homework","make homework","do homeworks","make a homework","Les devoirs se disent avec \"do\", et \"homework\" est indénombrable."],
["mc","Comment dit-on « se faire des amis » ?","make friends","do friends","make a friends","do the friends","Créer une relation, c'est \"make friends\"."],
["mc","Comment dit-on « Elle m'a dit son nom » ?","She told me her name.","She said me her name.","She told to me her name.","She say me her name.","Quand la personne suit directement (\"me\"), on utilise \"told\"."],
["mc","« Qu'est-ce qu'elle fait dans la vie ? » en anglais :","What does she do?","What does she does?","What she does?","What do she do?","La question prend l'auxiliaire \"does\" (troisième personne) et le verbe lexical \"do\"."],
["or","Elle fait la vaisselle","She does the dishes","do makes","Les tâches ménagères se disent avec \"do\" ; avec \"she\", c'est \"does\" (troisième personne)."],
["or","Qu'est-ce qu'il a dit ?","What did he say","said","Dans une question au prétérit, on met l'auxiliaire \"did\", et le verbe revient à \"say\"."],
["or","Il m'a dit la vérité","He told me the truth","said","Quand la personne suit directement (\"me\"), on utilise \"tell\"."],
["fi","I __ a mistake.","J'ai fait une erreur","made","did|do|said","« Faire une erreur » se dit \"make a mistake\"."],
["fi","Can you __ me a favor?","Tu peux me rendre un service ?","do","make|tell|say","Un service se dit avec \"do\"."],
["fi","Please __ me your name.","Dis-moi ton nom, s'il te plaît","tell","say|make|do","Quand la personne suit directement (\"me\"), on utilise \"tell\"."],
["ty","Il fait ses devoirs tous les soirs","He does his homework every night|He does homework every night|He does his homework every evening","homework · every night — avec un sujet à la troisième personne","makes","Les devoirs se disent avec \"do\", et avec \"he\", c'est \"does\" (troisième personne)."],
["ty","Tu as pris une décision ?","Did you make a decision|Have you made a decision","make · decision — question avec l'auxiliaire","do","Dans une question au prétérit, l'auxiliaire \"did\" passe devant le sujet, et « décision » va avec \"make\"."],
["ty","Elle m'a dit son nom","She told me her name|She said her name","told · name — \"tell\" suivi de la personne","said","Quand la personne suit directement (\"me\"), on utilise \"tell\"."]]},
];
