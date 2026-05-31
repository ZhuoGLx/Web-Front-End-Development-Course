

function $(id) {
  return document.getElementById(id);
}

const BUILT_IN_ACCOUNTS = [
  {
    "username": "travel01",
    "email": "travel01@example.com",
    "password": "Tgo123456",
    "phone": "16545677207",
    "gender": "女",
    "birthday": "2009-03-14",
    "city": "长春",
    "bio": "喜欢记录城市街景、自然风光与慢节奏旅行。",
    "registerDate": "2026-03-26"
  },
  {
    "username": "cityfan",
    "email": "cityfan@example.com",
    "password": "City2026",
    "phone": "16558514057",
    "gender": "女",
    "birthday": "2012-09-16",
    "city": "合肥",
    "bio": "偏爱现代都市、历史街区和城市夜景路线。",
    "registerDate": "2026-04-16"
  },
  {
    "username": "foodlover",
    "email": "foodlover@example.com",
    "password": "Food8888",
    "phone": "13897266951",
    "gender": "男",
    "birthday": "2012-11-21",
    "city": "昆明",
    "bio": "热衷寻找地道小吃、早茶、火锅和地方特色餐馆。",
    "registerDate": "2026-04-18"
  },
  {
    "username": "scenery",
    "email": "scenery@example.com",
    "password": "View6666",
    "phone": "19560875610",
    "gender": "男",
    "birthday": "2004-07-03",
    "city": "贵阳",
    "bio": "喜欢海滨、湖泊、山林和适合拍照的城市风景。",
    "registerDate": "2026-04-14"
  },
  {
    "username": "demo",
    "email": "demo@example.com",
    "password": "demo123456",
    "phone": "16557437495",
    "gender": "女",
    "birthday": "2002-04-12",
    "city": "广州",
    "bio": "用于课程展示和功能测试，可体验登录、用户页和心愿单功能。",
    "registerDate": "2026-04-07"
  }
];

function getUsers() {
  return JSON.parse(localStorage.getItem("citygo_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("citygo_users", JSON.stringify(users));
}

function mergeUsers(oldUsers, newUsers) {
  const map = new Map(oldUsers.map(user => [user.username, user]));
  newUsers.forEach(user => {
    if (user && user.username && user.password) {
      const oldUser = map.get(user.username) || {};
      map.set(user.username, {
        ...oldUser,
        ...user,
        password: oldUser.password || user.password
      });
    }
  });
  return Array.from(map.values());
}

async function loadAccountFile() {
  let fileUsers = [];
  try {
    const response = await fetch("accounts.json", { cache: "no-store" });
    if (response.ok) fileUsers = await response.json();
  } catch (error) {
    fileUsers = BUILT_IN_ACCOUNTS;
  }
  const users = mergeUsers(getUsers(), fileUsers.length ? fileUsers : BUILT_IN_ACCOUNTS);
  saveUsers(users);
  renderDefaultAccounts(users);
  return users;
}

function renderDefaultAccounts(users) {
  const box = $("defaultAccountList");
  if (!box) return;
  const demoUsers = users.slice(0, 5);
  box.innerHTML = `
    <p><strong>可直接测试的预置账号：</strong></p>
    ${demoUsers.map(user => `<p>${user.username} / ${user.password}</p>`).join("")}
  `;
}

function clearErrors(ids) {
  ids.forEach(id => $(id).innerText = "");
}

const readyUsers = loadAccountFile();

const registerForm = $("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    await readyUsers;
    clearErrors(["regNameError", "regEmailError", "regPwdError", "regConfirmError"]);
    $("regSuccess").innerText = "";

    const username = $("regName").value.trim();
    const email = $("regEmail").value.trim();
    const password = $("regPwd").value;
    const confirm = $("regConfirm").value;
    const users = getUsers();
    let ok = true;

    if (username.length < 2) {
      $("regNameError").innerText = "用户名至少需要 2 个字符";
      ok = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      $("regEmailError").innerText = "请输入正确的邮箱格式";
      ok = false;
    }
    if (password.length < 6) {
      $("regPwdError").innerText = "密码至少需要 6 位";
      ok = false;
    }
    if (confirm !== password) {
      $("regConfirmError").innerText = "两次输入的密码不一致";
      ok = false;
    }
    if (users.some(user => user.username === username)) {
      $("regNameError").innerText = "该用户名已被注册";
      ok = false;
    }

    if (!ok) return;

    users.push({
      username,
      email,
      password,
      phone: "暂未填写",
      gender: "暂未填写",
      birthday: "暂未填写",
      city: "暂未填写",
      bio: "这个用户还没有填写个人简介。",
      registerDate: new Date().toISOString().slice(0, 10)
    });
    saveUsers(users);
    $("regSuccess").innerText = "注册成功！2 秒后跳转到登录页面。";
    setTimeout(() => location.href = "login.html", 2000);
  });
}

const loginForm = $("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    await readyUsers;
    clearErrors(["loginNameError", "loginPwdError"]);
    $("loginSuccess").innerText = "";

    const username = $("loginName").value.trim();
    const password = $("loginPwd").value;
    const users = getUsers();
    let ok = true;

    if (!username) {
      $("loginNameError").innerText = "请输入用户名";
      ok = false;
    }
    if (!password) {
      $("loginPwdError").innerText = "请输入密码";
      ok = false;
    }
    if (!ok) return;

    const user = users.find(item => item.username === username && item.password === password);
    if (!user) {
      $("loginPwdError").innerText = "用户名或密码错误";
      return;
    }

    const { password: _password, ...safeUser } = user;
    localStorage.setItem("citygo_current_user", JSON.stringify({
      ...safeUser,
      loginAt: new Date().toISOString()
    }));
    if (typeof ensureCityGoPresetDataForCurrentUser === "function") {
      ensureCityGoPresetDataForCurrentUser();
    }
    $("loginSuccess").innerText = "登录成功！即将进入用户页面。";
    setTimeout(() => location.href = "user.html", 700);
  });
}
