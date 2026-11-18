/* TRANSLATE/ADAPT (th): scaffolded from tools/content/ko/practice.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for th speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the th point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* Practice sets for the ko-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Korean; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "คำไหนแปลว่า “ข้าว”", o: ["rice", "lice", "rise", "nice"], why: "rice ขึ้นต้นด้วย R ที่ปลายลิ้นไม่แตะตรงไหน ถ้าพูดเป็นเสียง ล จะกลายเป็น lice (เหา)" },
    { t: "mc", q: "คำไหนแปลว่า “พัดลม”", o: ["fan", "pan", "van", "ban"], why: "F คือฟันบนแตะริมฝีปากล่างแล้วปล่อยลม ถ้าปิดริมฝีปากทั้งสองข้างจะกลายเป็น pan (กระทะ)" },
    { t: "mc", q: "คำไหนแปลว่า “คิด”", o: ["think", "sink", "thing", "pink"], why: "TH ยื่นปลายลิ้นออกมาระหว่างฟัน ถ้าใช้เสียง ซ จะกลายเป็น sink (อ่างล้างจาน)" },
    { t: "mc", q: "คำไหนแปลว่า “ลงคะแนนเสียง”", o: ["vote", "boat", "goat", "bought"], why: "V คือท่าเดียวกับ F แต่สั่นเส้นเสียง ถ้าปิดริมฝีปากจะกลายเป็น boat (เรือ) และถ้าห่อปากเป็นเสียง ว ก็ผิดเหมือนกัน" },
    { t: "mc", q: "คำไหนแปลว่า “ด้านขวา”", o: ["right", "light", "fight", "bright"], why: "right ขึ้นต้นด้วย R ส่วน light ที่ขึ้นต้นด้วย L แปลว่าแสง" },

    { t: "order", p: "นี่คือกล้วย", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana ขึ้นต้นด้วยเสียงพยัญชนะ จึงใช้คำนำหน้านาม a และ this สะกดด้วย th" },
    { t: "order", p: "ต้นไม้สามต้น", a: ["three", "trees"], x: ["tree", "free"], why: "มีสามต้นจึงต้องเป็นรูปพหูพจน์ trees ส่วน three ขึ้นต้นด้วย TH และ tree ขึ้นต้นด้วย TR" },
    { t: "order", p: "ฉันชอบกาแฟ", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee ใช้เสียง F ที่ฟันบนแตะริมฝีปากล่าง ถ้าเป็น P จะกลายเป็น copy (สำเนา)" },

    { t: "fill", q: "I eat __ice every day.", p: "ฉันกินข้าวทุกวัน", a: ["r"], o: ["l", "n", "w"], why: "ข้าวคือ rice ที่ขึ้นต้นด้วย R ถ้าเป็น L จะกลายเป็น lice (เหา)" },
    { t: "fill", q: "I __ink so.", p: "ฉันคิดว่าอย่างนั้น", a: ["th"], o: ["s", "t", "p"], why: "think ขึ้นต้นด้วย TH ถ้าเป็น s จะกลายเป็น sink (อ่างล้างจาน)" },
    { t: "fill", q: "This is my __.", p: "นี่คือกระเป๋าของฉัน", a: ["bag"], o: ["back", "bug", "beg"], why: "กระเป๋าคือ bag ที่ลงท้ายด้วยเสียง g ก้อง ถ้าลงท้ายด้วยเสียง k จะกลายเป็น back (หลัง)" },

    { t: "type", p: "ต้นไม้สามต้น", a: ["three trees"], hint: "three · tree — สามต้นต้องเป็นรูปพหูพจน์", x: ["tree"], why: "three ขึ้นต้นด้วย TH tree ขึ้นต้นด้วย TR และสามต้นต้องเป็นรูปพหูพจน์: trees" },
    { t: "type", p: "เรือสองลำ", a: ["two boats"], hint: "two · boat — สองลำต้องเป็นรูปพหูพจน์", x: ["boat", "votes"], why: "เรือคือ boat ที่ขึ้นต้นด้วย B และสองลำต้องเป็นรูปพหูพจน์ boats ถ้าเป็น V จะกลายเป็น vote (การลงคะแนน)" },
    { t: "type", p: "เบามาก", a: ["very light"], hint: "very · light — ขึ้นต้นด้วย V และ L", x: ["berry"], why: "very ขึ้นต้นด้วย V ที่ฟันบนแตะริมฝีปากล่าง ไม่ใช่ ว ส่วน light ขึ้นต้นด้วย L ที่ปลายลิ้นแตะปุ่มเหงือก" }
  ],

  articles: [
    { t: "mc", q: "“ฉันเป็นนักเรียน” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "หน้าอาชีพหรือสถานะต้องมีคำนำหน้านาม a เสมอ แม้ภาษาไทยจะไม่มีคำว่า หนึ่ง" },
    { t: "mc", q: "“ฉันมีไอเดียอย่างหนึ่ง” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "mc", q: "“หนึ่งชั่วโมง” ภาษาอังกฤษคือ", o: ["an hour", "a hour", "one hours", "hour"], why: "h ใน hour ไม่ออกเสียง คำนี้จึงขึ้นต้นด้วยเสียงสระและใช้คำนำหน้านาม an" },
    { t: "mc", q: "“ฉันชอบหมามาก” (หมายถึงหมาทั้งประเภท)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม" },
    { t: "mc", q: "“ฉันเลี้ยงหมาตัวหนึ่ง หมาตัวนั้นน่ารักมาก” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "พูดถึงครั้งแรกใช้คำนำหน้านาม a พูดถึงซ้ำตัวเดิมใช้ the" },

    { t: "order", p: "ฉันเป็นครู", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "หน้าอาชีพต้องมีคำนำหน้านาม a และ teacher ขึ้นต้นด้วยเสียงพยัญชนะ จึงไม่ใช้ an" },
    { t: "order", p: "ช่วยปิดประตู (ห้องนี้) หน่อยได้ไหม", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "เป็นประตูบานที่ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ฉันไม่ดื่มกาแฟ", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "พูดถึงกาแฟแบบทั่วไป coffee เป็นคำนามนับไม่ได้ จึงไม่ใช้คำนำหน้านาม" },

    { t: "fill", q: "I'm __ university student.", p: "ฉันเป็นนักศึกษามหาวิทยาลัย", a: ["a"], o: ["an", "the", "two"], why: "university ขึ้นต้นด้วยเสียง /j/ ซึ่งเป็นเสียงพยัญชนะ จึงใช้คำนำหน้านาม a ดูที่เสียง ไม่ได้ดูที่ตัวสะกด" },
    { t: "fill", q: "I have __ older sister.", p: "ฉันมีพี่สาวหนึ่งคน", a: ["an"], o: ["a", "the", "two"], why: "older ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "fill", q: "I don't like __.", p: "ฉันไม่ชอบแมว (หมายถึงแมวทั้งประเภท)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์ cats และไม่ใช้คำนำหน้านาม" },

    { t: "type", p: "ฉันมีไอเดียอย่างหนึ่ง", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — คำนำหน้านามก่อนเสียงสระ", x: ["a"], why: "idea ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "type", p: "ฉันชอบหมา (หมายถึงหมาทั้งประเภท)", a: ["I like dogs", "I love dogs"], hint: "like · dog — พูดถึงทั้งประเภทใช้รูปพหูพจน์", x: ["dog", "a"], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์ dogs และไม่ใช้คำนำหน้านาม" },
    { t: "type", p: "ไปกินข้าวกลางวันกัน", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — ชื่อมื้ออาหาร", x: ["a", "the"], why: "หน้าชื่อมื้ออาหารไม่ใช้คำนำหน้านาม" }
  ],

  be: [
    { t: "mc", q: "“ฉันเหนื่อย” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "คำคุณศัพท์ต้องมี Verb to be นำหน้า แม้ภาษาไทยจะพูดแค่ “ฉันเหนื่อย”" },
    { t: "mc", q: "“เขาพูดภาษาอังกฤษได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "ประธาน he ใช้ does และกริยาหลัง does ไม่เติม -s" },
    { t: "mc", q: "“เธออยู่ที่ทำงาน” ภาษาอังกฤษพูดว่าอย่างไร", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "บอกว่าอยู่ที่ไหนใช้ Verb to be และประธาน she ใช้ is" },
    { t: "mc", q: "ถ้าจะตอบ Do you like coffee? ว่า “ชอบ” ตอบอย่างไร", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "ถามด้วย do ก็ตอบด้วย do" },
    { t: "mc", q: "“เธอไม่กินเนื้อสัตว์” ภาษาอังกฤษพูดว่าอย่างไร", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "ประธาน she ปฏิเสธด้วย doesn't แล้วตามด้วยกริยาช่อง 1 ที่ไม่เติม -s" },

    { t: "order", p: "พี่ชายฉันทำงานที่โซล", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "ประธานเอกพจน์บุรุษที่ 3 (he) กริยาต้องเติม -s: works และไม่ใช้ Verb to be หน้ากริยาแท้" },
    { t: "order", p: "ฉันไม่ได้เป็นนักเรียน", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "ปฏิเสธ Verb to be ด้วย not และหน้าสถานะต้องมีคำนำหน้านาม a" },
    { t: "order", p: "เธอเลี้ยงหมาสองตัว", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "ประธาน she ใช้ has และมีสองตัวจึงต้องเป็นรูปพหูพจน์ dogs" },

    { t: "fill", q: "My brother __ in Seoul.", p: "พี่ชายฉันอยู่ที่โซล", a: ["lives"], o: ["live", "is live", "living"], why: "ประธานเอกพจน์บุรุษที่ 3 (he) กริยาต้องเติม -s: lives" },
    { t: "fill", q: "__ you tired?", p: "เหนื่อยไหม", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired เป็นคำคุณศัพท์ จึงถามด้วย Verb to be และประธาน you ใช้ are" },
    { t: "fill", q: "We __ hungry.", p: "พวกเราหิว", a: ["are"], o: ["is", "am", "do"], why: "hungry เป็นคำคุณศัพท์ จึงต้องมี Verb to be และประธาน we ใช้ are" },

    { t: "type", p: "เขาเป็นครู", a: ["He's a teacher", "He is a teacher"], hint: "teacher — Verb to be และคำนำหน้านามหน้าอาชีพ", x: ["the"], why: "บอกว่าเป็นใครใช้ Verb to be และหน้าอาชีพต้องมีคำนำหน้านาม a" },
    { t: "type", p: "ฉันไม่ชอบกาแฟ", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — ปฏิเสธกริยาแท้", x: ["am"], why: "like เป็นกริยาแท้ จึงปฏิเสธด้วย don't (I'm not like ✗)" },
    { t: "type", p: "เธอเลี้ยงแมวหนึ่งตัวไหม", a: ["Does she have a cat"], hint: "does · have · cat — แมวหนึ่งตัวต้องมีคำนำหน้านาม", x: ["has"], why: "หลัง does ใช้กริยาช่อง 1 have และแมวหนึ่งตัวเป็นคำนามนับได้เอกพจน์ ต้องมีคำนำหน้านาม a" }
  ],

  polite: [
    { t: "mc", q: "สั่งลาเต้หนึ่งแก้วที่คาเฟ่ ประโยคไหนเป็นธรรมชาติที่สุด", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "ที่ร้านค้าใช้ Can I get ~? และลาเต้หนึ่งแก้วต้องมีคำนำหน้านาม a" },
    { t: "mc", q: "ขอความช่วยเหลือจากคนแปลกหน้า ประโยคไหนสุภาพที่สุด", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? เป็นการขอร้องอย่างสุภาพที่ใช้กับคนที่ไม่รู้จักได้" },
    { t: "mc", q: "ฟังไม่ทันแล้วอยากให้อีกฝ่ายพูดซ้ำอย่างสุภาพ พูดว่าอย่างไร", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? เป็นการขอให้พูดซ้ำอย่างสุภาพ" },
    { t: "mc", q: "“รบกวนช่วยถ่ายรูปให้พวกเราหน่อยได้ไหม” (สุภาพมาก)", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "หลัง mind ใช้รูป -ing: taking" },
    { t: "mc", q: "บนเครื่องบิน: “ขอที่นั่งริมหน้าต่าง”", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ เป็นการขออย่างสุภาพ และที่นั่งหนึ่งที่ต้องมีคำนำหน้านาม a" },

    { t: "order", p: "ขอลาเต้หนึ่งแก้วได้ไหม", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "สั่งลาเต้หนึ่งแก้วเป็นครั้งแรก จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "รบกวนเปิดหน้าต่าง (บานนี้) หน่อยได้ไหม", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "หลัง mind ใช้รูป -ing และเป็นหน้าต่างที่ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ช่วยพูดช้าลงอีกหน่อยได้ไหม", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "ขอร้องอย่างสุภาพด้วย Could you ~? และใช้คำกริยาวิเศษณ์ slowly" },

    { t: "fill", q: "Would you mind __ the door?", p: "รบกวนปิดประตูหน่อยได้ไหม", a: ["closing"], o: ["close", "to close", "closed"], why: "หลัง mind ใช้รูป -ing" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "ขอกาแฟเย็นหนึ่งแก้วได้ไหม", a: ["an"], o: ["a", "two", "many"], why: "iced ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "fill", q: "No, not at __.", p: "(ตอบ Would you mind ~?) ได้เลย ไม่ขัดข้อง", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all แปลว่าไม่รังเกียจเลย คือยินดีทำให้" },

    { t: "type", p: "ช่วยฉันหน่อยได้ไหม (อย่างสุภาพ)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — ขอร้องอย่างสุภาพ", x: ["can"], why: "กับคนแปลกหน้าให้ขอร้องด้วย Could you ~?" },
    { t: "type", p: "ขอที่นั่งริมหน้าต่าง", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — ที่นั่งหนึ่งที่ต้องมีคำนำหน้านาม", x: ["the"], why: "พูดถึงที่นั่งหนึ่งที่เป็นครั้งแรก จึงใช้คำนำหน้านาม a: a window seat" },
    { t: "type", p: "ขอกาแฟสองแก้ว", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — สองแก้วต้องเป็นรูปพหูพจน์", x: ["coffee"], why: "เวลาสั่งเป็นแก้ว coffee นับได้ สองแก้วจึงเป็นรูปพหูพจน์ two coffees โดยไม่ต้องมีลักษณนาม" }
  ],

  tense: [
    { t: "mc", q: "“ตอนนี้ฉันกำลังดื่มกาแฟ” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "สิ่งที่กำลังทำอยู่ใช้ be + -ing และตัด be ทิ้งไม่ได้" },
    { t: "mc", q: "“สุดสัปดาห์ที่แล้วฉันไปทะเล” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "มี last weekend ก็ต้องใช้กริยาช่อง 2: went และ beach ต้องมีคำนำหน้านาม the" },
    { t: "mc", q: "เล่าแผนเดือนหน้า: “ฉันจะไปเกาะเชจู”", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "แผนที่วางไว้ก่อนใช้ be going to + กริยาช่อง 1" },
    { t: "mc", q: "กริ่งประตูดัง แล้วพูดทันทีว่า “เดี๋ยวฉันไปเปิดเอง!”", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "ตัดสินใจตอนพูดใช้ will" },
    { t: "mc", q: "กริยาช่อง 2 ของ see", o: ["saw", "seed", "seen", "sawed"], why: "see เป็นกริยาไม่ปกติ: see - saw - seen" },

    { t: "order", p: "ฉันทำงานที่ธนาคาร (เป็นประจำ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "งานประจำใช้ Present Simple Tense และพูดถึงธนาคารแห่งหนึ่งเป็นครั้งแรก จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "เดี๋ยวโทรหาทีหลัง", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "สัญญาที่ตัดสินใจตอนพูดใช้ will" },
    { t: "order", p: "ฉันดูหนังไปสองเรื่อง", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "กริยาช่อง 2 ของ see คือ saw และสองเรื่องต้องเป็นรูปพหูพจน์ movies" },

    { t: "fill", q: "I __ pizza last night.", p: "เมื่อคืนฉันกินพิซซ่า", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "มี last night ก็ต้องใช้กริยาช่อง 2: ate (หรือ had ถ้าใช้ have)" },
    { t: "fill", q: "__ you have fun?", p: "สนุกไหม", a: ["Did"], o: ["Does", "Are", "Were"], why: "ถามเรื่องที่ผ่านไปแล้วใช้ Did + กริยาช่อง 1" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "ฉันจะไปเยี่ยมพ่อแม่", a: ["to"], o: ["for", "at", "on"], why: "แผนใช้ be going to + กริยาช่อง 1" },

    { t: "type", p: "วันนี้ฉันทำงานที่บ้าน (กำลังทำอยู่)", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — กำลังทำอยู่", x: ["work"], why: "สิ่งที่กำลังทำอยู่ในวันนี้ใช้ be + -ing" },
    { t: "type", p: "สุดสัปดาห์ที่แล้วฉันไปทะเล", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — กริยาช่อง 2 และคำนำหน้านาม", x: ["a"], why: "กริยาช่อง 2 ของ go คือ went และทะเลในความหมายนี้ใช้คำนำหน้านาม the: the beach" },
    { t: "type", p: "ฉันจะไปเรียนคอร์สทำอาหาร (แผนที่วางไว้)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — คอร์สหนึ่งคอร์ส", x: ["the"], why: "แผนที่วางไว้ใช้ going to และพูดถึงคอร์สหนึ่งคอร์สเป็นครั้งแรก จึงใช้คำนำหน้านาม a" }
  ],

  prep: [
    { t: "mc", q: "“ในเดือนพฤษภาคม” ภาษาอังกฤษคือ", o: ["in May", "on May", "at May", "to May"], why: "หน้าชื่อเดือนใช้ in" },
    { t: "mc", q: "“วันที่ 3 พฤษภาคม” (เช่น นัดกันวันที่ 3 พฤษภาคม) ภาษาอังกฤษคือ", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "หน้าวันที่ใช้ on" },
    { t: "mc", q: "“(ตอนนี้) ฉันอยู่บนรถบัส” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "รถสาธารณะอย่างรถบัสใช้ on และเป็นคันที่นั่งอยู่ตอนนี้ จึงต้องมีคำนำหน้านาม the" },
    { t: "mc", q: "“ตอนกลางคืน” ภาษาอังกฤษคือ", o: ["at night", "on night", "in night", "at the night"], why: "night เป็นข้อยกเว้น ใช้ at night โดยไม่มีคำนำหน้านาม" },
    { t: "mc", q: "เลือกประโยคที่ถูกต้อง", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "หน้าชื่อเมืองใช้ in และชื่อเมืองไม่มีคำนำหน้านาม the" },

    { t: "order", p: "เจอกันที่สถานี (ที่เรารู้กัน)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "จุดนัดพบใช้ at และเป็นสถานีที่ทั้งสองฝ่ายรู้ว่าที่ไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "มือถือของฉันอยู่บนโต๊ะ (ตัวนั้น)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "อยู่บนพื้นผิวใช้ on และเป็นโต๊ะตัวที่เห็นอยู่ จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "เจอกันสัปดาห์หน้า", a: ["See", "you", "next", "week"], x: ["on"], why: "หน้า next ไม่ใช้คำบุพบท" },

    { t: "fill", q: "The meeting is __ three.", p: "ประชุมตอนบ่ายสามโมง", a: ["at"], o: ["on", "to", "of"], why: "หน้าเวลาที่แน่นอนใช้ at" },
    { t: "fill", q: "I was born __ 1998.", p: "ฉันเกิดปี 1998", a: ["in"], o: ["on", "at", "to"], why: "หน้าปีใช้ in" },
    { t: "fill", q: "See you __ Friday.", p: "เจอกันวันศุกร์", a: ["on"], o: ["in", "at", "to"], why: "หน้าวันในสัปดาห์ใช้ on" },

    { t: "type", p: "ฉันดื่มกาแฟตอนเช้า", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in และคำนำหน้านาม", x: ["at"], why: "ช่วงเวลาของวันใช้ in และต้องมีคำนำหน้านาม the: in the morning" },
    { t: "type", p: "ตอนนี้ฉันอยู่บ้าน", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — ไม่มีคำนำหน้านาม", x: ["the"], why: "at home ไม่ใช้คำนำหน้านาม the" },
    { t: "type", p: "เจอกันสุดสัปดาห์หน้า", a: ["See you next weekend"], hint: "see · next weekend — หน้า next ใช้คำบุพบทไหม", x: ["on"], why: "หน้า next ไม่ใช้คำบุพบท" }
  ],

  smalltalk: [
    { t: "mc", q: "เพื่อนร่วมงานถามว่า How was your weekend? ตอบแบบไหนดีที่สุด", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "ถามเรื่องที่ผ่านไปแล้ว จึงตอบด้วยกริยาช่อง 2 และเล่าเพิ่มอีกหนึ่งเรื่อง" },
    { t: "mc", q: "อีกฝ่ายพูดว่า I don't drink coffee. ถ้าจะตอบว่า “ฉันก็ไม่ดื่มเหมือนกัน” พูดว่าอย่างไร", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "เห็นด้วยกับประโยคปฏิเสธใช้ Me neither" },
    { t: "mc", q: "จะจบบทสนทนาอย่างเป็นธรรมชาติ พูดว่าอย่างไร", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going เป็นการขอตัวอย่างนุ่มนวล" },
    { t: "mc", q: "ประโยคไหนเหมาะจะใช้เปิดบทสนทนากับคนที่เพิ่งเจอ", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "อากาศเป็นเรื่องคุยเล่นที่ปลอดภัยที่สุด ส่วนเงินเดือน การแต่งงาน และน้ำหนักควรเลี่ยง" },
    { t: "mc", q: "อีกฝ่ายพูดว่า I went to Busan last weekend. ตอบรับแบบไหนแสดงว่าสนใจ", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? และ That sounds fun! แสดงว่าเราสนใจเรื่องที่เขาเล่า" },

    { t: "order", p: "สุดสัปดาห์นี้มีแผนอะไรไหม", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "สำนวนนี้ใช้รูปพหูพจน์ plans และเป็นสุดสัปดาห์ที่จะถึงนี้ จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ดีใจที่ได้คุยกัน", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "เป็นประโยคปิดท้ายบทสนทนา หลัง nice ใช้รูป -ing: talking" },
    { t: "order", p: "ฉันไม่ชอบหนังผี", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "พูดถึงหนังผีแบบทั่วไป จึงใช้รูปพหูพจน์ movies และไม่ใช้คำนำหน้านาม" },

    { t: "fill", q: "Pretty good! How __ you?", p: "สบายดี แล้วคุณล่ะ", a: ["about"], o: ["for", "with", "of"], why: "ตอบสั้น ๆ แล้วถามกลับด้วย How about you? เป็นมารยาทที่ดี" },
    { t: "fill", q: "I know, __?", p: "นั่นสิ ใช่เลย", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? ใช้ตอบรับเมื่อเห็นด้วยมาก ๆ และขึ้นต้นด้วย R ไม่ใช่ L" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ช่วงนี้ได้ดูอะไรสนุก ๆ บ้างไหม", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "ถามถึงคำนามนับได้หลัง any แบบนี้ ใช้รูปพหูพจน์" },

    { t: "type", p: "สุดสัปดาห์เป็นอย่างไรบ้าง (ที่ผ่านมา)", a: ["How was your weekend"], hint: "how · weekend — สุดสัปดาห์ที่ผ่านไปแล้ว", x: ["is"], why: "สุดสัปดาห์ที่ผ่านไปแล้ว จึงถามด้วย was" },
    { t: "type", p: "วันนี้อากาศดีนะ", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — ใส่คำนำหน้านามไหม", x: ["a"], why: "weather เป็นคำนามนับไม่ได้ จึงไม่ใช้ a (a nice weather ✗)" },
    { t: "type", p: "ฉันชอบดูหนัง (แบบทั่วไป)", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — พูดแบบทั่วไปใช้รูปพหูพจน์", x: ["movie"], why: "พูดถึงหนังแบบทั่วไป จึงใช้รูปพหูพจน์ movies" }
  ],

  phrasal: [
    { t: "mc", q: "'그거 켜 줘' =", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "대명사 it은 구동사 가운데에 와요: turn it on." },
    { t: "mc", q: "'우유가 다 떨어졌어요' =", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = ~이 다 떨어지다. of를 빼먹지 마세요." },
    { t: "mc", q: "'대구에서 자랐어요' =", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = 자라다, 과거형은 grew up이에요." },
    { t: "mc", q: "'제 고양이 좀 돌봐 줄 수 있어요?' =", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 돌보다. 나눌 수 없는 구동사예요 (look for는 '찾다')." },
    { t: "mc", q: "'7시에 데리러 갈게' =", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "대명사 you는 pick과 up 사이에 와요." },

    { t: "order", p: "제 안경을 찾고 있어요", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "안경은 항상 복수형 glasses예요 (glass는 유리잔). '찾다'는 look for예요." },
    { t: "order", p: "계획을 하나 생각해 내 봐요", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 생각해 내다. 아직 없는 계획 하나라 관사 a예요." },
    { t: "order", p: "내가 데리러 갈게", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "대명사 you는 pick과 up 사이에 와요." },

    { t: "fill", q: "Can you turn it __?", p: "그거 꺼 줄래요?", a: ["off"], o: ["of", "on", "out"], why: "끄다는 turn off예요. of와 철자를 헷갈리지 마세요." },
    { t: "fill", q: "I work __ every morning.", p: "저는 매일 아침 운동해요", a: ["out"], o: ["up", "off", "on"], why: "work out = 운동하다." },
    { t: "fill", q: "We ran out of __.", p: "달걀이 다 떨어졌어요", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "달걀처럼 셀 수 있는 것이 다 떨어졌을 땐 복수형 eggs예요." },

    { t: "type", p: "그거 좀 꺼 주세요", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 대명사는 가운데", x: ["on"], why: "대명사 it은 turn과 off 사이에 와요." },
    { t: "type", p: "저는 고양이 두 마리를 돌봐요", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 둘이면 복수형", x: ["cat"], why: "look after = 돌보다. 두 마리니까 복수 -s를 붙여 cats예요." },
    { t: "type", p: "우유가 다 떨어졌어요", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 관사를 붙일까요?", x: ["a"], why: "milk는 셀 수 없는 명사라 관사 a를 붙이지 않아요." }
  ],

  numbers: [
    { t: "mc", q: "10,000(만)을 영어로 하면?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "세 자리씩 끊어요: 10 + thousand. 숫자 뒤 thousand에는 복수 -s를 붙이지 않아요." },
    { t: "mc", q: "1,000,000(백만)을 영어로 하면?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "쉼표 두 개 = million이에요. 숫자 뒤 million에는 복수 -s를 붙이지 않아요." },
    { t: "mc", q: "9:05를 읽는 법은?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1~9분 앞에는 oh를 붙여요." },
    { t: "mc", q: "$4.99를 자연스럽게 읽으면?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "가격은 숫자 두 덩어리로 읽어요: four ninety-nine." },
    { t: "mc", q: "2026년을 영어로 읽으면?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "연도는 두 자리씩 끊어 읽어요." },

    { t: "order", p: "7시 15분이에요", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15는 fifteen(뒤에 강세), 50은 fifty(앞에 강세)예요." },
    { t: "order", p: "15달러예요", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "1달러보다 많으면 dollars처럼 복수 -s를 붙여요." },
    { t: "order", p: "일주일에 두 번", a: ["twice", "a", "week"], x: ["the", "one"], why: "'~에 몇 번'은 관사 a로 말해요: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "10시 15분이에요", a: ["a"], o: ["the", "one", "an"], why: "quarter(15분) 앞에는 관사 a를 붙여요." },
    { t: "fill", q: "That's fifty __ won.", p: "5만 원이에요", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000은 fifty thousand예요. 숫자 뒤 thousand에는 복수 -s를 붙이지 않아요." },
    { t: "fill", q: "I'll be there in ten __.", p: "10분 후에 도착할게요", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10분이니 복수형 minutes예요." },

    { t: "type", p: "3시 반이에요", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 시와 분을 그대로", x: ["thirteen"], why: "시와 분을 그대로 읽어요: three thirty. 13(thirteen)과 헷갈리지 마세요." },
    { t: "type", p: "20달러예요", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 이상이면 복수형", x: ["dollar"], why: "2달러 이상이니 dollars처럼 복수 -s를 붙여요." },
    { t: "type", p: "저는 일주일에 두 번 운동해요", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — '~에'는 어떤 관사?", x: ["the"], why: "'일주일에'는 관사 a를 써서 a week예요 (the week X)." }
  ],

  email: [
    { t: "mc", q: "Dear로 시작할 때 가장 자연스러운 인사는?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 뒤에는 직함만 쓰지 말고 이름을 써요." },
    { t: "mc", q: "보고서를 첨부했다고 알릴 때", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "상대가 받을 바로 그 보고서이니 관사 the를 붙여요." },
    { t: "mc", q: "'마감이 언제예요?' =", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "이 일의 바로 그 마감이니 관사 the예요." },
    { t: "mc", q: "답장이 늦었을 때 사과 대신 쓸 수 있는 긍정적인 표현은?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience는 사과 없이도 예의 바르게 들려요. patients(환자들)와 철자를 구분하세요." },
    { t: "mc", q: "금요일 이메일 끝에 쓰기 좋은 인사는?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "주말 하나를 말하니 관사 a를 붙이고 weekend는 단수예요." },

    { t: "order", p: "보고서를 첨부했습니다", a: ["I've", "attached", "the", "report"], x: ["a"], why: "상대가 받을 바로 그 보고서이니 관사 the예요." },
    { t: "order", p: "회의 일정을 잡읍시다", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "아직 정하지 않은 회의 하나라서 관사 a예요." },
    { t: "order", p: "확인하고 다시 연락드릴게요", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 다시 연락드리다. to를 써요." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "금요일까지 파일 보내 주실 수 있나요?", a: ["by"], o: ["until", "in", "at"], why: "기한(~까지)은 by + 날짜예요." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "일정에 대해 여쭤보려고 연락드립니다", a: ["to"], o: ["for", "about", "at"], why: "목적은 I'm writing to + 동사원형이에요." },
    { t: "fill", q: "Thanks for all your hard __!", p: "그동안 정말 고생 많으셨어요", a: ["work"], o: ["works", "working", "job"], why: "work(일)는 셀 수 없는 명사라 복수 -s를 붙이지 않아요." },

    { t: "type", p: "저 내일 쉬어요 (휴무예요)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be동사 + off", x: ["do"], why: "쉬는 날은 be off로 말해요." },
    { t: "type", p: "파일을 첨부했습니다", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 바로 그 파일", x: ["a"], why: "상대가 받을 바로 그 파일이니 관사 the예요." },
    { t: "type", p: "좋은 주말 보내세요!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 주말 하나 앞 관사", x: ["the"], why: "주말 하나를 말하니 관사 a를 붙여요: a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "'식은 죽 먹기예요' =", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "관용구는 통째로 외워요: 관사 a를 넣고 cake는 단수예요." },
    { t: "mc", q: "'엄청 비싸요' =", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm은 모음 소리라 관사 an, leg는 자음 소리라 a예요." },
    { t: "mc", q: "'오늘은 여기까지 해요' (회의에서도 OK)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day는 관사 a까지 통째로 외우는 관용구예요." },
    { t: "mc", q: "'날아갈 듯 기뻐요' =", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine은 관사도 복수 -s도 없이 써요." },
    { t: "mc", q: "친구끼리만 쓰는 슬랭은?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap은 '진짜로'라는 뜻의 젊은 층 슬랭이에요. 나머지는 직장에서도 쓰는 관용구예요." },

    { t: "order", p: "잘 듣고 있어요", a: ["I'm", "all", "ears"], x: ["ear"], why: "'온몸이 귀'라는 표현이라 복수형 ears예요." },
    { t: "order", p: "공부 좀 열심히 해야 해", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books — 관사 the와 복수형 books를 그대로 써요." },
    { t: "order", p: "제 취향은 아니에요", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea를 통째로 외워요. my 자리에 관사를 넣지 않아요." },

    { t: "fill", q: "Kill two __ with one stone.", p: "일석이조", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "새 두 마리니까 복수형 birds예요." },
    { t: "fill", q: "Speak of the __!", p: "호랑이도 제 말 하면 온다더니!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "영어에선 호랑이 대신 devil(악마)이 와요." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "몸이 좀 안 좋아요", a: ["the"], o: ["a", "an", "my"], why: "under the weather — 관사 the를 그대로 써요." },

    { t: "type", p: "식은 죽 먹기예요", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 관사를 잊지 마세요", x: ["the"], why: "a piece of cake — 관사 a를 꼭 붙여요." },
    { t: "type", p: "잘되길 빌게요", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 손가락은 몇 개?", x: ["finger"], why: "손가락 두 개를 꼬니까 복수형 fingers예요." },
    { t: "type", p: "오늘은 여기까지 해요", a: ["Let's call it a day"], hint: "call it · day — the가 아니에요", x: ["the"], why: "call it a day — 관사 the가 아니라 a예요." }
  ]
};
