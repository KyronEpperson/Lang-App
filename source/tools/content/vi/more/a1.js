/* vi-en stage A1: lessons for Vietnamese speakers (source of truth for vi). Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/vi.md §4 and §8; practice sets follow the article-plural standing rule (§7).
   final-sounds and noun-phrase are vi-only lessons (profile §8 "Additions"; deviations.c.json extraLessons). */
module.exports = [
{ id:"it-there", title:"It và there: chủ ngữ mà tiếng Việt không cần", blurb:"Thời tiết, giờ giấc dùng it; “ở đâu đó có…” là there is / there are.", deck:"Trò chuyện xã giao", body:`
<p>Tiếng Việt nói “Lạnh quá”, “Trời mưa” hay “Gần đây có quán cà phê” mà không cần một chủ ngữ thật sự. Câu tiếng Anh thì lúc nào cũng phải có chủ ngữ. Khi không có ai làm hành động, tiếng Anh dùng hai từ để giữ chỗ: <b>it</b> và <b>there</b>.</p>
<h3>Thời tiết, giờ giấc: It</h3>
<p>Ở đây <b>it</b> không có nghĩa là “nó”, mà chỉ đứng vào chỗ chủ ngữ. “Trời” trong “trời mưa” cũng không phải là <b>the sky</b>: chỉ cần nói <b>It's raining</b>.</p>
{{ex:It's cold today.|/ɪts koʊld təˈdeɪ/|Hôm nay trời lạnh}}{{ex:It's three o'clock.|/ɪts θriː əˈklɑːk/|Bây giờ là ba giờ}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Trời đang mưa}}
<h3>“Ở đâu đó có…”: There is / There are</h3>
<p>Tiếng Việt dùng một chữ “có” cho hai nghĩa: “Tôi có xe” và “Ngoài kia có xe”. Tiếng Anh tách làm hai. Một thứ có mặt ở một nơi là <b>There is a …</b>; nhiều thứ là <b>There are …</b> với danh từ số nhiều. Khi nói, <b>There is</b> thường rút gọn thành <b>There's</b>.</p>
{{ex:There's a cafe near here.|/ðerz‿ə kæˈfeɪ nɪr hɪr/|Gần đây có một quán cà phê}}{{ex:There are two rooms.|/ðer ɑːr tuː ruːmz/|Có hai phòng}}
<h3>Câu hỏi và câu phủ định</h3>
<p>Muốn hỏi, đưa <b>is / are</b> lên trước <b>there</b>. Đừng dịch “có… không?” thành <b>Have…?</b>.</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm hɪr/|Ở đây có nhà vệ sinh không?}}{{ex:Are there any seats?|/ɑːr ðer ˈeni siːts/|Còn chỗ ngồi không?}}{{ex:There isn't a bus today.|/ðer ˈɪzənt‿ə bʌs təˈdeɪ/|Hôm nay không có xe buýt}}
<h3>Phân biệt với have</h3>
<p>Một người sở hữu thứ gì thì dùng <b>have</b>; một thứ có mặt ở một nơi thì dùng <b>there is</b>.</p>
{{ex:I have a car.|/aɪ hæv‿ə kɑːr/|Tôi có một chiếc ô tô}}{{ex:There's a car outside.|/ðerz‿ə kɑːr aʊtˈsaɪd/|Bên ngoài có một chiếc ô tô}}
<div class="tip">Lỗi hay gặp nhất: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓ / <b>Have many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["Nói “Hôm nay trời nóng” bằng tiếng Anh thế nào?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Thời tiết cần chủ ngữ \"it\"."],["There ___ three people. Chọn từ điền vào chỗ trống.",["is","are","have","be"],1,"\"Three people\" là số nhiều nên dùng \"there are\"."],["Nói “Ở đây có nhà vệ sinh không?” bằng tiếng Anh thế nào?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Hỏi một nơi có thứ gì không thì dùng \"Is there a…?\"."]],
practice:[
["mc","“Trời đang mưa” =","It's raining.","Is raining.","There is raining.","Rain is.","Thời tiết dùng \"it\" làm chủ ngữ."],
["mc","“Gần đây có một quán cà phê” =","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Thứ có mặt ở một nơi thì dùng \"there is\"; một quán nên có mạo từ \"a\"."],
["mc","There ___ two rooms. Chọn từ đúng.","are","is","have","has","\"Rooms\" là số nhiều nên dùng \"are\"."],
["mc","“Bây giờ là ba giờ” =","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Giờ giấc cũng bắt đầu bằng \"it\"."],
["mc","“Tôi có một chiếc ô tô” =","I have a car.","There is a car me.","I am a car.","It's a car me.","Người sở hữu thứ gì thì dùng \"have\"."],
["or","Hôm nay trời lạnh","It's cold today","There's","Thời tiết dùng \"it\" làm chủ ngữ."],
["or","Bên ngoài có một chiếc ô tô","There's a car outside","cars","Một chiếc nên dùng mạo từ \"a\" và danh từ số ít \"car\"."],
["or","Có hai chỗ ngồi","There are two seats","seat is","Từ hai trở lên thì dùng \"are\" và danh từ số nhiều \"seats\"."],
["fi","__ cold today.","Hôm nay trời lạnh","It's|It is","Is|There's|This","Dùng \"it\" để lấp chỗ chủ ngữ."],
["fi","There __ a bank near here.","Gần đây có một ngân hàng","is","are|have|be","Một ngân hàng nên dùng \"is\"."],
["fi","__ there any seats?","Còn chỗ ngồi không?","Are","Is|Do|Have","\"Seats\" là số nhiều nên dùng \"Are\"."],
["ty","Hôm nay trời nóng","It's hot today","it · hot · today — thời tiết dùng it","There's","Thời tiết bắt đầu bằng \"it\"."],
["ty","Ở đây có nhà vệ sinh không?","Is there a bathroom here|Is there a restroom here","is there · bathroom — chú ý mạo từ","the","Hỏi về một thứ người nghe chưa biết nên dùng mạo từ \"a\"."],
["ty","Có hai phòng","There are two rooms","there are · two · room — số nhiều","room","Có \"two\" nên danh từ phải ở dạng số nhiều: \"rooms\"."]]},
{ id:"plurals", title:"Số nhiều -s, this / these, my / your", blurb:"Từ hai trở lên thì danh từ phải có -s. This cho một, these cho nhiều.", deck:"Mua sắm · thanh toán", body:`
<p>Tiếng Việt nói “ba quả táo”, “những quyển sách”: danh từ không bao giờ đổi hình thức, và “các / những” có thể bỏ đi. Tiếng Anh thì khác: từ hai trở lên, danh từ <b>bắt buộc</b> phải thêm <b>-s</b>, kể cả khi đã có con số đứng trước. Đây là lỗi người Việt mắc nhiều nhất, ngay cả ở trình độ cao.</p>
<h3>Cách tạo số nhiều</h3>
<div class="tbl"><table><tr><th>Quy tắc</th><th>Ví dụ</th></tr><tr><td>Hầu hết thêm -s</td><td class="k">book → books</td></tr><tr><td>Sau s, x, ch, sh thêm -es</td><td class="k">box → boxes</td></tr><tr><td>Phụ âm + y → -ies</td><td class="k">city → cities</td></tr><tr><td>Bất quy tắc</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
<p>Đuôi -s phải được đọc ra: /s/ trong <b>books</b>, /z/ trong <b>keys</b>, /ɪz/ trong <b>boxes</b>. Bài “Âm cuối” sẽ luyện kỹ phần này.</p>
{{ex:two books|/tuː bʊks/|hai quyển sách}}{{ex:three boxes|/θriː ˈbɑːksɪz/|ba cái hộp}}{{ex:I have two children.|/aɪ hæv tuː ˈtʃɪldrən/|Tôi có hai đứa con}}
<h3>this / that cho một, these / those cho nhiều</h3>
{{ex:This is my bag.|/ðɪs‿ɪz maɪ bæg/|Đây là túi của tôi}}{{ex:These are my keys.|/ðiːz‿ɑːr maɪ kiːz/|Đây là những chiếc chìa khóa của tôi}}{{ex:Those shoes are nice.|/ðoʊz ʃuːz‿ɑːr naɪs/|Đôi giày kia đẹp}}
<h3>my, your, his, her, our, their</h3>
<p>Tiếng Việt chỉ người sở hữu bằng “của” đặt sau danh từ: “túi của tôi”. Tiếng Anh đặt tính từ sở hữu <b>trước</b> danh từ: <b>my bag</b>. Đã có <b>my, your…</b> thì không dùng thêm <b>a</b> hay <b>the</b>.</p>
{{ex:Is this your phone?|/ɪz ðɪs jʊr foʊn/|Đây có phải điện thoại của bạn không?}}{{ex:Her brothers live in Da Nang.|/hɝː ˈbrʌðɚz lɪv‿ɪn dɑː ˈnɑːŋ/|Các anh trai của cô ấy sống ở Đà Nẵng}}
<div class="tip">Sau số đếm, <b>many</b>, <b>these</b>, <b>those</b>, danh từ luôn ở số nhiều: <b>two friend</b> ✗ → <b>two friends</b> ✓ / <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Chọn từ điền vào chỗ trống.",["sister","sisters","a sister","sister's"],1,"Có \"two\" nên dùng số nhiều \"sisters\"."],["___ are my keys. Chọn từ điền vào chỗ trống.",["This","That","These","It"],2,"\"Keys\" là số nhiều nên dùng \"These\"."],["Nói “Đây là túi của tôi” bằng tiếng Anh thế nào?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Đã có \"my\" thì không dùng mạo từ."]],
practice:[
["mc","“hai quyển sách” =","two books","two book","two a book","twos book","Từ hai trở lên, danh từ thêm -s số nhiều."],
["mc","Dạng số nhiều của \"child\" là gì?","children","childs","childes","child","Đây là danh từ số nhiều bất quy tắc."],
["mc","___ shoes are nice. (“đôi giày kia”)","Those","That","This","It","\"Shoes\" là số nhiều nên dùng \"those\"."],
["mc","“Đây là túi của tôi” =","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","\"My\" và mạo từ không đi cùng nhau."],
["mc","Dạng số nhiều của \"box\" là gì?","boxes","boxs","boxies","box","Sau s, x, ch, sh thì thêm -es."],
["or","Đây là những chiếc chìa khóa của tôi","These are my keys","key This","Nhiều chiếc nên dùng \"these\" và số nhiều \"keys\"."],
["or","Tôi có hai đứa con","I have two children","child a","Có \"two\" nên dùng số nhiều \"children\"; không dùng mạo từ \"a\"."],
["or","Đôi giày kia đẹp","Those shoes are nice","That","\"Shoes\" là số nhiều nên dùng \"those\"."],
["fi","I have three __.","Tôi có ba con mèo","cats","cat|a cat|cat's","Có \"three\" nên dùng số nhiều \"cats\"."],
["fi","__ is my friend.","Đây là bạn tôi","This","These|Those|They","Một người nên dùng \"this\"."],
["fi","Two __, please.","Cho tôi hai cốc cà phê","coffees","coffee|a coffee|coffee's","Gọi đồ uống theo số cốc thì nói số nhiều \"coffees\"."],
["ty","Đây là những quyển sách của tôi","These are my books","these · my · book — số nhiều","book","Nhiều quyển nên dùng \"these\" và số nhiều \"books\"."],
["ty","Tôi có hai chị gái","I have two sisters","have · two · sister — số nhiều","sister","Có \"two\" nên dùng số nhiều \"sisters\"."],
["ty","Đây là túi của tôi","This is my bag","this · my · bag — không dùng mạo từ","a","Đã có \"my\" thì không dùng mạo từ \"a\"."]]},
{ id:"present", title:"Thì hiện tại đơn và trật tự từ", blurb:"Chủ ngữ + động từ + tân ngữ giống tiếng Việt. Chú ý vị trí của always, usually, never.", deck:"Giới thiệu bản thân", body:`
<p>Tin vui: câu cơ bản của tiếng Anh có trật tự giống tiếng Việt, <b>chủ ngữ + động từ + tân ngữ</b>. “Tôi uống cà phê” là <b>I drink coffee</b>. Thì hiện tại đơn dùng cho thói quen và những điều luôn đúng.</p>
{{ex:I drink coffee.|/aɪ drɪŋk ˈkɑːfi/|Tôi uống cà phê}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Tôi học tiếng Anh}}
<h3>Nơi chốn trước, thời gian sau</h3>
<p>Thông tin thêm đặt ở cuối câu, theo thứ tự <b>nơi chốn → thời gian</b>. Tiếng Việt hay đưa thời gian lên đầu (“Ngày nào tôi cũng…”); tiếng Anh thường để ở cuối.</p>
{{ex:We live in Hanoi.|/wiː lɪv‿ɪn hæˈnɔɪ/|Chúng tôi sống ở Hà Nội}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ‿ˈevri deɪ/|Ngày nào tôi cũng học tiếng Anh}}{{ex:They work on weekends.|/ðeɪ wɝːk‿ɑːn ˈwiːkendz/|Họ làm việc vào cuối tuần}}
<h3>Câu phủ định: don't</h3>
<p>Tiếng Việt chỉ cần thêm “không” trước động từ. Tiếng Anh cần trợ động từ (do, does, did): <b>don't</b> + động từ. Không nói <b>I not eat</b>.</p>
{{ex:I don't eat meat.|/aɪ doʊnt‿iːt miːt/|Tôi không ăn thịt}}
<h3>Trạng từ chỉ tần suất: always, usually, sometimes, never</h3>
<p>Đây là chỗ người Việt dễ sai. Những từ này đứng <b>ngay trước động từ thường</b>, nhưng đứng <b>sau</b> động từ to be: <b>He is always late</b>, không phải <b>He always is late</b>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli get‿ʌp‿ət ˈsevən/|Tôi thường dậy lúc bảy giờ}}{{ex:I never drink coffee at night.|/aɪ ˈnevɚ drɪŋk ˈkɑːfi ət naɪt/|Tôi không bao giờ uống cà phê vào buổi tối}}{{ex:He is always late.|/hi ɪz‿ˈɑːlweɪz leɪt/|Anh ấy lúc nào cũng đến muộn}}
<div class="tip">Đừng đặt từ chỉ tần suất theo kiểu tiếng Việt: <b>He always is late.</b> ✗ → <b>He is always late.</b> ✓ / <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓</div>`,
check:[["Câu nào đúng trật tự cho “Tôi uống cà phê”?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Chủ ngữ + động từ + tân ngữ, giống tiếng Việt."],["I ___ eat meat. (“không ăn”)",["not","am not","no","don't"],3,"Câu phủ định với động từ thường dùng \"don't\"."],["Đặt \"always\" ở đâu là đúng?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Trạng từ chỉ tần suất đứng ngay trước động từ thường."]],
practice:[
["mc","“Tôi học tiếng Anh” =","I study English.","I English study.","I am study English.","Study I English.","Chủ ngữ + động từ + tân ngữ."],
["mc","“Tôi không ăn thịt” =","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Phủ định với động từ thường dùng \"don't\", không dùng \"not\" một mình."],
["mc","“Chúng tôi sống ở Seoul” =","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Nơi chốn đứng sau động từ."],
["mc","“Tôi thường dậy lúc bảy giờ” =","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","\"Usually\" đứng ngay trước động từ thường."],
["mc","Câu nào nói về việc làm hằng ngày?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Thói quen dùng thì hiện tại đơn."],
["or","Ngày nào tôi cũng uống cà phê","I drink coffee every day","the am","Thói quen dùng thì hiện tại đơn; \"coffee\" nói chung là danh từ không đếm được, không dùng mạo từ."],
["or","Tôi đọc nhiều sách","I read many books","book","Sau \"many\" là danh từ số nhiều \"books\"."],
["or","Chúng tôi làm việc vào cuối tuần","We work on weekends","are","Không đặt động từ to be trước động từ thường."],
["fi","I __ like fish.","Tôi không thích cá","don't|do not","not|am not|no","Phủ định với động từ thường dùng \"don't\"."],
["fi","I __ English every day.","Ngày nào tôi cũng học tiếng Anh","study","am study|studying|to study","Thì hiện tại đơn dùng động từ nguyên mẫu, không thêm \"am\" hay -ing."],
["fi","They live __ Busan.","Họ sống ở Busan","in","at|on|to","Trước tên thành phố dùng \"in\"."],
["ty","Tôi uống trà","I drink tea","drink · tea — không dùng mạo từ","a","\"Tea\" nói chung là danh từ không đếm được, không dùng mạo từ."],
["ty","Tôi thích mèo","I like cats","like · cat — số nhiều","cat","Nói về loài mèo nói chung thì dùng số nhiều \"cats\"."],
["ty","Tôi không ăn thịt","I don't eat meat","don't · eat · meat — câu phủ định","am","Phủ định với động từ thường dùng \"don't\"."]]},
{ id:"questions", title:"Đặt câu hỏi: Do you…? và từ để hỏi", blurb:"Không có “có… không?”: đưa do lên đầu câu, từ để hỏi cũng đứng đầu.", deck:"Tiếng Anh cấp tốc 2", body:`
<p>Tiếng Việt giữ nguyên trật tự câu, thêm “có… không?” hoặc đặt từ để hỏi vào đúng chỗ của câu trả lời: “Bạn đi đâu?”. Tiếng Anh thì phải <b>đổi trật tự từ</b>, và từ để hỏi luôn đứng đầu câu.</p>
<h3>Động từ to be: đảo lên trước chủ ngữ</h3>
{{ex:Are you okay?|/ɑːr ju oʊˈkeɪ/|Bạn ổn chứ?}}{{ex:Is this your bag?|/ɪz ðɪs jʊr bæg/|Đây có phải túi của bạn không?}}
<h3>Động từ thường: thêm Do ở đầu câu</h3>
<p>“Có… không?” trở thành <b>Do</b> ở đầu câu; phần còn lại giữ nguyên trật tự. Đừng thêm <b>yes or no</b> vào cuối câu.</p>
{{ex:Do you like coffee?|/duː ju laɪk ˈkɑːfi/|Bạn có thích cà phê không?}}{{ex:Do you speak English?|/duː ju spiːk‿ˈɪŋglɪʃ/|Bạn có nói tiếng Anh không?}}
<p>Trả lời ngắn: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>Từ để hỏi đứng đầu câu</h3>
<p><b>what</b> (gì), <b>where</b> (đâu), <b>when</b> (khi nào), <b>who</b> (ai), <b>why</b> (tại sao), <b>how</b> (thế nào) luôn đứng đầu, sau đó là trật tự câu hỏi. “Bạn sống ở đâu?” không phải <b>You live where?</b> mà là <b>Where do you live?</b>.</p>
{{ex:Where do you live?|/wer duː ju lɪv/|Bạn sống ở đâu?}}{{ex:What do you do?|/wʌt duː ju duː/|Bạn làm nghề gì?}}{{ex:Where is the bathroom?|/wer ɪz ðə ˈbæθruːm/|Nhà vệ sinh ở đâu?}}{{ex:How much is this?|/haʊ mʌtʃ‿ɪz ðɪs/|Cái này bao nhiêu tiền?}}
<div class="tip">Lỗi hay gặp nhất: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>You like coffee, yes or no?</b> ✗ → <b>Do you like coffee?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["Nói “Bạn có thích cà phê không?” bằng tiếng Anh thế nào?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Câu hỏi với động từ thường bắt đầu bằng \"Do\"."],["Nói “Bạn sống ở đâu?” bằng tiếng Anh thế nào?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Từ để hỏi + do + chủ ngữ + động từ."],["Trả lời câu \"Do you speak English?\" thế nào cho đúng?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Hỏi bằng \"Do\" thì trả lời bằng \"do\"."]],
practice:[
["mc","“Bạn có nói tiếng Anh không?” =","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Câu hỏi với động từ thường bắt đầu bằng \"Do\"."],
["mc","“Bạn sống ở đâu?” =","Where do you live?","Where you live?","Where are you live?","Where live you?","Từ để hỏi đứng đầu, sau đó là do + chủ ngữ + động từ."],
["mc","“Cái này bao nhiêu tiền?” =","How much is this?","How much this is?","How much does this?","What much is this?","Hỏi giá dùng \"How much is…?\"."],
["mc","Do you like tea? Câu trả lời nào đúng?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Hỏi bằng \"Do\" thì trả lời bằng \"do\"."],
["mc","“Bạn làm nghề gì?” =","What do you do?","What are you do?","What you do?","What do you?","Hỏi nghề nghiệp dùng \"What do you do?\"."],
["or","Bạn có thích cà phê không?","Do you like coffee","Are the","Câu hỏi với động từ thường bắt đầu bằng \"Do\"; \"coffee\" nói chung không dùng mạo từ."],
["or","Nhà vệ sinh ở đâu?","Where is the bathroom","a do","Nhà vệ sinh của tòa nhà này, cả hai đều biết là cái nào, nên dùng mạo từ \"the\"."],
["or","Bạn sống ở đâu?","Where do you live","are","Câu hỏi với động từ thường cần \"do\"."],
["fi","__ you like music?","Bạn có thích âm nhạc không?","Do","Are|Is|Does","\"Like\" là động từ thường nên hỏi bằng \"Do\"."],
["fi","__ do you live?","Bạn sống ở đâu?","Where","What|Who|When","Hỏi nơi chốn dùng \"where\"."],
["fi","What time __ it?","Mấy giờ rồi?","is","do|does|are","Hỏi giờ dùng động từ to be."],
["ty","Bạn có nói tiếng Anh không?","Do you speak English","do · speak · English — bắt đầu bằng do","Are","Câu hỏi với động từ thường bắt đầu bằng \"Do\"."],
["ty","Nhà vệ sinh ở đâu?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — mạo từ the","a","Cả hai đều biết là nhà vệ sinh nào nên dùng mạo từ \"the\"."],
["ty","Bạn có thích chó không?","Do you like dogs","do · like · dog — số nhiều","dog","Nói về loài chó nói chung thì dùng số nhiều \"dogs\"."]]},
{ id:"third-s", title:"Ngôi thứ ba số ít: thêm -s, does / doesn't", blurb:"He, she, it hoặc một người: động từ thêm -s. Câu hỏi và câu phủ định dùng does.", deck:"Giới thiệu bản thân", body:`
<p>Động từ tiếng Việt không bao giờ đổi theo chủ ngữ: “tôi làm”, “cô ấy làm”. Trong thì hiện tại đơn của tiếng Anh, khi chủ ngữ ở <b>ngôi thứ ba số ít</b> (<b>he, she, it</b>, một người hay một vật), động từ phải thêm <b>-s</b>. Đuôi này cũng phải được đọc ra: ngay cả người học ở trình độ C1 vẫn hay bỏ nó khi nói.</p>
<div class="tbl"><table><tr><th>Chủ ngữ</th><th>Động từ</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi wɝːks‿ət‿ə bæŋk/|Cô ấy làm việc ở ngân hàng}}{{ex:He likes soccer.|/hi laɪks ˈsɑːkɚ/|Anh ấy thích bóng đá}}{{ex:My mom cooks well.|/maɪ mɑːm kʊks wel/|Mẹ tôi nấu ăn ngon}}
<p>Đuôi -s đọc là /s/ sau âm vô thanh (<b>works</b>, <b>likes</b>), /z/ sau nguyên âm và âm hữu thanh (<b>lives</b>, <b>plays</b>), /ɪz/ sau âm s, sh, ch (<b>watches</b>).</p>
<h3>Động từ đổi hình thức một chút</h3>
{{ex:She has a car.|/ʃi hæz‿ə kɑːr/|Cô ấy có ô tô (have → has)}}{{ex:He goes to work at eight.|/hi goʊz tə wɝːk‿ət‿eɪt/|Anh ấy đi làm lúc tám giờ (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz‿ˈɪŋglɪʃ/|Cô ấy học tiếng Anh (study → studies)}}
<h3>Câu phủ định và câu hỏi: does</h3>
<p>Khi có <b>doesn't</b> hoặc <b>Does</b>, đuôi -s chuyển sang trợ động từ; động từ chính trở về dạng nguyên mẫu.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌzənt drɪŋk ˈkɑːfi/|Anh ấy không uống cà phê}}{{ex:Does she live here?|/dʌz ʃi lɪv hɪr/|Cô ấy có sống ở đây không?}}
<div class="tip">Lỗi hay gặp nhất: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. Chọn từ điền vào chỗ trống.",["live","lives","living","is live"],1,"\"She\" là ngôi thứ ba số ít nên động từ thêm -s."],["He ___ like coffee. Chọn từ điền vào chỗ trống.",["don't","isn't","doesn't","not"],2,"Câu phủ định ở ngôi thứ ba số ít dùng \"doesn't\"."],["Nói “Cô ấy có ô tô” bằng tiếng Anh thế nào?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Sau \"she\", \"have\" đổi thành \"has\"."]],
practice:[
["mc","My brother ___ in Busan. Chọn từ đúng.","works","work","working","is work","\"My brother\" là ngôi thứ ba số ít nên dùng \"works\"."],
["mc","“Anh ấy không uống cà phê” =","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Ngôi thứ ba số ít: \"doesn't\" + động từ nguyên mẫu."],
["mc","“Cô ấy có sống ở đây không?” =","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Sau \"Does\", động từ không thêm -s."],
["mc","have → she ___ (chọn dạng đúng)","has","haves","have","is have","Ở ngôi thứ ba số ít, \"have\" đổi thành \"has\"."],
["mc","study → he ___ (chọn dạng đúng)","studies","studys","study","studyes","Phụ âm + y thì đổi thành -ies."],
["or","Cô ấy làm việc ở một ngân hàng","She works at a bank","work the","\"She\" là ngôi thứ ba số ít nên dùng \"works\"; nơi làm việc nhắc đến lần đầu dùng mạo từ \"a\"."],
["or","Anh ấy có hai con chó","He has two dogs","have dog","Ngôi thứ ba số ít dùng \"has\"; có \"two\" nên dùng số nhiều \"dogs\"."],
["or","Cô ấy không ăn thịt","She doesn't eat meat","eats","Sau \"doesn't\" là động từ nguyên mẫu, không thêm -s."],
["fi","He __ soccer.","Anh ấy thích bóng đá","likes","like|liking|is like","\"He\" là ngôi thứ ba số ít nên dùng \"likes\"."],
["fi","__ she speak English?","Cô ấy có nói tiếng Anh không?","Does","Do|Is|Are","Câu hỏi với \"she\" dùng \"Does\"."],
["fi","She __ to work at eight.","Cô ấy đi làm lúc tám giờ","goes","go|going|gos","\"Go\" ở ngôi thứ ba số ít là \"goes\"."],
["ty","Anh ấy có ô tô","He has a car","has · car — mạo từ a","have","Ngôi thứ ba số ít dùng \"has\"; một chiếc xe nên dùng mạo từ \"a\"."],
["ty","Cô ấy thích mèo","She likes cats","likes · cat — số nhiều","cat","\"She\" là ngôi thứ ba số ít nên dùng \"likes\"; mèo nói chung dùng số nhiều \"cats\"."],
["ty","Anh ấy không sống ở đây","He doesn't live here","doesn't · live · here — động từ nguyên mẫu","lives","Sau \"doesn't\" là động từ nguyên mẫu."]]},
{ id:"final-sounds", title:"Âm cuối và đuôi -s, -ed", blurb:"Tiếng Anh đọc rõ âm cuối và cụm phụ âm. Đuôi -s, -ed mang cả ngữ pháp.", deck:"Âm cuối", body:`
<p>Âm tiết tiếng Việt chỉ kết thúc bằng vài phụ âm (“p, t, c, ch, m, n, ng, nh”), và những âm này được ngậm lại, không bật ra. Tiếng Anh có rất nhiều âm cuối, được đọc rõ, và thường là <b>cụm phụ âm</b> như /ks/, /st/, /nts/. Bỏ âm cuối thì người nghe hiểu sai cả ngữ pháp: <b>book</b> hay <b>books</b>, <b>work</b> hay <b>worked</b>.</p>
<h3>Đuôi -s: /s/, /z/ hoặc /ɪz/</h3>
<p>Ba cách đọc này dùng chung cho đuôi -s số nhiều, đuôi -s ở ngôi thứ ba số ít và sở hữu cách ('s).</p>
<div class="tbl"><table><tr><th>Cách đọc</th><th>Khi nào</th><th>Ví dụ</th></tr><tr><td>/s/</td><td>sau âm vô thanh /p t k f/</td><td class="k">books, works</td></tr><tr><td>/z/</td><td>sau nguyên âm và âm hữu thanh</td><td class="k">dogs, plays</td></tr><tr><td>/ɪz/</td><td>sau âm /s z ʃ tʃ dʒ/</td><td class="k">buses, watches</td></tr></table></div>
{{ex:two books|/tuː bʊks/|hai quyển sách}}{{ex:two dogs|/tuː dɑːgz/|hai con chó}}{{ex:two buses|/tuː ˈbʌsɪz/|hai chiếc xe buýt}}
<h3>Cụm phụ âm: đọc đủ từng âm</h3>
<p>Tiếng Việt không có cụm phụ âm, nên người học hay chỉ giữ lại một âm: <b>six</b> nghe thành “xích”, <b>last</b> thành “lát”. Hãy đọc đủ cả cụm.</p>
{{ex:six students|/sɪks ˈstuːdənts/|sáu học sinh}}{{ex:last week|/læst wiːk/|tuần trước}}
<h3>Hữu thanh hay vô thanh ở cuối từ</h3>
<p>Người Việt hay đọc <b>dog</b> thành “đóc”, tức là thành <b>dock</b>. Âm cuối hữu thanh /b d g v z/ phải giữ được độ rung, và nguyên âm đứng trước nó hơi dài ra.</p>
{{ex:bag / back|/bæg/ / /bæk/|cái túi / phía sau}}{{ex:dog / dock|/dɑːg/ / /dɑːk/|con chó / bến tàu}}{{ex:seed / seat|/siːd/ / /siːt/|hạt giống / chỗ ngồi}}
<h3>Nối âm: phụ âm cuối nối sang nguyên âm</h3>
<p>Khi từ sau bắt đầu bằng nguyên âm, phụ âm cuối được nối sang từ đó. Trong phiên âm của khóa học, dấu ‿ đánh dấu chỗ nối. Nối âm là cách dễ nhất để đọc được âm cuối.</p>
{{ex:My brother works in Hanoi.|/maɪ ˈbrʌðɚ wɝːks‿ɪn hæˈnɔɪ/|Anh trai tôi làm việc ở Hà Nội}}{{ex:She lives in a big city.|/ʃi lɪvz‿ɪn‿ə bɪg ˈsɪti/|Cô ấy sống ở một thành phố lớn}}
<h3>Xem trước đuôi -ed</h3>
<p>Thì quá khứ đơn thêm -ed, đọc là /t/, /d/ hoặc /ɪd/. Bài về thì quá khứ đơn sẽ luyện kỹ hơn.</p>
{{ex:watched / played / wanted|/wɑːtʃt/ / /pleɪd/ / /ˈwɑːntɪd/|đã xem / đã chơi / đã muốn}}
<h3>Đừng thêm -s khi không cần</h3>
<p>Luyện đuôi -s nhiều quá, bạn có thể thêm /s/ vào cả những từ không có nó. Chỉ thêm -s khi danh từ thật sự ở số nhiều hoặc chủ ngữ ở ngôi thứ ba số ít: một sở thích là <b>hobby</b>, không phải <b>hobbies</b>.</p>
{{ex:My hobby is music.|/maɪ ˈhɑːbi ɪz ˈmjuːzɪk/|Sở thích của tôi là âm nhạc}}
<div class="tip">Lỗi hay gặp: <b>two bus</b> ✗ → <b>two buses</b> ✓ / <b>She work.</b> ✗ → <b>She works.</b> ✓ / đọc <b>dog</b> thành “đóc” ✗ → giữ âm /g/ hữu thanh ✓</div>`,
check:[["Từ nào có đuôi -s đọc là /ɪz/?",["books","dogs","buses","cats"],2,"Sau âm /s/, đuôi -es đọc là /ɪz/: \"buses\"."],["“Hai con chó” là cụm nào?",["two dogs","two dog","two dogses","a two dogs"],0,"Có \"two\" nên danh từ ở số nhiều; đuôi -s ở đây đọc là /z/."],["She ___ in Hanoi. Chọn từ điền vào chỗ trống.",["live","living","is live","lives"],3,"\"She\" là ngôi thứ ba số ít nên động từ thêm -s: \"lives\", đọc là /lɪvz/."]],
practice:[
["mc","“Sáu” là từ nào?","six","sick","sit","sip","\"Six\" kết thúc bằng cụm phụ âm /ks/; \"sick\" chỉ có /k/."],
["mc","“Cái túi” là từ nào?","bag","back","bat","bad","\"Bag\" kết thúc bằng /g/ hữu thanh; đọc thành /k/ thì sẽ thành \"back\"."],
["mc","“Con chó” là từ nào?","dog","dock","duck","dot","\"Dog\" kết thúc bằng /g/ hữu thanh, không phải /k/ như \"dock\"."],
["mc","Từ nào có đuôi -s đọc là /z/?","dogs","books","cats","buses","Sau âm hữu thanh /g/, đuôi -s đọc là /z/."],
["mc","Từ nào có đuôi -ed đọc là /ɪd/?","wanted","watched","played","worked","Sau âm /t/ hoặc /d/, đuôi -ed đọc là /ɪd/."],
["or","hai chiếc xe buýt","two buses","bus","Có \"two\" nên dùng số nhiều; \"bus\" thêm -es, đọc là /ɪz/."],
["or","Cô ấy có sáu học sinh","She has six students","student","Có \"six\" nên dùng số nhiều \"students\"; đọc rõ cụm phụ âm /nts/."],
["or","Anh trai tôi làm việc ở Hà Nội","My brother works in Hanoi","work","\"My brother\" là ngôi thứ ba số ít nên dùng \"works\"; nối /s/ sang \"in\"."],
["fi","She __ in Hanoi.","Cô ấy làm việc ở Hà Nội","works","work|is work|working","\"She\" là ngôi thứ ba số ít nên dùng \"works\"; đọc rõ cụm /ks/."],
["fi","My __ is music.","Sở thích của tôi là âm nhạc","hobby","hobbies|hobbys|hobby's","Chỉ có một sở thích nên dùng số ít \"hobby\"; đừng thêm /s/."],
["fi","I need two __.","Tôi cần hai cái hộp","boxes","box|boxs|a box","Có \"two\" nên dùng số nhiều; sau x thêm -es, đọc là /ɪz/."],
["ty","sáu học sinh","six students","six · student — số nhiều","student","Có \"six\" nên \"students\" ở dạng số nhiều, cụm phụ âm /nts/."],
["ty","Anh ấy có hai cái túi","He has two bags","has · two · bag — số nhiều","bag","Có \"two\" nên dùng số nhiều \"bags\"; đuôi -s đọc là /z/."],
["ty","Mẹ tôi nấu ăn ngon","My mom cooks well|My mother cooks well","mom · cook · well — ngôi thứ ba số ít","cook","\"My mom\" là ngôi thứ ba số ít nên dùng \"cooks\"; đọc rõ /ks/."]]},
{ id:"countable", title:"Danh từ đếm được và không đếm được: some, any, much, many", blurb:"“Water” không đi với a và không thêm -s. Many cho danh từ đếm được, much cho danh từ không đếm được.", deck:"Gọi món ở nhà hàng", body:`
<p>Tiếng Việt đếm mọi thứ qua loại từ: “một cốc nước”, “một bát phở”, “hai quả táo”. Tiếng Anh chia danh từ thành <b>danh từ đếm được</b> (đi thẳng với số: <b>two apples</b>) và <b>danh từ không đếm được</b> (cần một đơn vị đo: <b>a glass of water</b>).</p>
<div class="tbl"><table><tr><th>Đếm được</th><th>Không đếm được</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>dùng được a / an, số đếm, -s</td><td>không dùng a / an, số đếm, -s</td></tr></table></div>
<p>Một số từ đếm được trong tiếng Việt nhưng không đếm được trong tiếng Anh: <b>information</b>, <b>advice</b>, <b>homework</b>, <b>furniture</b>, <b>luggage</b>. Không bao giờ nói <b>informations</b>.</p>
<h3>some và any</h3>
<p>“Một ít, vài” là <b>some</b> trong câu khẳng định, <b>any</b> trong câu phủ định và câu nghi vấn.</p>
{{ex:I have some money.|/aɪ hæv sʌm ˈmʌni/|Tôi có một ít tiền}}{{ex:I don't have any money.|/aɪ doʊnt hæv‿ˈeni ˈmʌni/|Tôi không có đồng nào}}{{ex:Do you have any questions?|/duː ju hæv‿ˈeni ˈkwestʃənz/|Bạn có câu hỏi nào không?}}
<h3>many và much</h3>
<p>Danh từ đếm được dùng <b>many</b> + số nhiều; danh từ không đếm được dùng <b>much</b>. <b>A lot of</b> dùng được cho cả hai.</p>
{{ex:How many people?|/haʊ ˈmeni ˈpiːpəl/|Bao nhiêu người?}}{{ex:How much is it?|/haʊ mʌtʃ‿ɪz‿ɪt/|Bao nhiêu tiền?}}{{ex:I don't have much time.|/aɪ doʊnt hæv mʌtʃ taɪm/|Tôi không có nhiều thời gian}}
<h3>Loại từ tiếng Việt → a … of</h3>
<p>“Cốc”, “tách”, “bát” trong tiếng Việt chính là phần <b>a glass of</b>, <b>a cup of</b>, <b>a bowl of</b> trong tiếng Anh. Đừng bỏ phần này đi.</p>
{{ex:a glass of water|/ə glæs‿əv ˈwɑːtɚ/|một cốc nước}}{{ex:a cup of coffee|/ə kʌp‿əv ˈkɑːfi/|một tách cà phê}}{{ex:a bowl of pho|/ə boʊl‿əv fʌ/|một bát phở}}
<div class="tip">Lỗi hay gặp nhất: <b>a water</b>, <b>many money</b>, <b>informations</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b> ✓</div>`,
check:[["How ___ people are there? Chọn từ điền vào chỗ trống.",["much","many","any","a"],1,"\"People\" là danh từ đếm được nên dùng \"many\"."],["Từ nào là danh từ không đếm được?",["apple","chair","water","friend"],2,"\"Water\" không đi với \"a\" và không thêm -s."],["I don't have ___ money. Chọn từ điền vào chỗ trống.",["some","a","many","any"],3,"Câu phủ định dùng \"any\"."]],
practice:[
["mc","Can I have ___ water? Chọn từ đúng.","some","a","many","an","\"Water\" là danh từ không đếm được nên không dùng \"a\" hay \"many\"."],
["mc","How ___ time do we have? Chọn từ đúng.","much","many","any","a","\"Time\" là danh từ không đếm được nên dùng \"much\"."],
["mc","“Bạn có câu hỏi nào không?” =","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Sau \"any\", danh từ đếm được ở dạng số nhiều."],
["mc","“một cốc nước” =","a glass of water","a water glass of","one waters","a glass water","Danh từ không đếm được đếm bằng \"a glass of\"."],
["mc","I have ___ friends in Seoul. Chọn từ đúng.","many","much","a","an","\"Friends\" là danh từ đếm được ở số nhiều nên dùng \"many\"."],
["or","Tôi có một ít tiền","I have some money","a moneys","\"Money\" là danh từ không đếm được: không dùng mạo từ \"a\", không thêm -s."],
["or","Cho tôi hai quả táo","Two apples please","apple","Có \"two\" nên dùng số nhiều \"apples\"."],
["or","Tôi không có nhiều thời gian","I don't have much time","many","\"Time\" là danh từ không đếm được nên dùng \"much\"."],
["fi","How __ is this?","Cái này bao nhiêu tiền?","much","many|any|some","Hỏi giá dùng \"how much\"."],
["fi","I don't have __ questions.","Tôi không có câu hỏi nào","any","some|much|a","Câu phủ định dùng \"any\"."],
["fi","a cup __ coffee","một tách cà phê","of","for|in|a","Đếm bằng cấu trúc \"a cup of\"."],
["ty","Cho tôi xin ít nước được không?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — không dùng mạo từ","a","\"Water\" là danh từ không đếm được nên dùng \"some\" thay cho mạo từ \"a\"."],
["ty","Bạn có câu hỏi nào không?","Do you have any questions","any · question — số nhiều","question","Sau \"any\", danh từ đếm được ở dạng số nhiều: \"questions\"."],
["ty","Bao nhiêu người?","How many people","how many · people — đếm được","much","\"People\" là danh từ đếm được nên dùng \"many\"."]]},
{ id:"object-have", title:"Me, him, her và động từ have", blurb:"Sau động từ dùng me, không dùng I. Và have: một động từ dùng cho rất nhiều việc.", deck:"Giới thiệu bản thân", body:`
<p>Tiếng Việt dùng cùng một từ ở mọi vị trí: “Cô ấy biết tôi” và “Tôi biết cô ấy”. Đại từ nhân xưng tiếng Anh thì <b>đổi hình thức</b>: sau động từ hoặc giới từ phải dùng đại từ tân ngữ.</p>
<div class="tbl"><table><tr><th>Chủ ngữ</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Tân ngữ</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi noʊz miː/|Cô ấy biết tôi}}{{ex:I like him.|/aɪ laɪk hɪm/|Tôi thích anh ấy}}{{ex:Can you help us?|/kən ju help‿ʌs/|Bạn giúp chúng tôi được không?}}{{ex:I work with her.|/aɪ wɝːk wɪð hɝː/|Tôi làm việc cùng cô ấy}}
<h3>Sở hữu: my car, không phải car of me</h3>
<p>“Xe của tôi” không dịch từng chữ thành <b>car of me</b>. Tính từ sở hữu đứng trước danh từ: <b>my car</b>, <b>your phone</b>, <b>her bag</b>.</p>
{{ex:My car is outside.|/maɪ kɑːr ɪz‿aʊtˈsaɪd/|Xe của tôi ở bên ngoài}}
<h3>have: có, sở hữu</h3>
<p>Khi chủ ngữ là người, “có” là <b>have</b>: gia đình, đồ vật, thời gian. (Còn “ở đâu đó có…” là <b>there is</b>, như trong bài về it và there.)</p>
{{ex:I have two brothers.|/aɪ hæv tuː ˈbrʌðɚz/|Tôi có hai anh trai}}{{ex:Do you have a pen?|/duː ju hæv‿ə pen/|Bạn có bút không?}}{{ex:I don't have time.|/aɪ doʊnt hæv taɪm/|Tôi không có thời gian}}
<h3>have: ăn, uống</h3>
<p>Trước tên bữa ăn không dùng mạo từ.</p>
{{ex:Let's have lunch.|/lets hæv lʌntʃ/|Chúng ta đi ăn trưa nhé}}{{ex:I have coffee every morning.|/aɪ hæv ˈkɑːfi ˈevri ˈmɔːrnɪŋ/|Sáng nào tôi cũng uống cà phê}}
<div class="tip">Lỗi hay gặp nhất: <b>I talk to she every day.</b> ✗ → <b>I talk to her every day.</b> ✓ / <b>Car of me is outside.</b> ✗ → <b>My car is outside.</b> ✓</div>`,
check:[["I like ___. (“anh ấy”)",["he","his","him","he's"],2,"Sau động từ dùng đại từ tân ngữ \"him\"."],["Can you help ___? (“chúng tôi”)",["us","we","our","ours"],0,"Sau động từ dùng đại từ tân ngữ \"us\"."],["Nói “Bạn có bút không?” bằng tiếng Anh thế nào?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" là động từ thường nên hỏi bằng \"Do\"."]],
practice:[
["mc","She knows ___. (“tôi”)","me","I","my","mine","Sau động từ dùng đại từ tân ngữ \"me\"."],
["mc","I like ___. (“họ”)","them","they","their","theirs","Sau động từ dùng đại từ tân ngữ \"them\"."],
["mc","“Bạn giúp chúng tôi được không?” =","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Sau động từ dùng \"us\"."],
["mc","“Chúng ta đi ăn trưa nhé” =","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Trước tên bữa ăn không dùng mạo từ."],
["mc","“Tôi có hai anh trai” =","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","Gia đình dùng \"have\"; có \"two\" nên dùng số nhiều."],
["or","Bạn có bút không?","Do you have a pen","the pens","Hỏi một cái bút bất kỳ nên dùng mạo từ \"a\" và danh từ số ít \"pen\"."],
["or","Tôi thích cô ấy","I like her","she","Sau động từ dùng đại từ tân ngữ \"her\"."],
["or","Tôi có hai em gái","I have two sisters","sister a","Có \"two\" nên dùng số nhiều \"sisters\"; không dùng mạo từ \"a\"."],
["fi","Call __ tonight.","Tối nay gọi cho tôi nhé","me","I|my|mine","Sau động từ dùng \"me\"."],
["fi","I work with __.","Tôi làm việc cùng anh ấy","him","he|his|he's","Sau giới từ cũng dùng đại từ tân ngữ."],
["fi","She __ a dog.","Cô ấy nuôi một con chó","has","have|is|haves","\"She\" là ngôi thứ ba số ít nên dùng \"has\"."],
["ty","Bạn giúp tôi được không?","Can you help me|Could you help me","can you · help · me — đại từ tân ngữ","I","Sau động từ dùng đại từ tân ngữ \"me\"."],
["ty","Bạn có bút không?","Do you have a pen","do you have · pen — mạo từ a","the","Tìm một cái bút bất kỳ nên dùng mạo từ \"a\"."],
["ty","Tôi có nhiều bạn","I have many friends|I have a lot of friends","have · many · friend — số nhiều","friend","Sau \"many\" là danh từ số nhiều \"friends\"."]]},
{ id:"can-like", title:"Can, like + V-ing, I'd like: khả năng, sở thích và mong muốn", blurb:"Nói điều bạn làm được, điều bạn thích và điều bạn muốn ngay lúc này.", deck:"Trò chuyện xã giao", body:`
<p>Ba mẫu câu dùng ngay khi giới thiệu bản thân và khi gọi món.</p>
<h3>can: có thể, biết làm</h3>
<p><b>can</b> + động từ nguyên mẫu: không có <b>to</b>, không thêm -s kể cả với <b>he, she</b>. Tiếng Việt nói “có thể chơi”, nhưng tiếng Anh không nói <b>can to play</b>.</p>
{{ex:I can swim.|/aɪ kən swɪm/|Tôi biết bơi}}{{ex:I can't drive.|/aɪ kænt draɪv/|Tôi không biết lái xe}}{{ex:Can you speak Vietnamese?|/kən ju spiːk viːetnəˈmiːz/|Bạn có nói được tiếng Việt không?}}
<h3>like + V-ing: thích làm gì</h3>
<p>Khi nói về sở thích, sau <b>like, love</b> dùng dạng V-ing. Tiếng Việt chỉ đặt hai động từ cạnh nhau (“thích nấu ăn”), còn tiếng Anh cần <b>-ing</b>: <b>like cooking</b>. Còn “rất thích” không phải <b>very like</b>, mà là <b>really like</b> hoặc <b>like … very much</b>.</p>
{{ex:I like cooking.|/aɪ laɪk ˈkʊkɪŋ/|Tôi thích nấu ăn}}{{ex:I love watching movies.|/aɪ lʌv ˈwɑːtʃɪŋ ˈmuːviz/|Tôi rất thích xem phim}}{{ex:I don't like running.|/aɪ doʊnt laɪk ˈrʌnɪŋ/|Tôi không thích chạy bộ}}{{ex:I really like it.|/aɪ ˈriːəli laɪk‿ɪt/|Tôi rất thích}}
<h3>I'd like: cho tôi…, tôi muốn…</h3>
<p><b>I like</b> là thích nói chung; <b>I'd like</b> là muốn ngay bây giờ, nói một cách lịch sự. Khi gọi món, dùng <b>I'd like</b>.</p>
{{ex:I'd like a coffee, please.|/aɪd laɪk‿ə ˈkɑːfi pliːz/|Cho tôi một cốc cà phê}}{{ex:Would you like some tea?|/wʊd ju laɪk sʌm tiː/|Bạn có muốn uống chút trà không?}}
<div class="tip">Lỗi hay gặp nhất: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ / <b>I can to play.</b> ✗ → <b>I can play.</b> ✓ / <b>I very like it.</b> ✗ → <b>I really like it.</b> ✓ / khi gọi món: <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Chọn từ điền vào chỗ trống.",["sings","sing","singing","to sing"],1,"Sau \"can\" là động từ nguyên mẫu."],["Nói “Tôi thích nấu ăn” bằng tiếng Anh thế nào?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Sau \"like\" dùng dạng V-ing."],["Câu nào tự nhiên nhất khi gọi món ở quán cà phê?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Muốn thứ gì ngay bây giờ thì nói \"I'd like\"."]],
practice:[
["mc","He can ___ Korean. Chọn từ đúng.","speak","speaks","speaking","to speak","Sau \"can\" là động từ nguyên mẫu, không thêm -s, không có \"to\"."],
["mc","“Tôi không biết lái xe” =","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Phủ định của \"can\" là \"can't\"."],
["mc","“Tôi thích xem phim” =","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Sau \"like\" dùng V-ing; phim nói chung dùng số nhiều \"movies\"."],
["mc","Gọi món: “Cho tôi một cốc cà phê” =","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Muốn thứ gì ngay bây giờ thì nói \"I'd like\"."],
["mc","“Bạn có muốn uống chút trà không?” =","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Mời ai đó thì dùng \"Would you like…?\"."],
["or","Cho tôi một cốc cà phê","I'd like a coffee please","the coffees","Gọi một cốc nên dùng mạo từ \"a\" và danh từ số ít \"coffee\"."],
["or","Tôi thích đọc sách","I like reading books","book read","Sau \"like\" dùng V-ing; sách nói chung dùng số nhiều \"books\"."],
["or","Bạn biết bơi không?","Can you swim","swimming","Sau \"can\" là động từ nguyên mẫu."],
["fi","I can't __.","Tôi không biết bơi","swim","swimming|swims|to swim","Sau \"can't\" là động từ nguyên mẫu."],
["fi","I like __ music.","Tôi thích nghe nhạc","listening to","listen to|listen|to listening","Sau \"like\" dùng V-ing."],
["fi","__ like a sandwich, please.","Cho tôi một cái bánh sandwich","I'd|I would","I|I'm|I can","Gọi món dùng \"I'd like\"."],
["ty","Tôi thích nấu ăn","I like cooking|I love cooking|I like to cook","like · cook — dạng V-ing","cook","Sau \"like\" dùng V-ing."],
["ty","Cho tôi một cái bánh sandwich","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich","I'd like · sandwich — mạo từ a","the","Một cái bánh bất kỳ nên dùng mạo từ \"a\"."],
["ty","Tôi thích chó","I like dogs|I love dogs","like · dog — số nhiều","dog","Nói về loài chó nói chung thì dùng số nhiều \"dogs\"."]]},
{ id:"continuous", title:"Thì hiện tại tiếp diễn: be + V-ing", blurb:"Thói quen dùng thì hiện tại đơn; việc đang làm lúc này dùng be + V-ing.", deck:"Trò chuyện xã giao", body:`
<p>“Đang” trong tiếng Việt gần giống <b>be + V-ing</b>, nhưng có hai khác biệt. Thứ nhất, “đang” có thể bỏ (“Tôi làm việc” vẫn có thể hiểu là đang làm), còn tiếng Anh phải chọn rõ: việc <b>đang diễn ra lúc này</b> dùng <b>be + V-ing</b>. Thứ hai, động từ to be là <b>bắt buộc</b>: không nói <b>I going</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɝːkɪŋ naʊ/|Bây giờ tôi đang làm việc}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnɚ/|Cô ấy đang nấu bữa tối}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Trời đang mưa}}
<h3>Câu hỏi và câu phủ định</h3>
{{ex:What are you doing?|/wʌt‿ɑːr ju ˈduːɪŋ/|Bạn đang làm gì thế?}}{{ex:Are you listening?|/ɑːr ju ˈlɪsənɪŋ/|Bạn có đang nghe không?}}{{ex:I'm not sleeping.|/aɪm nɑːt ˈsliːpɪŋ/|Tôi không ngủ đâu}}
<h3>So sánh với thì hiện tại đơn</h3>
<div class="tbl"><table><tr><th>Thói quen (thì hiện tại đơn)</th><th>Lúc này (be + V-ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Động từ không dùng -ing</h3>
<p>Những động từ chỉ <b>trạng thái</b> như <b>like, know, want, need, have</b> (sở hữu) dùng thì hiện tại đơn, kể cả khi nói về lúc này.</p>
{{ex:I know him.|/aɪ noʊ hɪm/|Tôi biết anh ấy}}{{ex:I want some water.|/aɪ wɑːnt sʌm ˈwɑːtɚ/|Tôi muốn uống chút nước}}
<div class="tip">Lỗi hay gặp nhất là quên động từ to be: <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["Nói “Bạn đang làm gì thế?” bằng tiếng Anh thế nào?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Việc đang làm lúc này hỏi bằng be + V-ing."],["I ___ coffee every morning. Chọn từ điền vào chỗ trống.",["am drinking","drinking","drink","am drink"],2,"Thói quen hằng ngày dùng thì hiện tại đơn."],["Câu nào đúng?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\", \"have\" (sở hữu) không dùng dạng -ing."]],
practice:[
["mc","“Bây giờ tôi đang làm việc” =","I'm working now.","I work now am.","I'm work now.","I working now.","Việc đang làm lúc này dùng be + V-ing."],
["mc","“Cô ấy đang nấu bữa tối” =","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","Dùng be + V-ing; trước tên bữa ăn không dùng mạo từ."],
["mc","Câu nào nói về việc làm hằng ngày?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Thói quen dùng thì hiện tại đơn."],
["mc","“Bạn đang làm gì thế?” =","What are you doing?","What do you doing?","What are you do?","What you are doing?","Từ để hỏi + be + chủ ngữ + V-ing."],
["mc","“Tôi biết anh ấy” =","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" là động từ không dùng dạng -ing."],
["or","Tôi đang đọc một quyển sách","I'm reading a book","read books","Một quyển đang đọc nên dùng mạo từ \"a\" và danh từ số ít \"book\"."],
["or","Bọn trẻ đang chơi","The kids are playing","kid is","Nhiều đứa trẻ nên dùng số nhiều \"kids\" và \"are\"."],
["or","Bây giờ trời đang mưa","It's raining now","rains","Việc đang xảy ra lúc này dùng be + V-ing."],
["fi","I'm __ TV.","Tôi đang xem tivi","watching","watch|watches|to watch","Sau động từ to be dùng V-ing."],
["fi","What __ you doing?","Bạn đang làm gì?","are","do|is|does","Với \"you\" dùng \"are\"."],
["fi","She __ working today.","Hôm nay cô ấy không làm việc","isn't|is not","doesn't|don't|not","Phủ định của be + V-ing là \"isn't\"."],
["ty","Bây giờ tôi đang nấu ăn","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — dạng V-ing · now","cook","Việc đang làm lúc này dùng be + V-ing."],
["ty","Tôi đang xem một bộ phim","I'm watching a movie","I'm · watching · movie — mạo từ a","the","Một bộ phim bất kỳ nên dùng mạo từ \"a\"."],
["ty","Bọn trẻ đang ngủ","The kids are sleeping|The children are sleeping","kids · are · sleeping — số nhiều","kid","Nhiều đứa trẻ nên dùng số nhiều \"kids\" và \"are\"."]]},
{ id:"past", title:"Thì quá khứ đơn: was / were và -ed", blurb:"“Hôm qua” không thay được thì quá khứ. Động từ to be thành was / were, động từ thường thêm -ed.", deck:"Trò chuyện xã giao", body:`
<p>Tiếng Việt có thể đánh dấu quá khứ bằng “đã”, nhưng thường bỏ luôn khi đã có từ chỉ thời gian: “Hôm qua tôi đi làm”. Tiếng Anh thì <b>động từ phải đổi</b>. Có <b>yesterday</b> vẫn phải dùng thì quá khứ đơn.</p>
<h3>Động từ to be: was / were</h3>
<p><b>I, he, she, it</b> dùng <b>was</b>; <b>you, we, they</b> dùng <b>were</b>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪɚd/|Lúc đó tôi mệt}}{{ex:It was fun.|/ɪt wəz fʌn/|Vui lắm}}{{ex:We were at home.|/wiː wɝː ət hoʊm/|Chúng tôi ở nhà}}{{ex:Were you busy?|/wɝː ju ˈbɪzi/|Lúc đó bạn có bận không?}}
<h3>Động từ thường: thêm -ed</h3>
<p>Thêm <b>-ed</b> vào cuối động từ, chủ ngữ nào cũng vậy. Đuôi -ed phải được đọc ra: /t/ trong <b>worked</b>, <b>watched</b>; /d/ trong <b>called</b>, <b>played</b>; /ɪd/ trong <b>wanted</b>. Phiên âm trong khóa học luôn ghi đủ âm cuối này.</p>
{{ex:I worked yesterday.|/aɪ wɝːkt ˈjestɚdeɪ/|Hôm qua tôi đi làm}}{{ex:We watched a movie.|/wiː wɑːtʃt‿ə ˈmuːvi/|Chúng tôi đã xem một bộ phim}}{{ex:She called me.|/ʃi kɑːld miː/|Cô ấy đã gọi cho tôi}}
<h3>Câu phủ định và câu hỏi: did</h3>
<p>Có <b>didn't</b> hoặc <b>Did</b> thì động từ trở về dạng nguyên mẫu, vì <b>did</b> đã mang nghĩa quá khứ.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdənt wɝːk ˈjestɚdeɪ/|Hôm qua tôi không đi làm}}{{ex:Did you call me?|/dɪd ju kɑːl miː/|Bạn có gọi cho tôi không?}}
<p>“Đã” cũng không phải lúc nào cũng là <b>already</b>. “Hôm qua tôi đã đi làm” chỉ cần <b>I worked yesterday</b>.</p>
<div class="tip">Lỗi hay gặp nhất: <b>I work yesterday.</b> ✗ → <b>I worked yesterday.</b> ✓ / <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Chọn từ điền vào chỗ trống.",["was","were","did","are"],1,"Với \"they\" dùng \"were\"."],["Nói “Hôm qua tôi không đi làm” bằng tiếng Anh thế nào?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Sau \"didn't\" là động từ nguyên mẫu."],["Did you ___ the movie? Chọn từ điền vào chỗ trống.",["watch","watched","watching","watches"],0,"Sau \"Did\" là động từ nguyên mẫu."]],
practice:[
["mc","I ___ tired yesterday. Chọn từ đúng.","was","were","did","am","Với \"I\" dùng \"was\"."],
["mc","“Chúng tôi đã xem một bộ phim” =","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Động từ thường ở thì quá khứ đơn thêm -ed."],
["mc","“Hôm qua bạn có gọi không?” =","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Sau \"Did\" là động từ nguyên mẫu."],
["mc","“Vui lắm” (chuyện đã qua) =","It was fun.","It were fun.","It did fun.","It funned.","Với \"it\" dùng \"was\"."],
["mc","“Lúc đó bạn có bận không?” =","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" là tính từ nên hỏi bằng động từ to be."],
["or","Chúng tôi đã xem một bộ phim","We watched a movie","watch movies","Một bộ phim nên dùng mạo từ \"a\" và danh từ số ít \"movie\"."],
["or","Tôi đã đi chơi với bạn bè","I played with my friends","friend play","Nhiều người bạn nên dùng số nhiều \"friends\"."],
["or","Hôm qua tôi không đi làm","I didn't work yesterday","worked","Sau \"didn't\" là động từ nguyên mẫu."],
["fi","We __ at home last night.","Tối qua chúng tôi ở nhà","were","was|did|are","Với \"we\" dùng \"were\"."],
["fi","I __ soccer yesterday.","Hôm qua tôi đá bóng","played","play|playing|was play","Có \"yesterday\" vẫn phải dùng thì quá khứ đơn: thêm -ed."],
["fi","__ you work yesterday?","Hôm qua bạn có đi làm không?","Did","Were|Do|Was","Câu hỏi ở thì quá khứ đơn với động từ thường dùng \"Did\"."],
["ty","Lúc đó tôi mệt","I was tired","was · tired — quá khứ","were","Với \"I\" dùng \"was\"."],
["ty","Tôi đã xem một bộ phim","I watched a movie","watched · movie — mạo từ a","the","Một bộ phim nên dùng mạo từ \"a\"."],
["ty","Tôi đã gọi điện cho các bạn tôi","I called my friends","called · my · friend — số nhiều","friend","Nhiều người bạn nên dùng số nhiều \"friends\"."]]},
{ id:"irregular-past", title:"Động từ bất quy tắc ở quá khứ: went, ate, saw", blurb:"Động từ càng thông dụng càng hay bất quy tắc. Học trước 12 động từ này.", deck:"Trò chuyện xã giao", body:`
<p>Những động từ dùng hằng ngày thường là <b>động từ bất quy tắc</b>: dạng quá khứ (V2) không thêm -ed. Không có quy tắc chung nên hãy học theo cặp, và đừng nói <b>buyed</b> hay <b>goed</b>.</p>
<div class="tbl"><table><tr><th>Hiện tại</th><th>Quá khứ</th><th>Hiện tại</th><th>Quá khứ</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Da Nang.|/aɪ went tə dɑː ˈnɑːŋ/|Tôi đã đi Đà Nẵng}}{{ex:We ate pizza.|/wiː eɪt ˈpiːtsə/|Chúng tôi đã ăn bánh pizza}}{{ex:I saw a movie.|/aɪ sɑː ə ˈmuːvi/|Tôi đã xem một bộ phim}}{{ex:I met my friends.|/aɪ met maɪ frendz/|Tôi đã gặp bạn bè}}{{ex:I bought a book.|/aɪ bɑːt‿ə bʊk/|Tôi đã mua một quyển sách}}
<h3>Câu hỏi và câu phủ định: trở về nguyên mẫu</h3>
<p><b>did</b> đã mang nghĩa quá khứ, nên động từ chính trở về dạng nguyên mẫu.</p>
{{ex:What did you do?|/wʌt dɪd ju duː/|Bạn đã làm gì?}}{{ex:Where did you go?|/wer dɪd ju goʊ/|Bạn đã đi đâu?}}{{ex:I didn't go.|/aɪ ˈdɪdənt goʊ/|Tôi đã không đi}}
<div class="tip">Lỗi hay gặp nhất: <b>I buyed a book.</b> ✗ → <b>I bought a book.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Dạng quá khứ của \"go\" là gì?",["goed","gone","went","going"],2,"Quá khứ của \"go\" là \"went\"."],["Nói “Bạn đã làm gì?” bằng tiếng Anh thế nào?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Sau \"did\" là động từ nguyên mẫu \"do\"."],["I didn't ___ breakfast. Chọn từ điền vào chỗ trống.",["ate","eaten","eats","eat"],3,"Sau \"didn't\" là động từ nguyên mẫu."]],
practice:[
["mc","Dạng quá khứ của \"eat\" là gì?","ate","eated","eat","eaten","Quá khứ của \"eat\" là \"ate\"."],
["mc","“Bạn đã đi đâu?” =","Where did you go?","Where did you went?","Where you went?","Where were you go?","Sau \"did\" là động từ nguyên mẫu."],
["mc","“Tôi đã mua một quyển sách” =","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Quá khứ của \"buy\" là \"bought\"; một quyển nên dùng mạo từ \"a\"."],
["mc","Dạng quá khứ của \"see\" là gì?","saw","seed","seen","sawed","Quá khứ của \"see\" là \"saw\"."],
["mc","“Tôi đã không đi” =","I didn't go.","I didn't went.","I wasn't go.","I not went.","Sau \"didn't\" là động từ nguyên mẫu."],
["or","Tôi đã xem một bộ phim","I saw a movie","see movies","Một bộ phim nên dùng mạo từ \"a\" và danh từ số ít \"movie\"; quá khứ của \"see\" là \"saw\"."],
["or","Chúng tôi đã ăn bánh pizza","We ate pizza","eated","Quá khứ của \"eat\" là \"ate\"."],
["or","Tôi đã gặp bạn bè của tôi","I met my friends","friend meet","Nhiều người bạn nên dùng số nhiều \"friends\"."],
["fi","I __ to Jeju last year.","Năm ngoái tôi đã đi Jeju","went","go|goed|gone","Quá khứ của \"go\" là \"went\"."],
["fi","What did you __?","Bạn đã ăn gì?","eat","ate|eaten|eating","Sau \"did\" là động từ nguyên mẫu."],
["fi","She __ a new phone.","Cô ấy đã mua một chiếc điện thoại mới","bought","buyed|buy|buys","Quá khứ của \"buy\" là \"bought\"."],
["ty","Tôi đã đi Busan","I went to Busan","went · to · Busan — quá khứ của go","go","Quá khứ của \"go\" là \"went\"."],
["ty","Tôi đã mua một quyển sách","I bought a book","bought · book — mạo từ a","the","Một quyển nên dùng mạo từ \"a\"."],
["ty","Tôi đã gặp bạn bè của tôi","I met my friends|I saw my friends","met · my · friend — số nhiều","friend","Nhiều người bạn nên dùng số nhiều \"friends\"."]]},
{ id:"the", title:"Ôn lại the: lần đầu dùng a, lần sau dùng the", blurb:"Nhắc đến lần đầu dùng a; khi cả hai đã biết là cái nào thì dùng the.", deck:"Hỏi đường · giao thông", body:`
<p>Mạo từ không thể học một lần là xong, nhất là khi tiếng Việt không có mạo từ. “Một” là số đếm, còn “cái, con, chiếc” là loại từ: chúng không làm thay việc của <b>a</b> và <b>the</b>. Bài này luyện lại khi nào dùng <b>the</b> và khi nào <b>không dùng mạo từ</b>.</p>
<h3>Lần đầu dùng a, nhắc lại dùng the</h3>
<p>Người nghe chưa biết thì dùng <b>a</b>; vừa được nhắc đến nên giờ đã biết là cái nào thì dùng <b>the</b>. Câu cần hỏi không phải là “đây có phải một cái cụ thể không?”, mà là “người nghe có biết đó là cái nào không?”.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ bɑːt‿ə ʃɝːt/ /ðə ʃɝːt‿ɪz bluː/|Tôi mua một chiếc áo sơ mi. Chiếc áo đó màu xanh dương.}}
<h3>Chỉ có một trong tình huống: the</h3>
<p>Cửa sổ của căn phòng này, nhà ga gần đây: khi ai cũng biết là cái nào thì dùng <b>the</b> ngay từ đầu.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Bạn mở cửa sổ giúp tôi được không?}}{{ex:Where's the subway station?|/werz ðə ˈsʌbweɪ ˈsteɪʃən/|Ga tàu điện ngầm ở đâu?}}{{ex:The sun is hot today.|/ðə sʌn‿ɪz hɑːt təˈdeɪ/|Hôm nay nắng gắt quá}}
<h3>Những cụm không dùng mạo từ</h3>
<p>Các cụm quen thuộc về nơi chốn, phương tiện và bữa ăn: hãy học thuộc cả cụm.</p>
{{ex:I go to work by bus.|/aɪ goʊ tə wɝːk baɪ bʌs/|Tôi đi làm bằng xe buýt}}{{ex:I'm at home.|/aɪm‿ət hoʊm/|Tôi đang ở nhà}}{{ex:I go to bed at eleven.|/aɪ goʊ tə bed‿ət‿ɪˈlevən/|Tôi đi ngủ lúc mười một giờ}}
<div class="tip">Hãy tự hỏi: “Người nghe có biết là cái nào không?” Biết thì dùng <b>the</b>, chưa biết thì dùng <b>a</b>. / <b>I go to the work by the bus.</b> ✗ → <b>I go to work by bus.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. Chọn từ điền vào chỗ trống.",["A","An","The","(không dùng)"],2,"Con mèo vừa được nhắc đến nên dùng \"the\"."],["I go to ___ work by bus. Chọn từ điền vào chỗ trống.",["a","the","an","(không dùng)"],3,"\"Go to work\" không dùng mạo từ."],["Muốn nhờ mở cửa sổ của căn phòng này thì nói thế nào?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Cả hai đều biết là cửa sổ nào nên dùng \"the\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Chọn từ đúng.","The","A","An","Some","Chiếc áo vừa được nhắc đến nên dùng \"the\"."],
["mc","“Nhà ga ở đâu?” =","Where's the station?","Where's a station?","Where's station?","Where the station?","Nhà ga gần đây, ai cũng biết là cái nào, nên dùng \"the\"."],
["mc","Câu nào đúng?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" và \"by bus\" không dùng mạo từ."],
["mc","“Mặt trời nóng” =","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Thứ chỉ có một thì dùng \"the\"."],
["mc","“Tôi đang ở nhà” =","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","\"At home\" không dùng mạo từ."],
["or","Bạn mở cửa sổ giúp tôi được không?","Can you open the window","a windows","Cả hai đều biết là cửa sổ nào nên dùng mạo từ \"the\"."],
["or","Tôi đi làm bằng xe buýt","I go to work by bus","the a","\"Go to work\" và \"by bus\" không dùng mạo từ."],
["or","Con chó đó to lắm","The dog is big","A dogs","Con chó đã được nhắc đến nên dùng mạo từ \"the\"."],
["fi","I saw a movie. __ movie was great.","Tôi đã xem một bộ phim. Bộ phim đó rất hay.","The","A|An|Some","Bộ phim vừa được nhắc đến nên dùng \"the\"."],
["fi","Where's __ bathroom?","Nhà vệ sinh ở đâu?","the","a|an|some","Nhà vệ sinh của tòa nhà này nên dùng \"the\"."],
["fi","I have __ idea.","Tôi có một ý này","an","a|the|some","Nhắc đến lần đầu và bắt đầu bằng nguyên âm nên dùng \"an\"."],
["ty","Bạn đóng cửa giúp tôi được không?","Can you close the door|Could you close the door","can you · close · door — mạo từ the","a","Cả hai đều biết là cửa nào nên dùng mạo từ \"the\"."],
["ty","Nhà ga ở đâu?","Where is the station|Where's the station","where · station — mạo từ the","a","Nhà ga gần đây nên dùng mạo từ \"the\"."],
["ty","Tôi đang ở nhà","I'm at home|I'm home","I'm · at · home — không dùng mạo từ","the","Trước \"home\" không dùng mạo từ."]]},
{ id:"adjectives", title:"Tính từ và so sánh: bigger, more expensive, the best", blurb:"Tính từ đứng trước danh từ. So sánh hơn: -er / more; so sánh nhất: the -est / the most.", deck:"Mua sắm · thanh toán", body:`
<p>Tiếng Việt đặt tính từ <b>sau</b> danh từ: “cái túi to”, “xe đỏ”. Tiếng Anh thì ngược lại, tính từ đứng <b>trước</b> danh từ: <b>a big bag</b>, <b>a red car</b>. Tính từ cũng có thể đứng sau động từ to be, và khi đó không được bỏ to be: <b>This bag is big</b>, không phải <b>This bag big</b>. Tính từ không bao giờ thêm -s.</p>
{{ex:a big bag|/ə bɪg bæg/|một cái túi to}}{{ex:This bag is big.|/ðɪs bæg‿ɪz bɪg/|Cái túi này to}}{{ex:It's too small.|/ɪts tuː smɑːl/|Nhỏ quá}}
<p>Muốn nói một việc được làm <b>như thế nào</b> thì dùng trạng từ, thường có đuôi <b>-ly</b>: <b>She sings beautifully</b>, không phải <b>She sings beautiful</b>.</p>
{{ex:She sings beautifully.|/ʃi sɪŋz ˈbjuːtəfli/|Cô ấy hát hay}}
<h3>So sánh hơn: -er hoặc more</h3>
<p>Từ ngắn thêm <b>-er</b>, từ dài thêm <b>more</b> phía trước. “Hơn…” là <b>than</b>.</p>
<div class="tbl"><table><tr><th>Tính từ</th><th>So sánh hơn</th><th>So sánh nhất</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ðɪs wʌn‿ɪz ˈtʃiːpɚ/|Cái này rẻ hơn}}{{ex:It's more expensive than that one.|/ɪts mɔːr ɪkˈspensɪv ðæn ðæt wʌn/|Nó đắt hơn cái kia}}{{ex:Do you have a bigger size?|/duː ju hæv‿ə ˈbɪgɚ saɪz/|Có cỡ to hơn không?}}
<h3>So sánh nhất: luôn có the</h3>
{{ex:This is the best restaurant here.|/ðɪs‿ɪz ðə best ˈrestərɑːnt hɪr/|Đây là nhà hàng ngon nhất ở đây}}{{ex:Which is the cheapest?|/wɪtʃ‿ɪz ðə ˈtʃiːpɪst/|Cái nào rẻ nhất?}}
<div class="tip">Lỗi hay gặp nhất: <b>a bag big</b> ✗ → <b>a big bag</b> ✓ / <b>more cheaper</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓. Không dùng -er và more cùng lúc.</div>`,
check:[["So sánh hơn của \"big\" là gì?",["more big","biger","bigger","most big"],2,"Từ ngắn thêm -er và gấp đôi phụ âm cuối: \"bigger\"."],["This is ___ expensive than that. Chọn từ điền vào chỗ trống.",["more","most","much","very"],0,"Từ dài dùng \"more\" để so sánh hơn."],["So sánh nhất của \"good\" là gì?",["the goodest","the most good","the better","the best"],3,"\"Good\" – \"better\" – \"the best\"."]],
practice:[
["mc","So sánh hơn của \"cheap\" là gì?","cheaper","more cheap","cheapper","most cheap","Từ ngắn thêm -er."],
["mc","“Cái này đắt hơn” =","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Từ dài dùng \"more\"."],
["mc","“Có cỡ to hơn không?” =","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Mạo từ + tính từ + danh từ: tính từ đứng trước danh từ."],
["mc","So sánh hơn của \"good\" là gì?","better","gooder","more good","best","\"Good\" – \"better\" – \"best\"."],
["mc","“Đây là nhà hàng ngon nhất” =","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Trước so sánh nhất dùng \"the\"."],
["or","Có cỡ to hơn không?","Do you have a bigger size","the sizes","Hỏi một cỡ bất kỳ nên dùng mạo từ \"a\"."],
["or","Cái này rẻ nhất","This is the cheapest","a cheaper","Trước so sánh nhất dùng mạo từ \"the\"."],
["or","Cái này rẻ hơn cái kia","This is cheaper than that","more","Tính từ đã có -er thì không thêm \"more\"."],
["fi","It's __ small.","Nhỏ quá","too","much|more|most","“Quá” là \"too\"."],
["fi","This is cheaper __ that one.","Cái này rẻ hơn cái kia","than","then|that|more","“Hơn” là \"than\"."],
["fi","It's the __ expensive one.","Đó là cái đắt nhất","most","more|much|very","So sánh nhất của từ dài là \"the most\"."],
["ty","Có cỡ nhỏ hơn không?","Do you have a smaller size","smaller · size — mạo từ a","the","Hỏi một cỡ bất kỳ nên dùng mạo từ \"a\"."],
["ty","Cái này tốt nhất","This is the best|This one is the best","the · best — mạo từ the","a","Trước so sánh nhất dùng mạo từ \"the\"."],
["ty","Cái này rẻ hơn","This is cheaper|This one is cheaper","cheap — so sánh hơn","more","Từ ngắn thêm -er."]]},
{ id:"noun-phrase", title:"Cụm danh từ: tính từ, danh từ ghép và 's", blurb:"Tiếng Việt đặt danh từ chính lên đầu cụm; tiếng Anh đặt nó ở cuối.", deck:"Mua sắm · thanh toán", body:`
<p>Trong cụm danh từ tiếng Việt, danh từ chính đứng <b>đầu</b> và các từ bổ nghĩa đi sau: “xe đỏ”, “quán cà phê”, “điện thoại của Lan”. Tiếng Anh đi theo chiều ngược lại: từ bổ nghĩa đứng trước, <b>danh từ chính đứng cuối</b>. Gần như người Việt nào mới học cũng mắc lỗi này.</p>
<h3>Tính từ đứng trước danh từ</h3>
{{ex:a red car|/ə red kɑːr/|một chiếc xe đỏ}}{{ex:a new phone|/ə nuː foʊn/|một chiếc điện thoại mới}}
<h3>Danh từ + danh từ: danh từ đứng trước giữ số ít</h3>
<p>“Quán cà phê” là <b>coffee shop</b>: <b>coffee</b> đứng trước và làm nhiệm vụ như một tính từ. Danh từ đứng trước luôn ở số ít: <b>a shoe shop</b>, không phải <b>a shoes shop</b>. Chỉ danh từ chính mới thêm -s số nhiều: <b>two shoe shops</b>.</p>
{{ex:a coffee shop|/ə ˈkɑːfi ʃɑːp/|một quán cà phê}}{{ex:a shoe shop|/ə ʃuː ʃɑːp/|một cửa hàng giày}}{{ex:two bus stops|/tuː bʌs stɑːps/|hai trạm xe buýt}}
<h3>Sở hữu cách ('s) thay cho “của”</h3>
<p>“Điện thoại của Lan” là <b>Lan's phone</b>: tên người + <b>'s</b> + vật. Với đại từ thì dùng tính từ sở hữu: “của tôi” là <b>my</b>, “của bạn” là <b>your</b>. Đừng dịch từng chữ thành <b>phone of me</b>. Đã có <b>'s</b> hoặc <b>my</b> thì không thêm mạo từ.</p>
{{ex:Lan's phone is new.|/lɑːnz foʊn‿ɪz nuː/|Điện thoại của Lan còn mới}}{{ex:Your car is outside.|/jʊr kɑːr ɪz‿aʊtˈsaɪd/|Xe của bạn ở bên ngoài}}
<h3>Mạo từ đứng trước cả cụm</h3>
<p>Thứ tự là: mạo từ → tính từ → danh từ. Chọn <b>a</b> hay <b>an</b> theo âm đầu của từ đứng ngay sau nó: <b>an old car</b> (vì <b>old</b> bắt đầu bằng nguyên âm), nhưng <b>a car</b>.</p>
{{ex:an old red car|/ən‿oʊld red kɑːr/|một chiếc xe đỏ cũ}}{{ex:There's a new coffee shop near here.|/ðerz‿ə nuː ˈkɑːfi ʃɑːp nɪr hɪr/|Gần đây có một quán cà phê mới}}
<div class="tip">Lỗi hay gặp nhất: <b>a car red</b> ✗ → <b>a red car</b> ✓ / <b>shop coffee</b> ✗ → <b>coffee shop</b> ✓ / <b>phone of Lan</b> ✗ → <b>Lan's phone</b> ✓ / <b>a old car</b> ✗ → <b>an old car</b> ✓</div>`,
check:[["Nói “một chiếc xe đỏ” bằng tiếng Anh thế nào?",["a car red","a red car","red a car","a reds car"],1,"Tính từ đứng trước danh từ và không thêm -s."],["Nói “điện thoại của Lan” bằng tiếng Anh thế nào?",["phone of Lan","the phone Lan","Lan phone's","Lan's phone"],3,"Sở hữu cách: tên người + 's + vật."],["Cụm nào đúng cho “một cửa hàng giày”?",["a shoe shop","a shoes shop","a shop shoe","shoe a shop"],0,"Danh từ đứng trước giữ số ít: \"shoe\"."]],
practice:[
["mc","“quán cà phê” =","a coffee shop","a shop coffee","a coffees shop","coffee a shop","Danh từ chính \"shop\" đứng cuối; \"coffee\" đứng trước như một tính từ."],
["mc","“Xe của tôi ở bên ngoài” =","My car is outside.","Car of me is outside.","The my car is outside.","Car my is outside.","“Của tôi” là \"my\", đứng trước danh từ."],
["mc","“một chiếc xe cũ” =","an old car","a old car","an car old","a car old","Mạo từ đứng trước cả cụm; \"old\" bắt đầu bằng nguyên âm nên dùng \"an\"."],
["mc","“báo cáo của Minh” =","Minh's report","the report of Minh","Minh report's","report Minh's","Tên người + 's + vật."],
["mc","“hai cửa hàng giày” =","two shoe shops","two shoes shops","two shoes shop","two shop shoes","Danh từ đứng trước giữ số ít; chỉ danh từ chính thêm -s."],
["or","một chiếc xe cũ","an old car","a","Mạo từ đứng trước cả cụm; \"old\" bắt đầu bằng nguyên âm nên dùng \"an\"."],
["or","hai cửa hàng giày","two shoe shops","shoes","Danh từ đứng trước giữ số ít; chỉ danh từ chính \"shops\" ở dạng số nhiều."],
["or","một quán cà phê mới","a new coffee shop","the","Quán được nhắc đến lần đầu nên dùng mạo từ \"a\", đứng trước cả cụm \"new coffee shop\"."],
["fi","This is __ phone.","Đây là điện thoại của Lan","Lan's","Lan|of Lan|the Lan","Sở hữu cách: tên người + 's đứng trước vật."],
["fi","I need a __ bag.","Tôi cần một cái túi to","big","bigs|a big|the big","Tính từ đứng trước danh từ và không thêm -s."],
["fi","Is this __ car?","Đây có phải xe của bạn không?","your","you|of you|the your","“Của bạn” là \"your\", đứng trước danh từ."],
["ty","một chiếc xe đỏ","a red car","red · car — mạo từ a","an","Mạo từ \"a\" đứng trước cả cụm; tính từ \"red\" đứng trước danh từ."],
["ty","hai trạm xe buýt","two bus stops","two · bus · stop — số nhiều","buses","Danh từ đứng trước giữ số ít \"bus\"; chỉ \"stops\" ở dạng số nhiều."],
["ty","điện thoại mới của tôi","my new phone","my · new · phone — không dùng mạo từ","the","Đã có \"my\" thì không dùng mạo từ; tính từ \"new\" đứng giữa \"my\" và danh từ."]]},
{ id:"going-to", title:"Nói về kế hoạch: be going to", blurb:"Việc đã quyết định từ trước: be going to + động từ nguyên mẫu.", deck:"Trò chuyện xã giao", body:`
<p>Tiếng Việt dùng “sẽ” cho mọi việc trong tương lai. Tiếng Anh có hai cách; bài này học tương lai gần (be going to), dùng cho <b>kế hoạch đã định sẵn</b>. Mẫu câu là <b>be + going to + động từ nguyên mẫu</b>. Cũng như với “đang”, động từ to be ở đây không được bỏ.</p>
{{ex:I'm going to visit Hue.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt hweɪ/|Tôi sẽ đi thăm Huế}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə baɪ ə kɑːr/|Cô ấy sẽ mua ô tô}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə hæv ˈdɪnɚ/|Chúng tôi sẽ ăn tối}}
<h3>Câu phủ định và câu hỏi</h3>
{{ex:I'm not going to go.|/aɪm nɑːt ˈgoʊɪŋ tə goʊ/|Tôi sẽ không đi}}{{ex:Are you going to come?|/ɑːr ju ˈgoʊɪŋ tə kʌm/|Bạn có đến không?}}{{ex:What are you going to do this weekend?|/wʌt‿ɑːr ju ˈgoʊɪŋ tə duː ðɪs ˈwiːkend/|Cuối tuần này bạn định làm gì?}}
<h3>Đoán điều sắp xảy ra từ những gì đang thấy</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə reɪn/|Trời sắp mưa rồi}}
<h3>Từ chỉ thời gian đi kèm</h3>
<p><b>tomorrow</b> (ngày mai), <b>tonight</b> (tối nay), <b>this weekend</b> (cuối tuần này), <b>next week</b> (tuần sau) thường đứng cuối câu.</p>
<div class="tip">Khi nói nhanh, <b>going to</b> nghe giống <b>gonna</b>. Và đừng bỏ động từ to be: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Nói “Ngày mai tôi sẽ gặp bạn tôi” bằng tiếng Anh thế nào?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + động từ nguyên mẫu."],["She ___ going to study. Chọn từ điền vào chỗ trống.",["am","are","is","be"],2,"Với \"she\" dùng \"is\"."],["Nói “Cuối tuần này bạn định làm gì?” bằng tiếng Anh thế nào?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Từ để hỏi + be + chủ ngữ + going to."]],
practice:[
["mc","“Tôi sẽ đi Busan” =","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + động từ nguyên mẫu."],
["mc","They ___ going to come. Chọn từ đúng.","are","is","am","be","Với \"they\" dùng \"are\"."],
["mc","“Trời sắp mưa” =","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Sau \"going to\" là động từ nguyên mẫu."],
["mc","“Tôi sẽ không đi” =","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Đặt \"not\" sau động từ to be."],
["mc","“Bạn có đến không?” (kế hoạch) =","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Đưa động từ to be lên đầu câu."],
["or","Cô ấy sẽ mua một chiếc ô tô","She's going to buy a car","the cars","Một chiếc xe nên dùng mạo từ \"a\" và danh từ số ít \"car\"."],
["or","Tôi sẽ gặp bạn bè của tôi","I'm going to meet my friends","friend","Nhiều người bạn nên dùng số nhiều \"friends\"."],
["or","Chúng tôi sẽ ăn tối","We're going to have dinner","a","Trước tên bữa ăn \"dinner\" không dùng mạo từ."],
["fi","I'm going __ study tonight.","Tối nay tôi sẽ học bài","to","for|at|will","going to + động từ nguyên mẫu."],
["fi","__ you going to come?","Bạn có đến không?","Are","Do|Is|Will","Với \"you\" dùng \"Are\"."],
["fi","It's going to __ tomorrow.","Ngày mai trời sẽ mưa","rain","rains|raining|rained","Sau \"going to\" là động từ nguyên mẫu."],
["ty","Tôi sẽ xem một bộ phim","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — mạo từ a","the","Một bộ phim bất kỳ nên dùng mạo từ \"a\"."],
["ty","Bạn định làm gì?","What are you going to do","what · going to · do — kế hoạch","will","Hỏi về kế hoạch dùng \"be going to\"."],
["ty","Tôi sẽ gặp bạn bè của tôi","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — số nhiều","friend","Nhiều người bạn nên dùng số nhiều \"friends\"."]]},
{ id:"joining", title:"Nối câu: and, but, or, so, because", blurb:"Nối hai câu ngắn thành một. “Vì… nên…” trong tiếng Anh chỉ cần một từ: because hoặc so.", deck:"Cảm xúc · phản ứng", body:`
<p>Chỉ nói câu ngắn thì nghe rời rạc. Năm liên từ này giúp bạn nối câu tự nhiên hơn.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ laɪk ˈkɑːfi ən tiː/|Tôi thích cà phê và trà}}{{ex:I'm tired but happy.|/aɪm ˈtaɪɚd bʌt ˈhæpi/|Tôi mệt nhưng vui}}{{ex:Coffee or tea?|/ˈkɑːfi ɔːr tiː/|Cà phê hay trà?}}
<h3>so: nên</h3>
<p><b>Nguyên nhân + so + kết quả</b>, giống thứ tự “… nên …” trong tiếng Việt.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪɚd soʊ aɪ went hoʊm/|Tôi mệt nên đã về nhà}}
<h3>because: vì</h3>
<p><b>Kết quả + because + nguyên nhân</b>. Tiếng Việt cũng nói được “Tôi về nhà vì mệt”, nên thứ tự này không khó.</p>
{{ex:I went home because I was tired.|/aɪ went hoʊm bɪˈkɑːz‿aɪ wəz ˈtaɪɚd/|Tôi về nhà vì mệt}}{{ex:I stayed home because it was raining.|/aɪ steɪd hoʊm bɪˈkɑːz‿ɪt wəz ˈreɪnɪŋ/|Tôi ở nhà vì trời mưa}}
<h3>too: cũng</h3>
{{ex:I like it too.|/aɪ laɪk‿ɪt tuː/|Tôi cũng thích}}
<div class="tip">Tiếng Việt hay nói “Vì… nên…”, nhưng tiếng Anh chỉ dùng một trong hai từ: <b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓ / <b>I went home because I was tired.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. Chọn từ điền vào chỗ trống.",["because","but","so","or"],2,"Nguyên nhân trước, kết quả sau thì dùng \"so\"."],["I stayed home ___ I was sick. Chọn từ điền vào chỗ trống.",["because","so","but","and"],0,"Kết quả trước, nguyên nhân sau thì dùng \"because\"."],["Hỏi “Bạn uống cà phê hay trà?” thế nào?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Chọn một trong hai thì dùng \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. Chọn từ đúng.","but","so","or","because","Hai ý trái ngược nối bằng \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. Chọn từ đúng.","so","because","but","or","Nguyên nhân trước, kết quả sau thì dùng \"so\"."],
["mc","I ate a sandwich ___ I was hungry. Chọn từ đúng.","because","so","but","or","Kết quả trước, nguyên nhân sau thì dùng \"because\"."],
["mc","“Cà phê hay trà?” =","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Chọn một trong hai thì dùng \"or\"."],
["mc","“Tôi mệt nhưng vui” =","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","“Nhưng” là \"but\"."],
["or","Tôi thích mèo và chó","I like cats and dogs","cat dog","Nói về loài vật nói chung thì dùng số nhiều \"cats\", \"dogs\"."],
["or","Cho tôi một cốc cà phê và một cái bánh sandwich","A coffee and a sandwich please","the or","Gọi mỗi thứ một phần nên dùng mạo từ \"a\" cho từng món."],
["or","Tôi đói nên đã ăn","I was hungry so I ate","because","Nguyên nhân trước, kết quả sau thì dùng \"so\"."],
["fi","I'm tired __ happy.","Tôi mệt nhưng vui","but","so|because|or","“Nhưng” là \"but\"."],
["fi","I stayed home __ it was raining.","Tôi ở nhà vì trời mưa","because","so|but|or","Kết quả trước, nguyên nhân sau thì dùng \"because\"."],
["fi","Coffee __ tea?","Cà phê hay trà?","or","so|but|because","Chọn một trong hai thì dùng \"or\"."],
["ty","Tôi thích cà phê và trà","I like coffee and tea","like · coffee · and · tea — không dùng mạo từ","a","\"Coffee\" và \"tea\" nói chung là danh từ không đếm được, không dùng mạo từ."],
["ty","Tôi mệt nhưng vui","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — “nhưng”","so","“Nhưng” là \"but\"."],
["ty","Tôi thích chó và mèo","I like dogs and cats|I like cats and dogs","dog · and · cat — số nhiều","dog","Loài vật nói chung dùng số nhiều \"dogs\", \"cats\"."]]},
];
