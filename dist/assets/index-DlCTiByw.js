(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function u(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = l(s);
    fetch(s.href, c);
  }
})();
function zf(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var hc = { exports: {} },
  jr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qg;
function iS() {
  if (Qg) return jr;
  Qg = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function l(u, s, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      c = {};
      for (var h in s) h !== "key" && (c[h] = s[h]);
    } else c = s;
    return (
      (s = c.ref),
      { $$typeof: i, type: u, key: d, ref: s !== void 0 ? s : null, props: c }
    );
  }
  return ((jr.Fragment = a), (jr.jsx = l), (jr.jsxs = l), jr);
}
var Yg;
function aS() {
  return (Yg || ((Yg = 1), (hc.exports = iS())), hc.exports);
}
var b = aS(),
  mc = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg;
function rS() {
  if (Gg) return me;
  Gg = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function C(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (w && _[w]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    x = {};
  function Q(_, N, ee) {
    ((this.props = _),
      (this.context = N),
      (this.refs = x),
      (this.updater = ee || S));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (_, N) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, _, N, "setState");
    }),
    (Q.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    }));
  function M() {}
  M.prototype = Q.prototype;
  function V(_, N, ee) {
    ((this.props = _),
      (this.context = N),
      (this.refs = x),
      (this.updater = ee || S));
  }
  var D = (V.prototype = new M());
  ((D.constructor = V), R(D, Q.prototype), (D.isPureReactComponent = !0));
  var Z = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    G = Object.prototype.hasOwnProperty;
  function J(_, N, ee, te, re, he) {
    return (
      (ee = he.ref),
      {
        $$typeof: i,
        type: _,
        key: N,
        ref: ee !== void 0 ? ee : null,
        props: he,
      }
    );
  }
  function z(_, N) {
    return J(_.type, N, void 0, void 0, void 0, _.props);
  }
  function P(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === i;
  }
  function K(_) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (ee) {
        return N[ee];
      })
    );
  }
  var j = /\/+/g;
  function W(_, N) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? K("" + _.key)
      : N.toString(36);
  }
  function ie() {}
  function ne(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (
          (typeof _.status == "string"
            ? _.then(ie, ie)
            : ((_.status = "pending"),
              _.then(
                function (N) {
                  _.status === "pending" &&
                    ((_.status = "fulfilled"), (_.value = N));
                },
                function (N) {
                  _.status === "pending" &&
                    ((_.status = "rejected"), (_.reason = N));
                },
              )),
          _.status)
        ) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function de(_, N, ee, te, re) {
    var he = typeof _;
    (he === "undefined" || he === "boolean") && (_ = null);
    var ue = !1;
    if (_ === null) ue = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case i:
            case a:
              ue = !0;
              break;
            case y:
              return ((ue = _._init), de(ue(_._payload), N, ee, te, re));
          }
      }
    if (ue)
      return (
        (re = re(_)),
        (ue = te === "" ? "." + W(_, 0) : te),
        Z(re)
          ? ((ee = ""),
            ue != null && (ee = ue.replace(j, "$&/") + "/"),
            de(re, N, ee, "", function (lt) {
              return lt;
            }))
          : re != null &&
            (P(re) &&
              (re = z(
                re,
                ee +
                  (re.key == null || (_ && _.key === re.key)
                    ? ""
                    : ("" + re.key).replace(j, "$&/") + "/") +
                  ue,
              )),
            N.push(re)),
        1
      );
    ue = 0;
    var Ue = te === "" ? "." : te + ":";
    if (Z(_))
      for (var Ee = 0; Ee < _.length; Ee++)
        ((te = _[Ee]), (he = Ue + W(te, Ee)), (ue += de(te, N, ee, he, re)));
    else if (((Ee = C(_)), typeof Ee == "function"))
      for (_ = Ee.call(_), Ee = 0; !(te = _.next()).done; )
        ((te = te.value),
          (he = Ue + W(te, Ee++)),
          (ue += de(te, N, ee, he, re)));
    else if (he === "object") {
      if (typeof _.then == "function") return de(ne(_), N, ee, te, re);
      throw (
        (N = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ue;
  }
  function B(_, N, ee) {
    if (_ == null) return _;
    var te = [],
      re = 0;
    return (
      de(_, te, "", "", function (he) {
        return N.call(ee, he, re++);
      }),
      te
    );
  }
  function F(_) {
    if (_._status === -1) {
      var N = _._result;
      ((N = N()),
        N.then(
          function (ee) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = ee));
          },
          function (ee) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = ee));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = N)));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ae =
    typeof reportError == "function"
      ? reportError
      : function (_) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == "object" &&
                _ !== null &&
                typeof _.message == "string"
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        };
  function ve() {}
  return (
    (me.Children = {
      map: B,
      forEach: function (_, N, ee) {
        B(
          _,
          function () {
            N.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (_) {
        var N = 0;
        return (
          B(_, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (_) {
        return (
          B(_, function (N) {
            return N;
          }) || []
        );
      },
      only: function (_) {
        if (!P(_))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return _;
      },
    }),
    (me.Component = Q),
    (me.Fragment = l),
    (me.Profiler = s),
    (me.PureComponent = V),
    (me.StrictMode = u),
    (me.Suspense = m),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (_) {
        return $.H.useMemoCache(_);
      },
    }),
    (me.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (me.cloneElement = function (_, N, ee) {
      if (_ == null)
        throw Error(
          "The argument must be a React element, but you passed " + _ + ".",
        );
      var te = R({}, _.props),
        re = _.key,
        he = void 0;
      if (N != null)
        for (ue in (N.ref !== void 0 && (he = void 0),
        N.key !== void 0 && (re = "" + N.key),
        N))
          !G.call(N, ue) ||
            ue === "key" ||
            ue === "__self" ||
            ue === "__source" ||
            (ue === "ref" && N.ref === void 0) ||
            (te[ue] = N[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) te.children = ee;
      else if (1 < ue) {
        for (var Ue = Array(ue), Ee = 0; Ee < ue; Ee++)
          Ue[Ee] = arguments[Ee + 2];
        te.children = Ue;
      }
      return J(_.type, re, void 0, void 0, he, te);
    }),
    (me.createContext = function (_) {
      return (
        (_ = {
          $$typeof: d,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: c, _context: _ }),
        _
      );
    }),
    (me.createElement = function (_, N, ee) {
      var te,
        re = {},
        he = null;
      if (N != null)
        for (te in (N.key !== void 0 && (he = "" + N.key), N))
          G.call(N, te) &&
            te !== "key" &&
            te !== "__self" &&
            te !== "__source" &&
            (re[te] = N[te]);
      var ue = arguments.length - 2;
      if (ue === 1) re.children = ee;
      else if (1 < ue) {
        for (var Ue = Array(ue), Ee = 0; Ee < ue; Ee++)
          Ue[Ee] = arguments[Ee + 2];
        re.children = Ue;
      }
      if (_ && _.defaultProps)
        for (te in ((ue = _.defaultProps), ue))
          re[te] === void 0 && (re[te] = ue[te]);
      return J(_, he, void 0, void 0, null, re);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (_) {
      return { $$typeof: h, render: _ };
    }),
    (me.isValidElement = P),
    (me.lazy = function (_) {
      return { $$typeof: y, _payload: { _status: -1, _result: _ }, _init: F };
    }),
    (me.memo = function (_, N) {
      return { $$typeof: p, type: _, compare: N === void 0 ? null : N };
    }),
    (me.startTransition = function (_) {
      var N = $.T,
        ee = {};
      $.T = ee;
      try {
        var te = _(),
          re = $.S;
        (re !== null && re(ee, te),
          typeof te == "object" &&
            te !== null &&
            typeof te.then == "function" &&
            te.then(ve, ae));
      } catch (he) {
        ae(he);
      } finally {
        $.T = N;
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (me.use = function (_) {
      return $.H.use(_);
    }),
    (me.useActionState = function (_, N, ee) {
      return $.H.useActionState(_, N, ee);
    }),
    (me.useCallback = function (_, N) {
      return $.H.useCallback(_, N);
    }),
    (me.useContext = function (_) {
      return $.H.useContext(_);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (_, N) {
      return $.H.useDeferredValue(_, N);
    }),
    (me.useEffect = function (_, N, ee) {
      var te = $.H;
      if (typeof ee == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return te.useEffect(_, N);
    }),
    (me.useId = function () {
      return $.H.useId();
    }),
    (me.useImperativeHandle = function (_, N, ee) {
      return $.H.useImperativeHandle(_, N, ee);
    }),
    (me.useInsertionEffect = function (_, N) {
      return $.H.useInsertionEffect(_, N);
    }),
    (me.useLayoutEffect = function (_, N) {
      return $.H.useLayoutEffect(_, N);
    }),
    (me.useMemo = function (_, N) {
      return $.H.useMemo(_, N);
    }),
    (me.useOptimistic = function (_, N) {
      return $.H.useOptimistic(_, N);
    }),
    (me.useReducer = function (_, N, ee) {
      return $.H.useReducer(_, N, ee);
    }),
    (me.useRef = function (_) {
      return $.H.useRef(_);
    }),
    (me.useState = function (_) {
      return $.H.useState(_);
    }),
    (me.useSyncExternalStore = function (_, N, ee) {
      return $.H.useSyncExternalStore(_, N, ee);
    }),
    (me.useTransition = function () {
      return $.H.useTransition();
    }),
    (me.version = "19.1.1"),
    me
  );
}
var Ig;
function Qs() {
  return (Ig || ((Ig = 1), (mc.exports = rS())), mc.exports);
}
var T = Qs();
const H = zf(T);
var gc = { exports: {} },
  Dr = {},
  pc = { exports: {} },
  vc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $g;
function lS() {
  return (
    $g ||
      (($g = 1),
      (function (i) {
        function a(B, F) {
          var ae = B.length;
          B.push(F);
          e: for (; 0 < ae; ) {
            var ve = (ae - 1) >>> 1,
              _ = B[ve];
            if (0 < s(_, F)) ((B[ve] = F), (B[ae] = _), (ae = ve));
            else break e;
          }
        }
        function l(B) {
          return B.length === 0 ? null : B[0];
        }
        function u(B) {
          if (B.length === 0) return null;
          var F = B[0],
            ae = B.pop();
          if (ae !== F) {
            B[0] = ae;
            e: for (var ve = 0, _ = B.length, N = _ >>> 1; ve < N; ) {
              var ee = 2 * (ve + 1) - 1,
                te = B[ee],
                re = ee + 1,
                he = B[re];
              if (0 > s(te, ae))
                re < _ && 0 > s(he, te)
                  ? ((B[ve] = he), (B[re] = ae), (ve = re))
                  : ((B[ve] = te), (B[ee] = ae), (ve = ee));
              else if (re < _ && 0 > s(he, ae))
                ((B[ve] = he), (B[re] = ae), (ve = re));
              else break e;
            }
          }
          return F;
        }
        function s(B, F) {
          var ae = B.sortIndex - F.sortIndex;
          return ae !== 0 ? ae : B.id - F.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          i.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          i.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          y = 1,
          w = null,
          C = 3,
          S = !1,
          R = !1,
          x = !1,
          Q = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function Z(B) {
          for (var F = l(p); F !== null; ) {
            if (F.callback === null) u(p);
            else if (F.startTime <= B)
              (u(p), (F.sortIndex = F.expirationTime), a(m, F));
            else break;
            F = l(p);
          }
        }
        function $(B) {
          if (((x = !1), Z(B), !R))
            if (l(m) !== null) ((R = !0), G || ((G = !0), W()));
            else {
              var F = l(p);
              F !== null && de($, F.startTime - B);
            }
        }
        var G = !1,
          J = -1,
          z = 5,
          P = -1;
        function K() {
          return Q ? !0 : !(i.unstable_now() - P < z);
        }
        function j() {
          if (((Q = !1), G)) {
            var B = i.unstable_now();
            P = B;
            var F = !0;
            try {
              e: {
                ((R = !1), x && ((x = !1), V(J), (J = -1)), (S = !0));
                var ae = C;
                try {
                  t: {
                    for (
                      Z(B), w = l(m);
                      w !== null && !(w.expirationTime > B && K());

                    ) {
                      var ve = w.callback;
                      if (typeof ve == "function") {
                        ((w.callback = null), (C = w.priorityLevel));
                        var _ = ve(w.expirationTime <= B);
                        if (((B = i.unstable_now()), typeof _ == "function")) {
                          ((w.callback = _), Z(B), (F = !0));
                          break t;
                        }
                        (w === l(m) && u(m), Z(B));
                      } else u(m);
                      w = l(m);
                    }
                    if (w !== null) F = !0;
                    else {
                      var N = l(p);
                      (N !== null && de($, N.startTime - B), (F = !1));
                    }
                  }
                  break e;
                } finally {
                  ((w = null), (C = ae), (S = !1));
                }
                F = void 0;
              }
            } finally {
              F ? W() : (G = !1);
            }
          }
        }
        var W;
        if (typeof D == "function")
          W = function () {
            D(j);
          };
        else if (typeof MessageChannel < "u") {
          var ie = new MessageChannel(),
            ne = ie.port2;
          ((ie.port1.onmessage = j),
            (W = function () {
              ne.postMessage(null);
            }));
        } else
          W = function () {
            M(j, 0);
          };
        function de(B, F) {
          J = M(function () {
            B(i.unstable_now());
          }, F);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (i.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (z = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (i.unstable_next = function (B) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = C;
            }
            var ae = C;
            C = F;
            try {
              return B();
            } finally {
              C = ae;
            }
          }),
          (i.unstable_requestPaint = function () {
            Q = !0;
          }),
          (i.unstable_runWithPriority = function (B, F) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var ae = C;
            C = B;
            try {
              return F();
            } finally {
              C = ae;
            }
          }),
          (i.unstable_scheduleCallback = function (B, F, ae) {
            var ve = i.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? ve + ae : ve))
                : (ae = ve),
              B)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = ae + _),
              (B = {
                id: y++,
                callback: F,
                priorityLevel: B,
                startTime: ae,
                expirationTime: _,
                sortIndex: -1,
              }),
              ae > ve
                ? ((B.sortIndex = ae),
                  a(p, B),
                  l(m) === null &&
                    B === l(p) &&
                    (x ? (V(J), (J = -1)) : (x = !0), de($, ae - ve)))
                : ((B.sortIndex = _),
                  a(m, B),
                  R || S || ((R = !0), G || ((G = !0), W()))),
              B
            );
          }),
          (i.unstable_shouldYield = K),
          (i.unstable_wrapCallback = function (B) {
            var F = C;
            return function () {
              var ae = C;
              C = F;
              try {
                return B.apply(this, arguments);
              } finally {
                C = ae;
              }
            };
          }));
      })(vc)),
    vc
  );
}
var Xg;
function sS() {
  return (Xg || ((Xg = 1), (pc.exports = lS())), pc.exports);
}
var yc = { exports: {} },
  mt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg;
function uS() {
  if (Kg) return mt;
  Kg = 1;
  var i = Qs();
  function a(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        p += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var u = {
      d: {
        f: l,
        r: function () {
          throw Error(a(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(m, p, y) {
    var w =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: w == null ? null : "" + w,
      children: m,
      containerInfo: p,
      implementation: y,
    };
  }
  var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (mt.createPortal = function (m, p) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(a(299));
      return c(m, p, null, y);
    }),
    (mt.flushSync = function (m) {
      var p = d.T,
        y = u.p;
      try {
        if (((d.T = null), (u.p = 2), m)) return m();
      } finally {
        ((d.T = p), (u.p = y), u.d.f());
      }
    }),
    (mt.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(m, p));
    }),
    (mt.prefetchDNS = function (m) {
      typeof m == "string" && u.d.D(m);
    }),
    (mt.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var y = p.as,
          w = h(y, p.crossOrigin),
          C = typeof p.integrity == "string" ? p.integrity : void 0,
          S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        y === "style"
          ? u.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: w,
              integrity: C,
              fetchPriority: S,
            })
          : y === "script" &&
            u.d.X(m, {
              crossOrigin: w,
              integrity: C,
              fetchPriority: S,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (mt.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var y = h(p.as, p.crossOrigin);
            u.d.M(m, {
              crossOrigin: y,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(m);
    }),
    (mt.preload = function (m, p) {
      if (
        typeof m == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var y = p.as,
          w = h(y, p.crossOrigin);
        u.d.L(m, y, {
          crossOrigin: w,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (mt.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var y = h(p.as, p.crossOrigin);
          u.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(m);
    }),
    (mt.requestFormReset = function (m) {
      u.d.r(m);
    }),
    (mt.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (mt.useFormState = function (m, p, y) {
      return d.H.useFormState(m, p, y);
    }),
    (mt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (mt.version = "19.1.1"),
    mt
  );
}
var Zg;
function pv() {
  if (Zg) return yc.exports;
  Zg = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return (i(), (yc.exports = uS()), yc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fg;
function oS() {
  if (Fg) return Dr;
  Fg = 1;
  var i = sS(),
    a = Qs(),
    l = pv();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e) throw Error(u(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var f = o.alternate;
      if (f === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === f.child) {
        for (f = o.child; f; ) {
          if (f === n) return (h(o), e);
          if (f === r) return (h(o), t);
          f = f.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) ((n = o), (r = f));
      else {
        for (var g = !1, v = o.child; v; ) {
          if (v === n) {
            ((g = !0), (n = o), (r = f));
            break;
          }
          if (v === r) {
            ((g = !0), (r = o), (n = f));
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = f.child; v; ) {
            if (v === n) {
              ((g = !0), (n = f), (r = o));
              break;
            }
            if (v === r) {
              ((g = !0), (r = f), (n = o));
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    w = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    x = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    V = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    G = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    P = Symbol.for("react.activity"),
    K = Symbol.for("react.memo_cache_sentinel"),
    j = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ie = Symbol.for("react.client.reference");
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ie ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case Q:
        return "Profiler";
      case x:
        return "StrictMode";
      case $:
        return "Suspense";
      case G:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case J:
          return (
            (t = e.displayName || null),
            t !== null ? t : ne(e.type) || "Memo"
          );
        case z:
          ((t = e._payload), (e = e._init));
          try {
            return ne(e(t));
          } catch {}
      }
    return null;
  }
  var de = Array.isArray,
    B = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    ve = [],
    _ = -1;
  function N(e) {
    return { current: e };
  }
  function ee(e) {
    0 > _ || ((e.current = ve[_]), (ve[_] = null), _--);
  }
  function te(e, t) {
    (_++, (ve[_] = e.current), (e.current = t));
  }
  var re = N(null),
    he = N(null),
    ue = N(null),
    Ue = N(null);
  function Ee(e, t) {
    switch ((te(ue, t), te(he, e), te(re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = vg(t)), (e = yg(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (ee(re), te(re, e));
  }
  function lt() {
    (ee(re), ee(he), ee(ue));
  }
  function Ot(e) {
    e.memoizedState !== null && te(Ue, e);
    var t = re.current,
      n = yg(t, e.type);
    t !== n && (te(he, e), te(re, n));
  }
  function bi(e) {
    (he.current === e && (ee(re), ee(he)),
      Ue.current === e && (ee(Ue), (Mr._currentValue = ae)));
  }
  var rl = Object.prototype.hasOwnProperty,
    Te = i.unstable_scheduleCallback,
    Ae = i.unstable_cancelCallback,
    et = i.unstable_shouldYield,
    qe = i.unstable_requestPaint,
    Ve = i.unstable_now,
    qn = i.unstable_getCurrentPriorityLevel,
    Ie = i.unstable_ImmediatePriority,
    tt = i.unstable_UserBlockingPriority,
    Et = i.unstable_NormalPriority,
    ll = i.unstable_LowPriority,
    La = i.unstable_IdlePriority,
    sl = i.log,
    wt = i.unstable_setDisableYieldValue,
    pt = null,
    st = null;
  function rn(e) {
    if (
      (typeof sl == "function" && wt(e),
      st && typeof st.setStrictMode == "function")
    )
      try {
        st.setStrictMode(pt, e);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Qy,
    Vy = Math.log,
    Py = Math.LN2;
  function Qy(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vy(e) / Py) | 0)) | 0);
  }
  var ul = 256,
    ol = 4194304;
  function Si(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function cl(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var v = r & 134217727;
    return (
      v !== 0
        ? ((r = v & ~f),
          r !== 0
            ? (o = Si(r))
            : ((g &= v),
              g !== 0
                ? (o = Si(g))
                : n || ((n = v & ~e), n !== 0 && (o = Si(n)))))
        : ((v = r & ~f),
          v !== 0
            ? (o = Si(v))
            : g !== 0
              ? (o = Si(g))
              : n || ((n = r & ~e), n !== 0 && (o = Si(n)))),
      o === 0
        ? 0
        : t !== 0 &&
            t !== o &&
            (t & f) === 0 &&
            ((f = o & -o),
            (n = t & -t),
            f >= n || (f === 32 && (n & 4194048) !== 0))
          ? t
          : o
    );
  }
  function qa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yy(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ed() {
    var e = ul;
    return ((ul <<= 1), (ul & 4194048) === 0 && (ul = 256), e);
  }
  function td() {
    var e = ol;
    return ((ol <<= 1), (ol & 62914560) === 0 && (ol = 4194304), e);
  }
  function tu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ba(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Gy(e, t, n, r, o, f) {
    var g = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      E = e.expirationTimes,
      U = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var Y = 31 - ut(n),
        X = 1 << Y;
      ((v[Y] = 0), (E[Y] = -1));
      var L = U[Y];
      if (L !== null)
        for (U[Y] = null, Y = 0; Y < L.length; Y++) {
          var q = L[Y];
          q !== null && (q.lane &= -536870913);
        }
      n &= ~X;
    }
    (r !== 0 && nd(e, r, 0),
      f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t)));
  }
  function nd(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var r = 31 - ut(t);
    ((e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194090)));
  }
  function id(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        o = 1 << r;
      ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
  }
  function nu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function iu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ad() {
    var e = F.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Lg(e.type));
  }
  function Iy(e, t) {
    var n = F.p;
    try {
      return ((F.p = e), t());
    } finally {
      F.p = n;
    }
  }
  var Bn = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + Bn,
    Ct = "__reactProps$" + Bn,
    Pi = "__reactContainer$" + Bn,
    au = "__reactEvents$" + Bn,
    $y = "__reactListeners$" + Bn,
    Xy = "__reactHandles$" + Bn,
    rd = "__reactResources$" + Bn,
    Ha = "__reactMarker$" + Bn;
  function ru(e) {
    (delete e[dt], delete e[Ct], delete e[au], delete e[$y], delete e[Xy]);
  }
  function Qi(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pi] || n[dt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = wg(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = wg(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Yi(e) {
    if ((e = e[dt] || e[Pi])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Va(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Gi(e) {
    var t = e[rd];
    return (
      t ||
        (t = e[rd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function nt(e) {
    e[Ha] = !0;
  }
  var ld = new Set(),
    sd = {};
  function Ei(e, t) {
    (Ii(e, t), Ii(e + "Capture", t));
  }
  function Ii(e, t) {
    for (sd[e] = t, e = 0; e < t.length; e++) ld.add(t[e]);
  }
  var Ky = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ud = {},
    od = {};
  function Zy(e) {
    return rl.call(od, e)
      ? !0
      : rl.call(ud, e)
        ? !1
        : Ky.test(e)
          ? (od[e] = !0)
          : ((ud[e] = !0), !1);
  }
  function fl(e, t, n) {
    if (Zy(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function dl(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function yn(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  var lu, cd;
  function $i(e) {
    if (lu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((lu = (t && t[1]) || ""),
          (cd =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      lu +
      e +
      cd
    );
  }
  var su = !1;
  function uu(e, t) {
    if (!e || su) return "";
    su = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (q) {
                  var L = q;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (q) {
                  L = q;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                L = q;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (q) {
            if (q && L && typeof q.stack == "string") return [q.stack, L.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = r.DetermineComponentFrameRoot(),
        g = f[0],
        v = f[1];
      if (g && v) {
        var E = g.split(`
`),
          U = v.split(`
`);
        for (
          o = r = 0;
          r < E.length && !E[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (r === E.length || o === U.length)
          for (
            r = E.length - 1, o = U.length - 1;
            1 <= r && 0 <= o && E[r] !== U[o];

          )
            o--;
        for (; 1 <= r && 0 <= o; r--, o--)
          if (E[r] !== U[o]) {
            if (r !== 1 || o !== 1)
              do
                if ((r--, o--, 0 > o || E[r] !== U[o])) {
                  var Y =
                    `
` + E[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Y.includes("<anonymous>") &&
                      (Y = Y.replace("<anonymous>", e.displayName)),
                    Y
                  );
                }
              while (1 <= r && 0 <= o);
            break;
          }
      }
    } finally {
      ((su = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? $i(n) : "";
  }
  function Fy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $i(e.type);
      case 16:
        return $i("Lazy");
      case 13:
        return $i("Suspense");
      case 19:
        return $i("SuspenseList");
      case 0:
      case 15:
        return uu(e.type, !1);
      case 11:
        return uu(e.type.render, !1);
      case 1:
        return uu(e.type, !0);
      case 31:
        return $i("Activity");
      default:
        return "";
    }
  }
  function fd(e) {
    try {
      var t = "";
      do ((t += Fy(e)), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ht(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function dd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Jy(e) {
    var t = dd(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        f = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (g) {
            ((r = "" + g), f.call(this, g));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (g) {
            r = "" + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function hl(e) {
    e._valueTracker || (e._valueTracker = Jy(e));
  }
  function hd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = dd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ml(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wy = /[\n"\\]/g;
  function Vt(e) {
    return e.replace(Wy, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ou(e, t, n, r, o, f, g, v) {
    ((e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Ht(t))
          : e.value !== "" + Ht(t) && (e.value = "" + Ht(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? cu(e, g, Ht(t))
        : n != null
          ? cu(e, g, Ht(n))
          : r != null && e.removeAttribute("value"),
      o == null && f != null && (e.defaultChecked = !!f),
      o != null &&
        (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Ht(v))
        : e.removeAttribute("name"));
  }
  function md(e, t, n, r, o, f, g, v) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || n != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) return;
      ((n = n != null ? "" + Ht(n) : ""),
        (t = t != null ? "" + Ht(t) : n),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = r ?? o),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = v ? e.checked : !!r),
      (e.defaultChecked = !!r),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g));
  }
  function cu(e, t, n) {
    (t === "number" && ml(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Xi(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Ht(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gd(e, t, n) {
    if (
      t != null &&
      ((t = "" + Ht(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ht(n) : "";
  }
  function pd(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(u(92));
        if (de(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        n = r;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Ht(t)),
      (e.defaultValue = n),
      (r = e.textContent),
      r === n && r !== "" && r !== null && (e.value = r));
  }
  function Ki(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var e0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vd(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : r
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || e0.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function yd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var r in n)
        !n.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""));
      for (var o in t)
        ((r = t[o]), t.hasOwnProperty(o) && n[o] !== r && vd(e, o, r));
    } else for (var f in t) t.hasOwnProperty(f) && vd(e, f, t[f]);
  }
  function fu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var t0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    n0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gl(e) {
    return n0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var du = null;
  function hu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Zi = null,
    Fi = null;
  function bd(e) {
    var t = Yi(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ct] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (ou(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Vt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = r[Ct] || null;
                if (!o) throw Error(u(90));
                ou(
                  r,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((r = n[t]), r.form === e.form && hd(r));
          }
          break e;
        case "textarea":
          gd(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Xi(e, !!n.multiple, t, !1));
      }
    }
  }
  var mu = !1;
  function Sd(e, t, n) {
    if (mu) return e(t, n);
    mu = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (
        ((mu = !1),
        (Zi !== null || Fi !== null) &&
          (es(), Zi && ((t = Zi), (e = Fi), (Fi = Zi = null), bd(t), e)))
      )
        for (t = 0; t < e.length; t++) bd(e[t]);
    }
  }
  function Pa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[Ct] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var bn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    gu = !1;
  if (bn)
    try {
      var Qa = {};
      (Object.defineProperty(Qa, "passive", {
        get: function () {
          gu = !0;
        },
      }),
        window.addEventListener("test", Qa, Qa),
        window.removeEventListener("test", Qa, Qa));
    } catch {
      gu = !1;
    }
  var Hn = null,
    pu = null,
    pl = null;
  function Ed() {
    if (pl) return pl;
    var e,
      t = pu,
      n = t.length,
      r,
      o = "value" in Hn ? Hn.value : Hn.textContent,
      f = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var g = n - e;
    for (r = 1; r <= g && t[n - r] === o[f - r]; r++);
    return (pl = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function vl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yl() {
    return !0;
  }
  function wd() {
    return !1;
  }
  function _t(e) {
    function t(n, r, o, f, g) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(f) : f[v]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? yl
          : wd),
        (this.isPropagationStopped = wd),
        this
      );
    }
    return (
      y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = yl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = yl));
        },
        persist: function () {},
        isPersistent: yl,
      }),
      t
    );
  }
  var wi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = _t(wi),
    Ya = y({}, wi, { view: 0, detail: 0 }),
    i0 = _t(Ya),
    vu,
    yu,
    Ga,
    Sl = y({}, Ya, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Su,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ga &&
              (Ga && e.type === "mousemove"
                ? ((vu = e.screenX - Ga.screenX), (yu = e.screenY - Ga.screenY))
                : (yu = vu = 0),
              (Ga = e)),
            vu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : yu;
      },
    }),
    Cd = _t(Sl),
    a0 = y({}, Sl, { dataTransfer: 0 }),
    r0 = _t(a0),
    l0 = y({}, Ya, { relatedTarget: 0 }),
    bu = _t(l0),
    s0 = y({}, wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u0 = _t(s0),
    o0 = y({}, wi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    c0 = _t(o0),
    f0 = y({}, wi, { data: 0 }),
    _d = _t(f0),
    d0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    h0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    m0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function g0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = m0[e])
        ? !!t[e]
        : !1;
  }
  function Su() {
    return g0;
  }
  var p0 = y({}, Ya, {
      key: function (e) {
        if (e.key) {
          var t = d0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? h0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Su,
      charCode: function (e) {
        return e.type === "keypress" ? vl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? vl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    v0 = _t(p0),
    y0 = y({}, Sl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ad = _t(y0),
    b0 = y({}, Ya, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Su,
    }),
    S0 = _t(b0),
    E0 = y({}, wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    w0 = _t(E0),
    C0 = y({}, Sl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _0 = _t(C0),
    A0 = y({}, wi, { newState: 0, oldState: 0 }),
    T0 = _t(A0),
    R0 = [9, 13, 27, 32],
    Eu = bn && "CompositionEvent" in window,
    Ia = null;
  bn && "documentMode" in document && (Ia = document.documentMode);
  var O0 = bn && "TextEvent" in window && !Ia,
    Td = bn && (!Eu || (Ia && 8 < Ia && 11 >= Ia)),
    Rd = " ",
    Od = !1;
  function Md(e, t) {
    switch (e) {
      case "keyup":
        return R0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xd(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ji = !1;
  function M0(e, t) {
    switch (e) {
      case "compositionend":
        return xd(t);
      case "keypress":
        return t.which !== 32 ? null : ((Od = !0), Rd);
      case "textInput":
        return ((e = t.data), e === Rd && Od ? null : e);
      default:
        return null;
    }
  }
  function x0(e, t) {
    if (Ji)
      return e === "compositionend" || (!Eu && Md(e, t))
        ? ((e = Ed()), (pl = pu = Hn = null), (Ji = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Td && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var N0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!N0[e.type] : t === "textarea";
  }
  function kd(e, t, n, r) {
    (Zi ? (Fi ? Fi.push(r) : (Fi = [r])) : (Zi = r),
      (t = ls(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var $a = null,
    Xa = null;
  function k0(e) {
    dg(e, 0);
  }
  function El(e) {
    var t = Va(e);
    if (hd(t)) return e;
  }
  function Ud(e, t) {
    if (e === "change") return t;
  }
  var jd = !1;
  if (bn) {
    var wu;
    if (bn) {
      var Cu = "oninput" in document;
      if (!Cu) {
        var Dd = document.createElement("div");
        (Dd.setAttribute("oninput", "return;"),
          (Cu = typeof Dd.oninput == "function"));
      }
      wu = Cu;
    } else wu = !1;
    jd = wu && (!document.documentMode || 9 < document.documentMode);
  }
  function zd() {
    $a && ($a.detachEvent("onpropertychange", Ld), (Xa = $a = null));
  }
  function Ld(e) {
    if (e.propertyName === "value" && El(Xa)) {
      var t = [];
      (kd(t, Xa, e, hu(e)), Sd(k0, t));
    }
  }
  function U0(e, t, n) {
    e === "focusin"
      ? (zd(), ($a = t), (Xa = n), $a.attachEvent("onpropertychange", Ld))
      : e === "focusout" && zd();
  }
  function j0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return El(Xa);
  }
  function D0(e, t) {
    if (e === "click") return El(t);
  }
  function z0(e, t) {
    if (e === "input" || e === "change") return El(t);
  }
  function L0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Mt = typeof Object.is == "function" ? Object.is : L0;
  function Ka(e, t) {
    if (Mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!rl.call(t, o) || !Mt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function qd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bd(e, t) {
    var n = qd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qd(n);
    }
  }
  function Hd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Vd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ml(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ml(e.document);
    }
    return t;
  }
  function _u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var q0 = bn && "documentMode" in document && 11 >= document.documentMode,
    Wi = null,
    Au = null,
    Za = null,
    Tu = !1;
  function Pd(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tu ||
      Wi == null ||
      Wi !== ml(r) ||
      ((r = Wi),
      "selectionStart" in r && _u(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Za && Ka(Za, r)) ||
        ((Za = r),
        (r = ls(Au, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Wi))));
  }
  function Ci(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var ea = {
      animationend: Ci("Animation", "AnimationEnd"),
      animationiteration: Ci("Animation", "AnimationIteration"),
      animationstart: Ci("Animation", "AnimationStart"),
      transitionrun: Ci("Transition", "TransitionRun"),
      transitionstart: Ci("Transition", "TransitionStart"),
      transitioncancel: Ci("Transition", "TransitionCancel"),
      transitionend: Ci("Transition", "TransitionEnd"),
    },
    Ru = {},
    Qd = {};
  bn &&
    ((Qd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function _i(e) {
    if (Ru[e]) return Ru[e];
    if (!ea[e]) return e;
    var t = ea[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qd) return (Ru[e] = t[n]);
    return e;
  }
  var Yd = _i("animationend"),
    Gd = _i("animationiteration"),
    Id = _i("animationstart"),
    B0 = _i("transitionrun"),
    H0 = _i("transitionstart"),
    V0 = _i("transitioncancel"),
    $d = _i("transitionend"),
    Xd = new Map(),
    Ou =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ou.push("scrollEnd");
  function Jt(e, t) {
    (Xd.set(e, t), Ei(t, [e]));
  }
  var Kd = new WeakMap();
  function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Kd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: fd(t) }), Kd.set(e, t), t);
    }
    return { value: e, source: t, stack: fd(t) };
  }
  var Qt = [],
    ta = 0,
    Mu = 0;
  function wl() {
    for (var e = ta, t = (Mu = ta = 0); t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var r = Qt[t];
      Qt[t++] = null;
      var o = Qt[t];
      Qt[t++] = null;
      var f = Qt[t];
      if (((Qt[t++] = null), r !== null && o !== null)) {
        var g = r.pending;
        (g === null ? (o.next = o) : ((o.next = g.next), (g.next = o)),
          (r.pending = o));
      }
      f !== 0 && Zd(n, o, f);
    }
  }
  function Cl(e, t, n, r) {
    ((Qt[ta++] = e),
      (Qt[ta++] = t),
      (Qt[ta++] = n),
      (Qt[ta++] = r),
      (Mu |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r));
  }
  function xu(e, t, n, r) {
    return (Cl(e, t, n, r), _l(e));
  }
  function na(e, t) {
    return (Cl(e, null, null, t), _l(e));
  }
  function Zd(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var o = !1, f = e.return; f !== null; )
      ((f.childLanes |= n),
        (r = f.alternate),
        r !== null && (r.childLanes |= n),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = f),
        (f = f.return));
    return e.tag === 3
      ? ((f = e.stateNode),
        o &&
          t !== null &&
          ((o = 31 - ut(n)),
          (e = f.hiddenUpdates),
          (r = e[o]),
          r === null ? (e[o] = [t]) : r.push(t),
          (t.lane = n | 536870912)),
        f)
      : null;
  }
  function _l(e) {
    if (50 < Er) throw ((Er = 0), (Lo = null), Error(u(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ia = {};
  function P0(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function xt(e, t, n, r) {
    return new P0(e, t, n, r);
  }
  function Nu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = xt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Fd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Al(e, t, n, r, o, f) {
    var g = 0;
    if (((r = e), typeof e == "function")) Nu(e) && (g = 1);
    else if (typeof e == "string")
      g = Yb(e, n, re.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case P:
          return ((e = xt(31, n, t, o)), (e.elementType = P), (e.lanes = f), e);
        case R:
          return Ai(n.children, o, f, t);
        case x:
          ((g = 8), (o |= 24));
          break;
        case Q:
          return (
            (e = xt(12, n, t, o | 2)),
            (e.elementType = Q),
            (e.lanes = f),
            e
          );
        case $:
          return ((e = xt(13, n, t, o)), (e.elementType = $), (e.lanes = f), e);
        case G:
          return ((e = xt(19, n, t, o)), (e.elementType = G), (e.lanes = f), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
              case D:
                g = 10;
                break e;
              case V:
                g = 9;
                break e;
              case Z:
                g = 11;
                break e;
              case J:
                g = 14;
                break e;
              case z:
                ((g = 16), (r = null));
                break e;
            }
          ((g = 29),
            (n = Error(u(130, e === null ? "null" : typeof e, ""))),
            (r = null));
      }
    return (
      (t = xt(g, n, t, o)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = f),
      t
    );
  }
  function Ai(e, t, n, r) {
    return ((e = xt(7, e, r, t)), (e.lanes = n), e);
  }
  function ku(e, t, n) {
    return ((e = xt(6, e, null, t)), (e.lanes = n), e);
  }
  function Uu(e, t, n) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var aa = [],
    ra = 0,
    Tl = null,
    Rl = 0,
    Yt = [],
    Gt = 0,
    Ti = null,
    En = 1,
    wn = "";
  function Ri(e, t) {
    ((aa[ra++] = Rl), (aa[ra++] = Tl), (Tl = e), (Rl = t));
  }
  function Jd(e, t, n) {
    ((Yt[Gt++] = En), (Yt[Gt++] = wn), (Yt[Gt++] = Ti), (Ti = e));
    var r = En;
    e = wn;
    var o = 32 - ut(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var f = 32 - ut(t) + o;
    if (30 < f) {
      var g = o - (o % 5);
      ((f = (r & ((1 << g) - 1)).toString(32)),
        (r >>= g),
        (o -= g),
        (En = (1 << (32 - ut(t) + o)) | (n << o) | r),
        (wn = f + e));
    } else ((En = (1 << f) | (n << o) | r), (wn = e));
  }
  function ju(e) {
    e.return !== null && (Ri(e, 1), Jd(e, 1, 0));
  }
  function Du(e) {
    for (; e === Tl; )
      ((Tl = aa[--ra]), (aa[ra] = null), (Rl = aa[--ra]), (aa[ra] = null));
    for (; e === Ti; )
      ((Ti = Yt[--Gt]),
        (Yt[Gt] = null),
        (wn = Yt[--Gt]),
        (Yt[Gt] = null),
        (En = Yt[--Gt]),
        (Yt[Gt] = null));
  }
  var vt = null,
    Pe = null,
    _e = !1,
    Oi = null,
    ln = !1,
    zu = Error(u(519));
  function Mi(e) {
    var t = Error(u(418, ""));
    throw (Wa(Pt(t, e)), zu);
  }
  function Wd(e) {
    var t = e.stateNode,
      n = e.type,
      r = e.memoizedProps;
    switch (((t[dt] = e), (t[Ct] = r), n)) {
      case "dialog":
        (Se("cancel", t), Se("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Cr.length; n++) Se(Cr[n], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Se("error", t), Se("load", t));
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        (Se("invalid", t),
          md(
            t,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          ),
          hl(t));
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        (Se("invalid", t), pd(t, r.value, r.defaultValue, r.children), hl(t));
    }
    ((n = r.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      r.suppressHydrationWarning === !0 ||
      pg(t.textContent, n)
        ? (r.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          r.onScroll != null && Se("scroll", t),
          r.onScrollEnd != null && Se("scrollend", t),
          r.onClick != null && (t.onclick = ss),
          (t = !0))
        : (t = !1),
      t || Mi(e));
  }
  function eh(e) {
    for (vt = e.return; vt; )
      switch (vt.tag) {
        case 5:
        case 13:
          ln = !1;
          return;
        case 27:
        case 3:
          ln = !0;
          return;
        default:
          vt = vt.return;
      }
  }
  function Fa(e) {
    if (e !== vt) return !1;
    if (!_e) return (eh(e), (_e = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Wo(e.type, e.memoizedProps))),
        (n = !n)),
      n && Pe && Mi(e),
      eh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Pe = en(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Pe = null;
      }
    } else
      t === 27
        ? ((t = Pe), ni(e.type) ? ((e = ic), (ic = null), (Pe = e)) : (Pe = t))
        : (Pe = vt ? en(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ja() {
    ((Pe = vt = null), (_e = !1));
  }
  function th() {
    var e = Oi;
    return (
      e !== null &&
        (Rt === null ? (Rt = e) : Rt.push.apply(Rt, e), (Oi = null)),
      e
    );
  }
  function Wa(e) {
    Oi === null ? (Oi = [e]) : Oi.push(e);
  }
  var Lu = N(null),
    xi = null,
    Cn = null;
  function Vn(e, t, n) {
    (te(Lu, t._currentValue), (t._currentValue = n));
  }
  function _n(e) {
    ((e._currentValue = Lu.current), ee(Lu));
  }
  function qu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Bu(e, t, n, r) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var f = o.dependencies;
      if (f !== null) {
        var g = o.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = o;
          for (var E = 0; E < t.length; E++)
            if (v.context === t[E]) {
              ((f.lanes |= n),
                (v = f.alternate),
                v !== null && (v.lanes |= n),
                qu(f.return, n, e),
                r || (g = null));
              break e;
            }
          f = v.next;
        }
      } else if (o.tag === 18) {
        if (((g = o.return), g === null)) throw Error(u(341));
        ((g.lanes |= n),
          (f = g.alternate),
          f !== null && (f.lanes |= n),
          qu(g, n, e),
          (g = null));
      } else g = o.child;
      if (g !== null) g.return = o;
      else
        for (g = o; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((o = g.sibling), o !== null)) {
            ((o.return = g.return), (g = o));
            break;
          }
          g = g.return;
        }
      o = g;
    }
  }
  function er(e, t, n, r) {
    e = null;
    for (var o = t, f = !1; o !== null; ) {
      if (!f) {
        if ((o.flags & 524288) !== 0) f = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(u(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = o.type;
          Mt(o.pendingProps.value, g.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (o === Ue.current) {
        if (((g = o.alternate), g === null)) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (e !== null ? e.push(Mr) : (e = [Mr]));
      }
      o = o.return;
    }
    (e !== null && Bu(t, e, n, r), (t.flags |= 262144));
  }
  function Ol(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Mt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ni(e) {
    ((xi = e),
      (Cn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ht(e) {
    return nh(xi, e);
  }
  function Ml(e, t) {
    return (xi === null && Ni(e), nh(e, t));
  }
  function nh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Cn === null)) {
      if (e === null) throw Error(u(308));
      ((Cn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Cn = Cn.next = t;
    return n;
  }
  var Q0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Y0 = i.unstable_scheduleCallback,
    G0 = i.unstable_NormalPriority,
    Ze = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hu() {
    return { controller: new Q0(), data: new Map(), refCount: 0 };
  }
  function tr(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Y0(G0, function () {
          e.controller.abort();
        }));
  }
  var nr = null,
    Vu = 0,
    la = 0,
    sa = null;
  function I0(e, t) {
    if (nr === null) {
      var n = (nr = []);
      ((Vu = 0),
        (la = Yo()),
        (sa = {
          status: "pending",
          value: void 0,
          then: function (r) {
            n.push(r);
          },
        }));
    }
    return (Vu++, t.then(ih, ih), t);
  }
  function ih() {
    if (--Vu === 0 && nr !== null) {
      sa !== null && (sa.status = "fulfilled");
      var e = nr;
      ((nr = null), (la = 0), (sa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function $0(e, t) {
    var n = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      e.then(
        function () {
          ((r.status = "fulfilled"), (r.value = t));
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function (o) {
          for (r.status = "rejected", r.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        },
      ),
      r
    );
  }
  var ah = B.S;
  B.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      I0(e, t),
      ah !== null && ah(e, t));
  };
  var ki = N(null);
  function Pu() {
    var e = ki.current;
    return e !== null ? e : je.pooledCache;
  }
  function xl(e, t) {
    t === null ? te(ki, ki.current) : te(ki, t.pool);
  }
  function rh() {
    var e = Pu();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var ir = Error(u(460)),
    lh = Error(u(474)),
    Nl = Error(u(542)),
    Qu = { then: function () {} };
  function sh(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function kl() {}
  function uh(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(kl, kl), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), ch(e), e);
      default:
        if (typeof t.status == "string") t.then(kl, kl);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "fulfilled"), (o.value = r));
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "rejected"), (o.reason = r));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), ch(e), e);
        }
        throw ((ar = t), ir);
    }
  }
  var ar = null;
  function oh() {
    if (ar === null) throw Error(u(459));
    var e = ar;
    return ((ar = null), e);
  }
  function ch(e) {
    if (e === ir || e === Nl) throw Error(u(483));
  }
  var Pn = !1;
  function Yu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Gu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Re & 2) !== 0)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        (t = _l(e)),
        Zd(e, null, n),
        t
      );
    }
    return (Cl(e, r, t, n), _l(e));
  }
  function rr(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), id(e, n));
    }
  }
  function Iu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (f === null ? (o = f = g) : (f = f.next = g), (n = n.next));
        } while (n !== null);
        f === null ? (o = f = t) : (f = f.next = t);
      } else o = f = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: f,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var $u = !1;
  function lr() {
    if ($u) {
      var e = sa;
      if (e !== null) throw e;
    }
  }
  function sr(e, t, n, r) {
    $u = !1;
    var o = e.updateQueue;
    Pn = !1;
    var f = o.firstBaseUpdate,
      g = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var E = v,
        U = E.next;
      ((E.next = null), g === null ? (f = U) : (g.next = U), (g = E));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (v = Y.lastBaseUpdate),
        v !== g &&
          (v === null ? (Y.firstBaseUpdate = U) : (v.next = U),
          (Y.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var X = o.baseState;
      ((g = 0), (Y = U = E = null), (v = f));
      do {
        var L = v.lane & -536870913,
          q = L !== v.lane;
        if (q ? (we & L) === L : (r & L) === L) {
          (L !== 0 && L === la && ($u = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var fe = e,
              oe = v;
            L = t;
            var Ne = n;
            switch (oe.tag) {
              case 1:
                if (((fe = oe.payload), typeof fe == "function")) {
                  X = fe.call(Ne, X, L);
                  break e;
                }
                X = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = oe.payload),
                  (L = typeof fe == "function" ? fe.call(Ne, X, L) : fe),
                  L == null)
                )
                  break e;
                X = y({}, X, L);
                break e;
              case 2:
                Pn = !0;
            }
          }
          ((L = v.callback),
            L !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = o.callbacks),
              q === null ? (o.callbacks = [L]) : q.push(L)));
        } else
          ((q = {
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            Y === null ? ((U = Y = q), (E = X)) : (Y = Y.next = q),
            (g |= L));
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          ((q = v),
            (v = q.next),
            (q.next = null),
            (o.lastBaseUpdate = q),
            (o.shared.pending = null));
        }
      } while (!0);
      (Y === null && (E = X),
        (o.baseState = E),
        (o.firstBaseUpdate = U),
        (o.lastBaseUpdate = Y),
        f === null && (o.shared.lanes = 0),
        (Jn |= g),
        (e.lanes = g),
        (e.memoizedState = X));
    }
  }
  function fh(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function dh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) fh(n[e], t);
  }
  var ua = N(null),
    Ul = N(0);
  function hh(e, t) {
    ((e = Nn), te(Ul, e), te(ua, t), (Nn = e | t.baseLanes));
  }
  function Xu() {
    (te(Ul, Nn), te(ua, ua.current));
  }
  function Ku() {
    ((Nn = Ul.current), ee(ua), ee(Ul));
  }
  var Gn = 0,
    pe = null,
    Me = null,
    $e = null,
    jl = !1,
    oa = !1,
    Ui = !1,
    Dl = 0,
    ur = 0,
    ca = null,
    X0 = 0;
  function Ye() {
    throw Error(u(321));
  }
  function Zu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Fu(e, t, n, r, o, f) {
    return (
      (Gn = f),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (B.H = e === null || e.memoizedState === null ? Zh : Fh),
      (Ui = !1),
      (f = n(r, o)),
      (Ui = !1),
      oa && (f = gh(t, n, r, o)),
      mh(e),
      f
    );
  }
  function mh(e) {
    B.H = Vl;
    var t = Me !== null && Me.next !== null;
    if (((Gn = 0), ($e = Me = pe = null), (jl = !1), (ur = 0), (ca = null), t))
      throw Error(u(300));
    e === null ||
      it ||
      ((e = e.dependencies), e !== null && Ol(e) && (it = !0));
  }
  function gh(e, t, n, r) {
    pe = e;
    var o = 0;
    do {
      if ((oa && (ca = null), (ur = 0), (oa = !1), 25 <= o))
        throw Error(u(301));
      if (((o += 1), ($e = Me = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((B.H = tb), (f = t(n, r)));
    } while (oa);
    return f;
  }
  function K0() {
    var e = B.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? or(t) : t),
      (e = e.useState()[0]),
      (Me !== null ? Me.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Ju() {
    var e = Dl !== 0;
    return ((Dl = 0), e);
  }
  function Wu(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function eo(e) {
    if (jl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      jl = !1;
    }
    ((Gn = 0), ($e = Me = pe = null), (oa = !1), (ur = Dl = 0), (ca = null));
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ($e === null ? (pe.memoizedState = $e = e) : ($e = $e.next = e), $e);
  }
  function Xe() {
    if (Me === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = $e === null ? pe.memoizedState : $e.next;
    if (t !== null) (($e = t), (Me = e));
    else {
      if (e === null)
        throw pe.alternate === null ? Error(u(467)) : Error(u(310));
      ((Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        $e === null ? (pe.memoizedState = $e = e) : ($e = $e.next = e));
    }
    return $e;
  }
  function to() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function or(e) {
    var t = ur;
    return (
      (ur += 1),
      ca === null && (ca = []),
      (e = uh(ca, e, t)),
      (t = pe),
      ($e === null ? t.memoizedState : $e.next) === null &&
        ((t = t.alternate),
        (B.H = t === null || t.memoizedState === null ? Zh : Fh)),
      e
    );
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return or(e);
      if (e.$$typeof === D) return ht(e);
    }
    throw Error(u(438, String(e)));
  }
  function no(e) {
    var t = null,
      n = pe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var r = pe.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (t = {
              data: r.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = to()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = K;
    return (t.index++, n);
  }
  function An(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = Xe();
    return io(t, Me, e);
  }
  function io(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = n;
    var o = e.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (o !== null) {
        var g = o.next;
        ((o.next = f.next), (f.next = g));
      }
      ((t.baseQueue = o = f), (r.pending = null));
    }
    if (((f = e.baseState), o === null)) e.memoizedState = f;
    else {
      t = o.next;
      var v = (g = null),
        E = null,
        U = t,
        Y = !1;
      do {
        var X = U.lane & -536870913;
        if (X !== U.lane ? (we & X) === X : (Gn & X) === X) {
          var L = U.revertLane;
          if (L === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              X === la && (Y = !0));
          else if ((Gn & L) === L) {
            ((U = U.next), L === la && (Y = !0));
            continue;
          } else
            ((X = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              E === null ? ((v = E = X), (g = f)) : (E = E.next = X),
              (pe.lanes |= L),
              (Jn |= L));
          ((X = U.action),
            Ui && n(f, X),
            (f = U.hasEagerState ? U.eagerState : n(f, X)));
        } else
          ((L = {
            lane: X,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            E === null ? ((v = E = L), (g = f)) : (E = E.next = L),
            (pe.lanes |= X),
            (Jn |= X));
        U = U.next;
      } while (U !== null && U !== t);
      if (
        (E === null ? (g = f) : (E.next = v),
        !Mt(f, e.memoizedState) && ((it = !0), Y && ((n = sa), n !== null)))
      )
        throw n;
      ((e.memoizedState = f),
        (e.baseState = g),
        (e.baseQueue = E),
        (r.lastRenderedState = f));
    }
    return (o === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
  }
  function ao(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      f = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var g = (o = o.next);
      do ((f = e(f, g.action)), (g = g.next));
      while (g !== o);
      (Mt(f, t.memoizedState) || (it = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f));
    }
    return [f, r];
  }
  function ph(e, t, n) {
    var r = pe,
      o = Xe(),
      f = _e;
    if (f) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var g = !Mt((Me || o).memoizedState, n);
    (g && ((o.memoizedState = n), (it = !0)), (o = o.queue));
    var v = bh.bind(null, r, o, e);
    if (
      (cr(2048, 8, v, [e]),
      o.getSnapshot !== t || g || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        fa(9, ql(), yh.bind(null, r, o, n, t), null),
        je === null)
      )
        throw Error(u(349));
      f || (Gn & 124) !== 0 || vh(r, t, n);
    }
    return n;
  }
  function vh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = to()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function yh(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Sh(t) && Eh(e));
  }
  function bh(e, t, n) {
    return n(function () {
      Sh(t) && Eh(e);
    });
  }
  function Sh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function Eh(e) {
    var t = na(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function ro(e) {
    var t = At();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ui)) {
        rn(!0);
        try {
          n();
        } finally {
          rn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: e,
      }),
      t
    );
  }
  function wh(e, t, n, r) {
    return ((e.baseState = n), io(e, Me, typeof r == "function" ? r : An));
  }
  function Z0(e, t, n, r, o) {
    if (Hl(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        },
      };
      (B.T !== null ? n(!0) : (f.isTransition = !1),
        r(f),
        (n = t.pending),
        n === null
          ? ((f.next = t.pending = f), Ch(t, f))
          : ((f.next = n.next), (t.pending = n.next = f)));
    }
  }
  function Ch(e, t) {
    var n = t.action,
      r = t.payload,
      o = e.state;
    if (t.isTransition) {
      var f = B.T,
        g = {};
      B.T = g;
      try {
        var v = n(o, r),
          E = B.S;
        (E !== null && E(g, v), _h(e, t, v));
      } catch (U) {
        lo(e, t, U);
      } finally {
        B.T = f;
      }
    } else
      try {
        ((f = n(o, r)), _h(e, t, f));
      } catch (U) {
        lo(e, t, U);
      }
  }
  function _h(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (r) {
            Ah(e, t, r);
          },
          function (r) {
            return lo(e, t, r);
          },
        )
      : Ah(e, t, n);
  }
  function Ah(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Th(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Ch(e, n))));
  }
  function lo(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do ((t.status = "rejected"), (t.reason = n), Th(t), (t = t.next));
      while (t !== r);
    }
    e.action = null;
  }
  function Th(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Rh(e, t) {
    return t;
  }
  function Oh(e, t) {
    if (_e) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var r = pe;
          if (_e) {
            if (Pe) {
              t: {
                for (var o = Pe, f = ln; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (((o = en(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                ((f = o.data), (o = f === "F!" || f === "F" ? o : null));
              }
              if (o) {
                ((Pe = en(o.nextSibling)), (r = o.data === "F!"));
                break e;
              }
            }
            Mi(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return (
      (n = At()),
      (n.memoizedState = n.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rh,
        lastRenderedState: t,
      }),
      (n.queue = r),
      (n = $h.bind(null, pe, r)),
      (r.dispatch = n),
      (r = ro(!1)),
      (f = fo.bind(null, pe, !1, r.queue)),
      (r = At()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (r.queue = o),
      (n = Z0.bind(null, pe, o, f, n)),
      (o.dispatch = n),
      (r.memoizedState = e),
      [t, n, !1]
    );
  }
  function Mh(e) {
    var t = Xe();
    return xh(t, Me, e);
  }
  function xh(e, t, n) {
    if (
      ((t = io(e, t, Rh)[0]),
      (e = Ll(An)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var r = or(t);
      } catch (g) {
        throw g === ir ? Nl : g;
      }
    else r = t;
    t = Xe();
    var o = t.queue,
      f = o.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048), fa(9, ql(), F0.bind(null, o, n), null)),
      [r, f, e]
    );
  }
  function F0(e, t) {
    e.action = t;
  }
  function Nh(e) {
    var t = Xe(),
      n = Me;
    if (n !== null) return xh(t, n, e);
    (Xe(), (t = t.memoizedState), (n = Xe()));
    var r = n.queue.dispatch;
    return ((n.memoizedState = e), [t, r, !1]);
  }
  function fa(e, t, n, r) {
    return (
      (e = { tag: e, create: n, deps: r, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = to()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function ql() {
    return { destroy: void 0, resource: void 0 };
  }
  function kh() {
    return Xe().memoizedState;
  }
  function Bl(e, t, n, r) {
    var o = At();
    ((r = r === void 0 ? null : r),
      (pe.flags |= e),
      (o.memoizedState = fa(1 | t, ql(), n, r)));
  }
  function cr(e, t, n, r) {
    var o = Xe();
    r = r === void 0 ? null : r;
    var f = o.memoizedState.inst;
    Me !== null && r !== null && Zu(r, Me.memoizedState.deps)
      ? (o.memoizedState = fa(t, f, n, r))
      : ((pe.flags |= e), (o.memoizedState = fa(1 | t, f, n, r)));
  }
  function Uh(e, t) {
    Bl(8390656, 8, e, t);
  }
  function jh(e, t) {
    cr(2048, 8, e, t);
  }
  function Dh(e, t) {
    return cr(4, 2, e, t);
  }
  function zh(e, t) {
    return cr(4, 4, e, t);
  }
  function Lh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function qh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), cr(4, 4, Lh.bind(null, t, e), n));
  }
  function so() {}
  function Bh(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Zu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Hh(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && Zu(t, r[1])) return r[0];
    if (((r = e()), Ui)) {
      rn(!0);
      try {
        e();
      } finally {
        rn(!1);
      }
    }
    return ((n.memoizedState = [r, t]), r);
  }
  function uo(e, t, n) {
    return n === void 0 || (Gn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Qm()), (pe.lanes |= e), (Jn |= e), n);
  }
  function Vh(e, t, n, r) {
    return Mt(n, t)
      ? n
      : ua.current !== null
        ? ((e = uo(e, n, r)), Mt(e, t) || (it = !0), e)
        : (Gn & 42) === 0
          ? ((it = !0), (e.memoizedState = n))
          : ((e = Qm()), (pe.lanes |= e), (Jn |= e), t);
  }
  function Ph(e, t, n, r, o) {
    var f = F.p;
    F.p = f !== 0 && 8 > f ? f : 8;
    var g = B.T,
      v = {};
    ((B.T = v), fo(e, !1, t, n));
    try {
      var E = o(),
        U = B.S;
      if (
        (U !== null && U(v, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var Y = $0(E, r);
        fr(e, t, Y, jt(e));
      } else fr(e, t, r, jt(e));
    } catch (X) {
      fr(e, t, { then: function () {}, status: "rejected", reason: X }, jt());
    } finally {
      ((F.p = f), (B.T = g));
    }
  }
  function J0() {}
  function oo(e, t, n, r) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Qh(e).queue;
    Ph(
      e,
      o,
      t,
      ae,
      n === null
        ? J0
        : function () {
            return (Yh(e), n(r));
          },
    );
  }
  function Qh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: ae,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: An,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Yh(e) {
    var t = Qh(e).next.queue;
    fr(e, t, {}, jt());
  }
  function co() {
    return ht(Mr);
  }
  function Gh() {
    return Xe().memoizedState;
  }
  function Ih() {
    return Xe().memoizedState;
  }
  function W0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = jt();
          e = Qn(n);
          var r = Yn(t, e, n);
          (r !== null && (Dt(r, t, n), rr(r, t, n)),
            (t = { cache: Hu() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function eb(e, t, n) {
    var r = jt();
    ((n = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Hl(e)
        ? Xh(t, n)
        : ((n = xu(e, t, n, r)), n !== null && (Dt(n, e, r), Kh(n, t, r))));
  }
  function $h(e, t, n) {
    var r = jt();
    fr(e, t, n, r);
  }
  function fr(e, t, n, r) {
    var o = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Hl(e)) Xh(t, o);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            v = f(g, n);
          if (((o.hasEagerState = !0), (o.eagerState = v), Mt(v, g)))
            return (Cl(e, t, o, 0), je === null && wl(), !1);
        } catch {
        } finally {
        }
      if (((n = xu(e, t, o, r)), n !== null))
        return (Dt(n, e, r), Kh(n, t, r), !0);
    }
    return !1;
  }
  function fo(e, t, n, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: Yo(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hl(e))
    ) {
      if (t) throw Error(u(479));
    } else ((t = xu(e, n, r, 2)), t !== null && Dt(t, e, 2));
  }
  function Hl(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Xh(e, t) {
    oa = jl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Kh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), id(e, n));
    }
  }
  var Vl = {
      readContext: ht,
      use: zl,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useLayoutEffect: Ye,
      useInsertionEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      useHostTransitionStatus: Ye,
      useFormState: Ye,
      useActionState: Ye,
      useOptimistic: Ye,
      useMemoCache: Ye,
      useCacheRefresh: Ye,
    },
    Zh = {
      readContext: ht,
      use: zl,
      useCallback: function (e, t) {
        return ((At().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ht,
      useEffect: Uh,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Bl(4194308, 4, Lh.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Bl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Bl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = At();
        t = t === void 0 ? null : t;
        var r = e();
        if (Ui) {
          rn(!0);
          try {
            e();
          } finally {
            rn(!1);
          }
        }
        return ((n.memoizedState = [r, t]), r);
      },
      useReducer: function (e, t, n) {
        var r = At();
        if (n !== void 0) {
          var o = n(t);
          if (Ui) {
            rn(!0);
            try {
              n(t);
            } finally {
              rn(!1);
            }
          }
        } else o = t;
        return (
          (r.memoizedState = r.baseState = o),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: o,
          }),
          (r.queue = e),
          (e = e.dispatch = eb.bind(null, pe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = At();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ro(e);
        var t = e.queue,
          n = $h.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: so,
      useDeferredValue: function (e, t) {
        var n = At();
        return uo(n, e, t);
      },
      useTransition: function () {
        var e = ro(!1);
        return (
          (e = Ph.bind(null, pe, e.queue, !0, !1)),
          (At().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var r = pe,
          o = At();
        if (_e) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(u(349));
          (we & 124) !== 0 || vh(r, t, n);
        }
        o.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (o.queue = f),
          Uh(bh.bind(null, r, f, e), [e]),
          (r.flags |= 2048),
          fa(9, ql(), yh.bind(null, r, f, n, t), null),
          n
        );
      },
      useId: function () {
        var e = At(),
          t = je.identifierPrefix;
        if (_e) {
          var n = wn,
            r = En;
          ((n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = Dl++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»"));
        } else ((n = X0++), (t = "«" + t + "r" + n.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: co,
      useFormState: Oh,
      useActionState: Oh,
      useOptimistic: function (e) {
        var t = At();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = fo.bind(null, pe, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: no,
      useCacheRefresh: function () {
        return (At().memoizedState = W0.bind(null, pe));
      },
    },
    Fh = {
      readContext: ht,
      use: zl,
      useCallback: Bh,
      useContext: ht,
      useEffect: jh,
      useImperativeHandle: qh,
      useInsertionEffect: Dh,
      useLayoutEffect: zh,
      useMemo: Hh,
      useReducer: Ll,
      useRef: kh,
      useState: function () {
        return Ll(An);
      },
      useDebugValue: so,
      useDeferredValue: function (e, t) {
        var n = Xe();
        return Vh(n, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ll(An)[0],
          t = Xe().memoizedState;
        return [typeof e == "boolean" ? e : or(e), t];
      },
      useSyncExternalStore: ph,
      useId: Gh,
      useHostTransitionStatus: co,
      useFormState: Mh,
      useActionState: Mh,
      useOptimistic: function (e, t) {
        var n = Xe();
        return wh(n, Me, e, t);
      },
      useMemoCache: no,
      useCacheRefresh: Ih,
    },
    tb = {
      readContext: ht,
      use: zl,
      useCallback: Bh,
      useContext: ht,
      useEffect: jh,
      useImperativeHandle: qh,
      useInsertionEffect: Dh,
      useLayoutEffect: zh,
      useMemo: Hh,
      useReducer: ao,
      useRef: kh,
      useState: function () {
        return ao(An);
      },
      useDebugValue: so,
      useDeferredValue: function (e, t) {
        var n = Xe();
        return Me === null ? uo(n, e, t) : Vh(n, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ao(An)[0],
          t = Xe().memoizedState;
        return [typeof e == "boolean" ? e : or(e), t];
      },
      useSyncExternalStore: ph,
      useId: Gh,
      useHostTransitionStatus: co,
      useFormState: Nh,
      useActionState: Nh,
      useOptimistic: function (e, t) {
        var n = Xe();
        return Me !== null
          ? wh(n, Me, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: no,
      useCacheRefresh: Ih,
    },
    da = null,
    dr = 0;
  function Pl(e) {
    var t = dr;
    return ((dr += 1), da === null && (da = []), uh(da, e, t));
  }
  function hr(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ql(e, t) {
    throw t.$$typeof === w
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Jh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wh(e) {
    function t(O, A) {
      if (e) {
        var k = O.deletions;
        k === null ? ((O.deletions = [A]), (O.flags |= 16)) : k.push(A);
      }
    }
    function n(O, A) {
      if (!e) return null;
      for (; A !== null; ) (t(O, A), (A = A.sibling));
      return null;
    }
    function r(O) {
      for (var A = new Map(); O !== null; )
        (O.key !== null ? A.set(O.key, O) : A.set(O.index, O), (O = O.sibling));
      return A;
    }
    function o(O, A) {
      return ((O = Sn(O, A)), (O.index = 0), (O.sibling = null), O);
    }
    function f(O, A, k) {
      return (
        (O.index = k),
        e
          ? ((k = O.alternate),
            k !== null
              ? ((k = k.index), k < A ? ((O.flags |= 67108866), A) : k)
              : ((O.flags |= 67108866), A))
          : ((O.flags |= 1048576), A)
      );
    }
    function g(O) {
      return (e && O.alternate === null && (O.flags |= 67108866), O);
    }
    function v(O, A, k, I) {
      return A === null || A.tag !== 6
        ? ((A = ku(k, O.mode, I)), (A.return = O), A)
        : ((A = o(A, k)), (A.return = O), A);
    }
    function E(O, A, k, I) {
      var le = k.type;
      return le === R
        ? Y(O, A, k.props.children, I, k.key)
        : A !== null &&
            (A.elementType === le ||
              (typeof le == "object" &&
                le !== null &&
                le.$$typeof === z &&
                Jh(le) === A.type))
          ? ((A = o(A, k.props)), hr(A, k), (A.return = O), A)
          : ((A = Al(k.type, k.key, k.props, null, O.mode, I)),
            hr(A, k),
            (A.return = O),
            A);
    }
    function U(O, A, k, I) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== k.containerInfo ||
        A.stateNode.implementation !== k.implementation
        ? ((A = Uu(k, O.mode, I)), (A.return = O), A)
        : ((A = o(A, k.children || [])), (A.return = O), A);
    }
    function Y(O, A, k, I, le) {
      return A === null || A.tag !== 7
        ? ((A = Ai(k, O.mode, I, le)), (A.return = O), A)
        : ((A = o(A, k)), (A.return = O), A);
    }
    function X(O, A, k) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = ku("" + A, O.mode, k)), (A.return = O), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case C:
            return (
              (k = Al(A.type, A.key, A.props, null, O.mode, k)),
              hr(k, A),
              (k.return = O),
              k
            );
          case S:
            return ((A = Uu(A, O.mode, k)), (A.return = O), A);
          case z:
            var I = A._init;
            return ((A = I(A._payload)), X(O, A, k));
        }
        if (de(A) || W(A))
          return ((A = Ai(A, O.mode, k, null)), (A.return = O), A);
        if (typeof A.then == "function") return X(O, Pl(A), k);
        if (A.$$typeof === D) return X(O, Ml(O, A), k);
        Ql(O, A);
      }
      return null;
    }
    function L(O, A, k, I) {
      var le = A !== null ? A.key : null;
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return le !== null ? null : v(O, A, "" + k, I);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case C:
            return k.key === le ? E(O, A, k, I) : null;
          case S:
            return k.key === le ? U(O, A, k, I) : null;
          case z:
            return ((le = k._init), (k = le(k._payload)), L(O, A, k, I));
        }
        if (de(k) || W(k)) return le !== null ? null : Y(O, A, k, I, null);
        if (typeof k.then == "function") return L(O, A, Pl(k), I);
        if (k.$$typeof === D) return L(O, A, Ml(O, k), I);
        Ql(O, k);
      }
      return null;
    }
    function q(O, A, k, I, le) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return ((O = O.get(k) || null), v(A, O, "" + I, le));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case C:
            return (
              (O = O.get(I.key === null ? k : I.key) || null),
              E(A, O, I, le)
            );
          case S:
            return (
              (O = O.get(I.key === null ? k : I.key) || null),
              U(A, O, I, le)
            );
          case z:
            var ye = I._init;
            return ((I = ye(I._payload)), q(O, A, k, I, le));
        }
        if (de(I) || W(I))
          return ((O = O.get(k) || null), Y(A, O, I, le, null));
        if (typeof I.then == "function") return q(O, A, k, Pl(I), le);
        if (I.$$typeof === D) return q(O, A, k, Ml(A, I), le);
        Ql(A, I);
      }
      return null;
    }
    function fe(O, A, k, I) {
      for (
        var le = null, ye = null, se = A, ce = (A = 0), rt = null;
        se !== null && ce < k.length;
        ce++
      ) {
        se.index > ce ? ((rt = se), (se = null)) : (rt = se.sibling);
        var Ce = L(O, se, k[ce], I);
        if (Ce === null) {
          se === null && (se = rt);
          break;
        }
        (e && se && Ce.alternate === null && t(O, se),
          (A = f(Ce, A, ce)),
          ye === null ? (le = Ce) : (ye.sibling = Ce),
          (ye = Ce),
          (se = rt));
      }
      if (ce === k.length) return (n(O, se), _e && Ri(O, ce), le);
      if (se === null) {
        for (; ce < k.length; ce++)
          ((se = X(O, k[ce], I)),
            se !== null &&
              ((A = f(se, A, ce)),
              ye === null ? (le = se) : (ye.sibling = se),
              (ye = se)));
        return (_e && Ri(O, ce), le);
      }
      for (se = r(se); ce < k.length; ce++)
        ((rt = q(se, O, ce, k[ce], I)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              se.delete(rt.key === null ? ce : rt.key),
            (A = f(rt, A, ce)),
            ye === null ? (le = rt) : (ye.sibling = rt),
            (ye = rt)));
      return (
        e &&
          se.forEach(function (si) {
            return t(O, si);
          }),
        _e && Ri(O, ce),
        le
      );
    }
    function oe(O, A, k, I) {
      if (k == null) throw Error(u(151));
      for (
        var le = null,
          ye = null,
          se = A,
          ce = (A = 0),
          rt = null,
          Ce = k.next();
        se !== null && !Ce.done;
        ce++, Ce = k.next()
      ) {
        se.index > ce ? ((rt = se), (se = null)) : (rt = se.sibling);
        var si = L(O, se, Ce.value, I);
        if (si === null) {
          se === null && (se = rt);
          break;
        }
        (e && se && si.alternate === null && t(O, se),
          (A = f(si, A, ce)),
          ye === null ? (le = si) : (ye.sibling = si),
          (ye = si),
          (se = rt));
      }
      if (Ce.done) return (n(O, se), _e && Ri(O, ce), le);
      if (se === null) {
        for (; !Ce.done; ce++, Ce = k.next())
          ((Ce = X(O, Ce.value, I)),
            Ce !== null &&
              ((A = f(Ce, A, ce)),
              ye === null ? (le = Ce) : (ye.sibling = Ce),
              (ye = Ce)));
        return (_e && Ri(O, ce), le);
      }
      for (se = r(se); !Ce.done; ce++, Ce = k.next())
        ((Ce = q(se, O, ce, Ce.value, I)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              se.delete(Ce.key === null ? ce : Ce.key),
            (A = f(Ce, A, ce)),
            ye === null ? (le = Ce) : (ye.sibling = Ce),
            (ye = Ce)));
      return (
        e &&
          se.forEach(function (nS) {
            return t(O, nS);
          }),
        _e && Ri(O, ce),
        le
      );
    }
    function Ne(O, A, k, I) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === R &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case C:
            e: {
              for (var le = k.key; A !== null; ) {
                if (A.key === le) {
                  if (((le = k.type), le === R)) {
                    if (A.tag === 7) {
                      (n(O, A.sibling),
                        (I = o(A, k.props.children)),
                        (I.return = O),
                        (O = I));
                      break e;
                    }
                  } else if (
                    A.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === z &&
                      Jh(le) === A.type)
                  ) {
                    (n(O, A.sibling),
                      (I = o(A, k.props)),
                      hr(I, k),
                      (I.return = O),
                      (O = I));
                    break e;
                  }
                  n(O, A);
                  break;
                } else t(O, A);
                A = A.sibling;
              }
              k.type === R
                ? ((I = Ai(k.props.children, O.mode, I, k.key)),
                  (I.return = O),
                  (O = I))
                : ((I = Al(k.type, k.key, k.props, null, O.mode, I)),
                  hr(I, k),
                  (I.return = O),
                  (O = I));
            }
            return g(O);
          case S:
            e: {
              for (le = k.key; A !== null; ) {
                if (A.key === le)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === k.containerInfo &&
                    A.stateNode.implementation === k.implementation
                  ) {
                    (n(O, A.sibling),
                      (I = o(A, k.children || [])),
                      (I.return = O),
                      (O = I));
                    break e;
                  } else {
                    n(O, A);
                    break;
                  }
                else t(O, A);
                A = A.sibling;
              }
              ((I = Uu(k, O.mode, I)), (I.return = O), (O = I));
            }
            return g(O);
          case z:
            return ((le = k._init), (k = le(k._payload)), Ne(O, A, k, I));
        }
        if (de(k)) return fe(O, A, k, I);
        if (W(k)) {
          if (((le = W(k)), typeof le != "function")) throw Error(u(150));
          return ((k = le.call(k)), oe(O, A, k, I));
        }
        if (typeof k.then == "function") return Ne(O, A, Pl(k), I);
        if (k.$$typeof === D) return Ne(O, A, Ml(O, k), I);
        Ql(O, k);
      }
      return (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
        ? ((k = "" + k),
          A !== null && A.tag === 6
            ? (n(O, A.sibling), (I = o(A, k)), (I.return = O), (O = I))
            : (n(O, A), (I = ku(k, O.mode, I)), (I.return = O), (O = I)),
          g(O))
        : n(O, A);
    }
    return function (O, A, k, I) {
      try {
        dr = 0;
        var le = Ne(O, A, k, I);
        return ((da = null), le);
      } catch (se) {
        if (se === ir || se === Nl) throw se;
        var ye = xt(29, se, null, O.mode);
        return ((ye.lanes = I), (ye.return = O), ye);
      } finally {
      }
    };
  }
  var ha = Wh(!0),
    em = Wh(!1),
    It = N(null),
    sn = null;
  function In(e) {
    var t = e.alternate;
    (te(Fe, Fe.current & 1),
      te(It, e),
      sn === null &&
        (t === null || ua.current !== null || t.memoizedState !== null) &&
        (sn = e));
  }
  function tm(e) {
    if (e.tag === 22) {
      if ((te(Fe, Fe.current), te(It, e), sn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (sn = e);
      }
    } else $n();
  }
  function $n() {
    (te(Fe, Fe.current), te(It, It.current));
  }
  function Tn(e) {
    (ee(It), sn === e && (sn = null), ee(Fe));
  }
  var Fe = N(0);
  function Yl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || nc(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function ho(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var mo = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = jt(),
        o = Qn(r);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, r)),
        t !== null && (Dt(t, e, r), rr(t, e, r)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = jt(),
        o = Qn(r);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, r)),
        t !== null && (Dt(t, e, r), rr(t, e, r)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = jt(),
        r = Qn(n);
      ((r.tag = 2),
        t != null && (r.callback = t),
        (t = Yn(e, r, n)),
        t !== null && (Dt(t, e, n), rr(t, e, n)));
    },
  };
  function nm(e, t, n, r, o, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ka(n, r) || !Ka(o, f)
          : !0
    );
  }
  function im(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && mo.enqueueReplaceState(t, t.state, null));
  }
  function ji(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t) r !== "ref" && (n[r] = t[r]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = y({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  var Gl =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function am(e) {
    Gl(e);
  }
  function rm(e) {
    console.error(e);
  }
  function lm(e) {
    Gl(e);
  }
  function Il(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function sm(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function go(e, t, n) {
    return (
      (n = Qn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Il(e, t);
      }),
      n
    );
  }
  function um(e) {
    return ((e = Qn(e)), (e.tag = 3), e);
  }
  function om(e, t, n, r) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      ((e.payload = function () {
        return o(f);
      }),
        (e.callback = function () {
          sm(t, n, r);
        }));
    }
    var g = n.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        (sm(t, n, r),
          typeof o != "function" &&
            (Wn === null ? (Wn = new Set([this])) : Wn.add(this)));
        var v = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function nb(e, t, n, r, o) {
    if (
      ((n.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && er(t, n, o, !0),
        (n = It.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              sn === null ? Bo() : n.alternate === null && Qe === 0 && (Qe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              r === Qu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                  Vo(e, r, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              r === Qu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                  Vo(e, r, o)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (Vo(e, r, o), Bo(), !1);
    }
    if (_e)
      return (
        (t = It.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            r !== zu && ((e = Error(u(422), { cause: r })), Wa(Pt(e, n))))
          : (r !== zu && ((t = Error(u(423), { cause: r })), Wa(Pt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (r = Pt(r, n)),
            (o = go(e.stateNode, r, o)),
            Iu(e, o),
            Qe !== 4 && (Qe = 2)),
        !1
      );
    var f = Error(u(520), { cause: r });
    if (
      ((f = Pt(f, n)),
      Sr === null ? (Sr = [f]) : Sr.push(f),
      Qe !== 4 && (Qe = 2),
      t === null)
    )
      return !0;
    ((r = Pt(r, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = o & -o),
            (n.lanes |= e),
            (e = go(n.stateNode, r, e)),
            Iu(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (f = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (Wn === null || !Wn.has(f)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = um(o)),
              om(o, e, n, r),
              Iu(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var cm = Error(u(461)),
    it = !1;
  function ot(e, t, n, r) {
    t.child = e === null ? em(t, null, n, r) : ha(t, e.child, n, r);
  }
  function fm(e, t, n, r, o) {
    n = n.render;
    var f = t.ref;
    if ("ref" in r) {
      var g = {};
      for (var v in r) v !== "ref" && (g[v] = r[v]);
    } else g = r;
    return (
      Ni(t),
      (r = Fu(e, t, n, g, f, o)),
      (v = Ju()),
      e !== null && !it
        ? (Wu(e, t, o), Rn(e, t, o))
        : (_e && v && ju(t), (t.flags |= 1), ot(e, t, r, o), t.child)
    );
  }
  function dm(e, t, n, r, o) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !Nu(f) &&
        f.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = f), hm(e, t, f, r, o))
        : ((e = Al(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !Co(e, o))) {
      var g = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ka), n(g, r) && e.ref === t.ref)
      )
        return Rn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Sn(f, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function hm(e, t, n, r, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ka(f, r) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = r = f), Co(e, o)))
          (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Rn(e, t, o));
    }
    return po(e, t, n, r, o);
  }
  function mm(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      f = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((r = f !== null ? f.baseLanes | n : n), e !== null)) {
          for (o = t.child = e.child, f = 0; o !== null; )
            ((f = f | o.lanes | o.childLanes), (o = o.sibling));
          t.childLanes = f & ~r;
        } else ((t.childLanes = 0), (t.child = null));
        return gm(e, t, r, n);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && xl(t, f !== null ? f.cachePool : null),
          f !== null ? hh(t, f) : Xu(),
          tm(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          gm(e, t, f !== null ? f.baseLanes | n : n, n)
        );
    } else
      f !== null
        ? (xl(t, f.cachePool), hh(t, f), $n(), (t.memoizedState = null))
        : (e !== null && xl(t, null), Xu(), $n());
    return (ot(e, t, o, n), t.child);
  }
  function gm(e, t, n, r) {
    var o = Pu();
    return (
      (o = o === null ? null : { parent: Ze._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && xl(t, null),
      Xu(),
      tm(t),
      e !== null && er(e, t, r, !0),
      null
    );
  }
  function $l(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function po(e, t, n, r, o) {
    return (
      Ni(t),
      (n = Fu(e, t, n, r, void 0, o)),
      (r = Ju()),
      e !== null && !it
        ? (Wu(e, t, o), Rn(e, t, o))
        : (_e && r && ju(t), (t.flags |= 1), ot(e, t, n, o), t.child)
    );
  }
  function pm(e, t, n, r, o, f) {
    return (
      Ni(t),
      (t.updateQueue = null),
      (n = gh(t, r, n, o)),
      mh(e),
      (r = Ju()),
      e !== null && !it
        ? (Wu(e, t, f), Rn(e, t, f))
        : (_e && r && ju(t), (t.flags |= 1), ot(e, t, n, f), t.child)
    );
  }
  function vm(e, t, n, r, o) {
    if ((Ni(t), t.stateNode === null)) {
      var f = ia,
        g = n.contextType;
      (typeof g == "object" && g !== null && (f = ht(g)),
        (f = new n(r, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = mo),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = r),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Yu(t),
        (g = n.contextType),
        (f.context = typeof g == "object" && g !== null ? ht(g) : ia),
        (f.state = t.memoizedState),
        (g = n.getDerivedStateFromProps),
        typeof g == "function" && (ho(t, n, g, r), (f.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          g !== f.state && mo.enqueueReplaceState(f, f.state, null),
          sr(t, r, f, o),
          lr(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (r = !0));
    } else if (e === null) {
      f = t.stateNode;
      var v = t.memoizedProps,
        E = ji(n, v);
      f.props = E;
      var U = f.context,
        Y = n.contextType;
      ((g = ia), typeof Y == "object" && Y !== null && (g = ht(Y)));
      var X = n.getDerivedStateFromProps;
      ((Y =
        typeof X == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        Y ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v || U !== g) && im(t, f, r, g)),
        (Pn = !1));
      var L = t.memoizedState;
      ((f.state = L),
        sr(t, r, f, o),
        lr(),
        (U = t.memoizedState),
        v || L !== U || Pn
          ? (typeof X == "function" && (ho(t, n, X, r), (U = t.memoizedState)),
            (E = Pn || nm(t, n, E, r, L, U, g))
              ? (Y ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = U)),
            (f.props = r),
            (f.state = U),
            (f.context = g),
            (r = E))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((f = t.stateNode),
        Gu(e, t),
        (g = t.memoizedProps),
        (Y = ji(n, g)),
        (f.props = Y),
        (X = t.pendingProps),
        (L = f.context),
        (U = n.contextType),
        (E = ia),
        typeof U == "object" && U !== null && (E = ht(U)),
        (v = n.getDerivedStateFromProps),
        (U =
          typeof v == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== X || L !== E) && im(t, f, r, E)),
        (Pn = !1),
        (L = t.memoizedState),
        (f.state = L),
        sr(t, r, f, o),
        lr());
      var q = t.memoizedState;
      g !== X ||
      L !== q ||
      Pn ||
      (e !== null && e.dependencies !== null && Ol(e.dependencies))
        ? (typeof v == "function" && (ho(t, n, v, r), (q = t.memoizedState)),
          (Y =
            Pn ||
            nm(t, n, Y, r, L, q, E) ||
            (e !== null && e.dependencies !== null && Ol(e.dependencies)))
            ? (U ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(r, q, E),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, q, E)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = q)),
          (f.props = r),
          (f.state = q),
          (f.context = E),
          (r = Y))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return (
      (f = r),
      $l(e, t),
      (r = (t.flags & 128) !== 0),
      f || r
        ? ((f = t.stateNode),
          (n =
            r && typeof n.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && r
            ? ((t.child = ha(t, e.child, null, o)),
              (t.child = ha(t, null, n, o)))
            : ot(e, t, n, o),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Rn(e, t, o)),
      e
    );
  }
  function ym(e, t, n, r) {
    return (Ja(), (t.flags |= 256), ot(e, t, n, r), t.child);
  }
  var vo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function yo(e) {
    return { baseLanes: e, cachePool: rh() };
  }
  function bo(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= $t), e);
  }
  function bm(e, t, n) {
    var r = t.pendingProps,
      o = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0),
      g && ((o = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (_e) {
        if ((o ? In(t) : $n(), _e)) {
          var v = Pe,
            E;
          if ((E = v)) {
            e: {
              for (E = v, v = ln; E.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (((E = en(E.nextSibling)), E === null)) {
                  v = null;
                  break e;
                }
              }
              v = E;
            }
            v !== null
              ? ((t.memoizedState = {
                  dehydrated: v,
                  treeContext: Ti !== null ? { id: En, overflow: wn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = xt(18, null, null, 0)),
                (E.stateNode = v),
                (E.return = t),
                (t.child = E),
                (vt = t),
                (Pe = null),
                (E = !0))
              : (E = !1);
          }
          E || Mi(t);
        }
        if (
          ((v = t.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return (nc(v) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Tn(t);
      }
      return (
        (v = r.children),
        (r = r.fallback),
        o
          ? ($n(),
            (o = t.mode),
            (v = Xl({ mode: "hidden", children: v }, o)),
            (r = Ai(r, o, n, null)),
            (v.return = t),
            (r.return = t),
            (v.sibling = r),
            (t.child = v),
            (o = t.child),
            (o.memoizedState = yo(n)),
            (o.childLanes = bo(e, g, n)),
            (t.memoizedState = vo),
            r)
          : (In(t), So(t, v))
      );
    }
    if (
      ((E = e.memoizedState), E !== null && ((v = E.dehydrated), v !== null))
    ) {
      if (f)
        t.flags & 256
          ? (In(t), (t.flags &= -257), (t = Eo(e, t, n)))
          : t.memoizedState !== null
            ? ($n(), (t.child = e.child), (t.flags |= 128), (t = null))
            : ($n(),
              (o = r.fallback),
              (v = t.mode),
              (r = Xl({ mode: "visible", children: r.children }, v)),
              (o = Ai(o, v, n, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              ha(t, e.child, null, n),
              (r = t.child),
              (r.memoizedState = yo(n)),
              (r.childLanes = bo(e, g, n)),
              (t.memoizedState = vo),
              (t = o));
      else if ((In(t), nc(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var U = g.dgst;
        ((g = U),
          (r = Error(u(419))),
          (r.stack = ""),
          (r.digest = g),
          Wa({ value: r, source: null, stack: null }),
          (t = Eo(e, t, n)));
      } else if (
        (it || er(e, t, n, !1), (g = (n & e.childLanes) !== 0), it || g)
      ) {
        if (
          ((g = je),
          g !== null &&
            ((r = n & -n),
            (r = (r & 42) !== 0 ? 1 : nu(r)),
            (r = (r & (g.suspendedLanes | n)) !== 0 ? 0 : r),
            r !== 0 && r !== E.retryLane))
        )
          throw ((E.retryLane = r), na(e, r), Dt(g, e, r), cm);
        (v.data === "$?" || Bo(), (t = Eo(e, t, n)));
      } else
        v.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (Pe = en(v.nextSibling)),
            (vt = t),
            (_e = !0),
            (Oi = null),
            (ln = !1),
            e !== null &&
              ((Yt[Gt++] = En),
              (Yt[Gt++] = wn),
              (Yt[Gt++] = Ti),
              (En = e.id),
              (wn = e.overflow),
              (Ti = t)),
            (t = So(t, r.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? ($n(),
        (o = r.fallback),
        (v = t.mode),
        (E = e.child),
        (U = E.sibling),
        (r = Sn(E, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = E.subtreeFlags & 65011712),
        U !== null ? (o = Sn(U, o)) : ((o = Ai(o, v, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = yo(n))
          : ((E = v.cachePool),
            E !== null
              ? ((U = Ze._currentValue),
                (E = E.parent !== U ? { parent: U, pool: U } : E))
              : (E = rh()),
            (v = { baseLanes: v.baseLanes | n, cachePool: E })),
        (o.memoizedState = v),
        (o.childLanes = bo(e, g, n)),
        (t.memoizedState = vo),
        r)
      : (In(t),
        (n = e.child),
        (e = n.sibling),
        (n = Sn(n, { mode: "visible", children: r.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function So(e, t) {
    return (
      (t = Xl({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xl(e, t) {
    return (
      (e = xt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Eo(e, t, n) {
    return (
      ha(t, e.child, null, n),
      (e = So(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Sm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), qu(e.return, t, n));
  }
  function wo(e, t, n, r, o) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = r),
        (f.tail = n),
        (f.tailMode = o));
  }
  function Em(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      f = r.tail;
    if ((ot(e, t, r.children, n), (r = Fe.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Sm(e, n, t);
          else if (e.tag === 19) Sm(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    switch ((te(Fe, r), o)) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Yl(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wo(t, !1, o, n, f));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Yl(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        wo(t, !0, n, null, f);
        break;
      case "together":
        wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Rn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Jn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((er(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Sn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Co(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ol(e)));
  }
  function ib(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ee(t, t.stateNode.containerInfo),
          Vn(t, Ze, e.memoizedState.cache),
          Ja());
        break;
      case 27:
      case 5:
        Ot(t);
        break;
      case 4:
        Ee(t, t.stateNode.containerInfo);
        break;
      case 10:
        Vn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (In(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? bm(e, t, n)
              : (In(t), (e = Rn(e, t, n)), e !== null ? e.sibling : null);
        In(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (
          ((r = (n & t.childLanes) !== 0),
          r || (er(e, t, n, !1), (r = (n & t.childLanes) !== 0)),
          o)
        ) {
          if (r) return Em(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          te(Fe, Fe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), mm(e, t, n));
      case 24:
        Vn(t, Ze, e.memoizedState.cache);
    }
    return Rn(e, t, n);
  }
  function wm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) it = !0;
      else {
        if (!Co(e, n) && (t.flags & 128) === 0) return ((it = !1), ib(e, t, n));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), _e && (t.flags & 1048576) !== 0 && Jd(t, Rl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType,
            o = r._init;
          if (((r = o(r._payload)), (t.type = r), typeof r == "function"))
            Nu(r)
              ? ((e = ji(r, e)), (t.tag = 1), (t = vm(null, t, r, e, n)))
              : ((t.tag = 0), (t = po(null, t, r, e, n)));
          else {
            if (r != null) {
              if (((o = r.$$typeof), o === Z)) {
                ((t.tag = 11), (t = fm(null, t, r, e, n)));
                break e;
              } else if (o === J) {
                ((t.tag = 14), (t = dm(null, t, r, e, n)));
                break e;
              }
            }
            throw ((t = ne(r) || r), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return po(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((r = t.type), (o = ji(r, t.pendingProps)), vm(e, t, r, o, n));
      case 3:
        e: {
          if ((Ee(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          r = t.pendingProps;
          var f = t.memoizedState;
          ((o = f.element), Gu(e, t), sr(t, r, null, n));
          var g = t.memoizedState;
          if (
            ((r = g.cache),
            Vn(t, Ze, r),
            r !== f.cache && Bu(t, [Ze], n, !0),
            lr(),
            (r = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: r, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = ym(e, t, r, n);
              break e;
            } else if (r !== o) {
              ((o = Pt(Error(u(424)), t)), Wa(o), (t = ym(e, t, r, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Pe = en(e.firstChild),
                  vt = t,
                  _e = !0,
                  Oi = null,
                  ln = !0,
                  n = em(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ja(), r === o)) {
              t = Rn(e, t, n);
              break e;
            }
            ot(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          $l(e, t),
          e === null
            ? (n = Tg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : _e ||
                ((n = t.type),
                (e = t.pendingProps),
                (r = us(ue.current).createElement(n)),
                (r[dt] = t),
                (r[Ct] = e),
                ft(r, n, e),
                nt(r),
                (t.stateNode = r))
            : (t.memoizedState = Tg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ot(t),
          e === null &&
            _e &&
            ((r = t.stateNode = Cg(t.type, t.pendingProps, ue.current)),
            (vt = t),
            (ln = !0),
            (o = Pe),
            ni(t.type) ? ((ic = o), (Pe = en(r.firstChild))) : (Pe = o)),
          ot(e, t, t.pendingProps.children, n),
          $l(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            _e &&
            ((o = r = Pe) &&
              ((r = Nb(r, t.type, t.pendingProps, ln)),
              r !== null
                ? ((t.stateNode = r),
                  (vt = t),
                  (Pe = en(r.firstChild)),
                  (ln = !1),
                  (o = !0))
                : (o = !1)),
            o || Mi(t)),
          Ot(t),
          (o = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (r = f.children),
          Wo(o, f) ? (r = null) : g !== null && Wo(o, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((o = Fu(e, t, K0, null, null, n)), (Mr._currentValue = o)),
          $l(e, t),
          ot(e, t, r, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            _e &&
            ((e = n = Pe) &&
              ((n = kb(n, t.pendingProps, ln)),
              n !== null
                ? ((t.stateNode = n), (vt = t), (Pe = null), (e = !0))
                : (e = !1)),
            e || Mi(t)),
          null
        );
      case 13:
        return bm(e, t, n);
      case 4:
        return (
          Ee(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ha(t, null, r, n)) : ot(e, t, r, n),
          t.child
        );
      case 11:
        return fm(e, t, t.type, t.pendingProps, n);
      case 7:
        return (ot(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ot(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ot(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (r = t.pendingProps),
          Vn(t, t.type, r.value),
          ot(e, t, r.children, n),
          t.child
        );
      case 9:
        return (
          (o = t.type._context),
          (r = t.pendingProps.children),
          Ni(t),
          (o = ht(o)),
          (r = r(o)),
          (t.flags |= 1),
          ot(e, t, r, n),
          t.child
        );
      case 14:
        return dm(e, t, t.type, t.pendingProps, n);
      case 15:
        return hm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Em(e, t, n);
      case 31:
        return (
          (r = t.pendingProps),
          (n = t.mode),
          (r = { mode: r.mode, children: r.children }),
          e === null
            ? ((n = Xl(r, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Sn(e.child, r)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return mm(e, t, n);
      case 24:
        return (
          Ni(t),
          (r = ht(Ze)),
          e === null
            ? ((o = Pu()),
              o === null &&
                ((o = je),
                (f = Hu()),
                (o.pooledCache = f),
                f.refCount++,
                f !== null && (o.pooledCacheLanes |= n),
                (o = f)),
              (t.memoizedState = { parent: r, cache: o }),
              Yu(t),
              Vn(t, Ze, o))
            : ((e.lanes & n) !== 0 && (Gu(e, t), sr(t, null, null, n), lr()),
              (o = e.memoizedState),
              (f = t.memoizedState),
              o.parent !== r
                ? ((o = { parent: r, cache: r }),
                  (t.memoizedState = o),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = o),
                  Vn(t, Ze, r))
                : ((r = f.cache),
                  Vn(t, Ze, r),
                  r !== o.cache && Bu(t, [Ze], n, !0))),
          ot(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function On(e) {
    e.flags |= 4;
  }
  function Cm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Ng(t))) {
      if (
        ((t = It.current),
        t !== null &&
          ((we & 4194048) === we
            ? sn !== null
            : ((we & 62914560) !== we && (we & 536870912) === 0) || t !== sn))
      )
        throw ((ar = Qu), lh);
      e.flags |= 8192;
    }
  }
  function Kl(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? td() : 536870912), (e.lanes |= t), (va |= t)));
  }
  function mr(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 65011712),
          (r |= o.flags & 65011712),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function ab(e, t, n) {
    var r = t.pendingProps;
    switch ((Du(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Be(t), null);
      case 1:
        return (Be(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          _n(Ze),
          lt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Fa(t)
              ? On(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), th())),
          Be(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (On(t),
              n !== null ? (Be(t), Cm(t, n)) : (Be(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (On(t), Be(t), Cm(t, n))
                : (Be(t), (t.flags &= -16777217))
              : (e.memoizedProps !== r && On(t), Be(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (bi(t), (n = ue.current));
        var o = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== r && On(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (Be(t), null);
          }
          ((e = re.current),
            Fa(t) ? Wd(t) : ((e = Cg(o, r, n)), (t.stateNode = e), On(t)));
        }
        return (Be(t), null);
      case 5:
        if ((bi(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && On(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (Be(t), null);
          }
          if (((e = re.current), Fa(t))) Wd(t);
          else {
            switch (((o = us(ue.current)), e)) {
              case 1:
                e = o.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = o.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((e = o.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof r.is == "string"
                        ? o.createElement("select", { is: r.is })
                        : o.createElement("select")),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size));
                    break;
                  default:
                    e =
                      typeof r.is == "string"
                        ? o.createElement(n, { is: r.is })
                        : o.createElement(n);
                }
            }
            ((e[dt] = t), (e[Ct] = r));
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            t.stateNode = e;
            e: switch ((ft(e, n, r), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && On(t);
          }
        }
        return (Be(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && On(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = ue.current), Fa(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (r = null),
              (o = vt),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  r = o.memoizedProps;
              }
            ((e[dt] = t),
              (e = !!(
                e.nodeValue === n ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                pg(e.nodeValue, n)
              )),
              e || Mi(t));
          } else
            ((e = us(e).createTextNode(r)), (e[dt] = t), (t.stateNode = e));
        }
        return (Be(t), null);
      case 13:
        if (
          ((r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((o = Fa(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(u(317));
              o[dt] = t;
            } else
              (Ja(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Be(t), (o = !1));
          } else
            ((o = th()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = o),
              (o = !0));
          if (!o) return t.flags & 256 ? (Tn(t), t) : (Tn(t), null);
        }
        if ((Tn(t), (t.flags & 128) !== 0)) return ((t.lanes = n), t);
        if (
          ((n = r !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          ((r = t.child),
            (o = null),
            r.alternate !== null &&
              r.alternate.memoizedState !== null &&
              r.alternate.memoizedState.cachePool !== null &&
              (o = r.alternate.memoizedState.cachePool.pool));
          var f = null;
          (r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (f = r.memoizedState.cachePool.pool),
            f !== o && (r.flags |= 2048));
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          Kl(t, t.updateQueue),
          Be(t),
          null
        );
      case 4:
        return (lt(), e === null && Xo(t.stateNode.containerInfo), Be(t), null);
      case 10:
        return (_n(t.type), Be(t), null);
      case 19:
        if ((ee(Fe), (o = t.memoizedState), o === null)) return (Be(t), null);
        if (((r = (t.flags & 128) !== 0), (f = o.rendering), f === null))
          if (r) mr(o, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Yl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      mr(o, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Kl(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (Fd(n, e), (n = n.sibling));
                  return (te(Fe, (Fe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ve() > Jl &&
              ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Yl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Kl(t, e),
                mr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !f.alternate &&
                  !_e)
              )
                return (Be(t), null);
            } else
              2 * Ve() - o.renderingStartTime > Jl &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = o.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (o.last = f));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ve()),
            (t.sibling = null),
            (e = Fe.current),
            te(Fe, r ? (e & 1) | 2 : e & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          Tn(t),
          Ku(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
          (n = t.updateQueue),
          n !== null && Kl(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== n && (t.flags |= 2048),
          e !== null && ee(ki),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          _n(Ze),
          Be(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function rb(e, t) {
    switch ((Du(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          _n(Ze),
          lt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (bi(t), null);
      case 13:
        if (
          (Tn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Ja();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ee(Fe), null);
      case 4:
        return (lt(), null);
      case 10:
        return (_n(t.type), null);
      case 22:
      case 23:
        return (
          Tn(t),
          Ku(),
          e !== null && ee(ki),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (_n(Ze), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(e, t) {
    switch ((Du(t), t.tag)) {
      case 3:
        (_n(Ze), lt());
        break;
      case 26:
      case 27:
      case 5:
        bi(t);
        break;
      case 4:
        lt();
        break;
      case 13:
        Tn(t);
        break;
      case 19:
        ee(Fe);
        break;
      case 10:
        _n(t.type);
        break;
      case 22:
      case 23:
        (Tn(t), Ku(), e !== null && ee(ki));
        break;
      case 24:
        _n(Ze);
    }
  }
  function gr(e, t) {
    try {
      var n = t.updateQueue,
        r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var f = n.create,
              g = n.inst;
            ((r = f()), (g.destroy = r));
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (v) {
      ke(t, t.return, v);
    }
  }
  function Xn(e, t, n) {
    try {
      var r = t.updateQueue,
        o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        r = f;
        do {
          if ((r.tag & e) === e) {
            var g = r.inst,
              v = g.destroy;
            if (v !== void 0) {
              ((g.destroy = void 0), (o = t));
              var E = n,
                U = v;
              try {
                U();
              } catch (Y) {
                ke(o, E, Y);
              }
            }
          }
          r = r.next;
        } while (r !== f);
      }
    } catch (Y) {
      ke(t, t.return, Y);
    }
  }
  function Am(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        dh(t, n);
      } catch (r) {
        ke(e, e.return, r);
      }
    }
  }
  function Tm(e, t, n) {
    ((n.props = ji(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (r) {
      ke(e, t, r);
    }
  }
  function pr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(r)) : (n.current = r);
      }
    } catch (o) {
      ke(e, t, o);
    }
  }
  function un(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (o) {
          ke(e, t, o);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          ke(e, t, o);
        }
      else n.current = null;
  }
  function Rm(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (o) {
      ke(e, e.return, o);
    }
  }
  function _o(e, t, n) {
    try {
      var r = e.stateNode;
      (Tb(r, e.type, n, t), (r[Ct] = t));
    } catch (o) {
      ke(e, e.return, o);
    }
  }
  function Om(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ni(e.type)) ||
      e.tag === 4
    );
  }
  function Ao(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Om(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ni(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function To(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ss)));
    else if (
      r !== 4 &&
      (r === 27 && ni(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (To(e, t, n), e = e.sibling; e !== null; )
        (To(e, t, n), (e = e.sibling));
  }
  function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      r !== 4 &&
      (r === 27 && ni(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Zl(e, t, n), e = e.sibling; e !== null; )
        (Zl(e, t, n), (e = e.sibling));
  }
  function Mm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var r = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      (ft(t, r, n), (t[dt] = e), (t[Ct] = n));
    } catch (f) {
      ke(e, e.return, f);
    }
  }
  var Mn = !1,
    Ge = !1,
    Ro = !1,
    xm = typeof WeakSet == "function" ? WeakSet : Set,
    at = null;
  function lb(e, t) {
    if (((e = e.containerInfo), (Fo = ms), (e = Vd(e)), _u(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              f = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var g = 0,
              v = -1,
              E = -1,
              U = 0,
              Y = 0,
              X = e,
              L = null;
            t: for (;;) {
              for (
                var q;
                X !== n || (o !== 0 && X.nodeType !== 3) || (v = g + o),
                  X !== f || (r !== 0 && X.nodeType !== 3) || (E = g + r),
                  X.nodeType === 3 && (g += X.nodeValue.length),
                  (q = X.firstChild) !== null;

              )
                ((L = X), (X = q));
              for (;;) {
                if (X === e) break t;
                if (
                  (L === n && ++U === o && (v = g),
                  L === f && ++Y === r && (E = g),
                  (q = X.nextSibling) !== null)
                )
                  break;
                ((X = L), (L = X.parentNode));
              }
              X = q;
            }
            n = v === -1 || E === -1 ? null : { start: v, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Jo = { focusedElem: e, selectionRange: n }, ms = !1, at = t;
      at !== null;

    )
      if (
        ((t = at), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (at = e));
      else
        for (; at !== null; ) {
          switch (((t = at), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (n = t),
                  (o = f.memoizedProps),
                  (f = f.memoizedState),
                  (r = n.stateNode));
                try {
                  var fe = ji(n.type, o, n.elementType === n.type);
                  ((e = r.getSnapshotBeforeUpdate(fe, f)),
                    (r.__reactInternalSnapshotBeforeUpdate = e));
                } catch (oe) {
                  ke(n, n.return, oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  tc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (at = e));
            break;
          }
          at = t.return;
        }
  }
  function Nm(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Kn(e, n), r & 4 && gr(5, n));
        break;
      case 1:
        if ((Kn(e, n), r & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              ke(n, n.return, g);
            }
          else {
            var o = ji(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              ke(n, n.return, g);
            }
          }
        (r & 64 && Am(n), r & 512 && pr(n, n.return));
        break;
      case 3:
        if ((Kn(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            dh(e, t);
          } catch (g) {
            ke(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Mm(n);
      case 26:
      case 5:
        (Kn(e, n), t === null && r & 4 && Rm(n), r & 512 && pr(n, n.return));
        break;
      case 12:
        Kn(e, n);
        break;
      case 13:
        (Kn(e, n),
          r & 4 && jm(e, n),
          r & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = gb.bind(null, n)), Ub(e, n)))));
        break;
      case 22:
        if (((r = n.memoizedState !== null || Mn), !r)) {
          ((t = (t !== null && t.memoizedState !== null) || Ge), (o = Mn));
          var f = Ge;
          ((Mn = r),
            (Ge = t) && !f ? Zn(e, n, (n.subtreeFlags & 8772) !== 0) : Kn(e, n),
            (Mn = o),
            (Ge = f));
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function km(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), km(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ru(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var De = null,
    Tt = !1;
  function xn(e, t, n) {
    for (n = n.child; n !== null; ) (Um(e, t, n), (n = n.sibling));
  }
  function Um(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(pt, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ge || un(n, t),
          xn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ge || un(n, t);
        var r = De,
          o = Tt;
        (ni(n.type) && ((De = n.stateNode), (Tt = !1)),
          xn(e, t, n),
          Ar(n.stateNode),
          (De = r),
          (Tt = o));
        break;
      case 5:
        Ge || un(n, t);
      case 6:
        if (
          ((r = De),
          (o = Tt),
          (De = null),
          xn(e, t, n),
          (De = r),
          (Tt = o),
          De !== null)
        )
          if (Tt)
            try {
              (De.nodeType === 9
                ? De.body
                : De.nodeName === "HTML"
                  ? De.ownerDocument.body
                  : De
              ).removeChild(n.stateNode);
            } catch (f) {
              ke(n, t, f);
            }
          else
            try {
              De.removeChild(n.stateNode);
            } catch (f) {
              ke(n, t, f);
            }
        break;
      case 18:
        De !== null &&
          (Tt
            ? ((e = De),
              Eg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              Ur(e))
            : Eg(De, n.stateNode));
        break;
      case 4:
        ((r = De),
          (o = Tt),
          (De = n.stateNode.containerInfo),
          (Tt = !0),
          xn(e, t, n),
          (De = r),
          (Tt = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ge || Xn(2, n, t), Ge || Xn(4, n, t), xn(e, t, n));
        break;
      case 1:
        (Ge ||
          (un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function" && Tm(n, t, r)),
          xn(e, t, n));
        break;
      case 21:
        xn(e, t, n);
        break;
      case 22:
        ((Ge = (r = Ge) || n.memoizedState !== null), xn(e, t, n), (Ge = r));
        break;
      default:
        xn(e, t, n);
    }
  }
  function jm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ur(e);
      } catch (n) {
        ke(t, t.return, n);
      }
  }
  function sb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new xm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xm()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Oo(e, t) {
    var n = sb(e);
    t.forEach(function (r) {
      var o = pb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r],
          f = e,
          g = t,
          v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ni(v.type)) {
                ((De = v.stateNode), (Tt = !1));
                break e;
              }
              break;
            case 5:
              ((De = v.stateNode), (Tt = !1));
              break e;
            case 3:
            case 4:
              ((De = v.stateNode.containerInfo), (Tt = !0));
              break e;
          }
          v = v.return;
        }
        if (De === null) throw Error(u(160));
        (Um(f, g, o),
          (De = null),
          (Tt = !1),
          (f = o.alternate),
          f !== null && (f.return = null),
          (o.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Dm(t, e), (t = t.sibling));
  }
  var Wt = null;
  function Dm(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Nt(t, e),
          kt(e),
          r & 4 && (Xn(3, e, e.return), gr(3, e), Xn(5, e, e.return)));
        break;
      case 1:
        (Nt(t, e),
          kt(e),
          r & 512 && (Ge || n === null || un(n, n.return)),
          r & 64 &&
            Mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
        break;
      case 26:
        var o = Wt;
        if (
          (Nt(t, e),
          kt(e),
          r & 512 && (Ge || n === null || un(n, n.return)),
          r & 4)
        ) {
          var f = n !== null ? n.memoizedState : null;
          if (((r = e.memoizedState), n === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  ((r = e.type),
                    (n = e.memoizedProps),
                    (o = o.ownerDocument || o));
                  t: switch (r) {
                    case "title":
                      ((f = o.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Ha] ||
                          f[dt] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = o.createElement(r)),
                          o.head.insertBefore(
                            f,
                            o.querySelector("head > title"),
                          )),
                        ft(f, r, n),
                        (f[dt] = e),
                        nt(f),
                        (r = f));
                      break e;
                    case "link":
                      var g = Mg("link", "href", o).get(r + (n.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              f.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              f.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              f.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = o.createElement(r)),
                        ft(f, r, n),
                        o.head.appendChild(f));
                      break;
                    case "meta":
                      if (
                        (g = Mg("meta", "content", o).get(
                          r + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              f.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              f.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              f.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = o.createElement(r)),
                        ft(f, r, n),
                        o.head.appendChild(f));
                      break;
                    default:
                      throw Error(u(468, r));
                  }
                  ((f[dt] = e), nt(f), (r = f));
                }
                e.stateNode = r;
              } else xg(o, e.type, e.stateNode);
            else e.stateNode = Og(o, r, e.memoizedProps);
          else
            f !== r
              ? (f === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : f.count--,
                r === null
                  ? xg(o, e.type, e.stateNode)
                  : Og(o, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                _o(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Nt(t, e),
          kt(e),
          r & 512 && (Ge || n === null || un(n, n.return)),
          n !== null && r & 4 && _o(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Nt(t, e),
          kt(e),
          r & 512 && (Ge || n === null || un(n, n.return)),
          e.flags & 32)
        ) {
          o = e.stateNode;
          try {
            Ki(o, "");
          } catch (q) {
            ke(e, e.return, q);
          }
        }
        (r & 4 &&
          e.stateNode != null &&
          ((o = e.memoizedProps), _o(e, o, n !== null ? n.memoizedProps : o)),
          r & 1024 && (Ro = !0));
        break;
      case 6:
        if ((Nt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((r = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = r;
          } catch (q) {
            ke(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((fs = null),
          (o = Wt),
          (Wt = os(t.containerInfo)),
          Nt(t, e),
          (Wt = o),
          kt(e),
          r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ur(t.containerInfo);
          } catch (q) {
            ke(e, e.return, q);
          }
        Ro && ((Ro = !1), zm(e));
        break;
      case 4:
        ((r = Wt),
          (Wt = os(e.stateNode.containerInfo)),
          Nt(t, e),
          kt(e),
          (Wt = r));
        break;
      case 12:
        (Nt(t, e), kt(e));
        break;
      case 13:
        (Nt(t, e),
          kt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (jo = Ve()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Oo(e, r))));
        break;
      case 22:
        o = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          U = Mn,
          Y = Ge;
        if (
          ((Mn = U || o),
          (Ge = Y || E),
          Nt(t, e),
          (Ge = Y),
          (Mn = U),
          kt(e),
          r & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = o ? t._visibility & -2 : t._visibility | 1,
              o && (n === null || E || Mn || Ge || Di(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (((f = E.stateNode), o))
                    ((g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"));
                  else {
                    v = E.stateNode;
                    var X = E.memoizedProps.style,
                      L =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    v.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (q) {
                  ke(E, E.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = o ? "" : E.memoizedProps;
                } catch (q) {
                  ke(E, E.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((n = r.retryQueue),
            n !== null && ((r.retryQueue = null), Oo(e, n))));
        break;
      case 19:
        (Nt(t, e),
          kt(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Oo(e, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Nt(t, e), kt(e));
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (Om(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              f = Ao(e);
            Zl(e, f, o);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (Ki(g, ""), (n.flags &= -33));
            var v = Ao(e);
            Zl(e, v, g);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              U = Ao(e);
            To(e, U, E);
            break;
          default:
            throw Error(u(161));
        }
      } catch (Y) {
        ke(e, e.return, Y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (zm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Nm(e, t.alternate, t), (t = t.sibling));
  }
  function Di(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Xn(4, t, t.return), Di(t));
          break;
        case 1:
          un(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Tm(t, t.return, n),
            Di(t));
          break;
        case 27:
          Ar(t.stateNode);
        case 26:
        case 5:
          (un(t, t.return), Di(t));
          break;
        case 22:
          t.memoizedState === null && Di(t);
          break;
        case 30:
          Di(t);
          break;
        default:
          Di(t);
      }
      e = e.sibling;
    }
  }
  function Zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        o = e,
        f = t,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Zn(o, f, n), gr(4, f));
          break;
        case 1:
          if (
            (Zn(o, f, n),
            (r = f),
            (o = r.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (U) {
              ke(r, r.return, U);
            }
          if (((r = f), (o = r.updateQueue), o !== null)) {
            var v = r.stateNode;
            try {
              var E = o.shared.hiddenCallbacks;
              if (E !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < E.length; o++)
                  fh(E[o], v);
            } catch (U) {
              ke(r, r.return, U);
            }
          }
          (n && g & 64 && Am(f), pr(f, f.return));
          break;
        case 27:
          Mm(f);
        case 26:
        case 5:
          (Zn(o, f, n), n && r === null && g & 4 && Rm(f), pr(f, f.return));
          break;
        case 12:
          Zn(o, f, n);
          break;
        case 13:
          (Zn(o, f, n), n && g & 4 && jm(o, f));
          break;
        case 22:
          (f.memoizedState === null && Zn(o, f, n), pr(f, f.return));
          break;
        case 30:
          break;
        default:
          Zn(o, f, n);
      }
      t = t.sibling;
    }
  }
  function Mo(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && tr(n)));
  }
  function xo(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && tr(e)));
  }
  function on(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Lm(e, t, n, r), (t = t.sibling));
  }
  function Lm(e, t, n, r) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (on(e, t, n, r), o & 2048 && gr(9, t));
        break;
      case 1:
        on(e, t, n, r);
        break;
      case 3:
        (on(e, t, n, r),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && tr(e))));
        break;
      case 12:
        if (o & 2048) {
          (on(e, t, n, r), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              g = f.id,
              v = f.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            ke(t, t.return, E);
          }
        } else on(e, t, n, r);
        break;
      case 13:
        on(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? on(e, t, n, r)
              : vr(e, t)
            : f._visibility & 2
              ? on(e, t, n, r)
              : ((f._visibility |= 2),
                ma(e, t, n, r, (t.subtreeFlags & 10256) !== 0)),
          o & 2048 && Mo(g, t));
        break;
      case 24:
        (on(e, t, n, r), o & 2048 && xo(t.alternate, t));
        break;
      default:
        on(e, t, n, r);
    }
  }
  function ma(e, t, n, r, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        g = t,
        v = n,
        E = r,
        U = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (ma(f, g, v, E, o), gr(8, g));
          break;
        case 23:
          break;
        case 22:
          var Y = g.stateNode;
          (g.memoizedState !== null
            ? Y._visibility & 2
              ? ma(f, g, v, E, o)
              : vr(f, g)
            : ((Y._visibility |= 2), ma(f, g, v, E, o)),
            o && U & 2048 && Mo(g.alternate, g));
          break;
        case 24:
          (ma(f, g, v, E, o), o && U & 2048 && xo(g.alternate, g));
          break;
        default:
          ma(f, g, v, E, o);
      }
      t = t.sibling;
    }
  }
  function vr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          r = t,
          o = r.flags;
        switch (r.tag) {
          case 22:
            (vr(n, r), o & 2048 && Mo(r.alternate, r));
            break;
          case 24:
            (vr(n, r), o & 2048 && xo(r.alternate, r));
            break;
          default:
            vr(n, r);
        }
        t = t.sibling;
      }
  }
  var yr = 8192;
  function ga(e) {
    if (e.subtreeFlags & yr)
      for (e = e.child; e !== null; ) (qm(e), (e = e.sibling));
  }
  function qm(e) {
    switch (e.tag) {
      case 26:
        (ga(e),
          e.flags & yr &&
            e.memoizedState !== null &&
            Ib(Wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ga(e);
        break;
      case 3:
      case 4:
        var t = Wt;
        ((Wt = os(e.stateNode.containerInfo)), ga(e), (Wt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = yr), (yr = 16777216), ga(e), (yr = t))
            : ga(e));
        break;
      default:
        ga(e);
    }
  }
  function Bm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function br(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((at = r), Vm(r, e));
        }
      Bm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Hm(e), (e = e.sibling));
  }
  function Hm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (br(e), e.flags & 2048 && Xn(9, e, e.return));
        break;
      case 3:
        br(e);
        break;
      case 12:
        br(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Fl(e))
          : br(e);
        break;
      default:
        br(e);
    }
  }
  function Fl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((at = r), Vm(r, e));
        }
      Bm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Xn(8, t, t.return), Fl(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
          break;
        default:
          Fl(t);
      }
      e = e.sibling;
    }
  }
  function Vm(e, t) {
    for (; at !== null; ) {
      var n = at;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          tr(n.memoizedState.cache);
      }
      if (((r = n.child), r !== null)) ((r.return = n), (at = r));
      else
        e: for (n = e; at !== null; ) {
          r = at;
          var o = r.sibling,
            f = r.return;
          if ((km(r), r === n)) {
            at = null;
            break e;
          }
          if (o !== null) {
            ((o.return = f), (at = o));
            break e;
          }
          at = f;
        }
    }
  }
  var ub = {
      getCacheForType: function (e) {
        var t = ht(Ze),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
    },
    ob = typeof WeakMap == "function" ? WeakMap : Map,
    Re = 0,
    je = null,
    be = null,
    we = 0,
    Oe = 0,
    Ut = null,
    Fn = !1,
    pa = !1,
    No = !1,
    Nn = 0,
    Qe = 0,
    Jn = 0,
    zi = 0,
    ko = 0,
    $t = 0,
    va = 0,
    Sr = null,
    Rt = null,
    Uo = !1,
    jo = 0,
    Jl = 1 / 0,
    Wl = null,
    Wn = null,
    ct = 0,
    ei = null,
    ya = null,
    ba = 0,
    Do = 0,
    zo = null,
    Pm = null,
    Er = 0,
    Lo = null;
  function jt() {
    if ((Re & 2) !== 0 && we !== 0) return we & -we;
    if (B.T !== null) {
      var e = la;
      return e !== 0 ? e : Yo();
    }
    return ad();
  }
  function Qm() {
    $t === 0 && ($t = (we & 536870912) === 0 || _e ? ed() : 536870912);
    var e = It.current;
    return (e !== null && (e.flags |= 32), $t);
  }
  function Dt(e, t, n) {
    (((e === je && (Oe === 2 || Oe === 9)) || e.cancelPendingCommit !== null) &&
      (Sa(e, 0), ti(e, we, $t, !1)),
      Ba(e, n),
      ((Re & 2) === 0 || e !== je) &&
        (e === je &&
          ((Re & 2) === 0 && (zi |= n), Qe === 4 && ti(e, we, $t, !1)),
        cn(e)));
  }
  function Ym(e, t, n) {
    if ((Re & 6) !== 0) throw Error(u(327));
    var r = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || qa(e, t),
      o = r ? db(e, t) : Ho(e, t, !0),
      f = r;
    do {
      if (o === 0) {
        pa && !r && ti(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), f && !cb(n))) {
          ((o = Ho(e, t, !1)), (f = !1));
          continue;
        }
        if (o === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else
            ((g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
          if (g !== 0) {
            t = g;
            e: {
              var v = e;
              o = Sr;
              var E = v.current.memoizedState.isDehydrated;
              if ((E && (Sa(v, g).flags |= 256), (g = Ho(v, g, !1)), g !== 2)) {
                if (No && !E) {
                  ((v.errorRecoveryDisabledLanes |= f), (zi |= f), (o = 4));
                  break e;
                }
                ((f = Rt),
                  (Rt = o),
                  f !== null &&
                    (Rt === null ? (Rt = f) : Rt.push.apply(Rt, f)));
              }
              o = g;
            }
            if (((f = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (Sa(e, 0), ti(e, t, 0, !0));
          break;
        }
        e: {
          switch (((r = e), (f = o), f)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ti(r, t, $t, !Fn);
              break e;
            case 2:
              Rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((o = jo + 300 - Ve()), 10 < o)) {
            if ((ti(r, t, $t, !Fn), cl(r, 0, !0) !== 0)) break e;
            r.timeoutHandle = bg(
              Gm.bind(null, r, n, Rt, Wl, Uo, t, $t, zi, va, Fn, f, 2, -0, 0),
              o,
            );
            break e;
          }
          Gm(r, n, Rt, Wl, Uo, t, $t, zi, va, Fn, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    cn(e);
  }
  function Gm(e, t, n, r, o, f, g, v, E, U, Y, X, L, q) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((Or = { stylesheets: null, count: 0, unsuspend: Gb }),
        qm(t),
        (X = $b()),
        X !== null))
    ) {
      ((e.cancelPendingCommit = X(
        Jm.bind(null, e, t, f, n, r, o, g, v, E, Y, 1, L, q),
      )),
        ti(e, f, g, !U));
      return;
    }
    Jm(e, t, f, n, r, o, g, v, E);
  }
  function cb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            f = o.getSnapshot;
          o = o.value;
          try {
            if (!Mt(f(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ti(e, t, n, r) {
    ((t &= ~ko),
      (t &= ~zi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes));
    for (var o = t; 0 < o; ) {
      var f = 31 - ut(o),
        g = 1 << f;
      ((r[f] = -1), (o &= ~g));
    }
    n !== 0 && nd(e, n, t);
  }
  function es() {
    return (Re & 6) === 0 ? (wr(0), !1) : !0;
  }
  function qo() {
    if (be !== null) {
      if (Oe === 0) var e = be.return;
      else ((e = be), (Cn = xi = null), eo(e), (da = null), (dr = 0), (e = be));
      for (; e !== null; ) (_m(e.alternate, e), (e = e.return));
      be = null;
    }
  }
  function Sa(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Ob(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      qo(),
      (je = e),
      (be = n = Sn(e.current, null)),
      (we = t),
      (Oe = 0),
      (Ut = null),
      (Fn = !1),
      (pa = qa(e, t)),
      (No = !1),
      (va = $t = ko = zi = Jn = Qe = 0),
      (Rt = Sr = null),
      (Uo = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var o = 31 - ut(r),
          f = 1 << o;
        ((t |= e[o]), (r &= ~f));
      }
    return ((Nn = t), wl(), n);
  }
  function Im(e, t) {
    ((pe = null),
      (B.H = Vl),
      t === ir || t === Nl
        ? ((t = oh()), (Oe = 3))
        : t === lh
          ? ((t = oh()), (Oe = 4))
          : (Oe =
              t === cm
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ut = t),
      be === null && ((Qe = 1), Il(e, Pt(t, e.current))));
  }
  function $m() {
    var e = B.H;
    return ((B.H = Vl), e === null ? Vl : e);
  }
  function Xm() {
    var e = B.A;
    return ((B.A = ub), e);
  }
  function Bo() {
    ((Qe = 4),
      Fn || ((we & 4194048) !== we && It.current !== null) || (pa = !0),
      ((Jn & 134217727) === 0 && (zi & 134217727) === 0) ||
        je === null ||
        ti(je, we, $t, !1));
  }
  function Ho(e, t, n) {
    var r = Re;
    Re |= 2;
    var o = $m(),
      f = Xm();
    ((je !== e || we !== t) && ((Wl = null), Sa(e, t)), (t = !1));
    var g = Qe;
    e: do
      try {
        if (Oe !== 0 && be !== null) {
          var v = be,
            E = Ut;
          switch (Oe) {
            case 8:
              (qo(), (g = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (t = !0);
              var U = Oe;
              if (((Oe = 0), (Ut = null), Ea(e, v, E, U), n && pa)) {
                g = 0;
                break e;
              }
              break;
            default:
              ((U = Oe), (Oe = 0), (Ut = null), Ea(e, v, E, U));
          }
        }
        (fb(), (g = Qe));
        break;
      } catch (Y) {
        Im(e, Y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Cn = xi = null),
      (Re = r),
      (B.H = o),
      (B.A = f),
      be === null && ((je = null), (we = 0), wl()),
      g
    );
  }
  function fb() {
    for (; be !== null; ) Km(be);
  }
  function db(e, t) {
    var n = Re;
    Re |= 2;
    var r = $m(),
      o = Xm();
    je !== e || we !== t
      ? ((Wl = null), (Jl = Ve() + 500), Sa(e, t))
      : (pa = qa(e, t));
    e: do
      try {
        if (Oe !== 0 && be !== null) {
          t = be;
          var f = Ut;
          t: switch (Oe) {
            case 1:
              ((Oe = 0), (Ut = null), Ea(e, t, f, 1));
              break;
            case 2:
            case 9:
              if (sh(f)) {
                ((Oe = 0), (Ut = null), Zm(t));
                break;
              }
              ((t = function () {
                ((Oe !== 2 && Oe !== 9) || je !== e || (Oe = 7), cn(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              sh(f)
                ? ((Oe = 0), (Ut = null), Zm(t))
                : ((Oe = 0), (Ut = null), Ea(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (be.tag) {
                case 26:
                  g = be.memoizedState;
                case 5:
                case 27:
                  var v = be;
                  if (!g || Ng(g)) {
                    ((Oe = 0), (Ut = null));
                    var E = v.sibling;
                    if (E !== null) be = E;
                    else {
                      var U = v.return;
                      U !== null ? ((be = U), ts(U)) : (be = null);
                    }
                    break t;
                  }
              }
              ((Oe = 0), (Ut = null), Ea(e, t, f, 5));
              break;
            case 6:
              ((Oe = 0), (Ut = null), Ea(e, t, f, 6));
              break;
            case 8:
              (qo(), (Qe = 6));
              break e;
            default:
              throw Error(u(462));
          }
        }
        hb();
        break;
      } catch (Y) {
        Im(e, Y);
      }
    while (!0);
    return (
      (Cn = xi = null),
      (B.H = r),
      (B.A = o),
      (Re = n),
      be !== null ? 0 : ((je = null), (we = 0), wl(), Qe)
    );
  }
  function hb() {
    for (; be !== null && !et(); ) Km(be);
  }
  function Km(e) {
    var t = wm(e.alternate, e, Nn);
    ((e.memoizedProps = e.pendingProps), t === null ? ts(e) : (be = t));
  }
  function Zm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = pm(n, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = pm(n, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        eo(t);
      default:
        (_m(n, t), (t = be = Fd(t, Nn)), (t = wm(n, t, Nn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ts(e) : (be = t));
  }
  function Ea(e, t, n, r) {
    ((Cn = xi = null), eo(t), (da = null), (dr = 0));
    var o = t.return;
    try {
      if (nb(e, o, t, n, we)) {
        ((Qe = 1), Il(e, Pt(n, e.current)), (be = null));
        return;
      }
    } catch (f) {
      if (o !== null) throw ((be = o), f);
      ((Qe = 1), Il(e, Pt(n, e.current)), (be = null));
      return;
    }
    t.flags & 32768
      ? (_e || r === 1
          ? (e = !0)
          : pa || (we & 536870912) !== 0
            ? (e = !1)
            : ((Fn = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = It.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        Fm(t, e))
      : ts(t);
  }
  function ts(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fm(t, Fn);
        return;
      }
      e = t.return;
      var n = ab(t.alternate, t, Nn);
      if (n !== null) {
        be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Fm(e, t) {
    do {
      var n = rb(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (be = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    ((Qe = 6), (be = null));
  }
  function Jm(e, t, n, r, o, f, g, v, E) {
    e.cancelPendingCommit = null;
    do ns();
    while (ct !== 0);
    if ((Re & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Mu),
        Gy(e, n, f, g, v, E),
        e === je && ((be = je = null), (we = 0)),
        (ya = t),
        (ei = e),
        (ba = n),
        (Do = f),
        (zo = o),
        (Pm = r),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            vb(Et, function () {
              return (ig(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = B.T), (B.T = null), (o = F.p), (F.p = 2), (g = Re), (Re |= 4));
        try {
          lb(e, t, n);
        } finally {
          ((Re = g), (F.p = o), (B.T = r));
        }
      }
      ((ct = 1), Wm(), eg(), tg());
    }
  }
  function Wm() {
    if (ct === 1) {
      ct = 0;
      var e = ei,
        t = ya,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = B.T), (B.T = null));
        var r = F.p;
        F.p = 2;
        var o = Re;
        Re |= 4;
        try {
          Dm(t, e);
          var f = Jo,
            g = Vd(e.containerInfo),
            v = f.focusedElem,
            E = f.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            Hd(v.ownerDocument.documentElement, v)
          ) {
            if (E !== null && _u(v)) {
              var U = E.start,
                Y = E.end;
              if ((Y === void 0 && (Y = U), "selectionStart" in v))
                ((v.selectionStart = U),
                  (v.selectionEnd = Math.min(Y, v.value.length)));
              else {
                var X = v.ownerDocument || document,
                  L = (X && X.defaultView) || window;
                if (L.getSelection) {
                  var q = L.getSelection(),
                    fe = v.textContent.length,
                    oe = Math.min(E.start, fe),
                    Ne = E.end === void 0 ? oe : Math.min(E.end, fe);
                  !q.extend && oe > Ne && ((g = Ne), (Ne = oe), (oe = g));
                  var O = Bd(v, oe),
                    A = Bd(v, Ne);
                  if (
                    O &&
                    A &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== O.node ||
                      q.anchorOffset !== O.offset ||
                      q.focusNode !== A.node ||
                      q.focusOffset !== A.offset)
                  ) {
                    var k = X.createRange();
                    (k.setStart(O.node, O.offset),
                      q.removeAllRanges(),
                      oe > Ne
                        ? (q.addRange(k), q.extend(A.node, A.offset))
                        : (k.setEnd(A.node, A.offset), q.addRange(k)));
                  }
                }
              }
            }
            for (X = [], q = v; (q = q.parentNode); )
              q.nodeType === 1 &&
                X.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < X.length;
              v++
            ) {
              var I = X[v];
              ((I.element.scrollLeft = I.left), (I.element.scrollTop = I.top));
            }
          }
          ((ms = !!Fo), (Jo = Fo = null));
        } finally {
          ((Re = o), (F.p = r), (B.T = n));
        }
      }
      ((e.current = t), (ct = 2));
    }
  }
  function eg() {
    if (ct === 2) {
      ct = 0;
      var e = ei,
        t = ya,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = B.T), (B.T = null));
        var r = F.p;
        F.p = 2;
        var o = Re;
        Re |= 4;
        try {
          Nm(e, t.alternate, t);
        } finally {
          ((Re = o), (F.p = r), (B.T = n));
        }
      }
      ct = 3;
    }
  }
  function tg() {
    if (ct === 4 || ct === 3) {
      ((ct = 0), qe());
      var e = ei,
        t = ya,
        n = ba,
        r = Pm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ct = 5)
        : ((ct = 0), (ya = ei = null), ng(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (
        (o === 0 && (Wn = null),
        iu(n),
        (t = t.stateNode),
        st && typeof st.onCommitFiberRoot == "function")
      )
        try {
          st.onCommitFiberRoot(pt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((t = B.T), (o = F.p), (F.p = 2), (B.T = null));
        try {
          for (var f = e.onRecoverableError, g = 0; g < r.length; g++) {
            var v = r[g];
            f(v.value, { componentStack: v.stack });
          }
        } finally {
          ((B.T = t), (F.p = o));
        }
      }
      ((ba & 3) !== 0 && ns(),
        cn(e),
        (o = e.pendingLanes),
        (n & 4194090) !== 0 && (o & 42) !== 0
          ? e === Lo
            ? Er++
            : ((Er = 0), (Lo = e))
          : (Er = 0),
        wr(0));
    }
  }
  function ng(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), tr(t)));
  }
  function ns(e) {
    return (Wm(), eg(), tg(), ig());
  }
  function ig() {
    if (ct !== 5) return !1;
    var e = ei,
      t = Do;
    Do = 0;
    var n = iu(ba),
      r = B.T,
      o = F.p;
    try {
      ((F.p = 32 > n ? 32 : n), (B.T = null), (n = zo), (zo = null));
      var f = ei,
        g = ba;
      if (((ct = 0), (ya = ei = null), (ba = 0), (Re & 6) !== 0))
        throw Error(u(331));
      var v = Re;
      if (
        ((Re |= 4),
        Hm(f.current),
        Lm(f, f.current, g, n),
        (Re = v),
        wr(0, !1),
        st && typeof st.onPostCommitFiberRoot == "function")
      )
        try {
          st.onPostCommitFiberRoot(pt, f);
        } catch {}
      return !0;
    } finally {
      ((F.p = o), (B.T = r), ng(e, t));
    }
  }
  function ag(e, t, n) {
    ((t = Pt(n, t)),
      (t = go(e.stateNode, t, 2)),
      (e = Yn(e, t, 2)),
      e !== null && (Ba(e, 2), cn(e)));
  }
  function ke(e, t, n) {
    if (e.tag === 3) ag(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ag(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Wn === null || !Wn.has(r)))
          ) {
            ((e = Pt(n, e)),
              (n = um(2)),
              (r = Yn(t, n, 2)),
              r !== null && (om(n, r, t, e), Ba(r, 2), cn(r)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vo(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ob();
      var o = new Set();
      r.set(t, o);
    } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
    o.has(n) ||
      ((No = !0), o.add(n), (e = mb.bind(null, e, t, n)), t.then(e, e));
  }
  function mb(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      je === e &&
        (we & n) === n &&
        (Qe === 4 || (Qe === 3 && (we & 62914560) === we && 300 > Ve() - jo)
          ? (Re & 2) === 0 && Sa(e, 0)
          : (ko |= n),
        va === we && (va = 0)),
      cn(e));
  }
  function rg(e, t) {
    (t === 0 && (t = td()), (e = na(e, t)), e !== null && (Ba(e, t), cn(e)));
  }
  function gb(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), rg(e, n));
  }
  function pb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (r !== null && r.delete(t), rg(e, n));
  }
  function vb(e, t) {
    return Te(e, t);
  }
  var is = null,
    wa = null,
    Po = !1,
    as = !1,
    Qo = !1,
    Li = 0;
  function cn(e) {
    (e !== wa &&
      e.next === null &&
      (wa === null ? (is = wa = e) : (wa = wa.next = e)),
      (as = !0),
      Po || ((Po = !0), bb()));
  }
  function wr(e, t) {
    if (!Qo && as) {
      Qo = !0;
      do
        for (var n = !1, r = is; r !== null; ) {
          if (e !== 0) {
            var o = r.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var g = r.suspendedLanes,
                v = r.pingedLanes;
              ((f = (1 << (31 - ut(42 | e) + 1)) - 1),
                (f &= o & ~(g & ~v)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((n = !0), og(r, f));
          } else
            ((f = we),
              (f = cl(
                r,
                r === je ? f : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || qa(r, f) || ((n = !0), og(r, f)));
          r = r.next;
        }
      while (n);
      Qo = !1;
    }
  }
  function yb() {
    lg();
  }
  function lg() {
    as = Po = !1;
    var e = 0;
    Li !== 0 && (Rb() && (e = Li), (Li = 0));
    for (var t = Ve(), n = null, r = is; r !== null; ) {
      var o = r.next,
        f = sg(r, t);
      (f === 0
        ? ((r.next = null),
          n === null ? (is = o) : (n.next = o),
          o === null && (wa = n))
        : ((n = r), (e !== 0 || (f & 3) !== 0) && (as = !0)),
        (r = o));
    }
    wr(e);
  }
  function sg(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var g = 31 - ut(f),
        v = 1 << g,
        E = o[g];
      (E === -1
        ? ((v & n) === 0 || (v & r) !== 0) && (o[g] = Yy(v, t))
        : E <= t && (e.expiredLanes |= v),
        (f &= ~v));
    }
    if (
      ((t = je),
      (n = we),
      (n = cl(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (r = e.callbackNode),
      n === 0 ||
        (e === t && (Oe === 2 || Oe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Ae(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || qa(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((r !== null && Ae(r), iu(n))) {
        case 2:
        case 8:
          n = tt;
          break;
        case 32:
          n = Et;
          break;
        case 268435456:
          n = La;
          break;
        default:
          n = Et;
      }
      return (
        (r = ug.bind(null, e)),
        (n = Te(n, r)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      r !== null && r !== null && Ae(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function ug(e, t) {
    if (ct !== 0 && ct !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ns() && e.callbackNode !== n) return null;
    var r = we;
    return (
      (r = cl(
        e,
        e === je ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      r === 0
        ? null
        : (Ym(e, r, t),
          sg(e, Ve()),
          e.callbackNode != null && e.callbackNode === n
            ? ug.bind(null, e)
            : null)
    );
  }
  function og(e, t) {
    if (ns()) return null;
    Ym(e, t, !0);
  }
  function bb() {
    Mb(function () {
      (Re & 6) !== 0 ? Te(Ie, yb) : lg();
    });
  }
  function Yo() {
    return (Li === 0 && (Li = ed()), Li);
  }
  function cg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : gl("" + e);
  }
  function fg(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Sb(e, t, n, r, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var f = cg((o[Ct] || null).action),
        g = r.submitter;
      g &&
        ((t = (t = g[Ct] || null)
          ? cg(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((f = t), (g = null)));
      var v = new bl("action", "action", null, r, o);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Li !== 0) {
                  var E = g ? fg(o, g) : new FormData(o);
                  oo(
                    n,
                    { pending: !0, data: E, method: o.method, action: f },
                    null,
                    E,
                  );
                }
              } else
                typeof f == "function" &&
                  (v.preventDefault(),
                  (E = g ? fg(o, g) : new FormData(o)),
                  oo(
                    n,
                    { pending: !0, data: E, method: o.method, action: f },
                    f,
                    E,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var Go = 0; Go < Ou.length; Go++) {
    var Io = Ou[Go],
      Eb = Io.toLowerCase(),
      wb = Io[0].toUpperCase() + Io.slice(1);
    Jt(Eb, "on" + wb);
  }
  (Jt(Yd, "onAnimationEnd"),
    Jt(Gd, "onAnimationIteration"),
    Jt(Id, "onAnimationStart"),
    Jt("dblclick", "onDoubleClick"),
    Jt("focusin", "onFocus"),
    Jt("focusout", "onBlur"),
    Jt(B0, "onTransitionRun"),
    Jt(H0, "onTransitionStart"),
    Jt(V0, "onTransitionCancel"),
    Jt($d, "onTransitionEnd"),
    Ii("onMouseEnter", ["mouseout", "mouseover"]),
    Ii("onMouseLeave", ["mouseout", "mouseover"]),
    Ii("onPointerEnter", ["pointerout", "pointerover"]),
    Ii("onPointerLeave", ["pointerout", "pointerover"]),
    Ei(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ei(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ei(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ei(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ei(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Cr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Cb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Cr),
    );
  function dg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = r.length - 1; 0 <= g; g--) {
            var v = r[g],
              E = v.instance,
              U = v.currentTarget;
            if (((v = v.listener), E !== f && o.isPropagationStopped()))
              break e;
            ((f = v), (o.currentTarget = U));
            try {
              f(o);
            } catch (Y) {
              Gl(Y);
            }
            ((o.currentTarget = null), (f = E));
          }
        else
          for (g = 0; g < r.length; g++) {
            if (
              ((v = r[g]),
              (E = v.instance),
              (U = v.currentTarget),
              (v = v.listener),
              E !== f && o.isPropagationStopped())
            )
              break e;
            ((f = v), (o.currentTarget = U));
            try {
              f(o);
            } catch (Y) {
              Gl(Y);
            }
            ((o.currentTarget = null), (f = E));
          }
      }
    }
  }
  function Se(e, t) {
    var n = t[au];
    n === void 0 && (n = t[au] = new Set());
    var r = e + "__bubble";
    n.has(r) || (hg(t, e, 2, !1), n.add(r));
  }
  function $o(e, t, n) {
    var r = 0;
    (t && (r |= 4), hg(n, e, r, t));
  }
  var rs = "_reactListening" + Math.random().toString(36).slice(2);
  function Xo(e) {
    if (!e[rs]) {
      ((e[rs] = !0),
        ld.forEach(function (n) {
          n !== "selectionchange" && (Cb.has(n) || $o(n, !1, e), $o(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rs] || ((t[rs] = !0), $o("selectionchange", !1, t));
    }
  }
  function hg(e, t, n, r) {
    switch (Lg(t)) {
      case 2:
        var o = Zb;
        break;
      case 8:
        o = Fb;
        break;
      default:
        o = uc;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !gu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1));
  }
  function Ko(e, t, n, r, o) {
    var f = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var g = r.tag;
        if (g === 3 || g === 4) {
          var v = r.stateNode.containerInfo;
          if (v === o) break;
          if (g === 4)
            for (g = r.return; g !== null; ) {
              var E = g.tag;
              if ((E === 3 || E === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = Qi(v)), g === null)) return;
            if (((E = g.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              r = f = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        r = r.return;
      }
    Sd(function () {
      var U = f,
        Y = hu(n),
        X = [];
      e: {
        var L = Xd.get(e);
        if (L !== void 0) {
          var q = bl,
            fe = e;
          switch (e) {
            case "keypress":
              if (vl(n) === 0) break e;
            case "keydown":
            case "keyup":
              q = v0;
              break;
            case "focusin":
              ((fe = "focus"), (q = bu));
              break;
            case "focusout":
              ((fe = "blur"), (q = bu));
              break;
            case "beforeblur":
            case "afterblur":
              q = bu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = r0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = S0;
              break;
            case Yd:
            case Gd:
            case Id:
              q = u0;
              break;
            case $d:
              q = w0;
              break;
            case "scroll":
            case "scrollend":
              q = i0;
              break;
            case "wheel":
              q = _0;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = c0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Ad;
              break;
            case "toggle":
            case "beforetoggle":
              q = T0;
          }
          var oe = (t & 4) !== 0,
            Ne = !oe && (e === "scroll" || e === "scrollend"),
            O = oe ? (L !== null ? L + "Capture" : null) : L;
          oe = [];
          for (var A = U, k; A !== null; ) {
            var I = A;
            if (
              ((k = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                k === null ||
                O === null ||
                ((I = Pa(A, O)), I != null && oe.push(_r(A, I, k))),
              Ne)
            )
              break;
            A = A.return;
          }
          0 < oe.length &&
            ((L = new q(L, fe, null, n, Y)),
            X.push({ event: L, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            L &&
              n !== du &&
              (fe = n.relatedTarget || n.fromElement) &&
              (Qi(fe) || fe[Pi]))
          )
            break e;
          if (
            (q || L) &&
            ((L =
              Y.window === Y
                ? Y
                : (L = Y.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            q
              ? ((fe = n.relatedTarget || n.toElement),
                (q = U),
                (fe = fe ? Qi(fe) : null),
                fe !== null &&
                  ((Ne = c(fe)),
                  (oe = fe.tag),
                  fe !== Ne || (oe !== 5 && oe !== 27 && oe !== 6)) &&
                  (fe = null))
              : ((q = null), (fe = U)),
            q !== fe)
          ) {
            if (
              ((oe = Cd),
              (I = "onMouseLeave"),
              (O = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((oe = Ad),
                (I = "onPointerLeave"),
                (O = "onPointerEnter"),
                (A = "pointer")),
              (Ne = q == null ? L : Va(q)),
              (k = fe == null ? L : Va(fe)),
              (L = new oe(I, A + "leave", q, n, Y)),
              (L.target = Ne),
              (L.relatedTarget = k),
              (I = null),
              Qi(Y) === U &&
                ((oe = new oe(O, A + "enter", fe, n, Y)),
                (oe.target = k),
                (oe.relatedTarget = Ne),
                (I = oe)),
              (Ne = I),
              q && fe)
            )
              t: {
                for (oe = q, O = fe, A = 0, k = oe; k; k = Ca(k)) A++;
                for (k = 0, I = O; I; I = Ca(I)) k++;
                for (; 0 < A - k; ) ((oe = Ca(oe)), A--);
                for (; 0 < k - A; ) ((O = Ca(O)), k--);
                for (; A--; ) {
                  if (oe === O || (O !== null && oe === O.alternate)) break t;
                  ((oe = Ca(oe)), (O = Ca(O)));
                }
                oe = null;
              }
            else oe = null;
            (q !== null && mg(X, L, q, oe, !1),
              fe !== null && Ne !== null && mg(X, Ne, fe, oe, !0));
          }
        }
        e: {
          if (
            ((L = U ? Va(U) : window),
            (q = L.nodeName && L.nodeName.toLowerCase()),
            q === "select" || (q === "input" && L.type === "file"))
          )
            var le = Ud;
          else if (Nd(L))
            if (jd) le = z0;
            else {
              le = j0;
              var ye = U0;
            }
          else
            ((q = L.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? U && fu(U.elementType) && (le = Ud)
                : (le = D0));
          if (le && (le = le(e, U))) {
            kd(X, le, n, Y);
            break e;
          }
          (ye && ye(e, L, U),
            e === "focusout" &&
              U &&
              L.type === "number" &&
              U.memoizedProps.value != null &&
              cu(L, "number", L.value));
        }
        switch (((ye = U ? Va(U) : window), e)) {
          case "focusin":
            (Nd(ye) || ye.contentEditable === "true") &&
              ((Wi = ye), (Au = U), (Za = null));
            break;
          case "focusout":
            Za = Au = Wi = null;
            break;
          case "mousedown":
            Tu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Tu = !1), Pd(X, n, Y));
            break;
          case "selectionchange":
            if (q0) break;
          case "keydown":
          case "keyup":
            Pd(X, n, Y);
        }
        var se;
        if (Eu)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Ji
            ? Md(e, n) && (ce = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ce = "onCompositionStart");
        (ce &&
          (Td &&
            n.locale !== "ko" &&
            (Ji || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && Ji && (se = Ed())
              : ((Hn = Y),
                (pu = "value" in Hn ? Hn.value : Hn.textContent),
                (Ji = !0))),
          (ye = ls(U, ce)),
          0 < ye.length &&
            ((ce = new _d(ce, e, null, n, Y)),
            X.push({ event: ce, listeners: ye }),
            se
              ? (ce.data = se)
              : ((se = xd(n)), se !== null && (ce.data = se)))),
          (se = O0 ? M0(e, n) : x0(e, n)) &&
            ((ce = ls(U, "onBeforeInput")),
            0 < ce.length &&
              ((ye = new _d("onBeforeInput", "beforeinput", null, n, Y)),
              X.push({ event: ye, listeners: ce }),
              (ye.data = se))),
          Sb(X, e, U, n, Y));
      }
      dg(X, t);
    });
  }
  function _r(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ls(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        f = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          f === null ||
          ((o = Pa(e, n)),
          o != null && r.unshift(_r(e, o, f)),
          (o = Pa(e, t)),
          o != null && r.push(_r(e, o, f))),
        e.tag === 3)
      )
        return r;
      e = e.return;
    }
    return [];
  }
  function Ca(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function mg(e, t, n, r, o) {
    for (var f = t._reactName, g = []; n !== null && n !== r; ) {
      var v = n,
        E = v.alternate,
        U = v.stateNode;
      if (((v = v.tag), E !== null && E === r)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        U === null ||
        ((E = U),
        o
          ? ((U = Pa(n, f)), U != null && g.unshift(_r(n, U, E)))
          : o || ((U = Pa(n, f)), U != null && g.push(_r(n, U, E)))),
        (n = n.return));
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var _b = /\r\n?/g,
    Ab = /\u0000|\uFFFD/g;
  function gg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _b,
        `
`,
      )
      .replace(Ab, "");
  }
  function pg(e, t) {
    return ((t = gg(t)), gg(e) === t);
  }
  function ss() {}
  function xe(e, t, n, r, o, f) {
    switch (n) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || Ki(e, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            t !== "body" &&
            Ki(e, "" + r);
        break;
      case "className":
        dl(e, "class", r);
        break;
      case "tabIndex":
        dl(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        dl(e, n, r);
        break;
      case "style":
        yd(e, r, f);
        break;
      case "data":
        if (t !== "object") {
          dl(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((r = gl("" + r)), e.setAttribute(n, r));
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (n === "formAction"
              ? (t !== "input" && xe(e, t, "name", o.name, o, null),
                xe(e, t, "formEncType", o.formEncType, o, null),
                xe(e, t, "formMethod", o.formMethod, o, null),
                xe(e, t, "formTarget", o.formTarget, o, null))
              : (xe(e, t, "encType", o.encType, o, null),
                xe(e, t, "method", o.method, o, null),
                xe(e, t, "target", o.target, o, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((r = gl("" + r)), e.setAttribute(n, r));
        break;
      case "onClick":
        r != null && (e.onclick = ss);
        break;
      case "onScroll":
        r != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (((n = r.__html), n != null)) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = gl("" + r)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "" + r)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(n, "")
          : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(n)
          : e.setAttribute(n, r);
        break;
      case "popover":
        (Se("beforetoggle", e), Se("toggle", e), fl(e, "popover", r));
        break;
      case "xlinkActuate":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        yn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        yn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        yn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        yn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        fl(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = t0.get(n) || n), fl(e, n, r));
    }
  }
  function Zo(e, t, n, r, o, f) {
    switch (n) {
      case "style":
        yd(e, r, f);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (((n = r.__html), n != null)) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? Ki(e, r)
          : (typeof r == "number" || typeof r == "bigint") && Ki(e, "" + r);
        break;
      case "onScroll":
        r != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Se("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = ss);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!sd.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (t = n.slice(2, o ? n.length - 7 : void 0)),
              (f = e[Ct] || null),
              (f = f != null ? f[n] : null),
              typeof f == "function" && e.removeEventListener(t, f, o),
              typeof r == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, r, o));
              break e;
            }
            n in e
              ? (e[n] = r)
              : r === !0
                ? e.setAttribute(n, "")
                : fl(e, n, r);
          }
    }
  }
  function ft(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Se("error", e), Se("load", e));
        var r = !1,
          o = !1,
          f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var g = n[f];
            if (g != null)
              switch (f) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  xe(e, t, f, g, n, null);
              }
          }
        (o && xe(e, t, "srcSet", n.srcSet, n, null),
          r && xe(e, t, "src", n.src, n, null));
        return;
      case "input":
        Se("invalid", e);
        var v = (f = g = o = null),
          E = null,
          U = null;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var Y = n[r];
            if (Y != null)
              switch (r) {
                case "name":
                  o = Y;
                  break;
                case "type":
                  g = Y;
                  break;
                case "checked":
                  E = Y;
                  break;
                case "defaultChecked":
                  U = Y;
                  break;
                case "value":
                  f = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null) throw Error(u(137, t));
                  break;
                default:
                  xe(e, t, r, Y, n, null);
              }
          }
        (md(e, f, v, E, U, g, o, !1), hl(e));
        return;
      case "select":
        (Se("invalid", e), (r = g = f = null));
        for (o in n)
          if (n.hasOwnProperty(o) && ((v = n[o]), v != null))
            switch (o) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                r = v;
              default:
                xe(e, t, o, v, n, null);
            }
        ((t = f),
          (n = g),
          (e.multiple = !!r),
          t != null ? Xi(e, !!r, t, !1) : n != null && Xi(e, !!r, n, !0));
        return;
      case "textarea":
        (Se("invalid", e), (f = o = r = null));
        for (g in n)
          if (n.hasOwnProperty(g) && ((v = n[g]), v != null))
            switch (g) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                xe(e, t, g, v, n, null);
            }
        (pd(e, r, o, f), hl(e));
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((r = n[E]), r != null))
            switch (E) {
              case "selected":
                e.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                xe(e, t, E, r, n, null);
            }
        return;
      case "dialog":
        (Se("beforetoggle", e),
          Se("toggle", e),
          Se("cancel", e),
          Se("close", e));
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Cr.length; r++) Se(Cr[r], e);
        break;
      case "image":
        (Se("error", e), Se("load", e));
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Se("error", e), Se("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in n)
          if (n.hasOwnProperty(U) && ((r = n[U]), r != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                xe(e, t, U, r, n, null);
            }
        return;
      default:
        if (fu(t)) {
          for (Y in n)
            n.hasOwnProperty(Y) &&
              ((r = n[Y]), r !== void 0 && Zo(e, t, Y, r, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((r = n[v]), r != null && xe(e, t, v, r, n, null));
  }
  function Tb(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          f = null,
          g = null,
          v = null,
          E = null,
          U = null,
          Y = null;
        for (q in n) {
          var X = n[q];
          if (n.hasOwnProperty(q) && X != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = X;
              default:
                r.hasOwnProperty(q) || xe(e, t, q, null, r, X);
            }
        }
        for (var L in r) {
          var q = r[L];
          if (((X = n[L]), r.hasOwnProperty(L) && (q != null || X != null)))
            switch (L) {
              case "type":
                f = q;
                break;
              case "name":
                o = q;
                break;
              case "checked":
                U = q;
                break;
              case "defaultChecked":
                Y = q;
                break;
              case "value":
                g = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(u(137, t));
                break;
              default:
                q !== X && xe(e, t, L, q, r, X);
            }
        }
        ou(e, g, v, E, U, Y, f, o);
        return;
      case "select":
        q = g = v = L = null;
        for (f in n)
          if (((E = n[f]), n.hasOwnProperty(f) && E != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                q = E;
              default:
                r.hasOwnProperty(f) || xe(e, t, f, null, r, E);
            }
        for (o in r)
          if (
            ((f = r[o]),
            (E = n[o]),
            r.hasOwnProperty(o) && (f != null || E != null))
          )
            switch (o) {
              case "value":
                L = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== E && xe(e, t, o, f, r, E);
            }
        ((t = v),
          (n = g),
          (r = q),
          L != null
            ? Xi(e, !!n, L, !1)
            : !!r != !!n &&
              (t != null ? Xi(e, !!n, t, !0) : Xi(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        q = L = null;
        for (v in n)
          if (
            ((o = n[v]),
            n.hasOwnProperty(v) && o != null && !r.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(e, t, v, null, r, o);
            }
        for (g in r)
          if (
            ((o = r[g]),
            (f = n[g]),
            r.hasOwnProperty(g) && (o != null || f != null))
          )
            switch (g) {
              case "value":
                L = o;
                break;
              case "defaultValue":
                q = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== f && xe(e, t, g, o, r, f);
            }
        gd(e, L, q);
        return;
      case "option":
        for (var fe in n)
          if (
            ((L = n[fe]),
            n.hasOwnProperty(fe) && L != null && !r.hasOwnProperty(fe))
          )
            switch (fe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                xe(e, t, fe, null, r, L);
            }
        for (E in r)
          if (
            ((L = r[E]),
            (q = n[E]),
            r.hasOwnProperty(E) && L !== q && (L != null || q != null))
          )
            switch (E) {
              case "selected":
                e.selected =
                  L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                xe(e, t, E, L, r, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var oe in n)
          ((L = n[oe]),
            n.hasOwnProperty(oe) &&
              L != null &&
              !r.hasOwnProperty(oe) &&
              xe(e, t, oe, null, r, L));
        for (U in r)
          if (
            ((L = r[U]),
            (q = n[U]),
            r.hasOwnProperty(U) && L !== q && (L != null || q != null))
          )
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(u(137, t));
                break;
              default:
                xe(e, t, U, L, r, q);
            }
        return;
      default:
        if (fu(t)) {
          for (var Ne in n)
            ((L = n[Ne]),
              n.hasOwnProperty(Ne) &&
                L !== void 0 &&
                !r.hasOwnProperty(Ne) &&
                Zo(e, t, Ne, void 0, r, L));
          for (Y in r)
            ((L = r[Y]),
              (q = n[Y]),
              !r.hasOwnProperty(Y) ||
                L === q ||
                (L === void 0 && q === void 0) ||
                Zo(e, t, Y, L, r, q));
          return;
        }
    }
    for (var O in n)
      ((L = n[O]),
        n.hasOwnProperty(O) &&
          L != null &&
          !r.hasOwnProperty(O) &&
          xe(e, t, O, null, r, L));
    for (X in r)
      ((L = r[X]),
        (q = n[X]),
        !r.hasOwnProperty(X) ||
          L === q ||
          (L == null && q == null) ||
          xe(e, t, X, L, r, q));
  }
  var Fo = null,
    Jo = null;
  function us(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Wo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ec = null;
  function Rb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ec
        ? !1
        : ((ec = e), !0)
      : ((ec = null), !1);
  }
  var bg = typeof setTimeout == "function" ? setTimeout : void 0,
    Ob = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sg = typeof Promise == "function" ? Promise : void 0,
    Mb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sg < "u"
          ? function (e) {
              return Sg.resolve(null).then(e).catch(xb);
            }
          : bg;
  function xb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ni(e) {
    return e === "head";
  }
  function Eg(e, t) {
    var n = t,
      r = 0,
      o = 0;
    do {
      var f = n.nextSibling;
      if ((e.removeChild(n), f && f.nodeType === 8))
        if (((n = f.data), n === "/$")) {
          if (0 < r && 8 > r) {
            n = r;
            var g = e.ownerDocument;
            if ((n & 1 && Ar(g.documentElement), n & 2 && Ar(g.body), n & 4))
              for (n = g.head, Ar(n), g = n.firstChild; g; ) {
                var v = g.nextSibling,
                  E = g.nodeName;
                (g[Ha] ||
                  E === "SCRIPT" ||
                  E === "STYLE" ||
                  (E === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(g),
                  (g = v));
              }
          }
          if (o === 0) {
            (e.removeChild(f), Ur(t));
            return;
          }
          o--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? o++
            : (r = n.charCodeAt(0) - 48);
      else r = 0;
      n = f;
    } while (n);
    Ur(t);
  }
  function tc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (tc(n), ru(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Nb(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[Ha])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== o.rel ||
                e.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                e.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = en(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function kb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = en(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function nc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Ub(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var r = function () {
        (t(), n.removeEventListener("DOMContentLoaded", r));
      };
      (n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r));
    }
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var ic = null;
  function wg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cg(e, t, n) {
    switch (((t = us(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function Ar(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ru(e);
  }
  var Xt = new Map(),
    _g = new Set();
  function os(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var kn = F.d;
  F.d = { f: jb, r: Db, D: zb, C: Lb, L: qb, m: Bb, X: Vb, S: Hb, M: Pb };
  function jb() {
    var e = kn.f(),
      t = es();
    return e || t;
  }
  function Db(e) {
    var t = Yi(e);
    t !== null && t.tag === 5 && t.type === "form" ? Yh(t) : kn.r(e);
  }
  var _a = typeof document > "u" ? null : document;
  function Ag(e, t, n) {
    var r = _a;
    if (r && typeof t == "string" && t) {
      var o = Vt(t);
      ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        _g.has(o) ||
          (_g.add(o),
          (e = { rel: e, crossOrigin: n, href: t }),
          r.querySelector(o) === null &&
            ((t = r.createElement("link")),
            ft(t, "link", e),
            nt(t),
            r.head.appendChild(t))));
    }
  }
  function zb(e) {
    (kn.D(e), Ag("dns-prefetch", e, null));
  }
  function Lb(e, t) {
    (kn.C(e, t), Ag("preconnect", e, t));
  }
  function qb(e, t, n) {
    kn.L(e, t, n);
    var r = _a;
    if (r && e && t) {
      var o = 'link[rel="preload"][as="' + Vt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + Vt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (o += '[imagesizes="' + Vt(n.imageSizes) + '"]'))
        : (o += '[href="' + Vt(e) + '"]');
      var f = o;
      switch (t) {
        case "style":
          f = Aa(e);
          break;
        case "script":
          f = Ta(e);
      }
      Xt.has(f) ||
        ((e = y(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Xt.set(f, e),
        r.querySelector(o) !== null ||
          (t === "style" && r.querySelector(Tr(f))) ||
          (t === "script" && r.querySelector(Rr(f))) ||
          ((t = r.createElement("link")),
          ft(t, "link", e),
          nt(t),
          r.head.appendChild(t)));
    }
  }
  function Bb(e, t) {
    kn.m(e, t);
    var n = _a;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + Vt(r) + '"][href="' + Vt(e) + '"]',
        f = o;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ta(e);
      }
      if (
        !Xt.has(f) &&
        ((e = y({ rel: "modulepreload", href: e }, t)),
        Xt.set(f, e),
        n.querySelector(o) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Rr(f))) return;
        }
        ((r = n.createElement("link")),
          ft(r, "link", e),
          nt(r),
          n.head.appendChild(r));
      }
    }
  }
  function Hb(e, t, n) {
    kn.S(e, t, n);
    var r = _a;
    if (r && e) {
      var o = Gi(r).hoistableStyles,
        f = Aa(e);
      t = t || "default";
      var g = o.get(f);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = r.querySelector(Tr(f)))) v.loading = 5;
        else {
          ((e = y({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Xt.get(f)) && ac(e, n));
          var E = (g = r.createElement("link"));
          (nt(E),
            ft(E, "link", e),
            (E._p = new Promise(function (U, Y) {
              ((E.onload = U), (E.onerror = Y));
            })),
            E.addEventListener("load", function () {
              v.loading |= 1;
            }),
            E.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            cs(g, t, r));
        }
        ((g = { type: "stylesheet", instance: g, count: 1, state: v }),
          o.set(f, g));
      }
    }
  }
  function Vb(e, t) {
    kn.X(e, t);
    var n = _a;
    if (n && e) {
      var r = Gi(n).hoistableScripts,
        o = Ta(e),
        f = r.get(o);
      f ||
        ((f = n.querySelector(Rr(o))),
        f ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = Xt.get(o)) && rc(e, t),
          (f = n.createElement("script")),
          nt(f),
          ft(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        r.set(o, f));
    }
  }
  function Pb(e, t) {
    kn.M(e, t);
    var n = _a;
    if (n && e) {
      var r = Gi(n).hoistableScripts,
        o = Ta(e),
        f = r.get(o);
      f ||
        ((f = n.querySelector(Rr(o))),
        f ||
          ((e = y({ src: e, async: !0, type: "module" }, t)),
          (t = Xt.get(o)) && rc(e, t),
          (f = n.createElement("script")),
          nt(f),
          ft(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        r.set(o, f));
    }
  }
  function Tg(e, t, n, r) {
    var o = (o = ue.current) ? os(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Aa(n.href)),
            (n = Gi(o).hoistableStyles),
            (r = n.get(t)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Aa(n.href);
          var f = Gi(o).hoistableStyles,
            g = f.get(e);
          if (
            (g ||
              ((o = o.ownerDocument || o),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, g),
              (f = o.querySelector(Tr(e))) &&
                !f._p &&
                ((g.instance = f), (g.state.loading = 5)),
              Xt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Xt.set(e, n),
                f || Qb(o, e, n, g.state))),
            t && r === null)
          )
            throw Error(u(528, ""));
          return g;
        }
        if (t && r !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ta(n)),
              (n = Gi(o).hoistableScripts),
              (r = n.get(t)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Aa(e) {
    return 'href="' + Vt(e) + '"';
  }
  function Tr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rg(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Qb(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (r.loading = 1)
      : ((t = e.createElement("link")),
        (r.preload = t),
        t.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        ft(t, "link", n),
        nt(t),
        e.head.appendChild(t));
  }
  function Ta(e) {
    return '[src="' + Vt(e) + '"]';
  }
  function Rr(e) {
    return "script[async]" + e;
  }
  function Og(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + Vt(n.href) + '"]');
          if (r) return ((t.instance = r), nt(r), r);
          var o = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            nt(r),
            ft(r, "style", o),
            cs(r, n.precedence, e),
            (t.instance = r)
          );
        case "stylesheet":
          o = Aa(n.href);
          var f = e.querySelector(Tr(o));
          if (f) return ((t.state.loading |= 4), (t.instance = f), nt(f), f);
          ((r = Rg(n)),
            (o = Xt.get(o)) && ac(r, o),
            (f = (e.ownerDocument || e).createElement("link")),
            nt(f));
          var g = f;
          return (
            (g._p = new Promise(function (v, E) {
              ((g.onload = v), (g.onerror = E));
            })),
            ft(f, "link", r),
            (t.state.loading |= 4),
            cs(f, n.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = Ta(n.src)),
            (o = e.querySelector(Rr(f)))
              ? ((t.instance = o), nt(o), o)
              : ((r = n),
                (o = Xt.get(f)) && ((r = y({}, n)), rc(r, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                nt(o),
                ft(o, "link", r),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((r = t.instance), (t.state.loading |= 4), cs(r, n.precedence, e));
    return t.instance;
  }
  function cs(e, t, n) {
    for (
      var r = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = r.length ? r[r.length - 1] : null,
        f = o,
        g = 0;
      g < r.length;
      g++
    ) {
      var v = r[g];
      if (v.dataset.precedence === t) f = v;
      else if (f !== o) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function ac(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function rc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var fs = null;
  function Mg(e, t, n) {
    if (fs === null) {
      var r = new Map(),
        o = (fs = new Map());
      o.set(n, r);
    } else ((o = fs), (r = o.get(n)), r || ((r = new Map()), o.set(n, r)));
    if (r.has(e)) return r;
    for (
      r.set(e, null), n = n.getElementsByTagName(e), o = 0;
      o < n.length;
      o++
    ) {
      var f = n[o];
      if (
        !(
          f[Ha] ||
          f[dt] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var v = r.get(g);
        v ? v.push(f) : r.set(g, [f]);
      }
    }
    return r;
  }
  function xg(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Yb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ng(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Or = null;
  function Gb() {}
  function Ib(e, t, n) {
    if (Or === null) throw Error(u(475));
    var r = Or;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var o = Aa(n.href),
          f = e.querySelector(Tr(o));
        if (f) {
          ((e = f._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (r.count++, (r = ds.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = f),
            nt(f));
          return;
        }
        ((f = e.ownerDocument || e),
          (n = Rg(n)),
          (o = Xt.get(o)) && ac(n, o),
          (f = f.createElement("link")),
          nt(f));
        var g = f;
        ((g._p = new Promise(function (v, E) {
          ((g.onload = v), (g.onerror = E));
        })),
          ft(f, "link", n),
          (t.instance = f));
      }
      (r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (r.count++,
          (t = ds.bind(r)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function $b() {
    if (Or === null) throw Error(u(475));
    var e = Or;
    return (
      e.stylesheets && e.count === 0 && lc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && lc(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ds() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var hs = null;
  function lc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (hs = new Map()),
        t.forEach(Xb, e),
        (hs = null),
        ds.call(e)));
  }
  function Xb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = hs.get(e);
      if (n) var r = n.get(null);
      else {
        ((n = new Map()), hs.set(e, n));
        for (
          var o = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            f = 0;
          f < o.length;
          f++
        ) {
          var g = o[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (n.set(g.dataset.precedence, g), (r = g));
        }
        r && n.set(null, r);
      }
      ((o = t.instance),
        (g = o.getAttribute("data-precedence")),
        (f = n.get(g) || r),
        f === r && n.set(null, o),
        n.set(g, o),
        this.count++,
        (r = ds.bind(this)),
        o.addEventListener("load", r),
        o.addEventListener("error", r),
        f
          ? f.parentNode.insertBefore(o, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Mr = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function Kb(e, t, n, r, o, f, g, v) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = tu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = tu(0)),
      (this.hiddenUpdates = tu(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = o),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map()));
  }
  function kg(e, t, n, r, o, f, g, v, E, U, Y, X) {
    return (
      (e = new Kb(e, t, n, g, v, E, U, X)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = xt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = Hu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: r, isDehydrated: n, cache: t }),
      Yu(f),
      e
    );
  }
  function Ug(e) {
    return e ? ((e = ia), e) : ia;
  }
  function jg(e, t, n, r, o, f) {
    ((o = Ug(o)),
      r.context === null ? (r.context = o) : (r.pendingContext = o),
      (r = Qn(t)),
      (r.payload = { element: n }),
      (f = f === void 0 ? null : f),
      f !== null && (r.callback = f),
      (n = Yn(e, r, t)),
      n !== null && (Dt(n, e, t), rr(n, e, t)));
  }
  function Dg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function sc(e, t) {
    (Dg(e, t), (e = e.alternate) && Dg(e, t));
  }
  function zg(e) {
    if (e.tag === 13) {
      var t = na(e, 67108864);
      (t !== null && Dt(t, e, 67108864), sc(e, 67108864));
    }
  }
  var ms = !0;
  function Zb(e, t, n, r) {
    var o = B.T;
    B.T = null;
    var f = F.p;
    try {
      ((F.p = 2), uc(e, t, n, r));
    } finally {
      ((F.p = f), (B.T = o));
    }
  }
  function Fb(e, t, n, r) {
    var o = B.T;
    B.T = null;
    var f = F.p;
    try {
      ((F.p = 8), uc(e, t, n, r));
    } finally {
      ((F.p = f), (B.T = o));
    }
  }
  function uc(e, t, n, r) {
    if (ms) {
      var o = oc(r);
      if (o === null) (Ko(e, t, r, gs, n), qg(e, r));
      else if (Wb(o, e, t, n, r)) r.stopPropagation();
      else if ((qg(e, r), t & 4 && -1 < Jb.indexOf(e))) {
        for (; o !== null; ) {
          var f = Yi(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = Si(f.pendingLanes);
                  if (g !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var E = 1 << (31 - ut(g));
                      ((v.entanglements[1] |= E), (g &= ~E));
                    }
                    (cn(f), (Re & 6) === 0 && ((Jl = Ve() + 500), wr(0)));
                  }
                }
                break;
              case 13:
                ((v = na(f, 2)), v !== null && Dt(v, f, 2), es(), sc(f, 2));
            }
          if (((f = oc(r)), f === null && Ko(e, t, r, gs, n), f === o)) break;
          o = f;
        }
        o !== null && r.stopPropagation();
      } else Ko(e, t, r, null, n);
    }
  }
  function oc(e) {
    return ((e = hu(e)), cc(e));
  }
  var gs = null;
  function cc(e) {
    if (((gs = null), (e = Qi(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((gs = e), null);
  }
  function Lg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qn()) {
          case Ie:
            return 2;
          case tt:
            return 8;
          case Et:
          case ll:
            return 32;
          case La:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fc = !1,
    ii = null,
    ai = null,
    ri = null,
    xr = new Map(),
    Nr = new Map(),
    li = [],
    Jb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function qg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ii = null;
        break;
      case "dragenter":
      case "dragleave":
        ai = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        xr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(t.pointerId);
    }
  }
  function kr(e, t, n, r, o, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: f,
          targetContainers: [o],
        }),
        t !== null && ((t = Yi(t)), t !== null && zg(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Wb(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return ((ii = kr(ii, e, t, n, r, o)), !0);
      case "dragenter":
        return ((ai = kr(ai, e, t, n, r, o)), !0);
      case "mouseover":
        return ((ri = kr(ri, e, t, n, r, o)), !0);
      case "pointerover":
        var f = o.pointerId;
        return (xr.set(f, kr(xr.get(f) || null, e, t, n, r, o)), !0);
      case "gotpointercapture":
        return (
          (f = o.pointerId),
          Nr.set(f, kr(Nr.get(f) || null, e, t, n, r, o)),
          !0
        );
    }
    return !1;
  }
  function Bg(e) {
    var t = Qi(e.target);
    if (t !== null) {
      var n = c(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Iy(e.priority, function () {
                if (n.tag === 13) {
                  var r = jt();
                  r = nu(r);
                  var o = na(n, r);
                  (o !== null && Dt(o, n, r), sc(n, r));
                }
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ps(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((du = r), n.target.dispatchEvent(r), (du = null));
      } else return ((t = Yi(n)), t !== null && zg(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Hg(e, t, n) {
    ps(e) && n.delete(t);
  }
  function eS() {
    ((fc = !1),
      ii !== null && ps(ii) && (ii = null),
      ai !== null && ps(ai) && (ai = null),
      ri !== null && ps(ri) && (ri = null),
      xr.forEach(Hg),
      Nr.forEach(Hg));
  }
  function vs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      fc ||
        ((fc = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, eS)));
  }
  var ys = null;
  function Vg(e) {
    ys !== e &&
      ((ys = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        ys === e && (ys = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            o = e[t + 2];
          if (typeof r != "function") {
            if (cc(r || n) === null) continue;
            break;
          }
          var f = Yi(n);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            oo(f, { pending: !0, data: o, method: n.method, action: r }, r, o));
        }
      }));
  }
  function Ur(e) {
    function t(E) {
      return vs(E, e);
    }
    (ii !== null && vs(ii, e),
      ai !== null && vs(ai, e),
      ri !== null && vs(ri, e),
      xr.forEach(t),
      Nr.forEach(t));
    for (var n = 0; n < li.length; n++) {
      var r = li[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < li.length && ((n = li[0]), n.blockedOn === null); )
      (Bg(n), n.blockedOn === null && li.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (r = 0; r < n.length; r += 3) {
        var o = n[r],
          f = n[r + 1],
          g = o[Ct] || null;
        if (typeof f == "function") g || Vg(n);
        else if (g) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (((o = f), (g = f[Ct] || null))) v = g.formAction;
            else if (cc(o) !== null) continue;
          } else v = g.action;
          (typeof v == "function" ? (n[r + 1] = v) : (n.splice(r, 3), (r -= 3)),
            Vg(n));
        }
      }
  }
  function dc(e) {
    this._internalRoot = e;
  }
  ((bs.prototype.render = dc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var n = t.current,
        r = jt();
      jg(n, r, e, t, null, null);
    }),
    (bs.prototype.unmount = dc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (jg(e.current, 2, null, e, null, null), es(), (t[Pi] = null));
        }
      }));
  function bs(e) {
    this._internalRoot = e;
  }
  bs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ad();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < li.length && t !== 0 && t < li[n].priority; n++);
      (li.splice(n, 0, e), n === 0 && Bg(e));
    }
  };
  var Pg = a.version;
  if (Pg !== "19.1.1") throw Error(u(527, Pg, "19.1.1"));
  F.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var tS = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ss.isDisabled && Ss.supportsFiber)
      try {
        ((pt = Ss.inject(tS)), (st = Ss));
      } catch {}
  }
  return (
    (Dr.createRoot = function (e, t) {
      if (!s(e)) throw Error(u(299));
      var n = !1,
        r = "",
        o = am,
        f = rm,
        g = lm,
        v = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (v = t.unstable_transitionCallbacks)),
        (t = kg(e, 1, !1, null, null, n, r, o, f, g, v, null)),
        (e[Pi] = t.current),
        Xo(e),
        new dc(t)
      );
    }),
    (Dr.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(u(299));
      var r = !1,
        o = "",
        f = am,
        g = rm,
        v = lm,
        E = null,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (E = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (U = n.formState)),
        (t = kg(e, 1, !0, t, n ?? null, r, o, f, g, v, E, U)),
        (t.context = Ug(null)),
        (n = t.current),
        (r = jt()),
        (r = nu(r)),
        (o = Qn(r)),
        (o.callback = null),
        Yn(n, o, r),
        (n = r),
        (t.current.lanes = n),
        Ba(t, n),
        cn(t),
        (e[Pi] = t.current),
        Xo(e),
        new bs(t)
      );
    }),
    (Dr.version = "19.1.1"),
    Dr
  );
}
var Jg;
function cS() {
  if (Jg) return gc.exports;
  Jg = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return (i(), (gc.exports = oS()), gc.exports);
}
var fS = cS();
const dS = zf(fS);
var hn = [],
  Zt = [],
  hS = Uint8Array,
  bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ra = 0, mS = bc.length; Ra < mS; ++Ra)
  ((hn[Ra] = bc[Ra]), (Zt[bc.charCodeAt(Ra)] = Ra));
Zt[45] = 62;
Zt[95] = 63;
function gS(i) {
  var a = i.length;
  if (a % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var l = i.indexOf("=");
  l === -1 && (l = a);
  var u = l === a ? 0 : 4 - (l % 4);
  return [l, u];
}
function pS(i, a, l) {
  return ((a + l) * 3) / 4 - l;
}
function Ir(i) {
  var a,
    l = gS(i),
    u = l[0],
    s = l[1],
    c = new hS(pS(i, u, s)),
    d = 0,
    h = s > 0 ? u - 4 : u,
    m;
  for (m = 0; m < h; m += 4)
    ((a =
      (Zt[i.charCodeAt(m)] << 18) |
      (Zt[i.charCodeAt(m + 1)] << 12) |
      (Zt[i.charCodeAt(m + 2)] << 6) |
      Zt[i.charCodeAt(m + 3)]),
      (c[d++] = (a >> 16) & 255),
      (c[d++] = (a >> 8) & 255),
      (c[d++] = a & 255));
  return (
    s === 2 &&
      ((a = (Zt[i.charCodeAt(m)] << 2) | (Zt[i.charCodeAt(m + 1)] >> 4)),
      (c[d++] = a & 255)),
    s === 1 &&
      ((a =
        (Zt[i.charCodeAt(m)] << 10) |
        (Zt[i.charCodeAt(m + 1)] << 4) |
        (Zt[i.charCodeAt(m + 2)] >> 2)),
      (c[d++] = (a >> 8) & 255),
      (c[d++] = a & 255)),
    c
  );
}
function vS(i) {
  return (
    hn[(i >> 18) & 63] + hn[(i >> 12) & 63] + hn[(i >> 6) & 63] + hn[i & 63]
  );
}
function yS(i, a, l) {
  for (var u, s = [], c = a; c < l; c += 3)
    ((u =
      ((i[c] << 16) & 16711680) + ((i[c + 1] << 8) & 65280) + (i[c + 2] & 255)),
      s.push(vS(u)));
  return s.join("");
}
function $r(i) {
  for (
    var a, l = i.length, u = l % 3, s = [], c = 16383, d = 0, h = l - u;
    d < h;
    d += c
  )
    s.push(yS(i, d, d + c > h ? h : d + c));
  return (
    u === 1
      ? ((a = i[l - 1]), s.push(hn[a >> 2] + hn[(a << 4) & 63] + "=="))
      : u === 2 &&
        ((a = (i[l - 2] << 8) + i[l - 1]),
        s.push(hn[a >> 10] + hn[(a >> 4) & 63] + hn[(a << 2) & 63] + "=")),
    s.join("")
  );
}
function jn(i) {
  if (i === void 0) return {};
  if (!vv(i))
    throw new Error(
      `The arguments to a Convex function must be an object. Received: ${i}`,
    );
  return i;
}
function bS(i) {
  if (typeof i > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set.",
    );
  if (typeof i != "string")
    throw new Error(`Invalid deployment address: found ${i}".`);
  if (!(i.startsWith("http:") || i.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${i}".`,
    );
  try {
    new URL(i);
  } catch {
    throw new Error(
      `Invalid deployment address: "${i}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`,
    );
  }
  if (i.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${i}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`,
    );
}
function vv(i) {
  var s;
  const a = typeof i == "object",
    l = Object.getPrototypeOf(i),
    u =
      l === null ||
      l === Object.prototype ||
      ((s = l == null ? void 0 : l.constructor) == null ? void 0 : s.name) ===
        "Object";
  return a && u;
}
const yv = !0,
  ka = BigInt("-9223372036854775808"),
  Lf = BigInt("9223372036854775807"),
  gf = BigInt("0"),
  SS = BigInt("8"),
  ES = BigInt("256");
function bv(i) {
  return Number.isNaN(i) || !Number.isFinite(i) || Object.is(i, -0);
}
function wS(i) {
  i < gf && (i -= ka + ka);
  let a = i.toString(16);
  a.length % 2 === 1 && (a = "0" + a);
  const l = new Uint8Array(new ArrayBuffer(8));
  let u = 0;
  for (const s of a.match(/.{2}/g).reverse())
    (l.set([parseInt(s, 16)], u++), (i >>= SS));
  return $r(l);
}
function CS(i) {
  const a = Ir(i);
  if (a.byteLength !== 8)
    throw new Error(`Received ${a.byteLength} bytes, expected 8 for $integer`);
  let l = gf,
    u = gf;
  for (const s of a) ((l += BigInt(s) * ES ** u), u++);
  return (l > Lf && (l += ka + ka), l);
}
function _S(i) {
  if (i < ka || Lf < i)
    throw new Error(`BigInt ${i} does not fit into a 64-bit signed integer.`);
  const a = new ArrayBuffer(8);
  return (new DataView(a).setBigInt64(0, i, !0), $r(new Uint8Array(a)));
}
function AS(i) {
  const a = Ir(i);
  if (a.byteLength !== 8)
    throw new Error(`Received ${a.byteLength} bytes, expected 8 for $integer`);
  return new DataView(a.buffer).getBigInt64(0, !0);
}
const TS = DataView.prototype.setBigInt64 ? _S : wS,
  RS = DataView.prototype.getBigInt64 ? AS : CS,
  Wg = 1024;
function Sv(i) {
  if (i.length > Wg)
    throw new Error(`Field name ${i} exceeds maximum field name length ${Wg}.`);
  if (i.startsWith("$"))
    throw new Error(`Field name ${i} starts with a '$', which is reserved.`);
  for (let a = 0; a < i.length; a += 1) {
    const l = i.charCodeAt(a);
    if (l < 32 || l >= 127)
      throw new Error(
        `Field name ${i} has invalid character '${i[a]}': Field names can only contain non-control ASCII characters`,
      );
  }
}
function Ua(i) {
  if (
    i === null ||
    typeof i == "boolean" ||
    typeof i == "number" ||
    typeof i == "string"
  )
    return i;
  if (Array.isArray(i)) return i.map((u) => Ua(u));
  if (typeof i != "object") throw new Error(`Unexpected type of ${i}`);
  const a = Object.entries(i);
  if (a.length === 1) {
    const u = a[0][0];
    if (u === "$bytes") {
      if (typeof i.$bytes != "string")
        throw new Error(`Malformed $bytes field on ${i}`);
      return Ir(i.$bytes).buffer;
    }
    if (u === "$integer") {
      if (typeof i.$integer != "string")
        throw new Error(`Malformed $integer field on ${i}`);
      return RS(i.$integer);
    }
    if (u === "$float") {
      if (typeof i.$float != "string")
        throw new Error(`Malformed $float field on ${i}`);
      const s = Ir(i.$float);
      if (s.byteLength !== 8)
        throw new Error(
          `Received ${s.byteLength} bytes, expected 8 for $float`,
        );
      const d = new DataView(s.buffer).getFloat64(0, yv);
      if (!bv(d)) throw new Error(`Float ${d} should be encoded as a number`);
      return d;
    }
    if (u === "$set")
      throw new Error(
        "Received a Set which is no longer supported as a Convex type.",
      );
    if (u === "$map")
      throw new Error(
        "Received a Map which is no longer supported as a Convex type.",
      );
  }
  const l = {};
  for (const [u, s] of Object.entries(i)) (Sv(u), (l[u] = Ua(s)));
  return l;
}
function Vr(i) {
  return JSON.stringify(i, (a, l) =>
    l === void 0 ? "undefined" : typeof l == "bigint" ? `${l.toString()}n` : l,
  );
}
function pf(i, a, l, u) {
  var d;
  if (i === void 0) {
    const h = l && ` (present at path ${l} in original object ${Vr(a)})`;
    throw new Error(
      `undefined is not a valid Convex value${h}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`,
    );
  }
  if (i === null) return i;
  if (typeof i == "bigint") {
    if (i < ka || Lf < i)
      throw new Error(`BigInt ${i} does not fit into a 64-bit signed integer.`);
    return { $integer: TS(i) };
  }
  if (typeof i == "number")
    if (bv(i)) {
      const h = new ArrayBuffer(8);
      return (
        new DataView(h).setFloat64(0, i, yv),
        { $float: $r(new Uint8Array(h)) }
      );
    } else return i;
  if (typeof i == "boolean" || typeof i == "string") return i;
  if (i instanceof ArrayBuffer) return { $bytes: $r(new Uint8Array(i)) };
  if (Array.isArray(i)) return i.map((h, m) => pf(h, a, l + `[${m}]`));
  if (i instanceof Set) throw new Error(Sc(l, "Set", [...i], a));
  if (i instanceof Map) throw new Error(Sc(l, "Map", [...i], a));
  if (!vv(i)) {
    const h =
        (d = i == null ? void 0 : i.constructor) == null ? void 0 : d.name,
      m = h ? `${h} ` : "";
    throw new Error(Sc(l, m, i, a));
  }
  const s = {},
    c = Object.entries(i);
  c.sort(([h, m], [p, y]) => (h === p ? 0 : h < p ? -1 : 1));
  for (const [h, m] of c)
    m !== void 0 && (Sv(h), (s[h] = pf(m, a, l + `.${h}`)));
  return s;
}
function Sc(i, a, l, u) {
  return i
    ? `${a}${Vr(l)} is not a supported Convex type (present at path ${i} in original object ${Vr(u)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${a}${Vr(l)} is not a supported Convex type.`;
}
function pi(i) {
  return pf(i, i, "");
}
var OS = Object.defineProperty,
  MS = (i, a, l) =>
    a in i
      ? OS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  Ec = (i, a, l) => MS(i, typeof a != "symbol" ? a + "" : a, l),
  ep,
  tp;
const xS = Symbol.for("ConvexError");
class vf extends ((tp = Error), (ep = xS), tp) {
  constructor(a) {
    (super(typeof a == "string" ? a : Vr(a)),
      Ec(this, "name", "ConvexError"),
      Ec(this, "data"),
      Ec(this, ep, !0),
      (this.data = a));
  }
}
const Ev = () => Array.from({ length: 4 }, () => 0);
Ev();
Ev();
const np = "1.26.2";
var NS = Object.defineProperty,
  kS = (i, a, l) =>
    a in i
      ? NS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  ip = (i, a, l) => kS(i, typeof a != "symbol" ? a + "" : a, l);
const US = "color:rgb(0, 145, 255)";
function wv(i) {
  switch (i) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class Cv {
  constructor(a) {
    (ip(this, "_onLogLineFuncs"),
      ip(this, "_verbose"),
      (this._onLogLineFuncs = {}),
      (this._verbose = a.verbose));
  }
  addLogLineListener(a) {
    let l = Math.random().toString(36).substring(2, 15);
    for (let u = 0; u < 10 && this._onLogLineFuncs[l] !== void 0; u++)
      l = Math.random().toString(36).substring(2, 15);
    return (
      (this._onLogLineFuncs[l] = a),
      () => {
        delete this._onLogLineFuncs[l];
      }
    );
  }
  logVerbose(...a) {
    if (this._verbose)
      for (const l of Object.values(this._onLogLineFuncs))
        l("debug", `${new Date().toISOString()}`, ...a);
  }
  log(...a) {
    for (const l of Object.values(this._onLogLineFuncs)) l("info", ...a);
  }
  warn(...a) {
    for (const l of Object.values(this._onLogLineFuncs)) l("warn", ...a);
  }
  error(...a) {
    for (const l of Object.values(this._onLogLineFuncs)) l("error", ...a);
  }
}
function _v(i) {
  const a = new Cv(i);
  return (
    a.addLogLineListener((l, ...u) => {
      switch (l) {
        case "debug":
          console.debug(...u);
          break;
        case "info":
          console.log(...u);
          break;
        case "warn":
          console.warn(...u);
          break;
        case "error":
          console.error(...u);
          break;
        default:
          console.log(...u);
      }
    }),
    a
  );
}
function Av(i) {
  return new Cv(i);
}
function Ls(i, a, l, u, s) {
  const c = wv(l);
  if (
    (typeof s == "object" &&
      (s = `ConvexError ${JSON.stringify(s.errorData, null, 2)}`),
    a === "info")
  ) {
    const d = s.match(/^\[.*?\] /);
    if (d === null) {
      i.error(`[CONVEX ${c}(${u})] Could not parse console.log`);
      return;
    }
    const h = s.slice(1, d[0].length - 2),
      m = s.slice(d[0].length);
    i.log(`%c[CONVEX ${c}(${u})] [${h}]`, US, m);
  } else i.error(`[CONVEX ${c}(${u})] ${s}`);
}
function jS(i, a) {
  const l = `[CONVEX FATAL ERROR] ${a}`;
  return (i.error(l), new Error(l));
}
function Na(i, a, l) {
  return `[CONVEX ${wv(i)}(${a})] ${l.errorMessage}
  Called by client`;
}
function yf(i, a) {
  return ((a.data = i.errorData), a);
}
function qs(i) {
  const a = i.split(":");
  let l, u;
  return (
    a.length === 1
      ? ((l = a[0]), (u = "default"))
      : ((l = a.slice(0, a.length - 1).join(":")), (u = a[a.length - 1])),
    l.endsWith(".js") && (l = l.slice(0, -3)),
    `${l}:${u}`
  );
}
function Bi(i, a) {
  return JSON.stringify({ udfPath: qs(i), args: pi(a) });
}
var DS = Object.defineProperty,
  zS = (i, a, l) =>
    a in i
      ? DS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  fn = (i, a, l) => zS(i, typeof a != "symbol" ? a + "" : a, l);
class LS {
  constructor() {
    (fn(this, "nextQueryId"),
      fn(this, "querySetVersion"),
      fn(this, "querySet"),
      fn(this, "queryIdToToken"),
      fn(this, "identityVersion"),
      fn(this, "auth"),
      fn(this, "outstandingQueriesOlderThanRestart"),
      fn(this, "outstandingAuthOlderThanRestart"),
      fn(this, "paused"),
      fn(this, "pendingQuerySetModifications"),
      (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map()),
      (this.outstandingQueriesOlderThanRestart = new Set()),
      (this.outstandingAuthOlderThanRestart = !1),
      (this.paused = !1),
      (this.pendingQuerySetModifications = new Map()));
  }
  hasSyncedPastLastReconnect() {
    return (
      this.outstandingQueriesOlderThanRestart.size === 0 &&
      !this.outstandingAuthOlderThanRestart
    );
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(a, l, u, s) {
    const c = qs(a),
      d = Bi(c, l),
      h = this.querySet.get(d);
    if (h !== void 0)
      return (
        (h.numSubscribers += 1),
        {
          queryToken: d,
          modification: null,
          unsubscribe: () => this.removeSubscriber(d),
        }
      );
    {
      const m = this.nextQueryId++,
        p = {
          id: m,
          canonicalizedUdfPath: c,
          args: l,
          numSubscribers: 1,
          journal: u,
          componentPath: s,
        };
      (this.querySet.set(d, p), this.queryIdToToken.set(m, d));
      const y = this.querySetVersion,
        w = this.querySetVersion + 1,
        C = {
          type: "Add",
          queryId: m,
          udfPath: c,
          args: [pi(l)],
          journal: u,
          componentPath: s,
        };
      return (
        this.paused
          ? this.pendingQuerySetModifications.set(m, C)
          : (this.querySetVersion = w),
        {
          queryToken: d,
          modification: {
            type: "ModifyQuerySet",
            baseVersion: y,
            newVersion: w,
            modifications: [C],
          },
          unsubscribe: () => this.removeSubscriber(d),
        }
      );
    }
  }
  transition(a) {
    for (const l of a.modifications)
      switch (l.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(l.queryId);
          const u = l.journal;
          if (u !== void 0) {
            const s = this.queryIdToToken.get(l.queryId);
            s !== void 0 && (this.querySet.get(s).journal = u);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(l.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${l.type}`);
      }
  }
  queryId(a, l) {
    const u = qs(a),
      s = Bi(u, l),
      c = this.querySet.get(s);
    return c !== void 0 ? c.id : null;
  }
  isCurrentOrNewerAuthVersion(a) {
    return a >= this.identityVersion;
  }
  setAuth(a) {
    this.auth = { tokenType: "User", value: a };
    const l = this.identityVersion;
    return (
      this.paused || (this.identityVersion = l + 1),
      { type: "Authenticate", baseVersion: l, ...this.auth }
    );
  }
  setAdminAuth(a, l) {
    const u = { tokenType: "Admin", value: a, impersonating: l };
    this.auth = u;
    const s = this.identityVersion;
    return (
      this.paused || (this.identityVersion = s + 1),
      { type: "Authenticate", baseVersion: s, ...u }
    );
  }
  clearAuth() {
    ((this.auth = void 0), this.markAuthCompletion());
    const a = this.identityVersion;
    return (
      this.paused || (this.identityVersion = a + 1),
      { type: "Authenticate", tokenType: "None", baseVersion: a }
    );
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(a) {
    var l;
    return ((l = this.auth) == null ? void 0 : l.value) !== a;
  }
  queryPath(a) {
    const l = this.queryIdToToken.get(a);
    return l ? this.querySet.get(l).canonicalizedUdfPath : null;
  }
  queryArgs(a) {
    const l = this.queryIdToToken.get(a);
    return l ? this.querySet.get(l).args : null;
  }
  queryToken(a) {
    return this.queryIdToToken.get(a) ?? null;
  }
  queryJournal(a) {
    var l;
    return (l = this.querySet.get(a)) == null ? void 0 : l.journal;
  }
  restart(a) {
    (this.unpause(), this.outstandingQueriesOlderThanRestart.clear());
    const l = [];
    for (const c of this.querySet.values()) {
      const d = {
        type: "Add",
        queryId: c.id,
        udfPath: c.canonicalizedUdfPath,
        args: [pi(c.args)],
        journal: c.journal,
        componentPath: c.componentPath,
      };
      (l.push(d),
        a.has(c.id) || this.outstandingQueriesOlderThanRestart.add(c.id));
    }
    this.querySetVersion = 1;
    const u = {
      type: "ModifyQuerySet",
      baseVersion: 0,
      newVersion: 1,
      modifications: l,
    };
    if (!this.auth) return ((this.identityVersion = 0), [u, void 0]);
    this.outstandingAuthOlderThanRestart = !0;
    const s = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return ((this.identityVersion = 1), [u, s]);
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const a =
        this.pendingQuerySetModifications.size > 0
          ? {
              type: "ModifyQuerySet",
              baseVersion: this.querySetVersion,
              newVersion: ++this.querySetVersion,
              modifications: Array.from(
                this.pendingQuerySetModifications.values(),
              ),
            }
          : void 0,
      l =
        this.auth !== void 0
          ? {
              type: "Authenticate",
              baseVersion: this.identityVersion++,
              ...this.auth,
            }
          : void 0;
    return (this.unpause(), [a, l]);
  }
  unpause() {
    ((this.paused = !1), this.pendingQuerySetModifications.clear());
  }
  removeSubscriber(a) {
    const l = this.querySet.get(a);
    if (l.numSubscribers > 1) return ((l.numSubscribers -= 1), null);
    {
      (this.querySet.delete(a),
        this.queryIdToToken.delete(l.id),
        this.outstandingQueriesOlderThanRestart.delete(l.id));
      const u = this.querySetVersion,
        s = this.querySetVersion + 1,
        c = { type: "Remove", queryId: l.id };
      return (
        this.paused
          ? this.pendingQuerySetModifications.has(l.id)
            ? this.pendingQuerySetModifications.delete(l.id)
            : this.pendingQuerySetModifications.set(l.id, c)
          : (this.querySetVersion = s),
        {
          type: "ModifyQuerySet",
          baseVersion: u,
          newVersion: s,
          modifications: [c],
        }
      );
    }
  }
}
var qS = Object.defineProperty,
  BS = (i, a, l) =>
    a in i
      ? qS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  Es = (i, a, l) => BS(i, typeof a != "symbol" ? a + "" : a, l);
class HS {
  constructor(a, l) {
    ((this.logger = a),
      (this.markConnectionStateDirty = l),
      Es(this, "inflightRequests"),
      Es(this, "requestsOlderThanRestart"),
      Es(this, "inflightMutationsCount", 0),
      Es(this, "inflightActionsCount", 0),
      (this.inflightRequests = new Map()),
      (this.requestsOlderThanRestart = new Set()));
  }
  request(a, l) {
    const u = new Promise((s) => {
      const c = l ? "Requested" : "NotSent";
      (this.inflightRequests.set(a.requestId, {
        message: a,
        status: { status: c, requestedAt: new Date(), onResult: s },
      }),
        a.type === "Mutation"
          ? this.inflightMutationsCount++
          : a.type === "Action" && this.inflightActionsCount++);
    });
    return (this.markConnectionStateDirty(), u);
  }
  onResponse(a) {
    const l = this.inflightRequests.get(a.requestId);
    if (l === void 0 || l.status.status === "Completed") return null;
    const u = l.message.type === "Mutation" ? "mutation" : "action",
      s = l.message.udfPath;
    for (const m of a.logLines) Ls(this.logger, "info", u, s, m);
    const c = l.status;
    let d, h;
    if (a.success)
      ((d = { success: !0, logLines: a.logLines, value: Ua(a.result) }),
        (h = () => c.onResult(d)));
    else {
      const m = a.result,
        { errorData: p } = a;
      (Ls(this.logger, "error", u, s, m),
        (d = {
          success: !1,
          errorMessage: m,
          errorData: p !== void 0 ? Ua(p) : void 0,
          logLines: a.logLines,
        }),
        (h = () => c.onResult(d)));
    }
    return a.type === "ActionResponse" || !a.success
      ? (h(),
        this.inflightRequests.delete(a.requestId),
        this.requestsOlderThanRestart.delete(a.requestId),
        l.message.type === "Action"
          ? this.inflightActionsCount--
          : l.message.type === "Mutation" && this.inflightMutationsCount--,
        this.markConnectionStateDirty(),
        { requestId: a.requestId, result: d })
      : ((l.status = {
          status: "Completed",
          result: d,
          ts: a.ts,
          onResolve: h,
        }),
        null);
  }
  removeCompleted(a) {
    const l = new Map();
    for (const [u, s] of this.inflightRequests.entries()) {
      const c = s.status;
      c.status === "Completed" &&
        c.ts.lessThanOrEqual(a) &&
        (c.onResolve(),
        l.set(u, c.result),
        s.message.type === "Mutation"
          ? this.inflightMutationsCount--
          : s.message.type === "Action" && this.inflightActionsCount--,
        this.inflightRequests.delete(u),
        this.requestsOlderThanRestart.delete(u));
    }
    return (l.size > 0 && this.markConnectionStateDirty(), l);
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const a = [];
    for (const [l, u] of this.inflightRequests) {
      if (u.status.status === "NotSent") {
        ((u.status.status = "Requested"), a.push(u.message));
        continue;
      }
      if (u.message.type === "Mutation") a.push(u.message);
      else if (u.message.type === "Action") {
        if (
          (this.inflightRequests.delete(l),
          this.requestsOlderThanRestart.delete(l),
          this.inflightActionsCount--,
          u.status.status === "Completed")
        )
          throw new Error("Action should never be in 'Completed' state");
        u.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: [],
        });
      }
    }
    return (this.markConnectionStateDirty(), a);
  }
  resume() {
    const a = [];
    for (const [, l] of this.inflightRequests)
      if (l.status.status === "NotSent") {
        ((l.status.status = "Requested"), a.push(l.message));
        continue;
      }
    return a;
  }
  hasIncompleteRequests() {
    for (const a of this.inflightRequests.values())
      if (a.status.status === "Requested") return !0;
    return !1;
  }
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) return null;
    let a = Date.now();
    for (const l of this.inflightRequests.values())
      l.status.status !== "Completed" &&
        l.status.requestedAt.getTime() < a &&
        (a = l.status.requestedAt.getTime());
    return new Date(a);
  }
  inflightMutations() {
    return this.inflightMutationsCount;
  }
  inflightActions() {
    return this.inflightActionsCount;
  }
}
const Xr = Symbol.for("functionName"),
  VS = Symbol.for("toReferencePath");
function PS(i) {
  return i[VS] ?? null;
}
function QS(i) {
  return i.startsWith("function://");
}
function YS(i) {
  let a;
  if (typeof i == "string")
    QS(i) ? (a = { functionHandle: i }) : (a = { name: i });
  else if (i[Xr]) a = { name: i[Xr] };
  else {
    const l = PS(i);
    if (!l) throw new Error(`${i} is not a functionReference`);
    a = { reference: l };
  }
  return a;
}
function qt(i) {
  const a = YS(i);
  if (a.name === void 0)
    throw a.functionHandle !== void 0
      ? new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${a.functionHandle}`,
        )
      : a.reference !== void 0
        ? new Error(
            `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${a.reference}`,
          )
        : new Error(
            `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(a)}`,
          );
  if (typeof i == "string") return i;
  const l = i[Xr];
  if (!l) throw new Error(`${i} is not a functionReference`);
  return l;
}
function Tv(i) {
  return { [Xr]: i };
}
function Rv(i = []) {
  const a = {
    get(l, u) {
      if (typeof u == "string") {
        const s = [...i, u];
        return Rv(s);
      } else if (u === Xr) {
        if (i.length < 2) {
          const d = ["api", ...i].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${d}\``,
          );
        }
        const s = i.slice(0, -1).join("/"),
          c = i[i.length - 1];
        return c === "default" ? s : s + ":" + c;
      } else return u === Symbol.toStringTag ? "FunctionReference" : void 0;
    },
  };
  return new Proxy({}, a);
}
const GS = Rv();
var IS = Object.defineProperty,
  $S = (i, a, l) =>
    a in i
      ? IS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  Bs = (i, a, l) => $S(i, typeof a != "symbol" ? a + "" : a, l);
class Kr {
  constructor(a) {
    (Bs(this, "queryResults"),
      Bs(this, "modifiedQueries"),
      (this.queryResults = a),
      (this.modifiedQueries = []));
  }
  getQuery(a, ...l) {
    const u = jn(l[0]),
      s = qt(a),
      c = this.queryResults.get(Bi(s, u));
    if (c !== void 0) return Kr.queryValue(c.result);
  }
  getAllQueries(a) {
    const l = [],
      u = qt(a);
    for (const s of this.queryResults.values())
      s.udfPath === qs(u) &&
        l.push({ args: s.args, value: Kr.queryValue(s.result) });
    return l;
  }
  setQuery(a, l, u) {
    const s = jn(l),
      c = qt(a),
      d = Bi(c, s);
    let h;
    u === void 0 ? (h = void 0) : (h = { success: !0, value: u, logLines: [] });
    const m = { udfPath: c, args: s, result: h };
    (this.queryResults.set(d, m), this.modifiedQueries.push(d));
  }
  static queryValue(a) {
    if (a !== void 0) return a.success ? a.value : void 0;
  }
}
class XS {
  constructor() {
    (Bs(this, "queryResults"),
      Bs(this, "optimisticUpdates"),
      (this.queryResults = new Map()),
      (this.optimisticUpdates = []));
  }
  ingestQueryResultsFromServer(a, l) {
    this.optimisticUpdates = this.optimisticUpdates.filter(
      (d) => !l.has(d.mutationId),
    );
    const u = this.queryResults;
    this.queryResults = new Map(a);
    const s = new Kr(this.queryResults);
    for (const d of this.optimisticUpdates) d.update(s);
    const c = [];
    for (const [d, h] of this.queryResults) {
      const m = u.get(d);
      (m === void 0 || m.result !== h.result) && c.push(d);
    }
    return c;
  }
  applyOptimisticUpdate(a, l) {
    this.optimisticUpdates.push({ update: a, mutationId: l });
    const u = new Kr(this.queryResults);
    return (a(u), u.modifiedQueries);
  }
  rawQueryResult(a) {
    return this.queryResults.get(a);
  }
  queryResult(a) {
    const l = this.queryResults.get(a);
    if (l === void 0) return;
    const u = l.result;
    if (u !== void 0) {
      if (u.success) return u.value;
      throw u.errorData !== void 0
        ? yf(u, new vf(Na("query", l.udfPath, u)))
        : new Error(Na("query", l.udfPath, u));
    }
  }
  hasQueryResult(a) {
    return this.queryResults.get(a) !== void 0;
  }
  queryLogs(a) {
    var u;
    const l = this.queryResults.get(a);
    return (u = l == null ? void 0 : l.result) == null ? void 0 : u.logLines;
  }
}
var KS = Object.defineProperty,
  ZS = (i, a, l) =>
    a in i
      ? KS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  wc = (i, a, l) => ZS(i, typeof a != "symbol" ? a + "" : a, l);
class Lt {
  constructor(a, l) {
    (wc(this, "low"),
      wc(this, "high"),
      wc(this, "__isUnsignedLong__"),
      (this.low = a | 0),
      (this.high = l | 0),
      (this.__isUnsignedLong__ = !0));
  }
  static isLong(a) {
    return (a && a.__isUnsignedLong__) === !0;
  }
  static fromBytesLE(a) {
    return new Lt(
      a[0] | (a[1] << 8) | (a[2] << 16) | (a[3] << 24),
      a[4] | (a[5] << 8) | (a[6] << 16) | (a[7] << 24),
    );
  }
  toBytesLE() {
    const a = this.high,
      l = this.low;
    return [
      l & 255,
      (l >>> 8) & 255,
      (l >>> 16) & 255,
      l >>> 24,
      a & 255,
      (a >>> 8) & 255,
      (a >>> 16) & 255,
      a >>> 24,
    ];
  }
  static fromNumber(a) {
    return isNaN(a) || a < 0
      ? ap
      : a >= FS
        ? JS
        : new Lt(a % Pr | 0, (a / Pr) | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(Pr) + BigInt(this.low)).toString();
  }
  equals(a) {
    return (
      Lt.isLong(a) || (a = Lt.fromValue(a)),
      this.high >>> 31 === 1 && a.high >>> 31 === 1
        ? !1
        : this.high === a.high && this.low === a.low
    );
  }
  notEquals(a) {
    return !this.equals(a);
  }
  comp(a) {
    return (
      Lt.isLong(a) || (a = Lt.fromValue(a)),
      this.equals(a)
        ? 0
        : a.high >>> 0 > this.high >>> 0 ||
            (a.high === this.high && a.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
    );
  }
  lessThanOrEqual(a) {
    return this.comp(a) <= 0;
  }
  static fromValue(a) {
    return typeof a == "number" ? Lt.fromNumber(a) : new Lt(a.low, a.high);
  }
}
const ap = new Lt(0, 0),
  rp = 65536,
  Pr = rp * rp,
  FS = Pr * Pr,
  JS = new Lt(-1, -1);
var WS = Object.defineProperty,
  e1 = (i, a, l) =>
    a in i
      ? WS(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  ws = (i, a, l) => e1(i, typeof a != "symbol" ? a + "" : a, l);
class lp {
  constructor(a, l) {
    (ws(this, "version"),
      ws(this, "remoteQuerySet"),
      ws(this, "queryPath"),
      ws(this, "logger"),
      (this.version = { querySet: 0, ts: Lt.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = a),
      (this.logger = l));
  }
  transition(a) {
    const l = a.startVersion;
    if (
      this.version.querySet !== l.querySet ||
      this.version.ts.notEquals(l.ts) ||
      this.version.identity !== l.identity
    )
      throw new Error(
        `Invalid start version: ${l.ts.toString()}:${l.querySet}`,
      );
    for (const u of a.modifications)
      switch (u.type) {
        case "QueryUpdated": {
          const s = this.queryPath(u.queryId);
          if (s)
            for (const d of u.logLines) Ls(this.logger, "info", "query", s, d);
          const c = Ua(u.value ?? null);
          this.remoteQuerySet.set(u.queryId, {
            success: !0,
            value: c,
            logLines: u.logLines,
          });
          break;
        }
        case "QueryFailed": {
          const s = this.queryPath(u.queryId);
          if (s)
            for (const d of u.logLines) Ls(this.logger, "info", "query", s, d);
          const { errorData: c } = u;
          this.remoteQuerySet.set(u.queryId, {
            success: !1,
            errorMessage: u.errorMessage,
            errorData: c !== void 0 ? Ua(c) : void 0,
            logLines: u.logLines,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(u.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${u.type}`);
      }
    this.version = a.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function Cc(i) {
  const a = Ir(i);
  return Lt.fromBytesLE(Array.from(a));
}
function t1(i) {
  const a = new Uint8Array(i.toBytesLE());
  return $r(a);
}
function n1(i) {
  switch (i.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "Ping":
      return { ...i };
    case "MutationResponse":
      return i.success ? { ...i, ts: Cc(i.ts) } : { ...i };
    case "Transition":
      return {
        ...i,
        startVersion: { ...i.startVersion, ts: Cc(i.startVersion.ts) },
        endVersion: { ...i.endVersion, ts: Cc(i.endVersion.ts) },
      };
  }
}
function i1(i) {
  switch (i.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...i };
    case "Connect":
      return i.maxObservedTimestamp !== void 0
        ? { ...i, maxObservedTimestamp: t1(i.maxObservedTimestamp) }
        : { ...i, maxObservedTimestamp: void 0 };
  }
}
var a1 = Object.defineProperty,
  r1 = (i, a, l) =>
    a in i
      ? a1(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  gt = (i, a, l) => r1(i, typeof a != "symbol" ? a + "" : a, l);
const l1 = 1e3,
  s1 = 1001,
  u1 = 1005,
  o1 = 4040,
  Ov = {
    InternalServerError: { timeout: 1e3 },
    SubscriptionsWorkerFullError: { timeout: 3e3 },
    TooManyConcurrentRequests: { timeout: 3e3 },
    CommitterFullError: { timeout: 3e3 },
    AwsTooManyRequestsException: { timeout: 3e3 },
    ExecuteFullError: { timeout: 3e3 },
    SystemTimeoutError: { timeout: 3e3 },
    ExpiredInQueue: { timeout: 3e3 },
    VectorIndexesUnavailable: { timeout: 1e3 },
    SearchIndexesUnavailable: { timeout: 1e3 },
    TableSummariesUnavailable: { timeout: 1e3 },
    VectorIndexTooLarge: { timeout: 3e3 },
    SearchIndexTooLarge: { timeout: 3e3 },
    TooManyWritesInTimePeriod: { timeout: 3e3 },
  };
function c1(i) {
  if (i === void 0) return "Unknown";
  for (const a of Object.keys(Ov)) if (i.startsWith(a)) return a;
  return "Unknown";
}
class f1 {
  constructor(a, l, u, s, c) {
    ((this.markConnectionStateDirty = c),
      gt(this, "socket"),
      gt(this, "connectionCount"),
      gt(this, "_hasEverConnected", !1),
      gt(this, "lastCloseReason"),
      gt(this, "defaultInitialBackoff"),
      gt(this, "maxBackoff"),
      gt(this, "retries"),
      gt(this, "serverInactivityThreshold"),
      gt(this, "reconnectDueToServerInactivityTimeout"),
      gt(this, "uri"),
      gt(this, "onOpen"),
      gt(this, "onResume"),
      gt(this, "onMessage"),
      gt(this, "webSocketConstructor"),
      gt(this, "logger"),
      gt(this, "onServerDisconnectError"),
      (this.webSocketConstructor = u),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.defaultInitialBackoff = 1e3),
      (this.maxBackoff = 16e3),
      (this.retries = 0),
      (this.serverInactivityThreshold = 6e4),
      (this.reconnectDueToServerInactivityTimeout = null),
      (this.uri = a),
      (this.onOpen = l.onOpen),
      (this.onResume = l.onResume),
      (this.onMessage = l.onMessage),
      (this.onServerDisconnectError = l.onServerDisconnectError),
      (this.logger = s),
      this.connect());
  }
  setSocketState(a) {
    ((this.socket = a),
      this._logVerbose(
        `socket state changed: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}`,
      ),
      this.markConnectionStateDirty());
  }
  connect() {
    if (this.socket.state === "terminated") return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error(
        "Didn't start connection from disconnected state: " + this.socket.state,
      );
    const a = new this.webSocketConstructor(this.uri);
    (this._logVerbose("constructed WebSocket"),
      this.setSocketState({ state: "connecting", ws: a, paused: "no" }),
      this.resetServerInactivityTimeout(),
      (a.onopen = () => {
        if (
          (this.logger.logVerbose("begin ws.onopen"),
          this.socket.state !== "connecting")
        )
          throw new Error("onopen called with socket not in connecting state");
        (this.setSocketState({
          state: "ready",
          ws: a,
          paused: this.socket.paused === "yes" ? "uninitialized" : "no",
        }),
          this.resetServerInactivityTimeout(),
          this.socket.paused === "no" &&
            ((this._hasEverConnected = !0),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            })),
          this.lastCloseReason !== "InitialConnect" &&
            this.logger.log("WebSocket reconnected"),
          (this.connectionCount += 1),
          (this.lastCloseReason = null));
      }),
      (a.onerror = (l) => {
        const u = l.message;
        this.logger.log(`WebSocket error: ${u}`);
      }),
      (a.onmessage = (l) => {
        this.resetServerInactivityTimeout();
        const u = n1(JSON.parse(l.data));
        (this._logVerbose(`received ws message with type ${u.type}`),
          this.onMessage(u).hasSyncedPastLastReconnect &&
            ((this.retries = 0), this.markConnectionStateDirty()));
      }),
      (a.onclose = (l) => {
        if (
          (this._logVerbose("begin ws.onclose"),
          this.lastCloseReason === null &&
            (this.lastCloseReason = l.reason ?? "OnCloseInvoked"),
          l.code !== l1 && l.code !== s1 && l.code !== u1 && l.code !== o1)
        ) {
          let s = `WebSocket closed with code ${l.code}`;
          (l.reason && (s += `: ${l.reason}`),
            this.logger.log(s),
            this.onServerDisconnectError &&
              l.reason &&
              this.onServerDisconnectError(s));
        }
        const u = c1(l.reason);
        this.scheduleReconnect(u);
      }));
  }
  socketState() {
    return this.socket.state;
  }
  sendMessage(a) {
    const l = {
      type: a.type,
      ...(a.type === "Authenticate" && a.tokenType === "User"
        ? { value: `...${a.value.slice(-7)}` }
        : {}),
    };
    if (this.socket.state === "ready" && this.socket.paused === "no") {
      const u = i1(a),
        s = JSON.stringify(u);
      try {
        this.socket.ws.send(s);
      } catch (c) {
        (this.logger.log(
          `Failed to send message on WebSocket, reconnecting: ${c}`,
        ),
          this.closeAndReconnect("FailedToSendMessage"));
      }
      return (
        this._logVerbose(
          `sent message with type ${a.type}: ${JSON.stringify(l)}`,
        ),
        !0
      );
    }
    return (
      this._logVerbose(
        `message not sent (socket state: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}): ${JSON.stringify(l)}`,
      ),
      !1
    );
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" &&
      (this.reconnectDueToServerInactivityTimeout !== null &&
        (clearTimeout(this.reconnectDueToServerInactivityTimeout),
        (this.reconnectDueToServerInactivityTimeout = null)),
      (this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
        this.closeAndReconnect("InactiveServer");
      }, this.serverInactivityThreshold)));
  }
  scheduleReconnect(a) {
    this.socket = { state: "disconnected" };
    const l = this.nextBackoff(a);
    (this.markConnectionStateDirty(),
      this.logger.log(`Attempting reconnect in ${l}ms`),
      setTimeout(() => this.connect(), l));
  }
  closeAndReconnect(a) {
    switch (
      (this._logVerbose(`begin closeAndReconnect with reason ${a}`),
      this.socket.state)
    ) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        ((this.lastCloseReason = a),
          this.close(),
          this.scheduleReconnect("client"));
        return;
      }
      default:
        this.socket;
    }
  }
  close() {
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const a = this.socket.ws;
        return new Promise((l) => {
          ((a.onclose = () => {
            (this._logVerbose("Closed after connecting"), l());
          }),
            (a.onopen = () => {
              (this._logVerbose("Opened after connecting"), a.close());
            }));
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const a = this.socket.ws,
          l = new Promise((u) => {
            a.onclose = () => {
              u();
            };
          });
        return (a.close(), l);
      }
      default:
        return (this.socket, Promise.resolve());
    }
  }
  terminate() {
    switch (
      (this.reconnectDueToServerInactivityTimeout &&
        clearTimeout(this.reconnectDueToServerInactivityTimeout),
      this.socket.state)
    ) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const a = this.close();
        return (this.setSocketState({ state: "terminated" }), a);
      }
      default:
        throw (
          this.socket,
          new Error(`Invalid websocket state: ${this.socket.state}`)
        );
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        const a = this.close();
        return ((this.socket = { state: "stopped" }), a);
      }
      default:
        return (this.socket, Promise.resolve());
    }
  }
  tryRestart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
      case "connecting":
      case "ready":
      case "disconnected":
        this.logger.logVerbose("Restart called without stopping first");
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized"
          ? ((this.socket = { ...this.socket, paused: "no" }),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }))
          : this.socket.paused === "yes" &&
            ((this.socket = { ...this.socket, paused: "no" }), this.onResume());
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  connectionState() {
    return {
      isConnected: this.socket.state === "ready",
      hasEverConnected: this._hasEverConnected,
      connectionCount: this.connectionCount,
      connectionRetries: this.retries,
    };
  }
  _logVerbose(a) {
    this.logger.logVerbose(a);
  }
  nextBackoff(a) {
    const u =
      (a === "client"
        ? 100
        : a === "Unknown"
          ? this.defaultInitialBackoff
          : Ov[a].timeout) * Math.pow(2, this.retries);
    this.retries += 1;
    const s = Math.min(u, this.maxBackoff),
      c = s * (Math.random() - 0.5);
    return s + c;
  }
}
function d1() {
  return h1();
}
function h1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const a = (Math.random() * 16) | 0;
    return (i === "x" ? a : (a & 3) | 8).toString(16);
  });
}
class qr extends Error {}
qr.prototype.name = "InvalidTokenError";
function m1(i) {
  return decodeURIComponent(
    atob(i).replace(/(.)/g, (a, l) => {
      let u = l.charCodeAt(0).toString(16).toUpperCase();
      return (u.length < 2 && (u = "0" + u), "%" + u);
    }),
  );
}
function g1(i) {
  let a = i.replace(/-/g, "+").replace(/_/g, "/");
  switch (a.length % 4) {
    case 0:
      break;
    case 2:
      a += "==";
      break;
    case 3:
      a += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return m1(a);
  } catch {
    return atob(a);
  }
}
function p1(i, a) {
  if (typeof i != "string")
    throw new qr("Invalid token specified: must be a string");
  a || (a = {});
  const l = a.header === !0 ? 0 : 1,
    u = i.split(".")[l];
  if (typeof u != "string")
    throw new qr(`Invalid token specified: missing part #${l + 1}`);
  let s;
  try {
    s = g1(u);
  } catch (c) {
    throw new qr(
      `Invalid token specified: invalid base64 for part #${l + 1} (${c.message})`,
    );
  }
  try {
    return JSON.parse(s);
  } catch (c) {
    throw new qr(
      `Invalid token specified: invalid json for part #${l + 1} (${c.message})`,
    );
  }
}
var v1 = Object.defineProperty,
  y1 = (i, a, l) =>
    a in i
      ? v1(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  Kt = (i, a, l) => y1(i, typeof a != "symbol" ? a + "" : a, l);
const b1 = 20 * 24 * 60 * 60 * 1e3,
  sp = 2;
class S1 {
  constructor(a, l, u) {
    (Kt(this, "authState", { state: "noAuth" }),
      Kt(this, "configVersion", 0),
      Kt(this, "syncState"),
      Kt(this, "authenticate"),
      Kt(this, "stopSocket"),
      Kt(this, "tryRestartSocket"),
      Kt(this, "pauseSocket"),
      Kt(this, "resumeSocket"),
      Kt(this, "clearAuth"),
      Kt(this, "logger"),
      Kt(this, "refreshTokenLeewaySeconds"),
      Kt(this, "tokenConfirmationAttempts", 0),
      (this.syncState = a),
      (this.authenticate = l.authenticate),
      (this.stopSocket = l.stopSocket),
      (this.tryRestartSocket = l.tryRestartSocket),
      (this.pauseSocket = l.pauseSocket),
      (this.resumeSocket = l.resumeSocket),
      (this.clearAuth = l.clearAuth),
      (this.logger = u.logger),
      (this.refreshTokenLeewaySeconds = u.refreshTokenLeewaySeconds));
  }
  async setConfig(a, l) {
    (this.resetAuthState(),
      this._logVerbose("pausing WS for auth token fetch"),
      this.pauseSocket());
    const u = await this.fetchTokenAndGuardAgainstRace(a, {
      forceRefreshToken: !1,
    });
    u.isFromOutdatedConfig ||
      (u.value
        ? (this.setAuthState({
            state: "waitingForServerConfirmationOfCachedToken",
            config: { fetchToken: a, onAuthChange: l },
            hasRetried: !1,
          }),
          this.authenticate(u.value))
        : (this.setAuthState({
            state: "initialRefetch",
            config: { fetchToken: a, onAuthChange: l },
          }),
          await this.refetchToken()),
      this._logVerbose("resuming WS after auth token fetch"),
      this.resumeSocket());
  }
  onTransition(a) {
    if (
      this.syncState.isCurrentOrNewerAuthVersion(a.endVersion.identity) &&
      !(a.endVersion.identity <= a.startVersion.identity)
    ) {
      if (
        this.authState.state === "waitingForServerConfirmationOfCachedToken"
      ) {
        (this._logVerbose("server confirmed auth token is valid"),
          this.refetchToken(),
          this.authState.config.onAuthChange(!0));
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
        (this._logVerbose("server confirmed new auth token is valid"),
        this.scheduleTokenRefetch(this.authState.token),
        (this.tokenConfirmationAttempts = 0),
        this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(a) {
    if (
      a.authUpdateAttempted === !1 &&
      (this.authState.state === "waitingForServerConfirmationOfFreshToken" ||
        this.authState.state === "waitingForServerConfirmationOfCachedToken")
    ) {
      this._logVerbose("ignoring non-auth token expired error");
      return;
    }
    const { baseVersion: l } = a;
    if (!this.syncState.isCurrentOrNewerAuthVersion(l + 1)) {
      this._logVerbose("ignoring auth error for previous auth attempt");
      return;
    }
    this.tryToReauthenticate(a);
  }
  async tryToReauthenticate(a) {
    if (
      (this._logVerbose(`attempting to reauthenticate: ${a.error}`),
      this.authState.state === "noAuth" ||
        (this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
          this.tokenConfirmationAttempts >= sp))
    ) {
      (this.logger.error(
        `Failed to authenticate: "${a.error}", check your server auth config`,
      ),
        this.syncState.hasAuth() && this.syncState.clearAuth(),
        this.authState.state !== "noAuth" &&
          this.setAndReportAuthFailed(this.authState.config.onAuthChange));
      return;
    }
    (this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
      (this.tokenConfirmationAttempts++,
      this._logVerbose(
        `retrying reauthentication, ${sp - this.tokenConfirmationAttempts} attempts remaining`,
      )),
      await this.stopSocket());
    const l = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      { forceRefreshToken: !0 },
    );
    l.isFromOutdatedConfig ||
      (l.value && this.syncState.isNewAuth(l.value)
        ? (this.authenticate(l.value),
          this.setAuthState({
            state: "waitingForServerConfirmationOfFreshToken",
            config: this.authState.config,
            token: l.value,
            hadAuth:
              this.authState.state === "notRefetching" ||
              this.authState.state === "waitingForScheduledRefetch",
          }))
        : (this._logVerbose(
            "reauthentication failed, could not fetch a new token",
          ),
          this.syncState.hasAuth() && this.syncState.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this.tryRestartSocket());
  }
  async refetchToken() {
    if (this.authState.state === "noAuth") return;
    this._logVerbose("refetching auth token");
    const a = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      { forceRefreshToken: !0 },
    );
    a.isFromOutdatedConfig ||
      (a.value
        ? this.syncState.isNewAuth(a.value)
          ? (this.setAuthState({
              state: "waitingForServerConfirmationOfFreshToken",
              hadAuth: this.syncState.hasAuth(),
              token: a.value,
              config: this.authState.config,
            }),
            this.authenticate(a.value))
          : this.setAuthState({
              state: "notRefetching",
              config: this.authState.config,
            })
        : (this._logVerbose("refetching token failed"),
          this.syncState.hasAuth() && this.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this._logVerbose(
        "restarting WS after auth token fetch (if currently stopped)",
      ),
      this.tryRestartSocket());
  }
  scheduleTokenRefetch(a) {
    if (this.authState.state === "noAuth") return;
    const l = this.decodeToken(a);
    if (!l) {
      this.logger.error(
        "Auth token is not a valid JWT, cannot refetch the token",
      );
      return;
    }
    const { iat: u, exp: s } = l;
    if (!u || !s) {
      this.logger.error(
        "Auth token does not have required fields, cannot refetch the token",
      );
      return;
    }
    const c = s - u;
    if (c <= 2) {
      this.logger.error(
        "Auth token does not live long enough, cannot refetch the token",
      );
      return;
    }
    let d = Math.min(b1, (c - this.refreshTokenLeewaySeconds) * 1e3);
    d <= 0 &&
      (this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${c}s`,
      ),
      (d = 0));
    const h = setTimeout(() => {
      (this._logVerbose("running scheduled token refetch"),
        this.refetchToken());
    }, d);
    (this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: h,
      config: this.authState.config,
    }),
      this._logVerbose(`scheduled preemptive auth token refetching in ${d}ms`));
  }
  async fetchTokenAndGuardAgainstRace(a, l) {
    const u = ++this.configVersion;
    this._logVerbose(`fetching token with config version ${u}`);
    const s = await a(l);
    return this.configVersion !== u
      ? (this._logVerbose(
          `stale config version, expected ${u}, got ${this.configVersion}`,
        ),
        { isFromOutdatedConfig: !0 })
      : { isFromOutdatedConfig: !1, value: s };
  }
  stop() {
    (this.resetAuthState(),
      this.configVersion++,
      this._logVerbose(`config version bumped to ${this.configVersion}`));
  }
  setAndReportAuthFailed(a) {
    (a(!1), this.resetAuthState());
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(a) {
    const l =
      a.state === "waitingForServerConfirmationOfFreshToken"
        ? {
            hadAuth: a.hadAuth,
            state: a.state,
            token: `...${a.token.slice(-7)}`,
          }
        : { state: a.state };
    switch (
      (this._logVerbose(`setting auth state to ${JSON.stringify(l)}`), a.state)
    ) {
      case "waitingForScheduledRefetch":
      case "notRefetching":
      case "noAuth":
        this.tokenConfirmationAttempts = 0;
        break;
    }
    (this.authState.state === "waitingForScheduledRefetch" &&
      (clearTimeout(this.authState.refetchTokenTimeoutId),
      this.syncState.markAuthCompletion()),
      (this.authState = a));
  }
  decodeToken(a) {
    try {
      return p1(a);
    } catch (l) {
      return (
        this._logVerbose(
          `Error decoding token: ${l instanceof Error ? l.message : "Unknown error"}`,
        ),
        null
      );
    }
  }
  _logVerbose(a) {
    this.logger.logVerbose(`${a} [v${this.configVersion}]`);
  }
}
const E1 = [
  "convexClientConstructed",
  "convexWebSocketOpen",
  "convexFirstMessageReceived",
];
function w1(i, a) {
  const l = { sessionId: a };
  typeof performance > "u" ||
    !performance.mark ||
    performance.mark(i, { detail: l });
}
function C1(i) {
  let a = i.name.slice(6);
  return (
    (a = a.charAt(0).toLowerCase() + a.slice(1)),
    { name: a, startTime: i.startTime }
  );
}
function _1(i) {
  if (typeof performance > "u" || !performance.getEntriesByName) return [];
  const a = [];
  for (const l of E1) {
    const u = performance
      .getEntriesByName(l)
      .filter((s) => s.entryType === "mark")
      .filter((s) => s.detail.sessionId === i);
    a.push(...u);
  }
  return a.map(C1);
}
var A1 = Object.defineProperty,
  T1 = (i, a, l) =>
    a in i
      ? A1(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  Ke = (i, a, l) => T1(i, typeof a != "symbol" ? a + "" : a, l);
class R1 {
  constructor(a, l, u) {
    if (
      (Ke(this, "address"),
      Ke(this, "state"),
      Ke(this, "requestManager"),
      Ke(this, "webSocketManager"),
      Ke(this, "authenticationManager"),
      Ke(this, "remoteQuerySet"),
      Ke(this, "optimisticQueryResults"),
      Ke(this, "_transitionHandlerCounter", 0),
      Ke(this, "_nextRequestId"),
      Ke(this, "_onTransitionFns", new Map()),
      Ke(this, "_sessionId"),
      Ke(this, "firstMessageReceived", !1),
      Ke(this, "debug"),
      Ke(this, "logger"),
      Ke(this, "maxObservedTimestamp"),
      Ke(this, "connectionStateSubscribers", new Map()),
      Ke(this, "nextConnectionStateSubscriberId", 0),
      Ke(this, "_lastPublishedConnectionState"),
      Ke(this, "markConnectionStateDirty", () => {
        Promise.resolve().then(() => {
          const S = this.connectionState();
          if (
            JSON.stringify(S) !==
            JSON.stringify(this._lastPublishedConnectionState)
          ) {
            this._lastPublishedConnectionState = S;
            for (const R of this.connectionStateSubscribers.values()) R(S);
          }
        });
      }),
      Ke(this, "mark", (S) => {
        this.debug && w1(S, this.sessionId);
      }),
      typeof a == "object")
    )
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.",
      );
    ((u == null ? void 0 : u.skipConvexDeploymentUrlCheck) !== !0 && bS(a),
      (u = { ...u }));
    const s = u.authRefreshTokenLeewaySeconds ?? 2;
    let c = u.webSocketConstructor;
    if (!c && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient",
      );
    ((c = c || WebSocket),
      (this.debug = u.reportDebugInfoToConvex ?? !1),
      (this.address = a),
      (this.logger =
        u.logger === !1
          ? Av({ verbose: u.verbose ?? !1 })
          : u.logger !== !0 && u.logger
            ? u.logger
            : _v({ verbose: u.verbose ?? !1 })));
    const d = a.search("://");
    if (d === -1) throw new Error("Provided address was not an absolute URL.");
    const h = a.substring(d + 3),
      m = a.substring(0, d);
    let p;
    if (m === "http") p = "ws";
    else if (m === "https") p = "wss";
    else throw new Error(`Unknown parent protocol ${m}`);
    const y = `${p}://${h}/api/${np}/sync`;
    ((this.state = new LS()),
      (this.remoteQuerySet = new lp(
        (S) => this.state.queryPath(S),
        this.logger,
      )),
      (this.requestManager = new HS(
        this.logger,
        this.markConnectionStateDirty,
      )));
    const w = () => {
      (this.webSocketManager.pause(), this.state.pause());
    };
    ((this.authenticationManager = new S1(
      this.state,
      {
        authenticate: (S) => {
          const R = this.state.setAuth(S);
          return (this.webSocketManager.sendMessage(R), R.baseVersion);
        },
        stopSocket: () => this.webSocketManager.stop(),
        tryRestartSocket: () => this.webSocketManager.tryRestart(),
        pauseSocket: w,
        resumeSocket: () => this.webSocketManager.resume(),
        clearAuth: () => {
          this.clearAuth();
        },
      },
      { logger: this.logger, refreshTokenLeewaySeconds: s },
    )),
      (this.optimisticQueryResults = new XS()),
      this.addOnTransitionHandler((S) => {
        l(S.queries.map((R) => R.token));
      }),
      (this._nextRequestId = 0),
      (this._sessionId = d1()));
    const { unsavedChangesWarning: C } = u;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (C === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.",
        );
    } else
      C !== !1 &&
        window.addEventListener("beforeunload", (S) => {
          if (this.requestManager.hasIncompleteRequests()) {
            S.preventDefault();
            const R =
              "Are you sure you want to leave? Your changes may not be saved.";
            return (((S || window.event).returnValue = R), R);
          }
        });
    ((this.webSocketManager = new f1(
      y,
      {
        onOpen: (S) => {
          (this.mark("convexWebSocketOpen"),
            this.webSocketManager.sendMessage({
              ...S,
              type: "Connect",
              sessionId: this._sessionId,
              maxObservedTimestamp: this.maxObservedTimestamp,
            }));
          const R = new Set(this.remoteQuerySet.remoteQueryResults().keys());
          this.remoteQuerySet = new lp(
            (M) => this.state.queryPath(M),
            this.logger,
          );
          const [x, Q] = this.state.restart(R);
          (Q && this.webSocketManager.sendMessage(Q),
            this.webSocketManager.sendMessage(x));
          for (const M of this.requestManager.restart())
            this.webSocketManager.sendMessage(M);
        },
        onResume: () => {
          const [S, R] = this.state.resume();
          (R && this.webSocketManager.sendMessage(R),
            S && this.webSocketManager.sendMessage(S));
          for (const x of this.requestManager.resume())
            this.webSocketManager.sendMessage(x);
        },
        onMessage: (S) => {
          switch (
            (this.firstMessageReceived ||
              ((this.firstMessageReceived = !0),
              this.mark("convexFirstMessageReceived"),
              this.reportMarks()),
            S.type)
          ) {
            case "Transition": {
              (this.observedTimestamp(S.endVersion.ts),
                this.authenticationManager.onTransition(S),
                this.remoteQuerySet.transition(S),
                this.state.transition(S));
              const R = this.requestManager.removeCompleted(
                this.remoteQuerySet.timestamp(),
              );
              this.notifyOnQueryResultChanges(R);
              break;
            }
            case "MutationResponse": {
              S.success && this.observedTimestamp(S.ts);
              const R = this.requestManager.onResponse(S);
              R !== null &&
                this.notifyOnQueryResultChanges(
                  new Map([[R.requestId, R.result]]),
                );
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(S);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(S);
              break;
            }
            case "FatalError": {
              const R = jS(this.logger, S.error);
              throw (this.webSocketManager.terminate(), R);
            }
          }
          return {
            hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect(),
          };
        },
        onServerDisconnectError: u.onServerDisconnectError,
      },
      c,
      this.logger,
      this.markConnectionStateDirty,
    )),
      this.mark("convexClientConstructed"),
      u.expectAuth && w());
  }
  hasSyncedPastLastReconnect() {
    return (
      this.requestManager.hasSyncedPastLastReconnect() ||
      this.state.hasSyncedPastLastReconnect()
    );
  }
  observedTimestamp(a) {
    (this.maxObservedTimestamp === void 0 ||
      this.maxObservedTimestamp.lessThanOrEqual(a)) &&
      (this.maxObservedTimestamp = a);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  notifyOnQueryResultChanges(a) {
    const l = this.remoteQuerySet.remoteQueryResults(),
      u = new Map();
    for (const [c, d] of l) {
      const h = this.state.queryToken(c);
      if (h !== null) {
        const m = {
          result: d,
          udfPath: this.state.queryPath(c),
          args: this.state.queryArgs(c),
        };
        u.set(h, m);
      }
    }
    const s = this.optimisticQueryResults.ingestQueryResultsFromServer(
      u,
      new Set(a.keys()),
    );
    this.handleTransition({
      queries: s.map((c) => {
        const d = this.optimisticQueryResults.rawQueryResult(c);
        return {
          token: c,
          modification: { kind: "Updated", result: d.result },
        };
      }),
      reflectedMutations: Array.from(a).map(([c, d]) => ({
        requestId: c,
        result: d,
      })),
      timestamp: this.remoteQuerySet.timestamp(),
    });
  }
  handleTransition(a) {
    for (const l of this._onTransitionFns.values()) l(a);
  }
  addOnTransitionHandler(a) {
    const l = this._transitionHandlerCounter++;
    return (
      this._onTransitionFns.set(l, a),
      () => this._onTransitionFns.delete(l)
    );
  }
  setAuth(a, l) {
    this.authenticationManager.setConfig(a, l);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  setAdminAuth(a, l) {
    const u = this.state.setAdminAuth(a, l);
    this.webSocketManager.sendMessage(u);
  }
  clearAuth() {
    const a = this.state.clearAuth();
    this.webSocketManager.sendMessage(a);
  }
  subscribe(a, l, u) {
    const s = jn(l),
      {
        modification: c,
        queryToken: d,
        unsubscribe: h,
      } = this.state.subscribe(
        a,
        s,
        u == null ? void 0 : u.journal,
        u == null ? void 0 : u.componentPath,
      );
    return (
      c !== null && this.webSocketManager.sendMessage(c),
      {
        queryToken: d,
        unsubscribe: () => {
          const m = h();
          m && this.webSocketManager.sendMessage(m);
        },
      }
    );
  }
  localQueryResult(a, l) {
    const u = jn(l),
      s = Bi(a, u);
    return this.optimisticQueryResults.queryResult(s);
  }
  localQueryResultByToken(a) {
    return this.optimisticQueryResults.queryResult(a);
  }
  hasLocalQueryResultByToken(a) {
    return this.optimisticQueryResults.hasQueryResult(a);
  }
  localQueryLogs(a, l) {
    const u = jn(l),
      s = Bi(a, u);
    return this.optimisticQueryResults.queryLogs(s);
  }
  queryJournal(a, l) {
    const u = jn(l),
      s = Bi(a, u);
    return this.state.queryJournal(s);
  }
  connectionState() {
    const a = this.webSocketManager.connectionState();
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: a.isConnected,
      hasEverConnected: a.hasEverConnected,
      connectionCount: a.connectionCount,
      connectionRetries: a.connectionRetries,
      timeOfOldestInflightRequest:
        this.requestManager.timeOfOldestInflightRequest(),
      inflightMutations: this.requestManager.inflightMutations(),
      inflightActions: this.requestManager.inflightActions(),
    };
  }
  subscribeToConnectionState(a) {
    const l = this.nextConnectionStateSubscriberId++;
    return (
      this.connectionStateSubscribers.set(l, a),
      () => {
        this.connectionStateSubscribers.delete(l);
      }
    );
  }
  async mutation(a, l, u) {
    const s = await this.mutationInternal(a, l, u);
    if (!s.success)
      throw s.errorData !== void 0
        ? yf(s, new vf(Na("mutation", a, s)))
        : new Error(Na("mutation", a, s));
    return s.value;
  }
  async mutationInternal(a, l, u, s) {
    const { mutationPromise: c } = this.enqueueMutation(a, l, u, s);
    return c;
  }
  enqueueMutation(a, l, u, s) {
    const c = jn(l);
    this.tryReportLongDisconnect();
    const d = this.nextRequestId;
    if ((this._nextRequestId++, u !== void 0)) {
      const y = u.optimisticUpdate;
      if (y !== void 0) {
        const w = (R) => {
            y(R, c) instanceof Promise &&
              this.logger.warn(
                "Optimistic update handler returned a Promise. Optimistic updates should be synchronous.",
              );
          },
          S = this.optimisticQueryResults
            .applyOptimisticUpdate(w, d)
            .map((R) => {
              const x = this.localQueryResultByToken(R);
              return {
                token: R,
                modification: {
                  kind: "Updated",
                  result:
                    x === void 0
                      ? void 0
                      : { success: !0, value: x, logLines: [] },
                },
              };
            });
        this.handleTransition({
          queries: S,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp(),
        });
      }
    }
    const h = {
        type: "Mutation",
        requestId: d,
        udfPath: a,
        componentPath: s,
        args: [pi(c)],
      },
      m = this.webSocketManager.sendMessage(h),
      p = this.requestManager.request(h, m);
    return { requestId: d, mutationPromise: p };
  }
  async action(a, l) {
    const u = await this.actionInternal(a, l);
    if (!u.success)
      throw u.errorData !== void 0
        ? yf(u, new vf(Na("action", a, u)))
        : new Error(Na("action", a, u));
    return u.value;
  }
  async actionInternal(a, l, u) {
    const s = jn(l),
      c = this.nextRequestId;
    (this._nextRequestId++, this.tryReportLongDisconnect());
    const d = {
        type: "Action",
        requestId: c,
        udfPath: a,
        componentPath: u,
        args: [pi(s)],
      },
      h = this.webSocketManager.sendMessage(d);
    return this.requestManager.request(d, h);
  }
  async close() {
    return (
      this.authenticationManager.stop(),
      this.webSocketManager.terminate()
    );
  }
  get url() {
    return this.address;
  }
  get nextRequestId() {
    return this._nextRequestId;
  }
  get sessionId() {
    return this._sessionId;
  }
  reportMarks() {
    if (this.debug) {
      const a = _1(this.sessionId);
      this.webSocketManager.sendMessage({
        type: "Event",
        eventType: "ClientConnect",
        event: a,
      });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) return;
    const a = this.connectionState().timeOfOldestInflightRequest;
    if (a === null || Date.now() - a.getTime() <= 60 * 1e3) return;
    const l = `${this.address}/api/debug_event`;
    fetch(l, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Convex-Client": `npm-${np}`,
      },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" }),
    })
      .then((u) => {
        u.ok ||
          this.logger.warn("Analytics request failed with response:", u.body);
      })
      .catch((u) => {
        this.logger.warn("Analytics response failed with error:", u);
      });
  }
}
function O1({ getCurrentValue: i, subscribe: a }) {
  const [l, u] = T.useState(() => ({
    getCurrentValue: i,
    subscribe: a,
    value: i(),
  }));
  let s = l.value;
  return (
    (l.getCurrentValue !== i || l.subscribe !== a) &&
      ((s = i()), u({ getCurrentValue: i, subscribe: a, value: s })),
    T.useEffect(() => {
      let c = !1;
      const d = () => {
          c ||
            u((m) => {
              if (m.getCurrentValue !== i || m.subscribe !== a) return m;
              const p = i();
              return m.value === p ? m : { ...m, value: p };
            });
        },
        h = a(d);
      return (
        d(),
        () => {
          ((c = !0), h());
        }
      );
    }, [i, a]),
    s
  );
}
var M1 = Object.defineProperty,
  x1 = (i, a, l) =>
    a in i
      ? M1(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  ui = (i, a, l) => x1(i, typeof a != "symbol" ? a + "" : a, l);
const N1 = 5e3;
if (typeof H > "u") throw new Error("Required dependency 'react' not found");
function Mv(i, a, l) {
  function u(s) {
    return (D1(s), a.mutation(i, s, { optimisticUpdate: l }));
  }
  return (
    (u.withOptimisticUpdate = function (c) {
      if (l !== void 0)
        throw new Error(
          `Already specified optimistic update for mutation ${qt(i)}`,
        );
      return Mv(i, a, c);
    }),
    u
  );
}
class k1 {
  constructor(a, l) {
    if (
      (ui(this, "address"),
      ui(this, "cachedSync"),
      ui(this, "listeners"),
      ui(this, "options"),
      ui(this, "closed", !1),
      ui(this, "_logger"),
      ui(this, "adminAuth"),
      ui(this, "fakeUserIdentity"),
      a === void 0)
    )
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated.",
      );
    if (typeof a != "string")
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof a} instead.`,
      );
    if (!a.includes("://"))
      throw new Error("Provided address was not an absolute URL.");
    ((this.address = a),
      (this.listeners = new Map()),
      (this._logger =
        (l == null ? void 0 : l.logger) === !1
          ? Av({ verbose: (l == null ? void 0 : l.verbose) ?? !1 })
          : (l == null ? void 0 : l.logger) !== !0 && l != null && l.logger
            ? l.logger
            : _v({ verbose: (l == null ? void 0 : l.verbose) ?? !1 })),
      (this.options = { ...l, logger: this._logger }));
  }
  get url() {
    return this.address;
  }
  get sync() {
    if (this.closed)
      throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new R1(
          this.address,
          (a) => this.transition(a),
          this.options,
        )),
        this.adminAuth &&
          this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity),
        this.cachedSync);
  }
  setAuth(a, l) {
    if (typeof a == "string")
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.",
      );
    this.sync.setAuth(a, l ?? (() => {}));
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(a, l) {
    if (((this.adminAuth = a), (this.fakeUserIdentity = l), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(a, l);
  }
  watchQuery(a, ...l) {
    const [u, s] = l,
      c = qt(a);
    return {
      onUpdate: (d) => {
        const { queryToken: h, unsubscribe: m } = this.sync.subscribe(c, u, s),
          p = this.listeners.get(h);
        return (
          p !== void 0 ? p.add(d) : this.listeners.set(h, new Set([d])),
          () => {
            if (this.closed) return;
            const y = this.listeners.get(h);
            (y.delete(d), y.size === 0 && this.listeners.delete(h), m());
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(c, u);
      },
      localQueryLogs: () => {
        if (this.cachedSync) return this.cachedSync.localQueryLogs(c, u);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(c, u);
      },
    };
  }
  prewarmQuery(a) {
    const l = a.extendSubscriptionFor ?? N1,
      s = this.watchQuery(a.query, a.args || {}).onUpdate(() => {});
    setTimeout(s, l);
  }
  mutation(a, ...l) {
    const [u, s] = l,
      c = qt(a);
    return this.sync.mutation(c, u, s);
  }
  action(a, ...l) {
    const u = qt(a);
    return this.sync.action(u, ...l);
  }
  query(a, ...l) {
    const u = this.watchQuery(a, ...l),
      s = u.localQueryResult();
    return s !== void 0
      ? Promise.resolve(s)
      : new Promise((c, d) => {
          const h = u.onUpdate(() => {
            h();
            try {
              c(u.localQueryResult());
            } catch (m) {
              d(m);
            }
          });
        });
  }
  connectionState() {
    return this.sync.connectionState();
  }
  subscribeToConnectionState(a) {
    return this.sync.subscribeToConnectionState(a);
  }
  get logger() {
    return this._logger;
  }
  async close() {
    if (((this.closed = !0), (this.listeners = new Map()), this.cachedSync)) {
      const a = this.cachedSync;
      ((this.cachedSync = void 0), await a.close());
    }
  }
  transition(a) {
    for (const l of a) {
      const u = this.listeners.get(l);
      if (u) for (const s of u) s();
    }
  }
}
const qf = H.createContext(void 0);
function U1() {
  return T.useContext(qf);
}
const j1 = ({ client: i, children: a }) =>
  H.createElement(qf.Provider, { value: i }, a);
function mi(i, ...a) {
  const l = a[0] === "skip",
    u = a[0] === "skip" ? {} : jn(a[0]),
    s = typeof i == "string" ? Tv(i) : i,
    c = qt(s),
    d = T.useMemo(
      () => (l ? {} : { query: { query: s, args: u } }),
      [JSON.stringify(pi(u)), c, l],
    ),
    m = B1(d).query;
  if (m instanceof Error) throw m;
  return m;
}
function nn(i) {
  const a = typeof i == "string" ? Tv(i) : i,
    l = T.useContext(qf);
  if (l === void 0)
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return T.useMemo(() => Mv(a, l), [l, qt(a)]);
}
function D1(i) {
  if (
    typeof i == "object" &&
    i !== null &&
    "bubbles" in i &&
    "persist" in i &&
    "isDefaultPrevented" in i
  )
    throw new Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.",
    );
}
var z1 = Object.defineProperty,
  L1 = (i, a, l) =>
    a in i
      ? z1(i, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[a] = l),
  _c = (i, a, l) => L1(i, typeof a != "symbol" ? a + "" : a, l);
class q1 {
  constructor(a) {
    (_c(this, "createWatch"),
      _c(this, "queries"),
      _c(this, "listeners"),
      (this.createWatch = a),
      (this.queries = {}),
      (this.listeners = new Set()));
  }
  setQueries(a) {
    for (const l of Object.keys(a)) {
      const { query: u, args: s } = a[l];
      if ((qt(u), this.queries[l] === void 0)) this.addQuery(l, u, s);
      else {
        const c = this.queries[l];
        (qt(u) !== qt(c.query) ||
          JSON.stringify(pi(s)) !== JSON.stringify(pi(c.args))) &&
          (this.removeQuery(l), this.addQuery(l, u, s));
      }
    }
    for (const l of Object.keys(this.queries))
      a[l] === void 0 && this.removeQuery(l);
  }
  subscribe(a) {
    return (
      this.listeners.add(a),
      () => {
        this.listeners.delete(a);
      }
    );
  }
  getLocalResults(a) {
    const l = {};
    for (const u of Object.keys(a)) {
      const { query: s, args: c } = a[u];
      qt(s);
      const d = this.createWatch(s, c);
      let h;
      try {
        h = d.localQueryResult();
      } catch (m) {
        if (m instanceof Error) h = m;
        else throw m;
      }
      l[u] = h;
    }
    return l;
  }
  setCreateWatch(a) {
    this.createWatch = a;
    for (const l of Object.keys(this.queries)) {
      const { query: u, args: s, watch: c } = this.queries[l],
        d = c.journal();
      (this.removeQuery(l), this.addQuery(l, u, s, d));
    }
  }
  destroy() {
    for (const a of Object.keys(this.queries)) this.removeQuery(a);
    this.listeners = new Set();
  }
  addQuery(a, l, u, s) {
    if (this.queries[a] !== void 0)
      throw new Error(
        `Tried to add a new query with identifier ${a} when it already exists.`,
      );
    const c = this.createWatch(l, u, s),
      d = c.onUpdate(() => this.notifyListeners());
    this.queries[a] = { query: l, args: u, watch: c, unsubscribe: d };
  }
  removeQuery(a) {
    const l = this.queries[a];
    if (l === void 0) throw new Error(`No query found with identifier ${a}.`);
    (l.unsubscribe(), delete this.queries[a]);
  }
  notifyListeners() {
    for (const a of this.listeners) a();
  }
}
function B1(i) {
  const a = U1();
  if (a === void 0)
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  const l = T.useMemo(
    () => (u, s, c) => a.watchQuery(u, s, { journal: c }),
    [a],
  );
  return H1(i, l);
}
function H1(i, a) {
  const [l] = T.useState(() => new q1(a));
  (l.createWatch !== a && l.setCreateWatch(a),
    T.useEffect(() => () => l.destroy(), [l]));
  const u = T.useMemo(
    () => ({
      getCurrentValue: () => l.getLocalResults(i),
      subscribe: (s) => (l.setQueries(i), l.subscribe(s)),
    }),
    [l, i],
  );
  return O1(u);
}
var V1 = Object.freeze({
  InvalidProxyUrlErrorMessage:
    "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
  InvalidPublishableKeyErrorMessage:
    "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
  MissingPublishableKeyErrorMessage:
    "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
  MissingSecretKeyErrorMessage:
    "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
  MissingClerkProvider:
    "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider",
});
function xv({ packageName: i, customMessages: a }) {
  let l = i;
  function u(c, d) {
    if (!d) return `${l}: ${c}`;
    let h = c;
    const m = c.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (const p of m) {
      const y = (d[p[1]] || "").toString();
      h = h.replace(`{{${p[1]}}}`, y);
    }
    return `${l}: ${h}`;
  }
  const s = { ...V1, ...a };
  return {
    setPackageName({ packageName: c }) {
      return (typeof c == "string" && (l = c), this);
    },
    setMessages({ customMessages: c }) {
      return (Object.assign(s, c || {}), this);
    },
    throwInvalidPublishableKeyError(c) {
      throw new Error(u(s.InvalidPublishableKeyErrorMessage, c));
    },
    throwInvalidProxyUrl(c) {
      throw new Error(u(s.InvalidProxyUrlErrorMessage, c));
    },
    throwMissingPublishableKeyError() {
      throw new Error(u(s.MissingPublishableKeyErrorMessage));
    },
    throwMissingSecretKeyError() {
      throw new Error(u(s.MissingSecretKeyErrorMessage));
    },
    throwMissingClerkProviderError(c) {
      throw new Error(u(s.MissingClerkProvider, c));
    },
    throw(c) {
      throw new Error(u(c));
    },
  };
}
var Nv = Object.defineProperty,
  P1 = Object.getOwnPropertyDescriptor,
  Q1 = Object.getOwnPropertyNames,
  Y1 = Object.prototype.hasOwnProperty,
  G1 = (i, a) => {
    for (var l in a) Nv(i, l, { get: a[l], enumerable: !0 });
  },
  I1 = (i, a, l, u) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let s of Q1(a))
        !Y1.call(i, s) &&
          s !== l &&
          Nv(i, s, {
            get: () => a[s],
            enumerable: !(u = P1(a, s)) || u.enumerable,
          });
    return i;
  },
  $1 = (i, a, l) => (I1(i, a, "default"), l),
  X1 = {
    strict_mfa: { afterMinutes: 10, level: "multi_factor" },
    strict: { afterMinutes: 10, level: "second_factor" },
    moderate: { afterMinutes: 60, level: "second_factor" },
    lax: { afterMinutes: 1440, level: "second_factor" },
  },
  K1 = new Set(["first_factor", "second_factor", "multi_factor"]),
  Z1 = new Set(["strict_mfa", "strict", "moderate", "lax"]),
  F1 = (i) => typeof i == "number" && i > 0,
  J1 = (i) => K1.has(i),
  W1 = (i) => Z1.has(i),
  Ac = (i) => i.replace(/^(org:)*/, "org:"),
  eE = (i, a) => {
    const { orgId: l, orgRole: u, orgPermissions: s } = a;
    return (!i.role && !i.permission) || !l || !u || !s
      ? null
      : i.permission
        ? s.includes(Ac(i.permission))
        : i.role
          ? Ac(u) === Ac(i.role)
          : null;
  },
  up = (i, a) => {
    const { org: l, user: u } = nE(i),
      [s, c] = a.split(":"),
      d = c || s;
    return s === "org"
      ? l.includes(d)
      : s === "user"
        ? u.includes(d)
        : [...l, ...u].includes(d);
  },
  tE = (i, a) => {
    const { features: l, plans: u } = a;
    return i.feature && l
      ? up(l, i.feature)
      : i.plan && u
        ? up(u, i.plan)
        : null;
  },
  nE = (i) => {
    const a = i ? i.split(",").map((l) => l.trim()) : [];
    return {
      org: a
        .filter((l) => l.split(":")[0].includes("o"))
        .map((l) => l.split(":")[1]),
      user: a
        .filter((l) => l.split(":")[0].includes("u"))
        .map((l) => l.split(":")[1]),
    };
  },
  iE = (i) => {
    if (!i) return !1;
    const a = (s) => (typeof s == "string" ? X1[s] : s),
      l = typeof i == "string" && W1(i),
      u = typeof i == "object" && J1(i.level) && F1(i.afterMinutes);
    return l || u ? a.bind(null, i) : !1;
  },
  aE = (i, { factorVerificationAge: a }) => {
    if (!i.reverification || !a) return null;
    const l = iE(i.reverification);
    if (!l) return null;
    const { level: u, afterMinutes: s } = l(),
      [c, d] = a,
      h = c !== -1 ? s > c : null,
      m = d !== -1 ? s > d : null;
    switch (u) {
      case "first_factor":
        return h;
      case "second_factor":
        return d !== -1 ? m : h;
      case "multi_factor":
        return d === -1 ? h : h && m;
    }
  },
  rE = (i) => (a) => {
    if (!i.userId) return !1;
    const l = tE(a, i),
      u = eE(a, i),
      s = aE(a, i);
    return [l || u, s].some((c) => c === null)
      ? [l || u, s].some((c) => c === !0)
      : [l || u, s].every((c) => c === !0);
  },
  lE = ({
    authObject: {
      sessionId: i,
      sessionStatus: a,
      userId: l,
      actor: u,
      orgId: s,
      orgRole: c,
      orgSlug: d,
      signOut: h,
      getToken: m,
      has: p,
      sessionClaims: y,
    },
    options: { treatPendingAsSignedOut: w = !0 },
  }) => {
    if (i === void 0 && l === void 0)
      return {
        isLoaded: !1,
        isSignedIn: void 0,
        sessionId: i,
        sessionClaims: void 0,
        userId: l,
        actor: void 0,
        orgId: void 0,
        orgRole: void 0,
        orgSlug: void 0,
        has: void 0,
        signOut: h,
        getToken: m,
      };
    if (i === null && l === null)
      return {
        isLoaded: !0,
        isSignedIn: !1,
        sessionId: i,
        userId: l,
        sessionClaims: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has: () => !1,
        signOut: h,
        getToken: m,
      };
    if (w && a === "pending")
      return {
        isLoaded: !0,
        isSignedIn: !1,
        sessionId: null,
        userId: null,
        sessionClaims: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has: () => !1,
        signOut: h,
        getToken: m,
      };
    if (i && y && l && s && c)
      return {
        isLoaded: !0,
        isSignedIn: !0,
        sessionId: i,
        sessionClaims: y,
        userId: l,
        actor: u || null,
        orgId: s,
        orgRole: c,
        orgSlug: d || null,
        has: p,
        signOut: h,
        getToken: m,
      };
    if (i && y && l && !s)
      return {
        isLoaded: !0,
        isSignedIn: !0,
        sessionId: i,
        sessionClaims: y,
        userId: l,
        actor: u || null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has: p,
        signOut: h,
        getToken: m,
      };
  },
  kv = (i) =>
    typeof atob < "u" && typeof atob == "function"
      ? atob(i)
      : typeof global < "u" && global.Buffer
        ? new global.Buffer(i, "base64").toString()
        : i,
  sE = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev",
  ],
  Uv = "pk_live_",
  uE = "pk_test_";
function jv(i) {
  if (!i.endsWith("$")) return !1;
  const a = i.slice(0, -1);
  return a.includes("$") ? !1 : a.includes(".");
}
function op(i, a = {}) {
  if (((i = i || ""), !i || !bf(i))) {
    if (a.fatal && !i)
      throw new Error(
        "Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys",
      );
    if (a.fatal && !bf(i)) throw new Error("Publishable key not valid.");
    return null;
  }
  const l = i.startsWith(Uv) ? "production" : "development";
  let u;
  try {
    u = kv(i.split("_")[2]);
  } catch {
    if (a.fatal)
      throw new Error("Publishable key not valid: Failed to decode key.");
    return null;
  }
  if (!jv(u)) {
    if (a.fatal)
      throw new Error(
        "Publishable key not valid: Decoded key has invalid format.",
      );
    return null;
  }
  let s = u.slice(0, -1);
  return (
    a.proxyUrl
      ? (s = a.proxyUrl)
      : l !== "development" &&
        a.domain &&
        a.isSatellite &&
        (s = `clerk.${a.domain}`),
    { instanceType: l, frontendApi: s }
  );
}
function bf(i = "") {
  try {
    if (!(i.startsWith(Uv) || i.startsWith(uE))) return !1;
    const l = i.split("_");
    if (l.length !== 3) return !1;
    const u = l[2];
    if (!u) return !1;
    const s = kv(u);
    return jv(s);
  } catch {
    return !1;
  }
}
function oE() {
  const i = new Map();
  return {
    isDevOrStagingUrl: (a) => {
      if (!a) return !1;
      const l = typeof a == "string" ? a : a.hostname;
      let u = i.get(l);
      return (
        u === void 0 && ((u = sE.some((s) => l.endsWith(s))), i.set(l, u)),
        u
      );
    },
  };
}
var cE = "METHOD_CALLED",
  fE = 0.1;
function Dv(i, a) {
  return { event: cE, eventSamplingRate: fE, payload: { method: i, ...a } };
}
var Tc = { exports: {} },
  Rc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp;
function dE() {
  if (cp) return Rc;
  cp = 1;
  var i = Qs();
  function a(w, C) {
    return (w === C && (w !== 0 || 1 / w === 1 / C)) || (w !== w && C !== C);
  }
  var l = typeof Object.is == "function" ? Object.is : a,
    u = i.useState,
    s = i.useEffect,
    c = i.useLayoutEffect,
    d = i.useDebugValue;
  function h(w, C) {
    var S = C(),
      R = u({ inst: { value: S, getSnapshot: C } }),
      x = R[0].inst,
      Q = R[1];
    return (
      c(
        function () {
          ((x.value = S), (x.getSnapshot = C), m(x) && Q({ inst: x }));
        },
        [w, S, C],
      ),
      s(
        function () {
          return (
            m(x) && Q({ inst: x }),
            w(function () {
              m(x) && Q({ inst: x });
            })
          );
        },
        [w],
      ),
      d(S),
      S
    );
  }
  function m(w) {
    var C = w.getSnapshot;
    w = w.value;
    try {
      var S = C();
      return !l(w, S);
    } catch {
      return !0;
    }
  }
  function p(w, C) {
    return C();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : h;
  return (
    (Rc.useSyncExternalStore =
      i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : y),
    Rc
  );
}
var fp;
function hE() {
  return (fp || ((fp = 1), (Tc.exports = dE())), Tc.exports);
}
var zv = hE();
const Lv = 0,
  qv = 1,
  Bv = 2,
  dp = 3;
var hp = Object.prototype.hasOwnProperty;
function Sf(i, a) {
  var l, u;
  if (i === a) return !0;
  if (i && a && (l = i.constructor) === a.constructor) {
    if (l === Date) return i.getTime() === a.getTime();
    if (l === RegExp) return i.toString() === a.toString();
    if (l === Array) {
      if ((u = i.length) === a.length) for (; u-- && Sf(i[u], a[u]); );
      return u === -1;
    }
    if (!l || typeof i == "object") {
      u = 0;
      for (l in i)
        if (
          (hp.call(i, l) && ++u && !hp.call(a, l)) ||
          !(l in a) ||
          !Sf(i[l], a[l])
        )
          return !1;
      return Object.keys(a).length === u;
    }
  }
  return i !== i && a !== a;
}
const tn = new WeakMap(),
  gi = () => {},
  We = gi(),
  Hs = Object,
  ge = (i) => i === We,
  Ft = (i) => typeof i == "function",
  zn = (i, a) => ({ ...i, ...a }),
  Hv = (i) => Ft(i.then),
  Oc = {},
  Cs = {},
  Bf = "undefined",
  Jr = typeof window != Bf,
  Ef = typeof document != Bf,
  mE = Jr && "Deno" in window,
  gE = () => Jr && typeof window.requestAnimationFrame != Bf,
  di = (i, a) => {
    const l = tn.get(i);
    return [
      () => (!ge(a) && i.get(a)) || Oc,
      (u) => {
        if (!ge(a)) {
          const s = i.get(a);
          (a in Cs || (Cs[a] = s), l[5](a, zn(s, u), s || Oc));
        }
      },
      l[6],
      () => (!ge(a) && a in Cs ? Cs[a] : (!ge(a) && i.get(a)) || Oc),
    ];
  };
let wf = !0;
const pE = () => wf,
  [Cf, _f] =
    Jr && window.addEventListener
      ? [
          window.addEventListener.bind(window),
          window.removeEventListener.bind(window),
        ]
      : [gi, gi],
  vE = () => {
    const i = Ef && document.visibilityState;
    return ge(i) || i !== "hidden";
  },
  yE = (i) => (
    Ef && document.addEventListener("visibilitychange", i),
    Cf("focus", i),
    () => {
      (Ef && document.removeEventListener("visibilitychange", i),
        _f("focus", i));
    }
  ),
  bE = (i) => {
    const a = () => {
        ((wf = !0), i());
      },
      l = () => {
        wf = !1;
      };
    return (
      Cf("online", a),
      Cf("offline", l),
      () => {
        (_f("online", a), _f("offline", l));
      }
    );
  },
  SE = { isOnline: pE, isVisible: vE },
  EE = { initFocus: yE, initReconnect: bE },
  mp = !H.useId,
  Zr = !Jr || mE,
  wE = (i) => (gE() ? window.requestAnimationFrame(i) : setTimeout(i, 1)),
  Qr = Zr ? T.useEffect : T.useLayoutEffect,
  Mc = typeof navigator < "u" && navigator.connection,
  gp =
    !Zr && Mc && (["slow-2g", "2g"].includes(Mc.effectiveType) || Mc.saveData),
  _s = new WeakMap(),
  CE = (i) => Hs.prototype.toString.call(i),
  xc = (i, a) => i === `[object ${a}]`;
let _E = 0;
const Af = (i) => {
    const a = typeof i,
      l = CE(i),
      u = xc(l, "Date"),
      s = xc(l, "RegExp"),
      c = xc(l, "Object");
    let d, h;
    if (Hs(i) === i && !u && !s) {
      if (((d = _s.get(i)), d)) return d;
      if (((d = ++_E + "~"), _s.set(i, d), Array.isArray(i))) {
        for (d = "@", h = 0; h < i.length; h++) d += Af(i[h]) + ",";
        _s.set(i, d);
      }
      if (c) {
        d = "#";
        const m = Hs.keys(i).sort();
        for (; !ge((h = m.pop())); )
          ge(i[h]) || (d += h + ":" + Af(i[h]) + ",");
        _s.set(i, d);
      }
    } else
      d = u
        ? i.toJSON()
        : a == "symbol"
          ? i.toString()
          : a == "string"
            ? JSON.stringify(i)
            : "" + i;
    return d;
  },
  ja = (i) => {
    if (Ft(i))
      try {
        i = i();
      } catch {
        i = "";
      }
    const a = i;
    return (
      (i =
        typeof i == "string"
          ? i
          : (Array.isArray(i) ? i.length : i)
            ? Af(i)
            : ""),
      [i, a]
    );
  };
let AE = 0;
const Tf = () => ++AE;
async function Vv(...i) {
  const [a, l, u, s] = i,
    c = zn(
      { populateCache: !0, throwOnError: !0 },
      typeof s == "boolean" ? { revalidate: s } : s || {},
    );
  let d = c.populateCache;
  const h = c.rollbackOnError;
  let m = c.optimisticData;
  const p = (C) => (typeof h == "function" ? h(C) : h !== !1),
    y = c.throwOnError;
  if (Ft(l)) {
    const C = l,
      S = [],
      R = a.keys();
    for (const x of R) !/^\$(inf|sub)\$/.test(x) && C(a.get(x)._k) && S.push(x);
    return Promise.all(S.map(w));
  }
  return w(l);
  async function w(C) {
    const [S] = ja(C);
    if (!S) return;
    const [R, x] = di(a, S),
      [Q, M, V, D] = tn.get(a),
      Z = () => {
        const ne = Q[S];
        return (Ft(c.revalidate)
          ? c.revalidate(R().data, C)
          : c.revalidate !== !1) && (delete V[S], delete D[S], ne && ne[0])
          ? ne[0](Bv).then(() => R().data)
          : R().data;
      };
    if (i.length < 3) return Z();
    let $ = u,
      G,
      J = !1;
    const z = Tf();
    M[S] = [z, 0];
    const P = !ge(m),
      K = R(),
      j = K.data,
      W = K._c,
      ie = ge(W) ? j : W;
    if ((P && ((m = Ft(m) ? m(ie, j) : m), x({ data: m, _c: ie })), Ft($)))
      try {
        $ = $(ie);
      } catch (ne) {
        ((G = ne), (J = !0));
      }
    if ($ && Hv($))
      if (
        (($ = await $.catch((ne) => {
          ((G = ne), (J = !0));
        })),
        z !== M[S][0])
      ) {
        if (J) throw G;
        return $;
      } else J && P && p(G) && ((d = !0), x({ data: ie, _c: We }));
    if (d && !J)
      if (Ft(d)) {
        const ne = d($, ie);
        x({ data: ne, error: We, _c: We });
      } else x({ data: $, error: We, _c: We });
    if (
      ((M[S][1] = Tf()),
      Promise.resolve(Z()).then(() => {
        x({ _c: We });
      }),
      J)
    ) {
      if (y) throw G;
      return;
    }
    return $;
  }
}
const pp = (i, a) => {
    for (const l in i) i[l][0] && i[l][0](a);
  },
  Pv = (i, a) => {
    if (!tn.has(i)) {
      const l = zn(EE, a),
        u = Object.create(null),
        s = Vv.bind(We, i);
      let c = gi;
      const d = Object.create(null),
        h = (y, w) => {
          const C = d[y] || [];
          return ((d[y] = C), C.push(w), () => C.splice(C.indexOf(w), 1));
        },
        m = (y, w, C) => {
          i.set(y, w);
          const S = d[y];
          if (S) for (const R of S) R(w, C);
        },
        p = () => {
          if (
            !tn.has(i) &&
            (tn.set(i, [
              u,
              Object.create(null),
              Object.create(null),
              Object.create(null),
              s,
              m,
              h,
            ]),
            !Zr)
          ) {
            const y = l.initFocus(setTimeout.bind(We, pp.bind(We, u, Lv))),
              w = l.initReconnect(setTimeout.bind(We, pp.bind(We, u, qv)));
            c = () => {
              (y && y(), w && w(), tn.delete(i));
            };
          }
        };
      return (p(), [i, s, p, c]);
    }
    return [i, tn.get(i)[4]];
  },
  TE = (i, a, l, u, s) => {
    const c = l.errorRetryCount,
      d = s.retryCount,
      h =
        ~~((Math.random() + 0.5) * (1 << (d < 8 ? d : 8))) *
        l.errorRetryInterval;
    (!ge(c) && d > c) || setTimeout(u, h, s);
  },
  RE = Sf,
  [Wr, Qv] = Pv(new Map()),
  Yv = zn(
    {
      onLoadingSlow: gi,
      onSuccess: gi,
      onError: gi,
      onErrorRetry: TE,
      onDiscarded: gi,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: gp ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: gp ? 5e3 : 3e3,
      compare: RE,
      isPaused: () => !1,
      cache: Wr,
      mutate: Qv,
      fallback: {},
    },
    SE,
  ),
  Gv = (i, a) => {
    const l = zn(i, a);
    if (a) {
      const { use: u, fallback: s } = i,
        { use: c, fallback: d } = a;
      (u && c && (l.use = u.concat(c)), s && d && (l.fallback = zn(s, d)));
    }
    return l;
  },
  Rf = T.createContext({}),
  OE = (i) => {
    const { value: a } = i,
      l = T.useContext(Rf),
      u = Ft(a),
      s = T.useMemo(() => (u ? a(l) : a), [u, l, a]),
      c = T.useMemo(() => (u ? s : Gv(l, s)), [u, l, s]),
      d = s && s.provider,
      h = T.useRef(We);
    d && !h.current && (h.current = Pv(d(c.cache || Wr), s));
    const m = h.current;
    return (
      m && ((c.cache = m[0]), (c.mutate = m[1])),
      Qr(() => {
        if (m) return (m[2] && m[2](), m[3]);
      }, []),
      T.createElement(Rf.Provider, zn(i, { value: c }))
    );
  },
  Iv = "$inf$",
  $v = Jr && window.__SWR_DEVTOOLS_USE__,
  ME = $v ? window.__SWR_DEVTOOLS_USE__ : [],
  xE = () => {
    $v && (window.__SWR_DEVTOOLS_REACT__ = H);
  },
  Xv = (i) =>
    Ft(i[1])
      ? [i[0], i[1], i[2] || {}]
      : [i[0], null, (i[1] === null ? i[2] : i[1]) || {}],
  Kv = () => zn(Yv, T.useContext(Rf)),
  NE = (i, a) => {
    const [l, u] = ja(i),
      [, , , s] = tn.get(Wr);
    if (s[l]) return s[l];
    const c = a(u);
    return ((s[l] = c), c);
  },
  kE = (i) => (a, l, u) =>
    i(
      a,
      l &&
        ((...c) => {
          const [d] = ja(a),
            [, , , h] = tn.get(Wr);
          if (d.startsWith(Iv)) return l(...c);
          const m = h[d];
          return ge(m) ? l(...c) : (delete h[d], m);
        }),
      u,
    ),
  UE = ME.concat(kE),
  jE = (i) =>
    function (...l) {
      const u = Kv(),
        [s, c, d] = Xv(l),
        h = Gv(u, d);
      let m = i;
      const { use: p } = h,
        y = (p || []).concat(UE);
      for (let w = y.length; w--; ) m = y[w](m);
      return m(s, c || h.fetcher || null, h);
    },
  DE = (i, a, l) => {
    const u = a[i] || (a[i] = []);
    return (
      u.push(l),
      () => {
        const s = u.indexOf(l);
        s >= 0 && ((u[s] = u[u.length - 1]), u.pop());
      }
    );
  },
  zE =
    (i, a) =>
    (...l) => {
      const [u, s, c] = Xv(l),
        d = (c.use || []).concat(a);
      return i(u, s, { ...c, use: d });
    };
xE();
const LE = () => {},
  qE = LE(),
  Of = Object,
  vp = (i) => i === qE,
  BE = (i) => typeof i == "function",
  As = new WeakMap(),
  HE = (i) => Of.prototype.toString.call(i),
  Nc = (i, a) => i === `[object ${a}]`;
let VE = 0;
const Mf = (i) => {
    const a = typeof i,
      l = HE(i),
      u = Nc(l, "Date"),
      s = Nc(l, "RegExp"),
      c = Nc(l, "Object");
    let d, h;
    if (Of(i) === i && !u && !s) {
      if (((d = As.get(i)), d)) return d;
      if (((d = ++VE + "~"), As.set(i, d), Array.isArray(i))) {
        for (d = "@", h = 0; h < i.length; h++) d += Mf(i[h]) + ",";
        As.set(i, d);
      }
      if (c) {
        d = "#";
        const m = Of.keys(i).sort();
        for (; !vp((h = m.pop())); )
          vp(i[h]) || (d += h + ":" + Mf(i[h]) + ",");
        As.set(i, d);
      }
    } else
      d = u
        ? i.toJSON()
        : a == "symbol"
          ? i.toString()
          : a == "string"
            ? JSON.stringify(i)
            : "" + i;
    return d;
  },
  PE = (i) => {
    if (BE(i))
      try {
        i = i();
      } catch {
        i = "";
      }
    const a = i;
    return (
      (i =
        typeof i == "string"
          ? i
          : (Array.isArray(i) ? i.length : i)
            ? Mf(i)
            : ""),
      [i, a]
    );
  },
  QE = (i) => PE(i)[0],
  kc =
    H.use ||
    ((i) => {
      switch (i.status) {
        case "pending":
          throw i;
        case "fulfilled":
          return i.value;
        case "rejected":
          throw i.reason;
        default:
          throw (
            (i.status = "pending"),
            i.then(
              (a) => {
                ((i.status = "fulfilled"), (i.value = a));
              },
              (a) => {
                ((i.status = "rejected"), (i.reason = a));
              },
            ),
            i
          );
      }
    }),
  Uc = { dedupe: !0 },
  YE = (i, a, l) => {
    const {
        cache: u,
        compare: s,
        suspense: c,
        fallbackData: d,
        revalidateOnMount: h,
        revalidateIfStale: m,
        refreshInterval: p,
        refreshWhenHidden: y,
        refreshWhenOffline: w,
        keepPreviousData: C,
      } = l,
      [S, R, x, Q] = tn.get(u),
      [M, V] = ja(i),
      D = T.useRef(!1),
      Z = T.useRef(!1),
      $ = T.useRef(M),
      G = T.useRef(a),
      J = T.useRef(l),
      z = () => J.current,
      P = () => z().isVisible() && z().isOnline(),
      [K, j, W, ie] = di(u, M),
      ne = T.useRef({}).current,
      de = ge(d) ? (ge(l.fallback) ? We : l.fallback[M]) : d,
      B = (Te, Ae) => {
        for (const et in ne) {
          const qe = et;
          if (qe === "data") {
            if (!s(Te[qe], Ae[qe]) && (!ge(Te[qe]) || !s(he, Ae[qe])))
              return !1;
          } else if (Ae[qe] !== Te[qe]) return !1;
        }
        return !0;
      },
      F = T.useMemo(() => {
        const Te =
            !M || !a ? !1 : ge(h) ? (z().isPaused() || c ? !1 : m !== !1) : h,
          Ae = (tt) => {
            const Et = zn(tt);
            return (
              delete Et._k,
              Te ? { isValidating: !0, isLoading: !0, ...Et } : Et
            );
          },
          et = K(),
          qe = ie(),
          Ve = Ae(et),
          qn = et === qe ? Ve : Ae(qe);
        let Ie = Ve;
        return [
          () => {
            const tt = Ae(K());
            return B(tt, Ie)
              ? ((Ie.data = tt.data),
                (Ie.isLoading = tt.isLoading),
                (Ie.isValidating = tt.isValidating),
                (Ie.error = tt.error),
                Ie)
              : ((Ie = tt), tt);
          },
          () => qn,
        ];
      }, [u, M]),
      ae = zv.useSyncExternalStore(
        T.useCallback(
          (Te) =>
            W(M, (Ae, et) => {
              B(et, Ae) || Te();
            }),
          [u, M],
        ),
        F[0],
        F[1],
      ),
      ve = !D.current,
      _ = S[M] && S[M].length > 0,
      N = ae.data,
      ee = ge(N) ? (de && Hv(de) ? kc(de) : de) : N,
      te = ae.error,
      re = T.useRef(ee),
      he = C ? (ge(N) ? (ge(re.current) ? ee : re.current) : N) : ee,
      ue =
        _ && !ge(te)
          ? !1
          : ve && !ge(h)
            ? h
            : z().isPaused()
              ? !1
              : c
                ? ge(ee)
                  ? !1
                  : m
                : ge(ee) || m,
      Ue = !!(M && a && ve && ue),
      Ee = ge(ae.isValidating) ? Ue : ae.isValidating,
      lt = ge(ae.isLoading) ? Ue : ae.isLoading,
      Ot = T.useCallback(
        async (Te) => {
          const Ae = G.current;
          if (!M || !Ae || Z.current || z().isPaused()) return !1;
          let et,
            qe,
            Ve = !0;
          const qn = Te || {},
            Ie = !x[M] || !qn.dedupe,
            tt = () =>
              mp ? !Z.current && M === $.current && D.current : M === $.current,
            Et = { isValidating: !1, isLoading: !1 },
            ll = () => {
              j(Et);
            },
            La = () => {
              const wt = x[M];
              wt && wt[1] === qe && delete x[M];
            },
            sl = { isValidating: !0 };
          ge(K().data) && (sl.isLoading = !0);
          try {
            if (
              (Ie &&
                (j(sl),
                l.loadingTimeout &&
                  ge(K().data) &&
                  setTimeout(() => {
                    Ve && tt() && z().onLoadingSlow(M, l);
                  }, l.loadingTimeout),
                (x[M] = [Ae(V), Tf()])),
              ([et, qe] = x[M]),
              (et = await et),
              Ie && setTimeout(La, l.dedupingInterval),
              !x[M] || x[M][1] !== qe)
            )
              return (Ie && tt() && z().onDiscarded(M), !1);
            Et.error = We;
            const wt = R[M];
            if (!ge(wt) && (qe <= wt[0] || qe <= wt[1] || wt[1] === 0))
              return (ll(), Ie && tt() && z().onDiscarded(M), !1);
            const pt = K().data;
            ((Et.data = s(pt, et) ? pt : et),
              Ie && tt() && z().onSuccess(et, M, l));
          } catch (wt) {
            La();
            const pt = z(),
              { shouldRetryOnError: st } = pt;
            pt.isPaused() ||
              ((Et.error = wt),
              Ie &&
                tt() &&
                (pt.onError(wt, M, pt),
                (st === !0 || (Ft(st) && st(wt))) &&
                  (!z().revalidateOnFocus ||
                    !z().revalidateOnReconnect ||
                    P()) &&
                  pt.onErrorRetry(
                    wt,
                    M,
                    pt,
                    (rn) => {
                      const ut = S[M];
                      ut && ut[0] && ut[0](dp, rn);
                    },
                    { retryCount: (qn.retryCount || 0) + 1, dedupe: !0 },
                  )));
          }
          return ((Ve = !1), ll(), !0);
        },
        [M, u],
      ),
      bi = T.useCallback((...Te) => Vv(u, $.current, ...Te), []);
    if (
      (Qr(() => {
        ((G.current = a), (J.current = l), ge(N) || (re.current = N));
      }),
      Qr(() => {
        if (!M) return;
        const Te = Ot.bind(We, Uc);
        let Ae = 0;
        z().revalidateOnFocus && (Ae = Date.now() + z().focusThrottleInterval);
        const qe = DE(M, S, (Ve, qn = {}) => {
          if (Ve == Lv) {
            const Ie = Date.now();
            z().revalidateOnFocus &&
              Ie > Ae &&
              P() &&
              ((Ae = Ie + z().focusThrottleInterval), Te());
          } else if (Ve == qv) z().revalidateOnReconnect && P() && Te();
          else {
            if (Ve == Bv) return Ot();
            if (Ve == dp) return Ot(qn);
          }
        });
        return (
          (Z.current = !1),
          ($.current = M),
          (D.current = !0),
          j({ _k: V }),
          ue && (x[M] || (ge(ee) || Zr ? Te() : wE(Te))),
          () => {
            ((Z.current = !0), qe());
          }
        );
      }, [M]),
      Qr(() => {
        let Te;
        function Ae() {
          const qe = Ft(p) ? p(K().data) : p;
          qe && Te !== -1 && (Te = setTimeout(et, qe));
        }
        function et() {
          !K().error && (y || z().isVisible()) && (w || z().isOnline())
            ? Ot(Uc).then(Ae)
            : Ae();
        }
        return (
          Ae(),
          () => {
            Te && (clearTimeout(Te), (Te = -1));
          }
        );
      }, [p, y, w, M]),
      T.useDebugValue(he),
      c && ge(ee) && M)
    ) {
      if (!mp && Zr)
        throw new Error(
          "Fallback data is required when using Suspense in SSR.",
        );
      ((G.current = a), (J.current = l), (Z.current = !1));
      const Te = Q[M];
      if (!ge(Te)) {
        const Ae = bi(Te);
        kc(Ae);
      }
      if (ge(te)) {
        const Ae = Ot(Uc);
        (ge(he) || ((Ae.status = "fulfilled"), (Ae.value = !0)), kc(Ae));
      } else throw te;
    }
    return {
      mutate: bi,
      get data() {
        return ((ne.data = !0), he);
      },
      get error() {
        return ((ne.error = !0), te);
      },
      get isValidating() {
        return ((ne.isValidating = !0), Ee);
      },
      get isLoading() {
        return ((ne.isLoading = !0), lt);
      },
    };
  },
  GE = Hs.defineProperty(OE, "defaultValue", { value: Yv }),
  Hf = jE(YE),
  IE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        SWRConfig: GE,
        default: Hf,
        mutate: Qv,
        preload: NE,
        unstable_serialize: QE,
        useSWRConfig: Kv,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $E = () => {},
  XE = $E(),
  xf = Object,
  yp = (i) => i === XE,
  KE = (i) => typeof i == "function",
  Ts = new WeakMap(),
  ZE = (i) => xf.prototype.toString.call(i),
  jc = (i, a) => i === `[object ${a}]`;
let FE = 0;
const Nf = (i) => {
    const a = typeof i,
      l = ZE(i),
      u = jc(l, "Date"),
      s = jc(l, "RegExp"),
      c = jc(l, "Object");
    let d, h;
    if (xf(i) === i && !u && !s) {
      if (((d = Ts.get(i)), d)) return d;
      if (((d = ++FE + "~"), Ts.set(i, d), Array.isArray(i))) {
        for (d = "@", h = 0; h < i.length; h++) d += Nf(i[h]) + ",";
        Ts.set(i, d);
      }
      if (c) {
        d = "#";
        const m = xf.keys(i).sort();
        for (; !yp((h = m.pop())); )
          yp(i[h]) || (d += h + ":" + Nf(i[h]) + ",");
        Ts.set(i, d);
      }
    } else
      d = u
        ? i.toJSON()
        : a == "symbol"
          ? i.toString()
          : a == "string"
            ? JSON.stringify(i)
            : "" + i;
    return d;
  },
  JE = (i) => {
    if (KE(i))
      try {
        i = i();
      } catch {
        i = "";
      }
    const a = i;
    return (
      (i =
        typeof i == "string"
          ? i
          : (Array.isArray(i) ? i.length : i)
            ? Nf(i)
            : ""),
      [i, a]
    );
  },
  WE = (i) => JE(i ? i(0, null) : null)[0],
  Dc = Promise.resolve(),
  ew = (i) => (a, l, u) => {
    const s = T.useRef(!1),
      {
        cache: c,
        initialSize: d = 1,
        revalidateAll: h = !1,
        persistSize: m = !1,
        revalidateFirstPage: p = !0,
        revalidateOnMount: y = !1,
        parallel: w = !1,
      } = u,
      [, , , C] = tn.get(Wr);
    let S;
    try {
      ((S = WE(a)), S && (S = Iv + S));
    } catch {}
    const [R, x, Q] = di(c, S),
      M = T.useCallback(() => (ge(R()._l) ? d : R()._l), [c, S, d]);
    zv.useSyncExternalStore(
      T.useCallback(
        (z) =>
          S
            ? Q(S, () => {
                z();
              })
            : () => {},
        [c, S],
      ),
      M,
      M,
    );
    const V = T.useCallback(() => {
        const z = R()._l;
        return ge(z) ? d : z;
      }, [S, d]),
      D = T.useRef(V());
    Qr(() => {
      if (!s.current) {
        s.current = !0;
        return;
      }
      S && x({ _l: m ? D.current : V() });
    }, [S, c]);
    const Z = y && !s.current,
      $ = i(
        S,
        async (z) => {
          const P = R()._i,
            K = R()._r;
          x({ _r: We });
          const j = [],
            W = V(),
            [ie] = di(c, z),
            ne = ie().data,
            de = [];
          let B = null;
          for (let F = 0; F < W; ++F) {
            const [ae, ve] = ja(a(F, w ? null : B));
            if (!ae) break;
            const [_, N] = di(c, ae);
            let ee = _().data;
            const te =
              h ||
              P ||
              ge(ee) ||
              (p && !F && !ge(ne)) ||
              Z ||
              (ne && !ge(ne[F]) && !u.compare(ne[F], ee));
            if (l && (typeof K == "function" ? K(ee, ve) : te)) {
              const re = async () => {
                if (!(ae in C)) ee = await l(ve);
                else {
                  const ue = C[ae];
                  (delete C[ae], (ee = await ue));
                }
                (N({ data: ee, _k: ve }), (j[F] = ee));
              };
              w ? de.push(re) : await re();
            } else j[F] = ee;
            w || (B = ee);
          }
          return (
            w && (await Promise.all(de.map((F) => F()))),
            x({ _i: We }),
            j
          );
        },
        u,
      ),
      G = T.useCallback(
        function (z, P) {
          const K = typeof P == "boolean" ? { revalidate: P } : P || {},
            j = K.revalidate !== !1;
          return S
            ? (j &&
                (ge(z)
                  ? x({ _i: !0, _r: K.revalidate })
                  : x({ _i: !1, _r: K.revalidate })),
              arguments.length
                ? $.mutate(z, { ...K, revalidate: j })
                : $.mutate())
            : Dc;
        },
        [S, c],
      ),
      J = T.useCallback(
        (z) => {
          if (!S) return Dc;
          const [, P] = di(c, S);
          let K;
          if (
            (Ft(z) ? (K = z(V())) : typeof z == "number" && (K = z),
            typeof K != "number")
          )
            return Dc;
          (P({ _l: K }), (D.current = K));
          const j = [],
            [W] = di(c, S);
          let ie = null;
          for (let ne = 0; ne < K; ++ne) {
            const [de] = ja(a(ne, ie)),
              [B] = di(c, de),
              F = de ? B().data : We;
            if (ge(F)) return G(W().data);
            (j.push(F), (ie = F));
          }
          return G(j);
        },
        [S, c, G, V],
      );
    return {
      size: V(),
      setSize: J,
      mutate: G,
      get data() {
        return $.data;
      },
      get error() {
        return $.error;
      },
      get isValidating() {
        return $.isValidating;
      },
      get isLoading() {
        return $.isLoading;
      },
    };
  },
  tw = zE(Hf, ew);
var bp = Object.prototype.hasOwnProperty;
function Sp(i, a, l) {
  for (l of i.keys()) if (Yr(l, a)) return l;
}
function Yr(i, a) {
  var l, u, s;
  if (i === a) return !0;
  if (i && a && (l = i.constructor) === a.constructor) {
    if (l === Date) return i.getTime() === a.getTime();
    if (l === RegExp) return i.toString() === a.toString();
    if (l === Array) {
      if ((u = i.length) === a.length) for (; u-- && Yr(i[u], a[u]); );
      return u === -1;
    }
    if (l === Set) {
      if (i.size !== a.size) return !1;
      for (u of i)
        if (
          ((s = u),
          (s && typeof s == "object" && ((s = Sp(a, s)), !s)) || !a.has(s))
        )
          return !1;
      return !0;
    }
    if (l === Map) {
      if (i.size !== a.size) return !1;
      for (u of i)
        if (
          ((s = u[0]),
          (s && typeof s == "object" && ((s = Sp(a, s)), !s)) ||
            !Yr(u[1], a.get(s)))
        )
          return !1;
      return !0;
    }
    if (l === ArrayBuffer) ((i = new Uint8Array(i)), (a = new Uint8Array(a)));
    else if (l === DataView) {
      if ((u = i.byteLength) === a.byteLength)
        for (; u-- && i.getInt8(u) === a.getInt8(u); );
      return u === -1;
    }
    if (ArrayBuffer.isView(i)) {
      if ((u = i.byteLength) === a.byteLength) for (; u-- && i[u] === a[u]; );
      return u === -1;
    }
    if (!l || typeof i == "object") {
      u = 0;
      for (l in i)
        if (
          (bp.call(i, l) && ++u && !bp.call(a, l)) ||
          !(l in a) ||
          !Yr(i[l], a[l])
        )
          return !1;
      return Object.keys(a).length === u;
    }
  }
  return i !== i && a !== a;
}
function nw(i, a) {
  if (!i)
    throw typeof a == "string"
      ? new Error(a)
      : new Error(`${a.displayName} not found`);
}
var gn = (i, a) => {
    const { assertCtxFn: l = nw } = {},
      u = H.createContext(void 0);
    return (
      (u.displayName = i),
      [
        u,
        () => {
          const d = H.useContext(u);
          return (l(d, `${i} not found`), d.value);
        },
        () => {
          const d = H.useContext(u);
          return d ? d.value : {};
        },
      ]
    );
  },
  Vf = {};
G1(Vf, { useSWR: () => Hf, useSWRInfinite: () => tw });
$1(Vf, IE);
var [Zv, Fv] = gn("ClerkInstanceContext"),
  [iw, aw] = gn("UserContext"),
  [rw, qA] = gn("ClientContext"),
  [lw, BA] = gn("SessionContext");
H.createContext({});
var [sw, HA] = gn("CheckoutContext"),
  uw = ({ children: i, ...a }) =>
    H.createElement(sw.Provider, { value: { value: a } }, i),
  [ow, VA] = gn("OrganizationContext"),
  cw = ({ children: i, organization: a, swrConfig: l }) =>
    H.createElement(
      Vf.SWRConfig,
      { value: l },
      H.createElement(
        ow.Provider,
        { value: { value: { organization: a } } },
        i,
      ),
    );
function Jv(i) {
  if (!H.useContext(Zv)) {
    if (typeof i == "function") {
      i();
      return;
    }
    throw new Error(
      `${i} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim(),
    );
  }
}
typeof window < "u" ? H.useLayoutEffect : H.useEffect;
var Ep = "useUser";
function Pf() {
  var l;
  Jv(Ep);
  const i = aw();
  return (
    (l = Fv().telemetry) == null || l.record(Dv(Ep)),
    i === void 0
      ? { isLoaded: !1, isSignedIn: void 0, user: void 0 }
      : i === null
        ? { isLoaded: !0, isSignedIn: !1, user: null }
        : { isLoaded: !0, isSignedIn: !0, user: i }
  );
}
var wp = Yr,
  fw = (i) => {
    const a = T.useRef(i);
    return (
      T.useEffect(() => {
        a.current = i;
      }, [i]),
      a.current
    );
  },
  zt = (i, a, l) => {
    const u = !!l,
      s = T.useRef(l);
    (T.useEffect(() => {
      s.current = l;
    }, [l]),
      T.useEffect(() => {
        if (!u || !i) return () => {};
        const c = (...d) => {
          s.current && s.current(...d);
        };
        return (
          i.on(a, c),
          () => {
            i.off(a, c);
          }
        );
      }, [u, a, i, s]));
  },
  Wv = H.createContext(null);
Wv.displayName = "ElementsContext";
var dw = (i, a) => {
    if (!i)
      throw new Error(
        `Could not find Elements context; You need to wrap the part of your app that ${a} in an <Elements> provider.`,
      );
    return i;
  },
  Vs = (i) => i !== null && typeof i == "object",
  hw = (i, a, l) =>
    Vs(i)
      ? Object.keys(i).reduce((u, s) => {
          const c = !Vs(a) || !ey(i[s], a[s]);
          return l.includes(s)
            ? (c &&
                console.warn(
                  `Unsupported prop change: options.${s} is not a mutable property.`,
                ),
              u)
            : c
              ? { ...(u || {}), [s]: i[s] }
              : u;
        }, null)
      : null,
  Cp = "[object Object]",
  ey = (i, a) => {
    if (!Vs(i) || !Vs(a)) return i === a;
    const l = Array.isArray(i),
      u = Array.isArray(a);
    if (l !== u) return !1;
    const s = Object.prototype.toString.call(i) === Cp,
      c = Object.prototype.toString.call(a) === Cp;
    if (s !== c) return !1;
    if (!s && !l) return i === a;
    const d = Object.keys(i),
      h = Object.keys(a);
    if (d.length !== h.length) return !1;
    const m = {};
    for (let S = 0; S < d.length; S += 1) m[d[S]] = !0;
    for (let S = 0; S < h.length; S += 1) m[h[S]] = !0;
    const p = Object.keys(m);
    if (p.length !== d.length) return !1;
    const y = i,
      w = a,
      C = (S) => ey(y[S], w[S]);
    return p.every(C);
  },
  _p = (i) => {
    const a = H.useContext(Wv);
    return dw(a, i);
  },
  mw = (i) => i.charAt(0).toUpperCase() + i.slice(1),
  gw = (i, a) => {
    const l = `${mw(i)}Element`,
      c = a
        ? (d) => {
            _p(`mounts <${l}>`);
            const { id: h, className: m } = d;
            return H.createElement("div", { id: h, className: m });
          }
        : ({
            id: d,
            className: h,
            fallback: m,
            options: p = {},
            onBlur: y,
            onFocus: w,
            onReady: C,
            onChange: S,
            onEscape: R,
            onClick: x,
            onLoadError: Q,
            onLoaderStart: M,
            onNetworksChange: V,
            onConfirm: D,
            onCancel: Z,
            onShippingAddressChange: $,
            onShippingRateChange: G,
          }) => {
            const J = _p(`mounts <${l}>`),
              z = "elements" in J ? J.elements : null,
              [P, K] = H.useState(null),
              j = H.useRef(null),
              W = H.useRef(null),
              [ie, ne] = T.useState(!1);
            (zt(P, "blur", y),
              zt(P, "focus", w),
              zt(P, "escape", R),
              zt(P, "click", x),
              zt(P, "loaderror", Q),
              zt(P, "loaderstart", M),
              zt(P, "networkschange", V),
              zt(P, "confirm", D),
              zt(P, "cancel", Z),
              zt(P, "shippingaddresschange", $),
              zt(P, "shippingratechange", G),
              zt(P, "change", S));
            let de;
            (C &&
              (de = () => {
                (ne(!0), C(P));
              }),
              zt(P, "ready", de),
              H.useLayoutEffect(() => {
                if (j.current === null && W.current !== null && z) {
                  let F = null;
                  (z && (F = z.create(i, p)),
                    (j.current = F),
                    K(F),
                    F && F.mount(W.current));
                }
              }, [z, p]));
            const B = fw(p);
            return (
              H.useEffect(() => {
                if (!j.current) return;
                const F = hw(p, B, ["paymentRequest"]);
                F && "update" in j.current && j.current.update(F);
              }, [p, B]),
              H.useLayoutEffect(
                () => () => {
                  if (j.current && typeof j.current.destroy == "function")
                    try {
                      (j.current.destroy(), (j.current = null));
                    } catch {}
                },
                [],
              ),
              H.createElement(
                H.Fragment,
                null,
                !ie && m,
                H.createElement("div", {
                  id: d,
                  style: {
                    height: ie ? "unset" : "0px",
                    visibility: ie ? "visible" : "hidden",
                  },
                  className: h,
                  ref: W,
                }),
              )
            );
          };
    return ((c.displayName = l), (c.__elementType = i), c);
  },
  pw = typeof window > "u";
gw("payment", pw);
gn("StripeLibsContext");
gn("PaymentElementContext");
gn("StripeUtilsContext");
var an = xv({ packageName: "@clerk/clerk-react" });
function vw(i) {
  an.setMessages(i).setPackageName(i);
}
var [yw, bw] = gn("AuthContext"),
  Sw = Zv,
  ty = Fv,
  Ew =
    "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.",
  ww = (i) =>
    `You've passed multiple children components to <${i}/>. You can only pass a single child component or text.`,
  Cw =
    "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support",
  zc =
    "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",
  _w =
    "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
  Aw =
    "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",
  Tw =
    "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
  Rw =
    "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",
  Ow = (i) =>
    `<${i} /> can only accept <${i}.Page /> and <${i}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,
  Mw = (i) =>
    `Missing props. <${i}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,
  xw = (i) =>
    `Missing props. <${i}.Link /> component requires the following props: url, label and labelIcon.`,
  Nw =
    "<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
  kw =
    "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",
  Uw =
    "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",
  jw =
    "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",
  Dw =
    "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",
  zw =
    "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",
  Lw =
    "Missing props. <UserButton.Action /> component requires the following props: label.",
  Ys = (i) => {
    Jv(() => {
      an.throwMissingClerkProviderError({ source: i });
    });
  },
  ny = (i) =>
    new Promise((a) => {
      const l = (u) => {
        ["ready", "degraded"].includes(u) && (a(), i.off("status", l));
      };
      i.on("status", l, { notify: !0 });
    }),
  qw = (i) => async (a) => (
    await ny(i),
    i.session ? i.session.getToken(a) : null
  ),
  Bw =
    (i) =>
    async (...a) => (await ny(i), i.signOut(...a)),
  Gs = (i = {}) => {
    var a;
    Ys("useAuth");
    const { treatPendingAsSignedOut: l, ...u } = i ?? {},
      s = u;
    let d = bw();
    d.sessionId === void 0 && d.userId === void 0 && (d = s ?? {});
    const h = ty(),
      m = T.useCallback(qw(h), [h]),
      p = T.useCallback(Bw(h), [h]);
    return (
      (a = h.telemetry) == null ||
        a.record(Dv("useAuth", { treatPendingAsSignedOut: l })),
      Hw({ ...d, getToken: m, signOut: p }, { treatPendingAsSignedOut: l })
    );
  };
function Hw(i, { treatPendingAsSignedOut: a = !0 } = {}) {
  const {
      userId: l,
      orgId: u,
      orgRole: s,
      has: c,
      signOut: d,
      getToken: h,
      orgPermissions: m,
      factorVerificationAge: p,
      sessionClaims: y,
    } = i ?? {},
    w = T.useCallback(
      (S) =>
        c
          ? c(S)
          : rE({
              userId: l,
              orgId: u,
              orgRole: s,
              orgPermissions: m,
              factorVerificationAge: p,
              features: (y == null ? void 0 : y.fea) || "",
              plans: (y == null ? void 0 : y.pla) || "",
            })(S),
      [c, l, u, s, m, p],
    ),
    C = lE({
      authObject: { ...i, getToken: h, signOut: d, has: w },
      options: { treatPendingAsSignedOut: a },
    });
  return C || an.throw(Cw);
}
var Le = (i, a) => {
    const u =
      (typeof a == "string" ? a : a == null ? void 0 : a.component) ||
      i.displayName ||
      i.name ||
      "Component";
    i.displayName = u;
    const s = typeof a == "string" ? void 0 : a,
      c = (d) => {
        Ys(u || "withClerk");
        const h = ty();
        return !h.loaded && !(s != null && s.renderWhileLoading)
          ? null
          : H.createElement(i, { ...d, component: u, clerk: h });
      };
    return ((c.displayName = `withClerk(${u})`), c);
  },
  Vw = () => {
    try {
      return !1;
    } catch {}
    return !1;
  },
  Pw = () => {
    try {
      return !1;
    } catch {}
    return !1;
  },
  Qw = () => {
    try {
      return !0;
    } catch {}
    return !1;
  },
  Ap = new Set(),
  Qf = (i, a, l) => {
    const u = Pw() || Qw(),
      s = i;
    Ap.has(s) ||
      u ||
      (Ap.add(s),
      console.warn(`Clerk - DEPRECATION WARNING: "${i}" is deprecated and will be removed in the next major release.
${a}`));
  },
  Yf = ({ children: i, treatPendingAsSignedOut: a }) => {
    Ys("SignedIn");
    const { userId: l } = Gs({ treatPendingAsSignedOut: a });
    return l ? i : null;
  },
  Gf = ({ children: i, treatPendingAsSignedOut: a }) => {
    Ys("SignedOut");
    const { userId: l } = Gs({ treatPendingAsSignedOut: a });
    return l === null ? i : null;
  };
Le(({ clerk: i, ...a }) => {
  const { client: l, session: u } = i,
    s = l.signedInSessions
      ? l.signedInSessions.length > 0
      : l.activeSessions && l.activeSessions.length > 0;
  return (
    H.useEffect(() => {
      u === null && s ? i.redirectToAfterSignOut() : i.redirectToSignIn(a);
    }, []),
    null
  );
}, "RedirectToSignIn");
Le(
  ({ clerk: i, ...a }) => (
    H.useEffect(() => {
      i.redirectToSignUp(a);
    }, []),
    null
  ),
  "RedirectToSignUp",
);
Le(
  ({ clerk: i, ...a }) => (
    H.useEffect(() => {
      i.redirectToTasks(a);
    }, []),
    null
  ),
  "RedirectToTasks",
);
Le(
  ({ clerk: i }) => (
    H.useEffect(() => {
      (Qf(
        "RedirectToUserProfile",
        "Use the `redirectToUserProfile()` method instead.",
      ),
        i.redirectToUserProfile());
    }, []),
    null
  ),
  "RedirectToUserProfile",
);
Le(
  ({ clerk: i }) => (
    H.useEffect(() => {
      (Qf(
        "RedirectToOrganizationProfile",
        "Use the `redirectToOrganizationProfile()` method instead.",
      ),
        i.redirectToOrganizationProfile());
    }, []),
    null
  ),
  "RedirectToOrganizationProfile",
);
Le(
  ({ clerk: i }) => (
    H.useEffect(() => {
      (Qf(
        "RedirectToCreateOrganization",
        "Use the `redirectToCreateOrganization()` method instead.",
      ),
        i.redirectToCreateOrganization());
    }, []),
    null
  ),
  "RedirectToCreateOrganization",
);
Le(
  ({ clerk: i, ...a }) => (
    H.useEffect(() => {
      i.handleRedirectCallback(a);
    }, []),
    null
  ),
  "AuthenticateWithRedirectCallback",
);
var bt = (i) => {
  Vw() && console.error(`Clerk: ${i}`);
};
function Lc(i, a, l) {
  if (typeof i == "function") return i(a);
  if (typeof i < "u") return i;
  if (typeof l < "u") return l;
}
var Yw = pv(),
  Tp = (i, ...a) => {
    const l = { ...i };
    for (const u of a) delete l[u];
    return l;
  },
  Is = (i) => (a) => {
    try {
      return H.Children.only(i);
    } catch {
      return an.throw(ww(a));
    }
  },
  $s = (i, a) => (
    i || (i = a),
    typeof i == "string" && (i = H.createElement("button", null, i)),
    i
  ),
  Xs =
    (i) =>
    (...a) => {
      if (i && typeof i == "function") return i(...a);
    };
function Gw(i) {
  return typeof i == "function";
}
var Rs = new Map();
function Iw(i, a, l = 1) {
  H.useEffect(() => {
    const u = Rs.get(i) || 0;
    return u == l
      ? an.throw(a)
      : (Rs.set(i, u + 1),
        () => {
          Rs.set(i, (Rs.get(i) || 1) - 1);
        });
  }, []);
}
function $w(i, a, l) {
  const u = i.displayName || i.name || a || "Component",
    s = (c) => (Iw(a, l), H.createElement(i, { ...c }));
  return ((s.displayName = `withMaxAllowedInstancesGuard(${u})`), s);
}
var Gr = (i) => {
    const [a, l] = T.useState(new Map());
    return i.map((u) => ({
      id: u.id,
      mount: (s) => l((c) => new Map(c).set(String(u.id), s)),
      unmount: () =>
        l((s) => {
          const c = new Map(s);
          return (c.set(String(u.id), null), c);
        }),
      portal: () => {
        const s = a.get(String(u.id));
        return s ? Yw.createPortal(u.component, s) : null;
      },
    }));
  },
  yt = (i, a) =>
    !!i && H.isValidElement(i) && (i == null ? void 0 : i.type) === a,
  iy = (i, a) =>
    ly(
      {
        children: i,
        reorderItemsLabels: ["account", "security"],
        LinkComponent: tl,
        PageComponent: el,
        MenuItemsComponent: Zs,
        componentName: "UserProfile",
      },
      a,
    ),
  ay = (i, a) =>
    ly(
      {
        children: i,
        reorderItemsLabels: ["general", "members"],
        LinkComponent: Js,
        PageComponent: Fs,
        componentName: "OrganizationProfile",
      },
      a,
    ),
  ry = (i) => {
    const a = [],
      l = [Js, Fs, Zs, el, tl];
    return (
      H.Children.forEach(i, (u) => {
        l.some((s) => yt(u, s)) || a.push(u);
      }),
      a
    );
  },
  ly = (i, a) => {
    const {
        children: l,
        LinkComponent: u,
        PageComponent: s,
        MenuItemsComponent: c,
        reorderItemsLabels: d,
        componentName: h,
      } = i,
      { allowForAnyChildren: m = !1 } = a || {},
      p = [];
    H.Children.forEach(l, (V) => {
      if (!yt(V, s) && !yt(V, u) && !yt(V, c)) {
        V && !m && bt(Ow(h));
        return;
      }
      const { props: D } = V,
        { children: Z, label: $, url: G, labelIcon: J } = D;
      if (yt(V, s))
        if (Rp(D, d)) p.push({ label: $ });
        else if (qc(D)) p.push({ label: $, labelIcon: J, children: Z, url: G });
        else {
          bt(Mw(h));
          return;
        }
      if (yt(V, u))
        if (Bc(D)) p.push({ label: $, labelIcon: J, url: G });
        else {
          bt(xw(h));
          return;
        }
    });
    const y = [],
      w = [],
      C = [];
    p.forEach((V, D) => {
      if (qc(V)) {
        (y.push({ component: V.children, id: D }),
          w.push({ component: V.labelIcon, id: D }));
        return;
      }
      Bc(V) && C.push({ component: V.labelIcon, id: D });
    });
    const S = Gr(y),
      R = Gr(w),
      x = Gr(C),
      Q = [],
      M = [];
    return (
      p.forEach((V, D) => {
        if (Rp(V, d)) {
          Q.push({ label: V.label });
          return;
        }
        if (qc(V)) {
          const { portal: Z, mount: $, unmount: G } = S.find((K) => K.id === D),
            { portal: J, mount: z, unmount: P } = R.find((K) => K.id === D);
          (Q.push({
            label: V.label,
            url: V.url,
            mount: $,
            unmount: G,
            mountIcon: z,
            unmountIcon: P,
          }),
            M.push(Z),
            M.push(J));
          return;
        }
        if (Bc(V)) {
          const { portal: Z, mount: $, unmount: G } = x.find((J) => J.id === D);
          (Q.push({ label: V.label, url: V.url, mountIcon: $, unmountIcon: G }),
            M.push(Z));
          return;
        }
      }),
      { customPages: Q, customPagesPortals: M }
    );
  },
  Rp = (i, a) => {
    const { children: l, label: u, url: s, labelIcon: c } = i;
    return !l && !s && !c && a.some((d) => d === u);
  },
  qc = (i) => {
    const { children: a, label: l, url: u, labelIcon: s } = i;
    return !!a && !!u && !!s && !!l;
  },
  Bc = (i) => {
    const { children: a, label: l, url: u, labelIcon: s } = i;
    return !a && !!u && !!s && !!l;
  },
  Xw = (i) =>
    Kw({
      children: i,
      reorderItemsLabels: ["manageAccount", "signOut"],
      MenuItemsComponent: Zs,
      MenuActionComponent: uy,
      MenuLinkComponent: oy,
      UserProfileLinkComponent: tl,
      UserProfilePageComponent: el,
    }),
  Kw = ({
    children: i,
    MenuItemsComponent: a,
    MenuActionComponent: l,
    MenuLinkComponent: u,
    UserProfileLinkComponent: s,
    UserProfilePageComponent: c,
    reorderItemsLabels: d,
  }) => {
    const h = [],
      m = [],
      p = [];
    H.Children.forEach(i, (R) => {
      if (!yt(R, a) && !yt(R, s) && !yt(R, c)) {
        R && bt(Nw);
        return;
      }
      if (yt(R, s) || yt(R, c)) return;
      const { props: x } = R;
      H.Children.forEach(x.children, (Q) => {
        if (!yt(Q, l) && !yt(Q, u)) {
          Q && bt(kw);
          return;
        }
        const { props: M } = Q,
          { label: V, labelIcon: D, href: Z, onClick: $, open: G } = M;
        if (yt(Q, l))
          if (Op(M, d)) h.push({ label: V });
          else if (Hc(M)) {
            const J = { label: V, labelIcon: D };
            if ($ !== void 0) h.push({ ...J, onClick: $ });
            else if (G !== void 0)
              h.push({ ...J, open: G.startsWith("/") ? G : `/${G}` });
            else {
              bt("Custom menu item must have either onClick or open property");
              return;
            }
          } else {
            bt(Lw);
            return;
          }
        if (yt(Q, u))
          if (Vc(M)) h.push({ label: V, labelIcon: D, href: Z });
          else {
            bt(zw);
            return;
          }
      });
    });
    const y = [],
      w = [];
    h.forEach((R, x) => {
      (Hc(R) && y.push({ component: R.labelIcon, id: x }),
        Vc(R) && w.push({ component: R.labelIcon, id: x }));
    });
    const C = Gr(y),
      S = Gr(w);
    return (
      h.forEach((R, x) => {
        if ((Op(R, d) && m.push({ label: R.label }), Hc(R))) {
          const { portal: Q, mount: M, unmount: V } = C.find((Z) => Z.id === x),
            D = { label: R.label, mountIcon: M, unmountIcon: V };
          ("onClick" in R
            ? (D.onClick = R.onClick)
            : "open" in R && (D.open = R.open),
            m.push(D),
            p.push(Q));
        }
        if (Vc(R)) {
          const { portal: Q, mount: M, unmount: V } = S.find((D) => D.id === x);
          (m.push({
            label: R.label,
            href: R.href,
            mountIcon: M,
            unmountIcon: V,
          }),
            p.push(Q));
        }
      }),
      { customMenuItems: m, customMenuItemsPortals: p }
    );
  },
  Op = (i, a) => {
    const { children: l, label: u, onClick: s, labelIcon: c } = i;
    return !l && !s && !c && a.some((d) => d === u);
  },
  Hc = (i) => {
    const { label: a, labelIcon: l, onClick: u, open: s } = i;
    return !!l && !!a && (typeof u == "function" || typeof s == "string");
  },
  Vc = (i) => {
    const { label: a, href: l, labelIcon: u } = i;
    return !!l && !!u && !!a;
  };
function Zw(i) {
  const {
    root: a = document == null ? void 0 : document.body,
    selector: l,
    timeout: u = 0,
  } = i;
  return new Promise((s, c) => {
    if (!a) {
      c(new Error("No root element provided"));
      return;
    }
    let d = a;
    if (
      (l && (d = a == null ? void 0 : a.querySelector(l)),
      (d == null ? void 0 : d.childElementCount) && d.childElementCount > 0)
    ) {
      s();
      return;
    }
    const m = new MutationObserver((p) => {
      for (const y of p)
        if (
          y.type === "childList" &&
          (!d && l && (d = a == null ? void 0 : a.querySelector(l)),
          d != null && d.childElementCount && d.childElementCount > 0)
        ) {
          (m.disconnect(), s());
          return;
        }
    });
    (m.observe(a, { childList: !0, subtree: !0 }),
      u > 0 &&
        setTimeout(() => {
          (m.disconnect(),
            c(new Error("Timeout waiting for element children")));
        }, u));
  });
}
function Bt(i) {
  const a = T.useRef(),
    [l, u] = T.useState("rendering");
  return (
    T.useEffect(() => {
      if (!i)
        throw new Error(
          "Clerk: no component name provided, unable to detect mount.",
        );
      typeof window < "u" &&
        !a.current &&
        (a.current = Zw({ selector: `[data-clerk-component="${i}"]` })
          .then(() => {
            u("rendered");
          })
          .catch(() => {
            u("error");
          }));
    }, [i]),
    l
  );
}
var Os = (i) => "mount" in i,
  Mp = (i) => "open" in i,
  xp = (i) =>
    i == null ? void 0 : i.map(({ mountIcon: a, unmountIcon: l, ...u }) => u),
  St = class extends H.PureComponent {
    constructor() {
      (super(...arguments), (this.rootRef = H.createRef()));
    }
    componentDidUpdate(i) {
      var a, l, u, s;
      if (!Os(i) || !Os(this.props)) return;
      const c = Tp(i.props, "customPages", "customMenuItems", "children"),
        d = Tp(this.props.props, "customPages", "customMenuItems", "children"),
        h =
          ((a = c.customPages) == null ? void 0 : a.length) !==
          ((l = d.customPages) == null ? void 0 : l.length),
        m =
          ((u = c.customMenuItems) == null ? void 0 : u.length) !==
          ((s = d.customMenuItems) == null ? void 0 : s.length),
        p = xp(i.props.customMenuItems),
        y = xp(this.props.props.customMenuItems);
      (!wp(c, d) || !wp(p, y) || h || m) &&
        this.rootRef.current &&
        this.props.updateProps({
          node: this.rootRef.current,
          props: this.props.props,
        });
    }
    componentDidMount() {
      this.rootRef.current &&
        (Os(this.props) &&
          this.props.mount(this.rootRef.current, this.props.props),
        Mp(this.props) && this.props.open(this.props.props));
    }
    componentWillUnmount() {
      this.rootRef.current &&
        (Os(this.props) && this.props.unmount(this.rootRef.current),
        Mp(this.props) && this.props.close());
    }
    render() {
      const { hideRootHtmlElement: i = !1 } = this.props,
        a = {
          ref: this.rootRef,
          ...this.props.rootProps,
          ...(this.props.component && {
            "data-clerk-component": this.props.component,
          }),
        };
      return H.createElement(
        H.Fragment,
        null,
        !i && H.createElement("div", { ...a }),
        this.props.children,
      );
    }
  },
  Ks = (i) => {
    var a, l;
    return H.createElement(
      H.Fragment,
      null,
      (a = i == null ? void 0 : i.customPagesPortals) == null
        ? void 0
        : a.map((u, s) => T.createElement(u, { key: s })),
      (l = i == null ? void 0 : i.customMenuItemsPortals) == null
        ? void 0
        : l.map((u, s) => T.createElement(u, { key: s })),
    );
  };
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountSignIn,
          unmount: i.unmountSignIn,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "SignIn", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountSignUp,
          unmount: i.unmountSignUp,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "SignUp", renderWhileLoading: !0 },
);
function el({ children: i }) {
  return (bt(_w), H.createElement(H.Fragment, null, i));
}
function tl({ children: i }) {
  return (bt(Aw), H.createElement(H.Fragment, null, i));
}
var Fw = Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) },
      { customPages: h, customPagesPortals: m } = iy(u.children);
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      H.createElement(
        St,
        {
          component: a,
          mount: i.mountUserProfile,
          unmount: i.unmountUserProfile,
          updateProps: i.__unstable__updateProps,
          props: { ...u, customPages: h },
          rootProps: d,
        },
        H.createElement(Ks, { customPagesPortals: m }),
      ),
    );
  },
  { component: "UserProfile", renderWhileLoading: !0 },
);
Object.assign(Fw, { Page: el, Link: tl });
var sy = T.createContext({
    mount: () => {},
    unmount: () => {},
    updateProps: () => {},
  }),
  Jw = Le(
    ({ clerk: i, component: a, fallback: l, ...u }) => {
      const c = Bt(a) === "rendering" || !i.loaded,
        d = { ...(c && l && { style: { display: "none" } }) },
        { customPages: h, customPagesPortals: m } = iy(u.children, {
          allowForAnyChildren: !!u.__experimental_asProvider,
        }),
        p = Object.assign(u.userProfileProps || {}, { customPages: h }),
        { customMenuItems: y, customMenuItemsPortals: w } = Xw(u.children),
        C = ry(u.children),
        S = {
          mount: i.mountUserButton,
          unmount: i.unmountUserButton,
          updateProps: i.__unstable__updateProps,
          props: { ...u, userProfileProps: p, customMenuItems: y },
        },
        R = { customPagesPortals: m, customMenuItemsPortals: w };
      return H.createElement(
        sy.Provider,
        { value: S },
        c && l,
        i.loaded &&
          H.createElement(
            St,
            {
              component: a,
              ...S,
              hideRootHtmlElement: !!u.__experimental_asProvider,
              rootProps: d,
            },
            u.__experimental_asProvider ? C : null,
            H.createElement(Ks, { ...R }),
          ),
      );
    },
    { component: "UserButton", renderWhileLoading: !0 },
  );
function Zs({ children: i }) {
  return (bt(Uw), H.createElement(H.Fragment, null, i));
}
function uy({ children: i }) {
  return (bt(jw), H.createElement(H.Fragment, null, i));
}
function oy({ children: i }) {
  return (bt(Dw), H.createElement(H.Fragment, null, i));
}
function Ww(i) {
  const a = T.useContext(sy),
    l = { ...a, props: { ...a.props, ...i } };
  return H.createElement(St, { ...l });
}
var eC = Object.assign(Jw, {
  UserProfilePage: el,
  UserProfileLink: tl,
  MenuItems: Zs,
  Action: uy,
  Link: oy,
  __experimental_Outlet: Ww,
});
function Fs({ children: i }) {
  return (bt(Tw), H.createElement(H.Fragment, null, i));
}
function Js({ children: i }) {
  return (bt(Rw), H.createElement(H.Fragment, null, i));
}
var tC = Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) },
      { customPages: h, customPagesPortals: m } = ay(u.children);
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(
          St,
          {
            component: a,
            mount: i.mountOrganizationProfile,
            unmount: i.unmountOrganizationProfile,
            updateProps: i.__unstable__updateProps,
            props: { ...u, customPages: h },
            rootProps: d,
          },
          H.createElement(Ks, { customPagesPortals: m }),
        ),
    );
  },
  { component: "OrganizationProfile", renderWhileLoading: !0 },
);
Object.assign(tC, { Page: Fs, Link: Js });
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountCreateOrganization,
          unmount: i.unmountCreateOrganization,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "CreateOrganization", renderWhileLoading: !0 },
);
var cy = T.createContext({
    mount: () => {},
    unmount: () => {},
    updateProps: () => {},
  }),
  nC = Le(
    ({ clerk: i, component: a, fallback: l, ...u }) => {
      const c = Bt(a) === "rendering" || !i.loaded,
        d = { ...(c && l && { style: { display: "none" } }) },
        { customPages: h, customPagesPortals: m } = ay(u.children, {
          allowForAnyChildren: !!u.__experimental_asProvider,
        }),
        p = Object.assign(u.organizationProfileProps || {}, { customPages: h }),
        y = ry(u.children),
        w = {
          mount: i.mountOrganizationSwitcher,
          unmount: i.unmountOrganizationSwitcher,
          updateProps: i.__unstable__updateProps,
          props: { ...u, organizationProfileProps: p },
          rootProps: d,
          component: a,
        };
      return (
        i.__experimental_prefetchOrganizationSwitcher(),
        H.createElement(
          cy.Provider,
          { value: w },
          H.createElement(
            H.Fragment,
            null,
            c && l,
            i.loaded &&
              H.createElement(
                St,
                { ...w, hideRootHtmlElement: !!u.__experimental_asProvider },
                u.__experimental_asProvider ? y : null,
                H.createElement(Ks, { customPagesPortals: m }),
              ),
          ),
        )
      );
    },
    { component: "OrganizationSwitcher", renderWhileLoading: !0 },
  );
function iC(i) {
  const a = T.useContext(cy),
    l = { ...a, props: { ...a.props, ...i } };
  return H.createElement(St, { ...l });
}
Object.assign(nC, {
  OrganizationProfilePage: Fs,
  OrganizationProfileLink: Js,
  __experimental_Outlet: iC,
});
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountOrganizationList,
          unmount: i.unmountOrganizationList,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "OrganizationList", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          open: i.openGoogleOneTap,
          close: i.closeGoogleOneTap,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "GoogleOneTap", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountWaitlist,
          unmount: i.unmountWaitlist,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "Waitlist", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountPricingTable,
          unmount: i.unmountPricingTable,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "PricingTable", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountApiKeys,
          unmount: i.unmountApiKeys,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "ApiKeys", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, component: a, fallback: l, ...u }) => {
    const c = Bt(a) === "rendering" || !i.loaded,
      d = { ...(c && l && { style: { display: "none" } }) };
    return H.createElement(
      H.Fragment,
      null,
      c && l,
      i.loaded &&
        H.createElement(St, {
          component: a,
          mount: i.mountTaskChooseOrganization,
          unmount: i.unmountTaskChooseOrganization,
          updateProps: i.__unstable__updateProps,
          props: u,
          rootProps: d,
        }),
    );
  },
  { component: "TaskChooseOrganization", renderWhileLoading: !0 },
);
var fy = (i) => {
    throw TypeError(i);
  },
  If = (i, a, l) => a.has(i) || fy("Cannot " + l),
  ze = (i, a, l) => (
    If(i, a, "read from private field"),
    l ? l.call(i) : a.get(i)
  ),
  ci = (i, a, l) =>
    a.has(i)
      ? fy("Cannot add the same private member more than once")
      : a instanceof WeakSet
        ? a.add(i)
        : a.set(i, l),
  qi = (i, a, l, u) => (If(i, a, "write to private field"), a.set(i, l), l),
  Pc = (i, a, l) => (If(i, a, "access private method"), l),
  aC = (i, a = "5.91.0") => {
    if (i) return i;
    const l = rC(a);
    return l ? (l === "snapshot" ? "5.91.0" : l) : lC(a);
  },
  rC = (i) => {
    var a;
    return (a = i
      .trim()
      .replace(/^v/, "")
      .match(/-(.+?)(\.|$)/)) == null
      ? void 0
      : a[1];
  },
  lC = (i) => i.trim().replace(/^v/, "").split(".")[0];
function sC(i) {
  return i ? uC(i) || dy(i) : !0;
}
function uC(i) {
  return /^http(s)?:\/\//.test(i || "");
}
function dy(i) {
  return i.startsWith("/");
}
function oC(i) {
  return i ? (dy(i) ? new URL(i, window.location.origin).toString() : i) : "";
}
function cC(i) {
  if (!i) return "";
  let a;
  if (i.match(/^(clerk\.)+\w*$/)) a = /(clerk\.)*(?=clerk\.)/;
  else {
    if (i.match(/\.clerk.accounts/)) return i;
    a = /^(clerk\.)*/gi;
  }
  return `clerk.${i.replace(a, "")}`;
}
var fC = {
    initialDelay: 125,
    maxDelayBetweenRetries: 0,
    factor: 2,
    shouldRetry: (i, a) => a < 5,
    retryImmediately: !1,
    jitter: !0,
  },
  dC = 100,
  hy = async (i) => new Promise((a) => setTimeout(a, i)),
  my = (i, a) => (a ? i * (1 + Math.random()) : i),
  hC = (i) => {
    let a = 0;
    const l = () => {
      const u = i.initialDelay,
        s = i.factor;
      let c = u * Math.pow(s, a);
      return (
        (c = my(c, i.jitter)),
        Math.min(i.maxDelayBetweenRetries || c, c)
      );
    };
    return async () => {
      (await hy(l()), a++);
    };
  },
  mC = async (i, a = {}) => {
    let l = 0;
    const {
        shouldRetry: u,
        initialDelay: s,
        maxDelayBetweenRetries: c,
        factor: d,
        retryImmediately: h,
        jitter: m,
      } = { ...fC, ...a },
      p = hC({
        initialDelay: s,
        maxDelayBetweenRetries: c,
        factor: d,
        jitter: m,
      });
    for (;;)
      try {
        return await i();
      } catch (y) {
        if ((l++, !u(y, l))) throw y;
        h && l === 1 ? await hy(my(dC, m)) : await p();
      }
  },
  gC = "loadScript cannot be called when document does not exist",
  pC = "loadScript cannot be called without a src";
async function vC(i = "", a) {
  const {
    async: l,
    defer: u,
    beforeLoad: s,
    crossOrigin: c,
    nonce: d,
  } = a || {};
  return mC(
    () =>
      new Promise((m, p) => {
        (i || p(new Error(pC)), (!document || !document.body) && p(gC));
        const y = document.createElement("script");
        (c && y.setAttribute("crossorigin", c),
          (y.async = l || !1),
          (y.defer = u || !1),
          y.addEventListener("load", () => {
            (y.remove(), m(y));
          }),
          y.addEventListener("error", () => {
            (y.remove(), p());
          }),
          (y.src = i),
          (y.nonce = d),
          s == null || s(y),
          document.body.appendChild(y));
      }),
    { shouldRetry: (m, p) => p <= 5 },
  );
}
var gy = "Clerk: Failed to load Clerk",
  { isDevOrStagingUrl: yC } = oE(),
  py = xv({ packageName: "@clerk/shared" });
function bC(i) {
  py.setPackageName({ packageName: i });
}
function kf() {
  if (typeof window > "u" || !window.Clerk) return !1;
  const i = window.Clerk;
  return typeof i == "object" && typeof i.load == "function";
}
function Np(i) {
  return new Promise((a, l) => {
    let u = !1;
    const s = (p, y) => {
        (clearTimeout(p), clearInterval(y));
      },
      c = () => {
        u || (kf() && ((u = !0), s(h, m), a(null)));
      },
      h = setTimeout(() => {
        u || ((u = !0), s(h, m), kf() ? a(null) : l(new Error(gy)));
      }, i);
    c();
    const m = setInterval(() => {
      if (u) {
        clearInterval(m);
        return;
      }
      c();
    }, 100);
  });
}
var SC = async (i) => {
    const a = (i == null ? void 0 : i.scriptLoadTimeout) ?? 15e3;
    if (kf()) return null;
    if (document.querySelector("script[data-clerk-js-script]")) return Np(a);
    if (!(i != null && i.publishableKey))
      return (py.throwMissingPublishableKeyError(), null);
    const u = Np(a);
    return (
      vC(EC(i), {
        async: !0,
        crossOrigin: "anonymous",
        nonce: i.nonce,
        beforeLoad: CC(i),
      }).catch(() => {
        throw new Error(gy);
      }),
      u
    );
  },
  EC = (i) => {
    var y, w;
    const {
      clerkJSUrl: a,
      clerkJSVariant: l,
      clerkJSVersion: u,
      proxyUrl: s,
      domain: c,
      publishableKey: d,
    } = i;
    if (a) return a;
    let h = "";
    s && sC(s)
      ? (h = oC(s).replace(/http(s)?:\/\//, ""))
      : c && !yC(((y = op(d)) == null ? void 0 : y.frontendApi) || "")
        ? (h = cC(c))
        : (h = ((w = op(d)) == null ? void 0 : w.frontendApi) || "");
    const m = l ? `${l.replace(/\.+$/, "")}.` : "",
      p = aC(u);
    return `https://${h}/npm/@clerk/clerk-js@${p}/dist/clerk.${m}browser.js`;
  },
  wC = (i) => {
    const a = {};
    return (
      i.publishableKey && (a["data-clerk-publishable-key"] = i.publishableKey),
      i.proxyUrl && (a["data-clerk-proxy-url"] = i.proxyUrl),
      i.domain && (a["data-clerk-domain"] = i.domain),
      i.nonce && (a.nonce = i.nonce),
      a
    );
  },
  CC = (i) => (a) => {
    const l = wC(i);
    for (const u in l) a.setAttribute(u, l[u]);
  },
  _C = (i, a, l) => (!i && l ? AC(l) : TC(a)),
  AC = (i) => {
    const a = i.userId,
      l = i.user,
      u = i.sessionId,
      s = i.sessionStatus,
      c = i.sessionClaims,
      d = i.session,
      h = i.organization,
      m = i.orgId,
      p = i.orgRole,
      y = i.orgPermissions,
      w = i.orgSlug,
      C = i.actor,
      S = i.factorVerificationAge;
    return {
      userId: a,
      user: l,
      sessionId: u,
      session: d,
      sessionStatus: s,
      sessionClaims: c,
      organization: h,
      orgId: m,
      orgRole: p,
      orgPermissions: y,
      orgSlug: w,
      actor: C,
      factorVerificationAge: S,
    };
  },
  TC = (i) => {
    var x, Q, M, V;
    const a = i.user ? i.user.id : i.user,
      l = i.user,
      u = i.session ? i.session.id : i.session,
      s = i.session,
      c = (x = i.session) == null ? void 0 : x.status,
      d = i.session
        ? (M = (Q = i.session.lastActiveToken) == null ? void 0 : Q.jwt) == null
          ? void 0
          : M.claims
        : null,
      h = i.session ? i.session.factorVerificationAge : null,
      m = s == null ? void 0 : s.actor,
      p = i.organization,
      y = i.organization ? i.organization.id : i.organization,
      w = p == null ? void 0 : p.slug,
      C =
        p &&
        ((V = l == null ? void 0 : l.organizationMemberships) == null
          ? void 0
          : V.find((D) => D.organization.id === y)),
      S = C && C.permissions,
      R = C && C.role;
    return {
      userId: a,
      user: l,
      sessionId: u,
      session: s,
      sessionStatus: c,
      sessionClaims: d,
      organization: p,
      orgId: y,
      orgRole: R,
      orgSlug: w,
      orgPermissions: S,
      actor: m,
      factorVerificationAge: h,
    };
  };
function Uf() {
  return typeof window < "u";
}
var kp = (i, a, l, u, s) => {
    const { notify: c } = s || {};
    let d = i.get(l);
    (d || ((d = []), i.set(l, d)), d.push(u), c && a.has(l) && u(a.get(l)));
  },
  Up = (i, a, l) => (i.get(a) || []).map((u) => u(l)),
  jp = (i, a, l) => {
    const u = i.get(a);
    u && (l ? u.splice(u.indexOf(l) >>> 0, 1) : i.set(a, []));
  },
  RC = () => {
    const i = new Map(),
      a = new Map(),
      l = new Map();
    return {
      on: (...s) => kp(i, a, ...s),
      prioritizedOn: (...s) => kp(l, a, ...s),
      emit: (s, c) => {
        (a.set(s, c), Up(l, s, c), Up(i, s, c));
      },
      off: (...s) => jp(i, ...s),
      prioritizedOff: (...s) => jp(l, ...s),
      internal: { retrieveListeners: (s) => i.get(s) || [] },
    };
  },
  Ms = { Status: "status" },
  OC = () => RC();
typeof window < "u" &&
  !window.global &&
  (window.global = typeof global > "u" ? window : global);
var $f = Le(
  ({ clerk: i, children: a, ...l }) => {
    const {
      signUpFallbackRedirectUrl: u,
      forceRedirectUrl: s,
      fallbackRedirectUrl: c,
      signUpForceRedirectUrl: d,
      mode: h,
      initialValues: m,
      withSignUp: p,
      oauthFlow: y,
      ...w
    } = l;
    a = $s(a, "Sign in");
    const C = Is(a)("SignInButton"),
      S = () => {
        const Q = {
          forceRedirectUrl: s,
          fallbackRedirectUrl: c,
          signUpFallbackRedirectUrl: u,
          signUpForceRedirectUrl: d,
          initialValues: m,
          withSignUp: p,
          oauthFlow: y,
        };
        return h === "modal"
          ? i.openSignIn({ ...Q, appearance: l.appearance })
          : i.redirectToSignIn({
              ...Q,
              signInFallbackRedirectUrl: c,
              signInForceRedirectUrl: s,
            });
      },
      x = {
        ...w,
        onClick: async (Q) => (
          C &&
            typeof C == "object" &&
            "props" in C &&
            (await Xs(C.props.onClick)(Q)),
          S()
        ),
      };
    return H.cloneElement(C, x);
  },
  { component: "SignInButton", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, children: a, ...l }) => {
    const { redirectUrl: u, ...s } = l;
    a = $s(a, "Sign in with Metamask");
    const c = Is(a)("SignInWithMetamaskButton"),
      d = async () => {
        async function p() {
          await i.authenticateWithMetamask({ redirectUrl: u || void 0 });
        }
        p();
      },
      m = { ...s, onClick: async (p) => (await Xs(c.props.onClick)(p), d()) };
    return H.cloneElement(c, m);
  },
  { component: "SignInWithMetamask", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, children: a, ...l }) => {
    const { redirectUrl: u = "/", signOutOptions: s, ...c } = l;
    a = $s(a, "Sign out");
    const d = Is(a)("SignOutButton"),
      h = () => i.signOut({ redirectUrl: u, ...s }),
      p = { ...c, onClick: async (y) => (await Xs(d.props.onClick)(y), h()) };
    return H.cloneElement(d, p);
  },
  { component: "SignOutButton", renderWhileLoading: !0 },
);
Le(
  ({ clerk: i, children: a, ...l }) => {
    const {
      fallbackRedirectUrl: u,
      forceRedirectUrl: s,
      signInFallbackRedirectUrl: c,
      signInForceRedirectUrl: d,
      mode: h,
      initialValues: m,
      oauthFlow: p,
      ...y
    } = l;
    a = $s(a, "Sign up");
    const w = Is(a)("SignUpButton"),
      C = () => {
        const x = {
          fallbackRedirectUrl: u,
          forceRedirectUrl: s,
          signInFallbackRedirectUrl: c,
          signInForceRedirectUrl: d,
          initialValues: m,
          oauthFlow: p,
        };
        return h === "modal"
          ? i.openSignUp({
              ...x,
              appearance: l.appearance,
              unsafeMetadata: l.unsafeMetadata,
            })
          : i.redirectToSignUp({
              ...x,
              signUpFallbackRedirectUrl: u,
              signUpForceRedirectUrl: s,
            });
      },
      R = {
        ...y,
        onClick: async (x) => (
          w &&
            typeof w == "object" &&
            "props" in w &&
            (await Xs(w.props.onClick)(x)),
          C()
        ),
      };
    return H.cloneElement(w, R);
  },
  { component: "SignUpButton", renderWhileLoading: !0 },
);
var Dp = () => ({
    fields: {
      firstName: null,
      lastName: null,
      emailAddress: null,
      identifier: null,
      phoneNumber: null,
      password: null,
      username: null,
      code: null,
      captcha: null,
      legalAccepted: null,
    },
    raw: [],
    global: [],
  }),
  MC = class {
    constructor(i) {
      ((this.isomorphicClerk = i),
        (this.signInSignalProxy = this.buildSignInProxy()),
        (this.signUpSignalProxy = this.buildSignUpProxy()));
    }
    signInSignal() {
      return this.signInSignalProxy;
    }
    signUpSignal() {
      return this.signUpSignalProxy;
    }
    buildSignInProxy() {
      const i = () => this.client.signIn.__internal_future;
      return {
        errors: Dp(),
        fetchStatus: "idle",
        signIn: {
          status: "needs_identifier",
          availableStrategies: [],
          isTransferable: !1,
          create: this.gateMethod(i, "create"),
          password: this.gateMethod(i, "password"),
          sso: this.gateMethod(i, "sso"),
          finalize: this.gateMethod(i, "finalize"),
          emailCode: this.wrapMethods(
            () => i().emailCode,
            ["sendCode", "verifyCode"],
          ),
          resetPasswordEmailCode: this.wrapMethods(
            () => i().resetPasswordEmailCode,
            ["sendCode", "verifyCode", "submitPassword"],
          ),
          phoneCode: this.wrapMethods(
            () => i().phoneCode,
            ["sendCode", "verifyCode"],
          ),
          mfa: this.wrapMethods(
            () => i().mfa,
            [
              "sendPhoneCode",
              "verifyPhoneCode",
              "verifyTOTP",
              "verifyBackupCode",
            ],
          ),
        },
      };
    }
    buildSignUpProxy() {
      const i = () => this.client.signUp.__internal_future;
      return {
        errors: Dp(),
        fetchStatus: "idle",
        signUp: {
          status: "missing_requirements",
          unverifiedFields: [],
          isTransferable: !1,
          create: this.gateMethod(i, "create"),
          sso: this.gateMethod(i, "sso"),
          password: this.gateMethod(i, "password"),
          finalize: this.gateMethod(i, "finalize"),
          verifications: this.wrapMethods(
            () => i().verifications,
            [
              "sendEmailCode",
              "verifyEmailCode",
              "sendPhoneCode",
              "verifyPhoneCode",
            ],
          ),
        },
      };
    }
    __internal_effect(i) {
      throw new Error("__internal_effect called before Clerk is loaded");
    }
    __internal_computed(i) {
      throw new Error("__internal_computed called before Clerk is loaded");
    }
    get client() {
      const i = this.isomorphicClerk.client;
      if (!i) throw new Error("Clerk client not ready");
      return i;
    }
    gateMethod(i, a) {
      return async (...l) => {
        if (!Uf())
          return an.throw(
            `Attempted to call a method (${a}) that is not supported on the server.`,
          );
        this.isomorphicClerk.loaded ||
          (await new Promise((s) => this.isomorphicClerk.addOnLoaded(s)));
        const u = i();
        return u[a].apply(u, l);
      };
    }
    wrapMethods(i, a) {
      return Object.fromEntries(a.map((l) => [l, this.gateMethod(i, l)]));
    }
  };
typeof globalThis.__BUILD_DISABLE_RHC__ > "u" &&
  (globalThis.__BUILD_DISABLE_RHC__ = !1);
var xC = {
    name: "@clerk/clerk-react",
    version: "5.46.0",
    environment: "production",
  },
  ks,
  Ma,
  xa,
  fi,
  Un,
  Us,
  hi,
  Br,
  js,
  vy = class yy {
    constructor(a) {
      (ci(this, Br),
        (this.clerkjs = null),
        (this.preopenOneTap = null),
        (this.preopenUserVerification = null),
        (this.preopenSignIn = null),
        (this.preopenCheckout = null),
        (this.preopenPlanDetails = null),
        (this.preopenSubscriptionDetails = null),
        (this.preopenSignUp = null),
        (this.preopenUserProfile = null),
        (this.preopenOrganizationProfile = null),
        (this.preopenCreateOrganization = null),
        (this.preOpenWaitlist = null),
        (this.premountSignInNodes = new Map()),
        (this.premountSignUpNodes = new Map()),
        (this.premountUserProfileNodes = new Map()),
        (this.premountUserButtonNodes = new Map()),
        (this.premountOrganizationProfileNodes = new Map()),
        (this.premountCreateOrganizationNodes = new Map()),
        (this.premountOrganizationSwitcherNodes = new Map()),
        (this.premountOrganizationListNodes = new Map()),
        (this.premountMethodCalls = new Map()),
        (this.premountWaitlistNodes = new Map()),
        (this.premountPricingTableNodes = new Map()),
        (this.premountApiKeysNodes = new Map()),
        (this.premountOAuthConsentNodes = new Map()),
        (this.premountTaskChooseOrganizationNodes = new Map()),
        (this.premountAddListenerCalls = new Map()),
        (this.loadedListeners = []),
        ci(this, ks, "loading"),
        ci(this, Ma),
        ci(this, xa),
        ci(this, fi),
        ci(this, Un, OC()),
        ci(this, Us),
        (this.buildSignInUrl = (s) => {
          const c = () => {
            var d;
            return (
              ((d = this.clerkjs) == null ? void 0 : d.buildSignInUrl(s)) || ""
            );
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("buildSignInUrl", c);
        }),
        (this.buildSignUpUrl = (s) => {
          const c = () => {
            var d;
            return (
              ((d = this.clerkjs) == null ? void 0 : d.buildSignUpUrl(s)) || ""
            );
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("buildSignUpUrl", c);
        }),
        (this.buildAfterSignInUrl = (...s) => {
          const c = () => {
            var d;
            return (
              ((d = this.clerkjs) == null
                ? void 0
                : d.buildAfterSignInUrl(...s)) || ""
            );
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("buildAfterSignInUrl", c);
        }),
        (this.buildAfterSignUpUrl = (...s) => {
          const c = () => {
            var d;
            return (
              ((d = this.clerkjs) == null
                ? void 0
                : d.buildAfterSignUpUrl(...s)) || ""
            );
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("buildAfterSignUpUrl", c);
        }),
        (this.buildAfterSignOutUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null
                ? void 0
                : c.buildAfterSignOutUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildAfterSignOutUrl", s);
        }),
        (this.buildNewSubscriptionRedirectUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null
                ? void 0
                : c.buildNewSubscriptionRedirectUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl", s);
        }),
        (this.buildAfterMultiSessionSingleSignOutUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null
                ? void 0
                : c.buildAfterMultiSessionSingleSignOutUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set(
            "buildAfterMultiSessionSingleSignOutUrl",
            s,
          );
        }),
        (this.buildUserProfileUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null ? void 0 : c.buildUserProfileUrl()) ||
              ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildUserProfileUrl", s);
        }),
        (this.buildCreateOrganizationUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null
                ? void 0
                : c.buildCreateOrganizationUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildCreateOrganizationUrl", s);
        }),
        (this.buildOrganizationProfileUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null
                ? void 0
                : c.buildOrganizationProfileUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildOrganizationProfileUrl", s);
        }),
        (this.buildWaitlistUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null ? void 0 : c.buildWaitlistUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildWaitlistUrl", s);
        }),
        (this.buildTasksUrl = () => {
          const s = () => {
            var c;
            return (
              ((c = this.clerkjs) == null ? void 0 : c.buildTasksUrl()) || ""
            );
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("buildTasksUrl", s);
        }),
        (this.buildUrlWithAuth = (s) => {
          const c = () => {
            var d;
            return (
              ((d = this.clerkjs) == null ? void 0 : d.buildUrlWithAuth(s)) ||
              ""
            );
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("buildUrlWithAuth", c);
        }),
        (this.handleUnauthenticated = async () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.handleUnauthenticated();
          };
          this.clerkjs && this.loaded
            ? s()
            : this.premountMethodCalls.set("handleUnauthenticated", s);
        }),
        (this.on = (...s) => {
          var c;
          if ((c = this.clerkjs) != null && c.on) return this.clerkjs.on(...s);
          ze(this, Un).on(...s);
        }),
        (this.off = (...s) => {
          var c;
          if ((c = this.clerkjs) != null && c.off)
            return this.clerkjs.off(...s);
          ze(this, Un).off(...s);
        }),
        (this.addOnLoaded = (s) => {
          (this.loadedListeners.push(s), this.loaded && this.emitLoaded());
        }),
        (this.emitLoaded = () => {
          (this.loadedListeners.forEach((s) => s()),
            (this.loadedListeners = []));
        }),
        (this.beforeLoad = (s) => {
          if (!s) throw new Error("Failed to hydrate latest Clerk JS");
        }),
        (this.hydrateClerkJS = (s) => {
          var c;
          if (!s) throw new Error("Failed to hydrate latest Clerk JS");
          return (
            (this.clerkjs = s),
            this.premountMethodCalls.forEach((d) => d()),
            this.premountAddListenerCalls.forEach((d, h) => {
              d.nativeUnsubscribe = s.addListener(h);
            }),
            (c = ze(this, Un).internal.retrieveListeners("status")) == null ||
              c.forEach((d) => {
                this.on("status", d, { notify: !0 });
              }),
            this.preopenSignIn !== null && s.openSignIn(this.preopenSignIn),
            this.preopenCheckout !== null &&
              s.__internal_openCheckout(this.preopenCheckout),
            this.preopenPlanDetails !== null &&
              s.__internal_openPlanDetails(this.preopenPlanDetails),
            this.preopenSubscriptionDetails !== null &&
              s.__internal_openSubscriptionDetails(
                this.preopenSubscriptionDetails,
              ),
            this.preopenSignUp !== null && s.openSignUp(this.preopenSignUp),
            this.preopenUserProfile !== null &&
              s.openUserProfile(this.preopenUserProfile),
            this.preopenUserVerification !== null &&
              s.__internal_openReverification(this.preopenUserVerification),
            this.preopenOneTap !== null &&
              s.openGoogleOneTap(this.preopenOneTap),
            this.preopenOrganizationProfile !== null &&
              s.openOrganizationProfile(this.preopenOrganizationProfile),
            this.preopenCreateOrganization !== null &&
              s.openCreateOrganization(this.preopenCreateOrganization),
            this.preOpenWaitlist !== null &&
              s.openWaitlist(this.preOpenWaitlist),
            this.premountSignInNodes.forEach((d, h) => {
              s.mountSignIn(h, d);
            }),
            this.premountSignUpNodes.forEach((d, h) => {
              s.mountSignUp(h, d);
            }),
            this.premountUserProfileNodes.forEach((d, h) => {
              s.mountUserProfile(h, d);
            }),
            this.premountUserButtonNodes.forEach((d, h) => {
              s.mountUserButton(h, d);
            }),
            this.premountOrganizationListNodes.forEach((d, h) => {
              s.mountOrganizationList(h, d);
            }),
            this.premountWaitlistNodes.forEach((d, h) => {
              s.mountWaitlist(h, d);
            }),
            this.premountPricingTableNodes.forEach((d, h) => {
              s.mountPricingTable(h, d);
            }),
            this.premountApiKeysNodes.forEach((d, h) => {
              s.mountApiKeys(h, d);
            }),
            this.premountOAuthConsentNodes.forEach((d, h) => {
              s.__internal_mountOAuthConsent(h, d);
            }),
            this.premountTaskChooseOrganizationNodes.forEach((d, h) => {
              s.mountTaskChooseOrganization(h, d);
            }),
            typeof this.clerkjs.status > "u" &&
              ze(this, Un).emit(Ms.Status, "ready"),
            this.emitLoaded(),
            this.clerkjs
          );
        }),
        (this.__experimental_checkout = (...s) => {
          var c;
          return (c = this.clerkjs) == null
            ? void 0
            : c.__experimental_checkout(...s);
        }),
        (this.__unstable__updateProps = async (s) => {
          const c = await Pc(this, Br, js).call(this);
          if (c && "__unstable__updateProps" in c)
            return c.__unstable__updateProps(s);
        }),
        (this.setActive = (s) =>
          this.clerkjs ? this.clerkjs.setActive(s) : Promise.reject()),
        (this.openSignIn = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openSignIn(s)
            : (this.preopenSignIn = s);
        }),
        (this.closeSignIn = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeSignIn()
            : (this.preopenSignIn = null);
        }),
        (this.__internal_openCheckout = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_openCheckout(s)
            : (this.preopenCheckout = s);
        }),
        (this.__internal_closeCheckout = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_closeCheckout()
            : (this.preopenCheckout = null);
        }),
        (this.__internal_openPlanDetails = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_openPlanDetails(s)
            : (this.preopenPlanDetails = s);
        }),
        (this.__internal_closePlanDetails = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_closePlanDetails()
            : (this.preopenPlanDetails = null);
        }),
        (this.__internal_openSubscriptionDetails = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_openSubscriptionDetails(s)
            : (this.preopenSubscriptionDetails = s ?? null);
        }),
        (this.__internal_closeSubscriptionDetails = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_closeSubscriptionDetails()
            : (this.preopenSubscriptionDetails = null);
        }),
        (this.__internal_openReverification = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_openReverification(s)
            : (this.preopenUserVerification = s);
        }),
        (this.__internal_closeReverification = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_closeReverification()
            : (this.preopenUserVerification = null);
        }),
        (this.openGoogleOneTap = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openGoogleOneTap(s)
            : (this.preopenOneTap = s);
        }),
        (this.closeGoogleOneTap = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeGoogleOneTap()
            : (this.preopenOneTap = null);
        }),
        (this.openUserProfile = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openUserProfile(s)
            : (this.preopenUserProfile = s);
        }),
        (this.closeUserProfile = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeUserProfile()
            : (this.preopenUserProfile = null);
        }),
        (this.openOrganizationProfile = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openOrganizationProfile(s)
            : (this.preopenOrganizationProfile = s);
        }),
        (this.closeOrganizationProfile = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeOrganizationProfile()
            : (this.preopenOrganizationProfile = null);
        }),
        (this.openCreateOrganization = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openCreateOrganization(s)
            : (this.preopenCreateOrganization = s);
        }),
        (this.closeCreateOrganization = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeCreateOrganization()
            : (this.preopenCreateOrganization = null);
        }),
        (this.openWaitlist = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openWaitlist(s)
            : (this.preOpenWaitlist = s);
        }),
        (this.closeWaitlist = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeWaitlist()
            : (this.preOpenWaitlist = null);
        }),
        (this.openSignUp = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.openSignUp(s)
            : (this.preopenSignUp = s);
        }),
        (this.closeSignUp = () => {
          this.clerkjs && this.loaded
            ? this.clerkjs.closeSignUp()
            : (this.preopenSignUp = null);
        }),
        (this.mountSignIn = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountSignIn(s, c)
            : this.premountSignInNodes.set(s, c);
        }),
        (this.unmountSignIn = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountSignIn(s)
            : this.premountSignInNodes.delete(s);
        }),
        (this.mountSignUp = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountSignUp(s, c)
            : this.premountSignUpNodes.set(s, c);
        }),
        (this.unmountSignUp = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountSignUp(s)
            : this.premountSignUpNodes.delete(s);
        }),
        (this.mountUserProfile = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountUserProfile(s, c)
            : this.premountUserProfileNodes.set(s, c);
        }),
        (this.unmountUserProfile = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountUserProfile(s)
            : this.premountUserProfileNodes.delete(s);
        }),
        (this.mountOrganizationProfile = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountOrganizationProfile(s, c)
            : this.premountOrganizationProfileNodes.set(s, c);
        }),
        (this.unmountOrganizationProfile = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountOrganizationProfile(s)
            : this.premountOrganizationProfileNodes.delete(s);
        }),
        (this.mountCreateOrganization = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountCreateOrganization(s, c)
            : this.premountCreateOrganizationNodes.set(s, c);
        }),
        (this.unmountCreateOrganization = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountCreateOrganization(s)
            : this.premountCreateOrganizationNodes.delete(s);
        }),
        (this.mountOrganizationSwitcher = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountOrganizationSwitcher(s, c)
            : this.premountOrganizationSwitcherNodes.set(s, c);
        }),
        (this.unmountOrganizationSwitcher = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountOrganizationSwitcher(s)
            : this.premountOrganizationSwitcherNodes.delete(s);
        }),
        (this.__experimental_prefetchOrganizationSwitcher = () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.__experimental_prefetchOrganizationSwitcher();
          };
          this.clerkjs && this.loaded
            ? s()
            : this.premountMethodCalls.set(
                "__experimental_prefetchOrganizationSwitcher",
                s,
              );
        }),
        (this.mountOrganizationList = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountOrganizationList(s, c)
            : this.premountOrganizationListNodes.set(s, c);
        }),
        (this.unmountOrganizationList = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountOrganizationList(s)
            : this.premountOrganizationListNodes.delete(s);
        }),
        (this.mountUserButton = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountUserButton(s, c)
            : this.premountUserButtonNodes.set(s, c);
        }),
        (this.unmountUserButton = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountUserButton(s)
            : this.premountUserButtonNodes.delete(s);
        }),
        (this.mountWaitlist = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountWaitlist(s, c)
            : this.premountWaitlistNodes.set(s, c);
        }),
        (this.unmountWaitlist = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountWaitlist(s)
            : this.premountWaitlistNodes.delete(s);
        }),
        (this.mountPricingTable = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountPricingTable(s, c)
            : this.premountPricingTableNodes.set(s, c);
        }),
        (this.unmountPricingTable = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountPricingTable(s)
            : this.premountPricingTableNodes.delete(s);
        }),
        (this.mountApiKeys = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountApiKeys(s, c)
            : this.premountApiKeysNodes.set(s, c);
        }),
        (this.unmountApiKeys = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountApiKeys(s)
            : this.premountApiKeysNodes.delete(s);
        }),
        (this.__internal_mountOAuthConsent = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_mountOAuthConsent(s, c)
            : this.premountOAuthConsentNodes.set(s, c);
        }),
        (this.__internal_unmountOAuthConsent = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.__internal_unmountOAuthConsent(s)
            : this.premountOAuthConsentNodes.delete(s);
        }),
        (this.mountTaskChooseOrganization = (s, c) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.mountTaskChooseOrganization(s, c)
            : this.premountTaskChooseOrganizationNodes.set(s, c);
        }),
        (this.unmountTaskChooseOrganization = (s) => {
          this.clerkjs && this.loaded
            ? this.clerkjs.unmountTaskChooseOrganization(s)
            : this.premountTaskChooseOrganizationNodes.delete(s);
        }),
        (this.addListener = (s) => {
          if (this.clerkjs) return this.clerkjs.addListener(s);
          {
            const c = () => {
              var d;
              const h = this.premountAddListenerCalls.get(s);
              h &&
                ((d = h.nativeUnsubscribe) == null || d.call(h),
                this.premountAddListenerCalls.delete(s));
            };
            return (
              this.premountAddListenerCalls.set(s, {
                unsubscribe: c,
                nativeUnsubscribe: void 0,
              }),
              c
            );
          }
        }),
        (this.navigate = (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.navigate(s);
          };
          this.clerkjs && this.loaded
            ? c()
            : this.premountMethodCalls.set("navigate", c);
        }),
        (this.redirectWithAuth = async (...s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.redirectWithAuth(...s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("redirectWithAuth", c);
        }),
        (this.redirectToSignIn = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.redirectToSignIn(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("redirectToSignIn", c);
        }),
        (this.redirectToSignUp = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.redirectToSignUp(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("redirectToSignUp", c);
        }),
        (this.redirectToUserProfile = async () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToUserProfile();
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("redirectToUserProfile", s);
        }),
        (this.redirectToAfterSignUp = () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToAfterSignUp();
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("redirectToAfterSignUp", s);
        }),
        (this.redirectToAfterSignIn = () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToAfterSignIn();
          };
          this.clerkjs && this.loaded
            ? s()
            : this.premountMethodCalls.set("redirectToAfterSignIn", s);
        }),
        (this.redirectToAfterSignOut = () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToAfterSignOut();
          };
          this.clerkjs && this.loaded
            ? s()
            : this.premountMethodCalls.set("redirectToAfterSignOut", s);
        }),
        (this.redirectToOrganizationProfile = async () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToOrganizationProfile();
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("redirectToOrganizationProfile", s);
        }),
        (this.redirectToCreateOrganization = async () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null
              ? void 0
              : c.redirectToCreateOrganization();
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("redirectToCreateOrganization", s);
        }),
        (this.redirectToWaitlist = async () => {
          const s = () => {
            var c;
            return (c = this.clerkjs) == null ? void 0 : c.redirectToWaitlist();
          };
          if (this.clerkjs && this.loaded) return s();
          this.premountMethodCalls.set("redirectToWaitlist", s);
        }),
        (this.redirectToTasks = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.redirectToTasks(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("redirectToTasks", c);
        }),
        (this.handleRedirectCallback = async (s) => {
          var c;
          const d = () => {
            var h;
            return (h = this.clerkjs) == null
              ? void 0
              : h.handleRedirectCallback(s);
          };
          this.clerkjs && this.loaded
            ? (c = d()) == null || c.catch(() => {})
            : this.premountMethodCalls.set("handleRedirectCallback", d);
        }),
        (this.handleGoogleOneTapCallback = async (s, c) => {
          var d;
          const h = () => {
            var m;
            return (m = this.clerkjs) == null
              ? void 0
              : m.handleGoogleOneTapCallback(s, c);
          };
          this.clerkjs && this.loaded
            ? (d = h()) == null || d.catch(() => {})
            : this.premountMethodCalls.set("handleGoogleOneTapCallback", h);
        }),
        (this.handleEmailLinkVerification = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.handleEmailLinkVerification(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("handleEmailLinkVerification", c);
        }),
        (this.authenticateWithMetamask = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.authenticateWithMetamask(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("authenticateWithMetamask", c);
        }),
        (this.authenticateWithCoinbaseWallet = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.authenticateWithCoinbaseWallet(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("authenticateWithCoinbaseWallet", c);
        }),
        (this.authenticateWithBase = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.authenticateWithBase(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("authenticateWithBase", c);
        }),
        (this.authenticateWithOKXWallet = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.authenticateWithOKXWallet(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("authenticateWithOKXWallet", c);
        }),
        (this.authenticateWithWeb3 = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.authenticateWithWeb3(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("authenticateWithWeb3", c);
        }),
        (this.authenticateWithGoogleOneTap = async (s) =>
          (await Pc(this, Br, js).call(this)).authenticateWithGoogleOneTap(s)),
        (this.__internal_loadStripeJs = async () =>
          (await Pc(this, Br, js).call(this)).__internal_loadStripeJs()),
        (this.createOrganization = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null
              ? void 0
              : d.createOrganization(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("createOrganization", c);
        }),
        (this.getOrganization = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.getOrganization(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("getOrganization", c);
        }),
        (this.joinWaitlist = async (s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.joinWaitlist(s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("joinWaitlist", c);
        }),
        (this.signOut = async (...s) => {
          const c = () => {
            var d;
            return (d = this.clerkjs) == null ? void 0 : d.signOut(...s);
          };
          if (this.clerkjs && this.loaded) return c();
          this.premountMethodCalls.set("signOut", c);
        }));
      const { Clerk: l = null, publishableKey: u } = a || {};
      (qi(this, fi, u),
        qi(this, xa, a == null ? void 0 : a.proxyUrl),
        qi(this, Ma, a == null ? void 0 : a.domain),
        (this.options = a),
        (this.Clerk = l),
        (this.mode = Uf() ? "browser" : "server"),
        qi(this, Us, new MC(this)),
        this.options.sdkMetadata || (this.options.sdkMetadata = xC),
        ze(this, Un).emit(Ms.Status, "loading"),
        ze(this, Un).prioritizedOn(Ms.Status, (s) => qi(this, ks, s)),
        ze(this, fi) && this.loadClerkJS());
    }
    get publishableKey() {
      return ze(this, fi);
    }
    get loaded() {
      var a;
      return ((a = this.clerkjs) == null ? void 0 : a.loaded) || !1;
    }
    get status() {
      var a;
      return this.clerkjs
        ? ((a = this.clerkjs) == null ? void 0 : a.status) ||
            (this.clerkjs.loaded ? "ready" : "loading")
        : ze(this, ks);
    }
    static getOrCreateInstance(a) {
      return (
        (!Uf() ||
          !ze(this, hi) ||
          (a.Clerk && ze(this, hi).Clerk !== a.Clerk) ||
          ze(this, hi).publishableKey !== a.publishableKey) &&
          qi(this, hi, new yy(a)),
        ze(this, hi)
      );
    }
    static clearInstance() {
      qi(this, hi, null);
    }
    get domain() {
      return typeof window < "u" && window.location
        ? Lc(ze(this, Ma), new URL(window.location.href), "")
        : typeof ze(this, Ma) == "function"
          ? an.throw(zc)
          : ze(this, Ma) || "";
    }
    get proxyUrl() {
      return typeof window < "u" && window.location
        ? Lc(ze(this, xa), new URL(window.location.href), "")
        : typeof ze(this, xa) == "function"
          ? an.throw(zc)
          : ze(this, xa) || "";
    }
    __internal_getOption(a) {
      var l, u;
      return (l = this.clerkjs) != null && l.__internal_getOption
        ? (u = this.clerkjs) == null
          ? void 0
          : u.__internal_getOption(a)
        : this.options[a];
    }
    get sdkMetadata() {
      var a;
      return (
        ((a = this.clerkjs) == null ? void 0 : a.sdkMetadata) ||
        this.options.sdkMetadata ||
        void 0
      );
    }
    get instanceType() {
      var a;
      return (a = this.clerkjs) == null ? void 0 : a.instanceType;
    }
    get frontendApi() {
      var a;
      return ((a = this.clerkjs) == null ? void 0 : a.frontendApi) || "";
    }
    get isStandardBrowser() {
      var a;
      return (
        ((a = this.clerkjs) == null ? void 0 : a.isStandardBrowser) ||
        this.options.standardBrowser ||
        !1
      );
    }
    get isSatellite() {
      return typeof window < "u" && window.location
        ? Lc(this.options.isSatellite, new URL(window.location.href), !1)
        : typeof this.options.isSatellite == "function"
          ? an.throw(zc)
          : !1;
    }
    async loadClerkJS() {
      var a;
      if (!(this.mode !== "browser" || this.loaded)) {
        typeof window < "u" &&
          ((window.__clerk_publishable_key = ze(this, fi)),
          (window.__clerk_proxy_url = this.proxyUrl),
          (window.__clerk_domain = this.domain));
        try {
          if (this.Clerk) {
            let l;
            (Gw(this.Clerk)
              ? ((l = new this.Clerk(ze(this, fi), {
                  proxyUrl: this.proxyUrl,
                  domain: this.domain,
                })),
                this.beforeLoad(l),
                await l.load(this.options))
              : ((l = this.Clerk),
                l.loaded || (this.beforeLoad(l), await l.load(this.options))),
              (global.Clerk = l));
          } else if (!__BUILD_DISABLE_RHC__) {
            if (
              (global.Clerk ||
                (await SC({
                  ...this.options,
                  publishableKey: ze(this, fi),
                  proxyUrl: this.proxyUrl,
                  domain: this.domain,
                  nonce: this.options.nonce,
                })),
              !global.Clerk)
            )
              throw new Error(
                "Failed to download latest ClerkJS. Contact support@clerk.com.",
              );
            (this.beforeLoad(global.Clerk),
              await global.Clerk.load(this.options));
          }
          return (a = global.Clerk) != null && a.loaded
            ? this.hydrateClerkJS(global.Clerk)
            : void 0;
        } catch (l) {
          const u = l;
          (ze(this, Un).emit(Ms.Status, "error"),
            console.error(u.stack || u.message || u));
          return;
        }
      }
    }
    get version() {
      var a;
      return (a = this.clerkjs) == null ? void 0 : a.version;
    }
    get client() {
      if (this.clerkjs) return this.clerkjs.client;
    }
    get session() {
      if (this.clerkjs) return this.clerkjs.session;
    }
    get user() {
      if (this.clerkjs) return this.clerkjs.user;
    }
    get organization() {
      if (this.clerkjs) return this.clerkjs.organization;
    }
    get telemetry() {
      if (this.clerkjs) return this.clerkjs.telemetry;
    }
    get __unstable__environment() {
      if (this.clerkjs) return this.clerkjs.__unstable__environment;
    }
    get isSignedIn() {
      return this.clerkjs ? this.clerkjs.isSignedIn : !1;
    }
    get billing() {
      var a;
      return (a = this.clerkjs) == null ? void 0 : a.billing;
    }
    get __internal_state() {
      return this.loaded && this.clerkjs
        ? this.clerkjs.__internal_state
        : ze(this, Us);
    }
    get apiKeys() {
      var a;
      return (a = this.clerkjs) == null ? void 0 : a.apiKeys;
    }
    __unstable__setEnvironment(...a) {
      if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs)
        this.clerkjs.__unstable__setEnvironment(a);
      else return;
    }
  };
ks = new WeakMap();
Ma = new WeakMap();
xa = new WeakMap();
fi = new WeakMap();
Un = new WeakMap();
Us = new WeakMap();
hi = new WeakMap();
Br = new WeakSet();
js = function () {
  return new Promise((i) => {
    this.addOnLoaded(() => i(this.clerkjs));
  });
};
ci(vy, hi);
var zp = vy;
function NC(i) {
  const { isomorphicClerkOptions: a, initialState: l, children: u } = i,
    { isomorphicClerk: s, clerkStatus: c } = kC(a),
    [d, h] = H.useState({
      client: s.client,
      session: s.session,
      user: s.user,
      organization: s.organization,
    });
  H.useEffect(() => s.addListener((W) => h({ ...W })), []);
  const m = _C(s.loaded, d, l),
    p = H.useMemo(() => ({ value: s }), [c]),
    y = H.useMemo(() => ({ value: d.client }), [d.client]),
    {
      sessionId: w,
      sessionStatus: C,
      sessionClaims: S,
      session: R,
      userId: x,
      user: Q,
      orgId: M,
      actor: V,
      organization: D,
      orgRole: Z,
      orgSlug: $,
      orgPermissions: G,
      factorVerificationAge: J,
    } = m,
    z = H.useMemo(
      () => ({
        value: {
          sessionId: w,
          sessionStatus: C,
          sessionClaims: S,
          userId: x,
          actor: V,
          orgId: M,
          orgRole: Z,
          orgSlug: $,
          orgPermissions: G,
          factorVerificationAge: J,
        },
      }),
      [w, C, x, V, M, Z, $, J, S == null ? void 0 : S.__raw],
    ),
    P = H.useMemo(() => ({ value: R }), [w, R]),
    K = H.useMemo(() => ({ value: Q }), [x, Q]),
    j = H.useMemo(() => ({ value: { organization: D } }), [M, D]);
  return H.createElement(
    Sw.Provider,
    { value: p },
    H.createElement(
      rw.Provider,
      { value: y },
      H.createElement(
        lw.Provider,
        { value: P },
        H.createElement(
          cw,
          { ...j.value },
          H.createElement(
            yw.Provider,
            { value: z },
            H.createElement(
              iw.Provider,
              { value: K },
              H.createElement(uw, { value: void 0 }, u),
            ),
          ),
        ),
      ),
    ),
  );
}
var kC = (i) => {
  const a = H.useRef(zp.getOrCreateInstance(i)),
    [l, u] = H.useState(a.current.status);
  return (
    H.useEffect(() => {
      a.current.__unstable__updateProps({ appearance: i.appearance });
    }, [i.appearance]),
    H.useEffect(() => {
      a.current.__unstable__updateProps({ options: i });
    }, [i.localization]),
    H.useEffect(
      () => (
        a.current.on("status", u),
        () => {
          (a.current && a.current.off("status", u), zp.clearInstance());
        }
      ),
      [],
    ),
    { isomorphicClerk: a.current, clerkStatus: l }
  );
};
function UC(i) {
  const {
      initialState: a,
      children: l,
      __internal_bypassMissingPublishableKey: u,
      ...s
    } = i,
    { publishableKey: c = "", Clerk: d } = s;
  return (
    !d &&
      !u &&
      (c
        ? c && !bf(c) && an.throwInvalidPublishableKeyError({ key: c })
        : an.throwMissingPublishableKeyError()),
    H.createElement(NC, { initialState: a, isomorphicClerkOptions: s }, l)
  );
}
var by = $w(UC, "ClerkProvider", Ew);
by.displayName = "ClerkProvider";
vw({ packageName: "@clerk/clerk-react" });
bC("@clerk/clerk-react");
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lp = "popstate";
function jC(i = {}) {
  function a(u, s) {
    let { pathname: c, search: d, hash: h } = u.location;
    return jf(
      "",
      { pathname: c, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function l(u, s) {
    return typeof s == "string" ? s : Fr(s);
  }
  return zC(a, l, null, i);
}
function He(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
function mn(i, a) {
  if (!i) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function DC() {
  return Math.random().toString(36).substring(2, 10);
}
function qp(i, a) {
  return { usr: i.state, key: i.key, idx: a };
}
function jf(i, a, l = null, u) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? Da(a) : a),
    state: l,
    key: (a && a.key) || u || DC(),
  };
}
function Fr({ pathname: i = "/", search: a = "", hash: l = "" }) {
  return (
    a && a !== "?" && (i += a.charAt(0) === "?" ? a : "?" + a),
    l && l !== "#" && (i += l.charAt(0) === "#" ? l : "#" + l),
    i
  );
}
function Da(i) {
  let a = {};
  if (i) {
    let l = i.indexOf("#");
    l >= 0 && ((a.hash = i.substring(l)), (i = i.substring(0, l)));
    let u = i.indexOf("?");
    (u >= 0 && ((a.search = i.substring(u)), (i = i.substring(0, u))),
      i && (a.pathname = i));
  }
  return a;
}
function zC(i, a, l, u = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = u,
    d = s.history,
    h = "POP",
    m = null,
    p = y();
  p == null && ((p = 0), d.replaceState({ ...d.state, idx: p }, ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function w() {
    h = "POP";
    let Q = y(),
      M = Q == null ? null : Q - p;
    ((p = Q), m && m({ action: h, location: x.location, delta: M }));
  }
  function C(Q, M) {
    h = "PUSH";
    let V = jf(x.location, Q, M);
    p = y() + 1;
    let D = qp(V, p),
      Z = x.createHref(V);
    try {
      d.pushState(D, "", Z);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      s.location.assign(Z);
    }
    c && m && m({ action: h, location: x.location, delta: 1 });
  }
  function S(Q, M) {
    h = "REPLACE";
    let V = jf(x.location, Q, M);
    p = y();
    let D = qp(V, p),
      Z = x.createHref(V);
    (d.replaceState(D, "", Z),
      c && m && m({ action: h, location: x.location, delta: 0 }));
  }
  function R(Q) {
    return LC(Q);
  }
  let x = {
    get action() {
      return h;
    },
    get location() {
      return i(s, d);
    },
    listen(Q) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Lp, w),
        (m = Q),
        () => {
          (s.removeEventListener(Lp, w), (m = null));
        }
      );
    },
    createHref(Q) {
      return a(s, Q);
    },
    createURL: R,
    encodeLocation(Q) {
      let M = R(Q);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: C,
    replace: S,
    go(Q) {
      return d.go(Q);
    },
  };
  return x;
}
function LC(i, a = !1) {
  let l = "http://localhost";
  (typeof window < "u" &&
    (l =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    He(l, "No window.location.(origin|href) available to create URL"));
  let u = typeof i == "string" ? i : Fr(i);
  return (
    (u = u.replace(/ $/, "%20")),
    !a && u.startsWith("//") && (u = l + u),
    new URL(u, l)
  );
}
function Sy(i, a, l = "/") {
  return qC(i, a, l, !1);
}
function qC(i, a, l, u) {
  let s = typeof a == "string" ? Da(a) : a,
    c = Ln(s.pathname || "/", l);
  if (c == null) return null;
  let d = Ey(i);
  BC(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let p = ZC(c);
    h = XC(d[m], p, u);
  }
  return h;
}
function Ey(i, a = [], l = [], u = "", s = !1) {
  let c = (d, h, m = s, p) => {
    let y = {
      relativePath: p === void 0 ? d.path || "" : p,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(u) && m) return;
      (He(
        y.relativePath.startsWith(u),
        `Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(u.length)));
    }
    let w = Dn([u, y.relativePath]),
      C = l.concat(y);
    (d.children &&
      d.children.length > 0 &&
      (He(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${w}".`,
      ),
      Ey(d.children, a, C, w, m)),
      !(d.path == null && !d.index) &&
        a.push({ path: w, score: IC(w, d.index), routesMeta: C }));
  };
  return (
    i.forEach((d, h) => {
      var m;
      if (d.path === "" || !((m = d.path) != null && m.includes("?"))) c(d, h);
      else for (let p of wy(d.path)) c(d, h, !0, p);
    }),
    a
  );
}
function wy(i) {
  let a = i.split("/");
  if (a.length === 0) return [];
  let [l, ...u] = a,
    s = l.endsWith("?"),
    c = l.replace(/\?$/, "");
  if (u.length === 0) return s ? [c, ""] : [c];
  let d = wy(u.join("/")),
    h = [];
  return (
    h.push(...d.map((m) => (m === "" ? c : [c, m].join("/")))),
    s && h.push(...d),
    h.map((m) => (i.startsWith("/") && m === "" ? "/" : m))
  );
}
function BC(i) {
  i.sort((a, l) =>
    a.score !== l.score
      ? l.score - a.score
      : $C(
          a.routesMeta.map((u) => u.childrenIndex),
          l.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
var HC = /^:[\w-]+$/,
  VC = 3,
  PC = 2,
  QC = 1,
  YC = 10,
  GC = -2,
  Bp = (i) => i === "*";
function IC(i, a) {
  let l = i.split("/"),
    u = l.length;
  return (
    l.some(Bp) && (u += GC),
    a && (u += PC),
    l
      .filter((s) => !Bp(s))
      .reduce((s, c) => s + (HC.test(c) ? VC : c === "" ? QC : YC), u)
  );
}
function $C(i, a) {
  return i.length === a.length && i.slice(0, -1).every((u, s) => u === a[s])
    ? i[i.length - 1] - a[a.length - 1]
    : 0;
}
function XC(i, a, l = !1) {
  let { routesMeta: u } = i,
    s = {},
    c = "/",
    d = [];
  for (let h = 0; h < u.length; ++h) {
    let m = u[h],
      p = h === u.length - 1,
      y = c === "/" ? a : a.slice(c.length) || "/",
      w = Ps(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: p },
        y,
      ),
      C = m.route;
    if (
      (!w &&
        p &&
        l &&
        !u[u.length - 1].route.index &&
        (w = Ps(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          y,
        )),
      !w)
    )
      return null;
    (Object.assign(s, w.params),
      d.push({
        params: s,
        pathname: Dn([c, w.pathname]),
        pathnameBase: e_(Dn([c, w.pathnameBase])),
        route: C,
      }),
      w.pathnameBase !== "/" && (c = Dn([c, w.pathnameBase])));
  }
  return d;
}
function Ps(i, a) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [l, u] = KC(i.path, i.caseSensitive, i.end),
    s = a.match(l);
  if (!s) return null;
  let c = s[0],
    d = c.replace(/(.)\/+$/, "$1"),
    h = s.slice(1);
  return {
    params: u.reduce((p, { paramName: y, isOptional: w }, C) => {
      if (y === "*") {
        let R = h[C] || "";
        d = c.slice(0, c.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const S = h[C];
      return (
        w && !S ? (p[y] = void 0) : (p[y] = (S || "").replace(/%2F/g, "/")),
        p
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: i,
  };
}
function KC(i, a = !1, l = !0) {
  mn(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    s =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, m) => (
            u.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    i.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (s += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (s += "\\/*$")
        : i !== "" && i !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, a ? void 0 : "i"), u]
  );
}
function ZC(i) {
  try {
    return i
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      mn(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`,
      ),
      i
    );
  }
}
function Ln(i, a) {
  if (a === "/") return i;
  if (!i.toLowerCase().startsWith(a.toLowerCase())) return null;
  let l = a.endsWith("/") ? a.length - 1 : a.length,
    u = i.charAt(l);
  return u && u !== "/" ? null : i.slice(l) || "/";
}
function FC(i, a = "/") {
  let {
    pathname: l,
    search: u = "",
    hash: s = "",
  } = typeof i == "string" ? Da(i) : i;
  return {
    pathname: l ? (l.startsWith("/") ? l : JC(l, a)) : a,
    search: t_(u),
    hash: n_(s),
  };
}
function JC(i, a) {
  let l = a.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((s) => {
      s === ".." ? l.length > 1 && l.pop() : s !== "." && l.push(s);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function Qc(i, a, l, u) {
  return `Cannot include a '${i}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function WC(i) {
  return i.filter(
    (a, l) => l === 0 || (a.route.path && a.route.path.length > 0),
  );
}
function Cy(i) {
  let a = WC(i);
  return a.map((l, u) => (u === a.length - 1 ? l.pathname : l.pathnameBase));
}
function _y(i, a, l, u = !1) {
  let s;
  typeof i == "string"
    ? (s = Da(i))
    : ((s = { ...i }),
      He(
        !s.pathname || !s.pathname.includes("?"),
        Qc("?", "pathname", "search", s),
      ),
      He(
        !s.pathname || !s.pathname.includes("#"),
        Qc("#", "pathname", "hash", s),
      ),
      He(!s.search || !s.search.includes("#"), Qc("#", "search", "hash", s)));
  let c = i === "" || s.pathname === "",
    d = c ? "/" : s.pathname,
    h;
  if (d == null) h = l;
  else {
    let w = a.length - 1;
    if (!u && d.startsWith("..")) {
      let C = d.split("/");
      for (; C[0] === ".."; ) (C.shift(), (w -= 1));
      s.pathname = C.join("/");
    }
    h = w >= 0 ? a[w] : "/";
  }
  let m = FC(s, h),
    p = d && d !== "/" && d.endsWith("/"),
    y = (c || d === ".") && l.endsWith("/");
  return (!m.pathname.endsWith("/") && (p || y) && (m.pathname += "/"), m);
}
var Dn = (i) => i.join("/").replace(/\/\/+/g, "/"),
  e_ = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  t_ = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  n_ = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function i_(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Ay = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ay);
var a_ = ["GET", ...Ay];
new Set(a_);
var za = T.createContext(null);
za.displayName = "DataRouter";
var Ws = T.createContext(null);
Ws.displayName = "DataRouterState";
T.createContext(!1);
var Ty = T.createContext({ isTransitioning: !1 });
Ty.displayName = "ViewTransition";
var r_ = T.createContext(new Map());
r_.displayName = "Fetchers";
var l_ = T.createContext(null);
l_.displayName = "Await";
var pn = T.createContext(null);
pn.displayName = "Navigation";
var nl = T.createContext(null);
nl.displayName = "Location";
var vn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
vn.displayName = "Route";
var Xf = T.createContext(null);
Xf.displayName = "RouteError";
function s_(i, { relative: a } = {}) {
  He(
    il(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: l, navigator: u } = T.useContext(pn),
    { hash: s, pathname: c, search: d } = al(i, { relative: a }),
    h = c;
  return (
    l !== "/" && (h = c === "/" ? l : Dn([l, c])),
    u.createHref({ pathname: h, search: d, hash: s })
  );
}
function il() {
  return T.useContext(nl) != null;
}
function yi() {
  return (
    He(
      il(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(nl).location
  );
}
var Ry =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oy(i) {
  T.useContext(pn).static || T.useLayoutEffect(i);
}
function u_() {
  let { isDataRoute: i } = T.useContext(vn);
  return i ? E_() : o_();
}
function o_() {
  He(
    il(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let i = T.useContext(za),
    { basename: a, navigator: l } = T.useContext(pn),
    { matches: u } = T.useContext(vn),
    { pathname: s } = yi(),
    c = JSON.stringify(Cy(u)),
    d = T.useRef(!1);
  return (
    Oy(() => {
      d.current = !0;
    }),
    T.useCallback(
      (m, p = {}) => {
        if ((mn(d.current, Ry), !d.current)) return;
        if (typeof m == "number") {
          l.go(m);
          return;
        }
        let y = _y(m, JSON.parse(c), s, p.relative === "path");
        (i == null &&
          a !== "/" &&
          (y.pathname = y.pathname === "/" ? a : Dn([a, y.pathname])),
          (p.replace ? l.replace : l.push)(y, p.state, p));
      },
      [a, l, c, s, i],
    )
  );
}
T.createContext(null);
function My() {
  let { matches: i } = T.useContext(vn),
    a = i[i.length - 1];
  return a ? a.params : {};
}
function al(i, { relative: a } = {}) {
  let { matches: l } = T.useContext(vn),
    { pathname: u } = yi(),
    s = JSON.stringify(Cy(l));
  return T.useMemo(() => _y(i, JSON.parse(s), u, a === "path"), [i, s, u, a]);
}
function c_(i, a) {
  return xy(i, a);
}
function xy(i, a, l, u, s) {
  var V;
  He(
    il(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c } = T.useContext(pn),
    { matches: d } = T.useContext(vn),
    h = d[d.length - 1],
    m = h ? h.params : {},
    p = h ? h.pathname : "/",
    y = h ? h.pathnameBase : "/",
    w = h && h.route;
  {
    let D = (w && w.path) || "";
    Ny(
      p,
      !w || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D === "/" ? "*" : `${D}/*`}">.`,
    );
  }
  let C = yi(),
    S;
  if (a) {
    let D = typeof a == "string" ? Da(a) : a;
    (He(
      y === "/" || ((V = D.pathname) == null ? void 0 : V.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`,
    ),
      (S = D));
  } else S = C;
  let R = S.pathname || "/",
    x = R;
  if (y !== "/") {
    let D = y.replace(/^\//, "").split("/");
    x = "/" + R.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let Q = Sy(i, { pathname: x });
  (mn(
    w || Q != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    mn(
      Q == null ||
        Q[Q.length - 1].route.element !== void 0 ||
        Q[Q.length - 1].route.Component !== void 0 ||
        Q[Q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let M = g_(
    Q &&
      Q.map((D) =>
        Object.assign({}, D, {
          params: Object.assign({}, m, D.params),
          pathname: Dn([
            y,
            c.encodeLocation
              ? c.encodeLocation(D.pathname).pathname
              : D.pathname,
          ]),
          pathnameBase:
            D.pathnameBase === "/"
              ? y
              : Dn([
                  y,
                  c.encodeLocation
                    ? c.encodeLocation(D.pathnameBase).pathname
                    : D.pathnameBase,
                ]),
        }),
      ),
    d,
    l,
    u,
    s,
  );
  return a && M
    ? T.createElement(
        nl.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        M,
      )
    : M;
}
function f_() {
  let i = S_(),
    a = i_(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    l = i instanceof Error ? i.stack : null,
    u = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: u },
    c = { padding: "2px 4px", backgroundColor: u },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (d = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, a),
      l ? T.createElement("pre", { style: s }, l) : null,
      d,
    )
  );
}
var d_ = T.createElement(f_, null),
  h_ = class extends T.Component {
    constructor(i) {
      (super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        }));
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, a) {
      return a.location !== i.location ||
        (a.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : a.error,
            location: a.location,
            revalidation: i.revalidation || a.revalidation,
          };
    }
    componentDidCatch(i, a) {
      this.props.unstable_onError
        ? this.props.unstable_onError(i, a)
        : console.error(
            "React Router caught the following error during render",
            i,
          );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            vn.Provider,
            { value: this.props.routeContext },
            T.createElement(Xf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function m_({ routeContext: i, match: a, children: l }) {
  let u = T.useContext(za);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = a.route.id),
    T.createElement(vn.Provider, { value: i }, l)
  );
}
function g_(i, a = [], l = null, u = null, s = null) {
  if (i == null) {
    if (!l) return null;
    if (l.errors) i = l.matches;
    else if (a.length === 0 && !l.initialized && l.matches.length > 0)
      i = l.matches;
    else return null;
  }
  let c = i,
    d = l == null ? void 0 : l.errors;
  if (d != null) {
    let p = c.findIndex(
      (y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0,
    );
    (He(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, p + 1))));
  }
  let h = !1,
    m = -1;
  if (l)
    for (let p = 0; p < c.length; p++) {
      let y = c[p];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = p),
        y.route.id)
      ) {
        let { loaderData: w, errors: C } = l,
          S =
            y.route.loader &&
            !w.hasOwnProperty(y.route.id) &&
            (!C || C[y.route.id] === void 0);
        if (y.route.lazy || S) {
          ((h = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  return c.reduceRight((p, y, w) => {
    let C,
      S = !1,
      R = null,
      x = null;
    l &&
      ((C = d && y.route.id ? d[y.route.id] : void 0),
      (R = y.route.errorElement || d_),
      h &&
        (m < 0 && w === 0
          ? (Ny(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (S = !0),
            (x = null))
          : m === w &&
            ((S = !0), (x = y.route.hydrateFallbackElement || null))));
    let Q = a.concat(c.slice(0, w + 1)),
      M = () => {
        let V;
        return (
          C
            ? (V = R)
            : S
              ? (V = x)
              : y.route.Component
                ? (V = T.createElement(y.route.Component, null))
                : y.route.element
                  ? (V = y.route.element)
                  : (V = p),
          T.createElement(m_, {
            match: y,
            routeContext: { outlet: p, matches: Q, isDataRoute: l != null },
            children: V,
          })
        );
      };
    return l && (y.route.ErrorBoundary || y.route.errorElement || w === 0)
      ? T.createElement(h_, {
          location: l.location,
          revalidation: l.revalidation,
          component: R,
          error: C,
          children: M(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          unstable_onError: u,
        })
      : M();
  }, null);
}
function Kf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function p_(i) {
  let a = T.useContext(za);
  return (He(a, Kf(i)), a);
}
function v_(i) {
  let a = T.useContext(Ws);
  return (He(a, Kf(i)), a);
}
function y_(i) {
  let a = T.useContext(vn);
  return (He(a, Kf(i)), a);
}
function Zf(i) {
  let a = y_(i),
    l = a.matches[a.matches.length - 1];
  return (
    He(
      l.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function b_() {
  return Zf("useRouteId");
}
function S_() {
  var u;
  let i = T.useContext(Xf),
    a = v_("useRouteError"),
    l = Zf("useRouteError");
  return i !== void 0 ? i : (u = a.errors) == null ? void 0 : u[l];
}
function E_() {
  let { router: i } = p_("useNavigate"),
    a = Zf("useNavigate"),
    l = T.useRef(!1);
  return (
    Oy(() => {
      l.current = !0;
    }),
    T.useCallback(
      async (s, c = {}) => {
        (mn(l.current, Ry),
          l.current &&
            (typeof s == "number"
              ? i.navigate(s)
              : await i.navigate(s, { fromRouteId: a, ...c })));
      },
      [i, a],
    )
  );
}
var Hp = {};
function Ny(i, a, l) {
  !a && !Hp[i] && ((Hp[i] = !0), mn(!1, l));
}
T.memo(w_);
function w_({ routes: i, future: a, state: l, unstable_onError: u }) {
  return xy(i, void 0, l, u, a);
}
function Hr(i) {
  He(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function C_({
  basename: i = "/",
  children: a = null,
  location: l,
  navigationType: u = "POP",
  navigator: s,
  static: c = !1,
}) {
  He(
    !il(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = i.replace(/^\/*/, "/"),
    h = T.useMemo(
      () => ({ basename: d, navigator: s, static: c, future: {} }),
      [d, s, c],
    );
  typeof l == "string" && (l = Da(l));
  let {
      pathname: m = "/",
      search: p = "",
      hash: y = "",
      state: w = null,
      key: C = "default",
    } = l,
    S = T.useMemo(() => {
      let R = Ln(m, d);
      return R == null
        ? null
        : {
            location: { pathname: R, search: p, hash: y, state: w, key: C },
            navigationType: u,
          };
    }, [d, m, p, y, w, C, u]);
  return (
    mn(
      S != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    S == null
      ? null
      : T.createElement(
          pn.Provider,
          { value: h },
          T.createElement(nl.Provider, { children: a, value: S }),
        )
  );
}
function __({ children: i, location: a }) {
  return c_(Df(i), a);
}
function Df(i, a = []) {
  let l = [];
  return (
    T.Children.forEach(i, (u, s) => {
      if (!T.isValidElement(u)) return;
      let c = [...a, s];
      if (u.type === T.Fragment) {
        l.push.apply(l, Df(u.props.children, c));
        return;
      }
      (He(
        u.type === Hr,
        `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        He(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: u.props.id || c.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      (u.props.children && (d.children = Df(u.props.children, c)), l.push(d));
    }),
    l
  );
}
var Ds = "get",
  zs = "application/x-www-form-urlencoded";
function eu(i) {
  return i != null && typeof i.tagName == "string";
}
function A_(i) {
  return eu(i) && i.tagName.toLowerCase() === "button";
}
function T_(i) {
  return eu(i) && i.tagName.toLowerCase() === "form";
}
function R_(i) {
  return eu(i) && i.tagName.toLowerCase() === "input";
}
function O_(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function M_(i, a) {
  return i.button === 0 && (!a || a === "_self") && !O_(i);
}
var xs = null;
function x_() {
  if (xs === null)
    try {
      (new FormData(document.createElement("form"), 0), (xs = !1));
    } catch {
      xs = !0;
    }
  return xs;
}
var N_ = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Yc(i) {
  return i != null && !N_.has(i)
    ? (mn(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zs}"`,
      ),
      null)
    : i;
}
function k_(i, a) {
  let l, u, s, c, d;
  if (T_(i)) {
    let h = i.getAttribute("action");
    ((u = h ? Ln(h, a) : null),
      (l = i.getAttribute("method") || Ds),
      (s = Yc(i.getAttribute("enctype")) || zs),
      (c = new FormData(i)));
  } else if (A_(i) || (R_(i) && (i.type === "submit" || i.type === "image"))) {
    let h = i.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = i.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((u = m ? Ln(m, a) : null),
      (l = i.getAttribute("formmethod") || h.getAttribute("method") || Ds),
      (s =
        Yc(i.getAttribute("formenctype")) ||
        Yc(h.getAttribute("enctype")) ||
        zs),
      (c = new FormData(h, i)),
      !x_())
    ) {
      let { name: p, type: y, value: w } = i;
      if (y === "image") {
        let C = p ? `${p}.` : "";
        (c.append(`${C}x`, "0"), c.append(`${C}y`, "0"));
      } else p && c.append(p, w);
    }
  } else {
    if (eu(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((l = Ds), (u = null), (s = zs), (d = i));
  }
  return (
    c && s === "text/plain" && ((d = c), (c = void 0)),
    { action: u, method: l.toLowerCase(), encType: s, formData: c, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ff(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
function U_(i, a, l) {
  let u =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : i;
  return (
    u.pathname === "/"
      ? (u.pathname = `_root.${l}`)
      : a && Ln(u.pathname, a) === "/"
        ? (u.pathname = `${a.replace(/\/$/, "")}/_root.${l}`)
        : (u.pathname = `${u.pathname.replace(/\/$/, "")}.${l}`),
    u
  );
}
async function j_(i, a) {
  if (i.id in a) return a[i.id];
  try {
    let l = await import(i.module);
    return ((a[i.id] = l), l);
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function D_(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === "preload" &&
        typeof i.imageSrcSet == "string" &&
        typeof i.imageSizes == "string"
      : typeof i.rel == "string" && typeof i.href == "string";
}
async function z_(i, a, l) {
  let u = await Promise.all(
    i.map(async (s) => {
      let c = a.routes[s.route.id];
      if (c) {
        let d = await j_(c, l);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return H_(
    u
      .flat(1)
      .filter(D_)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function Vp(i, a, l, u, s, c) {
  let d = (m, p) => (l[p] ? m.route.id !== l[p].route.id : !0),
    h = (m, p) => {
      var y;
      return (
        l[p].pathname !== m.pathname ||
        (((y = l[p].route.path) == null ? void 0 : y.endsWith("*")) &&
          l[p].params["*"] !== m.params["*"])
      );
    };
  return c === "assets"
    ? a.filter((m, p) => d(m, p) || h(m, p))
    : c === "data"
      ? a.filter((m, p) => {
          var w;
          let y = u.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (d(m, p) || h(m, p)) return !0;
          if (m.route.shouldRevalidate) {
            let C = m.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((w = l[0]) == null ? void 0 : w.params) || {},
              nextUrl: new URL(i, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof C == "boolean") return C;
          }
          return !0;
        })
      : [];
}
function L_(i, a, { includeHydrateFallback: l } = {}) {
  return q_(
    i
      .map((u) => {
        let s = a.routes[u.route.id];
        if (!s) return [];
        let c = [s.module];
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          l &&
            s.hydrateFallbackModule &&
            (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        );
      })
      .flat(1),
  );
}
function q_(i) {
  return [...new Set(i)];
}
function B_(i) {
  let a = {},
    l = Object.keys(i).sort();
  for (let u of l) a[u] = i[u];
  return a;
}
function H_(i, a) {
  let l = new Set();
  return (
    new Set(a),
    i.reduce((u, s) => {
      let c = JSON.stringify(B_(s));
      return (l.has(c) || (l.add(c), u.push({ key: c, link: s })), u);
    }, [])
  );
}
function ky() {
  let i = T.useContext(za);
  return (
    Ff(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    i
  );
}
function V_() {
  let i = T.useContext(Ws);
  return (
    Ff(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    i
  );
}
var Jf = T.createContext(void 0);
Jf.displayName = "FrameworkContext";
function Uy() {
  let i = T.useContext(Jf);
  return (
    Ff(i, "You must render this element inside a <HydratedRouter> element"),
    i
  );
}
function P_(i, a) {
  let l = T.useContext(Jf),
    [u, s] = T.useState(!1),
    [c, d] = T.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: p,
      onMouseLeave: y,
      onTouchStart: w,
    } = a,
    C = T.useRef(null);
  (T.useEffect(() => {
    if ((i === "render" && d(!0), i === "viewport")) {
      let x = (M) => {
          M.forEach((V) => {
            d(V.isIntersecting);
          });
        },
        Q = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        C.current && Q.observe(C.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [i]),
    T.useEffect(() => {
      if (u) {
        let x = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [u]));
  let S = () => {
      s(!0);
    },
    R = () => {
      (s(!1), d(!1));
    };
  return l
    ? i !== "intent"
      ? [c, C, {}]
      : [
          c,
          C,
          {
            onFocus: zr(h, S),
            onBlur: zr(m, R),
            onMouseEnter: zr(p, S),
            onMouseLeave: zr(y, R),
            onTouchStart: zr(w, S),
          },
        ]
    : [!1, C, {}];
}
function zr(i, a) {
  return (l) => {
    (i && i(l), l.defaultPrevented || a(l));
  };
}
function Q_({ page: i, ...a }) {
  let { router: l } = ky(),
    u = T.useMemo(() => Sy(l.routes, i, l.basename), [l.routes, i, l.basename]);
  return u ? T.createElement(G_, { page: i, matches: u, ...a }) : null;
}
function Y_(i) {
  let { manifest: a, routeModules: l } = Uy(),
    [u, s] = T.useState([]);
  return (
    T.useEffect(() => {
      let c = !1;
      return (
        z_(i, a, l).then((d) => {
          c || s(d);
        }),
        () => {
          c = !0;
        }
      );
    }, [i, a, l]),
    u
  );
}
function G_({ page: i, matches: a, ...l }) {
  let u = yi(),
    { manifest: s, routeModules: c } = Uy(),
    { basename: d } = ky(),
    { loaderData: h, matches: m } = V_(),
    p = T.useMemo(() => Vp(i, a, m, s, u, "data"), [i, a, m, s, u]),
    y = T.useMemo(() => Vp(i, a, m, s, u, "assets"), [i, a, m, s, u]),
    w = T.useMemo(() => {
      if (i === u.pathname + u.search + u.hash) return [];
      let R = new Set(),
        x = !1;
      if (
        (a.forEach((M) => {
          var D;
          let V = s.routes[M.route.id];
          !V ||
            !V.hasLoader ||
            ((!p.some((Z) => Z.route.id === M.route.id) &&
              M.route.id in h &&
              (D = c[M.route.id]) != null &&
              D.shouldRevalidate) ||
            V.hasClientLoader
              ? (x = !0)
              : R.add(M.route.id));
        }),
        R.size === 0)
      )
        return [];
      let Q = U_(i, d, "data");
      return (
        x &&
          R.size > 0 &&
          Q.searchParams.set(
            "_routes",
            a
              .filter((M) => R.has(M.route.id))
              .map((M) => M.route.id)
              .join(","),
          ),
        [Q.pathname + Q.search]
      );
    }, [d, h, u, s, p, a, i, c]),
    C = T.useMemo(() => L_(y, s), [y, s]),
    S = Y_(y);
  return T.createElement(
    T.Fragment,
    null,
    w.map((R) =>
      T.createElement("link", {
        key: R,
        rel: "prefetch",
        as: "fetch",
        href: R,
        ...l,
      }),
    ),
    C.map((R) =>
      T.createElement("link", { key: R, rel: "modulepreload", href: R, ...l }),
    ),
    S.map(({ key: R, link: x }) =>
      T.createElement("link", { key: R, nonce: l.nonce, ...x }),
    ),
  );
}
function I_(...i) {
  return (a) => {
    i.forEach((l) => {
      typeof l == "function" ? l(a) : l != null && (l.current = a);
    });
  };
}
var jy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  jy && (window.__reactRouterVersion = "7.8.2");
} catch {}
function $_({ basename: i, children: a, window: l }) {
  let u = T.useRef();
  u.current == null && (u.current = jC({ window: l, v5Compat: !0 }));
  let s = u.current,
    [c, d] = T.useState({ action: s.action, location: s.location }),
    h = T.useCallback(
      (m) => {
        T.startTransition(() => d(m));
      },
      [d],
    );
  return (
    T.useLayoutEffect(() => s.listen(h), [s, h]),
    T.createElement(C_, {
      basename: i,
      children: a,
      location: c.location,
      navigationType: c.action,
      navigator: s,
    })
  );
}
var Dy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vi = T.forwardRef(function (
    {
      onClick: a,
      discover: l = "render",
      prefetch: u = "none",
      relative: s,
      reloadDocument: c,
      replace: d,
      state: h,
      target: m,
      to: p,
      preventScrollReset: y,
      viewTransition: w,
      ...C
    },
    S,
  ) {
    let { basename: R } = T.useContext(pn),
      x = typeof p == "string" && Dy.test(p),
      Q,
      M = !1;
    if (typeof p == "string" && x && ((Q = p), jy))
      try {
        let P = new URL(window.location.href),
          K = p.startsWith("//") ? new URL(P.protocol + p) : new URL(p),
          j = Ln(K.pathname, R);
        K.origin === P.origin && j != null
          ? (p = j + K.search + K.hash)
          : (M = !0);
      } catch {
        mn(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let V = s_(p, { relative: s }),
      [D, Z, $] = P_(u, C),
      G = F_(p, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: y,
        relative: s,
        viewTransition: w,
      });
    function J(P) {
      (a && a(P), P.defaultPrevented || G(P));
    }
    let z = T.createElement("a", {
      ...C,
      ...$,
      href: Q || V,
      onClick: M || c ? a : J,
      ref: I_(S, Z),
      target: m,
      "data-discover": !x && l === "render" ? "true" : void 0,
    });
    return D && !x
      ? T.createElement(T.Fragment, null, z, T.createElement(Q_, { page: V }))
      : z;
  });
vi.displayName = "Link";
var X_ = T.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: l = !1,
    className: u = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: h,
    children: m,
    ...p
  },
  y,
) {
  let w = al(d, { relative: p.relative }),
    C = yi(),
    S = T.useContext(Ws),
    { navigator: R, basename: x } = T.useContext(pn),
    Q = S != null && nA(w) && h === !0,
    M = R.encodeLocation ? R.encodeLocation(w).pathname : w.pathname,
    V = C.pathname,
    D =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  (l ||
    ((V = V.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (M = M.toLowerCase())),
    D && x && (D = Ln(D, x) || D));
  const Z = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
  let $ = V === M || (!s && V.startsWith(M) && V.charAt(Z) === "/"),
    G =
      D != null &&
      (D === M || (!s && D.startsWith(M) && D.charAt(M.length) === "/")),
    J = { isActive: $, isPending: G, isTransitioning: Q },
    z = $ ? a : void 0,
    P;
  typeof u == "function"
    ? (P = u(J))
    : (P = [
        u,
        $ ? "active" : null,
        G ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let K = typeof c == "function" ? c(J) : c;
  return T.createElement(
    vi,
    {
      ...p,
      "aria-current": z,
      className: P,
      ref: y,
      style: K,
      to: d,
      viewTransition: h,
    },
    typeof m == "function" ? m(J) : m,
  );
});
X_.displayName = "NavLink";
var K_ = T.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: a,
      navigate: l,
      reloadDocument: u,
      replace: s,
      state: c,
      method: d = Ds,
      action: h,
      onSubmit: m,
      relative: p,
      preventScrollReset: y,
      viewTransition: w,
      ...C
    },
    S,
  ) => {
    let R = eA(),
      x = tA(h, { relative: p }),
      Q = d.toLowerCase() === "get" ? "get" : "post",
      M = typeof h == "string" && Dy.test(h),
      V = (D) => {
        if ((m && m(D), D.defaultPrevented)) return;
        D.preventDefault();
        let Z = D.nativeEvent.submitter,
          $ = (Z == null ? void 0 : Z.getAttribute("formmethod")) || d;
        R(Z || D.currentTarget, {
          fetcherKey: a,
          method: $,
          navigate: l,
          replace: s,
          state: c,
          relative: p,
          preventScrollReset: y,
          viewTransition: w,
        });
      };
    return T.createElement("form", {
      ref: S,
      method: Q,
      action: x,
      onSubmit: u ? m : V,
      ...C,
      "data-discover": !M && i === "render" ? "true" : void 0,
    });
  },
);
K_.displayName = "Form";
function Z_(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zy(i) {
  let a = T.useContext(za);
  return (He(a, Z_(i)), a);
}
function F_(
  i,
  {
    target: a,
    replace: l,
    state: u,
    preventScrollReset: s,
    relative: c,
    viewTransition: d,
  } = {},
) {
  let h = u_(),
    m = yi(),
    p = al(i, { relative: c });
  return T.useCallback(
    (y) => {
      if (M_(y, a)) {
        y.preventDefault();
        let w = l !== void 0 ? l : Fr(m) === Fr(p);
        h(i, {
          replace: w,
          state: u,
          preventScrollReset: s,
          relative: c,
          viewTransition: d,
        });
      }
    },
    [m, h, p, l, u, a, i, s, c, d],
  );
}
var J_ = 0,
  W_ = () => `__${String(++J_)}__`;
function eA() {
  let { router: i } = zy("useSubmit"),
    { basename: a } = T.useContext(pn),
    l = b_();
  return T.useCallback(
    async (u, s = {}) => {
      let { action: c, method: d, encType: h, formData: m, body: p } = k_(u, a);
      if (s.navigate === !1) {
        let y = s.fetcherKey || W_();
        await i.fetch(y, l, s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: p,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          flushSync: s.flushSync,
        });
      } else
        await i.navigate(s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: p,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          replace: s.replace,
          state: s.state,
          fromRouteId: l,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [i, a, l],
  );
}
function tA(i, { relative: a } = {}) {
  let { basename: l } = T.useContext(pn),
    u = T.useContext(vn);
  He(u, "useFormAction must be used inside a RouteContext");
  let [s] = u.matches.slice(-1),
    c = { ...al(i || ".", { relative: a }) },
    d = yi();
  if (i == null) {
    c.search = d.search;
    let h = new URLSearchParams(c.search),
      m = h.getAll("index");
    if (m.some((y) => y === "")) {
      (h.delete("index"),
        m.filter((w) => w).forEach((w) => h.append("index", w)));
      let y = h.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (c.pathname = c.pathname === "/" ? l : Dn([l, c.pathname])),
    Fr(c)
  );
}
function nA(i, { relative: a } = {}) {
  let l = T.useContext(Ty);
  He(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = zy("useViewTransitionState"),
    s = al(i, { relative: a });
  if (!l.isTransitioning) return !1;
  let c = Ln(l.currentLocation.pathname, u) || l.currentLocation.pathname,
    d = Ln(l.nextLocation.pathname, u) || l.nextLocation.pathname;
  return Ps(s.pathname, d) != null || Ps(s.pathname, c) != null;
}
const Je = GS,
  iA = () => {
    const i = mi(Je.functions.listActiveEvents);
    return i === void 0
      ? b.jsx("div", {
          className: "page-container",
          children: b.jsx("div", {
            className: "loading",
            children: "Loading events...",
          }),
        })
      : b.jsxs("div", {
          className: "page-container",
          children: [
            b.jsxs("div", {
              className: "page-header",
              children: [
                b.jsx("h1", { children: "Convex AMA Questions" }),
                b.jsx("p", {
                  children:
                    "Submit your questions for upcoming founder AMA live streams.",
                }),
              ],
            }),
            i.length === 0
              ? b.jsxs("div", {
                  className: "empty-state",
                  children: [
                    b.jsx("h3", { children: "No events scheduled" }),
                    b.jsx("p", {
                      children: "Check back later for upcoming AMA sessions",
                    }),
                  ],
                })
              : b.jsx("div", {
                  className: `events-grid ${i.length === 1 ? "single-event" : ""}`,
                  children: i.map((a) =>
                    b.jsxs(
                      "div",
                      {
                        className: "event-card",
                        children: [
                          b.jsx("h3", { children: a.title }),
                          b.jsx("p", { children: a.description }),
                          a.date &&
                            b.jsx("div", {
                              className: "event-date",
                              children: new Date(a.date).toLocaleDateString(),
                            }),
                          b.jsx(Yf, {
                            children: b.jsx(vi, {
                              to: `/event/${a.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^a-z0-9-]/g, "")}`,
                              className: "btn btn-primary",
                              children: "Submit Your Questions",
                            }),
                          }),
                          b.jsx(Gf, {
                            children: b.jsx($f, {
                              mode: "modal",
                              children: b.jsx("button", {
                                className: "btn btn-primary",
                                children: "Sign In to Submit Questions",
                              }),
                            }),
                          }),
                        ],
                      },
                      a._id,
                    ),
                  ),
                }),
            b.jsx("footer", {
              className: "footer footer-home",
              children: b.jsx("a", {
                href: "https://convex.dev/?utm_source=convexamasite",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Powered by Convex",
              }),
            }),
          ],
        });
  };
function aA(i, a) {
  if (i == null) return {};
  var l = {},
    u = Object.keys(i),
    s,
    c;
  for (c = 0; c < u.length; c++)
    ((s = u[c]), !(a.indexOf(s) >= 0) && (l[s] = i[s]));
  return l;
}
var rA = ["color"],
  lA = T.forwardRef(function (i, a) {
    var l = i.color,
      u = l === void 0 ? "currentColor" : l,
      s = aA(i, rA);
    return T.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        { ref: a },
      ),
      T.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: u,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  Oa = {},
  Gc,
  Pp;
function sA() {
  return (
    Pp ||
      ((Pp = 1),
      (Gc = function () {
        return (
          typeof Promise == "function" &&
          Promise.prototype &&
          Promise.prototype.then
        );
      })),
    Gc
  );
}
var Ic = {},
  oi = {},
  Qp;
function Hi() {
  if (Qp) return oi;
  Qp = 1;
  let i;
  const a = [
    0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
    733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
    2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
  ];
  return (
    (oi.getSymbolSize = function (u) {
      if (!u) throw new Error('"version" cannot be null or undefined');
      if (u < 1 || u > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return u * 4 + 17;
    }),
    (oi.getSymbolTotalCodewords = function (u) {
      return a[u];
    }),
    (oi.getBCHDigit = function (l) {
      let u = 0;
      for (; l !== 0; ) (u++, (l >>>= 1));
      return u;
    }),
    (oi.setToSJISFunction = function (u) {
      if (typeof u != "function")
        throw new Error('"toSJISFunc" is not a valid function.');
      i = u;
    }),
    (oi.isKanjiModeEnabled = function () {
      return typeof i < "u";
    }),
    (oi.toSJIS = function (u) {
      return i(u);
    }),
    oi
  );
}
var $c = {},
  Yp;
function Wf() {
  return (
    Yp ||
      ((Yp = 1),
      (function (i) {
        ((i.L = { bit: 1 }),
          (i.M = { bit: 0 }),
          (i.Q = { bit: 3 }),
          (i.H = { bit: 2 }));
        function a(l) {
          if (typeof l != "string") throw new Error("Param is not a string");
          switch (l.toLowerCase()) {
            case "l":
            case "low":
              return i.L;
            case "m":
            case "medium":
              return i.M;
            case "q":
            case "quartile":
              return i.Q;
            case "h":
            case "high":
              return i.H;
            default:
              throw new Error("Unknown EC Level: " + l);
          }
        }
        ((i.isValid = function (u) {
          return u && typeof u.bit < "u" && u.bit >= 0 && u.bit < 4;
        }),
          (i.from = function (u, s) {
            if (i.isValid(u)) return u;
            try {
              return a(u);
            } catch {
              return s;
            }
          }));
      })($c)),
    $c
  );
}
var Xc, Gp;
function uA() {
  if (Gp) return Xc;
  Gp = 1;
  function i() {
    ((this.buffer = []), (this.length = 0));
  }
  return (
    (i.prototype = {
      get: function (a) {
        const l = Math.floor(a / 8);
        return ((this.buffer[l] >>> (7 - (a % 8))) & 1) === 1;
      },
      put: function (a, l) {
        for (let u = 0; u < l; u++)
          this.putBit(((a >>> (l - u - 1)) & 1) === 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (a) {
        const l = Math.floor(this.length / 8);
        (this.buffer.length <= l && this.buffer.push(0),
          a && (this.buffer[l] |= 128 >>> this.length % 8),
          this.length++);
      },
    }),
    (Xc = i),
    Xc
  );
}
var Kc, Ip;
function oA() {
  if (Ip) return Kc;
  Ip = 1;
  function i(a) {
    if (!a || a < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    ((this.size = a),
      (this.data = new Uint8Array(a * a)),
      (this.reservedBit = new Uint8Array(a * a)));
  }
  return (
    (i.prototype.set = function (a, l, u, s) {
      const c = a * this.size + l;
      ((this.data[c] = u), s && (this.reservedBit[c] = !0));
    }),
    (i.prototype.get = function (a, l) {
      return this.data[a * this.size + l];
    }),
    (i.prototype.xor = function (a, l, u) {
      this.data[a * this.size + l] ^= u;
    }),
    (i.prototype.isReserved = function (a, l) {
      return this.reservedBit[a * this.size + l];
    }),
    (Kc = i),
    Kc
  );
}
var Zc = {},
  $p;
function cA() {
  return (
    $p ||
      (($p = 1),
      (function (i) {
        const a = Hi().getSymbolSize;
        ((i.getRowColCoords = function (u) {
          if (u === 1) return [];
          const s = Math.floor(u / 7) + 2,
            c = a(u),
            d = c === 145 ? 26 : Math.ceil((c - 13) / (2 * s - 2)) * 2,
            h = [c - 7];
          for (let m = 1; m < s - 1; m++) h[m] = h[m - 1] - d;
          return (h.push(6), h.reverse());
        }),
          (i.getPositions = function (u) {
            const s = [],
              c = i.getRowColCoords(u),
              d = c.length;
            for (let h = 0; h < d; h++)
              for (let m = 0; m < d; m++)
                (h === 0 && m === 0) ||
                  (h === 0 && m === d - 1) ||
                  (h === d - 1 && m === 0) ||
                  s.push([c[h], c[m]]);
            return s;
          }));
      })(Zc)),
    Zc
  );
}
var Fc = {},
  Xp;
function fA() {
  if (Xp) return Fc;
  Xp = 1;
  const i = Hi().getSymbolSize,
    a = 7;
  return (
    (Fc.getPositions = function (u) {
      const s = i(u);
      return [
        [0, 0],
        [s - a, 0],
        [0, s - a],
      ];
    }),
    Fc
  );
}
var Jc = {},
  Kp;
function dA() {
  return (
    Kp ||
      ((Kp = 1),
      (function (i) {
        i.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        const a = { N1: 3, N2: 3, N3: 40, N4: 10 };
        ((i.isValid = function (s) {
          return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
        }),
          (i.from = function (s) {
            return i.isValid(s) ? parseInt(s, 10) : void 0;
          }),
          (i.getPenaltyN1 = function (s) {
            const c = s.size;
            let d = 0,
              h = 0,
              m = 0,
              p = null,
              y = null;
            for (let w = 0; w < c; w++) {
              ((h = m = 0), (p = y = null));
              for (let C = 0; C < c; C++) {
                let S = s.get(w, C);
                (S === p
                  ? h++
                  : (h >= 5 && (d += a.N1 + (h - 5)), (p = S), (h = 1)),
                  (S = s.get(C, w)),
                  S === y
                    ? m++
                    : (m >= 5 && (d += a.N1 + (m - 5)), (y = S), (m = 1)));
              }
              (h >= 5 && (d += a.N1 + (h - 5)),
                m >= 5 && (d += a.N1 + (m - 5)));
            }
            return d;
          }),
          (i.getPenaltyN2 = function (s) {
            const c = s.size;
            let d = 0;
            for (let h = 0; h < c - 1; h++)
              for (let m = 0; m < c - 1; m++) {
                const p =
                  s.get(h, m) +
                  s.get(h, m + 1) +
                  s.get(h + 1, m) +
                  s.get(h + 1, m + 1);
                (p === 4 || p === 0) && d++;
              }
            return d * a.N2;
          }),
          (i.getPenaltyN3 = function (s) {
            const c = s.size;
            let d = 0,
              h = 0,
              m = 0;
            for (let p = 0; p < c; p++) {
              h = m = 0;
              for (let y = 0; y < c; y++)
                ((h = ((h << 1) & 2047) | s.get(p, y)),
                  y >= 10 && (h === 1488 || h === 93) && d++,
                  (m = ((m << 1) & 2047) | s.get(y, p)),
                  y >= 10 && (m === 1488 || m === 93) && d++);
            }
            return d * a.N3;
          }),
          (i.getPenaltyN4 = function (s) {
            let c = 0;
            const d = s.data.length;
            for (let m = 0; m < d; m++) c += s.data[m];
            return Math.abs(Math.ceil((c * 100) / d / 5) - 10) * a.N4;
          }));
        function l(u, s, c) {
          switch (u) {
            case i.Patterns.PATTERN000:
              return (s + c) % 2 === 0;
            case i.Patterns.PATTERN001:
              return s % 2 === 0;
            case i.Patterns.PATTERN010:
              return c % 3 === 0;
            case i.Patterns.PATTERN011:
              return (s + c) % 3 === 0;
            case i.Patterns.PATTERN100:
              return (Math.floor(s / 2) + Math.floor(c / 3)) % 2 === 0;
            case i.Patterns.PATTERN101:
              return ((s * c) % 2) + ((s * c) % 3) === 0;
            case i.Patterns.PATTERN110:
              return (((s * c) % 2) + ((s * c) % 3)) % 2 === 0;
            case i.Patterns.PATTERN111:
              return (((s * c) % 3) + ((s + c) % 2)) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + u);
          }
        }
        ((i.applyMask = function (s, c) {
          const d = c.size;
          for (let h = 0; h < d; h++)
            for (let m = 0; m < d; m++)
              c.isReserved(m, h) || c.xor(m, h, l(s, m, h));
        }),
          (i.getBestMask = function (s, c) {
            const d = Object.keys(i.Patterns).length;
            let h = 0,
              m = 1 / 0;
            for (let p = 0; p < d; p++) {
              (c(p), i.applyMask(p, s));
              const y =
                i.getPenaltyN1(s) +
                i.getPenaltyN2(s) +
                i.getPenaltyN3(s) +
                i.getPenaltyN4(s);
              (i.applyMask(p, s), y < m && ((m = y), (h = p)));
            }
            return h;
          }));
      })(Jc)),
    Jc
  );
}
var Ns = {},
  Zp;
function Ly() {
  if (Zp) return Ns;
  Zp = 1;
  const i = Wf(),
    a = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
      4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
      9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
      13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
      18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34,
      40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17,
      33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56,
      66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
    ],
    l = [
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
      88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
      192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
      288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168,
      308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700,
      224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810,
      960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390,
      728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868,
      1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
      1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100,
      660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
    ];
  return (
    (Ns.getBlocksCount = function (s, c) {
      switch (c) {
        case i.L:
          return a[(s - 1) * 4 + 0];
        case i.M:
          return a[(s - 1) * 4 + 1];
        case i.Q:
          return a[(s - 1) * 4 + 2];
        case i.H:
          return a[(s - 1) * 4 + 3];
        default:
          return;
      }
    }),
    (Ns.getTotalCodewordsCount = function (s, c) {
      switch (c) {
        case i.L:
          return l[(s - 1) * 4 + 0];
        case i.M:
          return l[(s - 1) * 4 + 1];
        case i.Q:
          return l[(s - 1) * 4 + 2];
        case i.H:
          return l[(s - 1) * 4 + 3];
        default:
          return;
      }
    }),
    Ns
  );
}
var Wc = {},
  Lr = {},
  Fp;
function hA() {
  if (Fp) return Lr;
  Fp = 1;
  const i = new Uint8Array(512),
    a = new Uint8Array(256);
  return (
    (function () {
      let u = 1;
      for (let s = 0; s < 255; s++)
        ((i[s] = u), (a[u] = s), (u <<= 1), u & 256 && (u ^= 285));
      for (let s = 255; s < 512; s++) i[s] = i[s - 255];
    })(),
    (Lr.log = function (u) {
      if (u < 1) throw new Error("log(" + u + ")");
      return a[u];
    }),
    (Lr.exp = function (u) {
      return i[u];
    }),
    (Lr.mul = function (u, s) {
      return u === 0 || s === 0 ? 0 : i[a[u] + a[s]];
    }),
    Lr
  );
}
var Jp;
function mA() {
  return (
    Jp ||
      ((Jp = 1),
      (function (i) {
        const a = hA();
        ((i.mul = function (u, s) {
          const c = new Uint8Array(u.length + s.length - 1);
          for (let d = 0; d < u.length; d++)
            for (let h = 0; h < s.length; h++) c[d + h] ^= a.mul(u[d], s[h]);
          return c;
        }),
          (i.mod = function (u, s) {
            let c = new Uint8Array(u);
            for (; c.length - s.length >= 0; ) {
              const d = c[0];
              for (let m = 0; m < s.length; m++) c[m] ^= a.mul(s[m], d);
              let h = 0;
              for (; h < c.length && c[h] === 0; ) h++;
              c = c.slice(h);
            }
            return c;
          }),
          (i.generateECPolynomial = function (u) {
            let s = new Uint8Array([1]);
            for (let c = 0; c < u; c++)
              s = i.mul(s, new Uint8Array([1, a.exp(c)]));
            return s;
          }));
      })(Wc)),
    Wc
  );
}
var ef, Wp;
function gA() {
  if (Wp) return ef;
  Wp = 1;
  const i = mA();
  function a(l) {
    ((this.genPoly = void 0),
      (this.degree = l),
      this.degree && this.initialize(this.degree));
  }
  return (
    (a.prototype.initialize = function (u) {
      ((this.degree = u), (this.genPoly = i.generateECPolynomial(this.degree)));
    }),
    (a.prototype.encode = function (u) {
      if (!this.genPoly) throw new Error("Encoder not initialized");
      const s = new Uint8Array(u.length + this.degree);
      s.set(u);
      const c = i.mod(s, this.genPoly),
        d = this.degree - c.length;
      if (d > 0) {
        const h = new Uint8Array(this.degree);
        return (h.set(c, d), h);
      }
      return c;
    }),
    (ef = a),
    ef
  );
}
var tf = {},
  nf = {},
  af = {},
  ev;
function qy() {
  return (
    ev ||
      ((ev = 1),
      (af.isValid = function (a) {
        return !isNaN(a) && a >= 1 && a <= 40;
      })),
    af
  );
}
var dn = {},
  tv;
function By() {
  if (tv) return dn;
  tv = 1;
  const i = "[0-9]+",
    a = "[A-Z $%*+\\-./:]+";
  let l =
    "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  l = l.replace(/u/g, "\\u");
  const u =
    "(?:(?![A-Z0-9 $%*+\\-./:]|" +
    l +
    `)(?:.|[\r
]))+`;
  ((dn.KANJI = new RegExp(l, "g")),
    (dn.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
    (dn.BYTE = new RegExp(u, "g")),
    (dn.NUMERIC = new RegExp(i, "g")),
    (dn.ALPHANUMERIC = new RegExp(a, "g")));
  const s = new RegExp("^" + l + "$"),
    c = new RegExp("^" + i + "$"),
    d = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return (
    (dn.testKanji = function (m) {
      return s.test(m);
    }),
    (dn.testNumeric = function (m) {
      return c.test(m);
    }),
    (dn.testAlphanumeric = function (m) {
      return d.test(m);
    }),
    dn
  );
}
var nv;
function Vi() {
  return (
    nv ||
      ((nv = 1),
      (function (i) {
        const a = qy(),
          l = By();
        ((i.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (i.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (i.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (i.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (i.MIXED = { bit: -1 }),
          (i.getCharCountIndicator = function (c, d) {
            if (!c.ccBits) throw new Error("Invalid mode: " + c);
            if (!a.isValid(d)) throw new Error("Invalid version: " + d);
            return d >= 1 && d < 10
              ? c.ccBits[0]
              : d < 27
                ? c.ccBits[1]
                : c.ccBits[2];
          }),
          (i.getBestModeForData = function (c) {
            return l.testNumeric(c)
              ? i.NUMERIC
              : l.testAlphanumeric(c)
                ? i.ALPHANUMERIC
                : l.testKanji(c)
                  ? i.KANJI
                  : i.BYTE;
          }),
          (i.toString = function (c) {
            if (c && c.id) return c.id;
            throw new Error("Invalid mode");
          }),
          (i.isValid = function (c) {
            return c && c.bit && c.ccBits;
          }));
        function u(s) {
          if (typeof s != "string") throw new Error("Param is not a string");
          switch (s.toLowerCase()) {
            case "numeric":
              return i.NUMERIC;
            case "alphanumeric":
              return i.ALPHANUMERIC;
            case "kanji":
              return i.KANJI;
            case "byte":
              return i.BYTE;
            default:
              throw new Error("Unknown mode: " + s);
          }
        }
        i.from = function (c, d) {
          if (i.isValid(c)) return c;
          try {
            return u(c);
          } catch {
            return d;
          }
        };
      })(nf)),
    nf
  );
}
var iv;
function pA() {
  return (
    iv ||
      ((iv = 1),
      (function (i) {
        const a = Hi(),
          l = Ly(),
          u = Wf(),
          s = Vi(),
          c = qy(),
          d = 7973,
          h = a.getBCHDigit(d);
        function m(C, S, R) {
          for (let x = 1; x <= 40; x++)
            if (S <= i.getCapacity(x, R, C)) return x;
        }
        function p(C, S) {
          return s.getCharCountIndicator(C, S) + 4;
        }
        function y(C, S) {
          let R = 0;
          return (
            C.forEach(function (x) {
              const Q = p(x.mode, S);
              R += Q + x.getBitsLength();
            }),
            R
          );
        }
        function w(C, S) {
          for (let R = 1; R <= 40; R++)
            if (y(C, R) <= i.getCapacity(R, S, s.MIXED)) return R;
        }
        ((i.from = function (S, R) {
          return c.isValid(S) ? parseInt(S, 10) : R;
        }),
          (i.getCapacity = function (S, R, x) {
            if (!c.isValid(S)) throw new Error("Invalid QR Code version");
            typeof x > "u" && (x = s.BYTE);
            const Q = a.getSymbolTotalCodewords(S),
              M = l.getTotalCodewordsCount(S, R),
              V = (Q - M) * 8;
            if (x === s.MIXED) return V;
            const D = V - p(x, S);
            switch (x) {
              case s.NUMERIC:
                return Math.floor((D / 10) * 3);
              case s.ALPHANUMERIC:
                return Math.floor((D / 11) * 2);
              case s.KANJI:
                return Math.floor(D / 13);
              case s.BYTE:
              default:
                return Math.floor(D / 8);
            }
          }),
          (i.getBestVersionForData = function (S, R) {
            let x;
            const Q = u.from(R, u.M);
            if (Array.isArray(S)) {
              if (S.length > 1) return w(S, Q);
              if (S.length === 0) return 1;
              x = S[0];
            } else x = S;
            return m(x.mode, x.getLength(), Q);
          }),
          (i.getEncodedBits = function (S) {
            if (!c.isValid(S) || S < 7)
              throw new Error("Invalid QR Code version");
            let R = S << 12;
            for (; a.getBCHDigit(R) - h >= 0; )
              R ^= d << (a.getBCHDigit(R) - h);
            return (S << 12) | R;
          }));
      })(tf)),
    tf
  );
}
var rf = {},
  av;
function vA() {
  if (av) return rf;
  av = 1;
  const i = Hi(),
    a = 1335,
    l = 21522,
    u = i.getBCHDigit(a);
  return (
    (rf.getEncodedBits = function (c, d) {
      const h = (c.bit << 3) | d;
      let m = h << 10;
      for (; i.getBCHDigit(m) - u >= 0; ) m ^= a << (i.getBCHDigit(m) - u);
      return ((h << 10) | m) ^ l;
    }),
    rf
  );
}
var lf = {},
  sf,
  rv;
function yA() {
  if (rv) return sf;
  rv = 1;
  const i = Vi();
  function a(l) {
    ((this.mode = i.NUMERIC), (this.data = l.toString()));
  }
  return (
    (a.getBitsLength = function (u) {
      return 10 * Math.floor(u / 3) + (u % 3 ? (u % 3) * 3 + 1 : 0);
    }),
    (a.prototype.getLength = function () {
      return this.data.length;
    }),
    (a.prototype.getBitsLength = function () {
      return a.getBitsLength(this.data.length);
    }),
    (a.prototype.write = function (u) {
      let s, c, d;
      for (s = 0; s + 3 <= this.data.length; s += 3)
        ((c = this.data.substr(s, 3)), (d = parseInt(c, 10)), u.put(d, 10));
      const h = this.data.length - s;
      h > 0 &&
        ((c = this.data.substr(s)), (d = parseInt(c, 10)), u.put(d, h * 3 + 1));
    }),
    (sf = a),
    sf
  );
}
var uf, lv;
function bA() {
  if (lv) return uf;
  lv = 1;
  const i = Vi(),
    a = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":",
    ];
  function l(u) {
    ((this.mode = i.ALPHANUMERIC), (this.data = u));
  }
  return (
    (l.getBitsLength = function (s) {
      return 11 * Math.floor(s / 2) + 6 * (s % 2);
    }),
    (l.prototype.getLength = function () {
      return this.data.length;
    }),
    (l.prototype.getBitsLength = function () {
      return l.getBitsLength(this.data.length);
    }),
    (l.prototype.write = function (s) {
      let c;
      for (c = 0; c + 2 <= this.data.length; c += 2) {
        let d = a.indexOf(this.data[c]) * 45;
        ((d += a.indexOf(this.data[c + 1])), s.put(d, 11));
      }
      this.data.length % 2 && s.put(a.indexOf(this.data[c]), 6);
    }),
    (uf = l),
    uf
  );
}
var of, sv;
function SA() {
  if (sv) return of;
  sv = 1;
  const i = Vi();
  function a(l) {
    ((this.mode = i.BYTE),
      typeof l == "string"
        ? (this.data = new TextEncoder().encode(l))
        : (this.data = new Uint8Array(l)));
  }
  return (
    (a.getBitsLength = function (u) {
      return u * 8;
    }),
    (a.prototype.getLength = function () {
      return this.data.length;
    }),
    (a.prototype.getBitsLength = function () {
      return a.getBitsLength(this.data.length);
    }),
    (a.prototype.write = function (l) {
      for (let u = 0, s = this.data.length; u < s; u++) l.put(this.data[u], 8);
    }),
    (of = a),
    of
  );
}
var cf, uv;
function EA() {
  if (uv) return cf;
  uv = 1;
  const i = Vi(),
    a = Hi();
  function l(u) {
    ((this.mode = i.KANJI), (this.data = u));
  }
  return (
    (l.getBitsLength = function (s) {
      return s * 13;
    }),
    (l.prototype.getLength = function () {
      return this.data.length;
    }),
    (l.prototype.getBitsLength = function () {
      return l.getBitsLength(this.data.length);
    }),
    (l.prototype.write = function (u) {
      let s;
      for (s = 0; s < this.data.length; s++) {
        let c = a.toSJIS(this.data[s]);
        if (c >= 33088 && c <= 40956) c -= 33088;
        else if (c >= 57408 && c <= 60351) c -= 49472;
        else
          throw new Error(
            "Invalid SJIS character: " +
              this.data[s] +
              `
Make sure your charset is UTF-8`,
          );
        ((c = ((c >>> 8) & 255) * 192 + (c & 255)), u.put(c, 13));
      }
    }),
    (cf = l),
    cf
  );
}
var ff = { exports: {} },
  ov;
function wA() {
  return (
    ov ||
      ((ov = 1),
      (function (i) {
        var a = {
          single_source_shortest_paths: function (l, u, s) {
            var c = {},
              d = {};
            d[u] = 0;
            var h = a.PriorityQueue.make();
            h.push(u, 0);
            for (var m, p, y, w, C, S, R, x, Q; !h.empty(); ) {
              ((m = h.pop()), (p = m.value), (w = m.cost), (C = l[p] || {}));
              for (y in C)
                C.hasOwnProperty(y) &&
                  ((S = C[y]),
                  (R = w + S),
                  (x = d[y]),
                  (Q = typeof d[y] > "u"),
                  (Q || x > R) && ((d[y] = R), h.push(y, R), (c[y] = p)));
            }
            if (typeof s < "u" && typeof d[s] > "u") {
              var M = ["Could not find a path from ", u, " to ", s, "."].join(
                "",
              );
              throw new Error(M);
            }
            return c;
          },
          extract_shortest_path_from_predecessor_list: function (l, u) {
            for (var s = [], c = u; c; ) (s.push(c), l[c], (c = l[c]));
            return (s.reverse(), s);
          },
          find_path: function (l, u, s) {
            var c = a.single_source_shortest_paths(l, u, s);
            return a.extract_shortest_path_from_predecessor_list(c, s);
          },
          PriorityQueue: {
            make: function (l) {
              var u = a.PriorityQueue,
                s = {},
                c;
              l = l || {};
              for (c in u) u.hasOwnProperty(c) && (s[c] = u[c]);
              return (
                (s.queue = []),
                (s.sorter = l.sorter || u.default_sorter),
                s
              );
            },
            default_sorter: function (l, u) {
              return l.cost - u.cost;
            },
            push: function (l, u) {
              var s = { value: l, cost: u };
              (this.queue.push(s), this.queue.sort(this.sorter));
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return this.queue.length === 0;
            },
          },
        };
        i.exports = a;
      })(ff)),
    ff.exports
  );
}
var cv;
function CA() {
  return (
    cv ||
      ((cv = 1),
      (function (i) {
        const a = Vi(),
          l = yA(),
          u = bA(),
          s = SA(),
          c = EA(),
          d = By(),
          h = Hi(),
          m = wA();
        function p(M) {
          return unescape(encodeURIComponent(M)).length;
        }
        function y(M, V, D) {
          const Z = [];
          let $;
          for (; ($ = M.exec(D)) !== null; )
            Z.push({
              data: $[0],
              index: $.index,
              mode: V,
              length: $[0].length,
            });
          return Z;
        }
        function w(M) {
          const V = y(d.NUMERIC, a.NUMERIC, M),
            D = y(d.ALPHANUMERIC, a.ALPHANUMERIC, M);
          let Z, $;
          return (
            h.isKanjiModeEnabled()
              ? ((Z = y(d.BYTE, a.BYTE, M)), ($ = y(d.KANJI, a.KANJI, M)))
              : ((Z = y(d.BYTE_KANJI, a.BYTE, M)), ($ = [])),
            V.concat(D, Z, $)
              .sort(function (J, z) {
                return J.index - z.index;
              })
              .map(function (J) {
                return { data: J.data, mode: J.mode, length: J.length };
              })
          );
        }
        function C(M, V) {
          switch (V) {
            case a.NUMERIC:
              return l.getBitsLength(M);
            case a.ALPHANUMERIC:
              return u.getBitsLength(M);
            case a.KANJI:
              return c.getBitsLength(M);
            case a.BYTE:
              return s.getBitsLength(M);
          }
        }
        function S(M) {
          return M.reduce(function (V, D) {
            const Z = V.length - 1 >= 0 ? V[V.length - 1] : null;
            return Z && Z.mode === D.mode
              ? ((V[V.length - 1].data += D.data), V)
              : (V.push(D), V);
          }, []);
        }
        function R(M) {
          const V = [];
          for (let D = 0; D < M.length; D++) {
            const Z = M[D];
            switch (Z.mode) {
              case a.NUMERIC:
                V.push([
                  Z,
                  { data: Z.data, mode: a.ALPHANUMERIC, length: Z.length },
                  { data: Z.data, mode: a.BYTE, length: Z.length },
                ]);
                break;
              case a.ALPHANUMERIC:
                V.push([Z, { data: Z.data, mode: a.BYTE, length: Z.length }]);
                break;
              case a.KANJI:
                V.push([Z, { data: Z.data, mode: a.BYTE, length: p(Z.data) }]);
                break;
              case a.BYTE:
                V.push([{ data: Z.data, mode: a.BYTE, length: p(Z.data) }]);
            }
          }
          return V;
        }
        function x(M, V) {
          const D = {},
            Z = { start: {} };
          let $ = ["start"];
          for (let G = 0; G < M.length; G++) {
            const J = M[G],
              z = [];
            for (let P = 0; P < J.length; P++) {
              const K = J[P],
                j = "" + G + P;
              (z.push(j), (D[j] = { node: K, lastCount: 0 }), (Z[j] = {}));
              for (let W = 0; W < $.length; W++) {
                const ie = $[W];
                D[ie] && D[ie].node.mode === K.mode
                  ? ((Z[ie][j] =
                      C(D[ie].lastCount + K.length, K.mode) -
                      C(D[ie].lastCount, K.mode)),
                    (D[ie].lastCount += K.length))
                  : (D[ie] && (D[ie].lastCount = K.length),
                    (Z[ie][j] =
                      C(K.length, K.mode) +
                      4 +
                      a.getCharCountIndicator(K.mode, V)));
              }
            }
            $ = z;
          }
          for (let G = 0; G < $.length; G++) Z[$[G]].end = 0;
          return { map: Z, table: D };
        }
        function Q(M, V) {
          let D;
          const Z = a.getBestModeForData(M);
          if (((D = a.from(V, Z)), D !== a.BYTE && D.bit < Z.bit))
            throw new Error(
              '"' +
                M +
                '" cannot be encoded with mode ' +
                a.toString(D) +
                `.
 Suggested mode is: ` +
                a.toString(Z),
            );
          switch (
            (D === a.KANJI && !h.isKanjiModeEnabled() && (D = a.BYTE), D)
          ) {
            case a.NUMERIC:
              return new l(M);
            case a.ALPHANUMERIC:
              return new u(M);
            case a.KANJI:
              return new c(M);
            case a.BYTE:
              return new s(M);
          }
        }
        ((i.fromArray = function (V) {
          return V.reduce(function (D, Z) {
            return (
              typeof Z == "string"
                ? D.push(Q(Z, null))
                : Z.data && D.push(Q(Z.data, Z.mode)),
              D
            );
          }, []);
        }),
          (i.fromString = function (V, D) {
            const Z = w(V, h.isKanjiModeEnabled()),
              $ = R(Z),
              G = x($, D),
              J = m.find_path(G.map, "start", "end"),
              z = [];
            for (let P = 1; P < J.length - 1; P++) z.push(G.table[J[P]].node);
            return i.fromArray(S(z));
          }),
          (i.rawSplit = function (V) {
            return i.fromArray(w(V, h.isKanjiModeEnabled()));
          }));
      })(lf)),
    lf
  );
}
var fv;
function _A() {
  if (fv) return Ic;
  fv = 1;
  const i = Hi(),
    a = Wf(),
    l = uA(),
    u = oA(),
    s = cA(),
    c = fA(),
    d = dA(),
    h = Ly(),
    m = gA(),
    p = pA(),
    y = vA(),
    w = Vi(),
    C = CA();
  function S(G, J) {
    const z = G.size,
      P = c.getPositions(J);
    for (let K = 0; K < P.length; K++) {
      const j = P[K][0],
        W = P[K][1];
      for (let ie = -1; ie <= 7; ie++)
        if (!(j + ie <= -1 || z <= j + ie))
          for (let ne = -1; ne <= 7; ne++)
            W + ne <= -1 ||
              z <= W + ne ||
              ((ie >= 0 && ie <= 6 && (ne === 0 || ne === 6)) ||
              (ne >= 0 && ne <= 6 && (ie === 0 || ie === 6)) ||
              (ie >= 2 && ie <= 4 && ne >= 2 && ne <= 4)
                ? G.set(j + ie, W + ne, !0, !0)
                : G.set(j + ie, W + ne, !1, !0));
    }
  }
  function R(G) {
    const J = G.size;
    for (let z = 8; z < J - 8; z++) {
      const P = z % 2 === 0;
      (G.set(z, 6, P, !0), G.set(6, z, P, !0));
    }
  }
  function x(G, J) {
    const z = s.getPositions(J);
    for (let P = 0; P < z.length; P++) {
      const K = z[P][0],
        j = z[P][1];
      for (let W = -2; W <= 2; W++)
        for (let ie = -2; ie <= 2; ie++)
          W === -2 || W === 2 || ie === -2 || ie === 2 || (W === 0 && ie === 0)
            ? G.set(K + W, j + ie, !0, !0)
            : G.set(K + W, j + ie, !1, !0);
    }
  }
  function Q(G, J) {
    const z = G.size,
      P = p.getEncodedBits(J);
    let K, j, W;
    for (let ie = 0; ie < 18; ie++)
      ((K = Math.floor(ie / 3)),
        (j = (ie % 3) + z - 8 - 3),
        (W = ((P >> ie) & 1) === 1),
        G.set(K, j, W, !0),
        G.set(j, K, W, !0));
  }
  function M(G, J, z) {
    const P = G.size,
      K = y.getEncodedBits(J, z);
    let j, W;
    for (j = 0; j < 15; j++)
      ((W = ((K >> j) & 1) === 1),
        j < 6
          ? G.set(j, 8, W, !0)
          : j < 8
            ? G.set(j + 1, 8, W, !0)
            : G.set(P - 15 + j, 8, W, !0),
        j < 8
          ? G.set(8, P - j - 1, W, !0)
          : j < 9
            ? G.set(8, 15 - j - 1 + 1, W, !0)
            : G.set(8, 15 - j - 1, W, !0));
    G.set(P - 8, 8, 1, !0);
  }
  function V(G, J) {
    const z = G.size;
    let P = -1,
      K = z - 1,
      j = 7,
      W = 0;
    for (let ie = z - 1; ie > 0; ie -= 2)
      for (ie === 6 && ie--; ; ) {
        for (let ne = 0; ne < 2; ne++)
          if (!G.isReserved(K, ie - ne)) {
            let de = !1;
            (W < J.length && (de = ((J[W] >>> j) & 1) === 1),
              G.set(K, ie - ne, de),
              j--,
              j === -1 && (W++, (j = 7)));
          }
        if (((K += P), K < 0 || z <= K)) {
          ((K -= P), (P = -P));
          break;
        }
      }
  }
  function D(G, J, z) {
    const P = new l();
    z.forEach(function (ne) {
      (P.put(ne.mode.bit, 4),
        P.put(ne.getLength(), w.getCharCountIndicator(ne.mode, G)),
        ne.write(P));
    });
    const K = i.getSymbolTotalCodewords(G),
      j = h.getTotalCodewordsCount(G, J),
      W = (K - j) * 8;
    for (
      P.getLengthInBits() + 4 <= W && P.put(0, 4);
      P.getLengthInBits() % 8 !== 0;

    )
      P.putBit(0);
    const ie = (W - P.getLengthInBits()) / 8;
    for (let ne = 0; ne < ie; ne++) P.put(ne % 2 ? 17 : 236, 8);
    return Z(P, G, J);
  }
  function Z(G, J, z) {
    const P = i.getSymbolTotalCodewords(J),
      K = h.getTotalCodewordsCount(J, z),
      j = P - K,
      W = h.getBlocksCount(J, z),
      ie = P % W,
      ne = W - ie,
      de = Math.floor(P / W),
      B = Math.floor(j / W),
      F = B + 1,
      ae = de - B,
      ve = new m(ae);
    let _ = 0;
    const N = new Array(W),
      ee = new Array(W);
    let te = 0;
    const re = new Uint8Array(G.buffer);
    for (let lt = 0; lt < W; lt++) {
      const Ot = lt < ne ? B : F;
      ((N[lt] = re.slice(_, _ + Ot)),
        (ee[lt] = ve.encode(N[lt])),
        (_ += Ot),
        (te = Math.max(te, Ot)));
    }
    const he = new Uint8Array(P);
    let ue = 0,
      Ue,
      Ee;
    for (Ue = 0; Ue < te; Ue++)
      for (Ee = 0; Ee < W; Ee++) Ue < N[Ee].length && (he[ue++] = N[Ee][Ue]);
    for (Ue = 0; Ue < ae; Ue++)
      for (Ee = 0; Ee < W; Ee++) he[ue++] = ee[Ee][Ue];
    return he;
  }
  function $(G, J, z, P) {
    let K;
    if (Array.isArray(G)) K = C.fromArray(G);
    else if (typeof G == "string") {
      let de = J;
      if (!de) {
        const B = C.rawSplit(G);
        de = p.getBestVersionForData(B, z);
      }
      K = C.fromString(G, de || 40);
    } else throw new Error("Invalid data");
    const j = p.getBestVersionForData(K, z);
    if (!j)
      throw new Error(
        "The amount of data is too big to be stored in a QR Code",
      );
    if (!J) J = j;
    else if (J < j)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
          j +
          `.
`,
      );
    const W = D(J, z, K),
      ie = i.getSymbolSize(J),
      ne = new u(ie);
    return (
      S(ne, J),
      R(ne),
      x(ne, J),
      M(ne, z, 0),
      J >= 7 && Q(ne, J),
      V(ne, W),
      isNaN(P) && (P = d.getBestMask(ne, M.bind(null, ne, z))),
      d.applyMask(P, ne),
      M(ne, z, P),
      {
        modules: ne,
        version: J,
        errorCorrectionLevel: z,
        maskPattern: P,
        segments: K,
      }
    );
  }
  return (
    (Ic.create = function (J, z) {
      if (typeof J > "u" || J === "") throw new Error("No input text");
      let P = a.M,
        K,
        j;
      return (
        typeof z < "u" &&
          ((P = a.from(z.errorCorrectionLevel, a.M)),
          (K = p.from(z.version)),
          (j = d.from(z.maskPattern)),
          z.toSJISFunc && i.setToSJISFunction(z.toSJISFunc)),
        $(J, K, P, j)
      );
    }),
    Ic
  );
}
var df = {},
  hf = {},
  dv;
function Hy() {
  return (
    dv ||
      ((dv = 1),
      (function (i) {
        function a(l) {
          if (
            (typeof l == "number" && (l = l.toString()), typeof l != "string")
          )
            throw new Error("Color should be defined as hex string");
          let u = l.slice().replace("#", "").split("");
          if (u.length < 3 || u.length === 5 || u.length > 8)
            throw new Error("Invalid hex color: " + l);
          ((u.length === 3 || u.length === 4) &&
            (u = Array.prototype.concat.apply(
              [],
              u.map(function (c) {
                return [c, c];
              }),
            )),
            u.length === 6 && u.push("F", "F"));
          const s = parseInt(u.join(""), 16);
          return {
            r: (s >> 24) & 255,
            g: (s >> 16) & 255,
            b: (s >> 8) & 255,
            a: s & 255,
            hex: "#" + u.slice(0, 6).join(""),
          };
        }
        ((i.getOptions = function (u) {
          (u || (u = {}), u.color || (u.color = {}));
          const s =
              typeof u.margin > "u" || u.margin === null || u.margin < 0
                ? 4
                : u.margin,
            c = u.width && u.width >= 21 ? u.width : void 0,
            d = u.scale || 4;
          return {
            width: c,
            scale: c ? 4 : d,
            margin: s,
            color: {
              dark: a(u.color.dark || "#000000ff"),
              light: a(u.color.light || "#ffffffff"),
            },
            type: u.type,
            rendererOpts: u.rendererOpts || {},
          };
        }),
          (i.getScale = function (u, s) {
            return s.width && s.width >= u + s.margin * 2
              ? s.width / (u + s.margin * 2)
              : s.scale;
          }),
          (i.getImageWidth = function (u, s) {
            const c = i.getScale(u, s);
            return Math.floor((u + s.margin * 2) * c);
          }),
          (i.qrToImageData = function (u, s, c) {
            const d = s.modules.size,
              h = s.modules.data,
              m = i.getScale(d, c),
              p = Math.floor((d + c.margin * 2) * m),
              y = c.margin * m,
              w = [c.color.light, c.color.dark];
            for (let C = 0; C < p; C++)
              for (let S = 0; S < p; S++) {
                let R = (C * p + S) * 4,
                  x = c.color.light;
                if (C >= y && S >= y && C < p - y && S < p - y) {
                  const Q = Math.floor((C - y) / m),
                    M = Math.floor((S - y) / m);
                  x = w[h[Q * d + M] ? 1 : 0];
                }
                ((u[R++] = x.r), (u[R++] = x.g), (u[R++] = x.b), (u[R] = x.a));
              }
          }));
      })(hf)),
    hf
  );
}
var hv;
function AA() {
  return (
    hv ||
      ((hv = 1),
      (function (i) {
        const a = Hy();
        function l(s, c, d) {
          (s.clearRect(0, 0, c.width, c.height),
            c.style || (c.style = {}),
            (c.height = d),
            (c.width = d),
            (c.style.height = d + "px"),
            (c.style.width = d + "px"));
        }
        function u() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        ((i.render = function (c, d, h) {
          let m = h,
            p = d;
          (typeof m > "u" && (!d || !d.getContext) && ((m = d), (d = void 0)),
            d || (p = u()),
            (m = a.getOptions(m)));
          const y = a.getImageWidth(c.modules.size, m),
            w = p.getContext("2d"),
            C = w.createImageData(y, y);
          return (
            a.qrToImageData(C.data, c, m),
            l(w, p, y),
            w.putImageData(C, 0, 0),
            p
          );
        }),
          (i.renderToDataURL = function (c, d, h) {
            let m = h;
            (typeof m > "u" && (!d || !d.getContext) && ((m = d), (d = void 0)),
              m || (m = {}));
            const p = i.render(c, d, m),
              y = m.type || "image/png",
              w = m.rendererOpts || {};
            return p.toDataURL(y, w.quality);
          }));
      })(df)),
    df
  );
}
var mf = {},
  mv;
function TA() {
  if (mv) return mf;
  mv = 1;
  const i = Hy();
  function a(s, c) {
    const d = s.a / 255,
      h = c + '="' + s.hex + '"';
    return d < 1 ? h + " " + c + '-opacity="' + d.toFixed(2).slice(1) + '"' : h;
  }
  function l(s, c, d) {
    let h = s + c;
    return (typeof d < "u" && (h += " " + d), h);
  }
  function u(s, c, d) {
    let h = "",
      m = 0,
      p = !1,
      y = 0;
    for (let w = 0; w < s.length; w++) {
      const C = Math.floor(w % c),
        S = Math.floor(w / c);
      (!C && !p && (p = !0),
        s[w]
          ? (y++,
            (w > 0 && C > 0 && s[w - 1]) ||
              ((h += p ? l("M", C + d, 0.5 + S + d) : l("m", m, 0)),
              (m = 0),
              (p = !1)),
            (C + 1 < c && s[w + 1]) || ((h += l("h", y)), (y = 0)))
          : m++);
    }
    return h;
  }
  return (
    (mf.render = function (c, d, h) {
      const m = i.getOptions(d),
        p = c.modules.size,
        y = c.modules.data,
        w = p + m.margin * 2,
        C = m.color.light.a
          ? "<path " +
            a(m.color.light, "fill") +
            ' d="M0 0h' +
            w +
            "v" +
            w +
            'H0z"/>'
          : "",
        S =
          "<path " +
          a(m.color.dark, "stroke") +
          ' d="' +
          u(y, p, m.margin) +
          '"/>',
        R = 'viewBox="0 0 ' + w + " " + w + '"',
        Q =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (m.width ? 'width="' + m.width + '" height="' + m.width + '" ' : "") +
          R +
          ' shape-rendering="crispEdges">' +
          C +
          S +
          `</svg>
`;
      return (typeof h == "function" && h(null, Q), Q);
    }),
    mf
  );
}
var gv;
function RA() {
  if (gv) return Oa;
  gv = 1;
  const i = sA(),
    a = _A(),
    l = AA(),
    u = TA();
  function s(c, d, h, m, p) {
    const y = [].slice.call(arguments, 1),
      w = y.length,
      C = typeof y[w - 1] == "function";
    if (!C && !i()) throw new Error("Callback required as last argument");
    if (C) {
      if (w < 2) throw new Error("Too few arguments provided");
      w === 2
        ? ((p = h), (h = d), (d = m = void 0))
        : w === 3 &&
          (d.getContext && typeof p > "u"
            ? ((p = m), (m = void 0))
            : ((p = m), (m = h), (h = d), (d = void 0)));
    } else {
      if (w < 1) throw new Error("Too few arguments provided");
      return (
        w === 1
          ? ((h = d), (d = m = void 0))
          : w === 2 && !d.getContext && ((m = h), (h = d), (d = void 0)),
        new Promise(function (S, R) {
          try {
            const x = a.create(h, m);
            S(c(x, d, m));
          } catch (x) {
            R(x);
          }
        })
      );
    }
    try {
      const S = a.create(h, m);
      p(null, c(S, d, m));
    } catch (S) {
      p(S);
    }
  }
  return (
    (Oa.create = a.create),
    (Oa.toCanvas = s.bind(null, l.render)),
    (Oa.toDataURL = s.bind(null, l.renderToDataURL)),
    (Oa.toString = s.bind(null, function (c, d, h) {
      return u.render(c, h);
    })),
    Oa
  );
}
var OA = RA();
const MA = zf(OA),
  xA = ({ url: i, size: a = 120, className: l = "" }) => {
    const u = T.useRef(null);
    return (
      T.useEffect(() => {
        u.current &&
          MA.toCanvas(u.current, i, {
            width: a,
            margin: 2,
            color: { dark: "#000000", light: "#FFFFFF" },
          });
      }, [i, a]),
      b.jsxs("div", {
        className: `qr-code-container ${l}`,
        children: [
          b.jsx("canvas", { ref: u }),
          b.jsx("p", {
            className: "qr-code-label",
            children: "Open on Mobile",
          }),
        ],
      })
    );
  },
  NA = () => {
    const { eventId: i } = My(),
      [a, l] = T.useState(""),
      [u, s] = T.useState(""),
      [c, d] = T.useState(""),
      [h, m] = T.useState("votes"),
      [p, y] = T.useState(!1),
      { user: w } = Pf(),
      C = mi(Je.functions.getEventBySlug, { eventSlug: i }),
      S = mi(
        Je.functions.listQuestions,
        C != null && C._id ? { eventId: C._id } : "skip",
      ),
      R = mi(
        Je.functions.listEventComments,
        C != null && C._id ? { eventId: C._id } : "skip",
      ),
      x = mi(
        Je.functions.isEventOpen,
        C != null && C._id ? { eventId: C._id } : "skip",
      ),
      Q = nn(Je.functions.submitQuestion),
      M = nn(Je.functions.upvoteQuestion),
      V = nn(Je.functions.addComment),
      D = window.location.href,
      Z = H.useMemo(() => {
        if (!S) return [];
        const z = [...S];
        if (h === "answered") {
          const P = z.filter((j) => j.answered),
            K = z.filter((j) => !j.answered);
          return (
            P.sort((j, W) => (W.answeredAt || 0) - (j.answeredAt || 0)),
            K.sort((j, W) => W.upvotes - j.upvotes),
            [...P, ...K]
          );
        }
        return z.sort((P, K) =>
          h === "votes"
            ? K.upvotes - P.upvotes
            : h === "recent"
              ? K._creationTime - P._creationTime
              : K.upvotes - P.upvotes,
        );
      }, [S, h]),
      $ = async (z) => {
        if ((z.preventDefault(), !(!a.trim() || !(C != null && C._id))))
          try {
            (await Q({
              eventId: C._id,
              content: a.trim(),
              authorName: (w == null ? void 0 : w.firstName) || "Anonymous",
            }),
              l(""));
          } catch (P) {
            console.error("Failed to submit question:", P);
          }
      },
      G = async (z) => {
        try {
          await M({ questionId: z });
        } catch (P) {
          console.error("Failed to upvote:", P);
        }
      },
      J = async (z) => {
        if (!(!u.trim() || !c.trim()))
          try {
            (await V({
              questionId: z,
              content: u.trim(),
              authorName: c.trim(),
              isAdmin: !0,
              authorId: void 0,
            }),
              s(""),
              d(""));
          } catch (P) {
            console.error("Failed to add admin comment:", P);
          }
      };
    return C === void 0 || S === void 0 || x === void 0
      ? b.jsx("div", {
          className: "page-container",
          children: b.jsx("div", {
            className: "loading",
            children: "Loading event...",
          }),
        })
      : C
        ? b.jsxs("div", {
            className: "event-page",
            children: [
              b.jsx("div", {
                className: "event-left-panel",
                children: b.jsxs("div", {
                  className: "questions-list-container",
                  children: [
                    b.jsx("div", {
                      className: "list-header",
                      children: b.jsx("h3", { children: "Questions" }),
                    }),
                    Z.length === 0
                      ? b.jsx("p", {
                          className: "empty-state",
                          children: "No questions yet. Be the first to ask!",
                        })
                      : b.jsx("div", {
                          className: "questions-list",
                          children: Z.map((z) => {
                            const K = (
                              (R == null
                                ? void 0
                                : R.filter((j) => j.questionId === z._id)) || []
                            ).filter((j) => j.isAdmin);
                            return (
                              console.log(
                                `Question ${z._id}: answered=${z.answered}, answer=${z.answer}`,
                              ),
                              b.jsxs(
                                "div",
                                {
                                  className: "question-item",
                                  children: [
                                    b.jsxs("div", {
                                      className: "question-content",
                                      children: [
                                        b.jsx("div", {
                                          className: "question-author",
                                          children: z.authorName || "Anonymous",
                                        }),
                                        b.jsxs("div", {
                                          className: "question-text-and-upvote",
                                          children: [
                                            b.jsx("div", {
                                              className: "question-text",
                                              children: z.content,
                                            }),
                                            b.jsxs("button", {
                                              onClick: () => G(z._id),
                                              className: "upvote-button",
                                              children: [
                                                b.jsx(lA, {
                                                  className: "upvote-icon",
                                                }),
                                                b.jsx("span", {
                                                  className: "upvote-count",
                                                  children: z.upvotes,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    K.length > 0 &&
                                      b.jsxs("div", {
                                        className: "admin-comments-display",
                                        children: [
                                          b.jsx("h4", {
                                            children: "Admin Comments",
                                          }),
                                          K.map((j) =>
                                            b.jsxs(
                                              "div",
                                              {
                                                className: "admin-comment",
                                                children: [
                                                  b.jsx("div", {
                                                    className: "comment-author",
                                                    children: j.authorName,
                                                  }),
                                                  b.jsx("div", {
                                                    className:
                                                      "comment-content",
                                                    children: j.content,
                                                  }),
                                                ],
                                              },
                                              j._id,
                                            ),
                                          ),
                                        ],
                                      }),
                                    z.answered &&
                                      z.answer &&
                                      b.jsxs("div", {
                                        className: "answered-display",
                                        children: [
                                          b.jsx("div", {
                                            className: "answered-label",
                                            children: "Answered",
                                          }),
                                          b.jsx("div", {
                                            className: "answered-content",
                                            children: z.answer,
                                          }),
                                          z.answeredBy &&
                                            z.answeredBy !== "Admin" &&
                                            b.jsxs("div", {
                                              className: "answered-by",
                                              children: ["by ", z.answeredBy],
                                            }),
                                        ],
                                      }),
                                    z.answered &&
                                      !z.answer &&
                                      b.jsx("div", {
                                        className: "answered-simple",
                                        children: b.jsx("span", {
                                          className: "answered-badge",
                                          children: "Answered",
                                        }),
                                      }),
                                    K.length > 0 &&
                                      b.jsxs("div", {
                                        className: "admin-comment-section",
                                        children: [
                                          b.jsx("h4", {
                                            children: "Add Admin Comment",
                                          }),
                                          b.jsxs("div", {
                                            className: "admin-comment-form",
                                            children: [
                                              b.jsx("input", {
                                                type: "text",
                                                placeholder: "Admin name",
                                                value: c,
                                                onChange: (j) =>
                                                  d(j.target.value),
                                                className:
                                                  "form-input admin-name-input",
                                              }),
                                              b.jsx("input", {
                                                type: "text",
                                                placeholder: "Admin comment...",
                                                value: u,
                                                onChange: (j) =>
                                                  s(j.target.value),
                                                className:
                                                  "form-input comment-input",
                                              }),
                                              b.jsx("button", {
                                                onClick: () => J(z._id),
                                                className: "btn btn-admin",
                                                children: "Add Comment",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                `${z._id}-${z.answered}-${z.answer}`,
                              )
                            );
                          }),
                        }),
                  ],
                }),
              }),
              b.jsx("div", {
                className: "event-right-panel",
                children: b.jsxs("div", {
                  className: "event-details",
                  children: [
                    b.jsx("h2", { children: "Event Details" }),
                    b.jsxs("div", {
                      className: "event-info",
                      children: [
                        b.jsx("p", { children: C.title }),
                        C.date &&
                          b.jsxs("div", {
                            className: "event-date-box",
                            children: [
                              "Date: ",
                              new Date(C.date).toLocaleDateString(),
                            ],
                          }),
                      ],
                    }),
                    x &&
                      !x.isOpen &&
                      x.message &&
                      b.jsx("div", {
                        className: "event-status-message",
                        children: x.message,
                      }),
                    b.jsxs("div", {
                      className: "sort-options-compact",
                      children: [
                        b.jsx("span", {
                          className: "sort-label-inline",
                          children: "Sort by:",
                        }),
                        b.jsx("button", {
                          onClick: () => m("votes"),
                          className: `sort-btn-small ${h === "votes" ? "active" : ""}`,
                          children: "Most Voted",
                        }),
                        b.jsx("button", {
                          onClick: () => m("recent"),
                          className: `sort-btn-small ${h === "recent" ? "active" : ""}`,
                          children: "Most Recent",
                        }),
                        b.jsx("button", {
                          onClick: () => m("answered"),
                          className: `sort-btn-small ${h === "answered" ? "active" : ""}`,
                          children: "Answered",
                        }),
                      ],
                    }),
                    x &&
                      x.isOpen &&
                      b.jsxs("div", {
                        className: "question-form-section",
                        children: [
                          b.jsx("h3", { children: "Ask a Question" }),
                          b.jsx(Gf, {
                            children: b.jsxs("div", {
                              className: "auth-required",
                              children: [
                                b.jsx("p", {
                                  children:
                                    "Please sign in to submit a question",
                                }),
                                b.jsx($f, {
                                  mode: "modal",
                                  children: b.jsx("button", {
                                    className: "btn btn-primary",
                                    children: "Sign In to Ask Question",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          b.jsx(Yf, {
                            children: b.jsxs("form", {
                              onSubmit: $,
                              className: "question-form",
                              children: [
                                b.jsxs("div", {
                                  className: "form-group",
                                  children: [
                                    b.jsx("textarea", {
                                      placeholder: "Type your question here...",
                                      value: a,
                                      onChange: (z) => {
                                        const P = z.target.value;
                                        P.length <= 249 && l(P);
                                      },
                                      className: "form-textarea",
                                      rows: 5,
                                      maxLength: 249,
                                      required: !0,
                                    }),
                                    b.jsxs("div", {
                                      className: `character-counter ${a.length > 225 ? "warning" : ""} ${a.length > 240 ? "danger" : ""}`,
                                      children: [
                                        249 - a.length,
                                        " characters left",
                                      ],
                                    }),
                                  ],
                                }),
                                b.jsx("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Submit Question",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    b.jsx("div", {
                      className: "qr-code-toggle",
                      children: b.jsx("button", {
                        onClick: () => y(!p),
                        className: "btn btn-secondary",
                        children: p ? "Hide QR Code" : "Show QR Code",
                      }),
                    }),
                    p &&
                      b.jsx("div", {
                        className: "qr-code-section",
                        children: b.jsx(xA, { url: D, size: 120 }),
                      }),
                  ],
                }),
              }),
              b.jsx("footer", {
                className: "footer",
                children: b.jsx("a", {
                  href: "https://convex.dev/?utm_source=convexamasite",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Powered by Convex",
                }),
              }),
            ],
          })
        : b.jsx("div", {
            className: "page-container",
            children: b.jsx("div", {
              className: "error",
              children: "Event not found",
            }),
          });
  },
  kA = () => {
    var _;
    const { isLoaded: i, isSignedIn: a } = Gs(),
      { user: l } = Pf(),
      [u, s] = T.useState(""),
      [c, d] = T.useState(""),
      [h, m] = T.useState(""),
      [p, y] = T.useState(""),
      [w, C] = T.useState(""),
      [S, R] = T.useState(""),
      [x, Q] = T.useState(""),
      [M, V] = T.useState(!1),
      [D, Z] = T.useState("manage"),
      [$, G] = T.useState(null),
      J = nn(Je.functions.createEvent),
      z = nn(Je.functions.deleteEvent),
      P = nn(Je.functions.toggleEventStatus),
      K = nn(Je.functions.toggleEventArchive),
      j = mi(Je.functions.listAllEventsForAdmin, !i || !a ? "skip" : {}),
      W = async (N) => {
        if ((N.preventDefault(), !(!u.trim() || !c.trim())))
          try {
            (await J({
              title: u.trim(),
              description: c.trim(),
              date: h || void 0,
              adminName: p.trim() || void 0,
              openDate: w || void 0,
              closeDate: S || void 0,
              closedMessage: x.trim() || void 0,
            }),
              s(""),
              d(""),
              m(""),
              y(""),
              C(""),
              R(""),
              Q(""),
              V(!0));
          } catch (ee) {
            (console.error("Failed to create event:", ee),
              G({
                type: "error",
                message: "Failed to create event. Please try again.",
              }));
          }
      },
      ie = async (N) => {
        if (
          confirm(
            "Are you sure you want to delete this event? This will also delete all questions and comments associated with it.",
          )
        )
          try {
            (await z({ eventId: N }),
              G({ type: "success", message: "Event deleted successfully!" }));
          } catch (ee) {
            (console.error("Failed to delete event:", ee),
              G({
                type: "error",
                message: "Failed to delete event. Please try again.",
              }));
          }
      },
      ne = async (N, ee, te) => {
        try {
          const re = !ee;
          if (
            !re &&
            !confirm(
              "Are you sure you want to close this event? Users will still be able to read questions but cannot submit new ones.",
            )
          )
            return;
          (await P({ eventId: N, isActive: re, closedMessage: te || void 0 }),
            G({
              type: "success",
              message: `Event ${re ? "activated" : "closed"} successfully!`,
            }));
        } catch (re) {
          (console.error("Failed to toggle event status:", re),
            G({
              type: "error",
              message: "Failed to update event status. Please try again.",
            }));
        }
      },
      de = async (N, ee) => {
        try {
          const te = !ee;
          if (
            te &&
            !confirm(
              "Are you sure you want to archive this event? It will no longer appear on the homepage.",
            )
          )
            return;
          (await K({ eventId: N, archived: te }),
            G({
              type: "success",
              message: `Event ${te ? "archived" : "unarchived"} successfully!`,
            }));
        } catch (te) {
          (console.error("Failed to toggle event archive status:", te),
            G({
              type: "error",
              message:
                "Failed to update event archive status. Please try again.",
            }));
        }
      },
      B = () => {
        V(!1);
      },
      F = () => {
        G(null);
      },
      ve =
        ((_ = l == null ? void 0 : l.publicMetadata) == null
          ? void 0
          : _.role) === "admin";
    return i
      ? a
        ? ve
          ? b.jsxs("div", {
              className: "page-container",
              children: [
                b.jsxs("div", {
                  className: "page-header",
                  children: [
                    b.jsx("h1", { children: "Admin Dashboard" }),
                    b.jsx("p", { children: "Create and manage AMA events" }),
                  ],
                }),
                b.jsxs("div", {
                  className: "admin-nav",
                  children: [
                    b.jsx("button", {
                      className: `nav-button ${D === "manage" ? "active" : ""}`,
                      onClick: () => Z("manage"),
                      children: "Event Management",
                    }),
                    b.jsx("button", {
                      className: `nav-button ${D === "create" ? "active" : ""}`,
                      onClick: () => Z("create"),
                      children: "Create New Event",
                    }),
                  ],
                }),
                D === "create" &&
                  b.jsxs("div", {
                    className: "admin-section",
                    children: [
                      b.jsx("h2", { children: "Create New Event" }),
                      b.jsxs("form", {
                        onSubmit: W,
                        className: "admin-form",
                        children: [
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "adminName",
                                children: "Admin Name (Optional)",
                              }),
                              b.jsx("input", {
                                id: "adminName",
                                type: "text",
                                placeholder: "Enter your name",
                                value: p,
                                onChange: (N) => y(N.target.value),
                                className: "form-input",
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "eventTitle",
                                children: "Event Title *",
                              }),
                              b.jsx("input", {
                                id: "eventTitle",
                                type: "text",
                                placeholder: "Enter event title",
                                value: u,
                                onChange: (N) => s(N.target.value),
                                className: "form-input",
                                required: !0,
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "eventDescription",
                                children: "Event Description *",
                              }),
                              b.jsx("textarea", {
                                id: "eventDescription",
                                placeholder: "Enter event description",
                                value: c,
                                onChange: (N) => d(N.target.value),
                                className: "form-textarea",
                                rows: 4,
                                required: !0,
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "eventDate",
                                children: "Event Date (Optional)",
                              }),
                              b.jsx("input", {
                                id: "eventDate",
                                type: "date",
                                value: h,
                                onChange: (N) => m(N.target.value),
                                className: "form-input",
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "openDate",
                                children: "Open Date (Optional)",
                              }),
                              b.jsx("input", {
                                id: "openDate",
                                type: "datetime-local",
                                value: w,
                                onChange: (N) => C(N.target.value),
                                className: "form-input",
                              }),
                              b.jsx("small", {
                                children:
                                  "When questions can start being submitted",
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "closeDate",
                                children: "Close Date (Optional)",
                              }),
                              b.jsx("input", {
                                id: "closeDate",
                                type: "datetime-local",
                                value: S,
                                onChange: (N) => R(N.target.value),
                                className: "form-input",
                              }),
                              b.jsx("small", {
                                children: "When questions stop being accepted",
                              }),
                            ],
                          }),
                          b.jsxs("div", {
                            className: "form-group",
                            children: [
                              b.jsx("label", {
                                htmlFor: "closedMessage",
                                children: "Closed Message (Optional)",
                              }),
                              b.jsx("textarea", {
                                id: "closedMessage",
                                placeholder:
                                  "Custom message when event is closed (supports links)",
                                value: x,
                                onChange: (N) => Q(N.target.value),
                                className: "form-textarea",
                                rows: 3,
                              }),
                              b.jsx("small", {
                                children:
                                  "Message shown when event is closed. You can include links like [link text](url)",
                              }),
                            ],
                          }),
                          b.jsx("button", {
                            type: "submit",
                            className: "btn btn-primary",
                            children: "Create Event",
                          }),
                        ],
                      }),
                    ],
                  }),
                D === "manage" &&
                  b.jsxs("div", {
                    className: "admin-section",
                    children: [
                      b.jsx("h2", { children: "Event Management" }),
                      b.jsx("div", {
                        className: "event-management",
                        children:
                          j === void 0
                            ? b.jsx("div", {
                                className: "loading",
                                children: "Loading events...",
                              })
                            : j.length === 0
                              ? b.jsxs("div", {
                                  className: "empty-state",
                                  children: [
                                    b.jsx("h3", {
                                      children: "No events found",
                                    }),
                                    b.jsx("p", {
                                      children: "Create your first event above",
                                    }),
                                  ],
                                })
                              : b.jsxs("div", {
                                  className: "events-list",
                                  children: [
                                    b.jsxs("h3", {
                                      children: ["All Events (", j.length, ")"],
                                    }),
                                    j.map((N) =>
                                      b.jsxs(
                                        "div",
                                        {
                                          className: "event-item",
                                          children: [
                                            b.jsxs("div", {
                                              className: "event-info",
                                              children: [
                                                b.jsx(vi, {
                                                  to: `/admin/event/${N.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")
                                                    .replace(
                                                      /[^a-z0-9-]/g,
                                                      "",
                                                    )}`,
                                                  children: b.jsx("h4", {
                                                    children: N.title,
                                                  }),
                                                }),
                                                b.jsx("p", {
                                                  children: N.description,
                                                }),
                                                b.jsxs("div", {
                                                  className: "event-meta",
                                                  children: [
                                                    b.jsx("span", {
                                                      className: `status ${N.isActive ? "active" : "inactive"}`,
                                                      children: N.isActive
                                                        ? "Active"
                                                        : "Inactive",
                                                    }),
                                                    N.archived &&
                                                      b.jsx("span", {
                                                        className:
                                                          "status archived",
                                                        children: "Archived",
                                                      }),
                                                    N.date &&
                                                      b.jsx("span", {
                                                        className: "date",
                                                        children: new Date(
                                                          N.date,
                                                        ).toLocaleDateString(),
                                                      }),
                                                    N.adminName &&
                                                      b.jsxs("span", {
                                                        className: "admin",
                                                        children: [
                                                          "by ",
                                                          N.adminName,
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            b.jsxs("div", {
                                              className: "event-actions",
                                              children: [
                                                b.jsx(vi, {
                                                  to: `/admin/event/${N.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")
                                                    .replace(
                                                      /[^a-z0-9-]/g,
                                                      "",
                                                    )}`,
                                                  className:
                                                    "btn btn-secondary",
                                                  children: "Manage",
                                                }),
                                                b.jsx("button", {
                                                  onClick: () =>
                                                    ne(
                                                      N._id,
                                                      N.isActive,
                                                      N.closedMessage || "",
                                                    ),
                                                  className: `btn ${N.isActive ? "btn-secondary" : "btn-admin"}`,
                                                  children: N.isActive
                                                    ? "Close Event"
                                                    : "Activate Event",
                                                }),
                                                b.jsx("button", {
                                                  onClick: () =>
                                                    de(N._id, N.archived || !1),
                                                  className: `btn ${N.archived ? "btn-admin" : "btn-secondary"}`,
                                                  children: N.archived
                                                    ? "Unarchive Event"
                                                    : "Archive Event",
                                                }),
                                                b.jsx("button", {
                                                  onClick: () => ie(N._id),
                                                  className: "btn btn-danger",
                                                  children: "Delete Event",
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        N._id,
                                      ),
                                    ),
                                  ],
                                }),
                      }),
                    ],
                  }),
                M &&
                  b.jsx("div", {
                    className: "modal-overlay",
                    onClick: B,
                    children: b.jsxs("div", {
                      className: "modal",
                      onClick: (N) => N.stopPropagation(),
                      children: [
                        b.jsx("h3", {
                          children: "Event Created Successfully!",
                        }),
                        b.jsx("p", {
                          children:
                            "Your AMA event has been created and is now active. Users can start submitting questions.",
                        }),
                        b.jsx("button", {
                          className: "btn btn-primary",
                          onClick: B,
                          children: "Continue",
                        }),
                      ],
                    }),
                  }),
                $ &&
                  b.jsx("div", {
                    className: "modal-overlay",
                    onClick: F,
                    children: b.jsxs("div", {
                      className: "modal notification-modal",
                      onClick: (N) => N.stopPropagation(),
                      children: [
                        b.jsx("div", {
                          className: `notification-icon ${$.type}`,
                          children: $.type === "success" ? "✓" : "✕",
                        }),
                        b.jsx("h3", {
                          children: $.type === "success" ? "Success" : "Error",
                        }),
                        b.jsx("p", { children: $.message }),
                        b.jsx("button", {
                          className: "btn btn-primary",
                          onClick: F,
                          children: "OK",
                        }),
                      ],
                    }),
                  }),
              ],
            })
          : b.jsx("div", {
              className: "page-container",
              children: b.jsx("div", {
                className: "error",
                children:
                  "Admin access required. Contact an administrator if you believe this is an error.",
              }),
            })
        : b.jsx("div", {
            className: "page-container",
            children: b.jsx("div", {
              className: "error",
              children: "Please log in to access the admin dashboard.",
            }),
          })
      : b.jsx("div", {
          className: "page-container",
          children: b.jsx("div", {
            className: "loading",
            children: "Loading authentication...",
          }),
        });
  },
  UA = () => {
    var K;
    const { eventTitle: i } = My(),
      { isLoaded: a, isSignedIn: l } = Gs(),
      { user: u } = Pf(),
      [s, c] = T.useState(null),
      [d, h] = T.useState(""),
      [m, p] = T.useState(null),
      y = mi(Je.functions.getEventBySlug, !a || !l ? "skip" : { eventSlug: i }),
      w = mi(
        Je.functions.listQuestions,
        !a || !l || !(y != null && y._id) ? "skip" : { eventId: y._id },
      ),
      C = nn(Je.functions.markQuestionAnswered),
      S = nn(Je.functions.markQuestionAsAnswered),
      R = nn(Je.functions.toggleQuestionVisibility),
      x = nn(Je.functions.deleteQuestion),
      Q = (j, W) => {
        s === j ? (c(null), h("")) : (c(j), h(W || ""));
      },
      M = async (j) => {
        if (d.trim())
          try {
            (await C({ questionId: j, answer: d.trim() }), c(null), h(""));
          } catch (W) {
            console.error("Failed to submit answer:", W);
          }
      },
      V = () => {
        (c(null), h(""));
      },
      D = async (j, W) => {
        await R({ questionId: j, hide: W });
      },
      Z = async (j, W) => {
        p({
          questionId: j,
          questionContent: W.substring(0, 50) + (W.length > 50 ? "..." : ""),
        });
      },
      $ = async () => {
        m && (await x({ questionId: m.questionId }), p(null));
      },
      G = () => {
        p(null);
      },
      J = async (j) => {
        try {
          await S({ questionId: j });
        } catch (W) {
          console.error("Failed to mark question as answered:", W);
        }
      },
      P =
        ((K = u == null ? void 0 : u.publicMetadata) == null
          ? void 0
          : K.role) === "admin";
    return a
      ? l
        ? P
          ? y === void 0 || w === void 0
            ? b.jsx("div", {
                className: "loading",
                children: "Loading event details...",
              })
            : y
              ? b.jsxs("div", {
                  className: "page-container",
                  children: [
                    b.jsxs("div", {
                      className: "page-header",
                      children: [
                        b.jsx(vi, {
                          to: "/admin",
                          children: "← Back to Admin Dashboard",
                        }),
                        b.jsxs("h1", { children: ["Manage Event: ", y.title] }),
                        b.jsx("p", { children: y.description }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "admin-section",
                      children: [
                        b.jsxs("h2", {
                          children: [
                            "Questions (",
                            w == null ? void 0 : w.length,
                            ")",
                          ],
                        }),
                        b.jsx("div", {
                          className: "questions-list",
                          children:
                            w == null
                              ? void 0
                              : w.map((j) =>
                                  b.jsxs(
                                    "div",
                                    {
                                      className:
                                        "question-item admin-question-item",
                                      children: [
                                        b.jsxs("div", {
                                          className: "question-details",
                                          children: [
                                            b.jsx("p", {
                                              className: "question-text",
                                              children: j.content,
                                            }),
                                            b.jsxs("small", {
                                              children: [
                                                "By: ",
                                                j.authorName || "Anonymous",
                                                " | Upvotes:",
                                                " ",
                                                j.upvotes,
                                              ],
                                            }),
                                          ],
                                        }),
                                        b.jsxs("div", {
                                          className: "moderation-actions",
                                          children: [
                                            b.jsx("button", {
                                              onClick: () => Q(j._id, j.answer),
                                              className: `btn ${s === j._id ? "btn-primary" : "btn-admin"}`,
                                              children:
                                                s === j._id
                                                  ? "Cancel"
                                                  : j.answered
                                                    ? "Edit Answer"
                                                    : "Answer",
                                            }),
                                            !j.answered &&
                                              b.jsx("button", {
                                                onClick: () => J(j._id),
                                                className: "btn btn-admin",
                                                children: "Mark as Answered",
                                              }),
                                            b.jsx("button", {
                                              onClick: () =>
                                                D(j._id, j.isVisible),
                                              className: "btn btn-secondary",
                                              children: j.isVisible
                                                ? "Hide"
                                                : "Unhide",
                                            }),
                                            b.jsx("button", {
                                              onClick: () =>
                                                Z(j._id, j.content),
                                              className: "btn btn-danger",
                                              children: "Delete",
                                            }),
                                          ],
                                        }),
                                        s === j._id &&
                                          b.jsxs("div", {
                                            className: "answer-box",
                                            children: [
                                              b.jsx("div", {
                                                className: "answer-box-header",
                                                children: b.jsx("h4", {
                                                  children: j.answered
                                                    ? "Edit Answer"
                                                    : "Add Answer",
                                                }),
                                              }),
                                              b.jsxs("div", {
                                                className: "answer-box-content",
                                                children: [
                                                  b.jsx("textarea", {
                                                    value: d,
                                                    onChange: (W) =>
                                                      h(W.target.value),
                                                    placeholder:
                                                      "Enter your answer here...",
                                                    className:
                                                      "form-textarea answer-textarea",
                                                    rows: 4,
                                                    autoFocus: !0,
                                                  }),
                                                  b.jsxs("div", {
                                                    className:
                                                      "answer-box-actions",
                                                    children: [
                                                      b.jsx("button", {
                                                        onClick: () => M(j._id),
                                                        className:
                                                          "btn btn-primary",
                                                        disabled: !d.trim(),
                                                        children: j.answered
                                                          ? "Update Answer"
                                                          : "Submit Answer",
                                                      }),
                                                      b.jsx("button", {
                                                        onClick: V,
                                                        className:
                                                          "btn btn-secondary",
                                                        children: "Cancel",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        j.answered &&
                                          j.answer &&
                                          s !== j._id &&
                                          b.jsxs("div", {
                                            className: "existing-answer",
                                            children: [
                                              b.jsx("div", {
                                                className: "answer-label",
                                                children: "Answer:",
                                              }),
                                              b.jsx("div", {
                                                className: "answer-content",
                                                children: j.answer,
                                              }),
                                              j.answeredBy &&
                                                j.answeredBy !== "Admin" &&
                                                b.jsxs("div", {
                                                  className: "answer-by",
                                                  children: [
                                                    "by ",
                                                    j.answeredBy,
                                                  ],
                                                }),
                                            ],
                                          }),
                                        j.answered &&
                                          !j.answer &&
                                          b.jsx("div", {
                                            className: "answered-status",
                                            children: b.jsx("span", {
                                              className: "answered-badge",
                                              children: "Answered",
                                            }),
                                          }),
                                      ],
                                    },
                                    j._id,
                                  ),
                                ),
                        }),
                      ],
                    }),
                    m &&
                      b.jsx("div", {
                        className: "notification-modal",
                        children: b.jsxs("div", {
                          className: "notification-content",
                          children: [
                            b.jsx("div", {
                              className: "notification-icon error",
                              children: "⚠️",
                            }),
                            b.jsx("h3", { children: "Delete Question" }),
                            b.jsxs("p", {
                              children: [
                                "Are you sure you want to delete this question?",
                                b.jsx("br", {}),
                                b.jsxs("strong", {
                                  children: ['"', m.questionContent, '"'],
                                }),
                                b.jsx("br", {}),
                                "This action cannot be undone.",
                              ],
                            }),
                            b.jsxs("div", {
                              className: "notification-actions",
                              children: [
                                b.jsx("button", {
                                  onClick: G,
                                  className: "btn btn-secondary",
                                  children: "Cancel",
                                }),
                                b.jsx("button", {
                                  onClick: $,
                                  className: "btn btn-danger",
                                  children: "Delete Question",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                })
              : b.jsx("div", {
                  className: "error",
                  children: "Event not found",
                })
          : b.jsx("div", {
              className: "page-container",
              children: b.jsx("div", {
                className: "error",
                children:
                  "Admin access required. Contact an administrator if you believe this is an error.",
              }),
            })
        : b.jsx("div", {
            className: "page-container",
            children: b.jsx("div", {
              className: "error",
              children: "Please log in to access the admin dashboard.",
            }),
          })
      : b.jsx("div", {
          className: "page-container",
          children: b.jsx("div", {
            className: "loading",
            children: "Loading authentication...",
          }),
        });
  },
  jA = () => {
    const i = yi();
    return b.jsx("header", {
      className: "header",
      children: b.jsxs("div", {
        className: "header-container",
        children: [
          b.jsx("div", {
            className: "header-left",
            children: b.jsxs(vi, {
              to: "/",
              className: "logo",
              children: [
                b.jsx("span", { className: "logo-main", children: "liveq" }),
                b.jsx("span", {
                  className: "logo-tagline",
                  children: "Convex AMA Questions ",
                }),
              ],
            }),
          }),
          b.jsxs("nav", {
            className: "header-nav",
            children: [
              b.jsx(vi, {
                to: "/",
                className: `nav-link ${i.pathname === "/" ? "active" : ""}`,
                children: "Events",
              }),
              b.jsx(Gf, {
                children: b.jsx($f, {
                  mode: "modal",
                  children: b.jsx("button", {
                    className: "nav-link auth-button",
                    children: "Sign In",
                  }),
                }),
              }),
              b.jsx(Yf, {
                children: b.jsx(eC, {
                  appearance: { elements: { avatarBox: "w-8 h-8" } },
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function DA() {
  return b.jsx($_, {
    children: b.jsxs("div", {
      className: "App",
      children: [
        b.jsx(jA, {}),
        b.jsx("main", {
          children: b.jsxs(__, {
            children: [
              b.jsx(Hr, { path: "/", element: b.jsx(iA, {}) }),
              b.jsx(Hr, { path: "/event/:eventId", element: b.jsx(NA, {}) }),
              b.jsx(Hr, { path: "/admin", element: b.jsx(kA, {}) }),
              b.jsx(Hr, {
                path: "/admin/event/:eventTitle",
                element: b.jsx(UA, {}),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const zA = new k1("https://quixotic-mole-813.convex.cloud"),
  LA = "pk_test_ZmFtb3VzLXdhcnRob2ctNjguY2xlcmsuYWNjb3VudHMuZGV2JA";
dS.createRoot(document.getElementById("root")).render(
  b.jsx(H.StrictMode, {
    children: b.jsx(by, {
      publishableKey: LA,
      children: b.jsx(j1, { client: zA, children: b.jsx(DA, {}) }),
    }),
  }),
);
