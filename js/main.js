/* Menyusun halaman dari data/*.js. Untuk mengubah isi situs, edit folder data/, bukan file ini. */
(function () {
  "use strict";

  var site = window.SITE;
  var ui = site.ui;
  var patch = window.PATCH;
  var stats = window.PATCH_STATS || {};
  var products = window.PRODUCTS;
  var updates = window.UPDATES;
  var page = document.body.getAttribute("data-page");
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

  // h("a.btn", { href: "#" }, "Teks", anakLain)
  function h(spec, props) {
    var parts = spec.split(".");
    var node = document.createElement(parts[0]);
    if (parts.length > 1) node.className = parts.slice(1).join(" ");
    Object.keys(props || {}).forEach(function (key) {
      var value = props[key];
      if (value === null || value === undefined) return;
      if (key === "onClick") node.addEventListener("click", value);
      else if (key === "style") node.setAttribute("style", value);
      else if (key in node && key !== "list") node[key] = value;
      else node.setAttribute(key, value);
    });
    for (var i = 2; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  }

  function append(node, child) {
    if (child === null || child === undefined || child === false) return;
    if (Array.isArray(child)) child.forEach(function (item) { append(node, item); });
    else node.appendChild(child.nodeType ? child : document.createTextNode(String(child)));
  }

  function number(value) {
    return Number(value).toLocaleString(lang === "id" ? "id-ID" : "en-US");
  }

  function statValue(key) {
    return typeof patch[key] === "number" ? patch[key] : stats[key];
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

  function isReleased(item) { return item.status === "released"; }

  function badge(status) {
    return h("span.card-badge" + (status === "released" ? ".is-released" : ""), null, status === "released" ? t(ui.released) : t(ui.soon));
  }

  function toolHref(item) { return "tool.html?id=" + encodeURIComponent(item.id); }

  // Tool yang sudah rilis selalu di depan.
  function sortedProducts() {
    return products.filter(isReleased).concat(products.filter(function (p) { return !isReleased(p); }));
  }

  /* ---------- Bagian yang sama di semua halaman ---------- */

  function header() {
    var links = h("nav.nav-links", { id: "nav-links" },
      h("a", { href: "index.html" }, t(ui.navHome)),
      h("a", { href: "patch.html" }, t(ui.navPatch)),
      h("a", { href: "index.html#tools" }, t(ui.navTools)),
      h("a", { href: "#contact" }, t(ui.navContact))
    );
    var toggle = h("button.nav-toggle", {
      type: "button",
      "aria-expanded": "false",
      "aria-controls": "nav-links",
      "aria-label": t(ui.menu),
      onClick: function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      }
    }, h("span"), h("span"), h("span"));
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    function langButton(code) {
      return h("button" + (lang === code ? ".is-on" : ""), {
        type: "button",
        "data-lang": code,
        "aria-pressed": lang === code ? "true" : "false",
        onClick: function () {
          lang = code;
          saveLang();
          render();
          var again = document.querySelector('[data-lang="' + code + '"]');
          if (again) again.focus();
        }
      }, code.toUpperCase());
    }

    return h("header.nav", null,
      h("a.nav-brand", { href: "index.html", "aria-label": site.brand },
        h("img", { src: "assets/logo-d04.png", alt: "", width: 40, height: 40 }),
        h("span", null, "Dzerofour")
      ),
      toggle,
      links,
      h("div.lang", { role: "group", "aria-label": "Language" }, langButton("id"), langButton("en"))
    );
  }

  function contact() {
    return h("section.contact", { id: "contact" },
      h("h2", null, t(ui.contactTitle)),
      h("p", null, t(ui.contactText)),
      h("div.cta", null,
        h("a.btn.btn-primary", { href: waLink(t(ui.waHello)), target: "_blank", rel: "noopener" }, "WhatsApp"),
        h("a.btn.btn-ghost", { href: site.facebook, target: "_blank", rel: "noopener" }, "Facebook")
      )
    );
  }

  function footer() {
    return h("footer.footer", null,
      h("p.footer-brand", null,
        h("img", { src: "assets/logo-d04.png", alt: "", width: 28, height: 28 }),
        "© " + new Date().getFullYear() + " Dzerofour Project · " + site.author
      ),
      h("p.footer-legal", null, t(ui.disclaimer))
    );
  }

  function scoreboard() {
    return h("section.scoreboard", { "aria-label": "Dzerofour Patch" },
      h("div.score-tag", null, h("img", { src: "assets/logo-d04.png", alt: "", width: 34, height: 34 }), h("span", null, "D04")),
      h("dl.score-list", null, patch.stats.map(function (stat) {
        var value = statValue(stat.key) || 0;
        return h("div.score-item", null,
          h("dt", null, t(stat.label)),
          h("dd", { "data-count": value }, number(value))
        );
      }))
    );
  }

  /* ---------- HOME ---------- */

  // Modul patch tampil sebagai pemain, 3 orang per baris.
  function patchBoard() {
    var rows = Math.ceil(patch.modules.length / 3);
    return h("a.board-wrap", { href: "patch.html", "aria-label": t(ui.patchTitle) },
      h("span.board-head", null,
        h("strong", null, t(site.home.boardLabel)),
        h("span.board-legend", null,
          h("i.is-done", null, t(ui.done)),
          h("i.is-progress", null, t(ui.progress)),
          h("i.is-planned", null, t(ui.planned))
        )
      ),
      h("span.board", null,
        boardLines(),
        patch.modules.map(function (module, index) {
          var row = Math.floor(index / 3);
          var inRow = Math.min(3, patch.modules.length - row * 3);
          var col = index % 3;
          var x = (100 / (inRow + 1)) * (col + 1);
          var y = (100 / (rows + 1)) * (row + 1) + 1;
          return h("span.token.is-" + module.status, { style: "left:" + x + "%;top:" + y + "%" },
            h("span.token-no", null, String(index + 1)),
            h("span.token-name", null, t(module.name))
          );
        })
      )
    );
  }

  function boardLines() {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "board-lines");
    svg.setAttribute("viewBox", "0 0 100 120");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    [
      ["rect", { x: 2, y: 2, width: 96, height: 116 }],
      ["line", { x1: 2, y1: 60, x2: 98, y2: 60 }],
      ["circle", { cx: 50, cy: 60, r: 11 }],
      ["rect", { x: 24, y: 2, width: 52, height: 18 }],
      ["rect", { x: 37, y: 2, width: 26, height: 7 }],
      ["rect", { x: 24, y: 100, width: 52, height: 18 }],
      ["rect", { x: 37, y: 111, width: 26, height: 7 }]
    ].forEach(function (shape) {
      var node = document.createElementNS(ns, shape[0]);
      Object.keys(shape[1]).forEach(function (key) { node.setAttribute(key, shape[1][key]); });
      svg.appendChild(node);
    });
    return svg;
  }

  function toolCard(item) {
    var released = isReleased(item);
    var media = item.image
      ? h("img", { src: item.image, alt: item.imageAlt || item.name, loading: "lazy" })
      : h("span.card-icon", null, h("img", { src: item.icon, alt: "" }));

    return h("a.tool-card" + (released ? ".is-released" : ""), { href: toolHref(item) },
      h("span.card-media", null, media),
      h("span.card-body", null,
        h("span.card-top", null,
          h("span.card-no", null, "#" + item.no),
          badge(item.status),
          item.version ? h("span.card-version", null, item.version) : null
        ),
        h("span.card-name", null, item.name),
        h("span.card-text", null, t(item.tagline)),
        released && item.price ? h("span.card-price", null, h("strong", null, item.price.idr), h("span", null, item.price.usd)) : null,
        h("span.card-more", null, t(ui.viewDetail), " →")
      )
    );
  }

  function homePage() {
    return [
      h("section.home-patch", null,
        h("div.home-copy", null,
          h("div.kick", null, badge(patch.status), h("span", null, t(site.home.eyebrow))),
          h("h1", null, t(site.home.title)),
          h("p.home-text", null, t(patch.intro)),
          h("div.cta", null,
            h("a.btn.btn-primary", { href: "patch.html" }, t(site.home.ctaPatch)),
            h("a.btn.btn-ghost", { href: "#tools" }, t(site.home.ctaTools))
          )
        ),
        patchBoard()
      ),
      scoreboard(),
      h("section.section", { id: "tools" },
        h("div.section-head", null,
          h("div", null,
            h("div.kick", null, h("span", null, t(site.home.toolsKicker))),
            h("h2", null, t(site.home.toolsTitle)),
            h("p.lead", null, t(site.home.toolsText))
          )
        ),
        h("div.tool-grid", null, sortedProducts().map(toolCard))
      )
    ];
  }

  /* ---------- DETAIL PATCH ---------- */

  function moduleRow(module) {
    var status = ["done", "progress", "planned"].indexOf(module.status) >= 0 ? module.status : "planned";
    return h("li.module.is-" + status, null,
      h("span.module-name", null, t(module.name)),
      h("span.module-status", null, t(ui[status])),
      h("p.module-text", null, fill(module.text)),
      typeof module.percent === "number"
        ? h("div.bar", null, h("i", { style: "width:" + Math.max(0, Math.min(100, module.percent)) + "%" }))
        : null
    );
  }

  function timeline() {
    var sorted = updates.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
    var visible = showAllUpdates ? sorted : sorted.slice(0, INITIAL_UPDATES);
    return [
      h("ol.timeline", null, visible.map(function (update) {
        return h("li.event", null,
          h("time", { dateTime: update.date }, dateText(update.date)),
          h("div", null, h("b", null, t(update.tag)), h("span", null, fill(update.text)))
        );
      })),
      !showAllUpdates && sorted.length > INITIAL_UPDATES
        ? h("button.btn.btn-ghost.more", {
            type: "button",
            onClick: function () { showAllUpdates = true; render(); }
          }, t(ui.allUpdates) + " (" + sorted.length + ")")
        : null
    ];
  }

  function patchPage() {
    document.title = "Dzerofour Patch | " + site.brand;
    return [
      h("section.section.page-top", null,
        h("a.back", { href: "index.html" }, "← " + t(ui.back)),
        h("div.patch-head", null,
          h("span.shirt-no", { "aria-hidden": "true" }, "04"),
          h("div", null,
            h("div.kick", null, badge(patch.status), h("span", null, t(ui.patchKicker))),
            h("h1.page-title", null, t(ui.patchTitle)),
            h("p.lead", null, t(patch.intro)),
            stats.updated ? h("p.stamp", null, t(ui.patchUpdated) + " " + dateText(stats.updated)) : null
          )
        )
      ),
      scoreboard(),
      h("section.section", null,
        h("div.patch-grid", null,
          h("div", null,
            h("h2.h-small", null, t(ui.modulesTitle)),
            h("ul.modules", null, patch.modules.map(moduleRow))
          ),
          h("aside.comps", null,
            h("p.comps-kick", null, t(ui.compsTitle)),
            h("h2", null, t(patch.competitionsList.title)),
            h("p", null, t(patch.competitionsList.text)),
            h("ol", null, patch.competitionsList.items.map(function (item) { return h("li", null, t(item)); }))
          )
        )
      ),
      h("section.section", { id: "updates" },
        h("div.section-head", null,
          h("div", null,
            h("div.kick", null, h("span", null, t(ui.updatesKicker))),
            h("h2", null, t(ui.updatesTitle))
          )
        ),
        timeline()
      )
    ];
  }

  /* ---------- DETAIL TOOL ---------- */

  function ticks(items) {
    return h("ul.ticks", null, items.map(function (item) { return h("li", null, t(item)); }));
  }

  function actionBox(item) {
    if (isReleased(item) && item.price) {
      return h("div.action.is-released", null,
        h("div.price-row", null, h("strong", null, item.price.idr), h("span", null, item.price.usd)),
        h("p", null, t(ui.priceNote)),
        h("a.btn.btn-primary.btn-wide", { href: waLink(t(ui.waBuy) + " " + item.name + "."), target: "_blank", rel: "noopener" }, t(ui.buy))
      );
    }
    return h("div.action", null,
      h("strong.action-title", null, t(ui.soonTitle)),
      h("p", null, t(ui.soonText)),
      h("a.btn.btn-ghost.btn-wide", { href: waLink(t(ui.waAsk) + " " + item.name + "."), target: "_blank", rel: "noopener" }, t(ui.ask))
    );
  }

  function infoColumns(item) {
    var columns = [];
    if (item.sources || item.requirements) {
      columns.push(h("div", null,
        item.sources ? [h("h2.h-small", null, t(ui.sources)), h("ul.chips", null, item.sources.map(function (s) { return h("li", null, t(s)); }))] : null,
        item.requirements ? [h("h2.h-small", null, t(ui.requirements)), ticks(item.requirements)] : null
      ));
    }
    if (item.modes) {
      columns.push(h("div", null,
        h("h2.h-small", null, t(ui.modes)),
        h("dl.modes", null, item.modes.map(function (mode) {
          return [h("dt", null, mode.name), h("dd", null, t(mode.text))];
        }))
      ));
    }
    if (item.features) {
      columns.push(h("div", null, h("h2.h-small", null, t(ui.features)), ticks(item.features)));
    }
    return h("div.detail-info.cols-" + columns.length, null, columns);
  }

  function toolPage() {
    var id = new URLSearchParams(location.search).get("id");
    var item = products.filter(function (p) { return p.id === id; })[0];
    if (!item) {
      document.title = t(ui.notFound) + " | " + site.brand;
      return h("section.section.page-top", null,
        h("h1.page-title", null, t(ui.notFound)),
        h("div.cta", null, h("a.btn.btn-primary", { href: "index.html" }, t(ui.back)))
      );
    }
    document.title = item.name + " | " + site.brand;

    var others = sortedProducts().filter(function (p) { return p.id !== item.id; });

    return h("section.section.page-top", null,
      h("a.back", { href: "index.html#tools" }, "← " + t(ui.back)),
      h("div.detail-hero", null,
        h("div.detail-media", null,
          item.image
            ? h("img", { src: item.image, alt: item.imageAlt || item.name })
            : h("span.card-icon", null, h("img", { src: item.icon, alt: "" })),
          item.imageNote ? h("p.tool-note", null, t(item.imageNote)) : null
        ),
        h("div.detail-body", null,
          h("div.kick", null, h("span.card-no", null, "#" + item.no), badge(item.status), item.version ? h("span.card-version", null, item.version) : null),
          h("h1.page-title", null, item.name),
          h("p.lead", null, t(item.tagline)),
          h("p.detail-summary", null, t(item.summary)),
          actionBox(item)
        )
      ),
      infoColumns(item),
      item.screenshot ? h("figure.detail-shot", null, h("img", { src: item.screenshot, alt: item.screenshotAlt || item.name, loading: "lazy" })) : null,
      item.versions
        ? h("details.versions", null,
            h("summary", null, t(ui.versions)),
            h("ol", null, item.versions.map(function (version) {
              return h("li", null, h("b", null, version.v), h("span", null, t(version.text)));
            }))
          )
        : null,
      h("div.others", null,
        h("h2.h-small", null, t(ui.otherTools)),
        h("ul", null, others.map(function (other) {
          return h("li", null, h("a", { href: toolHref(other) },
            h("span.card-no", null, "#" + other.no),
            h("span.others-name", null, other.name),
            badge(other.status)
          ));
        }))
      )
    );
  }

  /* ---------- Menyusun halaman ---------- */

  function render() {
    document.documentElement.lang = lang;
    var body = page === "patch" ? patchPage() : page === "tool" ? toolPage() : homePage();
    var app = document.getElementById("app");
    while (app.firstChild) app.removeChild(app.firstChild);
    append(app, header());
    append(app, h("main", null, body));
    append(app, contact());
    append(app, footer());
  }

  function animateScoreboard() {
    var target = document.querySelector(".scoreboard");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!target || reduce || !("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      var started = performance.now();
      (function tick(now) {
        var progress = Math.min(1, (now - started) / 900);
        var eased = 1 - Math.pow(1 - progress, 3);
        Array.prototype.forEach.call(document.querySelectorAll(".score-list dd"), function (node) {
          node.textContent = number(Math.round(Number(node.getAttribute("data-count")) * eased));
        });
        if (progress < 1) requestAnimationFrame(tick);
      })(started);
    }, { threshold: 0.4 });
    observer.observe(target);
  }

  // Isi halaman dibuat oleh JS, jadi link seperti index.html#tools perlu diarahkan ulang.
  function scrollToHash() {
    if (!location.hash) return;
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }

  render();
  animateScoreboard();
  window.addEventListener("load", scrollToHash);
})();
