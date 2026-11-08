/* Menyusun halaman dari data/*.js. Untuk mengubah isi situs, edit folder data/, bukan file ini. */
(function () {
  "use strict";

  var site = window.SITE;
  var ui = site.ui;
  var patch = window.PATCH;
  var stats = window.PATCH_STATS || {};
  var products = window.PRODUCTS;
  var updates = window.UPDATES;
  var INITIAL_UPDATES = 6;

  var lang = readLang();
  var showAllUpdates = false;

  function readLang() {
    try {
      var saved = localStorage.getItem("d04-lang");
      if (saved === "id" || saved === "en") return saved;
    } catch (e) { /* penyimpanan browser diblokir */ }
    return (navigator.language || "id").toLowerCase().indexOf("id") === 0 ? "id" : "en";
  }

  function saveLang() {
    try { localStorage.setItem("d04-lang", lang); } catch (e) { /* abaikan */ }
  }

  // Teks boleh berupa string biasa atau { id, en }.
  function t(value) {
    if (value === null || value === undefined) return "";
    return typeof value === "object" ? (value[lang] || value.id || value.en || "") : String(value);
  }

  function $(id) { return document.getElementById(id); }

  function setText(id, value) { $(id).textContent = t(value); }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
    return node;
  }

  function number(value) {
    return Number(value).toLocaleString(lang === "id" ? "id-ID" : "en-US");
  }

  function statValue(key) {
    if (patch[key] !== undefined && typeof patch[key] === "number") return patch[key];
    return stats[key];
  }

  // Mengganti {players} dll. dengan angka asli.
  function fill(text) {
    return t(text).replace(/\{(\w+)\}/g, function (all, key) {
      var value = statValue(key);
      return value === undefined ? all : number(value);
    });
  }

  function dateText(iso) {
    var parts = iso.split("-");
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function waLink(message) {
    return "https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent(message);
  }

  function statusLabel(status) {
    return status === "released" ? t(ui.released) : t(ui.soon);
  }

  function setBadge(id, status) {
    var node = $(id);
    node.textContent = statusLabel(status);
    node.classList.toggle("is-released", status === "released");
  }

  function fillList(id, items, className) {
    var list = clear($(id));
    items.forEach(function (item) { list.appendChild(el("li", className, t(item))); });
  }

  function renderHero() {
    setText("hero-eyebrow", site.hero.eyebrow);
    setText("hero-title", site.hero.title);
    setText("hero-text", site.hero.text);
    setText("hero-cta-patch", site.hero.ctaPatch);
    setText("hero-cta-buy", site.hero.ctaBuy);
    setText("board-label", site.hero.boardLabel);
    setText("board-hint", site.hero.boardHint);
  }

  function makeToken(href, no, name, x, y, classes) {
    var token = el("a", "token " + classes);
    token.href = href;
    token.style.left = x + "%";
    token.style.top = y + "%";
    token.appendChild(el("span", "token-no", no));
    token.appendChild(el("span", "token-name", name));
    return token;
  }

  function renderBoard() {
    var board = $("board");
    Array.prototype.slice.call(board.querySelectorAll(".token")).forEach(function (node) { node.remove(); });
    board.appendChild(makeToken("#patch", "04", "Dzerofour Patch", 50, 17, "is-captain"));
    products.forEach(function (p) {
      var href = p.id === "face" ? "#face" : "#tool-" + p.id;
      var classes = p.status === "released" ? "is-released" : "";
      board.appendChild(makeToken(href, p.board.no, p.short, p.board.x, p.board.y, classes));
    });
  }

  function renderScoreboard() {
    var list = clear($("scoreboard"));
    patch.stats.forEach(function (stat) {
      var item = el("div", "score-item");
      item.appendChild(el("dt", "", t(stat.label)));
      var value = el("dd", "", number(statValue(stat.key) || 0));
      value.dataset.count = statValue(stat.key) || 0;
      item.appendChild(value);
      list.appendChild(item);
    });
  }

  function renderFace() {
    var p = products.filter(function (x) { return x.id === "face"; })[0];
    setBadge("face-badge", p.status);
    setText("face-kicker", ui.faceKicker);
    $("face-name").textContent = p.name + " " + p.version;
    setText("face-tagline", p.tagline);
    setText("face-summary", p.summary);
    $("face-image").src = p.image;
    $("face-image").alt = p.imageAlt;
    $("face-shot").src = p.screenshot;
    $("face-shot").alt = p.screenshotAlt;
    $("face-idr").textContent = p.price.idr;
    $("face-usd").textContent = p.price.usd;
    setText("face-price-note", ui.priceNote);
    setText("face-buy", ui.buy);
    $("face-buy").href = waLink(t(ui.waBuy));

    setText("face-sources-title", ui.sources);
    fillList("face-sources", p.sources);
    setText("face-req-title", ui.requirements);
    fillList("face-reqs", p.requirements);
    setText("face-features-title", ui.highlights);
    fillList("face-features", p.features);
    setText("face-modes-title", ui.modes);

    var modes = clear($("face-modes"));
    p.modes.forEach(function (mode) {
      modes.appendChild(el("dt", "", mode.name));
      modes.appendChild(el("dd", "", t(mode.text)));
    });

    setText("face-versions-title", ui.versions);
    var versions = clear($("face-versions"));
    p.versions.forEach(function (version) {
      var row = el("li");
      row.appendChild(el("b", "", version.v));
      row.appendChild(el("span", "", t(version.text)));
      versions.appendChild(row);
    });
  }

  function renderPatch() {
    setBadge("patch-badge", patch.status);
    setText("patch-kicker", ui.patchKicker);
    setText("patch-title", ui.patchTitle);
    setText("patch-intro", patch.intro);
    $("patch-updated").textContent = stats.updated ? t(ui.patchUpdated) + " " + dateText(stats.updated) : "";
    setText("modules-title", ui.modulesTitle);

    var list = clear($("modules"));
    patch.modules.forEach(function (module) {
      var status = ["done", "progress", "planned"].indexOf(module.status) >= 0 ? module.status : "planned";
      var row = el("li", "module is-" + status);
      row.appendChild(el("span", "module-name", t(module.name)));
      row.appendChild(el("span", "module-status", t(ui[status])));
      row.appendChild(el("p", "module-text", fill(module.text)));
      if (typeof module.percent === "number") {
        var bar = el("div", "bar");
        var fillBar = el("i");
        fillBar.style.width = Math.max(0, Math.min(100, module.percent)) + "%";
        bar.appendChild(fillBar);
        row.appendChild(bar);
      }
      list.appendChild(row);
    });

    setText("comps-kick", ui.compsTitle);
    setText("comps-title", patch.competitionsList.title);
    setText("comps-text", patch.competitionsList.text);
    fillList("comps-list", patch.competitionsList.items);
  }

  function renderTools() {
    setText("tools-kicker", ui.toolsKicker);
    setText("tools-title", ui.toolsTitle);
    var holder = clear($("tool-list"));

    products.filter(function (p) { return p.id !== "face"; }).forEach(function (p) {
      var tool = el("article", "tool");
      tool.id = "tool-" + p.id;

      var media = el("div", "tool-media");
      if (p.image) {
        var image = el("img");
        image.src = p.image;
        image.alt = p.imageAlt || p.name;
        image.loading = "lazy";
        media.appendChild(image);
        if (p.imageNote) media.appendChild(el("p", "tool-note", t(p.imageNote)));
      } else {
        var iconBox = el("div", "tool-icon");
        var icon = el("img");
        icon.src = p.icon;
        icon.alt = "";
        iconBox.appendChild(icon);
        media.appendChild(iconBox);
      }
      tool.appendChild(media);

      var body = el("div", "tool-body");
      var top = el("div", "tool-top");
      top.appendChild(el("span", "tool-no", "#" + p.board.no));
      top.appendChild(el("span", "card-badge" + (p.status === "released" ? " is-released" : ""), statusLabel(p.status)));
      if (p.version) top.appendChild(el("span", "tool-version", p.version));
      body.appendChild(top);
      body.appendChild(el("h3", "", p.name));
      body.appendChild(el("p", "lead", t(p.tagline)));
      body.appendChild(el("p", "tool-summary", t(p.summary)));

      var details = el("details");
      details.appendChild(el("summary", "", t(ui.allFeatures)));
      var list = el("ul", "ticks");
      p.features.forEach(function (feature) { list.appendChild(el("li", "", t(feature))); });
      details.appendChild(list);
      body.appendChild(details);

      var released = p.status === "released";
      var link = el("a", "btn " + (released ? "btn-primary" : "btn-ghost"));
      if (released && p.price) {
        link.textContent = t(ui.buy) + " · " + (lang === "id" ? p.price.idr : p.price.usd);
      } else {
        link.textContent = t(ui.ask);
      }
      link.href = waLink(t(ui.waAsk) + " " + p.name + ".");
      link.target = "_blank";
      link.rel = "noopener";
      body.appendChild(link);

      tool.appendChild(body);
      holder.appendChild(tool);
    });
  }

  function renderUpdates() {
    setText("updates-kicker", ui.updatesKicker);
    setText("updates-title", ui.updatesTitle);

    var sorted = updates.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
    var visible = showAllUpdates ? sorted : sorted.slice(0, INITIAL_UPDATES);
    var list = clear($("timeline"));

    visible.forEach(function (update) {
      var row = el("li", "event");
      var time = el("time", "", dateText(update.date));
      time.dateTime = update.date;
      row.appendChild(time);
      var body = el("div");
      body.appendChild(el("b", "", t(update.tag)));
      body.appendChild(el("span", "", fill(update.text)));
      row.appendChild(body);
      list.appendChild(row);
    });

    var oldMore = document.querySelector(".more");
    if (oldMore) oldMore.remove();
    if (!showAllUpdates && sorted.length > INITIAL_UPDATES) {
      var more = el("button", "btn btn-ghost more", (lang === "id" ? "Lihat semua update" : "See all updates") + " (" + sorted.length + ")");
      more.type = "button";
      more.addEventListener("click", function () {
        showAllUpdates = true;
        renderUpdates();
      });
      list.parentNode.appendChild(more);
    }
  }

  function renderContact() {
    setText("contact-title", ui.contactTitle);
    setText("contact-text", ui.contactText);
    $("contact-wa").href = waLink(t(ui.waHello));
    $("contact-fb").href = site.facebook;
    setText("disclaimer", ui.disclaimer);
    $("year").textContent = new Date().getFullYear();
  }

  function renderShared() {
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (node) {
      node.textContent = t(ui[node.getAttribute("data-t")]);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-t-aria]"), function (node) {
      node.setAttribute("aria-label", t(ui[node.getAttribute("data-t-aria")]));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      var on = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function render() {
    renderShared();
    renderHero();
    renderBoard();
    renderScoreboard();
    renderFace();
    renderPatch();
    renderTools();
    renderUpdates();
    renderContact();
  }

  function animateScoreboard() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    var target = document.querySelector(".scoreboard");
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      var nodes = document.querySelectorAll("#scoreboard dd");
      var started = performance.now();
      (function tick(now) {
        var progress = Math.min(1, (now - started) / 900);
        var eased = 1 - Math.pow(1 - progress, 3);
        Array.prototype.forEach.call(nodes, function (node) {
          node.textContent = number(Math.round(Number(node.dataset.count) * eased));
        });
        if (progress < 1) requestAnimationFrame(tick);
      })(started);
    }, { threshold: 0.4 });
    observer.observe(target);
  }

  function bindEvents() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.addEventListener("click", function () {
        lang = button.getAttribute("data-lang");
        saveLang();
        render();
      });
    });

    var toggle = document.querySelector(".nav-toggle");
    var links = $("nav-links");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Kartu tool dibuat oleh JS, jadi link seperti #tool-kit perlu diarahkan ulang.
  function scrollToHash() {
    if (!location.hash) return;
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }

  render();
  bindEvents();
  animateScoreboard();
  window.addEventListener("load", scrollToHash);
})();
