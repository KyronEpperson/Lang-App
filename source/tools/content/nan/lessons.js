/* nan-en lessons (stage 1). English side shared with ko-en (parity.js; deviations.json lists the yue and nan exceptions).
   Scaffolded from yue-en and rewritten in written Taigi (MOE recommended characters) for Taiwanese speakers (docs/profiles/nan.md,
   docs/briefs/nan-digest.md). Pron = KK, made by tools/content/nan/kk.js. */
exports.LESSONS = [
{ id:"alphabet", title:"1 · 英文字母：字母的名佮口頭拼字", blurb:"字母你攏捌，毋過名一下講緊就真簡單聽毋著。學 26 个字母的英語名，用英語拼出名、電子批地址佮訂位號碼。", deck:"英文字母", body:`
<p>佇飯店櫃台登記、敲電話去客服、報訂位號碼的時，定定會聽著一句：How do you spell that? 這時你愛共名、電子批地址抑是訂單號碼<b>一字一字</b>講出來，講的是逐个字母的<b>英語名</b>。26 个字母你早就捌，毋過名若唸無清楚，對方聽毋著一个字母，批就寄袂到。花幾分鐘共 26 个名佮音標看一擺，順紲認捌這个課程用的 KK 音標。</p>
<h3>26 个字母的名</h3>
<p>粗體的 <b>A E I O U</b> 是五个母音字母，其他是子音字母。音標標的是字母的<b>名</b>，就是拼字的時唸出來的音。</p>
<div class="tbl"><table><tr><td class="k"><b>A</b> /ˈe/</td><td class="k">B /ˈbi/</td><td class="k">C /ˈsi/</td><td class="k">D /ˈdi/</td><td class="k"><b>E</b> /ˈi/</td></tr><tr><td class="k">F /ˈɛf/</td><td class="k">G /ˈdʒi/</td><td class="k">H /ˈetʃ/</td><td class="k"><b>I</b> /ˈaɪ/</td><td class="k">J /ˈdʒe/</td></tr><tr><td class="k">K /ˈke/</td><td class="k">L /ˈɛl/</td><td class="k">M /ˈɛm/</td><td class="k">N /ˈɛn/</td><td class="k"><b>O</b> /ˈo/</td></tr><tr><td class="k">P /ˈpi/</td><td class="k">Q /ˈkju/</td><td class="k">R /ˈɑr/</td><td class="k">S /ˈɛs/</td><td class="k">T /ˈti/</td></tr><tr><td class="k"><b>U</b> /ˈju/</td><td class="k">V /ˈvi/</td><td class="k">W /ˈdʌbəlju/</td><td class="k">X /ˈɛks/</td><td class="k">Y /ˈwaɪ/</td></tr><tr><td class="k">Z /ˈzi/</td><td></td><td></td><td></td><td></td></tr></table></div>
{{tiles:A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}}
<h3>上捷聽毋著的字母名</h3>
<p>下面這幾組名，講的人愛唸清楚，聽的人嘛愛注意：</p>
<div class="tbl"><table><tr><th>字母</th><th>英語名</th><th>注意</th></tr><tr><td class="k">V</td><td>/ˈvi/</td><td>台語無 v 音，V 定定予人唸做 B 的 /ˈbi/。V 愛頂排喙齒輕輕摸下脣，聲帶振動；兩爿喙脣莫合起來</td></tr><tr><td class="k">Z</td><td>/ˈzi/</td><td>美國講 zee，台灣學校教的嘛是 zee（英國講 zed）。這个課程的聲音是美式，所以你會聽著 zee。頭一个音 /z/ 聲帶愛振動，若無會聽做 C</td></tr><tr><td class="k">G、J</td><td>/ˈdʒi/、/ˈdʒe/</td><td>頭一个音仝款，差別佇尾仔：G 尾仔是 /i/，J 尾仔是 /e/</td></tr><tr><td class="k">E、I</td><td>/ˈi/、/ˈaɪ/</td><td>I 佮「我」的 I 仝音。報電子批地址的時，E 佮 I 上捷講顛倒</td></tr><tr><td class="k">F、L、M、N、S、X</td><td>/ˈɛf/、/ˈɛl/、/ˈɛm/、/ˈɛn/、/ˈɛs/、/ˈɛks/</td><td>逐个攏干焦一个音節，用子音收尾，後壁莫加母音：L 莫唸做 "el-lo"，M 莫唸做 "em-mu"。X 尾仔是 /ks/，兩个子音攏愛唸出來</td></tr><tr><td class="k">L、N</td><td>/ˈɛl/、/ˈɛn/</td><td>台語的 l 佮 n 算是仝一个音，英語愛分：N 的氣對鼻空出，L 是舌尖頂佇頂排喙齒後壁，氣對舌的兩爿出</td></tr><tr><td class="k">H</td><td>/ˈetʃ/</td><td>用 /e/ 開頭，用 /tʃ/ 收尾，干焦一个音節，尾仔莫加母音</td></tr><tr><td class="k">R</td><td>/ˈɑr/</td><td>莫唸做 "a-lu"。尾仔的 r 愛唸出來：舌尖小可向後捲，啥物所在攏無摸著</td></tr><tr><td class="k">W</td><td>/ˈdʌbəlju/</td><td>W 的名是 double u（兩个 U），三个音節攏愛唸出來</td></tr></table></div>
<h3>問拼字、報拼字</h3>
<p>對方聽無清楚某一个字母的時，會使佇字母後壁加一个用伊開頭的簡單單字，像 <b>B as in boy</b>。last name 是「姓」：Amy Lin 的 last name 是 Lin。</p>
{{ex:How do you spell that?|/ˈhaʊ də jʊ ˈspɛl ˈðæt/|彼个字按怎拼？}}{{ex:How do you spell your last name?|/ˈhaʊ də jʊ ˈspɛl jʊr ˈlæst ˈnem/|你的姓按怎拼？}}{{ex:Can you spell that, please?|/kən jʊ ˈspɛl ˈðæt ˈpliz/|麻煩你閣拼一擺好無？}}{{ex:It starts with a capital T.|/ɪt ˈstɑrts wɪð ə ˈkæpɪtḷ ˈti/|用大寫 T 開頭}}{{ex:B as in boy.|/ˈbi əz ɪn ˈbɔɪ/|boy 的 B}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈɛm əz ɪn ˈmɛrɪ/|敢是 Mary 的 M？}}{{ex:There are two Ls in hello.|/ðɛr ɚ ˈtu ˈɛlz ɪn həˈlo/|hello 內底有兩个 L}}
<h3>字母名頭前用 a 抑是 an</h3>
<p>冠詞 (articles) 看字母名的<b>頭一个音</b>，毋是看字母本身。F、H、L、M、N、R、S、X 的名攏是母音開頭，所以講 <b>an F</b>、<b>an H</b>、<b>an L</b>、<b>an M</b>、<b>an N</b>、<b>an R</b>、<b>an S</b>、<b>an X</b>。</p>
<p>U 雖然是母音字母，毋過伊的名佮 you 仝款用 /j/ 開頭，所以是 <b>a U</b>，道理佮 a university 仝款。</p>
<div class="tip">報電子批地址的講法：大寫字母講 <b>capital T</b>，兩个仝款的字母相連講 <b>double L</b>，@ 唸 <b>at</b>，點 (.) 唸 <b>dot</b>。像 amy.lin@mail.com 唸做 <b>A-M-Y dot L-I-N at mail dot com</b>。</div>
<h3>字母按怎湊做音：常見的拼法</h3>
<p>會曉字母的名了後，紲落來是看著單字就會曉唸。英語毋是一个字母一个音：兩三个字母會使合做一个音，有的字母閣完全無唸。台灣學校教的<b>自然發音</b> (phonics) 就是咧教這款規則。下面 12 組拼法上常見，毋過無一組是百分之百攏著，「注意」彼欄的例外攏是日常的單字，愛做伙記。th 按怎唸，佮表內底的音標符號按怎看，後一課會講。</p>
<p><b>a-e、i-e、o-e</b> 的意思是：母音字母後壁隔一个子音字母，字尾閣有一个 e，這个 e 無唸，毋過會予頭前的母音字母唸伊的<b>名</b>，像 cake 的 a 唸 A 的名 /e/。he、she、me、we 這款短字干焦一个母音字母 e，這个 e 愛唸出來，唸 /i/。</p>
<div class="tbl"><table><tr><th>拼法</th><th>讀音</th><th>例字</th><th>注意</th></tr><tr><td class="k">sh</td><td>/ʃ/</td><td>shop、fish</td><td>兩个字母唸一个音</td></tr><tr><td class="k">ch</td><td>/tʃ/</td><td>chicken、lunch</td><td>例外：school 的 ch 唸 /k/</td></tr><tr><td class="k">ph</td><td>/f/</td><td>phone、photo</td><td>毋是 p 加 h</td></tr><tr><td class="k">kn、wr</td><td>/n/、/r/</td><td>knife、write</td><td>k 佮 w 無唸</td></tr><tr><td class="k">a-e</td><td>/e/</td><td>cake、late</td><td>例外：have 唸 /æ/</td></tr><tr><td class="k">i-e</td><td>/aɪ/</td><td>bike、smile</td><td>例外：give 唸 /ɪ/</td></tr><tr><td class="k">o-e</td><td>/o/</td><td>nose、note</td><td>例外：come、love 唸 /ʌ/</td></tr><tr><td class="k">ee、ea</td><td>/i/</td><td>green、tea</td><td>例外：bread、head 的 ea 唸 /ɛ/</td></tr><tr><td class="k">oo</td><td>/u/</td><td>moon、room</td><td>例外：book、good 唸 /ʊ/</td></tr><tr><td class="k">ou、ow</td><td>/aʊ/</td><td>house、down</td><td>例外：you 唸 /ju/；ow 嘛定定唸 /o/，像 snow、know、slow</td></tr><tr><td class="k">ai、ay</td><td>/e/</td><td>rain、play</td><td>ay 大部分佇字尾。例外：said 的 ai 唸 /ɛ/</td></tr><tr><td class="k">igh</td><td>/aɪ/</td><td>high、flight</td><td>gh 無唸</td></tr></table></div>
{{tiles:sh=/ʃ/ ch=/tʃ/ ph=/f/ kn=/n/ wr=/r/ a-e=/e/ i-e=/aɪ/ o-e=/o/ ee=/i/ ea=/i/ oo=/u/ ou=/aʊ/ ow=/aʊ/ ai=/e/ ay=/e/ igh=/aɪ/}}
<p>看著新單字，先揣看內底有這款拼法無，臆一个讀音，才聽聲音對看覓。臆毋著無要緊，例外字大部分是上捷用的字，聽較濟自然就會記得。</p>`},

{ id:"pron", title:"1 · 發音陷阱：F、V、TH、R / L、尾音", blurb:"先看有 KK 音標，才處理講台語的人上捷拄著的發音問題：f、v、th、sh、r / l、n / l、尾音、子音連綴佮重音。", deck:"發音陷阱", body:`
<p>這个課程的卡佮例句攏有標 <b>KK 音標</b>，就是台灣國中、高中課本佮字典用的彼套。音標毋是自然發音 (phonics)：一个符號干焦一種唸法。KK 標的是<b>美式發音</b>，佮這个課程的聲音仝款。逐个音標邊仔攏有聲音，那聽那看就好；若無想欲看音標，會使揤「Aa 音標：開」換做「Aa 音標：關」，抑是佇設定內底共「練習的時顯示音標」關掉。</p>
<h3>KK 音標符號表</h3>
<div class="tbl"><table><tr><th>符號</th><th>例字</th><th>符號</th><th>例字</th></tr><tr><td class="k">i</td><td>see</td><td class="k">ɪ</td><td>sit</td></tr><tr><td class="k">u</td><td>food</td><td class="k">ʊ</td><td>foot</td></tr><tr><td class="k">e</td><td>day</td><td class="k">ɛ</td><td>bed</td></tr><tr><td class="k">æ</td><td>bad</td><td class="k">ʌ</td><td>cup</td></tr><tr><td class="k">ə</td><td><b>a</b>bout</td><td class="k">ɑ</td><td>hot、father</td></tr><tr><td class="k">ɔ</td><td>law、walk</td><td class="k">o</td><td>go</td></tr><tr><td class="k">ɝ</td><td>bird</td><td class="k">ɚ</td><td>teach<b>er</b></td></tr><tr><td class="k">aɪ</td><td>my</td><td class="k">aʊ</td><td>now</td></tr><tr><td class="k">ɔɪ</td><td>boy</td><td class="k">ŋ</td><td>si<b>ng</b></td></tr><tr><td class="k">θ</td><td><b>th</b>ink</td><td class="k">ð</td><td><b>th</b>is</td></tr><tr><td class="k">ʃ</td><td><b>sh</b>e</td><td class="k">ʒ</td><td>u<b>s</b>ually</td></tr><tr><td class="k">tʃ</td><td><b>ch</b>air</td><td class="k">dʒ</td><td><b>j</b>ob</td></tr><tr><td class="k">ḷ</td><td>peop<b>le</b></td><td class="k">ṇ</td><td>butt<b>on</b></td></tr><tr><td class="k">ˈ</td><td>重音符號，標佇重讀音節的頭前</td><td class="k">ˌ</td><td>第二重音</td></tr></table></div>
<p>KK 無長音的記號：i 佮 ɪ、u 佮 ʊ 是兩个無仝的母音。台灣的字典定定共重音印做 <b>ˋ</b>（頂面）佮 <b>ˏ</b>（下面），佮這个課程的 ˈ、ˌ 是仝款的記號。這个課程連單音節的實詞攏標 ˈ；無 ˈ 的 a、the、to、can 這款字愛唸較輕、較緊（弱讀）。</p>
<h3>KK 音標佮字典的 IPA</h3>
<p>英國出版的字典（Oxford、Cambridge）佮網路字典定定用 IPA。音是仝款的，干焦有幾个符號寫法無仝：</p>
<div class="tbl"><table><tr><th>KK（這个課程）</th><th>字典的 IPA</th><th>例字</th></tr><tr><td class="k">e</td><td>eɪ</td><td>day /ˈde/</td></tr><tr><td class="k">o</td><td>oʊ</td><td>go /ˈgo/</td></tr><tr><td class="k">i、u</td><td>iː、uː</td><td>see /ˈsi/、food /ˈfud/</td></tr><tr><td class="k">ɛ</td><td>e</td><td>bed /ˈbɛd/</td></tr><tr><td class="k">ɝ、ɚ</td><td>ɜːr、ər</td><td>bird /ˈbɝd/、teacher /ˈtitʃɚ/</td></tr><tr><td class="k">ḷ、ṇ</td><td>əl、ən</td><td>people /ˈpipḷ/、button /ˈbʌtṇ/</td></tr></table></div>
<p>上要緊的是頭兩逝：KK 的 /e/ 是 day 的音，/ɛ/ 才是 bed 的音。</p>
<h3>F：莫唸做 h</h3>
<p>台語本底無 f 這个音，「風」(hong)、「花」(hue) 攏是 h 開頭，所以 f 定定變做 h 抑是 hu：coffee 唸做 "ko-hi"，phone 唸做 "hong"。唸 <b>F</b> 的時，頂排喙齒輕輕摸下脣，氣對中央吹出來，聲帶無振動。若是兩爿喙脣合起來，就變做 P：fan（電風） / pan（平底鼎）。</p>
{{ex:coffee|/ˈkɔfɪ/|咖啡}}{{ex:phone|/ˈfon/|電話 / 手機仔}}{{ex:fan|/ˈfæn/|電風 / 粉絲}}{{ex:pan|/ˈpæn/|平底鼎}}
<h3>V：毋是 B</h3>
<p>台語有 b 音（「肉」bah），毋過無 v。<b>V</b> 的喙形佮 F 仝款，頂排喙齒輕輕摸下脣，毋過聲帶愛振動。若用兩爿喙脣唸，very 就變做 berry（莓仔），vote（投票）就變做 boat（船）。</p>
{{ex:very|/ˈvɛrɪ/|真 / 非常}}{{ex:berry|/ˈbɛrɪ/|莓仔}}{{ex:vote|/ˈvot/|投票}}{{ex:boat|/ˈbot/|船}}
<h3>TH：舌尖囥佇頂下喙齒中央</h3>
<p>台語佮華語攏無 TH。共舌尖<b>輕輕伸出來，囥佇頂下喙齒中央</b>吹氣：干焦吹氣是 think 的 /θ/，聲帶振動是 this 的 /ð/。上捷聽著的代替音是 s、t 佮 d：think 變做 sink（洗碗槽），three 變做 tree（樹仔），this 變做 "dis"。</p>
{{ex:think|/ˈθɪŋk/|想 / 認為}}{{ex:sink|/ˈsɪŋk/|洗碗槽 / 沉落去}}{{ex:three|/ˈθri/|三}}{{ex:tree|/ˈtri/|樹仔}}{{ex:this|/ˈðɪs/|這}}
<h3>SH：毋是 s</h3>
<p>台語的 s 佇 i 頭前會唸做親像「詩」(si) 的音，佇台語內底無差，毋過英語的 /ʃ/ 佮 /s/ 會分字義：she 佮 see 無仝。唸 <b>/ʃ/</b> 的時，喙脣向前翹、小可圓，舌比 s 較後壁。</p>
{{ex:she|/ˈʃi/|伊（查某的）}}{{ex:see|/ˈsi/|看}}{{ex:show|/ˈʃo/|表演 / 予人看}}{{ex:so|/ˈso/|所以 / 遮爾}}
<h3>R 佮 L</h3>
<p>台語無 r 音，r 定定唸做 l。唸 <b>L</b> 的時舌尖頂佇頂排喙齒後壁才放開；唸 <b>R</b> 的時舌尖<b>啥物所在攏無摸著</b>，小可向後縮，喙脣小可圓。rice（飯）唸做 L 就變做 lice（蝨母）。兩三个子音相連（子音連綴）的時，r 佮 l 上捷漏去抑是倒反：pray（祈禱）唸做 play（耍），bring 唸做 "bling"。</p>
{{ex:rice|/ˈraɪs/|米 / 飯}}{{ex:lice|/ˈlaɪs/|蝨母}}{{ex:right|/ˈraɪt/|正手爿 / 著}}{{ex:pray|/ˈpre/|祈禱}}{{ex:play|/ˈple/|耍 / 拍（球）}}{{ex:bring|/ˈbrɪŋ/|提來}}
<h3>N 佮 L</h3>
<p>台語的 l 佮 n 算是仝一个音（鼻音的母音頭前才唸做 n），所以英語的 n 佮 l 聽起來較無差。毋過英語靠 n 佮 l 分字義：night（暗時）唸做 l 就變做 light（光）。唸 <b>n</b> 的時舌尖頂佇頂排喙齒後壁，氣<b>對鼻空出</b>；唸 <b>l</b> 的時氣對舌的兩爿出。</p>
{{ex:night|/ˈnaɪt/|暗時 / 暝}}{{ex:light|/ˈlaɪt/|光 / 電火 / 輕}}{{ex:know|/ˈno/|知影}}{{ex:low|/ˈlo/|低}}
<h3>尾音：愛唸出來，b、d、g 愛保持濁音</h3>
<p>台語的字尾干焦有母音、m / n / ng，抑是 p / t / k / h 收起來無放（像「六」la̍k）。台語有 -p -t -k，聽英語的尾音較有利，毋過英語的尾音愛<b>輕輕放出來</b>。台語無 -b -d -g -l -s -z 收尾，所以 bag（袋仔）聽起來親像 back（尻脊骿），feel 唸做 "fee-o"。b、d、g 是濁音，聲帶愛振動，頭前的母音嘛愛小可拖較長；尾仔的 l 愛用舌尖頂佇頂排喙齒後壁，莫唸做母音。</p>
{{ex:bag|/ˈbæg/|袋仔}}{{ex:back|/ˈbæk/|尻脊骿 / 後壁}}{{ex:bed|/ˈbɛd/|眠床}}{{ex:bet|/ˈbɛt/|相輸 / 跋筊}}{{ex:feel|/ˈfil/|感覺}}
<div class="tip">台語的 b 佮 g 是你的好處：「肉」(bah)、「牛」(gû) 的頭一个音就是濁音 b、g。華語無這款音，所以英語 bag 佮 pack、goat 佮 coat 的頭一个音，你本底就分會清楚。</div>
<h3>子音連綴佮外來語：莫加母音</h3>
<p>日本時代台語對日語借入來的英語字，攏有加母音（拼法請參考就好）：</p>
<div class="tbl"><table><tr><th>台語的外來語</th><th>英語</th><th>KK</th></tr><tr><td>啤酒 bì-lù</td><td class="k">beer</td><td>/ˈbɪr/</td></tr><tr><td>巴士 bá-suh</td><td class="k">bus</td><td>/ˈbʌs/</td></tr><tr><td>卡車 thoo-lá-khuh</td><td class="k">truck</td><td>/ˈtrʌk/</td></tr><tr><td>打火機 lái-tà</td><td class="k">lighter</td><td>/ˈlaɪtɚ/</td></tr><tr><td>方向盤 hán-tóo</td><td class="k">handle</td><td>/ˈhændḷ/</td></tr></table></div>
<p>講英語的時，這款加入去的母音攏愛提掉：truck 是一个音節，毋是三个。子音連綴嘛仝款：street 莫唸做 "su-tree-to"，desk 莫唸做 "de-su-ku"。cold 唸做 "code"、list 唸做 "lis"，就是少一个子音。複數 (plural) 的 -s、第三人稱單數的 -s 佮過去式的 -ed 攏佇字尾；若食掉，聽的人會當做你文法毋著。</p>
{{ex:cold|/ˈkold/|寒 / 冷}}{{ex:code|/ˈkod/|密碼 / 程式碼}}{{ex:friends|/ˈfrɛndz/|朋友（複數）}}{{ex:asked|/ˈæskt/|問（ask 的過去式）}}
<h3>長短母音，閣有 /æ/ 佮 /ɛ/</h3>
<p>/i/ 佮 /ɪ/ 毋但長短無仝，喙形嘛無仝：leave（離開） / live（蹛）。/u/ 佮 /ʊ/ 嘛是一對：fool（戇人） / full（滿 / 飽）。/æ/ 的喙愛開甲比 /ɛ/ 較大：bad（䆀） / bed（眠床）。</p>
{{ex:leave|/ˈliv/|離開}}{{ex:live|/ˈlɪv/|蹛 / 生活}}{{ex:fool|/ˈful/|戇人}}{{ex:full|/ˈfʊl/|滿 / 飽}}{{ex:bad|/ˈbæd/|䆀 / 歹}}
<h3>重音佮弱讀決定對方聽有抑聽無</h3>
<p>台語大部分的字攏唸甲完完整整。毋過英語幾若个音節的字內底，總有一个音節唸甲<b>較重、較長、較懸</b>，其他的音節唸較輕，母音定定變做 /ə/：about 是 /əˈbaʊt/，開頭毋是清楚的 a。重音若毋著，其他的音閣較準，對方嘛可能聽無。</p>
<div class="tbl"><table><tr><th>單字</th><th>重音</th><th>音標</th></tr><tr><td class="k">banana</td><td>ba-<b>NA</b>-na</td><td>/bəˈnænə/</td></tr><tr><td class="k">hotel</td><td>ho-<b>TEL</b></td><td>/hoˈtɛl/</td></tr><tr><td class="k">McDonald's</td><td>mc-<b>DON</b>-ald's</td><td>/məkˈdɑnḷdz/</td></tr><tr><td class="k">thirteen / thirty</td><td>thir-<b>TEEN</b> / <b>THIR</b>-ty</td><td>/ˌθɝˈtin/、/ˈθɝtɪ/</td></tr></table></div>
<div class="tip">家己檢查：唸 F、V 的時頂排喙齒愛摸著下脣，唸 TH 的時舌尖愛出現佇頂下喙齒中央，<b>照鏡看會著</b>就著。唸到字尾，會記得共上尾一个子音唸出來，莫加母音。有淡薄仔口音無要緊，目標是予人聽有。</div>`},

{ id:"articles", title:"2 · a 佮 the：冠詞入門", blurb:"台語無冠詞，a 佮 the 上捷漏去，嘛上捷亂加。記三種情形就有夠。", deck:"自我介紹", body:`
<p>台語佮華語攏無冠詞 (articles)，所以 a 佮 the 上捷漏去，嘛上捷亂加。愛注意：「一个」毋一定是 a，「這个 / 彼个」嘛毋等於 the。台語講「我是學生」，無「一个」，英語猶原愛加 a：I'm <b>a</b> student. 台語講「冊真好看」，看場合就知影是佗一本；英語無這款用法，愛講 <b>The</b> book is good.</p>
<h3>a / an：頭一擺提著的「一个」</h3>
<p>可數名詞單數<b>頭一擺</b>出現的時，頭前加 a / an。頭路（職業）頭前嘛一定愛加：She's <b>a</b> teacher.</p>
{{ex:I'm a student.|/aɪm ə ˈstudṇt/|我是學生}}{{ex:I have a dog.|/aɪ ˈhæv ə ˈdɔg/|我有飼一隻狗}}
<p>用 a 抑是 an，看<b>發音</b>，毋是看拼字：母音開頭的字頭前用 an。看音標上清楚。</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university（/j/ 開頭）</td><td class="k">an hour（h 無發音）</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket（/w/ 開頭）</td><td class="k">an MBA（/ɛ/ 開頭）</td></tr></table></div>
<h3>the：雙方攏知影是佗一个</h3>
<p>頭前已經講過，抑是看場合雙方攏知影是佗一个，就用 the。獨一無二的物件嘛用 the：the sun、the internet。</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔg ‖ ðə ˈdɔg ɪz ˈso ˈkjut/|我有飼一隻狗，彼隻狗真古錐}}{{ex:Can you close the door?|/kən jʊ ˈkloz ðə ˈdɔr/|會使共門關起來無？（這間房間的門）}}
<h3>無加冠詞：泛指</h3>
<p>泛指「某一類物件」的時，用複數 (plural) 抑是不可數名詞，<b>無加冠詞</b>。真濟人感覺加一个 the 較穩，其實亂加 the 佮漏 a 仝款捷：<b>I like the music.</b> ✗ → <b>I like music.</b> ✓ 三頓、語言、運動頭前攏無加冠詞。</p>
{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔgz/|我真佮意狗（狗這種動物）}}{{ex:I don't drink coffee.|/aɪ ˈdont ˈdrɪŋk ˈkɔfɪ/|我無啉咖啡}}{{ex:Let's have lunch.|/ˈlɛts ˈhæv ˈlʌntʃ/|咱來食中晝}}
<div class="tip">上捷看著的錯：<b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ 頭路頭前的 a 莫漏去。</div>`},

{ id:"be", title:"3 · be 動詞佮一般動詞", blurb:"am / is / are 佮 do / does：上要緊的是莫做伙用。", deck:"自我介紹", body:`
<p>英語的句一定愛有動詞。這个動詞是 <b>be 動詞</b>抑是<b>一般動詞</b>（be 以外的動詞，像 like、live、work），決定否定句佮疑問句按怎變。</p>
<h3>兩類動詞</h3>
<div class="tbl"><table><tr><th></th><th>be 動詞</th><th>一般動詞</th></tr><tr><td>意思</td><td>是、佇遐、某一種狀態</td><td>動作、習慣、佮意（食、蹛、佮意）</td></tr><tr><td>例句</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>否定句</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>疑問句</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<p>be 動詞綴主詞變：<b>I am</b> / <b>you、we、they are</b> / <b>he、she、it is</b>。講話的時大部分攏用縮寫：I'm、you're、she's。疑問句嘛一定愛有 be，囥佇主詞頭前。</p>
{{ex:I'm hungry.|/aɪm ˈhʌŋgrɪ/|我腹肚枵}}{{ex:She's at work.|/ʃɪz ət ˈwɝk/|伊咧上班}}{{ex:Are you okay?|/ɚ jʊ oˈke/|你有要緊無？}}
<h3>形容詞頭前袂使無 be</h3>
<p>台語講「伊真媠」，句內底無「是」。英語的形容詞袂使單獨囥佇主詞後壁，頭前一定愛有 be 動詞。</p>
{{ex:She's very beautiful.|/ʃɪz ˈvɛrɪ ˈbjutɪfḷ/|伊真媠 (She very beautiful ✗)}}
<h3>be 動詞佮一般動詞袂使相連用</h3>
<p>倒轉來講，句內底已經有一般動詞，就莫閣加 be：I am agree ✗、He is come from Macau ✗、They are lack of time ✗ (→ They lack time ✓)。</p>
{{ex:I like night markets.|/aɪ ˈlaɪk ˈnaɪt ˌmɑrkɪts/|我佮意夜市 (I am like ✗)}}{{ex:I live in Taipei.|/aɪ ˈlɪv ɪn ˌtaɪˈpe/|我蹛佇台北 (I am live ✗)}}{{ex:I agree.|/aɪ əˈgri/|我同意 (I am agree ✗)}}
<h3>he、she、it 後壁加 -s</h3>
<p>主詞是第三人稱單數（he、she、it，抑是一个人、一項物件）的時，現在式 (present tense) 的一般動詞愛加 <b>-s</b>。台語一个「伊」就包 he、she、it 三个，英語愛分清楚。否定句佮疑問句用 <b>does</b>；用 does 了後，動詞就變轉去原形。</p>
{{ex:My brother works in Taipei.|/maɪ ˈbrʌðɚ ˈwɝks ɪn ˌtaɪˈpe/|阮阿兄佇台北上班}}{{ex:Does he speak English?|/dəz hɪ ˈspik ˈɪŋglɪʃ/|伊敢會曉講英語？}}{{ex:She doesn't eat meat.|/ʃɪ ˈdʌzṇt ˈit ˈmit/|伊毋食肉}}
<div class="tip">無把握的時問家己：句內底 be 動詞以外，敢閣有<b>別的動詞</b>（like、live、work……）？有就用 do / does 變否定句佮疑問句；無（後壁干焦形容詞、名詞抑是地點）就用 be 動詞。第三人稱單數的 -s 講話的時嘛愛唸出來。</div>`},

{ id:"polite", title:"4 · 有禮貌請人做代誌", blurb:"Can you → Could you → Would you mind。莫閣講 Give me 矣。", deck:"求生英語 1", body:`
<p>台語講一句「勞力」抑是「麻煩你」就有夠禮貌；英語的禮貌靠的是<b>請求的句型</b>。仝一个意思，換一个句型就會使對生硬變做得體。愛注意：共華語的「請」直接翻做 Please give me…，佇英語猶原是命令句，聽起來真硬。</p>
<h3>禮貌的樓梯</h3>
<div class="tbl"><table><tr><th>講法</th><th>口氣</th><th>適合的場合</th></tr><tr><td class="k">Give me…</td><td>命令，聽起來無禮貌</td><td>莫用</td></tr><tr><td class="k">Can you…?</td><td>隨便的請求</td><td>朋友、店頭</td></tr><tr><td class="k">Could you…?</td><td>有禮貌的請求</td><td>生份人、工作場合</td></tr><tr><td class="k">Would you mind …ing?</td><td>真客氣</td><td>麻煩人的代誌、對頂司</td></tr></table></div>
{{ex:Could you help me?|/kəd jʊ ˈhɛlp mɪ/|你會使共我鬥相共無？}}{{ex:Could you say that again?|/kəd jʊ ˈse ˈðæt əˈgɛn/|會使閣講一擺無？}}{{ex:Would you mind taking a picture of us?|/wəd jʊ ˈmaɪnd ˈtekɪŋ ə ˈpɪktʃɚ əv əs/|敢會使麻煩你共阮翕一張相？}}
<h3>點物件的時講 Can I get…? / I'd like…</h3>
<p>I want… 聽起來親像囡仔咧討物件。佇店頭愛按呢講：</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈgɛt ə ˈlɑte ˈpliz/|麻煩，我欲一杯拿鐵}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndo ˈsit/|我想欲坐窗仔邊的位}}
<h3>Would you mind…? 的陷阱</h3>
<p>mind 是「掛意」的意思，所以回答 <b>No 才是「會使」</b>。</p>
{{ex:Would you mind opening the window?|/wəd jʊ ˈmaɪnd ˈopənɪŋ ðə ˈwɪndo/|敢會使麻煩你開窗仔？}}{{ex:No, not at all.|/ˈno ˈnɑt ət ˈɔl/|好啊，無問題（一點仔嘛無掛意）}}
<div class="tip">台語的「勞力」會使是請求，嘛會使是感謝；「歹勢」會使是借過，嘛會使是道歉。英語愛分開講：請人做代誌講 <b>please</b>，感謝講 <b>thank you</b>，借過抑是叫人注意講 <b>excuse me</b>，做毋著代誌才講 <b>sorry</b>。please 佮 thank you 講偌濟擺嘛袂傷濟。語調嘛真要緊：句尾小可揚起來是請求，降落去就親像命令。</div>`},

{ id:"tense", title:"5 · 時態總覽：現在、過去、未來", blurb:"習慣用現在式，當咧做的代誌用現在進行式，計畫用 be going to。", deck:"開講", body:`
<p>台語的動詞袂變，時間靠「昨昏、明仔載」這款詞，抑是「有、矣、過、咧」這款字來表示。毋過英語一定愛<b>改動詞</b>：句內底有 yesterday，動詞猶原愛用過去式 (past tense)。開講的時上捷用的是下面這五種形式。</p>
<h3>台語的「有、矣、過、咧」≠ 英語的時態 (tense)</h3>
<div class="tbl"><table><tr><th>台語</th><th>常見的對應</th><th>注意</th></tr><tr><td class="k">「咧」（「咧食」）</td><td>現在進行式 be + -ing</td><td>干焦表示動作當咧進行</td></tr><tr><td class="k">「有」+ 動詞（「我有去」）</td><td>過去式 (I went)</td><td>毋是 I have went：英語無「有 + 動詞」表示過去的講法</td></tr><tr><td class="k">「矣」（「我食飽矣」）</td><td>過去式抑是現在完成式</td><td>「矣」表示改變抑是做好，毋是過去：「落雨矣」是 It's raining.</td></tr><tr><td class="k">「過」（「去過」）</td><td>現在完成式</td><td>表示經驗：I've been to…</td></tr><tr><td class="k">「會」 / 「欲」</td><td>will / be going to</td><td>早就決定的計畫用 going to</td></tr></table></div>
<h3>現在式佮現在進行式</h3>
<div class="tbl"><table><tr><th>形式</th><th>意思</th><th>例句</th></tr><tr><td class="k">現在式</td><td>習慣、一向按呢的事實</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing</td><td>當咧做 / 已經排好的近期安排</td><td>I'm drinking coffee right now.</td></tr></table></div>
{{ex:I work at a bank.|/aɪ ˈwɝk ət ə ˈbæŋk/|我佇銀行上班（一向按呢）}}{{ex:I'm working from home today.|/aɪm ˈwɝkɪŋ frəm ˈhom təˈde/|我今仔日佇厝上班}}
<h3>過去式</h3>
<p>規則動詞加 <b>-ed</b>，毋過上捷用的動詞大部分是不規則的：go → went、eat → ate、see → saw、have → had、get → got。</p>
{{ex:I went to the beach last weekend.|/aɪ ˈwɛnt tə ðə ˈbitʃ ˈlæst ˈwikɛnd/|我頂个週末有去海邊}}{{ex:Did you have fun?|/dɪd jʊ ˈhæv ˈfʌn/|敢有好耍？}}
<h3>未來：will 佮 be going to</h3>
<div class="tbl"><table><tr><th></th><th>當時用</th><th>例句</th></tr><tr><td class="k">will</td><td>講話的當下隨決定、答應人</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>早就決定的計畫</td><td>I'm going to visit Macau next month.</td></tr></table></div>
{{ex:I'll call you later.|/aɪl ˈkɔl jʊ ˈletɚ/|我等一下才敲電話予你}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoɪŋ tə ˈtek ə ˈkʊkɪŋ ˈklæs/|我欲去上煮食班}}
<p>講話的時 going to 定定唸做 <b>gonna</b>，寫的時猶原寫 going to。</p>
<div class="tip">回答 How was your weekend? 用過去式，回答 Any plans for the weekend? 用 going to。綴問題的時態回答上簡單。</div>`},

{ id:"prep", title:"6 · 介系詞 in / on / at", blurb:"範圍大用 in，某一工用 on，一个點用 at。", deck:"數字、時間佮日期", body:`
<p>台語一个「佇」就有夠，英語就愛分 in、on、at，時間佮地點攏仝款。記牢<b>範圍愈大用 in，愈細愈具體用 at</b>，大部分的情形就袂毋著。</p>
<h3>時間</h3>
<div class="tbl"><table><tr><th>介系詞</th><th>範圍</th><th>例</th></tr><tr><td class="k">in</td><td>月份、年份、季節、一工內底的時段</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>禮拜幾、日期、特別的某一工</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>準確的時間、真短的時間點</td><td>at 7, at noon, at night</td></tr></table></div>
{{ex:See you on Friday.|/ˈsi jʊ ɑn ˈfraɪde/|禮拜五見}}{{ex:The meeting is at three.|/ðə ˈmitɪŋ ɪz ət ˈθri/|三點開會}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔrn ɪn ˌnaɪnˈtin ˌnaɪntɪ ˈet/|我 1998 年出世}}
<h3>地點</h3>
<div class="tbl"><table><tr><th>介系詞</th><th>感覺</th><th>例</th></tr><tr><td class="k">in</td><td>空間內底、城市、國家</td><td>in the car, in Taipei, in Japan</td></tr><tr><td class="k">on</td><td>表面頂、街路、公共交通工具</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>一个點、為某一个目的去的所在</td><td>at the station, at work, at home</td></tr></table></div>
<p>注意：佇公車、捷運、火車頂攏用 <b>on</b>，無講 in the bus；佇某一間公司上班用 at，像 at Google。</p>
{{ex:I'm on the bus.|/aɪm ɑn ðə ˈbʌs/|我佇公車頂}}{{ex:Let's meet at the station.|/ˈlɛts ˈmit ət ðə ˈsteʃən/|咱佇車頭見}}{{ex:She works at Google.|/ʃɪ ˈwɝks ət ˈgugḷ/|伊佇 Google 上班}}
<h3>免用介系詞的情形</h3>
<p><b>next、last、this、every、tomorrow、yesterday</b> 頭前無加介系詞。</p>
{{ex:See you next week.|/ˈsi jʊ ˈnɛkst ˈwik/|後禮拜見 (on next week ✗)}}
<p>動詞後壁的介系詞嘛愛注意：<b>discuss、enter、marry</b> 直接接受詞，無加介系詞 (discuss about ✗)；<b>listen to、wait for、apply for</b> 的介系詞就袂使漏 (wait me ✗)。</p>
<div class="tip">這寡例外愛記牢：<b>at night</b>（暗時）、<b>in the morning / afternoon / evening</b>。週末美式講 <b>on the weekend</b>，英式講 <b>at the weekend</b>，兩个攏著。</div>`},

{ id:"smalltalk", title:"7 · 開講的文化", blurb:"How are you? 毋是真正咧問你，是相借問。佗一寡話題安全，佗一寡愛閃。", deck:"開講", body:`
<p>佇講英語的國家，佇電梯內底、結帳的櫃台頭前、開會進前，佮生份人嘛會順喙開講幾句。這毋是深入的討論，是<b>予氣氛較輕鬆的簡單對話</b>。</p>
<h3>How are you? 是相借問</h3>
<p>對方毋是真正想欲知影你過甲按怎，就親像台語的「食飽未？」毋是真正咧問你食飽抑未。簡單回答一句，閣<b>倒問一句</b>才有禮貌。倒轉來講，共「食飽未？」直接翻做 Have you eaten?，佇英語毋是相借問，對方可能會當做你欲請伊食飯。</p>
{{ex:Hey, how's it going?|/ˈhe ˈhaʊz ɪt ˈgoɪŋ/|嗨，最近好無？}}{{ex:Pretty good! How about you?|/ˈprɪtɪ ˈgʊd ‖ ˈhaʊ əbaʊt ˈju/|袂䆀啊！你咧？}}
<h3>安全的話題佮愛閃的話題</h3>
<div class="tbl"><table><tr><th>安全</th><th>頭一擺見面上好閃</th></tr><tr><td>天氣、週末佮放假的計畫</td><td>年歲、結婚抑未</td></tr><tr><td>好食的物、餐廳、旅行</td><td>體重佮外表（「你敢有較肥？」）</td></tr><tr><td>連續劇、電影、運動</td><td>薪水、厝稅、厝價</td></tr><tr><td>工作（輕鬆仔講）、蹛佇佗一區</td><td>政治、宗教</td></tr></table></div>
<p>佇台灣，熟似的人問薪水、厝稅抑是年歲，有時是關心；佇講英語的國家，頭一擺見面就問這寡，會予人無歡喜。</p>
<h3>予對話繼續落去的技巧</h3>
<p>回答 + <b>加講一寡資訊</b> + <b>倒問</b>。這三步若攏有，對話就袂冷去。</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgret ‖ aɪ ˈwɛnt ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈju/|真讚！我有去爬山。你咧？}}
<p>應話嘛真要緊：<b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>自然收尾</h3>
{{ex:Well, I should get going.|/ˈwɛl aɪ ʃəd ˈgɛt ˈgoɪŋ/|好，我愛先來走矣}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔkɪŋ tə jʊ/|佮你開講真歡喜}}
<div class="tip">附和否定句愛用 <b>Me neither</b>：I don't like horror movies. → Me neither. 這時袂使回答 Me too。美式口語嘛會聽著 Me either，毋過標準的講法是 Me neither。</div>`},

{ id:"phrasal", title:"8 · 片語動詞入門", blurb:"動詞 + 一个短字 = 全新的意思。講英語的人日常講話少袂得。", deck:"片語動詞", body:`
<p>片語動詞 (phrasal verbs) 是<b>動詞 + up、out、off、on 這款短字</b>組成的，表達新的意思。課本內底的長字（postpone、discover）佇日常對話反倒無片語動詞遐捷用。台語的「關起來、揣著、坐落來」嘛是動詞加一个細細的成分，會使用這種感覺來理解。</p>
<div class="tbl"><table><tr><th>正式的字</th><th>片語動詞（日常）</th><th>意思</th></tr><tr><td>postpone</td><td class="k">put off</td><td>延期</td></tr><tr><td>discover</td><td class="k">find out</td><td>發現、得知</td></tr><tr><td>exercise</td><td class="k">work out</td><td>運動、健身</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>忍受</td></tr></table></div>
<h3>短字內底有提示</h3>
<p><b>up</b> 有「完全、向上」的意思，<b>out</b> 有「向外、到尾」的意思，<b>off</b> 有「離開、停止」的意思，<b>on</b> 有「接觸、繼續」的意思。</p>
{{ex:I grew up in Tainan.|/aɪ ˈgru ˈʌp ɪn ˌtaɪˈnɑn/|我佇台南大漢}}{{ex:We ran out of milk.|/wɪ ˈræn ˈaʊt əv ˈmɪlk/|牛奶攏用完矣}}{{ex:Turn off your phone, please.|/ˈtɝn ˈɔf jʊr ˈfon ˈpliz/|麻煩共手機仔關掉}}
<h3>代名詞囥中央</h3>
<p>真濟有受詞的片語動詞會使拆開。名詞囥頭前抑是後壁攏會使，毋過 <b>it、them、me 這款代名詞一定囥中央</b>。順紲講，台語的「開電火、關電火」是 turn on / turn off the light，袂使講 open / close the light。</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɝn ˈɑn ðə ˈlaɪt/ /ˈtɝn ðə ˈlaɪt ˈɑn/|開電火（兩種講法攏著）}}{{ex:Turn it on.|/ˈtɝn ɪt ˈɑn/|共開起來 (turn on it ✗)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk jʊ ˈʌp ət ˈsɛvən/|我七點來接你}}
<h3>袂使拆開的片語動詞</h3>
<p>look after、look for、get along with 這款有介系詞的袂使拆開：<i>look after my cat</i>、<i>look after her</i>。</p>
<div class="tip">片語動詞愛親像單字仝款<b>規个記</b>。連例句做伙記，代名詞的位置自然就會記得。逐工揀三个，佇真正的對話內底用看覓。</div>`},

{ id:"numbers", title:"9 · 數字、時間佮價錢", blurb:"英語無「萬」，13 佮 30 愛分清楚，閣有價錢、日期佮樓層的講法。", deck:"數字、時間佮日期", body:`
<p>出國旅行抑是上班，隨就會用著數字，毋過台語佮英語算數的單位無仝，真簡單出毋著。</p>
<h3>三位一節</h3>
<p>台語四位一節（萬、億），英語<b>三位一節</b>（thousand、million、billion）。逗點的位就是單位。</p>
<div class="tbl"><table><tr><th>數字</th><th>台語</th><th>英語</th></tr><tr><td class="k">10,000</td><td>一萬</td><td>ten thousand</td></tr><tr><td class="k">50,000</td><td>五萬</td><td>fifty thousand</td></tr><tr><td class="k">100,000</td><td>十萬</td><td>one hundred thousand</td></tr><tr><td class="k">1,000,000</td><td>一百萬</td><td>one million</td></tr><tr><td class="k">100,000,000</td><td>一億</td><td>one hundred million</td></tr></table></div>
<p>新台幣佮美金英語攏叫 dollars。佇台灣講價錢，直接講 30 dollars 就好；若愛分清楚，才講 NT dollars 抑是 US dollars。台語講「30 箍」，英語講 30 dollars：dollar 愛加複數的 -s。</p>
<h3>-teen 佮 -ty</h3>
<p>13–19 的重音佇<b>後壁</b>，30、40、50…… 的重音佇<b>頭前</b>。美式 thirty 內底的 t 定定唸甲親像輕輕的 d。看音標內底 ˈ 的位，就知影重音佇佗位。</p>
{{ex:thirteen|/ˌθɝˈtin/|數字 13}}{{ex:thirty|/ˈθɝtɪ/|數字 30}}{{ex:fifteen / fifty|/ˌfɪfˈtin/ /ˈfɪftɪ/|數字 15 / 50}}
<h3>時間</h3>
<p>上簡單的方法是共點佮分直接唸出來。1–9 分頭前加 oh。</p>
{{ex:It's seven fifteen.|/ɪts ˈsɛvən ˌfɪfˈtin/|七點十五分（七點三字）}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈo ˈfaɪv/|九點五分（九點一字）}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔrtɚ pæst ˈtɛn/|十點十五分（十點三字）}}
<h3>價錢佮年份</h3>
<p>價錢會使共 dollars 佮 cents（美金的角）分開唸，嘛會使直接唸做兩个數。年份兩位兩位唸。</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔr ˌnaɪntɪ ˈnaɪn/|4.99 美金}}{{ex:That's twelve fifty.|/ˈðæts ˈtwɛlv ˈfɪftɪ/|12.50 美金}}{{ex:twenty twenty-six|/ˈtwɛntɪ ˌtwɛntɪ ˈsɪks/|2026 年}}
<div class="tip">佇美國愛注意幾項代誌。日期：台灣寫年/月/日（2026/5/3），美國寫月/日/年（5/3/2026），英國是日/月（3/5 是 5 月 3 號）；無把握的時，親像 May 3rd 按呢共月份寫做英語上穩。樓層：美國的 <b>first floor</b> 就是台灣的 1 樓，佮英國的 ground floor 無仝。緊急電話：美國敲 <b>911</b>，台灣是 119（救護車、火燒厝）佮 110（警察）。</div>`},

{ id:"email", title:"10 · 英語工作電子批", blurb:"稱呼 → 目的 → 請求 → 結尾。簡短、清楚。", deck:"工作佮電子批", body:`
<p>英語的工作電子批講究<b>簡短、目的清楚、友善</b>。共華語公文的客氣話一字一字翻過去，反倒會予重點無清楚。台灣公司的英語批定定寫甲傷正式、傷長；美式的批較短、較直接。</p>
<h3>基本結構</h3>
<div class="tbl"><table><tr><th>部分</th><th>例句</th></tr><tr><td>稱呼</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>開頭（問候、講明目的）</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>本文（請求）</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>結尾</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>結束語</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>稱呼一般用 Hi</h3>
<p>佇美國公司，就算是頭一擺聯絡，<b>Hi + 名</b>就真得體，真正式才用 Dear。Mr. / Ms. 後壁接的是<b>姓</b>：寫予 Jason Lin，正式的稱呼是 Dear Mr. Lin，毋是 Dear Mr. Jason。已經知影對方的名，就莫寫 Dear Sir；干焦寫職位 (Dear Manager) 嘛無自然。台灣人慣勢叫「林經理」，英語無這款叫法。</p>
{{ex:I hope this email finds you well.|/aɪ ˈhop ˈðɪs ˈimel ˈfaɪndz jʊ ˈwɛl/|希望你一切攏好}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑlo ˈʌp ɑn aʊɚ ˈmitɪŋ/|我想欲追蹤頂擺會議的代誌}}
<h3>請求愛婉轉，期限愛清楚</h3>
{{ex:Could you send me the report by Thursday?|/kəd jʊ ˈsɛnd mɪ ðə rɪˈpɔrt baɪ ˈθɝzde/|會使上慢禮拜四共報告寄予我無？}}{{ex:Thanks for your patience.|/ˈθæŋks fɚ jʊr ˈpeʃəns/|多謝你耐心等候}}
<p>ASAP 有催人的意思，上好用 <b>by + 日期</b>講明期限。</p>
<h3>台灣公司定看著、外國同事無一定慣勢的寫法</h3>
<div class="tbl"><table><tr><th>台灣常見</th><th>寫予外國同事抑是客戶的時</th></tr><tr><td class="k">Please kindly send…</td><td>please 佮 kindly 用一个就好：Could you send…? / Please send…</td></tr><tr><td class="k">Thanks for your kindly help.</td><td>kindly 是副詞，名詞頭前愛用形容詞 kind：Thanks for your kind help.</td></tr><tr><td class="k">Noted with thanks.</td><td>Got it, thanks. / Thanks for letting me know.</td></tr><tr><td class="k">（結尾）</td><td>I look forward to hearing from you.（to 後壁用 -ing）</td></tr></table></div>
<h3>「辛苦矣」按怎講？</h3>
<p>英語無完全對應的講法，愛看場合換講法：</p>
<ul><li>專案做完的時：<b>Thanks for all your hard work!</b></li><li>禮拜五的批結尾：<b>Have a great weekend!</b></li><li>有人鬥相共的時：<b>I really appreciate your help.</b></li></ul>
<div class="tip">免逐張批攏寫 Sorry for the late reply。換做 <b>Thanks for your patience</b>，免道歉嘛顯出有禮貌、積極。</div>`},

{ id:"idioms", title:"11 · 慣用語佮俚語按怎用", blurb:"直接翻會變笑話的講法。當時用？對啥人用？", deck:"英語慣用語", body:`
<p>慣用語 (idioms) 是逐字的意思加起來嘛臆袂著規句意思的講法。a piece of cake 講的毋是雞卵糕，是「真簡單」。想欲無看字幕就看有美國的連續劇佮電影，一定愛會曉。</p>
<h3>用畫面來記</h3>
<p>大部分的慣用語，若佇頭殼內想一下仔畫面，就真好記。</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpis əv ˈkek/|真簡單（親像食一塊雞卵糕遐簡單）}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔsts ən ˈɑrm ənd ə ˈlɛg/|貴參參（愛用一肢手佮一肢跤去換）}}{{ex:I'm all ears.|/aɪm ˈɔl ˈɪrz/|我專心咧聽（規身軀攏是耳仔）}}
<h3>佮台語相像的講法</h3>
<div class="tbl"><table><tr><th>英語</th><th>台語</th></tr><tr><td class="k">Speak of the devil!</td><td>講著曹操，曹操就到</td></tr><tr><td class="k">Kill two birds with one stone</td><td>一兼二顧</td></tr><tr><td class="k">When pigs fly</td><td>除非日頭對西爿出來</td></tr><tr><td class="k">A blessing in disguise</td><td>塞翁失馬，焉知非福</td></tr></table></div>
<p>有一寡對華語來的講法，英語已經接受矣，像 long time no see（真久無看）、lose face（無面子）。add oil（加油）嘛有收入《牛津英語詞典》，毋過台灣以外的人無一定聽有，詳細請看「台式英語陷阱」彼課。</p>
<h3>慣用語佮俚語</h3>
<p><b>慣用語</b>歷史久，無分年歲，工作場合嘛會使用 (Let's call it a day)。<b>俚語</b>是少年人的流行話，干焦佇朋友之間用（No cap、That song slaps）。俚語變真緊，年歲較大的人用起來可能有淡薄仔怪。</p>
{{ex:Let's call it a day.|/ˈlɛts ˈkɔl ɪt ə ˈde/|今仔日就到遮（開會嘛會使用）}}{{ex:No cap, this is the best pizza ever.|/ˈno ˈkæp ˈðɪs ɪz ðə ˈbɛst ˈpitsə ˈɛvɚ/|講真的，這是我食過上好食的披薩（干焦佇朋友之間）}}
<div class="tip">慣用語用傷濟反倒無自然。一擺對話用一个，用佇著的場合，就會予人「英語真道地」的印象。</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["名唸 /ˈdʒi/ 的是佗一个字母？", ["J","G","Z","C"], 1, "G 的名是 /ˈdʒi/。J 是 /ˈdʒe/，Z 是 /ˈzi/，C 是 /ˈsi/。G 佮 J 頭一个音仝款，愛聽尾仔。"],
    ["佗一个著？", ["a F","an U","a M","an F"], 3, "F 的名 /ˈɛf/ 用母音開頭，所以用 an F。M 的名 /ˈɛm/ 嘛是母音開頭，是 an M；U 的名 /ˈju/ 用 /j/ 開頭，用 a U。"],
    ["想欲請人共一个字拼出來，按怎問？", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "spell 是一般動詞，疑問句愛用助動詞 do，do 後壁用原形動詞：How do you spell that?"]
  ],
  pron: [
    ["唸 R 的時，舌尖佇佗位？", ["頂佇頂排喙齒後壁","伸到頂下喙齒中央","啥物所在攏無摸著","貼佇下脣"], 2, "唸 R 的時舌尖啥物所在攏無摸著。頂佇喙齒後壁就變做 L。"],
    ["think 內底的 th 按怎唸才著？", ["舌尖輕輕伸到頂下喙齒中央，吹氣","兩爿喙脣合起來才拍開","頂排喙齒輕輕摸下脣","舌向後捲"], 0, "唸 TH 的時舌尖愛出現佇頂下喙齒中央。喙齒摸下脣就變做 f，唸做 s 就變做 sink。"],
    ["hotel 的重音佇佗位？", ["ho（頭前）","無重音","兩个音節仝款重","tel（後壁）"], 3, "ho-TEL：後壁的音節愛唸較重、較長，音標是 /hoˈtɛl/。"]
  ],
  articles: [
    ["I'm ___ engineer. 空格愛填啥？", ["a","an","the","（無加）"], 1, "engineer 用母音 /ɛ/ 開頭，所以用 an。頭路頭前一定愛加冠詞。"],
    ["佇餐廳坐落來了後，共服務生講：Can I see ___ menu?", ["the","a","an","（無加）"], 0, "講的是這間餐廳的菜單，雙方攏知影是佗一份，所以用 the。"],
    ["「我佮意貓」（泛指貓這種動物）", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "泛指一類物件的時用複數，無加冠詞。a cat 是「一隻貓」，the cat 是「彼隻貓」。"]
  ],
  be: [
    ["佗一句著？", ["I am like night markets.","I like night markets.","I liking night markets.","I am likes night markets."], 1, "like 是一般動詞，袂使佮 be 動詞 (am) 做伙用。"],
    ["「阮阿姊蹛佇台北」=", ["My sister live in Taipei.","My sister is live in Taipei.","My sister living in Taipei.","My sister lives in Taipei."], 3, "主詞 my sister 是第三人稱單數，動詞愛加 -s：lives。"],
    ["想欲用「我無枵」回答 Are you hungry? 的時", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "用 be 動詞問，就用 be 動詞回答：No, I'm not."]
  ],
  polite: [
    ["對生份人上有禮貌的請求是佗一句？", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "Could you…? 是有禮貌請求的基本句型。Give me 聽起來親像命令。"],
    ["想欲表示「好，我來開」，Would you mind opening the window? 愛按怎回答？", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "mind 是「掛意」。回答 No（無掛意），意思就是「好，我來開」。"],
    ["Would you mind 後壁的動詞用啥物形式？", ["原形動詞 (open)","to + 原形動詞 (to open)","過去式 (opened)","~ing (opening)"], 3, "mind 後壁接 -ing 形式：Would you mind waiting?"]
  ],
  tense: [
    ["「我逐工早起攏啉咖啡」（習慣）", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "習慣用現在式。現在進行式表示「當咧啉」。"],
    ["看著朋友無紮錢包，隨講：「我來付錢！」", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "講話的當下隨決定的代誌用 will。going to 用佇早就決定的計畫。"],
    ["go 的過去式是？", ["goed","gone","going","went"], 3, "go 是不規則動詞：go - went - gone。"]
  ],
  prep: [
    ["「七點見」= Let's meet ___ 7.", ["in","at","on","to"], 1, "準確的時間頭前用 at。"],
    ["「佇禮拜一」= ___ Monday", ["on","in","at","by"], 0, "禮拜幾佮日期頭前用 on。"],
    ["佗一句著？", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "next、last、this、every 頭前無加介系詞。"]
  ],
  smalltalk: [
    ["咖啡店的店員講 How are you today?，上自然的回答是？", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "How are you? 是相借問。簡單回答一句，閣倒問一句就真好。"],
    ["頭一擺見面上好閃佗一个問題？", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "佇講英語的國家，一見面就問人年歲，可能會予人無歡喜。"],
    ["想欲同意 I don't like horror movies.，愛講", ["Me too.","So do I.","Me neither.","Me also."], 2, "附和否定句用 Me neither（抑是 Neither do I）。"]
  ],
  phrasal: [
    ["「你會使共關掉無？」佗一句著？", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "代名詞 (it) 愛囥佇片語動詞中央：turn it off。"],
    ["run out of 是啥物意思？", ["向外走","共……用完","對……逃出來","慢到"], 1, "We ran out of milk. = 牛奶攏用完矣。"],
    ["「咱共會議延到後禮拜」=", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "put off 是「延期」。put on 是「穿（衫）、開（機器）」，put out 是「拍熄（火）」。"]
  ],
  numbers: [
    ["50,000（五萬）英語按怎講？", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "英語三位一節：50 + thousand = fifty thousand。"],
    ["thirteen 的重音佇佗位？", ["thir（頭前）","teen（後壁）","兩个音節仝款重","無重音"], 1, "-teen 結尾的數字重音佇後壁，thirty 的重音佇頭前。"],
    ["$12.50 上自然的唸法是？", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "價錢唸做兩个數：twelve fifty。"]
  ],
  email: [
    ["頭一擺聯絡客戶公司的負責人 Jenny Brown，上得體的稱呼是？", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "美國的工作電子批用 Hi + 名上穩。真正式才用 Dear Ms. Brown。"],
    ["專案做完了後，想欲共團隊講「辛苦矣」，愛按怎講？", ["Thanks for all your hard works.","Thanks for all your hard work!","You did a hard work.","Please work harder."], 1, "英語無佮「辛苦矣」完全對應的講法，愛用感謝對方付出的方式來表達。work 做「工作、付出」解的時是不可數名詞，無加 -s，頭前嘛無加 a。"],
    ["佗一句會使有禮貌講出期限？", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "用 Could you…? 加 by + 日期，婉轉閣清楚。"]
  ],
  idioms: [
    ["The test was a piece of cake. 是啥物意思？", ["考試真簡單","考試的時食雞卵糕","考試真困難","考試考甲真䆀"], 0, "a piece of cake = 真簡單。"],
    ["I'm feeling under the weather. 是啥物意思？", ["天氣真䆀","我佇外口","我身體有淡薄仔無爽快","我予雨沃澹矣"], 2, "佮天氣無關係，意思是「身體無啥爽快」。"],
    ["共頂司報告的時，佗一句上無適合？", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "No cap 佮 slaps 是朋友之間用的俚語。慣用語佇工作場合嘛會使用。"]
  ]
};
