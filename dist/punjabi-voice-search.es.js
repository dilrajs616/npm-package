import S, { useState as mr, useRef as Z } from "react";
var de = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Er() {
  if ($e)
    return U;
  $e = 1;
  var n = S, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(y, d, C) {
    var g, _ = {}, w = null, j = null;
    C !== void 0 && (w = "" + C), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (g in d)
      u.call(d, g) && !R.hasOwnProperty(g) && (_[g] = d[g]);
    if (y && y.defaultProps)
      for (g in d = y.defaultProps, d)
        _[g] === void 0 && (_[g] = d[g]);
    return { $$typeof: a, type: y, key: w, ref: j, props: _, _owner: b.current };
  }
  return U.Fragment = o, U.jsx = P, U.jsxs = P, U;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Rr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var n = S, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[N];
      return typeof r == "function" ? r : null;
    }
    var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var i = x.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Y = !1, te = !1, B = !1, D = !1, J = !1, ve;
    ve = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === R || J || e === b || e === C || e === g || D || e === j || Y || te || B || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === P || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case R:
          return "Profiler";
        case b:
          return "StrictMode";
        case C:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return pe(r) + ".Consumer";
          case P:
            var t = e;
            return pe(t._context) + ".Provider";
          case d:
            return Be(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : T(e.type) || "Memo";
          case w: {
            var c = e, f = c._payload, l = c._init;
            try {
              return T(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, L = 0, ge, he, be, ye, me, Ee, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Je() {
      {
        if (L === 0) {
          ge = console.log, he = console.info, be = console.warn, ye = console.error, me = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Ke() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ge
            }),
            info: A({}, e, {
              value: he
            }),
            warn: A({}, e, {
              value: be
            }),
            error: A({}, e, {
              value: ye
            }),
            group: A({}, e, {
              value: me
            }),
            groupCollapsed: A({}, e, {
              value: Ee
            }),
            groupEnd: A({}, e, {
              value: Re
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = x.ReactCurrentDispatcher, ae;
    function K(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            ae = i && i[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var ie = !1, q;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      q = new qe();
    }
    function Oe(e, r) {
      if (!e || ie)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      ie = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ne.current, ne.current = null, Je();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (E) {
              i = E;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (E) {
              i = E;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            i = E;
          }
          e();
        }
      } catch (E) {
        if (E && i && typeof E.stack == "string") {
          for (var s = E.stack.split(`
`), m = i.stack.split(`
`), v = s.length - 1, p = m.length - 1; v >= 1 && p >= 0 && s[v] !== m[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (s[v] !== m[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || s[v] !== m[p]) {
                    var O = `
` + s[v].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, O), O;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = f, Ke(), Error.prepareStackTrace = c;
      }
      var W = e ? e.displayName || e.name : "", F = W ? K(W) : "";
      return typeof e == "function" && q.set(e, F), F;
    }
    function Ge(e, r, t) {
      return Oe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Xe(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case C:
          return K("Suspense");
        case g:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case _:
            return G(e.type, r, t);
          case w: {
            var i = e, c = i._payload, f = i._init;
            try {
              return G(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, we = {}, Pe = x.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ze(e, r, t, i, c) {
      {
        var f = Function.call.bind(M);
        for (var l in e)
          if (f(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var m = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              s = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (X(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof s), X(null)), s instanceof Error && !(s.message in we) && (we[s.message] = !0, X(c), h("Failed %s type: %s", t, s.message), X(null));
          }
      }
    }
    var He = Array.isArray;
    function oe(e) {
      return He(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Te(e) {
      if (er(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), je(e);
    }
    var V = x.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ce, ue;
    ue = {};
    function tr(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = T(V.current.type);
        ue[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(V.current.type), e.ref), ue[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Se || (Se = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, i, c, f, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function sr(e, r, t, i, c) {
      {
        var f, l = {}, s = null, m = null;
        t !== void 0 && (Te(t), s = "" + t), nr(r) && (Te(r.key), s = "" + r.key), tr(r) && (m = r.ref, ar(r, c));
        for (f in r)
          M.call(r, f) && !rr.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            l[f] === void 0 && (l[f] = v[f]);
        }
        if (s || m) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(l, p), m && or(l, p);
        }
        return ur(e, s, m, c, i, V.current, l);
      }
    }
    var se = x.ReactCurrentOwner, xe = x.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function ke() {
      {
        if (se.current) {
          var e = T(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var De = {};
    function cr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (De[t])
          return;
        De[t] = !0;
        var i = "";
        e && e._owner && e._owner !== se.current && (i = " It was passed a child from " + T(e._owner.type) + "."), I(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), I(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            ce(i) && Ae(i, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = re(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              ce(l.value) && Ae(l.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = T(r);
          Ze(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var c = T(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            I(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ie = {};
    function We(e, r, t, i, c, f) {
      {
        var l = ze(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = lr(c);
          m ? s += m : s += ke();
          var v;
          e === null ? v = "null" : oe(e) ? v = "array" : e !== void 0 && e.$$typeof === a ? (v = "<" + (T(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var p = sr(e, r, t, c, f);
        if (p == null)
          return p;
        if (l) {
          var O = r.children;
          if (O !== void 0)
            if (i)
              if (oe(O)) {
                for (var W = 0; W < O.length; W++)
                  Fe(O[W], e);
                Object.freeze && Object.freeze(O);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(O, e);
        }
        if (M.call(r, "key")) {
          var F = T(e), E = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), fe = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[F + fe]) {
            var br = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, F, br, F), Ie[F + fe] = !0;
          }
        }
        return e === u ? dr(p) : fr(p), p;
      }
    }
    function vr(e, r, t) {
      return We(e, r, t, !0);
    }
    function pr(e, r, t) {
      return We(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    z.Fragment = u, z.jsx = gr, z.jsxs = hr;
  }()), z;
}
process.env.NODE_ENV === "production" ? de.exports = Er() : de.exports = Rr();
var Me = de.exports;
const _r = Me.Fragment, H = Me.jsx;
var Ve = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ye = S.createContext && /* @__PURE__ */ S.createContext(Ve), Or = ["attr", "size", "title"];
function wr(n, a) {
  if (n == null)
    return {};
  var o = Pr(n, a), u, b;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(n);
    for (b = 0; b < R.length; b++)
      u = R[b], !(a.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(n, u) && (o[u] = n[u]);
  }
  return o;
}
function Pr(n, a) {
  if (n == null)
    return {};
  var o = {};
  for (var u in n)
    if (Object.prototype.hasOwnProperty.call(n, u)) {
      if (a.indexOf(u) >= 0)
        continue;
      o[u] = n[u];
    }
  return o;
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u]);
    }
    return n;
  }, Q.apply(this, arguments);
}
function Le(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    a && (u = u.filter(function(b) {
      return Object.getOwnPropertyDescriptor(n, b).enumerable;
    })), o.push.apply(o, u);
  }
  return o;
}
function ee(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Le(Object(o), !0).forEach(function(u) {
      jr(n, u, o[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : Le(Object(o)).forEach(function(u) {
      Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(o, u));
    });
  }
  return n;
}
function jr(n, a, o) {
  return a = Tr(a), a in n ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = o, n;
}
function Tr(n) {
  var a = Sr(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Sr(n, a) {
  if (typeof n != "object" || !n)
    return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(n, a || "default");
    if (typeof u != "object")
      return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function Ue(n) {
  return n && n.map((a, o) => /* @__PURE__ */ S.createElement(a.tag, ee({
    key: o
  }, a.attr), Ue(a.child)));
}
function Cr(n) {
  return (a) => /* @__PURE__ */ S.createElement(xr, Q({
    attr: ee({}, n.attr)
  }, a), Ue(n.child));
}
function xr(n) {
  var a = (o) => {
    var {
      attr: u,
      size: b,
      title: R
    } = n, P = wr(n, Or), y = b || o.size || "1em", d;
    return o.className && (d = o.className), n.className && (d = (d ? d + " " : "") + n.className), /* @__PURE__ */ S.createElement("svg", Q({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, u, P, {
      className: d,
      style: ee(ee({
        color: n.color || o.color
      }, o.style), n.style),
      height: y,
      width: y,
      xmlns: "http://www.w3.org/2000/svg"
    }), R && /* @__PURE__ */ S.createElement("title", null, R), n.children);
  };
  return Ye !== void 0 ? /* @__PURE__ */ S.createElement(Ye.Consumer, null, (o) => a(o)) : a(Ve);
}
function kr(n) {
  return Cr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Microphone_On" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z" }, child: [] }, { tag: "path", attr: { d: "M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z" }, child: [] }] }] }] })(n);
}
function Ar({
  activeMicColor: n = "white",
  micDefaultColor: a = "white",
  Mic: o,
  micSize: u,
  initials: b,
  micDefaultBGColor: R = "#01669b",
  micActiveBGColor: P = "#f39c1d",
  borderRadius: y,
  state: d,
  setState: C
}) {
  const [g, _] = mr(!1), w = Z(null), j = Z(null), $ = Z(null);
  let N = [];
  const re = Z(null);
  async function x(h) {
    g ? (j.current.stop(), w.current.getTracks().forEach((k) => k.stop()), _(!1)) : (h.preventDefault(), w.current = await navigator.mediaDevices.getUserMedia({
      audio: !0
    }), j.current = new MediaRecorder(w.current), j.current.ondataavailable = (k) => {
      N.push(k.data);
    }, j.current.onstop = async () => {
      let k = new Blob(N, { type: "audio/wav" });
      if (k) {
        let Y = new FileReader();
        N = [], Y.readAsDataURL(k), Y.onload = async () => {
          var B;
          $.current = (B = Y.result) == null ? void 0 : B.toString().split(",")[1];
          let te = "https://punjabi-transcript-82115345315.asia-southeast2.run.app/transcript";
          try {
            let D = await fetch(te, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                audioData: $.current,
                initials: b ? !0 : b === !1 ? !1 : void 0
              })
            });
            if (!D.ok)
              console.log(D.status);
            else {
              let J = await D.json();
              re.current = J, C(J.transcript);
            }
          } catch (D) {
            console.log(D.message);
          }
        };
      }
    }, j.current.start(), _(!0));
  }
  return /* @__PURE__ */ H(_r, { children: /* @__PURE__ */ H("div", { className: "mic-parent-container", onClick: x, children: o ? /* @__PURE__ */ H(
    o,
    {
      size: u,
      color: g ? n : a,
      style: {
        background: g ? P : R,
        borderRadius: `${y || 0}`
      }
    }
  ) : /* @__PURE__ */ H(
    kr,
    {
      size: u,
      color: g ? n : a,
      style: {
        background: g ? P : R,
        borderRadius: `${y || 0}`
      }
    }
  ) }) });
}
export {
  Ar as default
};
