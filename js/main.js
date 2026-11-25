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
  var visitorCount = null;

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
      else if (key === "onToggle") node.addEventListener("toggle", value);
      else if (key === "onInput") node.addEventListener("input", value);
      else if (key === "onKeydown") node.addEventListener("keydown", value);
      else if (key === "onSubmit") node.addEventListener("submit", value);
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

  // Tool yang sudah rilis selalu di depan; yang disembunyikan (hidden: true) dilewati.
  function sortedProducts() {
    var visible = products.filter(function (p) { return !p.hidden; });
    return visible.filter(isReleased).concat(visible.filter(function (p) { return !isReleased(p); }));
  }

  /* ---------- Bagian yang sama di semua halaman ---------- */

  function header() {
    var links = h("nav.nav-links", { id: "nav-links" },
      h("a", { href: "index.html" }, t(ui.navHome)),
      h("a", { href: "patch.html" }, t(ui.navPatch)),
      h("a", { href: "database.html" }, t(ui.navDatabase || "Database ID")),
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

  function visitorBadge() {
    var cfg = site.counter;
    if (!cfg || !cfg.enabled) return null;
    var text = typeof visitorCount === "number" ? number(visitorCount) : "···";
    return h("div.visitor-badge", { "aria-live": "polite" },
      h("span.visitor-dot", { "aria-hidden": "true" }),
      h("span.visitor-label", null, t(ui.visitorsLabel || "Pengunjung")),
      h("strong.visitor-count", { "data-visitor-count": "" }, text)
    );
  }

  function updateVisitorNodes() {
    if (typeof visitorCount !== "number") return;
    var formatted = number(visitorCount);
    Array.prototype.forEach.call(document.querySelectorAll("[data-visitor-count]"), function (node) {
      node.textContent = formatted;
    });
  }

  function initVisitorCounter() {
    var cfg = site.counter;
    if (!cfg || !cfg.enabled) return;
    var targetUrl = cfg.url || "https://priskojr.github.io/dzerofour/";
    var base = Number(cfg.baseCount) || 0;
    var sessionKey = "d04-visited-session";
    var cacheKey = "d04-visitor-count";
    var alreadyCounted = false;

    try {
      alreadyCounted = sessionStorage.getItem(sessionKey) === "1";
      var cached = Number(localStorage.getItem(cacheKey));
      if (cached > 0 && visitorCount === null) {
        visitorCount = base + cached;
        updateVisitorNodes();
      }
    } catch (e) { /* penyimpanan browser diblokir */ }

    function applyRawCount(rawCount) {
      if (typeof rawCount !== "number" || isNaN(rawCount) || rawCount < 0) return;
      visitorCount = base + rawCount;
      updateVisitorNodes();
      try {
        sessionStorage.setItem(sessionKey, "1");
        localStorage.setItem(cacheKey, String(rawCount));
      } catch (e) { /* abaikan */ }
    }

    // Kalau sudah dihitung di sesi ini dan angkanya sudah di-cache, tidak perlu hit server lagi saat pindah halaman.
    if (alreadyCounted && typeof visitorCount === "number") return;

    function fallbackBusuanzi() {
      var cbName = "BusuanziCallback_" + Math.floor(Math.random() * 1000000);
      var script = document.createElement("script");
      window[cbName] = function (data) {
        try { delete window[cbName]; } catch (e) { window[cbName] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
        if (data && typeof data.site_pv === "number") {
          applyRawCount(data.site_pv);
        }
      };
      script.src = "https://busuanzi.ibruce.info/busuanzi?jsonpCallback=" + cbName;
      script.async = true;
      script.onerror = function () {
        if (script.parentNode) script.parentNode.removeChild(script);
      };
      document.head.appendChild(script);
    }

    if (window.fetch) {
      fetch("https://events.vercount.one/api/v2/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl })
      })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (res) {
          var payload = res && res.data ? res.data : res;
          var count = payload && (typeof payload.site_pv === "number" ? payload.site_pv : payload.page_pv);
          if (typeof count === "number") {
            applyRawCount(count);
          } else {
            fallbackBusuanzi();
          }
        })
        .catch(function () {
          fallbackBusuanzi();
        });
    } else {
      fallbackBusuanzi();
    }
  }

  function footer() {
    return h("footer.footer", null,
      h("div.footer-top", null,
        h("p.footer-brand", null,
          h("img", { src: "assets/logo-d04.png", alt: "", width: 28, height: 28 }),
          "© " + new Date().getFullYear() + " Dzerofour Project · " + site.author
        ),
        visitorBadge()
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

  // Modul patch tampil sebagai team sheet: daftar skuad dua kolom, berapa pun jumlahnya.
  // Bar di atasnya seperti "ball possession": perbandingan Selesai, Dikerjakan, dan Direncanakan.
  function statusKey(status) {
    return ["done", "progress", "planned"].indexOf(status) >= 0 ? status : "planned";
  }

  function patchBoard() {
    var keys = ["done", "progress", "planned"];
    var counts = { done: 0, progress: 0, planned: 0 };
    patch.modules.forEach(function (module) { counts[statusKey(module.status)]++; });

    return h("a.sheet", { href: "patch.html", "aria-label": t(ui.patchTitle) },
      h("span.sheet-head", null,
        h("span.sheet-crest", null, h("img", { src: "assets/logo-d04.png", alt: "", width: 34, height: 34 })),
        h("span.sheet-title", null,
          h("strong", null, t(site.home.boardLabel)),
          h("span", null, t(site.home.boardSub))
        ),
        h("span.sheet-total", null, h("b", null, String(patch.modules.length)), t(site.home.boardCount))
      ),
      h("span.sheet-bar", { "aria-hidden": "true" }, keys.map(function (key) {
        return counts[key] ? h("i.is-" + key, { style: "flex:" + counts[key] }) : null;
      })),
      h("span.sheet-legend", null, keys.map(function (key) {
        return h("span.is-" + key, null, h("b", null, String(counts[key])), " " + t(ui[key]));
      })),
      h("ol.sheet-list", null, patch.modules.map(function (module, index) {
        var key = statusKey(module.status);
        return h("li.sheet-row.is-" + key, null,
          h("span.sheet-no", null, String(index + 1)),
          h("span.sheet-name", null, t(module.name)),
          h("span.sheet-status", null, h("span.sr-only", null, t(ui[key])))
        );
      })),
      h("span.sheet-more", null, t(ui.viewDetail), " →")
    );
  }

  function toolCard(item) {
    var released = isReleased(item);
    var media = item.image
      ? [
          h("img", { src: item.image, alt: item.imageAlt || item.name, loading: "lazy" }),
          item.icon ? h("span.card-app-icon", null, h("img", { src: item.icon, alt: "", width: 38, height: 38 })) : null
        ]
      : h("span.card-icon", null, h("img", { src: item.icon, alt: "" }));

    return h("a.tool-card" + (released ? ".is-released" : ""), { href: toolHref(item) },
      h("span.card-media", null, media),
      h("span.card-body", null,
        h("span.card-top", null,
          item.icon ? h("img.card-inline-icon", { src: item.icon, alt: "", width: 26, height: 26 }) : null,
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
          h("p.home-text", null, fill(patch.intro)),
          h("div.cta", null,
            h("a.btn.btn-primary", { href: "patch.html" }, t(site.home.ctaPatch)),
            h("a.btn.btn-ghost", { href: "database.html" }, t(ui.dbCTA || "Database ID")),
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

  // items boleh daftar biasa ["A", "B"] atau berkelompok [{ group, items }].
  function competitionItems(items) {
    var grouped = items.some(function (item) { return item && item.group; });
    if (!grouped) return h("ol", null, items.map(function (item) { return h("li", null, t(item)); }));
    return h("div.comp-groups", null, items.map(function (group) {
      return h("div.comp-group", null,
        h("p.comp-group-name", null, t(group.group)),
        h("ol", null, group.items.map(function (item) { return h("li", null, t(item)); }))
      );
    }));
  }

  function sectionHead(kick, title, text) {
    return h("div.section-head", null,
      h("div", null,
        kick ? h("div.kick", null, h("span", null, t(kick))) : null,
        h("h2", null, fill(title)),
        text ? h("p.lead", null, fill(text)) : null
      )
    );
  }

  function jumpNav() {
    var links = [
      ["modules", ui.jumpModules, true],
      ["formats", ui.jumpFormats, patch.formats],
      ["gallery", ui.jumpGallery, patch.gallery],
      ["database", ui.jumpDatabase, patch.database],
      ["leagues", ui.jumpLeagues, patch.leagues && window.LEAGUES],
      ["roadmap", ui.jumpRoadmap, patch.roadmap],
      ["updates", ui.jumpUpdates, true]
    ].filter(function (link) { return link[2]; });
    return h("nav.jump", { "aria-label": t(ui.jumpLabel) },
      h("span.jump-label", null, t(ui.jumpLabel)),
      h("ul", null, links.map(function (link) {
        return h("li", null, h("a", { href: "#" + link[0] }, t(link[1])));
      }))
    );
  }

  function statusDot(status) {
    var key = ["done", "progress", "planned"].indexOf(status) >= 0 ? status : "planned";
    return h("span.status.is-" + key, null, t(ui[key]));
  }

  function formatsSection() {
    var f = patch.formats;
    if (!f) return null;
    var c = f.compare;
    return h("div.band", null, h("section.section", { id: "formats" },
      sectionHead(null, f.title, f.text),
      c ? h("div.compare", null,
        h("h3.compare-title", null, t(c.title)),
        h("div.compare-table", { role: "table", "aria-label": t(c.title) },
          h("div.compare-row.compare-headrow", { role: "row" },
            h("span", { role: "columnheader" }, ""),
            h("span", { role: "columnheader" }, t(c.before)),
            h("span.is-after", { role: "columnheader" }, t(c.after))
          ),
          c.rows.map(function (row) {
            return h("div.compare-row", { role: "row" },
              h("span.compare-label", { role: "rowheader" }, t(row.label)),
              h("span.compare-before", { role: "cell", "data-label": t(c.before) }, t(row.before)),
              h("span.compare-after", { role: "cell", "data-label": t(c.after) }, t(row.after))
            );
          })
        ),
        c.note ? h("p.compare-note", null, t(c.note)) : null
      ) : null,
      h("ul.format-grid", null, f.items.map(function (item) {
        return h("li.format-card.is-" + item.status, null,
          h("div.format-top", null, h("h3", null, t(item.name)), statusDot(item.status)),
          h("ul.chips", null, item.facts.map(function (fact) { return h("li", null, t(fact)); })),
          h("p", null, fill(item.text))
        );
      }))
    ));
  }

  // Galeri dengan jendela besar. Esc atau klik di luar gambar untuk menutup.
  function gallerySection() {
    var g = patch.gallery;
    if (!g || !g.items || !g.items.length) return null;
    return h("section.section", { id: "gallery" },
      sectionHead(null, g.title, g.text),
      h("ul.gallery", null, g.items.map(function (item, index) {
        return h("li", null,
          h("button.shot", { type: "button", onClick: function () { openViewer(g.items, index, t(g.title)); } },
            h("img", { src: item.image, alt: t(item.caption), loading: "lazy", width: 1280, height: 720 }),
            h("span.shot-cap", null, t(item.caption))
          )
        );
      }))
    );
  }

  function openViewer(items, start, label) {
    if (!items || !items.length) return;
    var index = start || 0;
    var img = h("img", { alt: "" });
    var cap = h("p.viewer-cap");
    var count = h("span.viewer-count");
    function show(i) {
      index = (i + items.length) % items.length;
      img.src = items[index].image;
      img.alt = t(items[index].caption);
      cap.textContent = t(items[index].caption);
      count.textContent = (index + 1) + " / " + items.length;
    }
    var dialog = h("dialog.viewer", { "aria-label": label || "" },
      h("div.viewer-bar", null,
        count,
        items.length > 1 ? h("button.viewer-btn", { type: "button", "aria-label": t(ui.prev), onClick: function () { show(index - 1); } }, "←") : null,
        items.length > 1 ? h("button.viewer-btn", { type: "button", "aria-label": t(ui.next), onClick: function () { show(index + 1); } }, "→") : null,
        h("button.viewer-btn", { type: "button", "aria-label": t(ui.close), onClick: function () { dialog.close(); } }, "✕")
      ),
      img,
      cap
    );
    dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === "ArrowRight") show(index + 1);
    });
    dialog.addEventListener("close", function () { dialog.parentNode.removeChild(dialog); });
    document.body.appendChild(dialog);
    show(index);
    if (dialog.showModal) dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function databaseSection() {
    var d = patch.database;
    if (!d) return null;
    return h("section.section", { id: "database" },
      sectionHead(null, d.title, d.text),
      h("div.dbtable", { role: "table", "aria-label": t(d.title) },
        h("div.db-row.db-headrow", { role: "row" },
          h("span", { role: "columnheader" }, t(d.headers.label)),
          h("span", { role: "columnheader" }, t(d.headers.original)),
          h("span.is-now", { role: "columnheader" }, t(d.headers.now)),
          h("span", { role: "columnheader" }, t(d.headers.limit))
        ),
        d.rows.map(function (row) {
          var now = statValue(row.key);
          var hasBar = typeof row.limit === "number" && typeof now === "number";
          return h("div.db-row", { role: "row" },
            h("span.db-label", { role: "rowheader" }, t(row.label)),
            h("span.db-num", { role: "cell", "data-label": t(d.headers.original) }, typeof row.original === "number" ? number(row.original) : "-"),
            h("span.db-num.is-now", { role: "cell", "data-label": t(d.headers.now) }, typeof now === "number" ? number(now) : "-"),
            h("span.db-num", { role: "cell", "data-label": t(d.headers.limit) }, typeof row.limit === "number" ? number(row.limit) : "-"),
            hasBar ? h("span.db-bar", { "aria-hidden": "true" },
              typeof row.original === "number" ? h("i.db-bar-old", { style: "width:" + Math.min(100, row.original / row.limit * 100) + "%" }) : null,
              h("i.db-bar-now", { style: "width:" + Math.min(100, now / row.limit * 100) + "%" })
            ) : null
          );
        })
      ),
      h("p.db-legend", { "aria-hidden": "true" },
        h("i.is-old", null, t(d.headers.original)),
        h("i.is-now", null, t(d.headers.now)),
        h("i.is-limit", null, t(d.headers.limit))
      ),
      h("div.cta", null,
        h("a.btn.btn-primary", { href: "database.html" }, t(ui.dbCTA || "Buka Katalog Database ID") + " →")
      )
    );
  }

  function leaguesSection() {
    var l = patch.leagues;
    var data = window.LEAGUES;
    if (!l || !data || !data.regions) return null;
    return h("div.band", null, h("section.section", { id: "leagues" },
      sectionHead(null, l.title, l.text),
      data.regions.map(function (region) {
        return h("div.region", null,
          h("h3.region-name", null, t(region.name), h("span", null, String(region.leagues.length))),
          h("div.league-grid", null, region.leagues.map(function (league) {
            return h("details.league" + (league.isNew ? ".is-new" : ""), null,
              h("summary", null,
                h("span.league-main", null,
                  h("span.league-name", null, league.name),
                  league.country ? h("span.league-country", null, t(league.country)) : null
                ),
                h("span.league-side", null,
                  league.isNew ? h("span.league-new", null, t(l.isNew)) : null,
                  h("span.league-count", null, number(league.clubs) + " " + t(l.clubs))
                )
              ),
              h("div.league-body", null,
                league.cups && league.cups.length ? h("p.league-cups", null, h("b", null, t(l.also) + ": "), league.cups.join(" · ")) : null,
                h("ol.league-teams", null, league.teams.map(function (team) { return h("li", null, team); }))
              )
            );
          }))
        );
      })
    ));
  }

  function roadmapSection() {
    var r = patch.roadmap;
    if (!r) return null;
    return h("section.section", { id: "roadmap" },
      sectionHead(null, r.title, r.text),
      h("ol.roadmap", null, r.items.map(function (item) {
        return h("li.road.is-" + item.status, null,
          h("div.road-top", null, h("h3", null, t(item.name)), statusDot(item.status)),
          h("p", null, fill(item.text))
        );
      }))
    );
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
            h("p.lead", null, fill(patch.intro)),
            stats.updated ? h("p.stamp", null, t(ui.patchUpdated) + " " + dateText(stats.updated)) : null
          )
        )
      ),
      scoreboard(),
      jumpNav(),
      h("section.section", { id: "modules" },
        h("div.patch-grid", null,
          h("div", null,
            h("h2.h-small", null, t(ui.modulesTitle)),
            h("ul.modules", null, patch.modules.map(moduleRow))
          ),
          h("aside.comps", null,
            h("p.comps-kick", null, t(ui.compsTitle)),
            h("h2", null, fill(patch.competitionsList.title)),
            h("p", null, fill(patch.competitionsList.text)),
            competitionItems(patch.competitionsList.items),
            patch.competitionsList.note ? h("p.comps-note", null, fill(patch.competitionsList.note)) : null
          )
        )
      ),
      formatsSection(),
      gallerySection(),
      databaseSection(),
      leaguesSection(),
      roadmapSection(),
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

  function toolPreviewsSection(item) {
    if (item.previews && item.previews.length) {
      return h("div.tool-previews", null,
        h("div.tool-previews-head", null,
          h("h2.h-small", null, t(ui.previews || "Pratinjau aplikasi") + " (" + item.previews.length + ")"),
          h("p.tool-previews-sub", null, t(ui.previewsSub))
        ),
        h("ul.tool-preview-grid", null, item.previews.map(function (shot, idx) {
          return h("li", null,
            h("button.shot.tool-shot", {
              type: "button",
              onClick: function () { openViewer(item.previews, idx, item.name); }
            },
              h("img", { src: shot.image, alt: t(shot.caption) || item.name, loading: "lazy" }),
              shot.caption ? h("span.shot-cap", null, t(shot.caption)) : null
            )
          );
        }))
      );
    }
    if (item.screenshot) {
      return h("figure.detail-shot", null, h("img", { src: item.screenshot, alt: item.screenshotAlt || item.name, loading: "lazy" }));
    }
    return null;
  }

  function toolPage() {
    var id = new URLSearchParams(location.search).get("id");
    var item = products.filter(function (p) { return p.id === id && !p.hidden; })[0];
    if (!item) {
      document.title = t(ui.notFound) + " | " + site.brand;
      return h("section.section.page-top", null,
        h("h1.page-title", null, t(ui.notFound)),
        h("div.cta", null, h("a.btn.btn-primary", { href: "index.html" }, t(ui.back)))
      );
    }
    document.title = item.name + " | " + site.brand;

    var others = sortedProducts().filter(function (p) { return p.id !== item.id; });
    var heroShots = item.previews && item.previews.length
      ? item.previews
      : item.image
        ? [{ image: item.image, caption: item.imageAlt || item.name }]
        : null;

    return h("section.section.page-top", null,
      h("a.back", { href: "index.html#tools" }, "← " + t(ui.back)),
      h("div.detail-hero", null,
        h("div.detail-media", null,
          item.image
            ? h("button.shot.detail-hero-shot", {
                type: "button",
                onClick: function () { if (heroShots) openViewer(heroShots, 0, item.name); }
              }, h("img", { src: item.image, alt: item.imageAlt || item.name }))
            : h("span.card-icon", null, h("img", { src: item.icon, alt: "" })),
          item.imageNote ? h("p.tool-note", null, t(item.imageNote)) : null
        ),
        h("div.detail-body", null,
          h("div.kick", null,
            item.icon ? h("img.detail-app-icon", { src: item.icon, alt: "", width: 42, height: 42 }) : null,
            h("span.card-no", null, "#" + item.no),
            badge(item.status),
            item.version ? h("span.card-version", null, item.version) : null
          ),
          h("h1.page-title", null, item.name),
          h("p.lead", null, t(item.tagline)),
          h("p.detail-summary", null, t(item.summary)),
          actionBox(item)
        )
      ),
      infoColumns(item),
      toolPreviewsSection(item),
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
            other.icon ? h("img.others-icon", { src: other.icon, alt: "", width: 28, height: 28 }) : null,
            h("span.card-no", null, "#" + other.no),
            h("span.others-name", null, other.name),
            badge(other.status)
          ));
        }))
      )
    );
  }

  /* ---------- KATALOG DATABASE ID (KOMPETISI > TIM > PEMAIN) ---------- */

  var dbSearchQuery = "";
  var dbActiveGroup = "all";
  var dbToastTimer = null;

  function normText(str) {
    var s = String(str || "").toLowerCase();
    try {
      return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } catch (e) {
      return s;
    }
  }

  function copyValue(val, labelText, btnNode) {
    var text = String(val);
    function onDone() {
      if (btnNode) {
        btnNode.classList.add("is-copied");
        setTimeout(function () { btnNode.classList.remove("is-copied"); }, 1200);
      }
      showCopyToast(t(ui.dbCopied) + (labelText ? " " + labelText : "") + ": " + text);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onDone, function () { fallbackCopy(text, onDone); });
    } else {
      fallbackCopy(text, onDone);
    }
  }

  function fallbackCopy(text, callback) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* abaikan */ }
    document.body.removeChild(ta);
    if (callback) callback();
  }

  function showCopyToast(msg) {
    var toast = document.getElementById("d04-toast");
    if (!toast) {
      toast = h("div.copy-toast", { id: "d04-toast", role: "status", "aria-live": "polite" });
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("is-visible");
    if (dbToastTimer) clearTimeout(dbToastTimer);
    dbToastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  function renderPlayerRow(p, isMatch) {
    var pid = String(p[0]);
    var pname = String(p[1]);
    var idChip = h("button.id-badge.copy-chip", {
      type: "button",
      title: t(ui.dbCopyId) + ": " + pid,
      onClick: function (e) {
        e.stopPropagation();
        copyValue(pid, "ID", idChip);
      }
    }, pid);
    var nameSpan = h("button.item-name-btn", {
      type: "button",
      title: t(ui.dbCopyName) + ": " + pname,
      onClick: function (e) {
        e.stopPropagation();
        copyValue(pname, "", nameSpan);
      }
    }, pname);
    var btnCopyId = h("button.copy-act", {
      type: "button",
      title: t(ui.dbCopyId) + " (" + pid + ")",
      onClick: function (e) {
        e.stopPropagation();
        copyValue(pid, "ID", btnCopyId);
      }
    }, "ID");
    var btnCopyName = h("button.copy-act", {
      type: "button",
      title: t(ui.dbCopyName) + " (" + pname + ")",
      onClick: function (e) {
        e.stopPropagation();
        copyValue(pname, "", btnCopyName);
      }
    }, t(lang === "id" ? "Nama" : "Name"));

    return h("li.db-player" + (isMatch ? ".is-match" : ""), null,
      idChip,
      nameSpan,
      h("span.copy-actions", null, btnCopyId, btnCopyName)
    );
  }

  function buildTeamPlayersList(teamObj, matchedPlayers, forceAll) {
    var players = teamObj.p || [];
    var showMatchedOnly = !forceAll && matchedPlayers && matchedPlayers.length > 0 && matchedPlayers.length < players.length;
    var listToRender = showMatchedOnly ? matchedPlayers : players;
    var matchSet = {};
    if (matchedPlayers && matchedPlayers.length) {
      matchedPlayers.forEach(function (mp) { matchSet[mp[0]] = true; });
    }
    var ul = h("ol.db-players", null, listToRender.map(function (p) {
      return renderPlayerRow(p, Boolean(matchSet[p[0]]));
    }));
    if (!showMatchedOnly) return ul;

    var wrap = h("div.db-players-wrap", null,
      ul,
      h("button.btn-show-all", {
        type: "button",
        onClick: function () {
          var full = buildTeamPlayersList(teamObj, matchedPlayers, true);
          if (wrap.parentNode) wrap.parentNode.replaceChild(full, wrap);
        }
      }, t(ui.dbShowAllPlayers) + " (" + number(players.length) + ")")
    );
    return wrap;
  }

  function renderTeamNode(tid, teamObj, matchedPlayers, isTeamMatch, autoOpen) {
    var tidStr = String(tid);
    var tname = teamObj.n;
    var players = teamObj.p || [];
    var isFreeAgents = tidStr === "0";
    var bodyHost = h("div.db-team-body");
    var populated = false;

    function ensurePopulated() {
      if (populated) return;
      populated = true;
      append(bodyHost, buildTeamPlayersList(teamObj, matchedPlayers, false));
    }

    var idChip = !isFreeAgents ? h("button.id-badge.copy-chip", {
      type: "button",
      title: t(ui.dbCopyId) + ": " + tidStr,
      onClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyValue(tidStr, "Team ID", idChip);
      }
    }, "ID " + tidStr) : null;

    var nameBtn = h("span.db-team-name", null, tname);

    var copyIdBtn = !isFreeAgents ? h("button.copy-act", {
      type: "button",
      title: t(ui.dbCopyId) + " (" + tidStr + ")",
      onClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyValue(tidStr, "Team ID", copyIdBtn);
      }
    }, "ID") : null;

    var copyNameBtn = h("button.copy-act", {
      type: "button",
      title: t(ui.dbCopyName) + " (" + tname + ")",
      onClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyValue(tname, "Team", copyNameBtn);
      }
    }, t(lang === "id" ? "Nama" : "Name"));

    var countBadge = matchedPlayers && matchedPlayers.length
      ? h("span.db-team-count.is-match", null, number(matchedPlayers.length) + " / " + number(players.length) + " " + t(ui.dbPlayersCount))
      : h("span.db-team-count", null, number(players.length) + " " + t(ui.dbPlayersCount));

    var detailsNode = h("details.db-team" + (isTeamMatch ? ".is-match" : ""), {
      open: autoOpen ? "" : null,
      onToggle: function () {
        if (detailsNode.open) ensurePopulated();
      }
    },
      h("summary", null,
        h("span.db-team-main", null, idChip, nameBtn),
        h("span.db-team-side", null,
          h("span.copy-actions", null, copyIdBtn, copyNameBtn),
          countBadge
        )
      ),
      bodyHost
    );

    if (autoOpen) ensurePopulated();
    return detailsNode;
  }

  function databasePage() {
    document.title = t(ui.navDatabase || "Database ID") + " | " + site.brand;
    var catalog = window.DATABASE_CATALOG;
    if (!catalog || !catalog.groups || !catalog.teams) {
      return h("section.section.page-top", null,
        h("h1.page-title", null, "Database ID"),
        h("p.lead", null, "Data belum tersedia. Jalankan UPDATE-PATCH-STATS.bat terlebih dahulu.")
      );
    }

    var resultsContainer = h("div.db-results");
    var summaryBar = h("div.db-summary-bar");
    var searchInput = h("input.db-search-input", {
      type: "search",
      value: dbSearchQuery,
      placeholder: t(ui.dbSearchPlaceholder),
      "aria-label": t(ui.dbSearchPlaceholder),
      onKeydown: function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          runSearch(searchInput.value);
        }
      },
      onInput: function () {
        if (searchInput.value === "" && dbSearchQuery !== "") {
          runSearch("");
        }
      }
    });

    var filterBar = h("div.db-filters", { role: "tablist" });

    function rebuildFilterPills() {
      while (filterBar.firstChild) filterBar.removeChild(filterBar.firstChild);
      var allItems = [{ id: "all", name: ui.dbFilterAll }].concat(catalog.groups);
      allItems.forEach(function (grp) {
        var active = dbActiveGroup === grp.id;
        append(filterBar, h("button.db-filter-pill" + (active ? ".is-active" : ""), {
          type: "button",
          onClick: function () {
            dbActiveGroup = grp.id;
            rebuildFilterPills();
            renderCatalogResults();
          }
        }, t(grp.name)));
      });
    }

    function runSearch(rawQuery) {
      dbSearchQuery = String(rawQuery || "").trim();
      renderCatalogResults();
    }

    function renderCatalogResults() {
      while (resultsContainer.firstChild) resultsContainer.removeChild(resultsContainer.firstChild);
      while (summaryBar.firstChild) summaryBar.removeChild(summaryBar.firstChild);

      var q = normText(dbSearchQuery);
      var isSearching = q.length > 0;
      var totalCompsShown = 0;
      var totalTeamsShown = 0;
      var totalPlayersMatched = 0;

      // Pre-evaluate team & player matches if searching
      var teamMatchCache = {};
      if (isSearching) {
        Object.keys(catalog.teams).forEach(function (tid) {
          var tObj = catalog.teams[tid];
          var tidMatch = tid !== "0" && tid.indexOf(q) !== -1;
          var tnameMatch = normText(tObj.n).indexOf(q) !== -1;
          var pMatches = [];
          var pList = tObj.p || [];
          for (var i = 0; i < pList.length; i++) {
            var p = pList[i];
            var pidStr = String(p[0]);
            var pnameNorm = normText(p[1]);
            if (pidStr.indexOf(q) !== -1 || pnameNorm.indexOf(q) !== -1) {
              pMatches.push(p);
            }
          }
          if (tidMatch || tnameMatch || pMatches.length > 0) {
            teamMatchCache[tid] = {
              teamMatched: tidMatch || tnameMatch,
              players: pMatches
            };
          }
        });
      }

      var autoOpenTeamsCount = 0;

      catalog.groups.forEach(function (group) {
        if (dbActiveGroup !== "all" && dbActiveGroup !== group.id) return;

        var compNodes = [];
        group.competitions.forEach(function (comp) {
          var compNameMatch = isSearching && normText(comp.name).indexOf(q) !== -1;
          var visibleTeamIds = [];

          comp.teams.forEach(function (tid) {
            var key = String(tid);
            if (!catalog.teams[key]) return;
            if (!isSearching || compNameMatch || teamMatchCache[key]) {
              visibleTeamIds.push(key);
            }
          });

          if (visibleTeamIds.length === 0) return;

          totalCompsShown++;
          totalTeamsShown += visibleTeamIds.length;

          var compPlayersTotal = 0;
          var compMatchedPlayersCount = 0;
          visibleTeamIds.forEach(function (key) {
            var tObj = catalog.teams[key];
            compPlayersTotal += (tObj.p ? tObj.p.length : 0);
            if (isSearching && teamMatchCache[key]) {
              compMatchedPlayersCount += teamMatchCache[key].players.length;
            }
          });
          totalPlayersMatched += compMatchedPlayersCount;

          var compTeamsContainer = h("div.db-comp-teams");
          var compPopulated = false;

          function populateCompetitionTeams() {
            if (compPopulated) return;
            compPopulated = true;
            visibleTeamIds.forEach(function (key) {
              var tObj = catalog.teams[key];
              var mInfo = isSearching ? teamMatchCache[key] : null;
              var mPlayers = mInfo ? mInfo.players : null;
              var isTMatch = mInfo ? mInfo.teamMatched : false;
              var shouldOpenTeam = isSearching && ((mPlayers && mPlayers.length > 0 && mPlayers.length <= 25 && autoOpenTeamsCount < 15) || (visibleTeamIds.length === 1 && autoOpenTeamsCount < 15));
              if (shouldOpenTeam) autoOpenTeamsCount++;
              append(compTeamsContainer, renderTeamNode(key, tObj, mPlayers, isTMatch, shouldOpenTeam));
            });
          }

          var openComp = isSearching;
          var compDetails = h("details.league.db-comp", {
            open: openComp ? "" : null,
            onToggle: function () {
              if (compDetails.open) populateCompetitionTeams();
            }
          },
            h("summary", null,
              h("span.league-main", null,
                h("span.league-name", null, comp.name)
              ),
              h("span.league-side", null,
                isSearching && compMatchedPlayersCount > 0
                  ? h("span.league-new", null, number(compMatchedPlayersCount) + " " + t(ui.dbMatchingPlayers))
                  : null,
                h("span.league-count", null, number(visibleTeamIds.length) + " " + t(ui.dbTeamsCount) + " · " + number(compPlayersTotal) + " " + t(ui.dbPlayersCount))
              )
            ),
            h("div.league-body.db-comp-body", null, compTeamsContainer)
          );

          if (openComp) populateCompetitionTeams();
          compNodes.push(compDetails);
        });

        if (compNodes.length > 0) {
          append(resultsContainer, h("div.region.db-region", null,
            h("h3.region-name", null, t(group.name), h("span", null, String(compNodes.length) + " " + t(ui.dbCompsCount))),
            h("div.db-comp-grid", null, compNodes)
          ));
        }
      });

      if (isSearching) {
        append(summaryBar, h("p.db-search-status", null,
          h("b", null, t(ui.dbSearchSummary) + ' "' + dbSearchQuery + '": '),
          number(totalCompsShown) + " " + t(ui.dbCompsCount) + " · " +
          number(totalTeamsShown) + " " + t(ui.dbTeamsCount) +
          (totalPlayersMatched > 0 ? " · " + number(totalPlayersMatched) + " " + t(ui.dbMatchingPlayers) : "")
        ));
      }

      if (totalCompsShown === 0) {
        append(resultsContainer, h("div.db-empty", null,
          h("p", null, t(ui.dbNoResult)),
          h("button.btn.btn-ghost", {
            type: "button",
            onClick: function () {
              searchInput.value = "";
              dbActiveGroup = "all";
              rebuildFilterPills();
              runSearch("");
            }
          }, t(ui.dbClearBtn))
        ));
      }
    }

    rebuildFilterPills();
    renderCatalogResults();

    var searchForm = h("form.db-search-bar", {
      onSubmit: function (e) {
        e.preventDefault();
        runSearch(searchInput.value);
      }
    },
      searchInput,
      h("button.btn.btn-primary.db-search-btn", { type: "submit" }, t(ui.dbSearchBtn)),
      h("button.btn.btn-ghost.db-clear-btn", {
        type: "button",
        onClick: function () {
          searchInput.value = "";
          runSearch("");
          searchInput.focus();
        }
      }, t(ui.dbClearBtn))
    );

    return [
      h("section.section.page-top", null,
        h("a.back", { href: "index.html" }, "← " + t(ui.back)),
        h("div.patch-head", null,
          h("span.shirt-no", { "aria-hidden": "true" }, "ID"),
          h("div", null,
            h("div.kick", null, h("span.card-badge.is-released", null, "2026/27"), h("span", null, t(ui.dbKicker))),
            h("h1.page-title", null, t(ui.dbTitle)),
            h("p.lead", null, t(ui.dbIntro)),
            catalog.updated ? h("p.stamp", null, t(ui.patchUpdated) + " " + dateText(catalog.updated)) : null
          )
        )
      ),
      scoreboard(),
      h("div.band", null,
        h("section.section.db-catalog-section", { id: "catalog" },
          searchForm,
          filterBar,
          summaryBar,
          resultsContainer
        )
      )
    ];
  }

  /* ---------- Menyusun halaman ---------- */

  function render() {
    document.documentElement.lang = lang;
    var body = page === "patch" ? patchPage() : page === "database" ? databasePage() : page === "tool" ? toolPage() : homePage();
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
  initVisitorCounter();
  window.addEventListener("load", scrollToHash);
})();
