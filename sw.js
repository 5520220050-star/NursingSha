/* شبكة تمريضيون التعليمية — offline support
   Site files: network first (always fresh when online), saved copy when offline.
   Pictures and fonts from other sites: saved after first view (limited number). */
var SITE = "ns-site-v1", MEDIA = "ns-media-v1", MEDIA_MAX = 150;
var CORE = ["./", "index.html", "data/registry.js", "assets/logo.jpg", "assets/logo-256.jpg", "assets/favicon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(SITE).then(function (c) { return c.addAll(CORE); }).catch(function () {}).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== SITE && k !== MEDIA; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// one cache entry per file, whatever its ?v= version
function siteKey(url) { var u = new URL(url); u.search = ""; u.hash = ""; if (/\/$/.test(u.pathname)) u.pathname += "index.html"; return u.href; }

function trim(cache) {
  return cache.keys().then(function (ks) { if (ks.length > MEDIA_MAX) return Promise.all(ks.slice(0, ks.length - MEDIA_MAX).map(function (k) { return cache.delete(k); })); });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  if (url.origin === self.location.origin) {
    var key = req.mode === "navigate" ? siteKey(new URL("index.html", self.registration.scope).href) : siteKey(req.url);
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(SITE).then(function (c) { c.put(key, copy); }); }
        return res;
      }).catch(function () {
        return caches.open(SITE).then(function (c) { return c.match(key); }).then(function (hit) {
          return hit || new Response("Offline — this file is not saved yet.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
        });
      })
    );
    return;
  }

  // pictures and fonts from other sites: use saved copy if we have it, otherwise fetch and keep it
  if (req.destination === "image" || req.destination === "font" || url.hostname === "fonts.googleapis.com") {
    e.respondWith(caches.open(MEDIA).then(function (c) {
      return c.match(req).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res && (res.ok || res.type === "opaque")) { c.put(req, res.clone()).then(function () { return trim(c); }).catch(function () {}); }
          return res;
        });
      });
    }));
  }
});
