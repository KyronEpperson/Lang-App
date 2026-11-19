/* Chinese (simplified characters) -> Hanyu Pinyin with tone marks, the en-zh pron line (profile docs/profiles/en-zh.md §6).
   Deterministic: longest match over a built-in word list, so the same Chinese always gives the same pinyin.
   It throws «…» on any character that is not in the list (alone or inside a listed word). It also throws when longest match from the left and from the right
   disagree (two possible word breaks). A character with several readings that stands alone takes its listed default reading, and a
   possible missing compound (a doubled character, or a rarely-alone character such as 国 next to another one-character word) gives a warning «…».
   Rules: words written as units (Měiguórén, péngyou); 一 and 不 written with the tone that is said (yí ge, bú shì, kàn yi kàn);
   third tone before third tone keeps its dictionary mark (nǐ hǎo); neutral tone unmarked; apostrophe before a, o, e inside a word (Xī'ān);
   names and places capitalised; a text that ends in 。？！ is a sentence: its first letter is capitalised and its punctuation kept.
   usage: node respell.js "我是美国人。"  ->  我是美国人。 -> Wǒ shì Měiguórén.
   Word list format: "汉字 pin1yin1" separated by ";" or new lines; digits 1-4 tones, 5 neutral; v = ü; a space inside the pinyin is a word break;
   a capital letter in the pinyin is kept (proper names); "!" after a 一 syllable keeps yī (第一). Spaces in the input force word breaks. */
const fs = require('fs'), path = require('path'); let warned = [];
const LEX = `
我 wo3; 你 ni3; 您 nin2; 他 ta1; 她 ta1; 它 ta1; 我们 wo3men5; 你们 ni3men5; 他们 ta1men5; 她们 ta1men5; 咱们 zan2men5; 大家 da4jia1; 自己 zi4ji3
这 zhe4; 那 na4; 哪 na3; 这个 zhe4ge5; 那个 na4ge5; 哪个 na3ge5; 这些 zhe4xie1; 那些 na4xie1; 这儿 zher4; 那儿 nar4; 哪儿 nar3; 这里 zhe4li3; 那里 na4li3; 哪里 na3li3
谁 shei2; 什么 shen2me5; 怎么 zen3me5; 怎么样 zen3me5yang4; 为什么 wei4shen2me5; 多少 duo1shao5; 几 ji3; 多 duo1; 多大 duo1 da4; 多久 duo1jiu3; 什么时候 shen2me5 shi2hou5
是 shi4; 不 bu4; 没 mei2; 没有 mei2you3; 有 you3; 在 zai4; 很 hen3; 太 tai4; 真 zhen1; 非常 fei1chang2; 最 zui4; 最近 zui4jin4; 慢慢 man4man4; 慢慢儿 man4manr1; 好好 hao3hao3; 更 geng4; 比较 bi3jiao4; 有点儿 you3dianr3; 一点儿 yi1dianr3; 也 ye3; 都 dou1; 还 hai2; 还是 hai2shi5; 就 jiu4; 才 cai2; 再 zai4; 又 you4; 只 zhi3; 一起 yi1qi3; 一共 yi1gong4; 一定 yi1ding4; 一直 yi1zhi2; 一样 yi1yang4; 一下 yi1xia4; 一些 yi1xie1; 一半 yi1ban4; 一会儿 yi1huir4; 马上 ma3shang4; 已经 yi3jing1; 正在 zheng4zai4; 常常 chang2chang2; 经常 jing1chang2; 总是 zong3shi4; 有时候 you3 shi2hou5; 刚才 gang1cai2; 先 xian1; 然后 ran2hou4; 别 bie2; 不要 bu4 yao4; 可能 ke3neng2; 当然 dang1ran2; 其实 qi2shi2; 特别 te4bie2; 一般 yi1ban1
的 de5; 了 le5; 吗 ma5; 呢 ne5; 吧 ba5; 啊 a5; 着 zhe5; 过 guo5; 得 de5; 们 men5; 和 he2; 跟 gen1; 或者 huo4zhe3; 但是 dan4shi4; 可是 ke3shi4; 因为 yin1wei4; 所以 suo3yi3; 如果 ru2guo3; 那么 na4me5; 还有 hai2you3; 对 dui4; 给 gei3; 从 cong2; 到 dao4; 往 wang3; 离 li2; 比 bi3; 为 wei4; 把 ba3; 被 bei4
去 qu4; 来 lai2; 回 hui2; 回来 hui2lai2; 回去 hui2qu4; 回家 hui2jia1; 走 zou3; 跑 pao3; 坐 zuo4; 站 zhan4; 看 kan4; 看见 kan4jian4; 听 ting1; 听说 ting1shuo1; 说 shuo1; 说话 shuo1hua4; 读 du2; 写 xie3; 吃 chi1; 喝 he1; 吃饭 chi1fan4; 买 mai3; 卖 mai4; 要 yao4; 想 xiang3; 会 hui4; 能 neng2; 可以 ke3yi3; 应该 ying1gai1; 做 zuo4; 作业 zuo4ye4; 用 yong4; 找 zhao3; 等 deng3; 问 wen4; 叫 jiao4; 送 song4; 让 rang4; 请 qing3; 请问 qing3wen4; 帮 bang1; 帮忙 bang1mang2; 帮助 bang1zhu4; 住 zhu4; 开 kai1; 关 guan1; 穿 chuan1; 带 dai4; 拿 na2; 放 fang4; 爱 ai4; 学 xue2; 学习 xue2xi2; 教 jiao1; 懂 dong3; 忘 wang4; 忘了 wang4 le5; 记得 ji4de5; 知道 zhi1dao4; 了解 liao3jie3; 得到 de2dao4; 认识 ren4shi5; 觉得 jue2de5; 喜欢 xi3huan5; 希望 xi1wang4; 需要 xu1yao4; 打算 da3suan5; 准备 zhun3bei4; 开始 kai1shi3; 结束 jie2shu4; 工作 gong1zuo4; 上班 shang4ban1; 下班 xia4ban1; 上课 shang4ke4; 下课 xia4ke4; 上学 shang4xue2; 放学 fang4xue2; 起床 qi3chuang2; 睡觉 shui4jiao4; 休息 xiu1xi5; 洗澡 xi3zao3; 洗手 xi3shou3; 唱歌 chang4ge1; 跳舞 tiao4wu3; 游泳 you2yong3; 跑步 pao3bu4; 运动 yun4dong4; 打球 da3qiu2; 踢足球 ti1 zu2qiu2; 玩儿 wanr2; 玩 wan2; 旅游 lv3you2; 旅行 lv3xing2; 见面 jian4mian4; 见 jian4; 再见 zai4jian4; 开车 kai1che1; 打车 da3che1; 坐车 zuo4che1; 排队 pai2dui4; 付钱 fu4qian2; 扫码 sao3ma3; 打电话 da3 dian4hua4; 发 fa1; 上网 shang4wang3; 考试 kao3shi4; 放假 fang4jia4; 结婚 jie2hun1; 生病 sheng1bing4; 发烧 fa1shao1; 咳嗽 ke2sou5; 感冒 gan3mao4; 头疼 tou2teng2; 疼 teng2; 吃药 chi1 yao4; 看病 kan4bing4; 住院 zhu4yuan4; 笑 xiao4; 哭 ku1; 死 si3; 出 chu1; 出去 chu1qu4; 出来 chu1lai2; 进 jin4; 进来 jin4lai2; 进去 jin4qu4; 上 shang4; 下 xia4; 上去 shang4qu4; 下来 xia4lai2; 过来 guo4lai2; 不过 bu4guo4; 过年 guo4nian2; 过生日 guo4 sheng1ri4; 过马路 guo4 ma3lu4; 还钱 huan2 qian2; 还书 huan2 shu1; 很多 hen3 duo1; 到达 dao4da2; 出发 chu1fa1; 离开 li2kai1; 换 huan4; 试 shi4; 试试 shi4shi5; 尝尝 chang2chang5; 看看 kan4kan5; 想想 xiang3xiang5; 说说 shuo1shuo5; 等等 deng3deng5; 认真 ren4zhen1; 介绍 jie4shao4; 欢迎 huan1ying2; 祝 zhu4; 祝你 zhu4 ni3; 谢谢 xie4xie5; 感谢 gan3xie4; 对不起 dui4bu5qi3; 没关系 mei2 guan1xi5; 不客气 bu4 ke4qi5; 不好意思 bu4 hao3yi4si5; 麻烦 ma2fan5; 麻烦你 ma2fan5 ni3; 没事 mei2shi4; 没问题 mei2 wen4ti2; 好的 hao3 de5; 行 xing2; 不行 bu4 xing2; 可惜 ke3xi1; 加油 jia1you2; 小心 xiao3xin1; 担心 dan1xin1; 别担心 bie2 dan1xin1; 生气 sheng1qi4; 着急 zhao2ji2; 姓 xing4; 贵姓 gui4xing4; 叫做 jiao4zuo4; 喂 wei2; 听不懂 ting1 bu5 dong3; 看不懂 kan4 bu5 dong3; 听懂 ting1dong3; 看懂 kan4dong3; 吃完 chi1wan2; 做完 zuo4wan2; 完 wan2; 懂了 dong3 le5; 好了 hao3 le5; 到了 dao4 le5; 走吧 zou3 ba5; 算了 suan4 le5
是不是 shi4 bu5 shi4; 喜不喜欢 xi3 bu5 xi3huan5; 认不认识 ren4 bu5 ren4shi5; 可不可以 ke3 bu5 ke3yi3; 知不知道 zhi1 bu5 zhi1dao4; 有没有 you3 mei2you3; 去没去 qu4 mei2 qu4
好 hao3; 坏 huai4; 大 da4; 小 xiao3; 少 shao3; 高 gao1; 矮 ai3; 长 chang2; 长大 zhang3da4; 长得 zhang3 de5; 校长 xiao4zhang3; 短 duan3; 新 xin1; 旧 jiu4; 老 lao3; 快 kuai4; 慢 man4; 早 zao3; 晚 wan3; 冷 leng3; 热 re4; 暖和 nuan3huo5; 凉快 liang2kuai5; 忙 mang2; 累 lei4; 饿 e4; 渴 ke3; 困 kun4; 远 yuan3; 近 jin4; 贵 gui4; 便宜 pian2yi5; 胖 pang4; 瘦 shou4; 美 mei3; 酸 suan1; 甜 tian2; 苦 ku3; 辣 la4; 咸 xian2; 香 xiang1; 好吃 hao3chi1; 好喝 hao3he1; 好看 hao3kan4; 好听 hao3ting1; 好玩儿 hao3wanr2; 难 nan2; 容易 rong2yi4; 简单 jian3dan1; 漂亮 piao4liang5; 帅 shuai4; 可爱 ke3'ai4; 舒服 shu1fu5; 不舒服 bu4 shu1fu5; 方便 fang1bian4; 干净 gan1jing4; 安静 an1jing4; 热闹 re4nao5; 有名 you3ming2; 重要 zhong4yao4; 有意思 you3 yi4si5; 没意思 mei2 yi4si5; 高兴 gao1xing4; 快乐 kuai4le4; 开心 kai1xin1; 难过 nan2guo4; 对 dui4; 错 cuo4; 不错 bu4cuo4; 真的 zhen1 de5; 一样 yi1yang4; 差不多 cha4bu5duo1; 年轻 nian2qing1; 聪明 cong1ming5; 厉害 li4hai5; 健康 jian4kang1; 危险 wei1xian3; 安全 an1quan2; 清楚 qing1chu5; 明白 ming2bai5; 有空 you3kong4; 有钱 you3qian2; 没有钱 mei2you3 qian2; 晴 qing2; 阴 yin1
红 hong2; 白 bai2; 黑 hei1; 绿 lv4; 黄 huang2; 蓝 lan2; 红色 hong2se4; 白色 bai2se4; 黑色 hei1se4; 绿色 lv4se4; 黄色 huang2se4; 蓝色 lan2se4; 颜色 yan2se4
晚安 wan3an1; 早上好 zao3shang5 hao3; 下午好 xia4wu3 hao3; 晚上好 wan3shang5 hao3; 早 zao3; 你好 ni3 hao3; 您好 nin2 hao3; 大家好 da4jia1 hao3; 老师好 lao3shi1 hao3
零 ling2; 一 yi1; 二 er4; 三 san1; 四 si4; 五 wu3; 六 liu4; 七 qi1; 八 ba1; 九 jiu3; 十 shi2; 百 bai3; 千 qian1; 万 wan4; 两 liang3; 半 ban4; 第 di4; 第一 di4yi1!; 每 mei3; 号 hao4; 号码 hao4ma3; 电话号码 dian4hua4 hao4ma3
个 ge5; 本 ben3; 杯 bei1; 张 zhang1; 件 jian4; 条 tiao2; 双 shuang1; 位 wei4; 口 kou3; 碗 wan3; 瓶 ping2; 块 kuai4; 斤 jin1; 辆 liang4; 家 jia1; 次 ci4; 岁 sui4; 点 dian3; 分 fen1; 刻 ke4; 毛 mao2; 元 yuan2; 种 zhong3; 些 xie1; 台 tai2; 节 jie2; 层 ceng2; 盘 pan2; 份 fen4; 支 zhi1; 间 jian1; 套 tao4; 部 bu4; 段 duan4; 遍 bian4; 楼 lou2; 公斤 gong1jin1; 公里 gong1li3; 分钟 fen1zhong1; 小时 xiao3shi2; 钟头 zhong1tou5
年 nian2; 月 yue4; 日 ri4; 天 tian1; 周 zhou1; 今天 jin1tian1; 明天 ming2tian1; 昨天 zuo2tian1; 后天 hou4tian1; 前天 qian2tian1; 今年 jin1nian2; 明年 ming2nian2; 去年 qu4nian2; 早上 zao3shang5; 上午 shang4wu3; 中午 zhong1wu3; 下午 xia4wu3; 晚上 wan3shang5; 夜里 ye4li5; 现在 xian4zai4; 以前 yi3qian2; 以后 yi3hou4; 时候 shi2hou5; 时间 shi2jian1; 星期 xing1qi1; 星期一 xing1qi1yi1!; 星期二 xing1qi1'er4; 星期三 xing1qi1san1; 星期四 xing1qi1si4; 星期五 xing1qi1wu3; 星期六 xing1qi1liu4; 星期天 xing1qi1tian1; 星期日 xing1qi1ri4; 周末 zhou1mo4; 一月 yi1yue4!; 二月 er4yue4; 三月 san1yue4; 四月 si4yue4; 五月 wu3yue4; 六月 liu4yue4; 七月 qi1yue4; 八月 ba1yue4; 九月 jiu3yue4; 十月 shi2yue4; 十一月 shi2yi1!yue4; 十二月 shi2'er4yue4; 每天 mei3tian1; 天天 tian1tian1; 生日 sheng1ri4; 春节 Chun1jie2; 新年 xin1nian2; 春天 chun1tian1; 夏天 xia4tian1; 秋天 qiu1tian1; 冬天 dong1tian1; 天气 tian1qi4; 下雨 xia4yu3; 下雪 xia4xue3; 雨 yu3; 雪 xue3; 风 feng1; 刮风 gua1feng1; 晴天 qing2tian1; 度 du4
人 ren2; 家人 jia1ren2; 男 nan2; 女 nv3; 男人 nan2ren2; 女人 nv3ren2; 男的 nan2 de5; 女的 nv3 de5; 孩子 hai2zi5; 小孩儿 xiao3hair2; 朋友 peng2you5; 男朋友 nan2peng2you5; 女朋友 nv3peng2you5; 同学 tong2xue2; 同事 tong2shi4; 老师 lao3shi1; 学生 xue2sheng5; 大学生 da4xue2sheng1; 留学生 liu2xue2sheng1; 医生 yi1sheng1; 护士 hu4shi5; 司机 si1ji1; 师傅 shi1fu5; 服务员 fu2wu4yuan2; 老板 lao3ban3; 经理 jing1li3; 律师 lv4shi1; 工程师 gong1cheng2shi1; 警察 jing3cha2; 先生 xian1sheng5; 女士 nv3shi4; 小姐 xiao3jie3; 美女 mei3nv3; 帅哥 shuai4ge1; 客人 ke4ren5; 邻居 lin2ju1; 外国人 wai4guo2ren2; 老外 lao3wai4
家 jia1; 爸爸 ba4ba5; 妈妈 ma1ma5; 父母 fu4mu3; 哥哥 ge1ge5; 姐姐 jie3jie5; 弟弟 di4di5; 妹妹 mei4mei5; 爷爷 ye2ye5; 奶奶 nai3nai5; 姥姥 lao3lao5; 姥爷 lao3ye5; 外婆 wai4po2; 外公 wai4gong1; 儿子 er2zi5; 女儿 nv3'er2; 丈夫 zhang4fu5; 妻子 qi1zi5; 老公 lao3gong1; 老婆 lao3po5; 爱人 ai4ren5; 叔叔 shu1shu5; 阿姨 a1yi2; 兄弟姐妹 xiong1di4 jie3mei4; 独生子女 du2sheng1 zi3nv3; 宝宝 bao3bao5; 狗 gou3; 猫 mao1; 马 ma3; 鸟 niao3; 鱼 yu2; 熊猫 xiong2mao1; 动物 dong4wu4
国 guo2; 外国 wai4guo2; 哪国人 na3 guo2 ren2; 姓王 xing4 Wang2; 姓李 xing4 Li3; 姓张 xing4 Zhang1; 姓刘 xing4 Liu2; 姓陈 xing4 Chen2; 中国 Zhong1guo2; 美国 Mei3guo2; 英国 Ying1guo2; 法国 Fa3guo2; 德国 De2guo2; 日本 Ri4ben3; 韩国 Han2guo2; 加拿大 Jia1na2da4; 墨西哥 Mo4xi1ge1; 澳大利亚 Ao4da4li4ya4; 中国人 Zhong1guo2ren2; 美国人 Mei3guo2ren2; 英国人 Ying1guo2ren2; 法国人 Fa3guo2ren2; 日本人 Ri4ben3ren2; 韩国人 Han2guo2ren2; 加拿大人 Jia1na2da4ren2; 墨西哥人 Mo4xi1ge1ren2; 北京 Bei3jing1; 北京大学 Bei3jing1 Da4xue2; 上海 Shang4hai3; 西安 Xi1an1; 成都 Cheng2du1; 广州 Guang3zhou1; 深圳 Shen1zhen4; 香港 Xiang1gang3; 杭州 Hang2zhou1; 南京 Nan2jing1; 台湾 Tai2wan1; 纽约 Niu3yue1; 旧金山 Jiu4jin1shan1; 洛杉矶 Luo4shan1ji1; 芝加哥 Zhi1jia1ge1; 西雅图 Xi1ya3tu2; 长城 Chang2cheng2; 天安门 Tian1an1men2; 故宫 Gu4gong1; 外滩 Wai4tan1; 兵马俑 Bing1ma3yong3; 中文 Zhong1wen2; 汉语 Han4yu3; 英文 Ying1wen2; 英语 Ying1yu3; 普通话 Pu3tong1hua4; 汉字 Han4zi4; 拼音 pin1yin1; 声调 sheng1diao4; 话 hua4; 字 zi4; 名字 ming2zi5; 意思 yi4si5; 问题 wen4ti2; 事 shi4; 事情 shi4qing5
王明 Wang2 Ming2; 李娜 Li3 Na4; 张伟 Zhang1 Wei3; 刘洋 Liu2 Yang2; 陈静 Chen2 Jing4; 赵丽 Zhao4 Li4; 小王 Xiao3 Wang2; 小李 Xiao3 Li3; 小张 Xiao3 Zhang1; 小陈 Xiao3 Chen2; 老王 Lao3 Wang2; 安娜 An1na4; 马克 Ma3ke4; 王老师 Wang2 lao3shi1; 李老师 Li3 lao3shi1; 张老师 Zhang1 lao3shi1; 王先生 Wang2 xian1sheng5; 李女士 Li3 nv3shi4; 陈医生 Chen2 yi1sheng1; 王阿姨 Wang2 a1yi2; 李叔叔 Li3 shu1shu5
饭 fan4; 米饭 mi3fan4; 炒饭 chao3fan4; 菜 cai4; 中国菜 Zhong1guo2 cai4; 面 mian4; 面条 mian4tiao2; 饺子 jiao3zi5; 包子 bao1zi5; 小笼包 xiao3long2bao1; 馒头 man2tou5; 豆腐 dou4fu5; 麻婆豆腐 ma2po2 dou4fu5; 宫保鸡丁 gong1bao3 ji1ding1; 北京烤鸭 Bei3jing1 kao3ya1; 烤鸭 kao3ya1; 火锅 huo3guo1; 肉 rou4; 牛肉 niu2rou4; 猪肉 zhu1rou4; 鸡肉 ji1rou4; 鸡 ji1; 鸡蛋 ji1dan4; 蛋 dan4; 汤 tang1; 鱼 yu2; 蔬菜 shu1cai4; 青菜 qing1cai4; 水果 shui3guo3; 苹果 ping2guo3; 香蕉 xiang1jiao1; 西瓜 xi1gua1; 橙子 cheng2zi5; 葡萄 pu2tao5; 早饭 zao3fan4; 午饭 wu3fan4; 晚饭 wan3fan4; 点心 dian3xin5; 茶 cha2; 绿茶 lv4cha2; 红茶 hong2cha2; 水 shui3; 开水 kai1shui3; 冰水 bing1shui3; 咖啡 ka1fei1; 牛奶 niu2nai3; 奶茶 nai3cha2; 豆浆 dou4jiang1; 果汁 guo3zhi1; 啤酒 pi2jiu3; 酒 jiu3; 可乐 ke3le4; 饮料 yin3liao4; 糖 tang2; 盐 yan2; 冰 bing1; 热的 re4 de5; 冰的 bing1 de5; 辣的 la4 de5; 不辣 bu4 la4; 微辣 wei1la4; 筷子 kuai4zi5; 勺子 shao2zi5; 杯子 bei1zi5; 盘子 pan2zi5; 菜单 cai4dan1; 买单 mai3dan1; 打包 da3bao1; 外卖 wai4mai4; 饭馆 fan4guan3; 饭店 fan4dian4; 餐厅 can1ting1; 食堂 shi2tang2; 咖啡馆 ka1fei1guan3; 好饿 hao3 e4; 饱 bao3; 吃饱 chi1bao3; 来 lai2; 再来 zai4 lai2; 点菜 dian3cai4
钱 qian2; 多少钱 duo1shao5 qian2; 人民币 ren2min2bi4; 美元 mei3yuan2; 价钱 jia4qian5; 现金 xian4jin1; 信用卡 xin4yong4ka3; 手机 shou3ji1; 电脑 dian4nao3; 电视 dian4shi4; 电影 dian4ying3; 电话 dian4hua4; 东西 dong1xi5; 衣服 yi1fu5; 裤子 ku4zi5; 裙子 qun2zi5; 鞋 xie2; 鞋子 xie2zi5; 帽子 mao4zi5; 袜子 wa4zi5; 衬衫 chen4shan1; 外套 wai4tao4; 包 bao1; 书包 shu1bao1; 伞 san3; 雨伞 yu3san3; 书 shu1; 本子 ben3zi5; 笔 bi3; 纸 zhi3; 地图 di4tu2; 照片 zhao4pian4; 礼物 li3wu4; 票 piao4; 车票 che1piao4; 机票 ji1piao4; 门票 men2piao4; 护照 hu4zhao4; 钥匙 yao4shi5; 行李 xing2li5; 箱子 xiang1zi5; 大小 da4xiao3; 号 hao4; 大号 da4hao4; 中号 zhong1hao4; 小号 xiao3hao4; 打折 da3zhe2; 便宜点儿 pian2yi5 dianr3; 商店 shang1dian4; 超市 chao1shi4; 商场 shang1chang3; 市场 shi4chang3; 书店 shu1dian4; 药店 yao4dian4; 药 yao4; 面包 mian4bao1
桌子 zhuo1zi5; 椅子 yi3zi5; 床 chuang2; 门 men2; 窗户 chuang1hu5; 房间 fang2jian1; 房子 fang2zi5; 厕所 ce4suo3; 洗手间 xi3shou3jian1; 厨房 chu2fang2; 灯 deng1; 空调 kong1tiao2; 冰箱 bing1xiang1; 杯 bei1
地方 di4fang5; 这边 zhe4bian1; 那边 na4bian1; 哪边 na3bian1; 上边 shang4bian5; 下边 xia4bian5; 里边 li3bian5; 外边 wai4bian5; 前边 qian2bian5; 后边 hou4bian5; 左边 zuo3bian5; 右边 you4bian5; 旁边 pang2bian1; 对面 dui4mian4; 中间 zhong1jian1; 附近 fu4jin4; 里 li3; 外 wai4; 前 qian2; 后 hou4; 左 zuo3; 右 you4; 东 dong1; 南 nan2; 西 xi1; 北 bei3; 中 zhong1; 边 bian1; 往前走 wang3 qian2 zou3; 一直走 yi1zhi2 zou3; 拐 guai3; 左拐 zuo3 guai3; 右拐 you4 guai3; 路口 lu4kou3; 红绿灯 hong2lv4deng1; 路 lu4; 马路 ma3lu4; 街 jie1; 远吗 yuan3 ma5
学校 xue2xiao4; 大学 da4xue2; 中学 zhong1xue2; 小学 xiao3xue2; 教室 jiao4shi4; 图书馆 tu2shu1guan3; 公司 gong1si1; 办公室 ban4gong1shi4; 银行 yin2hang2; 医院 yi1yuan4; 酒店 jiu3dian4; 宾馆 bin1guan3; 公园 gong1yuan2; 博物馆 bo2wu4guan3; 机场 ji1chang3; 火车站 huo3che1zhan4; 地铁站 di4tie3zhan4; 公交车站 gong1jiao1che1 zhan4; 车站 che1zhan4; 站 zhan4; 厂 chang3; 城市 cheng2shi4; 农村 nong2cun1; 国家 guo2jia1; 首都 shou3du1; 世界 shi4jie4
车 che1; 汽车 qi4che1; 出租车 chu1zu1che1; 公交车 gong1jiao1che1; 地铁 di4tie3; 火车 huo3che1; 火车票 huo3che1piao4; 高铁 gao1tie3; 飞机 fei1ji1; 自行车 zi4xing2che1; 船 chuan2; 骑 qi2; 坐飞机 zuo4 fei1ji1; 坐地铁 zuo4 di4tie3; 走路 zou3lu4; 停 ting2; 到 dao4; 慢点儿 man4 dianr3; 快点儿 kuai4 dianr3
书 shu1; 课 ke4; 课文 ke4wen2; 生词 sheng1ci2; 句子 ju4zi5; 语法 yu3fa3; 作业 zuo4ye4; 考试 kao3shi4; 专业 zhuan1ye4; 工资 gong1zi1; 会议 hui4yi4; 开会 kai1hui4; 邮件 you2jian4; 电子邮件 dian4zi3 you2jian4; 微信 Wei1xin4; 网 wang3; 中文课 Zhong1wen2 ke4
身体 shen1ti3; 头 tou2; 头发 tou2fa5; 眼睛 yan3jing5; 耳朵 er3duo5; 鼻子 bi2zi5; 嘴 zui3; 手 shou3; 脚 jiao3; 肚子 du4zi5; 心 xin1; 牙 ya2; 病 bing4; 医 yi1; 救命 jiu4ming4; 帮帮我 bang1bang5 wo3
心 xin1; 爱好 ai4hao4; 音乐 yin1yue4; 电影院 dian4ying3yuan4; 足球 zu2qiu2; 篮球 lan2qiu2; 游戏 you2xi4; 书法 shu1fa3; 画画儿 hua4huar4; 照相 zhao4xiang4; 拍照 pai1zhao4; 上网 shang4wang3
火 huo3; 木 mu4; 山 shan1; 田 tian2; 力 li4; 目 mu4; 耳 er3; 刀 dao1; 土 tu3; 石 shi2; 竹 zhu2; 米 mi3; 夫 fu1; 出 chu1; 入 ru4; 林 lin2; 森 sen1; 休 xiu1; 子 zi3; 明 ming2; 日 ri4; 月 yue4; 水 shui3; 口 kou3; 人 ren2; 大 da4; 小 xiao3; 中 zhong1; 上 shang4; 下 xia4; 门 men2; 雨 yu3; 手 shou3; 心 xin1; 女 nv3; 王 wang2; 天 tian1; 太 tai4; 本 ben3; 生 sheng1; 好 hao3
妈 ma1; 麻 ma2; 骂 ma4; 吗 ma5; 买 mai3; 卖 mai4; 汤 tang1; 糖 tang2; 问 wen4; 吻 wen3; 睡 shui4; 八 ba1; 拔 ba2; 爸 ba4; 打 da3; 烟 yan1; 眼 yan3; 七 qi1; 起 qi3; 气 qi4; 有 you3; 又 you4; 笑 xiao4; 十 shi2; 四 si4; 是 shi4; 晴 qing2; 请 qing3; 书 shu1; 熟 shu2; 汤 tang1; 怕 pa4; 菜 cai4; 喝 he1; 热 re4; 谢 xie4; 去 qu4; 绿 lv4; 女 nv3; 雪 xue3; 学 xue2; 云 yun2; 对 dui4; 六 liu4; 吃 chi1; 日 ri4; 二 er4
`;
/* characters read with several sounds: alone they take this reading only when listed above; 只 after a number or 这 / 那 is zhī (measure word) */
const NUMCH = '零一二三四五六七八九十百千万两'; const DIGIT = '零一二三四五六七八九十';
const W = new Map(); let MAXL = 1;
function addLex(text) {
  text.split(/[;\n]/).map(s => s.trim()).filter(Boolean).forEach(e => {
    const i = e.indexOf(' '); if (i < 1) throw new Error('bad entry «' + e + '»');
    const w = e.slice(0, i), p = e.slice(i + 1).trim(); W.set(w, p); if (w.length > MAXL) MAXL = w.length;
  });
}
addLex(LEX);
const extra = path.join(__dirname, 'lexicon.txt'); if (fs.existsSync(extra)) addLex(fs.readFileSync(extra, 'utf8').replace(/^#.*$/gm, '')); /* optional, owned by the lead */
const MARK = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ' };
function markSyl(s, t) { /* s toneless (may start with a capital), t 1-5 */
  s = s.replace(/v/g, 'ü').replace(/V/g, 'Ü');
  if (t === 5 || t === 0) return s;
  const low = s.toLowerCase(); let k = -1;
  if (low.includes('a')) k = low.indexOf('a'); else if (low.includes('e')) k = low.indexOf('e'); else if (low.includes('ou')) k = low.indexOf('o');
  else { for (let j = low.length - 1; j >= 0; j--) if ('iuoü'.includes(low[j])) { k = j; break; } }
  if (k < 0) throw new Error('no vowel in «' + s + '»');
  const v = low[k], m = MARK[v][t - 1]; const cap = s[k] !== low[k];
  return s.slice(0, k) + (cap ? m.toUpperCase() : m) + s.slice(k + 1);
}
/* a pinyin entry -> words -> syllables [{s, t, keep}] ; one syllable per character except erhua (…r) */
function parseEntry(p) {
  return p.split(' ').map(wd => { const out = []; const re = /([A-Za-züÜv']+?)([1-5])(!?)/g; let m, used = 0;
    while ((m = re.exec(wd))) { out.push({ s: m[1].replace(/'/g, ''), t: +m[2], keep: !!m[3] }); used = re.lastIndex; }
    if (used !== wd.length) throw new Error('bad pinyin «' + wd + '»'); return out; });
}
const PUNCT = { '。': '.', '，': ',', '？': '?', '！': '!', '、': ',', '：': ':', '；': ';', '.': '.', ',': ',', '?': '?', '!': '!', ':': ':', ';': ';' };
const DROP = /[“”‘’"'《》（）()「」『』…\-—～~·]/;
const isHan = c => /[㐀-鿿豈-﫿]/.test(c);
function fwd(cs, chunk) { const out = []; for (let i = 0; i < cs.length;) { let hit = null;
    for (let L = Math.min(MAXL, cs.length - i); L >= 1; L--) { const w = cs.slice(i, i + L).join(''); if (W.has(w)) { hit = w; break; } }
    if (!hit) throw new Error('unknown word: «' + cs[i] + '» in «' + chunk + '» (add it to the word list)'); out.push(hit); i += [...hit].length; } return out; }
function bwd(cs, chunk) { const out = []; for (let j = cs.length; j > 0;) { let hit = null;
    for (let L = Math.min(MAXL, j); L >= 1; L--) { const w = cs.slice(j - L, j).join(''); if (W.has(w)) { hit = w; break; } }
    if (!hit) throw new Error('unknown word: «' + cs[j - 1] + '» in «' + chunk + '» (add it to the word list)'); out.unshift(hit); j -= [...hit].length; } return out; }
function segRun(cs, chunk) { /* longest match from the left and from the right; if they disagree it throws rather than choose */
  const f = fwd(cs, chunk), b = bwd(cs, chunk); if (f.join('/') === b.join('/')) return f;
  throw new Error('two possible word breaks in «' + chunk + '»: ' + f.join('/') + ' or ' + b.join('/') + ' (add the longer phrase with its pinyin to the word list, e.g. "没有钱 mei2you3 qian2")'); }
function segment(chunk) { /* -> tokens {w, words:[[syl]]} or {p} */
  const toks = []; const cs = [...chunk]; let run = [];
  const flush = () => { if (run.length) segRun(run, chunk).forEach(w => toks.push({ w, words: parseEntry(W.get(w)) })); run = []; };
  for (const c of cs) {
    if (PUNCT[c]) { flush(); toks.push({ p: PUNCT[c] }); continue; }
    if (DROP.test(c)) { flush(); continue; }
    if (!isHan(c)) throw new Error('not a Chinese character: «' + c + '» in «' + chunk + '» (write numbers in characters, no Latin letters, no 〇: avoid years)');
    run.push(c);
  }
  flush(); return toks;
}
/* characters that are rarely a word on their own: alone next to another one-character word they get a warning, because a compound may be missing from the list */
const WARN = new Set([...'国外最火电店馆场站机学语文汉期星今昨钟午服务员饭']);
function warnCheck(toks, src) {
  for (let i = 0; i < toks.length; i++) { const a = toks[i], b = toks[i + 1]; if (!a.w || a.num) continue;
    if (b && b.w && a.w === b.w && [...a.w].length === 1) warned.push('«' + a.w + b.w + '» is two words here (' + src + '): add the doubled form to the word list if it is one word');
    else if ([...a.w].length === 1 && WARN.has(a.w) && ((b && b.w && [...b.w].length === 1) || (toks[i - 1] && toks[i - 1].w && [...toks[i - 1].w].length === 1))) warned.push('check the word break around «' + a.w + '» in «' + src + '»'); }
}
function respell(text) {
  const src = String(text).normalize('NFC').trim(); if (!src) return '';
  let toks = []; src.split(/\s+/).forEach(ch => { toks = toks.concat(segment(ch)); });
  /* numbers: a run of number characters is one word, broken after 百 / 千 / 万 and around 零 (sānbǎi wǔshí, yìbǎi líng wǔ); 第 joins its number */
  const merged = [];
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (t.w && [...t.w].every(c => NUMCH.includes(c)) && t.w !== '两') {
      let run = t.w, j = i + 1; while (j < toks.length && toks[j].w && [...toks[j].w].every(c => NUMCH.includes(c)) && toks[j].w !== '两') run += toks[j++].w;
      const groups = []; let cur = '';
      for (const c of run) { if (c === '零') { if (cur) groups.push(cur); groups.push('零'); cur = ''; continue; } cur += c; if ('百千万'.includes(c)) { groups.push(cur); cur = ''; } }
      if (cur) groups.push(cur);
      const prevDi = merged.length && merged[merged.length - 1].w === '第';
      groups.forEach((g, gi) => { const syl = [...g].map(c => parseEntry(W.get(c))[0][0]); const tok = { w: g, words: [syl.map(x => Object.assign({}, x))], num: true };
        if (gi === 0 && prevDi) { const d = merged.pop(); tok.w = '第' + g; tok.words = [d.words[0].concat(tok.words[0])]; tok.words[0].forEach(x => { if (x.s === 'yi') x.keep = true; }); }
        merged.push(tok); });
      i = j - 1; continue;
    }
    merged.push(t);
  }
  toks = merged; warnCheck(toks, src);
  /* flatten syllables with their characters for the tone rules */
  const flat = []; toks.forEach((t, ti) => { if (t.p) return; let ci = 0;
    t.words.forEach((wd, wi) => wd.forEach((sy, si) => { let ch = [...t.w][ci] || ''; ci++; if (/r$/.test(sy.s) && sy.s !== 'er' && [...t.w][ci] === '儿') ci++; flat.push({ sy, ch, ti, wi, si, tok: t }); })); });
  const under = x => (x.ch === '个' && x.sy.t === 5) ? 4 : x.sy.t;
  for (let k = 0; k < flat.length; k++) {
    const x = flat[k], prev = flat[k - 1], next = flat[k + 1]; const brk = next && next.ti !== x.ti && toks.slice(x.ti + 1, next.ti).some(t => t.p);
    if (x.ch === '不' && x.sy.t === 4) {
      const pt = prev && toks[prev.ti], nt = next && toks[next.ti];
      if (prev && next && !brk && (prev.ch === next.ch || (pt && nt && pt !== nt && pt.w === nt.w))) x.sy.t = 5;
      else if (next && !brk && under(next) === 4) x.sy.t = 2;
    }
    if (x.ch === '一' && x.sy.t === 1 && !x.sy.keep) {
      const pc = prev ? prev.ch : '', nc = next && !brk ? next.ch : '';
      if (prev && next && !brk && prev.ch === next.ch && prev.ti !== next.ti) x.sy.t = 5;         /* 看一看 kàn yi kàn */
      else if (!nc || DIGIT.includes(nc) || '月号日'.includes(nc) || (nc === '点' && !/r$/.test(next.sy.s)) || (pc && (NUMCH.includes(pc) || pc === '第'))) { /* stays yī: alone, counting, dates, 一点 (one o'clock), after another number or 第 */ }
      else x.sy.t = under(next) === 4 ? 2 : 4;
    }
    if (x.ch === '只' && x.sy.s === 'zhi' && x.sy.t === 3 && prev && (NUMCH.includes(prev.ch) || '这那哪几每'.includes(prev.ch)) && toks[x.ti].w === '只') x.sy.t = 1;
  }
  /* write */
  let out = ''; let capNext = true; const sentence = /[。？！.?!]$/.test(src);
  toks.forEach(t => {
    if (t.p) { out += t.p; if ('.?!'.includes(t.p)) capNext = true; return; }
    t.words.forEach(wd => {
      let w = '';
      wd.forEach((sy, si) => { let s = markSyl(sy.s, sy.t); if (si > 0 && /^[aoeāáǎàōóǒòēéěè]/i.test(s)) s = "'" + s; w += s; });
      if (sentence && capNext) { w = w[0].toUpperCase() + w.slice(1); }
      capNext = false; out += (out && !/^$/.test(out) ? ' ' : '') + w;
    });
  });
  return out.replace(/ ([,.?!:;])/g, '$1').trim();
}
/* pronPattern: built from the same rules (initial + final, tone mark on the right vowel, optional erhua r, apostrophe before a, o, e inside a word) */
function pattern() {
  const F = ['a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'er', 'i', 'ia', 'ie', 'iao', 'iu', 'ian', 'in', 'iang', 'ing', 'iong', 'u', 'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang', 'ü', 'üe', 'ue'];
  const cls = { a: '[aāáǎà]', e: '[eēéěè]', i: '[iīíǐì]', o: '[oōóǒò]', u: '[uūúǔù]', 'ü': '[üǖǘǚǜ]' };
  const capCls = { a: '[AĀÁǍÀ]', e: '[EĒÉĚÈ]', o: '[OŌÓǑÒ]' };
  const markPos = f => { if (f.includes('a')) return f.indexOf('a'); if (f.includes('e')) return f.indexOf('e'); if (f.includes('ou')) return f.indexOf('o'); for (let j = f.length - 1; j >= 0; j--) if ('iuoü'.includes(f[j])) return j; return -1; };
  const fin = (f, cap) => { const k = markPos(f); return [...f].map((c, j) => j === k ? (cap && j === 0 ? capCls[c] : cls[c]) : (cap && j === 0 ? c.toUpperCase() : c)).join(''); };
  const sorted = F.slice().sort((a, b) => b.length - a.length);
  const FIN = '(?:' + sorted.map(f => fin(f)).join('|') + ')r?';
  const INIT = '(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])';
  const CINIT = '(?:Zh|Ch|Sh|[BPMFDTNLGKHJQXRZCSYW])';
  const VFIN_CAP = '(?:' + sorted.filter(f => /^[aoe]/.test(f)).map(f => fin(f, true)).join('|') + ')r?';
  const VFIN = '(?:' + sorted.filter(f => /^[aoe]/.test(f)).map(f => fin(f)).join('|') + ')r?';
  const FIRST = '(?:' + INIT + FIN + '|' + CINIT + FIN + '|' + VFIN + '|' + VFIN_CAP + ')';
  const NEXT = '(?:' + INIT + FIN + "|'" + VFIN + ')';
  const WORD = FIRST + NEXT + '*';
  const P = '[,.?!:;]?';
  const MARKED = 'āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜĀÁǍÀĒÉĚÈŌÓǑÒ';
  return '^(?=[^\\n]*[' + MARKED + ']|(?:ma|ne|ba|le|de|a|zhe|guo|men|ge)[.?!]?$)' + WORD + P + '(?: ' + WORD + P + ')*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, W };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0);
}
