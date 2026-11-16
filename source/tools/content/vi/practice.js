/* Practice sets for the vi-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Vietnamese; answers are English (shared with ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names it (mạo từ | số nhiều | đếm được). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Từ nào nghĩa là “gạo, cơm”?", o: ["rice", "lice", "rise", "nice"], why: "\"Rice\" bắt đầu bằng R: đầu lưỡi không chạm vào đâu. Đọc bằng L (đầu lưỡi chạm lợi) thì thành \"lice\" (con chấy)." },
    { t: "mc", q: "Từ nào nghĩa là “cái quạt”?", o: ["fan", "pan", "van", "ban"], why: "F đọc như “ph” tiếng Việt: răng trên chạm môi dưới. Mím hai môi rồi bật ra (P) thì thành \"pan\" (cái chảo)." },
    { t: "mc", q: "Từ nào nghĩa là “nghĩ”?", o: ["think", "sink", "thing", "pink"], why: "TH: đưa đầu lưỡi ra giữa hai hàm răng. Đọc bằng /s/ thì thành \"sink\" (bồn rửa), đọc như “th” tiếng Việt thì thành \"tink\"." },
    { t: "mc", q: "Từ nào nghĩa là “bỏ phiếu”?", o: ["vote", "boat", "goat", "bought"], why: "V: răng trên chạm môi dưới, dây thanh rung. Đọc bằng hai môi (B) thì thành \"boat\" (con thuyền)." },
    { t: "mc", q: "Từ nào nghĩa là “bên phải”?", o: ["right", "light", "fight", "bright"], why: "\"Right\" bắt đầu bằng R là bên phải. \"Light\" bắt đầu bằng L là ánh sáng." },

    { t: "order", p: "Đây là một quả chuối", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "\"Banana\" bắt đầu bằng phụ âm nên dùng mạo từ \"a\". \"This\" viết bằng TH." },
    { t: "order", p: "ba cái cây", a: ["three", "trees"], x: ["tree", "free"], why: "Có \"three\" nên dùng số nhiều \"trees\". \"Three\" bắt đầu bằng TH, \"tree\" bằng TR." },
    { t: "order", p: "Tôi thích cà phê", a: ["I", "like", "coffee"], x: ["copy"], why: "\"Coffee\" có âm F (răng trên chạm môi dưới). Viết bằng P thì thành \"copy\" (bản sao)." },

    { t: "fill", q: "I eat __ice every day.", p: "Ngày nào tôi cũng ăn cơm", a: ["r"], o: ["l", "n", "w"], why: "Cơm là \"rice\", bắt đầu bằng R. Viết bằng L thì thành \"lice\" (con chấy)." },
    { t: "fill", q: "I __ink so.", p: "Tôi nghĩ vậy", a: ["th"], o: ["s", "t", "p"], why: "\"Think\" bắt đầu bằng TH. Viết bằng s thì thành \"sink\" (bồn rửa), bằng t thì thành \"tink\"." },
    { t: "fill", q: "This is my __.", p: "Đây là cái túi của tôi", a: ["bag"], o: ["back", "bug", "beg"], why: "Cái túi là \"bag\", kết thúc bằng /g/. Kết thúc bằng /k/ thì thành \"back\" (lưng). Âm cuối phải nghe rõ." },

    { t: "type", p: "ba cái cây", a: ["three trees"], hint: "three · tree — có ba thì dùng số nhiều", x: ["tree"], why: "\"Three\" bắt đầu bằng TH, \"tree\" bằng TR, và có ba nên dùng số nhiều \"trees\"." },
    { t: "type", p: "hai con thuyền", a: ["two boats"], hint: "two · boat — có hai thì dùng số nhiều", x: ["boat", "votes"], why: "Thuyền là \"boat\", bắt đầu bằng B; có \"two\" nên dùng số nhiều \"boats\". Viết bằng V thì thành \"vote\" (bỏ phiếu)." },
    { t: "type", p: "rất nhẹ", a: ["very light"], hint: "very · light — bắt đầu bằng V và L", x: ["berry"], why: "\"Very\" bắt đầu bằng V (răng trên chạm môi dưới), \"light\" bắt đầu bằng L (đầu lưỡi chạm lợi)." }
  ],

  articles: [
    { t: "mc", q: "“Tôi là sinh viên” =", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Trước nghề nghiệp hay thân phận luôn cần mạo từ \"a\"." },
    { t: "mc", q: "“Tôi có một ý tưởng” =", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "\"Idea\" bắt đầu bằng nguyên âm nên dùng mạo từ \"an\"." },
    { t: "mc", q: "“Một tiếng đồng hồ” nói thế nào?", o: ["an hour", "a hour", "one hours", "hour"], why: "Chữ h trong \"hour\" là âm câm. Từ bắt đầu bằng nguyên âm nên dùng mạo từ \"an\"." },
    { t: "mc", q: "“Tôi rất thích chó” (loài chó nói chung) =", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "Nói chung về một loài thì dùng số nhiều, không có mạo từ." },
    { t: "mc", q: "“Tôi nuôi một con chó. Con chó đó dễ thương lắm” =", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Nhắc lần đầu dùng mạo từ \"a\"; nhắc lại thứ đã nói thì dùng \"the\"." },

    { t: "order", p: "Tôi là giáo viên", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Trước nghề nghiệp cần mạo từ \"a\". \"Teacher\" bắt đầu bằng phụ âm nên không dùng \"an\"." },
    { t: "order", p: "Bạn đóng giúp cái cửa được không? (cửa của phòng này)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Cánh cửa mà cả hai đều biết nên dùng mạo từ \"the\"." },
    { t: "order", p: "Tôi không uống cà phê", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Nói về cà phê nói chung thì không dùng mạo từ." },

    { t: "fill", q: "I'm __ university student.", p: "Tôi là sinh viên đại học", a: ["a"], o: ["an", "the", "two"], why: "\"University\" bắt đầu bằng âm /j/ nên dùng mạo từ \"a\". Chọn theo âm, không theo chữ cái." },
    { t: "fill", q: "I have __ older sister.", p: "Tôi có một chị gái", a: ["an"], o: ["a", "the", "two"], why: "\"Older\" bắt đầu bằng nguyên âm nên dùng mạo từ \"an\"." },
    { t: "fill", q: "I don't like __.", p: "Tôi không thích mèo (loài mèo nói chung)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "Nói chung về một loài thì dùng số nhiều \"cats\", không có mạo từ." },

    { t: "type", p: "Tôi có một ý tưởng", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — mạo từ trước nguyên âm", x: ["a"], why: "\"Idea\" bắt đầu bằng nguyên âm nên dùng mạo từ \"an\"." },
    { t: "type", p: "Tôi thích chó (loài chó nói chung)", a: ["I like dogs", "I love dogs"], hint: "like · dog — nói chung thì dùng số nhiều", x: ["dog", "a"], why: "Nói chung về một loài thì dùng số nhiều \"dogs\", không có mạo từ." },
    { t: "type", p: "Cùng ăn trưa nhé", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — tên bữa ăn có cần mạo từ không?", x: ["a", "the"], why: "Trước tên bữa ăn không dùng mạo từ." }
  ],

  be: [
    { t: "mc", q: "“Tôi mệt” =", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "\"Tired\" là tính từ nên cần động từ to be đi trước: \"I'm tired\"." },
    { t: "mc", q: "“Anh ấy có nói tiếng Anh không?” =", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "\"He\" là ngôi thứ ba số ít nên dùng \"does\", và sau \"does\" động từ ở dạng nguyên mẫu, không có -s." },
    { t: "mc", q: "“Cô ấy đang ở chỗ làm” =", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Nói về vị trí thì dùng động từ to be; \"she\" đi với \"is\"." },
    { t: "mc", q: "Trả lời “Có” cho câu \"Do you like coffee?\" thế nào?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Hỏi bằng \"do\" thì trả lời bằng \"do\"." },
    { t: "mc", q: "“Cô ấy không ăn thịt” =", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Phủ định với \"she\": \"doesn't\" + động từ nguyên mẫu không có -s." },

    { t: "order", p: "Anh trai tôi làm việc ở Seoul", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "Chủ ngữ là một người (ngôi thứ ba số ít) nên \"works\" có -s, và không dùng động từ to be." },
    { t: "order", p: "Tôi không phải là sinh viên", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "Phủ định của to be là \"not\", và trước thân phận cần mạo từ \"a\"." },
    { t: "order", p: "Cô ấy nuôi hai con chó", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "Sau \"she\" (ngôi thứ ba số ít) dùng \"has\"; có \"two\" nên dùng số nhiều \"dogs\"." },

    { t: "fill", q: "My brother __ in Seoul.", p: "Anh trai tôi sống ở Seoul", a: ["lives"], o: ["live", "is live", "living"], why: "\"My brother\" là ngôi thứ ba số ít nên động từ thêm -s: \"lives\"." },
    { t: "fill", q: "__ you tired?", p: "Bạn mệt không?", a: ["Are"], o: ["Do", "Is", "Does"], why: "\"Tired\" là tính từ nên hỏi bằng động từ to be; \"you\" đi với \"are\"." },
    { t: "fill", q: "We __ hungry.", p: "Chúng tôi đói", a: ["are"], o: ["is", "am", "do"], why: "\"Hungry\" là tính từ nên cần động từ to be; \"we\" đi với \"are\"." },

    { t: "type", p: "Anh ấy là giáo viên", a: ["He's a teacher", "He is a teacher"], hint: "teacher — to be + mạo từ trước nghề nghiệp", x: ["the"], why: "Nói danh tính thì dùng động từ to be, và trước nghề nghiệp cần mạo từ \"a\"." },
    { t: "type", p: "Tôi không thích cà phê", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — phủ định của động từ thường", x: ["am"], why: "\"Like\" là động từ thường nên phủ định bằng \"don't\" (I'm not like ✗)." },
    { t: "type", p: "Cô ấy có nuôi một con mèo không?", a: ["Does she have a cat"], hint: "does · have · cat — mạo từ cho “một con”", x: ["has"], why: "Đã có \"does\" thì động từ ở dạng nguyên mẫu \"have\"; một con mèo thì cần mạo từ \"a\"." }
  ],

  polite: [
    { t: "mc", q: "Gọi một cốc latte ở quán cà phê, nói thế nào tự nhiên nhất?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Ở cửa hàng, \"Can I get…?\" nghe tự nhiên. Một cốc thì thêm mạo từ \"a\"." },
    { t: "mc", q: "Nhờ người lạ giúp đỡ, câu nào lịch sự nhất?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" là cách nhờ lịch sự dùng với người lạ." },
    { t: "mc", q: "Không nghe rõ, muốn lịch sự nhờ người kia nói lại thì nói gì?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" là cách hỏi lại lịch sự." },
    { t: "mc", q: "Rất lịch sự: “Phiền bạn chụp giúp chúng tôi một tấm ảnh được không?”", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Sau \"mind\" là dạng V-ing: \"taking\"." },
    { t: "mc", q: "Trên máy bay: “Cho tôi ghế cạnh cửa sổ”", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" là cách đề nghị lịch sự. Một chỗ ngồi thì thêm mạo từ \"a\"." },

    { t: "order", p: "Cho tôi một cốc latte được không?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Gọi một cốc lần đầu nên dùng mạo từ \"a\"." },
    { t: "order", p: "Phiền bạn mở giúp cửa sổ được không? (cửa sổ của phòng này)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "Sau \"mind\" là dạng V-ing; cửa sổ mà cả hai đều biết nên dùng mạo từ \"the\"." },
    { t: "order", p: "Bạn nói chậm hơn một chút được không?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Nhờ lịch sự bằng \"Could you…?\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "Phiền bạn đóng giúp cửa được không?", a: ["closing"], o: ["close", "to close", "closed"], why: "Sau \"mind\" là dạng V-ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Cho tôi một cốc cà phê đá được không?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" bắt đầu bằng nguyên âm /aɪ/ nên dùng mạo từ \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Trả lời \"Would you mind…?\") Được chứ, không phiền gì đâu", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" nghĩa là “không phiền chút nào”, tức là “được, tôi giúp”." },

    { t: "type", p: "Bạn giúp tôi một chút được không? (lịch sự)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — nhờ lịch sự", x: ["can"], why: "Với người lạ, hãy nhờ bằng \"Could you…?\"." },
    { t: "type", p: "Cho tôi ghế cạnh cửa sổ", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — mạo từ trước một chỗ ngồi", x: ["the"], why: "Nhắc đến một chỗ ngồi lần đầu nên thêm mạo từ \"a\": \"a window seat\"." },
    { t: "type", p: "Cho tôi hai cốc cà phê", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — có hai thì dùng số nhiều", x: ["coffee"], why: "Khi gọi món, cà phê được đếm theo cốc, nên có \"two\" thì dùng số nhiều \"coffees\"." }
  ],

  tense: [
    { t: "mc", q: "“Tôi đang uống cà phê” =", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Việc đang làm ngay lúc này dùng be + V-ing. “Đang” không thay được \"am\"." },
    { t: "mc", q: "“Cuối tuần trước tôi đi biển” =", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Có \"last weekend\" vẫn phải dùng quá khứ: \"go\" thành \"went\". Biển thì dùng mạo từ \"the\": \"the beach\"." },
    { t: "mc", q: "Nói về kế hoạch tháng sau: “Tôi sẽ đi đảo Jeju”", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "Kế hoạch đã định trước dùng be going to + động từ nguyên mẫu." },
    { t: "mc", q: "Chuông cửa reo, bạn nói ngay: “Để tôi ra mở!”", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Quyết định ngay lúc nói thì dùng \"will\"." },
    { t: "mc", q: "Dạng quá khứ của \"see\" là gì?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" là động từ bất quy tắc: see – saw – seen." },

    { t: "order", p: "Tôi làm ở ngân hàng (công việc thường ngày)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Việc thường ngày dùng hiện tại đơn; nhắc đến một ngân hàng lần đầu nên dùng mạo từ \"a\"." },
    { t: "order", p: "Lát nữa tôi gọi cho bạn", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Lời hứa quyết định ngay lúc nói thì dùng \"will\"." },
    { t: "order", p: "Tôi đã xem hai bộ phim", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "Quá khứ của \"see\" là \"saw\"; có \"two\" nên dùng số nhiều \"movies\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Tối qua tôi ăn pizza", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Có \"last night\" vẫn phải dùng thì quá khứ đơn: \"eat\" thành \"ate\" (dùng \"have\" thì thành \"had\")." },
    { t: "fill", q: "__ you have fun?", p: "Bạn đi chơi vui không?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Hỏi về việc đã qua thì dùng \"Did\" + động từ nguyên mẫu." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Tôi sẽ về thăm bố mẹ", a: ["to"], o: ["for", "at", "on"], why: "Kế hoạch: be going to + động từ nguyên mẫu." },

    { t: "type", p: "Hôm nay tôi làm việc ở nhà", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — việc đang làm", x: ["work"], why: "Việc đang làm trong hôm nay dùng be + V-ing." },
    { t: "type", p: "Cuối tuần trước tôi đi biển", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — quá khứ và mạo từ", x: ["a"], why: "Quá khứ của \"go\" là \"went\"; biển thì dùng mạo từ \"the\": \"the beach\"." },
    { t: "type", p: "Tôi định đi học một lớp nấu ăn (kế hoạch)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — mạo từ trước một lớp học", x: ["the"], why: "Kế hoạch dùng \"going to\"; nhắc đến một lớp học lần đầu nên dùng mạo từ \"a\"." }
  ],

  prep: [
    { t: "mc", q: "“Vào tháng năm” =", o: ["in May", "on May", "at May", "to May"], why: "Trước tháng dùng \"in\"." },
    { t: "mc", q: "“Vào ngày 3 tháng 5” =", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Trước ngày tháng dùng \"on\"." },
    { t: "mc", q: "“Tôi đang ở trên xe buýt” =", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "Phương tiện công cộng dùng \"on\"; đó là chiếc xe buýt bạn đang ngồi nên dùng mạo từ \"the\"." },
    { t: "mc", q: "“Vào ban đêm” =", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" là ngoại lệ: \"at night\", không có mạo từ." },
    { t: "mc", q: "Câu nào đúng?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "Trước thành phố dùng \"in\", và tên thành phố không có mạo từ \"the\"." },

    { t: "order", p: "Gặp nhau ở nhà ga nhé (nhà ga cả hai đều biết)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Một điểm thì dùng \"at\"; nhà ga cả hai đều biết nên dùng mạo từ \"the\"." },
    { t: "order", p: "Điện thoại của tôi ở trên bàn (cái bàn trước mặt)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Trên bề mặt dùng \"on\"; cái bàn ngay trước mặt nên dùng mạo từ \"the\"." },
    { t: "order", p: "Tuần sau gặp nhé", a: ["See", "you", "next", "week"], x: ["on"], why: "Trước \"next\" không dùng giới từ." },

    { t: "fill", q: "The meeting is __ three.", p: "Cuộc họp lúc 3 giờ", a: ["at"], o: ["on", "to", "of"], why: "Trước giờ chính xác dùng \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Tôi sinh năm 1998", a: ["in"], o: ["on", "at", "to"], why: "Trước năm dùng \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "Hẹn gặp bạn vào thứ sáu", a: ["on"], o: ["in", "at", "to"], why: "Trước thứ trong tuần dùng \"on\"." },

    { t: "type", p: "Tôi uống cà phê vào buổi sáng", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + mạo từ", x: ["at"], why: "Buổi trong ngày dùng \"in\", và luôn có mạo từ \"the\": \"in the morning\"." },
    { t: "type", p: "Bây giờ tôi đang ở nhà", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — không có mạo từ", x: ["the"], why: "\"At home\" không dùng mạo từ \"the\"." },
    { t: "type", p: "Cuối tuần sau gặp nhé", a: ["See you next weekend"], hint: "see · next weekend — trước \"next\" có giới từ không?", x: ["on"], why: "Trước \"next\" không dùng giới từ." }
  ],

  smalltalk: [
    { t: "mc", q: "Đồng nghiệp hỏi \"How was your weekend?\". Trả lời thế nào?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Hỏi về việc đã qua thì trả lời bằng quá khứ, và thêm một thông tin." },
    { t: "mc", q: "Đáp lại \"I don't drink coffee.\" với nghĩa “Tôi cũng vậy (cũng không uống)”", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Đồng tình với câu phủ định thì nói \"Me neither\"." },
    { t: "mc", q: "Kết thúc cuộc trò chuyện một cách tự nhiên", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" là cách rời đi nhẹ nhàng." },
    { t: "mc", q: "Câu nào nên dùng để bắt chuyện với người mới gặp?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Thời tiết là chủ đề trò chuyện an toàn nhất." },
    { t: "mc", q: "Bạn nghe \"I went to Busan last weekend.\" Câu nào cho thấy bạn quan tâm?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" và \"That sounds fun!\" cho thấy bạn quan tâm." },

    { t: "order", p: "Cuối tuần có kế hoạch gì không?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "Câu hỏi này dùng số nhiều \"plans\", và là cuối tuần này nên dùng mạo từ \"the\"." },
    { t: "order", p: "Nói chuyện với bạn vui lắm", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Câu chào khi kết thúc trò chuyện. Sau \"nice\" là \"talking\"." },
    { t: "order", p: "Tôi không thích phim kinh dị", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Nói về phim nói chung nên dùng số nhiều \"movies\", không có mạo từ." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Khá ổn! Còn bạn?", a: ["about"], o: ["for", "with", "of"], why: "Trả lời ngắn rồi hỏi lại \"How about you?\" là lịch sự." },
    { t: "fill", q: "I know, __?", p: "Đúng thế! / Chuẩn luôn!", a: ["right"], o: ["light", "yes", "true"], why: "\"I know, right?\" là cách đồng tình mạnh. Từ này bắt đầu bằng R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Dạo này bạn có xem gì hay không?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Hỏi về danh từ đếm được sau \"any\" như thế này thì dùng số nhiều." },

    { t: "type", p: "Cuối tuần của bạn thế nào?", a: ["How was your weekend"], hint: "how · weekend — dùng quá khứ", x: ["is"], why: "Cuối tuần đã qua nên hỏi bằng quá khứ \"was\"." },
    { t: "type", p: "Hôm nay trời đẹp nhỉ", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — có cần mạo từ không?", x: ["a"], why: "\"Weather\" là danh từ không đếm được nên không dùng mạo từ \"a\" (a nice weather ✗)." },
    { t: "type", p: "Tôi thích xem phim", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — nói chung thì dùng số nhiều", x: ["movie"], why: "Nói về phim nói chung nên dùng số nhiều \"movies\"." }
  ],

  phrasal: [
    { t: "mc", q: "“Bật nó lên” =", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Đại từ \"it\" đứng giữa cụm động từ: \"turn it on\"." },
    { t: "mc", q: "“Nhà mình hết sữa rồi” =", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = hết sạch. Đừng quên \"of\"." },
    { t: "mc", q: "“Tôi lớn lên ở Daegu” =", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "\"Grow up\" = lớn lên, quá khứ là \"grew up\"." },
    { t: "mc", q: "“Bạn trông giúp con mèo của tôi được không?” =", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = trông nom, chăm sóc; cụm này không tách được (\"look for\" là “tìm”)." },
    { t: "mc", q: "“7 giờ tôi đến đón bạn” =", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Đại từ \"you\" đứng giữa \"pick\" và \"up\"." },

    { t: "order", p: "Tôi đang tìm cái kính của tôi", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Kính đeo mắt luôn ở dạng số nhiều \"glasses\" (\"glass\" là cốc thủy tinh). “Tìm” là \"look for\"." },
    { t: "order", p: "Mình cùng nghĩ ra một kế hoạch đi", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "\"Come up with\" = nghĩ ra. Một kế hoạch chưa có nên dùng mạo từ \"a\"." },
    { t: "order", p: "Tôi sẽ đến đón bạn", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Đại từ \"you\" đứng giữa \"pick\" và \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Bạn tắt nó giúp tôi được không?", a: ["off"], o: ["of", "on", "out"], why: "“Tắt” là \"turn off\". Đừng nhầm chính tả với \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Sáng nào tôi cũng tập thể dục", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = tập thể dục." },
    { t: "fill", q: "We ran out of __.", p: "Nhà mình hết trứng rồi", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Trứng là danh từ đếm được; hết sạch thì dùng số nhiều \"eggs\"." },

    { t: "type", p: "Tắt nó giúp tôi với", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — đại từ đứng giữa", x: ["on"], why: "Đại từ \"it\" đứng giữa \"turn\" và \"off\"." },
    { t: "type", p: "Tôi chăm sóc hai con mèo", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — có hai thì dùng số nhiều", x: ["cat"], why: "\"Look after\" = chăm sóc. Có \"two\" nên dùng số nhiều \"cats\"." },
    { t: "type", p: "Nhà mình hết sữa rồi", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — có cần mạo từ không?", x: ["a"], why: "\"Milk\" là danh từ không đếm được nên không dùng mạo từ \"a\"." }
  ],

  numbers: [
    { t: "mc", q: "10.000 (mười nghìn) nói bằng tiếng Anh thế nào?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Chia nhóm ba chữ số: 10 + thousand. Sau con số, \"thousand\" không có đuôi -s số nhiều." },
    { t: "mc", q: "1.000.000 (một triệu) nói bằng tiếng Anh thế nào?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Hai nhóm ba số 0 là \"million\". Sau con số, \"million\" không có đuôi -s số nhiều." },
    { t: "mc", q: "Đọc 9:05 thế nào?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Phút từ 1 đến 9 thì thêm \"oh\" phía trước." },
    { t: "mc", q: "Đọc $4.99 thế nào cho tự nhiên?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Giá tiền đọc thành hai cụm số: \"four ninety-nine\"." },
    { t: "mc", q: "Năm 2026 đọc bằng tiếng Anh thế nào?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Năm được tách thành hai cặp số để đọc." },

    { t: "order", p: "Bây giờ là 7 giờ 15", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 là \"fifteen\" (nhấn âm sau), 50 là \"fifty\" (nhấn âm đầu)." },
    { t: "order", p: "Giá 15 đô", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Nhiều hơn một đô thì dùng số nhiều \"dollars\"." },
    { t: "order", p: "một tuần hai lần", a: ["twice", "a", "week"], x: ["the", "one"], why: "“Mấy lần một tuần” dùng mạo từ \"a\": \"twice a week\"." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Bây giờ là 10 giờ 15", a: ["a"], o: ["the", "one", "an"], why: "Trước \"quarter\" (15 phút) có mạo từ \"a\"." },
    { t: "fill", q: "That's fifty __ won.", p: "Giá 50.000 won", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 là \"fifty thousand\". Sau con số, \"thousand\" không có đuôi -s số nhiều." },
    { t: "fill", q: "I'll be there in ten __.", p: "10 phút nữa tôi đến", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Mười phút thì dùng số nhiều \"minutes\"." },

    { t: "type", p: "Bây giờ là 3 giờ rưỡi", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — đọc giờ rồi đọc phút", x: ["thirteen"], why: "Đọc giờ rồi đọc phút: \"three thirty\". Đừng nhầm với 13 (\"thirteen\")." },
    { t: "type", p: "Giá 20 đô", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — từ hai trở lên thì dùng số nhiều", x: ["dollar"], why: "Từ hai đô trở lên thì dùng số nhiều \"dollars\"." },
    { t: "type", p: "Tôi tập thể dục một tuần hai lần", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — “một tuần” dùng mạo từ nào?", x: ["the"], why: "“Một tuần” ở đây dùng mạo từ \"a\": \"a week\" (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Bắt đầu thư bằng \"Dear\", lời chào nào tự nhiên nhất?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Sau \"Dear\" hãy viết tên người nhận, đừng chỉ ghi chức danh." },
    { t: "mc", q: "Báo rằng bạn đã đính kèm bản báo cáo", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Đó chính là bản báo cáo người nhận sẽ thấy nên dùng mạo từ \"the\"." },
    { t: "mc", q: "“Hạn chót là khi nào?” =", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Hạn chót của chính việc này nên dùng mạo từ \"the\"." },
    { t: "mc", q: "Trả lời thư muộn, câu nào tích cực có thể dùng thay lời xin lỗi?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" lịch sự mà không cần xin lỗi. Đừng nhầm chính tả với \"patients\" (bệnh nhân)." },
    { t: "mc", q: "Lời chào nào hợp để kết email ngày thứ sáu?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Nói về một kỳ cuối tuần nên có mạo từ \"a\", và \"weekend\" ở số ít." },

    { t: "order", p: "Tôi đã đính kèm bản báo cáo", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Đó chính là bản báo cáo người nhận sẽ thấy nên dùng mạo từ \"the\"." },
    { t: "order", p: "Mình lên lịch một cuộc họp nhé", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Một cuộc họp chưa được định nên dùng mạo từ \"a\"." },
    { t: "order", p: "Tôi sẽ kiểm tra rồi liên lạc lại với anh/chị", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = liên lạc lại. Dùng \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Anh/chị gửi giúp tôi tệp chậm nhất vào thứ sáu được không?", a: ["by"], o: ["until", "in", "at"], why: "Hạn chót (“chậm nhất là”) dùng \"by\" + ngày." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Tôi viết thư này để hỏi về lịch trình", a: ["to"], o: ["for", "about", "at"], why: "Nói mục đích: \"I'm writing to\" + động từ nguyên mẫu." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Cảm ơn mọi người đã vất vả thời gian qua", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (công việc) ở đây là danh từ không đếm được nên không thêm -s số nhiều." },

    { t: "type", p: "Ngày mai tôi nghỉ (không đi làm)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow"], hint: "off · tomorrow — động từ to be + off", x: ["do"], why: "Ngày nghỉ làm thì nói \"be off\"." },
    { t: "type", p: "Tôi đã đính kèm tệp", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — chính tệp đó", x: ["a"], why: "Đó chính là tệp người nhận sẽ thấy nên dùng mạo từ \"the\"." },
    { t: "type", p: "Chúc cuối tuần vui vẻ!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — mạo từ trước một kỳ cuối tuần", x: ["the"], why: "Nói về một kỳ cuối tuần nên có mạo từ \"a\": \"a great weekend\"." }
  ],

  idioms: [
    { t: "mc", q: "“Dễ như ăn kẹo” =", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Học thành ngữ trọn cả câu: có mạo từ \"a\", và \"cake\" ở số ít." },
    { t: "mc", q: "“Đắt cắt cổ” =", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" bắt đầu bằng nguyên âm nên dùng mạo từ \"an\", \"leg\" bắt đầu bằng phụ âm nên dùng \"a\"." },
    { t: "mc", q: "“Hôm nay đến đây thôi” (dùng được cả trong cuộc họp)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "\"Call it a day\" là thành ngữ cần nhớ trọn, kể cả mạo từ \"a\"." },
    { t: "mc", q: "“Vui như mở cờ trong bụng” =", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"On cloud nine\" không có mạo từ, cũng không có -s số nhiều." },
    { t: "mc", q: "Câu nào là tiếng lóng chỉ dùng với bạn bè?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" là tiếng lóng của giới trẻ, nghĩa là “thật đấy”. Các câu còn lại là thành ngữ, dùng được cả ở nơi làm việc." },

    { t: "order", p: "Tôi đang lắng nghe đây", a: ["I'm", "all", "ears"], x: ["ear"], why: "Nghĩa đen là “cả người là tai” nên dùng số nhiều \"ears\"." },
    { t: "order", p: "Tôi phải chăm chỉ học bài thôi", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "\"Hit the books\": giữ nguyên mạo từ \"the\" và số nhiều \"books\"." },
    { t: "order", p: "Cái đó không hợp gu tôi", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "Nhớ trọn \"not my cup of tea\". Đã có \"my\" thì không thêm mạo từ." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Một công đôi việc", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Hai con chim nên dùng số nhiều \"birds\"." },
    { t: "fill", q: "Speak of the __!", p: "Vừa nhắc Tào Tháo, Tào Tháo đến!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "Tiếng Việt nhắc Tào Tháo, tiếng Anh nhắc \"devil\" (con quỷ)." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Tôi thấy hơi mệt trong người", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\": giữ nguyên mạo từ \"the\"." },

    { t: "type", p: "Dễ như ăn kẹo", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — đừng quên mạo từ", x: ["the"], why: "\"A piece of cake\": nhất định phải có mạo từ \"a\"." },
    { t: "type", p: "Tôi sẽ cầu mong mọi việc suôn sẻ", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — mấy ngón tay?", x: ["finger"], why: "Bắt chéo hai ngón tay nên dùng số nhiều \"fingers\"." },
    { t: "type", p: "Hôm nay đến đây thôi", a: ["Let's call it a day"], hint: "call it · day — không phải \"the\"", x: ["the"], why: "\"Call it a day\": mạo từ \"a\", không phải \"the\"." }
  ]
};
