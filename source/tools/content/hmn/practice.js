/* Practice sets for the hmn-en course (docs/PRACTICE-SPEC.md v1), lessons alphabet … idioms.
   Prompts, why and hint are White Hmong (RPA); answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s, and their why names article or plural. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "Tus tsiaj ntawv twg lub npe hais nkaus li see (/siː/)?", o: ["C", "S", "Z", "K"], why: "C lub npe yog /siː/, nkaus li see. S = /es/, Z = /ziː/, K = /keɪ/." },
    { t: "mc", q: "Tus tsiaj ntawv twg nyob tom qab Q?", o: ["R", "P", "S", "O"], why: "…O, P, Q, R, S…: tom qab Q (/kjuː/) yog R (/ɑːr/)." },
    { t: "mc", q: "Lo lus twg raug?", o: ["an M", "a M", "an B", "an U"], why: "M lub npe /em/ muaj vowel ua ntej: article an. B (/biː/) → a B; U (/juː/) muaj /j/ ua ntej: a U." },
    { t: "mc", q: "Tus tsiaj ntawv twg yog vowel?", o: ["U", "R", "S", "W"], why: "Lus Askiv muaj tsib tus vowel: A, E, I, O, U. R, S, W yog consonant. Hauv RPA w yog vowel, tab sis hauv lus Askiv W yog consonant." },
    { t: "mc", q: "Tus tsiaj ntawv W lub npe hu li cas?", o: ["double u", "double v", "u u", "v v"], why: "W nkaus li ob tug V, tab sis nws lub npe yog double u (/ˈdʌbəljuː/): ob tug U." },

    { t: "order", p: "Lo lus ntawd sau li cas?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell yog verb: nug nrog do. you → do, tsis yog does; spell tsis hloov." },
    { t: "order", p: "Kuv lub npe muaj S ua ntej", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S lub npe /es/ muaj vowel ua ntej: article an. my name yog ib qho: starts (-s)." },
    { t: "order", p: "Hello muaj ob tug L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "Ob tug L: plural Ls. Plural → are, tsis yog is." },

    { t: "fill", q: "How do you __ your name?", p: "Koj lub npe sau li cas?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "Tom qab do, verb tsis hloov: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "Nws muaj B ua ntej.", a: ["with"], o: ["by", "for", "in"], why: "start with = muaj … ua ntej: siv with." },
    { t: "fill", q: "That's M __ in Mary.", p: "Yog M hauv Mary.", a: ["as"], o: ["so", "than", "of"], why: "Thaum koj qhia tus tsiaj ntawv nrog ib lo lus: M as in Mary." },

    { t: "type", p: "(siv article) Lo lus no muaj A ua ntej. Sau: It starts …", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A lub npe muaj vowel ua ntej", x: ["the", "start"], why: "A lub npe /eɪ/ muaj vowel ua ntej: article an. it → starts (-s)." },
    { t: "type", p: "(siv you thiab spell) Koj lub npe sau li cas?", a: ["How do you spell your name"], hint: "spell · your name — nug nrog do", x: ["spelling", "does"], why: "spell yog verb: nug nrog do. you → tsis yog does." },
    { t: "type", p: "(siv It has …) Lo lus no muaj ob tug T.", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — ob tug: plural", x: ["T", "have"], why: "Ob tug T: plural Ts. it → has, tsis yog have." }
  ],

  pron: [
    { t: "mc", q: "Lo lus twg yog txhuv, mov?", o: ["rice", "lice", "rise", "nice"], why: "rice = txhuv, mov: R, tus nplaig tsis txog dab tsi. Nrog L, nws yog lice = tuv." },
    { t: "mc", q: "Lo lus twg yog /fæn/?", o: ["fan", "pan", "van", "ban"], why: "/f/: hniav sab saud nyob saum di ncauj, tshuab cua. /p/: kaw di ncauj, ces qhib: pan." },
    { t: "mc", q: "Kuv xav tias nws zoo. 'xav' yog lo lus twg?", o: ["think", "sink", "thing", "pink"], why: "TH: tus nplaig nyob nruab nrab hniav. Nrog s, nws yog sink." },
    { t: "mc", q: "Lo lus twg yog /voʊt/?", o: ["vote", "boat", "goat", "bought"], why: "/v/: nkaus li /f/ nrog lub qa. /b/: kaw di ncauj: boat = nkoj." },
    { t: "mc", q: "Lo lus twg yog sab xis?", o: ["right", "light", "fight", "bright"], why: "right = sab xis: siv R. light (nrog L) = teeb." },

    { t: "order", p: "Nov yog ib lub txiv tsawb", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana muaj consonant /b/ ua ntej: article a. this: TH /ð/, tsis yog d." },
    { t: "order", p: "peb tsob ntoo", a: ["three", "trees"], x: ["tree", "free"], why: "Peb (3): plural -s, trees. three: TH /θ/; tree: /tr/." },
    { t: "order", p: "Kuv nyiam kav fes", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee: /f/, hniav sab saud nyob saum di ncauj. Nrog /p/, nws yog copy." },

    { t: "fill", q: "I eat __ice every day.", p: "Kuv noj mov txhua hnub.", a: ["r"], o: ["l", "n", "w"], why: "Mov = rice: R. Nrog L, nws yog lice = tuv." },
    { t: "fill", q: "I __ink so.", p: "Kuv xav tias yog.", a: ["th"], o: ["s", "t", "p"], why: "think: TH. Nrog s, nws yog sink." },
    { t: "fill", q: "This is my __.", p: "Nov yog kuv lub hnab.", a: ["bag"], o: ["back", "bug", "beg"], why: "Hnab = bag: /g/ kawg, hais nws. Nrog /k/, nws yog back = nraub qaum." },

    { t: "type", p: "peb tsob ntoo", a: ["three trees"], hint: "three · tree — peb (3): plural", x: ["tree"], why: "three: TH; tree: TR. Peb tsob: plural -s." },
    { t: "type", p: "ob lub nkoj", a: ["two boats"], hint: "two · boat — ob (2): plural", x: ["boat", "votes"], why: "Nkoj = boat: /b/. Ob lub: plural -s. Nrog /v/, nws yog vote." },
    { t: "type", p: "sib heev (tsis hnyav)", a: ["very light"], hint: "very · light — /v/ thiab /l/", x: ["berry"], why: "very: /v/ (hniav sab saud saum di ncauj); light: /l/ (tus nplaig tom qab hniav)." }
  ],

  articles: [
    { t: "mc", q: "'Kuv yog ib tug tub kawm ntawv' — lus Askiv twg raug?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Ua ntej hauj lwm los yog tub kawm ntawv, yeej siv article a." },
    { t: "mc", q: "'Kuv muaj ib (idea)' — lus Askiv twg raug?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea /aɪˈdiːə/ muaj vowel ua ntej: article an." },
    { t: "mc", q: "'ib teev' — lus Askiv twg raug?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour: h tsis hais, /aʊɚ/ muaj vowel ua ntej: article an." },
    { t: "mc", q: "'Kuv nyiam dev heev' (txhua tus dev) — lus Askiv twg raug?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "Txhua tus dev: plural dogs, tsis muaj article." },
    { t: "mc", q: "'Kuv muaj ib tug dev. Tus dev zoo nkauj heev' — lus Askiv twg raug?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Ib tug dev → article a. Tus dev (peb twb paub lawm) → article the." },

    { t: "order", p: "Kuv yog ib tug xib fwb", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Ua ntej hauj lwm: article a. teacher muaj consonant ua ntej, tsis yog an." },
    { t: "order", p: "Kaw qhov rooj puas tau? (qhov rooj ntawm no)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Ob tug neeg twb paub tias yog qhov rooj twg: article the." },
    { t: "order", p: "Kuv tsis haus kav fes", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Kav fes (txhua yam kav fes): tsis muaj article." },

    { t: "fill", q: "I'm __ university student.", p: "Kuv yog ib tug tub kawm ntawv (university).", a: ["a"], o: ["an", "the", "two"], why: "university muaj /j/ ua ntej, tsis yog vowel: article a. Saib IPA, tsis yog tus tsiaj ntawv." },
    { t: "fill", q: "I have __ older sister.", p: "Kuv muaj ib tug muam, nws laus tshaj kuv (txiv neej hais).", a: ["an"], o: ["a", "the", "two"], why: "older /ˈoʊldɚ/ muaj vowel ua ntej: article an." },
    { t: "fill", q: "I don't like __.", p: "Kuv tsis nyiam miv (txhua tus miv).", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "Txhua tus miv: plural cats, tsis muaj article." },

    { t: "type", p: "Kuv muaj ib (idea).", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — article ua ntej vowel", x: ["a"], why: "idea muaj vowel ua ntej: article an." },
    { t: "type", p: "Kuv nyiam dev (txhua tus dev).", a: ["I like dogs", "I love dogs"], hint: "like · dog — txhua tus: plural", x: ["dog", "a"], why: "Txhua tus dev: plural dogs, tsis muaj article." },
    { t: "type", p: "Peb mus noj su. (siv Let's)", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — noj su: puas muaj article?", x: ["a", "the"], why: "Ua ntej lunch, dinner, breakfast: tsis muaj article." }
  ],

  be: [
    { t: "mc", q: "'Kuv nkees' — lus Askiv twg raug?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "Lus Hmoob tsis siv yog ua ntej nkees. Lus Askiv yuav tsum muaj be: I'm tired." },
    { t: "mc", q: "'Nws (txiv neej) puas hais lus Askiv?' — lus Askiv twg raug?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he: siv does. Tom qab does, verb tsis muaj -s." },
    { t: "mc", q: "'Nws (poj niam) nyob tom hauj lwm' — lus Askiv twg raug?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Qhov chaw: lus Hmoob siv nyob, lus Askiv siv be. she → is (she's)." },
    { t: "mc", q: "Do you like coffee? Koj teb 'yog' li cas?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Nws nug nrog do: teb nrog do: Yes, I do." },
    { t: "mc", q: "'Nws (poj niam) tsis noj nqaij' — lus Askiv twg raug?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she: doesn't + verb tsis muaj -s." },

    { t: "order", p: "Kuv tus tij laug ua hauj lwm nyob St. Paul (txiv neej hais)", a: ["My", "brother", "works", "in", "St.", "Paul"], x: ["work", "is"], why: "brother = he: works (-s). Tsis siv be (is) nrog works." },
    { t: "order", p: "Kuv tsis yog ib tug tub kawm ntawv", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be + not. Ua ntej tub kawm ntawv: article a." },
    { t: "order", p: "Nws (poj niam) muaj ob tug dev", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she → has. Ob tug dev: plural dogs." },

    { t: "fill", q: "My brother __ in St. Paul.", p: "Kuv tus tij laug nyob St. Paul (txiv neej hais).", a: ["lives"], o: ["live", "is live", "living"], why: "brother = he: lives (-s). nyob = live, tsis siv be." },
    { t: "fill", q: "__ you tired?", p: "Koj puas nkees?", a: ["Are"], o: ["Do", "Is", "Does"], why: "nkees (tired) yog adjective: nug nrog be. you → are." },
    { t: "fill", q: "We __ hungry.", p: "Peb tshaib plab.", a: ["are"], o: ["is", "am", "do"], why: "tshaib plab (hungry) yog adjective: siv be. we → are." },

    { t: "type", p: "Nws (txiv neej) yog ib tug xib fwb.", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be thiab article", x: ["the"], why: "yog + hauj lwm: be (is) thiab article a." },
    { t: "type", p: "Kuv tsis nyiam kav fes.", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — like yog verb", x: ["am"], why: "like yog verb: tsis = don't (I'm not like ✗)." },
    { t: "type", p: "Nws (poj niam) puas muaj ib tug miv?", a: ["Does she have a cat"], hint: "does · have · cat — ib tug: article", x: ["has"], why: "does + have (tsis yog has). Ib tug miv: article a." }
  ],

  polite: [
    { t: "mc", q: "Hauv khw kav fes, koj xav tau ib khob latte. Koj hais li cas zoo tshaj?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Hauv khw: Can I get …? Ib khob: article a." },
    { t: "mc", q: "Koj thov ib tug neeg koj tsis paub pab koj. Lo lus twg zoo tshaj?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you …? = … puas tau?: zoo rau neeg koj tsis paub." },
    { t: "mc", q: "Koj tsis nkag siab. Koj nug dua li cas kom zoo?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? = Hais dua puas tau?" },
    { t: "mc", q: "Hais zoo heev: 'Thov yees duab rau peb puas tau?'", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Tom qab mind: siv -ing (taking)." },
    { t: "mc", q: "Saum dav hlau: 'Kuv xav zaum ze qhov rais.'", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like … = kuv xav tau …: zoo. Ib lub seat: article a." },

    { t: "order", p: "Thov ib khob latte puas tau?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Ib khob, koj nyuam qhuav thov: article a." },
    { t: "order", p: "Thov qhib qhov rais puas tau? (qhov rais ntawm no)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind + -ing. Qhov rais ntawm no, ob tug neeg paub: article the." },
    { t: "order", p: "Thov hais maj mam puas tau? (more slowly)", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you …? = … puas tau?: zoo." },

    { t: "fill", q: "Would you mind __ the door?", p: "Thov kaw qhov rooj puas tau?", a: ["closing"], o: ["close", "to close", "closed"], why: "Tom qab mind: siv -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Thov ib khob kav fes (iced coffee) puas tau?", a: ["an"], o: ["a", "two", "many"], why: "iced /aɪst/ muaj vowel ua ntej: article an." },
    { t: "fill", q: "No, not at __.", p: "(Teb Would you mind …?) Tau, tsis ua li cas.", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all = kuv tsis chim, kuv yuav pab koj." },

    { t: "type", p: "Pab kuv puas tau? (hais zoo)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — … puas tau?", x: ["can"], why: "Neeg koj tsis paub: Could you …?" },
    { t: "type", p: "Kuv xav zaum ze qhov rais (window seat).", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — ib lub: article", x: ["the"], why: "Ib lub seat, koj nyuam qhuav thov: article a: a window seat." },
    { t: "type", p: "Thov ob khob kav fes.", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — ob khob: plural", x: ["coffee"], why: "Hauv khw, suav kav fes ib khob ib khob: ob khob = plural coffees." }
  ],

  tense: [
    { t: "mc", q: "'Tam sim no kuv tab tom haus kav fes' — lus Askiv twg raug?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Tam sim no, tab tom: be + -ing." },
    { t: "mc", q: "'Hnub Saturday thiab Sunday dhau los kuv mus beach' — lus Askiv twg raug?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Nws dhau lawm: go → went (past tense). beach: article the (the beach)." },
    { t: "mc", q: "Koj twb npaj lawm: 'Kuv yuav mus Thaib teb (next month)'", o: ["I'm going to visit Thailand next month.", "I visit Thailand next month.", "I visited Thailand next month.", "I'm going visit Thailand next month."], why: "Koj twb npaj lawm: be going to + verb." },
    { t: "mc", q: "Muaj neeg tuaj ntawm qhov rooj. Koj hais tam sim no: 'Kuv mus qhib!'", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Koj xav thaum koj hais: will." },
    { t: "mc", q: "see — past tense yog dab tsi?", o: ["saw", "seed", "seen", "sawed"], why: "see tsis siv -ed: see - saw - seen." },

    { t: "order", p: "Kuv ua hauj lwm ntawm bank (txhua hnub)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Txhua hnub: Simple Present. Ib lub bank, koj nyuam qhuav hais: article a." },
    { t: "order", p: "Kuv mam li hu xov tooj rau koj", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "mam li = will (I'll): koj xav thaum koj hais." },
    { t: "order", p: "Nag hmo kuv saib ob zaj movie", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see → saw (past tense). Ob zaj: plural movies." },

    { t: "fill", q: "I __ pizza last night.", p: "Nag hmo kuv noj pizza.", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Nag hmo: eat → ate (past tense). have → had." },
    { t: "fill", q: "__ you have fun?", p: "Nag hmo koj puas zoo siab?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Nug txog yam dhau lawm: Did + verb tsis hloov." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Kuv yuav mus xyuas kuv niam txiv (kuv twb npaj lawm).", a: ["to"], o: ["for", "at", "on"], why: "Koj twb npaj lawm: be going to + verb." },

    { t: "type", p: "Hnub no kuv ua hauj lwm nyob tom tsev (from home).", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — tam sim no", x: ["work"], why: "Hnub no, tam sim no: be + -ing." },
    { t: "type", p: "Hnub Saturday thiab Sunday dhau los (last weekend) kuv mus beach. (past tense)", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — past tense thiab article", x: ["a"], why: "Nws dhau lawm: go → went. beach: article the (the beach)." },
    { t: "type", p: "Kuv yuav mus kawm ib chav kawm (cooking class). (siv going to)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — ib chav: article", x: ["the"], why: "Koj twb npaj lawm: going to. Ib chav kawm: article a." }
  ],

  prep: [
    { t: "mc", q: "'tsib hlis ntuj' (thaum twg?) — lus Askiv twg raug?", o: ["in May", "on May", "at May", "to May"], why: "Hli (May): siv in." },
    { t: "mc", q: "'tsib hlis ntuj, hnub 3' — lus Askiv twg raug?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Hnub (May 3rd): on." },
    { t: "mc", q: "'Tam sim no kuv nyob saum tsheb ntiav' — lus Askiv twg raug?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "Tsheb ntiav (bus): on. Lub tsheb ntiav uas koj caij: article the." },
    { t: "mc", q: "'thaum hmo ntuj' — lus Askiv twg raug?", o: ["at night", "on night", "in night", "at the night"], why: "night: at night, tsis muaj article." },
    { t: "mc", q: "Lo lus twg raug?", o: ["I live in St. Paul.", "I live at St. Paul.", "I live on St. Paul.", "I live in the St. Paul."], why: "Lub nroog: in. Tsis siv article the nrog St. Paul, Fresno." },

    { t: "order", p: "Wb sib ntsib ntawm station ntawd (peb paub)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Ib qho chaw: at. Ob tug neeg paub: article the." },
    { t: "order", p: "Kuv lub xov tooj nyob saum lub rooj (lub rooj ntawm no)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Saum: on. Lub rooj ntawm no, koj pom: article the." },
    { t: "order", p: "Lwm lim tiam sib ntsib dua", a: ["See", "you", "next", "week"], x: ["on"], why: "Ua ntej next: tsis siv preposition." },

    { t: "fill", q: "The meeting is __ three.", p: "Peb sib ntsib thaum 3 teev.", a: ["at"], o: ["on", "to", "of"], why: "Teev: siv at." },
    { t: "fill", q: "I was born __ 1998.", p: "Kuv yug xyoo 1998.", a: ["in"], o: ["on", "at", "to"], why: "Xyoo: siv in." },
    { t: "fill", q: "See you __ Friday.", p: "Hnub Friday sib ntsib dua.", a: ["on"], o: ["in", "at", "to"], why: "Hnub (Monday, Friday …): on." },

    { t: "type", p: "Sawv ntxov kuv haus kav fes.", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in thiab article", x: ["at"], why: "Sawv ntxov: siv in the morning, nrog article the." },
    { t: "type", p: "Tam sim no kuv nyob tom tsev.", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — tsis muaj article", x: ["the"], why: "at home: tsis siv article the." },
    { t: "type", p: "Sib ntsib dua (next weekend).", a: ["See you next weekend"], hint: "see · next weekend — puas siv preposition ua ntej next?", x: ["on"], why: "Ua ntej next: tsis siv preposition." }
  ],

  smalltalk: [
    { t: "mc", q: "Koj tus phooj ywg ntawm hauj lwm nug: How was your weekend? Koj teb li cas?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Nws nug nrog was: teb nrog past tense, thiab qhia ib yam tshiab." },
    { t: "mc", q: "I don't drink coffee. Koj teb 'Kuv kuj tsis haus' li cas?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Teb lus tsis (don't): Me neither." },
    { t: "mc", q: "Koj xav mus lawm. Koj hais li cas kom zoo?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going = kuv yuav tsum mus lawm: zoo thiab maj mam." },
    { t: "mc", q: "Koj nyuam qhuav ntsib ib tug neeg. Koj hais dab tsi zoo tshaj?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Huab cua (weather): zoo tshaj thaum nyuam qhuav ntsib." },
    { t: "mc", q: "Nws hais: I went to Sacramento last weekend. Koj teb li cas kom nws paub tias koj mloog?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? thiab That sounds fun!: koj mloog thiab koj nyiam." },

    { t: "order", p: "Koj puas muaj (plans) rau hnub Saturday thiab Sunday no?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "Lo lus nug no siv plural plans. Lub weekend no: article the." },
    { t: "order", p: "Zoo siab tau tham nrog koj", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Thaum koj mus: It was nice talking to you. nice + talking (-ing)." },
    { t: "order", p: "Kuv tsis nyiam (horror movies)", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Txhua yam movie: plural movies, tsis muaj article." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Kuv nyob zoo! Koj nyob li cas?", a: ["about"], o: ["for", "with", "of"], why: "Teb luv thiab nug rov qab: How about you?" },
    { t: "fill", q: "I know, __?", p: "Yog lawm, kuv pom zoo heev!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? = koj pom zoo heev. right: R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Koj puas tau saib ib yam zoo (lately)?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Nug nrog any: plural shows los yog movies." },

    { t: "type", p: "Koj hnub Saturday thiab Sunday dhau los (weekend) li cas? (past tense)", a: ["How was your weekend"], hint: "how · weekend — siv past tense", x: ["is"], why: "Nws dhau lawm: past tense was." },
    { t: "type", p: "Hnub no huab cua zoo heev.", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — puas siv article?", x: ["a"], why: "weather tsis suav tau: tsis siv article a (a nice weather ✗)." },
    { t: "type", p: "Kuv nyiam saib movie.", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — txhua yam: plural", x: ["movie"], why: "Txhua yam movie: plural movies." }
  ],

  phrasal: [
    { t: "mc", q: "'Qhib nws' (lub teeb) — lus Askiv twg raug?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Pronoun it nyob nruab nrab: turn it on." },
    { t: "mc", q: "'Peb cov mis nyuj tas lawm' — lus Askiv twg raug?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = tas lawm. Nco ntsoov of." },
    { t: "mc", q: "'Kuv hlob nyob Fresno' — lus Askiv twg raug?", o: ["I grew up in Fresno.", "I grew in Fresno up.", "I growed up in Fresno.", "I grew out in Fresno."], why: "grow up = hlob. Nws dhau lawm: grew up (past tense)." },
    { t: "mc", q: "'Koj tu kuv tus miv puas tau?' — lus Askiv twg raug?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = tu, faib tsis tau. look for = nrhiav." },
    { t: "mc", q: "'Kuv yuav tuaj coj koj thaum 7 teev' — lus Askiv twg raug?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Pronoun you nyob nruab nrab pick thiab up." },

    { t: "order", p: "Kuv tab tom nrhiav kuv lub (glasses)", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "glasses yeej yog plural (glass = khob). nrhiav = look for." },
    { t: "order", p: "Wb xav ib (plan) tshiab", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = xav tau. Ib (plan) tshiab: article a." },
    { t: "order", p: "Kuv yuav tuaj coj koj", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Pronoun you nyob nruab nrab pick thiab up." },

    { t: "fill", q: "Can you turn it __?", p: "Kaw nws (khoom) puas tau?", a: ["off"], o: ["of", "on", "out"], why: "Kaw = turn off. of tsis yog off." },
    { t: "fill", q: "I work __ every morning.", p: "Kuv (work out) txhua sawv ntxov.", a: ["out"], o: ["up", "off", "on"], why: "work out = (exercise): siv out." },
    { t: "fill", q: "We ran out of __.", p: "Peb cov qe tas lawm.", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Qe suav tau: plural eggs." },

    { t: "type", p: "Thov kaw nws (khoom).", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — pronoun nyob nruab nrab", x: ["on"], why: "Pronoun it nyob nruab nrab turn thiab off." },
    { t: "type", p: "Kuv tu ob tug miv.", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — ob tug: plural", x: ["cat"], why: "look after = tu. Ob tug: plural cats." },
    { t: "type", p: "Peb cov mis nyuj tas lawm.", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — puas siv article?", x: ["a"], why: "Mis nyuj (milk) tsis suav tau: tsis siv article a." }
  ],

  numbers: [
    { t: "mc", q: "10,000 (kaum txhiab) — lus Askiv twg raug?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "kaum txhiab = ten thousand. Tom qab ten, thousand tsis muaj plural -s." },
    { t: "mc", q: "1,000,000 (ib plhom) — lus Askiv twg raug?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "ib plhom (ib lab) = one million. Tom qab one, million tsis muaj plural -s." },
    { t: "mc", q: "9:05 nyeem li cas?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1 txog 9 tom qab teev: hais oh." },
    { t: "mc", q: "$4.99 nyeem li cas zoo tshaj?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Nqi: hais ob tus lej: four, ninety-nine." },
    { t: "mc", q: "Xyoo 2026 nyeem li cas?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Xyoo: faib ua ob: twenty, twenty-six." },

    { t: "order", p: "Tam sim no yog 7:15", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 = fifteen (stress tom qab); 50 = fifty (stress ua ntej)." },
    { t: "order", p: "Kaum tsib daus las", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Lus Hmoob daus las tsis muaj plural. Lus Askiv: ntau tshaj 1, plural dollars." },
    { t: "order", p: "Ib lim tiam ob zaug", a: ["twice", "a", "week"], x: ["the", "one"], why: "twice a week: article a, tsis yog the." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Tam sim no yog 10:15.", a: ["a"], o: ["the", "one", "an"], why: "Ua ntej quarter (15): article a." },
    { t: "fill", q: "That's fifty __ dollars.", p: "Qhov no nqi $50,000.", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 = fifty thousand. Tom qab fifty, thousand tsis muaj plural -s." },
    { t: "fill", q: "I'll be there in ten __.", p: "Kuv mam li tuaj txog (10 minutes).", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 (kaum): siv plural minutes." },

    { t: "type", p: "Tam sim no yog 3:30.", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — teev, ces tus lej", x: ["thirteen"], why: "Hais teev thiab tus lej: three thirty. Tsis yog thirteen (13)." },
    { t: "type", p: "Nees nkaum daus las.", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — ntau tshaj 1: plural", x: ["dollar"], why: "Lus Hmoob nees nkaum daus las tsis muaj plural. Lus Askiv: plural dollars." },
    { t: "type", p: "Ib lim tiam kuv (work out) ob zaug.", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — article twg?", x: ["the"], why: "Ib lim tiam: article a, a week (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Koj pib email nrog Dear. Lo lus twg zoo tshaj?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Tom qab Dear, sau lub npe; tsis txhob sau hauj lwm xwb." },
    { t: "mc", q: "Koj qhia tias koj muab (report) rau hauv email lawm. Lo lus twg raug?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Report ntawd, nws paub lawm: article the." },
    { t: "mc", q: "'(deadline) yog thaum twg?' — lus Askiv twg raug?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Deadline ntawm hauj lwm no: article the." },
    { t: "mc", q: "Koj tsis tau teb email ntev lawm. Koj hais dab tsi zoo dua thov txim?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience = ua tsaug koj siab ntev. patients = cov neeg mob." },
    { t: "mc", q: "Hnub Friday, kab kawg ntawm email:", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Ib lub weekend: article a, thiab weekend tsis yog plural." },

    { t: "order", p: "Kuv muab (report) rau hauv email lawm", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Report ntawd, nws paub lawm: article the." },
    { t: "order", p: "Cia peb teem sij hawm sib ntsib", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Ib (meeting) tshiab, tseem tsis tau muaj: article a." },
    { t: "order", p: "Kuv mam li teb koj", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = mam li teb koj: siv to." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Muab (file) rau kuv ua ntej hnub Friday puas tau?", a: ["by"], o: ["until", "in", "at"], why: "Hnub kawg: by + hnub." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Kuv sau los nug txog (schedule).", a: ["to"], o: ["for", "about", "at"], why: "Vim li cas koj sau: I'm writing to + verb." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Ua tsaug rau koj kev ua hauj lwm!", a: ["work"], o: ["works", "working", "job"], why: "work tsis suav tau: tsis muaj plural -s." },

    { t: "type", p: "Tag kis kuv tsis ua hauj lwm (hnub so).", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — siv be + off", x: ["do"], why: "Hnub so: be off." },
    { t: "type", p: "Kuv muab (file) rau hauv email lawm. (siv attach)", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — file ntawd: siv article", x: ["a"], why: "File ntawd, nws paub lawm: article the." },
    { t: "type", p: "Thov koj muaj ib (weekend) zoo!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — ib: article", x: ["the"], why: "Ib lub weekend: article a: a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "'Yooj yim heev' (paj lug) — lus Askiv twg raug?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Kawm paj lug huv si: article a, thiab cake tsis yog plural." },
    { t: "mc", q: "'Kim heev' (paj lug) — lus Askiv twg raug?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm muaj vowel ua ntej: article an. leg muaj consonant: a." },
    { t: "mc", q: "'Hnub no txaus lawm' (siv tau ntawm hauj lwm) — lus Askiv twg raug?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day: kawm huv si, nrog article a." },
    { t: "mc", q: "'Kuv zoo siab heev' (paj lug) — lus Askiv twg raug?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine: tsis muaj article, tsis muaj plural -s." },
    { t: "mc", q: "Slang twg siv nrog phooj ywg xwb?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap = tseeb: slang ntawm cov hluas. Lwm cov yog paj lug, siv tau ntawm hauj lwm." },

    { t: "order", p: "Kuv mloog koj (paj lug)", a: ["I'm", "all", "ears"], x: ["ear"], why: "Kuv tag nrho yog ntsej: plural ears." },
    { t: "order", p: "Kuv yuav tsum kawm ntawv heev (paj lug)", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books: article the thiab plural books." },
    { t: "order", p: "Kuv tsis nyiam qhov no (paj lug)", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea: my, tsis siv article the." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Ua ib zaug, tau ob yam (paj lug).", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Ob tug noog: plural birds." },
    { t: "fill", q: "Speak of the __!", p: "Peb nyuam qhuav hais koj lub npe, koj tuaj txog!", a: ["devil"], o: ["cat", "angel", "bird"], why: "Lus Askiv paj lug no siv devil: Speak of the devil!" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Kuv mob me ntsis (paj lug).", a: ["the"], o: ["a", "an", "my"], why: "under the weather: siv article the." },

    { t: "type", p: "Yooj yim heev (paj lug).", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — nco ntsoov siv article", x: ["the"], why: "a piece of cake: siv article a." },
    { t: "type", p: "Hmoov zoo! (paj lug, siv will: keep … crossed)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — pes tsawg tus ntiv tes?", x: ["finger"], why: "Ob tus ntiv tes: plural fingers." },
    { t: "type", p: "Hnub no txaus lawm (paj lug).", a: ["Let's call it a day"], hint: "call it · day — tsis yog the", x: ["the"], why: "call it a day: article a, tsis yog the." }
  ]
};
