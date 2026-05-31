

(function () {
function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem("citygo_current_user") || "null");
    } catch (error) {
      return null;
    }
  }

  function getStoredUsers() {
    try {
      const users = JSON.parse(localStorage.getItem("citygo_users") || "[]");
      return Array.isArray(users) ? users : [];
    } catch (error) {
      return [];
    }
  }

  function saveStoredUsers(users) {
    if (Array.isArray(users)) {
      localStorage.setItem("citygo_users", JSON.stringify(users));
    }
  }

  function getUserByUsername(username) {
    if (!username) return null;
    return getStoredUsers().find(item => item && item.username === username) || null;
  }

  function getSafeUser(user) {
    const { password: _password, ...safeUser } = user || {};
    return safeUser;
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>\"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }[char]));
  }

  function getWishlistCount(username) {
    if (!username) return 0;
    try {
      const list = JSON.parse(localStorage.getItem(`citygo_wishlist_${username}`) || "[]");
      return Array.isArray(list) ? list.length : 0;
    } catch (error) {
      return 0;
    }
  }

  function getAvatarPath(username) {
    return `resource/users/${encodeURIComponent(username)}/avatar.jpg`;
  }

  function getDefaultAvatarPath() {
    return "resource/users/_/none_avatar.jpg";
  }

  function createAvatarHTML(username, sizeClass) {
    const initial = escapeHTML((username || "C").slice(0, 1).toUpperCase());
    const avatarPath = getAvatarPath(username || "demo");
    return `
      <div class="user-avatar ${sizeClass || ""}" data-initial="${initial}">
        <img src="${escapeHTML(avatarPath)}" data-fallback-src="${escapeHTML(getDefaultAvatarPath())}" alt="${escapeHTML(username)} 的头像" />
        <span class="avatar-fallback-text">${initial}</span>
      </div>
    `;
  }

  function bindAvatarFallbacks() {
    document.querySelectorAll(".user-avatar img").forEach(img => {
      img.addEventListener("load", () => {
        img.classList.add("is-loaded");
        const wrapper = img.closest(".user-avatar");
        if (wrapper) wrapper.classList.add("has-avatar-img");
      });
      img.addEventListener("error", () => {
        const fallbackSrc = img.dataset.fallbackSrc || getDefaultAvatarPath();
        const currentSrc = img.getAttribute("src") || "";

        if (currentSrc !== fallbackSrc) {
          img.src = fallbackSrc;
          img.alt = "默认用户头像";
          return;
        }

        img.removeAttribute("src");
        img.classList.remove("is-loaded");
        const wrapper = img.closest(".user-avatar");
        if (wrapper) wrapper.classList.remove("has-avatar-img");
      });
    });
  }

  function renderGuest(root) {
    root.innerHTML = `
      <section class="user-empty-card user-force-visible user-animate-item">
        <div class="user-avatar large" data-initial="?">
          <span class="avatar-fallback-text">?</span>
        </div>
        <h1>请先登录</h1>
        <p>登录后可以进入用户页面，查看个人信息和旅行心愿单。</p>
        <div class="user-actions">
          <a class="primary-btn" href="login.html">去登录</a>
          <a class="ghost-btn" href="register.html">注册账号</a>
        </div>
      </section>
    `;
  }

  function getProfileValue(user, key, fallback) {
    const value = user && user[key];
    return value === undefined || value === null || String(value).trim() === "" ? fallback : value;
  }

  function renderUser(root, user, sourceText) {
    const username = getProfileValue(user, "username", "CityGo 用户");
    const email = getProfileValue(user, "email", "暂未填写");
    const phone = getProfileValue(user, "phone", "暂未填写");
    const gender = getProfileValue(user, "gender", "暂未填写");
    const birthday = getProfileValue(user, "birthday", "暂未填写");
    const city = getProfileValue(user, "city", "暂未填写");
    const bio = getProfileValue(user, "bio", "这个用户还没有填写个人简介。");
    const registerDate = getProfileValue(user, "registerDate", "暂未记录");
    const wishlistCount = getWishlistCount(username);

    root.innerHTML = `
      <section class="user-hero-card user-force-visible user-animate-item">
        <div class="user-profile-main">
          ${createAvatarHTML(username, "large")}
          <div>
            <p class="eyebrow">User Center</p>
            <h1>${escapeHTML(username)}</h1>
            <p>${escapeHTML(bio)}</p>
          </div>
        </div>
        <div class="user-actions">
          <a href="wishlist.html" class="primary-btn">我的旅行心愿单</a>
          <a href="index.html#citySection" class="ghost-btn">继续探索城市</a>
          <button type="button" class="ghost-btn" id="changePwdBtn">修改密码</button>
          <button class="danger-btn user-logout-inline" id="userLogoutBtn">退出登录</button>
        </div>
      </section>

      <section class="user-dashboard-grid user-force-visible user-dashboard-grid-profile">
        <article class="user-info-card user-profile-info-card user-animate-item">
          <h2>基本资料</h2>
          <div class="user-info-row"><span>用户名</span><strong>${escapeHTML(username)}</strong></div>
          <div class="user-info-row"><span>手机号</span><strong>${escapeHTML(phone)}</strong></div>
          <div class="user-info-row"><span>电子邮箱</span><strong>${escapeHTML(email)}</strong></div>
          <div class="user-info-row"><span>性别</span><strong>${escapeHTML(gender)}</strong></div>
          <div class="user-info-row"><span>生日</span><strong>${escapeHTML(birthday)}</strong></div>
          <div class="user-info-row"><span>常住城市</span><strong>${escapeHTML(city)}</strong></div>
          <div class="user-info-row"><span>注册日期</span><strong>${escapeHTML(registerDate)}</strong></div>
        </article>

        <article class="user-info-card user-bio-card user-animate-item">
          <h2>个人简介</h2>
          <p class="user-bio-text">${escapeHTML(bio)}</p>
          <div class="user-profile-note">
            <strong>旅行偏好</strong>
            <span>你可以在浏览城市时收藏心动目的地，并在心愿单中集中查看、整理和规划下一段旅程。</span>
          </div>
        </article>

        <article class="user-info-card user-travel-card user-animate-item">
          <h2>旅行数据</h2>
          <div class="user-stat-number">${wishlistCount}</div>
          <p>当前心愿单中收藏的城市数量</p>
          <a class="small-link-btn wishlist-profile-link" href="wishlist.html">查看我的旅行心愿单 →</a>
        </article>

        <article class="user-info-card user-shortcut-card user-animate-item">
          <h2>快捷入口</h2>
          <div class="user-shortcut-list">
            <a href="diary.html">📔 我的旅行日记</a>
            <a href="footprint.html">🗺️ 我的旅行足迹</a>
            <a href="wishlist.html">🌟 我的旅行心愿单</a>
            <a href="category.html">🧭 分类浏览城市</a>
            <a href="contact.html">💬 给我们留言</a>
          </div>
        </article>
      </section>
    `;

    bindAvatarFallbacks();
    const changePwdBtn = document.getElementById("changePwdBtn");
    if (changePwdBtn) {
        changePwdBtn.addEventListener("click", function() {
        const modal = document.createElement("div");
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); display: flex; align-items: center;
            justify-content: center; z-index: 1000; padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="background: #fff; padding: 30px; border-radius: 16px; width: 100%; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                <h3 style="margin-top: 0; color: #333;">修改密码</h3>
                <form id="changePwdForm">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: var(--text-sm); color: #555;">原密码</label>
                        <input type="password" id="oldPwd" placeholder="请输入原密码" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; font-size: var(--text-sm); box-sizing: border-box;" />
                        <span id="oldPwdError" style="color: #e74c3c; font-size: var(--text-xs); margin-top: 5px; display: block;"></span>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: var(--text-sm); color: #555;">新密码</label>
                        <input type="password" id="newPwd" placeholder="请输入新密码（至少6位）" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; font-size: var(--text-sm); box-sizing: border-box;" />
                        <span id="newPwdError" style="color: #e74c3c; font-size: var(--text-xs); margin-top: 5px; display: block;"></span>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 600; font-size: var(--text-sm); color: #555;">确认新密码</label>
                        <input type="password" id="confirmNewPwd" placeholder="请再次输入新密码" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; font-size: var(--text-sm); box-sizing: border-box;" />
                        <span id="confirmPwdError" style="color: #e74c3c; font-size: var(--text-xs); margin-top: 5px; display: block;"></span>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button type="button" id="cancelChange" style="flex: 1; padding: 10px; background: #eee; border: none; border-radius: 8px; cursor: pointer; font-size: var(--text-sm); line-height: 1.5;">取消</button>
                        <button type="submit" style="flex: 1; padding: 10px; background: #007bff; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-size: var(--text-sm); line-height: 1.5;">确认修改</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);

        const closeModal = () => document.body.removeChild(modal);

        document.getElementById("cancelChange").addEventListener("click", closeModal);

        document.getElementById("changePwdForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const currentUser = getCurrentUser();
            const storedUser = getUserByUsername(currentUser && currentUser.username);
            const oldPwd = document.getElementById("oldPwd").value;
            const newPwd = document.getElementById("newPwd").value;
            const confirmNewPwd = document.getElementById("confirmNewPwd").value;
            const oldErr = document.getElementById("oldPwdError");
            const newErr = document.getElementById("newPwdError");
            const confirmErr = document.getElementById("confirmPwdError");

            oldErr.innerText = "";
            newErr.innerText = "";
            confirmErr.innerText = "";

            let valid = true;

            if (!storedUser || typeof storedUser.password !== "string") {
                oldErr.innerText = "未找到当前账号密码信息，请重新登录后再修改";
                valid = false;
            } else if (oldPwd !== storedUser.password) {
                oldErr.innerText = "原密码错误";
                valid = false;
            }

            if (newPwd.length < 6) {
                newErr.innerText = "新密码至少需要6位";
                valid = false;
            }

            if (confirmNewPwd !== newPwd) {
                confirmErr.innerText = "两次输入的新密码不一致";
                valid = false;
            }

            if (!valid) return;

            const allUsers = getStoredUsers();
            const userIndex = allUsers.findIndex(u => u.username === currentUser.username);
            
            if (userIndex !== -1) {
                allUsers[userIndex].password = newPwd;
                saveStoredUsers(allUsers);

                localStorage.setItem("citygo_current_user", JSON.stringify({
                  ...getSafeUser(allUsers[userIndex]),
                  loginAt: new Date().toISOString()
                }));
                
                alert("密码修改成功！");
                closeModal();
            }
          });
      });
    }
    const logoutBtn = document.getElementById("userLogoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("citygo_current_user");
        location.href = "index.html";
      });
    }
  }

  async function refreshUserFromAccounts(root, currentUser) {
    try {
      const response = await fetch("accounts.json", { cache: "no-store" });
      if (!response.ok) return;
      const users = await response.json();
      if (!Array.isArray(users)) return;
      const storedUsers = getStoredUsers();
      const mergedUsers = users.map(accountUser => {
        const localUser = storedUsers.find(item => item.username === accountUser.username);
        return localUser && localUser.password ? { ...accountUser, password: localUser.password } : accountUser;
      });
      storedUsers.forEach(localUser => {
        if (localUser && localUser.username && !mergedUsers.some(item => item.username === localUser.username)) {
          mergedUsers.push(localUser);
        }
      });
      saveStoredUsers(mergedUsers);
      const accountUser = mergedUsers.find(item => item.username === currentUser.username);
      if (accountUser) renderUser(root, getSafeUser(accountUser), "accounts.json");
    } catch (error) {
    }
  }

  function initUserPage() {
    const root = document.getElementById("userPageRoot");
    if (!root) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
      renderGuest(root);
      return;
    }

    const cachedUser = getStoredUsers().find(item => item.username === currentUser.username) || currentUser;
    renderUser(root, cachedUser, "本地登录缓存，正在尝试同步 accounts.json");
    refreshUserFromAccounts(root, currentUser);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUserPage);
  } else {
    initUserPage();
  }
})();
