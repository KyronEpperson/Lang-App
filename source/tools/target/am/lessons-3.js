/* en-am lessons, part 3 (writer EN-AM-3): want · commands · time · prices · likes · family · restaurant · directions.
   pron is none: example rows are {{ex:አማርኛ||English}} with an empty middle field. No romanisation. */
module.exports = [
  {
    id: "want",
    title: "The infinitive and wanting",
    blurb: "Say you want coffee or want to go, with the thing first and the right ending.",
    deck: "Likes and free time",
    body: `
<p>English puts "want" in the middle: "I want coffee", "I want to go". Amharic puts the thing first and the verb last. Coffee I-want is the shape, not I-want coffee. The sentences in this lesson leave off እኔ, አንተ, and the other subject pronouns. The ending already shows who wants it, so type the short form.</p>
{{ex:ቡና እፈልጋለሁ||I want coffee.}}
<p>Coffee is not the subject. The person who wants it is. Said to a man, "you want coffee" is the man form. Said to a woman, it is the woman form. Said to a shopkeeper you do not know, or to anyone older, it is the polite form. The cup does not choose the ending.</p>
<h3>The to-form, then want</h3>
<p>English "to go" is an infinitive, the to-form. Amharic builds it with <b>መ-</b>. To go is <b>መሄድ</b>. "I want to go" uses that to-form, then want. It does not use a second finished verb. You already know <b>እሄዳለሁ</b> (I go) and <b>ሄድኩ</b> (I went). Neither of those sits after want.</p>
{{ex:መሄድ እፈልጋለሁ||I want to go.}}
{{ex:ወደ ቤት መሄድ እፈልጋለሁ||I want to go home.}}
<h3>The ending still matches the person</h3>
<p>Want changes for the person. <b>እፈልጋለሁ</b> is I. <b>ትፈልጋለህ</b> is the man form. <b>ትፈልጊያለሽ</b> is the woman form. The g stays. It does not become j the way go does. <b>ይፈልጋሉ</b> is the polite form, for <b>እርስዎ</b>, a stranger or an older person. He is <b>ይፈልጋል</b>, the same pattern as <b>ይሄዳል</b>. She is <b>ትፈልጋለች</b>.</p>
<div class="tbl"><table><tr><th>Who</th><th>Want</th></tr><tr><td>I</td><td class="k">እፈልጋለሁ</td></tr><tr><td>You, a man</td><td class="k">ትፈልጋለህ</td></tr><tr><td>You, a woman</td><td class="k">ትፈልጊያለሽ</td></tr><tr><td>You, polite</td><td class="k">ይፈልጋሉ</td></tr><tr><td>He</td><td class="k">ይፈልጋል</td></tr><tr><td>She</td><td class="k">ትፈልጋለች</td></tr></table></div>
{{ex:ቡና ትፈልጋለህ||You want coffee. (to a man)}}
{{ex:ቡና ትፈልጊያለሽ||You want coffee. (to a woman)}}
{{ex:ቡና ይፈልጋሉ||You want coffee. (polite)}}
<h3>I don't want</h3>
<p>The negative you already know wraps the verb. "I don't want" is <b>አልፈልግም</b>. The thing still comes first. "I don't want coffee" is not a separate English "not" in the middle.</p>
{{ex:ቡና አልፈልግም||I don't want coffee.}}
{{ex:መሄድ አልፈልግም||I don't want to go.}}
<p>Listen to the audio for long consonants inside the verb. The fidel does not write them. A specific coffee, one you both already mean, takes the object ending you learned: <b>ቡናውን እፈልጋለሁ</b>, I want the coffee. Plain <b>ቡና</b> is just "coffee".</p>
<div class="tip">The usual slip is English order, <b>እፈልጋለሁ ቡና</b> → <b>ቡና እፈልጋለሁ</b>. The other is a second finished verb: <b>እፈልጋለሁ እሄዳለሁ</b> → <b>መሄድ እፈልጋለሁ</b>.</div>
`,
    check: [
      ["Where does እፈልጋለሁ go in \"I want coffee\"?", ["After ቡና", "Before ቡና", "In the middle, as in English", "It is left off"], 0, "The thing comes first and the verb comes last: ቡና እፈልጋለሁ."],
      ["\"I want to go\" uses which word before want?", ["እሄዳለሁ", "መሄድ", "ሄድኩ", "አልሄድም"], 1, "Want takes the infinitive, the to-form መሄድ, not a second finished verb."],
      ["Which form is said to a woman?", ["ትፈልጋለህ", "ይፈልጋሉ", "ትፈልጊያለሽ", "እፈልጋለሁ"], 2, "The woman form is ትፈልጊያለሽ. ትፈልጋለህ is the man form."]
    ],
    practice: [
      ["mc", "\"I want coffee\" =", "ቡና እፈልጋለሁ", "እፈልጋለሁ ቡና", "ቡና እሄዳለሁ", "መሄድ እፈልጋለሁ", "The thing comes first and want comes last."],
      ["mc", "\"I want to go\" =", "መሄድ እፈልጋለሁ", "እሄዳለሁ እፈልጋለሁ", "እፈልጋለሁ መሄድ", "ሄድኩ እፈልጋለሁ", "Want takes the infinitive መሄድ, not a finished verb."],
      ["mc", "\"You want coffee\" (to a woman) =", "ቡና ትፈልጊያለሽ", "ቡና ትፈልጋለህ", "ቡና እፈልጋለሁ", "ቡና ይፈልጋል", "The woman form is ትፈልጊያለሽ."],
      ["mc", "\"I don't want coffee\" =", "ቡና አልፈልግም", "አልፈልግም ቡና", "ቡና እፈልጋለሁ", "ቡና አልሄድም", "The negative wraps the verb, and ቡና still comes first."],
      ["mc", "\"You want coffee\" (polite) =", "ቡና ይፈልጋሉ", "ቡና ትፈልጋለህ", "ቡና ትፈልጊያለሽ", "ቡና እፈልጋለሁ", "The polite form for እርስዎ is ይፈልጋሉ."],
      ["or", "I want coffee (no pronoun)", "ቡና እፈልጋለሁ", "ትፈልጋለህ", "The verb ending for I is እፈልጋለሁ, and it comes last."],
      ["or", "I want to go (no pronoun)", "መሄድ እፈልጋለሁ", "እሄዳለሁ", "Want takes the infinitive መሄድ, then the verb."],
      ["or", "You want coffee (to a woman, no pronoun)", "ቡና ትፈልጊያለሽ", "ትፈልጋለህ", "The woman form is ትፈልጊያለሽ."],
      ["fi", "ቡና __", "I want coffee.", "እፈልጋለሁ", "ትፈልጋለህ|ይፈልጋል|አልፈልግም", "I takes እፈልጋለሁ."],
      ["fi", "__ እፈልጋለሁ", "I want to go.", "መሄድ", "እሄዳለሁ|ሄድኩ|ቡና", "The to-form of go is the infinitive መሄድ."],
      ["fi", "ቡና __", "You want coffee (to a man).", "ትፈልጋለህ", "ትፈልጊያለሽ|እፈልጋለሁ|ይፈልጋሉ", "The man form is ትፈልጋለህ."],
      ["ty", "I want coffee (no pronoun)", "ቡና እፈልጋለሁ", "ቡና · እፈልጋለሁ · thing first", "ትፈልጋለህ ይፈልጋል", "The verb ending for I is እፈልጋለሁ."],
      ["ty", "I want to go (no pronoun)", "መሄድ እፈልጋለሁ", "መሄድ · እፈልጋለሁ · use the infinitive", "እሄዳለሁ ቡና", "Use the infinitive መሄድ, then want."],
      ["ty", "You want to go (to a woman, no pronoun)", "መሄድ ትፈልጊያለሽ", "መሄድ · ትፈልጊያለሽ · to a woman", "ትፈልጋለህ እፈልጋለሁ", "The woman form is ትፈልጊያለሽ."]
    ]
  },
  {
    id: "commands",
    title: "Commands and please",
    blurb: "Tell a man, a woman, or a stranger to come, sit, or go, and say please.",
    deck: "Greetings and courtesy",
    body: `
<p>English has one "come", one "sit", and one "please". Amharic changes each of them for the person you are talking to. A friend who is a man, a friend who is a woman, and a stranger do not hear the same word.</p>
<h3>Come, sit, and go</h3>
<p>Come is irregular. <b>ና</b> is the man form. <b>ነይ</b> is the woman form. <b>ኑ</b> is for more than one person. For <b>እርስዎ</b>, a stranger or an older person, come is <b>ይምጡ</b>.</p>
<p>Sit and go are regular, and the woman form changes the last sound. Sit is <b>ተቀመጥ</b> to a man and <b>ተቀመጪ</b> to a woman. Go is <b>ሂድ</b> to a man and <b>ሂጂ</b> to a woman. Listen for that change. This lesson does not list every verb. For more than one person, sit is <b>ተቀመጡ</b> and go is <b>ሂዱ</b>. The polite form is different again: <b>ይቀመጡ</b> and <b>ይሂዱ</b>.</p>
<div class="tbl"><table><tr><th>Who</th><th>Come</th><th>Sit</th><th>Go</th></tr><tr><td>A man</td><td class="k">ና</td><td class="k">ተቀመጥ</td><td class="k">ሂድ</td></tr><tr><td>A woman</td><td class="k">ነይ</td><td class="k">ተቀመጪ</td><td class="k">ሂጂ</td></tr><tr><td>More than one</td><td class="k">ኑ</td><td class="k">ተቀመጡ</td><td class="k">ሂዱ</td></tr><tr><td>Polite</td><td class="k">ይምጡ</td><td class="k">ይቀመጡ</td><td class="k">ይሂዱ</td></tr></table></div>
{{ex:ና||Come. (to a man)}}
{{ex:ነይ||Come. (to a woman)}}
{{ex:ወደ ቤት ሂድ||Go to the house. (to a man)}}
{{ex:ወደ ቤት ሂጂ||Go to the house. (to a woman)}}
<h3>Please matches the same person</h3>
<p><b>እባክህ</b> is please to a man. <b>እባክሽ</b> is please to a woman. <b>እባክዎ</b> is please to <b>እርስዎ</b>. Put please first, then the command. A shopkeeper, a driver, or a host you have just met gets the polite form, not the man form.</p>
<p>Use the man form with a friend who is a man, and the woman form with a friend who is a woman. <b>ኑ</b>, <b>ተቀመጡ</b>, and <b>ሂዱ</b> are for more than one person. They are not the polite form. One older person gets <b>ይምጡ</b>, <b>ይቀመጡ</b>, and <b>ይሂዱ</b>. If you are not sure who you are talking to, the polite form is the safe choice.</p>
{{ex:እባክህ ተቀመጥ||Please sit. (to a man)}}
{{ex:እባክሽ ተቀመጪ||Please sit. (to a woman)}}
{{ex:እባክዎ ይቀመጡ||Please sit. (polite)}}
<p>The long consonants in these verbs are not written. Listen to the audio.</p>
<div class="tip">One command for everyone is the mistake: <b>ተቀመጥ</b> said to a woman → <b>ተቀመጪ</b>. And <b>እባክህ</b> said to a woman → <b>እባክሽ</b>.</div>
`,
    check: [
      ["How do you say \"Come!\" to a woman?", ["ና", "ነይ", "ኑ", "ይምጡ"], 1, "The woman form of come is ነይ. ና is the man form."],
      ["How do you say \"please\" to a stranger?", ["እባክህ", "እባክሽ", "እባክዎ", "አመሰግናለሁ"], 2, "A stranger is እርስዎ, so please is እባክዎ."],
      ["ተቀመጡ is said to…", ["one man", "one woman", "እርስዎ", "more than one person"], 3, "ተቀመጡ is the plural. The polite form is ይቀመጡ."]
    ],
    practice: [
      ["mc", "\"Come!\" (to a woman) =", "ነይ", "ና", "ኑ", "ይምጡ", "The woman form of come is ነይ."],
      ["mc", "\"Sit!\" (to a man) =", "ተቀመጥ", "ተቀመጪ", "ይቀመጡ", "ተቀመጡ", "The man form of sit is ተቀመጥ."],
      ["mc", "\"Please\" (to a woman) =", "እባክሽ", "እባክህ", "እባክዎ", "አመሰግናለሁ", "Please to a woman is እባክሽ."],
      ["mc", "\"Sit!\" (polite) =", "ይቀመጡ", "ተቀመጥ", "ተቀመጪ", "ተቀመጡ", "The polite form is ይቀመጡ. ተቀመጡ is for more than one person."],
      ["mc", "\"Go!\" (to a woman) =", "ሂጂ", "ሂድ", "ሂዱ", "ይሂዱ", "The woman form of go is ሂጂ."],
      ["or", "Please sit (to a woman, please first)", "እባክሽ ተቀመጪ", "እባክህ ተቀመጥ", "The woman form is ተቀመጪ, and please is እባክሽ."],
      ["or", "Come to the house (to a man, place first)", "ወደ ቤት ና", "ነይ", "The man form of come is ና."],
      ["or", "Please sit (polite, please first)", "እባክዎ ይቀመጡ", "ተቀመጥ", "The polite form is ይቀመጡ."],
      ["fi", "__ ተቀመጪ", "Please sit (to a woman, please first).", "እባክሽ", "እባክህ|እባክዎ|አመሰግናለሁ", "Please to a woman is እባክሽ."],
      ["fi", "እባክህ __", "Please come (to a man).", "ና", "ነይ|ኑ|ይምጡ", "The man form of come is ና."],
      ["fi", "ወደ ቤት __", "Go to the house (to a woman).", "ሂጂ", "ሂድ|ሂዱ|ይሂዱ", "The woman form of go is ሂጂ."],
      ["ty", "Please come (to a woman, please first)", "እባክሽ ነይ", "እባክሽ · ነይ · please first", "እባክህ ና", "The woman form of come is ነይ, with እባክሽ."],
      ["ty", "Please sit (to a man, please first)", "እባክህ ተቀመጥ", "እባክህ · ተቀመጥ · please first", "እባክሽ ተቀመጪ", "The man form of sit is ተቀመጥ."],
      ["ty", "Go to the house (polite, place first)", "ወደ ቤት ይሂዱ", "ወደ · ቤት · ይሂዱ · polite", "ሂድ ሂጂ", "The polite form of go is ይሂዱ."]
    ]
  },
  {
    id: "time",
    title: "Ethiopian time and days",
    blurb: "Ask the time, use the manual's Ethiopian clock pairs, and name the days.",
    deck: "Numbers, time and prices",
    body: `
<p>What time is it? is <b>ስንት ሰዓት ነው</b>. The hour is the subject, so the verb ending stays <b>ነው</b> even when you ask a woman. Do not switch it to <b>ነሽ</b>. To a stranger, say <b>ይቅርታ</b> first.</p>
{{ex:ስንት ሰዓት ነው||What time is it?}}
{{ex:ይቅርታ ስንት ሰዓት ነው||Excuse me, what time is it?}}
<h3>Two clocks, from the manual's pairs</h3>
<p>Ethiopia also uses a clock counted from morning. Do not learn this as one slogan. The Peace Corps manual gives pairs. Use those. <b>ጠዋት አስራ ሁለት ሰዓት</b> is 6 a.m. <b>ከጠዋቱ 1 ሰዓት</b> is 7 a.m., and <b>ከጠዋቱ 2 ሰዓት</b> is 8 a.m. Noon is <b>ከቀኑ 6 ሰዓት</b>. <b>ከቀኑ 8 ሰዓት</b> is 2 p.m. <b>ከምሽቱ 3 ሰዓት</b> is 9 p.m. <b>ከለሊቱ 10 ሰዓት</b> is 4 a.m. The same page writes 1 as a digit. In words, 7 a.m. is <b>ከጠዋቱ አንድ ሰዓት</b>.</p>
{{ex:ጠዋት አስራ ሁለት ሰዓት||6 a.m. on the Ethiopian clock.}}
{{ex:ከጠዋቱ አንድ ሰዓት ነው||It is 7 a.m. (Ethiopian 1).}}
{{ex:ከቀኑ ስድስት ሰዓት ነው||It is noon (Ethiopian 6).}}
<p>So <b>ከጠዋቱ ሶስት ሰዓት</b> is not 3 a.m. Count from the pair you have: 1 in the morning is 7 a.m., so 3 in the morning is 9 a.m. When you answer, keep the verb last: it is three o'clock is <b>ሶስት ሰዓት ነው</b>. Name the part of the day when you need it, with the words in those pairs. When you make a plan, ask whether the hour is <b>ሀበሻ ሰዓት</b> (Ethiopian time) or <b>ፈረንጅ ሰዓት</b> (European time). The same number can be either clock. Do not invent a private formula. Use the pairs, then ask. You may also see the hour spelled <b>ሰአት</b>. This course writes <b>ሰዓት</b>.</p>
<h3>Days</h3>
<p>The manual's week is <b>ሰኞ</b> Monday, <b>ማክሰኞ</b> Tuesday, <b>ሮብ</b> Wednesday, <b>ሀሙስ</b> Thursday, <b>አርብ</b> Friday, <b>ቅዳሜ</b> Saturday, <b>እሁድ</b> Sunday. You will also see <b>ረቡዕ</b>, <b>ሐሙስ</b>, and <b>እሑድ</b>. Those are other spellings, not mistakes. This course writes the manual's forms. <b>ዛሬ</b> is today. <b>ነገ</b> is tomorrow.</p>
{{ex:ዛሬ ሀሙስ ነው||Today is Thursday.}}
{{ex:ነገ አርብ ነው||Tomorrow is Friday.}}
<p>Person shows up when the subject is a person, not the clock. The clock never takes the man form or the woman form. A day does not either. <b>ዛሬ ሰኞ ነው</b> stays <b>ነው</b> whoever you are talking to. In the manual's dialog, "you go" to a man is <b>ትሄዳለህ</b> and to a woman is <b>ትሄጃለሽ</b>. Save those for a person who is going.</p>
{{ex:ከጠዋቱ ሶስት ሰዓት ትሄዳለህ||You go at Ethiopian 3 in the morning. (to a man)}}
{{ex:ከጠዋቱ ሶስት ሰዓት ትሄጃለሽ||You go at Ethiopian 3 in the morning. (to a woman)}}
<div class="tip">Reading 3 as 3 a.m. is the trap: <b>ሶስት ሰዓት</b> heard as 3 a.m. → ask which clock, and remember <b>ከጠዋቱ ሶስት ሰዓት</b> is 9 a.m.</div>
`,
    check: [
      ["Abebech asks a stranger the time. She starts with…", ["ይቅርታ", "ስንት", "ሰኞ", "ብር"], 0, "The manual says ይቅርታ before you ask a stranger the time."],
      ["ጠዋት አስራ ሁለት ሰዓት is…", ["noon", "6 a.m.", "midnight", "6 p.m."], 1, "The manual's pair: Ethiopian 12 in the morning is 6 a.m."],
      ["Which Wednesday does this course write?", ["እሁድ", "አርብ", "ሮብ", "ማክሰኞ"], 2, "The manual writes ሮብ. ረቡዕ is another spelling you may see, not a mistake."]
    ],
    practice: [
      ["mc", "\"What time is it?\" =", "ስንት ሰዓት ነው", "ስንት ሰዓት ነሽ", "ስንት ሰዓት ነህ", "ሰዓት ነው ስንት", "The verb ending is ነው, because the hour is the subject."],
      ["mc", "6 a.m. on the Ethiopian clock =", "ጠዋት አስራ ሁለት ሰዓት", "ጠዋት ስድስት ሰዓት", "ከቀኑ ስድስት ሰዓት", "ከምሽቱ ስድስት ሰዓት", "The manual's pair: 6 a.m. is Ethiopian 12 in the morning."],
      ["mc", "Noon on the Ethiopian clock =", "ከቀኑ ስድስት ሰዓት", "ከጠዋቱ ስድስት ሰዓት", "ጠዋት አስራ ሁለት ሰዓት", "ከለሊቱ ስድስት ሰዓት", "The manual says noon is ከቀኑ 6 ሰዓት."],
      ["mc", "\"Monday\" =", "ሰኞ", "ማክሰኞ", "አርብ", "እሁድ", "ሰኞ is Monday in the manual's week."],
      ["mc", "\"You go\" (to a woman) =", "ትሄጃለሽ", "ትሄዳለህ", "እሄዳለሁ", "ይሄዳል", "The woman form is ትሄጃለሽ."],
      ["or", "Today is Monday (start with today)", "ዛሬ ሰኞ ነው", "ነሽ", "ነው agrees with the subject, the day."],
      ["or", "It is 7 a.m. Ethiopian (start with ከጠዋቱ)", "ከጠዋቱ አንድ ሰዓት ነው", "አስራ", "The manual's pair: 1 in the morning is 7 a.m., and the verb comes last."],
      ["or", "You go at Ethiopian 3 in the morning (to a man, start with the time, no pronoun)", "ከጠዋቱ ሶስት ሰዓት ትሄዳለህ", "ትሄጃለሽ", "The man form is ትሄዳለህ."],
      ["fi", "ይቅርታ ስንት ሰዓት __", "Excuse me, what time is it?", "ነው", "ነህ|ነሽ|ነዎት", "ነው agrees with the subject, the hour."],
      ["fi", "ጠዋት __ ሰዓት", "6 a.m. on the Ethiopian clock.", "አስራ ሁለት", "ስድስት|አንድ|ሶስት", "6 a.m. is Ethiopian 12 in the morning, አስራ ሁለት."],
      ["fi", "ዛሬ __ ነው", "Today is Thursday.", "ሀሙስ", "ሰኞ|አርብ|እሁድ", "The manual's Thursday is ሀሙስ."],
      ["ty", "Excuse me, what time is it? (start with ይቅርታ, then ስንት ሰዓት)", "ይቅርታ ስንት ሰዓት ነው", "ይቅርታ · ስንት · ሰዓት · ነው", "ነሽ ነህ", "ነው agrees with the subject, the hour."],
      ["ty", "Today is Monday (start with today)", "ዛሬ ሰኞ ነው", "ዛሬ · ሰኞ · ነው", "ነሽ ማክሰኞ", "ነው agrees with the subject, the day."],
      ["ty", "You go to the house (to a woman, place first, no pronoun)", "ወደ ቤት ትሄጃለሽ", "ወደ · ቤት · ትሄጃለሽ", "ትሄዳለህ እሄዳለሁ", "The woman form is ትሄጃለሽ."]
    ]
  },
  {
    id: "prices",
    title: "Prices at the market",
    blurb: "Ask the price and the bill in birr, and answer with ነው.",
    deck: "Numbers, time and prices",
    body: `
<p>At a shop in Addis Ababa you ask the price with <b>ዋጋው ስንት ነው</b>. How much is it? English can say "how much are they" about a price. Amharic keeps one verb, <b>ነው</b>. The price is not a person, so it is not <b>ነህ</b> or <b>ነሽ</b>, and it is not the plural <b>ናቸው</b>.</p>
{{ex:ዋጋው ስንት ነው||How much is the price?}}
{{ex:አራት ብር ነው||It is four birr.}}
<h3>The definite ending on the price</h3>
<p><b>ዋጋ</b> is price. <b>ዋጋው</b> is the price, the one you are both looking at. Picture a pencil, or a cup of coffee, on the counter between you and the seller. That shared thing is why the definite ending is there. The <b>-ው</b> is the same ending you already use on <b>ቤቱ</b>. Leaving it off is the common miss. You are not asking about prices in general. You are asking about this one.</p>
<p>The shop's answer is a number plus <b>ብር</b> (birr), then <b>ነው</b>. Four birr is <b>አራት ብር ነው</b>. Twenty birr is <b>ሃያ ብር ነው</b>. One hundred birr is <b>መቶ ብር ነው</b>. Put the thing first when you want to name it.</p>
{{ex:ሃያ ብር ነው||It is twenty birr.}}
{{ex:ቡና አራት ብር ነው||Coffee is four birr.}}
<h3>Practice figures, not today's menu</h3>
<p>The Peace Corps manual prints practice prices. They are that book's numbers, not a 2026 menu. In that book, coffee is four birr, tea is two birr, and firfir is twenty birr. The chicken stew line is <b>ዶሮ ወጥ አርባ አምስት ብር</b>, forty-five birr. <b>አርባ</b> is forty. Read it. You do not need it to ask the question.</p>
{{ex:ሻይ ሁለት ብር ነው||Tea is two birr. (the book's figure)}}
{{ex:ዶሮ ወጥ አርባ አምስት ብር ነው||The book's chicken stew is forty-five birr.}}
<h3>The bill</h3>
<p>The bill uses the same question shape. <b>ሂሳብ ስንት ነው</b> is how much is the bill? One bill, so still <b>ነው</b>. Say it to a stranger with <b>እባክዎ</b> if you want please in front. Please does not change <b>ነው</b>. Money in this course is birr only. Do not switch the answer into dollars. If you did not hear the number, ask the same question again. The verb stays <b>ነው</b> the second time too.</p>
{{ex:ሂሳብ ስንት ነው||How much is the bill?}}
{{ex:እባክዎ ሂሳብ ስንት ነው||Please, how much is the bill? (polite)}}
<div class="tip">A bare noun and a plural verb is the slip: <b>ዋጋ ስንት ናቸው</b> → <b>ዋጋው ስንት ነው</b>.</div>
`,
    check: [
      ["How do you ask the price?", ["ዋጋ ስንት ናቸው", "ዋጋው ስንት ነው", "ስንት ብር ነሽ", "ብር ስንት ነህ"], 1, "The price you both mean is ዋጋው, and one price takes ነው."],
      ["The manual's coffee figure is for practice. It is…", ["today's price in Addis Ababa", "four birr in that book", "one hundred birr", "a dollar price"], 1, "The book says coffee is four birr. That is not a claim about today's menu."],
      ["ሂሳብ ስንት ነው asks…", ["what time it is", "where the shop is", "how much the bill is", "how the coffee is"], 2, "ሂሳብ is the bill. ስንት ነው asks how much."]
    ],
    practice: [
      ["mc", "\"How much is the price?\" =", "ዋጋው ስንት ነው", "ዋጋ ስንት ነው", "ዋጋው ስንት ናቸው", "ስንት ነው ዋጋው", "The definite ending makes ዋጋው, and the verb is ነው."],
      ["mc", "\"How much is the bill?\" =", "ሂሳብ ስንት ነው", "ሂሳብ ስንት ናቸው", "ዋጋው ስንት ነህ", "ብር ስንት ነሽ", "The bill question is ሂሳብ ስንት ነው."],
      ["mc", "\"It is four birr\" =", "አራት ብር ነው", "አራት ብር ናቸው", "ብር አራት ነው", "አራት ነው ብር", "A price takes ነው, and the verb comes last."],
      ["mc", "\"Coffee is four birr\" (practice figure) =", "ቡና አራት ብር ነው", "ቡና አራት ብር ናቸው", "አራት ቡና ብር ነው", "ቡና ነው አራት ብር", "The book's coffee figure is four birr, with ነው at the end."],
      ["mc", "\"Tea is two birr\" (practice figure) =", "ሻይ ሁለት ብር ነው", "ሻይ ሁለት ብር ናችሁ", "ሁለት ሻይ ነው", "ሻይ ነው ሁለት ብር", "Two birr is the book's tea figure, and the verb is ነው."],
      ["or", "How much is the price? (start with ዋጋው)", "ዋጋው ስንት ነው", "ነሽ", "The verb ending is ነው, because a price is not the woman you are talking to."],
      ["or", "It is twenty birr", "ሃያ ብር ነው", "ናት", "The verb ending is ነው for a price."],
      ["or", "Coffee is four birr (start with coffee)", "ቡና አራት ብር ነው", "ናቸው", "The book's coffee figure is four birr, and the verb comes last."],
      ["fi", "__ ስንት ነው", "How much is the price?", "ዋጋው", "ዋጋ|ሂሳብ|ብር", "The definite ending makes ዋጋው, the price you mean."],
      ["fi", "ሂሳብ ስንት __", "How much is the bill?", "ነው", "ናቸው|ነሽ|ናት", "One bill takes ነው."],
      ["fi", "ሻይ ሁለት ብር __", "Tea is two birr.", "ነው", "ናቸው|ነህ|ናችሁ", "A price takes ነው."],
      ["ty", "How much is the price? (start with ዋጋው)", "ዋጋው ስንት ነው", "ዋጋው · ስንት · ነው", "ነሽ ናቸው", "The verb ending is ነው for the price."],
      ["ty", "It is four birr", "አራት ብር ነው", "አራት · ብር · ነው", "ናት ናቸው", "The verb ending ነው agrees with the subject, a price."],
      ["ty", "How much is the bill? (start with ሂሳብ)", "ሂሳብ ስንት ነው", "ሂሳብ · ስንት · ነው", "ዋጋው ናቸው", "The bill question is ሂሳብ ስንት ነው."]
    ]
  },
  {
    id: "likes",
    title: "Likes, and kind remarks",
    blurb: "Say what you like, and give a kind remark that matches the person.",
    deck: "Compliments",
    body: `
<p>Like works the same way as want. The thing comes first, the verb last. "I like coffee" is <b>ቡና እወዳለሁ</b>. "I don't like coffee" is <b>ቡና አልወድም</b>. <b>በጣም</b> means very, and it sits in front of the verb: <b>ቡና በጣም እወዳለሁ</b>, I like coffee a lot. Want and like are not the same verb. <b>እፈልጋለሁ</b> means you want it. <b>እወዳለሁ</b> means you like it. You can want a coffee and also like coffee, but you cannot swap the words.</p>
{{ex:ቡና እወዳለሁ||I like coffee.}}
{{ex:ቡና አልወድም||I don't like coffee.}}
{{ex:ቡና በጣም እወዳለሁ||I like coffee a lot.}}
<h3>One ending is not enough</h3>
<p>The verb ending matches the person and the gender. <b>ትወዳለህ</b> is the man form. <b>ትወጃለሽ</b> is the woman form. He is <b>ይወዳል</b>. She is <b>ትወዳለች</b>. <b>ይወዳሉ</b> is the polite form. The negative man form is <b>አትወድም</b>. That same spelling is also "she doesn't like". The words around it tell you which. The woman form is different: <b>አትወጅም</b>.</p>
<div class="tbl"><table><tr><th>Who</th><th>Like</th><th>Don't like</th></tr><tr><td>I</td><td class="k">እወዳለሁ</td><td class="k">አልወድም</td></tr><tr><td>A man</td><td class="k">ትወዳለህ</td><td class="k">አትወድም</td></tr><tr><td>A woman</td><td class="k">ትወጃለሽ</td><td class="k">አትወጅም</td></tr><tr><td>He</td><td class="k">ይወዳል</td><td class="k">አይወድም</td></tr><tr><td>She</td><td class="k">ትወዳለች</td><td class="k">አትወድም</td></tr><tr><td>Polite</td><td class="k">ይወዳሉ</td><td class="k">አይወዱም</td></tr></table></div>
{{ex:ቡና ትወዳለህ||You like coffee. (to a man)}}
{{ex:ቡና ትወጃለሽ||You like coffee. (to a woman)}}
<h3>Kind remarks</h3>
<p>The manual gives <b>ውብ</b> for a man or a masculine thing, and <b>ውቢት</b> as the feminine word. <b>ቆንጆ</b> stays <b>ቆንጆ</b> in the manual's sentence about a woman. It does not grow a feminine ending. The copula still changes: <b>ናት</b> for her, <b>ነው</b> for him. <b>ውብ ነህ</b> talks to a man about him. <b>ውቢት ነሽ</b> talks to a woman about her. <b>ቆንጆ ናት</b> talks about a woman. Once coffee is the cup you both mean, it is <b>ቡናው</b>, and the manual says <b>ቡናው በጣም ቆንጆ ነው</b>.</p>
{{ex:ውብ ነህ||You are handsome. (to a man)}}
{{ex:ውቢት ነሽ||You are beautiful. (to a woman)}}
{{ex:ትግስት ቆንጆ ናት||Tigist is beautiful.}}
{{ex:ቡናው በጣም ቆንጆ ነው||The coffee is very nice.}}
<p><b>መልካም ቀን</b> is a wish for a good day. <b>መልካም ጉዞ</b> wishes someone a good trip. <b>በጣም አሪፍ ነው</b> means it's great. These are things you say to someone. They are not like-sentences, and they do not need <b>እወዳለሁ</b>. A set reply to a compliment is not in the sources this course uses, so say the remark and stop. This lesson does not teach a reply line.</p>
{{ex:መልካም ጉዞ||Have a good trip.}}
{{ex:በጣም አሪፍ ነው||It's great.}}
<p>Long consonants inside <b>እወዳለሁ</b> are not written. Listen.</p>
<div class="tip">English order is the slip: <b>እወዳለሁ ቡና</b> → <b>ቡና እወዳለሁ</b>. And the man form said to a woman: <b>ትወዳለህ</b> → <b>ትወጃለሽ</b>.</div>
`,
    check: [
      ["\"I like coffee\" is…", ["ቡና እወዳለሁ", "እወዳለሁ ቡና", "ቡና እፈልጋለሁ", "እወዳለሁ"], 0, "The thing comes first. እፈልጋለሁ means I want, not I like."],
      ["Which word is the feminine form of ውብ?", ["ቆንጆ", "አሪፍ", "ውቢት", "መልካም"], 2, "The manual marks ውቢት as the feminine word. ቆንጆ does not change in that way."],
      ["What does this lesson teach you to say after a compliment?", ["A special reply from the manual", "ምንም አይደለም as the set reply", "Nothing. A checked reply is not in the sources", "እባክሽ"], 2, "A reply to a compliment was not in the sources, so it is not taught here."]
    ],
    practice: [
      ["mc", "\"I like coffee\" =", "ቡና እወዳለሁ", "እወዳለሁ ቡና", "ቡና እፈልጋለሁ", "ቡና አልወድም", "The thing comes first: ቡና እወዳለሁ."],
      ["mc", "\"I don't like coffee\" =", "ቡና አልወድም", "አልወድም ቡና", "ቡና እወዳለሁ", "ቡና አልፈልግም", "Don't like is አልወድም, still after the thing."],
      ["mc", "\"You like coffee\" (to a woman) =", "ቡና ትወጃለሽ", "ቡና ትወዳለህ", "ቡና እወዳለሁ", "ቡና ይወዳሉ", "The woman form is ትወጃለሽ."],
      ["mc", "\"She is beautiful\" (use ውቢት) =", "ውቢት ናት", "ውብ ናት", "ውቢት ነው", "ውብ ነህ", "ውቢት is feminine, so the verb ending is ናት."],
      ["mc", "\"The coffee is very nice\" =", "ቡናው በጣም ቆንጆ ነው", "በጣም ቆንጆ ቡናው ነው", "ቡናው ቆንጆ በጣም ነው", "ቡና በጣም ቆንጆ ናት", "Known coffee is ቡናው, and ነው comes last."],
      ["or", "I like coffee (no pronoun)", "ቡና እወዳለሁ", "ትወዳለህ", "The verb ending for I is እወዳለሁ."],
      ["or", "You like coffee (to a man, no pronoun)", "ቡና ትወዳለህ", "ትወጃለሽ", "The man form is ትወዳለህ."],
      ["or", "Tigist is beautiful (start with her name)", "ትግስት ቆንጆ ናት", "ነው", "Tigist is a woman, so the verb ending is ናት."],
      ["fi", "ቡና __", "I don't like coffee.", "አልወድም", "እወዳለሁ|አልፈልግም|እፈልጋለሁ", "I don't like is አልወድም."],
      ["fi", "__ ናት", "She is beautiful (use ውቢት).", "ውቢት", "ውብ|ቆንጆ|አሪፍ", "The feminine word paired with ውብ is ውቢት."],
      ["fi", "ቡና __", "You like coffee (polite).", "ይወዳሉ", "ትወዳለህ|እወዳለሁ|ትወጃለሽ", "The polite form is ይወዳሉ."],
      ["ty", "I like coffee a lot (no pronoun)", "ቡና በጣም እወዳለሁ", "ቡና · በጣም · እወዳለሁ", "ትወዳለህ አልወድም", "The verb ending for I is እወዳለሁ."],
      ["ty", "You like coffee (to a woman, no pronoun)", "ቡና ትወጃለሽ", "ቡና · ትወጃለሽ", "ትወዳለህ እወዳለሁ", "The woman form is ትወጃለሽ."],
      ["ty", "Have a good trip", "መልካም ጉዞ", "መልካም · ጉዞ", "ቀን አሪፍ", "A kind send-off for a trip is መልካም ጉዞ."]
    ]
  },
  {
    id: "family",
    title: "Family",
    blurb: "Name parents and siblings, and match the ending to a man, a woman, or እርስዎ.",
    deck: "People and family",
    body: `
<p>Four words cover the family you need first. <b>አባት</b> is father. <b>እናት</b> is mother. <b>ወንድም</b> is brother. <b>እህት</b> is sister. The possessive ending you already know on <b>ቤት</b> goes on these words too, and it matches the person who has the relative.</p>
<h3>My, your, his, her</h3>
<p>The manual's table for father is the model. <b>አባቴ</b> is my father. <b>አባትህ</b> is the man form, your father when you speak to a man. <b>አባትሽ</b> is the woman form. <b>አባትዎ</b> is the polite form, for <b>እርስዎ</b>. <b>አባቱ</b> is his father in that table. <b>አባቷ</b> is her father. Mother, brother, and sister take the same my, man, and woman endings: <b>እናቴ</b>, <b>ወንድሜ</b>, <b>እህቴ</b>, and <b>እናትሽ</b>, <b>ወንድምህ</b>, <b>እህትሽ</b>. The polite <b>-ዎ</b> is printed on father. Mother, brother, and sister take that same ending.</p>
<p>Keep two matches apart. The ending on the noun matches the person you are speaking to. The verb at the end matches the relative, not the listener. Mother and sister are feminine, so they take <b>ናት</b>. Father and brother take <b>ነው</b>. My mother is in Addis Ababa is <b>እናቴ በአዲስ አበባ ናት</b>, even when you say it to a man.</p>
<div class="tbl"><table><tr><th></th><th>My</th><th>To a man</th><th>To a woman</th><th>Polite</th></tr><tr><td>Father</td><td class="k">አባቴ</td><td class="k">አባትህ</td><td class="k">አባትሽ</td><td class="k">አባትዎ</td></tr><tr><td>Mother</td><td class="k">እናቴ</td><td class="k">እናትህ</td><td class="k">እናትሽ</td><td class="k">እናትዎ</td></tr><tr><td>Brother</td><td class="k">ወንድሜ</td><td class="k">ወንድምህ</td><td class="k">ወንድምሽ</td><td class="k">ወንድምዎ</td></tr><tr><td>Sister</td><td class="k">እህቴ</td><td class="k">እህትህ</td><td class="k">እህትሽ</td><td class="k">እህትዎ</td></tr></table></div>
{{ex:አባትሽ ማን ነው||Who is your father? (to a woman)}}
{{ex:እናትህ ማን ናት||Who is your mother? (to a man)}}
{{ex:አባትዎ ማን ነው||Who is your father? (polite)}}
<h3>Have, and where they are</h3>
<p>"I have a father" uses <b>አለኝ</b>, the having word you know. "I have no brother" is the negative. The person comes first, the verb last. A sister is feminine, so she takes <b>ናት</b>. A brother takes <b>ነው</b>. <b>አቶ</b> before a man's name is the title the manual uses.</p>
{{ex:አባት አለኝ||I have a father.}}
{{ex:ወንድም የለኝም||I have no brother.}}
{{ex:እህቴ በአዲስ አበባ ናት||My sister is in Addis Ababa.}}
{{ex:እናቴ በአዲስ አበባ ናት||My mother is in Addis Ababa.}}
{{ex:አቶ ከበደ በአዲስ አበባ ነው||Ato Kebede is in Addis Ababa.}}
<p>The manual also lists <b>ባል</b> (husband) and <b>ሚስት</b> (wife), and it says those two can sound blunt. The safer word it gives is <b>ባለቤት</b>. You can leave all three until you need them.</p>
<div class="tip">The man form said to a woman is the mistake: <b>አባትህ</b> → <b>አባትሽ</b>.</div>
`,
    check: [
      ["How do you say \"your father\" to a woman?", ["አባትህ", "አባቴ", "አባትሽ", "አባትዎ"], 2, "The woman form is አባትሽ. አባትህ is the man form."],
      ["\"I have no brother\" is…", ["ወንድም አለኝ", "ወንድም የለኝም", "ወንድሜ ነው", "አባት የለኝም"], 1, "የለኝም is the negative of አለኝ. ወንድም is brother."],
      ["My sister is in Addis Ababa. The last word is…", ["ነው", "ነህ", "ናት", "ነሽ"], 2, "እህቴ is feminine, so the verb ending is ናት."]
    ],
    practice: [
      ["mc", "\"my father\" =", "አባቴ", "አባትህ", "አባትሽ", "አባትዎ", "My father is አባቴ."],
      ["mc", "\"your father\" (to a woman) =", "አባትሽ", "አባትህ", "አባቴ", "አባቷ", "The woman form is አባትሽ."],
      ["mc", "\"your father\" (polite) =", "አባትዎ", "አባትህ", "አባትሽ", "አባቱ", "The polite form is አባትዎ."],
      ["mc", "\"I have a father\" =", "አባት አለኝ", "አባት የለኝም", "አለኝ አባት", "አባቴ ነው", "Having uses አለኝ after the person."],
      ["mc", "\"sister\" =", "እህት", "ወንድም", "እናት", "አባት", "እህት is sister. ወንድም is brother."],
      ["or", "Who is your father? (to a woman, start with አባትሽ)", "አባትሽ ማን ነው", "አባትህ", "The woman form is አባትሽ."],
      ["or", "Who is your mother? (to a man, start with እናትህ)", "እናትህ ማን ናት", "እናትሽ", "The man form is እናትህ. እናት is feminine, so the verb ending is ናት."],
      ["or", "My sister is in Addis Ababa (start with my sister)", "እህቴ በአዲስ አበባ ናት", "ነው", "እህቴ is feminine, so the verb ending is ናት."],
      ["fi", "__ ማን ናት", "Who is your sister? (to a woman)", "እህትሽ", "እህትህ|እህቴ|እህቷ", "The woman form is እህትሽ. እህት is feminine, so the verb ending is ናት."],
      ["fi", "ወንድም __", "I have no brother.", "የለኝም", "አለኝ|ነው|አለው", "I don't have is የለኝም."],
      ["fi", "__ በአዲስ አበባ ናት", "My mother is in Addis Ababa.", "እናቴ", "እናትህ|እናትሽ|እናት", "እናቴ is feminine, so the verb ending is ናት."],
      ["ty", "Who is your brother? (to a woman, start with the brother word)", "ወንድምሽ ማን ነው", "ወንድምሽ · ማን · ነው", "ወንድምህ አባትሽ", "The woman form is ወንድምሽ."],
      ["ty", "Who is your father? (polite, start with the father word)", "አባትዎ ማን ነው", "አባትዎ · ማን · ነው", "አባትህ አባትሽ", "The polite form is አባትዎ."],
      ["ty", "I have a sister (no pronoun)", "እህት አለኝ", "እህት · አለኝ", "የለኝም ወንድም", "አለኝ comes after እህት."]
    ]
  },
  {
    id: "restaurant",
    title: "At a restaurant",
    blurb: "Order a dish and a drink in Addis Ababa, and ask for the bill.",
    deck: "Food and drink",
    body: `
<p>A server in Addis Ababa is a stranger unless you know them, so please is <b>እባክዎ</b>. If you are talking to a woman you know, please is <b>እባክሽ</b>. <b>እባክህ</b> is only for a man. The food still comes first, then <b>እፈልጋለሁ</b>, the want you already use. Please does not change that ending. You are the one who wants the food, so the verb stays the I form.</p>
<p>A simple meal has three beats. You sit, you name one dish and one drink, and you ask for the bill. <b>ውሃ</b> is water. <b>አምቦ ውሃ</b> is the bottled water on the menu. The spicy stew is <b>ቀይ ወጥ</b>. The mild stew is <b>አልጫ ወጥ</b>. Order them one at a time, each with <b>እፈልጋለሁ</b> at the end.</p>
{{ex:እባክዎ እንጀራ እፈልጋለሁ||Please, I want injera. (polite)}}
{{ex:እባክሽ ቡና እፈልጋለሁ||Please, I want coffee. (to a woman)}}
<h3>What the manual's menu prints</h3>
<p>These are the dishes and drinks to learn. <b>እንጀራ</b> is the flat bread the meal is built on. <b>ፍርፍር</b> is that bread torn into a sauce, which is why the manual treats <b>እንጀራ</b> as its base. <b>ክትፎ</b> is finely chopped beef, often served raw. <b>ጥብስ</b> is fried meat. <b>እንቁላል ጥብስ</b> is eggs cooked with pepper and onion, not plain fried eggs. You do not need every row on the first visit. Learn injera, one stew, water, coffee, and the bill, then add the rest from the table. The book's prices are practice figures, not today's menu. You already saw coffee at four birr there.</p>
<div class="tbl"><table><tr><th>Amharic</th><th>English</th></tr><tr><td class="k">ቀይ ወጥ</td><td>spicy stew</td></tr><tr><td class="k">አልጫ ወጥ</td><td>mild stew</td></tr><tr><td class="k">ዶሮ ወጥ</td><td>chicken stew</td></tr><tr><td class="k">ምስር ወጥ</td><td>lentil stew</td></tr><tr><td class="k">ክትፎ</td><td>finely chopped beef, often raw</td></tr><tr><td class="k">ጥብስ</td><td>fried meat</td></tr><tr><td class="k">እንቁላል ጥብስ</td><td>eggs with pepper and onion</td></tr><tr><td class="k">አምቦ ውሃ</td><td>Ambo water</td></tr><tr><td class="k">ውሃ</td><td>water</td></tr><tr><td class="k">ሻይ</td><td>tea</td></tr><tr><td class="k">ቢራ</td><td>beer</td></tr></table></div>
{{ex:ፍርፍር እፈልጋለሁ||I want firfir.}}
{{ex:ዶሮ ወጥ እፈልጋለሁ||I want chicken stew.}}
{{ex:አምቦ ውሃ እፈልጋለሁ||I want Ambo water.}}
<h3>The bill, and sit</h3>
<p>Ask for the bill the way you ask a price: <b>ሂሳብ ስንት ነው</b>. One bill, so <b>ነው</b>. If someone tells you to sit, the command matches you, the person being told. Said to a woman, it is <b>ተቀመጪ</b>, with <b>እባክሽ</b>. Said to a stranger, it is <b>እባክዎ ይቀመጡ</b>.</p>
{{ex:ሂሳብ ስንት ነው||How much is the bill?}}
{{ex:እባክሽ ተቀመጪ||Please sit. (to a woman)}}
{{ex:ቀይ ወጥ በጣም እወዳለሁ||I like the spicy stew a lot.}}
<div class="tip">English word order is the slip: <b>እፈልጋለሁ እንጀራ</b> → <b>እንጀራ እፈልጋለሁ</b>. And please to a woman is not the man form: <b>እባክህ</b> → <b>እባክሽ</b>.</div>
`,
    check: [
      ["You want injera. What comes first?", ["እፈልጋለሁ", "እባክህ, even to a woman", "እንጀራ", "ሂሳብ"], 2, "The food comes first, then want."],
      ["Please, to a woman server you know, is…", ["እባክሽ", "እባክህ", "እባክዎ only", "አመሰግናለሁ"], 0, "እባክሽ is please to a woman. እባክህ is the man form."],
      ["ፍርፍር on this menu is…", ["chicken stew", "tea", "a dish of torn injera", "the bill"], 2, "The manual treats እንጀራ as the base of ፍርፍር."]
    ],
    practice: [
      ["mc", "\"I want injera\" =", "እንጀራ እፈልጋለሁ", "እፈልጋለሁ እንጀራ", "እንጀራ እወዳለሁ", "ቡና እፈልጋለሁ", "The food comes first, then እፈልጋለሁ."],
      ["mc", "\"Please\" (to a woman) =", "እባክሽ", "እባክህ", "እባክዎ", "አመሰግናለሁ", "Please to a woman is እባክሽ, not እባክህ."],
      ["mc", "\"How much is the bill?\" =", "ሂሳብ ስንት ነው", "ሂሳብ ስንት ናቸው", "ዋጋ ስንት ነው", "ሂሳብ ነው ስንት", "The bill is ሂሳብ ስንት ነው."],
      ["mc", "\"chicken stew\" =", "ዶሮ ወጥ", "ቀይ ወጥ", "ምስር ወጥ", "ጥብስ", "ዶሮ ወጥ is the chicken stew on the manual's menu."],
      ["mc", "\"Please, I want coffee\" (polite, please first) =", "እባክዎ ቡና እፈልጋለሁ", "እባክህ ቡና እፈልጋለሁ", "ቡና እፈልጋለሁ እባክዎ", "እባክሽ ቡና ትፈልጊያለሽ", "A stranger gets the polite form እባክዎ, and I still says እፈልጋለሁ."],
      ["or", "I want firfir (no pronoun)", "ፍርፍር እፈልጋለሁ", "ትፈልጋለህ", "The verb ending for I is እፈልጋለሁ."],
      ["or", "Please, I want water (to a woman, please first)", "እባክሽ ውሃ እፈልጋለሁ", "እባክህ", "The woman form of please is እባክሽ."],
      ["or", "How much is the bill? (start with ሂሳብ)", "ሂሳብ ስንት ነው", "ናቸው", "One bill takes ነው at the end."],
      ["fi", "__ እፈልጋለሁ", "I want tea.", "ሻይ", "ቡና|ውሃ|ቢራ", "Tea is ሻይ, and it comes before the verb."],
      ["fi", "__ ውሃ እፈልጋለሁ", "Please, I want water (to a woman).", "እባክሽ", "እባክህ|እባክዎ|አመሰግናለሁ", "The woman form of please is እባክሽ."],
      ["fi", "ሂሳብ ስንት __", "How much is the bill?", "ነው", "ናቸው|ነሽ|ናት", "The bill takes ነው."],
      ["ty", "I want chicken stew (no pronoun)", "ዶሮ ወጥ እፈልጋለሁ", "ዶሮ · ወጥ · እፈልጋለሁ", "ትፈልጋለህ ቀይ", "The verb ending for I is እፈልጋለሁ."],
      ["ty", "Please, I want coffee (to a woman, please first)", "እባክሽ ቡና እፈልጋለሁ", "እባክሽ · ቡና · እፈልጋለሁ", "እባክህ ትፈልጊያለሽ", "The woman form of please is እባክሽ. The verb ending for I stays እፈልጋለሁ."],
      ["ty", "I want Ambo water (no pronoun)", "አምቦ ውሃ እፈልጋለሁ", "አምቦ · ውሃ · እፈልጋለሁ", "ቡና ትፈልጋለህ", "Ambo water is አምቦ ውሃ, then the verb."]
    ]
  },
  {
    id: "directions",
    title: "Directions",
    blurb: "Ask where the hotel is, and say right, left, and straight.",
    deck: "Getting around",
    body: `
<p>Where is the hotel? is <b>ሆቴሉ የት ነው</b>. The hotel is the subject, so the verb ending is <b>ነው</b>, last. <b>የት</b> is where, which you already know. To a stranger, start with <b>ይቅርታ</b> or with <b>ጤና ይስጥልኝ</b>.</p>
{{ex:ሆቴሉ የት ነው||Where is the hotel?}}
{{ex:ይቅርታ ሆቴሉ የት ነው||Excuse me, where is the hotel?}}
<h3>Right, left, straight</h3>
<p><b>ወደ ቀኝ</b> is to the right. <b>ወደ ግራ</b> is to the left. <b>ቀጥታ</b> is straight. The place comes before the verb. On the street, stop a stranger with <b>ይቅርታ</b>, ask where the hotel is, and listen for a place and then <b>ነው</b>. If they tell you to walk, the command matches you. <b>ሂድ</b> is the man form, <b>ሂጂ</b> is the woman form, and <b>ይሂዱ</b> is the polite form. Go right, said to a woman, is <b>ወደ ቀኝ ሂጂ</b>.</p>
{{ex:ወደ ቀኝ ሂድ||Go right. (to a man)}}
{{ex:ወደ ግራ ሂጂ||Go left. (to a woman)}}
{{ex:ቀጥታ ይሂዱ||Go straight. (polite)}}
{{ex:ሆቴሉ ወደ ቀኝ ነው||The hotel is to the right.}}
<h3>Where are you?</h3>
<p>When the subject is "you", <b>ነው</b> is the wrong ending. <b>የት ነህ</b> is the man form. <b>የት ነሽ</b> is the woman form. <b>የት ነዎት</b> is the polite form. <b>የት ነው</b> asks where a thing is, or where he is. It does not ask where you are. Do not answer a hotel question with <b>ነህ</b>, and do not ask a woman <b>የት ነው</b> when you mean where she is. A woman's name takes <b>ናት</b>, as with family: the person, not the street, decides the ending.</p>
{{ex:የት ነህ||Where are you? (to a man)}}
{{ex:የት ነሽ||Where are you? (to a woman)}}
{{ex:የት ነዎት||Where are you? (polite)}}
<p><b>በአዲስ አበባ</b> is in Addis Ababa. <b>በ-</b> is not a separate word sitting where English puts "in". It attaches to the next word. <b>ወደ</b> stays a word of its own in <b>ወደ ቀኝ</b> and <b>ወደ ግራ</b>. The place still comes before <b>ነው</b>. After you hear the direction, <b>አመሰግናለሁ</b> is the thank-you you already know. The hotel question and "where are you?" use the same where-word, <b>የት</b>. Only the ending changes, and it changes for the subject. A polite "where are you?" is <b>የት ነዎት</b>. A polite "where is the hotel?" is still <b>ሆቴሉ የት ነው</b>, because the hotel is not <b>እርስዎ</b>.</p>
{{ex:ሆቴሉ በአዲስ አበባ ነው||The hotel is in Addis Ababa.}}
<div class="tip">The verb before the place is the slip: <b>ነው ወደ ቀኝ</b> → <b>ወደ ቀኝ ነው</b>. And "where are you?" to a man is not the hotel's verb: <b>የት ነው</b> → <b>የት ነህ</b>.</div>
`,
    check: [
      ["\"Where is the hotel?\" ends with…", ["ነህ", "ነው", "ነሽ", "ነዎት"], 1, "The hotel is the subject, so the verb ending is ነው."],
      ["\"Go left\" to a woman starts with…", ["ሂጂ", "ወደ ግራ", "ወደ ቀኝ", "ቀጥታ"], 1, "The place comes first: ወደ ግራ ሂጂ."],
      ["\"Where are you?\" to እርስዎ is…", ["የት ነው", "የት ነህ", "የት ነዎት", "የት ነሽ"], 2, "The polite form is ነዎት."]
    ],
    practice: [
      ["mc", "\"Where is the hotel?\" =", "ሆቴሉ የት ነው", "ሆቴሉ የት ነህ", "ነው ሆቴሉ የት", "የት ነሽ ሆቴሉ", "The hotel takes ነው, and the verb comes last."],
      ["mc", "\"Where are you?\" (to a woman) =", "የት ነሽ", "የት ነህ", "የት ነው", "የት ነዎት", "The woman form is ነሽ."],
      ["mc", "\"Go right\" (to a man, place first) =", "ወደ ቀኝ ሂድ", "ሂድ ወደ ቀኝ", "ወደ ቀኝ ሂጂ", "ወደ ግራ ሂድ", "Place first, and the man form of go is ሂድ."],
      ["mc", "\"straight\" =", "ቀጥታ", "ቀኝ", "ግራ", "የት", "ቀጥታ means straight."],
      ["mc", "\"Where are you?\" (polite) =", "የት ነዎት", "የት ነህ", "የት ነሽ", "የት ነው", "The polite form is ነዎት."],
      ["or", "Where is the hotel? (start with the hotel)", "ሆቴሉ የት ነው", "ነህ", "The verb ending is ነው, because the hotel is the subject."],
      ["or", "Go left (to a woman, place first)", "ወደ ግራ ሂጂ", "ሂድ", "The woman form of go is ሂጂ."],
      ["or", "The hotel is to the right (start with the hotel)", "ሆቴሉ ወደ ቀኝ ነው", "ነሽ", "ነው agrees with the subject, the hotel."],
      ["fi", "ሆቴሉ የት __", "Where is the hotel?", "ነው", "ነህ|ነሽ|ነዎት", "The hotel takes ነው."],
      ["fi", "ወደ __ ሂድ", "Go right (to a man).", "ቀኝ", "ግራ|ቀጥታ|ቤት", "Right is ቀኝ."],
      ["fi", "የት __", "Where are you? (polite)", "ነዎት", "ነህ|ነሽ|ነው", "The polite form is ነዎት."],
      ["ty", "Where are you? (to a man)", "የት ነህ", "የት · ነህ", "ነሽ ነው", "The man form is ነህ."],
      ["ty", "Go straight (polite)", "ቀጥታ ይሂዱ", "ቀጥታ · ይሂዱ", "ሂድ ሂጂ", "The polite form of go is ይሂዱ."],
      ["ty", "Where is the hotel? (start with the hotel)", "ሆቴሉ የት ነው", "ሆቴሉ · የት · ነው", "ነህ ቤቱ", "The verb ending is ነው for the hotel."]
    ]
  }
];
