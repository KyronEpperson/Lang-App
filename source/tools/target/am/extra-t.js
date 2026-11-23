/* en-am Core words extras (writer EN-AM-T). EXAMPLES: card | sentence | English. DIALOG: card | A | B | English A / English B. No pron fields here, but every Amharic word is in lexicon.txt (checked with respell.js). Cards: decks-t.js. */
exports.DIALOG = `
አዎ | ተማሪ ነህ? | አዎ ተማሪ ነኝ | Are you a student? / Yes, I'm a student.
አይደለም | ይህ ቡና ነው? | አይደለም ሻይ ነው | Is this coffee? / No, it's tea.
እሺ | ነገ ወደ ገበያ እንሄዳለን | እሺ | We're going to the market tomorrow. / OK.
ይቅርታ | ይቅርታ ሆቴሉ የት ነው? | ወደ ቀኝ ይሂዱ | Excuse me, where is the hotel? / Go right.
የለም | ቡና አለ? | የለም ሻይ አለ | Is there coffee? / No, there's tea.
ና | ና ቡና ጠጣ! | እሺ አመሰግናለሁ | Come, have a coffee! / OK, thank you.
`;

exports.EXAMPLES = `
ቀን | መልካም ቀን ትግስት! | Have a nice day, Tigist!
ብር | ሻይ አራት ብር ነው። | Tea is four birr.
ትምህርት | ዛሬ ትምህርት አለ። | There's class today.
መኪና | ቀይ መኪና አለኝ። | I have a red car.
እግዚአብሔር | ደህና ነኝ እግዚአብሔር ይመስገን። | I'm fine, thank God.
ነው | ይህ ቤቴ ነው። | This is my house.
አለ | በኢትዮጵያ ብዙ ቡና አለ። | There's a lot of coffee in Ethiopia.
ሂድ | ወደ ቀኝ ሂድ። | Go right. (to a man)
ሂጂ | ወደ ግራ ሂጂ። | Go left. (to a woman)
ይሂዱ | ቀጥ ብለው ይሂዱ። | Go straight ahead. (polite)
ነይ | ትግስት ነይ! | Tigist, come here!
ተቀመጥ | እባክህ ተቀመጥ። | Please sit down. (to a man)
ተቀመጪ | እባክሽ ተቀመጪ። | Please sit down. (to a woman)
ይቀመጡ | እባክዎ ይቀመጡ። | Please have a seat. (polite)
ጠጣ | አቶ ከበደ ቡና ጠጣ። | Mr. Kebede drank coffee.
ጠጣች | አበበች ሻይ ጠጣች። | Abebech drank tea.
እጠጣለሁ | ጠዋት ሻይ እጠጣለሁ። | I drink tea in the morning.
ትጠጣለህ | ቡና ትጠጣለህ? | Do you drink coffee? (to a man)
ትጠጫለሽ | ሻይ ትጠጫለሽ? | Do you drink tea? (to a woman)
እበላለሁ | ዛሬ ዶሮ ወጥ እበላለሁ። | Today I'm eating chicken stew.
ትወዳለህ | ክትፎ ትወዳለህ? | Do you like kitfo? (to a man)
ትወጃለሽ | እንጀራ ትወጃለሽ? | Do you like injera? (to a woman)
እወስዳለሁ | ምስር ወጥ እወስዳለሁ። | I'll have the lentil stew.
ይሻለኛል | ሻይ ይሻለኛል። | I'd rather have tea.
ይታጠፉ | ወደ ግራ ይታጠፉ። | Turn left. (polite)
ትልቅ | ቤቱ በጣም ትልቅ ነው። | The house is very big.
ትንሽ | ትንሽ ውሃ እፈልጋለሁ። | I'd like a little water.
ብዙ | ብዙ ቡና እጠጣለሁ። | I drink a lot of coffee.
ደህና | ደህና ነኝ አመሰግናለሁ። | I'm fine, thank you.
መልካም | እናቴ መልካም ሰው ናት። | My mother is a kind person.
ውድ | ይህ መጽሀፍ ውድ ነው። | This book is expensive.
ቀይ | ቀይ ወጥ እወዳለሁ። | I like red stew.
ሩቅ | አሜሪካ ሩቅ ናት። | America is far away.
አሪፍ | ገበያው አሪፍ ነው። | The market is great.
ኢትዮጵያዊ | አቶ ከበደ ኢትዮጵያዊ ነው። | Mr. Kebede is Ethiopian.
አሜሪካዊት | እህቴ አሜሪካዊት ናት። | My sister is American.
እኔ | እኔ ተማሪ ነኝ። | I am a student.
እሱ | እሱ ወንድሜ ነው። | He is my brother.
እሷ | እሷ እህቴ ናት። | She is my sister.
እኛ | እኛ ከአሜሪካ ነን። | We are from America.
እነሱ | እነሱ ወደ ገበያ ይሄዳሉ። | They are going to the market.
እናንተ | እናንተ ከየት ናችሁ? | Where are you all from?
እሳቸው | እሳቸው አቶ ከበደ ናቸው። | He is Mr. Kebede. (polite)
ምንድን | ይህ ምንድን ነው? | What is this?
ይቺ | ይቺ ድመት ቆንጆ ናት። | This cat is pretty.
ስሜ | ስሜ አበበች ነው። | My name is Abebech.
ስምህ | ስምህ አዳም ነው? | Is your name Adam? (to a man)
ስምሽ | ስምሽ ትግስት ነው? | Is your name Tigist? (to a woman)
ስምዎ | ስምዎ ከበደ ነው? | Is your name Kebede? (polite)
ልጁ | ልጁ ተማሪ ነው። | The boy is a student.
ልጇ | ልጇ ወደ ትምህርት ቤት ሄደ። | Her son went to school.
ወደ | ነገ ወደ ጎንደር እሄዳለሁ። | Tomorrow I'm going to Gondar.
ጋር | ወንድሜ ጋር ነኝ። | I'm at my brother's.
ከየት | ከየት ነህ? | Where are you from? (to a man)
ከኢትዮጵያ | አበበች ከኢትዮጵያ ናት። | Abebech is from Ethiopia.
በኢትዮጵያ | በኢትዮጵያ ቡና በጣም ጥሩ ነው። | In Ethiopia the coffee is very good.
ከአሜሪካ | አዳም ከአሜሪካ ነው። | Adam is from America.
በቤት | ዛሬ በቤት ነኝ። | I'm at home today.
በቤቱ | በቤቱ ድመት አለ። | There's a cat in the house.
ለአንቺ | ይህ ቡና ለአንቺ ነው። | This coffee is for you. (to a woman)
ለእርስዎ | ይህ መጽሀፍ ለእርስዎ ነው። | This book is for you. (polite)
ከጠዋቱ | ከጠዋቱ ሶስት ሰዓት እሄዳለሁ። | I'll go at nine in the morning.
ከቀኑ | ከቀኑ ስምንት ሰዓት ቡና እጠጣለሁ። | I have coffee at two in the afternoon.
ከሆቴሉ | ገበያው ከሆቴሉ ሩቅ ነው። | The market is far from the hotel.
`;

exports.PATTERNS = `
`;
