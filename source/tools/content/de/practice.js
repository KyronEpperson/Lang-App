/* Practice sets for the original 11 lessons of the de-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are German (Germany, du); answers are English (shared with es-en except where deviations.json says:
   the pron set follows docs/profiles/de.md §8).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing verb-core rule (docs/profiles/de.md §7): at least half of the order + type items hinge on agreement,
   the auxiliary in questions and negatives, or (typed) dummy it/there, and their why names it
   (Subjekt | Hilfsverb | dritte/3. Person | Übereinstimmung). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "Welcher Buchstabe heißt genau wie das Wort \"see\" („sehen“)?", o: ["C", "S", "Z", "K"], why: "C heißt /ˈsiː/, genau wie \"see\", mit scharfem „s“. Z (/ˈziː/) beginnt mit einem weichen, summenden „s“ wie in „Sonne“; S und K klingen ganz anders." },
    { t: "mc", q: "Welcher Buchstabe kommt direkt nach Q?", o: ["R", "P", "S", "O"], why: "Die Reihenfolge ist dieselbe wie im Deutschen: P, Q, R, S. Nur die Namen sind anders." },
    { t: "mc", q: "Welche Form ist richtig?", o: ["an M", "a M", "an B", "an U"], why: "M ist ein Konsonant, aber sein Name /ˈem/ beginnt mit einem Vokal, wie im Deutschen. Darum \"an M\". B und U beginnen mit einem Konsonantenlaut: \"a B\", \"a U\"." },
    { t: "mc", q: "Welcher dieser Buchstaben ist ein Vokal?", o: ["U", "R", "S", "W"], why: "Die Vokale sind dieselben wie im Deutschen: A, E, I, O, U. W ist kein Vokal." },
    { t: "mc", q: "Wie heißt der Buchstabe W auf Englisch?", o: ["double u", "double v", "u u", "v v"], why: "W heißt \"double u\", also „doppeltes U“, mit drei Silben: /ˈdʌbəljuː/. Nie „we“ wie im Deutschen." },

    { t: "order", p: "Wie schreibt man das?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "Die Frage im simple present braucht das Hilfsverb \"do\" vor dem Subjekt (bei \"you\" nie \"does\"), danach die Grundform \"spell\"." },
    { t: "order", p: "Mein Name fängt mit S an", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "\"My name\" ist dritte Person Singular, also bekommt das Verb ein -s: \"starts\". Und \"an S\", weil der Name von S mit einem Vokal beginnt (/ˈes/)." },
    { t: "order", p: "In \"hello\" gibt es zwei L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "„Es gibt“ + Plural: \"There are\", nicht \"is\" – Übereinstimmung von Subjekt und Verb. Der Plural eines Buchstabens bekommt ein -s: \"Ls\"." },

    { t: "fill", q: "How do you __ your name?", p: "Wie schreibt man deinen Namen?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "Nach \"do you\" steht die Grundform: \"spell\", ohne -s, -ing oder -ed." },
    { t: "fill", q: "It starts __ a B.", p: "Es fängt mit B an", a: ["with"], o: ["by", "for", "in"], why: "„Anfangen mit“ heißt \"start with\"." },
    { t: "fill", q: "That's M __ in Mary.", p: "Das ist M wie \"Mary\"", a: ["as"], o: ["so", "than", "of"], why: "Um einen Buchstaben klarzumachen, sagt man \"as in\" + ein Wort, wie im Deutschen „M wie Martha“." },

    { t: "type", p: "Es fängt mit einem A an", a: ["It starts with an A", "It begins with an A"], hint: "start · A – mit \"it\"; achte auf a/an", x: ["the", "start"], why: "Das Subjekt ist \"it\", und in der dritten Person bekommt das Verb ein -s: \"starts\". Vor A steht \"an\", weil sein Name mit einem Vokal beginnt." },
    { t: "type", p: "Wie buchstabierst du deinen Namen?", a: ["How do you spell your name"], hint: "spell · name – Frage mit Hilfsverb", x: ["spelling", "does"], why: "Die Frage braucht das Hilfsverb \"do\": \"How do you spell...?\". Bei \"you\" steht nie \"does\"." },
    { t: "type", p: "Es hat zwei T (ein Wort wie \"Matt\"; beginne mit \"It\")", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "have · two · T – das Subjekt ist \"it\"; Plural mit -s", x: ["T", "have"], why: "Mit \"it\" (dritte Person Singular) wird \"have\" zu \"has\". Der Plural eines Buchstabens bekommt ein -s: \"Ts\" (auch \"T's\")." }
  ],

  pron: [
    { t: "mc", q: "Welches Wort bedeutet „Schaf“?", o: ["sheep", "ship", "cheap", "chip"], why: "Beide Vokale kennst du aus dem Deutschen („Miete“ und „Mitte“). Die Falle ist die Schreibung: \"ee\" ist ein langes i, also \"sheep\". \"Ship\" mit kurzem i heißt „Schiff“." },
    { t: "mc", q: "Welches Wort bedeutet „Tasche“?", o: ["bag", "back", "beg", "pack"], why: "\"Bag\" endet mit einem stimmhaften g, und der Vokal davor ist länger. Sprichst du das g wie k, sagst du \"back\" („Rücken“). Und /æ/ ist offener als das e in \"beg\"." },
    { t: "mc", q: "Welches Wort bedeutet „Schuhe“?", o: ["shoes", "choose", "juice", "chose"], why: "\"sh\" klingt wie „sch“, \"ch\" wie „tsch“: \"shoes\" sind Schuhe, \"choose\" heißt „wählen“." },
    { t: "mc", q: "Welches Wort bedeutet „Dummkopf“?", o: ["fool", "full", "fall", "fill"], why: "\"Fool\" hat ein langes u wie in „Schule“. \"Full\" mit kurzem u wie in „Mutter“ heißt „voll“." },
    { t: "mc", q: "Welches Wort bedeutet „Witz“?", o: ["joke", "yolk", "choke", "coke"], why: "Das englische \"j\" ist „dsch“ wie in „Dschungel“: \"joke\". Liest du es wie das deutsche j, sagst du \"yolk\" („Eigelb“)." },

    { t: "order", p: "Die Wohnung ist sehr warm", a: ["The", "apartment", "is", "very", "warm"], x: ["are", "wery"], why: "Ein Subjekt im Singular (\"the apartment\") braucht \"is\": Übereinstimmung von Subjekt und Verb. \"Very\" schreibt man mit v (das deutsche „w“), \"warm\" beginnt mit dem englischen w." },
    { t: "order", p: "Ist die Suppe sehr heiß?", a: ["Is", "the", "soup", "very", "hot"], x: ["wery"], why: "In der Frage steht \"is\" vor dem Subjekt (\"the soup\"). \"Very\" schreibt man mit v, nicht mit w." },
    { t: "order", p: "Wir kommen aus Deutschland", a: ["We", "are", "from", "Germany"], x: ["is"], why: "Mit \"we\" heißt be \"are\": Übereinstimmung von Subjekt und Verb. \"Germany\" beginnt mit „dsch“, nicht mit „g“." },

    { t: "fill", q: "__is is my sister.", p: "Das ist meine Schwester", a: ["Th"], o: ["Z", "D", "S"], why: "\"This\" beginnt mit stimmhaftem th: Zunge zwischen die Zähne. Weder „s“ noch „d“, und schon gar nicht das deutsche „z“." },
    { t: "fill", q: "I __ink so.", p: "Ich glaube schon", a: ["th"], o: ["s", "t", "f"], why: "\"Think\" beginnt mit th: Zungenspitze zwischen die Zähne. Mit s wäre es \"sink\" („Spülbecken“)." },
    { t: "fill", q: "This is __ery good.", p: "Das ist sehr gut", a: ["v"], o: ["b", "f", "w"], why: "\"Very\" schreibt man mit v, und das englische v klingt wie das deutsche „w“. Mit englischem w (\"wery\") klingt es falsch." },

    { t: "type", p: "Es gibt drei Bäume", a: ["There are three trees"], hint: "three · tree – mit \"there\"", x: ["is"], why: "„Es gibt“ + Plural: \"There are\" – das Verb stimmt mit dem Subjekt überein (Übereinstimmung). Nicht \"It gives\". \"Three\" beginnt mit th, \"tree\" mit tr." },
    { t: "type", p: "Es ist sehr heiß", a: ["It's very hot", "It is very hot", "It's really hot", "It is really hot", "It's so hot", "It is so hot"], hint: "very · hot – \"very\" mit v, nicht w", x: ["wery"], why: "Wie im Deutschen braucht der Satz ein Subjekt: \"It's very hot\" (es ist sehr heiß). \"Very\" mit v." },
    { t: "type", p: "Ich glaube schon", a: ["I think so"], hint: "think – Zunge zwischen die Zähne", x: ["sink"], why: "\"Think\" beginnt mit th: Zunge zwischen die Zähne, weder s noch f." }
  ],

  articles: [
    { t: "mc", q: "Wie sagt man „Ich bin Student“?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Im Englischen stehen Berufe und Tätigkeiten mit \"a/an\", auch wenn du im Deutschen keinen Artikel benutzt." },
    { t: "mc", q: "Wie sagt man „eine Stunde“?", o: ["an hour", "a hour", "one hours", "hour"], why: "Das h in \"hour\" ist stumm: Das Wort beginnt mit einem Vokal, deshalb \"an\"." },
    { t: "mc", q: "Wie sagt man „Das Leben ist hart“?", o: ["Life is hard.", "The life is hard.", "A life is hard.", "The lives are hard."], why: "Wenn du allgemein oder abstrakt sprichst, steht im Englischen kein Artikel – anders als bei „das Leben“." },
    { t: "mc", q: "Wie sagt man „Ich liebe Hunde“ (allgemein)?", o: ["I love dogs.", "I love the dogs.", "I love a dog.", "I love dog."], why: "Allgemein: Plural ohne Artikel, genau wie im Deutschen. \"The dogs\" wären bestimmte Hunde." },
    { t: "mc", q: "Wie sagt man „Wasch dir die Hände“?", o: ["Wash your hands.", "Wash the hands.", "Wash hands.", "Wash the your hands."], why: "Bei Körperteilen benutzt das Englische den Possessivbegleiter (\"my\", \"your\", \"her\"), nicht \"the\"." },

    { t: "order", p: "Meine Schwester ist Krankenpflegerin", a: ["My", "sister", "is", "a", "nurse"], x: ["are", "the"], why: "Bei Berufen steht \"a\": \"a nurse\". Ein Subjekt im Singular (\"my sister\") braucht \"is\": Übereinstimmung." },
    { t: "order", p: "Ist sie Ärztin?", a: ["Is", "she", "a", "doctor"], x: ["the"], why: "In der Frage steht \"is\" vor dem Subjekt. Und bei Berufen steht \"a\": \"a doctor\"." },
    { t: "order", p: "Kaffee ist teuer (allgemein)", a: ["Coffee", "is", "expensive"], x: ["The", "are"], why: "Allgemein steht \"coffee\" ohne Artikel. Ein nicht zählbares Nomen braucht \"is\": Übereinstimmung." },

    { t: "fill", q: "I'm __ university student.", p: "Ich bin Student an der Uni", a: ["a"], o: ["an", "the", "two"], why: "\"University\" beginnt mit dem Laut „ju“, also mit einem Konsonanten: \"a university\". Es zählt der Laut, nicht der Buchstabe." },
    { t: "fill", q: "Close __ eyes.", p: "Mach die Augen zu", a: ["your"], o: ["the", "you", "a"], why: "Bei Körperteilen steht der Possessivbegleiter: \"your eyes\", nicht \"the eyes\"." },
    { t: "fill", q: "__ is a virtue.", p: "Geduld ist eine Tugend", a: ["Patience"], o: ["The patience", "A patience", "Patiences"], why: "Abstrakte Begriffe stehen im Englischen allgemein ohne Artikel." },

    { t: "type", p: "Sie ist Krankenpflegerin", a: ["She is a nurse", "She's a nurse"], hint: "nurse – der Beruf braucht einen Artikel", x: ["the"], why: "Der Beruf braucht \"a\", und mit \"she\" heißt be \"is\": dritte Person." },
    { t: "type", p: "Mein Bruder ist Ingenieur", a: ["My brother is an engineer", "My brother's an engineer"], hint: "brother · engineer – \"a\" oder \"an\" je nach Laut", x: ["a"], why: "\"Engineer\" beginnt mit einem Vokal: \"an engineer\". Mit \"my brother\" (3. Person) heißt be \"is\"." },
    { t: "type", p: "Mir tut der Rücken weh", a: ["My back hurts", "I have a backache"], hint: "back · hurt – mit Possessivbegleiter", x: ["the"], why: "Bei Körperteilen steht der Possessivbegleiter: \"my back\", nicht \"the back\". Mit \"my back\" (3. Person) bekommt das Verb ein -s: \"hurts\"." }
  ],

  be: [
    { t: "mc", q: "Wie sagt man „Ich habe Hunger“?", o: ["I'm hungry.", "I have hungry.", "I have hunger.", "I hungry."], why: "Hunger, Durst, Angst: Im Englischen sagt man das mit \"be\" + Adjektiv, nicht mit \"have\"." },
    { t: "mc", q: "Wie sagt man „Ich bin 30“?", o: ["I'm 30.", "I have 30 years.", "I have 30.", "I'm 30 years."], why: "Das Alter geht wie im Deutschen mit \"be\": \"I'm 30\" oder \"I'm 30 years old\". \"30 years\" ohne \"old\" sagt man nicht." },
    { t: "mc", q: "Wie sagt man „Es ist spät“?", o: ["It's late.", "Is late.", "Late is.", "It late."], why: "Wie im Deutschen braucht der Satz ein Subjekt (\"it\" = „es“) und das Verb be (\"is\")." },
    { t: "mc", q: "Wähle die richtige Frage: „Spricht er Englisch?“", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Mit \"he\" steht \"does\", danach das Verb ohne -s." },
    { t: "mc", q: "Wie sagt man „Du hast recht“?", o: ["You're right.", "You have reason.", "You have right.", "You're reason."], why: "„Recht haben“ heißt im Englischen be + \"right\": \"you're right\"." },

    { t: "order", p: "Mein Bruder arbeitet in Lima", a: ["My", "brother", "works", "in", "Lima"], x: ["work", "is"], why: "Ein Subjekt im Singular (\"my brother\" = \"he\"): Das Verb bekommt ein -s, 3. Person. Ohne \"is\"." },
    { t: "order", p: "Ist dir kalt?", a: ["Are", "you", "cold"], x: ["Do", "have"], why: "Bei be gibt es kein \"do\": \"are\" steht vor dem Subjekt. Und „mir ist kalt“ heißt \"I'm cold\" – mit dem Subjekt \"I\", nicht \"me\"." },
    { t: "order", p: "Sie hat zwei Hunde", a: ["She", "has", "two", "dogs"], x: ["have", "is"], why: "Mit \"she\" wird \"have\" zu \"has\": dritte Person Singular." },

    { t: "fill", q: "My brother __ in Lima.", p: "Mein Bruder wohnt in Lima", a: ["lives"], o: ["live", "is live", "living"], why: "Mit \"he\" (\"my brother\") bekommt das Verb ein -s: \"lives\"." },
    { t: "fill", q: "__ you hungry?", p: "Hast du Hunger?", a: ["Are"], o: ["Do", "Is", "Have"], why: "„Hunger haben“ heißt be + \"hungry\", und mit \"you\" heißt be \"are\"." },
    { t: "fill", q: "We __ cold.", p: "Uns ist kalt", a: ["are"], o: ["have", "is", "do"], why: "„Uns ist kalt“ heißt \"we are cold\": \"we\" ist das Subjekt, und mit \"we\" heißt be \"are\"." },

    { t: "type", p: "Er ist Lehrer", a: ["He is a teacher", "He's a teacher"], hint: "teacher – be und ein Artikel", x: ["the"], why: "Mit \"he\" heißt be \"is\": dritte Person. Der Beruf braucht \"a\"." },
    { t: "type", p: "Ich bin 25 Jahre alt", a: ["I'm 25", "I am 25", "I'm 25 years old", "I am 25 years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old", "I am twenty-five years old"], hint: "25 – mit be, wie im Deutschen", x: ["have"], why: "Das Alter sagt man wie im Deutschen mit \"be\", nie mit \"have\"." },
    { t: "type", p: "Es ist spät", a: ["It's late", "It is late"], hint: "late – das Subjekt nicht vergessen", x: ["is"], why: "Wie im Deutschen „es“ braucht der Satz das Subjekt \"it\": \"It's late\", nie \"Is late\"." }
  ],

  polite: [
    { t: "mc", q: "Im Café: Wie bestellst du am natürlichsten einen Latte?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Im Café oder im Laden ist \"Can I get…?\" ganz normal (\"get\", nie \"become\" für „bekommen“). Und es ist ein Kaffee: \"a latte\"." },
    { t: "mc", q: "Wie bittest du eine fremde Person am höflichsten um Hilfe?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" ist die höfliche Art, eine fremde Person um etwas zu bitten." },
    { t: "mc", q: "Du hast etwas nicht verstanden. Wie bittest du höflich darum, es zu wiederholen?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" ist die höfliche Bitte, etwas zu wiederholen." },
    { t: "mc", q: "Sehr höflich: „Würde es Ihnen etwas ausmachen, ein Foto von uns zu machen?“", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Nach \"mind\" steht die -ing-Form: \"taking\"." },
    { t: "mc", q: "Im Flugzeug: „Ich hätte gern einen Fensterplatz“", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" ist eine höfliche Bitte. Es ist ein Platz: \"a window seat\"." },

    { t: "order", p: "Kann ich einen Latte bekommen?", a: ["Can", "I", "get", "a", "latte"], x: ["gets", "give"], why: "Bei der Bitte steht das Hilfsverb \"can\" vor dem Subjekt (\"Can I get…?\"), und das Verb bleibt in der Grundform: \"get\", nicht \"gets\"." },
    { t: "order", p: "Würde es dir etwas ausmachen, das Fenster zu öffnen? (das Fenster hier im Raum)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "minds"], why: "In der Frage steht das Hilfsverb \"would\" vor \"you\", und \"mind\" bleibt in der Grundform, ohne -s. Nach \"mind\" folgt die -ing-Form." },
    { t: "order", p: "Könntest du langsamer sprechen?", a: ["Could", "you", "speak", "more", "slowly"], x: ["speaks", "slow"], why: "Das Hilfsverb \"could\" steht vor dem Subjekt (\"Could you…?\"), und das Verb bleibt in der Grundform: \"speak\", nie \"speaks\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "Würde es dir etwas ausmachen, die Tür zu schließen?", a: ["closing"], o: ["close", "to close", "closed"], why: "Nach \"mind\" steht die -ing-Form." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Kann ich einen Iced Coffee bekommen?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" beginnt mit einem Vokal („ai“): \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Antwort auf \"Would you mind…?\") Nein, überhaupt nicht. Mach ich gern.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" = „Das macht mir überhaupt nichts aus“, also „gern, mach ich“." },

    { t: "type", p: "Könntest du mir helfen? (höflich)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help – höflich fragen", x: ["can"], why: "Die höfliche Frage beginnt mit dem Hilfsverb \"could\" vor \"you\"." },
    { t: "type", p: "Ich hätte gern einen Fensterplatz", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat – ein Platz, mit Artikel", x: ["the"], why: "Für eine Bitte: \"I'd like…\" (ich hätte gern). Es ist ein Platz, den du zum ersten Mal nennst: \"a window seat\"." },
    { t: "type", p: "Kann ich mit Karte zahlen?", a: pl(["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay by credit card", "Could I pay by credit card"]), hint: "can · pay · card – Frage mit dem Hilfsverb vorn", x: ["pays"], why: "In der Frage steht das Hilfsverb \"can\" vor dem Subjekt: \"Can I pay…?\", nie \"I can pay…?\"." }
  ],

  tense: [
    { t: "mc", q: "Wie sagt man „Ich trinke gerade Kaffee“?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Was gerade passiert, steht im present progressive: be + -ing-Form. Das Signalwort ist \"right now\"." },
    { t: "mc", q: "Wie sagt man „Was machst du?“ (gerade jetzt)?", o: ["What are you doing?", "What do you do?", "What you are doing?", "What you do?"], why: "Für das, was gerade passiert, benutzt das Englische das present progressive. \"What do you do?\" fragt nach deinem Beruf." },
    { t: "mc", q: "Du erzählst von deinen Plänen: „Nächsten Monat besuche ich Mexiko-Stadt“", o: ["I'm going to visit Mexico City next month.", "I visit Mexico City next month.", "I visited Mexico City next month.", "I'm going visit Mexico City next month."], why: "Für einen festen Plan nimmt das Englische nicht das Präsens wie im Deutschen, sondern \"going to\" + Grundform. Das \"to\" nicht vergessen." },
    { t: "mc", q: "Es klingelt, und du entscheidest spontan: „Ich mach auf!“", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Eine spontane Entscheidung steht mit \"will\": \"I'll…\"." },
    { t: "mc", q: "Welche Form ist das simple past von \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" ist unregelmäßig: see – saw – seen." },

    { t: "order", p: "Sie arbeitet bei einer Bank", a: ["She", "works", "at", "a", "bank"], x: ["work", "working"], why: "Eine Gewohnheit steht im simple present; mit \"she\" bekommt das Verb ein -s: dritte Person." },
    { t: "order", p: "Warst du am Strand?", a: ["Did", "you", "go", "to", "the", "beach"], x: ["went"], why: "Im simple past braucht die Frage das Hilfsverb \"did\", und das Verb steht in der Grundform: \"go\", nicht \"went\"." },
    { t: "order", p: "Ich rufe dich später an", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Ein spontanes Versprechen steht mit \"will\", nicht im Präsens wie im Deutschen." },

    { t: "fill", q: "I __ pizza last night.", p: "Gestern Abend habe ich Pizza gegessen", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "\"Last night\" ist ein Signalwort für das simple past. \"Eat\" ist unregelmäßig: \"ate\" (oder \"had\" mit \"have\")." },
    { t: "fill", q: "__ you have fun?", p: "Hattest du Spaß?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Frage im simple past: \"Did\" + Grundform." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Ich werde meine Eltern besuchen", a: ["to"], o: ["for", "at", "on"], why: "\"Going to\" + Grundform: Das \"to\" gehört immer dazu." },

    { t: "type", p: "Was machst du gerade?", a: ["What are you doing"], hint: "what · do – was du gerade machst", x: ["do"], why: "In der Frage steht das Hilfsverb \"are\" vor dem Subjekt: \"What are you doing?\"" },
    { t: "type", p: "Sie hat den Film nicht gesehen", a: ["She didn't see the movie", "She did not see the movie", "She didn't watch the movie", "She did not watch the movie"], hint: "see · movie – Verneinung im simple past", x: ["saw"], why: "Im simple past trägt nur das Hilfsverb \"didn't\" die Vergangenheit, das Verb steht in der Grundform: \"see\"." },
    { t: "type", p: "Heute arbeite ich von zu Hause", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today – mit be und -ing", x: ["work"], why: "Was du heute, in diesem Zeitraum, machst, steht im present progressive." }
  ],

  prep: [
    { t: "mc", q: "Wie sagt man „im Mai“?", o: ["in May", "on May", "at May", "to May"], why: "Bei Monaten steht \"in\" – wie im Deutschen „im Mai“." },
    { t: "mc", q: "Wie sagt man „am 3. Mai“?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "the May 3rd"], why: "Bei Daten steht \"on\", ohne Artikel – wie „am Montag“ → \"on Monday\"." },
    { t: "mc", q: "Wie sagt man „Ich bin im Bus“?", o: ["I'm on the bus.", "I'm in bus.", "I'm at the bus.", "I'm on bus."], why: "Bei öffentlichen Verkehrsmitteln (\"bus\", \"train\", \"plane\") steht \"on\", nicht \"in\"." },
    { t: "mc", q: "Wie sagt man „nachts / in der Nacht“?", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" ist eine Ausnahme: \"at night\", ohne Artikel." },
    { t: "mc", q: "Welcher Satz passt zu „Ich wohne in Lima“?", o: ["I live in Lima.", "I live at Lima.", "I live on Lima.", "I live in the Lima."], why: "Bei Städten und Ländern steht \"in\", ohne Artikel – wie im Deutschen." },

    { t: "order", p: "Mein Handy liegt auf dem Tisch", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "are"], why: "Auf einer Fläche: \"on\". Ein Subjekt im Singular (\"my phone\") braucht \"is\": Übereinstimmung." },
    { t: "order", p: "Arbeitest du samstags?", a: ["Do", "you", "work", "on", "Saturdays"], x: ["in"], why: "Die Frage braucht das Hilfsverb \"do\" vor dem Subjekt – nicht \"Work you…?\" wie im Deutschen. Bei Tagen steht \"on\": \"on Saturdays\"." },
    { t: "order", p: "Bis nächste Woche", a: ["See", "you", "next", "week"], x: ["on"], why: "Bei \"next\" steht keine Präposition." },

    { t: "fill", q: "The meeting is __ three.", p: "Das Meeting ist um drei", a: ["at"], o: ["on", "to", "of"], why: "„Um“ + Uhrzeit: \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Ich bin 1998 geboren", a: ["in"], o: ["on", "at", "to"], why: "Bei Jahreszahlen steht \"in\". Im Deutschen steht hier keine Präposition, im Englischen schon." },
    { t: "fill", q: "See you __ Friday.", p: "Bis Freitag", a: ["on"], o: ["in", "at", "to"], why: "Bei Wochentagen steht \"on\"." },

    { t: "type", p: "Sie trinkt morgens Kaffee", a: ["She drinks coffee in the morning", "She has coffee in the morning", "In the morning she drinks coffee", "In the morning she has coffee"], hint: "drink · coffee · morning – \"in\" mit \"the\"", x: ["at"], why: "Mit \"she\" bekommt das Verb ein -s: dritte Person. Tageszeiten: \"in the morning\"." },
    { t: "type", p: "Ich bin zu Hause", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home – kein Artikel", x: ["the"], why: "\"At home\" steht ohne \"the\" (und nie mit \"in\")." },
    { t: "type", p: "Ist das Meeting am Montag?", a: ["Is the meeting on Monday"], hint: "meeting · Monday – \"on\", kein Artikel", x: ["in"], why: "In der Frage steht \"is\" vor dem Subjekt (\"the meeting\"). Bei Tagen steht \"on\", ohne Artikel." }
  ],

  smalltalk: [
    { t: "mc", q: "Eine Kollegin fragt \"How was your weekend?\". Was antwortest du?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Die Frage ist im simple past: Antworte im simple past und erzähl ein Detail." },
    { t: "mc", q: "Jemand sagt \"I don't drink coffee.\". Wie sagst du „Ich auch nicht“?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "„Ich auch nicht“ ist \"Me neither\". \"Me too\" heißt „ich auch“." },
    { t: "mc", q: "Wie beendest du das Gespräch natürlich?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" ist eine freundliche Art, sich zu verabschieden." },
    { t: "mc", q: "Welcher Satz eignet sich, um mit einer neuen Bekanntschaft ins Gespräch zu kommen?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Das Wetter ist das sicherste Thema für Smalltalk." },
    { t: "mc", q: "Jemand erzählt \"I went to Cartagena last weekend.\". Welche Antwort zeigt Interesse?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" und \"That sounds fun!\" zeigen Interesse." },

    { t: "order", p: "Was machst du beruflich?", a: ["What", "do", "you", "do"], x: ["are", "does"], why: "In der Frage steht das Hilfsverb \"do\" vor dem Subjekt: \"What do you do?\"" },
    { t: "order", p: "Woher kommst du?", a: ["Where", "are", "you", "from"], x: ["is", "do"], why: "In der Frage steht \"are\" vor dem Subjekt: \"Where are you from?\" Mit \"you\" heißt es \"are\": Übereinstimmung." },
    { t: "order", p: "Schön, mit dir zu reden", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Ein typischer Abschied: Nach \"nice\" steht die -ing-Form (\"talking\")." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Ziemlich gut! Und dir?", a: ["about"], o: ["for", "with", "of"], why: "Antworte kurz und gib die Frage mit \"How about you?\" zurück." },
    { t: "fill", q: "I know, __?", p: "Genau! / Finde ich auch!", a: ["right"], o: ["no", "yes", "true"], why: "Mit \"I know, right?\" gibst du jemandem mit Nachdruck recht." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Hast du in letzter Zeit gute Serien oder Filme gesehen?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "In dieser offenen Frage steht nach \"any\" ein zählbares Nomen im Plural." },

    { t: "type", p: "Wie war dein Wochenende?", a: ["How was your weekend"], hint: "how · weekend – im simple past", x: ["is"], why: "In der Frage steht \"was\" vor dem Subjekt (\"your weekend\"): \"How was your weekend?\"" },
    { t: "type", p: "Wohnst du hier in der Nähe?", a: ["Do you live around here", "Do you live near here", "Do you live nearby"], hint: "live · around here – Frage mit \"do\"", x: ["are"], why: "Im simple present braucht die Frage das Hilfsverb \"do\" vor dem Subjekt: \"Do you live…?\", nicht \"Live you…?\"." },
    { t: "type", p: "Schönes Wetter heute!", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today – mit oder ohne Artikel?", x: ["a"], why: "\"Weather\" ist nicht zählbar: kein \"a\" (nicht \"a nice weather\")." }
  ],

  phrasal: [
    { t: "mc", q: "Wie sagt man „Mach es an“?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Das Pronomen \"it\" steht in der Mitte des phrasal verb: \"turn it on\" – wie „mach es an“." },
    { t: "mc", q: "Wie sagt man „Uns ist die Milch ausgegangen“?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = etwas geht aus, man hat nichts mehr. Das \"of\" nicht vergessen." },
    { t: "mc", q: "Wie sagt man „Ich bin in Santiago aufgewachsen“?", o: ["I grew up in Santiago.", "I grew in Santiago up.", "I growed up in Santiago.", "I grew out in Santiago."], why: "\"Grow up\" = aufwachsen, wie „auf-wachsen“. Das simple past ist \"grew up\"." },
    { t: "mc", q: "Wie sagt man „Kannst du auf meine Katze aufpassen?“?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = aufpassen auf, und es wird nicht getrennt. \"Look for\" heißt „suchen“." },
    { t: "mc", q: "Wie sagt man „Erzähl weiter, ich höre zu“?", o: ["Go on, I'm listening.", "Go out, I'm listening.", "Go in, I'm listening.", "Go up, I'm listening."], why: "\"Go on\" = weitermachen. Im Gespräch klingt es natürlicher als das förmliche \"continue\"." },

    { t: "order", p: "Passt sie auf deine Katze auf?", a: ["Does", "she", "look", "after", "your", "cat"], x: ["looks"], why: "Die Frage mit \"she\" braucht das Hilfsverb \"does\", und das Verb steht ohne -s: \"look after\"." },
    { t: "order", p: "Er kommt mit allen gut aus", a: ["He", "gets", "along", "with", "everyone"], x: ["get"], why: "Mit \"he\" bekommt das Verb ein -s: dritte Person. \"Gets along with\" = kommt gut aus mit." },
    { t: "order", p: "Ich hole dich ab", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Das Pronomen \"you\" steht zwischen \"pick\" und \"up\" – wie „ich hole dich ab“." },

    { t: "fill", q: "Can you turn it __?", p: "Kannst du es ausmachen?", a: ["off"], o: ["of", "on", "out"], why: "Ausmachen heißt \"turn off\". Nicht mit \"of\" verwechseln." },
    { t: "fill", q: "I work __ every morning.", p: "Ich trainiere jeden Morgen", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = trainieren, Sport machen." },
    { t: "fill", q: "We ran out of __.", p: "Uns sind die Eier ausgegangen", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Eier sind zählbar: Plural, \"eggs\"." },

    { t: "type", p: "Mach es bitte aus", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off – das Pronomen steht in der Mitte", x: ["on"], why: "Das Pronomen \"it\" steht zwischen \"turn\" und \"off\"." },
    { t: "type", p: "Sie kümmert sich um ihre Mutter", a: ["She looks after her mother", "She looks after her mom", "She takes care of her mother", "She takes care of her mom"], hint: "look after · mother – mit \"she\"", x: ["look"], why: "Mit \"she\" bekommt das Verb ein -s: \"looks after\". Dritte Person." },
    { t: "type", p: "Kommst du gut mit deinem Chef aus?", a: ["Do you get along with your boss", "Do you get on with your boss"], hint: "get along with · boss – Frage mit \"do\"", x: ["are"], why: "Im simple present braucht die Frage das Hilfsverb \"do\" vor dem Subjekt." }
  ],

  numbers: [
    { t: "mc", q: "Wie liest man 2.5 (zwei Komma fünf)?", o: ["two point five", "two comma five", "two and five", "twenty-five"], why: "Im Englischen schreibt und liest man Dezimalzahlen mit Punkt: \"point\"." },
    { t: "mc", q: "Wie sagt man „eine Milliarde“?", o: ["one billion", "one million", "ten million", "one trillion"], why: "\"Billion\" = Milliarde. Achtung: Die deutsche „Billion“ ist \"one trillion\"." },
    { t: "mc", q: "Wie liest man 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Bei Minute 1 bis 9 sagt man \"oh\" vor der Zahl." },
    { t: "mc", q: "Wie liest man $4.99 natürlich?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Preise liest man als zwei Zahlen: \"four ninety-nine\"." },
    { t: "mc", q: "Wie liest man das Jahr 1990?", o: ["nineteen ninety", "one thousand nine hundred ninety", "one nine nine zero", "nineteen hundred nine"], why: "Jahreszahlen liest man in zwei Paaren: 19 | 90 – ohne „hundert“ dazwischen." },

    { t: "order", p: "Wie spät ist es?", a: ["What", "time", "is", "it"], x: ["are"], why: "In der Frage steht \"is\" vor dem Subjekt \"it\": \"What time is it?\" Mit \"it\" heißt es \"is\": Übereinstimmung." },
    { t: "order", p: "Wie viel kostet das?", a: ["How", "much", "does", "it", "cost"], x: ["costs", "is"], why: "Die Frage braucht das Hilfsverb \"does\", und das Verb steht ohne -s: \"cost\"." },
    { t: "order", p: "Das macht fünfzehn Dollar", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Mehr als ein Dollar: \"dollars\", Plural. \"Fifteen\" ist hinten betont, \"fifty\" vorn." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Es ist Viertel nach zehn", a: ["a"], o: ["the", "one", "an"], why: "Vor \"quarter\" (Viertelstunde) steht \"a\"." },
    { t: "fill", q: "That's fifty __ dollars.", p: "Das macht fünfzigtausend Dollar", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Nach einer Zahl hat \"thousand\" kein -s: \"fifty thousand\"." },
    { t: "fill", q: "I'll be there in ten __.", p: "Ich bin in zehn Minuten da", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Es sind zehn: \"minutes\", Plural." },

    { t: "type", p: "Es ist halb vier", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30"], hint: "three · thirty – Stunde und Minuten, wie sie dastehen", x: ["thirteen"], why: "Die Uhrzeit braucht wie im Deutschen ein Subjekt: \"It's three thirty\". „Halb vier“ ist 3:30, also \"three\", nicht \"four\". Nicht mit \"thirteen\" (13) verwechseln." },
    { t: "type", p: "Es kostet zwanzig Dollar", a: ["It costs twenty dollars", "It costs 20 dollars", "It's twenty dollars", "It is twenty dollars", "It's 20 dollars", "It is 20 dollars"], hint: "cost · twenty · dollar – mit \"it\"", x: ["cost"], why: "Mit \"it\" bekommt das Verb ein -s: \"costs\". Dritte Person." },
    { t: "type", p: "Sie geht zweimal pro Woche laufen", a: ["She runs twice a week", "She goes running twice a week"], hint: "run · twice · week – mit \"she\"", x: ["run"], why: "Mit \"she\" bekommt das Verb ein -s: \"runs\". Dritte Person. „Pro Woche“ = \"a week\"." }
  ],

  email: [
    { t: "mc", q: "Wenn du mit \"Dear\" anfängst: Welche Anrede ist am natürlichsten?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Nach \"Dear\" steht der Name der Person, nicht nur die Funktion." },
    { t: "mc", q: "Du schreibst, dass der Bericht im Anhang ist:", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Es ist der konkrete Bericht, den die Person bekommt: \"the report\"." },
    { t: "mc", q: "Wie sagt man „Ich freue mich auf Ihre Antwort“?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I stay waiting your answer.", "I wait your answer."], why: "Nach \"look forward to\" steht die -ing-Form: \"hearing\", nicht \"hear\"." },
    { t: "mc", q: "Du hast spät geantwortet. Welcher positive Satz ersetzt die Entschuldigung?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" klingt freundlich, ohne sich zu entschuldigen. Achtung: \"patients\" heißt „Patienten“." },
    { t: "mc", q: "Welcher Abschiedsgruß passt in eine E-Mail am Freitag?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Es ist ein Wochenende: \"a great weekend\", Singular." },

    { t: "order", p: "Hast du meine E-Mail bekommen?", a: ["Did", "you", "get", "my", "email"], x: ["got"], why: "Die Frage im simple past braucht das Hilfsverb \"did\", und das Verb steht in der Grundform: \"get\"." },
    { t: "order", p: "Der Bericht ist im Anhang", a: ["The", "report", "is", "attached"], x: ["are"], why: "Ein Subjekt im Singular (\"the report\") braucht \"is\": Übereinstimmung." },
    { t: "order", p: "Ich melde mich wieder bei Ihnen", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = sich wieder melden. Es steht mit \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Könnten Sie mir die Datei bis Freitag schicken?", a: ["by"], o: ["until", "in", "at"], why: "„Bis“ als Frist (spätestens am…) heißt \"by\". \"Until\" ist „bis“ für eine Dauer." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Ich schreibe Ihnen, um nach dem Zeitplan zu fragen", a: ["to"], o: ["for", "about", "at"], why: "Für den Zweck: \"I'm writing to\" + Grundform (um … zu)." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Vielen Dank für Ihren ganzen Einsatz!", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (Arbeit, Einsatz) ist nicht zählbar: kein -s." },

    { t: "type", p: "Morgen habe ich frei", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow – mit be", x: ["have"], why: "„Frei haben“ sagt man mit \"be off\"." },
    { t: "type", p: "Wann ist die Deadline?", a: ["When is the deadline", "When's the deadline", "What's the deadline", "What is the deadline"], hint: "when · deadline – Frage mit \"is\"", x: ["are"], why: "In der Frage steht \"is\" vor dem Subjekt (\"the deadline\")." },
    { t: "type", p: "Sie ist diese Woche im Urlaub", a: ["She is on vacation this week", "She's on vacation this week"], hint: "vacation · this week – mit \"on\"", x: ["are"], why: "Mit \"she\" heißt be \"is\": dritte Person. „Im Urlaub“ = \"on vacation\" (britisch: \"on holiday\")." }
  ],

  idioms: [
    { t: "mc", q: "Wie sagt man „Das ist ein Kinderspiel“?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Redewendungen lernt man genau so: mit \"a\" und \"cake\" im Singular." },
    { t: "mc", q: "Wie sagt man „Das kostet ein Vermögen“?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" beginnt mit einem Vokal (\"an arm\"), \"leg\" mit einem Konsonanten (\"a leg\")." },
    { t: "mc", q: "Wie sagt man „Du nimmst mich auf den Arm“?", o: ["You're pulling my leg.", "You're taking my hair.", "You're pulling my hair.", "You're cutting my hair."], why: "Im Englischen zieht man am Bein: \"pull someone's leg\". Eine wörtliche Übersetzung versteht niemand." },
    { t: "mc", q: "Wie sagt man „Ich bin auf Wolke sieben“?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "Im Englischen ist es Wolke neun: \"on cloud nine\", ohne Artikel und ohne -s." },
    { t: "mc", q: "Welcher Ausdruck ist Slang, nur unter Freunden?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" („echt jetzt, ohne Witz“) ist Jugendslang. Die anderen Redewendungen benutzt man auch im Job." },

    { t: "order", p: "Nimmt er dich auf den Arm?", a: ["Is", "he", "pulling", "your", "leg"], x: ["Does"], why: "In der Frage steht das Hilfsverb \"is\" vor dem Subjekt. „Jemanden auf den Arm nehmen“ = \"pull someone's leg\"." },
    { t: "order", p: "Sie fühlt sich nicht gut", a: ["She", "feels", "under", "the", "weather"], x: ["feel"], why: "Mit \"she\" bekommt das Verb ein -s: \"feels\". Dritte Person." },
    { t: "order", p: "Das ist nicht mein Ding", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "\"Not my cup of tea\" = nicht mein Ding. Man sagt es genau so, mit \"my\"." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Zwei Fliegen mit einer Klappe schlagen", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Im Englischen sind es zwei Vögel und ein Stein: \"birds\", Plural." },
    { t: "fill", q: "Speak of the __!", p: "Wenn man vom Teufel spricht!", a: ["devil"], o: ["king", "angel", "wolf"], why: "Genau wie im Deutschen: \"the devil\", der Teufel." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Ich fühle mich nicht so gut", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\" steht immer mit \"the\"." },

    { t: "type", p: "Das ist ein Kinderspiel", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake – das Subjekt nicht vergessen", x: ["the"], why: "Das deutsche „das“ wird hier zum Subjekt \"it\": \"It's a piece of cake\"." },
    { t: "type", p: "Machen wir für heute Schluss", a: ["Let's call it a day"], hint: "call it · day – mit \"a\", nicht \"the\"", x: ["the"], why: "\"Call it a day\" steht mit \"a\", nicht mit \"the\"." },
    { t: "type", p: "Regnet es in Strömen?", a: ["Is it raining cats and dogs"], hint: "rain · cats · dogs – Frage mit \"is\"", x: ["Does"], why: "In der Frage steht \"is\" vor dem Subjekt \"it\": \"Is it raining…?\"" }
  ]
};
