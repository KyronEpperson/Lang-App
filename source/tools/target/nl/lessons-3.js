/* en-nl lessons 20-28 (diminutives through omdat). Written by EN-NL-3. Every pron is the output of tools/target/nl/respell.js. */
module.exports = [
  {
    id: "diminutives",
    title: "Diminutives",
    blurb: "Add the little ending to a noun, and remember that every diminutive is a het-word.",
    deck: "Food and drink",
    body: `
<p>English puts a separate word in front of the noun: a little house, a small man. Dutch adds a short ending to the noun itself. The ending to listen for is the one spelled <b>-tje</b>. You hear it in <b>kaartje</b> and in <b>beetje</b>, a little bit. The pronunciation line writes that ending as <i>tyuh</i>.</p>
{{ex:het kaartje|uht KAAHR-tyuh|the ticket}}
{{ex:een beetje|uhn BAY-tyuh|a little bit}}
<h3>A few spellings, one idea</h3>
<p>The letters change with the shape of the noun. You do not need a full chart. Learn the form on the word you meet. <b>Kaart</b> ends in t, so <b>kaart</b> plus <b>je</b> is written <b>kaartje</b>. At the station that word is a ticket. It can also be a small card. <b>Man</b> has a short vowel plus a single n, so the n doubles and the ending is <b>-etje</b>: <b>mannetje</b>. <b>Boom</b> has a long vowel plus m, so the ending is <b>-pje</b>: <b>boompje</b>. <b>Huis</b> simply adds <b>-je</b>: <b>huisje</b>. <b>Auto</b> ends in a single o, and the diminutive writes that o twice before <b>-tje</b>: <b>autootje</b>.</p>
{{ex:het huisje|uht HUY-shuh|the little house}}
{{ex:het boompje|uht BOHMP-yuh|the little tree}}
{{ex:het mannetje|uht MAH-nuh-tyuh|the little man}}
{{ex:het autootje|uht OW-toh-tyuh|the little car}}
<h3>Every diminutive is a het-word</h3>
<p><b>De</b> and <b>het</b> both mean the, and you already store each noun as a de-word or a het-word. A diminutive is a het-word even when the plain noun was a de-word. <b>De kaart</b> becomes <b>het kaartje</b>. <b>De man</b> becomes <b>het mannetje</b>. <b>De boom</b> becomes <b>het boompje</b>. <b>De auto</b> becomes <b>het autootje</b>. <b>Het huis</b> was already a het-word, and it stays <b>het huisje</b>. You already know <b>het meisje</b>. That word is a diminutive too, which is why its article is het. For more than one, add <b>-s</b>. The article goes back to <b>de</b>, because every plural is a de-word: <b>de kaartjes</b>.</p>
<h3>Not always small</h3>
<p>Sometimes the ending really means small. Often it is just the ordinary word. <b>Een beetje</b> is a little bit, the same <b>beetje</b> you already use in <b>een beetje Nederlands</b>. At lunch, <b>een kopje koffie</b> is a cup of coffee, and <b>een broodje kaas</b> is a roll with cheese. Dutch sets the two nouns side by side. There is no word for of.</p>
{{ex:een kopje koffie|uhn KAWP-yuh KAW-fee|a cup of coffee}}
{{ex:een broodje kaas|uhn BROHD-yuh kaahs|a roll with cheese}}
<p>The pronunciation line for <b>broodje</b> is approximate. The d before <b>je</b> sounds like t, so the spoken form is closer to the <i>ty</i> of <b>kaartje</b>. <b>kopje</b> is simply <b>kop</b> plus <b>je</b>.</p>
<div class="tip"><b>Most common mistake:</b> keeping the old article. <b>de kaartje</b> → <b>het kaartje</b>. The little ending makes a het-word.</div>
`,
    check: [
      ["Which article goes with kaartje?", ["de", "het", "een, and never het", "dat, because it is far"], 1, "A diminutive is a het-word: het kaartje, even though de kaart is a de-word."],
      ["What does een kopje koffie mean?", ["an empty little cup", "a cup of coffee", "coffee with a little milk", "a coffee cake"], 1, "Dutch puts kopje and koffie side by side. There is no word for of."],
      ["What is the plural of het kaartje?", ["het kaartjes", "de kaartje", "de kaartjes", "het kaarten"], 2, "Diminutives add -s in the plural, and every plural takes de: de kaartjes."]
    ],
    practice: [
      ["mc", "the ticket =", "het kaartje", "de kaartje", "het kaart", "de kaartjes", "A diminutive is a het-word: het kaartje."],
      ["mc", "a little bit =", "een beetje", "een beet", "de beetje", "het beet", "beetje, spelled with -tje, means a little bit."],
      ["mc", "the little man =", "het mannetje", "de mannetje", "het manje", "de mannetjes", "mannetje is a diminutive, so the article is het."],
      ["mc", "a cup of coffee =", "een kopje koffie", "een kopje van koffie", "een koffie kopje", "de kopje koffie", "Dutch puts kopje and koffie side by side, with no word for of."],
      ["mc", "the little car (diminutive) =", "het autootje", "de autootje", "het auto", "de autootje's", "autootje is a diminutive, so it is a het-word."],
      ["or", "the ticket", "het kaartje", "de", "kaartje is a diminutive, so it is a het-word."],
      ["or", "I get up. (statement)", "Ik sta op", "opsta", "opstaan is separable: op sits at the end of the clause."],
      ["or", "a cup of coffee", "een kopje koffie", "van", "The two nouns sit side by side. There is no word for of."],
      ["fi", "__ kaartje", "the ticket", "het", "de|een|dat", "kaartje is a diminutive, so the article is het."],
      ["fi", "een __", "a little bit", "beetje", "beet|kaartje|kopje", "A little bit is beetje."],
      ["fi", "__ kaartjes", "the tickets", "de", "het|een|dat", "A plural takes de: de kaartjes."],
      ["ty", "the little house (diminutive)", "het huisje", "huis · diminutive, het-word", "de", "huisje is a diminutive, so it is a het-word."],
      ["ty", "I get up. (statement)", "Ik sta op", "opstaan · separable, op at the end", "opsta", "separable: the prefix op goes at the end of the clause."],
      ["ty", "a roll with cheese (use broodje)", "een broodje kaas|een broodje met kaas", "broodje · kaas, no word for of", "van", "The two nouns sit side by side, with no van."]
    ]
  },
  {
    id: "food",
    title: "Ordering food and drink",
    blurb: "Order a drink, a roll and the bill with mag ik and ik wil graag.",
    deck: "Food and drink",
    body: `
<p>English says "May I have a coffee?" or "I'd like a soup." Dutch builds those orders from two verbs you already know. <b>Mogen</b> gives <b>mag ik</b>, may I. <b>Willen</b> gives <b>ik wil</b>, I want. <b>Graag</b> softens that into I'd like.</p>
{{ex:Mag ik een koffie?|mahkh ihk uhn KAW-fee|May I have a coffee?}}
{{ex:Ik wil graag een soep.|ihk wihl khraahkh uhn soop|I'd like a soup.}}
{{ex:Een koffie, graag.|uhn KAW-fee khraahkh|A coffee, please.}}
<h3>Please, to the right person</h3>
<p>With the server, stay in the <b>u</b> world you already use in shops: <b>alstublieft</b>. That word is please, and it is also here you are. A friend gets the je-form <b>alsjeblieft</b>. Staff get <b>alstublieft</b>. The short order is the thing plus <b>graag</b>, or the thing plus <b>alstublieft</b>.</p>
{{ex:Mag ik de rekening?|mahkh ihk duh RAY-kuh-nihng|May I have the bill?}}
<p>The menu is still <b>de kaart</b>. The bill is <b>de rekening</b>. Both are de-words. Ask for the menu while you are choosing, and for the bill when you are done.</p>
<h3>de, het, and no word for of</h3>
<p><b>Koffie</b> is a de-word: <b>de koffie</b>. One cup you are ordering is <b>een koffie</b>, because <b>een</b> means a. <b>Water</b> is a het-word: <b>het water</b>. <b>Bier</b> is a het-word too: <b>het bier</b>. <b>Wijn</b>, <b>melk</b>, <b>thee</b> and <b>soep</b> are de-words. <b>Glas</b> is a het-word: <b>het glas</b>. A glass of water is two nouns side by side, the same pattern as <b>een kopje koffie</b>.</p>
{{ex:Ik wil graag water.|ihk wihl khraahkh WAAH-tuhr|I'd like some water.}}
{{ex:een glas water|uhn khlahs WAAH-tuhr|a glass of water}}
{{ex:Mag ik een broodje kaas?|mahkh ihk uhn BROHD-yuh kaahs|May I have a roll with cheese?}}
<p>The line under <b>broodje</b> is still approximate. The spoken form is closer to the <i>ty</i> of <b>kaartje</b>. Some drinks are happy as a bare noun: <b>Ik wil graag water</b> is some water. Fries are <b>de friet</b>. One bowl of soup is <b>een soep</b>.</p>
<h3>The question puts the verb first</h3>
<p><b>Mag ik een koffie?</b> starts with the verb. That is inversion: the verb comes before <b>ik</b>. <b>Ik mag een koffie</b> is a different sentence. It means I am allowed a coffee, which is not an order. A statement keeps the verb second: <b>Ik wil graag een soep</b>. For a noun you do not want, keep <b>geen</b>, which you already use with nouns. <b>Bier</b> stays a het-word even when <b>geen</b> is hiding the article.</p>
{{ex:Ik wil geen bier.|ihk wihl khayn beer|I don't want any beer.}}
{{ex:De koffie is voor Anna.|duh KAW-fee ihs vohr AH-nah|The coffee is for Anna.}}
<p><b>Voor</b> means for. <b>De koffie is voor Anna</b> keeps <b>de</b>, because this is the coffee in front of you, and the verb stays second.</p>
<div class="tip"><b>Most common mistake:</b> stating a permission instead of asking. <b>Ik mag een koffie</b> → <b>Mag ik een koffie?</b> The order is a question, so the verb comes first.</div>
`,
    check: [
      ["How do you ask for a coffee?", ["Mag ik een koffie?", "Ik mag een koffie.", "Wil ik een koffie?", "Mag een koffie ik?"], 0, "The order is a question, so mag comes before ik."],
      ["Which article does water take?", ["de", "het", "dat, because you can see it", "een, and never het"], 1, "water is a het-word: het water."],
      ["You want the bill from the server. Which please do you use?", ["alsjeblieft", "dank je wel", "alstublieft", "geen graag"], 2, "Staff get the u-form alstublieft. alsjeblieft is the je-form, for a friend."]
    ],
    practice: [
      ["mc", "May I have a coffee? =", "Mag ik een koffie?", "Ik mag een koffie.", "Wil ik een koffie?", "Mag ik van koffie?", "The request is a question, so mag comes before ik."],
      ["mc", "I'd like a soup. =", "Ik wil graag een soep.", "Graag ik wil een soep.", "Ik mag graag een soep.", "Ik wil soep graag mag.", "graag softens wil into I'd like, and wil stays in second place."],
      ["mc", "the water =", "het water", "de water", "het koffie", "een waters", "water is a het-word."],
      ["mc", "the bill, to the server =", "De rekening, alstublieft.", "De rekening, alsjeblieft.", "Het rekening, alstublieft.", "De kaart, alstublieft.", "Staff get alstublieft. The bill is de rekening, the menu is de kaart."],
      ["mc", "I don't want any beer. =", "Ik wil geen bier.", "Ik wil niet bier.", "Ik wil geen het bier.", "Ik ben geen bier.", "geen negates the noun bier. niet is the wrong word here."],
      ["or", "the water", "het water", "de", "water is a het-word."],
      ["or", "May I have the bill? (start with Mag)", "Mag ik de rekening", "het", "inversion: Mag comes before ik. rekening is a de-word, so de, not het."],
      ["or", "the coffee", "de koffie", "het", "koffie is a de-word."],
      ["fi", "__ water", "the water", "het", "de|een|dat", "water is a het-word, so the is het."],
      ["fi", "Ik wil __ een soep.", "I'd like a soup.", "graag", "niet|geen|mag", "graag softens wil into I'd like."],
      ["fi", "Mag __ de rekening?", "May I have the bill?", "ik", "je|u|mij", "The question is May I, so the word after mag is ik."],
      ["ty", "the coffee", "de koffie", "koffie · de-word", "het", "koffie is a de-word."],
      ["ty", "May I have a coffee?", "Mag ik een koffie|Mag ik een koffie alstublieft|Mag ik alstublieft een koffie", "mogen · inversion, verb before ik", "de", "inversion: Mag comes before ik."],
      ["ty", "I'd like a soup. (start with Ik wil, use een)", "Ik wil graag een soep|Ik wil een soep|Ik wil een soep graag", "willen · graag, one bowl", "wilt", "graag makes wil into I'd like. With ik the verb stays wil."]
    ]
  },
  {
    id: "travel",
    title: "Directions",
    blurb: "Ask where something is, and say left, right and straight ahead, including to a stranger.",
    deck: "Around town and directions",
    body: `
<p>English says turn left, go straight, the station is on the right. Dutch has three small words for the direction itself. <b>Links</b> is left. <b>Rechts</b> is right. <b>Rechtdoor</b> is straight ahead, and it is one word.</p>
{{ex:Waar is het station?|waahr ihs uht stah-SHAWN|Where is the station?}}
{{ex:Het museum is links.|uht mue-ZAY-uhm ihs lihnks|The museum is on the left.}}
<h3>de-word or het-word, still</h3>
<p><b>Station</b>, <b>museum</b> and <b>centrum</b> are het-words: <b>het station</b>, <b>het museum</b>, <b>het centrum</b>. <b>Straat</b> and <b>winkel</b> are de-words: <b>de straat</b>, <b>de winkel</b>. <b>Winkel</b> is a store. The train is the de-word you already use: <b>Ik neem de trein</b>, I'm taking the train.</p>
<h3>The command: stem, or u with -t</h3>
<p>English uses one word, go, for everybody. Dutch has a stem and a u-form. The stem is the <b>ik</b> form, with no extra <b>-t</b>. With a friend, use the stem. With a stranger, the stem is also fine, and so is the u-form. The u-form keeps <b>-t</b>. <b>U</b> never drops it. <b>Ga u rechtdoor</b> is missing that <b>-t</b>.</p>
<div class="tbl"><table><tr><th></th><th>Stem</th><th>u-form</th></tr><tr><td>straight ahead</td><td class="k">Ga rechtdoor.</td><td class="k">Gaat u rechtdoor.</td></tr><tr><td>left</td><td class="k">Ga links.</td><td class="k">Gaat u links.</td></tr><tr><td>turn left</td><td class="k">Sla linksaf.</td><td class="k">Slaat u linksaf.</td></tr></table></div>
{{ex:Ga rechtdoor.|khaah rehkht-DOHR|Go straight ahead.}}
{{ex:Gaat u rechtdoor.|khaaht uu rehkht-DOHR|Go straight ahead. (u-form)}}
{{ex:Sla linksaf.|slaah lihnks-AHF|Turn left.}}
{{ex:Slaat u linksaf.|slaaht uu lihnks-AHF|Turn left. (u-form)}}
<p><b>Sla rechtsaf</b> is turn right. <b>Linksaf</b> and <b>rechtsaf</b> are single words. <b>Sla</b> here is the command turn. <b>Neem de eerste straat links</b> is take the first street on the left. <b>Eerste</b> means first. You can also say <b>Ga linksaf</b> for turn left. <b>Naar</b> is fine before left and right: <b>Ga naar links</b>. <b>Rechtdoor</b> does not take <b>naar</b>.</p>
{{ex:Neem de eerste straat links.|naym duh AYR-stuh straaht lihnks|Take the first street on the left.}}
<h3>Next to, and then</h3>
<p><b>Naast</b> means next to. The store can be the first piece of the sentence, or the place can. Either way the verb stays second.</p>
{{ex:De winkel is naast het station.|duh WIHN-kuhl ihs naahst uht stah-SHAWN|The store is next to the station.}}
{{ex:Naast het station is de winkel.|naahst uht stah-SHAWN ihs duh WIHN-kuhl|Next to the station is the store.}}
{{ex:Ga rechtdoor en dan links.|khaah rehkht-DOHR ehn dahn lihnks|Go straight ahead and then left.}}
<p><b>Dan</b> in that sentence means then. You will meet it again later, with a different job.</p>
<p>A one-word answer is enough when the question is clear. <b>Links</b>. <b>Rechts</b>. <b>Rechtdoor</b>. A full sentence names the place and keeps the verb second: <b>Het museum is links</b>, <b>Het centrum is rechtdoor</b>. <b>Rechts</b> and <b>rechtdoor</b> are easy to mix, because both start with the same letters. <b>Rechts</b> is right. <b>Rechtdoor</b> is straight ahead, one word, with <b>door</b> glued on. If a stranger looks unsure, the u-form is the clearer politeness: <b>Gaat u rechtdoor</b>, <b>Slaat u linksaf</b>. The stem still works, and plenty of people use it on the street.</p>
<div class="tip"><b>Most common mistake:</b> dropping the -t on u. <b>Ga u rechtdoor</b> → <b>Gaat u rechtdoor</b>. The stem <b>Ga rechtdoor</b> is a fine command on its own. It does not keep a loose <b>u</b> after a verb that lost its -t.</div>
`,
    check: [
      ["What does rechtdoor mean?", ["left", "right", "straight ahead", "turn right"], 2, "rechtdoor is one word, and it means straight ahead."],
      ["Which u-form tells a stranger to go straight?", ["Ga u rechtdoor.", "Gaat je rechtdoor.", "Gaan u rechtdoor.", "Gaat u rechtdoor."], 3, "u never drops -t: Gaat u rechtdoor. The stem Ga rechtdoor is also fine, without u stuck on after a bare stem."],
      ["Which is correct for the station?", ["de station", "het station", "het straat", "de centrum"], 1, "station is a het-word. straat is a de-word, and centrum is a het-word."]
    ],
    practice: [
      ["mc", "straight ahead =", "rechtdoor", "rechts", "links", "rechtsaf", "rechtdoor is one word and means straight ahead."],
      ["mc", "Go straight ahead. (to a friend)", "Ga rechtdoor.", "Gaat rechtdoor.", "Gaat u rechtdoor.", "Gaan rechtdoor.", "A friend gets the stem Ga, with no -t. Save Gaat u for a stranger."],
      ["mc", "Go straight ahead. (u-form)", "Gaat u rechtdoor.", "Ga u rechtdoor.", "Gaat je rechtdoor.", "Gaan u rechtdoor.", "u never drops -t, so the u-form is Gaat u."],
      ["mc", "the station =", "het station", "de station", "het straat", "de museum", "station is a het-word. straat is a de-word, and museum is a het-word."],
      ["mc", "Turn left. =", "Sla linksaf.", "Sla rechtsaf.", "Ga rechtdoor.", "Slaat linksaf.", "linksaf is turn left. With a friend the command is the stem Sla."],
      ["or", "Where is the station?", "Waar is het station", "de", "inversion: is comes before the subject. station is a het-word, so het, not de."],
      ["or", "the street", "de straat", "het", "straat is a de-word."],
      ["or", "Go straight ahead. (to a friend)", "Ga rechtdoor", "gaat", "A friend gets the stem Ga, with no extra -t."],
      ["fi", "Ga __.", "Go straight ahead. (to a friend)", "rechtdoor", "rechts|links|gaat", "Straight ahead is rechtdoor, one word."],
      ["fi", "__ u rechtdoor.", "Go straight ahead. (u-form)", "Gaat", "Ga|Gaan|Slaat", "u keeps -t, so the form is Gaat. Slaat is the turn verb, not this one."],
      ["fi", "Waar is __ station?", "Where is the station?", "het", "de|een|dat", "station is a het-word."],
      ["ty", "the station", "het station", "station · het-word", "de", "station is a het-word."],
      ["ty", "Where is the museum? (use is)", "Waar is het museum", "waar · inversion, verb before the subject", "de", "inversion: is comes before het museum. museum is a het-word."],
      ["ty", "Go left. (to a friend, use gaan)", "Ga links|Ga naar links|Ga linksaf", "gaan · stem, no -t", "gaat", "A friend gets the stem Ga. naar is also fine before links."]
    ]
  },
  {
    id: "er",
    title: "er is and er zijn",
    blurb: "Say there is and there are, and turn them into a short question.",
    deck: "Home and routine",
    body: `
<p>English says there is a bed and there are two rooms. The word there looks like a place. Dutch uses a small word, <b>er</b>, plus <b>is</b> or <b>zijn</b>. <b>Er</b> is the there in there is. Over there, a real place you can point at, is <b>daar</b>.</p>
{{ex:Er is een bed.|uhr ihs uhn beht|There is a bed.}}
{{ex:Er zijn twee kamers.|uhr zighn tway KAAH-muhrs|There are two rooms.}}
<h3>One, or more than one</h3>
<p>The verb matches the number. One thing takes <b>is</b>. More than one takes <b>zijn</b>. <b>Bed</b> is a het-word: <b>het bed</b>. <b>Kamer</b>, <b>keuken</b>, <b>tafel</b> and <b>deur</b> are de-words. The plural of <b>kamer</b> adds <b>-s</b>, because the word ends in <b>-er</b>: <b>kamers</b>. <b>Bed</b> doubles the d: <b>bedden</b>. <b>Deur</b> adds <b>-en</b>: <b>deuren</b>. Those plurals take <b>de</b>, like every plural: <b>de kamers</b>, <b>de bedden</b>, <b>de deuren</b>.</p>
<div class="tbl"><table><tr><th></th><th>One</th><th>More than one</th></tr><tr><td>statement</td><td class="k">Er is een bed.</td><td class="k">Er zijn twee kamers.</td></tr><tr><td>question</td><td class="k">Is er een bed?</td><td class="k">Zijn er twee kamers?</td></tr><tr><td>none</td><td class="k">Er is geen bed.</td><td class="k">Er zijn geen kamers.</td></tr></table></div>
{{ex:Is er een keuken?|ihs uhr uhn KEUH-kuh|Is there a kitchen?}}
{{ex:Zijn er twee deuren?|zighn uhr tway DEUH-ruh|Are there two doors?}}
{{ex:Er is geen tafel.|uhr ihs khayn TAAH-fuhl|There is no table.}}
{{ex:Er zijn geen kamers.|uhr zighn khayn KAAH-muhrs|There are no rooms.}}
{{ex:Er zijn drie bedden.|uhr zighn dree BEH-duh|There are three beds.}}
<h3>The verb stays second</h3>
<p><b>Er</b> is the first piece, so <b>is</b> or <b>zijn</b> comes right after it. That is the verb in second place. A question puts the verb first: <b>Is er een keuken?</b> A place can also lead, and then the verb is still second. You may hear <b>er</b> in that sentence too. The short form without it is fine, and so is <b>er</b> with the place at the end.</p>
{{ex:In de keuken is een tafel.|ihn duh KEUH-kuh ihs uhn TAAH-fuhl|There is a table in the kitchen.}}
{{ex:Er is een tafel in de keuken.|uhr ihs uhn TAAH-fuhl ihn duh KEUH-kuh|There is a table in the kitchen.}}
<p>Count with the numbers you already know. One bed is <b>Er is een bed</b>. Two rooms are <b>Er zijn twee kamers</b>. Three beds are <b>Er zijn drie bedden</b>. Keep <b>is</b> with one thing and <b>zijn</b> with two or more. <b>geen</b> is the word that removes a noun, the same job it already has next to a noun. <b>Er is geen tafel</b> is there is no table. <b>Er zijn geen kamers</b> is there are no rooms. <b>niet</b> stays with the rest of a sentence, not with these nouns. If the place moves, the verb does not drift. <b>In de keuken is een tafel</b> and <b>Er is een tafel in de keuken</b> are both ordinary, and in both the verb is the second piece. A practice line that says to start with <b>Er</b> wants the <b>er</b> sentence.</p>
<div class="tip"><b>Most common mistake:</b> translating there with the place word. <b>Daar is een bed</b> → <b>Er is een bed</b>. <b>Daar</b> means over there. The there is sentence starts with <b>er</b>.</div>
`,
    check: [
      ["How do you say there are two rooms?", ["Er is twee kamers.", "Er zijn twee kamer.", "Er zijn twee kamers.", "Zijn er twee kamers."], 2, "Two rooms takes zijn, and the plural of kamer is kamers."],
      ["How do you say there is a bed?", ["Daar is een bed.", "Er is een bed.", "Er zijn een bed.", "Het is een bed."], 1, "There is uses er is. daar means over there."],
      ["How do you ask if there is a kitchen?", ["Is er een keuken?", "Er is een keuken?", "Zijn er een keuken?", "Is er de keuken?"], 0, "A yes/no question starts with the verb: Is er. One kitchen, so is, and een."]
    ],
    practice: [
      ["mc", "There is a bed. =", "Er is een bed.", "Daar is een bed.", "Er zijn een bed.", "Er is het bed.", "There is uses er is. daar means over there."],
      ["mc", "There are two rooms. =", "Er zijn twee kamers.", "Er is twee kamers.", "Er zijn twee kamer.", "Zijn er twee kamers.", "Two rooms takes zijn, and the plural is kamers."],
      ["mc", "Is there a kitchen? =", "Is er een keuken?", "Er is een keuken?", "Zijn er een keuken?", "Is er de keuken?", "A yes/no question starts with the verb: Is er."],
      ["mc", "There is no table. =", "Er is geen tafel.", "Er is niet tafel.", "Er zijn geen tafel.", "Er is geen de tafel.", "geen negates the noun. One table, so is."],
      ["mc", "the bed =", "het bed", "de bed", "het kamer", "de bedden", "bed is a het-word. de bedden is the plural."],
      ["or", "There is a bed. (start with Er)", "Er is een bed", "zijn", "verb second: is comes right after er."],
      ["or", "the kitchen", "de keuken", "het", "keuken is a de-word."],
      ["or", "There are two rooms. (start with Er)", "Er zijn twee kamers", "is", "verb second: zijn comes right after er when there is more than one."],
      ["fi", "Er __ een tafel.", "There is a table.", "is", "zijn|ben|bent", "One table takes is."],
      ["fi", "Er zijn twee __.", "There are two rooms.", "kamers", "kamer|kameren|bedden", "kamer adds -s: kamers. bedden means beds."],
      ["fi", "__ er een bed?", "Is there a bed?", "Is", "Zijn|Er|Ben", "One bed, and the question starts with Is."],
      ["ty", "There is a kitchen. (start with Er)", "Er is een keuken", "er · verb second, one kitchen", "zijn", "verb second: is comes right after er."],
      ["ty", "the bed", "het bed", "bed · het-word", "de", "bed is a het-word."],
      ["ty", "There are three beds. (start with Er)", "Er zijn drie bedden", "bed · plural bedden, double the d", "is", "Three beds takes zijn, and the plural is bedden."]
    ]
  },
  {
    id: "deze-die",
    title: "deze, dit, die, dat",
    blurb: "Point to something near or far and choose deze, dit, die or dat from de and het.",
    deck: "Shopping and clothes",
    body: `
<p>English this and that stay the same in front of every noun. Dutch asks two questions. Is it near, or far? And is the noun a de-word, or a het-word? Near is this. Far is that.</p>
<div class="tbl"><table><tr><th></th><th>Near (this)</th><th>Far (that)</th></tr><tr><td>de-word</td><td class="k">deze jas</td><td class="k">die jas</td></tr><tr><td>het-word</td><td class="k">dit huis</td><td class="k">dat huis</td></tr><tr><td>plural</td><td class="k">deze huizen</td><td class="k">die huizen</td></tr></table></div>
{{ex:deze jas|DAY-zuh yahs|this coat}}
{{ex:dit huis|diht huys|this house}}
{{ex:die auto|dee OW-toh|that car}}
{{ex:dat boek|daht book|that book}}
<h3>Match the noun that is in the sentence</h3>
<p><b>Jas</b>, <b>auto</b> and <b>trein</b> are de-words, so they take <b>deze</b> and <b>die</b>. <b>Huis</b>, <b>boek</b> and <b>station</b> are het-words, so they take <b>dit</b> and <b>dat</b>. The shopping question <b>Wat kost dat?</b> stays as it is when you point and do not name the thing. Once the noun is in the sentence, match it.</p>
{{ex:Ik wil deze jas.|ihk wihl DAY-zuh yahs|I want this coat.}}
{{ex:Wat kost dat boek?|waht kawst daht book|How much is that book?}}
{{ex:Ik woon in dit huis.|ihk wohn ihn diht huys|I live in this house.}}
<h3>Plurals use deze and die</h3>
<p>Every plural is a de-word, even when the singular was het. These houses is <b>deze huizen</b>. Those houses is <b>die huizen</b>. Those cars is <b>die auto's</b>. <b>Dit huizen</b> copies the singular het and puts it on a plural. The plural wants <b>deze</b> or <b>die</b>.</p>
{{ex:Deze huizen zijn leuk.|DAY-zuh HUY-zuh zighn leuhk|These houses are nice.}}
{{ex:die auto's|dee OW-tohs|those cars}}
<p><b>Dit</b> and <b>dat</b> can also point at a whole situation, with no noun after them. You already say <b>Dat is leuk</b>, that's nice. With a noun right there, use the table.</p>
<h3>Say the article first</h3>
<p>Say the article in your head before you pick. <b>de jas</b> takes <b>deze</b> or <b>die</b>. <b>het huis</b> takes <b>dit</b> or <b>dat</b>. Near is the thing in your hand or right beside you. Far is across the room, or the coat you were just talking about. A question uses the same match. <b>Wat kost deze jas?</b> asks the price of this coat. <b>Wat kost dat boek?</b> asks the price of that book. Keep <b>Wat kost dat?</b> for the moment when you point and leave the noun out. If you drop the noun but still mean one thing, the little word remembers it. Pointing at a coat, you can say <b>Deze is voor Anna</b>. Pointing at a book, you can say <b>Dit is voor Anna</b>. The far versions are <b>Die is voor Anna</b> and <b>Dat is voor Anna</b>. In the practice the noun stays in the sentence, so the match is easy to see.</p>
<div class="tip"><b>Most common mistake:</b> one word for this, on every noun. <b>Deze boek</b> → <b>Dit boek</b>. <b>Boek</b> is a het-word, so near is <b>dit</b>.</div>
`,
    check: [
      ["How do you say this house?", ["deze huis", "dat huis", "dit huis", "die huis"], 2, "huis is a het-word and it is near, so dit."],
      ["How do you say that coat?", ["die jas", "dat jas", "deze jas", "dit jas"], 0, "jas is a de-word and it is far, so die."],
      ["How do you say these houses?", ["dit huizen", "dat huizen", "die huizen", "deze huizen"], 3, "A plural is a de-word, so near is deze, and the plural of huis is huizen."]
    ],
    practice: [
      ["mc", "this house =", "dit huis", "deze huis", "dat huis", "die huis", "huis is a het-word and it is near, so dit."],
      ["mc", "that coat =", "die jas", "dat jas", "deze jas", "dit jas", "jas is a de-word and it is far, so die."],
      ["mc", "these houses =", "deze huizen", "dit huizen", "deze huis", "die huizen", "A plural is a de-word, so near is deze. huizen is the plural."],
      ["mc", "How much is this coat? =", "Wat kost deze jas?", "Wat kost dit jas?", "Wat kost die jas?", "Wat kost dat jas?", "jas is a de-word. Near is deze. Far would be die."],
      ["mc", "that book =", "dat boek", "die boek", "dit boek", "deze boek", "boek is a het-word and it is far, so dat."],
      ["or", "this house", "dit huis", "deze", "huis is a het-word, so near is dit, not deze."],
      ["or", "that train", "die trein", "dat", "trein is a de-word, so far is die, not dat."],
      ["or", "Where is that station? (use Waar is)", "Waar is dat station", "die", "inversion: is comes before the subject. station is a het-word, so far is dat."],
      ["fi", "__ huis", "this house", "dit", "deze|dat|die", "huis is a het-word and it is near, so dit."],
      ["fi", "__ jas", "that coat", "die", "dat|dit|deze", "jas is a de-word and it is far, so die."],
      ["fi", "Wat kost __ boek?", "How much is that book?", "dat", "dit|die|deze", "boek is a het-word and it is far, so dat."],
      ["ty", "this book", "dit boek", "boek · het-word, near", "deze", "boek is a het-word, so this is dit."],
      ["ty", "that coat", "die jas", "jas · de-word, far", "dat", "jas is a de-word, so that is die."],
      ["ty", "I want this coat. (start with Ik wil)", "Ik wil deze jas|Ik wil graag deze jas|Ik wil deze jas graag", "willen · deze, de-word", "dit", "jas is a de-word, so this is deze."]
    ]
  },
  {
    id: "perfect",
    title: "The perfect",
    blurb: "Say what you did, with hebben or zijn and the participle at the end.",
    deck: "Travel and transport",
    body: `
<p>English says I worked, I lived there, I bought a ticket, I went. Dutch puts that in the perfect: a helper verb in the ordinary verb spot, and a participle at the end of the clause. You do not need a second past tense for these sentences.</p>
<h3>hebben for most verbs</h3>
<p>Most verbs take <b>hebben</b>. <b>Werken</b> makes <b>gewerkt</b>. <b>Wonen</b> makes <b>gewoond</b>. <b>Kopen</b> does not follow that regular shape: the participle is <b>gekocht</b>. Learn that one with the verb.</p>
{{ex:Ik heb gewerkt.|ihk hehp khuh-WEHRKT|I worked.}}
{{ex:Ik heb in Rotterdam gewoond.|ihk hehp ihn roh-tuhr-DAHM khuh-WOHNT|I lived in Rotterdam.}}
{{ex:Ik heb een kaartje gekocht.|ihk hehp uhn KAAHR-tyuh khuh-KAWKHT|I bought a ticket.}}
<h3>zijn for gaan, komen and zijn</h3>
<p><b>Gaan</b>, <b>komen</b> and <b>zijn</b> take <b>zijn</b> as the helper. So do some other verbs of going somewhere or of change, but not every movement verb does. Most verbs take <b>hebben</b>. If a new verb is not on this short list, do not guess. Use a verb you know. The participles are <b>gegaan</b>, <b>gekomen</b> and <b>geweest</b>.</p>
{{ex:Ik ben naar Amsterdam gegaan.|ihk behn naahr ahm-stuhr-DAHM khuh-KHAAHN|I went to Amsterdam.}}
{{ex:Ik ben gekomen.|ihk behn khuh-KOH-muh|I came.}}
{{ex:Ik ben in Utrecht geweest.|ihk behn ihn UU-trehkht khuh-WAYST|I have been in Utrecht.}}
<h3>Helper second, participle at the end</h3>
<p>The helper sits where the verb always sits. In a statement that is second place. The participle goes to the end of the clause. <b>Vandaag heb ik gewerkt</b> starts with today, so <b>heb</b> comes next, before <b>ik</b>. That is the same inversion you already use after <b>morgen</b>. <b>Ik heb vandaag gewerkt</b> is the other everyday order, with <b>ik</b> first. <b>Niet</b> sits just before the participle: <b>Ik heb niet gewerkt</b>.</p>
{{ex:Vandaag heb ik gewerkt.|vahn-DAAHKH hehp ihk khuh-WEHRKT|I worked today.}}
{{ex:Ik heb niet gewerkt.|ihk hehp neet khuh-WEHRKT|I did not work.}}
<p>A question with <b>je</b> after the verb uses <b>heb</b> and <b>ben</b>, the same drop you already know from <b>werk je</b>. With a stranger, <b>u</b> keeps a form with <b>-t</b>. <b>Heeft u gewerkt?</b> and <b>Hebt u gewerkt?</b> are both used. English often uses a simple past for what happened earlier. Dutch uses this perfect for that job. I worked today is <b>Ik heb vandaag gewerkt</b> or <b>Vandaag heb ik gewerkt</b>. I did not work is <b>Ik heb niet gewerkt</b>, with <b>niet</b> just before the participle. The helper is the verb that counts for second place.</p>
{{ex:Heb je een kaartje gekocht?|hehp yuh uhn KAAHR-tyuh khuh-KAWKHT|Did you buy a ticket?}}
{{ex:Ben je naar huis gegaan?|behn yuh naahr huys khuh-KHAAHN|Did you go home?}}
{{ex:Heeft u gewerkt?|hayft uu khuh-WEHRKT|Did you work? (to a stranger)}}
<h3>Getting up</h3>
<p>Getting up is the separable verb <b>opstaan</b>. It takes <b>zijn</b>. The <b>ge</b> sits inside the prefix: <b>opgestaan</b>. The whole participle stands at the end of the clause.</p>
{{ex:Ik ben opgestaan.|ihk behn AWP-khuh-staahn|I got up.}}
<div class="tip"><b>Most common mistake:</b> leaving the participle in the middle, where English puts the verb. <b>Ik heb gekocht een kaartje</b> → <b>Ik heb een kaartje gekocht</b>.</div>
`,
    check: [
      ["How do you say I went to Amsterdam?", ["Ik heb naar Amsterdam gegaan.", "Ik ben naar Amsterdam gegaan.", "Ik ben naar Amsterdam gaan.", "Ik ben gegaan naar Amsterdam."], 1, "gaan takes zijn, and the participle gegaan goes at the end."],
      ["How do you say I worked?", ["Ik heb gewerkt.", "Ik ben gewerkt.", "Ik heb werken.", "Ik heb werkt."], 0, "werken takes hebben, and the participle is gewerkt."],
      ["In Ik heb een kaartje gekocht, where does gekocht go?", ["Right after heb", "Before een", "At the end", "It replaces heb"], 2, "The helper heb is second. The participle goes at the end of the clause."]
    ],
    practice: [
      ["mc", "I worked. =", "Ik heb gewerkt.", "Ik ben gewerkt.", "Ik heb werken.", "Ik heb werkt.", "werken takes hebben, and the participle is gewerkt."],
      ["mc", "I went to Amsterdam. =", "Ik ben naar Amsterdam gegaan.", "Ik heb naar Amsterdam gegaan.", "Ik ben naar Amsterdam gaan.", "Ik ben gegaan naar Amsterdam.", "gaan takes zijn, and gegaan goes at the end."],
      ["mc", "I bought a ticket. =", "Ik heb een kaartje gekocht.", "Ik heb een kaartje gekoopt.", "Ik ben een kaartje gekocht.", "Ik heb de kaartje gekocht.", "kopen takes hebben. The participle is gekocht. een, because it is one ticket."],
      ["mc", "Did you work? (to a friend) =", "Heb je gewerkt?", "Heeft je gewerkt?", "Ben je gewerkt?", "Heb jij werkt?", "je after the verb takes heb, with no extra -t. werken takes hebben."],
      ["mc", "I got up. =", "Ik ben opgestaan.", "Ik heb opgestaan.", "Ik ben op gestaan.", "Ik heb staan op.", "opstaan takes zijn. ge sits inside the separable verb: opgestaan."],
      ["or", "I did not work. (start with Ik heb)", "Ik heb niet gewerkt", "ben", "verb second: heb is the second word, and gewerkt goes at the end of the clause."],
      ["or", "the train", "de trein", "het", "trein is a de-word."],
      ["or", "I got up. (start with Ik)", "Ik ben opgestaan", "heb", "separable: opgestaan sits at the end of the clause, and opstaan takes zijn."],
      ["fi", "Ik __ gewerkt.", "I worked.", "heb", "ben|bent|hebt", "werken takes hebben, and ik uses heb."],
      ["fi", "Ik ben naar huis __.", "I went home.", "gegaan", "gekomen|gewerkt|gekocht", "went is gaan, so the participle is gegaan. gekomen would be came."],
      ["fi", "__ je gewerkt?", "Did you work? (to a friend)", "Heb", "Heeft|Ben|Bent", "je after the verb takes Heb, with no extra -t."],
      ["ty", "I worked today. (start with Ik heb, vandaag before gewerkt)", "Ik heb vandaag gewerkt", "werken · participle at the end of the clause", "ben", "gewerkt goes at the end of the clause. werken takes hebben."],
      ["ty", "I went home. (start with Ik ben)", "Ik ben naar huis gegaan", "gaan · zijn, participle at the end of the clause", "heb", "gegaan goes at the end of the clause. gaan takes zijn."],
      ["ty", "the ticket (use kaartje)", "het kaartje", "kaartje · diminutive, het-word", "de", "kaartje is a diminutive, so it is a het-word."]
    ]
  },
  {
    id: "adjectives",
    title: "Adjective -e",
    blurb: "Choose the ending: een groot huis, een grote auto, het grote huis, and no -e after is.",
    deck: "Shopping and clothes",
    body: `
<p>English big never changes. Dutch big sometimes gains an <b>-e</b>, and sometimes it does not. The noun decides. <b>Auto</b> is a de-word. <b>Huis</b> is a het-word. You already know both articles.</p>
<div class="tbl"><table><tr><th></th><th>het-word: huis</th><th>de-word: auto</th></tr><tr><td>een</td><td class="k">een groot huis</td><td class="k">een grote auto</td></tr><tr><td>the</td><td class="k">het grote huis</td><td class="k">de grote auto</td></tr><tr><td>after is</td><td class="k">Het huis is groot.</td><td class="k">De auto is groot.</td></tr></table></div>
{{ex:een groot huis|uhn khroht huys|a big house}}
{{ex:een grote auto|uhn KHROH-tuh OW-toh|a big car}}
{{ex:het grote huis|uht KHROH-tuh huys|the big house}}
{{ex:Het huis is groot.|uht huys ihs khroht|The house is big.}}
<h3>Four places to look</h3>
<p>Before a de-word, add <b>-e</b>. That is true with <b>een</b> and with <b>de</b>: <b>een grote auto</b>, <b>de grote auto</b>. <b>Jas</b> is a de-word too, so a red coat is <b>een rode jas</b> and the red coat is <b>de rode jas</b>. Before a het-word with <b>een</b> or <b>geen</b>, there is no <b>-e</b>: <b>een groot huis</b>, <b>geen groot huis</b>. Before a het-word with <b>het</b>, <b>dit</b> or <b>dat</b>, the <b>-e</b> comes back: <b>het grote huis</b>, <b>dit grote huis</b>. After <b>is</b> or <b>zijn</b>, the adjective is not in front of the noun, so there is no <b>-e</b>. One house or many: <b>Het huis is groot</b>, <b>De huizen zijn groot</b>.</p>
{{ex:de rode jas|duh ROH-duh yahs|the red coat}}
{{ex:geen groot huis|khayn khroht huys|not a big house}}
{{ex:dit grote huis|diht KHROH-tuh huys|this big house}}
{{ex:De huizen zijn groot.|duh HUY-zuh zighn khroht|The houses are big.}}
<p>In front of a plural, the adjective takes <b>-e</b>, and the article is <b>de</b>: <b>de grote huizen</b>. A possessive behaves like <b>het</b>, not like <b>een</b>. <b>Mijn grote huis</b> keeps the <b>-e</b>, even though <b>huis</b> is a het-word.</p>
{{ex:de grote huizen|duh KHROH-tuh HUY-zuh|the big houses}}
{{ex:mijn grote huis|mighn KHROH-tuh huys|my big house}}
<h3>The spelling, and three endings that are easy</h3>
<p><b>Groot</b> becomes <b>grote</b>. One o is enough once <b>-e</b> opens the syllable, and you still say the long o. <b>Rood</b> becomes <b>rode</b>. <b>Klein</b> just adds <b>-e</b>: <b>kleine</b>. A short vowel doubles the consonant so it stays short: <b>wit</b> becomes <b>witte</b>.</p>
{{ex:een witte jas|uhn WIH-tuh yahs|a white coat}}
<p>Adjectives that end in <b>-ig</b>, <b>-isch</b> or <b>-lijk</b> have one soft spot. After <b>het</b>, <b>dit</b> or <b>dat</b>, careful Dutch sometimes leaves their <b>-e</b> off. You can leave that option alone. With <b>het</b>, the form with <b>-e</b> is always acceptable: <b>het moeilijke boek</b>, the difficult book. After <b>een</b>, the rule does not change: <b>een moeilijk boek</b>, with no <b>-e</b>. This course does not practice the form without <b>-e</b> after <b>het</b>.</p>
<p>Before you add <b>-e</b>, ask where the adjective sits. In front of a noun, <b>een</b> and <b>geen</b> block it on a singular het-word, and <b>de</b>, <b>het</b>, <b>dit</b>, <b>dat</b>, <b>deze</b>, <b>die</b> and <b>mijn</b> bring it back. After <b>is</b> or <b>zijn</b>, the <b>-e</b> stays off, for one house and for many.</p>
<div class="tip"><b>Most common mistake:</b> copying the -e from a de-word onto een plus a het-word. <b>een grote huis</b> → <b>een groot huis</b>.</div>
`,
    check: [
      ["How do you say a big house?", ["een grote huis", "een groot huis", "het groot huis", "een groter huis"], 1, "huis is a het-word, so after een there is no -e."],
      ["How do you say the big house?", ["het grote huis", "het groot huis", "de grote huis", "een groot huis"], 0, "After het, the het-word takes the adjective ending -e: het grote huis."],
      ["How do you say The house is big?", ["Het huis is grote.", "Het huis groot is.", "Het huis is groter.", "Het huis is groot."], 3, "After is there is no -e, and the verb stays in second place: Het huis is groot."]
    ],
    practice: [
      ["mc", "a big house =", "een groot huis", "een grote huis", "het groot huis", "een groter huis", "huis is a het-word, so after een there is no -e."],
      ["mc", "a big car =", "een grote auto", "een groot auto", "de grote auto", "een grotere auto", "auto is a de-word, so the adjective ending is -e. de grote auto would be the big car."],
      ["mc", "the big house =", "het grote huis", "het groot huis", "de grote huis", "een groot huis", "After het, the het-word takes the adjective ending -e."],
      ["mc", "The house is big. =", "Het huis is groot.", "Het huis is grote.", "Het huis groot is.", "De huis is groot.", "After is there is no -e. huis is a het-word, so the article is het."],
      ["mc", "my big house =", "mijn grote huis", "mijn groot huis", "mijn grote huisje", "het mijn huis", "A possessive works like het: mijn grote huis keeps the adjective ending -e."],
      ["or", "a big house", "een groot huis", "grote", "huis is a het-word, so there is no -e after een."],
      ["or", "a big car", "een grote auto", "groot", "auto is a de-word, so the adjective ending is -e."],
      ["or", "Tomorrow I am going to school. (start with Morgen)", "Morgen ga ik naar school", "gaat", "verb second: ga comes right after Morgen, before ik."],
      ["fi", "een __ huis", "a big house", "groot", "grote|groter|grootst", "huis is a het-word, so after een there is no -e."],
      ["fi", "een __ auto", "a big car", "grote", "groot|groter|grootst", "auto is a de-word, so the adjective takes -e."],
      ["fi", "Het huis is __.", "The house is big.", "groot", "grote|groter|grootst", "After is there is no -e on groot."],
      ["ty", "a red coat", "een rode jas", "rood · de-word, adjective ending -e", "rood", "jas is a de-word, so the adjective ending is -e: rode."],
      ["ty", "The house is big.", "Het huis is groot", "groot · no -e after is", "grote", "no -e after is. The adjective ending stays off."],
      ["ty", "Tomorrow I am going to school. (start with Morgen)", "Morgen ga ik naar school", "gaan · verb second after Morgen", "gaat", "verb second: Morgen ga ik, with ga before ik."]
    ]
  },
  {
    id: "compare",
    title: "Comparing",
    blurb: "Compare with -er and dan, say the biggest with het grootst, and say something is te duur.",
    deck: "Shopping and clothes",
    body: `
<p>English says bigger and the biggest, or more expensive. Dutch mostly adds an ending. <b>Groot</b> becomes <b>groter</b>, bigger, and <b>het grootst</b>, the biggest. <b>Klein</b> becomes <b>kleiner</b>. The word more is not the ordinary way to build these.</p>
<div class="tbl"><table><tr><th></th><th>Dutch</th><th>English</th></tr><tr><td>basic</td><td class="k">groot</td><td>big</td></tr><tr><td>comparative</td><td class="k">groter</td><td>bigger</td></tr><tr><td>after is, the biggest</td><td class="k">het grootst</td><td>the biggest</td></tr><tr><td>too</td><td class="k">te duur</td><td>too expensive</td></tr></table></div>
{{ex:Dit huis is groter.|diht huys ihs KHROH-tuhr|This house is bigger.}}
{{ex:Dit huis is het grootst.|diht huys ihs uht khrohtst|This house is the biggest.}}
<h3>Than, and a few shapes</h3>
<p>Than is <b>dan</b>. You already heard <b>dan</b> as then, in <b>Ga rechtdoor en dan links</b>. Next to a comparative, <b>dan</b> means than. <b>Duur</b> already ends in r, so the comparative adds <b>-der</b>: <b>duurder</b>. <b>Goed</b> is irregular. The comparative is <b>beter</b>, and after <b>is</b> the superlative is <b>het best</b>. Leave <b>goeder</b> unused.</p>
{{ex:De auto is duurder dan de fiets.|duh OW-toh ihs DUUR-duhr dahn duh feets|The car is more expensive than the bike.}}
{{ex:Deze koffie is beter.|DAY-zuh KAW-fee ihs BAY-tuhr|This coffee is better.}}
<h3>After is, the superlative starts with het</h3>
<p>After <b>is</b>, the superlative starts with <b>het</b> even when the noun is a de-word. <b>De auto is het duurst</b>. <b>Dit huis is het grootst</b>. That <b>het</b> belongs to the superlative. It is not a new article on <b>auto</b>. Before a noun, the old <b>-e</b> rules come back, and the article is the noun's own article.</p>
{{ex:De auto is het duurst.|duh OW-toh ihs uht duurst|The car is the most expensive.}}
{{ex:een groter huis|uhn KHROH-tuhr huys|a bigger house}}
{{ex:een grotere auto|uhn KHROH-tuh-ruh OW-toh|a bigger car}}
{{ex:de grootste auto|duh KHROHT-stuh OW-toh|the biggest car}}
{{ex:het grootste huis|uht KHROHT-stuh huys|the biggest house}}
<p><b>Een groter huis</b> has no <b>-e</b>, because <b>huis</b> is a het-word after <b>een</b>. <b>Een grotere auto</b> has <b>-e</b>, because <b>auto</b> is a de-word. <b>De grootste auto</b> and <b>het grootste huis</b> have <b>-e</b> too, because the adjective is in front of the noun.</p>
<h3>Too</h3>
<p><b>Te</b> means too. <b>Te duur</b> is too expensive, <b>te groot</b> is too big, <b>te klein</b> is too small. After <b>is</b> there is still no <b>-e</b>.</p>
{{ex:De jas is te duur.|duh yahs ihs tuh duur|The coat is too expensive.}}
<p>Build the phrase in this order. Start from the basic word: <b>groot</b>, <b>duur</b> or <b>goed</b>. For bigger, add <b>-er</b>, and remember that <b>duur</b> becomes <b>duurder</b> and <b>goed</b> becomes <b>beter</b>. For the biggest after <b>is</b>, put <b>het</b> in front of the <b>-st</b> form: <b>het grootst</b>, <b>het duurst</b>, <b>het best</b>. For too, put <b>te</b> in front of the basic word and stop: <b>te duur</b>. If the adjective then moves in front of a noun, run the <b>-e</b> check you just learned before you finish. Than is <b>dan</b>, placed after the comparative: <b>groter dan de fiets</b>.</p>
<div class="tip"><b>Most common mistake:</b> building the comparative with more. <b>meer groot</b> → <b>groter</b>.</div>
`,
    check: [
      ["How do you say This house is bigger?", ["Dit huis is meer groot.", "Dit huis is groter.", "Dit huis is grotere.", "Dit huis is het grootst."], 1, "The comparative is groter. After is there is no -e, and het grootst would be the biggest."],
      ["How do you say The coat is too expensive?", ["De jas is te dure.", "De jas is te duurder.", "De jas is te duur.", "De jas is duur te."], 2, "te duur means too expensive. After is there is no -e."],
      ["How do you say a bigger house?", ["een grotere huis", "een grootste huis", "een meer groot huis", "een groter huis"], 3, "huis is a het-word, so after een the comparative has no -e: een groter huis."]
    ],
    practice: [
      ["mc", "This house is bigger. =", "Dit huis is groter.", "Dit huis is meer groot.", "Dit huis is grotere.", "Dit huis is het grootst.", "The comparative is groter. After is there is no -e."],
      ["mc", "The coat is too expensive. =", "De jas is te duur.", "De jas is te dure.", "De jas is te duurder.", "De jas is duur te.", "te duur means too expensive. After is there is no -e."],
      ["mc", "bigger than the bike =", "groter dan de fiets", "meer groot dan de fiets", "groter dat de fiets", "groot dan de fiets", "Than is dan, and the comparative is groter."],
      ["mc", "a bigger house =", "een groter huis", "een grotere huis", "een grootste huis", "een meer groot huis", "huis is a het-word, so after een the comparative has no -e."],
      ["mc", "This coffee is better. =", "Deze koffie is beter.", "Deze koffie is goeder.", "Deze koffie is meer goed.", "Deze koffie is het goedst.", "goed is irregular: beter. The superlative after is is het best."],
      ["or", "a bigger house", "een groter huis", "grotere", "huis is a het-word, so there is no -e after een."],
      ["or", "the biggest car", "de grootste auto", "het grootst", "auto is a de-word, so before the noun the adjective ending is -e: grootste."],
      ["or", "Tomorrow I'm taking the train. (start with Morgen, use nemen)", "Morgen neem ik de trein", "neemt", "verb second: neem comes right after Morgen, before ik. trein is a de-word."],
      ["fi", "Dit huis is __.", "This house is bigger.", "groter", "grotere|grooter|grootst", "The comparative after is is groter, with no -e."],
      ["fi", "De jas is te __.", "The coat is too expensive.", "duur", "dure|duurder|groot", "Too expensive is te duur, with no -e after is."],
      ["fi", "een __ huis", "a bigger house", "groter", "grotere|grootste|groot", "huis is a het-word, so after een there is no -e on groter."],
      ["ty", "a bigger house", "een groter huis", "groot · het-word, no -e", "grotere", "no -e: huis is a het-word, so after een the comparative is groter."],
      ["ty", "The coat is too expensive. (start with De)", "De jas is te duur", "te · no -e after is", "dure", "no -e after is. te duur takes no adjective ending."],
      ["ty", "This car is bigger than that car. (start with Deze)", "Deze auto is groter dan die auto|Deze auto is groter dan die", "groot · dan, no -e after is", "grotere", "no -e after is: groter, not grotere. auto is a de-word, but the adjective is not in front of it."]
    ]
  },
  {
    id: "omdat",
    title: "omdat and dat",
    blurb: "Give a reason with omdat and report a thought with dat, with the verb at the end.",
    deck: "Questions and connectors",
    body: `
<p>English says because I am tired, and the verb stays in its usual place. Dutch says <b>omdat ik moe ben</b>, and the verb goes to the end. <b>Omdat</b> means because. <b>Dat</b>, in this lesson, means that, the word that starts a thought. The same spelling <b>dat</b> is also the far word for a het-word, as in <b>dat boek</b>. The joining word does not change for de or het. The pointing word does.</p>
{{ex:Ik ga naar huis omdat ik moe ben.|ihk khaah naahr huys awm-DAHT ihk moo behn|I'm going home because I am tired.}}
{{ex:Ik denk dat hij in Utrecht woont.|ihk dehnk daht high ihn UU-trehkht wohnt|I think he lives in Utrecht.}}
<h3>The finite verb at the end</h3>
<p>The verb that moves is the finite one, the one that shows the person: <b>ben</b>, <b>woont</b>, <b>heb</b>, <b>is</b>. It goes to the end of the omdat clause or the dat clause. <b>Denk</b> means think. <b>Ik denk</b>, <b>jij denkt</b>, <b>hij denkt</b>. When <b>je</b> follows the verb, the <b>-t</b> drops, the same way it drops in <b>werk je</b>: <b>denk je</b>. In <b>Ik denk dat hij in Utrecht woont</b>, <b>woont</b> is at the end. The main clause does not change. <b>Ik denk</b> and <b>Ik ga</b> stay in second place.</p>
{{ex:Ik denk dat het huis groot is.|ihk dehnk daht uht huys khroht ihs|I think the house is big.}}
{{ex:Ik neem de trein omdat ik geen fiets heb.|ihk naym duh trighn awm-DAHT ihk khayn feets hehp|I'm taking the train because I don't have a bike.}}
{{ex:Ik denk dat de trein te duur is.|ihk dehnk daht duh trighn tuh duur ihs|I think the train is too expensive.}}
<p>One finite verb in the omdat clause is enough. <b>Heb</b> in <b>omdat ik geen fiets heb</b> is at the end. <b>Fiets</b> is a de-word, and <b>geen</b> is the word you already use for not a. After <b>is</b>, <b>groot</b> and <b>te duur</b> still take no <b>-e</b>.</p>
<h3>want does not move the verb</h3>
<p>You already have <b>want</b>, and it also means because. <b>Want</b> leaves the verb in second place in both halves. Same meaning, different seat. <b>Omdat</b> is the word that sends the verb to the end.</p>
{{ex:Ik ga naar huis, want ik ben moe.|ihk khaah naahr huys wahnt ihk behn moo|I'm going home, because I am tired.}}
<h3>The omdat clause can come first</h3>
<p>When the omdat clause leads, the whole clause is the first piece of the sentence. The main verb comes next, before <b>ik</b>. That is verb second in the main clause, the same inversion you use after <b>morgen</b>. The omdat piece still has its own verb at the end.</p>
{{ex:Omdat ik moe ben, ga ik naar huis.|awm-DAHT ihk moo behn khaah ihk naahr huys|Because I am tired, I'm going home.}}
<div class="tip"><b>Most common mistake:</b> leaving the verb where English leaves it. <b>omdat ik ben moe</b> → <b>omdat ik moe ben</b>.</div>
`,
    check: [
      ["Which clause is correct?", ["omdat ik moe ben", "omdat ik ben moe", "omdat ben ik moe", "want ik moe ben"], 0, "After omdat, the verb ben goes at the end of the clause."],
      ["Which word sends the verb to the end?", ["want", "en", "omdat", "maar"], 2, "omdat is verb-final. want, en and maar keep a normal second-place verb."],
      ["Because I am tired, I'm going home. Which sentence is right?", ["Omdat ik moe ben, ik ga naar huis.", "Omdat ik ben moe, ga ik naar huis.", "Omdat ik moe ben, ga naar huis ik.", "Omdat ik moe ben, ga ik naar huis."], 3, "ben is at the end of the omdat clause, and the main clause stays verb second: ga ik."]
    ],
    practice: [
      ["mc", "because I am tired =", "omdat ik moe ben", "omdat ik ben moe", "omdat ben ik moe", "want ik moe ben", "After omdat, the verb ben goes at the end of the clause."],
      ["mc", "I think he is tired. =", "Ik denk dat hij moe is.", "Ik denk dat hij is moe.", "Ik denk dat hij moe ben.", "Ik denk hij dat moe is.", "After dat, the verb is goes at the end of the clause."],
      ["mc", "Which word sends the verb to the end?", "omdat", "want", "en", "maar", "omdat is verb-final. want keeps the verb in second place."],
      ["mc", "Because I am tired, I'm going home. =", "Omdat ik moe ben, ga ik naar huis.", "Omdat ik moe ben, ik ga naar huis.", "Omdat ik ben moe, ga ik naar huis.", "Omdat ik moe ben, ga naar huis ik.", "The omdat clause has ben at the end, and the main clause stays verb second: ga ik."],
      ["mc", "I think the house is big. =", "Ik denk dat het huis groot is.", "Ik denk dat het huis is groot.", "Ik denk dat de huis groot is.", "Ik denk dat het huis grote is.", "is goes at the end. huis is a het-word, and groot has no -e after is."],
      ["or", "because I am tired (use omdat)", "omdat ik moe ben", "want", "verb-final: after omdat, ben goes at the end of the clause."],
      ["or", "I think he is tired. (start with Ik denk dat)", "Ik denk dat hij moe is", "ben", "verb-final: is goes at the end of the clause."],
      ["or", "the house", "het huis", "de", "huis is a het-word."],
      ["fi", "omdat ik moe __", "because I am tired", "ben", "is|bent|zijn", "verb-final: ben goes in the blank, at the end of the clause."],
      ["fi", "Ik denk dat hij in Utrecht __.", "I think he lives in Utrecht.", "woont", "woon|wonen|woont in", "hij adds -t: woont, and the verb goes at the end."],
      ["fi", "Omdat ik moe ben, __ ik naar huis.", "Because I am tired, I'm going home.", "ga", "gaat|ben|woon", "The main clause stays verb second, so ga comes before ik."],
      ["ty", "I'm going home because I am tired. (start with Ik ga, use omdat)", "Ik ga naar huis omdat ik moe ben", "omdat · verb-final, ben at the end", "want", "verb-final: ben goes at the end of the clause."],
      ["ty", "I think the house is big. (start with Ik denk dat)", "Ik denk dat het huis groot is", "dat · verb-final, no -e", "grote", "verb-final: is goes at the end of the clause. After is, groot has no -e."],
      ["ty", "because I have a ticket (use omdat)", "omdat ik een kaartje heb", "omdat · verb-final, heb at the end", "de", "verb-final: heb goes at the end of the clause. kaartje is a het-word, and een means a."]
    ]
  }
];
