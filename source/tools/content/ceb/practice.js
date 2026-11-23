/* Practice sets for the ceb-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Cebuano (house spelling, docs/profiles/ceb.md §2); answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names "article" or "plural". Every mc q and type hint contains a labels.cueTest word. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "Hain nga letra ang naay ngalan nga pareho og litok sa pulong nga \"see\"?", o: ["C", "S", "Z", "K"], why: "Ang ngalan sa C pareho gyud og litok sa \"see\". Ang ngalan sa S nagsugod sa vowel nga tingog, ang Z sa America \"zee\", ug ang K pareho sa kataposan sa \"OK\"." },
    { t: "mc", q: "Hain nga letra ang sunod dayon sa Q?", o: ["R", "P", "S", "O"], why: "Ang han-ay: …O, P, Q, R, S… Ang sunod sa Q mao ang R." },
    { t: "mc", q: "Hain ang sakto?", o: ["an M", "a M", "an B", "an U"], why: "Ang ngalan sa M nagsugod sa vowel nga tingog, mao nga article \"an\": \"an M\". Ang B \"a B\". Ang ngalan sa U pareho sa \"you\" ug nagsugod sa tingog nga y, mao nga \"a U\"." },
    { t: "mc", q: "Hain niini ang vowel nga letra?", o: ["U", "R", "S", "W"], why: "Lima ang vowel nga letra sa Iningles: A, E, I, O, U. Consonant ang R, S ug W." },
    { t: "mc", q: "Unsay ngalan sa letra nga W sa Iningles?", o: ["double u", "double v", "u u", "v v"], why: "Morag duha ka V ang hitsura niini, pero ang ngalan \"double u\", buot ipasabot duha ka U." },

    { t: "order", p: "Unsay ispeling ana?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "Ordinaryong verb ang \"spell\", mao nga helping verb \"do\" ang gamiton sa question. \"you\" ang subject, mao nga dili \"does\"; ug base form ang \"spell\", dili \"spelling\"." },
    { t: "order", p: "Nagsugod sa S ang akong ngalan", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "Ang ngalan sa S nagsugod sa vowel nga tingog, mao nga article \"an\", dili \"a\". Usa ra ang subject nga \"my name\", mao nga \"starts\" nga naay -s." },
    { t: "order", p: "Naay duha ka L sa \"hello\"", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "Duha ka L, mao nga plural: \"Ls\". Ug kay plural, \"are\" ang gamiton, dili \"is\"." },

    { t: "fill", q: "How do you __ your name?", p: "Unsay ispeling sa imong ngalan?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "Human sa helping verb \"do\", base form ang gamiton: \"How do you spell…?\"" },
    { t: "fill", q: "It starts __ a B.", p: "Nagsugod kini sa B", a: ["with"], o: ["by", "for", "in"], why: "\"start with\" ang gamiton kon moingon ka nga nagsugod ang pulong sa usa ka letra." },
    { t: "fill", q: "That's M __ in Mary.", p: "M kana, sama sa \"Mary\"", a: ["as"], o: ["so", "than", "of"], why: "Kon klarohon nimo ang letra pinaagi sa usa ka pulong, \"as in\" ang gamiton: \"M as in Mary\"." },

    { t: "type", p: "Nagsugod kini sa A (ayaw kalimti ang article)", a: ["It starts with an A", "It begins with an A"], hint: "start · A — ang ngalan sa A nagsugod sa vowel nga tingog", x: ["the", "start"], why: "Ang ngalan sa A nagsugod sa vowel nga tingog, mao nga article \"an\": \"an A\". Kon \"it\" ang subject, \"starts\" nga naay -s." },
    { t: "type", p: "Unsay ispeling sa imong ngalan? (gamita ang \"you\" ug \"spell\")", a: ["How do you spell your name"], hint: "spell · your name — gamita ang helping verb \"do\"", x: ["spelling", "does"], why: "Ordinaryong verb ang \"spell\", mao nga helping verb \"do\" ang gamiton sa question. \"you\" ang subject, mao nga dili \"does\"." },
    { t: "type", p: "Naa kini duha ka T (usa ka pulong ang gihisgotan; sugdi sa \"It\")", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — duha, mao nga plural", x: ["T", "have"], why: "Duha ka T, mao nga plural: \"Ts\" (puwede sab \"T's\"). Kon \"it\" ang subject, \"has\" ang gamiton, dili \"have\"." }
  ],

  pron: [
    { t: "mc", q: "Unsay Iningles sa 'bugas, kan-on'?", o: ["rice", "lice", "rise", "nice"], why: "\"rice\" nga nagsugod sa R ang bugas. Naa nay R ug L sa Bisaya, mao nga sayon ra kini: kon L ang imong isulti, mahimo kining \"lice\" (kuto)." },
    { t: "mc", q: "Unsay Iningles sa 'bentilador'?", o: ["fan", "pan", "van", "ban"], why: "Sa F, ang ngipon sa ibabaw modapat sa ngabil sa ubos ug hangin lang ang mogawas. Kon magtapot ang duha ka ngabil, mahimo kining P: \"pan\" (kaha)." },
    { t: "mc", q: "Unsay Iningles sa 'maghunahuna'?", o: ["think", "sink", "thing", "pink"], why: "Sa TH, ang tumoy sa dila mogawas gamay taliwala sa ngipon. Kon \"s\" ang imong isulti, mahimo kining \"sink\" (lababo)." },
    { t: "mc", q: "Unsay Iningles sa 'mobotar'?", o: ["vote", "boat", "goat", "bought"], why: "Ang V sama sa F ang baba, pero naay tingog. Kon magtapot ang duha ka ngabil, mahimo kining B: \"boat\" (sakayan)." },
    { t: "mc", q: "Unsay Iningles sa 'tuo' (ang balit-ad sa wala)?", o: ["right", "light", "fight", "bright"], why: "\"right\" nga nagsugod sa R ang tuo. Ang \"light\" nga nagsugod sa L mao ang suga." },

    { t: "order", p: "Saging kini", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "Ang \"banana\" nagsugod sa consonant nga tingog, mao nga article \"a\", dili \"an\". TH ang sinugdanan sa \"this\", dili D." },
    { t: "order", p: "tulo ka punoan sa kahoy", a: ["three", "trees"], x: ["tree", "free"], why: "Tulo, mao nga plural: \"trees\" nga naay -s. Sa Bisaya walay kausaban human sa \"tulo ka\"; sa Iningles kinahanglan ang -s. TH ang \"three\", TR ang \"tree\"." },
    { t: "order", p: "Ganahan ko og kape", a: ["I", "like", "coffee"], x: ["copy"], why: "F ang naa sa \"coffee\": ang ngipon sa ibabaw modapat sa ngabil sa ubos. Kon P, mahimo kining \"copy\" (kopya)." },

    { t: "fill", q: "I eat __ice every day.", p: "Mokaon ko og kan-on kada adlaw", a: ["r"], o: ["l", "n", "w"], why: "R ang sinugdanan sa \"rice\" (kan-on). Kon L, mahimo kining \"lice\" (kuto)." },
    { t: "fill", q: "I __ink so.", p: "Mao tingali, sa akong hunahuna", a: ["th"], o: ["s", "t", "p"], why: "TH ang sinugdanan sa \"think\". Kon \"s\", mahimo kining \"sink\" (lababo)." },
    { t: "fill", q: "This is my __.", p: "Akong bag kini", a: ["bag"], o: ["back", "bug", "beg"], why: "Mahuman sa g ang \"bag\". Kon k ang kataposang tingog, mahimo kining \"back\" (likod)." },

    { t: "type", p: "tulo ka punoan sa kahoy", a: ["three trees"], hint: "three · tree — tulo, mao nga plural", x: ["tree"], why: "TH ang \"three\" ug TR ang \"tree\". Tulo, mao nga plural -s: \"trees\"." },
    { t: "type", p: "duha ka sakayan", a: ["two boats"], hint: "two · boat — duha, mao nga plural", x: ["boat", "votes"], why: "B ang sinugdanan sa \"boat\" (sakayan); kon V, mahimo kining \"vote\". Duha, mao nga plural -s: \"boats\"." },
    { t: "type", p: "gaan kaayo", a: ["very light"], hint: "very · light — V ug L ang sinugdanan", x: ["berry"], why: "V ang sinugdanan sa \"very\" (ngipon sa ibabaw sa ngabil sa ubos), dili B. L ang sinugdanan sa \"light\"." }
  ],

  articles: [
    { t: "mc", q: "'Estudyante ko' sa Iningles?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Kinahanglan ang article \"a\" sa atubangan sa trabaho o kahimtang sa tawo. Sa Bisaya puwede nga walay \"usa ka\"; sa Iningles dili." },
    { t: "mc", q: "'Naa koy usa ka ideya' sa Iningles?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "Ang \"idea\" nagsugod sa vowel nga tingog, mao nga article \"an\"." },
    { t: "mc", q: "Unsay Iningles sa 'usa ka oras'?", o: ["an hour", "a hour", "one hours", "hour"], why: "Walay tingog ang h sa \"hour\". Vowel nga tingog ang sinugdanan, mao nga article \"an\"." },
    { t: "mc", q: "'Ganahan kaayo ko og iro' (tanang iro, sa kinatibuk-an) sa Iningles?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "Kon ang tibuok klase ang gihisgotan, plural nga walay article ang gamiton." },
    { t: "mc", q: "'Naa koy iro. Cute kaayo ang maong iro' sa Iningles?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Sa unang paghisgot, article \"a\". Kon nahisgotan na, \"the\"." },

    { t: "order", p: "Maestra ko", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Kinahanglan ang article \"a\" sa atubangan sa trabaho. Consonant ang sinugdanan sa \"teacher\", mao nga dili \"an\"." },
    { t: "order", p: "Puwede nimong sirad-an ang pultahan? (ang pultahan niining kwarto)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Pareho ninyong nahibaloan kon hain nga pultahan, mao nga article \"the\"." },
    { t: "order", p: "Dili ko moinom og kape", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Kape sa kinatibuk-an ang gihisgotan, mao nga walay article." },

    { t: "fill", q: "I'm __ university student.", p: "Estudyante ko sa unibersidad", a: ["a"], o: ["an", "the", "two"], why: "Ang \"university\" nagsugod sa tingog nga y, mao nga article \"a\". Ang tingog ang sundon, dili ang letra." },
    { t: "fill", q: "I have __ older sister.", p: "Naa koy usa ka magulang nga babaye", a: ["an"], o: ["a", "the", "two"], why: "Ang \"older\" nagsugod sa vowel nga tingog, mao nga article \"an\"." },
    { t: "fill", q: "I don't like __.", p: "Dili ko ganahan og iring (tanang iring, sa kinatibuk-an)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "Kon ang tibuok klase ang gihisgotan, plural nga walay article: \"cats\"." },

    { t: "type", p: "Naa koy usa ka ideya", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — article sa atubangan sa vowel nga tingog", x: ["a"], why: "Ang \"idea\" nagsugod sa vowel nga tingog, mao nga article \"an\"." },
    { t: "type", p: "Ganahan ko og iro (tanang iro, sa kinatibuk-an)", a: ["I like dogs", "I love dogs"], hint: "like · dog — plural kon tanan ang gihisgotan", x: ["dog", "a"], why: "Kon ang tibuok klase ang gihisgotan, plural nga walay article: \"dogs\"." },
    { t: "type", p: "Maniudto ta", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — naa bay article ang ngalan sa pagkaon?", x: ["a", "the"], why: "Walay article sa atubangan sa ngalan sa pagkaon sama sa \"lunch\"." }
  ],

  be: [
    { t: "mc", q: "'Gikapoy ko' sa Iningles?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "Ang adjective nagkinahanglan og be verb: \"I'm tired\". Walay be verb sa Bisaya, pero sa Iningles dili kini puwedeng mawala." },
    { t: "mc", q: "'Makasulti ba siya (lalaki) og Iningles?' sa Iningles?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Kon \"he\", \"does\" ang gamiton, ug human sa \"does\" base form ang verb nga walay -s." },
    { t: "mc", q: "'Naa siya (babaye) sa trabaho' sa Iningles?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Be verb ang gamiton sa lugar nga nahimutangan. Kon \"she\", \"is\"." },
    { t: "mc", q: "Tubaga og 'oo': \"Do you like coffee?\"", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "\"do\" ang gigamit sa pangutana, mao nga \"do\" sab ang sa tubag." },
    { t: "mc", q: "'Dili siya (babaye) mokaon og karne' sa Iningles?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Ang negative kon \"she\": \"doesn't\" + base form nga walay -s." },

    { t: "order", p: "Nagtrabaho sa Seoul ang akong igsoong lalaki", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "Usa ra ka tawo ang subject (he), mao nga dugangi og -s ang verb: \"works\". Naa nay verb, mao nga dili na kinahanglan ang be verb." },
    { t: "order", p: "Dili ko estudyante", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "\"not\" ang negative sa be verb. Kinahanglan ang article \"a\" sa atubangan sa \"student\"." },
    { t: "order", p: "Naa siyay duha ka iro (babaye siya)", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "Kon \"she\", \"has\". Human sa \"two\", plural ang noun: \"dogs\". Walay \"mga\" sa Iningles, -s ang gamiton." },

    { t: "fill", q: "My brother __ in Seoul.", p: "Nagpuyo sa Seoul ang akong igsoong lalaki", a: ["lives"], o: ["live", "is live", "living"], why: "\"he\" ang subject, mao nga dugangi og -s ang verb: \"lives\"." },
    { t: "fill", q: "__ you tired?", p: "Gikapoy ka?", a: ["Are"], o: ["Do", "Is", "Does"], why: "Adjective ang \"tired\", mao nga be verb ang gamiton sa pangutana. Kon \"you\", \"are\"." },
    { t: "fill", q: "We __ hungry.", p: "Gigutom mi", a: ["are"], o: ["is", "am", "do"], why: "Adjective ang \"hungry\", mao nga be verb ang gamiton. Kon \"we\", \"are\"." },

    { t: "type", p: "Maestro siya (lalaki)", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be verb ug article sa atubangan sa trabaho", x: ["the"], why: "Kon kinsa o unsa ang tawo, be verb ang gamiton. Kinahanglan ang article \"a\" sa atubangan sa trabaho. Lalaki siya, mao nga \"he\"." },
    { t: "type", p: "Dili ko ganahan og kape", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — negative sa ordinaryong verb", x: ["am"], why: "Verb na ang \"like\", mao nga \"don't\" ang negative, dili \"I'm not like\"." },
    { t: "type", p: "Naa ba siyay usa ka iring? (babaye siya)", a: ["Does she have a cat"], hint: "does · have · cat — article sa atubangan sa usa ka iring", x: ["has"], why: "Human sa \"does\", base form ang verb: \"have\". Usa ra ka iring, mao nga article \"a\"." }
  ],

  polite: [
    { t: "mc", q: "Sa kapehan, hain ang labing natural nga pag-order og usa ka latte?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Sa tindahan, natural ang \"Can I get…?\". Usa ra ka latte, mao nga naay article \"a\"." },
    { t: "mc", q: "Hain ang labing matinahuron nga pagpangayo og tabang sa tawo nga dili nimo kaila?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" ang matinahurong hangyo sa tawo nga bag-o pa nimong nakita." },
    { t: "mc", q: "Wala nimo masabti ang giingon. Hain ang matinahurong paghangyo nga balikon kini?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" ang matinahurong paagi sa paghangyo nga balikon ang giingon." },
    { t: "mc", q: "Matinahuron kaayo: 'Puwede mi nimo kuhaan og litrato?' sa Iningles?", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Human sa \"mind\", -ing form ang gamiton: \"taking\"." },
    { t: "mc", q: "Sa eroplano: 'Gusto unta ko og lingkoranan sa daplin sa bintana' sa Iningles?", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" ang matinahurong pagpangayo. Usa ra ka lingkoranan, mao nga article \"a\"." },

    { t: "order", p: "Puwede ko makakuha og usa ka latte?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Usa ra ka latte ug karon pa nimo gihisgotan, mao nga article \"a\"." },
    { t: "order", p: "Puwede nimong ablihan ang bintana, kon okey ra nimo? (ang bintana niining kwarto)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "Human sa \"mind\", -ing form. Pareho ninyong nahibaloan kon hain nga bintana, mao nga article \"the\"." },
    { t: "order", p: "Puwede ka mosulti og mas hinay-hinay?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "\"Could you…?\" ang gamiton sa matinahurong hangyo." },

    { t: "fill", q: "Would you mind __ the door?", p: "Puwede nimong sirad-an ang pultahan, kon okey ra nimo?", a: ["closing"], o: ["close", "to close", "closed"], why: "Human sa \"mind\", -ing form ang gamiton." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Puwede ko makakuha og usa ka bugnaw nga kape?", a: ["an"], o: ["a", "two", "many"], why: "Ang \"iced\" nagsugod sa vowel nga tingog, mao nga article \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(tubag sa \"Would you mind…?\") Sige, walay problema", a: ["all"], o: ["any", "one", "ever"], why: "Ang \"No, not at all\" nagpasabot nga dili gyud ka maglisod: 'Sige, buhaton nako'." },

    { t: "type", p: "Puwede ko nimo tabangan? (matinahuron, sa dili kaila)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — matinahurong hangyo sa dili kaila", x: ["can"], why: "Sa tawo nga dili nimo kaila, \"Could you…?\" ang gamiton." },
    { t: "type", p: "Gusto unta ko og lingkoranan sa daplin sa bintana", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — article sa atubangan sa usa ka lingkoranan", x: ["the"], why: "Usa ra ka lingkoranan ug karon pa nimo gihisgotan, mao nga article \"a\": \"a window seat\"." },
    { t: "type", p: "Duha ka kape, palihug", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — duha ka tasa, mao nga plural", x: ["coffee"], why: "Sa pag-order, ihapon ang kape matag tasa, mao nga plural -s: \"two coffees\"." }
  ],

  tense: [
    { t: "mc", q: "'Nag-inom ko og kape karon' sa Iningles?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Ang nagpadayon karon: be verb + -ing form." },
    { t: "mc", q: "'Niadto ko sa baybayon sa niaging weekend' sa Iningles?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "\"went\" ang past form sa \"go\". Bisan naay \"last weekend\", usbon gihapon ang verb. Naay article \"the\" ang baybayon: \"the beach\"." },
    { t: "mc", q: "Plano sa sunod bulan: 'Moadto ko sa Jeju' sa Iningles?", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "Ang plano nga nahimo na daan: \"be going to\" + base form." },
    { t: "mc", q: "Nibagting ang doorbell. Sa mismong higayon moingon ka: 'Ako nay moabli!'", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "\"will\" ang gamiton sa desisyon nga gihimo sa mismong higayon." },
    { t: "mc", q: "Unsay past form sa \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "Irregular verb ang \"see\": see, saw, seen." },

    { t: "order", p: "Nagtrabaho ko sa usa ka bangko (kanunay)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Simple present tense ang gamiton sa kanunay nga buhat. Usa ka bangko nga karon pa gihisgotan, mao nga article \"a\"." },
    { t: "order", p: "Tawgan tika unya", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "\"will\" ang gamiton sa saad nga gihimo karon dayon, ug base form ang sunod." },
    { t: "order", p: "Nakatan-aw ko og duha ka salida", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "\"saw\" ang past form sa \"see\". Human sa \"two\", plural ang noun: \"movies\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Nikaon ko og pizza kagabii", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Naay \"last night\", mao nga past form: \"ate\" (kon \"have\" ang verb, \"had\")." },
    { t: "fill", q: "__ you have fun?", p: "Nalingaw ba ka?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Sa pangutana bahin sa nahuman na: \"Did\" + base form." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Mobisita ko sa akong ginikanan (plano)", a: ["to"], o: ["for", "at", "on"], why: "Plano: \"be going to\" + base form." },

    { t: "type", p: "Sa balay ko nagtrabaho karong adlawa", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — nagpadayon karon", x: ["work"], why: "Ang buhat nga nagpadayon karong adlawa: be verb + -ing form." },
    { t: "type", p: "Niadto ko sa baybayon sa niaging weekend", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — past form ug article", x: ["a"], why: "\"went\" ang past form sa \"go\". Naay article \"the\" ang baybayon: \"the beach\"." },
    { t: "type", p: "Mokuha ko og usa ka klase sa pagluto (plano na daan)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — article sa atubangan sa usa ka klase", x: ["the"], why: "Plano nga nahimo na daan: \"going to\". Usa ka klase nga karon pa gihisgotan, mao nga article \"a\"." }
  ],

  prep: [
    { t: "mc", q: "'sa Mayo' sa Iningles?", o: ["in May", "on May", "at May", "to May"], why: "\"in\" ang gamiton sa bulan." },
    { t: "mc", q: "'sa Mayo 3' sa Iningles?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "\"on\" ang gamiton sa petsa." },
    { t: "mc", q: "'Naa ko sa bus (karon)' sa Iningles?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "\"on\" ang gamiton sa pampublikong sakyanan. Naay article \"the\" kay ang bus nga imong gisakyan karon ang gipasabot." },
    { t: "mc", q: "'sa gabii' sa Iningles?", o: ["at night", "on night", "in night", "at the night"], why: "Eksepsyon ang \"night\": \"at night\", walay article." },
    { t: "mc", q: "Hain ang sakto nga sentence?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "\"in\" ang gamiton sa siyudad, ug walay article \"the\" ang ngalan sa siyudad. Ang \"ang\" sa Bisaya dili \"the\"." },

    { t: "order", p: "Magkita ta sa estasyon (ang estasyon nga nahibaloan nato)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "\"at\" ang gamiton sa usa ka punto. Pareho ninyong nahibaloan kon hain nga estasyon, mao nga article \"the\"." },
    { t: "order", p: "Naa sa ibabaw sa lamesa ang akong cellphone", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "\"on\" ang gamiton kon naa sa ibabaw sa usa ka butang. Ang lamesa nga naa sa inyong atubangan ang gipasabot, mao nga article \"the\"." },
    { t: "order", p: "Magkita ta sa sunod semana", a: ["See", "you", "next", "week"], x: ["on"], why: "Walay preposition sa atubangan sa \"next\", bisan naay \"sa\" sa Bisaya." },

    { t: "fill", q: "The meeting is __ three.", p: "Alas tres ang miting", a: ["at"], o: ["on", "to", "of"], why: "\"at\" ang gamiton sa tukmang oras." },
    { t: "fill", q: "I was born __ 1998.", p: "Natawo ko niadtong 1998", a: ["in"], o: ["on", "at", "to"], why: "\"in\" ang gamiton sa tuig." },
    { t: "fill", q: "See you __ Friday.", p: "Magkita ta sa Biyernes", a: ["on"], o: ["in", "at", "to"], why: "\"on\" ang gamiton sa adlaw sa semana." },

    { t: "type", p: "Moinom ko og kape sa buntag (batasan nako)", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — \"in\" ug article", x: ["at"], why: "\"in\" ang gamiton sa bahin sa adlaw, ug kinahanglan ang article \"the\": \"in the morning\"." },
    { t: "type", p: "Naa ko sa balay karon", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — walay article", x: ["the"], why: "Walay article \"the\" sa \"at home\"." },
    { t: "type", p: "Magkita ta sa sunod weekend", a: ["See you next weekend"], hint: "see · next weekend — naa bay preposition sa atubangan sa \"next\"?", x: ["on"], why: "Walay preposition sa atubangan sa \"next\"." }
  ],

  smalltalk: [
    { t: "mc", q: "Nangutana ang imong kauban sa trabaho: \"How was your weekend?\" Unsay itubag?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Bahin sa nahuman na ang pangutana, mao nga past form ang itubag, ug dugangi og usa ka detalye." },
    { t: "mc", q: "Unsay isulti kon mouyon ka sa \"I don't drink coffee.\" (ikaw sab dili moinom)?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Sa negative nga sentence, \"Me neither\" ang gamiton." },
    { t: "mc", q: "Unsaon pagtapos sa istorya nga hapsay?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "Ang \"I should get going\" malumo nga paagi sa pagpanamilit." },
    { t: "mc", q: "Hain ang maayong isulti sa tawo nga bag-o pa nimong nailhan?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Ang panahon ang labing luwas nga hisgotan sa small talk. Likayi ang sweldo, kon minyo na ba, ug ang timbang." },
    { t: "mc", q: "Unsay itubag sa \"I went to Busan last weekend.\" aron ipakita nga interesado ka?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Ang \"Oh, really?\" ug \"That sounds fun!\" nagpakita nga interesado ka." },

    { t: "order", p: "Naa kay plano sa weekend?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "Plural ang \"plans\" niining pangutana, ug article \"the\" kay ang umaabot nga weekend ang gipasabot." },
    { t: "order", p: "Nalipay ko nga nakaistorya tika", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Panamilit kini sa kataposan sa istorya. Human sa \"nice\", -ing form ang gamiton: \"talking\"." },
    { t: "order", p: "Dili ko ganahan og mga salida nga makahadlok", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Tanang salida nga ingon niini ang gihisgotan, mao nga plural nga walay article: \"movies\"." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Maayo man! Ikaw, kumusta?", a: ["about"], o: ["for", "with", "of"], why: "Tubaga og mubo, unya ibalik ang pangutana: \"How about you?\"" },
    { t: "fill", q: "I know, __?", p: "Bitaw, no?", a: ["right"], o: ["light", "yes", "true"], why: "Ang \"I know, right?\" kusganong pag-uyon. R ang sinugdanan sa \"right\"." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Naa kay nakita nga nindot nga salida o serye karong bag-o?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Human sa \"any\" niining pangutana, plural ang countable noun." },

    { t: "type", p: "Kumusta ang imong weekend?", a: ["How was your weekend"], hint: "how · weekend — past form kay nahuman na", x: ["is"], why: "Nahuman na ang weekend, mao nga past form: \"was\"." },
    { t: "type", p: "Nindot ang panahon karon, no?", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — naa bay article?", x: ["a"], why: "Uncountable noun ang \"weather\", mao nga walay article \"a\": dili \"a nice weather\"." },
    { t: "type", p: "Ganahan ko motan-aw og salida (sa kinatibuk-an)", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — plural kon tanan ang gihisgotan", x: ["movie"], why: "Salida sa kinatibuk-an ang gihisgotan, mao nga plural: \"movies\"." }
  ],

  phrasal: [
    { t: "mc", q: "'Pasigaa kana' sa Iningles?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Ang pronoun \"it\" ibutang sa tunga sa phrasal verb: \"turn it on\"." },
    { t: "mc", q: "'Nahutdan mi og gatas' sa Iningles?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"run out of\" = mahutdan. Ayaw kalimti ang \"of\"." },
    { t: "mc", q: "'Nagdako ko sa Daegu' sa Iningles?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "\"grow up\" = modako. Ang past form: \"grew up\"." },
    { t: "mc", q: "'Puwede nimong atimanon ang akong iring?' sa Iningles?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"look after\" = atimanon. Dili kini mabulag. Ang \"look for\" mao ang 'pangitaon'." },
    { t: "mc", q: "'Sundoon tika sa alas siyete' sa Iningles?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Ang pronoun \"you\" ibutang sa tunga sa \"pick\" ug \"up\"." },

    { t: "order", p: "Gipangita nako ang akong antiyohos", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Kanunay plural ang antiyohos: \"glasses\" (ang \"glass\" baso). \"look for\" ang 'pangitaon'." },
    { t: "order", p: "Maghunahuna ta og usa ka plano", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "\"come up with\" = makahunahuna og bag-o. Usa ka plano nga wala pa, mao nga article \"a\"." },
    { t: "order", p: "Sundoon tika", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Ang pronoun \"you\" ibutang sa tunga sa \"pick\" ug \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Puwede nimong patyon kana?", a: ["off"], o: ["of", "on", "out"], why: "\"turn off\" ang gamiton sa pagpalong. Duha ka f ang \"off\"; lahi kini sa \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Mag-ehersisyo ko kada buntag", a: ["out"], o: ["up", "off", "on"], why: "\"work out\" = mag-ehersisyo." },
    { t: "fill", q: "We ran out of __.", p: "Nahutdan mi og itlog", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Countable noun ang itlog, mao nga plural ang gamiton kon nahurot na: \"eggs\"." },

    { t: "type", p: "Palihug patya kana", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — ang pronoun sa tunga", x: ["on"], why: "Ang pronoun \"it\" ibutang sa tunga sa \"turn\" ug \"off\"." },
    { t: "type", p: "Nag-atiman ko og duha ka iring (kanunay)", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — duha, mao nga plural", x: ["cat"], why: "\"look after\" = atimanon. Duha ka iring, mao nga plural -s: \"cats\"." },
    { t: "type", p: "Nahutdan mi og gatas", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — naa bay article?", x: ["a"], why: "Uncountable noun ang \"milk\", mao nga walay article \"a\"." }
  ],

  numbers: [
    { t: "mc", q: "Unsay Iningles sa 10,000 (diyes mil)?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Tulo ka digit matag grupo: 10 + thousand. Human sa numero, walay plural -s ang \"thousand\"." },
    { t: "mc", q: "Unsay Iningles sa 1,000,000 (usa ka milyon)?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Duha ka comma = million. Human sa numero, walay plural -s ang \"million\"." },
    { t: "mc", q: "Unsaon pagbasa ang 9:05 sa Iningles?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Sa minuto 1 hangtod 9, dugangi og \"oh\"." },
    { t: "mc", q: "Unsay natural nga pagbasa sa $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Ang presyo basahon nga duha ka numero: \"four ninety-nine\"." },
    { t: "mc", q: "Unsaon pagbasa ang tuig 2026 sa Iningles?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Ang tuig basahon nga tinagduha ka digit." },

    { t: "order", p: "Alas siyete kinse na", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "Ang 15 \"fifteen\" (stress sa kataposan); ang 50 \"fifty\" (stress sa sinugdanan)." },
    { t: "order", p: "Kinse dolyares kini", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Sobra sa usa ka dolyar, mao nga plural -s: \"dollars\"." },
    { t: "order", p: "kaduha sa usa ka semana", a: ["twice", "a", "week"], x: ["the", "one"], why: "Kon moingon ka kon kapila matag semana, article \"a\" ang gamiton: \"twice a week\"." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Kinse minutos human sa alas diyes", a: ["a"], o: ["the", "one", "an"], why: "Naay article \"a\" sa atubangan sa \"quarter\" (kinse minutos)." },
    { t: "fill", q: "That's fifty __ won.", p: "Singkuwenta mil won kana", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Ang 50,000 \"fifty thousand\". Human sa numero, walay plural -s ang \"thousand\"." },
    { t: "fill", q: "I'll be there in ten __.", p: "Moabot ko sulod sa napulo ka minuto", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Napulo ka minuto, mao nga plural: \"minutes\"." },

    { t: "type", p: "Alas tres y medya na", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — basaha ang oras ug ang minuto", x: ["thirteen"], why: "Basaha ang oras ug ang minuto: \"three thirty\". Lahi kini sa 13 (\"thirteen\")." },
    { t: "type", p: "Baynte dolyares kana", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — sobra sa usa, mao nga plural", x: ["dollar"], why: "Sobra sa usa ka dolyar, mao nga plural -s: \"dollars\"." },
    { t: "type", p: "Mag-ehersisyo ko kaduha sa usa ka semana", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — unsang article ang gamiton sa 'matag semana'?", x: ["the"], why: "Sa 'matag semana', article \"a\" ang gamiton: \"a week\", dili \"the week\"." }
  ],

  email: [
    { t: "mc", q: "Kon \"Dear\" ang sinugdanan, hain ang labing natural nga pangumusta?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Human sa \"Dear\", ibutang ang \"Mr.\" o \"Ms.\" ug ang apelyido, dili ang titulo ra." },
    { t: "mc", q: "Unsay isulti aron ipahibalo nga giuban nimo ang report sa email?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Ang report nga madawat sa imong gisulatan ang gipasabot, mao nga naay article \"the\"." },
    { t: "mc", q: "'Kanus-a ang deadline?' sa Iningles?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Ang deadline niining trabahoa ang gipasabot, mao nga article \"the\"." },
    { t: "mc", q: "Nadugay ang imong tubag. Hain ang positibong isulti puli sa pagpangayo og pasaylo?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Matinahuron ang \"Thanks for your patience\" bisan walay pagpangayo og pasaylo. Bantayi ang ispeling: ang \"patients\" mga pasyente." },
    { t: "mc", q: "Hain ang maayong panapos sa email sa Biyernes?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Usa ra ka weekend, mao nga article \"a\" ug singular ang \"weekend\"." },

    { t: "order", p: "Giuban nako ang report niining email", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Ang report nga madawat sa imong gisulatan ang gipasabot, mao nga article \"the\"." },
    { t: "order", p: "Mag-iskedyul ta og usa ka miting", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Usa ka miting nga wala pa maplano, mao nga article \"a\"." },
    { t: "order", p: "Susihon nako ug tubagon tika unya", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"get back to you\" = tubagon tika unya. \"to\" ang gamiton." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Puwede nimong ipadala nako ang file hangtod sa Biyernes?", a: ["by"], o: ["until", "in", "at"], why: "Sa deadline, \"by\" + adlaw ang gamiton." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Nagsulat ko aron mangutana bahin sa iskedyul", a: ["to"], o: ["for", "about", "at"], why: "Sa tuyo: \"I'm writing to\" + base form." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Salamat sa tanan ninyong kahago!", a: ["work"], o: ["works", "working", "job"], why: "Uncountable noun ang \"work\" (trabaho), mao nga walay plural -s." },

    { t: "type", p: "Wala koy trabaho ugma (pahulay nako)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — gamita ang be verb ug \"off\"", x: ["do"], why: "\"be off\" ang gamiton sa adlaw nga wala kay trabaho." },
    { t: "type", p: "Giuban nako ang file niining email", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — ang file nga nahibaloan na", x: ["a"], why: "Ang file nga madawat sa imong gisulatan ang gipasabot, mao nga article \"the\"." },
    { t: "type", p: "Maayong weekend nimo!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — article sa atubangan sa usa ka weekend", x: ["the"], why: "Usa ra ka weekend, mao nga article \"a\": \"a great weekend\"." }
  ],

  idioms: [
    { t: "mc", q: "'Sayon ra kaayo' sa Iningles?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Sag-uloha ang idiom nga tibuok: naay article \"a\" ug singular ang \"cake\"." },
    { t: "mc", q: "'Mahal kaayo' sa Iningles?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "Vowel nga tingog ang sinugdanan sa \"arm\", mao nga article \"an\". Consonant ang sinugdanan sa \"leg\", mao nga \"a\"." },
    { t: "mc", q: "'Hunong na ta karong adlawa' (puwede sab sa miting) sa Iningles?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "Sag-uloha nga tibuok ang \"call it a day\", apil ang article \"a\"." },
    { t: "mc", q: "'Lipay kaayo ko' sa Iningles?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "Ang \"on cloud nine\" walay article ug walay plural -s." },
    { t: "mc", q: "Hain ang slang nga para ra sa mga higala?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "Ang \"No cap\" slang sa mga batan-on nga nagpasabot og 'tinuod gyud'. Ang uban idiom nga puwede sab sa trabaho." },

    { t: "order", p: "Naminaw ko pag-ayo", a: ["I'm", "all", "ears"], x: ["ear"], why: "Morag puro dalunggan ang imong lawas, mao nga plural: \"ears\"." },
    { t: "order", p: "Kinahanglan kong magtuon pag-ayo", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "\"hit the books\": article \"the\" ug plural nga \"books\". Dili kini mausab." },
    { t: "order", p: "Dili kana ang akong gusto", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "Sag-uloha nga tibuok ang \"not my cup of tea\". Naa na ang \"my\", mao nga walay article." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Duha ka tuyo ang matuman sa usa ra ka lihok", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Duha ka langgam, mao nga plural: \"birds\"." },
    { t: "fill", q: "Speak of the __!", p: "(isulti kon moabot ang tawo nga gihisgotan pa lang)", a: ["devil"], o: ["tiger", "angel", "bird"], why: "\"devil\" (yawa) ang naa niining idiom." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Medyo dili maayo ang akong lawas", a: ["the"], o: ["a", "an", "my"], why: "\"under the weather\": kanunay article \"the\"." },

    { t: "type", p: "Sayon ra kaayo (idiom nga naay \"cake\")", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — ayaw kalimti ang article", x: ["the"], why: "\"a piece of cake\": kinahanglan ang article \"a\"." },
    { t: "type", p: "Mag-ampo ko nga molampos ka (idiom nga naay \"fingers\")", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — pila ka tudlo?", x: ["finger"], why: "Duha ka tudlo ang gamiton niining senyas, mao nga plural: \"fingers\"." },
    { t: "type", p: "Hunong na ta karong adlawa (idiom nga naay \"day\")", a: ["Let's call it a day"], hint: "call it · day — dili \"the\" ang article", x: ["the"], why: "\"call it a day\": article \"a\", dili \"the\"." }
  ]
};
