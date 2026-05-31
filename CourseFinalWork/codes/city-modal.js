

(function () {
  let cityList = [];
  let currentCity = null;
  let bound = false;

  function getCity(cityId) {
    return cityList.find(item => item && item.id === cityId);
  }

  function ensureModal() {
    let modal = document.getElementById("cityModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "modal hidden";
    modal.id = "cityModal";
    modal.innerHTML = `
      <div class="modal-box">
        <button class="modal-close" id="modalClose" type="button" aria-label="关闭城市详情弹窗">×</button>
        <img id="modalImg" src="" alt="城市图片" />
        <div class="modal-content">
          <h2 id="modalTitle"></h2>
          <p id="modalIntro"></p>
          <div class="modal-tags" id="modalTags"></div>
          <div class="detail-list">
            <p><strong>代表风景：</strong><span id="modalScenery"></span></p>
            <p><strong>特色美食：</strong><span id="modalFood"></span></p>
            <p><strong>文化特色：</strong><span id="modalCulture"></span></p>
            <p><strong>推荐季节：</strong><span id="modalSeason"></span></p>
          </div>
          <div class="modal-action-row">
            <button class="primary-btn full" id="modalCollectBtn" type="button">加入心愿单</button>
            <a class="ghost-btn full" id="modalDetailLink" href="city.html">进入详细介绍页</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function setText(id, value, fallback = "暂无补充信息") {
    const el = document.getElementById(id);
    if (el) el.innerText = value || fallback;
  }

  function open(cityId) {
    const city = getCity(cityId);
    if (!city) return;

    currentCity = city;
    const modal = ensureModal();
    const modalImg = document.getElementById("modalImg");
    const modalTags = document.getElementById("modalTags");
    const modalDetailLink = document.getElementById("modalDetailLink");

    if (modalImg) {
      modalImg.src = city.img || "";
      modalImg.alt = city.name ? `${city.name} 城市图片` : "城市图片";
    }
    setText("modalTitle", city.name, "城市详情");
    setText("modalIntro", city.intro, "暂无城市简介");
    setText("modalScenery", city.scenery);
    setText("modalFood", city.food);
    setText("modalCulture", city.culture);
    setText("modalSeason", city.season);
    if (modalTags) {
      const tags = Array.isArray(city.tags) ? city.tags : [];
      modalTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    }
    if (modalDetailLink) modalDetailLink.href = `city.html?id=${city.id}&from=modal`;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function close() {
    const modal = document.getElementById("cityModal");
    if (modal) modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

function addToWishlist(city) {
    if (!city) return;
    let user = null;
    try {
      user = JSON.parse(localStorage.getItem("citygo_current_user") || "null");
    } catch (error) {
      user = null;
    }

    if (!user || !user.username) {
      alert("请先登录后再收藏城市！");
      location.href = "login.html";
      return;
    }

    const key = `citygo_wishlist_${user.username}`;
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(key) || "[]");
      if (!Array.isArray(list)) list = [];
    } catch (error) {
      list = [];
    }

    const exists = list.some(item => item && item.id === city.id);
    if (exists) {
      alert(`${city.name} 已经在你的心愿单中！`);
      return;
    }

    list.push(city);
    localStorage.setItem(key, JSON.stringify(list));
    alert(`已将 ${city.name} 加入心愿单！`);
  }

  function bindEvents() {
    if (bound) return;
    bound = true;

    document.addEventListener("click", function (event) {
      const modal = document.getElementById("cityModal");
      if (!modal) return;

      if (event.target && event.target.id === "modalClose") {
        close();
        return;
      }

      if (event.target === modal) {
        close();
        return;
      }

      if (event.target && event.target.id === "modalCollectBtn") {
        addToWishlist(currentCity);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  function init(cities) {
    cityList = Array.isArray(cities) ? cities : [];
    bindEvents();
  }

  window.CityGoCityModal = {
    init,
    open,
    close,
    addToWishlist,
    getCurrentCity: () => currentCity
  };
})();
