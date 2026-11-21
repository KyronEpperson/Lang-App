/* en-da lessons 19–26 (cafe … traps). Written by EN-DA-3.
   Every pron is the unchanged output of tools/target/da/respell.js. */
module.exports = [
  {
    id: "cafe",
    title: "At the café",
    blurb: "Order a drink or a bite, ask what it costs, and keep venligst off the counter.",
    deck: "Food and drink",
    body: `
<p>At a café the whole order is one sentence. English reaches for a separate please. Danish puts <b>gerne</b> in the middle and <b>tak</b> at the end. There is no everyday word that means please. <b>vil</b> is a modal verb, so the next verb is a bare infinitive: <b>have</b>, with no <b>at</b> in front of it. <b>venligst</b> is real Danish, and it belongs on signs and in letters. At the counter it sounds stiff.</p>
{{ex:Jeg vil gerne have en kaffe, tak.|yai vehl GEH-nuh HA-wuh ehn KA-fuh tak|I'd like a coffee, thanks.}}
{{ex:Jeg vil gerne have en øl, tak.|yai vehl GEH-nuh HA-wuh ehn oel tak|I'd like a beer, thanks.}}
{{ex:Jeg vil gerne have en kop kaffe, tak.|yai vehl GEH-nuh HA-wuh ehn kawp KA-fuh tak|I'd like a cup of coffee, thanks.}}
<h3>What to ask for</h3>
<p>Each food word still carries the gender from the noun lessons. A coffee, a tea, a beer and a cinnamon bun are en-words. One open-faced sandwich is an et-word, because <b>brød</b> is neuter. <b>kop</b> is an en-word, so a cup of coffee is <b>en kop kaffe</b>. The <b>o</b> in <b>kop</b> is the short one the line writes <b>aw</b>. When the order means some water or some rye bread, Danish usually leaves the article off. <b>vand</b> is still an et-word, and <b>rugbrød</b> is still an et-word. The <b>d</b> in <b>brød</b> is a soft d. The line writes <b>dh</b>.</p>
<div class="tbl"><table><tr><th>Order</th><th>Danish</th><th>Gender</th></tr><tr><td>a coffee</td><td class="k">en kaffe</td><td>en-word</td></tr><tr><td>a tea</td><td class="k">en te</td><td>en-word</td></tr><tr><td>a beer</td><td class="k">en øl</td><td>en-word, one serving</td></tr><tr><td>a cinnamon bun</td><td class="k">en kanelsnegl</td><td>en-word</td></tr><tr><td>an open-faced sandwich</td><td class="k">et smørrebrød</td><td>et-word</td></tr><tr><td>some water</td><td class="k">vand</td><td>et-word, no article</td></tr><tr><td>some rye bread</td><td class="k">rugbrød</td><td>et-word, no article</td></tr></table></div>
{{ex:Jeg vil gerne have et smørrebrød, tak.|yai vehl GEH-nuh HA-wuh eht SMOE-uh-broedh tak|I'd like an open-faced sandwich, thanks.}}
{{ex:En kanelsnegl, tak.|ehn ka-NUHL-snehl tak|A cinnamon bun, thanks.}}
{{ex:Jeg vil gerne have vand, tak.|yai vehl GEH-nuh HA-wuh van tak|I'd like water, thanks.}}
<h3>The price</h3>
<p>The question is the one from the question lesson. The answer comes back in <b>kroner</b>. <b>tyve</b> is the chunk for twenty. The line below is how a price sounds. It is not a menu.</p>
{{ex:Hvad koster det?|vadh KOHS-tuh deh|What does it cost?}}
{{ex:Det koster tyve kroner.|deh KOHS-tuh TEW-wuh KROH-nuh|It costs twenty kroner.}}
<h3>The two rules, still in the order</h3>
<p>Start the sentence with <b>i dag</b> and the verb is the second element. <b>i dag</b> is one element even though it is two words. That is verb second. The negative sits after the verb in a main clause. There is no <b>gør</b>.</p>
{{ex:I dag vil jeg gerne have te.|ee da vehl yai GEH-nuh HA-wuh teh|Today I'd like tea.}}
{{ex:Jeg vil ikke have en øl.|yai vehl EH-guh HA-wuh ehn oel|I don't want a beer.}}
<div class="tip"><b>Most common mistake:</b> a stiff please on the order. <b>En kaffe, venligst</b> → <b>Jeg vil gerne have en kaffe, tak.</b></div>
`,
    check: [
      ["At the counter, which line orders a coffee?", ["En kaffe, venligst.", "Jeg vil gerne have en kaffe, tak.", "Jeg vil at have en kaffe.", "Jeg er gerne en kaffe."], 1, "gerne and tak do the politeness. vil takes have with no at, and venligst stays off the counter."],
      ["Why is it en øl but et smørrebrød?", ["A beer at the counter is an en-word, and one open-faced sandwich is an et-word.", "Both words take en.", "The article copies the English word.", "øl is neuter because it is a drink."], 0, "Gender sits on the Danish noun. One beer at the counter is en øl. One smørrebrød is et."],
      ["In I dag vil jeg gerne have te, why does vil come straight after i dag?", ["Because vil means want.", "Because te has no article.", "i dag is the first element, so the verb is the second element.", "Because a question has to start with the verb."], 2, "Verb second. i dag counts as one element, and vil is the second element."]
    ],
    practice: [
      ["mc", "Which line orders a coffee?", "Jeg vil gerne have en kaffe, tak.", "En kaffe, venligst.", "Jeg vil at have en kaffe, tak.", "Jeg vil gerne at have en kaffe.", "vil takes a bare infinitive. Politeness is gerne and tak, not venligst."],
      ["mc", "A beer to order is…", "en øl", "den øl", "øllen", "et vand", "A beer at the counter is an en-word: en øl. øllen means the beer."],
      ["mc", "One open-faced sandwich is…", "et smørrebrød", "en smørrebrød", "et smørrebrøden", "smørrebrødet en", "smørrebrød is an et-word."],
      ["mc", "Hvad koster det? means…", "What does it cost?", "What does a person cost?", "Where is the café?", "I'd like that.", "hvad koster det asks the price. det means it."],
      ["mc", "Which sentence means I do not want a beer?", "Jeg vil ikke have en øl.", "Jeg vil have ikke en øl.", "Jeg ikke vil have en øl.", "Jeg gør ikke have en øl.", "ikke goes after the verb vil in a main clause. There is no gør."],
      ["or", "a coffee", "en kaffe", "et", "kaffe is an en-word."],
      ["or", "an open-faced sandwich", "et smørrebrød", "en", "smørrebrød is an et-word."],
      ["or", "Today I'd like tea. (start with i dag)", "I dag | vil | jeg | gerne | have | te", "venligst", "Verb second: i dag is the first element, then vil."],
      ["fi", "Jeg vil gerne have __ kaffe, tak.", "I'd like a coffee, thanks.", "en", "et|den|det", "kaffe is an en-word. The indefinite article is en."],
      ["fi", "Jeg vil __ have en øl.", "I do not want a beer.", "ikke", "gør|at|venligst", "ikke goes after the verb vil in a main clause."],
      ["fi", "I dag __ jeg gerne have te.", "Today I'd like tea.", "vil", "har|er|skal", "Verb second: i dag comes first, then the verb vil."],
      ["ty", "I'd like a beer, thanks. (use vil gerne have)", "Jeg vil gerne have en øl, tak.", "vil · gerne · have · en øl", "venligst", "A beer at the counter is an en-word: en øl."],
      ["ty", "I do not want tea. (use vil)", "Jeg vil ikke have te.", "vil · ikke · te", "gør", "ikke goes after the verb in a main clause."],
      ["ty", "Today I'd like water. (start with i dag, use vil gerne have, no article)", "I dag vil jeg gerne have vand.", "i dag · vil · gerne · vand", "en", "Verb second: i dag is the first element, then vil."]
    ]
  },
  {
    id: "family",
    title: "Family",
    blurb: "Name parents, sisters, brothers and children, and use the real plurals.",
    deck: "People and family",
    body: `
<p>The family words are ordinary nouns, and each one keeps a gender. <b>mor</b>, <b>far</b>, <b>søster</b> and <b>bror</b> are en-words. <b>barn</b> is an et-word. Learn them as <b>en søster</b>, <b>en bror</b>, <b>et barn</b>, the same way as <b>en bil</b> and <b>et hus</b>.</p>
{{ex:mor og far|moh aw fa|mother and father}}
{{ex:Jeg har en bror og en søster.|yai ha ehn broh aw ehn SOES-tuh|I have a brother and a sister.}}
{{ex:Jeg har et barn.|yai ha eht ban|I have a child.}}
<h3>Plurals in a real family</h3>
<p>The plural lesson's vowel change shows up here. <b>barn</b> becomes <b>børn</b>, <b>bror</b> becomes <b>brødre</b>, and <b>søster</b> becomes <b>søstre</b>. An indefinite plural has no <b>en</b> or <b>et</b> and no definite ending. Two children is <b>to børn</b>. The definite plural adds <b>-ne</b>: <b>børnene</b>, <b>brødrene</b>, <b>søstrene</b>. One child, when it means the child, is <b>barnet</b>. The <b>t</b> of that ending is a soft d on the line.</p>
<div class="tbl"><table><tr><th>One</th><th>More than one</th><th>The group</th></tr><tr><td class="k">et barn</td><td class="k">børn</td><td class="k">børnene</td></tr><tr><td class="k">en bror</td><td class="k">brødre</td><td class="k">brødrene</td></tr><tr><td class="k">en søster</td><td class="k">søstre</td><td class="k">søstrene</td></tr></table></div>
{{ex:Jeg har to børn.|yai ha toh boen|I have two children.}}
{{ex:Jeg har to brødre.|yai ha toh BROE-dhruh|I have two brothers.}}
{{ex:Jeg har to søstre.|yai ha toh SOES-truh|I have two sisters.}}
{{ex:Barnet hedder Anna.|BA-nuhdh HEH-dhuh A-na|The child is called Anna.}}
{{ex:Børnene bor i København.|BOE-nuh-nuh boh ee koe-buhn-HAWN|The children live in Copenhagen.}}
{{ex:Søstrene bor i Odense.|SOES-truh-nuh boh ee OH-dhuhn-suh|The sisters live in Odense.}}
<h3>Parents, and the stress</h3>
<p><b>forældre</b> means parents. It is already plural. <b>forældrene</b> means the parents. The pronunciation line stresses <b>forældrene</b> on the first syllable, and that stress is unchecked. The stress belongs on the <b>æ</b>. Learn the word from the voice. The line also stresses <b>København</b> on the last syllable. That listing is the one this course is least sure of, so follow the voice there too.</p>
{{ex:Forældrene bor i Aarhus.|FOH-rael-uh-nuh boh ee AW-hoos|The parents live in Aarhus.}}
<h3>Verb second with a place</h3>
<p>A place can stand first. It is one element, and the verb is the second element. The subject comes after the verb. That is verb second. <b>I Aarhus forældrene bor</b> is the English order, and it is wrong.</p>
{{ex:I Aarhus bor forældrene.|ee AW-hoos boh FOH-rael-uh-nuh|In Aarhus the parents live.}}
{{ex:I København bor børnene.|ee koe-buhn-HAWN boh BOE-nuh-nuh|In Copenhagen the children live.}}
<div class="tip"><b>Most common mistake:</b> the wrong article on child, or the English order after a city. <b>en barn</b> → <b>et barn</b>. <b>I Aarhus forældrene bor</b> → <b>I Aarhus bor forældrene.</b></div>
`,
    check: [
      ["a child =", ["en barn", "en børn", "et barn", "et børn"], 2, "barn is an et-word. børn is already the plural."],
      ["the children =", ["børnene", "barnet", "børner", "et børn"], 0, "The definite ending on this plural is -ne: børnene."],
      ["In Aarhus, the parents live. Which sentence is right?", ["I Aarhus forældrene bor.", "I Aarhus bor forældrene.", "Forældrene I Aarhus bor.", "I Aarhus bor jeg forældrene."], 1, "Verb second. I Aarhus is the first element, then bor, then the subject."]
    ],
    practice: [
      ["mc", "a child =", "et barn", "en barn", "et børn", "en børn", "barn is an et-word. børn is the plural."],
      ["mc", "the children =", "børnene", "barnet", "børner", "et børnene", "The definite ending is -ne: børnene."],
      ["mc", "I have a sister.", "Jeg har en søster.", "Jeg har et søster.", "Jeg er en søster.", "Jeg har søsteren.", "søster is an en-word. har is have, and er is be."],
      ["mc", "two brothers =", "to brødre", "to bror", "to brødrene", "to brors", "The plural of bror is brødre. An indefinite plural takes no definite ending."],
      ["mc", "In Copenhagen the children live. Which sentence is right?", "I København bor børnene.", "I København børnene bor.", "Børnene I København bor.", "I København bor en børnene.", "Verb second: I København is the first element, then bor."],
      ["or", "a child", "et barn", "en", "barn is an et-word."],
      ["or", "The child lives here. (start with barnet)", "barnet | bor | her", "barn", "The definite ending is -et: barnet."],
      ["or", "In Aarhus the parents live. (start with I Aarhus)", "I Aarhus | bor | forældrene", "børn", "Verb second: I Aarhus is the first element, then bor."],
      ["fi", "Jeg har __ barn.", "I have a child.", "et", "en|den|det", "barn is an et-word. The indefinite article is et."],
      ["fi", "Jeg har to __.", "I have two children.", "børn", "barn|børnene|børner", "The plural is børn. No definite ending on an indefinite plural."],
      ["fi", "I Aarhus __ forældrene.", "In Aarhus the parents live.", "bor", "er|har|bo", "Verb second: I Aarhus comes first, then bor."],
      ["ty", "I have a sister. (start with jeg)", "Jeg har en søster.", "har · en søster", "et", "søster is an en-word."],
      ["ty", "The children live here. (start with børnene)", "Børnene bor her.", "børnene · bor · her", "barn", "The definite ending is -ne: børnene."],
      ["ty", "In Copenhagen the children live. (start with I København)", "I København bor børnene.", "i · København · bor", "en", "Verb second: I København is the first element, then bor."]
    ]
  },
  {
    id: "possessives",
    title: "min, mit, mine",
    blurb: "Match min, mit and mine to the noun, and your (to one person) the same way.",
    deck: "People and family",
    body: `
<p>English <b>my</b> never changes. Danish <b>my</b> changes with the noun, not with the person who owns it. A woman says <b>min bil</b> for her car and <b>mit hus</b> for her house. A man uses the same three words. The noun decides.</p>
<div class="tbl"><table><tr><th>The noun</th><th>my</th><th>your (to one person)</th></tr><tr><td class="k">en bil, common gender</td><td class="k">min bil</td><td class="k">din bil</td></tr><tr><td class="k">et hus, neuter</td><td class="k">mit hus</td><td class="k">dit hus</td></tr><tr><td class="k">børn, plural</td><td class="k">mine børn</td><td class="k">dine børn</td></tr></table></div>
{{ex:Det er min bil.|deh eh meen beel|It is my car.}}
{{ex:Det er mit hus.|deh eh meht hoos|It is my house.}}
{{ex:Det er mine børn.|deh eh MEE-nuh boen|Those are my children.}}
{{ex:Det er din bil.|deh eh deen beel|It is your car (to one person).}}
{{ex:Det er dit hus.|deh eh deht hoos|It is your house (to one person).}}
<h3>Words that do not change</h3>
<p><b>hans</b>, <b>hendes</b>, <b>jeres</b> and <b>vores</b> keep one form for every noun: <b>hans bil</b>, <b>hans hus</b>, <b>hans børn</b>. <b>jeres</b> is your (to several people). <b>Deres</b> is the stiff, old-fashioned your. Recognize it, and do not type it. When <b>han</b> or <b>hun</b> is the subject and owns the noun, Danish uses <b>sin</b>, <b>sit</b> and <b>sine</b>. That set can wait. The models here use <b>min</b> and <b>din</b>, and a <b>hans</b> whose owner is not the subject.</p>
{{ex:Det er hans bil.|deh eh hans beel|It is his car.}}
{{ex:Det er hendes hus.|deh eh HEH-nuhs hoos|It is her house.}}
<h3>No definite ending on top</h3>
<p>The possessive and the definite ending do not stack. The car is <b>min bil</b> or <b>bilen</b>, never <b>min bilen</b>. The house is <b>mit hus</b> or <b>huset</b>, never <b>mit huset</b>. The children are <b>mine børn</b> or <b>børnene</b>.</p>
<h3>ikke, and a time in front</h3>
<p>In a main clause, <b>ikke</b> goes after the verb. In a subordinate clause, after <b>at</b>, <b>ikke</b> comes before the verb. The comma stays before <b>at</b>. A time in front is still verb second: the verb is the second element, and the subject follows it.</p>
{{ex:Jeg har ikke min bil.|yai ha EH-guh meen beel|I don't have my car.}}
{{ex:I dag har jeg min bil.|ee da ha yai meen beel|Today I have my car.}}
{{ex:Han siger, at det ikke er mit hus.|han SEE-yuh a deh EH-guh eh meht hoos|He says that it is not my house.}}
<div class="tip"><b>Most common mistake:</b> one form of my for every noun, or my plus the definite ending. <b>min hus</b> → <b>mit hus</b>. <b>min bilen</b> → <b>min bil</b>.</div>
`,
    check: [
      ["my house =", ["mit hus", "min hus", "mine hus", "mit huset"], 0, "hus is neuter, so my is mit. The definite ending does not stack on top."],
      ["Your car (to one person) =", ["mit bil", "min bil", "dit bil", "din bil"], 3, "bil is an en-word. To one person, your is din."],
      ["Which is the form this course uses for my car?", ["min bilen", "mit bil", "min bil", "mine bil"], 2, "bil is an en-word: min bil. Never the definite ending as well."]
    ],
    practice: [
      ["mc", "my house =", "mit hus", "min hus", "mine hus", "mit huset", "hus is neuter: mit hus. No definite ending on top."],
      ["mc", "my car =", "min bil", "mit bil", "mine bil", "min bilen", "bil is an en-word: min bil."],
      ["mc", "my children =", "mine børn", "min børn", "mit børn", "mine børnene", "The plural takes mine. No definite ending on top of mine."],
      ["mc", "your house (to one person) =", "dit hus", "din hus", "dine hus", "Deres hus", "hus is neuter. To one person, your is dit. Deres is the stiff form to recognize."],
      ["mc", "I do not have my car. Which sentence is right?", "Jeg har ikke min bil.", "Jeg har min bil ikke.", "Jeg ikke har min bil.", "Jeg gør ikke har min bil.", "ikke goes after the verb har in a main clause."],
      ["or", "my house", "mit hus", "min", "hus is neuter: mit hus."],
      ["or", "my car", "min bil", "mit", "bil is an en-word: min bil."],
      ["or", "Today it is my house. (start with i dag)", "I dag | er | det | mit | hus", "min", "Verb second: i dag is the first element, then er. hus is neuter: mit hus."],
      ["fi", "Det er __ hus.", "It is my house.", "mit", "min|mine|huset", "hus is neuter: mit hus."],
      ["fi", "Det er __ bil.", "It is my car.", "min", "mit|mine|bilen", "bil is an en-word: min bil."],
      ["fi", "Han siger, at det __ er mit hus.", "He says that it is not my house.", "ikke", "min|er|har", "ikke comes before the verb in a subordinate clause."],
      ["ty", "It is my house.", "Det er mit hus.", "mit · hus", "min", "hus is neuter: mit hus."],
      ["ty", "I do not have my car. (use min)", "Jeg har ikke min bil.", "har · ikke · min bil", "mit", "ikke goes after the verb in a main clause. bil is an en-word: min bil."],
      ["ty", "Today I have my car. (start with i dag)", "I dag har jeg min bil.", "i dag · har · min bil", "mit", "Verb second: i dag is the first element, then har."]
    ]
  },
  {
    id: "adjectives",
    title: "Adjectives: stor, stort, store",
    blurb: "Pick stor, stort or store from the noun, and drop the ending after er when the noun is common gender.",
    deck: "Describing things",
    body: `
<p>English <b>big</b> stays <b>big</b>. Danish <b>stor</b> grows an ending from the noun in front of it, and again from what follows <b>er</b>. The ending is about the noun. It is not about the person who says the sentence.</p>
<div class="tbl"><table><tr><th></th><th>common gender</th><th>neuter</th></tr><tr><td>a, one</td><td class="k">en stor bil</td><td class="k">et stort hus</td></tr><tr><td>the, with an adjective</td><td class="k">den store bil</td><td class="k">det store hus</td></tr><tr><td>after er</td><td class="k">Bilen er stor.</td><td class="k">Huset er stort.</td></tr></table></div>
{{ex:en stor bil|ehn stoh beel|a big car}}
{{ex:et stort hus|eht stawt hoos|a big house}}
{{ex:den store bil|dehn STOH-uh beel|the big car}}
{{ex:det store hus|deh STOH-uh hoos|the big house}}
<h3>Before the noun</h3>
<p>A common-gender noun in the indefinite takes the bare adjective: <b>en stor bil</b>. A neuter noun takes the adjective ending <b>-t</b>: <b>et stort hus</b>. When the noun is definite and an adjective sits in front, Danish uses a separate word, <b>den</b> or <b>det</b>, and the adjective ending <b>-e</b>. The noun does not also take <b>-en</b> or <b>-et</b>. <b>den store bilen</b> is too much ending. The plural uses <b>-e</b> as well. Indefinite plural is <b>store huse</b>. Definite plural adds <b>de</b>, the same small word as they: <b>de store biler</b>. That <b>de</b> is not the stiff <b>De</b>.</p>
{{ex:store huse|STOH-uh HOO-suh|big houses}}
{{ex:de store biler|dee STOH-uh BEE-luh|the big cars}}
{{ex:Bilerne er store.|BEE-luh-nuh eh STOH-uh|The cars are big.}}
<h3>After er</h3>
<p>After <b>er</b>, common gender takes no adjective ending: <b>Bilen er stor.</b> Neuter keeps <b>-t</b>: <b>Huset er stort.</b> Plural takes <b>-e</b>: <b>Bilerne er store.</b> The trap is an ending on the common-gender form after <b>er</b>, and a missing <b>-t</b> on a neuter noun.</p>
{{ex:Bilen er stor.|BEE-luhn eh stoh|The car is big.}}
{{ex:Huset er stort.|HOO-suhdh eh stawt|The house is big.}}
<h3>A few adjectives that need a second look</h3>
<p><b>rød</b> works like <b>stor</b>. The <b>d</b> is a soft d. Before <b>t</b>, the line drops that <b>d</b>, so <b>rødt</b> comes out as <b>roet</b>. <b>dejlig</b> takes <b>-t</b> in the neuter: <b>et dejligt hus</b>, and <b>dejligt vejr</b>. <b>vejr</b> is neuter and takes no indefinite article. The final <b>g</b> of <b>dejlig</b> is a rough <b>y</b> on the line. <b>lille</b> does not grow an ending at all: <b>en lille bil</b>, <b>et lille hus</b>, <b>den lille bil</b>.</p>
{{ex:en rød bil|ehn roedh beel|a red car}}
{{ex:et rødt hus|eht roet hoos|a red house}}
{{ex:dejligt vejr|DAI-leht vai|lovely weather}}
{{ex:en dejlig bil|ehn DAI-leey beel|a lovely car}}
{{ex:en lille bil|ehn LEH-luh beel|a small car}}
{{ex:et lille hus|eht LEH-luh hoos|a small house}}
{{ex:den lille bil|dehn LEH-luh beel|the small car}}
<h3>ikke after er, and a time in front</h3>
<p>In a main clause, <b>ikke</b> goes after <b>er</b>. Start with <b>i dag</b> and <b>er</b> is the second element.</p>
{{ex:Huset er ikke stort.|HOO-suhdh eh EH-guh stawt|The house is not big.}}
{{ex:I dag er huset stort.|ee da eh HOO-suhdh stawt|Today the house is big.}}
<div class="tip"><b>Most common mistake:</b> a missing neuter ending, or an ending after er on a common-gender noun. <b>et stor hus</b> → <b>et stort hus</b>. <b>Bilen er store</b> → <b>Bilen er stor.</b></div>
`,
    check: [
      ["a big house =", ["et stor hus", "et stort hus", "en stort hus", "et store hus"], 1, "hus is neuter. The neuter adjective ending is -t."],
      ["The car is big. =", ["Bilen er stor.", "Bilen er store.", "Bilen er stort.", "Den store bilen."], 0, "After er, common gender takes no adjective ending."],
      ["the big house =", ["store huset", "den store hus", "det stor hus", "det store hus"], 3, "Neuter definite uses det plus the adjective ending -e. The noun does not also take -et."]
    ],
    practice: [
      ["mc", "a big house =", "et stort hus", "et stor hus", "en stort hus", "et store hus", "hus is neuter. Neuter adjective ending -t: et stort hus."],
      ["mc", "a big car =", "en stor bil", "en stort bil", "et stor bil", "en store bil", "bil is common gender. stor has no ending before an en-word."],
      ["mc", "the big car =", "den store bil", "den stor bil", "den store bilen", "det store bil", "Definite common gender uses den plus the adjective ending -e. Not -en on the noun as well."],
      ["mc", "The car is big. =", "Bilen er stor.", "Bilen er store.", "Bilen er stort.", "Den er store bil.", "After er, common gender takes no adjective ending."],
      ["mc", "lovely weather =", "dejligt vejr", "en dejlig vejr", "dejlig vejr", "et dejlig vejr", "vejr is neuter and takes no indefinite article. The adjective ending is -t."],
      ["or", "a big house", "et | stort | hus", "stor", "Neuter adjective ending -t: et stort hus."],
      ["or", "a big car", "en | stor | bil", "stort", "bil is common gender. No neuter adjective ending on stor."],
      ["or", "Today the house is big. (start with i dag)", "I dag | er | huset | stort", "store", "Verb second: i dag is the first element, then er. Neuter adjective ending -t."],
      ["fi", "et __ hus", "a big house", "stort", "stor|store|stortet", "Neuter adjective ending -t: et stort hus."],
      ["fi", "Bilen er __.", "The car is big.", "stor", "stort|store|den", "After er, common gender takes no adjective ending."],
      ["fi", "den __ bil", "the big car", "store", "stor|stort|storen", "The adjective ending is -e: den store bil."],
      ["ty", "a red house", "et rødt hus", "rød · hus · neuter -t", "rød", "hus is neuter. Neuter adjective ending -t: et rødt hus."],
      ["ty", "The car is not big.", "Bilen er ikke stor.", "bilen · ikke · stor", "stort", "ikke goes after the verb in a main clause. No adjective ending after er for common gender."],
      ["ty", "Today the house is red. (start with i dag)", "I dag er huset rødt.", "i dag · huset · rød", "rød", "Verb second: i dag is the first element, then er. Neuter adjective ending -t."]
    ]
  },
  {
    id: "likes",
    title: "Likes, and answering a compliment",
    blurb: "Name a like, offer a short compliment, and answer one with tak.",
    deck: "Compliments",
    body: `
<p>English <b>I like coffee</b> is one verb. Danish uses a small phrase: <b>kan godt lide</b>. <b>kan</b> is a modal verb, so <b>lide</b> has no <b>at</b>. <b>godt</b> is part of the phrase. It sits between <b>kan</b> and <b>lide</b>. Leaving <b>godt</b> out is the trap. <b>elsker</b> is stronger. It is one verb, like English love, and it does not take <b>godt</b>.</p>
{{ex:Jeg kan godt lide kaffe.|yai kan gawt LEE-dhuh KA-fuh|I like coffee.}}
{{ex:Jeg elsker rugbrød.|yai EHL-skuh ROO-broedh|I love rye bread.}}
{{ex:Jeg kan godt lide en kanelsnegl.|yai kan gawt LEE-dhuh ehn ka-NUHL-snehl|I like a cinnamon bun.}}
<h3>The negative drops godt</h3>
<p>In the negative, <b>ikke</b> takes the place of <b>godt</b>. Say <b>kan ikke lide</b>, not <b>kan ikke godt lide</b>. <b>ikke</b> goes after <b>kan</b> in a main clause, the same slot as in every other main clause. A beer in general is <b>øl</b> with no article. One beer to order is still <b>en øl</b>.</p>
{{ex:Jeg kan ikke lide øl.|yai kan EH-guh LEE-dhuh oel|I don't like beer.}}
<h3>Compliments, and the answer</h3>
<p>This lesson also holds the compliments. <b>Det smager godt</b> is for food. <b>Godt klaret</b> is for work or a skill. <b>Hvor flot</b> is for a thing or a result. The answer is <b>tak</b>. <b>Mange tak</b> is a warmer thanks. <b>Tak skal du have</b> is the warm thanks to one person. To several people the subject pronoun is <b>I</b>, the same capital <b>I</b> as in the pronoun lesson: <b>Tak skal I have</b>. <b>du</b> and <b>I</b> are subjects. <b>Selv tak</b> answers <b>tak</b>. It is not the answer to a compliment, and it is not a way to wave the compliment off. Do not invent a deflection. <b>tak</b> is the answer.</p>
{{ex:Det smager godt.|deh SMA-wuh gawt|It tastes good.}}
{{ex:Godt klaret.|gawt KLA-uhdh|Well done.}}
{{ex:Hvor flot.|vaw flawt|How nice.}}
{{ex:Tak skal du have.|tak skal doo HA-wuh|Thank you (to one person).}}
{{ex:Tak skal I have.|tak skal ee HA-wuh|Thank you (to several people).}}
{{ex:Mange tak.|MANG-uh tak|Thanks a lot.}}
<h3>A time in front</h3>
<p>Start with <b>i dag</b> and <b>kan</b> is the second element. The subject follows the verb. <b>godt</b> stays in the positive, and <b>ikke</b> stays in the negative.</p>
{{ex:I dag kan jeg godt lide kaffe.|ee da kan yai gawt LEE-dhuh KA-fuh|Today I like coffee.}}
<div class="tip"><b>Most common mistake:</b> dropping godt, or waving a compliment away. <b>Jeg kan lide kaffe</b> → <b>Jeg kan godt lide kaffe.</b> A compliment answered with a deflection → <b>Tak.</b></div>
`,
    check: [
      ["I like coffee. =", ["Jeg kan lide kaffe.", "Jeg kan lide godt kaffe.", "Jeg kan godt lide kaffe.", "Jeg er godt lide kaffe."], 2, "godt is part of kan godt lide. It sits between kan and lide."],
      ["Someone says Det smager godt. The answer is…", ["Tak.", "Selv tak.", "Nej, det smager ikke.", "Venligst."], 0, "A compliment gets tak. Selv tak answers tak. Do not deflect."],
      ["I don't like beer. =", ["Jeg kan ikke godt lide øl.", "Jeg kan ikke lide øl.", "Jeg kan godt ikke lide øl.", "Jeg gør ikke lide øl."], 1, "In the negative, ikke replaces godt. ikke goes after kan in a main clause."]
    ],
    practice: [
      ["mc", "I like coffee. =", "Jeg kan godt lide kaffe.", "Jeg kan lide kaffe.", "Jeg kan lide godt kaffe.", "Jeg er godt lide kaffe.", "godt is part of the phrase. It sits between kan and lide."],
      ["mc", "I do not like beer. =", "Jeg kan ikke lide øl.", "Jeg kan ikke godt lide øl.", "Jeg kan godt ikke lide øl.", "Jeg gør ikke lide øl.", "ikke replaces godt, and ikke goes after kan in a main clause."],
      ["mc", "Someone says Det smager godt. The answer is…", "Tak.", "Selv tak.", "Nej tak.", "Venligst.", "A compliment gets tak. Selv tak answers tak, and Nej tak is a refusal."],
      ["mc", "Godt klaret means…", "Well done.", "It tastes good.", "How nice.", "Thanks.", "Godt klaret is well done, for work or a skill. Det smager godt is for food."],
      ["mc", "Thank you (to several people) =", "Tak skal I have.", "Tak skal du have.", "Tak skal jer have.", "Tak skal De have.", "To several people the subject pronoun is I. jer is the object form. De is the stiff, old-fashioned you, and it is not produced here."],
      ["or", "I like a beer. (start with jeg)", "Jeg | kan | godt | lide | en | øl", "et", "øl is an en-word: en øl."],
      ["or", "I like an open-faced sandwich. (start with jeg)", "Jeg | kan | godt | lide | et | smørrebrød", "en", "smørrebrød is an et-word."],
      ["or", "Today I like coffee. (start with i dag)", "I dag | kan | jeg | godt | lide | kaffe", "ikke", "Verb second: i dag is the first element, then kan."],
      ["fi", "Jeg kan __ lide kaffe.", "I like coffee.", "godt", "god|gode|ikke", "godt is part of kan godt lide. god and gode are the adjective."],
      ["fi", "Jeg kan ikke lide __ øl.", "I do not like a beer.", "en", "et|den|det", "A beer at the counter is an en-word: en øl."],
      ["fi", "Tak skal __ have.", "Thank you (to one person).", "du", "I|De|dig", "To one person, the subject is du. I is for several people, and dig is the object form."],
      ["ty", "I like a cinnamon bun. (start with jeg, use kan godt lide)", "Jeg kan godt lide en kanelsnegl.", "kan godt lide · en kanelsnegl", "et", "kanelsnegl is an en-word."],
      ["ty", "I do not like beer. (use kan lide)", "Jeg kan ikke lide øl.", "kan · ikke · lide", "godt", "ikke goes after the verb kan in a main clause."],
      ["ty", "Today I do not like tea. (start with i dag, use kan lide)", "I dag kan jeg ikke lide te.", "i dag · kan · ikke", "godt", "Verb second: i dag is the first element, then kan."]
    ]
  },
  {
    id: "directions",
    title: "Directions",
    blurb: "Ask where a place is, and say left, right, or straight ahead.",
    deck: "Around town and directions",
    body: `
<p>The three direction phrases are short. <b>til højre</b> is to the right. <b>til venstre</b> is to the left. <b>ligeud</b> is straight ahead, one word. English <b>left</b> often gets an <b>er</b> sound on the end of <b>venstre</b>. The line keeps the <b>r</b> inside the <b>str</b> cluster and writes the ending as a weak <b>uh</b>: <b>VEHN-struh</b>. That ending is not the English <b>er</b>. <b>ligeud</b> is three beats on the line. The voice is shorter. Follow the voice for the length, and keep the spelling as one word.</p>
{{ex:Til venstre.|tehl VEHN-struh|To the left.}}
{{ex:Til højre.|tehl HOY-uh|To the right.}}
{{ex:Ligeud.|LEE-yuh-oodh|Straight ahead.}}
<h3>Where is it?</h3>
<p>A where-question starts with <b>hvor</b>, then the verb, then the subject. That is inversion. <b>Hvor stationen er</b> is the order of a subordinate clause, and it is not the question. The place takes a definite ending. <b>station</b> is an en-word, so the station is <b>stationen</b>. <b>toilet</b> is an et-word, so the toilet is <b>toilettet</b>. The line says <b>stationen</b> with a <b>t</b> sound and stress at the start, and it splits <b>toilettet</b> into too many beats. The real station word has a <b>sh</b> sound and a later stress. Follow the voice for both.</p>
{{ex:Hvor er stationen?|vaw eh sta-SHOH-nuhn|Where is the station?}}
{{ex:Hvor er toilettet?|vaw eh TOH-ee-luh-duhdh|Where is the toilet?}}
{{ex:Stationen er til venstre.|sta-SHOH-nuhn eh tehl VEHN-struh|The station is on the left.}}
{{ex:Toilettet er til højre.|TOH-ee-luh-duhdh eh tehl HOY-uh|The toilet is on the right.}}
<h3>Sending one person on</h3>
<p>To tell one person the way, use the short form of the verb and then the direction. <b>Gå ligeud</b> is go straight ahead. <b>Gå til venstre</b> is go left. <b>Drej til højre</b> is turn right. The same phrases are the ones to learn. A time can still stand first in a statement. <b>i dag</b> is the first element, and <b>er</b> is the second element.</p>
{{ex:Gå ligeud.|gaw LEE-yuh-oodh|Go straight ahead (to one person).}}
{{ex:Gå til venstre.|gaw tehl VEHN-struh|Go left (to one person).}}
{{ex:Drej til højre.|drai tehl HOY-uh|Turn right (to one person).}}
{{ex:I dag er stationen ligeud.|ee da eh sta-SHOH-nuhn LEE-yuh-oodh|Today the station is straight ahead.}}
<div class="tip"><b>Most common mistake:</b> question order copied from a subordinate clause, or an English er on venstre. <b>Hvor stationen er?</b> → <b>Hvor er stationen?</b></div>
`,
    check: [
      ["to the left =", ["til venstre", "til venster", "på venstre", "venstre til"], 0, "The phrase is til venstre. The r stays in the str cluster, and the ending is uh, not English er."],
      ["Where is the station?", ["Hvor stationen er?", "Hvor er den station?", "Stationen hvor er?", "Hvor er stationen?"], 3, "Inversion: hvor is first, then er, then the subject. station takes the definite ending -en."],
      ["the toilet =", ["toileten", "toiletten", "toilettet", "et toiletten"], 2, "toilet is an et-word. The definite ending is -et."]
    ],
    practice: [
      ["mc", "to the left =", "til venstre", "til venster", "på venstre", "venstre til", "The phrase is til venstre. The ending is uh, not English er."],
      ["mc", "straight ahead =", "ligeud", "lige ud", "udlige", "til ligeud", "ligeud is one word. The line gives it three beats."],
      ["mc", "to the right =", "til højre", "til høj", "højre til", "på højre", "til højre is to the right."],
      ["mc", "Where is the station?", "Hvor er stationen?", "Hvor stationen er?", "Hvor er den station?", "Hvad er stationen?", "Inversion: hvor comes first, then er. station is an en-word. The definite ending is -en."],
      ["mc", "The toilet is on the left. =", "Toilettet er til venstre.", "Toiletten er til venstre.", "Toilettet er til venster.", "En toilet er til venstre.", "toilet is an et-word. The definite ending is -et: toilettet."],
      ["or", "Where is the station?", "Hvor | er | stationen", "stationet", "station is an en-word. The definite ending is -en. Inversion: the subject follows the verb."],
      ["or", "The toilet is on the left. (start with toilettet)", "Toilettet | er | til | venstre", "toileten", "toilet is an et-word. The definite ending is -et: toilettet."],
      ["or", "Today the station is straight ahead. (start with i dag)", "I dag | er | stationen | ligeud", "venstre", "Verb second: i dag is the first element, then er."],
      ["fi", "Hvor __ stationen?", "Where is the station?", "er", "bor|har|den", "Inversion: hvor is first, then the verb er."],
      ["fi", "Stationen er til __.", "The station is on the right.", "højre", "venstre|høj|ligeud", "til højre means to the right."],
      ["fi", "__ er stationen?", "Where is the station?", "Hvor", "Hvad|Hvornår|Hvordan", "hvor means where. Inversion puts hvor before the verb."],
      ["ty", "The station is on the left. (start with stationen)", "Stationen er til venstre.", "stationen · venstre", "stationet", "station is an en-word. The definite ending is -en."],
      ["ty", "The toilet is not on the right.", "Toilettet er ikke til højre.", "toilettet · ikke · højre", "toileten", "ikke goes after the verb in a main clause. toilet is an et-word."],
      ["ty", "Today the station is on the right. (start with i dag)", "I dag er stationen til højre.", "i dag · stationen · højre", "venstre", "Verb second: i dag is the first element, then er."]
    ]
  },
  {
    id: "past",
    title: "The past: arbejdede, var, havde",
    blurb: "Talk about yesterday with arbejdede, boede, and the short pasts.",
    deck: "The past",
    body: `
<p>The present is one <b>-r</b> for every person. The past splits in two. A long group adds <b>-ede</b>: <b>arbejder</b> becomes <b>arbejdede</b>, and <b>bor</b> becomes <b>boede</b>. A short list changes the word, and that list has to be learned as chunks. The perfect with <b>har</b> is not this lesson. For a simple past, say <b>jeg arbejdede</b>, not <b>jeg har arbejdet</b>.</p>
{{ex:Jeg arbejdede.|yai A-bai-dhuh-dhuh|I worked.}}
{{ex:Jeg boede i København.|yai BOH-uh-dhuh ee koe-buhn-HAWN|I lived in Copenhagen.}}
<p>On <b>boede</b> and <b>arbejdede</b> the line adds a beat. Follow the voice for the rhythm of <b>-ede</b>.</p>
<h3>The short list</h3>
<div class="tbl"><table><tr><th>Present</th><th>Past</th><th>English</th></tr><tr><td class="k">er</td><td class="k">var</td><td>was</td></tr><tr><td class="k">har</td><td class="k">havde</td><td>had</td></tr><tr><td class="k">kommer</td><td class="k">kom</td><td>came</td></tr><tr><td class="k">går</td><td class="k">gik</td><td>went</td></tr><tr><td class="k">får</td><td class="k">fik</td><td>got (the verb; father is far)</td></tr><tr><td class="k">ser</td><td class="k">så</td><td>saw</td></tr><tr><td class="k">drikker</td><td class="k">drak</td><td>drank</td></tr><tr><td class="k">spiser</td><td class="k">spiste</td><td>ate</td></tr></table></div>
{{ex:Jeg var i Aarhus.|yai va ee AW-hoos|I was in Aarhus.}}
{{ex:Jeg havde et hus.|yai HA-dhuh eht hoos|I had a house.}}
{{ex:I går kom jeg.|ee gaw kawm yai|Yesterday I came.}}
{{ex:Vi gik hjem.|vee gehk yehm|We went home.}}
{{ex:Jeg fik en kaffe.|yai fehk ehn KA-fuh|I got a coffee.}}
{{ex:Jeg så Anna.|yai saw A-na|I saw Anna.}}
{{ex:Jeg spiste rugbrød.|yai SPEES-tuh ROO-broedh|I ate rye bread.}}
<p><b>i går</b> means yesterday. The second word is spelled like the verb <b>går</b>, and it is not that verb. <b>gik</b> is shown with a long vowel on the line. The real vowel is short. Follow the voice. <b>havde</b> keeps a soft d on the line. Fast speech may drop it. Follow the voice. <b>drikker</b> does not become <b>drikkede</b>. The past is <b>drak</b>. <b>spiser</b> becomes <b>spiste</b>, not a form in <b>-ede</b>. <b>får</b> in the table means gets. <b>far</b> is father.</p>
<h3>Verb second, and where ikke sits</h3>
<p>Yesterday can stand first. It is the first element, and the verb is the second element. The subject follows the verb. In a main clause, <b>ikke</b> goes after the verb. In a subordinate clause, <b>ikke</b> comes before the verb. The comma stays before <b>at</b>.</p>
{{ex:I går drak vi øl.|ee gaw drak vee oel|Yesterday we drank beer.}}
{{ex:I går arbejdede jeg.|ee gaw A-bai-dhuh-dhuh yai|Yesterday I worked.}}
{{ex:Jeg arbejdede ikke.|yai A-bai-dhuh-dhuh EH-guh|I did not work.}}
{{ex:Han siger, at han ikke kom.|han SEE-yuh a han EH-guh kawm|He says that he did not come.}}
<div class="tip"><b>Most common mistake:</b> an English -ed on a short past, or the perfect for a simple past. <b>I går drikkede vi</b> → <b>I går drak vi</b>. <b>Jeg har arbejdet</b> → <b>Jeg arbejdede.</b></div>
`,
    check: [
      ["Yesterday we drank beer, and the sentence starts with i går. Which one?", ["I går drikkede vi øl.", "I går drak vi øl.", "I går vi drak øl.", "I går har vi drukket øl."], 1, "The past of drikker is drak. Verb second: i går is the first element, then drak."],
      ["I had a house. =", ["Jeg havde en hus.", "Jeg har et hus.", "Jeg havde et hus.", "Jeg havde et huset."], 2, "hus is an et-word. havde is the past of har. No definite ending after et."],
      ["He says that he did not come. =", ["Han siger, at han ikke kom.", "Han siger, at han kom ikke.", "Han siger, at han ikke komme.", "Han siger, han kom ikke."], 0, "Subordinate clause: ikke comes before the verb. The comma is written before at."]
    ],
    practice: [
      ["mc", "I worked. =", "Jeg arbejdede.", "Jeg arbejder.", "Jeg har arbejdet.", "Jeg arbejded.", "The past of arbejder is arbejdede. The perfect with har is not this lesson."],
      ["mc", "Yesterday we drank beer, starting with i går. =", "I går drak vi øl.", "I går drikkede vi øl.", "I går vi drak øl.", "I går har vi drukket øl.", "Verb second: i går is the first element, then drak. Not drikkede."],
      ["mc", "I had a house. =", "Jeg havde et hus.", "Jeg havde en hus.", "Jeg har et hus.", "Jeg havde et huset.", "hus is an et-word. havde is the past. No definite ending after et."],
      ["mc", "Yesterday I came, starting with i går. =", "I går kom jeg.", "I går jeg kom.", "I går komme jeg.", "I går har jeg kommet.", "Verb second. The past is kom, not a form with -ede, and not the perfect."],
      ["mc", "He says that he did not come. =", "Han siger, at han ikke kom.", "Han siger, at han kom ikke.", "Han siger, at han ikke komme.", "Han siger, han kom ikke.", "Subordinate clause: ikke comes before the verb."],
      ["or", "I had a house. (start with jeg)", "Jeg | havde | et | hus", "en", "hus is an et-word."],
      ["or", "I had a car. (start with jeg)", "Jeg | havde | en | bil", "et", "bil is an en-word."],
      ["or", "Yesterday we drank beer. (start with i går)", "I går | drak | vi | øl", "drikkede", "Verb second: i går is the first element, then drak."],
      ["fi", "Jeg havde __ barn.", "I had a child.", "et", "en|den|det", "barn is an et-word."],
      ["fi", "I går __ vi øl.", "Yesterday we drank beer.", "drak", "drikkede|drikker|drakede", "Verb second: i går comes first, then drak."],
      ["fi", "Han siger, at han __ kom.", "He says that he did not come.", "ikke", "aldrig|drak|var", "ikke comes before the verb in a subordinate clause."],
      ["ty", "I had a car.", "Jeg havde en bil.", "havde · en bil", "et", "bil is an en-word: en bil."],
      ["ty", "I did not work.", "Jeg arbejdede ikke.", "arbejde · past -ede · ikke", "arbejder", "ikke goes after the verb in a main clause."],
      ["ty", "Yesterday I came. (start with i går)", "I går kom jeg.", "i går · kom", "komme", "Verb second: i går is the first element, then kom. Inversion: the subject follows the verb."]
    ]
  },
  {
    id: "traps",
    title: "Traps for English speakers",
    blurb: "Catch the look-alike words and the prepositions English copies onto Danish.",
    deck: "Traps for English speakers",
    body: `
<p>A few Danish words look English and mean something else. Put each one in a full sentence, with the gender and the verb where the earlier lessons put them.</p>
<h3>gift, fabrik, eventuelt</h3>
<p><b>gift</b> means married, and it also means poison. A present is <b>en gave</b>, an en-word. The definite form is <b>gaven</b>, in <b>Tak for gaven.</b> <b>en fabrik</b> is a factory. Cloth is <b>stof</b>, an et-word. The line stresses <b>fabrik</b> on the first syllable, and the real stress is on the last. Follow the voice. <b>eventuelt</b> means possibly, not eventually. In the end is <b>til sidst</b>. Finally is <b>endelig</b>. The line stresses <b>eventuelt</b> at the start. The stress is near the end, and the last <b>g</b> of <b>endelig</b> is a rough <b>y</b>. Follow the voice.</p>
{{ex:Hun er gift.|hoon eh gehft|She is married.}}
{{ex:Tak for gaven.|tak foh GA-wuhn|Thanks for the present.}}
{{ex:Det er en gave.|deh eh ehn GA-wuh|It is a present.}}
{{ex:Han arbejder på en fabrik.|han A-bai-dhuh paw ehn FAB-rehk|He works at a factory.}}
{{ex:Det er stof.|deh eh stawf|It is cloth.}}
{{ex:Eventuelt kommer jeg.|EH-wuhn-too-uhlt KAW-muh yai|I might come.}}
{{ex:Til sidst kom han.|tehl sehst kawm han|In the end he came.}}
{{ex:Endelig kom han.|EH-nuh-leey kawm han|Finally he came.}}
<h3>A trade after er</h3>
<p>A trade after <b>er</b> takes no indefinite article, the same way a nationality does. <b>Jeg er tømrer</b> means I am a carpenter. The article comes back with an adjective: <b>Han er en dygtig tømrer.</b> The line's reading of <b>dygtig</b> is rough. Follow the voice.</p>
{{ex:Jeg er tømrer.|yai eh TOEM-uh|I am a carpenter.}}
{{ex:Han er en dygtig tømrer.|han eh ehn DEW-teey TOEM-uh|He is a skilled carpenter.}}
<h3>Prepositions English moves</h3>
<p><b>venter</b> takes <b>på</b>, not for. <b>ringer</b> takes <b>til</b>. The person after <b>til</b> is the object form. To one person that is <b>dig</b>. To several people that is <b>jer</b>. <b>du</b> and <b>I</b> are the subject forms, so <b>ringer til du</b> is the wrong shape. <b>glade</b> takes <b>for</b>, not med. One person is <b>glad</b>. Several people are <b>glade</b>, the adjective ending <b>-e</b>.</p>
{{ex:Jeg venter på bussen.|yai VEHN-tuh paw BOO-suhn|I am waiting for the bus.}}
{{ex:Jeg ringer til dig.|yai REHNG-uh tehl dai|I am calling you (to one person).}}
{{ex:Jeg ringer til jer.|yai REHNG-uh tehl yeh|I am calling you (to several people).}}
{{ex:Jeg er glad for gaven.|yai eh gladh foh GA-wuhn|I am glad about the present.}}
{{ex:Vi er glade for gaven.|vee eh GLA-dhuh foh GA-wuhn|We are glad about the present.}}
<h3>The two rules in these sentences</h3>
<p>A fronted phrase is still verb second. <b>til sidst</b> or <b>i dag</b> is the first element, and the verb is the second element. <b>hus</b> stays an et-word: <b>et hus</b>. <b>bus</b> is an en-word, and the bus is <b>bussen</b>. In a main clause, <b>ikke</b> goes after the verb. In a subordinate clause, <b>ikke</b> comes before the verb.</p>
{{ex:Til sidst fik jeg et hus.|tehl sehst fehk yai eht hoos|In the end I got a house.}}
{{ex:I dag venter jeg på bussen.|ee da VEHN-tuh yai paw BOO-suhn|Today I am waiting for the bus.}}
{{ex:Han siger, at han ikke venter.|han SEE-yuh a han EH-guh VEHN-tuh|He says that he is not waiting.}}
<div class="tip"><b>Most common mistake:</b> the English meaning of a look-alike, or for after venter. <b>Tak for din gift</b> → <b>Tak for gaven.</b> <b>Jeg venter for bussen</b> → <b>Jeg venter på bussen.</b></div>
`,
    check: [
      ["Thanks for the present. =", ["Tak for giften.", "Tak for din gift.", "Tak for gaven.", "Tak for en gift."], 2, "A present is en gave. The definite ending makes gaven. gift means married, or poison."],
      ["I am a carpenter. =", ["Jeg er tømrer.", "Jeg er en tømrer.", "Jeg er tømreren.", "Jeg er en fabrik."], 0, "No indefinite article after er when the trade stands alone."],
      ["I am waiting for the bus. =", ["Jeg venter for bussen.", "Jeg venter bussen.", "Jeg venter til bussen.", "Jeg venter på bussen."], 3, "venter takes på. bus is an en-word, so the bus is bussen."]
    ],
    practice: [
      ["mc", "She is married. =", "Hun er gift.", "Hun er en gave.", "Hun er en gift.", "Hun har en gave.", "gift after er means married. A present is en gave. en gift is a poison."],
      ["mc", "Thanks for the present. =", "Tak for gaven.", "Tak for din gift.", "Tak for giften.", "Tak for gave.", "A present is en gave, and the present takes the definite ending: gaven."],
      ["mc", "Which sentence means I might come?", "Eventuelt kommer jeg.", "Til sidst kommer jeg.", "Endelig kommer jeg.", "Eventuelt jeg kommer.", "eventuelt means possibly. Verb second: eventuelt is the first element, then kommer."],
      ["mc", "I am a carpenter. =", "Jeg er tømrer.", "Jeg er en tømrer.", "Jeg er tømreren.", "Jeg er en fabrik.", "No indefinite article after er when the trade stands alone."],
      ["mc", "I am waiting for the bus. =", "Jeg venter på bussen.", "Jeg venter for bussen.", "Jeg venter bussen.", "Jeg venter til bussen.", "venter takes på. bus is an en-word. The definite ending is -en: bussen."],
      ["or", "a present", "en gave", "et gift", "gave is an en-word. A present is en gave, not gift."],
      ["or", "cloth", "et stof", "en", "stof is an et-word. Cloth is stof, not a fabrik."],
      ["or", "Today I am waiting for the bus. (start with i dag)", "I dag | venter | jeg | på | bussen", "for", "Verb second: i dag is the first element, then venter. The definite ending is -en: bussen."],
      ["fi", "Jeg er __.", "I am a carpenter.", "tømrer", "en tømrer|tømreren|fabrik", "No indefinite article after er when the trade stands alone."],
      ["fi", "Jeg venter __ bussen.", "I am waiting for the bus.", "på", "for|til|om", "venter på, not the English for."],
      ["fi", "Han siger, at han __ venter.", "He says that he is not waiting.", "ikke", "på|for|aldrig", "ikke comes before the verb in a subordinate clause."],
      ["ty", "It is a present.", "Det er en gave.", "en gave · not gift", "gift", "gave is an en-word. A present is en gave, not gift."],
      ["ty", "I am not calling you. (to one person, use ringer til)", "Jeg ringer ikke til dig.", "ringer · til · dig", "for", "ikke goes after the verb in a main clause."],
      ["ty", "In the end I got a house. (start with til sidst)", "Til sidst fik jeg et hus.", "til sidst · fik · et hus", "eventuelt", "Verb second: til sidst is the first element, then fik. hus is an et-word."]
    ]
  }
];
