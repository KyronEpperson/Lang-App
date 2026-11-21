/* en-am lessons, part 2 (writer EN-AM-2): this-that · questions · numbers · possessive · have · prepositions · past · present · negative.
   pron is none: every example middle stays empty. No romanisation. */
module.exports = [
  {
    id: "this-that",
    title: "This, that, and the classroom",
    blurb: "Point to a book or a person and say this or that, matching masculine and feminine.",
    deck: "Classroom and home",
    body: `
<p>English has one word, this, for a book and for a woman. Amharic looks at the noun. Near you, a masculine noun takes <b>ይህ</b> and a feminine noun takes <b>ይህች</b>. Farther away, a masculine noun takes <b>ያ</b> and a feminine noun takes <b>ያች</b>. One English word cannot cover those four.</p>
<h3>The noun, then "to be"</h3>
<p>English says "this is a book," with is in the middle. Amharic says the demonstrative, then the noun, then the copula at the end. Copula is the little "to be." A book, a pen and a house are masculine in this course, so the verb ending is <b>ነው</b>. For "this is a book," the noun stays bare: <b>ይህ መጽሐፍ ነው</b>, not <b>ይህ መጽሐፉ</b>. A house you already have in mind can still be <b>ቤቱ</b>. <b>ይህ ቤቱ ነው</b> is a real sentence.</p>
{{ex:ይህ መጽሐፍ ነው።||This is a book.}}
{{ex:ይህ ብዕር ነው።||This is a pen.}}
{{ex:ያ ቤት ነው።||That is a house.}}
<h3>A woman takes ናት</h3>
<p>Point at a woman and two pieces change. The demonstrative is the feminine one, and the verb ending is <b>ናት</b>. Around Addis Ababa you will also hear <b>ነች</b> for that feminine is, and <b>ይቺ</b> for feminine this. This course writes <b>ናት</b> and <b>ይህች</b>. Both are ordinary. A man stays on <b>ነው</b>. <b>ሴት</b> means a woman, and <b>ወንድ</b> means a man.</p>
{{ex:ይህ ወንድ ነው።||This is a man.}}
{{ex:ይህች ሴት ናት።||This is a woman.}}
{{ex:ይህች ትግስት ናት።||This is Tigist.}}
{{ex:ያች አበበች ናት።||That is Abebech.}}
{{ex:ይህ አቶ ከበደ ነው።||This is Ato Kebede.}}
<h3>Who you are speaking to</h3>
<p>A friend or a peer is <b>አንተ</b> if he is a man and <b>አንቺ</b> if she is a woman. A stranger or an older person is <b>እርስዎ</b>, and the verb ending is the polite form <b>ነዎት</b>. When you talk about an older person, <b>እሳቸው</b> takes <b>ናቸው</b>. The demonstrative still matches the noun in front of you, not how polite you are being.</p>
{{ex:እርስዎ አቶ ከበደ ነዎት።||You are Ato Kebede. (polite)}}
{{ex:እሳቸው አቶ ከበደ ናቸው።||He is Ato Kebede. (polite)}}
<div class="tip">The usual mistake is one this for every noun. <b>ይህ ሴት ነው</b> → <b>ይህች ሴት ናት</b>.</div>
`,
    check: [
      ["How do you say this for a book?", ["ይህች", "ይህ", "ያች", "ያ"], 1, "A book is masculine, so this is ይህ."],
      ["Which sentence is 'This is Tigist'?", ["ይህች ትግስት ናት።", "ይህ ትግስት ነው።", "ይህች ትግስት ነው።", "ያ ትግስት ናት።"], 0, "Tigist is a woman, so use ይህች and the verb ending ናት."],
      ["'That is a pen' =", ["ይህ ብዕር ነው።", "ይህች ብዕር ናት።", "ያ ብዕር ነው።", "ያ ብዕር ናት።"], 2, "A pen farther away takes ያ, and the verb ending is ነው."]
    ],
    practice: [
      ["mc", "'This is a book' =", "ይህ መጽሐፍ ነው", "ይህች መጽሐፍ ናት", "ያ መጽሐፍ ነው", "መጽሐፍ ይህ ነው", "A book is masculine: ይህ, then the noun, then ነው."],
      ["mc", "Which this goes with a woman?", "ይህች", "ይህ", "ያ", "ያች", "ይህች is feminine this. ያች is feminine that."],
      ["mc", "'That is a pen' =", "ያ ብዕር ነው", "ይህ ብዕር ነው", "ያ ብዕር ናት", "ይህች ብዕር ናት", "Farther away and masculine: ያ, and the verb ending ነው."],
      ["mc", "The verb ending for Tigist is", "ናት", "ነው", "ነህ", "ነሽ", "Tigist is a woman, so the feminine verb ending is ናት."],
      ["mc", "'That is Abebech' =", "ያች አበበች ናት", "ያ አበበች ነው", "ይህች አበበች ነው", "ያች አበበች ነህ", "Abebech takes feminine that, ያች, and ናት."],
      ["or", "This is a book.", "ይህ | መጽሐፍ | ነው", "ናት", "መጽሐፍ is masculine, so the verb ending is ነው."],
      ["or", "This is Tigist.", "ይህች | ትግስት | ናት", "ነው", "Tigist takes the woman form, so the verb ending is ናት."],
      ["or", "That is a pen.", "ያ | ብዕር | ነው", "ይህ", "ያ means that, for something farther from you."],
      ["fi", "ይህ መጽሐፍ __", "This is a book.", "ነው", "ናት|ነህ|ነሽ", "A book takes the masculine verb ending ነው."],
      ["fi", "__ ትግስት ናት", "This is Tigist.", "ይህች|ይቺ", "ይህ|ያ|ያች", "Tigist is feminine, so this is ይህች. ይቺ is the same word in speech."],
      ["fi", "ያ __ ነው", "That is a pen.", "ብዕር", "መጽሐፍ|ቤት|ሴት", "The noun in the middle is the pen, ብዕር."],
      ["ty", "This is a woman.", "ይህች ሴት ናት|ይህች ሴት ነች|ይቺ ሴት ናት|ይቺ ሴት ነች", "ይህች · ሴት · ናት · feminine", "ነው ይህ", "ሴት is feminine, so use ይህች and the verb ending ናት."],
      ["ty", "That is Abebech.", "ያች አበበች ናት|ያች አበበች ነች", "ያች · አበበች · ናት · feminine", "ነው ያ", "Abebech takes the woman form ያች and the feminine verb ending ናት."],
      ["ty", "That is a book.", "ያ መጽሐፍ ነው", "ያ · መጽሐፍ · ነው", "ናት ይህ", "ያ means that. The noun comes before ነው."]
    ]
  },
  {
    id: "questions",
    title: "Question words",
    blurb: "Ask what, who, where, when, how and how many, with no helper verb.",
    deck: "Questions and connectors",
    body: `
<p>English builds most questions with a helper: Where do you live? Do you have a pen? Amharic has no word that does the job of do. A yes-or-no question is the same sentence you already know, said with your voice up at the end. Nothing moves to the front. The verb stays last, and its ending still says who you mean. Asking a stranger or an older person does not change that shape. It only chooses the polite form of the ending, not the ending you use with a friend.</p>
{{ex:ይህ መጽሐፍ ነው?||Is this a book?}}
{{ex:አንቺ ነሽ?||Are you? (to a woman)}}
<h3>Six question words</h3>
<div class="tbl"><table>
<tr><th>Amharic</th><th>English</th></tr>
<tr><td class="k">ምን</td><td>what</td></tr>
<tr><td class="k">ማን</td><td>who</td></tr>
<tr><td class="k">የት</td><td>where</td></tr>
<tr><td class="k">መቼ</td><td>when</td></tr>
<tr><td class="k">ስንት</td><td>how many, how much</td></tr>
<tr><td class="k">እንዴት</td><td>how</td></tr>
</table></div>
<p>Put the question word in front of the copula. <b>ምንድን ነው</b> is "what is it?" Said quickly, that is one word, <b>ምንድነው</b>. <b>ምን ነው</b> is the same question. Names use <b>ማን</b>, who, which you already saw in <b>ስምሽ ማን ነው</b>. <b>ስም</b>, the word for name, is the subject there, so the verb ending stays <b>ነው</b> even when you ask a woman. <b>ማን ነሽ</b> is different: it asks who you are, and you, a woman, are the subject.</p>
{{ex:ይህ ምንድን ነው?||What is this?}}
{{ex:ስምሽ ማን ነው?||What is your name? (to a woman)}}
{{ex:ማን ነሽ?||Who are you? (to a woman)}}
{{ex:ማን ነዎት?||Who are you? (polite)}}
<h3>The ending still names the person</h3>
<p><b>የት ነህ</b> is where are you, to a man. <b>የት ነሽ</b> is the woman form. <b>የት ነዎት</b> is the polite form, for a stranger or an older person. <b>እንዴት ነህ</b>, <b>እንዴት ነሽ</b> and <b>እንዴት ነዎት</b> ask how someone is. <b>መቼ ነው</b> asks when. <b>እነሱ ስንት ናቸው</b> asks how many they are. The answer is a number, which is next. <b>እሷ ማን ናት</b> asks who she is. You will also hear <b>ነች</b> in that slot.</p>
{{ex:ቤቱ የት ነው?||Where is the house?}}
{{ex:እንዴት ነዎት?||How are you? (polite)}}
{{ex:እሷ ማን ናት?||Who is she?}}
{{ex:መቼ ነው?||When is it?}}
{{ex:እነሱ ስንት ናቸው?||How many are they?}}
<div class="tip">Do not invent a word for do. <b>የት do ነሽ</b> → <b>የት ነሽ</b>, to a woman.</div>
`,
    check: [
      ["'Where is the house?' =", ["ቤቱ የት ነው?", "ቤቱ መቼ ነው?", "ቤቱ ማን ነው?", "ቤቱ ምንድን ነው?"], 0, "የት asks where. There is no helper like do."],
      ["'Who are you?' to a woman =", ["ማን ነህ?", "ማን ነው?", "ማን ነሽ?", "ማን ነኝ?"], 2, "አንቺ takes the woman form ነሽ."],
      ["'How are you?' to a stranger =", ["እንዴት ነህ?", "እንዴት ነዎት?", "እንዴት ነሽ?", "ምን ነዎት?"], 1, "እርስዎ takes the polite form ነዎት."]
    ],
    practice: [
      ["mc", "'Where?' =", "የት", "መቼ", "ማን", "ምን", "የት asks about a place."],
      ["mc", "'Who are you?' (to a woman) =", "ማን ነሽ", "ማን ነህ", "ማን ነው", "ማን ነኝ", "The woman form of the verb ending is ነሽ."],
      ["mc", "'How are you?' (polite) =", "እንዴት ነዎት", "እንዴት ነህ", "እንዴት ነሽ", "ምን ነዎት", "A stranger takes the polite form ነዎት."],
      ["mc", "'What is this?' =", "ይህ ምንድን ነው", "ይህ ማን ነው", "ይህ የት ነው", "ምንድን ይህ ነው", "ምን asks what, and ነው stays at the end."],
      ["mc", "'When is it?' =", "መቼ ነው", "የት ነው", "ማን ነው", "ስንት ነው", "መቼ asks when. ስንት asks how many."],
      ["or", "Who are you? (to a woman)", "ማን | ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "Where are you? (polite)", "የት | ነዎት", "ነህ", "Use the polite form ነዎት for እርስዎ."],
      ["or", "What is this?", "ይህ | ምንድን | ነው", "ናት", "ይህ is masculine, so the verb ending is ነው."],
      ["fi", "አንቺ የት __", "Where are you? (to a woman)", "ነሽ", "ነህ|ነው|ነኝ", "The woman form of the verb ending is ነሽ."],
      ["fi", "ይህ __", "What is this?", "ምንድን ነው|ምንድነው|ምን ነው", "ማን ነው|የት ነው|መቼ ነው", "ምን asks what. ምንድነው is that question as one word."],
      ["fi", "__ ነህ", "How are you? (to a man)", "እንዴት", "ምን|ማን|የት", "እንዴት asks how. ነህ is the man form."],
      ["ty", "How are you? (to a man)", "እንዴት ነህ|አንተ እንዴት ነህ", "እንዴት · ነህ · man", "ነሽ", "The man form of the verb ending is ነህ."],
      ["ty", "Who is she?", "ማን ናት|እሷ ማን ናት|ማን ነች|እሷ ማን ነች", "ማን · ናት · feminine", "ነው", "እሷ is feminine, so the verb ending is ናት."],
      ["ty", "Where is the house? (start with ቤቱ)", "ቤቱ የት ነው", "ቤቱ · የት · ነው", "ናት ማን", "የት asks where, and ነው stays at the end. There is no word for do."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers",
    blurb: "Count to ten, say twenty and a hundred, and keep the noun singular.",
    deck: "Numbers, time and prices",
    body: `
<p>English can point at the digit 2 and be finished. Amharic has a word for each number, written in the fidel. The digit is not the word. Learn the word and say that.</p>
<div class="tbl"><table>
<tr><th>Number</th><th>Word</th><th>Number</th><th>Word</th></tr>
<tr><td>1</td><td class="k">አንድ</td><td>7</td><td class="k">ሰባት</td></tr>
<tr><td>2</td><td class="k">ሁለት</td><td>8</td><td class="k">ስምንት</td></tr>
<tr><td>3</td><td class="k">ሶስት</td><td>9</td><td class="k">ዘጠኝ</td></tr>
<tr><td>4</td><td class="k">አራት</td><td>10</td><td class="k">አስር</td></tr>
<tr><td>5</td><td class="k">አምስት</td><td>20</td><td class="k">ሃያ</td></tr>
<tr><td>6</td><td class="k">ስድስት</td><td>100</td><td class="k">መቶ</td></tr>
</table></div>
<p>You will also see three written <b>ሦስት</b>, ten written <b>ዐስር</b>, and twenty written <b>ሀያ</b>. Same words. This course writes <b>ሶስት</b>, <b>አስር</b> and <b>ሃያ</b>. Eleven through nineteen set <b>አስራ</b> in front of the small number: <b>አስራ አንድ</b> is eleven. The other tens are their own words. Leave them until a price needs them. Twenty is not "two tens."</p>
<h3>After a number, the line to learn is singular</h3>
<p>English adds an s: two houses. The line to learn is the singular noun: <b>ሁለት ቤት</b>. A plural after a number also occurs, including <b>ሁለት ድመቶች</b>. Do not treat that plural as a mistake. Do not add an English s. <b>ቤትስ</b> is not a word. The copula still notices how many there are. One masculine thing takes <b>ነው</b>. More than one takes <b>ናቸው</b>, the verb ending for they. When someone asks how many, answer with the number word and <b>ናቸው</b>. Do not read the fidel as if it were the digit. Say the word out loud: one through ten, then twenty, then a hundred.</p>
{{ex:አንድ መጽሐፍ ነው።||It is one book.}}
{{ex:ሁለት ቤት ናቸው።||They are two houses.}}
{{ex:አስር ብዕር ናቸው።||They are ten pens.}}
{{ex:ሃያ ቤት ናቸው።||They are twenty houses.}}
{{ex:መቶ ቤት ናቸው።||They are a hundred houses.}}
{{ex:ስንት ቤት ናቸው?||How many houses are they?}}
<h3>A number does not freeze the person</h3>
<p>The verb ending still matches who you mean. A woman takes the feminine <b>ናት</b>. A man takes <b>ነው</b>. To a man, <b>ነህ</b>. To a woman, <b>ነሽ</b>. To a stranger or an older person, the polite form <b>ነዎት</b>. <b>እኛ</b> takes <b>ነን</b>. Counting people uses the same split.</p>
{{ex:ይህች አንድ ሴት ናት።||This is one woman.}}
{{ex:አቶ ከበደ አንድ ወንድ ነው።||Ato Kebede is one man.}}
{{ex:እርስዎ አንድ ነዎት።||You are one. (polite)}}
<div class="tip">Do not answer with a digit, and do not add an English s. <b>2 ቤትስ</b> → <b>ሁለት ቤት</b>.</div>
`,
    check: [
      ["Five =", ["አራት", "ስድስት", "አምስት", "ሰባት"], 2, "Five is አምስት. ስድስት is six."],
      ["'They are two houses' =", ["ሁለት ቤት ነህ።", "ሁለት ቤት ናቸው።", "ሁለት ቤት ነሽ።", "ሁለት ቤት ነኝ።"], 1, "More than one takes the verb ending ናቸው. This line keeps ቤት singular."],
      ["Twenty =", ["አስር", "መቶ", "ሁለት አስር", "ሃያ"], 3, "Twenty is its own word, ሃያ. ሀያ is the same word."]
    ],
    practice: [
      ["mc", "'Three' =", "ሶስት", "ሁለት", "አራት", "ሃያ", "Three is ሶስት. ሦስት is the same word."],
      ["mc", "'Ten' =", "አስር", "አንድ", "መቶ", "ሁለት", "Ten is አስር. ዐስር is the same word."],
      ["mc", "'A hundred' =", "መቶ", "ሃያ", "አስር", "አምስት", "A hundred is መቶ, not twenty."],
      ["mc", "'Two houses,' with the number said", "ሁለት ቤት", "ሁለት ቤትስ", "ቤት ሁለት", "ሁለት ቤት ነህ", "Say the number, then the singular noun: ሁለት ቤት. An English s, ቤትስ, is not the plural."],
      ["mc", "'They are ten houses' =", "አስር ቤት ናቸው", "አስር ቤት ነው", "አስር ቤት ነሽ", "ቤት አስር ነኝ", "More than one takes the verb ending ናቸው."],
      ["or", "This is one book.", "ይህ | አንድ | መጽሐፍ | ነው", "ናት", "መጽሐፍ is masculine, so the verb ending is ነው."],
      ["or", "This is one woman.", "ይህች | አንድ | ሴት | ናት", "ነው", "ሴት takes the feminine verb ending ናት."],
      ["or", "They are twenty houses. (keep ቤት singular)", "ሃያ | ቤት | ናቸው", "ነው ቤቶች", "The verb ending ናቸው agrees with the subject, more than one house."],
      ["fi", "__ ቤት ናቸው", "They are three houses.", "ሶስት|ሦስት", "ሁለት|አራት|አስር", "Three is ሶስት. ሦስት is the same word. This line keeps ቤት singular."],
      ["fi", "አንድ መጽሐፍ __", "It is one book.", "ነው", "ናት|ናቸው|ነህ", "One book is masculine, so the verb ending is ነው."],
      ["fi", "ይህች አንድ ሴት __", "This is one woman.", "ናት|ነች", "ነው|ነህ|ናቸው", "ሴት takes the feminine verb ending ናት."],
      ["ty", "Ato Kebede is one man.", "አቶ ከበደ አንድ ወንድ ነው|እሱ አቶ ከበደ አንድ ወንድ ነው", "አቶ ከበደ · አንድ · ወንድ · ነው", "ናት", "Ato Kebede takes the masculine verb ending ነው."],
      ["ty", "Tigist is one woman.", "ትግስት አንድ ሴት ናት|ትግስት አንድ ሴት ነች|እሷ ትግስት አንድ ሴት ናት|እሷ ትግስት አንድ ሴት ነች", "ትግስት · አንድ · ሴት · ናት", "ነው", "Tigist takes the woman form, so the verb ending is ናት."],
      ["ty", "They are three houses. (keep ቤት singular)", "ሶስት ቤት ናቸው|ሦስት ቤት ናቸው", "ሶስት · ቤት · ናቸው", "ቤቶች ነው", "This line keeps the noun singular. Three is ሶስት, and ሦስት is the same word."]
    ]
  },
  {
    id: "possessive",
    title: "Possessive endings",
    blurb: "Say my house and your house, with a different ending for a man, a woman and a stranger.",
    deck: "People and family",
    body: `
<p>English puts a separate word in front: my house, your house, her house. Amharic puts the person on the end of the noun. The house is <b>ቤት</b>. The ending says whose it is. You already did this with names: <b>ስሜ</b>, <b>ስምህ</b>, <b>ስምሽ</b>.</p>
<div class="tbl"><table>
<tr><th>Whose</th><th>House</th></tr>
<tr><td>I</td><td class="k">ቤቴ</td></tr>
<tr><td>you, a man</td><td class="k">ቤትህ</td></tr>
<tr><td>you, a woman</td><td class="k">ቤትሽ</td></tr>
<tr><td>you, polite</td><td class="k">ቤትዎ</td></tr>
<tr><td>he</td><td class="k">ቤቱ</td></tr>
<tr><td>she</td><td class="k">ቤቷ</td></tr>
</table></div>
<p><b>ቤትህ</b> is your house when you speak to a man. <b>ቤትሽ</b> is the woman form. <b>ቤትዎ</b> is the polite form, for a stranger or an older person. <b>ቤቷ</b> is her house. For <b>እኛ</b> the ending is <b>ቤታችን</b>, for you all it is <b>ቤታችሁ</b>, and for them it is <b>ቤታቸው</b>. English your hides that choice, so make it on purpose before you speak. A man friend, a woman friend, and someone older are three different endings. Then finish with <b>ነው</b>, because the verb is about the house. Say the line once to a friend and once to a stranger, so the three endings stay apart.</p>
{{ex:ቤቴ ነው።||It is my house.}}
{{ex:ቤትህ ነው።||It is your house. (to a man)}}
{{ex:ቤትሽ ነው።||It is your house. (to a woman)}}
{{ex:ቤትዎ ነው።||It is your house. (polite)}}
{{ex:ቤቷ ነው።||It is her house.}}
<h3>The verb looks at the house</h3>
<p><b>ቤቱ</b> is two things you already need. From the definite lesson it is the house. Here it is also his house. The sentence around it tells you which. It is not her house: that is <b>ቤቷ</b>. The house is masculine in this course, so the verb ending on all of these is <b>ነው</b>, not <b>ነኝ</b> and not <b>ናት</b>. The possessive ending shows the owner. The verb ending shows the house. Your name works the same way: <b>ስምሽ ማን ነው</b> stays <b>ነው</b>, because the subject is the name.</p>
{{ex:ቤቱ ነው።||It is his house. It is also "it is the house."}}
{{ex:ስምሽ ማን ነው?||What is your name? (to a woman)}}
<div class="tip">English your ignores the person in front of you. To a woman, <b>ቤትህ</b> → <b>ቤትሽ</b>.</div>
`,
    check: [
      ["'Your house,' to a woman =", ["ቤትህ", "ቤትሽ", "ቤቷ", "ቤቴ"], 1, "The woman form is ቤትሽ. ቤቷ is her house."],
      ["'It is my house' =", ["ቤቴ ነኝ።", "ቤትህ ነው።", "ቤቴ ነህ።", "ቤቴ ነው።"], 3, "The verb ending ነው agrees with the house, not with I."],
      ["'Your house,' to an older stranger =", ["ቤትዎ", "ቤትህ", "ቤትሽ", "ቤታቸው"], 0, "The polite form is ቤትዎ."]
    ],
    practice: [
      ["mc", "'Your house' (to a woman) =", "ቤትሽ", "ቤትህ", "ቤቷ", "ቤቴ", "The woman form is ቤትሽ."],
      ["mc", "'Your house' (to a man) =", "ቤትህ", "ቤትሽ", "ቤትዎ", "ቤቱ", "The man form is ቤትህ. ቤትዎ is polite."],
      ["mc", "'My house' =", "ቤቴ", "ቤትህ", "ቤትሽ", "ቤቷ", "The ending for I is ቤቴ."],
      ["mc", "'Her house' =", "ቤቷ", "ቤቱ", "ቤትሽ", "ቤቴ", "Her house is ቤቷ. ቤቱ is his house, or the house."],
      ["mc", "'Your house' (polite) =", "ቤትዎ", "ቤትህ", "ቤትሽ", "ቤታቸው", "The polite form, for እርስዎ, is ቤትዎ."],
      ["or", "It is your house. (to a woman)", "ቤትሽ | ነው", "ቤትህ", "Use the woman form ቤትሽ. The verb ending ነው agrees with the house."],
      ["or", "It is your house. (polite)", "ቤትዎ | ነው", "ቤትህ", "The polite form is ቤትዎ, for እርስዎ."],
      ["or", "It is her house.", "ቤቷ | ነው", "ናት", "The feminine possessive is ቤቷ. The verb ending stays ነው because the house is masculine."],
      ["fi", "__ ነው", "It is your house. (to a woman)", "ቤትሽ", "ቤትህ|ቤቷ|ቤቴ", "The woman form is ቤትሽ. The verb ending ነው agrees with the house."],
      ["fi", "__ ነው", "It is my house.", "ቤቴ", "ቤትህ|ቤትሽ|ነኝ", "ቤቴ is my house. ነኝ would agree with I, not with the house."],
      ["fi", "__ ነው", "It is his house.", "ቤቱ", "ቤቷ|ቤትሽ|ቤቴ", "His house is ቤቱ. The same letters also mean the house."],
      ["ty", "It is your house. (to a man)", "ቤትህ ነው", "ቤትህ · ነው · man", "ቤትሽ ነኝ", "The man form is ቤትህ. The verb ending ነው agrees with the house."],
      ["ty", "It is my house.", "ቤቴ ነው", "ቤቴ · ነው", "ነኝ ቤትህ", "ቤቴ means my house. The verb ending ነው agrees with the subject, not with እኔ."],
      ["ty", "It is his house.", "ቤቱ ነው", "ቤቱ · ነው", "ቤቷ ናት", "His house is ቤቱ. The masculine verb ending is ነው, not ናት."]
    ]
  },
  {
    id: "have",
    title: "Having: አለኝ",
    blurb: "Say what you have and what you do not have, with the thing first.",
    deck: "Classroom and home",
    body: `
<p>English puts have in the middle: I have a book. Amharic does not. It says the thing, then a form of <b>አለ</b> that means "there is" pointed at a person. <b>መጽሐፍ አለኝ</b> is a book exists-for-me: I have a book. The thing comes first. The verb comes last.</p>
<h3>Same letters, two words</h3>
<p>Said with a long l, <b>አለ</b> means there is. Said with a short l, the same letters mean he said. <b>አለኝ</b> is built on the long one. The fidel does not show the long consonant. Listen. <b>ቤት አለ</b> is there is a house. <b>ቤት አለኝ</b> is I have a house. <b>ነህ</b> is you are. <b>አለህ</b> is you have. They are different verbs.</p>
{{ex:ቤት አለ።||There is a house.}}
{{ex:መጽሐፍ አለኝ።||I have a book.}}
{{ex:ቤት አለኝ።||I have a house.}}
<div class="tbl"><table>
<tr><th>Who</th><th>Has</th><th>Does not have</th></tr>
<tr><td>I</td><td class="k">አለኝ</td><td class="k">የለኝም</td></tr>
<tr><td>you, a man</td><td class="k">አለህ</td><td class="k">የለህም</td></tr>
<tr><td>you, a woman</td><td class="k">አለሽ</td><td class="k">የለሽም</td></tr>
<tr><td>you, polite</td><td class="k">አለዎት</td><td class="k">የለዎትም</td></tr>
<tr><td>he</td><td class="k">አለው</td><td class="k">የለውም</td></tr>
<tr><td>she</td><td class="k">አላት</td><td class="k">የላትም</td></tr>
</table></div>
<p>The woman form is <b>አለሽ</b>, not the man's <b>አለህ</b>. The form for she has is <b>አላት</b>, not <b>አለው</b>. A stranger or an older person gets the polite form <b>አለዎት</b>. For <b>እኛ</b>, the forms are <b>አለን</b> and <b>የለንም</b>. With no owner, "there is not" is <b>የለም</b>. The <b>ም</b> at the end means not. Other verbs get a wider pattern in the negative lesson. Do not say <b>አላለኝም</b>. If you name the owner, put that word first: <b>እኔ መጽሐፍ አለኝ</b>. You can leave it off, because <b>አለኝ</b> already says I. Do not borrow <b>ነው</b> here. Have is <b>አለ</b>, not the copula. A pen, a book and a house are enough to practice every person in the set. Those are one thing, so the verb is <b>አለ</b>. Two or more switch to the they-form. The Peace Corps manual says <b>ሁለት ድመቶች አሉኝ</b>, I have two cats.</p>
{{ex:ብዕር አለሽ።||You have a pen. (to a woman)}}
{{ex:ቤት አለህ።||You have a house. (to a man)}}
{{ex:መጽሐፍ አለዎት።||You have a book. (polite)}}
{{ex:ቤት አላት።||She has a house.}}
{{ex:ብዕር የለኝም።||I do not have a pen.}}
{{ex:መጽሐፍ የለሽም።||You do not have a book. (to a woman)}}
{{ex:ቤት የለም።||There is no house.}}
{{ex:ሁለት ድመቶች አሉኝ።||I have two cats.}}
<div class="tip">Have does not sit in the middle. <b>አለኝ መጽሐፍ</b> → <b>መጽሐፍ አለኝ</b>.</div>
`,
    check: [
      ["'I have a pen' =", ["ብዕር አለኝ።", "አለኝ ብዕር።", "ብዕር አለህ።", "ብዕር የለኝም።"], 0, "The thing comes first. The verb ending አለኝ is I."],
      ["'You do not have a book,' to a woman =", ["መጽሐፍ አለሽ።", "መጽሐፍ የለህም።", "መጽሐፍ የለሽም።", "መጽሐፍ አለኝ።"], 2, "The woman form of the negative is የለሽም."],
      ["Said with a long l, አለ means", ["he said", "there is", "he went", "a house"], 1, "The long l means there is. The short l, same letters, means he said."]
    ],
    practice: [
      ["mc", "'I have a book' =", "መጽሐፍ አለኝ", "አለኝ መጽሐፍ", "መጽሐፍ አለህ", "መጽሐፍ የለኝም", "The thing is first. አለኝ is the verb ending for I."],
      ["mc", "'You have a pen' (to a woman) =", "ብዕር አለሽ", "ብዕር አለህ", "ብዕር አለኝ", "አለሽ ብዕር", "The woman form is አለሽ, and the pen comes first."],
      ["mc", "'I do not have a house' =", "ቤት የለኝም", "ቤት አለኝ", "ቤት የለህም", "የለኝም ቤት", "የለኝም is I do not have. The house still comes first."],
      ["mc", "'She has a book' =", "መጽሐፍ አላት", "መጽሐፍ አለው", "መጽሐፍ አለኝ", "መጽሐፍ ናት", "The feminine verb ending for she has is አላት."],
      ["mc", "Said with a long l, አለ means", "there is", "he said", "he went", "not", "The long l is there is. He said is the short l, same letters."],
      ["or", "I have a book.", "መጽሐፍ | አለኝ", "አለህ", "The verb ending አለኝ agrees with the subject እኔ."],
      ["or", "You have a pen. (to a woman)", "ብዕር | አለሽ", "አለህ", "The woman form is አለሽ."],
      ["or", "You do not have a house. (polite)", "ቤት | የለዎትም", "የለህም", "The polite form is የለዎትም."],
      ["fi", "መጽሐፍ __", "I have a book.", "አለኝ", "አለህ|አለሽ|አላት", "The verb ending አለኝ agrees with the subject እኔ."],
      ["fi", "ብዕር __", "You do not have a pen. (to a man)", "የለህም", "የለሽም|የለኝም|አለህ", "The man form of the negative is የለህም."],
      ["fi", "ቤት __", "She has a house.", "አላት", "አለው|አለኝ|ናት", "The feminine verb ending is አላት."],
      ["ty", "You have a book. (to a man)", "መጽሐፍ አለህ|አንተ መጽሐፍ አለህ", "መጽሐፍ · አለህ · man", "አለሽ", "The man form is አለህ."],
      ["ty", "I do not have a pen.", "ብዕር የለኝም|እኔ ብዕር የለኝም", "ብዕር · የለኝም", "የለህም", "The verb ending የለኝም agrees with the subject እኔ."],
      ["ty", "She has a house.", "ቤት አላት|እሷ ቤት አላት", "ቤት · አላት · feminine", "አለው", "The feminine verb ending is አላት."]
    ]
  },
  {
    id: "prepositions",
    title: "በ-, ከ-, ለ-, ወደ",
    blurb: "Say where you are from, where you are, who something is for, and where you are headed.",
    deck: "Getting around",
    body: `
<p>English sets in, from and for out as separate words, and it can park them almost anywhere. Amharic joins <b>በ</b>, <b>ከ</b> and <b>ለ</b> to the next word. No space. <b>በ</b> is in or at. <b>ከ</b> is from. <b>ለ</b> is for. <b>ወደ</b> is toward, and it stays its own word: <b>ወደ ቤት</b>, to the house. The going verb comes in the next lessons. Learn the piece now.</p>
{{ex:ወደ ቤት||to the house}}
{{ex:ወደ አዲስ አበባ||to Addis Ababa}}
<h3>From, in, and for</h3>
<p><b>ከአሜሪካ ነኝ</b> is I am from America. <b>ነኝ</b> is I, whether the speaker is a man or a woman. Your own gender does not change it. Do not put the man's <b>ነህ</b> on "I." To a man, from Gondar is <b>ከጎንደር ነህ</b>. To a woman, <b>ከጎንደር ነሽ</b>. To a stranger, the polite form is <b>ነዎት</b>. In Addis Ababa is <b>በአዲስ አበባ</b>, joined, then a space before <b>አበባ</b>.</p>
{{ex:ከአሜሪካ ነኝ።||I am from America.}}
{{ex:በአዲስ አበባ ነኝ።||I am in Addis Ababa.}}
{{ex:ከጎንደር ነሽ።||You are from Gondar. (to a woman)}}
{{ex:ከኢትዮጵያ ነዎት።||You are from Ethiopia. (polite)}}
<p>At home is <b>በቤት</b>. In the house, with the definite ending, is <b>በቤቱ</b>. For a person, <b>ለ</b> joins too: <b>ለአንቺ</b> to a woman, <b>ለአንተ</b> to a man, <b>ለእርስዎ</b> polite, <b>ለእኔ</b> for me. The book is still the subject, so the verb ending is <b>ነው</b>. A city or a country, when it is the subject, takes the feminine verb ending <b>ናት</b>. Read each join as one word. A gap after <b>ከ</b>, <b>በ</b> or <b>ለ</b> is the English habit, and it is not how these are written. <b>ወደ</b> is the one that keeps its space.</p>
{{ex:በቤት ናት።||She is at home.}}
{{ex:አቶ ከበደ በቤቱ ነው።||Ato Kebede is in the house.}}
{{ex:ይህ መጽሐፍ ለአንቺ ነው።||This book is for you. (to a woman)}}
{{ex:ይህ መጽሐፍ ለእርስዎ ነው።||This book is for you. (polite)}}
{{ex:አዲስ አበባ በኢትዮጵያ ናት።||Addis Ababa is in Ethiopia.}}
<div class="tip">For "I am from America," do not leave a gap and do not use the man form. <b>ከ አሜሪካ ነህ</b> → <b>ከአሜሪካ ነኝ</b>.</div>
`,
    check: [
      ["'I am from America' =", ["ከ አሜሪካ ነኝ።", "ከአሜሪካ ነህ።", "ከአሜሪካ ነኝ።", "በአሜሪካ ነኝ።"], 2, "ከ joins the place, and I takes ነኝ, not the man form ነህ."],
      ["'This book is for you,' to a woman =", ["ይህ መጽሐፍ ለአንቺ ነው።", "ይህ መጽሐፍ ለአንተ ነው።", "ይህ መጽሐፍ ወደ አንቺ ነው።", "ለአንቺ ይህ መጽሐፍ።"], 0, "ለ joins the person. The book is masculine, so the verb ending is ነው."],
      ["'You are in Addis Ababa,' polite =", ["በአዲስ አበባ ነህ።", "በአዲስ አበባ ነዎት።", "ከአዲስ አበባ ነዎት።", "ወደ አዲስ አበባ ነዎት።"], 1, "በ is in, joined to the place, and እርስዎ takes the polite form ነዎት."]
    ],
    practice: [
      ["mc", "'I am from America' =", "ከአሜሪካ ነኝ", "ከ አሜሪካ ነኝ", "ከአሜሪካ ነህ", "በአሜሪካ ነኝ", "ከ joins America, and the verb ending for I is ነኝ."],
      ["mc", "'To the house' =", "ወደ ቤት", "በቤት", "ከቤት", "ቤት ወደ", "ወደ is its own word and means toward. The place follows it."],
      ["mc", "'For you' (to a woman) =", "ለአንቺ", "ለአንተ", "ወደ አንቺ", "አንቺ ለ", "ለ joins አንቺ. ወደ would mean toward, not for."],
      ["mc", "'You are from Gondar' (to a man) =", "ከጎንደር ነህ", "ከጎንደር ነሽ", "ከ ጎንደር ነህ", "በጎንደር ነህ", "ከ joins Gondar. The man form is ነህ."],
      ["mc", "'She is at home' =", "በቤት ናት", "በቤት ነው", "ቤት በ ናት", "ከቤት ናት", "At home is በቤት. She takes the feminine verb ending ናት."],
      ["or", "I am from America.", "ከአሜሪካ | ነኝ", "ነህ", "The verb ending ነኝ agrees with the subject እኔ."],
      ["or", "You are from Gondar. (to a woman)", "ከጎንደር | ነሽ", "ነህ", "The woman form is ነሽ."],
      ["or", "You are in Addis Ababa. (to a man)", "በአዲስ አበባ | ነህ", "ነሽ", "The man form of the verb ending is ነህ."],
      ["fi", "__ ነኝ", "I am from America.", "ከአሜሪካ", "ከ አሜሪካ|በአሜሪካ|አሜሪካ", "ከ joins the place with no space. The verb ending ነኝ agrees with እኔ."],
      ["fi", "ይህ መጽሐፍ __ ነው", "This book is for you. (polite)", "ለእርስዎ", "ለአንተ|ለአንቺ|ወደ እርስዎ", "ለ joins the polite form እርስዎ. The book still takes ነው."],
      ["fi", "__ ነሽ", "You are in Addis Ababa. (to a woman)", "በአዲስ አበባ", "በ አዲስ አበባ|ከአዲስ አበባ|ወደ አዲስ አበባ", "በ joins in. ከ would mean from, and ወደ would mean toward."],
      ["ty", "I am from Ethiopia.", "ከኢትዮጵያ ነኝ|እኔ ከኢትዮጵያ ነኝ", "ከ · ኢትዮጵያ · ነኝ", "ነህ", "The verb ending is ነኝ, for እኔ. Do not use the man form ነህ."],
      ["ty", "You are from America. (to a woman)", "ከአሜሪካ ነሽ|አንቺ ከአሜሪካ ነሽ", "ከ · አሜሪካ · ነሽ", "ነህ", "The woman form is ነሽ."],
      ["ty", "She is at home.", "በቤት ናት|እሷ በቤት ናት|በቤት ነች|እሷ በቤት ነች", "በቤት · ናት · feminine", "ነው", "The feminine verb ending is ናት."]
    ]
  },
  {
    id: "past",
    title: "The past, and the object -ን",
    blurb: "Say where you went and what you drank, including the object ending.",
    deck: "Verbs",
    body: `
<p>English changes the middle of the sentence for the past: I went, she went. Amharic keeps the verb at the end and changes the verb ending for the person and the gender. This past form is called the perfective. Go and drink are the two to learn now. You may hear a long consonant inside the past form. The fidel does not write it. Do not add a mark. Listen.</p>
<div class="tbl"><table>
<tr><th></th><th>I</th><th>you, a man</th><th>you, a woman</th><th>he</th><th>she</th><th>polite</th></tr>
<tr><td>go</td><td class="k">ሄድኩ</td><td class="k">ሄድክ</td><td class="k">ሄድሽ</td><td class="k">ሄደ</td><td class="k">ሄደች</td><td class="k">ሄዱ</td></tr>
<tr><td>drink</td><td class="k">ጠጣሁ</td><td class="k">ጠጣህ</td><td class="k">ጠጣሽ</td><td class="k">ጠጣ</td><td class="k">ጠጣች</td><td class="k">ጠጡ</td></tr>
</table></div>
<p>The woman form ends in <b>ሽ</b> on both verbs: <b>ሄድሽ</b>, <b>ጠጣሽ</b>. I and you, a man, are the pair that changes shape. Go uses <b>ሄድኩ</b> and <b>ሄድክ</b>. Drink uses <b>ጠጣሁ</b> and <b>ጠጣህ</b>. Do not trade those. He is the plain form, <b>ሄደ</b> or <b>ጠጣ</b>. She adds <b>ች</b>. A stranger or an older person, and also they, share <b>ሄዱ</b> and <b>ጠጡ</b>. The sentence will show which. For <b>እኛ</b>, the forms are <b>ሄድን</b> and <b>ጠጣን</b>. Put the place before the verb: <b>ወደ ቤት ሄድኩ</b>. If you name the person, that word comes first, and the ending still has to match. A woman you are speaking to is <b>ሄድሽ</b>. She, the one you are talking about, is <b>ሄደች</b>.</p>
{{ex:ወደ ቤት ሄድኩ።||I went home.}}
{{ex:ወደ አዲስ አበባ ሄድሽ።||You went to Addis Ababa. (to a woman)}}
{{ex:ወደ ጎንደር ሄደ።||He went to Gondar.}}
{{ex:ወደ ቤት ሄደች።||She went home.}}
{{ex:እርስዎ ወደ ቤት ሄዱ።||You went home. (polite)}}
<h3>The object ending</h3>
<p>A definite object takes the object ending <b>ን</b>. <b>ቡና</b> is coffee. <b>ቡናው</b> is the coffee, with the masculine definite ending. <b>ቡናውን</b> is that coffee as the object. <b>ቡናውን ጠጣሁ</b> is I drank the coffee. Bare <b>ቡና</b>, some coffee, does not take <b>ን</b>. The object comes before the verb. English puts the verb in the middle. Amharic does not.</p>
{{ex:ቡናውን ጠጣሁ።||I drank the coffee.}}
{{ex:ቡና ጠጣሁ።||I drank coffee.}}
{{ex:ቡናውን ጠጣች።||She drank the coffee.}}
<div class="tip">The definite coffee needs the object ending, and the verb stays last. <b>ቡናው ጠጣሁ</b> → <b>ቡናውን ጠጣሁ</b>.</div>
`,
    check: [
      ["'I drank the coffee' =", ["ጠጣሁ ቡናውን።", "ቡናውን ጠጣሁ።", "ቡናው ጠጣሁ።", "ቡናውን ጠጣህ።"], 1, "The definite object takes ን, and the verb ending ጠጣሁ is I."],
      ["'You went,' to a woman =", ["ሄድሽ", "ሄድክ", "ሄደች", "ሄድኩ"], 0, "The woman form is ሄድሽ. ሄደች is she went."],
      ["'She went home' =", ["ወደ ቤት ሄደ።", "ወደ ቤት ሄድሽ።", "ሄደች ወደ ቤት።", "ወደ ቤት ሄደች።"], 3, "The feminine verb ending is ሄደች, and it comes last."]
    ],
    practice: [
      ["mc", "'I went' =", "ሄድኩ", "ሄድክ", "ሄደ", "ጠጣሁ", "I went is ሄድኩ. ጠጣሁ is I drank."],
      ["mc", "'You went' (to a woman) =", "ሄድሽ", "ሄድክ", "ሄደች", "ሄድኩ", "The woman form is ሄድሽ. ሄደች is she."],
      ["mc", "'I drank the coffee' =", "ቡናውን ጠጣሁ", "ቡናው ጠጣሁ", "ጠጣሁ ቡናውን", "ቡናውን ጠጣህ", "The object ending ን marks the coffee, and ጠጣሁ is I."],
      ["mc", "'She went' =", "ሄደች", "ሄደ", "ሄድሽ", "ሄድኩ", "She went is ሄደች, with ች on the end. ሄድሽ is you, a woman."],
      ["mc", "'You drank' (to a man) =", "ጠጣህ", "ጠጣሁ", "ሄድክ", "ጠጣሽ", "Drink uses ጠጣህ for a man. ሄድክ is you went."],
      ["or", "You went home. (to a woman)", "ወደ | ቤት | ሄድሽ", "ሄድክ", "The woman form is ሄድሽ."],
      ["or", "I drank the coffee.", "ቡናውን | ጠጣሁ", "ጠጣህ ቡናው", "The verb ending ጠጣሁ agrees with the subject እኔ."],
      ["or", "She went to Gondar.", "ወደ | ጎንደር | ሄደች", "ሄደ", "The feminine verb ending is ሄደች."],
      ["fi", "__ ጠጣሁ", "I drank the coffee.", "ቡናውን", "ቡናው|ቡና|ጠጣሁ", "The definite coffee takes the object ending ን."],
      ["fi", "ወደ ቤት __", "You went home. (to a woman)", "ሄድሽ", "ሄድክ|ሄደች|ሄድኩ", "The woman form is ሄድሽ."],
      ["fi", "ወደ ጎንደር __", "He went to Gondar.", "ሄደ", "ሄደች|ሄድኩ|ሄድክ", "He takes the plain masculine verb ending ሄደ."],
      ["ty", "You went to Addis Ababa. (to a man)", "ወደ አዲስ አበባ ሄድክ|አንተ ወደ አዲስ አበባ ሄድክ", "ሄደ · ወደ · አዲስ አበባ · man", "ሄድሽ", "The man form is ሄድክ."],
      ["ty", "He drank the coffee.", "ቡናውን ጠጣ", "ቡናውን · ጠጣ · masculine", "ጠጣች ቡናው", "The masculine verb ending is ጠጣ. Keep the object ending on ቡናውን."],
      ["ty", "You went home. (polite)", "ወደ ቤት ሄዱ|እርስዎ ወደ ቤት ሄዱ", "ሄደ · ወደ ቤት · polite", "ሄድክ", "The polite form is ሄዱ."]
    ]
  },
  {
    id: "present",
    title: "Present and future",
    blurb: "Say where you go and what you drink, for now and for later.",
    deck: "Verbs",
    body: `
<p>English makes a new verb with will: I go, I will go. Amharic uses one form for both. It is the imperfective, which covers present and future. <b>ወደ ቤት እሄዳለሁ</b> is I go home and I will go home. You do not add a second tense. A time word, later, can say which you mean. The past you just learned is a different ending: <b>ሄድኩ</b> is I went, not I go.</p>
<div class="tbl"><table>
<tr><th></th><th>I</th><th>you, a man</th><th>you, a woman</th><th>he</th><th>she</th><th>polite</th></tr>
<tr><td>go</td><td class="k">እሄዳለሁ</td><td class="k">ትሄዳለህ</td><td class="k">ትሄጃለሽ</td><td class="k">ይሄዳል</td><td class="k">ትሄዳለች</td><td class="k">ይሄዳሉ</td></tr>
<tr><td>drink</td><td class="k">እጠጣለሁ</td><td class="k">ትጠጣለህ</td><td class="k">ትጠጫለሽ</td><td class="k">ይጠጣል</td><td class="k">ትጠጣለች</td><td class="k">ይጠጣሉ</td></tr>
</table></div>
<p>The start and the ending change together. I starts with <b>እ</b>. He starts with <b>ይ</b>. She and you start with <b>ት</b>. The polite form, and they, share <b>ይሄዳሉ</b> and <b>ይጠጣሉ</b>. Say <b>እርስዎ</b> or <b>እነሱ</b> when you need to show which. For <b>እኛ</b>, the form is <b>እንሄዳለን</b>. The place or the object still comes before the verb. A daily habit and a later plan use this same form. Both "I drink coffee every day" and "I will drink coffee later" are <b>ቡና እጠጣለሁ</b>. What you cannot skip is the person: <b>ትሄጃለሽ</b> to a woman, <b>ትሄዳለህ</b> to a man, and <b>ይሄዳሉ</b> to a stranger. The woman form changes the last consonant of the root. d becomes j.</p>
{{ex:ወደ ቤት እሄዳለሁ።||I go home, and I will go home.}}
{{ex:ወደ አዲስ አበባ ትሄጃለሽ።||You go to Addis Ababa. (to a woman)}}
{{ex:ወደ ጎንደር ይሄዳል።||He goes to Gondar, and he will go.}}
{{ex:ቡና እጠጣለሁ።||I drink coffee, and I will drink coffee.}}
<h3>Do not hand a woman the man's form</h3>
<p><b>ትሄዳለህ</b> is you go, to a man. <b>ትሄጃለሽ</b> is the woman form: the d has become j. Do not say <b>ትሄዳለሽ</b>. She does not palatalize in this present. She goes is <b>ትሄዳለች</b>, not <b>ይሄዳል</b>. Drink splits the same way. <b>ትጠጣለህ</b> is the man form. <b>ትጠጫለሽ</b> is the woman form: the last <b>ጠ</b> becomes <b>ጨ</b>. Do not say <b>ትጠጣለሽ</b>. The definite coffee still takes the object ending: <b>ቡናውን እጠጣለሁ</b>, I drink the coffee. Some coffee, with no "the," is just <b>ቡና</b>.</p>
{{ex:ቡናውን ትጠጣለህ።||You drink the coffee. (to a man)}}
{{ex:ወደ ቤት ትሄዳለች።||She goes home.}}
{{ex:እርስዎ ወደ አዲስ አበባ ይሄዳሉ።||You go to Addis Ababa. (polite)}}
<div class="tip">There is no second future, and a woman does not take the man's ending. <b>ትሄዳለህ</b> to a woman → <b>ትሄጃለሽ</b>, not <b>ትሄዳለሽ</b>.</div>
`,
    check: [
      ["'I will go home' =", ["ወደ ቤት እሄዳለሁ።", "ወደ ቤት ሄድኩ።", "እሄዳለሁ ወደ ቤት።", "ወደ ቤት ትሄዳለህ።"], 0, "እሄዳለሁ is I go and I will go. ሄድኩ is the past."],
      ["'You drink coffee,' to a woman =", ["ቡና ትጠጣለህ።", "ቡና ይጠጣል።", "ቡና ትጠጣለሽ።", "ቡና ትጠጫለሽ።"], 3, "The woman form is ትጠጫለሽ. ትጠጣለሽ leaves the consonant unpalatalized."],
      ["'He goes to Gondar' =", ["ትሄዳለች ወደ ጎንደር።", "ወደ ጎንደር ትሄዳለች።", "ወደ ጎንደር ይሄዳል።", "ወደ ጎንደር ትሄዳለህ።"], 2, "The masculine verb ending is ይሄዳል, after the place."]
    ],
    practice: [
      ["mc", "'I go,' and also 'I will go' =", "እሄዳለሁ", "ሄድኩ", "ትሄዳለህ", "ይሄዳል", "እሄዳለሁ covers now and later. ሄድኩ is I went."],
      ["mc", "'You go' (to a woman) =", "ትሄጃለሽ", "ትሄዳለህ", "ትሄዳለች", "ትሄዳለሽ", "The woman form is ትሄጃለሽ. The d becomes j. ትሄዳለሽ leaves it unpalatalized."],
      ["mc", "'He goes' =", "ይሄዳል", "ትሄዳለች", "እሄዳለሁ", "ትሄዳለህ", "He starts with ይ. The masculine verb ending is ይሄዳል."],
      ["mc", "'I drink coffee' =", "ቡና እጠጣለሁ", "እጠጣለሁ ቡና", "ቡና ትጠጣለህ", "ቡና ጠጣሁ", "The coffee comes first. እጠጣለሁ is I drink, not the past."],
      ["mc", "'You go' (polite) =", "ይሄዳሉ", "ትሄዳለህ", "እሄዳለሁ", "ይሄዳል", "The polite form is ይሄዳሉ. ይሄዳል is he."],
      ["or", "You go home. (to a woman)", "ወደ | ቤት | ትሄጃለሽ", "ትሄዳለህ", "The woman form is ትሄጃለሽ, not the man form."],
      ["or", "I drink the coffee.", "ቡናውን | እጠጣለሁ", "ትጠጣለህ", "The verb ending እጠጣለሁ agrees with the subject እኔ."],
      ["or", "He goes to Gondar.", "ወደ | ጎንደር | ይሄዳል", "ትሄዳለች", "The masculine verb ending is ይሄዳል."],
      ["fi", "ወደ ቤት __", "I go home.", "እሄዳለሁ", "ትሄዳለህ|ይሄዳል|ሄድኩ", "I go, now or later, is እሄዳለሁ."],
      ["fi", "ቡና __", "You drink coffee. (to a woman)", "ትጠጫለሽ", "ትጠጣለህ|ትጠጣለሽ|እጠጣለሁ", "The woman form for drink is ትጠጫለሽ. ትጠጣለሽ leaves the consonant unpalatalized."],
      ["fi", "ወደ ጎንደር __", "She goes to Gondar.", "ትሄዳለች", "ይሄዳል|ትሄጃለሽ|እሄዳለሁ", "She takes the feminine verb ending ትሄዳለች."],
      ["ty", "You drink coffee. (to a man)", "ቡና ትጠጣለህ|አንተ ቡና ትጠጣለህ", "ጠጣ · ቡና · man", "ትጠጫለሽ", "The man form is ትጠጣለህ. This same form is present and future."],
      ["ty", "She goes home.", "ወደ ቤት ትሄዳለች|እሷ ወደ ቤት ትሄዳለች", "ሄደ · ወደ ቤት · feminine", "ይሄዳል", "The feminine verb ending is ትሄዳለች."],
      ["ty", "You go to Addis Ababa. (polite)", "ወደ አዲስ አበባ ይሄዳሉ|እርስዎ ወደ አዲስ አበባ ይሄዳሉ", "ሄደ · ወደ · አዲስ አበባ · polite", "ትሄዳለህ", "The polite form is ይሄዳሉ."]
    ]
  },
  {
    id: "negative",
    title: "Negatives",
    blurb: "Say you did not go and you do not go, by wrapping the verb.",
    deck: "Traps for English speakers",
    body: `
<p>English adds the word not, and leaves the verb sitting there: I did not go, I do not go. Amharic does not have a separate not. It wraps the verb. <b>አል</b> goes on the front and <b>ም</b> goes on the end. You already met one pair, <b>አለኝ</b> and <b>የለኝም</b>. <b>አለ</b> keeps that shape. Do not wrap it as <b>አላለኝም</b>. Go and drink take <b>አል</b> and <b>ም</b>.</p>
<h3>The past wrap</h3>
<p>Wrap the past form you know. <b>ሄድኩ</b> becomes <b>አልሄድኩም</b>, I did not go. The person and the gender stay inside the wrap.</p>
<div class="tbl"><table>
<tr><th></th><th>I</th><th>you, a man</th><th>you, a woman</th><th>he</th><th>she</th><th>polite</th></tr>
<tr><td>did not go</td><td class="k">አልሄድኩም</td><td class="k">አልሄድክም</td><td class="k">አልሄድሽም</td><td class="k">አልሄደም</td><td class="k">አልሄደችም</td><td class="k">አልሄዱም</td></tr>
<tr><td>do not go</td><td class="k">አልሄድም</td><td class="k">አትሄድም</td><td class="k">አትሄጂም</td><td class="k">አይሄድም</td><td class="k">አትሄድም</td><td class="k">አይሄዱም</td></tr>
</table></div>
<p>The woman form of the past is <b>አልሄድሽም</b>. The man form is <b>አልሄድክም</b>. She is <b>አልሄደችም</b>. He is <b>አልሄደም</b>. That is not <b>አልሄድም</b>, which is present. Polite, and they, share <b>አልሄዱም</b>. Drink wraps the same way: <b>ቡናውን አልጠጣሁም</b>, I did not drink the coffee. The object ending stays.</p>
{{ex:ወደ ቤት አልሄድኩም።||I did not go home.}}
{{ex:ወደ ቤት አልሄድሽም።||You did not go home. (to a woman)}}
{{ex:ወደ ጎንደር አልሄደም።||He did not go to Gondar.}}
{{ex:ወደ ቤት አልሄደችም።||She did not go home.}}
{{ex:ቡናውን አልጠጣሁም።||I did not drink the coffee.}}
<h3>The present is a short form</h3>
<p>Do not wrap the long present. <b>አልእሄዳለሁም</b> is not a word. Both "I do not go" and "I will not go" are <b>አልሄድም</b>. For he, the form is <b>አይሄድም</b>. You, a woman, are <b>አትሄጂም</b>: the consonant changes, so listen. You, a man, and she, share the letters <b>አትሄድም</b>. Say <b>አንተ</b> or <b>እሷ</b> when you need to show which. The polite form is <b>አይሄዱም</b>. For <b>እኛ</b>, it is <b>አንሄድም</b>.</p>
{{ex:ወደ ቤት አልሄድም።||I do not go home, and I will not.}}
{{ex:ወደ ቤት አትሄጂም።||You do not go home. (to a woman)}}
{{ex:ወደ ቤት አይሄድም።||He does not go home.}}
{{ex:እርስዎ ወደ ቤት አይሄዱም።||You do not go home. (polite)}}
<p><b>ነው</b> has its own negative, not this wrap. I am not is <b>አይደለሁም</b>. You, a man, are not is <b>አይደለህም</b>. You, a woman, are not is <b>አይደለሽም</b>. He or it is not is <b>አይደለም</b>. She is not is <b>አይደለችም</b>. The polite form is <b>አይደሉም</b>.</p>
{{ex:እሱ አቶ ከበደ አይደለም።||He is not Ato Kebede.}}
{{ex:እሷ ትግስት አይደለችም።||She is not Tigist.}}
<div class="tip">Do not keep the long present ending inside the negative. <b>አልእሄዳለሁም</b> → <b>አልሄድም</b>.</div>
`,
    check: [
      ["'I did not go' =", ["አልእሄዳለሁም", "አልሄድም", "አልሄድኩም", "ሄድኩም"], 2, "The past negative wraps the past form: አልሄድኩም. አልሄድም is the present."],
      ["'You did not go home,' to a woman =", ["ወደ ቤት አልሄድክም።", "ወደ ቤት አልሄድሽም።", "ወደ ቤት ሄድሽ።", "አልሄድሽም ወደ ቤት።"], 1, "The woman form is አልሄድሽም, and the verb comes last."],
      ["'I do not go' =", ["አልሄድም", "አልእሄዳለሁም", "እሄዳለሁ", "አልሄድኩም"], 0, "The present negative is the short form አልሄድም."]
    ],
    practice: [
      ["mc", "'I did not go' =", "አልሄድኩም", "አልሄድም", "አልእሄዳለሁም", "ሄድኩም", "Wrap the past form: አልሄድኩም. አልሄድም is present."],
      ["mc", "'I do not go' =", "አልሄድም", "አልሄድኩም", "አልእሄዳለሁም", "አይሄድም", "The present negative is short. አይሄድም is he does not go."],
      ["mc", "'You did not go' (to a woman) =", "አልሄድሽም", "አልሄድክም", "አልሄደችም", "ሄድሽም", "The woman form is አልሄድሽም. The ም is the end of the wrap."],
      ["mc", "'He does not go' =", "አይሄድም", "አልሄድም", "አልሄደም", "ይሄዳል", "He does not go is አይሄድም. አልሄደም is he did not go."],
      ["mc", "'I did not drink the coffee' =", "ቡናውን አልጠጣሁም", "ቡናው አልጠጣሁም", "አልጠጣሁም ቡናውን", "ቡናውን ጠጣሁ", "Keep the object ending, and wrap ጠጣሁ as አልጠጣሁም."],
      ["or", "You did not go home. (to a woman)", "ወደ | ቤት | አልሄድሽም", "አልሄድክም", "The woman form is አልሄድሽም."],
      ["or", "I do not go home.", "ወደ | ቤት | አልሄድም", "አይሄድም", "The verb ending አልሄድም agrees with the subject እኔ."],
      ["or", "She did not go home.", "ወደ | ቤት | አልሄደችም", "አልሄደም", "The feminine verb ending is አልሄደችም."],
      ["fi", "ወደ ቤት __", "I did not go home.", "አልሄድኩም", "አልሄድም|አልሄድክም|ሄድኩ", "The past wrap for I is አልሄድኩም."],
      ["fi", "አንቺ ወደ ቤት __", "You do not go home. (to a woman)", "አትሄጂም", "አትሄድም|አልሄድሽም|ትሄጃለሽ", "The woman form of the present negative is አትሄጂም."],
      ["fi", "ቡናውን __", "I did not drink the coffee.", "አልጠጣሁም", "ጠጣሁ|አልሄድኩም|አልጠጣህም", "Wrap ጠጣሁ. The object ending is already on ቡናውን."],
      ["ty", "You did not go home. (to a man)", "ወደ ቤት አልሄድክም|አንተ ወደ ቤት አልሄድክም", "ሄደ · ወደ ቤት · man", "አልሄድሽም", "The man form is አልሄድክም."],
      ["ty", "I did not go to Addis Ababa.", "ወደ አዲስ አበባ አልሄድኩም|እኔ ወደ አዲስ አበባ አልሄድኩም", "ሄደ · ወደ · አዲስ አበባ", "አልሄድክም", "The verb ending inside the negative agrees with the subject እኔ."],
      ["ty", "He does not go home.", "ወደ ቤት አይሄድም|እሱ ወደ ቤት አይሄድም", "ሄደ · ወደ ቤት · masculine", "አልሄድም እሄዳለሁ", "The masculine present negative is አይሄድም. The long form ይሄዳል does not stay."]
    ]
  }
];
