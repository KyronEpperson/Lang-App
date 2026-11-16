/* ja-en stage A2: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"過去進行形：was / were + ing形", blurb:"そのときしていたこと。話の背景を作ります。", deck:"気持ち・リアクション", body:`
<p>過去の<b>ある時点でしていたこと</b>を言います。現在進行形の be動詞を過去形（was / were）にするだけです。日本語の「〜していた」にあたりますが、「結婚していた」「知っていた」のような状態には使いません。</p>
{{ex:I was sleeping.|アイ ワズ スリーピング|寝ていました}}{{ex:We were watching TV.|ウィ ワー ワッチング ティーヴィー|私たちはテレビを見ていました}}{{ex:It was raining.|イット ワズ ゥレイニング|雨が降っていました}}
<h3>疑問文</h3>
{{ex:What were you doing?|ワット ワー ユー ドゥーイング?|何をしていましたか？}}{{ex:Were you working at nine?|ワー ユー ワーキング アット ナイン?|9時に仕事をしていましたか？}}
<h3>when と一緒に：している最中に何かが起きた</h3>
<p>続いていた動作は<b>過去進行形</b>、その途中で起きた短い出来事は<b>過去形</b>です。</p>
{{ex:I was cooking when you called.|アイ ワズ クッキング ウェニュー コールド|電話をくれたとき、料理をしていました}}{{ex:I was walking home when it started to rain.|アイ ワズ ウォーキング ホウム ウェニット スターリッド タ ゥレイン|歩いて帰る途中で雨が降り出しました}}
<div class="tip">「〜していた」を過去形だけで言うと意味が変わります。<b>I cooked when you called.</b> は「電話が来てから料理を始めた」という意味になります。</div>`,
check:[["「9時に何をしていましたか？」を英語にすると？",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"you には were、後ろは ing形です。"],["I was cooking ___ you called. 空所に入るのは？",["when","so","or","than"],0,"「〜したとき」は when です。"],["They ___ watching TV. 空所に入るのは？",["was","did","were","are being"],2,"they には were です。"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","I には was です。"],
["mc","「電話をくれたとき、料理をしていました」=","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","続いていた動作は過去進行形、割り込んだ出来事は過去形です。"],
["mc","「何をしていましたか？」=","What were you doing?","What did you doing?","What was you doing?","What were you do?","you には were、後ろは ing形です。"],
["mc","They ___ playing soccer.","were","was","did","are","they には were です。"],
["mc","「雨が降っていました」=","It was raining.","It were raining.","It was rain.","It rained was.","it には was + ing形です。"],
["or","私は本を読んでいました","I was reading a book","read books","読んでいた1冊なので冠詞 a と単数の book です。"],
["or","子どもたちは寝ていました","The kids were sleeping","kid was","何人もいるので複数形の kids と were を使います。"],
["or","私たちはテレビを見ていました","We were watching TV","was","we には were です。"],
["fi","I was __ dinner.","夕食を作っていました","cooking|making","cook|cooked|cooks","was の後ろは ing形です。"],
["fi","What __ you doing?","何をしていましたか？","were","was|did|does","you には were です。"],
["fi","I was sleeping __ you called.","電話をくれたとき、寝ていました","when","so|than|or","「〜したとき」は when です。"],
["ty","私は仕事をしていました","I was working","was · work — ing形","were","I には was + ing形です。"],
["ty","私は映画を見ていました","I was watching a movie","was · watching · movie — 冠詞 a","the","どれか1本の映画なので冠詞 a です。"],
["ty","子どもたちが遊んでいました","The kids were playing|The children were playing","kids · were · playing — 複数形","kid","何人もいるので複数形の kids と were です。"]]},
{ id:"will", title:"will：その場で決めたこと・約束・予測", blurb:"その場で決めたら will、前から決めていたら be going to。", deck:"スモールトーク", body:`
<p><b>will + 動詞の原形</b>です。話すときはほとんど <b>I'll, you'll, it'll</b> と短縮します。否定は <b>won't</b> です。日本語の「〜します」「〜しますね」が、英語では will になることがよくあります。</p>
<h3>その場で決めたとき</h3>
{{ex:I'll have the pasta.|アイル ハヴ ザ パースタ|パスタにします}}{{ex:I'll get it.|アイル ゲリット|私が出ます}}
<h3>約束と申し出</h3>
{{ex:I'll help you.|アイル ヘルピュー|手伝いますよ}}{{ex:I'll call you later.|アイル コーリュー レイラー|あとで電話しますね}}{{ex:I won't be late.|アイ ウォウント ビー レイト|遅れません}}
<h3>予測</h3>
{{ex:It'll be fine.|イルル ビー ファイン|大丈夫ですよ}}{{ex:I think it will rain.|アイ スィンキット ウィル ゥレイン|雨が降ると思います}}
<h3>will と be going to</h3>
<div class="tbl"><table><tr><th></th><th>いつ使う？</th><th>例</th></tr><tr><td class="k">will</td><td>その場で決めたこと、約束</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>前から決めていた予定</td><td>I'm going to visit Okinawa next month.</td></tr></table></div>
<div class="tip">いちばん多い間違い：<b>I will to go.</b>、<b>I'll going.</b> ✕ → <b>I'll go.</b> ○ will の後ろは動詞の原形だけです。</div>`,
check:[["電話が鳴ったとき「私が出ます」は？",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"その場で決めたことは will です。"],["I ___ be late.（遅れません）",["won't","willn't","don't will","not will"],0,"will の否定は won't です。"],["前から決めていた予定を言う文はどれですか？",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"前から決めていた予定は be going to です。"]],
practice:[
["mc","「手伝いますよ」=","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will の後ろは動詞の原形です。"],
["mc","レストランでその場で決めて「パスタにします」=","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","その場で決めたことは will です。"],
["mc","「遅れません」=","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not は won't と短縮します。"],
["mc","「来ますか？」=","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 主語 + 動詞の原形です。"],
["mc","前から決めていた予定を言う文はどれですか？","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","前から決めていた予定は be going to です。"],
["or","あとで電話しますね","I'll call you later","calling","will の後ろは動詞の原形です。"],
["or","コーヒーにします","I'll have a coffee","the coffees","注文する1杯なので冠詞 a です。"],
["or","私がドアを開けます","I'll open the door","a doors","ここにあるそのドアなので冠詞 the です。"],
["fi","I __ call you tomorrow.","明日電話します","will","am|going|do","約束は will で言います。"],
["fi","I __ forget.","忘れません","won't|will not","don't|not|willn't","will の否定は won't です。"],
["fi","__ you help me?","手伝ってくれますか？","Will|Can|Could|Would","Do|Are|Is","頼むときは Will you 〜? を使います。"],
["ty","手伝いますよ","I'll help you|I'll help","I'll · help · you","helping","will の後ろは動詞の原形です。"],
["ty","サラダにします","I'll have a salad|I'll have the salad","I'll have · salad — 冠詞に注意","salads","一つ注文するので冠詞 a（メニューにあるそのサラダなら the）をつけます。"],
["ty","私がドアを閉めます","I'll close the door|I'll get the door","I'll · close · door — 冠詞 the","a","ここにあるそのドアなので冠詞 the です。"]]},
{ id:"perfect", title:"現在完了（経験）：〜したことがあります", blurb:"have + 過去分詞で経験を言います。いつのことか言うなら過去形です。", deck:"旅行（空港・ホテル）", body:`
<p>学校で習った<b>現在完了の経験用法</b>です。<b>have + 過去分詞</b>で「（今までに）〜したことがある」を表します。日本語の「〜たことがある」とほぼ同じ感覚で使えますが、英語では<b>いつ</b>のことかは言いません。</p>
{{ex:I've been to Hawaii.|アイヴ ビン タ ハワイ|ハワイに行ったことがあります}}{{ex:She has visited Japan twice.|シー ハズ ヴィズィリッド ジャパン トゥワイス|彼女は日本に2回来たことがあります}}
<h3>ever と never</h3>
{{ex:Have you ever eaten natto?|ハヴュー エヴァー イートゥン ナートウ?|納豆を食べたことがありますか？}}{{ex:I've never seen it.|アイヴ ネヴァー スィーニット|それは見たことがありません}}
<p>答えは <b>Yes, I have.</b> / <b>No, I haven't.</b> です。</p>
<h3>よく使う過去分詞</h3>
<div class="tbl"><table><tr><th>原形</th><th>過去形</th><th>過去分詞</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>「〜たことがある」と「〜た」</h3>
<p>日本語でも「行ったことがある」（経験）と「去年行った」（過去の出来事）は言い方が違いますね。英語も同じで、<b>last year, yesterday, in 2020</b> のように時点がつくと、現在完了ではなく<b>過去形</b>を使います。</p>
{{ex:I went to Hawaii last year.|アイ ウェント タ ハワイ ラスト イヤー|去年ハワイに行きました}}
<div class="tip">いちばん多い間違い：<b>I've been to Hawaii last year.</b> ✕ → <b>I went to Hawaii last year.</b> ○ 「去年」がついたら過去形です。</div>`,
check:[["「日本に行ったことがありますか？」を英語にすると？",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"経験は Have you ever + 過去分詞です。"],["I ___ never seen that movie. 空所に入るのは？",["am","did","have","was"],2,"have + never + 過去分詞です。"],["正しい文はどれですか？",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"last year のように時点があるときは過去形です。"]],
practice:[
["mc","「私は日本に行ったことがあります」=","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 過去分詞の been です。"],
["mc","see の過去分詞は？","seen","saw","seed","seeing","see – saw – seen です。"],
["mc","「キムチを食べたことがありますか？」=","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","Have you ever + 過去分詞です。"],
["mc","「私はそれを見たことがありません」=","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 過去分詞です。"],
["mc","「去年」があるときの正しい文はどれですか？","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","時点があるときは過去形です。"],
["or","私はその映画を見たことがあります","I've seen the movie","a saw","お互いにわかっているその映画なので冠詞 the です。"],
["or","韓国に2回行ったことがあります","I've been to Korea twice","went","have の後ろは過去分詞の been です。"],
["or","私はヘビを見たことがありません","I've never seen a snake","the snakes","どれか1匹のヘビのことなので冠詞 a です。"],
["fi","Have you ever __ to Busan?","釜山に行ったことがありますか？","been","be|went|go","have の後ろは過去分詞の been です。"],
["fi","I've __ eaten that.","それは食べたことがありません","never","ever|no|not never","「一度もない」は never です。"],
["fi","She __ visited Korea twice.","彼女は韓国を2回訪れたことがあります","has","have|is|did","she には has です。"],
["ty","日本に行ったことがありますか？","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","経験は Have you ever been to 〜? でたずねます。"],
["ty","私はその本を読んだことがあります","I've read the book|I've read that book","I've · read · book — 冠詞 the","a","お互いにわかっているその本なので冠詞 the です。"],
["ty","私は猫を飼ったことがありません","I've never had a cat","never · had · cat — 冠詞 a","the","どれか1匹の猫のことなので冠詞 a です。"]]},
{ id:"modals", title:"have to / must / should / might：義務とアドバイス", blurb:"「〜しなければならない」「〜したほうがいい」「〜かもしれない」。", deck:"病院・緊急時", body:`
<p>義務・アドバイス・可能性を表す四つの言い方です。どれも後ろに<b>動詞の原形</b>が来ます。</p>
<h3>have to：〜しなければならない</h3>
<p>日常会話でいちばんよく使います。主語が he / she のときは <b>has to</b> です。must も「〜しなければならない」ですが、会話では have to のほうが自然です。must は規則や強い気持ちを表すときに使います。</p>
{{ex:I have to work tomorrow.|アイ ハフタ ワーク タマーロウ|明日は仕事をしなければなりません}}{{ex:She has to go now.|シー ハスタ ゴウ ナウ|彼女はもう行かなければなりません}}
<h3>don't have to と must not の違い</h3>
<div class="tbl"><table><tr><th>表現</th><th>意味</th></tr><tr><td class="k">You don't have to come.</td><td>来なくてもいいです（必要がない）</td></tr><tr><td class="k">You must not smoke here.</td><td>ここでタバコを吸ってはいけません（禁止）</td></tr></table></div>
<h3>should：〜したほうがいい</h3>
<p>「〜したほうがいい」は <b>should</b> です。学校で習った <b>had better</b> は「そうしないと困ったことになるよ」という警告に近く、相手によっては脅しのように聞こえます。アドバイスには should を使いましょう。なお、「病院に行く」はふつう see a doctor です。go to the hospital は入院や救急のような大ごとに聞こえます。</p>
{{ex:You should see a doctor.|ユー シュッド スィー ア ダクター|医者に診てもらったほうがいいですよ}}{{ex:You shouldn't worry.|ユー シュドゥント ワーリー|心配しないほうがいいですよ}}{{ex:You'd better hurry.|ユード ベラー ハーリー|急がないとまずいですよ（警告）}}
<h3>might：〜かもしれない</h3>
{{ex:It might rain.|イット マイト ゥレイン|雨が降るかもしれません}}{{ex:I might be late.|アイ マイト ビー レイト|遅れるかもしれません}}
<div class="tip">いちばん多い間違い：<b>You should to go.</b>、<b>It might rains.</b> ✕ → <b>You should go.</b>、<b>It might rain.</b> ○ 助動詞の後ろは原形で、三単現の s もつけません。</div>`,
check:[["「来なくてもいいです」を英語にすると？",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"「必要がない」は don't have to です。"],["アドバイスするとき：You ___ see a doctor.",["might","have","should","must to"],2,"アドバイスは should + 動詞の原形です。"],["She ___ to work today. 空所に入るのは？",["have","must","should","has"],3,"she には has to です。"]],
practice:[
["mc","「私は明日仕事をしなければなりません」=","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 動詞の原形です。"],
["mc","「来なくてもいいです」=","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","「必要がない」は don't have to です。"],
["mc","「医者に診てもらったほうがいいですよ」=","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 動詞の原形です。医者一人なので冠詞 a をつけます。"],
["mc","「雨が降るかもしれません」=","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 動詞の原形です。"],
["mc","「ここでタバコを吸ってはいけません」=","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","禁止は must not です。"],
["or","医者に診てもらったほうがいいですよ","You should see a doctor","the doctors","誰か一人の医者なので冠詞 a です。"],
["or","私はもう行かなければなりません","I have to go now","going","have to の後ろは動詞の原形です。"],
["or","切符を買わなければなりません","You have to buy a ticket","the tickets","切符1枚なので冠詞 a と単数の ticket です。"],
["fi","She __ to study tonight.","彼女は今夜勉強しなければなりません","has","have|must|should","she には has to です。"],
["fi","You __ have to pay.","お金は払わなくていいです","don't|do not","must not|not|aren't","「必要がない」は don't have to です。"],
["fi","It __ rain tomorrow.","明日は雨が降るかもしれません","might|may|could","must to|has to|should to","可能性は might です。"],
["ty","私は仕事をしなければなりません","I have to work|I must work|I need to work","have to · work","should","義務は have to です。"],
["ty","医者に診てもらったほうがいいですよ","You should see a doctor|You should go to a doctor","should · see · doctor — 冠詞 a","the","誰か一人の医者なので冠詞 a です。"],
["ty","切符を買わなければなりません","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — 冠詞 a","the","切符1枚なので冠詞 a です。"]]},
{ id:"to-ing", title:"不定詞と動名詞：want to と enjoy 〜ing", blurb:"want の後ろは to、enjoy の後ろは ing形。動詞ごとに決まっています。", deck:"スモールトーク", body:`
<p>日本語では「〜すること」「〜するのが」で済みますが、英語では動詞を二つ続けるとき、前の動詞によって後ろが<b>不定詞（to + 動詞の原形）</b>か<b>動名詞（ing形）</b>かが決まっています。よく使う動詞からセットで覚えましょう。</p>
<div class="tbl"><table><tr><th>後ろに to</th><th>後ろに ing形</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + 動詞：これからすること</h3>
{{ex:I want to go home.|アイ ワナ ゴウ ホウム|家に帰りたいです}}{{ex:I need to study.|アイ ニード タ スタディー|勉強しなければなりません}}{{ex:I'd like to order.|アイド ライク トゥ オーダー|注文したいです}}{{ex:I decided to learn English.|アイ ディサイディッド タ ラーン イングリッシュ|英語を習うことにしました}}
<h3>ing形：していること、楽しんでいること</h3>
{{ex:I enjoy cooking.|アイ エンジョイ クッキング|料理をするのが楽しいです}}{{ex:I finished working.|アイ フィニッシュト ワーキング|仕事が終わりました}}{{ex:I don't mind waiting.|アイ ドウント マインド ウェイリング|待つのはかまいません}}
<h3>どちらも使える動詞</h3>
<p>like, love, start は to と ing形のどちらも使えます。</p>
<div class="tip">いちばん多い間違い：<b>I want go.</b>、<b>I enjoy to cook.</b> ✕ → <b>I want to go.</b>、<b>I enjoy cooking.</b> ○</div>`,
check:[["I want ___ home. 空所に入るのは？",["go","going","to go","to going"],2,"want の後ろは to + 動詞の原形です。"],["I enjoy ___ movies. 空所に入るのは？",["watching","to watch","watch","to watching"],0,"enjoy の後ろは ing形です。"],["「注文したいです」を英語にすると？",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like の後ろは to + 動詞の原形です。"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need の後ろは to + 動詞の原形です。"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy の後ろは ing形です。"],
["mc","「注文したいです」=","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like の後ろは to + 動詞の原形です。"],
["mc","「仕事が終わりました」=","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish の後ろは ing形です。"],
["mc","「待つのはかまいません」=","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind の後ろは ing形です。"],
["or","私は車を買いたいです","I want to buy a car","the buying","want の後ろは to。車1台なので冠詞 a です。"],
["or","私は映画を見るのを楽しんでいます","I enjoy watching movies","movie watch","enjoy の後ろは ing形。映画全般なので複数形の movies です。"],
["or","私は休む必要があります","I need to rest","resting","need の後ろは to + 動詞の原形です。"],
["fi","I want __ a coffee.","コーヒーを1杯飲みたいです","to have|to drink|to get","have|having|drinking","want の後ろは to + 動詞の原形です。"],
["fi","She enjoys __.","彼女は水泳を楽しんでいます","swimming","to swim|swim|swims","enjoy の後ろは ing形です。"],
["fi","I decided __ English.","英語を勉強することにしました","to study|to learn","study|studying|studied","decide の後ろは to + 動詞の原形です。"],
["ty","私は家に帰りたいです","I want to go home","want to · go · home — 冠詞なし","the","want の後ろは to。home の前には冠詞をつけません。"],
["ty","私は本を読むのを楽しんでいます","I enjoy reading books|I enjoy reading","enjoy · read · book — 複数形","book","enjoy の後ろは ing形。本全般なので複数形の books です。"],
["ty","注文したいです","I'd like to order|I want to order","I'd like · to · order","ordering","would like の後ろは to + 動詞の原形です。"]]},
{ id:"articles-2", title:"the の応用：一つしかないものと冠詞なしの複数形", blurb:"楽器には the、スポーツにはなし。国名や「〜というもの全般」まで。", deck:"旅行（空港・ホテル）", body:`
<p>冠詞の応用編です。ルールで決まっているケースをまとめて整理しましょう。日本語にない冠詞は、理屈よりも「この型なら the」とパターンで覚えるのが近道です。</p>
<h3>the をつける場合</h3>
<div class="tbl"><table><tr><th>場合</th><th>例</th></tr><tr><td>世界に一つしかないもの</td><td class="k">the sun, the internet</td></tr><tr><td>楽器</td><td class="k">play the piano</td></tr><tr><td>川・海</td><td class="k">the Sumida River, the Pacific</td></tr><tr><td>複数形・連合の国名</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|アイ プレイ ザ ピアノウ|私はピアノを弾きます}}{{ex:She's from the United States.|シーズ フラム ザ ユナイリッド ステイツ|彼女はアメリカ出身です}}{{ex:I found it on the internet.|アイ ファウンディット オン ズィ イナーネット|インターネットで見つけました}}
<h3>冠詞をつけない場合</h3>
<div class="tbl"><table><tr><th>場合</th><th>例</th></tr><tr><td>ほとんどの国・都市</td><td class="k">Japan, Tokyo</td></tr><tr><td>スポーツ・言語・食事</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>「〜というもの」全般</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Japan.|アイ リヴ イン ジャパン|私は日本に住んでいます}}{{ex:I play soccer.|アイ プレイ サーカー|私はサッカーをします}}{{ex:Dogs are cute.|ダーグズ アー キュート|犬はかわいいです}}
<h3>全般と特定のもの</h3>
{{ex:I like dogs.|アイ ライク ダーグズ|犬が好きです（犬全般）}}{{ex:The dogs in this park are cute.|ザ ダーグズ イン ズィス パーク アー キュート|この公園の犬たちはかわいいです（その犬たち）}}
<div class="tip">「全般」を言うときは the をつけずに複数形にします。<b>I like the dogs.</b> は「その犬たちが好きです」という意味になります。なお、「犬が好き」の「が」や「犬は」の「は」は the とは関係ありません。</div>`,
check:[["I play ___ soccer. 空所に入るのは？",["a","the","an","（なし）"],3,"スポーツ名には冠詞をつけません。"],["She's from ___ United States. 空所に入るのは？",["the","a","an","（なし）"],0,"United States の前には the をつけます。"],["「犬はかわいいです」（犬全般）を英語にすると？",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"全般を言うときは冠詞なしの複数形です。"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","楽器の前には the をつけます。"],
["mc","「私は韓国に住んでいます」=","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","ほとんどの国名には冠詞がつきません。"],
["mc","「私はサッカーをします」=","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","スポーツ名には冠詞がつきません。"],
["mc","「猫はかわいいです」（猫全般）=","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","全般を言うときは冠詞なしの複数形です。"],
["mc","She's from ___ United States.","the","a","an","some","United States の前には the をつけます。"],
["or","私はピアノを弾きます","I play the piano","a pianos","楽器の前には冠詞 the をつけます。"],
["or","犬はかわいいです","Dogs are cute","The dog","犬全般を言うときは冠詞なしの複数形 dogs です。"],
["or","私はインターネットで見つけました","I found it on the internet","a","一つしかない internet には冠詞 the をつけます。"],
["fi","I speak __.","私は英語を話します","English","the English|an English|a English","言語名には冠詞がつきません。"],
["fi","The sun rises in __ east.","太陽は東から昇ります","the","a|an|some","方角の前には the をつけます。"],
["fi","I love __.","私は音楽が大好きです","music","the musics|a music|musics","「音楽全般」は冠詞なしです。数えられないので複数の s もつきません。"],
["ty","私はアメリカ出身です","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — 冠詞 the","a","United States の前には冠詞 the をつけます。"],
["ty","私はギターを弾きます","I play the guitar|I play guitar","play · guitar — 冠詞 the","a","楽器の前には冠詞 the をつけます。"],
["ty","猫はかわいいです","Cats are cute","cat — 冠詞なしの複数形","The cat","全般を言うときは冠詞なしの複数形 cats です。"]]},
{ id:"first-conditional", title:"もし〜なら（現実の条件）：If + 現在形、will", blurb:"「〜したら〜します」。if の後ろには will を使いません。", deck:"仕事・メール", body:`
<p>実際に起こりうることを言います。<b>If + 現在形, will + 動詞の原形</b>です。意味は未来でも、if のほうは<b>現在形</b>にします。日本語でも「明日雨が降るだろうなら」とは言いませんね。英語も if の中では will を使いません。</p>
{{ex:If it rains, I'll stay home.|イフィット ゥレインズ, アイル ステイ ホウム|雨が降ったら家にいます}}{{ex:If you don't hurry, you'll miss the bus.|イフュー ドウント ハーリー, ユール ミス ザ バス|急がないとバスに乗り遅れますよ}}
<h3>順番の入れ替え</h3>
<p>if を後ろに回すと、カンマはいりません。</p>
{{ex:I'll help you if I have time.|アイル ヘルピュー イフ アイ ハヴ タイム|時間があれば手伝いますよ}}
<h3>命令文と一緒に</h3>
{{ex:If you're late, call me.|イフ ユア レイト, コール ミー|遅れるときは電話してください}}{{ex:If you need help, let me know.|イフュー ニード ヘルプ, レット ミー ノウ|手伝いが必要なら言ってください}}
<h3>when：〜したら（確実なこと）</h3>
<p>起こることが確実なら、if ではなく when です。ここでも will は使いません。</p>
{{ex:When I get home, I'll call you.|ウェン アイ ゲット ホウム, アイル コーリュー|家に着いたら電話しますね}}
<div class="tip">いちばん多い間違い：<b>If it will rain, …</b> ✕ → <b>If it rains, …</b> ○</div>`,
check:[["If it ___ tomorrow, I'll stay home. 空所に入るのは？",["will rain","rains","rained","raining"],1,"if の後ろは現在形です。"],["If you study, you ___ pass. 空所に入るのは？",["pass will","passing","will pass","passed"],2,"結果のほうは will + 動詞の原形です。"],["正しい文はどれですか？",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if のほうは現在形、結果のほうは will です。"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if の後ろは現在形です。"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","命令文は動詞の原形で始めます。"],
["mc","「時間があれば手伝いますよ」=","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if の後ろには will を使いません。"],
["mc","「急がないとバスに乗り遅れますよ」=","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if のほうは現在形の否定 don't です。"],
["mc","「家に着いたら電話しますね」=","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when の後ろも現在形です。"],
["or","雨が降ったら家にいます","If it rains I'll stay home","will the","if の後ろは現在形です。home の前には冠詞がつきません。"],
["or","時間があれば電話してください","If you have time call me","will","if の後ろには will を使いません。"],
["or","バスに乗り遅れますよ","You'll miss the bus","a buses","乗るはずだったそのバスなので冠詞 the です。"],
["fi","If it __ tomorrow, we'll cancel.","明日雨が降ったら中止します","rains","will rain|rained|raining","if の後ろは現在形です。"],
["fi","If you study, you __ pass.","勉強すれば合格しますよ","will|can|might","are|did|passing","結果のほうは will + 動詞の原形です。"],
["fi","__ you need help, call me.","手伝いが必要なら電話してください","If|When","So|But|Because","「〜なら」は if です。"],
["ty","時間があれば手伝いますよ","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if の後ろには will を使いません。"],
["ty","雨が降ったらタクシーに乗ります","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 冠詞 a","the","どれか1台のタクシーなので冠詞 a です。"],
["ty","バスに乗り遅れますよ","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — 冠詞 the","a","乗るはずだったそのバスなので冠詞 the です。"]]},
{ id:"relative", title:"関係代名詞 who / that：名詞を後ろから説明する", blurb:"日本語は前から説明し、英語は後ろから説明します。", deck:"買い物・会計", body:`
<p>日本語では「<b>大阪に住んでいる</b>友達」「<b>私が買った</b>本」のように、説明が名詞の<b>前</b>に来ます。しかも、説明と名詞の間につなぎの言葉はいりません。英語は逆で、まず名詞を言い、<b>後ろから</b>説明します。そして名詞と説明の間に<b>関係代名詞</b>（who / that）を入れます：a friend <b>who lives in Osaka</b>、the book <b>that I bought</b>。</p>
<h3>人には who</h3>
{{ex:I have a friend who lives in Osaka.|アイ ハヴァ フレンド フー リヴズ イン オウサーカ|大阪に住んでいる友達がいます}}{{ex:the man who lives next door|ザ マン フー リヴズ ネクスト ドア|隣に住んでいる男性}}
<p>この who は省略できません。<b>I have a friend lives in Osaka.</b> ✕ → <b>I have a friend who lives in Osaka.</b> ○</p>
<h3>物には that</h3>
{{ex:the book that I bought|ザ ブック ザット アイ ボート|私が買った本}}{{ex:This is the phone that I want.|ズィス イズ ザ フォウン ザット アイ ワント|これが私の欲しいスマホです}}
<h3>that の省略</h3>
<p>後ろにすぐ「主語 + 動詞」が続くときは、that を省略できます。会話ではほとんど省略します。</p>
{{ex:The movie we saw was great.|ザ ムーヴィー ウィ ソー ワズ グレイト|私たちが見た映画はすごくよかったです}}
<h3>場所には where</h3>
{{ex:the cafe where we met|ザ キャフェイ ウェア ウィ メット|私たちが出会ったカフェ}}
<p>関係代名詞を避けて二つの文に分けても通じます（I have a friend. She lives in Osaka.）。でも、一文で言えると表現がぐっと自然になります。</p>
<div class="tip">語順だけ覚えましょう：<b>名詞が先、説明は後ろ。</b>「私が買った本」→ the book (that) I bought。what は使いません：<b>the book what I bought</b> ✕</div>`,
check:[["I have a friend ___ lives in Busan. 空所に入るのは？",["which","who","what","he"],1,"人を説明するときは who です。"],["「私が買った本」を英語にすると？",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"名詞を先に言い、that で説明します。"],["正しい文はどれですか？",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"説明は名詞の後ろに来ます。"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","人を説明するときは who です。"],
["mc","「私が買った本」=","the book that I bought","the I bought book","the book what I bought","the bought I book","名詞が先、説明は後ろです。"],
["mc","「隣に住んでいる男性」=","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","人は who で説明します。"],
["mc","This is the phone ___ I want.","that","who","what","it","物は that で説明します。"],
["mc","「私たちが見た映画」=","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that は省略できます。"],
["or","これは私が買った本です","This is the book I bought","a what","私が買ったまさにその本なので冠詞 the です。"],
["or","料理をする友達がいます","I have a friend who cooks","the which","初めて話題にする友達一人なので冠詞 a です。"],
["or","私たちが見た映画はよかったです","The movie we saw was great","A movies","私たちが見たまさにその映画なので冠詞 the です。"],
["fi","the man __ lives here","ここに住んでいる男性","who|that","what|he|which","人は who で説明します。"],
["fi","the book __ I read","私が読んだ本","that|which","who|what|it","物は that で説明します。"],
["fi","the cafe __ we met","私たちが出会ったカフェ","where","who|what|it","場所は where で説明します。"],
["ty","これは私が買った本です","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 冠詞 the","a","私が買ったまさにその本なので冠詞 the です。"],
["ty","韓国語を話す友達がいます","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — 冠詞 a","the","初めて話題にする友達一人なので冠詞 a です。"],
["ty","私たちが見た映画はよかったです","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","名詞が先、説明は後ろです。"]]},
];
