/* en-ja lessons 20–28 (short … must). Written by EN-JA-3. pron = modified Hepburn romaji typed by hand (profile §6.1); there is no respell.js for ja. */
module.exports = [
  {
    id: "short",
    title: "Short forms and casual speech",
    blurb: "Talk casually with friends in short forms, and know when to stay with です and ます.",
    deck: "Casual and polite",
    body: `
<p>So far every sentence has ended in <b>です</b> or <b>ます</b>. That polite style is right with strangers, staff, teachers and colleagues. Between friends and family, Japanese uses <b>short forms</b> (also called plain forms): the same words without the polite ending.</p>
<h3>The dictionary form</h3>
<p>The short form of a <b>ます</b> verb is its <b>dictionary form</b>, the form a dictionary lists. ru-verbs swap <b>ます</b> for <b>る</b>. u-verbs change the sound before <b>ます</b> from an i-sound to a u-sound. The two irregular verbs are <b>する</b> and <b>くる</b>.</p>
<div class="tbl"><table><tr><th>Polite</th><th>Short</th><th>English</th></tr><tr><td class="k">たべます</td><td class="k">たべる</td><td>eat (ru-verb)</td></tr><tr><td class="k">のみます</td><td class="k">のむ</td><td>drink (u-verb)</td></tr><tr><td class="k">いきます</td><td class="k">いく</td><td>go (u-verb)</td></tr><tr><td class="k">かいます</td><td class="k">かう</td><td>buy (u-verb)</td></tr><tr><td class="k">します</td><td class="k">する</td><td>do</td></tr><tr><td class="k">きます</td><td class="k">くる</td><td>come</td></tr></table></div>
{{ex:まいにち コーヒーを のむ。|mainichi kōhī o nomu|I drink coffee every day. (casual)}}
{{ex:あした なにを する？|ashita nani o suru|What are you doing tomorrow? (casual)}}
<h3>The negative: ない</h3>
<p>English adds "don't". Japanese changes the end of the verb to <b>ない</b>. ru-verbs drop <b>る</b> and add <b>ない</b>. u-verbs change the u-sound to an a-sound, and a verb ending in <b>う</b> takes <b>わ</b>. <b>する</b> becomes <b>しない</b>, <b>くる</b> becomes <b>こない</b>, and <b>ある</b> ("there is") is just <b>ない</b>.</p>
<div class="tbl"><table><tr><th>Short</th><th>Short negative</th></tr><tr><td class="k">たべる</td><td class="k">たべない</td></tr><tr><td class="k">のむ</td><td class="k">のまない</td></tr><tr><td class="k">いく</td><td class="k">いかない</td></tr><tr><td class="k">かう</td><td class="k">かわない</td></tr><tr><td class="k">ある</td><td class="k">ない</td></tr></table></div>
{{ex:きょうは いかない。|kyō wa ikanai|I'm not going today. (casual)}}
<h3>Adjectives and nouns</h3>
<p>For an い-adjective, just drop <b>です</b>: <b>たかいです</b> becomes <b>たかい</b>, and <b>たかくないです</b> becomes <b>たかくない</b>. For a noun or な-adjective, <b>です</b> becomes <b>だ</b>, and <b>じゃないです</b> becomes <b>じゃない</b>. In conversation, <b>だ</b> is often left off.</p>
{{ex:この ラーメン、おいしい！|kono rāmen oishii|This ramen is good! (casual)}}
{{ex:けんは がくせいじゃない。|ken wa gakusei janai|Ken isn't a student. (casual)}}
<h3>Casual questions</h3>
<p>Casual questions usually drop <b>か</b>. Say the short form with a rising voice: <b>いく？</b> The answer is <b>うん</b> (yeah) or <b>ううん</b> (nope). Never end a question with <b>だ</b>. The rising voice does the job that <b>か</b> does in polite speech.</p>
{{ex:あした いく？うん、いく。|ashita iku un iku|Are you going tomorrow? Yeah, I am.}}
{{ex:ひま？ううん、いそがしい。|hima uun isogashii|Are you free? No, I'm busy.}}
<h3>Which style when?</h3>
<p>Use short forms with friends, family and children. With anyone you have just met, anyone older or senior, and anyone serving you, stay with <b>です</b> and <b>ます</b>. When in doubt, stay polite. Short forms are not only for friends, though: from the next lesson on, they also appear inside polite sentences, before endings such as <b>と おもいます</b>.</p>
<div class="tip"><b>Most common mistake:</b> short forms with a stranger. To a shop clerk, <b>いく？</b> → <b>いきますか。</b> Also watch "there isn't": <b>あらない</b> → <b>ない</b>, and casual questions: <b>がくせいだ？</b> → <b>がくせい？</b> Read the kana first, then check the romaji.</div>
`,
    check: [
      ["What is the dictionary form of のみます (drink)?", ["のむ", "のみる", "のまない", "のみ"], 0, "のみます is a u-verb: the み sound changes to む."],
      ["How do you say \"there isn't\" in the short form?", ["あらない", "ありない", "ない", "あるない"], 2, "ある is special: its short negative is just ない."],
      ["You ask a friend \"Are you a student?\" casually. Which is right?", ["がくせいだ？", "がくせい？", "がくせいだか？", "がくせいか だ？"], 1, "Casual questions drop か and never end in だ."]
    ],
    practice: [
      ["mc", "Dictionary form of たべます =", "たべる", "たべう", "たべむ", "たべない", "たべます is a ru-verb: swap ます for る."],
      ["mc", "Dictionary form of のみます =", "のむ", "のみる", "のまる", "のみ", "のみます is a u-verb: the み sound changes to む."],
      ["mc", "Short negative of かう (buy) =", "かわない", "かあない", "かない", "かうない", "A verb ending in う takes わ before ない: かわない."],
      ["mc", "\"There's no time.\" (casual, to a friend) =", "じかんが ない。", "じかんが あらない。", "じかんが ありない。", "じかんが あるない。", "The short negative of ある is just ない."],
      ["mc", "You ask a stranger \"Are you going?\" Which is right?", "いきますか。", "いく？", "いかない？", "いくだ？", "With a stranger, stay polite: いきますか."],
      ["or", "I don't eat meat. (casual, to a friend)", "にく | を | たべない", "が", "The object particle を marks what you eat, in casual speech too."],
      ["or", "I am not going tomorrow. (polite, to a teacher)", "あした | いきません", "いかない", "To a teacher, use the polite ending ません, not the short form."],
      ["or", "Ken isn't a student. (casual, to a friend)", "けん | は | がくせい | じゃない", "だ", "A noun's short negative is じゃない."],
      ["fi", "あした なにを __？", "What are you doing tomorrow? (casual, to a friend)", "する", "しない|しる|すう", "Casual speech uses the dictionary form する."],
      ["fi", "きょうは __。", "I'm not going today. (casual, to a friend)", "いかない", "いきない|いくない|いかません", "いく is a u-verb: く changes to か before ない."],
      ["fi", "あの ひとは せんせい__。", "That person isn't a teacher. (casual, to a friend)", "じゃない", "くない|だない|じゃないだ", "A noun's short negative is じゃない; くない is only for い-adjectives."],
      ["ty", "Will you eat at home? (casual, to a friend)", "うちで たべる|うちで たべるの", "うち · たべる · rising voice, no か", "うちに", "Where you eat takes the place-of-action particle で."],
      ["ty", "I don't drink coffee. (polite, to a stranger)", "コーヒーを のみません|わたしは コーヒーを のみません|コーヒーは のみません|わたしは コーヒーは のみません", "コーヒー · のみます · negative", "のまない", "To a stranger, use the polite ending ません, not the short form のまない."],
      ["ty", "Are you going tomorrow? (casual, to a friend)", "あした いく|あした いくの", "あした · いく · rising voice", "いきます", "A casual question is the dictionary form with a rising voice."]
    ]
  },
  {
    id: "to-omou",
    title: "とおもいます・といっていました: opinions and reports",
    blurb: "Say what you think and pass on what someone said, with と おもいます and と いって いました.",
    deck: "Describing things",
    body: `
<p>English says "I think (that) it's good": the thinking comes first. Japanese puts the thought first and the verb of thinking last: <b>おいしいと おもいます</b>, "delicious <b>と</b> I think". The particle <b>と</b> marks what you think or say, like quotation marks.</p>
<h3>Short form + と おもいます</h3>
<p>The part before <b>と</b> is in the short form from the last lesson. Only <b>おもいます</b> at the very end is polite, so the whole sentence is still polite. Verbs and い-adjectives go straight before <b>と</b>.</p>
{{ex:この ほんは おもしろいと おもいます。|kono hon wa omoshiroi to omoimasu|I think this book is interesting.}}
{{ex:けんさんも くると おもいます。|ken-san mo kuru to omoimasu|I think Ken is coming too.}}
<h3>Nouns and な-adjectives need だ</h3>
<p>A noun or a な-adjective adds <b>だ</b> before <b>と</b>. Think of <b>だ</b> as the short form of <b>です</b>: <b>がくせいです</b> becomes <b>がくせいだ</b>. An い-adjective already ends in its own <b>い</b>, so it never takes <b>だ</b>.</p>
<div class="tbl"><table><tr><th>Statement</th><th>I think…</th></tr><tr><td class="k">たかいです</td><td class="k">たかいと おもいます</td></tr><tr><td class="k">しずかです</td><td class="k">しずかだと おもいます</td></tr><tr><td class="k">がくせいです</td><td class="k">がくせいだと おもいます</td></tr></table></div>
{{ex:あの ひとは せんせいだと おもいます。|ano hito wa sensei da to omoimasu|I think that person is a teacher.}}
{{ex:あしたは あめだと おもいます。|ashita wa ame da to omoimasu|I think it'll rain tomorrow.}}
<h3>"I don't think…"</h3>
<p>English puts "not" on "think": "I don't think it's expensive". Japanese puts it inside the quote and keeps <b>おもいます</b> as it is: "I think it is not expensive". Use the short negative you already know: <b>たかくない</b>, <b>こない</b>, <b>がくせいじゃない</b>.</p>
{{ex:あまり たかくないと おもいます。|amari takakunai to omoimasu|I don't think it's very expensive.}}
{{ex:たなかさんは こないと おもいます。|tanaka-san wa konai to omoimasu|I don't think Ms. Tanaka is coming.}}
<h3>Reporting: と いって いました</h3>
<p>To pass on what someone said, use the same <b>と</b> with <b>いって いました</b>, "was saying". This is the everyday way to say "Ken said that…". The quoted part is a short form, just as with <b>おもいます</b>. Japanese also keeps the tense of the original words: Ken said "I'm going", so the quote stays <b>いく</b>, where English shifts to "he was going".</p>
{{ex:けんさんは あした いくと いって いました。|ken-san wa ashita iku to itte imashita|Ken said he's going tomorrow.}}
<h3>Your own thoughts</h3>
<p><b>と おもいます</b> is for what you yourself think. It also softens a statement: <b>たかいです</b> sounds certain, while <b>たかいと おもいます</b> sounds softer and less pushy, which suits polite conversation. For what someone else thinks, report what they said with <b>と いって いました</b>.</p>
<div class="tip"><b>Most common mistake:</b> <b>だ</b> after an い-adjective. <b>おいしいだと おもいます</b> → <b>おいしいと おもいます</b>. And for "I don't think it's tasty", put the negative in the quote: <b>おいしいと おもいません</b> → <b>おいしくないと おもいます</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["How do you say \"I think it's expensive\"?", ["たかいと おもいます", "たかいだと おもいます", "おもいます たかいと", "たかいを おもいます"], 0, "An い-adjective goes straight before と, and おもいます comes last."],
      ["How do you say \"I don't think it's difficult\"?", ["むずかしいと おもいます", "むずかしくないと おもいます", "むずかしいじゃないと おもいます", "むずかしくないです おもいます"], 1, "The negative goes inside the quote: むずかしくないと おもいます."],
      ["Which word needs だ before と?", ["おいしい", "おおきい", "ゆうめい", "たかい"], 2, "ゆうめい is a な-adjective, so it takes だ: ゆうめいだと おもいます."]
    ],
    practice: [
      ["mc", "\"I think it's interesting.\" =", "おもしろいと おもいます。", "おもしろいだと おもいます。", "おもしろいを おもいます。", "おもいます おもしろいと。", "An い-adjective goes straight before と, with no だ."],
      ["mc", "\"I think Mr. Tanaka is a teacher.\" =", "たなかさんは せんせいだと おもいます。", "たなかさんは せんせいだを おもいます。", "たなかさんは せんせいなと おもいます。", "たなかさんは おもいます せんせいだと。", "A noun takes だ before と, and おもいます goes last."],
      ["mc", "\"I don't think it's expensive.\" =", "たかくないと おもいます。", "たかいないと おもいます。", "たかいじゃないと おもいます。", "たかくないだと おもいます。", "Put the short negative たかくない inside the quote."],
      ["mc", "\"Ken said he's coming.\" =", "けんさんは くると いって いました。", "けんさんは くると いて いました。", "けんさんは くるだと いって いました。", "けんさんは くるを いって いました。", "Reports use と いって いました; いって has a small っ, いて does not."],
      ["mc", "Which is a な-adjective, so it needs だ before と?", "しずか", "さむい", "あつい", "ちいさい", "しずか is a な-adjective: しずかだと おもいます."],
      ["or", "I think it is delicious.", "おいしい | と | おもいます", "を", "Quote what you think with the particle と."],
      ["or", "I think Ken will go to Kyoto. (start with Ken)", "けんさん | は | きょうと | に | いく | と | おもいます", "で", "Going to a place takes the destination particle に."],
      ["or", "I don't think it's difficult.", "むずかしくない | と | おもいます", "おもいません", "Put the negative inside the quote and keep the polite ending おもいます."],
      ["fi", "あしたは あめ__ おもいます。", "I think it'll rain tomorrow.", "だと", "を|なと|だを", "A noun takes だ before と: あめだと."],
      ["fi", "この へやは さむい__ おもいます。", "I think this room is cold.", "と", "だと|を|が", "An い-adjective goes straight before と, with no だ."],
      ["fi", "けんさんは こない__ いって いました。", "Ken said he isn't coming.", "と", "を|に|が", "What someone said is quoted with と."],
      ["ty", "I think it's delicious.", "おいしいと おもいます|わたしは おいしいと おもいます", "おいしい · おもいます", "おいしいを", "Quote what you think with the particle と."],
      ["ty", "I think Ken will come to the party.", "けんさんは パーティーに くると おもいます|けんさんは パーティーへ くると おもいます|けんさんが パーティーに くると おもいます|けんさんが パーティーへ くると おもいます", "けんさん · パーティー · くる · おもいます", "パーティーで", "Coming to a place takes the destination particle に or へ."],
      ["ty", "I don't think it's expensive.", "たかくないと おもいます|わたしは たかくないと おもいます", "たかい · おもいます · put \"not\" in the quote", "おもいません", "Put the negative inside the quote and keep the polite ending おもいます."]
    ]
  },
  {
    id: "noun-mod",
    title: "Describing people and things with verbs",
    blurb: "Describe a person or thing with a whole clause, like \"the book I bought yesterday\", using past short forms.",
    deck: "Family and people",
    body: `
<p>English describes a noun with a clause after it: "the book <i>that I bought yesterday</i>". Japanese puts the whole describing clause <b>before</b> the noun, the way an adjective goes before a noun: <b>きのう かった ほん</b>, "yesterday bought book".</p>
<h3>A short form right before the noun</h3>
<p>Put the verb in its short form directly in front of the noun. There is no word for "that", "who" or "which", and the noun always comes last. The clause can be as long as you like: everything in front of the noun describes it, so <b>ともだちと きのう みた えいが</b> is "the movie I saw with a friend yesterday".</p>
{{ex:よく いく レストランは しぶやに あります。|yoku iku resutoran wa shibuya ni arimasu|The restaurant I often go to is in Shibuya.}}
{{ex:これは きのう かった ほんです。|kore wa kinō katta hon desu|This is the book I bought yesterday.}}
<h3>Past short forms</h3>
<p>For "that I bought" or "that I saw", you need the past short form. It is easy if you know the て form: change <b>て</b> to <b>た</b>, and <b>で</b> to <b>だ</b>. So ru-verbs swap <b>る</b> for <b>た</b>, and u-verbs follow their て form. <b>する</b> becomes <b>した</b> and <b>くる</b> becomes <b>きた</b>.</p>
<div class="tbl"><table><tr><th>て form</th><th>Past short</th><th>English</th></tr><tr><td class="k">たべて</td><td class="k">たべた</td><td>ate</td></tr><tr><td class="k">みて</td><td class="k">みた</td><td>saw</td></tr><tr><td class="k">かって</td><td class="k">かった</td><td>bought</td></tr><tr><td class="k">いって</td><td class="k">いった</td><td>went</td></tr><tr><td class="k">のんで</td><td class="k">のんだ</td><td>drank</td></tr><tr><td class="k">して</td><td class="k">した</td><td>did</td></tr></table></div>
<p>The past negative changes <b>ない</b> to <b>なかった</b>: <b>たべなかった</b>, "didn't eat".</p>
{{ex:きのう みた えいがは おもしろかったです。|kinō mita eiga wa omoshirokatta desu|The movie I saw yesterday was interesting.}}
<h3>Who did it: が, not は</h3>
<p>Inside the clause, the person who does the action takes <b>が</b>, never <b>は</b>. <b>は</b> belongs to the main sentence, outside the clause.</p>
{{ex:ははが つくった ケーキです。|haha ga tsukutta kēki desu|It's a cake my mother made.}}
<h3>Describing people</h3>
<p>The same pattern describes people. A clause with <b>ている</b> tells what someone is doing or wearing right now, which is how Japanese points someone out: "the glasses-wearing person".</p>
{{ex:めがねを かけて いる ひとが たなかさんです。|megane o kakete iru hito ga tanaka-san desu|The person wearing glasses is Mr. Tanaka.}}
{{ex:あそこで コーヒーを のんで いる ひとは あにです。|asoko de kōhī o nonde iru hito wa ani desu|The person drinking coffee over there is my older brother.}}
<h3>The polite ending stays at the end</h3>
<p>The clause inside is short, but the sentence still ends politely with <b>です</b> or <b>ます</b>. Only the verb right before the noun is short.</p>
<div class="tip"><b>Most common mistake:</b> English order, with the clause after the noun. <b>ほん きのう かった</b> → <b>きのう かった ほん</b>. And <b>は</b> inside the clause: <b>ははは つくった ケーキ</b> → <b>ははが つくった ケーキ</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["How do you say \"the book I bought yesterday\"?", ["ほん きのう かった", "きのう かった ほん", "きのう かう ほん", "ほんの きのう かった"], 1, "The describing clause goes before the noun, and \"bought\" is the past short form かった."],
      ["What is the past short form of のみます (drink)?", ["のみた", "のむた", "のんだ", "のみました"], 2, "The て form is のんで, so the past short form is のんだ."],
      ["\"the cake my mother made\" =", ["ははが つくった ケーキ", "ははは つくった ケーキ", "ケーキ ははが つくった", "ははが つくりました ケーキ"], 0, "Inside the clause the maker takes が, and the short form つくった goes right before the noun."]
    ],
    practice: [
      ["mc", "Past short form of かいます (buy) =", "かった", "かいた", "かうた", "かた", "かう has the て form かって, so the past short form is かった, with a small っ."],
      ["mc", "Past short form of みます (see) =", "みた", "みった", "みんだ", "みました", "みる is a ru-verb: swap る for た."],
      ["mc", "Past short form of いきます (go) =", "いった", "いた", "いきた", "いんだ", "いく has the て form いって, so いった. いた, with no small っ, is a different verb."],
      ["mc", "\"the movie I saw yesterday\" =", "きのう みた えいが", "えいが きのう みた", "きのう みたの えいが", "きのう みました えいが", "The describing clause goes before the noun, in the short form."],
      ["mc", "\"the bag my father bought\" =", "ちちが かった かばん", "ちちは かった かばん", "ちちを かった かばん", "かばん ちちが かった", "Inside a describing clause, the buyer takes が, not は."],
      ["or", "I read the book I bought yesterday.", "きのう | かった | ほん | を | よみました", "が", "The whole described noun takes the object particle を."],
      ["or", "This is a cake my mother made.", "これ | は | はは | が | つくった | ケーキです", "を", "Inside the clause, my mother takes the subject particle が."],
      ["or", "The movie I saw yesterday was interesting.", "きのう | みた | えいが | は | おもしろかったです", "おもしろいでした", "Past of an い-adjective: the polite ending is かったです."],
      ["fi", "きのう __ ほんは おもしろいです。", "The book I read yesterday is interesting.", "よんだ", "よみた|よむた|よみました", "よむ has the て form よんで, so the past short form is よんだ."],
      ["fi", "これは ちち__ かった くるまです。", "This is the car my father bought.", "が|の", "は|を|で", "Inside the clause, the buyer takes が (の is also fine), never は."],
      ["fi", "あそこで ほんを よんで いる ひと__ あねです。", "The person reading a book over there is my older sister.", "は|が", "を|に|で", "The whole phrase \"the person reading a book\" is the topic or subject: は or が."],
      ["ty", "I read the book I bought yesterday.", "きのう かった ほんを よみました|わたしは きのう かった ほんを よみました", "きのう · かう · ほん · よみます", "ほんが", "The whole described noun takes the object particle を."],
      ["ty", "This is the cake my mother made.", "これは ははが つくった ケーキです|これは ははの つくった ケーキです", "これ · はは · つくる · ケーキ", "ははは", "Inside the clause, the maker takes the subject particle が, not は."],
      ["ty", "The movie I saw yesterday was interesting.", "きのう みた えいがは おもしろかったです", "きのう · みる · えいが · おもしろい · past", "おもしろいでした", "Past of an い-adjective: the polite ending is かったです."]
    ]
  },
  {
    id: "compare",
    title: "Comparing: より・いちばん",
    blurb: "Compare two things with より, ask \"which one?\" with どちら, and say \"the most\" with いちばん.",
    deck: "Describing things",
    body: `
<p>English changes the adjective to compare: "big, bigger, biggest", or adds "more". Japanese adjectives never change for comparing. Instead, small words around them do the work. This lesson has three patterns: comparing two things, asking which of two, and naming the one that is the most.</p>
<h3>A は B より ～です</h3>
<p>English says "A is bigger than B". Japanese says "A <b>は</b>, B <b>より</b>, big": <b>より</b> is the comparison particle, "than", and it goes right <b>after</b> B, the thing you compare against. The adjective stays exactly as it is.</p>
{{ex:とうきょうは おおさかより おおきいです。|tōkyō wa ōsaka yori ōkii desu|Tokyo is bigger than Osaka.}}
{{ex:でんしゃは バスより はやいです。|densha wa basu yori hayai desu|The train is faster than the bus.}}
<p>You do not need a word for "more". You may hear <b>もっと</b>, but it means "even more" or "more" with no "than" (<b>もっと ゆっくり</b>, "more slowly"), so leave it out of A <b>は</b> B <b>より</b> sentences for now.</p>
<h3>Which one? どちらが</h3>
<p>To ask "which is ~, A or B?", list the two with <b>と</b>…<b>と</b> and ask with <b>どちらが</b>. A question word always takes <b>が</b>, never <b>は</b>. To answer, use <b>の ほうが</b>, "the side of…".</p>
{{ex:すしと ラーメンと どちらが すきですか。|sushi to rāmen to dochira ga suki desu ka|Which do you like better, sushi or ramen?}}
{{ex:ラーメンの ほうが すきです。|rāmen no hō ga suki desu|I like ramen better.}}
<p><b>どちら</b> is only for two things. For three or more, use <b>どれ</b>, <b>なに</b>, <b>どこ</b> or <b>だれ</b> with <b>いちばん</b>. In the answer, the winner takes <b>が</b>, because it answers a question word.</p>
<h3>The most: いちばん</h3>
<p><b>いちばん</b> means "number one", and it turns any adjective into "the most…" or "the -est". Name the group first with <b>の なかで</b> ("among"), then the winner with <b>が</b>. A place works as the group too: <b>にほんで</b>, "in Japan".</p>
{{ex:くだものの なかで りんごが いちばん すきです。|kudamono no naka de ringo ga ichiban suki desu|Of all fruit, I like apples best.}}
{{ex:にほんで いちばん たかい やまは ふじさんです。|nihon de ichiban takai yama wa fujisan desu|The highest mountain in Japan is Mt. Fuji.}}
{{ex:この なかで どれが いちばん いいですか。|kono naka de dore ga ichiban ii desu ka|Which of these is the best?}}
<h3>Tenses still work</h3>
<p>The adjective at the end keeps its normal polite endings: <b>きのうは きょうより さむかったです</b>, "yesterday was colder than today".</p>
<div class="tip"><b>Most common mistake:</b> putting <b>より</b> after the wrong noun, as if it meant "more than". For "Tokyo is bigger than Osaka", <b>とうきょうより おおさかは おおきいです</b> (that says Osaka is bigger!) → <b>とうきょうは おおさかより おおきいです</b>. <b>より</b> goes after the thing you compare against. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["\"The train is faster than the bus.\" =", ["バスは でんしゃより はやいです", "でんしゃは バスより はやいです", "でんしゃより バスは はやいです", "でんしゃは バスから はやいです"], 1, "より goes after the slower one, the bus: でんしゃは バスより はやいです."],
      ["Which question word asks \"which of the two\"?", ["なに", "だれ", "どちら", "どこ"], 2, "どちら is \"which\" for a choice between two things."],
      ["Someone asks: すしと ラーメンと どちらが すきですか。 How do you say \"Sushi\"?", ["すしの ほうが すきです", "すしより すきです", "すしは もっと すきです", "すしを すきです"], 0, "Answer with の ほうが: すしの ほうが すきです."]
    ],
    practice: [
      ["mc", "\"than\" in a comparison =", "より", "から", "まで", "ほう", "より is the word for \"than\"."],
      ["mc", "\"Osaka is smaller than Tokyo.\" =", "おおさかは とうきょうより ちいさいです。", "とうきょうは おおさかより ちいさいです。", "おおさかより とうきょうは ちいさいです。", "おおさかは とうきょうから ちいさいです。", "より goes after the bigger one here, Tokyo: おおさかは とうきょうより ちいさいです."],
      ["mc", "\"Which is cheaper, the bus or the train?\" =", "バスと でんしゃと どちらが やすいですか。", "バスと でんしゃと どちらは やすいですか。", "バスと でんしゃと なにが やすいですか。", "バスと でんしゃと どちらを やすいですか。", "For two things, ask with どちら, and a question word takes が."],
      ["mc", "\"Of all foods, I like sushi best.\" =", "たべものの なかで すしが いちばん すきです。", "たべものの なかで すしを いちばん すきです。", "たべものより すしが いちばん すきです。", "たべものの なかに すしが いちばん すきです。", "The group takes の なかで, and すき takes が."],
      ["mc", "\"Kyoto was quieter than Tokyo.\" =", "きょうとは とうきょうより しずかでした。", "きょうとは とうきょうより しずかかったです。", "きょうとは とうきょうより しずかいでした。", "とうきょうは きょうとより しずかでした。", "しずか is a な-adjective, so its past is でした."],
      ["or", "Tokyo is bigger than Osaka. (start with Tokyo)", "とうきょう | は | おおさか | より | おおきいです", "から", "より is the comparison particle: \"than\"."],
      ["or", "I like ramen better.", "ラーメン | の | ほう | が | すきです", "を", "すき takes the subject particle が: ラーメンの ほうが すきです."],
      ["or", "Which is better?", "どちら | が | いいですか", "は", "A question word takes the subject particle が: どちらが."],
      ["fi", "とうきょうは おおさか__ おおきいです。", "Tokyo is bigger than Osaka.", "より", "から|まで|ほう", "より means \"than\" and goes right after the thing you compare against."],
      ["fi", "コーヒーと おちゃと どちら__ すきですか。", "Which do you like better, coffee or tea?", "が", "は|を|に", "A question word takes が: どちらが."],
      ["fi", "きのうは きょうより __。", "Yesterday was colder than today.", "さむかったです", "さむいでした|さむくでした|さむいかったです", "Past of an い-adjective: さむかったです."],
      ["ty", "Tokyo is bigger than Osaka.", "とうきょうは おおさかより おおきいです|おおさかより とうきょうの ほうが おおきいです|とうきょうの ほうが おおさかより おおきいです|おおさかより とうきょうは おおきいです", "とうきょう · おおさか · おおきい", "おおさかから", "より is the comparison particle: \"than\"."],
      ["ty", "I like tea better.", "おちゃの ほうが すきです|わたしは おちゃの ほうが すきです", "おちゃ · ほう · すき", "ほうを", "すき takes the subject particle が: ほうが すきです."],
      ["ty", "Of all fruit, I like apples best.", "くだものの なかで りんごが いちばん すきです|くだものの なかで いちばん りんごが すきです|くだものでは りんごが いちばん すきです|わたしは くだものの なかで りんごが いちばん すきです", "くだもの · なか · りんご · いちばん · すき", "りんごを", "すき takes the subject particle が, also with いちばん."]
    ]
  },
  {
    id: "tsumori",
    title: "つもり・なる: plans and changes",
    blurb: "Talk about your plans with つもりです, and about changes (get cold, become a teacher) with なります.",
    deck: "Likes, plans and free time",
    body: `
<p>This lesson has two useful patterns: one for what you plan to do, and one for how things change. Both use forms you already know, the short forms from the last few lessons and the adjective endings, so there is very little new to build.</p>
<h3>Plans: dictionary form + つもりです</h3>
<p>English says "I'm planning to go" or "I intend to go". Japanese says <b>いく つもりです</b>: the dictionary form, then <b>つもり</b> ("intention"), then <b>です</b>. The verb before <b>つもり</b> is always short, and the polite ending comes only at the very end.</p>
{{ex:なつやすみに ほっかいどうへ いく つもりです。|natsuyasumi ni hokkaidō e iku tsumori desu|I'm planning to go to Hokkaido for summer vacation.}}
{{ex:らいねん にほんごを べんきょうする つもりです。|rainen nihongo o benkyō suru tsumori desu|I intend to study Japanese next year.}}
<h3>Not planning to: ない つもりです</h3>
<p>For a plan not to do something, put the short negative before <b>つもり</b>: <b>かわない つもりです</b>, "I don't intend to buy it". <b>つもり</b> itself stays the same.</p>
{{ex:ことしは くるまを かわない つもりです。|kotoshi wa kuruma o kawanai tsumori desu|I'm not planning to buy a car this year.}}
<p><b>つもり</b> is a firm plan you have already decided on. For something you only hope to do, the next lesson gives you <b>たい</b>.</p>
<p>To ask about someone else's plans, the plain ます form is the safe choice: <b>しゅうまつは なにを しますか</b>. A question with <b>つもりですか</b> can sound as if you are checking up on the person.</p>
<h3>Changes: なります</h3>
<p>English uses "get" or "become": "it got cold", "she became a doctor". Japanese uses <b>なります</b> ("become") and changes the word in front of it.</p>
<div class="tbl"><table><tr><th>Word</th><th>+ なります</th><th>English</th></tr><tr><td class="k">さむい</td><td class="k">さむく なります</td><td>get cold</td></tr><tr><td class="k">たかい</td><td class="k">たかく なります</td><td>get expensive</td></tr><tr><td class="k">いい</td><td class="k">よく なります</td><td>get better</td></tr><tr><td class="k">げんき</td><td class="k">げんきに なります</td><td>get well</td></tr><tr><td class="k">いしゃ</td><td class="k">いしゃに なります</td><td>become a doctor</td></tr></table></div>
<p>An い-adjective changes its last <b>い</b> to <b>く</b>. A noun or な-adjective adds <b>に</b>. <b>いい</b> is irregular, as always: <b>よく</b>.</p>
{{ex:これから さむく なります。|kore kara samuku narimasu|It's going to get cold from now on.}}
{{ex:エミリーさんは にほんごが じょうずに なりました。|emirī-san wa nihongo ga jōzu ni narimashita|Emily's Japanese has gotten really good.}}
{{ex:いもうとは いしゃに なりました。|imōto wa isha ni narimashita|My younger sister became a doctor.}}
{{ex:かぜは よく なりましたか。|kaze wa yoku narimashita ka|Has your cold gotten better?}}
<h3>Tense lives in なります</h3>
<p><b>なります</b> takes the usual polite endings: <b>なりました</b> for "got" or "became", <b>なりません</b> for "doesn't get". The word in front never changes for tense, so "it will get cold" and "it got cold" differ only in the ending of <b>なります</b>.</p>
<div class="tip"><b>Most common mistake:</b> <b>つもり</b> with a ます form. <b>いきます つもりです</b> → <b>いく つもりです</b>. And <b>なります</b> with nothing in between: <b>さむい なりました</b> → <b>さむく なりました</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["\"I'm planning to buy a camera.\" =", ["カメラを かう つもりです", "カメラを かいます つもりです", "カメラを かうの つもりです", "カメラを かう つもりします"], 0, "つもり follows the dictionary form: かう つもりです."],
      ["\"It got cold.\" =", ["さむい なりました", "さむく なりました", "さむいに なりました", "さむくに なりました"], 1, "An い-adjective changes い to く before なります."],
      ["\"I'm not planning to go.\" =", ["いきません つもりです", "いく つもりません", "いかない つもりです", "いかない つもりします"], 2, "Put the short negative before つもり: いかない つもりです."]
    ],
    practice: [
      ["mc", "\"I'm planning to go to Kyoto.\" =", "きょうとに いく つもりです。", "きょうとに いきます つもりです。", "きょうとに いくの つもりです。", "きょうとで いく つもりです。", "つもり follows the dictionary form: いく つもりです."],
      ["mc", "\"I'm not planning to buy it.\" =", "かわない つもりです。", "かいません つもりです。", "かうない つもりです。", "かあない つもりです。", "A plan not to: the short negative かわない + つもりです."],
      ["mc", "\"It got expensive.\" =", "たかく なりました。", "たかい なりました。", "たかいに なりました。", "たかくて なりました。", "An い-adjective changes い to く before なります."],
      ["mc", "\"The room got clean.\" =", "へやが きれいに なりました。", "へやが きれく なりました。", "へやが きれいく なりました。", "へやが きれい なりました。", "きれい is a な-adjective, so it takes に: きれいに なります."],
      ["mc", "\"It got better.\" =", "よく なりました。", "いく なりました。", "いいに なりました。", "よい なりました。", "いい is irregular: よく なります."],
      ["or", "I'm planning to go to Hokkaido.", "ほっかいどう | に | いく | つもりです", "で", "Going to a place takes the destination particle に."],
      ["or", "I'm planning to watch a movie.", "えいが | を | みる | つもりです", "が", "みる takes the object particle を: えいがを."],
      ["or", "It's gotten cold, hasn't it?", "さむく | なりましたね", "さむい", "An い-adjective changes い to く before なります."],
      ["fi", "らいねん にほんへ __ つもりです。", "I'm planning to go to Japan next year.", "いく", "いきます|いって|いき", "つもり follows the dictionary form いく."],
      ["fi", "へやが しずか__ なりました。", "The room got quiet.", "に", "く|な|で", "しずか is a な-adjective, so it takes に before なります."],
      ["fi", "エミリーさんは にほんごが __ なりました。", "Emily's Japanese got good.", "じょうずに", "じょうずく|じょうず|じょうずな", "じょうず is a な-adjective: じょうずに なります."],
      ["ty", "I'm planning to go to Hokkaido.", "ほっかいどうに いく つもりです|ほっかいどうへ いく つもりです|わたしは ほっかいどうに いく つもりです|わたしは ほっかいどうへ いく つもりです", "ほっかいどう · いく · つもり", "ほっかいどうで", "Going to a place takes the destination particle に or へ."],
      ["ty", "I'm planning to read a book.", "ほんを よむ つもりです|わたしは ほんを よむ つもりです", "ほん · よむ · つもり", "ほんが", "よむ takes the object particle を: ほんを."],
      ["ty", "It got cold.", "さむく なりました|さむく なりましたね", "さむい · なります · past", "さむい", "An い-adjective changes い to く before なります."]
    ]
  },
  {
    id: "tai",
    title: "たい: want to",
    blurb: "Say what you want to do (and don't), what you want to have, and invite people without asking what they want.",
    deck: "Places and getting around",
    body: `
<p>English "want to" is a separate verb in front of the action. Japanese adds <b>たい</b> to the action verb itself: <b>いきます</b> becomes <b>いきたいです</b>, "I want to go". The verb and <b>たい</b> make one word, and the sentence still ends politely with <b>です</b>.</p>
<h3>Making the たい form</h3>
<p>Take the ます form, drop <b>ます</b>, and add <b>たいです</b>. It works for every verb, the irregular ones too. Everything else in the sentence stays the same: <b>きょうとに いきます</b> becomes <b>きょうとに いきたいです</b>, with the same particle <b>に</b>.</p>
<div class="tbl"><table><tr><th>ます form</th><th>Want to</th></tr><tr><td class="k">いきます</td><td class="k">いきたいです</td></tr><tr><td class="k">たべます</td><td class="k">たべたいです</td></tr><tr><td class="k">みます</td><td class="k">みたいです</td></tr><tr><td class="k">します</td><td class="k">したいです</td></tr><tr><td class="k">きます</td><td class="k">きたいです</td></tr></table></div>
{{ex:きょうとに いきたいです。|kyōto ni ikitai desu|I want to go to Kyoto.}}
{{ex:ふじさんを みたいです。|fujisan o mitai desu|I want to see Mt. Fuji.}}
<h3>たい works like an い-adjective</h3>
<p><b>たい</b> ends in <b>い</b>, and it changes exactly like <b>たかい</b>: <b>たくないです</b> for "don't want to", <b>たかったです</b> for "wanted to", and <b>たくなかったです</b> for "didn't want to".</p>
{{ex:きょうは はたらきたくないです。|kyō wa hatarakitakunai desu|I don't want to work today.}}
{{ex:ずっと にほんに きたかったです。|zutto nihon ni kitakatta desu|I always wanted to come to Japan.}}
<h3>を or が</h3>
<p>With <b>たい</b>, the thing you want to eat, see or buy can take <b>を</b> or <b>が</b>. Both are natural. A place, a person or a time keeps its usual particle, though: <b>に</b> stays <b>に</b>, and <b>で</b> stays <b>で</b>.</p>
{{ex:ラーメンが たべたいです。|rāmen ga tabetai desu|I want to eat ramen.}}
<h3>Wanting a thing: ほしいです</h3>
<p>For a thing rather than an action, use <b>ほしいです</b>, with <b>が</b> on the thing. <b>ほしい</b> is an い-adjective too: <b>ほしくないです</b>, <b>ほしかったです</b>. Do not join <b>ほしい</b> to a verb: "I want to buy" is <b>かいたいです</b>.</p>
{{ex:あたらしい スマホが ほしいです。|atarashii sumaho ga hoshii desu|I want a new smartphone.}}
<h3>Only for yourself</h3>
<p>Japanese does not say flatly what someone else wants, because you cannot see inside their head. In English "Ken wants to go" is normal; in Japanese it sounds as if you were reading Ken's mind. To pass on another person's wish, quote it with <b>と いって いました</b>.</p>
{{ex:けんさんは きょうとに いきたいと いって いました。|ken-san wa kyōto ni ikitai to itte imashita|Ken said he wants to go to Kyoto.}}
<p>Asking a person directly with <b>たいですか</b> is fine with friends, but it can sound blunt with others. To invite someone, use the ませんか form instead. For your own needs, though, <b>たいです</b> works well: at a station, <b>すみません、きっぷを かいたいです</b> tells the staff exactly what you need.</p>
{{ex:いっしょに いきませんか。|issho ni ikimasen ka|Would you like to go together?}}
<div class="tip"><b>Most common mistake:</b> <b>たいです</b> about other people. <b>けんさんは いきたいです</b> → <b>けんさんは いきたいと いって いました</b>. And <b>ほしい</b> with a verb: <b>かう ほしいです</b> → <b>かいたいです</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["\"I want to eat sushi.\" =", ["すしを たべほしいです", "すしを たべるたいです", "すしを たべますたいです", "すしを たべたいです"], 3, "Drop ます and add たいです: たべたいです."],
      ["\"I didn't want to go.\" =", ["いきたいでした", "いきたくなかったです", "いきたくないでした", "いきませんたかったです"], 1, "たい changes like an い-adjective: たくなかったです."],
      ["\"I want a new bag.\" =", ["あたらしい かばんを たいです", "あたらしい かばんが ほしいたいです", "あたらしい かばんが ほしいです", "あたらしい かばんが かいほしいです"], 2, "For a thing, use ほしいです with が."]
    ],
    practice: [
      ["mc", "\"I want to see Mt. Fuji.\" =", "ふじさんを みたいです。", "ふじさんを みるたいです。", "ふじさんを みますたいです。", "ふじさんを みほしいです。", "Drop ます and add たいです: みたいです."],
      ["mc", "\"I don't want to go.\" =", "いきたくないです。", "いきたいじゃないです。", "いきたいないです。", "いきたいません。", "たい changes like an い-adjective: たくないです."],
      ["mc", "\"I wanted to eat ramen.\" =", "ラーメンが たべたかったです。", "ラーメンが たべたいでした。", "ラーメンが たべたいかったです。", "ラーメンが たべましたいです。", "Past of たい: たかったです, never たいでした."],
      ["mc", "\"I want a car.\" =", "くるまが ほしいです。", "くるまが たいです。", "くるまが ほしいたいです。", "くるまが かいほしいです。", "For a thing, use ほしいです with が."],
      ["mc", "You want to invite Ms. Sato to lunch. You say:", "いっしょに ひるごはんを たべませんか。", "さとうさんは ひるごはんを たべたいです。", "あなたは ひるごはんを たべたいです。", "いっしょに ひるごはんを たべましたか。", "Invite with the ませんか form; don't state another person's wish."],
      ["or", "I want to go to Kyoto.", "きょうと | に | いきたいです", "で", "Going to a place takes the destination particle に."],
      ["or", "I don't want to work tomorrow.", "あした | は | はたらきたくないです", "はたらきたいじゃないです", "たい changes like an い-adjective: the polite ending is たくないです."],
      ["or", "I want to eat sushi.", "すし | を | たべたいです", "に", "What you eat takes the object particle を (が is also fine with たい)."],
      ["fi", "きょうとに __。", "I want to go to Kyoto.", "いきたいです", "いくたいです|いきますたい|いきほしいです", "Drop ます and add たいです: いきたいです."],
      ["fi", "あたらしい かさ__ ほしいです。", "I want a new umbrella.", "が", "で|に|へ", "The thing you want takes が before ほしいです."],
      ["fi", "きのうは はたらき__。", "I didn't want to work yesterday.", "たくなかったです", "たくないでした|たいじゃなかったです|たかったです", "Past negative of たい: たくなかったです."],
      ["ty", "I want to go to Kyoto.", "きょうとに いきたいです|きょうとへ いきたいです|わたしは きょうとに いきたいです|わたしは きょうとへ いきたいです", "きょうと · いきます · want to", "きょうとで", "Going to a place takes the destination particle に or へ."],
      ["ty", "I want to eat ramen.", "ラーメンが たべたいです|ラーメンを たべたいです|わたしは ラーメンが たべたいです|わたしは ラーメンを たべたいです", "ラーメン · たべます · want to", "ラーメンに", "With たい, the food takes the object particle を or the subject particle が."],
      ["ty", "I didn't want to go to school.", "がっこうに いきたくなかったです|がっこうへ いきたくなかったです|わたしは がっこうに いきたくなかったです|わたしは がっこうへ いきたくなかったです", "がっこう · いきます · want to · past negative", "いきたくないでした", "Past negative of たい: the polite ending is たくなかったです."]
    ]
  },
  {
    id: "koto-aru",
    title: "たことがあります: experiences",
    blurb: "Say what you have and haven't done before, and ask \"Have you ever…?\"",
    deck: "Places and getting around",
    body: `
<p>English uses "have" with forms like "been" and "eaten" for experiences: "I have been to Kyoto", "I've eaten natto". Japanese says, in effect, "there is the experience of having gone": <b>いった ことが あります</b>.</p>
<h3>Past short form + ことが あります</h3>
<p>Take the past short form you learned for describing nouns (<b>いった</b>, <b>たべた</b>, <b>みた</b>), add <b>こと</b> ("thing, experience") with the subject particle <b>が</b>, and finish with <b>あります</b>, "there is". The polite ending is on <b>あります</b>, at the very end. <b>こと</b> turns the whole phrase into a noun, "the experience of having gone", which is why it can take <b>が</b> like any other noun.</p>
{{ex:きょうとに いった ことが あります。|kyōto ni itta koto ga arimasu|I've been to Kyoto.}}
{{ex:てんぷらを たべた ことが あります。|tenpura o tabeta koto ga arimasu|I've had tempura.}}
<h3>Never: ありません</h3>
<p>To say you have never done something, make <b>あります</b> negative: <b>ありません</b>. The verb before <b>こと</b> stays in the past; only the end changes. In negative sentences you will often hear <b>ことは</b> instead of <b>ことが</b>. Both are fine.</p>
{{ex:ふじさんに のぼった ことが ありません。|fujisan ni nobotta koto ga arimasen|I've never climbed Mt. Fuji.}}
{{ex:すしを つくった ことは ありません。|sushi o tsukutta koto wa arimasen|I've never made sushi.}}
<h3>Asking: ～た ことが ありますか</h3>
<p>Add <b>か</b> to ask "Have you ever…?" The answer does not need to repeat the whole verb: <b>はい、あります</b> or <b>いいえ、ありません</b>.</p>
{{ex:にほんに いった ことが ありますか。いいえ、ありません。|nihon ni itta koto ga arimasu ka iie arimasen|Have you ever been to Japan? No, I haven't.}}
<h3>Not the dictionary form</h3>
<p>English speakers often reach for the dictionary form. With it, the meaning changes to "there are times when…": <b>いく ことが あります</b> means "I sometimes go", not "I have been".</p>
{{ex:ときどき バスで いく ことが あります。|tokidoki basu de iku koto ga arimasu|I sometimes go by bus.}}
<h3>Ever, not at a set time</h3>
<p>This pattern is about "ever", at any time up to now, so it does not go with a particular time like "last year" or "on Monday". For something you did at a set time, use the plain polite past.</p>
{{ex:きょねん きょうとに いきました。|kyonen kyōto ni ikimashita|I went to Kyoto last year.}}
<p>A good trip conversation uses both: first the experience question, then the details in the past. <b>ほっかいどうに いった ことが ありますか</b>. <b>はい、きょねん いきました</b>: "Have you ever been to Hokkaido? Yes, I went last year."</p>
<div class="tip"><b>Most common mistake:</b> the dictionary form before <b>こと</b>. For "I've been to Okinawa", <b>おきなわに いく ことが あります</b> (that means "I sometimes go") → <b>おきなわに いった ことが あります</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["\"I've eaten natto.\" =", ["なっとうを たべる ことが あります", "なっとうを たべた ことが あります", "なっとうを たべました ことが あります", "なっとうを たべた ことを あります"], 1, "Experience: past short form + ことが あります."],
      ["What does いく ことが あります mean?", ["I have been there", "I want to go", "I sometimes go", "I will go"], 2, "With the dictionary form, the pattern means \"there are times when…\"."],
      ["\"I've never been to Okinawa.\" =", ["おきなわに いった ことが ありません", "おきなわに いかない ことが あります", "おきなわに いった ことが ないです あります", "おきなわに いきました ことが ありません"], 0, "Keep いった, and make the end negative: ありません."]
    ],
    practice: [
      ["mc", "\"I've seen sumo.\" =", "すもうを みた ことが あります。", "すもうを みる ことが あります。", "すもうを みました ことが あります。", "すもうを みた ことに あります。", "Experience: past short form + ことが あります."],
      ["mc", "\"I've never eaten natto.\" =", "なっとうを たべた ことが ありません。", "なっとうを たべない ことが あります。", "なっとうを たべた ことが あります。", "なっとうを たべませんでした ことが ありません。", "Keep the past short form たべた and make あります negative."],
      ["mc", "\"Have you ever been to Hokkaido?\" =", "ほっかいどうに いった ことが ありますか。", "ほっかいどうに いく ことが ありますか。", "ほっかいどうで いった ことが ありますか。", "ほっかいどうに いきましたか ことが あります。", "Past short form + ことが ありますか; going to a place takes に."],
      ["mc", "Past short form of のぼります (climb) =", "のぼった", "のぼりた", "のぼんだ", "のぼるた", "The て form is のぼって, so the past short form is のぼった."],
      ["mc", "\"I went to Kyoto last year.\" =", "きょねん きょうとに いきました。", "きょねん きょうとに いきませんでした。", "きょねん きょうとで いきました。", "きょねん きょうとに いきます。", "A set time in the past takes the plain polite past いきました."],
      ["or", "I've been to Kyoto.", "きょうと | に | いった | ことが | あります", "で", "Going to a place takes the destination particle に."],
      ["or", "I've eaten tempura.", "てんぷら | を | たべた | ことが | あります", "が", "たべる takes the object particle を: てんぷらを."],
      ["or", "I've never been to Okinawa.", "おきなわ | に | いった | ことが | ありません", "いく", "Keep the past short form いった before こと."],
      ["fi", "すしを __ ことが あります。", "I've made sushi.", "つくった", "つくる|つくりました|つくた", "Experience needs the past short form つくった, with a small っ."],
      ["fi", "にほんの えいがを みた こと__ ありますか。", "Have you ever seen a Japanese movie?", "が|は", "を|で|に", "The pattern is ことが あります (ことは is also fine)."],
      ["fi", "ふじさんに のぼった ことが __。", "I've never climbed Mt. Fuji.", "ありません|ないです", "ありました|あらないです|ないでした", "\"Never\": make あります negative, ありません."],
      ["ty", "I've been to Kyoto.", "きょうとに いった ことが あります|きょうとへ いった ことが あります|わたしは きょうとに いった ことが あります|わたしは きょうとへ いった ことが あります", "きょうと · いく · こと · あります", "きょうとで", "Going to a place takes the destination particle に or へ."],
      ["ty", "I've eaten ramen.", "ラーメンを たべた ことが あります|わたしは ラーメンを たべた ことが あります", "ラーメン · たべる · こと · あります", "ラーメンが", "たべる takes the object particle を: ラーメンを."],
      ["ty", "I've never seen sumo.", "すもうを みた ことが ありません|すもうを みた ことは ありません|すもうを みた ことが ないです|すもうは みた ことが ありません|わたしは すもうを みた ことが ありません|わたしは すもうを みた ことは ありません", "すもう · みる · こと · ありません", "みる", "Keep the past short form みた before こと."]
    ]
  },
  {
    id: "n-desu",
    title: "んです・ので: explaining",
    blurb: "Explain a situation with んです, ask \"What's wrong?\", and give a reason politely with ので.",
    deck: "Polite requests and help",
    body: `
<p>English explains with tone of voice or with phrases like "you see" and "the thing is". Japanese has a small ending for this: <b>んです</b>.</p>
<h3>Explaining with んです</h3>
<p><b>いたいです</b> simply states a fact: "it hurts". <b>いたいんです</b> explains a situation: "the thing is, it hurts". Use it when you give a reason, excuse yourself or describe a problem, for example at a pharmacy or a front desk.</p>
{{ex:あたまが いたいんです。|atama ga itai n desu|I have a headache, you see.}}
{{ex:さいふが ないんです。|saifu ga nai n desu|The thing is, I don't have my wallet.}}
<p>With <b>か</b>, it asks for an explanation of something you have noticed. <b>どうしたんですか</b> is what people ask when you look unwell or upset.</p>
{{ex:どうしたんですか。|dō shita n desu ka|What's wrong?}}
<h3>How to attach it</h3>
<p>Verbs and い-adjectives go before <b>んです</b> in the short form, present or past. Nouns and な-adjectives add <b>な</b>.</p>
<div class="tbl"><table><tr><th>Word</th><th>+ んです</th></tr><tr><td class="k">いく</td><td class="k">いくんです</td></tr><tr><td class="k">いかない</td><td class="k">いかないんです</td></tr><tr><td class="k">した</td><td class="k">したんです</td></tr><tr><td class="k">いたい</td><td class="k">いたいんです</td></tr><tr><td class="k">ひま</td><td class="k">ひまなんです</td></tr><tr><td class="k">しごと</td><td class="k">しごとなんです</td></tr></table></div>
{{ex:あしたは しごとなんです。|ashita wa shigoto na n desu|I have work tomorrow, you see.}}
<h3>Because: ので</h3>
<p>English puts "because" in front of the reason. Japanese puts <b>ので</b> after it: reason <b>ので</b>, result. The same <b>な</b> rule applies: nouns and な-adjectives take <b>な</b> before <b>ので</b>.</p>
{{ex:あたまが いたいので、かえっても いいですか。|atama ga itai node kaette mo ii desu ka|My head hurts, so may I go home?}}
{{ex:あしたは やすみなので、えいがを みます。|ashita wa yasumi na node eiga o mimasu|Tomorrow is my day off, so I'll watch a movie.}}
{{ex:ここは しずかなので、よく きます。|koko wa shizuka na node yoku kimasu|It's quiet here, so I come often.}}
<p>The reason always comes first and the result last. English can say "I'll go home because my head hurts", with the reason at the end. In a Japanese sentence, the part with <b>ので</b> comes first, and the main verb, as always, comes last.</p>
<p>You may also hear <b>から</b> for "because". <b>ので</b> sounds softer and more polite, so it is the safer choice for requests and excuses.</p>
<h3>Don't overdo it</h3>
<p><b>んです</b> adds "the thing is". When nothing needs explaining, plain <b>です</b> and <b>ます</b> are better: to "Where are you from?", answer <b>アメリカじんです</b>, and keep <b>んです</b> for reasons, problems and surprises. Used in every sentence, it sounds pushy or emotional, as if you were always defending yourself.</p>
<div class="tip"><b>Most common mistake:</b> forgetting <b>な</b> after a noun. <b>やすみので</b> → <b>やすみなので</b>, and <b>しごとんです</b> → <b>しごとなんです</b>. Also, don't put <b>んです</b> on every sentence. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["Your coworker looks pale. What do you ask?", ["どうしますか", "どうしたんですか", "どうですか", "なんですか"], 1, "どうしたんですか asks for an explanation of what you notice: \"What's wrong?\""],
      ["Which is correct before んです for \"I'm a student, you see\"?", ["がくせいんです", "がくせいだんです", "がくせいなんです", "がくせいのんです"], 2, "A noun takes な before んです: がくせいなんです."],
      ["\"It's my day off, so…\" =", ["やすみので", "やすみなので", "やすみだので", "やすみくて ので"], 1, "A noun takes な before ので: やすみなので."]
    ],
    practice: [
      ["mc", "\"My stomach hurts, you see.\" =", "おなかが いたいんです。", "おなかが いたいなんです。", "おなかが いたいだんです。", "おなかを いたいんです。", "An い-adjective goes straight before んです, and the part that hurts takes が."],
      ["mc", "\"The thing is, tomorrow is a holiday.\" =", "あしたは やすみなんです。", "あしたは やすみんです。", "あしたは やすみだんです。", "あしたは やすみいんです。", "A noun takes な before んです."],
      ["mc", "Your friend looks upset. \"What's wrong?\" =", "どうしたんですか。", "どうするんですか。", "どうしてですか。", "どうでしたか。", "どうしたんですか asks what happened to cause what you see."],
      ["mc", "\"It's raining, so let's take a taxi.\" =", "あめなので、タクシーで いきましょう。", "あめので、タクシーで いきましょう。", "あめだので、タクシーで いきましょう。", "あめに ので、タクシーで いきましょう。", "A noun takes な before ので."],
      ["mc", "\"My head hurts, so may I go home?\" =", "あたまが いたいので、かえっても いいですか。", "あたまが いたいので、かえっては いいですか。", "あたまを いたいので、かえっても いいですか。", "あたまが いたいなので、かえっても いいですか。", "May I is ても いいですか, and いたい needs no な."],
      ["or", "I have a headache, you see.", "あたま | が | いたいんです", "を", "いたい takes the subject particle が: あたまが いたい."],
      ["or", "The thing is, I lost my wallet.", "さいふ | を | なくしたんです", "が", "なくす takes the object particle を: さいふを."],
      ["or", "Tomorrow is my day off, you see.", "あした | は | やすみなんです", "やすみんです", "A noun takes な before んです: やすみなんです."],
      ["fi", "あたまが いたい__。", "I have a headache, you see.", "んです|のです", "なんです|だんです|ですん", "An い-adjective goes straight before んです."],
      ["fi", "あしたは しごと__ので、はやく ねます。", "I have work tomorrow, so I'll go to bed early.", "な", "だ|の|に", "A noun takes な before ので: しごとなので."],
      ["fi", "さいふが __んです。", "The thing is, I don't have my wallet.", "ない", "あらない|ありない|ないな", "The short negative of ある is ない: ないんです."],
      ["ty", "I have a headache, you see.", "あたまが いたいんです|あたまが いたいのです", "あたま · いたい · explain with んです", "あたまを", "いたい takes the subject particle が: あたまが."],
      ["ty", "The thing is, I lost my wallet.", "さいふを なくしたんです|さいふを なくしたのです", "さいふ · なくす · past · んです", "さいふが", "なくす takes the object particle を: さいふを."],
      ["ty", "Tomorrow is my day off, so I'll go to the park.", "あしたは やすみなので こうえんに いきます|あしたは やすみなので こうえんへ いきます|あした やすみなので こうえんに いきます|あした やすみなので こうえんへ いきます", "あした · やすみ · ので · こうえん · いきます", "やすみので", "A noun takes な before ので: やすみなので."]
    ]
  },
  {
    id: "must",
    title: "なければいけません・ほうがいい",
    blurb: "Say what you must do and don't have to do, and give advice with ほうが いいです.",
    deck: "Polite requests and help",
    body: `
<p>English has small words in front of the verb: "must", "have to", "should". Japanese builds them from short forms you already know, the short negative (<b>いかない</b>) and the past short form (<b>いった</b>), and puts the meaning at the end.</p>
<h3>Must: なければ いけません</h3>
<p>Japanese says "must go" as "if I don't go, it won't do". Take the short negative, change <b>ない</b> to <b>なければ</b>, and add <b>いけません</b>.</p>
<div class="tbl"><table><tr><th>Short negative</th><th>Must…</th></tr><tr><td class="k">いかない</td><td class="k">いかなければ いけません</td></tr><tr><td class="k">たべない</td><td class="k">たべなければ いけません</td></tr><tr><td class="k">しない</td><td class="k">しなければ いけません</td></tr><tr><td class="k">こない</td><td class="k">こなければ いけません</td></tr></table></div>
{{ex:あしたは はやく おきなければ いけません。|ashita wa hayaku okinakereba ikemasen|I have to get up early tomorrow.}}
{{ex:くすりを のまなければ いけません。|kusuri o nomanakereba ikemasen|I have to take medicine.}}
<p>You will also hear <b>なければ なりません</b>, which is more formal, and <b>ないと いけません</b> in everyday speech. They mean the same; this course uses <b>なければ いけません</b>.</p>
<h3>Don't have to: なくても いいです</h3>
<p>For "don't have to", change <b>ない</b> to <b>なくても</b> and add <b>いいです</b>: "even if you don't, it's fine". Add <b>か</b> to ask for permission not to do something. Both patterns start from the same short negative, so once you can say <b>いかない</b>, you can say "must go" and "don't have to go".</p>
{{ex:あしたは こなくても いいです。|ashita wa konakute mo ii desu|You don't have to come tomorrow.}}
{{ex:くつを ぬがなくても いいですか。|kutsu o nuganakute mo ii desu ka|Is it OK if I don't take off my shoes?}}
<h3>Advice: ほうが いいです</h3>
<p>For "you'd better" or "you should", give advice with the past short form + <b>ほうが いいです</b>, "the side of having done it is good". For "you'd better not", use the short negative: <b>ない ほうが いいです</b>. The past form here does not mean the past: <b>いった ほうが いいです</b> is advice about what to do next.</p>
{{ex:やすんだ ほうが いいです。|yasunda hō ga ii desu|You'd better rest.}}
{{ex:びょういんに いった ほうが いいですよ。|byōin ni itta hō ga ii desu yo|You should go to the hospital.}}
{{ex:よる ひとりで あるかない ほうが いいです。|yoru hitori de arukanai hō ga ii desu|You'd better not walk alone at night.}}
<h3>Careful with people above you</h3>
<p><b>ほうが いいです</b> is direct advice, fine for friends and for someone who asked you. With a teacher or a boss it can sound pushy, so ask a question or soften it instead. <b>なければ いけません</b> is for rules and your own duties; said to someone senior, it sounds like an order. For yourself, it is always fine: <b>くすりを のまなければ いけません</b> explains your own duty.</p>
<div class="tip"><b>Most common mistake:</b> the dictionary form for advice to one person. "You'd better rest": <b>やすむ ほうが いいです</b> → <b>やすんだ ほうが いいです</b>. And don't build <b>なければ</b> from the ます form: <b>いきなければ</b> → <b>いかなければ</b>. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["\"I have to study.\" =", ["べんきょうしなければ いけません", "べんきょうしますなければ いけません", "べんきょうするなければ いけません", "べんきょうしなくても いいです"], 0, "する → しない → しなければ いけません."],
      ["\"You don't have to come.\" =", ["こなければ いけません", "こなくても いいです", "きなくても いいです", "こない ほうが いいです"], 1, "くる → こない → こなくても いいです."],
      ["\"You'd better go to the hospital.\" =", ["びょういんに いく ほうが いけません", "びょういんに いかない ほうが いいです", "びょういんに いった ほうが いいです", "びょういんで いった ほうが いいです"], 2, "Advice: past short form いった + ほうが いいです, and going to a place takes に."]
    ],
    practice: [
      ["mc", "\"I must go.\" =", "いかなければ いけません。", "いきなければ いけません。", "いくなければ いけません。", "いかなくても いいです。", "Start from the short negative いかない: いかなければ いけません."],
      ["mc", "\"You don't have to buy it.\" =", "かわなくても いいです。", "かわなければ いけません。", "かいなくても いいです。", "かうなくても いいです。", "かう → かわない → かわなくても いいです."],
      ["mc", "\"You'd better rest.\" =", "やすんだ ほうが いいです。", "やすみた ほうが いいです。", "やすんだ ほうを いいです。", "やすまない ほうが いいです。", "Advice: past short form + ほうが いいです."],
      ["mc", "\"You'd better not go.\" =", "いかない ほうが いいです。", "いった ほうが いいです。", "いきない ほうが いいです。", "いかない ほうに いいです。", "\"Better not\": the short negative + ほうが いいです."],
      ["mc", "\"You must not smoke here.\" =", "ここで たばこを すっては いけません。", "ここに たばこを すっては いけません。", "ここで たばこを すわなければ いけません。", "ここで たばこを すっても いいです。", "Must not is ては いけません, and where an action happens takes で."],
      ["or", "I have to take medicine.", "くすり | を | のまなければ | いけません", "が", "のむ takes the object particle を: くすりを."],
      ["or", "I have to go to the hospital.", "びょういん | に | いかなければ | いけません", "で", "Going to a place takes the destination particle に."],
      ["or", "You don't have to come tomorrow.", "あした | は | こなくても | いいです", "きなくても", "くる → こない, so \"don't have to come\" is こなくても."],
      ["fi", "あしたは はやく __ いけません。", "I have to get up early tomorrow.", "おきなければ", "おきないければ|おきますなければ|おきなくても", "おきる → おきない → おきなければ いけません."],
      ["fi", "くすりを のんだ ほう__ いいです。", "You'd better take medicine.", "が", "を|に|で", "The pattern is ほうが いいです."],
      ["fi", "ここで くつを ぬがなくても __。", "You don't have to take off your shoes here.", "いいです", "いけません|いいでした|ください", "\"Don't have to\" is なくても いいです."],
      ["ty", "I have to take medicine. (use なければ いけません)", "くすりを のまなければ いけません|わたしは くすりを のまなければ いけません", "くすり · のむ · must", "くすりが", "のむ takes the object particle を: くすりを."],
      ["ty", "You'd better go to the hospital.", "びょういんに いった ほうが いいです|びょういんへ いった ほうが いいです|びょういんに いった ほうが いいですよ|びょういんへ いった ほうが いいですよ", "びょういん · いく · ほう · いい", "びょういんで", "Going to a place takes the destination particle に or へ."],
      ["ty", "You don't have to come tomorrow.", "あしたは こなくても いいです|あした こなくても いいです", "あした · くる · don't have to", "きなくても", "くる → こない, so \"don't have to come\" is こなくても いいです."]
    ]
  }
];
