

const cityDetails = [
  {
    id: "chengdu",
    name: "成都",
    type: "美食城市",
    img: "resource/images/chengdu/chengdu_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?chengdu,china,city,travel",
    videoNote: "跟随镜头俯瞰成都的城市肌理与烟火街巷，从熊猫基地、宽窄巷子到锦里夜景，感受巴蜀慢生活与美食氛围。",
    intro: "成都适合慢节奏旅行，城市中既有茶馆、街巷与美食烟火，也有青城山、都江堰等自然与历史景观。",
    overview: "成都的旅行体验不只是景点打卡，更像是一场慢生活体验。游客可以在人民公园喝盖碗茶，在宽窄巷子感受老成都街巷，在熊猫基地近距离观察大熊猫，也可以前往都江堰和青城山了解古代水利工程与道教文化。城市节奏舒缓，美食密度高，适合第一次自由行和深度城市漫游。",
    highlights: [
      { title: "慢生活体验", text: "茶馆、公园、街巷和夜市共同构成成都松弛舒适的城市节奏。" },
      { title: "美食集中", text: "火锅、串串、小吃和川菜选择丰富，适合安排专门的美食路线。" },
      { title: "自然与历史兼具", text: "都江堰、青城山让成都周边游更有文化厚度和自然体验。" }
    ],
    scenery: [
      { name: "熊猫基地", desc: "适合上午前往，能看到大熊猫进食、活动和休息，是亲子游与摄影游的热门地点。" },
      { name: "宽窄巷子", desc: "由宽巷子、窄巷子、井巷子组成，适合体验老成都院落、文创店和小吃。" },
      { name: "都江堰", desc: "世界知名古代水利工程，适合了解成都平原的历史与城市水系文化。" },
      { name: "青城山", desc: "山林清幽，道教文化浓厚，适合安排半日到一日的自然徒步。" },
      { name: "锦里", desc: "夜间氛围较好，适合拍照、购买伴手礼和体验川西民俗风格街区。" }
    ],
    food: [
      { name: "火锅", desc: "成都代表性美食，口味麻辣鲜香，可选择鸳鸯锅降低辣度。" },
      { name: "串串香", desc: "选择灵活、烟火气浓，适合朋友聚餐和夜宵。" },
      { name: "担担面", desc: "小份面食代表，麻酱、芽菜和红油风味明显。" },
      { name: "钟水饺", desc: "甜辣口味鲜明，适合搭配其他成都小吃一起品尝。" },
      { name: "兔头", desc: "地方特色小吃，适合喜欢尝试重口味美食的游客。" }
    ],
    culture: "巴蜀文化、茶馆文化与慢生活节奏共同构成成都的城市气质。",
    season: "3月—6月，9月—11月",
    route: [
      { day: "一日精华", items: ["上午：熊猫基地看大熊猫", "中午：春熙路或太古里附近用餐", "下午：人民公园喝茶、宽窄巷子漫步", "夜晚：锦里或九眼桥夜游"] },
      { day: "两日轻松游", items: ["第一天：熊猫基地 + 宽窄巷子 + 锦里", "第二天：都江堰 + 青城山，体验自然与历史"] },
      { day: "深度体验", items: ["加入茶馆体验或川剧变脸演出", "安排夜宵路线，体验串串、钵钵鸡和甜水面", "选择一个老街区进行城市摄影"] }
    ],
    tips: {
      transport: "市区地铁覆盖较好，景区之间可用地铁+打车组合；都江堰、青城山建议提前规划城际交通。",
      budget: "普通自由行日均约300—600元，若增加演出、网红餐厅或周边包车预算会更高。",
      stay: "初次游玩建议住春熙路、天府广场或宽窄巷子附近，交通和餐饮更方便。",
      notice: "热门餐厅排队较久，熊猫基地建议早到，夏季出行注意防晒和补水。"
    }
  },
  {
    id: "hangzhou",
    name: "杭州",
    type: "自然风光",
    img: "resource/images/hangzhou/hangzhou_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?hangzhou,west-lake,china,travel",
    videoNote: "跟随镜头游览杭州的湖山风光，从西湖、灵隐寺到龙井茶园与运河夜色，感受江南城市的清雅气质。",
    intro: "杭州以西湖风光、茶文化和江南气质为特色，适合湖边漫步、骑行和古街游览。",
    overview: "杭州的城市核心围绕西湖展开，适合用步行、骑行和短途公交串联景点。湖边景观层次丰富，从苏堤、白堤到断桥、雷峰塔都适合慢慢游览。除了自然风光，杭州还拥有灵隐寺、龙井村、京杭大运河和宋韵文化街区，整体旅行气质清雅、舒展。",
    highlights: [
      { title: "湖城一体", text: "西湖与城市生活距离很近，随时可以从街区进入湖边景观。" },
      { title: "茶文化浓厚", text: "龙井村、梅家坞适合体验采茶、品茶与山间慢行。" },
      { title: "适合摄影", text: "春季花景、秋季桂花、雨天湖面都很适合拍摄。" }
    ],
    scenery: [
      { name: "西湖", desc: "杭州最具代表性的风景核心，适合环湖漫步、骑行和游船。" },
      { name: "灵隐寺", desc: "古刹氛围浓厚，周边飞来峰造像与山林景观值得慢游。" },
      { name: "龙井村", desc: "茶园景观清新，适合体验龙井茶文化和山间步道。" },
      { name: "京杭大运河", desc: "适合夜间散步或乘船，感受杭州水运文化。" },
      { name: "河坊街", desc: "传统商业街区，适合购买伴手礼、品尝小吃。" }
    ],
    food: [
      { name: "西湖醋鱼", desc: "杭帮菜代表之一，酸甜口味突出，适合体验地方传统菜。" },
      { name: "龙井虾仁", desc: "茶香与虾仁结合，清淡鲜香。" },
      { name: "东坡肉", desc: "肥而不腻，适合搭配米饭品尝。" },
      { name: "片儿川", desc: "杭州特色面食，雪菜、笋片和肉片风味明显。" }
    ],
    culture: "江南文化、宋韵文化和龙井茶文化让杭州兼具自然美与人文气息。",
    season: "3月—5月，9月—10月",
    route: [
      { day: "一日精华", items: ["上午：断桥、白堤、孤山环湖", "中午：品尝杭帮菜", "下午：灵隐寺与飞来峰", "夜晚：湖滨或河坊街散步"] },
      { day: "两日慢游", items: ["第一天：西湖环线 + 雷峰塔 + 湖滨夜景", "第二天：龙井村 + 九溪 + 京杭大运河"] },
      { day: "深度体验", items: ["安排茶园品茶体验", "选择清晨或雨后拍摄西湖", "前往小河直街感受运河街区生活"] }
    ],
    tips: {
      transport: "西湖周边节假日车流大，建议步行、骑行或公共交通；热门区域打车可能等待较久。",
      budget: "日均约300—700元，住宿价格受西湖距离影响较大。",
      stay: "推荐住湖滨、武林广场、黄龙或地铁沿线，便于前往西湖和市区。",
      notice: "西湖不必所有景点一次走完，建议按体力分段游览，雨天注意防滑。"
    }
  },
  {
    id: "beijing",
    name: "北京",
    type: "历史文化",
    img: "resource/images/beijing/beijing_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?beijing,forbidden-city,china,travel",
    videoNote: "跟随镜头穿行北京的古都中轴与现代街区，从故宫、天坛、胡同到长城，感受历史文化与城市活力。",
    intro: "北京是历史古都与现代都市结合的代表，适合了解传统文化、古建筑和胡同生活。",
    overview: "北京的城市旅行以历史建筑、博物馆、胡同街区和现代公共空间为主。故宫、天坛、颐和园、长城等景点文化含量高，适合提前了解背景后游览。城市范围较大，景点之间距离较远，因此路线规划非常重要。对于喜欢历史、建筑和城市观察的游客，北京非常适合安排三天以上深度游。",
    highlights: [
      { title: "历史厚重", text: "宫殿、坛庙、园林和城墙遗存展现古都格局。" },
      { title: "博物馆资源丰富", text: "国家博物馆、首都博物馆等适合补充历史文化体验。" },
      { title: "城市层次多", text: "胡同生活、现代商圈和奥运地标形成多重城市面貌。" }
    ],
    scenery: [
      { name: "故宫", desc: "明清宫殿建筑群，适合重点了解中轴线、宫廷建筑和文物展览。" },
      { name: "天坛", desc: "古代祭天建筑群，祈年殿是北京代表性建筑之一。" },
      { name: "长城", desc: "可选择八达岭、慕田峪等段落，适合安排一日游。" },
      { name: "颐和园", desc: "皇家园林代表，昆明湖、长廊和佛香阁适合慢游。" },
      { name: "什刹海", desc: "胡同、水岸和酒吧街结合，适合傍晚散步。" }
    ],
    food: [
      { name: "北京烤鸭", desc: "代表性京味美食，适合家庭或朋友聚餐。" },
      { name: "炸酱面", desc: "家常面食代表，酱香浓郁，价格相对亲民。" },
      { name: "豆汁", desc: "地方特色明显，口味独特，适合尝鲜。" },
      { name: "卤煮", desc: "老北京小吃，适合喜欢重口味的游客。" }
    ],
    culture: "宫廷文化、胡同文化和京味民俗是北京旅行的重要看点。",
    season: "4月—6月，9月—10月",
    route: [
      { day: "一日精华", items: ["上午：故宫参观", "中午：景山或前门周边用餐", "下午：什刹海、南锣鼓巷胡同游", "夜晚：前门或国家大剧院周边散步"] },
      { day: "三日文化游", items: ["第一天：故宫 + 景山 + 什刹海", "第二天：天坛 + 国家博物馆 + 前门", "第三天：长城或颐和园一日游"] },
      { day: "深度体验", items: ["预约博物馆专题展览", "选择胡同Citywalk路线", "观看京剧、相声或传统演出"] }
    ],
    tips: {
      transport: "地铁覆盖广，适合跨城区移动；长城建议乘坐专线或提前规划交通。",
      budget: "日均约350—800元，核心区域住宿和热门餐厅价格较高。",
      stay: "推荐住地铁2号线、4号线、8号线附近，便于前往主要景区。",
      notice: "故宫、国家博物馆等热门场馆通常需要提前预约，节假日人流较大。"
    }
  },
  {
    id: "shanghai",
    name: "上海",
    type: "现代都市",
    img: "resource/images/shanghai/shanghai_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?shanghai,bund,china,night",
    videoNote: "跟随镜头俯瞰上海的城市天际线，从外滩、陆家嘴到武康路街景与黄浦江夜色，感受海派都市魅力。",
    intro: "上海适合都市观光、建筑摄影和夜景体验，海派文化与现代商业氛围鲜明。",
    overview: "上海的旅行重点在城市建筑、街区漫步、商业空间和夜景体验。外滩与陆家嘴展现现代都市天际线，武康路、衡山路等区域适合看历史建筑和梧桐街景，豫园和城隍庙则保留了传统市井气息。上海非常适合用Citywalk方式探索，也适合设计摄影主题路线。",
    highlights: [
      { title: "夜景辨识度高", text: "外滩与陆家嘴形成极具代表性的城市天际线。" },
      { title: "街区适合漫步", text: "武康路、永康路、衡山路等区域适合城市摄影。" },
      { title: "现代商业丰富", text: "商场、展览、咖啡馆和文创空间选择多。" }
    ],
    scenery: [
      { name: "外滩", desc: "万国建筑群与浦东天际线相对，是上海夜景核心。" },
      { name: "陆家嘴", desc: "东方明珠、上海中心等高楼集中，适合登高观景。" },
      { name: "武康路", desc: "梧桐街景与历史建筑密集，适合Citywalk。" },
      { name: "豫园", desc: "古典园林与传统商业街区结合，适合白天游览。" },
      { name: "南京路", desc: "上海代表性商业街，适合购物和夜间散步。" }
    ],
    food: [
      { name: "生煎包", desc: "底部酥脆、汤汁丰富，是上海常见小吃。" },
      { name: "小笼包", desc: "皮薄汤足，适合早餐或点心。" },
      { name: "本帮菜", desc: "偏甜浓油赤酱，代表菜包括红烧肉、响油鳝丝等。" },
      { name: "葱油拌面", desc: "简单但香气浓郁，适合作为快捷正餐。" }
    ],
    culture: "海派文化、近代建筑与商业文明共同塑造了上海的城市形象。",
    season: "3月—5月，10月—11月",
    route: [
      { day: "一日精华", items: ["上午：武康路和徐汇街区漫步", "中午：体验本帮菜或生煎", "下午：豫园、南京路", "夜晚：外滩与陆家嘴夜景"] },
      { day: "两日都市游", items: ["第一天：外滩 + 南京路 + 陆家嘴", "第二天：武康路 + 衡山路 + 展览或咖啡馆"] },
      { day: "深度体验", items: ["安排建筑摄影路线", "选择一个美术馆或展览", "夜间乘坐黄浦江游船"] }
    ],
    tips: {
      transport: "地铁网络密集，适合跨区移动；外滩周边节假日晚间人流集中。",
      budget: "日均约400—900元，展览、观景台和热门餐厅会增加预算。",
      stay: "推荐住人民广场、静安寺、徐家汇或地铁沿线，兼顾景点与交通。",
      notice: "部分街区适合步行但距离较长，建议穿舒适鞋并规划休息点。"
    }
  },
  {
    id: "xiamen",
    name: "厦门",
    type: "自然风光",
    img: "resource/images/xiamen/xiamen_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?xiamen,china,sea,travel",
    videoNote: "跟随镜头掠过厦门海岸与岛屿街巷，从鼓浪屿、环岛路到沙坡尾与海边日落，感受清新的海滨旅行氛围。",
    intro: "厦门是一座清新的海滨城市，适合看海、骑行、拍照和体验文艺街区。",
    overview: "厦门的旅行氛围轻松清新，海岸线、岛屿、校园和街区都很适合慢游。鼓浪屿适合安排半天到一天，环岛路适合骑行看海，曾厝垵和沙坡尾适合拍照与品尝小吃。厦门整体节奏不快，适合情侣游、朋友旅行和海滨摄影主题网站展示。",
    highlights: [
      { title: "海滨氛围", text: "海岸线、沙滩和日落让厦门具有清新的度假感。" },
      { title: "文艺街区", text: "鼓浪屿、沙坡尾、曾厝垵适合拍照和逛小店。" },
      { title: "闽南特色", text: "建筑、方言、美食和庙宇体现浓厚闽南文化。" }
    ],
    scenery: [
      { name: "鼓浪屿", desc: "岛上建筑风格多样，适合步行游览和拍摄街巷。" },
      { name: "环岛路", desc: "适合骑行、看海和拍摄日落，旅行体验轻松。" },
      { name: "曾厝垵", desc: "小吃、民宿和文创店集中，适合夜间游览。" },
      { name: "厦门大学", desc: "校园风景优美，周边可串联南普陀寺和沙坡尾。" },
      { name: "南普陀寺", desc: "香火浓厚，适合与厦大、植物园一起安排。" }
    ],
    food: [
      { name: "沙茶面", desc: "汤底香浓，配料丰富，是厦门代表性面食。" },
      { name: "海蛎煎", desc: "外酥内嫩，海鲜风味明显。" },
      { name: "土笋冻", desc: "地方特色小吃，口感独特，适合尝鲜。" },
      { name: "花生汤", desc: "甜品类小吃，口感软糯香甜。" }
    ],
    culture: "闽南文化、海岛生活和文艺街区构成厦门的轻松旅行氛围。",
    season: "10月—次年4月",
    route: [
      { day: "一日精华", items: ["上午：鼓浪屿步行游览", "中午：品尝沙茶面和海蛎煎", "下午：环岛路骑行看海", "夜晚：曾厝垵或沙坡尾散步"] },
      { day: "两日海滨游", items: ["第一天：鼓浪屿 + 中山路", "第二天：南普陀寺 + 厦大周边 + 环岛路"] },
      { day: "深度体验", items: ["安排日落摄影路线", "尝试闽南小吃集合路线", "选择海边民宿体验慢生活"] }
    ],
    tips: {
      transport: "市区公交和打车较方便，鼓浪屿需乘船，建议提前确认码头和船票。",
      budget: "日均约300—700元，海景住宿和节假日船票住宿会提高预算。",
      stay: "推荐住中山路、曾厝垵、厦大周边或海边民宿区。",
      notice: "海边紫外线强，需做好防晒；鼓浪屿以步行为主，行李不宜过多。"
    }
  },
  {
    id: "chongqing",
    name: "重庆",
    type: "美食城市",
    img: "resource/images/chongqing/chongqing_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?chongqing,china,night,city",
    videoNote: "跟随镜头穿越重庆的立体山城，从洪崖洞夜景、长江索道到山城步道和火锅街区，感受热辣鲜活的城市节奏。",
    intro: "重庆以山城地貌、立体交通和热辣美食吸引游客，是极具辨识度的网红旅行城市。",
    overview: "重庆的城市形态非常独特，高低起伏的山城地貌让轻轨、索道、桥梁和江景成为景观本身。洪崖洞、解放碑、长江索道、磁器口等景点适合串联成城市漫游路线。重庆美食口味鲜明，夜景层次丰富，非常适合做成视觉冲击较强的旅游网页。",
    highlights: [
      { title: "立体山城", text: "道路、楼梯、轨道和江岸构成立体交通景观。" },
      { title: "夜景震撼", text: "两江交汇和高楼灯光让夜游体验非常突出。" },
      { title: "美食热辣", text: "火锅、小面、酸辣粉等美食辨识度高。" }
    ],
    scenery: [
      { name: "洪崖洞", desc: "吊脚楼风格夜景地标，适合夜晚拍照。" },
      { name: "解放碑", desc: "核心商圈，适合作为市区游览起点。" },
      { name: "长江索道", desc: "跨江交通体验，能从空中俯瞰两岸城市景观。" },
      { name: "磁器口", desc: "古镇街区，适合购买伴手礼和品尝小吃。" },
      { name: "南山夜景", desc: "适合远眺重庆主城夜景，推荐傍晚后前往。" }
    ],
    food: [
      { name: "重庆火锅", desc: "麻辣浓烈，适合体验山城美食氛围。" },
      { name: "重庆小面", desc: "价格亲民，调味丰富，是本地早餐代表。" },
      { name: "酸辣粉", desc: "酸辣开胃，适合街边小吃体验。" },
      { name: "毛血旺", desc: "麻辣重口味菜品，适合多人分享。" }
    ],
    culture: "山城文化、码头文化和夜景文化让重庆拥有强烈的城市记忆点。",
    season: "3月—5月，9月—11月",
    route: [
      { day: "一日精华", items: ["上午：解放碑、来福士周边", "中午：重庆小面或江湖菜", "下午：长江索道、磁器口", "夜晚：洪崖洞与两江夜景"] },
      { day: "两日山城游", items: ["第一天：解放碑 + 长江索道 + 洪崖洞", "第二天：磁器口 + 李子坝 + 南山夜景"] },
      { day: "深度体验", items: ["体验轻轨穿楼和山城步道", "安排火锅夜宵路线", "选择江边机位拍摄夜景"] }
    ],
    tips: {
      transport: "轨道交通方便，但山城步行上下坡多，建议穿舒适鞋；热门夜景地打车可能拥堵。",
      budget: "日均约300—650元，火锅和夜景游船会增加支出。",
      stay: "推荐住解放碑、观音桥或两江交汇周边，方便夜游和交通换乘。",
      notice: "重庆夏季炎热，火锅口味较辣，不太能吃辣可提前说明微辣或鸳鸯锅。"
    }
  },
  {
    id: "guangzhou",
    name: "广州",
    type: "美食城市",
    img: "resource/images/guangzhou/guangzhou_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?guangzhou,canton,tower,china",
    videoNote: "跟随镜头走近广州的岭南风貌，从广州塔、珠江夜游到早茶文化与沙面街区，感受千年商都的烟火与活力。",
    intro: "广州是粤菜发源地之一，早茶文化浓厚，兼具历史底蕴与现代活力。",
    overview: "广州作为千年商都，融合了古老的岭南文化与现代国际都会气质。游客可以在老城区喝早茶、逛骑楼，也可以到珠江新城感受摩天大楼的震撼。沙面岛、陈家祠、北京路步行街都是体验广府文化的好去处。夜晚的珠江夜游、广州塔灯光秀不容错过。",
    highlights: [
      { title: "美食天堂", text: "从早茶到晚市，虾饺、烧鹅、煲仔饭等粤菜代表遍布街头。" },
      { title: "历史与现代交汇", text: "沙面欧陆建筑与珠江新城摩天楼形成鲜明对比。" },
      { title: "花城四季", text: "气候温暖，春节花市、春季木棉花开是独特体验。" }
    ],
    scenery: [
      { name: "广州塔", desc: "昵称小蛮腰，可登塔俯瞰全城，夜晚灯光秀极美。" },
      { name: "沙面", desc: "欧式建筑群，适合散步拍照，曾为英法租界。" },
      { name: "陈家祠", desc: "岭南祠堂建筑代表，木雕、石雕精美绝伦。" },
      { name: "白云山", desc: "城市绿肺，登山可眺望广州全景。" },
      { name: "长隆旅游度假区", desc: "大型主题乐园，适合亲子游。" }
    ],
    food: [
      { name: "虾饺", desc: "水晶皮包裹鲜虾，早茶必点。" },
      { name: "肠粉", desc: "米浆蒸制，淋上酱油，滑嫩爽口。" },
      { name: "烧鹅", desc: "皮脆肉嫩，搭配酸梅酱解腻。" },
      { name: "煲仔饭", desc: "砂锅生米煮饭，腊味、排骨香气扑鼻。" },
      { name: "双皮奶", desc: "顺德甜品，奶香浓郁，入口即化。" }
    ],
    culture: "岭南文化、广府文化、商贸传统、早茶文化",
    season: "10月—12月，3月—5月",
    route: [
      { day: "一日精华", items: ["上午：喝早茶 → 陈家祠", "中午：北京路步行街午餐", "下午：沙面 → 圣心大教堂", "夜晚：珠江夜游 + 广州塔"] },
      { day: "两日悠闲游", items: ["第一天：越秀公园 → 中山纪念堂 → 北京路", "第二天：长隆野生动物世界或白云山"] },
      { day: "深度体验", items: ["安排一天老城区Citywalk（西关大屋、恩宁路）", "体验粤剧艺术博物馆", "品尝地道宵夜（潮汕砂锅粥、炒牛河）"] }
    ],
    tips: {
      transport: "地铁网络发达，推荐使用羊城通或支付宝乘车码；白云机场有地铁直达市区。",
      budget: "日均约350—800元，美食花费可高可低。",
      stay: "推荐住越秀区（老城区）或天河区（新城区），地铁沿线方便。",
      notice: "夏季湿热多雨，备伞；老字号餐厅可能需要排队。"
    }
  },
  {
    id: "nanjing",
    name: "南京",
    type: "历史文化",
    img: "resource/images/nanjing/nanjing_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?nanjing,china,city,history",
    videoNote: "跟随镜头回望南京的历史脉络，从中山陵、秦淮河、夫子庙到玄武湖与民国街区，感受古都的厚重与浪漫。",
    intro: "六朝古都，民国遗韵，秦淮河畔感受历史与现代的交融。",
    overview: "南京是中国四大古都之一，拥有丰富的历史遗迹和人文景观。从六朝到民国，南京见证了无数兴衰。钟山风景区（中山陵、明孝陵）、夫子庙-秦淮河风光带、总统府、南京博物院都是必游之地。城市绿化极佳，梧桐大道浪漫诗意。",
    highlights: [
      { title: "民国风情", text: "颐和路公馆区、总统府、1912街区充满民国气息。" },
      { title: "秦淮夜色", text: "乘画舫夜游秦淮河，欣赏两岸古建筑灯火。" },
      { title: "历史厚度", text: "明孝陵、中山陵、南京大屠杀纪念馆承载厚重记忆。" }
    ],
    scenery: [
      { name: "中山陵", desc: "孙中山先生陵墓，392级台阶象征当时3亿9千200万同胞。" },
      { name: "夫子庙-秦淮河", desc: "核心景区，可逛古街、品小吃、夜游秦淮。" },
      { name: "总统府", desc: "中国近代史遗址博物馆，中西合璧建筑群。" },
      { name: "玄武湖", desc: "皇家园林湖泊，环湖漫步或划船都很惬意。" },
      { name: "南京博物院", desc: "馆藏丰富，尤其民国馆复原旧时街景。" }
    ],
    food: [
      { name: "盐水鸭", desc: "皮白肉嫩，咸香适中，金陵名菜。" },
      { name: "鸭血粉丝汤", desc: "鸭血、鸭肠、粉丝搭配浓汤，暖胃解馋。" },
      { name: "汤包", desc: "皮薄馅多，先开窗后喝汤。" },
      { name: "梅花糕", desc: "形似梅花，甜而不腻，街头常见。" },
      { name: "活珠子", desc: "特色小吃，敢于尝试者可挑战。" }
    ],
    culture: "六朝文化、民国文化、科举文化、佛教文化",
    season: "3月—5月（梅花节），9月—11月（秋色）",
    route: [
      { day: "一日精华", items: ["上午：中山陵 → 明孝陵", "中午：苜蓿园地铁站周边用餐", "下午：总统府 → 南京博物院", "夜晚：夫子庙秦淮河"] },
      { day: "两日深度游", items: ["第一天：钟山风景区（中山陵、明孝陵、灵谷寺）", "第二天：南京大屠杀纪念馆 → 颐和路 → 老门东"] },
      { day: "三日休闲游", items: ["增加一天：牛首山（佛顶宫）或栖霞山（秋枫）"] }
    ],
    tips: {
      transport: "地铁覆盖主要景点，使用支付宝乘车码；钟山景区内部有接驳车。",
      budget: "日均约350—700元，景点门票较集中。",
      stay: "住新街口、夫子庙或地铁2号线沿线。",
      notice: "周一很多博物馆闭馆（如南京博物院），需提前规划。"
    }
  },
  {
    id: "xian",
    name: "西安",
    type: "历史文化",
    img: "resource/images/xian/xian_main.jpg",
    bgImg: "https://source.unsplash.com/1600x900/?xian,china,terracotta,city",
    videoNote: "跟随镜头走进西安的盛唐气象，从兵马俑、古城墙到大雁塔与大唐不夜城，感受古都文化与夜游魅力。",
    intro: "世界四大古都之一，秦汉唐文化汇聚，美食与历史并重。",
    overview: "西安是丝绸之路起点，拥有兵马俑、大雁塔、古城墙等世界级遗产。市区内钟楼、鼓楼、回民街充满烟火气，而临潼的秦始皇陵兵马俑更是必看。夜晚的大唐不夜城灯光璀璨，仿佛穿越回盛唐。",
    highlights: [
      { title: "世界奇迹", text: "秦始皇兵马俑，规模宏大，震撼人心。" },
      { title: "古城墙骑行", text: "中国现存最完整古城墙，骑车一圈约2小时。" },
      { title: "盛唐气象", text: "大唐不夜城、大雁塔北广场音乐喷泉展现唐风古韵。" }
    ],
    scenery: [
      { name: "兵马俑", desc: "世界第八大奇迹，建议请讲解或租讲解器。" },
      { name: "西安城墙", desc: "可租自行车骑行，南门夜景最美。" },
      { name: "大雁塔", desc: "玄奘译经之地，北广场音乐喷泉规模宏大。" },
      { name: "回民街", desc: "美食聚集地，推荐肉夹馍、羊肉泡馍、柿子饼。" },
      { name: "陕西历史博物馆", desc: "馆藏丰富，需提前预约。" }
    ],
    food: [
      { name: "肉夹馍", desc: "腊汁肉夹白吉馍，外酥里嫩。" },
      { name: "羊肉泡馍", desc: "自己掰馍，配糖蒜和辣椒酱，体验感强。" },
      { name: "凉皮", desc: "夏季消暑，酸辣开胃。" },
      { name: "Biángbiáng面", desc: "宽如裤带，油泼辣子香气扑鼻。" },
      { name: "柿子饼", desc: "油炸甜点，外脆内软。" }
    ],
    culture: "秦汉文化、盛唐文化、丝路文化、关中民俗",
    season: "3月—5月，9月—10月（避开夏季炎热）",
    route: [
      { day: "一日精华", items: ["上午：兵马俑（建议半天）", "中午：临潼或回市区用餐", "下午：西安城墙骑行", "夜晚：回民街 + 钟楼夜景"] },
      { day: "两日经典游", items: ["第一天：兵马俑 + 华清池（可选）", "第二天：大雁塔 + 大唐不夜城 + 陕西历史博物馆"] },
      { day: "三日深度游", items: ["增加一天：华山一日游（动车往返）"] }
    ],
    tips: {
      transport: "兵马俑在临潼，可乘地铁9号线+公交；市区地铁方便。",
      budget: "日均约350—800元，兵马俑门票较贵（120元）。",
      stay: "推荐住钟楼、南门附近，交通便利。",
      notice: "兵马俑旺季排队久，建议早去；回民街人多注意财物。"
    }
  }
];

const params = new URLSearchParams(location.search);
const id = params.get("id") || "chengdu";
const from = params.get("from") || "";
const city = cityDetails.find(item => item.id === id) || cityDetails[0];
const root = document.getElementById("cityDetailRoot");

function getBackEntry(source) {
  const entryMap = {
    hero: { text: "返回首页轮播", href: "index.html#heroSection" },
    popular: { text: "返回热门城市", href: "index.html#citySection" },
    category: { text: "返回分类浏览", href: "category.html" },
    wishlist: { text: "返回我的旅行心愿单", href: "wishlist.html" },
    route: { text: "返回首页路线推荐", href: "index.html#routeSection" },
    modal: { text: "返回热门城市", href: "index.html#citySection" }
  };
  return entryMap[source] || entryMap.popular;
}

const backEntry = getBackEntry(from);
const detailBackground = city.bgImg || city.img;
root.style.setProperty("--city-detail-bg", `url("${detailBackground}")`);
document.body.style.setProperty("--city-detail-bg", `url("${detailBackground}")`);

function renderInfoCards(list) {
  return list.map(item => `
    <article class="info-mini-card detail-float-card">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    </article>
  `).join("");
}

root.innerHTML = `
  <section class="detail-hero detail-float-card">
    <img src="${city.img}" alt="${city.name}" />
    <div class="detail-hero-text">
      <p class="eyebrow">${city.type}</p>
      <h1>${city.name}旅行详细介绍</h1>
      <p>${city.intro}</p>
      <a class="primary-btn" href="${backEntry.href}">${backEntry.text}</a>
    </div>
  </section>

  <section class="detail-overview">
    <article class="article-card detail-float-card">
      <h2>城市概览</h2>
      <p>${city.overview}</p>
      <p><strong>推荐季节：</strong>${city.season}</p>
      <p><strong>文化特色：</strong>${city.culture}</p>
    </article>
    <article class="article-card detail-float-card">
      <h2>旅行亮点</h2>
      <div class="highlight-list">
        ${city.highlights.map(item => `
          <div class="highlight-item">
            <strong>${item.title}</strong>
            <span>${item.text}</span>
          </div>
        `).join("")}
      </div>
    </article>
  </section>

  <section class="detail-video-slot detail-float-card">
    <div class="detail-section-title">
      <p class="eyebrow">City Video</p>
      <h2>${city.name}城市影像导览</h2>
      <p>${city.videoNote || "通过城市影像快速了解目的地的风景地标、人文街区、美食氛围与旅行路线，为后续行程规划提供直观参考。"}</p>
    </div>
    <div class="city-video-box" aria-label="${city.name}城市介绍视频区域">
      <video
        class="city-detail-video"
        src="resource/images/${city.id}/video_${city.name}城市宣传片.mp4"
        controls
        autoplay
        loop
        playsinline
        preload="auto"
      >
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </section>

  <section>
    <div class="detail-section-title">
      <p class="eyebrow">Scenery</p>
      <h2>代表风景详细介绍</h2>
      <p>从城市地标、自然景观到特色街区，帮助用户更快了解每个景点适合的游玩方式。</p>
    </div>
    <div class="info-card-grid">${renderInfoCards(city.scenery)}</div>
  </section>

  <section>
    <div class="detail-section-title">
      <p class="eyebrow">Food</p>
      <h2>特色美食详细介绍</h2>
      <p>补充每种美食的口味特点和体验建议，使页面不只展示名称，也能提供旅行参考。</p>
    </div>
    <div class="info-card-grid">${renderInfoCards(city.food)}</div>
  </section>

  <section>
    <div class="detail-section-title">
      <p class="eyebrow">Route</p>
      <h2>推荐游玩路线</h2>
      <p>根据不同旅行时长安排路线，适合用户直接参考，也能体现网页的实用性。</p>
    </div>
    <div class="route-detail-list">
      ${city.route.map(day => `
        <article class="route-day-card detail-float-card">
          <h3>${day.day}</h3>
          <ul>${day.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </article>
      `).join("")}
    </div>
  </section>

  <section>
    <div class="detail-section-title">
      <p class="eyebrow">Tips</p>
      <h2>出行实用提示</h2>
      <p>从交通、预算、住宿和注意事项四个角度补充细节，让城市详情页更加完整。</p>
    </div>
    <div class="travel-tips-grid">
      <div class="travel-tip detail-float-card"><strong>交通建议</strong><span>${city.tips.transport}</span></div>
      <div class="travel-tip detail-float-card"><strong>预算参考</strong><span>${city.tips.budget}</span></div>
      <div class="travel-tip detail-float-card"><strong>住宿区域</strong><span>${city.tips.stay}</span></div>
      <div class="travel-tip detail-float-card"><strong>注意事项</strong><span>${city.tips.notice}</span></div>
    </div>
  </section>
`;

function setupCityDetailVideoAutoPlay() {
  const video = document.querySelector(".city-detail-video");
  if (!video) return;

  video.volume = 0.2;
  video.muted = false;
  video.defaultMuted = false;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  const tryPlay = () => {
    video.volume = 0.2;
    video.muted = false;
    video.defaultMuted = false;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
      });
    }
  };

  tryPlay();
  ["click", "touchstart", "keydown"].forEach(eventName => {
    window.addEventListener(eventName, tryPlay, { once: true });
  });
}

setupCityDetailVideoAutoPlay();
