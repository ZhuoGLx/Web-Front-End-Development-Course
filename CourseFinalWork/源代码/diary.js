

var CITY_NAMES = {
  beijing: "北京", shanghai: "上海", guangzhou: "广州",
  hangzhou: "杭州", chengdu: "成都", chongqing: "重庆",
  nanjing: "南京", xian: "西安", xiamen: "厦门"
};

var diaryGrid = document.getElementById("diaryGrid");
var diaryNewBtn = document.getElementById("diaryNewBtn");
var diaryAlbumSection = document.getElementById("diaryAlbumSection");
var diaryAlbumStage = document.getElementById("diaryAlbumStage");
var diaryAlbumTrack = document.getElementById("diaryAlbumTrack");
var diaryAlbumPrev = document.getElementById("diaryAlbumPrev");
var diaryAlbumNext = document.getElementById("diaryAlbumNext");
var diaryAlbumAngle = 0;
var diaryAlbumStartX = 0;
var diaryAlbumDragging = false;

var editorOverlay = document.getElementById("diaryEditorOverlay");
var editorTitle = document.getElementById("diaryEditorTitle");
var editorForm = document.getElementById("diaryEditorForm");
var diaryEditId = document.getElementById("diaryEditId");
var diaryTitleInput = document.getElementById("diaryTitle");
var diaryCitySelect = document.getElementById("diaryCity");
var diaryContentInput = document.getElementById("diaryContent");
var diaryContentEditor = document.getElementById("diaryContentEditor");
var diaryImageInput = document.getElementById("diaryImageInput");
var diaryImageHint = document.getElementById("diaryImageHint");
var diaryImagePreview = document.getElementById("diaryImagePreview");
var diaryCoverInput = document.getElementById("diaryCoverInput");
var diaryCoverHint = document.getElementById("diaryCoverHint");
var diaryCoverPreview = document.getElementById("diaryCoverPreview");
var diaryInsertAllImages = document.getElementById("diaryInsertAllImages");
var diaryEditorSubmit = document.getElementById("diaryEditorSubmit");

var detailOverlay = document.getElementById("diaryDetailOverlay");
var detailContent = document.getElementById("diaryDetailContent");

var pendingMedia = [];
var customCover = "";

function getDiaryUser() {
  try { return JSON.parse(localStorage.getItem("citygo_current_user") || "null"); }
  catch (e) { return null; }
}

function getDiaryKey() {
  var user = getDiaryUser();
  return user ? "citygo_diary_" + user.username : null;
}

function saveDiaryEntries(entries) {
  var key = getDiaryKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(entries));
}

function getDiaryEntries() {
  var key = getDiaryKey();
  if (!key) return [];
  try {
    var list = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(list) ? list.map(normalizeDiaryEntry) : [];
  } catch (e) { return []; }
}

function normalizeDiaryEntry(entry) {
  entry = entry || {};
  var media = Array.isArray(entry.media) ? entry.media.slice() : [];
  if (!media.length && Array.isArray(entry.images)) {
    media = entry.images.map(function (img) { return { type: "image", src: img }; });
  }
  var contentHtml = entry.contentHtml || textToParagraphHTML(entry.content || "");
  var inlineImages = extractImagesFromHTML(contentHtml).map(function (src) {
    return { type: "image", src: src, inline: true };
  });
  inlineImages.forEach(function (img) {
    if (!media.some(function (item) { return (item.src || item.cover) === img.src; })) media.push(img);
  });
  var images = media.filter(function (item) { return item.type !== "video"; }).map(function (item) { return item.src || item.cover; }).filter(Boolean);
  return Object.assign({}, entry, { contentHtml: contentHtml, images: images, media: media, cover: entry.cover || "" });
}

function getEntryMedia(entry) {
  return normalizeDiaryEntry(entry).media.filter(function (item) {
    return item && (item.src || item.cover);
  });
}

function getMediaPoster(item) {
  return item.type === "video" ? (item.cover || item.src) : item.src;
}

function getEntryCover(entry) {
  entry = normalizeDiaryEntry(entry);
  if (entry.cover) return entry.cover;
  var media = getEntryMedia(entry);
  for (var i = 0; i < media.length; i++) {
    var poster = getMediaPoster(media[i]);
    if (poster) return poster;
  }
  return "";
}

function dEscape(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function textToParagraphHTML(text) {
  return String(text || "").split(/\n+/).map(function (line) {
    return line.trim() ? "<p>" + dEscape(line.trim()) + "</p>" : "";
  }).join("");
}

function stripHTML(html) {
  var div = document.createElement("div");
  div.innerHTML = html || "";
  return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
}

function extractImagesFromHTML(html) {
  var div = document.createElement("div");
  div.innerHTML = html || "";
  return Array.from(div.querySelectorAll("img")).map(function (img) { return img.getAttribute("src"); }).filter(Boolean);
}

function sanitizeDiaryHTML(html) {
  var div = document.createElement("div");
  div.innerHTML = html || "";
  div.querySelectorAll("script,style,iframe,object,embed,link,meta").forEach(function (node) { node.remove(); });
  div.querySelectorAll("*").forEach(function (node) {
    Array.from(node.attributes).forEach(function (attr) {
      var name = attr.name.toLowerCase();
      var value = attr.value || "";
      if (name.indexOf("on") === 0 || value.toLowerCase().indexOf("javascript:") === 0) node.removeAttribute(attr.name);
    });
    if (node.tagName.toLowerCase() === "img") {
      var src = node.getAttribute("src") || "";
      if (!(src.indexOf("data:image/") === 0 || src.indexOf("resource/users/") === 0 || src.indexOf("http") === 0)) node.remove();
      node.setAttribute("loading", "lazy");
      node.setAttribute("alt", node.getAttribute("alt") || "日记图片");
    }
  });
  return div.innerHTML.trim();
}

function ensureParagraphStructure(html) {
  html = sanitizeDiaryHTML(html || "");
  if (!html) return "";
  if (!/<(p|div|figure|img|h\d|ul|ol|blockquote)\b/i.test(html)) return textToParagraphHTML(stripHTML(html));
  return html;
}

function formatDate(isoStr) {
  if (!isoStr) return "";
  var d = new Date(isoStr);
  if (isNaN(d.getTime())) return "";
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function getDiaryCityFilter() {
  try { return new URLSearchParams(location.search).get("city") || ""; }
  catch (e) { return ""; }
}

function fileToBase64(file, maxMB) {
  return new Promise(function (resolve, reject) {
    if (file.size > maxMB * 1024 * 1024) {
      reject(new Error("图片 \"" + file.name + "\" 超过" + maxMB + "MB，请压缩后重试"));
      return;
    }
    var reader = new FileReader();
    reader.onload = function () { resolve(reader.result); };
    reader.onerror = function () { reject(new Error("读取图片失败")); };
    reader.readAsDataURL(file);
  });
}

function placeCaretAtEnd(el) {
  if (!el) return;
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function insertHTMLAtCursor(html) {
  diaryContentEditor.focus();
  if (document.queryCommandSupported && document.queryCommandSupported("insertHTML")) {
    document.execCommand("insertHTML", false, html);
  } else {
    var sel = window.getSelection();
    if (!sel.rangeCount) {
      placeCaretAtEnd(diaryContentEditor);
      sel = window.getSelection();
    }
    var range = sel.getRangeAt(0);
    range.deleteContents();
    var temp = document.createElement("div");
    temp.innerHTML = html;
    var frag = document.createDocumentFragment();
    var node, lastNode;
    while ((node = temp.firstChild)) { lastNode = frag.appendChild(node); }
    range.insertNode(frag);
    if (lastNode) {
      range = range.cloneRange();
      range.setStartAfter(lastNode);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}

function insertImageIntoContent(src) {
  if (!src) return;
  insertHTMLAtCursor('<figure class="diary-inline-figure"><img src="' + dEscape(src) + '" alt="日记图片" loading="lazy"><figcaption>旅途瞬间</figcaption></figure><p><br></p>');
}

function insertAllPendingImages() {
  pendingMedia.filter(function (item) { return item.type !== "video" && item.src; }).forEach(function (item) {
    if (diaryContentEditor.innerHTML.indexOf(item.src) === -1) insertImageIntoContent(item.src);
  });
}

function syncImageHint() {
  var count = pendingMedia.filter(function (item) { return item.type !== "video"; }).length;
  diaryImageHint.textContent = count ? "已选择 " + count + " 张图片，可插入正文" : "未选择文件";
}

function renderImagePreviews() {
  var images = pendingMedia.filter(function (item) { return item.type !== "video" && item.src; });
  if (!images.length) {
    diaryImagePreview.classList.add("hidden");
    diaryImagePreview.innerHTML = "";
    return;
  }
  diaryImagePreview.classList.remove("hidden");
  diaryImagePreview.innerHTML = images.map(function (item, idx) {
    return '<div class="diary-preview-item">' +
      '<img src="' + dEscape(item.src) + '" alt="图片预览" />' +
      '<button type="button" class="diary-preview-insert" data-src="' + dEscape(item.src) + '">插入正文</button>' +
      '<button type="button" class="diary-preview-remove" data-src="' + dEscape(item.src) + '" title="移除">&times;</button>' +
    '</div>';
  }).join("");

  diaryImagePreview.querySelectorAll(".diary-preview-insert").forEach(function (btn) {
    btn.addEventListener("click", function () { insertImageIntoContent(this.dataset.src); });
  });
  diaryImagePreview.querySelectorAll(".diary-preview-remove").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = this.dataset.src;
      pendingMedia = pendingMedia.filter(function (item) { return item.src !== src; });
      diaryContentEditor.querySelectorAll("img").forEach(function (img) {
        if (img.getAttribute("src") === src) {
          var figure = img.closest("figure");
          (figure || img).remove();
        }
      });
      syncImageHint();
      renderImagePreviews();
      renderCoverPreview();
    });
  });
}

function handleImageSelect(e) {
  var files = Array.from(e.target.files || []);
  if (!files.length) return;
  diaryImageHint.textContent = "正在处理 " + files.length + " 张图片...";
  Promise.all(files.map(function (file) {
    return fileToBase64(file, 2).then(function (src) { return { type: "image", src: src }; }).catch(function (err) {
      alert(err.message);
      return null;
    });
  })).then(function (items) {
    items.filter(Boolean).forEach(function (item) { pendingMedia.push(item); });
    syncImageHint();
    renderImagePreviews();
    renderCoverPreview();
  });
  diaryImageInput.value = "";
}

function handleCoverSelect(e) {
  var file = (e.target.files || [])[0];
  if (!file) return;
  fileToBase64(file, 2).then(function (src) {
    customCover = src;
    renderCoverPreview();
  }).catch(function (err) { alert(err.message); });
  diaryCoverInput.value = "";
}

function getFirstContentOrMediaImage() {
  var html = diaryContentEditor ? diaryContentEditor.innerHTML : "";
  var imgs = extractImagesFromHTML(html);
  if (imgs.length) return imgs[0];
  var first = pendingMedia.find(function (item) { return item.type !== "video" && item.src; });
  return first ? first.src : "";
}

function renderCoverPreview() {
  var autoCover = getFirstContentOrMediaImage();
  var src = customCover || autoCover;
  if (!src) {
    diaryCoverHint.textContent = "自动选择第一张图片";
    diaryCoverPreview.classList.add("hidden");
    diaryCoverPreview.innerHTML = "";
    return;
  }
  diaryCoverHint.textContent = customCover ? "已选择自定义封面" : "将自动使用正文第一张图片";
  diaryCoverPreview.classList.remove("hidden");
  diaryCoverPreview.innerHTML = '<div class="diary-cover-card"><img src="' + dEscape(src) + '" alt="日记封面预览"><button type="button" id="diaryClearCover" class="diary-cover-clear">' + (customCover ? '改为自动封面' : '自动封面') + '</button></div>';
  var clearBtn = document.getElementById("diaryClearCover");
  if (clearBtn) clearBtn.addEventListener("click", function () { customCover = ""; renderCoverPreview(); });
}

function resetEditor() {
  diaryEditId.value = "";
  diaryTitleInput.value = "";
  diaryCitySelect.value = "";
  diaryContentInput.value = "";
  diaryContentEditor.innerHTML = "";
  pendingMedia = [];
  customCover = "";
  syncImageHint();
  diaryImagePreview.classList.add("hidden");
  diaryImagePreview.innerHTML = "";
  diaryCoverHint.textContent = "自动选择第一张图片";
  diaryCoverPreview.classList.add("hidden");
  diaryCoverPreview.innerHTML = "";
  diaryEditorSubmit.textContent = "发布日记";
}

function openEditor(entry) {
  resetEditor();
  if (entry) {
    entry = normalizeDiaryEntry(entry);
    editorTitle.textContent = "编辑日记";
    diaryEditId.value = entry.id;
    diaryTitleInput.value = entry.title || "";
    diaryCitySelect.value = entry.city || "";
    diaryContentEditor.innerHTML = ensureParagraphStructure(entry.contentHtml || textToParagraphHTML(entry.content || ""));
    pendingMedia = getEntryMedia(entry).filter(function (item) { return !item.inline || item.type === "video"; });
    customCover = entry.cover || "";
    syncImageHint();
    renderImagePreviews();
    renderCoverPreview();
    diaryEditorSubmit.textContent = "保存修改";
  } else {
    editorTitle.textContent = "写日记";
    diaryEditorSubmit.textContent = "发布日记";
  }
  editorOverlay.classList.remove("hidden");
  setTimeout(function () { diaryTitleInput.focus(); }, 30);
}

function closeEditor() {
  editorOverlay.classList.add("hidden");
  resetEditor();
}

function saveDiary(e) {
  e.preventDefault();
  var title = diaryTitleInput.value.trim();
  var contentHtml = ensureParagraphStructure(diaryContentEditor.innerHTML);

  pendingMedia.filter(function (item) { return item.type !== "video" && item.src; }).forEach(function (item) {
    if (contentHtml.indexOf(item.src) === -1) {
      contentHtml += '<figure class="diary-inline-figure"><img src="' + dEscape(item.src) + '" alt="日记图片" loading="lazy"><figcaption>旅途瞬间</figcaption></figure>';
    }
  });
  contentHtml = sanitizeDiaryHTML(contentHtml);
  var contentText = stripHTML(contentHtml);

  if (!title || (!contentText && !extractImagesFromHTML(contentHtml).length)) {
    alert("标题和日记内容不能为空");
    return;
  }

  var media = pendingMedia.slice();
  extractImagesFromHTML(contentHtml).forEach(function (src) {
    if (!media.some(function (item) { return (item.src || item.cover) === src; })) media.push({ type: "image", src: src, inline: true });
  });
  var cover = customCover || extractImagesFromHTML(contentHtml)[0] || getFirstContentOrMediaImage() || "";
  var entries = getDiaryEntries();
  var editId = diaryEditId.value;
  var now = new Date().toISOString();

  if (editId) {
    var idx = entries.findIndex(function (item) { return item.id === editId; });
    if (idx !== -1) {
      entries[idx] = Object.assign({}, entries[idx], {
        title: title,
        content: contentText,
        contentHtml: contentHtml,
        city: diaryCitySelect.value || "",
        cover: cover,
        images: media.filter(function (item) { return item.type !== "video"; }).map(function (item) { return item.src || item.cover; }).filter(Boolean),
        media: media,
        updatedAt: now
      });
    }
  } else {
    entries.unshift({
      id: "diary_" + Date.now(),
      title: title,
      content: contentText,
      contentHtml: contentHtml,
      city: diaryCitySelect.value || "",
      cover: cover,
      images: media.filter(function (item) { return item.type !== "video"; }).map(function (item) { return item.src || item.cover; }).filter(Boolean),
      media: media,
      createdAt: now,
      updatedAt: now
    });
  }

  saveDiaryEntries(entries);
  closeEditor();
  renderDiaryGrid();
}

function openDetail(entry) {
  entry = normalizeDiaryEntry(entry);
  var cityName = entry.city ? (CITY_NAMES[entry.city] || entry.city) : "";
  var richHTML = sanitizeDiaryHTML(entry.contentHtml || textToParagraphHTML(entry.content || ""));

  detailContent.innerHTML =
    '<div class="diary-detail-body">' +
      '<h2>' + dEscape(entry.title) + '</h2>' +
      (cityName ? '<span class="diary-detail-city">📍 ' + dEscape(cityName) + '</span>' : '') +
      '<div class="diary-detail-text diary-rich-content">' + richHTML + '</div>' +
      '<div class="diary-detail-meta">发布于 ' + formatDate(entry.createdAt) +
        (entry.updatedAt !== entry.createdAt ? ' · 编辑于 ' + formatDate(entry.updatedAt) : '') +
      '</div>' +
    '</div>';

  detailOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  detailOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

function deleteDiary(id) {
  if (!confirm("确定要删除这篇日记吗？此操作不可恢复。")) return;
  var entries = getDiaryEntries().filter(function (item) { return item.id !== id; });
  saveDiaryEntries(entries);
  renderDiaryGrid();
}

function renderDiaryAlbum(entries) {
  if (!diaryAlbumSection || !diaryAlbumTrack) return;
  var mediaItems = [];
  entries.forEach(function (entry) {
    entry = normalizeDiaryEntry(entry);
    getEntryMedia(entry).forEach(function (item) {
      var poster = getMediaPoster(item);
      if (!poster) return;
      mediaItems.push({
        poster: poster,
        type: item.type || "image",
        title: entry.title || "旅行日记",
        city: entry.city ? (CITY_NAMES[entry.city] || entry.city) : ""
      });
    });
  });

  if (!mediaItems.length) {
    diaryAlbumSection.classList.add("hidden");
    diaryAlbumTrack.innerHTML = "";
    return;
  }

  diaryAlbumSection.classList.remove("hidden");
  var count = mediaItems.length;
  var radius = Math.max(320, Math.min(600, count * 78));
  diaryAlbumTrack.innerHTML = mediaItems.map(function (item, index) {
    var angle = 360 / count * index;
    return '<figure class="diary-album-card" style="--album-angle:' + angle + 'deg; --album-radius:' + radius + 'px">' +
      '<img src="' + dEscape(item.poster) + '" alt="' + dEscape(item.title) + '" loading="lazy" />' +
      (item.type === "video" ? '<span class="diary-album-video">▶</span>' : '') +
      '<figcaption>' + dEscape(item.title) + (item.city ? '<small>📍 ' + dEscape(item.city) + '</small>' : '') + '</figcaption>' +
    '</figure>';
  }).join("");
  updateDiaryAlbumRotation();
}

function updateDiaryAlbumRotation() {
  if (!diaryAlbumTrack) return;
  diaryAlbumTrack.style.transform = "translateZ(-430px) rotateY(" + diaryAlbumAngle + "deg)";
}

function rotateDiaryAlbum(step) {
  var cards = diaryAlbumTrack ? diaryAlbumTrack.querySelectorAll(".diary-album-card") : [];
  var count = cards.length || 1;
  diaryAlbumAngle += step * (360 / count);
  updateDiaryAlbumRotation();
}

function renderDiaryGrid() {
  var user = getDiaryUser();
  if (!user) {
    if (diaryAlbumSection) diaryAlbumSection.classList.add("hidden");
    diaryGrid.innerHTML = '<div class="diary-empty"><div class="diary-empty-icon">📔</div><h3>请先登录</h3><p>登录后即可记录你的旅行日记</p><a class="primary-btn" href="login.html">去登录</a></div>';
    return;
  }

  var allEntries = getDiaryEntries();
  renderDiaryAlbum(allEntries);
  var cityFilter = getDiaryCityFilter();
  var entries = cityFilter ? allEntries.filter(function (entry) { return entry.city === cityFilter; }) : allEntries;

  if (!entries.length) {
    diaryGrid.innerHTML = '<div class="diary-empty"><div class="diary-empty-icon">📝</div><h3>' +
      (cityFilter ? '暂无' + dEscape(CITY_NAMES[cityFilter] || cityFilter) + '日记' : '还没有日记') +
      '</h3><p>' + (cityFilter ? '可以点击上方“写日记”按钮，为这座城市补充旅行记录。' : '点击上方“写日记”按钮，记录你的第一篇旅行日记吧') +
      '</p><button class="primary-btn" id="diaryEmptyBtn">✏️ 写一篇日记</button></div>';
    var emptyBtn = document.getElementById("diaryEmptyBtn");
    if (emptyBtn) emptyBtn.addEventListener("click", function () { openEditor(null); });
    return;
  }

  var filterNotice = cityFilter ? '<div class="diary-filter-notice">正在查看 <strong>' + dEscape(CITY_NAMES[cityFilter] || cityFilter) + '</strong> 的旅行日记 <a href="diary.html">查看全部</a></div>' : '';
  diaryGrid.innerHTML = filterNotice + entries.map(function (entry) {
    entry = normalizeDiaryEntry(entry);
    var coverImg = getEntryCover(entry);
    var cityName = entry.city ? (CITY_NAMES[entry.city] || entry.city) : "";
    var text = entry.content || stripHTML(entry.contentHtml || "");
    return '<article class="diary-card" data-id="' + dEscape(entry.id) + '">' +
      (coverImg ? '<img class="diary-card-img" src="' + dEscape(coverImg) + '" alt="封面" loading="lazy" />' : '') +
      '<div class="diary-card-body">' +
        '<h3 class="diary-card-title">' + dEscape(entry.title) + '</h3>' +
        '<p class="diary-card-text">' + dEscape(text) + '</p>' +
        '<div class="diary-card-meta"><span>' + formatDate(entry.createdAt) +
          (cityName ? ' · <span class="diary-card-city">📍' + dEscape(cityName) + '</span>' : '') +
        '</span><span class="diary-card-actions"><button class="diary-card-edit" data-id="' + dEscape(entry.id) + '">编辑</button><button class="diary-card-del" data-id="' + dEscape(entry.id) + '">删除</button></span></div>' +
      '</div></article>';
  }).join("");

  diaryGrid.querySelectorAll(".diary-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".diary-card-edit") || e.target.closest(".diary-card-del")) return;
      var id = this.dataset.id;
      var entry = entries.find(function (item) { return item.id === id; });
      if (entry) openDetail(entry);
    });
  });
  diaryGrid.querySelectorAll(".diary-card-edit").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = this.dataset.id;
      var entry = entries.find(function (item) { return item.id === id; });
      if (entry) openEditor(entry);
    });
  });
  diaryGrid.querySelectorAll(".diary-card-del").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      deleteDiary(this.dataset.id);
    });
  });
}

if (diaryNewBtn) diaryNewBtn.addEventListener("click", function () {
  var user = getDiaryUser();
  if (!user) {
    alert("请先登录后再写日记");
    location.href = "login.html";
    return;
  }
  openEditor(null);
});

document.getElementById("diaryEditorClose").addEventListener("click", closeEditor);
document.getElementById("diaryEditorCancel").addEventListener("click", closeEditor);
editorOverlay.addEventListener("click", function (e) { if (e.target === editorOverlay) closeEditor(); });
if (diaryImageInput) diaryImageInput.addEventListener("change", handleImageSelect);
if (diaryCoverInput) diaryCoverInput.addEventListener("change", handleCoverSelect);
if (diaryInsertAllImages) diaryInsertAllImages.addEventListener("click", insertAllPendingImages);
if (diaryContentEditor) diaryContentEditor.addEventListener("input", renderCoverPreview);
editorForm.addEventListener("submit", saveDiary);

if (diaryAlbumPrev) diaryAlbumPrev.addEventListener("click", function () { rotateDiaryAlbum(1); });
if (diaryAlbumNext) diaryAlbumNext.addEventListener("click", function () { rotateDiaryAlbum(-1); });
if (diaryAlbumStage) {
  diaryAlbumStage.addEventListener("pointerdown", function (e) {
    diaryAlbumDragging = true;
    diaryAlbumStartX = e.clientX;
    diaryAlbumStage.setPointerCapture(e.pointerId);
  });
  diaryAlbumStage.addEventListener("pointermove", function (e) {
    if (!diaryAlbumDragging) return;
    var delta = e.clientX - diaryAlbumStartX;
    diaryAlbumStartX = e.clientX;
    diaryAlbumAngle += delta * 0.35;
    updateDiaryAlbumRotation();
  });
  diaryAlbumStage.addEventListener("pointerup", function () { diaryAlbumDragging = false; });
  diaryAlbumStage.addEventListener("pointercancel", function () { diaryAlbumDragging = false; });
}

document.getElementById("diaryDetailClose").addEventListener("click", closeDetail);
detailOverlay.addEventListener("click", function (e) { if (e.target === detailOverlay) closeDetail(); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!detailOverlay.classList.contains("hidden")) closeDetail();
    if (!editorOverlay.classList.contains("hidden")) closeEditor();
  }
});

function initDiaryPage() {
  if (typeof ensureCityGoPresetDataForCurrentUser === "function") ensureCityGoPresetDataForCurrentUser();
  renderDiaryGrid();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDiaryPage);
else initDiaryPage();
