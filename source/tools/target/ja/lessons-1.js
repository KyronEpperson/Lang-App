/* en-ja lessons 1–10 (hiragana … arimasu). Written by EN-JA-1. Every pron is modified Hepburn romaji typed by hand (profile §6.1); there is no respell.js for ja. */
module.exports = [
  {
    id: "hiragana",
    title: "Hiragana: reading Japanese sounds",
    blurb: "Read the basic hiragana letters, the two sound marks, and the particles は, を and へ.",
    deck: "Hiragana 1: a, ka, sa, ta rows",
    body: `
<p>Japanese is written with three scripts. <b>Hiragana</b> spells Japanese words and grammar, <b>katakana</b> spells loanwords and foreign names, and <b>kanji</b> are characters borrowed from Chinese. Almost everything in this course is written in hiragana, so it comes first.</p>
<h3>One letter, one beat</h3>
<p>An English letter is usually one sound. A hiragana letter is a whole beat: a vowel, or a consonant plus a vowel. か is <i>ka</i>, す is <i>su</i>. The 46 letters sit in a grid of five vowels times a row for each consonant, and each letter always sounds the same.</p>
<div class="tbl"><table><tr><th></th><th>a</th><th>i</th><th>u</th><th>e</th><th>o</th></tr><tr><td>vowels</td><td class="k">あ</td><td class="k">い</td><td class="k">う</td><td class="k">え</td><td class="k">お</td></tr><tr><td>k</td><td class="k">か</td><td class="k">き</td><td class="k">く</td><td class="k">け</td><td class="k">こ</td></tr><tr><td>s</td><td class="k">さ</td><td class="k">し</td><td class="k">す</td><td class="k">せ</td><td class="k">そ</td></tr><tr><td>t</td><td class="k">た</td><td class="k">ち</td><td class="k">つ</td><td class="k">て</td><td class="k">と</td></tr><tr><td>n</td><td class="k">な</td><td class="k">に</td><td class="k">ぬ</td><td class="k">ね</td><td class="k">の</td></tr><tr><td>h</td><td class="k">は</td><td class="k">ひ</td><td class="k">ふ</td><td class="k">へ</td><td class="k">ほ</td></tr><tr><td>m</td><td class="k">ま</td><td class="k">み</td><td class="k">む</td><td class="k">め</td><td class="k">も</td></tr><tr><td>y</td><td class="k">や</td><td></td><td class="k">ゆ</td><td></td><td class="k">よ</td></tr><tr><td>r</td><td class="k">ら</td><td class="k">り</td><td class="k">る</td><td class="k">れ</td><td class="k">ろ</td></tr><tr><td>w</td><td class="k">わ</td><td></td><td></td><td></td><td class="k">を</td></tr><tr><td>n alone</td><td class="k">ん</td><td></td><td></td><td></td><td></td></tr></table></div>
<h3>Vowels: short and pure</h3>
<p>English names its vowels "ay, ee, eye, oh, you". Japanese vowels sound as in Spanish or Italian: あ "ah", い "ee", う "oo" with relaxed lips, え "eh", お "oh". So え is never "ee", and い is never "eye".</p>
{{ex:あい|ai|love}}
{{ex:いえ|ie|house}}
<h3>Letters that break the pattern</h3>
<p>A few letters do not follow their row: し is <i>shi</i>, ち is <i>chi</i>, つ is <i>tsu</i>, ふ is <i>fu</i>, and ん is a plain <i>n</i> with no vowel. Watch the look-alikes: さ and ち, ぬ and め, わ, れ and ね, る and ろ.</p>
{{ex:すし|sushi|sushi}}
{{ex:ふね|fune|boat}}
<h3>Two small marks</h3>
<p>Two dots ゛ change a sound: か <i>ka</i> becomes が <i>ga</i>, さ <i>sa</i> becomes ざ <i>za</i>, た <i>ta</i> becomes だ <i>da</i>, は <i>ha</i> becomes ば <i>ba</i>. A small circle ゜ turns は into ぱ <i>pa</i>. (In Japanese they are called dakuten and handakuten.) Now you can read です and ください.</p>
{{ex:かぎ|kagi|key}}
{{ex:てんぷら|tenpura|tempura}}
<h3>は, を and へ as particles</h3>
<p>English puts small words like "to" before a noun. Japanese puts small words called particles after it. Three particles keep an old spelling: は is said <i>wa</i>, を is said <i>o</i>, and へ is said <i>e</i>. The greeting こんにちは ends in the same は.</p>
{{ex:こんにちは。|konnichiwa|Hello.}}
{{ex:これは すしです。|kore wa sushi desu|This is sushi.}}
{{ex:すしを ください。|sushi o kudasai|Sushi, please.}}
{{ex:えきへ いきます。|eki e ikimasu|I'm going to the station.}}
<h3>Spaces and romaji</h3>
<p>Real Japanese has no spaces between words. While this course is written in kana, it puts a space after each phrase so you can see where one ends. The line in English letters under each phrase is romaji. Lean on it this week: from lesson 4 it is hidden until you tap it, so read the kana first.</p>
<div class="tip"><b>Most common mistake:</b> spelling a particle the way it sounds. <b>これわ すしです</b> → <b>これは すしです</b>. When the first 20 letters feel easy, learn the other 26 with the <b>Hiragana 2: na to n</b> deck.</div>
`,
    check: [
      ["How do you say the vowel え?", ["Like the e in \"pet\"", "Like the ee in \"see\"", "Like the a in \"say\", with a glide", "Like the e in \"the\""], 0, "Japanese え is always a short, pure \"eh\", never \"ee\"."],
      ["You want to write \"kore wa\" (this is). Which spelling is right?", ["これわ", "これは", "これお", "これえ"], 1, "The topic particle is said wa but written は."],
      ["What do the two dots ゛ do to か (ka)?", ["Make it longer", "Turn it into pa", "Turn it into ga", "Make it silent"], 2, "Two dots turn k into g: か becomes が."]
    ],
    practice: [
      ["mc", "Which word is \"sushi\"?", "すし", "すち", "しす", "すさ", "し is shi and す is su: すし."],
      ["mc", "Which word is \"neko\" (cat)?", "ねこ", "れこ", "わこ", "めこ", "ね ends in a loop; れ and わ do not, and め is me."],
      ["mc", "In これは (this is), the は sounds the same as which letter?", "わ", "ほ", "ば", "へ", "As a particle, は is said wa, like わ."],
      ["mc", "Which letter is \"ga\"?", "が", "か", "ぎ", "ざ", "Two dots on か make が."],
      ["mc", "Which letter is \"sa\"?", "さ", "ち", "き", "そ", "さ and ち are mirror images: さ is sa, ち is chi."],
      ["or", "This is sushi.", "これ | は | すし | です", "わ", "The topic particle は is written は but said wa."],
      ["or", "Sushi, please.", "すし | を | ください", "お", "The object particle を is said o but written を."],
      ["or", "I'm going to the station.", "えき | へ | いきます", "え", "The direction particle へ is said e but written へ."],
      ["fi", "す__", "sushi", "し", "ち|さ|ひ", "Sushi is す + し (shi)."],
      ["fi", "ね__", "cat", "こ", "き|け|そ", "Cat is ね + こ (ko)."],
      ["fi", "てん__ら", "tempura", "ぷ", "ぶ|ふ|う", "The circle turns ふ (fu) into ぷ (pu): てんぷら."],
      ["ty", "This is sushi.", "これは すしです", "これ · すし · です", "これわ", "Spell the topic particle は, although you say wa."],
      ["ty", "Sushi, please. (use ください)", "すしを ください", "すし · ください", "すしお", "The object particle を is written を, not お."],
      ["ty", "I'm going to the station.", "えきへ いきます|えきに いきます|わたしは えきへ いきます|わたしは えきに いきます", "えき · いきます · わたし (I)", "えきえ", "The direction particle へ is said e but written へ."]
    ]
  },
  {
    id: "sounds",
    title: "Small letters, long vowels and pitch",
    blurb: "Read small ゃ ゅ ょ and っ, hold long vowels for two beats, and hear pitch differences.",
    deck: "Hiragana 3: marks and small letters",
    body: `
<p>English cares about syllables and stress. Japanese cares about <b>beats</b>: every beat takes about the same time, like notes in a march. Most kana are one beat each, but small letters and long vowels change the count, and the count can change the meaning.</p>
<h3>Small ゃ, ゅ, ょ</h3>
<p>Written small after a letter from the i column (き, し, ち, に, ひ, み, り and their dotted forms), ゃ, ゅ and ょ blend into one beat: き + ゃ = きゃ <i>kya</i>. Full size, they are a beat of their own: きや is <i>ki-ya</i>.</p>
{{ex:しゃしん|shashin|photo}}
{{ex:きょう|kyō|today}}
<h3>Small っ: a short pause</h3>
<p>A small っ is a silent beat. Stop for a moment before the next consonant, as in the middle of "bookcase". The romaji doubles that consonant.</p>
{{ex:きって|kitte|postage stamp}}
{{ex:がっこう|gakkō|school}}
<h3>Long vowels</h3>
<p>A long vowel lasts two beats. In hiragana it is written with an extra vowel letter, and in the romaji with a line over the vowel (a macron): ō means "hold the o".</p>
<div class="tbl"><table><tr><th>Spelling</th><th>Sound</th><th>Example</th></tr><tr><td class="k">ああ</td><td>long a (ā)</td><td class="k">おかあさん</td></tr><tr><td class="k">いい</td><td>long i (ii)</td><td class="k">おにいさん</td></tr><tr><td class="k">うう</td><td>long u (ū)</td><td class="k">じゅう</td></tr><tr><td class="k">ええ, えい</td><td>long e (ē, ei)</td><td class="k">おねえさん, せんせい</td></tr><tr><td class="k">おう, おお</td><td>long o (ō)</td><td class="k">とうきょう, おおきい</td></tr></table></div>
{{ex:おばあさん|obāsan|grandmother}}
{{ex:おばさん|obasan|aunt}}
{{ex:せんせい|sensei|teacher}}
<h3>ん is a beat too</h3>
<p>ん counts as a full beat. Before b, m or p it sounds like m: しんぶん. When a vowel or y follows it, the romaji writes n' to show the break: ほんや (bookstore) is <i>hon-ya</i>, not <i>ho-nya</i>.</p>
{{ex:ほんや|hon'ya|bookstore}}
{{ex:しんぶん|shinbun|newspaper}}
<h3>Count beats, not syllables</h3>
<p>Linguists call a beat a mora. English hears "Tokyo" as two syllables, but とうきょう has four beats: と, う, きょ, う. Give each beat its full time, or the word turns into a different one.</p>
<h3>Pitch, by ear</h3>
<p>English makes one syllable louder. Japanese moves the voice up and down: each beat is high or low. A few words differ only in pitch: はし (chopsticks or bridge), あめ (rain or candy), かみ (paper or god). The romaji does not mark pitch, so listen to the audio and copy the melody.</p>
{{ex:はし|hashi|chopsticks; bridge}}
{{ex:あめ|ame|rain; candy}}
<div class="tip"><b>Most common mistake:</b> cutting a long vowel short. <b>おばさん</b> (aunt) for grandmother → <b>おばあさん</b>. The extra あ is a full beat; hold it.</div>
`,
    check: [
      ["What does the small っ do in きって (postage stamp)?", ["Adds a short pause before the t", "Adds a tsu sound", "Makes the word a question", "Makes the vowel long"], 0, "Small っ is a silent beat: kit-te."],
      ["おばさん means \"aunt\". How do you write \"grandmother\"?", ["おばさん", "おはさん", "おばあさん", "おばさあん"], 2, "Grandmother has a long a: おばあさん, with the extra あ right after ば."],
      ["Which pair differs only in pitch?", ["きって / きて", "あめ (rain) / あめ (candy)", "おばさん / おばあさん", "きゃ / きや"], 1, "あめ is written the same both times; only the melody tells rain from candy."]
    ],
    practice: [
      ["mc", "Which word is \"grandmother\"?", "おばあさん", "おばさん", "おばあさ", "おはあさん", "Grandmother has a long a (obāsan); おばさん is aunt."],
      ["mc", "Which word is \"postage stamp\"?", "きって", "きて", "きつて", "きいて", "A stamp has a short pause: small っ, kitte."],
      ["mc", "How many beats does とうきょう (Tokyo) have?", "Four", "Two", "Three", "Five", "と, う, きょ, う: small ょ joins き, and each long vowel adds a beat."],
      ["mc", "Which spelling is \"kya\", one beat?", "きゃ", "きや", "きあ", "ちゃ", "A small ゃ joins き into one beat; a full-size や is a second beat."],
      ["mc", "Which word is \"teacher\"?", "せんせい", "せんせ", "せんぜい", "せいせん", "Teacher ends in えい, said as a long e: せんせい."],
      ["or", "I'm going to Tokyo.", "とうきょう | へ | いきます", "え", "The direction particle へ is said e but written へ."],
      ["or", "Tea, please.", "おちゃ | を | ください", "お", "The object particle を is said o but written を."],
      ["or", "This is a photo.", "これ | は | しゃしん | です", "しやしん", "Small ゃ joins し into one beat: しゃしん, not shi-ya-shin."],
      ["fi", "き__て", "postage stamp", "っ", "つ|や|ょ", "A small っ makes the pause in kitte."],
      ["fi", "おば__さん", "grandmother", "あ", "お|い|う", "The long a of grandmother is written with an extra あ."],
      ["fi", "しゃし__", "photo", "ん", "む|う|ぬ", "Photo ends in ん: しゃしん (shashin)."],
      ["ty", "I'm going to school.", "がっこうに いきます|がっこうへ いきます|わたしは がっこうに いきます|わたしは がっこうへ いきます", "がっこう · いきます", "がっこうで", "Going to a place takes the destination particle に or へ."],
      ["ty", "I'm going to Tokyo.", "とうきょうに いきます|とうきょうへ いきます|わたしは とうきょうに いきます|わたしは とうきょうへ いきます", "とうきょう · いきます", "とうきょうで", "Going to a place takes the destination particle に or へ."],
      ["ty", "Tea, please. (use ください)", "おちゃを ください", "おちゃ · ください", "おちゃが", "ください takes the object particle を."]
    ]
  },
  {
    id: "katakana",
    title: "Katakana: loanwords and names",
    blurb: "Read katakana loanwords and names, with ー for long vowels and the extra sounds for foreign words.",
    deck: "Katakana 1: a, ka, sa, ta rows",
    body: `
<p>English borrows words and keeps their spelling: <i>café</i>, <i>karaoke</i>. Japanese borrows thousands of words too, and writes them in <b>katakana</b>, a second set of 46 letters with the same sounds as hiragana. Katakana also spells foreign names, including yours.</p>
<h3>Same sounds, sharper shapes</h3>
<p>Every hiragana letter has a katakana twin: か and カ are both <i>ka</i>, す and ス are both <i>su</i>. The grid, the two dots and the circle work the same way. Watch two famous pairs: シ (<i>shi</i>) has its short strokes on the left and its long stroke sweeping up, while ツ (<i>tsu</i>) has them on top and its long stroke falling. ソ (<i>so</i>) and ン (<i>n</i>) differ the same way.</p>
<div class="tbl"><table><tr><th></th><th>a</th><th>i</th><th>u</th><th>e</th><th>o</th></tr><tr><td>vowels</td><td class="k">ア</td><td class="k">イ</td><td class="k">ウ</td><td class="k">エ</td><td class="k">オ</td></tr><tr><td>k</td><td class="k">カ</td><td class="k">キ</td><td class="k">ク</td><td class="k">ケ</td><td class="k">コ</td></tr><tr><td>s</td><td class="k">サ</td><td class="k">シ</td><td class="k">ス</td><td class="k">セ</td><td class="k">ソ</td></tr><tr><td>t</td><td class="k">タ</td><td class="k">チ</td><td class="k">ツ</td><td class="k">テ</td><td class="k">ト</td></tr><tr><td>n</td><td class="k">ナ</td><td class="k">ニ</td><td class="k">ヌ</td><td class="k">ネ</td><td class="k">ノ</td></tr><tr><td>h</td><td class="k">ハ</td><td class="k">ヒ</td><td class="k">フ</td><td class="k">ヘ</td><td class="k">ホ</td></tr><tr><td>m</td><td class="k">マ</td><td class="k">ミ</td><td class="k">ム</td><td class="k">メ</td><td class="k">モ</td></tr><tr><td>y</td><td class="k">ヤ</td><td></td><td class="k">ユ</td><td></td><td class="k">ヨ</td></tr><tr><td>r</td><td class="k">ラ</td><td class="k">リ</td><td class="k">ル</td><td class="k">レ</td><td class="k">ロ</td></tr><tr><td>w</td><td class="k">ワ</td><td></td><td></td><td></td><td class="k">ヲ</td></tr><tr><td>n alone</td><td class="k">ン</td><td></td><td></td><td></td><td></td></tr></table></div>
{{ex:アメリカ|amerika|America}}
{{ex:タクシー|takushī|taxi}}
<h3>ー: the long-vowel mark</h3>
<p>Hiragana adds a vowel letter for a long vowel. Katakana uses a dash, ー, which makes the vowel before it last two beats. The romaji puts a macron on that vowel. Leaving ー out changes the word: ビール is beer, ビル is a building.</p>
{{ex:コーヒー|kōhī|coffee}}
{{ex:ラーメン|rāmen|ramen}}
<h3>Small letters</h3>
<p>Small ッ is a pause, as in hiragana. Small ャ ュ ョ join the letter before them. Katakana also has small ァ ィ ゥ ェ ォ to build sounds Japanese did not have: ティ <i>ti</i>, ファ <i>fa</i>, ウィ <i>wi</i>, ジェ <i>je</i>.</p>
{{ex:ベッド|beddo|bed}}
{{ex:パーティー|pātī|party}}
<h3>English words in Japanese beats</h3>
<p>Japanese beats end in a vowel (or ん), so a borrowed word gets extra vowels and English stress disappears. "McDonald's" becomes マクドナルド, six beats: <i>ma-ku-do-na-ru-do</i>. Say loanwords the Japanese way, or people may not recognize them.</p>
{{ex:マクドナルド|makudonarudo|McDonald's}}
<h3>Writing your name</h3>
<p>Your name is written by sound, not by English spelling: Emily is エミリー, Mike is マイク, Jason is ジェイソン. In a sentence, katakana sits right next to hiragana, and particles stay in hiragana.</p>
{{ex:わたしは エミリーです。|watashi wa emirī desu|I'm Emily.}}
{{ex:コーヒーを ください。|kōhī o kudasai|Coffee, please.}}
<div class="tip"><b>Most common mistake:</b> dropping the long-vowel mark. <b>コーヒ</b> → <b>コーヒー</b>. Each ー is a full beat. When the first 20 letters feel easy, learn the rest with the <b>Katakana 2: na to n, plus long vowels</b> deck.</div>
`,
    check: [
      ["What does ー do in コーヒー?", ["Makes the vowel before it long", "Adds a short pause", "Turns ko into go", "Nothing; it is decoration"], 0, "ー makes the vowel before it last two beats: kōhī."],
      ["How do シ (shi) and ツ (tsu) differ?", ["シ's short strokes sit on top", "シ's short strokes sit on the left, and its long stroke sweeps up", "ツ has three long strokes", "They are the same letter"], 1, "シ: strokes on the left, sweeping up. ツ: strokes on top, falling down."],
      ["Why is McDonald's マクドナルド in Japanese?", ["Katakana has no letter for d", "It is a different company", "Japanese beats end in a vowel, so the consonants get vowels", "It is a joke spelling"], 2, "Japanese beats end in a vowel or ん, so ma-ku-do-na-ru-do has six beats."]
    ],
    practice: [
      ["mc", "Which word is \"coffee\"?", "コーヒー", "コヒー", "コーヒ", "コヒ", "Coffee has two long vowels, so it has two ー marks."],
      ["mc", "Which letter is \"shi\"?", "シ", "ツ", "ソ", "ン", "シ has its short strokes on the left; ツ (tsu) has them on top."],
      ["mc", "Which word is \"taxi\"?", "タクシー", "タクツー", "タクシ", "ククシー", "Taxi is ta-ku-shī, with ー for the long i."],
      ["mc", "Which word is \"beer\"?", "ビール", "ビル", "ビーレ", "ピール", "Beer has a long i: ビール. ビル is a building."],
      ["mc", "Emily writes her name in Japanese. Which is right?", "エミリー", "えみりい", "エミリ", "エミソー", "Foreign names go in katakana, with ー for the long i."],
      ["or", "Coffee, please.", "コーヒー | を | ください", "が", "ください takes the object particle を."],
      ["or", "I'm Emily.", "わたし | は | エミリー | です", "わ", "The topic particle は is written は, even next to katakana."],
      ["or", "This is ramen.", "これ | は | ラーメン | です", "ラメン", "ー makes the vowel long: ラーメン has four beats."],
      ["fi", "コー__ー", "coffee", "ヒ", "ビ|ピ|キ", "Coffee is kōhī: the katakana ヒ (hi).", "!strict"],
      ["fi", "ラー__ン", "ramen", "メ", "ナ|ヌ|ノ", "Ramen is rāmen: the katakana メ (me).", "!strict"],
      ["fi", "パー__ィー", "party", "テ", "デ|チ|ツ", "テ with a small ィ writes the English ti sound: パーティー.", "!strict"],
      ["ty", "I drink coffee.", "コーヒーを のみます|わたしは コーヒーを のみます", "コーヒー · のみます (drink)", "コーヒーが", "The object particle を marks what you drink."],
      ["ty", "Bread, please. (use ください)", "パンを ください", "パン (bread) · ください", "パンが", "ください takes the object particle を."],
      ["ty", "I'm Emily.", "わたしは エミリーです|エミリーです", "わたし · エミリー · です", "わたしわ", "The topic particle は is written は, although you say wa."]
    ]
  },
  {
    id: "desu",
    title: "X は Y です: introducing yourself",
    blurb: "Introduce yourself, say what you are and are not, and ask simple questions politely.",
    deck: "Greetings and introductions",
    body: `
<p>English needs "am", "is" or "are" and a subject in every sentence. Japanese says it with one word at the very end, <b>です</b>, and often leaves the subject out.</p>
<h3>X は Y です</h3>
<p>The basic pattern is "X は Y です": X is what you are talking about, Y is what you say about it. <b>は</b> is the topic particle, like "as for…". So <b>わたしは エミリーです</b> is "as for me, (I) am Emily". は does not mean "is"; です does, and it comes last.</p>
{{ex:わたしは エミリーです。|watashi wa emirī desu|I'm Emily.}}
{{ex:アメリカじんです。|amerikajin desu|I'm American.}}
<h3>Leave out "I" and "you"</h3>
<p>Once the topic is clear, Japanese drops it. After you have said your name, <b>がくせいです</b> is enough for "I'm a student". For "you", use the person's name + さん, or nothing at all. The dictionary word あなた sounds cold, even rude, to someone you have just met, so this course avoids it.</p>
{{ex:がくせいです。|gakusei desu|I'm a student.}}
<h3>さん is for other people</h3>
<p>Put <b>さん</b> after someone else's family or given name: たなかさん, エミリーさん. It works for men and women alike. Never put it after your own name. A teacher gets <b>せんせい</b> instead: やまだせんせい.</p>
{{ex:たなかさんは かいしゃいんです。|tanaka-san wa kaishain desu|Mr. Tanaka works for a company.}}
<h3>Questions with か</h3>
<p>English flips the words for a question: "you are" becomes "are you". Japanese keeps the order and adds <b>か</b> at the end.</p>
{{ex:たなかさんは がくせいですか。|tanaka-san wa gakusei desu ka|Is Mr. Tanaka a student?}}
<h3>Saying "not"</h3>
<p>The negative of です is <b>じゃないです</b>. <b>じゃありません</b> means the same and sounds a little more formal. Answer "no" with いいえ.</p>
{{ex:いいえ、がくせいじゃないです。|iie gakusei janai desu|No, I'm not a student.}}
{{ex:がくせいじゃありません。|gakusei ja arimasen|I'm not a student.}}
<h3>A full introduction</h3>
<p>Begin with <b>はじめまして</b> ("nice to meet you", only at a first meeting), give your name and one fact about yourself, and finish with <b>よろしく おねがいします</b>. It has no exact English; think "I hope we get along". To get someone's attention or to apologize, say すみません, "excuse me" or "sorry".</p>
{{ex:はじめまして。|hajimemashite|Nice to meet you.}}
{{ex:よろしく おねがいします。|yoroshiku onegaishimasu|I look forward to knowing you.}}
<div class="tip"><b>Most common mistake:</b> putting さん on your own name. <b>わたしは エミリーさんです</b> → <b>わたしは エミリーです</b>. From this lesson on the romaji is hidden: read the kana first, and tap the line only to check.</div>
`,
    check: [
      ["Which is the right self-introduction?", ["わたしは スミスさんです", "わたしは スミスです", "スミスさんは わたしです", "わたしです スミス"], 1, "さん goes after other people's names, never your own."],
      ["What does は do in わたしは がくせいです?", ["It marks the topic: \"as for me\"", "It means \"is\"", "It makes a question", "It means \"I\""], 0, "は is the topic particle; です is the word for \"am / is / are\"."],
      ["How do you ask Ms. Sato if she is a teacher?", ["あなたは せんせいですか", "さとうは せんせいですか", "さとうさんは せんせいですか", "さとうさんは せんせいです"], 2, "Use her name + さん instead of あなた, and end with か."]
    ],
    practice: [
      ["mc", "\"I'm a student.\" =", "がくせいです", "がくせいさんです", "がくせいは です", "です がくせい", "Leave out わたし once it is clear; です comes last."],
      ["mc", "\"Is Mr. Tanaka a student?\" =", "たなかさんは がくせいですか", "たなかさんは ですか がくせい", "たなかさんか がくせいです", "がくせい たなかさんは ですか", "Keep the order of the statement and add か at the end."],
      ["mc", "You introduce yourself: \"I'm Emily.\"", "わたしは エミリーです", "わたしは エミリーさんです", "わたしを エミリーです", "わたしは です エミリー", "さん never goes after your own name."],
      ["mc", "\"I'm not a student.\" =", "がくせいじゃないです", "がくせいですじゃない", "がくせいじゃです", "がくせいないです", "The negative of です is じゃないです, in one piece after the noun."],
      ["mc", "You meet someone for the first time. You start with…", "はじめまして", "さようなら", "いいえ", "じゃないです", "はじめまして is said only the first time you meet someone."],
      ["or", "I'm American.", "わたし | は | アメリカじん | です", "を", "The topic particle は follows わたし: \"as for me, American\"."],
      ["or", "I'm not a teacher.", "わたし | は | せんせい | じゃないです", "ですじゃない", "The negative polite ending is じゃないです, after the noun."],
      ["or", "Is Ms. Sato a student?", "さとうさん | は | がくせい | ですか", "です", "か at the end turns the sentence into a question."],
      ["fi", "わたし__ エミリーです。", "I'm Emily.", "は", "を|に|で", "は marks the topic: \"as for me\"."],
      ["fi", "がくせい__。", "I'm not a student.", "じゃないです|じゃありません", "です|ですか|じゃです", "Not a student: じゃないです (or じゃありません)."],
      ["fi", "たなかさんは がくせいです__。", "Is Mr. Tanaka a student?", "か", "は|を|に", "か at the end makes it a question."],
      ["ty", "I'm not a student.", "わたしは がくせいじゃないです|がくせいじゃないです|わたしは がくせいじゃありません|がくせいじゃありません", "わたし · がくせい · not", "がくせいです", "The negative polite ending is じゃないです."],
      ["ty", "I'm American.", "わたしは アメリカじんです|アメリカじんです", "わたし · アメリカじん", "わたしを", "The topic particle は follows わたし."],
      ["ty", "Is Ms. Sato a teacher?", "さとうさんは せんせいですか", "さとうさん · せんせい", "さとうさんを", "The topic particle は follows the person you ask about."]
    ]
  },
  {
    id: "kosoado",
    title: "これ・それ・あれ: this and that",
    blurb: "Point at things and places near you, near the listener or far away, and ask for them in a shop.",
    deck: "Shopping and things",
    body: `
<p>English has two pointing words, "this" and "that". Japanese has three, plus a question word, and they come in sets that start with こ, そ, あ and ど. Teachers call them the ko-so-a-do words.</p>
<h3>Near me, near you, over there</h3>
<p>こ is near the speaker, そ is near the listener, あ is far from both of you, and ど asks "which?". English "that" covers both そ and あ, so ask yourself whose side the thing is on.</p>
<div class="tbl"><table><tr><th></th><th>Near me</th><th>Near you</th><th>Over there</th><th>Which?</th></tr><tr><td>a thing, alone</td><td class="k">これ</td><td class="k">それ</td><td class="k">あれ</td><td class="k">どれ</td></tr><tr><td>before a noun</td><td class="k">この</td><td class="k">その</td><td class="k">あの</td><td class="k">どの</td></tr><tr><td>a place</td><td class="k">ここ</td><td class="k">そこ</td><td class="k">あそこ</td><td class="k">どこ</td></tr></table></div>
<h3>これ alone, この with a noun</h3>
<p>これ, それ, あれ and どれ stand alone, like "this one". この, その, あの and どの always need a noun right after them, like "this bag". なん is "what".</p>
<p>The words switch when the speaker switches. If a clerk holds up a bag and asks about これ, the bag is near the clerk, so in your answer it becomes それ. If you both look at a sign across the street, you both say あれ.</p>
{{ex:これは なんですか。|kore wa nan desu ka|What is this?}}
{{ex:それは かさです。|sore wa kasa desu|That's an umbrella.}}
{{ex:この かばんは いくらですか。|kono kaban wa ikura desu ka|How much is this bag?}}
{{ex:あの ひとは だれですか。|ano hito wa dare desu ka|Who is that person?}}
<h3>Places: ここ, そこ, あそこ, どこ</h3>
<p>The same pattern gives "here", "there (near you)", "over there" and "where". The question word stays where the answer goes; it does not jump to the front as in English.</p>
{{ex:トイレは どこですか。|toire wa doko desu ka|Where is the restroom?}}
{{ex:トイレは あそこです。|toire wa asoko desu|The restroom is over there.}}
<h3>Whose? だれの</h3>
<p>だれ is "who". Add の and it becomes "whose": だれの かさ, "whose umbrella". The thing owned comes after の.</p>
{{ex:これは だれの かさですか。|kore wa dare no kasa desu ka|Whose umbrella is this?}}
<h3>In a shop: を ください</h3>
<p>To ask for something, name it, add the object particle を, and finish with ください, "please give me". There is no word for "the" or "a" to add, and no "can I have": the thing, を, ください. いくらですか asks the price; the numbers for the answer come in lesson 6.</p>
{{ex:それを ください。|sore o kudasai|I'll take that one.}}
<div class="tip"><b>Most common mistake:</b> putting これ before a noun. <b>これ ほん</b> → <b>この ほん</b>. Remember to read the kana first and tap the romaji only to check.</div>
`,
    check: [
      ["Which is correct for \"this book\"?", ["これ ほん", "この ほん", "これの ほん", "ほん この"], 1, "この goes before a noun; これ stands alone."],
      ["The thing is far from both you and the listener. Which word do you use?", ["あれ", "それ", "これ", "どれ"], 0, "あ words point at things far from both people; それ is near the listener."],
      ["How do you say \"Where is it?\"", ["どれですか", "だれですか", "どこですか", "なんですか"], 2, "どこ is \"where\"; どれ is \"which one\", だれ is \"who\", なん is \"what\"."]
    ],
    practice: [
      ["mc", "\"this bag\" =", "この かばん", "これ かばん", "これの かばん", "かばん この", "この needs a noun right after it; これ stands alone."],
      ["mc", "Your friend is holding something. You ask \"What is that?\"", "それは なんですか", "あれは なんですか", "これは なんですか", "どれは なんですか", "Something near the listener is それ."],
      ["mc", "\"Where is the restroom?\" =", "トイレは どこですか", "トイレは どれですか", "トイレは だれですか", "どこは トイレですか", "どこ is \"where\", and it stays where the answer would go."],
      ["mc", "\"Whose umbrella is this?\" =", "これは だれの かさですか", "これは だれ かさですか", "これは だれの かさです", "だれは これの かさですか", "Whose = だれの, and か at the end makes the question."],
      ["mc", "The item is next to the clerk. \"That one, please.\" =", "それを ください", "それが ください", "その ください", "それに ください", "ください takes を, and その would need a noun after it."],
      ["or", "That one, please. (it is near the clerk)", "それ | を | ください", "が", "ください takes the object particle を."],
      ["or", "Whose umbrella is this?", "これ | は | だれ | の | かさ | ですか", "が", "The linking particle の joins だれ and かさ: whose umbrella."],
      ["or", "How much is this bag?", "この | かばん | は | いくら | ですか", "これ", "この goes before the noun かばん; これ stands alone."],
      ["fi", "__ かばんは いくらですか。", "How much is this bag?", "この", "これ|ここ|それ", "Before a noun, \"this\" is この."],
      ["fi", "トイレは __ですか。", "Where is the restroom?", "どこ", "どれ|だれ|なん", "どこ asks \"where\"."],
      ["fi", "それ__ ください。", "That one, please.", "を", "が|に|の", "ください takes を after the thing you want."],
      ["ty", "This one, please. (use ください)", "これを ください", "これ · ください", "これが", "ください takes the object particle を."],
      ["ty", "Whose bag is this?", "これは だれの かばんですか", "これ · だれ · かばん", "だれが", "The linking particle の turns だれ into \"whose\": だれの かばん."],
      ["ty", "Where is the station?", "えきは どこですか", "えき (station) · どこ", "えきを", "The topic particle は marks the place you ask about."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers, prices and the time",
    blurb: "Say numbers up to 99,999, ask and give prices in yen, and tell the time.",
    deck: "Numbers, money and time",
    body: `
<p>Japanese numbers are very regular up to 99. After that they group digits differently from English. Prices and clock times use the same numbers with a small word attached.</p>
<h3>One to ten, then building up</h3>
<div class="tbl"><table><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr><tr><td class="k">いち</td><td class="k">に</td><td class="k">さん</td><td class="k">よん</td><td class="k">ご</td><td class="k">ろく</td><td class="k">なな</td><td class="k">はち</td><td class="k">きゅう</td><td class="k">じゅう</td></tr></table></div>
<p>Four and seven also have the older words し and しち, which survive in a few fixed words; use よん and なな when you count. Above ten, numbers are built like sums: じゅういち is 10 + 1, にじゅう is 2 × 10, and にじゅうご is 25. Zero is ゼロ, borrowed from English.</p>
{{ex:にじゅうご|nijūgo|twenty-five}}
<h3>Hundreds and thousands</h3>
<p>ひゃく is 100 and せん is 1,000. A few combinations change their sound, and they are worth learning as words: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800), さんぜん (3,000), はっせん (8,000).</p>
{{ex:さんびゃく|sanbyaku|three hundred}}
<h3>Counting in ten-thousands</h3>
<p>English groups digits by thousands, so 10,000 is "ten thousand". Japanese has a word for ten thousand, まん, and groups by four digits. So 10,000 is いちまん, 20,000 is にまん and 50,000 is ごまん. Never say じゅうせん.</p>
{{ex:いちまん|ichiman|ten thousand}}
<h3>Prices: えん and いくらですか</h3>
<p>Put えん (yen) right after the number: ひゃくごじゅうえん is ¥150, about the price of a rice ball. Longer prices are read exactly like the numbers, biggest part first: せんごひゃくえん is ¥1,500, one thousand and five hundred. Ask any price with いくらですか.</p>
{{ex:これは いくらですか。|kore wa ikura desu ka|How much is this?}}
{{ex:ひゃくごじゅうえんです。|hyakugojūen desu|It's 150 yen.}}
<h3>Telling the time</h3>
<p>Add じ for "o'clock", ふん or ぷん for minutes (ごふん is five minutes, じゅっぷん is ten), and はん for "half past". Three hours need care: よじ (4:00), しちじ (7:00, also ななじ) and くじ (9:00). Ask the time with なんじですか. For "a.m." and "p.m.", put ごぜん or ごご before the time, not after it: ごご さんじ is 3 p.m.</p>
{{ex:いま なんじですか。|ima nanji desu ka|What time is it now?}}
{{ex:よじはんです。|yojihan desu|It's four thirty.}}
<h3>"At" a time: に</h3>
<p>English says "at seven". Japanese puts the time particle に after the time instead: しちじに. Learn おきます (get up) as a word for now; verbs get a lesson of their own in lesson 8.</p>
{{ex:しちじに おきます。|shichiji ni okimasu|I get up at seven.}}
<div class="tip"><b>Most common mistake:</b> counting ten thousand the English way. <b>じゅうせん</b> → <b>いちまん</b>. As always, read the kana first and tap the romaji only to check.</div>
`,
    check: [
      ["How do you say 20,000?", ["にじゅうせん", "にまん", "にせん", "にひゃくまん"], 1, "Japanese counts in ten-thousands: 20,000 is two まん, にまん."],
      ["How do you say 4:00?", ["しじ", "よんじ", "よじ", "よっじ"], 2, "Four o'clock is always よじ."],
      ["Which particle goes after a clock time, as in \"at seven\"?", ["に", "で", "を", "の"], 0, "A clock time takes the time particle に: しちじに."]
    ],
    practice: [
      ["mc", "\"300 yen\" =", "さんびゃくえん", "さんひゃくえん", "さんぴゃくえん", "さんせんえん", "After さん, ひゃく becomes びゃく."],
      ["mc", "\"10,000\" =", "いちまん", "じゅうせん", "せんせん", "ひゃくひゃく", "Japanese has a word for ten thousand: まん."],
      ["mc", "\"4 o'clock\" =", "よじ", "しじ", "よんじ", "よっじ", "Four o'clock is よじ, never しじ or よんじ."],
      ["mc", "\"What time is it?\" =", "なんじですか", "いくらですか", "なんですか", "どこですか", "じ is \"o'clock\", so なんじ asks the hour; いくら asks a price."],
      ["mc", "\"800 yen\" =", "はっぴゃくえん", "はちひゃくえん", "はちびゃくえん", "はっひゃくえん", "はち + ひゃく becomes はっぴゃく, with small っ."],
      ["or", "I get up at seven.", "しちじ | に | おきます", "で", "A clock time takes the time particle に."],
      ["or", "This is 600 yen.", "これ | は | ろっぴゃくえん | です", "を", "The topic particle は marks the thing whose price you give."],
      ["or", "How much is this umbrella?", "この | かさ | は | いくら | ですか", "なんじ", "いくら asks a price; なんじ asks the time."],
      ["fi", "さん__えんです。", "It's 300 yen.", "びゃく", "ひゃく|ぴゃく|せん", "After さん, ひゃく becomes びゃく: さんびゃく."],
      ["fi", "くじ__ おきます。", "I get up at nine.", "に", "で|を|が", "A clock time takes に: くじに."],
      ["fi", "__じです。", "It's four o'clock.", "よ", "し|よん|よっ", "Four o'clock is よじ."],
      ["ty", "I get up at seven.", "しちじに おきます|ななじに おきます|わたしは しちじに おきます|わたしは ななじに おきます", "しちじ · おきます", "しちじで", "A clock time takes the time particle に."],
      ["ty", "This is 300 yen.", "これは さんびゃくえんです", "これ · さんびゃくえん", "これを", "The topic particle は marks the thing whose price you give."],
      ["ty", "This isn't 1,000 yen.", "これは せんえんじゃないです|これは せんえんじゃありません", "これ · せんえん · not", "せんえんです", "The negative polite ending is じゃないです."]
    ]
  },
  {
    id: "no-mo",
    title: "の and も: my, your, and \"too\"",
    blurb: "Say whose something is with の, add \"too\" with も, and talk about your family and someone else's.",
    deck: "Family and people",
    body: `
<p>English shows ownership with "my", "your" and "'s", and it adds "too" at the end of a sentence. Japanese does both with particles: <b>の</b> and <b>も</b>.</p>
<h3>の joins two nouns</h3>
<p>The linking particle の goes between two nouns, and the main noun always comes last. <b>わたしの ほん</b> is "my book", word for word "I-の book". The first noun can be an owner, a subject or a place: にほんごの せんせい is a teacher of Japanese, and とうきょうの だいがく is a university in Tokyo.</p>
{{ex:これは わたしの かさです。|kore wa watashi no kasa desu|This is my umbrella.}}
{{ex:やまだせんせいは にほんごの せんせいです。|yamada sensei wa nihongo no sensei desu|Yamada sensei teaches Japanese.}}
{{ex:とうきょうの だいがくです。|tōkyō no daigaku desu|It's a university in Tokyo.}}
<p>English can flip the order ("the book of my teacher"); Japanese cannot. The owner comes first, then の, then the thing. You can chain several in a row, still reading from the owner outward: たなかさんの ともだちの かばん is Mr. Tanaka's friend's bag.</p>
<h3>も means "too"</h3>
<p>English puts "too" at the end. Japanese puts the also particle も right after the word it adds. も replaces は, so it is わたしも, never わたしはも. It replaces を in the same way: これも ください. In a question it works just as well: エミリーさんも がくせいですか, "Is Emily a student too?"</p>
{{ex:わたしも がくせいです。|watashi mo gakusei desu|I'm a student too.}}
{{ex:サラさんも アメリカじんです。|sara-san mo amerikajin desu|Sara is American too.}}
{{ex:これも ください。|kore mo kudasai|This one too, please.}}
<h3>My family, your family</h3>
<p>English uses "mother" for anyone's mother. Japanese uses a plain word for your own family when you talk to other people, and a polite word for someone else's family. You also use the polite word when you call your own family members, as in "Mom!".</p>
<div class="tbl"><table><tr><th></th><th>My own</th><th>Someone else's</th></tr><tr><td>mother</td><td class="k">はは</td><td class="k">おかあさん</td></tr><tr><td>father</td><td class="k">ちち</td><td class="k">おとうさん</td></tr><tr><td>older brother</td><td class="k">あに</td><td class="k">おにいさん</td></tr><tr><td>older sister</td><td class="k">あね</td><td class="k">おねえさん</td></tr></table></div>
{{ex:ははは せんせいです。|haha wa sensei desu|My mother is a teacher.}}
{{ex:おかあさんは おげんきですか。|okāsan wa ogenki desu ka|How is your mother?}}
<p>The same goes for お in front of a word: it makes the word polite, so you use it for other people's things (おなまえ) and leave it off your own (わたしの なまえ).</p>
<div class="tip"><b>Most common mistake:</b> keeping は next to も. <b>わたしはも がくせいです</b> → <b>わたしも がくせいです</b>. Read the kana first, then tap the romaji to check.</div>
`,
    check: [
      ["How do you say \"my friend\"?", ["ともだちの わたし", "わたしの ともだち", "わたし ともだち", "わたしが ともだち"], 1, "Owner first, then の, then the thing: わたしの ともだち."],
      ["Emily is a student. How do you say \"I'm a student too\"?", ["わたしも がくせいです", "わたしはも がくせいです", "わたしは がくせいも です", "わたしの がくせいです"], 0, "も replaces は: わたしも."],
      ["A friend asks about your mother. You say \"My mother is a teacher.\"", ["おかあさんさんは せんせいです", "あなたの ははは せんせいです", "ははは せんせいです", "ははさんは せんせいです"], 2, "Your own mother, when you talk to others, is はは, with no さん."]
    ],
    practice: [
      ["mc", "\"my book\" =", "わたしの ほん", "ほんの わたし", "わたし ほん", "わたしは ほん", "Owner first, then の, then the thing owned."],
      ["mc", "\"I'm a student too.\" =", "わたしも がくせいです", "わたしはも がくせいです", "わたしもは がくせいです", "わたしの がくせいです", "も takes the place of は; they never sit together."],
      ["mc", "You talk about your own mother to a coworker. Which word?", "はは", "おかあさん", "ははさん", "おはは", "To other people, your own mother is はは."],
      ["mc", "\"a Japanese teacher\" (a teacher of Japanese) =", "にほんごの せんせい", "せんせいの にほんご", "にほんご せんせいの", "にほんごが せんせい", "The main noun, せんせい, comes last, after の."],
      ["mc", "You ask Mr. Tanaka: \"Is your mother a teacher?\"", "おかあさんは せんせいですか", "ははは せんせいですか", "おかあさんの せんせいですか", "ははさんは せんせいですか", "Someone else's mother is おかあさん."],
      ["or", "This is my umbrella.", "これ | は | わたし | の | かさ | です", "が", "The linking particle の joins わたし and かさ: my umbrella."],
      ["or", "I'm American too.", "わたし | も | アメリカじん | です", "は", "The also particle も replaces は: わたしも."],
      ["or", "My mother is a teacher.", "はは | は | せんせい | です", "おかあさん", "To other people, your own mother is はは."],
      ["fi", "これは わたし__ ほんです。", "This is my book.", "の", "が|は|を", "の joins the owner and the thing: わたしの ほん."],
      ["fi", "エミリーさん__ がくせいです。", "Emily is a student too.", "も", "は|の|を", "\"Too\" is も, in place of は."],
      ["fi", "たなかさんの __は せんせいです。", "Mr. Tanaka's mother is a teacher.", "おかあさん", "はは|ちち|あね", "Someone else's mother is おかあさん."],
      ["ty", "This is my bag.", "これは わたしの かばんです", "これ · わたし · かばん", "わたしが", "The linking particle の joins わたし and かばん."],
      ["ty", "I'm a student too.", "わたしも がくせいです", "わたし · がくせい · too", "わたしは", "The also particle も replaces は: わたしも."],
      ["ty", "Is your mother a teacher? (to Mr. Tanaka)", "おかあさんは せんせいですか|たなかさんの おかあさんは せんせいですか", "おかあさん · せんせい", "ははは", "Someone else's mother is おかあさん, never はは."]
    ]
  },
  {
    id: "masu",
    title: "Verbs in the ます form",
    blurb: "Say what you do and don't do with polite verbs, and put the verb at the end of the sentence.",
    deck: "Daily routine",
    body: `
<p>English verbs change very little ("eat", "eats") and sit in the middle of the sentence. Japanese verbs sit at the very end, and their endings carry politeness, "not" and tense. This lesson uses the polite ending ます and its negative, ません.</p>
<h3>The verb goes last</h3>
<p>English says "I eat sushi": subject, verb, object. Japanese says "sushi を eat": the thing with the object particle を, then the verb. Whatever else you add (when, how often) also comes before the verb. Questions work as they do with です: keep the order and add か, as in コーヒーを のみますか, "Do you drink coffee?"</p>
{{ex:すしを たべます。|sushi o tabemasu|I eat sushi.}}
{{ex:まいにち べんきょうします。|mainichi benkyō shimasu|I study every day.}}
<h3>ます and ません</h3>
<p>The ます form is the polite form you use with anyone you don't know well. The part before ます is called the stem: たべ in たべます. For "not", replace ます with ません. The same form covers "I eat" and "I will eat", so ます is both present and future.</p>
<div class="tbl"><table><tr><th>English</th><th>Yes</th><th>Not</th></tr><tr><td>eat</td><td class="k">たべます</td><td class="k">たべません</td></tr><tr><td>drink</td><td class="k">のみます</td><td class="k">のみません</td></tr><tr><td>go</td><td class="k">いきます</td><td class="k">いきません</td></tr><tr><td>do</td><td class="k">します</td><td class="k">しません</td></tr><tr><td>come</td><td class="k">きます</td><td class="k">きません</td></tr></table></div>
{{ex:コーヒーを のみません。|kōhī o nomimasen|I don't drink coffee.}}
{{ex:あした きます。|ashita kimasu|I'll come tomorrow.}}
<h3>Three kinds of verbs</h3>
<p>Japanese verbs fall into three groups: ru-verbs (たべます, みます, おきます), u-verbs (のみます, いきます, よみます), and two irregular verbs, します (do) and きます (come). For now, learn each verb as a word in its ます form; the groups matter later, when you change forms.</p>
<h3>Time words</h3>
<p>Words like まいにち (every day), きょう (today) and あした (tomorrow) take no particle at all. Clock times take the time particle に, as in lesson 6. Time words usually come early in the sentence.</p>
{{ex:しちじに おきます。|shichiji ni okimasu|I get up at seven.}}
<h3>How often</h3>
<p>よく (often) and ときどき (sometimes) go with ます. あまり means "not much" and needs ません: あまり のみません is "I don't drink much". English "I drink not much" sounds odd, and so does あまり with ます.</p>
{{ex:ときどき おちゃを のみます。|tokidoki ocha o nomimasu|I sometimes drink tea.}}
{{ex:あまり テレビを みません。|amari terebi o mimasen|I don't watch TV much.}}
<div class="tip"><b>Most common mistake:</b> putting the verb second, as in English. <b>たべます すしを</b> → <b>すしを たべます</b>. Read the kana first; tap the romaji only to check.</div>
`,
    check: [
      ["Where does the verb go in a Japanese sentence?", ["At the very end", "Second, after the subject", "First", "Anywhere"], 0, "Japanese puts the verb last: すしを たべます."],
      ["How do you make たべます (eat) negative?", ["たべないます", "たべません", "たべますない", "たべますじゃない"], 1, "Replace ます with ません."],
      ["あまり (not much) goes with which verb form?", ["のみます", "のみますか", "のみません", "のみますね"], 2, "あまり needs a negative verb: あまり のみません."]
    ],
    practice: [
      ["mc", "\"I eat sushi.\" =", "すしを たべます", "たべます すしを", "すしを たべ", "たべます を すし", "The object with を comes first, the verb last."],
      ["mc", "\"I don't drink coffee.\" =", "コーヒーを のみません", "コーヒーを のみます", "コーヒーを のみますません", "のみません コーヒーを", "For \"not\", ます becomes ません, and the verb stays last."],
      ["mc", "\"I study every day.\" =", "まいにち べんきょうします", "まいにちに べんきょうします", "べんきょうします まいにち", "まいにち べんきょう", "まいにち takes no particle, and the verb comes last."],
      ["mc", "\"I don't watch TV much.\" =", "あまり テレビを みません", "あまり テレビを みます", "テレビを あまり みます", "あまりに テレビを みます", "あまり needs the negative ending ません."],
      ["mc", "\"I get up at six.\" =", "ろくじに おきます", "ろくじで おきます", "おきます ろくじに", "ろくじを おきます", "A clock time takes に, and the verb comes last."],
      ["or", "I drink tea.", "おちゃ | を | のみます", "が", "The object particle を marks what you drink."],
      ["or", "I don't eat meat.", "にく | を | たべません", "たべないます", "Don't eat: the polite ending ません replaces ます."],
      ["or", "I'll come tomorrow.", "あした | きます", "に", "Time words like あした take no particle, and the verb comes last."],
      ["fi", "すし__ たべます。", "I eat sushi.", "を", "が|に|の", "What you eat takes を."],
      ["fi", "コーヒーを のみ__。", "I don't drink coffee.", "ません", "ます|ないです|ませんです", "\"Don't\" is ません in place of ます."],
      ["fi", "あまり たべ__。", "I don't eat much.", "ません", "ます|ないます|ますか", "あまり goes with ません."],
      ["ty", "I don't eat meat.", "にくを たべません|わたしは にくを たべません", "にく (meat) · たべます · not", "たべます", "Don't eat: the polite ending ません."],
      ["ty", "I drink coffee every day.", "まいにち コーヒーを のみます|わたしは まいにち コーヒーを のみます|まいにち わたしは コーヒーを のみます|コーヒーを まいにち のみます|わたしは コーヒーを まいにち のみます", "まいにち · コーヒー · のみます", "コーヒーが", "The object particle を marks what you drink."],
      ["ty", "I get up at six.", "ろくじに おきます|わたしは ろくじに おきます", "ろくじ · おきます", "ろくじで", "A clock time takes the time particle に."]
    ]
  },
  {
    id: "particles",
    title: "Particles を・に・で・へ",
    blurb: "Say what you act on, where you go, when, where you do something and how, with を, に, へ and で.",
    deck: "Places and getting around",
    body: `
<p>English shows how a noun fits into the sentence with small words in front of it: "to Tokyo", "at home", "by train". Japanese puts particles after the noun: とうきょうに, うちで, でんしゃで. This lesson sets the four busiest ones side by side.</p>
<h3>を: what you act on</h3>
<p>The object particle を marks what you eat, drink, read, watch or buy. English shows the object by its place after the verb; Japanese shows it with を, and the verb still waits at the end.</p>
{{ex:ほんを よみます。|hon o yomimasu|I read books.}}
<h3>に and へ: where you go</h3>
<p>With いきます (go), きます (come) and かえります (go home), the destination particle に marks where you are headed. へ, said <i>e</i>, means "toward" and works just as well here; both are correct.</p>
{{ex:えきに いきます。|eki ni ikimasu|I'm going to the station.}}
{{ex:うちへ かえります。|uchi e kaerimasu|I'm going home.}}
<h3>に for a time</h3>
<p>As in lesson 6, a clock time takes the time particle に: さんじに, "at three". Words like あした and まいにち still take nothing.</p>
{{ex:さんじに がっこうに いきます。|sanji ni gakkō ni ikimasu|I go to school at three.}}
<h3>で: where something happens</h3>
<p>English uses "at" or "in" both for where you are and for where you do something. Japanese splits them. The place-of-action particle で marks where an action happens: where you eat, study, buy or play. Where someone or something simply is takes に instead; that is the next lesson.</p>
{{ex:レストランで たべます。|resutoran de tabemasu|I eat at a restaurant.}}
{{ex:うちで ほんを よみます。|uchi de hon o yomimasu|I read books at home.}}
<h3>で: by and in</h3>
<p>で has a second job: the means particle で marks how you do something, such as how you travel or which language you use.</p>
{{ex:バスで いきます。|basu de ikimasu|I'll go by bus.}}
{{ex:にほんごで はなします。|nihongo de hanashimasu|I speak in Japanese.}}
<h3>After the noun, never before</h3>
<p>A particle never goes in front like an English preposition: とうきょうに, not に とうきょう. Several phrases can line up before the verb, each with its own particle, and the verb still comes last.</p>
{{ex:でんしゃで しんじゅくに いきます。|densha de shinjuku ni ikimasu|I'm going to Shinjuku by train.}}
<div class="tip"><b>Most common mistake:</b> using に for every "at". <b>レストランに たべます</b> → <b>レストランで たべます</b>. Eating is an action, so the place takes で. Read the kana first; tap the romaji to check.</div>
`,
    check: [
      ["\"I eat at a restaurant\": which particle goes after レストラン?", ["に", "で", "を", "へ"], 1, "Where an action happens takes で."],
      ["Which particle marks where you go?", ["に or へ", "で", "を", "の"], 0, "With verbs of going and coming, に or へ marks the destination."],
      ["How do you say \"by train\"?", ["でんしゃに", "でんしゃを", "でんしゃで", "でんしゃの"], 2, "The means of travel takes で."]
    ],
    practice: [
      ["mc", "\"I eat at a restaurant.\" =", "レストランで たべます", "レストランに たべます", "レストランを たべます", "で レストラン たべます", "Eating is an action, so the place takes で, after the noun."],
      ["mc", "\"I'm going to the station.\" =", "えきに いきます", "えきで いきます", "えきを いきます", "に えき いきます", "Where you go takes に, after the noun."],
      ["mc", "\"I'll go by bus.\" =", "バスで いきます", "バスに いきます", "バスを いきます", "で バス いきます", "How you travel takes で."],
      ["mc", "\"I speak Japanese.\" =", "にほんごを はなします", "にほんごが はなします", "にほんごに はなします", "はなします にほんごを", "What you speak is the object: を, and the verb comes last."],
      ["mc", "\"I study at home.\" =", "うちで べんきょうします", "うちに べんきょうします", "うちを べんきょうします", "うちへ べんきょうします", "Studying is an action, so the place takes で."],
      ["or", "I eat at a restaurant.", "レストラン | で | たべます", "に", "Where an action happens takes the place-of-action particle で."],
      ["or", "I'm going to Kyoto.", "きょうと | に | いきます", "で", "Going to a place takes the destination particle に."],
      ["or", "I'm going by train.", "でんしゃ | で | いきます", "に", "How you travel takes the means particle で."],
      ["fi", "こうえん__ あそびます。", "I play in the park.", "で", "に|を|へ", "Playing is an action, so the park takes で."],
      ["fi", "あした とうきょう__ いきます。", "I'm going to Tokyo tomorrow.", "に|へ", "で|を|が", "Where you go takes に or へ."],
      ["fi", "さんじ__ がっこうに いきます。", "I go to school at three.", "に", "で|を|が", "A clock time takes に."],
      ["ty", "I eat at a restaurant.", "レストランで たべます|わたしは レストランで たべます", "レストラン · たべます", "レストランに", "Where you eat takes the place-of-action particle で."],
      ["ty", "I go to school by bus.", "バスで がっこうに いきます|バスで がっこうへ いきます|がっこうに バスで いきます|がっこうへ バスで いきます|わたしは バスで がっこうに いきます|わたしは バスで がっこうへ いきます|わたしは がっこうに バスで いきます|わたしは がっこうへ バスで いきます", "バス · がっこう · いきます", "バスに", "How you travel takes the means particle で."],
      ["ty", "I'm going to Osaka.", "おおさかに いきます|おおさかへ いきます|わたしは おおさかに いきます|わたしは おおさかへ いきます", "おおさか · いきます", "おおさかで", "Going to a place takes the destination particle に or へ."]
    ]
  },
  {
    id: "arimasu",
    title: "あります / います: there is",
    blurb: "Say what is where, for things and for people and animals, with on, under, next to and more.",
    deck: "Shopping and things",
    body: `
<p>English says "there is" for a book, a cat and a person alike. Japanese has two verbs: <b>あります</b> for things and plants, and <b>います</b> for people and animals.</p>
<h3>あります or います?</h3>
<p>Ask yourself: can it move on its own? A bag, a station or a tree: あります. A friend, a teacher or a dog: います. The negatives are ありません and いません. ありますか is also the everyday way to ask a shop whether they have something, and the answer may be すみません、ありません: "Sorry, we don't have any."</p>
{{ex:ペンが ありますか。|pen ga arimasu ka|Do you have a pen?}}
{{ex:いぬが います。|inu ga imasu|There's a dog.}}
<h3>"There is a … in …"</h3>
<p>To say what is somewhere, start with the place and the location particle に, then the thing with the subject particle が, then the verb. Where something is takes に, not で: で is only for where an action happens (lesson 9).</p>
{{ex:こうえんに いぬが います。|kōen ni inu ga imasu|There's a dog in the park.}}
{{ex:えきの まえに コンビニが あります。|eki no mae ni konbini ga arimasu|There's a convenience store in front of the station.}}
<h3>"The … is in …"</h3>
<p>When the thing is already what you are talking about ("Where's my wallet?"), start with it and the topic particle は, then the place. To ask, put どこに in the place slot. A rough guide: something you mention for the first time takes が, and something both of you already have in mind takes は.</p>
{{ex:さいふは かばんの なかに あります。|saifu wa kaban no naka ni arimasu|My wallet is in my bag.}}
{{ex:たなかさんは どこに いますか。|tanaka-san wa doko ni imasu ka|Where is Mr. Tanaka?}}
<h3>On, under, next to</h3>
<p>English says "on the desk". Japanese says "the desk's top": つくえの うえ. The thing you measure from comes first, then の, then the position word, then に.</p>
<div class="tbl"><table><tr><th>Word</th><th>Meaning</th></tr><tr><td class="k">うえ</td><td>on, above</td></tr><tr><td class="k">した</td><td>under, below</td></tr><tr><td class="k">なか</td><td>in, inside</td></tr><tr><td class="k">となり</td><td>next to</td></tr><tr><td class="k">まえ</td><td>in front of</td></tr><tr><td class="k">うしろ</td><td>behind</td></tr></table></div>
{{ex:ほんは つくえの うえに あります。|hon wa tsukue no ue ni arimasu|The book is on the desk.}}
{{ex:ねこは いすの したに います。|neko wa isu no shita ni imasu|The cat is under the chair.}}
<p>So "next to the bank" is ぎんこうの となり, never となりの ぎんこう, which would mean "the bank next door". The same words work for people and animals too; only the verb changes to います.</p>
<div class="tip"><b>Most common mistake:</b> あります for an animal or a person. <b>へやに いぬが あります</b> → <b>へやに いぬが います</b>. Read the kana first, and tap the romaji only to check.</div>
`,
    check: [
      ["Which verb do you use for a dog?", ["あります", "います", "です", "いきます"], 1, "People and animals take います."],
      ["\"The book is on the desk.\" Which particle goes after うえ?", ["で", "を", "に", "が"], 2, "Where something is takes に: つくえの うえに."],
      ["Which is right for \"next to the bank\"?", ["ぎんこうの となり", "となりの ぎんこう", "ぎんこう となり", "ぎんこうが となり"], 0, "The thing you measure from comes first, then の, then となり."]
    ],
    practice: [
      ["mc", "\"There's a cat in the room.\" =", "へやに ねこが います", "へやに ねこが あります", "へやで ねこが います", "へやに ねこを います", "A cat is an animal, so います; where it is takes に."],
      ["mc", "\"There's a book on the desk.\" =", "つくえの うえに ほんが あります", "つくえの うえで ほんが あります", "つくえの うえに ほんが います", "うえの つくえに ほんが あります", "A book is a thing, so あります; on the desk is つくえの うえに."],
      ["mc", "\"Where is Mr. Tanaka?\" =", "たなかさんは どこに いますか", "たなかさんは どこに ありますか", "たなかさんは どこで いますか", "たなかさんを どこに いますか", "A person takes います, and where someone is takes に."],
      ["mc", "\"next to the station\" =", "えきの となり", "となりの えき", "えき となりの", "えきが となり", "The station comes first, then の, then となり."],
      ["mc", "\"My wallet is in my bag.\" =", "さいふは かばんの なかに あります", "さいふは かばんの なかで あります", "さいふは かばんの なかに います", "さいふは なかの かばんに あります", "A wallet is a thing (あります), and in the bag is かばんの なかに."],
      ["or", "It's on the desk.", "つくえ | の | うえ | に | あります", "で", "Where something is takes the location particle に, not で."],
      ["or", "Where's Emily? She's in the park.", "こうえん | に | います", "で | あります", "Where someone is takes the location particle に, and a person takes います."],
      ["or", "Is there a convenience store?", "コンビニ | が | ありますか", "いますか", "A store is a thing, so it takes あります, not います."],
      ["fi", "つくえの うえに ほん__ あります。", "There's a book on the desk.", "が", "を|で|の", "The thing that is there takes が."],
      ["fi", "こうえんに いぬが __。", "There's a dog in the park.", "います", "あります|ありません|いません", "A dog is an animal, so います."],
      ["fi", "えき__ まえに コンビニが あります。", "There's a convenience store in front of the station.", "の", "が|に|で", "In front of the station is えきの まえ, with の."],
      ["ty", "It's in the bag. (use あります)", "かばんの なかに あります", "かばん · なか · あります", "なかで", "Where something is takes the location particle に."],
      ["ty", "Mr. Tanaka is at the station. (use います)", "たなかさんは えきに います", "たなかさん · えき · います", "えきで", "Where someone is takes the location particle に, not で."],
      ["ty", "There's a cat under the chair.", "いすの したに ねこが います|ねこが いすの したに います", "いす (chair) · した · ねこ · います", "ねこを", "The cat that is there takes the subject particle が."]
    ]
  }
];
