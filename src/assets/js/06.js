! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function i() {
        var e, t, n, o, i, a, s;
        for (var u in b) {
            if (e = [], t = b[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? N[s[0]] = o : (!N[s[0]] || N[s[0]] instanceof Boolean || (N[s[0]] = new Boolean(N[s[0]])), N[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
        }
    }

    function a(e) {
        var t = x.className,
            n = N._config.classPrefix || "";
        if (w && (t = t.baseVal), N._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        N._config.enableClasses && (t += " " + n + e.join(" " + n), w ? x.className.baseVal = t : x.className = t)
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function l(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function c(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var o;
        for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? c(o, n || t) : o);
        return !1
    }

    function f() {
        var e = t.body;
        return e || (e = o(w ? "svg" : "body"), e.fake = !0), e
    }

    function p(e, n, r, i) {
        var a, s, u, l, c = "modernizr",
            d = o("div"),
            p = f();
        if (parseInt(r, 10))
            for (; r--;) u = o("div"), u.id = i ? i[r] : c + (r + 1), d.appendChild(u);
        return a = o("style"), a.type = "text/css", a.id = "s" + c, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = l, x.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function h(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(l(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + l(t[o]) + ":" + r + ")");
            return i = i.join(" or "), p("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, i, a) {
        function l() {
            d && (delete j.style, delete j.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(i, "undefined")) {
            var c = h(e, i);
            if (!r(c, "undefined")) return c
        }
        for (var d, f, p, g, m, v = ["modernizr", "tspan"]; !j.style;) d = !0, j.modElem = o(v.shift()), j.style = j.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (g = e[f], m = j.style[g], s(g, "-") && (g = u(g)), j.style[g] !== n) {
                if (a || r(i, "undefined")) return l(), "pfx" == t ? g : !0;
                try {
                    j.style[g] = i
                } catch (y) {}
                if (j.style[g] != m) return l(), "pfx" == t ? g : !0
            }
        return l(), !1
    }

    function m(e, t, n, o, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + k.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : (s = (e + " " + S.join(a + " ") + a).split(" "), d(s, t, n))
    }

    function v(e, t, r) {
        return m(e, n, n, t, r)
    }
    var y = [],
        b = [],
        x = t.documentElement,
        w = "svg" === x.nodeName.toLowerCase(),
        T = "Moz O ms Webkit",
        C = {
            _version: "3.0.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        N = function () {};
    N.prototype = C, N = new N, N.addTest("rgba", function () {
        var e = o("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var E = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    C._prefixes = E, N.addTest("opacity", function () {
        var e = o("a").style;
        return e.cssText = E.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    });
    var S = C._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    C._domPrefixes = S;
    var k = C._config.usePrefixes ? T.split(" ") : [];
    C._cssomPrefixes = k;
    var A = {
        elem: o("modernizr")
    };
    N._q.push(function () {
        delete A.elem
    });
    var j = {
        style: A.elem.style
    };
    N._q.unshift(function () {
        delete j.style
    }), C.testAllProps = m, C.testAllProps = v, N.addTest("cssanimations", v("animationName", "a", !0)), N.addTest("borderradius", v("borderRadius", "0px", !0)), N.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), N.addTest("csstransitions", v("transition", "all", !0)), N.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
    });
    var L = C.testProp = function (e, t, r) {
        return g([e], n, t, r)
    };
    N.addTest("textshadow", L("textShadow", "1px 1px")), i(), a(y), delete C.addTest, delete C.addAsyncTest;
    for (var D = 0; D < N._q.length; D++) N._q[D]();
    e.Modernizr = N
}(window, document), ! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function i(e) {
        var t = xe[e] = {};
        return oe.each(e.match(be) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), oe.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? oe.parseJSON(n) : n
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (oe.acceptData(e)) {
            var o, i, a = oe.expando,
                s = e.nodeType,
                u = s ? oe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = G.pop() || oe.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = oe.extend(u[l], t) : u[l].data = oe.extend(u[l].data, t)), i = u[l], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[oe.camelCase(t)] = n), "string" == typeof t ? (o = i[t], null == o && (o = i[oe.camelCase(t)])) : o = i, o
        }
    }

    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var r, o, i = e.nodeType,
                a = i ? oe.cache : e,
                s = i ? e[oe.expando] : oe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in r ? t = [t] : (t = oe.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete r[t[o]];
                    if (n ? !l(r) : !oe.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (i ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, r, o = 0,
            i = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!i)
            for (i = [], n = e.childNodes || e; null != (r = n[o]); o++) !t || oe.nodeName(r, t) ? i.push(r) : oe.merge(i, m(r, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], i) : i
    }

    function v(e) {
        Le.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) oe._data(n, "globalEval", !t || oe._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, r, o, i = oe._data(e),
                a = oe._data(t, i),
                s = i.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, o = s[n].length; o > r; r++) oe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = oe.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (r in o.events) oe.removeEvent(t, r, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, o = oe(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : oe.css(o[0], "display");
        return o.detach(), i
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Ke.detach()), Ze[e] = n), n
    }

    function S(e, t) {
        return {
            get: function () {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = ft.length; o--;)
            if (t = ft[o] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = oe._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (i[a] = oe._data(r, "olddisplay", E(r.nodeName)))) : (o = Ae(r), (n && "none" !== n || !o) && oe._data(r, "olddisplay", o ? n : oe.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function L(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += oe.css(e, n + ke[i], !0, o)), r ? ("content" === n && (a -= oe.css(e, "padding" + ke[i], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + ke[i] + "Width", !0, o))) : (a += oe.css(e, "padding" + ke[i], !0, o), "padding" !== n && (a += oe.css(e, "border" + ke[i] + "Width", !0, o)));
        return a
    }

    function D(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = et(e),
            a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = tt(e, t, i), (0 > o || null == o) && (o = e.style[t]), rt.test(o)) return o;
            r = a && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + L(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }

    function q(e, t, n, r, o) {
        return new q.prototype.init(e, t, n, r, o)
    }

    function P() {
        return setTimeout(function () {
            pt = void 0
        }), pt = oe.now()
    }

    function H(e, t) {
        var n, r = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = ke[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function _(e, t, n) {
        for (var r, o = (bt[t] || []).concat(bt["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function M(e, t, n) {
        var r, o, i, a, s, u, l, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            g = oe._data(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), c = "none" === l ? oe._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], gt.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    h = !0
                }
                f[r] = g && g[r] || oe.style(e, r)
            } else l = void 0;
        if (oe.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = oe._data(e, "fxshow", {}), i && (g.hidden = !h), h ? oe(e).show() : d.done(function () {
                oe(e).hide()
            }), d.done(function () {
                var t;
                oe._removeData(e, "fxshow");
                for (t in f) oe.style(e, t, f[t])
            });
            for (r in f) a = _(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function B(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = oe.camelCase(n), o = t[r], i = e[n], oe.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = oe.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function O(e, t, n) {
        var r, o, i = 0,
            a = yt.length,
            s = oe.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (o) return !1;
                for (var t = pt || P(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(i);
                return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || P(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (B(c, l.opts.specialEasing); a > i; i++)
            if (r = yt[i].call(l, e, c, l.opts)) return r;
        return oe.map(c, _, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(be) || [];
            if (oe.isFunction(n))
                for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function F(e, t, n, r) {
        function o(s) {
            var u;
            return i[s] = !0, oe.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
            }), u
        }
        var i = {},
            a = e === Wt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function z(e, t) {
        var n, r, o = oe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
        return n && oe.extend(!0, e, n), e
    }

    function $(e, t, n) {
        for (var r, o, i, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) i = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    i = a;
                    break
                }
                r || (r = a)
            }
            i = i || r
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }

    function W(e, t, n, r) {
        var o, i, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
            if (a = l[u + " " + i] || l["* " + i], !a)
                for (o in l)
                    if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + u + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var o;
        if (oe.isArray(t)) oe.each(t, function (t, o) {
            n || Ut.test(e) ? r(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (o in t) I(e + "[" + o + "]", t[o], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function J() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var G = [],
        V = G.slice,
        Q = G.concat,
        Y = G.push,
        K = G.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.1",
        oe = function (e, t) {
            return new oe.fn.init(e, t)
        },
        ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return V.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return oe.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: G.sort,
        splice: G.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (o = arguments[s]))
                for (r in o) e = a[r], n = o[r], a !== n && (l && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, i = e && oe.isArray(e) ? e : []) : i = e && oe.isPlainObject(e) ? e : {}, a[r] = oe.extend(l, i, n)) : void 0 !== n && (a[r] = n));
        return a
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === oe.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !oe.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && oe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(se, ue)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.apply(e[i], r), o === !1) break
            } else if (s)
                for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
            else
                for (i in e)
                    if (o = t.call(e[i], i, e[i]), o === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ie, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r;) e[o++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[o++] = t[r++];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },
        map: function (e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > i; i++) o = t(e[i], i, r), null != o && u.push(o);
            else
                for (i in e) o = t(e[i], i, r), null != o && u.push(o);
            return Q.apply([], u)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = V.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(V.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var le = function (e) {
        function t(e, t, n, r) {
            var o, i, a, s, u, l, d, p, h, g;
            if ((t ? t.ownerDocument || t : F) !== q && D(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (H && !r) {
                if (o = ye.exec(e))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (i = t.getElementById(a), !i || !i.parentNode) return n;
                            if (i.id === a) return n.push(i), n
                        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && O(t, i) && i.id === a) return n.push(i), n
                    } else {
                        if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!_ || !_.test(e))) {
                    if (p = d = R, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                        h = be.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[R] = !0, e
        }

        function o(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = $++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function (t, n, a) {
                var s, u, l = [z, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === z && s[1] === i) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), l && t.push(s));
            return a
        }

        function v(e, t, n, o, i, a) {
            return o && !o[R] && (o = v(o)), i && !i[R] && (i = v(i, a)), r(function (r, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : m(v, f, e, s, u),
                    b = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, u), o)
                    for (l = m(b, p), o(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            i(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = i ? te.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = m(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, u) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, o = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, u = p(function (e) {
                    return e === t
                }, a, !0), l = p(function (e) {
                    return te.call(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    return !i && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; o > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (r = ++s; o > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function (r, a, s, u, l) {
                    var c, d, f, p = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = A,
                        b = r || i && T.find.TAG("*", l),
                        x = z += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (A = a !== q && a); h !== w && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (z = x)
                        }
                        o && ((c = !f && c) && p--, r && g.push(c))
                    }
                    if (p += h, o && h !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = Y.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (z = x, A = y), g
                };
            return o ? r(a) : a
        }
        var x, w, T, C, N, E, S, k, A, j, L, D, q, P, H, _, M, B, O, R = "sizzle" + -new Date,
            F = e.document,
            z = 0,
            $ = 0,
            W = n(),
            I = n(),
            X = n(),
            J = function (e, t) {
                return e === t && (L = !0), 0
            },
            U = "undefined",
            G = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            K = Q.push,
            Z = Q.push,
            ee = Q.slice,
            te = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = oe.replace("w", "w#"),
            ae = "\\[" + re + "*(" + oe + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
            se = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            de = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            fe = new RegExp(se),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Te = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = ee.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function (e, t) {
                    K.apply(e, ee.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : F,
                r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, P = n.documentElement, H = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                D()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                D()
            })), w.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = o(function (e) {
                return P.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== U && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== U && H ? t.getElementsByClassName(e) : void 0
            }, M = [], _ = [], (w.qsa = ve.test(n.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && _.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || _.push(":checked")
            }), o(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
            })), (w.matchesSelector = ve.test(B = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
                w.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), M.push("!=", se)
            }), _ = _.length && new RegExp(_.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(P.compareDocumentPosition), O = t || ve.test(P.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, J = t ? function (e, t) {
                if (e === t) return L = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === F && O(F, e) ? -1 : t === n || t.ownerDocument === F && O(F, t) ? 1 : j ? te.call(j, e) - te.call(j, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return L = !0, 0;
                var r, o = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!i || !s) return e === n ? -1 : t === n ? 1 : i ? -1 : s ? 1 : j ? te.call(j, e) - te.call(j, t) : 0;
                if (i === s) return a(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[o] === l[o];) o++;
                return o ? a(u[o], l[o]) : u[o] === F ? -1 : l[o] === F ? 1 : 0
            }, n) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && D(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !H || M && M.test(n) || _ && _.test(n))) try {
                var r = B.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && D(e), O(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (L = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(J), L) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, d, f, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (m) {
                            if (i) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[R] || (m[R] = {}), l = c[e] || [], p = l[0] === z && l[1], f = l[0] === z && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [z, p, f];
                                        break
                                    }
                            } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === z) f = l[1];
                            else
                                for (;
                                    (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[R] || (d[R] = {}))[e] = [z, f]), d !== t)););
                            return f -= o, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[R] ? i(n) : i.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = te.call(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(ue, "$1"));
                    return o[R] ? r(function (e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function (e, r, i) {
                        return t[0] = e, o(t, null, i, n), !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === P
                },
                focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return ge.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
            var r, o, i, a, s, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, S = t.compile = function (e, t) {
            var n, r = [],
                o = [],
                i = X[e + " "];
            if (!i) {
                for (t || (t = E(e)), n = t.length; n--;) i = y(t[n]), i[R] ? r.push(i) : o.push(i);
                i = X(e, b(o, r)), i.selector = e
            }
            return i
        }, k = t.select = function (e, t, n, r) {
            var o, i, a, s, u, l = "function" == typeof e && e,
                d = !r && E(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && H && T.relative[i[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && f(i), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || S(e, d))(r, t, !H, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = R.split("").sort(J).join("") === R, w.detectDuplicates = !!L, D(), w.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || i(ne, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = le, oe.expr = le.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = le.uniqueSort, oe.text = le.getText, oe.isXMLDoc = le.isXML, oe.contains = le.contains;
    var ce = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                o = r.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; o > t; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, r[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = oe.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    me.prototype = oe.fn, pe = oe(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function (e, t, n) {
            for (var r = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && r.push(o), o = o[t];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function (e) {
            var t, n = oe(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, o = this.length, i = [], a = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? oe.unique(i) : i)
        },
        index: function (e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return oe.sibling(e.firstChild)
        },
        contents: function (e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, r) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = oe.filter(r, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        xe = {};
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? xe[e] || i(e) : oe.extend({}, e);
        var t, n, r, o, a, s, u = [],
            l = !e.once && [],
            c = function (i) {
                for (n = e.memory && i, r = !0, a = s || 0, s = 0, o = u.length, t = !0; u && o > a; a++)
                    if (u[a].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
            },
            d = {
                add: function () {
                    if (u) {
                        var r = u.length;
                        ! function i(t) {
                            oe.each(t, function (t, n) {
                                var r = oe.type(n);
                                "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), t ? o = u.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function () {
                    return u && oe.each(arguments, function (e, n) {
                        for (var r;
                            (r = oe.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], o = 0, this
                },
                disable: function () {
                    return u = l = n = void 0, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return l = void 0, n || d.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, i) {
                                var a = oe.isFunction(e[t]) && e[t];
                                o[i[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, oe.each(t, function (e, i) {
                var a = i[2],
                    s = i[3];
                r[i[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, r, o = 0,
                i = V.call(arguments),
                a = i.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : oe.Deferred(),
                l = function (e, n, r) {
                    return function (o) {
                        n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && oe.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(u.reject).progress(l(o, n, t)) : --s;
            return s || u.resolveWith(r, i), u.promise()
        }
    });
    var we;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!he.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
            }
        }
    }), oe.ready.promise = function (t) {
        if (!we)
            if (we = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (r) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    a(), oe.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, Ce = "undefined";
    for (Te in oe(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, oe(function () {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function () {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function (e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !l(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(i), 1 === i.nodeType && !oe._data(i, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(i, r, o[r])));
                    oe._data(i, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                oe.data(this, e, t)
            }) : i ? u(i, e, oe.data(i, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = oe._data(e, t), n && (!r || oe.isArray(n) ? r = oe._data(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = oe._queueHooks(e, t),
                a = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                o = oe.Deferred(),
                i = this,
                a = this.length,
                s = function () {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Ae = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        je = oe.access = function (e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (s in n) oe.access(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, oe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(oe(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        Le = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function () {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        qe = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        _e = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function (e, t, n, r, o) {
            var i, a, s, u, l, c, d, f, p, h, g, m = oe._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, o = u.selector), n.guid || (n.guid = oe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                        return typeof oe === Ce || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) i = _e.exec(t[s]) || [], p = g = i[1], h = (i[2] || "").split(".").sort(), p && (l = oe.event.special[p] || {}, p = (o ? l.delegateType : l.bindType) || p, l = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, o) {
            var i, a, s, u, l, c, d, f, p, h, g, m = oe.hasData(e) && oe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(be) || [""], l = t.length; l--;)
                    if (s = _e.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = i = f.length; i--;) a = f[i], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(i, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) oe.event.remove(e, p + t[l], n, r, !0);
                oe.isEmptyObject(c) && (delete m.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, o) {
            var i, a, s, u, l, c, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), l = oe.event.special[p] || {}, o || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!o && !l.noBubble && !oe.isWindow(r)) {
                    for (u = l.delegateType || p, He.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, i = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), i && i.apply(s, n), i = a && s[a], i && i.apply && oe.acceptData(s) && (t.result = i.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && oe.acceptData(r) && a && r[p] && !oe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), oe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (g) {}
                    oe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, r, o, i, a = [],
                s = V.call(arguments),
                u = (oe._data(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, u), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, o, i, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], i = 0; s > i; i++) r = t[i], n = r.selector + " ", void 0 === o[n] && (o[n] = r.needsContext ? oe(n, this).index(u) >= 0 : oe.find(n, this, null, [u]).length), o[n] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Pe.test(o) ? this.mouseHooks : qe.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, o, i = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = he.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return (!o || o !== r && !oe.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function () {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                De.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return oe.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    o = oe._data(r, t);
                o || r.addEventListener(e, n, !0), oe._data(r, t, (o || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    o = oe._data(r, t) - 1;
                o ? oe._data(r, t, o) : (r.removeEventListener(e, n, !0), oe._removeData(r, t))
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (i in e) this.on(i, t, n, e[i], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === o && (a = r, r = function (e) {
                return oe().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = oe.guid++)), this.each(function () {
                oe.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Be = / jQuery\d+="(?:null|\d+)"/g,
        Oe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Re = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ze = /<([\w:]+)/,
        $e = /<tbody/i,
        We = /<|&#?\w+;/,
        Ie = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Je = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Qe = g(he),
        Ye = Qe.appendChild(he.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, oe.extend({
        clone: function (e, t, n) {
            var r, o, i, a, s, u = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Ye.innerHTML = e.outerHTML, Ye.removeChild(i = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (r = m(i), s = m(e), a = 0; null != (o = s[a]); ++a) r[a] && C(o, r[a]);
            if (t)
                if (n)
                    for (s = s || m(e), r = r || m(i), a = 0; null != (o = s[a]); a++) T(o, r[a]);
                else T(e, i);
            return r = m(i, "script"), r.length > 0 && w(r, !u && m(e, "script")), r = s = o = null, i
        },
        buildFragment: function (e, t, n, r) {
            for (var o, i, a, s, u, l, c, d = e.length, f = g(t), p = [], h = 0; d > h; h++)
                if (i = e[h], i || 0 === i)
                    if ("object" === oe.type(i)) oe.merge(p, i.nodeType ? [i] : i);
                    else if (We.test(i)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (ze.exec(i) || ["", ""])[1].toLowerCase(), c = Ve[u] || Ve._default, s.innerHTML = c[1] + i.replace(Fe, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Re.test(i) && p.push(t.createTextNode(Re.exec(i)[0])), !ne.tbody)
                    for (i = "table" !== u || $e.test(i) ? "<table>" !== c[1] || $e.test(i) ? 0 : s : s.firstChild, o = i && i.childNodes.length; o--;) oe.nodeName(l = i.childNodes[o], "tbody") && !l.childNodes.length && i.removeChild(l);
                for (oe.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(i));
            for (s && f.removeChild(s), ne.appendChecked || oe.grep(m(p, "input"), v), h = 0; i = p[h++];)
                if ((!r || -1 === oe.inArray(i, r)) && (a = oe.contains(i.ownerDocument, i),
                        s = m(f.appendChild(i), "script"), a && w(s), n))
                    for (o = 0; i = s[o++];) Je.test(i.type || "") && n.push(i);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, r, o, i, a = 0, s = oe.expando, u = oe.cache, l = ne.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
                if ((t || oe.acceptData(n)) && (o = n[s], i = o && u[o])) {
                    if (i.events)
                        for (r in i.events) c[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, i.handle);
                    u[o] && (delete u[o], l ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, G.push(o))
                }
        }
    }), oe.fn.extend({
        text: function (e) {
            return je(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? oe.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return je(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Be, "") : void 0;
                if (!("string" != typeof e || Ie.test(e) || !ne.htmlSerialize && Oe.test(e) || !ne.leadingWhitespace && Re.test(e) || Ve[(ze.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Q.apply([], e);
            var n, r, o, i, a, s, u = 0,
                l = this.length,
                c = this,
                d = l - 1,
                f = e[0],
                p = oe.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function (n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (i = oe.map(m(s, "script"), b), o = i.length; l > u; u++) r = s, u !== d && (r = oe.clone(r, !0, !0), o && oe.merge(i, m(r, "script"))), t.call(this[u], r, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, oe.map(i, x), u = 0; o > u; u++) r = i[u], Je.test(r.type || "") && !oe._data(r, "globalEval") && oe.contains(a, r) && (r.src ? oe._evalUrl && oe._evalUrl(r.src) : oe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ge, "")));
                s = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, r = 0, o = [], i = oe(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), oe(i[r])[t](n), Y.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ke, Ze = {};
    ! function () {
        var e;
        ne.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tt = function (e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function (e) {
        return e.currentStyle
    }, tt = function (e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !ot.test(t) && (r = s.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, i && (o.left = i)), void 0 === a ? a : a + "" || "auto"
    }), ! function () {
        function t() {
            var t, n, r, o;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = a = !1, u = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(r))
        }
        var n, r, o, i, a, s, u;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (r = o && o.style) && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, oe.extend(ne, {
            reliableHiddenOffsets: function () {
                return null == s && t(), s
            },
            boxSizingReliable: function () {
                return null == a && t(), a
            },
            pixelPosition: function () {
                return null == i && t(), i
            },
            reliableMarginRight: function () {
                return null == u && t(), u
            }
        }))
    }(), oe.swap = function (e, t, n, r) {
        var o, i, a = {};
        for (i in t) a[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t) e.style[i] = a[i];
        return o
    };
    var it = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + Se + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + Se + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
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
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = oe.camelCase(t),
                    u = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = k(u, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                if (i = typeof n, "string" === i && (o = lt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function (e, t, n, r) {
            var o, i, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = k(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = tt(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || oe.isNumeric(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? st.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function () {
                    return D(e, t, r)
                }) : D(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var o = r && et(e);
                return j(e, n, r ? L(e, t, r, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function (e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(i.replace(it, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = it.test(i) ? i.replace(it, o) : i + " " + o)
        }
    }), oe.cssHooks.marginRight = S(ne.reliableMarginRight, function (e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + ke[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = j)
    }), oe.fn.extend({
        css: function (e, t) {
            return je(this, function (e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (r = et(e), o = t.length; o > a; a++) i[t[a]] = oe.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return A(this, !0)
        },
        hide: function () {
            return A(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ae(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = q, q.prototype = {
        constructor: q,
        init: function (e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = q.prototype.init, oe.fx.step = {};
    var pt, ht, gt = /^(?:toggle|show|hide)$/,
        mt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [M],
        bt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    o = mt.exec(t),
                    i = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    a = (oe.cssNumber[e] || "px" !== i && +r) && mt.exec(oe.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== i) {
                    i = i || a[3], o = o || [], a = +r || 1;
                    do s = s || ".5", a /= s, oe.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(O, {
            tweener: function (e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), oe.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
            }, r
        }, oe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var o = oe.isEmptyObject(e),
                    i = oe.speed(t, n, r),
                    a = function () {
                        var t = O(this, oe.extend({}, e), i);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = oe.timers,
                        a = oe._data(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = oe._data(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = oe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, o)
            }
        }), oe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            oe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var e, t = oe.timers,
                n = 0;
            for (pt = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe.fx.stop(), pt = void 0
        }, oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            clearInterval(ht), ht = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function (e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var e, t, n, r, o;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = oe.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), i) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, r, o = e.options, i = oe.makeArray(t), a = o.length; a--;)
                        if (r = o[a], oe.inArray(oe.valHooks.option.get(r), i) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Tt, Ct = oe.expr.attrHandle,
        Nt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        St = ne.input;
    oe.fn.extend({
        attr: function (e, t) {
            return je(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var r, o, i = e.nodeType;
            return e && 3 !== i && 8 !== i && 2 !== i ? typeof e.getAttribute === Ce ? oe.prop(e, t, n) : (1 === i && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, r, o = 0,
                i = t && t.match(be);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? St && Et || !Nt.test(n) ? e[r] = !1 : e[oe.camelCase("default-" + n)] = e[r] = !1 : oe.attr(e, n, ""), e.removeAttribute(Et ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function (e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : St && Et || !Nt.test(n) ? e.setAttribute(!Et && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ct[t] || oe.find.attr;
        Ct[t] = St && Et || !Nt.test(t) ? function (e, t, r) {
            var o, i;
            return r || (i = Ct[t], Ct[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = i), o
        } : function (e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), St && Et || (oe.attrHooks.value = {
        set: function (e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), Et || (wt = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, oe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, oe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, oe.each(["width", "height"], function (e, t) {
        oe.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var kt = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return je(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = oe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var r, o, i, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (i = 1 !== a || !oe.isXMLDoc(e), i && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function (e, t) {
        oe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, r, o, i, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, o, i, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        a = e ? oe.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function (n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, r = 0, o = oe(this), i = e.match(be) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Lt = oe.now(),
        Dt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(qt, function (e, t, o, i) {
            return n && t && (r = 0), 0 === r ? e : (n = o || t, r += !i - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var Pt, Ht, _t = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        Wt = {},
        It = "*/".concat("*");
    try {
        Ht = location.href
    } catch (Xt) {
        Ht = he.createElement("a"), Ht.href = "", Ht = Ht.href
    }
    Pt = zt.exec(Ht.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht,
            type: "GET",
            isLocal: Ot.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? z(z(e, oe.ajaxSettings), t) : z(oe.ajaxSettings, e)
        },
        ajaxPrefilter: R($t),
        ajaxTransport: R(Wt),
        ajax: function (e, t) {
            function n(e, t, n, r) {
                var o, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = W(d, y, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (oe.etag[i] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, o = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", o ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(m), m = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? c : v]), g.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, s, u, l, c, d = oe.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                h = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ht) + "").replace(_t, "").replace(Ft, Pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = zt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Pt[1] && r[2] === Pt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), F($t, d, t, w), 2 === b) return w;
            u = d.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (Dt.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(i) ? i.replace(Mt, "$1_=" + Lt++) : i + (Dt.test(i) ? "&" : "?") + "_=" + Lt++)), d.ifModified && (oe.lastModified[i] && w.setRequestHeader("If-Modified-Since", oe.lastModified[i]), oe.etag[i] && w.setRequestHeader("If-None-Match", oe.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](d[o]);
            if (l = F(Wt, d, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, r, o) {
            return oe.isFunction(n) && (o = o || r, r = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(oe.isFunction(e) ? function (t) {
                oe(this).wrapInner(e.call(this, t))
            } : function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function (e) {
        return !oe.expr.filters.hidden(e)
    };
    var Jt = /%20/g,
        Ut = /\[\]$/,
        Gt = /\r?\n/g,
        Vt = /^(?:submit|button|image|reset|file)$/i,
        Qt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, r = [],
            o = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, o);
        return r.join("&").replace(Jt, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Qt.test(this.nodeName) && !Vt.test(e) && (this.checked || !Le.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Gt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || J()
    } : X;
    var Yt = 0,
        Kt = {},
        Zt = oe.ajaxSettings.xhr();
    e.ActiveXObject && oe(e).on("unload", function () {
        for (var e in Kt) Kt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && oe.ajaxTransport(function (e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function (n, r) {
                    var o, i = e.xhr(),
                        a = ++Yt;
                    if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && i.setRequestHeader(o, n[o] + "");
                    i.send(e.hasContent && e.data || null), t = function (n, o) {
                        var s, u, l;
                        if (t && (o || 4 === i.readyState))
                            if (delete Kt[a], t = void 0, i.onreadystatechange = oe.noop, o) 4 !== i.readyState && i.abort();
                            else {
                                l = {}, s = i.status, "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    u = i.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, i.getAllResponseHeaders())
                    }, e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = Kt[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e),
                    e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = he.head || oe("head")[0] || he.documentElement;
            return {
                send: function (r, o) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || oe.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return a || oe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
            a = arguments
        }, r.always(function () {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), a && oe.isFunction(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], r.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = oe.trim(e.slice(s, e.length)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    oe.offset = {
        setOffset: function (e, t, n) {
            var r, o, i, a, s, u, l, c = oe.css(e, "position"),
                d = oe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), i = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [i, u]) > -1, l ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                i = o && o.ownerDocument;
            return i ? (t = i.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Ce && (r = o.getBoundingClientRect()), n = U(i), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === oe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(r, "marginTop", !0),
                    left: t.left - n.left - oe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || rn; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function (r) {
            return je(this, function (e, r, o) {
                var i = U(e);
                return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? oe(i).scrollLeft() : o, n ? o : oe(i).scrollTop()) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = S(ne.pixelPosition, function (e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            oe.fn[r] = function (r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return je(this, function (t, n, r) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var on = e.jQuery,
        an = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = an), t && e.jQuery === oe && (e.jQuery = on), oe
    }, typeof t === Ce && (e.jQuery = e.$ = oe), oe
}), jQuery && function (e) {
        function t(t, o) {
            var i = t ? e(this) : o,
                a = e(i.attr("data-jq-dropdown")),
                s = i.hasClass("jq-dropdown-open");
            if (t) {
                if (e(t.target).hasClass("jq-dropdown-ignore")) return;
                t.preventDefault(), t.stopPropagation()
            } else if (i !== o.target && e(o.target).hasClass("jq-dropdown-ignore")) return;
            n(), s || i.hasClass("jq-dropdown-disabled") || (i.addClass("jq-dropdown-open"), a.data("jq-dropdown-trigger", i).show(), r(), a.trigger("show", {
                jqDropdown: a,
                trigger: i
            }))
        }

        function n(t) {
            var n = t ? e(t.target).parents().addBack() : null;
            if (n && n.is(".jq-dropdown")) {
                if (!n.is(".jq-dropdown-menu")) return;
                if (!n.is("A")) return
            }
            e(document).find(".jq-dropdown:visible").each(function () {
                var t = e(this);
                t.hide().removeData("jq-dropdown-trigger").trigger("hide", {
                    jqDropdown: t
                })
            }), e(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open")
        }

        function r() {
            var t = e(".jq-dropdown:visible").eq(0),
                n = t.data("jq-dropdown-trigger"),
                r = n ? parseInt(n.attr("data-horizontal-offset") || 0, 10) : null,
                o = n ? parseInt(n.attr("data-vertical-offset") || 0, 10) : null;
            if (0 !== t.length && n)
                if (t.hasClass("jq-dropdown-relative")) {
                    var i = t.hasClass("jq-dropdown-anchor-right") ? n.position().left - (t.outerWidth(!0) - n.outerWidth(!0)) - parseInt(n.css("margin-right"), 10) + r : n.position().left + parseInt(n.css("margin-left"), 10) + r,
                        a = n.outerHeight(!0) + o;
                    t.hasClass("jq-dropdown-anchor-center") && (i = n.width() / 2 - t.width() / 2), t.css({
                        left: i,
                        top: a
                    })
                } else t.css({
                    left: t.hasClass("jq-dropdown-anchor-right") ? n.offset().left - (t.outerWidth() - n.outerWidth()) + r : n.offset().left + r,
                    top: n.offset().top + n.outerHeight() + o
                })
        }
        e.extend(e.fn, {
            jqDropdown: function (r, o) {
                switch (r) {
                    case "show":
                        return t(null, e(this)), e(this);
                    case "hide":
                        return n(), e(this);
                    case "attach":
                        return e(this).attr("data-jq-dropdown", o);
                    case "detach":
                        return n(), e(this).removeAttr("data-jq-dropdown");
                    case "disable":
                        return e(this).addClass("jq-dropdown-disabled");
                    case "enable":
                        return n(), e(this).removeClass("jq-dropdown-disabled")
                }
            }
        }), e(document).on("click.jq-dropdown show.jq-dropdown", "[data-jq-dropdown]", t), e(document).on("click.jq-dropdown hide.jq-dropdown", n), e(window).on("resize", r)
    }(jQuery),
    function (e) {
        function t(t, n) {
            throw e.extend(t, n), t
        }

        function n(t, r) {
            var o, i = [],
                s = f.call(t);
            if (r = r || c, s === u) return [t];
            if (s !== a) return [e.jqotec(t, r)];
            if (s === a)
                for (var l = 0, d = t.length; d > l; l++)(o = n(t[l], r)) && i.push(o[0]);
            return i.length ? i : !1
        }
        var r = "UndefinedTemplateError",
            o = "TemplateCompilationError",
            i = "TemplateExecutionError",
            a = "[object Array]",
            s = "[object String]",
            u = "[object Function]",
            l = 1,
            c = "%",
            d = /^[^<]*(<[\w\W]+>)[^>]*$/,
            f = Object.prototype.toString;
        e.fn.extend({
            jqote: function (t, n) {
                var r = "";
                return t = f.call(t) === a ? t : [t], this.each(function (o) {
                    for (var i = e.jqotec(this, n), a = 0; a < t.length; a++) r += i.call(t[a], o, a, t, i)
                }), r
            }
        }), e.extend({
            jqote: function (o, i, s) {
                o = e.jqotecache[o] || o;
                var u = "",
                    l = n(o, s);
                s = s || c, l === !1 && t(new Error("Empty or undefined template passed to $.jqote"), {
                    type: r
                }), i = f.call(i) !== a ? [i] : i;
                for (var d = 0, p = l.length; p > d; d++)
                    for (var h = 0; h < i.length; h++) u += l[d].call(i[h], d, h, i, l[d]);
                return u
            },
            jqotec: function (n, a) {
                var u, p, h, g = f.call(n),
                    m = !1;
                if (a = a || c, g === s && d.test(n)) {
                    if (p = h = n, u = e.jqotecache[n]) return u
                } else if (p = g === s || n.nodeType ? e(n) : n instanceof jQuery ? n : null, p[0] && ((h = p[0].innerHTML) || (h = p.text())) || t(new Error("Empty or undefined template passed to $.jqotec"), {
                        type: r
                    }), u = e.jqotecache[e.data(p[0], "jqote_id")]) return u;
                for (var v, y, b = "", x = [], w = h.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g, "").split("<" + a).join(a + ">").split(a + ">"), T = ['out.push("', '");', "out.push(", ");", "", "var out=[];", 'return out.join("");'], C = ['out+="', '";', "out+=", ";", "", 'var out="";', "return out;"], N = m ? T : C, E = 0, S = w.length; S > E; E++) {
                    var k = w[E];
                    k && ("" !== k.charAt(0) ? m ? (x.push(N[0]), x.push(k.replace(/([^\\])?(["'])/g, "$1\\$2")), x.push(N[1])) : b += N[0] + k.replace(/([^\\])?(["'])/g, "$1\\$2") + N[1] : "=" === k.charAt(1) ? m ? (x.push(N[2]), x.push(k.substr(2)), x.push(N[3])) : b += N[2] + k.substr(2) + N[3] : m ? (x.push(N[4]), x.push(k.substr(1))) : b += N[4] + k.substr(1), m ? x.push("\n") : b += "\n")
                }
                m ? (x.unshift("try{"), x.unshift(N[5]), x.push(N[6]), x.push('}catch(e){e.type="' + i + '";e.args=arguments;e.template=arguments.callee.toString();throw e;}'), b = x.join("")) : b = "try{" + N[5] + b + N[6] + '}catch(e){e.type="' + i + '";e.args=arguments;e.template=arguments.callee.toString();throw e;}';
                try {
                    y = new Function("i, j, data, fn", b)
                } catch (A) {
                    t(A, {
                        type: o
                    })
                }
                return v = p instanceof jQuery ? e.data(p[0], "jqote_id", l) : p, e.jqotecache[v] = (y.jqote_id = l++, y)
            },
            jqotefn: function (t) {
                var n = f.call(t),
                    r = n === s && d.test(t) ? t : e.data(e(t)[0], "jqote_id");
                return e.jqotecache[r] || !1
            },
            jqotetag: function (e) {
                f.call(e) === s && (c = e)
            },
            jqotenc: function (e) {
                return e.toString().replace(/&(?!\w+;)/g, "&#38;").split("<").join("&#60;").split(">").join("&#62;").split('"').join("&#34;").split("'").join("&#39;")
            },
            jqotecache: {}
        })
    }(jQuery),
    function ($) {
        var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
            meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
        $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function (e) {
            if (null === e) return "null";
            var t = typeof e;
            if ("undefined" !== t) {
                if ("number" === t || "boolean" === t) return "" + e;
                if ("string" === t) return $.quoteString(e);
                if ("object" === t) {
                    if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
                    if (e.constructor === Date) {
                        var n = e.getUTCMonth() + 1,
                            r = e.getUTCDate(),
                            o = e.getUTCFullYear(),
                            i = e.getUTCHours(),
                            a = e.getUTCMinutes(),
                            s = e.getUTCSeconds(),
                            u = e.getUTCMilliseconds();
                        return 10 > n && (n = "0" + n), 10 > r && (r = "0" + r), 10 > i && (i = "0" + i), 10 > a && (a = "0" + a), 10 > s && (s = "0" + s), 100 > u && (u = "0" + u), 10 > u && (u = "0" + u), '"' + o + "-" + n + "-" + r + "T" + i + ":" + a + ":" + s + "." + u + 'Z"'
                    }
                    if (e.constructor === Array) {
                        for (var l = [], c = 0; c < e.length; c++) l.push($.toJSON(e[c]) || "null");
                        return "[" + l.join(",") + "]"
                    }
                    var d, f, p = [];
                    for (var h in e) {
                        if (t = typeof h, "number" === t) d = '"' + h + '"';
                        else {
                            if ("string" !== t) continue;
                            d = $.quoteString(h)
                        }
                        t = typeof e[h], "function" !== t && "undefined" !== t && (f = $.toJSON(e[h]), p.push(d + ":" + f))
                    }
                    return "{" + p.join(",") + "}"
                }
            }
        }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (src) {
            return eval("(" + src + ")")
        }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (src) {
            var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }, $.quoteString = function (e) {
            return e.match(escapeable) ? '"' + e.replace(escapeable, function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
            }) + '"' : '"' + e + '"'
        }
    }(jQuery), window.AraleQRCode = function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        e.exports = n(1)
    }, function (e, t, n) {
        "use strict";
        e.exports = n(2)
    }, function (e, t, n) {
        "use strict";
        var r = n(4),
            o = [],
            i = n(3),
            a = function (e) {
                var t = e.options;
                return t.pdground && (e.row > 1 && e.row < 5 && e.col > 1 && e.col < 5 || e.row > e.count - 6 && e.row < e.count - 2 && e.col > 1 && e.col < 5 || e.row > 1 && e.row < 5 && e.col > e.count - 6 && e.col < e.count - 2) ? t.pdground : t.foreground
            },
            s = function (e) {
                var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                return (window.devicePixelRatio || 1) / t
            },
            u = function (e) {
                "string" == typeof e && (e = {
                    text: e
                }), this.options = r({}, {
                    text: "",
                    render: "",
                    size: 256,
                    correctLevel: 3,
                    background: "#ffffff",
                    foreground: "#000000",
                    image: "",
                    imageSize: 30
                }, e);
                for (var t = null, n = 0, a = o.length; a > n; n++)
                    if (o[n].text == this.options.text && o[n].text.correctLevel == this.options.correctLevel) {
                        t = o[n].obj;
                        break
                    }
                if (n == a && (t = new i(this.options.text, this.options.correctLevel), o.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: t
                    })), this.options.render) switch (this.options.render) {
                    case "canvas":
                        return this.createCanvas(t);
                    case "table":
                        return this.createTable(t);
                    case "svg":
                        return this.createSVG(t);
                    default:
                        return this.createDefault(t)
                }
                return this.createDefault(t)
            };
        r(u.prototype, {
            createDefault: function (e) {
                var t = document.createElement("canvas");
                if (t.getContext) return this.createCanvas(e);
                var n = "http://www.w3.org/2000/svg";
                return document.createElementNS && document.createElementNS(n, "svg").createSVGRect ? this.createSVG(e) : this.createTable(e)
            },
            createCanvas: function (e) {
                var t = this.options,
                    n = document.createElement("canvas"),
                    r = n.getContext("2d"),
                    o = e.getModuleCount(),
                    i = s(r),
                    u = t.size,
                    l = u * i,
                    c = t.imageSize * i,
                    d = function (e, t) {
                        var n = new Image;
                        n.src = e, n.onload = function () {
                            t(this), n.onload = null
                        }
                    },
                    f = (l / o).toPrecision(4),
                    p = (l / o).toPrecision(4);
                n.width = l, n.height = l;
                for (var h = 0; o > h; h++)
                    for (var g = 0; o > g; g++) {
                        var m = Math.ceil((g + 1) * f) - Math.floor(g * f),
                            v = Math.ceil((h + 1) * f) - Math.floor(h * f),
                            y = a({
                                row: h,
                                col: g,
                                count: o,
                                options: t
                            });
                        r.fillStyle = e.modules[h][g] ? y : t.background, r.fillRect(Math.round(g * f), Math.round(h * p), m, v)
                    }
                return t.image && d(t.image, function (e) {
                    var t = ((l - c) / 2).toFixed(2),
                        n = ((l - c) / 2).toFixed(2);
                    r.drawImage(e, t, n, c, c)
                }), n.style.width = u + "px", n.style.height = u + "px", n
            },
            createTable: function (e) {
                var t = this.options,
                    n = e.getModuleCount(),
                    r = Math.floor(t.size / n),
                    o = Math.floor(t.size / n);
                0 >= r && (r = 80 > n ? 2 : 1), 0 >= o && (o = 80 > n ? 2 : 1);
                var i = [];
                i.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:' + t.background + ';">');
                for (var s = 0; n > s; s++) {
                    i.push('<tr style="border:0px; margin:0px; padding:0px; height:' + o + 'px">');
                    for (var u = 0; n > u; u++) {
                        var l = a({
                            row: s,
                            col: u,
                            count: n,
                            options: t
                        });
                        e.modules[s][u] ? i.push('<td style="border:0px; margin:0px; padding:0px; width:' + r + "px; background-color:" + l + '"></td>') : i.push('<td style="border:0px; margin:0px; padding:0px; width:' + r + "px; background-color:" + t.background + '"></td>')
                    }
                    i.push("</tr>")
                }
                if (i.push("</table>"), t.image) {
                    var c = r * n,
                        d = o * n,
                        f = ((c - t.imageSize) / 2).toFixed(2),
                        p = ((d - t.imageSize) / 2).toFixed(2);
                    i.unshift("<div style='position:relative;\n                        width:" + c + "px;\n                        height:" + d + "px;'>"), i.push("<img src='" + t.image + "'\n                        width='" + t.imageSize + "'\n                        height='" + t.imageSize + "'\n                        style='position:absolute;left:" + f + "px; top:" + p + "px;'>"), i.push("</div>")
                }
                var h = document.createElement("span");
                return h.innerHTML = i.join(""), h.firstChild
            },
            createSVG: function (e) {
                var t = this.options,
                    n = e.getModuleCount(),
                    r = n / t.size,
                    o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                o.setAttribute("width", t.size), o.setAttribute("height", t.size), o.setAttribute("viewBox", "0 0 " + n + " " + n);
                for (var i = 0; n > i; i++)
                    for (var s = 0; n > s; s++) {
                        var u = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                            l = a({
                                row: i,
                                col: s,
                                count: n,
                                options: t
                            });
                        u.setAttribute("x", s), u.setAttribute("y", i), u.setAttribute("width", 1), u.setAttribute("height", 1), u.setAttribute("stroke-width", 0), e.modules[i][s] ? u.setAttribute("fill", l) : u.setAttribute("fill", t.background), o.appendChild(u)
                    }
                if (t.image) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    c.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.image), c.setAttribute("x", ((n - t.imageSize * r) / 2).toFixed(2)), c.setAttribute("y", ((n - t.imageSize * r) / 2).toFixed(2)), c.setAttribute("width", t.imageSize * r), c.setAttribute("height", t.imageSize * r), o.appendChild(c)
                }
                return o
            }
        }), e.exports = u
    }, function (e, t) {
        "use strict";

        function n(e) {
            var t, n, r;
            return 128 > e ? [e] : 2048 > e ? (t = 192 + (e >> 6), n = 128 + (63 & e), [t, n]) : (t = 224 + (e >> 12), n = 128 + (e >> 6 & 63), r = 128 + (63 & e), [t, n, r])
        }

        function r(e) {
            for (var t = [], r = 0; r < e.length; r++)
                for (var o = e.charCodeAt(r), i = n(o), a = 0; a < i.length; a++) t.push(i[a]);
            return t
        }

        function o(e, t) {
            this.typeNumber = -1, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = e, this.utf8bytes = r(e), this.make()
        }

        function i(e, t) {
            if (void 0 == e.length) throw new Error(e.length + "/" + t);
            for (var n = 0; n < e.length && 0 == e[n];) n++;
            this.num = new Array(e.length - n + t);
            for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
        }

        function a() {
            this.buffer = new Array, this.length = 0
        }
        o.prototype = {
            constructor: o,
            getModuleCount: function () {
                return this.moduleCount
            },
            make: function () {
                this.getRightType(), this.dataCache = this.createData(), this.createQrcode()
            },
            makeImpl: function (e) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var t = 0; t < this.moduleCount; t++) this.modules[t] = new Array(this.moduleCount);
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, e), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, e)
            },
            setupPositionProbePattern: function (e, t) {
                for (var n = -1; 7 >= n; n++)
                    if (!(-1 >= e + n || this.moduleCount <= e + n))
                        for (var r = -1; 7 >= r; r++) - 1 >= t + r || this.moduleCount <= t + r || (n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? this.modules[e + n][t + r] = !0 : this.modules[e + n][t + r] = !1)
            },
            createQrcode: function () {
                for (var e = 0, t = 0, n = null, r = 0; 8 > r; r++) {
                    this.makeImpl(r);
                    var o = l.getLostPoint(this);
                    (0 == r || e > o) && (e = o, t = r, n = this.modules)
                }
                this.modules = n, this.setupTypeInfo(!1, t), this.typeNumber >= 7 && this.setupTypeNumber(!1)
            },
            setupTimingPattern: function () {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0, null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0))
            },
            setupPositionAdjustPattern: function () {
                for (var e = l.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[t],
                            o = e[n];
                        if (null == this.modules[r][o])
                            for (var i = -2; 2 >= i; i++)
                                for (var a = -2; 2 >= a; a++) - 2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a ? this.modules[r + i][o + a] = !0 : this.modules[r + i][o + a] = !1
                    }
            },
            setupTypeNumber: function (e) {
                for (var t = l.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                    var r = !e && 1 == (t >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r, this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }
            },
            setupTypeInfo: function (e, t) {
                for (var n = s[this.errorCorrectLevel] << 3 | t, r = l.getBCHTypeInfo(n), o = 0; 15 > o; o++) {
                    var i = !e && 1 == (r >> o & 1);
                    6 > o ? this.modules[o][8] = i : 8 > o ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i;
                    var i = !e && 1 == (r >> o & 1);
                    8 > o ? this.modules[8][this.moduleCount - o - 1] = i : 9 > o ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !e
            },
            createData: function () {
                var e = new a,
                    t = this.typeNumber > 9 ? 16 : 8;
                e.put(4, 4), e.put(this.utf8bytes.length, t);
                for (var n = 0, r = this.utf8bytes.length; r > n; n++) e.put(this.utf8bytes[n], 8);
                for (e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4); e.length % 8 != 0;) e.putBit(!1);
                for (; !(e.length >= 8 * this.totalDataCount) && (e.put(o.PAD0, 8), !(e.length >= 8 * this.totalDataCount));) e.put(o.PAD1, 8);
                return this.createBytes(e)
            },
            createBytes: function (e) {
                for (var t = 0, n = 0, r = 0, o = this.rsBlock.length / 3, a = new Array, s = 0; o > s; s++)
                    for (var u = this.rsBlock[3 * s + 0], c = this.rsBlock[3 * s + 1], d = this.rsBlock[3 * s + 2], f = 0; u > f; f++) a.push([d, c]);
                for (var p = new Array(a.length), h = new Array(a.length), g = 0; g < a.length; g++) {
                    var m = a[g][0],
                        v = a[g][1] - m;
                    n = Math.max(n, m), r = Math.max(r, v), p[g] = new Array(m);
                    for (var s = 0; s < p[g].length; s++) p[g][s] = 255 & e.buffer[s + t];
                    t += m;
                    var y = l.getErrorCorrectPolynomial(v),
                        b = new i(p[g], y.getLength() - 1),
                        x = b.mod(y);
                    h[g] = new Array(y.getLength() - 1);
                    for (var s = 0; s < h[g].length; s++) {
                        var w = s + x.getLength() - h[g].length;
                        h[g][s] = w >= 0 ? x.get(w) : 0
                    }
                }
                for (var T = new Array(this.totalDataCount), C = 0, s = 0; n > s; s++)
                    for (var g = 0; g < a.length; g++) s < p[g].length && (T[C++] = p[g][s]);
                for (var s = 0; r > s; s++)
                    for (var g = 0; g < a.length; g++) s < h[g].length && (T[C++] = h[g][s]);
                return T
            },
            mapData: function (e, t) {
                for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                    for (6 == a && a--;;) {
                        for (var s = 0; 2 > s; s++)
                            if (null == this.modules[r][a - s]) {
                                var u = !1;
                                i < e.length && (u = 1 == (e[i] >>> o & 1));
                                var c = l.getMask(t, r, a - s);
                                c && (u = !u), this.modules[r][a - s] = u, o--, -1 == o && (i++, o = 7)
                            }
                        if (r += n, 0 > r || this.moduleCount <= r) {
                            r -= n, n = -n;
                            break
                        }
                    }
            }
        }, o.PAD0 = 236, o.PAD1 = 17;
        for (var s = [1, 0, 3, 2], u = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            }, l = {
                PATTERN_POSITION_TABLE: [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                ],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (e) {
                    for (var t = e << 10; l.getBCHDigit(t) - l.getBCHDigit(l.G15) >= 0;) t ^= l.G15 << l.getBCHDigit(t) - l.getBCHDigit(l.G15);
                    return (e << 10 | t) ^ l.G15_MASK
                },
                getBCHTypeNumber: function (e) {
                    for (var t = e << 12; l.getBCHDigit(t) - l.getBCHDigit(l.G18) >= 0;) t ^= l.G18 << l.getBCHDigit(t) - l.getBCHDigit(l.G18);
                    return e << 12 | t
                },
                getBCHDigit: function (e) {
                    for (var t = 0; 0 != e;) t++, e >>>= 1;
                    return t
                },
                getPatternPosition: function (e) {
                    return l.PATTERN_POSITION_TABLE[e - 1]
                },
                getMask: function (e, t, n) {
                    switch (e) {
                        case u.PATTERN000:
                            return (t + n) % 2 == 0;
                        case u.PATTERN001:
                            return t % 2 == 0;
                        case u.PATTERN010:
                            return n % 3 == 0;
                        case u.PATTERN011:
                            return (t + n) % 3 == 0;
                        case u.PATTERN100:
                            return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                        case u.PATTERN101:
                            return t * n % 2 + t * n % 3 == 0;
                        case u.PATTERN110:
                            return (t * n % 2 + t * n % 3) % 2 == 0;
                        case u.PATTERN111:
                            return (t * n % 3 + (t + n) % 2) % 2 == 0;
                        default:
                            throw new Error("bad maskPattern:" + e)
                    }
                },
                getErrorCorrectPolynomial: function (e) {
                    for (var t = new i([1], 0), n = 0; e > n; n++) t = t.multiply(new i([1, c.gexp(n)], 0));
                    return t
                },
                getLostPoint: function (e) {
                    for (var t = e.getModuleCount(), n = 0, r = 0, o = 0; t > o; o++)
                        for (var i = 0, a = e.modules[o][0], s = 0; t > s; s++) {
                            var u = e.modules[o][s];
                            if (t - 6 > s && u && !e.modules[o][s + 1] && e.modules[o][s + 2] && e.modules[o][s + 3] && e.modules[o][s + 4] && !e.modules[o][s + 5] && e.modules[o][s + 6] && (t - 10 > s ? e.modules[o][s + 7] && e.modules[o][s + 8] && e.modules[o][s + 9] && e.modules[o][s + 10] && (n += 40) : s > 3 && e.modules[o][s - 1] && e.modules[o][s - 2] && e.modules[o][s - 3] && e.modules[o][s - 4] && (n += 40)), t - 1 > o && t - 1 > s) {
                                var l = 0;
                                u && l++, e.modules[o + 1][s] && l++, e.modules[o][s + 1] && l++, e.modules[o + 1][s + 1] && l++, (0 == l || 4 == l) && (n += 3)
                            }
                            a ^ u ? i++ : (a = u, i >= 5 && (n += 3 + i - 5), i = 1), u && r++
                        }
                    for (var s = 0; t > s; s++)
                        for (var i = 0, a = e.modules[0][s], o = 0; t > o; o++) {
                            var u = e.modules[o][s];
                            t - 6 > o && u && !e.modules[o + 1][s] && e.modules[o + 2][s] && e.modules[o + 3][s] && e.modules[o + 4][s] && !e.modules[o + 5][s] && e.modules[o + 6][s] && (t - 10 > o ? e.modules[o + 7][s] && e.modules[o + 8][s] && e.modules[o + 9][s] && e.modules[o + 10][s] && (n += 40) : o > 3 && e.modules[o - 1][s] && e.modules[o - 2][s] && e.modules[o - 3][s] && e.modules[o - 4][s] && (n += 40)), a ^ u ? i++ : (a = u, i >= 5 && (n += 3 + i - 5), i = 1)
                        }
                    var c = Math.abs(100 * r / t / t - 50) / 5;
                    return n += 10 * c
                }
            }, c = {
                glog: function (e) {
                    if (1 > e) throw new Error("glog(" + e + ")");
                    return c.LOG_TABLE[e]
                },
                gexp: function (e) {
                    for (; 0 > e;) e += 255;
                    for (; e >= 256;) e -= 255;
                    return c.EXP_TABLE[e]
                },
                EXP_TABLE: new Array(256),
                LOG_TABLE: new Array(256)
            }, d = 0; 8 > d; d++) c.EXP_TABLE[d] = 1 << d;
        for (var d = 8; 256 > d; d++) c.EXP_TABLE[d] = c.EXP_TABLE[d - 4] ^ c.EXP_TABLE[d - 5] ^ c.EXP_TABLE[d - 6] ^ c.EXP_TABLE[d - 8];
        for (var d = 0; 255 > d; d++) c.LOG_TABLE[c.EXP_TABLE[d]] = d;
        i.prototype = {
            get: function (e) {
                return this.num[e]
            },
            getLength: function () {
                return this.num.length
            },
            multiply: function (e) {
                for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                    for (var r = 0; r < e.getLength(); r++) t[n + r] ^= c.gexp(c.glog(this.get(n)) + c.glog(e.get(r)));
                return new i(t, 0)
            },
            mod: function (e) {
                var t = this.getLength(),
                    n = e.getLength();
                if (0 > t - n) return this;
                for (var r = new Array(t), o = 0; t > o; o++) r[o] = this.get(o);
                for (; r.length >= n;) {
                    for (var a = c.glog(r[0]) - c.glog(e.get(0)), o = 0; o < e.getLength(); o++) r[o] ^= c.gexp(c.glog(e.get(o)) + a);
                    for (; 0 == r[0];) r.shift()
                }
                return new i(r, 0)
            }
        };
        var f = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ];
        o.prototype.getRightType = function () {
            for (var e = 1; 41 > e; e++) {
                var t = f[4 * (e - 1) + this.errorCorrectLevel];
                if (void 0 == t) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + this.errorCorrectLevel);
                for (var n = t.length / 3, r = 0, o = 0; n > o; o++) {
                    var i = t[3 * o + 0],
                        a = t[3 * o + 2];
                    r += a * i
                }
                var s = e > 9 ? 2 : 1;
                if (this.utf8bytes.length + s < r || 40 == e) {
                    this.typeNumber = e, this.rsBlock = t, this.totalDataCount = r;
                    break
                }
            }
        }, a.prototype = {
            get: function (e) {
                var t = Math.floor(e / 8);
                return this.buffer[t] >>> 7 - e % 8 & 1
            },
            put: function (e, t) {
                for (var n = 0; t > n; n++) this.putBit(e >>> t - n - 1 & 1)
            },
            putBit: function (e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
            }
        }, e.exports = o
    }, function (e, t) {
        e.exports = function (e) {
            for (var t, n = Array.prototype.slice.call(arguments, 1), r = 0; t = n[r]; r++)
                if (t)
                    for (var o in t) e[o] = t[o];
            return e
        }
    }]);