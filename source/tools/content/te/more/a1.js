/* te-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it, there: కర్త స్థానం ఖాళీగా ఉండకూడదు", blurb:"వాతావరణం, సమయానికి it. ఒక చోట ఏదైనా ఉందని చెప్పడానికి there is / there are.", deck:"సరదా కబుర్లు", body:`
<p>తెలుగులో "చల్లగా ఉంది", "లేట్ అయింది" లాంటి వాక్యాల్లో కర్త (subject) ఉండదు. ఇంగ్లీష్‌లో కర్త స్థానం ఖాళీగా ఉండకూడదు. అందుకే ప్రత్యేక అర్థం లేని <b>it</b>, <b>there</b> ఆ స్థానంలో వస్తాయి.</p>
<h3>వాతావరణం, సమయం: It</h3>
<p>ఇక్కడ it అంటే "అది" కాదు. కర్త స్థానాన్ని నింపడానికి మాత్రమే వస్తుంది.</p>
{{ex:It's cold today.|ఇట్స్ కోల్డ్ టˈడే|ఈరోజు చలిగా ఉంది}}{{ex:It's three o'clock.|ఇట్స్ థ఼్రీ అˈక్లాక్|మూడు గంటలైంది}}{{ex:It's raining.|ఇట్స్ ˈరేనిఙ్|వర్షం పడుతోంది}}
<h3>ఒక చోట ఏదైనా ఉంటే: There is / There are</h3>
<p>తెలుగులో "దగ్గర్లో ఒక కేఫ్ ఉంది" అని "ఉంది" చివర వస్తుంది. ఇంగ్లీష్‌లో వాక్యం <b>There</b> తో మొదలవుతుంది: ఒకటి ఉంటే <b>There is a …</b>, ఎక్కువ ఉంటే <b>There are … -s</b>. మాట్లాడేటప్పుడు There's అంటారు.</p>
{{ex:There's a cafe near here.|ద఼ెర్జ఼్ అ క్యాˈఫే నిర్ హిర్|ఇక్కడ దగ్గర్లో ఒక కేఫ్ ఉంది}}{{ex:There are two rooms.|ద఼ెర్ అర్ టూ రూమ్జ఼్|రెండు గదులు ఉన్నాయి}}
<h3>ప్రశ్న, వ్యతిరేక వాక్యం</h3>
{{ex:Is there a bathroom here?|ఇజ఼్ ద఼ెర్ అ ˈబ్యాథ఼్రూమ్ హిర్|ఇక్కడ బాత్‌రూమ్ ఉందా?}}{{ex:Are there any seats?|అర్ ద఼ెర్ ˈఎని సీట్స్|సీట్లు ఉన్నాయా?}}{{ex:There isn't a bus today.|ద఼ెర్ ˈఇజ఼ంట్ అ బస్ టˈడే|ఈరోజు బస్సు లేదు}}
<h3>have తో తేడా</h3>
<p>మనిషి దగ్గర ఉన్నదానికి <b>have</b>, ఒక చోట ఉన్నదానికి <b>there is</b>.</p>
{{ex:I have a car.|ఐ హ్యావ఼్ అ కార్|నాకు కారు ఉంది}}{{ex:There's a car outside.|ద఼ెర్జ఼్ అ కార్ ఔట్ˈసైడ్|బయట ఒక కారు ఉంది}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / తెలుగు వరుసలో చెప్పిన <b>Near here one cafe is there.</b> ✗ → <b>There's a cafe near here.</b> ✓</div>`,
check:[["\"ఈరోజు వేడిగా ఉంది\" ఇంగ్లీష్‌లో?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"వాతావరణం చెప్పేటప్పుడు కర్త స్థానంలో it వస్తుంది."],["There ___ three people. ఖాళీలో ఏది సరిపోతుంది?",["is","are","have","be"],1,"ఒకరి కంటే ఎక్కువ మంది ఉంటే there are."],["\"ఇక్కడ బాత్‌రూమ్ ఉందా?\" ఇంగ్లీష్‌లో?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"ఉందా అని అడగడానికి Is there a …? వాడతారు."]],
practice:[
["mc","\"వర్షం పడుతోంది\" ఇంగ్లీష్‌లో?","It's raining.","Is raining.","There is raining.","Rain is.","వాతావరణం చెప్పేటప్పుడు కర్త it."],
["mc","\"ఇక్కడ దగ్గర్లో ఒక కేఫ్ ఉంది\" ఇంగ్లీష్‌లో?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","ఒక చోట ఉన్నదానికి there is. ఒకటే కాబట్టి ఆర్టికల్ a."],
["mc","There ___ two rooms. ఖాళీలో ఏది సరిపోతుంది?","are","is","have","has","rooms బహువచనం కాబట్టి are."],
["mc","\"మూడు గంటలైంది\" ఇంగ్లీష్‌లో?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","సమయం కూడా it తో మొదలవుతుంది."],
["mc","\"నాకు కారు ఉంది\" ఇంగ్లీష్‌లో?","I have a car.","There is a car me.","I am a car.","It's a car me.","మనిషి దగ్గర ఉన్నదానికి have. ఆ మనిషే కర్త."],
["or","ఈరోజు చలిగా ఉంది","It's cold today","There's","వాతావరణం చెప్పేటప్పుడు కర్త it."],
["or","బయట ఒక కారు ఉంది","There's a car outside","cars","ఒకటే కాబట్టి ఆర్టికల్ a, ఏకవచనం car."],
["or","రెండు సీట్లు ఉన్నాయి","There are two seats","seat is","రెండు కాబట్టి are, బహువచనం seats."],
["fi","__ cold today.","ఈరోజు చలిగా ఉంది","It's|It is","Is|There's|This","కర్త స్థానంలో it వస్తుంది."],
["fi","There __ a bank near here.","దగ్గర్లో ఒక బ్యాంకు ఉంది","is","are|have|be","ఒకటే కాబట్టి is."],
["fi","__ there any seats?","సీట్లు ఉన్నాయా?","Are","Is|Do|Have","seats బహువచనం కాబట్టి Are."],
["ty","ఈరోజు వేడిగా ఉంది","It's hot today","it · hot · today: వాతావరణానికి it","There's","వాతావరణం it తో మొదలవుతుంది."],
["ty","ఇక్కడ బాత్‌రూమ్ ఉందా?","Is there a bathroom here|Is there a restroom here","is there · bathroom: ఆర్టికల్ మర్చిపోకండి","the","మొదటిసారి అడుగుతున్నాం, ఏదైనా ఒకటి: ఆర్టికల్ a."],
["ty","రెండు గదులు ఉన్నాయి","There are two rooms","there are · two · room: బహువచనం","room","రెండు కాబట్టి బహువచనం rooms."]]},

{ id:"plurals", title:"బహువచనం -s, this / these, my / your", blurb:"ఒకటి కంటే ఎక్కువ ఉంటే -s. this ఒక్కదానికి, these ఎక్కువ వాటికి.", deck:"షాపింగ్, చెల్లింపులు", body:`
<p>తెలుగులో కూడా సంఖ్య తర్వాత బహువచనం వస్తుంది: "రెండు పుస్తకాలు". ఇంగ్లీష్‌లో అదే పద్ధతి: <b>two books</b>. కాబట్టి ఈ భాగం సులభం. జాగ్రత్త పడాల్సింది ఇర్రెగ్యులర్ బహువచనాలు, this / these, ఇంకా <b>'s</b> దగ్గర.</p>
<h3>బహువచనం చేయడం</h3>
<div class="tbl"><table><tr><th>నియమం</th><th>ఉదాహరణ</th></tr><tr><td>చాలా పదాలకు -s</td><td class="k">book → books</td></tr><tr><td>s, x, ch, sh తర్వాత -es</td><td class="k">box → boxes</td></tr><tr><td>హల్లు + y → -ies</td><td class="k">city → cities</td></tr><tr><td>ఇర్రెగ్యులర్</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
<p>children, people ఇప్పటికే బహువచన రూపాలు: <b>childrens</b> ✗. -s పలికిన తర్వాత చివర అచ్చు చేర్చకండి.</p>
{{ex:two books|టూ బుక్స్|రెండు పుస్తకాలు}}{{ex:three boxes|థ఼్రీ ˈబాక్సిజ఼్|మూడు పెట్టెలు}}{{ex:I have two children.|ఐ హ్యావ఼్ టూ ˈచిల్డ్రన్|నాకు ఇద్దరు పిల్లలు ఉన్నారు}}
<h3>this / that ఒక్కదానికి, these / those ఎక్కువ వాటికి</h3>
<p>తెలుగులో "ఇది / ఇవి", "అది / అవి" లాగే.</p>
{{ex:This is my bag.|ద఼ిస్ ఇజ఼్ మై బ్యాగ్|ఇది నా బ్యాగ్}}{{ex:These are my keys.|ద఼ీజ఼్ అర్ మై కీజ఼్|ఇవి నా తాళంచెవులు}}{{ex:Those shoes are nice.|ద఼ోజ఼్ షూజ఼్ అర్ నైస్|ఆ బూట్లు బాగున్నాయి}}
<h3>my, your, his, her, our, their</h3>
<p>ఎవరిది అని చెప్పే పదాలు. ఇవి ఉంటే a, the రావు. పేరు తర్వాత <b>'s</b> తప్పనిసరి: తెలుగులో "రవి ఫోన్" అంటే చాలు, ఇంగ్లీష్‌లో <b>Ravi's phone</b>.</p>
{{ex:Is this your phone?|ఇజ఼్ ద఼ిస్ యుర్ ఫోన్|ఇది మీ ఫోనా?}}{{ex:Her brothers live in Vijayawada.|హర్ ˈబ్రద఼ర్జ఼్ లివ఼్ ఇన్ వ఼ిజయˈవాడ|ఆమె అన్నదమ్ములు విజయవాడలో ఉంటారు}}{{ex:This is Ravi's phone.|ద఼ిస్ ఇజ఼్ ˈరావ఼ిజ఼్ ఫోన్|ఇది రవి ఫోన్}}{{ex:one of my friends|వన్ అవ఼్ మై ఫ్రెండ్జ఼్|నా స్నేహితుల్లో ఒకరు}}
<div class="tip">సంఖ్య, many, these, those, one of తర్వాత నామవాచకం ఎప్పుడూ బహువచనంలో ఉంటుంది: <b>one of my friend</b> ✗ → <b>one of my friends</b> ✓, <b>two childrens</b> ✗ → <b>two children</b> ✓, <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. ఖాళీలో ఏది సరిపోతుంది?",["sister","sisters","a sister","sister's"],1,"ఇద్దరు కాబట్టి బహువచనం sisters."],["___ are my keys. ఖాళీలో ఏది సరిపోతుంది?",["This","That","These","It"],2,"keys బహువచనం కాబట్టి These."],["\"ఇది నా బ్యాగ్\" ఇంగ్లీష్‌లో?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my ఉంటే ఆర్టికల్ రాదు."]],
practice:[
["mc","\"రెండు పుస్తకాలు\" ఇంగ్లీష్‌లో?","two books","two book","two a book","twos book","ఒకటి కంటే ఎక్కువ ఉంటే బహువచనం -s."],
["mc","child బహువచన రూపం ఏది?","children","childs","childes","child","ఇది ఇర్రెగ్యులర్ బహువచనం."],
["mc","___ shoes are nice. (ఆ బూట్లు)","Those","That","This","It","shoes బహువచనం కాబట్టి those."],
["mc","\"ఇది నా బ్యాగ్\" ఇంగ్లీష్‌లో?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my, ఆర్టికల్ కలిసి రావు."],
["mc","box బహువచన రూపం ఏది?","boxes","boxs","boxies","box","s, x, ch, sh తర్వాత -es వస్తుంది."],
["or","ఇవి నా తాళంచెవులు","These are my keys","key This","ఎక్కువ ఉన్నాయి కాబట్టి these, బహువచనం keys."],
["or","నాకు ఇద్దరు పిల్లలు ఉన్నారు","I have two children","child a","ఇద్దరు కాబట్టి బహువచనం children. ఆర్టికల్ a రాదు."],
["or","ఆ బూట్లు బాగున్నాయి","Those shoes are nice","That","shoes బహువచనం కాబట్టి those."],
["fi","I have three __.","నాకు మూడు పిల్లులు ఉన్నాయి","cats","cat|a cat|cat's","మూడు కాబట్టి బహువచనం cats."],
["fi","__ is my friend.","ఇతను నా స్నేహితుడు","This","These|Those|They","ఒక్కరే కాబట్టి this."],
["fi","Two __, please.","రెండు కాఫీలు ఇవ్వండి","coffees","coffee|a coffee|coffee's","కప్పులు లెక్కపెట్టి ఆర్డర్ చేసేటప్పుడు coffees అని బహువచనంలో చెబుతారు."],
["ty","ఇవి నా పుస్తకాలు","These are my books","these · my · book: బహువచనం","book","ఎక్కువ ఉన్నాయి కాబట్టి these, బహువచనం books."],
["ty","నాకు ఇద్దరు అక్కచెల్లెళ్ళు ఉన్నారు","I have two sisters","have · two · sister: బహువచనం","sister","ఇద్దరు కాబట్టి బహువచనం sisters."],
["ty","ఇది నా బ్యాగ్","This is my bag","this · my · bag: ఆర్టికల్ లేకుండా","a","my ఉంటే ఆర్టికల్ a రాదు."]]},
{ id:"present", title:"Simple Present, పదాల వరుస: కర్త + క్రియ + కర్మ", blurb:"తెలుగులో క్రియ చివర వస్తుంది, ఇంగ్లీష్‌లో కర్త తర్వాత వెంటనే. అలవాటుకు Simple Present, will కాదు.", deck:"నా పరిచయం", body:`
<p>తెలుగులో "నేను టీ <b>తాగుతాను</b>" అని క్రియ చివర వస్తుంది. ఇంగ్లీష్ వరుస: <b>ఎవరు → ఏం చేస్తారు → దేన్ని</b>. తెలుగులో "-ని", "-కి" లాంటి విభక్తి ప్రత్యయాలు ఎవరు ఎవర్ని అనేది చెబుతాయి. ఇంగ్లీష్‌లో ఆ పని పదాల వరుసదే.</p>
<h3>కర్త + క్రియ + కర్మ</h3>
{{ex:I drink coffee.|ఐ డ్రింక్ ˈకాఫి|నేను కాఫీ తాగుతాను}}{{ex:I study English.|ఐ ˈస్టడి ˈఇంగ్లిష్|నేను ఇంగ్లీష్ చదువుతాను}}
<h3>చోటు, సమయం చివర</h3>
<p>మిగతా వివరాలు <b>చోటు → సమయం</b> వరుసలో చివర వస్తాయి.</p>
{{ex:We live in Hyderabad.|వి లివ఼్ ఇన్ ˈహైడరబ్యాడ్|మేము హైదరాబాద్‌లో ఉంటాం}}{{ex:I study English every day.|ఐ ˈస్టడి ˈఇంగ్లిష్ ˈఎవ఼్రి డే|నేను రోజూ ఇంగ్లీష్ చదువుతాను}}{{ex:They work on weekends.|ద఼ే వర్క్ ఆన్ ˈవీకెండ్జ఼్|వాళ్ళు వీకెండ్‌లలో పని చేస్తారు}}
<h3>Simple Present: అలవాట్లు, నిజాలు</h3>
<p>Simple Present, అంటే వర్తమాన కాలం, ఎప్పుడూ చేసే పనులకు, మారని నిజాలకు. తెలుగులో "తాగుతాను" అనే రూపం అలవాటుకీ, భవిష్యత్తుకీ ఒకటే. ఇంగ్లీష్‌లో అలవాటుకు will రాదు: <b>I will drink tea daily.</b> ✗ → <b>I drink tea every day.</b> ✓. వ్యతిరేక వాక్యంలో క్రియ ముందు <b>don't</b> వస్తుంది: "తినను" = don't eat.</p>
{{ex:I don't eat meat.|ఐ డోంట్ ఈట్ మీట్|నేను మాంసం తినను}}
<h3>ఎంత తరచుగా: always, usually, sometimes, never</h3>
<p>ఈ పదాలు క్రియకు <b>సరిగ్గా ముందు</b> వస్తాయి.</p>
{{ex:I usually get up at seven.|ఐ ˈయూఝ఼ుఅలి గెట్ అప్ అట్ ˈసెవ఼న్|నేను సాధారణంగా ఏడు గంటలకు లేస్తాను}}{{ex:I never drink coffee at night.|ఐ ˈనెవ఼ర్ డ్రింక్ ˈకాఫి అట్ నైట్|నేను రాత్రిపూట కాఫీ అస్సలు తాగను}}
<div class="tip">తెలుగు వరుసలో చెబితే తప్పు: <b>I coffee drink.</b> ✗ → <b>I drink coffee.</b> ✓. కర్త తర్వాత వెంటనే క్రియ చెప్పడం అలవాటు చేసుకోండి. he, she తో వచ్చే -s తర్వాతి పాఠాల్లో వస్తుంది.</div>`,
check:[["\"నేను కాఫీ తాగుతాను\" సరైన పదాల వరుస ఏది?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"కర్త + క్రియ + కర్మ వరుసలో రావాలి."],["I ___ eat meat. (తినను)",["not","am not","no","don't"],3,"వ్యతిరేక వాక్యంలో క్రియ ముందు don't వస్తుంది."],["always సరైన స్థానంలో ఉన్న వాక్యం ఏది?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"ఎంత తరచుగా అని చెప్పే పదం క్రియకు సరిగ్గా ముందు వస్తుంది."]],
practice:[
["mc","\"నేను ఇంగ్లీష్ చదువుతాను\" ఇంగ్లీష్‌లో?","I study English.","I English study.","I am study English.","Study I English.","కర్త + క్రియ + కర్మ వరుస."],
["mc","\"నేను మాంసం తినను\" ఇంగ్లీష్‌లో?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","వ్యతిరేక వాక్యంలో క్రియ ముందు don't."],
["mc","\"మేము సియోల్‌లో ఉంటాం\" ఇంగ్లీష్‌లో?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","క్రియ తర్వాత చోటు వస్తుంది."],
["mc","\"నేను సాధారణంగా ఏడు గంటలకు లేస్తాను\" ఇంగ్లీష్‌లో?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually క్రియకు సరిగ్గా ముందు వస్తుంది."],
["mc","రోజూ చేసే పనిని చెప్పే వాక్యం ఏది?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","అలవాటు = Simple Present; will కాదు."],
["or","నేను రోజూ కాఫీ తాగుతాను","I drink coffee every day","the am","అలవాటు కాబట్టి Simple Present. సాధారణంగా చెప్పే coffee ముందు ఆర్టికల్ రాదు."],
["or","నేను చాలా పుస్తకాలు చదువుతాను","I read many books","book","many తర్వాత బహువచనం books."],
["or","మేము వీకెండ్‌లలో పని చేస్తాం","We work on weekends","are","వేరే క్రియ ముందు be పెట్టకూడదు."],
["fi","I __ like fish.","నాకు చేపలు ఇష్టం లేదు","don't|do not","not|am not|no","వ్యతిరేక వాక్యంలో క్రియ ముందు don't."],
["fi","I __ English every day.","నేను రోజూ ఇంగ్లీష్ చదువుతాను","study","am study|studying|to study","Simple Present లో క్రియ V1 గానే ఉంటుంది."],
["fi","They live __ Busan.","వాళ్ళు బూసాన్‌లో ఉంటారు","in","at|on|to","ఊరి పేరు ముందు in."],
["ty","నేను టీ తాగుతాను","I drink tea","drink · tea: ఆర్టికల్ లేకుండా","a","సాధారణంగా చెప్పే tea ముందు ఆర్టికల్ రాదు."],
["ty","నాకు పిల్లులంటే ఇష్టం","I like cats","like · cat: బహువచనంలో","cat","ఆ జంతువులన్నిటి గురించి చెప్పేటప్పుడు బహువచనం cats."],
["ty","నేను మాంసం తినను","I don't eat meat","don't · eat · meat","am","వ్యతిరేక వాక్యంలో క్రియ ముందు don't."]]},
{ id:"questions", title:"ప్రశ్నలు అడగడం: Do you …?, wh- పదాలు", blurb:"చివర \"-ఆ\" చేరిస్తే సరిపోదు. Do ముందు వస్తుంది, wh- పదం అన్నిటికంటే ముందు.", deck:"తప్పనిసరి మాటలు 2", body:`
<p>తెలుగులో చివరి పదానికి "-ఆ" చేరిస్తే ప్రశ్న అవుతుంది: "మీకు టీ ఇష్టమా?". ఇంగ్లీష్‌లో ప్రశ్న కావాలంటే <b>పదాల వరుస</b> మారాలి.</p>
<h3>be (am, is, are): స్థానం మారుతుంది</h3>
{{ex:Are you okay?|అర్ యు ఓˈకే|మీరు బాగానే ఉన్నారా?}}{{ex:Is this your bag?|ఇజ఼్ ద఼ిస్ యుర్ బ్యాగ్|ఇది మీ బ్యాగా?}}
<h3>వేరే క్రియలు: ముందు Do</h3>
<p>వాక్యం ముందు సహాయక క్రియ <b>Do</b> వస్తుంది. మిగతా వరుస అలాగే ఉంటుంది. తెలుగులో ఇలాంటి సహాయక క్రియ లేదు కాబట్టి దీన్ని వదిలేయడం సులభం: <b>You like tea?</b> ✗ → <b>Do you like tea?</b> ✓</p>
{{ex:Do you like coffee?|డ యు లైక్ ˈకాఫి|మీకు కాఫీ ఇష్టమా?}}{{ex:Do you speak English?|డ యు స్పీక్ ˈఇంగ్లిష్|మీరు ఇంగ్లీష్ మాట్లాడతారా?}}
<p>జవాబు చిన్నగా చెబుతారు: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>wh- పదం అన్నిటికంటే ముందు</h3>
<p>what (ఏమిటి), where (ఎక్కడ), when (ఎప్పుడు), who (ఎవరు), why (ఎందుకు), how (ఎలా). తెలుగులో ఈ పదం వాక్యం మధ్యలోనే ఉంటుంది: "మీరు ఎక్కడ ఉంటారు?". ఇంగ్లీష్‌లో అది ముందుకు వస్తుంది, దాని వెంటనే do లేదా be.</p>
{{ex:Where do you live?|వెర్ డ యు లివ఼్|మీరు ఎక్కడ ఉంటారు?}}{{ex:What do you do?|వట్ డ యు డూ|మీరు ఏం చేస్తారు? (ఉద్యోగం)}}{{ex:Where is the bathroom?|వెర్ ఇజ఼్ ద఼ ˈబ్యాథ఼్రూమ్|బాత్‌రూమ్ ఎక్కడ ఉంది?}}{{ex:How much is this?|హౌ మచ్ ఇజ఼్ ద఼ిస్|ఇది ఎంత?}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓, <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓. "కదా?" లాంటి question tags, వాక్యం లోపల వచ్చే ప్రశ్నలు తర్వాతి లెవెల్‌లో వస్తాయి.</div>`,
check:[["\"మీకు కాఫీ ఇష్టమా?\" ఇంగ్లీష్‌లో?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"ప్రశ్నలో సహాయక క్రియ do ముందు వస్తుంది."],["\"మీరు ఎక్కడ ఉంటారు?\" ఇంగ్లీష్‌లో?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"వరుస: wh- పదం + do + కర్త + క్రియ."],["Do you speak English? కి సరైన జవాబు ఏది?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do తో అడిగితే do తో జవాబు చెబుతారు."]],
practice:[
["mc","\"మీరు ఇంగ్లీష్ మాట్లాడతారా?\" ఇంగ్లీష్‌లో?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","ప్రశ్నలో సహాయక క్రియ do ముందు వస్తుంది."],
["mc","\"మీరు ఎక్కడ ఉంటారు?\" ఇంగ్లీష్‌లో?","Where do you live?","Where you live?","Where are you live?","Where live you?","వరుస: wh- పదం + do + కర్త + క్రియ."],
["mc","\"ఇది ఎంత?\" ఇంగ్లీష్‌లో?","How much is this?","How much this is?","How much does this?","What much is this?","ధర అడగడానికి How much is …?"],
["mc","Do you like tea? కి సరైన జవాబు ఏది?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do తో అడిగితే do తో జవాబు చెబుతారు."],
["mc","\"మీరు ఏం చేస్తారు?\" (ఉద్యోగం) ఇంగ్లీష్‌లో?","What do you do?","What are you do?","What you do?","What do you?","ఉద్యోగం గురించి What do you do? అని అడుగుతారు."],
["or","మీకు కాఫీ ఇష్టమా?","Do you like coffee","Are the","ప్రశ్న Do తో మొదలవుతుంది. సాధారణంగా చెప్పే coffee ముందు ఆర్టికల్ రాదు."],
["or","బాత్‌రూమ్ ఎక్కడ ఉంది?","Where is the bathroom","a do","ఈ బిల్డింగ్‌లోని బాత్‌రూమ్ అని ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the."],
["or","మీరు ఎక్కడ ఉంటారు?","Where do you live","are","live లాంటి క్రియతో ప్రశ్నకు do కావాలి."],
["fi","__ you like music?","మీకు సంగీతం ఇష్టమా?","Do","Are|Is|Does","like తో ప్రశ్నకు సహాయక క్రియ Do."],
["fi","__ do you live?","మీరు ఎక్కడ ఉంటారు?","Where","What|Who|When","చోటు అడగడానికి where."],
["fi","What time __ it?","టైమ్ ఎంత అయింది?","is","do|does|are","సమయం be తో అడుగుతారు."],
["ty","మీరు ఇంగ్లీష్ మాట్లాడతారా?","Do you speak English|Can you speak English","do · speak · English","Are","ప్రశ్నలో సహాయక క్రియ do ముందు వస్తుంది."],
["ty","బాత్‌రూమ్ ఎక్కడ ఉంది?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom: ఆర్టికల్ the","a","ఏ బాత్‌రూమో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the."],
["ty","మీకు కుక్కలంటే ఇష్టమా?","Do you like dogs","do · like · dog: బహువచనం","dog","ఆ జంతువులన్నిటి గురించి చెప్పేటప్పుడు బహువచనం dogs."]]},
{ id:"third-s", title:"he, she, it తో -s: does / doesn't", blurb:"కర్త ఒక్కరే అయితే క్రియకు -s. ప్రశ్న, వ్యతిరేక వాక్యంలో does.", deck:"నా పరిచయం", body:`
<p>Simple Present లో కర్త <b>he, she, it</b> లేదా ఒక మనిషి, ఒక వస్తువు అయితే క్రియకు <b>-s</b> వస్తుంది. తెలుగులో క్రియ ప్రతి కర్తకూ మారుతుంది (వెళ్తాను, వెళ్తాడు, వెళ్తుంది). ఇంగ్లీష్‌లో ఒక్కసారే మారుతుంది, ఆ ఒక్క -s పదం చివర ఉంటుంది కాబట్టి మాట్లాడేటప్పుడు సులభంగా జారిపోతుంది.</p>
<div class="tbl"><table><tr><th>కర్త</th><th>క్రియ</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|షి వర్క్స్ అట్ అ బ్యాంక్|ఆమె బ్యాంకులో పని చేస్తుంది}}{{ex:He likes soccer.|హి లైక్స్ ˈసాకర్|అతనికి ఫుట్‌బాల్ ఇష్టం}}{{ex:My mom cooks well.|మై మామ్ కుక్స్ వెల్|మా అమ్మ బాగా వండుతుంది}}
<h3>రూపం కొంచెం మారే క్రియలు</h3>
{{ex:She has a car.|షి హ్యాజ఼్ అ కార్|ఆమెకు కారు ఉంది (have → has)}}{{ex:He goes to work at eight.|హి గోజ఼్ ట వర్క్ అట్ ఏట్|అతను ఎనిమిది గంటలకు ఆఫీసుకి వెళ్తాడు (go → goes)}}{{ex:She studies English.|షి ˈస్టడిజ఼్ ˈఇంగ్లిష్|ఆమె ఇంగ్లీష్ చదువుతుంది (study → studies)}}
<h3>వ్యతిరేక వాక్యం, ప్రశ్న: does</h3>
<p><b>doesn't</b> లేదా <b>Does</b> వస్తే -s అక్కడికి వెళ్ళిపోతుంది. తర్వాత వచ్చే క్రియ V1, అంటే -s లేకుండా.</p>
{{ex:He doesn't drink coffee.|హి ˈడజ఼ంట్ డ్రింక్ ˈకాఫి|అతను కాఫీ తాగడు}}{{ex:Does she live here?|డజ఼్ షి లివ఼్ హిర్|ఆమె ఇక్కడ ఉంటుందా?}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>She work here.</b> ✗ → <b>She works here.</b> ✓, <b>She don't like it.</b> ✗ → <b>She doesn't like it.</b> ✓, <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. ఖాళీలో ఏది సరిపోతుంది?",["live","lives","living","is live"],1,"she కాబట్టి క్రియకు -s వస్తుంది."],["He ___ like coffee. ఖాళీలో ఏది సరిపోతుంది?",["don't","isn't","doesn't","not"],2,"he తో వ్యతిరేక వాక్యంలో doesn't."],["\"ఆమెకు కారు ఉంది\" ఇంగ్లీష్‌లో?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"she తర్వాత have కాదు, has."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","ఒక్క మనిషి కాబట్టి works."],
["mc","\"అతను కాఫీ తాగడు\" ఇంగ్లీష్‌లో?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he తో doesn't + V1."],
["mc","\"ఆమె ఇక్కడ ఉంటుందా?\" ఇంగ్లీష్‌లో?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does తర్వాత క్రియకు -s రాదు."],
["mc","have → she ___","has","haves","have","is have","have అనేది has గా మారుతుంది."],
["mc","study → he ___","studies","studys","study","studyes","హల్లు + y అయితే -ies."],
["or","ఆమె బ్యాంకులో పని చేస్తుంది","She works at a bank","work the","she కాబట్టి works. మొదటిసారి చెబుతున్న ఆఫీసు కాబట్టి ఆర్టికల్ a."],
["or","అతనికి రెండు కుక్కలు ఉన్నాయి","He has two dogs","have dog","he కాబట్టి has. రెండు కాబట్టి బహువచనం dogs."],
["or","ఆమె మాంసం తినదు","She doesn't eat meat","eats","doesn't తర్వాత క్రియకు -s రాదు."],
["fi","He __ soccer.","అతనికి ఫుట్‌బాల్ ఇష్టం","likes","like|liking|is like","he కాబట్టి likes."],
["fi","__ she speak English?","ఆమె ఇంగ్లీష్ మాట్లాడుతుందా?","Does","Do|Is|Are","she తో ప్రశ్నకు Does."],
["fi","She __ to work at eight.","ఆమె ఎనిమిది గంటలకు ఆఫీసుకి వెళ్తుంది","goes","go|going|gos","go అనేది goes అవుతుంది."],
["ty","అతనికి కారు ఉంది","He has a car","has · car: ఆర్టికల్ a","have","he కాబట్టి has. ఒక కారు కాబట్టి ఆర్టికల్ a."],
["ty","ఆమెకు పిల్లులంటే ఇష్టం","She likes cats","likes · cat: బహువచనం","cat","she కాబట్టి likes. ఆ జంతువులన్నిటి గురించి కాబట్టి బహువచనం cats."],
["ty","అతను ఇక్కడ ఉండడు (ఇల్లు ఇక్కడ కాదు)","He doesn't live here","doesn't · live · here","lives","doesn't తర్వాత V1 వస్తుంది."]]},
{ id:"countable", title:"లెక్కించదగిన, లెక్కించలేని నామవాచకాలు: some, any, much, many", blurb:"water కి a రాదు, -s రాదు. లెక్కించదగిన వాటికి many, లెక్కించలేని వాటికి much.", deck:"రెస్టారెంట్ ఆర్డర్", body:`
<p>ఇంగ్లీష్ నామవాచకాలు రెండు రకాలు: <b>లెక్కించదగినవి</b> (ఒకటి, రెండు అని లెక్కపెట్టగలిగేవి), <b>లెక్కించలేనివి</b>. ఇది తెలుగుతో ఎప్పుడూ సరిపోలదు. తెలుగులో "సలహాలు", "సామాన్లు" అని లెక్కిస్తాం, కానీ ఇంగ్లీష్‌లో advice, luggage, furniture, information లెక్కించలేనివి. "నీళ్ళు", "పాలు" తెలుగులో బహువచన పదాలు, ఇంగ్లీష్‌లో water, milk తో <b>is</b> వస్తుంది: <b>The water is cold.</b></p>
<div class="tbl"><table><tr><th>లెక్కించదగినవి</th><th>లెక్కించలేనివి</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, సంఖ్య, -s వస్తాయి</td><td>a / an, సంఖ్య, -s రావు</td></tr></table></div>
<h3>some, any</h3>
<p>"కొంచెం, కొన్ని" అనడానికి మామూలు వాక్యంలో <b>some</b>, వ్యతిరేక వాక్యంలో, ప్రశ్నలో <b>any</b>. కానీ ఏదైనా అడిగేటప్పుడు, ఇస్తానని అడిగేటప్పుడు ప్రశ్నలో కూడా <b>some</b> వస్తుంది: <b>Can I have some water?</b></p>
{{ex:I have some money.|ఐ హ్యావ఼్ సమ్ ˈమని|నా దగ్గర కొంచెం డబ్బు ఉంది}}{{ex:I don't have any money.|ఐ డోంట్ హ్యావ఼్ ˈఎని ˈమని|నా దగ్గర డబ్బు అస్సలు లేదు}}{{ex:Do you have any questions?|డ యు హ్యావ఼్ ˈఎని ˈక్వెస్చన్జ఼్|మీకు ఏమైనా ప్రశ్నలు ఉన్నాయా?}}
<h3>many, much</h3>
<p>లెక్కించదగిన వాటికి <b>many</b> + బహువచనం, లెక్కించలేని వాటికి <b>much</b>. <b>a lot of</b> రెండిటికీ సరిపోతుంది.</p>
{{ex:How many people?|హౌ ˈమెని ˈపీపల్|ఎంత మంది?}}{{ex:How much is it?|హౌ మచ్ ఇజ఼్ ఇట్|ఎంత అవుతుంది?}}{{ex:I don't have much time.|ఐ డోంట్ హ్యావ఼్ మచ్ టైమ్|నాకు ఎక్కువ టైమ్ లేదు}}
<h3>లెక్కించలేని వాటిని లెక్కించే పద్ధతి</h3>
{{ex:a glass of water|అ గ్ల్యాస్ అవ఼్ ˈవాటర్|ఒక గ్లాసు నీళ్ళు}}{{ex:a cup of coffee|అ కప్ అవ఼్ ˈకాఫి|ఒక కప్పు కాఫీ}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>many advices</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b>, <b>a lot of advice</b> ✓</div>`,
check:[["How ___ people are there? ఖాళీలో ఏది సరిపోతుంది?",["much","many","any","a"],1,"people లెక్కించదగిన పదం కాబట్టి many."],["వీటిలో లెక్కించలేని నామవాచకం ఏది?",["apple","chair","water","friend"],2,"water కి a రాదు, -s రాదు."],["I don't have ___ money. ఖాళీలో ఏది సరిపోతుంది?",["some","a","many","any"],3,"వ్యతిరేక వాక్యంలో any వస్తుంది."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water లెక్కించలేని నామవాచకం కాబట్టి a, many రావు."],
["mc","How ___ time do we have?","much","many","any","a","time లెక్కించలేని నామవాచకం కాబట్టి much."],
["mc","\"మీకు ఏమైనా ప్రశ్నలు ఉన్నాయా?\" ఇంగ్లీష్‌లో?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any తర్వాత లెక్కించదగిన నామవాచకం బహువచనంలో వస్తుంది."],
["mc","\"ఒక గ్లాసు నీళ్ళు\" ఇంగ్లీష్‌లో?","a glass of water","a water glass of","one waters","a glass water","లెక్కించలేని వాటిని a glass of తో లెక్కిస్తారు."],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends లెక్కించదగిన బహువచనం కాబట్టి many."],
["or","నా దగ్గర కొంచెం డబ్బు ఉంది","I have some money","a moneys","money లెక్కించలేని నామవాచకం: ఆర్టికల్ a రాదు, బహువచనం -s రాదు."],
["or","రెండు యాపిల్ పండ్లు ఇవ్వండి","Two apples please","apple","రెండు కాబట్టి బహువచనం apples."],
["or","నాకు ఎక్కువ టైమ్ లేదు","I don't have much time","many","time లెక్కించలేని నామవాచకం కాబట్టి much."],
["fi","How __ is this?","ఇది ఎంత?","much","many|any|some","ధర how much తో అడుగుతారు."],
["fi","I don't have __ questions.","నాకు ప్రశ్నలేమీ లేవు","any","some|much|a","వ్యతిరేక వాక్యంలో any వస్తుంది."],
["fi","a cup __ coffee","ఒక కప్పు కాఫీ","of","for|in|a","a cup of … అని లెక్కిస్తారు."],
["ty","కొంచెం నీళ్ళు ఇస్తారా?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water: ఆర్టికల్ లేకుండా","a","water లెక్కించలేని నామవాచకం కాబట్టి ఆర్టికల్ a బదులు some."],
["ty","మీకు ఏమైనా ప్రశ్నలు ఉన్నాయా?","Do you have any questions","any · question: బహువచనం","question","any తర్వాత లెక్కించదగిన నామవాచకం బహువచనంలో: questions."],
["ty","ఎంత మంది?","How many people","how many · people","much","మనుషులను లెక్కించగలం కాబట్టి many."]]},
{ id:"object-have", title:"me, him, her, ఇంకా have", blurb:"క్రియ తర్వాత I కాదు, me. \"నాకు కారు ఉంది\" = I have a car.", deck:"నా పరిచయం", body:`
<p>తెలుగులో "-ని" చేరిస్తే కర్మ (object) అవుతుంది: నన్ను, అతన్ని. ఇంగ్లీష్‌లో సర్వనామం <b>రూపమే</b> మారుతుంది. క్రియ <b>తర్వాత</b>, ప్రిపొజిషన్ <b>తర్వాత</b> ఈ రూపం వస్తుంది.</p>
<div class="tbl"><table><tr><th>కర్త</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>కర్మ</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|షి నోజ఼్ మి|ఆమెకు నేను తెలుసు}}{{ex:I like him.|ఐ లైక్ హిమ్|నాకు అతనంటే ఇష్టం}}{{ex:Can you help us?|కన్ యు హెల్ప్ అస్|మాకు కొంచెం సహాయం చేస్తారా?}}{{ex:I work with her.|ఐ వర్క్ విద఼్ హర్|నేను ఆమెతో కలిసి పని చేస్తాను}}
<p>తెలుగులో "ఆమె వచ్చింది", "అది వచ్చింది" అని క్రియ ఒకటే. ఇంగ్లీష్‌లో ఆడవారికి she / her, మగవారికి he / him, వస్తువులకు it. తెలిసిన కర్మను తెలుగులో వదిలేస్తాం ("నాకు ఇష్టం లేదు"), ఇంగ్లీష్‌లో చెప్పాలి: <b>I don't like.</b> ✗</p>
{{ex:I don't like it.|ఐ డోంట్ లైక్ ఇట్|నాకు అది ఇష్టం లేదు}}
<h3>have: ఉండటం</h3>
<p>తెలుగులో "నాకు కారు ఉంది" అంటాం. ఇంగ్లీష్‌లో ఎవరి దగ్గర ఉందో వాళ్ళే కర్త: <b>I have a car.</b> కుటుంబం, వస్తువులు, సమయం అన్నిటికీ have. ఈ అర్థంలో -ing రాదు: <b>I am having a car.</b> ✗</p>
{{ex:I have two brothers.|ఐ హ్యావ఼్ టూ ˈబ్రద఼ర్జ఼్|నాకు ఇద్దరు అన్నదమ్ములు ఉన్నారు}}{{ex:Do you have a pen?|డ యు హ్యావ఼్ అ పెన్|మీ దగ్గర పెన్ ఉందా?}}{{ex:I don't have time.|ఐ డోంట్ హ్యావ఼్ టైమ్|నాకు టైమ్ లేదు}}
<h3>have: తినడం, తాగడం</h3>
<p>భోజనం పేర్ల ముందు ఆర్టికల్ రాదు.</p>
{{ex:Let's have lunch.|లెట్స్ హ్యావ఼్ లంచ్|లంచ్ చేద్దాం}}{{ex:I have coffee every morning.|ఐ హ్యావ఼్ ˈకాఫి ˈఎవ఼్రి ˈమోర్నిఙ్|నేను రోజూ ఉదయం కాఫీ తాగుతాను}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓, <b>To me two brothers are there.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (అతన్ని)",["he","his","him","he's"],2,"క్రియ తర్వాత కర్మ రూపం him వస్తుంది."],["Can you help ___? (మాకు)",["us","we","our","ours"],0,"క్రియ తర్వాత కర్మ రూపం us వస్తుంది."],["\"మీ దగ్గర పెన్ ఉందా?\" ఇంగ్లీష్‌లో?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have తో ప్రశ్నకు సహాయక క్రియ Do వస్తుంది."]],
practice:[
["mc","She knows ___. (నన్ను)","me","I","my","mine","క్రియ తర్వాత కర్మ రూపం me."],
["mc","I like ___. (వాళ్ళను)","them","they","their","theirs","క్రియ తర్వాత కర్మ రూపం them."],
["mc","\"మాకు కొంచెం సహాయం చేస్తారా?\" ఇంగ్లీష్‌లో?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","క్రియ తర్వాత us."],
["mc","\"లంచ్ చేద్దాం\" ఇంగ్లీష్‌లో?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","భోజనం పేర్ల ముందు ఆర్టికల్ రాదు."],
["mc","\"నాకు ఇద్దరు అన్నదమ్ములు ఉన్నారు\" ఇంగ్లీష్‌లో?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","కుటుంబం గురించి have తో చెబుతారు. ఇద్దరు కాబట్టి బహువచనం."],
["or","మీ దగ్గర పెన్ ఉందా?","Do you have a pen","the pens","ఏదైనా ఒక పెన్ కాబట్టి ఆర్టికల్ a, ఏకవచనం pen."],
["or","నాకు ఆమె అంటే ఇష్టం","I like her","she","క్రియ తర్వాత కర్మ రూపం her."],
["or","నాకు ఇద్దరు చెల్లెళ్ళు ఉన్నారు","I have two sisters","sister a","ఇద్దరు కాబట్టి బహువచనం sisters. ఆర్టికల్ a రాదు."],
["fi","Call __ tonight.","ఈ రాత్రి నాకు ఫోన్ చెయ్యి","me","I|my|mine","క్రియ తర్వాత me."],
["fi","I work with __.","నేను అతనితో కలిసి పని చేస్తాను","him","he|his|he's","ప్రిపొజిషన్ తర్వాత కూడా కర్మ రూపమే."],
["fi","She __ a dog.","ఆమెకు ఒక కుక్క ఉంది","has","have|is|haves","she కాబట్టి has."],
["ty","నాకు కొంచెం సహాయం చేస్తారా?","Can you help me|Could you help me","can you · help · me","I","క్రియ తర్వాత కర్మ రూపం me."],
["ty","మీ దగ్గర పెన్ ఉందా?","Do you have a pen","do you have · pen: ఆర్టికల్ a","the","ఏదైనా ఒక పెన్ కోసం అడుగుతున్నాం కాబట్టి ఆర్టికల్ a."],
["ty","నాకు చాలా మంది స్నేహితులు ఉన్నారు","I have many friends|I have a lot of friends","have · many · friend: బహువచనం","friend","many తర్వాత బహువచనం friends."]]},
{ id:"can-like", title:"can, like + -ing, I'd like: చేయగలిగినవి, కావలసినవి", blurb:"మీకు వచ్చినవి, ఇష్టమైనవి, ఇప్పుడు కావలసినవి చెప్పండి.", deck:"సరదా కబుర్లు", body:`
<p>పరిచయంలో, ఆర్డర్ చేసేటప్పుడు వెంటనే పనికొచ్చే మూడు నమూనాలు. తెలుగులో "నాకు ఈత వచ్చు", "నాకు టీ ఇష్టం" అని "నాకు" తో మొదలుపెడతాం. ఇంగ్లీష్‌లో ఆ మనిషే కర్త: <b>I can swim.</b> <b>I like tea.</b></p>
<h3>can: చేయగలను</h3>
<p><b>can + V1</b>. కర్త he, she అయినా -s రాదు.</p>
{{ex:I can swim.|ఐ కన్ స్విమ్|నాకు ఈత వచ్చు}}{{ex:I can't drive.|ఐ క్యాంట్ డ్రైవ఼్|నాకు డ్రైవింగ్ రాదు}}{{ex:Can you speak Telugu?|కన్ యు స్పీక్ ˈటెలగు|మీకు తెలుగు వచ్చా?}}
<h3>like + -ing: చేయడం ఇష్టం</h3>
<p>హాబీల గురించి చెప్పేటప్పుడు like, love తర్వాత <b>-ing రూపం</b> వస్తుంది.</p>
{{ex:I like cooking.|ఐ లైక్ ˈకుకిఙ్|నాకు వంట చేయడం ఇష్టం}}{{ex:I love watching movies.|ఐ లవ఼్ ˈవాచిఙ్ ˈమూవ఼ిజ఼్|నాకు సినిమాలు చూడటం చాలా ఇష్టం}}{{ex:I don't like running.|ఐ డోంట్ లైక్ ˈరనిఙ్|నాకు పరుగెత్తడం ఇష్టం లేదు}}
<h3>I'd like: ఇవ్వండి, కావాలి</h3>
<p><b>I like</b> అంటే ఎప్పుడూ ఇష్టం అని. <b>I'd like</b> అంటే ఇప్పుడు కావాలి అని మర్యాదగా చెప్పడం. ఆర్డర్ చేసేటప్పుడు I'd like వాడండి.</p>
{{ex:I'd like a coffee, please.|ఐడ్ లైక్ అ ˈకాఫి ప్లీజ఼్|ఒక కాఫీ ఇవ్వండి}}{{ex:Would you like some tea?|వడ్ యు లైక్ సమ్ టీ|కొంచెం టీ తీసుకుంటారా?}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓, <b>Swimming comes to me.</b> ✗ → <b>I can swim.</b> ✓, కేఫ్‌లో <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. ఖాళీలో ఏది సరిపోతుంది?",["sings","sing","singing","to sing"],1,"can తర్వాత V1 వస్తుంది."],["\"నాకు వంట చేయడం ఇష్టం\" ఇంగ్లీష్‌లో?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like తర్వాత -ing రూపం వస్తుంది."],["కేఫ్‌లో ఆర్డర్ చేసేటప్పుడు ఏది సహజంగా ఉంటుంది?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"ఇప్పుడు కావలసినది I'd like తో చెబుతారు."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can తర్వాత V1 వస్తుంది."],
["mc","\"నాకు డ్రైవింగ్ రాదు\" ఇంగ్లీష్‌లో?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can వ్యతిరేక రూపం can't."],
["mc","\"నాకు సినిమాలు చూడటం ఇష్టం\" ఇంగ్లీష్‌లో?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like తర్వాత -ing రూపం. సినిమాలు అన్నీ అనే అర్థంలో బహువచనం movies."],
["mc","ఆర్డర్ చేస్తూ \"ఒక కాఫీ ఇవ్వండి\" ఇంగ్లీష్‌లో?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","ఇప్పుడు కావలసినది I'd like తో చెబుతారు."],
["mc","\"కొంచెం టీ తీసుకుంటారా?\" ఇంగ్లీష్‌లో?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","ఏదైనా ఇస్తానని అడిగేటప్పుడు Would you like …?"],
["or","ఒక కాఫీ ఇవ్వండి","I'd like a coffee please","the coffees","ఆర్డర్ చేస్తున్నది ఒక కప్పు కాబట్టి ఆర్టికల్ a, ఏకవచనం coffee."],
["or","నాకు పుస్తకాలు చదవడం ఇష్టం","I like reading books","book read","like తర్వాత -ing రూపం. పుస్తకాలు అన్నీ అనే అర్థంలో బహువచనం books."],
["or","మీకు ఈత వచ్చా?","Can you swim","swimming","can తర్వాత V1 వస్తుంది."],
["fi","I can't __.","నాకు ఈత రాదు","swim","swimming|swims|to swim","can't తర్వాత V1 వస్తుంది."],
["fi","I like __ music.","నాకు సంగీతం వినడం ఇష్టం","listening to","listen to|listen|to listening","like తర్వాత -ing రూపం వస్తుంది."],
["fi","__ like a sandwich, please.","ఒక శాండ్‌విచ్ ఇవ్వండి","I'd|I would","I|I'm|I can","ఆర్డర్ చేసేటప్పుడు I'd like."],
["ty","నాకు వంట చేయడం ఇష్టం","I like cooking|I love cooking|I like to cook","like · cook: -ing రూపం","cook","like తర్వాత -ing రూపం వస్తుంది."],
["ty","ఒక శాండ్‌విచ్ ఇవ్వండి (ఆర్డర్ చేస్తూ)","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich: ఆర్టికల్ a","the","ఏదైనా ఒక శాండ్‌విచ్ కాబట్టి ఆర్టికల్ a."],
["ty","నాకు కుక్కలంటే ఇష్టం","I like dogs|I love dogs","like · dog: బహువచనం","dog","కుక్కలన్నిటి గురించి చెప్పేటప్పుడు బహువచనం dogs."]]},
{ id:"continuous", title:"ఇప్పుడు జరుగుతున్నది: be + -ing", blurb:"ఎప్పుడూ చేసే పనికి Simple Present, ఇప్పుడు చేస్తున్న పనికి be + -ing.", deck:"సరదా కబుర్లు", body:`
<p>తెలుగులో "చేస్తున్నాను" అనే రూపానికి ఇంగ్లీష్‌లో Present Continuous: <b>am / is / are + -ing రూపం</b>. <b>ఇప్పుడు ఈ క్షణంలో</b> జరుగుతున్న పనులకు వాడతారు.</p>
{{ex:I'm working now.|ఐమ్ ˈవర్కిఙ్ నౌ|నేను ఇప్పుడు పని చేస్తున్నాను}}{{ex:She's cooking dinner.|షిజ఼్ ˈకుకిఙ్ ˈడినర్|ఆమె డిన్నర్ వండుతోంది}}{{ex:It's raining.|ఇట్స్ ˈరేనిఙ్|వర్షం పడుతోంది}}
<h3>ప్రశ్న, వ్యతిరేక వాక్యం</h3>
{{ex:What are you doing?|వట్ అర్ యు ˈడూఇఙ్|ఏం చేస్తున్నావు?}}{{ex:Are you listening?|అర్ యు ˈలిసనిఙ్|వింటున్నావా?}}{{ex:I'm not sleeping.|ఐమ్ నాట్ ˈస్లీపిఙ్|నేను నిద్రపోవడం లేదు}}
<h3>Simple Present తో పోలిక</h3>
<div class="tbl"><table><tr><th>ఎప్పుడూ (Simple Present)</th><th>ఇప్పుడు (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>-ing తీసుకోని క్రియలు</h3>
<p>like, know, want, need, understand, have (ఉండటం) లాంటివి <b>స్థితిని చెప్పే క్రియలు</b> (stative verbs). ఇప్పటి విషయమైనా ఇవి Simple Present లోనే ఉంటాయి. "హైదరాబాద్‌లో ఉంటున్నాను" అని ఇల్లు ఎక్కడో చెప్పడానికి <b>I live in Hyderabad.</b> అనాలి. I'm staying అంటే కొద్ది రోజుల బస.</p>
{{ex:I know him.|ఐ నో హిమ్|నాకు అతను తెలుసు}}{{ex:I want some water.|ఐ వాంట్ సమ్ ˈవాటర్|నాకు కొంచెం నీళ్ళు కావాలి}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: be ను వదిలేయడం, <b>I working.</b> ✗ → <b>I'm working.</b> ✓. స్థితిని చెప్పే క్రియకు -ing పెట్టడం, <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓. "ఐదేళ్ళుగా ఇక్కడ పని చేస్తున్నాను" లాంటి వాక్యాలకు Present Continuous సరిపోదు. అది Present Perfect పాఠంలో వస్తుంది.</div>`,
check:[["\"ఇప్పుడు ఏం చేస్తున్నావు?\" ఇంగ్లీష్‌లో?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"ఇప్పుడు చేస్తున్న పని గురించి be + -ing తో అడుగుతారు."],["I ___ coffee every morning. ఖాళీలో ఏది సరిపోతుంది?",["am drinking","drinking","drink","am drink"],2,"రోజూ చేసే అలవాటు కాబట్టి Simple Present."],["వీటిలో సరైన వాక్యం ఏది?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want, have (ఉండటం) స్థితిని చెప్పే క్రియలు: -ing తీసుకోవు."]],
practice:[
["mc","\"నేను ఇప్పుడు పని చేస్తున్నాను\" ఇంగ్లీష్‌లో?","I'm working now.","I work now am.","I'm work now.","I working now.","ఇప్పుడు చేస్తున్న పనికి be + -ing."],
["mc","\"ఆమె డిన్నర్ వండుతోంది\" ఇంగ్లీష్‌లో?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing. భోజనం పేర్ల ముందు ఆర్టికల్ రాదు."],
["mc","రోజూ చేసే పనిని చెప్పే వాక్యం ఏది?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","అలవాటు = Simple Present."],
["mc","\"ఇప్పుడు ఏం చేస్తున్నావు?\" ఇంగ్లీష్‌లో?","What are you doing?","What do you doing?","What are you do?","What you are doing?","వరుస: wh- పదం + be + కర్త + -ing."],
["mc","\"నాకు అతను తెలుసు\" ఇంగ్లీష్‌లో?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know స్థితిని చెప్పే క్రియ: -ing తీసుకోదు."],
["or","నేను ఒక పుస్తకం చదువుతున్నాను","I'm reading a book","read books","ఇప్పుడు చదువుతున్నది ఒక్క పుస్తకం కాబట్టి ఆర్టికల్ a, ఏకవచనం book."],
["or","పిల్లలు ఆడుకుంటున్నారు","The kids are playing","kid is","ఒకరి కంటే ఎక్కువ కాబట్టి బహువచనం kids, దానితో are."],
["or","ఇప్పుడు వర్షం పడుతోంది","It's raining now","rains","ఇప్పుడు జరుగుతున్నదానికి be + -ing."],
["fi","I'm __ TV.","నేను టీవీ చూస్తున్నాను","watching","watch|watches|to watch","be తర్వాత -ing రూపం వస్తుంది."],
["fi","What __ you doing?","ఏం చేస్తున్నావు?","are","do|is|does","you తో are."],
["fi","She __ working today.","ఆమె ఈరోజు పని చేయడం లేదు","isn't|is not","doesn't|don't|not","be + -ing కి వ్యతిరేక రూపం isn't."],
["ty","నేను ఇప్పుడు వంట చేస్తున్నాను","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook: -ing రూపం · now","cook","ఇప్పుడు చేస్తున్న పనికి be + -ing."],
["ty","నేను ఒక సినిమా చూస్తున్నాను","I'm watching a movie","I'm · watching · movie: ఆర్టికల్ a","the","ఏదో ఒక సినిమా కాబట్టి ఆర్టికల్ a."],
["ty","పిల్లలు నిద్రపోతున్నారు","The kids are sleeping|The children are sleeping","the kids · are · sleeping: బహువచనం","kid","ఒకరి కంటే ఎక్కువ కాబట్టి బహువచనం kids, దానితో are."]]},
{ id:"past", title:"జరిగిపోయిన విషయాలు: was / were, -ed", blurb:"be కి was, were. వేరే క్రియలకు -ed. ప్రశ్న, వ్యతిరేక వాక్యంలో did.", deck:"సరదా కబుర్లు", body:`
<p>జరిగిపోయిన విషయాలకు Simple Past (తెలుగులో "చేశాను", "వెళ్ళాను"). be కి ఒక పద్ధతి, వేరే క్రియలకు ఇంకో పద్ధతి.</p>
<h3>be గత రూపం: was / were</h3>
<p>I, he, she, it తో <b>was</b>. you, we, they తో <b>were</b>.</p>
{{ex:I was tired.|ఐ వజ఼్ ˈటైఅర్డ్|నేను అలసిపోయి ఉన్నాను}}{{ex:It was fun.|ఇట్ వజ఼్ ఫన్|సరదాగా గడిచింది}}{{ex:We were at home.|వి వర్ అట్ హోమ్|మేము ఇంట్లో ఉన్నాం}}{{ex:Were you busy?|వర్ యు ˈబిజ఼ి|మీరు బిజీగా ఉన్నారా? (అప్పుడు)}}
<h3>వేరే క్రియలు: -ed</h3>
<p>క్రియ చివర <b>-ed</b> వస్తుంది. కర్త ఎవరైనా రూపం ఒకటే. -ed పలికిన తర్వాత చివర అచ్చు చేర్చకండి.</p>
{{ex:I worked yesterday.|ఐ వర్క్ట్ ˈయెస్టర్డే|నేను నిన్న పని చేశాను}}{{ex:We watched a movie.|వి వాచ్ట్ అ ˈమూవ఼ి|మేము ఒక సినిమా చూశాం}}{{ex:She called me.|షి కాల్డ్ మి|ఆమె నాకు ఫోన్ చేసింది}}
<h3>వ్యతిరేక వాక్యం, ప్రశ్న: did</h3>
<p><b>didn't</b> లేదా <b>Did</b> వస్తే క్రియ మళ్ళీ V1 అవుతుంది. గతాన్ని did ఒక్కటే చూపిస్తుంది.</p>
{{ex:I didn't work yesterday.|ఐ ˈడిడంట్ వర్క్ ˈయెస్టర్డే|నేను నిన్న పని చేయలేదు}}{{ex:Did you call me?|డిడ్ యు కాల్ మి|నువ్వు నాకు ఫోన్ చేశావా?}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓, <b>Did you called?</b> ✗ → <b>Did you call?</b> ✓, <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. ఖాళీలో ఏది సరిపోతుంది?",["was","were","did","are"],1,"they తో were."],["\"నేను నిన్న పని చేయలేదు\" ఇంగ్లీష్‌లో?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't తర్వాత V1 వస్తుంది."],["Did you ___ the movie? ఖాళీలో ఏది సరిపోతుంది?",["watch","watched","watching","watches"],0,"Did తర్వాత V1 వస్తుంది."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I తో was."],
["mc","\"మేము ఒక సినిమా చూశాం\" ఇంగ్లీష్‌లో?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Simple Past లో రెగ్యులర్ క్రియకు -ed."],
["mc","\"నిన్న ఫోన్ చేశావా?\" ఇంగ్లీష్‌లో?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did తర్వాత V1 వస్తుంది."],
["mc","\"సరదాగా గడిచింది\" ఇంగ్లీష్‌లో?","It was fun.","It were fun.","It did fun.","It funned.","it తో was."],
["mc","\"మీరు బిజీగా ఉన్నారా?\" (నిన్న) ఇంగ్లీష్‌లో?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy క్రియ కాదు, విశేషణం. అందుకే be తో అడుగుతారు."],
["or","మేము ఒక సినిమా చూశాం","We watched a movie","watch movies","ఒక సినిమా కాబట్టి ఆర్టికల్ a, ఏకవచనం movie."],
["or","నేను నా స్నేహితులతో ఆడుకున్నాను","I played with my friends","friend play","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."],
["or","నేను నిన్న పని చేయలేదు","I didn't work yesterday","worked","didn't తర్వాత V1 వస్తుంది."],
["fi","We __ at home last night.","నిన్న రాత్రి మేము ఇంట్లో ఉన్నాం","were","was|did|are","we తో were."],
["fi","I __ soccer yesterday.","నేను నిన్న ఫుట్‌బాల్ ఆడాను","played","play|playing|was play","గతానికి -ed."],
["fi","__ you work yesterday?","మీరు నిన్న పని చేశారా?","Did","Were|Do|Was","Simple Past ప్రశ్నకు సహాయక క్రియ Did."],
["ty","నేను అలసిపోయి ఉన్నాను (గతంలో)","I was tired","was · tired","were","I తో was."],
["ty","నేను ఒక సినిమా చూశాను (watch వాడండి)","I watched a movie","watched · movie: ఆర్టికల్ a","the","ఒక సినిమా కాబట్టి ఆర్టికల్ a."],
["ty","నేను నా స్నేహితులకు ఫోన్ చేశాను (call వాడండి)","I called my friends","called · my · friend: బహువచనం","friend","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."]]},
{ id:"irregular-past", title:"ఇర్రెగ్యులర్ క్రియలు: went, ate, saw", blurb:"ఎక్కువగా వాడే క్రియలకే -ed రాదు. ముందు ఈ 12 నేర్చుకోండి.", deck:"సరదా కబుర్లు", body:`
<p>రోజూ వాడే క్రియల్లో చాలావాటి గత రూపం <b>ఇర్రెగ్యులర్</b>. వీటికి నియమం లేదు. స్కూల్లో V1, V2, V3 పట్టికలు నేర్చుకున్నట్టే, ఇక్కడ V1, V2 జతలుగా గుర్తుపెట్టుకోండి.</p>
<div class="tbl"><table><tr><th>V1</th><th>V2</th><th>V1</th><th>V2</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Vijayawada.|ఐ వెంట్ ట వ఼ిజయˈవాడ|నేను విజయవాడ వెళ్ళాను}}{{ex:We ate pizza.|వి ఏట్ ˈపీట్స|మేము పిజ్జా తిన్నాం}}{{ex:I saw a movie.|ఐ సా అ ˈమూవ఼ి|నేను ఒక సినిమా చూశాను}}{{ex:I met my friends.|ఐ మెట్ మై ఫ్రెండ్జ఼్|నేను నా స్నేహితులను కలిశాను}}{{ex:I bought a book.|ఐ బాట్ అ బుక్|నేను ఒక పుస్తకం కొన్నాను}}
<h3>ప్రశ్న, వ్యతిరేక వాక్యంలో మళ్ళీ V1</h3>
<p>గతాన్ని <b>did</b> చూపిస్తుంది కాబట్టి క్రియ V1 లోకి తిరిగి వస్తుంది.</p>
{{ex:What did you do?|వట్ డిడ్ యు డూ|నువ్వు ఏం చేశావు?}}{{ex:Where did you go?|వెర్ డిడ్ యు గో|నువ్వు ఎక్కడికి వెళ్ళావు?}}{{ex:I didn't go.|ఐ ˈడిడంట్ గో|నేను వెళ్ళలేదు}}
<div class="tip">ఎక్కువగా జరిగే తప్పులు: <b>I goed.</b> ✗ → <b>I went.</b> ✓, <b>I didn't went.</b> ✗ → <b>I didn't go.</b> ✓, <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go కి V2 (గత రూపం) ఏది?",["goed","gone","went","going"],2,"go గత రూపం went."],["\"నువ్వు ఏం చేశావు?\" ఇంగ్లీష్‌లో?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did తర్వాత V1 అయిన do వస్తుంది."],["I didn't ___ breakfast. ఖాళీలో ఏది సరిపోతుంది?",["ate","eaten","eats","eat"],3,"didn't తర్వాత V1 వస్తుంది."]],
practice:[
["mc","eat కి V2 (గత రూపం) ఏది?","ate","eated","eat","eaten","eat గత రూపం ate."],
["mc","\"నువ్వు ఎక్కడికి వెళ్ళావు?\" ఇంగ్లీష్‌లో?","Where did you go?","Where did you went?","Where you went?","Where were you go?","did తర్వాత V1 వస్తుంది."],
["mc","\"నేను ఒక పుస్తకం కొన్నాను\" ఇంగ్లీష్‌లో?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy గత రూపం bought. ఒక పుస్తకం కాబట్టి ఆర్టికల్ a."],
["mc","see కి V2 (గత రూపం) ఏది?","saw","seed","seen","sawed","see గత రూపం saw."],
["mc","\"నేను వెళ్ళలేదు\" ఇంగ్లీష్‌లో?","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't తర్వాత V1 వస్తుంది."],
["or","నేను ఒక సినిమా చూశాను","I saw a movie","see movies","ఒక సినిమా కాబట్టి ఆర్టికల్ a, ఏకవచనం movie. see గత రూపం saw."],
["or","మేము పిజ్జా తిన్నాం","We ate pizza","eated","eat గత రూపం ate."],
["or","నేను నా స్నేహితులను కలిశాను","I met my friends","friend meet","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."],
["fi","I __ to Jeju last year.","నేను పోయిన సంవత్సరం జెజు వెళ్ళాను","went","go|goed|gone","go గత రూపం went."],
["fi","What did you __?","నువ్వు ఏం తిన్నావు?","eat","ate|eaten|eating","did తర్వాత V1 వస్తుంది."],
["fi","She __ a new phone.","ఆమె కొత్త ఫోన్ కొన్నది","bought","buyed|buy|buys","buy గత రూపం bought."],
["ty","నేను బూసాన్ వెళ్ళాను","I went to Busan","went · to · Busan","go","go గత రూపం went."],
["ty","నేను ఒక పుస్తకం కొన్నాను","I bought a book","bought · book: ఆర్టికల్ a","the","ఒక పుస్తకం కాబట్టి ఆర్టికల్ a."],
["ty","నేను నా స్నేహితులను కలిశాను","I met my friends|I saw my friends","met · my · friend: బహువచనం","friend","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."]]},
{ id:"the", title:"the మళ్ళీ: మొదటిసారి a, తర్వాత the", blurb:"కొత్తగా చెబుతున్నప్పుడు a. ఏది అని ఇద్దరికీ తెలిస్తే the.", deck:"దారి, రవాణా", body:`
<p>తెలుగులో ఆర్టికల్స్ లేవు కాబట్టి ఇవి ఒక్కసారికి అలవాటు కావు. తప్పు రెండు వైపులా జరుగుతుంది: కావలసిన చోట వదిలేస్తాం, అవసరం లేని చోట పెడతాం. ఇక్కడ <b>the</b> ఎప్పుడు వస్తుందో, <b>ఏ ఆర్టికల్ రాని చోట్లు</b> ఏవో మళ్ళీ సాధన చేద్దాం.</p>
<h3>మొదటిసారి a, మళ్ళీ చెప్పినప్పుడు the</h3>
<p>వినేవారికి కొత్త విషయమైతే a. ఇప్పుడే చెప్పాం కాబట్టి తెలిసినదైతే the.</p>
{{ex:I bought a shirt. The shirt is blue.|ఐ బాట్ అ షర్ట్. ద఼ షర్ట్ ఇజ఼్ బ్లూ|నేను ఒక షర్ట్ కొన్నాను. ఆ షర్ట్ నీలం రంగుది}}
<h3>ఆ సందర్భంలో ఒక్కటే ఉంటే the</h3>
<p>ఈ గది కిటికీ, దగ్గర్లోని స్టేషన్ లాగా ఏది అనేది స్పష్టంగా తెలిస్తే మొదటి నుంచే the.</p>
{{ex:Can you open the window?|కన్ యు ˈఓపన్ ద఼ ˈవిండో|కిటికీ కొంచెం తెరుస్తారా?}}{{ex:Where's the subway station?|వెర్జ఼్ ద఼ ˈసబ్వే ˈస్టేషన్|మెట్రో స్టేషన్ ఎక్కడ ఉంది?}}{{ex:The sun is hot today.|ద఼ సన్ ఇజ఼్ హాట్ టˈడే|ఈరోజు ఎండ బాగా ఉంది}}
<h3>ఆర్టికల్ రాని మాటలు</h3>
<p>చోటు, ప్రయాణం, భోజనం గురించిన కొన్ని మాటలను అలాగే గుర్తుపెట్టుకోండి. సాధారణంగా మాట్లాడేటప్పుడు life, music, love లాంటి పదాల ముందు కూడా the రాదు: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓</p>
{{ex:I go to work by bus.|ఐ గో ట వర్క్ బై బస్|నేను బస్సులో ఆఫీసుకి వెళ్తాను}}{{ex:I'm at home.|ఐమ్ అట్ హోమ్|నేను ఇంట్లో ఉన్నాను}}{{ex:I go to bed at eleven.|ఐ గో ట బెడ్ అట్ ఇˈలెవ఼న్|నేను పదకొండు గంటలకు పడుకుంటాను}}
<div class="tip">మిమ్మల్ని మీరు అడగండి: "<b>ఏది</b> అని వినేవారికి తెలుసా?" తెలిస్తే the, తెలియకపోతే a.</div>`,
check:[["I have a cat. ___ cat is white. ఖాళీలో ఏది సరిపోతుంది?",["A","An","The","(ఆర్టికల్ లేదు)"],2,"ఇప్పుడే చెప్పిన పిల్లి కాబట్టి the."],["I go to ___ work by bus. ఖాళీలో ఏది సరిపోతుంది?",["a","the","an","(ఆర్టికల్ లేదు)"],3,"go to work లో ఆర్టికల్ రాదు."],["ఈ గది కిటికీ తెరవమని అడగడానికి ఏది సరైనది?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"ఏ కిటికీనో ఇద్దరికీ తెలుసు కాబట్టి the."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","ఇప్పుడే చెప్పిన షర్ట్ కాబట్టి the."],
["mc","\"స్టేషన్ ఎక్కడ ఉంది?\" ఇంగ్లీష్‌లో?","Where's the station?","Where's a station?","Where's station?","Where the station?","దగ్గర్లోని ఆ స్టేషన్ అని ఇద్దరికీ తెలుసు కాబట్టి the."],
["mc","వీటిలో సరైన వాక్యం ఏది?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work, by bus లో ఆర్టికల్ రాదు."],
["mc","\"ఎండ బాగా ఉంది\" ఇంగ్లీష్‌లో?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","ఒక్కటే ఉన్నదానికి the వస్తుంది."],
["mc","\"నేను ఇంట్లో ఉన్నాను\" ఇంగ్లీష్‌లో?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home లో ఆర్టికల్ రాదు."],
["or","కిటికీ కొంచెం తెరుస్తారా?","Can you open the window","a windows","ఏ కిటికీనో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the."],
["or","నేను బస్సులో ఆఫీసుకి వెళ్తాను","I go to work by bus","the a","go to work, by bus లో ఆర్టికల్ రాదు."],
["or","ఆ కుక్క పెద్దది","The dog is big","A dogs","ముందే చెప్పిన కుక్క కాబట్టి ఆర్టికల్ the."],
["fi","I saw a movie. __ movie was great.","నేను ఒక సినిమా చూశాను. ఆ సినిమా చాలా బాగుంది","The","A|An|Some","ఇప్పుడే చెప్పిన సినిమా కాబట్టి the."],
["fi","Where's __ bathroom?","బాత్‌రూమ్ ఎక్కడ ఉంది?","the","a|an|some","ఈ బిల్డింగ్‌లోని బాత్‌రూమ్ కాబట్టి the."],
["fi","I have __ idea.","నాకు ఒక ఐడియా వచ్చింది","an","a|the|some","మొదటిసారి చెబుతున్న ఒక ఐడియా, పైగా అచ్చు శబ్దంతో మొదలవుతుంది కాబట్టి an."],
["ty","తలుపు కొంచెం మూస్తారా?","Can you close the door|Could you close the door","can you · close · door: ఆర్టికల్ the","a","ఏ తలుపో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the."],
["ty","స్టేషన్ ఎక్కడ ఉంది?","Where is the station|Where's the station","where · station: ఆర్టికల్ the","a","దగ్గర్లోని ఆ స్టేషన్ కాబట్టి ఆర్టికల్ the."],
["ty","నేను ఇంట్లో ఉన్నాను","I'm at home|I'm home","I'm · at · home: ఆర్టికల్ లేకుండా","the","home ముందు ఆర్టికల్ రాదు."]]},
{ id:"adjectives", title:"విశేషణాలు, పోలిక: bigger, more expensive, the best", blurb:"విశేషణం నామవాచకం ముందు. పోలికకు -er లేదా more, అన్నిటికంటే అనడానికి the -est లేదా the most.", deck:"షాపింగ్, చెల్లింపులు", body:`
<p>విశేషణం తెలుగులో లాగే నామవాచకం <b>ముందు</b> వస్తుంది, లేదా be <b>తర్వాత</b>. షాపింగ్‌లో తప్పకుండా కావలసిన పోలిక మాటలు కూడా ఇక్కడే నేర్చుకుందాం.</p>
{{ex:a big bag|అ బిగ్ బ్యాగ్|పెద్ద బ్యాగ్}}{{ex:This bag is big.|ద఼ిస్ బ్యాగ్ ఇజ఼్ బిగ్|ఈ బ్యాగ్ పెద్దది}}{{ex:It's too small.|ఇట్స్ టూ స్మాల్|ఇది మరీ చిన్నది}}
<h3>పోలిక: -er లేదా more</h3>
<p>తెలుగులో "కంటే" చేరిస్తే చాలు, విశేషణం మారదు: "రవి కంటే పొడుగు". ఇంగ్లీష్‌లో విశేషణమే మారుతుంది: చిన్న పదాలకు <b>-er</b>, పెద్ద పదాలకు ముందు <b>more</b>. "కంటే" = <b>than</b>.</p>
<div class="tbl"><table><tr><th>మామూలు</th><th>ఇంకా ఎక్కువ</th><th>అన్నిటికంటే</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|ద఼ిస్ వన్ ఇజ఼్ ˈచీపర్|ఇది ఇంకా చవక}}{{ex:It's more expensive than that one.|ఇట్స్ మోర్ ఇక్ˈస్పెన్సివ఼్ ద఼న్ ద఼్యాట్ వన్|ఇది దానికంటే ఖరీదు}}{{ex:Do you have a bigger size?|డ యు హ్యావ఼్ అ ˈబిగర్ సైజ఼్|ఇంకా పెద్ద సైజు ఉందా?}}
<h3>superlative ముందు the</h3>
{{ex:This is the best restaurant here.|ద఼ిస్ ఇజ఼్ ద఼ బెస్ట్ ˈరెస్టరాంట్ హిర్|ఇక్కడ అన్నిటికంటే మంచి రెస్టారెంట్ ఇదే}}{{ex:Which is the cheapest?|విచ్ ఇజ఼్ ద఼ ˈచీపిస్ట్|అన్నిటికంటే చవకైనది ఏది?}}
<div class="tip">-er, more రెండూ కలిసి రావు: <b>more cheaper</b>, <b>more better</b> ✗ → <b>cheaper</b>, <b>better</b> ✓. రెండూ లేకుండా కూడా కుదరదు: <b>He is tall than me.</b> ✗ → <b>He is taller than me.</b> ✓</div>`,
check:[["big కి comparative ఏది?",["more big","biger","bigger","most big"],2,"చిన్న పదాలకు -er. big లో ఒక్క అచ్చు అక్షరం, దాని తర్వాత ఒక్క హల్లు అక్షరం ఉన్నాయి కాబట్టి g రెండుసార్లు వస్తుంది: bigger."],["This is ___ expensive than that. ఖాళీలో ఏది సరిపోతుంది?",["more","most","much","very"],0,"పెద్ద పదాల comparative కి ముందు more."],["good కి superlative ఏది?",["the goodest","the most good","the better","the best"],3,"good, better, the best: ఇది ఇర్రెగ్యులర్ పోలిక."]],
practice:[
["mc","cheap కి comparative ఏది?","cheaper","more cheap","cheapper","most cheap","చిన్న పదాలకు -er వస్తుంది."],
["mc","\"ఇది ఇంకా ఖరీదు\" ఇంగ్లీష్‌లో?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","పెద్ద పదాలకు ముందు more."],
["mc","\"ఇంకా పెద్ద సైజు ఉందా?\" ఇంగ్లీష్‌లో?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","వరుస: ఆర్టికల్ + విశేషణం + నామవాచకం."],
["mc","good కి comparative ఏది?","better","gooder","more good","best","good, better, best: ఇది ఇర్రెగ్యులర్ పోలిక."],
["mc","\"ఇక్కడ అన్నిటికంటే మంచి రెస్టారెంట్ ఇదే\" ఇంగ్లీష్‌లో?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","superlative ముందు the వస్తుంది."],
["or","ఇంకా పెద్ద సైజు ఉందా?","Do you have a bigger size","the sizes","ఏదైనా ఒక సైజు కోసం అడుగుతున్నాం కాబట్టి ఆర్టికల్ a."],
["or","ఇదే అన్నిటికంటే చవక","This is the cheapest","a cheaper","superlative ముందు ఆర్టికల్ the వస్తుంది."],
["or","ఇది దానికంటే చవక","This is cheaper than that","more","-er ఉన్న విశేషణానికి more చేర్చకూడదు."],
["fi","It's __ small.","ఇది మరీ చిన్నది","too","much|more|most","\"మరీ\" అనడానికి too."],
["fi","This is cheaper __ that one.","ఇది దానికంటే చవక","than","then|that|more","\"కంటే\" = than."],
["fi","It's the __ expensive one.","అన్నిటికంటే ఖరీదైనది ఇదే","most","more|much|very","పెద్ద పదాల superlative కి the most."],
["ty","ఇంకా చిన్న సైజు ఉందా?","Do you have a smaller size","smaller · size: ఆర్టికల్ a","the","ఏదైనా ఒక సైజు కోసం అడుగుతున్నాం కాబట్టి ఆర్టికల్ a."],
["ty","ఇదే అన్నిటికంటే మంచిది","This is the best|This one is the best","the · best: ఆర్టికల్ the","a","superlative ముందు ఆర్టికల్ the వస్తుంది."],
["ty","ఇది ఇంకా చవక","This is cheaper|This one is cheaper","cheap: comparative","more","చిన్న పదాలకు -er వస్తుంది."]]},
{ id:"going-to", title:"ప్లాన్ చెప్పడం: be going to", blurb:"ముందే అనుకున్న పనికి be going to + V1.", deck:"సరదా కబుర్లు", body:`
<p>"వెళ్ళబోతున్నాను", "కొనాలనుకుంటున్నాను" లాగా <b>ముందే నిర్ణయించుకున్న ప్లాన్</b> చెప్పడానికి వాడతారు. నమూనా: <b>be + going to + V1</b>.</p>
{{ex:I'm going to visit Vizag.|ఐమ్ ˈగోఇఙ్ ట ˈవ఼ిజ఼ిట్ ˈవ఼ైజ఼్యాగ్|నేను వైజాగ్ వెళ్ళబోతున్నాను}}{{ex:She's going to buy a car.|షిజ఼్ ˈగోఇఙ్ ట బై అ కార్|ఆమె కారు కొనబోతోంది}}{{ex:We're going to have dinner.|విర్ ˈగోఇఙ్ ట హ్యావ఼్ ˈడినర్|మేము డిన్నర్ చేయబోతున్నాం}}
<h3>వ్యతిరేక వాక్యం, ప్రశ్న</h3>
{{ex:I'm not going to go.|ఐమ్ నాట్ ˈగోఇఙ్ ట గో|నేను వెళ్ళడం లేదు}}{{ex:Are you going to come?|అర్ యు ˈగోఇఙ్ ట కమ్|నువ్వు వస్తున్నావా?}}{{ex:What are you going to do this weekend?|వట్ అర్ యు ˈగోఇఙ్ ట డూ ద఼ిస్ ˈవీకెండ్|ఈ వీకెండ్ ఏం చేయబోతున్నావు?}}
<h3>కనిపిస్తున్నదాన్ని బట్టి ఊహించినప్పుడు కూడా</h3>
{{ex:It's going to rain.|ఇట్స్ ˈగోఇఙ్ ట రేన్|వర్షం పడేలా ఉంది}}
<h3>కలిసి వచ్చే సమయ పదాలు</h3>
<p>tomorrow (రేపు), tonight (ఈ రాత్రి), this weekend (ఈ వీకెండ్), next week (వచ్చే వారం) వాక్యం చివర వస్తాయి.</p>
<div class="tip">మాట్లాడేటప్పుడు going to అనేది <b>gonna</b> లాగా వినిపిస్తుంది. be ను వదిలేయకండి: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["\"రేపు నా స్నేహితుడిని కలవబోతున్నాను\" ఇంగ్లీష్‌లో?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"నమూనా: be + going to + V1."],["She ___ going to study. ఖాళీలో ఏది సరిపోతుంది?",["am","are","is","be"],2,"she తో is."],["\"ఈ వీకెండ్ ఏం చేయబోతున్నావు?\" ఇంగ్లీష్‌లో?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"వరుస: wh- పదం + be + కర్త + going to."]],
practice:[
["mc","\"నేను బూసాన్ వెళ్ళబోతున్నాను\" ఇంగ్లీష్‌లో?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","నమూనా: be + going to + V1."],
["mc","They ___ going to come.","are","is","am","be","they తో are."],
["mc","\"వర్షం పడేలా ఉంది\" ఇంగ్లీష్‌లో?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to తర్వాత V1 వస్తుంది."],
["mc","\"నేను వెళ్ళడం లేదు\" (ప్లాన్) ఇంగ్లీష్‌లో?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be తర్వాత not వస్తుంది."],
["mc","\"నువ్వు వస్తున్నావా?\" (ప్లాన్) ఇంగ్లీష్‌లో?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","ప్రశ్నలో be ముందుకు వస్తుంది."],
["or","ఆమె కారు కొనబోతోంది","She's going to buy a car","the cars","ఒక కారు కాబట్టి ఆర్టికల్ a, ఏకవచనం car."],
["or","నేను నా స్నేహితులను కలవబోతున్నాను","I'm going to meet my friends","friend","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."],
["or","మేము డిన్నర్ చేయబోతున్నాం","We're going to have dinner","a","భోజనం పేరు dinner ముందు ఆర్టికల్ రాదు."],
["fi","I'm going __ study tonight.","ఈ రాత్రి నేను చదవబోతున్నాను","to","for|at|will","నమూనా: going to + V1."],
["fi","__ you going to come?","నువ్వు వస్తున్నావా?","Are","Do|Is|Will","you తో Are."],
["fi","It's going to __ tomorrow.","రేపు వర్షం పడేలా ఉంది","rain","rains|raining|rained","going to తర్వాత V1 వస్తుంది."],
["ty","నేను ఒక సినిమా చూడబోతున్నాను","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie: ఆర్టికల్ a","the","ఏదో ఒక సినిమా కాబట్టి ఆర్టికల్ a."],
["ty","మీరు ఏం చేయబోతున్నారు?","What are you going to do","what · going to · do","will","ప్లాన్ గురించి అడగడానికి be going to."],
["ty","నేను నా స్నేహితులను కలవబోతున్నాను","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend: బహువచనం","friend","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం friends."]]},
{ id:"joining", title:"వాక్యాలు కలపడం: and, but, or, so, because", blurb:"రెండు చిన్న వాక్యాలను ఒకటిగా చేయండి. so ముందు కారణం, because తర్వాత కారణం.", deck:"భావాలు, స్పందనలు", body:`
<p>చిన్న చిన్న వాక్యాలే చెబితే మాట తెగిపోతున్నట్టు ఉంటుంది. ఈ ఐదు కలిపే పదాలతో వాక్యాలు సహజంగా వినిపిస్తాయి.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|ఐ లైక్ ˈకాఫి అండ్ టీ|నాకు కాఫీ, టీ ఇష్టం}}{{ex:I'm tired but happy.|ఐమ్ ˈటైఅర్డ్ బట్ ˈహ్యాపి|అలసిపోయాను కానీ సంతోషంగా ఉన్నాను}}{{ex:Coffee or tea?|ˈకాఫి అర్ టీ|కాఫీనా, టీనా?}}
<h3>so: కాబట్టి</h3>
<p>వరుస: <b>కారణం + so + ఫలితం</b>. తెలుగు "కాబట్టి" లాగే.</p>
{{ex:I was tired, so I went home.|ఐ వజ఼్ ˈటైఅర్డ్ సో ఐ వెంట్ హోమ్|అలసిపోయాను, కాబట్టి ఇంటికి వెళ్ళాను}}
<h3>because: ఎందుకంటే</h3>
<p>వరుస: <b>ఫలితం + because + కారణం</b>. because తర్వాత పూర్తి వాక్యం వస్తుంది. నామవాచకం ముందు అయితే <b>because of</b>: because of the rain.</p>
{{ex:I went home because I was tired.|ఐ వెంట్ హోమ్ బికజ఼్ ఐ వజ఼్ ˈటైఅర్డ్|అలసిపోయాను కాబట్టి ఇంటికి వెళ్ళాను}}{{ex:I stayed home because it was raining.|ఐ స్టేడ్ హోమ్ బికజ఼్ ఇట్ వజ఼్ ˈరేనిఙ్|వర్షం పడుతోంది కాబట్టి ఇంట్లోనే ఉన్నాను}}
<h3>too: కూడా</h3>
{{ex:I like it too.|ఐ లైక్ ఇట్ టూ|నాకు కూడా ఇష్టం}}
<div class="tip">తెలుగులో "ఎందుకంటే … కాబట్టి", "అయినా … కానీ" జంటగా వస్తాయి. ఇంగ్లీష్‌లో ఒక్కటే చాలు: <b>Because I was tired, so I went home.</b> ✗, <b>Although it was late, but I went.</b> ✗. రెండిట్లో ఒకటి ఎంచుకోండి.</div>`,
check:[["I was sick, ___ I stayed home. ఖాళీలో ఏది సరిపోతుంది?",["because","but","so","or"],2,"కారణం తర్వాత ఫలితం వస్తే so."],["I stayed home ___ I was sick. ఖాళీలో ఏది సరిపోతుంది?",["because","so","but","and"],0,"ఫలితం తర్వాత కారణం వస్తే because."],["\"కాఫీ తీసుకుంటారా, టీ తీసుకుంటారా?\" అని అడగడానికి ఏది సరైనది?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"రెండిట్లో ఒకటి ఎంచుకోమనడానికి or."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","వ్యతిరేకంగా ఉన్న రెండు విషయాలను but కలుపుతుంది."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","కారణం తర్వాత ఫలితం వస్తే so."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","ఫలితం తర్వాత కారణం వస్తే because."],
["mc","\"కాఫీనా, టీనా?\" ఇంగ్లీష్‌లో?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","రెండిట్లో ఒకటి అనడానికి or."],
["mc","\"అలసిపోయాను కానీ సంతోషంగా ఉన్నాను\" ఇంగ్లీష్‌లో?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","\"కానీ\" = but."],
["or","నాకు పిల్లులు, కుక్కలు ఇష్టం","I like cats and dogs","cat dog","ఆ జంతువులన్నిటి గురించి చెప్పేటప్పుడు బహువచనం: cats, dogs."],
["or","ఒక కాఫీ, ఒక శాండ్‌విచ్ ఇవ్వండి","A coffee and a sandwich please","the or","ఒక్కొక్కటి ఆర్డర్ చేస్తున్నాం కాబట్టి రెండిటికీ ఆర్టికల్ a."],
["or","ఆకలిగా ఉంది కాబట్టి తిన్నాను","I was hungry so I ate","because","కారణం తర్వాత ఫలితం వస్తే so."],
["fi","I'm tired __ happy.","అలసిపోయాను కానీ సంతోషంగా ఉన్నాను","but","so|because|or","\"కానీ\" = but."],
["fi","I stayed home __ it was raining.","వర్షం పడుతోంది కాబట్టి ఇంట్లోనే ఉన్నాను","because","so|but|or","ఫలితం తర్వాత కారణం వస్తే because."],
["fi","Coffee __ tea?","కాఫీనా, టీనా?","or","so|but|because","రెండిట్లో ఒకటి అనడానికి or."],
["ty","నాకు కాఫీ, టీ ఇష్టం","I like coffee and tea","like · coffee · and · tea: ఆర్టికల్ లేకుండా","a","సాధారణంగా చెప్పే coffee, tea ముందు ఆర్టికల్ రాదు."],
["ty","అలసిపోయాను కానీ సంతోషంగా ఉన్నాను","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","\"కానీ\" = but."],
["ty","నాకు కుక్కలు, పిల్లులు ఇష్టం","I like dogs and cats|I like cats and dogs","dog · and · cat: బహువచనం","dog","ఆ జంతువులన్నిటి గురించి చెప్పేటప్పుడు బహువచనం: dogs, cats."]]},
{ id:"indian-english", title:"ఇండియన్ ఇంగ్లీష్: ఇక్కడ సరే, విదేశాల్లో వింత", blurb:"prepone, out of station, good name: ఇండియాలో అందరికీ అర్థమవుతాయి. విదేశాల్లో ఏమంటారో తెలుసుకోండి.", deck:"ఇండియన్ ఇంగ్లీష్: ఇక్కడ, విదేశాల్లో", body:`
<p>అమెరికన్ ఇంగ్లీష్, బ్రిటిష్ ఇంగ్లీష్ లాగే ఇండియన్ ఇంగ్లీష్ కూడా ఇంగ్లీష్‌లో ఒక నిజమైన రకం. దాని మాటలు ఇండియాలో అందరికీ అర్థమవుతాయి. ఇక్కడి సహోద్యోగులతో వాటిని ధైర్యంగా వాడండి. కానీ విదేశాల్లో, లేదా విదేశీ క్లయింట్‌తో మాట్లాడేటప్పుడు కొన్ని మాటలు అవతలివారికి అర్థం కాకపోవచ్చు. అక్కడ ఏ మాటలు వినిపిస్తాయో ఈ పాఠం చెబుతుంది.</p>
<h3>ఇండియాలో సరే, విదేశాల్లో ఇలా చెప్పండి</h3>
<div class="tbl"><table><tr><th>ఇండియాలో</th><th>విదేశాల్లో</th></tr><tr><td>prepone</td><td class="k">move up / bring forward</td></tr><tr><td>out of station</td><td class="k">out of town</td></tr><tr><td>What is your good name?</td><td class="k">What's your name?</td></tr><tr><td>cousin brother / cousin sister</td><td class="k">cousin</td></tr><tr><td>passed out (చదువు పూర్తి చేయడం)</td><td class="k">graduated</td></tr><tr><td>revert (జవాబు ఇవ్వడం)</td><td class="k">get back to you / reply</td></tr><tr><td>do the needful · kindly + పని</td><td class="k">please take care of it · could you please …</td></tr><tr><td>kindly adjust</td><td class="k">sorry for the trouble</td></tr><tr><td>hotel (భోజనం చేసే చోటు) · tiffin</td><td class="k">restaurant · breakfast / a snack</td></tr><tr><td>petrol bunk · brinjal</td><td class="k">gas station · eggplant</td></tr><tr><td>I have a doubt. (ప్రశ్న అడగడానికి)</td><td class="k">I have a question.</td></tr><tr><td>today itself · now only · and all</td><td class="k">today · right now · and so on</td></tr></table></div>
<p>కొన్ని మాటలకు విదేశాల్లో వేరే అర్థం వస్తుంది: <b>passed out</b> అంటే అక్కడ "స్పృహ తప్పి పడిపోయాడు", <b>revert</b> అంటే "పాత స్థితికి తిరిగి వెళ్ళడం", <b>hotel</b> అంటే బస చేసే చోటు, <b>doubt</b> అంటే "అనుమానం". prepone అనే మాటను అక్కడ చాలామంది విని ఉండరు.</p>
{{ex:Can we move the meeting up?|కన్ వి మూవ఼్ ద఼ ˈమీటిఙ్ అప్|మీటింగ్ ముందుకు జరపగలమా?}}{{ex:I'm out of town this week.|ఐమ్ ఔట్ అవ఼్ టౌన్ ద఼ిస్ వీక్|నేను ఈ వారం ఊళ్ళో లేను}}{{ex:I graduated in 2019.|ఐ ˈగ్ర్యాజుఏటిడ్ ఇన్ ˈట్వెంటి నైంˈటీన్|నేను 2019 లో డిగ్రీ పూర్తి చేశాను}}{{ex:I moved here five years ago.|ఐ మూవ఼్డ్ హిర్ ఫైవ఼్ యిర్జ఼్ అˈగో|నేను ఐదేళ్ళ క్రితం ఇక్కడికి వచ్చాను}}
<h3>మాటల్లో వినిపిస్తాయి, కానీ రాతలో వద్దు</h3>
<p>ఈ కింది మాటలు ఇండియాలో రోజూ వినిపిస్తాయి, అందరికీ అర్థమవుతాయి. కానీ పరీక్షల్లో, ఫార్మల్ రాతలో ఇక్కడ కూడా వీటిని తప్పుగా లెక్కిస్తారు; విదేశాల్లో వింతగా వినిపిస్తాయి. discuss లోనే "గురించి" అనే అర్థం ఉంది కాబట్టి about రాదు.</p>
<div class="tbl"><table><tr><th>ఇండియాలో వినిపించేది</th><th>ప్రామాణిక ఇంగ్లీష్</th></tr><tr><td>Myself Ravi.</td><td class="k">I'm Ravi. / My name is Ravi.</td></tr><tr><td>discuss about the plan</td><td class="k">discuss the plan</td></tr><tr><td>revert back</td><td class="k">get back to you</td></tr><tr><td>cope up with the work</td><td class="k">cope with the work</td></tr><tr><td>more better</td><td class="k">better</td></tr><tr><td>You are coming, isn't it?</td><td class="k">You're coming, aren't you?</td></tr></table></div>
{{ex:Hi, I'm Ravi.|హై ఐమ్ ˈరావ఼ి|హాయ్, నేను రవిని}}{{ex:Let's discuss the plan.|లెట్స్ డిˈస్కస్ ద఼ ప్ల్యాన్|ప్లాన్ గురించి మాట్లాడుకుందాం}}{{ex:I have a question.|ఐ హ్యావ఼్ అ ˈక్వెస్చన్|నాకు ఒక ప్రశ్న ఉంది}}
<h3>తెలుగు నుంచి నేరుగా వచ్చినవి</h3>
<div class="tbl"><table><tr><th>తెలుగు</th><th>నేరుగా అనువాదం</th><th>విదేశాల్లో</th></tr><tr><td>మీరు ఎక్కడ ఉంటారు?</td><td>Where do you stay?</td><td class="k">Where do you live?</td></tr><tr><td>వెళ్ళొస్తాను</td><td>I'll go and come.</td><td class="k">I'll be right back. / See you later.</td></tr><tr><td>ఒక కాఫీ</td><td>one coffee</td><td class="k">a coffee</td></tr><tr><td>సొంత ఊరు</td><td>native place</td><td class="k">hometown</td></tr><tr><td>ఊరికే</td><td>simply</td><td class="k">for no reason</td></tr><tr><td>ఐదేళ్ళ ముందు</td><td>before five years</td><td class="k">five years ago</td></tr></table></div>
<p>తెలుగులో "ఉండు" అనే ఒక్క క్రియకు ఇంగ్లీష్‌లో stay, live, be మూడూ వస్తాయి. ఇల్లు ఎక్కడ అని అడగడానికి విదేశాల్లో live వాడతారు. stay అంటే కొద్ది రోజుల బస.</p>
{{ex:Where do you live?|వెర్ డ యు లివ఼్|మీరు ఎక్కడ ఉంటారు?}}{{ex:I'll be right back.|ఐల్ బి రైట్ బ్యాక్|ఇప్పుడే వస్తాను}}{{ex:I'm from Vijayawada.|ఐమ్ ఫ్రమ్ వ఼ిజయˈవాడ|మాది విజయవాడ}}
<div class="tip">ఇండియన్ ఇంగ్లీష్ గురించి సిగ్గుపడాల్సిన పని లేదు. వినేవారిని బట్టి మాట ఎంచుకోండి: ఇక్కడి టీమ్‌తో <b>out of station</b>, విదేశీ క్లయింట్‌తో <b>out of town</b>.</div>`,
check:[["విదేశీ క్లయింట్‌తో మీటింగ్ ముందుకు జరపమని అడగడానికి ఏది సరైనది?",["Can we prepone the meeting?","Can we move the meeting up?","Can we before the meeting?","Can we early the meeting?"],1,"prepone ఇండియాలో వాడతారు, విదేశాల్లో చాలామందికి తెలియదు: move up లేదా bring forward."],["\"నాకు ఒక ప్రశ్న ఉంది\" అని విదేశాల్లో స్పష్టంగా చెప్పే వాక్యం ఏది?",["I have one doubt.","I have a doubt.","I have doubt.","I have a question."],3,"doubt అంటే అనుమానం. ప్రశ్నకు question, ఒక ప్రశ్న కాబట్టి ఆర్టికల్ a."],["\"ఇప్పుడే వెళ్ళొస్తాను\" అని విదేశాల్లో ఎలా చెబుతారు?",["I'll be right back.","I'll go and come.","I'll go and I come.","I go come."],0,"I'll go and come తెలుగు \"వెళ్ళొస్తాను\" నుంచి వచ్చింది. విదేశాల్లో I'll be right back."]],
practice:[
["mc","\"మీ పేరు ఏమిటి?\" అని విదేశాల్లో ఎలా అడుగుతారు?","What's your name?","What is your good name?","What is you name?","Your name is what?","good name ఇండియాలో వాడతారు. విదేశాల్లో What's your name? చాలు."],
["mc","\"నేను ఈ వారం ఊళ్ళో లేను\" విదేశాల్లో?","I'm out of town this week.","I'm out of station this week.","I'm out of the town this week.","I'm outside city this week.","out of station ఇండియాలో వాడతారు. విదేశాల్లో out of town."],
["mc","\"నేను 2019 లో డిగ్రీ పూర్తి చేశాను\" విదేశాల్లో?","I graduated in 2019.","I passed out in 2019.","I was passed out in 2019.","I graduated on 2019.","విదేశాల్లో passed out అంటే \"స్పృహ తప్పి పడిపోయాను\". చదువు పూర్తయితే graduated."],
["mc","మిమ్మల్ని మీరు పరిచయం చేసుకోవడానికి సరైన వాక్యం ఏది?","I'm Ravi.","Myself Ravi.","Myself is Ravi.","I am myself Ravi.","Myself Ravi ఇండియాలో వినిపిస్తుంది, కానీ ప్రామాణిక ఇంగ్లీష్ కాదు: I'm Ravi లేదా My name is Ravi."],
["mc","\"మీరు ఎక్కడ ఉంటారు?\" (ఇల్లు ఎక్కడ) అని విదేశాల్లో ఎలా అడుగుతారు?","Where do you live?","Where do you stay?","Where you live?","Where are you live?","stay అంటే విదేశాల్లో కొద్ది రోజుల బస. ఇల్లు ఎక్కడ అని అడగడానికి live."],
["or","నేను ఒక ప్రశ్న అడగవచ్చా?","Can I ask a question","doubt the","doubt అంటే అనుమానం. ప్రశ్నకు question, ఒక ప్రశ్న కాబట్టి ఆర్టికల్ a."],
["or","నేను ఈ వారం ఊళ్ళో లేను","I'm out of town this week","station the","out of station ఇండియాలో వాడతారు. విదేశాల్లో out of town. town ముందు ఆర్టికల్ రాదు."],
["or","దాన్ని (మీటింగ్‌ని) ముందుకు జరుపుదాం","Let's move it up","early before","prepone విదేశాల్లో అర్థం కాకపోవచ్చు: move up. it లాంటి సర్వనామం move, up మధ్యలో వస్తుంది: move it up."],
["or","ప్లాన్ గురించి మాట్లాడుకుందాం","Let's discuss the plan","about","discuss తో about రాదు. discuss అంటేనే \"దాని గురించి మాట్లాడటం\"."],
["fi","I'll get __ to you tomorrow.","నేను రేపు మీకు జవాబు ఇస్తాను (విదేశాల్లో)","back","revert|reply|return","revert ఇండియాలో వాడతారు. విదేశాల్లో I'll get back to you."],
["fi","She's my __.","ఆమె నా కజిన్ (విదేశాల్లో)","cousin","cousin sister|sister cousin|real cousin","cousin sister ఇండియాలో వాడతారు. విదేశాల్లో cousin ఒక్కటే చాలు."],
["fi","I moved to Hyderabad five years __.","నేను ఐదేళ్ళ క్రితం హైదరాబాద్ వచ్చాను","ago","before|since|from","\"ఐదేళ్ళ క్రితం\" = five years ago. before five years, since five years తెలుగు నుంచి నేరుగా వచ్చినవి; ఇక్కడ రావు."],
["ty","నాకు కొంచెం సలహా కావాలి","I need some advice|I need advice|I want some advice|I'd like some advice","need · advice: లెక్కించలేని నామవాచకం","advices","advice లెక్కించలేని నామవాచకం: advices అనే బహువచనం లేదు."],
["ty","నాకు రిపోర్ట్ పంపగలరా?","Could you send me the report|Can you send me the report|Could you please send me the report|Can you please send me the report|Please send me the report|Can you send me the report please|Could you send me the report please|Can you send the report to me|Could you send the report to me","could you · send · report: ఆర్టికల్ the","a","ఏ రిపోర్టో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the. Kindly కూడా అర్థమవుతుంది, కానీ విదేశాల్లో please లేదా Could you ఎక్కువగా వినిపిస్తాయి."],
["ty","దగ్గర్లో మంచి రెస్టారెంట్ ఉందా?","Is there a good restaurant near here|Is there a good restaurant nearby|Is there a good restaurant around here","is there · good · restaurant: ఆర్టికల్ a","hotel","భోజనం చేసే చోటు restaurant. hotel అంటే బస చేసే చోటు. ఏదైనా ఒకటి కాబట్టి ఆర్టికల్ a."],
["ty","మీరు ఎక్కడ ఉంటారు? (ఇల్లు ఎక్కడ)","Where do you live","where · do · live","stay","ఇల్లు ఎక్కడ అని అడగడానికి విదేశాల్లో live వాడతారు. ప్రశ్నలో సహాయక క్రియ do ముందు వస్తుంది."]]},
];
