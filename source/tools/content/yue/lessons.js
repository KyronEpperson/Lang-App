/* yue-en lessons (stage 1). English side shared with ko-en (parity.js); Chinese text converted from zh-en and adapted for
   Hong Kong Cantonese speakers (docs/profiles/yue.md), rewritten into written Cantonese (docs/briefs/yue-en-cantonese-rewrite.md). */
exports.LESSONS = [
{ id:"alphabet", title:"1 · 英文字母：字母名稱同口頭串字", blurb:"字母個個都識，但係名稱一講快就好易聽錯。學識 26 個字母嘅名稱，用英文串出名、電郵地址同預訂編號。", deck:"英文字母", body:`
<p>喺酒店櫃枱登記、打電話去客戶服務、報預訂編號嘅時候，成日會聽到一句：How do you spell that? 呢個時候要將名、電郵地址或者訂單編號<b>逐個字母</b>講出嚟，講嘅係每個字母嘅<b>英文名稱</b>。26 個字母你早就識，但係名稱講得含糊，對方聽錯一個字母，封電郵就寄唔到。花幾分鐘將 26 個名稱連埋音標睇一次，順便認識吓呢個課程用嘅音標。</p>
<h3>26 個字母嘅名稱</h3>
<p>粗體嘅 <b>A E I O U</b> 係五個元音字母，其餘係輔音字母。音標標嘅係字母嘅<b>名稱</b>，即係串字嗰陣講出嚟嘅音。</p>
<div class="tbl"><table><tr><td class="k"><b>A</b> /ˈeɪ/</td><td class="k">B /ˈbiː/</td><td class="k">C /ˈsiː/</td><td class="k">D /ˈdiː/</td><td class="k"><b>E</b> /ˈiː/</td></tr><tr><td class="k">F /ˈef/</td><td class="k">G /ˈdʒiː/</td><td class="k">H /ˈeɪtʃ/</td><td class="k"><b>I</b> /ˈaɪ/</td><td class="k">J /ˈdʒeɪ/</td></tr><tr><td class="k">K /ˈkeɪ/</td><td class="k">L /ˈel/</td><td class="k">M /ˈem/</td><td class="k">N /ˈen/</td><td class="k"><b>O</b> /ˈoʊ/</td></tr><tr><td class="k">P /ˈpiː/</td><td class="k">Q /ˈkjuː/</td><td class="k">R /ˈɑːr/</td><td class="k">S /ˈes/</td><td class="k">T /ˈtiː/</td></tr><tr><td class="k"><b>U</b> /ˈjuː/</td><td class="k">V /ˈviː/</td><td class="k">W /ˈdʌbəljuː/</td><td class="k">X /ˈeks/</td><td class="k">Y /ˈwaɪ/</td></tr><tr><td class="k">Z /ˈziː/</td><td></td><td></td><td></td><td></td></tr></table></div>
{{tiles:A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}}
<h3>最容易聽錯嘅字母名稱</h3>
<p>下面幾組名稱，講嘅人要讀清楚，聽嘅人都要留心：</p>
<div class="tbl"><table><tr><th>字母</th><th>英文名稱</th><th>留意</th></tr><tr><td class="k">Z</td><td>/ˈziː/</td><td>美國講 zee。學校教嘅英式名稱係 zed，兩個都啱；呢個課程嘅聲音係美式，所以你會聽到 zee。開頭嘅 /z/ 聲帶要震，唔係就會聽落似 C</td></tr><tr><td class="k">G、J</td><td>/ˈdʒiː/、/ˈdʒeɪ/</td><td>開頭個音一樣，分別喺結尾：G 嘅結尾係 /iː/，J 嘅結尾係 /eɪ/</td></tr><tr><td class="k">E、I</td><td>/ˈiː/、/ˈaɪ/</td><td>I 同解「我」嘅 I 同音。報電郵地址嗰陣，E 同 I 最容易講調轉</td></tr><tr><td class="k">F、L、M、N、S、X</td><td>/ˈef/、/ˈel/、/ˈem/、/ˈen/、/ˈes/、/ˈeks/</td><td>每個都只有一個音節，用輔音收尾，後面唔好加元音。X 嘅結尾係 /ks/，兩個輔音都要讀出嚟</td></tr><tr><td class="k">L、N</td><td>/ˈel/、/ˈen/</td><td>分別只喺結尾：N 啲氣由鼻出，L 係舌尖頂住上齒齦、啲氣由舌頭兩邊出</td></tr><tr><td class="k">H</td><td>/ˈeɪtʃ/</td><td>用 /eɪ/ 開頭，用 /tʃ/ 收尾，只有一個音節</td></tr><tr><td class="k">R</td><td>/ˈɑːr/</td><td>美式要將結尾個 r 讀出嚟：舌尖少少向後捲，唔掂任何地方。英式嘅 R 冇呢個 r 音，一樣啱</td></tr><tr><td class="k">V、W</td><td>/ˈviː/、/ˈdʌbəljuː/</td><td>V 要上齒輕輕掂住下唇、聲帶震，嘴唇唔好收圓。W 嘅名稱係 double u（兩個 U），三個音節都要讀出嚟</td></tr></table></div>
<h3>問串法、報串法</h3>
<p>對方聽唔清楚某個字母嘅時候，可以喺字母後面加一個用佢開頭嘅簡單生字，例如 <b>B as in boy</b>。last name 係「姓氏」：Amy Chan 嘅 last name 係 Chan。</p>
{{ex:How do you spell that?|/ˈhaʊ də ju ˈspel ˈðæt/|嗰個字點串？}}{{ex:How do you spell your last name?|/ˈhaʊ də ju ˈspel jʊr ˈlæst ˈneɪm/|你個姓點串？}}{{ex:Can you spell that, please?|/kən ju ˈspel ˈðæt ˈpliːz/|可唔可以串一次？}}{{ex:It starts with a capital T.|/ɪt ˈstɑːrts wɪð ə ˈkæpɪtl ˈtiː/|用大楷 T 開頭}}{{ex:B as in boy.|/ˈbiː əz ɪn ˈbɔɪ/|boy 嘅 B}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈem əz ɪn ˈmeri/|係咪 Mary 嘅 M？}}{{ex:There are two Ls in hello.|/ðer ər ˈtuː ˈelz ɪn həˈloʊ/|hello 入面有兩個 L}}
<h3>字母名稱前面用 a 定 an</h3>
<p>冠詞 (articles) 睇字母名稱嘅<b>第一個音</b>，唔係睇字母本身。F、H、L、M、N、R、S、X 嘅名稱都係元音開頭，所以講 <b>an F</b>、<b>an H</b>、<b>an L</b>、<b>an M</b>、<b>an N</b>、<b>an R</b>、<b>an S</b>、<b>an X</b>。</p>
<p>U 雖然係元音字母，但名稱同 you 一樣用 /j/ 開頭，所以係 <b>a U</b>，道理同 a university 一樣。</p>
<div class="tip">報電郵地址嘅講法：大楷字母講 <b>capital T</b>，兩個一樣嘅字母連埋一齊講 <b>double L</b>，@ 讀 <b>at</b>，點 (.) 讀 <b>dot</b>。例如 amy.chan@mail.com 讀做 <b>A-M-Y dot C-H-A-N at mail dot com</b>。</div>`},

{ id:"pron", title:"1 · 發音陷阱：N / L、字尾輔音、V、TH", blurb:"先睇明音標，再處理講廣東話嘅人最常遇到嘅發音問題：n / l、字尾輔音、輔音連綴、v、z、TH 同重音。", deck:"發音易錯", body:`
<p>呢個課程嘅卡片同例句都標咗<b>音標（國際音標）</b>。音標唔係拼音 (phonics)：一個符號只有一個讀法。啲符號同學校、字典用嘅係同一套，但標嘅係<b>美式發音</b>，因為呢個課程嘅聲音係美式。每個音標旁邊都有聲音，一路聽一路睇就得；唔想睇音標，可以按「Aa 音標：開」轉做「Aa 音標：關」，或者喺設定入面閂咗「練習時顯示音標」。</p>
<h3>音標符號表</h3>
<div class="tbl"><table><tr><th>符號</th><th>例字</th><th>符號</th><th>例字</th></tr><tr><td class="k">iː</td><td>see</td><td class="k">ɪ</td><td>sit</td></tr><tr><td class="k">uː</td><td>food</td><td class="k">ʊ</td><td>foot</td></tr><tr><td class="k">e</td><td>bed</td><td class="k">æ</td><td>bad</td></tr><tr><td class="k">ʌ</td><td>cup</td><td class="k">ə</td><td><b>a</b>bout</td></tr><tr><td class="k">ɑː</td><td>hot、father</td><td class="k">ɔː</td><td>law、walk</td></tr><tr><td class="k">ɜːr</td><td>bird</td><td class="k">ər</td><td>teach<b>er</b></td></tr><tr><td class="k">eɪ</td><td>day</td><td class="k">oʊ</td><td>go</td></tr><tr><td class="k">aɪ</td><td>my</td><td class="k">aʊ</td><td>now</td></tr><tr><td class="k">ɔɪ</td><td>boy</td><td class="k">ŋ</td><td>si<b>ng</b></td></tr><tr><td class="k">θ</td><td><b>th</b>ink</td><td class="k">ð</td><td><b>th</b>is</td></tr><tr><td class="k">ʃ</td><td><b>sh</b>e</td><td class="k">ʒ</td><td>u<b>s</b>ually</td></tr><tr><td class="k">tʃ</td><td><b>ch</b>air</td><td class="k">dʒ</td><td><b>j</b>ob</td></tr><tr><td class="k">ˈ</td><td>重音符號，標喺重讀音節前面</td><td class="k">ː</td><td>長元音</td></tr></table></div>
<p>呢個課程連單音節嘅實詞都標 <b>ˈ</b>；冇 ˈ 嘅 a、the、to、can 等字要讀得又輕又快（弱讀）。</p>
<h3>你學嘅英式，同呢度嘅美式</h3>
<div class="tbl"><table><tr><th>英式（學校教嘅）</th><th>美式（呢個課程）</th><th>例字</th></tr><tr><td class="k">ɒ</td><td>ɑː</td><td>hot /ˈhɑːt/、job /ˈdʒɑːb/</td></tr><tr><td class="k">əʊ</td><td>oʊ</td><td>go /ˈgoʊ/、home /ˈhoʊm/</td></tr><tr><td class="k">can't、class、ask 嘅 ɑː</td><td>æ</td><td>/ˈkænt/、/ˈklæs/、/ˈæsk/</td></tr><tr><td class="k">ɪə、eə、ʊə</td><td>ɪr、er、ʊr</td><td>here /ˈhɪr/、where /ˈwer/</td></tr><tr><td class="k">元音後面嘅 r 唔讀</td><td>r 要讀出嚟</td><td>car /ˈkɑːr/、teacher /ˈtiːtʃər/、work /ˈwɜːrk/</td></tr><tr><td class="k">清楚嘅 t</td><td>兩個元音中間嘅 t 似輕輕嘅 d</td><td>water、better、city（音標照寫 t）</td></tr></table></div>
<p>英式讀法一樣啱，唔使改。知道呢幾個分別，就唔會覺得音標同聲音「唔啱」。</p>
<h3>N 同 L</h3>
<p>廣東話平時講嘢，n 開頭嘅字好多時讀成 l（例如「你」），大家都聽得明。但英文靠 n 同 l 分字義：night（夜晚）讀成 l 就變咗 light（光）。讀 <b>n</b> 嗰陣舌尖頂住上齒齦，啲氣<b>由鼻出</b>；讀 <b>l</b> 嗰陣啲氣由舌頭兩邊出。</p>
{{ex:night|/ˈnaɪt/|夜晚}}{{ex:light|/ˈlaɪt/|光 / 燈 / 輕嘅}}{{ex:know|/ˈnoʊ/|知道}}{{ex:low|/ˈloʊ/|低嘅}}
<h3>R 同 L，仲有字頭嘅輔音連綴</h3>
<p>讀 <b>L</b> 嗰陣舌尖頂住上齒齦再放開；讀 <b>R</b> 嗰陣舌尖<b>唔掂任何地方</b>，少少向後縮，嘴唇略圓。rice（飯）讀成 L 就變咗 lice（蝨乸）。兩三個輔音連埋一齊（輔音連綴）嘅時候，l 同 r 最容易漏咗或者調轉：place 讀成 "pace"，bring 讀成 "bling"。每個輔音都要讀出嚟，中間唔好加元音。</p>
{{ex:rice|/ˈraɪs/|米 / 飯}}{{ex:lice|/ˈlaɪs/|蝨乸}}{{ex:right|/ˈraɪt/|右邊 / 啱嘅}}{{ex:place|/ˈpleɪs/|地方}}{{ex:pace|/ˈpeɪs/|步伐 / 速度}}{{ex:bring|/ˈbrɪŋ/|帶嚟}}
<h3>字尾輔音：要讀出嚟，b、d、g 要保持濁音</h3>
<p>廣東話嘅音節只會用元音、m / n / ng，或者收住唔放嘅 p / t / k 收尾（例如「六」）。所以英文字尾嘅輔音好容易讀到聽唔到，b、d、g 都容易變成 p、t、k：bag（袋）聽落似 back（背脊）。英文嘅字尾輔音要<b>輕輕讀出嚟</b>；b、d、g 係濁音，聲帶要震，前面嘅元音都要拉長少少。</p>
{{ex:bag|/ˈbæg/|袋}}{{ex:back|/ˈbæk/|背脊 / 後面}}{{ex:bed|/ˈbed/|床}}{{ex:bet|/ˈbet/|打賭}}
<h3>字尾嘅輔音連綴：-s 同 -ed 都喺度</h3>
<p>cold 讀成 "code"、list 讀成 "lis"，都係少咗一個輔音。眾數 (plural) 嘅 -s、第三身單數嘅 -s 同過去式嘅 -ed 全部都喺字尾；吞咗佢，聽嘅人就當你文法錯。</p>
{{ex:cold|/ˈkoʊld/|凍嘅}}{{ex:code|/ˈkoʊd/|密碼 / 代碼}}{{ex:friends|/ˈfrendz/|朋友（眾數）}}{{ex:asked|/ˈæskt/|問咗（ask 嘅過去式）}}
<h3>V、Z 同 F</h3>
<p><b>V</b> 係上齒輕輕掂住下唇，聲帶震。字頭唔好讀成圓唇嘅 w：very 會變成 wary（謹慎）；字尾唔好讀成 f：five、live 嘅結尾聲帶照要震。V 亦唔係雙唇合埋嘅 B：vote（投票）同 boat（船）係兩個字。<b>F</b> 嘅口形同 V 一樣，但聲帶唔震；雙唇合埋就變咗 P：fan（風扇）/ pan（平底鑊）。<b>Z</b> 係聲帶震嘅 s：zip（拉鏈）唔震就變咗 sip（飲一啖）。</p>
{{ex:very|/ˈveri/|非常}}{{ex:wary|/ˈweri/|謹慎嘅}}{{ex:vote|/ˈvoʊt/|投票}}{{ex:boat|/ˈboʊt/|船}}{{ex:zip|/ˈzɪp/|拉鏈 / 拉埋}}{{ex:sip|/ˈsɪp/|一啖一啖咁飲}}
<h3>TH：舌尖放喺上下齒中間</h3>
<p>廣東話冇 TH 呢個音。將舌尖<b>輕輕伸到上下齒中間</b>送氣：淨係送氣係 think 嘅 /θ/，聲帶震係 this 嘅 /ð/。最常見嘅代替音係 f 同 d：three 變成 free（免費），they 變成 day（日子）。用 s 代替都唔啱：think 會變成 sink（洗手盆）。</p>
{{ex:think|/ˈθɪŋk/|諗 / 認為}}{{ex:sink|/ˈsɪŋk/|洗手盆（鋅盆）/ 沉}}{{ex:three|/ˈθriː/|三}}{{ex:free|/ˈfriː/|自由嘅 / 免費嘅}}{{ex:this|/ˈðɪs/|呢個}}
<h3>長短元音，仲有 /æ/ 同 /e/</h3>
<p>/iː/ 同 /ɪ/ 唔止長短唔同，口形都唔同：leave（離開）/ live（住）。/uː/ 同 /ʊ/ 都係一對：fool（傻瓜）/ full（滿）。/æ/ 個口要擘得大過 /e/：bad（壞）/ bed（床）。</p>
{{ex:leave|/ˈliːv/|離開}}{{ex:live|/ˈlɪv/|住 / 生活}}{{ex:fool|/ˈfuːl/|傻瓜}}{{ex:full|/ˈfʊl/|滿嘅 / 飽嘅}}{{ex:bad|/ˈbæd/|壞嘅}}
<h3>雙元音後面嘅輔音，仲有字尾嘅 l</h3>
<p>廣東話冇「雙元音 + 輔音」嘅音節，所以 time、like、game 嘅字尾輔音容易唔見咗，或者元音讀短咗（game 讀成 "gem"）。先將 /aɪ/、/eɪ/ 讀完整，再讀出 m 或者 k。字尾嘅 l 都要用舌尖頂住上齒齦，唔好讀成元音：feel、will。</p>
{{ex:time|/ˈtaɪm/|時間}}{{ex:like|/ˈlaɪk/|鍾意 / 好似}}{{ex:game|/ˈgeɪm/|遊戲 / 比賽}}{{ex:feel|/ˈfiːl/|感覺}}
<h3>重音同弱讀決定對方聽唔聽得明</h3>
<p>廣東話每個字嘅份量差唔多，冇弱讀嘅音節。但英文嘅多音節字入面，總有一個音節讀得<b>又重、又長、又高</b>，其他音節弱讀，元音好多時變成 /ə/：about 係 /əˈbaʊt/，開頭唔係清楚嘅 a。重音錯咗，其他音幾準都好，對方都可能聽唔明。</p>
<div class="tbl"><table><tr><th>生字</th><th>重音</th><th>音標</th></tr><tr><td class="k">banana</td><td>ba-<b>NA</b>-na</td><td>/bəˈnænə/</td></tr><tr><td class="k">hotel</td><td>ho-<b>TEL</b></td><td>/hoʊˈtel/</td></tr><tr><td class="k">McDonald's</td><td>mc-<b>DON</b>-ald's</td><td>/məkˈdɑːnldz/</td></tr><tr><td class="k">thirteen / thirty</td><td>thir-<b>TEEN</b> / <b>THIR</b>-ty</td><td>/ˌθɜːrˈtiːn/、/ˈθɜːrti/</td></tr></table></div>
<div class="tip">自己檢查：讀 F、V 嗰陣上齒要掂到下唇，讀 TH 嗰陣舌尖要露喺上下齒中間，<b>照鏡睇得到</b>就啱。讀到字尾，記得將最後一個輔音讀出嚟。有少少口音唔緊要，目標係令人聽得明。</div>`},

{ id:"articles", title:"2 · a 同 the：冠詞入門", blurb:"中文冇冠詞，a 同 the 最容易漏，亦最容易亂加。記住三種情況就夠。", deck:"自我介紹", body:`
<p>中文冇冠詞 (articles)，所以 a 同 the 最容易漏，亦最容易亂加。要留意：「一個」唔一定係 a，「呢個 / 嗰個」亦唔等於 the。廣東話講「我係學生」，冇「一個」，英文照樣要加 a：I'm <b>a</b> student. 廣東話講「本書好睇」，淨係靠量詞「本」就知道係邊本；英文冇呢種用法，要講 <b>The</b> book is good.</p>
<h3>a / an：第一次提到嘅「一個」</h3>
<p>可數名詞單數<b>第一次</b>出現嘅時候，前面加 a / an。職業前面都一定要加：She's <b>a</b> teacher.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|我係學生}}{{ex:I have a dog.|/aɪ ˈhæv ə ˈdɔːg/|我養咗一隻狗}}
<p>用 a 定 an，睇<b>發音</b>，唔係睇串法：元音開頭嘅字前面用 an。睇音標最清楚。</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university（/j/ 開頭）</td><td class="k">an hour（h 唔發音）</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket（/w/ 開頭）</td><td class="k">an MBA（/e/ 開頭）</td></tr></table></div>
<h3>the：雙方都知係邊個嘅「嗰個」</h3>
<p>前面已經講過，或者睇場合雙方都知係邊個，就用 the。獨一無二嘅嘢都用 the：the sun、the internet。</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|我養咗一隻狗，嗰隻狗好得意}}{{ex:Can you close the door?|/kən ju ˈkloʊz ðə ˈdɔːr/|可唔可以閂埋度門？（呢間房嘅門）}}
<h3>唔加冠詞：泛指</h3>
<p>泛指「某一類嘢」嘅時候，用眾數 (plural) 或者不可數名詞，<b>唔加冠詞</b>。好多人覺得加個 the 穩陣啲，其實亂加 the 同漏咗 a 一樣常見：<b>I like the music.</b> ✗ → <b>I like music.</b> ✓ 三餐、語言、運動前面都唔加冠詞。</p>
{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|我鍾意狗（泛指狗呢種動物）}}{{ex:I don't drink coffee.|/aɪ ˈdoʊnt ˈdrɪŋk ˈkɔːfi/|我唔飲咖啡}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|我哋食晏啦}}
<div class="tip">最常見嘅錯：<b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ 職業前面嘅 a 唔好漏。</div>`},

{ id:"be", title:"3 · be 動詞同一般動詞", blurb:"am / is / are 同 do / does：最緊要係唔好撈埋一齊用。", deck:"自我介紹", body:`
<p>英文句子入面一定要有動詞。呢個動詞係 <b>be 動詞</b>定<b>一般動詞</b>（be 以外嘅動詞，例如 like、live、work），決定咗否定句同疑問句點樣變。</p>
<h3>兩類動詞</h3>
<div class="tbl"><table><tr><th></th><th>be 動詞</th><th>一般動詞</th></tr><tr><td>意思</td><td>係、喺度、處於某種狀態</td><td>動作、習慣、喜好（食、住、鍾意）</td></tr><tr><td>例句</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>否定句</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>疑問句</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<p>be 動詞跟主語變：<b>I am</b> / <b>you、we、they are</b> / <b>he、she、it is</b>。講嘢嗰陣差唔多一定用縮寫：I'm、you're、she's。疑問句都一定要有 be，放喺主語前面。</p>
{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|我肚餓}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|佢返緊工}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|你冇事吖嘛？}}
<h3>形容詞前面唔可以冇 be</h3>
<p>廣東話講「佢好靚」，句子入面冇「係」。英文嘅形容詞唔可以單獨做謂語，前面一定要有 be 動詞。</p>
{{ex:She's very beautiful.|/ʃiz ˈveri ˈbjuːtɪfl/|佢好靚 (She very beautiful ✗)}}
<h3>be 動詞同一般動詞唔可以連用</h3>
<p>倒轉嚟講，句子入面已經有一般動詞，就唔好再加 be：I am agree ✗、He is come from Macau ✗、They are lack of time ✗ (→ They lack time ✓)。</p>
{{ex:I like Cantopop.|/aɪ ˈlaɪk ˈkæntoʊˌpɑːp/|我鍾意廣東歌 (I am like ✗)}}{{ex:I live in Hong Kong.|/aɪ ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我住喺香港 (I am live ✗)}}{{ex:I agree.|/aɪ əˈgriː/|我同意 (I am agree ✗)}}
<h3>he、she、it 後面加 -s</h3>
<p>主語係第三身單數（he、she、it，或者一個人、一樣嘢）嘅時候，現在式 (present tense) 嘅一般動詞要加 <b>-s</b>。否定句同疑問句用 <b>does</b>；用咗 does，動詞就變返原形。</p>
{{ex:My brother works in Central.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈsentrəl/|我哥哥喺中環返工}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|佢識唔識講英文？}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|佢唔食肉}}
<div class="tip">拎唔定嘅時候問吓自己：句子入面除咗 be 動詞，仲有冇<b>其他動詞</b>（like、live、work……）？有就用 do / does 變否定句同疑問句；冇（後面只有形容詞、名詞或者地點）就用 be 動詞。第三身單數嘅 -s 講嘢嗰陣都要讀出嚟。</div>`},

{ id:"polite", title:"4 · 有禮貌咁請人做嘢", blurb:"Can you → Could you → Would you mind。唔好再講 Give me 喇。", deck:"求生英文 1", body:`
<p>廣東話一句「唔該」就夠禮貌；英文嘅禮貌靠嘅係<b>請求嘅句式</b>。同一個意思，換個句式就可以由生硬變得得體。要留意：中文寫「請給我……」好客氣，但直譯做 Please give me…，喺英文都仲係命令句，聽落好生硬。</p>
<h3>禮貌程度嘅階梯</h3>
<div class="tbl"><table><tr><th>講法</th><th>語氣</th><th>適用場合</th></tr><tr><td class="k">Give me…</td><td>命令，聽落冇禮貌</td><td>唔好用</td></tr><tr><td class="k">Can you…?</td><td>隨便嘅請求</td><td>朋友、舖頭</td></tr><tr><td class="k">Could you…?</td><td>有禮貌嘅請求</td><td>陌生人、工作場合</td></tr><tr><td class="k">Would you mind …ing?</td><td>非常客氣</td><td>麻煩人嘅事、對上司</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|可唔可以幫吓我？}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|可唔可以講多次？}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|可唔可以麻煩你幫我哋影張相？}}
<h3>落單嗰陣講 Can I get…? / I'd like…</h3>
<p>I want… 聽落似細路仔要嘢。喺舖頭要咁講：</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|唔該，我要一杯鮮奶咖啡}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|我想要窗口位}}
<h3>Would you mind…? 嘅陷阱</h3>
<p>mind 係「介意」嘅意思，所以答 <b>No 先係表示「可以」</b>。</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|可唔可以麻煩你開窗？}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|好呀，冇問題（一啲都唔介意）}}
<div class="tip">「唔該」喺英文要分三個講法：請人做嘢係 <b>please</b>，道謝係 <b>thank you</b>，請人讓路或者想引人注意係 <b>excuse me</b>。please 同 thank you 講幾多次都唔嫌多。語調都好緊要：句尾升少少係請求，跌落去就似命令。</div>`},

{ id:"tense", title:"5 · 時態一覽：現在、過去、將來", blurb:"習慣用現在式，做緊嘅事用現在進行式，計劃用 be going to。", deck:"閒談", body:`
<p>廣東話嘅動詞唔會變，時間靠「尋日、聽日」呢類字詞，或者「咗、過、緊」呢類助詞嚟表示。但英文一定要<b>改動詞</b>：句子入面有 yesterday，動詞照樣要用過去式 (past tense)。傾偈嗰陣最常用嘅係下面五種形式。</p>
<h3>廣東話嘅助詞 ≠ 英文嘅時態 (tense)</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>常見對應</th><th>留意</th></tr><tr><td class="k">「緊」（「做緊」）</td><td>現在進行式 be + -ing</td><td>只表示動作進行緊</td></tr><tr><td class="k">「咗」（「做咗」）</td><td>多數係過去式</td><td>「咗」表示完成，唔等於過去：「我聽日食咗飯先走」講嘅係聽日</td></tr><tr><td class="k">「過」（「去過」）</td><td>現在完成式</td><td>表示經驗：I've been to…</td></tr><tr><td class="k">「會」 / 「打算」</td><td>will / be going to</td><td>預先定好嘅計劃用 going to</td></tr></table></div>
<h3>現在式同現在進行式</h3>
<div class="tbl"><table><tr><th>形式</th><th>意思</th><th>例句</th></tr><tr><td class="k">現在式</td><td>習慣、一向都係咁嘅事實</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing</td><td>做緊 / 已經定好嘅近期安排</td><td>I'm drinking coffee right now.</td></tr></table></div>
{{ex:I work at a bank.|/aɪ ˈwɜːrk ət ə ˈbæŋk/|我喺銀行做嘢（一向都係）}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|我今日喺屋企做嘢}}
<h3>過去式</h3>
<p>規則動詞加 <b>-ed</b>，但最常用嘅動詞大部分都係不規則嘅：go → went、eat → ate、see → saw、have → had、get → got。</p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|我上個週末去咗沙灘}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|玩得開唔開心？}}
<h3>將來：will 同 be going to</h3>
<div class="tbl"><table><tr><th></th><th>幾時用</th><th>例句</th></tr><tr><td class="k">will</td><td>講嘢嗰下即刻決定、承諾</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>預先定好嘅計劃</td><td>I'm going to visit Macau next month.</td></tr></table></div>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|我遲啲打電話畀你}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|我打算去上烹飪班}}
<p>講嘢嗰陣 going to 成日讀成 <b>gonna</b>，寫嘢嗰陣都係寫 going to。</p>
<div class="tip">答 How was your weekend? 用過去式，答 Any plans for the weekend? 用 going to。跟住問題嘅時態答，最簡單。</div>`},

{ id:"prep", title:"6 · 介詞 in / on / at", blurb:"範圍大用 in，某一日用 on，一個點用 at。", deck:"數字、時間同日期", body:`
<p>廣東話一個「喺」就夠，英文就要分 in、on、at，時間同地點都係咁。記住<b>範圍越大用 in，越細越具體用 at</b>，大部分情況都唔會錯。</p>
<h3>時間</h3>
<div class="tbl"><table><tr><th>介詞</th><th>範圍</th><th>例子</th></tr><tr><td class="k">in</td><td>月份、年份、季節、一日入面嘅時段</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>星期、日期、特定嘅某一日</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>準確時間、好短嘅時間點</td><td>at 7, at noon, at night</td></tr></table></div>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|星期五見}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|三點開會}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|我喺 1998 年出世}}
<h3>地點</h3>
<div class="tbl"><table><tr><th>介詞</th><th>感覺</th><th>例子</th></tr><tr><td class="k">in</td><td>空間入面、城市、國家</td><td>in the car, in Hong Kong, in Japan</td></tr><tr><td class="k">on</td><td>表面上、街道、公共交通工具</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>一個點、為某個目的而去嘅地方</td><td>at the station, at work, at home</td></tr></table></div>
<p>留意：喺巴士、地鐵、火車上面都用 <b>on</b>，唔講 in the bus；喺某間公司做嘢用 at，例如 at Google。</p>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|我喺巴士上面}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|我哋喺車站見啦}}{{ex:She works at Google.|/ʃi ˈwɜːrks ət ˈguːgl/|佢喺 Google 做嘢}}
<h3>唔使用介詞嘅情況</h3>
<p><b>next、last、this、every、tomorrow、yesterday</b> 前面唔加介詞。</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|下個星期見 (on next week ✗)}}
<p>動詞後面嘅介詞都要留意：<b>discuss、enter、marry</b> 直接跟賓語，唔加介詞 (discuss about ✗)；<b>listen to、wait for、apply for</b> 嘅介詞就唔可以漏 (wait me ✗)。</p>
<div class="tip">呢啲例外要記住：<b>at night</b>（喺夜晚）、<b>in the morning / afternoon / evening</b>。週末美式講 <b>on the weekend</b>，英式講 <b>at the weekend</b>，兩個都啱。</div>`},

{ id:"smalltalk", title:"7 · 閒談文化", blurb:"How are you? 唔係真係問你嘢，係打招呼。邊啲話題安全，邊啲要避開。", deck:"閒談", body:`
<p>喺講英文嘅國家，喺升降機入面、收銀處前面、開會之前，同陌生人都會隨口傾幾句。呢啲唔係深入嘅傾談，而係<b>令氣氛輕鬆啲嘅簡短對話</b>。</p>
<h3>How are you? 係打招呼</h3>
<p>對方唔係真係想知你過成點，就好似廣東話嘅「食咗飯未？」唔係真係想知你食咗未。簡單答一句，再<b>反問一句</b>先有禮貌。倒轉嚟講，將「食咗飯未？」直譯做 Have you eaten?，喺英文唔係問候，對方可能以為你想請佢食飯。</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|嗨，最近點呀？}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|幾好呀！你呢？}}
<h3>安全話題同要避開嘅話題</h3>
<div class="tbl"><table><tr><th>安全</th><th>第一次見面最好避開</th></tr><tr><td>天氣、週末同假期計劃</td><td>年紀、婚姻狀況</td></tr><tr><td>美食、餐廳、旅行</td><td>體重同外表（「你係咪肥咗？」）</td></tr><tr><td>劇集、電影、運動</td><td>人工、租金、樓價</td></tr><tr><td>工作（輕鬆咁傾）、住喺邊區</td><td>政治、宗教</td></tr></table></div>
<p>喺香港，熟人之間問人工、租金或者年紀，有時係關心嘅表現；喺講英文嘅國家，第一次見面問呢啲會令人反感。</p>
<h3>令對話傾落去嘅技巧</h3>
<p>回答 + <b>講多少少資料</b> + <b>反問</b>。有齊呢三步，對話就唔會冷場。</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|好正呀！我去咗行山。你呢？}}
<p>附和都好重要：<b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>自然咁收尾</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|咁我走先喇}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|同你傾偈好開心}}
<div class="tip">附和否定句要用 <b>Me neither</b>：I don't like horror movies. → Me neither. 呢度唔可以答 Me too。美式口語都會聽到 Me either，但標準講法係 Me neither。</div>`},

{ id:"phrasal", title:"8 · 片語動詞入門", blurb:"動詞 + 一個短字 = 全新嘅意思。母語係英文嘅人日常講嘢少唔得佢。", deck:"片語動詞", body:`
<p>片語動詞 (phrasal verbs) 由<b>動詞 + up、out、off、on 呢類短字</b>組成，表達新嘅意思。課本入面嘅長字（postpone、discover）喺日常對話反而冇片語動詞咁常用。廣東話嘅「閂埋、搵到、坐低」都係動詞加一個細細嘅成分，可以借呢種感覺嚟理解。</p>
<div class="tbl"><table><tr><th>正式用字</th><th>片語動詞（日常）</th><th>意思</th></tr><tr><td>postpone</td><td class="k">put off</td><td>延期</td></tr><tr><td>discover</td><td class="k">find out</td><td>發現、得知</td></tr><tr><td>exercise</td><td class="k">work out</td><td>做運動、健身</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>忍受</td></tr></table></div>
<h3>短字入面收埋提示</h3>
<p><b>up</b> 有「完全、向上」嘅意思，<b>out</b> 有「向外、到盡頭」嘅意思，<b>off</b> 有「離開、停止」嘅意思，<b>on</b> 有「接觸、持續」嘅意思。</p>
{{ex:I grew up in Kowloon.|/aɪ ˈgruː ˈʌp ɪn ˌkaʊˈluːn/|我喺九龍長大}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|冇晒牛奶}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|唔該閂咗部手機}}
<h3>代名詞放中間</h3>
<p>好多帶賓語嘅片語動詞可以拆開。名詞放前放後都得，但 <b>it、them、me 呢類代名詞一定放中間</b>。順便講，廣東話嘅「開燈、熄燈」（或者「閂燈」）係 turn on / turn off the light，唔可以講 open / close the light。</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|開燈（兩種講法都啱）}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|開咗佢 (turn on it ✗)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|我七點嚟接你}}
<h3>唔可以拆開嘅片語動詞</h3>
<p>look after、look for、get along with 呢類帶介詞嘅唔可以拆開：<i>look after my cat</i>、<i>look after her</i>。</p>
<div class="tip">片語動詞要好似生字咁<b>成個記</b>。連埋例句一齊記，代名詞嘅位置自然就記得。每日揀三個，喺真實對話入面用吓。</div>`},

{ id:"numbers", title:"9 · 數字、時間同價錢", blurb:"英文冇「萬」，13 同 30 要分清楚，仲有價錢、日期同樓層嘅講法。", deck:"數字、時間同日期", body:`
<p>去旅行同返工都即刻要用到數字，但中英文嘅計數單位唔同，好容易出錯。</p>
<h3>三個位一節</h3>
<p>中文四個位一節（萬、億），英文<b>三個位一節</b>（thousand、million、billion）。逗號嘅位置就係單位。</p>
<div class="tbl"><table><tr><th>數字</th><th>中文</th><th>英文</th></tr><tr><td class="k">10,000</td><td>一萬</td><td>ten thousand</td></tr><tr><td class="k">50,000</td><td>五萬</td><td>fifty thousand</td></tr><tr><td class="k">100,000</td><td>十萬</td><td>one hundred thousand</td></tr><tr><td class="k">1,000,000</td><td>一百萬</td><td>one million</td></tr><tr><td class="k">100,000,000</td><td>一億</td><td>one hundred million</td></tr></table></div>
<p>港元同美元喺英文都叫 dollars。喺香港講價錢，直接講 30 dollars；要分清楚先講 Hong Kong dollars 或者 US dollars。</p>
<h3>-teen 同 -ty</h3>
<p>13–19 嘅重音喺<b>後面</b>，30、40、50…… 嘅重音喺<b>前面</b>。美式 thirty 入面嘅 t 好多時讀到似輕輕嘅 d。睇音標入面 ˈ 嘅位置，就知道重音喺邊。</p>
{{ex:thirteen|/ˌθɜːrˈtiːn/|數字 13}}{{ex:thirty|/ˈθɜːrti/|數字 30}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|數字 15 / 50}}
<h3>時間</h3>
<p>最簡單嘅方法係將鐘頭同分鐘直接讀出嚟。1–9 分前面加 oh。</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|七點十五分（七點三）}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|九點零五分（九點一）}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|十點十五分（十點三）}}
<h3>價錢同年份</h3>
<p>價錢可以將蚊同仙分開讀，亦可以直接讀成兩個數。年份兩個位兩個位咁讀。</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|4.99 蚊}}{{ex:That's twelve fifty.|/ˈðæts ˈtwelv ˈfɪfti/|12.50 蚊}}{{ex:twenty twenty-six|/ˈtwenti ˌtwenti ˈsɪks/|2026 年}}
<div class="tip">喺美國要留意兩樣嘢。日期：美國係<b>月/日</b>（5/3 = 5 月 3 號），英國同香港係<b>日/月</b>（5/3 = 3 月 5 號）；拎唔定嘅時候，好似 May 3rd 咁將月份寫成英文字最穩陣。樓層：美國嘅 <b>first floor</b> 係香港嘅地下 (G/F)，香港嘅 1 樓喺美國係 second floor。</div>`},

{ id:"email", title:"10 · 英文工作電郵", blurb:"稱呼 → 目的 → 請求 → 結尾。簡短、清楚。", deck:"工作同電郵", body:`
<p>英文工作電郵講求<b>簡短、目的清楚、友善</b>。將中文書信嘅客套說話逐個字譯過去，反而會令重點唔清楚。香港寫字樓嘅英文電郵偏向英式同正式，美式電郵就短啲、直接啲；兩種寫法各有適用嘅場合。</p>
<h3>基本結構</h3>
<div class="tbl"><table><tr><th>部分</th><th>例句</th></tr><tr><td>稱呼</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>開頭（問候、講明目的）</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>正文（請求）</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>結尾</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>結束語</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>稱呼一般用 Hi</h3>
<p>喺美國公司，就算係第一次聯絡，<b>Hi + 名</b>都好得體，非常正式先用 Dear。Mr. / Ms. 後面跟嘅係<b>姓</b>：寫畀 Jason Chan，正式嘅稱呼係 Dear Mr. Chan，唔係 Dear Mr. Jason。已經知道對方個名，就唔好寫 Dear Sir；淨係寫職位 (Dear Manager) 都唔自然。</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|希望你一切都好}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|我想跟進吓上次個會}}
<h3>請求要婉轉，期限要清楚</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|可唔可以喺星期四或之前將份報告寄畀我？}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|多謝你耐心等}}
<p>ASAP 有催人嘅意思，最好用 <b>by + 日期</b>講明期限。</p>
<h3>香港寫字樓常見、外國同事未必習慣嘅寫法</h3>
<div class="tbl"><table><tr><th>香港常見</th><th>寫畀外國同事或者客嘅時候</th></tr><tr><td class="k">Please kindly send…</td><td>please 同 kindly 用一個就夠：Could you send…? / Please send…</td></tr><tr><td class="k">Noted with thanks.</td><td>Got it, thanks. / Thanks for letting me know.</td></tr><tr><td class="k">Please revert by Friday.</td><td>revert 唔係解「回覆」：Please reply by Friday. / Please get back to me by Friday.</td></tr><tr><td class="k">（結尾）</td><td>I look forward to hearing from you.（to 後面用 -ing）</td></tr></table></div>
<h3>「辛苦晒」點講？</h3>
<p>英文冇完全對應嘅講法，要睇場合換個講法：</p>
<ul><li>項目完成嗰陣：<b>Thanks for all your hard work!</b></li><li>星期五電郵嘅結尾：<b>Have a great weekend!</b></li><li>有人幫手嗰陣：<b>I really appreciate your help.</b></li></ul>
<div class="tip">唔使每封電郵都寫 Sorry for the late reply。換成 <b>Thanks for your patience</b>，唔使道歉都顯得有禮、積極。</div>`},

{ id:"idioms", title:"11 · 習語同俚語點用", blurb:"直譯會搞出笑話嘅講法。幾時用，對邊個用？", deck:"英文習語", body:`
<p>習語 (idioms) 係將每個字嘅意思加埋都估唔到整體意思嘅講法。a piece of cake 講嘅唔係蛋糕，而係「好容易」。想唔睇字幕都睇得明美劇同電影，一定要識佢哋。</p>
<h3>用畫面嚟記</h3>
<p>大部分習語只要喺腦入面諗吓個畫面，就好容易記得。</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|易如反掌（好似食一件蛋糕咁容易）}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|貴到離譜（要用一隻手同一隻腳嚟換）}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|我洗耳恭聽（成身都係耳仔）}}
<h3>同中文相似嘅講法</h3>
<div class="tbl"><table><tr><th>英文</th><th>中文</th></tr><tr><td class="k">Speak of the devil!</td><td>一講曹操，曹操就到</td></tr><tr><td class="k">Kill two birds with one stone</td><td>一石二鳥</td></tr><tr><td class="k">When pigs fly</td><td>除非太陽由西邊出</td></tr><tr><td class="k">A blessing in disguise</td><td>塞翁失馬，焉知非福</td></tr></table></div>
<p>有啲由中文嚟嘅講法，英文已經接受咗，例如 long time no see（好耐冇見）、lose face（冇面）。add oil（加油）亦收咗入《牛津英語詞典》，但香港以外嘅人未必明，詳見「港式英文陷阱：喺香港通用，出外要換個講法」一課。</p>
<h3>習語同俚語</h3>
<p><b>習語</b>歷史悠久，唔分年紀，工作場合都用得 (Let's call it a day)。<b>俚語</b>係後生仔嘅潮流用語，只喺朋友之間用（No cap、That song slaps）。俚語變得好快，年紀大啲嘅人用起上嚟可能有啲怪。</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|今日就到呢度啦（開會都用得）}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|講真，呢個係我食過最好食嘅薄餅（只限朋友之間）}}
<div class="tip">習語用得太多反而唔自然。一次對話用一個，用喺啱嘅場合，就會畀人「英文好地道」嘅印象。</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["名稱讀 /ˈdʒiː/ 嘅係邊個字母？", ["J","G","Z","C"], 1, "G 嘅名稱係 /ˈdʒiː/。J 係 /ˈdʒeɪ/，Z 係 /ˈziː/，C 係 /ˈsiː/。G 同 J 開頭個音一樣，要聽結尾。"],
    ["邊個係啱嘅？", ["a F","an U","a M","an F"], 3, "F 嘅名稱 /ˈef/ 用元音開頭，所以用 an F。M 嘅名稱 /ˈem/ 都係元音開頭，係 an M；U 嘅名稱 /ˈjuː/ 用 /j/ 開頭，用 a U。"],
    ["想人串一個字出嚟，點問？", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "spell 係一般動詞，疑問句要用助動詞 do，do 後面用動詞原形：How do you spell that?"]
  ],
  pron: [
    ["讀 R 嗰陣，舌尖喺邊？", ["頂住上齒齦","伸到上下齒中間","唔掂任何地方","貼住下唇"], 2, "讀 R 嗰陣舌尖唔掂任何地方。頂住上齒齦就變咗 L。"],
    ["think 入面嘅 th 點讀先啱？", ["舌尖輕輕伸到上下齒中間，送氣","雙唇合埋再打開","上齒輕輕掂住下唇","舌頭向後捲"], 0, "讀 TH 嗰陣舌尖要露喺上下齒中間。上齒掂下唇就變咗 f，讀成 s 就變咗 sink。"],
    ["hotel 嘅重音喺邊？", ["ho（前）","冇重音","兩個音節一樣重","tel（後）"], 3, "ho-TEL：後面個音節要讀得又重又長，音標係 /hoʊˈtel/。"]
  ],
  articles: [
    ["I'm ___ engineer. 空格應該填咩？", ["a","an","the","（唔加）"], 1, "engineer 用元音 /e/ 開頭，所以用 an。職業前面一定要加冠詞。"],
    ["喺餐廳坐低之後同侍應講：Can I see ___ menu?", ["the","a","an","（唔加）"], 0, "講緊嘅係呢間餐廳嘅餐牌，雙方都知係邊份，所以用 the。"],
    ["「我鍾意貓」（泛指貓呢種動物）", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "泛指一類嘢嘅時候用眾數，唔加冠詞。a cat 係「一隻貓」，the cat 係「嗰隻貓」。"]
  ],
  be: [
    ["邊句係啱嘅？", ["I am like Cantopop.","I like Cantopop.","I liking Cantopop.","I am likes Cantopop."], 1, "like 係一般動詞，唔可以同 be 動詞 (am) 連用。"],
    ["「我家姐住喺台北」=", ["My sister live in Taipei.","My sister is live in Taipei.","My sister living in Taipei.","My sister lives in Taipei."], 3, "主語 my sister 係第三身單數，動詞要加 -s：lives。"],
    ["想用「唔肚餓」答 Are you hungry? 嘅時候", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "用 be 動詞問，就用 be 動詞答：No, I'm not."]
  ],
  polite: [
    ["對陌生人最有禮貌嘅請求係邊句？", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "Could you…? 係禮貌請求嘅基本句式。Give me 聽落似命令。"],
    ["想表示「好，我嚟開」，應該點答 Would you mind opening the window?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "mind 係「介意」。答 No（唔介意），意思就係「好，我嚟開」。"],
    ["Would you mind 後面嘅動詞用咩形式？", ["動詞原形 (open)","to + 動詞原形 (to open)","過去式 (opened)","~ing (opening)"], 3, "mind 後面跟 -ing 形式：Would you mind waiting?"]
  ],
  tense: [
    ["「我每朝都飲咖啡」（習慣）", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "習慣用現在式。現在進行式表示「飲緊」。"],
    ["見到朋友冇帶銀包，即刻講：「我嚟畀！」", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "講嘢嗰下即刻決定嘅事用 will。going to 用喺預先定好嘅計劃。"],
    ["go 嘅過去式係？", ["goed","gone","going","went"], 3, "go 係不規則動詞：go - went - gone。"]
  ],
  prep: [
    ["「七點見」= Let's meet ___ 7.", ["in","at","on","to"], 1, "準確時間前面用 at。"],
    ["「喺星期一」= ___ Monday", ["on","in","at","by"], 0, "星期同日期前面用 on。"],
    ["邊句係啱嘅？", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "next、last、this、every 前面唔加介詞。"]
  ],
  smalltalk: [
    ["咖啡店店員講 How are you today?，最自然嘅回答係？", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "How are you? 係打招呼。簡單答一句，再反問一句就好好。"],
    ["第一次見面最好避開邊條問題？", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "喺講英文嘅國家，一見面就問人年紀可能會令人反感。"],
    ["想同意 I don't like horror movies.，應該講", ["Me too.","So do I.","Me neither.","Me also."], 2, "附和否定句用 Me neither（或者 Neither do I）。"]
  ],
  phrasal: [
    ["「你可唔可以閂咗佢？」邊句啱？", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "代名詞 (it) 要放喺片語動詞中間：turn it off。"],
    ["run out of 係咩意思？", ["向外跑","將……用晒","由……逃出嚟","遲到"], 1, "We ran out of milk. = 冇晒牛奶。"],
    ["「我哋將個會延到下星期啦」=", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "put off 係「延期」。put on 係「着（衫）、開（機）」，put out 係「救熄（火）」。"]
  ],
  numbers: [
    ["50,000（五萬）用英文點講？", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "英文三個位一節：50 + thousand = fifty thousand。"],
    ["thirteen 嘅重音喺邊？", ["thir（前）","teen（後）","兩個音節一樣重","冇重音"], 1, "-teen 結尾嘅數字重音喺後面，thirty 嘅重音喺前面。"],
    ["$12.50 最自然嘅讀法係？", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "價錢讀成兩個數：twelve fifty。"]
  ],
  email: [
    ["第一次聯絡客戶公司嘅負責人 Jenny Brown，最得體嘅稱呼係？", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "美國嘅工作電郵用 Hi + 名最穩陣。非常正式先用 Dear Ms. Brown。"],
    ["項目完成之後，想同團隊講「辛苦晒」，應該點講？", ["Thanks for all your hard works.","Thanks for all your hard work!","You did a hard work.","Please work harder."], 1, "英文冇同「辛苦晒」完全對應嘅講法，要用多謝對方付出嘅方式嚟表達。work 解「工作、付出」嗰陣係不可數名詞，唔加 -s，前面亦唔加 a。"],
    ["邊句可以有禮貌咁講出期限？", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "用 Could you…? 加 by + 日期，婉轉又清楚。"]
  ],
  idioms: [
    ["The test was a piece of cake. 係咩意思？", ["考試好容易","考試嗰陣食咗蛋糕","考試好難","考試考得好差"], 0, "a piece of cake = 易如反掌。"],
    ["I'm feeling under the weather. 係咩意思？", ["天氣好差","我喺出面","我有啲唔舒服","我畀雨淋濕咗"], 2, "同天氣冇關係，意思係「身體唔係幾舒服」。"],
    ["向上司匯報嘅時候，邊句最唔適合？", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "No cap 同 slaps 係朋友之間用嘅俚語。習語喺工作場合都用得。"]
  ]
};
