/* Practice sets for the te-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Telugu; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile te.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names ఆర్టికల్ / బహువచనం / లెక్కించదగిన · లెక్కించలేని. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "ఏ అక్షరం పేరు see (చూడటం) లాగే వినిపిస్తుంది?", o: ["C", "S", "Z", "K"], why: "C పేరు \"సీ\", see లాగే వినిపిస్తుంది. S పేరు ఎస్, Z పేరు zee, K పేరు కే." },
    { t: "mc", q: "Q తర్వాత వెంటనే వచ్చే అక్షరం ఏది?", o: ["R", "P", "S", "O"], why: "వరుస: …O, P, Q, R, S… Q తర్వాత R వస్తుంది." },
    { t: "mc", q: "సరైనది ఏది?", o: ["an M", "a M", "an B", "an U"], why: "M పేరు అచ్చు శబ్దంతో (ఎ) మొదలవుతుంది, అందుకే ఆర్టికల్ an. B కి a B; U పేరు య శబ్దంతో మొదలవుతుంది కాబట్టి a U." },
    { t: "mc", q: "వీటిలో అచ్చు అక్షరం ఏది?", o: ["U", "R", "S", "W"], why: "ఇంగ్లీష్‌లో అచ్చు అక్షరాలు ఐదు: A, E, I, O, U. R, S, W హల్లులు." },
    { t: "mc", q: "W కి ఇంగ్లీష్ పేరు ఏమిటి?", o: ["double u", "double v", "u u", "v v"], why: "చూడటానికి రెండు V లు కలిసినట్టు ఉన్నా పేరు double u, అంటే \"రెండు U లు\"." },

    { t: "order", p: "దాని స్పెల్లింగ్ ఏమిటి?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell తో అడిగే ప్రశ్న కాబట్టి ముందు సహాయక క్రియ do వస్తుంది. కర్త you కాబట్టి does కాదు; spell V1 గానే ఉంటుంది." },
    { t: "order", p: "నా పేరు S తో మొదలవుతుంది", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S పేరు అచ్చు శబ్దంతో (ఎ) మొదలవుతుంది, అందుకే ఆర్టికల్ an. కర్త my name ఒక్కటే కాబట్టి starts." },
    { t: "order", p: "hello లో రెండు L లు ఉన్నాయి", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L లు రెండు కాబట్టి బహువచనం Ls; బహువచనం కాబట్టి is కాదు, are." },

    { t: "fill", q: "How do you __ your name?", p: "మీ పేరు స్పెల్లింగ్ ఏమిటి?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "do తర్వాత V1 వస్తుంది: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "అది B తో మొదలవుతుంది", a: ["with"], o: ["by", "for", "in"], why: "\"దేనితోనైనా మొదలవడం\" = start with." },
    { t: "fill", q: "That's M __ in Mary.", p: "అది Mary లోని M", a: ["as"], o: ["so", "than", "of"], why: "అక్షరాన్ని పదంతో నిర్ధారించేటప్పుడు M as in Mary లాగ as in వాడతారు." },

    { t: "type", p: "(ఆర్టికల్ చేర్చి) అది A తో మొదలవుతుంది", a: ["It starts with an A", "It begins with an A"], hint: "start · A (A పేరు అచ్చు శబ్దంతో మొదలవుతుంది)", x: ["the", "start"], why: "A పేరు అచ్చు శబ్దంతో (ఏ) మొదలవుతుంది, అందుకే ఆర్టికల్ an. కర్త it కాబట్టి starts." },
    { t: "type", p: "(you, spell వాడి) మీ పేరు స్పెల్లింగ్ ఏమిటి?", a: ["How do you spell your name"], hint: "spell · your name (do తో అడగండి)", x: ["spelling", "does"], why: "spell తో అడిగే ప్రశ్న కాబట్టి సహాయక క్రియ do వస్తుంది. కర్త you కి does రాదు." },
    { t: "type", p: "(It తో మొదలుపెట్టి) అందులో రెండు T లు ఉన్నాయి", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T (రెండు ఉంటే బహువచనం)", x: ["T", "have"], why: "T లు రెండు కాబట్టి బహువచనం Ts. కర్త it కి have కాదు, has." }
  ],

  pron: [
    { t: "mc", q: "\"బియ్యం, అన్నం\" అనే అర్థం ఉన్న పదం ఏది?", o: ["rice", "lice", "rise", "nice"], why: "R తో మొదలయ్యే rice బియ్యం. L తో పలికితే lice (పేలు) అవుతుంది. ర, ల తెలుగులో కూడా వేరు: ఇది సులభం." },
    { t: "mc", q: "\"ఫ్యాన్\" అనే అర్థం ఉన్న పదం ఏది?", o: ["fan", "pan", "van", "ban"], why: "F లో పై పళ్ళు కింది పెదవిని తాకుతాయి, గాలి మాత్రమే వస్తుంది. రెండు పెదవులూ మూసి పలికితే pan (పెనం) అవుతుంది." },
    { t: "mc", q: "\"ఆలోచించడం\" అనే అర్థం ఉన్న పదం ఏది?", o: ["think", "sink", "thing", "pink"], why: "TH లో నాలుక కొన పళ్ళ మధ్య కొంచెం బయటికి రావాలి; ఇది తెలుగు థ కాదు. స అని పలికితే sink (సింక్) అవుతుంది." },
    { t: "mc", q: "\"ఓటు వేయడం\" అనే అర్థం ఉన్న పదం ఏది?", o: ["vote", "boat", "goat", "bought"], why: "V లో పై పళ్ళు కింది పెదవి మీద ఉంటాయి, గొంతు మోగుతుంది. రెండు పెదవులూ మూస్తే boat (పడవ) అవుతుంది. చివరి t తర్వాత అచ్చు పలకకండి." },
    { t: "mc", q: "\"కుడి\" అనే అర్థం ఉన్న పదం ఏది?", o: ["right", "light", "fight", "bright"], why: "R తో మొదలయ్యే right కుడి; L తో మొదలయ్యే light వెలుతురు. ర, ల తేడా తెలుగులోనూ ఉంది కాబట్టి ఇది తేలిక." },

    { t: "order", p: "ఇది అరటిపండు", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana హల్లు శబ్దంతో మొదలవుతుంది, అందుకే ఆర్టికల్ a. this ని TH తో రాస్తారు. తెలుగులో క్రియ లేకపోయినా ఇంగ్లీష్‌లో is తప్పనిసరి." },
    { t: "order", p: "మూడు చెట్లు", a: ["three", "trees"], x: ["tree", "free"], why: "మూడు కాబట్టి బహువచనం -s: trees. three TH తో, tree TR తో మొదలవుతాయి." },
    { t: "order", p: "నాకు కాఫీ ఇష్టం", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee లో F ఉంది: పై పళ్ళు కింది పెదవి మీద. P తో రాస్తే copy (నకలు) అవుతుంది." },

    { t: "fill", q: "I eat __ice every day.", p: "నేను రోజూ అన్నం తింటాను", a: ["r"], o: ["l", "n", "w"], why: "అన్నం = R తో మొదలయ్యే rice. L తో రాస్తే lice (పేలు) అవుతుంది." },
    { t: "fill", q: "I __ink so.", p: "నాకు అలాగే అనిపిస్తోంది", a: ["th"], o: ["s", "t", "p"], why: "think TH తో మొదలవుతుంది. s తో రాస్తే sink (సింక్) అవుతుంది." },
    { t: "fill", q: "This is my __.", p: "ఇది నా బ్యాగ్", a: ["bag"], o: ["back", "bug", "beg"], why: "బ్యాగ్ = g తో ముగిసే bag. k శబ్దంతో ముగిస్తే back (వీపు) అవుతుంది. చివరి హల్లును స్పష్టంగా, అచ్చు లేకుండా పలకండి." },

    { t: "type", p: "మూడు చెట్లు", a: ["three trees"], hint: "three · tree (మూడు ఉంటే బహువచనం)", x: ["tree"], why: "three TH తో, tree TR తో మొదలవుతాయి; మూడు కాబట్టి బహువచనం -s: trees." },
    { t: "type", p: "రెండు పడవలు", a: ["two boats"], hint: "two · boat (రెండు ఉంటే బహువచనం)", x: ["boat", "votes"], why: "పడవ = B తో మొదలయ్యే boat; రెండు కాబట్టి బహువచనం -s: boats. V తో రాస్తే vote (ఓటు) అవుతుంది." },
    { t: "type", p: "చాలా తేలికైన (బరువు తక్కువ)", a: ["very light"], hint: "very · light (V తో, L తో మొదలవుతాయి)", x: ["berry"], why: "very లో V (పై పళ్ళు కింది పెదవి మీద), light లో L (నాలుక కొన చిగురు మీద)." }
  ],

  articles: [
    { t: "mc", q: "\"నేను విద్యార్థిని\" ఇంగ్లీష్‌లో?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "ఉద్యోగం, హోదా పేరు ముందు ఆర్టికల్ a తప్పనిసరి." },
    { t: "mc", q: "\"నా దగ్గర ఒక ఐడియా ఉంది\" ఇంగ్లీష్‌లో?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే ఆర్టికల్ an." },
    { t: "mc", q: "\"ఒక గంట\" ఇంగ్లీష్‌లో?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour లో h పలకరు. అచ్చు శబ్దంతో మొదలవుతుంది కాబట్టి ఆర్టికల్ an." },
    { t: "mc", q: "\"నాకు కుక్కలంటే చాలా ఇష్టం\" (కుక్కలన్నీ, మామూలుగా)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "మొత్తం జాతి గురించి చెప్పేటప్పుడు ఆర్టికల్ లేకుండా బహువచనం వస్తుంది." },
    { t: "mc", q: "\"నాకు ఒక కుక్క ఉంది. ఆ కుక్క చాలా ముద్దుగా ఉంటుంది\" ఇంగ్లీష్‌లో?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "మొదటిసారి చెప్పినప్పుడు ఆర్టికల్ a, రెండోసారి చెప్పినప్పుడు the." },

    { t: "order", p: "నేను టీచర్‌ని", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "ఉద్యోగం పేరు ముందు ఆర్టికల్ a వస్తుంది. teacher హల్లు శబ్దంతో మొదలవుతుంది కాబట్టి an కాదు." },
    { t: "order", p: "(ఈ గది) తలుపు వేస్తావా?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "ఏ తలుపో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "నేను కాఫీ తాగను", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "కాఫీ గురించి మామూలుగా చెప్పేటప్పుడు ఆర్టికల్ రాదు." },

    { t: "fill", q: "I'm __ university student.", p: "నేను యూనివర్సిటీ విద్యార్థిని", a: ["a"], o: ["an", "the", "two"], why: "university \"యూ\" శబ్దంతో మొదలవుతుంది కాబట్టి ఆర్టికల్ a. స్పెల్లింగ్‌ను బట్టి కాదు, శబ్దాన్ని బట్టి." },
    { t: "fill", q: "I have __ older sister.", p: "నాకు ఒక అక్క ఉంది", a: ["an"], o: ["a", "the", "two"], why: "older అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే ఆర్టికల్ an." },
    { t: "fill", q: "I don't like __.", p: "నాకు పిల్లులంటే ఇష్టం లేదు (పిల్లులన్నీ, మామూలుగా)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "మొత్తం జాతి గురించి ఆర్టికల్ లేకుండా బహువచనం: cats." },

    { t: "type", p: "నా దగ్గర ఒక ఐడియా ఉంది", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea (అచ్చు శబ్దం ముందు ఏ ఆర్టికల్?)", x: ["a"], why: "idea అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే ఆర్టికల్ an." },
    { t: "type", p: "నాకు కుక్కలంటే ఇష్టం (కుక్కలన్నీ, మామూలుగా)", a: ["I like dogs", "I love dogs"], hint: "like · dog (మొత్తం జాతికి బహువచనం)", x: ["dog", "a"], why: "మొత్తం జాతి గురించి ఆర్టికల్ లేకుండా బహువచనం: dogs." },
    { t: "type", p: "(కలిసి) మధ్యాహ్న భోజనం చేద్దాం", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch (భోజనం పేరు ముందు ఆర్టికల్ వస్తుందా?)", x: ["a", "the"], why: "భోజనం పేరు ముందు ఆర్టికల్ రాదు." }
  ],

  be: [
    { t: "mc", q: "\"నాకు అలసటగా ఉంది\" ఇంగ్లీష్‌లో?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "స్థితిని చెప్పేటప్పుడు be తప్పనిసరి: I tired ✗." },
    { t: "mc", q: "\"అతను ఇంగ్లీష్ మాట్లాడతాడా?\" ఇంగ్లీష్‌లో?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he తో does వస్తుంది; does తర్వాత క్రియ -s లేని V1." },
    { t: "mc", q: "\"ఆమె ఆఫీసులో ఉంది\" ఇంగ్లీష్‌లో?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "ఎక్కడ ఉన్నారో చెప్పేటప్పుడు be వస్తుంది; she తో is." },
    { t: "mc", q: "Do you like coffee? కి \"అవును\" అని జవాబు ఏది?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "do తో అడిగారు కాబట్టి do తోనే జవాబు." },
    { t: "mc", q: "\"ఆమె మాంసం తినదు\" ఇంగ్లీష్‌లో?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she కి వ్యతిరేక వాక్యం: doesn't + -s లేని V1." },

    { t: "order", p: "మా అన్నయ్య సియోల్‌లో పని చేస్తాడు", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "కర్త ఒక్క వ్యక్తి (he) కాబట్టి works: he / she / it తో వచ్చే -s. వేరే క్రియ ఉంది కాబట్టి be రాదు." },
    { t: "order", p: "నేను విద్యార్థిని కాను", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be కి వ్యతిరేకం not; హోదా పేరు ముందు ఆర్టికల్ a వస్తుంది." },
    { t: "order", p: "ఆమెకు రెండు కుక్కలు ఉన్నాయి", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she తర్వాత has; రెండు కాబట్టి బహువచనం -s: dogs." },

    { t: "fill", q: "My brother __ in Seoul.", p: "మా అన్నయ్య సియోల్‌లో ఉంటాడు", a: ["lives"], o: ["live", "is live", "living"], why: "కర్త he కాబట్టి క్రియకు -s: lives." },
    { t: "fill", q: "__ you tired?", p: "అలసిపోయావా?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired స్థితి కాబట్టి be తో అడగాలి; you తో are." },
    { t: "fill", q: "We __ hungry.", p: "మాకు ఆకలిగా ఉంది", a: ["are"], o: ["is", "am", "do"], why: "hungry స్థితి కాబట్టి be వస్తుంది; we తో are." },

    { t: "type", p: "అతను టీచర్", a: ["He's a teacher", "He is a teacher"], hint: "teacher (be + ఉద్యోగం ముందు ఆర్టికల్)", x: ["the"], why: "తెలుగులో క్రియ లేకపోయినా ఇంగ్లీష్‌లో is తప్పనిసరి; ఉద్యోగం పేరు ముందు ఆర్టికల్ a." },
    { t: "type", p: "నాకు కాఫీ ఇష్టం లేదు", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee (వేరే క్రియకు వ్యతిరేకం)", x: ["am"], why: "like వేరే క్రియ కాబట్టి వ్యతిరేకం don't (I'm not like ✗)." },
    { t: "type", p: "ఆమెకు (ఒక) పిల్లి ఉందా?", a: ["Does she have a cat"], hint: "does · have · cat (ఒకటి కాబట్టి ఆర్టికల్)", x: ["has"], why: "does వస్తే క్రియ V1: have. ఒక పిల్లి కాబట్టి ఆర్టికల్ a." }
  ],

  polite: [
    { t: "mc", q: "కేఫ్‌లో ఒక లాటే ఆర్డర్ చేయడానికి అన్నిటికంటే సహజమైన వాక్యం ఏది?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "దుకాణంలో Can I get ~? సహజం. ఒక కప్పు కాబట్టి ఆర్టికల్ a కూడా వస్తుంది." },
    { t: "mc", q: "కొత్త వ్యక్తిని సహాయం అడగడానికి అన్నిటికంటే మర్యాదైన వాక్యం ఏది?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? కొత్తవాళ్ళను మర్యాదగా అడిగే పద్ధతి." },
    { t: "mc", q: "ఎదుటివారి మాట అర్థం కానప్పుడు మర్యాదగా మళ్ళీ అడిగే వాక్యం ఏది?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? మర్యాదగా మళ్ళీ అడిగే మాట." },
    { t: "mc", q: "చాలా మర్యాదగా: \"మా ఫోటో ఒకటి తీస్తారా?\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind తర్వాత -ing రూపం వస్తుంది: taking." },
    { t: "mc", q: "విమానంలో: \"నాకు కిటికీ పక్క సీటు కావాలి\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ మర్యాదగా అడిగే పద్ధతి. ఒక సీటు కాబట్టి ఆర్టికల్ a." },

    { t: "order", p: "ఒక లాటే ఇస్తారా?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "మొదటిసారి అడుగుతున్న ఒక కప్పు కాబట్టి ఆర్టికల్ a." },
    { t: "order", p: "(ఈ గది) కిటికీ తెరుస్తారా?", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind తర్వాత -ing; ఏ కిటికీనో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "కొంచెం నెమ్మదిగా మాట్లాడగలరా?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you ~? తో మర్యాదగా అడుగుతాం." },

    { t: "fill", q: "Would you mind __ the door?", p: "తలుపు వేస్తారా?", a: ["closing"], o: ["close", "to close", "closed"], why: "mind తర్వాత -ing రూపం వస్తుంది." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "ఒక ఐస్డ్ కాఫీ ఇస్తారా?", a: ["an"], o: ["a", "two", "many"], why: "iced అచ్చు శబ్దంతో (ఐ) మొదలవుతుంది, అందుకే ఆర్టికల్ an." },
    { t: "fill", q: "No, not at __.", p: "(Would you mind ~? కి జవాబు) అలాగే, తప్పకుండా", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all అంటే \"అభ్యంతరం ఏమీ లేదు\", అంటే \"అలాగే, చేస్తాను\"." },

    { t: "type", p: "నాకు సహాయం చేయగలరా? (మర్యాదగా)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help (మర్యాదగా అడగడం)", x: ["can"], why: "కొత్తవాళ్ళను Could you ~? తో అడుగుతాం." },
    { t: "type", p: "నాకు కిటికీ పక్క సీటు కావాలి (మర్యాదగా అడగండి)", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat (ఒక సీటు ముందు ఆర్టికల్)", x: ["the"], why: "ఒక సీటు గురించి మొదటిసారి చెబుతున్నాం కాబట్టి ఆర్టికల్ a: a window seat." },
    { t: "type", p: "రెండు కాఫీలు ఇవ్వండి (మర్యాదగా ఆర్డర్ చేయండి)", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee (రెండు కప్పులైతే బహువచనం)", x: ["coffee"], why: "ఆర్డర్‌లో కాఫీని కప్పుల లెక్కన చెబుతారు, అందుకే బహువచనం -s: two coffees." }
  ],

  tense: [
    { t: "mc", q: "\"ఇప్పుడు కాఫీ తాగుతున్నాను\" ఇంగ్లీష్‌లో?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "ఇప్పుడు జరుగుతున్న పనికి be + -ing." },
    { t: "mc", q: "\"పోయిన వారాంతం బీచ్‌కి వెళ్ళాను\" ఇంగ్లీష్‌లో?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go కి V2 went. బీచ్ ముందు ఆర్టికల్ the వస్తుంది: the beach." },
    { t: "mc", q: "వచ్చే నెల ప్లాన్ చెబుతూ: \"జెజుకి వెళ్ళబోతున్నాను\"", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "ముందే వేసుకున్న ప్లాన్‌కు be going to + V1." },
    { t: "mc", q: "కాలింగ్ బెల్ మోగింది. అప్పటికప్పుడు: \"నేను తలుపు తీస్తాను!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "మాట్లాడుతున్న క్షణంలో తీసుకున్న నిర్ణయానికి will." },
    { t: "mc", q: "see కి V2 (past) ఏది?", o: ["saw", "seed", "seen", "sawed"], why: "see ఇర్రెగ్యులర్ క్రియ: see, saw, seen." },

    { t: "order", p: "నేను బ్యాంకులో పని చేస్తాను (ఎప్పుడూ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "ఎప్పుడూ చేసే పనికి Simple Present; ఒక బ్యాంకు గురించి మొదటిసారి చెబుతున్నాం కాబట్టి ఆర్టికల్ a." },
    { t: "order", p: "తర్వాత ఫోన్ చేస్తాను", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "మాట్లాడుతున్న క్షణంలో ఇచ్చిన మాటకు will." },
    { t: "order", p: "నేను రెండు సినిమాలు చూశాను", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see కి V2 saw; రెండు కాబట్టి బహువచనం -s: movies." },

    { t: "fill", q: "I __ pizza last night.", p: "నిన్న రాత్రి పిజ్జా తిన్నాను", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat కి V2 ate (have అయితే had)." },
    { t: "fill", q: "__ you have fun?", p: "సరదాగా గడిచిందా?", a: ["Did"], o: ["Does", "Are", "Were"], why: "జరిగిపోయిన దాని గురించి అడిగేటప్పుడు Did + V1." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "మా అమ్మానాన్నల దగ్గరికి వెళ్ళబోతున్నాను", a: ["to"], o: ["for", "at", "on"], why: "ప్లాన్‌కు be going to + V1." },

    { t: "type", p: "ఈరోజు ఇంటి నుంచి పని చేస్తున్నాను", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today (ఇప్పుడు జరుగుతున్నది)", x: ["work"], why: "ఈరోజు జరుగుతున్న పనికి be + -ing." },
    { t: "type", p: "పోయిన వారాంతం బీచ్‌కి వెళ్ళాను", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend (V2, ఆర్టికల్)", x: ["a"], why: "go కి V2 went; బీచ్ ముందు ఆర్టికల్ the వస్తుంది: the beach." },
    { t: "type", p: "నేను ఒక వంట క్లాసులో చేరబోతున్నాను (ప్లాన్; take వాడండి)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class (ఒక క్లాసు ముందు ఆర్టికల్)", x: ["the"], why: "ముందే వేసుకున్న ప్లాన్‌కు going to; ఒక క్లాసు గురించి మొదటిసారి చెబుతున్నాం కాబట్టి ఆర్టికల్ a." }
  ],

  prep: [
    { t: "mc", q: "\"మే నెలలో\" ఇంగ్లీష్‌లో?", o: ["in May", "on May", "at May", "to May"], why: "నెల ముందు in." },
    { t: "mc", q: "\"మే 3న\" ఇంగ్లీష్‌లో?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "తేదీ ముందు on." },
    { t: "mc", q: "\"(ఇప్పుడు) బస్సులో ఉన్నాను\" ఇంగ్లీష్‌లో?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "బస్సు, రైలు లాంటి వాటికి on; ఇప్పుడు ఎక్కిన బస్సు కాబట్టి ఆర్టికల్ the వస్తుంది." },
    { t: "mc", q: "\"రాత్రి పూట\" ఇంగ్లీష్‌లో?", o: ["at night", "on night", "in night", "at the night"], why: "night మినహాయింపు: ఆర్టికల్ లేకుండా at night." },
    { t: "mc", q: "సరైన వాక్యం ఏది?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "ఊరి పేరు ముందు in; ఊరి పేరుకు ఆర్టికల్ the రాదు." },

    { t: "order", p: "(మనకు తెలిసిన) స్టేషన్ దగ్గర కలుద్దాం", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "ఒక బిందువుకు at; ఏ స్టేషనో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "నా ఫోన్ (ఆ) టేబుల్ మీద ఉంది", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "ఉపరితలం మీద = on; కళ్ళ ముందున్న టేబుల్ కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "వచ్చే వారం కలుద్దాం", a: ["See", "you", "next", "week"], x: ["on"], why: "next ముందు ప్రిపొజిషన్ రాదు." },

    { t: "fill", q: "The meeting is __ three.", p: "మీటింగ్ మూడు గంటలకు", a: ["at"], o: ["on", "to", "of"], why: "కచ్చితమైన టైమ్ ముందు at." },
    { t: "fill", q: "I was born __ 1998.", p: "నేను 1998లో పుట్టాను", a: ["in"], o: ["on", "at", "to"], why: "సంవత్సరం ముందు in." },
    { t: "fill", q: "See you __ Friday.", p: "శుక్రవారం కలుద్దాం", a: ["on"], o: ["in", "at", "to"], why: "వారంలో రోజు ముందు on." },

    { t: "type", p: "నేను ఉదయం పూట కాఫీ తాగుతాను", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning (in + ఆర్టికల్)", x: ["at"], why: "రోజులో ఒక పూటకు in; in the morning లో ఆర్టికల్ the తప్పనిసరి." },
    { t: "type", p: "నేను ఇప్పుడు ఇంట్లో ఉన్నాను", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home (ఆర్టికల్ లేకుండా)", x: ["the"], why: "at home లో ఆర్టికల్ the రాదు." },
    { t: "type", p: "వచ్చే వారాంతం కలుద్దాం", a: ["See you next weekend"], hint: "see · next weekend (next ముందు ప్రిపొజిషన్ వస్తుందా?)", x: ["on"], why: "next ముందు ప్రిపొజిషన్ రాదు." }
  ],

  smalltalk: [
    { t: "mc", q: "సహోద్యోగి How was your weekend? అని అడిగితే ఏ జవాబు సరిపోతుంది?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "జరిగిపోయిన దాని గురించి అడిగారు కాబట్టి Simple Past లో, ఇంకొక్క విషయం చేర్చి జవాబివ్వండి." },
    { t: "mc", q: "I don't drink coffee. కి \"నేనూ అంతే (నేనూ తాగను)\" అనాలంటే?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "వ్యతిరేక వాక్యానికి ఊ కొట్టేటప్పుడు Me neither." },
    { t: "mc", q: "సంభాషణను మర్యాదగా ముగించడానికి ఏమంటారు?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going అనేది మెల్లగా సెలవు తీసుకునే మాట." },
    { t: "mc", q: "మొదటిసారి కలిసిన వ్యక్తితో మాట కలపడానికి ఏది మంచిది?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "వాతావరణం అన్నిటికంటే సురక్షితమైన small talk విషయం. జీతం, పెళ్ళి, బరువు వ్యక్తిగత విషయాలు." },
    { t: "mc", q: "I went to Busan last weekend. విని ఆసక్తి చూపించే మాట ఏది?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really?, That sounds fun! తో ఆసక్తి చూపిస్తాం." },

    { t: "order", p: "వారాంతానికి ఏమైనా ప్లాన్‌లు ఉన్నాయా?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "ఈ ప్రశ్నలో బహువచనం plans వస్తుంది; రాబోయే ఈ వారాంతం కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "మీతో మాట్లాడటం సంతోషంగా ఉంది", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "సంభాషణ ముగించేటప్పుడు చెప్పే మాట. nice తర్వాత talking వస్తుంది." },
    { t: "order", p: "నాకు హారర్ సినిమాలు ఇష్టం లేదు", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "సినిమాల గురించి మామూలుగా చెబుతున్నాం కాబట్టి ఆర్టికల్ లేకుండా బహువచనం: movies." },

    { t: "fill", q: "Pretty good! How __ you?", p: "బాగున్నాను! నువ్వు?", a: ["about"], o: ["for", "with", "of"], why: "చిన్నగా జవాబిచ్చి How about you? అని తిరిగి అడగడం మర్యాద." },
    { t: "fill", q: "I know, __?", p: "అవును కదా! / నేనూ అదే అంటున్నా!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? గట్టిగా ఏకీభవించే మాట. right R తో మొదలవుతుంది; light అంటే వెలుతురు." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ఈ మధ్య మంచివి ఏమైనా చూశారా?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "any తర్వాత లెక్కించదగిన నామవాచకం గురించి ఇలా అడిగేటప్పుడు బహువచనం వస్తుంది." },

    { t: "type", p: "మీ వారాంతం ఎలా గడిచింది?", a: ["How was your weekend"], hint: "how · weekend (Simple Past లో)", x: ["is"], why: "గడిచిపోయిన వారాంతం కాబట్టి was తో అడగాలి." },
    { t: "type", p: "ఈరోజు వాతావరణం బాగుంది", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today (ఆర్టికల్ వస్తుందా?)", x: ["a"], why: "weather లెక్కించలేని నామవాచకం: ఆర్టికల్ a రాదు (a nice weather ✗)." },
    { t: "type", p: "నాకు సినిమాలు చూడటం ఇష్టం", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie (మామూలుగా చెప్పేటప్పుడు బహువచనం)", x: ["movie"], why: "సినిమాల గురించి మామూలుగా చెబుతున్నాం కాబట్టి బహువచనం: movies." }
  ],

  phrasal: [
    { t: "mc", q: "\"అది ఆన్ చెయ్యి\" ఇంగ్లీష్‌లో?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "సర్వనామం it ఫ్రేజల్ వెర్బ్ మధ్యలో వస్తుంది: turn it on." },
    { t: "mc", q: "\"పాలు అయిపోయాయి\" ఇంగ్లీష్‌లో?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = అయిపోవడం. of ని వదిలేయకండి." },
    { t: "mc", q: "\"నేను దేగులో పెరిగాను\" ఇంగ్లీష్‌లో?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = పెరగడం; దాని V2 grew up." },
    { t: "mc", q: "\"నా పిల్లిని కొంచెం చూసుకుంటారా?\" ఇంగ్లీష్‌లో?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = చూసుకోవడం. ఇది విడదీయలేని ఫ్రేజల్ వెర్బ్ (look for అంటే \"వెతకడం\")." },
    { t: "mc", q: "\"ఏడు గంటలకు వచ్చి నిన్ను తీసుకెళ్తాను\" ఇంగ్లీష్‌లో?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "సర్వనామం you, pick కీ up కీ మధ్యలో వస్తుంది." },

    { t: "order", p: "నా కళ్ళద్దాల కోసం వెతుకుతున్నాను", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "కళ్ళద్దాలు ఎప్పుడూ బహువచనం: glasses (glass అంటే గాజు గ్లాసు). వెతకడం = look for." },
    { t: "order", p: "ఒక ప్లాన్ ఆలోచిద్దాం", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = ఆలోచించి తయారుచేయడం. ఇంకా లేని ఒక ప్లాన్ కాబట్టి ఆర్టికల్ a." },
    { t: "order", p: "నేను వచ్చి నిన్ను తీసుకెళ్తాను", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "సర్వనామం you, pick కీ up కీ మధ్యలో వస్తుంది." },

    { t: "fill", q: "Can you turn it __?", p: "అది ఆఫ్ చేస్తారా?", a: ["off"], o: ["of", "on", "out"], why: "ఆఫ్ చేయడం = turn off. of తో స్పెల్లింగ్ కలిపేయకండి." },
    { t: "fill", q: "I work __ every morning.", p: "నేను రోజూ ఉదయం వ్యాయామం చేస్తాను", a: ["out"], o: ["up", "off", "on"], why: "work out = వ్యాయామం చేయడం." },
    { t: "fill", q: "We ran out of __.", p: "గుడ్లు అయిపోయాయి", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "గుడ్ల లాంటి లెక్కించదగినవి అయిపోయినప్పుడు బహువచనం వస్తుంది: eggs." },

    { t: "type", p: "దయచేసి అది ఆఫ్ చేయండి", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off (సర్వనామం మధ్యలో)", x: ["on"], why: "సర్వనామం it, turn కీ off కీ మధ్యలో వస్తుంది." },
    { t: "type", p: "నేను రెండు పిల్లులను చూసుకుంటాను", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat (రెండు ఉంటే బహువచనం)", x: ["cat"], why: "look after = చూసుకోవడం. రెండు కాబట్టి బహువచనం -s: cats." },
    { t: "type", p: "పాలు అయిపోయాయి", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk (ఆర్టికల్ వస్తుందా?)", x: ["a"], why: "milk లెక్కించలేని నామవాచకం: ఆర్టికల్ a రాదు. తెలుగులో \"పాలు\" బహువచనమైనా ఇంగ్లీష్‌లో milk కి -s రాదు." }
  ],

  numbers: [
    { t: "mc", q: "10,000 (పది వేలు) ఇంగ్లీష్‌లో?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "మూడేసి అంకెలు: 10 + thousand. సంఖ్య తర్వాత thousand కి బహువచనం -s రాదు." },
    { t: "mc", q: "1,000,000 (పది లక్షలు) ఇంగ్లీష్‌లో?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "రెండు కామాలు = million, అంటే పది లక్షలు. సంఖ్య తర్వాత million కి బహువచనం -s రాదు." },
    { t: "mc", q: "9:05 ని ఎలా చదువుతారు?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1 నుంచి 9 నిమిషాల ముందు oh వస్తుంది." },
    { t: "mc", q: "$4.99 ని సహజంగా ఎలా చదువుతారు?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "ధరను రెండు సంఖ్యలుగా చదువుతారు: four ninety-nine." },
    { t: "mc", q: "2026వ సంవత్సరాన్ని ఇంగ్లీష్‌లో ఎలా చదువుతారు?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "సంవత్సరాన్ని రెండేసి అంకెలుగా చదువుతారు." },

    { t: "order", p: "ఏడు గంటల పదిహేను నిమిషాలు అయింది", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 = fifteen (చివరి భాగం మీద ఒత్తిడి), 50 = fifty (మొదటి భాగం మీద ఒత్తిడి)." },
    { t: "order", p: "ఇది 15 డాలర్‌లు", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "ఒకటి కంటే ఎక్కువ డాలర్‌లు ఉంటే బహువచనం -s: dollars." },
    { t: "order", p: "వారానికి రెండుసార్లు", a: ["twice", "a", "week"], x: ["the", "one"], why: "\"వారానికి ఇన్నిసార్లు\" అనడానికి ఆర్టికల్ a వస్తుంది: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "పది గంటల పదిహేను నిమిషాలు అయింది", a: ["a"], o: ["the", "one", "an"], why: "quarter (పావుగంట) ముందు ఆర్టికల్ a వస్తుంది." },
    { t: "fill", q: "That's fifty __ won.", p: "ఇది యాభై వేల వాన్ (కొరియా కరెన్సీ)", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 = fifty thousand. సంఖ్య తర్వాత thousand కి బహువచనం -s రాదు." },
    { t: "fill", q: "I'll be there in ten __.", p: "పది నిమిషాల్లో అక్కడ ఉంటాను", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "పది నిమిషాలు కాబట్టి బహువచనం: minutes." },

    { t: "type", p: "మూడున్నర అయింది", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty (గంట, నిమిషాలు వరుసగా)", x: ["thirteen"], why: "గంట, నిమిషాలు వరుసగా చదవండి: three thirty. thirteen (13) తో కలిపేయకండి." },
    { t: "type", p: "మొత్తం 20 డాలర్‌లు", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar (ఒకటి కంటే ఎక్కువైతే బహువచనం)", x: ["dollar"], why: "20 డాలర్‌లు కాబట్టి బహువచనం -s: dollars." },
    { t: "type", p: "నేను వారానికి రెండుసార్లు (twice) వ్యాయామం చేస్తాను", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week (\"వారానికి\" కి ఏ ఆర్టికల్?)", x: ["the"], why: "\"వారానికి\" = a week, అంటే ఆర్టికల్ a (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Dear తో మొదలుపెడితే అన్నిటికంటే సహజమైన పలకరింపు ఏది?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear తర్వాత Mr. / Ms. + ఇంటిపేరు వస్తుంది. హోదా ఒక్కటే (Dear Manager) రాయరు; Sir + పేరు కూడా రాయరు." },
    { t: "mc", q: "రిపోర్ట్ జత చేశానని ఎలా చెబుతారు?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "అవతలివారికి అందే ఆ రిపోర్ట్ కాబట్టి ఆర్టికల్ the." },
    { t: "mc", q: "\"గడువు ఎప్పుడు?\" ఇంగ్లీష్‌లో?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "ఈ పనికి సంబంధించిన ఆ గడువు (deadline) కాబట్టి ఆర్టికల్ the." },
    { t: "mc", q: "జవాబు ఆలస్యమైనప్పుడు క్షమాపణకు బదులు వాడగలిగే సానుకూలమైన మాట ఏది?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience క్షమాపణ లేకుండానే మర్యాదగా వినిపిస్తుంది. patients (రోగులు) తో స్పెల్లింగ్ కలిపేయకండి." },
    { t: "mc", q: "శుక్రవారం ఈమెయిల్ చివర రాయడానికి మంచి మాట ఏది?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "ఒక వారాంతం గురించి కాబట్టి ఆర్టికల్ a; weekend ఏకవచనం." },

    { t: "order", p: "రిపోర్ట్ జత చేశాను", a: ["I've", "attached", "the", "report"], x: ["a"], why: "అవతలివారికి అందే ఆ రిపోర్ట్ కాబట్టి ఆర్టికల్ the." },
    { t: "order", p: "ఒక మీటింగ్ ఏర్పాటు చేద్దాం", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "ఇంకా నిర్ణయించని ఒక మీటింగ్ కాబట్టి ఆర్టికల్ a." },
    { t: "order", p: "చూసి మళ్ళీ మీకు చెబుతాను", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = మళ్ళీ జవాబివ్వడం. ఇక్కడ to వస్తుంది." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "శుక్రవారం లోపల ఫైల్ పంపగలరా?", a: ["by"], o: ["until", "in", "at"], why: "గడువు (లోపల) = by + రోజు." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "షెడ్యూల్ గురించి అడగడానికి రాస్తున్నాను", a: ["to"], o: ["for", "about", "at"], why: "ఉద్దేశం చెప్పడానికి I'm writing to + V1." },
    { t: "fill", q: "Thanks for all your hard __!", p: "మీ అందరి కష్టానికి ధన్యవాదాలు!", a: ["work"], o: ["works", "working", "job"], why: "work (పని) లెక్కించలేని నామవాచకం: బహువచనం -s రాదు." },

    { t: "type", p: "రేపు నాకు సెలవు (off వాడండి)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow (be తో)", x: ["do"], why: "సెలవు రోజును be off తో చెబుతారు." },
    { t: "type", p: "ఫైల్ జత చేశాను", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file (ఇద్దరికీ తెలిసిన ఆ ఫైల్)", x: ["a"], why: "అవతలివారికి అందే ఆ ఫైల్ కాబట్టి ఆర్టికల్ the." },
    { t: "type", p: "వారాంతం బాగా గడపండి!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend (ఒక వారాంతం ముందు ఆర్టికల్)", x: ["the"], why: "ఒక వారాంతం గురించి కాబట్టి ఆర్టికల్ a: a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "\"ఇది చాలా తేలిక (నల్లేరు మీద నడక)\" ఇంగ్లీష్‌లో?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "జాతీయాన్ని మొత్తంగా గుర్తుపెట్టుకోండి: ఆర్టికల్ a ఉంటుంది, cake ఏకవచనం." },
    { t: "mc", q: "\"ఇది చాలా ఖరీదు\" అనే అర్థం ఉన్న జాతీయం ఏది?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm అచ్చు శబ్దంతో మొదలవుతుంది కాబట్టి ఆర్టికల్ an; leg హల్లు శబ్దంతో మొదలవుతుంది కాబట్టి a." },
    { t: "mc", q: "\"ఈరోజుకు ఇక్కడితో ఆపేద్దాం\" (మీటింగ్‌లో కూడా సరే)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day ని ఆర్టికల్ a తో సహా మొత్తంగా గుర్తుపెట్టుకోవాలి." },
    { t: "mc", q: "\"ఆనందంతో గాల్లో తేలిపోతున్నాను\" ఇంగ్లీష్‌లో?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine లో ఆర్టికల్ ఉండదు, బహువచనం -s కూడా ఉండదు." },
    { t: "mc", q: "స్నేహితుల మధ్య మాత్రమే వాడే స్లాంగ్ ఏది?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap అంటే \"నిజంగా\"; ఇది యువత వాడే స్లాంగ్. మిగతావి ఆఫీసులో కూడా వాడే జాతీయాలు." },

    { t: "order", p: "శ్రద్ధగా వింటున్నాను", a: ["I'm", "all", "ears"], x: ["ear"], why: "\"ఒళ్ళంతా చెవులే\" అనే భావం కాబట్టి బహువచనం: ears." },
    { t: "order", p: "నేను గట్టిగా చదవాలి", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books: ఆర్టికల్ the, బహువచనం books అలాగే ఉండాలి." },
    { t: "order", p: "అది నాకు నచ్చే రకం కాదు", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea ని మొత్తంగా గుర్తుపెట్టుకోండి. my ఉన్న చోట ఆర్టికల్ రాదు." },

    { t: "fill", q: "Kill two __ with one stone.", p: "ఒక్క దెబ్బకు రెండు పిట్టలు", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "రెండు పిట్టలు కాబట్టి బహువచనం: birds." },
    { t: "fill", q: "Speak of the __!", p: "నీకు నూరేళ్ళు ఆయుష్షు! (అనుకుంటుండగానే వచ్చావు)", a: ["devil"], o: ["tiger", "angel", "bird"], why: "మనం \"నూరేళ్ళు ఆయుష్షు\" అనే సందర్భంలో ఇంగ్లీష్‌లో devil (దెయ్యం) అంటారు." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "నా ఒంట్లో కొంచెం బాగాలేదు", a: ["the"], o: ["a", "an", "my"], why: "under the weather: ఆర్టికల్ the అలాగే ఉండాలి." },

    { t: "type", p: "ఇది చాలా తేలిక (cake జాతీయం)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake (ఆర్టికల్ మరచిపోకండి)", x: ["the"], why: "a piece of cake: ఆర్టికల్ a తప్పనిసరి." },
    { t: "type", p: "అంతా బాగా జరగాలని కోరుకుంటున్నాను (fingers జాతీయం)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed (వేళ్ళు ఎన్ని?)", x: ["finger"], why: "రెండు వేళ్ళు మెలిపెడతారు కాబట్టి బహువచనం: fingers." },
    { t: "type", p: "ఈరోజుకు ఇక్కడితో ఆపేద్దాం (day జాతీయం)", a: ["Let's call it a day"], hint: "call it · day (the కాదు)", x: ["the"], why: "call it a day: ఆర్టికల్ the కాదు, a." }
  ]
};
