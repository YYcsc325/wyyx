;
(function () {
    function N(p, r) {
        function q(a) {
            if (q[a] !== w) return q[a];
            var c;
            if ("bug-string-char-index" == a) c = "a" != "a" [0];
            else if ("json" == a) c = q("json-stringify") && q("json-parse");
            else {
                var e;
                if ("json-stringify" == a) {
                    c = r.stringify;
                    var b = "function" == typeof c && s;
                    if (b) {
                        (e = function () {
                            return 1
                        }).toJSON = e;
                        try {
                            b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                c({
                                    a: [e, !0, !1, null, "\x00\b\n\f\r\t"]
                                }) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                        } catch (f) {
                            b = !1
                        }
                    }
                    c = b
                }
                if ("json-parse" == a) {
                    c = r.parse;
                    if ("function" == typeof c) try {
                        if (0 === c("0") && !c(!1)) {
                            e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var n = 5 == e.a.length && 1 === e.a[0];
                            if (n) {
                                try {
                                    n = !c('"\t"')
                                } catch (d) {}
                                if (n) try {
                                    n =
                                        1 !== c("01")
                                } catch (g) {}
                                if (n) try {
                                    n = 1 !== c("1.")
                                } catch (m) {}
                            }
                        }
                    } catch (X) {
                        n = !1
                    }
                    c = n
                }
            }
            return q[a] = !!c
        }
        p || (p = k.Object());
        r || (r = k.Object());
        var t = p.Number || k.Number,
            A = p.String || k.String,
            H = p.Object || k.Object,
            C = p.Date || k.Date,
            G = p.SyntaxError || k.SyntaxError,
            K = p.TypeError || k.TypeError,
            L = p.Math || k.Math,
            I = p.JSON || k.JSON;
        "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
        var H = H.prototype,
            u = H.toString,
            v, B, w, s = new C(-0xc782b5b800cec);
        try {
            s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() &&
                10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
        } catch (Q) {}
        if (!q("json")) {
            var D = q("bug-string-char-index");
            if (!s) var x = L.floor,
                M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                E = function (a, c) {
                    return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
                };
            (v = H.hasOwnProperty) || (v = function (a) {
                var c = {},
                    e;
                (c.__proto__ = null, c.__proto__ = {
                    toString: 1
                }, c).toString != u ? v = function (a) {
                    var c = this.__proto__;
                    a = a in (this.__proto__ = null, this);
                    this.__proto__ =
                        c;
                    return a
                } : (e = c.constructor, v = function (a) {
                    var c = (this.constructor || e).prototype;
                    return a in this && !(a in c && this[a] === c[a])
                });
                c = null;
                return v.call(this, a)
            });
            B = function (a, c) {
                var e = 0,
                    b, f, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                f = new b;
                for (n in f) v.call(f, n) && e++;
                b = f = null;
                e ? B = 2 == e ? function (a, c) {
                    var e = {},
                        b = "[object Function]" == u.call(a),
                        f;
                    for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                } : function (a, c) {
                    var e = "[object Function]" == u.call(a),
                        b, f;
                    for (b in a) e && "prototype" ==
                        b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                    (f || v.call(a, b = "constructor")) && c(b)
                } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function (a, c) {
                    var e = "[object Function]" == u.call(a),
                        b, h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                    for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                    for (e = f.length; b = f[--e]; h.call(a, b) && c(b));
                });
                return B(a, c)
            };
            if (!q("json-stringify")) {
                var U = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    y = function (a, c) {
                        return ("000000" + (c || 0)).slice(-a)
                    },
                    R = function (a) {
                        for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                            var d = a.charCodeAt(b);
                            switch (d) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    c += U[d];
                                    break;
                                default:
                                    if (32 > d) {
                                        c += "\\u00" + y(2, d.toString(16));
                                        break
                                    }
                                    c += f ? n[b] : a.charAt(b)
                            }
                        }
                        return c + '"'
                    },
                    O = function (a, c, b, h, f, n, d) {
                        var g, m, k, l, p, r, s, t, q;
                        try {
                            g = c[a]
                        } catch (z) {}
                        if ("object" == typeof g && g)
                            if (m = u.call(g), "[object Date]" != m || v.call(g,
                                    "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a));
                            else if (g > -1 / 0 && g < 1 / 0) {
                            if (E) {
                                l = x(g / 864E5);
                                for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++);
                                for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++);
                                l = 1 + l - E(m, k);
                                p = (g % 864E5 + 864E5) % 864E5;
                                r = x(p / 36E5) % 24;
                                s = x(p / 6E4) % 60;
                                t = x(p / 1E3) % 60;
                                p %= 1E3
                            } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                            g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                        } else g = null;
                        b && (g = b.call(c, a, g));
                        if (null === g) return "null";
                        m = u.call(g);
                        if ("[object Boolean]" == m) return "" + g;
                        if ("[object Number]" == m) return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if ("[object String]" == m) return R("" + g);
                        if ("object" == typeof g) {
                            for (a = d.length; a--;)
                                if (d[a] === g) throw K();
                            d.push(g);
                            q = [];
                            c = n;
                            n += f;
                            if ("[object Array]" == m) {
                                k = 0;
                                for (a = g.length; k < a; k++) m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" :
                                    m);
                                a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                            } else B(h || g, function (a) {
                                var c = O(a, g, b, h, f, n, d);
                                c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                            }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                            d.pop();
                            return a
                        }
                    };
                r.stringify = function (a, c, b) {
                    var h, f, n, d;
                    if (F[typeof c] && c)
                        if ("[object Function]" == (d = u.call(c))) f = c;
                        else if ("[object Array]" == d) {
                        n = {};
                        for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1));
                    }
                    if (b)
                        if ("[object Number]" ==
                            (d = u.call(b))) {
                            if (0 < (b -= b % 1))
                                for (h = "", 10 < b && (b = 10); h.length < b; h += " ");
                        } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                    return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                }
            }
            if (!q("json-parse")) {
                var V = A.fromCharCode,
                    W = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, J, l = function () {
                        b = J = null;
                        throw G();
                    },
                    z = function () {
                        for (var a = J, c = a.length, e, h, f, k, d; b < c;) switch (d = a.charCodeAt(b), d) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e =
                                    D ? a.charAt(b) : a[b], b++, e;
                            case 34:
                                e = "@";
                                for (b++; b < c;)
                                    if (d = a.charCodeAt(b), 32 > d) l();
                                    else if (92 == d) switch (d = a.charCodeAt(++b), d) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        e += W[d];
                                        b++;
                                        break;
                                    case 117:
                                        h = ++b;
                                        for (f = b + 4; b < f; b++) d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                        e += V("0x" + a.slice(h, b));
                                        break;
                                    default:
                                        l()
                                } else {
                                    if (34 == d) break;
                                    d = a.charCodeAt(b);
                                    for (h = b; 32 <= d && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                    e += a.slice(h, b)
                                }
                                if (34 == a.charCodeAt(b)) return b++, e;
                                l();
                            default:
                                h =
                                    b;
                                45 == d && (k = !0, d = a.charCodeAt(++b));
                                if (48 <= d && 57 >= d) {
                                    for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++);
                                    if (46 == a.charCodeAt(b)) {
                                        for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                        f == b && l();
                                        b = f
                                    }
                                    d = a.charCodeAt(b);
                                    if (101 == d || 69 == d) {
                                        d = a.charCodeAt(++b);
                                        43 != d && 45 != d || b++;
                                        for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                        f == b && l();
                                        b = f
                                    }
                                    return +a.slice(h, b)
                                }
                                k && l();
                                if ("true" == a.slice(b, b + 4)) return b += 4, !0;
                                if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                if ("null" == a.slice(b,
                                        b + 4)) return b += 4, null;
                                l()
                        }
                        return "$"
                    },
                    P = function (a) {
                        var c, b;
                        "$" == a && l();
                        if ("string" == typeof a) {
                            if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                            if ("[" == a) {
                                for (c = [];; b || (b = !0)) {
                                    a = z();
                                    if ("]" == a) break;
                                    b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                    "," == a && l();
                                    c.push(P(a))
                                }
                                return c
                            }
                            if ("{" == a) {
                                for (c = {};; b || (b = !0)) {
                                    a = z();
                                    if ("}" == a) break;
                                    b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                    "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                    c[a.slice(1)] = P(z())
                                }
                                return c
                            }
                            l()
                        }
                        return a
                    },
                    T = function (a, b, e) {
                        e = S(a, b, e);
                        e ===
                            w ? delete a[b] : a[b] = e
                    },
                    S = function (a, b, e) {
                        var h = a[b],
                            f;
                        if ("object" == typeof h && h)
                            if ("[object Array]" == u.call(h))
                                for (f = h.length; f--;) T(h, f, e);
                            else B(h, function (a) {
                                T(h, a, e)
                            });
                        return e.call(a, b, h)
                    };
                r.parse = function (a, c) {
                    var e, h;
                    b = 0;
                    J = "" + a;
                    e = P(z());
                    "$" != z() && l();
                    b = J = null;
                    return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                }
            }
        }
        r.runInContext = N;
        return r
    }
    var K = typeof define === "function" && define.amd,
        F = {
            "function": !0,
            object: !0
        },
        G = F[typeof exports] && exports && !exports.nodeType && exports,
        k = F[typeof window] &&
        window || this,
        t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
    if (G && !K) N(k, G);
    else {
        var L = k.JSON,
            Q = k.JSON3,
            M = !1,
            A = N(k, k.JSON3 = {
                noConflict: function () {
                    M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                    return A
                }
            });
        k.JSON = {
            parse: A.parse,
            stringify: A.stringify
        }
    }
    K && define(function () {
        return A
    })
}).call(this);
! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    var o = n(1),
        a = n(2);
    ! function () {
        function e(e) {
            e = p(e || {}), t() ? (e.log_source = w.appLogSource, r(e)) : (e.client_type = w.client_type, e.url = window.location.href, e.refer_url = document.referrer, e.t = (new Date).getTime(), e.sessionid = a.getSession(), "miniprogram" === window.__wxjs_environment && (e.log_source = "miniapp"), l(e))
        }

        function t() {
            return navigator.userAgent.toLowerCase().match(/yanxuan/gi)
        }

        function n(e) {
            NEJsbridge.call("YXStatisticRecordEvent", JSON.stringify(e)), console.log("Event is sended successfully: " + e.event_name + " log_source: " + e.log_source)
        }

        function r(e) {
            function t() {
                document.removeEventListener("NEJsbridgeReady", t), n(e)
            }
            window.NEJsbridge ? n(e) : document.addEventListener("NEJsbridgeReady", t)
        }

        function s(e, t) {
            for (var n, i = {}, o = 0; o < t.length; o++) n = t[o], void 0 !== e[n] && (i[n] = e[n]);
            return i
        }

        function c(e) {
            var t = document.createElement("img");
            return t.width = 1, t.height = 1, t.src = e, t
        }

        function l(e) {
            var t = v(e),
                n = c(w.url + "?" + t);
            n.onload = n.onerror = function () {
                n.onload = null, n.onerror = null
            }
        }

        function u() {
            var e = navigator.userAgent.toLowerCase().match(/yanxuan\/(\d+\.\d+\.\d+)/);
            return e ? e[e.length - 1] : "0.0.0"
        }

        function h() {
            return navigator.userAgent.toLowerCase().match(/android/gi)
        }

        function d() {
            return navigator.userAgent.toLowerCase().match(/iphone|ipad/gi)
        }

        function g(e) {
            return /^\//.test(e) && (e = location.protocol + "//" + location.host + e), t() && (e = "yanxuan://yxwebview?url=" + e), e
        }

        function p(e) {
            var n = ["event_action", "event_name", "page_name", "topage", "is_return"],
                i = s(e, n);
            return t() && "view" == i.event_action && void 0 === i.is_return && (i.is_return = 0), e.topage && (i.topage = g(e.topage), d() && t() && ("3.5.0" == u() || "3.5.1" == u()) && (e.parameters || (e.parameters = {}), e.parameters.topage = i.topage)), e.parameters && "[object object]" == {}.toString.call(e.parameters).toLowerCase() && (h() && t() && u() < "3.4.0" ? i.parameters = e.parameters : i.parameters = JSON.stringify(e.parameters)), i
        }

        function v(e) {
            var t = [];
            for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }

        function m(e, t, n) {
            void 0 !== e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }

        function x(e) {
            return e ? void 0 !== e.target ? e.target : e.srcElement : window.event.srcElement
        }

        function y(e) {
            for (; e && "HTML" != e.nodeName;) {
                if (e.getAttribute("data-yxstat")) return e;
                e = e.parentNode
            }
            return null
        }

        function S(e, t) {
            var n = e.getAttribute("data-yxstat"),
                i = e.getAttribute("href"),
                o = e.getAttribute("target");
            try {
                n = JSON.parse(n)
            } catch (e) {
                n = {}, console.log("The value from data-yxstat is not json string")
            }
            n && n.event_action && n.event_name && n.page_name && (w.q.push(["add_event", {
                event_name: n.event_name,
                page_name: n.page_name,
                event_action: n.event_action,
                parameters: n.parameters,
                topage: n.topage
            }]), i && /^(http:\/\/|https:\/\/|\/\/|\/).*/.test(i) && "_blank" !== o && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, setTimeout(function () {
                var e = document.createElement("a");
                e.href = i, e.target = "_self", document.body.appendChild(e), void 0 !== e.click ? e.click() : window.location.href = f, document.body.removeChild(e)
            }, 200)))
        }

        function _(e) {
            e && "function" == typeof e && setTimeout(function () {
                e()
            }, 200)
        }

        function C(e) {
            if (t() && e && "function" == typeof e) return void e();
            (new o).get(function (t) {
                var n = new Date;
                n.setTime(n.getTime() + 63072e7), -1 == document.cookie.search("mail_psc_fingerprint") && (window.localStorage && window.localStorage.getItem("mail_psc_fingerprint") ? document.cookie = document.cookie = "mail_psc_fingerprint=" + window.localStorage.getItem("mail_psc_fingerprint") + ";expires=" + n.toGMTString() + ";path=/;domain=.163.com;" : document.cookie = document.cookie = "mail_psc_fingerprint=" + t + ";expires=" + n.toGMTString() + ";path=/;domain=.163.com;"), window.localStorage && (window.localStorage.getItem("mail_psc_fingerprint") || window.localStorage.setItem("mail_psc_fingerprint", t)), e && "function" == typeof e && e()
            })
        }
        var w = window.YXStat || {};
        w.init = function (e) {
            e = e || {}, w.client_type = e.client_type || "", w.url = e.url || "//dc.you.163.com/main/a.js", w.appLogSource = e.appLogSource || "h5", w.q = w.q || [], C(function () {
                if (w.q.length > 0) {
                    var t, n = w.q;
                    for (i = 0; i < n.length; i++) t = n[i], t.constructor === Array && t.length > 0 && void 0 !== w[t[0]] && w[t[0]].apply(null, t.slice(1))
                }
                w.q = {}, w.q.push = function (e) {
                    e.constructor === Array && e.length > 0 && void 0 !== w[e[0]] && w[e[0]].apply(null, e.slice(1))
                }, (void 0 === e.isAgent || e.isAgent) && w.track_agent_click()
            })
        }, w.add_event = function (t) {
            if (!t.event_name) return void console.log("Event must have event_name property");
            if (!t.event_action) return void console.log("Event must have event_action property");
            if (!t.page_name) return void console.log("Event must have page_name property");
            var n = ["event_action", "event_name", "page_name", "parameters", "topage", "is_return"],
                i = s(t, n);
            e(i), "view" === i.event_action && (w.viewData = i)
        }, w.track_view = function (e) {
            if (!e.event_name) return void console.log("Event must have event_name property");
            if (!e.page_name) return void console.log("Event must have page_name property");
            var t = ["event_name", "page_name", "parameters"],
                n = s(e, t);
            n.event_action = "view", w.add_event(n)
        }, w.track_click = function (e) {
            if (!e.event_name) return void console.log("Event must have event_name property");
            if (!e.page_name) return void console.log("Event must have page_name property");
            var t = ["event_name", "page_name", "parameters", "topage"],
                n = s(e, t);
            n.event_action = "click", w.add_event(n)
        }, w.track_agent_click = function (e) {
            function t(e) {
                var t = x(e),
                    n = y(t);
                n && S(n, e)
            }
            e = e || document, m(e, "click", t)
        }, window.onWebViewStatisticsDidAppear = function (e) {
            if (e && w.add_event && w.viewData) {
                var t = w.viewData;
                t.is_return = 1, w.add_event(t), console.log("test return")
            }
        }, w.tool = {
            warpPageJump: _
        }
    }()
}, function (e, t) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var n;
        if (null == this) throw new TypeError("this is null or undefined");
        var i = Object(this),
            o = i.length >>> 0;
        if (0 === o) return -1;
        var a = +t || 0;
        if (Math.abs(a) === 1 / 0 && (a = 0), a >= o) return -1;
        for (n = Math.max(a >= 0 ? a : o - Math.abs(a), 0); n < o;) {
            if (n in i && i[n] === e) return n;
            n++
        }
        return -1
    });
    var n = function (e) {
        if (!(this instanceof n)) return new n(e);
        var t = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(e, t), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
    };
    n.prototype = {
        extend: function (e, t) {
            if (null == e) return t;
            for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
            return t
        },
        log: function (e) {
            window.console && console.log(e)
        },
        get: function (e) {
            var t = [];
            t = this.userAgentKey(t), t = this.languageKey(t), t = this.colorDepthKey(t), t = this.pixelRatioKey(t), t = this.screenResolutionKey(t), t = this.availableScreenResolutionKey(t), t = this.sessionStorageKey(t), t = this.localStorageKey(t), t = this.indexedDbKey(t), t = this.cpuClassKey(t), t = this.platformKey(t), t = this.canvasKey(t);
            var n = this;
            this.fontsKey(t, function (t) {
                var i = [];
                n.each(t, function (e) {
                    var t = e.value;
                    void 0 !== e.value.join && (t = e.value.join(";")), i.push(t)
                });
                var o = n.x64hash128(i.join("~~~"), 31);
                return e(o, t)
            })
        },
        userAgentKey: function (e) {
            return this.options.excludeUserAgent || e.push({
                key: "user_agent",
                value: this.getUserAgent()
            }), e
        },
        getUserAgent: function () {
            return navigator.userAgent
        },
        languageKey: function (e) {
            return this.options.excludeLanguage || e.push({
                key: "language",
                value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }), e
        },
        colorDepthKey: function (e) {
            return this.options.excludeColorDepth || e.push({
                key: "color_depth",
                value: screen.colorDepth || -1
            }), e
        },
        pixelRatioKey: function (e) {
            return this.options.excludePixelRatio || e.push({
                key: "pixel_ratio",
                value: this.getPixelRatio()
            }), e
        },
        getPixelRatio: function () {
            return window.devicePixelRatio || ""
        },
        screenResolutionKey: function (e) {
            return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
        },
        getScreenResolution: function (e) {
            var t;
            return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== t && e.push({
                key: "resolution",
                value: t
            }), e
        },
        availableScreenResolutionKey: function (e) {
            return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
        },
        getAvailableScreenResolution: function (e) {
            var t;
            return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== t && e.push({
                key: "available_resolution",
                value: t
            }), e
        },
        sessionStorageKey: function (e) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
                key: "session_storage",
                value: 1
            }), e
        },
        localStorageKey: function (e) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
                key: "local_storage",
                value: 1
            }), e
        },
        indexedDbKey: function (e) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
                key: "indexed_db",
                value: 1
            }), e
        },
        cpuClassKey: function (e) {
            return this.options.excludeCpuClass || e.push({
                key: "cpu_class",
                value: this.getNavigatorCpuClass()
            }), e
        },
        platformKey: function (e) {
            return this.options.excludePlatform || e.push({
                key: "navigator_platform",
                value: this.getNavigatorPlatform()
            }), e
        },
        canvasKey: function (e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
                key: "canvas",
                value: this.getCanvasFp()
            }), e
        },
        fontsKey: function (e, t) {
            return this.jsFontsKey(e, t)
        },
        jsFontsKey: function (e, t) {
            var n = this;
            return setTimeout(function () {
                var i = ["monospace", "sans-serif", "serif"],
                    o = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                o = o.concat(n.options.userDefinedFonts);
                var a = document.getElementsByTagName("body")[0],
                    r = document.createElement("div"),
                    s = document.createElement("div"),
                    c = {},
                    l = {},
                    u = function () {
                        var e = document.createElement("span");
                        return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.lineHeight = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                    },
                    h = function (e, t) {
                        var n = u();
                        return n.style.fontFamily = "'" + e + "'," + t, n
                    },
                    d = function () {
                        for (var e = [], t = 0, n = i.length; t < n; t++) {
                            var o = u();
                            o.style.fontFamily = i[t], r.appendChild(o), e.push(o)
                        }
                        return e
                    }();
                a.appendChild(r);
                for (var f = 0, g = i.length; f < g; f++) c[i[f]] = d[f].offsetWidth, l[i[f]] = d[f].offsetHeight;
                var p = function () {
                    for (var e = {}, t = 0, n = o.length; t < n; t++) {
                        for (var a = [], r = 0, c = i.length; r < c; r++) {
                            var l = h(o[t], i[r]);
                            s.appendChild(l), a.push(l)
                        }
                        e[o[t]] = a
                    }
                    return e
                }();
                a.appendChild(s);
                for (var v = [], m = 0, x = o.length; m < x; m++)(function (e) {
                    for (var t = !1, n = 0; n < i.length; n++)
                        if (t = e[n].offsetWidth !== c[i[n]] || e[n].offsetHeight !== l[i[n]]) return t;
                    return t
                })(p[o[m]]) && v.push(o[m]);
                a.removeChild(s), a.removeChild(r), e.push({
                    key: "js_fonts",
                    value: v
                }), t(e)
            }, 1)
        },
        hasSessionStorage: function () {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        hasLocalStorage: function () {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasIndexedDB: function () {
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function () {
            return navigator.cpuClass ? navigator.cpuClass : "unknown"
        },
        getNavigatorPlatform: function () {
            return navigator.platform ? navigator.platform : "unknown"
        },
        getCanvasFp: function () {
            var e = [],
                t = document.createElement("canvas");
            t.width = 2e3, t.height = 200, t.style.display = "inline";
            var n = t.getContext("2d");
            return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("mail psc fingerprint!", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("mail psc fingerprint!", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
        },
        isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        each: function (e, t, n) {
            if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
                else if (e.length === +e.length) {
                for (var i = 0, o = e.length; i < o; i++)
                    if (t.call(n, e[i], i, e) === {}) return
            } else
                for (var a in e)
                    if (e.hasOwnProperty(a) && t.call(n, e[a], a, e) === {}) return
        },
        map: function (e, t, n) {
            var i = [];
            return null == e ? i : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function (e, o, a) {
                i[i.length] = t.call(n, e, o, a)
            }), i)
        },
        x64Add: function (e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        x64Multiply: function (e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        x64Rotl: function (e, t) {
            return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function (e, t) {
            return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function (e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
        },
        x64hash128: function (e, t) {
            e = e || "", t = t || 0;
            for (var n = e.length % 16, i = e.length - n, o = [0, t], a = [0, t], r = [0, 0], s = [0, 0], c = [2277735313, 289559509], l = [1291169091, 658871167], u = 0; u < i; u += 16) r = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24], s = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24], r = this.x64Multiply(r, c), r = this.x64Rotl(r, 31), r = this.x64Multiply(r, l), o = this.x64Xor(o, r), o = this.x64Rotl(o, 27), o = this.x64Add(o, a), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, l), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), a = this.x64Xor(a, s), a = this.x64Rotl(a, 31), a = this.x64Add(a, o), a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 944331445]);
            switch (r = [0, 0], s = [0, 0], n) {
                case 15:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
                case 14:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
                case 13:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
                case 12:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
                case 11:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
                case 10:
                    s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
                case 9:
                    s = this.x64Xor(s, [0, e.charCodeAt(u + 8)]), s = this.x64Multiply(s, l), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), a = this.x64Xor(a, s);
                case 8:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
                case 7:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
                case 6:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
                case 5:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
                case 4:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
                case 3:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
                case 2:
                    r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
                case 1:
                    r = this.x64Xor(r, [0, e.charCodeAt(u)]), r = this.x64Multiply(r, c), r = this.x64Rotl(r, 31), r = this.x64Multiply(r, l), o = this.x64Xor(o, r)
            }
            return o = this.x64Xor(o, [0, e.length]), a = this.x64Xor(a, [0, e.length]), o = this.x64Add(o, a), a = this.x64Add(a, o), o = this.x64Fmix(o), a = this.x64Fmix(a), o = this.x64Add(o, a), a = this.x64Add(a, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        }
    }, e.exports = n
}, function (e, t) {
    function n(e) {
        for (var t = "", n = e, i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], o = 0; o < n; o++) {
            t += i[Math.round(Math.random() * (i.length - 1))]
        }
        return t
    }
    var i = {
        cookieCache: {},
        timeOfHalfHour: 18e5,
        setCookie: function (e, t, n, i, o) {
            var a = e + "=" + escape(t),
                i = i || "/";
            if (n && -1 != n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), a += ";expires=" + r.toGMTString()
            }
            a += ";path=" + i, o && (a += ";domain=" + o), document.cookie = a + ";", this.clearCookieCache()
        },
        clearCookieCache: function () {
            this.cookieCache = {}
        },
        getCookie: function (e) {
            var t = "",
                n = this.cookieCache;
            n.lastTime ? t = (new Date).getTime() - n.lastTime < 1e3 ? n.cookie : n.cookie = document.cookie : (n.lastTime = (new Date).getTime(), t = n.cookie = document.cookie);
            var i = new RegExp(e + "=([^;]+)"),
                o = i.exec(t);
            return o ? o[1] : null
        },
        getSession: function () {
            var e = (new Date).getTime(),
                t = this.getCookie("yx_stat_lastSendTime") || 0;
            return -1 == YXStat.url.search("dc.you.163.com/main/a.js") ? this.setCookie("yx_stat_lastSendTime", e, 1) : this.setCookie("yx_stat_lastSendTime", e, 1, "/", ".you.163.com"), e - t > this.timeOfHalfHour ? this.creatUniqueId(e) : this.getUniqueId(e)
        },
        getUniqueId: function (e) {
            var t = this.getCookie("yx_stat_seesionId");
            return t || (t = this.creatUniqueId(e)), t
        },
        creatUniqueId: function (e) {
            var t = e,
                i = this.getCookie("yx_aui") || "",
                o = window.localStorage && window.localStorage.getItem && window.localStorage.getItem("mail_psc_fingerprint");
            return t = i ? i + t : o ? o + t : n(32) + t, -1 == YXStat.url.search("dc.you.163.com/main/a.js") ? this.setCookie("yx_stat_seesionId", t, 30) : this.setCookie("yx_stat_seesionId", t, 30, "/", ".you.163.com"), t
        }
    };
    e.exports = i
}]);