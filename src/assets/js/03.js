var YXComponent = function (e) {
    function t(a) {
        if (i[a]) return i[a].exports;
        var n = i[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t, i) {
    i(7), i(8), i(9);
    var a = i(16),
        n = i(17),
        o = i(79),
        s = i(24),
        c = i(82),
        r = i(75),
        l = i(28);
    e.exports = a({
        fixedTool: n,
        remindDialog: o,
        loginDialog: s,
        login: l,
        top: c,
        foot: r
    })
}, , , , , , , function (e, t) {
    var i = window.navigator.userAgent;
    /windows|win32/i.test(i) ? /Windows NT 5/.test(i) && $('<style type="text/css">.yx-cp-base{font-family: tahoma,sans-serif;}.yx-cp-base input{font-family: tahoma,sans-serif;}.yx-cp-base textarea{font-family: tahoma,sans-serif;}</style>').appendTo("head") : /macintosh/i.test(i) && $('<style type="text/css">.yx-cp-base{font-family: "Heiti SC","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",verdana;}.yx-cp-base input{font-family: "Heiti SC","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",verdana;}.yx-cp-base textarea{font-family: "Heiti SC","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",verdana;}</style>').appendTo("head")
}, function (e, t, i) {
    ! function () {
        var e = "https://qiyukf.com/script/96ee78c0d9633761581e89d5019c5595.js";
        if (!window.ysf) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e, t.defer = "defer", t.async = "async";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i)
        }
    }()
}, function (e, t, i) {
    var a = i(10);
    window.yx_queryDefer = $.Deferred(), window.setTimeout(function () {
        var e = a.query();
        e.done(function (e) {
            var t = e && e.data;
            window.yx_userid = t && t.userid ? t.userid : 0, window.yx_environment = t.environment, window.yx_queryDefer.resolve(e)
        })
    }, 0)
}, function (e, t, i) {
    var a = window.seckillUniqueFlag ? "/xhr/seckill" : "/xhr",
        n = i(11);
    e.exports = n("/xhr/common/", [{
        name: "checklogin",
        ajaxConfig: {
            type: "GET"
        },
        successHandle: function (e, t) {
            return e && e.data ? t.resolve() : t.reject()
        }
    }, {
        name: "query",
        path: a + "/globalinfo/",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "queryTop",
        path: a + "/globalinfo/",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "getUserSpmcInfo",
        alias: "getSupermcSimple",
        path: "/xhr/supermc",
        ajaxConfig: {
            type: "GET"
        }
    }])
}, function (e, t, i) {
    var a = i(12),
        n = function (e) {
            var t = {
                name: "",
                ajaxConfig: {}
            };
            return e = $.extend(!0, {}, t, e),
                function (t, i) {
                    var n = $.Deferred(),
                        o = {};
                    return i = i || "", i && i.indexOf("http://") < 0 && i.indexOf("https://") < 0 && (i = "//" + i), e.processParams && (t = e.processParams(t)), o = {
                        url: i + e.path + "/" + e.name + ".json",
                        data: t || {},
                        success: function (t) {
                            e.successHandle ? e.successHandle(t, n) : n.resolve(t)
                        },
                        error: function (e, t, i) {
                            n.reject(e, t, i)
                        },
                        type: "POST"
                    }, a.ajax($.extend(!0, {}, o, e.ajaxConfig)), n.promise()
                }
        },
        o = function (e, t) {
            var i = {};
            return $.map(t, function (t) {
                "string" == typeof t && (t = {
                    name: t
                }), t.path || (t.path = e), i[t.alias || t.name] = n(t)
            }), i
        };
    e.exports = o
}, function (e, t, i) {
    var a = i(13),
        n = i(14),
        o = {
            xhrQueue: {},
            ajax: function (e) {
                var t = this,
                    i = e.url;
                if (!i) return !1;
                window.IS_ACTIVITY_IFRAME && (i = "/act/forward" + i), e.requestTime = new Date, e.param && (i = a.appendURL(i, e.param)), n.getCookie("yx_csrf") && (i = a.appendURL(i, {
                    csrf_token: n.getCookie("yx_csrf")
                })), e.type && "get" == e.type.toLowerCase() && (i = a.appendURL(i, {
                    __timestamp: e.requestTime.getTime()
                }));
                var o, s, c = e.data || {};
                o = e.dataType ? e.dataType : "json", e.contentType && (s = e.contentType), "undefined" == typeof s || s === $.ajaxSettings.contentType ? c = $.param(c, !0) : "application/json" === s && (c = JSON.stringify(c));
                var r = i + JSON.stringify(c),
                    l = t.xhrQueue[r];
                if (l) {
                    var d = l[l.length - 1];
                    if (t.xhrQueue[r].push(e), e.requestTime - d.requestTime < 3e4) return
                } else t.xhrQueue[r] = [e];
                var p = function (e, i, a) {
                        var n = t.xhrQueue[r];
                        delete t.xhrQueue[r], n && ($.each(n, function (t, n) {
                            n.error && n.error(e, i, a)
                        }), $.each(n, function (t, n) {
                            n.exception && n.exception.dispatch(e, i, a)
                        }))
                    },
                    u = function (e) {
                        var i = t.xhrQueue[r];
                        delete t.xhrQueue[r], $.each(i, function (t, i) {
                            i.success && i.success(e)
                        })
                    },
                    h = {
                        url: i,
                        type: e.type || "POST",
                        dataType: o,
                        contentType: s,
                        data: c,
                        async: 0 != e.async,
                        success: function (e) {
                            /^(html|text)$/i.test(o) ? u(e) : e ? e.status && e.statusText ? p(e.status, e.status || "", e) : "S_OK" == e.code || "200" == e.code || "201" == e.code ? u(e) : e.code ? p(e.code, e.errorCode || "", e) : u(e) : p("502", "error", "no reponse text")
                        }.bind(this),
                        error: function (e, t, i) {
                            p("NET_ERROR", "", t)
                        }.bind(this)
                    };
                $.ajax(h)
            }
        };
    e.exports = o, $.ajaxSettings.contentType = "application/x-www-form-urlencoded; charset=UTF-8"
}, function (e, t) {
    var i = {
        cropURL: function (e, t) {
            for (var i = e, a = 0; a < t.length; a++) {
                var n = new RegExp("[&]?" + t[a] + "=[^&]+", "g");
                i = i.replace(n, "").replace("?&", "?")
            }
            return i
        },
        getUrlParams: function (e) {
            var t = {};
            if (!e || -1 == e.indexOf("?")) return t;
            for (var i = e.indexOf("?"), a = e.substring(i + 1), n = a.split("&"), o = 0; o < n.length; o++) {
                var i = n[o].indexOf("=");
                if (-1 != i) try {
                    t[n[o].substring(0, i)] = decodeURIComponent(n[o].substring(i + 1))
                } catch (s) {
                    t[n[o].substring(0, i)] = n[o].substring(i + 1)
                }
            }
            return t
        },
        appendURL: function (e, t) {
            var i = e || "";
            if (!t) return i;
            var a = this.extractUrl(i) || [],
                n = a[1] || "",
                o = a[2] || "",
                s = a[3] || "",
                c = a[4] || "",
                r = a[5] || "",
                l = a[6] || "",
                d = "?";
            r && (d = "&");
            var p = d + $.param(t, !0),
                u = n + o + s + c + r + p + l;
            return u.replace(/&+/gm, "&")
        },
        jsonp: function (e, t, i) {
            var a = $.extend({
                    charset: "utf-8"
                }, i),
                n = "_tmp_jsonp_callback" + +new Date;
            a.funcName && (n = a.funcName), window[n] = function () {
                t && t.apply(window, arguments);
                try {
                    delete window[n]
                } catch (e) {}
            };
            var o = {};
            o[a.callbackName || "callback"] = n;
            var s = this.appendURL(e, o);
            this.getScript(s, a.charset, function () {
                try {
                    window[n](), delete window[n]
                } catch (e) {}
            })
        },
        getScript: function (e, t, i, a) {
            var n = function () {
                i && i.apply(window, arguments)
            };
            this._getScript(e, t, n, a)
        },
        _getScript: function (e, t, i, a) {
            setTimeout(function () {
                var n = /loaded|complete|undefined/,
                    o = document.createElement("script");
                o.setAttribute("charset", t || "utf-8"), o.setAttribute("type", "text/javascript"), o.setAttribute("src", e), o.async = "async";
                var s = function (e) {
                    n.test(o.readyState) && (o.onload = o.onerror = o.onreadystatechange = null, o.parentNode.removeChild(o), o = void 0, e ? "function" == typeof i && setTimeout(i, 0) : "function" == typeof a ? setTimeout(a, 0) : "function" == typeof i && setTimeout(i, 0))
                };
                o.onload = function () {
                    s(!0)
                }, o.onerror = function () {
                    s(!1)
                }, o.onreadystatechange = function () {
                    s(!0)
                };
                var c = document.getElementsByTagName("head")[0];
                c.appendChild(o)
            }, 0)
        },
        getPicUrl: function (e, t, i) {
            var i = i || 95,
                a = {
                    quality: i
                };
            return t && (a.thumbnail = t), this.appendURL(e, a) + "&imageView"
        },
        extractUrl: function (e) {
            e = e || "";
            var t = /(\w+(?=\:))?([:]?\/{2,})?([^\/|^\?|^#]+)?([^#|^\?]+)?(\?[^#]+)?(#[^\?]+)?/i,
                i = e.match(t);
            return i
        }
    };
    e.exports = i
}, function (e, t, i) {
    var a = i(15),
        n = function () {
            var e;
            return e = window && window.location && window.location.hostname || "", e = e.replace(/(^act\.)*(.*)/g, function (e, t, i) {
                return i
            })
        }(),
        o = {
            _baseUID: (new Date).getTime(),
            uid: function (e, t, i) {
                return (e || "id_") + this._baseUID++
            },
            __cookieCache: {},
            __defaultCookieDomain: "." + n,
            getDropHost: function () {
                return location.protocol + "//" + (n || "you.163.com")
            },
            setCookie: function (e, t, i, a, n) {
                var s = e + "=" + escape(t);
                if (a = a || "/", i && -1 != i) {
                    var c = new Date;
                    c.setTime(c.getTime() + 24 * i * 60 * 60 * 1e3), s += ";expires=" + c.toGMTString()
                }
                s += ";path=" + a, n = n || o.__defaultCookieDomain || "", n && (s += ";domain=" + n), document.cookie = s + ";", this.clearCookieCache()
            },
            clearCookieCache: function () {
                this.__cookieCache = {}
            },
            getCookie: function (e) {
                var t = "",
                    i = this.__cookieCache;
                i.lastTime ? t = (new Date).getTime() - i.lastTime < 1e3 ? i.cookie : i.cookie = document.cookie : (i.lastTime = (new Date).getTime(), t = i.cookie = document.cookie);
                for (var a = new RegExp(e + "=([^;]+)", "g"), n = "", o = null; null != (n = a.exec(t));) o = n[1];
                return o
            },
            escapeHTML: function (e) {
                return e ? ("number" == typeof e && (e = e.toString()), e.replace(/[\u0000]/g, "").replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : ""
            },
            _$forIn: function (e, t, i) {
                if (!e || !a._$isFunction(t)) return null;
                if (a._$isNumber(e.length)) {
                    for (var n = 0, s = e.length; s > n; n++)
                        if (t.call(i, e[n], n, e)) return n
                } else if (a._$isObject(e)) return o._$loop(e, t, i);
                return null
            },
            _$loop: function (e, t, i) {
                if (e && t) {
                    var a;
                    for (var n in e)
                        if (e.hasOwnProperty(n) && (a = t.call(i, e[n], n, e))) return n
                }
            },
            _$extend: function (e, t, i) {
                for (var a in t)(void 0 == e[a] || i) && (e[a] = t[a]);
                return e
            },
            _$typeOf: function (e) {
                return null == e ? String(e) : {}.toString.call(e).slice(8, -1).toLowerCase()
            },
            _$merge: function (e, t) {
                var i, a = o._$typeOf(e),
                    n = o._$typeOf(t);
                if (a !== n) return t;
                switch (n) {
                    case "object":
                        for (var s in t) t.hasOwnProperty(s) && (e[s] = o._$merge(e[s], t[s]));
                        break;
                    case "array":
                        for (var s = 0, i = t.length; i > s; s++) e[s] = o._$merge(e[s], t[s]);
                        e.length = t.length;
                        break;
                    default:
                        return t
                }
                return e
            },
            _$bindPolyfill: function () {
                Function.prototype.bind || (Function.prototype.bind = function (e) {
                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var t = Array.prototype.slice.call(arguments, 1),
                        i = this,
                        a = function () {},
                        n = function () {
                            return i.apply(this instanceof a ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                        };
                    return this.prototype && (a.prototype = this.prototype), n.prototype = new a, n
                })
            },
            _$isNew: function () {
                return !!this.getCookie("yx_aui")
            },
            _$isLogin: function () {
                var e = window.$global;
                return e && 0 != e.userid || !!this.getCookie("S_INFO") || !!this.getCookie("S_OINFO")
            },
            _$getFullUrsName: function () {
                var e = "",
                    t = "",
                    i = "";
                if (this.getCookie("S_INFO")) e = "P_INFO";
                else {
                    if (!this.getCookie("S_OINFO")) return "";
                    e = "P_OINFO"
                }
                try {
                    t = decodeURIComponent(this.getCookie(e)).replace(/(^\"*)|(\"*$)/g, "") || ""
                } catch (a) {
                    t = this.getCookie(e).replace(/(^\"*)|(\"*$)/g, "") || ""
                }
                return i = t.indexOf("|"), i > 0 && (t = t.substring(0, i) + ""), t
            },
            _$getFullUserName: function () {
                var e = this._$getFullUrsName(),
                    t = window.$global;
                return t.nickname || e
            },
            _$smoothTo: function (e, t, i) {
                function a() {
                    d += .05, d > 1 && (d = 1), window.scrollTo(r.x * d + o.x, o.y + d * r.y), 1 > d ? c = setTimeout(a, l) : n()
                }

                function n() {
                    clearTimeout(c), document.onmousewheel = null
                }
                if ("string" == typeof e && (e = $(e)), 0 != e.length) {
                    void 0 === i && (i = 0);
                    var o = {
                            x: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft),
                            y: Math.max(document.body.scrollTop, document.documentElement.scrollTop)
                        },
                        s = e.offset();
                    s.top += i;
                    var c, r = {
                            x: s.left - o.x,
                            y: s.top - o.y
                        },
                        t = t || 500,
                        l = t / 60,
                        d = .01;
                    return document.onmousewheel = n, c = setTimeout(a, l), this
                }
            },
            _$getArrayItems: function (e, t) {
                var i = [];
                for (var a in e) i.push(e[a]);
                for (var n = [], o = 0; t > o && i.length > 0; o++) {
                    var s = Math.floor(Math.random() * i.length);
                    n[o] = i[s], i.splice(s, 1)
                }
                return n
            },
            _$string2object: function (e, t) {
                var i = {};
                return this._$forIn((e || "").split(t), function (e) {
                    var t = e.split("=");
                    if (t && t.length) {
                        var a = t.shift();
                        if (a) try {
                            i[decodeURIComponent(a)] = decodeURIComponent(t.join("="))
                        } catch (n) {
                            i[a] = t.join("=")
                        }
                    }
                }), i
            },
            _$getUrlParams: function () {
                return this._$string2object(window.location.search.replace("?", ""), "&")
            },
            _$getUrlParam: function (e) {
                return this._$getUrlParams()[e] || ""
            },
            _$getDownloadLink: function (e) {
                var t = this.getCookie("yx_from") || "",
                    i = this._$getUrlParam("channel"),
                    a = (e ? e : "//" + n) + "/downloadapp";
                return "" != t && (a += "?_stat_from=" + t), "" != i && (a += a.indexOf("?") > 0 ? "&channel=" + i : "?channel=" + i), a
            },
            _$addUrlQuery: function (e) {
                var t = this.getCookie("yx_from") || "",
                    i = this._$getUrlParam("channel"),
                    a = e;
                return "" != t && (a += "&_stat_from=" + t), "" != i && (a += "&channel=" + i), a
            },
            _$getDownloadQRnode: function (e, t) {
                var i = "https://m.you.163.com/downloadapp?" + this._$addUrlQuery(t || ""),
                    a = new AraleQRCode({
                        text: i,
                        size: e,
                        correctLevel: 2
                    });
                return a
            },
            _$createIframe: function (e, t) {
                var i = document.createElement("iframe");
                i.src = e, t && (i.attachEvent ? i.attachEvent("onload", function () {
                    t(), document.body.removeChild(i)
                }) : i.onload = function () {
                    t(), document.body.removeChild(i)
                }), document.body.appendChild(i)
            },
            _$getYXStat: function (e, t, i, a) {
                var n = {
                    event_name: e,
                    event_action: "click",
                    page_name: t
                };
                return i && (n.parameters = i), a && (n.topage = a), JSON.stringify(n)
            },
            _$manualAddYXStat: function (e, t) {
                var i, a = {};
                e ? (i = e.name, "add_event" == e.name && (a.event_action = e.action)) : i = "track_click", "object" == typeof t ? (a.event_name = t[0], a.page_name = t[1], a.parameters = t[2], t[3] && (a.topage = t[3])) : "string" == typeof t && (a = JSON.parse(t)), window.YXStat && window.YXStat.q && window.YXStat.q.push([i, a])
            }
        };
    e.exports = o
}, function (e, t) {
    var i = {},
        a = function (e, t) {
            try {
                return t = t.toLowerCase(), null === e ? "null" == t : void 0 === e ? "undefined" == t : {}.toString.call(e).toLowerCase() == "[object " + t + "]"
            } catch (i) {
                return !1
            }
        };
    i._$isFunction = function (e) {
        return a(e, "function")
    }, i._$isString = function (e) {
        return a(e, "string")
    }, i._$isNumber = function (e) {
        return a(e, "number")
    }, i._$isBoolean = function (e) {
        return a(e, "boolean")
    }, i._$isDate = function (e) {
        return a(e, "date")
    }, i._$isArray = function (e) {
        return a(e, "array")
    }, i._$isObject = function (e) {
        return a(e, "object")
    }, e.exports = i
}, function (e, t) {
    var i = function (e, t) {
        var i;
        if (e = e || {}, "object" != typeof e) return {};
        t = t || "YXComponent", i = window[t] || {};
        for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
        return i
    };
    e.exports = i
}, function (e, t, i) {
    var a = '	<CONST_TAG type="text/x-jqote-template">	  <a id="j-yx-fixedToolActivity" class="yx-fixedtoolActivityEntry" data-id="<%=this.act.id%>" target="_blank" href="<%=this.act.huodongUrl %>?_stat_area=fixedTool&_stat_referer=index">	    <img class="yx-fixedtoolActivityPic" src="<%=this.act.huodongPicUrl%>">	  </a>	</CONST_TAG>',
        n = '	<CONST_TAG type="text/x-jqote-template">	  <div id="j-yx-recommendation" class="yx-recommendation">	    <i class="yx-cp-icon-yxclose icon-yxclose-close24"></i>	    <%if(this.data.resourceType==1){%>	    <div class="yx-goodRecommendation">	      <div class="yx-goodImgWarp">	        <div class="yx-imgLabel">专属推荐</div>	        <a href="javascript:;" data-oporderid=<%=this.data.opOrderId%> data-href="/item/detail?id=<%=this.data.item.id%>"><img class="yx-goodImg" src="<%=this.data.item.primaryPicUrl%>?imageView&thumbnail=180x180&quality=95"/></a>	      </div>	      <div class="yx-goodInfoWarp">	        <div class="yx-goodTitle"><%=this.data.itemTag%></div>	        <%if(this.data.item.tagList.length > 0){%><div class="yx-goodLabel"><%=this.data.item.tagList[0].tagName%></div><%}%>	        <a href="javascript:;" data-oporderid=<%=this.data.opOrderId%> data-href="/item/detail?id=<%=this.data.item.id%>"><div class="yx-goodName"><%=this.data.item.name%></div></a>	        <a href="javascript:;" data-oporderid=<%=this.data.opOrderId%> data-href="/item/detail?id=<%=this.data.item.id%>"><div class="yx-goodDesc"><%=this.data.item.simpleDesc%></div></a>	        <div class="yx-goodPrice">	          <span class="yx-retailPrice">¥<%=this.data.item.retailPrice%></span>	          <%if(this.data.item.counterPrice){%><span class="yx-counterPrice">¥<%=this.data.item.counterPrice%></span><%}%>	        </div>	      </div>	    </div>	    <%}else if(this.data.resourceType==2){%>	    <div class="yx-bannerRecommendation">	      <div class="yx-imgLabel">专属推荐</div>	      <a href="javascript:;" data-oporderid=<%=this.data.opOrderId%> data-href="<%=this.data.targetUrl%>"><img class="yx-recommendationImg" src="<%=this.data.imageUrl%>?imageView&thumbnail=338y180&quality=95"/></a>	    </div>	    <%}%>	  </div>	</CONST_TAG>',
        o = '	<div class="yx-cp-base yx-cp-fixedtool j-yx-cp-fixedtool">			<a id="j-yx-fixedtoolNewuser" class="yx-fixedtoolNewuser" target="_blank" href="/gift/newUserGift?_stat_referer=fixedtool" style="display:none;">				<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-newuser"></i>				<p class="yx-fixedtoolText">新人有礼</p>			</a>	    <a id="j-yx-fixedtoolDownloadlink" class="yx-fixedtoolDownload" target="_blank" href="/downloadapp">	      <div class="j-yx-fixTool-downloadQrcode yx-fixTool-downloadQrcode"></div>				<p class="yx-fixedtool-downText1">扫码领</p>				<p class="yx-fixedtool-downText2">APP1000元</p>	      <p class="yx-fixedtool-downText2">新人礼</p>			</a>			<div id="j-yx-fixedtoolSubscribe" class="yx-fixedtoolSubscribe">				<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-subscribe"></i>				<p class="yx-fixedtoolText">订阅电子刊</p>				<div class="yx-subscribeDialog j-yx-fixedtoolSubscribeDialog">					<div class="yx-main">						<div class="yx-head yx-subscribebg">严选生活美学</div>	          <div class="yx-cp-icon-yxclose icon-yxclose-close10 j-yx-subscribeDialogClose" title="关闭"></div>	          <div class="yx-body">							<div class="yx-desc">订阅电子刊，第一时间获取严选最新资讯</div>							<div class="yx-inputWrap">								<input type="text" class="j-yx-fixedtoolInput" placeholder="输入您的电子邮件">								<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-clear j-yx-fixedtoolClear"></i>								<div class="j-yx-fixedtoolSubmit yx-submit">立即订阅</div>							</div>							<div class="yx-tip j-yx-fixedtoolTip"></div>						</div>						<div class="yx-foot">							<div class="yx-privilege">								<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-tag"></i>								<span class="yx-text">专属优惠</span>							</div>							<div class="yx-privilege">								<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-crown"></i>								<span class="yx-text">尊享优先购</span>							</div>							<div class="yx-privilege">								<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-sack"></i>								<span class="yx-text">好货不错过</span>							</div>						</div>						<div class="yx-cp-icon-yxfixedtool icon-yxfixedtool-rightArrow"></div>					</div>				</div>			</div>			<div id="j-yx-fixedtoolCustomerService" class="yx-fixedtoolCustomerService">				<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-customerService"></i>				<p class="yx-fixedtoolText">在线客服</p>			</div>			<div id="j-yx-fixedtoolGoTop" class="yx-fixedtoolGoTop">				<i class="yx-cp-icon-yxfixedtool icon-yxfixedtool-goTop"></i>				<p class="yx-fixedtoolText">回顶部</p>			</div>	    <div id="j-yx-fixedtoolAppGift" class="yx-fixedtoolAppGift">	      <div class="yx-left j-yx-fixedtoolAppGiftLeft1" style="display:none">	        <div class="yx-tag yx-f-fz14">新人</div>	        <div>	          <p class="yx-txt"><span class="yx-unit yx-f-fz18">&yen;</span><span class="yx-account">1000</span></p>	          <p class="yx-txt1 yx-f-fz18">现金礼</p>	          <p class="yx-txt2 yx-f-fz14">下载领1000元新人礼包</p>	        </div>	      </div>	      <div class="yx-left j-yx-fixedtoolAppGiftLeft2" style="display:none">	        <div class="yx-tag yx-f-fz14" style="margin-top:18px">新人</div>	        <div>	          <p class="yx-txt"><span class="yx-unit yx-f-fz18">&yen;</span><span class="yx-account">1000</span></p>	          <p class="yx-txt1 yx-f-fz18">现金礼</p>	          <p class="yx-txt2 yx-f-fz14" style="margin-top:1px">下载领1000元新人礼包</p>	          <p class="yx-txt2 yx-f-fz14" style="color:#BE4141;margin-top:1px">还有1000万等你抢<p>	        </div>	      </div>	      <div class="yx-right">	        <div class="j-yx-fixedtoolAppGiftQrcode yx-appGiftQrcode"></div>	        <div class="j-yx-fixedtoolDelete yx-delete"></div>	      </div>	    </div>		</div>';
    i(18), i(19);
    var s = i(14),
        c = i(20),
        r = i(21),
        l = i(43),
        d = i(27),
        p = i(31),
        u = i(44),
        h = i(45),
        m = i(10),
        f = i(46),
        y = (i(47), p.extend({
            __init: function (e) {
                this.__supr(e), this.__initRender(), this.__initElement(), this.__fixedtool.length && this.__initFn()
            },
            __initRender: function () {
                var e = this.__data.container || "#yx-fixedTool";
                "string" == typeof e && (this.__data.container = $(e), this.__data.container.length ? this.__data.container = $(e).eq(0) : this.__data.container = this.__createWraper(e), this.__data.container.html($(o)))
            },
            __createWraper: function (e) {
                var t = "#" === e[0] ? "id" : "class";
                return $("body").append($("<div  " + t + " =" + e.slice(1) + " ></div>")).find(e)
            },
            __initElement: function () {
                this.__container = this.__data.container, this.__uuid = s.getCookie("yx_aui"), this.__fixedtool = this.__container.find(".j-yx-cp-fixedtool"), this.__goTopBtn = this.__container.find("#j-yx-fixedtoolGoTop"), this.__subscribe = this.__container.find("#j-yx-fixedtoolSubscribe"), this.__activity = this.__container.find("#j-yx-fixedToolActivity"), this.__appGift = this.__container.find("#j-yx-fixedtoolAppGift"), this.__downloadLink = this.__container.find("#j-yx-fixedtoolDownloadlink"), this.__customerService = this.__container.find("#j-yx-fixedtoolCustomerService"), this.__newUserGift = this.__container.find("#j-yx-fixedtoolNewuser"), this.__subscrbeDialog = this.__container.find(".j-yx-fixedtoolSubscribeDialog"), this.__downloadLinkDialog = this.__container.find(".j-yx-fixedtoolDownloadLinkDialog")
            },
            __initFn: function () {
                this.__initActivity(), this.__setUserLoginStatus(), this.__isShowNewUserEntrance(), this.__initFixedTool(), window.currentPageIsIndex && (this.__appGiftQRcode(), this.__initRecommendation()), this.__initEventBind(), this.__initKeFu()
            },
            __initFixedTool: function () {
                this.__showGoTopIfNeeded(), this.__fixedtool.show()
            },
            __initActivity: function () {
                window.yx_queryDefer && window.yx_queryDefer.done(function (e) {
                    var t;
                    this.__downloadQRcode(e.data.host), e.data.hdrkMouseoverVO && (t = $(a.replace(/CONST_TAG/g, "script")).jqote({
                        act: e.data.hdrkMouseoverVO
                    }), this.__fixedtool.prepend(t), this.__initfixedToolStatistics())
                }.bind(this))
            },
            __excludeChannel: function () {
                var e = {
                        web_mailn: !0,
                        web_mailo: !0,
                        web_dxn: !0,
                        web_dxo: !0,
                        web_gg: !0,
                        web_hz: !0,
                        web_fc: !0,
                        web_pd: !0,
                        web_qyy: !0,
                        web_vip: !0,
                        web_fx: !0
                    },
                    t = s._$getUrlParam("from");
                return void 0 != e[t]
            },
            __initRecommendation: function () {
                if (!this.__excludeChannel() && "block" != this.__appGift.css("display")) {
                    var e = this;
                    m.checklogin().done(function () {
                        f.exclusive().done(function (t) {
                            var i = t.data || {};
                            if (t.data) {
                                var a = $(n.replace(/CONST_TAG/g, "script")).jqote({
                                    data: i
                                });
                                e.__fixedtool.append(a), setTimeout(function () {
                                    $("#j-yx-recommendation").show().animate({
                                        left: 1 == i.resourceType ? "-480px" : "-390px"
                                    }, function () {
                                        f.report({
                                            taskId: i.taskId
                                        }), window.YXStat && window.YXStat.q && window.YXStat.q.push(["track_view", {
                                            event_name: "show_index_exclusive_popdialog",
                                            page_name: "/",
                                            parameters: {
                                                opOrderId: i.opOrderId,
                                                resourceUrl: 1 == i.resourceType ? "/item/detail?id=" + i.item.id : i.targetUrl
                                            }
                                        }])
                                    })
                                }, 500), setTimeout(e.__closeRcmd, 3e4)
                            }
                        })
                    }), this.__fixedtool.on("click", "#j-yx-recommendation .yx-cp-icon-yxclose", e.__closeRcmd), this.__fixedtool.on("click", "#j-yx-recommendation a", function () {
                        window.YXStat && window.YXStat.q && window.YXStat.q.push(["track_click", {
                            event_name: "clcik_index_exclusive_popdialog",
                            page_name: "/",
                            parameters: {
                                opOrderId: $(this).data("oporderid") || ""
                            }
                        }]), e.__closeRcmd(), window.open($(this).data("href"))
                    })
                }
            },
            __closeRcmd: function () {
                $("#j-yx-recommendation").hide()
            },
            __setUserLoginStatus: function () {
                if ("true" != s.getCookie("yx_user_login")) {
                    var e = m.checklogin();
                    e.done(function () {
                        s.setCookie("yx_user_login", !0, 36500), this.__checkIfShowSubscribe()
                    }.bind(this)), e.fail(function () {
                        this.__checkIfShowSubscribe()
                    }.bind(this))
                }
            },
            __isShowNewUserEntrance: function () {
                return null == s.getCookie("yx_show_new_user_entrance") ? void this.__newUserGift.hide() : void h.isNewUser().done(function (e) {
                    e.data && e.data.isNewUser && e.data.showEntrance ? this.__newUserGift.show() : this.__newUserGift.hide()
                }.bind(this))
            },
            __checkIfShowSubscribe: function () {
                "true" != s.getCookie("yx_user_login") && "true" != s.getCookie("yx_subscribe_status") && (this.__subscribe.show(), l({
                    device_id: this.__uuid,
                    key: "subscribe",
                    value: "suspend_show"
                }))
            },
            __initEventBind: function () {
                $(window).on("scroll.yx-cp-fixedtool", this.__showGoTopIfNeeded.bind(this)), $("body").on("click.yx-cp-fixedtool", "#j-yx-fixedtoolGoTop", function (e) {
                    return e.preventDefault(), this.__goTop(), !1
                }.bind(this)), this.__subscribeEventBind()
            },
            __toggleSubscribe: function (e) {
                e ? (this.__subscribe.addClass("active"), this.__subscrbeDialog.show()) : (this.__subscribe.removeClass("active"), this.__subscrbeDialog.hide())
            },
            __subscribeEventBind: function () {
                var e = this.__subscribe.find(".j-yx-fixedtoolSubmit"),
                    t = this.__subscribe.find(".j-yx-fixedtoolInput"),
                    i = this.__subscribe.find(".j-yx-fixedtoolTip"),
                    a = this.__subscribe.find(".j-yx-fixedtoolClear"),
                    n = this.__subscribe.find(".j-yx-subscribeDialogClose");
                this.__isInfocus = !1, this.__isMoveIn = !1, this.__subscribe.hover(function () {
                    this.__isInfocus || (s.setCookie("yx_subscribe_showtime", (new Date).getTime(), 36500), this.__subscrbeDialog.show().data("statarea", "suspend_pop"), l({
                        device_id: this.__uuid,
                        key: "subscribe",
                        value: "suspend_pop"
                    })), this.__toggleSubscribe(!0), this.__isMoveIn = !0
                }.bind(this), function () {
                    this.__isMoveIn = !1, this.__isInfocus || this.__toggleSubscribe(!1)
                }.bind(this)), e.bind("click.yx-subscribe", function () {
                    var e = t.val();
                    if ("" == e) return void i.text("请填写电子邮件地址");
                    if (!c.isValid(e)) return void i.text("邮件格式不正确");
                    var a = u.subscribe({
                        email: e,
                        _stat_referer: "subscribe",
                        _stat_area: this.__subscrbeDialog.data("statarea")
                    });
                    a.done(function (e) {
                        s.setCookie("yx_subscribe_status", !0, 36500), i.text(e.data || "订阅成功"), this.__subscrbeDialog.fadeOut("normal", function () {
                            this.__subscribe.slideUp()
                        })
                    }.bind(this)), a.fail(function (e, t) {
                        i.text(t || "订阅失败")
                    })
                }.bind(this)), t.bind("keyup", function () {
                    i.text(""), "" == $(this).val() ? a.hide() : a.show()
                }), t.bind("focusin", function () {
                    this.__isInfocus = !0, this.__toggleSubscribe(!0)
                }.bind(this)), n.bind("click", function () {
                    this.__toggleSubscribe(!1)
                }.bind(this)), t.bind("focusout", function () {
                    this.__isInfocus = !1, this.__isMoveIn || this.__toggleSubscribe(!1)
                }.bind(this)), t.placeholder(), a.bind("click", function () {
                    t.val(""), t.focus(), a.hide()
                })
            },
            __initKeFu: function () {
                this.__customerService.click(function () {
                    r()
                })
            },
            __showGoTopIfNeeded: function () {
                var e = this.__goTopBtn,
                    t = $(document).scrollTop(),
                    i = document.documentElement.clientHeight;
                t >= i ? e.addClass("active") : e.removeClass("active")
            },
            __goTop: function () {
                $("body, html").animate({
                    scrollTop: 0
                }, 800)
            },
            __downloadQRcode: function (e) {
                var t = s._$getDownloadQRnode(70, "ochannel=aos_pd_8");
                this.__container.find(".j-yx-fixTool-downloadQrcode").append(t), this.__downloadLink.attr("href", s._$getDownloadLink(e))
            },
            __initfixedToolStatistics: function () {
                var e = this;
                this.__container.find("#j-yx-fixedToolActivity").each(function () {
                    var t = $(this),
                        i = t.data("id");
                    setTimeout(function () {
                        l({
                            uuid: e.__uuid,
                            key: "侧边栏活动展示",
                            id: i
                        })
                    }, 1e4)
                })
            },
            __initNewUserAppGift: function () {
                s.getCookie("yx_app_gift") ? this.__downloadLinkShow() : (s.setCookie("yx_app_gift", !0, 1), this.__appGiftShow(), this.appGiftSetTimeOut = setTimeout(function () {
                    this.__downloadLinkShow()
                }.bind(this), 3e4))
            },
            __downloadLinkShow: function () {
                this.__downloadLink.show()
            },
            __appGiftShow: function () {
                this.__downloadLink.hide(), this.__appGift.show()
            },
            __appGiftQRcode: function () {
                var e = s._$getDownloadQRnode(106, "ochannel=aos_pd_8");
                this.__container.find(".j-yx-fixedtoolAppGiftQrcode").append(e)
            },
            __appGiftEvent: function () {
                this.__appGift.find(".j-yx-fixedtoolDelete").on("click", function () {
                    this.__downloadLinkShow(), clearTimeout(this.appGiftSetTimeOut)
                }.bind(this))
            },
            showSubScribeDialog: function () {
                "true" != s.getCookie("yx_user_login") && "true" != s.getCookie("yx_subscribe_status") && (new Date).getTime() - Number(s.getCookie("yx_subscribe_showtime")) > 2592e5 && (s.setCookie("yx_subscribe_showtime", (new Date).getTime(), 36500), this.__subscribe.addClass("active"), this.__subscribe.show(), this.__subscrbeDialog.show().data("statarea", "user_pop"), l({
                    device_id: s.getCookie("yx_aui"),
                    key: "subscribe",
                    value: "user_pop"
                }))
            },
            isShowNewUserEntrance: function () {
                this.__isShowNewUserEntrance()
            },
            hideSubScribeDialog: function () {
                this.__subscribe.removeClass("active"), this.__subscrbeDialog.hide()
            },
            isUserSubscribe: function () {
                return "true" == s.getCookie("yx_subscribe_status")
            }
        })),
        x = null,
        g = {
            render: function (e) {
                x = new y({
                    data: {
                        container: e
                    }
                })
            },
            showSubScribeDialog: function () {
                x && x.showSubScribeDialog()
            },
            hideSubScribeDialog: function () {
                x && x.hideSubScribeDialog()
            },
            isShowNewUserEntrance: function () {
                x && x.isShowNewUserEntrance()
            },
            isUserSubscribe: function () {
                return x ? x.isUserSubscribe() : !1
            }
        };
    e.exports = d(g)
}, function (e, t) {
    "function" != typeof "".trim && (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        }),
        function () {
            if (document.documentMode && document.documentMode < 9) {
                var e = Array.prototype.splice;
                Array.prototype.splice = function () {
                    for (var t = [], i = 0, a = arguments.length; a > i; i++) t.push(arguments[i]);
                    return 1 == t.length && t.push(this.length - t[0]), e.apply(this, t)
                }
            }
        }(),
        function () {
            Function.prototype.bind || (Function.prototype.bind = function (e) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice.call(arguments, 1),
                    i = this,
                    a = function () {},
                    n = function () {
                        return i.apply(this instanceof a ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (a.prototype = this.prototype), n.prototype = new a, n
            })
        }()
}, function (e, t) {
    ! function (e) {
        e(jQuery)
    }(function (e) {
        function t(t) {
            var i = {},
                a = /^jQuery\d+$/;
            return e.each(t.attributes, function (e, t) {
                t.specified && !a.test(t.name) && (i[t.name] = t.value)
            }), i
        }

        function i(t, i) {
            var a = this,
                o = e(this);
            if (a.value === o.attr(c ? "placeholder-x" : "placeholder") && o.hasClass(h.customClass))
                if (a.value = "", o.removeClass(h.customClass), o.data("placeholder-password")) {
                    if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = i, i;
                    o.focus()
                } else a == n() && a.select()
        }

        function a(a) {
            var n, o = this,
                s = e(this),
                r = o.id;
            if (!a || "blur" !== a.type || !s.hasClass(h.customClass))
                if ("" === o.value) {
                    if ("password" === o.type) {
                        if (!s.data("placeholder-textinput")) {
                            try {
                                n = s.clone().prop({
                                    type: "text"
                                })
                            } catch (l) {
                                n = e("<input>").attr(e.extend(t(this), {
                                    type: "text"
                                }))
                            }
                            n.removeAttr("name").data({
                                "placeholder-enabled": !0,
                                "placeholder-password": s,
                                "placeholder-id": r
                            }).bind("focus.placeholder", i), s.data({
                                "placeholder-textinput": n,
                                "placeholder-id": r
                            }).before(n)
                        }
                        o.value = "", s = s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s.data("placeholder-id")).show()
                    } else {
                        var d = s.data("placeholder-password");
                        d && (d[0].value = "", s.attr("id", s.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                    }
                    s.addClass(h.customClass), s[0].value = s.attr(c ? "placeholder-x" : "placeholder")
                } else s.removeClass(h.customClass)
        }

        function n() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        var o, s, c = !1,
            r = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            l = "placeholder" in document.createElement("input") && !r && !c,
            d = "placeholder" in document.createElement("textarea") && !r && !c,
            p = e.valHooks,
            u = e.propHooks,
            h = {};
        l && d ? (s = e.fn.placeholder = function () {
            return this
        }, s.input = !0, s.textarea = !0) : (s = e.fn.placeholder = function (t) {
            var n = {
                customClass: "placeholder"
            };
            return h = e.extend({}, n, t), this.filter((l ? "textarea" : ":input") + "[" + (c ? "placeholder-x" : "placeholder") + "]").not("." + h.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                "focus.placeholder": i,
                "blur.placeholder": a
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }, s.input = l, s.textarea = d, o = {
            get: function (t) {
                var i = e(t),
                    a = i.data("placeholder-password");
                return a ? a[0].value : i.data("placeholder-enabled") && i.hasClass(h.customClass) ? "" : t.value
            },
            set: function (t, o) {
                var s, c, r = e(t);
                return "" !== o && (s = r.data("placeholder-textinput"), c = r.data("placeholder-password"), s ? (i.call(s[0], !0, o) || (t.value = o), s[0].value = o) : c && (i.call(t, !0, o) || (c[0].value = o), t.value = o)), r.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != n() && a.call(t)) : (r.hasClass(h.customClass) && i.call(t), t.value = o), r) : (t.value = o, r)
            }
        }, l || (p.input = o, u.value = o), d || (p.textarea = o, u.value = o), e(function () {
            e(document).delegate("form", "submit.placeholder", function () {
                var t = e("." + h.customClass, this).each(function () {
                    i.call(this, !0, "")
                });
                setTimeout(function () {
                    t.each(a)
                }, 10)
            })
        }), e(window).bind("beforeunload.placeholder", function () {
            var t = !0;
            try {
                "javascript:void(0)" === document.activeElement.toString() && (t = !1)
            } catch (i) {}
            t && e("." + h.customClass).each(function () {
                this.value = ""
            })
        }))
    })
}, function (e, t) {
    for (var i = "([\\w!#$%&'*+-/=?\\^_`{|}~\\.]+)", a = "([-\\w]+(\\.[-\\w]+)+)", n = i + "@" + a, o = ['\\"(.+)\\"[ ]*<' + n + ">", "\\'(.+)\\'[ ]*<" + n + ">", "([^\"']+)<" + n + ">", "<" + n + ">", '\\"' + n + '\\"', "\\'" + n + "\\'", n, "[ \\\"\\']?(.+)[ \\\"\\']?[ ]*<[ ]*" + n + "[ ]*>"], s = [], c = o.length - 1; c >= 0; c--) s.push(new RegExp(o[c]));
    var r = {
        _cache: {},
        emailPattern: "(\\w+[\\w\\-\\+]*\\w+@\\w+[\\w\\.\\-]*\\w+)",
        DEFAULT_SEP: ";",
        isValid: function (e) {
            return null != this._parseEmail(e)
        },
        _parseEmail: function (e) {
            e = $.trim(e);
            for (var t = {}, i = 0; i < s.length; i++) {
                var a = e.match(s[i]);
                if (null != a) return 5 == a.length ? (t.name = a[1].replace(/"/g, ""), t.mail = a[2] + "@" + a[3], t) : 4 == a.length ? (t.name = a[1].replace(/"/g, ""), t.mail = a[1] + "@" + a[2], t) : null
            }
        }
    };
    e.exports = r
}, function (e, t, i) {
    var a = i(14),
        n = i(22),
        o = i(23),
        s = i(24),
        c = {
            1: n.KEFU_FE_GROUP_ID,
            2: n.KEFU_BE_GROUP_ID
        },
        r = {
            1: n.KEFU_FE_GROUP_ID_TEST,
            2: n.KEFU_BE_GROUP_ID_TEST
        },
        l = function (e) {
            a._$manualAddYXStat({
                name: "track_click",
                event_action: "click"
            }, ["click_openkefu_queryResult", window.yxCurrentPage || "default", {
                isQuerySucc: e
            }])
        };
    e.exports = function () {
        if (window.ysf) {
            if (!a._$isLogin()) return void s.show();
            a._$manualAddYXStat({
                name: "track_click",
                event_action: "click"
            }, ["click_openkufu_btn", window.yxCurrentPage || "default", null]);
            var e, t, i, n, d, p = window.$global || {},
                u = window.kefuGroupType;
            n = decodeURIComponent(a.getCookie("yx_username") || ""),
                d = a.getCookie("yx_userid") || "", e = {
                    uid: n,
                    name: d,
                    email: n,
                    robotShuntSwitch: 1,
                    groupid: u ? p && "test" == p.environment ? r[u] : c[u] : null,
                    level: 0
                }, e.groupid || delete e.groupid, i = !1, t = o.getInfo(), t.then(function (t) {
                    var a = t && t.data && t.data.superMember || {},
                        n = t && t.data && t.data.memRank || {};
                    i = !0, (a && 3 === a.status || n && n.level >= 5) && (e.level = 11)
                }, function () {
                    i = !0
                }), window.setTimeout(function () {
                    ysf.config(e), ysf.open(), l(i ? !0 : !1)
                }, 200)
        }
    }
}, function (e, t) {
    e.exports = {
        ERROR_MAP: {
            "Validate.Error.0009": "密码错误次数超过每小时上限",
            "Validate.Error.0010": "密码错误次数超过每天上限",
            "Validate.Error.0011": "支付密码错误",
            "Validate.Error.0012": "还没设置支付密码",
            "Validate.Error.0014": "请求错误或超时，请刷新后重试"
        },
        DFT_ERROR_MSG: "系统繁忙，请稍后再试",
        PROMOTION_TYPE_MAP: {
            0: "无促销",
            1: "赠券",
            2: "满赠",
            3: "满减",
            4: "加价购",
            5: "满件减",
            6: "满额减",
            7: "满折",
            101: "赠券",
            102: "满赠",
            103: "满减",
            104: "加价购",
            105: "套装",
            106: "N元任选",
            107: "满件减",
            108: "满额减",
            109: "满折",
            201: "秒杀",
            202: "限时购",
            203: "限时购",
            301: "免邮",
            302: "免邮",
            303: "免邮"
        },
        BLANK_PIC: "http://yanxuan.nosdn.127.net/3d045b93716ed28dc745e648b3428a26.gif",
        LOADING_PIC: "http://yanxuan.nosdn.127.net/9f5063da9f5d2a404de7872160db22d4.gif",
        KEFU_FE_GROUP_ID: 690549,
        KEFU_FE_GROUP_ID_TEST: 17289,
        KEFU_BE_GROUP_ID: 690550,
        KEFU_BE_GROUP_ID_TEST: 19707
    }
}, function (e, t, i) {
    var a = i(11);
    e.exports = a("/xhr/membership", [{
        name: "getInfo",
        ajaxConfig: {
            type: "GET"
        }
    }])
}, function (e, t, i) {
    var a = i(25),
        n = i(14),
        o = i(15),
        s = i(13),
        c = i(27),
        r = i(28);
    i(42), a($), window.URS || s.getScript("https://ursdoccdn.nosdn.127.net/webzj_cdn101/message_170510.js");
    var l, d, p = {
        show: function (e, t, i, a) {
            if (window.yxCurrentPage && "login" === window.yxCurrentPage) return void window.location.reload();
            e || (e = function () {
                window.location.reload()
            }), d = e;
            var n = this;
            l = $('<div><div id="j-yx-loginFormWrap"></div></div>').showDialog2({
                clsName: "yx-m-loginPop",
                onclose: t,
                onbeforeclose: a
            }), window.URS ? n.__initLogin(i) : s.getScript("https://ursdoccdn.nosdn.127.net/webzj_cdn101/message_170510.js", "utf-8", function () {
                n.__initLogin(i)
            })
        },
        __initLogin: function (e) {
            new r({
                environment: window.yx_environment || "online",
                parentNode: "#j-yx-loginFormWrap",
                callback: this.__callback,
                preDialog: l,
                type: e || "login"
            })
        },
        __callback: function () {
            l.closeDialog2(), o._$isFunction(d) ? n._$createIframe("/activity/csrf", d) : location.href = d
        }
    };
    e.exports = c(p)
}, function (e, t, i) {
    e.exports = function (e) {
        ! function (e) {
            function t() {
                null == r && (e(document.body).append(o), r = e("#yx-widgetDialogContainer"), r.hasClass("yx-cp-base") || r.addClass("yx-cp-base"), setTimeout(function () {
                    r.find(">.j-yx-mask").addClass("yx-f-ani-mask")
                }, 0))
            }

            function a(t) {
                var i = e(window).height(),
                    a = t.outerHeight();
                i - a > 0 ? t.css("top", (i - a) / 2).show() : t.css("top", 0).show()
            }
            var n = function (e) {
                    var t = '<div class="yx-m-overlay yx-m-overlay-ani ' + (e.dialogClsName || "") + '">	        <div class="yx-m-pop yx-f-scroll-y yx-overlay-container-ani  yx-f-tlbr j-yx-overlay-container ' + e.clsName + '">	            <div class="j-yx-dialog-body">	                <div class="j-yx-dialog-head">	                    <div class="yx-w-close j-yx-close-pop"></div>	                </div>	                <div class="j-yx-dialog-content">	                </div>	            </div>	        </div>	        </div>';
                    return t
                },
                o = '<div id="yx-widgetDialogContainer" class="yx-cp-base">	        <div class="yx-w-mask yx-w-mask-ani j-yx-mask"></div>	      </div>',
                s = 1130,
                c = 20,
                r = null,
                l = i(26);
            e.fn.extend({
                showDialog2: function (i) {
                    var o, d, p, u, h = this;
                    return i = i || {}, t(), o = e(n(i)), d = o.find(".j-yx-dialog-body"), p = o.find(">.j-yx-overlay-container"), u = d.find(">.j-yx-dialog-content"), u.append(h.html()), r.append(o), a(p), e(window).resize(function () {
                        a(p)
                    }), l.dockIn(d, e(window), {
                        position: "middle,center",
                        dockFunc: "css"
                    }), i.close === !1 && o.find(".j-yx-close-pop").hide(), s += c, o.css("z-index", s), o.removeClass("yx-f-ani-overlay"), p.addClass("yx-f-ani-bouncein"), d.find(".j-yx-close-pop").bind("click", function () {
                        o.closeDialog2(i)
                    }), o
                },
                closeDialog2: function (e) {
                    var t, i, a = this;
                    a.addClass("yx-f-ani-overlay"), setTimeout(function () {
                        e && "function" == typeof e.onbeforeclose && e.onbeforeclose(), i = a.find(">.j-yx-overlay-container"), i.removeClass("yx-f-ani-bouncein"), 0 == a.siblings(".yx-m-overlay").length && (t = r.find(">.j-yx-mask"), t.removeClass("yx-f-ani-mask"), setTimeout(function () {
                            r.remove(), r = null
                        }, 200)), a.remove(), e && "function" == typeof e.onclose && e.onclose()
                    }, 200)
                }
            })
        }(e)
    }
}, function (e, t) {
    function i(e) {
        var t = 0;
        if ("BODY" == e.get(0).tagName) return 0;
        "absolute" != e.css("position") && (t = e.scrollTop());
        var a = e.parent();
        return a && a.get(0) ? t + i(a) : t
    }
    var a = 64,
        n = [],
        o = "",
        s = {
            dockV: function (e, t, a) {
                var n = "",
                    o = "";
                if (a = $.extend({
                        axis: "left,bottom"
                    }, a), a.axis) {
                    var s = a.axis.match(new RegExp("(left|center|right)"));
                    s && s.length > 0 && (n = s[0]);
                    var s = a.axis.match(new RegExp("(bottom|middle|top)"));
                    s && s.length > 0 && (o = s[0])
                }
                var c = t.offset(),
                    r = t.outerWidth(),
                    l = t.outerHeight(),
                    d = e.offsetParent();
                if (a.position && (r = 0, l = 0, c = a.position), a.iframe) {
                    var p = a.iframe.offset();
                    c.top = c.top + p.top, c.left = c.left + p.left
                }
                var u = e.outerWidth(),
                    h = e.outerHeight(),
                    m = d.offset(),
                    f = m.left,
                    y = m.top,
                    x = 0;
                "left" == n ? x = c.left : "right" == n ? x = c.left + r - u : "center" == n && (x = c.left - (u - r) / 2), x -= f;
                var g = 1,
                    _ = 0;
                "bottom" == o ? (_ = c.top + l, _ -= g) : "top" == o ? (_ = c.top - h, _ += g) : "middle" == o && (_ = c.top - (h - l) / 2), _ -= y;
                var v = i(e);
                _ += v;
                var b = $.extend({
                    x: 0,
                    y: 0
                }, a.positionFix);
                x += b.x, _ += b.y, e.css("left", x + "px"), e.css("top", _ + "px")
            },
            dockIn: function (e, t, i) {
                var a = "center",
                    n = "middle";
                if (i.axis) {
                    var o = i.axis.match(new RegExp("(left|center|right)"));
                    o && o.length > 0 && (a = o[0]);
                    var o = i.axis.match(new RegExp("(bottom|middle|top)"));
                    o && o.length > 0 && (n = o[0])
                }
                var s = 0,
                    c = 0,
                    t = t || $(window),
                    r = t.outerWidth(),
                    l = t.outerHeight(),
                    d = t.scrollTop(),
                    p = e.outerWidth(),
                    u = e.outerHeight();
                "center" == a ? s = (r - p) / 2 : "right" == a ? s = r - p : "left" == a && (s = 0), "middle" == n ? c = (l - u) / 2 : "bottom" == n ? c = l - u : "top" == n && (c = 0), c = d + c;
                var h = $.extend({
                    x: 0,
                    y: 0
                }, i.positionFix);
                s += h.x, c += h.y, "css" === i.dockFunc ? e.css({
                    left: s,
                    top: c
                }) : e.offset({
                    left: s,
                    top: c
                })
            },
            addPop: function (e, t) {
                var i = $(e);
                i.css("z-index", a++), n.push(i), void 0 != t && (o = t)
            },
            clearPop: function (e) {
                for (var t = $(e), i = n.length - 1; i >= 0; i--) {
                    var a = n[i];
                    if (a.hasClass("f-ani-ppnlmenu")) {
                        if (0 == t.length || t.length > 0 && !$.contains(a.get(0), t.get(0)) && "" == o || t.length > 0 && o.length > 0 && !$.contains(o.get(0), t.get(0))) {
                            try {
                                a.removeClass("f-ani-ppnlmenu"), a.hasClass("js-dropmenu-ppnl") ? a.addClass("f-hide") : setTimeout(function () {
                                    a.addClass("f-hide")
                                }, 200)
                            } catch (s) {
                                a.remove()
                            }
                            n.splice(i, 1)
                        }
                    } else n.splice(i, 1)
                }
            }
        };
    $(document).bind("mousedown", function (e) {
        return s.clearPop(e.target), !0
    }), e.exports = s
}, function (e, t) {
    var i = function (e) {
        return e.wraper || (e.wraper = function () {
            try {
                return e.apply(this, arguments)
            } catch (t) {
                console.log("Error: " + t.message + "\nfrom: " + t.stack)
            }
        }), e.wraper
    };
    e.exports = function (e) {
        if (!e) return {};
        for (var t in e) e.hasOwnProperty(t) && "function" == typeof e[t] && (e[t] = i(e[t]));
        return e
    }
}, function (e, t, i) {
    var a = i(14),
        n = i(29),
        o = i(30),
        s = i(34),
        c = i(31),
        r = i(15),
        l = i(33),
        d = i(27),
        p = i(38),
        u = i(39),
        h = i(40);
    i(41);
    var m, f, y, x, g, _ = '<div class="yx-cp-base yx-cp-m-loginBox j-yx-loginBox">	  <div class="yx-headerWrap">	    <div class="yx-loginHeader yx-f-hide j-yx-loginHeader">	      <div class="yx-headTitle yx-headTitle1 yx-f-left j-yx-mobileLogin">手机号登录</div>	      <div class="yx-split yx-f-left">&nbsp;</div>	      <div class="yx-headTitle yx-headTitle2 yx-f-left j-yx-mailLogin">邮箱登录</div>	    </div>	    <div class="yx-regHeader yx-f-hide j-yx-regHeader">	      <span class="yx-mobileReg">手机号注册</span>	    </div>	  </div>	  <div id="j-yx-mobileLoginWrap" class="yx-loading mobileCodeHeight"></div>	<div id="j-yx-mailLoginWrap" class="yx-loading mailHeight"></div>	</div>',
        v = c.extend({
            __init: function (e) {
                this.__supr(e), m = e.callback, f = e.environment, y = e.preDialog, g = e.type || "login", this.__initNode(e) && (window.URS && URS.setPkidAndPd({
                    pkid: "SkeBZeG",
                    pd: "yanxuan_web",
                    mode: 2
                }), "register" == g ? this.__changepage("register") : this.__changepage("login"), setTimeout(function () {
                    this.__initURSLoginForm()
                }.bind(this), 400), this.__initEvent(), this.__initData(), this.__initElement())
            },
            __initNode: function (e) {
                if (!e.parentNode) return !1;
                $(e.parentNode).html(_);
                var t = e.parentNode,
                    i = $(t);
                return this.__$mobileLogin = i.find(".j-yx-mobileLogin"), this.__$mailLogin = i.find(".j-yx-mailLogin"), this.__$loginBox = i.find(".j-yx-loginBox"), this.__$mobileLoginWrap = i.find("#j-yx-mobileLoginWrap"), !0
            },
            __initEvent: function () {
                this.__$mobileLogin.bind("click", this.__changeLoginShow.bind(this, 0)), this.__$mailLogin.bind("click", this.__changeLoginShow.bind(this, 1))
            },
            __changeLoginShow: function (e) {
                this.__$loginBox.removeClass("yx-loginBox" + (e + 1) % 2).addClass("yx-loginBox" + e % 2)
            },
            __initData: function () {
                window.yxLoginType = a.getCookie("yx_login_type") || 0, this.__mbModule = "code"
            },
            __initElement: function () {
                0 == window.yxLoginType || "register" == g ? this.__$loginBox.addClass("yx-loginBox0") : this.__$loginBox.addClass("yx-loginBox1"), this.__$loginBox.show()
            },
            __initURSLoginForm: function () {
                var e = this.__getLoginConfigs();
                "register" == g && $.extend(e[0], {
                    page: g
                });
                var t = this.urs = new URS(e[0]);
                t.regcb = t.logincb = this.__mobileLogincb.bind(this), new URS(e[1]).logincb = this.__mailLogincb.bind(this), p(function (e) {
                    x = e
                })
            },
            __changepage: function (e) {
                "register" == e ? ($(".j-yx-regHeader").removeClass("yx-f-hide"), $(".j-yx-loginHeader").addClass("yx-f-hide")) : "login" == e && (this.__mbModule = "code", this.__setMinHeight_mobileCodeLogin(), $(".j-yx-regHeader").addClass("yx-f-hide"), $(".j-yx-loginHeader").removeClass("yx-f-hide"))
            },
            __mbChangeModule: function () {
                "code" == this.__mbModule ? (this.__setMinHeight_mobilePwdLogin(), this.__mbModule = "pwd") : (this.__setMinHeight_mobileCodeLogin(), this.__mbModule = "code")
            },
            __setMinHeight_mobilePwdLogin: function () {
                this.__$mobileLoginWrap.removeClass("mobileCodeHeight").addClass("mobilePwdHeight")
            },
            __setMinHeight_mobileCodeLogin: function () {
                this.__$mobileLoginWrap.removeClass("mobilePwdHeight").addClass("mobileCodeHeight")
            },
            __mobileLogincb: function (e, t) {
                a.setCookie("yx_login_type", 0, 365), this.__logincb(e), t === !0 ? this.__callback() : this.__loginQuery()
            },
            __mailLogincb: function (e) {
                a.setCookie("yx_login_type", 1, 365), this.__logincb(e), this.__callback()
            },
            __logincb: function (e) {
                if (window.YXStat && window.YXStat.q) {
                    var t = "普通";
                    e ? (e.indexOf("sina") > -1 && (t = "新浪"), e.indexOf("wx") > -1 && (t = "微信"), e.indexOf("tencent") > -1 && (t = "QQ")) : t = "企业邮", window.YXStat.q.push(["add_event", {
                        event_name: "login",
                        page_name: " ",
                        event_action: "login",
                        parameters: {
                            result: "成功",
                            type: t
                        }
                    }])
                }
            },
            __loginQuery: function () {
                var e = n.query();
                e.done(function (e) {
                    var t = e.data;
                    if (t.popUp) {
                        var i = t.loginPopUpIndicatorVO || {};
                        1 == i.type ? (new o({
                            data: {
                                uniqueId: t.loginPopUpIndicatorVO.uniqueId,
                                mailAccount: t.loginPopUpIndicatorVO.userName,
                                mobileAccount: t.loginPopUpIndicatorVO.mobile,
                                callback: m
                            }
                        }), y && y.closeDialog2()) : 2 == i.type && (new s({
                            data: {
                                callback: m,
                                mailAccount: t.loginPopUpIndicatorVO.userName,
                                uniqueId: t.loginPopUpIndicatorVO.uniqueId
                            }
                        }), y && y.closeDialog2())
                    } else this.__callback()
                }.bind(this)), e.fail(function (e, t) {
                    l.notify(t || "网络异常，请重试", "error")
                })
            },
            initRiskCookie: function () {
                var e = $.Deferred(),
                    t = u._$getButId();
                return t ? (u._$setButId(t), e.resolve()) : h.getButId().then(function (t) {
                    t.data ? (u._$setButId(t.data.yxButId), e.resolve()) : e.reject()
                }, function () {
                    e.reject()
                }), e.promise()
            },
            __callback: function () {
                var e = this;
                e.initRiskCookie().then(function () {
                    window.YXStat && window.YXStat.q ? (window.YXStat.q.push(["add_event", {
                        event_name: "login_success_setButId",
                        event_action: "login",
                        page_name: "login",
                        parameters: {
                            isPrivateMode: x,
                            butid: u._$getButId()
                        }
                    }]), window.YXStat.tool.warpPageJump(function () {
                        e.__handleCallback()
                    })) : e.__handleCallback()
                }, function () {
                    e.__handleCallback()
                })
            },
            __handleCallback: function () {
                r._$isFunction(m) ? m() : location.href = m
            },
            __getLoginConfigs: function () {
                var e = "https://open.qiye.163.com/a/oauth2/authorize?client_id=yanxuan_test&response_type=code&redirect_uri=http%3a%2f%2fcps.you.yxp.163.com%2ftrack%2fqiyemail%2fauth.do&state=";
                "release" !== f && "online" !== f || (e = "https://open.qiye.163.com/a/oauth2/authorize?client_id=yanxuan&response_type=code&redirect_uri=http%3a%2f%2fcps.you.163.com%2ftrack%2fqiyemail%2fauth.do&state="), e += encodeURIComponent(window.location.protocol + "//" + window.location.host + "/u/logincps");
                var t = {
                        product: "yanxuan_web",
                        promark: "SkeBZeG",
                        host: "you.163.com",
                        regUrl: "https://zc.reg.163.com/regInitialized?pd=yanxuan_web&pkid=njSLDRg&pkht=you.163.com",
                        oauthLoginConfig: [{
                            name: "weixin"
                        }, {
                            name: "qq"
                        }, {
                            name: "weibo"
                        }, {
                            name: "renren",
                            url: e
                        }],
                        swidth: 260,
                        productkey: "7ef4da58447919badeea0a8b20ac7e54",
                        needRegAgree: 0,
                        needRegAgreeMb: 0,
                        noqr: 1,
                        noMobileReg: 1,
                        gotoRegText: "邮箱注册",
                        gotoRegTextMb: "手机快捷注册",
                        goEmailLoginTxt: "邮箱登录",
                        goMbLoginTxt: "手机号登录",
                        mailreghook: "邮箱注册",
                        gotoLoginTextMb: "直接登录",
                        changepage: this.__changepage.bind(this),
                        mbChangeModule: this.__mbChangeModule.bind(this)
                    },
                    i = {
                        includeBox: "j-yx-mobileLoginWrap",
                        needMobileLogin: 1,
                        mobileFirst: 1,
                        needMobileReg: 1,
                        smsLoginFirst: 1,
                        smsBtnTxt: "登 录",
                        mbBtnTxt: "登 录",
                        page: "login",
                        single: 0,
                        needMailReg: 0,
                        regMbTxt: "注 册",
                        regSucCount: 3,
                        cssDomain: "//yanxuan.nosdn.127.net/",
                        cssFiles: "e2e40202e3d8ebc74e2e004116a634c2.css",
                        mailreghooklink: "https://zc.reg.163.com/regInitialized?pd=yanxuan_web&pkid=njSLDRg&pkht=you.163.com"
                    },
                    n = {
                        page: "login",
                        includeBox: "j-yx-mailLoginWrap",
                        placeholder: {
                            account: "邮箱帐号",
                            pwd: "请输入密码"
                        },
                        loginText: "登 录",
                        single: 1,
                        cssDomain: "//yanxuan.nosdn.127.net/",
                        cssFiles: "6bda026452eda3f91838c1cfa4a08ad6.css"
                    },
                    o = a._$extend(a._$extend({}, t), i),
                    s = a._$extend(a._$extend({}, t), n);
                return [o, s]
            }
        });
    e.exports = d(v)
}, function (e, t, i) {
    var a = i(11);
    e.exports = a("/xhr/login", [{
        name: "query",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "relateConfirm",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "mobileBindConfirm",
        ajaxConfig: {
            type: "GET"
        }
    }])
}, function (e, t, i) {
    var a = i(31),
        n = i(14),
        o = i(15),
        s = i(29),
        c = i(33),
        r = i(34);
    i(25)($), i(37);
    var l = a.extend({
        __init: function (e) {
            this.__supr(e), this.__initNode(e)
        },
        __initNode: function (e) {
            var t = e.data || {};
            this.__templateId = n.uid("j-yx-relateDialog-con-");
            var i = '<div><div class="yx-loading j-yx-loading"></div><div style="visibility:hidden;overflow:hidden;background:#fff" id="' + this.__templateId + '">	      <div class="yx-tips yx-line1">你已存在' + t.mailAccount + "，是否将手机号" + t.mobileAccount + '与之关联？</div>	      <div class="yx-tips yx-line2">关联后手机邮箱的数据将会被保留，你仍可以用手机号登录。</div>	      <div class="yx-relateLoginCon" id="j-yx-relateLoginCon"></div>	      <div class="j-yx-notRelate yx-w-button yx-w-button-ghost yx-w-button-xl">不关联</div>	    </div></div>';
            this.__body = $(i).showDialog2({
                clsName: "yx-m-pop-relateDialog"
            }), this.__initData(t), this.__initURS(), this.__initEvent()
        },
        __initData: function (e) {
            this.__callback = e.callback || "", this.__uniqueId = e.uniqueId, this.__mailAccount = e.mailAccount
        },
        __initURS: function () {
            var e = this.__getLoginConfig();
            new URS(e).logincb = this.__logincb.bind(this)
        },
        __initEvent: function () {
            this.__body.find(".j-yx-notRelate").on("click", this.__relateConfirm.bind(this, !1))
        },
        __logincb: function () {
            this.__relateConfirm(!0)
        },
        __relateConfirm: function (e) {
            var t = s.relateConfirm({
                uniqueId: this.__uniqueId,
                relate: e
            });
            t.done(function (e) {
                var t = e.data;
                if (t.popUp) {
                    var i = t.loginPopUpIndicatorVO || {};
                    2 == i.type ? (new r({
                        data: {
                            callback: this.__handleCallback.bind(this),
                            mailAccount: t.loginPopUpIndicatorVO.userName,
                            uniqueId: t.loginPopUpIndicatorVO.uniqueId
                        }
                    }), this.__body.closeDialog2()) : (this.__closeDialog(), c.notify("弹窗类型返回值错误", "error"))
                } else this.__handleCallback()
            }.bind(this)), t.fail(function (e, t) {
                this.__closeDialog(), c.notify(t || "网络异常，请重试", "error")
            }.bind(this))
        },
        __closeDialog: function () {
            setTimeout(function () {
                this.__body.closeDialog2()
            }.bind(this), 2e3)
        },
        __handleCallback: function () {
            this.__body.closeDialog2(), o._$isFunction(this.__callback) ? this.__callback() : location.href = this.__callback
        },
        __initReady: function () {
            this.__body.find(".j-yx-loading").hide(), this.__body.find("#" + this.__templateId).css("visibility", "visible"), this.__body.find(".j-yx-overlay-container").css("height", "auto")
        },
        __getLoginConfig: function () {
            var e = {
                product: "yanxuan_web",
                promark: "SkeBZeG",
                host: "you.163.com",
                cssDomain: "//yanxuan.nosdn.127.net/",
                cssFiles: "9044e924f41b247422441000b8537c49.css",
                swidth: 260,
                productkey: "7ef4da58447919badeea0a8b20ac7e54",
                needRegAgree: 0,
                needRegAgreeMb: 0,
                noqr: 1,
                noMobileReg: 1,
                initReady: this.__initReady.bind(this),
                page: "login",
                includeBox: "j-yx-relateLoginCon",
                preFilledMail: this.__mailAccount,
                placeholder: {
                    pwd: "请输入" + this.__mailAccount + "帐号登录密码"
                },
                single: 1,
                loginText: "关 联",
                resize: function (e) {}.bind(this)
            };
            return e
        }
    });
    e.exports = l
}, function (e, t, i) {
    var a = i(32),
        n = [].slice,
        o = a({
            __init: function (e) {
                this.__data = {}, e = e || {}, e.events && this._$on(e.events), this.__data = e.data || {}, this.__config && this.__config(this.__data)
            },
            __config: function (e) {},
            _$on: function (e, t) {
                if ("object" == typeof e)
                    for (var i in e) this._$on(i, e[i]);
                else {
                    var a = this,
                        n = a._handles || (a._handles = {}),
                        o = n[e] || (n[e] = []);
                    o.push(t)
                }
                return this
            },
            _$off: function (e, t) {
                var i = this;
                if (i._handles) {
                    e || (this._handles = {});
                    var a, n = i._handles;
                    if (a = n[e]) {
                        if (!t) return n[e] = [], i;
                        for (var o = 0, s = a.length; s > o; o++)
                            if (t === a[o]) return a.splice(o, 1), i
                    }
                    return i
                }
            },
            _$emit: function (e) {
                var t, i, a, o = this,
                    s = o._handles;
                if (e) {
                    if (i = n.call(arguments, 1), a = e, !s) return o;
                    if (t = s[a.slice(1)])
                        for (var c = 0, r = t.length; r > c; c++) t[c].apply(o, i);
                    if (!(t = s[a])) return o;
                    for (var l = 0, r = t.length; r > l; l++) t[l].apply(o, i);
                    return o
                }
            }
        });
    e.exports = o
}, function (e, t, i) {
    var a, n;
    ! function (o, s, c) {
        a = c, n = "function" == typeof a ? a.call(t, i, t, e) : a, !(void 0 !== n && (e.exports = n))
    }("klass", this, function () {
        function e(e) {
            return n.call(t(e) ? e : function () {}, e, 1)
        }

        function t(e) {
            return typeof e === o
        }

        function i(e, t, i) {
            return function () {
                var a = this.__supr;
                this.__supr = i[c][e];
                var n = {}.fabricatedUndefined,
                    o = n;
                try {
                    o = t.apply(this, arguments)
                } finally {
                    this.__supr = a
                }
                return o
            }
        }

        function a(e, a, n) {
            for (var o in a) a.hasOwnProperty(o) && (e[o] = t(a[o]) && t(n[c][o]) && s.test(a[o]) ? i(o, a[o], n) : a[o])
        }

        function n(e, i) {
            function n() {}

            function o() {
                this.__init ? this.__init.apply(this, arguments) : (i || l && s.apply(this, arguments), d.apply(this, arguments))
            }
            n[c] = this[c];
            var s = this,
                r = new n,
                l = t(e),
                d = l ? e : this,
                p = l ? {} : e;
            return o.methods = function (e) {
                return a(r, e, s), o[c] = r, this
            }, o.methods.call(o, p).prototype.constructor = o, o.extend = arguments.callee, o[c].implement = o.statics = function (e, t) {
                return e = "string" == typeof e ? function () {
                    var i = {};
                    return i[e] = t, i
                }() : e, a(this, e, s), this
            }, o
        }
        var o = "function",
            s = /xyz/.test(function () {
                xyz
            }) ? /\b__supr\b/ : /.*/,
            c = "prototype";
        return e
    })
}, function (e, t, i) {
    var a = i(31),
        n = i(14),
        o = i(15),
        s = a.extend({
            template: '<div class="yx-cp-base yx-m-notify yx-hide"><div class="yx-text j-yx-text"></div></div>',
            iconMap: {
                success: "u-ok",
                fail: "u-fail",
                error: "u-fail",
                warning: "u-warning"
            },
            __config: function (e) {
                n._$extend(e, {
                    messages: "",
                    isHide: !0,
                    type: "",
                    clazz: "hide",
                    duration: 2e3
                })
            },
            __init: function (e) {
                this.__supr(e), this.__body = $(this.template), this.__textCon = this.__body.find(".j-yx-text").first(), $(document.body).append(this.__body)
            },
            notify: function (e, t, i, a, n) {
                e && "object" == typeof e && (t = e.type, e = e.message, i = e.duration, a = e.callback), this.__data.duration = i || this.__data.duration, this.__data.message = e, this.__data.type = t || "success", this.__data.callback = a || null, this.__body.css({
                    display: "block",
                    left: n || "50%"
                }), this.__textCon.html(this.__data.message);
                var o = this.__clear.bind(this, e);
                return setTimeout(function () {
                    this.__body.removeClass("yx-hide").addClass("yx-show")
                }.bind(this), 0), this.__timer && clearTimeout(this.__timer), -1 != this.__data.duration && (this.__timer = setTimeout(o, this.__data.duration)), o
            },
            __clear: function () {
                this.__body.removeClass("yx-show").addClass("yx-hide"), o._$isFunction(this.__data.callback) && this.__data.callback(), setTimeout(function () {
                    this.__body.css("display", "none")
                }.bind(this), 500)
            }
        }),
        c = new s;
    c.Notify = s, e.exports = c
}, function (e, t, i) {
    var a = i(31),
        n = i(35),
        o = i(15),
        s = i(33),
        c = i(29);
    i(36);
    var r = a.extend({
        __init: function (e) {
            var t = e.data || {};
            this.__supr(e), this.__callback = t.callback || "", this.__uniqueId = t.uniqueId, new n({
                data: {
                    dialogClsName: "yx-m-unbindDialog",
                    tips: "该手机号码已绑定为" + (t.mailAccount || "") + "的个人中心手机号，是否将其解绑？",
                    okText: "确定",
                    cancelText: "取消"
                },
                events: {
                    onok: this.__bindNewMobile.bind(this),
                    oncancel: this.__handleCallback.bind(this)
                }
            })
        },
        __handleCallback: function () {
            o._$isFunction(this.__callback) ? this.__callback() : location.href = this.__callback
        },
        __bindNewMobile: function () {
            var e = c.mobileBindConfirm({
                bind: !0,
                uniqueId: this.__uniqueId
            });
            e.done(function () {
                this.__handleCallback()
            }.bind(this)), e.fail(function (e, t) {
                s.notify(t || "网络异常，请重试", "error"), setTimeout(function () {
                    this.__handleCallback()
                }.bind(this), 2e3)
            }.bind(this))
        }
    });
    e.exports = r
}, function (e, t, i) {
    var a = i(14),
        n = i(31),
        o = i(25),
        s = '<div>	                    <div class="yx-w-title j-yx-title"></div>	                    <div class="yx-w-tips j-yx-text"></div>	                    <a class="yx-w-button yx-w-button-primary yx-w-button-l yx-pos-l j-yx-ok"></a>	                    <a class="yx-w-button yx-w-button-l yx-pos-r j-yx-cancel"></a>	                 </div>';
    o($);
    var c = n.extend({
        __config: function (e) {
            a._$extend(e, {
                clasName: "",
                title: "",
                tips: "",
                okText: "确定",
                cancelText: "取消"
            })
        },
        __init: function (e) {
            this.__supr(e), this.__initNode()
        },
        __initNode: function () {
            this.__body = $(s).showDialog2({
                dialogClsName: this.__data.dialogClsName
            });
            var e = this.__body.find(".j-yx-ok").first(),
                t = this.__body.find(".j-yx-cancel").first(),
                i = this.__body.find(".j-yx-text").first(),
                a = this.__body.find(".j-yx-title").first();
            a.html(this.__data.title), i.html(this.__data.tips), t.html(this.__data.cancelText), e.html(this.__data.okText), e.click($.proxy(this.__onOkCallback, this)), t.click($.proxy(this.__onCancelCallback, this))
        },
        __onOkCallback: function () {
            this.__body.closeDialog2(), this._$emit("onok")
        },
        __onCancelCallback: function () {
            this.__body.closeDialog2(), this._$emit("oncancel")
        }
    });
    e.exports = c
}, function (e, t) {}, function (e, t) {}, function (e, t) {
    function i(e) {
        function t() {
            try {
                localStorage.length ? n() : (localStorage.x = 1, localStorage.removeItem("x"), n())
            } catch (e) {
                navigator.cookieEnabled ? a() : n()
            }
        }
        var i, a = e.bind(null, !0),
            n = e.bind(null, !1);
        window.webkitRequestFileSystem ? window.webkitRequestFileSystem(0, 0, n, a) : "MozAppearance" in document.documentElement.style ? (i = indexedDB.open("test"), i.onerror = a, i.onsuccess = n) : /constructor/i.test(window.HTMLElement) || window.safari ? t() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? n() : a()
    }
    e.exports = i
}, function (e, t, i) {
    var a = i(14),
        n = {
            _$setButId: function (e) {
                var t = a.getCookie("yx_but_id");
                t || a.setCookie("yx_but_id", e, 7300);
                var i = localStorage && localStorage.getItem && localStorage.getItem("yx_but_id") || "";
                i || localStorage && localStorage.setItem && localStorage.setItem("yx_but_id", e)
            },
            _$getButId: function () {
                return a.getCookie("yx_but_id") || localStorage && localStorage.getItem && localStorage.getItem("yx_but_id")
            }
        };
    e.exports = n
}, function (e, t, i) {
    var a = i(11);
    e.exports = a("/xhr/risk-control/butid", [{
        name: "getButId",
        ajaxConfig: {
            type: "GET",
            cache: !0
        }
    }])
}, function (e, t) {}, function (e, t) {}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        for (var i in e) e.hasOwnProperty(i) && t.push("" + i + "=" + e[i]);
        t.push("type=web&rid=" + (new Date).getTime());
        var a = "//stat.mail.163.com/you/a.js?" + t.join("&");
        a = encodeURI(a);
        var n = $.get(a);
        setTimeout(function () {
            n.abort()
        }, 3e4)
    }
}, function (e, t, i) {
    var a = i(12),
        n = {
            _ajax: function (e, t, i, n) {
                var o = t || {},
                    s = $.Deferred();
                return a.ajax({
                    url: e,
                    data: o,
                    success: function (e) {
                        s.resolve(e)
                    },
                    error: function (e, t, i) {
                        s.reject(e, t, i)
                    },
                    type: i || "POST",
                    contentType: n || ""
                }), s
            },
            subscribe: function (e) {
                return this._ajax("/xhr/visitor/subscribe.json", e, "GET")
            }
        };
    e.exports = n
}, function (e, t, i) {
    var a = i(12),
        n = {
            _ajax: function (e, t, i) {
                var n = t || {},
                    o = $.Deferred();
                return a.ajax({
                    url: e,
                    data: n,
                    success: function (e) {
                        o.resolve(e)
                    },
                    error: function (e, t, i) {
                        o.reject(e, t, i)
                    },
                    type: i || "POST"
                }), o
            },
            show: function (e) {
                return this._ajax("/xhr/gift/newUserGift/show.json", e, "POST")
            },
            isNewUser: function (e) {
                var t = window.seckillUniqueFlag ? "/xhr/seckill" : "/xhr";
                return this._ajax(t + "/gift/newUserGift/isNewUser.json", e, "GET")
            },
            get: function (e) {
                return this._ajax("/xhr/gift/newUserGift/get.json", e, "POST")
            }
        };
    e.exports = n
}, function (e, t, i) {
    var a = i(11);
    e.exports = a("/xhr/rcmd", [{
        name: "index/exclusive",
        alias: "exclusive"
    }, "report"])
}, function (e, t) {
    e.exports = function () {
        var e = (new Date).getTime(),
            t = new Date("4/1/2018").getTime(),
            i = new Date("4/12/2018").getTime();
        return e >= t && i >= e
    }
}, , , , , , , , , function (e, t) {
    var i = {
        isCellPhone: function (e) {
            return 11 == e.length ? !!/^1[3456789][0-9]{9}$/.test(e) : !1
        }
    };
    e.exports = i
}, , , , , , , , , , , , , , , , , , , function (e, t, i) {
    var a = i(13),
        n = i(14),
        o = i(27),
        s = i(21),
        c = i(76);
    i(78);
    var r = function () {
            return React.createElement("div", {
                className: "yx-cp-m-serviceTel"
            }, React.createElement("h4", {
                className: "yx-cp-hd"
            }, "客户服务"), React.createElement("a", {
                onClick: s,
                className: "yx-w-button yx-cp-btn yx-cp-kefuBtn",
                href: "javascript:;"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-service"
            }), React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-service service-hover"
            }), React.createElement("div", {
                className: "yx-f-margin-top-10"
            }, "在线客服")), React.createElement("a", {
                onClick: c.handleShow,
                className: "yx-w-button yx-cp-btn yx-cp-feedbackBtn",
                href: "javascript:;"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-feedback"
            }), React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-feedback feedback-hover"
            }), React.createElement("div", {
                className: "yx-f-margin-top-10"
            }, "用户反馈")))
        },
        l = function () {
            return React.createElement("div", {
                className: "yx-cp-m-whatIsYX"
            }, React.createElement("h4", {
                className: "yx-cp-hd"
            }, "何为严选"), React.createElement("p", {
                className: "yx-cp-desc"
            }, "网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品"))
        },
        d = function (e) {
            return React.createElement("div", {
                className: "yx-cp-m-followUs"
            }, React.createElement("p", {
                className: e.titleCls
            }, e.title), React.createElement("div", {
                className: "yx-cp-followWayList"
            }, React.createElement("div", {
                className: "yx-cp-followWay yx-f-left j-yx-cp-lazyImg"
            }, e.yxIcon ? React.createElement("img", {
                src: e.yxIcon
            }) : React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-yx"
            }), React.createElement("div", {
                className: "yx-cp-bd"
            }, React.createElement("div", {
                className: "yx-cp-wrap"
            }, React.createElement("img", {
                className: "yx-cp-imgQR",
                src: "",
                "data-src": e.yxQR,
                alt: "严选易信"
            }), React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
            })))), React.createElement("div", {
                className: "yx-cp-followWay yx-f-left j-yx-cp-lazyImg"
            }, e.wxIcon ? React.createElement("img", {
                src: e.wxIcon
            }) : React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-wx"
            }), React.createElement("div", {
                className: "yx-cp-bd"
            }, React.createElement("div", {
                className: "yx-cp-wrap"
            }, React.createElement("img", {
                className: "yx-cp-imgQR",
                src: "",
                "data-src": e.wxQR,
                alt: "严选微信"
            }), React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
            })))), React.createElement("a", {
                className: "yx-f-left",
                href: "//weibo.com/p/1006065627773110/home?from=page_100606&mod=TAB#place",
                target: "_blank"
            }, e.wbIcon ? React.createElement("img", {
                src: e.wbIcon
            }) : React.createElement("i", {
                className: "yx-cp-icon-yxfoot icon-yxfoot-wb"
            }))))
        },
        p = function () {
            return React.createElement("div", {
                className: "yx-cp-m-ft1"
            }, React.createElement("div", {
                className: "yx-cp-row"
            }, React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement(r, null)), React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement(l, null), React.createElement(d, {
                titleCls: "yx-cp-title",
                title: "关注我们 :",
                yxQR: "//yanxuan.nosdn.127.net/7117e381ba1bb5c2c9dfdafed7810d2e.png?imageView&quality=95",
                wxQR: "//yanxuan.nosdn.127.net/a3652c6bd3723412fe5099aea1502e50.png?imageView&quality=95"
            })), React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement("div", {
                className: "yx-cp-m-ftAppDownload"
            }, React.createElement("h4", {
                className: "yx-cp-hd"
            }, "扫码下载严选APP"), React.createElement("div", {
                className: "j-yx-cp-footQRcode yx-cp-footQRcode"
            }), React.createElement("div", {
                className: "yx-cp-tip"
            }, "下载领1000元新人礼包")))))
        },
        u = function () {
            return React.createElement("div", {
                className: "yx-cp-m-ft1"
            }, React.createElement("div", {
                className: "yx-cp-row"
            }, React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement(r, null)), React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement(l, null)), React.createElement("div", {
                className: "yx-cp-item"
            }, React.createElement(d, {
                titleCls: "yx-cp-hd",
                title: "关注我们",
                yxIcon: "//yanxuan.nosdn.127.net/17a4162a1f4a4c9d0c2169414fc2533e.png",
                wxIcon: "//yanxuan.nosdn.127.net/36e38c4d78d206a2e73c18dff23d2ec2.png",
                wbIcon: "//yanxuan.nosdn.127.net/a9bdb47d337752ea632a8d23841cfce5.png",
                yxQR: "//yanxuan.nosdn.127.net/d947ae42dc1085f285f31b3ea61a269b.jpg?imageView",
                wxQR: "//yanxuan.nosdn.127.net/80f13a5cb52edc2bdfddbb8f4427fb95.jpg?imageView"
            }))))
        },
        h = function (e) {
            return React.createElement("div", {
                className: "yx-cp-m-ft2"
            }, React.createElement("div", {
                className: "yx-cp-row"
            }, React.createElement("ul", {
                className: "yx-cp-m-siteEnsure"
            }, React.createElement("li", {
                className: "yx-cp-item"
            }, React.createElement("div", {
                className: "yx-cp-inner"
            }, React.createElement("i", {
                className: "yx-cp-icon yx-cp-icon-yxfoot icon-yxfoot-wuyou"
            }), React.createElement("p", {
                className: "yx-cp-text"
            }, "30天无忧退换货"))), React.createElement("li", {
                className: "yx-cp-item"
            }, React.createElement("div", {
                className: "yx-cp-inner"
            }, React.createElement("i", {
                className: "yx-cp-icon yx-cp-icon-yxfoot icon-yxfoot-baoyou"
            }), React.createElement("p", {
                className: "yx-cp-text"
            }, "满88元免邮费"))), React.createElement("li", {
                className: "yx-cp-item"
            }, React.createElement("div", {
                className: "yx-cp-inner"
            }, React.createElement("i", {
                className: "yx-cp-icon yx-cp-icon-yxfoot icon-yxfoot-netease"
            }), React.createElement("p", {
                className: "yx-cp-text"
            }, "网易品质保证")))), React.createElement("div", {
                className: "yx-cp-hr"
            }), React.createElement("div", {
                className: "yx-cp-m-siteInfo"
            }, React.createElement("div", {
                className: "yx-cp-nav"
            }, React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/story",
                target: "_blank"
            }, "关于我们"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/help/new",
                target: "_blank"
            }, "帮助中心"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/help/new#6",
                target: "_blank"
            }, "售后服务"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/help/new#3",
                target: "_blank"
            }, "配送与验收"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/help/new#39",
                target: "_blank"
            }, "商务合作"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: "http://b.you.163.com?from=yx",
                target: "_blank"
            }, "企业采购"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: "https://open.you.163.com/",
                target: "_blank"
            }, "开放平台"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/product/keywords?letter=A&page=1",
                target: "_blank"
            }, "搜索推荐"), React.createElement("b", {
                className: "yx-cp-split"
            }, "|"), React.createElement("a", {
                className: "yx-cp-text",
                href: e.optons.host + "/friendLink",
                target: "_blank"
            }, "友情链接")), React.createElement("p", {
                className: "yx-cp-copyright"
            }, "网易公司版权所有 © 1997-", (new Date).getFullYear(), "   ", React.createElement("a", {
                style: {
                    color: "#999"
                },
                href: "http://yanxuan.nosdn.127.net/e1fff54c8226f29e3c87ab117c5d67bc.jpg?imageView",
                target: "_blank"
            }, "食品经营许可证：JY13301080111719"), " ", React.createElement("a", {
                style: {
                    color: "#999"
                },
                target: "_blank",
                href: "http://yanxuan.nosdn.127.net/7e5d2964f0def12909c94d4ed2f55048.jpg?imageView"
            }, "出版物经营许可证：新出发滨字第0132号"), " ", React.createElement("a", {
                style: {
                    color: "#999"
                },
                target: "_blank",
                href: "http://yanxuan.nosdn.127.net/d678ac17014b97f97d25bb86ae288af2.jpg?imageView"
            }, "单用途商业预付卡备案证：330100AAC0024")), React.createElement("a", {
                className: "yx-cp-businessAdmin",
                href: "http://idinfo.zjaic.gov.cn/bscx.do?method=hddoc&id=33010800002352",
                target: "_blank"
            }, React.createElement("img", {
                className: "yx-cp-img",
                src: "//yanxuan.nosdn.127.net/86f32b668af6e537389a77480fb5c74d.gif"
            })))))
        },
        m = React.createClass({
            displayName: "Foot",
            getDefaultProps: function () {
                var e = n.getDropHost();
                return {
                    options: {
                        isShowFt: !0,
                        isShowFt2: !0,
                        host: e,
                        qrCodeImgUrl: null
                    }
                }
            },
            componentWillMount: function () {
                this.props.options && this.props.options.qrCodeImgUrl || window.AraleQRCode || a.getScript("//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/qrcode.js", "utf-8")
            },
            componentDidMount: function () {
                this.lazyLoadQrcode(), this.lazyLoadImg()
            },
            render: function () {
                var e = this.props.options,
                    t = null,
                    i = null;
                return void 0 == e.isShowFt && (e.isShowFt = !0), void 0 == e.isShowFt2 && (e.isShowFt2 = !0), e.isShowFt === !0 && (t = "downloadapp" == e.currentPage ? React.createElement(u, {
                    optons: this.props.options
                }) : React.createElement(p, {
                    optons: this.props.options
                })), e.isShowFt2 === !0 && (i = React.createElement(h, {
                    optons: this.props.options
                })), e.isShowFt === !1 && e.isShowFt2 === !1 ? null : React.createElement("div", {
                    className: "yx-cp-m-foot yx-cp-base " + ("downloadapp" == e.currentPage ? "yx-cp-m-foot-official" : "")
                }, t, i)
            },
            lazyLoadQrcode: function () {
                var e, t, i;
                i = this.props.options && this.props.options.qrCodeImgUrl, t = function () {
                    e = n._$getDownloadQRnode(104, "ochannel=aos_pd_8"), $(".j-yx-cp-footQRcode").append(e)
                }, i ? (e = $('<img class="yx-cp-arcodeImg" src= ' + i + " />"), $(".j-yx-cp-footQRcode").append(e)) : window.AraleQRCode ? t() : a.getScript("//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/qrcode.js", "utf-8", function () {
                    t()
                })
            },
            lazyLoadImg: function () {
                var e = $(".j-yx-cp-lazyImg");
                e.hover(function (e) {
                    var t = $(this).find(".yx-cp-imgQR");
                    t.attr("src") || t.attr("src", t.data("src"))
                })
            },
            getAbsoluteLink: function (e) {
                return e
            }
        }),
        f = {
            render: function (e, t) {
                var i = $(e).get(0);
                i && (t = t || {}, t.host = t.host || n.getDropHost(), ReactDOM.render(React.createElement(m, {
                    options: t || {}
                }), i))
            }
        };
    e.exports = o(f)
}, function (e, t, i) {
    var a = i(14),
        n = i(56),
        o = i(25),
        s = i(33),
        c = i(77);
    o($);
    var r = React.createClass({
            displayName: "Feedback",
            getInitialState: function () {
                return {
                    isDisplayOption: !1,
                    reasonList: [],
                    typeVal: "请选择",
                    typeId: 0,
                    mobile: "",
                    errorMsg: "",
                    errorList: {}
                }
            },
            componentDidMount: function () {
                this.handleRefreshCaptcha(), this.getFeedbackTypes(), $.fn.yxUploadImage && $(this.refs.uploadImage).yxUploadImage({
                    maxNumberOfFiles: 4
                })
            },
            handleRefreshCaptcha: function () {
                $(this.refs.captcha).attr("src", this.getNewCaptchaUrl())
            },
            handleTextareaChange: function () {
                var e = $(this.refs.content),
                    t = e.val();
                t.length > 500 && (t = t.substring(0, 500), e.val(t)), $(this.refs.totalCount).text(t.length)
            },
            handleSuccess: function () {
                this.props.dialog.closeDialog2(), setTimeout(function () {
                    s.notify("谢谢你的建议")
                }, 100)
            },
            handleSubmit: function (e) {
                e.preventDefault();
                var t = {},
                    i = $.trim($(this.refs.mobile).val()),
                    a = !1,
                    n = $.fn.yxUploadImage && $(this.refs.uploadImage).yxUploadImage("getImageList") || [];
                n = n.map(function (e) {
                    return {
                        picUrl: e
                    }
                }), i && i == this.state.mobile && (a = !0), this.clearError(), t = {
                    picUrlListJson: JSON.stringify({
                        picList: n
                    }),
                    type: this.state.typeId,
                    content: $.trim($(this.refs.content).val()),
                    mobile: i,
                    verifyCode: $.trim($(this.refs.verifyCode).val())
                }, this.validateForm(t, a) && c.submit(t).then(function () {
                    this.handleSuccess()
                }.bind(this), function (e, t) {
                    this.setState({
                        errorMsg: t
                    })
                }.bind(this))
            },
            handleShowOptions: function (e) {
                e.preventDefault(), this.setState({
                    isDisplayOption: !0
                })
            },
            handleSelectedReason: function (e, t, i) {
                i.preventDefault(), i.stopPropagation(), this.setState({
                    isDisplayOption: !1,
                    typeVal: t,
                    typeId: e
                })
            },
            render: function () {
                return React.createElement("form", {
                    className: "yx-cp-m-feedbackForm"
                }, React.createElement("div", {
                    className: "yx-cp-formGroup yx-cp-formGroup-type"
                }, React.createElement("label", {
                    className: "yx-cp-formLabel"
                }, "反馈类型 :"), React.createElement("div", {
                    className: "yx-cp-typeOpts " + (this.state.errorList.type ? "yx-cp-inputError" : "")
                }, React.createElement("div", {
                    onClick: this.handleShowOptions
                }, React.createElement("span", {
                    className: "yx-cp-typeVal"
                }, this.state.typeVal), React.createElement("i", {
                    className: "yx-cp-icon-yxnormal icon-yxnormal-select-arrow yx-cp-downIcon"
                })), React.createElement("div", {
                    className: "yx-cp-options " + (this.state.isDisplayOption ? "" : "yx-f-hide")
                }, React.createElement("ul", null, this.state.reasonList.map(function (e, t) {
                    return React.createElement("li", {
                        key: t,
                        onClick: this.handleSelectedReason.bind(null, e.type, e.desc),
                        className: "yx-cp-optionItem"
                    }, e.desc)
                }.bind(this)))))), React.createElement("div", {
                    className: "yx-cp-formGroup yx-cp-formGroup-feedbackCnt"
                }, React.createElement("label", {
                    className: "yx-cp-formLabel"
                }, "反馈内容 :"), React.createElement("div", {
                    className: "yx-cp-inputControl " + (this.state.errorList.content ? "yx-cp-inputError" : "")
                }, React.createElement("textarea", {
                    ref: "content",
                    className: "yx-cp-inputArea",
                    name: "content",
                    onChange: this.handleTextareaChange,
                    placeholder: "对我们网站、商品、服务，您还有什么建议吗？您还希望在严选上买到什么？请告诉我们..."
                }), React.createElement("div", {
                    className: "yx-cp-tip"
                }, React.createElement("span", {
                    ref: "totalCount"
                }, "0"), "/500"))), React.createElement("div", {
                    className: "yx-cp-formGroup yx-cp-formGroup-pics"
                }, React.createElement("label", {
                    className: "yx-cp-formLabel"
                }, "相关图片 :"), React.createElement("div", {
                    ref: "uploadImage",
                    className: "yx-cp-uploadImage"
                })), React.createElement("div", {
                    className: "yx-cp-formGroup yx-cp-formGroup-phone"
                }, React.createElement("label", {
                    className: "yx-cp-formLabel"
                }, "手 机 号 :"), React.createElement("div", {
                    className: "yx-f-left"
                }, React.createElement("input", {
                    className: "yx-cp-inputControl " + (this.state.errorList.mobile ? "yx-cp-inputError" : ""),
                    autoComplete: "off",
                    name: "mobile",
                    ref: "mobile",
                    defalutValue: this.state.mobile,
                    placeholder: "方便我们与您联系",
                    type: "text"
                }))), React.createElement("div", {
                    className: "yx-cp-formGroup yx-cp-formGroup-captcha"
                }, React.createElement("label", {
                    className: "yx-cp-formLabel"
                }, "验 证 码 :"), React.createElement("div", {
                    className: "yx-cp-inputGroup yx-f-left"
                }, React.createElement("input", {
                    ref: "verifyCode",
                    className: "yx-cp-inputControl " + (this.state.errorList.verifyCode ? "yx-cp-inputError" : ""),
                    autoComplete: "off",
                    name: "verifyCode",
                    type: "text"
                }), React.createElement("img", {
                    onClick: this.handleRefreshCaptcha,
                    ref: "captcha",
                    className: "yx-cp-captcha"
                }), React.createElement("a", {
                    onClick: this.handleRefreshCaptcha,
                    className: "yx-cp-unclear",
                    href: "javascript:;"
                }, "看不清"))), React.createElement("div", {
                    className: "yx-cp-submitGroup"
                }, React.createElement("a", {
                    onClick: this.handleSubmit,
                    className: "yx-w-button yx-w-button-primary yx-w-button-l"
                }, "提交"), this.state.errorMsg ? React.createElement("div", {
                    className: "yx-cp-tipMsg yx-f-hide",
                    href: "javascript:;"
                }, React.createElement("i", {
                    className: "yx-cp-icon-yxnormal icon-yxnormal-disable"
                }), React.createElement("span", null, this.state.errorMsg)) : null))
            },
            getNewCaptchaUrl: function () {
                var e = "/xhr/feedback/verifyCode.do?csrf_token=" + a.getCookie("yx_csrf");
                return e + "&rand=" + a.uid()
            },
            getFeedbackTypes: function () {
                c.getFeedbackTypes().then(function (e) {
                    e.data && this.setState({
                        reasonList: e.data || []
                    })
                }.bind(this))
            },
            getMobile: function () {
                c.getUserMobile().then(function (e) {
                    "" != e.data && this.setState({
                        mobile: e.data
                    })
                })
            },
            clearError: function () {
                this.state.errorList.type = !1, this.state.errorList.content = !1, this.state.errorList.mobile = !1, this.state.errorList.verifyCode = !1, this.setState({
                    errorMsg: "",
                    errorList: this.state.errorList
                })
            },
            validateForm: function (e, t) {
                return 0 == e.type ? (this.state.errorList.type = !0, this.setState({
                    errorList: this.state.errorList,
                    errorMsg: "请选择反馈类型"
                }), !1) : e.content ? !e.mobile || n.isCellPhone(e.mobile) || t ? e.verifyCode ? !0 : (this.state.errorList.verifyCode = !0, this.setState({
                    errorList: this.state.errorList,
                    errorMsg: "验证码不能为空"
                }), $(this.refs.verifyCode).focus(), !1) : ($(this.refs.mobile).val(e.mobile.replace(/\*/g, "")).focus(), this.state.errorList.mobile = !0, this.setState({
                    errorList: this.state.errorList,
                    errorMsg: "手机号码格式错误"
                }), !1) : (this.state.errorList.content = !0, this.setState({
                    errorList: this.state.errorList,
                    errorMsg: "请填写反馈内容"
                }), $(this.refs.content).focus(), !1)
            }
        }),
        l = function () {
            var e = ["<div>", '<div class="yx-cp-m-feedbackModal">', '<h3 class="yx-cp-feedbackTitle">关于严选，我们还有很多希望与您交流</h3>', '<div id="j-yx-cp-feedbackFormWrap"></div>', "</div>", "</div>"].join(""),
                t = $(e).showDialog2({
                    clsName: "yx-cp-m-feedbackPop"
                });
            ReactDOM.render(React.createElement(r, {
                dialog: t
            }), document.getElementById("j-yx-cp-feedbackFormWrap"))
        },
        d = {
            handleShow: function () {
                if ($.fn.yxUploadImage) l();
                else {
                    var e = window.YXComponent,
                        t = document.createElement("script");
                    t.type = "text/javascript", "test" === window.yx_environment ? t.src = "//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/yx-cp-uploadImage.test.js" : t.src = "//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/yx-cp-uploadImage.min.js";
                    var i = document.getElementsByTagName("script"),
                        a = i[i.length - 1];
                    a.parentNode.appendChild(t), t.onload = t.onerror = function () {
                        window.YXComponent = e, l()
                    }
                }
            }
        };
    e.exports = d
}, function (e, t, i) {
    var a = i(12),
        n = {
            submit: function (e) {
                var t = $.Deferred();
                return a.ajax({
                    url: "/xhr/feedback/submit.json",
                    contentType: "application/json",
                    data: e,
                    success: function (e) {
                        t.resolve(e)
                    },
                    error: function (e, i, a) {
                        t.reject(e, i)
                    },
                    type: "POST"
                }), t
            },
            getUserMobile: function (e) {
                var t = $.Deferred();
                return a.ajax({
                    url: "/xhr/feedback/getUserMobile.json",
                    contentType: "application/json",
                    data: e,
                    success: function (e) {
                        t.resolve(e)
                    },
                    error: function (e, i, a) {
                        t.reject(e, i)
                    },
                    type: "POST"
                }), t
            },
            getFeedbackTypes: function () {
                var e = $.Deferred();
                return a.ajax({
                    url: "/xhr/feedback/typeList.json",
                    success: function (t) {
                        e.resolve(t)
                    },
                    error: function (t, i, a) {
                        e.reject(t, i)
                    },
                    type: "POST"
                }), e
            }
        };
    e.exports = n
}, function (e, t) {}, function (e, t, i) {
    i(80);
    var a = i(14),
        n = i(25),
        o = i(56),
        s = i(33),
        c = i(27),
        r = i(81),
        l = i(31),
        d = i(77),
        p = '<div>	                      <div class="yx-desp">输入手机号，该商品到货将第一时间短信提醒您</div>	                      <input class="yx-mobile j-yx-receiveMobile" type="text" placeholder="请输入接收通知的手机号">	                      <div class="yx-tips j-yx-tips"></div>	                      <a class="yx-btn yx-w-button yx-w-button-primary yx-w-button-xl j-yx-submit" href="javascript:void(0);">	                          <span>确定</span>	                      </a>	                  </div>',
        u = '<div>	                      <div class="yx-desp">输入手机号，该商品上架将第一时间短信提醒您</div>	                      <input class="yx-mobile j-yx-receiveMobile" type="text" placeholder="请输入接收通知的手机号">	                      <div class="yx-tips j-yx-tips"></div>	                      <a class="yx-btn yx-w-button yx-w-button-primary yx-w-button-xl j-yx-submit" href="javascript:void(0);">	                          <span>确定</span>	                      </a>	                  </div>',
        h = '<div>	                      <div class="yx-desp">输入手机号该商品开抢前将第一时间通知您</div>	                      <input class="yx-mobile j-yx-receiveMobile" type="text" placeholder="请输入接收通知的手机号">	                      <div class="yx-tips j-yx-tips"></div>	                      <a class="yx-btn yx-w-button yx-w-button-primary yx-w-button-xl j-yx-submit" href="javascript:void(0);">	                          <span>确定</span>	                      </a>	                  </div>';
    n($);
    var m = l.extend({
            __config: function (e) {
                a._$extend(e, {
                    producId: 0
                })
            },
            __init: function (e) {
                this.__supr(e), this.__initNode(), this.__initData()
            },
            __initData: function () {
                var e = d.getUserMobile();
                e.done(function (e) {
                    200 == e.code && e.data && this.__input.val(e.data)
                }.bind(this))
            },
            __initNode: function () {
                var e = this.__data,
                    t = e.type || 1;
                1 == t ? this.__seed_html = p : 2 == t ? this.__seed_html = u : 3 == t && (this.__seed_html = h), this.__body = $(this.__seed_html).showDialog2({
                    clsName: "yx-m-remindPop"
                });
                var i = this.__input = this.__body.find(".j-yx-receiveMobile").first(),
                    a = (this.__tips = this.__body.find(".j-yx-tips").first(), this.__submit = this.__body.find(".j-yx-submit").first());
                i.focus(), a.click($.proxy(this.__onSubmitCallBack, this))
            },
            __onSubmitCallBack: function () {
                var e, t = this.__data,
                    i = t.producId,
                    a = ~~t.type || 1,
                    n = this.__input.val(),
                    c = t.layawayId,
                    l = {},
                    d = this;
                if (!n) return this.__tips.text("手机号码不可以为空").show(), !1;
                if (n && !o.isCellPhone(n) && !/^\d*\*{4}\d{4}$/.test(n)) return this.__tips.text("手机号码格式错误").show(), !1;
                switch (this.__tips.hide(), l.mobile = n, t.layawayId && (a = 0), a) {
                    case 0:
                        l.layawayId = c, l.type = a, e = r.layawayAddRemind(l);
                        break;
                    case 1:
                    case 2:
                        l.itemId = i, l.skuId = t.skuId, l.type = a, e = r.addRemind(l);
                        break;
                    case 3:
                        l.itemId = i, e = r.skAddRemind(l)
                }
                e.done(function (e) {
                    s.notify("设置成功", "success"), setTimeout(function () {
                        d.__body.closeDialog2()
                    }, 2500)
                }), e.fail(function (e, t, i) {
                    s.notify(t, "error"), 3 == a && setTimeout(function () {
                        d.__body.closeDialog2()
                    }, 2500)
                })
            },
            __hide: function () {
                this.__body.closeDialog2()
            }
        }),
        f = null,
        y = {
            show: function (e) {
                f = new m({
                    data: e
                })
            },
            hide: function () {
                f && (f.__hide(), f = null)
            }
        };
    e.exports = c(y)
}, function (e, t) {}, function (e, t, i) {
    var a = i(12),
        n = {
            _ajax: function (e, t, i) {
                var n = t || {},
                    o = $.Deferred();
                return a.ajax({
                    url: e,
                    data: n,
                    success: function (e) {
                        o.resolve(e)
                    },
                    error: function (e, t, i) {
                        o.reject(e, t, i)
                    },
                    type: i || "POST"
                }), o
            },
            submit: function (e) {
                return this._ajax("/xhr/winter/sub.json", e)
            },
            addRemind: function (e) {
                return this._ajax("/xhr/remind/addRemind.json", e)
            },
            layawayAddRemind: function (e) {
                return this._ajax("/xhr/layaway/remind/addRemind.json", e)
            },
            skAddRemind: function (e) {
                return this._ajax("/xhr/seckill/subSaleNotification.json", e)
            }
        };
    e.exports = n
}, function (e, t, i) {
    var a = i(14),
        n = i(24),
        o = i(27),
        s = i(10),
        c = i(83),
        r = i(93);
    i(105);
    var l = React.createClass({
            displayName: "Top",
            getDefaultProps: function () {
                return {
                    options: {
                        inActivity: !1
                    }
                }
            },
            getInitialState: function () {
                var e = window.JSON && window.JSON.parse(window.localStorage && window.localStorage["yx-cp-globalData"] || null),
                    t = $.extend({}, {
                        isDisplayNickname: !1,
                        isDisplayCateList: !1
                    }, e);
                return {
                    global: t
                }
            },
            componentDidMount: function () {
                this.getTopData()
            },
            handleLogin: function () {
                n.show()
            },
            handleRegister: function () {
                n.show(null, null, "register")
            },
            handleLogout: function () {
                this.props.options && this.props.options.inActivity ? $.post("/u/logout", function () {
                    location.reload()
                }) : window.location.href = "/u/logout"
            },
            handleEventEmitter: function () {},
            render: function () {
                return void 0 == this.props.options.isShowCategory && (this.props.options.isShowCategory = !0), void 0 == this.props.options.inActivity && (this.props.options.inActivity = !1), React.createElement("div", {
                    className: "yx-cp-base yx-cp-m-top",
                    id: "j-yx-cp-m-top"
                }, React.createElement(c, {
                    global: this.state.global,
                    options: this.props.options,
                    onLogin: this.handleLogin,
                    onRegister: this.handleRegister,
                    onLogout: this.handleLogout
                }), React.createElement(r, {
                    global: this.state.global,
                    options: this.props.options,
                    onLogin: this.handleLogin,
                    onRegister: this.handleRegister,
                    onLogout: this.handleLogout,
                    onEventEmitter: this.handleEventEmitter
                }))
            },
            getTopData: function () {
                var e = this;
                s.queryTop().done(function (t) {
                    t.data.isDisplayNickname = !0, t.data.isDisplayCateList = !0, e.setState({
                        global: t.data || {}
                    }), window.localStorage && (window.localStorage["yx-cp-globalData"] = JSON && JSON.stringify({
                        cateList: t.data.cateList,
                        zxjCategory: t.data.zxjCategory,
                        topicList: t.data.topicList,
                        topLogo: t.data.topLogo,
                        isDisplayCateList: t.data.isDisplayCateList
                    }))
                })
            }
        }),
        d = {
            render: function (e, t) {
                var i = $(e).get(0);
                return i ? (t = t || {}, t.host = t.host || a.getDropHost(), ReactDOM.render(React.createElement(l, {
                    options: t
                }), i)) : null
            }
        };
    e.exports = o(d)
}, function (e, t, i) {
    var a = i(14),
        n = i(84),
        o = i(86),
        s = i(88),
        c = i(89),
        r = i(91),
        l = !0;
    i(92);
    var d = React.createClass({
        displayName: "SiteNav",
        getInitialState: function () {
            return {
                dropdown: {}
            }
        },
        componentDidMount: function () {
            this.getDownloadLink(), this.bindNavHoverEvent()
        },
        componentDidUpdate: function () {
            this.bindNavHoverEvent(), this.getUnReadMsg()
        },
        render: function () {
            return React.createElement("div", {
                className: "yx-cp-m-siteNav",
                id: "j-yx-cp-m-siteNav"
            }, React.createElement("div", {
                className: "yx-cp-row"
            }, React.createElement("div", {
                className: "yx-cp-siteNav-l"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItem",
                style: {
                    marginLeft: 0
                }
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd"
            }, React.createElement("a", {
                href: this.props.options.host + "/story",
                target: "_blank"
            }, "好的生活，没那么贵"))), this.props.global.noticeList && this.props.global.noticeList.length > 0 ? React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd"
            }, React.createElement(n, {
                noticeList: this.props.global.noticeList
            }))) : null), React.createElement("div", {
                className: "yx-cp-siteNav-r"
            }, this.props.global.isDisplayNickname ? this.props.global.nickname ? React.createElement("div", {
                className: "yx-cp-siteNavItem",
                "data-dropdown": "userCenterDropdown"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd"
            }, this.props.global.membershipOn && this.props.global.memberLevel > 0 ? React.createElement("a", {
                className: "yx-cp-icon-yxmember icon-yxmember-top-vip" + this.props.global.memberLevel,
                href: this.props.options.host + "/membership/index",
                title: "严选会员"
            }) : null, React.createElement("a", {
                href: this.props.options.host + "/user/index",
                target: "_blank"
            }, React.createElement("span", {
                className: "yx-cp-userName"
            }, this.props.global.nickname), React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrow",
                style: {
                    marginLeft: "10px"
                }
            }))), React.createElement("div", {
                className: "yx-cp-siteNavItemBd"
            }, React.createElement("div", {
                className: this.state.dropdown.userCenterDropdown ? "" : "yx-f-hide"
            }, React.createElement(o, {
                global: this.props.global,
                options: this.props.options,
                onLogout: this.props.onLogout
            })))) : "login" == window.yxCurrentPage ? null : React.createElement("div", {
                style: {
                    "float": "left"
                }
            }, React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd"
            }, React.createElement("div", {
                className: "j-yx-cp-topLogin",
                title: "网易严选登录",
                onClick: this.props.onLogin
            }, "登录"))), React.createElement("div", {
                className: "yx-cp-siteNavItem",
                style: {
                    marginLeft: "20px"
                }
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd"
            }, React.createElement("div", {
                className: "yx-cp-register j-yx-cp-register",
                onClick: this.props.onRegister,
                href: "javascript:;"
            }, "注册")))) : null, this.props.global.nickname ? React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                href: this.props.options.host + "/msgCenter",
                target: "_blank"
            }, "消息", React.createElement("span", {
                className: "yx-cp-unReadedMessageRemind j-unReadedMessageRemind"
            })))) : null, React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                href: this.props.options.host + "/order/myList",
                target: "_blank"
            }, "我的订单"))), React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                href: this.props.options.host + "/membership/index",
                target: "_blank"
            }, "会员"))), React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                href: this.props.options.host + "/expert/index",
                target: "_blank"
            }, "甄选家"))), React.createElement("div", {
                className: "yx-cp-siteNavItem"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                href: "http://b.you.163.com?from=yx",
                target: "_blank"
            }, "企业采购"))), React.createElement("div", {
                className: "yx-cp-siteNavItem",
                "data-dropdown": "customerServiceDropdown"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, "客户服务", React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrow",
                style: {
                    marginLeft: "10px"
                }
            })), React.createElement("div", {
                className: "yx-cp-siteNavItemBd"
            }, this.state.dropdown.customerServiceDropdown ? React.createElement(s, {
                global: this.props.global,
                options: this.props.options
            }) : null)), React.createElement("div", {
                className: "yx-cp-siteNavItem",
                "data-dropdown": "appDownload"
            }, React.createElement("div", {
                className: "yx-cp-siteNavItemHd pipe"
            }, React.createElement("a", {
                target: "_blank",
                href: this.props.options.host + "/downloadapp",
                ref: "downloadlink"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-app",
                style: {
                    marginRight: "6px"
                }
            }), "APP")), React.createElement("div", {
                className: "yx-cp-siteNavItemBd"
            }, this.state.dropdown.appDownload ? React.createElement(c, {
                options: this.props.options
            }) : null)))))
        },
        bindNavHoverEvent: function () {
            var e = null,
                t = this;
            $(".yx-cp-siteNavItem").off("mouseenter mouseleave"), $(".yx-cp-siteNavItem").off("click", ".yx-cp-dropdownMenuItem"), $(".yx-cp-siteNavItem").hover(function () {
                var i = $(this).data("dropdown");
                i && (e = setTimeout(function () {
                    t.state.dropdown[i] = !0, t.setState({
                        dropdown: t.state.dropdown
                    })
                }, 200))
            }, function () {
                clearTimeout(e);
                var i = $(this).data("dropdown");
                i && (t.state.dropdown[i] = !1, t.setState({
                    dropdown: t.state.dropdown
                }))
            }), $(".yx-cp-siteNavItem").on("click", ".yx-cp-dropdownMenuItem", function (e) {
                var i = $(e.currentTarget).parents(".yx-cp-siteNavItem").data("dropdown");
                i && (t.state.dropdown[i] = !1, t.setState({
                    dropdown: t.state.dropdown
                }))
            })
        },
        getDownloadLink: function () {
            $(this.refs.downloadlink).attr("href", a._$getDownloadLink())
        },
        getUnReadMsg: function () {
            return l ? void(this.props.global && this.props.global.nickname && r.getStatus().done(function (e) {
                e.data && $(".j-unReadedMessageRemind").show(), l = !1
            })) : null
        }
    });
    e.exports = d
}, function (e, t, i) {
    var a = i(13),
        n = i(14),
        o = i(43);
    i(85), e.exports = React.createClass({
        displayName: "exports",
        getDefaultProps: function () {
            return {
                noticeList: []
            }
        },
        componentDidMount: function () {
            var e = $(this.refs.noticeList),
                t = e.height(),
                i = $(this.refs.noticeListUL),
                a = this.props.noticeList.length;
            if (a > 1) {
                var n = function () {
                    setTimeout(function () {
                        i.stop(!0, !0).animate({
                            top: parseInt(i.css("top")) - t
                        }, 500, function () {
                            var e = parseInt(i.css("top"));
                            e + i.height() <= t && i.css({
                                top: 0
                            }), n()
                        })
                    }, 5e3)
                };
                n()
            }
        },
        shouldComponentUpdate: function () {
            return !1
        },
        render: function () {
            return this.props.noticeList.length > 1 && this.props.noticeList.push(this.props.noticeList[0]), React.createElement("div", {
                className: "yx-cp-m-noticeList",
                ref: "noticeList"
            }, React.createElement("ul", {
                className: "yx-cp-noticeListUL",
                ref: "noticeListUL"
            }, this.props.noticeList.map(function (e, t) {
                var i = "",
                    s = 20,
                    c = "...",
                    r = e.content,
                    l = "";
                return e.content.length > s && (r = e.content.substring(0, s) + c), o({
                    uuid: n.getCookie("yx_aui"),
                    page: window.location.pathname,
                    content: r,
                    key: "notice_board"
                }), 1 == e.type && (i = React.createElement("span", {
                    className: "yx-cp-noticeTxt"
                }, r)), 2 == e.type && (l = a.appendURL(e.targetUrl, {
                    _stat_content: r,
                    _stat_refer: window.location.pathname
                }), i = React.createElement("a", {
                    className: "yx-cp-noticeTxt yx-f-text-underline",
                    href: l,
                    target: "_blank"
                }, r)), React.createElement("li", {
                    key: t,
                    className: "yx-cp-noticeItem"
                }, i)
            })))
        }
    })
}, function (e, t) {}, function (e, t, i) {
    var a = i(87);
    e.exports = React.createClass({
        displayName: "exports",
        getInitialState: function () {
            return {
                couponCount: 0
            }
        },
        componentDidMount: function () {
            this.initCouponCount()
        },
        render: function () {
            return React.createElement("div", {
                className: "yx-cp-m-dropdownMenu",
                style: this.props.style ? this.props.style : {
                    right: "-10px"
                }
            }, React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/coupon",
                target: "_blank"
            }, "优惠券", this.state.couponCount ? "(" + this.state.couponCount + ")" : null), React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/user/giftCard",
                target: "_blank"
            }, "礼品卡"), React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/item/userCollection",
                target: "_blank"
            }, "我的收藏"), React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/points/index",
                target: "_blank"
            }, "我的积分"), this.props.global.memberLevel > 0 && this.props.global.memberLevel <= 4 ? React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/lead/inviteAndReturn",
                target: "_blank"
            }, "邀请返利") : null, React.createElement("a", {
                className: "yx-cp-dropdownMenuItem",
                href: this.props.options.host + "/user/myExpertInfo?_stat_referer=myList",
                target: "_blank"
            }, "我的甄选家"), React.createElement("span", {
                className: "yx-cp-dropdownMenuItem j-yx-cp-logout",
                onClick: this.props.onLogout
            }, "退出登录"), React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
            }))
        },
        initCouponCount: function () {
            a.count().done(function (e) {
                void 0 != e.data && this.setState({
                    couponCount: e.data.count
                })
            }.bind(this))
        }
    })
}, function (e, t, i) {
    var a = i(11);
    e.exports = a("/xhr/coupon", [{
        name: "list",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "delete",
        alias: "del",
        processParams: function (e) {
            return {
                id: e
            }
        }
    }, {
        name: "activate",
        processParams: function (e) {
            return {
                activationCode: e
            }
        },
        successHandle: function (e, t) {
            var i = {
                1: "兑换成功",
                2: "此优惠码已被兑换",
                3: "优惠码错误",
                4: "兑换次数超限",
                5: "此兑换码为新用户专享",
                6: "需要绑定手机",
                7: "该帐号下手机号曾与" + e.data.countInfo + "绑定领取过",
                8: "该帐号下手机号曾与" + e.data.countInfo + "绑定消费过",
                99: "优惠码已过期"
            };
            e.data = {
                status: e.data.status,
                tipMsg: i[e.data.status] || "优惠码错误"
            }, t.resolve(e)
        }
    }, {
        name: "countUnused",
        alias: "count"
    }, {
        name: "queryByItemAndUser",
        path: "/xhr/item",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "getItemCoupon",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "getCurrentPcUrl",
        ajaxConfig: {
            type: "GET"
        }
    }])
}, function (e, t, i) {
    var a = i(21);
    e.exports = function (e) {
        return React.createElement("div", {
            className: "yx-cp-m-dropdownMenu"
        }, React.createElement("a", {
            className: "yx-cp-dropdownMenuItem",
            href: "javascript:;",
            onMouseDown: a
        }, "在线客服"), React.createElement("a", {
            className: "yx-cp-dropdownMenuItem",
            href: e.options.host + "/help/new",
            target: "_blank"
        }, "帮助中心"), React.createElement("a", {
            href: e.options.host + "/help/new#39",
            className: "yx-cp-dropdownMenuItem",
            target: "_blank"
        }, "商务合作"), React.createElement("a", {
            href: "https://open.you.163.com/",
            className: "yx-cp-dropdownMenuItem",
            target: "_blank"
        }, "开放平台"), React.createElement("i", {
            className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
        }))
    }
}, function (e, t, i) {
    var a = i(14),
        n = i(13),
        o = i(47);
    i(90), e.exports = React.createClass({
        displayName: "exports",
        componentWillMount: function () {
            this.props.options.qrCodeImgUrl || window.AraleQRCode || n.getScript("//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/qrcode.js", "utf-8")
        },
        componentDidMount: function () {
            this.lazyLoadQrcode()
        },
        render: function () {
            return React.createElement("div", {
                className: "yx-cp-m-dropdownMenu yx-cp-m-dropdownMenu-appDownload"
            }, React.createElement("div", {
                className: "yx-cp-QRcode",
                ref: "qrcode"
            }), React.createElement("span", {
                className: "yx-cp-QRtxt"
            }, "下载领1000元新人礼包"), o() ? React.createElement("span", {
                style: {
                    marginTop: "6px"
                },
                className: "yx-cp-QRtxt"
            }, "还有1000万等你抢") : null, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
            }))
        },
        lazyLoadQrcode: function () {
            var e, t, i, o = this;
            i = this.props.options && this.props.options.qrCodeImgUrl, t = function () {
                e = a._$getDownloadQRnode(117, "ochannel=aos_pd_8"), $(o.refs.qrcode).append(e)
            }, i ? (e = $('<img class="yx-cp-arcodeImg" src= ' + i + " />"), $(this.refs.qrcode).append(e)) : window.AraleQRCode ? t() : n.getScript("//yanxuan.nosdn.127.net/hxm/yanxuan-component/p/20170601/js/dist/qrcode.js", "utf-8", function () {
                t()
            })
        }
    })
}, function (e, t) {}, function (e, t, i) {
    var a = i(11),
        n = window.seckillUniqueFlag ? "/xhr/seckill" : "/xhr";
    e.exports = a(n + "/msgCenter", ["getStatus", "getGroupList", "getList"])
}, function (e, t) {}, function (e, t, i) {
    var a = i(14),
        n = i(94),
        o = i(98),
        s = i(100),
        c = i(103),
        r = i(86),
        l = {
            right: "-34px",
            top: "34px"
        };
    i(104);
    var d = React.createClass({
        displayName: "FuncTab",
        getInitialState: function () {
            return {
                dropdown: {}
            }
        },
        componentDidMount: function () {
            this.props.options.isShowCategory && this.initFuncTab()
        },
        componentDidUpdate: function () {
            this.bindUserHoverEvent()
        },
        render: function () {
            var e, t;
            return window.currentPageIsIndex && (e = a._$getYXStat("click_index_logo", "index", null, "{href}")), this.props.options.isShowCategory ? (t = this.props.global.topLogo && this.props.global.topLogo.switchOn && this.props.global.topLogo.activityUrl ? this.props.global.topLogo.activityUrl : this.props.options.host + "/", e && (e = e.replace("{href}", t)), React.createElement("div", {
                className: "yx-cp-m-funcTab j-yx-cp-m-funcTab " + (this.props.global.christmasLogoSwitch ? "yx-cp-m-funcTab-christmas" : ""),
                ref: "funcTab",
                style: {
                    height: this.props.options.isShowCategory ? "204px" : "0"
                }
            }, this.props.global.christmasLogoSwitch ? React.createElement("a", {
                className: "yx-cp-tabLogo-christmas yx-cp-funcTabFixed-hide",
                href: "http://you.163.com/act/pub/djr7Wuo86K.html?from=web_gg_activity_activity_1",
                title: "网易严选",
                target: "_blank"
            }) : null, React.createElement("div", {
                className: "yx-cp-row",
                style: {
                    height: "100%"
                }
            }, this.props.global.topLogo && this.props.global.topLogo.switchOn ? React.createElement("div", {
                className: "yx-cp-tabLogo-activityWrap yx-cp-funcTabFixed-hide"
            }, React.createElement("img", {
                className: "yx-cp-tabLogo-activity yx-cp-funcTabFixed-hide",
                src: this.props.global.topLogo.activityPicUrl
            }), React.createElement("a", {
                "data-yxstat": e,
                className: "yx-cp-tabLogo-activityLink yx-cp-funcTabFixed-hide",
                href: t,
                title: "网易严选",
                target: this.props.global.topLogo.activityUrl ? "_blank" : "_self"
            })) : React.createElement("a", {
                "data-yxstat": e,
                className: "yx-cp-tabLogo yx-cp-funcTabFixed-hide",
                href: t,
                title: "网易严选",
                target: "_blank"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-logo"
            })), React.createElement("a", {
                className: "yx-cp-tabLogo-fixed yx-cp-funcTab-hide",
                href: this.props.options.host + "/",
                title: "网易严选",
                target: "_blank"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-miniLogo"
            })), this.props.options.isShowCategory ? React.createElement(s, {
                global: this.props.global,
                options: this.props.options,
                onEventEmitter: this.props.onEventEmitter
            }) : null, this.props.global.isDisplayNickname ? this.props.global.nickname ? React.createElement("div", {
                className: "yx-cp-fixed-user yx-cp-funcTab-hide"
            }, React.createElement("a", {
                href: this.props.options.host + "/user/index",
                style: {
                    display: "block"
                },
                target: "_blank"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-userempty"
            })), React.createElement("div", {
                className: this.state.dropdown.userCenterDropdown ? "" : "yx-f-hide"
            }, React.createElement(r, {
                style: l,
                global: this.props.global,
                options: this.props.options,
                onLogout: this.props.onLogout
            }))) : React.createElement("div", {
                className: "yx-cp-fixed-user yx-cp-funcTab-hide"
            }, React.createElement("a", {
                href: this.props.options.host + "/user/index",
                style: {
                    display: "block"
                },
                target: "_blank"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-userempty"
            })), "login" == window.yxCurrentPage ? null : React.createElement("div", {
                className: this.state.dropdown.login ? "" : "yx-f-hide"
            }, React.createElement(c, {
                style: l,
                global: this.props.global,
                options: this.props.options,
                onLogin: this.props.onLogin,
                onRegister: this.props.onRegister
            }))) : null, this.props.options.isShowCategory && this.props.global.isDisplayCateList ? React.createElement(o, {
                global: this.props.global,
                options: this.props.options,
                hideFixedSearchInput: this.hideFixedSearchInput,
                showFixedSearchInput: this.showFixedSearchInput
            }) : null, this.props.options.isShowCategory ? React.createElement(n, {
                ref: "search",
                global: this.props.global,
                options: this.props.options
            }) : null))) : (t = this.props.options.host + "/", e && (e = e.replace("{href}", t)), React.createElement("div", null, React.createElement("div", {
                className: "yx-cp-m-funcTab",
                style: {
                    height: 0
                }
            }, React.createElement("div", {
                className: "yx-cp-row"
            }, React.createElement("a", {
                "data-yxstat": e,
                className: "yx-cp-tabLogo yx-cp-funcTabFixed-hide",
                href: t,
                title: "网易严选",
                target: "_blank"
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-logo"
            }))))))
        },
        bindUserHoverEvent: function () {
            var e = null,
                t = this;
            $(".yx-cp-fixed-user").off("mouseenter mouseleave"), $(".yx-cp-fixed-user").off("click", ".yx-cp-dropdownMenuItem"), $(".yx-cp-fixed-user").hover(function () {
                e = setTimeout(function () {
                    t.state.dropdown.userCenterDropdown = !0, t.state.dropdown.login = !0, t.setState({
                        dropdown: t.state.dropdown
                    })
                }, 200)
            }, function () {
                clearTimeout(e), t.state.dropdown.userCenterDropdown = !1, t.state.dropdown.login = !1, t.setState({
                    dropdown: t.state.dropdown
                })
            }), $(".yx-cp-fixed-user").on("click", ".yx-cp-dropdownMenuItem", function () {
                t.state.dropdown.userCenterDropdown = !1, t.state.dropdown.login = !1, t.setState({
                    dropdown: t.state.dropdown
                })
            })
        },
        initFuncTab: function () {
            var e = $(this.refs.funcTab),
                t = function () {
                    $(document).scrollTop() >= 192 ? e.addClass("yx-cp-m-funcTab-fixed") : e.removeClass("yx-cp-m-funcTab-fixed")
                };
            $(window).on("scroll.miniNav", t), t()
        },
        hideFixedSearchInput: function () {
            return this.refs.search.handleHiddenFixedSearchInput()
        },
        showFixedSearchInput: function () {
            this.refs.search.handleShowFixedSearchInput()
        }
    });
    e.exports = d
}, function (e, t, i) {
    var a = i(13),
        n = i(14),
        o = i(95),
        s = i(96);
    i(97);
    var c = React.createClass({
        displayName: "Search",
        getDefaultProps: function () {
            return {}
        },
        getInitialState: function () {
            return {
                isDisplaySuggest: !1,
                isDisplayDefault: !1,
                highLightIndex: -1
            }
        },
        componentWillMount: function () {
            "string" == typeof keyword && (this.keyword = keyword)
        },
        componentDidMount: function () {
            this.$input = $(this.refs.input), this.keyword || this.setState({
                isDisplayDefault: !0
            }), this.getHotKeywordList(), this.getPaintedEggshell()
        },
        handleKeydown: function (e) {
            var t = 0;
            "history&hot" == this.state.renderType ? t = this.historyKeywordList.length + this.hotKeywordList.length : "autoComplete" == this.state.renderType && (t = this.autoCompleteList.length), 13 == e.keyCode ? this.state.isDisplaySuggest && -1 != this.state.highLightIndex ? this.selectHighLightItem(this.state.highLightIndex) : this.handleSearch() : 38 == e.keyCode ? this.state.highLightIndex > 0 && (this.state.highLightIndex--, this.setState({
                highLightIndex: this.state.highLightIndex
            })) : 40 == e.keyCode && this.state.highLightIndex < t - 1 && (this.state.highLightIndex++, this.setState({
                highLightIndex: this.state.highLightIndex
            }))
        },
        handleJudgeSuggestRender: function (e) {
            if (38 != e.keyCode && 40 != e.keyCode && 13 != e.keyCode) {
                var t = this.$input.val();
                "" == t ? (this.setState({
                    isDisplayDefault: !0
                }), this.suggestRender("history&hot")) : (this.setState({
                    isDisplayDefault: !1
                }), this.autoComplete(t))
            }
        },
        handleBlur: function () {
            "" == this.$input.val() && this.setState({
                isDisplayDefault: !0
            }), this.setState({
                isDisplaySuggest: !1
            }), this.getHotKeywordList()
        },
        handleSearch: function (e, t) {
            if ("none" == this.fixedSearchInputStatus && $(".j-yx-cp-m-funcTab").hasClass("yx-cp-m-funcTab-fixed")) return this.handleShowFixedSearchInput(), void $(this.refs.input).focus();
            var i = null,
                a = null,
                o = "",
                s = null,
                c = $.trim(this.props.global.searchDefaultWordVO && this.props.global.searchDefaultWordVO.content),
                r = $.trim(this.props.global.searchDefaultWordVO && this.props.global.searchDefaultWordVO.type),
                l = $.trim(this.$input.val());
            e = "string" == typeof e ? $.trim(e) : "";
            var d = n.escapeHTML(e || l || c);
            if ("" != d) {
                if (e || (l ? t = "userhand" : c && (t = "0" == r ? "default_user" : "default_common")), this.showPaintedEggshell(d), s = this.getKeywordFromList(d, this.colorfulEggWords), s && s.schemeUrl) return void this.addStatParams(s.schemeUrl, t, d);
                if (i = this.getKeywordFromList(d, this.hotKeywordList), i && i.schemeUrl) return void this.addStatParams(i.schemeUrl, t, d);
                if (a = this.getDefaultword(d), a && "userhand" == t && (t = "userhandIncludeInDefault"), a && a.contentUrl) return void this.addStatParams(a.contentUrl, t, d);
                this.updateSuggestCookie("add", d), o = (new Date).getTime(), this.addStatParams(this.props.options.host + "/search?keyword=" + encodeURIComponent(d) + "&timestamp=" + o + "#page=1&sortType=0&descSorted=true&categoryId=0&matchType=0", t, d)
            }
        },
        handleMouseLeave: function () {
            setTimeout(function () {
                this.setState({
                    isDisplaySuggest: !1
                })
            }.bind(this), 100)
        },
        handleInputSuggestClick: function (e) {
            this.selectHighLightItem(e)
        },
        handleInputSuggestChange: function (e) {
            this.setState({
                highLightIndex: e
            })
        },
        handleDelete: function (e) {
            this.updateSuggestCookie("delete", e), this.suggestRender("history&hot")
        },
        handleDeleteAll: function () {
            this.updateSuggestCookie("deleteAll"), this.suggestRender("history&hot")
        },
        handleGetInputFocus: function () {
            var e = this.$input.is(":focus");
            0 == e && this.$input.trigger("focus")
        },
        handleShowFixedSearchInput: function () {
            this.fixedSearchInputStatus = "block", $(this.refs.hiddenFixedSearchInputButton).addClass("yx-cp-fixedSearchInputDisplay"), $(this.refs.searchInputWrap).addClass("yx-cp-fixedSearchInputDisplay")
        },
        handleHiddenFixedSearchInput: function () {
            var e = this.fixedSearchInputStatus;
            return "block" == this.fixedSearchInputStatus && (this.fixedSearchInputStatus = "none", $(this.refs.hiddenFixedSearchInputButton).removeClass("yx-cp-fixedSearchInputDisplay"), $(this.refs.searchInputWrap).removeClass("yx-cp-fixedSearchInputDisplay")), e
        },
        render: function () {
            return React.createElement("div", {
                onMouseLeave: this.handleMouseLeave,
                className: "yx-cp-m-search yx-cp-zIndex3"
            }, React.createElement("div", {
                className: "yx-cp-searchInputWrap",
                ref: "searchInputWrap"
            }, React.createElement("div", {
                className: "yx-cp-hiddenFixedSearchInputButton",
                ref: "hiddenFixedSearchInputButton",
                onClick: this.handleHiddenFixedSearchInput
            }, ">>"), React.createElement("input", {
                type: "text",
                className: "yx-cp-searchInput",
                defaultValue: this.keyword,
                onKeyDown: this.handleKeydown,
                onFocus: this.handleJudgeSuggestRender,
                onBlur: this.handleBlur,
                onChange: this.handleJudgeSuggestRender,
                autoComplete: "off",
                maxLength: 100,
                ref: "input",
                name: "searchInput"
            }), React.createElement("div", {
                onClick: this.handleGetInputFocus,
                className: "yx-cp-searchDefaultKeyword",
                style: {
                    display: this.state.isDisplayDefault ? "block" : "none"
                }
            }, this.props.global.searchDefaultWordVO && this.props.global.searchDefaultWordVO.content)), React.createElement("div", {
                className: "yx-cp-searchButton",
                onClick: this.handleSearch
            }, React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-search"
            })), React.createElement(s, {
                isDisplaySuggest: this.state.isDisplaySuggest,
                renderType: this.state.renderType,
                highLightIndex: this.state.highLightIndex,
                historyKeywordList: this.historyKeywordList,
                hotKeywordList: this.hotKeywordList,
                autoCompleteList: this.autoCompleteList,
                onClick: this.handleInputSuggestClick,
                onChange: this.handleInputSuggestChange,
                onHandleDelete: this.handleDelete,
                onHandleDeleteAll: this.handleDeleteAll
            }))
        },
        selectHighLightItem: function (e) {
            var t = "",
                i = "";
            "history&hot" == this.state.renderType ? (t = this.historyKeywordList[e], i = "history", t || (t = this.hotKeywordList[e - this.historyKeywordList.length].keyword, i = "hot")) : "autoComplete" == this.state.renderType && (t = this.autoCompleteList[e], i = "autoComplete"), this.handleSearch(t, i)
        },
        suggestRender: function (e) {
            this.getHistoryKeywordList();
            var t = !0;
            ("autoComplete" == e && 0 == this.autoCompleteList.length || "history&hot" == e && 0 == this.historyKeywordList.length && 0 == this.hotKeywordList.length) && (t = !1), this.setState({
                renderType: e,
                isDisplaySuggest: t,
                highLightIndex: -1
            })
        },
        showPaintedEggshell: function (e) {
            n.setCookie("yx_show_painted_egg_shell", !1);
            for (var t = 0; t < this.colorfulEggWords.length; t++)
                if (this.colorfulEggWords[t].keyword === e) {
                    n.setCookie("yx_show_painted_egg_shell", !0);
                    break
                }
        },
        autoComplete: function (e) {
            "" != e && void 0 != e && o.searchAutoComplete({
                keywordPrefix: e
            }).done(function (e) {
                this.autoCompleteList = e.data || [], this.suggestRender("autoComplete")
            }.bind(this))
        },
        getHotKeywordList: function () {
            o.getHotKeyword().done(function (e) {
                this.hotKeywordList = e.data
            }.bind(this))
        },
        getPaintedEggshell: function () {
            this.colorfulEggWords = [], o.getPaintedEggshellWords().done(function (e) {
                this.colorfulEggWords = e.data
            }.bind(this))
        },
        getHistoryKeywordList: function () {
            this.historyKeywordList = JSON.parse(unescape(n.getCookie("yx_search_history"))) || []
        },
        getKeywordFromList: function (e, t) {
            var i = null;
            return $.each(t, function (t, a) {
                return a.keyword == e ? (i = a, !1) : void 0
            }.bind(this)), i
        },
        getDefaultword: function (e) {
            var t = null;
            return $.each(this.props.global.defaultWordsVos || [], function (i, a) {
                return a.content == e ? (t = a, !1) : void 0
            }.bind(this)), t
        },
        addStatParams: function (e, t, i) {
            var n = {};
            if (e) {
                var o = "userhand" == t ? 1 : "default_user" == t ? 3 : "default_common" == t ? 4 : "history" == t ? 5 : "autoComplete" == t ? 7 : "hot" == t ? 8 : "userhandIncludeInDefault" == t ? 9 : "";
                window.YXStat && window.YXStat.q && window.YXStat.q.push(["add_event", {
                    event_name: "search_searchkw_keywords",
                    event_action: "search",
                    page_name: "/",
                    parameters: {
                        type: o,
                        key: i,
                        url: e.indexOf("/search?keyword=") > 0 ? "" : e
                    }
                }]), n = a.getUrlParams(e), void 0 === n.keyword && void 0 !== i && (e = a.appendURL(e, {
                    keyword: encodeURIComponent(i)
                })), e = a.appendURL(e, {
                    _stat_search: t
                }), e = a.appendURL(e, {
                    searchWordSource: o
                }), "index" === this.props.options.currentPage && (e = a.appendURL(e, {
                    _stat_referer: "index"
                })), top.location.href = e
            }
        },
        updateSuggestCookie: function (e, t) {
            var i = JSON.parse(unescape(n.getCookie("yx_search_history"))) || [];
            switch (e) {
                case "add":
                    if ("string" == typeof t && "" != $.trim(t)) {
                        for (var a = 0; a < i.length; a++) i[a] == t && i.splice(a, 1);
                        i.length > 4 && i.splice(4, 1), i.unshift(t)
                    }
                    break;
                case "delete":
                    "number" == typeof t && t >= 0 && 9 >= t && i.splice(t, 1);
                    break;
                case "deleteAll":
                    i = []
            }
            n.setCookie("yx_search_history", JSON.stringify(i), 365)
        },
        fixedSearchInputStatus: "none",
        historyKeywordList: [],
        hotKeywordList: [],
        autoCompleteList: []
    });
    e.exports = c
}, function (e, t, i) {
    var a = i(11),
        n = window.seckillUniqueFlag ? "/xhr/seckill" : "/xhr";
    e.exports = a("/xhr/search", [{
        name: "listByItemSearch",
        path: "/xhr/item",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "searchAutoComplete",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "search",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "queryHotKeyWord",
        alias: "getHotKeyword",
        ajaxConfig: {
            type: "GET"
        },
        path: n + "/search"
    }, {
        name: "rcmd",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "orderSearch",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "colorfulEgg",
        alias: "getPaintedEggshellWords",
        ajaxConfig: {
            type: "GET"
        },
        path: n + "/search"
    }, {
        name: "colorfulEggV2/check",
        alias: "check",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "colorfulEggV2/receive",
        alias: "receive",
        ajaxConfig: {
            type: "GET"
        }
    }])
}, function (e, t) {
    var i = React.createClass({
        displayName: "InputSuggest",
        componentDidMount: function () {
            this.handleShowSuggest(this.props)
        },
        componentWillReceiveProps: function (e) {
            this.handleShowSuggest(e)
        },
        handleShowSuggest: function (e) {
            1 == e.isDisplaySuggest && ($(this.refs.suggest).removeClass("yx-f-hide"), setTimeout(function () {
                $(this.refs.suggest).addClass("yx-cp-f-ani-suggest")
            }.bind(this), 30)), 0 == e.isDisplaySuggest && $(this.refs.suggest).removeClass("yx-cp-f-ani-suggest").addClass("yx-f-hide")
        },
        handleMouseOver: function (e) {
            this.props.onChange(e)
        },
        handleMouseDown: function (e) {
            this.props.onClick(e)
        },
        handleDelete: function (e, t) {
            t.stopPropagation(), t.preventDefault(), this.props.onHandleDelete(e)
        },
        handleDeleteAll: function (e) {
            e.stopPropagation(), e.preventDefault(), this.props.onHandleDeleteAll()
        },
        render: function () {
            var e = "";
            return "autoComplete" == this.props.renderType ? e = React.createElement("ul", {
                className: "yx-cp-m-suggestList"
            }, this.props.autoCompleteList.length ? this.props.autoCompleteList.map(function (e, t) {
                return React.createElement("li", {
                    className: "yx-cp-hl-item " + (this.props.highLightIndex == t ? "yx-cp-hl-item-selected" : ""),
                    onMouseDown: this.handleMouseDown.bind(null, t),
                    onMouseOver: this.handleMouseOver.bind(null, t),
                    key: "autoComplete" + t
                }, React.createElement("span", {
                    className: "yx-cp-hl-item-txt"
                }, e))
            }.bind(this)) : null) : "history&hot" == this.props.renderType && (e = React.createElement("ul", {
                className: "yx-cp-m-suggestList"
            }, this.props.historyKeywordList.length ? React.createElement("li", {
                className: "yx-cp-top-item"
            }, React.createElement("span", null, "最近搜索"), React.createElement("span", {
                className: "yx-cp-icon-yxnormal icon-yxnormal-deleteAll",
                onMouseDown: this.handleDeleteAll
            })) : null, this.props.historyKeywordList.length ? this.props.historyKeywordList.map(function (e, t) {
                return React.createElement("li", {
                    className: "yx-cp-hl-item " + (this.props.highLightIndex == t ? "yx-cp-hl-item-selected" : ""),
                    onMouseDown: this.handleMouseDown.bind(null, t),
                    onMouseOver: this.handleMouseOver.bind(null, t),
                    key: "history" + t
                }, React.createElement("span", {
                    className: "yx-cp-hl-item-txt"
                }, e), React.createElement("span", {
                    className: "yx-cp-icon-yxclose icon-yxclose-close8",
                    onMouseDown: this.handleDelete.bind(null, t)
                }))
            }.bind(this)) : null, this.props.hotKeywordList.length ? React.createElement("li", {
                className: "yx-cp-top-item",
                style: {
                    marginTop: "5px"
                }
            }, React.createElement("span", null, "大家都在搜")) : null, this.props.hotKeywordList.length ? this.props.hotKeywordList.map(function (e, t) {
                var i = t + this.props.historyKeywordList.length;
                return React.createElement("li", {
                    className: "yx-cp-hl-item yx-cp-hl-itemHot " + (1 == e.highlight ? "highlight " : "") + (this.props.highLightIndex == i ? "yx-cp-hl-item-selected " : ""),
                    onMouseDown: this.handleMouseDown.bind(null, i),
                    onMouseOver: this.handleMouseOver.bind(null, i),
                    key: "hot" + t
                }, React.createElement("span", {
                    className: "yx-cp-hl-item-txt"
                }, e.keyword))
            }.bind(this)) : null)), React.createElement("div", {
                className: "yx-cp-m-suggest",
                ref: "suggest"
            }, e)
        }
    });
    e.exports = i
}, function (e, t) {}, function (e, t, i) {
    i(99);
    var a = React.createClass({
        displayName: "TabNav",
        getInitialState: function () {
            return {
                stateSubCateList: []
            }
        },
        componentDidMount: function () {
            var e = this;
            e.resizeCatecard(), $(window).on("resize.yxcpcatecard", function () {
                e.resizeCatecard()
            })
        },
        componentDidUpdate: function () {
            this.resizeCatecard()
        },
        handleMouseEnter: function (e, t, i) {
            if (!$(i.relatedTarget).hasClass("yx-cp-hiddenFixedSearchInputButton") && (0 == $(i.relatedTarget).parents(".yx-cp-m-funcTab-fixed").length && t > 6 && (this.fixedSearchInputMiddleStatus = this.props.hideFixedSearchInput()), e.subCateList && 0 !== e.subCateList.length)) {
                if (void 0 == this.state.stateSubCateList[t]) {
                    var a = e.subCateList.map(function (t) {
                        return "category" === e.cateType ? {
                            name: t.name,
                            bannerUrl: t.bannerUrl,
                            url: (this.props.options.host || "") + "/item/list?categoryId=" + e.id + "&subCategoryId=" + t.id
                        } : {
                            name: t.title,
                            bannerUrl: t.scenePicUrl,
                            url: t.linkUrl ? t.linkUrl : (this.props.options.host || "") + "/topic/list?activeType=" + t.type + "&title=" + t.title
                        }
                    }.bind(this));
                    this.state.stateSubCateList[t] = a, this.setState({
                        stateSubCateList: this.state.stateSubCateList
                    })
                }
                $(this.refs["navDropdown" + t]).stop(!0, !0).fadeIn(200)
            }
        },
        handleMouseLeave: function (e, t, i) {
            if ("block" == this.fixedSearchInputMiddleStatus && (this.fixedSearchInputMiddleStatus = "none", this.props.showFixedSearchInput()), e.subCateList) {
                var a = $(this.refs["navDropdown" + t]),
                    n = $(i.relatedTarget);
                if (n.hasClass("yx-cp-tabNav-item")) {
                    var o = n.find(".yx-cp-tabNav-dropdown");
                    a.stop(!0, !0).hide(), o.stop(!0, !0).show()
                } else a.stop(!0, !0).fadeOut(200)
            }
        },
        render: function () {
            this.generateCateList();
            var e = this.navCateList.length;
            return React.createElement("ul", {
                className: "yx-cp-m-tabNav"
            }, this.navCateList.map(function (e, t) {
                return this.getNavCate(e, t)
            }.bind(this)), React.createElement("li", {
                className: "yx-cp-tabNav-split yx-cp-funcTabFixed-hide"
            }), this.navCateExtList.map(function (t, i) {
                return i += e, this.getNavCate(t, i)
            }.bind(this)))
        },
        generateCateList: function () {
            var e = this.props.options.host || "//you.163.com";
            this.navCateList = [], this.navCateExtList = [], this.navCateList.push({
                pageCode: "index",
                name: "首页",
                url: e + "/",
                clsName: "yx-cp-firstItem"
            }), this.props.global.cateList && this.props.global.cateList.map(function (t) {
                this.navCateList.push({
                    pageCode: "cate" + t.id,
                    name: t.name,
                    url: e + "/item/list?categoryId=" + t.id,
                    subCateList: t.subCateList,
                    cateType: "category",
                    id: t.id
                })
            }.bind(this)), this.navCateExtList.push({
                pageCode: "topicIndex",
                name: "为你严选",
                url: e + "/topic/index",
                clsName: "yx-cp-funcTabFixed-hide",
                subCateList: this.props.global.topicList || [],
                cateType: "topicList"
            }), this.navCateExtList.push({
                pageCode: "expert",
                name: "众筹",
                url: e + "/zc/project/list",
                clsName: "yx-cp-funcTabFixed-hide yx-cp-lastItem",
                subCateList: [],
                cateType: "crowdfunding"
            })
        },
        resizeCatecard: function () {
            var e = $("body"),
                t = $(".j-yx-cp-dropdown-cateCard"),
                i = e.width();
            t.css({
                width: i,
                left: -i / 2
            })
        },
        getNavCate: function (e, t) {
            return React.createElement("li", {
                onMouseEnter: this.handleMouseEnter. (null, e, t),
                onMouseLeave: this.handleMouseLeave.bind(null, e, t),
                key: t,
                className: "yx-cp-tabNav-item " + (this.props.options.currentPage == e.pageCode ? "yx-cp-active " : " ") + (e.clsName || "")
            }, React.createElement("a", {
                onClick: this.clickIndexNavtabStat.bind(null, e.name, t),
                className: "yx-cp-topLevel",
                href: this.getNavUrl(e.url, t),
                title: e.name,
                target: "_blank"
            }, e.name), e.subCateList && e.subCateList.length > 0 ? this.getDropdown(t) : null)
        },
        getDropdown: function (e) {
            return React.createElement("div", {
                className: "yx-cp-tabNav-dropdown",
                ref: "navDropdown" + e
            }, React.createElement("div", {
                className: "yx-cp-dropdown-cateCard j-yx-cp-dropdown-cateCard"
            }, React.createElement("ul", {
                className: "yx-cp-dropdown-cateCardList"
            }, this.state.stateSubCateList[e] && this.state.stateSubCateList[e].map(function (e, t) {
                return React.createElement("li", {
                    className: "yx-cp-dropdown-item",
                    key: t,
                    style: {
                        marginRight: t % 7 === 6 ? "0" : "102px"
                    }
                }, React.createElement("a", {
                    className: "yx-cp-item-subCate",
                    href: e.url,
                    title: e.name,
                    target: "_blank"
                }, React.createElement("img", {
                    className: "yx-cp-subCate-icon",
                    src: e.bannerUrl,
                    alt: e.name
                }), React.createElement("p", {
                    className: "yx-cp-subCate-text"
                }, e.name)))
            }))))
        },
        getNavUrl: function (e, t) {
            var i = "?";
            return e.indexOf("?") > -1 && (i = "&"), i += "_stat_area=nav_" + (t + 1), "index" == this.props.options.currentPage && (i += "&_stat_referer=index"), e + i
        },
        clickIndexNavtabStat: function (e, t) {
            "index" == window.CURRENTPAGE && window.YXStat && window.YXStat.q && window.YXStat.q.push(["track_click", {
                event_name: "click_index_navtab",
                page_name: "index",
                parameters: {
                    name: e,
                    sequen: t + 1
                }
            }])
        },
        fixedSearchInputMiddleStatus: "none"
    });
    e.exports = a
}, function (e, t) {}, function (e, t, i) {
    i(101);
    var a = i(33),
        n = i(102),
        o = React.createClass({
            displayName: "Cart",
            getInitialState: function () {
                return {
                    isDisplayMiniCart: !1,
                    cartNum: 0,
                    cartBadgeClass: "icon-yxtop-badge",
                    miniCartData: null
                }
            },
            componentDidMount: function () {
                this.updateCartNum();
                var e = this.$cartNum = $(this.refs.cartNum),
                    t = this.$minCart = $(this.refs.minCart);
                e.on("refreshCartNum", this.updateCartNum), e.on("addCartItem", function () {
                    this.updateCartNum(), t.is(":animated") || this.getMiniCartData(this.miniCartAnimation), "/cart/itemPool" == window.location.pathname && $(window).trigger("updateItemPoolTotalPrice")
                }.bind(this))
            },
            handleMouseEnter: function () {
                return this.isInCartPage() ? !1 : (this.getMiniCartData(), this.updateCartNum(), void this.setState({
                    isDisplayMiniCart: !0
                }))
            },
            handleMouseLeave: function () {
                $(".j-yx-cp-cartInfo").scrollTop(0), this.setState({
                    isDisplayMiniCart: !1
                })
            },
            handleMouseEnterMiniCart: function () {
                this.forbidBodyScroll(), this.$minCart.stop(!0, !0), clearTimeout(this.minCartTimer)
            },
            handleMouseLeaveMiniCart: function () {
                this.enableBodyScroll()
            },
            handleDeleteItem: function (e, t) {
                t.stopPropagation(), this.miniCartInnerScrollTop = $(".j-yx-cp-cartInfo").scrollTop(), this.deleteCartItem(e)
            },
            handleDeleteSuit: function (e, t) {
                t.stopPropagation(), this.miniCartInnerScrollTop = $(".j-yx-cp-cartInfo").scrollTop(), this.deleteCartSuitItem(e)
            },
            handleClick: function () {
                window.location.href = (this.props.options.host || "") + "/cart"
            },
            renderMiniCart: function (e) {
                var t = e.data;
                0 == t.groupList.length && 0 == t.invalidCartGroupList.length && this.enableBodyScroll(), this.miniCartInnerScrollTop && ($(".j-yx-cp-cartInfo").scrollTop(this.miniCartInnerScrollTop), this.miniCartInnerScrollTop = 0), this.setState({
                    miniCartData: t
                })
            },
            render: function () {
                var e = this.state.miniCartData;
                return React.createElement("div", {
                    className: "yx-cp-m-cartEnterWrap yx-cp-zIndex3",
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave
                }, React.createElement("div", {
                    className: "yx-cp-m-cartEnter",
                    onClick: this.handleClick
                }, React.createElement("i", {
                    ref: "cartNum",
                    className: "j-cart-num j-cart-num2 yx-cp-icon-yxtop " + this.state.cartBadgeClass
                }, this.state.cartNum), React.createElement("i", {
                    className: "yx-cp-icon-yxtop icon-yxtop-cart"
                })), React.createElement("div", {
                    className: "yx-cp-m-miniCart",
                    ref: "minCart",
                    onMouseEnter: this.handleMouseEnterMiniCart,
                    onMouseLeave: this.handleMouseLeaveMiniCart,
                    style: {
                        display: this.state.isDisplayMiniCart ? "block" : "none"
                    }
                }, e && (e.groupList.length > 0 || e.invalidCartGroupList.length > 0) ? React.createElement("div", {
                    className: "yx-cp-wrap"
                }, React.createElement("i", {
                    className: "yx-cp-tw-1"
                }), React.createElement("i", {
                    className: "yx-cp-tw-2"
                }), React.createElement("div", {
                    className: "yx-cp-cartInfo j-yx-cp-cartInfo"
                }, e.groupList.length > 0 ? this.getCartInfo(e.groupList, "groupList") : null, e.invalidCartGroupList.length > 0 ? React.createElement("div", {
                    className: "yx-cp-invalidTitle"
                }, "以下商品已失效") : null, e.invalidCartGroupList.length > 0 ? this.getCartInfo(e.invalidCartGroupList, "invalidCartGroupList") : null), React.createElement("div", {
                    className: "yx-cp-cartBottom"
                }, React.createElement("div", {
                    className: "yx-cp-totalPrice"
                }, React.createElement("span", {
                    style: {
                        color: "#999"
                    }
                }, "商品合计:"), React.createElement("br", null), React.createElement("span", null, "¥", Number(e.totalPrice).toFixed(2), e.totalPoint > 0 && React.createElement("span", null, "+", e.totalPoint, "积分"))), React.createElement("div", {
                    className: "yx-cp-goToCart"
                }, React.createElement("a", {
                    className: "yx-cp-btn yx-w-button yx-w-button-primary",
                    href: this.props.options.host + "/cart",
                    target: "_blank"
                }, "去购物车结算")))) : null))
            },
            updateCartNum: function () {
                n.getMiniCartNum().done(function (e) {
                    e.data > 99 ? this.setState({
                        cartNum: "99+",
                        cartBadgeClass: "icon-yxtop-badge-l"
                    }) : this.setState({
                        cartNum: e.data,
                        cartBadgeClass: "icon-yxtop-badge"
                    })
                }.bind(this))
            },
            getMiniCartData: function (e) {
                var t = n.getMiniCart();
                t.done(function (t) {
                    this.renderMiniCart(t), e && setTimeout(function () {
                        e()
                    }, 10)
                }.bind(this))
            },
            miniCartAnimation: function () {
                this.$minCart.slideDown(500, function () {
                    this.minCartTimer = setTimeout(function () {
                        this.$minCart.stop(!0, !1).slideUp(300)
                    }.bind(this), 2e3)
                }.bind(this))
            },
            forbidBodyScroll: function () {
                var e = $("body").width();
                $("body").css({
                    overflow: "hidden",
                    width: "auto"
                });
                var t = $("body").width();
                $("body").css("marginRight", t - e), $(".yx-commonFixedCls").css("marginRight", Math.floor((t - e) / 2)), $(".yx-commonFixedCls-noRatioCenter").css("marginRight", t - e), $(".yx-cp-m-funcTab-fixed").css("paddingRight", t - e), this.fixedToolRight = Number.parseInt($(".j-yx-cp-fixedtool").css("right")), $(".j-yx-cp-fixedtool").css("right", this.fixedToolRight + t - e), this.props.onEventEmitter("miniCartMouseIn")
            },
            enableBodyScroll: function () {
                $("body").css({
                    overflow: "auto",
                    marginRight: 0
                }), $(".yx-commonFixedCls").css("marginRight", 0), $(".yx-commonFixedCls-noRatioCenter").css("marginRight", 0), $(".yx-cp-m-funcTab-fixed").css("paddingRight", 0), $(".j-yx-cp-fixedtool").css("right", this.fixedToolRight), this.props.onEventEmitter("miniCartMouseOut")
            },
            getCartInfo: function (e, t) {
                return React.createElement("div", {
                    className: "yx-cp-cartInfo-inner"
                }, e.map(function (e, i) {
                    var a = "";
                    if (a = e.cartItemList.map(function (e, i) {
                            var a = "";
                            null != e.preSellStatus && 1 == e.preSellStatus ? 0 == e.preSellVolume && (a = React.createElement("p", {
                                className: "yx-cp-sellOut"
                            }, "已售罄")) : (e.valid && 0 == e.sellVolume && (a = React.createElement("p", {
                                className: "yx-cp-sellOut"
                            }, "已售罄")), ("invalidCartGroupList" !== t || e.valid && 2 == e.status) && ("groupList" !== t || e.valid) || (a = React.createElement("p", {
                                className: "yx-cp-offShift"
                            }, "已下架")));
                            var n = "";
                            e.specList.map(function (e) {
                                n += e.specValue + " "
                            });
                            var o = this.props.options.host + "/item/detail?id=" + e.itemId;
                            return 6 == e.type && (o += "&itemType=6&source=" + e.source), React.createElement("div", {
                                key: i,
                                className: "yx-cp-cartItem " + ("invalidCartGroupList" === t ? "yx-cp-invalid" : "")
                            }, React.createElement("div", {
                                className: "yx-cp-item yx-cp-item-left"
                            }, React.createElement("a", {
                                href: o,
                                target: "_blank"
                            }, React.createElement("img", {
                                src: e.pic + "?quality=90&thumbnail=60x60&imageView"
                            })), a), React.createElement("div", {
                                className: "yx-cp-item yx-cp-item-middle"
                            }, React.createElement("p", null, React.createElement("a", {
                                href: o,
                                title: e.itemName,
                                target: "_blank"
                            }, e.itemName)), React.createElement("p", null, React.createElement("span", {
                                className: "yx-cp-specValue",
                                title: n
                            }, n), React.createElement("span", {
                                className: "yx-cp-count"
                            }, "x ", e.cnt))), React.createElement("div", {
                                className: "yx-cp-item yx-cp-item-right"
                            }, React.createElement("p", {
                                className: "yx-cp-price"
                            }, 6 == e.type ? React.createElement("span", null, e.retailPoint, "积分") : React.createElement("span", null, "¥", Number(e.actualPrice).toFixed(2))), React.createElement("p", {
                                className: "yx-cp-deleteItem",
                                onClick: this.handleDeleteItem.bind(null, e)
                            }, React.createElement("i", {
                                className: "yx-cp-icon-yxclose icon-yxclose-close11"
                            }))))
                        }.bind(this)), e.promType && 105 === e.promType) {
                        var n = "yx-cp-suitCart ";
                        return "invalidCartGroupList" === t ? n += " yx-cp-disValidSuit" : "groupList" === t && 1 === e.suitStatus && (n += " yx-cp-disValidSuit"), 0 === i && (n += " yx-cp-firstSuit"), React.createElement("div", {
                            className: n,
                            key: i
                        }, React.createElement("div", {
                            className: "yx-cp-suitCartHd"
                        }, React.createElement("span", {
                            className: "yx-cp-suitFlag"
                        }, "套装"), React.createElement("span", {
                            className: "yx-cp-suitIntro"
                        }, React.createElement("span", {
                            className: "yx-cp-suitName yx-f-text-overflow yx-f-word-break",
                            title: e.suitName
                        }, e.suitName), React.createElement("span", {
                            className: "yx-cp-suitCount"
                        }, "x", e.suitCount)), React.createElement("span", {
                            className: "yx-cp-suitPrice"
                        }, "¥", e.suitTotalPrice.toFixed(2)), React.createElement("span", {
                            className: "yx-cp-deleteSuit",
                            onClick: this.handleDeleteSuit.bind(null, e.promId)
                        }, React.createElement("i", {
                            className: "yx-cp-icon-yxclose icon-yxclose-close11"
                        }))), a)
                    }
                    return a
                }.bind(this)))
            },
            deleteCartItem: function (e) {
                var t = {
                    skuId: e.skuId,
                    type: e.type,
                    promId: e.source
                };
                e.extId && (t.extId = e.extId);
                var i = n.deleteCart({
                    selectedSku: JSON.stringify({
                        skuList: [t]
                    })
                });
                i.then(function () {
                    this.getMiniCartData(), this.updateCartNum(), this.props.onEventEmitter("miniCartDelete")
                }.bind(this), function (e, t) {
                    a.notify(t || "删除购物车失败", "error"), this.getMiniCartData()
                }.bind(this))
            },
            deleteCartSuitItem: function (e) {
                var t = n.deleteCart({
                    selectedSku: JSON.stringify({
                        skuList: [{
                            promId: e,
                            type: 1
                        }]
                    })
                });
                t.then(function () {
                    this.getMiniCartData(), this.updateCartNum()
                }.bind(this), function (e, t) {
                    a.notify(t || "删除购物车失败", "error"), this.getMiniCartData()
                }.bind(this))
            },
            isInCartPage: function () {
                var e, t = window.location.pathname;
                return e = t.indexOf("/cart") >= 0 && t.indexOf("/itemPool") < 0
            }
        });
    e.exports = o
}, function (e, t) {}, function (e, t, i) {
    var a = i(11),
        n = window.seckillUniqueFlag ? "/xhr/seckill" : "/xhr";
    e.exports = a("/xhr/cart", [{
        name: "add",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "updateByNum",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "updateByCheck",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "selectAll",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "choosePromotion",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "updateSkuSpec",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "delete",
        alias: "deleteCart"
    }, "getCarts", "getMiniCart", {
        name: "selectGift",
        ajaxConfig: {
            contentType: "application/json"
        }
    }, {
        name: "selectAddBuy",
        ajaxConfig: {
            contentType: "application/json"
        }
    }, {
        name: "getMiniCartNum",
        ajaxConfig: {
            type: "GET"
        },
        path: n + "/cart"
    }, {
        name: "rcmd",
        alias: "getRcmdItems",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "addSuit",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "updateSuitCount",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "updateSuitCheck",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "clearInvalidItem",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "rebuy",
        ajaxConfig: {
            type: "GET"
        }
    }, {
        name: "collect",
        ajaxConfig: {
            contentType: "application/json"
        }
    }])
}, function (e, t) {
    e.exports = React.createClass({
        displayName: "exports",
        render: function () {
            return React.createElement("div", {
                className: "yx-cp-m-dropdownMenu",
                style: this.props.style ? this.props.style : {
                    right: "-10px"
                }
            }, React.createElement("span", {
                className: "yx-cp-dropdownMenuItem j-yx-cp-topLogin",
                ref: "login",
                title: "网易严选登录",
                onClick: this.props.onLogin
            }, "登录"), React.createElement("a", {
                className: "yx-cp-dropdownMenuItem j-yx-cp-register",
                href: "javascript:;",
                onClick: this.props.onRegister
            }, "注册"), React.createElement("i", {
                className: "yx-cp-icon-yxtop icon-yxtop-upArrowshadow"
            }))
        }
    })
}, function (e, t) {}, function (e, t) {}]);