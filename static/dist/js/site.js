!function (t) {
    function e(i) {
        if (n[i])return n[i].exports;
        var o = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "/site_media/static", e(0)
}({
    0: function (t, exports, e) {
        "use strict";
        window.jQuery = window.$ = e(86), e(87), e(100)
    }, 86: function (t, exports, e) {
        var n, i;
        !function (e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
                if (!t.document)throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(e)
        }("undefined" != typeof window ? window : void 0, function (e, o) {
            function r(t) {
                var e = "length"in t && t.length, n = it.type(t);
                return "function" === n || it.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }

            function s(t, e, n) {
                if (it.isFunction(e))return it.grep(t, function (t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType)return it.grep(t, function (t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (pt.test(e))return it.filter(e, t, n);
                    e = it.filter(e, t)
                }
                return it.grep(t, function (t) {
                    return G.call(e, t) >= 0 !== n
                })
            }

            function a(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function l(t) {
                var e = yt[t] = {};
                return it.each(t.match(vt) || [], function (t, n) {
                    e[n] = !0
                }), e
            }

            function u() {
                et.removeEventListener("DOMContentLoaded", u, !1), e.removeEventListener("load", u, !1), it.ready()
            }

            function c() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = it.expando + c.uid++
            }

            function p(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(Et, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? it.parseJSON(n) : n
                    } catch (o) {
                    }
                    Tt.set(t, e, n)
                } else n = void 0;
                return n
            }

            function d() {
                return !0
            }

            function f() {
                return !1
            }

            function h() {
                try {
                    return et.activeElement
                } catch (t) {
                }
            }

            function g(t, e) {
                return it.nodeName(t, "table") && it.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function m(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function v(t) {
                var e = Wt.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function y(t, e) {
                for (var n = 0, i = t.length; i > n; n++)wt.set(t[n], "globalEval", !e || wt.get(e[n], "globalEval"))
            }

            function b(t, e) {
                var n, i, o, r, s, a, l, u;
                if (1 === e.nodeType) {
                    if (wt.hasData(t) && (r = wt.access(t), s = wt.set(e, r), u = r.events)) {
                        delete s.handle, s.events = {};
                        for (o in u)for (n = 0, i = u[o].length; i > n; n++)it.event.add(e, o, u[o][n])
                    }
                    Tt.hasData(t) && (a = Tt.access(t), l = it.extend({}, a), Tt.set(e, l))
                }
            }

            function x(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && it.nodeName(t, e) ? it.merge([t], n) : n
            }

            function w(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && St.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }

            function T(t, n) {
                var i, o = it(n.createElement(t)).appendTo(n.body), r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : it.css(o[0], "display");
                return o.detach(), r
            }

            function C(t) {
                var e = et, n = _t[t];
                return n || (n = T(t, e), "none" !== n && n || (Ut = (Ut || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), n = T(t, e), Ut.detach()), _t[t] = n), n
            }

            function E(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || Xt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || it.contains(t.ownerDocument, t) || (s = it.style(t, e)), Vt.test(s) && zt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
            }

            function k(t, e) {
                return {
                    get: function () {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function N(t, e) {
                if (e in t)return e;
                for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Zt.length; o--;)if (e = Zt[o] + n, e in t)return e;
                return i
            }

            function S(t, e, n) {
                var i = Yt.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }

            function D(t, e, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += it.css(t, n + kt[r], !0, o)), i ? ("content" === n && (s -= it.css(t, "padding" + kt[r], !0, o)), "margin" !== n && (s -= it.css(t, "border" + kt[r] + "Width", !0, o))) : (s += it.css(t, "padding" + kt[r], !0, o), "padding" !== n && (s += it.css(t, "border" + kt[r] + "Width", !0, o)));
                return s
            }

            function A(t, e, n) {
                var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = Xt(t), s = "border-box" === it.css(t, "boxSizing", !1, r);
                if (0 >= o || null == o) {
                    if (o = E(t, e, r), (0 > o || null == o) && (o = t.style[e]), Vt.test(o))return o;
                    i = s && (tt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
                }
                return o + D(t, e, n || (s ? "border" : "content"), i, r) + "px"
            }

            function j(t, e) {
                for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (r[s] = wt.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Nt(i) && (r[s] = wt.access(i, "olddisplay", C(i.nodeName)))) : (o = Nt(i), "none" === n && o || wt.set(i, "olddisplay", o ? n : it.css(i, "display"))));
                for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
                return t
            }

            function O(t, e, n, i, o) {
                return new O.prototype.init(t, e, n, i, o)
            }

            function I() {
                return setTimeout(function () {
                    te = void 0
                }), te = it.now()
            }

            function L(t, e) {
                var n, i = 0, o = {height: t};
                for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = kt[i], o["margin" + n] = o["padding" + n] = t;
                return e && (o.opacity = o.width = t), o
            }

            function R(t, e, n) {
                for (var i, o = (se[e] || []).concat(se["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, e, t))return i
            }

            function H(t, e, n) {
                var i, o, r, s, a, l, u, c, p = this, d = {}, f = t.style, h = t.nodeType && Nt(t), g = wt.get(t, "fxshow");
                n.queue || (a = it._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, it.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = it.css(t, "display"), c = "none" === u ? wt.get(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === it.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (i in e)if (o = e[i], ne.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i])continue;
                        h = !0
                    }
                    d[i] = g && g[i] || it.style(t, i)
                } else u = void 0;
                if (it.isEmptyObject(d))"inline" === ("none" === u ? C(t.nodeName) : u) && (f.display = u); else {
                    g ? "hidden"in g && (h = g.hidden) : g = wt.access(t, "fxshow", {}), r && (g.hidden = !h), h ? it(t).show() : p.done(function () {
                        it(t).hide()
                    }), p.done(function () {
                        var e;
                        wt.remove(t, "fxshow");
                        for (e in d)it.style(t, e, d[e])
                    });
                    for (i in d)s = R(h ? g[i] : 0, i, p), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function P(t, e) {
                var n, i, o, r, s;
                for (n in t)if (i = it.camelCase(n), o = e[i], r = t[n], it.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = it.cssHooks[i], s && "expand"in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r)n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
            }

            function q(t, e, n) {
                var i, o, r = 0, s = re.length, a = it.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (o)return !1;
                    for (var e = te || I(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
                }, u = a.promise({
                    elem: t,
                    props: it.extend({}, e),
                    opts: it.extend(!0, {specialEasing: {}}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: te || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = it.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0, i = e ? u.tweens.length : 0;
                        if (o)return this;
                        for (o = !0; i > n; n++)u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }), c = u.props;
                for (P(c, u.opts.specialEasing); s > r; r++)if (i = re[r].call(u, t, c, u.opts))return i;
                return it.map(c, R, u), it.isFunction(u.opts.start) && u.opts.start.call(t, u), it.fx.timer(it.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function F(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, o = 0, r = e.toLowerCase().match(vt) || [];
                    if (it.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function W(t, e, n, i) {
                function o(a) {
                    var l;
                    return r[a] = !0, it.each(t[a] || [], function (t, a) {
                        var u = a(e, n, i);
                        return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                    }), l
                }

                var r = {}, s = t === Ce;
                return o(e.dataTypes[0]) || !r["*"] && o("*")
            }

            function M(t, e) {
                var n, i, o = it.ajaxSettings.flatOptions || {};
                for (n in e)void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
                return i && it.extend(!0, t, i), t
            }

            function B(t, e, n) {
                for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)for (o in a)if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
                if (l[0]in n)r = l[0]; else {
                    for (o in n) {
                        if (!l[0] || t.converters[o + " " + l[0]]) {
                            r = o;
                            break
                        }
                        s || (s = o)
                    }
                    r = r || s
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
            }

            function U(t, e, n, i) {
                var o, r, s, a, l, u = {}, c = t.dataTypes.slice();
                if (c[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
                for (r = c.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                    if (s = u[l + " " + r] || u["* " + r], !s)for (o in u)if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
                    if (s !== !0)if (s && t["throws"])e = s(e); else try {
                        e = s(e)
                    } catch (p) {
                        return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + r}
                    }
                }
                return {state: "success", data: e}
            }

            function _(t, e, n, i) {
                var o;
                if (it.isArray(e))it.each(e, function (e, o) {
                    n || Se.test(t) ? i(t, o) : _(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
                }); else if (n || "object" !== it.type(e))i(t, e); else for (o in e)_(t + "[" + o + "]", e[o], n, i)
            }

            function z(t) {
                return it.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }

            var V = [], X = V.slice, Q = V.concat, Y = V.push, G = V.indexOf, K = {}, J = K.toString, Z = K.hasOwnProperty, tt = {}, et = e.document, nt = "2.1.4", it = function Be(t, e) {
                return new Be.fn.init(t, e)
            }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rt = /^-ms-/, st = /-([\da-z])/gi, at = function (t, e) {
                return e.toUpperCase()
            };
            it.fn = it.prototype = {
                jquery: nt, constructor: it, selector: "", length: 0, toArray: function () {
                    return X.call(this)
                }, get: function (t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
                }, pushStack: function (t) {
                    var e = it.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t, e) {
                    return it.each(this, t, e)
                }, map: function (t) {
                    return this.pushStack(it.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                }, slice: function () {
                    return this.pushStack(X.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: Y, sort: V.sort, splice: V.splice
            }, it.extend = it.fn.extend = function () {
                var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || it.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (u && i && (it.isPlainObject(i) || (o = it.isArray(i))) ? (o ? (o = !1, r = n && it.isArray(n) ? n : []) : r = n && it.isPlainObject(n) ? n : {}, s[e] = it.extend(u, r, i)) : void 0 !== i && (s[e] = i));
                return s
            }, it.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {
                },
                isFunction: function (t) {
                    return "function" === it.type(t)
                },
                isArray: Array.isArray,
                isWindow: function (t) {
                    return null != t && t === t.window
                },
                isNumeric: function (t) {
                    return !it.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function (t) {
                    return "object" !== it.type(t) || t.nodeType || it.isWindow(t) ? !1 : t.constructor && !Z.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[J.call(t)] || "object" : typeof t
                },
                globalEval: function (t) {
                    var e, n = eval;
                    t = it.trim(t), t && (1 === t.indexOf("use strict") ? (e = et.createElement("script"), e.text = t, et.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                },
                camelCase: function (t) {
                    return t.replace(rt, "ms-").replace(st, at)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e, n) {
                    var i, o = 0, s = t.length, a = r(t);
                    if (n) {
                        if (a)for (; s > o && (i = e.apply(t[o], n), i !== !1); o++); else for (o in t)if (i = e.apply(t[o], n), i === !1)break
                    } else if (a)for (; s > o && (i = e.call(t[o], o, t[o]), i !== !1); o++); else for (o in t)if (i = e.call(t[o], o, t[o]), i === !1)break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(ot, "")
                },
                makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (r(Object(t)) ? it.merge(n, "string" == typeof t ? [t] : t) : Y.call(n, t)), n
                },
                inArray: function (t, e, n) {
                    return null == e ? -1 : G.call(e, t, n)
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, o = t.length; n > i; i++)t[o++] = e[i];
                    return t.length = o, t
                },
                grep: function (t, e, n) {
                    for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
                    return o
                },
                map: function (t, e, n) {
                    var i, o = 0, s = t.length, a = r(t), l = [];
                    if (a)for (; s > o; o++)i = e(t[o], o, n), null != i && l.push(i); else for (o in t)i = e(t[o], o, n), null != i && l.push(i);
                    return Q.apply([], l)
                },
                guid: 1,
                proxy: function Ue(t, e) {
                    var n, i, Ue;
                    return "string" == typeof e && (n = t[e], e = t, t = n), it.isFunction(t) ? (i = X.call(arguments, 2), Ue = function () {
                        return t.apply(e || this, i.concat(X.call(arguments)))
                    }, Ue.guid = t.guid = t.guid || it.guid++, Ue) : void 0
                },
                now: Date.now,
                support: tt
            }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                K["[object " + e + "]"] = e.toLowerCase()
            });
            var lt = /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
                function (t) {
                    function e(t, e, n, i) {
                        var o, r, s, a, l, u, p, f, h, g;
                        if ((e ? e.ownerDocument || e : M) !== I && O(e), e = e || I, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return n;
                        if (!i && R) {
                            if (11 !== a && (o = bt.exec(t)))if (s = o[1]) {
                                if (9 === a) {
                                    if (r = e.getElementById(s), !r || !r.parentNode)return n;
                                    if (r.id === s)return n.push(r), n
                                } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s)return n.push(r), n
                            } else {
                                if (o[2])return Z.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = o[3]) && w.getElementsByClassName)return Z.apply(n, e.getElementsByClassName(s)), n
                            }
                            if (w.qsa && (!H || !H.test(t))) {
                                if (f = p = W, h = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                    for (u = k(t), (p = e.getAttribute("id")) ? f = p.replace(wt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + d(u[l]);
                                    h = xt.test(t) && c(e.parentNode) || e, g = u.join(",")
                                }
                                if (g)try {
                                    return Z.apply(n, h.querySelectorAll(g)), n
                                } catch (m) {
                                } finally {
                                    p || e.removeAttribute("id")
                                }
                            }
                        }
                        return S(t.replace(ut, "$1"), e, n, i)
                    }

                    function n() {
                        function t(n, i) {
                            return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }

                        var e = [];
                        return t
                    }

                    function i(t) {
                        return t[W] = !0, t
                    }

                    function o(t) {
                        var e = I.createElement("div");
                        try {
                            return !!t(e)
                        } catch (n) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function r(t, e) {
                        for (var n = t.split("|"), i = t.length; i--;)T.attrHandle[n[i]] = e
                    }

                    function s(t, e) {
                        var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                        if (i)return i;
                        if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                        return t ? 1 : -1
                    }

                    function a(t) {
                        return function (e) {
                            var n = e.nodeName.toLowerCase();
                            return "input" === n && e.type === t
                        }
                    }

                    function l(t) {
                        return function (e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t
                        }
                    }

                    function u(t) {
                        return i(function (e) {
                            return e = +e, i(function (n, i) {
                                for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                            })
                        })
                    }

                    function c(t) {
                        return t && "undefined" != typeof t.getElementsByTagName && t
                    }

                    function p() {
                    }

                    function d(t) {
                        for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                        return i
                    }

                    function f(t, e, n) {
                        var i = e.dir, o = n && "parentNode" === i, r = U++;
                        return e.first ? function (e, n, r) {
                            for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                        } : function (e, n, s) {
                            var a, l, u = [B, r];
                            if (s) {
                                for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                            } else for (; e = e[i];)if (1 === e.nodeType || o) {
                                if (l = e[W] || (e[W] = {}), (a = l[i]) && a[0] === B && a[1] === r)return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s))return !0
                            }
                        }
                    }

                    function h(t) {
                        return t.length > 1 ? function (e, n, i) {
                            for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                            return !0
                        } : t[0]
                    }

                    function g(t, n, i) {
                        for (var o = 0, r = n.length; r > o; o++)e(t, n[o], i);
                        return i
                    }

                    function m(t, e, n, i, o) {
                        for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
                        return s
                    }

                    function v(t, e, n, o, r, s) {
                        return o && !o[W] && (o = v(o)), r && !r[W] && (r = v(r, s)), i(function (i, s, a, l) {
                            var u, c, p, d = [], f = [], h = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, d, t, a, l), b = n ? r || (i ? t : h || o) ? [] : s : y;
                            if (n && n(y, b, a, l), o)for (u = m(b, f), o(u, [], a, l), c = u.length; c--;)(p = u[c]) && (b[f[c]] = !(y[f[c]] = p));
                            if (i) {
                                if (r || t) {
                                    if (r) {
                                        for (u = [], c = b.length; c--;)(p = b[c]) && u.push(y[c] = p);
                                        r(null, b = [], u, l)
                                    }
                                    for (c = b.length; c--;)(p = b[c]) && (u = r ? et(i, p) : d[c]) > -1 && (i[u] = !(s[u] = p))
                                }
                            } else b = m(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : Z.apply(s, b)
                        })
                    }

                    function y(t) {
                        for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                            return t === e
                        }, s, !0), u = f(function (t) {
                            return et(e, t) > -1
                        }, s, !0), c = [function (t, n, i) {
                            var o = !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                            return e = null, o
                        }]; o > a; a++)if (n = T.relative[t[a].type])c = [f(h(c), n)]; else {
                            if (n = T.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                                for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                                return v(a > 1 && h(c), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(ut, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                            }
                            c.push(n)
                        }
                        return h(c)
                    }

                    function b(t, n) {
                        var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, u) {
                            var c, p, d, f = 0, h = "0", g = i && [], v = [], y = D, b = i || r && T.find.TAG("*", u), x = B += null == y ? 1 : Math.random() || .1, w = b.length;
                            for (u && (D = s !== I && s); h !== w && null != (c = b[h]); h++) {
                                if (r && c) {
                                    for (p = 0; d = t[p++];)if (d(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                    u && (B = x)
                                }
                                o && ((c = !d && c) && f--, i && g.push(c))
                            }
                            if (f += h, o && h !== f) {
                                for (p = 0; d = n[p++];)d(g, v, s, a);
                                if (i) {
                                    if (f > 0)for (; h--;)g[h] || v[h] || (v[h] = K.call(l));
                                    v = m(v)
                                }
                                Z.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                            }
                            return u && (B = x, D = y), g
                        };
                        return o ? i(s) : s
                    }

                    var x, w, T, C, E, k, N, S, D, A, j, O, I, L, R, H, P, q, F, W = "sizzle" + 1 * new Date, M = t.document, B = 0, U = 0, _ = n(), z = n(), V = n(), X = function (t, e) {
                        return t === e && (j = !0), 0
                    }, Q = 1 << 31, Y = {}.hasOwnProperty, G = [], K = G.pop, J = G.push, Z = G.push, tt = G.slice, et = function (t, e) {
                        for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                        return -1
                    }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = ot.replace("w", "w#"), st = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]", at = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)", lt = new RegExp(it + "+", "g"), ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), ct = new RegExp("^" + it + "*," + it + "*"), pt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ft = new RegExp(at), ht = new RegExp("^" + rt + "$"), gt = {
                        ID: new RegExp("^#(" + ot + ")"),
                        CLASS: new RegExp("^\\.(" + ot + ")"),
                        TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + st),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                    }, mt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/, bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /[+~]/, wt = /'|\\/g, Tt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), Ct = function (t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, Et = function () {
                        O()
                    };
                    try {
                        Z.apply(G = tt.call(M.childNodes), M.childNodes), G[M.childNodes.length].nodeType
                    } catch ($t) {
                        Z = {
                            apply: G.length ? function (t, e) {
                                J.apply(t, tt.call(e))
                            } : function (t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }
                    w = e.support = {}, E = e.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return e ? "HTML" !== e.nodeName : !1
                    }, O = e.setDocument = function (t) {
                        var e, n, i = t ? t.ownerDocument || t : M;
                        return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Et, !1) : n.attachEvent && n.attachEvent("onunload", Et)), R = !E(i), w.attributes = o(function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), w.getElementsByTagName = o(function (t) {
                            return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                        }), w.getElementsByClassName = yt.test(i.getElementsByClassName), w.getById = o(function (t) {
                            return L.appendChild(t).id = W, !i.getElementsByName || !i.getElementsByName(W).length
                        }), w.getById ? (T.find.ID = function (t, e) {
                            if ("undefined" != typeof e.getElementById && R) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }, T.filter.ID = function (t) {
                            var e = t.replace(Tt, Ct);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete T.find.ID, T.filter.ID = function (t) {
                            var e = t.replace(Tt, Ct);
                            return function (t) {
                                var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }), T.find.TAG = w.getElementsByTagName ? function (t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var n, i = [], o = 0, r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[o++];)1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }, T.find.CLASS = w.getElementsByClassName && function (t, e) {
                                return R ? e.getElementsByClassName(t) : void 0
                            }, P = [], H = [], (w.qsa = yt.test(i.querySelectorAll)) && (o(function (t) {
                            L.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll("[id~=" + W + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || H.push(".#.+[+~]")
                        }), o(function (t) {
                            var e = i.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                        })), (w.matchesSelector = yt.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (t) {
                            w.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), P.push("!=", at)
                        }), H = H.length && new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), e = yt.test(L.compareDocumentPosition), F = e || yt.test(L.contains) ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function (t, e) {
                            if (e)for (; e = e.parentNode;)if (e === t)return !0;
                            return !1
                        }, X = e ? function (t, e) {
                            if (t === e)return j = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === M && F(M, t) ? -1 : e === i || e.ownerDocument === M && F(M, e) ? 1 : A ? et(A, t) - et(A, e) : 0 : 4 & n ? -1 : 1)
                        } : function (t, e) {
                            if (t === e)return j = !0, 0;
                            var n, o = 0, r = t.parentNode, a = e.parentNode, l = [t], u = [e];
                            if (!r || !a)return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : A ? et(A, t) - et(A, e) : 0;
                            if (r === a)return s(t, e);
                            for (n = t; n = n.parentNode;)l.unshift(n);
                            for (n = e; n = n.parentNode;)u.unshift(n);
                            for (; l[o] === u[o];)o++;
                            return o ? s(l[o], u[o]) : l[o] === M ? -1 : u[o] === M ? 1 : 0
                        }, i) : I
                    }, e.matches = function (t, n) {
                        return e(t, null, null, n)
                    }, e.matchesSelector = function (t, n) {
                        if ((t.ownerDocument || t) !== I && O(t), n = n.replace(dt, "='$1']"), w.matchesSelector && R && (!P || !P.test(n)) && (!H || !H.test(n)))try {
                            var i = q.call(t, n);
                            if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                        } catch (o) {
                        }
                        return e(n, I, null, [t]).length > 0
                    }, e.contains = function (t, e) {
                        return (t.ownerDocument || t) !== I && O(t), F(t, e)
                    }, e.attr = function (t, e) {
                        (t.ownerDocument || t) !== I && O(t);
                        var n = T.attrHandle[e.toLowerCase()], i = n && Y.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
                        return void 0 !== i ? i : w.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }, e.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, e.uniqueSort = function (t) {
                        var e, n = [], i = 0, o = 0;
                        if (j = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(X), j) {
                            for (; e = t[o++];)e === t[o] && (i = n.push(o));
                            for (; i--;)t.splice(n[i], 1)
                        }
                        return A = null, t
                    }, C = e.getText = function (t) {
                        var e, n = "", i = 0, o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent)return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
                            } else if (3 === o || 4 === o)return t.nodeValue
                        } else for (; e = t[i++];)n += C(e);
                        return n
                    }, T = e.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: gt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(Tt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(Tt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            }, CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                            }, PSEUDO: function (t) {
                                var e, n = !t[6] && t[2];
                                return gt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(Tt, Ct).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            }, CLASS: function (t) {
                                var e = _[t + " "];
                                return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && _(t, function (t) {
                                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                    })
                            }, ATTR: function (t, n, i) {
                                return function (o) {
                                    var r = e.attr(o, t);
                                    return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(lt, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                                }
                            }, CHILD: function (t, e, n, i, o) {
                                var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                                return 1 === i && 0 === o ? function (t) {
                                    return !!t.parentNode
                                } : function (e, n, l) {
                                    var u, c, p, d, f, h, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                                    if (m) {
                                        if (r) {
                                            for (; g;) {
                                                for (p = e; p = p[g];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                                h = g = "only" === t && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                            for (c = m[W] || (m[W] = {}), u = c[t] || [], f = u[0] === B && u[1], d = u[0] === B && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (d = f = 0) || h.pop();)if (1 === p.nodeType && ++d && p === e) {
                                                c[t] = [B, f, d];
                                                break
                                            }
                                        } else if (y && (u = (e[W] || (e[W] = {}))[t]) && u[0] === B)d = u[1]; else for (; (p = ++f && p && p[g] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[W] || (p[W] = {}))[t] = [B, d]), p !== e)););
                                        return d -= o, d === i || d % i === 0 && d / i >= 0
                                    }
                                }
                            }, PSEUDO: function (t, n) {
                                var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                    for (var i, o = r(t, n), s = o.length; s--;)i = et(t, o[s]), t[i] = !(e[i] = o[s])
                                }) : function (t) {
                                    return r(t, 0, o)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: i(function (t) {
                                var e = [], n = [], o = N(t.replace(ut, "$1"));
                                return o[W] ? i(function (t, e, n, i) {
                                    for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                }) : function (t, i, r) {
                                    return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                                }
                            }), has: i(function (t) {
                                return function (n) {
                                    return e(t, n).length > 0
                                }
                            }), contains: i(function (t) {
                                return t = t.replace(Tt, Ct), function (e) {
                                    return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                                }
                            }), lang: i(function (t) {
                                return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Tt, Ct).toLowerCase(), function (e) {
                                    var n;
                                    do if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                            }), target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            }, root: function (t) {
                                return t === L
                            }, focus: function (t) {
                                return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            }, enabled: function (t) {
                                return t.disabled === !1
                            }, disabled: function (t) {
                                return t.disabled === !0
                            }, checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            }, selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                            }, empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                                return !0
                            }, parent: function (t) {
                                return !T.pseudos.empty(t)
                            }, header: function (t) {
                                return vt.test(t.nodeName)
                            }, input: function (t) {
                                return mt.test(t.nodeName)
                            }, button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            }, text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            }, first: u(function () {
                                return [0]
                            }), last: u(function (t, e) {
                                return [e - 1]
                            }), eq: u(function (t, e, n) {
                                return [0 > n ? n + e : n]
                            }), even: u(function (t, e) {
                                for (var n = 0; e > n; n += 2)t.push(n);
                                return t
                            }), odd: u(function (t, e) {
                                for (var n = 1; e > n; n += 2)t.push(n);
                                return t
                            }), lt: u(function (t, e, n) {
                                for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                                return t
                            }), gt: u(function (t, e, n) {
                                for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                                return t
                            })
                        }
                    }, T.pseudos.nth = T.pseudos.eq;
                    for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[x] = a(x);
                    for (x in{submit: !0, reset: !0})T.pseudos[x] = l(x);
                    return p.prototype = T.filters = T.pseudos, T.setFilters = new p, k = e.tokenize = function (t, n) {
                        var i, o, r, s, a, l, u, c = z[t + " "];
                        if (c)return n ? 0 : c.slice(0);
                        for (a = t, l = [], u = T.preFilter; a;) {
                            (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = pt.exec(a)) && (i = o.shift(), r.push({
                                value: i,
                                type: o[0].replace(ut, " ")
                            }), a = a.slice(i.length));
                            for (s in T.filter)!(o = gt[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                                value: i,
                                type: s,
                                matches: o
                            }), a = a.slice(i.length));
                            if (!i)break
                        }
                        return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
                    }, N = e.compile = function (t, e) {
                        var n, i = [], o = [], r = V[t + " "];
                        if (!r) {
                            for (e || (e = k(t)), n = e.length; n--;)r = y(e[n]), r[W] ? i.push(r) : o.push(r);
                            r = V(t, b(o, i)), r.selector = t
                        }
                        return r
                    }, S = e.select = function (t, e, n, i) {
                        var o, r, s, a, l, u = "function" == typeof t && t, p = !i && k(t = u.selector || t);
                        if (n = n || [], 1 === p.length) {
                            if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && R && T.relative[r[1].type]) {
                                if (e = (T.find.ID(s.matches[0].replace(Tt, Ct), e) || [])[0], !e)return n;
                                u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                            }
                            for (o = gt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)if ((l = T.find[a]) && (i = l(s.matches[0].replace(Tt, Ct), xt.test(r[0].type) && c(e.parentNode) || e))) {
                                if (r.splice(o, 1), t = i.length && d(r), !t)return Z.apply(n, i), n;
                                break
                            }
                        }
                        return (u || N(t, p))(i, e, !R, n, xt.test(t) && c(e.parentNode) || e), n
                    }, w.sortStable = W.split("").sort(X).join("") === W, w.detectDuplicates = !!j, O(), w.sortDetached = o(function (t) {
                        return 1 & t.compareDocumentPosition(I.createElement("div"))
                    }), o(function (t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || r("type|href|height|width", function (t, e, n) {
                        return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), w.attributes && o(function (t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || r("value", function (t, e, n) {
                        return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                    }), o(function (t) {
                        return null == t.getAttribute("disabled")
                    }) || r(nt, function (t, e, n) {
                        var i;
                        return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }), e
                }(e);
            it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
            var ut = it.expr.match.needsContext, ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
            it.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? it.find.matchesSelector(i, t) ? [i] : [] : it.find.matches(t, it.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, it.fn.extend({
                find: function (t) {
                    var e, n = this.length, i = [], o = this;
                    if ("string" != typeof t)return this.pushStack(it(t).filter(function () {
                        for (e = 0; n > e; e++)if (it.contains(o[e], this))return !0
                    }));
                    for (e = 0; n > e; e++)it.find(t, o[e], i);
                    return i = this.pushStack(n > 1 ? it.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
                }, filter: function (t) {
                    return this.pushStack(s(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(s(this, t || [], !0))
                }, is: function (t) {
                    return !!s(this, "string" == typeof t && ut.test(t) ? it(t) : t || [], !1).length
                }
            });
            var dt, ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ht = it.fn.init = function (t, e) {
                var n, i;
                if (!t)return this;
                if ("string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ft.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof it ? e[0] : e, it.merge(this, it.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), ct.test(n[1]) && it.isPlainObject(e))for (n in e)it.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return i = et.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = et, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : it.isFunction(t) ? "undefined" != typeof dt.ready ? dt.ready(t) : t(it) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), it.makeArray(t, this))
            };
            ht.prototype = it.fn, dt = it(et);
            var gt = /^(?:parents|prev(?:Until|All))/, mt = {children: !0, contents: !0, next: !0, prev: !0};
            it.extend({
                dir: function (t, e, n) {
                    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                        if (o && it(t).is(n))break;
                        i.push(t)
                    }
                    return i
                }, sibling: function (t, e) {
                    for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), it.fn.extend({
                has: function (t) {
                    var e = it(t, this), n = e.length;
                    return this.filter(function () {
                        for (var t = 0; n > t; t++)if (it.contains(this, e[t]))return !0
                    })
                }, closest: function (t, e) {
                    for (var n, i = 0, o = this.length, r = [], s = ut.test(t) || "string" != typeof t ? it(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
                    return this.pushStack(r.length > 1 ? it.unique(r) : r)
                }, index: function (t) {
                    return t ? "string" == typeof t ? G.call(it(t), this[0]) : G.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(it.unique(it.merge(this.get(), it(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), it.each({
                parent: function _e(t) {
                    var _e = t.parentNode;
                    return _e && 11 !== _e.nodeType ? _e : null
                }, parents: function (t) {
                    return it.dir(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return it.dir(t, "parentNode", n)
                }, next: function (t) {
                    return a(t, "nextSibling")
                }, prev: function (t) {
                    return a(t, "previousSibling")
                }, nextAll: function (t) {
                    return it.dir(t, "nextSibling")
                }, prevAll: function (t) {
                    return it.dir(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return it.dir(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return it.dir(t, "previousSibling", n)
                }, siblings: function (t) {
                    return it.sibling((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return it.sibling(t.firstChild)
                }, contents: function (t) {
                    return t.contentDocument || it.merge([], t.childNodes)
                }
            }, function (t, e) {
                it.fn[t] = function (n, i) {
                    var o = it.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = it.filter(i, o)), this.length > 1 && (mt[t] || it.unique(o), gt.test(t) && o.reverse()), this.pushStack(o)
                }
            });
            var vt = /\S+/g, yt = {};
            it.Callbacks = function (t) {
                t = "string" == typeof t ? yt[t] || l(t) : it.extend({}, t);
                var e, n, i, o, r, s, a = [], u = !t.once && [], c = function d(l) {
                    for (e = t.memory && l, n = !0, s = o || 0, o = 0, r = a.length, i = !0; a && r > s; s++)if (a[s].apply(l[0], l[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                    i = !1, a && (u ? u.length && d(u.shift()) : e ? a = [] : p.disable())
                }, p = {
                    add: function () {
                        if (a) {
                            var n = a.length;
                            !function s(e) {
                                it.each(e, function (e, n) {
                                    var i = it.type(n);
                                    "function" === i ? t.unique && p.has(n) || a.push(n) : n && n.length && "string" !== i && s(n)
                                })
                            }(arguments), i ? r = a.length : e && (o = n, c(e))
                        }
                        return this
                    }, remove: function () {
                        return a && it.each(arguments, function (t, e) {
                            for (var n; (n = it.inArray(e, a, n)) > -1;)a.splice(n, 1), i && (r >= n && r--, s >= n && s--)
                        }), this
                    }, has: function (t) {
                        return t ? it.inArray(t, a) > -1 : !(!a || !a.length)
                    }, empty: function () {
                        return a = [], r = 0, this
                    }, disable: function () {
                        return a = u = e = void 0, this
                    }, disabled: function () {
                        return !a
                    }, lock: function () {
                        return u = void 0, e || p.disable(), this
                    }, locked: function () {
                        return !u
                    }, fireWith: function (t, e) {
                        return !a || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? u.push(e) : c(e)), this
                    }, fire: function () {
                        return p.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return p
            }, it.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]], n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return it.Deferred(function (n) {
                                it.each(e, function (e, r) {
                                    var s = it.isFunction(t[e]) && t[e];
                                    o[r[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && it.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? it.extend(t, i) : i
                        }
                    }, o = {};
                    return i.pipe = i.then, it.each(e, function (t, r) {
                        var s = r[2], a = r[3];
                        i[r[1]] = s.add, a && s.add(function () {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                            return o[r[0] + "With"](this === o ? i : this, arguments), this
                        }, o[r[0] + "With"] = s.fireWith
                    }), i.promise(o), t && t.call(o, o), o
                }, when: function (t) {
                    var e, n, i, o = 0, r = X.call(arguments), s = r.length, a = 1 !== s || t && it.isFunction(t.promise) ? s : 0, l = 1 === a ? t : it.Deferred(), u = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                    if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && it.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
                    return a || l.resolveWith(i, r), l.promise()
                }
            });
            var bt;
            it.fn.ready = function (t) {
                return it.ready.promise().done(t), this
            }, it.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? it.readyWait++ : it.ready(!0)
                }, ready: function (t) {
                    (t === !0 ? --it.readyWait : it.isReady) || (it.isReady = !0, t !== !0 && --it.readyWait > 0 || (bt.resolveWith(et, [it]), it.fn.triggerHandler && (it(et).triggerHandler("ready"), it(et).off("ready"))))
                }
            }), it.ready.promise = function (t) {
                return bt || (bt = it.Deferred(), "complete" === et.readyState ? setTimeout(it.ready) : (et.addEventListener("DOMContentLoaded", u, !1), e.addEventListener("load", u, !1))), bt.promise(t)
            }, it.ready.promise();
            var xt = it.access = function (t, e, n, i, o, r, s) {
                var a = 0, l = t.length, u = null == n;
                if ("object" === it.type(n)) {
                    o = !0;
                    for (a in n)it.access(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, it.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(it(t), n)
                    })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            };
            it.acceptData = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, c.uid = 1, c.accepts = it.acceptData, c.prototype = {
                key: function (t) {
                    if (!c.accepts(t))return 0;
                    var e = {}, n = t[this.expando];
                    if (!n) {
                        n = c.uid++;
                        try {
                            e[this.expando] = {value: n}, Object.defineProperties(t, e)
                        } catch (i) {
                            e[this.expando] = n, it.extend(t, e)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (t, e, n) {
                    var i, o = this.key(t), r = this.cache[o];
                    if ("string" == typeof e)r[e] = n; else if (it.isEmptyObject(r))it.extend(this.cache[o], e); else for (i in e)r[i] = e[i];
                    return r
                }, get: function (t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e]
                }, access: function (t, e, n) {
                    var i;
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, it.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
                }, remove: function (t, e) {
                    var n, i, o, r = this.key(t), s = this.cache[r];
                    if (void 0 === e)this.cache[r] = {}; else {
                        it.isArray(e) ? i = e.concat(e.map(it.camelCase)) : (o = it.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(vt) || [])), n = i.length;
                        for (; n--;)delete s[i[n]]
                    }
                }, hasData: function (t) {
                    return !it.isEmptyObject(this.cache[t[this.expando]] || {})
                }, discard: function (t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var wt = new c, Tt = new c, Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Et = /([A-Z])/g;
            it.extend({
                hasData: function (t) {
                    return Tt.hasData(t) || wt.hasData(t)
                }, data: function (t, e, n) {
                    return Tt.access(t, e, n)
                }, removeData: function (t, e) {
                    Tt.remove(t, e)
                }, _data: function (t, e, n) {
                    return wt.access(t, e, n)
                }, _removeData: function (t, e) {
                    wt.remove(t, e)
                }
            }), it.fn.extend({
                data: function ze(t, e) {
                    var n, i, ze, o = this[0], r = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (ze = Tt.get(o), 1 === o.nodeType && !wt.get(o, "hasDataAttrs"))) {
                            for (n = r.length; n--;)r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = it.camelCase(i.slice(5)), p(o, i, ze[i])));
                            wt.set(o, "hasDataAttrs", !0)
                        }
                        return ze
                    }
                    return "object" == typeof t ? this.each(function () {
                        Tt.set(this, t)
                    }) : xt(this, function (e) {
                        var n, i = it.camelCase(t);
                        if (o && void 0 === e) {
                            if (n = Tt.get(o, t), void 0 !== n)return n;
                            if (n = Tt.get(o, i), void 0 !== n)return n;
                            if (n = p(o, i, void 0), void 0 !== n)return n
                        } else this.each(function () {
                            var n = Tt.get(this, i);
                            Tt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && Tt.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                }, removeData: function (t) {
                    return this.each(function () {
                        Tt.remove(this, t)
                    })
                }
            }), it.extend({
                queue: function Ve(t, e, n) {
                    var Ve;
                    return t ? (e = (e || "fx") + "queue", Ve = wt.get(t, e), n && (!Ve || it.isArray(n) ? Ve = wt.access(t, e, it.makeArray(n)) : Ve.push(n)), Ve || []) : void 0
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var n = it.queue(t, e), i = n.length, o = n.shift(), r = it._queueHooks(t, e), s = function () {
                        it.dequeue(t, e)
                    };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return wt.get(t, n) || wt.access(t, n, {
                            empty: it.Callbacks("once memory").add(function () {
                                wt.remove(t, [e + "queue", n])
                            })
                        })
                }
            }), it.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? it.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = it.queue(this, t, e);
                        it._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && it.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        it.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, i = 1, o = it.Deferred(), r = this, s = this.length, a = function () {
                        --i || o.resolveWith(r, [r])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = wt.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(e)
                }
            });
            var $t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, kt = ["Top", "Right", "Bottom", "Left"], Nt = function (t, e) {
                return t = e || t, "none" === it.css(t, "display") || !it.contains(t.ownerDocument, t)
            }, St = /^(?:checkbox|radio)$/i;
            !function () {
                var t = et.createDocumentFragment(), e = t.appendChild(et.createElement("div")), n = et.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), tt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", tt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Dt = "undefined";
            tt.focusinBubbles = "onfocusin"in e;
            var At = /^key/, jt = /^(?:mouse|pointer|contextmenu)|click/, Ot = /^(?:focusinfocus|focusoutblur)$/, It = /^([^.]*)(?:\.(.+)|)$/;
            it.event = {
                global: {},
                add: function (t, e, n, i, o) {
                    var r, s, a, l, u, c, p, d, f, h, g, m = wt.get(t);
                    if (m)for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = it.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                        return typeof it !== Dt && it.event.triggered !== e.type ? it.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(vt) || [""], u = e.length; u--;)a = It.exec(e[u]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (p = it.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = it.event.special[f] || {}, c = it.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && it.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), it.event.global[f] = !0)
                },
                remove: function (t, e, n, i, o) {
                    var r, s, a, l, u, c, p, d, f, h, g, m = wt.hasData(t) && wt.get(t);
                    if (m && (l = m.events)) {
                        for (e = (e || "").match(vt) || [""], u = e.length; u--;)if (a = It.exec(e[u]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                            for (p = it.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)c = d[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(t, c));
                            s && !d.length && (p.teardown && p.teardown.call(t, h, m.handle) !== !1 || it.removeEvent(t, f, m.handle), delete l[f])
                        } else for (f in l)it.event.remove(t, f + e[u], n, i, !0);
                        it.isEmptyObject(l) && (delete m.handle, wt.remove(t, "events"))
                    }
                },
                trigger: function (t, n, i, o) {
                    var r, s, a, l, u, c, p, d = [i || et], f = Z.call(t, "type") ? t.type : t, h = Z.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(f + it.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[it.expando] ? t : new it.Event(f, "object" == typeof t && t),
                            t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : it.makeArray(n, [t]), p = it.event.special[f] || {}, o || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                        if (!o && !p.noBubble && !it.isWindow(i)) {
                            for (l = p.delegateType || f, Ot.test(l + f) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                            a === (i.ownerDocument || et) && d.push(a.defaultView || a.parentWindow || e)
                        }
                        for (r = 0; (s = d[r++]) && !t.isPropagationStopped();)t.type = r > 1 ? l : p.bindType || f, c = (wt.get(s, "events") || {})[t.type] && wt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && it.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                        return t.type = f, o || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !it.acceptData(i) || u && it.isFunction(i[f]) && !it.isWindow(i) && (a = i[u], a && (i[u] = null), it.event.triggered = f, i[f](), it.event.triggered = void 0, a && (i[u] = a)), t.result
                    }
                },
                dispatch: function (t) {
                    t = it.event.fix(t);
                    var e, n, i, o, r, s = [], a = X.call(arguments), l = (wt.get(this, "events") || {})[t.type] || [], u = it.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                        for (s = it.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((it.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
                    if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++)r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? it(o, this).index(l) >= 0 : it.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({elem: l, handlers: i})
                    }
                    return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, i, o, r = e.button;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || et, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                    }
                },
                fix: function (t) {
                    if (t[it.expando])return t;
                    var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = jt.test(o) ? this.mouseHooks : At.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new it.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
                    return t.target || (t.target = et), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== h() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === h() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && it.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (t) {
                            return it.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n, i) {
                    var o = it.extend(new it.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                    i ? it.event.trigger(o, null, e) : it.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
                }
            }, it.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }, it.Event = function (t, e) {
                return this instanceof it.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && it.extend(this, e), this.timeStamp = t && t.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(t, e)
            }, it.Event.prototype = {
                isDefaultPrevented: f,
                isPropagationStopped: f,
                isImmediatePropagationStopped: f,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = d, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = d, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, it.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                it.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, i = this, o = t.relatedTarget, r = t.handleObj;
                        return (!o || o !== i && !it.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), tt.focusinBubbles || it.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var n = function (t) {
                    it.event.simulate(e, t.target, it.event.fix(t), !0)
                };
                it.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this, o = wt.access(i, e);
                        o || i.addEventListener(t, n, !0), wt.access(i, e, (o || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, o = wt.access(i, e) - 1;
                        o ? wt.access(i, e, o) : (i.removeEventListener(t, n, !0), wt.remove(i, e))
                    }
                }
            }), it.fn.extend({
                on: function (t, e, n, i, o) {
                    var r, s;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = void 0);
                        for (s in t)this.on(s, e, n, t[s], o);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = f; else if (!i)return this;
                    return 1 === o && (r = i, i = function (t) {
                        return it().off(t), r.apply(this, arguments)
                    }, i.guid = r.guid || (r.guid = it.guid++)), this.each(function () {
                        it.event.add(this, t, i, n, e)
                    })
                }, one: function (t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                }, off: function (t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj)return i = t.handleObj, it(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (o in t)this.off(o, e, t[o]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function () {
                        it.event.remove(this, t, n, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        it.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    return n ? it.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Rt = /<([\w:]+)/, Ht = /<|&#?\w+;/, Pt = /<(?:script|style|link)/i, qt = /checked\s*(?:[^=]|=\s*.checked.)/i, Ft = /^$|\/(?:java|ecma)script/i, Wt = /^true\/(.*)/, Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Bt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td, it.extend({
                clone: function Xe(t, e, n) {
                    var i, o, r, s, Xe = t.cloneNode(!0), a = it.contains(t.ownerDocument, t);
                    if (!(tt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || it.isXMLDoc(t)))for (s = x(Xe), r = x(t), i = 0, o = r.length; o > i; i++)w(r[i], s[i]);
                    if (e)if (n)for (r = r || x(t), s = s || x(Xe), i = 0, o = r.length; o > i; i++)b(r[i], s[i]); else b(t, Xe);
                    return s = x(Xe, "script"), s.length > 0 && y(s, !a && x(t, "script")), Xe
                }, buildFragment: function (t, e, n, i) {
                    for (var o, r, s, a, l, u, c = e.createDocumentFragment(), p = [], d = 0, f = t.length; f > d; d++)if (o = t[d], o || 0 === o)if ("object" === it.type(o))it.merge(p, o.nodeType ? [o] : o); else if (Ht.test(o)) {
                        for (r = r || c.appendChild(e.createElement("div")), s = (Rt.exec(o) || ["", ""])[1].toLowerCase(), a = Bt[s] || Bt._default, r.innerHTML = a[1] + o.replace(Lt, "<$1></$2>") + a[2], u = a[0]; u--;)r = r.lastChild;
                        it.merge(p, r.childNodes), r = c.firstChild, r.textContent = ""
                    } else p.push(e.createTextNode(o));
                    for (c.textContent = "", d = 0; o = p[d++];)if ((!i || -1 === it.inArray(o, i)) && (l = it.contains(o.ownerDocument, o), r = x(c.appendChild(o), "script"), l && y(r), n))for (u = 0; o = r[u++];)Ft.test(o.type || "") && n.push(o);
                    return c
                }, cleanData: function (t) {
                    for (var e, n, i, o, r = it.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                        if (it.acceptData(n) && (o = n[wt.expando], o && (e = wt.cache[o]))) {
                            if (e.events)for (i in e.events)r[i] ? it.event.remove(n, i) : it.removeEvent(n, i, e.handle);
                            wt.cache[o] && delete wt.cache[o]
                        }
                        delete Tt.cache[n[Tt.expando]]
                    }
                }
            }), it.fn.extend({
                text: function (t) {
                    return xt(this, function (t) {
                        return void 0 === t ? it.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = g(this, t);
                            e.appendChild(t)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = g(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, remove: function (t, e) {
                    for (var n, i = t ? it.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || it.cleanData(x(n)), n.parentNode && (e && it.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (it.cleanData(x(t, !1)), t.textContent = "");
                    return this
                }, clone: function (t, e) {
                    return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                        return it.clone(this, t, e)
                    })
                }, html: function (t) {
                    return xt(this, function (t) {
                        var e = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                        if ("string" == typeof t && !Pt.test(t) && !Bt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Lt, "<$1></$2>");
                            try {
                                for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (it.cleanData(x(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (o) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, it.cleanData(x(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                }, detach: function (t) {
                    return this.remove(t, !0)
                }, domManip: function (t, e) {
                    t = Q.apply([], t);
                    var n, i, o, r, s, a, l = 0, u = this.length, c = this, p = u - 1, d = t[0], f = it.isFunction(d);
                    if (f || u > 1 && "string" == typeof d && !tt.checkClone && qt.test(d))return this.each(function (n) {
                        var i = c.eq(n);
                        f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                    });
                    if (u && (n = it.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                        for (o = it.map(x(n, "script"), m), r = o.length; u > l; l++)s = n, l !== p && (s = it.clone(s, !0, !0), r && it.merge(o, x(s, "script"))), e.call(this[l], s, l);
                        if (r)for (a = o[o.length - 1].ownerDocument, it.map(o, v), l = 0; r > l; l++)s = o[l], Ft.test(s.type || "") && !wt.access(s, "globalEval") && it.contains(a, s) && (s.src ? it._evalUrl && it._evalUrl(s.src) : it.globalEval(s.textContent.replace(Mt, "")))
                    }
                    return this
                }
            }), it.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                it.fn[t] = function (t) {
                    for (var n, i = [], o = it(t), r = o.length - 1, s = 0; r >= s; s++)n = s === r ? this : this.clone(!0), it(o[s])[e](n), Y.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Ut, _t = {}, zt = /^margin/, Vt = new RegExp("^(" + $t + ")(?!px)[a-z%]+$", "i"), Xt = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
            !function () {
                function t() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
                    var t = e.getComputedStyle(s, null);
                    n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
                }

                var n, i, o = et.documentElement, r = et.createElement("div"), s = et.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", tt.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && it.extend(tt, {
                    pixelPosition: function () {
                        return t(), n
                    }, boxSizingReliable: function () {
                        return null == i && t(), i
                    }, reliableMarginRight: function () {
                        var t, n = s.appendChild(et.createElement("div"));
                        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), t
                    }
                }))
            }(), it.swap = function (t, e, n, i) {
                var o, r, s = {};
                for (r in e)s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e)t.style[r] = s[r];
                return o
            };
            var Qt = /^(none|table(?!-c[ea]).+)/, Yt = new RegExp("^(" + $t + ")(.*)$", "i"), Gt = new RegExp("^([+-])=(" + $t + ")", "i"), Kt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Jt = {letterSpacing: "0", fontWeight: "400"}, Zt = ["Webkit", "O", "Moz", "ms"];
            it.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = E(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function Qe(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, r, s, a = it.camelCase(e), Qe = t.style;
                        return e = it.cssProps[a] || (it.cssProps[a] = N(Qe, a)), s = it.cssHooks[e] || it.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : Qe[e] : (r = typeof n, "string" === r && (o = Gt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(it.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || it.cssNumber[a] || (n += "px"), tt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (Qe[e] = "inherit"), s && "set"in s && void 0 === (n = s.set(t, n, i)) || (Qe[e] = n)), void 0)
                    }
                },
                css: function (t, e, n, i) {
                    var o, r, s, a = it.camelCase(e);
                    return e = it.cssProps[a] || (it.cssProps[a] = N(t.style, a)), s = it.cssHooks[e] || it.cssHooks[a], s && "get"in s && (o = s.get(t, !0, n)), void 0 === o && (o = E(t, e, i)), "normal" === o && e in Jt && (o = Jt[e]), "" === n || n ? (r = parseFloat(o), n === !0 || it.isNumeric(r) ? r || 0 : o) : o
                }
            }), it.each(["height", "width"], function (t, e) {
                it.cssHooks[e] = {
                    get: function (t, n, i) {
                        return n ? Qt.test(it.css(t, "display")) && 0 === t.offsetWidth ? it.swap(t, Kt, function () {
                            return A(t, e, i)
                        }) : A(t, e, i) : void 0
                    }, set: function (t, n, i) {
                        var o = i && Xt(t);
                        return S(t, n, i ? D(t, e, i, "border-box" === it.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), it.cssHooks.marginRight = k(tt.reliableMarginRight, function (t, e) {
                return e ? it.swap(t, {display: "inline-block"}, E, [t, "marginRight"]) : void 0
            }), it.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                it.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + kt[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, zt.test(t) || (it.cssHooks[t + e].set = S)
            }), it.fn.extend({
                css: function (t, e) {
                    return xt(this, function (t, e, n) {
                        var i, o, r = {}, s = 0;
                        if (it.isArray(e)) {
                            for (i = Xt(t), o = e.length; o > s; s++)r[e[s]] = it.css(t, e[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? it.style(t, e, n) : it.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return j(this, !0)
                }, hide: function () {
                    return j(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        Nt(this) ? it(this).show() : it(this).hide()
                    })
                }
            }), it.Tween = O, O.prototype = {
                constructor: O, init: function (t, e, n, i, o, r) {
                    this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (it.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = O.propHooks[this.prop];
                    return t && t.get ? t.get(this) : O.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = O.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = it.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
                }
            }, O.prototype.init.prototype = O.prototype, O.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = it.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    }, set: function (t) {
                        it.fx.step[t.prop] ? it.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[it.cssProps[t.prop]] || it.cssHooks[t.prop]) ? it.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, it.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, it.fx = O.prototype.init, it.fx.step = {};
            var te, ee, ne = /^(?:toggle|show|hide)$/, ie = new RegExp("^(?:([+-])=|)(" + $t + ")([a-z%]*)$", "i"), oe = /queueHooks$/, re = [H], se = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e), i = n.cur(), o = ie.exec(e), r = o && o[3] || (it.cssNumber[t] ? "" : "px"), s = (it.cssNumber[t] || "px" !== r && +i) && ie.exec(it.css(n.elem, t)), a = 1, l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, it.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
            it.Animation = it.extend(q, {
                tweener: function (t, e) {
                    it.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++)n = t[i], se[n] = se[n] || [], se[n].unshift(e)
                }, prefilter: function (t, e) {
                    e ? re.unshift(t) : re.push(t)
                }
            }), it.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? it.extend({}, t) : {
                    complete: n || !n && e || it.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !it.isFunction(e) && e
                };
                return i.duration = it.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in it.fx.speeds ? it.fx.speeds[i.duration] : it.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    it.isFunction(i.old) && i.old.call(this), i.queue && it.dequeue(this, i.queue)
                }, i
            }, it.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Nt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
                }, animate: function (t, e, n, i) {
                    var o = it.isEmptyObject(t), r = it.speed(e, n, i), s = function () {
                        var e = q(this, it.extend({}, t), r);
                        (o || wt.get(this, "finish")) && e.stop(!0)
                    };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                }, stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, o = null != t && t + "queueHooks", r = it.timers, s = wt.get(this);
                        if (o)s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && oe.test(o) && i(s[o]);
                        for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && it.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = wt.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = it.timers, s = i ? i.length : 0;
                        for (n.finish = !0, it.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), it.each(["toggle", "show", "hide"], function (t, e) {
                var n = it.fn[e];
                it.fn[e] = function (t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, o)
                }
            }), it.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                it.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), it.timers = [], it.fx.tick = function () {
                var t, e = 0, n = it.timers;
                for (te = it.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || it.fx.stop(), te = void 0
            }, it.fx.timer = function (t) {
                it.timers.push(t), t() ? it.fx.start() : it.timers.pop()
            }, it.fx.interval = 13, it.fx.start = function () {
                ee || (ee = setInterval(it.fx.tick, it.fx.interval))
            }, it.fx.stop = function () {
                clearInterval(ee), ee = null
            }, it.fx.speeds = {slow: 600, fast: 200, _default: 400}, it.fn.delay = function (t, e) {
                return t = it.fx ? it.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, function () {
                var t = et.createElement("input"), e = et.createElement("select"), n = e.appendChild(et.createElement("option"));
                t.type = "checkbox", tt.checkOn = "" !== t.value, tt.optSelected = n.selected, e.disabled = !0, tt.optDisabled = !n.disabled, t = et.createElement("input"), t.value = "t", t.type = "radio", tt.radioValue = "t" === t.value
            }();
            var ae, le, ue = it.expr.attrHandle;
            it.fn.extend({
                attr: function (t, e) {
                    return xt(this, it.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        it.removeAttr(this, t)
                    })
                }
            }), it.extend({
                attr: function (t, e, n) {
                    var i, o, r = t.nodeType;
                    if (t && 3 !== r && 8 !== r && 2 !== r)return typeof t.getAttribute === Dt ? it.prop(t, e, n) : (1 === r && it.isXMLDoc(t) || (e = e.toLowerCase(), i = it.attrHooks[e] || (it.expr.match.bool.test(e) ? le : ae)), void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = it.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void it.removeAttr(t, e))
                }, removeAttr: function (t, e) {
                    var n, i, o = 0, r = e && e.match(vt);
                    if (r && 1 === t.nodeType)for (; n = r[o++];)i = it.propFix[n] || n, it.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!tt.radioValue && "radio" === e && it.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), le = {
                set: function (t, e, n) {
                    return e === !1 ? it.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, it.each(it.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = ue[e] || it.find.attr;
                ue[e] = function (t, e, i) {
                    var o, r;
                    return i || (r = ue[e], ue[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ue[e] = r), o
                }
            });
            var ce = /^(?:input|select|textarea|button)$/i;
            it.fn.extend({
                prop: function (t, e) {
                    return xt(this, it.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return this.each(function () {
                        delete this[it.propFix[t] || t]
                    })
                }
            }), it.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                    var i, o, r, s = t.nodeType;
                    if (t && 3 !== s && 8 !== s && 2 !== s)return r = 1 !== s || !it.isXMLDoc(t), r && (e = it.propFix[e] || e, o = it.propHooks[e]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            return t.hasAttribute("tabindex") || ce.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), tt.optSelected || (it.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                it.propFix[this.toLowerCase()] = this
            });
            var pe = /[\t\r\n\f]/g;
            it.fn.extend({
                addClass: function (t) {
                    var e, n, i, o, r, s, a = "string" == typeof t && t, l = 0, u = this.length;
                    if (it.isFunction(t))return this.each(function (e) {
                        it(this).addClass(t.call(this, e, this.className))
                    });
                    if (a)for (e = (t || "").match(vt) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pe, " ") : " ")) {
                        for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = it.trim(i), n.className !== s && (n.className = s)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
                    if (it.isFunction(t))return this.each(function (e) {
                        it(this).removeClass(t.call(this, e, this.className))
                    });
                    if (a)for (e = (t || "").match(vt) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pe, " ") : "")) {
                        for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                        s = t ? it.trim(i) : "", n.className !== s && (n.className = s)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : it.isFunction(t) ? this.each(function (n) {
                        it(this).toggleClass(t.call(this, n, this.className, e), e)
                    }) : this.each(function () {
                        if ("string" === n)for (var e, i = 0, o = it(this), r = t.match(vt) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === Dt || "boolean" === n) && (this.className && wt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : wt.get(this, "__className__") || "")
                    })
                }, hasClass: function (t) {
                    for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(pe, " ").indexOf(e) >= 0)return !0;
                    return !1
                }
            });
            var de = /\r/g;
            it.fn.extend({
                val: function (t) {
                    var e, n, i, o = this[0];
                    {
                        if (arguments.length)return i = it.isFunction(t), this.each(function (n) {
                            var o;
                            1 === this.nodeType && (o = i ? t.call(this, n, it(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : it.isArray(o) && (o = it.map(o, function (t) {
                                return null == t ? "" : t + ""
                            })), e = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        });
                        if (o)return e = it.valHooks[o.type] || it.valHooks[o.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(de, "") : null == n ? "" : n)
                    }
                }
            }), it.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = it.find.attr(t, "value");
                            return null != e ? e : it.trim(it.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], (n.selected || l === o) && (tt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !it.nodeName(n.parentNode, "optgroup"))) {
                                if (e = it(n).val(), r)return e;
                                s.push(e)
                            }
                            return s
                        }, set: function (t, e) {
                            for (var n, i, o = t.options, r = it.makeArray(e), s = o.length; s--;)i = o[s], (i.selected = it.inArray(i.value, r) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), r
                        }
                    }
                }
            }), it.each(["radio", "checkbox"], function () {
                it.valHooks[this] = {
                    set: function (t, e) {
                        return it.isArray(e) ? t.checked = it.inArray(it(t).val(), e) >= 0 : void 0
                    }
                }, tt.checkOn || (it.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                it.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), it.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }, bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var fe = it.now(), he = /\?/;
            it.parseJSON = function (t) {
                return JSON.parse(t + "")
            }, it.parseXML = function (t) {
                var e, n;
                if (!t || "string" != typeof t)return null;
                try {
                    n = new DOMParser, e = n.parseFromString(t, "text/xml")
                } catch (i) {
                    e = void 0
                }
                return (!e || e.getElementsByTagName("parsererror").length) && it.error("Invalid XML: " + t), e
            };
            var ge = /#.*$/, me = /([?&])_=[^&]*/, ve = /^(.*?):[ \t]*([^\r\n]*)$/gm, ye = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, be = /^(?:GET|HEAD)$/, xe = /^\/\//, we = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Te = {}, Ce = {}, Ee = "*/".concat("*"), $e = e.location.href, ke = we.exec($e.toLowerCase()) || [];
            it.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: $e,
                    type: "GET",
                    isLocal: ye.test(ke[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ee,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": it.parseJSON, "text xml": it.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? M(M(t, it.ajaxSettings), e) : M(it.ajaxSettings, t)
                },
                ajaxPrefilter: F(Te),
                ajaxTransport: F(Ce),
                ajax: function (t, e) {
                    function n(t, e, n, s) {
                        var l, c, v, y, x, T = e;
                        2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = B(p, w, n)), y = U(p, y, w, l), l ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, l = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || T) + "", l ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? c : v]), g.fireWith(d, [w, T]), u && (f.trigger("ajaxComplete", [w, p]), --it.active || it.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var i, o, r, s, a, l, u, c, p = it.ajaxSetup({}, e), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? it(d) : it.event, h = it.Deferred(), g = it.Callbacks("once memory"), m = p.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!s)for (s = {}; e = ve.exec(r);)s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (p.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)if (2 > b)for (e in t)m[e] = [m[e], t[e]]; else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return i && i.abort(e), n(0, e), this
                        }
                    };
                    if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || $e) + "").replace(ge, "").replace(xe, ke[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = it.trim(p.dataType || "*").toLowerCase().match(vt) || [""], null == p.crossDomain && (l = we.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === ke[1] && l[2] === ke[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ke[3] || ("http:" === ke[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = it.param(p.data, p.traditional)), W(Te, p, e, w), 2 === b)return w;
                    u = it.event && p.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !be.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (he.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = me.test(o) ? o.replace(me, "$1_=" + fe++) : o + (he.test(o) ? "&" : "?") + "_=" + fe++)), p.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : p.accepts["*"]);
                    for (c in p.headers)w.setRequestHeader(c, p.headers[c]);
                    if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b))return w.abort();
                    x = "abort";
                    for (c in{success: 1, error: 1, complete: 1})w[c](p[c]);
                    if (i = W(Ce, p, e, w)) {
                        w.readyState = 1, u && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                            w.abort("timeout")
                        }, p.timeout));
                        try {
                            b = 1, i.send(v, n)
                        } catch (T) {
                            if (!(2 > b))throw T;
                            n(-1, T)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (t, e, n) {
                    return it.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return it.get(t, void 0, e, "script")
                }
            }), it.each(["get", "post"], function (t, e) {
                it[e] = function (t, n, i, o) {
                    return it.isFunction(n) && (o = o || i, i = n, n = void 0), it.ajax({
                        url: t,
                        type: e,
                        dataType: o,
                        data: n,
                        success: i
                    })
                }
            }), it._evalUrl = function (t) {
                return it.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, it.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return it.isFunction(t) ? this.each(function (e) {
                        it(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = it(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                }, wrapInner: function (t) {
                    return it.isFunction(t) ? this.each(function (e) {
                        it(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = it(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = it.isFunction(t);
                    return this.each(function (n) {
                        it(this).wrapAll(e ? t.call(this, n) : t);
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), it.expr.filters.hidden = function (t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, it.expr.filters.visible = function (t) {
                return !it.expr.filters.hidden(t)
            };
            var Ne = /%20/g, Se = /\[\]$/, De = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i, je = /^(?:input|select|textarea|keygen)/i;
            it.param = function (t, e) {
                var n, i = [], o = function (t, e) {
                    e = it.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(t) || t.jquery && !it.isPlainObject(t))it.each(t, function () {
                    o(this.name, this.value)
                }); else for (n in t)_(n, t[n], e, o);
                return i.join("&").replace(Ne, "+")
            }, it.fn.extend({
                serialize: function () {
                    return it.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = it.prop(this, "elements");
                        return t ? it.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !it(this).is(":disabled") && je.test(this.nodeName) && !Ae.test(t) && (this.checked || !St.test(t))
                    }).map(function (t, e) {
                        var n = it(this).val();
                        return null == n ? null : it.isArray(n) ? it.map(n, function (t) {
                            return {name: e.name, value: t.replace(De, "\r\n")}
                        }) : {name: e.name, value: n.replace(De, "\r\n")}
                    }).get()
                }
            }), it.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (t) {
                }
            };
            var Oe = 0, Ie = {}, Le = {0: 200, 1223: 204}, Re = it.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function () {
                for (var t in Ie)Ie[t]()
            }), tt.cors = !!Re && "withCredentials"in Re, tt.ajax = Re = !!Re, it.ajaxTransport(function (t) {
                var e;
                return tt.cors || Re && !t.crossDomain ? {
                    send: function (n, i) {
                        var o, r = t.xhr(), s = ++Oe;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)r.setRequestHeader(o, n[o]);
                        e = function (t) {
                            return function () {
                                e && (delete Ie[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(Le[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : void 0, r.getAllResponseHeaders()))
                            }
                        }, r.onload = e(), r.onerror = e("error"), e = Ie[s] = e("abort");
                        try {
                            r.send(t.hasContent && t.data || null)
                        } catch (a) {
                            if (e)throw a
                        }
                    }, abort: function () {
                        e && e()
                    }
                } : void 0
            }), it.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (t) {
                        return it.globalEval(t), t
                    }
                }
            }), it.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), it.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function (i, o) {
                            e = it("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function (t) {
                                e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                            }), et.head.appendChild(e[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var He = [], Pe = /(=)\?(?=&|$)|\?\?/;
            it.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = He.pop() || it.expando + "_" + fe++;
                    return this[t] = !0, t
                }
            }), it.ajaxPrefilter("json jsonp", function (t, n, i) {
                var o, r, s, a = t.jsonp !== !1 && (Pe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pe.test(t.data) && "data");
                return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Pe, "$1" + o) : t.jsonp !== !1 && (t.url += (he.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                    return s || it.error(o + " was not called"), s[0]
                }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
                    s = arguments
                }, i.always(function () {
                    e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, He.push(o)), s && it.isFunction(r) && r(s[0]), s = r = void 0
                }), "script") : void 0
            }), it.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t)return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || et;
                var i = ct.exec(t), o = !n && [];
                return i ? [e.createElement(i[1])] : (i = it.buildFragment([t], e, o), o && o.length && it(o).remove(), it.merge([], i.childNodes))
            };
            var qe = it.fn.load;
            it.fn.load = function (t, e, n) {
                if ("string" != typeof t && qe)return qe.apply(this, arguments);
                var i, o, r, s = this, a = t.indexOf(" ");
                return a >= 0 && (i = it.trim(t.slice(a)), t = t.slice(0, a)), it.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && it.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    r = arguments, s.html(i ? it("<div>").append(it.parseHTML(t)).find(i) : t)
                }).complete(n && function (t, e) {
                        s.each(n, r || [t.responseText, e, t])
                    }), this
            }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                it.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), it.expr.filters.animated = function (t) {
                return it.grep(it.timers, function (e) {
                    return t === e.elem
                }).length
            };
            var Fe = e.document.documentElement;
            it.offset = {
                setOffset: function (t, e, n) {
                    var i, o, r, s, a, l, u, c = it.css(t, "position"), p = it(t), d = {};
                    "static" === c && (t.style.position = "relative"), a = p.offset(), r = it.css(t, "top"), l = it.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), it.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using"in e ? e.using.call(t, d) : p.css(d)
                }
            }, it.fn.extend({
                offset: function (t) {
                    if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                        it.offset.setOffset(this, t, e)
                    });
                    var e, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
                    if (r)return e = r.documentElement, it.contains(e, i) ? (typeof i.getBoundingClientRect !== Dt && (o = i.getBoundingClientRect()), n = z(r), {
                        top: o.top + n.pageYOffset - e.clientTop,
                        left: o.left + n.pageXOffset - e.clientLeft
                    }) : o
                }, position: function () {
                    if (this[0]) {
                        var t, e, n = this[0], i = {top: 0, left: 0};
                        return "fixed" === it.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), it.nodeName(t[0], "html") || (i = t.offset()), i.top += it.css(t[0], "borderTopWidth", !0), i.left += it.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - i.top - it.css(n, "marginTop", !0),
                            left: e.left - i.left - it.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || Fe; t && !it.nodeName(t, "html") && "static" === it.css(t, "position");)t = t.offsetParent;
                        return t || Fe
                    })
                }
            }), it.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
                var i = "pageYOffset" === n;
                it.fn[t] = function (o) {
                    return xt(this, function (t, o, r) {
                        var s = z(t);
                        return void 0 === r ? s ? s[n] : t[o] : void(s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
                    }, t, o, arguments.length, null)
                }
            }), it.each(["top", "left"], function (t, e) {
                it.cssHooks[e] = k(tt.pixelPosition, function (t, n) {
                    return n ? (n = E(t, e), Vt.test(n) ? it(t).position()[e] + "px" : n) : void 0
                })
            }), it.each({Height: "height", Width: "width"}, function (t, e) {
                it.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                    it.fn[i] = function (i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return xt(this, function (e, n, i) {
                            var o;
                            return it.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? it.css(e, n, s) : it.style(e, n, i, s)
                        }, e, r ? i : void 0, r, null)
                    }
                })
            }), it.fn.size = function () {
                return this.length
            }, it.fn.andSelf = it.fn.addBack, n = [], i = function () {
                return it
            }.apply(exports, n), !(void 0 !== i && (t.exports = i));
            var We = e.jQuery, Me = e.$;
            return it.noConflict = function (t) {
                return e.$ === it && (e.$ = Me), t && e.jQuery === it && (e.jQuery = We), it
            }, typeof o === Dt && (e.jQuery = e.$ = it), it
        })
    }, 87: function (t, exports, e) {
        "use strict";
        e(88), e(89), e(90), e(91), e(92), e(93), e(94), e(95), e(96), e(97), e(98), e(99)
    }, 88: function (t, exports) {
        "use strict";
        +function ($) {
            function t() {
                var t = document.createElement("bootstrap"), e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
                return !1
            }

            $.fn.emulateTransitionEnd = function (t) {
                var e = !1, n = this;
                $(this).one("bsTransitionEnd", function () {
                    e = !0
                });
                var i = function () {
                    e || $(n).trigger($.support.transition.end)
                };
                return setTimeout(i, t), this
            }, $(function () {
                $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
                    bindType: $.support.transition.end,
                    delegateType: $.support.transition.end,
                    handle: function (t) {
                        return $(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
        }(jQuery)
    }, 89: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var e = $(this), i = e.data("bs.alert");
                    i || e.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(e)
                })
            }

            var e = '[data-dismiss="alert"]', n = function (t) {
                $(t).on("click", e, this.close)
            };
            n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.close = function (t) {
                function e() {
                    r.detach().trigger("closed.bs.alert").remove()
                }

                var i = $(this), o = i.attr("data-target");
                o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
                var r = $(o);
                t && t.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(t = $.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), $.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(n.TRANSITION_DURATION) : e())
            };
            var i = $.fn.alert;
            $.fn.alert = t, $.fn.alert.Constructor = n, $.fn.alert.noConflict = function () {
                return $.fn.alert = i, this
            }, $(document).on("click.bs.alert.data-api", e, n.prototype.close)
        }(jQuery)
    }, 90: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.button"), o = "object" == typeof t && t;
                    i || n.data("bs.button", i = new e(this, o)), "toggle" == t ? i.toggle() : t && i.setState(t)
                })
            }

            var e = function i(t, e) {
                this.$element = $(t), this.options = $.extend({}, i.DEFAULTS, e), this.isLoading = !1
            };
            e.VERSION = "3.3.5", e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (t) {
                var e = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", o = n.data();
                t += "Text", null == o.resetText && n.data("resetText", n[i]()), setTimeout($.proxy(function () {
                    n[i](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e))
                }, this), 0)
            }, e.prototype.toggle = function () {
                var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
            };
            var n = $.fn.button;
            $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function () {
                return $.fn.button = n, this
            }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                var n = $(e.target);
                n.hasClass("btn") || (n = n.closest(".btn")), t.call(n, "toggle"), $(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]') || e.preventDefault()
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                $(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
            })
        }(jQuery)
    }, 91: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.carousel"), o = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t), r = "string" == typeof t ? t : o.slide;
                    i || n.data("bs.carousel", i = new e(this, o)), "number" == typeof t ? i.to(t) : r ? i[r]() : o.interval && i.pause().cycle()
                })
            }

            var e = function (t, e) {
                this.$element = $(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
            };
            e.VERSION = "3.3.5", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            }, e.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    t.preventDefault()
                }
            }, e.prototype.cycle = function (t) {
                return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
            }, e.prototype.getItemIndex = function (t) {
                return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
            }, e.prototype.getItemForDirection = function (t, e) {
                var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
                if (i && !this.options.wrap)return e;
                var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
                return this.$items.eq(r)
            }, e.prototype.to = function (t) {
                var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    e.to(t)
                }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
            }, e.prototype.pause = function (t) {
                return t || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, e.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next")
            }, e.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev")
            }, e.prototype.slide = function (t, n) {
                var i = this.$element.find(".item.active"), o = n || this.getItemForDirection(t, i), r = this.interval, s = "next" == t ? "left" : "right", a = this;
                if (o.hasClass("active"))return this.sliding = !1;
                var l = o[0], u = $.Event("slide.bs.carousel", {relatedTarget: l, direction: s});
                if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                    if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var c = $(this.$indicators.children()[this.getItemIndex(o)]);
                        c && c.addClass("active")
                    }
                    var p = $.Event("slid.bs.carousel", {relatedTarget: l, direction: s});
                    return $.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                        o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function () {
                            a.$element.trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
                }
            };
            var n = $.fn.carousel;
            $.fn.carousel = t, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function () {
                return $.fn.carousel = n, this
            };
            var i = function (e) {
                var n, i = $(this), o = $(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                if (o.hasClass("carousel")) {
                    var r = $.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
                    s && (r.interval = !1), t.call(o, r), s && o.data("bs.carousel").to(s), e.preventDefault()
                }
            };
            $(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), $(window).on("load", function () {
                $('[data-ride="carousel"]').each(function () {
                    var e = $(this);
                    t.call(e, e.data())
                })
            })
        }(jQuery)
    }, 92: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
                return $(n)
            }

            function e(t) {
                return this.each(function () {
                    var e = $(this), i = e.data("bs.collapse"), o = $.extend({}, n.DEFAULTS, e.data(), "object" == typeof t && t);
                    !i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || e.data("bs.collapse", i = new n(this, o)), "string" == typeof t && i[t]()
                })
            }

            var n = function o(t, e) {
                this.$element = $(t), this.options = $.extend({}, o.DEFAULTS, e), this.$trigger = $('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height"
            }, n.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                        var o = $.Event("show.bs.collapse");
                        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                            i && i.length && (e.call(i, "hide"), t || i.data("bs.collapse", null));
                            var r = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var s = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!$.support.transition)return s.call(this);
                            var a = $.camelCase(["scroll", r].join("-"));
                            this.$element.one("bsTransitionEnd", $.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][a])
                        }
                    }
                }
            }, n.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = $.Event("hide.bs.collapse");
                    if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                        var e = this.dimension();
                        this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var i = function () {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return $.support.transition ? void this.$element[e](0).one("bsTransitionEnd", $.proxy(i, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : i.call(this)
                    }
                }
            }, n.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, n.prototype.getParent = function () {
                return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (e, n) {
                    var i = $(n);
                    this.addAriaAndCollapsedClass(t(i), i)
                }, this)).end()
            }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
                var n = t.hasClass("in");
                t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var i = $.fn.collapse;
            $.fn.collapse = e, $.fn.collapse.Constructor = n, $.fn.collapse.noConflict = function () {
                return $.fn.collapse = i, this
            }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
                var i = $(this);
                i.attr("data-target") || n.preventDefault();
                var o = t(i), r = o.data("bs.collapse"), s = r ? "toggle" : i.data();
                e.call(o, s)
            })
        }(jQuery)
    }, 93: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                var e = t.attr("data-target");
                e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
                var n = e && $(e);
                return n && n.length ? n : t.parent()
            }

            function e(e) {
                e && 3 === e.which || ($(i).remove(), $(o).each(function () {
                    var n = $(this), i = t(n), o = {relatedTarget: this};
                    i.hasClass("open") && (e && "click" == e.type && /input|textarea/i.test(e.target.tagName) && $.contains(i[0], e.target) || (i.trigger(e = $.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o))))
                }))
            }

            function n(t) {
                return this.each(function () {
                    var e = $(this), n = e.data("bs.dropdown");
                    n || e.data("bs.dropdown", n = new r(this)), "string" == typeof t && n[t].call(e)
                })
            }

            var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', r = function (t) {
                $(t).on("click.bs.dropdown", this.toggle)
            };
            r.VERSION = "3.3.5", r.prototype.toggle = function (n) {
                var i = $(this);
                if (!i.is(".disabled, :disabled")) {
                    var o = t(i), r = o.hasClass("open");
                    if (e(), !r) {
                        "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", e);
                        var s = {relatedTarget: this};
                        if (o.trigger(n = $.Event("show.bs.dropdown", s)), n.isDefaultPrevented())return;
                        i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
                    }
                    return !1
                }
            }, r.prototype.keydown = function (e) {
                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                    var n = $(this);
                    if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                        var i = t(n), r = i.hasClass("open");
                        if (!r && 27 != e.which || r && 27 == e.which)return 27 == e.which && i.find(o).trigger("focus"), n.trigger("click");
                        var s = " li:not(.disabled):visible a", a = i.find(".dropdown-menu" + s);
                        if (a.length) {
                            var l = a.index(e.target);
                            38 == e.which && l > 0 && l--, 40 == e.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var s = $.fn.dropdown;
            $.fn.dropdown = n, $.fn.dropdown.Constructor = r, $.fn.dropdown.noConflict = function () {
                return $.fn.dropdown = s, this
            }, $(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
        }(jQuery)
    }, 94: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t, n) {
                return this.each(function () {
                    var i = $(this), o = i.data("bs.modal"), r = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t);
                    o || i.data("bs.modal", o = new e(this, r)), "string" == typeof t ? o[t](n) : r.show && o.show(n)
                })
            }

            var e = function (t, e) {
                this.options = e, this.$body = $(document.body), this.$element = $(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            e.VERSION = "3.3.5", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, e.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t)
            }, e.prototype.show = function (t) {
                var n = this, i = $.Event("show.bs.modal", {relatedTarget: t});
                this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    n.$element.one("mouseup.dismiss.bs.modal", function (t) {
                        $(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function () {
                    var i = $.support.transition && n.$element.hasClass("fade");
                    n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), i && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                    var o = $.Event("shown.bs.modal", {relatedTarget: t});
                    i ? n.$dialog.one("bsTransitionEnd", function () {
                        n.$element.trigger("focus").trigger(o)
                    }).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
                }))
            }, e.prototype.hide = function (t) {
                t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
            }, e.prototype.enforceFocus = function () {
                $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function (t) {
                    this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }, e.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function (t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }, e.prototype.resize = function () {
                this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal")
            }, e.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(), this.backdrop(function () {
                    t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                })
            }, e.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, e.prototype.backdrop = function (t) {
                var n = this, i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = $.support.transition && i;
                    if (this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function (t) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
                    o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : t()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var r = function () {
                        n.removeBackdrop(), t && t()
                    };
                    $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
                } else t && t()
            }, e.prototype.handleUpdate = function () {
                this.adjustDialog()
            }, e.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                })
            }, e.prototype.resetAdjustments = function () {
                this.$element.css({paddingLeft: "", paddingRight: ""})
            }, e.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
            }, e.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
            }, e.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad)
            }, e.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e
            };
            var n = $.fn.modal;
            $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function () {
                return $.fn.modal = n, this
            }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
                var n = $(this), i = n.attr("href"), o = $(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), r = o.data("bs.modal") ? "toggle" : $.extend({remote: !/#/.test(i) && i}, o.data(), n.data());
                n.is("a") && e.preventDefault(), o.one("show.bs.modal", function (t) {
                    t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                        n.is(":visible") && n.trigger("focus")
                    })
                }), t.call(o, r, this)
            })
        }(jQuery)
    }, 95: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.tooltip"), o = "object" == typeof t && t;
                    (i || !/destroy|hide/.test(t)) && (i || n.data("bs.tooltip", i = new e(this, o)), "string" == typeof t && i[t]())
                })
            }

            var e = function (t, e) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
            };
            e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {selector: "body", padding: 0}
            }, e.prototype.init = function (t, e, n) {
                if (this.enabled = !0, this.type = t, this.$element = $(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                    var r = i[o];
                    if ("click" == r)this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this)); else if ("manual" != r) {
                        var s = "hover" == r ? "mouseenter" : "focusin", a = "hover" == r ? "mouseleave" : "focusout";
                        this.$element.on(s + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = $.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.getOptions = function (t) {
                return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            }, e.prototype.getDelegateOptions = function () {
                var t = {}, e = this.getDefaults();
                return this._options && $.each(this._options, function (n, i) {
                    e[n] != i && (t[n] = i)
                }), t
            }, e.prototype.enter = function (t) {
                var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
                return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function () {
                    "in" == e.hoverState && e.show()
                }, e.options.delay.show)) : e.show())
            }, e.prototype.isInStateTrue = function () {
                for (var t in this.inState)if (this.inState[t])return !0;
                return !1
            }, e.prototype.leave = function (t) {
                var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
                return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), e.isInStateTrue() ? void 0 : (clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function () {
                    "out" == e.hoverState && e.hide()
                }, e.options.delay.hide)) : e.hide())
            }, e.prototype.show = function () {
                var t = $.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(t);
                    var n = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (t.isDefaultPrevented() || !n)return;
                    var i = this, o = this.tip(), r = this.getUID(this.type);
                    this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, l = a.test(s);
                    l && (s = s.replace(a, "") || "top"), o.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var u = this.getPosition(), c = o[0].offsetWidth, p = o[0].offsetHeight;
                    if (l) {
                        var d = s, f = this.getPosition(this.$viewport);
                        s = "bottom" == s && u.bottom + p > f.bottom ? "top" : "top" == s && u.top - p < f.top ? "bottom" : "right" == s && u.right + c > f.width ? "left" : "left" == s && u.left - c < f.left ? "right" : s, o.removeClass(d).addClass(s)
                    }
                    var h = this.getCalculatedOffset(s, u, c, p);
                    this.applyPlacement(h, s);
                    var g = function () {
                        var t = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                    };
                    $.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
                }
            }, e.prototype.applyPlacement = function (t, e) {
                var n = this.tip(), i = n[0].offsetWidth, o = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10), s = parseInt(n.css("margin-left"), 10);
                isNaN(r) && (r = 0), isNaN(s) && (s = 0), t.top += r, t.left += s, $.offset.setOffset(n[0], $.extend({
                    using: function (t) {
                        n.css({top: Math.round(t.top), left: Math.round(t.left)})
                    }
                }, t), 0), n.addClass("in");
                var a = n[0].offsetWidth, l = n[0].offsetHeight;
                "top" == e && l != o && (t.top = t.top + o - l);
                var u = this.getViewportAdjustedDelta(e, t, a, l);
                u.left ? t.left += u.left : t.top += u.top;
                var c = /top|bottom/.test(e), p = c ? 2 * u.left - i + a : 2 * u.top - o + l, d = c ? "offsetWidth" : "offsetHeight";
                n.offset(t), this.replaceArrow(p, n[0][d], c)
            }, e.prototype.replaceArrow = function (t, e, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
            }, e.prototype.setContent = function () {
                var t = this.tip(), e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            }, e.prototype.hide = function (t) {
                function n() {
                    "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
                }

                var i = this, o = $(this.$tip), r = $.Event("hide.bs." + this.type);
                return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (o.removeClass("in"), $.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this)
            }, e.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, e.prototype.hasContent = function () {
                return this.getTitle()
            }, e.prototype.getPosition = function (t) {
                t = t || this.$element;
                var e = t[0], n = "BODY" == e.tagName, i = e.getBoundingClientRect();
                null == i.width && (i = $.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
                var o = n ? {
                    top: 0,
                    left: 0
                } : t.offset(), r = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()}, s = n ? {
                    width: $(window).width(),
                    height: $(window).height()
                } : null;
                return $.extend({}, i, r, s, o)
            }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left - n
                } : {top: e.top + e.height / 2 - i / 2, left: e.left + e.width}
            }, e.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
                var o = {top: 0, left: 0};
                if (!this.$viewport)return o;
                var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
                    a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
                } else {
                    var u = e.left - r, c = e.left + r + n;
                    u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
                }
                return o
            }, e.prototype.getTitle = function () {
                var t, e = this.$element, n = this.options;
                return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
            }, e.prototype.getUID = function (t) {
                do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
                return t
            }, e.prototype.tip = function () {
                if (!this.$tip && (this.$tip = $(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, e.prototype.enable = function () {
                this.enabled = !0
            }, e.prototype.disable = function () {
                this.enabled = !1
            }, e.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, e.prototype.toggle = function (t) {
                var e = this;
                t && (e = $(t.currentTarget).data("bs." + this.type), e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
            }, e.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout), this.hide(function () {
                    t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
                })
            };
            var n = $.fn.tooltip;
            $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function () {
                return $.fn.tooltip = n, this
            }
        }(jQuery)
    }, 96: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.popover"), o = "object" == typeof t && t;
                    (i || !/destroy|hide/.test(t)) && (i || n.data("bs.popover", i = new e(this, o)), "string" == typeof t && i[t]())
                })
            }

            var e = function (t, e) {
                this.init("popover", t, e)
            };
            if (!$.fn.tooltip)throw new Error("Popover requires tooltip.js");
            e.VERSION = "3.3.5", e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.setContent = function () {
                var t = this.tip(), e = this.getTitle(), n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
            }, e.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }, e.prototype.getContent = function () {
                var t = this.$element, e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            };
            var n = $.fn.popover;
            $.fn.popover = t, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function () {
                return $.fn.popover = n, this
            }
        }(jQuery)
    }, 97: function (t, exports) {
        "use strict";
        +function ($) {
            function t(e, n) {
                this.$body = $(document.body), this.$scrollElement = $($(e).is(document.body) ? window : e), this.options = $.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this)), this.refresh(), this.process()
            }

            function e(e) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.scrollspy"), o = "object" == typeof e && e;
                    i || n.data("bs.scrollspy", i = new t(this, o)), "string" == typeof e && i[e]()
                })
            }

            t.VERSION = "3.3.5", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, t.prototype.refresh = function () {
                var t = this, e = "offset", n = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), $.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var t = $(this), i = t.data("target") || t.attr("href"), o = /^#./.test(i) && $(i);
                    return o && o.length && o.is(":visible") && [[o[e]().top + n, i]] || null
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).each(function () {
                    t.offsets.push(this[0]), t.targets.push(this[1])
                })
            }, t.prototype.process = function () {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
                if (s && e < o[0])return this.activeTarget = null, this.clear();
                for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
            }, t.prototype.activate = function (t) {
                this.activeTarget = t, this.clear();
                var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = $(e).parents("li").addClass("active");
                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
            }, t.prototype.clear = function () {
                $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var n = $.fn.scrollspy;
            $.fn.scrollspy = e, $.fn.scrollspy.Constructor = t, $.fn.scrollspy.noConflict = function () {
                return $.fn.scrollspy = n, this
            }, $(window).on("load.bs.scrollspy.data-api", function () {
                $('[data-spy="scroll"]').each(function () {
                    var t = $(this);
                    e.call(t, t.data())
                })
            })
        }(jQuery)
    }, 98: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.tab");
                    i || n.data("bs.tab", i = new e(this)), "string" == typeof t && i[t]()
                })
            }

            var e = function (t) {
                this.element = $(t)
            };
            e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
                var t = this.element, e = t.closest("ul:not(.dropdown-menu)"), n = t.data("target");
                if (n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                    var i = e.find(".active:last a"), o = $.Event("hide.bs.tab", {relatedTarget: t[0]}), r = $.Event("show.bs.tab", {relatedTarget: i[0]});
                    if (i.trigger(o), t.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        var s = $(n);
                        this.activate(t.closest("li"), e), this.activate(s, s.parent(), function () {
                            i.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: i[0]
                            })
                        })
                    }
                }
            }, e.prototype.activate = function (t, n, i) {
                function o() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
                }

                var r = n.find("> .active"), s = i && $.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
                r.length && s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), r.removeClass("in")
            };
            var n = $.fn.tab;
            $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function () {
                return $.fn.tab = n, this
            };
            var i = function (e) {
                e.preventDefault(), t.call($(this), "show")
            };
            $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
        }(jQuery)
    }, 99: function (t, exports) {
        "use strict";
        +function ($) {
            function t(t) {
                return this.each(function () {
                    var n = $(this), i = n.data("bs.affix"), o = "object" == typeof t && t;
                    i || n.data("bs.affix", i = new e(this, o)), "string" == typeof t && i[t]()
                })
            }

            var e = function i(t, e) {
                this.options = $.extend({}, i.DEFAULTS, e), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
            };
            e.VERSION = "3.3.5", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
                offset: 0,
                target: window
            }, e.prototype.getState = function (t, e, n, i) {
                var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
                if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
                if ("bottom" == this.affixed)return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
                var a = null == this.affixed, l = a ? o : r.top, u = a ? s : e;
                return null != n && n >= o ? "top" : null != i && l + u >= t - i ? "bottom" : !1
            }, e.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset)return this.pinnedOffset;
                this.$element.removeClass(e.RESET).addClass("affix");
                var t = this.$target.scrollTop(), n = this.$element.offset();
                return this.pinnedOffset = n.top - t
            }, e.prototype.checkPositionWithEventLoop = function () {
                setTimeout($.proxy(this.checkPosition, this), 1)
            }, e.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(), n = this.options.offset, i = n.top, o = n.bottom, r = Math.max($(document).height(), $(document.body).height());
                    "object" != typeof n && (o = i = n), "function" == typeof i && (i = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
                    var s = this.getState(r, t, i, o);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var a = "affix" + (s ? "-" + s : ""), l = $.Event(a + ".bs.affix");
                        if (this.$element.trigger(l), l.isDefaultPrevented())return;
                        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == s && this.$element.offset({top: r - t - o})
                }
            };
            var n = $.fn.affix;
            $.fn.affix = t, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function () {
                return $.fn.affix = n, this
            }, $(window).on("load", function () {
                $('[data-spy="affix"]').each(function () {
                    var e = $(this), n = e.data();
                    n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(e, n)
                })
            })
        }(jQuery)
    }, 100: function (t, exports) {
    }
});