// Validates every topic file and writes data/manifest.js
// Usage: node tools/build.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/registry.js"), "utf8"), ctx);
const NS = ctx.NS;
const types = new Set(["h3", "p", "list", "table", "cards", "tip", "warn", "mnem", "flow", "cycle", "compare", "svg"]);
const SS = [], SQ = [];
const plainTxt = (x) => String(x || "").replace(/\*\*|==|__/g, "").replace(/[\u064B-\u0652\u0640]/g, "").replace(/\s+/g, " ").trim();
const gather = (o, out) => { if (o == null) return out; if (typeof o === "string") { out.push(o); return out; } if (Array.isArray(o)) { o.forEach(x => gather(x, out)); return out; } if (typeof o === "object") for (const k of Object.keys(o)) { if (k === "t" || k === "svg" || k === "i") continue; gather(o[k], out); } return out; };
const manifest = {}; let errors = 0, totalQ = 0, totalT = 0, words = 0;
const err = (w, m) => { errors++; console.log("✗ " + w + ": " + m); };
const countWords = (s) => (String(s || "").match(/[A-Za-z]+/g) || []).length;
for (const s of NS.subjects) for (const kind of ["theory", "practical"]) for (const sy of s[kind]) for (const t of sy.topics) {
  const f = path.join(root, "data", s.id, sy.id, t.id + ".js");
  if (!fs.existsSync(f)) continue;
  const w = s.id + "/" + sy.id + "/" + t.id;
  try { vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }); } catch (e) { err(w, "syntax/runtime " + e.message); continue; }
  const d = NS.data[s.id] && NS.data[s.id][sy.id] && NS.data[s.id][sy.id][t.id];
  if (!d) { err(w, "file did not register (check NS.reg ids)"); continue; }
  let wc = countWords(d.intro && d.intro.en);
  (d.sections || []).forEach((sec, i) => {
    if (!sec.h || !sec.h.en || !sec.h.ar) err(w, "section " + i + " heading en/ar");
    (sec.b || []).forEach((b, j) => {
      const at = w + " s" + i + "b" + j + "(" + b.t + ")";
      if (!types.has(b.t)) err(at, "unknown block type");
      if (["p", "tip", "warn"].includes(b.t) && (!b.en || !b.ar)) err(at, "missing en/ar");
      if (b.t === "list" && (!Array.isArray(b.en) || !Array.isArray(b.ar) || b.en.length !== b.ar.length)) err(at, "list en/ar arrays (lengths " + (b.en || []).length + "/" + (b.ar || []).length + ")");
      if (b.t === "table") { if (!b.h || !b.r) err(at, "table h/r"); else b.r.forEach((r, k) => { if (r.length !== b.h.length) err(at, "row " + k + " has " + r.length + " cells, header " + b.h.length); }); if (b.ar) b.ar.r.forEach((r, k) => { if (r.length !== b.ar.h.length) err(at, "ar row " + k); }); if (!b.ar) err(at, "table missing ar"); }
      if ((b.t === "flow" || b.t === "cycle") && !(b.steps || []).every(x => x.en && x.ar)) err(at, "steps en/ar");
      if (b.t === "cards" && !(b.items || []).every(x => x.en && x.ar && x.i)) err(at, "cards need i/en/ar");
      if (b.t === "compare" && !(b.cols || []).every(c => c.h && c.en && c.ar)) err(at, "compare cols");
      if (b.t === "mnem" && !(b.rows || []).length) err(at, "mnem rows");
      wc += countWords(JSON.stringify(b.en || "")) + countWords(JSON.stringify(b.r || "")) + countWords(JSON.stringify(b.items || "")) + countWords(JSON.stringify(b.steps || "")) + countWords(JSON.stringify(b.rows || "")) + countWords(JSON.stringify(b.cols || ""));
    });
  });
  const qs = d.questions || [], seen = new Set();
  qs.forEach((q, i) => {
    const at = w + " Q" + (i + 1), a = Array.isArray(q.a) ? q.a : [q.a];
    if (!q.q || !Array.isArray(q.o) || q.o.length < 4) err(at, "needs q and ≥4 options");
    if (!q.r || q.r.length < 25) err(at, "rationale missing/short");
    if (!a.length || a.some(k => typeof k !== "number" || k < 0 || k >= q.o.length)) err(at, "bad answer index");
    if (new Set(a).size !== a.length) err(at, "duplicate answer index");
    if (q.s && a.length < 2) err(at, "SATA with <2 answers");
    if (!q.s && a.length > 1) err(at, "multiple answers but not flagged SATA");
    if (new Set(q.o).size !== q.o.length) err(at, "duplicate options");
    const key = q.q.trim().toLowerCase(); if (seen.has(key)) err(at, "duplicate question"); seen.add(key);
    if (/all of the above|none of the above/i.test(q.o.join("|"))) err(at, "avoid all/none of the above");
  });
  if (qs.length < 30) err(w, "only " + qs.length + " questions (target 30–50)");
  manifest[s.id] = manifest[s.id] || {}; manifest[s.id][sy.id] = manifest[s.id][sy.id] || {};
  manifest[s.id][sy.id][t.id] = { q: qs.length, s: (d.sections || []).length };
  if (d.intro) SS.push([w, -1, "Introduction", "المقدمة", plainTxt(gather(d.intro, []).join(" "))]);
  (d.sections || []).forEach((sec, i) => SS.push([w, i, plainTxt(sec.h.en), plainTxt(sec.h.ar), plainTxt(gather(sec.b, []).join(" · "))]));
  qs.forEach((q, i) => SQ.push([w, i, plainTxt(q.q), q.o.map(plainTxt), Array.isArray(q.a) ? q.a : [q.a], plainTxt(q.r)]));
  totalQ += qs.length; totalT++; words += wc;
  console.log("✓ " + w.padEnd(40) + " sections=" + String(d.sections.length).padStart(2) + "  EN words≈" + String(wc).padStart(5) + "  Qs=" + qs.length + "  SATA=" + qs.filter(q => q.s).length + "  priority=" + qs.filter(q => q.p).length);
}
const ver = Date.now().toString(36);
fs.writeFileSync(path.join(root, "data/manifest.js"), "/* generated by tools/build.js — do not edit */\nNS.version = \"" + ver + "\";\nNS.manifest = " + JSON.stringify(manifest) + ";\n");
fs.writeFileSync(path.join(root, "data/search.js"), "/* generated by tools/build.js — search index */\nNS.search = " + JSON.stringify({ s: SS, q: SQ }) + ";\n");
// stamp index.html so browsers fetch the fresh manifest/app/style after every build
const idx = path.join(root, "index.html");
fs.writeFileSync(idx, fs.readFileSync(idx, "utf8").replace(/(manifest\.js|app\.js|style\.css|sw\.js)\?v=[\w]+/g, "$1?v=" + ver));
console.log("\nTopics: " + totalT + "   Questions: " + totalQ + "   EN words≈" + words + (errors ? "\n" + errors + " ERRORS" : "\nNo errors"));
process.exit(errors ? 1 : 0);
