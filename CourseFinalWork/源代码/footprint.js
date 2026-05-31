

var CITY_COORDS = {
  beijing:   { lat: 39.9042, lng: 116.4074 },
  shanghai:  { lat: 31.2304, lng: 121.4737 },
  guangzhou: { lat: 23.1291, lng: 113.2644 },
  hangzhou:  { lat: 30.2741, lng: 120.1551 },
  chengdu:   { lat: 30.5728, lng: 104.0668 },
  chongqing: { lat: 29.4316, lng: 106.9123 },
  nanjing:   { lat: 32.0603, lng: 118.7969 },
  xian:      { lat: 34.3416, lng: 108.9398 },
  xiamen:    { lat: 24.4798, lng: 118.0894 }
};

var CITY_FALLBACKS = {
  beijing:   { name: "北京",   img: "",     intro: "拥有深厚历史积淀和现代都市活力，是了解中国传统文化的重要窗口。", tags: ["历史古都","文化地标","胡同"] },
  shanghai:  { name: "上海",   img: "",   intro: "兼具摩登都市、海派文化与精致生活方式。",                       tags: ["现代都市","夜景","海派文化"] },
  guangzhou: { name: "广州",   img: "", intro: "粤菜发源地之一，早茶文化浓厚，兼具历史底蕴与现代活力。",         tags: ["美食之都","早茶文化","岭南风情"] },
  hangzhou:  { name: "杭州",   img: "",   intro: "以西湖风光和江南气质闻名，适合城市漫步和湖边骑行。",             tags: ["自然风光","江南水乡","茶文化"] },
  chengdu:   { name: "成都",   img: "",     intro: "将烟火气与慢生活融合，适合品尝美食、感受茶馆文化。",             tags: ["美食之都","慢生活","熊猫"] },
  chongqing: { name: "重庆",   img: "", intro: "以山城地貌、立体交通和热辣美食吸引游客。",                       tags: ["山城","火锅","夜景"] },
  nanjing:   { name: "南京",   img: "",     intro: "六朝古都，民国遗韵，秦淮河畔感受历史与现代的交融。",             tags: ["历史古都","民国风情","秦淮河"] },
  xian:      { name: "西安",   img: "",           intro: "世界四大古都之一，秦汉唐文化汇聚，美食与历史并重。",             tags: ["历史古都","兵马俑","碳水天堂"] },
  xiamen:    { name: "厦门",   img: "",       intro: "清新的海滨城市，适合看海、骑行、拍照和体验文艺街区。",           tags: ["海滨城市","文艺","闽南风情"] }
};

var footprintMapEl = document.getElementById("footprintMap");
var footprintOverlay = document.getElementById("footprintOverlay");
var footprintOverlayTitle = document.getElementById("footprintOverlayTitle");
var footprintOverlayDesc = document.getElementById("footprintOverlayDesc");
var footprintOverlayActions = document.getElementById("footprintOverlayActions");
var footprintLegend = document.getElementById("footprintLegend");

var map = null;
var markerGroup = null;

function getFootprintUser() {
  try {
    return JSON.parse(localStorage.getItem("citygo_current_user") || "null");
  } catch (e) {
    return null;
  }
}

function getFootprintWishlist() {
  var user = getFootprintUser();
  if (!user) return [];
  try {
    var list = JSON.parse(localStorage.getItem("citygo_wishlist_" + user.username) || "[]");
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function fpExtractFirstImageFromHTML(html) {
  var div = document.createElement("div");
  div.innerHTML = html || "";
  var img = div.querySelector("img");
  return img ? (img.getAttribute("src") || "") : "";
}

function getFootprintDiaryCities() {
  var user = getFootprintUser();
  if (!user) return [];
  try {
    var entries = JSON.parse(localStorage.getItem("citygo_diary_" + user.username) || "[]");
    if (!Array.isArray(entries)) return [];
    return entries.filter(function (entry) { return entry && entry.city; }).map(function (entry) {
      var fallback = CITY_FALLBACKS[entry.city] || {};
      var media = Array.isArray(entry.media) ? entry.media : [];
      var firstMedia = media.length ? media[0] : null;
      return {
        id: entry.city,
        name: fallback.name || entry.city,
        img: entry.cover || fpExtractFirstImageFromHTML(entry.contentHtml) || (firstMedia && (firstMedia.cover || firstMedia.src)) || (entry.images && entry.images[0]) || fallback.img || "",
        intro: "这座城市已收录在你的旅行日记中：" + (entry.title || "旅行记录"),
        tags: ["旅行日记", "已记录"],
        fromDiary: true
      };
    });
  } catch (e) {
    return [];
  }
}

function mergeFootprintCities(wishlist, diaryCities) {
  var map = {};
  wishlist.concat(diaryCities).forEach(function (city) {
    if (!city || !city.id) return;
    var old = map[city.id] || {};
    map[city.id] = Object.assign({}, old, city, {
      fromWishlist: old.fromWishlist || !city.fromDiary,
      fromDiary: old.fromDiary || !!city.fromDiary
    });
  });
  return Object.keys(map).map(function (key) { return map[key]; });
}

function fpEscape(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function showFootprintMap() {
  footprintOverlay.classList.add("hidden");
  footprintLegend.classList.remove("hidden");
}

function showFootprintOverlay(title, desc, actionsHTML) {
  footprintOverlayTitle.innerText = title;
  footprintOverlayDesc.innerText = desc;
  footprintOverlayActions.innerHTML = actionsHTML;
  footprintOverlay.classList.remove("hidden");
  footprintLegend.classList.add("hidden");
}

function initFootprintMap() {
  if (map) return;

  map = L.map("footprintMap", {
    center: [34.0, 108.0],
    zoom: 5,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    subdomains: ["1", "2", "3", "4"],
    attribution: "&copy; 高德地图 | <a href='https://www.amap.com/'>AutoNavi</a>",
    maxZoom: 18
  }).addTo(map);

  markerGroup = L.layerGroup().addTo(map);
}

function renderFootprintMarkers(wishlist) {
  if (!markerGroup) return;

  markerGroup.clearLayers();

  wishlist.forEach(function (city) {
    var cityId = city.id;
    var coords = CITY_COORDS[cityId];
    if (!coords) return;

    var fallback = CITY_FALLBACKS[cityId] || {};
    var cityName = city.name || fallback.name || cityId;
    var cityImg = city.img || fallback.img || "";
    var cityIntro = city.intro || fallback.intro || "";
    var cityTags = Array.isArray(city.tags) && city.tags.length ? city.tags : (fallback.tags || []);

    var popupHTML = '<div class="footprint-popup">' +
      '<div class="popup-header">' +
        (cityImg ? '<img src="' + fpEscape(cityImg) + '" alt="' + fpEscape(cityName) + '" />' : '') +
        '<div class="popup-title">' + fpEscape(cityName) +
          '<small>' + (city.fromDiary ? '旅行日记城市' : '心愿足迹城市') + '</small>' +
        '</div>' +
      '</div>' +
      '<div class="popup-body">' + fpEscape(cityIntro) + '</div>' +
      '<div class="popup-tags">' +
        cityTags.map(function (tag) {
          return '<span class="popup-tag">' + fpEscape(tag) + '</span>';
        }).join("") +
      '</div>' +
      '<a class="popup-link" href="diary.html?city=' + fpEscape(cityId) + '&from=footprint">查看旅行日记 →</a>' +
    '</div>';

    var markerIcon = L.divIcon({
      className: "footprint-marker-icon",
      html: '<div class="footprint-marker-dot"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -10]
    });

    var marker = L.marker([coords.lat, coords.lng], { icon: markerIcon })
      .bindPopup(popupHTML, {
        maxWidth: 280,
        className: "footprint-popup-wrapper"
      });

    markerGroup.addLayer(marker);
  });

  if (wishlist.length > 0 && markerGroup.getLayers().length > 0) {
    var bounds = markerGroup.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 7 });
    }
  }
}

function injectMarkerStyles() {
  var style = document.createElement("style");
  style.textContent =
    ".footprint-marker-icon { background: transparent !important; border: none !important; }" +
    ".footprint-marker-dot {" +
      "width: 16px; height: 16px;" +
      "background: #1677ff;" +
      "border: 3px solid #fff;" +
      "border-radius: 50%;" +
      "box-shadow: 0 0 0 3px #1677ff, 0 2px 8px rgba(0,0,0,0.25);" +
      "transition: transform 0.2s ease, box-shadow 0.2s ease;" +
      "cursor: pointer;" +
    "}" +
    ".footprint-marker-dot:hover {" +
      "transform: scale(1.3);" +
      "box-shadow: 0 0 0 3px #ff9f43, 0 4px 14px rgba(0,0,0,0.35);" +
    "}";
  document.head.appendChild(style);
}

function initFootprintPage() {
  if (typeof L === "undefined") {
    showFootprintOverlay(
      "地图加载失败",
      "地图库未能成功加载，请检查网络连接后刷新页面重试。",
      '<a class="primary-btn" href="javascript:location.reload()">刷新页面</a>' +
      '<a class="ghost-btn" href="index.html">返回首页</a>'
    );
    return;
  }

  injectMarkerStyles();
  initFootprintMap();

  var user = getFootprintUser();

  if (!user) {
    showFootprintOverlay(
      "旅行足迹地图",
      "登录后，你在心愿单中收藏的城市会自动出现在这张地图上，记录你的旅行足迹与向往的目的地。",
      '<a class="primary-btn" href="login.html">去登录</a>' +
      '<a class="ghost-btn" href="index.html#citySection">探索城市</a>'
    );
    return;
  }

  if (typeof ensureCityGoPresetDataForCurrentUser === "function") {
    ensureCityGoPresetDataForCurrentUser();
  }

  var wishlist = getFootprintWishlist();
  var diaryCities = getFootprintDiaryCities();
  var footprintCities = mergeFootprintCities(wishlist, diaryCities);

  if (footprintCities.length === 0) {
    showFootprintOverlay(
      user.username + " 的旅行足迹",
      "你的心愿单和旅行日记还没有城市数据，收藏城市或写日记后，它们都会出现在地图上。",
      '<a class="primary-btn" href="index.html#citySection">去探索城市</a>' +
      '<a class="ghost-btn" href="diary.html">写旅行日记</a>'
    );
    return;
  }

  showFootprintMap();
  renderFootprintMarkers(footprintCities);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFootprintPage);
} else {
  initFootprintPage();
}
