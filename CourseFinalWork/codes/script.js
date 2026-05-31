

const cities = [
  {
    id: "chengdu",
    name: "成都",
    type: "food",
    img: "resource/images/chengdu/chengdu_main.jpg",
    intro: "一座将烟火气与慢生活融合在一起的城市，适合品尝美食、感受茶馆文化和城市休闲氛围。",
    scenery: "宽窄巷子、锦里、青城山、都江堰、熊猫基地",
    food: "火锅、串串香、担担面、钟水饺、兔头",
    culture: "巴蜀文化、茶馆文化、慢生活节奏",
    season: "3月—6月，9月—11月",
    tags: ["美食之都", "慢生活", "熊猫"]
  },
  {
    id: "hangzhou",
    name: "杭州",
    type: "nature",
    img: "resource/images/hangzhou/hangzhou_main.jpg",
    intro: "杭州以西湖风光和江南气质闻名，适合城市漫步、湖边骑行和古街游览。",
    scenery: "西湖、灵隐寺、千岛湖、河坊街、京杭大运河",
    food: "西湖醋鱼、龙井虾仁、片儿川、东坡肉",
    culture: "江南文化、茶文化、宋韵文化",
    season: "3月—5月，9月—10月",
    tags: ["自然风光", "江南水乡", "茶文化"]
  },
  {
    id: "beijing",
    name: "北京",
    type: "history",
    img: "resource/images/beijing/beijing_main.jpg",
    intro: "北京拥有深厚的历史积淀和现代都市活力，是了解中国传统文化与城市发展的重要窗口。",
    scenery: "故宫、天坛、长城、颐和园、什刹海",
    food: "北京烤鸭、炸酱面、豆汁、卤煮",
    culture: "宫廷文化、胡同文化、京味民俗",
    season: "4月—6月，9月—10月",
    tags: ["历史古都", "文化地标", "胡同"]
  },
  {
    id: "shanghai",
    name: "上海",
    type: "modern",
    img: "resource/images/shanghai/shanghai_main.jpg",
    intro: "上海兼具摩登都市、海派文化与精致生活方式，适合城市观光和夜景摄影。",
    scenery: "外滩、陆家嘴、武康路、豫园、南京路",
    food: "生煎包、小笼包、本帮菜、葱油拌面",
    culture: "海派文化、城市建筑、商业文明",
    season: "3月—5月，10月—11月",
    tags: ["现代都市", "夜景", "海派文化"]
  },
  {
    id: "xiamen",
    name: "厦门",
    type: "nature",
    img: "resource/images/xiamen/xiamen_main.jpg",
    intro: "厦门是一座清新的海滨城市，适合看海、骑行、拍照和体验文艺街区。",
    scenery: "鼓浪屿、环岛路、曾厝垵、厦门大学、南普陀寺",
    food: "沙茶面、海蛎煎、土笋冻、花生汤",
    culture: "闽南文化、海岛生活、文艺街区",
    season: "10月—次年4月",
    tags: ["海滨城市", "文艺", "闽南风情"]
  },
  {
    id: "chongqing",
    name: "重庆",
    type: "food",
    img: "resource/images/chongqing/chongqing_main.jpg",
    intro: "重庆以山城地貌、立体交通和热辣美食吸引游客，是极具辨识度的网红旅行城市。",
    scenery: "洪崖洞、解放碑、长江索道、磁器口、南山夜景",
    food: "重庆火锅、小面、酸辣粉、毛血旺",
    culture: "山城文化、码头文化、夜景文化",
    season: "3月—5月，9月—11月",
    tags: ["山城", "火锅", "夜景"]
  },
  {
    id: "guangzhou",
    name: "广州",
    type: "food",
    img: "resource/images/guangzhou/guangzhou_main.jpg",
    intro: "广州是粤菜发源地之一，早茶文化浓厚，兼具历史底蕴与现代活力。",
    scenery: "广州塔、沙面、陈家祠、白云山、长隆",
    food: "虾饺、肠粉、烧鹅、煲仔饭、双皮奶",
    culture: "岭南文化、广府文化、商贸传统",
    season: "10月—12月，3月—5月",
    tags: ["美食之都", "早茶文化", "岭南风情"]
  },
  {
    id: "nanjing",
    name: "南京",
    type: "history",
    img: "resource/images/nanjing/nanjing_main.jpg",
    intro: "六朝古都，民国遗韵，秦淮河畔感受历史与现代的交融。",
    scenery: "中山陵、夫子庙、总统府、玄武湖、明孝陵",
    food: "盐水鸭、鸭血粉丝汤、汤包、梅花糕",
    culture: "六朝文化、民国文化、科举文化",
    season: "3月—5月，9月—11月",
    tags: ["历史古都", "民国风情", "秦淮河"]
  },
  {
    id: "xian",
    name: "西安",
    type: "history",
    img: "resource/images/xian/xian_main.jpg",
    intro: "世界四大古都之一，秦汉唐文化汇聚，美食与历史并重。",
    scenery: "兵马俑、大雁塔、古城墙、回民街、华清池",
    food: "肉夹馍、凉皮、羊肉泡馍、Biángbiáng面",
    culture: "秦汉文化、盛唐文化、丝路起点",
    season: "3月—6月，9月—11月",
    tags: ["历史古都", "兵马俑", "碳水天堂"]
  }

];

window.CityGoCities = cities;

const heroSlides = [
  {
    title: "杭州 · 西湖晨光",
    desc: "西湖、茶园与江南水汽交织成温柔风景",
    img: "resource/images/hangzhou/hangzhou_westlake_morning.jpg",
    cityId: "hangzhou"
  },
  {
    title: "杭州 · 山水茶园",
    desc: "在龙井茶香与湖畔绿意中放慢脚步",
    img: "resource/images/hangzhou/hangzhou_tea_garden.jpg",
    cityId: "hangzhou"
  },
  {
    title: "成都 · 街巷烟火",
    desc: "茶馆、巷子与美食构成松弛的慢生活",
    img: "resource/images/chengdu/chengdu_street_scene.jpg",
    cityId: "chengdu"
  },
  {
    title: "重庆 · 山城夜色",
    desc: "立体街巷、江岸灯火与热辣火锅同样迷人",
    img: "resource/images/chongqing/chongqing_night_view.jpg",
    cityId: "chongqing"
  },
  {
    title: "厦门 · 海边日落",
    desc: "海风、沙滩与文艺街区适合轻松漫游",
    img: "resource/images/xiamen/xiamen_sunset.jpg",
    cityId: "xiamen"
  },
  {
    title: "厦门 · 清新海岸",
    desc: "蓝色海岸线与城市生活相互映照",
    img: "resource/images/xiamen/xiamen_coast_view.jpg",
    cityId: "xiamen"
  },
  {
    title: "南京 · 古都记忆",
    desc: "历史街巷与梧桐树影记录城市风骨",
    img: "resource/images/nanjing/nanjing_main.jpg",
    cityId: "nanjing"
  },
  {
    title: "西安 · 盛唐回响",
    desc: "古城墙与市井烟火串联起千年古都",
    img: "resource/images/xian/xian_main.jpg",
    cityId: "xian"
  }
];

const routes = {
  one: {
    title: "一日游路线推荐",
    list: [
      "08:30｜城市地标打卡：优先选择交通便利、辨识度高的核心景点，快速建立对城市的第一印象。",
      "10:30｜特色街区漫步：安排老街、湖边、江边或历史街区，适合拍照和感受城市生活气息。",
      "12:00｜代表美食品尝：选择当地经典餐厅或小吃聚集区，把午餐设计成城市味道体验。",
      "14:00｜文化场馆补充：参观博物馆、纪念馆、艺术空间或非遗体验点，让行程更有内容深度。",
      "16:30｜轻松休闲时段：预留咖啡馆、茶馆、公园或商圈时间，避免一日游过于赶路。",
      "19:00｜夜景与夜市收尾：选择城市夜景、灯光街区或夜市，用视觉和美食结束当天行程。"
    ]
  },
  three: {
    title: "三日游路线推荐",
    list: [
      "第一天上午｜抵达与核心地标：先游览城市代表景点，适合拍摄封面照片和熟悉交通路线。",
      "第一天下午｜历史文化街区：串联古街、博物馆或城市记忆空间，理解城市发展脉络。",
      "第一天夜晚｜夜景路线：安排江边、湖边、观景台或夜市，感受城市夜间氛围。",
      "第二天上午｜自然风光路线：前往山水、公园、海边、茶园等区域，放慢节奏体验城市自然面。",
      "第二天下午｜美食与市井体验：选择菜市场、小吃街、老字号或本地餐馆，体验真实烟火气。",
      "第三天上午｜小众街区探索：选择游客较少但有特色的社区、书店、文创园或摄影点。",
      "第三天下午｜伴手礼与返程：购买地方特产，整理照片和收藏城市，为下一次深度游留下线索。"
    ]
  },
  deep: {
    title: "深度游路线推荐",
    list: [
      "主题一｜城市历史线：围绕古城、名人故居、博物馆和历史建筑设计半天到一天的文化路线。",
      "主题二｜本地生活线：体验早市、茶馆、社区公园、居民街巷，观察城市真实生活节奏。",
      "主题三｜美食探索线：从早餐、小吃、正餐到夜宵分时段安排，形成完整的城市味觉地图。",
      "主题四｜自然周边线：预留一天前往近郊山水、海岛、古镇或湿地，丰富旅行层次。",
      "主题五｜摄影记录线：选择日出、傍晚、夜景和街拍点位，制作城市影像手账或旅行短片。",
      "主题六｜自由调整线：每天保留一段弹性时间，用于二刷喜欢的地点、临时发现小店或休息补给。"
    ]
  }
};

const cityGrid = document.getElementById("cityGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const routeBtns = document.querySelectorAll(".route-btn");
const routeContent = document.getElementById("routeContent");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroDots = document.getElementById("heroDots");
const heroSlider = document.getElementById("heroSlider");
let heroIndex = 0;
let heroAutoTimer = null;
let currentType = "all";
let currentKeyword = "";
let currentPage = 1;
const pageSize = 6;

if (window.CityGoCityModal) {
  window.CityGoCityModal.init(cities);
}

function renderPagination(totalPages, currentPage) {
  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  const pageInfo = document.getElementById("pageInfo");
  if (!prevBtn) return;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  pageInfo.innerText = `第${currentPage}页 / 共${totalPages}页`;
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    filterBtns.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
    currentType = this.dataset.type;
    currentKeyword = searchInput.value;
    currentPage = 1;
    refreshCities();
  });
});

searchInput.addEventListener("input", function () {
  currentKeyword = this.value;
  currentType = document.querySelector(".filter-btn.active").dataset.type;
  currentPage = 1;
  refreshCities();
});

document.getElementById("prevPageBtn")?.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    refreshCities();
  }
});
document.getElementById("nextPageBtn")?.addEventListener("click", () => {
  if (window._currentTotalPages && currentPage < window._currentTotalPages) {
    currentPage++;
    refreshCities();
  }
});

function buildCityCards(type = "all", keyword = "", page = 1, pageSize = 6) {
  const lowerKeyword = keyword.trim().toLowerCase();
  const filtered = cities.filter(city => {
    const matchType = type === "all" || city.type === type;
    const text = `${city.name} ${city.intro} ${city.scenery} ${city.food} ${city.culture} ${city.tags.join(" ")}`.toLowerCase();
    const matchKeyword = !lowerKeyword || text.includes(lowerKeyword);
    return matchType && matchKeyword;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCities = filtered.slice(start, end);

  cityGrid.innerHTML = "";

  if (paginatedCities.length === 0) {
    cityGrid.innerHTML = `<div class="empty-state">没有找到匹配的城市，请更换关键词或筛选条件。</div>`;
  } else {
    paginatedCities.forEach(city => {
      const card = document.createElement("article");
      card.className = "city-card";
      card.setAttribute("draggable", "true");
      card.setAttribute("data-city-id", city.id);
      card.innerHTML = `
        <img src="${city.img}" alt="${city.name}" />
        <div class="city-card-body">
          <h3>${city.name}</h3>
          <p>${city.intro}</p>
          <div class="tag-row">${city.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="small-btn detail-btn" data-id="${city.id}">查看详情</button>
            <a class="small-btn page-btn" href="city.html?id=${city.id}&from=popular">详细介绍</a>
            <button class="small-btn collect-btn" data-id="${city.id}">加入心愿单</button>
          </div>
        </div>
      `;
      cityGrid.appendChild(card);

      card.addEventListener('dragstart', function(e) {
        const cityId = this.dataset.cityId;
        const dragCity = cities.find(c => c.id === cityId);
        if (dragCity) {
          e.dataTransfer.setData('text/plain', JSON.stringify(dragCity));
          e.dataTransfer.effectAllowed = 'copy';
        }
      });
    });
  }

  renderPagination(totalPages, page);
  window._currentTotalPages = totalPages;
}

function openModal(cityId) {
  if (window.CityGoCityModal) {
    window.CityGoCityModal.open(cityId);
  }
}

function addToWishlist(city) {
  if (window.CityGoCityModal) {
    window.CityGoCityModal.addToWishlist(city);
  }
}

cityGrid.addEventListener("click", function (e) {
  const actionTarget = e.target.closest("button, a");
  const card = e.target.closest(".city-card");

  if (actionTarget && actionTarget.classList.contains("page-btn")) return;

  if (actionTarget) {
    const id = actionTarget.dataset.id;
    if (!id) return;
    const city = cities.find(item => item.id === id);
    if (actionTarget.classList.contains("detail-btn")) openModal(id);
    if (actionTarget.classList.contains("collect-btn")) addToWishlist(city);
    return;
  }

  if (card && card.dataset.cityId) {
    openModal(card.dataset.cityId);
  }
});

function setRouteContent(type = "one") {
  const route = routes[type];
  routeContent.innerHTML = `
    <h3>${route.title}</h3>
    <ul>${route.list.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderRoute(type = "one", animated = false) {
  if (!animated) {
    setRouteContent(type);
    return;
  }
  routeContent.classList.add("route-leave");
  window.setTimeout(() => {
    setRouteContent(type);
    routeContent.classList.remove("route-leave");
    routeContent.classList.add("route-enter");
    window.setTimeout(() => routeContent.classList.remove("route-enter"), 480);
  }, 180);
}

routeBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    routeBtns.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
    renderRoute(this.dataset.route, true);
  });
});

function showHeroSlide(index, direction = "next") {
  const heroImage = document.getElementById("heroImage");
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");
  const heroInfo = document.querySelector(".hero-card-info");
  const imageWindow = document.querySelector(".hero-image-window");
  const nextIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[nextIndex];
  const isPrev = direction === "prev";
  const inClass = isPrev ? "hero-img-in-prev" : "hero-img-in-next";
  const outClass = isPrev ? "hero-img-out-prev" : "hero-img-out-next";
  const infoClass = isPrev ? "slide-prev" : "slide-next";

  heroIndex = nextIndex;

  if (imageWindow && heroImage) {
    imageWindow.querySelectorAll(".hero-slide-ghost").forEach(img => img.remove());

    const oldImage = heroImage.cloneNode(true);
    oldImage.removeAttribute("id");
    oldImage.className = "hero-slide-ghost";
    oldImage.src = heroImage.src;
    oldImage.alt = "上一张风景图";
    imageWindow.appendChild(oldImage);

    heroImage.classList.remove("slide-next", "slide-prev", "hero-img-in-next", "hero-img-in-prev");
    if (heroInfo) heroInfo.classList.remove("slide-next", "slide-prev");

    void heroImage.offsetWidth;

    heroImage.src = slide.img;
    oldImage.classList.add(outClass);
    heroImage.classList.add(inClass);
    window.setTimeout(() => oldImage.remove(), 1450);
  } else if (heroImage) {
    heroImage.src = slide.img;
  }

  if (heroTitle) heroTitle.innerText = slide.title;
  if (heroDesc) heroDesc.innerText = slide.desc;
  if (heroImage) {
    heroImage.alt = `${slide.title}风景图`;
    heroImage.dataset.cityId = slide.cityId;
  }
  if (imageWindow) {
    imageWindow.dataset.cityId = slide.cityId;
    imageWindow.setAttribute("role", "link");
    imageWindow.setAttribute("tabindex", "0");
    imageWindow.setAttribute("aria-label", `查看${slide.title.split(" · ")[0]}城市详情`);
  }
  if (heroInfo) {
    void heroInfo.offsetWidth;
    heroInfo.classList.add(infoClass);
  }

  if (heroDots) {
    heroDots.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === heroIndex);
    });
  }
}

function startHeroAutoScroll() {
  clearInterval(heroAutoTimer);
  heroAutoTimer = setInterval(() => showHeroSlide(heroIndex + 1, "next"), 3000);
}

function initHeroSlider() {
  if (!heroDots) return;
  heroDots.innerHTML = heroSlides.map((_, i) => `<button aria-label="切换到第${i + 1}张风景图"></button>`).join("");
  heroDots.querySelectorAll("button").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const direction = i < heroIndex ? "prev" : "next";
      showHeroSlide(i, direction);
      startHeroAutoScroll();
    });
  });
  if (heroPrev) heroPrev.addEventListener("click", () => { showHeroSlide(heroIndex - 1, "prev"); startHeroAutoScroll(); });
  if (heroNext) heroNext.addEventListener("click", () => { showHeroSlide(heroIndex + 1, "next"); startHeroAutoScroll(); });
  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", () => clearInterval(heroAutoTimer));
    heroSlider.addEventListener("mouseleave", startHeroAutoScroll);
  }
  const heroImageWindow = document.querySelector(".hero-image-window");
  if (heroImageWindow) {
    const openCurrentHeroCity = () => {
      const slide = heroSlides[heroIndex];
      if (slide && slide.cityId) location.href = `city.html?id=${slide.cityId}&from=hero`;
    };
    heroImageWindow.addEventListener("click", openCurrentHeroCity);
    heroImageWindow.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCurrentHeroCity();
      }
    });
  }
  showHeroSlide(0, "next");
  startHeroAutoScroll();
}

function updateNavStatus() {
  const user = JSON.parse(localStorage.getItem("citygo_current_user") || "null");
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const logoutBtn = document.getElementById("logoutBtn");
  if (user) {
    loginLink.innerText = user.username;
    loginLink.href = "user.html";
    registerLink.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  }
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("citygo_current_user");
    location.reload();
  });
}

function renderCities(type = "all", keyword = "") {
  buildCityCards(type, keyword);
}

function renderCitiesSmooth(type = "all", keyword = "") {
  cityGrid.classList.add("grid-leave");
  window.setTimeout(() => {
    buildCityCards(type, keyword);
    cityGrid.classList.remove("grid-leave");
    cityGrid.classList.add("grid-enter");
    window.setTimeout(() => cityGrid.classList.remove("grid-enter"), 500);
  }, 180);
}

function refreshCities() {
  cityGrid.classList.add("grid-leave");
  setTimeout(() => {
    buildCityCards(currentType, currentKeyword, currentPage, pageSize);
    cityGrid.classList.remove("grid-leave");
    cityGrid.classList.add("grid-enter");
    setTimeout(() => cityGrid.classList.remove("grid-enter"), 500);
  }, 180);
}

const closeAdBtn = document.getElementById('closeAdBtn');
const floatingAd = document.getElementById('floatingAd');
if (closeAdBtn && floatingAd) {
  closeAdBtn.addEventListener('click', function() {
    floatingAd.style.display = 'none';
  });
}

function initSceneryVideoAutoplay() {
  const video = document.getElementById("sceneryVideo");
  const videoSection = document.querySelector(".video-section");
  const videoContainer = document.querySelector(".video-container");
  if (!video || !videoSection) return;

  video.volume = 0.2;
  video.muted = false;
  video.defaultMuted = false;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  let hasTriedAfterReveal = false;

  const tryPlay = () => {
    video.volume = 0.2;
    video.muted = false;
    video.defaultMuted = false;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise
        .then(() => {
          video.dataset.autoplayBlocked = "false";
        })
        .catch(() => {
          video.dataset.autoplayBlocked = "true";
        });
    }
  };

  const playAfterReveal = () => {
    if (hasTriedAfterReveal) return;
    hasTriedAfterReveal = true;
    window.setTimeout(tryPlay, 450);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playAfterReveal();
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    observer.observe(videoContainer || videoSection);
  } else {
    playAfterReveal();
  }

  ["click", "touchstart", "keydown"].forEach(eventName => {
    window.addEventListener(eventName, tryPlay, { once: true });
  });
}

renderCities();
renderRoute();
initHeroSlider();
initSceneryVideoAutoplay();
updateNavStatus();

const dropZone = document.getElementById('dropZone');
if (dropZone) {
  dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', function(e) {
    this.classList.remove('drag-over');
  });
  dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    const rawData = e.dataTransfer.getData('text/plain');
    if (rawData) {
      try {
        const city = JSON.parse(rawData);
        if (typeof addToWishlist === 'function') {
          addToWishlist(city);
        } else {
          console.warn('addToWishlist not found');
        }
      } catch (err) {
        console.error('拖放数据解析失败', err);
      }
    }
  });
}