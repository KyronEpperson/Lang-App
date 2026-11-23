/* yue-en lessons (stage 1). English side shared with ko-en (parity.js); Chinese text converted from zh-en and adapted for
   Hong Kong Cantonese speakers (docs/profiles/yue.md): Hong Kong written Chinese, spoken Cantonese only inside quotation marks. */
exports.LESSONS = [
{ id:"alphabet", title:"1 · 英文字母：字母名稱和口頭串字", blurb:"字母都認識，但名稱一說快就容易聽錯。學會 26 個字母的名稱，用英文串出名字、電郵地址和預訂編號。", deck:"英文字母", body:`
<p>在酒店櫃枱登記、打電話給客戶服務、報預訂編號時，常會聽到一句：How do you spell that? 這時要把名字、電郵地址或訂單編號<b>逐個字母</b>說出來，說的是每個字母的<b>英文名稱</b>。26 個字母你早已認識，但名稱說得含糊，對方聽錯一個字母，電郵就寄不到。花幾分鐘把 26 個名稱連同音標看一遍，順便認識這個課程用的音標。</p>
<h3>26 個字母的名稱</h3>
<p>粗體的 <b>A E I O U</b> 是五個元音字母，其餘是輔音字母。音標標的是字母的<b>名稱</b>，也就是串字時說出來的音。</p>
<div class="tbl"><table><tr><td class="k"><b>A</b> /ˈeɪ/</td><td class="k">B /ˈbiː/</td><td class="k">C /ˈsiː/</td><td class="k">D /ˈdiː/</td><td class="k"><b>E</b> /ˈiː/</td></tr><tr><td class="k">F /ˈef/</td><td class="k">G /ˈdʒiː/</td><td class="k">H /ˈeɪtʃ/</td><td class="k"><b>I</b> /ˈaɪ/</td><td class="k">J /ˈdʒeɪ/</td></tr><tr><td class="k">K /ˈkeɪ/</td><td class="k">L /ˈel/</td><td class="k">M /ˈem/</td><td class="k">N /ˈen/</td><td class="k"><b>O</b> /ˈoʊ/</td></tr><tr><td class="k">P /ˈpiː/</td><td class="k">Q /ˈkjuː/</td><td class="k">R /ˈɑːr/</td><td class="k">S /ˈes/</td><td class="k">T /ˈtiː/</td></tr><tr><td class="k"><b>U</b> /ˈjuː/</td><td class="k">V /ˈviː/</td><td class="k">W /ˈdʌbəljuː/</td><td class="k">X /ˈeks/</td><td class="k">Y /ˈwaɪ/</td></tr><tr><td class="k">Z /ˈziː/</td><td></td><td></td><td></td><td></td></tr></table></div>
<h3>最容易聽錯的字母名稱</h3>
<p>下面幾組名稱，說的人要讀清楚，聽的人也要留心：</p>
<div class="tbl"><table><tr><th>字母</th><th>英文名稱</th><th>留意</th></tr><tr><td class="k">Z</td><td>/ˈziː/</td><td>美國說 zee。學校教的英式名稱是 zed，兩個都正確；這個課程的聲音是美式，所以你會聽到 zee。開頭的 /z/ 聲帶要振動，否則聽起來像 C</td></tr><tr><td class="k">G、J</td><td>/ˈdʒiː/、/ˈdʒeɪ/</td><td>開頭的音相同，分別在結尾：G 的結尾是 /iː/，J 的結尾是 /eɪ/</td></tr><tr><td class="k">E、I</td><td>/ˈiː/、/ˈaɪ/</td><td>I 和表示「我」的 I 同音。報電郵地址時，E 和 I 最容易說反</td></tr><tr><td class="k">F、L、M、N、S、X</td><td>/ˈef/、/ˈel/、/ˈem/、/ˈen/、/ˈes/、/ˈeks/</td><td>每個都只有一個音節，以輔音收尾，後面不加元音。X 的結尾是 /ks/，兩個輔音都要讀出來</td></tr><tr><td class="k">L、N</td><td>/ˈel/、/ˈen/</td><td>分別只在結尾：N 的氣從鼻出，L 是舌尖抵住上齒齦、氣從舌頭兩邊出</td></tr><tr><td class="k">H</td><td>/ˈeɪtʃ/</td><td>以 /eɪ/ 開頭，以 /tʃ/ 收尾，只有一個音節</td></tr><tr><td class="k">R</td><td>/ˈɑːr/</td><td>美式要把結尾的 r 讀出來：舌尖稍向後捲，不碰任何地方。英式的 R 沒有這個 r 音，同樣正確</td></tr><tr><td class="k">V、W</td><td>/ˈviː/、/ˈdʌbəljuː/</td><td>V 要上齒輕觸下唇、聲帶振動，嘴唇不要收圓。W 的名稱是 double u（兩個 U），三個音節都要讀出來</td></tr></table></div>
<h3>問串法、報串法</h3>
<p>對方聽不清某個字母時，可以在字母後面加一個以它開頭的簡單生字，例如 <b>B as in boy</b>。last name 是「姓氏」：Amy Chan 的 last name 是 Chan。</p>
{{ex:How do you spell that?|/ˈhaʊ də ju ˈspel ˈðæt/|那個字怎樣串？}}{{ex:How do you spell your last name?|/ˈhaʊ də ju ˈspel jʊr ˈlæst ˈneɪm/|你的姓氏怎樣串？}}{{ex:Can you spell that, please?|/kən ju ˈspel ˈðæt ˈpliːz/|可以串一次嗎？}}{{ex:It starts with a capital T.|/ɪt ˈstɑːrts wɪð ə ˈkæpɪtl ˈtiː/|以大寫字母 T 開頭}}{{ex:B as in boy.|/ˈbiː əz ɪn ˈbɔɪ/|boy 的 B}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈem əz ɪn ˈmeri/|是 Mary 的 M 嗎？}}{{ex:There are two Ls in hello.|/ðer ər ˈtuː ˈelz ɪn həˈloʊ/|hello 裏有兩個 L}}
<h3>字母名稱前用 a 還是 an</h3>
<p>冠詞 (articles) 看字母名稱的<b>第一個音</b>，不看字母本身。F、H、L、M、N、R、S、X 的名稱都以元音開頭，所以說 <b>an F</b>、<b>an H</b>、<b>an L</b>、<b>an M</b>、<b>an N</b>、<b>an R</b>、<b>an S</b>、<b>an X</b>。</p>
<p>U 雖然是元音字母，名稱卻和 you 一樣以 /j/ 開頭，所以是 <b>a U</b>，道理和 a university 相同。</p>
<div class="tip">報電郵地址的說法：大寫字母說 <b>capital T</b>，兩個相同的字母連在一起說 <b>double L</b>，@ 讀 <b>at</b>，點 (.) 讀 <b>dot</b>。例如 amy.chan@mail.com 讀作 <b>A-M-Y dot C-H-A-N at mail dot com</b>。</div>`},

{ id:"pron", title:"1 · 發音陷阱：N / L、字尾輔音、V、TH", blurb:"先看懂音標，再處理說廣東話的人最常遇到的發音問題：n / l、字尾輔音、輔音連綴、v、z、TH 和重音。", deck:"發音易錯", body:`
<p>這個課程的卡片和例句都標了<b>音標（國際音標）</b>。音標不是拼音 (phonics)：一個符號只有一個讀法。符號和學校、字典用的是同一套，但標的是<b>美式發音</b>，因為這個課程的聲音是美式的。每個音標旁邊都有聲音，邊聽邊看就可以了；不想看音標時，可以用「Aa 音標」開關或設定裏的「練習時顯示音標」把它關掉。</p>
<h3>音標符號表</h3>
<div class="tbl"><table><tr><th>符號</th><th>例字</th><th>符號</th><th>例字</th></tr><tr><td class="k">iː</td><td>see</td><td class="k">ɪ</td><td>sit</td></tr><tr><td class="k">uː</td><td>food</td><td class="k">ʊ</td><td>foot</td></tr><tr><td class="k">e</td><td>bed</td><td class="k">æ</td><td>bad</td></tr><tr><td class="k">ʌ</td><td>cup</td><td class="k">ə</td><td><b>a</b>bout</td></tr><tr><td class="k">ɑː</td><td>hot、father</td><td class="k">ɔː</td><td>law、walk</td></tr><tr><td class="k">ɜːr</td><td>bird</td><td class="k">ər</td><td>teach<b>er</b></td></tr><tr><td class="k">eɪ</td><td>day</td><td class="k">oʊ</td><td>go</td></tr><tr><td class="k">aɪ</td><td>my</td><td class="k">aʊ</td><td>now</td></tr><tr><td class="k">ɔɪ</td><td>boy</td><td class="k">ŋ</td><td>si<b>ng</b></td></tr><tr><td class="k">θ</td><td><b>th</b>ink</td><td class="k">ð</td><td><b>th</b>is</td></tr><tr><td class="k">ʃ</td><td><b>sh</b>e</td><td class="k">ʒ</td><td>u<b>s</b>ually</td></tr><tr><td class="k">tʃ</td><td><b>ch</b>air</td><td class="k">dʒ</td><td><b>j</b>ob</td></tr><tr><td class="k">ˈ</td><td>重音符號，標在重讀音節前面</td><td class="k">ː</td><td>長元音</td></tr></table></div>
<p>這個課程連單音節的實詞也標 <b>ˈ</b>；沒有 ˈ 的 a、the、to、can 等字要讀得又輕又快（弱讀）。</p>
<h3>你學的英式，和這裏的美式</h3>
<div class="tbl"><table><tr><th>英式（學校教的）</th><th>美式（這個課程）</th><th>例字</th></tr><tr><td class="k">ɒ</td><td>ɑː</td><td>hot /ˈhɑːt/、job /ˈdʒɑːb/</td></tr><tr><td class="k">əʊ</td><td>oʊ</td><td>go /ˈgoʊ/、home /ˈhoʊm/</td></tr><tr><td class="k">can't、class、ask 的 ɑː</td><td>æ</td><td>/ˈkænt/、/ˈklæs/、/ˈæsk/</td></tr><tr><td class="k">ɪə、eə、ʊə</td><td>ɪr、er、ʊr</td><td>here /ˈhɪr/、where /ˈwer/</td></tr><tr><td class="k">元音後面的 r 不讀</td><td>r 要讀出來</td><td>car /ˈkɑːr/、teacher /ˈtiːtʃər/、work /ˈwɜːrk/</td></tr><tr><td class="k">清楚的 t</td><td>兩個元音之間的 t 像輕輕的 d</td><td>water、better、city（音標仍然寫 t）</td></tr></table></div>
<p>英式讀法同樣正確，不用改。知道這幾處分別，就不會覺得音標和聲音「不對」。</p>
<h3>N 和 L</h3>
<p>廣東話日常說話時，n 開頭的字常常讀成 l（例如「你」），大家都聽得明白。英文卻靠 n 和 l 分辨字義：night（夜晚）讀成 l 就是 light（光）。讀 <b>n</b> 時舌尖抵住上齒齦，氣<b>從鼻出</b>；讀 <b>l</b> 時氣從舌頭兩邊出。</p>
{{ex:night|/ˈnaɪt/|夜晚}}{{ex:light|/ˈlaɪt/|光 / 燈 / 輕的}}{{ex:know|/ˈnoʊ/|知道}}{{ex:low|/ˈloʊ/|低的}}
<h3>R 和 L，還有字首的輔音連綴</h3>
<p>讀 <b>L</b> 時舌尖抵住上齒齦再放開；讀 <b>R</b> 時舌尖<b>不碰任何地方</b>，稍向後縮，嘴唇略圓。rice（飯）讀成 L 就成了 lice（蝨子）。兩三個輔音連在一起（輔音連綴）時，l 和 r 最容易漏掉或互換：place 讀成 "pace"，bring 讀成 "bling"。每個輔音都要讀出來，中間不加元音。</p>
{{ex:rice|/ˈraɪs/|米 / 飯}}{{ex:lice|/ˈlaɪs/|蝨子}}{{ex:right|/ˈraɪt/|右邊 / 正確的}}{{ex:place|/ˈpleɪs/|地方}}{{ex:pace|/ˈpeɪs/|步伐 / 速度}}{{ex:bring|/ˈbrɪŋ/|帶來}}
<h3>字尾輔音：要讀出來，b、d、g 要保持濁音</h3>
<p>廣東話的音節只以元音、m / n / ng，或者收住不放的 p / t / k 結尾（例如「六」）。所以英文字尾的輔音很容易讀得聽不見，b、d、g 也容易變成 p、t、k：bag（袋）聽起來像 back（背部）。英文的字尾輔音要<b>輕輕讀出來</b>；b、d、g 是濁音，聲帶要振動，前面的元音也稍為拉長。</p>
{{ex:bag|/ˈbæg/|袋}}{{ex:back|/ˈbæk/|背部 / 後面}}{{ex:bed|/ˈbed/|床}}{{ex:bet|/ˈbet/|打賭}}
<h3>字尾的輔音連綴：-s 和 -ed 都在這裏</h3>
<p>cold 讀成 "code"、list 讀成 "lis"，都是少了一個輔音。眾數 (plural) 的 -s、第三身單數的 -s 和過去式的 -ed 全都在字尾；吞掉了，聽的人就當是文法錯誤。</p>
{{ex:cold|/ˈkoʊld/|冷的}}{{ex:code|/ˈkoʊd/|密碼 / 代碼}}{{ex:friends|/ˈfrendz/|朋友（眾數）}}{{ex:asked|/ˈæskt/|問了（ask 的過去式）}}
<h3>V、Z 和 F</h3>
<p><b>V</b> 是上齒輕觸下唇，聲帶振動。字首不要讀成圓唇的 w：very 會變成 wary（謹慎）；字尾不要讀成 f：five、live 的結尾聲帶仍要振動。V 也不是雙唇閉合的 B：vote（投票）和 boat（船）是兩個字。<b>F</b> 的口形和 V 一樣，但聲帶不振動；雙唇閉合就成了 P：fan（風扇）/ pan（平底鑊）。<b>Z</b> 是聲帶振動的 s：zip（拉鏈）不振動就成了 sip（喝一小口）。</p>
{{ex:very|/ˈveri/|非常}}{{ex:wary|/ˈweri/|謹慎的}}{{ex:vote|/ˈvoʊt/|投票}}{{ex:boat|/ˈboʊt/|船}}{{ex:zip|/ˈzɪp/|拉鏈 / 拉上}}{{ex:sip|/ˈsɪp/|小口地喝}}
<h3>TH：舌尖放在上下齒之間</h3>
<p>廣東話沒有 TH 的音。把舌尖<b>輕輕伸到上下齒之間</b>送氣：只送氣是 think 的 /θ/，聲帶振動是 this 的 /ð/。最常見的代替音是 f 和 d：three 變成 free（免費），they 變成 day（日子）。用 s 代替也不對：think 會變成 sink（洗滌盆）。</p>
{{ex:think|/ˈθɪŋk/|想 / 認為}}{{ex:sink|/ˈsɪŋk/|洗滌盆 / 下沉}}{{ex:three|/ˈθriː/|三}}{{ex:free|/ˈfriː/|自由的 / 免費的}}{{ex:this|/ˈðɪs/|這個}}
<h3>長短元音，還有 /æ/ 和 /e/</h3>
<p>/iː/ 和 /ɪ/ 不只是長短不同，口形也不同：leave（離開）/ live（居住）。/uː/ 和 /ʊ/ 也是一對：fool（傻瓜）/ full（滿）。/æ/ 的嘴比 /e/ 張得更大：bad（壞）/ bed（床）。</p>
{{ex:leave|/ˈliːv/|離開}}{{ex:live|/ˈlɪv/|住 / 生活}}{{ex:fool|/ˈfuːl/|傻瓜}}{{ex:full|/ˈfʊl/|滿的 / 飽的}}{{ex:bad|/ˈbæd/|壞的}}
<h3>雙元音後面的輔音，還有字尾的 l</h3>
<p>廣東話沒有「雙元音 + 輔音」的音節，所以 time、like、game 的字尾輔音容易不見，或者元音被讀短（game 讀成 "gem"）。先把 /aɪ/、/eɪ/ 讀完整，再讀出 m 或 k。字尾的 l 也要用舌尖抵住上齒齦，不要讀成元音：feel、will。</p>
{{ex:time|/ˈtaɪm/|時間}}{{ex:like|/ˈlaɪk/|喜歡 / 好像}}{{ex:game|/ˈgeɪm/|遊戲 / 比賽}}{{ex:feel|/ˈfiːl/|感覺}}
<h3>重音和弱讀決定對方能不能聽懂</h3>
<p>廣東話每個字的分量差不多，沒有弱讀的音節。英文的多音節字裏卻總有一個音節讀得<b>又重、又長、又高</b>，其他音節弱讀，元音常常變成 /ə/：about 是 /əˈbaʊt/，開頭不是清楚的 a。重音錯了，其他音再準，對方也可能聽不懂。</p>
<div class="tbl"><table><tr><th>生字</th><th>重音</th><th>音標</th></tr><tr><td class="k">banana</td><td>ba-<b>NA</b>-na</td><td>/bəˈnænə/</td></tr><tr><td class="k">hotel</td><td>ho-<b>TEL</b></td><td>/hoʊˈtel/</td></tr><tr><td class="k">McDonald's</td><td>mc-<b>DON</b>-ald's</td><td>/məkˈdɑːnldz/</td></tr><tr><td class="k">thirteen / thirty</td><td>thir-<b>TEEN</b> / <b>THIR</b>-ty</td><td>/ˌθɜːrˈtiːn/、/ˈθɜːrti/</td></tr></table></div>
<div class="tip">自我檢查：讀 F、V 時上齒要碰到下唇，讀 TH 時舌尖要露在齒間，<b>照鏡能看見</b>就對了。讀到字尾時，記得把最後一個輔音讀出來。帶一點口音不要緊，目標是讓人聽得明白。</div>`},

{ id:"articles", title:"2 · a 和 the：冠詞入門", blurb:"中文沒有冠詞，a 和 the 最容易漏掉，也最容易亂加。記住三種情況就夠了。", deck:"自我介紹", body:`
<p>中文沒有冠詞 (articles)，所以 a 和 the 最容易漏掉，也最容易亂加。要留意：「一個」不一定是 a，「呢個 / 嗰個」也不等於 the。廣東話說「我係學生」，沒有「一個」，英文照樣要加 a：I'm <b>a</b> student. 廣東話說「本書好睇」，單靠量詞「本」就知道是哪一本；英文沒有這種用法，要說 <b>The</b> book is good.</p>
<h3>a / an：第一次提到的「一個」</h3>
<p>可數名詞單數<b>第一次</b>出現時，前面加 a / an。職業前面也一定要加：She's <b>a</b> teacher.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|我是學生}}{{ex:I have a dog.|/aɪ ˈhæv ə ˈdɔːg/|我養了一隻狗}}
<p>用 a 還是 an，看<b>發音</b>，不看串法：以元音開頭的字前面用 an。看音標最清楚。</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university（/j/ 開頭）</td><td class="k">an hour（h 不發音）</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket（/w/ 開頭）</td><td class="k">an MBA（/e/ 開頭）</td></tr></table></div>
<h3>the：雙方都知道的「那個」</h3>
<p>前面已經提過，或者從場合看雙方都知道是哪一個，就用 the。獨一無二的東西也用 the：the sun、the internet。</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|我養了一隻狗。那隻狗非常可愛}}{{ex:Can you close the door?|/kən ju ˈkloʊz ðə ˈdɔːr/|可以把門關上嗎？（這個房間的門）}}
<h3>不加冠詞：泛指</h3>
<p>泛指「某一類東西」時，用眾數 (plural) 或不可數名詞，<b>不加冠詞</b>。很多人覺得加一個 the 比較穩妥，其實亂加 the 和漏掉 a 一樣常見：<b>I like the music.</b> ✗ → <b>I like music.</b> ✓ 三餐、語言、運動前面也不加冠詞。</p>
{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|我喜歡狗（泛指狗這種動物）}}{{ex:I don't drink coffee.|/aɪ ˈdoʊnt ˈdrɪŋk ˈkɔːfi/|我不喝咖啡}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|我們吃午飯吧}}
<div class="tip">最常見的錯誤：<b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ 職業前面的 a 不要漏。</div>`},

{ id:"be", title:"3 · be 動詞和一般動詞", blurb:"am / is / are 和 do / does：關鍵是不要混在一起用。", deck:"自我介紹", body:`
<p>英文句子裏一定要有動詞。這個動詞是 <b>be 動詞</b>還是<b>一般動詞</b>（be 以外的動詞，例如 like、live、work），決定了否定句和疑問句怎樣變。</p>
<h3>兩類動詞</h3>
<div class="tbl"><table><tr><th></th><th>be 動詞</th><th>一般動詞</th></tr><tr><td>意思</td><td>是、在、處於某種狀態</td><td>動作、習慣、喜好（吃、住、喜歡）</td></tr><tr><td>例句</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>否定句</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>疑問句</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<p>be 動詞隨主語變化：<b>I am</b> / <b>you、we、they are</b> / <b>he、she、it is</b>。說話時幾乎總是用縮寫：I'm、you're、she's。疑問句也一定要有 be，放在主語前面。</p>
{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|我肚子餓了}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|她在上班}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|你還好嗎？}}
<h3>形容詞前面不能少了 be</h3>
<p>廣東話說「佢好靚」，句子裏沒有「係」。英文的形容詞不能單獨作謂語，前面一定要有 be 動詞。</p>
{{ex:She's very beautiful.|/ʃiz ˈveri ˈbjuːtɪfl/|她很漂亮 (She very beautiful ✗)}}
<h3>be 動詞和一般動詞不能連用</h3>
<p>反過來，句子裏已經有一般動詞，就不要再加 be：I am agree ✗、He is come from Macau ✗、They are lack of time ✗ (→ They lack time ✓)。</p>
{{ex:I like Cantopop.|/aɪ ˈlaɪk ˈkæntoʊˌpɑːp/|我喜歡廣東歌 (I am like ✗)}}{{ex:I live in Hong Kong.|/aɪ ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我住在香港 (I am live ✗)}}{{ex:I agree.|/aɪ əˈgriː/|我同意 (I am agree ✗)}}
<h3>he、she、it 後面加 -s</h3>
<p>主語是第三身單數（he、she、it，或者一個人、一件事）時，現在式 (present tense) 的一般動詞要加 <b>-s</b>。否定句和疑問句用 <b>does</b>；用了 does，動詞就回復原形。</p>
{{ex:My brother works in Central.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈsentrəl/|我哥哥在中環工作}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|他會說英文嗎？}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|她不吃肉}}
<div class="tip">拿不準時問自己：句子裏除了 be 動詞，還有沒有<b>其他動詞</b>（like、live、work……）？有就用 do / does 變否定句和疑問句；沒有（後面只有形容詞、名詞或地點）就用 be 動詞。第三身單數的 -s 說話時也要讀出來。</div>`},

{ id:"polite", title:"4 · 有禮貌地請求", blurb:"Can you → Could you → Would you mind。不要再說 Give me 了。", deck:"求生英文 1", body:`
<p>廣東話一句「唔該」就夠禮貌；英文的禮貌靠的是<b>請求的句式</b>。同樣的意思，換一個句式就能由生硬變得得體。要留意：中文的「請給我……」很客氣，直譯成 Please give me… 卻仍然是命令句，聽起來很生硬。</p>
<h3>禮貌程度的階梯</h3>
<div class="tbl"><table><tr><th>說法</th><th>語氣</th><th>適用場合</th></tr><tr><td class="k">Give me…</td><td>命令，聽起來沒有禮貌</td><td>不要用</td></tr><tr><td class="k">Can you…?</td><td>隨意的請求</td><td>朋友、店舖</td></tr><tr><td class="k">Could you…?</td><td>禮貌的請求</td><td>陌生人、工作場合</td></tr><tr><td class="k">Would you mind …ing?</td><td>非常客氣</td><td>麻煩別人的事、對上司</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|可以幫幫我嗎？}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|可以再說一次嗎？}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|可以麻煩你替我們拍一張照片嗎？}}
<h3>點餐時說 Can I get…? / I'd like…</h3>
<p>I want… 聽起來像小孩子在要東西。在店裏要這樣說：</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|請給我一杯鮮奶咖啡}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|我想要靠窗的座位}}
<h3>Would you mind…? 的陷阱</h3>
<p>mind 是「介意」的意思，所以回答 <b>No 才表示「可以」</b>。</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|可以麻煩你開窗嗎？}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|好的，沒問題（一點也不介意）}}
<div class="tip">「唔該」在英文要分三個說法：請人做事是 <b>please</b>，道謝是 <b>thank you</b>，請人讓路或想引起注意是 <b>excuse me</b>。please 和 thank you 說多少次也不嫌多。語調也很重要：句尾稍微上揚是請求，往下降就像命令。</div>`},

{ id:"tense", title:"5 · 時態一覽：現在、過去、將來", blurb:"習慣用現在式，正在做的事用現在進行式，計劃用 be going to。", deck:"閒談", body:`
<p>廣東話的動詞不變形，時間靠「琴日、聽日」這類字詞，或者「咗、過、緊」這類助詞來表示。英文卻必須<b>改變動詞</b>：句子裏有了 yesterday，動詞照樣要用過去式 (past tense)。閒談時最常用的是下面五種形式。</p>
<h3>廣東話的助詞 ≠ 英文的時態 (tense)</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>常見對應</th><th>留意</th></tr><tr><td class="k">「緊」（「做緊」）</td><td>現在進行式 be + -ing</td><td>只表示「正在做」</td></tr><tr><td class="k">「咗」（「做咗」）</td><td>多數是過去式</td><td>「咗」表示完成，不等於過去：「我聽日食咗飯先走」說的是明天</td></tr><tr><td class="k">「過」（「去過」）</td><td>現在完成式</td><td>表示經驗：I've been to…</td></tr><tr><td class="k">「會」 / 「打算」</td><td>will / be going to</td><td>事先定好的計劃用 going to</td></tr></table></div>
<h3>現在式和現在進行式</h3>
<div class="tbl"><table><tr><th>形式</th><th>意思</th><th>例句</th></tr><tr><td class="k">現在式</td><td>習慣、一向如此的事實</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing</td><td>正在做 / 已經定好的近期安排</td><td>I'm drinking coffee right now.</td></tr></table></div>
{{ex:I work at a bank.|/aɪ ˈwɜːrk ət ə ˈbæŋk/|我在銀行工作（一向如此）}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|我今天在家工作}}
<h3>過去式</h3>
<p>規則動詞加 <b>-ed</b>，但最常用的動詞大多是不規則的：go → went、eat → ate、see → saw、have → had、get → got。</p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|我上個週末去了沙灘}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|玩得開心嗎？}}
<h3>將來：will 和 be going to</h3>
<div class="tbl"><table><tr><th></th><th>甚麼時候用</th><th>例句</th></tr><tr><td class="k">will</td><td>說話時即時決定、承諾</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>事先定好的計劃</td><td>I'm going to visit Macau next month.</td></tr></table></div>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|我稍後打電話給你}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|我打算去上烹飪班}}
<p>說話時 going to 常讀成 <b>gonna</b>，書寫時仍然寫 going to。</p>
<div class="tip">回答 How was your weekend? 用過去式，回答 Any plans for the weekend? 用 going to。跟着問句的時態回答，最簡單。</div>`},

{ id:"prep", title:"6 · 介詞 in / on / at", blurb:"範圍大用 in，某一天用 on，一個點用 at。", deck:"數字、時間與日期", body:`
<p>廣東話一個「喺」就夠了，英文卻要分 in、on、at，時間和地點都是這樣。記住<b>範圍越大用 in，越小越具體用 at</b>，大部分情況都不會錯。</p>
<h3>時間</h3>
<div class="tbl"><table><tr><th>介詞</th><th>範圍</th><th>例子</th></tr><tr><td class="k">in</td><td>月份、年份、季節、一天中的時段</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>星期、日期、特定的某一天</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>確實時刻、短暫的時間點</td><td>at 7, at noon, at night</td></tr></table></div>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|星期五見}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|會議三點開始}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|我在 1998 年出生}}
<h3>地點</h3>
<div class="tbl"><table><tr><th>介詞</th><th>感覺</th><th>例子</th></tr><tr><td class="k">in</td><td>空間裏面、城市、國家</td><td>in the car, in Hong Kong, in Japan</td></tr><tr><td class="k">on</td><td>表面上、街道、公共交通工具</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>一個點、為某個目的而去的地方</td><td>at the station, at work, at home</td></tr></table></div>
<p>留意：在巴士、地鐵、火車上都用 <b>on</b>，不說 in the bus；在某間公司工作用 at，例如 at Google。</p>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|我在巴士上}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|我們在車站見吧}}{{ex:She works at Google.|/ʃi ˈwɜːrks ət ˈguːgl/|她在 Google 工作}}
<h3>不用介詞的情況</h3>
<p><b>next、last、this、every、tomorrow、yesterday</b> 前面不加介詞。</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|下星期見 (on next week ✗)}}
<p>動詞後面的介詞也要留意：<b>discuss、enter、marry</b> 直接接賓語，不加介詞 (discuss about ✗)；<b>listen to、wait for、apply for</b> 的介詞卻不能漏 (wait me ✗)。</p>
<div class="tip">這些例外要記住：<b>at night</b>（在夜晚）、<b>in the morning / afternoon / evening</b>。週末美式說 <b>on the weekend</b>，英式說 <b>at the weekend</b>，兩個都正確。</div>`},

{ id:"smalltalk", title:"7 · 閒談文化", blurb:"How are you? 不是提問，而是打招呼。哪些話題安全，哪些要避開。", deck:"閒談", body:`
<p>在英語國家，升降機裏、收銀處前、會議開始前，和陌生人也會隨口聊幾句。這不是深入的交談，而是<b>讓氣氛輕鬆的簡短對話</b>。</p>
<h3>How are you? 是打招呼</h3>
<p>對方並不是真的想知道你過得怎樣，就像廣東話的「食咗飯未？」不是真的在問你吃了飯沒有。簡單回答，再<b>反問一句</b>才有禮貌。反過來，把「食咗飯未？」直譯成 Have you eaten? 在英文裏不是問候，對方可能以為你想請他吃飯。</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|嗨，最近怎樣？}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|很好！你呢？}}
<h3>安全話題和要避開的話題</h3>
<div class="tbl"><table><tr><th>安全</th><th>初次見面最好避開</th></tr><tr><td>天氣、週末和假期計劃</td><td>年齡、婚姻狀況</td></tr><tr><td>美食、餐廳、旅行</td><td>體重和外表（「你是不是胖了？」）</td></tr><tr><td>劇集、電影、運動</td><td>薪金、租金、樓價</td></tr><tr><td>工作（輕鬆地談）、住在哪一區</td><td>政治、宗教</td></tr></table></div>
<p>在香港，熟人之間問薪金、租金或年齡，有時是關心的表現；在英語國家，初次見面問這些會令人覺得冒犯。</p>
<h3>讓對話繼續下去的技巧</h3>
<p>回答 + <b>多說一點資料</b> + <b>反問</b>。有這三步，對話就不會冷場。</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|很好！我去了行山。你呢？}}
<p>附和也很重要：<b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>自然地結束</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|那麼我先走了}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|跟你聊天很開心}}
<div class="tip">附和否定句要用 <b>Me neither</b>：I don't like horror movies. → Me neither. 這裏不能用 Me too 回答。美式口語也會聽到 Me either，但標準說法是 Me neither。</div>`},

{ id:"phrasal", title:"8 · 片語動詞入門", blurb:"動詞 + 一個短字 = 全新的意思。以英文為母語的人日常說話少不了它。", deck:"片語動詞", body:`
<p>片語動詞 (phrasal verbs) 由<b>動詞 + up、out、off、on 這類短字</b>組成，表達新的意思。課本裏的長字（postpone、discover）在日常對話中反而不及片語動詞常用。中文的「關掉、找到、長大」也是動詞加一個小成分，可以借這種感覺來理解。</p>
<div class="tbl"><table><tr><th>正式用字</th><th>片語動詞（日常）</th><th>意思</th></tr><tr><td>postpone</td><td class="k">put off</td><td>延期</td></tr><tr><td>discover</td><td class="k">find out</td><td>發現、得知</td></tr><tr><td>exercise</td><td class="k">work out</td><td>做運動、健身</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>忍受</td></tr></table></div>
<h3>短字裏藏着提示</h3>
<p><b>up</b> 有「完全、向上」的意思，<b>out</b> 有「向外、到盡頭」的意思，<b>off</b> 有「離開、停止」的意思，<b>on</b> 有「接觸、持續」的意思。</p>
{{ex:I grew up in Kowloon.|/aɪ ˈgruː ˈʌp ɪn ˌkaʊˈluːn/|我在九龍長大}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|牛奶喝完了}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|請把手機關掉}}
<h3>代名詞放中間</h3>
<p>很多帶賓語的片語動詞可以拆開。名詞放在前後都可以，但 <b>it、them、me 這類代名詞一定放在中間</b>。順帶一提，廣東話的「開燈、熄燈」是 turn on / turn off the light，不能說 open / close the light。</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|開燈（兩種說法都對）}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|把它開啟 (turn on it ✗)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|我七點來接你}}
<h3>不能拆開的片語動詞</h3>
<p>look after、look for、get along with 這類帶介詞的不能拆開：<i>look after my cat</i>、<i>look after her</i>。</p>
<div class="tip">片語動詞要像生字一樣<b>整個記</b>。連同例句一起記，代名詞的位置自然就記住了。每天挑三個，在真實對話裏用一用。</div>`},

{ id:"numbers", title:"9 · 數字、時間和價錢", blurb:"英文沒有「萬」，13 和 30 要分清，還有價錢、日期和樓層的說法。", deck:"數字、時間與日期", body:`
<p>數字在旅行和工作中馬上就要用到，但中英文的計數單位不同，很容易出錯。</p>
<h3>三位一節</h3>
<p>中文四位一節（萬、億），英文<b>三位一節</b>（thousand、million、billion）。逗號的位置就是單位。</p>
<div class="tbl"><table><tr><th>數字</th><th>中文</th><th>英文</th></tr><tr><td class="k">10,000</td><td>一萬</td><td>ten thousand</td></tr><tr><td class="k">50,000</td><td>五萬</td><td>fifty thousand</td></tr><tr><td class="k">100,000</td><td>十萬</td><td>one hundred thousand</td></tr><tr><td class="k">1,000,000</td><td>一百萬</td><td>one million</td></tr><tr><td class="k">100,000,000</td><td>一億</td><td>one hundred million</td></tr></table></div>
<p>港元和美元在英文裏都叫 dollars。在香港說價錢，直接說 30 dollars；要分清楚時才說 Hong Kong dollars 或 US dollars。</p>
<h3>-teen 和 -ty</h3>
<p>13–19 的重音在<b>後</b>，30、40、50…… 的重音在<b>前</b>。美式 thirty 裏的 t 常讀得像輕輕的 d。看音標裏 ˈ 的位置，就知道重音在哪裏。</p>
{{ex:thirteen|/ˌθɜːrˈtiːn/|數字 13}}{{ex:thirty|/ˈθɜːrti/|數字 30}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|數字 15 / 50}}
<h3>時間</h3>
<p>最簡單的方法是把時和分直接讀出來。1–9 分前面加 oh。</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|七點十五分}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|九點零五分}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|十點十五分}}
<h3>價錢和年份</h3>
<p>價錢可以把元和仙分開讀，也可以直接讀成兩個數。年份兩位兩位地讀。</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|4.99 元}}{{ex:That's twelve fifty.|/ˈðæts ˈtwelv ˈfɪfti/|12.50 元}}{{ex:twenty twenty-six|/ˈtwenti ˌtwenti ˈsɪks/|2026 年}}
<div class="tip">在美國要留意兩件事。日期：美國是<b>月/日</b>（5/3 = 5 月 3 日），英國和香港是<b>日/月</b>（5/3 = 3 月 5 日）；拿不準時，像 May 3rd 這樣把月份寫成英文字最穩妥。樓層：美國的 <b>first floor</b> 是香港的地下 (G/F)，香港的 1 樓在美國是 second floor。</div>`},

{ id:"email", title:"10 · 英文工作電郵", blurb:"稱呼 → 目的 → 請求 → 結尾。簡短、明確。", deck:"工作與電郵", body:`
<p>英文工作電郵講求<b>簡短、目的明確、友善</b>。把中文書信的客套話逐字翻譯過去，反而令重點不清楚。香港辦公室的英文電郵偏向英式和正式，美式電郵則較短、較直接；兩種寫法各有適用的場合。</p>
<h3>基本結構</h3>
<div class="tbl"><table><tr><th>部分</th><th>例句</th></tr><tr><td>稱呼</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>開頭（問候、說明目的）</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>正文（請求）</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>結尾</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>結束語</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>稱呼一般用 Hi</h3>
<p>在美國公司，即使是第一次聯絡，<b>Hi + 名字</b>也很得體，非常正式時才用 Dear。Mr. / Ms. 後面跟的是<b>姓氏</b>：寫給 Jason Chan，正式的稱呼是 Dear Mr. Chan，不是 Dear Mr. Jason。已經知道對方的名字，就不要寫 Dear Sir；只寫職位 (Dear Manager) 也不自然。</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|希望你一切安好}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|我想跟進一下上次的會議}}
<h3>請求要婉轉，期限要明確</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|可以在星期四或之前把報告寄給我嗎？}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|感謝你耐心等候}}
<p>ASAP 帶有催促的意味，最好用 <b>by + 日期</b>給出期限。</p>
<h3>香港辦公室常見、外國同事未必習慣的寫法</h3>
<div class="tbl"><table><tr><th>香港常見</th><th>寫給外國同事或客戶時</th></tr><tr><td class="k">Please kindly send…</td><td>please 和 kindly 用一個就夠：Could you send…? / Please send…</td></tr><tr><td class="k">Noted with thanks.</td><td>Got it, thanks. / Thanks for letting me know.</td></tr><tr><td class="k">Please revert by Friday.</td><td>revert 不解作「回覆」：Please reply by Friday. / Please get back to me by Friday.</td></tr><tr><td class="k">（結尾）</td><td>I look forward to hearing from you.（to 後面用 -ing）</td></tr></table></div>
<h3>「辛苦晒」怎樣說？</h3>
<p>英文沒有完全對應的說法，要看場合換一個說法：</p>
<ul><li>項目完成時：<b>Thanks for all your hard work!</b></li><li>星期五電郵的結尾：<b>Have a great weekend!</b></li><li>得到幫忙時：<b>I really appreciate your help.</b></li></ul>
<div class="tip">不必每封電郵都寫 Sorry for the late reply。換成 <b>Thanks for your patience</b>，不用道歉也顯得有禮、積極。</div>`},

{ id:"idioms", title:"11 · 習語和俚語怎樣用", blurb:"直譯會鬧笑話的說法。甚麼時候用，對誰用？", deck:"英文習語", body:`
<p>習語 (idioms) 是把每個字的意思加起來也猜不出整體意思的說法。a piece of cake 說的不是蛋糕，而是「非常容易」。想不看字幕看懂美劇和電影，一定要認識它們。</p>
<h3>用畫面來記</h3>
<p>大多數習語只要在腦海裏想像一下畫面，就很容易記住。</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|易如反掌（像吃一件蛋糕那樣容易）}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|貴得要命（要拿一隻手和一條腿來換）}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|洗耳恭聽（全身都是耳朵）}}
<h3>和中文相似的說法</h3>
<div class="tbl"><table><tr><th>英文</th><th>中文</th></tr><tr><td class="k">Speak of the devil!</td><td>一說曹操，曹操就到</td></tr><tr><td class="k">Kill two birds with one stone</td><td>一石二鳥</td></tr><tr><td class="k">When pigs fly</td><td>除非太陽從西邊出來</td></tr><tr><td class="k">A blessing in disguise</td><td>塞翁失馬，焉知非福</td></tr></table></div>
<p>有些來自中文的說法已經被英文接受，例如 long time no see（很久不見）、lose face（丟臉）。add oil（加油）也收進了《牛津英語詞典》，但香港以外的人未必明白，詳見「港式英文陷阱：在香港通用，出外要換個說法」一課。</p>
<h3>習語和俚語</h3>
<p><b>習語</b>歷史悠久，不分年齡，工作場合也能用 (Let's call it a day)。<b>俚語</b>是年輕人的潮流用語，只在朋友之間用（No cap、That song slaps）。俚語變化很快，年紀較大的人用起來可能有點彆扭。</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|今天到此為止吧（開會時也能用）}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|說真的，這是我吃過最好吃的薄餅（只限朋友之間）}}
<div class="tip">習語用得太多反而不自然。一次對話用一個，用在恰當的場合，就能給人「英文很地道」的印象。</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["名稱讀 /ˈdʒiː/ 的字母是哪一個？", ["J","G","Z","C"], 1, "G 的名稱是 /ˈdʒiː/。J 是 /ˈdʒeɪ/，Z 是 /ˈziː/，C 是 /ˈsiː/。G 和 J 開頭的音相同，要聽結尾。"],
    ["哪一個是正確的？", ["a F","an U","a M","an F"], 3, "F 的名稱 /ˈef/ 以元音開頭，所以用 an F。M 的名稱 /ˈem/ 也以元音開頭，是 an M；U 的名稱 /ˈjuː/ 以 /j/ 開頭，用 a U。"],
    ["請別人串出一個字，怎樣問？", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "spell 是一般動詞，疑問句要用助動詞 do，do 後面用動詞原形：How do you spell that?"]
  ],
  pron: [
    ["讀 R 時，舌尖在哪裏？", ["抵住上齒齦","伸到上下齒之間","不碰任何地方","貼着下唇"], 2, "讀 R 時舌尖不碰任何地方。抵住上齒齦就成了 L。"],
    ["think 裏的 th 怎樣讀才對？", ["舌尖輕輕伸到上下齒之間，送氣","雙唇閉合再張開","上齒輕觸下唇","舌頭向後捲"], 0, "讀 TH 時舌尖要露在齒間。上齒觸下唇就成了 f，讀成 s 就成了 sink。"],
    ["hotel 的重音在哪裏？", ["ho（前）","沒有重音","兩個音節一樣重","tel（後）"], 3, "ho-TEL：後一個音節要讀得重而長，音標是 /hoʊˈtel/。"]
  ],
  articles: [
    ["I'm ___ engineer. 空格應填甚麼？", ["a","an","the","（不加）"], 1, "engineer 以元音 /e/ 開頭，所以用 an。職業前面一定要加冠詞。"],
    ["在餐廳坐下後對侍應說：Can I see ___ menu?", ["the","a","an","（不加）"], 0, "指的是這間餐廳的餐牌，雙方都知道是哪一份，所以用 the。"],
    ["「我喜歡貓」（泛指貓這種動物）", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "泛指一類東西時用眾數，不加冠詞。a cat 是「一隻貓」，the cat 是「那隻貓」。"]
  ],
  be: [
    ["哪一句是正確的？", ["I am like K-pop.","I like K-pop.","I liking K-pop.","I am likes K-pop."], 1, "like 是一般動詞，不能和 be 動詞 (am) 連用。"],
    ["「我姐姐住在首爾」=", ["My sister live in Seoul.","My sister is live in Seoul.","My sister living in Seoul.","My sister lives in Seoul."], 3, "主語 my sister 是第三身單數，動詞要加 -s：lives。"],
    ["想用「不餓」回答 Are you hungry? 時", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "用 be 動詞問，就用 be 動詞答：No, I'm not."]
  ],
  polite: [
    ["對陌生人最有禮貌的請求是哪一句？", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "Could you…? 是禮貌請求的基本句式。Give me 聽起來像命令。"],
    ["想表示「好的，我來開」，應該怎樣回答 Would you mind opening the window?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "mind 是「介意」。回答 No（不介意），意思就是「可以，我來開」。"],
    ["Would you mind 後面的動詞用甚麼形式？", ["動詞原形 (open)","to + 動詞原形 (to open)","過去式 (opened)","~ing (opening)"], 3, "mind 後面接 -ing 形式：Would you mind waiting?"]
  ],
  tense: [
    ["「我每天早上喝咖啡」（習慣）", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "習慣用現在式。現在進行式表示「正在喝」。"],
    ["看到朋友沒帶錢包，即時說：「我來付！」", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "說話時即時決定的事用 will。going to 用於事先定好的計劃。"],
    ["go 的過去式是？", ["goed","gone","going","went"], 3, "go 是不規則動詞：go - went - gone。"]
  ],
  prep: [
    ["「七點見」= Let's meet ___ 7.", ["in","at","on","to"], 1, "確實時刻前面用 at。"],
    ["「在星期一」= ___ Monday", ["on","in","at","by"], 0, "星期和日期前面用 on。"],
    ["哪一句是正確的？", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "next、last、this、every 前面不加介詞。"]
  ],
  smalltalk: [
    ["咖啡店店員說 How are you today? 時，最自然的回答是？", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "How are you? 是打招呼。簡單回答，再反問一句就很好。"],
    ["初次見面最好避開哪一條問題？", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "在英語國家，一見面就問年齡可能令人覺得冒犯。"],
    ["對 I don't like horror movies. 表示同意時說", ["Me too.","So do I.","Me neither.","Me also."], 2, "附和否定句用 Me neither（或 Neither do I）。"]
  ],
  phrasal: [
    ["「你可以把它關掉嗎？」哪一句正確？", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "代名詞 (it) 要放在片語動詞中間：turn it off。"],
    ["run out of 是甚麼意思？", ["向外跑","把……用完了","從……逃出來","遲到"], 1, "We ran out of milk. = 牛奶喝完了。"],
    ["「我們把會議延到下星期吧」=", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "put off 是「延期」。put on 是「穿上、開啟」，put out 是「撲滅（火）」。"]
  ],
  numbers: [
    ["50,000（五萬）用英文怎樣說？", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "英文三位一節：50 + thousand = fifty thousand。"],
    ["thirteen 的重音在哪裏？", ["thir（前）","teen（後）","兩個音節一樣重","沒有重音"], 1, "-teen 結尾的數字重音在後，thirty 的重音在前。"],
    ["$12.50 最自然的讀法是？", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "價錢讀成兩個數：twelve fifty。"]
  ],
  email: [
    ["第一次聯絡客戶公司的負責人 Jenny Park，最得體的稱呼是？", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "美國的工作電郵用 Hi + 名字最穩妥。非常正式時用 Dear Ms. Park。"],
    ["項目完成後，想對團隊說「辛苦晒」，應該怎樣說？", ["You suffered a lot.","Thanks for all your hard work!","Good suffering.","Please work harder."], 1, "英文沒有和「辛苦晒」完全對應的說法，要用感謝對方付出的方式來表達。"],
    ["哪一句能有禮貌地提出期限？", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "用 Could you…? 加 by + 日期，婉轉又明確。"]
  ],
  idioms: [
    ["The test was a piece of cake. 是甚麼意思？", ["考試非常容易","考試時吃了蛋糕","考試非常難","考試考得很差"], 0, "a piece of cake = 易如反掌。"],
    ["I'm feeling under the weather. 是甚麼意思？", ["天氣很差","我在外面","我有點不舒服","我被雨淋濕了"], 2, "和天氣無關，意思是「身體不太舒服」。"],
    ["向上司匯報時，哪一句最不合適？", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "No cap 和 slaps 是朋友之間用的俚語。習語在工作場合也能用。"]
  ]
};
