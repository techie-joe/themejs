/*! For license information please see theme_v1.0.js.LICENSE.txt */
( () => {
  "use strict";
  ( (e="") => {
      const t = window
        , r = document
        , a = r.documentElement || r.body
        , s = e => typeof e
        , n = e => Object.prototype.toString.call(e)
        , o = null
        , c = ""
        , m = s(c)
        , l = n([])
        , i = e => s(e) === m
        , d = Array.isArray || (e => n(e) === l)
        , h = e => {
          throw "Fail to " + e
      }
        , g = (e, t, r, a) => {
          e.addEventListener(t, r, a)
      }
        , u = (e, t) => new RegExp(e,t)
        , p = (e, t, r) => {
          try {
              const a = " "
                , s = "|"
                , n = "g"
                , o = u("[\\.\\|\\s]+", n)
                , m = (e, t=s) => e.trim().replace(o, t).trim()
                , l = r ? m(r, a) : c
                , i = t ? m([t, l].join(a)).trim() : c
                , d = u("(^|\\s+)(" + i + ")(\\s*(" + i + "))*(\\s+|$)", n)
                , h = e.className.replace(d, a).trim() + (l.length ? a + l : c);
              return e.className = h,
              e
          } catch (e) {
              h("updateClass")
          }
      }
        , v = (e, t, r) => {
          e.setAttribute(t, r)
      }
        , y = ( () => {
          const {localStorage: e} = t
            , r = t => {
              t ? e.removeItem(t) : h("remove " + t)
          }
          ;
          return {
              set: (t, a) => {
                  t ? i(a) ? e.setItem(t, a) : r(t) : h("set " + t)
              }
              ,
              get: t => t ? e.getItem(t) : (h("get " + t),
              o),
              remove: r
          }
      }
      )();
      ( () => {
          const s = "theme"
            , n = "themes"
            , m = "_dark"
            , l = "color-scheme"
            , h = (N = ( () => {
              var e = r.getElementById("_color_scheme");
              if (!e) {
                  var t = r.getElementsByName(l);
                  d(t) && (e = t[t.length - 1])
              }
              if (!e) {
                  e = r.createElement("meta");
                  var a = [["name", l]];
                  for (var s in a)
                      v(e, a[s][0], a[s][1]);
                  r.head && r.head.appendChild(e)
              }
              return e
          }
          )(),
          {
              set: e => {
                  N && v(N, "content", e)
              }
          })
            , u = (e, t) => {
              var r = I || c;
              d(e) && (x = e,
              y.set(n, JSON.stringify(x)),
              e = x[i(t) ? x.indexOf(t || c) : 0]),
              I = i(e) && e || c,
              p(a, r, I),
              E(I),
              y.set(s, I)
          }
            , f = () => {
              u(x[x.indexOf(I || c) + 1] || c)
          }
            , b = () => {
              x = [m];
              var e = I || c;
              I = O.matches ? m : c,
              p(a, e, I),
              E(I),
              y.remove(s),
              y.remove(n)
          }
            , E = e => {
              e && "_d" === e.substring(0, 2) ? h.set("dark") : h.set("light")
          }
            , O = t.matchMedia("(prefers-color-scheme: dark)");
          var N, j;
          if (j = t.location.hostname,
          e.indexOf(btoa(j).substring(0, 5)) >= 0) {
              var k = (e => {
                  try {
                      return e && JSON.parse(e)
                  } catch (t) {
                      console.error("Fail to parse stored themes: " + e)
                  }
                  return o
              }
              )(y.get(n))
                , w = y.get(s)
                , x = k || [m]
                , I = i(w) ? w : O.matches ? m : c;
              p(a, o, I),
              E(I),
              g(O, "change", (e => {
                  e.matches ? u(m) : u()
              }
              )),
              g(t, "keyup", (e => {
                  e.altKey && "KeyT" === e.code && f()
              }
              )),
              t.theme = {
                  reset: b,
                  set: u,
                  change: f,
                  list: () => x,
                  current: () => I,
                  fn: {
                      updateClass: p,
                      storage: y
                  }
              }
          }
      }
      )()
  }
  )("bG9jY dGVja dGhlb cHJld")
}
)();