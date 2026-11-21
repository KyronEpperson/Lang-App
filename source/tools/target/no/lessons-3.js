/* en-no lessons 19–26 (adjectives … traps). Written by EN-NO-3; every pron is stdout from tools/target/no/respell.js. */
module.exports = [
  {
    id: "adjectives",
    title: "Adjective agreement",
    blurb: "Match stor and liten to the noun: no ending, -t, or -e.",
    deck: "Shopping and clothes",
    body: `
<p>English keeps one form: a big car, a big book, a big house. Norwegian changes the adjective to match the gender.</p>
<h3>No ending, then -t, then -e</h3>
<p>Before one masculine noun, and before one feminine noun, there is no ending. A car is masculine: <b>en stor bil</b>. A book is feminine: <b>ei stor bok</b>. Do not put <b>-a</b> on the adjective. <b>ei stora bok</b> is not a phrase in this course.</p>
{{ex:en stor bil|ehn stoo:r bee:l|a big car}}
{{ex:ei stor bok|ai stoo:r boo:k|a big book}}
<p>A neuter noun adds <b>-t</b>. A house is neuter: <b>et stort hus</b>. The same <b>-t</b> comes back after <b>er</b>. The house is big is <b>Huset er stort</b>. The car is big is <b>Bilen er stor</b>, and the book is big is <b>Boka er stor</b>, with no ending, because those nouns are not neuter.</p>
{{ex:et stort hus|eht stoo:rt hue:s|a big house}}
{{ex:Huset er stort.|HUE:-suh ae:r stoo:rt|The house is big.}}
<p>More than one, the adjective takes <b>-e</b>: <b>store biler</b>, <b>store bøker</b>, <b>store hus</b>. After <b>er</b>, the plural does the same.</p>
{{ex:store biler|STOO:-ruh BEE:-luhr|big cars}}
{{ex:Bilene er store.|BEE:-luh-nuh ae:r STOO:-ruh|The cars are big.}}
<div class="tbl"><table><tr><th></th><th>One</th><th>More than one</th></tr><tr><td>masculine</td><td class="k">en stor bil</td><td class="k">store biler</td></tr><tr><td>feminine</td><td class="k">ei stor bok</td><td class="k">store bøker</td></tr><tr><td>neuter</td><td class="k">et stort hus</td><td class="k">store hus</td></tr></table></div>
<h3>liten, and god</h3>
<p><b>liten</b> (little) is the exception in front of the noun. Masculine stays <b>liten</b>. Feminine becomes <b>lita</b>. Neuter becomes <b>lite</b>. The plural is <b>små</b>.</p>
{{ex:ei lita bok|ai LEE:-tah boo:k|a little book}}
{{ex:et lite hus|eht LEE:-tuh hue:s|a little house}}
{{ex:små biler|smoh: BEE:-luhr|little cars}}
<p>After <b>er</b>, this course uses <b>liten</b> for a masculine or feminine noun, and <b>lite</b> for a neuter noun: <b>Bilen er liten</b>. <b>Boka er liten</b>. <b>Huset er lite</b>. Save <b>lita</b> for the spot in front of the feminine noun.</p>
<p><b>god</b> (good) has a special neuter, <b>godt</b>. You will need it for food. The plural is <b>gode</b>.</p>
{{ex:et godt hus|eht goht hue:s|a good house}}
<h3>How someone does it, and where the verb sits</h3>
<p>When it says how someone does something, recognize the neuter <b>-t</b>. <b>Nora synger vakkert</b> means Nora sings beautifully. You do not build that form yet.</p>
{{ex:Nora synger vakkert.|NOO-rah SEWNG-uhr VAHK-uhrt|Nora sings beautifully.}}
<p>The conjugated verb is still the second element, and <b>ikke</b> still goes after it. <b>I dag</b> is one element, so the verb is next: <b>I dag er huset stort</b>. Not <b>I dag huset er stort</b>.</p>
{{ex:I dag er huset stort.|ee: dah:g ae:r HUE:-suh stoo:rt|Today the house is big.}}
{{ex:Huset er ikke stort.|HUE:-suh ae:r EEK-uh stoo:rt|The house is not big.}}
<p>Clothes use the same endings. A sweater is masculine, <b>en genser</b>. A jacket is feminine, <b>ei jakke</b>. A scarf is neuter, <b>et skjerf</b>.</p>
{{ex:en genser|ehn GEHN-suhr|a sweater}}
{{ex:ei jakke|ai YAHK-uh|a jacket}}
{{ex:et skjerf|eht shaerf|a scarf}}
<div class="tip"><b>Most common mistake:</b> leaving the neuter ending off, or inventing a feminine one. <b>Huset er stor</b> → <b>Huset er stort</b>. <b>ei stora bok</b> → <b>ei stor bok</b>. The one feminine adjective form is <b>lita</b>: <b>ei lita bok</b>.</div>
`,
    check: [
      ["The house is big.", ["Huset er stor.", "Huset er store.", "Huset er stort.", "Huset er stora."], 2, "hus is neuter, so the adjective takes -t after er: stort."],
      ["a big book", ["ei stor bok", "ei stora bok", "ei stort bok", "et stor bok"], 0, "bok is feminine. The adjective takes no ending, and it does not take -a."],
      ["a little book", ["ei liten bok", "ei lita bok", "ei lite bok", "en lita bok"], 1, "liten becomes lita before a feminine noun: ei lita bok."]
    ],
    practice: [
      ["mc", "a big house =", "et stort hus", "et stor hus", "et store hus", "en stort hus", "hus is neuter: et stort hus."],
      ["mc", "a big book =", "ei stor bok", "ei stora bok", "ei stort bok", "et stor bok", "bok is feminine, and the adjective takes no ending: ei stor bok."],
      ["mc", "The house is big.", "Huset er stort.", "Huset er stor.", "Huset er store.", "Huset er stora.", "After er, a neuter noun still takes -t: stort."],
      ["mc", "a little book =", "ei lita bok", "ei liten bok", "ei lite bok", "en lita bok", "liten becomes lita before a feminine noun: ei lita bok."],
      ["mc", "big cars =", "store biler", "stor biler", "stort biler", "stora biler", "A plural adjective takes -e: store biler."],
      ["or", "a big house", "et stort hus", "stor en", "hus is neuter: et stort hus."],
      ["or", "Today the house is big. (start with i dag)", "I dag | er | huset | stort", "stor", "Verb second: i dag is the first element, then er. hus is neuter, so stort."],
      ["or", "a little book", "ei lita bok", "liten en", "bok is feminine: ei lita bok."],
      ["fi", "et __ hus", "a big house", "stort", "stor|store|stora", "hus is neuter, so the adjective takes -t: stort."],
      ["fi", "ei __ bok", "a big book", "stor", "stort|store|stora", "bok is feminine, and the adjective takes no ending: ei stor bok."],
      ["fi", "Huset er __.", "The house is big.", "stort", "stor|store|lita", "hus is neuter: Huset er stort."],
      ["ty", "a big car", "en stor bil", "bil · stor · masculine takes no ending", "stort store", "bil is masculine: en stor bil."],
      ["ty", "The cars are not big. (statement)", "Bilene er ikke store.", "bil · stor · ikke goes after the verb", "stor stort", "ikke goes after the verb. The plural adjective takes -e: store."],
      ["ty", "a little house", "et lite hus", "hus · liten · neuter is lite", "lita liten", "hus is neuter: et lite hus."]
    ]
  },
  {
    id: "home",
    title: "Home, colours and ordinals",
    blurb: "Name the rooms and five colors, count floors, and say hjemme when you are there.",
    deck: "Home and routine",
    body: `
<p>You can name the room, the color, and the floor. One English word, home, is two Norwegian words.</p>
<h3>Rooms</h3>
<p>Every room has a gender. The kitchen, the bathroom, the bedroom and a room are neuter: <b>et kjøkken</b>, <b>et bad</b>, <b>et soverom</b>, <b>et rom</b>. <b>et bad</b> says its d, unlike <b>med</b>. The living room and the door are feminine: <b>ei stue</b>, <b>ei dør</b>. A chair is masculine: <b>en stol</b>. A table and a window are neuter: <b>et bord</b>, <b>et vindu</b>. The definite ending is the one you know: <b>kjøkkenet</b>, <b>stua</b>, <b>stolen</b>, <b>bordet</b>, <b>døra</b>.</p>
{{ex:et kjøkken|eht HYOEK-uhn|a kitchen}}
{{ex:et bad|eht bah:d|a bathroom}}
{{ex:et soverom|eht SOH:-vuh-room|a bedroom}}
{{ex:ei stue|ai STUE:-uh|a living room}}
<h3>Five colors</h3>
<p>Colors agree. Red has no ending on a masculine or feminine noun, <b>-t</b> on a neuter noun, and <b>-e</b> in the plural. After <b>er</b>, the house is red is <b>Huset er rødt</b>.</p>
{{ex:Huset er rødt.|HUE:-suh ae:r roet|The house is red.}}
{{ex:en rød bil|ehn roe: bee:l|a red car}}
<p>Blue, yellow and white take <b>-tt</b> or <b>-t</b> in the neuter, so the vowel stays short. Green takes one <b>t</b>. A feminine noun takes no ending. In the plural, blue usually stays <b>blå</b>. You will also see <b>blåe</b>. The others take <b>-e</b>.</p>
<div class="tbl"><table><tr><th>Color</th><th>masculine or feminine</th><th>neuter</th><th>plural</th></tr><tr><td>red</td><td class="k">rød</td><td class="k">rødt</td><td class="k">røde</td></tr><tr><td>blue</td><td class="k">blå</td><td class="k">blått</td><td class="k">blå</td></tr><tr><td>green</td><td class="k">grønn</td><td class="k">grønt</td><td class="k">grønne</td></tr><tr><td>yellow</td><td class="k">gul</td><td class="k">gult</td><td class="k">gule</td></tr><tr><td>white</td><td class="k">hvit</td><td class="k">hvitt</td><td class="k">hvite</td></tr></table></div>
{{ex:et blått hus|eht bloht hue:s|a blue house}}
{{ex:Kjøkkenet er grønt.|HYOEK-uh-nuh ae:r groent|The kitchen is green.}}
{{ex:ei hvit dør|ai vee:t doe:r|a white door}}
{{ex:ei gul stue|ai gue:l STUE:-uh|a yellow living room}}
<h3>First, second, third</h3>
<p><b>første</b> is first, <b>andre</b> is second, <b>tredje</b> is third. They already end in <b>-e</b>, and they do not add <b>-t</b>. Floors use <b>i</b>, the same chunk as <b>i Oslo</b>. For a US reader, <b>første etasje</b> is the first floor, at street level. <b>Kari bor i andre etasje</b> means Kari lives on the second floor. <b>Nora bor i tredje etasje</b> is the third floor.</p>
{{ex:Kari bor i andre etasje.|KAH-ree boo:r ee: AHN-druh uh-TAH:-shuh|Kari lives on the second floor.}}
{{ex:Nora bor i tredje etasje.|NOO-rah boo:r ee: TREHD-yuh uh-TAH:-shuh|Nora lives on the third floor.}}
<h3>At home, or going there</h3>
<p>English uses home for two ideas. Norwegian splits them. When you are there, it is a place: <b>Jeg er hjemme</b>, I am at home. When you are going there, it is a direction: <b>Jeg går hjem</b>, I am going home. <b>Jeg kommer hjem</b> is I am coming home, also a direction. <b>Jeg er hjem</b> leaves the place word out.</p>
{{ex:Jeg er hjemme.|yai ae:r YEHM-uh|I'm at home.}}
{{ex:Jeg går hjem.|yai goh:r yehm|I'm going home.}}
<p>The verb is still the second element. <b>I dag er jeg hjemme</b>. Today I am at home. <b>I dag</b> first, then <b>er</b>, then <b>jeg</b>. A color in that shape still agrees: <b>I dag er kjøkkenet grønt</b>.</p>
{{ex:I dag er jeg hjemme.|ee: dah:g ae:r yai YEHM-uh|Today I'm at home.}}
<div class="tip"><b>Most common mistake:</b> one word for both ideas. <b>Jeg er hjem</b> → <b>Jeg er hjemme</b>. Use <b>hjem</b> for the direction: <b>Jeg går hjem</b>.</div>
`,
    check: [
      ["I'm at home.", ["Jeg er hjem.", "Jeg er hjemme.", "Jeg går hjem.", "Jeg er i hjem."], 1, "Place is hjemme. hjem is the direction, for when you go there."],
      ["The house is red.", ["Huset er rød.", "Huset er røde.", "Huset er rødt.", "Huset er røda."], 2, "hus is neuter, so red takes -t: rødt."],
      ["Kari lives on the second floor.", ["Kari bor i andre etasje.", "Kari bor i to etasje.", "Kari bor på andre etasje.", "Kari bor i annet etasje."], 0, "Second is andre, and a floor takes i: i andre etasje."]
    ],
    practice: [
      ["mc", "I'm at home.", "Jeg er hjemme.", "Jeg er hjem.", "Jeg går hjem.", "Jeg er til hjem.", "Place is hjemme. hjem is the direction."],
      ["mc", "a red car =", "en rød bil", "en rødt bil", "et rød bil", "en røde bil", "bil is masculine, so rød has no ending."],
      ["mc", "The house is red.", "Huset er rødt.", "Huset er rød.", "Huset er røde.", "Huset er røda.", "hus is neuter: rødt."],
      ["mc", "a blue house =", "et blått hus", "et blå hus", "et blåe hus", "en blått hus", "hus is neuter, so blå takes -tt: blått."],
      ["mc", "a white book =", "ei hvit bok", "ei hvitt bok", "et hvit bok", "ei hvite bok", "bok is feminine: ei hvit bok. The color takes no ending."],
      ["or", "Today the kitchen is green. (start with i dag)", "I dag | er | kjøkkenet | grønt", "grønn", "Verb second: i dag is the first element, then er. kjøkken is neuter, so grønt."],
      ["or", "a white book", "ei hvit bok", "hvitt et", "bok is feminine: ei hvit bok."],
      ["or", "I'm going home. (statement)", "Jeg går hjem", "hjemme", "Direction is hjem. hjemme would be the place, and this is a statement, so jeg comes first."],
      ["fi", "Jeg er __.", "I'm at home.", "hjemme", "hjem|hjemmet|hus", "Place is hjemme. hjem is the direction."],
      ["fi", "Huset er __.", "The house is blue.", "blått", "blå|blåe|rødt", "hus is neuter, so blå takes -tt: blått."],
      ["fi", "Kari bor i __ etasje.", "Kari lives on the second floor.", "andre", "første|tredje|to", "Second is andre. første is first and tredje is third."],
      ["ty", "The house is not red. (statement)", "Huset er ikke rødt.", "hus · rød · ikke goes after the verb", "rød røde", "ikke goes after the verb. hus is neuter, so rødt."],
      ["ty", "a green book", "ei grønn bok", "bok · grønn · feminine has no ending", "grønt et", "bok is feminine: ei grønn bok."],
      ["ty", "I'm at home.", "Jeg er hjemme.", "være · hjemme is the place", "hjem går", "Place is hjemme. hjem is the direction, when you go there."]
    ]
  },
  {
    id: "possessives",
    title: "Possessives: min, mi, mitt",
    blurb: "Say my and your after the noun, and use sin when the owner is the subject.",
    deck: "People and family",
    body: `
<p>English my never changes. Norwegian <b>min</b> changes to match the thing, not the person who owns it. And the usual place for it is after the noun.</p>
<h3>After the noun</h3>
<p>The noun is definite, and the little word follows. A car is masculine: <b>bilen min</b>, my car. A book is feminine: <b>boka mi</b>, my book. A house is neuter: <b>huset mitt</b>, my house. More than one: <b>bilene mine</b>, my cars. <b>bok</b> changes its vowel in the plural, <b>bøker</b>, and the definite plural is <b>bøkene</b>: <b>bøkene mine</b>.</p>
{{ex:bilen min|BEE:-luhn mee:n|my car}}
{{ex:boka mi|BOO:-kah mee:|my book}}
{{ex:huset mitt|HUE:-suh meet|my house}}
{{ex:bilene mine|BEE:-luh-nuh MEE:-nuh|my cars}}
<p>You will also see it in front: <b>min bil</b>, <b>mi bok</b>, <b>mitt hus</b>. Recognize that. Type the pattern after the noun. Do not stack them: not <b>min boka</b>. A book takes <b>mi</b>.</p>
<div class="tbl"><table><tr><th></th><th>my</th><th>your (one person)</th><th>own, if you are the subject</th></tr><tr><td>masculine</td><td class="k">bilen min</td><td class="k">bilen din</td><td class="k">bilen sin</td></tr><tr><td>feminine</td><td class="k">boka mi</td><td class="k">boka di</td><td class="k">boka si</td></tr><tr><td>neuter</td><td class="k">huset mitt</td><td class="k">huset ditt</td><td class="k">huset sitt</td></tr><tr><td>plural</td><td class="k">bilene mine</td><td class="k">bilene dine</td><td class="k">bilene sine</td></tr></table></div>
<p>Your, to one person, is the same pattern, because <b>du</b> is still <b>du</b>: <b>bilen din</b>, <b>boka di</b>, <b>huset ditt</b>. To several people, the prompt says so, and the word is <b>deres</b>. <b>deres</b> does not change: <b>boka deres</b>, <b>bilen deres</b>, <b>huset deres</b>.</p>
{{ex:boka deres|BOO:-kah DEH:-ruhs|your book (to several people)}}
<h3>sin, when the owner is the subject</h3>
<p><b>hans</b> (his) and <b>hennes</b> (her) do not change: <b>bilen hans</b>, <b>boka hennes</b>. They point outside the sentence, to someone who is not the subject. <b>sin</b> is the reflexive possessive. Use it when the owner is the subject. It still matches the thing: <b>sin</b>, <b>si</b>, <b>sitt</b>, <b>sine</b>.</p>
{{ex:Ola vasker bilen sin.|OO-lah VAHS-kuhr BEE:-luhn see:n|Ola washes his own car.}}
{{ex:Ola vasker bilen hans.|OO-lah VAHS-kuhr BEE:-luhn hahns|Ola washes another man's car.}}
<p><b>lese</b> means to read. The present is <b>leser</b>. <b>Anna leser boka si</b> means Anna is reading her own book. <b>Anna leser boka hennes</b> means the book belongs to another woman. <b>Anna vasker huset sitt</b> is her own house, because <b>hus</b> is neuter, so <b>sitt</b>.</p>
{{ex:Anna leser boka si.|AHN-ah LEH:-suhr BOO:-kah see:|Anna is reading her own book.}}
<h3>A name plus -s</h3>
<p>A name can take <b>-s</b>, with no apostrophe. <b>Annas bil</b> is Anna's car. The same <b>-s</b> works on Kari and Erik. The noun stays indefinite: <b>Annas bil</b>, not <b>Annas bilen</b>. Do not type a genitive of a name that already ends in <b>s</b>.</p>
{{ex:Annas bil|AHN-ahs bee:l|Anna's car}}
<p>The verb stays the second element, and <b>ikke</b> stays after it. <b>I dag leser Anna boka si</b>. <b>Jeg leser ikke boka mi</b>.</p>
{{ex:I dag leser Anna boka si.|ee: dah:g LEH:-suhr AHN-ah BOO:-kah see:|Today Anna is reading her own book.}}
<div class="tip"><b>Most common mistake:</b> <b>hans</b> where the subject owns the thing. <b>Ola vasker bilen hans</b>, when he means his own car → <b>Ola vasker bilen sin</b>.</div>
`,
    check: [
      ["my book, in the usual pattern", ["min bok", "boka mi", "boka min", "boken mi"], 1, "bok is feminine. The usual pattern is the definite noun, then mi: boka mi."],
      ["Ola washes his own car.", ["Ola vasker bilen sin.", "Ola vasker bilen hans.", "Ola vasker bilen si.", "Ola vasker sin bilen."], 0, "The owner is the subject, so sin. bil is masculine, so sin, not si."],
      ["Anna's car", ["Anna's bil", "Annas bilen", "Annas bil", "bilen Annas"], 2, "Genitive -s has no apostrophe, and the noun stays indefinite: Annas bil."]
    ],
    practice: [
      ["mc", "your book (to several people) =", "boka deres", "boka di", "dere boka", "boka din", "The prompt says several people, so deres. bok is feminine: boka deres. deres does not change."],
      ["mc", "my house =", "huset mitt", "huset min", "huset mi", "mitt huset", "hus is neuter: huset mitt."],
      ["mc", "Ola washes his own car.", "Ola vasker bilen sin.", "Ola vasker bilen hans.", "Ola vasker bilen si.", "Ola vasker sin bilen.", "The owner is the subject. bil is masculine, so sin."],
      ["mc", "Anna reads her own book.", "Anna leser boka si.", "Anna leser boka hennes.", "Anna leser boka sin.", "Anna leser si boka.", "bok is feminine, so si. Anna is the subject, so not hennes."],
      ["mc", "Anna's book =", "Annas bok", "Annas boka", "Anna's bok", "boka Annas", "Genitive -s, no apostrophe. The noun stays indefinite: Annas bok."],
      ["or", "my car", "bilen min", "mi mitt", "bil is masculine: bilen min."],
      ["or", "Today Anna reads her own book. (start with i dag)", "I dag | leser | Anna | boka | si", "hennes", "Verb second: i dag is the first element, then leser. bok is feminine, so si."],
      ["or", "my house", "huset mitt", "min mi", "hus is neuter: huset mitt."],
      ["fi", "boka __", "my book", "mi", "min|mitt|mine", "bok is feminine: boka mi."],
      ["fi", "huset __", "my house", "mitt", "min|mi|mine", "hus is neuter: huset mitt."],
      ["fi", "Ola vasker bilen __.", "Ola washes his own car.", "sin", "hans|si|sitt", "The owner is the subject. bil is masculine, so sin."],
      ["ty", "my book (after the noun)", "boka mi", "bok · mi · the usual pattern is after the noun", "min mitt", "bok is feminine: boka mi."],
      ["ty", "I am not reading my book. (statement, after the noun)", "Jeg leser ikke boka mi.", "lese · ikke goes after the verb · bok", "min mitt", "ikke goes after the verb. bok is feminine: boka mi."],
      ["ty", "my cars (after the noun)", "bilene mine", "bil · mine", "min mi", "bil is masculine, and the plural possessive is mine: bilene mine."]
    ]
  },
  {
    id: "shopping",
    title: "Shopping: denne, dette, disse",
    blurb: "Point to clothes with denne, dette and disse, and say which one you want.",
    deck: "Shopping and clothes",
    body: `
<p>In a shop you point. English this and these ignore gender. Norwegian <b>denne</b>, <b>dette</b> and <b>disse</b> match the noun, and the noun keeps the definite ending.</p>
<h3>denne, dette, disse</h3>
<p><b>denne</b> is for one masculine noun or one feminine noun. <b>denne bilen</b>, this car. <b>denne boka</b>, this book. <b>dette</b> is only for neuter: <b>dette huset</b>, this house. <b>dette bilen</b> is the mistake. A car is not neuter. <b>disse</b> is the plural, and the ending stays: <b>disse bilene</b>, these cars. <b>disse bøkene</b>, these books. Not <b>disse biler</b>, which drops the ending.</p>
{{ex:denne bilen|DEHN-uh BEE:-luhn|this car}}
{{ex:denne boka|DEHN-uh BOO:-kah|this book}}
{{ex:dette huset|DEHT-uh HUE:-suh|this house}}
{{ex:disse bilene|DEES-uh BEE:-luh-nuh|these cars}}
<h3>Clothes</h3>
<p>A sweater is masculine: <b>en genser</b>, <b>denne genseren</b>. A jacket is feminine: <b>ei jakke</b>, <b>denne jakka</b>. A shirt is feminine in this course: <b>ei skjorte</b>, <b>denne skjorta</b>. You will also see <b>en skjorte</b> and <b>skjorten</b>. A dress is masculine: <b>en kjole</b>, <b>denne kjolen</b>. A hat is masculine: <b>en hatt</b>. A wool cap is feminine: <b>ei lue</b>, <b>denne lua</b>. A scarf is neuter: <b>et skjerf</b>, <b>dette skjerfet</b>. Not <b>denne skjerfet</b>.</p>
<div class="tbl"><table><tr><th>Gender</th><th>A, one</th><th>This</th></tr><tr><td>masculine</td><td class="k">en genser</td><td class="k">denne genseren</td></tr><tr><td>feminine</td><td class="k">ei jakke</td><td class="k">denne jakka</td></tr><tr><td>neuter</td><td class="k">et skjerf</td><td class="k">dette skjerfet</td></tr></table></div>
{{ex:dette skjerfet|DEHT-uh SHAER-fuh|this scarf}}
{{ex:denne jakka|DEHN-uh YAHK-ah|this jacket}}
{{ex:ei skjorte|ai SHOHRT-uh|a shirt}}
{{ex:en kjole|ehn HYOO:-luh|a dress}}
<h3>That one, the price, and du</h3>
<p>When the noun is already clear, point with a pronoun. <b>den</b> is for a masculine or feminine thing: <b>Jeg vil ha den</b>, I want that one. <b>det</b> is for a neuter thing: <b>Jeg vil ha det</b>. The jacket takes <b>den</b>. The scarf takes <b>det</b>. You met this split with object pronouns. It is the same split here.</p>
{{ex:Jeg vil ha den.|yai veel hah: dehn|I want that one. (masculine or feminine)}}
{{ex:Jeg vil ha det.|yai veel hah: deh:|I want that one. (neuter)}}
<p>Size is the adjective you know. <b>Den er for stor</b> means that one is too big. <b>Den er for liten</b> means too small. The price question is <b>Hva koster den?</b> The person working there is one person, so you still say <b>du</b>: <b>Kan du hjelpe meg?</b> <b>kan</b> takes the infinitive <b>hjelpe</b>, with no <b>å</b>.</p>
{{ex:Den er for stor.|dehn ae:r fohr stoo:r|That one is too big.}}
{{ex:Hva koster den?|vah: KOHS-tuhr dehn|What does that one cost?}}
{{ex:Kan du hjelpe meg?|kahn due: YEHL-puh mai|Can you help me?}}
<p>The verb stays the second element. <b>I dag vil jeg ha denne jakka</b>. <b>i dag</b> first, then <b>vil</b>, then <b>jeg</b>, and <b>ha</b> at the end, because <b>vil</b> is a modal verb. <b>ikke</b> sits after <b>vil</b>: <b>Jeg vil ikke ha denne jakka</b>.</p>
{{ex:I dag vil jeg ha denne jakka.|ee: dah:g veel yai hah: DEHN-uh YAHK-ah|Today I want this jacket.}}
<div class="tip"><b>Most common mistake:</b> <b>dette</b> on a masculine noun. <b>dette bilen</b> → <b>denne bilen</b>. <b>dette</b> is neuter only: <b>dette huset</b>, <b>dette skjerfet</b>.</div>
`,
    check: [
      ["this car", ["dette bilen", "denne bil", "denne bilen", "det bilen"], 2, "bil is masculine: denne bilen. The definite ending stays."],
      ["this house", ["dette huset", "denne huset", "dette hus", "den huset"], 0, "hus is neuter: dette huset. denne is not for neuter."],
      ["I want that one (the book).", ["Jeg vil ha det.", "Jeg vil ha den.", "Jeg vil ha de.", "Jeg vil ha dette."], 1, "A book is feminine, so the pronoun is den, not det."]
    ],
    practice: [
      ["mc", "this car =", "denne bilen", "dette bilen", "denne bil", "det bilen", "bil is masculine: denne bilen. The definite ending stays."],
      ["mc", "this book =", "denne boka", "dette boka", "denne bok", "dette bok", "bok is feminine: denne boka."],
      ["mc", "this scarf =", "dette skjerfet", "denne skjerfet", "dette skjerf", "den skjerfet", "skjerf is neuter: dette skjerfet."],
      ["mc", "these cars =", "disse bilene", "denne bilene", "disse biler", "dette bilene", "Plural takes disse, and the definite ending stays: disse bilene."],
      ["mc", "I want that one (the jacket).", "Jeg vil ha den.", "Jeg vil ha det.", "Jeg vil ha dette.", "Jeg vil ha de.", "jakke is feminine, so the pronoun is den, not det."],
      ["or", "this jacket", "denne jakka", "dette jakke", "jakke is feminine: denne jakka. The definite ending stays."],
      ["or", "Today I want this scarf. (start with i dag)", "I dag | vil | jeg | ha | dette | skjerfet", "denne å", "Verb second: i dag is the first element, then vil. skjerf is neuter: dette skjerfet."],
      ["or", "these books", "disse bøkene", "denne bøker", "Plural takes disse, and bok keeps the definite ending: disse bøkene."],
      ["fi", "__ bilen", "this car", "denne", "dette|disse|den", "bil is masculine: denne bilen."],
      ["fi", "__ huset", "this house", "dette", "denne|disse|det", "hus is neuter: dette huset."],
      ["fi", "Jeg vil ha __.", "I want that one (the book).", "den", "det|dette|de", "bok is feminine, so the object pronoun is den."],
      ["ty", "this book", "denne boka", "bok · denne · feminine", "dette bok", "bok is feminine: denne boka. The definite ending stays."],
      ["ty", "I do not want this car. (statement)", "Jeg vil ikke ha denne bilen.", "vil · ikke goes after the verb · bil", "dette", "ikke goes after the verb. bil is masculine: denne bilen."],
      ["ty", "What does this jacket cost? (say Hva koster)", "Hva koster denne jakka?", "hva · koste · jakke", "dette", "jakke is feminine: denne jakka. hva is one element, and koster is the second element."]
    ]
  },
  {
    id: "food",
    title: "Food, and what to say about it",
    blurb: "Order food, thank the cook, and answer a compliment with takk.",
    deck: "Compliments",
    body: `
<p>You can order, say you are full, thank the person who cooked, and answer a kind word. The answer to a compliment is thanks. You do not have to send a compliment back.</p>
<h3>Ordering</h3>
<p>To order, say <b>Kan jeg få</b> and the food. <b>kaffe</b> is masculine, so <b>en</b>. A roll is neuter. A packed lunch is feminine: <b>ei matpakke</b>. <b>kan</b> is a modal verb, so <b>få</b> has no <b>å</b> in front of it.</p>
{{ex:Kan jeg få en kaffe?|kahn yai foh: ehn KAHF-uh|Can I have a coffee?}}
{{ex:Kan jeg få et rundstykke?|kahn yai foh: eht RUEN-stewk-uh|Can I have a roll?}}
<p><b>spise</b> means to eat. The present is <b>spiser</b>, one form for every person. A mass word drops the article: milk is <b>melk</b>, bread is <b>brød</b>. <b>ost</b> is cheese, and <b>brunost</b> is the brown cheese. <b>laks</b> is salmon. A waffle is masculine, <b>en vaffel</b>. A meat patty is feminine, <b>ei kjøttkake</b>.</p>
{{ex:Jeg spiser brød.|yai SPEE:-suhr broe:|I eat bread.}}
{{ex:Jeg vil ha melk.|yai veel hah: mehlk|I want milk.}}
{{ex:ei matpakke|ai MAHT-pahk-uh|a packed lunch}}
<h3>Full, and thanks for the meal</h3>
<p>Full of food is <b>mett</b>. <b>Jeg er mett</b>. <b>Jeg er full</b> is not that. <b>full</b> on a person means drunk. On a glass it means full to the top, and the adjective agrees: <b>Glasset er fullt</b>, because <b>glass</b> is neuter.</p>
{{ex:Jeg er mett.|yai ae:r meht|I'm full of food.}}
<p>After you eat, especially to the person who cooked, say <b>Takk for maten</b>. Thanks for the meal. <b>maten</b> has the definite ending. The person who cooked can answer <b>Vel bekomme</b>. That reply belongs to <b>Takk for maten</b>. It is not what you say after every kind sentence.</p>
{{ex:Takk for maten.|tahk fohr MAH:-tuhn|Thanks for the meal.}}
{{ex:Vel bekomme.|vehl buh-KOHM-uh|The host's reply to Takk for maten.}}
<h3>The short kind lines</h3>
<p><b>Det var kjempegodt</b> means that was really good. <b>det</b> is neuter, so <b>-t</b>: the <b>godt</b> from adjectives, and <b>kjempe</b> makes it stronger. One word. <b>var</b> is the past of <b>er</b>. Learn the line as a chunk. <b>Du er så flink</b> means you are so good at this. <b>flink</b> is skill. <b>Så snill du er</b> means how kind you are. <b>snill</b> is kind. <b>Du er så snill</b> is the same words in another correct order.</p>
{{ex:Det var kjempegodt.|deh: vah:r HYEHM-puh-goht|That was really good.}}
{{ex:Du er så flink.|due: ae:r soh: fleengk|You're so good at this.}}
{{ex:Så snill du er.|soh: sneel due: ae:r|How kind you are.}}
<p>When someone says one of those to you, answer <b>Takk</b>. Thanks for help is a noun, not <b>å</b> plus a verb: <b>Takk for hjelpen</b>. Not <b>Takk for å hjelpe</b>.</p>
{{ex:Takk for hjelpen.|tahk fohr YEHL-puhn|Thanks for the help.}}
<p>If the sentence starts with today, the verb is still the second element. <b>I dag er jeg mett</b>. <b>I dag vil jeg ha brød</b>.</p>
{{ex:I dag er jeg mett.|ee: dah:g ae:r yai meht|Today I'm full of food.}}
<div class="tip"><b>Most common mistake:</b> the English full, and thanks plus <b>å</b>. <b>Jeg er full</b> → <b>Jeg er mett</b>, when you mean full of food. <b>Takk for å hjelpe</b> → <b>Takk for hjelpen</b>.</div>
`,
    check: [
      ["I'm full of food.", ["Jeg er full.", "Jeg er mett.", "Jeg er fylt.", "Jeg har full."], 1, "mett is full of food. full, of a person, means drunk."],
      ["Thanks for the meal.", ["Takk for maten.", "Takk for mat.", "Takk for å maten.", "Takk for å spise."], 0, "The set phrase uses the definite ending: maten."],
      ["Someone says: Du er så flink. You answer.", ["Du er også flink.", "Vel bekomme.", "Takk.", "Du er snill."], 2, "A compliment gets takk. You do not have to send one back. Vel bekomme answers Takk for maten."]
    ],
    practice: [
      ["mc", "I'm full of food.", "Jeg er mett.", "Jeg er full.", "Jeg er fylt.", "Jeg har mett.", "mett is full of food. full, of a person, means drunk."],
      ["mc", "That was really good. =", "Det var kjempegodt.", "Det var kjempegod.", "Det er kjempegodt.", "Det var kjempe godt.", "det is neuter, so godt, in one word. The set phrase for that was uses var: Det var kjempegodt."],
      ["mc", "Thanks for the help. =", "Takk for hjelpen.", "Takk for å hjelpe.", "Takk for hjelpe.", "Takk for å hjelpen.", "Use the noun with the definite ending: hjelpen."],
      ["mc", "Someone says Du er så flink. You answer.", "Takk.", "Vel bekomme.", "Du er også flink.", "Jeg er flink.", "A compliment gets takk, not a return. Vel bekomme answers Takk for maten."],
      ["mc", "You cooked. The guest says Takk for maten. You answer.", "Vel bekomme.", "Takk.", "Det var kjempegodt.", "Jeg er mett.", "Vel bekomme is the host's reply to Takk for maten."],
      ["or", "Can I have a roll? (start with Kan)", "Kan jeg få et rundstykke", "en å", "rundstykke is neuter: et rundstykke."],
      ["or", "Today I want milk. (start with i dag)", "I dag | vil | jeg | ha | melk", "å", "Verb second: i dag is the first element, then vil."],
      ["or", "How kind you are. (start with Så snill)", "Så snill | du | er", "snilt", "Start with Så snill: Så snill du er. Du er så snill is also correct, and it is a different order."],
      ["fi", "Kan jeg få __ kaffe?", "Can I have a coffee?", "en", "et|ei|den", "kaffe is masculine: en kaffe."],
      ["fi", "Jeg er __.", "I'm full of food.", "mett", "full|fylt|god", "mett is full of food. full, of a person, means drunk."],
      ["fi", "Takk for __.", "Thanks for the help.", "hjelpen", "hjelp|hjelpe|maten", "The definite ending is on the noun: hjelpen."],
      ["ty", "Can I have a coffee? (say Kan jeg få)", "Kan jeg få en kaffe?", "kunne · få · kaffe", "et å", "kaffe is masculine: en kaffe."],
      ["ty", "Today I'm full of food. (start with i dag)", "I dag er jeg mett.", "være · mett · verb second", "full", "Verb second: i dag is the first element, then er."],
      ["ty", "Thanks for the meal.", "Takk for maten.", "takk · mat", "mat å", "mat takes the definite ending: maten."]
    ]
  },
  {
    id: "double-def",
    title: "Double definiteness: den store bilen",
    blurb: "Say the big car with den, det or de, and keep the ending on the noun.",
    deck: "Shopping and clothes",
    body: `
<p>English says the once: the big car. Norwegian, when an adjective sits inside that phrase, says it twice. A small word comes first, and the definite ending stays on the noun. That pair is the double definite.</p>
<h3>den, det, de, and the ending</h3>
<p><b>den</b> goes with masculine and with feminine. <b>den store bilen</b>, the big car. <b>den store boka</b>, the big book. <b>den røde jakka</b>, the red jacket. <b>det</b> goes with neuter. <b>det store huset</b>, the big house. <b>det røde huset</b>, the red house. <b>de</b> goes with the plural. <b>de store bilene</b>, the big cars. This <b>de</b> is the plural word, not a formal you.</p>
{{ex:den store bilen|dehn STOO:-ruh BEE:-luhn|the big car}}
{{ex:den store boka|dehn STOO:-ruh BOO:-kah|the big book}}
{{ex:det store huset|deh: STOO:-ruh HUE:-suh|the big house}}
{{ex:de store bilene|dee: STOO:-ruh BEE:-luh-nuh|the big cars}}
{{ex:det røde huset|deh: ROE:-duh HUE:-suh|the red house}}
<p>The adjective takes <b>-e</b> for every gender in this pattern. Not <b>-t</b>. Compare three houses you already know. A big house, indefinite, is <b>et stort hus</b>, with <b>-t</b>. The house is big, after <b>er</b>, is <b>Huset er stort</b>, with <b>-t</b> again, and no <b>den</b> or <b>det</b>. The big house, with the adjective inside the, is <b>det store huset</b>. <b>store</b>, not <b>stort</b>, and the ending stays.</p>
{{ex:et stort hus|eht stoo:rt hue:s|a big house}}
{{ex:Huset er stort.|HUE:-suh ae:r stoo:rt|The house is big.}}
<h3>liten becomes lille</h3>
<p><b>liten</b> changes shape here. In front of the definite noun it becomes <b>lille</b>: <b>den lille bilen</b>, <b>den lille boka</b>, <b>det lille huset</b>. The plural stays <b>små</b>. <b>barn</b> has no plural ending, and the definite plural is <b>barna</b>: <b>de små barna</b>.</p>
{{ex:den lille boka|dehn LEEL-uh BOO:-kah|the little book}}
{{ex:de små barna|dee: smoh: BAH:-rnah|the little children}}
<p>Leave the ending on. <b>den store bil</b>, <b>det store hus</b> and <b>de store biler</b> are the English pattern, with the ending missing. The ending is not optional. <b>denne</b>, <b>dette</b> and <b>disse</b> can take the same adjective: <b>denne store bilen</b>, this big car. Same ending. You can build the simpler <b>den store bilen</b> first.</p>
{{ex:denne store bilen|DEHN-uh STOO:-ruh BEE:-luhn|this big car}}
<h3>The verb does not move</h3>
<p><b>kjøpe</b> means to buy. The present is <b>kjøper</b>. <b>I dag kjøper jeg den store bilen</b>. <b>I dag</b> is the first element, then <b>kjøper</b>, then <b>jeg</b>. <b>ikke</b> stays after the conjugated verb: <b>Jeg liker ikke det store huset</b>. Not <b>Jeg ikke liker</b>, and not <b>det stort huset</b>.</p>
{{ex:Jeg liker ikke det store huset.|yai LEE:-kuhr EEK-uh deh: STOO:-ruh HUE:-suh|I don't like the big house.}}
{{ex:I dag kjøper jeg den store bilen.|ee: dah:g HYOE:-puhr yai dehn STOO:-ruh BEE:-luhn|Today I'm buying the big car.}}
<div class="tip"><b>Most common mistake:</b> the adjective with no ending on the noun. <b>den store bil</b> → <b>den store bilen</b>. Double definite: the word in front, and the definite ending stays.</div>
`,
    check: [
      ["the big car", ["den store bil", "den stor bilen", "den store bilen", "det store bilen"], 2, "Double definite: den, the adjective in -e, and the definite ending. bil is masculine."],
      ["the big house", ["det store huset", "den store huset", "det stort huset", "det store hus"], 0, "hus is neuter, so det. The adjective is store, not stort, and the ending stays."],
      ["a big house, not the phrase with the", ["et store hus", "et stort hus", "det store huset", "den store hus"], 1, "Indefinite neuter still takes -t: et stort hus. det store huset is the double definite."]
    ],
    practice: [
      ["mc", "the big car =", "den store bilen", "den store bil", "den stort bilen", "det store bilen", "Double definite: den plus the definite ending. bil is masculine."],
      ["mc", "the big house =", "det store huset", "den store huset", "det stort huset", "det store hus", "hus is neuter, so det, and the adjective is store. The definite ending stays."],
      ["mc", "the big book =", "den store boka", "det store boka", "den store bok", "den stora boka", "bok is feminine. den is for masculine and feminine. The ending is -a."],
      ["mc", "the little book =", "den lille boka", "den lita boka", "den liten boka", "det lille boka", "In the double definite, liten becomes lille. bok is feminine: den lille boka."],
      ["mc", "the big cars =", "de store bilene", "den store bilene", "de store biler", "det store bilene", "Plural takes de, and the definite ending stays: de store bilene."],
      ["or", "the red book", "den røde boka", "rød det", "bok is feminine: den røde boka. Double definite, so the adjective takes -e."],
      ["or", "Today I'm buying the big car. (start with i dag)", "I dag | kjøper | jeg | den | store | bilen", "stor bil", "Verb second: i dag is the first element, then kjøper."],
      ["or", "the little house", "det lille huset", "lite liten", "hus is neuter: det lille huset. liten becomes lille in the double definite."],
      ["fi", "den store __", "the big car", "bilen", "bil|bilene|boka", "Double definite: the definite ending stays. bil is masculine: bilen."],
      ["fi", "__ store huset", "the big house", "det", "den|de|et", "hus is neuter, so det store huset."],
      ["fi", "de __ bilene", "the big cars", "store", "stor|stort|stora", "Plural double definite: the adjective takes -e: store."],
      ["ty", "the big book", "den store boka", "bok · stor · double definite", "bok stora", "bok is feminine: den store boka."],
      ["ty", "I do not like the big house. (statement)", "Jeg liker ikke det store huset.", "like · ikke goes after the verb · hus", "stort den", "ikke goes after the verb. hus is neuter: det store huset."],
      ["ty", "the red cars", "de røde bilene", "bil · rød · plural", "rød den", "Plural takes de, and the definite ending stays: de røde bilene."]
    ]
  },
  {
    id: "past",
    title: "The past tense",
    blurb: "Talk about yesterday with snakket, kjøpte, var and gikk, and type -et.",
    deck: "Likes and free time",
    body: `
<p>English adds -ed to most verbs. Norwegian has a few patterns, and the past is one form for <b>jeg</b>, <b>du</b>, <b>hun</b> and <b>vi</b>, just like the present. The spelling of the ending is the work.</p>
<h3>The snakke group: -et</h3>
<p>Verbs like <b>snakke</b> take <b>-et</b>. <b>snakke</b> becomes <b>snakket</b>. <b>vaske</b> becomes <b>vasket</b>. <b>lage</b>, to make, becomes <b>laget</b>. <b>jobbe</b> becomes <b>jobbet</b>. You will hear <b>snakka</b>, especially in speech, and you will sometimes read it. This course types <b>snakket</b>. Do not type <b>snakka</b>.</p>
{{ex:Jeg snakket norsk.|yai SNAHK-uh nohshk|I spoke Norwegian.}}
{{ex:Jeg vasket huset.|yai VAHS-kuh HUE:-suh|I cleaned the house.}}
<h3>The -te group, and the short list</h3>
<p>A second group takes <b>-te</b> or <b>-de</b>. <b>kjøpe</b> becomes <b>kjøpte</b>. <b>spise</b> becomes <b>spiste</b>. <b>lese</b> becomes <b>leste</b>. <b>bo</b> becomes <b>bodde</b>. <b>bruke</b>, to use or to spend, becomes <b>brukte</b>. A few verbs change the stem instead. <b>være</b> becomes <b>var</b>. <b>ha</b> becomes <b>hadde</b>. <b>gå</b> becomes <b>gikk</b>. <b>dra</b>, to go somewhere, becomes <b>dro</b>. <b>komme</b> becomes <b>kom</b>.</p>
<div class="tbl"><table><tr><th>Infinitive</th><th>Past</th><th>English</th></tr><tr><td class="k">snakke</td><td class="k">snakket</td><td>speak</td></tr><tr><td class="k">kjøpe</td><td class="k">kjøpte</td><td>buy</td></tr><tr><td class="k">spise</td><td class="k">spiste</td><td>eat</td></tr><tr><td class="k">være</td><td class="k">var</td><td>be</td></tr><tr><td class="k">ha</td><td class="k">hadde</td><td>have</td></tr><tr><td class="k">gå</td><td class="k">gikk</td><td>walk, go</td></tr><tr><td class="k">dra</td><td class="k">dro</td><td>go (to a place)</td></tr><tr><td class="k">komme</td><td class="k">kom</td><td>come</td></tr></table></div>
{{ex:Jeg kjøpte ei bok.|yai HYOEP-tuh ai boo:k|I bought a book.}}
{{ex:Jeg var hjemme.|yai vah:r YEHM-uh|I was at home.}}
{{ex:Jeg gikk hjem.|yai yeek yehm|I walked home.}}
{{ex:Jeg dro til Bergen.|yai droo: teel BAER-guhn|I went to Bergen.}}
{{ex:Anna kom hjem.|AHN-ah kohm yehm|Anna came home.}}
<p><b>gikk</b> is not a hard g. The aid writes it <b>yeek</b>, because <b>g</b> before <b>i</b> is the <b>y</b> sound. Place and direction stay as you learned them. <b>Jeg var hjemme</b>, I was at home. <b>Jeg gikk hjem</b>, I walked home. The article stays with the gender: <b>Jeg kjøpte ei bok</b>, not <b>en bok</b>. <b>Jeg hadde ei bok</b>.</p>
<h3>i går, ikke, and questions</h3>
<p><b>i går</b> means yesterday, and it pulls the verb with it. <b>I går</b> is the first element, so the conjugated verb is next, and the subject follows. <b>I går snakket jeg norsk</b>. <b>I går spiste jeg brød</b>. Not <b>I går jeg snakket</b>. The line <b>Det var kjempegodt</b> from the food lesson is this same <b>var</b>.</p>
{{ex:I går spiste jeg brød.|ee: goh:r SPEES-tuh yai broe:|Yesterday I ate bread.}}
<p><b>ikke</b> stays after that verb. <b>Jeg snakket ikke norsk</b>. A yes/no question still starts with the verb: <b>Snakket du norsk?</b></p>
{{ex:Jeg snakket ikke norsk.|yai SNAHK-uh EEK-uh nohshk|I didn't speak Norwegian.}}
{{ex:Snakket du norsk?|SNAHK-uh due: nohshk|Did you speak Norwegian?}}
<div class="tip"><b>Most common mistake:</b> English word order after yesterday, and an English ending. <b>I går jeg snakket</b> → <b>I går snakket jeg</b>. For the snakke group, what you type is <b>snakket</b>, not <b>snakka</b>.</div>
`,
    check: [
      ["I spoke Norwegian. Which do you type?", ["Jeg snakket norsk.", "Jeg snakka norsk.", "Jeg snakker norsk.", "Jeg snaket norsk."], 0, "The snakke group takes -et: snakket. You may hear snakka. You type snakket."],
      ["Yesterday I ate bread. (start with i går)", ["I går jeg spiste brød.", "I går spiste jeg brød.", "I går spist jeg brød.", "I går spiste brød jeg."], 1, "Verb second: i går is the first element, then spiste, then jeg."],
      ["In the aid, gikk starts with which sound?", ["a hard g, as in go", "sh, as in ship", "y, as in yes", "k, as in kite"], 2, "g before i is the y sound. The aid writes gikk as yeek."]
    ],
    practice: [
      ["mc", "I spoke. =", "Jeg snakket.", "Jeg snakka.", "Jeg snakker.", "Jeg snaket.", "The snakke group takes -et: snakket. You may hear snakka. You type snakket."],
      ["mc", "I bought. =", "Jeg kjøpte.", "Jeg kjøpet.", "Jeg kjøped.", "Jeg kjøpe.", "kjøpe takes -te: kjøpte, not an English -ed spelling."],
      ["mc", "I was at home.", "Jeg var hjemme.", "Jeg var hjem.", "Jeg er hjemme.", "Jeg vært hjemme.", "være in the past is var, and the place is hjemme."],
      ["mc", "I walked home.", "Jeg gikk hjem.", "Jeg gikk hjemme.", "Jeg gådde hjem.", "Jeg gikk til hjem.", "gå in the past is gikk, and the direction is hjem."],
      ["mc", "She came yesterday.", "Hun kom i går.", "Hun komme i går.", "Hun kommet i går.", "Hun kommer i går.", "komme in the past is kom, one form for every person."],
      ["or", "Yesterday I spoke Norwegian. (start with i går)", "I går | snakket | jeg | norsk", "snakka snakker", "Verb second: i går is the first element, then snakket."],
      ["or", "I bought a book. (statement)", "Jeg kjøpte ei bok", "en kjøped", "bok is feminine: ei bok. kjøpe takes -te."],
      ["or", "I did not eat. (statement)", "Jeg spiste ikke", "spiset", "ikke goes after the verb."],
      ["fi", "Jeg __ norsk.", "I spoke Norwegian.", "snakket", "snakka|snakker|snaket", "Type -et: snakket. You may hear snakka. You do not type it."],
      ["fi", "I går __ jeg brød.", "Yesterday I ate bread.", "spiste", "spiset|spised|snakket", "spise takes -te: spiste. The verb comes right after i går."],
      ["fi", "Jeg __ til Bergen.", "I went to Bergen. (use dro)", "dro", "gikk|kom|var", "dra in the past is dro. gikk is walked, and kom is came."],
      ["ty", "Yesterday I bought a book. (start with i går)", "I går kjøpte jeg ei bok.", "kjøpe · bok · verb second", "en kjøped", "Verb second: i går is the first element, then kjøpte. bok is feminine: ei bok."],
      ["ty", "I did not speak Norwegian. (statement)", "Jeg snakket ikke norsk.", "snakke · ikke goes after the verb", "snakka", "ikke goes after the verb. The snakke group takes -et: snakket."],
      ["ty", "I had a book.", "Jeg hadde ei bok.", "ha · bok", "en var", "bok is feminine: ei bok. ha in the past is hadde."]
    ]
  },
  {
    id: "traps",
    title: "False friends",
    blurb: "Spot words that look like English and say what you actually mean.",
    deck: "Traps for English speakers",
    body: `
<p>Some Norwegian words look like English and mean something else. Learn the real meaning and the word you actually want. Gender and the verb still follow the rules you know.</p>
<h3>People and things</h3>
<p><b>gift</b> looks like a present. It means married, and it can mean poison. A present is <b>ei gave</b>. <b>gave</b> is feminine here, so <b>ei</b> and <b>-a</b>: <b>gava</b>. You will also see <b>en gave</b>. Type <b>ei</b>.</p>
{{ex:Kari er gift.|KAH-ree ae:r yeeft|Kari is married.}}
{{ex:ei gave|ai GAH:-vuh|a present}}
<p><b>et barn</b> is a child. A barn, the building, is <b>en låve</b>. <b>sky</b> is a cloud, feminine, and also the adjective shy: <b>Han er sky</b>. The sky is <b>himmelen</b>. <b>himmel</b> is masculine, so no <b>-t</b> on the color.</p>
{{ex:en låve|ehn LOH:-vuh|a barn (the building)}}
{{ex:ei sky|ai shew:|a cloud}}
{{ex:Himmelen er blå.|HEEM-uh-luhn ae:r bloh:|The sky is blue.}}
<h3>Time, money, and work</h3>
<p><b>time</b> looks like time. <b>en time</b> is an hour, or an appointment. Time in general is <b>tid</b>. <b>fabrikk</b> looks like fabric. <b>en fabrikk</b> is a factory. Fabric is <b>et stoff</b>, neuter. <b>billig</b> means cheap: <b>en billig bil</b>. A bill is <b>en regning</b>, masculine.</p>
{{ex:en time|ehn TEE:-muh|an hour, or an appointment}}
{{ex:Jeg har ikke tid.|yai hah:r EEK-uh tee:|I don't have time.}}
{{ex:en fabrikk|ehn fahb-REEK|a factory}}
{{ex:et stoff|eht stohf|fabric}}
{{ex:en regning|ehn RAI-neeng|a bill}}
<p><b>spent</b> looks like spent and means excited. Money that was spent is <b>Jeg brukte penger</b>. <b>penger</b> is money. <b>rar</b> looks like rare and means strange. Rare is <b>sjelden</b>: <b>Det er sjelden</b>. <b>eventuelt</b> looks like eventually and means possibly: <b>Jeg kommer eventuelt</b>. For eventually, <b>til slutt</b> is in the end and <b>etter hvert</b> is over time. <b>aktuell</b> looks like actual and means current or relevant: <b>Det er aktuelt</b>. Really is <b>faktisk</b>.</p>
{{ex:Anna er spent.|AHN-ah ae:r spehnt|Anna is excited.}}
{{ex:Filmen er rar.|FEEL-muhn ae:r rah:r|The film is strange.}}
{{ex:Jeg bor faktisk i Oslo.|yai boo:r FAHK-teesk ee: OOS-loo|I actually live in Oslo.}}
<h3>Full, fun, want, and two words from the neighbors</h3>
<p>A glass can be full, and <b>glass</b> is neuter, so <b>-t</b>. A person who is <b>full</b> is drunk. Full of food is <b>Jeg er mett</b>. <b>rolig</b> means calm. Fun is <b>gøy</b>, and the adjective is <b>morsom</b>: <b>en morsom film</b>. <b>flink</b> is good at something. <b>god</b> is good quality. <b>snill</b> is kind.</p>
{{ex:Glasset er fullt.|GLAHS-uh ae:r fuelt|The glass is full.}}
{{ex:Han er rolig.|hahn ae:r ROO:-lee|He is calm.}}
{{ex:Det er gøy.|deh: ae:r goey|It's fun.}}
<p><b>vil</b> means want, not a plan. Age uses <b>bli</b>. A plan uses <b>skal</b>: <b>Jeg skal til Bergen</b>. I'm cold is still <b>Jeg fryser</b>, not <b>Jeg er kald</b>.</p>
{{ex:Jeg blir tretti.|yai blee:r TREHT-ee|I'm turning thirty.}}
{{ex:I dag fryser jeg.|ee: dah:g FREW:-suhr yai|Today I'm cold.}}
<p>Swedish <b>semester</b> means a vacation. Here, <b>et semester</b> is a school term. A holiday is <b>ferie</b>: <b>Jeg er på ferie</b>. Danish <b>frokost</b> means lunch. Here, frokost is breakfast, and lunch is <b>lunsj</b>.</p>
{{ex:et semester|eht seh-MEHS-tuhr|a school term}}
{{ex:Jeg spiser frokost.|yai SPEE:-suhr FROO:-kohst|I eat breakfast.}}
<p><b>Til slutt</b> is one element, so the verb is next, then <b>vi</b>. Not <b>Til slutt vi dro</b>. <b>Etter hvert blir det bra</b> means over time it will be fine.</p>
{{ex:Til slutt dro vi hjem.|teel sluet droo: vee: yehm|In the end we went home.}}
<div class="tip"><b>Most common mistake:</b> the English meaning of the look-alike. A present as <b>gift</b> → <b>ei gave</b>. <b>gift</b> means married.</div>
`,
    check: [
      ["A present is…", ["gift", "ei gave", "en time", "et barn"], 1, "gave is feminine: ei gave. gift means married, or poison."],
      ["en time means…", ["an hour, or an appointment", "time in general", "a factory", "fabric"], 0, "en time is an hour or an appointment. Time in general is tid."],
      ["I'm turning thirty.", ["Jeg vil være tretti.", "Jeg skal tretti.", "Jeg blir tretti.", "Jeg er vil tretti."], 2, "Age uses bli: Jeg blir tretti. vil means want, and skal is a plan."]
    ],
    practice: [
      ["mc", "a present (use ei) =", "ei gave", "et gift", "en gift", "ei gift", "gave is feminine: ei gave. gift means married, or poison."],
      ["mc", "an hour, or an appointment =", "en time", "en tid", "et time", "ei tid", "time is masculine: en time. Time in general is tid."],
      ["mc", "a factory =", "en fabrikk", "et stoff", "en stoff", "et fabrikk", "fabrikk is masculine: en fabrikk. Fabric is et stoff, and stoff is neuter."],
      ["mc", "The sky is blue.", "Himmelen er blå.", "Skya er blå.", "Himmelen er blått.", "Himmelen er blåe.", "The sky is himmelen. himmel is masculine, so blå has no ending. ei sky is a cloud."],
      ["mc", "I eat breakfast.", "Jeg spiser frokost.", "Jeg spiser lunsj.", "Jeg spiser middag.", "Jeg spiser matpakke.", "frokost is breakfast. In Danish, frokost is lunch. Lunch here is lunsj."],
      ["or", "a present (use ei)", "ei gave", "gift en", "gave is feminine: ei gave."],
      ["or", "Today I don't have time. (start with i dag)", "I dag | har | jeg | ikke | tid", "time", "Verb second: i dag is the first element, then har. ikke goes after the verb."],
      ["or", "a bill", "en regning", "billig", "regning is masculine: en regning. billig means cheap."],
      ["fi", "Kari er __.", "Kari is married.", "gift", "gave|gava|gifte", "gift means married. A present is different: gave is feminine, ei gave."],
      ["fi", "Jeg er __.", "I'm full of food.", "mett", "full|fullt|fylt", "mett is full of food. fullt is the neuter of full, for a glass. A person who is full is drunk."],
      ["fi", "Jeg spiser __.", "I eat breakfast.", "frokost", "lunsj|middag|ferie", "frokost is breakfast. In Danish, frokost is lunch. Lunch here is lunsj."],
      ["ty", "a present (use ei)", "ei gave", "gave · feminine", "gift en", "gave is feminine: ei gave."],
      ["ty", "Today I'm cold. (start with i dag)", "I dag fryser jeg.", "fryse · verb second", "kald er", "Verb second: i dag is the first element, then fryser."],
      ["ty", "an hour", "en time", "time · masculine", "tid gave", "time is masculine: en time. It is an hour or an appointment."]
    ]
  }
];
