/* en-am decks, writer EN-AM-A (first 9 decks in profile order). One card per line: target | pron | meaning | note. pron is required: the middle field is the romanisation from respell.js (lexicon.txt). Do not type it by hand; run node tools/target/repron.js am. */
module.exports = {
  "How the fidel works": `
በ | be | b, first order | One character is a consonant plus a vowel. This is the first of seven orders.
ቡ | bu | b, second order | Same consonant as በ. Only the vowel shape changed.
ቢ | bi | b, third order | Same consonant again. You read the consonant and the vowel together.
ባ | ba | b, fourth order | Same consonant. This vowel is more open than the first order.
ቤ | bé | b, fifth order | Same consonant, the fifth vowel shape. There is no eighth shape.
ብ | bi | b, sixth order | A vowel, or no vowel at all. The shape does not say which. A long consonant is not written either.
ቦ | bo | b, seventh order | The last vowel shape of this consonant. The next row is a new consonant.
ሉ | lu | l, second order | The same second-order shape as ቡ, now on l.
ሊ | li | l, third order | The same third-order shape as ቢ, on l.
ላ | la | l, fourth order | The same fourth-order shape as ባ, on l.
ሌ | lé | l, fifth order | The same fifth-order shape as ቤ, on l.
ል | li | l, sixth order | Sixth order again: a vowel, or nothing. You learn which from the word.
ሎ | lo | l, seventh order | The same seventh-order shape as ቦ, on l.
ሙ | mu | m, second order | The same second-order shape, on m.
ሚ | mi | m, third order | The same third-order shape, on m.
ማ | ma | m, fourth order | The same fourth-order shape, on m.
ልብ | libb | heart | The sixth-order ል is a vowel here, and a long consonant is not written. Listen. Not ልብስ, clothes.
`,
  "Fidel rows: ሀ to ቸ": `
ሀ | ha | h, the first h-letter | In Addis Ababa this is the same sound as ሐ. They stay different letters. The first order already sounds like the fourth.
ለ | le | the l row | First order of l. The other orders are on the previous deck.
ሐ | ha | h, the second h-letter | Same sound as ሀ in Addis Ababa. Do not respell a word from one of these letters to the other.
መ | me | the m row | First order of m. ሙ, ሚ and ማ are on the previous deck.
ሠ | se | s, the first s-letter | Same s sound as ሰ. Both letters stay in the spelling.
ረ | re | the r row | A trill when you hear it held, a tap when you hear it short. The letter does not show which.
ሰ | se | s, the second s-letter | Same s sound as ሠ. Learn which word uses which letter.
ሸ | she | the sh row | One consonant, like the sh in shoe. Not an s followed by an h.
ቀ | k'e | the ejective q row | A popped consonant. It is not a plain k. The plain partner, ከ, is a later row.
ቨ | ve | the v row | Its own consonant, mostly in newer words. It is not በ.
ተ | te | the t row | A plain t. The ejective partner ጠ is a later row, and it is not this letter.
ቸ | che | the ch row | Like the ch in church. The ejective partner ጨ is a later row.
ቤት | bét | a house | The በ row in a real word. The seven orders of በ are on the previous deck.
ሰው | sew | a person | ሰ is the second s-letter. ው is the sixth order of w.
ሸሚዝ | shemiz | a shirt | ሸ is the sh row. A usual word for a shirt.
ሃ | ha | h, fourth order of the first h-letter | For ሀ, ሐ, ኀ, አ and ዐ, the first order already uses this vowel, with a few exceptions such as ኧረ.
ሳምንት | samint | a week | ሰ is the second s-letter. ም and ን are sixth order: each may be a vowel or none.
`,
  "Fidel rows: ኀ to ዠ": `
ኀ | ha | h, the third h-letter | Same sound as ሀ and ሐ in Addis Ababa. Still its own letter.
ነ | ne | the n row | First order of n. A long n is not written. You only hear it.
ኘ | nye | the ny row | Like the ny in canyon. Not a plain n.
አ | a | the vowel carrier, first letter | No consonant of its own. Same sound as ዐ, written apart. The first order uses the fourth-order vowel.
ከ | ke | the plain k row | Plain k. Not the ejective ቀ.
ኸ | he | h, the fourth h-letter | Same sound as ሀ, ሐ and ኀ in Addis Ababa. Four letters, one sound.
ወ | we | the w row | Like English w. The -wa shapes are a later deck.
ዐ | a | the vowel carrier, second letter | Same sound as አ. Do not swap them in a word.
ዘ | ze | the z row | Like the z in zoo. Not ሰ.
ዠ | zhe | the zh row | Like the s in measure. The voiced partner of ሸ.
ኔ | né | n, fifth order | The same fifth-order shape as ቤ, on n.
ኖ | no | n, seventh order | The same seventh-order shape as ቦ, on n.
ኩ | ku | plain k, second order | Plain k with the second-order vowel. Still not ቀ.
ዋ | wa | w, fourth order | Fourth order of w. You will see this shape inside many words.
አዲስ | addis | new | Starts with the vowel carrier አ. አዲስ አበባ, Addis Ababa, is new flower.
ዛፍ | zaf | a tree | Starts with z.
ውሻ | wisha | a dog | ው is the sixth order of w. It may be a vowel or none. Listen.
`,
  "Fidel rows: የ to ፐ": `
የ | ye | the y row | Like English y.
ደ | de | the d row | Like English d. Not an ejective.
ጀ | je | the j row | Like English j. Not the ejective ጨ.
ገ | ge | the g row | Like the g in go. Not an ejective.
ጠ | t'e | ejective t | An ejective t. Not the plain ተ. Listen for the pop.
ጨ | ch'e | ejective ch | An ejective ch. Not ቸ.
ጰ | p'e | ejective p | An ejective p. Not the plain ፐ.
ጸ | ts'e | ejective ts, first letter | An ejective ts. Not ሰ. Same sound as ፀ, written apart.
ፀ | ts'e | ejective ts, second letter | Same ejective ts as ጸ in Addis Ababa. Do not swap them.
ፈ | fe | the f row | Like English f.
ፐ | pe | plain p | Plain p. Not the ejective ጰ.
ድመት | dimmet | a cat | ደ is plain d. ም and ት are sixth order.
ገበያ | gebeya | a market | ገ is plain g. A market in Addis Ababa.
ጥሩ | t'ru | good | ጥ is the ejective t, sixth order. Not a plain t.
ጠዋት | t'ewat | morning | Starts with the ejective ጠ. You meet this word again on the clock.
ጣ | t'a | ejective t, fourth order | The same ejective as ጠ, with the fourth-order vowel.
ፍቅር | fik'ir | love | ፍ is the sixth order of f. Listen for whether that vowel is there.
`,
  "Reading words": `
ገና | gena | still; yet | The same letters also mean Christmas, with a long n. The spelling does not say which. Listen.
ሽፍታ | shifta | a bandit | The same letters can mean a rash, with a long consonant. The spelling shows neither. Listen.
ቧ | bwa | b with wa | The -wa form. One character for the consonant plus w plus the a-vowel.
ሏ | lwa | l with wa | The -wa form of l.
ኳ | kwa | plain k with wa | The -wa form of plain k. Not the ejective ቀ.
ጓ | gwa | g with wa | The -wa form of g. ጓደኛ, a friend, starts with this character.
አገር | ager | a country | Peace Corps spelling. Also written ሀገር and ሃገር.
ስራ | sira | work | Peace Corps spelling, with ሰ. Also written ሥራ. Same s sound.
ስልክ | silk | a telephone | The middle ል has no vowel in this word. A long consonant would not be written. Listen.
ቋንቋ | k'wank'wa | a language | Starts with the -wa form of the ejective ቀ.
ዓለም | alem | the world | ዐ, the second vowel carrier, not አ.
አማርኛ | amarinnya | Amharic | Starts with አ, the first vowel carrier. The name of this language.
ጎንደር | gonder | Gondar | A city. ጎ is the seventh order of g.
አዲስ አበባ | addis abeba | Addis Ababa | New flower. The usual setting for this course.
ማር | mar | honey | ማ is the fourth order of m. ር is sixth order.
ጅብ | jib | a hyena | ጀ is the j row.
ሃይቅ | hayk' | a lake | ሃ is the fourth order of ሀ. Same sound as a word spelled with ሀ.
`,
  "Greetings and courtesy": `
ሰላም | selam | Hello. | Fine with a friend, any time of day. You will also hear ሰላም ነው, is everything all right.
ጤና ይስጥልኝ | t'éna yist'illiny | Hello. (polite) | The formal greeting for any person and any time of day. Say it back, or say thank you.
አንተ | ante | you (to a man) | English has one you. This is the man. The verb ending has to match.
አንቺ | anchi | you (to a woman) | The woman. Not አንተ, and not the same verb ending.
እርስዎ | irswo | you (polite) | A stranger or an older person. Not አንተ.
ደህና አደርክ? | dehna adderk? | Good morning. (to a man) | Man form. Until about noon. A usual reply is ደህና እግዚአብሔር ይመስገን.
ደህና አደርሽ? | dehna addersh? | Good morning. (to a woman) | Woman form. Do not greet a woman with አደርክ.
ደህና አደሩ? | dehna adderu? | Good morning. (polite) | Polite form, for እርስዎ. A group of friends is አደራችሁ.
ደህና ዋልክ? | dehna walk? | Good afternoon. (to a man) | After noon, to a man. The verb ending is not the morning one.
ደህና ዋልሽ? | dehna walsh? | Good afternoon. (to a woman) | Woman form of the afternoon greeting.
ደህና ዋሉ? | dehna walu? | Good afternoon. (polite) | Polite afternoon greeting.
ደህና አመሸህ? | dehna amessheh? | Good evening. (to a man) | Man form. አመሸህ, not the morning ending.
ደህና አመሸሽ? | dehna amesshesh? | Good evening. (to a woman) | Woman form.
ደህና አመሹ? | dehna amesshu? | Good evening. (polite) | Polite evening greeting.
ደህና እደሩ | dehna ideru | Good night. (polite) | Polite, or to more than one person. To a man: ደህና እደር. To a woman: ደህና እደሪ.
አመሰግናለሁ | amesegginallehu | Thank you. | Works for anyone. Also a warm reply after a greeting.
እባክህ | ibakih | Please. (to a man) | Man form. To a woman: እባክሽ.
እባክሽ | ibakish | Please. (to a woman) | Woman form. Do not say እባክህ to a woman.
`,
  "About me": `
ስሜ ትግስት ነው | simé tigist new | My name is Tigist. | ስሜ is my name. ነው is required. A name alone does not mean is.
አገሬ አሜሪካ ነው | ageré amérika new | My country is the United States. | አገሬ is my country. አሜሪካ here is the United States.
ስምህ ማን ነው | simih man new | What's your name? (to a man) | ስምህ is your name for አንተ. ነው agrees with ስም, not with you.
ስምሽ ማን ነው | simish man new | What's your name? (to a woman) | ስምሽ is for አንቺ. Do not ask a woman with ስምህ.
ስምዎ ማን ነው | simwo man new | What's your name? (polite) | For እርስዎ. Same polite ending as አባትዎ.
እኔ ነኝ | iné neny | I am | The verb ending for እኔ is ነኝ.
አንተ ነህ | ante neh | you are (to a man) | Man form ነህ. Not ነሽ.
አንቺ ነሽ | anchi nesh | you are (to a woman) | Woman form ነሽ.
እርስዎ ነዎት | irswo newot | you are (polite) | Polite form ነዎት.
እሱ ነው | issu new | he is | እሱ takes ነው.
እሷ ናት | isswa nat | she is | Feminine ending ናት. You will also hear ነች.
እኛ ነን | innya nen | we are | እኛ takes ነን.
እናንተ ናችሁ | innante nacchihu | you are (plural) | Plural you, not እርስዎ. The ending is ናችሁ.
እነሱ ናቸው | innessu nacchew | they are | እነሱ takes ናቸው.
እሳቸው ናቸው | issachew nacchew | he or she is (polite) | An older person you are talking about, not to.
እኔ አሜሪካዊ ነኝ | iné amérikawi neny | I'm American. (a man) | A man says አሜሪካዊ. ነኝ still matches እኔ.
እኔ አሜሪካዊት ነኝ | iné amérikawit neny | I'm American. (a woman) | A woman says አሜሪካዊት. The verb ending stays ነኝ.
እኔ ኢትዮጵያዊ ነኝ | iné ityop'yawi neny | I'm Ethiopian. (a man) | Nationality sits before ነኝ. A woman says ኢትዮጵያዊት ነኝ.
`,
  "People and family": `
አባት | abbat | father | My father puts the ending on the noun: አባቴ.
እናት | innat | mother | My mother is እናቴ.
ወንድም | wendim | brother | My brother is ወንድሜ.
እህት | ihit | sister | The my-ending attaches the same way as on እናት.
ልጅ | lij | a child | A son or a daughter. The word itself does not say which.
ቤተሰብ | béteseb | a family | One word. Of Ato Kebede: የአቶ ከበደ ቤተሰብ.
ጓደኛ | gwadennya | a friend | A man or a woman. ጓ is the -wa form of g.
ሴት አያት | sét ayat | grandmother | ሴት plus አያት. Grandfather is ወንድ አያት.
ወንድ አያት | wend ayat | grandfather | ወንድ plus አያት.
አባቴ | abbaté | my father | The ending is my. There is no separate word for my.
እናቴ | innaté | my mother | Same my-ending as አባቴ.
ወንድሜ | wendimé | my brother | ወንድም plus my.
አባትህ | abbatih | your father (to a man) | The ending matches አንተ. Polite, for እርስዎ: አባትዎ.
አባትሽ | abbatish | your father (to a woman) | The ending matches አንቺ. Do not say አባትህ to a woman.
ቤቴ | bété | my house | ቤት plus my.
ቤትህ | bétih | your house (to a man) | Man form of your. The house itself is not masculine or feminine here. The ending follows you.
ቤትሽ | bétish | your house (to a woman) | Woman form of your.
ቤቷ | bétwa | her house | The ending matches እሷ. His house is a different ending, on the home deck.
`,
  "Numbers, time and prices": `
አንድ | and | one | The teens use አስራ in front: አስራ አንድ is eleven.
ሁለት | hulet | two | አስራ ሁለት is twelve. ሁለት መቶ is two hundred.
ሶስት | sost | three | Peace Corps spelling. Also written ሦስት.
አራት | arat | four | አርባ አራት is forty-four, two words. The ten and the unit stay two words.
አምስት | ammist | five | Forty-five is አርባ አምስት.
ስድስት | siddist | six | Not the word ሰባት.
ሰባት | sebat | seven | A week has ሰባት days.
ስምንት | simmint | eight | Eighteen is አስራ ስምንት.
ዘጠኝ | zet'eny | nine | Nineteen is አስራ ዘጠኝ.
አስር | assir | ten | Peace Corps spelling. Also written ዐስር. Eleven switches to አስራ.
ሃያ | haya | twenty | Peace Corps spelling. Twenty-one is ሃያ አንድ, two words.
መቶ | meto | one hundred | Two hundred is ሁለት መቶ. The manual's word for one thousand is አንድ ሺህ.
ስንት ሰዓት ነው | sint se'at new | What time is it? | Say ይቅርታ to a stranger first. There is no word for do.
ጠዋት አስራ ሁለት ሰዓት | t'ewat assira hulet se'at | 6:00 a.m. | Ethiopian twelve in the morning. Ask if this is ሀበሻ ሰዓት or ፈረንጅ ሰዓት.
ከቀኑ ስድስት ሰዓት | kek'enu siddist se'at | noon | Ethiopian six in the daytime. The manual writes the hour as a digit, ከቀኑ 6 ሰዓት. 7 a.m. is ከጠዋቱ አንድ ሰዓት.
ሀበሻ ሰዓት | habesha se'at | Ethiopian time | European time is ፈረንጅ ሰዓት. Days: ሰኞ, ማክሰኞ, ሮብ (also ረቡዕ), ሀሙስ (also ሐሙስ), አርብ (also ዓርብ), ቅዳሜ, እሁድ (also እሑድ).
ዋጋው ስንት ነው | wagaw sint new | How much is it? | ዋጋው is the price, with the definite ending. Market prices are often open to bargaining.
አራት ብር | arat birr | four birr | A coffee on an old training menu. A practice figure, not today's price.
`
};
