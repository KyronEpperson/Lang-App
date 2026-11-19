/* en-ja lessons 11–19 (past … teiru). Written by EN-JA-2; every pron typed by hand in the profile §6.1 format and checked against pronPattern. */
module.exports = [
  {
    id: "past",
    title: "Past: でした・ました",
    blurb: "Say what you did, what you didn't do, and what something was, with ました, ませんでした and でした.",
    deck: "Daily routine",
    body: `
<p>English shows the past inside the verb: <i>eat</i> becomes <i>ate</i>, <i>go</i> becomes <i>went</i>. Japanese is far more regular. Only the polite ending at the end of the sentence changes, and it changes the same way for every verb.</p>
<h3>Verbs: ました and ませんでした</h3>
<p>Swap <b>ます</b> for <b>ました</b> and you have the past. For "didn't", start from the negative <b>ません</b> and add <b>でした</b>: <b>ませんでした</b>. There are no irregular past forms here: <b>します</b> and <b>きます</b> follow the same pattern. Because the ending comes last, listen to the very end of a Japanese sentence: that is where you find out whether something happened or not.</p>
<div class="tbl"><table><tr><th></th><th>Now or later</th><th>Past</th></tr><tr><td>Yes</td><td class="k">たべます</td><td class="k">たべました</td></tr><tr><td>No</td><td class="k">たべません</td><td class="k">たべませんでした</td></tr></table></div>
{{ex:きのう すしを たべました。|kinō sushi o tabemashita|I ate sushi yesterday.}}
{{ex:けさ コーヒーを のみませんでした。|kesa kōhī o nomimasen deshita|I didn't drink coffee this morning.}}
<h3>Nouns: でした and じゃなかったです</h3>
<p>The polite "be", <b>です</b>, has its own past: <b>でした</b>, "was" or "were". "Wasn't" is <b>じゃなかったです</b>. You will also hear <b>じゃありませんでした</b>, which means the same and sounds a little more formal.</p>
{{ex:きのうは やすみでした。|kinō wa yasumi deshita|Yesterday was my day off.}}
{{ex:きのうは にちようびじゃなかったです。|kinō wa nichiyōbi janakatta desu|Yesterday wasn't Sunday.}}
<h3>Time words and days of the week</h3>
<p>Words like <b>きのう</b> (yesterday), <b>せんしゅう</b> (last week) and <b>きょねん</b> (last year) take no particle, just like <b>まいにち</b>. Days of the week work like clock times: they take the time particle <b>に</b>.</p>
<div class="tbl"><table><tr><th>Day</th><th>Japanese</th></tr><tr><td>Monday</td><td class="k">げつようび</td></tr><tr><td>Tuesday</td><td class="k">かようび</td></tr><tr><td>Wednesday</td><td class="k">すいようび</td></tr><tr><td>Thursday</td><td class="k">もくようび</td></tr><tr><td>Friday</td><td class="k">きんようび</td></tr><tr><td>Saturday</td><td class="k">どようび</td></tr><tr><td>Sunday</td><td class="k">にちようび</td></tr></table></div>
{{ex:どようびに ともだちと えいがを みました。|doyōbi ni tomodachi to eiga o mimashita|I saw a movie with a friend on Saturday.}}
{{ex:きょねん とうきょうに いきました。|kyonen tōkyō ni ikimashita|I went to Tokyo last year.}}
<h3>Asking and answering</h3>
<p>Add <b>か</b> as usual: <b>いきましたか</b>, "did you go?" English answers "Yes, I did". Japanese has no "did" to repeat, so you answer with the verb itself, in the past: <b>はい、いきました</b> for yes, and the negative past for no. Leave out the subject, as in any answer where it is clear who you mean.</p>
{{ex:せんしゅう きょうとに いきましたか。|senshū kyōto ni ikimashita ka|Did you go to Kyoto last week?}}
{{ex:いいえ、いきませんでした。|iie ikimasen deshita|No, I didn't.}}
<p>One warning for later: words like <b>たのしい</b> (fun) are adjectives, and adjectives do not simply add <b>でした</b>. You will learn their past in lesson 14.</p>
<div class="tip"><b>Most common mistake:</b> building "didn't" the English way, with "not" after the past. <b>たべましたじゃない</b> → <b>たべませんでした</b>. The negative comes first, then the past. And read the kana before you peek at the romaji.</div>
`,
    check: [
      ["Which one says \"I didn't eat breakfast\"?", ["あさごはんを たべましたじゃないです", "あさごはんを たべませんでした", "あさごはんを たべません", "あさごはんが たべませんでした"], 1, "Didn't eat: the negative ません plus the past でした, and the object particle を on あさごはん."],
      ["How do you say \"It wasn't my day off\"?", ["やすみでしたじゃない", "やすみじゃないでした", "やすみじゃなかったです", "やすみでしたか"], 2, "The past of じゃないです is じゃなかったです."],
      ["Which time word takes the time particle に?", ["どようび", "きのう", "せんしゅう", "きょねん"], 0, "Days of the week take に; きのう, せんしゅう and きょねん take no particle."]
    ],
    practice: [
      ["mc", "I went to Tokyo. =", "とうきょうに いきました", "とうきょうに いきます", "とうきょうに いきませんでした", "とうきょうに いきましたか", "The past of ます is ました; ませんでした would mean didn't go."],
      ["mc", "I didn't drink coffee. =", "コーヒーを のみませんでした", "コーヒーを のみましたじゃない", "コーヒーを のみません", "コーヒーが のみませんでした", "Didn't drink: ませんでした, with を on what you drink."],
      ["mc", "Yesterday was Sunday. =", "きのうは にちようびでした", "きのうは にちようびです", "きのうは にちようびました", "きのうは にちようびじゃなかったです", "A noun takes でした for was; ました belongs to verbs."],
      ["mc", "Ms. Tanaka wasn't a student. =", "たなかさんは がくせいじゃなかったです", "たなかさんは がくせいでしたじゃない", "たなかさんは がくせいじゃないでした", "たなかさんは がくせいませんでした", "Wasn't, after a noun: じゃなかったです."],
      ["mc", "Which day comes right after きんようび (Friday)?", "どようび", "にちようび", "もくようび", "げつようび", "Friday is followed by Saturday, どようび."],
      ["or", "I ate sushi.", "すし | を | たべました", "が", "What you eat takes the object particle を."],
      ["or", "I didn't go to school.", "がっこう | に | いきませんでした", "いきました | で", "Didn't go: the polite ending ませんでした, after the destination particle に."],
      ["or", "Ms. Tanaka was a teacher.", "たなかさん | は | せんせい | でした", "です", "The past of です is the polite ending でした."],
      ["fi", "きのう すしを __。", "I didn't eat sushi yesterday.", "たべませんでした", "たべました|たべません|たべましたじゃない", "Didn't eat: ませんでした, the negative and then the past."],
      ["fi", "どようび__ きょうとに いきました。", "I went to Kyoto on Saturday.", "に|は|には", "で|を|が", "A day of the week takes the time particle に."],
      ["fi", "きのうは やすみ__。", "Yesterday was my day off.", "でした", "です|ました|じゃないでした", "A noun in the past takes でした."],
      ["ty", "I didn't go to Kyoto.", "きょうとに いきませんでした|きょうとへ いきませんでした|わたしは きょうとに いきませんでした|わたしは きょうとへ いきませんでした", "きょうと · いきます · didn't", "いきました", "Didn't go: the polite ending is ませんでした."],
      ["ty", "I watched a movie.", "えいがを みました|わたしは えいがを みました", "えいが · みます · past", "えいがが", "What you watch takes the object particle を."],
      ["ty", "Did you eat breakfast?", "あさごはんを たべましたか|あさごはんは たべましたか", "あさごはん · たべます · past question", "あさごはんが", "Leave out you; the object particle を marks what you ate."]
    ]
  },
  {
    id: "invite",
    title: "ませんか・ましょう: inviting",
    blurb: "Invite someone, suggest a plan, offer help, and say yes or a polite no.",
    deck: "Traps for English speakers",
    body: `
<p>English invites with "Do you want to…?" or "Would you like to…?". In Japanese, asking people straight out what they want can sound pushy. Instead, you ask a negative question, "Won't you…?", which leaves the other person room to say no.</p>
<h3>ませんか: won't you…?</h3>
<p>Take the negative <b>ません</b> and add the question particle <b>か</b>. With <b>いっしょに</b> ("together") it is a clear, friendly invitation. Do not let the negative fool you: the speaker is not asking whether you won't go. A happy answer is <b>はい、いきましょう</b>.</p>
{{ex:いっしょに ひるごはんを たべませんか。|issho ni hirugohan o tabemasen ka|Would you like to have lunch together?}}
{{ex:どようびに えいがを みませんか。|doyōbi ni eiga o mimasen ka|Would you like to see a movie on Saturday?}}
<h3>ましょう: let's</h3>
<p>Replace <b>ます</b> with <b>ましょう</b> to say "let's". Use it to accept a plan, or to suggest one when you already know the other person is keen. It is more direct than <b>ませんか</b>.</p>
{{ex:さんじに えきで あいましょう。|sanji ni eki de aimashō|Let's meet at the station at three.}}
<h3>ましょうか: shall we…? shall I…?</h3>
<p>Add <b>か</b> to <b>ましょう</b> and you ask "shall we…?" about a plan, or "shall I…?" to offer help. If someone offers help this way, accept with <b>おねがいします</b> ("yes, please"), or decline with <b>だいじょうぶです</b> ("I'm fine, thanks").</p>
{{ex:なにを たべましょうか。|nani o tabemashō ka|What shall we eat?}}
{{ex:てつだいましょうか。|tetsudaimashō ka|Shall I help you?}}
<h3>Saying yes, and saying no nicely</h3>
<p>To accept, say <b>いいですね</b>, "sounds good", often followed by a <b>ましょう</b>. To refuse, Japanese rarely says a flat no. Say <b>すみません</b>, name the problem, and let the sentence trail off with <b>ちょっと…</b> ("a little…"). The listener understands the rest, and nobody has to hear the word no.</p>
{{ex:いいですね。いきましょう。|ii desu ne ikimashō|Sounds good. Let's go.}}
{{ex:すみません、どようびは ちょっと…。|sumimasen doyōbi wa chotto|Sorry, Saturday is a bit… (I can't make it.)}}
<h3>Yes and no to a negative question</h3>
<p>Not every negative question is an invitation. <b>にくは たべませんか</b> can simply ask "Don't you eat meat?" In English you answer "No, I don't". In Japanese, <b>はい</b> agrees with the question as it was asked: "Yes, that's right: I don't."</p>
{{ex:はい、たべません。|hai tabemasen|That's right, I don't (eat it).}}
<div class="tip"><b>Most common mistake:</b> turning down an invitation with a bare no. <b>いいえ。</b> → <b>すみません、ちょっと…。</b> A bare いいえ sounds cold. Read the kana first, then check the romaji.</div>
`,
    check: [
      ["A coworker says: どようびに えいがを みませんか。 What is she doing?", ["Asking whether you missed a movie on Saturday", "Telling you not to watch the movie", "Inviting you to a movie on Saturday", "Asking if you dislike movies"], 2, "ませんか, a negative question, is the usual polite invitation."],
      ["How do you turn down an invitation politely?", ["すみません、ちょっと…。", "いいえ。", "いいえ、いきません。", "いきましょう。"], 0, "Apologize and trail off with ちょっと…; a bare いいえ sounds cold."],
      ["Someone asks: にくは たべませんか (Don't you eat meat?). You don't. What do you answer?", ["いいえ、たべます。", "はい、たべません。", "はい、たべます。", "いいえ、たべませんか。"], 1, "はい agrees with the question as asked: that's right, I don't."]
    ],
    practice: [
      ["mc", "Would you like to go together? =", "いっしょに いきませんか", "いっしょに いきません", "いっしょに いきませんでしたか", "いっしょに いきましたか", "An invitation is a negative question: ませんか."],
      ["mc", "Let's eat. =", "たべましょう", "たべました", "たべません", "たべませんでした", "Let's is the ending ましょう."],
      ["mc", "Shall I help you? =", "てつだいましょうか", "てつだいませんか", "てつだいました", "てつだいません", "ましょうか offers to do something; ませんか would ask the other person to help."],
      ["mc", "A friend invites you to karaoke and you want to go. What do you say?", "いいですね", "けっこうです", "すみません、ちょっと…", "いいえ", "いいですね means sounds good; けっこうです turns an offer down."],
      ["mc", "テレビは みませんか (Don't you watch TV?) — That's right, I don't. =", "はい、みません", "いいえ、みません", "はい、みます", "いいえ、みます", "はい agrees with the negative question as it was asked."],
      ["or", "Let's go to karaoke.", "カラオケ | に | いきましょう", "で | いきました", "Going to a place takes the destination particle に."],
      ["or", "Would you like to drink some tea?", "おちゃ | を | のみませんか", "が | のみましたか", "An invitation uses the polite ending ませんか, and the object particle を marks the tea."],
      ["or", "What shall we eat?", "なに | を | たべましょうか", "が", "なに is what you eat, so it takes the object particle を."],
      ["fi", "いっしょに えいがを __。", "Would you like to see a movie together?", "みませんか", "みましたか|みませんでした|みます", "An invitation is a negative question: みませんか."],
      ["fi", "えき__ あいましょう。", "Let's meet at the station.", "で", "に|を|が", "Where you meet, the place where something happens, takes で."],
      ["fi", "すみません、どようびは __…。", "Sorry, Saturday is a bit… (I can't make it.)", "ちょっと", "いいえ|いいです|はい", "Trail off with ちょっと… to say no without saying no."],
      ["ty", "Let's go to Kyoto.", "きょうとに いきましょう|きょうとへ いきましょう", "きょうと · いきます · let's", "きょうとで", "Going to a place takes the destination particle に or へ."],
      ["ty", "Would you like to have lunch together?", "いっしょに ひるごはんを たべませんか|ひるごはんを いっしょに たべませんか", "いっしょに · ひるごはん (lunch) · たべます", "たべましたか", "An invitation takes the polite ending ませんか."],
      ["ty", "What shall we drink?", "なにを のみましょうか", "なに · のみます · shall we", "なにが", "なに is what you drink, so it takes the object particle を."]
    ]
  },
  {
    id: "kanji-first",
    title: "First kanji: numbers, days, people",
    blurb: "Read 30 everyday kanji words: numbers, yen, the days of the week, times, people and Japan.",
    deck: "First kanji",
    body: `
<p>Real Japanese mixes kana with <b>kanji</b>: characters that came from Chinese and each carry a meaning. English has a few signs that work the same way. "3" and "$" mean the same thing however you say them. Most kanji have several readings, so this course teaches only 30 kanji words, each with one reading, and always lets you answer in kana.</p>
<h3>Numbers and money</h3>
<p>One, two and three are drawn as lines, which makes them an easy start. Prices on signs and menus use <b>円</b> (yen).</p>
<div class="tbl"><table><tr><th>Kanji</th><th>Reading</th><th>Meaning</th></tr><tr><td class="k">一 二 三</td><td class="k">いち に さん</td><td>1, 2, 3</td></tr><tr><td class="k">四 五 六 七</td><td class="k">よん ご ろく なな</td><td>4, 5, 6, 7</td></tr><tr><td class="k">八 九 十</td><td class="k">はち きゅう じゅう</td><td>8, 9, 10</td></tr><tr><td class="k">百 千 一万</td><td class="k">ひゃく せん いちまん</td><td>100, 1,000, 10,000</td></tr><tr><td class="k">円</td><td class="k">えん</td><td>yen</td></tr></table></div>
{{ex:一、二、三。|ichi ni san|One, two, three.}}
<p>Inside sentences, this course still writes numbers in kana (さんびゃくえん), so you can read every price.</p>
<h3>Days and time</h3>
<p>Each day of the week has one kanji of its own, followed by the same ending. The first kanji gives the meaning: moon, fire, water, tree, gold, earth, sun.</p>
<div class="tbl"><table><tr><th>Day</th><th>Kanji</th><th>Reading</th></tr><tr><td>Monday</td><td class="k">月曜日</td><td class="k">げつようび</td></tr><tr><td>Tuesday</td><td class="k">火曜日</td><td class="k">かようび</td></tr><tr><td>Wednesday</td><td class="k">水曜日</td><td class="k">すいようび</td></tr><tr><td>Thursday</td><td class="k">木曜日</td><td class="k">もくようび</td></tr><tr><td>Friday</td><td class="k">金曜日</td><td class="k">きんようび</td></tr><tr><td>Saturday</td><td class="k">土曜日</td><td class="k">どようび</td></tr><tr><td>Sunday</td><td class="k">日曜日</td><td class="k">にちようび</td></tr></table></div>
{{ex:月曜日に がっこうに いきます。|getsuyōbi ni gakkō ni ikimasu|I go to school on Monday.}}
{{ex:金曜日は やすみです。|kin'yōbi wa yasumi desu|Friday is my day off.}}
<p>Three more time words: <b>六時</b> (ろくじ, six o'clock), <b>五分</b> (ごふん, five minutes) and <b>一年</b> (いちねん, one year).</p>
{{ex:六時に おきます。|rokuji ni okimasu|I get up at six.}}
<h3>People and Japan</h3>
<p><b>人</b> (ひと) is a person, and <b>日本</b> (にほん) is Japan, "the origin of the sun". Together, <b>日本人</b> (にほんじん) is a Japanese person. Add <b>男の人</b> (おとこのひと, man), <b>女の人</b> (おんなのひと, woman) and <b>女の子</b> (おんなのこ, girl).</p>
{{ex:たなかさんは 日本人です。|tanaka-san wa nihonjin desu|Mr. Tanaka is Japanese.}}
{{ex:あの 女の人は せんせいです。|ano onna no hito wa sensei desu|That woman is a teacher.}}
{{ex:日本に 一年 いました。|nihon ni ichinen imashita|I was in Japan for a year.}}
<h3>One kanji, several readings</h3>
<p>English has the opposite puzzle: "ough" sounds different in <i>though</i>, <i>through</i> and <i>tough</i>. A kanji can be read differently in different words. The sun kanji is に in <b>日本</b>, び at the end of every day of the week, and にち at the start of <b>日曜日</b>. <b>人</b> is ひと on its own and じん in <b>日本人</b>. That is why every kanji card starts its note with the reading.</p>
<p>Kanji are never required in your answers: kana are always right.</p>
<div class="tip"><b>Most common mistake:</b> reading a kanji the way you met it first. <b>日本</b> read as <b>ひほん</b> → <b>にほん</b>. Read the kana reading in the card note first, then the romaji.</div>
`,
    check: [
      ["How is the first kanji of 日曜日 (Sunday) read?", ["び", "ひ", "にち", "に"], 2, "日曜日 is にちようび: にち at the start, び at the end."],
      ["Which word means Japanese person?", ["日本人", "日本", "人", "日曜日"], 0, "日本 (Japan) + 人 (person), read にほんじん."],
      ["Do you have to type kanji in your answers?", ["Yes, from this lesson on", "Only for numbers", "Only for days of the week", "No: kana are always accepted"], 3, "Kanji are never required; every answer also accepts kana."]
    ],
    practice: [
      ["mc", "Which word means Japan?", "日本", "日本人", "人", "日曜日", "日本 is Japan; add 人 and it is a Japanese person."],
      ["mc", "How do you read 六時?", "ろくじ", "ろくふん", "ろくにち", "ろっぷん", "六時 is ろくじ, six o'clock."],
      ["mc", "Which day is 金曜日?", "Friday", "Monday", "Saturday", "Wednesday", "金曜日 is きんようび, Friday."],
      ["mc", "Which word means woman?", "女の人", "男の人", "女の子", "人", "女の人 is a woman; 女の子 is a girl."],
      ["mc", "In 日本人, how is 人 read?", "じん", "ひと", "にん", "にち", "After a country, 人 is read じん: にほんじん."],
      ["or", "Mr. Tanaka is Japanese.", "たなかさん | は | 日本人 | です", "を", "The topic particle は follows the person you talk about."],
      ["or", "Monday is my day off. (Start with Monday.)", "月曜日 | は | やすみ | です", "を", "The topic particle は marks the day you talk about."],
      ["or", "I'm going to Japan.", "日本 | に | いきます", "で", "Going to a place takes the destination particle に."],
      ["fi", "__は やすみです。", "Sunday is my day off.", "日曜日|にちようび", "月曜日|土曜日|金曜日", "日曜日 is Sunday: the sun day."],
      ["fi", "あの __は せんせいです。", "That man is a teacher.", "男の人|おとこのひと", "女の人|女の子|日本人", "男の人 is a man; 女の人 is a woman."],
      ["fi", "六時__ おきます。", "I get up at six.", "に", "で|を|が", "A clock time takes the time particle に."],
      ["ty", "I get up at six.", "六時に おきます|ろくじに おきます|わたしは 六時に おきます|わたしは ろくじに おきます", "六時 (ろくじ) · おきます", "六時で", "A clock time takes the time particle に."],
      ["ty", "Mr. Tanaka is Japanese.", "たなかさんは 日本人です|たなかさんは にほんじんです", "たなかさん · 日本人 (にほんじん)", "たなかさんを", "The topic particle は follows the person you talk about."],
      ["ty", "Friday is my day off.", "金曜日は やすみです|きんようびは やすみです|やすみは 金曜日です|やすみは きんようびです", "金曜日 (きんようび) · やすみ", "金曜日を", "The topic particle は marks the day you talk about."]
    ]
  },
  {
    id: "adjectives",
    title: "い and な adjectives",
    blurb: "Describe things now and in the past, say what they aren't, and put adjectives before nouns.",
    deck: "Describing things",
    body: `
<p>English adjectives never change: <i>expensive</i>, <i>was expensive</i>, <i>isn't expensive</i>. Japanese adjectives come in two kinds, and one kind carries its own polite endings, just like a verb.</p>
<h3>Two kinds</h3>
<p><b>い-adjectives</b> end in い: <b>たかい</b> (expensive), <b>おおきい</b> (big), <b>おいしい</b> (tasty). <b>な-adjectives</b> take <b>な</b> before a noun: <b>きれい</b> (pretty, clean), <b>しずか</b> (quiet), <b>ゆうめい</b> (famous). Careful: きれい and ゆうめい end in い but are な-adjectives, so learn each word with its kind. Cards and dictionaries usually show a な-adjective with its な: <b>しずかな</b>, <b>ゆうめいな</b>. The cards in this course do the same.</p>
<h3>Before a noun</h3>
<p>Both kinds go in front of the noun, as in English. An い-adjective goes straight in; a な-adjective adds な. Nothing else changes: a big park is <b>おおきい こうえん</b>, a famous park is <b>ゆうめいな こうえん</b>.</p>
{{ex:これは たかい ほんです。|kore wa takai hon desu|This is an expensive book.}}
{{ex:きれいな へやですね。|kirei na heya desu ne|What a nice room.}}
<h3>Is, isn't, was, wasn't</h3>
<p>A な-adjective works like a noun: add <b>です</b>, <b>じゃないです</b>, <b>でした</b> or <b>じゃなかったです</b>. An い-adjective changes its own ending instead: drop the last い and add <b>くないです</b> (isn't) or <b>かったです</b> (was). The <b>です</b> at the end never changes: after an い-adjective it only makes the sentence polite, and the tense lives in the adjective itself. That is why <b>たかいでした</b>, with the past in the wrong place, is a mistake.</p>
<div class="tbl"><table><tr><th></th><th>い-adjective</th><th>な-adjective</th></tr><tr><td>is</td><td class="k">たかいです</td><td class="k">きれいです</td></tr><tr><td>isn't</td><td class="k">たかくないです</td><td class="k">きれいじゃないです</td></tr><tr><td>was</td><td class="k">たかかったです</td><td class="k">きれいでした</td></tr><tr><td>wasn't</td><td class="k">たかくなかったです</td><td class="k">きれいじゃなかったです</td></tr></table></div>
{{ex:この ラーメンは たかくないです。|kono rāmen wa takakunai desu|This ramen isn't expensive.}}
{{ex:テストは むずかしかったです。|tesuto wa muzukashikatta desu|The test was hard.}}
{{ex:この へやは しずかじゃないです。|kono heya wa shizuka janai desu|This room isn't quiet.}}
{{ex:こうえんは きれいでした。|kōen wa kirei deshita|The park was beautiful.}}
<p>You will also hear <b>くありません</b> for "isn't" (<b>たかくありません</b>). It means the same thing.</p>
<h3>いい is irregular</h3>
<p><b>いい</b> (good) switches to an older form, よい, for every ending except いいです itself: <b>よくないです</b> (isn't good), <b>よかったです</b> (was good).</p>
{{ex:きのうは てんきが よかったです。|kinō wa tenki ga yokatta desu|The weather was nice yesterday.}}
<h3>Very, and not very</h3>
<p><b>とても</b> means "very". <b>あまり</b> means "not very", and it always goes with a negative ending. With a positive ending it sounds broken, so never say あまり たかいです.</p>
{{ex:とても おいしいです。|totemo oishii desu|It's very tasty.}}
{{ex:あまり たかくないです。|amari takakunai desu|It's not very expensive.}}
<div class="tip"><b>Most common mistake:</b> adding でした to an い-adjective, as you would to a noun. <b>たかいでした</b> → <b>たかかったです</b>. And the reverse: <b>きれいくないです</b> → <b>きれいじゃないです</b>. Read the kana first, then the romaji.</div>
`,
    check: [
      ["The movie was interesting. =", ["えいがは おもしろいでした", "えいがは おもしろかったです", "えいがは おもしろくないです", "えいがは おもしろいかったです"], 1, "An い-adjective drops い and adds かったです for the past."],
      ["Which is right before a noun?", ["きれい へや", "きれいい へや", "きれいの へや", "きれいな へや"], 3, "きれい is a な-adjective, so it adds な before a noun."],
      ["It wasn't good. =", ["よくなかったです", "いくなかったです", "いいじゃなかったです", "いいくなかったです"], 0, "いい switches to よ- for its other endings: よくなかったです."]
    ],
    practice: [
      ["mc", "It's not expensive. =", "たかくないです", "たかいじゃないです", "たかくないでした", "たかいないです", "An い-adjective drops い and adds くないです."],
      ["mc", "It was cold. (the weather) =", "さむかったです", "さむいでした", "さむくないです", "さむいかったです", "An い-adjective drops い and adds かったです for was."],
      ["mc", "a quiet room =", "しずかな へや", "しずか へや", "しずかい へや", "しずかの へや", "しずか is a な-adjective: な goes before the noun."],
      ["mc", "It isn't famous. =", "ゆうめいじゃないです", "ゆうめいくないです", "ゆうめくないです", "ゆうめいないです", "ゆうめい ends in い but is a な-adjective: じゃないです."],
      ["mc", "It was good. =", "よかったです", "いかったです", "いいでした", "よいでした", "いい is irregular: was good is よかったです."],
      ["or", "The ramen was delicious.", "ラーメン | は | おいしかったです", "おいしいでした", "Past of an い-adjective: the polite ending かったです, not いでした."],
      ["or", "This room isn't clean.", "この | へや | は | きれいじゃないです", "きれいくないです", "きれい is a な-adjective, so the polite ending is じゃないです."],
      ["or", "It's a famous park.", "ゆうめいな | こうえん | です", "ゆうめい", "A な-adjective keeps な before a noun."],
      ["fi", "この ほんは __。", "This book isn't interesting.", "おもしろくないです|おもしろくありません", "おもしろいじゃないです|おもしろくないでした|おもしろいです", "An い-adjective drops い and adds くないです."],
      ["fi", "きのうは さむ__。", "It was cold yesterday.", "かったです", "いでした|くないです|いです", "Was, for an い-adjective: かったです."],
      ["fi", "しずか__ こうえんです。", "It's a quiet park.", "な", "の|い|に", "A な-adjective takes な before a noun."],
      ["ty", "The test was difficult.", "テストは むずかしかったです|テストが むずかしかったです", "テスト · むずかしい · past", "むずかしいでした", "Past of an い-adjective takes the polite ending かったです."],
      ["ty", "This room isn't quiet.", "この へやは しずかじゃないです|この へやは しずかじゃありません", "この · へや · しずか · not", "しずかくないです", "しずか is a な-adjective, so the polite ending is じゃないです."],
      ["ty", "It's not very expensive.", "あまり たかくないです|あまり たかくありません", "あまり · たかい · not", "たかいじゃないです", "Negative of an い-adjective: the polite ending くないです."]
    ]
  },
  {
    id: "suki",
    title: "すき・きらい: likes and dislikes",
    blurb: "Say what you like, love and dislike, what people are good or bad at, and ask what kind of things someone likes.",
    deck: "Likes, plans and free time",
    body: `
<p>In English, "like" is a verb, and the thing you like is its object: "I like cats." In Japanese, <b>すき</b> is not a verb at all. It is a な-adjective that means roughly "liked" or "pleasing". So the sentence is closer to "As for me, cats are liked."</p>
<h3>すき takes が</h3>
<p>Because すき is not a verb, the thing you like does not take the object particle <b>を</b>. It takes the subject particle <b>が</b>. The person who likes it is the topic, with <b>は</b>, and is often left out when it is you. To ask, add か: <b>ねこが すきですか</b>. Answer with the adjective itself: <b>はい、すきです</b>.</p>
{{ex:わたしは ねこが すきです。|watashi wa neko ga suki desu|I like cats.}}
{{ex:けんさんは サッカーが すきです。|ken-san wa sakkā ga suki desu|Ken likes soccer.}}
<p>The same pattern works for people, but be careful: said about a person, <b>すきです</b> can sound like a confession of love.</p>
<h3>Love, dislike, and not like</h3>
<p><b>だいすき</b> is "really like" or "love" (for things and hobbies too). <b>きらい</b> is "dislike", and it sounds strong. Many people prefer the softer <b>すきじゃないです</b>, "I don't really like it", which uses the な-adjective endings you already know.</p>
{{ex:おんがくが だいすきです。|ongaku ga daisuki desu|I love music.}}
{{ex:やさいが きらいです。|yasai ga kirai desu|I don't like vegetables.}}
<h3>Good at, bad at</h3>
<p><b>じょうず</b> (good at) and <b>へた</b> (bad at) work exactly like すき: the skill takes <b>が</b>. Use じょうず to praise other people. About yourself it sounds like bragging, so people say へた or nothing.</p>
{{ex:エミリーさんは りょうりが じょうずです。|emirī-san wa ryōri ga jōzu desu|Emily is good at cooking.}}
{{ex:わたしは うたが へたです。|watashi wa uta ga heta desu|I'm bad at singing.}}
<h3>What kind do you like?</h3>
<p><b>どんな</b> means "what kind of" and goes right before a noun. Because すき is a な-adjective, <b>すきな</b> before a noun means "favorite". There is no separate word for it: "my favorite color" is simply "the liked color". Answer a どんな question with a noun, or with an adjective before a noun.</p>
{{ex:どんな えいがが すきですか。|donna eiga ga suki desu ka|What kind of movies do you like?}}
{{ex:すきな たべものは すしです。|suki na tabemono wa sushi desu|My favorite food is sushi.}}
<p>For the past, use the な-adjective endings: <b>すきでした</b>, <b>すきじゃなかったです</b>.</p>
<div class="tip"><b>Most common mistake:</b> treating すき like the English verb, with the object particle. <b>すしを すきです</b> → <b>すしが すきです</b>. The same goes for きらい, じょうず and へた. Read the kana first, then the romaji.</div>
`,
    check: [
      ["I like sushi. =", ["すしを すきです", "すしが すきです", "すしが すきます", "すしに すきです"], 1, "すき is a な-adjective, so the thing you like takes が."],
      ["Which is the softer way to say you don't like something?", ["きらいです", "だいすきです", "すきじゃないです", "へたです"], 2, "すきじゃないです is gentler than きらいです."],
      ["Emily is good at Japanese. =", ["エミリーさんは にほんごを じょうずです", "エミリーさんは にほんごが じょうずします", "エミリーさんは にほんごに じょうずです", "エミリーさんは にほんごが じょうずです"], 3, "じょうず works like すき: the skill takes が."]
    ],
    practice: [
      ["mc", "I like music. =", "おんがくが すきです", "おんがくを すきです", "おんがくが すきます", "おんがくに すきです", "すき is not a verb: the thing you like takes が, and です ends the sentence."],
      ["mc", "I love ramen. =", "ラーメンが だいすきです", "ラーメンを だいすきです", "ラーメンが だいすきます", "ラーメンで だいすきです", "だいすき works like すき: が and です."],
      ["mc", "What kind of music do you like? =", "どんな おんがくが すきですか", "なに おんがくが すきですか", "どんな おんがくを すきですか", "どんな おんがくが すきでしたか", "どんな goes before the noun, and すき takes が."],
      ["mc", "Ken is good at tennis. =", "けんさんは テニスが じょうずです", "けんさんは テニスを じょうずです", "けんさんは テニスが じょうずします", "けんさんは テニスで じょうずです", "じょうず takes が for the skill, and です at the end."],
      ["mc", "I don't like coffee very much. =", "コーヒーは あまり すきじゃないです", "コーヒーは あまり すきです", "コーヒーは とても すきじゃないです", "コーヒーが あまり すきくないです", "すき is a な-adjective: すきじゃないです, and あまり needs a negative."],
      ["or", "I like cats.", "ねこ | が | すきです", "を", "すき takes the subject particle が, not を."],
      ["or", "Sakura is bad at singing.", "さくらさん | は | うた | が | へたです", "を", "へた, like すき, takes the subject particle が for the skill."],
      ["or", "I didn't like that movie.", "その | えいが | は | すきじゃなかったです", "すきくなかったです", "すき is a な-adjective, so the polite ending is じゃなかったです."],
      ["fi", "ねこ__ だいすきです。", "I love cats.", "が|は", "を|に|で", "だいすき, like すき, takes が."],
      ["fi", "わたしは やさいが __。", "I don't like vegetables.", "きらいです|すきじゃないです|すきじゃありません", "すきです|きらいます|すきくないです", "きらいです, or the softer すきじゃないです."],
      ["fi", "どんな たべもの__ すきですか。", "What kind of food do you like?", "が", "を|に|で", "The thing you like takes が."],
      ["ty", "I like sushi.", "すしが すきです|わたしは すしが すきです", "すし · すき", "すしを", "すき takes the subject particle が."],
      ["ty", "Emily is good at cooking.", "エミリーさんは りょうりが じょうずです", "エミリーさん · りょうり (cooking) · じょうず", "りょうりを", "じょうず takes the subject particle が for the skill."],
      ["ty", "I don't like coffee.", "コーヒーが きらいです|コーヒーは きらいです|コーヒーが すきじゃないです|コーヒーは すきじゃないです|コーヒーが すきじゃありません|コーヒーは すきじゃありません|わたしは コーヒーが きらいです|わたしは コーヒーが すきじゃないです", "コーヒー · きらい", "コーヒーを", "Like すき, きらい takes the subject particle が."]
    ]
  },
  {
    id: "counters",
    title: "Counting things: ひとつ, にまい, さんぼん",
    blurb: "Order and count things and people with the right counter, and put the number in the right place.",
    deck: "Food and drink",
    body: `
<p>English puts a number straight in front of a noun: "two apples". Japanese adds a small word after the number, a <b>counter</b>, and the counter depends on what you are counting. English does this now and then too: two <i>sheets</i> of paper, three <i>bottles</i> of water. Japanese does it every time.</p>
<h3>The all-purpose set: ひとつ to とお</h3>
<p>For things with no special counter, such as apples, rice balls, cups of coffee or anything you point at in a shop, use this set. It stops at ten. To ask how many, say <b>いくつ</b>. In a café or a shop this set is often all you need: point and say <b>これを ふたつ ください</b>.</p>
<div class="tbl"><table><tr><th>1–5</th><th>6–10</th></tr><tr><td class="k">ひとつ ふたつ みっつ よっつ いつつ</td><td class="k">むっつ ななつ やっつ ここのつ とお</td></tr></table></div>
<h3>Where the number goes</h3>
<p>English says "two apples, please". Japanese says "apples を two please": the number and its counter come after the particle, right before the verb. This works with any verb, and with あります and います too. No particle follows the number itself.</p>
{{ex:りんごを ふたつ ください。|ringo o futatsu kudasai|Two apples, please.}}
{{ex:おにぎりを みっつ かいました。|onigiri o mittsu kaimashita|I bought three rice balls.}}
<h3>Flat things, long things, books</h3>
<div class="tbl"><table><tr><th>Counter</th><th>For</th><th>1, 2, 3</th></tr><tr><td class="k">まい</td><td>flat things: tickets, paper, shirts</td><td class="k">いちまい にまい さんまい</td></tr><tr><td class="k">ほん</td><td>long things: pens, bottles, umbrellas</td><td class="k">いっぽん にほん さんぼん</td></tr><tr><td class="k">さつ</td><td>books, notebooks</td><td class="k">いっさつ にさつ さんさつ</td></tr></table></div>
{{ex:きっぷを にまい ください。|kippu o nimai kudasai|Two tickets, please.}}
{{ex:ペンが さんぼん あります。|pen ga sanbon arimasu|There are three pens.}}
{{ex:ほんを にさつ かいました。|hon o nisatsu kaimashita|I bought two books.}}
<h3>Sound changes</h3>
<p>Some numbers squeeze together with the counter. With ほん you get <b>いっぽん</b> (1), <b>さんぼん</b> (3) and <b>ろっぽん</b> (6); with さつ, <b>いっさつ</b> (1). Learn these as whole words, the way you learned さんびゃく and ろっぴゃく with the numbers.</p>
<h3>Counting people</h3>
<p>One and two people have their own words, <b>ひとり</b> and <b>ふたり</b>. From three on, add にん: <b>さんにん</b>, <b>よにん</b> (4). In a restaurant, when the staff ask how many you are, answer with the number and です. Note that four people is よにん, not よんにん. The same order as with things: "I have two friends" is <b>ともだちが ふたり います</b>.</p>
{{ex:ふたりです。|futari desu|There are two of us.}}
{{ex:あねが ふたり います。|ane ga futari imasu|I have two older sisters.}}
<div class="tip"><b>Most common mistake:</b> putting the number in front of the noun, as in English. <b>ふたつの りんごを ください</b> → <b>りんごを ふたつ ください</b>. And mind the sound change: <b>さんほん</b> → <b>さんぼん</b>. Read the kana first, then the romaji.</div>
`,
    check: [
      ["Two apples, please. =", ["ふたつの りんごを ください", "りんごを ふたつ ください", "りんご ふたつを ください", "りんごを にまい ください"], 1, "Thing を, then the number, then ください; ふたつ is the all-purpose counter."],
      ["Which counter is for pens and bottles?", ["まい", "さつ", "ほん", "にん"], 2, "ほん counts long, thin things."],
      ["How do you say one person?", ["ひとり", "いちにん", "ひとつ", "いっにん"], 0, "One and two people are ひとり and ふたり."]
    ],
    practice: [
      ["mc", "Three pens, please. =", "ペンを さんぼん ください", "ペンを さんほん ください", "ペンを さんまい ください", "ペンを みっつほん ください", "Pens are long, so ほん, which becomes ぼん after さん."],
      ["mc", "two people =", "ふたり", "ににん", "ふたつ", "にほん", "Two people is ふたり."],
      ["mc", "Two tickets, please. =", "きっぷを にまい ください", "きっぷを にほん ください", "きっぷを にさつ ください", "きっぷを ふたり ください", "Tickets are flat, so they take まい."],
      ["mc", "One bottle of beer, please. =", "ビールを いっぽん ください", "ビールを いちほん ください", "ビールを ひとり ください", "ビールを いちまい ください", "A bottle is long: いっぽん, with a small っ."],
      ["mc", "I bought three books. =", "ほんを さんさつ かいました", "ほんを さんぼん かいました", "ほんを さんにん かいました", "ほんを さんまい かいました", "Books take さつ."],
      ["or", "Two apples, please.", "りんご | を | ふたつ | ください", "が", "The object particle を comes first; the number goes right before the verb."],
      ["or", "One coffee, please.", "コーヒー | を | ひとつ | ください", "が", "The object particle を follows コーヒー, and then the number."],
      ["or", "I have two older sisters.", "あね | が | ふたり | います", "を", "With います, the people take the subject particle が; the number comes before the verb."],
      ["fi", "ペンを __ ください。", "Three pens, please.", "さんぼん|みっつ", "さんほん|さんまい|さんにん", "Long things take ほん: さんぼん. みっつ also works."],
      ["fi", "こどもが __ います。", "I have two children.", "ふたり", "ふたつ|ににん|にほん", "Two people is ふたり."],
      ["fi", "りんご__ よっつ ください。", "Four apples, please.", "を", "が|に|で", "ください takes を, and the number comes after it."],
      ["ty", "Two coffees, please.", "コーヒーを ふたつ ください|コーヒーを ふたつ おねがいします", "コーヒー · ふたつ · ください", "コーヒーが", "The object particle を comes after コーヒー; the number goes before ください."],
      ["ty", "Three tickets, please.", "きっぷを さんまい ください|きっぷを さんまい おねがいします", "きっぷ · まい (flat things) · ください", "きっぷが", "The object particle を marks what you want, then the number with まい."],
      ["ty", "I bought two books.", "ほんを にさつ かいました|わたしは ほんを にさつ かいました", "ほん · さつ (books) · かいます · past", "ほんが", "The object particle を marks what you bought; the number goes right before the verb."]
    ]
  },
  {
    id: "te",
    title: "The て form: and then",
    blurb: "Make the て form of any verb and use it to string actions and descriptions together.",
    deck: "Daily routine",
    body: `
<p>English joins actions with "and": "I get up, eat breakfast and go to school." Japanese does not put と ("and") between verbs. Instead, every verb except the last changes into the <b>て form</b>, and only the last verb carries the polite ending and the tense. It is called the て form because it always ends in て or で. You will meet it again in the next two lessons, so it pays to learn it well now.</p>
<h3>ru-verbs and the two irregular verbs</h3>
<p>For ru-verbs, replace ます with て: <b>たべます → たべて</b>, <b>みます → みて</b>, <b>おきます → おきて</b>. The irregular verbs: <b>します → して</b>, <b>きます → きて</b>.</p>
<h3>u-verbs: listen to the sound before ます</h3>
<p>u-verbs change according to the sound just before ます. You cannot always tell a u-verb from a ru-verb by its ます form (みます is a ru-verb, のみます is a u-verb), so keep learning each verb with its group. The table looks long, but it is really one idea: the sound before ます decides whether you get って, んで, いて, いで or して.</p>
<div class="tbl"><table><tr><th>Before ます</th><th>て form</th><th>Examples</th></tr><tr><td class="k">い ち り</td><td class="k">って</td><td class="k">かいます → かって, まちます → まって, かえります → かえって</td></tr><tr><td class="k">み び に</td><td class="k">んで</td><td class="k">のみます → のんで, あそびます → あそんで</td></tr><tr><td class="k">き</td><td class="k">いて</td><td class="k">かきます → かいて, ききます → きいて</td></tr><tr><td class="k">ぎ</td><td class="k">いで</td><td class="k">およぎます → およいで</td></tr><tr><td class="k">し</td><td class="k">して</td><td class="k">はなします → はなして</td></tr></table></div>
<p>One exception to learn by heart: <b>いきます → いって</b>, not いいて.</p>
<h3>Joining actions in order</h3>
<p>Put the actions in the order they happen. The て form means "and then". You can chain as many as you like; just keep the last verb polite.</p>
{{ex:あさ おきて、コーヒーを のんで、でかけます。|asa okite kōhī o nonde dekakemasu|In the morning I get up, drink coffee and head out.}}
{{ex:あさごはんを たべて、がっこうに いきます。|asagohan o tabete gakkō ni ikimasu|I eat breakfast and go to school.}}
{{ex:テレビを みて、ねます。|terebi o mite nemasu|I watch TV and then go to bed.}}
<p>The tense goes only on the last verb. For yesterday, the て forms stay exactly the same and the last verb takes ました. The same goes for a negative or a question: only the end changes.</p>
{{ex:きのうは しぶやに いって、かいものを しました。|kinō wa shibuya ni itte kaimono o shimashita|Yesterday I went to Shibuya and did some shopping.}}
{{ex:うちに かえって、ばんごはんを つくりました。|uchi ni kaette bangohan o tsukurimashita|I went home and made dinner.}}
<h3>Joining adjectives</h3>
<p>Adjectives join the same way. An い-adjective drops い and adds <b>くて</b>; a な-adjective adds <b>で</b>. いい becomes <b>よくて</b>. Japanese has one "and" for nouns, と (<b>すしと てんぷら</b>), and the て form for actions and descriptions.</p>
{{ex:この みせは やすくて、おいしいです。|kono mise wa yasukute oishii desu|This place is cheap and good.}}
{{ex:こうえんは しずかで、きれいでした。|kōen wa shizuka de kirei deshita|The park was quiet and pretty.}}
<div class="tip"><b>Most common mistake:</b> using と for "and" between verbs, as you do between nouns. <b>たべます と のみます</b> → <b>たべて、のみます</b>. And remember the exception: <b>いきて</b> → <b>いって</b>. Read the kana first, then the romaji.</div>
`,
    check: [
      ["What is the て form of のみます (drink)?", ["のみて", "のんで", "のって", "のいて"], 1, "み before ます becomes んで: のんで."],
      ["What is the て form of いきます (go)?", ["いって", "いきて", "いいて", "いんで"], 0, "いきます is the exception: いって."],
      ["I got up and ate breakfast. =", ["おきました、と あさごはんを たべました", "おきますと あさごはんを たべました", "おきて、あさごはんを たべました", "おきて、あさごはんを たべて"], 2, "The first verb takes the て form; the last one carries the past ました."]
    ],
    practice: [
      ["mc", "The て form of たべます:", "たべて", "たべって", "たべんで", "たべいて", "たべます is a ru-verb: replace ます with て."],
      ["mc", "The て form of かいます (buy):", "かって", "かいて", "かんで", "かいって", "い before ます becomes って: かって."],
      ["mc", "The て form of よみます (read):", "よんで", "よみて", "よって", "よいて", "み before ます becomes んで: よんで."],
      ["mc", "The て form of します:", "して", "しって", "しいて", "すて", "します is irregular: して."],
      ["mc", "It's cheap and delicious. =", "やすくて、おいしいです", "やすいと おいしいです", "やすいで、おいしいです", "やすいくて、おいしいです", "An い-adjective drops い and adds くて."],
      ["or", "I eat breakfast and go to school.", "あさごはん | を | たべて | がっこう | に | いきます", "で | たべます", "Going to a place takes the destination particle に; only the last verb has the polite ending."],
      ["or", "I went to Kyoto and saw a temple (おてら).", "きょうと | に | いって | おてら | を | みました", "いきて | が", "いきます has the て form いって, and the object particle を marks what you saw."],
      ["or", "I watch TV and then go to bed.", "テレビ | を | みて | ねます", "みます", "Only the last verb keeps its ます; the first one is in the て form."],
      ["fi", "シャワーを __、ねます。", "I take a shower (あびます) and go to bed.", "あびて", "あびます|あびって|あびんで", "あびます is a ru-verb: あびて."],
      ["fi", "えきで ともだちに __、カフェに いきました。", "I met (あいます) a friend at the station and went to a café.", "あって", "あいて|あんで|あいって", "い before ます becomes って: あって."],
      ["fi", "この みせは やす__、おいしいです。", "This place is cheap and good.", "くて", "いと|いで|いくて", "An い-adjective drops い and adds くて."],
      ["ty", "I go home and eat dinner.", "うちに かえって ばんごはんを たべます|うちへ かえって ばんごはんを たべます|わたしは うちに かえって ばんごはんを たべます|わたしは うちへ かえって ばんごはんを たべます", "うち · かえります · ばんごはん (dinner) · たべます", "うちで", "Going home takes the destination particle に or へ; かえります becomes かえって."],
      ["ty", "I got up at seven and took a shower.", "しちじに おきて シャワーを あびました|ななじに おきて シャワーを あびました|わたしは しちじに おきて シャワーを あびました|わたしは ななじに おきて シャワーを あびました", "しちじ · おきます · シャワー · あびます", "しちじで", "A clock time takes the time particle に."],
      ["ty", "The park is quiet and pretty.", "こうえんは しずかで きれいです", "こうえん · しずか · きれい", "しずかくて", "A な-adjective joins with で: しずかで."]
    ]
  },
  {
    id: "te-requests",
    title: "てください・てもいいですか・てはいけません",
    blurb: "Ask people to do things, ask for permission, and understand what you must not do.",
    deck: "Polite requests and help",
    body: `
<p>English makes a request with "please" and a verb: "Please wait." Japanese uses the て form you just learned, followed by <b>ください</b>. After a thing, ください means "please give me". After a て form, it means "please do". It is polite enough for shop staff, strangers and colleagues, and it is the request you will use most in Japan.</p>
<h3>て ください: please do</h3>
{{ex:ちょっと まって ください。|chotto matte kudasai|Please wait a moment.}}
{{ex:ゆっくり はなして ください。|yukkuri hanashite kudasai|Please speak slowly.}}
<p>Compare the two: <b>みずを ください</b> is "Water, please" (give me some). <b>みずを のんで ください</b> asks someone to drink it.</p>
{{ex:みずを のんで ください。|mizu o nonde kudasai|Please drink some water.}}
<p>To get someone's attention first, start with <b>すみません</b>. It turns a request to a stranger into a polite one, much like "excuse me" before a question in English. Ending with ください is already polite, so you do not need a separate word for "please".</p>
{{ex:すみません、もう いちど いって ください。|sumimasen mō ichido itte kudasai|Excuse me, could you say that again?}}
<h3>ても いいですか: may I?</h3>
<p>To ask permission, add <b>も</b> to the て form, then <b>いいですか</b>. Word for word it is "even if I do it, is it all right?" The answer for yes is <b>はい、どうぞ</b>; for no, you will hear the polite すみません、ちょっと….</p>
{{ex:しゃしんを とっても いいですか。|shashin o totte mo ii desu ka|May I take a picture?}}
{{ex:はい、どうぞ。|hai dōzo|Sure, go ahead.}}
<p>This form asks about what <i>you</i> are going to do. To ask someone else to do something, go back to て ください. Permission is about your action; a request is about theirs.</p>
<h3>ては いけません: you must not</h3>
<p>For rules, add <b>は</b> to the て form, then <b>いけません</b>, roughly "it won't do". You will see it on signs and hear it from teachers. Said to someone's face it sounds strict, so use it for rules, not for advice.</p>
{{ex:ここで たばこを すっては いけません。|koko de tabako o sutte wa ikemasen|You can't smoke here.}}
{{ex:ここで しゃしんを とっては いけません。|koko de shashin o totte wa ikemasen|You can't take pictures here.}}
<p>The three patterns share one shape: the て form, then a separate word. Get the て form right and all three follow.</p>
<div class="tip"><b>Most common mistake:</b> asking permission when you mean to ask for help. To get someone to open the window, <b>まどを あけても いいですか</b> (may I open it?) → <b>まどを あけて ください</b>. Read the kana first, then the romaji.</div>
`,
    check: [
      ["Please wait. =", ["まって ください", "まちて ください", "まつ ください", "まちます ください"], 0, "まちます is a u-verb: ち before ます becomes って, then ください."],
      ["May I sit here? =", ["ここに すわって ください", "ここに すわっても いいですか", "ここに すわっては いけません", "ここに すわりましょうか"], 1, "ても いいですか asks for permission."],
      ["You want a coworker to close (しめます) the door. What do you say?", ["ドアを しめても いいですか", "ドアを しめては いけません", "ドアが しめて ください", "ドアを しめて ください"], 3, "Asking someone else to do something: て form + ください."]
    ],
    practice: [
      ["mc", "Please speak slowly. =", "ゆっくり はなして ください", "ゆっくり はなします ください", "ゆっくり はなしても いいですか", "ゆっくり はなしては いけません", "A request: the て form はなして, then ください."],
      ["mc", "May I take a picture? =", "しゃしんを とっても いいですか", "しゃしんを とって ください", "しゃしんを とっては いけません", "しゃしんが とっても いいですか", "Permission is ても いいですか, with を on the picture."],
      ["mc", "You can't smoke here. =", "ここで たばこを すっては いけません", "ここで たばこを すって ください", "ここに たばこを すっては いけません", "ここで たばこを すっても いいですか", "A rule is ては いけません, and where you do it takes で."],
      ["mc", "Water, please. (asking for some) =", "みずを ください", "みずを のんで ください", "みずで ください", "みずを くださいて", "Asking for a thing: thing を ください, with no て form."],
      ["mc", "May I come in? =", "はいっても いいですか", "はいって ください", "はいては いけません", "はいりても いいですか", "はいります is a u-verb: はいって, then も いいですか."],
      ["or", "Please wait here.", "ここ | で | まって | ください", "に", "Where you wait takes the place-of-action particle で."],
      ["or", "May I take a picture?", "しゃしん | を | とっても | いいですか", "が", "The object particle を marks what you take."],
      ["or", "You must not eat here.", "ここ | で | たべては | いけません", "に", "Where you eat takes the place-of-action particle で."],
      ["fi", "ちょっと __ ください。", "Please wait a moment.", "まって", "まちて|まつ|まちます", "まちます becomes まって before ください."],
      ["fi", "ここ__ すわっても いいですか。", "May I sit here?", "に", "を|が|と", "Where you sit down takes に."],
      ["fi", "ここで しゃしんを とって__ いけません。", "You can't take pictures here.", "は", "も|を|が", "Must not: the て form, then は いけません."],
      ["ty", "Please wait at the station.", "えきで まって ください", "えき · まちます · please", "えきに", "Where you wait takes the place-of-action particle で."],
      ["ty", "May I drink some water?", "みずを のんでも いいですか", "みず · のみます · may I", "みずが", "The object particle を marks what you drink."],
      ["ty", "Please open the window.", "まどを あけて ください", "まど (window) · あけます (open) · please", "あけても", "To ask someone to do something, use the て form + ください."]
    ]
  },
  {
    id: "teiru",
    title: "ている: doing now, and states",
    blurb: "Say what people are doing right now, and talk about states such as being married, living somewhere or knowing someone.",
    deck: "Family and people",
    body: `
<p>English uses "-ing" for an action going on right now: "I'm watching TV." Japanese uses the て form followed by <b>います</b>. The same pattern also describes a state that began earlier and is still true, which English often says in a completely different way.</p>
<h3>Doing it right now</h3>
<p>The て form and います are written as two words, and only います carries the polite ending.</p>
{{ex:いま なにを して いますか。|ima nani o shite imasu ka|What are you doing now?}}
{{ex:テレビを みて います。|terebi o mite imasu|I'm watching TV.}}
{{ex:ははは いま りょうりを して います。|haha wa ima ryōri o shite imasu|My mom is cooking right now.}}
<p>For the past, change only the end: <b>みて いました</b>, "I was watching". <b>いま なにを して いますか</b> is also an everyday way to ask what someone is up to, in a call or a message.</p>
<h3>States: married, living, knowing</h3>
<p>Some verbs describe a change: getting married, moving somewhere, getting to know someone. With て います they describe the state after that change. English says "I'm married", "I live in Tokyo", "I know him", with no "-ing" at all, but Japanese uses the same pattern for all of them.</p>
{{ex:あねは けっこんして います。|ane wa kekkon shite imasu|My older sister is married.}}
{{ex:とうきょうに すんで います。|tōkyō ni sunde imasu|I live in Tokyo.}}
<p><b>すんで います</b> takes the location particle <b>に</b>, just like います on its own.</p>
{{ex:たなかさんを しって いますか。|tanaka-san o shitte imasu ka|Do you know Mr. Tanaka?}}
<p>Jobs work the same way. Where English says "My father works at a bank" for a lasting fact, Japanese usually says he is "working" there.</p>
{{ex:ちちは ぎんこうで はたらいて います。|chichi wa ginkō de hataraite imasu|My father works at a bank.}}
<h3>Watch the ます form on its own</h3>
<p>Without て います, these verbs talk about the change itself, usually in the future. So <b>けっこんします</b> means "I'm going to get married", not "I'm married".</p>
{{ex:らいねん けっこんします。|rainen kekkon shimasu|I'm getting married next year.}}
<h3>"I don't know": しりません</h3>
<p>The negative of しって います is irregular. Say <b>しりません</b>, not しって いません. If the question is about understanding rather than knowing, such as a word or an answer, <b>わかりません</b> ("I don't understand, I can't tell") is often the better choice.</p>
{{ex:いいえ、しりません。|iie shirimasen|No, I don't (know him).}}
<div class="tip"><b>Most common mistake:</b> using the ます form on its own for a state. <b>けっこんします</b> for "I'm married" → <b>けっこんして います</b>. And for "I don't know": <b>しって いません</b> → <b>しりません</b>. Read the kana first, then the romaji.</div>
`,
    check: [
      ["I'm married. =", ["けっこんします", "けっこんして います", "けっこんでした", "けっこんして あります"], 1, "A state that is still true: て form + います."],
      ["Do you know Ms. Sato? — No, I don't. =", ["いいえ、しって いません", "いいえ、しりませんでした", "いいえ、しって ないです", "いいえ、しりません"], 3, "The negative of しって います is しりません."],
      ["My mother is cooking now. =", ["ははは いま りょうりを して います", "ははは いま りょうりを します", "ははは いま りょうりを しました", "ははは いま りょうりを して あります"], 0, "An action going on now: て form + います."]
    ],
    practice: [
      ["mc", "I'm reading a book. =", "ほんを よんで います", "ほんを よみて います", "ほんを よみます います", "ほんを よんで あります", "よみます becomes よんで, then います."],
      ["mc", "I live in Osaka. =", "おおさかに すんで います", "おおさかを すんで います", "おおさかに すみます", "おおさかに すんで あります", "A state: すんで います, with に for the place."],
      ["mc", "Do you know Mr. Sato? =", "さとうさんを しって いますか", "さとうさんを しりますか", "さとうさんに しって いますか", "さとうさんを しって ありますか", "Knowing someone is a state: しって います, with を on the person."],
      ["mc", "No, I don't (know him). =", "いいえ、しりません", "いいえ、しって いません", "いいえ、しりませんでした", "いいえ、しって ありません", "The negative of しって います is しりません."],
      ["mc", "My older sister is married. =", "あねは けっこんして います", "あねは けっこんします", "あねは けっこんして あります", "あねは けっこんでした", "Being married is a state: けっこんして います."],
      ["or", "I'm watching TV.", "テレビ | を | みて | います", "が | みます", "The object particle を marks what you watch; then the て form and います."],
      ["or", "I live in Tokyo.", "とうきょう | に | すんで | います", "を | すみます", "Where someone lives takes the location particle に."],
      ["or", "My younger brother is sleeping.", "おとうと | は | ねて | います", "ねます", "The て form ねて comes first, then います."],
      ["fi", "いま ほんを __ います。", "I'm reading a book now.", "よんで", "よみて|よって|よいて", "み before ます becomes んで: よんで."],
      ["fi", "あには とうきょう__ すんで います。", "My older brother lives in Tokyo.", "に", "を|が|へ", "Where someone lives takes に."],
      ["fi", "すずきさんを しって いますか。いいえ、__。", "Do you know Mr. Suzuki? No, I don't.", "しりません", "しって いません|しりませんでした|しって ありません", "The negative of しって います is しりません."],
      ["ty", "I'm drinking coffee.", "コーヒーを のんで います|わたしは コーヒーを のんで います", "コーヒー · のみます · now", "コーヒーが", "The object particle を marks what you drink."],
      ["ty", "I live in Osaka.", "おおさかに すんで います|わたしは おおさかに すんで います", "おおさか · すみます", "おおさかを", "Where someone lives takes the location particle に."],
      ["ty", "Is Ken married?", "けんさんは けっこんして いますか", "けんさん · けっこんします", "けっこんしますか", "A state uses the て form + います; けっこんしますか asks about the future."]
    ]
  }
];
