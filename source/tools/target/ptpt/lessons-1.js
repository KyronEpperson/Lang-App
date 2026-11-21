/* en-ptpt lessons 1–10 (vowels through numbers). EN-PTPT-1.
   Every pron is tools/target/ptpt/respell.js output, pasted unchanged. */
module.exports = [
  {
    id: "vowels",
    title: "Sounds of Portugal: reduced vowels and final s",
    blurb: "Hear Lisbon vowels and final s, and read the pronunciation line under each new word.",
    deck: "Sounds and spelling",
    body: `
<p>Lisbon Portuguese does not sound like the spelling. Under each new phrase there is a pronunciation line in English letters. CAPITALS mark the stressed syllable. A one-syllable word stays in small letters. Trust a Portugal voice. A Brazilian clip teaches the wrong <b>t</b>, the wrong final <b>l</b>, and the wrong final <b>s</b>.</p>
<h3>Vowels that shrink</h3>
<p>An unstressed vowel gets small. Unstressed <b>a</b> is <i>uh</i>. Unstressed <b>e</b> is <i>ih</i>, and fast speech often drops it. The line keeps <i>ih</i>. Unstressed <b>o</b> is <i>oo</i>. Stressed <b>a</b> is <i>ah</i>, except before <b>m</b>, <b>n</b>, or <b>nh</b>, where it is <i>uh</i>. Between vowels, <b>b</b>, <b>d</b>, and <b>g</b> are softer than in English. The line does not mark that.</p>
{{ex:o telefone|oo tih-lih-FAW-nih|the telephone}}
{{ex:pequeno|pih-KAY-noo|small}}
{{ex:a casa|uh KAH-zuh|the house}}
{{ex:a cama|uh KUH-muh|the bed}}
<h3>Final s, clean t and d</h3>
<p>Before a pause or a voiceless consonant, syllable-final <b>s</b> sounds like <i>sh</i>. Before a voiced consonant it sounds like <i>zh</i>, the <i>s</i> in <i>measure</i>. Before a vowel it often links on as <i>z</i>. The line keeps the pause form of each word.</p>
{{ex:dois|doysh|two}}
{{ex:Lisboa|lihzh-BOH-uh|Lisbon}}
<p><b>t</b> and <b>d</b> stay <b>t</b> and <b>d</b>, including before <b>i</b>. <b>dia</b> has a clean <b>d</b>. <b>noite</b> has a clean <b>t</b>.</p>
{{ex:o dia|oo DEE-uh|the day}}
{{ex:a noite|uh NOY-tih|the night}}
<h3>Two r sounds, and l</h3>
<p>The strong <b>r</b>, written <i>kh</i>, is a word-initial <b>r</b>, <b>rr</b>, and <b>r</b> after <b>l</b>, <b>n</b>, or <b>s</b>. A single <b>r</b> elsewhere, including on <b>falar</b>, is a tap. <b>l</b> stays <b>l</b>, as on <b>Brasil</b>.</p>
{{ex:o carro|oo KAH-khoo|the car}}
{{ex:caro|KAH-roo|expensive}}
{{ex:Brasil|bruh-ZEEL|Brazil}}
{{ex:falar|fuh-LAHR|to speak}}
<h3>A few labels the line uses</h3>
<p><b>ou</b> is a closed <i>oh</i>, with no <i>w</i>. <b>ei</b> is <i>uh</i> plus a short <i>y</i>. The line writes <i>uhy</i>. <i>ng</i> after a vowel means the vowel is nasal: air goes through the nose. <b>lh</b> is one sound, not <i>l</i> plus <i>y</i>. <b>nh</b> is one nasal sound, close to the <i>ny</i> in <i>canyon</i>.</p>
{{ex:o leite|oo LUHY-tih|the milk}}
{{ex:não|nowng|no; not}}
<h3>The small words o and a</h3>
<p>English has one word for <i>the</i>. Every Portuguese noun is masculine or feminine, and the word for <i>the</i> agrees with that group. <b>o</b> is masculine, and on the line it is <i>oo</i>. The article <b>a</b> is feminine, and it is <i>uh</i>. Learn each noun with that small word. Two agrees as well: <b>dois</b> with a masculine noun, <b>duas</b> with a feminine noun. The euro is masculine.</p>
{{ex:dois euros|doysh AYW-rawsh|two euros}}
<div class="tip"><b>Most common mistake:</b> saying <b>dia</b> with an English or Brazilian j → <b>dia</b> with a clean d.</div>
`,
    check: [
      ["What do the CAPITALS in a pronunciation line mark?", ["A letter you do not say", "The stressed syllable, the one you lean on", "A nasal vowel", "An accent mark in the Portuguese spelling"], 1, "Capitals mark the stressed syllable. A one-syllable word stays in small letters."],
      ["How does the s at the end of dois sound, before a pause?", ["Like sh", "Like an English z every time", "It is silent", "Like the j in juice"], 0, "Final s before a pause sounds like sh. The line writes doysh."],
      ["Which line is the Lisbon sound of dia?", ["JEE-uh", "DYE-uh", "DEE-uh, with a clean d", "The English word day"], 2, "t and d stay clean before i. dia is DEE-uh, not a Brazilian j."]
    ],
    practice: [
      ["mc", "Which line matches dia in Lisbon?", "DEE-uh", "JEE-uh", "DYE-uh", "DEE-ay", "t and d stay clean. dia is DEE-uh, with a d, not a j."],
      ["mc", "What does the FAW in tih-lih-FAW-nih mark?", "The stressed syllable", "A nasal vowel", "A silent letter", "The Portuguese word for telephone", "Capitals mark the syllable you lean on."],
      ["mc", "The r in carro (KAH-khoo) is which sound?", "The strong kh", "The quick tap", "A silent letter", "The same as l", "rr is the strong kh. A single r between vowels, as in caro, is the tap."],
      ["mc", "Final s in dois sounds like", "sh", "the s in see", "the j in juice", "nothing at all", "Before a pause, final s sounds like sh."],
      ["mc", "Which small word agrees with casa?", "a", "o", "dois", "duas", "casa is feminine. The feminine article is a, and it agrees with the noun."],
      ["or", "the milk", "o leite", "a", "o is the masculine article. It agrees with leite."],
      ["or", "the house", "a casa", "o", "a is the feminine article. It agrees with casa."],
      ["or", "two euros", "dois euros", "duas", "euros is a masculine noun, so dois agrees with it."],
      ["fi", "__ leite", "the milk", "o", "a|duas|dia", "o is the masculine article. It agrees with leite."],
      ["fi", "__ casa", "the house", "a", "o|dois|noite", "a is the feminine article. casa is feminine, so the article agrees."],
      ["fi", "__ carro", "the car", "o", "a|duas|caro", "carro is masculine. The article agrees: o, not a."],
      ["ty", "the house", "a casa", "casa · feminine", "o", "The article agrees with the feminine noun."],
      ["ty", "the milk", "o leite", "leite · masculine", "a", "o is the masculine article. It agrees with leite."],
      ["ty", "two euros", "dois euros", "dois · euro", "duas", "euros is a masculine noun, so dois agrees with it."]
    ]
  },
  {
    id: "nasals",
    title: "Nasal sounds, lh, nh and the written accents",
    blurb: "Say the nasal vowels, lh, nh and ç, and use an accent to read stress and open or closed vowels.",
    deck: "Sounds and spelling",
    body: `
<p>This lesson is the nasal spellings, plus <b>lh</b>, <b>nh</b>, <b>ç</b>, and the accent marks. An accent tells you where the stress sits, and whether a stressed <b>e</b> or <b>o</b> is open or closed.</p>
<h3>Nasal vowels</h3>
<p>English sends almost every vowel out through the mouth. A nasal vowel sends air through the nose at the same time. You do not finish it with a consonant <i>n</i>. <b>ão</b> and a final <b>-am</b> are <i>owng</i>. <b>ãe</b> and a final <b>-em</b> are the same ending in this Lisbon standard, <i>uhyng</i>. So <b>bem</b> rhymes with <b>mãe</b>. <b>ã</b> alone is <i>uhng</i>. When <b>m</b> or <b>n</b> stands before another consonant, the letter stays on the line and the vowel is still nasal.</p>
{{ex:não|nowng|no; not}}
{{ex:o pão|oo powng|the bread}}
{{ex:a mãe|uh muhyng|the mother}}
{{ex:bem|buhyng|well}}
{{ex:também|tuhm-BUHYNG|also}}
{{ex:cantar|kuhn-TAHR|to sing}}
<h3>lh and nh, each one sound</h3>
<p><b>lh</b> is one palatal sound, not <i>l</i> plus <i>y</i>. Think of the <i>lli</i> in <i>million</i>, said as one piece, with the tongue tip down. <b>nh</b> is a different single sound, close to the <i>ny</i> in <i>canyon</i>. In <b>vinho</b> the <b>i</b> stays a clear <i>ee</i>. Before <b>nh</b>, a stressed <b>a</b> is <i>uh</i>, as in <b>banho</b>.</p>
{{ex:o filho|oo FEE-lhoo|the son}}
{{ex:a filha|uh FEE-lhuh|the daughter}}
{{ex:o vinho|oo VEE-nhoo|the wine}}
{{ex:o banho|oo BUH-nhoo|the bath}}
<h3>The c with a tail</h3>
<p><b>ç</b> is an <b>s</b> sound. Portuguese writes it when the next vowel is <b>a</b>, <b>o</b>, or <b>u</b>, because a plain <b>c</b> in that spot would sound like <i>k</i>. Before <b>e</b> or <b>i</b>, a plain <b>c</b> is already <i>s</i>, so you do not write <b>ç</b> there.</p>
{{ex:a praça|uh PRAH-suh|the square}}
{{ex:o açúcar|oo uh-SOO-kuhr|the sugar}}
{{ex:a maçã|uh muh-SUHNG|the apple}}
<h3>Accents: stress, open, closed</h3>
<p>A word that ends in <b>a</b>, <b>e</b>, <b>o</b>, in those plus <b>s</b>, or in <b>am</b> or <b>em</b>, is stressed on the next-to-last syllable. Any other ending is stressed on the last syllable. An accent overrides that. <b>á é í ó ú</b> and <b>â ê ô</b> show the stressed syllable. Acute <b>é</b> and <b>ó</b> are open. Circumflex <b>ê</b> and <b>ô</b> are closed. Open <b>o</b> is <i>aw</i>, as in <i>law</i>. Closed <b>o</b> is <i>oh</i>. The grave accent <b>à</b> is not a stress mark. It means <i>to the</i>, and a later lesson handles it.</p>
{{ex:café|kuh-FEH|coffee}}
{{ex:a avó|uh uh-VAW|the grandmother}}
{{ex:o avô|oo uh-VOH|the grandfather}}
<p>Some common words do not write the open or closed difference. <b>porta</b> has an open <i>aw</i>. <b>Porto</b>, the city, has a closed <i>oh</i>. They are different vowels. The line shows which one you have.</p>
{{ex:a porta|uh PAWR-tuh|the door}}
{{ex:Porto|POHR-too|Porto}}
<div class="tip"><b>Most common mistake:</b> saying <b>filha</b> as <i>l</i> plus <i>y</i> → one <b>lh</b>, a single sound.</div>
`,
    check: [
      ["In this Lisbon standard, bem rhymes with which word?", ["mãe", "bom", "não", "dia"], 0, "Final em and ãe are the same ending here. bem rhymes with mãe."],
      ["What is lh in filha?", ["l followed by y", "a silent h", "one palatal sound", "the same sound as nh"], 2, "lh is a single sound. nh is a different single sound. Neither h is silent."],
      ["What do avó and avô mean?", ["Both mean grandmother", "avó, open ó, is grandmother; avô, closed ô, is grandfather", "The accent is decoration, so the words match", "Both mean grandfather"], 1, "The accent changes the vowel and the person. Open avó is grandmother. Closed avô is grandfather."]
    ],
    practice: [
      ["mc", "Which pair rhymes in this Lisbon standard?", "bem and mãe", "bem and bom", "não and dia", "pão and leite", "Final em and ãe share an ending. bem rhymes with mãe."],
      ["mc", "Where is the stress in café?", "On the last syllable", "On the first syllable", "Café has no stress", "On a silent e", "The accent pulls the stress onto the last syllable and marks an open e."],
      ["mc", "Which word has the open o?", "porta", "Porto", "avô", "noite", "porta is open aw. Porto and avô are closed oh."],
      ["mc", "ç in praça sounds like", "s", "k", "sh", "a silent letter", "ç is the s sound before a, o, or u."],
      ["mc", "Which article agrees with mãe?", "a", "o", "duas", "dois", "mãe is feminine. The feminine article a agrees with it."],
      ["or", "the bread", "o pão", "a", "pão is masculine. o is the masculine article."],
      ["or", "the mother", "a mãe", "o", "mãe is feminine. The article agrees."],
      ["or", "the daughter", "a filha", "o", "filha is feminine, so a agrees with the noun."],
      ["fi", "a __", "the grandmother", "avó", "avô|filho|mãe", "avó, with open ó, is grandmother. It is feminine, so the article is a.", "!strict"],
      ["fi", "__ praça", "the square", "a", "o|duas|dois", "praça is feminine. The article agrees: a."],
      ["fi", "o __", "the son", "filho", "filha|banho|mãe", "filho is masculine, so the article is o. lh is one sound."],
      ["ty", "the grandmother (with the article)", "a avó", "avó · open ó", "avô", "avó is feminine. The article agrees.", "!strict"],
      ["ty", "the bread", "o pão", "pão · masculine", "a", "o is the masculine article. It agrees with pão."],
      ["ty", "the hand", "a mão", "mão · feminine", "o", "mão is feminine. The article agrees."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings and courtesy",
    blurb: "Greet someone at the right time of day, say please and excuse me, and thank them.",
    deck: "Greetings and courtesy",
    body: `
<p><b>Olá</b> works with anyone, at any hour. To sound placed in the day, add the greeting for the time. English says <i>good morning</i> as two general words. Portuguese picks <b>bom</b> or <b>boa</b> to agree with the noun, and the noun is singular.</p>
<h3>Morning, afternoon, after dark</h3>
<p>From dawn until noon, say <b>bom dia</b>. Many people switch at lunch instead of at noon. From that point until sunset, say <b>boa tarde</b>. After sunset, say <b>boa noite</b>. That one phrase covers the evening and good night. There is no separate greeting to learn for the small hours. <b>dia</b> is masculine, so the word for <i>good</i> is <b>bom</b>. <b>tarde</b> and <b>noite</b> are feminine, so the word is <b>boa</b>. Answer a greeting with the same greeting.</p>
{{ex:Olá|aw-LAH|Hello}}
{{ex:Bom dia|bohng DEE-uh|Good morning}}
{{ex:Boa tarde|BOH-uh TAHR-dih|Good afternoon}}
{{ex:Boa noite|BOH-uh NOY-tih|Good evening. Good night.}}
<h3>Thank you matches the speaker</h3>
<p>English <i>thank you</i> never changes. Portuguese <b>obrigado</b> agrees with the person who is speaking, not with the person who helped. A man says <b>obrigado</b>, even to a woman. A woman says <b>obrigada</b>, even to a man. Some women do say <b>obrigado</b>. The form this course asks you to produce still agrees: <b>obrigada</b> from a woman. The answer to thanks is <b>de nada</b>, <i>you're welcome</i>.</p>
{{ex:Obrigado|aw-bree-GAH-doo|Thank you (said by a man)}}
{{ex:Obrigada|aw-bree-GAH-duh|Thank you (said by a woman)}}
{{ex:De nada|dih NAH-duh|You're welcome}}
<h3>Excuse me, and please</h3>
<p>To get a stranger's attention, in the street or in a shop, say <b>desculpe</b>. The ending is the one for a person you do not know. A friend hears a different ending, and the next lesson shows why. <b>Se faz favor</b> is please, especially when you ask for something in a shop. <b>Por favor</b> means the same and is also normal. When an exercise asks for please, it asks for <b>se faz favor</b>.</p>
{{ex:Desculpe|dihsh-KOOL-pih|Excuse me (to a stranger)}}
{{ex:Se faz favor|sih fahsh fuh-VOHR|Please}}
<div class="tip"><b>Most common mistake:</b> a woman saying <b>obrigado</b> → <b>obrigada</b>, agreeing with the woman who is speaking.</div>
`,
    check: [
      ["It is 9 pm and you walk into a café. What do you say?", ["Bom dia", "Boa tarde", "Boa noite", "Boa madrugada"], 2, "After sunset the greeting is boa noite, both for the evening and for good night."],
      ["Ana is speaking. How does she say thank you?", ["Obrigada", "Obrigado", "Obrigados", "Boa obrigada"], 0, "Obrigada agrees with the woman speaking, not with the person she thanks."],
      ["Why is it bom dia but boa tarde?", ["dia and tarde take the same word", "dia is masculine and tarde is feminine, and the word for good agrees", "boa is only for the evening", "Either word works with either noun"], 1, "bom and boa agree. dia is masculine. tarde is feminine."]
    ],
    practice: [
      ["mc", "After dark you say", "Boa noite", "Bom dia", "Boa tarde", "Boa madrugada", "After sunset, boa noite covers the evening and good night."],
      ["mc", "A man says thank you. He says", "Obrigado", "Obrigada", "Obrigados", "De nada", "Obrigado agrees with the man who is speaking."],
      ["mc", "Someone says obrigada. A natural answer is", "De nada", "Se faz favor", "Desculpe", "Olá", "De nada means you're welcome."],
      ["mc", "dia takes which word for good?", "Bom", "Boa", "Bons", "Boas", "dia is masculine, so bom agrees with it."],
      ["mc", "To get a stranger's attention in a shop, you say", "Desculpe", "De nada", "Obrigado", "Se faz favor", "Desculpe is excuse me. Se faz favor is please, and de nada answers thanks."],
      ["or", "Good morning", "Bom dia", "Boa", "dia is masculine, so bom agrees."],
      ["or", "Good afternoon", "Boa tarde", "Bom", "tarde is feminine. boa agrees with it."],
      ["or", "Good night", "Boa noite", "Bom", "noite is feminine. The feminine form boa agrees."],
      ["fi", "__ dia.", "Good morning.", "Bom", "Boa|Bons|Boas", "dia is masculine. bom agrees with it."],
      ["fi", "__ tarde.", "Good afternoon.", "Boa", "Bom|Boas|Bons", "tarde is feminine. boa agrees."],
      ["fi", "Se faz __.", "Please.", "favor", "favores|dia|nada", "The shop phrase for please is se faz favor."],
      ["ty", "Good morning", "Bom dia", "bom · dia", "Boa", "dia is masculine, so bom agrees."],
      ["ty", "Thank you (said by a woman)", "Obrigada", "obrigada · the speaker", "Obrigado", "obrigada is feminine. It agrees with the woman speaking."],
      ["ty", "Thank you (said by a man)", "Obrigado", "obrigado · the speaker", "Obrigada", "obrigado is masculine. It agrees with the man speaking."]
    ]
  },
  {
    id: "address",
    title: "Saying you: tu, o senhor, a senhora",
    blurb: "Choose tu or o senhor / a senhora, and use vocês when you mean more than one person.",
    deck: "Greetings and courtesy",
    body: `
<p>English has one word, <i>you</i>. Portuguese picks the word, and then the verb ending, from the relationship.</p>
<h3>tu for people close to you</h3>
<p>Use <b>tu</b> with friends, family, people your own age, and children. The verb ending that goes with <b>tu</b> is the <b>tu</b> form, and it has an <b>s</b>. <b>Tu falas</b> and <b>Falas</b> are both normal. The ending already says who it is, so <b>tu</b> can drop. <b>Tu és</b> is <i>you are</i> with a friend. With a friend, excuse me is <b>desculpa</b>.</p>
{{ex:Tu falas|too FAH-luhsh|You speak (to a friend)}}
{{ex:Tu és|too ehsh|You are (to a friend)}}
{{ex:Desculpa|dihsh-KOOL-puh|Excuse me (to a friend)}}
<h3>o senhor and a senhora</h3>
<p>With an older stranger, a shop, a doctor, or anyone you want to treat with distance, use <b>o senhor</b> for a man and <b>a senhora</b> for a woman. The verb is the <b>ele</b> form, the same ending as <b>ele</b> (he) and <b>ela</b> (she), with no <b>s</b>. <b>O senhor fala</b>, <b>a senhora fala</b>, <b>o senhor é</b>. You can also drop the noun and keep that verb: <b>Fala inglês?</b> is a normal question to a stranger in a shop. <b>Desculpe</b>, from the last lesson, is this same ending.</p>
{{ex:O senhor fala|oo sih-NHOHR FAH-luh|You speak (to an older man)}}
{{ex:A senhora fala|uh sih-NHOH-ruh FAH-luh|You speak (to an older woman)}}
{{ex:O senhor é|oo sih-NHOHR eh|You are (to an older man)}}
{{ex:Fala inglês?|FAH-luh een-GLAYSH|Do you speak English? (to a stranger)}}
<p>The other subject words: <b>eu</b> I, <b>nós</b> we, <b>eles</b> they (men, or a mixed group), <b>elas</b> they (women). The ending still has to match the subject.</p>
<h3>você, once</h3>
<p>Textbooks, and Portuguese from Brazil, often use <b>você</b> for <i>you</i>. In Portugal it sits in an uncomfortable middle: less close than <b>tu</b>, less respectful than <b>o senhor</b>. To an older stranger it can sound rude. This course names it so you recognize it, and does not drill it. If you hear it, the verb is the <b>ele</b> form, the same shape as <b>o senhor</b>. Your own sentence stays with <b>tu</b>, or with <b>o senhor</b> and <b>a senhora</b>, or with the bare <b>ele</b> form.</p>
<h3>More than one person</h3>
<p><b>Vocês</b> is the everyday plural <i>you</i>, whether the group is friends or strangers. The verb is the <b>eles</b> form: <b>vocês falam</b>. <b>Vós</b> is an old singular-looking plural you will see in solemn language, and it is still ordinary in parts of the north. You do not need its endings. Use <b>vocês</b>.</p>
{{ex:Vocês falam|voo-SAYSH FAH-lowng|You all speak}}
{{ex:Desculpe|dihsh-KOOL-pih|Excuse me (to a stranger)}}
<div class="tip"><b>Most common mistake:</b> <b>você</b> for an older stranger → <b>o senhor</b> or <b>a senhora</b>, with the <b>ele</b> form of the verb.</div>
`,
    check: [
      ["You are talking to a friend your own age. Which word for you do you use?", ["tu", "o senhor", "você", "vós"], 0, "Friends, family, peers and children get tu and the tu form of the verb."],
      ["You have just met an older man. You address him as", ["tu", "você", "vós", "o senhor"], 3, "An older stranger gets o senhor. você is not the polite default here."],
      ["What is você in this course?", ["The word to use with every stranger", "A form we name and do not drill; with an older stranger it can sound rude", "The plural of tu", "The same answer as o senhor, and the one we practice"], 1, "você is an uncomfortable middle in Portugal. You use tu, or o senhor and a senhora."]
    ],
    practice: [
      ["mc", "A friend your age gets which you?", "tu", "o senhor", "você", "vós", "Friends and peers get tu."],
      ["mc", "An older woman you have just met gets", "a senhora", "tu", "vós", "você", "An older stranger who is a woman gets a senhora, with the ele form."],
      ["mc", "You all, in ordinary Portugal, is", "vocês", "vós", "tu", "o senhor", "vocês is the everyday plural you. vós is old, or northern, and this course does not drill it."],
      ["mc", "Excuse me, to a friend, is", "Desculpa", "Desculpe", "Obrigado", "Você", "Desculpa is the tu form, for a friend. Desculpe is for a stranger."],
      ["mc", "The verb that goes with o senhor is", "fala", "falas", "falo", "falam", "o senhor takes the ele form, fala, with no s."],
      ["or", "You speak (to a friend, start with tu)", "Tu falas", "fala", "falas is the tu form. The verb ending matches tu."],
      ["or", "You speak (to an older man, start with o senhor)", "O senhor fala", "falas", "O senhor takes the ele form. falas is the tu form."],
      ["or", "You all speak (start with vocês)", "Vocês falam", "falas", "vocês takes the eles form. The plural verb is falam."],
      ["fi", "__ falas.", "You speak (to a friend).", "Tu", "Você|Ele|Eu", "With a friend the subject is tu, and falas is the tu form."],
      ["fi", "O senhor __.", "You speak (to an older man).", "fala", "falas|falo|falam", "O senhor takes the ele form: fala, with no s."],
      ["fi", "__ falam.", "You all speak.", "Vocês", "Tu|Vós|Eu", "vocês is the plural you, and the verb is the eles form."],
      ["ty", "You speak (to a friend, start with tu, or use the verb alone)", "Tu falas|Falas", "falar · tu", "fala", "This is the tu form. The verb ending has an s."],
      ["ty", "You speak (to an older woman: a senhora, or the verb alone)", "A senhora fala|Fala", "falar · a senhora", "falas", "A senhora takes the ele form."],
      ["ty", "You all speak (vocês, or the verb alone)", "Vocês falam|Falam", "falar · vocês", "falas", "vocês takes the eles form. The plural verb is falam."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Give your name, say which city you are from, and answer an introduction.",
    deck: "About me",
    body: `
<p>Two sentences carry a first meeting. One gives your name. One says where you are from. Both are short, and both have a shape English does not use.</p>
<h3>Your name</h3>
<p>English says <i>my name is</i> or <i>I am</i>. For the name itself, Portuguese says <b>chamo-me</b>, literally <i>I call myself</i>. The little word <b>me</b> sits after the verb, joined with a hyphen: <b>Chamo-me Ana</b>. Nothing goes between the verb and the name. You do not add <b>a</b> or <b>o</b> there, and you do not put <b>me</b> in front. <b>Me chamo Ana</b> is the order you will hear from Brazil. In Portugal the affirmative sentence keeps <b>me</b> after the verb. The spelling with a space, <b>Chamo me Ana</b>, is the same sentence if the hyphen key fails you. The hyphen is the spelling to aim at.</p>
{{ex:Chamo-me Ana|SHUH-moo mih UH-nuh|My name is Ana}}
{{ex:Chamo-me João|SHUH-moo mih zhwowng|My name is João}}
{{ex:Chamo-me Maria|SHUH-moo mih muh-REE-uh|My name is Maria}}
<h3>I am Ana, I am Pedro</h3>
<p>There is a second way to say who you are, and this one does take the article. In Portugal a person's name usually keeps <b>o</b> or <b>a</b>. The article agrees with the person. A woman says <b>Sou a Ana</b>. A man says <b>Sou o Pedro</b>. <b>Sou</b> is <i>I am</i>. <b>Eu sou a Ana</b> is the same sentence with the word <b>eu</b> put back. Use this frame when you mean <i>I am Ana</i>, and keep <b>chamo-me</b> for <i>my name is Ana</i>. Do not mix them into <b>Chamo-me a Ana</b>.</p>
{{ex:Sou a Ana|soh uh UH-nuh|I am Ana}}
{{ex:Sou o Pedro|soh oo PAY-droo|I am Pedro}}
{{ex:Sou o João|soh oo zhwowng|I am João}}
<h3>Where you are from</h3>
<p><b>Sou de</b> plus a place is where you are from. <b>De</b> is <i>from</i> or <i>of</i>. Lisbon, Portugal, and Coimbra take no extra article in this frame. Where you are standing right now uses a different verb, in a later lesson. Do not build that sentence yet.</p>
{{ex:Sou de Lisboa|soh dih lihzh-BOH-uh|I am from Lisbon}}
{{ex:Eu sou de Portugal|ayw soh dih poor-too-GAHL|I am from Portugal}}
{{ex:Sou de Coimbra|soh dih KWEEN-bruh|I am from Coimbra}}
<h3>Pleased to meet you</h3>
<p>When someone has given you a name, answer <b>muito prazer</b>. It is the set phrase, <i>pleased to meet you</i>. <b>Muito</b> here means <i>very</i> or <i>much</i>. You can add your own name after it, or stay with the phrase alone. Then give your name with <b>chamo-me</b> if you have not said it yet.</p>
{{ex:Muito prazer|MOOYNG-too pruh-ZAYR|Pleased to meet you}}
<div class="tip"><b>Most common mistake:</b> <b>Me chamo Ana</b> → <b>Chamo-me Ana</b>, with <b>me</b> after the verb.</div>
`,
    check: [
      ["How do you say My name is Ana?", ["Chamo-me Ana.", "Me chamo Ana.", "Chamo-me a Ana.", "Ana me chamo."], 0, "me goes after the verb, with a hyphen. No article goes between chamo-me and the name."],
      ["How do you say I am from Lisbon?", ["Estou de Lisboa.", "Sou de Lisboa.", "Sou em Lisboa.", "De Lisboa sou eu."], 1, "Where you are from uses sou de. The place-right-now verb comes later."],
      ["Someone says Chamo-me Pedro. A natural reply is", ["Muito obrigado.", "Bom dia.", "Muito prazer.", "Se faz favor."], 2, "Muito prazer is pleased to meet you, the reply to a name."]
    ],
    practice: [
      ["mc", "My name is Pedro.", "Chamo-me Pedro.", "Me chamo Pedro.", "Chamo-me o Pedro.", "Pedro me chamo.", "me goes after the verb. No article goes before the name."],
      ["mc", "I am from Portugal.", "Sou de Portugal.", "Sou em Portugal.", "Estou de Portugal.", "De sou Portugal.", "Where you are from uses sou de plus the place."],
      ["mc", "A woman says I am Ana, with the article.", "Sou a Ana.", "Sou o Ana.", "Chamo-me a Ana.", "Sou Ana a.", "a is the feminine article. It agrees with Ana. chamo-me takes no article."],
      ["mc", "Pleased to meet you is", "Muito prazer.", "Muito obrigado.", "De nada.", "Desculpe.", "Muito prazer is the set reply when someone gives you a name."],
      ["mc", "In Chamo-me Ana, me sits", "After the verb", "Before the verb", "After the name", "It is left out", "In the name sentence, me sits after the verb."],
      ["or", "My name is Pedro", "Chamo-me Pedro", "Me", "The name follows Chamo-me. me is already attached after the verb."],
      ["or", "I am Ana (with the article, start with sou)", "Sou a Ana", "o", "a is the feminine article. It agrees with Ana."],
      ["or", "I am Pedro (with the article, start with sou)", "Sou o Pedro", "a", "o is the masculine article. It agrees with Pedro."],
      ["fi", "Sou __ Ana.", "I am Ana (with the article).", "a", "o|dois|de", "a is the feminine article. It agrees with Ana."],
      ["fi", "Sou __ Pedro.", "I am Pedro (with the article).", "o", "a|dois|de", "o is the masculine article. It agrees with Pedro."],
      ["fi", "Sou __ Lisboa.", "I am from Lisbon.", "de", "em|a|o", "Where you are from uses de: sou de Lisboa."],
      ["ty", "I am Ana (with the article)", "Sou a Ana|Eu sou a Ana", "ser · Ana", "o", "The feminine article agrees with Ana."],
      ["ty", "I am Pedro (with the article)", "Sou o Pedro|Eu sou o Pedro", "ser · Pedro", "a", "o is the masculine article. It agrees with Pedro."],
      ["ty", "My name is Maria", "Chamo-me Maria|Chamo me Maria", "chamar · Maria", "Me", "me goes after the verb. No article goes before the name."]
    ]
  },
  {
    id: "articles",
    title: "Gender, plural and articles",
    blurb: "Put o, a, um or uma on a noun, and make the noun plural.",
    deck: "Food and drink",
    body: `
<p>You already use <b>o</b> and <b>a</b> for <i>the</i>. This lesson adds <i>a</i> and <i>an</i>, the plural, and the food words you will actually order. The article agrees with the noun in gender and in number. Learn the noun and the article as one piece.</p>
<h3>o, a, um, uma</h3>
<p>Most nouns ending in <b>-o</b> are masculine and take <b>o</b> or <b>um</b>. Most nouns ending in <b>-a</b> are feminine and take <b>a</b> or <b>uma</b>. <b>um</b> is one syllable, the nasal <i>oong</i>. <b>uma</b> is two syllables, <i>OO-muh</i>. Nouns ending in <b>-e</b> can go either way, so the article is part of the word you memorize: <b>o leite</b>, <b>o queijo</b>, <b>a tarde</b>.</p>
<div class="tbl"><table><tr><th>Phrase</th><th>English</th></tr><tr><td class="k">o queijo</td><td>the cheese</td></tr><tr><td class="k">o vinho</td><td>the wine</td></tr><tr><td class="k">o leite</td><td>the milk</td></tr><tr><td class="k">o café</td><td>the coffee</td></tr><tr><td class="k">a água</td><td>the water</td></tr><tr><td class="k">a casa</td><td>the house</td></tr></table></div>
{{ex:o queijo|oo KUHY-zhoo|the cheese}}
{{ex:a água|uh AH-gwuh|the water}}
{{ex:um café|oong kuh-FEH|a coffee}}
{{ex:o vinho|oo VEE-nhoo|the wine}}
<h3>In the café</h3>
<p>In Lisbon and the south, a small espresso is <b>uma bica</b>. In Porto the same drink is <b>um cimbalino</b>. <b>Um galão</b> is a milky coffee in a tall glass. <b>O pastel de nata</b> is a custard tart. <b>Bica</b> is feminine. <b>Galão</b>, <b>café</b>, <b>pastel</b>, and <b>cimbalino</b> are masculine. Order them with <b>um</b> or <b>uma</b> when you mean <i>one</i> or <i>a</i>.</p>
{{ex:uma bica|OO-muh BEE-kuh|an espresso (Lisbon and the south)}}
{{ex:um cimbalino|oong seem-buh-LEE-noo|an espresso (in Porto)}}
{{ex:um galão|oong guh-LOWNG|a milky coffee in a glass}}
{{ex:o pastel de nata|oo puhsh-TEHL dih NAH-tuh|the custard tart}}
<h3>More than one</h3>
<p>For more than one, <b>o</b> becomes <b>os</b> and <b>a</b> becomes <b>as</b>. A noun that ends in a vowel adds <b>-s</b>: <b>a casa</b>, <b>as casas</b>. The article and the noun agree together. A group of men, or a mixed group, takes the masculine plural: <b>os amigos</b>. A group of women is <b>as amigas</b>. On the line, <b>os</b> is <i>oosh</i>. In real speech that <b>s</b> may sound like <i>z</i> before a vowel. The line keeps the pause form.</p>
{{ex:as casas|uhsh KAH-zuhsh|the houses}}
{{ex:os amigos|oosh uh-MEE-goosh|the friends (men, or men and women)}}
{{ex:as amigas|uhsh uh-MEE-guhsh|the friends (women)}}
<h3>Endings that lie, and dois or duas</h3>
<p>Do not trust the ending every time. <b>Dia</b> ends in <b>-a</b> and is masculine: <b>o dia</b>. <b>Mão</b> is feminine: <b>a mão</b>. <b>Problema</b>, a problem, ends in <b>-a</b> and is masculine too: <b>o problema</b>. Two also agrees. <b>Dois</b> with a masculine noun, <b>duas</b> with a feminine noun, and the noun itself goes to the plural. From three upward the number word does not change for gender. That pattern comes back with prices.</p>
{{ex:o dia|oo DEE-uh|the day}}
{{ex:a mão|uh mowng|the hand}}
{{ex:duas bicas|DOO-uhsh BEE-kuhsh|two espressos}}
<div class="tip"><b>Most common mistake:</b> <b>a queijo</b> → <b>o queijo</b>. The article agrees with the masculine noun.</div>
`,
    check: [
      ["Which phrase means the cheese?", ["a queijo", "o queijo", "uma queijo", "os queijo"], 1, "queijo is masculine. The article agrees: o queijo."],
      ["Two espressos in Lisbon are", ["duas bicas", "dois bicas", "duas bica", "dois bica"], 0, "bica is feminine and there are two, so duas and the plural noun bicas."],
      ["Which is the day?", ["a dia", "uma dia", "os dia", "o dia"], 3, "dia ends in a and is still masculine. Learn it as o dia."]
    ],
    practice: [
      ["mc", "the wine =", "o vinho", "a vinho", "uma vinho", "os vinho", "vinho is masculine. o agrees with it."],
      ["mc", "an espresso in Lisbon =", "uma bica", "um bica", "a bica", "o bica", "bica is feminine, so uma agrees. a bica would mean the espresso."],
      ["mc", "a milky coffee in a glass =", "um galão", "uma galão", "dois galão", "a galão", "galão is masculine. um agrees."],
      ["mc", "the houses =", "as casas", "os casas", "a casas", "as casa", "casa is feminine. The plural article is as, and the plural noun adds s."],
      ["mc", "the hand =", "a mão", "o mão", "um mão", "as mão", "mão is feminine even though the ending is not a plain a. The article agrees: a."],
      ["or", "the custard tart", "o pastel de nata", "a", "pastel is masculine. o is the masculine article."],
      ["or", "two houses", "duas casas", "dois", "casas is a feminine plural noun. duas agrees."],
      ["or", "a milky coffee", "um galão", "uma", "galão is masculine. um agrees with it."],
      ["fi", "__ água", "the water", "a", "o|os|um", "água is feminine. The article agrees: a."],
      ["fi", "__ amigo", "a male friend", "um", "uma|as|a", "amigo is masculine, so um agrees. uma would be for a feminine noun."],
      ["fi", "as __", "the houses", "casas", "casa|amigos|dia", "The plural noun adds s. casas agrees with the feminine plural article as."],
      ["ty", "two espressos (Lisbon)", "duas bicas", "bica · duas", "dois", "bica is feminine. duas agrees, and the plural noun takes s."],
      ["ty", "the wine", "o vinho", "vinho · masculine", "a", "o is the masculine article. It agrees with vinho."],
      ["ty", "a coffee", "um café", "café · masculine", "uma", "café is masculine, so um agrees."]
    ]
  },
  {
    id: "ser",
    title: "ser for who you are",
    blurb: "Say who you are, your job, and your nationality with ser.",
    deck: "About me",
    body: `
<p><b>Ser</b> is the verb for who a person is: a name you already know how to frame, a job, a nationality, and the place you are from. English uses <i>am</i>, <i>are</i>, and <i>is</i> for all of that and also for how you feel and where you are standing. Those last two are a different Portuguese verb, in a later lesson. Do not sort the world into permanent and temporary. Sort it into the sentences this lesson actually builds.</p>
<h3>The forms</h3>
<p>The ending matches the subject. The <b>tu</b> form is <b>és</b>, with an <b>s</b> and an accent. <b>O senhor</b> and <b>a senhora</b> take <b>é</b>, the <b>ele</b> form, the same as <b>ele</b> and <b>ela</b>. The word <b>e</b>, with no accent, is a different word: it means <i>and</i>. <b>Eu</b> can drop, because <b>sou</b> already says <i>I</i>.</p>
<div class="tbl"><table><tr><th>Subject</th><th>ser</th></tr><tr><td class="k">eu</td><td class="k">sou</td></tr><tr><td class="k">tu</td><td class="k">és</td></tr><tr><td class="k">ele, ela, o senhor, a senhora</td><td class="k">é</td></tr><tr><td class="k">nós</td><td class="k">somos</td></tr><tr><td class="k">vocês, eles, elas</td><td class="k">são</td></tr></table></div>
{{ex:Eu sou|ayw soh|I am}}
{{ex:Tu és|too ehsh|You are (to a friend)}}
{{ex:O senhor é|oo sih-NHOHR eh|You are (to an older man)}}
<h3>Jobs</h3>
<p>A job uses <b>ser</b> and, in the ordinary sentence, no <b>um</b> or <b>uma</b>. Some job words change the ending so they agree with the person. A man is <b>médico</b>. A woman is <b>médica</b>. <b>Estudante</b> does not change: <b>ele é estudante</b>, <b>ela é estudante</b>, <b>tu és estudante</b>. A mixed group, or a group of men, takes the masculine plural. A group of women takes the feminine plural.</p>
{{ex:Ele é médico|AY-lih eh MEH-dee-koo|He is a doctor}}
{{ex:Ela é médica|EH-luh eh MEH-dee-kuh|She is a doctor}}
{{ex:O senhor é médico|oo sih-NHOHR eh MEH-dee-koo|You are a doctor (to an older man)}}
{{ex:A senhora é médica|uh sih-NHOH-ruh eh MEH-dee-kuh|You are a doctor (to an older woman)}}
{{ex:Ela é estudante|EH-luh eh ihsh-too-DUHN-tih|She is a student}}
{{ex:Eles são médicos|AY-lihsh sowng MEH-dee-koosh|They are doctors (men, or a mixed group)}}
{{ex:Elas são médicas|EH-luhsh sowng MEH-dee-kuhsh|They are doctors (women)}}
<h3>Nationality, and where you are from</h3>
<p>A nationality agrees too. A man says <b>sou americano</b> or <b>sou português</b>. A woman says <b>sou americana</b>. The feminine form of <b>português</b> is <b>portuguesa</b>, in the same <b>-a</b> pattern as <b>americana</b>. The language name does not change when you speak it: that sentence arrives with the present tense. Where you are from stays <b>sou de</b> plus the place. <b>Tu és de Coimbra</b> is the friend form. <b>Nós somos de Lisboa</b> uses <b>somos</b>, the <b>nós</b> form.</p>
{{ex:Sou americano|soh uh-mih-ree-KUH-noo|I am American (a man)}}
{{ex:Sou americana|soh uh-mih-ree-KUH-nuh|I am American (a woman)}}
{{ex:Sou português|soh poor-too-GHAYSH|I am Portuguese (a man)}}
{{ex:Tu és de Coimbra|too ehsh dih KWEEN-bruh|You are from Coimbra (to a friend)}}
{{ex:Ele é de Braga|AY-lih eh dih BRAH-guh|He is from Braga}}
<div class="tip"><b>Most common mistake:</b> <b>tu é</b> → <b>tu és</b>. The <b>tu</b> form of <b>ser</b> has an <b>s</b>.</div>
`,
    check: [
      ["How does a friend say you are?", ["tu é", "tu és", "tu sou", "tu são"], 1, "The tu form of ser is és, with an s."],
      ["She is a doctor.", ["Ela é médica.", "Ela é médico.", "Ela está médica.", "Ela sou médica."], 0, "médica is feminine and agrees with ela. The verb is é, the ele form."],
      ["A man says he is Portuguese.", ["Sou portuguesa.", "Estou português.", "Sou português.", "Sou americana."], 2, "português agrees with a man. portuguesa is the form for a woman."]
    ],
    practice: [
      ["mc", "You are, to a friend.", "Tu és.", "Tu é.", "Tu sou.", "Tu são.", "és is the tu form of ser."],
      ["mc", "We are is", "Nós somos.", "Nós são.", "Nós sou.", "Nós és.", "somos is the nós form."],
      ["mc", "An older woman is a doctor. She is addressed as", "A senhora é médica.", "A senhora és médica.", "A senhora é médico.", "Tu és médica.", "A senhora takes the ele form, é, and médica agrees with her."],
      ["mc", "A woman from the United States says", "Sou americana.", "Sou americano.", "Sou português.", "Estou americana.", "americana is feminine. It agrees with the woman speaking."],
      ["mc", "estudante for a woman is", "Ela é estudante.", "Ela é estudanta.", "Ela é médico.", "Ela sou estudante.", "estudante does not change its ending. The verb is still the ele form, é."],
      ["or", "She is a doctor (start with ela)", "Ela é médica", "médico", "médica is feminine. It agrees with ela."],
      ["or", "You are (to a friend, start with tu)", "Tu és", "é", "és is the tu form. The verb matches the subject."],
      ["or", "You are a doctor (to an older man, start with o senhor)", "O senhor é médico", "és", "O senhor takes the ele form."],
      ["fi", "Tu __ estudante.", "You are a student (to a friend).", "és", "é|sou|são", "és is the tu form. The verb matches the subject.", "!strict"],
      ["fi", "Ela é __.", "She is a doctor.", "médica", "médico|médicos|estudante", "médica is feminine. It agrees with ela."],
      ["fi", "Nós __ de Lisboa.", "We are from Lisbon.", "somos", "são|sou|és", "somos is the nós form. The verb matches the subject."],
      ["ty", "You are a student (to a friend)", "Tu és estudante|És estudante", "ser · estudante", "é", "és is the tu form. The verb matches the subject.", "!strict"],
      ["ty", "She is a doctor (no um or uma)", "Ela é médica|É médica", "ser · médica", "médico", "médica is feminine. It agrees with ela."],
      ["ty", "I am Portuguese (a woman)", "Sou portuguesa|Eu sou portuguesa", "ser · portuguesa", "português", "portuguesa is feminine. It agrees with the woman speaking."]
    ]
  },
  {
    id: "present",
    title: "Present tense, with the tu form",
    blurb: "Use the present of regular -ar, -er and -ir verbs, including the tu form.",
    deck: "Work and study",
    body: `
<p>A Portuguese verb in the dictionary ends in <b>-ar</b>, <b>-er</b>, or <b>-ir</b>. That ending is the infinitive, the form you met in <b>falar</b>. In a real sentence you replace it. English barely changes <i>speak</i>. Portuguese changes the ending for every person, and the <b>tu</b> form is not the same ending as the <b>ele</b> form.</p>
<h3>Three families, one habit</h3>
<p>Take off <b>-ar</b>, <b>-er</b>, or <b>-ir</b>, then add the ending from the table. <b>Falar</b>, <b>estudar</b>, and <b>trabalhar</b> share the <b>-ar</b> column. <b>Abrir</b> is a regular <b>-ir</b> verb and does not change its stem. <b>Comer</b> is a regular <b>-er</b> verb. The <b>tu</b> form is the column with <b>-s</b>: <b>falas</b>, <b>comes</b>, <b>abres</b>. <b>O senhor</b> and <b>a senhora</b> stay in the <b>ele</b> row, with no <b>s</b>. The <b>comer</b> column is spelled here without a pronunciation line. The aid will not vouch for that root vowel. The endings are sure. Copy the sound from the Portugal voice. The square <b>como</b> means <i>I eat</i>. The same letters also mean <i>how</i>, which is the next lesson, and the line in this course belongs to <i>how</i>.</p>
<div class="tbl"><table><tr><th></th><th>falar</th><th>comer</th><th>abrir</th></tr><tr><td class="k">eu</td><td class="k">falo</td><td class="k">como</td><td class="k">abro</td></tr><tr><td class="k">tu</td><td class="k">falas</td><td class="k">comes</td><td class="k">abres</td></tr><tr><td class="k">ele, o senhor, a senhora</td><td class="k">fala</td><td class="k">come</td><td class="k">abre</td></tr><tr><td class="k">nós</td><td class="k">falamos</td><td class="k">comemos</td><td class="k">abrimos</td></tr><tr><td class="k">vocês, eles, elas</td><td class="k">falam</td><td class="k">comem</td><td class="k">abrem</td></tr></table></div>
{{ex:Eu falo português|ayw FAH-loo poor-too-GHAYSH|I speak Portuguese}}
{{ex:Tu falas inglês|too FAH-luhsh een-GLAYSH|You speak English (to a friend)}}
{{ex:O senhor fala inglês|oo sih-NHOHR FAH-luh een-GLAYSH|You speak English (to an older man)}}
{{ex:Nós falamos português|nawsh fuh-LUH-moosh poor-too-GHAYSH|We speak Portuguese}}
{{ex:Eles falam inglês|AY-lihsh FAH-lowng een-GLAYSH|They speak English}}
<h3>Work, study, and the tu form</h3>
<p><b>Estudar</b> is <i>to study</i>. <b>Trabalhar</b> is <i>to work</i>. <b>Em</b> is <i>in</i> before a city in these sentences. The language name does not change for the speaker and takes no article: anyone says <b>falo português</b> and <b>falo inglês</b>. That is different from <b>sou português</b>, which agrees with a man, and from <b>portuguesa</b>, which agrees with a woman. <b>Tu</b> can drop. <b>Tu falas inglês</b> and <b>Falas inglês</b> are both the friend sentence. <b>O senhor falas</b> is the mismatch to avoid: an older man gets <b>fala</b>, the <b>ele</b> form.</p>
{{ex:Eu estudo em Lisboa|ayw ihsh-TOO-doo uhyng lihzh-BOH-uh|I study in Lisbon}}
{{ex:A Ana trabalha em Faro|uh UH-nuh truh-BAH-lhuh uhyng FAH-roo|Ana works in Faro}}
{{ex:Eu trabalho em Lisboa|ayw truh-BAH-lhoo uhyng lihzh-BOH-uh|I work in Lisbon}}
{{ex:Tu abres a porta|too AH-brihsh uh PAWR-tuh|You open the door (to a friend)}}
{{ex:Eu abro a porta|ayw AH-broo uh PAWR-tuh|I open the door}}
<h3>The nós form, present</h3>
<p><b>Falamos</b> is <i>we speak</i>, present, with no accent on the <b>a</b>. Portugal writes an accent on the <i>we</i> past of an <b>-ar</b> verb: <b>falámos</b>. That past waits for a later lesson. For <i>we speak</i> now, type <b>falamos</b>. Final <b>-am</b>, as in <b>falam</b>, is the nasal <i>owng</i> you already know.</p>
<div class="tip"><b>Most common mistake:</b> <b>tu fala</b> → <b>tu falas</b>. The <b>tu</b> form has an <b>s</b>.</div>
`,
    check: [
      ["You speak, to a friend. Which verb is right?", ["tu falas", "tu fala", "tu falo", "tu falar"], 0, "The tu form of an -ar verb ends in as: falas."],
      ["Which is we speak, in the present?", ["falámos", "falamos", "falam", "falas"], 1, "The present nós form has no accent: falamos. falámos is the past."],
      ["An older man works. Which verb agrees with o senhor?", ["o senhor trabalhas", "o senhor trabalho", "o senhor trabalha", "o senhor trabalhar"], 2, "o senhor takes the ele form, trabalha, with no s."]
    ],
    practice: [
      ["mc", "The tu form of falar is", "tu falas", "tu fala", "tu falo", "tu falar", "The tu form ends in as: falas."],
      ["mc", "We speak, present, is", "falamos", "falámos", "falam", "falas", "falamos is the nós form in the present. The accent belongs to the past."],
      ["mc", "o senhor, with trabalhar, takes", "trabalha", "trabalhas", "trabalho", "trabalhar", "o senhor takes the ele form: trabalha."],
      ["mc", "They study is", "eles estudam", "eles estuda", "eles estudas", "eles estudo", "estudam is the eles form. A plural verb matches eles."],
      ["mc", "The tu form of comer is", "tu comes", "tu come", "tu como", "tu comer", "An -er verb adds es for the tu form: comes."],
      ["or", "You speak Portuguese (to a friend, start with tu)", "Tu falas português", "fala", "falas is the tu form. The verb ending matches tu."],
      ["or", "He speaks English (start with ele)", "Ele fala inglês", "falas", "fala is the ele form. It matches the subject."],
      ["or", "They study Portuguese (start with eles)", "Eles estudam português", "estuda", "estudam is the eles form. A plural verb matches eles."],
      ["fi", "Tu __ português.", "You speak Portuguese (to a friend).", "falas", "fala|falo|falam", "falas is the tu form. The verb matches tu."],
      ["fi", "O senhor __ em Lisboa.", "You work in Lisbon (to an older man).", "trabalha", "trabalhas|trabalho|trabalhar", "O senhor takes the ele form: trabalha."],
      ["fi", "Nós __ português.", "We speak Portuguese.", "falamos", "falam|falas|falámos", "falamos is the nós form in the present. The verb matches the subject.", "!strict"],
      ["ty", "You speak English (to a friend)", "Tu falas inglês|Falas inglês", "falar · inglês", "fala", "falas is the tu form. The verb ending matches tu."],
      ["ty", "We speak Portuguese (present)", "Falamos português|Nós falamos português", "falar · nós", "falam", "falamos is the nós form. The verb matches the subject.", "!strict"],
      ["ty", "You open the door (to a friend)", "Tu abres a porta|Abres a porta", "abrir · porta", "abre", "abres is the tu form of abrir."]
    ]
  },
  {
    id: "questions",
    title: "Questions with é que, and não",
    blurb: "Ask with é que, and put não in front of the verb.",
    deck: "Questions and small words",
    body: `
<p>A Portuguese question does not need an extra helper verb the way English needs <i>do</i> or <i>does</i>. You either keep the statement and let your voice rise, or you drop in two small words, <b>é que</b>, after the question word. <b>Não</b> is both the answer <i>no</i> and the word <i>not</i> in front of a verb.</p>
<h3>é que</h3>
<p><b>Onde</b> is <i>where</i>. <b>O que</b> is <i>what</i>. <b>Como</b> is <i>how</i>. This <b>como</b> is the question word, not <i>I eat</i>. <b>É que</b> sits immediately after the question word, and the rest of the sentence stays in statement order. <b>Onde é que está o café?</b> is the everyday Lisbon shape of <i>where is the café?</i> <b>Onde está o café?</b> is also normal. <b>Onde é que o café está?</b> is normal too: the café can stand before the verb. When you practice, the prompt tells you which shape to build. <b>Está</b> and <b>estás</b> are the <i>is</i> and <i>are</i> inside <i>where is</i> and <i>how are you</i>. The full pattern of that verb comes in a later lesson. You can use the chunks now.</p>
{{ex:Onde está o café?|OHN-dih ihsh-TAH oo kuh-FEH|Where is the café?}}
{{ex:Onde é que está o café?|OHN-dih eh kih ihsh-TAH oo kuh-FEH|Where is the café?}}
{{ex:Como estás?|KOH-moo ihsh-TAHSH|How are you? (to a friend)}}
{{ex:Como está?|KOH-moo ihsh-TAH|How are you? (to a stranger)}}
{{ex:Como é que estás?|KOH-moo eh kih ihsh-TAHSH|How are you? (to a friend, with é que)}}
{{ex:O que é que estudas?|oo kih eh kih ihsh-TOO-duhsh|What do you study? (to a friend)}}
{{ex:O que é que o senhor estuda?|oo kih eh kih oo sih-NHOHR ihsh-TOO-duh|What do you study? (to an older man)}}
<h3>Yes and no questions</h3>
<p><b>Sim</b> is <i>yes</i>. A yes or no question uses the same words as the statement. Your voice rises. <b>Falas português?</b> is <i>do you speak Portuguese?</i> to a friend. There is no <i>do</i> to translate. <b>Como estás?</b> is the friend question, the <b>tu</b> form. <b>Como está?</b> is the stranger question, the <b>ele</b> form, and you can add <b>o senhor</b> or <b>a senhora</b>. <b>Como está o senhor?</b> and <b>Como o senhor está?</b> are both normal.</p>
{{ex:sim|seeng|yes}}
{{ex:Falas português?|FAH-luhsh poor-too-GHAYSH|Do you speak Portuguese?}}
<h3>não</h3>
<p><b>Não</b> as a one-word answer means <i>no</i>. In a sentence it means <i>not</i>, and it stands immediately before the verb. <b>Não falo inglês</b>. <b>Não sou de Lisboa</b>. To decline something, add thanks, still agreeing with the speaker: <b>Não, obrigado</b> from a man, <b>Não, obrigada</b> from a woman. The name sentence changes shape under <b>não</b>. Affirmative <b>chamo-me</b> keeps <b>me</b> after the verb. With <b>não</b>, <b>me</b> moves in front: <b>Não me chamo Ana</b>. <b>Não chamo-me Ana</b> is the wrong order.</p>
{{ex:não|nowng|no; not}}
{{ex:Não falo inglês|nowng FAH-loo een-GLAYSH|I do not speak English}}
{{ex:Não sou de Lisboa|nowng soh dih lihzh-BOH-uh|I am not from Lisbon}}
{{ex:Não me chamo Ana|nowng mih SHUH-moo UH-nuh|My name is not Ana}}
{{ex:Não, obrigada|nowng aw-bree-GAH-duh|No, thank you (said by a woman)}}
<div class="tip"><b>Most common mistake:</b> <b>Não chamo-me Ana</b> → <b>Não me chamo Ana</b>. With <b>não</b>, <b>me</b> stands before the verb.</div>
`,
    check: [
      ["Where is the café? Choose the sentence that uses é que.", ["Onde está é que o café?", "Onde é está que o café?", "Onde é que está o café?", "É que onde está o café?"], 2, "é que sits right after the question word. Then the rest follows."],
      ["I do not speak English.", ["Não falo inglês.", "Falo não inglês.", "Não falo não inglês.", "Inglês falo não."], 0, "não goes immediately before the verb."],
      ["My name is not Ana.", ["Não chamo-me Ana.", "Não me chamo Ana.", "Me não chamo Ana.", "Chamo não me Ana."], 1, "With não, me moves to the front of the verb."]
    ],
    practice: [
      ["mc", "Where is the café, with é que?", "Onde é que está o café?", "Onde está é que o café?", "É que onde está o café?", "Onde é está que o café?", "é que comes right after onde."],
      ["mc", "How are you, to a friend?", "Como estás?", "Como está?", "Como és?", "Onde estás?", "A friend gets the tu form: estás."],
      ["mc", "How are you, to an older man, with the verb alone?", "Como está?", "Como estás?", "Como és?", "Como sou?", "O senhor takes the ele form: está."],
      ["mc", "I am not from Lisbon.", "Não sou de Lisboa.", "Sou não de Lisboa.", "Não de sou Lisboa.", "Não estou de Lisboa.", "não stands immediately before sou."],
      ["mc", "No, thank you, said by a man.", "Não, obrigado.", "Não, obrigada.", "Obrigado, não me.", "Não chamo-me.", "obrigado agrees with the man speaking, and não comes first."],
      ["or", "How are you? (to a friend, start with como)", "Como estás", "está", "estás is the tu form."],
      ["or", "I am not from Lisbon (start with não)", "Não sou de Lisboa", "é", "sou is the eu form. The verb matches the subject."],
      ["or", "How are you, with é que (to a friend, start with como)", "Como é que estás", "está", "estás is the tu form. é que sits after como."],
      ["fi", "Não __ inglês.", "I do not speak English.", "falo", "fala|falas|é", "falo is the eu form. não comes before the verb."],
      ["fi", "Onde é que __ o café?", "Where is the café?", "está", "estás|esta|é", "está is the ele form. The accent marks the verb.", "!strict"],
      ["fi", "Não __ chamo Ana.", "My name is not Ana.", "me", "eu|tu|de", "With não, me stands before the verb."],
      ["ty", "How are you? (to a friend, no é que)", "Como estás?|Como estás tu?|Como tu estás?", "estar · tu", "está", "estás is the tu form.", "!strict"],
      ["ty", "How are you? (to an older man, no é que)", "Como está o senhor?|Como o senhor está?|Como está?", "estar · o senhor", "estás", "O senhor takes the ele form: está."],
      ["ty", "I do not speak English", "Não falo inglês|Eu não falo inglês", "falar · inglês", "fala", "falo is the eu form. não comes before the verb."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and prices in euros",
    blurb: "Use the Portugal numbers, including the teens, and ask a price in euros.",
    deck: "Numbers, time and prices",
    body: `
<p>Prices in this course are in euros and <b>cêntimos</b>, a <b>cêntimo</b> being one hundredth of a euro. A shop tag uses a comma, as in 1,50 €, and the euro sign. You will say the price in words. The pronunciation line writes <b>euro</b> as <i>AYW-raw</i>, with an open <b>o</b>. Some speakers use a shorter ending. It is the same coin.</p>
<h3>The words</h3>
<p>One agrees: <b>um</b> with a masculine noun, <b>uma</b> with a feminine noun. Two agrees: <b>dois</b> and <b>duas</b>. From three up, the number word stays put. <b>Três bicas</b> and <b>três euros</b> use the same <b>três</b>. The noun still goes plural.</p>
<div class="tbl"><table><tr><th></th><th>Word</th><th></th><th>Word</th></tr><tr><td>0</td><td class="k">zero</td><td>11</td><td class="k">onze</td></tr><tr><td>1</td><td class="k">um, uma</td><td>12</td><td class="k">doze</td></tr><tr><td>2</td><td class="k">dois, duas</td><td>13</td><td class="k">treze</td></tr><tr><td>3</td><td class="k">três</td><td>14</td><td class="k">catorze</td></tr><tr><td>4</td><td class="k">quatro</td><td>15</td><td class="k">quinze</td></tr><tr><td>5</td><td class="k">cinco</td><td>16</td><td class="k">dezasseis</td></tr><tr><td>6</td><td class="k">seis</td><td>17</td><td class="k">dezassete</td></tr><tr><td>7</td><td class="k">sete</td><td>18</td><td class="k">dezoito</td></tr><tr><td>8</td><td class="k">oito</td><td>19</td><td class="k">dezanove</td></tr><tr><td>9</td><td class="k">nove</td><td>20</td><td class="k">vinte</td></tr><tr><td>10</td><td class="k">dez</td><td>100</td><td class="k">cem</td></tr></table></div>
<p>The tens: <b>trinta</b> 30, <b>quarenta</b> 40, <b>cinquenta</b> 50, <b>sessenta</b> 60, <b>setenta</b> 70, <b>oitenta</b> 80, <b>noventa</b> 90. Fourteen here is <b>catorze</b>. Sixteen, seventeen, and nineteen are the spellings to watch. Portugal writes an <b>a</b> in the middle: <b>dezasseis</b>, <b>dezassete</b>, <b>dezanove</b>. Brazil usually writes <b>dezesseis</b>, <b>dezessete</b>, <b>dezenove</b>. Type the Portugal <b>a</b>.</p>
{{ex:seis|suhysh|six}}
{{ex:catorze|kuh-TOHR-zih|fourteen}}
{{ex:dezasseis|dih-zuh-SUHYSH|sixteen}}
{{ex:dezassete|dih-zuh-SEH-tih|seventeen}}
{{ex:dezanove|dih-zuh-NAW-vih|nineteen}}
<h3>dois or duas, then the price</h3>
<p><b>Euro</b> is masculine: <b>um euro</b>, <b>dois euros</b>. <b>Bica</b> is feminine: <b>uma bica</b>, <b>duas bicas</b>. The noun is plural from two up. <b>Cêntimo</b> is masculine too: <b>cinquenta cêntimos</b>. <b>E</b> between the euro and the cents is the word <i>and</i>, and it sounds like <i>ee</i>, not like the short <i>ih</i>.</p>
{{ex:dois euros|doysh AYW-rawsh|two euros}}
{{ex:duas bicas|DOO-uhsh BEE-kuhsh|two espressos}}
{{ex:três bicas|traysh BEE-kuhsh|three espressos}}
{{ex:um euro e cinquenta cêntimos|oong AYW-raw ee seen-KAYN-tuh SAYN-tee-moosh|one euro and fifty cents}}
<h3>Quanto custa?</h3>
<p><b>Quanto custa?</b> is <i>how much does it cost?</i> <b>Custa</b> is the <b>ele</b> form: the thing costs that much. <b>Custa dois euros</b>. You can also name the price with <b>ser</b>, and then the verb agrees with the plural euros: <b>são cinco euros</b>, <i>it is five euros</i>. English often keeps <i>it is</i> singular there. If the exercise says <i>use custa</i>, use <b>custa</b>. If it says <i>use são</i>, use <b>são</b>. <b>Quantos</b> agrees with a masculine plural noun, and <b>quantas</b> with a feminine plural noun: <b>quantos euros</b>, <b>quantas bicas</b>.</p>
{{ex:Quanto custa?|KWUHN-too KOOSH-tuh|How much does it cost?}}
{{ex:Custa dois euros|KOOSH-tuh doysh AYW-rawsh|It costs two euros}}
{{ex:São cinco euros|sowng SEEN-koo AYW-rawsh|It is five euros}}
<div class="tip"><b>Most common mistake:</b> <b>dezesseis</b> → <b>dezasseis</b>. Portugal writes <b>a</b> in sixteen, seventeen, and nineteen.</div>
`,
    check: [
      ["Which is the Portugal spelling of 16?", ["dezesseis", "dezasseis", "dezaseis", "dez e seis"], 1, "Portugal writes a in these teen numbers: dezasseis. dezesseis is the usual Brazil spelling."],
      ["How do you say two euros?", ["dois euros", "duas euros", "dois euro", "duas euro"], 0, "euro is masculine, and two or more take the plural noun: dois euros."],
      ["How much does it cost?", ["Como custa?", "Onde custa?", "Quanto custa?", "Quanto custas?"], 2, "The set question is quanto custa. custa is the ele form, for the thing."]
    ],
    practice: [
      ["mc", "17 in Portugal is", "dezassete", "dezessete", "dezasséte", "dez e sete", "Portugal writes dezassete. dezessete is the usual Brazil spelling."],
      ["mc", "19 in Portugal is", "dezanove", "dezenove", "dezandeve", "dez e nove", "Portugal writes dezanove, with a."],
      ["mc", "two espressos in Lisbon =", "duas bicas", "dois bicas", "duas bica", "dois euro", "bica is feminine. duas agrees, and the noun is plural."],
      ["mc", "How much does it cost?", "Quanto custa?", "Como custa?", "Quanto custas?", "Onde custa?", "quanto custa is the price question. custa is the ele form."],
      ["mc", "one euro =", "um euro", "uma euro", "dois euro", "um euros", "euro is masculine, and one takes the singular noun: um euro."],
      ["or", "two espressos (Lisbon)", "duas bicas", "dois", "bicas is a feminine plural noun. duas agrees."],
      ["or", "two euros", "dois euros", "duas", "euros is masculine. dois agrees with it."],
      ["or", "sixteen euros", "dezasseis euros", "dezesseis", "dezasseis is the Portugal spelling. dezesseis is the usual Brazil spelling."],
      ["fi", "__ bicas", "two espressos", "duas", "dois|uma|três", "bica is feminine. duas agrees with the plural noun."],
      ["fi", "__ euros", "two euros", "dois", "duas|um|umas", "euro is masculine. dois agrees, and the noun is plural."],
      ["fi", "Quanto __?", "How much does it cost?", "custa", "custas|custam|custo", "custa is the ele form. It matches a singular thing."],
      ["ty", "two houses", "duas casas", "casa · duas", "dois", "casas is a feminine plural noun. duas agrees."],
      ["ty", "It costs two euros (use custa)", "Custa dois euros", "custar · dois", "duas", "dois agrees with the masculine noun euros."],
      ["ty", "How many euros?", "Quantos euros", "quanto · euro", "Quantas", "euros is masculine. Quantos agrees with the plural noun."]
    ]
  }
];
