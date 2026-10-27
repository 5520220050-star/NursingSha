/* ===== شبكة تمريضيون التعليمية — app ===== */
(function () {
  "use strict";
  var $main = document.getElementById("main");
  var MAN = NS.manifest || {};

  /* ---------- storage (safe) ---------- */
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var prog = load("ns-progress", {});
  function setProg(key, obj) { prog[key] = obj; save("ns-progress", prog); }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/==(.+?)==/g, "<mark>$1</mark>").replace(/__(.+?)__/g, "<i>$1</i>");
  }
  function h(tag, attrs, html) {
    var a = "";
    for (var k in attrs || {}) if (attrs[k] != null && attrs[k] !== false) a += " " + k + '="' + esc(attrs[k]) + '"';
    return "<" + tag + a + ">" + (html || "") + "</" + tag + ">";
  }
  function arDiv(txt, cls) { return txt ? '<div class="ar ' + (cls || "") + '" lang="ar" dir="rtl">' + fmt(txt) + "</div>" : ""; }
  function subj(id) { for (var i = 0; i < NS.subjects.length; i++) if (NS.subjects[i].id === id) return NS.subjects[i]; return null; }
  function unitMeta(s, uid) {
    var all = s.theory.concat(s.practical);
    for (var i = 0; i < all.length; i++) if (all[i].id === uid) return { u: all[i], kind: i < s.theory.length ? "theory" : "practical", idx: i < s.theory.length ? i : i - s.theory.length };
    return null;
  }
  function man(sid, uid) { return (MAN[sid] && MAN[sid][uid]) || null; }
  function toast(msg) { var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- icons ---------- */
  var IC = {
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3.5 12h4l2-3 3 6 2-3h6"/>',
    micro: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    baby: '<circle cx="12" cy="9" r="6"/><path d="M9.5 9h.01M14.5 9h.01M10 12a3 3 0 0 0 4 0M8 21c0-2.2 1.8-4 4-4s4 1.8 4 4M12 3c1 0 1.5.7 1.5 1.5"/>',
    mother: '<circle cx="9" cy="5" r="2.5"/><path d="M6.5 21v-6l-2-2 2.5-5h4l1 3a4.5 4.5 0 1 1 0 9h-1v1"/><circle cx="15.5" cy="15" r="2"/>',
    people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="8" r="2.5"/><path d="M16 14a5 5 0 0 1 5 5v2"/>',
    mind: '<path d="M12 4a4 4 0 0 0-7.5 2A4 4 0 0 0 4 13a4 4 0 0 0 4 6h1V4.5M12 4a4 4 0 0 1 7.5 2 4 4 0 0 1 .5 7 4 4 0 0 1-4 6h-1"/><path d="M12 4v16M9 9H7M15 9h2M9 14H7M15 14h2"/>',
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
    syringe: '<path d="M18 2l4 4M17 7l3-3M19 9l-8.7 8.7a2 2 0 0 1-2.8 0l-1.2-1.2a2 2 0 0 1 0-2.8L15 5M9 11l4 4M5 19l-3 3"/>',
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
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-3a2 2 0 0 0-4 0"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (IC[n] || IC.book) + "</svg>"; }
  var ARROW = '<svg viewBox="0 0 24 24"><path d="M12 4v16M6 14l6 6 6-6"/></svg>';

  /* ---------- theme & language ---------- */
  var root = document.documentElement;
  var theme = load("ns-theme", "auto");
  function applyTheme() { root.setAttribute("data-theme", theme); }
  applyTheme();
  document.getElementById("themeBtn").onclick = function () {
    var dark = theme === "dark" || (theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    theme = dark ? "light" : "dark"; save("ns-theme", theme); applyTheme();
  };
  var langBtn = document.getElementById("langBtn");
  var arOn = load("ns-ar", false);
  function applyLang() { document.body.classList.toggle("ar-on", arOn); langBtn.setAttribute("aria-pressed", String(arOn)); langBtn.textContent = arOn ? "English" : "عربي"; }
  applyLang();
  langBtn.onclick = function () { arOn = !arOn; save("ns-ar", arOn); applyLang(); toast(arOn ? "الشرح العربي ظاهر في كل الأقسام" : "Arabic hidden — tap عربي on any section to show it"); };

  /* ---------- lazy data loading ---------- */
  var loading = {};
  function loadUnit(sid, uid, cb) {
    if (NS.data[sid] && NS.data[sid][uid]) return cb(NS.data[sid][uid]);
    var key = sid + "/" + uid;
    if (loading[key]) { loading[key].push(cb); return; }
    loading[key] = [cb];
    var s = document.createElement("script");
    s.src = "data/" + sid + "/" + uid + ".js?v=" + (NS.version || "1");
    s.onload = function () { var d = NS.data[sid] && NS.data[sid][uid]; loading[key].forEach(function (f) { f(d || null); }); delete loading[key]; };
    s.onerror = function () { loading[key].forEach(function (f) { f(null); }); delete loading[key]; };
    document.head.appendChild(s);
  }

  /* ---------- stats ---------- */
  function totals() {
    var q = 0, u = 0;
    for (var s in MAN) for (var k in MAN[s]) { q += MAN[s][k].q || 0; u++; }
    return { q: q, u: u };
  }
  function subjProgress(s) {
    var all = s.theory.concat(s.practical), done = 0, sum = 0, n = 0;
    all.forEach(function (u) { var p = prog[s.id + "/" + u.id]; if (p) { done++; sum += p.best; n++; } });
    return { done: done, total: all.length, avg: n ? Math.round(sum / n) : null };
  }

  /* ---------- views ---------- */
  function viewHome() {
    var t = totals();
    var html = '<section class="hero">' +
      '<img class="hero-logo" src="assets/logo.jpg" alt="شعار شبكة تمريضيون التعليمية">' +
      '<div style="position:relative;z-index:1">' +
      '<div class="chip" style="background:rgba(201,162,74,.2);color:#f0cd7c;border-color:rgba(201,162,74,.5)">الامتحان التقويمي · Evaluation Exam</div>' +
      '<h1 lang="ar" dir="rtl" style="text-align:left">شبكة تمريضيون التعليمية</h1>' +
      '<p class="en-sub">Nursing\'s Educational Network</p>' +
      '<p class="lead">Bilingual explanations with diagrams, plus medium-to-hard NCLEX-style quizzes for the unified syllabus of Iraqi nursing colleges — theoretical and practical.</p>' +
      '<p class="lead" lang="ar" dir="rtl" style="text-align:left">شرح ثنائي اللغة مع مخططات، وأسئلة بنمط NCLEX لكل مواضيع المنهاج الموحد — النظري والعملي.</p>' +
      '<div class="stats"><div class="stat"><b>6</b><span>Subjects · مواد</span></div><div class="stat"><b>' + t.u + '</b><span>Topics ready · مواضيع</span></div><div class="stat"><b>' + t.q + '</b><span>NCLEX Questions · سؤال</span></div></div>' +
      "</div></section>";
    html += '<div class="section-title"><h2>Subjects</h2><span class="ar-h">المواد الدراسية</span></div><div class="grid">';
    NS.subjects.forEach(function (s) {
      var p = subjProgress(s), ready = MAN[s.id] ? Object.keys(MAN[s.id]).length : 0;
      var qn = 0; for (var k in MAN[s.id] || {}) qn += MAN[s.id][k].q;
      html += '<a class="card subj" href="#/s/' + s.id + '"><div class="subj-ico">' + icon(s.icon) + "</div><div>" +
        "<h3>" + esc(s.en) + '</h3><div class="ar-name" lang="ar">' + esc(s.ar) + "</div>" +
        '<div class="chips"><span class="chip">' + s.theory.length + " theory · نظري</span><span class=\"chip green\">" + s.practical.length + " practical · عملي</span>" +
        (qn ? '<span class="chip blue">' + qn + " Qs</span>" : "") + "</div>" +
        '<div class="bar" title="Topics attempted"><i style="width:' + Math.round(100 * p.done / p.total) + '%"></i></div>' +
        '<div class="muted" style="font-size:12px;margin-top:4px">' + (ready < s.theory.length + s.practical.length ? ready + "/" + (s.theory.length + s.practical.length) + " topics ready · " : "") + p.done + " attempted" + (p.avg != null ? " · avg best " + p.avg + "%" : "") + "</div>" +
        "</div></a>";
    });
    html += "</div>";
    html += '<div class="section-title"><h2>How to study</h2><span class="ar-h">طريقة الدراسة</span></div>' +
      '<div class="grid three">' +
      tipCard("book", "Learn", "Read each topic. Tap عربي on any section for the Arabic explanation.", "اقرأ الموضوع واضغط «عربي» لإظهار الشرح العربي") +
      tipCard("target", "Quiz", "NCLEX-style: single-best, priority and select-all-that-apply. Full rationale after every answer.", "أسئلة NCLEX: الإجابة الأفضل، الأولوية، واختر كل ما ينطبق مع التعليل") +
      tipCard("check", "Track", "Best scores and missed questions are saved on your device. Retry only the ones you missed.", "تُحفظ نتائجك والأسئلة الخاطئة على جهازك لتعيدها") +
      "</div>";
    return html;
  }
  function tipCard(ic, t, en, ar) {
    return '<div class="card icard" style="box-shadow:none"><div class="u-ico">' + icon(ic) + '</div><div class="t">' + t + '</div><div class="d">' + en + '</div><div class="d" lang="ar" dir="rtl" style="text-align:right;margin-top:4px">' + ar + "</div></div>";
  }

  function viewSubject(sid, tab) {
    var s = subj(sid); if (!s) return notFound();
    tab = tab === "practical" ? "practical" : "theory";
    var list = s[tab];
    var html = '<nav class="crumbs"><a href="#/">Home</a> › <span>' + esc(s.en) + "</span></nav>" +
      '<div class="page-head"><h1>' + esc(s.en) + '</h1><div class="ar-title" lang="ar">' + esc(s.ar) + "</div></div>" +
      '<div class="tabs" role="tablist">' +
      '<button role="tab" aria-selected="' + (tab === "theory") + '" data-go="#/s/' + sid + '">Theoretical<small>النظري · ' + s.theory.length + "</small></button>" +
      '<button role="tab" aria-selected="' + (tab === "practical") + '" data-go="#/s/' + sid + '/tab/practical">Practical<small>العملي · ' + s.practical.length + "</small></button></div>" +
      '<div class="units">';
    list.forEach(function (u, i) {
      var m = man(sid, u.id), p = prog[sid + "/" + u.id];
      var inner = '<div class="u-num">' + (tab === "practical" ? "P" + (i + 1) : i + 1) + "</div><div><h3>" + esc(u.en) + '</h3><div class="ar-name" lang="ar">' + esc(u.ar) + "</div>" +
        (u.note ? '<div class="note">' + esc(u.note.en) + "</div>" : "") +
        '<div class="chips" style="margin-top:6px">' + (m ? '<span class="chip">' + m.s + ' sections</span><span class="chip blue">' + m.q + " Qs</span>" : '<span class="chip">Coming soon · قريباً</span>') + "</div></div>" +
        '<div class="score">' + (p ? "<b>" + p.best + "%</b>best" : "") + "</div>";
      html += m ? '<a class="card unit" href="#/s/' + sid + "/" + u.id + '">' + inner + "</a>" : '<div class="card unit soon">' + inner + "</div>";
    });
    return html + "</div>";
  }

  /* ---------- content blocks ---------- */
  function rBlock(b) {
    switch (b.t) {
      case "p": return '<div class="blk"><p>' + fmt(b.en) + "</p>" + arDiv(b.ar) + "</div>";
      case "list": return '<div class="blk"><ul class="bl">' + b.en.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" +
        (b.ar ? '<div class="ar" lang="ar" dir="rtl"><ul class="bl">' + b.ar.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>" : "") + "</div>";
      case "table": return '<div class="blk">' + tbl(b.h, b.r) + (b.ar ? '<div class="ar" lang="ar" dir="rtl" style="padding:6px">' + tbl(b.ar.h, b.ar.r) + "</div>" : "") + (b.cap ? '<div class="muted" style="font-size:13px;margin-top:4px">' + fmt(b.cap) + "</div>" : "") + "</div>";
      case "cards": return '<div class="blk cards">' + b.items.map(function (c) {
        return '<div class="icard"><div class="u-ico">' + icon(c.i) + '</div><div class="t">' + fmt(c.en) + "</div>" + (c.d ? '<div class="d">' + fmt(c.d) + "</div>" : "") + arDiv(c.ar) + "</div>";
      }).join("") + "</div>";
      case "tip": return '<div class="blk callout tip"><div class="ci">★</div><div><div class="lbl">Exam pearl · نصيحة امتحانية</div><div>' + fmt(b.en) + "</div>" + arDiv(b.ar) + "</div></div>";
      case "warn": return '<div class="blk callout warn"><div class="ci">!</div><div><div class="lbl">Red flag · علامة خطر</div><div>' + fmt(b.en) + "</div>" + arDiv(b.ar) + "</div></div>";
      case "mnem": return '<div class="blk mnem"><div class="lbl">Mnemonic · طريقة حفظ' + (b.title ? " — " + esc(b.title) : "") + '</div><div class="key">' + esc(b.k) + "</div>" +
        b.rows.map(function (r) { return '<div class="row"><b>' + esc(r[0]) + "</b><div>" + fmt(r[1]) + (r[2] ? arDiv(r[2]) : "") + "</div></div>"; }).join("") + "</div>";
      case "flow": return '<div class="blk flow' + (b.h ? " h" : "") + '">' + b.steps.map(function (s, i) {
        return (i ? '<div class="arr">' + ARROW + "</div>" : "") + '<div class="st">' + fmt(s.en) + arDiv(s.ar) + "</div>";
      }).join("") + "</div>";
      case "cycle": return '<div class="blk cycle-wrap">' + cycleSvg(b.steps.length, b.center) + '<ol class="cyc">' + b.steps.map(function (s) { return "<li>" + fmt(s.en) + arDiv(s.ar) + "</li>"; }).join("") + "</ol></div>";
      case "compare": return '<div class="blk compare" style="--n:' + b.cols.length + '">' + b.cols.map(function (c) {
        return '<div class="col"><h4>' + fmt(c.h.en) + (c.h.ar ? '<span class="ar-h">' + esc(c.h.ar) + "</span>" : "") + '</h4><div class="in"><ul class="bl">' + c.en.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" +
          (c.ar ? '<div class="ar" lang="ar" dir="rtl"><ul class="bl">' + c.ar.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>" : "") + "</div></div>";
      }).join("") + "</div>";
      case "svg": return '<figure class="blk fig">' + b.svg + (b.en ? "<figcaption>" + fmt(b.en) + (b.ar ? '<span class="ar" lang="ar" dir="rtl" style="text-align:center">' + esc(b.ar) + "</span>" : "") + "</figcaption>" : "") + "</figure>";
      default: return "";
    }
  }
  function tbl(hd, rows) {
    return '<div class="tbl-wrap"><table><thead><tr>' + hd.map(function (x) { return "<th>" + fmt(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (x) { return "<td>" + fmt(x) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function cycleSvg(n, center) {
    var R = 110, cx = 150, cy = 150, out = '<svg class="cycle-svg" viewBox="0 0 300 300" role="img" aria-label="cycle diagram"><circle class="ring" cx="150" cy="150" r="' + R + '"/>';
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / n, am = a + Math.PI / n;
      var ax = cx + R * Math.cos(am), ay = cy + R * Math.sin(am), deg = am * 180 / Math.PI + 90;
      out += '<path class="arrow" d="M-6,-5 L6,0 L-6,5 z" transform="translate(' + ax.toFixed(1) + "," + ay.toFixed(1) + ") rotate(" + (deg - 90).toFixed(1) + ')"/>';
    }
    for (var j = 0; j < n; j++) {
      var b = -Math.PI / 2 + j * 2 * Math.PI / n, x = cx + R * Math.cos(b), y = cy + R * Math.sin(b);
      out += '<circle class="node" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="19"/><text class="num" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '">' + (j + 1) + "</text>";
    }
    if (center) { var parts = center.split("|"); parts.forEach(function (p, k) { out += '<text class="ctr" x="150" y="' + (150 + (k - (parts.length - 1) / 2) * 17) + '">' + esc(p) + "</text>"; }); }
    return out + "</svg>";
  }

  function viewUnit(sid, uid, tab) {
    var s = subj(sid), m = s && unitMeta(s, uid);
    if (!m) return notFound();
    $main.innerHTML = '<div class="loading">Loading… جارِ التحميل</div>';
    loadUnit(sid, uid, function (d) {
      if (!d) { $main.innerHTML = notFound("This topic isn't ready yet · هذا الموضوع غير جاهز بعد"); return; }
      tab = tab === "quiz" ? "quiz" : "learn";
      var base = "#/s/" + sid + "/" + uid;
      var head = '<nav class="crumbs"><a href="#/">Home</a> › <a href="#/s/' + sid + (m.kind === "practical" ? "/tab/practical" : "") + '">' + esc(s.en) + "</a> › <span>" + (m.kind === "practical" ? "Practical" : "Theory") + "</span></nav>" +
        '<div class="page-head"><h1>' + esc(m.u.en) + '</h1><div class="ar-title" lang="ar">' + esc(m.u.ar) + "</div></div>" +
        '<div class="tabs" role="tablist"><button role="tab" aria-selected="' + (tab === "learn") + '" data-go="' + base + '">Learn<small>الشرح</small></button>' +
        '<button role="tab" aria-selected="' + (tab === "quiz") + '" data-go="' + base + '/quiz">Quiz · ' + d.questions.length + '<small>الأسئلة</small></button></div><div id="pane"></div>';
      $main.innerHTML = head;
      var pane = document.getElementById("pane");
      if (tab === "learn") renderLearn(pane, d, base); else renderQuizSetup(pane, sid, uid, d);
    });
  }

  function renderLearn(pane, d, base) {
    var html = "";
    if (d.sections.length > 2) html += '<div class="toc">' + d.sections.map(function (sec, i) { return '<a href="javascript:void 0" data-jump="sec-' + i + '">' + esc(sec.h.en) + "</a>"; }).join("") + "</div>";
    if (d.summary) html += '<div class="card summary"><p style="margin:0">' + fmt(d.summary.en) + "</p>" + arDiv(d.summary.ar) + "</div>";
    d.sections.forEach(function (sec, i) {
      html += '<section class="card sec" id="sec-' + i + '"><div class="sec-head"><h2>' + fmt(sec.h.en) + (sec.h.ar ? '<span class="ar-h">' + esc(sec.h.ar) + "</span>" : "") + "</h2>" +
        '<button class="ar-toggle" type="button" aria-pressed="false" data-ar="sec-' + i + '">عربي</button></div>' + sec.b.map(rBlock).join("") + "</section>";
    });
    html += '<div class="card" style="margin-top:16px;text-align:center"><div style="font-weight:700;font-size:17px">Ready to test yourself?</div><div class="muted" lang="ar" dir="rtl">هل أنت جاهز لاختبار نفسك؟</div><div class="btn-row" style="justify-content:center"><a class="btn" href="' + base + '/quiz">Start the quiz · ' + d.questions.length + " Qs</a></div></div>";
    pane.innerHTML = html;
  }

  /* ---------- quiz ---------- */
  function normQ(q, i) {
    var a = Array.isArray(q.a) ? q.a : [q.a];
    return { id: i, q: q.q, o: q.o, a: a, r: q.r, ra: q.ra, sata: !!q.s || a.length > 1, pr: !!q.p };
  }
  function renderQuizSetup(pane, sid, uid, d) {
    var key = sid + "/" + uid, p = prog[key], total = d.questions.length;
    var counts = [10, 20, 30].filter(function (c) { return c < total; }); counts.push(total);
    var sel = load("ns-qcount", 20); if (counts.indexOf(sel) < 0) sel = counts[Math.min(1, counts.length - 1)];
    var sataN = d.questions.filter(function (q) { return q.s || (Array.isArray(q.a) && q.a.length > 1); }).length;
    var prN = d.questions.filter(function (q) { return q.p; }).length;
    var html = '<div class="card qsetup"><div style="font-weight:700;font-size:18px">NCLEX-style practice</div>' +
      '<div class="muted" style="font-size:14px">' + total + " questions · " + sataN + " select-all-that-apply · " + prN + " priority · medium–hard</div>" +
      '<div class="muted" lang="ar" dir="rtl" style="font-size:14px;text-align:right">' + total + " سؤال · " + sataN + " اختر كل ما ينطبق · " + prN + " أولوية</div>" +
      '<div style="margin-top:12px;font-weight:600">Number of questions</div><div class="opts"><div class="seg" id="cnt">' +
      counts.map(function (c) { return '<button type="button" data-c="' + c + '" aria-pressed="' + (c === sel) + '">' + (c === total ? "All " + c : c) + "</button>"; }).join("") + "</div></div>" +
      (p ? '<div class="chips" style="margin-bottom:6px"><span class="chip green">Best ' + p.best + '%</span><span class="chip">Last ' + p.last + '%</span><span class="chip">' + p.attempts + " attempt" + (p.attempts > 1 ? "s" : "") + "</span>" + (p.missed && p.missed.length ? '<span class="chip red">' + p.missed.length + " to review</span>" : "") + "</div>" : "") +
      '<div class="btn-row"><button class="btn" id="go">Start quiz</button>' + (p && p.missed && p.missed.length ? '<button class="btn ghost" id="goMissed">Retry missed (' + p.missed.length + ")</button>" : "") + "</div>" +
      '<p class="muted" style="font-size:13px;margin:12px 0 0">SATA questions are scored like the NCLEX: all correct options and no wrong ones. · أسئلة «اختر كل ما ينطبق» تُحسب صحيحة فقط إذا اخترت كل الإجابات الصحيحة ولا شيء غيرها.</p></div>';
    pane.innerHTML = html;
    pane.querySelectorAll("#cnt button").forEach(function (b) {
      b.onclick = function () { sel = +b.dataset.c; save("ns-qcount", sel); pane.querySelectorAll("#cnt button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); };
    });
    var all = d.questions.map(normQ);
    document.getElementById("go").onclick = function () { runQuiz(pane, sid, uid, d, shuffle(all).slice(0, sel)); };
    var gm = document.getElementById("goMissed");
    if (gm) gm.onclick = function () { runQuiz(pane, sid, uid, d, shuffle(all.filter(function (q) { return p.missed.indexOf(q.id) >= 0; })), true); };
  }

  function runQuiz(pane, sid, uid, d, qs, missedMode) {
    var i = 0, results = [];
    function show() {
      var q = qs[i], order = shuffle(q.o.map(function (_, k) { return k; })), picked = [];
      var html = '<div class="card"><div class="qhead"><span>Question ' + (i + 1) + " of " + qs.length + "</span><span>" + results.filter(function (r) { return r.ok; }).length + " correct</span></div>" +
        '<div class="qbar"><i style="width:' + (100 * i / qs.length) + '%"></i></div>' +
        '<div class="chips">' + (q.sata ? '<span class="chip blue qtype">Select all that apply</span>' : '<span class="chip qtype">Single best answer</span>') + (q.pr ? '<span class="chip red qtype">Priority</span>' : "") + "</div>" +
        '<div class="qtext">' + fmt(q.q) + '</div><div class="options">' +
        order.map(function (k, n) { return '<button type="button" class="opt' + (q.sata ? " sata" : "") + '" aria-pressed="false" data-k="' + k + '"><span class="k">' + String.fromCharCode(65 + n) + "</span><span>" + fmt(q.o[k]) + "</span></button>"; }).join("") +
        '</div><div id="fb"></div><div class="btn-row"><button class="btn" id="submit" disabled>Submit answer</button><button class="btn ghost" id="quit">End quiz</button></div></div>';
      pane.innerHTML = html;
      window.scrollTo({ top: pane.offsetTop - 120 });
      var opts = pane.querySelectorAll(".opt"), sub = document.getElementById("submit"), answered = false;
      opts.forEach(function (b) {
        b.onclick = function () {
          if (answered) return;
          var k = +b.dataset.k;
          if (q.sata) { var at = picked.indexOf(k); if (at >= 0) picked.splice(at, 1); else picked.push(k); }
          else picked = [k];
          opts.forEach(function (x) { x.setAttribute("aria-pressed", String(picked.indexOf(+x.dataset.k) >= 0)); });
          sub.disabled = !picked.length;
        };
      });
      sub.onclick = function () {
        if (!answered) {
          answered = true;
          var ok = picked.length === q.a.length && picked.every(function (k) { return q.a.indexOf(k) >= 0; });
          results.push({ q: q, picked: picked.slice(), ok: ok });
          opts.forEach(function (x) {
            var k = +x.dataset.k, isC = q.a.indexOf(k) >= 0, isP = picked.indexOf(k) >= 0;
            x.disabled = true;
            if (isC && isP) x.classList.add("correct"); else if (isP) x.classList.add("wrong"); else if (isC) x.classList.add("correct", "missed");
          });
          document.getElementById("fb").innerHTML = '<div class="feedback ' + (ok ? "ok" : "no") + '"><div class="verdict">' + (ok ? "✓ Correct · إجابة صحيحة" : "✗ Incorrect · إجابة خاطئة") + "</div>" +
            '<div class="why"><b>Rationale:</b> ' + fmt(q.r) + "</div>" + (q.ra ? '<div class="ar" lang="ar" dir="rtl" style="display:block;margin-top:8px">' + fmt(q.ra) + "</div>" : "") + "</div>";
          sub.textContent = i + 1 < qs.length ? "Next question →" : "See results";
        } else { i++; if (i < qs.length) show(); else finish(); }
      };
      document.getElementById("quit").onclick = function () { if (results.length) finish(); else renderQuizSetup(pane, sid, uid, d); };
    }
    function finish() {
      var n = results.length, c = results.filter(function (r) { return r.ok; }).length, pct = n ? Math.round(100 * c / n) : 0;
      var key = sid + "/" + uid, old = prog[key] || { best: 0, attempts: 0, missed: [] };
      var missed = (old.missed || []).slice();
      results.forEach(function (r) { var at = missed.indexOf(r.q.id); if (r.ok && at >= 0) missed.splice(at, 1); if (!r.ok && at < 0) missed.push(r.q.id); });
      setProg(key, { best: Math.max(old.best || 0, pct), last: pct, attempts: (old.attempts || 0) + 1, missed: missed, t: Date.now() });
      var C = 2 * Math.PI * 60, col = pct >= 75 ? "var(--green)" : pct >= 50 ? "var(--gold)" : "var(--red)";
      var msg = pct >= 85 ? ["Excellent! Exam-ready on this topic.", "ممتاز! أنت جاهز في هذا الموضوع"] : pct >= 65 ? ["Good — review the missed rationales below.", "جيد — راجع تعليل الأسئلة الخاطئة"] : ["Keep going — re-read the Learn tab, then retry the missed ones.", "استمر — أعد قراءة الشرح ثم أعد الأسئلة الخاطئة"];
      var html = '<div class="card result"><svg class="ring" viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="60"/><circle class="fg" cx="75" cy="75" r="60" style="stroke:' + col + ";stroke-dasharray:" + C + ";stroke-dashoffset:" + (C * (1 - pct / 100)) + '"/><text x="75" y="75">' + pct + "%</text></svg>" +
        '<div style="font-weight:700;font-size:18px">' + c + " / " + n + " correct</div><div>" + msg[0] + '</div><div class="muted" lang="ar" dir="rtl">' + msg[1] + "</div>" +
        '<div class="btn-row" style="justify-content:center"><button class="btn" id="again">New quiz</button>' + (missed.length ? '<button class="btn ghost" id="rm">Retry missed (' + missed.length + ")</button>" : "") + '<a class="btn ghost" href="#/s/' + sid + "/" + uid + '">Back to Learn</a></div></div>';
      var wrong = results.filter(function (r) { return !r.ok; });
      if (wrong.length) {
        html += '<div class="section-title"><h2>Review your mistakes</h2><span class="ar-h">راجع أخطاءك</span></div><div class="review">' + wrong.map(function (r) {
          return '<div class="card"><div style="font-weight:600">' + fmt(r.q.q) + '</div><div class="ans"><span class="g">Correct:</span> ' + r.q.a.map(function (k) { return fmt(r.q.o[k]); }).join(" · ") +
            '</div><div class="ans"><span class="r">You chose:</span> ' + r.picked.map(function (k) { return fmt(r.q.o[k]); }).join(" · ") + '</div><div class="ans"><b>Why:</b> ' + fmt(r.q.r) + "</div></div>";
        }).join("") + "</div>";
      }
      pane.innerHTML = html;
      window.scrollTo({ top: 0 });
      document.getElementById("again").onclick = function () { renderQuizSetup(pane, sid, uid, d); };
      var rm = document.getElementById("rm");
      if (rm) rm.onclick = function () { var all = d.questions.map(normQ); runQuiz(pane, sid, uid, d, shuffle(all.filter(function (q) { return missed.indexOf(q.id) >= 0; })), true); };
    }
    if (!qs.length) { renderQuizSetup(pane, sid, uid, d); return; }
    show();
  }

  function viewProgress() {
    var html = '<div class="page-head"><h1>My progress</h1><div class="ar-title" lang="ar">تقدّمي</div></div>';
    var any = false, weak = [];
    NS.subjects.forEach(function (s) {
      var rows = "";
      s.theory.concat(s.practical).forEach(function (u) {
        var p = prog[s.id + "/" + u.id]; if (!p) return; any = true;
        if (p.best < 70) weak.push({ s: s, u: u, p: p });
        rows += '<a class="card unit" href="#/s/' + s.id + "/" + u.id + '/quiz" style="box-shadow:none"><div class="u-num" style="font-size:14px">' + p.best + '%</div><div><h3>' + esc(u.en) + '</h3><div class="note">Last ' + p.last + "% · " + p.attempts + " attempts" + (p.missed && p.missed.length ? " · " + p.missed.length + " to review" : "") + '</div><div class="bar"><i style="width:' + p.best + '%"></i></div></div><div></div></a>';
      });
      if (rows) html += '<div class="section-title"><h2 style="font-size:19px">' + esc(s.en) + '</h2><span class="ar-h">' + esc(s.ar) + '</span></div><div class="units">' + rows + "</div>";
    });
    if (!any) return html + '<div class="card empty">' + icon("target") + "<p>No quizzes taken yet. Pick a subject and start!</p><p lang=\"ar\" dir=\"rtl\">لم تحل أي اختبار بعد. اختر مادة وابدأ!</p><a class=\"btn\" href=\"#/\">Browse subjects</a></div>";
    if (weak.length) html = html.replace('</div>', '</div><div class="card callout warn" style="margin-bottom:10px"><div class="ci">!</div><div><b>Focus topics (best &lt; 70%):</b> ' + weak.map(function (w) { return '<a href="#/s/' + w.s.id + "/" + w.u.id + '">' + esc(w.u.en) + "</a>"; }).join(", ") + "</div></div>");
    html += '<div style="text-align:center;margin-top:18px"><button class="btn ghost" id="reset">Reset all progress</button></div>';
    return html;
  }
  function notFound(msg) { return '<div class="card empty">' + icon("alert") + "<p>" + esc(msg || "Page not found · الصفحة غير موجودة") + '</p><a class="btn" href="#/">Home</a></div>'; }

  /* ---------- router ---------- */
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var html = null;
    if (!parts.length) html = viewHome();
    else if (parts[0] === "progress") html = viewProgress();
    else if (parts[0] === "s" && parts.length === 2) html = viewSubject(parts[1]);
    else if (parts[0] === "s" && parts[2] === "tab") html = viewSubject(parts[1], parts[3]);
    else if (parts[0] === "s" && parts.length >= 3) { viewUnit(parts[1], parts[2], parts[3]); window.scrollTo(0, 0); return; }
    else html = notFound();
    $main.innerHTML = html;
    window.scrollTo(0, 0);
    var r = document.getElementById("reset");
    if (r) r.onclick = function () { if (confirm("Delete all saved scores on this device?")) { prog = {}; save("ns-progress", prog); route(); } };
  }
  document.addEventListener("click", function (e) {
    var g = e.target.closest("[data-go]");
    if (g) { location.hash = g.dataset.go; return; }
    var t = e.target.closest("[data-ar]");
    if (t) { var sec = document.getElementById(t.dataset.ar); var on = !sec.classList.contains("ar-open"); sec.classList.toggle("ar-open", on); t.setAttribute("aria-pressed", String(on)); return; }
    var j = e.target.closest("[data-jump]");
    if (j) { e.preventDefault(); var el = document.getElementById(j.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); }
  });
  window.addEventListener("hashchange", route);
  route();
})();
