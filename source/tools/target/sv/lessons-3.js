/* en-sv lessons 19–26 (possessives … traps). Written by EN-SV-3.
   Every pron is stdout of tools/target/sv/respell.js, pasted unchanged. */
module.exports = [
  {
    id: "possessives",
    title: "min, mitt, mina, and sin",
    blurb: "Say my, your, and his so the word matches the thing, and use sin for the subject's own.",
    deck: "People and family",
    body: `
<p>English uses one word, <i>my</i>, in <i>my car</i> and <i>my house</i>. Swedish changes the word. It matches the thing you own, not the person who owns it. You are the same person either way. The little word still changes, because <i>bil</i> and <i>hus</i> are different kinds of noun. This is the same split as <i>en</i> and <i>ett</i>.</p>
<h3>Match the thing</h3>
<div class="tbl"><table><tr><th></th><th>en-word</th><th>ett-word</th><th>more than one</th></tr>
<tr><td>my</td><td class="k">min</td><td class="k">mitt</td><td class="k">mina</td></tr>
<tr><td>your (one person)</td><td class="k">din</td><td class="k">ditt</td><td class="k">dina</td></tr>
<tr><td>your (you all)</td><td class="k">er</td><td class="k">ert</td><td class="k">era</td></tr>
<tr><td>our</td><td class="k">vår</td><td class="k">vårt</td><td class="k">våra</td></tr>
<tr><td>the subject's own</td><td class="k">sin</td><td class="k">sitt</td><td class="k">sina</td></tr>
</table></div>
<p><i>min</i> goes with an en-word, a common-gender noun. <i>mitt</i> goes with an ett-word, a neuter noun. <i>mina</i> goes with more than one thing. <i>barn</i> does not add a plural ending, and it still takes <i>mina</i>.</p>
{{ex:min bil|meen beel|my car}}
{{ex:mitt hus|miht huehs|my house}}
{{ex:mina barn|MEE-nah bahrn|my children}}
<p>Your, said to one person, works the same way: <i>din</i>, <i>ditt</i>, <i>dina</i>. For you all, or when you speak to a company, the words are <i>er</i>, <i>ert</i>, <i>era</i>. Our is <i>vår</i>, <i>vårt</i>, <i>våra</i>. <i>vår</i> is spelled with <i>å</i>. It means our. It is not <i>var</i>, the word for where.</p>
{{ex:ditt hus|diht huehs|your house}}
{{ex:Vi bor i vårt hus.|vee boohr ee vohrt huehs|We live in our house.}}
<h3>Someone else's, or the subject's own</h3>
<p><i>hans</i>, <i>hennes</i> and <i>deras</i> do not change. One form covers an en-word, an ett-word and a plural. They mean someone else's thing: his, her, their.</p>
{{ex:Maja ringer hans mamma.|MAI-ah RIHNG-ehr hahns MAHMM-ah|Maja calls his mom, not her own.}}
<p><i>sin</i>, <i>sitt</i> and <i>sina</i> mean the subject's own. Use them when the subject is he, she, or they, not <i>jag</i>, <i>du</i>, <i>vi</i> or <i>ni</i>. The word still matches the thing. <i>ringer</i> means calls. <i>med</i> means with.</p>
{{ex:Erik ringer sin mamma.|AY-rihk RIHNG-ehr seen MAHMM-ah|Erik calls his own mom.}}
{{ex:Anna bor i sitt hus.|AHNN-ah boohr ee siht huehs|Anna lives in her own house.}}
{{ex:De äter med sina barn.|dawm AE-tehr mayd SEE-nah bahrn|They eat with their own children.}}
<p><i>De äter med deras barn</i> would be someone else's children. <i>jag</i>, <i>du</i>, <i>vi</i> and <i>ni</i> do not use <i>sin</i>. <i>sin</i> is also not the object word <i>sig</i>.</p>
{{ex:Jag ringer min mamma.|yah RIHNG-ehr meen MAHMM-ah|I call my mom.}}
{{ex:Du ringer din mamma.|dueh RIHNG-ehr deen MAHMM-ah|You call your mom.}}
{{ex:Ni bor i ert hus.|nee boohr ee ayrt huehs|You all live in your house.}}
<p>A possessive takes no definite suffix. The thing is already picked out. Say <i>min bil</i>, not <i>min bilen</i>, and <i>mitt hus</i>, not <i>mitt huset</i>. You may hear the noun first, <i>bilen min</i>. Write <i>min bil</i>.</p>
<p>A name takes <i>s</i>, with no apostrophe. <i>Annas bil</i>, <i>Annas hus</i>, <i>Annas barn</i>. The <i>s</i> does not change for an en-word or an ett-word. When Erik is the subject and the mom is his, use <i>sin</i>. Do not repeat the name.</p>
{{ex:Annas bil|AHNN-ahs beel|Anna's car}}
<div class="tip"><b>Most common mistake:</b> <i>Erik ringer hans mamma</i> → <i>Erik ringer sin mamma</i>, when the mom is Erik's own.</div>
`,
    check: [
      ["Erik calls his own mom. Which sentence is right?", ["Erik ringer hans mamma.", "Erik ringer sin mamma.", "Erik ringer hennes mamma.", "Erik ringer deras mamma."], 1, "sin means the subject's own. Erik is the subject, and the mom is his."],
      ["How do you say my house?", ["min hus", "mina hus", "mitt hus", "mitt huset"], 2, "hus is an ett-word, so my is mitt, and a possessive takes no definite suffix."],
      ["You all live in your house. Which is right?", ["Ni bor i ert hus.", "Ni bor i ditt hus.", "Ni bor i sitt hus.", "Ni bor i hans hus."], 0, "You all is ni, and ert matches an ett-word. sitt is not for ni."]
    ],
    practice: [
      ["mc", "my car =", "min bil", "mitt bil", "mina bil", "min bilen", "bil is an en-word, so my is min, with no definite suffix."],
      ["mc", "your house (to one person) =", "ditt hus", "din hus", "dina hus", "ditt huset", "hus is an ett-word, so your is ditt. du does not take sitt."],
      ["mc", "Erik calls his own mom. =", "Erik ringer sin mamma.", "Erik ringer hans mamma.", "Erik ringer min mamma.", "Erik ringer deras mamma.", "sin means the subject's own. Erik is the subject, and the mom is his."],
      ["mc", "I call my mom. =", "Jag ringer min mamma.", "Jag ringer sin mamma.", "Jag ringer mitt mamma.", "Jag ringer mina mamma.", "The subject is jag, so the word is min, not sin."],
      ["mc", "Anna calls her own mom. =", "Anna ringer sin mamma.", "Anna ringer hennes mamma.", "Anna ringer hans mamma.", "Anna ringer sitt mamma.", "sin means the subject's own. hennes would be some other woman's mom."],
      ["or", "my car", "min bil", "mitt", "bil is an en-word: min bil."],
      ["or", "Today Erik calls his own mom. (start with Idag)", "Idag ringer Erik sin mamma", "hans", "Verb second: idag first, then ringer, then Erik."],
      ["or", "my children", "mina barn", "mitt", "mina is the plural. More than one child, and barn keeps its shape."],
      ["fi", "Erik ringer __ mamma.", "Erik calls his own mom.", "sin", "hans|hennes|min", "sin means the subject's own. Erik is the subject."],
      ["fi", "Jag bor i __ hus.", "I live in my house.", "mitt", "min|mina|sitt", "hus is an ett-word, so my is mitt. jag does not take sitt."],
      ["fi", "__ bil", "Anna's car", "Annas", "Anna|Annan|Annes", "A name takes s, with no apostrophe: Annas bil."],
      ["ty", "my house", "mitt hus", "hus · mitt · matches the thing", "min bilen", "hus is an ett-word: mitt hus."],
      ["ty", "Today Anna lives in Stockholm. (start with Idag)", "Idag bor Anna i Stockholm", "idag · bor · start with idag", "jobbar huset", "Verb second: idag first, then bor, then Anna."],
      ["ty", "Erik calls his own mom. (start with Erik)", "Erik ringer sin mamma|Erik ringer till sin mamma", "ringa · sin · the subject's own", "hans hennes", "sin means the subject's own. Erik is the subject, so not hans."]
    ]
  },
  {
    id: "routine",
    title: "Daily routine",
    blurb: "Say how often you do something, with ofta, alltid, and aldrig after the verb.",
    deck: "Home and routine",
    body: `
<p>English puts <i>often</i>, <i>always</i> and <i>never</i> in front of the verb: I often eat, I never sleep. Swedish puts them after the verb. They sit in the same slot as <i>inte</i>.</p>
<h3>After the verb</h3>
<p><i>ofta</i> means often, <i>alltid</i> means always, and <i>aldrig</i> means never. None of them changes form. They are not adjectives, and they are not verbs. In this course they are sentence adverbs, the same family as <i>inte</i>.</p>
{{ex:Jag äter ofta frukost.|yah AE-tehr AWF-tah FRUEHK-awst|I often eat breakfast.}}
{{ex:Jag sover alltid hemma.|yah SOH-vehr AHLL-teed HEHM-ah|I always sleep at home.}}
{{ex:Jag äter aldrig frukost.|yah AE-tehr AHL-drihg FRUEHK-awst|I never eat breakfast.}}
<p><i>frukost</i> means breakfast. It is an en-word: <i>en frukost</i>. In <i>Jag äter frukost</i> the article usually drops, the way English says <i>I eat breakfast</i>. <i>hemma</i> means at home. The English order is the mistake: <i>Jag ofta äter</i> and <i>Jag aldrig äter</i> put the word in front of the verb. Move it.</p>
{{ex:Jag äter alltid hemma.|yah AE-tehr AHLL-teed HEHM-ah|I always eat at home.}}
<h3>First in the sentence</h3>
<p>You can also start with the frequency word. Then the verb is the second element, and the subject comes after the verb. <i>Ofta äter jag hemma</i> is the same fact as <i>Jag äter ofta hemma</i>, with the frequency word in front. <i>Aldrig äter jag frukost</i> is right too, and it sounds a little stronger. Not <i>Ofta jag äter</i>.</p>
{{ex:Ofta äter jag hemma.|AWF-tah AE-tehr yah HEHM-ah|I often eat at home.}}
{{ex:Aldrig äter jag frukost.|AHL-drihg AE-tehr yah FRUEHK-awst|I never eat breakfast.}}
<p>In a yes/no question the verb comes first, and <i>ofta</i> stays after the subject. Not <i>Äter ofta du</i>.</p>
{{ex:Äter du ofta frukost?|AE-tehr dueh AWF-tah FRUEHK-awst|Do you often eat breakfast?}}
<h3>Family, and after att</h3>
<p>Family words use the same slot. <i>Min mamma äter alltid hemma. Mina barn sover hemma.</i> The verb does not grow an ending for <i>barn</i>.</p>
{{ex:Min mamma äter alltid hemma.|meen MAHMM-ah AE-tehr AHLL-teed HEHM-ah|My mom always eats at home.}}
{{ex:Mina barn sover hemma.|MEE-nah bahrn SOH-vehr HEHM-ah|My children sleep at home.}}
<p>After <i>att</i>, the adverb comes before the verb, the same way <i>inte</i> does. <i>att jag ofta äter hemma</i>. That is one pattern, not a new lesson. In an ordinary sentence, keep <i>ofta</i> after the verb.</p>
{{ex:att jag ofta äter hemma|ahtt yah AWF-tah AE-tehr HEHM-ah|that I often eat at home}}
<div class="tip"><b>Most common mistake:</b> <i>Jag ofta äter frukost</i> → <i>Jag äter ofta frukost</i>.</div>
`,
    check: [
      ["In Jag ___ frukost, where does ofta go for I often eat breakfast?", ["After äter", "Before äter, as in English", "Before jag", "Only at the very end of the sentence"], 0, "ofta goes after the verb: Jag äter ofta frukost."],
      ["Which sentence is right?", ["Ofta jag äter hemma.", "Ofta äter jag hemma.", "Ofta äter hemma jag.", "Jag ofta äter hemma."], 1, "Verb second: ofta first, then äter, then jag."],
      ["How do you say I never eat breakfast?", ["Jag aldrig äter frukost.", "Aldrig jag äter frukost.", "Jag äter aldrig frukost.", "Jag äter inte aldrig frukost."], 2, "aldrig goes after the verb. Do not put inte in front of it."]
    ],
    practice: [
      ["mc", "I often eat breakfast. =", "Jag äter ofta frukost.", "Jag ofta äter frukost.", "Ofta jag äter frukost.", "Jag äter inte frukost.", "ofta goes after the verb. The last sentence means I do not eat breakfast."],
      ["mc", "I always sleep at home. =", "Jag sover alltid hemma.", "Jag alltid sover hemma.", "Alltid jag sover hemma.", "Jag sover inte hemma.", "alltid goes after the verb, in the same slot as inte."],
      ["mc", "I never eat breakfast. =", "Jag äter aldrig frukost.", "Jag aldrig äter frukost.", "Aldrig jag äter frukost.", "Jag äter inte aldrig frukost.", "aldrig goes after the verb. Do not add inte in front of it."],
      ["mc", "Do you often eat breakfast? (to one person) =", "Äter du ofta frukost?", "Äter ofta du frukost?", "Ofta du äter frukost?", "Du ofta äter frukost?", "In a yes/no question the verb comes first, and ofta stays after du."],
      ["mc", "a breakfast =", "en frukost", "ett frukost", "frukosten", "en frukostet", "frukost is an en-word: en frukost."],
      ["or", "I often eat breakfast. (ofta right after äter)", "Jag äter ofta frukost", "aldrig", "ofta is a sentence adverb: it goes after the verb."],
      ["or", "a big house", "ett stort hus", "stor en", "The adjective ending is -t on an ett-word."],
      ["or", "My mom always eats at home. (alltid right after äter)", "Min mamma äter alltid hemma", "ofta", "alltid is a sentence adverb: it goes after the verb."],
      ["fi", "Jag äter __ frukost.", "I often eat breakfast.", "ofta", "alltid|aldrig|inte", "ofta means often. The other words are always, never and not."],
      ["fi", "__ hus", "a big house", "ett stort", "en stort|ett stor|en stor", "hus is an ett-word, so the article is ett and the adjective ending is -t."],
      ["fi", "Ofta __ jag hemma.", "I often eat at home.", "äter", "sover|är|har", "Verb second: ofta first, then the verb, then jag."],
      ["ty", "I always sleep at home. (alltid right after sover)", "Jag sover alltid hemma", "sova · alltid · after the verb", "inte ofta", "alltid is a sentence adverb: it goes after the verb."],
      ["ty", "a big car", "en stor bil", "bil · stor · no -t", "ett stort", "bil is an en-word: en stor bil."],
      ["ty", "I never eat breakfast. (aldrig right after äter)", "Jag äter aldrig frukost", "äta · aldrig · never", "inte ofta", "aldrig means never, and it sits after the verb."]
    ]
  },
  {
    id: "tycker-om",
    title: "Likes: tycker om and gillar",
    blurb: "Say what you like with tycker om and with gillar, and put inte in the right slot.",
    deck: "Likes and free time",
    body: `
<p>English says <i>I like coffee</i> with one verb. Swedish has two ordinary ways, and both are fine. Use a noun here. The <i>to read</i> pattern comes in the next lesson.</p>
<h3>Two ways, both fine</h3>
<p><i>tycker om</i> is two words. <i>om</i> stays with <i>tycker</i> when you mean like. <i>gillar</i> is one word. It does not take <i>om</i>. <i>Jag gillar om kaffe</i> is wrong. Without <i>om</i>, <i>tycker</i> is a different verb, closer to <i>think</i>. For like, keep the <i>om</i>.</p>
{{ex:Jag tycker om kaffe.|yah TEWK-ehr awm KAHFF-eh|I like coffee.}}
{{ex:Jag gillar kaffe.|yah YIHL-ahr KAHFF-eh|I like coffee, with gillar.}}
{{ex:Jag tycker om min mamma.|yah TEWK-ehr awm meen MAHMM-ah|I like my mom.}}
<h3>inte splits one of them</h3>
<p><i>inte</i> still goes after the verb. With <i>tycker om</i>, that slot is between the two words. <i>inte</i> splits them. <i>gillar</i> does not split, because there is nothing to split. <i>inte</i> simply follows it.</p>
<div class="tbl"><table><tr><th></th><th>like</th><th>don't like</th></tr>
<tr><td class="k">tycker om</td><td class="k">Jag tycker om kaffe</td><td class="k">Jag tycker inte om kaffe</td></tr>
<tr><td class="k">gillar</td><td class="k">Jag gillar kaffe</td><td class="k">Jag gillar inte kaffe</td></tr>
</table></div>
{{ex:Jag tycker inte om kaffe.|yah TEWK-ehr IHN-teh awm KAHFF-eh|I don't like coffee.}}
{{ex:Jag gillar inte kaffe.|yah YIHL-ahr IHN-teh KAHFF-eh|I don't like coffee, with gillar.}}
<p>Not <i>Jag inte tycker om kaffe</i>. Not <i>Jag tycker om inte kaffe</i>. Not <i>Jag tycker inte kaffe</i>, which has lost the <i>om</i>. Not <i>Jag inte gillar kaffe</i>.</p>
<h3>Questions</h3>
<p>A yes/no question starts with the verb. <i>du</i> sits in the subject slot, so you hear <i>Tycker du om kaffe?</i> The <i>om</i> does not jump in front of <i>du</i>. <i>inte</i> stays in its slot: <i>Tycker du inte om kaffe?</i> With <i>gillar</i>, the question is <i>Gillar du kaffe?</i></p>
<p>You can also put the thing first. The verb is still the second element: <i>Kaffe tycker jag om</i>. Same meaning, different start. A cup from the café lesson is <i>en kaffe</i>. When you mean coffee in general, the article often drops, and <i>gillar</i> works the same way. In the exercises, the prompt says which word to start with, so only one order is the answer.</p>
{{ex:Kaffe tycker jag om.|KAHFF-eh TEWK-ehr yah awm|I like coffee, with the thing first.}}
{{ex:Tycker du om kaffe?|TEWK-ehr dueh awm KAHFF-eh|Do you like coffee?}}
{{ex:Gillar du kaffe?|YIHL-ahr dueh KAHFF-eh|Do you like coffee?}}
{{ex:Tycker du inte om kaffe?|TEWK-ehr dueh IHN-teh awm KAHFF-eh|Don't you like coffee?}}
<div class="tip"><b>Most common mistake:</b> <i>Jag tycker om inte kaffe</i> → <i>Jag tycker inte om kaffe</i>. And <i>Jag inte gillar kaffe</i> → <i>Jag gillar inte kaffe</i>.</div>
`,
    check: [
      ["Where does inte go with tycker om?", ["After om", "Between tycker and om", "Before tycker", "It does not appear"], 1, "inte splits tycker and om: Jag tycker inte om kaffe."],
      ["I don't like coffee, with gillar. Which is right?", ["Jag gillar inte kaffe.", "Jag gillar om inte kaffe.", "Jag inte gillar kaffe.", "Jag gillar inte om kaffe."], 0, "gillar does not split and does not take om. inte goes after gillar."],
      ["Do you like coffee? (tycker om, to one person)", ["Tycker om du kaffe?", "Om du tycker kaffe?", "Tycker du kaffe?", "Tycker du om kaffe?"], 3, "In a yes/no question the verb comes first, and du sits between tycker and om."]
    ],
    practice: [
      ["mc", "I like coffee. (use tycker om) =", "Jag tycker om kaffe.", "Jag tycker kaffe.", "Jag om tycker kaffe.", "Jag tycker om inte kaffe.", "tycker om is two words. om is part of the verb."],
      ["mc", "I like coffee. (use gillar) =", "Jag gillar kaffe.", "Jag gillar om kaffe.", "Jag om gillar kaffe.", "Gillar jag om kaffe.", "gillar is one word. It does not take om."],
      ["mc", "I don't like coffee. (use tycker om) =", "Jag tycker inte om kaffe.", "Jag tycker om inte kaffe.", "Jag inte tycker om kaffe.", "Jag tycker inte kaffe.", "inte goes between tycker and om. The last one is missing om."],
      ["mc", "I don't like coffee. (use gillar) =", "Jag gillar inte kaffe.", "Jag gillar inte om kaffe.", "Jag inte gillar kaffe.", "Jag gillar om inte kaffe.", "inte goes after gillar. gillar does not split and does not take om."],
      ["mc", "Do you like coffee? (tycker om, to one person) =", "Tycker du om kaffe?", "Tycker om du kaffe?", "Tycker du kaffe?", "Om tycker du kaffe?", "In a yes/no question the verb comes first. du sits between tycker and om."],
      ["or", "Do you like coffee? (use tycker om, to one person)", "Tycker du om kaffe", "gillar", "In a yes/no question the verb comes first."],
      ["or", "a glass of water", "ett glas vatten", "en", "glas is an ett-word: ett glas."],
      ["or", "I don't like coffee. (use tycker om, start with Jag)", "Jag tycker inte om kaffe", "gillar", "inte goes between tycker and om."],
      ["fi", "Jag tycker __ om kaffe.", "I don't like coffee.", "inte", "alltid|gillar|att", "inte goes between tycker and om."],
      ["fi", "Jag gillar __ kaffe.", "I don't like coffee.", "inte", "om|inte om|att", "inte goes after gillar. gillar does not take om."],
      ["fi", "__ kaffe", "a coffee", "en", "ett|den|det", "kaffe is an en-word: en kaffe."],
      ["ty", "Where is the house? (use är)", "Var är huset", "var · hus · definite", "bilen heter", "The definite suffix is -et."],
      ["ty", "I don't like coffee. (use gillar, start with Jag)", "Jag gillar inte kaffe", "gilla · inte · does not split", "om tycker", "inte goes after gillar. gillar does not split."],
      ["ty", "I like my mom. (use tycker om and min, start with Jag)", "Jag tycker om min mamma", "tycka om · min · mamma", "gillar mitt", "tycker om is two words, and mamma takes min."]
    ]
  },
  {
    id: "att",
    title: "att plus the infinitive",
    blurb: "Add att before a verb after tycker om or gillar, and leave it out after a modal.",
    deck: "Likes and free time",
    body: `
<p>English uses <i>to</i> in <i>I like to read</i> and in <i>I can drive</i>. Swedish uses <i>att</i> for the first and nothing for the second.</p>
<h3>After tycker om and gillar</h3>
<p>After <i>tycker om</i> and after <i>gillar</i>, <i>att</i> introduces the verb. <i>att läsa</i> means to read. <i>att simma</i> means to swim. The verb after <i>att</i> is the plain form, with no <i>-r</i>. <i>läsa</i>, not <i>läser</i>. <i>simma</i>, not <i>simmar</i>.</p>
{{ex:Jag tycker om att läsa.|yah TEWK-ehr awm ahtt LAE-sah|I like to read.}}
{{ex:Jag gillar att simma.|yah YIHL-ahr ahtt SIHM-ah|I like to swim.}}
<p><i>inte</i> does not eat the <i>att</i>. It still splits <i>tycker</i> and <i>om</i>, and it still follows <i>gillar</i>. <i>att</i> stays in front of the plain verb.</p>
{{ex:Jag tycker inte om att läsa.|yah TEWK-ehr IHN-teh awm ahtt LAE-sah|I don't like to read.}}
{{ex:Jag gillar inte att simma.|yah YIHL-ahr IHN-teh ahtt SIHM-ah|I don't like to swim.}}
<h3>Modals take no att</h3>
<p>A modal takes the plain verb and no <i>att</i>. The modals you know are <i>vill</i>, <i>kan</i>, <i>måste</i> and <i>ska</i>. <i>inte</i> follows the modal, because the modal is the verb that runs the sentence.</p>
<div class="tbl"><table><tr><th>English to</th><th>Swedish</th></tr>
<tr><td>I like to read</td><td class="k">Jag tycker om att läsa</td></tr>
<tr><td>I can drive</td><td class="k">Jag kan köra</td></tr>
<tr><td>I want a coffee</td><td class="k">Jag vill ha en kaffe</td></tr>
<tr><td>I'm going by train</td><td class="k">Jag ska åka tåg</td></tr>
</table></div>
{{ex:Jag kan köra.|yah kahnn TJEUH-rah|I can drive.}}
{{ex:Jag kan inte köra.|yah kahnn IHN-teh TJEUH-rah|I can't drive.}}
{{ex:Jag vill läsa.|yah vihl LAE-sah|I want to read.}}
{{ex:Jag ska åka tåg.|yah skah OH-kah tohg|I'm going by train.}}
{{ex:Jag vill ha en kaffe.|yah vihl hah ayn KAHFF-eh|I want a coffee.}}
<p><i>Jag kan att köra</i> copies the English <i>to</i>. Drop <i>att</i>. <i>Jag tycker om läsa</i> drops the <i>att</i> that Swedish wants. Put it back. If the sentence starts with <i>idag</i>, the modal is still the second element: <i>Idag vill jag läsa</i>, not <i>Idag jag vill läsa</i>.</p>
<h3>The other att</h3>
<p>You have already met a different <i>att</i>. It means that: <i>att jag inte förstår</i>. That <i>att</i> starts a small sentence, so a subject follows, and <i>inte</i> comes before the verb. <i>att läsa</i> has no subject. The plain verb follows. If you can put <i>jag</i> after <i>att</i>, it means that. If a plain verb follows, it means to.</p>
{{ex:att jag inte förstår|ahtt yah IHN-teh fur-STOHR|that I don't understand}}
<div class="tip"><b>Most common mistake:</b> <i>Jag kan att köra</i> → <i>Jag kan köra</i>. The other way: <i>Jag tycker om läsa</i> → <i>Jag tycker om att läsa</i>.</div>
`,
    check: [
      ["Which sentence means I like to read?", ["Jag tycker om att läsa.", "Jag tycker om läsa.", "Jag tycker att läsa.", "Jag att tycker om läsa."], 0, "att comes before the plain verb after tycker om."],
      ["Which sentence means I can drive?", ["Jag kan att köra.", "Jag att kan köra.", "Jag kan köra.", "Jag tycker om att köra."], 2, "kan is a modal, so there is no att. The last sentence means I like to drive."],
      ["In att jag inte förstår, what is att, and where is inte?", ["att means to, and inte goes after the verb", "att means that, and inte comes before the verb", "att means and", "att means to, and a subject follows"], 1, "This att means that. A subject follows, so inte comes before the verb."]
    ],
    practice: [
      ["mc", "I like to read. =", "Jag tycker om att läsa.", "Jag tycker om läsa.", "Jag tycker att läsa.", "Jag att tycker om läsa.", "att comes before läsa. tycker om needs both words."],
      ["mc", "I like to swim. (use gillar) =", "Jag gillar att simma.", "Jag gillar simma.", "Jag gillar om att simma.", "Jag gillar inte att simma.", "gillar takes att before the plain verb, and no om."],
      ["mc", "I can drive. =", "Jag kan köra.", "Jag kan att köra.", "Jag att kan köra.", "Jag tycker om att köra.", "kan is a modal. A modal takes no att. The last sentence means I like to drive."],
      ["mc", "I want a coffee. =", "Jag vill ha en kaffe.", "Jag vill att ha en kaffe.", "Jag vill ha att en kaffe.", "Jag tycker om att ha en kaffe.", "vill is a modal, so ha has no att. kaffe is an en-word."],
      ["mc", "that I don't understand =", "att jag inte förstår", "att jag förstår inte", "att inte jag förstår", "jag att inte förstår", "inte comes before the verb after att."],
      ["or", "Today I want to read. (start with Idag, use vill)", "Idag vill jag läsa", "att", "Verb second: idag first, then vill, then jag."],
      ["or", "a big car", "en stor bil", "stort", "bil is an en-word, so the adjective ending has no -t."],
      ["or", "I like to read. (use tycker om, start with Jag)", "Jag tycker om att läsa", "gillar", "att comes before the plain verb after tycker om."],
      ["fi", "Jag tycker om __ läsa.", "I like to read.", "att", "om|inte|och", "att comes before the plain verb. och means and."],
      ["fi", "Jag kan __.", "I can drive.", "köra|köra bil|köra en bil", "att köra|att|köra att", "kan is a modal, so the plain verb has no att."],
      ["fi", "Huset är __.", "The house is big.", "stort", "stor|stora|liten", "The adjective ending is -t on an ett-word."],
      ["ty", "I can drive. (use kan)", "Jag kan köra|Jag kan köra bil|Jag kan köra en bil", "kan · köra · no att", "att vill", "A modal takes no att."],
      ["ty", "The car is big.", "Bilen är stor", "bil · stor · definite", "stort huset", "The definite suffix is -en."],
      ["ty", "I don't like to read. (use gillar, start with Jag)", "Jag gillar inte att läsa", "gilla · inte · att · läsa", "tycker om", "inte goes after gillar, and att stays before läsa."]
    ]
  },
  {
    id: "directions",
    title: "Directions",
    blurb: "Ask where a place is, and give right, left, and straight ahead.",
    deck: "Around town and directions",
    body: `
<p>English says <i>on the right</i>, <i>on the left</i> and <i>straight ahead</i>. Swedish says <i>till höger</i>, <i>till vänster</i> and <i>rakt fram</i>. <i>till</i> means to. <i>höger</i> is right, <i>vänster</i> is left, and <i>rakt fram</i> is straight ahead. <i>rakt</i> does not change.</p>
<div class="tbl"><table><tr><th>Swedish</th><th>English</th></tr>
<tr><td class="k">till höger</td><td>to the right</td></tr>
<tr><td class="k">till vänster</td><td>to the left</td></tr>
<tr><td class="k">rakt fram</td><td>straight ahead</td></tr>
</table></div>
{{ex:till höger|tihl HEUH-gehr|to the right}}
{{ex:till vänster|tihl VEHN-stehr|to the left}}
{{ex:rakt fram|rahkt frahmm|straight ahead}}
<h3>Where is it?</h3>
<p><i>Var är stationen?</i> means where is the station? <i>var</i> means where. The verb <i>är</i> is the second element. <i>station</i> is an en-word, so the definite suffix is <i>-en</i>: <i>stationen</i>. The same question works for the bus and the train. <i>buss</i> is an en-word: <i>bussen</i>. <i>tåg</i> is an ett-word: <i>tåget</i>.</p>
{{ex:Var är stationen?|vahr aer stah-SJOOHN-ehn|Where is the station?}}
{{ex:Tåget är rakt fram.|TOH-geht aer rahkt frahmm|The train is straight ahead.}}
{{ex:Stationen är till höger.|stah-SJOOHN-ehn aer tihl HEUH-gehr|The station is on the right.}}
<p>To tell someone the way, use the imperative. Do not add <i>-r</i>. <i>Går</i> is the present, I go or I am going. <i>Gå</i> is the order: go. After <i>ska</i> and <i>måste</i> you used the infinitive. For <i>gå</i> the infinitive and the order look the same. For <i>komma</i> they do not: the order is <i>Kom</i>, and the infinitive is <i>komma</i>.</p>
{{ex:Gå rakt fram.|goh rahkt frahmm|Go straight ahead.}}
{{ex:Gå till höger.|goh tihl HEUH-gehr|Go to the right.}}
{{ex:Jag går till stationen.|yah gohr tihl stah-SJOOHN-ehn|I'm going to the station.}}
<p><i>till</i> is the preposition for a destination: <i>till stationen</i>, <i>till Stockholm</i>. <i>i</i> is for a city you are in: <i>i Stockholm</i>. <i>på</i> is for the station as a place you are at: <i>på stationen</i>. A ticket is <i>en biljett</i>. The definite spelling is <i>biljetten</i>.</p>
<h3>Excuse me, and wait for</h3>
<p>To one staff member, use <i>du</i>. <i>Ursäkta</i> is excuse me, when you stop someone. <i>Förlåt</i>, which you know, is sorry. To a company, or to several people, use <i>ni</i>, and the sentence should say so. <i>ni</i> is not a polite word for one person in this course.</p>
{{ex:Ursäkta, var är stationen?|uhr-SEHK-tah vahr aer stah-SJOOHN-ehn|Excuse me, where is the station?}}
{{ex:Kan du hjälpa mig?|kahnn dueh YEHL-pah mey|Can you help me?}}
{{ex:Kan ni hjälpa mig?|kahnn nee YEHL-pah mey|Can you help me? (to the company)}}
<p>The preposition trap is <i>vänta</i>, to wait. English says <i>wait for</i>. Swedish says <i>vänta på</i>. <i>för</i> is not English <i>for</i> here. <i>väntar</i> is the present, with the usual <i>-r</i>.</p>
{{ex:Jag väntar på bussen.|yah VEHN-tahr poh BUHS-ehn|I'm waiting for the bus.}}
{{ex:Jag väntar på dig.|yah VEHN-tahr poh dey|I'm waiting for you.}}
{{ex:Vänta på mig!|VEHN-tah poh mey|Wait for me!}}
<div class="tip"><b>Most common mistake:</b> <i>Jag väntar för dig</i> → <i>Jag väntar på dig</i>.</div>
`,
    check: [
      ["To the right is…", ["till höger", "till vänster", "rakt fram", "höger till"], 0, "till höger means to the right. till vänster is left."],
      ["I'm waiting for you, to one person. Which is right?", ["Jag väntar för dig.", "Jag väntar till dig.", "Jag väntar på dig.", "Jag väntar dig."], 2, "vänta takes på, not för. dig is you, one person."],
      ["Where is the bus?", ["Var är buss?", "Var är bussen?", "Var bussen är?", "Bussen är var?"], 1, "Verb second: var first, then är. The definite suffix on buss is -en."]
    ],
    practice: [
      ["mc", "straight ahead =", "rakt fram", "till fram", "rakt höger", "fram rakt", "rakt fram means straight ahead. It does not take till."],
      ["mc", "Where is the station? =", "Var är stationen?", "Var stationen är?", "Var är station?", "Stationen var är?", "Verb second: var first, then är. station takes the definite suffix -en."],
      ["mc", "I'm waiting for the bus. =", "Jag väntar på bussen.", "Jag väntar för bussen.", "Jag väntar till bussen.", "Jag väntar på buss.", "vänta takes på. buss is an en-word, so the definite suffix is -en."],
      ["mc", "Go to the left. =", "Gå till vänster.", "Gå till höger.", "Går till vänster.", "Gå på vänster.", "The imperative has no -r. Left is till vänster."],
      ["mc", "You ask one staff member for help. =", "Kan du hjälpa mig?", "Kan ni hjälpa mig?", "Kan du hjälpa dig?", "Hjälper du mig?", "One person, including staff, is du. ni is for several people or a company, not a polite singular in this course."],
      ["or", "Where is the station?", "Var är stationen", "för", "Verb second: var first, then är, then stationen."],
      ["or", "a ticket", "en biljett", "ett", "biljett is an en-word: en biljett."],
      ["or", "I'm waiting for you. (one person, start with Jag)", "Jag väntar på dig", "för", "vänta takes på, not för."],
      ["fi", "Gå till __.", "Go to the right.", "höger", "vänster|fram|på", "Right is höger. Left is vänster."],
      ["fi", "Jag väntar __ bussen.", "I'm waiting for the bus.", "på", "för|till|i", "vänta takes på, not för. i would mean in the bus."],
      ["fi", "Bussen __ till höger.", "The bus is on the right.", "är", "heter|har|går", "är places the bus. går would mean it is moving that way."],
      ["ty", "Where is the bus? (use är)", "Var är bussen", "var · buss · definite", "tåget heter", "The definite suffix is -en."],
      ["ty", "Today the bus is on the right. (start with Idag)", "Idag är bussen till höger", "idag · är · till höger", "vänster för", "Verb second: idag first, then är, then bussen."],
      ["ty", "Go straight ahead.", "Gå rakt fram", "gå · rakt fram · imperative", "går till", "The imperative has no -r. Straight ahead is rakt fram."]
    ]
  },
  {
    id: "past",
    title: "The past: pratade, var, hade",
    blurb: "Talk about yesterday with pratade, var, and hade.",
    deck: "Days, dates and weather",
    body: `
<p>English has a pile of past forms: talked, was, had, went, ate. This lesson keeps three. <i>pratade</i>, <i>var</i> and <i>hade</i>. That is enough for yesterday. The form that goes with <i>har</i>, as in <i>har pratat</i>, is not in this course. Do not build it. Other pasts, such as went or ate, wait too.</p>
<h3>pratade, var, hade</h3>
<div class="tbl"><table><tr><th>Now</th><th>Yesterday</th><th>English</th></tr>
<tr><td class="k">pratar</td><td class="k">pratade</td><td>talk, talked</td></tr>
<tr><td class="k">är</td><td class="k">var</td><td>is, was</td></tr>
<tr><td class="k">har</td><td class="k">hade</td><td>have, had</td></tr>
</table></div>
<p><i>pratar</i> is the present. <i>pratade</i> is the past. The ending <i>-ade</i> is the same for every person. <i>Jag pratade</i>, <i>du pratade</i>, <i>hon pratade</i>, <i>vi pratade</i>. There is no extra ending for he or she. <i>med</i> means with, as before.</p>
{{ex:Jag pratade med Anna.|yah PRAH-tah-deh mayd AHNN-ah|I talked with Anna.}}
{{ex:Jag pratade inte med Anna.|yah PRAH-tah-deh IHN-teh mayd AHNN-ah|I didn't talk with Anna.}}
<p><i>var</i> is the past of <i>är</i>. It means was or were, and it is the same word for every person. The adjective still matches. <i>Huset var stort</i>, with <i>-t</i>, because <i>hus</i> is an ett-word. <i>Bilen var stor</i>, with no <i>-t</i>.</p>
{{ex:Jag var trött.|yah vahr trurt|I was tired.}}
{{ex:Jag var inte trött.|yah vahr IHN-teh trurt|I was not tired.}}
{{ex:Huset var stort.|HUEH-seht vahr stoohrt|The house was big.}}
{{ex:Bilen var stor.|BEE-lehn vahr stoohr|The car was big.}}
<p><i>hade</i> is the past of <i>har</i>. It means had. <i>Vi hade fika</i> is the ordinary way to say we had a coffee break.</p>
{{ex:Jag hade en bil.|yah HAHDD-eh ayn beel|I had a car.}}
{{ex:Jag hade ett hus.|yah HAHDD-eh eht huehs|I had a house.}}
{{ex:Vi hade fika.|vee HAHDD-eh FEE-kah|We had fika.}}
<h3>igår, and two words spelled var</h3>
<p><i>igår</i> means yesterday. It is one word. Put it first and the verb stays second. <i>inte</i> still follows the verb, and when the subject has moved after the verb, <i>inte</i> follows the subject: <i>Igår pratade jag inte med Anna</i>.</p>
{{ex:Igår pratade jag med Anna.|ih-GOHR PRAH-tah-deh yah mayd AHNN-ah|Yesterday I talked with Anna.}}
{{ex:Igår var jag i Stockholm.|ih-GOHR vahr yah ee STAWK-hawlm|Yesterday I was in Stockholm.}}
<p><i>var</i> is also the question word where. The sentence shows which one you mean. <i>Var är stationen?</i> asks where. <i>Jag var trött</i> says I was tired. <i>Var var du?</i> asks where were you. The first <i>var</i> is where. The second is was, and it is the second element.</p>
{{ex:Var var du?|vahr vahr dueh|Where were you?}}
{{ex:Det var gott.|deh vahr gawt|That was delicious.}}
<div class="tip"><b>Most common mistake:</b> <i>Igår jag pratade</i> → <i>Igår pratade jag</i>.</div>
`,
    check: [
      ["Yesterday I talked with Anna. Which is right?", ["Igår jag pratade med Anna.", "Igår pratade jag med Anna.", "Igår har jag pratat med Anna.", "Igår jag har pratat med Anna."], 1, "Verb second: igår first, then pratade, then jag. har pratat does not take igår."],
      ["I was tired. Which is right?", ["Jag var trött.", "Jag är trött.", "Jag hade trött.", "Jag pratade trött."], 0, "var is the past of är. hade means had, and pratade means talked."],
      ["The house was big. Which is right?", ["Huset var stor.", "Huset var stora.", "Huset hade stort.", "Huset var stort."], 3, "var is the past of är, and the adjective ending is -t on an ett-word."]
    ],
    practice: [
      ["mc", "I talked with Anna. =", "Jag pratade med Anna.", "Jag pratar med Anna.", "Jag hade med Anna.", "Jag var med Anna.", "pratade is the past of pratar. var med means was with, not talked with."],
      ["mc", "I was tired. =", "Jag var trött.", "Jag är trött.", "Jag hade trött.", "Jag pratade trött.", "var is the past of är."],
      ["mc", "I had a car. =", "Jag hade en bil.", "Jag har en bil.", "Jag hade ett bil.", "Jag var en bil.", "hade is the past of har. bil is an en-word: en bil."],
      ["mc", "Yesterday I was in Stockholm. (start with Igår) =", "Igår var jag i Stockholm.", "Igår jag var i Stockholm.", "Igår hade jag i Stockholm.", "Var igår jag i Stockholm.", "Verb second: igår first, then var, then jag."],
      ["mc", "Where were you? (to one person) =", "Var var du?", "Var är du?", "Var du var?", "Du var var?", "The first var means where. The second var is the past of är."],
      ["or", "Yesterday I talked with Anna. (start with Igår)", "Igår pratade jag med Anna", "har pratar", "Verb second: igår first, then pratade, then jag."],
      ["or", "The house was big. (start with Huset)", "Huset var stort", "stor", "The adjective ending is -t on an ett-word."],
      ["or", "I had a house. (start with Jag)", "Jag hade ett hus", "en", "hus is an ett-word: ett hus."],
      ["fi", "Igår __ jag med Anna.", "Yesterday I talked with Anna.", "pratade", "pratar|var|hade", "pratade is the past of pratar."],
      ["fi", "Jag __ trött.", "I was tired.", "var", "är|hade|pratade", "var is the past of är."],
      ["fi", "Jag hade __ bil.", "I had a car.", "en", "ett|den|det", "bil is an en-word: en bil."],
      ["ty", "Yesterday I was tired. (start with Igår)", "Igår var jag trött", "igår · var · trött", "hade pratade", "Verb second: igår first, then var, then jag."],
      ["ty", "a big car", "en stor bil", "bil · stor · en-word", "ett stort", "bil is an en-word: en stor bil."],
      ["ty", "We had fika. (use hade, start with Vi)", "Vi hade fika|Vi hade en fika", "hade · fika · past of har", "var pratade", "hade is the past of har."]
    ]
  },
  {
    id: "compliments",
    title: "Compliments, and how to answer",
    blurb: "Say something kind about food, work, or a person, and answer with thanks.",
    deck: "Compliments",
    body: `
<p>A compliment is a kind line about food, about work, about something a person did, or about the person. You do not have to be clever. Short is normal. These lines are ordinary speech.</p>
<h3>Food, work, a person</h3>
<p>About food, say <i>Vad gott!</i> It means that's delicious. <i>gott</i> has <i>-t</i> because you are talking about the taste, and that is treated as <i>det</i>, an ett-word. A bun is <i>en bulle</i>, the word inside <i>kanelbulle</i>. The bun itself is an en-word, so the adjective has no <i>-t</i>: <i>Bullen är god</i>. <i>god</i> is the food vowel, the <i>ooh</i> of <i>bok</i>, not the vowel of English <i>good</i>.</p>
{{ex:Vad gott!|vah gawt|That's delicious!}}
{{ex:Bullen är god.|BUHL-ehn aer goohd|The bun is delicious.}}
<p>About work or a finished task, say <i>Bra jobbat!</i> It means well done. It is a fixed phrase. Do not swap in a new verb, and do not build it from <i>jobbar</i>. A normal sentence is different: <i>Du jobbar bra</i> means you work well, and <i>bra</i> does not change.</p>
{{ex:Bra jobbat!|brah YAWB-aht|Well done!}}
{{ex:Du jobbar bra.|dueh YAWB-ahr brah|You work well.}}
<p>About a person, say <i>Du är snäll</i>. It means you are kind. <i>snäll</i> has no <i>-t</i>, because you are talking about a person. To you all, and only when you mean several people, say <i>Ni är snälla</i>, with <i>-a</i>. <i>Det var snällt</i> means that was kind. <i>det</i> is neuter, so the adjective ending is <i>-t</i>: <i>snällt</i>, not <i>snäll</i>. <i>var</i> is the past of <i>är</i>, from the last lesson.</p>
{{ex:Du är snäll.|dueh aer snehl|You're kind.}}
{{ex:Ni är snälla.|nee aer SNEHL-ah|You all are kind.}}
{{ex:Tack, det var snällt.|tahkk deh vahr snehlt|Thanks, that was kind.}}
<h3>What a nice…</h3>
<p><i>vilken</i> and <i>vilket</i> mean what a. <i>vilken</i> goes with an en-word, <i>vilket</i> with an ett-word. The adjective still agrees. <i>fin</i> means nice. No extra <i>en</i> or <i>ett</i> after <i>vilken</i>, and no definite suffix on the noun.</p>
<div class="tbl"><table><tr><th></th><th>en-word</th><th>ett-word</th></tr>
<tr><td>what a</td><td class="k">Vilken fin bil!</td><td class="k">Vilket fint hus!</td></tr>
<tr><td>adjective</td><td class="k">fin</td><td class="k">fint</td></tr>
</table></div>
{{ex:Vilken fin tröja!|VIHL-kehn feen TREUH-yah|What a nice sweater!}}
{{ex:Vilket fint hus!|VIHL-keht feent huehs|What a nice house!}}
<h3>How to answer</h3>
<p>When someone says a kind thing to you, answer <i>Tack</i>, or <i>Tack, det var snällt</i>. Thanks is the whole answer. You do not have to give a compliment back. You do not have to say no. If you want to say something kind back, and you mean it, you can. Nothing in the language requires it. <i>du</i> is for one person, including a cook, a classmate or a coworker. <i>Varsågod</i> is for handing something over, or for answering <i>tack</i>. It is not the ordinary answer to a compliment.</p>
{{ex:Tack!|tahkk|Thanks!}}
<div class="tip"><b>Most common mistake:</b> a required return, <i>Du är också snäll</i> → <i>Tack</i>, or <i>Tack, det var snällt</i>.</div>
`,
    check: [
      ["What is the ordinary answer to a compliment, with nothing said back?", ["Tack, det var snällt.", "Du är också snäll.", "Nej, det är jag inte.", "Varsågod."], 0, "Answer with thanks. A return, a no, or varsågod is not required."],
      ["What a nice house. Which is right?", ["Vilken fint hus!", "Vilket fin hus!", "Vilket fint hus!", "Vilken fint huset!"], 2, "hus is an ett-word, so vilket, and the adjective ending is -t: fint."],
      ["You're kind, to one person. Which is right?", ["Du är snällt.", "Du är snälla.", "Ni är snäll.", "Du är snäll."], 3, "One person is du, and snäll has no -t. snälla is for more than one person."]
    ],
    practice: [
      ["mc", "That's delicious, about food in general. =", "Vad gott!", "Vad snällt!", "Bra jobbat!", "Vilken fin mat!", "About food, say Vad gott. gott takes -t."],
      ["mc", "Well done! =", "Bra jobbat!", "Bra jobbade!", "Du är snäll!", "Vad gott!", "Bra jobbat is the fixed phrase for well done. It is not built from jobbar."],
      ["mc", "What a nice sweater! =", "Vilken fin tröja!", "Vilket fin tröja!", "Vilken fint tröja!", "Vilken fin tröjan!", "tröja is an en-word, so vilken, and fin has no -t."],
      ["mc", "Someone says Du är snäll. The ordinary answer is…", "Tack, det var snällt.", "Du är också snäll.", "Nej, det är jag inte.", "Varsågod.", "Answer with thanks. A return is not required."],
      ["mc", "You all are kind. =", "Ni är snälla.", "Ni är snäll.", "Du är snälla.", "Ni är snällt.", "you all is ni, and the plural adjective ending is -a."],
      ["or", "What a nice car!", "Vilken fin bil", "vilket", "bil is an en-word: vilken fin bil."],
      ["or", "Thanks, that was kind. (start with Tack)", "Tack det var snällt", "snäll", "det is neuter, so the adjective ending is -t: snällt."],
      ["or", "Today you are kind. (to one person, start with Idag)", "Idag är du snäll", "ni", "Verb second: idag first, then är, then du."],
      ["fi", "Vilket __ hus!", "What a nice house!", "fint", "fin|fina|gott", "hus is an ett-word, so the adjective ending is -t: fint."],
      ["fi", "Du är __.", "You're kind, to one person.", "snäll", "snällt|snälla|gott", "A person takes snäll, with no -t."],
      ["fi", "Tack, det var __.", "Thanks, that was kind.", "snällt", "snäll|snälla|gott", "det is neuter, so the adjective ending is -t: snällt."],
      ["ty", "The house is nice.", "Huset är fint", "hus · fin · definite", "fin bilen", "The definite ending on hus is -et."],
      ["ty", "Yesterday the bun was delicious. (start with Igår)", "Igår var bullen god", "igår · var · god", "gott snällt", "Verb second: igår first, then var, then bullen."],
      ["ty", "Answer a compliment. (Tack, or Tack, det var snällt)", "Tack, det var snällt|Tack", "tack · snällt · thanks is enough", "du också", "Answer with thanks. A return compliment is not required."]
    ]
  },
  {
    id: "traps",
    title: "Traps for English speakers",
    blurb: "Catch the Swedish words that do not mean what they look like in English.",
    deck: "Traps for English speakers",
    body: `
<p>A few Swedish words look like English and mean something else. Learn the Swedish meaning. The spelling is not the English word.</p>
<div class="tbl"><table><tr><th>Swedish</th><th>It means</th><th>Remember</th></tr>
<tr><td class="k">bra</td><td>good</td><td>The clothing is <i>en behå</i>.</td></tr>
<tr><td class="k">glass</td><td>ice cream</td><td>The material, and a drinking glass, is <i>glas</i>, one <i>s</i>.</td></tr>
<tr><td class="k">gift</td><td>poison, and also married</td><td>A present is <i>en gåva</i> or <i>en present</i>.</td></tr>
<tr><td class="k">barn</td><td>a child</td><td>A farm building is <i>en lada</i>.</td></tr>
<tr><td class="k">semester</td><td>vacation</td><td>A school term is <i>en termin</i>.</td></tr>
<tr><td class="k">godis</td><td>candy</td><td></td></tr>
<tr><td class="k">rolig</td><td>fun, funny</td><td>Calm is <i>lugn</i>.</td></tr>
<tr><td class="k">chef</td><td>a boss</td><td>A cook at work is <i>en kock</i>.</td></tr>
<tr><td class="k">kiss</td><td>pee</td><td>A kiss is <i>en puss</i>.</td></tr>
<tr><td class="k">fart</td><td>speed</td><td><i>i hög fart</i> means at high speed.</td></tr>
</table></div>
{{ex:bra|brah|good}}
{{ex:en glass|ayn glahss|an ice cream}}
{{ex:ett glas|eht glahs|a glass}}
{{ex:Anna är gift.|AHNN-ah aer yihft|Anna is married.}}
{{ex:ett barn|eht bahrn|a child}}
{{ex:en rolig film|ayn ROOH-lihg fihlm|a fun movie}}
{{ex:en gåva|ayn GOH-vah|a present}}
<p><i>glass</i> has two <i>s</i> and a short <i>a</i>. One ice cream is <i>en glass</i>. <i>glas</i> has one <i>s</i> and a long <i>a</i>. <i>ett glas vatten</i> is a glass of water. <i>barn</i> is an ett-word: <i>ett barn</i>, <i>barnet</i>, and the plural is still <i>barn</i>. <i>rolig</i> has no <i>-t</i> on an en-word. For a situation, <i>det</i> is neuter, so calm is <i>lugnt</i>. <i>fart</i> is an ordinary noun for speed. <i>kiss</i> means pee. Say <i>en puss</i> for a kiss, and leave it there.</p>
{{ex:i hög fart|ee heuhg fahrt|at high speed}}
{{ex:kiss|kihs|pee}}
{{ex:en puss|ayn puhs|a kiss}}
{{ex:Det var lugnt.|deh vahr luhngnt|It was calm.}}
<h3>want, don't have to, possibly</h3>
<p><i>vill</i> means want. It is not the future. <i>Jag vill jobba</i> means I want to work. Tomorrow is <i>ska</i>, or the present with the verb in second place. <i>Imorgon ska jag jobba. Imorgon jobbar jag.</i></p>
{{ex:Jag vill jobba.|yah vihl YAWB-ah|I want to work.}}
{{ex:Imorgon ska jag jobba.|ih-MAWR-gawn skah yah YAWB-ah|I'm going to work tomorrow.}}
{{ex:Imorgon jobbar jag.|ih-MAWR-gawn YAWB-ahr yah|I'm working tomorrow.}}
<p><i>måste inte</i> means you do not have to. You are allowed to skip it. Must not, not allowed, is <i>får inte</i>. <i>får</i> here means allowed. <i>Jag får gå</i> means I may go.</p>
{{ex:Jag måste inte gå.|yah MAWS-teh IHN-teh goh|I don't have to go.}}
{{ex:Jag får inte gå.|yah fohr IHN-teh goh|I must not go.}}
<p><i>eventuellt</i> means possibly, not eventually. <i>Eventuellt kommer Anna</i> means Anna is possibly coming. <i>kommer</i> is the same verb as in <i>Jag kommer från</i>. Eventually, at last, is <i>till sist</i>. You will also see <i>slutligen</i>.</p>
{{ex:Eventuellt kommer Anna.|eh-vehn-tuh-EHLT KAWM-ehr AHNN-ah|Anna is possibly coming.}}
{{ex:till sist|tihl sihst|eventually, at last}}
<p>One calque from the directions lesson, because it sticks: <i>Jag väntar på dig</i>, not <i>Jag väntar för dig</i>. <i>för</i> is not English <i>for</i> in that sentence.</p>
{{ex:Jag väntar på dig.|yah VEHN-tahr poh dey|I'm waiting for you.}}
<div class="tip"><b>Most common mistake:</b> <i>Jag väntar för dig</i> → <i>Jag väntar på dig</i>. And must not is not <i>måste inte</i>. <i>Jag måste inte gå</i> means you do not have to. <i>Jag får inte gå</i> means you must not.</div>
`,
    check: [
      ["What does glass mean?", ["ice cream", "a glass to drink from", "a present", "calm"], 0, "glass, with two s, is ice cream. A glass you drink from is glas, one s."],
      ["What does Jag måste inte gå mean?", ["I must not go", "I don't have to go", "I don't want to go", "I am not going"], 1, "måste inte means you do not have to. Must not is får inte."],
      ["What does rolig mean?", ["calm", "speed", "fun, or funny", "married"], 2, "rolig means fun or funny. Calm is lugn."]
    ],
    practice: [
      ["mc", "bra means…", "good", "a piece of clothing", "ice cream", "a boss", "bra means good. The clothing is en behå."],
      ["mc", "semester means…", "vacation", "a school term", "a week", "candy", "semester means vacation. A school term is en termin."],
      ["mc", "I must not go. =", "Jag får inte gå.", "Jag måste inte gå.", "Jag vill inte gå.", "Jag ska inte gå.", "Must not is får inte. måste inte means you do not have to."],
      ["mc", "vill in Jag vill ha kaffe means…", "want", "will, the future", "must", "like", "vill means want. The future is ska, or the present."],
      ["mc", "I'm waiting for you. (one person) =", "Jag väntar på dig.", "Jag väntar för dig.", "Jag väntar till dig.", "Jag väntar om dig.", "vänta takes på, not för."],
      ["or", "a child", "ett barn", "en", "barn is an ett-word: ett barn."],
      ["or", "I must not go. (start with Jag)", "Jag får inte gå", "måste", "inte goes after får."],
      ["or", "an ice cream", "en glass", "glas", "glass, with two s, means ice cream. One s is the material."],
      ["fi", "Jag väntar __ dig.", "I'm waiting for you.", "på", "för|till|om", "vänta takes på, not för."],
      ["fi", "__ barn", "a child", "ett", "en|den|det", "barn is an ett-word: ett barn."],
      ["fi", "Jag __ inte gå.", "I must not go.", "får", "måste|vill|ska", "Must not is får inte. måste inte means you do not have to."],
      ["ty", "The car is big.", "Bilen är stor", "bil · stor · definite", "stort huset", "The definite suffix is -en."],
      ["ty", "Today I want to work. (start with Idag, use vill jobba)", "Idag vill jag jobba", "idag · vill · jobba · want, not the future", "ska för", "Verb second: idag first, then vill, then jag."],
      ["ty", "I don't have to go. (use måste, start with Jag)", "Jag måste inte gå", "måste inte · do not have to", "får att", "måste inte means you do not have to."]
    ]
  }
];
