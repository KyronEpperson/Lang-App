/* Practice sets for the hi-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Hindi; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "किस अक्षर का नाम see (देखना) जैसा सुनाई देता है?", o: ["C", "S", "Z", "K"], why: "C का नाम सी है, ठीक see जैसा। S का नाम एस, Z का ज़ी और K का के है।" },
    { t: "mc", q: "Q के ठीक बाद कौन-सा अक्षर आता है?", o: ["R", "P", "S", "O"], why: "क्रम है …O, P, Q, R, S…। Q (क्यू) के बाद R (आर) आता है।" },
    { t: "mc", q: "कौन-सा सही है?", o: ["an M", "a M", "an B", "an U"], why: "M का नाम एम स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an: an M। B (बी) के साथ a B, और U (यू) य की आवाज़ से शुरू होता है, इसलिए a U।" },
    { t: "mc", q: "इनमें से स्वर (vowel) कौन-सा है?", o: ["U", "R", "S", "W"], why: "अंग्रेज़ी में पाँच स्वर अक्षर हैं: A, E, I, O, U। R, S और W व्यंजन हैं।" },
    { t: "mc", q: "अक्षर W का नाम क्या है?", o: ["double u", "double v", "u u", "v v"], why: "दिखने में दो V जैसा है, पर नाम double u (ˈडबल्यू) है, यानी \"दो U\"।" },

    { t: "order", p: "इसकी स्पेलिंग क्या है?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "सवाल में सहायक क्रिया do चाहिए; you के साथ do, does नहीं। do के बाद V1 spell आता है, spelling नहीं।" },
    { t: "order", p: "मेरा नाम S से शुरू होता है", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S का नाम एस स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an: an S। my name एक है, इसलिए he / she / it वाला -s: starts।" },
    { t: "order", p: "hello में दो L हैं", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "दो L हैं, इसलिए बहुवचन: Ls। बहुवचन के साथ are आता है, is नहीं।" },

    { t: "fill", q: "How do you __ your name?", p: "आप अपना नाम कैसे स्पेल करते हैं?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "सहायक क्रिया do के बाद V1 आता है: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "यह B से शुरू होता है", a: ["with"], o: ["by", "for", "in"], why: "\"से शुरू होना\" = start with। यहाँ हिंदी का \"से\" from या by नहीं बनता।" },
    { t: "fill", q: "That's M __ in Mary.", p: "यह Mary वाला M है", a: ["as"], o: ["so", "than", "of"], why: "अक्षर को किसी शब्द से पक्का करते समय as in कहते हैं: M as in Mary।" },

    { t: "type", p: "यह A से शुरू होता है (आर्टिकल के साथ)", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A का नाम स्वर की आवाज़ से शुरू होता है", x: ["the", "start"], why: "A का नाम ए स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an: an A। it के साथ he / she / it वाला -s: starts।" },
    { t: "type", p: "आपके नाम की स्पेलिंग क्या है? (How से पूछें)", a: ["How do you spell your name"], hint: "spell · your name — सहायक क्रिया do से पूछें", x: ["spelling", "does"], why: "सवाल में सहायक क्रिया do; you के साथ do, does नहीं। do के बाद V1 spell।" },
    { t: "type", p: "उस शब्द में दो T हैं (It से शुरू करें)", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "it · two · T — दो हैं तो बहुवचन", x: ["T", "have"], why: "दो T हैं, इसलिए बहुवचन: Ts (या T's)। it के साथ has आता है, have नहीं; there के साथ are।" }
  ],

  pron: [
    { t: "mc", q: "\"चावल\" अंग्रेज़ी में?", o: ["rice", "lice", "rise", "nice"], why: "चावल = rice (R)। L से lice बनता है, यानी जूँ। र और ल हिंदी में भी अलग हैं, इसलिए यह आसान है।" },
    { t: "mc", q: "\"पंखा\" अंग्रेज़ी में?", o: ["fan", "pan", "van", "ban"], why: "F में ऊपर के दाँत निचले होंठ पर, होंठ बंद नहीं: फ़। होंठ मिलाकर बोलें तो pan (कड़ाही) सुनाई देता है।" },
    { t: "mc", q: "\"सोचना\" अंग्रेज़ी में?", o: ["think", "sink", "thing", "pink"], why: "TH (थ़): जीभ दाँतों के बीच, हवा बहती रहे। s बोलें तो sink (सिंक) बन जाता है।" },
    { t: "mc", q: "\"वोट देना\" अंग्रेज़ी में?", o: ["vote", "boat", "goat", "bought"], why: "V (व़): F की तरह दाँत होंठ पर, साथ में भनभनाहट। होंठ मिलाकर B बोलें तो boat (नाव) हो जाता है।" },
    { t: "mc", q: "\"दायाँ\" अंग्रेज़ी में?", o: ["right", "light", "fight", "bright"], why: "दायाँ = right (R)। light (L) का मतलब रोशनी है।" },

    { t: "order", p: "यह एक केला है", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana व्यंजन की आवाज़ से शुरू होता है, इसलिए आर्टिकल a। this में TH (द़) है, Dis नहीं।" },
    { t: "order", p: "तीन पेड़", a: ["three", "trees"], x: ["tree", "free"], why: "तीन हैं, इसलिए बहुवचन: trees। three में TH (थ़), tree में TR (ट्र)।" },
    { t: "order", p: "मुझे कॉफ़ी पसंद है", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee में फ़ है (दाँत होंठ पर)। P बोलें तो copy (नक़ल, कॉपी) बन जाता है।" },

    { t: "fill", q: "I eat __ice every day.", p: "मैं रोज़ चावल खाता हूँ", a: ["r"], o: ["l", "n", "w"], why: "चावल = rice, R से। L से lice (जूँ) बन जाता है।" },
    { t: "fill", q: "I __ink so.", p: "मुझे ऐसा लगता है", a: ["th"], o: ["s", "t", "p"], why: "think, TH से शुरू होता है। s से sink (सिंक) बन जाता है।" },
    { t: "fill", q: "This is my __.", p: "यह मेरा बैग है", a: ["bag"], o: ["back", "bug", "beg"], why: "बैग = bag, आख़िर में g। k की आवाज़ से back (पीठ) बन जाता है।" },

    { t: "type", p: "तीन पेड़", a: ["three trees"], hint: "three · tree — तीन हैं तो बहुवचन", x: ["tree"], why: "three में TH (थ़), tree में TR; तीन हैं, इसलिए बहुवचन -s: trees।" },
    { t: "type", p: "दो नावें", a: ["two boats"], hint: "two · boat — दो हैं तो बहुवचन", x: ["boat", "votes"], why: "नाव = boat (B से); दो हैं, इसलिए बहुवचन: boats। V (व़) से vote (वोट) बनता है।" },
    { t: "type", p: "बहुत हल्का", a: ["very light"], hint: "very · light — V और L से शुरू", x: ["berry"], why: "very में V (व़): दाँत होंठ पर, भनभनाहट के साथ, हिंदी का व नहीं। light में L।" }
  ],

  articles: [
    { t: "mc", q: "\"मैं स्टूडेंट हूँ\" अंग्रेज़ी में?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "प्रोफ़ेशन या पहचान से पहले आर्टिकल a ज़रूर लगता है।" },
    { t: "mc", q: "\"मेरे पास एक आइडिया है\" अंग्रेज़ी में?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an।" },
    { t: "mc", q: "\"एक घंटा\" अंग्रेज़ी में?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour में h नहीं बोला जाता; शुरुआत स्वर की आवाज़ से है, इसलिए आर्टिकल an।" },
    { t: "mc", q: "\"मुझे कुत्ते बहुत पसंद हैं\" (कुत्ते आम तौर पर) अंग्रेज़ी में?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "आम बात के लिए बिना आर्टिकल के बहुवचन: dogs।" },
    { t: "mc", q: "\"मेरे पास एक कुत्ता है। वह कुत्ता बहुत प्यारा है\" अंग्रेज़ी में?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "पहली बार आर्टिकल a, दोबारा ज़िक्र हो तो the।" },

    { t: "order", p: "मैं टीचर हूँ", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "प्रोफ़ेशन से पहले आर्टिकल a। teacher व्यंजन की आवाज़ से शुरू होता है, इसलिए an नहीं।" },
    { t: "order", p: "(इस कमरे का) दरवाज़ा बंद कर देंगे?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "वही दरवाज़ा जिसे दोनों जानते हैं, इसलिए आर्टिकल the।" },
    { t: "order", p: "मैं कॉफ़ी नहीं पीता", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "कॉफ़ी की आम बात है, और coffee अगणनीय है, इसलिए कोई आर्टिकल नहीं लगता।" },

    { t: "fill", q: "I'm __ university student.", p: "मैं यूनिवर्सिटी स्टूडेंट हूँ", a: ["a"], o: ["an", "the", "two"], why: "university की शुरुआत \"यू\" की आवाज़ से होती है, जो व्यंजन है, इसलिए आर्टिकल a। स्पेलिंग नहीं, आवाज़ देखें।" },
    { t: "fill", q: "I have __ older sister.", p: "मेरी एक बड़ी बहन है", a: ["an"], o: ["a", "the", "two"], why: "older स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an।" },
    { t: "fill", q: "I don't like __.", p: "मुझे बिल्लियाँ पसंद नहीं (बिल्लियाँ आम तौर पर)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "आम बात के लिए बिना आर्टिकल के बहुवचन: cats।" },

    { t: "type", p: "मेरे पास एक आइडिया है", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — स्वर की आवाज़ से पहले कौन-सा आर्टिकल?", x: ["a"], why: "idea स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an।" },
    { t: "type", p: "मुझे कुत्ते पसंद हैं (कुत्ते आम तौर पर)", a: ["I like dogs", "I love dogs"], hint: "like · dog — आम बात में बहुवचन", x: ["dog", "a"], why: "आम बात के लिए बिना आर्टिकल के बहुवचन: dogs।" },
    { t: "type", p: "चलिए, लंच करते हैं", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — खाने के नाम से पहले आर्टिकल?", x: ["a", "the"], why: "खाने के नाम (lunch, dinner) से पहले आर्टिकल नहीं लगता।" }
  ],

  be: [
    { t: "mc", q: "\"मैं थका हुआ हूँ\" अंग्रेज़ी में?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "हालत बताने के लिए be ज़रूरी है: I'm tired।" },
    { t: "mc", q: "\"क्या वह अंग्रेज़ी बोलता है?\" अंग्रेज़ी में?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he के साथ सहायक क्रिया does, और does के बाद क्रिया बिना -s के (V1)।" },
    { t: "mc", q: "\"वह (लड़की) काम पर है\" अंग्रेज़ी में?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "जगह बताने के लिए be, और she के साथ is।" },
    { t: "mc", q: "Do you like coffee? का जवाब \"हाँ\" में कैसे देंगे?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "सवाल do से है, तो जवाब भी do से: Yes, I do।" },
    { t: "mc", q: "\"वह मांस नहीं खाती\" अंग्रेज़ी में?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she का नकारात्मक: doesn't + बिना -s वाली क्रिया।" },

    { t: "order", p: "मेरा भाई सोल में काम करता है", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "कर्ता एक व्यक्ति (he) है, इसलिए works में -s; यहाँ be नहीं लगता।" },
    { t: "order", p: "मैं स्टूडेंट नहीं हूँ", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be का नकारात्मक not से बनता है, और पहचान से पहले आर्टिकल a लगता है।" },
    { t: "order", p: "उसके (लड़की के) पास दो कुत्ते हैं", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she के साथ has; दो कुत्ते हैं, इसलिए बहुवचन: dogs।" },

    { t: "fill", q: "My brother __ in Seoul.", p: "मेरा भाई सोल में रहता है", a: ["lives"], o: ["live", "is live", "living"], why: "कर्ता he है, इसलिए क्रिया में -s: lives।" },
    { t: "fill", q: "__ you tired?", p: "क्या आप थके हुए हैं?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired हालत है, इसलिए सवाल be से; you के साथ are।" },
    { t: "fill", q: "We __ hungry.", p: "हमें भूख लगी है", a: ["are"], o: ["is", "am", "do"], why: "hungry हालत है, इसलिए be; we के साथ are।" },

    { t: "type", p: "वह (आदमी) टीचर है", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be और प्रोफ़ेशन से पहले आर्टिकल", x: ["the"], why: "पहचान बताने के लिए be, और प्रोफ़ेशन से पहले आर्टिकल a।" },
    { t: "type", p: "मुझे कॉफ़ी पसंद नहीं", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — दूसरी क्रिया का नकारात्मक", x: ["am"], why: "like दूसरी क्रिया है, इसलिए नकारात्मक don't से बनता है (I'm not like ✗)।" },
    { t: "type", p: "क्या उसके (लड़की के) पास एक बिल्ली है?", a: ["Does she have a cat"], hint: "does · have · cat — एक बिल्ली से पहले आर्टिकल", x: ["has"], why: "does के बाद क्रिया V1 (have), और एक बिल्ली है, इसलिए आर्टिकल a।" }
  ],

  polite: [
    { t: "mc", q: "कैफ़े में एक लाटे ऑर्डर करते समय सबसे स्वाभाविक वाक्य कौन-सा है?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "दुकान या कैफ़े में Can I get ~? स्वाभाविक है; एक कप है, इसलिए आर्टिकल a भी।" },
    { t: "mc", q: "किसी अजनबी से मदद माँगते समय सबसे विनम्र वाक्य कौन-सा है?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "अजनबी से अनुरोध Could you ~? से करें।" },
    { t: "mc", q: "सामने वाले की बात समझ न आए, तो विनम्रता से दोबारा कैसे पूछेंगे?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? दोबारा पूछने का विनम्र तरीक़ा है।" },
    { t: "mc", q: "बहुत विनम्रता से: \"क्या आप हमारी एक फ़ोटो खींच देंगे?\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind के बाद -ing रूप आता है: taking।" },
    { t: "mc", q: "फ़्लाइट में: \"मुझे खिड़की वाली सीट चाहिए\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ विनम्र अनुरोध है; सीट एक है, इसलिए आर्टिकल a।" },

    { t: "order", p: "क्या मुझे एक लाटे मिल सकता है?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "पहली बार ऑर्डर किया गया एक कप, इसलिए आर्टिकल a।" },
    { t: "order", p: "क्या आप (इस कमरे की) खिड़की खोल देंगे?", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind के बाद -ing; वही खिड़की जिसे दोनों जानते हैं, इसलिए आर्टिकल the।" },
    { t: "order", p: "क्या आप थोड़ा और धीरे बोल सकते हैं?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you ~? से विनम्र अनुरोध; \"धीरे\" के लिए क्रियाविशेषण slowly।" },

    { t: "fill", q: "Would you mind __ the door?", p: "क्या आप दरवाज़ा बंद कर देंगे?", a: ["closing"], o: ["close", "to close", "closed"], why: "mind के बाद -ing रूप आता है।" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "क्या मुझे एक आइस्ड कॉफ़ी मिल सकती है?", a: ["an"], o: ["a", "two", "many"], why: "iced स्वर की आवाज़ (आइ) से शुरू होता है, इसलिए आर्टिकल an।" },
    { t: "fill", q: "No, not at __.", p: "(Would you mind ~? का जवाब) हाँ, ज़रूर", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all = \"बिल्कुल एतराज़ नहीं\", यानी \"हाँ, कर देता हूँ\"।" },

    { t: "type", p: "क्या आप मेरी मदद कर सकते हैं? (विनम्रता से)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — विनम्र अनुरोध", x: ["can"], why: "अजनबी से अनुरोध Could you ~? से करें।" },
    { t: "type", p: "मुझे खिड़की वाली सीट चाहिए (विनम्रता से)", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — एक सीट से पहले आर्टिकल", x: ["the"], why: "एक सीट, पहली बार ज़िक्र, इसलिए आर्टिकल a: a window seat।" },
    { t: "type", p: "दो कॉफ़ी दीजिए (विनम्रता से)", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — दो हैं तो बहुवचन", x: ["coffee"], why: "ऑर्डर में कॉफ़ी कप के हिसाब से गिनी जाती है, इसलिए बहुवचन: two coffees। हिंदी में \"दो कॉफ़ी\" में शब्द नहीं बदलता।" }
  ],

  tense: [
    { t: "mc", q: "\"मैं अभी कॉफ़ी पी रहा हूँ\" अंग्रेज़ी में?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "अभी चल रहा काम: be + -ing।" },
    { t: "mc", q: "\"पिछले वीकेंड मैं बीच पर गई थी\" अंग्रेज़ी में?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go का V2 went है (\"थी\" के लिए was नहीं), और बीच के साथ आर्टिकल the: the beach।" },
    { t: "mc", q: "अगले महीने का प्लान: \"मैं जेजू जाने वाला हूँ\"", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "पहले से बना प्लान: be going to + V1।" },
    { t: "mc", q: "घंटी बजी, और आप उसी पल कहते हैं: \"मैं दरवाज़ा खोलता हूँ!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "उसी पल लिया फ़ैसला: will।" },
    { t: "mc", q: "see का V2 (past) क्या है?", o: ["saw", "seed", "seen", "sawed"], why: "see अनियमित क्रिया है: see – saw – seen।" },

    { t: "order", p: "मैं बैंक में काम करता हूँ (हमेशा)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "हमेशा का काम Simple Present में; एक बैंक, पहली बार ज़िक्र, इसलिए आर्टिकल a।" },
    { t: "order", p: "मैं बाद में फ़ोन करूँगी", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "उसी पल किया गया वादा: will।" },
    { t: "order", p: "मैंने दो फ़िल्में देखीं", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see का V2 saw; दो फ़िल्में हैं, इसलिए बहुवचन: movies।" },

    { t: "fill", q: "I __ pizza last night.", p: "मैंने कल रात पिज़्ज़ा खाया", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat का V2 ate है (have से had)।" },
    { t: "fill", q: "__ you have fun?", p: "मज़ा आया?", a: ["Did"], o: ["Does", "Are", "Were"], why: "बीती बात के सवाल में Did + V1।" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "मैं अपने माता-पिता से मिलने जाने वाला हूँ", a: ["to"], o: ["for", "at", "on"], why: "प्लान के लिए be going to + V1।" },

    { t: "type", p: "आज मैं घर से काम कर रही हूँ", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — अभी चल रहा काम", x: ["work"], why: "आज चल रहा काम: be + -ing।" },
    { t: "type", p: "पिछले वीकेंड मैं बीच पर गया था", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — V2 और आर्टिकल", x: ["a"], why: "go का V2 went (was नहीं); बीच के साथ आर्टिकल the: the beach।" },
    { t: "type", p: "मैं एक कुकिंग क्लास लेने वाली हूँ (प्लान, take से)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — एक क्लास से पहले आर्टिकल", x: ["the"], why: "पहले से बना प्लान: going to; एक क्लास, पहली बार ज़िक्र, इसलिए आर्टिकल a।" }
  ],

  prep: [
    { t: "mc", q: "\"मई में\" अंग्रेज़ी में?", o: ["in May", "on May", "at May", "to May"], why: "महीने से पहले in।" },
    { t: "mc", q: "\"3 मई को\" अंग्रेज़ी में?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "तारीख़ से पहले on।" },
    { t: "mc", q: "\"मैं (अभी) बस में हूँ\" अंग्रेज़ी में?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "बस-ट्रेन के लिए on, भले हिंदी में \"में\" हो; और यह वही बस है, इसलिए आर्टिकल the।" },
    { t: "mc", q: "\"रात को\" अंग्रेज़ी में?", o: ["at night", "on night", "in night", "at the night"], why: "night अपवाद है: बिना आर्टिकल के at night।" },
    { t: "mc", q: "सही वाक्य कौन-सा है?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "शहर से पहले in, और शहर के नाम के साथ आर्टिकल the नहीं लगता।" },

    { t: "order", p: "(जिसे हम दोनों जानते हैं, उस) स्टेशन पर मिलते हैं", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "एक बिंदु के लिए at; वही स्टेशन जिसे दोनों जानते हैं, इसलिए आर्टिकल the।" },
    { t: "order", p: "मेरा फ़ोन (उस) मेज़ पर है", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "सतह पर: on; सामने वाली मेज़ है, इसलिए आर्टिकल the।" },
    { t: "order", p: "अगले हफ़्ते मिलते हैं", a: ["See", "you", "next", "week"], x: ["on"], why: "next से पहले कोई प्रीपोज़िशन नहीं लगता।" },

    { t: "fill", q: "The meeting is __ three.", p: "मीटिंग तीन बजे है", a: ["at"], o: ["on", "to", "of"], why: "घड़ी के समय से पहले at।" },
    { t: "fill", q: "I was born __ 1998.", p: "मेरा जन्म 1998 में हुआ था", a: ["in"], o: ["on", "at", "to"], why: "साल से पहले in।" },
    { t: "fill", q: "See you __ Friday.", p: "शुक्रवार को मिलते हैं", a: ["on"], o: ["in", "at", "to"], why: "दिन से पहले on।" },

    { t: "type", p: "मैं सुबह कॉफ़ी पीता हूँ", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + आर्टिकल", x: ["at"], why: "दिन के हिस्से के लिए in, और in the morning में आर्टिकल the ज़रूर लगता है।" },
    { t: "type", p: "मैं घर पर हूँ", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — बिना आर्टिकल", x: ["the"], why: "at home में आर्टिकल the नहीं लगता।" },
    { t: "type", p: "अगले वीकेंड मिलते हैं (See you से शुरू करें)", a: ["See you next weekend"], hint: "see · next weekend — next से पहले प्रीपोज़िशन?", x: ["on"], why: "next से पहले कोई प्रीपोज़िशन नहीं लगता।" }
  ],

  smalltalk: [
    { t: "mc", q: "साथ काम करने वाला पूछे How was your weekend?, तो क्या जवाब देंगे?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "बीती बात पूछी है, तो past में जवाब दें, और साथ में एक बात और जोड़ें।" },
    { t: "mc", q: "I don't drink coffee. पर \"मैं भी नहीं पीता\" कैसे कहेंगे?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "नकारात्मक वाक्य पर हामी: Me neither।" },
    { t: "mc", q: "बातचीत स्वाभाविक ढंग से ख़त्म करने के लिए क्या कहेंगे?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going विनम्रता से विदा लेने का तरीक़ा है।" },
    { t: "mc", q: "किसी से पहली बार मिलें, तो बात शुरू करने के लिए अच्छा वाक्य कौन-सा है?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "मौसम स्मॉल टॉक का सबसे सुरक्षित विषय है।" },
    { t: "mc", q: "I went to Busan last weekend. पर दिलचस्पी दिखाने वाली प्रतिक्रिया कौन-सी है?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? और That sounds fun! से दिलचस्पी दिखती है।" },

    { t: "order", p: "वीकेंड का कोई प्लान है?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "यह सवाल बहुवचन plans के साथ पूछा जाता है; और यह आने वाला वीकेंड है, इसलिए आर्टिकल the।" },
    { t: "order", p: "आपसे बात करके अच्छा लगा", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "बातचीत ख़त्म करते समय का वाक्य; nice के बाद -ing रूप talking आता है।" },
    { t: "order", p: "मुझे हॉरर फ़िल्में पसंद नहीं", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "फ़िल्मों की आम बात है, इसलिए बिना आर्टिकल के बहुवचन: movies।" },

    { t: "fill", q: "Pretty good! How __ you?", p: "बढ़िया! तुम बताओ?", a: ["about"], o: ["for", "with", "of"], why: "छोटा जवाब, फिर How about you? से पलटकर पूछना — यही तरीक़ा है।" },
    { t: "fill", q: "I know, __?", p: "बिल्कुल, सही कहा!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? ज़ोरदार सहमति है। right में R है; light (L) का मतलब रोशनी है।" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "आजकल कोई अच्छे शो या फ़िल्में देखीं?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "इस सवाल में any के बाद गणनीय संज्ञा बहुवचन में आती है: shows या movies।" },

    { t: "type", p: "आपका वीकेंड कैसा रहा?", a: ["How was your weekend"], hint: "how · weekend — past में", x: ["is"], why: "वीकेंड बीत चुका है, इसलिए past: was।" },
    { t: "type", p: "आज मौसम अच्छा (nice) है", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — आर्टिकल लगेगा?", x: ["a"], why: "weather अगणनीय है, इसलिए आर्टिकल a नहीं लगता (a nice weather ✗)।" },
    { t: "type", p: "मुझे फ़िल्में देखना पसंद है", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — आम बात में बहुवचन", x: ["movie"], why: "फ़िल्मों की आम बात है, इसलिए बहुवचन: movies।" }
  ],

  phrasal: [
    { t: "mc", q: "\"इसे चालू कर दो\" अंग्रेज़ी में?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "सर्वनाम it फ़्रेज़ल वर्ब के बीच में आता है: turn it on।" },
    { t: "mc", q: "\"दूध ख़त्म हो गया\" अंग्रेज़ी में?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = ख़त्म हो जाना। of न छोड़ें।" },
    { t: "mc", q: "\"मैं देगू में पला-बढ़ा\" अंग्रेज़ी में?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = पलना-बढ़ना; past में grew up।" },
    { t: "mc", q: "\"क्या आप मेरी बिल्ली का ध्यान रख सकते हैं?\" अंग्रेज़ी में?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = ध्यान रखना; यह बँटता नहीं (look for = ढूँढना)।" },
    { t: "mc", q: "\"मैं सात बजे तुम्हें लेने आऊँगा\" अंग्रेज़ी में?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "सर्वनाम you, pick और up के बीच में आता है।" },

    { t: "order", p: "मैं अपना चश्मा ढूँढ रहा हूँ", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "चश्मा अंग्रेज़ी में हमेशा बहुवचन है: glasses (glass = गिलास या काँच)। ढूँढना = look for।" },
    { t: "order", p: "चलो, कोई प्लान सोचते हैं", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = सोच निकालना; अभी कोई प्लान है ही नहीं, इसलिए आर्टिकल a।" },
    { t: "order", p: "मैं तुम्हें लेने आऊँगी", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "सर्वनाम you, pick और up के बीच में आता है।" },

    { t: "fill", q: "Can you turn it __?", p: "इसे बंद कर दोगे?", a: ["off"], o: ["of", "on", "out"], why: "बंद करना = turn off। स्पेलिंग में of से न मिलाएँ।" },
    { t: "fill", q: "I work __ every morning.", p: "मैं रोज़ सुबह कसरत करता हूँ", a: ["out"], o: ["up", "off", "on"], why: "work out = कसरत करना।" },
    { t: "fill", q: "We ran out of __.", p: "अंडे ख़त्म हो गए", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "अंडे गिने जा सकते हैं; सब ख़त्म हो गए, तो बहुवचन: eggs।" },

    { t: "type", p: "प्लीज़ इसे बंद कर दीजिए (turn से)", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — सर्वनाम बीच में", x: ["on"], why: "सर्वनाम it, turn और off के बीच में आता है।" },
    { t: "type", p: "मैं दो बिल्लियों का ध्यान रखती हूँ", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — दो हैं तो बहुवचन", x: ["cat"], why: "look after = ध्यान रखना; दो बिल्लियाँ हैं, इसलिए बहुवचन: cats।" },
    { t: "type", p: "दूध ख़त्म हो गया (run out of से)", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — आर्टिकल लगेगा?", x: ["a"], why: "milk अगणनीय है, इसलिए आर्टिकल a नहीं लगता।" }
  ],

  numbers: [
    { t: "mc", q: "10,000 (दस हज़ार) अंग्रेज़ी में?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "तीन-तीन अंक: 10 + thousand। संख्या के बाद thousand में बहुवचन -s नहीं लगता।" },
    { t: "mc", q: "1,000,000 (दस लाख) अंग्रेज़ी में?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "दो कॉमा = million, यानी दस लाख। संख्या के बाद million में बहुवचन -s नहीं लगता।" },
    { t: "mc", q: "9:05 कैसे पढ़ेंगे?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1 से 9 मिनट से पहले oh लगता है।" },
    { t: "mc", q: "$4.99 को स्वाभाविक ढंग से कैसे पढ़ेंगे?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "क़ीमत दो संख्याओं में पढ़ी जाती है: four ninety-nine।" },
    { t: "mc", q: "साल 2026 अंग्रेज़ी में कैसे पढ़ेंगे?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "साल दो-दो अंकों में पढ़ा जाता है।" },

    { t: "order", p: "सात बजकर पंद्रह मिनट हुए हैं", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 = fifteen (आख़िर में ज़ोर), 50 = fifty (शुरू में ज़ोर)।" },
    { t: "order", p: "यह 15 डॉलर का है", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "एक से ज़्यादा डॉलर हों, तो बहुवचन: dollars।" },
    { t: "order", p: "हफ़्ते में दो बार", a: ["twice", "a", "week"], x: ["the", "one"], why: "\"हफ़्ते में कितनी बार\" के लिए आर्टिकल a: twice a week।" },

    { t: "fill", q: "It's __ quarter past ten.", p: "सवा दस बजे हैं", a: ["a"], o: ["the", "one", "an"], why: "quarter (पंद्रह मिनट) से पहले आर्टिकल a लगता है।" },
    { t: "fill", q: "That's fifty __ won.", p: "यह पचास हज़ार वॉन है", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 = fifty thousand। संख्या के बाद thousand में बहुवचन -s नहीं लगता।" },
    { t: "fill", q: "I'll be there in ten __.", p: "मैं दस मिनट में पहुँच जाऊँगा", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "दस मिनट हैं, इसलिए बहुवचन: minutes।" },

    { t: "type", p: "साढ़े तीन बजे हैं", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — घंटा और मिनट सीधे", x: ["thirteen"], why: "घंटा और मिनट सीधे पढ़ें: three thirty। thirteen (13) से न मिलाएँ।" },
    { t: "type", p: "20 डॉलर हुए", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — एक से ज़्यादा तो बहुवचन", x: ["dollar"], why: "20 डॉलर हैं, इसलिए बहुवचन: dollars।" },
    { t: "type", p: "मैं हफ़्ते में दो बार (twice) कसरत करता हूँ", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — \"में\" के लिए कौन-सा आर्टिकल?", x: ["the"], why: "\"हफ़्ते में\" = a week, यानी आर्टिकल a (the week ✗)।" }
  ],

  email: [
    { t: "mc", q: "Dear से शुरू करें, तो सबसे स्वाभाविक अभिवादन कौन-सा है?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear के बाद सिर्फ़ पद नहीं, नाम लिखें: Mr. / Ms. + सरनेम।" },
    { t: "mc", q: "रिपोर्ट अटैच करने की सूचना कैसे देंगे?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "जो रिपोर्ट सामने वाले को मिलेगी, वही ख़ास रिपोर्ट है, इसलिए आर्टिकल the। PFA की जगह यही लिखें।" },
    { t: "mc", q: "\"डेडलाइन कब है?\" अंग्रेज़ी में?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "इसी काम की ख़ास डेडलाइन है, इसलिए आर्टिकल the।" },
    { t: "mc", q: "जवाब देर से देने पर माफ़ी की जगह कौन-सा सकारात्मक वाक्य लिख सकते हैं?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience बिना माफ़ी के भी विनम्र लगता है। patients (मरीज़) से स्पेलिंग अलग रखें।" },
    { t: "mc", q: "शुक्रवार के ईमेल के आख़िर में अच्छा वाक्य कौन-सा है?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "एक वीकेंड की बात है: आर्टिकल a, और weekend एकवचन में।" },

    { t: "order", p: "मैंने रिपोर्ट अटैच कर दी है", a: ["I've", "attached", "the", "report"], x: ["a"], why: "जो रिपोर्ट सामने वाले को मिलेगी, वही; इसलिए आर्टिकल the।" },
    { t: "order", p: "चलिए, एक मीटिंग रख लेते हैं", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "अभी तय नहीं हुई कोई एक मीटिंग, इसलिए आर्टिकल a।" },
    { t: "order", p: "मैं देखकर आपको जवाब दूँगा", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = बाद में जवाब देना, साथ में to। भारत में revert चलता है, विदेश में यही कहें।" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "क्या आप शुक्रवार तक फ़ाइल भेज सकते हैं?", a: ["by"], o: ["until", "in", "at"], why: "डेडलाइन (\"तक\") के लिए by + दिन।" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "शेड्यूल के बारे में पूछने के लिए लिख रहा हूँ", a: ["to"], o: ["for", "about", "at"], why: "मक़सद बताने के लिए I'm writing to + V1।" },
    { t: "fill", q: "Thanks for all your hard __!", p: "आप सबकी मेहनत के लिए बहुत शुक्रिया!", a: ["work"], o: ["works", "working", "job"], why: "work (काम, मेहनत) अगणनीय है, इसलिए बहुवचन -s नहीं लगता।" },

    { t: "type", p: "कल मेरी छुट्टी है (off से)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be के साथ off", x: ["do"], why: "छुट्टी वाले दिन के लिए be off।" },
    { t: "type", p: "मैंने फ़ाइल अटैच कर दी है", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — वही फ़ाइल", x: ["a"], why: "जो फ़ाइल सामने वाले को मिलेगी, वही; इसलिए आर्टिकल the।" },
    { t: "type", p: "आपका वीकेंड अच्छा हो!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — एक वीकेंड से पहले आर्टिकल", x: ["the"], why: "एक वीकेंड है, इसलिए आर्टिकल a: a great weekend।" }
  ],

  idioms: [
    { t: "mc", q: "\"बाएँ हाथ का खेल है\" अंग्रेज़ी में?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "मुहावरा पूरा याद करें: आर्टिकल a के साथ, और cake एकवचन में।" },
    { t: "mc", q: "\"बहुत महँगा है\" (मुहावरे में) अंग्रेज़ी में?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an; leg व्यंजन से, इसलिए a।" },
    { t: "mc", q: "\"आज के लिए इतना ही\" (मीटिंग में भी ✓) अंग्रेज़ी में?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day — आर्टिकल a समेत पूरा याद करने वाला मुहावरा।" },
    { t: "mc", q: "\"मैं ख़ुशी से फूला नहीं समा रहा\" अंग्रेज़ी में?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine में न आर्टिकल लगता है, न बहुवचन -s।" },
    { t: "mc", q: "कौन-सा सिर्फ़ दोस्तों में बोला जाने वाला स्लैंग है?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap = \"सच में\", युवाओं का स्लैंग। बाकी मुहावरे ऑफ़िस में भी चलते हैं।" },

    { t: "order", p: "मैं पूरे ध्यान से सुन रहा हूँ", a: ["I'm", "all", "ears"], x: ["ear"], why: "\"पूरा शरीर कान\" वाला मुहावरा है, इसलिए बहुवचन: ears।" },
    { t: "order", p: "मुझे अब मन लगाकर पढ़ना होगा", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books — आर्टिकल the और बहुवचन books, जैसे हैं वैसे ही।" },
    { t: "order", p: "यह मेरी पसंद की चीज़ नहीं है", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea पूरा याद करें; my की जगह आर्टिकल नहीं लगता।" },

    { t: "fill", q: "Kill two __ with one stone.", p: "एक पंथ दो काज", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "दो चिड़ियाँ हैं, इसलिए बहुवचन: birds।" },
    { t: "fill", q: "Speak of the __!", p: "शैतान का नाम लिया और शैतान हाज़िर!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "हिंदी की तरह अंग्रेज़ी में भी शैतान ही आता है: devil।" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "मेरी तबीयत थोड़ी ठीक नहीं है", a: ["the"], o: ["a", "an", "my"], why: "under the weather — यह आर्टिकल the के साथ ही बोला जाता है।" },

    { t: "type", p: "बाएँ हाथ का खेल है (मुहावरे में)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — आर्टिकल न भूलें", x: ["the"], why: "a piece of cake — आर्टिकल a ज़रूर लगता है।" },
    { t: "type", p: "मैं दुआ करूँगी कि सब अच्छा हो (मुहावरे में)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — उँगलियाँ कितनी?", x: ["finger"], why: "दो उँगलियाँ क्रॉस होती हैं, इसलिए बहुवचन: fingers।" },
    { t: "type", p: "आज के लिए इतना ही (मुहावरे में)", a: ["Let's call it a day"], hint: "call it · day — the नहीं", x: ["the"], why: "call it a day — आर्टिकल the नहीं, a।" }
  ]
};
