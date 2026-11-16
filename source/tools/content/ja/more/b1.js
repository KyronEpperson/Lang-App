/* ja-en stage B1: new lessons. English side shared with ko-en (parity.js) except the ja-only lesson articles-3
   (deviations.json extraLessons; placed after passive by profile.json). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"現在完了（継続）：for と since、ずっと〜しています", blurb:"過去に始まって今も続いていること。for + 期間、since + 始まった時点。", deck:"自己紹介", body:`
<p>学校で習った<b>現在完了の継続用法</b>です。<b>過去に始まって今も続いていること</b>を言います。日本語では「東京に5年住んでいます」のように「〜ている」で言うので、英語でも現在形や現在進行形を使いたくなりますが、期間を言うときは <b>have + 過去分詞</b>です。</p>
{{ex:I've lived in Tokyo for five years.|アイヴ リヴド イン トウキオウ フォー ファイヴ イヤーズ|東京に住んで5年になります}}{{ex:I've worked here since 2020.|アイヴ ワークト ヒア スィンス トゥウェニー トゥウェニー|2020年からここで働いています}}{{ex:I've known her for a long time.|アイヴ ノウン ハー フォーラ ローング タイム|彼女とは長い付き合いです}}
<h3>for と since</h3>
<div class="tbl"><table><tr><th>for + 期間</th><th>since + 始まった時点</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long 〜?</h3>
{{ex:How long have you been here?|ハウ ローング ハヴュー ビン ヒア?|ここにどのくらいいますか？}}{{ex:How long have you studied English?|ハウ ローング ハヴュー スタディード イングリッシュ?|英語を勉強してどのくらいになりますか？}}
<h3>just, already, yet（完了用法）</h3>
{{ex:I've just finished.|アイヴ ジャスト フィニッシュト|ちょうど終わったところです}}{{ex:I've already seen it.|アイヴ オールレディー スィーニット|もう見ました}}{{ex:Have you eaten yet?|ハヴュー イートゥン イェット?|もう食べましたか？}}
<p>アメリカ英語では「もう食べた？」を Did you eat yet? と過去形で言うこともありますが、まずは現在完了の形を覚えましょう。</p>
<div class="tip">いちばん多い間違い：「〜ている」につられて現在形や進行形で言うこと。<b>I live here for five years.</b> / <b>I'm living here for five years.</b> ✕ → <b>I've lived here for five years.</b> ○</div>`,
check:[["I've lived here ___ three years. 空所に入るのは？",["since","for","during","from"],1,"期間の前は for です。"],["I've worked here ___ 2020. 空所に入るのは？",["for","in","since","at"],2,"始まった時点の前は since です。"],["「ここにどのくらいいますか？」を英語にすると？",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 過去分詞です。"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","期間の前は for です。"],
["mc","She's lived here ___ 2019.","since","for","in","at","始まった時点の前は since です。"],
["mc","「ここにどのくらいいますか？」=","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 過去分詞です。"],
["mc","「ちょうど終わったところです」=","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 過去分詞です。"],
["mc","「もう食べましたか？」=","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","疑問文の「もう」は yet です。"],
["or","私はここに5年住んでいます","I've lived here for five years","year since","5年なので複数形の years です。期間の前は for です。"],
["or","私はその映画をもう見ました","I've already seen the movie","a saw","お互いにわかっているその映画なので冠詞 the です。"],
["or","どのくらい待ちましたか？","How long have you waited","did","How long have you + 過去分詞です。"],
["fi","I've worked here __ two years.","ここで働いて2年になります","for","since|from|during","期間の前は for です。"],
["fi","I've been here __ Monday.","月曜日からここにいます","since","for|at|during","始まった時点の前は since です。"],
["fi","Have you finished __?","もう終わりましたか？","yet|already","ever|never|since","疑問文の「もう」は yet です。"],
["ty","ここに住んで3年になります（have + 過去分詞で）","I've lived here for three years","I've lived · here · for · three · year — 複数形","year","3年なので複数形の years です。"],
["ty","ここにどのくらいいますか？","How long have you been here","how long · have you · been here","are","How long have you + 過去分詞です。"],
["ty","私はその本をもう読みました","I've already read the book|I've read the book already|I already read the book","already · read · book — 冠詞 the","a","お互いにわかっているその本なので冠詞 the です。"]]},
{ id:"narrative", title:"物語の時制：過去形・過去進行形・過去完了形", blurb:"背景は過去進行形、出来事は過去形、それより前のことは had + 過去分詞。", deck:"映画・ドラマ・スラング", body:`
<p>あったことを話すときは、三つの時制を組み合わせます。それぞれ役割が違います。日本語は「〜していた」「〜した」「もう〜していた」をあまり意識せずに使い分けますが、英語では形ではっきり区別します。</p>
<div class="tbl"><table><tr><th>時制</th><th>役割</th><th>例</th></tr><tr><td class="k">過去進行形</td><td>背景、していたこと</td><td>I was walking home.</td></tr><tr><td class="k">過去形</td><td>起きた出来事</td><td>I saw an old friend.</td></tr><tr><td class="k">過去完了形</td><td>それより前に起きたこと</td><td>He had moved to Osaka.</td></tr></table></div>
<h3>背景 + 出来事</h3>
{{ex:I was walking home when I saw an old friend.|アイ ワズ ウォーキング ホウム ウェン アイ ソー アノウルド フレンド|歩いて帰る途中で、昔の友達に会いました}}
<h3>過去完了形：had + 過去分詞</h3>
<p>過去のある時点より<b>さらに前</b>に起きたことです。日本語の「着いたときには、もう始まっていた」の「もう〜ていた」にあたります。</p>
{{ex:When I arrived, the movie had already started.|ウェン アイ アライヴド, ザ ムーヴィー ハド オールレディー スターリッド|着いたときには、映画はもう始まっていました}}{{ex:I had never seen snow before.|アイ ハド ネヴァー スィーン スノウ ビフォー|それまで雪を見たことがありませんでした}}
<h3>順番を表す言葉</h3>
<p>first（まず）、then（それから）、after that（そのあと）、finally（最後に）でつなげます。</p>
{{ex:First we ate dinner. Then we watched a movie.|ファースト ウィ エイト ディナー. ゼン ウィ ワッチタ ムーヴィー|まず夕食を食べました。それから映画を見ました}}
<div class="tip">then（それから）と than（〜より）は発音が似ていますが、別の単語です。物語には <b>then</b> を使います。</div>`,
check:[["When I arrived, the train ___ already left. 空所に入るのは？",["has","was","had","did"],2,"それより前に起きたことは had + 過去分詞です。"],["I ___ walking home when it started to rain. 空所に入るのは？",["was","had","did","have"],0,"していたこと（背景）は過去進行形です。"],["それよりさらに前に起きたことを表す文はどれですか？",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 過去分詞が過去完了形です。"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","それより前に起きたことは had + 過去分詞です。"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","していたことは過去進行形です。"],
["mc","「着いたとき、電車はもう出ていました」=","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","それより前に起きたことには had + 過去分詞を使います。"],
["mc","話をつなぐときの「それから」=","then","than","that","them","then は「それから」、than は「〜より」です。"],
["mc","「それまで雪を見たことがありませんでした」=","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 過去分詞です。"],
["or","電車はもう出てしまっていました","The train had already left","a has","乗るはずだったその電車なので冠詞 the です。"],
["or","私は昔の友達に会いました","I met an old friend","a friends","old は母音の音で始まるので冠詞 an です。"],
["or","私は歩いて家に帰る途中でした","I was walking home","had","背景は過去進行形です。"],
["fi","I was sleeping __ you called.","電話をくれたとき、寝ていました","when","than|so|had","「〜したとき」は when です。"],
["fi","The bus had already __.","バスはもう出てしまっていました","left|gone","leave|leaving|leaves","had の後ろは過去分詞です。"],
["fi","First we ate. __ we watched a movie.","まず食べました。それから映画を見ました","Then|After that|Next","Than|Because|When","「それから」は then です。"],
["ty","映画はもう始まっていました","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 冠詞 the","a","見るはずだったその映画なので冠詞 the です。"],
["ty","私は昔の友達に会いました","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 冠詞 an","a","old は母音の音で始まるので冠詞 an です。"],
["ty","私は歩いて家に帰る途中でした","I was walking home","was · walking · home","had","背景は過去進行形で言います。"]]},
{ id:"conditionals", title:"仮定法過去・仮定法過去完了：仮定と後悔", blurb:"今の事実と違うなら would、過去の後悔は would have。", deck:"気持ち・リアクション", body:`
<p>事実とは違うことを想像するときに使います。日本語の「〜なら〜するのに」「〜していたら〜したのに」です。学校で習った<b>仮定法</b>です。</p>
<h3>仮定法過去：今の事実と違う仮定</h3>
<p><b>If + 過去形, would + 動詞の原形</b>です。過去形を使いますが、意味は<b>今</b>のことです。</p>
{{ex:If I had time, I would travel.|イフ アイ ハド タイム, アイ ウッド トゥラヴェル|時間があれば旅行するのに}}{{ex:If I were you, I'd take it.|イフ アイ ワー ユー, アイド テイキット|私だったら引き受けますね}}{{ex:What would you do?|ワット ウジュー ドゥー?|もしそうなったら、どうしますか？}}
<h3>仮定法過去完了：過去の事実と違う仮定</h3>
<p><b>If + had + 過去分詞, would have + 過去分詞</b>です。</p>
{{ex:If I had studied, I would have passed.|イフ アイ ハド スタディード, アイ ウッダヴ パスト|勉強していたら合格したのに}}
<h3>後悔：should have, I wish</h3>
{{ex:I should have called.|アイ シュッダヴ コールド|電話すればよかった}}{{ex:I wish I had more time.|アイ ウィッシュ アイ ハド モア タイム|もっと時間があればいいのに}}
<div class="tbl"><table><tr><th>種類</th><th>if のほう</th><th>結果のほう</th></tr><tr><td>条件を表す if（現実の条件）</td><td class="k">現在形</td><td class="k">will</td></tr><tr><td>仮定法過去（今の事実と違う）</td><td class="k">過去形</td><td class="k">would</td></tr><tr><td>仮定法過去完了（過去の事実と違う）</td><td class="k">had + 過去分詞</td><td class="k">would have + 過去分詞</td></tr></table></div>
<div class="tip">If I were you は決まった言い方です。I の後ろでも was ではなく <b>were</b> を使います（会話では was も聞かれます）。</div>`,
check:[["If I ___ rich, I would travel. 空所に入るのは？",["am","were","will be","would be"],1,"今の事実と違うなら過去形（were）です。"],["If I had studied, I ___ passed. 空所に入るのは？",["would","will have","would have","had"],2,"過去の事実と違うなら would have + 過去分詞です。"],["「電話すればよかった」を英語にすると？",["I should have called.","I should called.","I should had call.","I would call should."],0,"後悔は should have + 過去分詞です。"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","今の事実と違うなら if のほうは過去形です。"],
["mc","「私だったら、それを買いますね」=","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd 〜 は決まった言い方です。"],
["mc","If I had known, I ___ come.","would have","would","will have","had","過去の事実と違うなら would have + 過去分詞です。"],
["mc","「電話すればよかった」=","I should have called.","I should called.","I should had call.","I must called.","後悔は should have + 過去分詞です。"],
["mc","「もしそうなったら、どうしますか？」=","What would you do?","What will you did?","What would you did?","What you would do?","仮定は would + 動詞の原形です。"],
["or","時間があれば旅行するのに","If I had time I'd travel","have will","今の事実と違うので過去形の had と would を使います。"],
["or","私ならタクシーに乗りますね","I'd take a taxi","the taxis","どれか1台のタクシーなので冠詞 a です。"],
["or","切符を買っておけばよかった","I should have bought a ticket","the buy","切符1枚なので冠詞 a です。"],
["fi","If I __ you, I'd go.","私だったら行きますね","were|was","am|be|would be","If I were you は決まった言い方です。"],
["fi","I would __ helped.","手伝ったのに","have","had|has|having","would have + 過去分詞です。"],
["fi","I wish I __ more time.","もっと時間があればいいのに","had","have|would have|will have","I wish の後ろは過去形です。"],
["ty","私だったら行きますね（アドバイスとして）","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd 〜 です。"],
["ty","車があればいいのに","I wish I had a car","I wish · had · car — 冠詞 a","the","どれか1台の車なので冠詞 a です。"],
["ty","タクシーに乗ればよかった","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — 冠詞 a","the","どれか1台のタクシーなので冠詞 a です。"]]},
{ id:"passive", title:"受け身：be動詞 + 過去分詞", blurb:"誰がしたかより、何が起きたかが大事なとき。", deck:"仕事・メール", body:`
<p>「〜される」と言うときに使います。形は <b>be動詞 + 過去分詞</b>です。誰がしたのかわからないとき、または重要でないときに自然です。</p>
{{ex:My phone was stolen.|マイ フォウン ワズ ストウルン|スマホが盗まれました}}{{ex:This was made in Japan.|ズィス ワズ メイド イン ジャパン|これは日本製です}}{{ex:The meeting was canceled.|ザ ミーリング ワズ キャンセルド|会議が中止になりました}}
<h3>迷惑の受身に注意</h3>
<p>日本語では「財布を盗まれた」「雨に降られた」のように、<b>被害を受けた人</b>を主語にして受け身を作れます（迷惑の受身）。英語の受け身で主語になれるのは、<b>動作を受けたもの</b>だけです。盗まれたのは私ではなく財布なので、財布を主語にします。</p>
<div class="tbl"><table><tr><th>✕</th><th>○</th></tr><tr><td class="k">I was stolen my wallet.</td><td class="k">My wallet was stolen.</td></tr><tr><td class="k">I was rained.</td><td class="k">I got caught in the rain.</td></tr></table></div>
{{ex:My wallet was stolen.|マイ ワーレット ワズ ストウルン|財布を盗まれました}}{{ex:I had my wallet stolen.|アイ ハド マイ ワーレット ストウルン|財布を盗まれました（被害にあったことを強調）}}{{ex:I got caught in the rain.|アイ ガット コート イン ザ ゥレイン|雨に降られました}}
<h3>現在形：いつもそうであること</h3>
{{ex:English is spoken here.|イングリッシュ イズ スポウクン ヒア|ここでは英語が使われています}}{{ex:Breakfast is served at seven.|ブレックファスト イズ サーヴド アット セヴン|朝食は7時からです}}
<h3>誰がしたかは by</h3>
{{ex:It was written by Haruki Murakami.|イット ワズ ゥリトゥン バイ ハルーキ ムラカーミ|村上春樹が書いたものです}}
<h3>能動態と受け身</h3>
<div class="tbl"><table><tr><th>能動態</th><th>受け身</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">いちばん多い間違い：be動詞を落とすこと。<b>My phone stolen.</b> ✕ → <b>My phone was stolen.</b> ○</div>`,
check:[["My bag ___ stolen yesterday. 空所に入るのは？",["is","was","did","has"],1,"昨日のことなので was + 過去分詞です。"],["This phone ___ made in Korea. 空所に入るのは？",["was","did","has","does"],0,"受け身は be動詞 + 過去分詞です。"],["「会議が中止になりました」を英語にすると？",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be動詞 + 過去分詞の canceled です。"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","受け身は be動詞 + 過去分詞です。"],
["mc","「これは韓国で作られました」=","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be動詞 + 過去分詞の made です。"],
["mc","「ここでは英語が使われています」（受け身）=","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","いつもそうであることは is + 過去分詞です。"],
["mc","「会議が中止になりました」=","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be動詞 + 過去分詞です。"],
["mc","「朝食は7時に出ます」=","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","食事名には冠詞がつきません。形は is + 過去分詞です。"],
["or","かばんを盗まれました","My bag was stolen","stole","主語は「私」ではなく盗まれた bag です。be動詞の後ろは過去分詞の stolen です。"],
["or","会議が中止になりました","The meeting was canceled","A meetings","お互いにわかっているその会議なので冠詞 the です。"],
["or","窓が割れていました","The window was broken","a windows","ここにあるその窓なので冠詞 the です。"],
["fi","This was __ in Korea.","これは韓国で作られました","made","make|making|makes","be動詞の後ろは過去分詞です。"],
["fi","The room __ cleaned every day.","部屋は毎日掃除されます","is|gets","does|has|did","いつもそうであることは is + 過去分詞です。"],
["fi","It was written __ Han Kang.","ハン・ガンが書いたものです","by","from|of|with","誰がしたかは by で言います。"],
["ty","スマホを盗まれました","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","主語は盗まれた phone です（I was stolen ✕）。be動詞 + 過去分詞の stolen です。"],
["ty","その会議は中止になりました","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — 冠詞 the","a","お互いにわかっているその会議なので冠詞 the です。"],
["ty","ドアに鍵がかかっていました","The door was locked","the door · was · locked — 冠詞 the","a","ここにあるそのドアなので冠詞 the です。"]]},
{ id:"reported", title:"間接話法：人の言ったことを伝える", blurb:"She said she was tired. 時制を一つ過去にずらし、tell の後ろには人。", deck:"電話・メッセージ略語", body:`
<p>ほかの人が言ったことを伝えるときに使います。日本語の「〜と言っていました」です。日本語では「疲れていると言っていた」のように元の時制のまま伝えられますが、英語では伝える内容の<b>時制を一つ過去にずらします</b>。</p>
<div class="tbl"><table><tr><th>元の言葉</th><th>伝えるとき</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|シー セッド シー ワズ タイアード|彼女は疲れていると言っていました}}{{ex:He said he would come.|ヒー セッド ヒー ウッド カム|彼は来ると言っていました}}
<h3>say と tell</h3>
<p><b>tell</b> の後ろには必ず聞く人が来ます。<b>say</b> の後ろには直接は来ません（入れるなら say to me）。</p>
{{ex:He told me he was busy.|ヒー トウルド ミー ヒー ワズ ビズィー|彼は私に忙しいと言いました}}
<h3>質問を伝えるとき</h3>
<p>Yes / No で答える質問は <b>if</b>、疑問詞の質問は疑問詞をそのまま使います。後ろは<b>ふつうの文の語順</b>（主語 + 動詞）です。</p>
{{ex:She asked if I was okay.|シー アスクト イフ アイ ワズ オウケイ|彼女は私に大丈夫かとたずねました}}{{ex:He asked where I lived.|ヒー アスクト ウェア アイ リヴド|彼は私にどこに住んでいるのかたずねました}}
<div class="tip">いちばん多い間違い：<b>He said me …</b> ✕ → <b>He told me …</b> ○、<b>He asked where did I live.</b> ✕ → <b>He asked where I lived.</b> ○</div>`,
check:[["She said she ___ tired. 空所に入るのは？",["is being","was","be","will"],1,"伝える内容は時制を過去にずらします。"],["He ___ me he would come. 空所に入るのは？",["said","say","told","tell to"],2,"聞く人（me）がいるときは told です。"],["「彼は私がどこに住んでいるのかたずねました」を英語にすると？",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"伝える質問はふつうの文の語順です。"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","伝える内容は時制を過去にずらします。"],
["mc","He ___ me he was late.","told","said","say","tells to","聞く人がいるときは told です。"],
["mc","「彼は来ると言っていました」=","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will は would に変わります。"],
["mc","「彼女は私に大丈夫かとたずねました」=","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Yes / No の質問は if で伝えます。"],
["mc","「彼は私がどこに住んでいるのかたずねました」=","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","伝える質問はふつうの文の語順です。"],
["or","彼女は疲れていると言っていました","She said she was tired","told","聞く人がいないときは said です。"],
["or","彼は車を買ったと言っていました","He said he bought a car","the cars","初めて話題にする車1台なので冠詞 a です。"],
["or","彼女はその本が気に入ったと言っていました","She said she liked the book","a books","お互いにわかっているその本なので冠詞 the です。"],
["fi","She __ she was tired.","彼女は疲れていると言っていました","said","told|asked|say","聞く人がいないときは said です。"],
["fi","He told __ he was busy.","彼は私に忙しいと言いました","me","I|my|to","told の後ろには聞く人が来ます。"],
["fi","She asked __ I was okay.","彼女は私に大丈夫かとたずねました","if|whether","that|what|did","Yes / No の質問は if で伝えます。"],
["ty","彼は忙しいと言っていました","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","伝える内容は時制を過去にずらします。"],
["ty","彼女は車を持っていると言っていました","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 冠詞 a","the","初めて話題にする車1台なので冠詞 a です。"],
["ty","彼はその映画を見たと言っていました","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — 冠詞 the","a","お互いにわかっているその映画なので冠詞 the です。"]]},
{ id:"articles-3", title:"冠詞の総まとめ：全般・特定・決まった言い方", blurb:"「〜というもの」は冠詞なし、説明で決まれば the。go to bed のような決まった形も。", deck:"スモールトーク", body:`
<p>日本語には冠詞がないので、a / the / 冠詞なしの使い分けは、英語が上達しても最後まで間違えやすいところです。このレッスンでは、長めの文の中で冠詞を選ぶときの考え方を、三つの観点でまとめます。</p>
<h3>1. 「〜というもの」全般</h3>
<p>種類全体を言うときは、数えられる名詞なら<b>冠詞なしの複数形</b>、数えられない名詞（不可算名詞）や抽象的なものなら<b>冠詞なし</b>が基本です。</p>
{{ex:Cats sleep a lot.|キャッツ スリープ アラット|猫はよく寝ます}}{{ex:Time is money.|タイム イズ マニー|時は金なり}}{{ex:Coffee keeps me awake.|カーフィー キープス ミー アウェイク|コーヒーを飲むと眠れなくなります}}
<h3>2. 説明がついて特定されると the</h3>
<p>同じ名詞でも、後ろに of 〜 や関係代名詞の節がついて「どの〜か」が決まると <b>the</b> がつきます。日本語では「このカフェの音楽」「入れてくれたコーヒー」のように説明を前につけるだけで「その」は言わないので、ここで the を落としがちです。</p>
{{ex:Life is short.|ライフ イズ ショート|人生は短いです}}{{ex:The life of a teacher is busy.|ザ ライフ アヴァ ティーチャー イズ ビズィー|教師の生活は忙しいです}}{{ex:I like music.|アイ ライク ミューズィック|音楽が好きです}}{{ex:I like the music in this cafe.|アイ ライク ザ ミューズィック イン ズィス キャフェイ|このカフェの音楽が好きです}}{{ex:The coffee that you made was great.|ザ カーフィー ザッチュー メイド ワズ グレイト|入れてくれたコーヒー、おいしかったです}}
<p>ただし、説明がついても「たくさんあるうちの一つ」なら a / an です。</p>
{{ex:My brother is an engineer who works in Tokyo.|マイ ブラザー イザン エンジニア フー ワークス イン トウキオウ|兄は東京で働いているエンジニアです}}
<h3>3. 冠詞をつけない決まった言い方</h3>
<p>bed・school・work などの場所を本来の目的で使うときや、by + 交通手段で「〜で」と言うときは、冠詞をつけません。形ごと覚えましょう。</p>
<div class="tbl"><table><tr><th>決まった言い方</th><th>意味</th></tr><tr><td class="k">go to bed</td><td>寝る</td></tr><tr><td class="k">go to school / go to work</td><td>学校に通う / 仕事に行く</td></tr><tr><td class="k">at home / at work</td><td>家で / 仕事中</td></tr><tr><td class="k">by train / by bus</td><td>電車で / バスで</td></tr><tr><td class="k">have lunch</td><td>昼食をとる</td></tr></table></div>
{{ex:I go to work by train.|アイ ゴウ タ ワーク バイ トゥレイン|電車で通勤しています}}{{ex:I went to bed early.|アイ ウェント タ ベッド アーリー|早く寝ました}}{{ex:She's at work now.|シーズ アット ワーク ナウ|彼女は今、仕事中です}}{{ex:I sat on the bed.|アイ サット オン ザ ベッド|ベッドに座りました（家具としてのベッド）}}
<div class="tip">迷ったら「種類全体の話か、どれのことか決まっているか」を考えましょう。全体なら冠詞なし（数えられる名詞は複数形）、決まっているなら the、たくさんあるうちの一つなら a / an です。</div>`,
check:[["「私は電車で通勤しています」を英語にすると？",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work も by train も冠詞なしの決まった言い方です。"],["I like ___ music they play here. 空所に入るのは？",["the","a","an","（なし）"],0,"they play here（ここでかかっている）で「どの音楽か」が決まるので the です。"],["「人生は短いです」（人生全般）を英語にすると？",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"抽象的なもの全般は冠詞なしです。"]],
practice:[
["mc","「時は金なり」=","Time is money.","The time is money.","A time is money.","Time is a money.","抽象的なもの全般は冠詞なしです。money も数えられないので a はつきません。"],
["mc","「早く寝ました」=","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","「寝る」の go to bed は冠詞なしの決まった言い方です。"],
["mc","「入れてくれたコーヒー、おいしかったです」=","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","関係代名詞の節で「どのコーヒーか」が決まるので冠詞 the です。"],
["mc","「兄は東京で働いているエンジニアです」=","My brother is an engineer who works in Tokyo.","My brother is engineer who works in Tokyo.","My brother is a engineer who works in Tokyo.","My brother is the engineers who works in Tokyo.","説明がついても、たくさんいるエンジニアの一人なので冠詞 an です。"],
["mc","「彼女は今、仕事中です」=","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work（仕事中）は冠詞なしの決まった言い方です。"],
["or","猫というのはよく寝るものです","Cats sleep a lot","The cat","猫全般の話なので冠詞なしの複数形 cats です。"],
["or","ここの音楽が好きです","I like the music here","a musics","here で「どの音楽か」が決まるので冠詞 the です。music は数えられないので複数形にしません。"],
["or","私はバスで学校に通っています","I go to school by bus","the a","go to school も by bus も冠詞なしの決まった言い方です。"],
["fi","__ is short.","人生は短いです","Life","The life|A life|Lives","抽象的なもの全般は冠詞なしです。"],
["fi","I'm __ home now.","今、家にいます","at","at the|in the|to","at home は冠詞なしの決まった言い方です。"],
["fi","I read __ interesting article about sleep.","睡眠についての面白い記事を一つ読みました","an","a|the|two","about sleep の説明がついても、たくさんある記事の一つなので冠詞 an です（interesting は母音の音で始まります）。"],
["ty","早く寝ました","I went to bed early","went to · bed · early — 冠詞なし","the","「寝る」の go to bed は冠詞なしの決まった言い方です。"],
["ty","入れてくれたコーヒー、おいしかったです","The coffee you made was great|The coffee you made was good|The coffee you made was delicious|The coffee that you made was great|The coffee that you made was good|The coffee that you made was delicious","the coffee · you made · great — 冠詞 the","a","関係代名詞の節で「どのコーヒーか」が決まるので冠詞 the です。"],
["ty","私は電車で通勤しています","I go to work by train|I commute by train|I take the train to work","go to work · by train — 冠詞なし","the","go to work も by train も冠詞なしの決まった言い方です。"]]},
];
