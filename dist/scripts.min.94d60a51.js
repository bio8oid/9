// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/autoprefixer/node_modules/postcss/docs/api/assets/scripts.min.js":[function(require,module,exports) {
var define;
parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) try {
    f(t[c]);
  } catch (e) {
    i || (i = e);
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "SyYu": [function (require, module, exports) {
    var define;
    var A;
    !function (e, t) {
      "use strict";

      "function" == typeof A && A.amd ? A([], t) : "object" == typeof module && module.exports ? module.exports = t() : (e.AnchorJS = t(), e.anchors = new e.AnchorJS());
    }(this, function () {
      "use strict";

      return function (A) {
        function e(A) {
          A.icon = A.hasOwnProperty("icon") ? A.icon : "", A.visible = A.hasOwnProperty("visible") ? A.visible : "hover", A.placement = A.hasOwnProperty("placement") ? A.placement : "right", A.ariaLabel = A.hasOwnProperty("ariaLabel") ? A.ariaLabel : "Anchor", A.class = A.hasOwnProperty("class") ? A.class : "", A.base = A.hasOwnProperty("base") ? A.base : "", A.truncate = A.hasOwnProperty("truncate") ? Math.floor(A.truncate) : 64, A.titleText = A.hasOwnProperty("titleText") ? A.titleText : "";
        }

        function t(A) {
          var e;
          if ("string" == typeof A || A instanceof String) e = [].slice.call(document.querySelectorAll(A));else {
            if (!(Array.isArray(A) || A instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
            e = [].slice.call(A);
          }
          return e;
        }

        this.options = A || {}, this.elements = [], e(this.options), this.isTouchDevice = function () {
          return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
        }, this.add = function (A) {
          var i,
              n,
              o,
              s,
              a,
              r,
              c,
              h,
              l,
              u,
              d,
              p,
              w = [];
          if (e(this.options), "touch" === (d = this.options.visible) && (d = this.isTouchDevice() ? "always" : "hover"), A || (A = "h2, h3, h4, h5, h6"), 0 === (i = t(A)).length) return this;

          for (function () {
            if (null === document.head.querySelector("style.anchorjs")) {
              var A,
                  e = document.createElement("style");
              e.className = "anchorjs", e.appendChild(document.createTextNode("")), void 0 === (A = document.head.querySelector('[rel="stylesheet"], style')) ? document.head.appendChild(e) : document.head.insertBefore(e, A), e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length), e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length), e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length), e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length);
            }
          }(), n = document.querySelectorAll("[id]"), o = [].map.call(n, function (A) {
            return A.id;
          }), a = 0; a < i.length; a++) if (this.hasAnchorJSLink(i[a])) w.push(a);else {
            if (i[a].hasAttribute("id")) s = i[a].getAttribute("id");else if (i[a].hasAttribute("data-anchor-id")) s = i[a].getAttribute("data-anchor-id");else {
              l = h = this.urlify(i[a].textContent), c = 0;

              do {
                void 0 !== r && (l = h + "-" + c), r = o.indexOf(l), c += 1;
              } while (-1 !== r);

              r = void 0, o.push(l), i[a].setAttribute("id", l), s = l;
            }
            s.replace(/-/g, " "), (u = document.createElement("a")).className = "anchorjs-link " + this.options.class, u.setAttribute("aria-label", this.options.ariaLabel), u.setAttribute("data-anchorjs-icon", this.options.icon), this.options.titleText && (u.title = this.options.titleText), p = document.querySelector("base") ? window.location.pathname + window.location.search : "", p = this.options.base || p, u.href = p + "#" + s, "always" === d && (u.style.opacity = "1"), "" === this.options.icon && (u.style.font = "1em/1 anchorjs-icons", "left" === this.options.placement && (u.style.lineHeight = "inherit")), "left" === this.options.placement ? (u.style.position = "absolute", u.style.marginLeft = "-1em", u.style.paddingRight = "0.5em", i[a].insertBefore(u, i[a].firstChild)) : (u.style.paddingLeft = "0.375em", i[a].appendChild(u));
          }

          for (a = 0; a < w.length; a++) i.splice(w[a] - a, 1);

          return this.elements = this.elements.concat(i), this;
        }, this.remove = function (A) {
          for (var e, i, n = t(A), o = 0; o < n.length; o++) (i = n[o].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(n[o])) && this.elements.splice(e, 1), n[o].removeChild(i));

          return this;
        }, this.removeAll = function () {
          this.remove(this.elements);
        }, this.urlify = function (A) {
          return this.options.truncate || e(this.options), A.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase();
        }, this.hasAnchorJSLink = function (A) {
          var e = A.firstChild && (" " + A.firstChild.className + " ").indexOf(" anchorjs-link ") > -1,
              t = A.lastChild && (" " + A.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
          return e || t || !1;
        };
      };
    });
  }, {}],
  "S+Fx": [function (require, module, exports) {
    var e = require("anchor-js"),
        t = new e();

    t.options.placement = "left", t.add("h3");
    var n = document.getElementById("toc").getElementsByTagName("a");
    document.getElementById("filter-input").addEventListener("keyup", function (e) {
      var t, s, i;
      if (13 === e.keyCode) for (t = 0; t < n.length; t++) if (!(s = n[t]).classList.contains("display-none")) return location.replace(s.firstChild.href), e.preventDefault();

      var a = function () {
        return !0;
      },
          o = this.value.toLowerCase();

      for (o.match(/^\s*$/) || (a = function (e) {
        var t = e.firstChild.innerHTML || e.textContent;
        return t && -1 !== t.toLowerCase().indexOf(o);
      }), t = 0; t < n.length; t++) s = n[t], i = Array.from(s.getElementsByTagName("a")), a(s) || i.some(a) ? s.classList.remove("display-none") : s.classList.add("display-none");
    });

    for (var s = document.getElementsByClassName("toggle-sibling"), i = 0; i < s.length; i++) s[i].addEventListener("click", a);

    function a() {
      var e = this.nextElementSibling,
          t = this.getElementsByClassName("icon")[0],
          n = "display-none";
      e.classList.contains(n) ? (e.classList.remove(n), t.innerHTML = "▾") : (e.classList.add(n), t.innerHTML = "▸");
    }

    function o(e) {
      if (e) {
        var t = document.getElementById(e);
        t && 0 === t.offsetHeight && t.parentNode.parentNode.classList.contains("display-none") && t.parentNode.parentNode.classList.remove("display-none");
      }
    }

    function r(e) {
      if (e && !history.state) {
        var t = document.getElementById(e);
        t && t.scrollIntoView();
      }
    }

    function l() {
      o(location.hash.substring(1)), r(location.hash.substring(1));
    }

    window.addEventListener("hashchange", l), l();

    for (var d = document.getElementsByClassName("pre-open"), c = 0; c < d.length; c++) d[c].addEventListener("mousedown", u, !1);

    function u() {
      o(this.hash.substring(1));
    }

    function m() {
      history.replaceState({}, document.title);
    }

    function f(e) {
      e && history.replaceState(e.state, document.title);
    }

    window.addEventListener("load", function () {
      setTimeout(function () {
        f(), m();
      }, 1);
    }), window.addEventListener("popstate", f);
  }, {
    "anchor-js": "SyYu"
  }],
  "249i": [function (require, module, exports) {
    require("./site");
  }, {
    "./site": "S+Fx"
  }]
}, {}, ["249i"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65204" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/autoprefixer/node_modules/postcss/docs/api/assets/scripts.min.js"], null)
//# sourceMappingURL=/scripts.min.94d60a51.js.map