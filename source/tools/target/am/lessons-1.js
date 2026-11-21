/* en-am lessons 1–9 (orders … definite). Written by EN-AM-1.
   pron is none: every pron field is empty. No romanisation. */
module.exports = [
  {
    id: "orders",
    title: "How the fidel works",
    blurb: "Read a fidel character as a consonant plus a vowel, and notice what the spelling does not show.",
    deck: "How the fidel works",
    body: `
<p>Amharic is written in the fidel, left to right. This course teaches Addis Ababa Amharic, the standard of the city. A fidel is an abugida: one character is a consonant plus a vowel, not an English letter on its own. There are no capital letters.</p>
<h3>One consonant, seven orders</h3>
<p>Each consonant has seven orders. The consonant stays and the vowel changes. Here is b. The English words are a rough guide for your ear, not a spelling to write.</p>
<div class="tbl"><table><tr><th>Order</th><th>Shape</th><th>Listen for</th></tr>
<tr><td>first</td><td class="k">በ</td><td>u in but, short</td></tr>
<tr><td>second</td><td class="k">ቡ</td><td>oo in food, short</td></tr>
<tr><td>third</td><td class="k">ቢ</td><td>ee in see, short</td></tr>
<tr><td>fourth</td><td class="k">ባ</td><td>a in father</td></tr>
<tr><td>fifth</td><td class="k">ቤ</td><td>e in bed</td></tr>
<tr><td>sixth</td><td class="k">ብ</td><td>a vowel, or none</td></tr>
<tr><td>seventh</td><td class="k">ቦ</td><td>o in go, no final w</td></tr>
</table></div>
<p>Keep each vowel short. The o does not slide into a w. A few letters, named later, use the father vowel in the first order too. <b>በ</b> does not.</p>
{{ex:በ||b with the vowel of but}}
{{ex:ባ||b with the vowel of father}}
{{ex:ቤት||house}}
{{ex:ቡና||coffee}}
{{ex:ቡና ቤት||a coffee house}}
<h3>The sixth order</h3>
<p>The sixth order may be a short vowel, and that vowel is not the ee of see, or it may be no vowel. Word endings often drop it. The spelling will not tell you which reading a word uses. Listen, and learn the word.</p>
{{ex:በር||door}}
<h3>A long consonant is not written</h3>
<p>The fidel writes a consonant once, long or short. The length can change the meaning. <b>ገና</b> with a short n is still. <b>ገና</b> with a long n is Christmas. Same letters. You will not add a dot. Listen.</p>
{{ex:ገና||still, or Christmas. The letters do not show the long n}}
<h3>What the rows will add</h3>
<p>Some consonants are ejectives: a catch in the throat, and a different consonant from the plain one. In Addis Ababa, different letters can also share one sound. Keep each word's own spelling. The row lessons take both of these up.</p>
<h3>A verb ending in every practice</h3>
<p>English has one you and one are. Amharic changes the verb ending for the person and the gender. <b>ደህና</b> means fine. <b>ደህና ነህ</b> is you are fine, to a man. <b>ደህና ነሽ</b> is you are fine, to a woman. Greetings will say who gets which form, including a stranger. For now the practice names the person in English.</p>
{{ex:ደህና ነህ||you are fine (to a man)}}
{{ex:ደህና ነሽ||you are fine (to a woman)}}
<div class="tip"><b>Most common mistake:</b> reading <b>በ</b> as the English letter name bee. <b>በ</b> read as bee → <b>በ</b> as b plus the vowel of but. A long consonant is still written once.</div>
`,
    check: [
      ["What is one fidel character?", ["A consonant plus a vowel", "The name of an English letter", "Only a vowel, with no consonant", "A whole English word"], 0, "One fidel character writes a consonant and a vowel together."],
      ["What is true of the sixth order?", ["It is always the vowel of see", "It always marks a long consonant", "It may be a vowel or no vowel, and the spelling does not say which", "It is always the vowel of father"], 2, "The sixth order may be a short vowel or no vowel, and you learn which by listening."],
      ["Why can ገና be two different words?", ["Amharic writes a long consonant twice", "A long consonant and a short one are written the same way", "The sixth order is always silent", "ገና has two different spellings"], 1, "The fidel writes a long consonant once, so one spelling can hold two meanings."]
    ],
    practice: [
      ["mc", "Which shape is the sixth order of b?", "ብ", "በ", "ባ", "ቦ", "The sixth order in this row is ብ, a vowel or no vowel."],
      ["mc", "Which shape has the vowel of father?", "ባ", "በ", "ቤ", "ቡ", "The fourth order, ባ, has the open vowel of father."],
      ["mc", "Which word means house?", "ቤት", "በር", "ቡና", "ገና", "ቤት is house. በር is door, and ቡና is coffee."],
      ["mc", "What is true of a long consonant?", "It is written once, like a short one", "It is written with two letters", "It always uses the sixth order", "It is marked with a dot", "The fidel writes a long consonant once. This course uses no dot."],
      ["mc", "You are fine, speaking to a man. Which matches?", "ደህና ነህ", "ደህና ነሽ", "ነሽ ደህና", "ደህና", "The verb ending ነህ is the man form, and it comes after ደህና."],
      ["or", "You are fine (to a man)", "ደህና ነህ", "ነሽ", "The verb ending ነህ is the man form."],
      ["or", "You are fine (to a woman)", "ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "a coffee house", "ቡና ቤት", "በር", "A coffee house is ቡና ቤት, coffee and then house."],
      ["fi", "ቤ__", "house", "ት", "ባ|ቡ|ቦ", "House ends in sixth-order t. The vowel on b is the e of bed."],
      ["fi", "ደህና __", "you are fine (to a man)", "ነህ", "ነሽ|ነው|ናት", "The verb ending for a man is ነህ."],
      ["fi", "ደህና __", "you are fine (to a woman)", "ነሽ", "ነህ|ነው|ናት", "The woman form of the verb ending is ነሽ."],
      ["ty", "You are fine (to a man, two words)", "ደህና ነህ", "ደህና · ነህ · man form", "ነሽ", "The verb ending ነህ is the man form."],
      ["ty", "You are fine (to a woman, two words)", "ደህና ነሽ", "ደህና · ነሽ · woman form", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["ty", "a coffee house", "ቡና ቤት", "ቡና · ቤት · coffee, then house", "በር", "A coffee house is ቡና ቤት, coffee and then house."]
    ]
  },
  {
    id: "fidel-1",
    title: "Fidel rows: ሀ to ቸ",
    blurb: "Read the rows from ሀ through ቸ, and keep the ejective ቀ apart from a plain k.",
    deck: "Fidel rows: ሀ to ቸ",
    body: `
<p>Each row below is a consonant. The seven orders work the way they did for <b>በ</b>. The shape in the list is the first order. For most of these letters, that order has the vowel of but. Learn the row, then trust the audio for the words.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Listen for</th></tr>
<tr><td class="k">ሀ</td><td>h, as in house. Same sound as ሐ</td></tr>
<tr><td class="k">ለ</td><td>l</td></tr>
<tr><td class="k">ሐ</td><td>h, the same sound as ሀ</td></tr>
<tr><td class="k">መ</td><td>m</td></tr>
<tr><td class="k">ሠ</td><td>s, the same sound as ሰ</td></tr>
<tr><td class="k">ረ</td><td>r, a tap when short, a trill when held</td></tr>
<tr><td class="k">ሰ</td><td>s, the same sound as ሠ</td></tr>
<tr><td class="k">ሸ</td><td>sh, as in ship</td></tr>
<tr><td class="k">ቀ</td><td>an ejective. Not a plain k</td></tr>
<tr><td class="k">በ</td><td>b, the row you already know</td></tr>
<tr><td class="k">ቨ</td><td>v, in words that come from other languages</td></tr>
<tr><td class="k">ተ</td><td>t</td></tr>
<tr><td class="k">ቸ</td><td>ch, as in church</td></tr>
</table></div>
<h3>ሀ and ሐ, ሠ and ሰ</h3>
<p>In Addis Ababa, <b>ሀ</b> and <b>ሐ</b> are one h. <b>ሠ</b> and <b>ሰ</b> are one s. They are not two sounds that you choose by ear. The spelling is part of the word, so you learn which letter a word uses. Do not swap them to taste.</p>
<p><b>ሀ</b> and <b>ሐ</b> are also the vowel exception. Their first order uses the vowel of father, the same vowel as their fourth order. So <b>ሀ</b> and <b>ሃ</b> are the same vowel. A few words break even that pattern. You learn those as whole words.</p>
{{ex:ሀ||h with the vowel of father}}
{{ex:ሃ||the same h and the same vowel, fourth order}}
{{ex:ሰ||s with the vowel of but}}
<h3>One row, written out</h3>
<p>The <b>ሰ</b> row runs <b>ሰ ሱ ሲ ሳ ሴ ስ ሶ</b>. Same seven orders as <b>በ</b>. <b>ስ</b>, the sixth, is s with a vowel or with none. You can already read hello: <b>ሰ</b>, then <b>ላ</b> (l with the father vowel), then <b>ም</b> (sixth-order m). The word is spelled with <b>ሰ</b>, not with <b>ሠ</b>.</p>
{{ex:ሰላም||hello}}
{{ex:ራስ||head}}
{{ex:ልብ||heart. The b is long, and the spelling does not show it}}
<h3>ቀ is an ejective</h3>
<p><b>ቀ</b> is an ejective, a popped consonant, with a catch in the throat. It is not a plain k. The plain k letter is <b>ከ</b>, and it comes in the next lesson. If you say an ordinary k, you have said a different consonant. Do not call <b>ቀ</b> a k. Listen for that catch.</p>
{{ex:ቀ||an ejective, not a plain k}}
<p>The man form and the woman form stay in the practice. You can now see the last letter of each ending. <b>ህ</b> is the sixth order of <b>ሀ</b>. <b>ሽ</b> is the sixth order of <b>ሸ</b>. The <b>ነ</b> row comes next. Until then, treat <b>ነህ</b> and <b>ነሽ</b> as whole shapes: man form, woman form.</p>
{{ex:ደህና ነህ||you are fine (to a man)}}
{{ex:ደህና ነሽ||you are fine (to a woman)}}
<div class="tip"><b>Most common mistake:</b> calling <b>ቀ</b> a plain k. <b>ቀ</b> said as an ordinary k → <b>ቀ</b> as its own ejective. The plain k letter is still ahead of you.</div>
`,
    check: [
      ["In Addis Ababa, ሀ and ሐ are…", ["One h sound, spelled with two letters", "Two different h sounds", "A vowel and a consonant", "Both ejectives"], 0, "ሀ and ሐ are one h in Addis Ababa. The spelling still keeps them apart."],
      ["What is ቀ?", ["The plain k", "An ejective, not a plain k", "The same sound as በ", "A silent letter"], 1, "ቀ is an ejective. The plain k letter has not been taught yet, and it is not this one."],
      ["Why do ሀ and ሃ sound alike?", ["Every first order uses the father vowel", "ሃ is the sixth order", "ሀ is an exception: its first order uses the father vowel, like its fourth order", "They are a long consonant"], 2, "For ሀ and ሐ, the first order and the fourth order share the father vowel."]
    ],
    practice: [
      ["mc", "Which letter is an ejective?", "ቀ", "በ", "ተ", "መ", "ቀ is an ejective. በ, ተ and መ are plain consonants."],
      ["mc", "Which pair is one sound in Addis Ababa?", "ሠ and ሰ", "ሰ and ሸ", "በ and ቨ", "ለ and ረ", "ሠ and ሰ are both s. ሸ is sh, and ቨ is v."],
      ["mc", "Hello is spelled…", "ሰላም", "ሠላም", "ሰላበ", "ሳላም", "Hello is ሰላም, with ሰ, not with the other s letter."],
      ["mc", "Heart is…", "ልብ", "ራስ", "ቤት", "በር", "ልብ is heart. The long b is not written."],
      ["mc", "You are fine, speaking to a woman. Which matches?", "ደህና ነሽ", "ደህና ነህ", "ነህ ደህና", "ደህና", "The woman form of the verb ending is ነሽ."],
      ["or", "You are fine (to a man)", "ደህና ነህ", "ነሽ", "The verb ending ነህ is the man form."],
      ["or", "You are fine (to a woman)", "ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "a coffee house", "ቡና ቤት", "በር", "A coffee house is ቡና ቤት, coffee and then house."],
      ["fi", "ሰላ__", "hello", "ም", "ማ|ሜ|ሞ", "Hello ends in sixth-order m: ሰላም."],
      ["fi", "ደህና __", "you are fine (to a man)", "ነህ", "ነሽ|ናት|ነው", "The man form of the verb ending is ነህ."],
      ["fi", "ደህና __", "you are fine (to a woman)", "ነሽ", "ነህ|ናት|ነው", "The woman form of the verb ending is ነሽ."],
      ["ty", "You are fine (to a man, two words)", "ደህና ነህ", "ደህና · ነህ · man form", "ነሽ", "The verb ending ነህ is the man form."],
      ["ty", "You are fine (to a woman, two words)", "ደህና ነሽ", "ደህና · ነሽ · woman form", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["ty", "a coffee house", "ቡና ቤት", "ቡና · ቤት · coffee, then house", "በር", "A coffee house is ቡና ቤት, coffee and then house."]
    ]
  },
  {
    id: "fidel-2",
    title: "Fidel rows: ኀ to ዠ",
    blurb: "Read the rows from ኀ through ዠ, and treat the four h letters as one sound.",
    deck: "Fidel rows: ኀ to ዠ",
    body: `
<p>These ten rows finish the middle of the fidel. The first-order shape is the one in the list. Most of them have the vowel of but. The h letters and the vowel carriers do not.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Listen for</th></tr>
<tr><td class="k">ኀ</td><td>h, the same sound as ሀ</td></tr>
<tr><td class="k">ነ</td><td>n</td></tr>
<tr><td class="k">ኘ</td><td>ny, as in canyon</td></tr>
<tr><td class="k">አ</td><td>no consonant, only the vowel</td></tr>
<tr><td class="k">ከ</td><td>plain k. This is the letter ቀ is not</td></tr>
<tr><td class="k">ኸ</td><td>h, the same sound as ሀ</td></tr>
<tr><td class="k">ወ</td><td>w</td></tr>
<tr><td class="k">ዐ</td><td>no consonant, only the vowel, like አ</td></tr>
<tr><td class="k">ዘ</td><td>z</td></tr>
<tr><td class="k">ዠ</td><td>the sound in the middle of pleasure</td></tr>
</table></div>
<h3>Four letters, one h</h3>
<p>You now have <b>ሀ</b>, <b>ሐ</b>, <b>ኀ</b> and <b>ኸ</b>. In Addis Ababa they are one h. English speakers often invent four h sounds because they see four letters. There are not four. There is one sound, and four spellings. The word remembers which letter it uses. You do too.</p>
<p><b>ኀ</b> and <b>ኸ</b>, like <b>ሀ</b> and <b>ሐ</b>, use the father vowel in the first order. <b>አ</b> and <b>ዐ</b> do the same. A few words keep a different vowel on these letters. <b>ኧረ</b> is one of them. Learn that kind of word whole. Do not build a private rule for it.</p>
{{ex:ኀ||h with the vowel of father, same sound as ሀ}}
{{ex:ኧረ||a word that keeps a different vowel. Learn it whole}}
<h3>The vowel carriers</h3>
<p><b>አ</b> and <b>ዐ</b> do not start with a consonant. They write a vowel by itself. In Addis Ababa they do the same job. A word that begins with a vowel uses one of them, and the dictionary spelling is the one you copy. You can read a name now: <b>አበበች</b>. Hello to her is two words.</p>
{{ex:አበባ||flower}}
{{ex:አበበች||Abebech, a woman's name}}
{{ex:ሰላም አበበች||hello, Abebech}}
<h3>Plain k, and n</h3>
<p><b>ከ</b> is a plain k. <b>ቀ</b>, from the last lesson, is the ejective. They are different consonants. Saying <b>ከ</b> when the word is spelled with <b>ቀ</b> gives a different word. <b>ነ</b> is n. You can now read the first letter of the endings <b>ነህ</b> and <b>ነሽ</b>.</p>
{{ex:ከ||plain k, not the ejective ቀ}}
<p><b>ውሃ</b> is water: sixth-order <b>ወ</b>, then <b>ሃ</b>, the father vowel on h. <b>ነው</b> at the end of a sentence is the he form of is. <b>ደህና ነው</b> is he is fine. She has her own ending. The pronoun lesson sets that ending beside this one.</p>
{{ex:ውሃ||water}}
{{ex:ደህና ነው||he is fine}}
<div class="tip"><b>Most common mistake:</b> four h sounds for four letters. <b>ሀ</b>, <b>ሐ</b>, <b>ኀ</b> and <b>ኸ</b> as four h sounds → one h in Addis Ababa, with the spelling still kept apart.</div>
`,
    check: [
      ["In Addis Ababa, how many h sounds do ሀ, ሐ, ኀ and ኸ make?", ["Four", "Two", "One", "None. They are silent"], 2, "Those four letters are one h in Addis Ababa. Words still keep their own spelling."],
      ["What do አ and ዐ do?", ["They are two different consonants", "They write a vowel with no consonant, and in Addis Ababa they share that job", "They are both ejectives", "They mark a long consonant"], 1, "አ and ዐ are vowel carriers. They do the same job in Addis Ababa."],
      ["ከ and ቀ are…", ["The same sound", "Both h", "A plain k and an ejective, two consonants", "Both sixth order"], 2, "ከ is a plain k. ቀ is an ejective. Do not trade them."]
    ],
    practice: [
      ["mc", "Which letter is a plain k?", "ከ", "ቀ", "ኸ", "ኀ", "ከ is the plain k. ቀ is the ejective. ኸ and ኀ are h."],
      ["mc", "Which letter writes a vowel with no consonant?", "አ", "ነ", "ወ", "ዘ", "አ is a vowel carrier. ነ is n, ወ is w, ዘ is z."],
      ["mc", "Water is…", "ውሃ", "አበባ", "ሰላም", "ቤት", "ውሃ is water. አበባ is flower."],
      ["mc", "Which line is hello to Abebech, spelled with ሰ?", "ሰላም አበበች", "ሠላም አበበች", "ሰላም አበባ", "አበባ ሰላም", "Hello is ሰላም, with ሰ, then the name. አበበች ሰላም, name first, is also ordinary."],
      ["mc", "He is fine. Which matches?", "ደህና ነው", "ደህና ነሽ", "ደህና ነህ", "ነው ደህና", "The verb ending ነው is the he form, and it comes last."],
      ["or", "You are fine (to a man)", "ደህና ነህ", "ነሽ", "The verb ending ነህ is the man form."],
      ["or", "You are fine (to a woman)", "ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "Hello, Abebech (hello first)", "ሰላም አበበች", "ቤት", "Hello plus the name is ሰላም አበበች. Name first is also ordinary."],
      ["fi", "ው__", "water", "ሃ", "ሀ|ለ|ነ", "Water is ውሃ, sixth-order w and then ሃ."],
      ["fi", "ደህና __", "you are fine (to a woman)", "ነሽ", "ነህ|ነው|ናት", "The woman form of the verb ending is ነሽ."],
      ["fi", "ደህና __", "he is fine", "ነው", "ነህ|ነሽ|ናት", "The verb ending ነው is the he form."],
      ["ty", "You are fine (to a man, two words)", "ደህና ነህ", "ደህና · ነህ · man form", "ነሽ", "The verb ending ነህ is the man form."],
      ["ty", "He is fine (two words)", "ደህና ነው", "ደህና · ነው · he", "ነሽ", "The verb ending ነው matches he, not the woman form ነሽ."],
      ["ty", "Hello, Abebech", "ሰላም አበበች|አበበች ሰላም", "ሰላም · አበበች · hello, then the name", "ቤት", "Hello plus the name is ሰላም አበበች. Name first, አበበች ሰላም, is also ordinary."]
    ]
  },
  {
    id: "fidel-3",
    title: "Fidel rows: የ to ፐ, and the ejectives",
    blurb: "Read the last rows, and hear ጠ, ጨ, ጰ and ጸ as their own consonants.",
    deck: "Fidel rows: የ to ፐ",
    body: `
<p>These are the last basic rows. The same seven orders apply. Four of the consonants are ejectives. English has no ejectives, so an English ear files them with a plain consonant. The fidel does not.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Listen for</th></tr>
<tr><td class="k">የ</td><td>y</td></tr>
<tr><td class="k">ደ</td><td>d</td></tr>
<tr><td class="k">ጀ</td><td>j, as in juice</td></tr>
<tr><td class="k">ገ</td><td>g, as in go</td></tr>
<tr><td class="k">ጠ</td><td>an ejective. Not the t of ተ</td></tr>
<tr><td class="k">ጨ</td><td>an ejective. Not the ch of ቸ</td></tr>
<tr><td class="k">ጰ</td><td>an ejective. Not the p of ፐ</td></tr>
<tr><td class="k">ጸ</td><td>an ejective s. Not the s of ሰ</td></tr>
<tr><td class="k">ፀ</td><td>the same sound as ጸ</td></tr>
<tr><td class="k">ፈ</td><td>f</td></tr>
<tr><td class="k">ፐ</td><td>p</td></tr>
</table></div>
<h3>Plain partner, ejective partner</h3>
<p>You already know the plain partners. <b>ተ</b> is a plain t. <b>ጠ</b> is not that t. <b>ቸ</b> is a plain ch. <b>ጨ</b> is not that ch. <b>ፐ</b> is a plain p. <b>ጰ</b> is not that p. <b>ሰ</b> is a plain s. <b>ጸ</b> is not that s. Each ejective has a catch in the throat. Listen to the pair. Do not flatten the ejective into the plain letter.</p>
{{ex:ጠ||an ejective, not the t of ተ}}
{{ex:ጸ||an ejective s, not the s of ሰ}}
{{ex:ጨ||an ejective, not the ch of ቸ}}
{{ex:ጰ||an ejective, not the p of ፐ}}
<p><b>ፀ</b> is the same sound as <b>ጸ</b>. Two letters, one ejective s, the way <b>ሀ</b> and <b>ሐ</b> are one h. Keep the spelling the word actually uses. Do not pick one letter and use it everywhere.</p>
{{ex:ፀ||the same sound as ጸ}}
<h3>Words you can read now</h3>
<p><b>ደ</b> is d, so <b>ደህና</b> is no longer only a shape. It is <b>ደ</b>, sixth-order <b>ሀ</b>, then <b>ና</b>. <b>ጤና</b> is health: fifth-order <b>ጠ</b>, the ejective, then <b>ና</b>. <b>ቡና</b> is coffee. <b>ገና</b> is the word from the first lesson. You can read the letters now. You still cannot see whether the n is long.</p>
{{ex:ደህና||fine}}
{{ex:ጤና||health}}
{{ex:ቡና||coffee}}
{{ex:ገና||still, or Christmas. The long n is not written}}
<p><b>አቶ</b> before a man's name is a title, like Mr. <b>አቶ ከበደ</b> is Ato Kebede. You do not put <b>አቶ</b> on your own name when you introduce yourself. The man form and the woman form are still <b>ነህ</b> and <b>ነሽ</b>.</p>
{{ex:አቶ ከበደ||Ato Kebede, a title plus a man's name}}
<div class="tip"><b>Most common mistake:</b> a plain consonant for an ejective. <b>ጠ</b> said as <b>ተ</b> → <b>ጠ</b> as its own ejective. The same trap waits in <b>ጨ</b>, <b>ጰ</b> and <b>ጸ</b>.</div>
`,
    check: [
      ["ጠ and ተ are…", ["The same consonant", "An ejective and a plain t, two consonants", "Both h", "A long t and a short t"], 1, "ጠ is an ejective. ተ is a plain t. The length of a consonant is a different issue, and it is not written."],
      ["ፀ and ጸ are…", ["Two different sounds", "One ejective s, two letters", "A plain s and an ejective", "Both the s of ሰ"], 1, "ፀ and ጸ are the same ejective s. ሰ is the plain s."],
      ["What does አቶ ከበደ use አቶ for?", ["A woman's name", "Hello", "A title before a man's name", "The word coffee"], 2, "አቶ sits before a man's name. It is a title, not a greeting."]
    ],
    practice: [
      ["mc", "Which letter is the ejective partner of ተ?", "ጠ", "ጨ", "ፐ", "ደ", "ጠ is the ejective beside plain ተ. ጨ is the ejective beside ቸ."],
      ["mc", "Which letter is the same sound as ጸ?", "ፀ", "ሰ", "ሠ", "ዘ", "ፀ and ጸ are one ejective s. ሰ and ሠ are plain s."],
      ["mc", "Health is…", "ጤና", "ደህና", "ቡና", "ገና", "ጤና is health, with the ejective ጠ. ደህና is fine."],
      ["mc", "ገና, as written, can mean…", "still, or Christmas", "only still", "only Christmas", "coffee", "One spelling covers both. The long n is not written."],
      ["mc", "You are fine, to a man. Which matches?", "ደህና ነህ", "ደህና ነሽ", "ነሽ ደህና", "አቶ ነህ", "The verb ending ነህ is the man form. አቶ is a title, not a verb ending."],
      ["or", "You are fine (to a woman)", "ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "You are fine (to a man)", "ደህና ነህ", "ነሽ", "The verb ending ነህ is the man form."],
      ["or", "Ato Kebede", "አቶ ከበደ", "ቡና", "አቶ ከበደ is the title and then the name."],
      ["fi", "ጤ__", "health", "ና", "ነ|ን|ኖ", "Health is ጤና. ጤ is the ejective with the e vowel."],
      ["fi", "ደህና __", "you are fine (to a man)", "ነህ", "ነሽ|ነው|ናት", "The man form of the verb ending is ነህ."],
      ["fi", "ደህና __", "you are fine (to a woman)", "ነሽ", "ነህ|ነው|ናት", "The woman form of the verb ending is ነሽ."],
      ["ty", "You are fine (to a woman, two words)", "ደህና ነሽ", "ደህና · ነሽ · woman form", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["ty", "You are fine (to a man, two words)", "ደህና ነህ", "ደህና · ነህ · man form", "ነሽ", "The verb ending ነህ is the man form."],
      ["ty", "Ato Kebede", "አቶ ከበደ", "አቶ · ከበደ · title, then the name", "ቡና", "አቶ ከበደ puts the title first and the name second."]
    ]
  },
  {
    id: "reading",
    title: "Letters that sound the same, and reading words",
    blurb: "Read homophone letters and a -wa form, and hear a long consonant the spelling hides.",
    deck: "Reading words",
    body: `
<p>You have the rows. Reading is the part the rows cannot do alone: letters that share a sound, a shape with a w built in, and a long consonant that never appears on the page.</p>
<h3>Same sound, different letter</h3>
<p>In Addis Ababa these sets are each one sound. You still spell the word the way it is spelled. Swapping a homophone letter is a wrong spelling, not a shortcut.</p>
<div class="tbl"><table><tr><th>Letters</th><th>One sound</th></tr>
<tr><td class="k">ሀ ሐ ኀ ኸ</td><td>h</td></tr>
<tr><td class="k">ሰ ሠ</td><td>s</td></tr>
<tr><td class="k">አ ዐ</td><td>a vowel, no consonant</td></tr>
<tr><td class="k">ጸ ፀ</td><td>the ejective s</td></tr>
</table></div>
<p>Country is a useful pair. <b>ሀገር</b> and <b>ሃገር</b> are both country. <b>ሀ</b> is the first order, <b>ሃ</b> is the fourth, and for this letter those two orders are the same vowel. You will see both spellings. Neither one is a different word.</p>
{{ex:ሀገር||country, spelled with first-order ሀ}}
{{ex:ሃገር||country, the other shape, the same sound}}
<h3>The -wa forms</h3>
<p>Beside the seven orders, some consonants have a <b>-wa</b> form: a w sound built into the shape. Learn these four first. <b>ቧ</b> is on b. <b>ሏ</b> is on l. <b>ኳ</b> is on plain k, the <b>ከ</b> row, not on the ejective <b>ቀ</b>. <b>ጓ</b> is on g. Other consonants have one too. Learn the shape with the word.</p>
{{ex:ኳስ||ball}}
{{ex:ጓደኛ||friend}}
{{ex:አቧራ||dust}}
{{ex:ቧ||the -wa form on b}}
<p><b>ሏ</b> is the same kind of shape on l. Read it as l with a w. You do not need a separate word for the letter itself.</p>
<h3>One spelling, two lengths</h3>
<p>Do not give a spelling one pronunciation and keep it forever. <b>ገና</b> with a short n is still. <b>ገና</b> with a long n is Christmas. <b>አለ</b> with a short l is he said. <b>አለ</b> with a long l is there is. Same letters each time. Context and the audio tell you which one you heard. You cannot mark the long consonant in writing, and you should not try.</p>
{{ex:ገና||still, or Christmas. The long n is not written}}
{{ex:አለ||he said, or there is. The long l is not written}}
<h3>A rolled r, and a real place</h3>
<p><b>ረ</b> is a trill when it is held, and a tap when it is short. English speakers often use only the tap. In <b>ሀገር</b>, follow the audio. The book <b>መጽሐፍ</b> puts three lessons in one word: the ejective <b>ጸ</b>, the h letter <b>ሐ</b>, and a sixth-order <b>ፈ</b> at the end. You will also see <b>መጽሀፍ</b>, the Peace Corps spelling. Same word. The city you are learning for is two words.</p>
{{ex:መጽሐፍ||book}}
{{ex:አዲስ አበባ||Addis Ababa}}
<p>The practice still asks for the man form and the woman form. <b>ነህ</b> and <b>ነሽ</b> did not go away when the letters got easier.</p>
<div class="tip"><b>Most common mistake:</b> one pronunciation for one spelling. <b>ገና</b> read only as still → <b>ገና</b> as still or Christmas, with the long n left to your ear.</div>
`,
    check: [
      ["In Addis Ababa, ጸ and ፀ are…", ["A plain s and an ejective", "Two vowels", "Both h", "One ejective s, two letters"], 3, "ጸ and ፀ are the same ejective s. The plain s letters are ሰ and ሠ."],
      ["ኳ is the -wa form on…", ["the ejective ቀ", "plain k, the ከ row", "g", "b"], 1, "ኳ is plain k plus w. ቧ is b, and ጓ is g."],
      ["You see ገና with no audio and no context. What can you know?", ["It must mean still", "It must mean Christmas", "It is one of those two, and the letters do not say which", "The n is written twice if it is long"], 2, "ገና is still or Christmas. The long consonant is not written."]
    ],
    practice: [
      ["mc", "Which set is one h sound?", "ሀ, ሐ, ኀ, ኸ", "ሰ, ሸ, ጸ", "ቀ, ከ, ገ", "ጠ, ተ, ደ", "The four h letters are one sound in Addis Ababa."],
      ["mc", "Ball is…", "ኳስ", "ጓደኛ", "አቧራ", "አበባ", "ኳስ is ball, with the -wa form of plain k."],
      ["mc", "Which of these is a spelling of book?", "መጽሐፍ", "መጽሰፍ", "መስሐፍ", "ሀገር", "መጽሐፍ shows ሐ and the ejective ጸ. መጽሀፍ, with ሀ, is the same word."],
      ["mc", "አለ, as written, can mean…", "he said, or there is", "only he said", "only there is", "Christmas", "The long l of there is is not written. he said is the short l."],
      ["mc", "You are fine, to a woman. Which matches?", "ደህና ነሽ", "ደህና ነህ", "ነህ ደህና", "አዲስ ነሽ", "The woman form of the verb ending is ነሽ."],
      ["or", "You are fine (to a man)", "ደህና ነህ", "ነሽ", "The verb ending ነህ is the man form."],
      ["or", "You are fine (to a woman)", "ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "Addis Ababa", "አዲስ አበባ", "ሀገር", "The city is አዲስ አበባ, two words."],
      ["fi", "ኳ__", "ball", "ስ", "ሰ|ሱ|ሶ", "Ball is ኳስ. ኳ is the -wa form on plain k."],
      ["fi", "ደህና __", "you are fine (to a man)", "ነህ", "ነሽ|ነው|ናት", "The man form of the verb ending is ነህ."],
      ["fi", "ደህና __", "you are fine (to a woman)", "ነሽ", "ነህ|ነው|ናት", "The woman form of the verb ending is ነሽ."],
      ["ty", "You are fine (to a man, two words)", "ደህና ነህ", "ደህና · ነህ · man form", "ነሽ", "The verb ending ነህ is the man form."],
      ["ty", "You are fine (to a woman, two words)", "ደህና ነሽ", "ደህና · ነሽ · woman form", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["ty", "Addis Ababa", "አዲስ አበባ", "አዲስ · አበባ · two words", "ሀገር", "Addis Ababa is አዲስ አበባ, new and then flower."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings: አንተ, አንቺ and እርስዎ",
    blurb: "Greet a man, a woman, or a stranger, and say thank you.",
    deck: "Greetings and courtesy",
    body: `
<p>English has one you. Amharic does not. From this lesson on, a friend or a peer who is a man is <b>አንተ</b>. A friend or a peer who is a woman is <b>አንቺ</b>. A stranger, a shopkeeper, or an older person is <b>እርስዎ</b>. When you are not sure, use <b>እርስዎ</b>.</p>
<h3>Any hour</h3>
<p><b>ሰላም</b> is hello. It works with anyone, at any hour. It is also the word for peace. <b>ጤና ይስጥልኝ</b> is the formal hello for any person and any time of day. Use it with a stranger or an older person, and any time you want to be formal. You can answer with the same phrase. <b>ጤና</b> is health, which you can already read.</p>
{{ex:ሰላም||hello}}
{{ex:ጤና ይስጥልኝ||formal hello, any person, any time of day}}
<h3>Morning, afternoon, evening, night</h3>
<p>To sound warmer, add the time of day. The verb ending matches the person. Morning asks how someone passed the night. Afternoon asks about the day. Evening asks about the evening. You can use the phrase without that picture. Night is a goodbye, not a hello.</p>
<div class="tbl"><table><tr><th></th><th>To a man, አንተ</th><th>To a woman, አንቺ</th><th>Polite, እርስዎ</th></tr>
<tr><td>morning</td><td class="k">ደህና አደርክ</td><td class="k">ደህና አደርሽ</td><td class="k">ደህና አደሩ</td></tr>
<tr><td>afternoon</td><td class="k">ደህና ዋልክ</td><td class="k">ደህና ዋልሽ</td><td class="k">ደህና ዋሉ</td></tr>
<tr><td>evening</td><td class="k">ደህና አመሸህ</td><td class="k">ደህና አመሸሽ</td><td class="k">ደህና አመሹ</td></tr>
<tr><td>night</td><td class="k">ደህና እደር</td><td class="k">ደህና እደሪ</td><td class="k">ደህና እደሩ</td></tr>
</table></div>
{{ex:ደህና አደርክ||good morning (to a man)}}
{{ex:ደህና አደርሽ||good morning (to a woman)}}
{{ex:ደህና አደሩ||good morning (polite)}}
{{ex:ደህና ዋልሽ||good afternoon (to a woman)}}
{{ex:ደህና አመሹ||good evening (polite)}}
{{ex:ደህና እደሩ||good night (polite, or to more than one person)}}
<p>Morning and afternoon put <b>ክ</b> and <b>ሽ</b> on a consonant: <b>አደርክ</b>, <b>ዋልክ</b>. Evening does not. The man form is <b>አመሸህ</b> and the woman form is <b>አመሸሽ</b>. <b>አመሽክ</b> is not the evening greeting. In the morning, <b>አደሩ</b> is the polite form, for <b>እርስዎ</b>. A group of friends uses <b>እናንተ</b>, and the morning greeting for them is <b>አደራችሁ</b>. The pronoun lesson lines <b>እናንተ</b> up. At night, <b>ደህና እደሩ</b> is the polite goodbye, and it is also what you say to more than one person. Do not use one morning line for every person and every hour.</p>
<h3>The reply, and thank you</h3>
<p>A simple reply is <b>ደህና ነኝ</b>, I am fine. <b>ነኝ</b> is the verb ending for I. It stays <b>ነኝ</b> whether the speaker is a man or a woman. The ending that changes is the one in the greeting you said first, and it matches the person you are talking to. Then say <b>አመሰግናለሁ</b>, thank you. That word already means I thank. Do not change its ending to match the listener.</p>
{{ex:ደህና ነኝ||I am fine}}
{{ex:አመሰግናለሁ||thank you}}
<div class="tip"><b>Most common mistake:</b> one you for everyone. <b>ደህና አደርክ</b> said to a woman → <b>ደህና አደርሽ</b>. The verb ending matches her.</div>
`,
    check: [
      ["You walk into a shop and greet a stranger. You do not know the hour. What fits?", ["ደህና አደርክ", "ጤና ይስጥልኝ", "ደህና አደርሽ", "አመሰግናለሁ"], 1, "ጤና ይስጥልኝ is the formal hello for any person and any time of day."],
      ["Good morning to a woman is…", ["ደህና አደርሽ", "ደህና አደርክ", "ደህና አደሩ", "ደህና ዋልሽ"], 0, "The woman form in the morning is አደርሽ. ዋልሽ is afternoon."],
      ["አመሰግናለሁ is said to…", ["a man only", "a woman only", "anyone, because the ending means I", "a stranger only"], 2, "አመሰግናለሁ means I thank, so the ending does not change for the listener."]
    ],
    practice: [
      ["mc", "Hello, any person, any hour, not the formal one =", "ሰላም", "ጤና ይስጥልኝ", "አመሰግናለሁ", "ደህና ነኝ", "ሰላም is hello. ጤና ይስጥልኝ is the formal one."],
      ["mc", "Good afternoon, to a man =", "ደህና ዋልክ", "ደህና ዋልሽ", "ደህና ዋሉ", "ደህና አደርክ", "The man form in the afternoon is ዋልክ. አደርክ is morning."],
      ["mc", "Good evening, polite =", "ደህና አመሹ", "ደህና አመሸህ", "ደህና አመሸሽ", "ደህና እደሩ", "The polite form in the evening is አመሹ. እደሩ is the night goodbye."],
      ["mc", "I am fine =", "ደህና ነኝ", "ደህና ነህ", "ደህና ነሽ", "አመሰግናለሁ", "ነኝ is the verb ending for I. ነህ is the man form."],
      ["mc", "Good night, to a woman =", "ደህና እደሪ", "ደህና እደር", "ደህና እደሩ", "ደህና አደርሽ", "The woman form at night is እደሪ. አደርሽ is good morning."],
      ["or", "Good morning (to a man)", "ደህና አደርክ", "አደርሽ", "The verb ending አደርክ is the man form."],
      ["or", "Good morning (to a woman)", "ደህና አደርሽ", "አደርክ", "The woman form of the verb ending is አደርሽ."],
      ["or", "Good morning (polite)", "ደህና አደሩ", "አደርክ", "The polite form is አደሩ, for እርስዎ."],
      ["fi", "ደህና __", "good afternoon (to a woman)", "ዋልሽ", "ዋልክ|አደርሽ|ዋሉ", "The woman form in the afternoon is ዋልሽ."],
      ["fi", "ደህና __", "good night (polite)", "እደሩ", "እደር|እደሪ|አደሩ", "The polite form at night is እደሩ."],
      ["fi", "አመሰግናለ__", "thank you", "ሁ", "ህ|ሽ|ክ", "Thank you is አመሰግናለሁ. The last letter stays ሁ for any listener."],
      ["ty", "Good afternoon (to a man)", "ደህና ዋልክ", "ደህና · ዋልክ · man form", "ዋልሽ", "The verb ending ዋልክ is the man form."],
      ["ty", "Good evening (to a woman)", "ደህና አመሸሽ", "ደህና · አመሸሽ · woman form", "አመሸህ", "The woman form of the verb ending is አመሸሽ."],
      ["ty", "Thank you", "አመሰግናለሁ", "አመሰግናለሁ · I thank", "ሰላም", "አመሰግናለሁ is thank you, for any listener."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Give your name, ask a man, a woman, or a stranger theirs, and keep ነው in the sentence.",
    deck: "About me",
    body: `
<p>English can say "Tigist" and let the sentence mean my name is Tigist. Amharic cannot. A name left by itself is not a sentence. You need a verb ending that means is.</p>
<h3>My name is</h3>
<p>The pattern is <b>ስሜ</b>, then the name, then <b>ነው</b>. <b>ስሜ</b> is my name. The subject of the sentence is <b>ስም</b>, the word for name, not the person speaking. <b>ስም</b> takes <b>ነው</b>. A woman does not switch it to the she form. Abebech says <b>ስሜ አበበች ነው</b>. Adam says <b>ስሜ አዳም ነው</b>. Tigist says <b>ስሜ ትግስት ነው</b>.</p>
{{ex:ስሜ አበበች ነው||My name is Abebech.}}
{{ex:ስሜ አዳም ነው||My name is Adam.}}
{{ex:ስሜ ትግስት ነው||My name is Tigist.}}
<p>There is a second pattern, for I am, not for my name is. <b>እኔ ትግስት ነኝ</b> means I am Tigist. <b>ነኝ</b> is the verb ending for I, the same ending as in <b>ደህና ነኝ</b>. Use <b>ስሜ … ነው</b> when you mean my name is. Use <b>እኔ … ነኝ</b> when you mean I am. Do not mix them.</p>
{{ex:እኔ ትግስት ነኝ||I am Tigist.}}
<h3>Asking</h3>
<p>The ending on name changes for the person you ask. <b>ስምህ</b> is your name, said to a man, <b>አንተ</b>. <b>ስምሽ</b> is your name, said to a woman, <b>አንቺ</b>. <b>ስምዎ</b> is your name, said to <b>እርስዎ</b>, a stranger or an older person. These four chunks are enough for now. The full set of possessive endings comes later.</p>
<div class="tbl"><table><tr><th>You ask</th><th>Amharic</th></tr>
<tr><td>a man</td><td class="k">ስምህ ማን ነው</td></tr>
<tr><td>a woman</td><td class="k">ስምሽ ማን ነው</td></tr>
<tr><td>a stranger or an older person</td><td class="k">ስምዎ ማን ነው</td></tr>
</table></div>
{{ex:ስምህ ማን ነው||What is your name? (to a man)}}
{{ex:ስምሽ ማን ነው||What is your name? (to a woman)}}
{{ex:ስምዎ ማን ነው||What is your name? (polite)}}
<p><b>ማን</b> means who. It sits where the name will sit in the answer, and <b>ነው</b> stays at the end. Even when you ask a woman, the verb ending is <b>ነው</b>, because the subject is still <b>ስም</b>. Her form is the <b>ሽ</b> on <b>ስምሽ</b>, not a she ending on the verb. The verb comes last. <b>ማን ስምሽ ነው</b> is the English order, and it is wrong.</p>
<p>You may hear <b>አቶ</b> before a man's name, as in <b>አቶ ከበደ</b>. It is a title. Leave it off when you give your own name.</p>
<div class="tip"><b>Most common mistake:</b> a name with no is. <b>ስሜ ትግስት</b> → <b>ስሜ ትግስት ነው</b>. The verb ending ነው is what makes it a sentence.</div>
`,
    check: [
      ["Abebech gives her name. Which sentence is right?", ["ስሜ አበበች ናት", "ስሜ አበበች", "ስሜ አበበች ነው", "አበበች ስሜ ነው"], 2, "The subject is ስም, so the verb ending is ነው, even though Abebech is a woman."],
      ["You ask a woman her name. Which is right?", ["ስምሽ ማን ነው", "ስምህ ማን ነው", "ስምሽ ማን ነሽ", "ማን ስምሽ ነው"], 0, "The woman form is ስምሽ, and the verb ending stays ነው."],
      ["You ask an older stranger their name. Which is right?", ["ስምህ ማን ነው", "ስምሽ ማን ነው", "ስምዎ ማን ነህ", "ስምዎ ማን ነው"], 3, "The polite form is ስምዎ, and the verb ending is ነው."]
    ],
    practice: [
      ["mc", "My name is Adam =", "ስሜ አዳም ነው", "ስሜ አዳም", "ስሜ አዳም ነህ", "አዳም ስሜ ነው", "ስሜ plus the name plus ነው. The verb ending stays ነው."],
      ["mc", "What is your name? (to a woman) =", "ስምሽ ማን ነው", "ስምህ ማን ነው", "ስምዎ ማን ነው", "ስምሽ ማን ነሽ", "The woman form is ስምሽ. ነሽ does not replace ነው."],
      ["mc", "What is your name? (to a man) =", "ስምህ ማን ነው", "ስምሽ ማን ነው", "ስምዎ ማን ነው", "ማን ስምህ ነው", "The man form is ስምህ, and ማን stays before ነው."],
      ["mc", "I am Tigist =", "እኔ ትግስት ነኝ", "ስሜ ትግስት ነኝ", "እኔ ትግስት ነው", "ትግስት እኔ ነኝ", "I am uses እኔ and the verb ending ነኝ. ስሜ is my name is."],
      ["mc", "What is your name? (polite) =", "ስምዎ ማን ነው", "ስምህ ማን ነው", "ስምሽ ማን ነው", "ስምዎ ማን ነህ", "The polite form is ስምዎ, for እርስዎ."],
      ["or", "My name is Tigist", "ስሜ ትግስት ነው", "ናት", "The verb ending is ነው, because the subject is ስም."],
      ["or", "What is your name? (to a woman)", "ስምሽ ማን ነው", "ስምህ", "The woman form is ስምሽ, and the verb ending stays ነው."],
      ["or", "What is your name? (to a man)", "ስምህ ማን ነው", "ስምሽ", "The man form is ስምህ. ነው agrees with the subject ስም."],
      ["fi", "ስሜ ትግስት __", "My name is Tigist.", "ነው", "ናት|ነኝ|ነሽ", "The verb ending is ነው. ናት would match a woman, and the subject is the name."],
      ["fi", "ስም__ ማን ነው", "What is your name? (to a woman)", "ሽ", "ህ|ዎ|ኝ", "The woman form on the name is ሽ: ስምሽ."],
      ["fi", "ስም__ ማን ነው", "What is your name? (polite)", "ዎ", "ህ|ሽ|ኝ", "The polite form is ስምዎ."],
      ["ty", "My name is Adam. (use ስሜ)", "ስሜ አዳም ነው", "ስሜ · አዳም · ነው", "ናት", "The verb ending is ነው. ስም is the subject, not Adam's gender."],
      ["ty", "What is your name? (to a woman)", "ስምሽ ማን ነው", "ስምሽ · ማን · ነው", "ስምህ", "The woman form is ስምሽ, and the verb ending is ነው."],
      ["ty", "I am Tigist. (use እኔ)", "እኔ ትግስት ነኝ|ትግስት ነኝ", "እኔ · ትግስት · ነኝ", "ነሽ", "The verb ending ነኝ agrees with the subject እኔ."]
    ]
  },
  {
    id: "be",
    title: "Pronouns and ነው",
    blurb: "Match each pronoun to its own form of is, are, and am.",
    deck: "About me",
    body: `
<p>English to be changes with the person: am, are, is. Amharic does the same, and the gender changes it too. The little word is a copula. It cannot be left off. <b>ደህና</b> by itself is not I am fine. <b>ደህና ነኝ</b> is.</p>
<h3>The set</h3>
<p><b>ደህና</b> stays <b>ደህና</b>. Only the verb ending changes. It agrees with the subject. A man and a woman are not the same ending. <b>እሷ</b> does not take the ending that belongs to <b>እሱ</b>.</p>
<div class="tbl"><table><tr><th>Pronoun</th><th>Who</th><th>With ደህና</th></tr>
<tr><td class="k">እኔ</td><td>I</td><td class="k">ደህና ነኝ</td></tr>
<tr><td class="k">አንተ</td><td>you, a man</td><td class="k">ደህና ነህ</td></tr>
<tr><td class="k">አንቺ</td><td>you, a woman</td><td class="k">ደህና ነሽ</td></tr>
<tr><td class="k">እርስዎ</td><td>you, polite, one person</td><td class="k">ደህና ነዎት</td></tr>
<tr><td class="k">እሱ</td><td>he</td><td class="k">ደህና ነው</td></tr>
<tr><td class="k">እሷ</td><td>she</td><td class="k">ደህና ናት</td></tr>
<tr><td class="k">እኛ</td><td>we</td><td class="k">ደህና ነን</td></tr>
<tr><td class="k">እናንተ</td><td>you, more than one</td><td class="k">ደህና ናችሁ</td></tr>
<tr><td class="k">እነሱ</td><td>they</td><td class="k">ደህና ናቸው</td></tr>
<tr><td class="k">እሳቸው</td><td>one respected person</td><td class="k">ደህና ናቸው</td></tr>
</table></div>
{{ex:እኔ ደህና ነኝ||I am fine.}}
{{ex:አንተ ደህና ነህ||You are fine. (to a man)}}
{{ex:አንቺ ደህና ነሽ||You are fine. (to a woman)}}
{{ex:እርስዎ ደህና ነዎት||You are fine. (polite)}}
{{ex:እሱ ደህና ነው||He is fine.}}
{{ex:እሷ ደህና ናት||She is fine.}}
<p>You will also hear <b>ነች</b> for she: <b>እሷ ደህና ነች</b>. <b>ናት</b> is the form to learn. Both are Addis Ababa. Do not "correct" someone who said <b>ነች</b>.</p>
{{ex:እኛ ደህና ነን||We are fine.}}
{{ex:እናንተ ደህና ናችሁ||You are fine. (more than one)}}
{{ex:እነሱ ደህና ናቸው||They are fine.}}
<p><b>እሳቸው</b> is one respected person, not a group. The verb ending is <b>ናቸው</b>, the same shape as they. The pronoun is what tells you it is one person. <b>እርስዎ</b> is the you you are talking to, when that person is a stranger or older. <b>እሳቸው</b> is a respected person you are talking about.</p>
<h3>Word order, and dropping the pronoun</h3>
<p>The pronoun comes first, then <b>ደህና</b>, then the verb ending. The verb comes last. The ending already says who, so the pronoun can drop: <b>ደህና ነኝ</b> is still I am fine. When you build a sentence from tiles, use every word the prompt gives you, in that order.</p>
<p>Names follow the same split. She is Abebech is written <b>እሷ አበበች ናት</b>. I am Adam is written <b>እኔ አዳም ነኝ</b>. My name is, from the last lesson, stays <b>ስሜ</b> plus the name plus <b>ነው</b>, because there the subject is the name. The speaker's gender does not choose that <b>ነው</b>.</p>
{{ex:እሷ አበበች ናት||She is Abebech.}}
{{ex:እኔ አዳም ነኝ||I am Adam.}}
<div class="tip"><b>Most common mistake:</b> one verb ending for every subject. <b>እሷ ደህና ነው</b> → <b>እሷ ደህና ናት</b>. The verb ending agrees with the subject.</div>
`,
    check: [
      ["She is fine. Which is the form to learn?", ["እሷ ደህና ናት", "እሷ ደህና ነው", "እሷ ደህና ነሽ", "ደህና እሷ ናት"], 0, "እሷ is feminine, so the verb ending is ናት. ነው is the he form."],
      ["We are fine. Which is right?", ["እኛ ደህና ነው", "እኛ ደህና ነን", "እኛ ደህና ናቸው", "ደህና እኛ ነን"], 1, "The verb ending ነን agrees with the subject እኛ."],
      ["You are speaking to one older stranger. You are fine, addressed to them, is…", ["አንተ ደህና ነህ", "እናንተ ደህና ናችሁ", "እነሱ ደህና ናቸው", "እርስዎ ደህና ነዎት"], 3, "The polite form for the person you are talking to is ነዎት."]
    ],
    practice: [
      ["mc", "You are fine (to a woman) =", "አንቺ ደህና ነሽ", "አንቺ ደህና ነህ", "አንተ ደህና ነሽ", "አንቺ ነሽ ደህና", "The woman form of the verb ending is ነሽ, and አንቺ is the pronoun."],
      ["mc", "He is fine =", "እሱ ደህና ነው", "እሱ ደህና ናት", "እሷ ደህና ነው", "ነው እሱ ደህና", "እሱ takes the verb ending ነው. ናት is she."],
      ["mc", "You are fine (polite, one person) =", "እርስዎ ደህና ነዎት", "እርስዎ ደህና ነህ", "አንተ ደህና ነዎት", "እርስዎ ነዎት ደህና", "The polite form is ነዎት, for እርስዎ."],
      ["mc", "They are fine =", "እነሱ ደህና ናቸው", "እነሱ ደህና ነው", "እሳቸው ደህና ናቸው", "እነሱ ናቸው ደህና", "እነሱ takes ናቸው. እሳቸው is one respected person, not they."],
      ["mc", "I am Adam =", "እኔ አዳም ነኝ", "እኔ አዳም ነው", "ስሜ አዳም ነኝ", "አዳም እኔ ነኝ", "The verb ending ነኝ agrees with እኔ. ስሜ አዳም ነው would mean my name is Adam."],
      ["or", "You are fine (to a man, start with አንተ)", "አንተ ደህና ነህ", "ነሽ", "The man form of the verb ending is ነህ."],
      ["or", "You are fine (to a woman, start with አንቺ)", "አንቺ ደህና ነሽ", "ነህ", "The woman form of the verb ending is ነሽ."],
      ["or", "You are fine (polite, start with እርስዎ)", "እርስዎ ደህና ነዎት", "ነህ", "The polite form is ነዎት. It agrees with the subject እርስዎ."],
      ["fi", "እሷ ደህና __", "She is fine.", "ናት|ነች", "ነው|ነሽ|ነህ", "እሷ is feminine, so the verb ending is ናት. ነች is the same meaning."],
      ["fi", "እኛ ደህና __", "We are fine.", "ነን", "ነው|ናቸው|ነኝ", "The verb ending ነን agrees with the subject እኛ."],
      ["fi", "እርስዎ ደህና __", "You are fine. (polite)", "ነዎት", "ነህ|ነሽ|ናት", "The polite form is ነዎት."],
      ["ty", "She is fine", "እሷ ደህና ናት|እሷ ደህና ነች|ደህና ናት|ደህና ነች", "እሷ · ደህና · ናት", "ነው", "እሷ is feminine, so the verb ending is ናት."],
      ["ty", "We are fine (start with እኛ)", "እኛ ደህና ነን|ደህና ነን", "እኛ · ደህና · ነን", "ናቸው", "ነን agrees with the subject እኛ."],
      ["ty", "They are fine (start with እነሱ)", "እነሱ ደህና ናቸው|ደህና ናቸው", "እነሱ · ደህና · ናቸው", "ነው", "The verb ending ናቸው agrees with the subject እነሱ."]
    ]
  },
  {
    id: "definite",
    title: "The and plurals",
    blurb: "Mark a specific noun with the definite ending, and make a plural with -ኦች.",
    deck: "Classroom and home",
    body: `
<p>English puts the before a noun, and a or an when the noun is new. Amharic has no separate word for a. <b>ቤት</b> is house, or a house. What English does with the, Amharic does with a definite ending on the noun. A specific noun, one you and the listener can pick out, needs that ending. Leaving it off is the common miss.</p>
<h3>The house</h3>
<p><b>ቤት</b> takes the masculine definite ending. The last letter is sixth-order t. For the, that letter takes the u vowel: <b>ቤቱ</b>, the house. More than one house is <b>ቤቶች</b>. The plural ending is <b>-ኦች</b>. Do not add an English s. <b>ቤትስ</b> is not a word. A specific group is <b>ቤቶቹ</b>, the houses. The plural definite ending does not switch for a group of women. It stays this u ending.</p>
<div class="tbl"><table><tr><th>Form</th><th>Amharic</th><th>English</th></tr>
<tr><td>bare</td><td class="k">ቤት</td><td>a house, or house</td></tr>
<tr><td>definite</td><td class="k">ቤቱ</td><td>the house</td></tr>
<tr><td>plural</td><td class="k">ቤቶች</td><td>houses</td></tr>
<tr><td>plural definite</td><td class="k">ቤቶቹ</td><td>the houses</td></tr>
</table></div>
{{ex:ቤት||a house, or house}}
{{ex:ቤቱ||the house}}
{{ex:ቤቶች||houses}}
{{ex:ቤቶቹ||the houses}}
<h3>A boy and a girl</h3>
<p><b>ልጅ</b> is a child. The masculine definite ending gives <b>ልጁ</b>, the boy. The feminine form is not that same u. <b>ልጇ</b> is the girl. The last letter has a w in it. The same letters also mean her child. Context tells you which, the way <b>ቤቱ</b> is the house or his house. You will also see <b>ልጅቱ</b> for the girl when someone wants it unambiguous. Towns and countries are often feminine too. This lesson does not spell that ending. Learn <b>ቤቱ</b> and <b>ልጇ</b> first.</p>
{{ex:ልጁ||the boy}}
{{ex:ልጇ||the girl}}
<p>More than one child is <b>ልጆች</b>. The specific group is <b>ልጆቹ</b>, the children. Same plural ending, same plural definite ending.</p>
<h3>In a sentence</h3>
<p><b>ትልቅ</b> is big. <b>ትንሽ</b> is small. In a sentence the noun comes first, then the adjective, then the copula. The verb comes last. The verb ending still agrees with the subject. A masculine subject takes <b>ነው</b>. A feminine subject takes <b>ናት</b>. The children take <b>ናቸው</b>, the same ending as they.</p>
{{ex:ቤቱ ትልቅ ነው||The house is big.}}
{{ex:ልጁ ትልቅ ነው||The boy is big.}}
{{ex:ልጇ ትንሽ ናት||The girl is small.}}
{{ex:ልጆቹ ትልቅ ናቸው||The children are big.}}
<div class="tip"><b>Most common mistake:</b> a specific noun with no definite ending. the house as <b>ቤት</b> → <b>ቤቱ</b>. English s on the plural is the partner mistake: houses as <b>ቤትስ</b> → <b>ቤቶች</b>.</div>
`,
    check: [
      ["How does Amharic say the for a house?", ["With a small word before ቤት", "By adding an English s", "With the ending on ቤቱ", "It cannot say the"], 2, "The masculine definite ending is on the noun: ቤቱ."],
      ["The girl is…", ["ልጇ", "ልጁ", "ልጅ", "ልጆች"], 0, "ልጇ is the feminine form. ልጁ is the boy."],
      ["Houses, more than one, is…", ["ቤቱ", "ቤቶች", "ቤትስ", "ቤት"], 1, "The plural ending is -ኦች: ቤቶች. An English s is not the plural."]
    ],
    practice: [
      ["mc", "the house =", "ቤቱ", "ቤት", "ቤቶች", "ቤትስ", "A specific house takes the masculine definite ending: ቤቱ."],
      ["mc", "the girl =", "ልጇ", "ልጁ", "ልጅ", "ልጆች", "ልጇ is the feminine form of the definite ending."],
      ["mc", "houses =", "ቤቶች", "ቤትስ", "ቤቱ", "ቤቶቹ", "The plural is ቤቶች. ቤቶቹ is the houses, a specific group."],
      ["mc", "The girl is small =", "ልጇ ትንሽ ናት", "ልጇ ትንሽ ነው", "ልጁ ትንሽ ናት", "ትንሽ ልጇ ናት", "ልጇ is feminine, so the verb ending is ናት, and the verb comes last."],
      ["mc", "The boy is big =", "ልጁ ትልቅ ነው", "ልጁ ትልቅ ናት", "ልጇ ትልቅ ነው", "ልጅ ትልቅ ነው", "The masculine definite ending is ልጁ, and the verb ending is ነው."],
      ["or", "The boy is big (start with ልጁ)", "ልጁ ትልቅ ነው", "ናት", "The masculine definite ending is ልጁ, so the verb ending is ነው."],
      ["or", "The girl is small (start with ልጇ)", "ልጇ ትንሽ ናት", "ነው", "ልጇ is the feminine form, so the verb ending is ናት."],
      ["or", "The children are big (start with ልጆቹ)", "ልጆቹ ትልቅ ናቸው", "ነው", "The children are ልጆቹ ትልቅ ናቸው. ናቸው is the they form."],
      ["fi", "ቤ__", "the house", "ቱ", "ት|ቶ|ች", "The masculine definite ending changes final t to ቱ: ቤቱ."],
      ["fi", "ል__", "the girl", "ጇ", "ጁ|ጅ|ጆ", "The feminine form of the girl is ልጇ."],
      ["fi", "ልጇ ትንሽ __", "The girl is small.", "ናት|ነች", "ነው|ነህ|ነሽ", "ልጇ is feminine, so the verb ending is ናት. ነች is the same meaning."],
      ["ty", "The boy is big", "ልጁ ትልቅ ነው", "ልጁ · ትልቅ · ነው", "ናት", "The masculine definite ending is ልጁ, so the verb ending is ነው."],
      ["ty", "The girl is small", "ልጇ ትንሽ ናት|ልጇ ትንሽ ነች", "ልጇ · ትንሽ · ናት", "ነው", "ልጇ is the feminine form, so the verb ending is ናት."],
      ["ty", "The children are big", "ልጆቹ ትልቅ ናቸው", "ልጆቹ · ትልቅ · ናቸው", "ነው", "The children are ልጆቹ ትልቅ ናቸው, with ናቸው for they."]
    ]
  }
];
