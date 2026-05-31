

(function () {
function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem("citygo_current_user") || "null");
    } catch (error) {
      return null;
    }
  }

  function ensureLogoutButton(nav) {
    let btn = nav.querySelector(".logout-btn, #logoutBtn");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "logout-btn";
      btn.id = "logoutBtn";
      btn.textContent = "退出登录";
      nav.appendChild(btn);
    }
    return btn;
  }

function updateUserNav() {
    const user = getCurrentUser();
    const navs = Array.from(document.querySelectorAll("nav"));
    const loginLinks = Array.from(document.querySelectorAll('nav a[href="login.html"], nav a#loginLink, nav a#wishLoginLink'));
    const registerLinks = Array.from(document.querySelectorAll('nav a[href="register.html"], nav a#registerLink'));

    if (!user) return;

    loginLinks.forEach(link => {
      link.textContent = user.username || "用户中心";
      link.href = "user.html";
      link.classList.add("user-name-link");
      link.title = "进入用户页面";
    });

    registerLinks.forEach(link => link.classList.add("hidden"));

    navs.forEach(nav => {
      const btn = ensureLogoutButton(nav);
      btn.classList.remove("hidden");
      if (!btn.dataset.userNavBound) {
        btn.dataset.userNavBound = "true";
        btn.addEventListener("click", () => {
          localStorage.removeItem("citygo_current_user");
          location.href = "index.html";
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateUserNav);
  } else {
    updateUserNav();
  }
})();
