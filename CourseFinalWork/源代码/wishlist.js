

const wishlistBox = document.getElementById("wishlistBox");
const clearWishlist = document.getElementById("clearWishlist");
const wishLoginLink = document.getElementById("wishLoginLink") || document.getElementById("loginLink");

const WISHLIST_CITY_FALLBACKS = {
  chengdu: {
    name: "成都",
    img: "resource/images/chengdu/chengdu_main.jpg",
    intro: "一座将烟火气与慢生活融合在一起的城市，适合品尝美食、感受茶馆文化和城市休闲氛围。",
    tags: ["美食之都", "慢生活", "熊猫"]
  },
  hangzhou: {
    name: "杭州",
    img: "resource/images/hangzhou/hangzhou_main.jpg",
    intro: "杭州以西湖风光和江南气质闻名，适合城市漫步、湖边骑行和古街游览。",
    tags: ["自然风光", "江南水乡", "茶文化"]
  },
  beijing: {
    name: "北京",
    img: "resource/images/beijing/beijing_main.jpg",
    intro: "北京拥有深厚的历史积淀和现代都市活力，是了解中国传统文化与城市发展的重要窗口。",
    tags: ["历史古都", "文化地标", "胡同"]
  },
  shanghai: {
    name: "上海",
    img: "resource/images/shanghai/shanghai_main.jpg",
    intro: "上海兼具摩登都市、海派文化与精致生活方式，适合城市观光和夜景摄影。",
    tags: ["现代都市", "夜景", "海派文化"]
  },
  xiamen: {
    name: "厦门",
    img: "resource/images/xiamen/xiamen_main.jpg",
    intro: "厦门是一座清新的海滨城市，适合看海、骑行、拍照和体验文艺街区。",
    tags: ["海滨城市", "文艺", "闽南风情"]
  },
  chongqing: {
    name: "重庆",
    img: "resource/images/chongqing/chongqing_main.jpg",
    intro: "重庆以山城地貌、立体交通和热辣美食吸引游客，是极具辨识度的网红旅行城市。",
    tags: ["山城", "火锅", "夜景"]
  },
  guangzhou: {
    name: "广州",
    img: "resource/images/guangzhou/guangzhou_main.jpg",
    intro: "广州是粤菜发源地之一，早茶文化浓厚，兼具历史底蕴与现代活力。",
    tags: ["美食之都", "早茶文化", "岭南风情"]
  },
  nanjing: {
    name: "南京",
    img: "resource/images/nanjing/nanjing_main.jpg",
    intro: "六朝古都，民国遗韵，秦淮河畔感受历史与现代的交融。",
    tags: ["历史古都", "民国风情", "秦淮河"]
  },
  xian: {
    name: "西安",
    img: "resource/images/xian/xian_main.jpg",
    intro: "世界四大古都之一，秦汉唐文化汇聚，美食与历史并重。",
    tags: ["历史古都", "兵马俑", "碳水天堂"]
  }
};

function normalizeWishlistCity(city) {
  const fallback = WISHLIST_CITY_FALLBACKS[city.id] || {};

  const normalizedImg = fallback.img || city.img || "resource/images/hangzhou/hangzhou_main.jpg";

  return {
    ...fallback,
    ...city,
    intro: city.intro || city.desc || city.description || fallback.intro || "这座城市拥有独特的旅行气质，适合加入心愿单后进一步查看详细介绍。",
    img: normalizedImg,
    tags: Array.isArray(city.tags) && city.tags.length ? city.tags : (fallback.tags || ["城市旅行"])
  };
}

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("citygo_current_user") || "null");
}

function getWishlistKey() {
  const user = getCurrentUser();
  return user ? `citygo_wishlist_${user.username}` : null;
}

function renderWishlist() {
  if (typeof ensureCityGoPresetDataForCurrentUser === "function") {
    ensureCityGoPresetDataForCurrentUser();
  }
  const user = getCurrentUser();
  if (user) {
    wishLoginLink.innerText = user.username;
    wishLoginLink.href = "user.html";
  }

  if (!user) {
    wishlistBox.innerHTML = `<div class="empty-state">请先登录后查看旅行心愿单。<br><br><a class="primary-btn" href="login.html">去登录</a></div>`;
    clearWishlist.classList.add("hidden");
    return;
  }

  const key = getWishlistKey();
  const rawList = JSON.parse(localStorage.getItem(key) || "[]");
  const list = rawList.map(normalizeWishlistCity);

  if (JSON.stringify(rawList) !== JSON.stringify(list)) {
    localStorage.setItem(key, JSON.stringify(list));
  }

  if (list.length === 0) {
    wishlistBox.innerHTML = `<div class="empty-state">你的心愿单还是空的，快去首页收藏想去的城市吧！<br><br><a class="primary-btn" href="index.html">返回首页</a></div>`;
    clearWishlist.classList.add("hidden");
    return;
  }

  clearWishlist.classList.remove("hidden");
  wishlistBox.innerHTML = list.map((city, index) => `
    <article class="wish-card wishlist-sequence-reveal" data-city-id="${city.id}" tabindex="0" role="link" aria-label="查看${city.name}城市详情" style="--wish-delay: ${Math.min(index, 8) * 0.11}s">
      <img src="${escapeAttr(city.img)}" alt="${city.name}" data-fallback-img="${escapeAttr(WISHLIST_CITY_FALLBACKS[city.id]?.img || 'resource/images/hangzhou/hangzhou_main.jpg')}" onerror="this.onerror=null; this.src=this.dataset.fallbackImg;" />
      <div class="wish-card-body">
        <h3>${city.name}</h3>
        <p>${city.intro}</p>
        <div class="tag-row">${city.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <button class="small-btn remove-btn" data-id="${city.id}">移出心愿单</button>
      </div>
    </article>
  `).join("");

  initWishlistSequenceReveal();
}

function initWishlistSequenceReveal() {
  const cards = Array.from(document.querySelectorAll(".wish-card.wishlist-sequence-reveal"));
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach(card => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target;
      if (entry.isIntersecting) {
        card.classList.add("is-visible");
        return;
      }

      if (entry.boundingClientRect.top > window.innerHeight || entry.boundingClientRect.bottom < 0) {
        card.classList.add("reveal-resetting");
        card.classList.remove("is-visible");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => card.classList.remove("reveal-resetting"));
        });
      }
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -4% 0px" });

  cards.forEach(card => observer.observe(card));
}

wishlistBox.addEventListener("click", function (e) {
  const removeBtn = e.target.closest(".remove-btn");
  if (removeBtn) {
    const key = getWishlistKey();
    const id = removeBtn.dataset.id;
    const list = JSON.parse(localStorage.getItem(key) || "[]");
    const newList = list.filter(city => city.id !== id);
    localStorage.setItem(key, JSON.stringify(newList));
    renderWishlist();
    return;
  }

  const card = e.target.closest(".wish-card");
  if (card && card.dataset.cityId) {
    location.href = `city.html?id=${card.dataset.cityId}&from=wishlist`;
  }
});

wishlistBox.addEventListener("keydown", function (e) {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".wish-card");
  if (card && card.dataset.cityId) {
    e.preventDefault();
    location.href = `city.html?id=${card.dataset.cityId}&from=wishlist`;
  }
});

clearWishlist.addEventListener("click", function () {
  const key = getWishlistKey();
  if (!key) return;
  if (confirm("确定要清空全部心愿城市吗？")) {
    localStorage.removeItem(key);
    renderWishlist();
  }
});

renderWishlist();
