/* Practice sets for the cs-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Czech; answers are English (shared with ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (docs/profiles/cs.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on
   a/an/the or a plural / countability form, and their why names the point (člen, množné číslo, počitatelné / nepočitatelné). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "Název kterého písmene zní stejně jako slovo „see“ (vidět)?", o: ["C", "S", "Z", "K"], why: "Název písmene C zní stejně jako „see“. České „cé“ tu neplatí; S, Z a K se jmenují jinak." },
    { t: "mc", q: "Které písmeno následuje hned po Q?", o: ["R", "P", "S", "O"], why: "Pořadí je … O, P, Q, R, S … Po Q následuje R." },
    { t: "mc", q: "Která možnost je správně?", o: ["an M", "a M", "an B", "an U"], why: "Název písmene M začíná samohláskou, proto člen „an“. Název B začíná souhláskou („a B“) a název U zní jako „you“, začíná tedy hláskou j („a U“)." },
    { t: "mc", q: "Které z těchto písmen je samohláska?", o: ["U", "R", "S", "W"], why: "Anglická abeceda má pět samohlásek: A, E, I, O, U. R, S a W jsou souhlásky." },
    { t: "mc", q: "Jak se anglicky jmenuje písmeno W?", o: ["double u", "double v", "u u", "v v"], why: "Vypadá jako dvě V, ale jmenuje se „double u“, tedy dvojité U. České „dvojité vé“ sem nepatří." },

    { t: "order", p: "Jak se to píše?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "„Spell“ je významové sloveso, proto otázku tvoří pomocné „do“. K podmětu „you“ patří „do“, ne „does“, a po něm je základní tvar „spell“." },
    { t: "order", p: "Moje jméno začíná na S", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "Název písmene S začíná samohláskou, proto člen „an“, ne „a“. Podmět „my name“ je ve 3. osobě, proto „starts“." },
    { t: "order", p: "Ve slově „hello“ jsou dvě L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L jsou dvě, proto množné číslo „Ls“ a s ním „are“, ne „is“." },

    { t: "fill", q: "How do you __ your name?", p: "Jak se píše tvoje jméno?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "Po pomocném „do“ následuje základní tvar slovesa: „How do you spell…?“" },
    { t: "fill", q: "It starts __ a B.", p: "Začíná to na B", a: ["with"], o: ["by", "for", "in"], why: "„Začínat na“ je anglicky „start with“." },
    { t: "fill", q: "That's M __ in Mary.", p: "To je M jako „Mary“", a: ["as"], o: ["so", "than", "of"], why: "Když písmeno upřesňuješ slovem, řekneš „as in“: „M as in Mary“." },

    { t: "type", p: "Začíná to na A (o slově; nezapomeň na člen)", a: ["It starts with an A", "It begins with an A"], hint: "start · A – název A začíná samohláskou", x: ["the", "start"], why: "Název písmene A začíná samohláskou, proto člen „an“. K podmětu „it“ patří „starts“." },
    { t: "type", p: "Jak se píše tvoje jméno? (použij „you“ a „spell“)", a: ["How do you spell your name"], hint: "spell · your name – otázka s „do“", x: ["spelling", "does"], why: "„Spell“ je významové sloveso, proto otázka s pomocným „do“. K podmětu „you“ nepatří „does“." },
    { t: "type", p: "Jsou v něm dvě T (o slově; začni slovem „It“)", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T – dvě, takže množné číslo", x: ["T", "have"], why: "T jsou dvě, proto množné číslo „Ts“. K podmětu „it“ patří „has“, ne „have“." }
  ],

  pron: [
    { t: "mc", q: "Které slovo znamená „kočka“?", o: ["cat", "cut", "cot", "kit"], why: "Kočka je „cat“ s otevřeným /æ/: ústa víc dokořán než u českého „e“. S krátkým /ʌ/, podobným českému „a“, vznikne „cut“ (řezat)." },
    { t: "mc", q: "Které slovo znamená „blázen“?", o: ["fool", "full", "fall", "foal"], why: "Blázen je „fool“ s dlouhým /uː/ a rty v kroužku. S krátkým uvolněným /ʊ/ vznikne „full“ (plný)." },
    { t: "mc", q: "Které slovo znamená „myslet“?", o: ["think", "sink", "thing", "pink"], why: "„Think“ začíná hláskou TH: špička jazyka patří mezi zuby. České „s“ nestačí, vznikne z něj „sink“ (dřez). A na konci je „k“, bez něj by to bylo „thing“ (věc)." },
    { t: "mc", q: "Které slovo znamená „hlasovat“?", o: ["vote", "boat", "goat", "bought"], why: "„Vote“ začíná hláskou V: horní zuby na spodním rtu. S B vznikne „boat“ (člun). V a B čeština rozlišuje; hlídej si spíš, aby z V nebylo W." },
    { t: "mc", q: "Které slovo znamená „muži“?", o: ["men", "man", "main", "mean"], why: "Muži jsou „men“ s /e/ jako české „e“. „Man“ (muž) má otevřené /æ/: jednotné a množné číslo tu odliší jen samohláska." },

    { t: "order", p: "Tohle je banán", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "„Banana“ začíná souhláskou, proto člen „a“, ne „an“. „This“ se píše s TH a nevyslovuje se s „d“." },
    { t: "order", p: "tři stromy", a: ["three", "trees"], x: ["tree", "free"], why: "Stromy jsou tři, proto množné číslo „trees“. „Three“ začíná hláskou TH, ne „f“ ani „t“." },
    { t: "order", p: "Mám rád / ráda kočky (kočky obecně)", a: ["I", "like", "cats"], x: ["cuts", "cat"], why: "O kočkách obecně mluvíš v množném čísle: „cats“ s otevřeným /æ/. S /ʌ/ vznikne „cuts“ (řezy)." },

    { t: "fill", q: "The price is too __.", p: "Cena je moc nízká", a: ["low"], o: ["law", "lot", "loud"], why: "Nízký je „low“ s dvojhláskou /oʊ/. S dlouhým /ɔː/ vznikne „law“ (zákon)." },
    { t: "fill", q: "I __ink so.", p: "Myslím, že ano", a: ["th"], o: ["s", "t", "p"], why: "„Think“ začíná na TH. Se „s“ vznikne „sink“ (dřez)." },
    { t: "fill", q: "This is my __.", p: "Tohle je moje taška", a: ["bag"], o: ["back", "bug", "beg"], why: "Taška je „bag“ se znělým g na konci. S neznělým k vznikne „back“ (záda) a s českým „e“ místo otevřeného æ zase „beg“ (prosit)." },

    { t: "type", p: "tři stromy", a: ["three trees"], hint: "three · tree – tři, takže množné číslo", x: ["tree"], why: "„Three“ začíná na TH, „tree“ na TR. Stromy jsou tři, proto množné číslo s -s." },
    { t: "type", p: "dva čluny", a: ["two boats"], hint: "two · boat – dva, takže množné číslo", x: ["boat", "votes"], why: "Člun je „boat“ s B. Čluny jsou dva, proto množné číslo s -s. S V vznikne „vote“ (hlas ve volbách)." },
    { t: "type", p: "velmi lehký (na váhu)", a: ["very light"], hint: "very · light – začínají na V a L", x: ["berry"], why: "„Very“ začíná hláskou V (horní zuby na spodním rtu, žádné W), „light“ hláskou L." }
  ],

  articles: [
    { t: "mc", q: "Jak se anglicky řekne „Jsem student“?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Před povoláním nebo postavením je vždy neurčitý člen „a“." },
    { t: "mc", q: "Jak se anglicky řekne „Mám nápad“?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "„Idea“ začíná samohláskou, proto člen „an“." },
    { t: "mc", q: "Jak se anglicky řekne „jedna hodina“ (60 minut)?", o: ["an hour", "a hour", "one hours", "hour"], why: "Písmeno h se ve slově „hour“ nevyslovuje. Slovo začíná samohláskou, proto člen „an“." },
    { t: "mc", q: "Jak se anglicky řekne „Miluju psy“ (psy obecně)?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "O něčem obecně mluvíš v množném čísle a bez členu." },
    { t: "mc", q: "Jak se anglicky řekne „Mám psa. Ten pes je moc roztomilý“?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Při první zmínce je člen „a“, při druhé už „the“." },

    { t: "order", p: "Jsem učitel / učitelka", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Před povoláním je neurčitý člen „a“. „Teacher“ začíná souhláskou, proto ne „an“." },
    { t: "order", p: "Můžeš zavřít dveře? (dveře této místnosti)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Oba víte, o které dveře jde, proto určitý člen „the“." },
    { t: "order", p: "Kávu nepiju", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "O kávě mluvíš obecně a „coffee“ je tu nepočitatelné, proto bez členu." },

    { t: "fill", q: "I'm __ university student.", p: "Studuju na vysoké škole", a: ["a"], o: ["an", "the", "two"], why: "„University“ začíná hláskou j, proto člen „a“. Rozhoduje výslovnost, ne pravopis." },
    { t: "fill", q: "I have __ older sister.", p: "Mám starší sestru", a: ["an"], o: ["a", "the", "two"], why: "„Older“ začíná samohláskou, proto člen „an“." },
    { t: "fill", q: "I don't like __.", p: "Nemám rád / ráda kočky (kočky obecně)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "O něčem obecně mluvíš v množném čísle a bez členu: „cats“." },

    { t: "type", p: "Mám nápad", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea – člen před samohláskou", x: ["a"], why: "„Idea“ začíná samohláskou, proto člen „an“." },
    { t: "type", p: "Mám rád / ráda psy (psy obecně)", a: ["I like dogs", "I love dogs"], hint: "like · dog – obecně, takže množné číslo", x: ["dog", "a"], why: "O něčem obecně mluvíš v množném čísle a bez členu: „dogs“." },
    { t: "type", p: "Pojďme na oběd (použij „have“)", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch – patří před název jídla člen?", x: ["a", "the"], why: "Před názvy denních jídel („breakfast“, „lunch“, „dinner“) se člen nedává." }
  ],

  be: [
    { t: "mc", q: "Jak se anglicky řekne „Jsem unavený / unavená“?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "Stav vyjadřuje sloveso „to be“. Anglická věta navíc potřebuje podmět „I“, i když ho čeština vynechává." },
    { t: "mc", q: "Jak se anglicky řekne „Mluví anglicky?“ (on)", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "K „he“ patří „does“ a sloveso po něm je v základním tvaru, bez -s." },
    { t: "mc", q: "Jak se anglicky řekne „Je v práci“ (ona)?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Místo, kde někdo je, vyjadřuje sloveso „to be“; k „she“ patří „is“." },
    { t: "mc", q: "Jak odpovíš kladně na otázku „Do you like coffee?“", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Otázka je s „do“, proto i krátká odpověď: „Yes, I do.“" },
    { t: "mc", q: "Jak se anglicky řekne „Nejí maso“ (ona)?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Zápor ve 3. osobě je „doesn't“ a základní tvar slovesa bez -s." },

    { t: "order", p: "Můj bratr pracuje v Brně", a: ["My", "brother", "works", "in", "Brno"], x: ["work", "is"], why: "Podmět je jeden člověk (he), proto „works“ s -s. Sloveso „to be“ sem nepatří." },
    { t: "order", p: "Nejsem student / studentka", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "Zápor slovesa „to be“ tvoří „not“. Před povoláním nebo postavením je člen „a“." },
    { t: "order", p: "Má dva psy (ona)", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "K „she“ patří „has“. Psi jsou dva, proto množné číslo „dogs“." },

    { t: "fill", q: "My brother __ in Prague.", p: "Můj bratr bydlí v Praze", a: ["lives"], o: ["live", "is live", "living"], why: "Podmět je „he“, proto sloveso s -s: „lives“." },
    { t: "fill", q: "__ you tired?", p: "Jsi unavený / unavená?", a: ["Are"], o: ["Do", "Is", "Does"], why: "„Tired“ je stav, proto otázka se slovesem „to be“; k „you“ patří „are“." },
    { t: "fill", q: "We __ hungry.", p: "Máme hlad", a: ["are"], o: ["is", "am", "do"], why: "„Hungry“ je stav, proto „to be“; k „we“ patří „are“. Česky hlad „máme“, anglicky „jsme hladoví“." },

    { t: "type", p: "Je učitel (on)", a: ["He's a teacher", "He is a teacher"], hint: "teacher – sloveso „to be“ a člen před povoláním", x: ["the"], why: "Říkáš, kým někdo je, proto „to be“. Před povoláním je člen „a“." },
    { t: "type", p: "Nemám rád / ráda kávu", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee – zápor významového slovesa", x: ["am"], why: "„Like“ je významové sloveso, zápor tvoří „don't“ („I'm not like“ ✗)." },
    { t: "type", p: "Má kočku? (ona; jednu kočku)", a: ["Does she have a cat"], hint: "does · have · cat – člen před jednou kočkou", x: ["has"], why: "Po „does“ je základní tvar „have“. Kočka je jedna a mluvíš o ní poprvé, proto člen „a“." }
  ],

  polite: [
    { t: "mc", q: "Objednáváš si v kavárně latte. Která věta zní nejpřirozeněji?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "V obchodě a v kavárně je přirozené „Can I get …?“. Latte je jedno, proto i člen „a“." },
    { t: "mc", q: "Žádáš o pomoc neznámého člověka. Která věta je nejzdvořilejší?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "„Could you …?“ je zdvořilá prosba vhodná pro lidi, které neznáš." },
    { t: "mc", q: "Nerozumíš, co druhý řekl. Kterou větou ho zdvořile požádáš o zopakování?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "„Could you say that again?“ je zdvořilá prosba o zopakování." },
    { t: "mc", q: "Jak velmi zdvořile požádáš: „Nevadilo by vám nás vyfotit?“", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Po „mind“ následuje tvar s -ing: „taking“." },
    { t: "mc", q: "Jak v letadle požádáš o místo u okna?", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "„I'd like …“ je zdvořilá žádost. Místo je jedno, proto člen „a“." },

    { t: "order", p: "Můžu dostat latte?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Latte je jedno a objednáváš ho poprvé, proto člen „a“." },
    { t: "order", p: "Nevadilo by vám otevřít okno? (okno této místnosti)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "Po „mind“ je tvar s -ing. Oba víte, o které okno jde, proto člen „the“." },
    { t: "order", p: "Můžete prosím mluvit pomaleji?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Zdvořilá prosba začíná „Could you …?“. Ke slovesu patří příslovce „slowly“, ne přídavné jméno „slow“." },

    { t: "fill", q: "Would you mind __ the door?", p: "Nevadilo by vám zavřít dveře?", a: ["closing"], o: ["close", "to close", "closed"], why: "Po „mind“ následuje tvar s -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Můžu dostat ledovou kávu?", a: ["an"], o: ["a", "two", "many"], why: "„Iced“ začíná samohláskou, proto člen „an“." },
    { t: "fill", q: "No, not at __.", p: "Vůbec ne (kladná odpověď na „Would you mind …?“)", a: ["all"], o: ["any", "one", "ever"], why: "„No, not at all“ znamená „vůbec mi to nevadí“, tedy „ano, udělám to“." },

    { t: "type", p: "Můžete mi prosím pomoct? (zdvořile; použij „could“)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help – zdvořilá prosba", x: ["can"], why: "Neznámého člověka požádáš pomocí „Could you …?“." },
    { t: "type", p: "Chtěl / chtěla bych místo u okna", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat – člen před jedním místem", x: ["the"], why: "Místo je jedno a mluvíš o něm poprvé, proto člen „a“: „a window seat“." },
    { t: "type", p: "Dvě kávy, prosím", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee – dvě, takže množné číslo", x: ["coffee"], why: "Při objednávce se káva počítá na šálky, proto množné číslo: „two coffees“." }
  ],

  tense: [
    { t: "mc", q: "Jak se anglicky řekne „Právě teď piju kávu“?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Děj, který probíhá právě teď, vyjadřuje „be“ a tvar s -ing." },
    { t: "mc", q: "Jak se anglicky řekne „Minulý víkend jsem byl / byla na pláži“?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Minulý tvar slovesa „go“ je „went“. Pláž má určitý člen: „the beach“." },
    { t: "mc", q: "Mluvíš o plánu na příští měsíc. Jak řekneš „Chystám se do Chorvatska“?", o: ["I'm going to visit Croatia next month.", "I visit Croatia next month.", "I visited Croatia next month.", "I'm going visit Croatia next month."], why: "Plán připravený předem vyjadřuje „be going to“ a základní tvar slovesa." },
    { t: "mc", q: "Zvoní zvonek a ty se hned rozhodneš: „Já otevřu!“ Jak to řekneš?", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Rozhodnutí v okamžiku řeči vyjadřuje „will“." },
    { t: "mc", q: "Jaký je minulý tvar slovesa „see“?", o: ["saw", "seed", "seen", "sawed"], why: "„See“ je nepravidelné sloveso: see – saw – seen." },

    { t: "order", p: "Pracuju v bance (trvale)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Trvalý stav patří do přítomného času prostého. O bance mluvíš poprvé a je jedna z mnoha, proto člen „a“." },
    { t: "order", p: "Zavolám ti později", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Slib daný v okamžiku řeči vyjadřuje „will“: „I'll call“." },
    { t: "order", p: "Viděl / viděla jsem dva filmy", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "Minulý tvar slovesa „see“ je „saw“. Filmy jsou dva, proto množné číslo „movies“." },

    { t: "fill", q: "I __ pizza last night.", p: "Včera večer jsem měl / měla pizzu", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Minulý tvar slovesa „eat“ je „ate“ (u „have“ je to „had“)." },
    { t: "fill", q: "__ you have fun?", p: "Bavilo tě to?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Otázku na minulost tvoří „Did“ a základní tvar slovesa." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Chystám se navštívit rodiče", a: ["to"], o: ["for", "at", "on"], why: "Plán vyjadřuje „be going to“ a základní tvar slovesa." },

    { t: "type", p: "Dnes pracuju z domu (jen dnes, právě teď)", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today – děj, který probíhá teď", x: ["work"], why: "To, co děláš právě dnes, vyjadřuje „be“ a tvar s -ing." },
    { t: "type", p: "Minulý víkend jsem jel / jela na pláž", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend – minulý tvar a člen", x: ["a"], why: "Minulý tvar slovesa „go“ je „went“. Pláž má určitý člen: „the beach“." },
    { t: "type", p: "Chystám se na kurz vaření (plán; jeden kurz)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class – člen před jedním kurzem", x: ["the"], why: "Plán připravený předem vyjadřuje „going to“. O kurzu mluvíš poprvé a je jeden, proto člen „a“." }
  ],

  prep: [
    { t: "mc", q: "Jak se anglicky řekne „v květnu“?", o: ["in May", "on May", "at May", "to May"], why: "Před měsícem je „in“." },
    { t: "mc", q: "Jak se anglicky řekne „třetího května“ (kdy?)", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Před datem je „on“." },
    { t: "mc", q: "Jak se anglicky řekne „Jsem (právě) v autobuse“?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "U hromadné dopravy je „on“, i když česky říkáš „v autobuse“. Jde o autobus, kterým právě jedeš, proto člen „the“." },
    { t: "mc", q: "Jak se anglicky řekne „v noci“?", o: ["at night", "on night", "in night", "at the night"], why: "„Night“ je výjimka: „at night“, a to bez členu." },
    { t: "mc", q: "Která věta je správně?", o: ["I live in Prague.", "I live at Prague.", "I live on Prague.", "I live in the Prague."], why: "Před městem je „in“. Jména měst jsou bez členu „the“." },

    { t: "order", p: "Sejdeme se na nádraží (na tom, které oba známe)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Bod, kde se sejdete, má „at“. Nádraží oba znáte, proto člen „the“." },
    { t: "order", p: "Můj telefon je na stole (na tomto stole)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Na povrchu je „on“. Jde o stůl, který oba vidíte, proto člen „the“." },
    { t: "order", p: "Uvidíme se příští týden", a: ["See", "you", "next", "week"], x: ["on"], why: "Před „next“ se předložka nedává." },

    { t: "fill", q: "The meeting is __ three.", p: "Porada je ve tři", a: ["at"], o: ["on", "to", "of"], why: "Před přesným časem je „at“, i když česky říkáš „ve tři“." },
    { t: "fill", q: "I was born __ 1998.", p: "Narodil / narodila jsem se v roce 1998", a: ["in"], o: ["on", "at", "to"], why: "Před rokem je „in“." },
    { t: "fill", q: "See you __ Friday.", p: "Uvidíme se v pátek", a: ["on"], o: ["in", "at", "to"], why: "Před dnem v týdnu je „on“, i když česky říkáš „v pátek“." },

    { t: "type", p: "Ráno piju kávu", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning – „in“ a člen", x: ["at"], why: "Části dne mají „in“ a určitý člen: „in the morning“." },
    { t: "type", p: "Jsem teď doma", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home – bez členu", x: ["the"], why: "„At home“ se říká bez členu „the“." },
    { t: "type", p: "Uvidíme se příští víkend", a: ["See you next weekend"], hint: "see · next weekend – patří před „next“ předložka?", x: ["on"], why: "Před „next“ se předložka nedává." }
  ],

  smalltalk: [
    { t: "mc", q: "Kolega se zeptá: „How was your weekend?“ Jak odpovíš?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Otázka je na minulost, proto minulý čas a k tomu jedna informace navíc." },
    { t: "mc", q: "Někdo řekne „I don't drink coffee.“ a ty kávu taky nepiješ. Jak zareaguješ?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Souhlas se zápornou větou je „Me neither“." },
    { t: "mc", q: "Jak přirozeně ukončíš rozhovor?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "„I should get going“ je zdvořilý způsob, jak se rozloučit." },
    { t: "mc", q: "Čím se hodí začít hovor s člověkem, kterého vidíš poprvé?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Počasí je nejbezpečnější téma. Plat, rodinný stav a váha se při prvním setkání nehodí." },
    { t: "mc", q: "Někdo řekne „I went to Brno last weekend.“ Jak projevíš zájem?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "„Oh, really?“ a „That sounds fun!“ ukazují, že tě to zajímá." },

    { t: "order", p: "Máš nějaké plány na víkend?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "V této otázce je „plans“ v množném čísle. Jde o nadcházející víkend, proto člen „the“." },
    { t: "order", p: "Bylo fajn si popovídat", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Touto větou se loučíš na konci rozhovoru. Po „nice“ je tvar s -ing: „talking“." },
    { t: "order", p: "Nemám rád / ráda horory", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "O filmech mluvíš obecně, proto množné číslo bez členu: „horror movies“." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Docela dobře! A ty?", a: ["about"], o: ["for", "with", "of"], why: "Odpověz krátce a otázku vrať: „How about you?“" },
    { t: "fill", q: "I know, __?", p: "Že jo? / Přesně tak!", a: ["right"], o: ["light", "yes", "true"], why: "„I know, right?“ vyjadřuje silný souhlas. Píše se s R: „right“." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Viděl / viděla jsi v poslední době nějaké dobré filmy nebo seriály?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Počitatelné podstatné jméno je po „any“ v otázce v množném čísle." },

    { t: "type", p: "Jak bylo o víkendu? (zeptej se kamaráda)", a: ["How was your weekend"], hint: "how · weekend – minulý čas", x: ["is"], why: "Víkend už skončil, proto minulý čas: „was“." },
    { t: "type", p: "Dnes je hezké počasí", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today – patří sem člen „a“?", x: ["a"], why: "„Weather“ je nepočitatelné, proto bez členu „a“ („a nice weather“ ✗)." },
    { t: "type", p: "Rád / ráda se dívám na filmy", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie – obecně, takže množné číslo", x: ["movie"], why: "O filmech mluvíš obecně, proto množné číslo: „movies“." }
  ],

  phrasal: [
    { t: "mc", q: "Jak se anglicky řekne „Zapni to“?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Zájmeno „it“ patří doprostřed frázového slovesa: „turn it on“." },
    { t: "mc", q: "Jak se anglicky řekne „Došlo nám mléko“?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "„Run out of“ = dojít, spotřebovat se. Nevynech „of“." },
    { t: "mc", q: "Jak se anglicky řekne „Vyrostl / vyrostla jsem v Ostravě“?", o: ["I grew up in Ostrava.", "I grew in Ostrava up.", "I growed up in Ostrava.", "I grew out in Ostrava."], why: "„Grow up“ = vyrůst; minulý tvar je „grew up“." },
    { t: "mc", q: "Jak se anglicky řekne „Můžeš se mi postarat o kočku?“", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "„Look after“ = starat se o někoho. Nedělí se. („Look for“ znamená hledat.)" },
    { t: "mc", q: "Jak se anglicky řekne „Vyzvednu tě v sedm“?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Zájmeno „you“ patří mezi „pick“ a „up“." },

    { t: "order", p: "Hledám brýle", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Brýle jsou i anglicky vždy v množném čísle: „glasses“ („glass“ je sklenice). Hledat je „look for“." },
    { t: "order", p: "Pojďme vymyslet nějaký plán", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "„Come up with“ = vymyslet. Plán zatím neexistuje, je to „nějaký“ plán, proto člen „a“." },
    { t: "order", p: "Vyzvednu tě", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Zájmeno „you“ patří mezi „pick“ a „up“." },

    { t: "fill", q: "Can you turn it __?", p: "Můžeš to vypnout?", a: ["off"], o: ["of", "on", "out"], why: "Vypnout je „turn off“. Pozor na pravopis: „off“, ne „of“." },
    { t: "fill", q: "I work __ every morning.", p: "Každé ráno cvičím", a: ["out"], o: ["up", "off", "on"], why: "„Work out“ = cvičit, posilovat." },
    { t: "fill", q: "We ran out of __.", p: "Došla nám vejce", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Vejce jsou počitatelná, a když dojdou, mluvíš o nich v množném čísle: „eggs“." },

    { t: "type", p: "Vypni to, prosím", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off – zájmeno patří doprostřed", x: ["on"], why: "Zájmeno „it“ patří mezi „turn“ a „off“." },
    { t: "type", p: "Starám se o dvě kočky", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat – dvě, takže množné číslo", x: ["cat"], why: "„Look after“ = starat se. Kočky jsou dvě, proto množné číslo „cats“." },
    { t: "type", p: "Došlo nám mléko", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk"], hint: "run out of · milk – patří sem člen?", x: ["a"], why: "„Milk“ je nepočitatelné, proto bez členu „a“." }
  ],

  numbers: [
    { t: "mc", q: "Jak se anglicky řekne 10,000 (deset tisíc)?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Číslo se dělí po třech číslicích: 10 + thousand. Po číslovce je „thousand“ bez -s, i když čeština tu má množné číslo." },
    { t: "mc", q: "Jak se anglicky řekne 1,000,000 (milion)?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Dvě čárky znamenají „million“. Po číslovce je „million“ bez -s množného čísla." },
    { t: "mc", q: "Jak přečteš čas 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Před minutami 1–9 se říká „oh“." },
    { t: "mc", q: "Jak nejpřirozeněji přečteš cenu $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Cena se čte jako dvě čísla: „four ninety-nine“." },
    { t: "mc", q: "Jak přečteš letopočet 2026?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Letopočet se čte po dvojicích číslic." },

    { t: "order", p: "Je sedm patnáct", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 je „fifteen“ (přízvuk na druhé slabice), 50 je „fifty“ (přízvuk na první)." },
    { t: "order", p: "Stojí to patnáct dolarů", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Dolarů je víc než jeden, proto množné číslo: „dollars“." },
    { t: "order", p: "dvakrát týdně", a: ["twice", "a", "week"], x: ["the", "one"], why: "„Kolikrát za týden“ se říká s neurčitým členem „a“: „twice a week“." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Je čtvrt na jedenáct", a: ["a"], o: ["the", "one", "an"], why: "Před „quarter“ (čtvrthodina) je člen „a“. A pozor: angličtina počítá od hodiny, která už byla." },
    { t: "fill", q: "That's fifty __ crowns.", p: "Dělá to padesát tisíc korun", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 je „fifty thousand“. Po číslovce je „thousand“ bez -s množného čísla." },
    { t: "fill", q: "I'll be there in ten __.", p: "Budu tam za deset minut", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Minut je deset, proto množné číslo: „minutes“." },

    { t: "type", p: "Je půl čtvrté (3:30)", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty – přečti hodiny a minuty za sebou", x: ["thirteen"], why: "Hodiny a minuty se čtou za sebou: „three thirty“. Česká „půl čtvrté“ je anglicky půl po třetí. A nepleť si „thirty“ a „thirteen“." },
    { t: "type", p: "Je to dvacet dolarů", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar – víc než jeden, takže množné číslo", x: ["dollar"], why: "Dolarů je víc než jeden, proto množné číslo: „dollars“." },
    { t: "type", p: "Cvičím dvakrát týdně (použij „work out“)", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week – jaký člen patří do „za týden“?", x: ["the"], why: "„Za týden“ se říká s neurčitým členem „a“: „a week“ („the week“ ✗)." }
  ],

  email: [
    { t: "mc", q: "Které oslovení s „Dear“ je správně?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Po „Dear“ následuje „Mr.“ nebo „Ms.“ a příjmení, ne samotná funkce." },
    { t: "mc", q: "Jak oznámíš, že zprávu posíláš v příloze?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Jde o konkrétní zprávu, kterou adresát dostává, proto člen „the“." },
    { t: "mc", q: "Jak se anglicky zeptáš „Kdy je termín?“", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Jde o termín tohoto konkrétního úkolu, proto člen „the“." },
    { t: "mc", q: "Odpovídáš pozdě. Kterou pozitivní větou nahradíš omluvu?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "„Thanks for your patience“ zní zdvořile i bez omluvy. Pozor na pravopis: „patients“ jsou pacienti." },
    { t: "mc", q: "Které přání se hodí na konec pátečního e-mailu?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Víkend je jeden, proto člen „a“ a jednotné číslo: „a great weekend“." },

    { t: "order", p: "V příloze posílám zprávu", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Jde o konkrétní zprávu, kterou adresát dostává, proto člen „the“." },
    { t: "order", p: "Pojďme si naplánovat schůzku", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Schůzka ještě není domluvená, je to „nějaká“ schůzka, proto člen „a“." },
    { t: "order", p: "Ozvu se vám", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "„Get back to you“ = ozvat se s odpovědí. Předložka je „to“." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Můžete mi ten soubor poslat do pátku?", a: ["by"], o: ["until", "in", "at"], why: "Termín („nejpozději do“) vyjadřuje „by“ a den. „Until“ by znamenalo, že něco trvá až do pátku." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Píšu kvůli dotazu na harmonogram", a: ["to"], o: ["for", "about", "at"], why: "Důvod e-mailu uvádí „I'm writing to“ a základní tvar slovesa." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Díky za všechno vaše úsilí!", a: ["work"], o: ["works", "working", "job"], why: "„Work“ (práce) je nepočitatelné, proto bez -s množného čísla." },

    { t: "type", p: "Zítra mám volno (použij „off“)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow – sloveso „to be“ a „off“", x: ["do"], why: "Volno z práce vyjadřuje „be off“." },
    { t: "type", p: "V příloze posílám soubor (použij „attached“)", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file – ten konkrétní soubor", x: ["a"], why: "Jde o konkrétní soubor, který adresát dostává, proto člen „the“." },
    { t: "type", p: "Hezký víkend!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend – člen před jedním víkendem", x: ["the"], why: "Víkend je jeden, proto neurčitý člen „a“: „a great weekend“." }
  ],

  idioms: [
    { t: "mc", q: "Jak se anglicky řekne „Je to hračka“?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Idiom se učí vcelku: s členem „a“ a se slovem „cake“ v jednotném čísle." },
    { t: "mc", q: "Jak se anglicky řekne „Stojí to majlant“?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "„Arm“ začíná samohláskou, proto člen „an“; „leg“ souhláskou, proto „a“." },
    { t: "mc", q: "Jak se anglicky řekne „Pro dnešek končíme“ (hodí se i na poradě)?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "„Call it a day“ se učí vcelku i s členem „a“." },
    { t: "mc", q: "Jak se anglicky řekne „Jsem v sedmém nebi“?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "„On cloud nine“ je bez členu a bez -s množného čísla. Čeština má sedmé nebe, angličtina devátý oblak." },
    { t: "mc", q: "Který výraz je slang, který patří jen mezi kamarády?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "„No cap“ je slang mladých a znamená „fakt, bez přehánění“. Ostatní jsou idiomy, které se hodí i do práce." },

    { t: "order", p: "Jsem jedno ucho", a: ["I'm", "all", "ears"], x: ["ear"], why: "Čeština má jedno ucho, angličtina množné číslo: „all ears“." },
    { t: "order", p: "Musím se pořádně učit", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "„Hit the books“ má vždy člen „the“ a množné číslo „books“." },
    { t: "order", p: "To není můj šálek kávy", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "„Not my cup of tea“ se učí vcelku. Místo „my“ nepatří člen „the“. Čeština má šálek kávy, angličtina šálek čaje." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Zabít dvě mouchy jednou ranou", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Ptáci jsou dva, proto množné číslo: „birds“. Čeština zabíjí mouchy, angličtina ptáky." },
    { t: "fill", q: "Speak of the __!", p: "My o vlku a vlk za dveřmi!", a: ["devil"], o: ["wolf", "angel", "bird"], why: "V angličtině místo vlka přichází ďábel: „devil“." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Není mi dobře", a: ["the"], o: ["a", "an", "my"], why: "„Under the weather“ má vždy člen „the“." },

    { t: "type", p: "Je to hračka (idiom s dortem)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake – nezapomeň na člen", x: ["the"], why: "„A piece of cake“: člen „a“ sem patří vždy." },
    { t: "type", p: "Držím palce! (idiom s prsty)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed – kolik prstů se kříží?", x: ["finger"], why: "Kříží se dva prsty, proto množné číslo: „fingers“. Čeština drží palce, angličtina kříží prsty." },
    { t: "type", p: "Pro dnešek končíme (idiom se slovesem „call“)", a: ["Let's call it a day"], hint: "call it · day – žádné „the“", x: ["the"], why: "„Call it a day“: člen je „a“, ne „the“." }
  ]
};
