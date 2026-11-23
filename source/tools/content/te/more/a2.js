/* te-en stage A2: new lessons. English side shared with ko-en (parity.js), plus the te-only lesson question-tags; shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past Continuous: అప్పుడు జరుగుతూ ఉన్న పని (was / were + -ing)", blurb:"గతంలో ఆ సమయానికి జరుగుతూ ఉన్న పని. కథకు నేపథ్యం ఇదే.", deck:"భావాలు, స్పందనలు", body:`
<p>గతంలో <b>ఒక సమయానికి జరుగుతూ ఉన్న పని</b> చెప్పడానికి Past Continuous. తెలుగులో "చేస్తున్నాను" అనే ఒకే రూపం ఇప్పటి పనికీ, అప్పటి పనికీ వస్తుంది ("నువ్వు ఫోన్ చేసినప్పుడు వంట చేస్తున్నాను"). ఇంగ్లీష్‌లో అప్పటి పనికి am / is / are బదులు <b>was / were</b> రావాలి.</p>
{{ex:I was sleeping.|ఐ వజ఼్ ˈస్లీపిఙ్|నేను అప్పుడు నిద్రపోతున్నాను}}{{ex:We were watching TV.|వి వర్ ˈవాచిఙ్ టీ వ఼ీ|మేము అప్పుడు టీవీ చూస్తున్నాం}}{{ex:It was raining.|ఇట్ వజ఼్ ˈరేనిఙ్|అప్పుడు వర్షం పడుతోంది}}
<h3>ప్రశ్నలు</h3>
{{ex:What were you doing?|వట్ వర్ యు ˈడూఇఙ్|నువ్వు అప్పుడు ఏం చేస్తున్నావు?}}{{ex:Were you working at nine?|వర్ యు ˈవర్కిఙ్ అట్ నైన్|9 గంటలకు మీరు పని చేస్తున్నారా?}}
<h3>when తో: ఒక పని జరుగుతుండగా ఇంకొకటి జరిగింది</h3>
<p>ఎక్కువ సేపు జరుగుతూ ఉన్న పనికి <b>Past Continuous</b>, మధ్యలో జరిగిన చిన్న పనికి <b>Simple Past</b>.</p>
{{ex:I was cooking when you called.|ఐ వజ఼్ ˈకుకిఙ్ వెన్ యు కాల్డ్|నువ్వు ఫోన్ చేసినప్పుడు నేను వంట చేస్తున్నాను}}{{ex:I was walking home when it started to rain.|ఐ వజ఼్ ˈవాకిఙ్ హోమ్ వెన్ ఇట్ ˈస్టార్టిడ్ ట రేన్|నేను ఇంటికి నడిచి వెళ్తుండగా వర్షం మొదలైంది}}
<div class="tip">రెండు చోట్లా Simple Past వాడితే అర్థం మారుతుంది: <b>I cooked when you called.</b> అంటే "నువ్వు ఫోన్ చేశాక వంట మొదలుపెట్టాను". ఇంకో తప్పు: <b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓ తెలుగులో ఒకే మాట, ఇంగ్లీష్‌లో was / were, -ing రెండూ కావాలి.</div>`,
check:[["\"నిన్న 9 గంటలకు నువ్వు ఏం చేస్తున్నావు?\" ఇంగ్లీష్‌లో?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"you తో were, తర్వాత -ing రూపం."],["I was cooking ___ you called. ఖాళీలో ఏది సరిపోతుంది?",["when","so","or","than"],0,"\"చేసినప్పుడు\" = when."],["They ___ watching TV. ఖాళీలో ఏది సరిపోతుంది?",["was","did","were","are being"],2,"they తో were."]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","I తో was."],
["mc","\"నువ్వు ఫోన్ చేసినప్పుడు నేను వంట చేస్తున్నాను\" ఇంగ్లీష్‌లో?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","జరుగుతూ ఉన్న పనికి Past Continuous, మధ్యలో జరిగిన పనికి Simple Past."],
["mc","\"నువ్వు అప్పుడు ఏం చేస్తున్నావు?\" ఇంగ్లీష్‌లో?","What were you doing?","What did you doing?","What was you doing?","What were you do?","you తో were, తర్వాత -ing రూపం."],
["mc","They ___ playing soccer.","were","was","did","are","they తో were."],
["mc","\"అప్పుడు వర్షం పడుతోంది\" ఇంగ్లీష్‌లో?","It was raining.","It were raining.","It was rain.","It rained was.","it తో was, తర్వాత -ing రూపం."],
["or","నేను అప్పుడు ఒక పుస్తకం చదువుతున్నాను","I was reading a book","read books","చదువుతున్నది ఒక పుస్తకం కాబట్టి ఆర్టికల్ a, ఏకవచనం book."],
["or","పిల్లలు అప్పుడు నిద్రపోతున్నారు","The kids were sleeping","kid was","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం kids, దానితో were."],
["or","మేము అప్పుడు టీవీ చూస్తున్నాం","We were watching TV","was","we తో were."],
["fi","I was __ dinner.","నేను అప్పుడు రాత్రి భోజనం వండుతున్నాను","cooking|making","cook|cooked|cooks","was తర్వాత -ing రూపం."],
["fi","What __ you doing?","నువ్వు అప్పుడు ఏం చేస్తున్నావు?","were","was|did|does","you తో were."],
["fi","I was sleeping __ you called.","నువ్వు ఫోన్ చేసినప్పుడు నేను నిద్రపోతున్నాను","when","so|than|or","\"చేసినప్పుడు\" = when."],
["ty","నేను పని చేస్తున్నాను (Past Continuous లో)","I was working","was · work + -ing","were","I తో was, తర్వాత -ing రూపం."],
["ty","నేను ఒక సినిమా చూస్తున్నాను (Past Continuous లో)","I was watching a movie","was · watching · movie (ఆర్టికల్ a)","the","ఏదో ఒక సినిమా కాబట్టి ఆర్టికల్ a."],
["ty","పిల్లలు ఆడుకుంటున్నారు (Past Continuous లో)","The kids were playing|The children were playing","kids · were · playing (బహువచనం)","kid","ఒకరి కంటే ఎక్కువ మంది కాబట్టి బహువచనం kids, దానితో were."]]},
{ id:"will", title:"will: ఇప్పుడే తీసుకున్న నిర్ణయం, మాట ఇవ్వడం, అంచనా", blurb:"అక్కడికక్కడే నిర్ణయిస్తే will. అలవాటుకు will కాదు, Simple Present.", deck:"సరదా కబుర్లు", body:`
<p><b>will + V1</b>. మాట్లాడేటప్పుడు దాదాపు ఎప్పుడూ <b>I'll, you'll, it'll</b> అని కుదిస్తారు. వ్యతిరేక రూపం <b>won't</b>.</p>
<h3>ఇప్పుడే నిర్ణయించుకున్నప్పుడు</h3>
{{ex:I'll have the pasta.|ఐల్ హ్యావ఼్ ద఼ ˈపాస్ట|నేను పాస్తా తీసుకుంటాను}}{{ex:I'll get it.|ఐల్ గెట్ ఇట్|నేను చూస్తాను (ఫోన్ మోగినప్పుడు, ఎవరైనా తలుపు కొట్టినప్పుడు)}}
<h3>మాట ఇవ్వడం, సహాయం చేస్తాననడం</h3>
{{ex:I'll help you.|ఐల్ హెల్ప్ యు|నేను నీకు సహాయం చేస్తాను}}{{ex:I'll call you later.|ఐల్ కాల్ యు ˈలేటర్|నేను నీకు తర్వాత ఫోన్ చేస్తాను}}{{ex:I won't be late.|ఐ వోంట్ బి లేట్|నేను ఆలస్యం చేయను}}
<h3>అంచనా</h3>
{{ex:It'll be fine.|ˈఇటల్ బి ఫైన్|అంతా బాగానే ఉంటుంది}}{{ex:I think it will rain.|ఐ థ఼ింక్ ఇట్ వల్ రేన్|వర్షం పడుతుందని అనుకుంటున్నాను}}
<h3>అలవాటుకు will కాదు</h3>
<p>తెలుగులో "వెళ్తాను" అనే ఒకే రూపం అలవాటుకూ, భవిష్యత్తుకూ వస్తుంది. ఇంగ్లీష్‌లో ఇవి రెండు వేర్వేరు రూపాలు: అలవాటుకు <b>Simple Present</b>; ఇప్పుడే తీసుకున్న నిర్ణయానికి, ఇచ్చే మాటకు, అంచనాకు <b>will</b>.</p>
<div class="tbl"><table><tr><th>తెలుగు</th><th>ఇంగ్లీష్</th></tr><tr><td>"నేను రోజూ ఆఫీసుకి వెళ్తాను" (అలవాటు)</td><td class="k">I go to the office every day.</td></tr><tr><td>"నేను రేపు ఫోన్ చేస్తాను" (మాట)</td><td class="k">I'll call you tomorrow.</td></tr></table></div>
<p><b>I will go to office daily.</b> ✗ → <b>I go to the office every day.</b> ✓</p>
<h3>will, be going to</h3>
<div class="tbl"><table><tr><th></th><th>ఎప్పుడు</th><th>ఉదాహరణ</th></tr><tr><td class="k">will</td><td>ఇప్పుడే తీసుకున్న నిర్ణయం, మాట</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>ముందే వేసుకున్న ప్లాన్</td><td>I'm going to visit Vizag next month.</td></tr></table></div>
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will తర్వాత V1 మాత్రమే వస్తుంది.</div>`,
check:[["ఫోన్ మోగుతోంది. \"నేను చూస్తాను\" ఇంగ్లీష్‌లో?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"అక్కడికక్కడే తీసుకున్న నిర్ణయానికి will."],["I ___ be late. (నేను ఆలస్యం చేయను)",["won't","willn't","don't will","not will"],0,"will కి వ్యతిరేక రూపం won't."],["ముందే వేసుకున్న ప్లాన్ చెప్పే వాక్యం ఏది?",["I'll get the door.","I will to visit Goa.","I visit Goa will.","I'm going to visit Goa next month."],3,"ముందే వేసుకున్న ప్లాన్‌కు be going to."]],
practice:[
["mc","\"నేను నీకు సహాయం చేస్తాను\" ఇంగ్లీష్‌లో?","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will తర్వాత V1 వస్తుంది."],
["mc","రెస్టారెంట్‌లో ఇప్పుడే నిర్ణయించుకుని: \"నేను పాస్తా తీసుకుంటాను\" ఇంగ్లీష్‌లో?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","అక్కడికక్కడే తీసుకున్న నిర్ణయానికి will + V1."],
["mc","\"నేను ఆలస్యం చేయను\" ఇంగ్లీష్‌లో?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not కుదిస్తే won't. late విశేషణం కాబట్టి be కూడా కావాలి."],
["mc","\"నువ్వు వస్తావా?\" ఇంగ్లీష్‌లో?","Will you come?","Do you will come?","Will you coming?","Will come you?","ప్రశ్నలో Will, తర్వాత కర్త, తర్వాత V1."],
["mc","ముందే వేసుకున్న ప్లాన్ చెప్పే వాక్యం ఏది?","I'm going to visit Goa next month.","I'll get the door.","I visit Goa next month will.","I will to visit Goa.","ముందే వేసుకున్న ప్లాన్‌కు be going to."],
["or","నేను నీకు తర్వాత ఫోన్ చేస్తాను","I'll call you later","calling","will తర్వాత V1 వస్తుంది, -ing రూపం కాదు."],
["or","నేను ఒక కాఫీ తీసుకుంటాను","I'll have a coffee","the coffees","ఆర్డర్ చేసేది ఒక కప్పు కాబట్టి ఆర్టికల్ a. బహువచనం కాదు."],
["or","తలుపు నేను తీస్తాను","I'll open the door","a doors","ఇక్కడ ఉన్న ఆ తలుపే కాబట్టి ఆర్టికల్ the."],
["fi","I __ call you tomorrow.","నేను నీకు రేపు ఫోన్ చేస్తాను","will","am|going|do","మాట ఇచ్చేటప్పుడు will."],
["fi","I __ forget.","నేను మర్చిపోను","won't|will not","don't|not|willn't","will కి వ్యతిరేక రూపం won't."],
["fi","__ you help me?","నాకు సహాయం చేస్తారా?","Will|Can|Could|Would","Do|Are|Is","సహాయం అడగడానికి Will you…? (Can / Could / Would you…? కూడా సరే)."],
["ty","నేను నీకు సహాయం చేస్తాను","I'll help you|I'll help","I'll · help · you","helping","will తర్వాత V1 వస్తుంది."],
["ty","నేను ఒక సలాడ్ తీసుకుంటాను (have తో)","I'll have a salad|I'll have the salad","I'll have · salad (ఆర్టికల్ మర్చిపోకండి)","salads","ఆర్డర్ చేసేది ఒక సలాడ్ కాబట్టి ఆర్టికల్ a (మెనూలో ఉన్న ఆ సలాడ్ అయితే the). బహువచనం కాదు."],
["ty","తలుపు నేను మూస్తాను","I'll close the door|I'll shut the door","I'll · close · door (ఆర్టికల్ the)","a","ఇక్కడ ఉన్న ఆ తలుపే కాబట్టి ఆర్టికల్ the."]]},
{ id:"perfect", title:"Present Perfect: ఎప్పుడైనా చేశారా? (have + V3)", blurb:"have + V3 తో అనుభవం చెప్పండి. ఎప్పుడో చెబితే Simple Past.", deck:"ప్రయాణం (విమానాశ్రయం, హోటల్)", body:`
<p><b>have / has + V3</b> అంటే "ఇప్పటివరకు జీవితంలో ఎప్పుడైనా చేశాను" అని. <b>ఎప్పుడు</b> అనేది చెప్పరు. తెలుగులో "వెళ్ళాను" అనే ఒకే రూపం <b>I went</b> కీ, <b>I've been</b> కీ వస్తుంది. ఇంగ్లీష్‌లో ఈ రెండూ వేర్వేరు.</p>
{{ex:I've been to Japan.|ఐవ఼్ బిన్ ట జˈప్యాన్|నేను జపాన్ వెళ్ళి వచ్చాను}}{{ex:She has visited India twice.|షి హజ఼్ ˈవ఼ిజ఼ిటిడ్ ˈఇండిఅ ట్వైస్|ఆమె రెండుసార్లు ఇండియా వచ్చింది}}
<h3>ever, never</h3>
{{ex:Have you ever eaten sushi?|హవ఼్ యు ˈఎవ఼ర్ ˈఈటన్ ˈసూషి|మీరు ఎప్పుడైనా సుషీ తిన్నారా?}}{{ex:I've never seen it.|ఐవ఼్ ˈనెవ఼ర్ సీన్ ఇట్|నేను అది ఎప్పుడూ చూడలేదు}}
<p>జవాబు: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>ఎక్కువగా వాడే V3 రూపాలు</h3>
<div class="tbl"><table><tr><th>V1</th><th>V2</th><th>V3</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>ఎప్పుడో చెబితే Simple Past</h3>
<p>last year, yesterday, in 2020 లాగా ముగిసిన సమయం చెబితే Present Perfect రాదు.</p>
{{ex:I went to Japan last year.|ఐ వెంట్ ట జˈప్యాన్ ల్యాస్ట్ యిర్|నేను పోయిన సంవత్సరం జపాన్ వెళ్ళాను}}
<p><b>been to</b> = వెళ్ళి తిరిగి వచ్చారు. <b>gone to</b> = వెళ్ళారు, ఇంకా తిరిగి రాలేదు: <b>He's gone to Vizag.</b> అంటే అతను ఇప్పుడు ఇక్కడ లేడు.</p>
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>I have seen him yesterday.</b> ✗ → <b>I saw him yesterday.</b> ✓ <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["\"మీరు ఎప్పుడైనా జపాన్ వెళ్ళారా?\" ఇంగ్లీష్‌లో?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"అనుభవం అడగడానికి Have you ever + V3."],["I ___ never seen that movie. ఖాళీలో ఏది సరిపోతుంది?",["am","did","have","was"],2,"\"ఎప్పుడూ లేదు\" = have + never + V3."],["సరైన వాక్యం ఏది?",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"last year లాగా ముగిసిన సమయం ఉంటే Simple Past."]],
practice:[
["mc","\"నేను జపాన్ వెళ్ళి వచ్చాను\" (అనుభవం) ఇంగ్లీష్‌లో?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have తర్వాత V3 రూపం been."],
["mc","see కి V3 రూపం ఏది?","seen","saw","seed","seeing","మూడు రూపాలు: see, saw, seen."],
["mc","\"మీరు ఎప్పుడైనా బిర్యానీ తిన్నారా?\" ఇంగ్లీష్‌లో?","Have you ever eaten biryani?","Did you ever eaten biryani?","Have you ever ate biryani?","Do you have eaten biryani?","అనుభవం అడగడానికి Have you ever + V3."],
["mc","\"నేను అది ఎప్పుడూ చూడలేదు\" ఇంగ్లీష్‌లో?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","\"ఎప్పుడూ లేదు\" = have + never + V3."],
["mc","\"పోయిన సంవత్సరం\" అని ఉన్నప్పుడు సరైన వాక్యం ఏది?","I went to Goa last year.","I've been to Goa last year.","I have go to Goa last year.","I've went to Goa last year.","ముగిసిన సమయం చెబితే Simple Past."],
["or","నేను ఆ సినిమా చూశాను","I've seen the movie","a saw","ఇద్దరికీ తెలిసిన ఆ సినిమా కాబట్టి ఆర్టికల్ the."],
["or","నేను రెండుసార్లు జపాన్ వెళ్ళి వచ్చాను","I've been to Japan twice","went","have తర్వాత V3 రూపం been వస్తుంది."],
["or","నేను ఎప్పుడూ పామును చూడలేదు","I've never seen a snake","the snakes","ఏదో ఒక పాము అని అర్థం కాబట్టి ఆర్టికల్ a."],
["fi","Have you ever __ to Goa?","మీరు ఎప్పుడైనా గోవా వెళ్ళారా?","been","be|went|go","have తర్వాత V3 రూపం been."],
["fi","I've __ eaten that.","నేను అది ఎప్పుడూ తినలేదు","never","ever|no|not never","\"ఎప్పుడూ లేదు\" = never."],
["fi","She __ visited Japan twice.","ఆమె రెండుసార్లు జపాన్ వెళ్ళింది","has","have|is|did","she తో has."],
["ty","మీరు ఎప్పుడైనా జపాన్ వెళ్ళారా?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","అనుభవం అడగడానికి Have you ever been to …?"],
["ty","నేను ఆ పుస్తకం చదివాను (I've తో)","I've read the book|I've read that book","I've · read · book (ఆర్టికల్ the)","a","ఇద్దరికీ తెలిసిన ఆ పుస్తకం కాబట్టి ఆర్టికల్ the."],
["ty","నేను ఎప్పుడూ పిల్లిని పెంచలేదు (had తో)","I've never had a cat","never · had · cat (ఆర్టికల్ a)","the","ఏదో ఒక పిల్లి అని అర్థం కాబట్టి ఆర్టికల్ a."]]},
{ id:"modals", title:"have to, must, should, might: తప్పనిసరి, సలహా, అవకాశం", blurb:"తెలుగులో ఒకే \"వెళ్ళాలి\". ఇంగ్లీష్‌లో తప్పనిసరికి have to, సలహాకు should.", deck:"డాక్టర్, ఎమర్జెన్సీ", body:`
<p>తెలుగులో "వెళ్ళాలి" అనే ఒకే రూపం తప్పనిసరి పనికీ, సలహాకీ వస్తుంది. ఇంగ్లీష్ బలాన్ని బట్టి విడదీస్తుంది: <b>have to / must</b> (తప్పనిసరి), <b>should</b> (సలహా), <b>might</b> (జరగవచ్చు). వీటన్నిటి తర్వాత <b>V1</b> వస్తుంది.</p>
<h3>have to: చేయాలి (తప్పనిసరి)</h3>
<p>రోజువారీ మాటల్లో ఎక్కువగా వినిపించేది ఇదే. he / she / it తో <b>has to</b>.</p>
{{ex:I have to work tomorrow.|ఐ హ్యాఫ్ ట వర్క్ టˈమారో|నేను రేపు పని చేయాలి}}{{ex:She has to go now.|షి హ్యాస్ ట గో నౌ|ఆమె ఇప్పుడు వెళ్ళాలి}}
<h3>don't have to, must not ఒకటి కాదు</h3>
<div class="tbl"><table><tr><th>వాక్యం</th><th>అర్థం</th></tr><tr><td class="k">You don't have to come.</td><td>మీరు రావాల్సిన అవసరం లేదు (రాకపోయినా పర్వాలేదు)</td></tr><tr><td class="k">You must not smoke here.</td><td>ఇక్కడ పొగ తాగకూడదు (నిషేధం)</td></tr></table></div>
<p>"అవసరం లేదు" = don't have to. "కూడదు" = must not. <b>You must not come.</b> అంటే "మీరు రాకూడదు" అని అర్థం.</p>
<h3>should: చేస్తే మంచిది (సలహా)</h3>
{{ex:You should see a doctor.|యు షడ్ సీ అ ˈడాక్టర్|మీరు డాక్టర్‌కి చూపించుకుంటే మంచిది}}{{ex:You shouldn't worry.|యు ˈషుడంట్ ˈవరి|మీరు కంగారు పడకండి}}
<h3>might: జరగవచ్చు</h3>
{{ex:It might rain.|ఇట్ మైట్ రేన్|వర్షం పడవచ్చు}}{{ex:I might be late.|ఐ మైట్ బి లేట్|నాకు ఆలస్యం కావచ్చు}}
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓ మోడల్ తర్వాత V1: to రాదు, -s రాదు.</div>`,
check:[["\"మీరు రావాల్సిన అవసరం లేదు\" ఇంగ్లీష్‌లో?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"\"అవసరం లేదు\" = don't have to. must not అంటే \"కూడదు\"."],["సలహా ఇస్తున్నారు: You ___ see a doctor.",["might","have","should","must to"],2,"సలహాకు should + V1."],["She ___ to work today. ఖాళీలో ఏది సరిపోతుంది?",["have","must","should","has"],3,"she తో has to."]],
practice:[
["mc","\"నేను రేపు పని చేయాలి\" ఇంగ్లీష్‌లో?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","తప్పనిసరి పనికి have to + V1."],
["mc","\"మీరు రావాల్సిన అవసరం లేదు\" ఇంగ్లీష్‌లో?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","\"అవసరం లేదు\" = don't have to."],
["mc","\"మీరు డాక్టర్‌కి చూపించుకుంటే మంచిది\" ఇంగ్లీష్‌లో?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + V1. ఎవరో ఒక డాక్టర్ కాబట్టి ఆర్టికల్ a."],
["mc","\"వర్షం పడవచ్చు\" ఇంగ్లీష్‌లో?","It might rain.","It might rains.","It might to rain.","It mights rain.","జరగవచ్చు అని చెప్పడానికి might + V1."],
["mc","\"ఇక్కడ పొగ తాగకూడదు\" ఇంగ్లీష్‌లో?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","\"కూడదు\" (నిషేధం) = must not."],
["or","మీరు డాక్టర్‌కి చూపించుకుంటే మంచిది","You should see a doctor","the doctors","ఎవరో ఒక డాక్టర్ కాబట్టి ఆర్టికల్ a."],
["or","నేను ఇప్పుడు వెళ్ళాలి","I have to go now","going","have to తర్వాత V1 వస్తుంది."],
["or","మీరు టికెట్ కొనాలి","You have to buy a ticket","the tickets","ఒక టికెట్ కాబట్టి ఆర్టికల్ a, ఏకవచనం ticket."],
["fi","She __ to study tonight.","ఆమె ఈరోజు రాత్రి చదువుకోవాలి","has","have|must|should","she తో has to."],
["fi","You __ have to pay.","మీరు డబ్బు కట్టాల్సిన అవసరం లేదు","don't|do not","must not|not|aren't","\"అవసరం లేదు\" = don't have to."],
["fi","It __ rain tomorrow.","రేపు వర్షం పడవచ్చు","might|may|could","must to|has to|should to","జరగవచ్చు అని చెప్పడానికి might."],
["ty","నేను పని చేయాలి (తప్పనిసరి)","I have to work|I must work|I need to work","have to · work","should","తప్పనిసరి పనికి have to."],
["ty","మీరు డాక్టర్‌కి చూపించుకుంటే మంచిది","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor (ఆర్టికల్ a)","the","ఎవరో ఒక డాక్టర్ కాబట్టి ఆర్టికల్ a."],
["ty","టికెట్ కొనాలి (have to తో)","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket (ఆర్టికల్ a)","the","ఒక టికెట్ కాబట్టి ఆర్టికల్ a."]]},
{ id:"question-tags", title:"కదా? = isn't it? కాదు: question tags, ప్రశ్నల వరుస", blurb:"తెలుగులో ఒకే \"కదా?\". ఇంగ్లీష్‌లో tag వాక్యాన్ని బట్టి మారుతుంది.", deck:"తప్పనిసరి మాటలు 2", body:`
<p>తెలుగులో ఏ వాక్యం చివరైనా "కదా?" పెడితే సరిపోతుంది. ఇంగ్లీష్‌లో అలాంటి ఒకే మాట లేదు: question tag వాక్యంలోని <b>సహాయక క్రియను, కర్తను</b> బట్టి మారుతుంది. అందుకే ప్రతి వాక్యం చివర <b>isn't it?</b> పెట్టడం తప్పు.</p>
<h3>tag ఎలా తయారవుతుంది</h3>
<p>మూడు అడుగులు: వాక్యంలోని సహాయక క్రియను (be, do, did, can, will, have) మళ్ళీ చెప్పండి; వాక్యంలో not లేకపోతే tag లో n't పెట్టండి, ఉంటే తీసేయండి; కర్తను సర్వనామంగా మార్చి చివర పెట్టండి. వాక్యంలో సహాయక క్రియ కనిపించకపోతే do / does / did వస్తుంది.</p>
{{ex:You're coming, aren't you?|యుర్ ˈకమిఙ్ ఆర్న్ట్ యు|నువ్వు వస్తున్నావు, కదా?}}{{ex:She doesn't know, does she?|షి ˈడజ఼ంట్ నో డజ఼్ షి|ఆమెకు తెలియదు, కదా?}}{{ex:They went home, didn't they?|ద఼ే వెంట్ హోమ్ ˈడిడంట్ ద఼ే|వాళ్ళు ఇంటికి వెళ్ళారు, కదా?}}{{ex:You can drive, can't you?|యు కన్ డ్రైవ఼్ క్యాంట్ యు|నీకు డ్రైవింగ్ వచ్చు, కదా?}}
<p><b>You are coming, isn't it?</b> ✗ → <b>You're coming, aren't you?</b> ✓ <b>isn't it?</b> వచ్చేది కర్త it / this / that (లేదా ఒక వస్తువు పేరు), క్రియ is అయినప్పుడు మాత్రమే:</p>
{{ex:It's a nice day, isn't it?|ఇట్స్ అ నైస్ డే ˈఇజ఼ంట్ ఇట్|ఈరోజు వాతావరణం బాగుంది, కదా?}}
<p>ఒక్క మినహాయింపు: <b>I am</b> కి tag <b>aren't I?</b> (amn't I? అనరు).</p>{{ex:I'm late, aren't I?|ఐమ్ లేట్ ఆర్న్ట్ ఐ|నేను లేట్ అయ్యాను, కదా?}}
<h3>గుర్తు రాకపోతే right?</h3>
<p><b>right?</b> ఏ వాక్యం తర్వాతైనా సరిపోతుంది, స్నేహంగా వినిపిస్తుంది.</p>
{{ex:You're from Hyderabad, right?|యుర్ ఫ్రమ్ ˈహైడరబ్యాడ్ రైట్|మీది హైదరాబాద్, కదా?}}
<h3>జవాబు: నిజం ఏదో అదే</h3>
<p>తెలుగులో "అవును, రావడం లేదు" అంటాం: అడిగినవారి మాటను ఒప్పుకుంటాం. ఇంగ్లీష్‌లో Yes / No నిజాన్ని బట్టి ఉంటాయి: రావడం లేదంటే ఎప్పుడూ <b>No</b>.</p>
{{ex:You're not coming, are you?|యుర్ నాట్ ˈకమిఙ్ ఆర్ యు|నువ్వు రావడం లేదు, కదా?}}{{ex:No, I'm not.|నో ఐమ్ నాట్|అవును, రావడం లేదు}}
<h3>wh- ప్రశ్న: wh- పదం, సహాయక క్రియ, కర్త</h3>
{{ex:Why are you late?|వై అర్ యు లేట్|నువ్వు ఎందుకు లేట్ అయ్యావు?}}{{ex:Where did you go?|వెర్ డిడ్ యు గో|నువ్వు ఎక్కడికి వెళ్ళావు?}}{{ex:What have you done?|వట్ హవ఼్ యు డన్|నువ్వు ఏం చేశావు?}}
<p><b>Why you are late?</b> ✗ <b>Where you went?</b> ✗</p>
<h3>వాక్యం లోపల ఉన్న ప్రశ్న: మామూలు వరుస</h3>
<p>I don't know, Can you tell me, Do you know తర్వాత వచ్చే ప్రశ్న మామూలు వాక్యం వరుసలోకి వస్తుంది: ముందు కర్త, తర్వాత క్రియ. do / does / did రావు.</p>
{{ex:I don't know where he is.|ఐ డోంట్ నో వెర్ హి ఇజ఼్|అతను ఎక్కడ ఉన్నాడో నాకు తెలియదు}}{{ex:Can you tell me what time it is?|కన్ యు టెల్ మి వట్ టైమ్ ఇట్ ఇజ఼్|టైమ్ ఎంతైందో చెప్పగలరా?}}
<p><b>I don't know what are they doing.</b> ✗ → <b>I don't know what they are doing.</b> ✓</p>
<div class="tip">ఒక్క మాటలో: tag = వాక్యంలోని సహాయక క్రియ (n't లేకపోతే పెట్టి, ఉంటే తీసి) + కర్త సర్వనామం. గుర్తు రాకపోతే <b>right?</b></div>`,
check:[["\"నువ్వు వస్తున్నావు, కదా?\" ఇంగ్లీష్‌లో?",["You're coming, isn't it?","You're coming, aren't you?","You coming, aren't you?","You're coming, don't you?"],1,"You're లో సహాయక క్రియ are కాబట్టి tag aren't you. isn't it అన్ని చోట్లా రాదు."],["They went home, ___ they? ఖాళీలో ఏది సరిపోతుంది?",["didn't","weren't","don't","isn't"],0,"went అంటే Simple Past కాబట్టి సహాయక క్రియ did. వాక్యంలో not లేదు కాబట్టి tag లో n't: didn't they."],["సరైన వాక్యం ఏది?",["I don't know what are they doing.","I don't know what they doing.","I don't know what do they do.","I don't know what they are doing."],3,"వాక్యం లోపల ఉన్న ప్రశ్నలో మామూలు వరుస: they are."]],
practice:[
["mc","సరైన వాక్యం ఎంచుకోండి.","You're coming, aren't you?","You're coming, isn't it?","You're coming, don't you?","You coming, aren't you?","You're లో సహాయక క్రియ are కాబట్టి tag aren't you. isn't it అన్ని చోట్లా రాదు."],
["mc","\"మీరు ఎందుకు లేట్ అయ్యారు?\" ఇంగ్లీష్‌లో?","Why are you late?","Why you are late?","Why late you are?","Why you late?","wh- పదం, తర్వాత సహాయక క్రియ are, తర్వాత కర్త you."],
["mc","She doesn't eat meat, ___ she?","does","doesn't","is","isn't","వాక్యంలో doesn't ఉంది కాబట్టి tag లో n't లేకుండా does."],
["mc","\"అతను ఎక్కడ పని చేస్తాడో నాకు తెలియదు\" ఇంగ్లీష్‌లో?","I don't know where he works.","I don't know where does he work.","I don't know where he work.","I don't know where works he.","వాక్యం లోపల ఉన్న ప్రశ్నలో మామూలు వరుస: he works. does రాదు."],
["mc","You're not coming, are you? అని అడిగారు. మీరు రావడం లేదు. జవాబు ఏది?","No, I'm not.","Yes, I'm not.","Yes, I am.","No, I am.","రావడం లేదంటే No. తెలుగులో లాగా \"అవును, రావడం లేదు\" అనరు."],
["or","ఈరోజు వాతావరణం బాగుంది, కదా?","It's a nice day, isn't it","the aren't","day లెక్కించదగిన నామవాచకం, ఒక రోజు: ఆర్టికల్ a. It's తో మొదలైంది కాబట్టి tag isn't it."],
["or","పిల్లలు బయట ఉన్నారు, కదా?","The children are outside, aren't they","A isn't","children బహువచనం కాబట్టి ఆర్టికల్ a రాదు; ఏ పిల్లలో ఇద్దరికీ తెలుసు కాబట్టి the. are ఉంది కాబట్టి tag aren't they."],
["or","అతను ఎక్కడ ఉన్నాడో నాకు తెలియదు","I don't know where he is","does","వాక్యం లోపల ఉన్న ప్రశ్నలో మామూలు వరుస: he is. is he కాదు."],
["or","మీరు నిన్న ఎక్కడికి వెళ్ళారు?","Where did you go yesterday","went","did ఉంటే క్రియ V1 రూపంలో ఉంటుంది: go."],
["fi","You like coffee, __ you?","నీకు కాఫీ ఇష్టం, కదా?","don't","aren't|isn't|doesn't","like కి సహాయక క్రియ do. వాక్యంలో not లేదు కాబట్టి tag లో n't: don't you."],
["fi","She can't swim, __ she?","ఆమెకు ఈత రాదు, కదా?","can","can't|does|is","వాక్యంలో can't ఉంది కాబట్టి tag లో n't లేకుండా can."],
["fi","Do you know where the station __?","స్టేషన్ ఎక్కడ ఉందో మీకు తెలుసా?","is","does|is it|it is","వాక్యం లోపల ఉన్న ప్రశ్నలో క్రియ చివర వస్తుంది: the station is."],
["ty","మీకు ఇద్దరు అన్నదమ్ములు ఉన్నారు, కదా?","You have two brothers, don't you|You have two brothers, right|You've got two brothers, haven't you|You have got two brothers, haven't you|You've got two brothers, right|You have got two brothers, right","two brothers · don't you (బహువచనం)","brother","two తర్వాత బహువచనం: brothers. have కి tag don't you.",{nc:1}],
["ty","ఆమె డాక్టర్, కదా?","She's a doctor, isn't she|She is a doctor, isn't she|She's a doctor, right|She is a doctor, right","a doctor · isn't she (ఆర్టికల్ a)","it","ఉద్యోగం పేరు ముందు ఆర్టికల్ a. she కాబట్టి isn't she, isn't it కాదు.",{nc:1}],
["ty","టైమ్ ఎంతైందో మీకు తెలుసా? (Do you know తో)","Do you know what time it is|Do you know what the time is|Can you tell me what time it is|Could you tell me what time it is","what time · it is","does","వాక్యం లోపల ఉన్న ప్రశ్నలో మామూలు వరుస: it is. is it కాదు.",{nc:1}],
["ty","మీరు ఎందుకు లేట్ అయ్యారు?","Why are you late|Why were you late","why · are · late","did","wh- పదం తర్వాత సహాయక క్రియ, తర్వాత కర్త: Why are you …"]]},
{ id:"to-ing", title:"క్రియ తర్వాత to లేదా -ing: want to, enjoy -ing", blurb:"want తర్వాత to, enjoy తర్వాత -ing. ఏ క్రియకు ఏది వస్తుందో ముందే నిర్ణయమై ఉంటుంది.", deck:"సరదా కబుర్లు", body:`
<p>రెండు క్రియలు వరుసగా వచ్చినప్పుడు, మొదటి క్రియను బట్టి రెండోది <b>to + V1</b> గానో, <b>-ing</b> రూపంగానో వస్తుంది. తెలుగు అనువాదం చూసి ఏది వస్తుందో చెప్పలేం, అందుకే ఎక్కువగా వాడే క్రియలను గుంపులుగా గుర్తుపెట్టుకోండి.</p>
<div class="tbl"><table><tr><th>తర్వాత to</th><th>తర్వాత -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop, avoid, suggest</td></tr></table></div>
<h3>want, need, decide, would like తర్వాత to + V1</h3>
{{ex:I want to go home.|ఐ వాంట్ ట గో హోమ్|నాకు ఇంటికి వెళ్ళాలని ఉంది}}{{ex:I need to study.|ఐ నీడ్ ట ˈస్టడి|నేను చదువుకోవాలి}}{{ex:I'd like to order.|ఐడ్ లైక్ టు ˈఓర్డర్|నేను ఆర్డర్ చేయాలనుకుంటున్నాను}}{{ex:I decided to learn English.|ఐ డిˈసైడిడ్ ట లర్న్ ˈఇంగ్లిష్|నేను ఇంగ్లీష్ నేర్చుకోవాలని నిర్ణయించుకున్నాను}}
<h3>enjoy, finish, mind తర్వాత -ing</h3>
{{ex:I enjoy cooking.|ఐ ఇంˈజాయ్ ˈకుకిఙ్|నాకు వంట చేయడం చాలా ఇష్టం}}{{ex:I finished working.|ఐ ˈఫినిష్ట్ ˈవర్కిఙ్|నా పని అయిపోయింది}}{{ex:I don't mind waiting.|ఐ డోంట్ మైండ్ ˈవేటిఙ్|వేచి ఉండడానికి నాకు అభ్యంతరం లేదు}}
<h3>రెండూ సరిపోయే క్రియలు</h3>
<p>like, love, start తర్వాత to అయినా, -ing అయినా రావచ్చు.</p>
<h3>ఈమెయిల్‌లో తరచూ కనిపించే తప్పులు</h3>
<p><b>I look forward to meet you.</b> ✗ → <b>I look forward to meeting you.</b> ✓ ఇక్కడ to ఒక ప్రిపొజిషన్, అందుకే తర్వాత -ing. <b>I avoid to go.</b> ✗ → <b>I avoid going.</b> ✓ <b>He suggested me to go.</b> ✗ → <b>He suggested going.</b> ✓</p>
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. ఖాళీలో ఏది సరిపోతుంది?",["go","going","to go","to going"],2,"want తర్వాత to + V1."],["I enjoy ___ movies. ఖాళీలో ఏది సరిపోతుంది?",["watching","to watch","watch","to watching"],0,"enjoy తర్వాత -ing రూపం."],["\"నేను ఆర్డర్ చేయాలనుకుంటున్నాను\" ఇంగ్లీష్‌లో?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like తర్వాత to + V1."]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need తర్వాత to + V1."],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy తర్వాత -ing రూపం."],
["mc","\"నేను ఆర్డర్ చేయాలనుకుంటున్నాను\" ఇంగ్లీష్‌లో?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like తర్వాత to + V1."],
["mc","\"నా పని అయిపోయింది\" ఇంగ్లీష్‌లో?","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish తర్వాత -ing రూపం."],
["mc","\"వేచి ఉండడానికి నాకు అభ్యంతరం లేదు\" ఇంగ్లీష్‌లో?","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind తర్వాత -ing రూపం."],
["or","నాకు ఒక కారు కొనాలని ఉంది","I want to buy a car","the buying","want తర్వాత to. ఒక కారు కాబట్టి ఆర్టికల్ a."],
["or","నాకు సినిమాలు చూడటం చాలా ఇష్టం","I enjoy watching movies","movie watch","enjoy తర్వాత -ing. ఏ సినిమా అయినా అని అర్థం కాబట్టి బహువచనం movies."],
["or","నేను విశ్రాంతి తీసుకోవాలి","I need to rest","resting","need తర్వాత to + V1."],
["fi","I want __ a coffee.","నాకు ఒక కాఫీ తాగాలని ఉంది","to have|to drink|to get","have|having|drinking","want తర్వాత to + V1."],
["fi","She enjoys __.","ఆమెకు ఈత కొట్టడం చాలా ఇష్టం","swimming","to swim|swim|swims","enjoy తర్వాత -ing రూపం."],
["fi","I decided __ English.","నేను ఇంగ్లీష్ చదవాలని నిర్ణయించుకున్నాను","to study|to learn","study|studying|studied","decide తర్వాత to + V1."],
["ty","నాకు ఇంటికి వెళ్ళాలని ఉంది (want తో)","I want to go home","want to · go · home (ఆర్టికల్ లేదు)","the","want తర్వాత to. home ముందు ఆర్టికల్ రాదు."],
["ty","నాకు పుస్తకాలు చదవడం చాలా ఇష్టం (enjoy తో)","I enjoy reading books|I enjoy reading","enjoy · read · book (బహువచనం)","book","enjoy తర్వాత -ing. ఏ పుస్తకమైనా అని అర్థం కాబట్టి బహువచనం books."],
["ty","నేను ఆర్డర్ చేయాలనుకుంటున్నాను","I'd like to order|I want to order","I'd like · to · order","ordering","would like తర్వాత to + V1."]]},
{ id:"articles-2", title:"the ఇంకా: ఒక్కటే ఉన్నవి, ఆర్టికల్ లేని బహువచనం", blurb:"వాయిద్యాలకు the, ఆటలకు ఆర్టికల్ లేదు. దేశాల పేర్లు, \"ఆ జాతి మొత్తం\" అనే అర్థం కూడా.", deck:"ప్రయాణం (విమానాశ్రయం, హోటల్)", body:`
<p>ఆర్టికల్స్ మీద మూడో పాఠం. తెలుగులో ఆర్టికల్స్ లేవు కాబట్టి రెండు రకాల తప్పులు వస్తాయి: కావలసిన చోట the వదిలేయడం, అవసరం లేని చోట పెట్టడం. నియమం ఉన్న సందర్భాలను గుంపులుగా గుర్తుపెట్టుకోండి.</p>
<h3>the వచ్చే చోట్లు</h3>
<div class="tbl"><table><tr><th>సందర్భం</th><th>ఉదాహరణ</th></tr><tr><td>ప్రపంచంలో ఒక్కటే ఉన్నది</td><td class="k">the sun, the internet</td></tr><tr><td>వాయిద్యాలు</td><td class="k">play the piano</td></tr><tr><td>నదులు, సముద్రాలు</td><td class="k">the Godavari, the Pacific</td></tr><tr><td>బహువచనంలో ఉన్న, లేదా States / Kingdom ఉన్న దేశాల పేర్లు</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|ఐ ప్లే ద఼ పిˈయానో|నేను పియానో వాయిస్తాను}}{{ex:She's from the United States.|షిజ఼్ ఫ్రమ్ ద఼ యుˈనైటిడ్ స్టేట్స్|ఆమె అమెరికా నుంచి వచ్చింది}}{{ex:I found it on the internet.|ఐ ఫౌండ్ ఇట్ ఆన్ ద఼ి ˈఇంటర్నెట్|నాకు అది ఇంటర్నెట్‌లో దొరికింది}}
<h3>ఆర్టికల్ రాని చోట్లు</h3>
<div class="tbl"><table><tr><th>సందర్భం</th><th>ఉదాహరణ</th></tr><tr><td>చాలా దేశాలు, నగరాలు</td><td class="k">India, Hyderabad</td></tr><tr><td>ఆటలు, భాషలు, భోజనాలు</td><td class="k">play cricket, speak English, have lunch</td></tr><tr><td>"ఆ జాతి మొత్తం" అనే అర్థం</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in India.|ఐ లివ఼్ ఇన్ ˈఇండిఅ|నేను ఇండియాలో ఉంటాను}}{{ex:I play soccer.|ఐ ప్లే ˈసాకర్|నేను ఫుట్‌బాల్ ఆడతాను}}{{ex:Dogs are cute.|డాగ్జ఼్ అర్ క్యూట్|కుక్కలు ముద్దుగా ఉంటాయి}}
<p><b>the India</b> ✗ కానీ <b>the US</b>, <b>the UK</b> ✓</p>
<h3>జాతి మొత్తం, ప్రత్యేకంగా కొన్ని</h3>
{{ex:I like dogs.|ఐ లైక్ డాగ్జ఼్|నాకు కుక్కలంటే ఇష్టం (కుక్కలన్నీ)}}{{ex:The dogs in this park are cute.|ద఼ డాగ్జ఼్ ఇన్ ద఼ిస్ పార్క్ అర్ క్యూట్|ఈ పార్కులోని కుక్కలు ముద్దుగా ఉన్నాయి (ఆ కుక్కలు)}}
<div class="tip">జాతి మొత్తం గురించి చెప్పేటప్పుడు the లేకుండా బహువచనం: <b>I like the dogs.</b> అంటే "ఆ కుక్కలంటే నాకు ఇష్టం" అని అర్థం. లెక్కించలేని నామవాచకాలకూ ఇదే నియమం: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓</div>`,
check:[["I play ___ soccer. ఖాళీలో ఏది సరిపోతుంది?",["a","the","an","(ఆర్టికల్ లేదు)"],3,"ఆటల పేర్ల ముందు ఆర్టికల్ రాదు."],["She's from ___ United States. ఖాళీలో ఏది సరిపోతుంది?",["the","a","an","(ఆర్టికల్ లేదు)"],0,"United States ముందు the వస్తుంది."],["\"కుక్కలు ముద్దుగా ఉంటాయి\" (కుక్కలన్నీ) ఇంగ్లీష్‌లో?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"జాతి మొత్తం గురించి చెప్పేటప్పుడు ఆర్టికల్ లేకుండా బహువచనం."]],
practice:[
["mc","I play ___ piano.","the","a","an","some","వాయిద్యం పేరు ముందు the వస్తుంది."],
["mc","\"నేను ఇండియాలో ఉంటాను\" ఇంగ్లీష్‌లో?","I live in India.","I live in the India.","I live in an India.","I live India in.","చాలా దేశాల పేర్ల ముందు ఆర్టికల్ రాదు."],
["mc","\"నేను ఫుట్‌బాల్ ఆడతాను\" ఇంగ్లీష్‌లో?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","ఆటల పేర్ల ముందు ఆర్టికల్ రాదు. అమెరికాలో ఫుట్‌బాల్‌ను soccer అంటారు."],
["mc","\"పిల్లులు ముద్దుగా ఉంటాయి\" (పిల్లులన్నీ) ఇంగ్లీష్‌లో?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","జాతి మొత్తం గురించి చెప్పేటప్పుడు ఆర్టికల్ లేకుండా బహువచనం."],
["mc","She's from ___ United States.","the","a","an","some","United States ముందు the వస్తుంది."],
["or","నేను పియానో వాయిస్తాను","I play the piano","a pianos","వాయిద్యం పేరు ముందు ఆర్టికల్ the వస్తుంది."],
["or","కుక్కలు ముద్దుగా ఉంటాయి","Dogs are cute","The dog","కుక్కలన్నీ అని చెప్పేటప్పుడు ఆర్టికల్ లేకుండా బహువచనం dogs."],
["or","నాకు అది ఇంటర్నెట్‌లో దొరికింది","I found it on the internet","a","ప్రపంచంలో ఒక్కటే ఉన్న internet ముందు ఆర్టికల్ the."],
["fi","I speak __.","నేను ఇంగ్లీష్ మాట్లాడతాను","English","the English|an English|a English","భాషల పేర్ల ముందు ఆర్టికల్ రాదు."],
["fi","The sun rises in __ east.","సూర్యుడు తూర్పున ఉదయిస్తాడు","the","a|an|some","దిక్కుల పేర్ల ముందు the వస్తుంది."],
["fi","I love __.","నాకు సంగీతం అంటే చాలా ఇష్టం","music","the musics|a music|musics","సంగీతం మొత్తం అని అర్థం కాబట్టి ఆర్టికల్ రాదు. music లెక్కించలేని నామవాచకం కాబట్టి -s కూడా రాదు."],
["ty","నేను అమెరికా నుంచి వచ్చాను (I'm from తో)","I'm from the United States|I'm from the US|I'm from America","I'm from · United States (ఆర్టికల్ the)","a","United States ముందు ఆర్టికల్ the వస్తుంది."],
["ty","నేను గిటార్ వాయిస్తాను","I play the guitar|I play guitar","play · guitar (ఆర్టికల్ the)","a","వాయిద్యం పేరు ముందు ఆర్టికల్ the వస్తుంది."],
["ty","పిల్లులు ముద్దుగా ఉంటాయి (పిల్లులన్నీ)","Cats are cute","cat (ఆర్టికల్ లేకుండా బహువచనం)","The cat","జాతి మొత్తం గురించి చెప్పేటప్పుడు ఆర్టికల్ లేకుండా బహువచనం cats."]]},
{ id:"first-conditional", title:"if వాక్యాలు 1: If + Simple Present, will", blurb:"\"వర్షం పడితే ఇంట్లోనే ఉంటాను\". if పక్కన will రాదు.", deck:"ఆఫీసు, ఈమెయిల్", body:`
<p>నిజంగా జరగగల విషయాలకు: <b>If + Simple Present, will + V1</b>. తెలుగులో "పడితే" అనే రూపం ఏ కాలాన్నీ చూపించదు, అందుకే ఇంగ్లీష్‌లో if పక్కన will పెట్టాలనిపిస్తుంది. అర్థం భవిష్యత్తే అయినా if వైపు ఎప్పుడూ <b>Simple Present</b>.</p>
{{ex:If it rains, I'll stay home.|ఇఫ్ ఇట్ రేన్జ఼్ ఐల్ స్టే హోమ్|వర్షం పడితే నేను ఇంట్లోనే ఉంటాను}}{{ex:If you don't hurry, you'll miss the bus.|ఇఫ్ యు డోంట్ ˈహరి యుల్ మిస్ ద఼ బస్|నువ్వు తొందరపడకపోతే బస్సు మిస్ అవుతావు}}
<h3>వరుస మార్చవచ్చు</h3>
<p>if ని వెనక్కి పంపితే కామా అవసరం లేదు.</p>
{{ex:I'll help you if I have time.|ఐల్ హెల్ప్ యు ఇఫ్ ఐ హ్యావ఼్ టైమ్|నాకు టైమ్ ఉంటే నీకు సహాయం చేస్తాను}}
<h3>ఏదైనా చేయమని చెప్పేటప్పుడు</h3>
{{ex:If you're late, call me.|ఇఫ్ యుర్ లేట్ కాల్ మి|లేట్ అయితే నాకు ఫోన్ చెయ్యి}}{{ex:If you need help, let me know.|ఇఫ్ యు నీడ్ హెల్ప్ లెట్ మి నో|సహాయం కావాలంటే నాకు చెప్పు}}
<h3>when: తప్పకుండా జరిగే విషయం</h3>
<p>జరగడం ఖాయమైతే if బదులు when. దీని పక్కన కూడా will రాదు.</p>
{{ex:When I get home, I'll call you.|వెన్ ఐ గెట్ హోమ్ ఐల్ కాల్ యు|ఇంటికి చేరగానే నీకు ఫోన్ చేస్తాను}}
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. ఖాళీలో ఏది సరిపోతుంది?",["will rain","rains","rained","raining"],1,"if పక్కన Simple Present వస్తుంది, will కాదు."],["If you study, you ___ pass. ఖాళీలో ఏది సరిపోతుంది?",["pass will","passing","will pass","passed"],2,"ఫలితం వైపు will + V1."],["సరైన వాక్యం ఏది?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if వైపు Simple Present, ఫలితం వైపు will."]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if పక్కన Simple Present వస్తుంది."],
["mc","If you're late, ___ me.","call","will calling","calls","to call","ఏదైనా చేయమని చెప్పే వాక్యం V1 తో మొదలవుతుంది."],
["mc","\"నాకు టైమ్ ఉంటే నీకు సహాయం చేస్తాను\" ఇంగ్లీష్‌లో?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if పక్కన will రాదు."],
["mc","\"నువ్వు తొందరపడకపోతే బస్సు మిస్ అవుతావు\" ఇంగ్లీష్‌లో?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if వైపు Simple Present వ్యతిరేక రూపం: don't."],
["mc","\"ఇంటికి చేరగానే నీకు ఫోన్ చేస్తాను\" ఇంగ్లీష్‌లో?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when పక్కన కూడా Simple Present వస్తుంది."],
["or","వర్షం పడితే నేను ఇంట్లోనే ఉంటాను","If it rains I'll stay home","will the","if పక్కన Simple Present వస్తుంది. home ముందు ఆర్టికల్ రాదు."],
["or","నీకు టైమ్ ఉంటే నాకు ఫోన్ చెయ్యి","If you have time call me","will","if పక్కన will రాదు."],
["or","నువ్వు బస్సు మిస్ అవుతావు","You'll miss the bus","a buses","ఎక్కాలనుకున్న ఆ బస్సే కాబట్టి ఆర్టికల్ the."],
["fi","If it __ tomorrow, we'll cancel.","రేపు వర్షం పడితే రద్దు చేస్తాం","rains","will rain|rained|raining","if పక్కన Simple Present వస్తుంది."],
["fi","If you study, you __ pass.","చదివితే పాస్ అవుతావు","will|can|might","are|did|passing","ఫలితం వైపు will + V1."],
["fi","__ you need help, call me.","సహాయం కావాలంటే నాకు ఫోన్ చెయ్యి","If|When","So|But|Because","\"కావాలంటే\" = if."],
["ty","నాకు టైమ్ ఉంటే సహాయం చేస్తాను","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if పక్కన will రాదు."],
["ty","వర్షం పడితే నేను టాక్సీలో వెళ్తాను (take తో)","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi (ఆర్టికల్ a)","the","ఏదో ఒక టాక్సీ కాబట్టి ఆర్టికల్ a."],
["ty","నువ్వు బస్సు మిస్ అవుతావు","You'll miss the bus","miss · bus (ఆర్టికల్ the)","a","ఎక్కాలనుకున్న ఆ బస్సే కాబట్టి ఆర్టికల్ the."]]},
{ id:"relative", title:"who / that: మనిషిని, వస్తువును వివరించడం", blurb:"తెలుగులో వివరణ ముందు వస్తుంది, ఇంగ్లీష్‌లో నామవాచకం తర్వాత.", deck:"షాపింగ్, చెల్లింపులు", body:`
<p>తెలుగులో "<b>నేను కొన్న</b> పుస్తకం" అని వివరణ నామవాచకానికి ముందు వస్తుంది, who / which లాంటి మాట ఏదీ ఉండదు. ఇంగ్లీష్‌లో ముందు నామవాచకం, <b>తర్వాత</b> వివరణ: the book <b>that I bought</b>. ఇదే who / which / that తో వచ్చే ఉపవాక్యం.</p>
<h3>మనుషులకు who</h3>
{{ex:I have a friend who speaks Telugu.|ఐ హ్యావ఼్ అ ఫ్రెండ్ హు స్పీక్స్ ˈటెలగు|నాకు తెలుగు మాట్లాడే ఒక స్నేహితుడు ఉన్నాడు}}{{ex:the man who lives next door|ద఼ మ్యాన్ హు లివ఼్జ఼్ నెక్స్ట్ డోర్|పక్కింట్లో ఉండే వ్యక్తి}}
<h3>వస్తువులకు that</h3>
{{ex:the book that I bought|ద఼ బుక్ ద఼ట్ ఐ బాట్|నేను కొన్న పుస్తకం}}{{ex:This is the phone that I want.|ద఼ిస్ ఇజ఼్ ద఼ ఫోన్ ద఼ట్ ఐ వాంట్|నాకు కావలసిన ఫోన్ ఇదే}}
<h3>that ని తరచూ వదిలేస్తారు</h3>
<p>వెంటనే "కర్త + క్రియ" వస్తే that లేకపోయినా సరే. మాటల్లో ఎక్కువగా వదిలేస్తారు.</p>
{{ex:The movie we saw was great.|ద఼ ˈమూవ఼ి వి సా వజ఼్ గ్రేట్|మనం చూసిన సినిమా చాలా బాగుంది}}
<h3>చోటుకు where</h3>
{{ex:the cafe where we met|ద఼ క్యాˈఫే వెర్ వి మెట్|మనం కలిసిన కేఫ్}}
<h3>కర్తను, కర్మను మళ్ళీ చెప్పకండి</h3>
<p><b>The man who came yesterday, he is my uncle.</b> ✗ → <b>The man who came yesterday is my uncle.</b> ✓ <b>the book which I read it</b> ✗ → <b>the book I read</b> ✓ who / that ఆ మనిషి లేదా వస్తువు స్థానంలోనే ఉన్నాయి కాబట్టి he, it మళ్ళీ రావు.</p>
<div class="tip">వరుస ఒక్కటే గుర్తుపెట్టుకోండి: <b>ముందు నామవాచకం, తర్వాత వివరణ.</b> "నేను కొన్న పుస్తకం" → the book (that) I bought. ఇక్కడ what రాదు: <b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Vizag. ఖాళీలో ఏది సరిపోతుంది?",["which","who","what","he"],1,"మనిషిని వివరించడానికి who."],["\"నేను కొన్న పుస్తకం\" ఇంగ్లీష్‌లో?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"ముందు నామవాచకం, తర్వాత that తో వివరణ."],["సరైన వాక్యం ఏది?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"వివరణ నామవాచకం తర్వాత వస్తుంది."]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","మనిషిని వివరించడానికి who."],
["mc","\"నేను కొన్న పుస్తకం\" ఇంగ్లీష్‌లో?","the book that I bought","the I bought book","the book what I bought","the bought I book","ముందు నామవాచకం, తర్వాత వివరణ."],
["mc","\"పక్కింట్లో ఉండే వ్యక్తి\" ఇంగ్లీష్‌లో?","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","మనిషిని who తో వివరిస్తారు."],
["mc","This is the phone ___ I want.","that","who","what","it","వస్తువును that తో వివరిస్తారు."],
["mc","\"మనం చూసిన సినిమా\" ఇంగ్లీష్‌లో?","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that ని వదిలేయవచ్చు."],
["or","ఇది నేను కొన్న పుస్తకం","This is the book I bought","a what","నేను కొన్న ఆ పుస్తకమే కాబట్టి ఆర్టికల్ the."],
["or","నాకు వంట చేసే ఒక స్నేహితుడు ఉన్నాడు","I have a friend who cooks","the which","మొదటిసారి చెబుతున్న ఒక స్నేహితుడు కాబట్టి ఆర్టికల్ a."],
["or","మనం చూసిన సినిమా చాలా బాగుంది","The movie we saw was great","A movies","మనం చూసిన ఆ సినిమానే కాబట్టి ఆర్టికల్ the."],
["fi","the man __ lives here","ఇక్కడ ఉండే వ్యక్తి","who|that","what|he|which","మనిషిని who తో వివరిస్తారు."],
["fi","the book __ I read","నేను చదివిన పుస్తకం","that|which","who|what|it","వస్తువును that తో వివరిస్తారు."],
["fi","the cafe __ we met","మనం కలిసిన కేఫ్","where","who|what|it","చోటును where తో వివరిస్తారు."],
["ty","ఇది నేను కొన్న పుస్తకం","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought (ఆర్టికల్ the)","a","నేను కొన్న ఆ పుస్తకమే కాబట్టి ఆర్టికల్ the."],
["ty","నాకు జపనీస్ మాట్లాడే ఒక స్నేహితుడు ఉన్నాడు","I have a friend who speaks Japanese|I have a friend that speaks Japanese","a friend · who · speaks Japanese (ఆర్టికల్ a)","the","మొదటిసారి చెబుతున్న ఒక స్నేహితుడు కాబట్టి ఆర్టికల్ a."],
["ty","మనం చూసిన సినిమా చాలా బాగుంది","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","ముందు నామవాచకం, తర్వాత వివరణ."]]},
];
