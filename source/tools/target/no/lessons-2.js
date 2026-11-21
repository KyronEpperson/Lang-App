/* en-no lessons 10–18 (negation through reflexive). EN-NO-2. Every pron is stdout from tools/target/no/respell.js. */
module.exports = [
  {
    id: "negation",
    title: "ikke: where it goes",
    blurb: "Say what you don't do and what you always do, with ikke and alltid after the verb.",
    deck: "Feelings and states",
    body: `
<p>English puts <i>not</i> and <i>always</i> in front of the verb: I do not speak, I always drink coffee. Norwegian puts those words after the conjugated verb, the verb that carries the tense. The verb stays the second element. <b>ikke</b> comes right after it.</p>
<h3>ikke after the verb</h3>
<p>A short sentence is enough. Anything else in the sentence goes after <b>ikke</b>.</p>
{{ex:Jeg snakker ikke.|yai SNAHK-uhr EEK-uh|I don't speak.}}
{{ex:Jeg snakker ikke norsk.|yai SNAHK-uhr EEK-uh nohshk|I don't speak Norwegian.}}
<p>Feelings use the same slot. <b>Jeg er trøtt</b> is I'm tired. <b>Jeg er glad</b> is I'm glad. <b>Jeg har det bra</b> is I'm fine, the everyday answer. <b>ikke</b> still follows the verb. In <b>har det bra</b>, it sits before <b>bra</b>.</p>
{{ex:Jeg er trøtt.|yai ae:r troet|I'm tired.}}
{{ex:Jeg er ikke trøtt.|yai ae:r EEK-uh troet|I'm not tired.}}
{{ex:Jeg er glad.|yai ae:r glah:d|I'm glad.}}
{{ex:Jeg har det ikke bra.|yai hah:r deh: EEK-uh brah:|I'm not fine.}}
{{ex:Jeg liker ikke kaffe.|yai LEE:-kuhr EEK-uh KAHF-uh|I don't like coffee.}}
<p><b>Kaffe</b> with no article means coffee in general. A cup is <b>en kaffe</b>, and <b>kaffe</b> is masculine. A job with no adjective still has no article: <b>Jeg er ikke student</b>.</p>
{{ex:Jeg er ikke student.|yai ae:r EEK-uh stue-DEHNT|I'm not a student.}}
<h3>i dag is still one element</h3>
<p>Start with <b>i dag</b> and the verb is the next element. Then the subject, then <b>ikke</b>. <b>I dag</b> is one element, two words. <b>I dag jeg jobber ikke</b> is the English order, and it is wrong. So is <b>I dag jobber ikke jeg</b> for the plain meaning "I'm not working": <b>ikke</b> follows <b>jeg</b>.</p>
{{ex:I dag jobber jeg ikke.|ee: dah:g YOHB-uhr yai EEK-uh|Today I'm not working.}}
<p>A yes/no question still starts with the verb. <b>ikke</b> follows the subject. There is still no <b>gjør</b>.</p>
{{ex:Snakker du ikke norsk?|SNAHK-uhr due: EEK-uh nohshk|Don't you speak Norwegian?}}
<h3>alltid uses that same place</h3>
<p><b>alltid</b> means always. <b>aldri</b> means never. Both sit where <b>ikke</b> sits, after the verb. <b>drikke</b> is to drink, so the present is <b>drikker</b>, the same -r you already add.</p>
{{ex:Jeg drikker alltid kaffe.|yai DREEK-uhr AHL-tee KAHF-uh|I always drink coffee.}}
<p>Start with <b>i dag</b> and <b>alltid</b> stays after the subject, the same slot as <b>ikke</b>. <b>aldri</b>, never, sits in that slot too. It already contains the negative, so you do not add <b>ikke</b> next to it.</p>
{{ex:I dag drikker jeg alltid kaffe.|ee: dah:g DREEK-uhr yai AHL-tee KAHF-uh|Today I always drink coffee.}}
<h3>Before an infinitive</h3>
<p>You were told that <b>kan</b> waits. One pattern cannot wait, because <b>ikke</b> has a second address. <b>kan</b> means can. It has no -r. The infinitive, the å form, comes at the end, and this verb does not take <b>å</b>. <b>ikke</b> sits between <b>kan</b> and that infinitive. <b>vil</b>, <b>skal</b> and <b>må</b> come in the next modal lesson.</p>
{{ex:Jeg kan ikke komme.|yai kahn EEK-uh KOHM-uh|I can't come.}}
<div class="tip"><b>Most common mistake:</b> ikke and alltid in front of the verb. <b>Jeg ikke snakker</b> → <b>Jeg snakker ikke</b>. <b>Jeg alltid drikker kaffe</b> → <b>Jeg drikker alltid kaffe</b>.</div>
`,
    check: [
      ["Where does ikke go in Jeg snakker norsk?", ["Before snakker", "After snakker", "At the very start", "Only after norsk"], 1, "ikke goes after the verb: Jeg snakker ikke norsk."],
      ["Today I'm not working, and you start with i dag. Which is right?", ["I dag jobber jeg ikke.", "I dag jeg jobber ikke.", "I dag jobber ikke jeg.", "Jeg i dag jobber ikke."], 0, "Verb second: i dag, then jobber, then jeg, then ikke."],
      ["How do you say I can't come?", ["Jeg kan ikke å komme.", "Jeg ikke kan komme.", "Jeg kan ikke komme.", "Jeg kan kommer ikke."], 2, "ikke sits before the infinitive. kan takes komme, with no å."]
    ],
    practice: [
      ["mc", "I don't speak Norwegian. =", "Jeg snakker ikke norsk.", "Jeg ikke snakker norsk.", "Jeg snakker norsk ikke.", "Ikke jeg snakker norsk.", "ikke goes after the verb snakker."],
      ["mc", "I'm not tired. =", "Jeg er ikke trøtt.", "Jeg ikke er trøtt.", "Jeg er trøtt ikke.", "Ikke jeg er trøtt.", "ikke goes after the verb er."],
      ["mc", "I always drink coffee. =", "Jeg drikker alltid kaffe.", "Jeg alltid drikker kaffe.", "Jeg drikker ikke kaffe.", "Alltid jeg drikker kaffe.", "alltid goes after the verb, in the same place as ikke."],
      ["mc", "Today I'm not working. (start with i dag) =", "I dag jobber jeg ikke.", "I dag jeg jobber ikke.", "I dag jobber ikke jeg.", "Jeg jobber i dag ikke.", "Verb second: i dag is the first element, then jobber, then jeg, then ikke."],
      ["mc", "I can't come. =", "Jeg kan ikke komme.", "Jeg kan ikke å komme.", "Jeg ikke kan komme.", "Jeg kan kommer ikke.", "ikke goes before the infinitive komme, and kan has no å."],
      ["or", "I don't speak Norwegian. (start with jeg)", "Jeg snakker ikke norsk", "alltid", "ikke goes after the verb."],
      ["or", "Today I don't work. (start with i dag)", "I dag | jobber | jeg | ikke", "alltid", "Verb second: i dag is the first element, then jobber."],
      ["or", "a book", "ei bok", "et", "bok is feminine: ei bok."],
      ["fi", "Jeg snakker __ norsk.", "I don't speak Norwegian.", "ikke", "alltid|aldri|en", "ikke goes after the verb."],
      ["fi", "I dag __ jeg ikke.", "Today I'm not working.", "jobber", "jobbe|er|snakker", "Verb second: the verb is the second element, right after i dag."],
      ["fi", "__ bok", "a book", "ei", "et|den|det", "bok is feminine: ei bok."],
      ["ty", "I don't like coffee. (start with jeg)", "Jeg liker ikke kaffe", "like · ikke goes after the verb", "alltid et", "ikke goes after the verb."],
      ["ty", "Today I don't speak Norwegian. (start with i dag)", "I dag snakker jeg ikke norsk", "i dag · snakke · ikke", "alltid ei", "Verb second: i dag is the first element, and ikke goes after the verb."],
      ["ty", "a coffee", "en kaffe", "kaffe · masculine", "ei et", "kaffe is masculine: en kaffe."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and prices",
    blurb: "Count to a hundred and ask what something costs, with the price in words.",
    deck: "Numbers, time and prices",
    body: `
<p>English builds twenty and thirty like "two-ten" and "three-ten". Norwegian does not. Each ten is its own word, and from 21 up the number is one word. Prices are those words plus <b>kroner</b>. The amounts in this lesson are examples of the sentence, not real prices.</p>
<h3>Zero to twenty, and the number one</h3>
<p>The number one, on its own, is <b>ett</b>. <b>et</b> with one t is the neuter article, "a". They sound the same. The spelling is what separates them. You will also hear people count <b>en, to, tre</b>. In this course the number card is <b>ett</b>.</p>
<div class="tbl"><table><tr><th></th><th></th><th></th><th></th></tr><tr><td>0</td><td class="k">null</td><td>6</td><td class="k">seks</td></tr><tr><td>1</td><td class="k">ett</td><td>7</td><td class="k">sju</td></tr><tr><td>2</td><td class="k">to</td><td>8</td><td class="k">åtte</td></tr><tr><td>3</td><td class="k">tre</td><td>9</td><td class="k">ni</td></tr><tr><td>4</td><td class="k">fire</td><td>10</td><td class="k">ti</td></tr><tr><td>5</td><td class="k">fem</td><td>11</td><td class="k">elleve</td></tr><tr><td>12</td><td class="k">tolv</td><td>13</td><td class="k">tretten</td></tr><tr><td>14</td><td class="k">fjorten</td><td>15</td><td class="k">femten</td></tr><tr><td>16</td><td class="k">seksten</td><td>17</td><td class="k">sytten</td></tr><tr><td>18</td><td class="k">atten</td><td>19</td><td class="k">nitten</td></tr></table></div>
<p>Seven is <b>sju</b> here. <b>syv</b> is also correct Bokmål, and you will see it in print. <b>sju</b> starts with the sh sound, the same family as <b>skj</b>. It is not "s" plus "you".</p>
{{ex:sju|shue:|seven}}
<h3>The tens, and 21</h3>
<p><b>tjue</b> starts with the soft h, the <b>kj</b> sound. It is not "t" plus "you", and it is not <b>to ti</b>.</p>
<div class="tbl"><table><tr><th></th><th></th><th></th><th></th></tr><tr><td>20</td><td class="k">tjue</td><td>60</td><td class="k">seksti</td></tr><tr><td>30</td><td class="k">tretti</td><td>70</td><td class="k">sytti</td></tr><tr><td>40</td><td class="k">førti</td><td>80</td><td class="k">åtti</td></tr><tr><td>50</td><td class="k">femti</td><td>90</td><td class="k">nitti</td></tr><tr><td>100</td><td class="k">hundre</td><td></td><td></td></tr></table></div>
{{ex:tjue|HYUE:-uh|twenty}}
{{ex:førti|FOERT-ee|forty}}
<p><b>hundre</b> needs no <b>en</b> in front. From 21 the number is one word: the ten, then the unit. <b>tjueen</b> is 21, <b>tjueto</b> is 22, <b>trettien</b> is 31. You will also hear <b>enogtjue</b>, one-and-twenty. Both are correct Bokmål. This course types the one word <b>tjueen</b>.</p>
{{ex:tjueen|HYUE:-uh-uhn|twenty-one}}
<h3>One in front of a noun</h3>
<p>In front of a noun, "one" agrees. Masculine <b>en</b>, feminine <b>ei</b>, neuter <b>ett</b>. <b>et hus</b> is a house. <b>ett hus</b> is one house. <b>båt</b> is masculine, so one boat is <b>en båt</b>. <b>bok</b> is feminine, so one book is <b>ei bok</b>.</p>
{{ex:ett hus|eht hue:s|one house}}
{{ex:ei bok|ai boo:k|one book}}
{{ex:en båt|ehn boh:t|one boat}}
<h3>What does it cost?</h3>
<p><b>Hva koster det?</b> is the question. <b>koster</b> is the present of <b>koste</b>, one form for every person. <b>det</b> is "it" here. The answer is <b>Det koster</b> plus the number plus <b>kroner</b>. A cup of coffee keeps its article: <b>en kaffe</b> is masculine. Put <b>i dag</b> first and <b>koster</b> is still the second element.</p>
{{ex:Hva koster det?|vah: KOHS-tuhr deh:|What does it cost?}}
{{ex:Det koster tjue kroner.|deh: KOHS-tuhr HYUE:-uh KROO:-nuhr|It costs twenty kroner. (an example)}}
{{ex:En kaffe koster ti kroner.|ehn KAHF-uh KOHS-tuhr tee: KROO:-nuhr|A coffee costs ten kroner. (an example)}}
<div class="tip"><b>Most common mistake:</b> building the tens the English way, and reading tjue as "t-you". <b>to ti</b> → <b>tjue</b>. <b>tre ti</b> → <b>tretti</b>.</div>
`,
    check: [
      ["What is 20?", ["tjue", "to ti", "tolv", "tjueen"], 0, "Twenty is tjue. to ti copies English twenty. tolv is 12 and tjueen is 21."],
      ["Which question asks the price?", ["Hva det koster?", "Hva koster du?", "Hva koster det?", "Koster hva det?"], 2, "hva is the first element and koster is the second. Det is it."],
      ["How do you write one house, the number?", ["et hus", "ei hus", "en hus", "ett hus"], 3, "hus is neuter. et hus means a house. The number one is ett hus."]
    ],
    practice: [
      ["mc", "Which word is 20?", "tjue", "to ti", "tjueen", "tolv", "Twenty is tjue, one word. to ti copies English twenty. tjueen is 21 and tolv is 12."],
      ["mc", "Which form does this course type for 7?", "sju", "syv", "seks", "åtte", "This course types sju. syv is also correct Bokmål; you will see both."],
      ["mc", "Which form does this course type for 21?", "tjueen", "enogtjue", "tjueto", "tjue", "This course types the one word tjueen. enogtjue is also correct Bokmål. tjueto is 22 and tjue is 20."],
      ["mc", "What does it cost? =", "Hva koster det?", "Hva det koster?", "Hva koster du?", "Koster det hva?", "The verb koster is the second element, right after hva."],
      ["mc", "one house (the number) =", "ett hus", "et hus", "en hus", "ei hus", "hus is neuter. et hus means a house. The number one is ett hus."],
      ["or", "It costs twenty kroner. (start with det, an example price)", "Det koster tjue kroner", "ti", "Verb second: det is the first element, then koster."],
      ["or", "a book", "ei bok", "et", "bok is feminine: ei bok."],
      ["or", "Today a coffee costs ten kroner. (start with i dag, an example price)", "I dag | koster | en | kaffe | ti | kroner", "ei", "Verb second: i dag is the first element, then koster. kaffe is masculine: en kaffe."],
      ["fi", "Det koster __ kroner.", "It costs twenty kroner. (an example price)", "tjue", "ti|førti|hundre", "Twenty is the one word tjue."],
      ["fi", "__ hus", "one house (the number)", "ett", "et|en|ei", "hus is neuter: the number one is ett."],
      ["fi", "Hva __ det?", "What does it cost?", "koster", "er|koste|kost", "The verb koster is the second element, right after hva."],
      ["ty", "one house (the number)", "ett hus", "hus · neuter · ett", "et en", "hus is neuter: the number one is ett hus."],
      ["ty", "Today it costs ten kroner. (start with i dag, an example price)", "I dag koster det ti kroner", "i dag · koste · ti", "ei tjue", "Verb second: i dag is the first element, then koster."],
      ["ty", "forty", "førti", "førti · one word", "fire ti", "Forty is førti, one word, not fire ti."]
    ]
  },
  {
    id: "object",
    title: "Object pronouns: meg, deg",
    blurb: "Say me, you, him, her, us and it, and ask for help when you feel ill.",
    deck: "Health and emergencies",
    body: `
<p>English uses me, him and us when that person is not the one doing the action. Norwegian changes the word too. You already use <b>deg</b> in <b>Hyggelig å hilse på deg</b>. Here is the rest of the set. <b>du</b> is still one person, including a pharmacist or a doctor. <b>dere</b> is several people, and only when the prompt says so.</p>
<h3>Subject, then object</h3>
<div class="tbl"><table><tr><th>Doing it</th><th>Receiving it</th><th>English</th></tr><tr><td class="k">jeg</td><td class="k">meg</td><td>I, me</td></tr><tr><td class="k">du</td><td class="k">deg</td><td>you (one person)</td></tr><tr><td class="k">han</td><td class="k">ham</td><td>he, him</td></tr><tr><td class="k">hun</td><td class="k">henne</td><td>she, her</td></tr><tr><td class="k">vi</td><td class="k">oss</td><td>we, us</td></tr><tr><td class="k">dere</td><td class="k">dere</td><td>you (several people)</td></tr></table></div>
<p><b>se</b> is to see, so the present is <b>ser</b>. <b>meg</b> is not a way to say "I". The subject stays <b>jeg</b>. This course types <b>ham</b> for him. You will also see <b>han</b> used as an object. Type <b>ham</b>. <b>de</b> means they. Its object form <b>dem</b>, and the formal <b>Dem</b>, are for reading. You do not type them here.</p>
{{ex:Hjelp meg!|yehlp mai|Help me!}}
{{ex:Jeg ser deg.|yai seh:r dai|I see you.}}
{{ex:Anna ser ham.|AHN-ah seh:r hah:m|Anna sees him.}}
{{ex:Jeg ser henne.|yai seh:r HEHN-uh|I see her.}}
{{ex:Jeg ser dere.|yai seh:r DEH:-ruh|I see you. (to several people)}}
<h3>den for a book, det for a house</h3>
<p>You already use <b>det</b> for the weather and for "it" in <b>Hva koster det?</b> When <b>den</b> or <b>det</b> points back at a noun, the gender decides. Masculine and feminine take <b>den</b>. Neuter takes <b>det</b>. A book is feminine, <b>ei bok</b>, so you point back with <b>den</b>. A house is neuter, <b>et hus</b>, so you point back with <b>det</b>. Later, <b>boka</b> is the same feminine noun, and it is still <b>den</b>.</p>
{{ex:Jeg ser den.|yai seh:r dehn|I see it. (a book or a car)}}
{{ex:Jeg ser det.|yai seh:r deh:|I see it. (a house)}}
<p>Start with <b>i dag</b> and the verb is still second. The object follows the subject.</p>
{{ex:I dag ser jeg deg.|ee: dah:g seh:r yai dai|Today I see you.}}
<h3>Feeling ill</h3>
<p><b>Jeg er syk</b> is I'm ill. <b>Jeg har vondt</b> is it hurts, or I'm in pain. Learn that one as a phrase. <b>Jeg fryser</b> is I'm cold, the cold you feel. <b>Jeg er kald</b> is a word-for-word copy of English, and it is the wrong sentence. <b>et apotek</b> is a pharmacy, and <b>apotek</b> is neuter. <b>hjelpe</b> is to help. <b>Kan du hjelpe meg?</b> works for one person, staff included. Several people would be <b>dere</b>, and the prompt would say so.</p>
{{ex:Jeg er syk.|yai ae:r sew:k|I'm ill.}}
{{ex:Jeg har vondt.|yai hah:r vohnt|It hurts.}}
{{ex:Jeg fryser.|yai FREW:-suhr|I'm cold.}}
{{ex:et apotek|eht ah-poo-TEH:K|a pharmacy}}
{{ex:Kan du hjelpe meg?|kahn due: YEHL-puh mai|Can you help me?}}
<p><b>Hjelp meg</b> is the short phrase you use in an emergency. It is a fixed line, not a new verb pattern. The ordinary question, still to one person, is <b>Kan du hjelpe meg?</b></p>
<div class="tip"><b>Most common mistake:</b> meg as "I", and det for a book. <b>Meg er syk</b> → <b>Jeg er syk</b>. About <b>boka</b>, <b>Jeg ser det</b> → <b>Jeg ser den</b>.</div>
`,
    check: [
      ["Anna sees me. =", ["Anna ser jeg.", "Anna ser du.", "Anna ser meg.", "Jeg ser Anna."], 2, "The object form of jeg is meg. Jeg ser Anna means I see Anna."],
      ["Lars has a book (ei bok). You see it. You say…", ["Jeg ser det.", "Jeg ser den.", "Jeg ser ei.", "Jeg ser en."], 1, "bok is feminine, so the pronoun is den, not det."],
      ["I'm cold. =", ["Jeg er kald.", "Jeg er kaldt.", "Jeg fryser.", "Meg er kald."], 2, "I'm cold is Jeg fryser. Jeg er kald copies English word for word."]
    ],
    practice: [
      ["mc", "Help me! =", "Hjelp meg!", "Hjelp jeg!", "Meg hjelp!", "Hjelp du!", "The object form of jeg is meg."],
      ["mc", "I see you. (one person) =", "Jeg ser deg.", "Jeg ser du.", "Jeg ser meg.", "Du ser jeg.", "The object form of du is deg. One person stays du, then deg."],
      ["mc", "Anna sees him. Which does this course type?", "Anna ser ham.", "Anna ser han.", "Anna ser hun.", "Anna ser henne.", "This course types ham. han is also used as an object in Bokmål; type ham here. henne is her."],
      ["mc", "Lars has a book. I see it. =", "Jeg ser den.", "Jeg ser det.", "Jeg ser ei.", "Jeg ser en.", "bok is feminine, so the pronoun is den, not det."],
      ["mc", "I'm cold. =", "Jeg fryser.", "Jeg er kald.", "Jeg er kaldt.", "Meg fryser.", "I'm cold is Jeg fryser. Jeg er kald copies English."],
      ["or", "I see you. (start with jeg, one person)", "Jeg ser deg", "du", "The verb ser is the second element, and du becomes deg."],
      ["or", "Today I see her. (start with i dag)", "I dag | ser | jeg | henne", "hun", "Verb second: i dag is the first element, then ser."],
      ["or", "a pharmacy", "et apotek", "en", "apotek is neuter: et apotek."],
      ["fi", "Anna ser __.", "Anna sees me.", "meg", "jeg|deg|ham", "The object form of jeg is meg."],
      ["fi", "Kari har et hus. Jeg ser __.", "Kari has a house. I see it.", "det", "den|ei|et", "hus is neuter, so the pronoun is det."],
      ["fi", "Kan du hjelpe __?", "Can you help me? (one person)", "meg", "jeg|du|oss", "Help me uses meg. oss would mean us."],
      ["ty", "He sees me. (start with han)", "Han ser meg", "se · meg", "jeg ham", "The verb ser is the second element, and the object is meg."],
      ["ty", "Anna has a book. I see it. (start with jeg)", "Jeg ser den", "se · den · ei bok", "det ei", "bok is feminine, so the pronoun is den, not det."],
      ["ty", "Can you help us? (start with kan)", "Kan du hjelpe oss", "kan · hjelpe · oss", "meg dem", "In a yes/no question the verb comes first."]
    ]
  },
  {
    id: "modals",
    title: "Modal verbs: vil, kan, må, skal",
    blurb: "Say what you can do, want, plan and have to do, and what age you're turning.",
    deck: "Travel and transport",
    body: `
<p>English uses can, want, will and have to, and then another verb. Norwegian has four small verbs for that job: <b>kan</b>, <b>vil</b>, <b>skal</b> and <b>må</b>. None of them takes -r. Do not build kaner or viler. You already saw <b>kan</b> in <b>Jeg kan ikke komme</b>. Here is the set.</p>
<h3>The infinitive at the end, with no å</h3>
<div class="tbl"><table><tr><th>Verb</th><th>Meaning</th><th>Example</th></tr><tr><td class="k">kan</td><td>can, be able to</td><td class="k">Jeg kan komme</td></tr><tr><td class="k">vil</td><td>want</td><td class="k">Jeg vil ha kaffe</td></tr><tr><td class="k">skal</td><td>going to, a plan</td><td class="k">Jeg skal gå</td></tr><tr><td class="k">må</td><td>have to, must</td><td class="k">Jeg må gå</td></tr></table></div>
<p>The second verb is the infinitive, the å form, but these four do not take <b>å</b>. <b>ha</b> is the infinitive of <b>har</b>. <b>gå</b> is to go, and the present you already know is <b>går</b>. <b>vil</b> means want. It does not mean the English future "will". A plan is <b>skal</b>. <b>Jeg vil gå</b> is I want to go. <b>Jeg skal gå</b> is I'm going to go.</p>
{{ex:Jeg kan komme.|yai kahn KOHM-uh|I can come.}}
{{ex:Jeg vil ha kaffe.|yai veel hah: KAHF-uh|I want coffee.}}
{{ex:Jeg må gå.|yai moh: goh:|I have to go.}}
<p><b>ikke</b> still sits in front of the infinitive. <b>Jeg vil ikke ha kaffe</b> is I don't want coffee.</p>
{{ex:Jeg vil ikke ha kaffe.|yai veel EEK-uh hah: KAHF-uh|I don't want coffee.}}
{{ex:Jeg kan ikke komme.|yai kahn EEK-uh KOHM-uh|I can't come.}}
<h3>Travel</h3>
<p>A plan to a place can stop at <b>skal</b>: <b>Jeg skal til Bergen</b> is I'm going to Bergen. There is no infinitive in that one. <b>må</b> plus <b>ta</b>, to take, gives <b>Jeg må ta bussen</b>. <b>bussen</b> is the bus, and <b>toget</b> is the train. The ending is the word "the". The definite lesson sorts those endings by gender. <b>en billett</b> is a ticket, and <b>billett</b> is masculine. "Have to" is not <b>har å</b>. <b>har</b> means have. The obligation is <b>må</b>.</p>
{{ex:Jeg skal til Bergen.|yai skahl teel BAER-guhn|I'm going to Bergen.}}
{{ex:Jeg må ta bussen.|yai moh: tah: BUES-uhn|I have to take the bus.}}
{{ex:en billett|ehn beel-EHT|a ticket}}
<p>Put <b>i dag</b> first and the modal is the second element. The subject follows it, then <b>ikke</b> if you need it, then the infinitive.</p>
{{ex:I dag skal jeg til Oslo.|ee: dah:g skahl yai teel OOS-loo|Today I'm going to Oslo.}}
{{ex:I dag kan jeg ikke komme.|ee: dah:g kahn yai EEK-uh KOHM-uh|Today I can't come.}}
<h3>Age uses blir</h3>
<p><b>bli</b> means become. The present is <b>blir</b>, with the ordinary -r. Turning an age is <b>Jeg blir tretti</b>. <b>Jeg er tretti</b> means you are already 30. <b>være</b> is the infinitive of <b>er</b>, but <b>Jeg vil være tretti</b> is the English "I will be 30", and it is the wrong sentence for a birthday.</p>
{{ex:Jeg blir tretti.|yai blee:r TREHT-ee|I'm turning thirty.}}
{{ex:Jeg er tretti.|yai ae:r TREHT-ee|I am thirty.}}
<div class="tip"><b>Most common mistake:</b> vil for a plan, and har å for have to. <b>Jeg vil gå</b> (a plan) → <b>Jeg skal gå</b>. <b>Jeg har å gå</b> → <b>Jeg må gå</b>.</div>
`,
    check: [
      ["I want coffee. =", ["Jeg skal ha kaffe.", "Jeg vil ha kaffe.", "Jeg vil kaffe.", "Jeg har å kaffe."], 1, "vil means want, plus the infinitive ha, with no å. skal would be a plan."],
      ["I'm going to Bergen. =", ["Jeg skal til Bergen.", "Jeg vil til Bergen.", "Jeg er i Bergen.", "Jeg har å Bergen."], 0, "A plan uses skal. vil til Bergen means you want to go there. Jeg er i Bergen means you are already there."],
      ["I'm turning thirty. =", ["Jeg er tretti.", "Jeg vil være tretti.", "Jeg har tretti.", "Jeg blir tretti."], 3, "Turning an age uses blir. Jeg er tretti means you are already 30."]
    ],
    practice: [
      ["mc", "I want coffee. =", "Jeg vil ha kaffe.", "Jeg skal ha kaffe.", "Jeg vil kaffe.", "Jeg har å kaffe.", "vil means want, and it takes the infinitive ha, with no å."],
      ["mc", "I'm going to Bergen. =", "Jeg skal til Bergen.", "Jeg vil til Bergen.", "Jeg er i Bergen.", "Jeg har å Bergen.", "A plan uses skal. vil til Bergen means you want to go there."],
      ["mc", "I have to take the bus. =", "Jeg må ta bussen.", "Jeg har å ta bussen.", "Jeg må tar bussen.", "Jeg vil ta bussen.", "have to is må plus the infinitive ta, with no å. vil would mean want."],
      ["mc", "a ticket =", "en billett", "et billett", "ei billett", "den billett", "billett is masculine: en billett."],
      ["mc", "I'm turning thirty. =", "Jeg blir tretti.", "Jeg vil være tretti.", "Jeg er tretti.", "Jeg har tretti.", "Turning an age uses blir. Jeg er tretti means you are already 30."],
      ["or", "I have to go. (start with jeg)", "Jeg må gå", "å", "The verb må is the second element, and the infinitive has no å."],
      ["or", "Today I'm going to Bergen. (start with i dag)", "I dag | skal | jeg | til | Bergen", "vil", "Verb second: i dag is the first element, then skal."],
      ["or", "a ticket", "en billett", "et", "billett is masculine: en billett."],
      ["fi", "Jeg __ ha kaffe.", "I want coffee.", "vil", "skal|kan|må", "vil means want. skal would be a plan, not a wish."],
      ["fi", "Jeg må __ bussen.", "I have to take the bus.", "ta", "tar|gå|å", "må takes the infinitive ta, with no å."],
      ["fi", "Jeg __ tretti.", "I'm turning thirty.", "blir", "er|vil|skal", "Turning an age uses blir, not vil and not er."],
      ["ty", "I can't come. (start with jeg)", "Jeg kan ikke komme", "kan · ikke · komme", "å skal", "ikke goes after the verb kan and before the infinitive."],
      ["ty", "a book", "ei bok", "bok · feminine", "en et", "bok is feminine: ei bok. en bok is common gender, for reading, not the typed answer."],
      ["ty", "I'm turning forty.", "Jeg blir førti", "bli · førti", "vil er", "Turning an age uses blir. Forty is førti."]
    ]
  },
  {
    id: "time",
    title: "Days and the clock: halv tre",
    blurb: "Read the clock, including halv tre as 2:30, and use yesterday, today and tomorrow.",
    deck: "Numbers, time and prices",
    body: `
<p>You already have the days, lowercase, and <b>På mandag jobber jeg</b>. <b>På mandag</b> is one element, and the verb is the second. This lesson adds yesterday and tomorrow, and the clock. <b>halv tre</b> is 2:30.</p>
<h3>Yesterday and tomorrow</h3>
<p><b>i dag</b> is today. <b>i går</b> is yesterday. <b>i morgen</b> is tomorrow. A plan for tomorrow uses <b>skal</b>, which you now have. Put <b>i morgen</b> first and <b>skal</b> is the second element. The day name alone can also start a sentence, <b>Fredag skal jeg til Oslo</b>. <b>På fredag</b> is the phrase you already use for "on Friday".</p>
{{ex:i går|ee: goh:r|yesterday}}
{{ex:i morgen|ee: MOHR-guhn|tomorrow}}
{{ex:I morgen skal jeg til Bergen.|ee: MOHR-guhn skahl yai teel BAER-guhn|Tomorrow I'm going to Bergen.}}
{{ex:På fredag skal jeg til Oslo.|poh: FREH:-dahg skahl yai teel OOS-loo|On Friday I'm going to Oslo.}}
{{ex:I dag er det mandag.|ee: dah:g ae:r deh: MAHN-dahg|Today is Monday.}}
<h3>The hour</h3>
<p><b>Klokka er tre</b> is 3:00. One o'clock is <b>ett</b>, the number one, because the hour uses that neuter form: <b>Klokka er ett</b>. <b>klokka</b> is the clock, and also "the time". It is feminine. The ending gets a full lesson soon. You will also hear <b>Den er halv tre</b>. The sentence this course types is <b>Klokka er halv tre</b>.</p>
{{ex:Klokka er tre.|KLOHK-ah ae:r treh:|It's 3:00.}}
{{ex:Klokka er ett.|KLOHK-ah ae:r eht|It's 1:00.}}
<h3>halv, kvart, and ten minutes</h3>
<p><b>halv</b> means half an hour <i>before</i> the hour you name. <b>halv tre</b> is half an hour before three, so 2:30. It is not 3:30. <b>halv to</b> is 1:30. The same words can be morning or afternoon. The phrase itself does not say which. Read <b>halv tre</b> as 2:30.</p>
{{ex:klokka halv tre|KLOHK-ah hahlv treh:|2:30}}
{{ex:Klokka er halv tre.|KLOHK-ah ae:r hahlv treh:|It's 2:30.}}
{{ex:Klokka er halv to.|KLOHK-ah ae:r hahlv too:|It's 1:30.}}
<p><b>kvart over</b> is a quarter past. <b>kvart på</b> is a quarter to. <b>på</b> here means "to", before the hour. <b>ti på halv</b> is ten minutes before the half hour.</p>
{{ex:kvart over to|kvahrt OH:-vuhr too:|2:15}}
{{ex:Klokka er kvart på tre.|KLOHK-ah ae:r kvahrt poh: treh:|It's 2:45.}}
{{ex:ti på halv tre|tee: poh: hahlv treh:|2:20}}
{{ex:Klokka er ti på halv tre.|KLOHK-ah ae:r tee: poh: hahlv treh:|It's 2:20.}}
<h3>An hour is en time</h3>
<p><b>en time</b> is an hour, or an appointment, as in a slot with the doctor. <b>time</b> is masculine. Time in general, the word English reaches for, is <b>tid</b>.</p>
{{ex:en time|ehn TEE:-muh|an hour, or an appointment}}
{{ex:tid|tee:|time in general}}
<p>Ask the time with verb second: <b>hva</b>, then <b>er</b>. In the answer, <b>klokka</b> is the subject, so <b>er</b> stays second and the clock phrase stays after the verb. <b>Klokka halv tre er</b> puts the time in the verb's place, and it is wrong. A day you already know still fronts a plan the old way. <b>På mandag jobber jeg</b> has not changed.</p>
{{ex:Hva er klokka?|vah: ae:r KLOHK-ah|What time is it?}}
<div class="tip"><b>Most common mistake:</b> reading halv tre as half past three. <b>halv tre</b> as 3:30 → <b>halv tre</b> is 2:30, half an hour before three.</div>
`,
    check: [
      ["halv tre is…", ["2:30", "3:30", "2:15", "3:00"], 0, "halv tre is half an hour before three, so 2:30."],
      ["kvart på tre is…", ["3:15", "3:45", "3:30", "2:45"], 3, "på means to, before the hour. kvart på tre is a quarter to three, 2:45."],
      ["On Friday I'm going to Oslo, starting with på fredag. =", ["På fredag jeg skal til Oslo.", "Jeg på fredag skal til Oslo.", "På fredag skal jeg til Oslo.", "På fredag skal til jeg Oslo."], 2, "Verb second: på fredag is the first element, then skal, then jeg."]
    ],
    practice: [
      ["mc", "halv tre means…", "2:30", "3:30", "2:15", "3:00", "halv tre is half an hour before three, so 2:30."],
      ["mc", "2:15 is…", "kvart over to", "kvart på to", "halv to", "kvart over tre", "kvart over to is a quarter past two, 2:15. kvart på tre is 2:45."],
      ["mc", "2:20 is…", "ti på halv tre", "ti over halv tre", "kvart på tre", "halv to", "ti på halv tre is ten minutes before 2:30, so 2:20."],
      ["mc", "Tomorrow I'm going to Bergen. (start with i morgen) =", "I morgen skal jeg til Bergen.", "I morgen jeg skal til Bergen.", "I morgen skal til jeg Bergen.", "Jeg i morgen skal til Bergen.", "Verb second: i morgen is the first element, then skal, then jeg."],
      ["mc", "an hour =", "en time", "et time", "ei time", "en tid", "time is masculine: en time. It means an hour, or an appointment. Time in general is tid."],
      ["or", "It's 2:30. (start with klokka)", "Klokka | er | halv tre", "over", "Verb second: klokka is the first element, then er. halv tre is 2:30."],
      ["or", "On Friday I'm going to Oslo. (start with på fredag)", "På fredag | skal | jeg | til | Oslo", "vil", "Verb second: på fredag is the first element, then skal."],
      ["or", "an hour", "en time", "et", "time is masculine: en time."],
      ["fi", "Klokka er __ tre.", "It's 2:30.", "halv", "kvart|over|på", "halv tre is 2:30, half an hour before three."],
      ["fi", "__ skal jeg til Oslo.", "On Friday I'm going to Oslo. (start with på)", "På fredag", "Fredag|I morgen|Mandag", "Verb second: på fredag is the first element, then skal."],
      ["fi", "__ time", "an hour", "en", "et|ei|den", "time is masculine: en time."],
      ["ty", "It's 2:30. (start with klokka)", "Klokka er halv tre", "klokka · halv tre · 2:30", "over på", "Verb second: klokka, then er. halv tre is 2:30."],
      ["ty", "Tomorrow I'm going to Bergen. (start with i morgen)", "I morgen skal jeg til Bergen", "i morgen · skal · Bergen", "vil går", "Verb second: i morgen is the first element, then skal."],
      ["ty", "an hour", "en time", "time · masculine · an hour", "et ei", "time is masculine: en time."]
    ]
  },
  {
    id: "directions",
    title: "Asking the way",
    blurb: "Ask where a place is, and follow right, left and straight ahead.",
    deck: "Around town and directions",
    body: `
<p>You already ask <b>Hvor bor du?</b> The same shape finds a place. <b>Unnskyld</b> gets a stranger's attention, staff included, and you still say <b>du</b> to one person. <b>dere</b> only if the prompt says several people.</p>
<h3>Where is it?</h3>
<p>The question word is the first element. The verb is the second. <b>Hvor er stasjonen?</b> is where is the station. <b>Hvor stasjonen er</b> keeps the English order, and it is wrong. <b>stasjon</b> is masculine, so "the station" is <b>stasjonen</b>. <b>tog</b> is neuter, so "the train" is <b>toget</b>. The ending is "the". The next lesson lines the endings up. For now, use these two as wholes.</p>
{{ex:Unnskyld, hvor er stasjonen?|UEN-shewl voor ae:r stah-SHOO:-nuhn|Excuse me, where is the station?}}
{{ex:Hvor er toget?|voor ae:r TOO:-guh|Where is the train?}}
<h3>Right, left, straight</h3>
<p><b>til høyre</b> is to the right. <b>til venstre</b> is to the left. <b>rett fram</b> is straight ahead. An instruction starts with the verb: <b>Gå rett fram</b>, <b>Ta til venstre</b>, <b>Ta til høyre</b>. When you point, the short answer is <b>Det er til høyre</b>. Name the place and the verb is <b>er</b>, the second element: <b>Stasjonen er til høyre</b>.</p>
{{ex:til høyre|teel HOEY-ruh|to the right}}
{{ex:til venstre|teel VEHN-struh|to the left}}
{{ex:rett fram|reht frah:m|straight ahead}}
{{ex:Gå rett fram.|goh: reht frah:m|Go straight ahead.}}
{{ex:Ta til venstre.|tah: teel VEHN-struh|Turn left.}}
{{ex:Ta til høyre.|tah: teel HOEY-ruh|Turn right.}}
{{ex:Det er til høyre.|deh: ae:r teel HOEY-ruh|It's on the right.}}
{{ex:Stasjonen er til høyre.|stah-SHOO:-nuhn ae:r teel HOEY-ruh|The station is to the right.}}
{{ex:Toget er til venstre.|TOO:-guh ae:r teel VEHN-struh|The train is to the left.}}
<h3>Two place chunks</h3>
<p>Learn these as pairs. A city name takes <b>i</b>: <b>i Oslo</b>, <b>i Bergen</b>. The station is a different chunk: <b>på stasjonen</b>, at the station. On the bus is <b>på bussen</b>, the same <b>på</b>. Do not swap them. <b>på Oslo</b> is the wrong chunk for the city. <b>til Oslo</b> is a different meaning, "to Oslo", the direction you already use with <b>skal</b>.</p>
{{ex:i Oslo|ee: OOS-loo|in Oslo}}
{{ex:Jeg bor i Oslo.|yai boo:r ee: OOS-loo|I live in Oslo.}}
{{ex:på stasjonen|poh: stah-SHOO:-nuhn|at the station}}
{{ex:Jeg er på stasjonen.|yai ae:r poh: stah-SHOO:-nuhn|I'm at the station.}}
{{ex:på bussen|poh: BUES-uhn|on the bus}}
<p>Put <b>i dag</b> first and <b>er</b> is still the second element.</p>
{{ex:I dag er jeg på stasjonen.|ee: dah:g ae:r yai poh: stah-SHOO:-nuhn|Today I'm at the station.}}
<p>The bank uses the same question. <b>bank</b> is masculine, so "the bank" is <b>banken</b>. Point as you say <b>Det er til høyre</b>, so the person can see which way you mean. If you only caught the direction, check with a yes/no question. The verb comes first, the same way as <b>Snakker du norsk?</b> <b>ja</b> and <b>nei</b> still answer it.</p>
{{ex:Unnskyld, hvor er banken?|UEN-shewl voor ae:r BAHNG-kuhn|Excuse me, where is the bank?}}
{{ex:Er stasjonen til høyre?|ae:r stah-SHOO:-nuhn teel HOEY-ruh|Is the station to the right?}}
<p>Name the place when you know it, then the side. If you are only pointing, <b>Det er til høyre</b> is enough, and the person looks where your hand goes. The other order, with the direction first, is also a real sentence, but this course types the place first so the tiles have one order.</p>
<div class="tip"><b>Most common mistake:</b> swapping i and på on the first places. <b>på Oslo</b> → <b>i Oslo</b>. For the station, the chunk is <b>på stasjonen</b>.</div>
`,
    check: [
      ["Where is the station? =", ["Hvor stasjonen er?", "Hvor er stasjon?", "Hvor er stasjonen?", "Stasjonen hvor er?"], 2, "Verb second: hvor, then er. stasjonen is the word for the station."],
      ["in Oslo =", ["på Oslo", "i Oslo", "til Oslo", "av Oslo"], 1, "The chunk is i Oslo. til Oslo means to Oslo."],
      ["straight ahead =", ["til høyre", "til venstre", "på fram", "rett fram"], 3, "rett fram means straight ahead."]
    ],
    practice: [
      ["mc", "Where is the station? =", "Hvor er stasjonen?", "Hvor stasjonen er?", "Hvor er stasjon?", "Stasjonen hvor er?", "Verb second: hvor is the first element, then er."],
      ["mc", "to the right =", "til høyre", "til venstre", "rett fram", "på høyre", "til høyre means to the right."],
      ["mc", "in Oslo =", "i Oslo", "på Oslo", "til Oslo", "av Oslo", "The chunk is i Oslo. på Oslo swaps the place word. til Oslo means to Oslo."],
      ["mc", "at the station =", "på stasjonen", "i Oslo", "til stasjonen", "av stasjonen", "The chunk for at the station is på stasjonen. til stasjonen means to the station."],
      ["mc", "Go straight ahead. =", "Gå rett fram.", "Gå til fram.", "Rett gå fram.", "Gå rett høyre.", "rett fram is straight ahead, and the instruction starts with gå."],
      ["or", "Where is the station? (start with hvor)", "Hvor er stasjonen", "på", "Verb second: hvor is the first element, then er."],
      ["or", "Today I'm at the station. (start with i dag)", "I dag | er | jeg | på stasjonen", "i", "Verb second: i dag is the first element, then er. The place chunk is på stasjonen."],
      ["or", "a station", "en stasjon", "et", "stasjon is masculine: en stasjon."],
      ["fi", "Gå rett __.", "Go straight ahead.", "fram", "høyre|venstre|rett", "rett fram means straight ahead."],
      ["fi", "Jeg bor __ Oslo.", "I live in Oslo.", "i", "på|til|av", "The chunk is i Oslo. på Oslo swaps the two place words."],
      ["fi", "Ta til __.", "Turn right.", "høyre", "venstre|fram|rett", "til høyre is to the right."],
      ["ty", "The train is to the left. (start with toget)", "Toget er til venstre", "tog · venstre", "høyre rett", "The verb er is the second element."],
      ["ty", "I live in Oslo. (start with jeg)", "Jeg bor i Oslo", "bo · i Oslo", "på til", "The verb bor is the second element. The chunk is i Oslo."],
      ["ty", "a train", "et tog", "tog · neuter", "en ei", "tog is neuter: et tog."]
    ]
  },
  {
    id: "definite",
    title: "The definite ending",
    blurb: "Say the car, the book and the house, and the same ending on food words.",
    deck: "Food and drink",
    body: `
<p>English puts a separate word in front: the car. Norwegian puts an ending on the noun. You can already type <b>bilen</b>, <b>boka</b>, <b>huset</b> and <b>jenta</b>. This lesson is that ending on the food you order, and on the nouns that already end in -e. There is still no word for "the" in front of a bare noun.</p>
<h3>Three endings</h3>
<div class="tbl"><table><tr><th></th><th>a</th><th>the</th><th>Ending</th></tr><tr><td>masculine</td><td class="k">en bil</td><td class="k">bilen</td><td class="k">-en</td></tr><tr><td>feminine</td><td class="k">ei bok</td><td class="k">boka</td><td class="k">-a</td></tr><tr><td>neuter</td><td class="k">et hus</td><td class="k">huset</td><td class="k">-et</td></tr></table></div>
{{ex:bilen|BEE:-luhn|the car}}
{{ex:boka|BOO:-kah|the book}}
{{ex:huset|HUE:-suh|the house}}
<p>The <b>t</b> of <b>huset</b> is written and silent. The aid stops before that t. Masculine <b>-en</b> is shown in its careful form, two syllables. Everyday speech often shrinks it. Write <b>-en</b> either way. Feminine is <b>-a</b>, <b>boka</b>, not <b>boken</b>. <b>boken</b> is the common-gender form you may see on a sign or in the news. Read it. Type <b>boka</b>.</p>
<h3>Nouns that already end in -e</h3>
<p>Feminine nouns that end in -e swap that e for <b>-a</b>. <b>ei jente</b> becomes <b>jenta</b>. <b>ei klokke</b>, a clock, becomes <b>klokka</b>, the word you use for the time. <b>ei suppe</b> becomes <b>suppa</b>. Masculine nouns that end in -e add <b>-n</b>: <b>en kaffe</b> becomes <b>kaffen</b>. Neuter nouns that end in -e add <b>-t</b>, and that t is silent: <b>et eple</b> becomes <b>eplet</b>, <b>et rundstykke</b> becomes <b>rundstykket</b>.</p>
{{ex:jenta|YEHN-tah|the girl}}
{{ex:ei klokke|ai KLOHK-uh|a clock}}
{{ex:klokka|KLOHK-ah|the clock, the time}}
{{ex:suppa|SUEP-ah|the soup}}
{{ex:eplet|EHP-luh|the apple}}
{{ex:rundstykket|RUEN-stewk-uh|the bread roll}}
<h3>Food</h3>
<p><b>et brød</b> becomes <b>brødet</b>, the bread, and the t is silent. <b>maten</b> is the food, masculine <b>-en</b>. <b>vannet</b> is the water, neuter, t silent. <b>en melk</b> becomes <b>melken</b>. Cheese is masculine, <b>en ost</b>, so the ending is <b>-en</b>. A menu often uses the bare word <b>ost</b>. With no ending, <b>Jeg liker kaffe</b> is coffee in general. <b>Jeg liker kaffen</b> is this coffee, the coffee in the cup. <b>Takk for maten</b> is what you say after the meal, to the person who cooked.</p>
{{ex:kaffen|KAHF-uhn|the coffee}}
{{ex:brødet|BROE:-duh|the bread}}
{{ex:maten|MAH:-tuhn|the food}}
{{ex:vannet|VAHN-uh|the water}}
{{ex:Jeg liker kaffe.|yai LEE:-kuhr KAHF-uh|I like coffee.}}
{{ex:Jeg liker kaffen.|yai LEE:-kuhr KAHF-uhn|I like the coffee.}}
{{ex:Jeg liker brødet.|yai LEE:-kuhr BROE:-duh|I like the bread.}}
{{ex:Takk for maten.|tahk fohr MAH:-tuhn|Thanks for the meal.}}
<p><b>den</b> and <b>det</b> are still the pronouns from the last lessons, "it" and "that one". They are not a word you put in front of a bare noun. <b>den bil</b> is not "the car". The car is <b>bilen</b>. <b>Hvor er boka?</b> keeps verb second: <b>hvor</b>, then <b>er</b>.</p>
{{ex:Hvor er boka?|voor ae:r BOO:-kah|Where is the book?}}
<div class="tip"><b>Most common mistake:</b> a separate word for "the", and -en on a book. <b>den bil</b> → <b>bilen</b>. <b>boken</b> → <b>boka</b>.</div>
`,
    check: [
      ["the book, the form this course types =", ["boken", "boka", "den bok", "boket"], 1, "bok is feminine: the definite ending is -a. boken is common gender, for reading, not for typing."],
      ["the house =", ["huset", "husen", "den hus", "et hus"], 0, "hus is neuter: the definite ending is -et. et hus means a house. The t is silent."],
      ["the bread =", ["brøden", "den brød", "brødet", "brød"], 2, "brød is neuter: the definite ending is -et."]
    ],
    practice: [
      ["mc", "the car =", "bilen", "den bil", "bil", "bilet", "bil is masculine: the definite ending is -en. There is no separate den in front."],
      ["mc", "the book. Which does this course type?", "boka", "boken", "den bok", "boket", "bok is feminine: the definite ending is -a. boken is common gender, for reading, not the typed answer."],
      ["mc", "the coffee =", "kaffen", "kaffe", "den kaffe", "kaffa", "kaffe is masculine: the definite ending is -en. With no ending, kaffe is coffee in general."],
      ["mc", "the bread =", "brødet", "brøden", "den brød", "brød", "brød is neuter: the definite ending is -et. The t is written and silent."],
      ["mc", "the girl =", "jenta", "jenten", "den jente", "jentea", "jente is feminine and ends in -e, so the definite ending is -a: jenta. jenten is common gender, for reading."],
      ["or", "Where is the book? (start with hvor)", "Hvor er boka", "boken", "Verb second: hvor is the first element, then er. bok is feminine: the definite ending is -a."],
      ["or", "Today I'm drinking the coffee. (start with i dag)", "I dag | drikker | jeg | kaffen", "kaffe", "Verb second: i dag is the first element, then drikker. kaffe is masculine: the definite ending is -en."],
      ["or", "I see the house. (start with jeg)", "Jeg ser huset", "den", "The verb ser is the second element. hus is neuter: the definite ending is -et."],
      ["fi", "Jeg liker __.", "I like the bread.", "brødet", "brød|brøden|den", "brød is neuter: the definite ending is -et."],
      ["fi", "Hvor er __?", "Where is the book?", "boka", "boken|den|boket", "bok is feminine: the definite ending is -a. boken is common gender, for reading, not the typed answer."],
      ["fi", "Jeg ser __.", "I see the car.", "bilen", "bil|den|bilet", "bil is masculine: the definite ending is -en."],
      ["ty", "I don't like the bread. (start with jeg)", "Jeg liker ikke brødet", "like · ikke · brød", "brød den", "ikke goes after the verb. brød is neuter: the definite ending is -et."],
      ["ty", "Where is the book? (start with hvor)", "Hvor er boka", "hvor · bok · feminine", "boken det", "Verb second: hvor, then er. bok is feminine: the definite ending is -a."],
      ["ty", "the coffee", "kaffen", "kaffe · masculine · definite ending", "kaffe den", "kaffe is masculine: the definite ending is -en."]
    ]
  },
  {
    id: "plural",
    title: "Plurals",
    blurb: "Talk about more than one, and say the cars, the children and the books.",
    deck: "People and family",
    body: `
<p>English adds -s: cars, books, barns. Norwegian does not add -s. The plural you need depends on the singular you already know, including its gender. <b>mange</b> means many, and it is followed by this plural, with no <b>en</b>, <b>ei</b> or <b>et</b>.</p>
<h3>Three patterns</h3>
<p>Most masculine and feminine nouns add <b>-er</b>. <b>en bil</b> becomes <b>biler</b>. <b>en gutt</b> becomes <b>gutter</b>. If the noun already ends in -e, add only <b>-r</b>. <b>ei jente</b> becomes <b>jenter</b>. Many short neuter nouns add nothing. <b>et hus</b> stays <b>hus</b>. <b>et barn</b> stays <b>barn</b>. <b>et brød</b> stays <b>brød</b>.</p>
<p>One pair changes the vowel. <b>bok</b> is feminine, and the plural is <b>bøker</b>, with <b>ø</b>. Learn that pair as an item, not as a rule to build for every o.</p>
<h3>The plural with "the"</h3>
<p>For "the" plus a plural, add <b>-ene</b> to the plural: <b>bilene</b>, <b>jentene</b>, <b>guttene</b>, <b>bøkene</b>, <b>husene</b>, <b>brødene</b>. You may also read <b>husa</b> for the houses. That form is also Bokmål. This course types <b>husene</b>. The exception is the children. <b>barn</b> has no plural ending, and "the children" is <b>barna</b>, not barnene and not barns.</p>
<div class="tbl"><table><tr><th>One</th><th>Many</th><th>The many</th></tr><tr><td class="k">en bil</td><td class="k">biler</td><td class="k">bilene</td></tr><tr><td class="k">en gutt</td><td class="k">gutter</td><td class="k">guttene</td></tr><tr><td class="k">ei jente</td><td class="k">jenter</td><td class="k">jentene</td></tr><tr><td class="k">ei bok</td><td class="k">bøker</td><td class="k">bøkene</td></tr><tr><td class="k">et hus</td><td class="k">hus</td><td class="k">husene</td></tr><tr><td class="k">et brød</td><td class="k">brød</td><td class="k">brødene</td></tr><tr><td class="k">et barn</td><td class="k">barn</td><td class="k">barna</td></tr></table></div>
{{ex:biler|BEE:-luhr|cars}}
{{ex:bilene|BEE:-luh-nuh|the cars}}
{{ex:jenter|YEHN-tuhr|girls}}
{{ex:jentene|YEHN-tuh-nuh|the girls}}
{{ex:bøker|BOE:-kuhr|books}}
{{ex:bøkene|BOE:-kuh-nuh|the books}}
{{ex:barn|bah:rn|children}}
{{ex:barna|BAH:-rnah|the children}}
{{ex:husene|HUE:-suh-nuh|the houses}}
<h3>In a sentence</h3>
<p>The verb is still the second element. <b>Barna bor i Oslo</b> is the children live in Oslo. Start with <b>i dag</b> and the verb comes next: <b>I dag ser jeg barna</b>. <b>mange biler</b> is many cars. <b>mange barn</b> keeps the bare plural, because <b>barn</b> adds nothing.</p>
{{ex:Barna bor i Oslo.|BAH:-rnah boo:r ee: OOS-loo|The children live in Oslo.}}
{{ex:mange biler|MAHNG-uh BEE:-luhr|many cars}}
{{ex:mange barn|MAHNG-uh bah:rn|many children}}
{{ex:Jentene snakker norsk.|YEHN-tuh-nuh SNAHK-uhr nohshk|The girls speak Norwegian.}}
<p>Keep the singular "the" and the plural "the" apart. <b>bilen</b> is one car. <b>bilene</b> is the cars. <b>boka</b> is the book. <b>bøkene</b> is the books. <b>barnet</b> is the child, and the t is silent, the same silence as in <b>huset</b>. <b>barna</b> is the children. Those two are easy to mix, because both talk about <b>barn</b>. There is no article in front of a plural. You do not say en biler. The gender shows in the singular, and that is how you know the pattern. A short neuter noun, <b>hus</b> or <b>barn</b>, is the one that adds nothing.</p>
{{ex:barnet|BAH:-rnuh|the child}}
<p><b>ikke</b> has not moved. It still follows the verb, and the plural follows <b>ikke</b>. A question still puts the verb second: <b>hvor</b>, then <b>er</b>.</p>
{{ex:Jeg ser ikke barna.|yai seh:r EEK-uh BAH:-rnah|I don't see the children.}}
{{ex:Hvor er barna?|voor ae:r BAH:-rnah|Where are the children?}}
<div class="tip"><b>Most common mistake:</b> an English -s, and barns for the children. <b>bils</b> → <b>biler</b>. <b>barns</b> → <b>barn</b>, and "the children" is <b>barna</b>.</div>
`,
    check: [
      ["the children =", ["barnene", "barns", "barnet", "barna"], 3, "barn has no plural ending. The definite plural is barna."],
      ["books =", ["boker", "bøker", "boks", "bøkes"], 1, "bok is feminine, and the plural changes the vowel: bøker."],
      ["cars =", ["bils", "bilene", "biler", "bil"], 2, "bil adds -er: biler. An English -s is not the ending. bilene means the cars."]
    ],
    practice: [
      ["mc", "cars =", "biler", "bils", "bil", "bilene", "bil adds -er: biler. The English -s does not work. bilene means the cars."],
      ["mc", "the cars =", "bilene", "biler", "bilen", "bils", "The definite plural adds -ene: bilene. biler has no the."],
      ["mc", "girls =", "jenter", "jentes", "jenterne", "jenta", "jente ends in -e, so the plural adds -r: jenter."],
      ["mc", "the children =", "barna", "barnene", "barns", "barnet", "barn is neuter and the plural has no ending. The definite plural is barna, not barnene and not barns."],
      ["mc", "books =", "bøker", "boker", "boks", "bøkes", "bok is feminine, and the plural changes o to ø: bøker."],
      ["or", "The children live in Oslo. (start with barna)", "Barna | bor | i Oslo", "barns", "The verb bor is the second element."],
      ["or", "Today I see the girls. (start with i dag)", "I dag | ser | jeg | jentene", "jenter", "Verb second: i dag is the first element, then ser."],
      ["or", "a child", "et barn", "en", "barn is neuter: et barn. The plural barn has no ending."],
      ["fi", "Jeg ser mange __.", "I see many cars.", "biler", "bil|bilene|bils", "After mange, use the plural biler. bil adds -er."],
      ["fi", "Hvor er __?", "Where are the children?", "barna", "barn|barnene|barns", "The definite plural of barn is barna."],
      ["fi", "__ bor i Oslo.", "The girls live in Oslo.", "Jentene", "Jenter|Jenta|Barna", "The definite plural ending is -ene: jentene. Barna would be the children."],
      ["ty", "I don't see the children. (start with jeg)", "Jeg ser ikke barna", "se · ikke · barn", "barns barnene", "ikke goes after the verb."],
      ["ty", "the books", "bøkene", "bok · plural · -ene", "bøker boker", "bok is feminine: the plural is bøker, and the definite ending is -ene."],
      ["ty", "The girls speak Norwegian. (start with jentene)", "Jentene snakker norsk", "jente · snakke", "jenter barn", "The verb snakker is the second element."]
    ]
  },
  {
    id: "reflexive",
    title: "Reflexive verbs",
    blurb: "Say that you sit down, wash and go to bed, with the pronoun that matches the subject.",
    deck: "Home and routine",
    body: `
<p>English sometimes says "myself", and sometimes says nothing: I sit down, I wash. A group of Norwegian verbs still wants a pronoun, and the pronoun points back at the subject. Drop it and the sentence is missing a piece. Use the wrong one and it points at somebody else.</p>
<h3>The pronoun matches the subject</h3>
<div class="tbl"><table><tr><th>Subject</th><th>Pronoun</th><th>Sit down</th></tr><tr><td class="k">jeg</td><td class="k">meg</td><td class="k">Jeg setter meg</td></tr><tr><td class="k">du</td><td class="k">deg</td><td class="k">Du setter deg</td></tr><tr><td class="k">han, hun</td><td class="k">seg</td><td class="k">Han setter seg</td></tr><tr><td class="k">vi</td><td class="k">oss</td><td class="k">Vi setter oss</td></tr><tr><td class="k">dere</td><td class="k">dere</td><td class="k">Dere setter dere</td></tr><tr><td class="k">de, barna</td><td class="k">seg</td><td class="k">Barna setter seg</td></tr></table></div>
<p><b>seg</b> is only for he, she, they, and a noun like <b>barna</b> or <b>jentene</b>. <b>Jeg setter seg</b> is wrong. <b>dere</b> is both the subject and the pronoun, and only when you mean several people. One person stays <b>du</b> and <b>deg</b>. You already have <b>Jeg føler meg dårlig</b>, I feel unwell. That <b>meg</b> is the same match: the subject is <b>jeg</b>.</p>
{{ex:Jeg setter meg.|yai SEHT-uhr mai|I sit down.}}
{{ex:Du setter deg.|due: SEHT-uhr dai|You sit down.}}
{{ex:Han setter seg.|hahn SEHT-uhr sai|He sits down.}}
{{ex:Vi setter oss.|vee: SEHT-uhr ohs|We sit down.}}
{{ex:Dere setter dere.|DEH:-ruh SEHT-uhr DEH:-ruh|You sit down. (to several people)}}
{{ex:Barna setter seg.|BAH:-rnah SEHT-uhr sai|The children sit down.}}
{{ex:Jeg føler meg dårlig.|yai FOE:-luhr mai DOH:-rlee|I feel unwell.}}
<h3>Three verbs, and one without a pronoun</h3>
<p><b>sette seg</b> is sit down. <b>vaske seg</b> is wash. <b>legge seg</b> is go to bed. The present is the ordinary -r: <b>setter</b>, <b>vasker</b>, <b>legger</b>. <b>Jeg står opp</b> is I get up. That one has no pronoun. <b>opp</b> is the second piece of the verb, and it stays after <b>står</b>.</p>
{{ex:Jeg vasker meg.|yai VAHS-kuhr mai|I wash.}}
{{ex:Hun vasker seg.|huen VAHS-kuhr sai|She washes.}}
{{ex:Jeg legger meg.|yai LEHG-uhr mai|I go to bed.}}
{{ex:Jeg står opp.|yai stoh:r ohp|I get up.}}
<p>For <b>jeg</b>, <b>du</b> and <b>vi</b>, the pronoun is the object pronoun you already know: <b>meg</b>, <b>deg</b>, <b>oss</b>. The new word is <b>seg</b>. A simple day runs in that order. You get up with no pronoun, you wash with <b>meg</b>, you sit down with <b>meg</b>, and at night you go to bed with <b>meg</b>. Change the subject to <b>hun</b> and each of those pronouns becomes <b>seg</b>. <b>står opp</b> still has none.</p>
<h3>ikke, and verb second</h3>
<p><b>ikke</b> still goes after the verb. The pronoun stays next to the verb, and <b>ikke</b> follows the pronoun: <b>Han vasker seg ikke</b>. Start with <b>i dag</b> or with <b>nå</b>, which you already know, and the verb is the second element. The pronoun follows the subject.</p>
{{ex:Han vasker seg ikke.|hahn VAHS-kuhr sai EEK-uh|He doesn't wash.}}
{{ex:I dag setter jeg meg.|ee: dah:g SEHT-uhr yai mai|Today I sit down.}}
{{ex:Nå legger jeg meg.|noh: LEHG-uhr yai mai|Now I go to bed.}}
<p>The genders have not moved. <b>bok</b> is still feminine, and "the book" is still <b>boka</b>, with the definite ending <b>-a</b>.</p>
{{ex:Hvor er boka?|voor ae:r BOO:-kah|Where is the book?}}
<div class="tip"><b>Most common mistake:</b> seg for jeg, or no pronoun at all. <b>Jeg setter seg</b> → <b>Jeg setter meg</b>. <b>Jeg setter</b> → <b>Jeg setter meg</b>.</div>
`,
    check: [
      ["I sit down. =", ["Jeg setter meg.", "Jeg setter seg.", "Jeg setter.", "Meg setter jeg."], 0, "jeg takes meg. seg is for he, she and they, and the pronoun is required."],
      ["The children sit down. =", ["Barna setter dem.", "Barna setter de.", "Barna setter seg.", "Barna setter oss."], 2, "A noun like barna takes seg, the same pronoun as han and hun."],
      ["I get up. =", ["Jeg står meg.", "Jeg står opp.", "Jeg opp står.", "Jeg står seg."], 1, "stå opp has no reflexive pronoun. The verb comes before opp."]
    ],
    practice: [
      ["mc", "I sit down. =", "Jeg setter meg.", "Jeg setter seg.", "Jeg setter.", "Meg setter jeg.", "jeg takes meg. The pronoun cannot be dropped, and seg is for he, she and they."],
      ["mc", "He sits down. =", "Han setter seg.", "Han setter ham.", "Han setter meg.", "Han setter.", "han takes seg, not ham."],
      ["mc", "We sit down. =", "Vi setter oss.", "Vi setter seg.", "Vi setter meg.", "Oss setter vi.", "vi takes oss."],
      ["mc", "I get up. =", "Jeg står opp.", "Jeg står meg opp.", "Jeg står seg.", "Jeg opp står.", "stå opp has no reflexive pronoun. The verb comes before opp."],
      ["mc", "You sit down. (to several people) =", "Dere setter dere.", "Dere setter seg.", "Du setter deg.", "Dere setter dem.", "The prompt says several people, so dere is both the subject and the pronoun."],
      ["or", "I sit down. (start with jeg)", "Jeg setter meg", "seg", "The verb setter is the second element, and jeg takes meg."],
      ["or", "Today she goes to bed. (start with i dag)", "I dag | legger | hun | seg", "henne", "Verb second: i dag is the first element, then legger. hun takes seg."],
      ["or", "I see the book. (start with jeg)", "Jeg ser boka", "boken", "The verb ser is the second element. bok is feminine: the definite ending is -a. boken is common gender, for reading, not the typed answer."],
      ["fi", "Du setter __.", "You sit down. (one person)", "deg", "meg|seg|du", "du takes deg."],
      ["fi", "Barna setter __.", "The children sit down.", "seg", "ham|de|meg", "A group like barna takes seg."],
      ["fi", "Han vasker seg __.", "He doesn't wash.", "ikke", "alltid|meg|ham", "ikke goes after the verb, and han takes seg, so ikke follows seg."],
      ["ty", "Today I sit down. (start with i dag)", "I dag setter jeg meg", "i dag · sette · meg", "seg nå", "Verb second: i dag is the first element, then setter."],
      ["ty", "The children sit down. (start with barna)", "Barna setter seg", "sette · seg", "dem meg", "The verb setter is the second element. They take seg."],
      ["ty", "the book", "boka", "bok · feminine · -a", "boken boket", "bok is feminine: the definite ending is -a. boken is common gender, for reading, not the typed answer."]
    ]
  }
];
