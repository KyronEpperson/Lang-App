/* te-en stage B1: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for, since, ఇప్పటివరకు", blurb:"గతంలో మొదలై ఇప్పటికీ సాగుతున్న విషయం. \"-గా\" = for, \"నుంచి\" = since.", deck:"నా పరిచయం", body:`
<p>Present Perfect రెండో వాడకం: <b>గతంలో మొదలై ఇప్పటికీ సాగుతున్న విషయం</b>. తెలుగులో దీనికి "ఐదేళ్ళుగా ఇక్కడ ఉంటున్నాను" అని "-తున్నాను" రూపం వాడతాం, అందుకే ఇంగ్లీష్‌లో <b>I am living here since five years.</b> ✗ అని వచ్చేస్తుంది. ఇంగ్లీష్‌లో ఇక్కడ Present Continuous కాదు, <b>have + V3</b>.</p>
{{ex:I've lived in Hyderabad for five years.|ఐవ఼్ లివ఼్డ్ ఇన్ ˈహైడరబ్యాడ్ ఫర్ ఫైవ఼్ యిర్జ఼్|నేను ఐదేళ్ళుగా హైదరాబాద్‌లో ఉంటున్నాను}}{{ex:I've worked here since 2020.|ఐవ఼్ వర్క్ట్ హిర్ సిన్స్ ˈట్వెంటి ˈట్వెంటి|నేను 2020 నుంచి ఇక్కడ పని చేస్తున్నాను}}{{ex:I've known her for a long time.|ఐవ఼్ నోన్ హర్ ఫర్ అ లాఙ్ టైమ్|ఆమె నాకు చాలా కాలంగా తెలుసు}}
<h3>for, since: ఈ తేడా తెలుగులో ముందే ఉంది</h3>
<div class="tbl"><table><tr><th>"-గా" (ఎంత కాలం) = for</th><th>"నుంచి" (ఎప్పటి నుంచి) = since</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>"మూడేళ్ళుగా" = for three years. "2020 నుంచి" = since 2020. <b>since three years</b> ✗</p>
<h3>How long …?</h3>
{{ex:How long have you been here?|హౌ లాఙ్ హవ఼్ యు బిన్ హిర్|మీరు ఇక్కడ ఎంత కాలంగా ఉన్నారు?}}{{ex:How long have you studied English?|హౌ లాఙ్ హవ఼్ యు ˈస్టడిడ్ ˈఇంగ్లిష్|మీరు ఎంత కాలంగా ఇంగ్లీష్ నేర్చుకుంటున్నారు?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|ఐవ఼్ జస్ట్ ˈఫినిష్ట్|నేను ఇప్పుడే పూర్తి చేశాను}}{{ex:I've already seen it.|ఐవ఼్ ఆల్ˈరెడి సీన్ ఇట్|నేను అది ఇప్పటికే చూశాను}}{{ex:Have you eaten yet?|హవ఼్ యు ˈఈటన్ యెట్|మీ భోజనం అయిందా?}}
<p>పని ఇంకా సాగుతోందని నొక్కి చెప్పాలంటే <b>have been + -ing</b>: <b>I've been waiting for an hour.</b> కానీ know, have లాంటి స్థితిని చెప్పే క్రియలతో (stative verbs) ఎప్పుడూ మామూలు రూపమే: <b>I've known her for years.</b></p>
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>I am working here since 2015.</b> ✗ → <b>I've worked here since 2015.</b> ✓ <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. ఖాళీలో ఏది సరిపోతుంది?",["since","for","during","from"],1,"three years ఎంత కాలం అని చెబుతుంది (\"మూడేళ్ళుగా\"): for."],["I've worked here ___ 2020. ఖాళీలో ఏది సరిపోతుంది?",["for","in","since","at"],2,"2020 మొదలైన సమయం (\"2020 నుంచి\"): since."],["\"మీరు ఇక్కడ ఎంత కాలంగా ఉన్నారు?\" ఇంగ్లీష్‌లో?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"\"ఎంత కాలంగా\" అని అడగడానికి How long have you + V3."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","ten years ఎంత కాలం అని చెబుతుంది (\"పదేళ్ళుగా\"): for."],
["mc","She's lived here ___ 2019.","since","for","in","at","2019 మొదలైన సమయం (\"2019 నుంచి\"): since."],
["mc","\"మీరు ఇక్కడ ఎంత కాలంగా ఉన్నారు?\" ఇంగ్లీష్‌లో?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","\"ఎంత కాలంగా\" అని అడగడానికి How long have you + V3."],
["mc","\"నేను ఇప్పుడే పూర్తి చేశాను\" ఇంగ్లీష్‌లో?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","\"ఇప్పుడే\" = just: have + just + V3."],
["mc","\"మీ భోజనం అయిందా?\" ఇంగ్లీష్‌లో?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Have you + V3 రూపం eaten. ప్రశ్న చివర yet."],
["or","నేను ఐదేళ్ళుగా ఇక్కడ ఉంటున్నాను","I've lived here for five years","year since","ఐదు సంవత్సరాలు కాబట్టి బహువచనం years. ఎంత కాలం అని చెప్పేదాని ముందు for."],
["or","నేను ఆ సినిమా ఇప్పటికే చూశాను","I've already seen the movie","a saw","ఇద్దరికీ తెలిసిన ఆ సినిమా కాబట్టి ఆర్టికల్ the."],
["or","మీరు ఎంత సేపటి నుంచి ఎదురుచూస్తున్నారు?","How long have you waited","did","\"ఎంత కాలంగా\" అని అడగడానికి How long have you + V3."],
["fi","I've worked here __ two years.","నేను రెండేళ్ళుగా ఇక్కడ పని చేస్తున్నాను","for","since|from|during","\"-గా\" (ఎంత కాలం) = for."],
["fi","I've been here __ Monday.","నేను సోమవారం నుంచి ఇక్కడే ఉన్నాను","since","for|at|during","\"నుంచి\" (ఎప్పటి నుంచి) = since."],
["fi","Have you finished __?","మీ పని అయిపోయిందా?","yet|already","ever|never|since","ప్రశ్న చివర yet వస్తుంది (already కూడా సరే)."],
["ty","నేను మూడేళ్ళుగా ఇక్కడ ఉంటున్నాను","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year (బహువచనం)","year","మూడు సంవత్సరాలు కాబట్టి బహువచనం years. \"-గా\" = for."],
["ty","మీరు ఇక్కడ ఎంత కాలంగా ఉన్నారు?","How long have you been here","how long · have you · been here","are","\"ఎంత కాలంగా\" అని అడగడానికి How long have you + V3."],
["ty","నేను ఆ పుస్తకం ఇప్పటికే చదివాను","I've already read the book|I've read the book already|I already read the book","already · read · book (ఆర్టికల్ the)","a","ఇద్దరికీ తెలిసిన ఆ పుస్తకం కాబట్టి ఆర్టికల్ the."]]},
{ id:"narrative", title:"కథ చెప్పే టెన్స్‌లు: Simple Past, Past Continuous, Past Perfect", blurb:"నేపథ్యానికి Past Continuous, జరిగిన సంఘటనకు Simple Past, అంతకు ముందే జరిగినదానికి had + V3.", deck:"సినిమాలు, సిరీస్, స్లాంగ్", body:`
<p>జరిగిన సంగతి చెప్పేటప్పుడు మూడు టెన్స్‌లు కలిపి వాడతారు. ఒక్కొక్కదానికి ఒక్కో పని ఉంది.</p>
<div class="tbl"><table><tr><th>టెన్స్</th><th>పని</th><th>ఉదాహరణ</th></tr><tr><td class="k">Past Continuous</td><td>నేపథ్యం, జరుగుతూ ఉన్న పని</td><td>I was walking home.</td></tr><tr><td class="k">Simple Past</td><td>జరిగిన సంఘటన</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>అంతకు ముందే జరిగినది</td><td>He had moved to Vijayawada.</td></tr></table></div>
<h3>నేపథ్యం + సంఘటన</h3>
{{ex:I was walking home when I saw an old friend.|ఐ వజ఼్ ˈవాకిఙ్ హోమ్ వెన్ ఐ సా అన్ ఓల్డ్ ఫ్రెండ్|నేను ఇంటికి నడిచి వెళ్తుండగా ఒక పాత స్నేహితుడు కనిపించాడు}}
<h3>Past Perfect: had + V3</h3>
<p>గతంలో ఒక సమయానికి <b>అంతకు ముందే</b> జరిగిపోయిన పని. తెలుగులో "నేను చేరేసరికి సినిమా మొదలైపోయింది" అనే చోట ఇది వస్తుంది.</p>
{{ex:When I arrived, the movie had already started.|వెన్ ఐ అˈరైవ఼్డ్ ద఼ ˈమూవ఼ి హడ్ ఆల్ˈరెడి ˈస్టార్టిడ్|నేను చేరేసరికి సినిమా అప్పటికే మొదలైపోయింది}}{{ex:I had never seen snow before.|ఐ హడ్ ˈనెవ఼ర్ సీన్ స్నో బిˈఫోర్|అంతకు ముందు నేను ఎప్పుడూ మంచు చూడలేదు}}
<h3>వరుస చెప్పే మాటలు</h3>
<p>first (ముందు), then (తర్వాత), after that (ఆ తర్వాత), finally (చివరికి).</p>
{{ex:First we ate dinner. Then we watched a movie.|ఫర్స్ట్ వి ఏట్ ˈడినర్. ద఼ెన్ వి వాచ్ట్ అ ˈమూవ఼ి|ముందు భోజనం చేశాం. తర్వాత సినిమా చూశాం}}
<div class="tip">then (తర్వాత), than (కంటే) వేర్వేరు పదాలు. కథలో వచ్చేది <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. ఖాళీలో ఏది సరిపోతుంది?",["has","was","had","did"],2,"అంతకు ముందే జరిగినదానికి had + V3."],["I ___ walking home when it started to rain. ఖాళీలో ఏది సరిపోతుంది?",["was","had","did","have"],0,"జరుగుతూ ఉన్న పనికి (నేపథ్యం) Past Continuous."],["అంతకు ముందే జరిగిన పనిని చెప్పే వాక్యం ఏది?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + V3 అంటే Past Perfect."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","అంతకు ముందే జరిగినదానికి had + V3."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","జరుగుతూ ఉన్న పనికి Past Continuous."],
["mc","\"నేను చేరేసరికి రైలు అప్పటికే వెళ్ళిపోయింది\" ఇంగ్లీష్‌లో?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","ముందే జరిగిన పనికి had + V3."],
["mc","కథలో \"తర్వాత\" అని చెప్పే పదం ఏది?","then","than","that","them","then అంటే \"తర్వాత\", than అంటే \"కంటే\"."],
["mc","\"అంతకు ముందు నేను ఎప్పుడూ మంచు చూడలేదు\" ఇంగ్లీష్‌లో?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","\"అంతకు ముందు ఎప్పుడూ లేదు\" = had + never + V3."],
["or","రైలు అప్పటికే వెళ్ళిపోయింది","The train had already left","a has","ఎక్కాలనుకున్న ఆ రైలే కాబట్టి ఆర్టికల్ the."],
["or","నేను ఒక పాత స్నేహితుడిని కలిశాను","I met an old friend","a friends","old అచ్చు శబ్దంతో మొదలవుతుంది కాబట్టి ఆర్టికల్ an."],
["or","నేను అప్పుడు ఇంటికి నడిచి వెళ్తున్నాను","I was walking home","had","నేపథ్యానికి Past Continuous."],
["fi","I was sleeping __ you called.","నువ్వు ఫోన్ చేసినప్పుడు నేను నిద్రపోతున్నాను","when","than|so|had","\"చేసినప్పుడు\" = when."],
["fi","The bus had already __.","బస్సు అప్పటికే వెళ్ళిపోయింది","left|gone","leave|leaving|leaves","had తర్వాత V3 వస్తుంది."],
["fi","First we ate. __ we watched a movie.","ముందు భోజనం చేశాం. తర్వాత సినిమా చూశాం","Then|After that|Next","Than|Because|When","\"తర్వాత\" = then."],
["ty","సినిమా అప్పటికే మొదలైపోయింది","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started (ఆర్టికల్ the)","a","చూడాలనుకున్న ఆ సినిమానే కాబట్టి ఆర్టికల్ the."],
["ty","నేను ఒక పాత స్నేహితుడిని కలిశాను","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend (ఆర్టికల్ an)","a","old అచ్చు శబ్దంతో మొదలవుతుంది కాబట్టి ఆర్టికల్ an."],
["ty","నేను ఇంటికి నడిచి వెళ్తున్నాను (Past Continuous లో)","I was walking home","was · walking · home","had","నేపథ్యానికి Past Continuous."]]},
{ id:"conditionals", title:"if వాక్యాలు 2, 3: ఊహ, పశ్చాత్తాపం", blurb:"ఇప్పటి నిజానికి వ్యతిరేకమైతే would, గడిచిపోయిన దాని గురించైతే would have.", deck:"భావాలు, స్పందనలు", body:`
<p>నిజం కాని దాన్ని ఊహించేటప్పుడు వాడే if వాక్యాలు (conditional). తెలుగులో "టైం ఉంటే ప్రయాణాలు చేసేవాడిని", "చదివి ఉంటే పాస్ అయ్యేవాడిని": రెండిటిలోనూ ఫలితం వైపు ఒకే రూపం (-ేవాడిని / -ేదాన్ని). ఇంగ్లీష్ కాలాన్ని బట్టి రెండుగా విడదీస్తుంది: ఇప్పటి ఊహకు <b>would</b>, గతం గురించిన ఊహకు <b>would have</b>.</p>
<h3>if 2: ఇప్పటి నిజానికి వ్యతిరేకం</h3>
<p><b>If + V2, would + V1</b>. V2 వాడినా అర్థం ఇప్పటిదే.</p>
{{ex:If I had time, I would travel.|ఇఫ్ ఐ హ్యాడ్ టైమ్ ఐ వడ్ ˈట్ర్యావ఼ల్|నాకు టైం ఉంటే ప్రయాణాలు చేసేవాడిని}}{{ex:If I were you, I'd take it.|ఇఫ్ ఐ వర్ యూ ఐడ్ టేక్ ఇట్|నేను నీ స్థానంలో ఉంటే అది తీసుకునేదాన్ని}}{{ex:What would you do?|వట్ వడ్ యు డూ|మీరైతే ఏం చేస్తారు?}}
<h3>if 3: గడిచిపోయిన దానికి వ్యతిరేకం</h3>
<p><b>If + had + V3, would have + V3</b>.</p>
{{ex:If I had studied, I would have passed.|ఇఫ్ ఐ హడ్ ˈస్టడిడ్ ఐ వడ్ అవ఼్ ప్యాస్ట్|నేను చదివి ఉంటే పాస్ అయ్యేవాడిని}}
<h3>పశ్చాత్తాపం: should have, I wish</h3>
{{ex:I should have called.|ఐ షడ్ అవ఼్ కాల్డ్|నేను ఫోన్ చేసి ఉండాల్సింది}}{{ex:I wish I had more time.|ఐ విష్ ఐ హ్యాడ్ మోర్ టైమ్|నాకు ఇంకా టైం ఉంటే బాగుండేది}}
<div class="tbl"><table><tr><th>రకం</th><th>if వైపు</th><th>ఫలితం వైపు</th></tr><tr><td>1 (జరగగలది)</td><td class="k">Simple Present</td><td class="k">will</td></tr><tr><td>2 (ఇప్పటికి వ్యతిరేకం)</td><td class="k">V2</td><td class="k">would</td></tr><tr><td>3 (గతానికి వ్యతిరేకం)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip">If I were you స్థిరపడిన మాట: I తర్వాత కూడా was కాదు, <b>were</b>. if వైపు would రాదు: <b>If I would have time, …</b> ✗ → <b>If I had time, …</b> ✓</div>`,
check:[["If I ___ rich, I would travel. ఖాళీలో ఏది సరిపోతుంది?",["am","were","will be","would be"],1,"ఇప్పటి నిజానికి వ్యతిరేకమైతే if వైపు V2 (were)."],["If I had studied, I ___ passed. ఖాళీలో ఏది సరిపోతుంది?",["would","will have","would have","had"],2,"గతానికి వ్యతిరేకమైతే would have + V3."],["\"నేను ఫోన్ చేసి ఉండాల్సింది\" ఇంగ్లీష్‌లో?",["I should have called.","I should called.","I should had call.","I would call should."],0,"పశ్చాత్తాపానికి should have + V3."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","ఇప్పటి నిజానికి వ్యతిరేకమైతే if వైపు V2."],
["mc","\"నేను నీ స్థానంలో ఉంటే అది కొనేవాడిని\" ఇంగ్లీష్‌లో?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … అనేది స్థిరపడిన మాట."],
["mc","If I had known, I ___ come.","would have","would","will have","had","గతానికి వ్యతిరేకమైతే would have + V3."],
["mc","\"నేను ఫోన్ చేసి ఉండాల్సింది\" ఇంగ్లీష్‌లో?","I should have called.","I should called.","I should had call.","I must called.","పశ్చాత్తాపానికి should have + V3."],
["mc","\"మీరైతే ఏం చేస్తారు?\" ఇంగ్లీష్‌లో?","What would you do?","What will you did?","What would you did?","What you would do?","ఊహకు would + V1."],
["or","నాకు టైం ఉంటే ప్రయాణాలు చేసేదాన్ని","If I had time I'd travel","have will","ఇప్పటి నిజానికి వ్యతిరేకమైతే if వైపు V2 రూపం had, ఫలితం వైపు would."],
["or","నేనైతే టాక్సీలో వెళ్తాను","I'd take a taxi","the taxis","ఏదో ఒక టాక్సీ కాబట్టి ఆర్టికల్ a."],
["or","నేను టికెట్ కొని ఉండాల్సింది","I should have bought a ticket","the buy","ఒక టికెట్ కాబట్టి ఆర్టికల్ a."],
["fi","If I __ you, I'd go.","నేను నీ స్థానంలో ఉంటే వెళ్ళేవాడిని","were|was","am|be|would be","If I were you అనేది స్థిరపడిన మాట."],
["fi","I would __ helped.","నేను సహాయం చేసి ఉండేదాన్ని","have","had|has|having","గతం గురించిన ఊహకు would have + V3."],
["fi","I wish I __ more time.","నాకు ఇంకా టైం ఉంటే బాగుండేది","had","have|would have|will have","I wish తర్వాత V2 వస్తుంది."],
["ty","నేను నీ స్థానంలో ఉంటే వెళ్ళేవాడిని","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd … అనేది స్థిరపడిన మాట."],
["ty","నాకు ఒక కారు ఉంటే బాగుండేది (I wish తో)","I wish I had a car","I wish · had · car (ఆర్టికల్ a)","the","ఏదో ఒక కారు కాబట్టి ఆర్టికల్ a."],
["ty","నేను టాక్సీలో వెళ్ళి ఉండాల్సింది (take తో)","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi (ఆర్టికల్ a)","the","ఏదో ఒక టాక్సీ కాబట్టి ఆర్టికల్ a."]]},
{ id:"passive", title:"Passive Voice: ఏం జరిగిందో చెప్పడం (be + V3)", blurb:"ఎవరు చేశారు అనే దానికంటే ఏం జరిగింది అనేది ముఖ్యమైనప్పుడు.", deck:"ఆఫీసు, ఈమెయిల్", body:`
<p><b>Passive Voice</b> (కర్మణి ప్రయోగం) రూపం: <b>be + V3</b>. మాట్లాడే తెలుగులో "-బడు" రూపం దాదాపు వినిపించదు: "ఫోన్ పోయింది", "మీటింగ్ రద్దయింది" అంటాం. ఇంగ్లీష్‌లో ఎవరు చేశారో తెలియనప్పుడు, లేదా అది ముఖ్యం కానప్పుడు Passive Voice చాలా సహజం.</p>
{{ex:My phone was stolen.|మై ఫోన్ వజ఼్ ˈస్టోలన్|నా ఫోన్ ఎవరో దొంగిలించారు}}{{ex:This was made in India.|ద఼ిస్ వజ఼్ మేడ్ ఇన్ ˈఇండిఅ|ఇది ఇండియాలో తయారైంది}}{{ex:The meeting was canceled.|ద఼ ˈమీటిఙ్ వజ఼్ ˈక్యాన్సల్డ్|మీటింగ్ రద్దయింది}}
<h3>Simple Present: ఎప్పుడూ అలాగే జరిగేది</h3>
{{ex:English is spoken here.|ˈఇంగ్లిష్ ఇజ఼్ ˈస్పోకన్ హిర్|ఇక్కడ ఇంగ్లీష్ మాట్లాడతారు}}{{ex:Breakfast is served at seven.|ˈబ్రెక్ఫస్ట్ ఇజ఼్ సర్వ఼్డ్ అట్ ˈసెవ఼న్|బ్రేక్‌ఫాస్ట్ 7 గంటలకు వడ్డిస్తారు}}
<h3>ఎవరు చేశారో చెప్పాలంటే by</h3>
{{ex:It was written by a Telugu writer.|ఇట్ వజ఼్ ˈరిటన్ బై అ ˈటెలగు ˈరైటర్|దీన్ని ఒక తెలుగు రచయిత రాశారు}}
<h3>Active Voice, Passive Voice</h3>
<div class="tbl"><table><tr><th>Active Voice</th><th>Passive Voice</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>ఇండియాలో ఆఫీసు ఈమెయిల్‌లో కనిపించే <b>It is informed that …</b>, <b>You are requested to …</b> విదేశాల్లో చాలా బిగుసుకుపోయినట్టు వినిపిస్తాయి. మామూలుగా రాయండి: <b>Please note that …</b>, <b>Could you please …?</b></p>
<div class="tip">ఎక్కువగా జరిగే తప్పు: be వదిలేయడం. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. ఖాళీలో ఏది సరిపోతుంది?",["is","was","did","has"],1,"నిన్న జరిగింది కాబట్టి was + V3."],["This phone ___ made in Korea. ఖాళీలో ఏది సరిపోతుంది?",["was","did","has","does"],0,"Passive Voice అంటే be + V3."],["\"మీటింగ్ రద్దయింది\" ఇంగ్లీష్‌లో?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be తర్వాత V3 రూపం canceled."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Passive Voice అంటే be + V3."],
["mc","\"ఇది కొరియాలో తయారైంది\" ఇంగ్లీష్‌లో?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be తర్వాత V3 రూపం made."],
["mc","\"ఇక్కడ ఇంగ్లీష్ మాట్లాడతారు\" (Passive Voice లో) ఇంగ్లీష్‌లో?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","ఎప్పుడూ జరిగేదానికి is + V3."],
["mc","\"మీటింగ్ రద్దయింది\" ఇంగ్లీష్‌లో?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Passive Voice అంటే be + V3: was canceled."],
["mc","\"బ్రేక్‌ఫాస్ట్ 7 గంటలకు వడ్డిస్తారు\" ఇంగ్లీష్‌లో?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","భోజనం పేరు ముందు ఆర్టికల్ రాదు. తర్వాత is + V3."],
["or","నా బ్యాగ్ ఎవరో దొంగిలించారు","My bag was stolen","stole","be తర్వాత V3 రూపం stolen వస్తుంది."],
["or","మీటింగ్ రద్దయింది","The meeting was canceled","A meetings","ఇద్దరికీ తెలిసిన ఆ మీటింగ్ కాబట్టి ఆర్టికల్ the."],
["or","కిటికీ పగిలిపోయింది","The window was broken","a windows","ఇక్కడ ఉన్న ఆ కిటికీ కాబట్టి ఆర్టికల్ the."],
["fi","This was __ in Korea.","ఇది కొరియాలో తయారైంది","made","make|making|makes","be తర్వాత V3 వస్తుంది."],
["fi","The room __ cleaned every day.","గదిని రోజూ శుభ్రం చేస్తారు","is|gets","does|has|did","ఎప్పుడూ జరిగేదానికి is + V3."],
["fi","It was written __ Han Kang.","దీన్ని హాన్ కాంగ్ రాశారు","by","from|of|with","ఎవరు చేశారో by తో చెబుతారు."],
["ty","నా ఫోన్ ఎవరో దొంగిలించారు (Passive Voice లో)","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be తర్వాత V3 రూపం stolen."],
["ty","ఆ మీటింగ్ రద్దయింది","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled (ఆర్టికల్ the)","a","ఇద్దరికీ తెలిసిన ఆ మీటింగ్ కాబట్టి ఆర్టికల్ the."],
["ty","తలుపుకి తాళం వేసి ఉంది (was తో)","The door was locked","the door · was · locked (ఆర్టికల్ the)","a","ఇక్కడ ఉన్న ఆ తలుపు కాబట్టి ఆర్టికల్ the."]]},
{ id:"reported", title:"Indirect Speech: ఇతరుల మాట చెప్పడం", blurb:"She said she was tired. టెన్స్ ఒక మెట్టు వెనక్కి, tell తర్వాత వినేవారు.", deck:"ఫోన్, చాట్ షార్ట్ ఫామ్స్", body:`
<p>ఇతరులు అన్న మాటను మనం చెప్పడమే <b>Indirect Speech</b> (పరోక్ష కథనం). తెలుగులో అవతలివారి మాటలను ఉన్నవి ఉన్నట్టే "అని" ముందు పెడతాం: "అతను 'నేను అలసిపోయాను' అని చెప్పాడు". ఇంగ్లీష్‌లో రెండు మార్పులు ఉంటాయి: <b>సర్వనామం</b> మారుతుంది (I → he), <b>టెన్స్ ఒక మెట్టు వెనక్కి</b> వెళ్తుంది (am → was).</p>
<p><b>He said that I am tired.</b> ✗ (అలసిపోయింది అతనే) → <b>He said (that) he was tired.</b> ✓</p>
<div class="tbl"><table><tr><th>అన్న మాట</th><th>చెప్పేటప్పుడు</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|షి సెడ్ షి వజ఼్ ˈటైఅర్డ్|తను అలసిపోయానని ఆమె చెప్పింది}}{{ex:He said he would come.|హి సెడ్ హి వడ్ కమ్|తను వస్తానని అతను చెప్పాడు}}
<h3>say, tell</h3>
<p><b>tell</b> తర్వాత వినేవారు తప్పకుండా రావాలి. <b>say</b> తర్వాత రారు.</p>
{{ex:He told me he was busy.|హి టోల్డ్ మి హి వజ఼్ ˈబిజ఼ి|తను బిజీగా ఉన్నానని అతను నాతో చెప్పాడు}}
<h3>ప్రశ్నను చెప్పేటప్పుడు</h3>
<p>అవును-కాదు ప్రశ్నకు <b>if</b>, wh- ప్రశ్నకు అదే wh- పదం. తర్వాత <b>మామూలు వాక్యం వరుస</b> (కర్త + క్రియ) వస్తుంది, "కదా?" పాఠంలో చూసినట్టే.</p>
{{ex:She asked if I was okay.|షి యాస్క్ట్ ఇఫ్ ఐ వజ఼్ ఓˈకే|నేను బాగున్నానా అని ఆమె అడిగింది}}{{ex:He asked where I lived.|హి యాస్క్ట్ వెర్ ఐ లివ఼్డ్|నేను ఎక్కడ ఉంటానో అతను అడిగాడు}}
<div class="tip">ఎక్కువగా జరిగే తప్పు: <b>He said me …</b> ✗ → <b>He told me …</b> ✓, <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. ఖాళీలో ఏది సరిపోతుంది?",["is being","was","be","will"],1,"ఇతరుల మాట చెప్పేటప్పుడు టెన్స్ వెనక్కి వెళ్తుంది: was."],["He ___ me he would come. ఖాళీలో ఏది సరిపోతుంది?",["said","say","told","tell to"],2,"వినేవారు (me) ఉంటే told."],["\"నేను ఎక్కడ ఉంటానో అతను అడిగాడు\" ఇంగ్లీష్‌లో?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"చెప్పే ప్రశ్నలో మామూలు వాక్యం వరుస: కర్త, తర్వాత క్రియ."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","ఇతరుల మాట చెప్పేటప్పుడు టెన్స్ వెనక్కి వెళ్తుంది: was."],
["mc","He ___ me he was late.","told","said","say","tells to","వినేవారు (me) ఉంటే told."],
["mc","\"తను వస్తానని అతను చెప్పాడు\" ఇంగ్లీష్‌లో?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will మారి would అవుతుంది."],
["mc","\"నేను బాగున్నానా అని ఆమె అడిగింది\" ఇంగ్లీష్‌లో?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","అవును-కాదు ప్రశ్నను if తో చెబుతారు."],
["mc","\"నేను ఎక్కడ ఉంటానో అతను అడిగాడు\" ఇంగ్లీష్‌లో?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","చెప్పే ప్రశ్నలో మామూలు వాక్యం వరుస: కర్త, తర్వాత క్రియ."],
["or","తను అలసిపోయానని ఆమె చెప్పింది","She said she was tired","told","వినేవారు లేకపోతే said."],
["or","తను ఒక కారు కొన్నానని అతను చెప్పాడు","He said he bought a car","the cars","మొదటిసారి చెబుతున్న ఒక కారు కాబట్టి ఆర్టికల్ a."],
["or","ఆ పుస్తకం తనకు నచ్చిందని ఆమె చెప్పింది","She said she liked the book","a books","ఇద్దరికీ తెలిసిన ఆ పుస్తకం కాబట్టి ఆర్టికల్ the."],
["fi","She __ she was tired.","తను అలసిపోయానని ఆమె చెప్పింది","said","told|asked|say","వినేవారు లేకపోతే said."],
["fi","He told __ he was busy.","తను బిజీగా ఉన్నానని అతను నాతో చెప్పాడు","me","I|my|to","told తర్వాత వినేవారు వస్తారు: me."],
["fi","She asked __ I was okay.","నేను బాగున్నానా అని ఆమె అడిగింది","if|whether","that|what|did","అవును-కాదు ప్రశ్నను if తో చెబుతారు."],
["ty","తను బిజీగా ఉన్నానని అతను చెప్పాడు","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","ఇతరుల మాట చెప్పేటప్పుడు టెన్స్ వెనక్కి వెళ్తుంది: is కాదు, was."],
["ty","తనకు ఒక కారు ఉందని ఆమె చెప్పింది","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car (ఆర్టికల్ a)","the","మొదటిసారి చెబుతున్న ఒక కారు కాబట్టి ఆర్టికల్ a."],
["ty","తను ఆ సినిమా చూశానని అతను చెప్పాడు","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie (ఆర్టికల్ the)","a","ఇద్దరికీ తెలిసిన ఆ సినిమా కాబట్టి ఆర్టికల్ the."]]},
];
