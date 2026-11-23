/* Practice sets for the tl-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Filipino; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: `Aling titik ang may pangalang katunog ng salitang "see"?`, o: ["C", "S", "Z", "K"], why: `Katunog ng "see" ang pangalan ng C: /siː/. Ang S ay /es/, ang Z ay /ziː/ na may ugong ng boses, at ang K ay /keɪ/.` },
    { t: "mc", q: `Aling titik ang kasunod mismo ng Q?`, o: ["R", "P", "S", "O"], why: `Ganito ang pagkakasunod: …O, P, Q, R, S… Kasunod ng Q ang R.` },
    { t: "mc", q: `Alin ang tama?`, o: ["an M", "a M", "an B", "an U"], why: `Tunog na vowel ang simula ng pangalan ng M (/em/), kaya article na "an". Sa B (/biː/), "a B". Sa U (/juː/), tunog ng y ang simula, kaya "a U".` },
    { t: "mc", q: `Alin sa mga ito ang vowel?`, o: ["U", "R", "S", "W"], why: `Lima ang vowel na titik sa Ingles: A, E, I, O, U. Consonant ang R, S at W.` },
    { t: "mc", q: `Ano ang pangalan ng titik na W sa Ingles?`, o: ["double u", "double v", "u u", "v v"], why: `Mukha itong dalawang V, pero "double u" ang pangalan nito, ibig sabihin ay "dalawang U".` },

    { t: "order", p: `Paano iyan binabaybay?`, a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: `May verb na "spell" ang tanong, kaya "do" ang nasa unahan. "You" ang subject, kaya hindi "does", at base form ang "spell".` },
    { t: "order", p: `Nagsisimula sa S ang pangalan ko`, a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: `Tunog na vowel ang simula ng pangalan ng S (/es/), kaya article na "an". Iisa ang "my name", kaya "starts".` },
    { t: "order", p: `May dalawang L sa "hello"`, a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: `Dalawa ang L, kaya plural na "Ls"; at dahil plural, "are" ang gamit, hindi "is".` },

    { t: "fill", q: "How do you __ your name?", p: `Paano binabaybay ang pangalan mo?`, a: ["spell"], o: ["spelling", "spells", "spelled"], why: `Pagkatapos ng "do", base form ang verb: How do you spell…?` },
    { t: "fill", q: "It starts __ a B.", p: `Nagsisimula ito sa B`, a: ["with"], o: ["by", "for", "in"], why: `"Start with" ang gamit kapag sinasabi kung saan nagsisimula ang isang salita.` },
    { t: "fill", q: "That's M __ in Mary.", p: `M iyan, gaya ng sa "Mary"`, a: ["as"], o: ["so", "than", "of"], why: `"As in" ang gamit kapag nililinaw ang titik sa pamamagitan ng isang salita: M as in Mary.` },

    { t: "type", p: `(lagyan ng article) Nagsisimula ito sa A`, a: ["It starts with an A", "It begins with an A"], hint: `start · A — tunog na vowel ang simula ng pangalan ng A`, x: ["the", "start"], why: `Tunog na vowel ang simula ng pangalan ng A (/eɪ/), kaya article na "an". "It" ang subject, kaya "starts".` },
    { t: "type", p: `(gamitin ang you at spell) Paano binabaybay ang pangalan mo?`, a: ["How do you spell your name"], hint: `spell · your name — magtanong gamit ang do`, x: ["spelling", "does"], why: `May verb na "spell" ang tanong, kaya "do" ang gamit. "You" ang subject, kaya hindi "does".` },
    { t: "type", p: `(simulan sa It) May dalawang T ito`, a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: `two · T — dalawa, kaya plural ang kailangan`, x: ["T", "have"], why: `Dalawa ang T, kaya plural na "Ts". "It" ang subject, kaya "has" at hindi "have".` }
  ],

  pron: [
    { t: "mc", q: `Aling salita ang ibig sabihin ay 'bigas, kanin'?`, o: ["rice", "lice", "rise", "nice"], why: `"Rice" na nagsisimula sa R ang bigas o kanin. Kapag L ang nasabi, "lice" (mga kuto) ang maririnig. May R at L na sa Tagalog, kaya madali ito para sa iyo.` },
    { t: "mc", q: `Aling salita ang ibig sabihin ay 'bentilador'?`, o: ["fan", "pan", "van", "ban"], why: `Sa F, dumidikit ang mga ngipin sa itaas sa ibabang labi at hangin lang ang lumalabas. Kapag P ang nasabi, "pan" (kawali) ang maririnig.` },
    { t: "mc", q: `Aling salita ang ibig sabihin ay 'mag-isip'?`, o: ["think", "sink", "thing", "pink"], why: `Sa TH, nakalabas nang bahagya ang dulo ng dila sa pagitan ng mga ngipin. Kapag /s/ ang nasabi, "sink" (lababo) ang maririnig.` },
    { t: "mc", q: `Aling salita ang ibig sabihin ay 'bumoto'?`, o: ["vote", "boat", "goat", "bought"], why: `Sa V, ayos ng F ang bibig at may ugong ng boses. Kapag B ang nasabi, "boat" (bangka) ang maririnig.` },
    { t: "mc", q: `Aling salita ang ibig sabihin ay 'kanan'?`, o: ["right", "light", "fight", "bright"], why: `"Right" na nagsisimula sa R ang kanan. Ang "light" na nagsisimula sa L ay ilaw.` },

    { t: "order", p: `Saging ito`, a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: `Tunog na consonant ang simula ng "banana", kaya article na "a". TH ang simula ng "this", hindi D.` },
    { t: "order", p: `tatlong puno`, a: ["three", "trees"], x: ["tree", "free"], why: `Tatlo, kaya plural na "trees". Sa Tagalog, wala nang "mga" pagkatapos ng bilang; sa Ingles, kailangan pa rin ng -s. TH ang simula ng "three", TR ang simula ng "tree".` },
    { t: "order", p: `Mahilig ako sa kape`, a: ["I", "like", "coffee"], x: ["copy"], why: `F ang nasa gitna ng "coffee": ngipin sa itaas sa ibabang labi. Kapag P, "copy" (kopya) ang lalabas.` },

    { t: "fill", q: "I eat __ice every day.", p: `Kumakain ako ng kanin araw-araw`, a: ["r"], o: ["l", "n", "w"], why: `"Rice" na nagsisimula sa R ang kanin. Kapag L, "lice" (mga kuto) ang lalabas.` },
    { t: "fill", q: "I __ink so.", p: `Sa tingin ko, oo`, a: ["th"], o: ["s", "t", "p"], why: `TH ang simula ng "think". Kapag s, "sink" (lababo) ang lalabas; hindi rin ito "tink".` },
    { t: "fill", q: "This is my __.", p: `Ito ang bag ko`, a: ["bag"], o: ["back", "bug", "beg"], why: `Tunog na /g/ ang dulo ng "bag". Kapag /k/ ang dulo, "back" (likod) na iyon.` },

    { t: "type", p: `tatlong puno`, a: ["three trees"], hint: `three · tree — tatlo, kaya plural ang kailangan`, x: ["tree"], why: `TH ang simula ng "three" at TR ang simula ng "tree". Tatlo ang puno, kaya plural na -s.` },
    { t: "type", p: `dalawang bangka`, a: ["two boats"], hint: `two · boat — dalawa, kaya plural ang kailangan`, x: ["boat", "votes"], why: `"Boat" na nagsisimula sa B ang bangka, at dalawa ito, kaya plural na -s. Kapag V, "vote" (boto) ang lalabas.` },
    { t: "type", p: `napakagaan (hindi mabigat)`, a: ["very light"], hint: `very · light — V at L ang simula ng mga salitang ito`, x: ["berry"], why: `V ang simula ng "very" (ngipin sa itaas sa ibabang labi) at L ang simula ng "light" (dulo ng dila sa gilagid).` }
  ],

  articles: [
    { t: "mc", q: `'Estudyante ako' sa Ingles?`, o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: `Kailangan ng article na "a" bago ang trabaho o katayuan ng tao. Sa Tagalog, puwedeng walang "isang"; sa Ingles, hindi puwedeng wala ang "a".` },
    { t: "mc", q: `'May ideya ako' sa Ingles?`, o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: `Tunog na vowel ang simula ng "idea", kaya article na "an".` },
    { t: "mc", q: `Ano ang Ingles ng 'isang oras'?`, o: ["an hour", "a hour", "one hours", "hour"], why: `Hindi binibigkas ang h ng "hour". Tunog na vowel ang simula nito, kaya article na "an".` },
    { t: "mc", q: `'Mahilig na mahilig ako sa aso' (lahat ng aso, pangkalahatan) sa Ingles?`, o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: `Kapag pangkalahatan ang sinasabi, plural ang noun at walang article.` },
    { t: "mc", q: `'May aso ako. Ang cute ng asong iyon' sa Ingles?`, o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: `Sa unang banggit, article na "a". Kapag binanggit ulit ang parehong aso, "the".` },

    { t: "order", p: `Guro ako`, a: ["I'm", "a", "teacher"], x: ["the", "an"], why: `Kailangan ng article na "a" bago ang trabaho. Tunog na consonant ang simula ng "teacher", kaya hindi "an".` },
    { t: "order", p: `(ang pinto ng kuwartong ito) Puwede mo bang isara ang pinto?`, a: ["Can", "you", "close", "the", "door"], x: ["a"], why: `Alam ninyong dalawa kung aling pinto ang tinutukoy, kaya article na "the".` },
    { t: "order", p: `Hindi ako umiinom ng kape`, a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: `Pangkalahatan ang sinasabi tungkol sa kape, kaya walang article. Hindi lahat ng noun ay nangangailangan ng "the".` },

    { t: "fill", q: "I'm __ university student.", p: `Estudyante ako sa unibersidad`, a: ["a"], o: ["an", "the", "two"], why: `Tunog ng y ang simula ng "university", kaya article na "a". Tunog ang batayan, hindi baybay.` },
    { t: "fill", q: "I have __ older sister.", p: `May isa akong ate`, a: ["an"], o: ["a", "the", "two"], why: `Tunog na vowel ang simula ng "older", kaya article na "an".` },
    { t: "fill", q: "I don't like __.", p: `Hindi ako mahilig sa pusa (lahat ng pusa, pangkalahatan)`, a: ["cats"], o: ["cat", "a cat", "the cat"], why: `Kapag pangkalahatan ang sinasabi, plural na "cats" at walang article.` },

    { t: "type", p: `May ideya ako`, a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: `have · idea — article bago ang tunog na vowel`, x: ["a"], why: `Tunog na vowel ang simula ng "idea", kaya article na "an".` },
    { t: "type", p: `Mahilig ako sa aso (lahat ng aso, pangkalahatan)`, a: ["I like dogs", "I love dogs"], hint: `like · dog — pangkalahatan, kaya plural ang kailangan`, x: ["dog", "a"], why: `Kapag pangkalahatan ang sinasabi, plural na "dogs" at walang article.` },
    { t: "type", p: `(niyayaya mo ang kaibigan mo) Mananghalian tayo`, a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: `let's · have · lunch — kailangan ba ng article bago ang "lunch"?`, x: ["a", "the"], why: `Walang article bago ang breakfast, lunch at dinner.` }
  ],

  be: [
    { t: "mc", q: `'Pagod ako' sa Ingles?`, o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: `Kalagayan ang sinasabi, kaya kailangan ng "be". Sa Tagalog, walang verb dito; sa Ingles, hindi puwedeng wala.` },
    { t: "mc", q: `Lalaki si Paolo. 'Nagsasalita ba siya ng Ingles?' sa Ingles?`, o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: `Lalaki si Paolo, kaya "he". "Does" ang gamit sa "he", at base form na walang -s ang verb pagkatapos ng "does".` },
    { t: "mc", q: `Babae si Ana. 'Nasa trabaho siya' sa Ingles?`, o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: `Babae si Ana, kaya "she". Kung nasaan ang sinasabi, kaya "be"; "is" ang anyo nito para sa "she".` },
    { t: "mc", q: `Sagutin ng 'oo': "Do you like coffee?"`, o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: `"Do" ang ginamit sa tanong, kaya "do" rin sa sagot.` },
    { t: "mc", q: `Babae si Liza. 'Hindi siya kumakain ng karne' sa Ingles?`, o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: `Babae si Liza, kaya "she". Ang negatibo para sa "she" ay "doesn't" + base form na walang -s.` },

    { t: "order", p: `Sa Seoul nagtatrabaho ang kuya ko`, a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: `Iisang lalaki ang subject ("he"), kaya may -s ang verb: "works". Hindi na kailangan ng "is" dahil may verb na.` },
    { t: "order", p: `Hindi ako estudyante`, a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: `"Not" ang negatibo ng "be", at kailangan ng article na "a" bago ang katayuan ng tao.` },
    { t: "order", p: `Tungkol kay Ana: may dalawa siyang aso`, a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: `Babae si Ana, kaya "she", at "has" ang kasunod nito. Dalawa ang aso, kaya plural na "dogs".` },

    { t: "fill", q: "My brother __ in Seoul.", p: `Nakatira sa Seoul ang kuya ko`, a: ["lives"], o: ["live", "is live", "living"], why: `"He" ang katumbas ng "ang kuya ko", kaya may -s ang verb: "lives".` },
    { t: "fill", q: "__ you tired?", p: `Pagod ka ba?`, a: ["Are"], o: ["Do", "Is", "Does"], why: `Kalagayan ang "tired", kaya "be" ang gamit sa tanong. "Are" ang anyo nito para sa "you".` },
    { t: "fill", q: "We __ hungry.", p: `Gutom kami`, a: ["are"], o: ["is", "am", "do"], why: `Kalagayan ang "hungry", kaya "be". "Are" ang anyo nito para sa "we".` },

    { t: "type", p: `(tungkol kay Paolo; gamitin ang he) Guro siya`, a: ["He's a teacher", "He is a teacher"], hint: `teacher — be + article bago ang trabaho`, x: ["the"], why: `Lalaki si Paolo, kaya "he". Kailangan ng "be" at ng article na "a" bago ang trabaho.` },
    { t: "type", p: `Hindi ako mahilig sa kape`, a: ["I don't like coffee", "I do not like coffee"], hint: `don't · like · coffee — negatibo ng verb na hindi "be"`, x: ["am"], why: `May verb na "like", kaya "don't" ang negatibo (I'm not like ✗).` },
    { t: "type", p: `(tungkol kay Ana; gamitin ang she) May pusa ba siya?`, a: ["Does she have a cat"], hint: `does · have · cat — article bago ang isang pusa`, x: ["has"], why: `Pagkatapos ng "does", base form na "have". Isa lang ang pusa, kaya may article na "a".` }
  ],

  polite: [
    { t: "mc", q: `Sa kapihan, alin ang pinakanatural na paraan ng pag-order ng isang latte?`, o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: `Sa tindahan, natural ang "Can I get ~?". Isa lang ang latte, kaya may article na "a".` },
    { t: "mc", q: `Alin ang pinakamagalang na paghingi ng tulong sa taong hindi mo kakilala?`, o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: `"Could you ~?" ang magalang na pakiusap sa taong hindi mo kakilala. Walang "po" sa Ingles; nasa "could" ang galang.` },
    { t: "mc", q: `Hindi mo naintindihan ang sinabi ng kausap mo. Alin ang magalang na paraan para ipaulit ito?`, o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: `"Could you say that again?" ang magalang na paraan ng pagpapaulit.` },
    { t: "mc", q: `Napakagalang: 'Puwede po ba kaming magpakuha ng litrato sa inyo?' sa Ingles?`, o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: `Anyong -ing ang kasunod ng "mind": "taking".` },
    { t: "mc", q: `Sa eroplano: 'Gusto ko po sana ng upuan sa tabi ng bintana' sa Ingles?`, o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: `"I'd like ~" ang magalang na paghiling. Isang upuan lang, kaya may article na "a".` },

    { t: "order", p: `Isang latte nga po`, a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: `Isang latte ito na ngayon mo lang ino-order, kaya article na "a".` },
    { t: "order", p: `(ang bintana ng kuwartong ito) Puwede po bang pakibukas ng bintana?`, a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: `Anyong -ing ang kasunod ng "mind". Alam ninyong dalawa kung aling bintana, kaya article na "the".` },
    { t: "order", p: `Puwede po bang bagalan ninyo nang kaunti ang pagsasalita?`, a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: `Magalang ang pakiusap na may "Could you ~?". "Slowly" ang anyong naglalarawan sa "speak".` },

    { t: "fill", q: "Would you mind __ the door?", p: `Puwede po bang pakisara ng pinto?`, a: ["closing"], o: ["close", "to close", "closed"], why: `Anyong -ing ang kasunod ng "mind".` },
    { t: "fill", q: "Can I get __ iced coffee?", p: `Isang iced coffee nga po`, a: ["an"], o: ["a", "two", "many"], why: `Tunog na vowel (/aɪ/) ang simula ng "iced", kaya article na "an".` },
    { t: "fill", q: "No, not at __.", p: `(sagot sa "Would you mind ~?") Sige po, walang problema`, a: ["all"], o: ["any", "one", "ever"], why: `"No, not at all" = hindi ko minamasama, ibig sabihin ay pumapayag ka.` },

    { t: "type", p: `(magalang, sa taong hindi kakilala) Puwede po ba ninyo akong tulungan?`, a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: `could · help — magalang na pakiusap sa hindi kakilala`, x: ["can"], why: `"Could you ~?" ang gamit sa pakiusap sa taong hindi mo kakilala.` },
    { t: "type", p: `Gusto ko po sana ng upuan sa tabi ng bintana`, a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: `I'd like · window seat — article bago ang isang upuan`, x: ["the"], why: `Isang upuan ito na unang beses mong binabanggit, kaya article na "a": "a window seat".` },
    { t: "type", p: `Dalawang kape nga po`, a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: `two · coffee — dalawa, kaya plural ang kailangan`, x: ["coffee"], why: `Sa pag-order, binibilang ang kape bawat tasa, kaya plural na -s: "two coffees".` }
  ],

  tense: [
    { t: "mc", q: `'Umiinom ako ng kape ngayon mismo' sa Ingles?`, o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: `Ginagawa ngayon mismo, kaya "be" + anyong -ing. Iisa ang "umiinom" sa Tagalog, pero dito, present continuous ang kailangan.` },
    { t: "mc", q: `'Pumunta ako sa beach noong nakaraang weekend' sa Ingles?`, o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: `"Went" ang past form ng "go". Kahit may "last weekend", kailangan pa ring magbago ng verb. May article na "the" ang "the beach".` },
    { t: "mc", q: `Plano mo sa susunod na buwan: 'Pupunta ako sa Jeju.' Alin ang tama?`, o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: `Sa planong napag-isipan na, "be going to" + base form ang gamit.` },
    { t: "mc", q: `May kumakatok sa pinto. Sasabihin mo agad: 'Ako na ang magbubukas!' Alin ang tama?`, o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: `"Will" ang gamit sa pasyang ginawa sa mismong sandali ng pagsasalita.` },
    { t: "mc", q: `Ano ang past form ng "see"?`, o: ["saw", "seed", "seen", "sawed"], why: `Irregular na verb ang "see": see, saw, seen.` },

    { t: "order", p: `Sa bangko ako nagtatrabaho (palagi)`, a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: `Present tense ang gamit sa palaging ginagawa. Isang bangko ito na unang beses binanggit, kaya article na "a".` },
    { t: "order", p: `Tatawagan kita mamaya`, a: ["I'll", "call", "you", "later"], x: ["calling"], why: `"Will" ang gamit sa pangakong ginawa sa sandali ng pagsasalita.` },
    { t: "order", p: `Dalawang pelikula ang napanood ko`, a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: `"Saw" ang past form ng "see". Dalawa ang pelikula, kaya plural na "movies".` },

    { t: "fill", q: "I __ pizza last night.", p: `Kumain ako ng pizza kagabi`, a: ["ate", "had"], o: ["eat", "eated", "eating"], why: `May "last night", kaya past tense: "ate" ang past form ng "eat" (o "had" kung "have").` },
    { t: "fill", q: "__ you have fun?", p: `Nag-enjoy ka ba?`, a: ["Did"], o: ["Does", "Are", "Were"], why: `Sa tanong tungkol sa tapos na, "Did" + base form ang gamit.` },
    { t: "fill", q: "I'm going __ visit my parents.", p: `Dadalawin ko ang mga magulang ko`, a: ["to"], o: ["for", "at", "on"], why: `Sa plano, "be going to" + base form ang gamit.` },

    { t: "type", p: `Sa bahay ako nagtatrabaho ngayong araw`, a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: `work · from home · today — ginagawa ngayon, kaya be + -ing`, x: ["work"], why: `Ginagawa ngayong araw, kaya "be" + anyong -ing.` },
    { t: "type", p: `Pumunta ako sa beach noong nakaraang weekend`, a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: `go · beach · last weekend — past form ng verb, at may article`, x: ["a"], why: `"Went" ang past form ng "go", at may article na "the" ang "the beach".` },
    { t: "type", p: `(plano na) Kukuha ako ng isang cooking class`, a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: `going to · take · cooking class — article bago ang isang klase`, x: ["the"], why: `"Going to" ang gamit sa planong napag-isipan na. Isang klase ito na unang beses binanggit, kaya article na "a".` }
  ],

  prep: [
    { t: "mc", q: `'sa Mayo' sa Ingles?`, o: ["in May", "on May", "at May", "to May"], why: `"In" ang gamit bago ang buwan. Sa Tagalog, "sa" lang; sa Ingles, kailangang pumili.` },
    { t: "mc", q: `'sa Mayo 3' sa Ingles?`, o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: `"On" ang gamit bago ang petsa.` },
    { t: "mc", q: `'Nasa bus ako (ngayon)' sa Ingles?`, o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: `"On" ang gamit sa pampublikong sasakyan. Ang bus na sinasakyan mo ngayon ang tinutukoy, kaya may article na "the".` },
    { t: "mc", q: `'sa gabi' sa Ingles?`, o: ["at night", "on night", "in night", "at the night"], why: `Eksepsiyon ang "night": "at night", at walang article.` },
    { t: "mc", q: `Alin ang tamang pangungusap?`, o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: `"In" ang gamit sa lungsod, at walang article na "the" bago ang pangalan ng lungsod.` },

    { t: "order", p: `(ang istasyong alam nating dalawa) Magkita tayo sa istasyon`, a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: `"At" ang gamit sa isang tiyak na punto. Alam ninyong dalawa kung aling istasyon, kaya article na "the".` },
    { t: "order", p: `Nasa ibabaw ng mesa ang cellphone ko`, a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: `"On" ang gamit kapag nasa ibabaw. Ang mesang nakikita ninyo ang tinutukoy, kaya article na "the".` },
    { t: "order", p: `Kita tayo sa susunod na linggo`, a: ["See", "you", "next", "week"], x: ["on"], why: `Walang preposition bago ang "next".` },

    { t: "fill", q: "The meeting is __ three.", p: `Alas-tres ang miting`, a: ["at"], o: ["on", "to", "of"], why: `"At" ang gamit bago ang eksaktong oras.` },
    { t: "fill", q: "I was born __ 1998.", p: `Ipinanganak ako noong 1998`, a: ["in"], o: ["on", "at", "to"], why: `"In" ang gamit bago ang taon.` },
    { t: "fill", q: "See you __ Friday.", p: `Kita tayo sa Biyernes`, a: ["on"], o: ["in", "at", "to"], why: `"On" ang gamit bago ang araw ng linggo.` },

    { t: "type", p: `Umiinom ako ng kape sa umaga`, a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: `coffee · morning — in, at may article bago ang "morning"`, x: ["at"], why: `"In" ang gamit sa bahagi ng araw, at laging may article na "the": "in the morning".` },
    { t: "type", p: `Nasa bahay ako ngayon`, a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: `at · home — hindi kailangan ng article`, x: ["the"], why: `Walang article na "the" sa "at home".` },
    { t: "type", p: `Kita tayo sa susunod na weekend`, a: ["See you next weekend"], hint: `see · next weekend — kailangan ba ng preposition bago ang "next"?`, x: ["on"], why: `Walang preposition bago ang "next".` }
  ],

  smalltalk: [
    { t: "mc", q: `Tinanong ka ng katrabaho mo: "How was your weekend?" Alin ang magandang sagot?`, o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: `Tapos na ang weekend na itinatanong, kaya past tense ang sagot, at may isa pang detalye.` },
    { t: "mc", q: `Sabi ng kausap mo: "I don't drink coffee." Paano sabihin ang 'Ako rin, hindi rin ako umiinom'?`, o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: `Kapag sumasang-ayon sa negatibong pangungusap, "Me neither" ang sagot.` },
    { t: "mc", q: `Alin ang maayos na paraan para tapusin ang usapan?`, o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: `Malumanay na pagpapaalam ang "I should get going".` },
    { t: "mc", q: `Alin ang magandang sabihin sa taong ngayon mo lang nakilala?`, o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: `Panahon ang pinakaligtas na paksa. Hindi itinatanong sa bagong kakilala ang suweldo, asawa at timbang.` },
    { t: "mc", q: `Sabi ng kausap mo: "I went to Busan last weekend." Aling sagot ang nagpapakitang interesado ka?`, o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: `Ipinapakita ng "Oh, really?" at "That sounds fun!" na interesado ka.` },

    { t: "order", p: `May plano ka ba sa weekend?`, a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: `Plural na "plans" ang gamit sa tanong na ito, at article na "the" dahil ang darating na weekend ang tinutukoy.` },
    { t: "order", p: `Natuwa akong makausap ka`, a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: `Pamamaalam ito sa dulo ng usapan. "Talking" ang kasunod ng "nice".` },
    { t: "order", p: `Hindi ako mahilig sa mga pelikulang nakakatakot`, a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: `Pangkalahatan ang sinasabi, kaya walang article at plural ang "movies".` },

    { t: "fill", q: "Pretty good! How __ you?", p: `Ayos naman! Ikaw?`, a: ["about"], o: ["for", "with", "of"], why: `Sumagot nang maikli, saka ibalik ang tanong: "How about you?"` },
    { t: "fill", q: "I know, __?", p: `Sinabi mo pa!`, a: ["right"], o: ["light", "yes", "true"], why: `"I know, right?" ang sinasabi kapag sang-ayon na sang-ayon ka. R ang simula ng "right".` },
    { t: "fill", q: "Have you seen any good __ lately?", p: `May napanood ka bang maganda nitong mga nakaraang araw?`, a: ["shows", "movies"], o: ["show", "movie", "a show"], why: `Sa ganitong tanong na may "any", plural ang noun na nabibilang.` },

    { t: "type", p: `Kumusta ang weekend mo?`, a: ["How was your weekend"], hint: `how · weekend — tapos na, kaya past tense ang gamitin`, x: ["is"], why: `Tapos na ang weekend, kaya past tense na "was" ang gamit sa tanong.` },
    { t: "type", p: `Ang ganda ng panahon ngayon`, a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: `nice · weather · today — kailangan ba ng article na "a"?`, x: ["a"], why: `Hindi nabibilang ang "weather", kaya walang article na "a" (a nice weather ✗).` },
    { t: "type", p: `Mahilig akong manood ng pelikula`, a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: `like · watch · movie — pangkalahatan, kaya plural ang kailangan`, x: ["movie"], why: `Pangkalahatan ang sinasabi tungkol sa pelikula, kaya plural na "movies".` }
  ],

  phrasal: [
    { t: "mc", q: `'Buksan mo iyan' (ilaw o TV) sa Ingles?`, o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: `Nasa gitna ng phrasal verb ang pronoun na "it": turn it on.` },
    { t: "mc", q: `'Naubusan kami ng gatas' sa Ingles?`, o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: `"Run out of" = maubusan. Huwag kalimutan ang "of".` },
    { t: "mc", q: `'Sa Daegu ako lumaki' sa Ingles?`, o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: `"Grow up" = lumaki. "Grew up" ang past form nito.` },
    { t: "mc", q: `'Puwede mo bang alagaan ang pusa ko?' sa Ingles?`, o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: `"Look after" = alagaan. Hindi ito nahahati. Ang "look for" ay hanapin.` },
    { t: "mc", q: `'Susunduin kita nang alas-siyete' sa Ingles?`, o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: `Nasa pagitan ng "pick" at "up" ang pronoun na "you".` },

    { t: "order", p: `Hinahanap ko ang salamin ko sa mata`, a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: `Laging plural ang "glasses" (salamin sa mata); baso ang "glass". "Look for" ang katumbas ng hanapin.` },
    { t: "order", p: `Mag-isip tayo ng isang plano`, a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: `"Come up with" = makaisip. Wala pang plano at isa lang ito, kaya article na "a".` },
    { t: "order", p: `Susunduin kita`, a: ["I'll", "pick", "you", "up"], x: ["on"], why: `Nasa pagitan ng "pick" at "up" ang pronoun na "you".` },

    { t: "fill", q: "Can you turn it __?", p: `Puwede mo bang patayin iyan?`, a: ["off"], o: ["of", "on", "out"], why: `"Turn off" ang katumbas ng patayin (ilaw, TV). Dalawa ang f nito; huwag ipagkamali sa "of".` },
    { t: "fill", q: "I work __ every morning.", p: `Nag-eehersisyo ako tuwing umaga`, a: ["out"], o: ["up", "off", "on"], why: `"Work out" = mag-ehersisyo.` },
    { t: "fill", q: "We ran out of __.", p: `Naubusan kami ng itlog`, a: ["eggs"], o: ["egg", "an egg", "the egg"], why: `Nabibilang ang itlog, kaya plural na "eggs" ang gamit kapag naubos ang mga ito.` },

    { t: "type", p: `(gamitin ang it) Pakipatay naman iyan`, a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: `turn · off — nasa gitna ang pronoun`, x: ["on"], why: `Nasa pagitan ng "turn" at "off" ang pronoun na "it".` },
    { t: "type", p: `Dalawang pusa ang inaalagaan ko (palagi)`, a: ["I look after two cats", "I take care of two cats"], hint: `look after · two · cat — dalawa, kaya plural ang kailangan`, x: ["cat"], why: `"Look after" = alagaan. Dalawa ang pusa, kaya plural na "cats".` },
    { t: "type", p: `Naubusan kami ng gatas`, a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: `run out of · milk — kailangan ba ng article?`, x: ["a"], why: `Hindi nabibilang ang "milk", kaya walang article na "a".` }
  ],

  numbers: [
    { t: "mc", q: `Paano sabihin ang 10,000 sa Ingles?`, o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: `10 + thousand. Pagkatapos ng numero, walang plural na -s ang "thousand".` },
    { t: "mc", q: `Paano sabihin ang 1,000,000 sa Ingles?`, o: ["one million", "one hundred thousand", "ten million", "one millions"], why: `Dalawang kuwit = million. Pagkatapos ng numero, walang plural na -s ang "million".` },
    { t: "mc", q: `Paano basahin ang oras na 9:05 sa Ingles?`, o: ["nine oh five", "nine five", "nine and five", "five nine"], why: `Sa 1 hanggang 9 na minuto, may "oh" sa unahan.` },
    { t: "mc", q: `Ano ang natural na basa sa $4.99?`, o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: `Binabasa ang presyo bilang dalawang numero: four ninety-nine.` },
    { t: "mc", q: `Paano basahin ang taong 2026 sa Ingles?`, o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: `Dalawahan ang basa sa taon: twenty, twenty-six.` },

    { t: "order", p: `Alas-siyete kinse na`, a: ["It's", "seven", "fifteen"], x: ["fifty"], why: `"Fifteen" ang 15 (nasa huli ang stress); "fifty" ang 50 (nasa una ang stress).` },
    { t: "order", p: `Labinlimang dolyar iyan`, a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: `Higit sa isang dolyar, kaya plural na -s: "dollars".` },
    { t: "order", p: `dalawang beses sa isang linggo`, a: ["twice", "a", "week"], x: ["the", "one"], why: `Kapag sinasabi kung ilang beses sa bawat linggo, article na "a" ang gamit: "twice a week".` },

    { t: "fill", q: "It's __ quarter past ten.", p: `Labinlimang minuto makalipas ang alas-diyes`, a: ["a"], o: ["the", "one", "an"], why: `May article na "a" bago ang "quarter" (labinlimang minuto).` },
    { t: "fill", q: "That's fifty __ won.", p: `Limampung libong won iyan`, a: ["thousand"], o: ["thousands", "hundred", "million"], why: `"Fifty thousand" ang 50,000. Pagkatapos ng numero, walang plural na -s ang "thousand".` },
    { t: "fill", q: "I'll be there in ten __.", p: `Darating ako sa loob ng sampung minuto`, a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: `Sampu ang minuto, kaya plural na "minutes". Sa Tagalog, walang "mga" pagkatapos ng bilang; sa Ingles, kailangan ng -s.` },

    { t: "type", p: `Alas-tres y medya na`, a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: `three · thirty — basahin ang oras at minuto`, x: ["thirteen"], why: `Basahin nang magkasunod ang oras at minuto: three thirty. Huwag ipagkamali ang "thirty" sa "thirteen" (13).` },
    { t: "type", p: `Dalawampung dolyar iyan`, a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: `twenty · dollar — higit sa isa, kaya plural ang kailangan`, x: ["dollar"], why: `Higit sa isang dolyar, kaya plural na -s: "dollars".` },
    { t: "type", p: `Nag-eehersisyo ako dalawang beses sa isang linggo`, a: ["I work out twice a week", "I exercise twice a week"], hint: `work out · twice · week — aling article ang gamit sa 'sa isang linggo'?`, x: ["the"], why: `"A week" ang katumbas ng 'sa isang linggo': article na "a", hindi "the".` }
  ],

  email: [
    { t: "mc", q: `Kapag "Dear" ang simula, alin ang pinakanatural na bati?`, o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: `Pagkatapos ng "Dear", pangalan ang isinusulat, hindi titulo lang: Mr. + apelyido.` },
    { t: "mc", q: `Paano sabihing kalakip ng email ang report?`, o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: `Ang report na matatanggap ng sinusulatan mo ang tinutukoy, kaya may article na "the".` },
    { t: "mc", q: `'Kailan ang deadline?' sa Ingles?`, o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: `Ang deadline ng gawaing ito mismo ang tinutukoy, kaya article na "the".` },
    { t: "mc", q: `Natagalan ang sagot mo. Alin ang positibong masasabi mo sa halip na humingi ng paumanhin?`, o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: `Magalang ang "Thanks for your patience" kahit walang paghingi ng paumanhin. Huwag ipagkamali ang baybay sa "patients" (mga pasyente).` },
    { t: "mc", q: `Alin ang magandang pangwakas ng email tuwing Biyernes?`, o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: `Isang weekend ang tinutukoy, kaya may article na "a" at singular ang "weekend".` },

    { t: "order", p: `Kalakip nito ang report`, a: ["I've", "attached", "the", "report"], x: ["a"], why: `Ang report na matatanggap ng sinusulatan mo ang tinutukoy, kaya article na "the".` },
    { t: "order", p: `Magtakda tayo ng isang miting`, a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: `Wala pang napagkakasunduang miting at isa lang ito, kaya article na "a".` },
    { t: "order", p: `Aalamin ko muna, tapos babalikan kita`, a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: `"Get back to you" = sasagutin kita mamaya. "To" ang preposition dito.` },

    { t: "fill", q: "Could you send me the file __ Friday?", p: `Puwede mo bang ipadala sa akin ang file nang hindi lalampas sa Biyernes?`, a: ["by"], o: ["until", "in", "at"], why: `"By" + araw ang gamit sa deadline: hindi lalampas sa araw na iyon.` },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: `Sumusulat ako para magtanong tungkol sa iskedyul`, a: ["to"], o: ["for", "about", "at"], why: `Sa pagsasabi ng pakay: "I'm writing to" + base form.` },
    { t: "fill", q: "Thanks for all your hard __!", p: `Salamat sa lahat ng pagsisikap ninyo!`, a: ["work"], o: ["works", "working", "job"], why: `Hindi nabibilang ang "work" (trabaho), kaya walang plural na -s.` },

    { t: "type", p: `Wala akong pasok bukas`, a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: `off · tomorrow — gamitin ang be + off`, x: ["do"], why: `"Be off" ang gamit kapag wala kang pasok.` },
    { t: "type", p: `(simulan sa I) Kalakip nito ang file`, a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: `attach · file — ang file na ipinapadala mo mismo`, x: ["a"], why: `Ang file na matatanggap ng sinusulatan mo ang tinutukoy, kaya article na "the".` },
    { t: "type", p: `(pangwakas ng email tuwing Biyernes) Masayang weekend sa iyo!`, a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: `have · great · weekend — article bago ang isang weekend`, x: ["the"], why: `Isang weekend ang tinutukoy, kaya may article na "a": "a great weekend".` }
  ],

  idioms: [
    { t: "mc", q: `'Napakadali niyan' (idyoma) sa Ingles?`, o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: `Kabisaduhin nang buo ang idyoma: may article na "a" at singular ang "cake".` },
    { t: "mc", q: `'Napakamahal niyan' (idyoma) sa Ingles?`, o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: `Tunog na vowel ang simula ng "arm", kaya article na "an". Consonant ang simula ng "leg", kaya "a".` },
    { t: "mc", q: `'Hanggang dito na lang muna tayo ngayong araw' (puwede kahit sa miting) sa Ingles?`, o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: `Kabisaduhin nang buo ang "call it a day", kasama ang article na "a".` },
    { t: "mc", q: `'Tuwang-tuwa ako' (idyoma) sa Ingles?`, o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: `Walang article at walang plural na -s ang "on cloud nine".` },
    { t: "mc", q: `Alin ang slang na para lang sa magkakaibigan?`, o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: `Slang ng mga kabataan ang "No cap" (totoo, walang biro). Mga idyoma ang iba, na puwede kahit sa trabaho.` },

    { t: "order", p: `Nakikinig ako nang mabuti`, a: ["I'm", "all", "ears"], x: ["ear"], why: `"Puro tainga" ang larawan ng idyoma, kaya plural na "ears".` },
    { t: "order", p: `Kailangan kong mag-aral nang mabuti`, a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: `"Hit the books": hindi nagbabago ang article na "the" at ang plural na "books".` },
    { t: "order", p: `Hindi ko iyan hilig`, a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: `Kabisaduhin nang buo ang "not my cup of tea". May "my" na sa unahan, kaya walang article.` },

    { t: "fill", q: "Kill two __ with one stone.", p: `Makatama ng dalawang ibon sa isang bato (dalawang pakay sa isang gawa)`, a: ["birds"], o: ["bird", "a bird", "the bird"], why: `Dalawa ang ibon, kaya plural na "birds".` },
    { t: "fill", q: "Speak of the __!", p: `Pinag-uusapan lang natin siya, heto na siya!`, a: ["devil"], o: ["tiger", "angel", "bird"], why: `"Devil" (demonyo) ang salita sa idyomang ito. Sinasabi ito kapag biglang dumating ang taong pinag-uusapan.` },
    { t: "fill", q: "I'm feeling under __ weather.", p: `Medyo masama ang pakiramdam ko`, a: ["the"], o: ["a", "an", "my"], why: `"Under the weather": hindi nagbabago ang article na "the".` },

    { t: "type", p: `(idyoma tungkol sa keyk) Napakadali niyan`, a: ["It's a piece of cake", "It is a piece of cake"], hint: `piece · cake — huwag kalimutan ang article`, x: ["the"], why: `"A piece of cake": laging may article na "a".` },
    { t: "type", p: `(idyoma tungkol sa mga daliri) Sana ay palarin ka`, a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: `keep · finger · crossed — ilan ang daliri?`, x: ["finger"], why: `Dalawang daliri ang pinagkukrus, kaya plural na "fingers".` },
    { t: "type", p: `(idyoma) Hanggang dito na lang muna tayo ngayong araw`, a: ["Let's call it a day"], hint: `call it · day — hindi "the" ang article dito`, x: ["the"], why: `"Call it a day": "a" ang article, hindi "the".` }
  ]
};
