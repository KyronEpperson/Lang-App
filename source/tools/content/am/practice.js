/* Practice sets for the am-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Amharic; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "ስሙ እንደ see (ማየት) የሚሰማው ፊደል የትኛው ነው?", o: ["C", "S", "Z", "K"], why: "የ C ስም (ሲይ) ልክ እንደ see ይሰማል። S ኤስ፣ Z ዚይ፣ K ኬይ ይባላሉ።" },
    { t: "mc", q: "ከ Q ቀጥሎ የሚመጣው ፊደል የትኛው ነው?", o: ["R", "P", "S", "O"], why: "ቅደም ተከተሉ …O, P, Q, R, S… ነው። ከ Q (ክዩው) ቀጥሎ R (አር) ይመጣል።" },
    { t: "mc", q: "ትክክለኛው የትኛው ነው?", o: ["an M", "a M", "an B", "an U"], why: "የ M ስም (ኤም) በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ይገባል። B (ቢይ) a B ይባላል፤ U (ዩው) በ y ድምፅ ስለሚጀምር a U ነው።" },
    { t: "mc", q: "ከሚከተሉት አናባቢ ፊደል የትኛው ነው?", o: ["U", "R", "S", "W"], why: "የእንግሊዝኛ አናባቢ ፊደላት A, E, I, O, U አምስቱ ናቸው። R, S, W ተነባቢዎች ናቸው።" },
    { t: "mc", q: "W በእንግሊዝኛ ምን ይባላል?", o: ["double u", "double v", "u u", "v v"], why: "ቅርጹ ሁለት V ቢመስልም ስሙ double u (ˈደበልዩው)፣ ማለትም «ሁለት U» ነው።" },

    { t: "order", p: "ያ እንዴት ነው የሚጻፈው?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell ሌላ ግስ ስለሆነ ጥያቄው do ይፈልጋል። ባለቤቱ you ስለሆነ does አይደለም፤ spell እንዳለ ይቆያል።" },
    { t: "order", p: "ስሜ በ S ይጀምራል", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "የ S ስም (ኤስ) በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ይገባል። ባለቤቱ my name አንድ ስለሆነ starts ነው።" },
    { t: "order", p: "hello ውስጥ ሁለት L አለ", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L ሁለት ስለሆኑ ብዙ ቁጥር Ls ይሆናል፤ ብዙ ቁጥር ስለሆነ is ሳይሆን are ይገባል።" },

    { t: "fill", q: "How do you __ your name?", p: "ስምዎን እንዴት ነው የሚጽፉት?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "ከ do በኋላ መሠረታዊው ግስ ይመጣል፦ How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "በ B ይጀምራል", a: ["with"], o: ["by", "for", "in"], why: "«በ… ይጀምራል» በእንግሊዝኛ start with ነው።" },
    { t: "fill", q: "That's M __ in Mary.", p: "Mary በሚለው ስም ውስጥ ያለው M ነው", a: ["as"], o: ["so", "than", "of"], why: "ፊደልን በቃል ሲያረጋግጡ M as in Mary ብለው as in ይጠቀማሉ።" },

    { t: "type", p: "(አርቲክል ጨምረው) በ A ይጀምራል", a: ["It starts with an A", "It begins with an A"], hint: "start · A — የ A ስም በአናባቢ ድምፅ ይጀምራል", x: ["the", "start"], why: "የ A ስም (ኤይ) በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ይገባል። ባለቤቱ it ስለሆነ starts ነው።" },
    { t: "type", p: "(you እና spell ተጠቅመው) ስምዎ እንዴት ነው የሚጻፈው?", a: ["How do you spell your name"], hint: "spell · your name — በ do ይጠይቁ", x: ["spelling", "does"], why: "spell ሌላ ግስ ስለሆነ ጥያቄው በ do ነው። ባለቤቱ you ስለሆነ does አይደለም።" },
    { t: "type", p: "(It ብለው ይጀምሩ) ሁለት T አለው", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — ሁለት ሲሆን ብዙ ቁጥር", x: ["T", "have"], why: "T ሁለት ስለሆኑ ብዙ ቁጥር Ts ይሆናል። ባለቤቱ it ስለሆነ have ሳይሆን has ነው።" }
  ],

  pron: [
    { t: "mc", q: "«ሩዝ» የሚለው ቃል የትኛው ነው?", o: ["rice", "lice", "rise", "nice"], why: "ሩዝ በ R የሚጀምረው rice ነው። በ L ቢጀምር lice (ቅማል) ይሆናል።" },
    { t: "mc", q: "«ማራገቢያ» የሚለው ቃል የትኛው ነው?", o: ["fan", "pan", "van", "ban"], why: "f የላይኛውን ጥርስ በታችኛው ከንፈር ላይ አድርጎ አየር ብቻ ያስወጣል። ሁለቱን ከንፈሮች ገጥሞ በሚከፍተው p ቢሉት pan (መጥበሻ) ይሆናል።" },
    { t: "mc", q: "«ማሰብ» የሚለው ቃል የትኛው ነው?", o: ["think", "sink", "thing", "pink"], why: "th ሲሉ የምላስ ጫፍ በጥርሶች መካከል ትንሽ ይወጣል (መርጃው ሠ ይጠቀማል)። በ s ቢሉት sink (የዕቃ ማጠቢያ) ይሆናል።" },
    { t: "mc", q: "«ድምፅ መስጠት (መምረጥ)» የሚለው ቃል የትኛው ነው?", o: ["vote", "boat", "goat", "bought"], why: "v የ f አፍ አቀማመጥ ላይ ድምፅ ይጨምራል (መርጃው ቨ ይጠቀማል)። ሁለቱን ከንፈሮች በሚገጥመው b ቢሉት boat (ጀልባ) ይሆናል።" },
    { t: "mc", q: "«ቀኝ» የሚለው ቃል የትኛው ነው?", o: ["right", "light", "fight", "bright"], why: "በ R የሚጀምረው right ቀኝ ነው። በ L የሚጀምረው light ብርሃን ነው።" },

    { t: "order", p: "ይህ ሙዝ ነው", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana በተነባቢ ድምፅ ስለሚጀምር አርቲክል a ይገባል። this በ th ይጻፋል።" },
    { t: "order", p: "ሦስት ዛፎች", a: ["three", "trees"], x: ["tree", "free"], why: "ሦስት ስለሆኑ ብዙ ቁጥር -s ይጨመራል፦ trees። three በ th፣ tree በ tr ይጀምራሉ።" },
    { t: "order", p: "ቡና እወዳለሁ", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee የላይኛው ጥርስ በታችኛው ከንፈር ላይ የሚያርፍበት f አለው። በ p ቢጽፉት copy (ቅጂ) ይሆናል።" },

    { t: "fill", q: "I eat __ice every day.", p: "በየቀኑ ሩዝ እበላለሁ", a: ["r"], o: ["l", "n", "w"], why: "ሩዝ በ R የሚጀምረው rice ነው። በ L ቢጽፉት lice (ቅማል) ይሆናል።" },
    { t: "fill", q: "I __ink so.", p: "ይመስለኛል", a: ["th"], o: ["s", "t", "p"], why: "think በ th ይጀምራል። በ s ቢጽፉት sink ይሆናል።" },
    { t: "fill", q: "This is my __.", p: "ይህ ቦርሳዬ ነው", a: ["bag"], o: ["back", "bug", "beg"], why: "ቦርሳ በ g የሚያልቀው bag ነው። በ k ድምፅ ቢያልቅ back (ጀርባ) ይሆናል። የመጨረሻው ተነባቢ ያለ አናባቢ ይነገራል።" },

    { t: "type", p: "ሦስት ዛፎች", a: ["three trees"], hint: "three · tree — ሦስት ሲሆን ብዙ ቁጥር", x: ["tree"], why: "three በ th፣ tree በ tr ይጀምራሉ፤ ሦስት ስለሆኑ ብዙ ቁጥር -s ይጨመራል።" },
    { t: "type", p: "ሁለት ጀልባዎች", a: ["two boats"], hint: "two · boat — ሁለት ሲሆን ብዙ ቁጥር", x: ["boat", "votes"], why: "ጀልባ በ b የሚጀምረው boat ነው፤ ሁለት ስለሆኑ ብዙ ቁጥር -s ይጨመራል። በ v ቢጽፉት vote (ድምፅ) ይሆናል።" },
    { t: "type", p: "ክብደቱ በጣም ቀላል", a: ["very light"], hint: "very · light — በ V እና በ L ይጀምራሉ", x: ["berry"], why: "very በ v (የላይኛው ጥርስ በታችኛው ከንፈር ላይ)፣ light በ l ይጀምራል።" }
  ],

  articles: [
    { t: "mc", q: "«ተማሪ ነኝ» =", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "ከሥራና ከማንነት ፊት አርቲክል a ግዴታ ነው።" },
    { t: "mc", q: "«አንድ ሐሳብ አለኝ» =", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ይገባል።" },
    { t: "mc", q: "«አንድ ሰዓት (60 ደቂቃ)» በእንግሊዝኛ እንዴት ይባላል?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour ውስጥ h አይነበብም። በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ነው።" },
    { t: "mc", q: "«ውሾችን በጣም እወዳለሁ» (ውሻን በአጠቃላይ)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "በአጠቃላይ ሲናገሩ ብዙ ቁጥር ያለ አርቲክል ይጠቀሙ።" },
    { t: "mc", q: "«ውሻ አለኝ። ውሻው በጣም ቆንጆ ነው» =", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "ለመጀመሪያ ጊዜ ሲጠቅሱ አርቲክል a፣ የተጠቀሰውን ሲደግሙ the ይጠቀሙ (ውሻው = the dog)።" },

    { t: "order", p: "አስተማሪ ነኝ", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "ከሥራ ፊት አርቲክል a ይገባል። teacher በተነባቢ ድምፅ ስለሚጀምር an አይደለም።" },
    { t: "order", p: "(የዚህን ክፍል) በር ሊዘጉት ይችላሉ?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "ተናጋሪውም አድማጩም የሚያውቁት ያ በር ስለሆነ አርቲክል the ነው (በሩ)።" },
    { t: "order", p: "ቡና አልጠጣም", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "ቡናን በአጠቃላይ ሲናገሩ አርቲክል አይገባም።" },

    { t: "fill", q: "I'm __ university student.", p: "የዩኒቨርሲቲ ተማሪ ነኝ", a: ["a"], o: ["an", "the", "two"], why: "university በ y ድምፅ ስለሚጀምር አርቲክል a ነው። የሚወሰነው በፊደሉ ሳይሆን በድምፁ ነው።" },
    { t: "fill", q: "I have __ older sister.", p: "አንድ ታላቅ እህት አለኝ", a: ["an"], o: ["a", "the", "two"], why: "older በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ነው።" },
    { t: "fill", q: "I don't like __.", p: "ድመቶችን አልወድም (ድመትን በአጠቃላይ)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "በአጠቃላይ ሲናገሩ ያለ አርቲክል ብዙ ቁጥር cats ይጠቀሙ።" },

    { t: "type", p: "አንድ ሐሳብ አለኝ", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — ከአናባቢ ድምፅ ፊት ያለው አርቲክል", x: ["a"], why: "idea በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ይገባል።" },
    { t: "type", p: "ውሾችን እወዳለሁ (ውሻን በአጠቃላይ)", a: ["I like dogs", "I love dogs"], hint: "like · dog — በአጠቃላይ ሲሆን ብዙ ቁጥር", x: ["dog", "a"], why: "በአጠቃላይ ሲናገሩ ያለ አርቲክል ብዙ ቁጥር dogs ይጠቀሙ።" },
    { t: "type", p: "(አብረን) ምሳ እንብላ", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — ከምግብ ሰዓት ስም ፊት አርቲክል?", x: ["a", "the"], why: "ከምግብ ሰዓት ስሞች (lunch) ፊት አርቲክል አይገባም።" }
  ],

  be: [
    { t: "mc", q: "«ደክሞኛል» =", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "ሁኔታን ሲገልጹ be ግዴታ ነው።" },
    { t: "mc", q: "«እንግሊዝኛ ይናገራል?» =", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "ለ he does ይገባል፤ ከ does በኋላ ግሱ ያለ -s ይመጣል።" },
    { t: "mc", q: "«ሥራ ቦታ ናት» =", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "ቦታን ሲገልጹ be ይጠቀሙ፤ ለ she is ነው።" },
    { t: "mc", q: "Do you like coffee? ሲባሉ «አዎ» ብለው ሲመልሱ", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "ጥያቄው በ do ስለሆነ መልሱም በ do ነው።" },
    { t: "mc", q: "«ሥጋ አትበላም» =", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "የ she አሉታዊ doesn't + ያለ -s ግስ ነው።" },

    { t: "order", p: "ወንድሜ አዳማ ይሠራል", a: ["My", "brother", "works", "in", "Adama"], x: ["work", "is"], why: "ባለቤቱ አንድ ሰው (he) ስለሆነ ግሱ -s ይወስዳል (works)፤ be አይገባም።" },
    { t: "order", p: "ተማሪ አይደለሁም", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "የ be አሉታዊ not ነው፤ ከማንነት ፊት አርቲክል a ይገባል።" },
    { t: "order", p: "ሁለት ውሾች አሏት", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "ከ she በኋላ has ይመጣል፤ ሁለት ስለሆኑ ብዙ ቁጥር -s ይጨመራል (dogs)።" },

    { t: "fill", q: "My brother __ in Addis Ababa.", p: "ወንድሜ አዲስ አበባ ይኖራል", a: ["lives"], o: ["live", "is live", "living"], why: "ባለቤቱ he ስለሆነ ግሱ -s ይወስዳል፦ lives።" },
    { t: "fill", q: "__ you tired?", p: "ደክሞዎታል?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired ሁኔታ ስለሆነ በ be ይጠየቃል። ለ you are ነው።" },
    { t: "fill", q: "We __ hungry.", p: "ርቦናል", a: ["are"], o: ["is", "am", "do"], why: "hungry ሁኔታ ስለሆነ be ይገባል፤ ለ we are ነው።" },

    { t: "type", p: "አስተማሪ ነው", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be + ከሥራ ፊት አርቲክል", x: ["the"], why: "ማንነትን ስለሚገልጽ be ይገባል፤ ከሥራ ፊት አርቲክል a ይጨመራል።" },
    { t: "type", p: "ቡና አልወድም", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — የሌላ ግስ አሉታዊ", x: ["am"], why: "like ሌላ ግስ ስለሆነ አሉታዊው don't ነው (I'm not like ✗)።" },
    { t: "type", p: "አንድ ድመት አላት?", a: ["Does she have a cat"], hint: "does · have · cat — አንድ ሲሆን አርቲክል", x: ["has"], why: "does ሲኖር ግሱ have ይሆናል፤ አንድ ድመት ስለሆነች አርቲክል a ይገባል።" }
  ],

  polite: [
    { t: "mc", q: "ካፌ ውስጥ አንድ ላቴ ሲያዝዙ በጣም ተፈጥሯዊው አባባል የትኛው ነው?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "ሱቅና ካፌ ውስጥ Can I get ~? ተፈጥሯዊ ነው። አንድ ስለሆነ አርቲክል a ይገባል።" },
    { t: "mc", q: "የማያውቁትን ሰው እርዳታ ሲጠይቁ በጣም ትሑቱ አባባል የትኛው ነው?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? ለማያውቁት ሰው የሚሆን ትሑት ጥያቄ ነው።" },
    { t: "mc", q: "የተባለው ካልገባዎት በትሕትና ደግመው ለመጠየቅ", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? በትሕትና ድጋሚ የመጠየቂያ አገላለጽ ነው።" },
    { t: "mc", q: "በጣም በትሕትና፦ «ፎቶ ሊያነሱን ይችላሉ?»", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "ከ mind በኋላ -ing ቅርጽ ይመጣል፦ taking።" },
    { t: "mc", q: "አውሮፕላን ውስጥ፦ «በመስኮት በኩል ያለ ወንበር እፈልጋለሁ»", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ ትሑት ጥያቄ ነው። አንድ ወንበር ስለሆነ አርቲክል a ይገባል።" },

    { t: "order", p: "አንድ ላቴ ማግኘት እችላለሁ?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "ለመጀመሪያ ጊዜ የሚያዝዙት አንድ ኩባያ ስለሆነ አርቲክል a ነው።" },
    { t: "order", p: "(የዚህን ክፍል) መስኮት ቢከፍቱት ቅር ይልዎታል?", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "ከ mind በኋላ -ing ይመጣል፤ ሁለቱም ወገኖች የሚያውቁት ያ መስኮት ስለሆነ አርቲክል the ነው።" },
    { t: "order", p: "ትንሽ ቀስ ብለው ሊናገሩ ይችላሉ?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "በ Could you ~? በትሕትና ይጠይቁ። slowly ተውሳከ ግስ ነው።" },

    { t: "fill", q: "Would you mind __ the door?", p: "በሩን ቢዘጉት ቅር ይልዎታል?", a: ["closing"], o: ["close", "to close", "closed"], why: "ከ mind በኋላ -ing ቅርጽ ይመጣል።" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "አንድ በበረዶ የቀዘቀዘ ቡና ማግኘት እችላለሁ?", a: ["an"], o: ["a", "two", "many"], why: "iced በአናባቢ ድምፅ ስለሚጀምር አርቲክል an ነው።" },
    { t: "fill", q: "No, not at __.", p: "(ለ Would you mind ~? መልስ) እሺ፣ ችግር የለም", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all «በፍጹም ቅር አይለኝም»፣ ማለትም «እሺ፣ አደርገዋለሁ» ማለት ነው።" },

    { t: "type", p: "ሊረዱኝ ይችላሉ? (በትሕትና)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — ትሑት ጥያቄ", x: ["can"], why: "ለማያውቁት ሰው Could you ~? ብለው ይጠይቁ።" },
    { t: "type", p: "በመስኮት በኩል ያለ ወንበር እፈልጋለሁ", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — ከአንድ ወንበር ፊት አርቲክል", x: ["the"], why: "አንድ ወንበር ለመጀመሪያ ጊዜ ስለሚጠቅሱ አርቲክል a ይገባል፦ a window seat።" },
    { t: "type", p: "ሁለት ቡና እባክዎ", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — ሁለት ሲሆን ብዙ ቁጥር", x: ["coffee"], why: "ሲያዝዙ ቡናን በስኒ ስለሚቆጥሩ ብዙ ቁጥር -s ይጨመራል፦ two coffees። አማርኛ «ሁለት ቡና» ይላል፤ እንግሊዝኛ ግን -s ይፈልጋል።" }
  ],

  tense: [
    { t: "mc", q: "«አሁን ቡና እየጠጣሁ ነው» =", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "አሁን እየሆነ ያለ ነገር be + -ing ነው።" },
    { t: "mc", q: "«ባለፈው ቅዳሜና እሁድ ወደ ባሕር ዳርቻ ሄድኩ» =", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "የ go ኃላፊ ቅርጽ went ነው። ባሕር ዳርቻ በአርቲክል the ይነገራል፦ the beach።" },
    { t: "mc", q: "የሚቀጥለውን ወር ዕቅድ ሲናገሩ፦ «ላሊበላን ልጎበኝ ነው»", o: ["I'm going to visit Lalibela next month.", "I visit Lalibela next month.", "I visited Lalibela next month.", "I'm going visit Lalibela next month."], why: "አስቀድሞ የታቀደ ነገር be going to + ግስ ነው።" },
    { t: "mc", q: "የበር ደወል ጮኸ። በዚያው ቅጽበት፦ «እኔ እከፍታለሁ!»", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "በንግግሩ ቅጽበት የተወሰነ ነገር በ will ይገለጻል።" },
    { t: "mc", q: "የ see ኃላፊ ቅርጽ (2ኛ ቅርጽ) የትኛው ነው?", o: ["saw", "seed", "seen", "sawed"], why: "see መደበኛ ያልሆነ ግስ ነው፦ see – saw – seen።" },

    { t: "order", p: "ባንክ ውስጥ እሠራለሁ (ሁልጊዜ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "ሁልጊዜ የሚደረግ ነገር Simple Present ነው፤ አንድ ባንክ ለመጀመሪያ ጊዜ ስለሚጠቀስ አርቲክል a ይገባል።" },
    { t: "order", p: "በኋላ እደውልልሃለሁ", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "በንግግሩ ቅጽበት የሚገባ ቃል በ will ይገለጻል።" },
    { t: "order", p: "ሁለት ፊልሞች አየሁ", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "የ see ኃላፊ ቅርጽ saw ነው፤ ሁለት ስለሆኑ ብዙ ቁጥር -s ይጨመራል (movies)።" },

    { t: "fill", q: "I __ pizza last night.", p: "ትናንት ማታ ፒዛ በላሁ", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "የ eat ኃላፊ ቅርጽ ate ነው (have ቢሆን had)።" },
    { t: "fill", q: "__ you have fun?", p: "ተዝናኑ?", a: ["Did"], o: ["Does", "Are", "Were"], why: "ያለፈን ነገር ሲጠይቁ Did + መሠረታዊ ግስ ይጠቀሙ።" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "ወላጆቼን ልጠይቅ ነው", a: ["to"], o: ["for", "at", "on"], why: "ዕቅድ be going to + ግስ ነው።" },

    { t: "type", p: "ዛሬ ከቤት እየሠራሁ ነው", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — አሁን እየሆነ ያለ", x: ["work"], why: "ዛሬ እየተደረገ ያለ ነገር be + -ing ነው።" },
    { t: "type", p: "ባለፈው ቅዳሜና እሁድ ወደ ባሕር ዳርቻ ሄድኩ", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — ኃላፊ ጊዜና አርቲክል", x: ["a"], why: "የ go ኃላፊ ቅርጽ went ነው፤ ባሕር ዳርቻ በአርቲክል the ይነገራል፦ the beach።" },
    { t: "type", p: "የምግብ አሠራር ትምህርት ልወስድ ነው (ዕቅድ)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — ከአንድ ትምህርት ፊት አርቲክል", x: ["the"], why: "አስቀድሞ የታቀደ ስለሆነ going to፣ አንድ ትምህርት ለመጀመሪያ ጊዜ ስለሚጠቀስ አርቲክል a ይገባል።" }
  ],

  prep: [
    { t: "mc", q: "«May ወር ውስጥ» =", o: ["in May", "on May", "at May", "to May"], why: "ከወር ፊት in ይገባል።" },
    { t: "mc", q: "«May 3 ቀን» =", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "ከቀን ፊት on ይገባል።" },
    { t: "mc", q: "«(አሁን) አውቶቡስ ውስጥ ነኝ» =", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "ለሕዝብ ትራንስፖርት on ይጠቀሙ፤ አሁን የተሳፈሩበት ያ አውቶቡስ ስለሆነ አርቲክል the ይገባል።" },
    { t: "mc", q: "«ማታ» =", o: ["at night", "on night", "in night", "at the night"], why: "night ልዩ ነው፤ ያለ አርቲክል at night ይባላል።" },
    { t: "mc", q: "ትክክለኛው ዓረፍተ ነገር የትኛው ነው?", o: ["I live in Addis Ababa.", "I live at Addis Ababa.", "I live on Addis Ababa.", "I live in the Addis Ababa."], why: "ከከተማ ፊት in ይገባል፤ የከተማ ስም አርቲክል the አይወስድም።" },

    { t: "order", p: "(የምናውቀው) ጣቢያ ላይ እንገናኝ", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "አንድ ነጥብ at ነው፤ ሁለቱም ወገኖች የሚያውቁት ያ ጣቢያ ስለሆነ አርቲክል the ነው።" },
    { t: "order", p: "ስልኬ (ያ) ጠረጴዛ ላይ ነው", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "ገጽ ላይ ሲሆን on ነው፤ ፊት ለፊት ያለው ያ ጠረጴዛ ስለሆነ አርቲክል the ነው።" },
    { t: "order", p: "በሚቀጥለው ሳምንት እንገናኝ", a: ["See", "you", "next", "week"], x: ["on"], why: "ከ next ፊት መስተዋድድ አይገባም።" },

    { t: "fill", q: "The meeting is __ three.", p: "ስብሰባው ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ላይ ነው", a: ["at"], o: ["on", "to", "of"], why: "ከትክክለኛ ሰዓት ፊት at ይገባል።" },
    { t: "fill", q: "I was born __ 1998.", p: "በፈረንጆቹ 1998 ተወለድኩ", a: ["in"], o: ["on", "at", "to"], why: "ከዓመት ፊት in ይገባል።" },
    { t: "fill", q: "See you __ Friday.", p: "አርብ እንገናኝ", a: ["on"], o: ["in", "at", "to"], why: "ከሳምንቱ ቀን ፊት on ይገባል።" },

    { t: "type", p: "ጠዋት ቡና እጠጣለሁ", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + አርቲክል", x: ["at"], why: "የቀን ክፍል in ይወስዳል፤ in the morning ብለው አርቲክል the ይጨምሩ።" },
    { t: "type", p: "አሁን ቤት ነኝ", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — ያለ አርቲክል", x: ["the"], why: "at home ያለ አርቲክል the ይነገራል።" },
    { t: "type", p: "በሚቀጥለው ቅዳሜና እሁድ እንገናኝ", a: ["See you next weekend"], hint: "see · next weekend — ከ next ፊት መስተዋድድ?", x: ["on"], why: "ከ next ፊት መስተዋድድ አይገባም።" }
  ],

  smalltalk: [
    { t: "mc", q: "የሥራ ባልደረባዎ How was your weekend? ቢልዎ", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "ያለፈውን ስለጠየቀ በኃላፊ ጊዜ፣ አንድ መረጃ ጨምረው ይመልሱ።" },
    { t: "mc", q: "I don't drink coffee. ሲባሉ «እኔም (አልጠጣም)» ለማለት", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "አሉታዊ ዓረፍተ ነገርን ሲደግፉ Me neither ይባላል።" },
    { t: "mc", q: "ጨዋታን በተፈጥሮ ለመጨረስ", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going በለሰለሰ መንገድ ለመሄድ የሚያገለግል አገላለጽ ነው።" },
    { t: "mc", q: "ለመጀመሪያ ጊዜ ካገኙት ሰው ጋር ጨዋታ ለመጀመር የሚመች የትኛው ነው?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "የአየር ሁኔታ በጣም ደህና የጨዋታ ርዕስ ነው።" },
    { t: "mc", q: "I went to Hawassa last weekend. ሲባሉ ፍላጎት የሚያሳይ ምላሽ የትኛው ነው?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? እና That sounds fun! ፍላጎት ያሳያሉ።" },

    { t: "order", p: "ለቅዳሜና እሁድ ዕቅድ አለዎት?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "ዕቅድ የሚጠይቀው ይህ አገላለጽ ብዙ ቁጥር plans ይጠቀማል፤ ይህ የሚመጣው ቅዳሜና እሁድ ስለሆነ አርቲክል the ይገባል።" },
    { t: "order", p: "ከእርስዎ ጋር ማውራቴ ደስ ብሎኛል", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "ጨዋታ ሲጨርሱ የሚነገር አባባል ነው። ከ nice በኋላ talking ይመጣል።" },
    { t: "order", p: "የአስፈሪ ፊልሞችን አልወድም", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "ፊልሞችን በአጠቃላይ ስለሚናገሩ ያለ አርቲክል ብዙ ቁጥር movies ይጠቀሙ።" },

    { t: "fill", q: "Pretty good! How __ you?", p: "ደህና ነኝ! አንተስ?", a: ["about"], o: ["for", "with", "of"], why: "አጭር መልስ ሰጥቶ How about you? ብሎ መልሶ መጠየቅ ጨዋነት ነው።" },
    { t: "fill", q: "I know, __?", p: "ልክ ነህ! / እኔም እንደዛ ነው የማስበው!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? በጣም መስማማትን ያሳያል። በ R ይጀምራል።" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ሰሞኑን ጥሩ ነገር አይተዋል?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "እንደዚህ ከ any በኋላ ስለ የሚቆጠር ስም ሲጠይቁ ብዙ ቁጥር ይጠቀሙ።" },

    { t: "type", p: "ቅዳሜና እሁድዎ እንዴት ነበር?", a: ["How was your weekend"], hint: "how · weekend — በኃላፊ ጊዜ", x: ["is"], why: "ያለፈው ቅዳሜና እሁድ ስለሆነ በኃላፊ was ይጠየቃል።" },
    { t: "type", p: "ዛሬ አየሩ ጥሩ ነው", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — አርቲክል ይገባል?", x: ["a"], why: "weather የማይቆጠር ስም ስለሆነ አርቲክል a አይወስድም (a nice weather ✗)።" },
    { t: "type", p: "ፊልም ማየት እወዳለሁ", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — በአጠቃላይ ሲሆን ብዙ ቁጥር", x: ["movie"], why: "ፊልሞችን በአጠቃላይ ስለሚናገሩ ብዙ ቁጥር movies ይጠቀሙ።" }
  ],

  phrasal: [
    { t: "mc", q: "«ያብሩት» =", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "ተውላጠ ስም it በሐረጋዊ ግሱ መሃል ይገባል፦ turn it on።" },
    { t: "mc", q: "«ወተት አለቀብን» =", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = ማለቅ። of አይርሱ።" },
    { t: "mc", q: "«ያደግኩት አዳማ ነው» =", o: ["I grew up in Adama.", "I grew in Adama up.", "I growed up in Adama.", "I grew out in Adama."], why: "grow up = ማደግ፤ ኃላፊው grew up ነው።" },
    { t: "mc", q: "«ድመቴን ሊንከባከቡልኝ ይችላሉ?» =", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = መንከባከብ፤ የማይከፈል ሐረጋዊ ግስ ነው (look for «መፈለግ» ነው)።" },
    { t: "mc", q: "«ማታ 1 ሰዓት (7 p.m.) ላይ መጥቼ እወስድሃለሁ» =", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "ተውላጠ ስም you በ pick እና በ up መካከል ይገባል።" },

    { t: "order", p: "መነጽሬን እየፈለግሁ ነው", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "መነጽር ሁልጊዜ ብዙ ቁጥር glasses ነው (glass ብርጭቆ ነው)። «መፈለግ» look for ነው።" },
    { t: "order", p: "አንድ ዕቅድ እናውጣ", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = (ሐሳብ) ማውጣት። ገና የሌለ አንድ ዕቅድ ስለሆነ አርቲክል a ነው።" },
    { t: "order", p: "መጥቼ እወስድሃለሁ", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "ተውላጠ ስም you በ pick እና በ up መካከል ይገባል።" },

    { t: "fill", q: "Can you turn it __?", p: "ያንን ሊያጠፉት ይችላሉ?", a: ["off"], o: ["of", "on", "out"], why: "ማጥፋት turn off ነው። ከ of ጋር አያምታቱት።" },
    { t: "fill", q: "I work __ every morning.", p: "በየቀኑ ጠዋት ስፖርት እሠራለሁ", a: ["out"], o: ["up", "off", "on"], why: "work out = ስፖርት መሥራት።" },
    { t: "fill", q: "We ran out of __.", p: "እንቁላል አለቀብን", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "እንደ እንቁላል ያለ የሚቆጠር ነገር ሲያልቅ ብዙ ቁጥር eggs ይጠቀሙ።" },

    { t: "type", p: "እባክዎ ያንን ያጥፉት", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — ተውላጠ ስም መሃል ላይ", x: ["on"], why: "ተውላጠ ስም it በ turn እና በ off መካከል ይገባል።" },
    { t: "type", p: "ሁለት ድመቶችን እንከባከባለሁ", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — ሁለት ሲሆን ብዙ ቁጥር", x: ["cat"], why: "look after = መንከባከብ፤ ሁለት ስለሆኑ ብዙ ቁጥር -s ይጨመራል፦ cats።" },
    { t: "type", p: "ወተት አለቀብን", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — አርቲክል ይገባል?", x: ["a"], why: "milk የማይቆጠር ስም ስለሆነ አርቲክል a አይወስድም።" }
  ],

  numbers: [
    { t: "mc", q: "10,000 (አሥር ሺህ) በእንግሊዝኛ እንዴት ይባላል?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "ሦስት ሦስት አሃዝ ይከፈላል፦ 10 + thousand። ከቁጥር በኋላ thousand ብዙ ቁጥር -s አይወስድም።" },
    { t: "mc", q: "1,000,000 (አንድ ሚሊዮን) በእንግሊዝኛ እንዴት ይባላል?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "ሁለት ኮማ = million። ከቁጥር በኋላ million ብዙ ቁጥር -s አይወስድም።" },
    { t: "mc", q: "9:05 እንዴት ይነበባል?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "ደቂቃው ከ1 እስከ 9 ሲሆን oh ይጨመራል።" },
    { t: "mc", q: "$4.99 በተፈጥሮ እንዴት ይነበባል?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "ዋጋ በሁለት ቁጥሮች ይነበባል፦ four ninety-nine።" },
    { t: "mc", q: "2026 ዓመትን በእንግሊዝኛ እንዴት ያነቡታል?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "ዓመት ሁለት ሁለት አሃዝ ተከፍሎ ይነበባል።" },

    { t: "order", p: "ሰዓቱ 7:15 ነው", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 fifteen ነው (ጫናው በኋላ)፤ 50 fifty ነው (ጫናው በፊት)።" },
    { t: "order", p: "15 ዶላር ነው", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "ከ1 ዶላር በላይ ሲሆን ብዙ ቁጥር -s ይጨመራል፦ dollars።" },
    { t: "order", p: "በሳምንት ሁለት ጊዜ", a: ["twice", "a", "week"], x: ["the", "one"], why: "«በሳምንት ስንት ጊዜ» በአርቲክል a ይነገራል፦ twice a week።" },

    { t: "fill", q: "It's __ quarter past ten.", p: "ሰዓቱ 10:15 ነው", a: ["a"], o: ["the", "one", "an"], why: "ከ quarter (ሩብ) ፊት አርቲክል a ይገባል።" },
    { t: "fill", q: "That's fifty __ birr.", p: "50,000 ብር ነው", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 fifty thousand ነው። ከቁጥር በኋላ thousand ብዙ ቁጥር -s አይወስድም።" },
    { t: "fill", q: "I'll be there in ten __.", p: "በ10 ደቂቃ ውስጥ እደርሳለሁ", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 ደቂቃ ስለሆነ ብዙ ቁጥር minutes ነው።" },

    { t: "type", p: "ሰዓቱ 3:30 ነው", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — ሰዓቱንና ደቂቃውን እንዳለ", x: ["thirteen"], why: "ሰዓቱንና ደቂቃውን እንዳለ ያንብቡ፦ three thirty። ከ13 (thirteen) ጋር አያምታቱት።" },
    { t: "type", p: "20 ዶላር ነው", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — ከ1 በላይ ሲሆን ብዙ ቁጥር", x: ["dollar"], why: "ከ1 ዶላር በላይ ስለሆነ ብዙ ቁጥር -s ይጨመራል፦ dollars።" },
    { t: "type", p: "በሳምንት ሁለት ጊዜ ስፖርት እሠራለሁ", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — «በሳምንት» በየትኛው አርቲክል?", x: ["the"], why: "«በሳምንት» አርቲክል a ይወስዳል፦ a week (the week ✗)።" }
  ],

  email: [
    { t: "mc", q: "በ Dear ሲጀምሩ በጣም ተፈጥሯዊው ሰላምታ የትኛው ነው?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "ከ Dear በኋላ ማዕረግ ብቻ ሳይሆን ስም ይጻፉ።" },
    { t: "mc", q: "ሪፖርቱን ማያያዝዎን ሲያሳውቁ", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "ተቀባዩ የሚያገኘው ያ ሪፖርት ስለሆነ አርቲክል the ይገባል።" },
    { t: "mc", q: "«ቀነ ገደቡ መቼ ነው?» =", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "የዚህ ሥራ ያ ቀነ ገደብ ስለሆነ አርቲክል the ነው።" },
    { t: "mc", q: "ምላሽዎ ሲዘገይ ከይቅርታ ይልቅ የሚጠቀሙት አዎንታዊ አገላለጽ የትኛው ነው?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience ይቅርታ ሳይጠይቁ ትሑት ይሆናል። ከ patients (ታካሚዎች) ጋር አጻጻፉን ይለዩ።" },
    { t: "mc", q: "በአርብ ኢሜይል መጨረሻ ላይ የሚመች መልካም ምኞት የትኛው ነው?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "አንድ ቅዳሜና እሁድ ስለሆነ አርቲክል a ይገባል፤ weekend ነጠላ ቁጥር ነው።" },

    { t: "order", p: "ሪፖርቱን አያይዣለሁ", a: ["I've", "attached", "the", "report"], x: ["a"], why: "ተቀባዩ የሚያገኘው ያ ሪፖርት ስለሆነ አርቲክል the ነው።" },
    { t: "order", p: "ስብሰባ እንያዝ", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "ገና ያልተወሰነ አንድ ስብሰባ ስለሆነ አርቲክል a ነው።" },
    { t: "order", p: "አረጋግጬ መልሼ አሳውቅዎታለሁ", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = መልሶ ማሳወቅ። to ይጠቀሙ።" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "ፋይሉን እስከ አርብ ሊልኩልኝ ይችላሉ?", a: ["by"], o: ["until", "in", "at"], why: "ቀነ ገደብ (እስከ…) by + ቀን ነው።" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "የምጽፈው ስለ ፕሮግራሙ ለመጠየቅ ነው", a: ["to"], o: ["for", "about", "at"], why: "ዓላማ I'm writing to + ግስ ነው።" },
    { t: "fill", q: "Thanks for all your hard __!", p: "ስለ ድካምዎ ሁሉ በጣም እናመሰግናለን", a: ["work"], o: ["works", "working", "job"], why: "work (ሥራ) የማይቆጠር ስም ስለሆነ ብዙ ቁጥር -s አይወስድም።" },

    { t: "type", p: "ነገ እረፍት ነኝ (ሥራ የለኝም)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be ከ off ጋር", x: ["do"], why: "የእረፍት ቀንን be off ብለው ይገልጻሉ።" },
    { t: "type", p: "ፋይሉን አያይዣለሁ", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — ያ የታወቀው ፋይል", x: ["a"], why: "ተቀባዩ የሚያገኘው ያ ፋይል ስለሆነ አርቲክል the ነው።" },
    { t: "type", p: "መልካም ቅዳሜና እሁድ!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — ከአንድ ቅዳሜና እሁድ ፊት አርቲክል", x: ["the"], why: "አንድ ቅዳሜና እሁድ ስለሆነ አርቲክል a ይገባል፦ a great weekend።" }
  ],

  idioms: [
    { t: "mc", q: "«በጣም ቀላል ነው» (ፈሊጥ) =", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "ፈሊጥን በሙሉ ያጥኑ፦ አርቲክል a አለው፤ cake ነጠላ ቁጥር ነው።" },
    { t: "mc", q: "«በጣም ውድ ነው» (ፈሊጥ) =", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm በአናባቢ ድምፅ ስለሚጀምር አርቲክል an፣ leg በተነባቢ ድምፅ ስለሚጀምር a ነው።" },
    { t: "mc", q: "«ለዛሬ በቃን» (ስብሰባ ላይም ይቻላል)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day ከአርቲክል a ጋር በሙሉ የሚጠና ፈሊጥ ነው።" },
    { t: "mc", q: "«ከደስታ የተነሳ እየበረርኩ ነው» =", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine ያለ አርቲክልና ያለ ብዙ ቁጥር -s ይነገራል።" },
    { t: "mc", q: "በጓደኞች መካከል ብቻ የሚነገረው ስላንግ የትኛው ነው?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap «በእውነት» ማለት የሆነ የወጣቶች ስላንግ ነው። ሌሎቹ በሥራ ቦታም የሚነገሩ ፈሊጦች ናቸው።" },

    { t: "order", p: "በጥሞና እየሰማሁ ነው", a: ["I'm", "all", "ears"], x: ["ear"], why: "«ሁለመናዬ ጆሮ ሆኗል» የሚል አገላለጽ ስለሆነ ብዙ ቁጥር ears ይጠቀማል።" },
    { t: "order", p: "በደንብ ማጥናት አለብኝ", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books፦ አርቲክል the እና ብዙ ቁጥር books እንዳሉ ይቆያሉ።" },
    { t: "order", p: "የእኔ ምርጫ አይደለም", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea በሙሉ ይጠና። በ my ቦታ አርቲክል አይገባም።" },

    { t: "fill", q: "Kill two __ with one stone.", p: "በአንድ ድንጋይ ሁለት ወፍ", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "ሁለት ወፎች ስለሆኑ ብዙ ቁጥር birds ነው።" },
    { t: "fill", q: "Speak of the __!", p: "ስሙን ስናነሳ መጣ!", a: ["devil"], o: ["ghost", "angel", "bird"], why: "በእንግሊዝኛ ይህ ፈሊጥ devil (ሰይጣን) ይጠቀማል።" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "ትንሽ አሞኛል", a: ["the"], o: ["a", "an", "my"], why: "under the weather፦ አርቲክል the እንዳለ ይቆያል።" },

    { t: "type", p: "በጣም ቀላል ነው (ፈሊጥ)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — አርቲክሉን አይርሱ", x: ["the"], why: "a piece of cake፦ አርቲክል a ግዴታ ነው።" },
    { t: "type", p: "መልካም እንዲሆንልህ እመኛለሁ (ፈሊጥ)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — ስንት ጣት?", x: ["finger"], why: "ሁለት ጣቶች ስለሚያቆላልፉ ብዙ ቁጥር fingers ነው።" },
    { t: "type", p: "ለዛሬ በቃን", a: ["Let's call it a day"], hint: "call it · day — the አይደለም", x: ["the"], why: "call it a day፦ አርቲክል the ሳይሆን a ነው።" }
  ]
};
