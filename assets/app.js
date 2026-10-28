/* ===== شبكة تمريضيون التعليمية — app v2 ===== */
(function () {
  "use strict";
  var $main = document.getElementById("main");
  var MAN = NS.manifest || {};

  /* storage */
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var prog = load("ns-progress2", {});
  function setProg(key, obj) { prog[key] = obj; save("ns-progress2", prog); }

  /* helpers */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/==(.+?)==/g, "<mark>$1</mark>")
      .replace(/__(.+?)__/g, "<i>$1</i>").replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<i>$2</i>");
  }
  function arDiv(t) { return t ? '<div class="ar" lang="ar" dir="rtl">' + fmt(t) + "</div>" : ""; }
  function subj(id) { for (var i = 0; i < NS.subjects.length; i++) if (NS.subjects[i].id === id) return NS.subjects[i]; return null; }
  function sysOf(s, kind, sid) { var l = s[kind] || []; for (var i = 0; i < l.length; i++) if (l[i].id === sid) return l[i]; return null; }
  function man(sid, sys, tid) { return MAN[sid] && MAN[sid][sys] && MAN[sid][sys][tid] || null; }
  function toast(m) { var t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function kindName(k) { return k === "practical" ? { en: "Practical", ar: "العملي" } : { en: "Theoretical", ar: "النظري" }; }

  /* icons */
  var IC = {
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3.5 12h4l2-3 3 6 2-3h6"/>',
    micro: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    baby: '<circle cx="12" cy="9" r="6"/><path d="M9.5 9h.01M14.5 9h.01M10 12a3 3 0 0 0 4 0M8 21c0-2.2 1.8-4 4-4s4 1.8 4 4"/>',
    mother: '<circle cx="9" cy="5" r="2.5"/><path d="M6.5 21v-6l-2-2 2.5-5h4l1 3a4.5 4.5 0 1 1 0 9h-1v1"/><circle cx="15.5" cy="15" r="2"/>',
    people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="8" r="2.5"/><path d="M16 14a5 5 0 0 1 5 5v2"/>',
    mind: '<path d="M12 4a4 4 0 0 0-7.5 2A4 4 0 0 0 4 13a4 4 0 0 0 4 6h1V4.5M12 4a4 4 0 0 1 7.5 2 4 4 0 0 1 .5 7 4 4 0 0 1-4 6h-1"/><path d="M12 4v16"/>',
    brain: '<path d="M9.5 2A3.5 3.5 0 0 0 6 5.5 3.5 3.5 0 0 0 3 9a3.5 3.5 0 0 0 1 6 3.5 3.5 0 0 0 5.5 4.5V2zM14.5 2A3.5 3.5 0 0 1 18 5.5 3.5 3.5 0 0 1 21 9a3.5 3.5 0 0 1-1 6 3.5 3.5 0 0 1-5.5 4.5V2z"/>',
    kidney: '<path d="M8 3C4 3 3 7 3 11s1 10 5 10c3 0 3-3 3-5s2-2 2-4-2-2-2-4 0-5-3-5z"/><path d="M11 12h4a3 3 0 0 1 3 3v6"/>',
    bone: '<path d="M17 10l-7 7a2.5 2.5 0 1 1-3.5 1.5A2.5 2.5 0 1 1 5 15l7-7a2.5 2.5 0 1 1 3.5-1.5A2.5 2.5 0 1 1 17 10z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    ear: '<path d="M6 9a6 6 0 0 1 12 0c0 4-3 4.5-3 8a3 3 0 0 1-6 0"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-1.5 3"/>',
    skin: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 10c3 0 3 2 6 2s3-2 6-2 3 2 6 2M8 16h.01M12 16h.01M16 16h.01"/>',
    virus: '<circle cx="12" cy="12" r="5"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19"/>',
    bug: '<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 20v-9M8 10H4M20 10h-4M8 15H4M20 15h-4M9 6 7 3M15 6l2-3"/>',
    pill: '<path d="M10.5 20.5a5 5 0 0 1-7-7l10-10a5 5 0 0 1 7 7z"/><path d="M8.5 8.5l7 7"/>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    drop: '<path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.3 0z"/>',
    thermo: '<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>',
    lab: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
    steth: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-3"/><circle cx="20" cy="11" r="2"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    factory: '<path d="M2 20V9l6 4V9l6 4V4h6v16z"/><path d="M6 17h2M11 17h2M16 17h2"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 16-10 16"/><path d="M4 20c4-4 7-7 11-10"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lungs: '<path d="M12 3v8M12 11c-1 1-3 1-4 0M12 11c1 1 3 1 4 0"/><path d="M8 7C5 7 3 12 3 16c0 3 2 4 4 4s3-1 3-3v-6M16 7c3 0 5 5 5 9 0 3-2 4-4 4s-3-1-3-3v-6"/>',
    blood: '<path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.3 0z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-5.5A8 8 0 1 1 21 12z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    x: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
    scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    food: '<path d="M3 11h18a9 9 0 0 1-18 0zM12 4v3M8 5v2M16 5v2"/>',
    bed: '<path d="M2 20V5M2 16h20v4M22 16v-4a3 3 0 0 0-3-3h-8v7"/><circle cx="6.5" cy="11.5" r="2"/>',
    ambulance: '<path d="M3 17V6h11v11M14 9h4l3 4v4h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M7 9v4M5 11h4"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-3a2 2 0 0 0-4 0"/>',
    syringe: '<path d="M18 2l4 4M17 7l3-3M19 9l-8.7 8.7a2 2 0 0 1-2.8 0l-1.2-1.2a2 2 0 0 1 0-2.8L15 5M9 11l4 4M5 19l-3 3"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (IC[n] || IC.book) + "</svg>"; }
  var CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  var DOWN = '<svg viewBox="0 0 24 24"><path d="M12 4v16M6 14l6 6 6-6"/></svg>';

  /* theme & arabic */
  var root = document.documentElement, theme = load("ns-theme", "auto");
  root.setAttribute("data-theme", theme);
  document.getElementById("themeBtn").onclick = function () {
    var dark = theme === "dark" || (theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    theme = dark ? "light" : "dark"; save("ns-theme", theme); root.setAttribute("data-theme", theme);
  };
  var arOn = load("ns-ar", false);
  function applyAr() { document.body.classList.toggle("ar-on", arOn); var b = document.getElementById("arSwitch"); if (b) b.setAttribute("aria-pressed", String(arOn)); }
  applyAr();

  /* counts */
  function stats(sid, list) {
    var n = 0, ready = 0, q = 0, done = 0;
    list.forEach(function (sy) { sy.topics.forEach(function (t) { n++; var m = man(sid, sy.id, t.id); if (m) { ready++; q += m.q; } if (prog[sid + "/" + sy.id + "/" + t.id]) done++; }); });
    return { n: n, ready: ready, q: q, done: done };
  }
  function allStats() { var t = { n: 0, ready: 0, q: 0 }; NS.subjects.forEach(function (s) { var a = stats(s.id, s.theory.concat(s.practical)); t.n += a.n; t.ready += a.ready; t.q += a.q; }); return t; }

  /* lazy loading */
  var pending = {};
  function loadTopic(sid, sys, tid, cb) {
    var have = NS.data[sid] && NS.data[sid][sys] && NS.data[sid][sys][tid];
    if (have) return cb(have);
    var key = sid + "/" + sys + "/" + tid;
    if (pending[key]) { pending[key].push(cb); return; }
    pending[key] = [cb];
    NS.img = NS.img || {}; NS.imgLoaded = NS.imgLoaded || {};
    function topicScript() {
      var s = document.createElement("script");
      s.src = "data/" + key + ".js?v=" + (NS.version || "1");
      function done() { var d = NS.data[sid] && NS.data[sid][sys] && NS.data[sid][sys][tid]; pending[key].forEach(function (f) { f(d || null); }); delete pending[key]; }
      s.onload = done; s.onerror = done;
      document.head.appendChild(s);
    }
    if (NS.imgLoaded[sid]) return topicScript();
    var im = document.createElement("script");
    im.src = "data/img/" + sid + ".js?v=" + (NS.version || "1");
    im.onload = im.onerror = function () { NS.imgLoaded[sid] = 1; topicScript(); };
    document.head.appendChild(im);
  }

  /* shared bits */
  function crumbs(parts) {
    return '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>' + parts.map(function (p) {
      return '<span class="sep">/</span>' + (p.href ? '<a href="' + p.href + '">' + esc(p.t) + "</a>" : "<span>" + esc(p.t) + "</span>");
    }).join("") + "</nav>";
  }
  function head(en, ar, p) { return '<div class="ph"><h1>' + esc(en) + "</h1>" + (ar ? '<div class="ar-sub" lang="ar">' + esc(ar) + "</div>" : "") + (p ? "<p>" + p + "</p>" : "") + "</div>"; }
  function row(href, ic, t, a, meta, end, off) {
    var inner = '<div class="ic' + (ic.num ? " num" : "") + '">' + (ic.num ? ic.num : icon(ic)) + "</div><div><div class=\"t\">" + esc(t) + '</div><div class="a" lang="ar">' + esc(a) + "</div>" + (meta ? '<div class="m">' + meta + "</div>" : "") + '</div><div class="end">' + (end || "") + (off ? "" : CHEV) + "</div>";
    return off ? '<div class="row off">' + inner + "</div>" : '<a class="row" href="' + href + '">' + inner + "</a>";
  }
  function setBack(href) { var b = document.getElementById("backBtn"); if (href) { b.hidden = false; b.href = href; } else b.hidden = true; }

  /* views */
  function vHome() {
    setBack(null);
    var t = allStats();
    var h = '<section class="welcome"><img src="assets/logo.jpg" alt="شعار شبكة تمريضيون التعليمية">' +
      '<h1 lang="ar" dir="rtl">شبكة تمريضيون التعليمية</h1><p class="en">Nursing\'s Educational Network</p>' +
      '<p class="lead">Full lectures in English and Arabic, with NCLEX-style quizzes for every topic of the evaluation exam syllabus.</p><p class="lead" lang="ar" dir="rtl">محاضرات كاملة بالإنكليزية والعربية مع أسئلة بنمط NCLEX لكل مواضيع منهاج الامتحان التقويمي.</p></section>' +
      '<div class="section-label">Choose a subject · اختر المادة</div><div class="rows">';
    NS.subjects.forEach(function (s) {
      var a = stats(s.id, s.theory.concat(s.practical));
      h += row("#/s/" + s.id, s.icon, s.en, s.ar, a.ready + " of " + a.n + " topics ready" + (a.q ? ", " + a.q + " questions" : ""), a.done ? '<span class="badge">' + a.done + " done</span>" : "");
    });
    h += "</div>";
    h += '<p class="muted" style="text-align:center;font-size:13px;margin-top:22px">' + t.ready + " topics and " + t.q + " questions so far. New topics are added regularly.</p>";
    return h;
  }
  function vSubject(sid) {
    var s = subj(sid); if (!s) return nf();
    setBack("#/");
    var th = stats(sid, s.theory), pr = stats(sid, s.practical);
    return crumbs([{ t: s.en }]) + head(s.en, s.ar, "Choose theoretical or practical content.") +
      '<div class="choice"><a href="#/s/' + sid + '/theory"><b>Theoretical</b><div class="a" lang="ar">النظري</div><div class="m">' + s.theory.length + " systems, " + th.n + " topics</div></a>" +
      '<a class="pr" href="#/s/' + sid + '/practical"><b>Practical</b><div class="a" lang="ar">العملي</div><div class="m">' + s.practical.length + " wards/areas, " + pr.n + " topics</div></a></div>";
  }
  function vSystems(sid, kind) {
    var s = subj(sid); if (!s || !s[kind]) return nf();
    setBack("#/s/" + sid);
    var k = kindName(kind);
    var h = crumbs([{ t: s.en, href: "#/s/" + sid }, { t: k.en }]) + head(s.en + ": " + k.en, s.ar + " — " + k.ar, kind === "practical" ? "Choose a ward or area." : "Choose a system.") + '<div class="rows">';
    s[kind].forEach(function (sy) {
      var a = stats(sid, [sy]);
      h += row("#/s/" + sid + "/" + kind + "/" + sy.id, sy.icon, sy.en, sy.ar, sy.topics.length + (sy.topics.length > 1 ? " topics" : " topic") + (a.ready < a.n ? (a.ready ? ", " + a.ready + " ready" : ", coming soon") : ""), a.done ? '<span class="badge">' + a.done + "/" + a.n + "</span>" : "");
    });
    return h + "</div>";
  }
  function vTopics(sid, kind, sysId) {
    var s = subj(sid), sy = s && sysOf(s, kind, sysId); if (!sy) return nf();
    setBack("#/s/" + sid + "/" + kind);
    var k = kindName(kind);
    var h = crumbs([{ t: s.en, href: "#/s/" + sid }, { t: k.en, href: "#/s/" + sid + "/" + kind }, { t: sy.en }]) + head(sy.en, sy.ar, "Choose a topic to open its lecture and quiz.") + '<div class="rows">';
    sy.topics.forEach(function (t, i) {
      var m = man(sid, sysId, t.id), p = prog[sid + "/" + sysId + "/" + t.id];
      var end = p ? '<span class="badge">' + p.best + "%</span>" : (m ? '<span class="badge gray">' + m.q + " Qs</span>" : "");
      h += row("#/s/" + sid + "/" + kind + "/" + sysId + "/" + t.id, { num: i + 1 }, t.en, t.ar, m ? "Lecture + " + m.q + " questions" : "Coming soon · قريباً", end, !m);
    });
    return h + "</div>";
  }

  /* blocks */
  function rB(b) {
    switch (b.t) {
      case "h3": return '<div class="blk"><h3>' + fmt(b.en) + (b.ar ? '<span class="ar-h" lang="ar">' + esc(b.ar) + "</span>" : "") + "</h3></div>";
      case "p": return '<div class="blk"><p>' + fmt(b.en) + "</p>" + arDiv(b.ar) + "</div>";
      case "list": return '<div class="blk"><ul class="bl">' + b.en.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" + (b.ar ? '<div class="ar" lang="ar" dir="rtl"><ul class="bl">' + b.ar.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>" : "") + "</div>";
      case "table": return '<div class="blk">' + tbl(b.h, b.r) + (b.ar ? '<div class="ar" lang="ar" dir="rtl" style="padding:6px">' + tbl(b.ar.h, b.ar.r) + "</div>" : "") + "</div>";
      case "cards": return '<div class="blk cards">' + b.items.map(function (c) { return '<div class="icard"><div class="ii">' + icon(c.i) + '</div><div class="t">' + fmt(c.en) + "</div>" + (c.d ? '<div class="d">' + fmt(c.d) + "</div>" : "") + arDiv(c.ar) + "</div>"; }).join("") + "</div>";
      case "tip": return '<div class="blk callout tip"><div class="lbl">Exam tip · نصيحة امتحانية</div><div>' + fmt(b.en) + "</div>" + arDiv(b.ar) + "</div>";
      case "warn": return '<div class="blk callout warn"><div class="lbl">Danger sign · علامة خطر</div><div>' + fmt(b.en) + "</div>" + arDiv(b.ar) + "</div>";
      case "mnem": return '<div class="blk mnem"><div class="hd"><span class="key">' + esc(b.k) + "</span>" + (b.title ? "<small>" + (typeof b.title === "object" ? esc(b.title.en || "") + (b.title.ar ? ' · <span lang="ar">' + esc(b.title.ar) + "</span>" : "") : esc(b.title)) + "</small>" : "") + "</div>" + b.rows.map(function (r) { return '<div class="row2"><b>' + esc(r[0]) + "</b><div>" + fmt(r[1]) + arDiv(r[2]) + "</div></div>"; }).join("") + "</div>";
      case "flow": return '<div class="blk flow">' + b.steps.map(function (s, i) { return (i ? '<div class="arr">' + DOWN + "</div>" : "") + '<div class="st">' + fmt(s.en) + arDiv(s.ar) + "</div>"; }).join("") + "</div>";
      case "cycle": return '<div class="blk cycle-wrap">' + cyc(b.steps.length, b.center) + '<ol class="cyc">' + b.steps.map(function (s) { return "<li>" + fmt(s.en) + arDiv(s.ar) + "</li>"; }).join("") + "</ol></div>";
      case "compare": return '<div class="blk compare" style="--n:' + b.cols.length + '">' + b.cols.map(function (c) {
        return '<div class="col"><h4>' + fmt(c.h.en) + (c.h.ar ? '<span class="ar-h" lang="ar">' + esc(c.h.ar) + "</span>" : "") + '</h4><div class="in"><ul class="bl">' + c.en.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" + (c.ar ? '<div class="ar" lang="ar" dir="rtl"><ul class="bl">' + c.ar.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>" : "") + "</div></div>";
      }).join("") + "</div>";
      case "svg": return '<figure class="blk fig">' + b.svg + (b.en ? "<figcaption>" + fmt(b.en) + (b.ar ? '<span class="ar" lang="ar" dir="rtl" style="text-align:center">' + esc(b.ar) + "</span>" : "") + "</figcaption>" : "") + "</figure>";
      case "img": return photo(b);
      default: return "";
    }
  }
  /* real photos: resolved in the reader's browser from Wikipedia/Wikimedia Commons, with author + license credit */
  var WCACHE = load("ns-wimg-v1", {});
  function wjson(u) { return fetch(u).then(function (r) { if (!r.ok) throw r.status; return r.json(); }); }
  function wresolve(title) {
    if (WCACHE[title] !== undefined) return Promise.resolve(WCACHE[title]);
    return wjson("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/ /g, "_"))).then(function (sm) {
      var img = (sm.originalimage || sm.thumbnail || {}).source || "";
      var m = img.match(/\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^\/]+)/);
      if (!m) return null;
      var file = decodeURIComponent(m[1]);
      return wjson("https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1280&titles=File:" + encodeURIComponent(file)).then(function (d) {
        var pg = d.query && d.query.pages, k = pg && Object.keys(pg)[0], ii = k && pg[k].imageinfo && pg[k].imageinfo[0];
        if (!ii) return null;
        var md = ii.extmetadata || {}, txt = function (x) { var e = document.createElement("div"); e.innerHTML = (md[x] && md[x].value) || ""; return (e.textContent || "").replace(/\s+/g, " ").trim(); };
        var lic = txt("LicenseShortName"); if (!lic || /fair use|non-free/i.test(lic)) return null;
        return { src: ii.thumburl || ii.url, full: ii.url, w: ii.thumbwidth || ii.width, h: ii.thumbheight || ii.height, by: txt("Artist").slice(0, 80) || "Wikimedia Commons", lic: lic, u: ii.descriptionurl, file: file };
      });
    }).then(function (r) { WCACHE[title] = r; save("ns-wimg-v1", WCACHE); return r; }, function () { return null; });
  }
  function hydratePhotos(root) {
    var seen = {};
    [].forEach.call(root.querySelectorAll("figure[data-wiki]"), function (fig) {
      wresolve(fig.getAttribute("data-wiki")).then(function (r) {
        if (!r || seen[r.file]) { fig.parentNode && fig.parentNode.removeChild(fig); return; }
        seen[r.file] = 1;
        var cap = fig.querySelector("figcaption");
        var a = document.createElement("a"); a.className = "ph-link"; a.href = r.full; a.target = "_blank"; a.rel = "noopener";
        var im = new Image(); im.loading = "lazy"; im.decoding = "async"; im.alt = fig.getAttribute("data-alt") || ""; if (r.w) { im.width = r.w; im.height = r.h; }
        im.onerror = function () { fig.parentNode && fig.parentNode.removeChild(fig); };
        im.src = r.src;
        a.appendChild(im); fig.replaceChild(a, fig.querySelector(".ph-wait"));
        var cr = document.createElement("span"); cr.className = "credit";
        cr.innerHTML = 'Image: <a href="' + esc(r.u) + '" target="_blank" rel="noopener">' + esc(r.by) + "</a> · " + esc(r.lic) + ' · <a href="' + esc(r.u) + '" target="_blank" rel="noopener">Wikimedia Commons</a>';
        cap.appendChild(cr); fig.classList.add("ready");
      });
    });
  }
  function photo(b) {
    if (b.w && !b.src) {
      return '<figure class="blk photo" data-wiki="' + esc(b.w) + '" data-alt="' + esc((b.en || "").replace(/\*\*/g, "")) + '"><div class="ph-wait"></div><figcaption>' + (b.en ? fmt(b.en) : "") + (b.ar ? '<span class="ar" lang="ar" dir="rtl">' + esc(b.ar) + "</span>" : "") + "</figcaption></figure>";
    }
    var cap = (b.en ? fmt(b.en) : "") + (b.ar ? '<span class="ar" lang="ar" dir="rtl">' + esc(b.ar) + "</span>" : "");
    var cr = '<span class="credit">Image: <a href="' + esc(b.u) + '" target="_blank" rel="noopener">' + esc(b.by || "Wikimedia Commons") + "</a>" + (b.lic ? " · " + esc(b.lic) : "") + ' · <a href="' + esc(b.u) + '" target="_blank" rel="noopener">source</a></span>';
    return '<figure class="blk photo"><a class="ph-link" href="' + esc(b.full || b.src) + '" target="_blank" rel="noopener"><img loading="lazy" decoding="async" src="' + esc(b.src) + '"' + (b.w ? ' width="' + b.w + '" height="' + b.h + '"' : "") + ' alt="' + esc((b.en || "").replace(/\*\*/g, "")) + '" onerror="this.closest(\'figure\').style.display=\'none\'"></a><figcaption>' + cap + cr + "</figcaption></figure>";
  }
  function tbl(hd, rows) {
    return '<div class="tbl-wrap"><table' + (hd.length >= 3 ? ' class="wide"' : "") + "><thead><tr>" + hd.map(function (x) { return "<th>" + fmt(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (x, i) { return '<td data-l="' + esc(String(hd[i] || "").replace(/\*\*/g, "")) + '">' + fmt(x) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function cyc(n, center) {
    var R = 95, c = 130, o = '<svg class="cycle-svg" viewBox="0 0 260 260" role="img" aria-label="cycle diagram"><circle class="ring" cx="130" cy="130" r="' + R + '"/>';
    for (var i = 0; i < n; i++) {
      var am = -Math.PI / 2 + i * 2 * Math.PI / n + Math.PI / n, x = c + R * Math.cos(am), y = c + R * Math.sin(am);
      o += '<path class="arrow" d="M-6,-5 L6,0 L-6,5 z" transform="translate(' + x.toFixed(1) + "," + y.toFixed(1) + ") rotate(" + (am * 180 / Math.PI).toFixed(1) + ')"/>';
    }
    for (var j = 0; j < n; j++) {
      var b = -Math.PI / 2 + j * 2 * Math.PI / n, X = c + R * Math.cos(b), Y = c + R * Math.sin(b);
      o += '<circle class="node" cx="' + X.toFixed(1) + '" cy="' + Y.toFixed(1) + '" r="17"/><text class="num" x="' + X.toFixed(1) + '" y="' + Y.toFixed(1) + '">' + (j + 1) + "</text>";
    }
    if (center) center.split("|").forEach(function (p, k, arr) { o += '<text class="ctr" x="130" y="' + (134 + (k - (arr.length - 1) / 2) * 17) + '">' + esc(p) + "</text>"; });
    return o + "</svg>";
  }

  /* lecture & quiz */
  function vTopic(sid, kind, sysId, tid, mode) {
    var s = subj(sid), sy = s && sysOf(s, kind, sysId); if (!sy) { $main.innerHTML = nf(); return; }
    var idx = -1; sy.topics.forEach(function (t, i) { if (t.id === tid) idx = i; });
    if (idx < 0) { $main.innerHTML = nf(); return; }
    var t = sy.topics[idx], base = "#/s/" + sid + "/" + kind + "/" + sysId;
    setBack(base);
    $main.innerHTML = '<div class="loading">Loading… جارِ التحميل</div>';
    loadTopic(sid, sysId, tid, function (d) {
      if (!d) { $main.innerHTML = crumbs([{ t: s.en, href: "#/s/" + sid }, { t: sy.en, href: base }]) + nf("This lecture is not ready yet · هذه المحاضرة غير جاهزة بعد"); return; }
      var k = kindName(kind), url = base + "/" + tid;
      var h = crumbs([{ t: s.en, href: "#/s/" + sid }, { t: k.en, href: "#/s/" + sid + "/" + kind }, { t: sy.en, href: base }]) + head(t.en, t.ar) +
        '<div class="lec-bar"><div class="seg" role="tablist"><a role="tab" href="' + url + '" aria-selected="' + (mode !== "quiz") + '">Lecture</a><a role="tab" href="' + url + '/quiz" aria-selected="' + (mode === "quiz") + '">Quiz (' + d.questions.length + ")</a></div>" +
        (mode !== "quiz" ? '<button class="switch" id="arSwitch" type="button" aria-pressed="' + arOn + '"><i></i>Arabic · عربي</button>' : "") + '</div><div id="pane"></div>';
      $main.innerHTML = h;
      var pane = document.getElementById("pane");
      d.key = sid + "/" + sysId + "/" + tid;
      if (mode === "quiz") quizSetup(pane, sid, sysId, tid, d);
      else {
        lecture(pane, d, url, sy, idx, base);
        document.getElementById("arSwitch").onclick = function () { arOn = !arOn; save("ns-ar", arOn); applyAr(); };
      }
    });
  }
  function lecture(pane, d, url, sy, idx, base) {
    var h = '<div class="article">';
    if (d.sections.length > 2) h += '<details class="toc"><summary>Contents · المحتويات (' + d.sections.length + ")</summary><ol>" + d.sections.map(function (sec, i) { return '<li><a href="javascript:void 0" data-jump="sec-' + i + '">' + esc(sec.h.en) + "</a></li>"; }).join("") + "</ol></details>";
    if (d.intro) h += '<div class="intro">' + fmt(d.intro.en) + arDiv(d.intro.ar) + "</div>";
    var imgs = (NS.img && NS.img[d.key]) || [];
    d.sections.forEach(function (sec, i) {
      var blocks = sec.b.filter(function (b) { return !(imgs.length && b.t === "svg"); }).slice();
      imgs.filter(function (m) { return m.s === i; }).forEach(function (m, k) {
        var at = m.at == null ? 1 + k : m.at; blocks.splice(Math.min(at, blocks.length), 0, Object.assign({ t: "img" }, m));
      });
      h += '<section class="sec" id="sec-' + i + '"><div class="sec-head"><h2>' + fmt(sec.h.en) + (sec.h.ar ? '<span class="ar-h" lang="ar">' + esc(sec.h.ar) + "</span>" : "") + '</h2><button class="ar-toggle" type="button" aria-pressed="false" data-ar="sec-' + i + '">عربي</button></div>' + blocks.map(rB).join("") + "</section>";
    });
    h += '<div class="quizcta"><div><b>Test yourself on this topic</b><div class="a">' + d.questions.length + ' NCLEX-style questions · اختبر نفسك</div></div><a class="btn light" href="' + url + '/quiz">Start quiz</a></div>';
    var prev = sy.topics[idx - 1], next = sy.topics[idx + 1];
    if (prev || next) h += '<nav class="nextnav">' + (prev ? '<a href="' + base + "/" + prev.id + '"><small>Previous topic</small><b>' + esc(prev.en) + "</b></a>" : "<span></span>") + (next ? '<a class="nx" href="' + base + "/" + next.id + '"><small>Next topic</small><b>' + esc(next.en) + "</b></a>" : "") + "</nav>";
    pane.innerHTML = h + "</div>";
    if (window.fetch) hydratePhotos(pane);
  }
  function normQ(q, i) { var a = Array.isArray(q.a) ? q.a : [q.a]; return { id: i, q: q.q, o: q.o, a: a, r: q.r, sata: !!q.s || a.length > 1, pr: !!q.p }; }
  function quizSetup(pane, sid, sys, tid, d) {
    var key = sid + "/" + sys + "/" + tid, p = prog[key], total = d.questions.length;
    var counts = [10, 20, 30].filter(function (c) { return c < total; }); counts.push(total);
    var sel = load("ns-qcount", 20); if (counts.indexOf(sel) < 0) sel = counts[Math.min(1, counts.length - 1)];
    var sata = d.questions.filter(function (q) { return q.s; }).length, pri = d.questions.filter(function (q) { return q.p; }).length;
    var h = '<div class="panel"><div style="font-weight:700;font-size:18px;color:var(--ink)">NCLEX-style quiz</div>' +
      '<div style="color:var(--muted);font-size:14px">' + total + " questions, including " + sata + " select-all-that-apply and " + pri + " priority questions.</div>" +
      '<div style="margin-top:14px;font-weight:600">How many questions?</div><div class="seg" id="cnt" style="margin-top:6px">' + counts.map(function (c) { return '<button type="button" data-c="' + c + '" aria-pressed="' + (c === sel) + '">' + (c === total ? "All " + c : c) + "</button>"; }).join("") + "</div>" +
      (p ? '<div class="qtags" style="margin-top:14px"><span class="badge">Best ' + p.best + '%</span><span class="badge gray">Last ' + p.last + "%</span>" + (p.missed && p.missed.length ? '<span class="badge red">' + p.missed.length + " to review</span>" : "") + "</div>" : "") +
      '<div class="btn-row"><button class="btn" id="go">Start quiz</button>' + (p && p.missed && p.missed.length ? '<button class="btn ghost" id="gm">Retry missed (' + p.missed.length + ")</button>" : "") + "</div>" +
      '<p style="color:var(--muted);font-size:13px;margin:12px 0 0">Select-all-that-apply questions count as correct only when you choose every right answer and nothing else, like the real NCLEX.</p></div>';
    pane.innerHTML = h;
    pane.querySelectorAll("#cnt button").forEach(function (b) { b.onclick = function () { sel = +b.dataset.c; save("ns-qcount", sel); pane.querySelectorAll("#cnt button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); }; });
    var all = d.questions.map(normQ);
    document.getElementById("go").onclick = function () { run(pane, key, d, shuffle(all).slice(0, sel)); };
    var gm = document.getElementById("gm"); if (gm) gm.onclick = function () { run(pane, key, d, shuffle(all.filter(function (q) { return p.missed.indexOf(q.id) >= 0; }))); };
  }
  function run(pane, key, d, qs) {
    var i = 0, res = [];
    function show() {
      var q = qs[i], order = shuffle(q.o.map(function (_, k) { return k; })), picked = [], answered = false;
      pane.innerHTML = '<div class="panel"><div class="qhead"><span>Question ' + (i + 1) + " of " + qs.length + "</span><span>" + res.filter(function (r) { return r.ok; }).length + ' correct</span></div><div class="qbar"><i style="width:' + (100 * i / qs.length) + '%"></i></div>' +
        '<div class="qtags">' + (q.sata ? '<span class="badge gold">Select all that apply</span>' : '<span class="badge gray">Choose one answer</span>') + (q.pr ? '<span class="badge red">Priority</span>' : "") + "</div>" +
        '<div class="qtext">' + fmt(q.q) + '</div><div class="options">' + order.map(function (k, n) { return '<button type="button" class="opt' + (q.sata ? " sata" : "") + '" aria-pressed="false" data-k="' + k + '"><span class="k">' + String.fromCharCode(65 + n) + "</span><span>" + fmt(q.o[k]) + "</span></button>"; }).join("") +
        '</div><div id="fb"></div><div class="btn-row"><button class="btn" id="sub" disabled>Check answer</button><button class="btn ghost" id="quit">End quiz</button></div></div>';
      window.scrollTo({ top: 0 });
      var opts = pane.querySelectorAll(".opt"), sub = document.getElementById("sub");
      opts.forEach(function (b) { b.onclick = function () { if (answered) return; var k = +b.dataset.k; if (q.sata) { var at = picked.indexOf(k); if (at >= 0) picked.splice(at, 1); else picked.push(k); } else picked = [k]; opts.forEach(function (x) { x.setAttribute("aria-pressed", String(picked.indexOf(+x.dataset.k) >= 0)); }); sub.disabled = !picked.length; }; });
      sub.onclick = function () {
        if (!answered) {
          answered = true;
          var ok = picked.length === q.a.length && picked.every(function (k) { return q.a.indexOf(k) >= 0; });
          res.push({ q: q, picked: picked.slice(), ok: ok });
          opts.forEach(function (x) { var k = +x.dataset.k, c = q.a.indexOf(k) >= 0, p = picked.indexOf(k) >= 0; x.disabled = true; if (c && p) x.classList.add("correct"); else if (p) x.classList.add("wrong"); else if (c) x.classList.add("correct", "missed"); });
          document.getElementById("fb").innerHTML = '<div class="feedback ' + (ok ? "ok" : "no") + '"><div class="v">' + (ok ? "Correct · إجابة صحيحة" : "Incorrect · إجابة خاطئة") + '</div><div style="margin-top:6px"><b>Rationale:</b> ' + fmt(q.r) + "</div></div>";
          sub.textContent = i + 1 < qs.length ? "Next question" : "See my score";
        } else { i++; if (i < qs.length) show(); else finish(); }
      };
      document.getElementById("quit").onclick = function () { if (res.length) finish(); else quizSetup(pane, key.split("/")[0], key.split("/")[1], key.split("/")[2], d); };
    }
    function finish() {
      var n = res.length, c = res.filter(function (r) { return r.ok; }).length, pct = n ? Math.round(100 * c / n) : 0;
      var old = prog[key] || { best: 0, attempts: 0, missed: [] }, missed = (old.missed || []).slice();
      res.forEach(function (r) { var at = missed.indexOf(r.q.id); if (r.ok && at >= 0) missed.splice(at, 1); if (!r.ok && at < 0) missed.push(r.q.id); });
      setProg(key, { best: Math.max(old.best || 0, pct), last: pct, attempts: (old.attempts || 0) + 1, missed: missed, t: Date.now() });
      var C = 2 * Math.PI * 60, col = pct >= 75 ? "var(--green)" : pct >= 50 ? "var(--gold)" : "var(--red)";
      var msg = pct >= 85 ? "Excellent — you're exam-ready on this topic." : pct >= 65 ? "Good. Read the rationales of the questions you missed." : "Re-read the lecture, then retry the questions you missed.";
      var h = '<div class="panel result"><svg class="ring" viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="60"/><circle class="fg" cx="75" cy="75" r="60" style="stroke:' + col + ";stroke-dasharray:" + C + ";stroke-dashoffset:" + C * (1 - pct / 100) + '"/><text x="75" y="75">' + pct + "%</text></svg>" +
        '<div style="font-weight:700;font-size:18px;color:var(--ink)">' + c + " of " + n + " correct</div><div>" + msg + '</div><div class="btn-row" style="justify-content:center"><button class="btn" id="again">New quiz</button>' + (missed.length ? '<button class="btn ghost" id="rm">Retry missed (' + missed.length + ")</button>" : "") + "</div></div>";
      var wrong = res.filter(function (r) { return !r.ok; });
      if (wrong.length) h += '<div class="section-label">Review your mistakes · راجع أخطاءك</div><div class="review">' + wrong.map(function (r) {
        return '<div class="panel"><div style="font-weight:600;color:var(--ink)">' + fmt(r.q.q) + '</div><div class="ans"><span class="g">Correct:</span> ' + r.q.a.map(function (k) { return fmt(r.q.o[k]); }).join("; ") + '</div><div class="ans"><span class="r">You chose:</span> ' + r.picked.map(function (k) { return fmt(r.q.o[k]); }).join("; ") + '</div><div class="ans"><b>Why:</b> ' + fmt(r.q.r) + "</div></div>";
      }).join("") + "</div>";
      pane.innerHTML = h; window.scrollTo({ top: 0 });
      var ks = key.split("/");
      document.getElementById("again").onclick = function () { quizSetup(pane, ks[0], ks[1], ks[2], d); };
      var rm = document.getElementById("rm"); if (rm) rm.onclick = function () { var all = d.questions.map(normQ); run(pane, key, d, shuffle(all.filter(function (q) { return missed.indexOf(q.id) >= 0; }))); };
    }
    if (!qs.length) return; show();
  }

  function vProgress() {
    setBack("#/");
    var h = head("My progress", "تقدّمي", "Best scores from quizzes on this device."), any = false;
    NS.subjects.forEach(function (s) {
      var rows = "";
      ["theory", "practical"].forEach(function (kind) { s[kind].forEach(function (sy) { sy.topics.forEach(function (t) {
        var p = prog[s.id + "/" + sy.id + "/" + t.id]; if (!p) return; any = true;
        rows += row("#/s/" + s.id + "/" + kind + "/" + sy.id + "/" + t.id + "/quiz", { num: p.best + "%" }, t.en, t.ar, sy.en + ", last " + p.last + "%" + (p.missed && p.missed.length ? ", " + p.missed.length + " to review" : ""), p.best < 70 ? '<span class="badge red">Review</span>' : "");
      }); }); });
      if (rows) h += '<div class="section-label">' + esc(s.en) + " · " + esc(s.ar) + '</div><div class="rows">' + rows + "</div>";
    });
    if (!any) return h + '<div class="panel empty"><p>No quizzes taken yet. Open a topic and start its quiz.</p><a class="btn" href="#/">Browse subjects</a></div>';
    return h + '<div style="text-align:center;margin-top:20px"><button class="btn ghost" id="reset">Reset all progress</button></div>';
  }
  function nf(m) { return '<div class="panel empty"><p>' + esc(m || "Page not found · الصفحة غير موجودة") + '</p><a class="btn" href="#/">Go to home</a></div>'; }

  /* router */
  function route() {
    var p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean), h = null;
    if (!p.length) h = vHome();
    else if (p[0] === "progress") h = vProgress();
    else if (p[0] === "s" && p.length === 2) h = vSubject(p[1]);
    else if (p[0] === "s" && p.length === 3) h = vSystems(p[1], p[2]);
    else if (p[0] === "s" && p.length === 4) h = vTopics(p[1], p[2], p[3]);
    else if (p[0] === "s" && p.length >= 5) { vTopic(p[1], p[2], p[3], p[4], p[5]); window.scrollTo(0, 0); return; }
    else h = nf();
    $main.innerHTML = h; window.scrollTo(0, 0);
    var r = document.getElementById("reset"); if (r) r.onclick = function () { if (confirm("Delete all saved scores on this device?")) { prog = {}; save("ns-progress2", prog); route(); } };
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-ar]");
    if (t) { var sec = document.getElementById(t.dataset.ar), on = !sec.classList.contains("ar-open"); sec.classList.toggle("ar-open", on); t.setAttribute("aria-pressed", String(on)); return; }
    var j = e.target.closest("[data-jump]");
    if (j) { e.preventDefault(); var el = document.getElementById(j.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); }
  });
  window.addEventListener("hashchange", route);
  // Telegram Mini Apps open the page with "#tgWebAppData=..." in the address — treat any non-route hash as home
  if (location.hash && !/^#\//.test(location.hash)) {
    try { history.replaceState(null, "", location.pathname + location.search + "#/"); } catch (e) { location.hash = "#/"; }
  }
  route();
})();
