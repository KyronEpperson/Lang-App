/* fr-en stage A1: lessons for French speakers (France). Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/fr.md §4 and §8; practice sets follow the verb-core standing rule (§7).
   English side as es-en except false-friends, rebuilt per fr.md §8 (lesson deviation in deviations.json). */
module.exports = [
{ id:"it-there", title:"it et there : le sujet, et l'accord après there", blurb:"« Il pleut » se dit It's raining, comme en français. Les vrais pièges : « il fait chaud » n'est pas It makes hot, et « il y a » devient there is ou there are.", deck:"Conversation informelle", body:`
<p>Bonne nouvelle : comme le français, l'anglais exige toujours un sujet. « Il pleut » → <i>It's raining</i>, « C'est important » → <i>It's important</i> : le <i>it</i> anglais joue le rôle du « il » de « il pleut ». Les pièges sont ailleurs : <b>« il fait »</b> ne se traduit pas avec <i>make</i>, et <b>« il y a »</b>, qui ne change jamais en français, devient <i>there is</i> ou <i>there are</i>.</p>
<h3>Météo, heure et opinions : It</h3>
<p>Ici, <i>it</i> ne veut pas dire « ça » : il occupe seulement la place du sujet. Pour la météo, l'anglais utilise <i>be</i>, jamais <i>make</i> : « il fait froid » se dit <i>It's cold</i>, pas <i>It makes cold</i>. Et une phrase ne commence jamais par <i>Is…</i> si ce n'est pas une question.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Il fait froid aujourd'hui}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Il est trois heures}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Il pleut}}{{ex:It's important to sleep.|/ɪts ɪmˈpɔːrtnt tə ˈsliːp/|C'est important de dormir}}
<h3>« Il y a » = There is / There are</h3>
<p>En français, « il y a » reste identique au singulier et au pluriel : « il y a un café », « il y a deux chambres ». En anglais, le verbe s'accorde avec ce qui suit : <b>There is</b> + singulier, <b>There are</b> + pluriel. À l'oral, <i>There is</i> se contracte en <i>There's</i>.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Il y a un café près d'ici}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Il y a deux chambres}}
<h3>Questions et négations</h3>
<p>Pour poser la question, <i>is</i> ou <i>are</i> passe devant <i>there</i>, comme dans « Y a-t-il… ? ». Attention : <i>a bathroom</i> (les toilettes) est au singulier en anglais, donc <i>Is there…?</i>.</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Est-ce qu'il y a des toilettes ici ?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Il y a des places libres ?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Il n'y a pas de bus aujourd'hui}}
<h3>Ne confonds pas have et there is</h3>
<p>« Il y a » contient le verbe « avoir », mais il ne se traduit jamais par <i>have</i> ou <i>has</i>. « Avoir » (posséder) se dit <i>have</i> ; « il y a » (quelque chose se trouve quelque part) se dit <i>there is / there are</i>. « Il y a beaucoup de monde » n'est donc pas <i>Has many people</i>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|J'ai une voiture}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Il y a une voiture dehors}}
<div class="tip">Erreurs fréquentes : <b>It makes cold.</b> ✗ → <b>It's cold.</b> ✓ · <b>There is three people.</b> ✗ → <b>There are three people.</b> ✓ · <b>There are a cafe.</b> ✗ → <b>There's a cafe.</b> ✓ · <b>Has many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["Comment dit-on « Il fait chaud aujourd'hui » ?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Comme le « il » de « il fait chaud », \"it\" est le sujet ; et le verbe est \"be\", pas \"make\"."],["There ___ three people. Que mettre dans le trou ?",["is","are","have","be"],1,"\"Three people\" est au pluriel, donc \"there are\", même si « il y a » ne change pas."],["Comment dit-on « Est-ce qu'il y a des toilettes ici ? » ?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Pour demander s'il y a quelque chose : \"Is there a…?\"."]],
practice:[
["mc","Comment dit-on « Il pleut » ?","It's raining.","Is raining.","There is raining.","Rain is.","Pour la météo, l'anglais met \"it\", exactement comme le « il » de « il pleut »."],
["mc","Comment dit-on « Il y a un café près d'ici » ?","There's a cafe near here.","It's a cafe near here.","Has a cafe near here.","There are a cafe near here.","« Il y a » + singulier se dit \"there is\" : accord avec \"a cafe\"."],
["mc","There ___ two rooms. Que mettre dans le trou ?","are","is","have","has","\"Two rooms\" est au pluriel, donc \"are\" (accord)."],
["mc","Quelle phrase traduit « Il est important de dormir » ?","It's important to sleep.","Is important to sleep.","Important is to sleep.","There is important to sleep.","Le « il » de « il est important » devient \"it\" : la phrase anglaise a besoin de ce sujet."],
["mc","Comment dit-on « Il est trois heures » ?","It's three o'clock.","They're three o'clock.","Is three o'clock.","Are three o'clock.","L'heure se dit au singulier, avec \"it\" : \"It's three o'clock\", jamais \"They're\"."],
["or","Il y a deux places libres","There are two seats","is","\"Two seats\" est au pluriel : \"there are\" (accord)."],
["or","Est-ce qu'il y a des toilettes ici ?","Is there a bathroom here","are","Dans la question, \"is\" passe devant \"there\" ; \"a bathroom\" est au singulier en anglais : \"is\" (accord)."],
["or","Il fait froid aujourd'hui","It's cold today","Is","« Il fait froid » : la phrase commence par \"It's\", jamais par \"Is\", et jamais avec \"make\"."],
["fi","__ cold today.","Il fait froid aujourd'hui","It's|It is","Is|There's|This","Il faut \"it\", comme le « il » de « il fait froid », puis \"is\"."],
["fi","There __ a bank near here.","Il y a une banque près d'ici","is","are|have|has","Une banque, c'est un singulier : \"there is\" (accord)."],
["fi","__ there any seats?","Il y a des places libres ?","Are","Is|Do|Have","\"Seats\" est au pluriel, donc \"Are\" passe devant \"there\" (accord)."],
["ty","Il fait chaud aujourd'hui","It's hot today","it · hot · today — sans \"make\"","Is","« Il fait chaud » ne se traduit pas avec \"make\" : le sujet \"it\" + \"is\"."],
["ty","Est-ce qu'il y a des toilettes ici ? (avec \"bathroom\")","Is there a bathroom here|Is there a restroom here","is there · bathroom — pour poser la question","Are","Pour poser la question, \"is\" passe devant \"there\", qui sert de sujet : une seule salle de bains, \"is\" (accord)."],
["ty","Il y a deux chambres","There are two rooms","there · two · room — au pluriel","is","Avec un pluriel, \"there are\" : \"there\" sert de sujet et le verbe s'accorde avec \"two rooms\"."],
["ty","Il y a beaucoup de monde ici","There are many people here|There are a lot of people here","there · many · people — pas \"has\"","Has","« Il y a » contient « avoir », mais se dit \"there is/are\", jamais \"has\" ; \"people\" est au pluriel : \"there are\" (accord)."]]},

{ id:"plurals", title:"Pluriels : irréguliers, adjectifs sans -s et this / these", blurb:"Le -s, tu connais déjà. Attention à people et children, à these, et aux adjectifs, qui ne prennent jamais de -s.", deck:"Achats et paiements", body:`
<p>Le pluriel anglais ressemble beaucoup au pluriel français : <i>book → books</i>, <i>box → boxes</i>. Cette partie, tu la maîtrises déjà. Une différence quand même : en anglais, le -s du pluriel <b>se prononce</b> (/s/, /z/ ou /ɪz/), alors qu'en français il est muet. Cette leçon se concentre sur ce qui change vraiment.</p>
<h3>Pluriels irréguliers</h3>
<div class="tbl"><table><tr><th>Règle</th><th>Exemple</th></tr><tr><td>presque toujours -s</td><td class="k">book → books</td></tr><tr><td>après s, x, ch, sh : -es</td><td class="k">box → boxes</td></tr><tr><td>consonne + y → -ies</td><td class="k">city → cities</td></tr><tr><td>irréguliers</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|deux livres}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|J'ai deux enfants}}{{ex:These people are nice.|/ˈðiːz ˈpiːpl ər ˈnaɪs/|Ces gens sont sympas}}
<p><i>People</i> est déjà un pluriel : <i>people are</i>, jamais <i>peoples</i>. Et pour dire « des gens », on dit <i>people</i>, pas <i>persons</i>. Pour une seule personne : <i>person</i>.</p>
<h3>Les adjectifs ne prennent pas de -s</h3>
<p>En français, l'adjectif s'accorde et se place souvent après le nom : « des voitures rouges ». En anglais, l'adjectif ne change jamais et se place devant : <i>red cars</i>, ni <i>reds cars</i> ni <i>cars reds</i>.</p>
{{ex:red cars|/ˈred ˈkɑːrz/|des voitures rouges}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Ces chaussures sont jolies}}
<h3>this / that (un seul), these / those (plusieurs)</h3>
<p><i>this</i> a un i bref et relâché, /ɪ/ ; <i>these</i>, un i long, /iː/. Si tu allonges le i de <i>this</i>, on entend un pluriel. Et le verbe s'accorde : <i>this is</i>, <i>these are</i>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|C'est mon sac}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Ce sont mes clés}}
<h3>my, your, his, her, our, their</h3>
<p>Ils ne prennent jamais la marque du pluriel : <i>my keys</i> (« mes clés »). Et <i>his / her</i> dépendent du propriétaire, pas de l'objet, contrairement à « son, sa, ses » : « ses frères » (à elle) se dit <i>her brothers</i>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|C'est ton portable ?}}{{ex:Her brothers live in Toulouse.|/hər ˈbrʌðərz ˈlɪv ɪn tuˈluːz/|Ses frères (à elle) habitent à Toulouse}}
<div class="tip">Erreurs fréquentes : <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>the peoples</b> ✗ → <b>the people</b> ✓ · <b>This are my keys.</b> ✗ → <b>These are my keys.</b> ✓</div>`,
check:[["I have two ___. Que mettre dans le trou ?",["child","children","childs","a child"],1,"Le pluriel de \"child\" est irrégulier : \"children\"."],["___ are my keys. Que mettre dans le trou ?",["This","That","These","It"],2,"\"Keys\" est au pluriel et le verbe est \"are\" : \"these\"."],["Comment dit-on « les voitures rouges » ?",["the cars reds","the reds cars","the cars red","the red cars"],3,"L'adjectif se place devant le nom et ne prend jamais de -s."]],
practice:[
["mc","Comment dit-on « trois personnes » ?","three people","three peoples","three person","three people's","\"People\" est déjà un pluriel : jamais de -s."],
["mc","Quel est le pluriel de \"child\" ?","children","childs","childes","child","C'est un pluriel irrégulier : \"child\" → \"children\"."],
["mc","Comment dit-on « Ces chaussures sont jolies » ?","Those shoes are nice.","That shoes are nice.","Those shoes are nices.","Those shoes nice are.","\"Shoes\" est au pluriel : \"those\". L'adjectif \"nice\" ne prend pas de -s."],
["mc","Comment dit-on « des voitures rouges » ?","red cars","reds cars","cars reds","cars red","L'adjectif se place devant le nom et ne prend pas de -s."],
["mc","Quel est le pluriel de \"box\" ?","boxes","boxs","boxies","box","Après s, x, ch, sh, on ajoute -es."],
["or","Ce sont mes clés","These are my keys","is","Avec \"these\", le verbe est au pluriel : \"are\" (accord)."],
["or","Ces gens sont sympas","These people are nice","is","\"People\" est un pluriel, donc le verbe est \"are\" (accord)."],
["or","J'ai deux voitures rouges","I have two red cars","reds","L'adjectif se place devant et ne prend pas de -s : \"red cars\"."],
["fi","I have three __.","J'ai trois enfants","children","childs|child|childrens","Pluriel irrégulier : \"child\" → \"children\"."],
["fi","__ is my friend.","Voici mon ami","This","These|Those|They","Une seule personne : \"this\", avec un i bref."],
["fi","The __ are very nice.","Les gens sont très gentils","people","peoples|person|people's","\"People\" est déjà un pluriel."],
["ty","Voici mon sac","This is my bag","this · my · bag — un seul objet","are","Un seul objet : \"this is\" (accord)."],
["ty","C'est ton portable ? (avec \"this\")","Is this your phone|Is this your cell phone","is · this · your · phone — pour poser la question","are","Dans la question, \"is\" passe devant \"this\" : un seul objet, \"is\" (accord)."],
["ty","J'ai deux voitures rouges","I have two red cars","two · red · car — sans -s à l'adjectif","reds","L'adjectif se place devant le nom et ne prend pas de -s."]]},

{ id:"present", title:"Présent simple : don't et la place de always", blurb:"« Je ne mange pas » ne se dit pas I not eat : il faut l'auxiliaire don't. Et always se place avant le verbe.", deck:"Se présenter", body:`
<p>L'ordre de base est le même qu'en français : <b>sujet + verbe + complément</b> (<i>I drink coffee</i>). Trois détails trahissent tout de suite un francophone.</p>
<h3>1. Une seule forme pour presque tout le monde</h3>
<p>En français, le verbe se conjugue : « je bois, nous buvons, ils boivent ». En anglais, le présent garde la même forme avec <i>I, you, we, they</i> : <i>I drink, we drink, they drink</i>.</p>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Je bois du café}}{{ex:We live in Bordeaux.|/wi ˈlɪv ɪn bɔːrˈdoʊ/|Nous habitons à Bordeaux}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Ils travaillent le week-end}}
<h3>2. La négation : don't, pas « not » tout seul</h3>
<p>« Je ne mange pas de viande » ne se dit ni <i>I not eat meat</i> ni <i>I eat not meat</i>. Devant le verbe, on met l'auxiliaire <b>don't</b> (do not) : c'est lui qui joue le rôle du « ne… pas ».</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Je ne mange pas de viande}}{{ex:We don't live here.|/wi ˈdoʊnt ˈlɪv ˈhɪr/|Nous n'habitons pas ici}}
<p>Avec <i>he</i>, <i>she</i> et <i>it</i>, le verbe change (<i>she works</i>, <i>he doesn't</i>) : tu le verras deux leçons plus loin. Avec <i>I, you, we, they</i>, il ne change jamais.</p>
<h3>3. always, usually, never : avant le verbe</h3>
<p>En français, l'adverbe suit le verbe : « Je bois toujours du thé ». En anglais, l'adverbe de fréquence se place <b>juste avant</b> le verbe principal : <i>I always drink tea</i>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|D'habitude, je me lève à sept heures}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Je ne bois jamais de café le soir}}
<h3>Un seul présent en français, deux en anglais</h3>
<p>« Je mange » veut dire <i>I eat</i> (en général) ou <i>I'm eating</i> (en ce moment). Le présent simple sert aux habitudes et aux vérités générales ; pour ce qui se passe maintenant, tu verras <i>be</i> + -ing un peu plus loin. Et un avant-goût : l'adjectif se place avant le nom, « une grande maison » se dit <i>a big house</i>.</p>
{{ex:I have a big house.|/aɪ ˈhæv ə ˈbɪg ˈhaʊs/|J'ai une grande maison}}
<div class="tip">Erreurs fréquentes : <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ · <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓ · <b>We doesn't live here.</b> ✗ → <b>We don't live here.</b> ✓</div>`,
check:[["Comment dit-on « Je travaille dans une banque » ?",["Work in a bank.","Am work in a bank.","I work in a bank.","I working in a bank."],2,"Sujet + verbe, sans \"am\" ni -ing : \"I work\"."],["I ___ eat meat. (je ne mange pas)",["not","am not","no","don't"],3,"Pour nier un verbe lexical, on utilise l'auxiliaire \"don't\"."],["Où se place \"always\" ?",["I always drink tea.","Always drink tea.","I drink always tea.","I drink tea the always."],0,"Les adverbes de fréquence se placent juste avant le verbe, pas après comme en français."]],
practice:[
["mc","Comment dit-on « J'étudie l'anglais » ?","I study English.","Study English.","I am study English.","I studying English.","Présent simple : \"I study\", sans \"am\" ni -ing."],
["mc","Comment dit-on « Je ne mange pas de viande » ?","I don't eat meat.","I no eat meat.","I'm not eat meat.","I eat not meat.","La négation se fait avec l'auxiliaire \"don't\" devant le verbe : ni \"no\" ni \"not\" tout seul."],
["mc","Comment dit-on « Nous habitons à Bogotá » ?","We live in Bogotá.","Live in Bogotá.","We are live in Bogotá.","We living in Bogotá.","\"We live\" : pas de \"are\" devant un verbe lexical."],
["mc","Comment dit-on « D'habitude, je me lève à sept heures » ?","I usually get up at seven.","Usually I get up seven.","I get up usually at seven.","I am usually get up at seven.","\"Usually\" se place juste avant le verbe."],
["mc","Quelle phrase traduit « Je bois toujours du thé » ?","I always drink tea.","I drink always tea.","Always drink tea.","I am always drink tea.","\"Always\" se place avant le verbe, pas après comme en français."],
["or","Je travaille le week-end","I work on weekends","works","Avec \"I\", le verbe ne prend pas de -s : le -s est réservé à la troisième personne."],
["or","Nous ne mangeons pas de viande","We don't eat meat","doesn't","Avec \"we\", l'auxiliaire est \"don't\" ; \"doesn't\" est réservé à la troisième personne."],
["or","Je ne bois jamais de café le soir","I never drink coffee at night","always","\"Never\" se place juste avant le verbe."],
["fi","I __ like fish.","Je n'aime pas le poisson","don't|do not","not|am not|no","La négation se fait avec l'auxiliaire \"don't\"."],
["fi","I __ English every day.","J'étudie l'anglais tous les jours","study","am study|studying|studies","Avec \"I\", le verbe garde sa base verbale."],
["fi","We usually __ at home.","D'habitude, nous mangeons à la maison","eat","eating|are eat|eats","Après \"usually\", le verbe reste à la base verbale."],
["ty","Je bois du thé","I drink tea","drink · tea — sans \"am\"","am","Présent simple : \"I drink tea\", sans \"am\" ni -ing."],
["ty","Je ne mange pas de viande","I don't eat meat","don't · eat · meat — la négation","no","La négation se fait avec l'auxiliaire \"don't\", pas avec \"no\" ou \"not\" seul."],
["ty","Nous n'habitons pas ici","We don't live here","we · don't · live — avec l'auxiliaire","no","Pour nier, on met l'auxiliaire \"don't\" devant le verbe."]]},

{ id:"questions", title:"Questions : do et l'ordre des mots", blurb:"En français, l'intonation ou « est-ce que » suffisent. En anglais, il faut do, et le mot interrogatif vient en premier.", deck:"Survie 2", body:`
<p>En français, une question peut garder l'ordre d'une affirmation, avec une autre intonation : « Tu aimes le café ? ». On peut aussi ajouter « est-ce que » ou inverser : « Aimes-tu le café ? ». En anglais, l'intonation ne suffit pas, et on n'inverse jamais un verbe lexical : il faut <b>inverser l'auxiliaire</b> ou ajouter <b>do</b>.</p>
<h3>Avec be : on inverse</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Ça va ?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|C'est ton sac ?}}
<h3>Avec les autres verbes : Do au début</h3>
<p>Mets <b>Do</b> devant le sujet, un peu comme « est-ce que » : il annonce la question. Le verbe principal ne bouge pas. « Parles-tu anglais ? » ne donne donc pas <i>Speak you English?</i>, mais <i>Do you speak English?</i>.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Tu aimes le café ?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Tu parles anglais ?}}
<p>Réponses courtes : <i>Yes, I do.</i> / <i>No, I don't.</i> (pas <i>Yes, I like</i>).</p>
<h3>Mot interrogatif + do + sujet + verbe</h3>
<p><i>what, where, when, who, why</i> et <i>how</i> sont faciles ; le plus dur, c'est ce qui suit. « Tu habites où ? » ne donne pas <i>Where you live?</i>. Et « Comment ça s'appelle ? » se dit <i>What do you call this?</i>, pas <i>How do you call this?</i>.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Où est-ce que tu habites ?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Qu'est-ce que tu fais dans la vie ?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Où sont les toilettes ?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Combien ça coûte ?}}
<h3>Négations : une seule négation</h3>
<p>Pour nier, on utilise <i>don't</i>. Et l'anglais n'accepte qu'une seule négation par phrase : « Je ne sais rien » a deux mots négatifs en français (« ne » et « rien »), mais se dit <i>I don't know anything</i>, pas <i>I don't know nothing</i>.</p>
{{ex:I don't understand.|/aɪ ˈdoʊnt ˌʌndərˈstænd/|Je ne comprends pas}}{{ex:I don't know anything.|/aɪ ˈdoʊnt ˈnoʊ ˈeniθɪŋ/|Je ne sais rien}}
<div class="tip">Erreurs fréquentes : <b>You like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓ · <b>Speak you English?</b> ✗ → <b>Do you speak English?</b> ✓ · <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓</div>`,
check:[["Comment dit-on « Tu aimes le café ? » ?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Avec un verbe comme \"like\", la question commence par l'auxiliaire \"Do\"."],["Comment dit-on « Où est-ce que tu habites ? » ?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Mot interrogatif + \"do\" + sujet + verbe."],["Do you speak English? Quelle est la bonne réponse ?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Si on te pose la question avec \"do\", tu réponds avec \"do\"."]],
practice:[
["mc","Comment dit-on « Tu parles anglais ? » ?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","\"Speak you English?\" calque « Parles-tu anglais ? » : avec un verbe lexical, la question a besoin de l'auxiliaire \"Do\"."],
["mc","Comment dit-on « Où est-ce que tu habites ? » ?","Where do you live?","Where you live?","Where are you live?","Where live you?","Mot interrogatif + auxiliaire \"do\" + sujet + verbe."],
["mc","Comment dit-on « Combien ça coûte ? » ?","How much is this?","How much this is?","How much does this?","What much is this?","Le prix se demande avec \"How much is…?\"."],
["mc","Do you like tea? Quelle est la bonne réponse ?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Question avec \"do\", réponse avec \"do\" : \"Yes, I do\"."],
["mc","Comment dit-on « Qu'est-ce que tu fais dans la vie ? » ?","What do you do?","What are you do?","What you do?","What do you?","On dit \"What do you do?\" : le premier \"do\" est l'auxiliaire, le second est le verbe « faire »."],
["or","Tu aimes le café ?","Do you like coffee","Are the","\"Like\" n'est pas \"be\" : la question commence par l'auxiliaire \"Do\" ; le café en général se dit sans \"the\"."],
["or","Où sont les toilettes ?","Where is the bathroom","a do","Avec \"be\", on inverse : \"Where is\" + sujet (\"the bathroom\", au singulier), sans l'auxiliaire \"do\"."],
["or","Où est-ce que tu habites ?","Where do you live","are","\"Live\" a besoin de l'auxiliaire \"do\" : \"Where do you live\"."],
["fi","__ you like music?","Tu aimes la musique ?","Do","Are|Is|Does","\"Like\" n'est pas \"be\", donc l'auxiliaire est \"Do\"."],
["fi","__ do you live?","Où est-ce que tu habites ?","Where","What|Who|When","Pour demander un lieu : \"where\"."],
["fi","What time __ it?","Quelle heure est-il ?","is","do|does|are","L'heure se demande avec \"be\" : \"What time is it?\"."],
["ty","Tu parles anglais ?","Do you speak English|Can you speak English","do · speak · English — question avec auxiliaire","Are","La question a besoin de l'auxiliaire \"Do\" devant \"you\"."],
["ty","Où sont les toilettes ? (avec \"bathroom\")","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — avec le verbe be","a","Avec \"be\", \"is\" passe devant le sujet : \"Where is the bathroom?\"."],
["ty","Tu aimes les chiens ?","Do you like dogs","do · like · dog — au pluriel","dog","\"Like\" a besoin de l'auxiliaire \"Do\" ; les chiens en général : pluriel, sans \"the\"."]]},

{ id:"third-s", title:"he, she, it : le -s et does / doesn't", blurb:"Avec une seule personne ou une seule chose, le verbe prend un -s, et ce -s s'entend. Dans les questions et les négations : does.", deck:"Se présenter", body:`
<p>C'est la règle que les francophones oublient le plus. En français, « il parle » se prononce exactement comme « je parle » : la terminaison est muette. En anglais, le présent change très peu, mais <b>la troisième personne du singulier</b> (<i>he, she, it</i>, ou une personne ou une chose) prend un <b>-s</b>, et ce -s <b>s'entend</b>.</p>
<div class="tbl"><table><tr><th>Sujet</th><th>Verbe</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Elle travaille dans une banque}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Il aime le foot}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Ma mère cuisine bien}}
<h3>Trois façons de prononcer le -s</h3>
<p>Il se prononce /s/ après un son sourd (<i>works</i>), /z/ après un son sonore (<i>plays</i>, <i>lives</i>), et /ɪz/ après s, z, ch, sh (<i>watches</i>) : une syllabe de plus.</p>
<h3>Les verbes qui changent un peu</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Elle a une voiture (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Il part au travail à huit heures (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Elle étudie l'anglais (study → studies)}}
<h3>Négations et questions : does</h3>
<p>Avec <b>doesn't</b> ou <b>Does</b>, le -s passe sur l'auxiliaire et le verbe principal revient à sa base verbale.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Il ne boit pas de café}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Elle habite ici ?}}
<div class="tip">Erreurs fréquentes : <b>She work here.</b> ✗ → <b>She works here.</b> ✓ · <b>My brother don't like it.</b> ✗ → <b>My brother doesn't like it.</b> ✓ · <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Lima. Que mettre dans le trou ?",["live","lives","living","is live"],1,"Avec \"she\", le verbe prend un -s : troisième personne."],["He ___ like coffee. Que mettre dans le trou ?",["don't","isn't","doesn't","not"],2,"Avec \"he\", la négation est \"doesn't\"."],["Comment dit-on « Elle a une voiture » ?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Avec \"she\", \"have\" devient \"has\"."]],
practice:[
["mc","My brother ___ in Bogotá. Que mettre dans le trou ?","works","work","working","is work","\"My brother\" = une seule personne : \"works\" (troisième personne)."],
["mc","Comment dit-on « Il ne boit pas de café » ?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Avec \"he\" : \"doesn't\" + base verbale."],
["mc","Comment dit-on « Elle habite ici ? » ?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Après \"Does\", le verbe ne prend pas de -s."],
["mc","\"have\" avec \"she\" : quelle forme ?","has","haves","have","is have","Avec \"she\", \"have\" devient \"has\"."],
["mc","\"study\" avec \"he\" : quelle forme ?","studies","studys","study","studyes","Consonne + y → -ies : \"studies\"."],
["or","Elle travaille dans une banque","She works at a bank","work the","Avec \"she\", le verbe prend un -s : troisième personne."],
["or","Il a deux chiens","He has two dogs","have dog","Avec \"he\", \"have\" devient \"has\" : troisième personne."],
["or","Elle ne mange pas de viande","She doesn't eat meat","eats","Après l'auxiliaire \"doesn't\", le verbe ne prend pas de -s."],
["fi","He __ soccer.","Il aime le foot","likes","like|liking|is like","Avec \"he\" : \"likes\" (troisième personne)."],
["fi","__ she speak English?","Elle parle anglais ?","Does","Do|Is|Are","Avec \"she\", la question prend l'auxiliaire \"Does\"."],
["fi","She __ to work at eight.","Elle part au travail à huit heures","goes","go|going|gos","\"Go\" devient \"goes\"."],
["ty","Il a une voiture","He has a car","has · car — avec he","have","Avec \"he\", \"have\" devient \"has\" : troisième personne."],
["ty","Elle aime les chats","She likes cats","likes · cat — avec she, au pluriel","cat","Avec \"she\", \"likes\" prend un -s (troisième personne) ; les chats en général : pluriel."],
["ty","Il n'habite pas ici","He doesn't live here","doesn't · live · here — à la base verbale","lives","Après l'auxiliaire \"doesn't\", le verbe reste à la base verbale."]]},

{ id:"countable", title:"Dénombrables et indénombrables : advice, information, some, much", blurb:"« Des conseils », « des informations » : en français, ça se compte. En anglais, advice et information ne prennent jamais de -s.", deck:"Au restaurant", body:`
<p>Les noms anglais se divisent en <b>dénombrables</b> et <b>indénombrables</b>. L'idée existe en français (« de l'eau », « de l'argent »), mais certains mots qui se comptent en français sont indénombrables en anglais.</p>
<div class="tbl"><table><tr><th>Dénombrables</th><th>Indénombrables</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, nombres, -s</td><td>sans a / an, sans nombre, sans -s</td></tr></table></div>
<h3>Attention : en français, ils se comptent</h3>
<p><i>advice</i> (des conseils), <i>information</i> (des informations), <i>news</i> (les nouvelles, les infos), <i>furniture</i> (des meubles), <i>homework</i> (les devoirs), <i>luggage</i> (des bagages). Jamais de -s ni de <i>a</i>, et le verbe reste au singulier. Même piège avec <i>hair</i> : « mes cheveux sont longs » se dit <i>my hair is long</i>.</p>
{{ex:Can I give you some advice?|/kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/|Je peux te donner un conseil ?}}{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|Les nouvelles sont bonnes}}{{ex:a piece of furniture|/ə ˈpiːs əv ˈfɜːrnɪtʃər/|un meuble}}
<h3>some et any</h3>
<p><b>some</b> dans les phrases affirmatives ; <b>any</b> dans les négations et les questions (mais pour demander ou proposer quelque chose, on garde <b>some</b> : <i>Can I have some water?</i>). Et une seule négation : « Je n'ai pas d'argent » se dit <i>I don't have any money</i>, pas <i>I don't have no money</i>.</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|J'ai un peu d'argent}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Je n'ai pas d'argent}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Tu as des questions ?}}
<h3>many et much</h3>
<p>Le français dit « beaucoup de » dans tous les cas. L'anglais distingue : dénombrables, <b>many</b> + pluriel ; indénombrables, <b>much</b>. <b>a lot of</b> marche pour les deux.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Combien de personnes ?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Je n'ai pas beaucoup de temps}}
<h3>Pour compter l'indénombrable</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|un verre d'eau}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|une tasse de café}}
<div class="tip">Erreurs fréquentes : <b>some advices</b> ✗ → <b>some advice</b> ✓ · <b>an information</b> ✗ → <b>some information</b> ✓ · <b>The news are good.</b> ✗ → <b>The news is good.</b> ✓ · <b>My hairs are long.</b> ✗ → <b>My hair is long.</b> ✓</div>`,
check:[["How ___ people are there? Que mettre dans le trou ?",["much","many","any","a"],1,"\"People\" se compte : \"many\"."],["Lequel de ces noms est indénombrable en anglais ?",["apple","chair","advice","friend"],2,"\"Advice\" ne prend ni \"a\" ni -s, même si on dit « des conseils » en français."],["I don't have ___ money. Que mettre dans le trou ?",["some","a","many","any"],3,"Dans les négations, on utilise \"any\"."]],
practice:[
["mc","Can I have ___ water? Que mettre dans le trou ?","some","a","many","an","\"Water\" est indénombrable : ni \"a\" ni \"many\". Pour demander, \"some\"."],
["mc","Comment dit-on « J'ai besoin de conseils » ?","I need some advice.","I need some advices.","I need an advice.","I need many advices.","« Des conseils » est au pluriel en français, mais \"advice\" est indénombrable : \"some advice\"."],
["mc","Comment dit-on « Tu as des questions ? » ?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Après \"any\", un nom dénombrable se met au pluriel."],
["mc","Quelle phrase est correcte ?","I need some information.","I need some informations.","I need an information.","I need many informations.","\"Information\" est indénombrable : jamais de -s ni de \"an\"."],
["mc","How ___ time do we have? Que mettre dans le trou ?","much","many","any","a","\"Time\" est indénombrable : \"much\"."],
["or","Ce conseil est très utile","This advice is very useful","are","\"Advice\" est indénombrable : singulier, avec \"is\" (accord)."],
["or","Les nouvelles sont bonnes","The news is good","are","\"News\" est indénombrable : le verbe est au singulier, \"is\" (accord)."],
["or","Je n'ai pas beaucoup de temps","I don't have much time","many","\"Time\" est indénombrable : \"much\", pas \"many\"."],
["fi","How __ is this?","Combien ça coûte ?","much","many|any|some","Le prix se demande avec \"how much\"."],
["fi","I don't have __ questions.","Je n'ai pas de questions","any","some|much|a","Dans les négations, on utilise \"any\"."],
["fi","The furniture __ new.","Les meubles sont neufs","is","are|have|has","\"Furniture\" est indénombrable : singulier, avec \"is\" (accord)."],
["ty","Je peux avoir un peu d'eau ?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|Can you give me some water|Could you give me some water","can I have · water — avec some","a","Dans la question, l'auxiliaire \"can\" passe devant \"I\" ; \"water\" est indénombrable : \"some\"."],
["ty","Tu as des questions ?","Do you have any questions","do · have · any · question — au pluriel","much","\"Have\" a besoin de l'auxiliaire \"Do\" dans la question ; \"questions\" se met au pluriel."],
["ty","Cette information est utile","This information is useful","this · information · useful — indénombrable","are","\"Information\" est indénombrable : singulier, avec \"is\" (accord)."]]},

{ id:"object-have", title:"me, him, her, son / sa… et quand « avoir » se dit be", blurb:"Le pronom complément se place après le verbe, son / sa se dit his ou her selon le propriétaire, et « j'ai 20 ans » se dit avec be.", deck:"Se présenter", body:`
<p>En français, le pronom complément se place <b>devant</b> le verbe : « je l'aime », « elle me connaît ». En anglais, il se place <b>après</b> : « Je l'aime » se dit <i>I love her</i>, jamais <i>I her love</i>.</p>
<div class="tbl"><table><tr><th>Sujet</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Complément</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Elle me connaît}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Je l'aime bien (lui)}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Tu peux nous aider ?}}{{ex:I love her.|/aɪ ˈlʌv hər/|Je l'aime (elle)}}
<h3>son, sa, ses : his, her ou their</h3>
<p>En français, « son, sa, ses » s'accordent avec l'objet possédé : « son frère », « sa sœur ». En anglais, on choisit selon le <b>propriétaire</b> : <i>his</i> (à lui), <i>her</i> (à elle), <i>their</i> (à eux, à elles). L'objet possédé ne compte pas. Retiens : <b>his = à lui, her = à elle</b>.</p>
{{ex:Ana loves her brother.|/ˈænə ˈlʌvz hər ˈbrʌðər/|Ana aime son frère}}{{ex:Lucas and his sister|/ˈluːkəs ənd hɪz ˈsɪstər/|Lucas et sa sœur}}
<h3>Le génitif : my father's car</h3>
<p>« La voiture de mon père » ne se dit pas <i>the car of my father</i>. On met le propriétaire d'abord, puis <b>'s</b> : <i>my father's car</i>.</p>
{{ex:my father's car|/maɪ ˈfɑːðərz ˈkɑːr/|la voiture de mon père}}
<h3>have = avoir (objets, famille, temps)</h3>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|J'ai deux frères}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Tu as un stylo ?}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Allons déjeuner}}
<h3>Mais « avoir » ne se dit pas toujours have</h3>
<p>L'âge, la faim, le froid, la soif, la peur et « avoir raison » se disent avec <b>be</b>.</p>
{{ex:I'm 20 years old.|/aɪm ˈtwenti ˈjɪrz ˈoʊld/|J'ai 20 ans}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|J'ai faim}}{{ex:Are you cold?|/ər ju ˈkoʊld/|Tu as froid ?}}{{ex:You're right.|/jʊr ˈraɪt/|Tu as raison}}
<div class="tip">Erreurs fréquentes : <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓ · <b>I have hungry.</b> ✗ → <b>I'm hungry.</b> ✓ · <b>Ana loves his brother.</b> ✗ → <b>Ana loves her brother.</b> ✓ · <b>the car of my father</b> ✗ → <b>my father's car</b> ✓</div>`,
check:[["I like ___. (lui)",["he","his","him","he's"],2,"Après le verbe, on met le pronom complément \"him\"."],["Comment dit-on « J'ai faim » ?",["I'm hungry.","I have hungry.","I have hunger.","I'm hunger."],0,"« Avoir faim » se dit avec \"be\" : \"I'm hungry\"."],["Comment dit-on « Tu as un stylo ? » ?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" est un verbe lexical : la question prend \"Do\"."]],
practice:[
["mc","She knows ___. (moi) Que mettre dans le trou ?","me","I","my","mine","Après le verbe, on met le pronom complément \"me\"."],
["mc","Comment dit-on « J'ai 25 ans » ?","I'm 25.","I have 25 years.","I have 25.","I'm 25 years.","L'âge se dit avec \"be\", pas avec \"have\"."],
["mc","Comment dit-on « Ana aime son frère » ?","Ana loves her brother.","Ana loves his brother.","Ana loves their brother.","Ana her brother loves.","« Son » = à elle (Ana) : \"her\". En anglais, c'est le propriétaire qui compte, pas le mot « frère »."],
["mc","Comment dit-on « Tu as raison » ?","You're right.","You have reason.","You have right.","You're reason.","« Avoir raison » se dit \"be right\"."],
["mc","Comment dit-on « Je l'aime » (elle) ?","I love her.","I her love.","I love she.","Her I love.","En français, « l' » se place devant le verbe ; en anglais, le pronom complément se place après."],
["or","Tu as un stylo ?","Do you have a pen","Are","\"Have\" a besoin de l'auxiliaire \"Do\" ; \"Are you have\" n'existe pas."],
["or","Tu as froid ?","Are you cold","have","« Avoir froid » se dit \"be cold\" : dans la question, \"are\" passe devant le sujet \"you\"."],
["or","Carlos aime sa sœur","Carlos loves his sister","her","« Sa » = à lui (Carlos) : \"his\", même si « sœur » est féminin."],
["fi","Call __ tonight.","Appelle-moi ce soir","me","I|my|mine","Après le verbe, on met \"me\"."],
["fi","I __ hungry.","J'ai faim","am","have|has|is","« Avoir faim » se dit avec \"be\" : \"I am hungry\"."],
["fi","Sofía and __ husband live in Madrid.","Sofía et son mari habitent à Madrid","her","his|their|she","« Son » = à elle (Sofía) : \"her\", même si « mari » est masculin."],
["ty","Tu peux m'aider ?","Can you help me|Could you help me","can you · help · me — avec l'auxiliaire","I","Dans la question, l'auxiliaire \"can\" passe devant \"you\" ; après le verbe, \"me\"."],
["ty","Tu as faim ?","Are you hungry","are · hungry — avec be, pas have","have","« Avoir faim » se dit \"be hungry\" : dans la question, \"are\" passe devant le sujet \"you\"."],
["ty","Il a 30 ans","He is 30|He is 30 years old|He is thirty|He is thirty years old","he · 30 — avec be, pas have","has","L'âge se dit avec \"be\" : avec \"he\", \"is\" (troisième personne)."]]},

{ id:"can-like", title:"can, like + -ing, I'd like : ce que tu sais faire et ce que tu veux", blurb:"« Je sais nager » et « je peux venir » se disent tous les deux avec can. Et pour commander : I'd like.", deck:"Conversation informelle", body:`
<p>Trois structures que tu utiliseras pour te présenter et pour demander quelque chose.</p>
<h3>can : pouvoir et savoir faire</h3>
<p>Le français distingue « je peux venir » et « je sais nager ». L'anglais dit <b>can</b> dans les deux cas. <b>can + base verbale</b> : jamais de -s, même avec <i>he</i> ou <i>she</i>, et jamais de <i>do</i> : la question est <i>Can you…?</i>.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Je sais nager}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Je ne sais pas conduire}}{{ex:Can you speak English?|/kən ju ˈspiːk ˈɪŋglɪʃ/|Tu sais parler anglais ?}}
<h3>like : comme « aimer »</h3>
<p>Bonne nouvelle : <i>like</i> fonctionne comme « aimer » : la personne qui aime vient d'abord, puis ce qu'elle aime. « J'aime la pizza » → <i>I like pizza</i>. Seule différence : pas de <i>the</i> quand tu parles d'une chose en général (tu le verras plus loin).</p>
{{ex:I like pizza.|/aɪ ˈlaɪk ˈpiːtsə/|J'aime la pizza}}{{ex:She likes dogs.|/ʃi ˈlaɪks ˈdɔːgz/|Elle aime les chiens}}
<h3>like + -ing : les goûts et les loisirs</h3>
<p>Après <i>like</i> ou <i>love</i>, le verbe se met à la forme en -ing : « j'aime cuisiner » se dit <i>I like cooking</i>. On entend aussi <i>like</i> + <i>to</i> : <i>I like to cook</i>. Mais jamais la base verbale seule : pas <i>I like cook</i>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|J'aime cuisiner}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|J'adore regarder des films}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Je n'aime pas courir}}
<h3>I'd like : je voudrais, j'aimerais</h3>
<p><i>I like</i> exprime un goût général ; <i>I'd like</i> (<i>I would like</i>), c'est « je voudrais » ou « j'aimerais » : poli, et pour maintenant. Pour commander, utilise <i>I'd like</i>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Un café, s'il vous plaît}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Tu veux du thé ?}}
<div class="tip">Erreurs fréquentes : <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ · <b>I like cook.</b> ✗ → <b>I like cooking.</b> ✓ · au café, <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Que mettre dans le trou ?",["sings","sing","singing","to sing"],1,"Après \"can\", le verbe reste à la base verbale."],["Comment dit-on « J'aime cuisiner » ?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Après \"like\", la forme en -ing."],["Au café, quelle est la façon la plus naturelle de commander ?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Ce que tu veux maintenant se demande avec \"I'd like\"."]],
practice:[
["mc","He can ___ English. Que mettre dans le trou ?","speak","speaks","speaking","to speak","Après \"can\", la base verbale, sans -s."],
["mc","Comment dit-on « J'aime la pizza » ?","I like pizza.","Pizza likes me.","Me like pizza.","I'm like pizza.","Comme avec « aimer », la personne qui aime vient d'abord : \"I like\"."],
["mc","Comment dit-on « J'aime les chiens » ?","I like dogs.","I likes dogs.","Like me dogs.","Me like dogs.","\"I like dogs\" : avec \"I\", le verbe ne prend pas de -s."],
["mc","Pour commander au café, « Un café, s'il vous plaît » se dit :","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Ce que tu veux maintenant se demande avec \"I'd like\"."],
["mc","Comment dit-on « Je ne sais pas conduire » ?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can\" n'utilise pas \"do\" : la négation est \"can't\"."],
["or","Tu sais nager ?","Can you swim","swimming","Dans la question, l'auxiliaire \"can\" passe devant le sujet."],
["or","Elle aime danser","She likes dancing","like","Avec \"she\", \"likes\" prend un -s (troisième personne), puis la forme en -ing."],
["or","J'aime lire des livres","I like reading books","read","Après \"like\", la forme en -ing : \"reading\"."],
["fi","I can't __.","Je ne sais pas nager","swim","swimming|swims|to swim","Après \"can't\", la base verbale."],
["fi","I like __ music.","J'aime écouter de la musique","listening to","listen to|listen|to listening","Après \"like\", la forme en -ing ; et « écouter » se dit \"listen to\"."],
["fi","__ like a sandwich, please.","Un sandwich, s'il vous plaît","I'd|I would","I|I'm|I can","Pour commander : \"I'd like\"."],
["ty","J'aime cuisiner","I like cooking|I love cooking|I like to cook","like · cook — forme en -ing","cook","Après \"like\", la forme en -ing (ou \"to\" + base verbale)."],
["ty","Tu peux venir demain ?","Can you come tomorrow","can · come · tomorrow — question avec can","coming","Dans la question, l'auxiliaire \"can\" passe devant \"you\"."],
["ty","Il aime les chats ?","Does he like cats","does · like · cat — au pluriel","likes","La question prend l'auxiliaire \"Does\", et \"like\" reste à la base verbale."]]},

{ id:"continuous", title:"Ce qui se passe maintenant : be + -ing", blurb:"En français, « Qu'est-ce que tu fais ? » sert pour tout. En anglais, ce qui se passe en ce moment se dit avec be + -ing.", deck:"Conversation informelle", body:`
<p>Le français n'a qu'un présent : « je travaille » veut dire <i>I work</i> (d'habitude) ou <i>I'm working</i> (en ce moment). « Être en train de » existe, mais on s'en sert peu. En anglais, ce qui se passe <b>en ce moment</b> se dit obligatoirement avec <b>be + verbe en -ing</b> : c'est le présent en <i>be</i> + -ing.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Je suis en train de travailler}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Elle prépare le dîner}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Il pleut}}
<h3>Questions et négations</h3>
<p>Comme toujours avec <i>be</i> : pour la question, <i>am / is / are</i> passe devant le sujet ; pour la négation, <i>not</i> se place après.</p>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Qu'est-ce que tu fais ? (en ce moment)}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Tu m'écoutes ?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Je ne dors pas}}
<h3>Comparé au présent simple</h3>
<div class="tbl"><table><tr><th>D'habitude (présent simple)</th><th>En ce moment (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Attention : <i>What do you do?</i>, c'est « Qu'est-ce que tu fais dans la vie ? » ; <i>What are you doing?</i>, c'est « Qu'est-ce que tu fais, là, maintenant ? ».</p>
<h3>Les verbes qui ne prennent pas -ing</h3>
<p><i>like, know, want, need, have</i> (posséder) expriment un <b>état</b> : ils restent au présent simple, même quand tu parles de maintenant.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Je le connais}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Je veux de l'eau}}
<div class="tip">Erreurs fréquentes : <b>What do you do now?</b> ✗ → <b>What are you doing?</b> ✓ · <b>I working.</b> ✗ → <b>I'm working.</b> ✓ · <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["Comment dit-on « Qu'est-ce que tu es en train de faire ? » ?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Ce qui se passe maintenant se demande avec \"be\" + -ing."],["I ___ coffee every morning. Que mettre dans le trou ?",["am drinking","drinking","drink","am drink"],2,"Une habitude de tous les jours : présent simple."],["Laquelle de ces phrases est correcte ?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" et \"have\" (posséder) ne se mettent pas à la forme en -ing."]],
practice:[
["mc","Comment dit-on « Je travaille en ce moment » ?","I'm working now.","I work now am.","I'm work now.","I working now.","Ce qui se passe maintenant : \"be\" + forme en -ing ; n'oublie pas \"am\"."],
["mc","Comment dit-on « Elle est en train de préparer le dîner » ?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","\"Be\" + -ing, et les repas se disent sans article."],
["mc","Quelle phrase décrit une chose que tu fais tous les jours ?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Les habitudes se disent au présent simple."],
["mc","Ton ami t'appelle et tu lui demandes « Qu'est-ce que tu fais ? ». Que dis-tu ?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Ce qui se passe maintenant : mot interrogatif + \"are\" + \"you\" + -ing."],
["mc","Comment dit-on « Je le connais » ?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" est un verbe d'état : pas de forme en -ing."],
["or","Qu'est-ce que tu fais ? (en ce moment)","What are you doing","do","Pour ce qui se passe maintenant : mot interrogatif + auxiliaire \"are\" + sujet + -ing."],
["or","Les enfants sont en train de jouer","The kids are playing","is","\"Kids\" est au pluriel : \"are\" (accord)."],
["or","Je suis en train de lire un livre","I'm reading a book","read","Ce qui se passe maintenant : \"be\" + forme en -ing."],
["fi","I'm __ TV.","Je regarde la télé","watching","watch|watches|to watch","Après \"be\", la forme en -ing."],
["fi","What __ you doing?","Qu'est-ce que tu es en train de faire ?","are","do|is|does","Avec \"you\", l'auxiliaire est \"are\"."],
["fi","She __ working today.","Aujourd'hui, elle ne travaille pas","isn't|is not","doesn't|don't|not","La négation de \"be\" + -ing : \"isn't\"."],
["ty","Je suis en train de cuisiner","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — forme en -ing","cook","Ce qui se passe maintenant : \"be\" + forme en -ing."],
["ty","Il pleut ?","Is it raining","is · it · rain — forme en -ing","rains","Dans la question, l'auxiliaire \"is\" passe devant \"it\"."],
["ty","Elle est en train de travailler aujourd'hui","She is working today","she · work · today — forme en -ing","works","Avec \"she\", l'auxiliaire est \"is\" (accord), puis la forme en -ing."]]},

{ id:"past", title:"Prétérit : was / were, -ed et did", blurb:"Le prétérit ne change pas avec la personne. Les difficultés : la prononciation de -ed et l'auxiliaire did.", deck:"Conversation informelle", body:`
<p>Le prétérit anglais se traduit le plus souvent par un passé composé (« j'ai travaillé »), parfois par un imparfait (« j'étais fatigué »). Bonne nouvelle : il <b>ne change pas avec la personne</b> (<i>I worked, she worked, they worked</i>). Les difficultés sont ailleurs : la prononciation de <b>-ed</b> et l'auxiliaire <b>did</b>.</p>
<h3>was / were</h3>
<p><b>was</b> avec <i>I, he, she, it</i> ; <b>were</b> avec <i>you, we, they</i>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|J'étais fatiguée}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|C'était amusant}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Nous étions à la maison}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Tu étais occupé ?}}
<h3>-ed : trois sons</h3>
<p>Ne prononce pas -ed comme « èd » à chaque fois, et ne le rends pas muet comme une fin de mot française. Après un son sourd, il se prononce /t/ ; après un son sonore, /d/ ; c'est seulement après t ou d qu'on ajoute une syllabe : /ɪd/. <i>worked</i> n'a donc qu'une syllabe : /ˈwɜːrkt/.</p>
<div class="tbl"><table><tr><th>se prononce /t/</th><th>se prononce /d/</th><th>se prononce /ɪd/</th></tr><tr><td class="k">worked, watched, helped</td><td class="k">played, called, lived</td><td class="k">wanted, needed</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|J'ai travaillé hier}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Nous avons regardé un film}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Elle m'a appelé}}{{ex:I wanted coffee.|/aɪ ˈwɑːntɪd ˈkɔːfi/|Je voulais du café}}
<h3>Négations et questions : did</h3>
<p>Comme <i>do</i> au présent, le prétérit utilise l'auxiliaire <b>did</b>, et le verbe revient à sa base verbale : seul l'auxiliaire porte le passé. <i>Did you call?</i>, jamais <i>Did you called?</i> ; <i>I didn't understand</i>, jamais <i>I didn't understood</i>.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Je n'ai pas travaillé hier}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Tu m'as appelé ?}}
<div class="tip">Erreurs fréquentes : <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ · <b>You called me?</b> ✗ → <b>Did you call me?</b> ✓ · <b>wor-ked</b> en deux syllabes ✗ → <b>worked</b> en une syllabe ✓</div>`,
check:[["They ___ at home yesterday. Que mettre dans le trou ?",["was","were","did","are"],1,"Avec \"they\", le prétérit de \"be\" est \"were\"."],["Comment dit-on « Je n'ai pas travaillé hier » ?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Après \"didn't\", le verbe reste à la base verbale."],["Did you ___ the movie? Que mettre dans le trou ?",["watch","watched","watching","watches"],0,"Après \"Did\", le verbe reste à la base verbale."]],
practice:[
["mc","I ___ tired yesterday. Que mettre dans le trou ?","was","were","did","am","Avec \"I\", le prétérit de \"be\" est \"was\"."],
["mc","Comment dit-on « Tu as appelé hier ? » ?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Avec \"did\", le verbe revient à la base verbale."],
["mc","Dans quel verbe le -ed se prononce-t-il comme une syllabe de plus ?","wanted","worked","played","watched","Le -ed forme une syllabe à part seulement après t ou d : \"wanted\"."],
["mc","Comment dit-on « C'était amusant » ?","It was fun.","Was fun.","It were fun.","It did fun.","« C'était » : \"it\" + \"was\", jamais \"were\", et on ne supprime pas \"it\"."],
["mc","Comment dit-on « Tu étais occupé ? » ?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" est un état : la question se pose avec \"be\" (were)."],
["or","Tu m'as appelé ?","Did you call me","called","La question au prétérit prend l'auxiliaire \"Did\" et la base verbale."],
["or","Nous étions à la maison","We were at home","was","Avec \"we\", le prétérit de \"be\" est \"were\" (accord)."],
["or","Je n'ai pas travaillé hier","I didn't work yesterday","worked","Après l'auxiliaire \"didn't\", le verbe reste à la base verbale."],
["fi","We __ at home last night.","Hier soir, nous étions à la maison","were","was|did|are","Avec \"we\", le prétérit de \"be\" est \"were\"."],
["fi","I __ soccer yesterday.","Hier, j'ai joué au foot","played","play|playing|was play","Prétérit régulier : \"play\" + -ed."],
["fi","__ you work yesterday?","Tu as travaillé hier ?","Did","Were|Do|Was","Question au prétérit avec un verbe lexical : \"Did\"."],
["ty","C'était amusant","It was fun","it · fun — au prétérit","were","« C'était » se dit avec le sujet \"it\" + \"was\", jamais \"were\"."],
["ty","Tu as travaillé hier ?","Did you work yesterday","did · work · yesterday — à la base verbale","worked","La question au prétérit prend l'auxiliaire \"Did\" ; le verbe reste à la base verbale."],
["ty","J'ai regardé un film","I watched a movie|I saw a movie","watched · movie — prétérit en -ed","watch","Prétérit régulier : \"watch\" + -ed, et ici le -ed se prononce comme un « t »."]]},

{ id:"irregular-past", title:"Prétérit irrégulier : went, ate, saw", blurb:"Les verbes les plus courants ne prennent pas -ed. Apprends d'abord ces douze-là.", deck:"Conversation informelle", body:`
<p>Comme en français (« je suis allé », « j'ai vu », « j'ai pris »), les verbes les plus courants sont <b>irréguliers</b>. Pas de règle : apprends-les par paires, comme les listes de verbes irréguliers du collège.</p>
<div class="tbl"><table><tr><th>Base verbale</th><th>Prétérit</th><th>Base verbale</th><th>Prétérit</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to London.|/aɪ ˈwent tə ˈlʌndən/|Je suis allé à Londres}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Nous avons mangé une pizza}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|J'ai vu un film}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|J'ai retrouvé mes amis}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|J'ai acheté un livre}}
<h3>Dans les questions et les négations : base verbale</h3>
<p>L'auxiliaire <b>did</b> marque déjà le passé, donc le verbe revient à sa base verbale. C'est l'erreur la plus fréquente : <i>Did you went?</i>.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Qu'est-ce que tu as fait ?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Où es-tu allée ?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Je n'y suis pas allé}}
<div class="tip">Erreurs fréquentes : <b>I goed.</b> ✗ → <b>I went.</b> ✓ · <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ · <b>Where you went?</b> ✗ → <b>Where did you go?</b> ✓</div>`,
check:[["Quel est le prétérit de \"go\" ?",["goed","gone","went","going"],2,"Le prétérit de \"go\" est \"went\"."],["Comment dit-on « Qu'est-ce que tu as fait ? » ?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Après \"did\", la base verbale \"do\"."],["I didn't ___ breakfast. Que mettre dans le trou ?",["ate","eaten","eats","eat"],3,"Après \"didn't\", le verbe reste à la base verbale."]],
practice:[
["mc","Quel est le prétérit de \"eat\" ?","ate","eated","eat","eaten","Le prétérit de \"eat\" est \"ate\"."],
["mc","Comment dit-on « Où es-tu allé ? » ?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Après \"did\", le verbe reste à la base verbale."],
["mc","Comment dit-on « J'ai acheté un livre » ?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Le prétérit de \"buy\" est \"bought\"."],
["mc","Quel est le prétérit de \"see\" ?","saw","seed","seen","sawed","Le prétérit de \"see\" est \"saw\"."],
["mc","Comment dit-on « Je n'y suis pas allé » ?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Après \"didn't\", le verbe reste à la base verbale."],
["or","Où es-tu allé ?","Where did you go","went","Question au prétérit : \"Where\" + auxiliaire \"did\" + base verbale \"go\"."],
["or","Qu'est-ce que tu as mangé ?","What did you eat","ate","Avec l'auxiliaire \"did\", le verbe reste à la base verbale : \"eat\", pas \"ate\"."],
["or","J'ai vu un film","I saw a movie","see","Le prétérit de \"see\" est \"saw\"."],
["fi","I __ to Mexico last year.","L'année dernière, je suis allé au Mexique","went","go|goed|gone","Le prétérit de \"go\" est \"went\"."],
["fi","What did you __?","Qu'est-ce que tu as mangé ?","eat","ate|eaten|eating","Après \"did\", le verbe reste à la base verbale."],
["fi","She __ a new phone.","Elle s'est acheté un nouveau portable","bought","buyed|buy|buys","Le prétérit de \"buy\" est \"bought\"."],
["ty","Je suis allé à Buenos Aires","I went to Buenos Aires","went · to · Buenos Aires — au prétérit","go","Le prétérit de \"go\" est \"went\"."],
["ty","Qu'est-ce que tu as fait ?","What did you do","what · did · do — à la base verbale","done","Avec l'auxiliaire \"did\", le verbe revient à la base verbale : \"do\"."],
["ty","Je n'y suis pas allé (sans \"there\")","I didn't go","didn't · go — à la base verbale","went","Après l'auxiliaire \"didn't\", on dit \"go\", pas \"went\"."]]},

{ id:"the", title:"the : là où le français met « le » et l'anglais rien", blurb:"La vie, les chiens, les cheveux : en anglais, life, dogs et my hair. Petit rappel sur a et the.", deck:"Itinéraires et transports", body:`
<p>Le français et l'anglais se ressemblent pour l'essentiel : la première fois, <i>a</i> (un, une) ; ensuite, <i>the</i> (le, la). Ça, tu le fais déjà bien. Les problèmes viennent des cas où le français met <i>le / la / les</i> et l'anglais rien du tout.</p>
<h3>Rappel : a d'abord, the ensuite</h3>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|J'ai acheté une chemise. La chemise est bleue}}{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Tu peux ouvrir la fenêtre ?}}
<h3>En général : pas de the</h3>
<p>« La vie est dure », « J'adore les chiens », « Le café est cher » : en français, l'article est obligatoire. En anglais, quand tu parles de quelque chose <b>en général</b>, il n'y a <b>pas d'article</b> (l'article zéro, Ø).</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vie est dure}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|J'adore les chiens}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Le café est cher ici}}
<h3>Le corps : un possessif, pas the</h3>
<p>Là où le français dit « je me suis lavé <b>les</b> cheveux », l'anglais utilise l'adjectif possessif : <i>my hair</i>.</p>
{{ex:I washed my hair.|/aɪ ˈwɑːʃt maɪ ˈher/|Je me suis lavé les cheveux}}{{ex:She broke her leg.|/ʃi ˈbroʊk hər ˈleg/|Elle s'est cassé la jambe}}{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|J'ai mal à la tête}}
<h3>Les pays : France, mais the United States</h3>
<p>« La France », « l'Espagne » : en anglais, les noms de pays n'ont pas d'article (<i>France</i>, <i>Spain</i>), sauf ceux qui contiennent un mot comme <i>States</i> ou <i>Kingdom</i> : <i>the United States</i>, <i>the UK</i>.</p>
<h3>Sans article : maison, travail, bus</h3>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Je vais au travail en bus}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Je suis à la maison}}
<div class="tip">Erreurs fréquentes : <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ · <b>I washed the hair.</b> ✗ → <b>I washed my hair.</b> ✓ · <b>I live in the France.</b> ✗ → <b>I live in France.</b> ✓ · <b>I go to the work.</b> ✗ → <b>I go to work.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. Que mettre dans le trou ?",["A","An","The","(pas d'article)"],2,"Le chat est déjà mentionné : \"the\"."],["I go to ___ work by bus. Que mettre dans le trou ?",["a","the","an","(pas d'article)"],3,"\"Go to work\" se dit sans article."],["Comment dit-on « Je me suis lavé les cheveux » ?",["I washed the hair.","I washed my hair.","I washed hair.","I washed a hair."],1,"Avec les parties du corps, l'anglais utilise un possessif : \"my hair\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Que mettre dans le trou ?","The","A","An","Some","La chemise est déjà mentionnée : \"the\"."],
["mc","Comment dit-on « La vie est belle » ?","Life is beautiful.","The life is beautiful.","A life is beautiful.","The life are beautiful.","Pour parler de quelque chose en général : pas d'article."],
["mc","Comment dit-on « Elle s'est cassé la jambe » ?","She broke her leg.","She broke the leg.","She broke a leg.","She broke leg.","Avec les parties du corps, l'anglais utilise un possessif : \"her leg\"."],
["mc","Quelle phrase est correcte ?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" et \"by bus\" se disent sans article."],
["mc","Comment dit-on « J'adore les chiens » ?","I love dogs.","I love the dogs.","I love a dogs.","The dogs I love.","En général : pluriel sans \"the\", \"I love dogs\"."],
["or","Tu peux ouvrir la fenêtre ?","Can you open the window","a","Dans la question, l'auxiliaire \"can\" passe devant \"you\" ; \"the\", car on sait de quelle fenêtre il s'agit."],
["or","J'ai mal à la tête","My head hurts","The hurt","On dit \"my head\", pas \"the head\" ; et \"hurts\" prend le -s de la troisième personne."],
["or","La vie est dure","Life is hard","The","Avec un nom abstrait pris en général, pas de \"the\" : \"Life is hard\"."],
["fi","I saw a movie. __ movie was great.","J'ai vu un film. Le film était génial","The","A|An|Some","Le film est déjà mentionné : \"the\"."],
["fi","I brushed __ teeth.","Je me suis brossé les dents","my","the|a|some","Avec les parties du corps, on utilise un possessif : \"my teeth\"."],
["fi","I'm at __.","Je suis à la maison","home","the home|a home|house","\"At home\" se dit sans article."],
["ty","Je me suis lavé les cheveux","I washed my hair","washed · hair — avec un possessif","the","Avec les parties du corps, l'anglais utilise un possessif : \"my hair\"."],
["ty","Où est la station ?","Where is the station|Where's the station","where · station — avec the","a","Avec \"be\", \"is\" passe devant le sujet ; \"the\", car c'est la station d'ici."],
["ty","Le lait, c'est bon pour toi","Milk is good for you","milk · good — sans article","The","En général, \"milk\" se dit sans article ; indénombrable et singulier : \"is\" (accord)."]]},

{ id:"adjectives", title:"Adjectifs et comparaisons : big houses, cheaper, the best", blurb:"L'adjectif se place devant le nom et ne change jamais. Pour comparer : -er ou more, et than.", deck:"Achats et paiements", body:`
<p>En français, l'adjectif se place souvent <b>après</b> le nom et s'accorde : « des voitures rouges ». En anglais, il se place <b>avant</b> le nom et <b>ne change jamais</b> : <i>red cars</i>, <i>big houses</i>.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|un grand sac}}{{ex:red cars|/ˈred ˈkɑːrz/|des voitures rouges}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Ce sac est grand}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|C'est trop petit}}
<h3>Comparer : -er ou more, et than</h3>
<p>Mots courts : <b>-er</b>. Mots longs : <b>more</b>. Jamais les deux ensemble (<i>more cheaper</i>), et jamais <i>more big</i> pour « plus grand ». Et le « que » d'une comparaison se dit <b>than</b>, pas <i>that</i> : « plus cher que » → <i>more expensive than</i>.</p>
<div class="tbl"><table><tr><th>Normal</th><th>Plus…</th><th>Le plus…</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Celui-ci est moins cher}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Il est plus cher que celui-là}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Vous avez une taille plus grande ?}}
<h3>Superlatif : avec the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|C'est le meilleur restaurant du coin}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Lequel est le moins cher ?}}
<div class="tip">Erreurs fréquentes : <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>more cheaper</b> ✗ → <b>cheaper</b> ✓ · <b>bigger that</b> ✗ → <b>bigger than</b> ✓</div>`,
check:[["Quel est le comparatif de \"big\" ?",["more big","biger","bigger","most big"],2,"Mot court : -er. Dans \"big\" (consonne + voyelle + consonne), le g double : \"bigger\". Compare : \"cheap\" → \"cheaper\"."],["This is ___ expensive than that. Que mettre dans le trou ?",["more","most","much","very"],0,"Mot long : le comparatif se forme avec \"more\"."],["Quel est le superlatif de \"good\" ?",["the goodest","the most good","the better","the best"],3,"\"Good\" → \"better\" → \"the best\"."]],
practice:[
["mc","Quel est le comparatif de \"cheap\" ?","cheaper","more cheap","more cheaper","most cheap","Mots courts : -er. Jamais \"more\" + -er."],
["mc","Comment dit-on « C'est plus cher » ?","This is more expensive.","This is expensiver.","This is most expensive.","This is more expensiver.","Mots longs : \"more\" + adjectif."],
["mc","Comment dit-on « de grandes maisons » ?","big houses","bigs houses","houses big","houses bigs","L'adjectif se place devant le nom et ne prend jamais de -s."],
["mc","Comment dit-on « Il est moins cher que l'autre » ?","It's cheaper than the other one.","It's cheaper that the other one.","It's more cheap that the other one.","It's cheaper as the other one.","Le « que » d'une comparaison se dit \"than\", pas \"that\"."],
["mc","Comment dit-on « C'est le meilleur restaurant » ?","It's the best restaurant.","It's the most good restaurant.","It's the restaurant best.","It's best restaurant the.","\"Good\" → \"better\" → \"the best\", et l'adjectif se place devant le nom."],
["or","Vous avez une taille plus grande ?","Do you have a bigger size","Are","La question avec \"have\" prend l'auxiliaire \"Do\"."],
["or","Ces chaussures sont moins chères","These shoes are cheaper","is","\"Shoes\" est au pluriel : \"are\" (accord) ; l'adjectif, lui, ne change pas."],
["or","Celui-ci est moins cher que celui-là","This is cheaper than that","more","\"-er\" et \"more\" ne vont jamais ensemble."],
["fi","It's __ small.","C'est trop petit","too","much|more|most","« Trop » se dit \"too\"."],
["fi","This is cheaper __ that one.","Celui-ci est moins cher que celui-là","than","then|that|more","Le « que » d'une comparaison se dit \"than\"."],
["fi","It's the __ expensive one.","C'est le plus cher","most","more|much|very","Mot long : le superlatif est \"the most\"."],
["ty","Vous avez une taille plus petite ?","Do you have a smaller size","do · smaller · size — avec l'auxiliaire","Are","La question avec \"have\" prend l'auxiliaire \"Do\"."],
["ty","Celui-ci est le meilleur","This is the best|This one is the best","this · the best — avec the","a","Superlatif : \"the best\" ; avec \"this\", le verbe est \"is\" (accord)."],
["ty","J'ai une voiture rouge","I have a red car","red · car — adjectif avant le nom","reds","L'adjectif se place devant le nom : \"a red car\"."]]},

{ id:"going-to", title:"Projets : be going to", blurb:"Ça marche comme le futur proche « je vais + infinitif ». N'oublie pas be : I'm, she's, we're.", deck:"Conversation informelle", body:`
<p>Bonne nouvelle : <i>going to</i> fonctionne presque comme le futur proche. « Je vais voyager » = <i>I'm going to travel</i>. Retiens seulement que <b>be est obligatoire</b> et change avec le sujet (am / is / are) : « je vais » se dit <i>I'm going to</i>, jamais <i>I going to</i>.</p>
{{ex:I'm going to visit New York.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌnuː ˈjɔːrk/|Je vais visiter New York}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Elle va acheter une voiture}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Nous allons dîner}}
<h3>Négations et questions</h3>
<p>Comme avec tout <i>be</i> : <i>not</i> se place après, et pour la question, <i>be</i> passe devant le sujet. Pas de <i>do</i>.</p>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Je ne vais pas y aller}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Tu vas venir ?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Qu'est-ce que tu vas faire ce week-end ?}}
<h3>Prédire d'après ce que tu vois</h3>
<p>« Il va pleuvoir » : comme le « il » français, <i>it</i> sert de sujet.</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Il va pleuvoir}}
<h3>Expressions de temps</h3>
<p><i>tomorrow</i> (demain), <i>tonight</i> (ce soir), <i>this weekend</i> (ce week-end), <i>next week</i> (la semaine prochaine) se placent à la fin de la phrase.</p>
<div class="tip">À l'oral rapide, <i>going to</i> se prononce <b>gonna</b>. Et n'oublie pas <i>be</i> : <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Comment dit-on « Demain, je vais voir mon ami » ?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"\"Be\" + \"going to\" + base verbale."],["She ___ going to study. Que mettre dans le trou ?",["am","are","is","be"],2,"Avec \"she\", \"is\"."],["Comment dit-on « Qu'est-ce que tu vas faire ce week-end ? » ?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Mot interrogatif + \"be\" + sujet + \"going to\"."]],
practice:[
["mc","Comment dit-on « Je vais aller à Lima » ?","I'm going to go to Lima.","I going to go to Lima.","I'm going go to Lima.","I'm go to Lima going.","N'oublie pas \"am\" : \"be\" + \"going to\" + verbe."],
["mc","They ___ going to come. Que mettre dans le trou ?","are","is","am","be","Avec \"they\", \"are\"."],
["mc","Comment dit-on « Il va pleuvoir » ?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Après \"going to\", la base verbale ; et \"it\", comme le « il » de « il va pleuvoir »."],
["mc","Comment dit-on « Je ne vais pas y aller » ?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","La négation : \"not\" après \"be\", sans \"don't\"."],
["mc","Comment dit-on « Tu vas venir ? » ?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Pour la question, \"be\" passe devant \"you\"."],
["or","Tu vas venir ?","Are you going to come","Do","La question commence par l'auxiliaire \"Are\" : \"Are you going to…?\"."],
["or","Ils vont voyager","They are going to travel","is","Avec \"they\", l'auxiliaire est \"are\" (accord)."],
["or","Nous allons dîner","We're going to have dinner","a","Les repas se disent sans article : \"have dinner\"."],
["fi","I'm going __ study tonight.","Ce soir, je vais étudier","to","for|at|will","\"Going to\" + base verbale."],
["fi","__ you going to come?","Tu vas venir ?","Are","Do|Is|Will","Avec \"you\", \"Are\"."],
["fi","It's going to __ tomorrow.","Demain, il va pleuvoir","rain","rains|raining|rained","Après \"going to\", la base verbale."],
["ty","Il va pleuvoir","It's going to rain","it · going to · rain — avec un sujet","rains","Comme « il » dans « il va pleuvoir », le sujet \"it\" est obligatoire en anglais."],
["ty","Qu'est-ce que tu vas faire ?","What are you going to do","what · going to · do — avec are","will","Mot interrogatif + auxiliaire \"are\" + \"you\" + \"going to\"."],
["ty","Je vais regarder un film","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — à la base verbale","watching","\"Going to\" + base verbale."]]},

{ id:"joining", title:"Relier des phrases : and, but, or, so, because", blurb:"Deux phrases courtes en une seule. Et la différence entre because et because of.", deck:"Émotions et réactions", body:`
<p>Si tu ne fais que des phrases courtes, ton anglais paraît haché. Avec ces mots, tu relies tes idées et tu parles plus naturellement.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|J'aime le café et le thé}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Je suis fatigué mais content}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Café ou thé ?}}
<h3>so : donc, alors</h3>
<p>cause + <b>so</b> + conséquence, comme « donc » ou « alors ».</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|J'étais fatiguée, alors je suis rentrée}}
<h3>because et because of</h3>
<p><b>because</b> (parce que) se place devant une proposition avec un sujet et un verbe ; <b>because of</b> (à cause de) se place devant un nom. Comme après « parce que », il faut une phrase complète : <i>because it was raining</i>, « parce qu'il pleuvait ».</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Je suis rentré parce que j'étais fatigué}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Je suis restée à la maison parce qu'il pleuvait}}{{ex:I stayed home because of the rain.|/aɪ ˈsteɪd ˈhoʊm bɪkəz əv ðə ˈreɪn/|Je suis resté à la maison à cause de la pluie}}
<h3>too : aussi</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Moi aussi, j'aime bien}}
<div class="tip">N'utilise pas <i>because</i> et <i>so</i> dans la même phrase : <b>Because I was tired, so I went home.</b> ✗. Choisis l'un ou l'autre, comme tu ne dirais pas « Parce que j'étais fatigué, donc je suis rentré ».</div>`,
check:[["I was sick, ___ I stayed home. Que mettre dans le trou ?",["because","but","so","or"],2,"D'abord la cause, ensuite la conséquence : \"so\"."],["I stayed home ___ I was sick. Que mettre dans le trou ?",["because","so","but","and"],0,"D'abord la conséquence, ensuite la cause : \"because\"."],["Que dis-tu pour « Tu veux du café ou du thé ? » ?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Pour choisir entre deux choses : \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. Que mettre dans le trou ?","but","so","or","because","Deux idées opposées se relient avec \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. Que mettre dans le trou ?","so","because","but","or","D'abord la cause, ensuite la conséquence : \"so\"."],
["mc","I ate a sandwich ___ I was hungry. Que mettre dans le trou ?","because","so","but","or","D'abord la conséquence, ensuite la cause : \"because\"."],
["mc","I stayed home ___ the rain. Que mettre dans le trou ?","because of","because","so","but","Devant un nom (\"the rain\"), \"because of\" ; devant une proposition, \"because\"."],
["mc","Comment dit-on « Je suis fatiguée mais heureuse » ?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","« Mais » se dit \"but\"."],
["or","J'aime le thé, mais elle non","I like tea but she doesn't","don't","Avec \"she\", la négation est \"doesn't\" (troisième personne)."],
["or","Il travaille et elle étudie","He works and she studies","work","Avec \"he\" et \"she\", les deux verbes prennent un -s : troisième personne."],
["or","J'avais faim, alors j'ai mangé","I was hungry so I ate","because","D'abord la cause, puis \"so\" et la conséquence."],
["fi","I'm tired __ happy.","Je suis fatigué mais heureux","but","so|because|or","« Mais » se dit \"but\"."],
["fi","I stayed home __ it was raining.","Je suis resté à la maison parce qu'il pleuvait","because","so|but|or","D'abord la conséquence, ensuite la cause : \"because\"."],
["fi","Coffee __ tea?","Café ou thé ?","or","so|but|because","Pour choisir entre deux choses : \"or\"."],
["ty","Je suis fatigué mais heureux","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — avec but","so","« Mais » se dit \"but\"."],
["ty","Je suis restée à la maison parce qu'il pleuvait","I stayed home because it was raining|I stayed at home because it was raining|I stayed home because it rained|I stayed at home because it rained","stayed home · because · rain — avec un sujet","so","Après \"because\", il faut un sujet et un verbe : \"it was raining\", comme « il pleuvait »."],
["ty","Il n'est pas venu à cause de la pluie","He didn't come because of the rain","didn't · come · because of — la pluie","came","Négation au prétérit avec l'auxiliaire \"didn't\" ; \"because of\" se place devant un nom."]]},

{ id:"false-friends", title:"Faux amis : actually ne veut pas dire « actuellement »", blurb:"Des mots qui ressemblent au français mais veulent dire autre chose, et comment profiter des mots transparents, eux, fiables.", deck:"Faux amis", body:`
<p>Des milliers de mots anglais ressemblent au français et veulent dire la même chose : <i>hotel, important, family, possible</i>. Ce sont des <b>mots transparents</b>, et c'est un vrai avantage. Mais certains, très fréquents, sont des <b>faux amis</b> : ils se ressemblent, mais n'ont pas le même sens. Voici ceux qui posent le plus de problèmes.</p>
<h3>Les verbes</h3>
<p><i>attend</i> veut dire « assister à » (un cours, une réunion) ; « attendre » se dit <i>wait (for)</i>. <i>assist</i> veut dire « aider ». <i>demand</i> veut dire « exiger » : pour « demander », on dit <i>ask</i>. <i>rest</i> veut dire « se reposer » ; « rester », c'est <i>stay</i>. <i>pretend</i> veut dire « faire semblant », pas « prétendre ». Et « passer un examen » se dit <i>take an exam</i> : <i>pass an exam</i>, c'est le réussir.</p>
{{ex:I attend class every day.|/aɪ əˈtend ˈklæs ˈevri ˈdeɪ/|J'assiste au cours tous les jours}}{{ex:Can I ask you something?|/kən aɪ ˈæsk ju ˈsʌmθɪŋ/|Je peux te demander quelque chose ?}}{{ex:He's pretending to sleep.|/hiz prɪˈtendɪŋ tə ˈsliːp/|Il fait semblant de dormir}}
<h3>Adverbes et adjectifs</h3>
<p><i>actually</i> veut dire « en fait » ; « actuellement » se dit <i>currently</i>. <i>eventually</i> veut dire « finalement », pas « éventuellement » (<i>possibly</i>). <i>sensible</i> veut dire « raisonnable » ; « sensible » se dit <i>sensitive</i>. <i>sympathetic</i> veut dire « compatissant » : une personne « sympathique » est <i>nice</i>. <i>disappointed</i> veut dire « déçu », alors que <i>deceived</i> veut dire « trompé ». Et <i>large</i> veut dire « grand » ; « large » se dit <i>wide</i>.</p>
{{ex:Actually, I'm from France.|/ˈæktʃuəli aɪm frəm ˈfræns/|En fait, je viens de France}}{{ex:Currently, I work at home.|/ˈkɜːrəntli aɪ ˈwɜːrk ət ˈhoʊm/|Actuellement, je travaille chez moi}}{{ex:Eventually, she found a job.|/ɪˈventʃuəli ʃi ˈfaʊnd ə ˈdʒɑːb/|Finalement, elle a trouvé du travail}}{{ex:He's very sensible.|/hiz ˈveri ˈsensəbl/|Il est très raisonnable}}{{ex:She's very nice.|/ʃiz ˈveri ˈnaɪs/|Elle est très sympathique}}{{ex:I'm disappointed.|/aɪm ˌdɪsəˈpɔɪntɪd/|Je suis déçu}}
<h3>Lieux et objets</h3>
<p><i>library</i> veut dire « bibliothèque » ; « librairie » se dit <i>bookstore</i>. <i>college</i>, c'est l'université ; « le collège » se dit <i>middle school</i>. Un <i>coin</i> est une pièce de monnaie ; « un coin » se dit <i>corner</i>. Une <i>lecture</i> est un cours magistral ou une conférence ; « une lecture » se dit <i>reading</i>. Et un <i>journey</i> est un voyage ou un trajet, pas une « journée » (<i>day</i>).</p>
{{ex:The library is free.|/ðə ˈlaɪbreri ɪz ˈfriː/|La bibliothèque est gratuite}}{{ex:Is there a bookstore near here?|/ɪz ðer ə ˈbʊkstɔːr nɪr ˈhɪr/|Il y a une librairie près d'ici ?}}{{ex:I found a coin.|/aɪ ˈfaʊnd ə ˈkɔɪn/|J'ai trouvé une pièce}}
<h3>À moitié faux</h3>
<p>Certains ne sont faux qu'en partie. <i>parents</i>, ce sont le père et la mère ; les autres membres de la famille sont des <i>relatives</i>. <i>discuss</i> veut dire « discuter de » un problème, pas « discuter » au sens de bavarder (<i>chat</i>), et on ne dit jamais <i>discuss about</i>. <i>realize</i> veut dire « se rendre compte » ; « réaliser » un projet se dit plutôt <i>carry out</i>.</p>
{{ex:My parents live here.|/maɪ ˈperənts ˈlɪv ˈhɪr/|Mes parents habitent ici}}{{ex:I didn't realize.|/aɪ ˈdɪdnt ˈriːəlaɪz/|Je ne m'en suis pas rendu compte}}
<h3>Les faux anglicismes</h3>
<p>Méfie-toi aussi des mots « anglais » du français qu'un anglophone ne connaît pas : un <i>parking</i> se dit <i>parking lot</i>, un <i>smoking</i> se dit <i>tuxedo</i>, le <i>footing</i> se dit <i>jogging</i>, et des <i>baskets</i>, des <i>sneakers</i>.</p>
<h3>Les mots transparents qui t'aident</h3>
<p>Ces terminaisons fonctionnent presque toujours. Fais seulement attention à l'accent tonique (la syllabe qu'on prononce plus fort) : en anglais, il tombe rarement sur la dernière syllabe. <i>comfortable</i> se prononce /ˈkʌmftərbl/, avec l'accent au début, et s'écrit avec un <i>m</i>, contrairement à « confortable ».</p>
<div class="tbl"><table><tr><th>Anglais</th><th>Français</th><th>Exemple</th></tr><tr><td class="k">-tion</td><td>-tion</td><td class="k">information</td></tr><tr><td class="k">-ty</td><td>-té</td><td class="k">city</td></tr><tr><td class="k">-ous</td><td>-eux</td><td class="k">famous</td></tr><tr><td class="k">-ly</td><td>-ment</td><td class="k">really</td></tr></table></div>
<div class="tip">Pour retenir : <b>actually</b> = en fait · <b>library</b> = bibliothèque (librairie = <b>bookstore</b>) · <b>attend</b> = assister à (attendre = <b>wait</b>) · <b>demand</b> = exiger (demander = <b>ask</b>) · <b>disappointed</b> = déçu</div>`,
check:[["Que veut dire \"I'm disappointed\" ?",["Je suis trompé","Je suis déçu / déçue","Je suis désolé / désolée","Je suis fatigué / fatiguée"],1,"\"Disappointed\" = déçu ; \"deceived\" veut dire « trompé »."],["Comment dit-on « Actuellement, j'habite à Paris » ?",["Actually, I live in Paris.","Actual, I live in Paris.","Currently, I live in Paris.","In actual, I live in Paris."],2,"« Actuellement » se dit \"currently\" ; \"actually\" veut dire « en fait »."],["« La librairie ouvre à neuf heures » en anglais, c'est :",["The bookstore opens at nine.","The library opens at nine.","The bookcase opens at nine.","The librarian opens at nine."],0,"« Librairie » se dit \"bookstore\" ; \"library\" veut dire « bibliothèque »."]],
practice:[
["mc","Que veut dire \"actually\" ?","en fait","actuellement","activement","parfois","\"Actually\" = en fait ; « actuellement » se dit \"currently\"."],
["mc","Comment dit-on « Je peux te demander quelque chose ? » ?","Can I ask you something?","Can I demand you something?","Can I demand something?","Can I ask to you something?","« Demander » se dit \"ask\", sans \"to\" ; \"demand\" veut dire « exiger »."],
["mc","Comment dit-on « J'assiste au cours le lundi » ?","I attend class on Mondays.","I assist class on Mondays.","I assist to class on Mondays.","I attend to class on Mondays.","« Assister à » un cours se dit \"attend\" ; \"assist\" veut dire « aider »."],
["mc","Que veut dire \"He's very sensible\" ?","Il est très raisonnable.","Il est très sensible.","Il est très sentimental.","Il est très sympathique.","\"Sensible\" = raisonnable ; « sensible » se dit \"sensitive\"."],
["mc","Comment dit-on « Elle est très sympathique » ?","She's very nice.","She's very sympathetic.","She's very sensible.","She's very simple.","« Sympathique » se dit \"nice\" ; \"sympathetic\" veut dire « compatissant »."],
["or","Où est la librairie ?","Where is the bookstore","library","Dans la question, \"is\" passe devant le sujet (\"the bookstore\"). « Librairie » se dit \"bookstore\" ; \"library\", c'est la bibliothèque."],
["or","Elle travaille à la bibliothèque","She works at the library","work","Avec \"she\", \"works\" prend un -s (troisième personne). Bibliothèque = \"library\"."],
["or","Tu t'en es rendu compte ?","Did you realize","realized","Question au prétérit : auxiliaire \"Did\" + base verbale \"realize\" (se rendre compte)."],
["fi","__, I'm from France.","En fait, je viens de France","Actually","Currently|Actual|Now","« En fait » se dit \"actually\"."],
["fi","I bought it at the __.","Je l'ai acheté à la librairie","bookstore","library|bookcase|book","« Librairie » se dit \"bookstore\" ; \"library\", c'est la bibliothèque."],
["fi","I found a __ in my pocket.","J'ai trouvé une pièce dans ma poche","coin","corner|piece|room","Une pièce de monnaie, c'est \"a coin\" ; « un coin » se dit \"corner\", et \"piece\" veut dire « morceau »."],
["ty","Elle est déçue","She is disappointed|She's disappointed|She feels disappointed","she · disappointed — pas \"deceived\"","deceived","Avec \"she\", \"be\" devient \"is\" (troisième personne) ; « déçu » se dit \"disappointed\", et \"deceived\" veut dire « trompé »."],
["ty","Il ne s'en est pas rendu compte (sans \"it\")","He didn't realize|He did not realize|He didn't notice|He did not notice","didn't · realize — à la base verbale","realized","Négation au prétérit avec l'auxiliaire \"didn't\" ; \"realize\" = se rendre compte."],
["ty","Elle assiste au cours","She attends class|She attends classes|She attends her classes|She goes to class|She goes to classes","attend · class — avec she","assists","Avec \"she\", \"attends\" prend un -s (troisième personne) ; « assister à » se dit \"attend\", et « attendre », \"wait\"."]]},
];
