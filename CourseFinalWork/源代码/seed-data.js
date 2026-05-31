var CITYGO_PRESET_DATA = {
  travel01: {
    wishlist: [
      { id: "hangzhou", name: "杭州", img: "", intro: "西湖、茶山与江南街巷交织，适合慢节奏散步。", tags: ["江南", "西湖", "茶文化"] },
      { id: "xiamen", name: "厦门", img: "", intro: "清爽海风、骑楼街区和文艺小岛，非常适合拍照。", tags: ["海滨", "文艺", "骑行"] },
      { id: "chengdu", name: "成都", img: "", intro: "火锅、茶馆和熊猫让城市节奏变得松弛。", tags: ["美食", "慢生活", "熊猫"] }
    ],
    diaries: [
      { id: "preset_travel01_1", title: "西湖边的微风", city: "hangzhou", content: "傍晚沿着湖边慢慢走，柳树倒影和远处的塔影都很温柔。最喜欢这种不用赶行程的城市漫步。", images: ["resource/users/travel01/hangzhou-lake.svg"], media: [{ type: "image", src: "resource/users/travel01/hangzhou-lake.svg" }, { type: "video", src: "resource/users/travel01/hangzhou-walk.mp4", cover: "resource/users/travel01/hangzhou-walk-cover.svg" }], createdAt: "2026-04-09T18:20:00.000Z", updatedAt: "2026-04-09T18:20:00.000Z" },
      { id: "preset_travel01_2", title: "鼓浪屿的蓝色午后", city: "xiamen", content: "岛上的路并不宽，转角经常遇到漂亮的小楼和花。海风吹来的时候，整个人都轻了下来。", images: ["resource/users/travel01/xiamen-sea.svg"], media: [{ type: "image", src: "resource/users/travel01/xiamen-sea.svg" }], createdAt: "2026-04-18T09:30:00.000Z", updatedAt: "2026-04-18T09:30:00.000Z" }
    ]
  },
  cityfan: {
    wishlist: [
      { id: "shanghai", name: "上海", img: "", intro: "外滩夜景、梧桐街区与现代商业都很有城市感。", tags: ["夜景", "海派", "都市"] },
      { id: "nanjing", name: "南京", img: "", intro: "历史街巷、民国建筑和秦淮河夜色都值得慢慢看。", tags: ["历史", "民国", "秦淮河"] },
      { id: "beijing", name: "北京", img: "", intro: "胡同、古建和现代都市在这里形成强烈对比。", tags: ["古都", "胡同", "文化"] }
    ],
    diaries: [
      { id: "preset_cityfan_1", title: "外滩灯光亮起时", city: "shanghai", content: "夜色里的江面反射着高楼灯光，城市的节奏一下子变得很清晰。", images: ["resource/users/cityfan/shanghai-night.svg"], media: [{ type: "image", src: "resource/users/cityfan/shanghai-night.svg" }, { type: "video", src: "resource/users/cityfan/shanghai-night.mp4", cover: "resource/users/cityfan/shanghai-night-cover.svg" }], createdAt: "2026-03-29T20:10:00.000Z", updatedAt: "2026-03-29T20:10:00.000Z" },
      { id: "preset_cityfan_2", title: "秦淮河边的灯影", city: "nanjing", content: "晚上走到河边，灯笼、游船和老街连在一起，有一种很温柔的历史感。", images: ["resource/users/cityfan/nanjing-river.svg"], media: [{ type: "image", src: "resource/users/cityfan/nanjing-river.svg" }], createdAt: "2026-04-13T19:00:00.000Z", updatedAt: "2026-04-13T19:00:00.000Z" }
    ]
  },
  foodlover: {
    wishlist: [
      { id: "guangzhou", name: "广州", img: "", intro: "早茶、糖水和老城区骑楼都很适合美食路线。", tags: ["早茶", "岭南", "美食"] },
      { id: "chengdu", name: "成都", img: "", intro: "火锅和街边小吃之外，茶馆也很值得体验。", tags: ["火锅", "茶馆", "小吃"] },
      { id: "chongqing", name: "重庆", img: "", intro: "山城道路、江景夜色和热辣火锅让人印象很深。", tags: ["山城", "火锅", "夜景"] }
    ],
    diaries: [
      { id: "preset_foodlover_1", title: "广州早茶从虾饺开始", city: "guangzhou", content: "早茶不是单纯吃早饭，更像是一种慢慢聊天的生活方式。虾饺、凤爪和艇仔粥都很有记忆点。", images: ["resource/users/foodlover/guangzhou-dim-sum.svg"], media: [{ type: "image", src: "resource/users/foodlover/guangzhou-dim-sum.svg" }], createdAt: "2026-04-03T08:40:00.000Z", updatedAt: "2026-04-03T08:40:00.000Z" },
      { id: "preset_foodlover_2", title: "重庆的夜晚是辣的", city: "chongqing", content: "从洪崖洞走到江边，空气里都是火锅香。城市高低起伏，夜景也特别立体。", images: ["resource/users/foodlover/chongqing-hotpot.svg"], media: [{ type: "image", src: "resource/users/foodlover/chongqing-hotpot.svg" }, { type: "video", src: "resource/users/foodlover/chongqing-night.mp4", cover: "resource/users/foodlover/chongqing-night-cover.svg" }], createdAt: "2026-04-20T21:15:00.000Z", updatedAt: "2026-04-20T21:15:00.000Z" }
    ]
  },
  scenery: {
    wishlist: [
      { id: "xiamen", name: "厦门", img: "", intro: "海岸线、日落和小岛街巷适合轻松拍照。", tags: ["海景", "日落", "小岛"] },
      { id: "hangzhou", name: "杭州", img: "", intro: "湖光山色和茶园都很适合自然风光记录。", tags: ["湖景", "茶园", "江南"] },
      { id: "xian", name: "西安", img: "", intro: "城墙、古迹和街头烟火气形成独特的旅行画面。", tags: ["古城", "城墙", "历史"] }
    ],
    diaries: [
      { id: "preset_scenery_1", title: "厦门海边的日落", city: "xiamen", content: "夕阳落下时海面变成金色，沙滩上的人影也变得很安静。", images: ["resource/users/scenery/xiamen-sunset.svg"], media: [{ type: "image", src: "resource/users/scenery/xiamen-sunset.svg" }, { type: "video", src: "resource/users/scenery/xiamen-sunset.mp4", cover: "resource/users/scenery/xiamen-sunset-cover.svg" }], createdAt: "2026-03-31T18:30:00.000Z", updatedAt: "2026-03-31T18:30:00.000Z" },
      { id: "preset_scenery_2", title: "西安城墙上的风", city: "xian", content: "骑车经过城墙的时候，能看到老城和现代街道同时铺开，历史感很强。", images: ["resource/users/scenery/xian-wall.svg"], media: [{ type: "image", src: "resource/users/scenery/xian-wall.svg" }], createdAt: "2026-04-22T16:10:00.000Z", updatedAt: "2026-04-22T16:10:00.000Z" }
    ]
  },
  demo: {
    wishlist: [
      { id: "beijing", name: "北京", img: "", intro: "古都文化与现代城市生活并存，适合课程展示。", tags: ["古都", "文化", "胡同"] },
      { id: "shanghai", name: "上海", img: "", intro: "海派都市、夜景与街区漫步路线丰富。", tags: ["都市", "夜景", "外滩"] },
      { id: "chengdu", name: "成都", img: "", intro: "烟火气、美食和慢节奏旅行体验明显。", tags: ["美食", "茶馆", "熊猫"] }
    ],
    diaries: [
      { id: "preset_demo_1", title: "北京胡同里的下午", city: "beijing", content: "灰墙、红门和树影让胡同很有生活感，适合做旅行日记展示。", images: ["resource/users/demo/beijing-hutong.svg"], media: [{ type: "image", src: "resource/users/demo/beijing-hutong.svg" }, { type: "video", src: "resource/users/demo/beijing-hutong.mp4", cover: "resource/users/demo/beijing-hutong-cover.svg" }], createdAt: "2026-04-06T15:00:00.000Z", updatedAt: "2026-04-06T15:00:00.000Z" },
      { id: "preset_demo_2", title: "成都茶馆慢慢坐", city: "chengdu", content: "一杯茶、一把竹椅，午后的时间好像被放慢了。", images: ["resource/users/demo/chengdu-tea.svg"], media: [{ type: "image", src: "resource/users/demo/chengdu-tea.svg" }], createdAt: "2026-04-16T14:20:00.000Z", updatedAt: "2026-04-16T14:20:00.000Z" }
    ]
  }
};


function enhanceCityGoPresetDataForRichDiary() {
  Object.keys(CITYGO_PRESET_DATA).forEach(function (username) {
    var preset = CITYGO_PRESET_DATA[username] || {};
    (preset.wishlist || []).forEach(function (city) {
      city.img = "";
    });
    (preset.diaries || []).forEach(function (entry) {
      var media = Array.isArray(entry.media) ? entry.media : [];
      var firstImage = media.find(function (item) { return item && item.type !== "video" && item.src; });
      var video = media.find(function (item) { return item && item.type === "video" && item.cover; });
      var imageSrc = firstImage ? firstImage.src : ((entry.images && entry.images[0]) || "");
      entry.cover = entry.cover || imageSrc || (video && video.cover) || "";
      if (!entry.contentHtml) {
        var sentences = String(entry.content || "").split("。").filter(function (line) { return line.trim(); });
        var first = sentences[0] ? sentences[0] + "。" : String(entry.content || "");
        var rest = sentences.slice(1).map(function (line) { return line + "。"; }).join("");
        entry.contentHtml =
          '<p>' + first + '</p>' +
          (imageSrc ? '<figure class="diary-inline-figure"><img src="' + imageSrc + '" alt="日记图片" loading="lazy"><figcaption>旅途瞬间</figcaption></figure>' : '') +
          (rest ? '<p>' + rest + '</p>' : '');
      }
    });
  });
}

enhanceCityGoPresetDataForRichDiary();

function getCityGoCurrentUserForSeed() {
  try { return JSON.parse(localStorage.getItem("citygo_current_user") || "null"); }
  catch (e) { return null; }
}

function ensureCityGoPresetDataForCurrentUser() {
  var user = getCityGoCurrentUserForSeed();
  if (!user || !user.username) return;
  var preset = CITYGO_PRESET_DATA[user.username];
  if (!preset) return;

  var wishlistKey = "citygo_wishlist_" + user.username;
  var diaryKey = "citygo_diary_" + user.username;

  var versionKey = "citygo_preset_version_" + user.username;
  var shouldRefreshPreset = localStorage.getItem(versionKey) !== "rich-diary-v2";

  if (!localStorage.getItem(wishlistKey) || shouldRefreshPreset) {
    localStorage.setItem(wishlistKey, JSON.stringify(preset.wishlist || []));
  }
  if (!localStorage.getItem(diaryKey) || shouldRefreshPreset) {
    localStorage.setItem(diaryKey, JSON.stringify(preset.diaries || []));
  }
  localStorage.setItem(versionKey, "rich-diary-v2");
}
